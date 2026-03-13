import { n as colors } from "./dist-0DfurPla.mjs";
import "./utils-D5jIbZ8_.mjs";
import { t as defineCommand } from "./dist-BBpbTs93.mjs";
import { o as logLevelArgs, t as cwdArgs } from "./_shared-CThtxn2Y.mjs";
import { _ as Ct, m as qt, n as logger, o as Mt } from "./logger-O9Su9xI5.mjs";
import { t as runCommand } from "./run-C_Qia6Nn.mjs";
import "./defu-B9sWDZZ9.mjs";
import { a as resolveModulePath, r as relativeToProcess } from "./kit-mAWtuYKF.mjs";
import { n as joinURL } from "./dist-B4gHKTcr.mjs";
import { a as join$1, c as resolve$1, o as normalize$1 } from "./pathe.M-eThtNZ-C6qzirxH.mjs";
import { r as readPackageJSON } from "./dist-z8aedaRt.mjs";
import "./satisfies-C79zCZRN.mjs";
import { i as require_semver, t as getNuxtVersion } from "./versions-BUwGlDsD.mjs";
import "./fs-DfmpLQNk.mjs";
import "./main-BgvXMeoL.mjs";
import { r as detectPackageManager, t as addDependency } from "./nypm.CLjaS_sz-CuB4zfXi.mjs";
import "./jiti-DkvQ2T8W.mjs";
import "./node-CMepL6rW.mjs";
import { i as $fetch, n as fetchModules, r as getRegistryFromContent, t as checkNuxtCompatibility } from "./_utils-DoPHcWHU.mjs";
import { t as prepare_default } from "./prepare-BaKPesqF.mjs";
import { dirname, extname, join } from "node:path";
import process from "node:process";
import * as fs$1 from "node:fs";
import { existsSync } from "node:fs";
import { homedir } from "node:os";
import { mkdir, readFile, writeFile } from "node:fs/promises";

//#region ../../node_modules/.pnpm/c12@3.3.2_magicast@0.5.1/node_modules/c12/dist/update.mjs
const SUPPORTED_EXTENSIONS = Object.freeze([
	".js",
	".ts",
	".mjs",
	".cjs",
	".mts",
	".cts",
	".json",
	".jsonc",
	".json5",
	".yaml",
	".yml",
	".toml"
]);
const UPDATABLE_EXTS = [
	".js",
	".ts",
	".mjs",
	".cjs",
	".mts",
	".cts"
];
/**
* @experimental Update a config file or create a new one.
*/
async function updateConfig(opts) {
	const { parseModule } = await import("./dist-Bln7msKE.mjs");
	let configFile = tryResolve(`./${opts.configFile}`, opts.cwd, SUPPORTED_EXTENSIONS) || tryResolve(`./.config/${opts.configFile}`, opts.cwd, SUPPORTED_EXTENSIONS) || tryResolve(`./.config/${opts.configFile.split(".")[0]}`, opts.cwd, SUPPORTED_EXTENSIONS);
	let created = false;
	if (!configFile) {
		configFile = join$1(opts.cwd, opts.configFile + (opts.createExtension || ".ts"));
		const createResult = await opts.onCreate?.({ configFile }) ?? true;
		if (!createResult) throw new Error("Config file creation aborted.");
		const content = typeof createResult === "string" ? createResult : `export default {}\n`;
		await mkdir(dirname(configFile), { recursive: true });
		await writeFile(configFile, content, "utf8");
		created = true;
	}
	const ext = extname(configFile);
	if (!UPDATABLE_EXTS.includes(ext)) throw new Error(`Unsupported config file extension: ${ext} (${configFile}) (supported: ${UPDATABLE_EXTS.join(", ")})`);
	const _module = parseModule(await readFile(configFile, "utf8"), opts.magicast);
	const defaultExport = _module.exports.default;
	if (!defaultExport) throw new Error("Default export is missing in the config file!");
	const configObj = defaultExport.$type === "function-call" ? defaultExport.$args[0] : defaultExport;
	await opts.onUpdate?.(configObj);
	await writeFile(configFile, _module.generate().code);
	return {
		configFile,
		created
	};
}
function tryResolve(path$1, cwd$1, extensions) {
	const res = resolveModulePath(path$1, {
		try: true,
		from: join$1(cwd$1, "/"),
		extensions,
		suffixes: ["", "/index"],
		cache: false
	});
	return res ? normalize$1(res) : void 0;
}

