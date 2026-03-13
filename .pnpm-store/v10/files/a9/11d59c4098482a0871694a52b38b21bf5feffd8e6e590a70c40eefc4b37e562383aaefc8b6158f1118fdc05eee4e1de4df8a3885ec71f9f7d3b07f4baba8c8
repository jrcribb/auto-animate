import { n as colors } from "./dist-0DfurPla.mjs";
import "./utils-D5jIbZ8_.mjs";
import { t as defineCommand } from "./dist-BBpbTs93.mjs";
import { a as legacyRootDirArgs, i as extendsArgs, n as dotEnvArgs, o as logLevelArgs, r as envNameArgs, t as cwdArgs } from "./_shared-CThtxn2Y.mjs";
import { c as Pt, d as Wt, n as logger } from "./logger-O9Su9xI5.mjs";
import { t as loadKit } from "./kit-mAWtuYKF.mjs";
import { c as resolve, s as relative } from "./pathe.M-eThtNZ-C6qzirxH.mjs";
import "./satisfies-C79zCZRN.mjs";
import "./versions-BUwGlDsD.mjs";
import { n as showVersions } from "./banner-Djkyn06y.mjs";
import { t as clearBuildDir } from "./fs-DfmpLQNk.mjs";
import { t as overrideEnv } from "./env-CbiV2-ve.mjs";
import process from "node:process";

//#region src/commands/build.ts
var build_default = defineCommand({
	meta: {
		name: "build",
		description: "Build Nuxt for production deployment"
	},
	args: {
		...cwdArgs,
		...logLevelArgs,
		prerender: {
			type: "boolean",
			description: "Build Nuxt and prerender static routes"
		},
		preset: {
			type: "string",
			description: "Nitro server preset"
		},
		...dotEnvArgs,
		...envNameArgs,
		...extendsArgs,
		...legacyRootDirArgs
	},
	async run(ctx) {
		overrideEnv("production");
		const cwd$1 = resolve(ctx.args.cwd || ctx.args.rootDir);
		Pt(colors.cyan("Building Nuxt for production..."));
		const kit = await loadKit(cwd$1);
		await showVersions(cwd$1, kit);
		const nuxt = await kit.loadNuxt({
			cwd: cwd$1,
			dotenv: {
				cwd: cwd$1,
				fileName: ctx.args.dotenv
			},
			envName: ctx.args.envName,
			overrides: {
				logLevel: ctx.args.logLevel,
				_generate: ctx.args.prerender,
				nitro: {
					static: ctx.args.prerender,
					preset: ctx.args.preset || process.env.NITRO_PRESET || process.env.SERVER_PRESET
				},
				...ctx.args.extends && { extends: ctx.args.extends },
				...ctx.data?.overrides
			}
		});
		let nitro;
		try {
			nitro = kit.useNitro?.();
			if (nitro) logger.info(`Nitro preset: ${colors.cyan(nitro.options.preset)}`);
		} catch {}
		await clearBuildDir(nuxt.options.buildDir);
		await kit.writeTypes(nuxt);
		nuxt.hook("build:error", (err) => {
			logger.error(`Nuxt build error: ${err}`);
			process.exit(1);
		});
		await kit.buildNuxt(nuxt);
		if (ctx.args.prerender) {
			if (!nuxt.options.ssr) {
				logger.warn(`HTML content not prerendered because ${colors.cyan("ssr: false")} was set.`);
				logger.info(`You can read more in ${colors.cyan("https://nuxt.com/docs/getting-started/deployment#static-hosting")}.`);
			}
			const dir = nitro?.options.output.publicDir;
			const publicDir = dir ? relative(process.cwd(), dir) : ".output/public";
			Wt(`✨ You can now deploy ${colors.cyan(publicDir)} to any static hosting!`);
		} else Wt("✨ Build complete!");
	}
});

//#endregion
export { build_default as default };