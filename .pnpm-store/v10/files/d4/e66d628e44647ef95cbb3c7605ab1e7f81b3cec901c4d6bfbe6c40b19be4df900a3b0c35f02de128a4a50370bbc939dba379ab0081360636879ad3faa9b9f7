import { n as colors } from "./dist-0DfurPla.mjs";
import "./utils-D5jIbZ8_.mjs";
import { t as defineCommand } from "./dist-BBpbTs93.mjs";
import { a as legacyRootDirArgs, o as logLevelArgs, t as cwdArgs } from "./_shared-CThtxn2Y.mjs";
import { _ as Ct, c as Pt, d as Wt, f as Xt, h as we, m as qt, n as logger, p as kt, s as Nt } from "./logger-O9Su9xI5.mjs";
import { r as relativeToProcess, t as loadKit } from "./kit-mAWtuYKF.mjs";
import { c as resolve } from "./pathe.M-eThtNZ-C6qzirxH.mjs";
import { n as findWorkspaceDir, r as readPackageJSON } from "./dist-z8aedaRt.mjs";
import "./satisfies-C79zCZRN.mjs";
import { t as getNuxtVersion } from "./versions-BUwGlDsD.mjs";
import "./fs-DfmpLQNk.mjs";
import { r as nuxtVersionToGitIdentifier, t as cleanupNuxtDirs } from "./nuxt-BKiPW5-E.mjs";
import "./main-BgvXMeoL.mjs";
import { n as dedupeDependencies, r as detectPackageManager, t as addDependency } from "./nypm.CLjaS_sz-CuB4zfXi.mjs";
import { t as getPackageManagerVersion } from "./packageManagers-BtV_6-Bg.mjs";
import process from "node:process";
import { existsSync } from "node:fs";

