import { a as __toCommonJS, i as __require, n as __esmMin, r as __export, s as __toESM, t as __commonJSMin } from "./chunk-CuftcezF.mjs";
import { dirname, join } from "node:path";
import process$1, { stdin, stdout } from "node:process";
import { stripVTControlCharacters } from "node:util";
import tty, { ReadStream } from "node:tty";
import * as k$1 from "node:readline";
import c from "node:readline";
import { existsSync, lstatSync, readdirSync } from "node:fs";
import os from "node:os";

//#region ../../node_modules/.pnpm/picocolors@1.1.1/node_modules/picocolors/picocolors.js
var require_picocolors = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	let p = process || {}, argv = p.argv || [], env$1 = p.env || {};
	let isColorSupported = !(!!env$1.NO_COLOR || argv.includes("--no-color")) && (!!env$1.FORCE_COLOR || argv.includes("--color") || p.platform === "win32" || (p.stdout || {}).isTTY && env$1.TERM !== "dumb" || !!env$1.CI);
	let formatter = (open, close, replace = open) => (input) => {
		let string = "" + input, index = string.indexOf(close, open.length);
		return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
	};
	let replaceClose = (string, close, replace, index) => {
		let result = "", cursor$1 = 0;
		do {
			result += string.substring(cursor$1, index) + replace;
			cursor$1 = index + close.length;
			index = string.indexOf(close, cursor$1);
		} while (~index);
		return result + string.substring(cursor$1);
	};
	let createColors = (enabled = isColorSupported) => {
		let f = enabled ? formatter : () => String;
		return {
			isColorSupported: enabled,
			reset: f("\x1B[0m", "\x1B[0m"),
			bold: f("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"),
			dim: f("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"),
			italic: f("\x1B[3m", "\x1B[23m"),
			underline: f("\x1B[4m", "\x1B[24m"),
			inverse: f("\x1B[7m", "\x1B[27m"),
			hidden: f("\x1B[8m", "\x1B[28m"),
			strikethrough: f("\x1B[9m", "\x1B[29m"),
			black: f("\x1B[30m", "\x1B[39m"),
			red: f("\x1B[31m", "\x1B[39m"),
			green: f("\x1B[32m", "\x1B[39m"),
			yellow: f("\x1B[33m", "\x1B[39m"),
			blue: f("\x1B[34m", "\x1B[39m"),
			magenta: f("\x1B[35m", "\x1B[39m"),
			cyan: f("\x1B[36m", "\x1B[39m"),
			white: f("\x1B[37m", "\x1B[39m"),
			gray: f("\x1B[90m", "\x1B[39m"),
			bgBlack: f("\x1B[40m", "\x1B[49m"),
			bgRed: f("\x1B[41m", "\x1B[49m"),
			bgGreen: f("\x1B[42m", "\x1B[49m"),
			bgYellow: f("\x1B[43m", "\x1B[49m"),
			bgBlue: f("\x1B[44m", "\x1B[49m"),
			bgMagenta: f("\x1B[45m", "\x1B[49m"),
			bgCyan: f("\x1B[46m", "\x1B[49m"),
			bgWhite: f("\x1B[47m", "\x1B[49m"),
			blackBright: f("\x1B[90m", "\x1B[39m"),
			redBright: f("\x1B[91m", "\x1B[39m"),
			greenBright: f("\x1B[92m", "\x1B[39m"),
			yellowBright: f("\x1B[93m", "\x1B[39m"),
			blueBright: f("\x1B[94m", "\x1B[39m"),
			magentaBright: f("\x1B[95m", "\x1B[39m"),
			cyanBright: f("\x1B[96m", "\x1B[39m"),
			whiteBright: f("\x1B[97m", "\x1B[39m"),
			bgBlackBright: f("\x1B[100m", "\x1B[49m"),
			bgRedBright: f("\x1B[101m", "\x1B[49m"),
			bgGreenBright: f("\x1B[102m", "\x1B[49m"),
			bgYellowBright: f("\x1B[103m", "\x1B[49m"),
			bgBlueBright: f("\x1B[104m", "\x1B[49m"),
			bgMagentaBright: f("\x1B[105m", "\x1B[49m"),
			bgCyanBright: f("\x1B[106m", "\x1B[49m"),
			bgWhiteBright: f("\x1B[107m", "\x1B[49m")
		};
	};
	module.exports = createColors();
	module.exports.createColors = createColors;
}));

//#endregion
//#region ../../node_modules/.pnpm/sisteransi@1.0.5/node_modules/sisteransi/src/index.js
var require_src$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const ESC = "\x1B";
	const CSI = `${ESC}[`;
	const beep = "\x07";
	const cursor = {
		to(x$2, y$2) {
			if (!y$2) return `${CSI}${x$2 + 1}G`;
			return `${CSI}${y$2 + 1};${x$2 + 1}H`;
		},
		move(x$2, y$2) {
			let ret = "";
			if (x$2 < 0) ret += `${CSI}${-x$2}D`;
			else if (x$2 > 0) ret += `${CSI}${x$2}C`;
			if (y$2 < 0) ret += `${CSI}${-y$2}A`;
			else if (y$2 > 0) ret += `${CSI}${y$2}B`;
			return ret;
		},
		up: (count = 1) => `${CSI}${count}A`,
		down: (count = 1) => `${CSI}${count}B`,
		forward: (count = 1) => `${CSI}${count}C`,
		backward: (count = 1) => `${CSI}${count}D`,
		nextLine: (count = 1) => `${CSI}E`.repeat(count),
		prevLine: (count = 1) => `${CSI}F`.repeat(count),
		left: `${CSI}G`,
		hide: `${CSI}?25l`,
		show: `${CSI}?25h`,
		save: `${ESC}7`,
		restore: `${ESC}8`
	};
	const scroll = {
		up: (count = 1) => `${CSI}S`.repeat(count),
		down: (count = 1) => `${CSI}T`.repeat(count)
	};
	const erase = {
		screen: `${CSI}2J`,
		up: (count = 1) => `${CSI}1J`.repeat(count),
		down: (count = 1) => `${CSI}J`.repeat(count),
		line: `${CSI}2K`,
		lineEnd: `${CSI}K`,
		lineStart: `${CSI}1K`,
		lines(count) {
			let clear = "";
			for (let i = 0; i < count; i++) clear += this.line + (i < count - 1 ? cursor.up() : "");
			if (count) clear += cursor.left;
			return clear;
		}
	};
	module.exports = {
		cursor,
		scroll,
		erase,
		beep
	};
}));

