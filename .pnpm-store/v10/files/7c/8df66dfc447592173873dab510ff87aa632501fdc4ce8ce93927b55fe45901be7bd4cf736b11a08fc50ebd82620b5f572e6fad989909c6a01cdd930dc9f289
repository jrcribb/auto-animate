import "./dist-0DfurPla.mjs";
import "./utils-D5jIbZ8_.mjs";
import { t as defineCommand } from "./dist-BBpbTs93.mjs";
import { a as legacyRootDirArgs, i as extendsArgs, n as dotEnvArgs, o as logLevelArgs, r as envNameArgs, t as cwdArgs } from "./_shared-CThtxn2Y.mjs";
import "./logger-O9Su9xI5.mjs";
import "./kit-mAWtuYKF.mjs";
import "./satisfies-C79zCZRN.mjs";
import "./versions-BUwGlDsD.mjs";
import "./banner-Djkyn06y.mjs";
import "./fs-DfmpLQNk.mjs";
import "./env-CbiV2-ve.mjs";
import build_default from "./build-GrLPgLPV.mjs";

//#region src/commands/generate.ts
var generate_default = defineCommand({
	meta: {
		name: "generate",
		description: "Build Nuxt and prerender all routes"
	},
	args: {
		...cwdArgs,
		...logLevelArgs,
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
		ctx.args.prerender = true;
		await build_default.run(ctx);
	}
});

//#endregion
export { generate_default as default };