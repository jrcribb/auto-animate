import { delimiter, dirname, normalize, resolve } from "node:path";
import { cwd } from "node:process";
import c from "node:readline";
import { spawn } from "node:child_process";
import { PassThrough } from "node:stream";
import { createRequire } from "module";

//#region ../../node_modules/.pnpm/tinyexec@1.0.2/node_modules/tinyexec/dist/main.js
var l = Object.create;
var u = Object.defineProperty;
var d = Object.getOwnPropertyDescriptor;
var f = Object.getOwnPropertyNames;
var p = Object.getPrototypeOf;
var m = Object.prototype.hasOwnProperty;
var h = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var g = (e, t, n, r) => {
	if (t && typeof t === "object" || typeof t === "function") for (var i = f(t), a = 0, o = i.length, s; a < o; a++) {
		s = i[a];
		if (!m.call(e, s) && s !== n) u(e, s, {
			get: ((e$1) => t[e$1]).bind(null, s),
			enumerable: !(r = d(t, s)) || r.enumerable
		});
	}
	return e;
};
var _ = (e, t, n) => (n = e != null ? l(p(e)) : {}, g(t || !e || !e.__esModule ? u(n, "default", {
	value: e,
	enumerable: true
}) : n, e));
var v = /* @__PURE__ */ createRequire(import.meta.url);
const y = /^path$/i;
const b = {
	key: "PATH",
	value: ""
};
function x(e) {
	for (const t in e) {
		if (!Object.prototype.hasOwnProperty.call(e, t) || !y.test(t)) continue;
		const n = e[t];
		if (!n) return b;
		return {
			key: t,
			value: n
		};
	}
	return b;
}
function S(e, t) {
	const i = t.value.split(delimiter);
	let o = e;
	let s;
	do {
		i.push(resolve(o, "node_modules", ".bin"));
		s = o;
		o = dirname(o);
	} while (o !== s);
	return {
		key: t.key,
		value: i.join(delimiter)
	};
}
function C(e, t) {
	const n = {
		...process.env,
		...t
	};
	const r = S(e, x(n));
	n[r.key] = r.value;
	return n;
}
const w = (e) => {
	let t = e.length;
	const n = new PassThrough();
	const r = () => {
		if (--t === 0) n.emit("end");
	};
	for (const t$1 of e) {
		t$1.pipe(n, { end: false });
		t$1.on("end", r);
	}
	return n;
};
var T = h((exports, t) => {
	t.exports = a;
	a.sync = o;
	var n = v("fs");
	function r(e, t$1) {
		var n$1 = t$1.pathExt !== void 0 ? t$1.pathExt : process.env.PATHEXT;
		if (!n$1) return true;
		n$1 = n$1.split(";");
		if (n$1.indexOf("") !== -1) return true;
		for (var r$1 = 0; r$1 < n$1.length; r$1++) {
			var i$1 = n$1[r$1].toLowerCase();
			if (i$1 && e.substr(-i$1.length).toLowerCase() === i$1) return true;
		}
		return false;
	}
	function i(e, t$1, n$1) {
		if (!e.isSymbolicLink() && !e.isFile()) return false;
		return r(t$1, n$1);
	}
	function a(e, t$1, r$1) {
		n.stat(e, function(n$1, a$1) {
			r$1(n$1, n$1 ? false : i(a$1, e, t$1));
		});
	}
	function o(e, t$1) {
		return i(n.statSync(e), e, t$1);
	}
});
var E = h((exports, t) => {
	t.exports = r;
	r.sync = i;
	var n = v("fs");
	function r(e, t$1, r$1) {
		n.stat(e, function(e$1, n$1) {
			r$1(e$1, e$1 ? false : a(n$1, t$1));
		});
	}
	function i(e, t$1) {
		return a(n.statSync(e), t$1);
	}
	function a(e, t$1) {
		return e.isFile() && o(e, t$1);
	}
	function o(e, t$1) {
		var n$1 = e.mode;
		var r$1 = e.uid;
		var i$1 = e.gid;
		var a$1 = t$1.uid !== void 0 ? t$1.uid : process.getuid && process.getuid();
		var o$1 = t$1.gid !== void 0 ? t$1.gid : process.getgid && process.getgid();
		var s = parseInt("100", 8);
		var c$1 = parseInt("010", 8);
		var l$1 = parseInt("001", 8);
		var u$1 = s | c$1;
		return n$1 & l$1 || n$1 & c$1 && i$1 === o$1 || n$1 & s && r$1 === a$1 || n$1 & u$1 && a$1 === 0;
	}
});
var D = h((exports, t) => {
	v("fs");
	var r;
	if (process.platform === "win32" || global.TESTING_WINDOWS) r = T();
	else r = E();
	t.exports = i;
	i.sync = a;
	function i(e, t$1, n) {
		if (typeof t$1 === "function") {
			n = t$1;
			t$1 = {};
		}
		if (!n) {
			if (typeof Promise !== "function") throw new TypeError("callback not provided");
			return new Promise(function(n$1, r$1) {
				i(e, t$1 || {}, function(e$1, t$2) {
					if (e$1) r$1(e$1);
					else n$1(t$2);
				});
			});
		}
		r(e, t$1 || {}, function(e$1, r$1) {
			if (e$1) {
				if (e$1.code === "EACCES" || t$1 && t$1.ignoreErrors) {
					e$1 = null;
					r$1 = false;
				}
			}
			n(e$1, r$1);
		});
	}
	function a(e, t$1) {
		try {
			return r.sync(e, t$1 || {});
		} catch (e$1) {
			if (t$1 && t$1.ignoreErrors || e$1.code === "EACCES") return false;
			else throw e$1;
		}
	}
});
var O = h((exports, t) => {
	const n = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys";
	const r = v("path");
	const i = n ? ";" : ":";
	const a = D();
	const o = (e) => Object.assign(/* @__PURE__ */ new Error(`not found: ${e}`), { code: "ENOENT" });
	const s = (e, t$1) => {
		const r$1 = t$1.colon || i;
		const a$1 = e.match(/\//) || n && e.match(/\\/) ? [""] : [...n ? [process.cwd()] : [], ...(t$1.path || process.env.PATH || "").split(r$1)];
		const o$1 = n ? t$1.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "";
		const s$1 = n ? o$1.split(r$1) : [""];
		if (n) {
			if (e.indexOf(".") !== -1 && s$1[0] !== "") s$1.unshift("");
		}
		return {
			pathEnv: a$1,
			pathExt: s$1,
			pathExtExe: o$1
		};
	};
	const c$1 = (e, t$1, n$1) => {
		if (typeof t$1 === "function") {
			n$1 = t$1;
			t$1 = {};
		}
		if (!t$1) t$1 = {};
		const { pathEnv: i$1, pathExt: c$2, pathExtExe: l$2 } = s(e, t$1);
		const u$1 = [];
		const d$1 = (n$2) => new Promise((a$1, s$1) => {
			if (n$2 === i$1.length) return t$1.all && u$1.length ? a$1(u$1) : s$1(o(e));
			const c$3 = i$1[n$2];
			const l$3 = /^".*"$/.test(c$3) ? c$3.slice(1, -1) : c$3;
			const d$2 = r.join(l$3, e);
			a$1(f$1(!l$3 && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + d$2 : d$2, n$2, 0));
		});
		const f$1 = (e$1, n$2, r$1) => new Promise((i$2, o$1) => {
			if (r$1 === c$2.length) return i$2(d$1(n$2 + 1));
			const s$1 = c$2[r$1];
			a(e$1 + s$1, { pathExt: l$2 }, (a$1, o$2) => {
				if (!a$1 && o$2) if (t$1.all) u$1.push(e$1 + s$1);
				else return i$2(e$1 + s$1);
				return i$2(f$1(e$1, n$2, r$1 + 1));
			});
		});
		return n$1 ? d$1(0).then((e$1) => n$1(null, e$1), n$1) : d$1(0);
	};
	const l$1 = (e, t$1) => {
		t$1 = t$1 || {};
		const { pathEnv: n$1, pathExt: i$1, pathExtExe: c$2 } = s(e, t$1);
		const l$2 = [];
		for (let o$1 = 0; o$1 < n$1.length; o$1++) {
			const s$1 = n$1[o$1];
			const u$1 = /^".*"$/.test(s$1) ? s$1.slice(1, -1) : s$1;
			const d$1 = r.join(u$1, e);
			const f$1 = !u$1 && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + d$1 : d$1;
			for (let e$1 = 0; e$1 < i$1.length; e$1++) {
				const n$2 = f$1 + i$1[e$1];
				try {
					if (a.sync(n$2, { pathExt: c$2 })) if (t$1.all) l$2.push(n$2);
					else return n$2;
				} catch (e$2) {}
			}
		}
		if (t$1.all && l$2.length) return l$2;
		if (t$1.nothrow) return null;
		throw o(e);
	};
	t.exports = c$1;
	c$1.sync = l$1;
});
var k = h((exports, t) => {
	const n = (e = {}) => {
		const t$1 = e.env || process.env;
		if ((e.platform || process.platform) !== "win32") return "PATH";
		return Object.keys(t$1).reverse().find((e$1) => e$1.toUpperCase() === "PATH") || "Path";
	};
	t.exports = n;
	t.exports.default = n;
});
var A = h((exports, t) => {
	const n = v("path");
	const r = O();
	const i = k();
	function a(e, t$1) {
		const a$1 = e.options.env || process.env;
		const o$1 = process.cwd();
		const s = e.options.cwd != null;
		const c$1 = s && process.chdir !== void 0 && !process.chdir.disabled;
		if (c$1) try {
			process.chdir(e.options.cwd);
		} catch (e$1) {}
		let l$1;
		try {
			l$1 = r.sync(e.command, {
				path: a$1[i({ env: a$1 })],
				pathExt: t$1 ? n.delimiter : void 0
			});
		} catch (e$1) {} finally {
			if (c$1) process.chdir(o$1);
		}
		if (l$1) l$1 = n.resolve(s ? e.options.cwd : "", l$1);
		return l$1;
	}
	function o(e) {
		return a(e) || a(e, true);
	}
	t.exports = o;
});
var j = h((exports, t) => {
	const n = /([()\][%!^"`<>&|;, *?])/g;
	function r(e) {
		e = e.replace(n, "^$1");
		return e;
	}
	function i(e, t$1) {
		e = `${e}`;
		e = e.replace(/(\\*)"/g, "$1$1\\\"");
		e = e.replace(/(\\*)$/, "$1$1");
		e = `"${e}"`;
		e = e.replace(n, "^$1");
		if (t$1) e = e.replace(n, "^$1");
		return e;
	}
	t.exports.command = r;
	t.exports.argument = i;
});
var M = h((exports, t) => {
	t.exports = /^#!(.*)/;
});
var N = h((exports, t) => {
	const n = M();
	t.exports = (e = "") => {
		const t$1 = e.match(n);
		if (!t$1) return null;
		const [r, i] = t$1[0].replace(/#! ?/, "").split(" ");
		const a = r.split("/").pop();
		if (a === "env") return i;
		return i ? `${a} ${i}` : a;
	};
});
var P = h((exports, t) => {
	const n = v("fs");
	const r = N();
	function i(e) {
		const t$1 = 150;
		const i$1 = Buffer.alloc(t$1);
		let a;
		try {
			a = n.openSync(e, "r");
			n.readSync(a, i$1, 0, t$1, 0);
			n.closeSync(a);
		} catch (e$1) {}
		return r(i$1.toString());
	}
	t.exports = i;
});
var F = h((exports, t) => {
	const n = v("path");
	const r = A();
	const i = j();
	const a = P();
	const o = process.platform === "win32";
	const s = /\.(?:com|exe)$/i;
	const c$1 = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
	function l$1(e) {
		e.file = r(e);
		const t$1 = e.file && a(e.file);
		if (t$1) {
			e.args.unshift(e.file);
			e.command = t$1;
			return r(e);
		}
		return e.file;
	}
	function u$1(e) {
		if (!o) return e;
		const t$1 = l$1(e);
		const r$1 = !s.test(t$1);
		if (e.options.forceShell || r$1) {
			const r$2 = c$1.test(t$1);
			e.command = n.normalize(e.command);
			e.command = i.command(e.command);
			e.args = e.args.map((e$1) => i.argument(e$1, r$2));
			e.args = [
				"/d",
				"/s",
				"/c",
				`"${[e.command].concat(e.args).join(" ")}"`
			];
			e.command = process.env.comspec || "cmd.exe";
			e.options.windowsVerbatimArguments = true;
		}
		return e;
	}
	function d$1(e, t$1, n$1) {
		if (t$1 && !Array.isArray(t$1)) {
			n$1 = t$1;
			t$1 = null;
		}
		t$1 = t$1 ? t$1.slice(0) : [];
		n$1 = Object.assign({}, n$1);
		const r$1 = {
			command: e,
			args: t$1,
			options: n$1,
			file: void 0,
			original: {
				command: e,
				args: t$1
			}
		};
		return n$1.shell ? r$1 : u$1(r$1);
	}
	t.exports = d$1;
});
var I = h((exports, t) => {
	const n = process.platform === "win32";
	function r(e, t$1) {
		return Object.assign(/* @__PURE__ */ new Error(`${t$1} ${e.command} ENOENT`), {
			code: "ENOENT",
			errno: "ENOENT",
			syscall: `${t$1} ${e.command}`,
			path: e.command,
			spawnargs: e.args
		});
	}
	function i(e, t$1) {
		if (!n) return;
		const r$1 = e.emit;
		e.emit = function(n$1, i$1) {
			if (n$1 === "exit") {
				const n$2 = a(i$1, t$1, "spawn");
				if (n$2) return r$1.call(e, "error", n$2);
			}
			return r$1.apply(e, arguments);
		};
	}
	function a(e, t$1) {
		if (n && e === 1 && !t$1.file) return r(t$1.original, "spawn");
		return null;
	}
	function o(e, t$1) {
		if (n && e === 1 && !t$1.file) return r(t$1.original, "spawnSync");
		return null;
	}
	t.exports = {
		hookChildProcess: i,
		verifyENOENT: a,
		verifyENOENTSync: o,
		notFoundError: r
	};
});
var R = _(h((exports, t) => {
	const n = v("child_process");
	const r = F();
	const i = I();
	function a(e, t$1, a$1) {
		const o$1 = r(e, t$1, a$1);
		const s = n.spawn(o$1.command, o$1.args, o$1.options);
		i.hookChildProcess(s, o$1);
		return s;
	}
	function o(e, t$1, a$1) {
		const o$1 = r(e, t$1, a$1);
		const s = n.spawnSync(o$1.command, o$1.args, o$1.options);
		s.error = s.error || i.verifyENOENTSync(s.status, o$1);
		return s;
	}
	t.exports = a;
	t.exports.spawn = a;
	t.exports.sync = o;
	t.exports._parse = r;
	t.exports._enoent = i;
})(), 1);
var z = class extends Error {
	result;
	output;
	get exitCode() {
		if (this.result.exitCode !== null) return this.result.exitCode;
	}
	constructor(e, t) {
		super(`Process exited with non-zero status (${e.exitCode})`);
		this.result = e;
		this.output = t;
	}
};
const B = {
	timeout: void 0,
	persist: false
};
const V = { windowsHide: true };
function H(e, t) {
	return {
		command: normalize(e),
		args: t ?? []
	};
}
function U(e) {
	const t = new AbortController();
	for (const n of e) {
		if (n.aborted) {
			t.abort();
			return n;
		}
		const e$1 = () => {
			t.abort(n.reason);
		};
		n.addEventListener("abort", e$1, { signal: t.signal });
	}
	return t.signal;
}
async function W(e) {
	let t = "";
	for await (const n of e) t += n.toString();
	return t;
}
var G = class {
	_process;
	_aborted = false;
	_options;
	_command;
	_args;
	_resolveClose;
	_processClosed;
	_thrownError;
	get process() {
		return this._process;
	}
	get pid() {
		return this._process?.pid;
	}
	get exitCode() {
		if (this._process && this._process.exitCode !== null) return this._process.exitCode;
	}
	constructor(e, t, n) {
		this._options = {
			...B,
			...n
		};
		this._command = e;
		this._args = t ?? [];
		this._processClosed = new Promise((e$1) => {
			this._resolveClose = e$1;
		});
	}
	kill(e) {
		return this._process?.kill(e) === true;
	}
	get aborted() {
		return this._aborted;
	}
	get killed() {
		return this._process?.killed === true;
	}
	pipe(e, t, n) {
		return q(e, t, {
			...n,
			stdin: this
		});
	}
	async *[Symbol.asyncIterator]() {
		const e = this._process;
		if (!e) return;
		const t = [];
		if (this._streamErr) t.push(this._streamErr);
		if (this._streamOut) t.push(this._streamOut);
		const n = w(t);
		const r = c.createInterface({ input: n });
		for await (const e$1 of r) yield e$1.toString();
		await this._processClosed;
		e.removeAllListeners();
		if (this._thrownError) throw this._thrownError;
		if (this._options?.throwOnError && this.exitCode !== 0 && this.exitCode !== void 0) throw new z(this);
	}
	async _waitForOutput() {
		const e = this._process;
		if (!e) throw new Error("No process was started");
		const [t, n] = await Promise.all([this._streamOut ? W(this._streamOut) : "", this._streamErr ? W(this._streamErr) : ""]);
		await this._processClosed;
		if (this._options?.stdin) await this._options.stdin;
		e.removeAllListeners();
		if (this._thrownError) throw this._thrownError;
		const r = {
			stderr: n,
			stdout: t,
			exitCode: this.exitCode
		};
		if (this._options.throwOnError && this.exitCode !== 0 && this.exitCode !== void 0) throw new z(this, r);
		return r;
	}
	then(e, t) {
		return this._waitForOutput().then(e, t);
	}
	_streamOut;
	_streamErr;
	spawn() {
		const e = cwd();
		const n = this._options;
		const r = {
			...V,
			...n.nodeOptions
		};
		const i = [];
		this._resetState();
		if (n.timeout !== void 0) i.push(AbortSignal.timeout(n.timeout));
		if (n.signal !== void 0) i.push(n.signal);
		if (n.persist === true) r.detached = true;
		if (i.length > 0) r.signal = U(i);
		r.env = C(e, r.env);
		const { command: a, args: s } = H(this._command, this._args);
		const c$1 = (0, R._parse)(a, s, r);
		const l$1 = spawn(c$1.command, c$1.args, c$1.options);
		if (l$1.stderr) this._streamErr = l$1.stderr;
		if (l$1.stdout) this._streamOut = l$1.stdout;
		this._process = l$1;
		l$1.once("error", this._onError);
		l$1.once("close", this._onClose);
		if (n.stdin !== void 0 && l$1.stdin && n.stdin.process) {
			const { stdout: e$1 } = n.stdin.process;
			if (e$1) e$1.pipe(l$1.stdin);
		}
	}
	_resetState() {
		this._aborted = false;
		this._processClosed = new Promise((e) => {
			this._resolveClose = e;
		});
		this._thrownError = void 0;
	}
	_onError = (e) => {
		if (e.name === "AbortError" && (!(e.cause instanceof Error) || e.cause.name !== "TimeoutError")) {
			this._aborted = true;
			return;
		}
		this._thrownError = e;
	};
	_onClose = () => {
		if (this._resolveClose) this._resolveClose();
	};
};
const K = (e, t, n) => {
	const r = new G(e, t, n);
	r.spawn();
	return r;
};
const q = K;

//#endregion
export { z as i, K as n, q as r, G as t };