//#endregion
//#region ../../node_modules/.pnpm/@clack+core@1.0.0-alpha.7/node_modules/@clack/core/dist/index.mjs
var import_picocolors$1 = /* @__PURE__ */ __toESM(require_picocolors(), 1);
var import_src$2 = require_src$1();
const at = (t$1) => t$1 === 161 || t$1 === 164 || t$1 === 167 || t$1 === 168 || t$1 === 170 || t$1 === 173 || t$1 === 174 || t$1 >= 176 && t$1 <= 180 || t$1 >= 182 && t$1 <= 186 || t$1 >= 188 && t$1 <= 191 || t$1 === 198 || t$1 === 208 || t$1 === 215 || t$1 === 216 || t$1 >= 222 && t$1 <= 225 || t$1 === 230 || t$1 >= 232 && t$1 <= 234 || t$1 === 236 || t$1 === 237 || t$1 === 240 || t$1 === 242 || t$1 === 243 || t$1 >= 247 && t$1 <= 250 || t$1 === 252 || t$1 === 254 || t$1 === 257 || t$1 === 273 || t$1 === 275 || t$1 === 283 || t$1 === 294 || t$1 === 295 || t$1 === 299 || t$1 >= 305 && t$1 <= 307 || t$1 === 312 || t$1 >= 319 && t$1 <= 322 || t$1 === 324 || t$1 >= 328 && t$1 <= 331 || t$1 === 333 || t$1 === 338 || t$1 === 339 || t$1 === 358 || t$1 === 359 || t$1 === 363 || t$1 === 462 || t$1 === 464 || t$1 === 466 || t$1 === 468 || t$1 === 470 || t$1 === 472 || t$1 === 474 || t$1 === 476 || t$1 === 593 || t$1 === 609 || t$1 === 708 || t$1 === 711 || t$1 >= 713 && t$1 <= 715 || t$1 === 717 || t$1 === 720 || t$1 >= 728 && t$1 <= 731 || t$1 === 733 || t$1 === 735 || t$1 >= 768 && t$1 <= 879 || t$1 >= 913 && t$1 <= 929 || t$1 >= 931 && t$1 <= 937 || t$1 >= 945 && t$1 <= 961 || t$1 >= 963 && t$1 <= 969 || t$1 === 1025 || t$1 >= 1040 && t$1 <= 1103 || t$1 === 1105 || t$1 === 8208 || t$1 >= 8211 && t$1 <= 8214 || t$1 === 8216 || t$1 === 8217 || t$1 === 8220 || t$1 === 8221 || t$1 >= 8224 && t$1 <= 8226 || t$1 >= 8228 && t$1 <= 8231 || t$1 === 8240 || t$1 === 8242 || t$1 === 8243 || t$1 === 8245 || t$1 === 8251 || t$1 === 8254 || t$1 === 8308 || t$1 === 8319 || t$1 >= 8321 && t$1 <= 8324 || t$1 === 8364 || t$1 === 8451 || t$1 === 8453 || t$1 === 8457 || t$1 === 8467 || t$1 === 8470 || t$1 === 8481 || t$1 === 8482 || t$1 === 8486 || t$1 === 8491 || t$1 === 8531 || t$1 === 8532 || t$1 >= 8539 && t$1 <= 8542 || t$1 >= 8544 && t$1 <= 8555 || t$1 >= 8560 && t$1 <= 8569 || t$1 === 8585 || t$1 >= 8592 && t$1 <= 8601 || t$1 === 8632 || t$1 === 8633 || t$1 === 8658 || t$1 === 8660 || t$1 === 8679 || t$1 === 8704 || t$1 === 8706 || t$1 === 8707 || t$1 === 8711 || t$1 === 8712 || t$1 === 8715 || t$1 === 8719 || t$1 === 8721 || t$1 === 8725 || t$1 === 8730 || t$1 >= 8733 && t$1 <= 8736 || t$1 === 8739 || t$1 === 8741 || t$1 >= 8743 && t$1 <= 8748 || t$1 === 8750 || t$1 >= 8756 && t$1 <= 8759 || t$1 === 8764 || t$1 === 8765 || t$1 === 8776 || t$1 === 8780 || t$1 === 8786 || t$1 === 8800 || t$1 === 8801 || t$1 >= 8804 && t$1 <= 8807 || t$1 === 8810 || t$1 === 8811 || t$1 === 8814 || t$1 === 8815 || t$1 === 8834 || t$1 === 8835 || t$1 === 8838 || t$1 === 8839 || t$1 === 8853 || t$1 === 8857 || t$1 === 8869 || t$1 === 8895 || t$1 === 8978 || t$1 >= 9312 && t$1 <= 9449 || t$1 >= 9451 && t$1 <= 9547 || t$1 >= 9552 && t$1 <= 9587 || t$1 >= 9600 && t$1 <= 9615 || t$1 >= 9618 && t$1 <= 9621 || t$1 === 9632 || t$1 === 9633 || t$1 >= 9635 && t$1 <= 9641 || t$1 === 9650 || t$1 === 9651 || t$1 === 9654 || t$1 === 9655 || t$1 === 9660 || t$1 === 9661 || t$1 === 9664 || t$1 === 9665 || t$1 >= 9670 && t$1 <= 9672 || t$1 === 9675 || t$1 >= 9678 && t$1 <= 9681 || t$1 >= 9698 && t$1 <= 9701 || t$1 === 9711 || t$1 === 9733 || t$1 === 9734 || t$1 === 9737 || t$1 === 9742 || t$1 === 9743 || t$1 === 9756 || t$1 === 9758 || t$1 === 9792 || t$1 === 9794 || t$1 === 9824 || t$1 === 9825 || t$1 >= 9827 && t$1 <= 9829 || t$1 >= 9831 && t$1 <= 9834 || t$1 === 9836 || t$1 === 9837 || t$1 === 9839 || t$1 === 9886 || t$1 === 9887 || t$1 === 9919 || t$1 >= 9926 && t$1 <= 9933 || t$1 >= 9935 && t$1 <= 9939 || t$1 >= 9941 && t$1 <= 9953 || t$1 === 9955 || t$1 === 9960 || t$1 === 9961 || t$1 >= 9963 && t$1 <= 9969 || t$1 === 9972 || t$1 >= 9974 && t$1 <= 9977 || t$1 === 9979 || t$1 === 9980 || t$1 === 9982 || t$1 === 9983 || t$1 === 10045 || t$1 >= 10102 && t$1 <= 10111 || t$1 >= 11094 && t$1 <= 11097 || t$1 >= 12872 && t$1 <= 12879 || t$1 >= 57344 && t$1 <= 63743 || t$1 >= 65024 && t$1 <= 65039 || t$1 === 65533 || t$1 >= 127232 && t$1 <= 127242 || t$1 >= 127248 && t$1 <= 127277 || t$1 >= 127280 && t$1 <= 127337 || t$1 >= 127344 && t$1 <= 127373 || t$1 === 127375 || t$1 === 127376 || t$1 >= 127387 && t$1 <= 127404 || t$1 >= 917760 && t$1 <= 917999 || t$1 >= 983040 && t$1 <= 1048573 || t$1 >= 1048576 && t$1 <= 1114109, lt = (t$1) => t$1 === 12288 || t$1 >= 65281 && t$1 <= 65376 || t$1 >= 65504 && t$1 <= 65510, ht$1 = (t$1) => t$1 >= 4352 && t$1 <= 4447 || t$1 === 8986 || t$1 === 8987 || t$1 === 9001 || t$1 === 9002 || t$1 >= 9193 && t$1 <= 9196 || t$1 === 9200 || t$1 === 9203 || t$1 === 9725 || t$1 === 9726 || t$1 === 9748 || t$1 === 9749 || t$1 >= 9800 && t$1 <= 9811 || t$1 === 9855 || t$1 === 9875 || t$1 === 9889 || t$1 === 9898 || t$1 === 9899 || t$1 === 9917 || t$1 === 9918 || t$1 === 9924 || t$1 === 9925 || t$1 === 9934 || t$1 === 9940 || t$1 === 9962 || t$1 === 9970 || t$1 === 9971 || t$1 === 9973 || t$1 === 9978 || t$1 === 9981 || t$1 === 9989 || t$1 === 9994 || t$1 === 9995 || t$1 === 10024 || t$1 === 10060 || t$1 === 10062 || t$1 >= 10067 && t$1 <= 10069 || t$1 === 10071 || t$1 >= 10133 && t$1 <= 10135 || t$1 === 10160 || t$1 === 10175 || t$1 === 11035 || t$1 === 11036 || t$1 === 11088 || t$1 === 11093 || t$1 >= 11904 && t$1 <= 11929 || t$1 >= 11931 && t$1 <= 12019 || t$1 >= 12032 && t$1 <= 12245 || t$1 >= 12272 && t$1 <= 12287 || t$1 >= 12289 && t$1 <= 12350 || t$1 >= 12353 && t$1 <= 12438 || t$1 >= 12441 && t$1 <= 12543 || t$1 >= 12549 && t$1 <= 12591 || t$1 >= 12593 && t$1 <= 12686 || t$1 >= 12688 && t$1 <= 12771 || t$1 >= 12783 && t$1 <= 12830 || t$1 >= 12832 && t$1 <= 12871 || t$1 >= 12880 && t$1 <= 19903 || t$1 >= 19968 && t$1 <= 42124 || t$1 >= 42128 && t$1 <= 42182 || t$1 >= 43360 && t$1 <= 43388 || t$1 >= 44032 && t$1 <= 55203 || t$1 >= 63744 && t$1 <= 64255 || t$1 >= 65040 && t$1 <= 65049 || t$1 >= 65072 && t$1 <= 65106 || t$1 >= 65108 && t$1 <= 65126 || t$1 >= 65128 && t$1 <= 65131 || t$1 >= 94176 && t$1 <= 94180 || t$1 === 94192 || t$1 === 94193 || t$1 >= 94208 && t$1 <= 100343 || t$1 >= 100352 && t$1 <= 101589 || t$1 >= 101632 && t$1 <= 101640 || t$1 >= 110576 && t$1 <= 110579 || t$1 >= 110581 && t$1 <= 110587 || t$1 === 110589 || t$1 === 110590 || t$1 >= 110592 && t$1 <= 110882 || t$1 === 110898 || t$1 >= 110928 && t$1 <= 110930 || t$1 === 110933 || t$1 >= 110948 && t$1 <= 110951 || t$1 >= 110960 && t$1 <= 111355 || t$1 === 126980 || t$1 === 127183 || t$1 === 127374 || t$1 >= 127377 && t$1 <= 127386 || t$1 >= 127488 && t$1 <= 127490 || t$1 >= 127504 && t$1 <= 127547 || t$1 >= 127552 && t$1 <= 127560 || t$1 === 127568 || t$1 === 127569 || t$1 >= 127584 && t$1 <= 127589 || t$1 >= 127744 && t$1 <= 127776 || t$1 >= 127789 && t$1 <= 127797 || t$1 >= 127799 && t$1 <= 127868 || t$1 >= 127870 && t$1 <= 127891 || t$1 >= 127904 && t$1 <= 127946 || t$1 >= 127951 && t$1 <= 127955 || t$1 >= 127968 && t$1 <= 127984 || t$1 === 127988 || t$1 >= 127992 && t$1 <= 128062 || t$1 === 128064 || t$1 >= 128066 && t$1 <= 128252 || t$1 >= 128255 && t$1 <= 128317 || t$1 >= 128331 && t$1 <= 128334 || t$1 >= 128336 && t$1 <= 128359 || t$1 === 128378 || t$1 === 128405 || t$1 === 128406 || t$1 === 128420 || t$1 >= 128507 && t$1 <= 128591 || t$1 >= 128640 && t$1 <= 128709 || t$1 === 128716 || t$1 >= 128720 && t$1 <= 128722 || t$1 >= 128725 && t$1 <= 128727 || t$1 >= 128732 && t$1 <= 128735 || t$1 === 128747 || t$1 === 128748 || t$1 >= 128756 && t$1 <= 128764 || t$1 >= 128992 && t$1 <= 129003 || t$1 === 129008 || t$1 >= 129292 && t$1 <= 129338 || t$1 >= 129340 && t$1 <= 129349 || t$1 >= 129351 && t$1 <= 129535 || t$1 >= 129648 && t$1 <= 129660 || t$1 >= 129664 && t$1 <= 129672 || t$1 >= 129680 && t$1 <= 129725 || t$1 >= 129727 && t$1 <= 129733 || t$1 >= 129742 && t$1 <= 129755 || t$1 >= 129760 && t$1 <= 129768 || t$1 >= 129776 && t$1 <= 129784 || t$1 >= 131072 && t$1 <= 196605 || t$1 >= 196608 && t$1 <= 262141, O = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/y, y$1 = /[\x00-\x08\x0A-\x1F\x7F-\x9F]{1,1000}/y, M$1 = /\t{1,1000}/y, P = /[\u{1F1E6}-\u{1F1FF}]{2}|\u{1F3F4}[\u{E0061}-\u{E007A}]{2}[\u{E0030}-\u{E0039}\u{E0061}-\u{E007A}]{1,3}\u{E007F}|(?:\p{Emoji}\uFE0F\u20E3?|\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation})(?:\u200D(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F\u20E3?))*/uy, L = /(?:[\x20-\x7E\xA0-\xFF](?!\uFE0F)){1,1000}/y, ct = /\p{M}+/gu, Ft$1 = {
	limit: Infinity,
	ellipsis: ""
}, X = (t$1, e = {}, s$1 = {}) => {
	const i = e.limit ?? Infinity, r = e.ellipsis ?? "", n = e?.ellipsisWidth ?? (r ? X(r, Ft$1, s$1).width : 0), o = s$1.ansiWidth ?? 0, a = s$1.controlWidth ?? 0, l = s$1.tabWidth ?? 8, E = s$1.ambiguousWidth ?? 1, g = s$1.emojiWidth ?? 2, m$1 = s$1.fullWidthWidth ?? 2, A = s$1.regularWidth ?? 1, V$1 = s$1.wideWidth ?? 2;
	let h$1 = 0, u = 0, f = t$1.length, v = 0, p$1 = !1, d$2 = f, b = Math.max(0, i - n), C = 0, B = 0, c$1 = 0, F = 0;
	t: for (;;) {
		if (B > C || u >= f && u > h$1) {
			const ut = t$1.slice(C, B) || t$1.slice(h$1, u);
			v = 0;
			for (const Y$1 of ut.replaceAll(ct, "")) {
				const $ = Y$1.codePointAt(0) || 0;
				if (lt($) ? F = m$1 : ht$1($) ? F = V$1 : E !== A && at($) ? F = E : F = A, c$1 + F > b && (d$2 = Math.min(d$2, Math.max(C, h$1) + v)), c$1 + F > i) {
					p$1 = !0;
					break t;
				}
				v += Y$1.length, c$1 += F;
			}
			C = B = 0;
		}
		if (u >= f) break;
		if (L.lastIndex = u, L.test(t$1)) {
			if (v = L.lastIndex - u, F = v * A, c$1 + F > b && (d$2 = Math.min(d$2, u + Math.floor((b - c$1) / A))), c$1 + F > i) {
				p$1 = !0;
				break;
			}
			c$1 += F, C = h$1, B = u, u = h$1 = L.lastIndex;
			continue;
		}
		if (O.lastIndex = u, O.test(t$1)) {
			if (c$1 + o > b && (d$2 = Math.min(d$2, u)), c$1 + o > i) {
				p$1 = !0;
				break;
			}
			c$1 += o, C = h$1, B = u, u = h$1 = O.lastIndex;
			continue;
		}
		if (y$1.lastIndex = u, y$1.test(t$1)) {
			if (v = y$1.lastIndex - u, F = v * a, c$1 + F > b && (d$2 = Math.min(d$2, u + Math.floor((b - c$1) / a))), c$1 + F > i) {
				p$1 = !0;
				break;
			}
			c$1 += F, C = h$1, B = u, u = h$1 = y$1.lastIndex;
			continue;
		}
		if (M$1.lastIndex = u, M$1.test(t$1)) {
			if (v = M$1.lastIndex - u, F = v * l, c$1 + F > b && (d$2 = Math.min(d$2, u + Math.floor((b - c$1) / l))), c$1 + F > i) {
				p$1 = !0;
				break;
			}
			c$1 += F, C = h$1, B = u, u = h$1 = M$1.lastIndex;
			continue;
		}
		if (P.lastIndex = u, P.test(t$1)) {
			if (c$1 + g > b && (d$2 = Math.min(d$2, u)), c$1 + g > i) {
				p$1 = !0;
				break;
			}
			c$1 += g, C = h$1, B = u, u = h$1 = P.lastIndex;
			continue;
		}
		u += 1;
	}
	return {
		width: p$1 ? b : c$1,
		index: p$1 ? d$2 : f,
		truncated: p$1,
		ellipsed: p$1 && i >= n
	};
}, ft$1 = {
	limit: Infinity,
	ellipsis: "",
	ellipsisWidth: 0
}, S = (t$1, e = {}) => X(t$1, ft$1, e).width, W$1 = "\x1B", Z = "", pt$1 = 39, j$1 = "\x07", Q$1 = "[", dt = "]", tt = "m", U = `${dt}8;;`, et = new RegExp(`(?:\\${Q$1}(?<code>\\d+)m|\\${U}(?<uri>.*)${j$1})`, "y"), mt$1 = (t$1) => {
	if (t$1 >= 30 && t$1 <= 37 || t$1 >= 90 && t$1 <= 97) return 39;
	if (t$1 >= 40 && t$1 <= 47 || t$1 >= 100 && t$1 <= 107) return 49;
	if (t$1 === 1 || t$1 === 2) return 22;
	if (t$1 === 3) return 23;
	if (t$1 === 4) return 24;
	if (t$1 === 7) return 27;
	if (t$1 === 8) return 28;
	if (t$1 === 9) return 29;
	if (t$1 === 0) return 0;
}, st = (t$1) => `${W$1}${Q$1}${t$1}${tt}`, it = (t$1) => `${W$1}${U}${t$1}${j$1}`, gt$1 = (t$1) => t$1.map((e) => S(e)), G = (t$1, e, s$1) => {
	const i = e[Symbol.iterator]();
	let r = !1, n = !1, o = t$1.at(-1), a = o === void 0 ? 0 : S(o), l = i.next(), E = i.next(), g = 0;
	for (; !l.done;) {
		const m$1 = l.value, A = S(m$1);
		a + A <= s$1 ? t$1[t$1.length - 1] += m$1 : (t$1.push(m$1), a = 0), (m$1 === W$1 || m$1 === Z) && (r = !0, n = e.startsWith(U, g + 1)), r ? n ? m$1 === j$1 && (r = !1, n = !1) : m$1 === tt && (r = !1) : (a += A, a === s$1 && !E.done && (t$1.push(""), a = 0)), l = E, E = i.next(), g += m$1.length;
	}
	o = t$1.at(-1), !a && o !== void 0 && o.length > 0 && t$1.length > 1 && (t$1[t$1.length - 2] += t$1.pop());
}, vt$1 = (t$1) => {
	const e = t$1.split(" ");
	let s$1 = e.length;
	for (; s$1 > 0 && !(S(e[s$1 - 1]) > 0);) s$1--;
	return s$1 === e.length ? t$1 : e.slice(0, s$1).join(" ") + e.slice(s$1).join("");
}, Et$1 = (t$1, e, s$1 = {}) => {
	if (s$1.trim !== !1 && t$1.trim() === "") return "";
	let i = "", r, n;
	const o = t$1.split(" "), a = gt$1(o);
	let l = [""];
	for (const [h$1, u] of o.entries()) {
		s$1.trim !== !1 && (l[l.length - 1] = (l.at(-1) ?? "").trimStart());
		let f = S(l.at(-1) ?? "");
		if (h$1 !== 0 && (f >= e && (s$1.wordWrap === !1 || s$1.trim === !1) && (l.push(""), f = 0), (f > 0 || s$1.trim === !1) && (l[l.length - 1] += " ", f++)), s$1.hard && a[h$1] > e) {
			const v = e - f, p$1 = 1 + Math.floor((a[h$1] - v - 1) / e);
			Math.floor((a[h$1] - 1) / e) < p$1 && l.push(""), G(l, u, e);
			continue;
		}
		if (f + a[h$1] > e && f > 0 && a[h$1] > 0) {
			if (s$1.wordWrap === !1 && f < e) {
				G(l, u, e);
				continue;
			}
			l.push("");
		}
		if (f + a[h$1] > e && s$1.wordWrap === !1) {
			G(l, u, e);
			continue;
		}
		l[l.length - 1] += u;
	}
	s$1.trim !== !1 && (l = l.map((h$1) => vt$1(h$1)));
	const E = l.join(`
`), g = E[Symbol.iterator]();
	let m$1 = g.next(), A = g.next(), V$1 = 0;
	for (; !m$1.done;) {
		const h$1 = m$1.value, u = A.value;
		if (i += h$1, h$1 === W$1 || h$1 === Z) {
			et.lastIndex = V$1 + 1;
			const p$1 = et.exec(E)?.groups;
			if (p$1?.code !== void 0) {
				const d$2 = Number.parseFloat(p$1.code);
				r = d$2 === pt$1 ? void 0 : d$2;
			} else p$1?.uri !== void 0 && (n = p$1.uri.length === 0 ? void 0 : p$1.uri);
		}
		const f = r ? mt$1(r) : void 0;
		u === `
` ? (n && (i += it("")), r && f && (i += st(f))) : h$1 === `
` && (r && f && (i += st(r)), n && (i += it(n))), V$1 += h$1.length, m$1 = A, A = g.next();
	}
	return i;
};
function K$1(t$1, e, s$1) {
	return String(t$1).normalize().replaceAll(`\r
`, `
`).split(`
`).map((i) => Et$1(i, e, s$1)).join(`
`);
}
const _ = {
	actions: new Set([
		"up",
		"down",
		"left",
		"right",
		"space",
		"enter",
		"cancel"
	]),
	aliases: new Map([
		["k", "up"],
		["j", "down"],
		["h", "left"],
		["l", "right"],
		["", "cancel"],
		["escape", "cancel"]
	]),
	messages: {
		cancel: "Canceled",
		error: "Something went wrong"
	},
	withGuide: !0
};
function H(t$1, e) {
	if (typeof t$1 == "string") return _.aliases.get(t$1) === e;
	for (const s$1 of t$1) if (s$1 !== void 0 && H(s$1, e)) return !0;
	return !1;
}
function _t$1(t$1, e) {
	if (t$1 === e) return;
	const s$1 = t$1.split(`
`), i = e.split(`
`), r = Math.max(s$1.length, i.length), n = [];
	for (let o = 0; o < r; o++) s$1[o] !== i[o] && n.push(o);
	return {
		lines: n,
		numLinesBefore: s$1.length,
		numLinesAfter: i.length,
		numLines: r
	};
}
const bt$1 = globalThis.process.platform.startsWith("win"), z$1 = Symbol("clack:cancel");
function Ct(t$1) {
	return t$1 === z$1;
}
function T(t$1, e) {
	const s$1 = t$1;
	s$1.isTTY && s$1.setRawMode(e);
}
function xt({ input: t$1 = stdin, output: e = stdout, overwrite: s$1 = !0, hideCursor: i = !0 } = {}) {
	const r = k$1.createInterface({
		input: t$1,
		output: e,
		prompt: "",
		tabSize: 1
	});
	k$1.emitKeypressEvents(t$1, r), t$1 instanceof ReadStream && t$1.isTTY && t$1.setRawMode(!0);
	const n = (o, { name: a, sequence: l }) => {
		if (H([
			String(o),
			a,
			l
		], "cancel")) {
			i && e.write(import_src$2.cursor.show), process.exit(0);
			return;
		}
		if (!s$1) return;
		const g = a === "return" ? 0 : -1, m$1 = a === "return" ? -1 : 0;
		k$1.moveCursor(e, g, m$1, () => {
			k$1.clearLine(e, 1, () => {
				t$1.once("keypress", n);
			});
		});
	};
	return i && e.write(import_src$2.cursor.hide), t$1.once("keypress", n), () => {
		t$1.off("keypress", n), i && e.write(import_src$2.cursor.show), t$1 instanceof ReadStream && t$1.isTTY && !bt$1 && t$1.setRawMode(!1), r.terminal = !1, r.close();
	};
}
const rt = (t$1) => "columns" in t$1 && typeof t$1.columns == "number" ? t$1.columns : 80, nt = (t$1) => "rows" in t$1 && typeof t$1.rows == "number" ? t$1.rows : 20;
function Bt(t$1, e, s$1, i = s$1) {
	return K$1(e, rt(t$1 ?? stdout) - s$1.length, {
		hard: !0,
		trim: !1
	}).split(`
`).map((n, o) => `${o === 0 ? i : s$1}${n}`).join(`
`);
}
var x$1 = class {
	input;
	output;
	_abortSignal;
	rl;
	opts;
	_render;
	_track = !1;
	_prevFrame = "";
	_subscribers = /* @__PURE__ */ new Map();
	_cursor = 0;
	state = "initial";
	error = "";
	value;
	userInput = "";
	constructor(e, s$1 = !0) {
		const { input: i = stdin, output: r = stdout, render: n, signal: o, ...a } = e;
		this.opts = a, this.onKeypress = this.onKeypress.bind(this), this.close = this.close.bind(this), this.render = this.render.bind(this), this._render = n.bind(this), this._track = s$1, this._abortSignal = o, this.input = i, this.output = r;
	}
	unsubscribe() {
		this._subscribers.clear();
	}
	setSubscriber(e, s$1) {
		const i = this._subscribers.get(e) ?? [];
		i.push(s$1), this._subscribers.set(e, i);
	}
	on(e, s$1) {
		this.setSubscriber(e, { cb: s$1 });
	}
	once(e, s$1) {
		this.setSubscriber(e, {
			cb: s$1,
			once: !0
		});
	}
	emit(e, ...s$1) {
		const i = this._subscribers.get(e) ?? [], r = [];
		for (const n of i) n.cb(...s$1), n.once && r.push(() => i.splice(i.indexOf(n), 1));
		for (const n of r) n();
	}
	prompt() {
		return new Promise((e) => {
			if (this._abortSignal) {
				if (this._abortSignal.aborted) return this.state = "cancel", this.close(), e(z$1);
				this._abortSignal.addEventListener("abort", () => {
					this.state = "cancel", this.close();
				}, { once: !0 });
			}
			this.rl = c.createInterface({
				input: this.input,
				tabSize: 2,
				prompt: "",
				escapeCodeTimeout: 50,
				terminal: !0
			}), this.rl.prompt(), this.opts.initialUserInput !== void 0 && this._setUserInput(this.opts.initialUserInput, !0), this.input.on("keypress", this.onKeypress), T(this.input, !0), this.output.on("resize", this.render), this.render(), this.once("submit", () => {
				this.output.write(import_src$2.cursor.show), this.output.off("resize", this.render), T(this.input, !1), e(this.value);
			}), this.once("cancel", () => {
				this.output.write(import_src$2.cursor.show), this.output.off("resize", this.render), T(this.input, !1), e(z$1);
			});
		});
	}
	_isActionKey(e, s$1) {
		return e === "	";
	}
	_setValue(e) {
		this.value = e, this.emit("value", this.value);
	}
	_setUserInput(e, s$1) {
		this.userInput = e ?? "", this.emit("userInput", this.userInput), s$1 && this._track && this.rl && (this.rl.write(this.userInput), this._cursor = this.rl.cursor);
	}
	_clearUserInput() {
		this.rl?.write(null, {
			ctrl: !0,
			name: "u"
		}), this._setUserInput("");
	}
	onKeypress(e, s$1) {
		if (this._track && s$1.name !== "return" && (s$1.name && this._isActionKey(e, s$1) && this.rl?.write(null, {
			ctrl: !0,
			name: "h"
		}), this._cursor = this.rl?.cursor ?? 0, this._setUserInput(this.rl?.line)), this.state === "error" && (this.state = "active"), s$1?.name && (!this._track && _.aliases.has(s$1.name) && this.emit("cursor", _.aliases.get(s$1.name)), _.actions.has(s$1.name) && this.emit("cursor", s$1.name)), e && (e.toLowerCase() === "y" || e.toLowerCase() === "n") && this.emit("confirm", e.toLowerCase() === "y"), this.emit("key", e?.toLowerCase(), s$1), s$1?.name === "return") {
			if (this.opts.validate) {
				const i = this.opts.validate(this.value);
				i && (this.error = i instanceof Error ? i.message : i, this.state = "error", this.rl?.write(this.userInput));
			}
			this.state !== "error" && (this.state = "submit");
		}
		H([
			e,
			s$1?.name,
			s$1?.sequence
		], "cancel") && (this.state = "cancel"), (this.state === "submit" || this.state === "cancel") && this.emit("finalize"), this.render(), (this.state === "submit" || this.state === "cancel") && this.close();
	}
	close() {
		this.input.unpipe(), this.input.removeListener("keypress", this.onKeypress), this.output.write(`
`), T(this.input, !1), this.rl?.close(), this.rl = void 0, this.emit(`${this.state}`, this.value), this.unsubscribe();
	}
	restoreCursor() {
		const e = K$1(this._prevFrame, process.stdout.columns, {
			hard: !0,
			trim: !1
		}).split(`
`).length - 1;
		this.output.write(import_src$2.cursor.move(-999, e * -1));
	}
	render() {
		const e = K$1(this._render(this) ?? "", process.stdout.columns, {
			hard: !0,
			trim: !1
		});
		if (e !== this._prevFrame) {
			if (this.state === "initial") this.output.write(import_src$2.cursor.hide);
			else {
				const s$1 = _t$1(this._prevFrame, e), i = nt(this.output);
				if (this.restoreCursor(), s$1) {
					const r = Math.max(0, s$1.numLinesAfter - i), n = Math.max(0, s$1.numLinesBefore - i);
					let o = s$1.lines.find((a) => a >= r);
					if (o === void 0) {
						this._prevFrame = e;
						return;
					}
					if (s$1.lines.length === 1) {
						this.output.write(import_src$2.cursor.move(0, o - n)), this.output.write(import_src$2.erase.lines(1));
						const a = e.split(`
`);
						this.output.write(a[o]), this._prevFrame = e, this.output.write(import_src$2.cursor.move(0, a.length - o - 1));
						return;
					} else if (s$1.lines.length > 1) {
						if (r < n) o = r;
						else {
							const l = o - n;
							l > 0 && this.output.write(import_src$2.cursor.move(0, l));
						}
						this.output.write(import_src$2.erase.down());
						const a = e.split(`
`).slice(o);
						this.output.write(a.join(`
`)), this._prevFrame = e;
						return;
					}
				}
				this.output.write(import_src$2.erase.down());
			}
			this.output.write(e), this.state === "initial" && (this.state = "active"), this._prevFrame = e;
		}
	}
};
function wt$1(t$1, e) {
	if (t$1 === void 0 || e.length === 0) return 0;
	const s$1 = e.findIndex((i) => i.value === t$1);
	return s$1 !== -1 ? s$1 : 0;
}
function Dt$1(t$1, e) {
	return (e.label ?? String(e.value)).toLowerCase().includes(t$1.toLowerCase());
}
function St$1(t$1, e) {
	if (e) return t$1 ? e : e[0];
}
var Vt = class extends x$1 {
	filteredOptions;
	multiple;
	isNavigating = !1;
	selectedValues = [];
	focusedValue;
	#t = 0;
	#s = "";
	#i;
	#e;
	get cursor() {
		return this.#t;
	}
	get userInputWithCursor() {
		if (!this.userInput) return import_picocolors$1.default.inverse(import_picocolors$1.default.hidden("_"));
		if (this._cursor >= this.userInput.length) return `${this.userInput}\u2588`;
		const e = this.userInput.slice(0, this._cursor), [s$1, ...i] = this.userInput.slice(this._cursor);
		return `${e}${import_picocolors$1.default.inverse(s$1)}${i.join("")}`;
	}
	get options() {
		return typeof this.#e == "function" ? this.#e() : this.#e;
	}
	constructor(e) {
		super(e), this.#e = e.options;
		const s$1 = this.options;
		this.filteredOptions = [...s$1], this.multiple = e.multiple === !0, this.#i = e.filter ?? Dt$1;
		let i;
		if (e.initialValue && Array.isArray(e.initialValue) ? this.multiple ? i = e.initialValue : i = e.initialValue.slice(0, 1) : !this.multiple && this.options.length > 0 && (i = [this.options[0].value]), i) for (const r of i) {
			const n = s$1.findIndex((o) => o.value === r);
			n !== -1 && (this.toggleSelected(r), this.#t = n);
		}
		this.focusedValue = this.options[this.#t]?.value, this.on("key", (r, n) => this.#r(r, n)), this.on("userInput", (r) => this.#n(r));
	}
	_isActionKey(e, s$1) {
		return e === "	" || this.multiple && this.isNavigating && s$1.name === "space" && e !== void 0 && e !== "";
	}
	#r(e, s$1) {
		const i = s$1.name === "up", r = s$1.name === "down", n = s$1.name === "return";
		i || r ? (this.#t = Math.max(0, Math.min(this.#t + (i ? -1 : 1), this.filteredOptions.length - 1)), this.focusedValue = this.filteredOptions[this.#t]?.value, this.multiple || (this.selectedValues = [this.focusedValue]), this.isNavigating = !0) : n ? this.value = St$1(this.multiple, this.selectedValues) : this.multiple ? this.focusedValue !== void 0 && (s$1.name === "tab" || this.isNavigating && s$1.name === "space") ? this.toggleSelected(this.focusedValue) : this.isNavigating = !1 : (this.focusedValue && (this.selectedValues = [this.focusedValue]), this.isNavigating = !1);
	}
	deselectAll() {
		this.selectedValues = [];
	}
	toggleSelected(e) {
		this.filteredOptions.length !== 0 && (this.multiple ? this.selectedValues.includes(e) ? this.selectedValues = this.selectedValues.filter((s$1) => s$1 !== e) : this.selectedValues = [...this.selectedValues, e] : this.selectedValues = [e]);
	}
	#n(e) {
		if (e !== this.#s) {
			this.#s = e;
			const s$1 = this.options;
			e ? this.filteredOptions = s$1.filter((i) => this.#i(e, i)) : this.filteredOptions = [...s$1], this.#t = wt$1(this.focusedValue, this.filteredOptions), this.focusedValue = this.filteredOptions[this.#t]?.value, this.multiple || (this.focusedValue !== void 0 ? this.toggleSelected(this.focusedValue) : this.deselectAll());
		}
	}
};
let kt = class extends x$1 {
	get cursor() {
		return this.value ? 0 : 1;
	}
	get _value() {
		return this.cursor === 0;
	}
	constructor(e) {
		super(e, !1), this.value = !!e.initialValue, this.on("userInput", () => {
			this.value = this._value;
		}), this.on("confirm", (s$1) => {
			this.output.write(import_src$2.cursor.move(0, -1)), this.value = s$1, this.state = "submit", this.close();
		}), this.on("cursor", () => {
			this.value = !this.value;
		});
	}
};
var yt = class extends x$1 {
	options;
	cursor = 0;
	#t;
	getGroupItems(e) {
		return this.options.filter((s$1) => s$1.group === e);
	}
	isGroupSelected(e) {
		const s$1 = this.getGroupItems(e), i = this.value;
		return i === void 0 ? !1 : s$1.every((r) => i.includes(r.value));
	}
	toggleValue() {
		const e = this.options[this.cursor];
		if (this.value === void 0 && (this.value = []), e.group === !0) {
			const s$1 = e.value, i = this.getGroupItems(s$1);
			this.isGroupSelected(s$1) ? this.value = this.value.filter((r) => i.findIndex((n) => n.value === r) === -1) : this.value = [...this.value, ...i.map((r) => r.value)], this.value = Array.from(new Set(this.value));
		} else this.value = this.value.includes(e.value) ? this.value.filter((i) => i !== e.value) : [...this.value, e.value];
	}
	constructor(e) {
		super(e, !1);
		const { options: s$1 } = e;
		this.#t = e.selectableGroups !== !1, this.options = Object.entries(s$1).flatMap(([i, r]) => [{
			value: i,
			group: !0,
			label: i
		}, ...r.map((n) => ({
			...n,
			group: i
		}))]), this.value = [...e.initialValues ?? []], this.cursor = Math.max(this.options.findIndex(({ value: i }) => i === e.cursorAt), this.#t ? 0 : 1), this.on("cursor", (i) => {
			switch (i) {
				case "left":
				case "up": {
					this.cursor = this.cursor === 0 ? this.options.length - 1 : this.cursor - 1;
					const r = this.options[this.cursor]?.group === !0;
					!this.#t && r && (this.cursor = this.cursor === 0 ? this.options.length - 1 : this.cursor - 1);
					break;
				}
				case "down":
				case "right": {
					this.cursor = this.cursor === this.options.length - 1 ? 0 : this.cursor + 1;
					const r = this.options[this.cursor]?.group === !0;
					!this.#t && r && (this.cursor = this.cursor === this.options.length - 1 ? 0 : this.cursor + 1);
					break;
				}
				case "space":
					this.toggleValue();
					break;
			}
		});
	}
};
function D(t$1, e, s$1) {
	const i = t$1 + e, r = Math.max(s$1.length - 1, 0), n = i < 0 ? r : i > r ? 0 : i;
	return s$1[n].disabled ? D(n, e < 0 ? -1 : 1, s$1) : n;
}
var Mt = class extends x$1 {
	options;
	cursor = 0;
	get _value() {
		return this.options[this.cursor].value;
	}
	get _enabledOptions() {
		return this.options.filter((e) => e.disabled !== !0);
	}
	toggleAll() {
		const e = this._enabledOptions;
		this.value = this.value !== void 0 && this.value.length === e.length ? [] : e.map((i) => i.value);
	}
	toggleInvert() {
		const e = this.value;
		if (!e) return;
		this.value = this._enabledOptions.filter((i) => !e.includes(i.value)).map((i) => i.value);
	}
	toggleValue() {
		this.value === void 0 && (this.value = []);
		this.value = this.value.includes(this._value) ? this.value.filter((s$1) => s$1 !== this._value) : [...this.value, this._value];
	}
	constructor(e) {
		super(e, !1), this.options = e.options, this.value = [...e.initialValues ?? []];
		const s$1 = Math.max(this.options.findIndex(({ value: i }) => i === e.cursorAt), 0);
		this.cursor = this.options[s$1].disabled ? D(s$1, 1, this.options) : s$1, this.on("key", (i) => {
			i === "a" && this.toggleAll(), i === "i" && this.toggleInvert();
		}), this.on("cursor", (i) => {
			switch (i) {
				case "left":
				case "up":
					this.cursor = D(this.cursor, -1, this.options);
					break;
				case "down":
				case "right":
					this.cursor = D(this.cursor, 1, this.options);
					break;
				case "space":
					this.toggleValue();
					break;
			}
		});
	}
};
let Lt = class extends x$1 {
	_mask = "•";
	get cursor() {
		return this._cursor;
	}
	get masked() {
		return this.userInput.replaceAll(/./g, this._mask);
	}
	get userInputWithCursor() {
		if (this.state === "submit" || this.state === "cancel") return this.masked;
		const e = this.userInput;
		if (this.cursor >= e.length) return `${this.masked}${import_picocolors$1.default.inverse(import_picocolors$1.default.hidden("_"))}`;
		const s$1 = this.masked, i = s$1.slice(0, this.cursor), r = s$1.slice(this.cursor);
		return `${i}${import_picocolors$1.default.inverse(r[0])}${r.slice(1)}`;
	}
	clear() {
		this._clearUserInput();
	}
	constructor({ mask: e, ...s$1 }) {
		super(s$1), this._mask = e ?? "•", this.on("userInput", (i) => {
			this._setValue(i);
		});
	}
};
var Wt = class extends x$1 {
	options;
	cursor = 0;
	get _selectedValue() {
		return this.options[this.cursor];
	}
	changeValue() {
		this.value = this._selectedValue.value;
	}
	constructor(e) {
		super(e, !1), this.options = e.options;
		const s$1 = this.options.findIndex(({ value: r }) => r === e.initialValue), i = s$1 === -1 ? 0 : s$1;
		this.cursor = this.options[i].disabled ? D(i, 1, this.options) : i, this.changeValue(), this.on("cursor", (r) => {
			switch (r) {
				case "left":
				case "up":
					this.cursor = D(this.cursor, -1, this.options);
					break;
				case "down":
				case "right":
					this.cursor = D(this.cursor, 1, this.options);
					break;
			}
			this.changeValue();
		});
	}
};
var Tt = class extends x$1 {
	options;
	cursor = 0;
	constructor(e) {
		super(e, !1), this.options = e.options;
		const s$1 = this.options.map(({ value: [i] }) => i?.toLowerCase());
		this.cursor = Math.max(s$1.indexOf(e.initialValue), 0), this.on("key", (i) => {
			if (!i || !s$1.includes(i)) return;
			const r = this.options.find(({ value: [n] }) => n?.toLowerCase() === i);
			r && (this.value = r.value, this.state = "submit", this.emit("submit"));
		});
	}
};
var $t = class extends x$1 {
	get userInputWithCursor() {
		if (this.state === "submit") return this.userInput;
		const e = this.userInput;
		if (this.cursor >= e.length) return `${this.userInput}\u2588`;
		const s$1 = e.slice(0, this.cursor), [i, ...r] = e.slice(this.cursor);
		return `${s$1}${import_picocolors$1.default.inverse(i)}${r.join("")}`;
	}
	get cursor() {
		return this._cursor;
	}
	constructor(e) {
		super({
			...e,
			initialUserInput: e.initialUserInput ?? e.initialValue
		}), this.on("userInput", (s$1) => {
			this._setValue(s$1);
		}), this.on("finalize", () => {
			this.value || (this.value = e.defaultValue), this.value === void 0 && (this.value = "");
		});
	}
};

