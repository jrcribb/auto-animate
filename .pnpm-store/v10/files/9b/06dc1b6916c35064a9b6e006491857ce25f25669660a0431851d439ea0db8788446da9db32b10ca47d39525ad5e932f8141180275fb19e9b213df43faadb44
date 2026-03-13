import "./dist-0DfurPla.mjs";
import "./utils-D5jIbZ8_.mjs";
import { t as defineCommand } from "./dist-BBpbTs93.mjs";
import { r as a } from "./dist-DS-XJpoP.mjs";
import { a as legacyRootDirArgs, n as dotEnvArgs, o as logLevelArgs, r as envNameArgs, t as cwdArgs } from "./_shared-CThtxn2Y.mjs";
import { c as resolve } from "./pathe.M-eThtNZ-C6qzirxH.mjs";
import process from "node:process";

//#region src/commands/dev-child.ts
var dev_child_default = defineCommand({
	meta: {
		name: "_dev",
		description: "Run Nuxt development server (internal command to start child process)"
	},
	args: {
		...cwdArgs,
		...logLevelArgs,
		...envNameArgs,
		...dotEnvArgs,
		...legacyRootDirArgs,
		clear: {
			type: "boolean",
			description: "Clear console on restart",
			negativeDescription: "Disable clear console on restart"
		}
	},
	async run(ctx) {
		if (!process.send && !a) console.warn("`nuxi _dev` is an internal command and should not be used directly. Please use `nuxi dev` instead.");
		const cwd$1 = resolve(ctx.args.cwd || ctx.args.rootDir);
		const { initialize } = await import("./dev/index.mjs");
		await initialize({
			cwd: cwd$1,
			args: ctx.args
		}, ctx);
	}
});

//#endregion
export { dev_child_default as default };