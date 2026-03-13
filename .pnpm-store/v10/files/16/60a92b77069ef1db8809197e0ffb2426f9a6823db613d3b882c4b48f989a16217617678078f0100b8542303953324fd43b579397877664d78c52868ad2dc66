import { n as colors } from "./dist-0DfurPla.mjs";
import "./utils-D5jIbZ8_.mjs";
import { t as defineCommand } from "./dist-BBpbTs93.mjs";
import { a as legacyRootDirArgs, t as cwdArgs } from "./_shared-CThtxn2Y.mjs";
import { n as logger } from "./logger-O9Su9xI5.mjs";
import { c as resolve } from "./pathe.M-eThtNZ-C6qzirxH.mjs";
import { n as K } from "./main-BgvXMeoL.mjs";
import process from "node:process";

//#region src/commands/devtools.ts
var devtools_default = defineCommand({
	meta: {
		name: "devtools",
		description: "Enable or disable devtools in a Nuxt project"
	},
	args: {
		...cwdArgs,
		command: {
			type: "positional",
			description: "Command to run",
			valueHint: "enable|disable"
		},
		...legacyRootDirArgs
	},
	async run(ctx) {
		const cwd$1 = resolve(ctx.args.cwd || ctx.args.rootDir);
		if (!["enable", "disable"].includes(ctx.args.command)) {
			logger.error(`Unknown command ${colors.cyan(ctx.args.command)}.`);
			process.exit(1);
		}
		await K("npx", [
			"@nuxt/devtools-wizard@latest",
			ctx.args.command,
			cwd$1
		], {
			throwOnError: true,
			nodeOptions: {
				stdio: "inherit",
				cwd: cwd$1
			}
		});
	}
});

//#endregion
export { devtools_default as default };