//#endregion
//#region src/commands/module/add.ts
var import_semver = require_semver();
var add_default = defineCommand({
	meta: {
		name: "add",
		description: "Add Nuxt modules"
	},
	args: {
		...cwdArgs,
		...logLevelArgs,
		moduleName: {
			type: "positional",
			description: "Specify one or more modules to install by name, separated by spaces"
		},
		skipInstall: {
			type: "boolean",
			description: "Skip npm install"
		},
		skipConfig: {
			type: "boolean",
			description: "Skip nuxt.config.ts update"
		},
		dev: {
			type: "boolean",
			description: "Install modules as dev dependencies"
		}
	},
	async setup(ctx) {
		const cwd$1 = resolve$1(ctx.args.cwd);
		const modules = ctx.args._.map((e) => e.trim()).filter(Boolean);
		const projectPkg = await readPackageJSON(cwd$1).catch(() => ({}));
		if (!projectPkg.dependencies?.nuxt && !projectPkg.devDependencies?.nuxt) {
			logger.warn(`No ${colors.cyan("nuxt")} dependency detected in ${colors.cyan(relativeToProcess(cwd$1))}.`);
			const shouldContinue = await Mt({
				message: `Do you want to continue anyway?`,
				initialValue: false
			});
			if (Ct(shouldContinue) || shouldContinue !== true) process.exit(1);
		}
		const resolvedModules = (await Promise.all(modules.map((moduleName) => resolveModule(moduleName, cwd$1)))).filter((x) => x != null);
		logger.info(`Resolved ${resolvedModules.map((x) => colors.cyan(x.pkgName)).join(", ")}, adding module${resolvedModules.length > 1 ? "s" : ""}...`);
		await addModules(resolvedModules, {
			...ctx.args,
			cwd: cwd$1
		}, projectPkg);
		if (!ctx.args.skipInstall) await runCommand(prepare_default, Object.entries(ctx.args).filter(([k]) => k in cwdArgs || k in logLevelArgs).map(([k, v]) => `--${k}=${v}`));
	}
});
async function addModules(modules, { skipInstall, skipConfig, cwd: cwd$1, dev }, projectPkg) {
	if (!skipInstall) {
		const installedModules = [];
		const notInstalledModules = [];
		const dependencies = new Set([...Object.keys(projectPkg.dependencies || {}), ...Object.keys(projectPkg.devDependencies || {})]);
		for (const module of modules) if (dependencies.has(module.pkgName)) installedModules.push(module);
		else notInstalledModules.push(module);
		if (installedModules.length > 0) {
			const installedModulesList = installedModules.map((module) => colors.cyan(module.pkgName)).join(", ");
			const are = installedModules.length > 1 ? "are" : "is";
			logger.info(`${installedModulesList} ${are} already installed`);
		}
		if (notInstalledModules.length > 0) {
			const isDev = Boolean(projectPkg.devDependencies?.nuxt) || dev;
			const notInstalledModulesList = notInstalledModules.map((module) => colors.cyan(module.pkg)).join(", ");
			const dependency = notInstalledModules.length > 1 ? "dependencies" : "dependency";
			const a = notInstalledModules.length > 1 ? "" : " a";
			logger.info(`Installing ${notInstalledModulesList} as${a}${isDev ? " development" : ""} ${dependency}`);
			const packageManager = await detectPackageManager(cwd$1);
			if (await addDependency(notInstalledModules.map((module) => module.pkg), {
				cwd: cwd$1,
				dev: isDev,
				installPeerDependencies: true,
				packageManager,
				workspace: packageManager?.name === "pnpm" && existsSync(resolve$1(cwd$1, "pnpm-workspace.yaml"))
			}).then(() => true).catch(async (error) => {
				logger.error(error);
				const result = await Mt({
					message: `Install failed for ${notInstalledModules.map((module) => colors.cyan(module.pkg)).join(", ")}. Do you want to continue adding the module${notInstalledModules.length > 1 ? "s" : ""} to ${colors.cyan("nuxt.config")}?`,
					initialValue: false
				});
				if (Ct(result)) return false;
				return result;
			}) !== true) return;
		}
	}
	if (!skipConfig) await updateConfig({
		cwd: cwd$1,
		configFile: "nuxt.config",
		async onCreate() {
			logger.info(`Creating ${colors.cyan("nuxt.config.ts")}`);
			return getDefaultNuxtConfig();
		},
		async onUpdate(config) {
			if (!config.modules) config.modules = [];
			for (const resolved of modules) {
				if (config.modules.includes(resolved.pkgName)) {
					logger.info(`${colors.cyan(resolved.pkgName)} is already in the ${colors.cyan("modules")}`);
					continue;
				}
				logger.info(`Adding ${colors.cyan(resolved.pkgName)} to the ${colors.cyan("modules")}`);
				config.modules.push(resolved.pkgName);
			}
		}
	}).catch((error) => {
		logger.error(`Failed to update ${colors.cyan("nuxt.config")}: ${error.message}`);
		logger.error(`Please manually add ${colors.cyan(modules.map((module) => module.pkgName).join(", "))} to the ${colors.cyan("modules")} in ${colors.cyan("nuxt.config.ts")}`);
		return null;
	});
}
function getDefaultNuxtConfig() {
	return `
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: []
})`;
}
const packageRegex = /^(@[a-z0-9-~][a-z0-9-._~]*\/)?([a-z0-9-~][a-z0-9-._~]*)(@[^@]+)?$/;
async function resolveModule(moduleName, cwd$1) {
	let pkgName = moduleName;
	let pkgVersion;
	const reMatch = moduleName.match(packageRegex);
	if (reMatch) {
		if (reMatch[3]) {
			pkgName = `${reMatch[1] || ""}${reMatch[2] || ""}`;
			pkgVersion = reMatch[3].slice(1);
		}
	} else {
		logger.error(`Invalid package name ${colors.cyan(pkgName)}.`);
		return false;
	}
	const matchedModule = (await fetchModules().catch((err) => {
		logger.warn(`Cannot search in the Nuxt Modules database: ${err}`);
		return [];
	})).find((module) => module.name === moduleName || pkgVersion && module.name === pkgName || module.npm === pkgName || module.aliases?.includes(pkgName));
	if (matchedModule?.npm) pkgName = matchedModule.npm;
	if (matchedModule && matchedModule.compatibility.nuxt) {
		const nuxtVersion = await getNuxtVersion(cwd$1);
		if (!checkNuxtCompatibility(matchedModule, nuxtVersion)) {
			logger.warn(`The module ${colors.cyan(pkgName)} is not compatible with Nuxt ${colors.cyan(nuxtVersion)} (requires ${colors.cyan(matchedModule.compatibility.nuxt)})`);
			const shouldContinue = await Mt({
				message: "Do you want to continue installing incompatible version?",
				initialValue: false
			});
			if (Ct(shouldContinue) || !shouldContinue) return false;
		}
		const versionMap = matchedModule.compatibility.versionMap;
		if (versionMap) {
			for (const [_nuxtVersion, _moduleVersion] of Object.entries(versionMap)) if ((0, import_semver.satisfies)(nuxtVersion, _nuxtVersion)) {
				if (!pkgVersion) pkgVersion = _moduleVersion;
				else {
					logger.warn(`Recommended version of ${colors.cyan(pkgName)} for Nuxt ${colors.cyan(nuxtVersion)} is ${colors.cyan(_moduleVersion)} but you have requested ${colors.cyan(pkgVersion)}.`);
					const result = await qt({
						message: "Choose a version:",
						options: [{
							value: _moduleVersion,
							label: _moduleVersion
						}, {
							value: pkgVersion,
							label: pkgVersion
						}]
					});
					if (Ct(result)) return false;
					pkgVersion = result;
				}
				break;
			}
		}
	}
	let version = pkgVersion || "latest";
	const meta = await detectNpmRegistry(pkgName.startsWith("@") ? pkgName.split("/")[0] : null);
	const headers = {};
	if (meta.authToken) headers.Authorization = `Bearer ${meta.authToken}`;
	const pkgDetails = await $fetch(joinURL(meta.registry, `${pkgName}`), { headers });
	if (pkgDetails["dist-tags"]?.[version]) version = pkgDetails["dist-tags"][version];
	else version = Object.keys(pkgDetails.versions)?.findLast((v) => (0, import_semver.satisfies)(v, version)) || version;
	const pkg = pkgDetails.versions[version];
	const pkgDependencies = Object.assign(pkg.dependencies || {}, pkg.devDependencies || {});
	if (!pkgDependencies.nuxt && !pkgDependencies["nuxt-edge"] && !pkgDependencies["@nuxt/kit"]) {
		logger.warn(`It seems that ${colors.cyan(pkgName)} is not a Nuxt module.`);
		const shouldContinue = await Mt({
			message: `Do you want to continue installing ${colors.cyan(pkgName)} anyway?`,
			initialValue: false
		});
		if (Ct(shouldContinue) || !shouldContinue) return false;
	}
	return {
		nuxtModule: matchedModule,
		pkg: `${pkgName}@${version}`,
		pkgName,
		pkgVersion: version
	};
}
function getNpmrcPaths() {
	const userNpmrcPath = join(homedir(), ".npmrc");
	return [join(process.cwd(), ".npmrc"), userNpmrcPath];
}
async function getAuthToken(registry) {
	const paths = getNpmrcPaths();
	const authTokenRegex = new RegExp(`^//${registry.replace(/^https?:\/\//, "").replace(/\/$/, "")}/:_authToken=(.+)$`, "m");
	for (const npmrcPath of paths) {
		let fd;
		try {
			fd = await fs$1.promises.open(npmrcPath, "r");
			if (await fd.stat().then((r) => r.isFile())) {
				const authTokenMatch = (await fd.readFile("utf-8")).match(authTokenRegex)?.[1];
				if (authTokenMatch) return authTokenMatch.trim();
			}
		} catch {} finally {
			await fd?.close();
		}
	}
	return null;
}
async function detectNpmRegistry(scope) {
	const registry = await getRegistry(scope);
	return {
		registry,
		authToken: await getAuthToken(registry)
	};
}
async function getRegistry(scope) {
	if (process.env.COREPACK_NPM_REGISTRY) return process.env.COREPACK_NPM_REGISTRY;
	const registry = await getRegistryFromFile(getNpmrcPaths(), scope);
	if (registry) process.env.COREPACK_NPM_REGISTRY = registry;
	return registry || "https://registry.npmjs.org";
}
async function getRegistryFromFile(paths, scope) {
	for (const npmrcPath of paths) {
		let fd;
		try {
			fd = await fs$1.promises.open(npmrcPath, "r");
			if (await fd.stat().then((r) => r.isFile())) {
				const registry = getRegistryFromContent(await fd.readFile("utf-8"), scope);
				if (registry) return registry;
			}
		} catch {} finally {
			await fd?.close();
		}
	}
	return null;
}

//#endregion
export { add_default as default };