//#region src/commands/upgrade.ts
function checkNuxtDependencyType(pkg) {
	if (pkg.dependencies?.nuxt) return "dependencies";
	if (pkg.devDependencies?.nuxt) return "devDependencies";
	return "dependencies";
}
const nuxtVersionTags = {
	"3.x": "3x",
	"4.x": "latest"
};
function getNightlyDependency(dep, nuxtVersion) {
	return `${dep}@npm:${dep}-nightly@${nuxtVersionTags[nuxtVersion]}`;
}
async function getNightlyVersion(packageNames) {
	const nuxtVersion = await qt({
		message: "Which nightly Nuxt release channel do you want to install?",
		options: [{
			value: "3.x",
			label: "3.x"
		}, {
			value: "4.x",
			label: "4.x"
		}],
		initialValue: "4.x"
	});
	if (Ct(nuxtVersion)) {
		Nt("Operation cancelled.");
		process.exit(1);
	}
	return {
		npmPackages: packageNames.map((p) => getNightlyDependency(p, nuxtVersion)),
		nuxtVersion
	};
}
async function getRequiredNewVersion(packageNames, channel) {
	switch (channel) {
		case "nightly": return getNightlyVersion(packageNames);
		case "v3": return {
			npmPackages: packageNames.map((p) => `${p}@3`),
			nuxtVersion: "3.x"
		};
		case "v3-nightly": return {
			npmPackages: packageNames.map((p) => getNightlyDependency(p, "3.x")),
			nuxtVersion: "3.x"
		};
		case "v4": return {
			npmPackages: packageNames.map((p) => `${p}@4`),
			nuxtVersion: "4.x"
		};
		case "v4-nightly": return {
			npmPackages: packageNames.map((p) => getNightlyDependency(p, "4.x")),
			nuxtVersion: "4.x"
		};
		case "stable":
		default: return {
			npmPackages: packageNames.map((p) => `${p}@latest`),
			nuxtVersion: "4.x"
		};
	}
}
var upgrade_default = defineCommand({
	meta: {
		name: "upgrade",
		description: "Upgrade Nuxt"
	},
	args: {
		...cwdArgs,
		...logLevelArgs,
		...legacyRootDirArgs,
		dedupe: {
			type: "boolean",
			description: "Dedupe dependencies after upgrading"
		},
		force: {
			type: "boolean",
			alias: "f",
			description: "Force upgrade to recreate lockfile and node_modules"
		},
		channel: {
			type: "string",
			alias: "ch",
			default: "stable",
			description: "Specify a channel to install from (default: stable)",
			valueHint: "stable|nightly|v3|v4|v4-nightly|v3-nightly"
		}
	},
	async run(ctx) {
		const cwd$1 = resolve(ctx.args.cwd || ctx.args.rootDir);
		Pt(colors.cyan("Upgrading Nuxt ..."));
		const [packageManager, workspaceDir = cwd$1] = await Promise.all([detectPackageManager(cwd$1), findWorkspaceDir(cwd$1, { try: true })]);
		if (!packageManager) {
			logger.error(`Unable to determine the package manager used by this project.\n\nNo lock files found in ${colors.cyan(relativeToProcess(cwd$1))}, and no ${colors.cyan("packageManager")} field specified in ${colors.cyan("package.json")}.`);
			logger.info(`Please either add the ${colors.cyan("packageManager")} field to ${colors.cyan("package.json")} or execute the installation command for your package manager. For example, you can use ${colors.cyan("pnpm i")}, ${colors.cyan("npm i")}, ${colors.cyan("bun i")}, or ${colors.cyan("yarn i")}, and then try again.`);
			process.exit(1);
		}
		const { name: packageManagerName, lockFile: lockFileCandidates } = packageManager;
		const packageManagerVersion = getPackageManagerVersion(packageManagerName);
		logger.step(`Package manager: ${colors.cyan(packageManagerName)} ${packageManagerVersion}`);
		const currentVersion = await getNuxtVersion(cwd$1, false) || "[unknown]";
		logger.step(`Current Nuxt version: ${colors.cyan(currentVersion)}`);
		const pkg = await readPackageJSON(cwd$1).catch(() => null);
		const nuxtDependencyType = pkg ? checkNuxtDependencyType(pkg) : "dependencies";
		const { npmPackages, nuxtVersion } = await getRequiredNewVersion(["nuxt", ...pkg ? [
			"@nuxt/kit",
			"@nuxt/schema",
			"@nuxt/vite-builder",
			"@nuxt/webpack-builder",
			"@nuxt/rspack-builder"
		].filter((p) => pkg.dependencies?.[p] || pkg.devDependencies?.[p]) : []], ctx.args.channel);
		const toRemove = ["node_modules"];
		const lockFile = normaliseLockFile(workspaceDir, lockFileCandidates);
		if (lockFile) toRemove.push(lockFile);
		const forceRemovals = toRemove.map((p) => colors.cyan(p)).join(" and ");
		let method = ctx.args.force ? "force" : ctx.args.dedupe ? "dedupe" : void 0;
		if (!method) {
			const result = await qt({
				message: `Would you like to dedupe your lockfile, or recreate ${forceRemovals}? This can fix problems with hoisted dependency versions and ensure you have the most up-to-date dependencies.`,
				options: [
					{
						label: "dedupe lockfile",
						value: "dedupe",
						hint: "recommended"
					},
					{
						label: `recreate ${forceRemovals}`,
						value: "force"
					},
					{
						label: "skip",
						value: "skip"
					}
				],
				initialValue: "dedupe"
			});
			if (Ct(result)) {
				Nt("Operation cancelled.");
				process.exit(1);
			}
			method = result;
		}
		const versionType = ctx.args.channel === "nightly" ? "nightly" : `latest ${ctx.args.channel}`;
		const spin = we();
		spin.start("Upgrading Nuxt");
		await Xt([
			{
				title: `Installing ${versionType} Nuxt ${nuxtVersion} release`,
				task: async () => {
					await addDependency(npmPackages, {
						cwd: cwd$1,
						packageManager,
						dev: nuxtDependencyType === "devDependencies",
						workspace: packageManager?.name === "pnpm" && existsSync(resolve(cwd$1, "pnpm-workspace.yaml"))
					});
					return "Nuxt packages installed";
				}
			},
			...method === "force" ? [{
				title: `Recreating ${forceRemovals}`,
				task: async () => {
					await dedupeDependencies({ recreateLockfile: true });
					return "Lockfile recreated";
				}
			}] : [],
			...method === "dedupe" ? [{
				title: "Deduping dependencies",
				task: async () => {
					await dedupeDependencies();
					return "Dependencies deduped";
				}
			}] : [],
			{
				title: "Cleaning up build directories",
				task: async () => {
					let buildDir = ".nuxt";
					try {
						const { loadNuxtConfig } = await loadKit(cwd$1);
						buildDir = (await loadNuxtConfig({ cwd: cwd$1 })).buildDir;
					} catch {}
					await cleanupNuxtDirs(cwd$1, buildDir);
					return "Build directories cleaned";
				}
			}
		]);
		spin.stop();
		if (method === "force") logger.info(`If you encounter any issues, revert the changes and try with ${colors.cyan("--no-force")}`);
		const upgradedVersion = await getNuxtVersion(cwd$1, false) || "[unknown]";
		if (upgradedVersion === "[unknown]") return;
		if (upgradedVersion === currentVersion) Wt(`You were already using the latest version of Nuxt (${colors.green(currentVersion)})`);
		else {
			logger.success(`Successfully upgraded Nuxt from ${colors.cyan(currentVersion)} to ${colors.green(upgradedVersion)}`);
			if (currentVersion === "[unknown]") return;
			const commitA = nuxtVersionToGitIdentifier(currentVersion);
			const commitB = nuxtVersionToGitIdentifier(upgradedVersion);
			if (commitA && commitB) kt(`https://github.com/nuxt/nuxt/compare/${commitA}...${commitB}`, "Changelog");
			Wt("✨ Upgrade complete!");
		}
	}
});
function normaliseLockFile(cwd$1, lockFiles) {
	if (typeof lockFiles === "string") lockFiles = [lockFiles];
	const lockFile = lockFiles?.find((file) => existsSync(resolve(cwd$1, file)));
	if (lockFile === void 0) {
		logger.error(`Unable to find any lock files in ${colors.cyan(relativeToProcess(cwd$1))}.`);
		return;
	}
	return lockFile;
}

//#endregion
export { upgrade_default as default };