//#endregion
//#region ../../node_modules/.pnpm/@clack+prompts@1.0.0-alpha.7/node_modules/@clack/prompts/dist/index.mjs
var import_picocolors = /* @__PURE__ */ __toESM(require_picocolors(), 1);
var import_src$1 = require_src$1();
function ht() {
	return process$1.platform !== "win32" ? process$1.env.TERM !== "linux" : !!process$1.env.CI || !!process$1.env.WT_SESSION || !!process$1.env.TERMINUS_SUBLIME || process$1.env.ConEmuTask === "{cmd::Cmder}" || process$1.env.TERM_PROGRAM === "Terminus-Sublime" || process$1.env.TERM_PROGRAM === "vscode" || process$1.env.TERM === "xterm-256color" || process$1.env.TERM === "alacritty" || process$1.env.TERMINAL_EMULATOR === "JetBrains-JediTerm";
}
const ee = ht(), ue = () => process.env.CI === "true", Te = (e) => e.isTTY === !0, I = (e, r) => ee ? e : r, Me = I("◆", "*"), ce = I("■", "x"), de = I("▲", "x"), j = I("◇", "o"), $e = I("┌", "T"), d$1 = I("│", "|"), x = I("└", "—"), Re = I("┐", "T"), Oe = I("┘", "—"), Y = I("●", ">"), K = I("○", " "), te = I("◻", "[•]"), V = I("◼", "[+]"), z = I("◻", "[ ]"), Ne = I("▪", "•"), se = I("─", "-"), he = I("╮", "+"), Pe = I("├", "+"), me = I("╯", "+"), pe = I("╰", "+"), We = I("╭", "+"), ge = I("●", "•"), fe = I("◆", "*"), Fe = I("▲", "!"), ye = I("■", "x"), W = (e) => {
	switch (e) {
		case "initial":
		case "active": return import_picocolors.default.cyan(Me);
		case "cancel": return import_picocolors.default.red(ce);
		case "error": return import_picocolors.default.yellow(de);
		case "submit": return import_picocolors.default.green(j);
	}
}, Ee = (e) => {
	switch (e) {
		case "initial":
		case "active": return import_picocolors.default.cyan(d$1);
		case "cancel": return import_picocolors.default.red(d$1);
		case "error": return import_picocolors.default.yellow(d$1);
		case "submit": return import_picocolors.default.green(d$1);
	}
}, mt = (e) => e === 161 || e === 164 || e === 167 || e === 168 || e === 170 || e === 173 || e === 174 || e >= 176 && e <= 180 || e >= 182 && e <= 186 || e >= 188 && e <= 191 || e === 198 || e === 208 || e === 215 || e === 216 || e >= 222 && e <= 225 || e === 230 || e >= 232 && e <= 234 || e === 236 || e === 237 || e === 240 || e === 242 || e === 243 || e >= 247 && e <= 250 || e === 252 || e === 254 || e === 257 || e === 273 || e === 275 || e === 283 || e === 294 || e === 295 || e === 299 || e >= 305 && e <= 307 || e === 312 || e >= 319 && e <= 322 || e === 324 || e >= 328 && e <= 331 || e === 333 || e === 338 || e === 339 || e === 358 || e === 359 || e === 363 || e === 462 || e === 464 || e === 466 || e === 468 || e === 470 || e === 472 || e === 474 || e === 476 || e === 593 || e === 609 || e === 708 || e === 711 || e >= 713 && e <= 715 || e === 717 || e === 720 || e >= 728 && e <= 731 || e === 733 || e === 735 || e >= 768 && e <= 879 || e >= 913 && e <= 929 || e >= 931 && e <= 937 || e >= 945 && e <= 961 || e >= 963 && e <= 969 || e === 1025 || e >= 1040 && e <= 1103 || e === 1105 || e === 8208 || e >= 8211 && e <= 8214 || e === 8216 || e === 8217 || e === 8220 || e === 8221 || e >= 8224 && e <= 8226 || e >= 8228 && e <= 8231 || e === 8240 || e === 8242 || e === 8243 || e === 8245 || e === 8251 || e === 8254 || e === 8308 || e === 8319 || e >= 8321 && e <= 8324 || e === 8364 || e === 8451 || e === 8453 || e === 8457 || e === 8467 || e === 8470 || e === 8481 || e === 8482 || e === 8486 || e === 8491 || e === 8531 || e === 8532 || e >= 8539 && e <= 8542 || e >= 8544 && e <= 8555 || e >= 8560 && e <= 8569 || e === 8585 || e >= 8592 && e <= 8601 || e === 8632 || e === 8633 || e === 8658 || e === 8660 || e === 8679 || e === 8704 || e === 8706 || e === 8707 || e === 8711 || e === 8712 || e === 8715 || e === 8719 || e === 8721 || e === 8725 || e === 8730 || e >= 8733 && e <= 8736 || e === 8739 || e === 8741 || e >= 8743 && e <= 8748 || e === 8750 || e >= 8756 && e <= 8759 || e === 8764 || e === 8765 || e === 8776 || e === 8780 || e === 8786 || e === 8800 || e === 8801 || e >= 8804 && e <= 8807 || e === 8810 || e === 8811 || e === 8814 || e === 8815 || e === 8834 || e === 8835 || e === 8838 || e === 8839 || e === 8853 || e === 8857 || e === 8869 || e === 8895 || e === 8978 || e >= 9312 && e <= 9449 || e >= 9451 && e <= 9547 || e >= 9552 && e <= 9587 || e >= 9600 && e <= 9615 || e >= 9618 && e <= 9621 || e === 9632 || e === 9633 || e >= 9635 && e <= 9641 || e === 9650 || e === 9651 || e === 9654 || e === 9655 || e === 9660 || e === 9661 || e === 9664 || e === 9665 || e >= 9670 && e <= 9672 || e === 9675 || e >= 9678 && e <= 9681 || e >= 9698 && e <= 9701 || e === 9711 || e === 9733 || e === 9734 || e === 9737 || e === 9742 || e === 9743 || e === 9756 || e === 9758 || e === 9792 || e === 9794 || e === 9824 || e === 9825 || e >= 9827 && e <= 9829 || e >= 9831 && e <= 9834 || e === 9836 || e === 9837 || e === 9839 || e === 9886 || e === 9887 || e === 9919 || e >= 9926 && e <= 9933 || e >= 9935 && e <= 9939 || e >= 9941 && e <= 9953 || e === 9955 || e === 9960 || e === 9961 || e >= 9963 && e <= 9969 || e === 9972 || e >= 9974 && e <= 9977 || e === 9979 || e === 9980 || e === 9982 || e === 9983 || e === 10045 || e >= 10102 && e <= 10111 || e >= 11094 && e <= 11097 || e >= 12872 && e <= 12879 || e >= 57344 && e <= 63743 || e >= 65024 && e <= 65039 || e === 65533 || e >= 127232 && e <= 127242 || e >= 127248 && e <= 127277 || e >= 127280 && e <= 127337 || e >= 127344 && e <= 127373 || e === 127375 || e === 127376 || e >= 127387 && e <= 127404 || e >= 917760 && e <= 917999 || e >= 983040 && e <= 1048573 || e >= 1048576 && e <= 1114109, pt = (e) => e === 12288 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510, gt = (e) => e >= 4352 && e <= 4447 || e === 8986 || e === 8987 || e === 9001 || e === 9002 || e >= 9193 && e <= 9196 || e === 9200 || e === 9203 || e === 9725 || e === 9726 || e === 9748 || e === 9749 || e >= 9800 && e <= 9811 || e === 9855 || e === 9875 || e === 9889 || e === 9898 || e === 9899 || e === 9917 || e === 9918 || e === 9924 || e === 9925 || e === 9934 || e === 9940 || e === 9962 || e === 9970 || e === 9971 || e === 9973 || e === 9978 || e === 9981 || e === 9989 || e === 9994 || e === 9995 || e === 10024 || e === 10060 || e === 10062 || e >= 10067 && e <= 10069 || e === 10071 || e >= 10133 && e <= 10135 || e === 10160 || e === 10175 || e === 11035 || e === 11036 || e === 11088 || e === 11093 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12287 || e >= 12289 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12591 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12771 || e >= 12783 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 19903 || e >= 19968 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 94176 && e <= 94180 || e === 94192 || e === 94193 || e >= 94208 && e <= 100343 || e >= 100352 && e <= 101589 || e >= 101632 && e <= 101640 || e >= 110576 && e <= 110579 || e >= 110581 && e <= 110587 || e === 110589 || e === 110590 || e >= 110592 && e <= 110882 || e === 110898 || e >= 110928 && e <= 110930 || e === 110933 || e >= 110948 && e <= 110951 || e >= 110960 && e <= 111355 || e === 126980 || e === 127183 || e === 127374 || e >= 127377 && e <= 127386 || e >= 127488 && e <= 127490 || e >= 127504 && e <= 127547 || e >= 127552 && e <= 127560 || e === 127568 || e === 127569 || e >= 127584 && e <= 127589 || e >= 127744 && e <= 127776 || e >= 127789 && e <= 127797 || e >= 127799 && e <= 127868 || e >= 127870 && e <= 127891 || e >= 127904 && e <= 127946 || e >= 127951 && e <= 127955 || e >= 127968 && e <= 127984 || e === 127988 || e >= 127992 && e <= 128062 || e === 128064 || e >= 128066 && e <= 128252 || e >= 128255 && e <= 128317 || e >= 128331 && e <= 128334 || e >= 128336 && e <= 128359 || e === 128378 || e === 128405 || e === 128406 || e === 128420 || e >= 128507 && e <= 128591 || e >= 128640 && e <= 128709 || e === 128716 || e >= 128720 && e <= 128722 || e >= 128725 && e <= 128727 || e >= 128732 && e <= 128735 || e === 128747 || e === 128748 || e >= 128756 && e <= 128764 || e >= 128992 && e <= 129003 || e === 129008 || e >= 129292 && e <= 129338 || e >= 129340 && e <= 129349 || e >= 129351 && e <= 129535 || e >= 129648 && e <= 129660 || e >= 129664 && e <= 129672 || e >= 129680 && e <= 129725 || e >= 129727 && e <= 129733 || e >= 129742 && e <= 129755 || e >= 129760 && e <= 129768 || e >= 129776 && e <= 129784 || e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141, ve = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/y, re = /[\x00-\x08\x0A-\x1F\x7F-\x9F]{1,1000}/y, ie = /\t{1,1000}/y, Ae = /[\u{1F1E6}-\u{1F1FF}]{2}|\u{1F3F4}[\u{E0061}-\u{E007A}]{2}[\u{E0030}-\u{E0039}\u{E0061}-\u{E007A}]{1,3}\u{E007F}|(?:\p{Emoji}\uFE0F\u20E3?|\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation})(?:\u200D(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F\u20E3?))*/uy, ne = /(?:[\x20-\x7E\xA0-\xFF](?!\uFE0F)){1,1000}/y, ft = /\p{M}+/gu, Ft = {
	limit: Infinity,
	ellipsis: ""
}, Le = (e, r = {}, s$1 = {}) => {
	const i = r.limit ?? Infinity, n = r.ellipsis ?? "", l = r?.ellipsisWidth ?? (n ? Le(n, Ft, s$1).width : 0), u = s$1.ansiWidth ?? 0, a = s$1.controlWidth ?? 0, o = s$1.tabWidth ?? 8, $ = s$1.ambiguousWidth ?? 1, y$2 = s$1.emojiWidth ?? 2, E = s$1.fullWidthWidth ?? 2, p$1 = s$1.regularWidth ?? 1, f = s$1.wideWidth ?? 2;
	let c$1 = 0, m$1 = 0, h$1 = e.length, g = 0, F = !1, v = h$1, S$1 = Math.max(0, i - l), B = 0, b = 0, A = 0, C = 0;
	e: for (;;) {
		if (b > B || m$1 >= h$1 && m$1 > c$1) {
			const _$1 = e.slice(B, b) || e.slice(c$1, m$1);
			g = 0;
			for (const D$1 of _$1.replaceAll(ft, "")) {
				const T$1 = D$1.codePointAt(0) || 0;
				if (pt(T$1) ? C = E : gt(T$1) ? C = f : $ !== p$1 && mt(T$1) ? C = $ : C = p$1, A + C > S$1 && (v = Math.min(v, Math.max(B, c$1) + g)), A + C > i) {
					F = !0;
					break e;
				}
				g += D$1.length, A += C;
			}
			B = b = 0;
		}
		if (m$1 >= h$1) break;
		if (ne.lastIndex = m$1, ne.test(e)) {
			if (g = ne.lastIndex - m$1, C = g * p$1, A + C > S$1 && (v = Math.min(v, m$1 + Math.floor((S$1 - A) / p$1))), A + C > i) {
				F = !0;
				break;
			}
			A += C, B = c$1, b = m$1, m$1 = c$1 = ne.lastIndex;
			continue;
		}
		if (ve.lastIndex = m$1, ve.test(e)) {
			if (A + u > S$1 && (v = Math.min(v, m$1)), A + u > i) {
				F = !0;
				break;
			}
			A += u, B = c$1, b = m$1, m$1 = c$1 = ve.lastIndex;
			continue;
		}
		if (re.lastIndex = m$1, re.test(e)) {
			if (g = re.lastIndex - m$1, C = g * a, A + C > S$1 && (v = Math.min(v, m$1 + Math.floor((S$1 - A) / a))), A + C > i) {
				F = !0;
				break;
			}
			A += C, B = c$1, b = m$1, m$1 = c$1 = re.lastIndex;
			continue;
		}
		if (ie.lastIndex = m$1, ie.test(e)) {
			if (g = ie.lastIndex - m$1, C = g * o, A + C > S$1 && (v = Math.min(v, m$1 + Math.floor((S$1 - A) / o))), A + C > i) {
				F = !0;
				break;
			}
			A += C, B = c$1, b = m$1, m$1 = c$1 = ie.lastIndex;
			continue;
		}
		if (Ae.lastIndex = m$1, Ae.test(e)) {
			if (A + y$2 > S$1 && (v = Math.min(v, m$1)), A + y$2 > i) {
				F = !0;
				break;
			}
			A += y$2, B = c$1, b = m$1, m$1 = c$1 = Ae.lastIndex;
			continue;
		}
		m$1 += 1;
	}
	return {
		width: F ? S$1 : A,
		index: F ? v : h$1,
		truncated: F,
		ellipsed: F && i >= l
	};
}, yt$1 = {
	limit: Infinity,
	ellipsis: "",
	ellipsisWidth: 0
}, M = (e, r = {}) => Le(e, yt$1, r).width, ae = "\x1B", je = "", Et = 39, Ce = "\x07", Ve = "[", vt = "]", ke = "m", Ie = `${vt}8;;`, Ge = new RegExp(`(?:\\${Ve}(?<code>\\d+)m|\\${Ie}(?<uri>.*)${Ce})`, "y"), At = (e) => {
	if (e >= 30 && e <= 37 || e >= 90 && e <= 97) return 39;
	if (e >= 40 && e <= 47 || e >= 100 && e <= 107) return 49;
	if (e === 1 || e === 2) return 22;
	if (e === 3) return 23;
	if (e === 4) return 24;
	if (e === 7) return 27;
	if (e === 8) return 28;
	if (e === 9) return 29;
	if (e === 0) return 0;
}, He = (e) => `${ae}${Ve}${e}${ke}`, Ue = (e) => `${ae}${Ie}${e}${Ce}`, Ct$1 = (e) => e.map((r) => M(r)), Se = (e, r, s$1) => {
	const i = r[Symbol.iterator]();
	let n = !1, l = !1, u = e.at(-1), a = u === void 0 ? 0 : M(u), o = i.next(), $ = i.next(), y$2 = 0;
	for (; !o.done;) {
		const E = o.value, p$1 = M(E);
		a + p$1 <= s$1 ? e[e.length - 1] += E : (e.push(E), a = 0), (E === ae || E === je) && (n = !0, l = r.startsWith(Ie, y$2 + 1)), n ? l ? E === Ce && (n = !1, l = !1) : E === ke && (n = !1) : (a += p$1, a === s$1 && !$.done && (e.push(""), a = 0)), o = $, $ = i.next(), y$2 += E.length;
	}
	u = e.at(-1), !a && u !== void 0 && u.length > 0 && e.length > 1 && (e[e.length - 2] += e.pop());
}, It$1 = (e) => {
	const r = e.split(" ");
	let s$1 = r.length;
	for (; s$1 > 0 && !(M(r[s$1 - 1]) > 0);) s$1--;
	return s$1 === r.length ? e : r.slice(0, s$1).join(" ") + r.slice(s$1).join("");
}, St = (e, r, s$1 = {}) => {
	if (s$1.trim !== !1 && e.trim() === "") return "";
	let i = "", n, l;
	const u = e.split(" "), a = Ct$1(u);
	let o = [""];
	for (const [c$1, m$1] of u.entries()) {
		s$1.trim !== !1 && (o[o.length - 1] = (o.at(-1) ?? "").trimStart());
		let h$1 = M(o.at(-1) ?? "");
		if (c$1 !== 0 && (h$1 >= r && (s$1.wordWrap === !1 || s$1.trim === !1) && (o.push(""), h$1 = 0), (h$1 > 0 || s$1.trim === !1) && (o[o.length - 1] += " ", h$1++)), s$1.hard && a[c$1] > r) {
			const g = r - h$1, F = 1 + Math.floor((a[c$1] - g - 1) / r);
			Math.floor((a[c$1] - 1) / r) < F && o.push(""), Se(o, m$1, r);
			continue;
		}
		if (h$1 + a[c$1] > r && h$1 > 0 && a[c$1] > 0) {
			if (s$1.wordWrap === !1 && h$1 < r) {
				Se(o, m$1, r);
				continue;
			}
			o.push("");
		}
		if (h$1 + a[c$1] > r && s$1.wordWrap === !1) {
			Se(o, m$1, r);
			continue;
		}
		o[o.length - 1] += m$1;
	}
	s$1.trim !== !1 && (o = o.map((c$1) => It$1(c$1)));
	const $ = o.join(`
`), y$2 = $[Symbol.iterator]();
	let E = y$2.next(), p$1 = y$2.next(), f = 0;
	for (; !E.done;) {
		const c$1 = E.value, m$1 = p$1.value;
		if (i += c$1, c$1 === ae || c$1 === je) {
			Ge.lastIndex = f + 1;
			const F = Ge.exec($)?.groups;
			if (F?.code !== void 0) {
				const v = Number.parseFloat(F.code);
				n = v === Et ? void 0 : v;
			} else F?.uri !== void 0 && (l = F.uri.length === 0 ? void 0 : F.uri);
		}
		const h$1 = n ? At(n) : void 0;
		m$1 === `
` ? (l && (i += Ue("")), n && h$1 && (i += He(h$1))) : c$1 === `
` && (n && h$1 && (i += He(n)), l && (i += Ue(l))), f += c$1.length, E = p$1, p$1 = y$2.next();
	}
	return i;
};
function q(e, r, s$1) {
	return String(e).normalize().replaceAll(`\r
`, `
`).split(`
`).map((i) => St(i, r, s$1)).join(`
`);
}
const wt = (e, r, s$1, i, n) => {
	let l = r, u = 0;
	for (let a = s$1; a < i; a++) {
		const o = e[a];
		if (l = l - o.length, u++, l <= n) break;
	}
	return {
		lineCount: l,
		removals: u
	};
}, J = (e) => {
	const { cursor: r, options: s$1, style: i } = e, n = e.output ?? process.stdout, l = rt(n), u = e.columnPadding ?? 0, a = e.rowPadding ?? 4, o = l - u, $ = nt(n), y$2 = import_picocolors.default.dim("..."), E = e.maxItems ?? Number.POSITIVE_INFINITY, p$1 = Math.max($ - a, 0), f = Math.max(Math.min(E, p$1), 5);
	let c$1 = 0;
	r >= f - 3 && (c$1 = Math.max(Math.min(r - f + 3, s$1.length - f), 0));
	let m$1 = f < s$1.length && c$1 > 0, h$1 = f < s$1.length && c$1 + f < s$1.length;
	const g = Math.min(c$1 + f, s$1.length), F = [];
	let v = 0;
	m$1 && v++, h$1 && v++;
	const S$1 = c$1 + (m$1 ? 1 : 0), B = g - (h$1 ? 1 : 0);
	for (let A = S$1; A < B; A++) {
		const C = q(i(s$1[A], A === r), o, {
			hard: !0,
			trim: !1
		}).split(`
`);
		F.push(C), v += C.length;
	}
	if (v > p$1) {
		let A = 0, C = 0, _$1 = v;
		const D$1 = r - S$1, T$1 = (L$1, w$2) => wt(F, _$1, L$1, w$2, p$1);
		m$1 ? ({lineCount: _$1, removals: A} = T$1(0, D$1), _$1 > p$1 && ({lineCount: _$1, removals: C} = T$1(D$1 + 1, F.length))) : ({lineCount: _$1, removals: C} = T$1(D$1 + 1, F.length), _$1 > p$1 && ({lineCount: _$1, removals: A} = T$1(0, D$1))), A > 0 && (m$1 = !0, F.splice(0, A)), C > 0 && (h$1 = !0, F.splice(F.length - C, C));
	}
	const b = [];
	m$1 && b.push(y$2);
	for (const A of F) for (const C of A) b.push(C);
	return h$1 && b.push(y$2), b;
};
function Ke(e) {
	return e.label ?? String(e.value ?? "");
}
function qe(e, r) {
	if (!e) return !0;
	const s$1 = (r.label ?? String(r.value ?? "")).toLowerCase(), i = (r.hint ?? "").toLowerCase(), n = String(r.value).toLowerCase(), l = e.toLowerCase();
	return s$1.includes(l) || i.includes(l) || n.includes(l);
}
function Bt$1(e, r) {
	const s$1 = [];
	for (const i of r) e.includes(i.value) && s$1.push(i);
	return s$1;
}
const Je = (e) => new Vt({
	options: e.options,
	initialValue: e.initialValue ? [e.initialValue] : void 0,
	initialUserInput: e.initialUserInput,
	filter: (r, s$1) => qe(r, s$1),
	signal: e.signal,
	input: e.input,
	output: e.output,
	validate: e.validate,
	render() {
		const r = [`${import_picocolors.default.gray(d$1)}`, `${W(this.state)}  ${e.message}`], s$1 = this.userInput, i = String(this.value ?? ""), n = this.options, l = e.placeholder, u = i === "" && l !== void 0;
		switch (this.state) {
			case "submit": {
				const a = Bt$1(this.selectedValues, n), o = a.length > 0 ? `  ${import_picocolors.default.dim(a.map(Ke).join(", "))}` : "";
				return `${r.join(`
`)}
${import_picocolors.default.gray(d$1)}${o}`;
			}
			case "cancel": {
				const a = s$1 ? `  ${import_picocolors.default.strikethrough(import_picocolors.default.dim(s$1))}` : "";
				return `${r.join(`
`)}
${import_picocolors.default.gray(d$1)}${a}`;
			}
			default: {
				let a = "";
				if (this.isNavigating || u) {
					const c$1 = u ? l : s$1;
					a = c$1 !== "" ? ` ${import_picocolors.default.dim(c$1)}` : "";
				} else a = ` ${this.userInputWithCursor}`;
				const o = this.filteredOptions.length !== n.length ? import_picocolors.default.dim(` (${this.filteredOptions.length} match${this.filteredOptions.length === 1 ? "" : "es"})`) : "", $ = this.filteredOptions.length === 0 && s$1 ? [`${import_picocolors.default.cyan(d$1)}  ${import_picocolors.default.yellow("No matches found")}`] : [], y$2 = this.state === "error" ? [`${import_picocolors.default.yellow(d$1)}  ${import_picocolors.default.yellow(this.error)}`] : [];
				r.push(`${import_picocolors.default.cyan(d$1)}`, `${import_picocolors.default.cyan(d$1)}  ${import_picocolors.default.dim("Search:")}${a}${o}`, ...$, ...y$2);
				const E = [
					`${import_picocolors.default.dim("↑/↓")} to select`,
					`${import_picocolors.default.dim("Enter:")} confirm`,
					`${import_picocolors.default.dim("Type:")} to search`
				], p$1 = [`${import_picocolors.default.cyan(d$1)}  ${import_picocolors.default.dim(E.join(" • "))}`, `${import_picocolors.default.cyan(x)}`], f = this.filteredOptions.length === 0 ? [] : J({
					cursor: this.cursor,
					options: this.filteredOptions,
					columnPadding: 3,
					rowPadding: r.length + p$1.length,
					style: (c$1, m$1) => {
						const h$1 = Ke(c$1), g = c$1.hint && c$1.value === this.focusedValue ? import_picocolors.default.dim(` (${c$1.hint})`) : "";
						return m$1 ? `${import_picocolors.default.green(Y)} ${h$1}${g}` : `${import_picocolors.default.dim(K)} ${import_picocolors.default.dim(h$1)}${g}`;
					},
					maxItems: e.maxItems,
					output: e.output
				});
				return [
					...r,
					...f.map((c$1) => `${import_picocolors.default.cyan(d$1)}  ${c$1}`),
					...p$1
				].join(`
`);
			}
		}
	}
}).prompt(), bt = (e) => {
	const r = (i, n, l, u) => {
		const a = l.includes(i.value), o = i.label ?? String(i.value ?? ""), $ = i.hint && u !== void 0 && i.value === u ? import_picocolors.default.dim(` (${i.hint})`) : "", y$2 = a ? import_picocolors.default.green(V) : import_picocolors.default.dim(z);
		return n ? `${y$2} ${o}${$}` : `${y$2} ${import_picocolors.default.dim(o)}`;
	}, s$1 = new Vt({
		options: e.options,
		multiple: !0,
		filter: (i, n) => qe(i, n),
		validate: () => {
			if (e.required && s$1.selectedValues.length === 0) return "Please select at least one item";
		},
		initialValue: e.initialValues,
		signal: e.signal,
		input: e.input,
		output: e.output,
		render() {
			const i = `${import_picocolors.default.gray(d$1)}
${W(this.state)}  ${e.message}
`, n = this.userInput, l = e.placeholder, u = n === "" && l !== void 0, a = this.isNavigating || u ? import_picocolors.default.dim(u ? l : n) : this.userInputWithCursor, o = this.options, $ = this.filteredOptions.length !== o.length ? import_picocolors.default.dim(` (${this.filteredOptions.length} match${this.filteredOptions.length === 1 ? "" : "es"})`) : "";
			switch (this.state) {
				case "submit": return `${i}${import_picocolors.default.gray(d$1)}  ${import_picocolors.default.dim(`${this.selectedValues.length} items selected`)}`;
				case "cancel": return `${i}${import_picocolors.default.gray(d$1)}  ${import_picocolors.default.strikethrough(import_picocolors.default.dim(n))}`;
				default: {
					const y$2 = [
						`${import_picocolors.default.dim("↑/↓")} to navigate`,
						`${import_picocolors.default.dim(this.isNavigating ? "Space/Tab:" : "Tab:")} select`,
						`${import_picocolors.default.dim("Enter:")} confirm`,
						`${import_picocolors.default.dim("Type:")} to search`
					], E = this.filteredOptions.length === 0 && n ? [`${import_picocolors.default.cyan(d$1)}  ${import_picocolors.default.yellow("No matches found")}`] : [], p$1 = this.state === "error" ? [`${import_picocolors.default.cyan(d$1)}  ${import_picocolors.default.yellow(this.error)}`] : [], f = J({
						cursor: this.cursor,
						options: this.filteredOptions,
						style: (c$1, m$1) => r(c$1, m$1, this.selectedValues, this.focusedValue),
						maxItems: e.maxItems,
						output: e.output
					});
					return [
						i,
						`${import_picocolors.default.cyan(d$1)}  ${import_picocolors.default.dim("Search:")} ${a}${$}`,
						...E,
						...p$1,
						...f.map((c$1) => `${import_picocolors.default.cyan(d$1)}  ${c$1}`),
						`${import_picocolors.default.cyan(d$1)}  ${import_picocolors.default.dim(y$2.join(" • "))}`,
						`${import_picocolors.default.cyan(x)}`
					].join(`
`);
				}
			}
		}
	});
	return s$1.prompt();
}, xt$1 = [
	We,
	he,
	pe,
	me
], _t = [
	$e,
	Re,
	x,
	Oe
];
function Xe(e, r, s$1, i) {
	let n = s$1, l = s$1;
	return i === "center" ? n = Math.floor((r - e) / 2) : i === "right" && (n = r - e - s$1), l = r - n - e, [n, l];
}
const Dt = (e) => e, Tt$1 = (e = "", r = "", s$1) => {
	const i = s$1?.output ?? process.stdout, n = rt(i), l = 2, u = s$1?.titlePadding ?? 1, a = s$1?.contentPadding ?? 2, o = s$1?.width === void 0 || s$1.width === "auto" ? 1 : Math.min(1, s$1.width), $ = (s$1?.withGuide ?? _.withGuide) !== !1 ? `${d$1} ` : "", y$2 = s$1?.formatBorder ?? Dt, E = (s$1?.rounded ? xt$1 : _t).map(y$2), p$1 = y$2(se), f = y$2(d$1), c$1 = M($), m$1 = M(r), h$1 = n - c$1;
	let g = Math.floor(n * o) - c$1;
	if (s$1?.width === "auto") {
		const _$1 = e.split(`
`);
		let D$1 = m$1 + u * 2;
		for (const L$1 of _$1) {
			const w$2 = M(L$1) + a * 2;
			w$2 > D$1 && (D$1 = w$2);
		}
		const T$1 = D$1 + l;
		T$1 < g && (g = T$1);
	}
	g % 2 !== 0 && (g < h$1 ? g++ : g--);
	const F = g - l, v = F - u * 2, S$1 = m$1 > v ? `${r.slice(0, v - 3)}...` : r, [B, b] = Xe(M(S$1), F, u, s$1?.titleAlign), A = q(e, F - a * 2, {
		hard: !0,
		trim: !1
	});
	i.write(`${$}${E[0]}${p$1.repeat(B)}${S$1}${p$1.repeat(b)}${E[1]}
`);
	const C = A.split(`
`);
	for (const _$1 of C) {
		const [D$1, T$1] = Xe(M(_$1), F, a, s$1?.contentAlign);
		i.write(`${$}${f}${" ".repeat(D$1)}${_$1}${" ".repeat(T$1)}${f}
`);
	}
	i.write(`${$}${E[2]}${p$1.repeat(F)}${E[3]}
`);
}, Mt$1 = (e) => {
	const r = e.active ?? "Yes", s$1 = e.inactive ?? "No";
	return new kt({
		active: r,
		inactive: s$1,
		signal: e.signal,
		input: e.input,
		output: e.output,
		initialValue: e.initialValue ?? !0,
		render() {
			const i = `${import_picocolors.default.gray(d$1)}
${W(this.state)}  ${e.message}
`, n = this.value ? r : s$1;
			switch (this.state) {
				case "submit": return `${i}${import_picocolors.default.gray(d$1)}  ${import_picocolors.default.dim(n)}`;
				case "cancel": return `${i}${import_picocolors.default.gray(d$1)}  ${import_picocolors.default.strikethrough(import_picocolors.default.dim(n))}
${import_picocolors.default.gray(d$1)}`;
				default: return `${i}${import_picocolors.default.cyan(d$1)}  ${this.value ? `${import_picocolors.default.green(Y)} ${r}` : `${import_picocolors.default.dim(K)} ${import_picocolors.default.dim(r)}`} ${import_picocolors.default.dim("/")} ${this.value ? `${import_picocolors.default.dim(K)} ${import_picocolors.default.dim(s$1)}` : `${import_picocolors.default.green(Y)} ${s$1}`}
${import_picocolors.default.cyan(x)}
`;
			}
		}
	}).prompt();
}, Rt = async (e, r) => {
	const s$1 = {}, i = Object.keys(e);
	for (const n of i) {
		const l = e[n], u = await l({ results: s$1 })?.catch((a) => {
			throw a;
		});
		if (typeof r?.onCancel == "function" && Ct(u)) {
			s$1[n] = "canceled", r.onCancel({ results: s$1 });
			continue;
		}
		s$1[n] = u;
	}
	return s$1;
}, Ot = (e) => {
	const { selectableGroups: r = !0, groupSpacing: s$1 = 0 } = e, i = (l, u, a = []) => {
		const o = l.label ?? String(l.value), $ = typeof l.group == "string", y$2 = $ && (a[a.indexOf(l) + 1] ?? { group: !0 }), E = $ && y$2 && y$2.group === !0, p$1 = $ ? r ? `${E ? x : d$1} ` : "  " : "";
		let f = "";
		if (s$1 > 0 && !$) {
			const m$1 = `
${import_picocolors.default.cyan(d$1)}`;
			f = `${m$1.repeat(s$1 - 1)}${m$1}  `;
		}
		if (u === "active") return `${f}${import_picocolors.default.dim(p$1)}${import_picocolors.default.cyan(te)} ${o}${l.hint ? ` ${import_picocolors.default.dim(`(${l.hint})`)}` : ""}`;
		if (u === "group-active") return `${f}${p$1}${import_picocolors.default.cyan(te)} ${import_picocolors.default.dim(o)}`;
		if (u === "group-active-selected") return `${f}${p$1}${import_picocolors.default.green(V)} ${import_picocolors.default.dim(o)}`;
		if (u === "selected") {
			const m$1 = $ || r ? import_picocolors.default.green(V) : "";
			return `${f}${import_picocolors.default.dim(p$1)}${m$1} ${import_picocolors.default.dim(o)}${l.hint ? ` ${import_picocolors.default.dim(`(${l.hint})`)}` : ""}`;
		}
		if (u === "cancelled") return `${import_picocolors.default.strikethrough(import_picocolors.default.dim(o))}`;
		if (u === "active-selected") return `${f}${import_picocolors.default.dim(p$1)}${import_picocolors.default.green(V)} ${o}${l.hint ? ` ${import_picocolors.default.dim(`(${l.hint})`)}` : ""}`;
		if (u === "submitted") return `${import_picocolors.default.dim(o)}`;
		const c$1 = $ || r ? import_picocolors.default.dim(z) : "";
		return `${f}${import_picocolors.default.dim(p$1)}${c$1} ${import_picocolors.default.dim(o)}`;
	}, n = e.required ?? !0;
	return new yt({
		options: e.options,
		signal: e.signal,
		input: e.input,
		output: e.output,
		initialValues: e.initialValues,
		required: n,
		cursorAt: e.cursorAt,
		selectableGroups: r,
		validate(l) {
			if (n && (l === void 0 || l.length === 0)) return `Please select at least one option.
${import_picocolors.default.reset(import_picocolors.default.dim(`Press ${import_picocolors.default.gray(import_picocolors.default.bgWhite(import_picocolors.default.inverse(" space ")))} to select, ${import_picocolors.default.gray(import_picocolors.default.bgWhite(import_picocolors.default.inverse(" enter ")))} to submit`))}`;
		},
		render() {
			const l = `${import_picocolors.default.gray(d$1)}
${W(this.state)}  ${e.message}
`, u = this.value ?? [];
			switch (this.state) {
				case "submit": {
					const a = this.options.filter(({ value: $ }) => u.includes($)).map(($) => i($, "submitted")), o = a.length === 0 ? "" : `  ${a.join(import_picocolors.default.dim(", "))}`;
					return `${l}${import_picocolors.default.gray(d$1)}${o}`;
				}
				case "cancel": {
					const a = this.options.filter(({ value: o }) => u.includes(o)).map((o) => i(o, "cancelled")).join(import_picocolors.default.dim(", "));
					return `${l}${import_picocolors.default.gray(d$1)}  ${a.trim() ? `${a}
${import_picocolors.default.gray(d$1)}` : ""}`;
				}
				case "error": {
					const a = this.error.split(`
`).map((o, $) => $ === 0 ? `${import_picocolors.default.yellow(x)}  ${import_picocolors.default.yellow(o)}` : `   ${o}`).join(`
`);
					return `${l}${import_picocolors.default.yellow(d$1)}  ${this.options.map((o, $, y$2) => {
						const E = u.includes(o.value) || o.group === !0 && this.isGroupSelected(`${o.value}`), p$1 = $ === this.cursor;
						return !p$1 && typeof o.group == "string" && this.options[this.cursor].value === o.group ? i(o, E ? "group-active-selected" : "group-active", y$2) : p$1 && E ? i(o, "active-selected", y$2) : E ? i(o, "selected", y$2) : i(o, p$1 ? "active" : "inactive", y$2);
					}).join(`
${import_picocolors.default.yellow(d$1)}  `)}
${a}
`;
				}
				default: {
					const a = this.options.map(($, y$2, E) => {
						const p$1 = u.includes($.value) || $.group === !0 && this.isGroupSelected(`${$.value}`), f = y$2 === this.cursor, c$1 = !f && typeof $.group == "string" && this.options[this.cursor].value === $.group;
						let m$1 = "";
						return c$1 ? m$1 = i($, p$1 ? "group-active-selected" : "group-active", E) : f && p$1 ? m$1 = i($, "active-selected", E) : p$1 ? m$1 = i($, "selected", E) : m$1 = i($, f ? "active" : "inactive", E), `${y$2 !== 0 && !m$1.startsWith(`
`) ? "  " : ""}${m$1}`;
					}).join(`
${import_picocolors.default.cyan(d$1)}`), o = a.startsWith(`
`) ? "" : "  ";
					return `${l}${import_picocolors.default.cyan(d$1)}${o}${a}
${import_picocolors.default.cyan(x)}
`;
				}
			}
		}
	}).prompt();
}, R = {
	message: (e = [], { symbol: r = import_picocolors.default.gray(d$1), secondarySymbol: s$1 = import_picocolors.default.gray(d$1), output: i = process.stdout, spacing: n = 1, withGuide: l } = {}) => {
		const u = [], a = (l ?? _.withGuide) !== !1, o = a ? s$1 : "", $ = a ? `${r}  ` : "", y$2 = a ? `${s$1}  ` : "";
		for (let p$1 = 0; p$1 < n; p$1++) u.push(o);
		const E = Array.isArray(e) ? e : e.split(`
`);
		if (E.length > 0) {
			const [p$1, ...f] = E;
			p$1.length > 0 ? u.push(`${$}${p$1}`) : u.push(a ? "" : r);
			for (const c$1 of f) c$1.length > 0 ? u.push(`${y$2}${c$1}`) : u.push(a ? "" : s$1);
		}
		i.write(`${u.join(`
`)}
`);
	},
	info: (e, r) => {
		R.message(e, {
			...r,
			symbol: import_picocolors.default.blue(ge)
		});
	},
	success: (e, r) => {
		R.message(e, {
			...r,
			symbol: import_picocolors.default.green(fe)
		});
	},
	step: (e, r) => {
		R.message(e, {
			...r,
			symbol: import_picocolors.default.green(j)
		});
	},
	warn: (e, r) => {
		R.message(e, {
			...r,
			symbol: import_picocolors.default.yellow(Fe)
		});
	},
	warning: (e, r) => {
		R.warn(e, r);
	},
	error: (e, r) => {
		R.message(e, {
			...r,
			symbol: import_picocolors.default.red(ye)
		});
	}
}, Nt = (e = "", r) => {
	(r?.output ?? process.stdout).write(`${import_picocolors.default.gray(x)}  ${import_picocolors.default.red(e)}

`);
}, Pt = (e = "", r) => {
	(r?.output ?? process.stdout).write(`${import_picocolors.default.gray($e)}  ${e}
`);
}, Wt$1 = (e = "", r) => {
	(r?.output ?? process.stdout).write(`${import_picocolors.default.gray(d$1)}
${import_picocolors.default.gray(x)}  ${e}

`);
}, Q = (e, r) => e.split(`
`).map((s$1) => r(s$1)).join(`
`), Lt$1 = (e) => {
	const r = (i, n) => {
		const l = i.label ?? String(i.value);
		return n === "disabled" ? `${import_picocolors.default.gray(z)} ${Q(l, import_picocolors.default.gray)}${i.hint ? ` ${import_picocolors.default.dim(`(${i.hint ?? "disabled"})`)}` : ""}` : n === "active" ? `${import_picocolors.default.cyan(te)} ${l}${i.hint ? ` ${import_picocolors.default.dim(`(${i.hint})`)}` : ""}` : n === "selected" ? `${import_picocolors.default.green(V)} ${Q(l, import_picocolors.default.dim)}${i.hint ? ` ${import_picocolors.default.dim(`(${i.hint})`)}` : ""}` : n === "cancelled" ? `${Q(l, (u) => import_picocolors.default.strikethrough(import_picocolors.default.dim(u)))}` : n === "active-selected" ? `${import_picocolors.default.green(V)} ${l}${i.hint ? ` ${import_picocolors.default.dim(`(${i.hint})`)}` : ""}` : n === "submitted" ? `${Q(l, import_picocolors.default.dim)}` : `${import_picocolors.default.dim(z)} ${Q(l, import_picocolors.default.dim)}`;
	}, s$1 = e.required ?? !0;
	return new Mt({
		options: e.options,
		signal: e.signal,
		input: e.input,
		output: e.output,
		initialValues: e.initialValues,
		required: s$1,
		cursorAt: e.cursorAt,
		validate(i) {
			if (s$1 && (i === void 0 || i.length === 0)) return `Please select at least one option.
${import_picocolors.default.reset(import_picocolors.default.dim(`Press ${import_picocolors.default.gray(import_picocolors.default.bgWhite(import_picocolors.default.inverse(" space ")))} to select, ${import_picocolors.default.gray(import_picocolors.default.bgWhite(import_picocolors.default.inverse(" enter ")))} to submit`))}`;
		},
		render() {
			const i = Bt(e.output, e.message, `${Ee(this.state)}  `, `${W(this.state)}  `), n = `${import_picocolors.default.gray(d$1)}
${i}
`, l = this.value ?? [], u = (a, o) => {
				if (a.disabled) return r(a, "disabled");
				const $ = l.includes(a.value);
				return o && $ ? r(a, "active-selected") : $ ? r(a, "selected") : r(a, o ? "active" : "inactive");
			};
			switch (this.state) {
				case "submit": {
					const a = this.options.filter(({ value: $ }) => l.includes($)).map(($) => r($, "submitted")).join(import_picocolors.default.dim(", ")) || import_picocolors.default.dim("none");
					return `${n}${Bt(e.output, a, `${import_picocolors.default.gray(d$1)}  `)}`;
				}
				case "cancel": {
					const a = this.options.filter(({ value: $ }) => l.includes($)).map(($) => r($, "cancelled")).join(import_picocolors.default.dim(", "));
					if (a.trim() === "") return `${n}${import_picocolors.default.gray(d$1)}`;
					return `${n}${Bt(e.output, a, `${import_picocolors.default.gray(d$1)}  `)}
${import_picocolors.default.gray(d$1)}`;
				}
				case "error": {
					const a = `${import_picocolors.default.yellow(d$1)}  `, o = this.error.split(`
`).map(($, y$2) => y$2 === 0 ? `${import_picocolors.default.yellow(x)}  ${import_picocolors.default.yellow($)}` : `   ${$}`).join(`
`);
					return `${n}${a}${J({
						output: e.output,
						options: this.options,
						cursor: this.cursor,
						maxItems: e.maxItems,
						columnPadding: a.length,
						style: u
					}).join(`
${a}`)}
${o}
`;
				}
				default: {
					const a = `${import_picocolors.default.cyan(d$1)}  `;
					return `${n}${a}${J({
						output: e.output,
						options: this.options,
						cursor: this.cursor,
						maxItems: e.maxItems,
						columnPadding: a.length,
						style: u
					}).join(`
${a}`)}
${import_picocolors.default.cyan(x)}
`;
				}
			}
		}
	}).prompt();
}, jt = (e) => import_picocolors.default.dim(e), Vt$1 = (e, r, s$1) => {
	const i = {
		hard: !0,
		trim: !1
	}, n = q(e, r, i).split(`
`), l = n.reduce((o, $) => Math.max(M($), o), 0);
	return q(e, r - (n.map(s$1).reduce((o, $) => Math.max(M($), o), 0) - l), i);
}, kt$1 = (e = "", r = "", s$1) => {
	const i = s$1?.output ?? process$1.stdout, n = (s$1?.withGuide ?? _.withGuide) !== !1, l = s$1?.format ?? jt, u = [
		"",
		...Vt$1(e, rt(i) - 6, l).split(`
`).map(l),
		""
	], a = M(r), o = Math.max(u.reduce((p$1, f) => {
		const c$1 = M(f);
		return c$1 > p$1 ? c$1 : p$1;
	}, 0), a) + 2, $ = u.map((p$1) => `${import_picocolors.default.gray(d$1)}  ${p$1}${" ".repeat(o - M(p$1))}${import_picocolors.default.gray(d$1)}`).join(`
`), y$2 = n ? `${import_picocolors.default.gray(d$1)}
` : "", E = n ? Pe : pe;
	i.write(`${y$2}${import_picocolors.default.green(j)}  ${import_picocolors.default.reset(r)} ${import_picocolors.default.gray(se.repeat(Math.max(o - a - 1, 1)) + he)}
${$}
${import_picocolors.default.gray(E + se.repeat(o + 2) + me)}
`);
}, Gt = (e) => new Lt({
	validate: e.validate,
	mask: e.mask ?? Ne,
	signal: e.signal,
	input: e.input,
	output: e.output,
	render() {
		const r = `${import_picocolors.default.gray(d$1)}
${W(this.state)}  ${e.message}
`, s$1 = this.userInputWithCursor, i = this.masked;
		switch (this.state) {
			case "error": {
				const n = i ? `  ${i}` : "";
				return e.clearOnError && this.clear(), `${r.trim()}
${import_picocolors.default.yellow(d$1)}${n}
${import_picocolors.default.yellow(x)}  ${import_picocolors.default.yellow(this.error)}
`;
			}
			case "submit": {
				const n = i ? `  ${import_picocolors.default.dim(i)}` : "";
				return `${r}${import_picocolors.default.gray(d$1)}${n}`;
			}
			case "cancel": {
				const n = i ? `  ${import_picocolors.default.strikethrough(import_picocolors.default.dim(i))}` : "";
				return `${r}${import_picocolors.default.gray(d$1)}${n}${i ? `
${import_picocolors.default.gray(d$1)}` : ""}`;
			}
			default: return `${r}${import_picocolors.default.cyan(d$1)}  ${s$1}
${import_picocolors.default.cyan(x)}
`;
		}
	}
}).prompt(), Ht = (e) => {
	const r = e.validate;
	return Je({
		...e,
		initialUserInput: e.initialValue ?? e.root ?? process.cwd(),
		maxItems: 5,
		validate(s$1) {
			if (!Array.isArray(s$1)) {
				if (!s$1) return "Please select a path";
				if (r) return r(s$1);
			}
		},
		options() {
			const s$1 = this.userInput;
			if (s$1 === "") return [];
			try {
				let i;
				return existsSync(s$1) ? lstatSync(s$1).isDirectory() ? i = s$1 : i = dirname(s$1) : i = dirname(s$1), readdirSync(i).map((n) => {
					const l = join(i, n);
					return {
						name: n,
						path: l,
						isDirectory: lstatSync(l).isDirectory()
					};
				}).filter(({ path: n, isDirectory: l }) => n.startsWith(s$1) && (e.directory || !l)).map((n) => ({ value: n.path }));
			} catch {
				return [];
			}
		}
	});
}, Ut = import_picocolors.default.magenta, we = ({ indicator: e = "dots", onCancel: r, output: s$1 = process.stdout, cancelMessage: i, errorMessage: n, frames: l = ee ? [
	"◒",
	"◐",
	"◓",
	"◑"
] : [
	"•",
	"o",
	"O",
	"0"
], delay: u = ee ? 80 : 120, signal: a, ...o } = {}) => {
	const $ = ue();
	let y$2, E, p$1 = !1, f = !1, c$1 = "", m$1, h$1 = performance.now();
	const g = rt(s$1), F = o?.styleFrame ?? Ut, v = (w$2) => {
		const O$1 = w$2 > 1 ? n ?? _.messages.error : i ?? _.messages.cancel;
		f = w$2 === 1, p$1 && (L$1(O$1, w$2), f && typeof r == "function" && r());
	}, S$1 = () => v(2), B = () => v(1), b = () => {
		process.on("uncaughtExceptionMonitor", S$1), process.on("unhandledRejection", S$1), process.on("SIGINT", B), process.on("SIGTERM", B), process.on("exit", v), a && a.addEventListener("abort", B);
	}, A = () => {
		process.removeListener("uncaughtExceptionMonitor", S$1), process.removeListener("unhandledRejection", S$1), process.removeListener("SIGINT", B), process.removeListener("SIGTERM", B), process.removeListener("exit", v), a && a.removeEventListener("abort", B);
	}, C = () => {
		if (m$1 === void 0) return;
		$ && s$1.write(`
`);
		const w$2 = q(m$1, g, {
			hard: !0,
			trim: !1
		}).split(`
`);
		w$2.length > 1 && s$1.write(import_src$1.cursor.up(w$2.length - 1)), s$1.write(import_src$1.cursor.to(0)), s$1.write(import_src$1.erase.down());
	}, _$1 = (w$2) => w$2.replace(/\.+$/, ""), D$1 = (w$2) => {
		const O$1 = (performance.now() - w$2) / 1e3, P$1 = Math.floor(O$1 / 60), G$1 = Math.floor(O$1 % 60);
		return P$1 > 0 ? `[${P$1}m ${G$1}s]` : `[${G$1}s]`;
	}, T$1 = (w$2 = "") => {
		p$1 = !0, y$2 = xt({ output: s$1 }), c$1 = _$1(w$2), h$1 = performance.now(), s$1.write(`${import_picocolors.default.gray(d$1)}
`);
		let O$1 = 0, P$1 = 0;
		b(), E = setInterval(() => {
			if ($ && c$1 === m$1) return;
			C(), m$1 = c$1;
			const G$1 = F(l[O$1]);
			let Z$1;
			if ($) Z$1 = `${G$1}  ${c$1}...`;
			else if (e === "timer") Z$1 = `${G$1}  ${c$1} ${D$1(h$1)}`;
			else {
				const Ze = ".".repeat(Math.floor(P$1)).slice(0, 3);
				Z$1 = `${G$1}  ${c$1}${Ze}`;
			}
			const Qe = q(Z$1, g, {
				hard: !0,
				trim: !1
			});
			s$1.write(Qe), O$1 = O$1 + 1 < l.length ? O$1 + 1 : 0, P$1 = P$1 < 4 ? P$1 + .125 : 0;
		}, u);
	}, L$1 = (w$2 = "", O$1 = 0) => {
		if (!p$1) return;
		p$1 = !1, clearInterval(E), C();
		const P$1 = O$1 === 0 ? import_picocolors.default.green(j) : O$1 === 1 ? import_picocolors.default.red(ce) : import_picocolors.default.red(de);
		c$1 = w$2 ?? c$1, e === "timer" ? s$1.write(`${P$1}  ${c$1} ${D$1(h$1)}
`) : s$1.write(`${P$1}  ${c$1}
`), A(), y$2();
	};
	return {
		start: T$1,
		stop: (w$2 = "") => L$1(w$2, 0),
		message: (w$2 = "") => {
			c$1 = _$1(w$2 ?? c$1);
		},
		cancel: (w$2 = "") => L$1(w$2, 1),
		error: (w$2 = "") => L$1(w$2, 2),
		get isCancelled() {
			return f;
		}
	};
}, Ye = {
	light: I("─", "-"),
	heavy: I("━", "="),
	block: I("█", "#")
};
const oe = (e, r) => e.includes(`
`) ? e.split(`
`).map((s$1) => r(s$1)).join(`
`) : r(e), qt = (e) => {
	const r = (s$1, i) => {
		const n = s$1.label ?? String(s$1.value);
		switch (i) {
			case "disabled": return `${import_picocolors.default.gray(K)} ${oe(n, import_picocolors.default.gray)}${s$1.hint ? ` ${import_picocolors.default.dim(`(${s$1.hint ?? "disabled"})`)}` : ""}`;
			case "selected": return `${oe(n, import_picocolors.default.dim)}`;
			case "active": return `${import_picocolors.default.green(Y)} ${n}${s$1.hint ? ` ${import_picocolors.default.dim(`(${s$1.hint})`)}` : ""}`;
			case "cancelled": return `${oe(n, (l) => import_picocolors.default.strikethrough(import_picocolors.default.dim(l)))}`;
			default: return `${import_picocolors.default.dim(K)} ${oe(n, import_picocolors.default.dim)}`;
		}
	};
	return new Wt({
		options: e.options,
		signal: e.signal,
		input: e.input,
		output: e.output,
		initialValue: e.initialValue,
		render() {
			const s$1 = `${W(this.state)}  `, i = `${Ee(this.state)}  `, n = Bt(e.output, e.message, i, s$1), l = `${import_picocolors.default.gray(d$1)}
${n}
`;
			switch (this.state) {
				case "submit": {
					const u = `${import_picocolors.default.gray(d$1)}  `;
					return `${l}${Bt(e.output, r(this.options[this.cursor], "selected"), u)}`;
				}
				case "cancel": {
					const u = `${import_picocolors.default.gray(d$1)}  `;
					return `${l}${Bt(e.output, r(this.options[this.cursor], "cancelled"), u)}
${import_picocolors.default.gray(d$1)}`;
				}
				default: {
					const u = `${import_picocolors.default.cyan(d$1)}  `;
					return `${l}${u}${J({
						output: e.output,
						cursor: this.cursor,
						options: this.options,
						maxItems: e.maxItems,
						columnPadding: u.length,
						style: (a, o) => r(a, a.disabled ? "disabled" : o ? "active" : "inactive")
					}).join(`
${u}`)}
${import_picocolors.default.cyan(x)}
`;
				}
			}
		}
	}).prompt();
}, Jt = (e) => {
	const r = (s$1, i = "inactive") => {
		const n = s$1.label ?? String(s$1.value);
		return i === "selected" ? `${import_picocolors.default.dim(n)}` : i === "cancelled" ? `${import_picocolors.default.strikethrough(import_picocolors.default.dim(n))}` : i === "active" ? `${import_picocolors.default.bgCyan(import_picocolors.default.gray(` ${s$1.value} `))} ${n} ${s$1.hint ? import_picocolors.default.dim(`(${s$1.hint})`) : ""}` : `${import_picocolors.default.gray(import_picocolors.default.bgWhite(import_picocolors.default.inverse(` ${s$1.value} `)))} ${n} ${s$1.hint ? import_picocolors.default.dim(`(${s$1.hint})`) : ""}`;
	};
	return new Tt({
		options: e.options,
		signal: e.signal,
		input: e.input,
		output: e.output,
		initialValue: e.initialValue,
		render() {
			const s$1 = `${import_picocolors.default.gray(d$1)}
${W(this.state)}  ${e.message}
`;
			switch (this.state) {
				case "submit": return `${s$1}${import_picocolors.default.gray(d$1)}  ${r(this.options.find((i) => i.value === this.value) ?? e.options[0], "selected")}`;
				case "cancel": return `${s$1}${import_picocolors.default.gray(d$1)}  ${r(this.options[0], "cancelled")}
${import_picocolors.default.gray(d$1)}`;
				default: return `${s$1}${import_picocolors.default.cyan(d$1)}  ${this.options.map((i, n) => r(i, n === this.cursor ? "active" : "inactive")).join(`
${import_picocolors.default.cyan(d$1)}  `)}
${import_picocolors.default.cyan(x)}
`;
			}
		}
	}).prompt();
}, ze = `${import_picocolors.default.gray(d$1)}  `, k = {
	message: async (e, { symbol: r = import_picocolors.default.gray(d$1) } = {}) => {
		process.stdout.write(`${import_picocolors.default.gray(d$1)}
${r}  `);
		let s$1 = 3;
		for await (let i of e) {
			i = i.replace(/\n/g, `
${ze}`), i.includes(`
`) && (s$1 = 3 + stripVTControlCharacters(i.slice(i.lastIndexOf(`
`))).length);
			const n = stripVTControlCharacters(i).length;
			s$1 + n < process.stdout.columns ? (s$1 += n, process.stdout.write(i)) : (process.stdout.write(`
${ze}${i.trimStart()}`), s$1 = 3 + stripVTControlCharacters(i.trimStart()).length);
		}
		process.stdout.write(`
`);
	},
	info: (e) => k.message(e, { symbol: import_picocolors.default.blue(ge) }),
	success: (e) => k.message(e, { symbol: import_picocolors.default.green(fe) }),
	step: (e) => k.message(e, { symbol: import_picocolors.default.green(j) }),
	warn: (e) => k.message(e, { symbol: import_picocolors.default.yellow(Fe) }),
	warning: (e) => k.warn(e),
	error: (e) => k.message(e, { symbol: import_picocolors.default.red(ye) })
}, Xt = async (e, r) => {
	for (const s$1 of e) {
		if (s$1.enabled === !1) continue;
		const i = we(r);
		i.start(s$1.title);
		const n = await s$1.task(i.message);
		i.stop(n || s$1.title);
	}
}, Yt = (e) => e.replace(/\x1b\[(?:\d+;)*\d*[ABCDEFGHfJKSTsu]|\x1b\[(s|u)/g, ""), zt = (e) => {
	const r = e.output ?? process.stdout, s$1 = rt(r), i = import_picocolors.default.gray(d$1), n = e.spacing ?? 1, l = 3, u = e.retainLog === !0, a = !ue() && Te(r);
	r.write(`${i}
`), r.write(`${import_picocolors.default.green(j)}  ${e.title}
`);
	for (let h$1 = 0; h$1 < n; h$1++) r.write(`${i}
`);
	const o = [{
		value: "",
		full: ""
	}];
	let $ = !1;
	const y$2 = (h$1) => {
		if (o.length === 0) return;
		let g = 0;
		h$1 && (g += n + 2);
		for (const F of o) {
			const { value: v, result: S$1 } = F;
			let B = S$1?.message ?? v;
			if (B.length === 0) continue;
			S$1 === void 0 && F.header !== void 0 && F.header !== "" && (B += `
${F.header}`);
			const b = B.split(`
`).reduce((A, C) => C === "" ? A + 1 : A + Math.ceil((C.length + l) / s$1), 0);
			g += b;
		}
		g > 0 && (g += 1, r.write(import_src$1.erase.lines(g)));
	}, E = (h$1, g, F) => {
		const v = F ? `${h$1.full}
${h$1.value}` : h$1.value;
		h$1.header !== void 0 && h$1.header !== "" && R.message(h$1.header.split(`
`).map(import_picocolors.default.bold), {
			output: r,
			secondarySymbol: i,
			symbol: i,
			spacing: 0
		}), R.message(v.split(`
`).map(import_picocolors.default.dim), {
			output: r,
			secondarySymbol: i,
			symbol: i,
			spacing: g ?? n
		});
	}, p$1 = () => {
		for (const h$1 of o) {
			const { header: g, value: F, full: v } = h$1;
			(g === void 0 || g.length === 0) && F.length === 0 || E(h$1, void 0, u === !0 && v.length > 0);
		}
	}, f = (h$1, g, F) => {
		if (y$2(!1), (F?.raw !== !0 || !$) && h$1.value !== "" && (h$1.value += `
`), h$1.value += Yt(g), $ = F?.raw === !0, e.limit !== void 0) {
			const v = h$1.value.split(`
`), S$1 = v.length - e.limit;
			if (S$1 > 0) {
				const B = v.splice(0, S$1);
				u && (h$1.full += (h$1.full === "" ? "" : `
`) + B.join(`
`));
			}
			h$1.value = v.join(`
`);
		}
		a && c$1();
	}, c$1 = () => {
		for (const h$1 of o) h$1.result ? h$1.result.status === "error" ? R.error(h$1.result.message, {
			output: r,
			secondarySymbol: i,
			spacing: 0
		}) : R.success(h$1.result.message, {
			output: r,
			secondarySymbol: i,
			spacing: 0
		}) : h$1.value !== "" && E(h$1, 0);
	}, m$1 = (h$1, g) => {
		y$2(!1), h$1.result = g, a && c$1();
	};
	return {
		message(h$1, g) {
			f(o[0], h$1, g);
		},
		group(h$1) {
			const g = {
				header: h$1,
				value: "",
				full: ""
			};
			return o.push(g), {
				message(F, v) {
					f(g, F, v);
				},
				error(F) {
					m$1(g, {
						status: "error",
						message: F
					});
				},
				success(F) {
					m$1(g, {
						status: "success",
						message: F
					});
				}
			};
		},
		error(h$1, g) {
			y$2(!0), R.error(h$1, {
				output: r,
				secondarySymbol: i,
				spacing: 1
			}), g?.showLog !== !1 && p$1(), o.splice(1, o.length - 1), o[0].value = "", o[0].full = "";
		},
		success(h$1, g) {
			y$2(!0), R.success(h$1, {
				output: r,
				secondarySymbol: i,
				spacing: 1
			}), g?.showLog === !0 && p$1(), o.splice(1, o.length - 1), o[0].value = "", o[0].full = "";
		}
	};
}, Qt = (e) => new $t({
	validate: e.validate,
	placeholder: e.placeholder,
	defaultValue: e.defaultValue,
	initialValue: e.initialValue,
	output: e.output,
	signal: e.signal,
	input: e.input,
	render() {
		const r = (e?.withGuide ?? _.withGuide) !== !1, s$1 = `${`${r ? `${import_picocolors.default.gray(d$1)}
` : ""}${W(this.state)}  `}${e.message}
`, i = e.placeholder ? import_picocolors.default.inverse(e.placeholder[0]) + import_picocolors.default.dim(e.placeholder.slice(1)) : import_picocolors.default.inverse(import_picocolors.default.hidden("_")), n = this.userInput ? this.userInputWithCursor : i, l = this.value ?? "";
		switch (this.state) {
			case "error": {
				const u = this.error ? `  ${import_picocolors.default.yellow(this.error)}` : "", a = r ? `${import_picocolors.default.yellow(d$1)}  ` : "", o = r ? import_picocolors.default.yellow(x) : "";
				return `${s$1.trim()}
${a}${n}
${o}${u}
`;
			}
			case "submit": {
				const u = l ? `  ${import_picocolors.default.dim(l)}` : "";
				return `${s$1}${r ? import_picocolors.default.gray(d$1) : ""}${u}`;
			}
			case "cancel": {
				const u = l ? `  ${import_picocolors.default.strikethrough(import_picocolors.default.dim(l))}` : "", a = r ? import_picocolors.default.gray(d$1) : "";
				return `${s$1}${a}${u}${l.trim() ? `
${a}` : ""}`;
			}
			default: return `${s$1}${r ? `${import_picocolors.default.cyan(d$1)}  ` : ""}${n}
${r ? import_picocolors.default.cyan(x) : ""}
`;
		}
	}
}).prompt();

//#endregion
//#region ../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js
var require_ms = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Helpers.
	*/
	var s = 1e3;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var w = d * 7;
	var y = d * 365.25;
	/**
	* Parse or format the given `val`.
	*
	* Options:
	*
	*  - `long` verbose formatting [false]
	*
	* @param {String|Number} val
	* @param {Object} [options]
	* @throws {Error} throw an error if val is not a non-empty string or a number
	* @return {String|Number}
	* @api public
	*/
	module.exports = function(val, options) {
		options = options || {};
		var type = typeof val;
		if (type === "string" && val.length > 0) return parse(val);
		else if (type === "number" && isFinite(val)) return options.long ? fmtLong(val) : fmtShort(val);
		throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
	};
	/**
	* Parse the given `str` and return milliseconds.
	*
	* @param {String} str
	* @return {Number}
	* @api private
	*/
	function parse(str) {
		str = String(str);
		if (str.length > 100) return;
		var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
		if (!match) return;
		var n = parseFloat(match[1]);
		switch ((match[2] || "ms").toLowerCase()) {
			case "years":
			case "year":
			case "yrs":
			case "yr":
			case "y": return n * y;
			case "weeks":
			case "week":
			case "w": return n * w;
			case "days":
			case "day":
			case "d": return n * d;
			case "hours":
			case "hour":
			case "hrs":
			case "hr":
			case "h": return n * h;
			case "minutes":
			case "minute":
			case "mins":
			case "min":
			case "m": return n * m;
			case "seconds":
			case "second":
			case "secs":
			case "sec":
			case "s": return n * s;
			case "milliseconds":
			case "millisecond":
			case "msecs":
			case "msec":
			case "ms": return n;
			default: return;
		}
	}
	/**
	* Short format for `ms`.
	*
	* @param {Number} ms
	* @return {String}
	* @api private
	*/
	function fmtShort(ms) {
		var msAbs = Math.abs(ms);
		if (msAbs >= d) return Math.round(ms / d) + "d";
		if (msAbs >= h) return Math.round(ms / h) + "h";
		if (msAbs >= m) return Math.round(ms / m) + "m";
		if (msAbs >= s) return Math.round(ms / s) + "s";
		return ms + "ms";
	}
	/**
	* Long format for `ms`.
	*
	* @param {Number} ms
	* @return {String}
	* @api private
	*/
	function fmtLong(ms) {
		var msAbs = Math.abs(ms);
		if (msAbs >= d) return plural(ms, msAbs, d, "day");
		if (msAbs >= h) return plural(ms, msAbs, h, "hour");
		if (msAbs >= m) return plural(ms, msAbs, m, "minute");
		if (msAbs >= s) return plural(ms, msAbs, s, "second");
		return ms + " ms";
	}
	/**
	* Pluralization helper.
	*/
	function plural(ms, msAbs, n, name) {
		var isPlural = msAbs >= n * 1.5;
		return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
	}
}));

