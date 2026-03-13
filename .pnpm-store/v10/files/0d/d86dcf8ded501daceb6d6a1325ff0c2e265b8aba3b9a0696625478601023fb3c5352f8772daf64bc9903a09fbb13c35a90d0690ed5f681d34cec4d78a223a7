import "./dist-0DfurPla.mjs";
import "./utils-D5jIbZ8_.mjs";
import { t as defineCommand } from "./dist-BBpbTs93.mjs";
import { a as legacyRootDirArgs, t as cwdArgs } from "./_shared-CThtxn2Y.mjs";
import { n as logger } from "./logger-O9Su9xI5.mjs";
import { t as loadKit } from "./kit-mAWtuYKF.mjs";
import { c as resolve } from "./pathe.M-eThtNZ-C6qzirxH.mjs";
import "./fs-DfmpLQNk.mjs";
import { t as cleanupNuxtDirs } from "./nuxt-BKiPW5-E.mjs";

//#region src/commands/cleanup.ts
var cleanup_default = defineCommand({
	meta: {
		name: "cleanup",
		description: "Clean up generated Nuxt files and caches"
	},
	args: {
		...cwdArgs,
		...legacyRootDirArgs
	},
	async run(ctx) {
		const cwd = resolve(ctx.args.cwd || ctx.args.rootDir);
		const { loadNuxtConfig } = await loadKit(cwd);
		const nuxtOptions = await loadNuxtConfig({
			cwd,
			overrides: { dev: true }
		});
		await cleanupNuxtDirs(nuxtOptions.rootDir, nuxtOptions.buildDir);
		logger.success("Cleanup complete!");
	}
});

//#endregion
export { cleanup_default as default };