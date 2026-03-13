import "./dist-0DfurPla.mjs";
import "./utils-D5jIbZ8_.mjs";
import { t as defineCommand } from "./dist-BBpbTs93.mjs";
import { i as c } from "./dist-DS-XJpoP.mjs";
import { a as legacyRootDirArgs, i as extendsArgs, n as dotEnvArgs, o as logLevelArgs, t as cwdArgs } from "./_shared-CThtxn2Y.mjs";
import { a as resolveModulePath, t as loadKit } from "./kit-mAWtuYKF.mjs";
import { c as resolve } from "./pathe.M-eThtNZ-C6qzirxH.mjs";
import { i as readTSConfig } from "./dist-z8aedaRt.mjs";
import { n as K } from "./main-BgvXMeoL.mjs";
import process from "node:process";

//#region src/commands/typecheck.ts
var typecheck_default = defineCommand({
	meta: {
		name: "typecheck",
		description: "Runs `vue-tsc` to check types throughout your app."
	},
	args: {
		...cwdArgs,
		...logLevelArgs,
		...dotEnvArgs,
		...extendsArgs,
		...legacyRootDirArgs
	},
	async run(ctx) {
		process.env.NODE_ENV = process.env.NODE_ENV || "production";
		const cwd$1 = resolve(ctx.args.cwd || ctx.args.rootDir);
		const [supportsProjects, resolvedTypeScript, resolvedVueTsc] = await Promise.all([
			readTSConfig(cwd$1).then((r) => !!r.references?.length),
			resolveModulePath("typescript", { try: true }),
			resolveModulePath("vue-tsc/bin/vue-tsc.js", { try: true }),
			writeTypes(cwd$1, ctx.args.dotenv, ctx.args.logLevel, {
				...ctx.data?.overrides,
				...ctx.args.extends && { extends: ctx.args.extends }
			})
		]);
		const typeCheckArgs = supportsProjects ? ["-b", "--noEmit"] : ["--noEmit"];
		if (resolvedTypeScript && resolvedVueTsc) return await K(resolvedVueTsc, typeCheckArgs, {
			throwOnError: true,
			nodeOptions: {
				stdio: "inherit",
				cwd: cwd$1
			}
		});
		if (c) {
			await K("bun", [
				"install",
				"typescript",
				"vue-tsc",
				"--global",
				"--silent"
			], {
				throwOnError: true,
				nodeOptions: {
					stdio: "inherit",
					cwd: cwd$1
				}
			});
			return await K("bunx", ["vue-tsc", ...typeCheckArgs], {
				throwOnError: true,
				nodeOptions: {
					stdio: "inherit",
					cwd: cwd$1
				}
			});
		}
		await K("npx", [
			"-p",
			"vue-tsc",
			"-p",
			"typescript",
			"vue-tsc",
			...typeCheckArgs
		], {
			throwOnError: true,
			nodeOptions: {
				stdio: "inherit",
				cwd: cwd$1
			}
		});
	}
});
async function writeTypes(cwd$1, dotenv, logLevel, overrides) {
	const { loadNuxt, buildNuxt, writeTypes: writeTypes$1 } = await loadKit(cwd$1);
	const nuxt = await loadNuxt({
		cwd: cwd$1,
		dotenv: {
			cwd: cwd$1,
			fileName: dotenv
		},
		overrides: {
			_prepare: true,
			logLevel,
			...overrides
		}
	});
	await writeTypes$1(nuxt);
	await buildNuxt(nuxt);
	await nuxt.close();
}

//#endregion
export { typecheck_default as default };