//#endregion
//#region ../../node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/common.js
var require_common = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* This is the common logic for both the Node.js and web browser
	* implementations of `debug()`.
	*/
	function setup(env$2) {
		createDebug$1.debug = createDebug$1;
		createDebug$1.default = createDebug$1;
		createDebug$1.coerce = coerce;
		createDebug$1.disable = disable;
		createDebug$1.enable = enable;
		createDebug$1.enabled = enabled;
		createDebug$1.humanize = require_ms();
		createDebug$1.destroy = destroy;
		Object.keys(env$2).forEach((key) => {
			createDebug$1[key] = env$2[key];
		});
		/**
		* The currently active debug mode names, and names to skip.
		*/
		createDebug$1.names = [];
		createDebug$1.skips = [];
		/**
		* Map of special "%n" handling functions, for the debug "format" argument.
		*
		* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
		*/
		createDebug$1.formatters = {};
		/**
		* Selects a color for a debug namespace
		* @param {String} namespace The namespace string for the debug instance to be colored
		* @return {Number|String} An ANSI color code for the given namespace
		* @api private
		*/
		function selectColor(namespace) {
			let hash = 0;
			for (let i = 0; i < namespace.length; i++) {
				hash = (hash << 5) - hash + namespace.charCodeAt(i);
				hash |= 0;
			}
			return createDebug$1.colors[Math.abs(hash) % createDebug$1.colors.length];
		}
		createDebug$1.selectColor = selectColor;
		/**
		* Create a debugger with the given `namespace`.
		*
		* @param {String} namespace
		* @return {Function}
		* @api public
		*/
		function createDebug$1(namespace) {
			let prevTime;
			let enableOverride = null;
			let namespacesCache;
			let enabledCache;
			function debug$1(...args) {
				if (!debug$1.enabled) return;
				const self = debug$1;
				const curr = Number(/* @__PURE__ */ new Date());
				self.diff = curr - (prevTime || curr);
				self.prev = prevTime;
				self.curr = curr;
				prevTime = curr;
				args[0] = createDebug$1.coerce(args[0]);
				if (typeof args[0] !== "string") args.unshift("%O");
				let index = 0;
				args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format$1) => {
					if (match === "%%") return "%";
					index++;
					const formatter$1 = createDebug$1.formatters[format$1];
					if (typeof formatter$1 === "function") {
						const val = args[index];
						match = formatter$1.call(self, val);
						args.splice(index, 1);
						index--;
					}
					return match;
				});
				createDebug$1.formatArgs.call(self, args);
				(self.log || createDebug$1.log).apply(self, args);
			}
			debug$1.namespace = namespace;
			debug$1.useColors = createDebug$1.useColors();
			debug$1.color = createDebug$1.selectColor(namespace);
			debug$1.extend = extend;
			debug$1.destroy = createDebug$1.destroy;
			Object.defineProperty(debug$1, "enabled", {
				enumerable: true,
				configurable: false,
				get: () => {
					if (enableOverride !== null) return enableOverride;
					if (namespacesCache !== createDebug$1.namespaces) {
						namespacesCache = createDebug$1.namespaces;
						enabledCache = createDebug$1.enabled(namespace);
					}
					return enabledCache;
				},
				set: (v) => {
					enableOverride = v;
				}
			});
			if (typeof createDebug$1.init === "function") createDebug$1.init(debug$1);
			return debug$1;
		}
		function extend(namespace, delimiter$1) {
			const newDebug = createDebug$1(this.namespace + (typeof delimiter$1 === "undefined" ? ":" : delimiter$1) + namespace);
			newDebug.log = this.log;
			return newDebug;
		}
		/**
		* Enables a debug mode by namespaces. This can include modes
		* separated by a colon and wildcards.
		*
		* @param {String} namespaces
		* @api public
		*/
		function enable(namespaces) {
			createDebug$1.save(namespaces);
			createDebug$1.namespaces = namespaces;
			createDebug$1.names = [];
			createDebug$1.skips = [];
			const split = (typeof namespaces === "string" ? namespaces : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
			for (const ns of split) if (ns[0] === "-") createDebug$1.skips.push(ns.slice(1));
			else createDebug$1.names.push(ns);
		}
		/**
		* Checks if the given string matches a namespace template, honoring
		* asterisks as wildcards.
		*
		* @param {String} search
		* @param {String} template
		* @return {Boolean}
		*/
		function matchesTemplate(search, template) {
			let searchIndex = 0;
			let templateIndex = 0;
			let starIndex = -1;
			let matchIndex = 0;
			while (searchIndex < search.length) if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === "*")) if (template[templateIndex] === "*") {
				starIndex = templateIndex;
				matchIndex = searchIndex;
				templateIndex++;
			} else {
				searchIndex++;
				templateIndex++;
			}
			else if (starIndex !== -1) {
				templateIndex = starIndex + 1;
				matchIndex++;
				searchIndex = matchIndex;
			} else return false;
			while (templateIndex < template.length && template[templateIndex] === "*") templateIndex++;
			return templateIndex === template.length;
		}
		/**
		* Disable debug output.
		*
		* @return {String} namespaces
		* @api public
		*/
		function disable() {
			const namespaces = [...createDebug$1.names, ...createDebug$1.skips.map((namespace) => "-" + namespace)].join(",");
			createDebug$1.enable("");
			return namespaces;
		}
		/**
		* Returns true if the given mode name is enabled, false otherwise.
		*
		* @param {String} name
		* @return {Boolean}
		* @api public
		*/
		function enabled(name) {
			for (const skip of createDebug$1.skips) if (matchesTemplate(name, skip)) return false;
			for (const ns of createDebug$1.names) if (matchesTemplate(name, ns)) return true;
			return false;
		}
		/**
		* Coerce `val`.
		*
		* @param {Mixed} val
		* @return {Mixed}
		* @api private
		*/
		function coerce(val) {
			if (val instanceof Error) return val.stack || val.message;
			return val;
		}
		/**
		* XXX DO NOT USE. This is a temporary stub function.
		* XXX It WILL be removed in the next major release.
		*/
		function destroy() {
			console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
		}
		createDebug$1.enable(createDebug$1.load());
		return createDebug$1;
	}
	module.exports = setup;
}));

