import { existsSync, promises as fsp } from "fs"
import { resolve } from "pathe"
import type { ModuleMeta } from "@nuxt/schema"
import { findExports } from "mlly"

interface BuildModuleOptions {
  rootDir: string
  srcDir?: string
  sourcemap?: boolean
  stub?: boolean
  outDir?: string
}

/**
 * Original source: https://github.com/nuxt/module-builder/blob/main/src/build.ts
 * @param opts - options
 */
export async function buildModule(opts: BuildModuleOptions) {
  const { build } = await import("unbuild")

  const outDir = opts.outDir || "dist"
  const srcDir = opts.srcDir || "src"

  await build(opts.rootDir, false, {
    clean: false, // auto-animate’s build does its own cleaning
    failOnWarn: false, // unbuild will validate the package.json, but we don’t want to fail on warnings
    declaration: true,
    sourcemap: opts.sourcemap,
    stub: opts.stub,
    outDir,
    entries: [
      { input: `${srcDir}/module`, outDir: `${outDir}/nuxt` },
      { input: `${srcDir}/runtime/`, outDir: `${outDir}/nuxt/runtime`, ext: "mjs" },
    ],
    rollup: {
      emitCJS: false,
      cjsBridge: false,
    },
    externals: [
      "@nuxt/schema",
      "@nuxt/schema-edge",
      "@nuxt/kit",
      "@nuxt/kit-edge",
      "nuxt",
      "nuxt-edge",
      "nuxt3",
      "vue",
      "vue-demi",
    ],
    hooks: {
      async "rollup:done"(ctx) {
        const outDir = resolve(ctx.options.outDir, 'nuxt')
        // Generate CommonJS stub
        await writeCJSStub(outDir)

        // This build runs through jiti, which cannot evaluate @nuxt/kit's import.meta usage.
        const moduleMeta = await readModuleMeta(
          resolve(opts.rootDir, `${srcDir}/module.ts`),
          ctx.pkg
        )

        // Enhance meta using package.json
        if (ctx.pkg) {
          if (!moduleMeta.name) {
            moduleMeta.name = ctx.pkg.name
          }
          if (!moduleMeta.version) {
            moduleMeta.version = ctx.pkg.version
          }
        }

        // Write meta
        const metaFile = resolve(outDir, "module.json")
        await fsp.writeFile(
          metaFile,
          JSON.stringify(moduleMeta, null, 2),
          "utf8"
        )

        // Generate types
        await writeTypes(outDir, moduleMeta)
      },
    },
  })
}

async function readModuleMeta(
  moduleFile: string,
  pkg?: { name?: string; version?: string }
): Promise<Partial<ModuleMeta>> {
  const source = await fsp.readFile(moduleFile, "utf8").catch(() => "")
  const moduleMeta: Partial<ModuleMeta> = {}

  const nameMatch = source.match(/name:\s*["'`]([^"'`]+)["'`]/)
  if (nameMatch) {
    moduleMeta.name = nameMatch[1]
  }

  const configKeyMatch = source.match(/configKey:\s*["'`]([^"'`]+)["'`]/)
  if (configKeyMatch) {
    moduleMeta.configKey = configKeyMatch[1]
  }

  if (pkg?.name && !moduleMeta.name) {
    moduleMeta.name = pkg.name
  }
  if (pkg?.version) {
    moduleMeta.version = pkg.version
  }

  return moduleMeta
}

async function writeTypes(distDir: string, meta: Partial<ModuleMeta>) {
  const dtsFile = resolve(distDir, "types.d.ts")
  const dtsFileMts = resolve(distDir, "types.d.mts")
  if (existsSync(dtsFile)) {
    return
  }

  // Read generated module types
  const moduleTypesFile = resolve(distDir, "module.d.ts")
  const moduleTypes = await fsp
    .readFile(moduleTypesFile, "utf8")
    .catch(() => "")
  const typeExports = findExports(
    // Replace `export { type Foo }` with `export { Foo }`
    moduleTypes.replace(/export\s*{.*?}/gs, (match) =>
      match.replace(/\b(type|interface)\b/g, "")
    )
  )
  const isStub = moduleTypes.includes("export *")

  const schemaShims = []
  const moduleImports = []
  const schemaImports = []
  const moduleExports = []
  const namedExports = typeExports.flatMap((exp) =>
    exp.names.filter((name) => name !== "default")
  )

  const hasTypeExport = (name: string) =>
    isStub || typeExports.find((exp) => exp.names.includes(name))

  if (meta.configKey && !hasTypeExport("ModuleOptions")) {
    schemaImports.push("NuxtModule")
    moduleImports.push("default as Module")
    moduleExports.push(
      "export type ModuleOptions = typeof Module extends NuxtModule<infer O> ? Partial<O> : Record<string, any>"
    )
  } else if (hasTypeExport("ModuleOptions")) {
    moduleImports.push("ModuleOptions")
  }

  if (meta.configKey) {
    schemaShims.push(
      `  interface NuxtConfig { ['${meta.configKey}']?: Partial<ModuleOptions> }`
    )
    schemaShims.push(
      `  interface NuxtOptions { ['${meta.configKey}']?: ModuleOptions }`
    )
  }
  if (hasTypeExport("ModuleHooks")) {
    moduleImports.push("ModuleHooks")
    schemaShims.push("  interface NuxtHooks extends ModuleHooks {}")
  }
  if (hasTypeExport("ModuleRuntimeConfig")) {
    moduleImports.push("ModuleRuntimeConfig")
    schemaShims.push("  interface RuntimeConfig extends ModuleRuntimeConfig {}")
  }
  if (hasTypeExport("ModulePublicRuntimeConfig")) {
    moduleImports.push("ModulePublicRuntimeConfig")
    schemaShims.push(
      "  interface PublicRuntimeConfig extends ModulePublicRuntimeConfig {}"
    )
  }

  const dtsContents = `
${schemaImports.length ? `import type { ${schemaImports.join(", ")} } from '@nuxt/schema'` : ""}
${moduleImports.length ? `import type { ${moduleImports.join(", ")} } from './module'` : ""}

${
  schemaShims.length
    ? `declare module '@nuxt/schema' {\n${schemaShims.join("\n")}\n}\n`
    : ""
}
${
  schemaShims.length
    ? `declare module 'nuxt/schema' {\n${schemaShims.join("\n")}\n}\n`
    : ""
}
${moduleExports.join("\n")}
${namedExports.length ? `export { ${namedExports.map((name) => `type ${name}`).join(", ")} } from './module'` : ""}
`

  await fsp.writeFile(dtsFile, dtsContents, "utf8")
  if (!existsSync(dtsFileMts)) {
    await fsp.writeFile(
      dtsFileMts,
      dtsContents.replace(/'\.\/module'/g, "'./module.mjs'"),
      "utf8"
    )
  }
}

async function writeCJSStub(distDir: string) {
  const cjsStubFile = resolve(distDir, "module.cjs")
  if (existsSync(cjsStubFile)) {
    return
  }
  const cjsStub = `module.exports = function(...args) {
  return import('./module.mjs').then(m => m.default.call(this, ...args))
}
const _meta = module.exports.meta = require('./module.json')
module.exports.getMeta = () => Promise.resolve(_meta)
`
  await fsp.writeFile(cjsStubFile, cjsStub, "utf8")
}
