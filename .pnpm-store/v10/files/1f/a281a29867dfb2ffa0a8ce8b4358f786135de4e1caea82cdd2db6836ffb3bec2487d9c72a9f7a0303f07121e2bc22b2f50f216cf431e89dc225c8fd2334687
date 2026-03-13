import { n as colors } from "./dist-0DfurPla.mjs";
import { t as defineCommand } from "./dist-BBpbTs93.mjs";
import { a as legacyRootDirArgs, i as extendsArgs, n as dotEnvArgs, o as logLevelArgs, r as envNameArgs, t as cwdArgs } from "./_shared-CThtxn2Y.mjs";
import { n as logger } from "./logger-O9Su9xI5.mjs";
import { r as relativeToProcess, t as loadKit } from "./kit-mAWtuYKF.mjs";
import { c as resolve } from "./pathe.M-eThtNZ-C6qzirxH.mjs";
import { t as clearBuildDir } from "./fs-DfmpLQNk.mjs";
import process from "node:process";

//#region src/commands/prepare.ts
var prepare_default = defineCommand({
	meta: {
		name: "prepare",
		description: "Prepare Nuxt for development/build"
	},
	args: {
		...dotEnvArgs,
		...cwdArgs,
		...logLevelArgs,
		...envNameArgs,
		...extendsArgs,
		...legacyRootDirArgs
	},
	async run(ctx) {
		process.env.NODE_ENV = process.env.NODE_ENV || "production";
		const cwd$1 = resolve(ctx.args.cwd || ctx.args.rootDir);
		const { loadNuxt, buildNuxt, writeTypes } = await loadKit(cwd$1);
		const nuxt = await loadNuxt({
			cwd: cwd$1,
			dotenv: {
				cwd: cwd$1,
				fileName: ctx.args.dotenv
			},
			envName: ctx.args.envName,
			overrides: {
				_prepare: true,
				logLevel: ctx.args.logLevel,
				...ctx.args.extends && { extends: ctx.args.extends },
				...ctx.data?.overrides
			}
		});
		await clearBuildDir(nuxt.options.buildDir);
		await buildNuxt(nuxt);
		await writeTypes(nuxt);
		logger.success(`Types generated in ${colors.cyan(relativeToProcess(nuxt.options.buildDir))}.`);
	}
});

//#endregion
export { prepare_default as t };