//#endregion
//#region ../../node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/browser.js
var require_browser = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* This is the web browser implementation of `debug()`.
	*/
	exports.formatArgs = formatArgs$1;
	exports.save = save$1;
	exports.load = load$1;
	exports.useColors = useColors$1;
	exports.storage = localstorage();
	exports.destroy = (() => {
		let warned = false;
		return () => {
			if (!warned) {
				warned = true;
				console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
			}
		};
	})();
	/**
	* Colors.
	*/
	exports.colors = [
		"#0000CC",
		"#0000FF",
		"#0033CC",
		"#0033FF",
		"#0066CC",
		"#0066FF",
		"#0099CC",
		"#0099FF",
		"#00CC00",
		"#00CC33",
		"#00CC66",
		"#00CC99",
		"#00CCCC",
		"#00CCFF",
		"#3300CC",
		"#3300FF",
		"#3333CC",
		"#3333FF",
		"#3366CC",
		"#3366FF",
		"#3399CC",
		"#3399FF",
		"#33CC00",
		"#33CC33",
		"#33CC66",
		"#33CC99",
		"#33CCCC",
		"#33CCFF",
		"#6600CC",
		"#6600FF",
		"#6633CC",
		"#6633FF",
		"#66CC00",
		"#66CC33",
		"#9900CC",
		"#9900FF",
		"#9933CC",
		"#9933FF",
		"#99CC00",
		"#99CC33",
		"#CC0000",
		"#CC0033",
		"#CC0066",
		"#CC0099",
		"#CC00CC",
		"#CC00FF",
		"#CC3300",
		"#CC3333",
		"#CC3366",
		"#CC3399",
		"#CC33CC",
		"#CC33FF",
		"#CC6600",
		"#CC6633",
		"#CC9900",
		"#CC9933",
		"#CCCC00",
		"#CCCC33",
		"#FF0000",
		"#FF0033",
		"#FF0066",
		"#FF0099",
		"#FF00CC",
		"#FF00FF",
		"#FF3300",
		"#FF3333",
		"#FF3366",
		"#FF3399",
		"#FF33CC",
		"#FF33FF",
		"#FF6600",
		"#FF6633",
		"#FF9900",
		"#FF9933",
		"#FFCC00",
		"#FFCC33"
	];
	/**
	* Currently only WebKit-based Web Inspectors, Firefox >= v31,
	* and the Firebug extension (any Firefox version) are known
	* to support "%c" CSS customizations.
	*
	* TODO: add a `localStorage` variable to explicitly enable/disable colors
	*/
	function useColors$1() {
		if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) return true;
		if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
		let m$1;
		return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && (m$1 = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m$1[1], 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
	}
	/**
	* Colorize log arguments if enabled.
	*
	* @api public
	*/
	function formatArgs$1(args) {
		args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
		if (!this.useColors) return;
		const c$1 = "color: " + this.color;
		args.splice(1, 0, c$1, "color: inherit");
		let index = 0;
		let lastC = 0;
		args[0].replace(/%[a-zA-Z%]/g, (match) => {
			if (match === "%%") return;
			index++;
			if (match === "%c") lastC = index;
		});
		args.splice(lastC, 0, c$1);
	}
	/**
	* Invokes `console.debug()` when available.
	* No-op when `console.debug` is not a "function".
	* If `console.debug` is not available, falls back
	* to `console.log`.
	*
	* @api public
	*/
	exports.log = console.debug || console.log || (() => {});
	/**
	* Save `namespaces`.
	*
	* @param {String} namespaces
	* @api private
	*/
	function save$1(namespaces) {
		try {
			if (namespaces) exports.storage.setItem("debug", namespaces);
			else exports.storage.removeItem("debug");
		} catch (error) {}
	}
	/**
	* Load `namespaces`.
	*
	* @return {String} returns the previously persisted debug modes
	* @api private
	*/
	function load$1() {
		let r;
		try {
			r = exports.storage.getItem("debug") || exports.storage.getItem("DEBUG");
		} catch (error) {}
		if (!r && typeof process !== "undefined" && "env" in process) r = process.env.DEBUG;
		return r;
	}
	/**
	* Localstorage attempts to return the localstorage.
	*
	* This is necessary because safari throws
	* when a user disables cookies/localstorage
	* and you attempt to access it.
	*
	* @return {LocalStorage}
	* @api private
	*/
	function localstorage() {
		try {
			return localStorage;
		} catch (error) {}
	}
	module.exports = require_common()(exports);
	const { formatters: formatters$1 } = module.exports;
	/**
	* Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	*/
	formatters$1.j = function(v) {
		try {
			return JSON.stringify(v);
		} catch (error) {
			return "[UnexpectedJSONParseError]: " + error.message;
		}
	};
}));

//#endregion
//#region ../../node_modules/.pnpm/supports-color@10.2.2/node_modules/supports-color/index.js
var supports_color_exports = /* @__PURE__ */ __export({
	createSupportsColor: () => createSupportsColor,
	default: () => supports_color_default
});
function hasFlag(flag, argv$1 = globalThis.Deno ? globalThis.Deno.args : process$1.argv) {
	const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
	const position = argv$1.indexOf(prefix + flag);
	const terminatorPosition = argv$1.indexOf("--");
	return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
}
function envForceColor() {
	if (!("FORCE_COLOR" in env)) return;
	if (env.FORCE_COLOR === "true") return 1;
	if (env.FORCE_COLOR === "false") return 0;
	if (env.FORCE_COLOR.length === 0) return 1;
	const level = Math.min(Number.parseInt(env.FORCE_COLOR, 10), 3);
	if (![
		0,
		1,
		2,
		3
	].includes(level)) return;
	return level;
}
function translateLevel(level) {
	if (level === 0) return false;
	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}
function _supportsColor(haveStream, { streamIsTTY, sniffFlags = true } = {}) {
	const noFlagForceColor = envForceColor();
	if (noFlagForceColor !== void 0) flagForceColor = noFlagForceColor;
	const forceColor = sniffFlags ? flagForceColor : noFlagForceColor;
	if (forceColor === 0) return 0;
	if (sniffFlags) {
		if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) return 3;
		if (hasFlag("color=256")) return 2;
	}
	if ("TF_BUILD" in env && "AGENT_NAME" in env) return 1;
	if (haveStream && !streamIsTTY && forceColor === void 0) return 0;
	const min = forceColor || 0;
	if (env.TERM === "dumb") return min;
	if (process$1.platform === "win32") {
		const osRelease = os.release().split(".");
		if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) return Number(osRelease[2]) >= 14931 ? 3 : 2;
		return 1;
	}
	if ("CI" in env) {
		if ([
			"GITHUB_ACTIONS",
			"GITEA_ACTIONS",
			"CIRCLECI"
		].some((key) => key in env)) return 3;
		if ([
			"TRAVIS",
			"APPVEYOR",
			"GITLAB_CI",
			"BUILDKITE",
			"DRONE"
		].some((sign) => sign in env) || env.CI_NAME === "codeship") return 1;
		return min;
	}
	if ("TEAMCITY_VERSION" in env) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	if (env.COLORTERM === "truecolor") return 3;
	if (env.TERM === "xterm-kitty") return 3;
	if (env.TERM === "xterm-ghostty") return 3;
	if (env.TERM === "wezterm") return 3;
	if ("TERM_PROGRAM" in env) {
		const version = Number.parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
		switch (env.TERM_PROGRAM) {
			case "iTerm.app": return version >= 3 ? 3 : 2;
			case "Apple_Terminal": return 2;
		}
	}
	if (/-256(color)?$/i.test(env.TERM)) return 2;
	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) return 1;
	if ("COLORTERM" in env) return 1;
	return min;
}
function createSupportsColor(stream, options = {}) {
	return translateLevel(_supportsColor(stream, {
		streamIsTTY: stream && stream.isTTY,
		...options
	}));
}
var env, flagForceColor, supportsColor, supports_color_default;
var init_supports_color = __esmMin((() => {
	({env} = process$1);
	;
	if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) flagForceColor = 0;
	else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) flagForceColor = 1;
	supportsColor = {
		stdout: createSupportsColor({ isTTY: tty.isatty(1) }),
		stderr: createSupportsColor({ isTTY: tty.isatty(2) })
	};
	supports_color_default = supportsColor;
}));

//#endregion
//#region ../../node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/node.js
var require_node = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Module dependencies.
	*/
	const tty$1 = __require("tty");
	const util = __require("util");
	/**
	* This is the Node.js implementation of `debug()`.
	*/
	exports.init = init;
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.destroy = util.deprecate(() => {}, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
	/**
	* Colors.
	*/
	exports.colors = [
		6,
		2,
		3,
		4,
		5,
		1
	];
	try {
		const supportsColor$1 = (init_supports_color(), __toCommonJS(supports_color_exports));
		if (supportsColor$1 && (supportsColor$1.stderr || supportsColor$1).level >= 2) exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	} catch (error) {}
	/**
	* Build up the default `inspectOpts` object from the environment variables.
	*
	*   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
	*/
	exports.inspectOpts = Object.keys(process.env).filter((key) => {
		return /^debug_/i.test(key);
	}).reduce((obj, key) => {
		const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_$1, k$2) => {
			return k$2.toUpperCase();
		});
		let val = process.env[key];
		if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
		else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
		else if (val === "null") val = null;
		else val = Number(val);
		obj[prop] = val;
		return obj;
	}, {});
	/**
	* Is stdout a TTY? Colored output is enabled when `true`.
	*/
	function useColors() {
		return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty$1.isatty(process.stderr.fd);
	}
	/**
	* Adds ANSI color escape codes if enabled.
	*
	* @api public
	*/
	function formatArgs(args) {
		const { namespace: name, useColors: useColors$2 } = this;
		if (useColors$2) {
			const c$1 = this.color;
			const colorCode = "\x1B[3" + (c$1 < 8 ? c$1 : "8;5;" + c$1);
			const prefix = `  ${colorCode};1m${name} \u001B[0m`;
			args[0] = prefix + args[0].split("\n").join("\n" + prefix);
			args.push(colorCode + "m+" + module.exports.humanize(this.diff) + "\x1B[0m");
		} else args[0] = getDate() + name + " " + args[0];
	}
	function getDate() {
		if (exports.inspectOpts.hideDate) return "";
		return (/* @__PURE__ */ new Date()).toISOString() + " ";
	}
	/**
	* Invokes `util.formatWithOptions()` with the specified arguments and writes to stderr.
	*/
	function log(...args) {
		return process.stderr.write(util.formatWithOptions(exports.inspectOpts, ...args) + "\n");
	}
	/**
	* Save `namespaces`.
	*
	* @param {String} namespaces
	* @api private
	*/
	function save(namespaces) {
		if (namespaces) process.env.DEBUG = namespaces;
		else delete process.env.DEBUG;
	}
	/**
	* Load `namespaces`.
	*
	* @return {String} returns the previously persisted debug modes
	* @api private
	*/
	function load() {
		return process.env.DEBUG;
	}
	/**
	* Init logic for `debug` instances.
	*
	* Create a new `inspectOpts` object in case `useColors` is set
	* differently for a particular `debug` instance.
	*/
	function init(debug$1) {
		debug$1.inspectOpts = {};
		const keys = Object.keys(exports.inspectOpts);
		for (let i = 0; i < keys.length; i++) debug$1.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
	module.exports = require_common()(exports);
	const { formatters } = module.exports;
	/**
	* Map %o to `util.inspect()`, all on a single line.
	*/
	formatters.o = function(v) {
		this.inspectOpts.colors = this.useColors;
		return util.inspect(v, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
	};
	/**
	* Map %O to `util.inspect()`, allowing multiple lines if needed.
	*/
	formatters.O = function(v) {
		this.inspectOpts.colors = this.useColors;
		return util.inspect(v, this.inspectOpts);
	};
}));

//#endregion
//#region ../../node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/index.js
var require_src = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Detect Electron renderer / nwjs process, which is node, but we should
	* treat as a browser.
	*/
	if (typeof process === "undefined" || process.type === "renderer" || process.browser === true || process.__nwjs) module.exports = require_browser();
	else module.exports = require_node();
}));

//#endregion
//#region src/utils/logger.ts
var import_src = /* @__PURE__ */ __toESM(require_src(), 1);
const logger = R;
const debug = (0, import_src.default)("nuxi");

//#endregion
export { Ct as _, Lt$1 as a, Pt as c, Wt$1 as d, Xt as f, zt as g, we as h, supports_color_default as i, Qt as l, qt as m, logger as n, Mt$1 as o, kt$1 as p, init_supports_color as r, Nt as s, debug as t, Tt$1 as u };