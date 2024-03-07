function xe() {
}
function Tp(e, n) {
  for (const t in n)
    e[t] = n[t];
  return e;
}
function su(e) {
  return e();
}
function Sa() {
  return /* @__PURE__ */ Object.create(null);
}
function Ve(e) {
  e.forEach(su);
}
function Be(e) {
  return typeof e == "function";
}
function ze(e, n) {
  return e != e ? n == n : e !== n || e && typeof e == "object" || typeof e == "function";
}
let ci;
function gr(e, n) {
  return ci || (ci = document.createElement("a")), ci.href = n, e === ci.href;
}
function kp(e) {
  return Object.keys(e).length === 0;
}
function Sp(e, ...n) {
  if (e == null)
    return xe;
  const t = e.subscribe(...n);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function ou(e, n, t) {
  e.$$.on_destroy.push(Sp(n, t));
}
function Pp(e, n, t, r) {
  if (e) {
    const i = au(e, n, t, r);
    return e[0](i);
  }
}
function au(e, n, t, r) {
  return e[1] && r ? Tp(t.ctx.slice(), e[1](r(n))) : t.ctx;
}
function Ip(e, n, t, r) {
  if (e[2] && r) {
    const i = e[2](r(t));
    if (n.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const s = [], o = Math.max(n.dirty.length, i.length);
      for (let a = 0; a < o; a += 1)
        s[a] = n.dirty[a] | i[a];
      return s;
    }
    return n.dirty | i;
  }
  return n.dirty;
}
function jp(e, n, t, r, i, s) {
  if (i) {
    const o = au(n, t, r, s);
    e.p(o, i);
  }
}
function Cp(e) {
  if (e.ctx.length > 32) {
    const n = [], t = e.ctx.length / 32;
    for (let r = 0; r < t; r++)
      n[r] = -1;
    return n;
  }
  return -1;
}
function Mp(e, n, t) {
  return e.set(t), n;
}
const Lp = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
"WeakMap" in Lp;
function B(e, n) {
  e.appendChild(n);
}
function k(e, n, t) {
  e.insertBefore(n, t || null);
}
function T(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Yr(e, n) {
  for (let t = 0; t < e.length; t += 1)
    e[t] && e[t].d(n);
}
function N(e) {
  return document.createElement(e);
}
function Np(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function nn(e) {
  return document.createTextNode(e);
}
function Q() {
  return nn(" ");
}
function Ce() {
  return nn("");
}
function H(e, n, t, r) {
  return e.addEventListener(n, t, r), () => e.removeEventListener(n, t, r);
}
function dr(e) {
  return function(n) {
    return n.preventDefault(), e.call(this, n);
  };
}
function Fn(e) {
  return function(n) {
    return n.stopPropagation(), e.call(this, n);
  };
}
function y(e, n, t) {
  t == null ? e.removeAttribute(n) : e.getAttribute(n) !== t && e.setAttribute(n, t);
}
function Fp(e) {
  return Array.from(e.childNodes);
}
function hn(e, n) {
  n = "" + n, e.data !== n && (e.data = n);
}
function Pa(e, n) {
  e.value = n ?? "";
}
function Wn(e, n, t, r) {
  t == null ? e.style.removeProperty(n) : e.style.setProperty(n, t, r ? "important" : "");
}
function Ia(e, n, t) {
  for (let r = 0; r < e.options.length; r += 1) {
    const i = e.options[r];
    if (i.__value === n) {
      i.selected = !0;
      return;
    }
  }
  (!t || n !== void 0) && (e.selectedIndex = -1);
}
function Se(e, n, t) {
  e.classList[t ? "add" : "remove"](n);
}
function Wp(e, n, { bubbles: t = !1, cancelable: r = !1 } = {}) {
  const i = document.createEvent("CustomEvent");
  return i.initCustomEvent(e, t, r, n), i;
}
class Dp {
  constructor(n = !1) {
    this.is_svg = !1, this.is_svg = n, this.e = this.n = null;
  }
  c(n) {
    this.h(n);
  }
  m(n, t, r = null) {
    this.e || (this.is_svg ? this.e = Np(t.nodeName) : this.e = N(t.nodeType === 11 ? "TEMPLATE" : t.nodeName), this.t = t.tagName !== "TEMPLATE" ? t : t.content, this.c(n)), this.i(r);
  }
  h(n) {
    this.e.innerHTML = n, this.n = Array.from(this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes);
  }
  i(n) {
    for (let t = 0; t < this.n.length; t += 1)
      k(this.t, this.n[t], n);
  }
  p(n) {
    this.d(), this.h(n), this.i(this.a);
  }
  d() {
    this.n.forEach(T);
  }
}
function Le(e, n) {
  return new e(n);
}
let Wr;
function Lr(e) {
  Wr = e;
}
function Wi() {
  if (!Wr)
    throw new Error("Function called outside component initialization");
  return Wr;
}
function Up(e) {
  Wi().$$.on_mount.push(e);
}
function lu() {
  const e = Wi();
  return (n, t, { cancelable: r = !1 } = {}) => {
    const i = e.$$.callbacks[n];
    if (i) {
      const s = Wp(n, t, { cancelable: r });
      return i.slice().forEach((o) => {
        o.call(e, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
function Bp(e, n) {
  return Wi().$$.context.set(e, n), n;
}
function qp(e) {
  return Wi().$$.context.get(e);
}
function di(e, n) {
  const t = e.$$.callbacks[n.type];
  t && t.slice().forEach((r) => r.call(this, n));
}
const fr = [], Ze = [];
let pr = [];
const Ls = [], fu = /* @__PURE__ */ Promise.resolve();
let Ns = !1;
function uu() {
  Ns || (Ns = !0, fu.then(Me));
}
function bi() {
  return uu(), fu;
}
function Fs(e) {
  pr.push(e);
}
function tt(e) {
  Ls.push(e);
}
const vs = /* @__PURE__ */ new Set();
let sr = 0;
function Me() {
  if (sr !== 0)
    return;
  const e = Wr;
  do {
    try {
      for (; sr < fr.length; ) {
        const n = fr[sr];
        sr++, Lr(n), Gp(n.$$);
      }
    } catch (n) {
      throw fr.length = 0, sr = 0, n;
    }
    for (Lr(null), fr.length = 0, sr = 0; Ze.length; )
      Ze.pop()();
    for (let n = 0; n < pr.length; n += 1) {
      const t = pr[n];
      vs.has(t) || (vs.add(t), t());
    }
    pr.length = 0;
  } while (fr.length);
  for (; Ls.length; )
    Ls.pop()();
  Ns = !1, vs.clear(), Lr(e);
}
function Gp(e) {
  if (e.fragment !== null) {
    e.update(), Ve(e.before_update);
    const n = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, n), e.after_update.forEach(Fs);
  }
}
function zp(e) {
  const n = [], t = [];
  pr.forEach((r) => e.indexOf(r) === -1 ? n.push(r) : t.push(r)), t.forEach((r) => r()), pr = n;
}
const wi = /* @__PURE__ */ new Set();
let Ut;
function Fe() {
  Ut = {
    r: 0,
    c: [],
    p: Ut
    // parent group
  };
}
function We() {
  Ut.r || Ve(Ut.c), Ut = Ut.p;
}
function J(e, n) {
  e && e.i && (wi.delete(e), e.i(n));
}
function x(e, n, t, r) {
  if (e && e.o) {
    if (wi.has(e))
      return;
    wi.add(e), Ut.c.push(() => {
      wi.delete(e), r && (t && e.d(1), r());
    }), e.o(n);
  } else
    r && r();
}
function oo(e, n) {
  e.d(1), n.delete(e.key);
}
function cu(e, n) {
  x(e, 1, 1, () => {
    n.delete(e.key);
  });
}
function Jr(e, n, t, r, i, s, o, a, l, f, u, c) {
  let d = e.length, m = s.length, h = d;
  const g = {};
  for (; h--; )
    g[e[h].key] = h;
  const v = [], w = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), M = [];
  for (h = m; h--; ) {
    const C = c(i, s, h), D = t(C);
    let j = o.get(D);
    j ? r && M.push(() => j.p(C, n)) : (j = f(D, C), j.c()), w.set(D, v[h] = j), D in g && A.set(D, Math.abs(h - g[D]));
  }
  const W = /* @__PURE__ */ new Set(), I = /* @__PURE__ */ new Set();
  function F(C) {
    J(C, 1), C.m(a, u), o.set(C.key, C), u = C.first, m--;
  }
  for (; d && m; ) {
    const C = v[m - 1], D = e[d - 1], j = C.key, ee = D.key;
    C === D ? (u = C.first, d--, m--) : w.has(ee) ? !o.has(j) || W.has(j) ? F(C) : I.has(ee) ? d-- : A.get(j) > A.get(ee) ? (I.add(j), F(C)) : (W.add(ee), d--) : (l(D, o), d--);
  }
  for (; d--; ) {
    const C = e[d];
    w.has(C.key) || l(C, o);
  }
  for (; m; )
    F(v[m - 1]);
  return Ve(M), v;
}
const Hp = [
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
];
[...Hp];
function Ln(e, n, t) {
  const r = e.$$.props[n];
  r !== void 0 && (e.$$.bound[r] = t, t(e.$$.ctx[r]));
}
function Oe(e) {
  e && e.c();
}
function be(e, n, t, r) {
  const { fragment: i, after_update: s } = e.$$;
  i && i.m(n, t), r || Fs(() => {
    const o = e.$$.on_mount.map(su).filter(Be);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : Ve(o), e.$$.on_mount = [];
  }), s.forEach(Fs);
}
function we(e, n) {
  const t = e.$$;
  t.fragment !== null && (zp(t.after_update), Ve(t.on_destroy), t.fragment && t.fragment.d(n), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Kp(e, n) {
  e.$$.dirty[0] === -1 && (fr.push(e), uu(), e.$$.dirty.fill(0)), e.$$.dirty[n / 31 | 0] |= 1 << n % 31;
}
function Ke(e, n, t, r, i, s, o, a = [-1]) {
  const l = Wr;
  Lr(e);
  const f = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: xe,
    not_equal: i,
    bound: Sa(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(n.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: Sa(),
    dirty: a,
    skip_bound: !1,
    root: n.target || l.$$.root
  };
  o && o(f.root);
  let u = !1;
  if (f.ctx = t ? t(e, n.props || {}, (c, d, ...m) => {
    const h = m.length ? m[0] : d;
    return f.ctx && i(f.ctx[c], f.ctx[c] = h) && (!f.skip_bound && f.bound[c] && f.bound[c](h), u && Kp(e, c)), d;
  }) : [], f.update(), u = !0, Ve(f.before_update), f.fragment = r ? r(f.ctx) : !1, n.target) {
    if (n.hydrate) {
      const c = Fp(n.target);
      f.fragment && f.fragment.l(c), c.forEach(T);
    } else
      f.fragment && f.fragment.c();
    n.intro && J(e.$$.fragment), be(e, n.target, n.anchor, n.customElement), Me();
  }
  Lr(l);
}
class Ye {
  $destroy() {
    we(this, 1), this.$destroy = xe;
  }
  $on(n, t) {
    if (!Be(t))
      return xe;
    const r = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
    return r.push(t), () => {
      const i = r.indexOf(t);
      i !== -1 && r.splice(i, 1);
    };
  }
  $set(n) {
    this.$$set && !kp(n) && (this.$$.skip_bound = !0, this.$$set(n), this.$$.skip_bound = !1);
  }
}
var Yp = typeof global == "object" && global && global.Object === Object && global;
const du = Yp;
var Jp = typeof self == "object" && self && self.Object === Object && self, Xp = du || Jp || Function("return this")();
const Je = Xp;
var Zp = Je.Symbol;
const en = Zp;
var pu = Object.prototype, Vp = pu.hasOwnProperty, Qp = pu.toString, Cr = en ? en.toStringTag : void 0;
function xp(e) {
  var n = Vp.call(e, Cr), t = e[Cr];
  try {
    e[Cr] = void 0;
    var r = !0;
  } catch {
  }
  var i = Qp.call(e);
  return r && (n ? e[Cr] = t : delete e[Cr]), i;
}
var eh = Object.prototype, nh = eh.toString;
function th(e) {
  return nh.call(e);
}
var rh = "[object Null]", ih = "[object Undefined]", ja = en ? en.toStringTag : void 0;
function an(e) {
  return e == null ? e === void 0 ? ih : rh : ja && ja in Object(e) ? xp(e) : th(e);
}
function Ne(e) {
  return e != null && typeof e == "object";
}
var sh = "[object Symbol]";
function wn(e) {
  return typeof e == "symbol" || Ne(e) && an(e) == sh;
}
var oh = 0 / 0;
function Ca(e) {
  return typeof e == "number" ? e : wn(e) ? oh : +e;
}
function Pe(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length, i = Array(r); ++t < r; )
    i[t] = n(e[t], t, e);
  return i;
}
var ah = Array.isArray;
const re = ah;
var lh = 1 / 0, Ma = en ? en.prototype : void 0, La = Ma ? Ma.toString : void 0;
function $n(e) {
  if (typeof e == "string")
    return e;
  if (re(e))
    return Pe(e, $n) + "";
  if (wn(e))
    return La ? La.call(e) : "";
  var n = e + "";
  return n == "0" && 1 / e == -lh ? "-0" : n;
}
function Di(e, n) {
  return function(t, r) {
    var i;
    if (t === void 0 && r === void 0)
      return n;
    if (t !== void 0 && (i = t), r !== void 0) {
      if (i === void 0)
        return r;
      typeof t == "string" || typeof r == "string" ? (t = $n(t), r = $n(r)) : (t = Ca(t), r = Ca(r)), i = e(t, r);
    }
    return i;
  };
}
var fh = Di(function(e, n) {
  return e + n;
}, 0);
const uh = fh;
var ch = /\s/;
function hu(e) {
  for (var n = e.length; n-- && ch.test(e.charAt(n)); )
    ;
  return n;
}
var dh = /^\s+/;
function mu(e) {
  return e && e.slice(0, hu(e) + 1).replace(dh, "");
}
function Ie(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
var Na = 0 / 0, ph = /^[-+]0x[0-9a-f]+$/i, hh = /^0b[01]+$/i, mh = /^0o[0-7]+$/i, gh = parseInt;
function kn(e) {
  if (typeof e == "number")
    return e;
  if (wn(e))
    return Na;
  if (Ie(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ie(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = mu(e);
  var t = hh.test(e);
  return t || mh.test(e) ? gh(e.slice(2), t ? 2 : 8) : ph.test(e) ? Na : +e;
}
var Fa = 1 / 0, _h = 17976931348623157e292;
function rt(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = kn(e), e === Fa || e === -Fa) {
    var n = e < 0 ? -1 : 1;
    return n * _h;
  }
  return e === e ? e : 0;
}
function oe(e) {
  var n = rt(e), t = n % 1;
  return n === n ? t ? n - t : n : 0;
}
var yh = "Expected a function";
function vh(e, n) {
  if (typeof n != "function")
    throw new TypeError(yh);
  return e = oe(e), function() {
    if (--e < 1)
      return n.apply(this, arguments);
  };
}
function ln(e) {
  return e;
}
var bh = "[object AsyncFunction]", wh = "[object Function]", $h = "[object GeneratorFunction]", Ah = "[object Proxy]";
function it(e) {
  if (!Ie(e))
    return !1;
  var n = an(e);
  return n == wh || n == $h || n == bh || n == Ah;
}
var Oh = Je["__core-js_shared__"];
const $i = Oh;
var Wa = function() {
  var e = /[^.]+$/.exec($i && $i.keys && $i.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Rh(e) {
  return !!Wa && Wa in e;
}
var Eh = Function.prototype, Th = Eh.toString;
function Ht(e) {
  if (e != null) {
    try {
      return Th.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var kh = /[\\^$.*+?()[\]{}|]/g, Sh = /^\[object .+?Constructor\]$/, Ph = Function.prototype, Ih = Object.prototype, jh = Ph.toString, Ch = Ih.hasOwnProperty, Mh = RegExp(
  "^" + jh.call(Ch).replace(kh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function gu(e) {
  if (!Ie(e) || Rh(e))
    return !1;
  var n = it(e) ? Mh : Sh;
  return n.test(Ht(e));
}
function Lh(e, n) {
  return e == null ? void 0 : e[n];
}
function Kt(e, n) {
  var t = Lh(e, n);
  return gu(t) ? t : void 0;
}
var Nh = Kt(Je, "WeakMap");
const Dr = Nh;
var Fh = Dr && new Dr();
const Ti = Fh;
var Wh = Ti ? function(e, n) {
  return Ti.set(e, n), e;
} : ln;
const _u = Wh;
var Da = Object.create, Dh = function() {
  function e() {
  }
  return function(n) {
    if (!Ie(n))
      return {};
    if (Da)
      return Da(n);
    e.prototype = n;
    var t = new e();
    return e.prototype = void 0, t;
  };
}();
const vr = Dh;
function Ur(e) {
  return function() {
    var n = arguments;
    switch (n.length) {
      case 0:
        return new e();
      case 1:
        return new e(n[0]);
      case 2:
        return new e(n[0], n[1]);
      case 3:
        return new e(n[0], n[1], n[2]);
      case 4:
        return new e(n[0], n[1], n[2], n[3]);
      case 5:
        return new e(n[0], n[1], n[2], n[3], n[4]);
      case 6:
        return new e(n[0], n[1], n[2], n[3], n[4], n[5]);
      case 7:
        return new e(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
    }
    var t = vr(e.prototype), r = e.apply(t, n);
    return Ie(r) ? r : t;
  };
}
var Uh = 1;
function Bh(e, n, t) {
  var r = n & Uh, i = Ur(e);
  function s() {
    var o = this && this !== Je && this instanceof s ? i : e;
    return o.apply(r ? t : this, arguments);
  }
  return s;
}
function An(e, n, t) {
  switch (t.length) {
    case 0:
      return e.call(n);
    case 1:
      return e.call(n, t[0]);
    case 2:
      return e.call(n, t[0], t[1]);
    case 3:
      return e.call(n, t[0], t[1], t[2]);
  }
  return e.apply(n, t);
}
var qh = Math.max;
function yu(e, n, t, r) {
  for (var i = -1, s = e.length, o = t.length, a = -1, l = n.length, f = qh(s - o, 0), u = Array(l + f), c = !r; ++a < l; )
    u[a] = n[a];
  for (; ++i < o; )
    (c || i < s) && (u[t[i]] = e[i]);
  for (; f--; )
    u[a++] = e[i++];
  return u;
}
var Gh = Math.max;
function vu(e, n, t, r) {
  for (var i = -1, s = e.length, o = -1, a = t.length, l = -1, f = n.length, u = Gh(s - a, 0), c = Array(u + f), d = !r; ++i < u; )
    c[i] = e[i];
  for (var m = i; ++l < f; )
    c[m + l] = n[l];
  for (; ++o < a; )
    (d || i < s) && (c[m + t[o]] = e[i++]);
  return c;
}
function zh(e, n) {
  for (var t = e.length, r = 0; t--; )
    e[t] === n && ++r;
  return r;
}
function Ui() {
}
var Hh = 4294967295;
function ue(e) {
  this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Hh, this.__views__ = [];
}
ue.prototype = vr(Ui.prototype);
ue.prototype.constructor = ue;
function ao() {
}
var Kh = Ti ? function(e) {
  return Ti.get(e);
} : ao;
const lo = Kh;
var Yh = {};
const hr = Yh;
var Jh = Object.prototype, Xh = Jh.hasOwnProperty;
function Ai(e) {
  for (var n = e.name + "", t = hr[n], r = Xh.call(hr, n) ? t.length : 0; r--; ) {
    var i = t[r], s = i.func;
    if (s == null || s == e)
      return i.name;
  }
  return n;
}
function Pn(e, n) {
  this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = void 0;
}
Pn.prototype = vr(Ui.prototype);
Pn.prototype.constructor = Pn;
function pn(e, n) {
  var t = -1, r = e.length;
  for (n || (n = Array(r)); ++t < r; )
    n[t] = e[t];
  return n;
}
function bu(e) {
  if (e instanceof ue)
    return e.clone();
  var n = new Pn(e.__wrapped__, e.__chain__);
  return n.__actions__ = pn(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
}
var Zh = Object.prototype, Vh = Zh.hasOwnProperty;
function p(e) {
  if (Ne(e) && !re(e) && !(e instanceof ue)) {
    if (e instanceof Pn)
      return e;
    if (Vh.call(e, "__wrapped__"))
      return bu(e);
  }
  return new Pn(e);
}
p.prototype = Ui.prototype;
p.prototype.constructor = p;
function Ws(e) {
  var n = Ai(e), t = p[n];
  if (typeof t != "function" || !(n in ue.prototype))
    return !1;
  if (e === t)
    return !0;
  var r = lo(t);
  return !!r && e === r[0];
}
var Qh = 800, xh = 16, em = Date.now;
function wu(e) {
  var n = 0, t = 0;
  return function() {
    var r = em(), i = xh - (r - t);
    if (t = r, i > 0) {
      if (++n >= Qh)
        return arguments[0];
    } else
      n = 0;
    return e.apply(void 0, arguments);
  };
}
var nm = wu(_u);
const $u = nm;
var tm = /\{\n\/\* \[wrapped with (.+)\] \*/, rm = /,? & /;
function im(e) {
  var n = e.match(tm);
  return n ? n[1].split(rm) : [];
}
var sm = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
function om(e, n) {
  var t = n.length;
  if (!t)
    return e;
  var r = t - 1;
  return n[r] = (t > 1 ? "& " : "") + n[r], n = n.join(t > 2 ? ", " : " "), e.replace(sm, `{
/* [wrapped with ` + n + `] */
`);
}
function fo(e) {
  return function() {
    return e;
  };
}
var am = function() {
  try {
    var e = Kt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const ki = am;
var lm = ki ? function(e, n) {
  return ki(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: fo(n),
    writable: !0
  });
} : ln;
const fm = lm;
var um = wu(fm);
const uo = um;
function Cn(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length; ++t < r && n(e[t], t, e) !== !1; )
    ;
  return e;
}
function Bi(e, n, t, r) {
  for (var i = e.length, s = t + (r ? 1 : -1); r ? s-- : ++s < i; )
    if (n(e[s], s, e))
      return s;
  return -1;
}
function Au(e) {
  return e !== e;
}
function cm(e, n, t) {
  for (var r = t - 1, i = e.length; ++r < i; )
    if (e[r] === n)
      return r;
  return -1;
}
function br(e, n, t) {
  return n === n ? cm(e, n, t) : Bi(e, Au, t);
}
function qi(e, n) {
  var t = e == null ? 0 : e.length;
  return !!t && br(e, n, 0) > -1;
}
var dm = 1, pm = 2, hm = 8, mm = 16, gm = 32, _m = 64, ym = 128, vm = 256, bm = 512, wm = [
  ["ary", ym],
  ["bind", dm],
  ["bindKey", pm],
  ["curry", hm],
  ["curryRight", mm],
  ["flip", bm],
  ["partial", gm],
  ["partialRight", _m],
  ["rearg", vm]
];
function $m(e, n) {
  return Cn(wm, function(t) {
    var r = "_." + t[0];
    n & t[1] && !qi(e, r) && e.push(r);
  }), e.sort();
}
function Ou(e, n, t) {
  var r = n + "";
  return uo(e, om(r, $m(im(r), t)));
}
var Am = 1, Om = 2, Rm = 4, Em = 8, Ua = 32, Ba = 64;
function Ru(e, n, t, r, i, s, o, a, l, f) {
  var u = n & Em, c = u ? o : void 0, d = u ? void 0 : o, m = u ? s : void 0, h = u ? void 0 : s;
  n |= u ? Ua : Ba, n &= ~(u ? Ba : Ua), n & Rm || (n &= ~(Am | Om));
  var g = [
    e,
    n,
    i,
    m,
    c,
    h,
    d,
    a,
    l,
    f
  ], v = t.apply(void 0, g);
  return Ws(e) && $u(v, g), v.placeholder = r, Ou(v, e, n);
}
function wr(e) {
  var n = e;
  return n.placeholder;
}
var Tm = 9007199254740991, km = /^(?:0|[1-9]\d*)$/;
function st(e, n) {
  var t = typeof e;
  return n = n ?? Tm, !!n && (t == "number" || t != "symbol" && km.test(e)) && e > -1 && e % 1 == 0 && e < n;
}
var Sm = Math.min;
function Pm(e, n) {
  for (var t = e.length, r = Sm(n.length, t), i = pn(e); r--; ) {
    var s = n[r];
    e[r] = st(s, t) ? i[s] : void 0;
  }
  return e;
}
var qa = "__lodash_placeholder__";
function vt(e, n) {
  for (var t = -1, r = e.length, i = 0, s = []; ++t < r; ) {
    var o = e[t];
    (o === n || o === qa) && (e[t] = qa, s[i++] = t);
  }
  return s;
}
var Im = 1, jm = 2, Cm = 8, Mm = 16, Lm = 128, Nm = 512;
function Gi(e, n, t, r, i, s, o, a, l, f) {
  var u = n & Lm, c = n & Im, d = n & jm, m = n & (Cm | Mm), h = n & Nm, g = d ? void 0 : Ur(e);
  function v() {
    for (var w = arguments.length, A = Array(w), M = w; M--; )
      A[M] = arguments[M];
    if (m)
      var W = wr(v), I = zh(A, W);
    if (r && (A = yu(A, r, i, m)), s && (A = vu(A, s, o, m)), w -= I, m && w < f) {
      var F = vt(A, W);
      return Ru(
        e,
        n,
        Gi,
        v.placeholder,
        t,
        A,
        F,
        a,
        l,
        f - w
      );
    }
    var C = c ? t : this, D = d ? C[e] : e;
    return w = A.length, a ? A = Pm(A, a) : h && w > 1 && A.reverse(), u && l < w && (A.length = l), this && this !== Je && this instanceof v && (D = g || Ur(D)), D.apply(C, A);
  }
  return v;
}
function Fm(e, n, t) {
  var r = Ur(e);
  function i() {
    for (var s = arguments.length, o = Array(s), a = s, l = wr(i); a--; )
      o[a] = arguments[a];
    var f = s < 3 && o[0] !== l && o[s - 1] !== l ? [] : vt(o, l);
    if (s -= f.length, s < t)
      return Ru(
        e,
        n,
        Gi,
        i.placeholder,
        void 0,
        o,
        f,
        void 0,
        void 0,
        t - s
      );
    var u = this && this !== Je && this instanceof i ? r : e;
    return An(u, this, o);
  }
  return i;
}
var Wm = 1;
function Dm(e, n, t, r) {
  var i = n & Wm, s = Ur(e);
  function o() {
    for (var a = -1, l = arguments.length, f = -1, u = r.length, c = Array(u + l), d = this && this !== Je && this instanceof o ? s : e; ++f < u; )
      c[f] = r[f];
    for (; l--; )
      c[f++] = arguments[++a];
    return An(d, i ? t : this, c);
  }
  return o;
}
var Ga = "__lodash_placeholder__", bs = 1, Um = 2, Bm = 4, za = 8, Mr = 128, Ha = 256, qm = Math.min;
function Gm(e, n) {
  var t = e[1], r = n[1], i = t | r, s = i < (bs | Um | Mr), o = r == Mr && t == za || r == Mr && t == Ha && e[7].length <= n[8] || r == (Mr | Ha) && n[7].length <= n[8] && t == za;
  if (!(s || o))
    return e;
  r & bs && (e[2] = n[2], i |= t & bs ? 0 : Bm);
  var a = n[3];
  if (a) {
    var l = e[3];
    e[3] = l ? yu(l, a, n[4]) : a, e[4] = l ? vt(e[3], Ga) : n[4];
  }
  return a = n[5], a && (l = e[5], e[5] = l ? vu(l, a, n[6]) : a, e[6] = l ? vt(e[5], Ga) : n[6]), a = n[7], a && (e[7] = a), r & Mr && (e[8] = e[8] == null ? n[8] : qm(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = i, e;
}
var zm = "Expected a function", Ka = 1, Hm = 2, ws = 8, $s = 16, As = 32, Ya = 64, Ja = Math.max;
function ot(e, n, t, r, i, s, o, a) {
  var l = n & Hm;
  if (!l && typeof e != "function")
    throw new TypeError(zm);
  var f = r ? r.length : 0;
  if (f || (n &= ~(As | Ya), r = i = void 0), o = o === void 0 ? o : Ja(oe(o), 0), a = a === void 0 ? a : oe(a), f -= i ? i.length : 0, n & Ya) {
    var u = r, c = i;
    r = i = void 0;
  }
  var d = l ? void 0 : lo(e), m = [
    e,
    n,
    t,
    r,
    i,
    u,
    c,
    s,
    o,
    a
  ];
  if (d && Gm(m, d), e = m[0], n = m[1], t = m[2], r = m[3], i = m[4], a = m[9] = m[9] === void 0 ? l ? 0 : e.length : Ja(m[9] - f, 0), !a && n & (ws | $s) && (n &= ~(ws | $s)), !n || n == Ka)
    var h = Bh(e, n, t);
  else
    n == ws || n == $s ? h = Fm(e, n, a) : (n == As || n == (Ka | As)) && !i.length ? h = Dm(e, n, t, r) : h = Gi.apply(void 0, m);
  var g = d ? _u : $u;
  return Ou(g(h, m), e, n);
}
var Km = 128;
function Eu(e, n, t) {
  return n = t ? void 0 : n, n = e && n == null ? e.length : n, ot(e, Km, void 0, void 0, void 0, void 0, n);
}
function at(e, n, t) {
  n == "__proto__" && ki ? ki(e, n, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[n] = t;
}
function Un(e, n) {
  return e === n || e !== e && n !== n;
}
var Ym = Object.prototype, Jm = Ym.hasOwnProperty;
function Xr(e, n, t) {
  var r = e[n];
  (!(Jm.call(e, n) && Un(r, t)) || t === void 0 && !(n in e)) && at(e, n, t);
}
function Jn(e, n, t, r) {
  var i = !t;
  t || (t = {});
  for (var s = -1, o = n.length; ++s < o; ) {
    var a = n[s], l = r ? r(t[a], e[a], a, t, e) : void 0;
    l === void 0 && (l = e[a]), i ? at(t, a, l) : Xr(t, a, l);
  }
  return t;
}
var Xa = Math.max;
function Tu(e, n, t) {
  return n = Xa(n === void 0 ? e.length - 1 : n, 0), function() {
    for (var r = arguments, i = -1, s = Xa(r.length - n, 0), o = Array(s); ++i < s; )
      o[i] = r[n + i];
    i = -1;
    for (var a = Array(n + 1); ++i < n; )
      a[i] = r[i];
    return a[n] = t(o), An(e, this, a);
  };
}
function le(e, n) {
  return uo(Tu(e, n, ln), e + "");
}
var Xm = 9007199254740991;
function zi(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Xm;
}
function mn(e) {
  return e != null && zi(e.length) && !it(e);
}
function on(e, n, t) {
  if (!Ie(t))
    return !1;
  var r = typeof n;
  return (r == "number" ? mn(t) && st(n, t.length) : r == "string" && n in t) ? Un(t[n], e) : !1;
}
function $r(e) {
  return le(function(n, t) {
    var r = -1, i = t.length, s = i > 1 ? t[i - 1] : void 0, o = i > 2 ? t[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (i--, s) : void 0, o && on(t[0], t[1], o) && (s = i < 3 ? void 0 : s, i = 1), n = Object(n); ++r < i; ) {
      var a = t[r];
      a && e(n, a, r, s);
    }
    return n;
  });
}
var Zm = Object.prototype;
function Zr(e) {
  var n = e && e.constructor, t = typeof n == "function" && n.prototype || Zm;
  return e === t;
}
function co(e, n) {
  for (var t = -1, r = Array(e); ++t < e; )
    r[t] = n(t);
  return r;
}
var Vm = "[object Arguments]";
function Za(e) {
  return Ne(e) && an(e) == Vm;
}
var ku = Object.prototype, Qm = ku.hasOwnProperty, xm = ku.propertyIsEnumerable, eg = Za(function() {
  return arguments;
}()) ? Za : function(e) {
  return Ne(e) && Qm.call(e, "callee") && !xm.call(e, "callee");
};
const Bt = eg;
function po() {
  return !1;
}
var Su = typeof exports == "object" && exports && !exports.nodeType && exports, Va = Su && typeof module == "object" && module && !module.nodeType && module, ng = Va && Va.exports === Su, Qa = ng ? Je.Buffer : void 0, tg = Qa ? Qa.isBuffer : void 0, rg = tg || po;
const bt = rg;
var ig = "[object Arguments]", sg = "[object Array]", og = "[object Boolean]", ag = "[object Date]", lg = "[object Error]", fg = "[object Function]", ug = "[object Map]", cg = "[object Number]", dg = "[object Object]", pg = "[object RegExp]", hg = "[object Set]", mg = "[object String]", gg = "[object WeakMap]", _g = "[object ArrayBuffer]", yg = "[object DataView]", vg = "[object Float32Array]", bg = "[object Float64Array]", wg = "[object Int8Array]", $g = "[object Int16Array]", Ag = "[object Int32Array]", Og = "[object Uint8Array]", Rg = "[object Uint8ClampedArray]", Eg = "[object Uint16Array]", Tg = "[object Uint32Array]", Te = {};
Te[vg] = Te[bg] = Te[wg] = Te[$g] = Te[Ag] = Te[Og] = Te[Rg] = Te[Eg] = Te[Tg] = !0;
Te[ig] = Te[sg] = Te[_g] = Te[og] = Te[yg] = Te[ag] = Te[lg] = Te[fg] = Te[ug] = Te[cg] = Te[dg] = Te[pg] = Te[hg] = Te[mg] = Te[gg] = !1;
function kg(e) {
  return Ne(e) && zi(e.length) && !!Te[an(e)];
}
function On(e) {
  return function(n) {
    return e(n);
  };
}
var Pu = typeof exports == "object" && exports && !exports.nodeType && exports, Nr = Pu && typeof module == "object" && module && !module.nodeType && module, Sg = Nr && Nr.exports === Pu, Os = Sg && du.process, Pg = function() {
  try {
    var e = Nr && Nr.require && Nr.require("util").types;
    return e || Os && Os.binding && Os.binding("util");
  } catch {
  }
}();
const In = Pg;
var xa = In && In.isTypedArray, Ig = xa ? On(xa) : kg;
const Ar = Ig;
var jg = Object.prototype, Cg = jg.hasOwnProperty;
function Iu(e, n) {
  var t = re(e), r = !t && Bt(e), i = !t && !r && bt(e), s = !t && !r && !i && Ar(e), o = t || r || i || s, a = o ? co(e.length, String) : [], l = a.length;
  for (var f in e)
    (n || Cg.call(e, f)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    st(f, l))) && a.push(f);
  return a;
}
function ju(e, n) {
  return function(t) {
    return e(n(t));
  };
}
var Mg = ju(Object.keys, Object);
const Lg = Mg;
var Ng = Object.prototype, Fg = Ng.hasOwnProperty;
function ho(e) {
  if (!Zr(e))
    return Lg(e);
  var n = [];
  for (var t in Object(e))
    Fg.call(e, t) && t != "constructor" && n.push(t);
  return n;
}
function He(e) {
  return mn(e) ? Iu(e) : ho(e);
}
var Wg = Object.prototype, Dg = Wg.hasOwnProperty, Ug = $r(function(e, n) {
  if (Zr(n) || mn(n)) {
    Jn(n, He(n), e);
    return;
  }
  for (var t in n)
    Dg.call(n, t) && Xr(e, t, n[t]);
});
const Bg = Ug;
function qg(e) {
  var n = [];
  if (e != null)
    for (var t in Object(e))
      n.push(t);
  return n;
}
var Gg = Object.prototype, zg = Gg.hasOwnProperty;
function Hg(e) {
  if (!Ie(e))
    return qg(e);
  var n = Zr(e), t = [];
  for (var r in e)
    r == "constructor" && (n || !zg.call(e, r)) || t.push(r);
  return t;
}
function gn(e) {
  return mn(e) ? Iu(e, !0) : Hg(e);
}
var Kg = $r(function(e, n) {
  Jn(n, gn(n), e);
});
const el = Kg;
var Yg = $r(function(e, n, t, r) {
  Jn(n, gn(n), e, r);
});
const Si = Yg;
var Jg = $r(function(e, n, t, r) {
  Jn(n, He(n), e, r);
});
const Xg = Jg;
var Zg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Vg = /^\w*$/;
function mo(e, n) {
  if (re(e))
    return !1;
  var t = typeof e;
  return t == "number" || t == "symbol" || t == "boolean" || e == null || wn(e) ? !0 : Vg.test(e) || !Zg.test(e) || n != null && e in Object(n);
}
var Qg = Kt(Object, "create");
const Br = Qg;
function xg() {
  this.__data__ = Br ? Br(null) : {}, this.size = 0;
}
function e1(e) {
  var n = this.has(e) && delete this.__data__[e];
  return this.size -= n ? 1 : 0, n;
}
var n1 = "__lodash_hash_undefined__", t1 = Object.prototype, r1 = t1.hasOwnProperty;
function i1(e) {
  var n = this.__data__;
  if (Br) {
    var t = n[e];
    return t === n1 ? void 0 : t;
  }
  return r1.call(n, e) ? n[e] : void 0;
}
var s1 = Object.prototype, o1 = s1.hasOwnProperty;
function a1(e) {
  var n = this.__data__;
  return Br ? n[e] !== void 0 : o1.call(n, e);
}
var l1 = "__lodash_hash_undefined__";
function f1(e, n) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Br && n === void 0 ? l1 : n, this;
}
function qt(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
qt.prototype.clear = xg;
qt.prototype.delete = e1;
qt.prototype.get = i1;
qt.prototype.has = a1;
qt.prototype.set = f1;
function u1() {
  this.__data__ = [], this.size = 0;
}
function Hi(e, n) {
  for (var t = e.length; t--; )
    if (Un(e[t][0], n))
      return t;
  return -1;
}
var c1 = Array.prototype, d1 = c1.splice;
function p1(e) {
  var n = this.__data__, t = Hi(n, e);
  if (t < 0)
    return !1;
  var r = n.length - 1;
  return t == r ? n.pop() : d1.call(n, t, 1), --this.size, !0;
}
function h1(e) {
  var n = this.__data__, t = Hi(n, e);
  return t < 0 ? void 0 : n[t][1];
}
function m1(e) {
  return Hi(this.__data__, e) > -1;
}
function g1(e, n) {
  var t = this.__data__, r = Hi(t, e);
  return r < 0 ? (++this.size, t.push([e, n])) : t[r][1] = n, this;
}
function lt(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
lt.prototype.clear = u1;
lt.prototype.delete = p1;
lt.prototype.get = h1;
lt.prototype.has = m1;
lt.prototype.set = g1;
var _1 = Kt(Je, "Map");
const qr = _1;
function y1() {
  this.size = 0, this.__data__ = {
    hash: new qt(),
    map: new (qr || lt)(),
    string: new qt()
  };
}
function v1(e) {
  var n = typeof e;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
}
function Ki(e, n) {
  var t = e.__data__;
  return v1(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
}
function b1(e) {
  var n = Ki(this, e).delete(e);
  return this.size -= n ? 1 : 0, n;
}
function w1(e) {
  return Ki(this, e).get(e);
}
function $1(e) {
  return Ki(this, e).has(e);
}
function A1(e, n) {
  var t = Ki(this, e), r = t.size;
  return t.set(e, n), this.size += t.size == r ? 0 : 1, this;
}
function ft(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
ft.prototype.clear = y1;
ft.prototype.delete = b1;
ft.prototype.get = w1;
ft.prototype.has = $1;
ft.prototype.set = A1;
var O1 = "Expected a function";
function Yi(e, n) {
  if (typeof e != "function" || n != null && typeof n != "function")
    throw new TypeError(O1);
  var t = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], s = t.cache;
    if (s.has(i))
      return s.get(i);
    var o = e.apply(this, r);
    return t.cache = s.set(i, o) || s, o;
  };
  return t.cache = new (Yi.Cache || ft)(), t;
}
Yi.Cache = ft;
var R1 = 500;
function E1(e) {
  var n = Yi(e, function(r) {
    return t.size === R1 && t.clear(), r;
  }), t = n.cache;
  return n;
}
var T1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, k1 = /\\(\\)?/g, S1 = E1(function(e) {
  var n = [];
  return e.charCodeAt(0) === 46 && n.push(""), e.replace(T1, function(t, r, i, s) {
    n.push(i ? s.replace(k1, "$1") : r || t);
  }), n;
});
const Cu = S1;
function _e(e) {
  return e == null ? "" : $n(e);
}
function $t(e, n) {
  return re(e) ? e : mo(e, n) ? [e] : Cu(_e(e));
}
var P1 = 1 / 0;
function Xn(e) {
  if (typeof e == "string" || wn(e))
    return e;
  var n = e + "";
  return n == "0" && 1 / e == -P1 ? "-0" : n;
}
function Yt(e, n) {
  n = $t(n, e);
  for (var t = 0, r = n.length; e != null && t < r; )
    e = e[Xn(n[t++])];
  return t && t == r ? e : void 0;
}
function _r(e, n, t) {
  var r = e == null ? void 0 : Yt(e, n);
  return r === void 0 ? t : r;
}
function go(e, n) {
  for (var t = -1, r = n.length, i = Array(r), s = e == null; ++t < r; )
    i[t] = s ? void 0 : _r(e, n[t]);
  return i;
}
function At(e, n) {
  for (var t = -1, r = n.length, i = e.length; ++t < r; )
    e[i + t] = n[t];
  return e;
}
var nl = en ? en.isConcatSpreadable : void 0;
function I1(e) {
  return re(e) || Bt(e) || !!(nl && e && e[nl]);
}
function Qe(e, n, t, r, i) {
  var s = -1, o = e.length;
  for (t || (t = I1), i || (i = []); ++s < o; ) {
    var a = e[s];
    n > 0 && t(a) ? n > 1 ? Qe(a, n - 1, t, r, i) : At(i, a) : r || (i[i.length] = a);
  }
  return i;
}
function Mu(e) {
  var n = e == null ? 0 : e.length;
  return n ? Qe(e, 1) : [];
}
function ut(e) {
  return uo(Tu(e, void 0, Mu), e + "");
}
var j1 = ut(go);
const C1 = j1;
var M1 = ju(Object.getPrototypeOf, Object);
const Ji = M1;
var L1 = "[object Object]", N1 = Function.prototype, F1 = Object.prototype, Lu = N1.toString, W1 = F1.hasOwnProperty, D1 = Lu.call(Object);
function Vr(e) {
  if (!Ne(e) || an(e) != L1)
    return !1;
  var n = Ji(e);
  if (n === null)
    return !0;
  var t = W1.call(n, "constructor") && n.constructor;
  return typeof t == "function" && t instanceof t && Lu.call(t) == D1;
}
var U1 = "[object DOMException]", B1 = "[object Error]";
function _o(e) {
  if (!Ne(e))
    return !1;
  var n = an(e);
  return n == B1 || n == U1 || typeof e.message == "string" && typeof e.name == "string" && !Vr(e);
}
var q1 = le(function(e, n) {
  try {
    return An(e, void 0, n);
  } catch (t) {
    return _o(t) ? t : new Error(t);
  }
});
const Nu = q1;
var G1 = "Expected a function";
function Fu(e, n) {
  var t;
  if (typeof n != "function")
    throw new TypeError(G1);
  return e = oe(e), function() {
    return --e > 0 && (t = n.apply(this, arguments)), e <= 1 && (n = void 0), t;
  };
}
var z1 = 1, H1 = 32, yo = le(function(e, n, t) {
  var r = z1;
  if (t.length) {
    var i = vt(t, wr(yo));
    r |= H1;
  }
  return ot(e, r, n, t, i);
});
yo.placeholder = {};
const Wu = yo;
var K1 = ut(function(e, n) {
  return Cn(n, function(t) {
    t = Xn(t), at(e, t, Wu(e[t], e));
  }), e;
});
const Y1 = K1;
var J1 = 1, X1 = 2, Z1 = 32, vo = le(function(e, n, t) {
  var r = J1 | X1;
  if (t.length) {
    var i = vt(t, wr(vo));
    r |= Z1;
  }
  return ot(n, r, e, t, i);
});
vo.placeholder = {};
const V1 = vo;
function jn(e, n, t) {
  var r = -1, i = e.length;
  n < 0 && (n = -n > i ? 0 : i + n), t = t > i ? i : t, t < 0 && (t += i), i = n > t ? 0 : t - n >>> 0, n >>>= 0;
  for (var s = Array(i); ++r < i; )
    s[r] = e[r + n];
  return s;
}
function Ot(e, n, t) {
  var r = e.length;
  return t = t === void 0 ? r : t, !n && t >= r ? e : jn(e, n, t);
}
var Q1 = "\\ud800-\\udfff", x1 = "\\u0300-\\u036f", e_ = "\\ufe20-\\ufe2f", n_ = "\\u20d0-\\u20ff", t_ = x1 + e_ + n_, r_ = "\\ufe0e\\ufe0f", i_ = "\\u200d", s_ = RegExp("[" + i_ + Q1 + t_ + r_ + "]");
function Or(e) {
  return s_.test(e);
}
function o_(e) {
  return e.split("");
}
var Du = "\\ud800-\\udfff", a_ = "\\u0300-\\u036f", l_ = "\\ufe20-\\ufe2f", f_ = "\\u20d0-\\u20ff", u_ = a_ + l_ + f_, c_ = "\\ufe0e\\ufe0f", d_ = "[" + Du + "]", Ds = "[" + u_ + "]", Us = "\\ud83c[\\udffb-\\udfff]", p_ = "(?:" + Ds + "|" + Us + ")", Uu = "[^" + Du + "]", Bu = "(?:\\ud83c[\\udde6-\\uddff]){2}", qu = "[\\ud800-\\udbff][\\udc00-\\udfff]", h_ = "\\u200d", Gu = p_ + "?", zu = "[" + c_ + "]?", m_ = "(?:" + h_ + "(?:" + [Uu, Bu, qu].join("|") + ")" + zu + Gu + ")*", g_ = zu + Gu + m_, __ = "(?:" + [Uu + Ds + "?", Ds, Bu, qu, d_].join("|") + ")", y_ = RegExp(Us + "(?=" + Us + ")|" + __ + g_, "g");
function v_(e) {
  return e.match(y_) || [];
}
function Dn(e) {
  return Or(e) ? v_(e) : o_(e);
}
function Hu(e) {
  return function(n) {
    n = _e(n);
    var t = Or(n) ? Dn(n) : void 0, r = t ? t[0] : n.charAt(0), i = t ? Ot(t, 1).join("") : n.slice(1);
    return r[e]() + i;
  };
}
var b_ = Hu("toUpperCase");
const bo = b_;
function Ku(e) {
  return bo(_e(e).toLowerCase());
}
function wo(e, n, t, r) {
  var i = -1, s = e == null ? 0 : e.length;
  for (r && s && (t = e[++i]); ++i < s; )
    t = n(t, e[i], i, e);
  return t;
}
function $o(e) {
  return function(n) {
    return e == null ? void 0 : e[n];
  };
}
var w_ = {
  // Latin-1 Supplement block.
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  Ç: "C",
  ç: "c",
  Ð: "D",
  ð: "d",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  Ñ: "N",
  ñ: "n",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  Ý: "Y",
  ý: "y",
  ÿ: "y",
  Æ: "Ae",
  æ: "ae",
  Þ: "Th",
  þ: "th",
  ß: "ss",
  // Latin Extended-A block.
  Ā: "A",
  Ă: "A",
  Ą: "A",
  ā: "a",
  ă: "a",
  ą: "a",
  Ć: "C",
  Ĉ: "C",
  Ċ: "C",
  Č: "C",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  Ď: "D",
  Đ: "D",
  ď: "d",
  đ: "d",
  Ē: "E",
  Ĕ: "E",
  Ė: "E",
  Ę: "E",
  Ě: "E",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  Ĝ: "G",
  Ğ: "G",
  Ġ: "G",
  Ģ: "G",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  Ĥ: "H",
  Ħ: "H",
  ĥ: "h",
  ħ: "h",
  Ĩ: "I",
  Ī: "I",
  Ĭ: "I",
  Į: "I",
  İ: "I",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  ĸ: "k",
  Ĺ: "L",
  Ļ: "L",
  Ľ: "L",
  Ŀ: "L",
  Ł: "L",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  Ń: "N",
  Ņ: "N",
  Ň: "N",
  Ŋ: "N",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŋ: "n",
  Ō: "O",
  Ŏ: "O",
  Ő: "O",
  ō: "o",
  ŏ: "o",
  ő: "o",
  Ŕ: "R",
  Ŗ: "R",
  Ř: "R",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  Ś: "S",
  Ŝ: "S",
  Ş: "S",
  Š: "S",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  Ţ: "T",
  Ť: "T",
  Ŧ: "T",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  Ũ: "U",
  Ū: "U",
  Ŭ: "U",
  Ů: "U",
  Ű: "U",
  Ų: "U",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  Ŵ: "W",
  ŵ: "w",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Ź: "Z",
  Ż: "Z",
  Ž: "Z",
  ź: "z",
  ż: "z",
  ž: "z",
  Ĳ: "IJ",
  ĳ: "ij",
  Œ: "Oe",
  œ: "oe",
  ŉ: "'n",
  ſ: "s"
}, $_ = $o(w_);
const A_ = $_;
var O_ = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, R_ = "\\u0300-\\u036f", E_ = "\\ufe20-\\ufe2f", T_ = "\\u20d0-\\u20ff", k_ = R_ + E_ + T_, S_ = "[" + k_ + "]", P_ = RegExp(S_, "g");
function Yu(e) {
  return e = _e(e), e && e.replace(O_, A_).replace(P_, "");
}
var I_ = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function j_(e) {
  return e.match(I_) || [];
}
var C_ = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function M_(e) {
  return C_.test(e);
}
var Ju = "\\ud800-\\udfff", L_ = "\\u0300-\\u036f", N_ = "\\ufe20-\\ufe2f", F_ = "\\u20d0-\\u20ff", W_ = L_ + N_ + F_, Xu = "\\u2700-\\u27bf", Zu = "a-z\\xdf-\\xf6\\xf8-\\xff", D_ = "\\xac\\xb1\\xd7\\xf7", U_ = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", B_ = "\\u2000-\\u206f", q_ = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Vu = "A-Z\\xc0-\\xd6\\xd8-\\xde", G_ = "\\ufe0e\\ufe0f", Qu = D_ + U_ + B_ + q_, xu = "['’]", tl = "[" + Qu + "]", z_ = "[" + W_ + "]", ec = "\\d+", H_ = "[" + Xu + "]", nc = "[" + Zu + "]", tc = "[^" + Ju + Qu + ec + Xu + Zu + Vu + "]", K_ = "\\ud83c[\\udffb-\\udfff]", Y_ = "(?:" + z_ + "|" + K_ + ")", J_ = "[^" + Ju + "]", rc = "(?:\\ud83c[\\udde6-\\uddff]){2}", ic = "[\\ud800-\\udbff][\\udc00-\\udfff]", ur = "[" + Vu + "]", X_ = "\\u200d", rl = "(?:" + nc + "|" + tc + ")", Z_ = "(?:" + ur + "|" + tc + ")", il = "(?:" + xu + "(?:d|ll|m|re|s|t|ve))?", sl = "(?:" + xu + "(?:D|LL|M|RE|S|T|VE))?", sc = Y_ + "?", oc = "[" + G_ + "]?", V_ = "(?:" + X_ + "(?:" + [J_, rc, ic].join("|") + ")" + oc + sc + ")*", Q_ = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", x_ = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", e0 = oc + sc + V_, n0 = "(?:" + [H_, rc, ic].join("|") + ")" + e0, t0 = RegExp([
  ur + "?" + nc + "+" + il + "(?=" + [tl, ur, "$"].join("|") + ")",
  Z_ + "+" + sl + "(?=" + [tl, ur + rl, "$"].join("|") + ")",
  ur + "?" + rl + "+" + il,
  ur + "+" + sl,
  x_,
  Q_,
  ec,
  n0
].join("|"), "g");
function r0(e) {
  return e.match(t0) || [];
}
function ac(e, n, t) {
  return e = _e(e), n = t ? void 0 : n, n === void 0 ? M_(e) ? r0(e) : j_(e) : e.match(n) || [];
}
var i0 = "['’]", s0 = RegExp(i0, "g");
function Rr(e) {
  return function(n) {
    return wo(ac(Yu(n).replace(s0, "")), e, "");
  };
}
var o0 = Rr(function(e, n, t) {
  return n = n.toLowerCase(), e + (t ? Ku(n) : n);
});
const a0 = o0;
function l0() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return re(e) ? e : [e];
}
var f0 = Je.isFinite, u0 = Math.min;
function Ao(e) {
  var n = Math[e];
  return function(t, r) {
    if (t = kn(t), r = r == null ? 0 : u0(oe(r), 292), r && f0(t)) {
      var i = (_e(t) + "e").split("e"), s = n(i[0] + "e" + (+i[1] + r));
      return i = (_e(s) + "e").split("e"), +(i[0] + "e" + (+i[1] - r));
    }
    return n(t);
  };
}
var c0 = Ao("ceil");
const d0 = c0;
function lc(e) {
  var n = p(e);
  return n.__chain__ = !0, n;
}
var p0 = Math.ceil, h0 = Math.max;
function m0(e, n, t) {
  (t ? on(e, n, t) : n === void 0) ? n = 1 : n = h0(oe(n), 0);
  var r = e == null ? 0 : e.length;
  if (!r || n < 1)
    return [];
  for (var i = 0, s = 0, o = Array(p0(r / n)); i < r; )
    o[s++] = jn(e, i, i += n);
  return o;
}
function Jt(e, n, t) {
  return e === e && (t !== void 0 && (e = e <= t ? e : t), n !== void 0 && (e = e >= n ? e : n)), e;
}
function g0(e, n, t) {
  return t === void 0 && (t = n, n = void 0), t !== void 0 && (t = kn(t), t = t === t ? t : 0), n !== void 0 && (n = kn(n), n = n === n ? n : 0), Jt(kn(e), n, t);
}
function _0() {
  this.__data__ = new lt(), this.size = 0;
}
function y0(e) {
  var n = this.__data__, t = n.delete(e);
  return this.size = n.size, t;
}
function v0(e) {
  return this.__data__.get(e);
}
function b0(e) {
  return this.__data__.has(e);
}
var w0 = 200;
function $0(e, n) {
  var t = this.__data__;
  if (t instanceof lt) {
    var r = t.__data__;
    if (!qr || r.length < w0 - 1)
      return r.push([e, n]), this.size = ++t.size, this;
    t = this.__data__ = new ft(r);
  }
  return t.set(e, n), this.size = t.size, this;
}
function Nn(e) {
  var n = this.__data__ = new lt(e);
  this.size = n.size;
}
Nn.prototype.clear = _0;
Nn.prototype.delete = y0;
Nn.prototype.get = v0;
Nn.prototype.has = b0;
Nn.prototype.set = $0;
function fc(e, n) {
  return e && Jn(n, He(n), e);
}
function A0(e, n) {
  return e && Jn(n, gn(n), e);
}
var uc = typeof exports == "object" && exports && !exports.nodeType && exports, ol = uc && typeof module == "object" && module && !module.nodeType && module, O0 = ol && ol.exports === uc, al = O0 ? Je.Buffer : void 0, ll = al ? al.allocUnsafe : void 0;
function cc(e, n) {
  if (n)
    return e.slice();
  var t = e.length, r = ll ? ll(t) : new e.constructor(t);
  return e.copy(r), r;
}
function Rt(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length, i = 0, s = []; ++t < r; ) {
    var o = e[t];
    n(o, t, e) && (s[i++] = o);
  }
  return s;
}
function Oo() {
  return [];
}
var R0 = Object.prototype, E0 = R0.propertyIsEnumerable, fl = Object.getOwnPropertySymbols, T0 = fl ? function(e) {
  return e == null ? [] : (e = Object(e), Rt(fl(e), function(n) {
    return E0.call(e, n);
  }));
} : Oo;
const Ro = T0;
function k0(e, n) {
  return Jn(e, Ro(e), n);
}
var S0 = Object.getOwnPropertySymbols, P0 = S0 ? function(e) {
  for (var n = []; e; )
    At(n, Ro(e)), e = Ji(e);
  return n;
} : Oo;
const dc = P0;
function I0(e, n) {
  return Jn(e, dc(e), n);
}
function pc(e, n, t) {
  var r = n(e);
  return re(e) ? r : At(r, t(e));
}
function Bs(e) {
  return pc(e, He, Ro);
}
function Eo(e) {
  return pc(e, gn, dc);
}
var j0 = Kt(Je, "DataView");
const qs = j0;
var C0 = Kt(Je, "Promise");
const Gs = C0;
var M0 = Kt(Je, "Set");
const mr = M0;
var ul = "[object Map]", L0 = "[object Object]", cl = "[object Promise]", dl = "[object Set]", pl = "[object WeakMap]", hl = "[object DataView]", N0 = Ht(qs), F0 = Ht(qr), W0 = Ht(Gs), D0 = Ht(mr), U0 = Ht(Dr), Nt = an;
(qs && Nt(new qs(new ArrayBuffer(1))) != hl || qr && Nt(new qr()) != ul || Gs && Nt(Gs.resolve()) != cl || mr && Nt(new mr()) != dl || Dr && Nt(new Dr()) != pl) && (Nt = function(e) {
  var n = an(e), t = n == L0 ? e.constructor : void 0, r = t ? Ht(t) : "";
  if (r)
    switch (r) {
      case N0:
        return hl;
      case F0:
        return ul;
      case W0:
        return cl;
      case D0:
        return dl;
      case U0:
        return pl;
    }
  return n;
});
const Yn = Nt;
var B0 = Object.prototype, q0 = B0.hasOwnProperty;
function G0(e) {
  var n = e.length, t = new e.constructor(n);
  return n && typeof e[0] == "string" && q0.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var z0 = Je.Uint8Array;
const Pi = z0;
function To(e) {
  var n = new e.constructor(e.byteLength);
  return new Pi(n).set(new Pi(e)), n;
}
function H0(e, n) {
  var t = n ? To(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var K0 = /\w*$/;
function Y0(e) {
  var n = new e.constructor(e.source, K0.exec(e));
  return n.lastIndex = e.lastIndex, n;
}
var ml = en ? en.prototype : void 0, gl = ml ? ml.valueOf : void 0;
function J0(e) {
  return gl ? Object(gl.call(e)) : {};
}
function hc(e, n) {
  var t = n ? To(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.length);
}
var X0 = "[object Boolean]", Z0 = "[object Date]", V0 = "[object Map]", Q0 = "[object Number]", x0 = "[object RegExp]", ey = "[object Set]", ny = "[object String]", ty = "[object Symbol]", ry = "[object ArrayBuffer]", iy = "[object DataView]", sy = "[object Float32Array]", oy = "[object Float64Array]", ay = "[object Int8Array]", ly = "[object Int16Array]", fy = "[object Int32Array]", uy = "[object Uint8Array]", cy = "[object Uint8ClampedArray]", dy = "[object Uint16Array]", py = "[object Uint32Array]";
function hy(e, n, t) {
  var r = e.constructor;
  switch (n) {
    case ry:
      return To(e);
    case X0:
    case Z0:
      return new r(+e);
    case iy:
      return H0(e, t);
    case sy:
    case oy:
    case ay:
    case ly:
    case fy:
    case uy:
    case cy:
    case dy:
    case py:
      return hc(e, t);
    case V0:
      return new r();
    case Q0:
    case ny:
      return new r(e);
    case x0:
      return Y0(e);
    case ey:
      return new r();
    case ty:
      return J0(e);
  }
}
function mc(e) {
  return typeof e.constructor == "function" && !Zr(e) ? vr(Ji(e)) : {};
}
var my = "[object Map]";
function gy(e) {
  return Ne(e) && Yn(e) == my;
}
var _l = In && In.isMap, _y = _l ? On(_l) : gy;
const gc = _y;
var yy = "[object Set]";
function vy(e) {
  return Ne(e) && Yn(e) == yy;
}
var yl = In && In.isSet, by = yl ? On(yl) : vy;
const _c = by;
var wy = 1, $y = 2, Ay = 4, yc = "[object Arguments]", Oy = "[object Array]", Ry = "[object Boolean]", Ey = "[object Date]", Ty = "[object Error]", vc = "[object Function]", ky = "[object GeneratorFunction]", Sy = "[object Map]", Py = "[object Number]", bc = "[object Object]", Iy = "[object RegExp]", jy = "[object Set]", Cy = "[object String]", My = "[object Symbol]", Ly = "[object WeakMap]", Ny = "[object ArrayBuffer]", Fy = "[object DataView]", Wy = "[object Float32Array]", Dy = "[object Float64Array]", Uy = "[object Int8Array]", By = "[object Int16Array]", qy = "[object Int32Array]", Gy = "[object Uint8Array]", zy = "[object Uint8ClampedArray]", Hy = "[object Uint16Array]", Ky = "[object Uint32Array]", Ee = {};
Ee[yc] = Ee[Oy] = Ee[Ny] = Ee[Fy] = Ee[Ry] = Ee[Ey] = Ee[Wy] = Ee[Dy] = Ee[Uy] = Ee[By] = Ee[qy] = Ee[Sy] = Ee[Py] = Ee[bc] = Ee[Iy] = Ee[jy] = Ee[Cy] = Ee[My] = Ee[Gy] = Ee[zy] = Ee[Hy] = Ee[Ky] = !0;
Ee[Ty] = Ee[vc] = Ee[Ly] = !1;
function Sn(e, n, t, r, i, s) {
  var o, a = n & wy, l = n & $y, f = n & Ay;
  if (t && (o = i ? t(e, r, i, s) : t(e)), o !== void 0)
    return o;
  if (!Ie(e))
    return e;
  var u = re(e);
  if (u) {
    if (o = G0(e), !a)
      return pn(e, o);
  } else {
    var c = Yn(e), d = c == vc || c == ky;
    if (bt(e))
      return cc(e, a);
    if (c == bc || c == yc || d && !i) {
      if (o = l || d ? {} : mc(e), !a)
        return l ? I0(e, A0(o, e)) : k0(e, fc(o, e));
    } else {
      if (!Ee[c])
        return i ? e : {};
      o = hy(e, c, a);
    }
  }
  s || (s = new Nn());
  var m = s.get(e);
  if (m)
    return m;
  s.set(e, o), _c(e) ? e.forEach(function(v) {
    o.add(Sn(v, n, t, v, e, s));
  }) : gc(e) && e.forEach(function(v, w) {
    o.set(w, Sn(v, n, t, w, e, s));
  });
  var h = f ? l ? Eo : Bs : l ? gn : He, g = u ? void 0 : h(e);
  return Cn(g || e, function(v, w) {
    g && (w = v, v = e[w]), Xr(o, w, Sn(v, n, t, w, e, s));
  }), o;
}
var Yy = 4;
function Jy(e) {
  return Sn(e, Yy);
}
var Xy = 1, Zy = 4;
function Vy(e) {
  return Sn(e, Xy | Zy);
}
var Qy = 1, xy = 4;
function ev(e, n) {
  return n = typeof n == "function" ? n : void 0, Sn(e, Qy | xy, n);
}
var nv = 4;
function tv(e, n) {
  return n = typeof n == "function" ? n : void 0, Sn(e, nv, n);
}
function rv() {
  return new Pn(this.value(), this.__chain__);
}
function iv(e) {
  for (var n = -1, t = e == null ? 0 : e.length, r = 0, i = []; ++n < t; ) {
    var s = e[n];
    s && (i[r++] = s);
  }
  return i;
}
function sv() {
  var e = arguments.length;
  if (!e)
    return [];
  for (var n = Array(e - 1), t = arguments[0], r = e; r--; )
    n[r - 1] = arguments[r];
  return At(re(t) ? pn(t) : [t], Qe(n, 1));
}
var ov = "__lodash_hash_undefined__";
function av(e) {
  return this.__data__.set(e, ov), this;
}
function lv(e) {
  return this.__data__.has(e);
}
function Gt(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.__data__ = new ft(); ++n < t; )
    this.add(e[n]);
}
Gt.prototype.add = Gt.prototype.push = av;
Gt.prototype.has = lv;
function ko(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length; ++t < r; )
    if (n(e[t], t, e))
      return !0;
  return !1;
}
function Gr(e, n) {
  return e.has(n);
}
var fv = 1, uv = 2;
function wc(e, n, t, r, i, s) {
  var o = t & fv, a = e.length, l = n.length;
  if (a != l && !(o && l > a))
    return !1;
  var f = s.get(e), u = s.get(n);
  if (f && u)
    return f == n && u == e;
  var c = -1, d = !0, m = t & uv ? new Gt() : void 0;
  for (s.set(e, n), s.set(n, e); ++c < a; ) {
    var h = e[c], g = n[c];
    if (r)
      var v = o ? r(g, h, c, n, e, s) : r(h, g, c, e, n, s);
    if (v !== void 0) {
      if (v)
        continue;
      d = !1;
      break;
    }
    if (m) {
      if (!ko(n, function(w, A) {
        if (!Gr(m, A) && (h === w || i(h, w, t, r, s)))
          return m.push(A);
      })) {
        d = !1;
        break;
      }
    } else if (!(h === g || i(h, g, t, r, s))) {
      d = !1;
      break;
    }
  }
  return s.delete(e), s.delete(n), d;
}
function So(e) {
  var n = -1, t = Array(e.size);
  return e.forEach(function(r, i) {
    t[++n] = [i, r];
  }), t;
}
function Xi(e) {
  var n = -1, t = Array(e.size);
  return e.forEach(function(r) {
    t[++n] = r;
  }), t;
}
var cv = 1, dv = 2, pv = "[object Boolean]", hv = "[object Date]", mv = "[object Error]", gv = "[object Map]", _v = "[object Number]", yv = "[object RegExp]", vv = "[object Set]", bv = "[object String]", wv = "[object Symbol]", $v = "[object ArrayBuffer]", Av = "[object DataView]", vl = en ? en.prototype : void 0, Rs = vl ? vl.valueOf : void 0;
function Ov(e, n, t, r, i, s, o) {
  switch (t) {
    case Av:
      if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
        return !1;
      e = e.buffer, n = n.buffer;
    case $v:
      return !(e.byteLength != n.byteLength || !s(new Pi(e), new Pi(n)));
    case pv:
    case hv:
    case _v:
      return Un(+e, +n);
    case mv:
      return e.name == n.name && e.message == n.message;
    case yv:
    case bv:
      return e == n + "";
    case gv:
      var a = So;
    case vv:
      var l = r & cv;
      if (a || (a = Xi), e.size != n.size && !l)
        return !1;
      var f = o.get(e);
      if (f)
        return f == n;
      r |= dv, o.set(e, n);
      var u = wc(a(e), a(n), r, i, s, o);
      return o.delete(e), u;
    case wv:
      if (Rs)
        return Rs.call(e) == Rs.call(n);
  }
  return !1;
}
var Rv = 1, Ev = Object.prototype, Tv = Ev.hasOwnProperty;
function kv(e, n, t, r, i, s) {
  var o = t & Rv, a = Bs(e), l = a.length, f = Bs(n), u = f.length;
  if (l != u && !o)
    return !1;
  for (var c = l; c--; ) {
    var d = a[c];
    if (!(o ? d in n : Tv.call(n, d)))
      return !1;
  }
  var m = s.get(e), h = s.get(n);
  if (m && h)
    return m == n && h == e;
  var g = !0;
  s.set(e, n), s.set(n, e);
  for (var v = o; ++c < l; ) {
    d = a[c];
    var w = e[d], A = n[d];
    if (r)
      var M = o ? r(A, w, d, n, e, s) : r(w, A, d, e, n, s);
    if (!(M === void 0 ? w === A || i(w, A, t, r, s) : M)) {
      g = !1;
      break;
    }
    v || (v = d == "constructor");
  }
  if (g && !v) {
    var W = e.constructor, I = n.constructor;
    W != I && "constructor" in e && "constructor" in n && !(typeof W == "function" && W instanceof W && typeof I == "function" && I instanceof I) && (g = !1);
  }
  return s.delete(e), s.delete(n), g;
}
var Sv = 1, bl = "[object Arguments]", wl = "[object Array]", pi = "[object Object]", Pv = Object.prototype, $l = Pv.hasOwnProperty;
function Iv(e, n, t, r, i, s) {
  var o = re(e), a = re(n), l = o ? wl : Yn(e), f = a ? wl : Yn(n);
  l = l == bl ? pi : l, f = f == bl ? pi : f;
  var u = l == pi, c = f == pi, d = l == f;
  if (d && bt(e)) {
    if (!bt(n))
      return !1;
    o = !0, u = !1;
  }
  if (d && !u)
    return s || (s = new Nn()), o || Ar(e) ? wc(e, n, t, r, i, s) : Ov(e, n, l, t, r, i, s);
  if (!(t & Sv)) {
    var m = u && $l.call(e, "__wrapped__"), h = c && $l.call(n, "__wrapped__");
    if (m || h) {
      var g = m ? e.value() : e, v = h ? n.value() : n;
      return s || (s = new Nn()), i(g, v, t, r, s);
    }
  }
  return d ? (s || (s = new Nn()), kv(e, n, t, r, i, s)) : !1;
}
function Qr(e, n, t, r, i) {
  return e === n ? !0 : e == null || n == null || !Ne(e) && !Ne(n) ? e !== e && n !== n : Iv(e, n, t, r, Qr, i);
}
var jv = 1, Cv = 2;
function Po(e, n, t, r) {
  var i = t.length, s = i, o = !r;
  if (e == null)
    return !s;
  for (e = Object(e); i--; ) {
    var a = t[i];
    if (o && a[2] ? a[1] !== e[a[0]] : !(a[0] in e))
      return !1;
  }
  for (; ++i < s; ) {
    a = t[i];
    var l = a[0], f = e[l], u = a[1];
    if (o && a[2]) {
      if (f === void 0 && !(l in e))
        return !1;
    } else {
      var c = new Nn();
      if (r)
        var d = r(f, u, l, e, n, c);
      if (!(d === void 0 ? Qr(u, f, jv | Cv, r, c) : d))
        return !1;
    }
  }
  return !0;
}
function $c(e) {
  return e === e && !Ie(e);
}
function Io(e) {
  for (var n = He(e), t = n.length; t--; ) {
    var r = n[t], i = e[r];
    n[t] = [r, i, $c(i)];
  }
  return n;
}
function Ac(e, n) {
  return function(t) {
    return t == null ? !1 : t[e] === n && (n !== void 0 || e in Object(t));
  };
}
function Oc(e) {
  var n = Io(e);
  return n.length == 1 && n[0][2] ? Ac(n[0][0], n[0][1]) : function(t) {
    return t === e || Po(t, e, n);
  };
}
function Mv(e, n) {
  return e != null && n in Object(e);
}
function Rc(e, n, t) {
  n = $t(n, e);
  for (var r = -1, i = n.length, s = !1; ++r < i; ) {
    var o = Xn(n[r]);
    if (!(s = e != null && t(e, o)))
      break;
    e = e[o];
  }
  return s || ++r != i ? s : (i = e == null ? 0 : e.length, !!i && zi(i) && st(o, i) && (re(e) || Bt(e)));
}
function jo(e, n) {
  return e != null && Rc(e, n, Mv);
}
var Lv = 1, Nv = 2;
function Ec(e, n) {
  return mo(e) && $c(n) ? Ac(Xn(e), n) : function(t) {
    var r = _r(t, e);
    return r === void 0 && r === n ? jo(t, e) : Qr(n, r, Lv | Nv);
  };
}
function Co(e) {
  return function(n) {
    return n == null ? void 0 : n[e];
  };
}
function Fv(e) {
  return function(n) {
    return Yt(n, e);
  };
}
function Tc(e) {
  return mo(e) ? Co(Xn(e)) : Fv(e);
}
function te(e) {
  return typeof e == "function" ? e : e == null ? ln : typeof e == "object" ? re(e) ? Ec(e[0], e[1]) : Oc(e) : Tc(e);
}
var Wv = "Expected a function";
function Dv(e) {
  var n = e == null ? 0 : e.length, t = te;
  return e = n ? Pe(e, function(r) {
    if (typeof r[1] != "function")
      throw new TypeError(Wv);
    return [t(r[0]), r[1]];
  }) : [], le(function(r) {
    for (var i = -1; ++i < n; ) {
      var s = e[i];
      if (An(s[0], this, r))
        return An(s[1], this, r);
    }
  });
}
function kc(e, n, t) {
  var r = t.length;
  if (e == null)
    return !r;
  for (e = Object(e); r--; ) {
    var i = t[r], s = n[i], o = e[i];
    if (o === void 0 && !(i in e) || !s(o))
      return !1;
  }
  return !0;
}
function Uv(e) {
  var n = He(e);
  return function(t) {
    return kc(t, e, n);
  };
}
var Bv = 1;
function qv(e) {
  return Uv(Sn(e, Bv));
}
function Gv(e, n) {
  return n == null || kc(e, n, He(n));
}
function zv(e, n, t, r) {
  for (var i = -1, s = e == null ? 0 : e.length; ++i < s; ) {
    var o = e[i];
    n(r, o, t(o), e);
  }
  return r;
}
function Sc(e) {
  return function(n, t, r) {
    for (var i = -1, s = Object(n), o = r(n), a = o.length; a--; ) {
      var l = o[e ? a : ++i];
      if (t(s[l], l, s) === !1)
        break;
    }
    return n;
  };
}
var Hv = Sc();
const Mo = Hv;
function Zn(e, n) {
  return e && Mo(e, n, He);
}
function Pc(e, n) {
  return function(t, r) {
    if (t == null)
      return t;
    if (!mn(t))
      return e(t, r);
    for (var i = t.length, s = n ? i : -1, o = Object(t); (n ? s-- : ++s < i) && r(o[s], s, o) !== !1; )
      ;
    return t;
  };
}
var Kv = Pc(Zn);
const Et = Kv;
function Yv(e, n, t, r) {
  return Et(e, function(i, s, o) {
    n(r, i, t(i), o);
  }), r;
}
function Zi(e, n) {
  return function(t, r) {
    var i = re(t) ? zv : Yv, s = n ? n() : {};
    return i(t, e, te(r), s);
  };
}
var Jv = Object.prototype, Xv = Jv.hasOwnProperty, Zv = Zi(function(e, n, t) {
  Xv.call(e, t) ? ++e[t] : at(e, t, 1);
});
const Vv = Zv;
function Qv(e, n) {
  var t = vr(e);
  return n == null ? t : fc(t, n);
}
var xv = 8;
function Lo(e, n, t) {
  n = t ? void 0 : n;
  var r = ot(e, xv, void 0, void 0, void 0, void 0, void 0, n);
  return r.placeholder = Lo.placeholder, r;
}
Lo.placeholder = {};
var eb = 16;
function No(e, n, t) {
  n = t ? void 0 : n;
  var r = ot(e, eb, void 0, void 0, void 0, void 0, void 0, n);
  return r.placeholder = No.placeholder, r;
}
No.placeholder = {};
var nb = function() {
  return Je.Date.now();
};
const Oi = nb;
var tb = "Expected a function", rb = Math.max, ib = Math.min;
function Ic(e, n, t) {
  var r, i, s, o, a, l, f = 0, u = !1, c = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(tb);
  n = kn(n) || 0, Ie(t) && (u = !!t.leading, c = "maxWait" in t, s = c ? rb(kn(t.maxWait) || 0, n) : s, d = "trailing" in t ? !!t.trailing : d);
  function m(F) {
    var C = r, D = i;
    return r = i = void 0, f = F, o = e.apply(D, C), o;
  }
  function h(F) {
    return f = F, a = setTimeout(w, n), u ? m(F) : o;
  }
  function g(F) {
    var C = F - l, D = F - f, j = n - C;
    return c ? ib(j, s - D) : j;
  }
  function v(F) {
    var C = F - l, D = F - f;
    return l === void 0 || C >= n || C < 0 || c && D >= s;
  }
  function w() {
    var F = Oi();
    if (v(F))
      return A(F);
    a = setTimeout(w, g(F));
  }
  function A(F) {
    return a = void 0, d && r ? m(F) : (r = i = void 0, o);
  }
  function M() {
    a !== void 0 && clearTimeout(a), f = 0, r = l = i = a = void 0;
  }
  function W() {
    return a === void 0 ? o : A(Oi());
  }
  function I() {
    var F = Oi(), C = v(F);
    if (r = arguments, i = this, l = F, C) {
      if (a === void 0)
        return h(l);
      if (c)
        return clearTimeout(a), a = setTimeout(w, n), m(l);
    }
    return a === void 0 && (a = setTimeout(w, n)), o;
  }
  return I.cancel = M, I.flush = W, I;
}
function sb(e, n) {
  return e == null || e !== e ? n : e;
}
var jc = Object.prototype, ob = jc.hasOwnProperty, ab = le(function(e, n) {
  e = Object(e);
  var t = -1, r = n.length, i = r > 2 ? n[2] : void 0;
  for (i && on(n[0], n[1], i) && (r = 1); ++t < r; )
    for (var s = n[t], o = gn(s), a = -1, l = o.length; ++a < l; ) {
      var f = o[a], u = e[f];
      (u === void 0 || Un(u, jc[f]) && !ob.call(e, f)) && (e[f] = s[f]);
    }
  return e;
});
const lb = ab;
function zs(e, n, t) {
  (t !== void 0 && !Un(e[n], t) || t === void 0 && !(n in e)) && at(e, n, t);
}
function qe(e) {
  return Ne(e) && mn(e);
}
function Hs(e, n) {
  if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
    return e[n];
}
function Cc(e) {
  return Jn(e, gn(e));
}
function fb(e, n, t, r, i, s, o) {
  var a = Hs(e, t), l = Hs(n, t), f = o.get(l);
  if (f) {
    zs(e, t, f);
    return;
  }
  var u = s ? s(a, l, t + "", e, n, o) : void 0, c = u === void 0;
  if (c) {
    var d = re(l), m = !d && bt(l), h = !d && !m && Ar(l);
    u = l, d || m || h ? re(a) ? u = a : qe(a) ? u = pn(a) : m ? (c = !1, u = cc(l, !0)) : h ? (c = !1, u = hc(l, !0)) : u = [] : Vr(l) || Bt(l) ? (u = a, Bt(a) ? u = Cc(a) : (!Ie(a) || it(a)) && (u = mc(l))) : c = !1;
  }
  c && (o.set(l, u), i(u, l, r, s, o), o.delete(l)), zs(e, t, u);
}
function Vi(e, n, t, r, i) {
  e !== n && Mo(n, function(s, o) {
    if (i || (i = new Nn()), Ie(s))
      fb(e, n, o, t, Vi, r, i);
    else {
      var a = r ? r(Hs(e, o), s, o + "", e, n, i) : void 0;
      a === void 0 && (a = s), zs(e, o, a);
    }
  }, gn);
}
function Mc(e, n, t, r, i, s) {
  return Ie(e) && Ie(n) && (s.set(n, e), Vi(e, n, void 0, Mc, s), s.delete(n)), e;
}
var ub = $r(function(e, n, t, r) {
  Vi(e, n, t, r);
});
const Lc = ub;
var cb = le(function(e) {
  return e.push(void 0, Mc), An(Lc, void 0, e);
});
const db = cb;
var pb = "Expected a function";
function Nc(e, n, t) {
  if (typeof e != "function")
    throw new TypeError(pb);
  return setTimeout(function() {
    e.apply(void 0, t);
  }, n);
}
var hb = le(function(e, n) {
  return Nc(e, 1, n);
});
const mb = hb;
var gb = le(function(e, n, t) {
  return Nc(e, kn(n) || 0, t);
});
const _b = gb;
function Fo(e, n, t) {
  for (var r = -1, i = e == null ? 0 : e.length; ++r < i; )
    if (t(n, e[r]))
      return !0;
  return !1;
}
var yb = 200;
function xr(e, n, t, r) {
  var i = -1, s = qi, o = !0, a = e.length, l = [], f = n.length;
  if (!a)
    return l;
  t && (n = Pe(n, On(t))), r ? (s = Fo, o = !1) : n.length >= yb && (s = Gr, o = !1, n = new Gt(n));
  e:
    for (; ++i < a; ) {
      var u = e[i], c = t == null ? u : t(u);
      if (u = r || u !== 0 ? u : 0, o && c === c) {
        for (var d = f; d--; )
          if (n[d] === c)
            continue e;
        l.push(u);
      } else
        s(n, c, r) || l.push(u);
    }
  return l;
}
var vb = le(function(e, n) {
  return qe(e) ? xr(e, Qe(n, 1, qe, !0)) : [];
});
const bb = vb;
function Rn(e) {
  var n = e == null ? 0 : e.length;
  return n ? e[n - 1] : void 0;
}
var wb = le(function(e, n) {
  var t = Rn(n);
  return qe(t) && (t = void 0), qe(e) ? xr(e, Qe(n, 1, qe, !0), te(t)) : [];
});
const $b = wb;
var Ab = le(function(e, n) {
  var t = Rn(n);
  return qe(t) && (t = void 0), qe(e) ? xr(e, Qe(n, 1, qe, !0), void 0, t) : [];
});
const Ob = Ab;
var Rb = Di(function(e, n) {
  return e / n;
}, 1);
const Eb = Rb;
function Tb(e, n, t) {
  var r = e == null ? 0 : e.length;
  return r ? (n = t || n === void 0 ? 1 : oe(n), jn(e, n < 0 ? 0 : n, r)) : [];
}
function kb(e, n, t) {
  var r = e == null ? 0 : e.length;
  return r ? (n = t || n === void 0 ? 1 : oe(n), n = r - n, jn(e, 0, n < 0 ? 0 : n)) : [];
}
function Qi(e, n, t, r) {
  for (var i = e.length, s = r ? i : -1; (r ? s-- : ++s < i) && n(e[s], s, e); )
    ;
  return t ? jn(e, r ? 0 : s, r ? s + 1 : i) : jn(e, r ? s + 1 : 0, r ? i : s);
}
function Sb(e, n) {
  return e && e.length ? Qi(e, te(n), !0, !0) : [];
}
function Pb(e, n) {
  return e && e.length ? Qi(e, te(n), !0) : [];
}
function Vn(e) {
  return typeof e == "function" ? e : ln;
}
function Al(e, n) {
  var t = re(e) ? Cn : Et;
  return t(e, Vn(n));
}
function Ib(e, n) {
  for (var t = e == null ? 0 : e.length; t-- && n(e[t], t, e) !== !1; )
    ;
  return e;
}
var jb = Sc(!0);
const Fc = jb;
function Wo(e, n) {
  return e && Fc(e, n, He);
}
var Cb = Pc(Wo, !0);
const Wc = Cb;
function Ol(e, n) {
  var t = re(e) ? Ib : Wc;
  return t(e, Vn(n));
}
function Mb(e, n, t) {
  e = _e(e), n = $n(n);
  var r = e.length;
  t = t === void 0 ? r : Jt(oe(t), 0, r);
  var i = t;
  return t -= n.length, t >= 0 && e.slice(t, i) == n;
}
function Lb(e, n) {
  return Pe(n, function(t) {
    return [t, e[t]];
  });
}
function Nb(e) {
  var n = -1, t = Array(e.size);
  return e.forEach(function(r) {
    t[++n] = [r, r];
  }), t;
}
var Fb = "[object Map]", Wb = "[object Set]";
function Dc(e) {
  return function(n) {
    var t = Yn(n);
    return t == Fb ? So(n) : t == Wb ? Nb(n) : Lb(n, e(n));
  };
}
var Db = Dc(He);
const Rl = Db;
var Ub = Dc(gn);
const El = Ub;
var Bb = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, qb = $o(Bb);
const Gb = qb;
var Uc = /[&<>"']/g, zb = RegExp(Uc.source);
function Bc(e) {
  return e = _e(e), e && zb.test(e) ? e.replace(Uc, Gb) : e;
}
var qc = /[\\^$.*+?()[\]{}|]/g, Hb = RegExp(qc.source);
function Kb(e) {
  return e = _e(e), e && Hb.test(e) ? e.replace(qc, "\\$&") : e;
}
function Gc(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length; ++t < r; )
    if (!n(e[t], t, e))
      return !1;
  return !0;
}
function Yb(e, n) {
  var t = !0;
  return Et(e, function(r, i, s) {
    return t = !!n(r, i, s), t;
  }), t;
}
function Jb(e, n, t) {
  var r = re(e) ? Gc : Yb;
  return t && on(e, n, t) && (n = void 0), r(e, te(n));
}
var Xb = 4294967295;
function zc(e) {
  return e ? Jt(oe(e), 0, Xb) : 0;
}
function Zb(e, n, t, r) {
  var i = e.length;
  for (t = oe(t), t < 0 && (t = -t > i ? 0 : i + t), r = r === void 0 || r > i ? i : oe(r), r < 0 && (r += i), r = t > r ? 0 : zc(r); t < r; )
    e[t++] = n;
  return e;
}
function Vb(e, n, t, r) {
  var i = e == null ? 0 : e.length;
  return i ? (t && typeof t != "number" && on(e, n, t) && (t = 0, r = i), Zb(e, n, t, r)) : [];
}
function Hc(e, n) {
  var t = [];
  return Et(e, function(r, i, s) {
    n(r, i, s) && t.push(r);
  }), t;
}
function Qb(e, n) {
  var t = re(e) ? Rt : Hc;
  return t(e, te(n));
}
function Kc(e) {
  return function(n, t, r) {
    var i = Object(n);
    if (!mn(n)) {
      var s = te(t);
      n = He(n), t = function(a) {
        return s(i[a], a, i);
      };
    }
    var o = e(n, t, r);
    return o > -1 ? i[s ? n[o] : o] : void 0;
  };
}
var xb = Math.max;
function Yc(e, n, t) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var i = t == null ? 0 : oe(t);
  return i < 0 && (i = xb(r + i, 0)), Bi(e, te(n), i);
}
var ew = Kc(Yc);
const nw = ew;
function Jc(e, n, t) {
  var r;
  return t(e, function(i, s, o) {
    if (n(i, s, o))
      return r = s, !1;
  }), r;
}
function tw(e, n) {
  return Jc(e, te(n), Zn);
}
var rw = Math.max, iw = Math.min;
function Xc(e, n, t) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var i = r - 1;
  return t !== void 0 && (i = oe(t), i = t < 0 ? rw(r + i, 0) : iw(i, r - 1)), Bi(e, te(n), i, !0);
}
var sw = Kc(Xc);
const ow = sw;
function aw(e, n) {
  return Jc(e, te(n), Wo);
}
function Tl(e) {
  return e && e.length ? e[0] : void 0;
}
function Zc(e, n) {
  var t = -1, r = mn(e) ? Array(e.length) : [];
  return Et(e, function(i, s, o) {
    r[++t] = n(i, s, o);
  }), r;
}
function xi(e, n) {
  var t = re(e) ? Pe : Zc;
  return t(e, te(n));
}
function lw(e, n) {
  return Qe(xi(e, n), 1);
}
var fw = 1 / 0;
function uw(e, n) {
  return Qe(xi(e, n), fw);
}
function cw(e, n, t) {
  return t = t === void 0 ? 1 : oe(t), Qe(xi(e, n), t);
}
var dw = 1 / 0;
function pw(e) {
  var n = e == null ? 0 : e.length;
  return n ? Qe(e, dw) : [];
}
function hw(e, n) {
  var t = e == null ? 0 : e.length;
  return t ? (n = n === void 0 ? 1 : oe(n), Qe(e, n)) : [];
}
var mw = 512;
function gw(e) {
  return ot(e, mw);
}
var _w = Ao("floor");
const yw = _w;
var vw = "Expected a function", bw = 8, ww = 32, $w = 128, Aw = 256;
function Vc(e) {
  return ut(function(n) {
    var t = n.length, r = t, i = Pn.prototype.thru;
    for (e && n.reverse(); r--; ) {
      var s = n[r];
      if (typeof s != "function")
        throw new TypeError(vw);
      if (i && !o && Ai(s) == "wrapper")
        var o = new Pn([], !0);
    }
    for (r = o ? r : t; ++r < t; ) {
      s = n[r];
      var a = Ai(s), l = a == "wrapper" ? lo(s) : void 0;
      l && Ws(l[0]) && l[1] == ($w | bw | ww | Aw) && !l[4].length && l[9] == 1 ? o = o[Ai(l[0])].apply(o, l[3]) : o = s.length == 1 && Ws(s) ? o[a]() : o.thru(s);
    }
    return function() {
      var f = arguments, u = f[0];
      if (o && f.length == 1 && re(u))
        return o.plant(u).value();
      for (var c = 0, d = t ? n[c].apply(this, f) : u; ++c < t; )
        d = n[c].call(this, d);
      return d;
    };
  });
}
var Ow = Vc();
const Rw = Ow;
var Ew = Vc(!0);
const Tw = Ew;
function kw(e, n) {
  return e == null ? e : Mo(e, Vn(n), gn);
}
function Sw(e, n) {
  return e == null ? e : Fc(e, Vn(n), gn);
}
function Pw(e, n) {
  return e && Zn(e, Vn(n));
}
function Iw(e, n) {
  return e && Wo(e, Vn(n));
}
function jw(e) {
  for (var n = -1, t = e == null ? 0 : e.length, r = {}; ++n < t; ) {
    var i = e[n];
    r[i[0]] = i[1];
  }
  return r;
}
function es(e, n) {
  return Rt(n, function(t) {
    return it(e[t]);
  });
}
function Cw(e) {
  return e == null ? [] : es(e, He(e));
}
function Mw(e) {
  return e == null ? [] : es(e, gn(e));
}
var Lw = Object.prototype, Nw = Lw.hasOwnProperty, Fw = Zi(function(e, n, t) {
  Nw.call(e, t) ? e[t].push(n) : at(e, t, [n]);
});
const Ww = Fw;
function Do(e, n) {
  return e > n;
}
function ns(e) {
  return function(n, t) {
    return typeof n == "string" && typeof t == "string" || (n = kn(n), t = kn(t)), e(n, t);
  };
}
var Dw = ns(Do);
const Uw = Dw;
var Bw = ns(function(e, n) {
  return e >= n;
});
const qw = Bw;
var Gw = Object.prototype, zw = Gw.hasOwnProperty;
function Hw(e, n) {
  return e != null && zw.call(e, n);
}
function Kw(e, n) {
  return e != null && Rc(e, n, Hw);
}
var Yw = Math.max, Jw = Math.min;
function Xw(e, n, t) {
  return e >= Jw(n, t) && e < Yw(n, t);
}
function Zw(e, n, t) {
  return n = rt(n), t === void 0 ? (t = n, n = 0) : t = rt(t), e = kn(e), Xw(e, n, t);
}
var Vw = "[object String]";
function ts(e) {
  return typeof e == "string" || !re(e) && Ne(e) && an(e) == Vw;
}
function Uo(e, n) {
  return Pe(n, function(t) {
    return e[t];
  });
}
function Er(e) {
  return e == null ? [] : Uo(e, He(e));
}
var Qw = Math.max;
function xw(e, n, t, r) {
  e = mn(e) ? e : Er(e), t = t && !r ? oe(t) : 0;
  var i = e.length;
  return t < 0 && (t = Qw(i + t, 0)), ts(e) ? t <= i && e.indexOf(n, t) > -1 : !!i && br(e, n, t) > -1;
}
var e2 = Math.max;
function n2(e, n, t) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var i = t == null ? 0 : oe(t);
  return i < 0 && (i = e2(r + i, 0)), br(e, n, i);
}
function t2(e) {
  var n = e == null ? 0 : e.length;
  return n ? jn(e, 0, -1) : [];
}
var r2 = Math.min;
function Bo(e, n, t) {
  for (var r = t ? Fo : qi, i = e[0].length, s = e.length, o = s, a = Array(s), l = 1 / 0, f = []; o--; ) {
    var u = e[o];
    o && n && (u = Pe(u, On(n))), l = r2(u.length, l), a[o] = !t && (n || i >= 120 && u.length >= 120) ? new Gt(o && u) : void 0;
  }
  u = e[0];
  var c = -1, d = a[0];
  e:
    for (; ++c < i && f.length < l; ) {
      var m = u[c], h = n ? n(m) : m;
      if (m = t || m !== 0 ? m : 0, !(d ? Gr(d, h) : r(f, h, t))) {
        for (o = s; --o; ) {
          var g = a[o];
          if (!(g ? Gr(g, h) : r(e[o], h, t)))
            continue e;
        }
        d && d.push(h), f.push(m);
      }
    }
  return f;
}
function qo(e) {
  return qe(e) ? e : [];
}
var i2 = le(function(e) {
  var n = Pe(e, qo);
  return n.length && n[0] === e[0] ? Bo(n) : [];
});
const s2 = i2;
var o2 = le(function(e) {
  var n = Rn(e), t = Pe(e, qo);
  return n === Rn(t) ? n = void 0 : t.pop(), t.length && t[0] === e[0] ? Bo(t, te(n)) : [];
});
const a2 = o2;
var l2 = le(function(e) {
  var n = Rn(e), t = Pe(e, qo);
  return n = typeof n == "function" ? n : void 0, n && t.pop(), t.length && t[0] === e[0] ? Bo(t, void 0, n) : [];
});
const f2 = l2;
function u2(e, n, t, r) {
  return Zn(e, function(i, s, o) {
    n(r, t(i), s, o);
  }), r;
}
function Qc(e, n) {
  return function(t, r) {
    return u2(t, e, n(r), {});
  };
}
var c2 = Object.prototype, d2 = c2.toString, p2 = Qc(function(e, n, t) {
  n != null && typeof n.toString != "function" && (n = d2.call(n)), e[n] = t;
}, fo(ln));
const h2 = p2;
var xc = Object.prototype, m2 = xc.hasOwnProperty, g2 = xc.toString, _2 = Qc(function(e, n, t) {
  n != null && typeof n.toString != "function" && (n = g2.call(n)), m2.call(e, n) ? e[n].push(t) : e[n] = [t];
}, te);
const y2 = _2;
function ed(e, n) {
  return n.length < 2 ? e : Yt(e, jn(n, 0, -1));
}
function ei(e, n, t) {
  n = $t(n, e), e = ed(e, n);
  var r = e == null ? e : e[Xn(Rn(n))];
  return r == null ? void 0 : An(r, e, t);
}
var v2 = le(ei);
const b2 = v2;
var w2 = le(function(e, n, t) {
  var r = -1, i = typeof n == "function", s = mn(e) ? Array(e.length) : [];
  return Et(e, function(o) {
    s[++r] = i ? An(n, o, t) : ei(o, n, t);
  }), s;
});
const $2 = w2;
var A2 = "[object ArrayBuffer]";
function O2(e) {
  return Ne(e) && an(e) == A2;
}
var kl = In && In.isArrayBuffer, R2 = kl ? On(kl) : O2;
const E2 = R2;
var T2 = "[object Boolean]";
function k2(e) {
  return e === !0 || e === !1 || Ne(e) && an(e) == T2;
}
var S2 = "[object Date]";
function P2(e) {
  return Ne(e) && an(e) == S2;
}
var Sl = In && In.isDate, I2 = Sl ? On(Sl) : P2;
const j2 = I2;
function C2(e) {
  return Ne(e) && e.nodeType === 1 && !Vr(e);
}
var M2 = "[object Map]", L2 = "[object Set]", N2 = Object.prototype, F2 = N2.hasOwnProperty;
function W2(e) {
  if (e == null)
    return !0;
  if (mn(e) && (re(e) || typeof e == "string" || typeof e.splice == "function" || bt(e) || Ar(e) || Bt(e)))
    return !e.length;
  var n = Yn(e);
  if (n == M2 || n == L2)
    return !e.size;
  if (Zr(e))
    return !ho(e).length;
  for (var t in e)
    if (F2.call(e, t))
      return !1;
  return !0;
}
function D2(e, n) {
  return Qr(e, n);
}
function U2(e, n, t) {
  t = typeof t == "function" ? t : void 0;
  var r = t ? t(e, n) : void 0;
  return r === void 0 ? Qr(e, n, void 0, t) : !!r;
}
var B2 = Je.isFinite;
function q2(e) {
  return typeof e == "number" && B2(e);
}
function nd(e) {
  return typeof e == "number" && e == oe(e);
}
function G2(e, n) {
  return e === n || Po(e, n, Io(n));
}
function z2(e, n, t) {
  return t = typeof t == "function" ? t : void 0, Po(e, n, Io(n), t);
}
var H2 = "[object Number]";
function td(e) {
  return typeof e == "number" || Ne(e) && an(e) == H2;
}
function K2(e) {
  return td(e) && e != +e;
}
var Y2 = $i ? it : po;
const J2 = Y2;
var X2 = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.";
function Z2(e) {
  if (J2(e))
    throw new Error(X2);
  return gu(e);
}
function V2(e) {
  return e == null;
}
function Q2(e) {
  return e === null;
}
var x2 = "[object RegExp]";
function e$(e) {
  return Ne(e) && an(e) == x2;
}
var Pl = In && In.isRegExp, n$ = Pl ? On(Pl) : e$;
const Go = n$;
var Il = 9007199254740991;
function t$(e) {
  return nd(e) && e >= -Il && e <= Il;
}
function r$(e) {
  return e === void 0;
}
var i$ = "[object WeakMap]";
function s$(e) {
  return Ne(e) && Yn(e) == i$;
}
var o$ = "[object WeakSet]";
function a$(e) {
  return Ne(e) && an(e) == o$;
}
var l$ = 1;
function f$(e) {
  return te(typeof e == "function" ? e : Sn(e, l$));
}
var u$ = Array.prototype, c$ = u$.join;
function d$(e, n) {
  return e == null ? "" : c$.call(e, n);
}
var p$ = Rr(function(e, n, t) {
  return e + (t ? "-" : "") + n.toLowerCase();
});
const h$ = p$;
var m$ = Zi(function(e, n, t) {
  at(e, t, n);
});
const g$ = m$;
function _$(e, n, t) {
  for (var r = t + 1; r--; )
    if (e[r] === n)
      return r;
  return r;
}
var y$ = Math.max, v$ = Math.min;
function b$(e, n, t) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var i = r;
  return t !== void 0 && (i = oe(t), i = i < 0 ? y$(r + i, 0) : v$(i, r - 1)), n === n ? _$(e, n, i) : Bi(e, Au, i, !0);
}
var w$ = Rr(function(e, n, t) {
  return e + (t ? " " : "") + n.toLowerCase();
});
const $$ = w$;
var A$ = Hu("toLowerCase");
const O$ = A$;
function zo(e, n) {
  return e < n;
}
var R$ = ns(zo);
const E$ = R$;
var T$ = ns(function(e, n) {
  return e <= n;
});
const k$ = T$;
function S$(e, n) {
  var t = {};
  return n = te(n), Zn(e, function(r, i, s) {
    at(t, n(r, i, s), r);
  }), t;
}
function P$(e, n) {
  var t = {};
  return n = te(n), Zn(e, function(r, i, s) {
    at(t, i, n(r, i, s));
  }), t;
}
var I$ = 1;
function j$(e) {
  return Oc(Sn(e, I$));
}
var C$ = 1;
function M$(e, n) {
  return Ec(e, Sn(n, C$));
}
function rs(e, n, t) {
  for (var r = -1, i = e.length; ++r < i; ) {
    var s = e[r], o = n(s);
    if (o != null && (a === void 0 ? o === o && !wn(o) : t(o, a)))
      var a = o, l = s;
  }
  return l;
}
function L$(e) {
  return e && e.length ? rs(e, ln, Do) : void 0;
}
function N$(e, n) {
  return e && e.length ? rs(e, te(n), Do) : void 0;
}
function Ho(e, n) {
  for (var t, r = -1, i = e.length; ++r < i; ) {
    var s = n(e[r]);
    s !== void 0 && (t = t === void 0 ? s : t + s);
  }
  return t;
}
var F$ = 0 / 0;
function rd(e, n) {
  var t = e == null ? 0 : e.length;
  return t ? Ho(e, n) / t : F$;
}
function W$(e) {
  return rd(e, ln);
}
function D$(e, n) {
  return rd(e, te(n));
}
var U$ = $r(function(e, n, t) {
  Vi(e, n, t);
});
const B$ = U$;
var q$ = le(function(e, n) {
  return function(t) {
    return ei(t, e, n);
  };
});
const G$ = q$;
var z$ = le(function(e, n) {
  return function(t) {
    return ei(e, t, n);
  };
});
const H$ = z$;
function K$(e) {
  return e && e.length ? rs(e, ln, zo) : void 0;
}
function Y$(e, n) {
  return e && e.length ? rs(e, te(n), zo) : void 0;
}
function id(e, n, t) {
  var r = He(n), i = es(n, r), s = !(Ie(t) && "chain" in t) || !!t.chain, o = it(e);
  return Cn(i, function(a) {
    var l = n[a];
    e[a] = l, o && (e.prototype[a] = function() {
      var f = this.__chain__;
      if (s || f) {
        var u = e(this.__wrapped__), c = u.__actions__ = pn(this.__actions__);
        return c.push({ func: l, args: arguments, thisArg: e }), u.__chain__ = f, u;
      }
      return l.apply(e, At([this.value()], arguments));
    });
  }), e;
}
var J$ = Di(function(e, n) {
  return e * n;
}, 1);
const X$ = J$;
var Z$ = "Expected a function";
function ni(e) {
  if (typeof e != "function")
    throw new TypeError(Z$);
  return function() {
    var n = arguments;
    switch (n.length) {
      case 0:
        return !e.call(this);
      case 1:
        return !e.call(this, n[0]);
      case 2:
        return !e.call(this, n[0], n[1]);
      case 3:
        return !e.call(this, n[0], n[1], n[2]);
    }
    return !e.apply(this, n);
  };
}
function V$(e) {
  for (var n, t = []; !(n = e.next()).done; )
    t.push(n.value);
  return t;
}
var Q$ = "[object Map]", x$ = "[object Set]", Es = en ? en.iterator : void 0;
function sd(e) {
  if (!e)
    return [];
  if (mn(e))
    return ts(e) ? Dn(e) : pn(e);
  if (Es && e[Es])
    return V$(e[Es]());
  var n = Yn(e), t = n == Q$ ? So : n == x$ ? Xi : Er;
  return t(e);
}
function eA() {
  this.__values__ === void 0 && (this.__values__ = sd(this.value()));
  var e = this.__index__ >= this.__values__.length, n = e ? void 0 : this.__values__[this.__index__++];
  return { done: e, value: n };
}
function od(e, n) {
  var t = e.length;
  if (t)
    return n += n < 0 ? t : 0, st(n, t) ? e[n] : void 0;
}
function nA(e, n) {
  return e && e.length ? od(e, oe(n)) : void 0;
}
function tA(e) {
  return e = oe(e), le(function(n) {
    return od(n, e);
  });
}
function Ko(e, n) {
  return n = $t(n, e), e = ed(e, n), e == null || delete e[Xn(Rn(n))];
}
function rA(e) {
  return Vr(e) ? void 0 : e;
}
var iA = 1, sA = 2, oA = 4, aA = ut(function(e, n) {
  var t = {};
  if (e == null)
    return t;
  var r = !1;
  n = Pe(n, function(s) {
    return s = $t(s, e), r || (r = s.length > 1), s;
  }), Jn(e, Eo(e), t), r && (t = Sn(t, iA | sA | oA, rA));
  for (var i = n.length; i--; )
    Ko(t, n[i]);
  return t;
});
const lA = aA;
function ti(e, n, t, r) {
  if (!Ie(e))
    return e;
  n = $t(n, e);
  for (var i = -1, s = n.length, o = s - 1, a = e; a != null && ++i < s; ) {
    var l = Xn(n[i]), f = t;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != o) {
      var u = a[l];
      f = r ? r(u, l, a) : void 0, f === void 0 && (f = Ie(u) ? u : st(n[i + 1]) ? [] : {});
    }
    Xr(a, l, f), a = a[l];
  }
  return e;
}
function ad(e, n, t) {
  for (var r = -1, i = n.length, s = {}; ++r < i; ) {
    var o = n[r], a = Yt(e, o);
    t(a, o) && ti(s, $t(o, e), a);
  }
  return s;
}
function ld(e, n) {
  if (e == null)
    return {};
  var t = Pe(Eo(e), function(r) {
    return [r];
  });
  return n = te(n), ad(e, t, function(r, i) {
    return n(r, i[0]);
  });
}
function fA(e, n) {
  return ld(e, ni(te(n)));
}
function uA(e) {
  return Fu(2, e);
}
function cA(e, n) {
  var t = e.length;
  for (e.sort(n); t--; )
    e[t] = e[t].value;
  return e;
}
function fd(e, n) {
  if (e !== n) {
    var t = e !== void 0, r = e === null, i = e === e, s = wn(e), o = n !== void 0, a = n === null, l = n === n, f = wn(n);
    if (!a && !f && !s && e > n || s && o && l && !a && !f || r && o && l || !t && l || !i)
      return 1;
    if (!r && !s && !f && e < n || f && t && i && !r && !s || a && t && i || !o && i || !l)
      return -1;
  }
  return 0;
}
function dA(e, n, t) {
  for (var r = -1, i = e.criteria, s = n.criteria, o = i.length, a = t.length; ++r < o; ) {
    var l = fd(i[r], s[r]);
    if (l) {
      if (r >= a)
        return l;
      var f = t[r];
      return l * (f == "desc" ? -1 : 1);
    }
  }
  return e.index - n.index;
}
function ud(e, n, t) {
  n.length ? n = Pe(n, function(s) {
    return re(s) ? function(o) {
      return Yt(o, s.length === 1 ? s[0] : s);
    } : s;
  }) : n = [ln];
  var r = -1;
  n = Pe(n, On(te));
  var i = Zc(e, function(s, o, a) {
    var l = Pe(n, function(f) {
      return f(s);
    });
    return { criteria: l, index: ++r, value: s };
  });
  return cA(i, function(s, o) {
    return dA(s, o, t);
  });
}
function pA(e, n, t, r) {
  return e == null ? [] : (re(n) || (n = n == null ? [] : [n]), t = r ? void 0 : t, re(t) || (t = t == null ? [] : [t]), ud(e, n, t));
}
function Yo(e) {
  return ut(function(n) {
    return n = Pe(n, On(te)), le(function(t) {
      var r = this;
      return e(n, function(i) {
        return An(i, r, t);
      });
    });
  });
}
var hA = Yo(Pe);
const mA = hA;
var gA = le;
const _A = gA;
var yA = Math.min, vA = _A(function(e, n) {
  n = n.length == 1 && re(n[0]) ? Pe(n[0], On(te)) : Pe(Qe(n, 1), On(te));
  var t = n.length;
  return le(function(r) {
    for (var i = -1, s = yA(r.length, t); ++i < s; )
      r[i] = n[i].call(this, r[i]);
    return An(e, this, r);
  });
});
const bA = vA;
var wA = Yo(Gc);
const $A = wA;
var AA = Yo(ko);
const OA = AA;
var RA = 9007199254740991, EA = Math.floor;
function Ks(e, n) {
  var t = "";
  if (!e || n < 1 || n > RA)
    return t;
  do
    n % 2 && (t += e), n = EA(n / 2), n && (e += e);
  while (n);
  return t;
}
var TA = Co("length");
const kA = TA;
var cd = "\\ud800-\\udfff", SA = "\\u0300-\\u036f", PA = "\\ufe20-\\ufe2f", IA = "\\u20d0-\\u20ff", jA = SA + PA + IA, CA = "\\ufe0e\\ufe0f", MA = "[" + cd + "]", Ys = "[" + jA + "]", Js = "\\ud83c[\\udffb-\\udfff]", LA = "(?:" + Ys + "|" + Js + ")", dd = "[^" + cd + "]", pd = "(?:\\ud83c[\\udde6-\\uddff]){2}", hd = "[\\ud800-\\udbff][\\udc00-\\udfff]", NA = "\\u200d", md = LA + "?", gd = "[" + CA + "]?", FA = "(?:" + NA + "(?:" + [dd, pd, hd].join("|") + ")" + gd + md + ")*", WA = gd + md + FA, DA = "(?:" + [dd + Ys + "?", Ys, pd, hd, MA].join("|") + ")", jl = RegExp(Js + "(?=" + Js + ")|" + DA + WA, "g");
function UA(e) {
  for (var n = jl.lastIndex = 0; jl.test(e); )
    ++n;
  return n;
}
function Tr(e) {
  return Or(e) ? UA(e) : kA(e);
}
var BA = Math.ceil;
function Ii(e, n) {
  n = n === void 0 ? " " : $n(n);
  var t = n.length;
  if (t < 2)
    return t ? Ks(n, e) : n;
  var r = Ks(n, BA(e / Tr(n)));
  return Or(n) ? Ot(Dn(r), 0, e).join("") : r.slice(0, e);
}
var qA = Math.ceil, GA = Math.floor;
function zA(e, n, t) {
  e = _e(e), n = oe(n);
  var r = n ? Tr(e) : 0;
  if (!n || r >= n)
    return e;
  var i = (n - r) / 2;
  return Ii(GA(i), t) + e + Ii(qA(i), t);
}
function HA(e, n, t) {
  e = _e(e), n = oe(n);
  var r = n ? Tr(e) : 0;
  return n && r < n ? e + Ii(n - r, t) : e;
}
function KA(e, n, t) {
  e = _e(e), n = oe(n);
  var r = n ? Tr(e) : 0;
  return n && r < n ? Ii(n - r, t) + e : e;
}
var YA = /^\s+/, JA = Je.parseInt;
function XA(e, n, t) {
  return t || n == null ? n = 0 : n && (n = +n), JA(_e(e).replace(YA, ""), n || 0);
}
var ZA = 32, Jo = le(function(e, n) {
  var t = vt(n, wr(Jo));
  return ot(e, ZA, void 0, n, t);
});
Jo.placeholder = {};
const _d = Jo;
var VA = 64, Xo = le(function(e, n) {
  var t = vt(n, wr(Xo));
  return ot(e, VA, void 0, n, t);
});
Xo.placeholder = {};
const QA = Xo;
var xA = Zi(function(e, n, t) {
  e[t ? 0 : 1].push(n);
}, function() {
  return [[], []];
});
const eO = xA;
function nO(e, n) {
  return ad(e, n, function(t, r) {
    return jo(e, r);
  });
}
var tO = ut(function(e, n) {
  return e == null ? {} : nO(e, n);
});
const rO = tO;
function iO(e) {
  for (var n, t = this; t instanceof Ui; ) {
    var r = bu(t);
    r.__index__ = 0, r.__values__ = void 0, n ? i.__wrapped__ = r : n = r;
    var i = r;
    t = t.__wrapped__;
  }
  return i.__wrapped__ = e, n;
}
function sO(e) {
  return function(n) {
    return e == null ? void 0 : Yt(e, n);
  };
}
function oO(e, n, t, r) {
  for (var i = t - 1, s = e.length; ++i < s; )
    if (r(e[i], n))
      return i;
  return -1;
}
var aO = Array.prototype, Cl = aO.splice;
function Zo(e, n, t, r) {
  var i = r ? oO : br, s = -1, o = n.length, a = e;
  for (e === n && (n = pn(n)), t && (a = Pe(e, On(t))); ++s < o; )
    for (var l = 0, f = n[s], u = t ? t(f) : f; (l = i(a, u, l, r)) > -1; )
      a !== e && Cl.call(a, l, 1), Cl.call(e, l, 1);
  return e;
}
function yd(e, n) {
  return e && e.length && n && n.length ? Zo(e, n) : e;
}
var lO = le(yd);
const fO = lO;
function uO(e, n, t) {
  return e && e.length && n && n.length ? Zo(e, n, te(t)) : e;
}
function cO(e, n, t) {
  return e && e.length && n && n.length ? Zo(e, n, void 0, t) : e;
}
var dO = Array.prototype, pO = dO.splice;
function vd(e, n) {
  for (var t = e ? n.length : 0, r = t - 1; t--; ) {
    var i = n[t];
    if (t == r || i !== s) {
      var s = i;
      st(i) ? pO.call(e, i, 1) : Ko(e, i);
    }
  }
  return e;
}
var hO = ut(function(e, n) {
  var t = e == null ? 0 : e.length, r = go(e, n);
  return vd(e, Pe(n, function(i) {
    return st(i, t) ? +i : i;
  }).sort(fd)), r;
});
const mO = hO;
var gO = Math.floor, _O = Math.random;
function Vo(e, n) {
  return e + gO(_O() * (n - e + 1));
}
var yO = parseFloat, vO = Math.min, bO = Math.random;
function wO(e, n, t) {
  if (t && typeof t != "boolean" && on(e, n, t) && (n = t = void 0), t === void 0 && (typeof n == "boolean" ? (t = n, n = void 0) : typeof e == "boolean" && (t = e, e = void 0)), e === void 0 && n === void 0 ? (e = 0, n = 1) : (e = rt(e), n === void 0 ? (n = e, e = 0) : n = rt(n)), e > n) {
    var r = e;
    e = n, n = r;
  }
  if (t || e % 1 || n % 1) {
    var i = bO();
    return vO(e + i * (n - e + yO("1e-" + ((i + "").length - 1))), n);
  }
  return Vo(e, n);
}
var $O = Math.ceil, AO = Math.max;
function OO(e, n, t, r) {
  for (var i = -1, s = AO($O((n - e) / (t || 1)), 0), o = Array(s); s--; )
    o[r ? s : ++i] = e, e += t;
  return o;
}
function bd(e) {
  return function(n, t, r) {
    return r && typeof r != "number" && on(n, t, r) && (t = r = void 0), n = rt(n), t === void 0 ? (t = n, n = 0) : t = rt(t), r = r === void 0 ? n < t ? 1 : -1 : rt(r), OO(n, t, r, e);
  };
}
var RO = bd();
const EO = RO;
var TO = bd(!0);
const kO = TO;
var SO = 256, PO = ut(function(e, n) {
  return ot(e, SO, void 0, void 0, void 0, n);
});
const IO = PO;
function wd(e, n, t, r, i) {
  return i(e, function(s, o, a) {
    t = r ? (r = !1, s) : n(t, s, o, a);
  }), t;
}
function jO(e, n, t) {
  var r = re(e) ? wo : wd, i = arguments.length < 3;
  return r(e, te(n), t, i, Et);
}
function CO(e, n, t, r) {
  var i = e == null ? 0 : e.length;
  for (r && i && (t = e[--i]); i--; )
    t = n(t, e[i], i, e);
  return t;
}
function MO(e, n, t) {
  var r = re(e) ? CO : wd, i = arguments.length < 3;
  return r(e, te(n), t, i, Wc);
}
function LO(e, n) {
  var t = re(e) ? Rt : Hc;
  return t(e, ni(te(n)));
}
function NO(e, n) {
  var t = [];
  if (!(e && e.length))
    return t;
  var r = -1, i = [], s = e.length;
  for (n = te(n); ++r < s; ) {
    var o = e[r];
    n(o, r, e) && (t.push(o), i.push(r));
  }
  return vd(e, i), t;
}
function FO(e, n, t) {
  return (t ? on(e, n, t) : n === void 0) ? n = 1 : n = oe(n), Ks(_e(e), n);
}
function WO() {
  var e = arguments, n = _e(e[0]);
  return e.length < 3 ? n : n.replace(e[1], e[2]);
}
var DO = "Expected a function";
function UO(e, n) {
  if (typeof e != "function")
    throw new TypeError(DO);
  return n = n === void 0 ? n : oe(n), le(e, n);
}
function BO(e, n, t) {
  n = $t(n, e);
  var r = -1, i = n.length;
  for (i || (i = 1, e = void 0); ++r < i; ) {
    var s = e == null ? void 0 : e[Xn(n[r])];
    s === void 0 && (r = i, s = t), e = it(s) ? s.call(e) : s;
  }
  return e;
}
var qO = Array.prototype, GO = qO.reverse;
function Xs(e) {
  return e == null ? e : GO.call(e);
}
var zO = Ao("round");
const HO = zO;
function $d(e) {
  var n = e.length;
  return n ? e[Vo(0, n - 1)] : void 0;
}
function KO(e) {
  return $d(Er(e));
}
function YO(e) {
  var n = re(e) ? $d : KO;
  return n(e);
}
function is(e, n) {
  var t = -1, r = e.length, i = r - 1;
  for (n = n === void 0 ? r : n; ++t < n; ) {
    var s = Vo(t, i), o = e[s];
    e[s] = e[t], e[t] = o;
  }
  return e.length = n, e;
}
function JO(e, n) {
  return is(pn(e), Jt(n, 0, e.length));
}
function XO(e, n) {
  var t = Er(e);
  return is(t, Jt(n, 0, t.length));
}
function ZO(e, n, t) {
  (t ? on(e, n, t) : n === void 0) ? n = 1 : n = oe(n);
  var r = re(e) ? JO : XO;
  return r(e, n);
}
function Qo(e, n, t) {
  return e == null ? e : ti(e, n, t);
}
function VO(e, n, t, r) {
  return r = typeof r == "function" ? r : void 0, e == null ? e : ti(e, n, t, r);
}
function QO(e) {
  return is(pn(e));
}
function xO(e) {
  return is(Er(e));
}
function eR(e) {
  var n = re(e) ? QO : xO;
  return n(e);
}
var nR = "[object Map]", tR = "[object Set]";
function rR(e) {
  if (e == null)
    return 0;
  if (mn(e))
    return ts(e) ? Tr(e) : e.length;
  var n = Yn(e);
  return n == nR || n == tR ? e.size : ho(e).length;
}
function iR(e, n, t) {
  var r = e == null ? 0 : e.length;
  return r ? (t && typeof t != "number" && on(e, n, t) ? (n = 0, t = r) : (n = n == null ? 0 : oe(n), t = t === void 0 ? r : oe(t)), jn(e, n, t)) : [];
}
var sR = Rr(function(e, n, t) {
  return e + (t ? "_" : "") + n.toLowerCase();
});
const oR = sR;
function aR(e, n) {
  var t;
  return Et(e, function(r, i, s) {
    return t = n(r, i, s), !t;
  }), !!t;
}
function lR(e, n, t) {
  var r = re(e) ? ko : aR;
  return t && on(e, n, t) && (n = void 0), r(e, te(n));
}
var fR = le(function(e, n) {
  if (e == null)
    return [];
  var t = n.length;
  return t > 1 && on(e, n[0], n[1]) ? n = [] : t > 2 && on(n[0], n[1], n[2]) && (n = [n[0]]), ud(e, Qe(n, 1), []);
});
const uR = fR;
var cR = 4294967295, dR = cR - 1, pR = Math.floor, hR = Math.min;
function xo(e, n, t, r) {
  var i = 0, s = e == null ? 0 : e.length;
  if (s === 0)
    return 0;
  n = t(n);
  for (var o = n !== n, a = n === null, l = wn(n), f = n === void 0; i < s; ) {
    var u = pR((i + s) / 2), c = t(e[u]), d = c !== void 0, m = c === null, h = c === c, g = wn(c);
    if (o)
      var v = r || h;
    else
      f ? v = h && (r || d) : a ? v = h && d && (r || !m) : l ? v = h && d && !m && (r || !g) : m || g ? v = !1 : v = r ? c <= n : c < n;
    v ? i = u + 1 : s = u;
  }
  return hR(s, dR);
}
var mR = 4294967295, gR = mR >>> 1;
function ss(e, n, t) {
  var r = 0, i = e == null ? r : e.length;
  if (typeof n == "number" && n === n && i <= gR) {
    for (; r < i; ) {
      var s = r + i >>> 1, o = e[s];
      o !== null && !wn(o) && (t ? o <= n : o < n) ? r = s + 1 : i = s;
    }
    return i;
  }
  return xo(e, n, ln, t);
}
function _R(e, n) {
  return ss(e, n);
}
function yR(e, n, t) {
  return xo(e, n, te(t));
}
function vR(e, n) {
  var t = e == null ? 0 : e.length;
  if (t) {
    var r = ss(e, n);
    if (r < t && Un(e[r], n))
      return r;
  }
  return -1;
}
function bR(e, n) {
  return ss(e, n, !0);
}
function wR(e, n, t) {
  return xo(e, n, te(t), !0);
}
function $R(e, n) {
  var t = e == null ? 0 : e.length;
  if (t) {
    var r = ss(e, n, !0) - 1;
    if (Un(e[r], n))
      return r;
  }
  return -1;
}
function Ad(e, n) {
  for (var t = -1, r = e.length, i = 0, s = []; ++t < r; ) {
    var o = e[t], a = n ? n(o) : o;
    if (!t || !Un(a, l)) {
      var l = a;
      s[i++] = o === 0 ? 0 : o;
    }
  }
  return s;
}
function AR(e) {
  return e && e.length ? Ad(e) : [];
}
function OR(e, n) {
  return e && e.length ? Ad(e, te(n)) : [];
}
var RR = 4294967295;
function ER(e, n, t) {
  return t && typeof t != "number" && on(e, n, t) && (n = t = void 0), t = t === void 0 ? RR : t >>> 0, t ? (e = _e(e), e && (typeof n == "string" || n != null && !Go(n)) && (n = $n(n), !n && Or(e)) ? Ot(Dn(e), 0, t) : e.split(n, t)) : [];
}
var TR = "Expected a function", kR = Math.max;
function SR(e, n) {
  if (typeof e != "function")
    throw new TypeError(TR);
  return n = n == null ? 0 : kR(oe(n), 0), le(function(t) {
    var r = t[n], i = Ot(t, 0, n);
    return r && At(i, r), An(e, this, i);
  });
}
var PR = Rr(function(e, n, t) {
  return e + (t ? " " : "") + bo(n);
});
const IR = PR;
function jR(e, n, t) {
  return e = _e(e), t = t == null ? 0 : Jt(oe(t), 0, e.length), n = $n(n), e.slice(t, t + n.length) == n;
}
function CR() {
  return {};
}
function MR() {
  return "";
}
function LR() {
  return !0;
}
var NR = Di(function(e, n) {
  return e - n;
}, 0);
const FR = NR;
function WR(e) {
  return e && e.length ? Ho(e, ln) : 0;
}
function DR(e, n) {
  return e && e.length ? Ho(e, te(n)) : 0;
}
function UR(e) {
  var n = e == null ? 0 : e.length;
  return n ? jn(e, 1, n) : [];
}
function BR(e, n, t) {
  return e && e.length ? (n = t || n === void 0 ? 1 : oe(n), jn(e, 0, n < 0 ? 0 : n)) : [];
}
function qR(e, n, t) {
  var r = e == null ? 0 : e.length;
  return r ? (n = t || n === void 0 ? 1 : oe(n), n = r - n, jn(e, n < 0 ? 0 : n, r)) : [];
}
function GR(e, n) {
  return e && e.length ? Qi(e, te(n), !1, !0) : [];
}
function zR(e, n) {
  return e && e.length ? Qi(e, te(n)) : [];
}
function HR(e, n) {
  return n(e), e;
}
var Od = Object.prototype, KR = Od.hasOwnProperty;
function Ml(e, n, t, r) {
  return e === void 0 || Un(e, Od[t]) && !KR.call(r, t) ? n : e;
}
var YR = {
  "\\": "\\",
  "'": "'",
  "\n": "n",
  "\r": "r",
  "\u2028": "u2028",
  "\u2029": "u2029"
};
function JR(e) {
  return "\\" + YR[e];
}
var XR = /<%=([\s\S]+?)%>/g;
const Rd = XR;
var ZR = /<%-([\s\S]+?)%>/g;
const VR = ZR;
var QR = /<%([\s\S]+?)%>/g;
const xR = QR;
var eE = {
  /**
   * Used to detect `data` property values to be HTML-escaped.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  escape: VR,
  /**
   * Used to detect code to be evaluated.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  evaluate: xR,
  /**
   * Used to detect `data` property values to inject.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  interpolate: Rd,
  /**
   * Used to reference the data object in the template text.
   *
   * @memberOf _.templateSettings
   * @type {string}
   */
  variable: "",
  /**
   * Used to import variables into the compiled template.
   *
   * @memberOf _.templateSettings
   * @type {Object}
   */
  imports: {
    /**
     * A reference to the `lodash` function.
     *
     * @memberOf _.templateSettings.imports
     * @type {Function}
     */
    _: { escape: Bc }
  }
};
const Zs = eE;
var nE = "Invalid `variable` option passed into `_.template`", tE = /\b__p \+= '';/g, rE = /\b(__p \+=) '' \+/g, iE = /(__e\(.*?\)|\b__t\)) \+\n'';/g, sE = /[()=,{}\[\]\/\s]/, oE = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, hi = /($^)/, aE = /['\n\r\u2028\u2029\\]/g, lE = Object.prototype, Ll = lE.hasOwnProperty;
function fE(e, n, t) {
  var r = Zs.imports._.templateSettings || Zs;
  t && on(e, n, t) && (n = void 0), e = _e(e), n = Si({}, n, r, Ml);
  var i = Si({}, n.imports, r.imports, Ml), s = He(i), o = Uo(i, s), a, l, f = 0, u = n.interpolate || hi, c = "__p += '", d = RegExp(
    (n.escape || hi).source + "|" + u.source + "|" + (u === Rd ? oE : hi).source + "|" + (n.evaluate || hi).source + "|$",
    "g"
  ), m = Ll.call(n, "sourceURL") ? "//# sourceURL=" + (n.sourceURL + "").replace(/\s/g, " ") + `
` : "";
  e.replace(d, function(v, w, A, M, W, I) {
    return A || (A = M), c += e.slice(f, I).replace(aE, JR), w && (a = !0, c += `' +
__e(` + w + `) +
'`), W && (l = !0, c += `';
` + W + `;
__p += '`), A && (c += `' +
((__t = (` + A + `)) == null ? '' : __t) +
'`), f = I + v.length, v;
  }), c += `';
`;
  var h = Ll.call(n, "variable") && n.variable;
  if (!h)
    c = `with (obj) {
` + c + `
}
`;
  else if (sE.test(h))
    throw new Error(nE);
  c = (l ? c.replace(tE, "") : c).replace(rE, "$1").replace(iE, "$1;"), c = "function(" + (h || "obj") + `) {
` + (h ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (a ? ", __e = _.escape" : "") + (l ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + c + `return __p
}`;
  var g = Nu(function() {
    return Function(s, m + "return " + c).apply(void 0, o);
  });
  if (g.source = c, _o(g))
    throw g;
  return g;
}
var uE = "Expected a function";
function cE(e, n, t) {
  var r = !0, i = !0;
  if (typeof e != "function")
    throw new TypeError(uE);
  return Ie(t) && (r = "leading" in t ? !!t.leading : r, i = "trailing" in t ? !!t.trailing : i), Ic(e, n, {
    leading: r,
    maxWait: n,
    trailing: i
  });
}
function ri(e, n) {
  return n(e);
}
var dE = 9007199254740991, Ts = 4294967295, pE = Math.min;
function hE(e, n) {
  if (e = oe(e), e < 1 || e > dE)
    return [];
  var t = Ts, r = pE(e, Ts);
  n = Vn(n), e -= Ts;
  for (var i = co(r, n); ++t < e; )
    n(t);
  return i;
}
function mE() {
  return this;
}
function Ed(e, n) {
  var t = e;
  return t instanceof ue && (t = t.value()), wo(n, function(r, i) {
    return i.func.apply(i.thisArg, At([r], i.args));
  }, t);
}
function ks() {
  return Ed(this.__wrapped__, this.__actions__);
}
function gE(e) {
  return _e(e).toLowerCase();
}
function _E(e) {
  return re(e) ? Pe(e, Xn) : wn(e) ? [e] : pn(Cu(_e(e)));
}
var Nl = 9007199254740991;
function yE(e) {
  return e ? Jt(oe(e), -Nl, Nl) : e === 0 ? e : 0;
}
function vE(e) {
  return _e(e).toUpperCase();
}
function bE(e, n, t) {
  var r = re(e), i = r || bt(e) || Ar(e);
  if (n = te(n), t == null) {
    var s = e && e.constructor;
    i ? t = r ? new s() : [] : Ie(e) ? t = it(s) ? vr(Ji(e)) : {} : t = {};
  }
  return (i ? Cn : Zn)(e, function(o, a, l) {
    return n(t, o, a, l);
  }), t;
}
function Td(e, n) {
  for (var t = e.length; t-- && br(n, e[t], 0) > -1; )
    ;
  return t;
}
function kd(e, n) {
  for (var t = -1, r = e.length; ++t < r && br(n, e[t], 0) > -1; )
    ;
  return t;
}
function wE(e, n, t) {
  if (e = _e(e), e && (t || n === void 0))
    return mu(e);
  if (!e || !(n = $n(n)))
    return e;
  var r = Dn(e), i = Dn(n), s = kd(r, i), o = Td(r, i) + 1;
  return Ot(r, s, o).join("");
}
function $E(e, n, t) {
  if (e = _e(e), e && (t || n === void 0))
    return e.slice(0, hu(e) + 1);
  if (!e || !(n = $n(n)))
    return e;
  var r = Dn(e), i = Td(r, Dn(n)) + 1;
  return Ot(r, 0, i).join("");
}
var AE = /^\s+/;
function OE(e, n, t) {
  if (e = _e(e), e && (t || n === void 0))
    return e.replace(AE, "");
  if (!e || !(n = $n(n)))
    return e;
  var r = Dn(e), i = kd(r, Dn(n));
  return Ot(r, i).join("");
}
var RE = 30, EE = "...", TE = /\w*$/;
function kE(e, n) {
  var t = RE, r = EE;
  if (Ie(n)) {
    var i = "separator" in n ? n.separator : i;
    t = "length" in n ? oe(n.length) : t, r = "omission" in n ? $n(n.omission) : r;
  }
  e = _e(e);
  var s = e.length;
  if (Or(e)) {
    var o = Dn(e);
    s = o.length;
  }
  if (t >= s)
    return e;
  var a = t - Tr(r);
  if (a < 1)
    return r;
  var l = o ? Ot(o, 0, a).join("") : e.slice(0, a);
  if (i === void 0)
    return l + r;
  if (o && (a += l.length - a), Go(i)) {
    if (e.slice(a).search(i)) {
      var f, u = l;
      for (i.global || (i = RegExp(i.source, _e(TE.exec(i)) + "g")), i.lastIndex = 0; f = i.exec(u); )
        var c = f.index;
      l = l.slice(0, c === void 0 ? a : c);
    }
  } else if (e.indexOf($n(i), a) != a) {
    var d = l.lastIndexOf(i);
    d > -1 && (l = l.slice(0, d));
  }
  return l + r;
}
function SE(e) {
  return Eu(e, 1);
}
var PE = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'"
}, IE = $o(PE);
const jE = IE;
var Sd = /&(?:amp|lt|gt|quot|#39);/g, CE = RegExp(Sd.source);
function ME(e) {
  return e = _e(e), e && CE.test(e) ? e.replace(Sd, jE) : e;
}
var LE = 1 / 0, NE = mr && 1 / Xi(new mr([, -0]))[1] == LE ? function(e) {
  return new mr(e);
} : ao;
const FE = NE;
var WE = 200;
function wt(e, n, t) {
  var r = -1, i = qi, s = e.length, o = !0, a = [], l = a;
  if (t)
    o = !1, i = Fo;
  else if (s >= WE) {
    var f = n ? null : FE(e);
    if (f)
      return Xi(f);
    o = !1, i = Gr, l = new Gt();
  } else
    l = n ? [] : a;
  e:
    for (; ++r < s; ) {
      var u = e[r], c = n ? n(u) : u;
      if (u = t || u !== 0 ? u : 0, o && c === c) {
        for (var d = l.length; d--; )
          if (l[d] === c)
            continue e;
        n && l.push(c), a.push(u);
      } else
        i(l, c, t) || (l !== a && l.push(c), a.push(u));
    }
  return a;
}
var DE = le(function(e) {
  return wt(Qe(e, 1, qe, !0));
});
const UE = DE;
var BE = le(function(e) {
  var n = Rn(e);
  return qe(n) && (n = void 0), wt(Qe(e, 1, qe, !0), te(n));
});
const qE = BE;
var GE = le(function(e) {
  var n = Rn(e);
  return n = typeof n == "function" ? n : void 0, wt(Qe(e, 1, qe, !0), void 0, n);
});
const zE = GE;
function HE(e) {
  return e && e.length ? wt(e) : [];
}
function KE(e, n) {
  return e && e.length ? wt(e, te(n)) : [];
}
function YE(e, n) {
  return n = typeof n == "function" ? n : void 0, e && e.length ? wt(e, void 0, n) : [];
}
var JE = 0;
function XE(e) {
  var n = ++JE;
  return _e(e) + n;
}
function ZE(e, n) {
  return e == null ? !0 : Ko(e, n);
}
var VE = Math.max;
function ea(e) {
  if (!(e && e.length))
    return [];
  var n = 0;
  return e = Rt(e, function(t) {
    if (qe(t))
      return n = VE(t.length, n), !0;
  }), co(n, function(t) {
    return Pe(e, Co(t));
  });
}
function Pd(e, n) {
  if (!(e && e.length))
    return [];
  var t = ea(e);
  return n == null ? t : Pe(t, function(r) {
    return An(n, void 0, r);
  });
}
function Id(e, n, t, r) {
  return ti(e, n, t(Yt(e, n)), r);
}
function QE(e, n, t) {
  return e == null ? e : Id(e, n, Vn(t));
}
function xE(e, n, t, r) {
  return r = typeof r == "function" ? r : void 0, e == null ? e : Id(e, n, Vn(t), r);
}
var eT = Rr(function(e, n, t) {
  return e + (t ? " " : "") + n.toUpperCase();
});
const nT = eT;
function tT(e) {
  return e == null ? [] : Uo(e, gn(e));
}
var rT = le(function(e, n) {
  return qe(e) ? xr(e, n) : [];
});
const iT = rT;
function sT(e, n) {
  return _d(Vn(n), e);
}
var oT = ut(function(e) {
  var n = e.length, t = n ? e[0] : 0, r = this.__wrapped__, i = function(s) {
    return go(s, e);
  };
  return n > 1 || this.__actions__.length || !(r instanceof ue) || !st(t) ? this.thru(i) : (r = r.slice(t, +t + (n ? 1 : 0)), r.__actions__.push({
    func: ri,
    args: [i],
    thisArg: void 0
  }), new Pn(r, this.__chain__).thru(function(s) {
    return n && !s.length && s.push(void 0), s;
  }));
});
const aT = oT;
function lT() {
  return lc(this);
}
function fT() {
  var e = this.__wrapped__;
  if (e instanceof ue) {
    var n = e;
    return this.__actions__.length && (n = new ue(this)), n = n.reverse(), n.__actions__.push({
      func: ri,
      args: [Xs],
      thisArg: void 0
    }), new Pn(n, this.__chain__);
  }
  return this.thru(Xs);
}
function na(e, n, t) {
  var r = e.length;
  if (r < 2)
    return r ? wt(e[0]) : [];
  for (var i = -1, s = Array(r); ++i < r; )
    for (var o = e[i], a = -1; ++a < r; )
      a != i && (s[i] = xr(s[i] || o, e[a], n, t));
  return wt(Qe(s, 1), n, t);
}
var uT = le(function(e) {
  return na(Rt(e, qe));
});
const cT = uT;
var dT = le(function(e) {
  var n = Rn(e);
  return qe(n) && (n = void 0), na(Rt(e, qe), te(n));
});
const pT = dT;
var hT = le(function(e) {
  var n = Rn(e);
  return n = typeof n == "function" ? n : void 0, na(Rt(e, qe), void 0, n);
});
const mT = hT;
var gT = le(ea);
const _T = gT;
function jd(e, n, t) {
  for (var r = -1, i = e.length, s = n.length, o = {}; ++r < i; ) {
    var a = r < s ? n[r] : void 0;
    t(o, e[r], a);
  }
  return o;
}
function yT(e, n) {
  return jd(e || [], n || [], Xr);
}
function vT(e, n) {
  return jd(e || [], n || [], ti);
}
var bT = le(function(e) {
  var n = e.length, t = n > 1 ? e[n - 1] : void 0;
  return t = typeof t == "function" ? (e.pop(), t) : void 0, Pd(e, t);
});
const wT = bT, q = {
  chunk: m0,
  compact: iv,
  concat: sv,
  difference: bb,
  differenceBy: $b,
  differenceWith: Ob,
  drop: Tb,
  dropRight: kb,
  dropRightWhile: Sb,
  dropWhile: Pb,
  fill: Vb,
  findIndex: Yc,
  findLastIndex: Xc,
  first: Tl,
  flatten: Mu,
  flattenDeep: pw,
  flattenDepth: hw,
  fromPairs: jw,
  head: Tl,
  indexOf: n2,
  initial: t2,
  intersection: s2,
  intersectionBy: a2,
  intersectionWith: f2,
  join: d$,
  last: Rn,
  lastIndexOf: b$,
  nth: nA,
  pull: fO,
  pullAll: yd,
  pullAllBy: uO,
  pullAllWith: cO,
  pullAt: mO,
  remove: NO,
  reverse: Xs,
  slice: iR,
  sortedIndex: _R,
  sortedIndexBy: yR,
  sortedIndexOf: vR,
  sortedLastIndex: bR,
  sortedLastIndexBy: wR,
  sortedLastIndexOf: $R,
  sortedUniq: AR,
  sortedUniqBy: OR,
  tail: UR,
  take: BR,
  takeRight: qR,
  takeRightWhile: GR,
  takeWhile: zR,
  union: UE,
  unionBy: qE,
  unionWith: zE,
  uniq: HE,
  uniqBy: KE,
  uniqWith: YE,
  unzip: ea,
  unzipWith: Pd,
  without: iT,
  xor: cT,
  xorBy: pT,
  xorWith: mT,
  zip: _T,
  zipObject: yT,
  zipObjectDeep: vT,
  zipWith: wT
}, $e = {
  countBy: Vv,
  each: Al,
  eachRight: Ol,
  every: Jb,
  filter: Qb,
  find: nw,
  findLast: ow,
  flatMap: lw,
  flatMapDeep: uw,
  flatMapDepth: cw,
  forEach: Al,
  forEachRight: Ol,
  groupBy: Ww,
  includes: xw,
  invokeMap: $2,
  keyBy: g$,
  map: xi,
  orderBy: pA,
  partition: eO,
  reduce: jO,
  reduceRight: MO,
  reject: LO,
  sample: YO,
  sampleSize: ZO,
  shuffle: eR,
  size: rR,
  some: lR,
  sortBy: uR
}, $T = {
  now: Oi
}, De = {
  after: vh,
  ary: Eu,
  before: Fu,
  bind: Wu,
  bindKey: V1,
  curry: Lo,
  curryRight: No,
  debounce: Ic,
  defer: mb,
  delay: _b,
  flip: gw,
  memoize: Yi,
  negate: ni,
  once: uA,
  overArgs: bA,
  partial: _d,
  partialRight: QA,
  rearg: IO,
  rest: UO,
  spread: SR,
  throttle: cE,
  unary: SE,
  wrap: sT
}, Z = {
  castArray: l0,
  clone: Jy,
  cloneDeep: Vy,
  cloneDeepWith: ev,
  cloneWith: tv,
  conformsTo: Gv,
  eq: Un,
  gt: Uw,
  gte: qw,
  isArguments: Bt,
  isArray: re,
  isArrayBuffer: E2,
  isArrayLike: mn,
  isArrayLikeObject: qe,
  isBoolean: k2,
  isBuffer: bt,
  isDate: j2,
  isElement: C2,
  isEmpty: W2,
  isEqual: D2,
  isEqualWith: U2,
  isError: _o,
  isFinite: q2,
  isFunction: it,
  isInteger: nd,
  isLength: zi,
  isMap: gc,
  isMatch: G2,
  isMatchWith: z2,
  isNaN: K2,
  isNative: Z2,
  isNil: V2,
  isNull: Q2,
  isNumber: td,
  isObject: Ie,
  isObjectLike: Ne,
  isPlainObject: Vr,
  isRegExp: Go,
  isSafeInteger: t$,
  isSet: _c,
  isString: ts,
  isSymbol: wn,
  isTypedArray: Ar,
  isUndefined: r$,
  isWeakMap: s$,
  isWeakSet: a$,
  lt: E$,
  lte: k$,
  toArray: sd,
  toFinite: rt,
  toInteger: oe,
  toLength: zc,
  toNumber: kn,
  toPlainObject: Cc,
  toSafeInteger: yE,
  toString: _e
}, fn = {
  add: uh,
  ceil: d0,
  divide: Eb,
  floor: yw,
  max: L$,
  maxBy: N$,
  mean: W$,
  meanBy: D$,
  min: K$,
  minBy: Y$,
  multiply: X$,
  round: HO,
  subtract: FR,
  sum: WR,
  sumBy: DR
}, ta = {
  clamp: g0,
  inRange: Zw,
  random: wO
}, ne = {
  assign: Bg,
  assignIn: el,
  assignInWith: Si,
  assignWith: Xg,
  at: C1,
  create: Qv,
  defaults: lb,
  defaultsDeep: db,
  entries: Rl,
  entriesIn: El,
  extend: el,
  extendWith: Si,
  findKey: tw,
  findLastKey: aw,
  forIn: kw,
  forInRight: Sw,
  forOwn: Pw,
  forOwnRight: Iw,
  functions: Cw,
  functionsIn: Mw,
  get: _r,
  has: Kw,
  hasIn: jo,
  invert: h2,
  invertBy: y2,
  invoke: b2,
  keys: He,
  keysIn: gn,
  mapKeys: S$,
  mapValues: P$,
  merge: B$,
  mergeWith: Lc,
  omit: lA,
  omitBy: fA,
  pick: rO,
  pickBy: ld,
  result: BO,
  set: Qo,
  setWith: VO,
  toPairs: Rl,
  toPairsIn: El,
  transform: bE,
  unset: ZE,
  update: QE,
  updateWith: xE,
  values: Er,
  valuesIn: tT
}, Qn = {
  at: aT,
  chain: lc,
  commit: rv,
  lodash: p,
  next: eA,
  plant: iO,
  reverse: fT,
  tap: HR,
  thru: ri,
  toIterator: mE,
  toJSON: ks,
  value: ks,
  valueOf: ks,
  wrapperChain: lT
}, me = {
  camelCase: a0,
  capitalize: Ku,
  deburr: Yu,
  endsWith: Mb,
  escape: Bc,
  escapeRegExp: Kb,
  kebabCase: h$,
  lowerCase: $$,
  lowerFirst: O$,
  pad: zA,
  padEnd: HA,
  padStart: KA,
  parseInt: XA,
  repeat: FO,
  replace: WO,
  snakeCase: oR,
  split: ER,
  startCase: IR,
  startsWith: jR,
  template: fE,
  templateSettings: Zs,
  toLower: gE,
  toUpper: vE,
  trim: wE,
  trimEnd: $E,
  trimStart: OE,
  truncate: kE,
  unescape: ME,
  upperCase: nT,
  upperFirst: bo,
  words: ac
}, ye = {
  attempt: Nu,
  bindAll: Y1,
  cond: Dv,
  conforms: qv,
  constant: fo,
  defaultTo: sb,
  flow: Rw,
  flowRight: Tw,
  identity: ln,
  iteratee: f$,
  matches: j$,
  matchesProperty: M$,
  method: G$,
  methodOf: H$,
  mixin: id,
  noop: ao,
  nthArg: tA,
  over: mA,
  overEvery: $A,
  overSome: OA,
  property: Tc,
  propertyOf: sO,
  range: EO,
  rangeRight: kO,
  stubArray: Oo,
  stubFalse: po,
  stubObject: CR,
  stubString: MR,
  stubTrue: LR,
  times: hE,
  toPath: _E,
  uniqueId: XE
};
function AT() {
  var e = new ue(this.__wrapped__);
  return e.__actions__ = pn(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = pn(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = pn(this.__views__), e;
}
function OT() {
  if (this.__filtered__) {
    var e = new ue(this);
    e.__dir__ = -1, e.__filtered__ = !0;
  } else
    e = this.clone(), e.__dir__ *= -1;
  return e;
}
var RT = Math.max, ET = Math.min;
function TT(e, n, t) {
  for (var r = -1, i = t.length; ++r < i; ) {
    var s = t[r], o = s.size;
    switch (s.type) {
      case "drop":
        e += o;
        break;
      case "dropRight":
        n -= o;
        break;
      case "take":
        n = ET(n, e + o);
        break;
      case "takeRight":
        e = RT(e, n - o);
        break;
    }
  }
  return { start: e, end: n };
}
var kT = 1, ST = 2, PT = Math.min;
function IT() {
  var e = this.__wrapped__.value(), n = this.__dir__, t = re(e), r = n < 0, i = t ? e.length : 0, s = TT(0, i, this.__views__), o = s.start, a = s.end, l = a - o, f = r ? a : o - 1, u = this.__iteratees__, c = u.length, d = 0, m = PT(l, this.__takeCount__);
  if (!t || !r && i == l && m == l)
    return Ed(e, this.__actions__);
  var h = [];
  e:
    for (; l-- && d < m; ) {
      f += n;
      for (var g = -1, v = e[f]; ++g < c; ) {
        var w = u[g], A = w.iteratee, M = w.type, W = A(v);
        if (M == ST)
          v = W;
        else if (!W) {
          if (M == kT)
            continue e;
          break e;
        }
      }
      h[d++] = v;
    }
  return h;
}
/**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="es" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var jT = "4.17.21", CT = 2, MT = 1, LT = 3, Cd = 4294967295, NT = Array.prototype, FT = Object.prototype, Md = FT.hasOwnProperty, Fl = en ? en.iterator : void 0, WT = Math.max, Wl = Math.min, ra = function(e) {
  return function(n, t, r) {
    if (r == null) {
      var i = Ie(t), s = i && He(t), o = s && s.length && es(t, s);
      (o ? o.length : i) || (r = t, t = n, n = this);
    }
    return e(n, t, r);
  };
}(id);
p.after = De.after;
p.ary = De.ary;
p.assign = ne.assign;
p.assignIn = ne.assignIn;
p.assignInWith = ne.assignInWith;
p.assignWith = ne.assignWith;
p.at = ne.at;
p.before = De.before;
p.bind = De.bind;
p.bindAll = ye.bindAll;
p.bindKey = De.bindKey;
p.castArray = Z.castArray;
p.chain = Qn.chain;
p.chunk = q.chunk;
p.compact = q.compact;
p.concat = q.concat;
p.cond = ye.cond;
p.conforms = ye.conforms;
p.constant = ye.constant;
p.countBy = $e.countBy;
p.create = ne.create;
p.curry = De.curry;
p.curryRight = De.curryRight;
p.debounce = De.debounce;
p.defaults = ne.defaults;
p.defaultsDeep = ne.defaultsDeep;
p.defer = De.defer;
p.delay = De.delay;
p.difference = q.difference;
p.differenceBy = q.differenceBy;
p.differenceWith = q.differenceWith;
p.drop = q.drop;
p.dropRight = q.dropRight;
p.dropRightWhile = q.dropRightWhile;
p.dropWhile = q.dropWhile;
p.fill = q.fill;
p.filter = $e.filter;
p.flatMap = $e.flatMap;
p.flatMapDeep = $e.flatMapDeep;
p.flatMapDepth = $e.flatMapDepth;
p.flatten = q.flatten;
p.flattenDeep = q.flattenDeep;
p.flattenDepth = q.flattenDepth;
p.flip = De.flip;
p.flow = ye.flow;
p.flowRight = ye.flowRight;
p.fromPairs = q.fromPairs;
p.functions = ne.functions;
p.functionsIn = ne.functionsIn;
p.groupBy = $e.groupBy;
p.initial = q.initial;
p.intersection = q.intersection;
p.intersectionBy = q.intersectionBy;
p.intersectionWith = q.intersectionWith;
p.invert = ne.invert;
p.invertBy = ne.invertBy;
p.invokeMap = $e.invokeMap;
p.iteratee = ye.iteratee;
p.keyBy = $e.keyBy;
p.keys = He;
p.keysIn = ne.keysIn;
p.map = $e.map;
p.mapKeys = ne.mapKeys;
p.mapValues = ne.mapValues;
p.matches = ye.matches;
p.matchesProperty = ye.matchesProperty;
p.memoize = De.memoize;
p.merge = ne.merge;
p.mergeWith = ne.mergeWith;
p.method = ye.method;
p.methodOf = ye.methodOf;
p.mixin = ra;
p.negate = ni;
p.nthArg = ye.nthArg;
p.omit = ne.omit;
p.omitBy = ne.omitBy;
p.once = De.once;
p.orderBy = $e.orderBy;
p.over = ye.over;
p.overArgs = De.overArgs;
p.overEvery = ye.overEvery;
p.overSome = ye.overSome;
p.partial = De.partial;
p.partialRight = De.partialRight;
p.partition = $e.partition;
p.pick = ne.pick;
p.pickBy = ne.pickBy;
p.property = ye.property;
p.propertyOf = ye.propertyOf;
p.pull = q.pull;
p.pullAll = q.pullAll;
p.pullAllBy = q.pullAllBy;
p.pullAllWith = q.pullAllWith;
p.pullAt = q.pullAt;
p.range = ye.range;
p.rangeRight = ye.rangeRight;
p.rearg = De.rearg;
p.reject = $e.reject;
p.remove = q.remove;
p.rest = De.rest;
p.reverse = q.reverse;
p.sampleSize = $e.sampleSize;
p.set = ne.set;
p.setWith = ne.setWith;
p.shuffle = $e.shuffle;
p.slice = q.slice;
p.sortBy = $e.sortBy;
p.sortedUniq = q.sortedUniq;
p.sortedUniqBy = q.sortedUniqBy;
p.split = me.split;
p.spread = De.spread;
p.tail = q.tail;
p.take = q.take;
p.takeRight = q.takeRight;
p.takeRightWhile = q.takeRightWhile;
p.takeWhile = q.takeWhile;
p.tap = Qn.tap;
p.throttle = De.throttle;
p.thru = ri;
p.toArray = Z.toArray;
p.toPairs = ne.toPairs;
p.toPairsIn = ne.toPairsIn;
p.toPath = ye.toPath;
p.toPlainObject = Z.toPlainObject;
p.transform = ne.transform;
p.unary = De.unary;
p.union = q.union;
p.unionBy = q.unionBy;
p.unionWith = q.unionWith;
p.uniq = q.uniq;
p.uniqBy = q.uniqBy;
p.uniqWith = q.uniqWith;
p.unset = ne.unset;
p.unzip = q.unzip;
p.unzipWith = q.unzipWith;
p.update = ne.update;
p.updateWith = ne.updateWith;
p.values = ne.values;
p.valuesIn = ne.valuesIn;
p.without = q.without;
p.words = me.words;
p.wrap = De.wrap;
p.xor = q.xor;
p.xorBy = q.xorBy;
p.xorWith = q.xorWith;
p.zip = q.zip;
p.zipObject = q.zipObject;
p.zipObjectDeep = q.zipObjectDeep;
p.zipWith = q.zipWith;
p.entries = ne.toPairs;
p.entriesIn = ne.toPairsIn;
p.extend = ne.assignIn;
p.extendWith = ne.assignInWith;
ra(p, p);
p.add = fn.add;
p.attempt = ye.attempt;
p.camelCase = me.camelCase;
p.capitalize = me.capitalize;
p.ceil = fn.ceil;
p.clamp = ta.clamp;
p.clone = Z.clone;
p.cloneDeep = Z.cloneDeep;
p.cloneDeepWith = Z.cloneDeepWith;
p.cloneWith = Z.cloneWith;
p.conformsTo = Z.conformsTo;
p.deburr = me.deburr;
p.defaultTo = ye.defaultTo;
p.divide = fn.divide;
p.endsWith = me.endsWith;
p.eq = Z.eq;
p.escape = me.escape;
p.escapeRegExp = me.escapeRegExp;
p.every = $e.every;
p.find = $e.find;
p.findIndex = q.findIndex;
p.findKey = ne.findKey;
p.findLast = $e.findLast;
p.findLastIndex = q.findLastIndex;
p.findLastKey = ne.findLastKey;
p.floor = fn.floor;
p.forEach = $e.forEach;
p.forEachRight = $e.forEachRight;
p.forIn = ne.forIn;
p.forInRight = ne.forInRight;
p.forOwn = ne.forOwn;
p.forOwnRight = ne.forOwnRight;
p.get = ne.get;
p.gt = Z.gt;
p.gte = Z.gte;
p.has = ne.has;
p.hasIn = ne.hasIn;
p.head = q.head;
p.identity = ln;
p.includes = $e.includes;
p.indexOf = q.indexOf;
p.inRange = ta.inRange;
p.invoke = ne.invoke;
p.isArguments = Z.isArguments;
p.isArray = re;
p.isArrayBuffer = Z.isArrayBuffer;
p.isArrayLike = Z.isArrayLike;
p.isArrayLikeObject = Z.isArrayLikeObject;
p.isBoolean = Z.isBoolean;
p.isBuffer = Z.isBuffer;
p.isDate = Z.isDate;
p.isElement = Z.isElement;
p.isEmpty = Z.isEmpty;
p.isEqual = Z.isEqual;
p.isEqualWith = Z.isEqualWith;
p.isError = Z.isError;
p.isFinite = Z.isFinite;
p.isFunction = Z.isFunction;
p.isInteger = Z.isInteger;
p.isLength = Z.isLength;
p.isMap = Z.isMap;
p.isMatch = Z.isMatch;
p.isMatchWith = Z.isMatchWith;
p.isNaN = Z.isNaN;
p.isNative = Z.isNative;
p.isNil = Z.isNil;
p.isNull = Z.isNull;
p.isNumber = Z.isNumber;
p.isObject = Ie;
p.isObjectLike = Z.isObjectLike;
p.isPlainObject = Z.isPlainObject;
p.isRegExp = Z.isRegExp;
p.isSafeInteger = Z.isSafeInteger;
p.isSet = Z.isSet;
p.isString = Z.isString;
p.isSymbol = Z.isSymbol;
p.isTypedArray = Z.isTypedArray;
p.isUndefined = Z.isUndefined;
p.isWeakMap = Z.isWeakMap;
p.isWeakSet = Z.isWeakSet;
p.join = q.join;
p.kebabCase = me.kebabCase;
p.last = Rn;
p.lastIndexOf = q.lastIndexOf;
p.lowerCase = me.lowerCase;
p.lowerFirst = me.lowerFirst;
p.lt = Z.lt;
p.lte = Z.lte;
p.max = fn.max;
p.maxBy = fn.maxBy;
p.mean = fn.mean;
p.meanBy = fn.meanBy;
p.min = fn.min;
p.minBy = fn.minBy;
p.stubArray = ye.stubArray;
p.stubFalse = ye.stubFalse;
p.stubObject = ye.stubObject;
p.stubString = ye.stubString;
p.stubTrue = ye.stubTrue;
p.multiply = fn.multiply;
p.nth = q.nth;
p.noop = ye.noop;
p.now = $T.now;
p.pad = me.pad;
p.padEnd = me.padEnd;
p.padStart = me.padStart;
p.parseInt = me.parseInt;
p.random = ta.random;
p.reduce = $e.reduce;
p.reduceRight = $e.reduceRight;
p.repeat = me.repeat;
p.replace = me.replace;
p.result = ne.result;
p.round = fn.round;
p.sample = $e.sample;
p.size = $e.size;
p.snakeCase = me.snakeCase;
p.some = $e.some;
p.sortedIndex = q.sortedIndex;
p.sortedIndexBy = q.sortedIndexBy;
p.sortedIndexOf = q.sortedIndexOf;
p.sortedLastIndex = q.sortedLastIndex;
p.sortedLastIndexBy = q.sortedLastIndexBy;
p.sortedLastIndexOf = q.sortedLastIndexOf;
p.startCase = me.startCase;
p.startsWith = me.startsWith;
p.subtract = fn.subtract;
p.sum = fn.sum;
p.sumBy = fn.sumBy;
p.template = me.template;
p.times = ye.times;
p.toFinite = Z.toFinite;
p.toInteger = oe;
p.toLength = Z.toLength;
p.toLower = me.toLower;
p.toNumber = Z.toNumber;
p.toSafeInteger = Z.toSafeInteger;
p.toString = Z.toString;
p.toUpper = me.toUpper;
p.trim = me.trim;
p.trimEnd = me.trimEnd;
p.trimStart = me.trimStart;
p.truncate = me.truncate;
p.unescape = me.unescape;
p.uniqueId = ye.uniqueId;
p.upperCase = me.upperCase;
p.upperFirst = me.upperFirst;
p.each = $e.forEach;
p.eachRight = $e.forEachRight;
p.first = q.head;
ra(p, function() {
  var e = {};
  return Zn(p, function(n, t) {
    Md.call(p.prototype, t) || (e[t] = n);
  }), e;
}(), { chain: !1 });
p.VERSION = jT;
(p.templateSettings = me.templateSettings).imports._ = p;
Cn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
  p[e].placeholder = p;
});
Cn(["drop", "take"], function(e, n) {
  ue.prototype[e] = function(t) {
    t = t === void 0 ? 1 : WT(oe(t), 0);
    var r = this.__filtered__ && !n ? new ue(this) : this.clone();
    return r.__filtered__ ? r.__takeCount__ = Wl(t, r.__takeCount__) : r.__views__.push({
      size: Wl(t, Cd),
      type: e + (r.__dir__ < 0 ? "Right" : "")
    }), r;
  }, ue.prototype[e + "Right"] = function(t) {
    return this.reverse()[e](t).reverse();
  };
});
Cn(["filter", "map", "takeWhile"], function(e, n) {
  var t = n + 1, r = t == MT || t == LT;
  ue.prototype[e] = function(i) {
    var s = this.clone();
    return s.__iteratees__.push({
      iteratee: te(i),
      type: t
    }), s.__filtered__ = s.__filtered__ || r, s;
  };
});
Cn(["head", "last"], function(e, n) {
  var t = "take" + (n ? "Right" : "");
  ue.prototype[e] = function() {
    return this[t](1).value()[0];
  };
});
Cn(["initial", "tail"], function(e, n) {
  var t = "drop" + (n ? "" : "Right");
  ue.prototype[e] = function() {
    return this.__filtered__ ? new ue(this) : this[t](1);
  };
});
ue.prototype.compact = function() {
  return this.filter(ln);
};
ue.prototype.find = function(e) {
  return this.filter(e).head();
};
ue.prototype.findLast = function(e) {
  return this.reverse().find(e);
};
ue.prototype.invokeMap = le(function(e, n) {
  return typeof e == "function" ? new ue(this) : this.map(function(t) {
    return ei(t, e, n);
  });
});
ue.prototype.reject = function(e) {
  return this.filter(ni(te(e)));
};
ue.prototype.slice = function(e, n) {
  e = oe(e);
  var t = this;
  return t.__filtered__ && (e > 0 || n < 0) ? new ue(t) : (e < 0 ? t = t.takeRight(-e) : e && (t = t.drop(e)), n !== void 0 && (n = oe(n), t = n < 0 ? t.dropRight(-n) : t.take(n - e)), t);
};
ue.prototype.takeRightWhile = function(e) {
  return this.reverse().takeWhile(e).reverse();
};
ue.prototype.toArray = function() {
  return this.take(Cd);
};
Zn(ue.prototype, function(e, n) {
  var t = /^(?:filter|find|map|reject)|While$/.test(n), r = /^(?:head|last)$/.test(n), i = p[r ? "take" + (n == "last" ? "Right" : "") : n], s = r || /^find/.test(n);
  i && (p.prototype[n] = function() {
    var o = this.__wrapped__, a = r ? [1] : arguments, l = o instanceof ue, f = a[0], u = l || re(o), c = function(w) {
      var A = i.apply(p, At([w], a));
      return r && d ? A[0] : A;
    };
    u && t && typeof f == "function" && f.length != 1 && (l = u = !1);
    var d = this.__chain__, m = !!this.__actions__.length, h = s && !d, g = l && !m;
    if (!s && u) {
      o = g ? o : new ue(this);
      var v = e.apply(o, a);
      return v.__actions__.push({ func: ri, args: [c], thisArg: void 0 }), new Pn(v, d);
    }
    return h && g ? e.apply(this, a) : (v = this.thru(c), h ? r ? v.value()[0] : v.value() : v);
  });
});
Cn(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
  var n = NT[e], t = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(e);
  p.prototype[e] = function() {
    var i = arguments;
    if (r && !this.__chain__) {
      var s = this.value();
      return n.apply(re(s) ? s : [], i);
    }
    return this[t](function(o) {
      return n.apply(re(o) ? o : [], i);
    });
  };
});
Zn(ue.prototype, function(e, n) {
  var t = p[n];
  if (t) {
    var r = t.name + "";
    Md.call(hr, r) || (hr[r] = []), hr[r].push({ name: n, func: t });
  }
});
hr[Gi(void 0, CT).name] = [{
  name: "wrapper",
  func: void 0
}];
ue.prototype.clone = AT;
ue.prototype.reverse = OT;
ue.prototype.value = IT;
p.prototype.at = Qn.at;
p.prototype.chain = Qn.wrapperChain;
p.prototype.commit = Qn.commit;
p.prototype.next = Qn.next;
p.prototype.plant = Qn.plant;
p.prototype.reverse = Qn.reverse;
p.prototype.toJSON = p.prototype.valueOf = p.prototype.value = Qn.value;
p.prototype.first = p.prototype.head;
Fl && (p.prototype[Fl] = Qn.toIterator);
const DT = (e, n, t) => {
  const r = e.indexOf(n, t);
  return r < 0 ? e.substring(t || 0) : e.substring(t || 0, r);
}, Ld = (e, n, t) => {
  const r = e.indexOf(n, t);
  return r < 0 ? "" : e.substring(r + n.length);
}, zr = (e, n, t) => {
  const r = e.lastIndexOf(n, t);
  return r < 0 ? "" : e.substring(r + n.length, t || e.length);
};
function UT(e) {
  e = e.trim();
  const n = [];
  let t = 0;
  for (let r = 1; r < e.length; r++)
    "A" <= e[r] && e[r] <= "Z" && (n.push(e.substring(t, r).toLowerCase()), t = r);
  return n.push(e.substring(t, e.length).toLowerCase()), n.join(" ");
}
function BT(e) {
  return UT(e).replace(/[a-z]/i, (n) => n.toUpperCase());
}
function qT(e) {
  e == null && (e = {});
  let n = Vs(e);
  return Ri(n), n;
}
function Ri(e) {
  let n = e.required || [];
  if (e.$ref)
    return;
  switch (e.type) {
    case "object":
      const r = e.properties || {};
      for (let s in r)
        n.indexOf(s) < 0 && Ri(r[s]);
      break;
    case "array":
      const i = e.items || {};
      Ri(i), i.oneOf && !i.oneOf.some((s) => s.type == "null") && i.oneOf.push({ type: "null" });
      break;
    default:
      Array.isArray(e.type) ? e.type.indexOf("null") < 0 && e.type.push("null") : e.type != "null" && (e.type = [e.type, "null"]);
      break;
  }
  const t = e.definitions;
  if (t)
    for (let r in t)
      Ri(t[r]);
}
function Vs(e) {
  var n;
  if (e == null || typeof e != "object")
    return e;
  if (e instanceof Date)
    return n = /* @__PURE__ */ new Date(), n.setTime(e.getTime()), n;
  if (e instanceof Array) {
    n = [];
    for (var t = 0, r = e.length; t < r; t++)
      n[t] = Vs(e[t]);
    return n;
  }
  if (e instanceof Object) {
    n = {};
    const s = e;
    for (var i in s)
      s.hasOwnProperty(i) && (n[i] = Vs(s[i]));
    return n;
  }
  throw new Error("Unable to copy obj! Its type isn't supported.");
}
let GT = 0;
const zT = () => GT++, HT = (e, n) => {
  if (!e || !n)
    return e;
  const t = e.split("${"), r = [];
  r.push(t.shift());
  for (let i of t)
    if (i.includes("}")) {
      const s = DT(i, "}"), o = (s === "" ? n : _r(n, s)) || "";
      r.push(`${o}${Ld(i, "}")}`);
    }
  return r.join("");
};
function KT(e) {
  let n = 0, t = e.length;
  return e[n] === "/" && n++, e[t - 1] === "/" && t--, t <= n ? "" : e.substring(n, t);
}
function YT(...e) {
  const n = e.filter((s) => !!s);
  if (n.length === 0)
    return "";
  const t = n[0].startsWith("/"), r = n[n.length - 1].endsWith("/");
  let i = n.map((s) => KT(s)).filter((s) => !!s).join("/");
  return t && (i = "/" + i), r && i !== "/" && (i += "/"), i;
}
function En(e) {
  return (e || "").replace(`
`, "<br/>");
}
function Nd(e) {
  let n = e.type;
  switch (e.enum && (n = "enum"), e.format && (n += "-" + e.format), e.hidden && (n = "hidden"), e.editor && (n = e.editor), n) {
    case "string-date-time":
    case "string-date":
    case "string-time":
    case "string-email":
    case "string-password":
    case "number-currency":
      return e.format;
    default:
      return n;
  }
}
function ia(e) {
  switch (e.type || "") {
    case "object":
      return {};
    case "array":
      return [];
    default:
      return null;
  }
}
function zt(e, n) {
  var t;
  return e.title || BT(((t = n.slice(-1)) == null ? void 0 : t[0]) || "");
}
function Ss(e) {
  var r;
  e.startsWith("/") ? e = e.substring(1) : e.startsWith("#/") ? e = e.substring(2) : e.startsWith("http") && (e = ((r = e.split("#/")) == null ? void 0 : r[1]) || "");
  const n = [];
  e.split("/").forEach((i) => {
    const s = parseInt(i);
    isNaN(s) ? n.push(`.${i}`) : n.push(`[${i}]`);
  });
  let t = n.join("");
  return t.startsWith(".") && (t = t.substring(1)), t;
}
function JT(e) {
  let n, t, r, i;
  function s(l) {
    e[4](l);
  }
  var o = (
    /*component*/
    e[3]
  );
  function a(l) {
    let f = {
      params: (
        /*params*/
        l[1]
      ),
      value: (
        /*value*/
        l[2]
      )
    };
    return (
      /*schema*/
      l[0] !== void 0 && (f.schema = /*schema*/
      l[0]), { props: f }
    );
  }
  return o && (n = Le(o, a(e)), Ze.push(() => Ln(n, "schema", s))), {
    c() {
      n && Oe(n.$$.fragment), r = Ce();
    },
    m(l, f) {
      n && be(n, l, f), k(l, r, f), i = !0;
    },
    p(l, [f]) {
      const u = {};
      if (f & /*params*/
      2 && (u.params = /*params*/
      l[1]), f & /*value*/
      4 && (u.value = /*value*/
      l[2]), !t && f & /*schema*/
      1 && (t = !0, u.schema = /*schema*/
      l[0], tt(() => t = !1)), f & /*component*/
      8 && o !== (o = /*component*/
      l[3])) {
        if (n) {
          Fe();
          const c = n;
          x(c.$$.fragment, 1, 0, () => {
            we(c, 1);
          }), We();
        }
        o ? (n = Le(o, a(l)), Ze.push(() => Ln(n, "schema", s)), Oe(n.$$.fragment), J(n.$$.fragment, 1), be(n, r.parentNode, r)) : n = null;
      } else
        o && n.$set(u);
    },
    i(l) {
      i || (n && J(n.$$.fragment, l), i = !0);
    },
    o(l) {
      n && x(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && T(r), n && we(n, l);
    }
  };
}
function XT(e, n, t) {
  let { params: r } = n, { schema: i } = n, { value: s } = n, { components: o } = r, a;
  function l(f) {
    i = f, t(0, i);
  }
  return e.$$set = (f) => {
    "params" in f && t(1, r = f.params), "schema" in f && t(0, i = f.schema), "value" in f && t(2, s = f.value);
  }, e.$$.update = () => {
    e.$$.dirty & /*schema*/
    1 && t(3, a = o[Nd(i)]);
  }, [i, r, s, a, l];
}
class yr extends Ye {
  constructor(n) {
    super(), Ke(this, n, XT, JT, ze, { params: 1, schema: 0, value: 2 });
  }
}
function ZT(e) {
  let n, t, r, i, s, o, a;
  return {
    c() {
      n = N("input"), y(n, "id", t = /*params*/
      e[0].path.join(".")), y(n, "name", r = /*params*/
      e[0].path.join(".")), y(
        n,
        "type",
        /*type*/
        e[3]
      ), n.value = i = /*value*/
      e[2] || "", n.disabled = s = /*schema*/
      e[1].readOnly || /*params*/
      e[0].containerReadOnly;
    },
    m(l, f) {
      k(l, n, f), o || (a = H(
        n,
        "input",
        /*input_handler*/
        e[4]
      ), o = !0);
    },
    p(l, f) {
      f & /*params*/
      1 && t !== (t = /*params*/
      l[0].path.join(".")) && y(n, "id", t), f & /*params*/
      1 && r !== (r = /*params*/
      l[0].path.join(".")) && y(n, "name", r), f & /*type*/
      8 && y(
        n,
        "type",
        /*type*/
        l[3]
      ), f & /*value*/
      4 && i !== (i = /*value*/
      l[2] || "") && n.value !== i && (n.value = i), f & /*schema, params*/
      3 && s !== (s = /*schema*/
      l[1].readOnly || /*params*/
      l[0].containerReadOnly) && (n.disabled = s);
    },
    d(l) {
      l && T(n), o = !1, a();
    }
  };
}
function VT(e) {
  let n, t, r;
  var i = (
    /*params*/
    e[0].components.fieldWrapper
  );
  function s(o) {
    return {
      props: {
        params: (
          /*params*/
          o[0]
        ),
        schema: (
          /*schema*/
          o[1]
        ),
        $$slots: { default: [ZT] },
        $$scope: { ctx: o }
      }
    };
  }
  return i && (n = Le(i, s(e))), {
    c() {
      n && Oe(n.$$.fragment), t = Ce();
    },
    m(o, a) {
      n && be(n, o, a), k(o, t, a), r = !0;
    },
    p(o, [a]) {
      const l = {};
      if (a & /*params*/
      1 && (l.params = /*params*/
      o[0]), a & /*schema*/
      2 && (l.schema = /*schema*/
      o[1]), a & /*$$scope, params, type, value, schema*/
      47 && (l.$$scope = { dirty: a, ctx: o }), a & /*params*/
      1 && i !== (i = /*params*/
      o[0].components.fieldWrapper)) {
        if (n) {
          Fe();
          const f = n;
          x(f.$$.fragment, 1, 0, () => {
            we(f, 1);
          }), We();
        }
        i ? (n = Le(i, s(o)), Oe(n.$$.fragment), J(n.$$.fragment, 1), be(n, t.parentNode, t)) : n = null;
      } else
        i && n.$set(l);
    },
    i(o) {
      r || (n && J(n.$$.fragment, o), r = !0);
    },
    o(o) {
      n && x(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && T(t), n && we(n, o);
    }
  };
}
function QT(e, n, t) {
  let { params: r } = n, { schema: i } = n, { value: s } = n, o = "text";
  const a = (l) => r.pathChanged(r.path, l.currentTarget.value || void 0);
  return e.$$set = (l) => {
    "params" in l && t(0, r = l.params), "schema" in l && t(1, i = l.schema), "value" in l && t(2, s = l.value);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*schema*/
    2) {
      const l = Nd(i);
      t(3, o = l === "password" ? "password" : l === "email" ? "email" : l === "time" ? "time" : l === "date-time" ? "datetime-local" : l === "date" ? "date" : "text");
    }
  }, [r, i, s, o, a];
}
let or = class extends Ye {
  constructor(n) {
    super(), Ke(this, n, QT, VT, ze, { params: 0, schema: 1, value: 2 });
  }
};
function Dl(e) {
  let n, t, r = En(
    /*title*/
    e[3]
  ) + "", i, s = (
    /*schema*/
    e[1].description && Ul(e)
  );
  return {
    c() {
      n = N("label"), t = new Dp(!1), i = Q(), s && s.c(), t.a = i, y(n, "id", `label-${/*id*/
      e[4]}`), y(
        n,
        "for",
        /*id*/
        e[4]
      ), Se(
        n,
        "required",
        /*params*/
        e[0].required
      ), Se(
        n,
        "readonly",
        /*schema*/
        e[1].readOnly || /*params*/
        e[0].containerReadOnly
      );
    },
    m(o, a) {
      k(o, n, a), t.m(r, n), B(n, i), s && s.m(n, null);
    },
    p(o, a) {
      /*schema*/
      o[1].description ? s ? s.p(o, a) : (s = Ul(o), s.c(), s.m(n, null)) : s && (s.d(1), s = null), a & /*params*/
      1 && Se(
        n,
        "required",
        /*params*/
        o[0].required
      ), a & /*schema, params*/
      3 && Se(
        n,
        "readonly",
        /*schema*/
        o[1].readOnly || /*params*/
        o[0].containerReadOnly
      );
    },
    d(o) {
      o && T(n), s && s.d();
    }
  };
}
function Ul(e) {
  let n, t;
  return {
    c() {
      n = N("span"), y(n, "class", "info"), y(n, "title", t = /*schema*/
      e[1].description);
    },
    m(r, i) {
      k(r, n, i);
    },
    p(r, i) {
      i & /*schema*/
      2 && t !== (t = /*schema*/
      r[1].description) && y(n, "title", t);
    },
    d(r) {
      r && T(n);
    }
  };
}
function Bl(e) {
  let n, t;
  return {
    c() {
      n = N("div"), t = nn(
        /*error*/
        e[2]
      ), y(n, "class", "error");
    },
    m(r, i) {
      k(r, n, i), B(n, t);
    },
    p(r, i) {
      i & /*error*/
      4 && hn(
        t,
        /*error*/
        r[2]
      );
    },
    d(r) {
      r && T(n);
    }
  };
}
function xT(e) {
  let n, t, r, i, s = (
    /*params*/
    e[0].containerParent !== "array" && Dl(e)
  );
  const o = (
    /*#slots*/
    e[6].default
  ), a = Pp(
    o,
    e,
    /*$$scope*/
    e[5],
    null
  );
  let l = (
    /*error*/
    e[2] && /*params*/
    e[0].showErrors && Bl(e)
  );
  return {
    c() {
      s && s.c(), n = Q(), a && a.c(), t = Q(), l && l.c(), r = Ce();
    },
    m(f, u) {
      s && s.m(f, u), k(f, n, u), a && a.m(f, u), k(f, t, u), l && l.m(f, u), k(f, r, u), i = !0;
    },
    p(f, [u]) {
      /*params*/
      f[0].containerParent !== "array" ? s ? s.p(f, u) : (s = Dl(f), s.c(), s.m(n.parentNode, n)) : s && (s.d(1), s = null), a && a.p && (!i || u & /*$$scope*/
      32) && jp(
        a,
        o,
        f,
        /*$$scope*/
        f[5],
        i ? Ip(
          o,
          /*$$scope*/
          f[5],
          u,
          null
        ) : Cp(
          /*$$scope*/
          f[5]
        ),
        null
      ), /*error*/
      f[2] && /*params*/
      f[0].showErrors ? l ? l.p(f, u) : (l = Bl(f), l.c(), l.m(r.parentNode, r)) : l && (l.d(1), l = null);
    },
    i(f) {
      i || (J(a, f), i = !0);
    },
    o(f) {
      x(a, f), i = !1;
    },
    d(f) {
      s && s.d(f), f && T(n), a && a.d(f), f && T(t), l && l.d(f), f && T(r);
    }
  };
}
function ek(e, n, t) {
  let r, { $$slots: i = {}, $$scope: s } = n, { params: o } = n, { schema: a } = n;
  const l = zt(a, o.path), f = o.path.join(".");
  return e.$$set = (u) => {
    "params" in u && t(0, o = u.params), "schema" in u && t(1, a = u.schema), "$$scope" in u && t(5, s = u.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*params*/
    1 && t(2, r = o.validationErrors[o.path.join(".")]);
  }, [o, a, r, l, f, s, i];
}
class nk extends Ye {
  constructor(n) {
    super(), Ke(this, n, ek, xT, ze, { params: 0, schema: 1 });
  }
}
function ql(e, n, t) {
  const r = e.slice();
  return r[10] = n[t], r[11] = n, r[12] = t, r;
}
function Gl(e) {
  let n, t, r = (
    /*params*/
    e[1].collapsible && zl(e)
  ), i = (
    /*params*/
    (e[1].containerParent !== "array" || /*schema*/
    e[0].title) && Hl(e)
  );
  return {
    c() {
      n = N("legend"), r && r.c(), t = Q(), i && i.c(), y(n, "class", "subset-label object-label");
    },
    m(s, o) {
      k(s, n, o), r && r.m(n, null), B(n, t), i && i.m(n, null);
    },
    p(s, o) {
      /*params*/
      s[1].collapsible ? r ? r.p(s, o) : (r = zl(s), r.c(), r.m(n, t)) : r && (r.d(1), r = null), /*params*/
      s[1].containerParent !== "array" || /*schema*/
      s[0].title ? i ? i.p(s, o) : (i = Hl(s), i.c(), i.m(n, null)) : i && (i.d(1), i = null);
    },
    d(s) {
      s && T(n), r && r.d(), i && i.d();
    }
  };
}
function zl(e) {
  let n, t, r, i;
  return {
    c() {
      n = N("span"), y(n, "class", t = "collapser " + /*collapserOpenState*/
      e[3]);
    },
    m(s, o) {
      k(s, n, o), r || (i = H(
        n,
        "click",
        /*toggle*/
        e[6]
      ), r = !0);
    },
    p(s, o) {
      o & /*collapserOpenState*/
      8 && t !== (t = "collapser " + /*collapserOpenState*/
      s[3]) && y(n, "class", t);
    },
    d(s) {
      s && T(n), r = !1, i();
    }
  };
}
function Hl(e) {
  let n, t = En(zt(
    /*schema*/
    e[0],
    /*params*/
    e[1].path
  )) + "", r, i, s = (
    /*schema*/
    e[0].description && Kl(e)
  );
  return {
    c() {
      n = N("span"), r = Q(), s && s.c(), i = Ce(), y(n, "class", "subset-label-title object-label-title");
    },
    m(o, a) {
      k(o, n, a), n.innerHTML = t, k(o, r, a), s && s.m(o, a), k(o, i, a);
    },
    p(o, a) {
      a & /*schema, params*/
      3 && t !== (t = En(zt(
        /*schema*/
        o[0],
        /*params*/
        o[1].path
      )) + "") && (n.innerHTML = t), /*schema*/
      o[0].description ? s ? s.p(o, a) : (s = Kl(o), s.c(), s.m(i.parentNode, i)) : s && (s.d(1), s = null);
    },
    d(o) {
      o && T(n), o && T(r), s && s.d(o), o && T(i);
    }
  };
}
function Kl(e) {
  let n, t = En(
    /*schema*/
    e[0].description
  ) + "";
  return {
    c() {
      n = N("span"), y(n, "class", "subset-label-description object-label-description");
    },
    m(r, i) {
      k(r, n, i), n.innerHTML = t;
    },
    p(r, i) {
      i & /*schema*/
      1 && t !== (t = En(
        /*schema*/
        r[0].description
      ) + "") && (n.innerHTML = t);
    },
    d(r) {
      r && T(n);
    }
  };
}
function Yl(e) {
  let n = [], t = /* @__PURE__ */ new Map(), r, i, s = (
    /*propNames*/
    e[5]
  );
  const o = (a) => (
    /*propName*/
    a[10]
  );
  for (let a = 0; a < s.length; a += 1) {
    let l = ql(e, s, a), f = o(l);
    t.set(f, n[a] = Jl(f, l));
  }
  return {
    c() {
      for (let a = 0; a < n.length; a += 1)
        n[a].c();
      r = Ce();
    },
    m(a, l) {
      for (let f = 0; f < n.length; f += 1)
        n[f] && n[f].m(a, l);
      k(a, r, l), i = !0;
    },
    p(a, l) {
      l & /*params, propNames, schema, value*/
      39 && (s = /*propNames*/
      a[5], Fe(), n = Jr(n, l, o, 1, a, s, t, r.parentNode, cu, Jl, r, ql), We());
    },
    i(a) {
      if (!i) {
        for (let l = 0; l < s.length; l += 1)
          J(n[l]);
        i = !0;
      }
    },
    o(a) {
      for (let l = 0; l < n.length; l += 1)
        x(n[l]);
      i = !1;
    },
    d(a) {
      for (let l = 0; l < n.length; l += 1)
        n[l].d(a);
      a && T(r);
    }
  };
}
function Jl(e, n) {
  var l, f;
  let t, r, i, s;
  function o(u) {
    n[8](
      u,
      /*propName*/
      n[10]
    );
  }
  let a = {
    params: {
      .../*params*/
      n[1],
      path: [
        .../*params*/
        n[1].path,
        /*propName*/
        n[10]
      ],
      required: (
        /*schema*/
        (((l = n[0]) == null ? void 0 : l.required) || []).includes(
          /*propName*/
          n[10]
        )
      ),
      containerParent: "object",
      containerReadOnly: (
        /*params*/
        n[1].containerReadOnly || /*schema*/
        n[0].readOnly || !1
      )
    },
    value: (
      /*value*/
      (f = n[2]) == null ? void 0 : f[
        /*propName*/
        n[10]
      ]
    )
  };
  return (
    /*schema*/
    n[0].properties[
      /*propName*/
      n[10]
    ] !== void 0 && (a.schema = /*schema*/
    n[0].properties[
      /*propName*/
      n[10]
    ]), r = new yr({ props: a }), Ze.push(() => Ln(r, "schema", o)), {
      key: e,
      first: null,
      c() {
        t = Ce(), Oe(r.$$.fragment), this.first = t;
      },
      m(u, c) {
        k(u, t, c), be(r, u, c), s = !0;
      },
      p(u, c) {
        var m, h;
        n = u;
        const d = {};
        c & /*params, propNames, schema*/
        35 && (d.params = {
          .../*params*/
          n[1],
          path: [
            .../*params*/
            n[1].path,
            /*propName*/
            n[10]
          ],
          required: (
            /*schema*/
            (((m = n[0]) == null ? void 0 : m.required) || []).includes(
              /*propName*/
              n[10]
            )
          ),
          containerParent: "object",
          containerReadOnly: (
            /*params*/
            n[1].containerReadOnly || /*schema*/
            n[0].readOnly || !1
          )
        }), c & /*value, propNames*/
        36 && (d.value = /*value*/
        (h = n[2]) == null ? void 0 : h[
          /*propName*/
          n[10]
        ]), !i && c & /*schema, propNames*/
        33 && (i = !0, d.schema = /*schema*/
        n[0].properties[
          /*propName*/
          n[10]
        ], tt(() => i = !1)), r.$set(d);
      },
      i(u) {
        s || (J(r.$$.fragment, u), s = !0);
      },
      o(u) {
        x(r.$$.fragment, u), s = !1;
      },
      d(u) {
        u && T(t), we(r, u);
      }
    }
  );
}
function tk(e) {
  let n, t, r, i, s, o = (
    /*showLegend*/
    e[4] && Gl(e)
  ), a = (
    /*collapserOpenState*/
    e[3] === "open" && Yl(e)
  );
  return {
    c() {
      n = N("fieldset"), o && o.c(), t = Q(), a && a.c(), y(n, "name", r = /*params*/
      e[1].path.join(".")), y(n, "class", i = "subset object depth-" + /*params*/
      e[1].path.length);
    },
    m(l, f) {
      k(l, n, f), o && o.m(n, null), B(n, t), a && a.m(n, null), s = !0;
    },
    p(l, [f]) {
      /*showLegend*/
      l[4] ? o ? o.p(l, f) : (o = Gl(l), o.c(), o.m(n, t)) : o && (o.d(1), o = null), /*collapserOpenState*/
      l[3] === "open" ? a ? (a.p(l, f), f & /*collapserOpenState*/
      8 && J(a, 1)) : (a = Yl(l), a.c(), J(a, 1), a.m(n, null)) : a && (Fe(), x(a, 1, 1, () => {
        a = null;
      }), We()), (!s || f & /*params*/
      2 && r !== (r = /*params*/
      l[1].path.join("."))) && y(n, "name", r), (!s || f & /*params*/
      2 && i !== (i = "subset object depth-" + /*params*/
      l[1].path.length)) && y(n, "class", i);
    },
    i(l) {
      s || (J(a), s = !0);
    },
    o(l) {
      x(a), s = !1;
    },
    d(l) {
      l && T(n), o && o.d(), a && a.d();
    }
  };
}
function rk(e, n, t) {
  let r, i, s, { params: o } = n, { schema: a } = n, { value: l } = n, f = o.path.length === 0 || o.containerParent === "array" || !o.collapsible ? "open" : "closed";
  const u = () => {
    t(3, f = f === "open" ? "closed" : "open");
  };
  function c(d, m) {
    e.$$.not_equal(a.properties[m], d) && (a.properties[m] = d, t(0, a));
  }
  return e.$$set = (d) => {
    "params" in d && t(1, o = d.params), "schema" in d && t(0, a = d.schema), "value" in d && t(2, l = d.value);
  }, e.$$.update = () => {
    e.$$.dirty & /*schema*/
    1 && t(5, r = Object.keys((a == null ? void 0 : a.properties) || {})), e.$$.dirty & /*schema, params*/
    3 && t(7, i = zt(a, o.path)), e.$$.dirty & /*params, legendText*/
    130 && t(4, s = o.collapsible || o.containerParent !== "array" && !!i);
  }, [
    a,
    o,
    l,
    f,
    s,
    r,
    u,
    i,
    c
  ];
}
class ik extends Ye {
  constructor(n) {
    super(), Ke(this, n, rk, tk, ze, { params: 1, schema: 0, value: 2 });
  }
}
class Hr extends String {
}
const sk = /* @__PURE__ */ new Set(["<", ">", "<=", ">="]), ok = (e) => `\\u${e.toString(16).padStart(4, "0")}`, ak = (e) => {
  if ([1 / 0, -1 / 0, NaN, void 0, null].includes(e))
    return `${e}`;
  if (!["string", "boolean", "number"].includes(typeof e)) {
    if (typeof e != "object")
      throw new Error("Unexpected value type");
    const t = Object.getPrototypeOf(e);
    if (!(t === Array.prototype && Array.isArray(e) || t === Object.prototype))
      throw new Error("Unexpected object given as value");
  }
  return JSON.stringify(e).replace(/([{,])"__proto__":/g, '$1["__proto__"]:').replace(/[^\\]"__proto__":/g, () => {
    throw new Error("Unreachable");
  }).replace(/[\u2028\u2029]/g, (t) => ok(t.charCodeAt(0)));
}, os = (e, ...n) => {
  const t = e.replace(/%[%drscjw]/g, (r) => {
    if (r === "%%")
      return "%";
    if (n.length === 0)
      throw new Error("Unexpected arguments count");
    const i = n.shift();
    switch (r) {
      case "%d":
        if (typeof i == "number")
          return i;
        throw new Error("Expected a number");
      case "%r":
        if (i instanceof RegExp)
          return os("new RegExp(%j, %j)", i.source, i.flags);
        throw new Error("Expected a RegExp instance");
      case "%s":
        if (i instanceof Hr)
          return i;
        throw new Error("Expected a safe string");
      case "%c":
        if (sk.has(i))
          return i;
        throw new Error("Expected a compare op");
      case "%j":
        return ak(i);
      case "%w":
        if (Number.isInteger(i) && i >= 0)
          return " ".repeat(i);
        throw new Error("Expected a non-negative integer for indentation");
    }
    throw new Error("Unreachable");
  });
  if (n.length !== 0)
    throw new Error("Unexpected arguments count");
  return new Hr(t);
}, Qs = (e) => {
  if (!/^[a-z][a-z0-9_]*$/i.test(e))
    throw new Error("Does not look like a safe id");
  return new Hr(e);
}, Fd = (e) => (...n) => {
  if (!n.every((t) => t instanceof Hr))
    throw new Error("Unsafe arguments");
  return new Hr(e(...n));
}, lk = (e) => (
  // simple expression and single brackets can not break priority
  /^[a-z][a-z0-9_().]*$/i.test(e) || /^\([^()]+\)$/i.test(e) ? e : os("(%s)", e)
), fk = Fd(
  (...e) => e.some((n) => `${n}` == "true") ? "true" : e.join(" || ") || "false"
), uk = Fd(
  (...e) => e.some((n) => `${n}` == "false") ? "false" : e.join(" && ") || "true"
), Wd = (e) => `${e}` == "true" ? Qs("false") : `${e}` == "false" ? Qs("true") : os("!%s", lk(e)), ck = (...e) => Wd(fk(...e));
var as = { format: os, safe: Qs, safeand: uk, safenot: Wd, safenotor: ck };
const { safe: Xl } = as, Ps = /* @__PURE__ */ new WeakMap(), dk = (e) => {
  Ps.has(e) || Ps.set(e, { sym: /* @__PURE__ */ new Map(), ref: /* @__PURE__ */ new Map(), format: /* @__PURE__ */ new Map(), pattern: /* @__PURE__ */ new Map() });
  const n = Ps.get(e), t = (l) => {
    n.sym.get(l) || n.sym.set(l, 0);
    const f = n.sym.get(l);
    return n.sym.set(l, f + 1), Xl(`${l}${f}`);
  }, r = (l) => {
    if (n.pattern.has(l))
      return n.pattern.get(l);
    const f = t("pattern");
    return e[f] = new RegExp(l, "u"), n.pattern.set(l, f), f;
  };
  return n.loop || (n.loop = "ijklmnopqrstuvxyz".split("")), { gensym: t, genpattern: r, genloop: () => {
    const l = n.loop.shift();
    return n.loop.push(`${l}${l[0]}`), Xl(l);
  }, getref: (l) => n.ref.get(l), genref: (l) => {
    const f = t("ref");
    return n.ref.set(l, f), f;
  }, genformat: (l) => {
    let f = n.format.get(l);
    return f || (f = t("format"), e[f] = l, n.format.set(l, f)), f;
  } };
};
var Dd = { scopeMethods: dk };
const pk = (e) => /[\uD800-\uDFFF]/.test(e) ? [...e].length : e.length, hk = (e, n, t, r) => {
  if (e % n === 0)
    return !0;
  let i = e * t;
  if ((i === 1 / 0 || i === -1 / 0) && (i = e), i % r === 0)
    return !0;
  const s = Math.floor(i + 0.5);
  return s / t === e && s % r === 0;
}, Kr = (e, n) => {
  if (e === n)
    return !0;
  if (!e || !n || typeof e != typeof n || e !== n && typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  if (t !== Object.getPrototypeOf(n))
    return !1;
  if (t === Array.prototype)
    return !Array.isArray(e) || !Array.isArray(n) || e.length !== n.length ? !1 : e.every((r, i) => Kr(r, n[i]));
  if (t === Object.prototype) {
    const [r, i] = [Object.keys(e), Object.keys(n)];
    return r.length !== i.length ? !1 : (/* @__PURE__ */ new Set([...r, ...i])).size === r.length && r.every((o) => Kr(e[o], n[o]));
  }
  return !1;
}, mk = (e) => {
  if (e.length < 2)
    return !0;
  if (e.length === 2)
    return !Kr(e[0], e[1]);
  const n = [], t = e.length > 20 ? /* @__PURE__ */ new Set() : null;
  let r = 0, i = 0;
  for (const s of e) {
    if (typeof s == "object")
      n.push(s);
    else if (t) {
      if (t.add(s), t.size !== ++r)
        return !1;
    } else if (e.indexOf(s, i + 1) !== -1)
      return !1;
    i++;
  }
  for (let s = 1; s < n.length; s++)
    for (let o = 0; o < s; o++)
      if (Kr(n[s], n[o]))
        return !1;
  return !0;
}, gk = (e) => {
  if (typeof Buffer < "u")
    return Buffer.from(e, "base64").toString("utf-8");
  const n = atob(e);
  return new TextDecoder("utf-8").decode(new Uint8Array(n.length).map((t, r) => n.charCodeAt(r)));
}, Ud = Function.prototype.call.bind(Object.prototype.hasOwnProperty);
Ud[Symbol.for("toJayString")] = "Function.prototype.call.bind(Object.prototype.hasOwnProperty)";
const Bd = (e) => /~\//.test(e) ? `${e}`.replace(/~/g, "~0").replace(/\//g, "~1") : e, _k = (e) => e.length === 0 ? "#" : `#/${e.map(Bd).join("/")}`, yk = ({ keywordLocation: e, instanceLocation: n }, t, r) => ({
  keywordLocation: `${t}${e.slice(1)}`,
  instanceLocation: `${r}${n.slice(1)}`
}), vk = (e, [n, t]) => n.includes(!0) || n.some((r) => r === e) || t.some((r) => new RegExp(r, "u").test(e)), bk = (e, n) => (e.filter((t) => t[n])[0] || {})[n], wk = { toPointer: _k, pointerPart: Bd, errorMerge: yk, propertyIn: vk, dynamicResolve: bk };
var sa = { stringLength: pk, isMultipleOf: hk, deepEqual: Kr, unique: mk, deBase64: gk, hasOwn: Ud, ...wk };
const { format: fe, safe: $k } = as, { scopeMethods: Ak } = Dd, mi = sa, xs = new Map(
  Object.entries({
    null: (e) => fe("%s === null", e),
    boolean: (e) => fe('typeof %s === "boolean"', e),
    array: (e) => fe("Array.isArray(%s)", e),
    object: (e) => fe('typeof %s === "object" && %s && !Array.isArray(%s)', e, e, e),
    number: (e) => fe('typeof %s === "number"', e),
    integer: (e) => fe("Number.isInteger(%s)", e),
    string: (e) => fe('typeof %s === "string"', e)
  })
), Ft = ({ name: e, parent: n, keyval: t, keyname: r }) => {
  if (e) {
    if (n || t || r)
      throw new Error("name can be used only stand-alone");
    return e;
  }
  if (!n)
    throw new Error("Can not use property of undefined parent!");
  const i = Ft(n);
  if (t !== void 0) {
    if (r)
      throw new Error("Can not use key value and name together");
    if (!["string", "number"].includes(typeof t))
      throw new Error("Invalid property path");
    return /^[a-z][a-z0-9_]*$/i.test(t) ? fe("%s.%s", i, $k(t)) : fe("%s[%j]", i, t);
  } else if (r)
    return fe("%s[%s]", i, r);
  throw new Error("Unreachable");
}, Ok = new Set(
  [].concat(
    ...[Object, Array, String, Number, Boolean].map((e) => Object.getOwnPropertyNames(e.prototype))
  )
), Rk = (e, n, t, { unmodifiedPrototypes: r, isJSON: i }, s) => {
  const { gensym: o, genpattern: a, genloop: l } = Ak(n, t);
  return { present: (h) => {
    const g = Ft(h), { parent: v, keyval: w, keyname: A, inKeys: M, checked: W } = h;
    if (W || M && i)
      throw new Error("Unreachable: useless check for undefined");
    if (M)
      return fe("%s !== undefined", g);
    if (v && A) {
      n.hasOwn = mi.hasOwn;
      const I = Ft(v);
      return i ? fe("%s !== undefined && hasOwn(%s, %s)", g, I, A) : fe("%s in %s && hasOwn(%s, %s)", A, I, I, A);
    } else if (v && w !== void 0) {
      if (r && i && !Ok.has(`${w}`))
        return fe("%s !== undefined", g);
      n.hasOwn = mi.hasOwn;
      const I = Ft(v);
      return i ? fe("%s !== undefined && hasOwn(%s, %j)", g, I, w) : fe("%j in %s && hasOwn(%s, %j)", w, I, I, w);
    }
    throw new Error("Unreachable: present() check without parent");
  }, forObjectKeys: (h, g) => {
    const v = o("key");
    e.block(fe("for (const %s of Object.keys(%s))", v, Ft(h)), () => {
      g(t(h, v, !0), v);
    });
  }, forArray: (h, g, v) => {
    const w = l(), A = Ft(h);
    e.block(fe("for (let %s = %s; %s < %s.length; %s++)", w, g, w, A, w), () => {
      v(t(h, w, r, !0), w);
    });
  }, patternTest: (h, g) => {
    const v = h.replace(/[.^$|*+?(){}[\]\\]/gu, "");
    if (h === `^${v}$`)
      return fe("(%s === %j)", g, h.slice(1, -1));
    if (s.has(h))
      return fe("true");
    if ([v, `${v}+`, `${v}.*`, `.*${v}.*`].includes(h))
      return fe("%s.includes(%j)", g, v);
    if ([`^${v}`, `^${v}+`, `^${v}.*`].includes(h))
      return fe("%s.startsWith(%j)", g, v);
    if ([`${v}$`, `.*${v}$`].includes(h))
      return fe("%s.endsWith(%j)", g, v);
    const w = [...v].slice(0, -1).join("");
    return [`${v}*`, `${v}?`].includes(h) ? w.length === 0 ? fe("true") : fe("%s.includes(%j)", g, w) : [`^${v}*`, `^${v}?`].includes(h) ? w.length === 0 ? fe("true") : fe("%s.startsWith(%j)", g, w) : fe("%s.test(%s)", a(h), g);
  }, compare: (h, g) => {
    if (!g || typeof g != "object")
      return fe("%s === %j", h, g);
    let v;
    const w = (A) => A.length <= 3 && A.every((M) => !M || typeof M != "object");
    if (Array.isArray(g)) {
      if (v = xs.get("array")(h), w(g)) {
        let A = fe("%s.length === %d", h, g.length);
        for (let M = 0; M < g.length; M++)
          A = fe("%s && %s[%d] === %j", A, h, M, g[M]);
        return fe("%s && %s", v, A);
      }
    } else {
      v = xs.get("object")(h);
      const [A, M] = [Object.keys(g), Object.values(g)];
      if (w(M)) {
        let W = fe("Object.keys(%s).length === %d", h, A.length);
        A.length > 0 && (n.hasOwn = mi.hasOwn);
        for (const I of A)
          W = fe("%s && hasOwn(%s, %j)", W, h, I);
        for (const I of A)
          W = fe("%s && %s[%j] === %j", W, h, I, g[I]);
        return fe("%s && %s", v, W);
      }
    }
    return n.deepEqual = mi.deepEqual, fe("%s && deepEqual(%s, %j)", v, h, g);
  }, propvar: t };
}, Ek = /^\([^)]*\) *=>/, Tk = /^[^=]*=>/, Zl = Symbol.for("toJayString");
function kk(e) {
  if (typeof e == "function") {
    if (e[Zl])
      return e[Zl];
    if (Object.getPrototypeOf(e) !== Function.prototype)
      throw new Error("Can not stringify: a function with unexpected prototype");
    const n = `${e}`;
    if (e.prototype) {
      if (!/^function[ (]/.test(n))
        throw new Error("Unexpected function");
      return n;
    }
    if (Ek.test(n) || Tk.test(n))
      return n;
    throw new Error("Can not stringify: only either normal or arrow functions are supported");
  } else if (typeof e == "object") {
    const n = Object.getPrototypeOf(e);
    if (e instanceof RegExp && n === RegExp.prototype)
      return fe("%r", e);
    throw new Error("Can not stringify: an object with unexpected prototype");
  }
  throw new Error(`Can not stringify: unknown type ${typeof e}`);
}
var qd = { types: xs, buildName: Ft, jsHelpers: Rk, jaystring: kk };
const { format: gi, safe: Sk, safenot: Pk } = as, { jaystring: Ik } = qd, jk = /[{[]/, Ck = /[}\]]/;
var Gd = () => {
  const e = [];
  let n = 0;
  const t = (s) => {
    Ck.test(s.trim()[0]) && n--, e.push({ indent: n, code: s }), jk.test(s[s.length - 1]) && n++;
  }, r = () => {
    if (n !== 0)
      throw new Error("Unexpected indent at build()");
    const s = e.map((o) => gi("%w%s", o.indent * 2, o.code)).join(`
`);
    return /^[a-z][a-z0-9]*$/i.test(s) ? `return ${s}` : `return (${s})`;
  }, i = (s) => {
    const o = Object.entries(s);
    for (const [a, l] of o) {
      if (!/^[a-z][a-z0-9]*$/i.test(a))
        throw new Error("Unexpected scope key!");
      if (!(typeof l == "function" || l instanceof RegExp))
        throw new Error("Unexpected scope value!");
    }
    return o;
  };
  return {
    optimizedOut: !1,
    // some branch of code has been optimized out
    size: () => e.length,
    write(s, ...o) {
      if (typeof s != "string")
        throw new Error("Format must be a string!");
      if (s.includes(`
`))
        throw new Error("Only single lines are supported");
      return t(gi(s, ...o)), !0;
    },
    block(s, o, a = !1) {
      const l = n;
      this.write("%s {", s);
      const f = e.length;
      if (o(), f === e.length)
        return e.pop(), n = l, !1;
      if (f === e.length - 1 && !a) {
        const { code: u } = e[e.length - 1];
        if (!/^(if|for) /.test(u))
          return e.length -= 2, n = l, this.write("%s %s", s, u);
      }
      return this.write("}");
    },
    if(s, o, a) {
      `${s}` == "false" ? (a && a(), o && (this.optimizedOut = !0)) : `${s}` == "true" ? (o && o(), a && (this.optimizedOut = !0)) : o && this.block(gi("if (%s)", s), o, !!a) ? a && this.block(gi("else"), a) : a && this.if(Pk(s), a);
    },
    makeModule(s = {}) {
      return `(function() {
'use strict'
${i(s).map(
        ([a, l]) => `const ${Sk(a)} = ${Ik(l)};`
      ).join(`
`)}
${r()}})()`;
    },
    makeFunction(s = {}) {
      const o = i(s), a = o.map((f) => f[0]), l = o.map((f) => f[1]);
      return Function(...a, `'use strict'
${r()}`)(...l);
    }
  };
};
const Mk = [
  "$schema",
  "$vocabulary",
  "id",
  "$id",
  "$anchor",
  "$ref",
  "definitions",
  "$defs",
  "$recursiveRef",
  "$recursiveAnchor",
  "$dynamicAnchor",
  "$dynamicRef",
  "type",
  "required",
  "default",
  "enum",
  "const",
  "not",
  "allOf",
  "anyOf",
  "oneOf",
  "if",
  "then",
  "else",
  "maximum",
  "minimum",
  "exclusiveMaximum",
  "exclusiveMinimum",
  "multipleOf",
  "divisibleBy",
  "items",
  "maxItems",
  "minItems",
  "additionalItems",
  "prefixItems",
  "contains",
  "minContains",
  "maxContains",
  "uniqueItems",
  "maxLength",
  "minLength",
  "format",
  "pattern",
  "contentEncoding",
  "contentMediaType",
  "contentSchema",
  "properties",
  "maxProperties",
  "minProperties",
  "additionalProperties",
  "patternProperties",
  "propertyNames",
  "dependencies",
  "dependentRequired",
  "dependentSchemas",
  "propertyDependencies",
  "unevaluatedProperties",
  "unevaluatedItems",
  "title",
  "description",
  "deprecated",
  "readOnly",
  "writeOnly",
  "examples",
  "$comment",
  "example",
  // unused meta, OpenAPI
  "discriminator",
  // optimization hint and error filtering only, does not affect validation result
  "removeAdditional"
  // optional keyword for { removeAdditional: 'keyword' } config, to target specific objects
], Lk = [
  "draft/next",
  "draft/2020-12",
  "draft/2019-09",
  "draft-07",
  "draft-06",
  "draft-04",
  "draft-03"
  // historic
], Nk = Lk.map((e) => `https://json-schema.org/${e}/schema`), Fk = ["core", "applicator", "validation", "meta-data", "format", "content"], Wk = [
  "core",
  "applicator",
  "unevaluated",
  "validation",
  "meta-data",
  "format-annotation",
  "format-assertion",
  "content"
], Dk = [
  ...Fk.map((e) => `https://json-schema.org/draft/2019-09/vocab/${e}`),
  ...Wk.map((e) => `https://json-schema.org/draft/2020-12/vocab/${e}`)
];
var zd = { knownKeywords: Mk, schemaVersions: Nk, knownVocabularies: Dk };
const { knownKeywords: Hd } = zd;
function Kd(e, n, t, r = "keys") {
  if (!e.has(n))
    return e.set(n, t);
  if (e.get(n) !== t)
    throw new Error(`Conflicting duplicate ${r}: ${n}`);
}
function Uk(e) {
  return e.includes("~") ? e.replace(/~[01]/g, (n) => {
    switch (n) {
      case "~1":
        return "/";
      case "~0":
        return "~";
    }
    throw new Error("Unreachable");
  }) : e;
}
function eo(e, n, t) {
  if (typeof e != "object")
    throw new Error("Invalid input object");
  if (typeof n != "string")
    throw new Error("Invalid JSON pointer");
  const r = n.split("/");
  if (!["", "#"].includes(r.shift()))
    throw new Error("Invalid JSON pointer");
  if (r.length === 0)
    return e;
  let i = e;
  for (const s of r) {
    if (typeof s != "string")
      throw new Error("Invalid JSON pointer");
    t && t.push(i);
    const o = Uk(s);
    if (typeof i != "object" || !Object.prototype.hasOwnProperty.call(i, o))
      return;
    i = i[o];
  }
  return i;
}
const Vl = /^https?:\/\//;
function Wt(e, n) {
  if (typeof e != "string" || typeof n != "string")
    throw new Error("Unexpected path!");
  if (n.length === 0)
    return e;
  const t = e.replace(/#.*/, "");
  return n.startsWith("#") ? `${t}${n}` : !t.includes("/") || Vl.test(n) ? n : Vl.test(t) ? `${new URL(n, t)}` : n.startsWith("/") ? n : [...t.split("/").slice(0, -1), n].join("/");
}
function Ql(e) {
  return e.map((t) => t && (t.$id || t.id) || "").filter((t) => t && typeof t == "string").reduce(Wt, "");
}
const Yd = ["properties", "patternProperties", "$defs", "definitions"], Jd = ["const", "enum", "examples", "example", "comment"], Xd = Symbol("skip");
function oa(e, n) {
  const t = (r, i = !1) => {
    if (!r || typeof r != "object")
      return;
    const s = n(r);
    if (s !== void 0)
      return s === Xd ? void 0 : s;
    for (const o of Object.keys(r)) {
      if (!i && !Array.isArray(r) && !Hd.includes(o) || !i && Jd.includes(o))
        continue;
      const a = t(r[o], !i && Yd.includes(o));
      if (a !== void 0)
        return a;
    }
  };
  return t(e);
}
function Zd(e, n, t, r = "") {
  const i = Wt(r, t), s = [], [o, a = ""] = i.split("#"), l = decodeURI(a), f = (u, c, d = !1, m = !1) => {
    if (!u || typeof u != "object")
      return;
    const h = u.$id || u.id;
    let g = c;
    if (h && typeof h == "string") {
      if (g = Wt(g, h), g === i || g === o && l === "")
        s.push([u, e, c]);
      else if (g === o && l[0] === "/") {
        const w = [], A = eo(u, l, w);
        A !== void 0 && s.push([A, e, Wt(c, Ql(w))]);
      }
    }
    const v = m ? u.$dynamicAnchor : u.$anchor;
    if (v && typeof v == "string") {
      if (v.includes("#"))
        throw new Error("$anchor can't include '#'");
      if (v.startsWith("/"))
        throw new Error("$anchor can't start with '/'");
      g = Wt(g, `#${v}`), g === i && s.push([u, e, c]);
    }
    for (const w of Object.keys(u))
      !d && !Array.isArray(u) && !Hd.includes(w) || !d && Jd.includes(w) || f(u[w], g, !d && Yd.includes(w));
    !m && u.$dynamicAnchor && f(u, c, d, !0);
  };
  if (f(e, o), o === r.replace(/#$/, "") && (l[0] === "/" || l === "")) {
    const u = [], c = eo(e, l, u);
    c !== void 0 && s.push([c, e, Ql(u)]);
  }
  if (n.has(o) && n.get(o) !== e) {
    const u = Zd(n.get(o), n, `#${a}`, o);
    s.push(...u.map(([c, d, m]) => [c, d, Wt(o, m)]));
  }
  return n.has(i) && s.push([n.get(i), n.get(i), i]), s;
}
function Bk(e) {
  const n = /* @__PURE__ */ new Map();
  return oa(e, (t) => {
    if (t !== e && (t.$id || t.id))
      return Xd;
    const r = t.$dynamicAnchor;
    if (r && typeof r == "string") {
      if (r.includes("#"))
        throw new Error("$dynamicAnchor can't include '#'");
      if (!/^[a-zA-Z0-9_-]+$/.test(r))
        throw new Error(`Unsupported $dynamicAnchor: ${r}`);
      Kd(n, r, t, "$dynamicAnchor");
    }
  }), n;
}
const qk = (e, n) => oa(e, (t) => Object.keys(t).some((r) => n.includes(r)) || void 0) || !1, xl = (e, n, t = !1) => {
  if (!Array.isArray(n))
    throw new Error("Expected an array of schemas");
  for (const r of n)
    oa(r, (i) => {
      const s = i.$id || i.id, o = s && typeof s == "string" ? s.replace(/#$/, "") : null;
      if (o && o.includes("://") && !o.includes("#"))
        Kd(e, o, i, "schema $id in 'schemas'");
      else if (i === r && !t)
        throw new Error("Schema with missing or invalid $id in 'schemas'");
    });
  return e;
}, Vd = (e, n) => {
  if (n)
    return xl(Vd(e), n, !0);
  if (e)
    switch (Object.getPrototypeOf(e)) {
      case Object.prototype:
        return new Map(Object.entries(e));
      case Map.prototype:
        return new Map(e);
      case Array.prototype:
        return xl(/* @__PURE__ */ new Map(), e);
    }
  throw new Error("Unexpected value for 'schemas' option");
};
var Qd = { get: eo, joinPath: Wt, resolveReference: Zd, getDynamicAnchors: Bk, hasKeywords: qk, buildSchemas: Vd };
const no = {
  // matches ajv + length checks + does not start with a dot
  // note that quoted emails are deliberately unsupported (as in ajv), who would want \x01 in email
  // first check is an additional fast path with lengths: 20+(1+21)*2 = 64, (1+61+1)+((1+60+1)+1)*3 = 252 < 253, that should cover most valid emails
  // max length is 64 (name) + 1 (@) + 253 (host), we want to ensure that prior to feeding to the fast regex
  // the second regex checks for quoted, starting-leading dot in name, and two dots anywhere
  email: (e) => {
    if (e.length > 318)
      return !1;
    if (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]{1,20}(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]{1,21}){0,2}@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,60}[a-z0-9])?){0,3}$/i.test(e))
      return !0;
    if (!e.includes("@") || /(^\.|^"|\.@|\.\.)/.test(e))
      return !1;
    const [t, r, ...i] = e.split("@");
    return !t || !r || i.length !== 0 || t.length > 64 || r.length > 253 || !/^[a-z0-9.-]+$/i.test(r) || !/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+$/i.test(t) ? !1 : r.split(".").every((s) => /^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/i.test(s));
  },
  // matches ajv + length checks
  hostname: (e) => e.length > (e.endsWith(".") ? 254 : 253) ? !1 : /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*\.?$/i.test(e),
  // 'time' matches ajv + length checks, 'date' matches ajv full
  // date: https://tools.ietf.org/html/rfc3339#section-5.6
  // date-time: https://tools.ietf.org/html/rfc3339#section-5.6
  // leap year: https://tools.ietf.org/html/rfc3339#appendix-C
  // 11: 1990-01-01, 1: T, 9: 00:00:00., 12: maxiumum fraction length (non-standard), 6: +00:00
  date: (e) => {
    if (e.length !== 10)
      return !1;
    if (e[5] === "0" && e[6] === "2") {
      if (/^\d\d\d\d-02-(?:[012][1-8]|[12]0|[01]9)$/.test(e))
        return !0;
      const n = e.match(/^(\d\d\d\d)-02-29$/);
      if (!n)
        return !1;
      const t = n[1] | 0;
      return t % 16 === 0 || t % 4 === 0 && t % 25 !== 0;
    }
    return e.endsWith("31") ? /^\d\d\d\d-(?:0[13578]|1[02])-31$/.test(e) : /^\d\d\d\d-(?:0[13-9]|1[012])-(?:[012][1-9]|[123]0)$/.test(e);
  },
  // leap second handling is special, we check it's 23:59:60.*
  time: (e) => {
    if (e.length > 9 + 12 + 6 || !/^(?:2[0-3]|[0-1]\d):[0-5]\d:(?:[0-5]\d|60)(?:\.\d+)?(?:z|[+-](?:2[0-3]|[0-1]\d)(?::?[0-5]\d)?)?$/i.test(e))
      return !1;
    if (!/:60/.test(e))
      return !0;
    const t = e.match(/([0-9.]+|[^0-9.])/g);
    let r = Number(t[0]) * 60 + Number(t[2]);
    return t[5] === "+" ? r += 24 * 60 - Number(t[6] || 0) * 60 - Number(t[8] || 0) : t[5] === "-" && (r += Number(t[6] || 0) * 60 + Number(t[8] || 0)), r % (24 * 60) === 23 * 60 + 59;
  },
  // first two lines specific to date-time, then tests for unanchored (at end) date, code identical to 'date' above
  // input[17] === '6' is a check for :60
  "date-time": (e) => {
    if (e.length > 10 + 1 + 9 + 12 + 6)
      return !1;
    const n = /^\d\d\d\d-(?:0[1-9]|1[0-2])-(?:[0-2]\d|3[01])[t\s](?:2[0-3]|[0-1]\d):[0-5]\d:(?:[0-5]\d|60)(?:\.\d+)?(?:z|[+-](?:2[0-3]|[0-1]\d)(?::?[0-5]\d)?)$/i, t = e[5] === "0" && e[6] === "2";
    if (t && e[8] === "3" || !n.test(e))
      return !1;
    if (e[17] === "6") {
      const r = e.slice(11).match(/([0-9.]+|[^0-9.])/g);
      let i = Number(r[0]) * 60 + Number(r[2]);
      if (r[5] === "+" ? i += 24 * 60 - Number(r[6] || 0) * 60 - Number(r[8] || 0) : r[5] === "-" && (i += Number(r[6] || 0) * 60 + Number(r[8] || 0)), i % (24 * 60) !== 23 * 60 + 59)
        return !1;
    }
    if (t) {
      if (/^\d\d\d\d-02-(?:[012][1-8]|[12]0|[01]9)/.test(e))
        return !0;
      const r = e.match(/^(\d\d\d\d)-02-29/);
      if (!r)
        return !1;
      const i = r[1] | 0;
      return i % 16 === 0 || i % 4 === 0 && i % 25 !== 0;
    }
    return e[8] === "3" && e[9] === "1" ? /^\d\d\d\d-(?:0[13578]|1[02])-31/.test(e) : /^\d\d\d\d-(?:0[13-9]|1[012])-(?:[012][1-9]|[123]0)/.test(e);
  },
  /* ipv4 and ipv6 are from ajv with length restriction */
  // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
  ipv4: (e) => e.length <= 15 && /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d\d?)$/.test(e),
  // optimized http://stackoverflow.com/questions/53497/regular-expression-that-matches-valid-ipv6-addresses
  // max length: 1000:1000:1000:1000:1000:1000:255.255.255.255
  // we parse ip6 format with a simple scan, leaving embedded ipv4 validation to a regex
  // s0=count(:), s1=count(.), hex=count(a-zA-Z0-9), short=count(::)>0
  // 48-57: '0'-'9', 97-102, 65-70: 'a'-'f', 'A'-'F', 58: ':', 46: '.'
  /* eslint-disable one-var */
  // prettier-ignore
  ipv6: (e) => {
    if (e.length > 45 || e.length < 2)
      return !1;
    let n = 0, t = 0, r = 0, i = !1, s = !1, o = 0, a = !0;
    for (let f = 0; f < e.length; f++) {
      const u = e.charCodeAt(f);
      if (f === 1 && o === 58 && u !== 58)
        return !1;
      if (u >= 48 && u <= 57) {
        if (++r > 4)
          return !1;
      } else if (u === 46) {
        if (n > 6 || t >= 3 || r === 0 || s)
          return !1;
        t++, r = 0;
      } else if (u === 58) {
        if (t > 0 || n >= 7)
          return !1;
        if (o === 58) {
          if (i)
            return !1;
          i = !0;
        } else
          f === 0 && (a = !1);
        n++, r = 0, s = !1;
      } else if (u >= 97 && u <= 102 || u >= 65 && u <= 70) {
        if (t > 0 || ++r > 4)
          return !1;
        s = !0;
      } else
        return !1;
      o = u;
    }
    if (n < 2 || t > 0 && (t !== 3 || r === 0))
      return !1;
    if (i && e.length === 2)
      return !0;
    if (t > 0 && !/(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/.test(e))
      return !1;
    const l = t > 0 ? 6 : 7;
    return i ? (a || r > 0) && n < l : n === l && a && r > 0;
  },
  /* eslint-enable one-var */
  // matches ajv with optimization
  uri: /^[a-z][a-z0-9+\-.]*:(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|v[0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/?(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
  // matches ajv with optimization
  "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|v[0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/?(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?)?(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
  // ajv has /^(([^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?([a-z0-9_]|%[0-9a-f]{2})+(:[1-9][0-9]{0,3}|\*)?(,([a-z0-9_]|%[0-9a-f]{2})+(:[1-9][0-9]{0,3}|\*)?)*\})*$/i
  // this is equivalent
  // uri-template: https://tools.ietf.org/html/rfc6570
  // eslint-disable-next-line no-control-regex
  "uri-template": /^(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2}|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
  // ajv has /^(\/([^~/]|~0|~1)*)*$/, this is equivalent
  // JSON-pointer: https://tools.ietf.org/html/rfc6901
  "json-pointer": /^(?:|\/(?:[^~]|~0|~1)*)$/,
  // ajv has /^(0|[1-9][0-9]*)(#|(\/([^~/]|~0|~1)*)*)$/, this is equivalent
  // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
  "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:|#|\/(?:[^~]|~0|~1)*)$/,
  // uuid: http://tools.ietf.org/html/rfc4122
  uuid: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
  // length restriction is an arbitrary safeguard
  // first regex checks if this a week duration (can't be combined with others)
  // second regex verifies symbols, no more than one fraction, at least 1 block is present, and T is not last
  // third regex verifies structure
  duration: (e) => e.length > 1 && e.length < 80 && (/^P\d+([.,]\d+)?W$/.test(e) || /^P[\dYMDTHS]*(\d[.,]\d+)?[YMDHS]$/.test(e) && /^P([.,\d]+Y)?([.,\d]+M)?([.,\d]+D)?(T([.,\d]+H)?([.,\d]+M)?([.,\d]+S)?)?$/.test(e))
  // TODO: iri, iri-reference, idn-email, idn-hostname
}, Gk = {
  // basic
  alpha: /^[a-zA-Z]+$/,
  alphanumeric: /^[a-zA-Z0-9]+$/,
  // hex
  "hex-digits": /^[0-9a-f]+$/i,
  "hex-digits-prefixed": /^0x[0-9a-f]+$/i,
  "hex-bytes": /^([0-9a-f][0-9a-f])+$/i,
  "hex-bytes-prefixed": /^0x([0-9a-f][0-9a-f])+$/i,
  base64: (e) => e.length % 4 === 0 && /^[a-z0-9+/]*={0,3}$/i.test(e),
  // ajv has /^#(\/([a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, this is equivalent
  // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
  "json-pointer-uri-fragment": /^#(|\/(\/|[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)$/i,
  // draft3 backwards compat
  "host-name": no.hostname,
  "ip-address": no.ipv4,
  // manually cleaned up from is-my-json-valid, CSS 2.1 colors only per draft03 spec
  color: /^(#[0-9A-Fa-f]{3,6}|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|rgb\(\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*\)|rgb\(\s*(\d?\d%|100%)\s*,\s*(\d?\d%|100%)\s*,\s*(\d?\d%|100%)\s*\))$/
  // style is deliberately unsupported, don't accept untrusted styles
}, zk = {
  // In weak because don't accept regexes from untrusted sources, using them can cause DoS
  // matches ajv + length checks
  // eslint comment outside because we don't want comments in functions, those affect output
  /* eslint-disable no-new */
  regex: (e) => {
    if (e.length > 1e5 || /[^\\]\\Z/.test(e))
      return !1;
    try {
      return new RegExp(e, "u"), !0;
    } catch {
      return !1;
    }
  }
  /* eslint-enable no-new */
};
var Hk = { core: no, extra: Gk, weak: zk };
const Tn = (e, n) => [.../* @__PURE__ */ new Set([...e, ...n])].sort(), xd = (e, n) => e.filter((t) => n.includes(t)), Kk = (e) => (...n) => e(...n.map(ji)), ep = (e) => (...n) => ji(e(...n.map(ji))), bn = (e, n) => e && !e.includes(n), ji = ({ type: e = null, dyn: n = {}, ...t }) => ({
  type: e && [...e].sort(),
  items: bn(e, "array") ? 1 / 0 : t.items || 0,
  properties: bn(e, "object") ? [!0] : [...t.properties || []].sort(),
  patterns: bn(e, "object") ? [] : [...t.patterns || []].sort(),
  required: bn(e, "object") ? [] : [...t.required || []].sort(),
  fullstring: bn(e, "string") || t.fullstring || !1,
  dyn: {
    item: bn(e, "array") ? !1 : n.item || !1,
    items: bn(e, "array") ? 0 : Math.max(t.items || 0, n.items || 0),
    properties: bn(e, "object") ? [] : Tn(t.properties || [], n.properties || []),
    patterns: bn(e, "object") ? [] : Tn(t.patterns || [], n.patterns || [])
  },
  unknown: t.unknown && !(bn(e, "object") && bn(e, "array")) || !1
}), Yk = () => ji({}), np = ep((e, n) => ({
  type: e.type && n.type ? xd(e.type, n.type) : e.type || n.type || null,
  items: Math.max(e.items, n.items),
  properties: Tn(e.properties, n.properties),
  patterns: Tn(e.patterns, n.patterns),
  required: Tn(e.required, n.required),
  fullstring: e.fullstring || n.fullstring,
  dyn: {
    item: e.dyn.item || n.dyn.item,
    items: Math.max(e.dyn.items, n.dyn.items),
    properties: Tn(e.dyn.properties, n.dyn.properties),
    patterns: Tn(e.dyn.patterns, n.dyn.patterns)
  },
  unknown: e.unknown || n.unknown
})), to = (e, n) => n !== !0 && new RegExp(e, "u").test(n), Jk = ({ properties: e, patterns: n }, { properties: t, patterns: r }) => {
  const i = e.filter((l) => t.includes(l) || t.includes(!0) || r.some((f) => to(f, l))), s = t.filter((l) => e.includes(l) || e.includes(!0) || n.some((f) => to(f, l))), o = n.filter((l) => r.includes(l) || t.includes(!0)), a = r.filter((l) => n.includes(l) || e.includes(!0));
  return { properties: Tn(i, s), patterns: Tn(o, a) };
}, tp = ({ properties: e, patterns: n }, { properties: t, patterns: r }) => t.every((i) => e.includes(i) || e.includes(!0) || n.some((s) => to(s, i))) && r.every((i) => n.includes(i) || e.includes(!0)), Xk = ep((e, n) => ({
  type: e.type && n.type ? Tn(e.type, n.type) : null,
  items: Math.min(e.items, n.items),
  ...Jk(e, n),
  required: bn(e.type, "object") && n.required || bn(n.type, "object") && e.required || xd(e.required, n.required),
  fullstring: e.fullstring && n.fullstring,
  dyn: {
    item: e.dyn.item || n.dyn.item,
    items: Math.max(e.dyn.items, n.dyn.items),
    properties: Tn(e.dyn.properties, n.dyn.properties),
    patterns: Tn(e.dyn.patterns, n.dyn.patterns)
  },
  unknown: e.unknown || n.unknown
})), Zk = (e, n) => Object.assign(e, np(e, n)), Vk = Kk(({ unknown: e, items: n, dyn: t, ...r }) => ({
  items: n !== 1 / 0 && (e || t.items > n || t.item),
  properties: !r.properties.includes(!0) && (e || !tp(r, t))
}));
var Qk = { initTracing: Yk, andDelta: np, orDelta: Xk, applyDelta: Zk, isDynamic: Vk, inProperties: tp };
const { format: K, safe: ef, safeand: _i, safenot: Mt, safenotor: yi } = as, xk = Gd, { resolveReference: ar, joinPath: nf, getDynamicAnchors: eS, hasKeywords: tf } = Qd, vi = Hk, { toPointer: Is, ...ke } = sa, { scopeMethods: rp } = Dd, { buildName: js, types: Hn, jsHelpers: nS } = qd, { knownKeywords: tS, schemaVersions: ro, knownVocabularies: rS } = zd, { initTracing: iS, andDelta: rf, orDelta: _t, applyDelta: sS, isDynamic: Kn, inProperties: oS } = Qk, Cs = /* @__PURE__ */ new Set(["^[\\s\\S]*$", "^[\\S\\s]*$", "^[^]*$", "", ".*", "^", "$"]), Ms = ["null", "boolean", "number", "integer", "string"], io = new Map(
  Object.entries({
    boolean: (e) => typeof e == "boolean",
    array: (e) => Array.isArray(e) && Object.getPrototypeOf(e) === Array.prototype,
    object: (e) => e && Object.getPrototypeOf(e) === Object.prototype,
    finite: (e) => Number.isFinite(e),
    natural: (e) => Number.isInteger(e) && e >= 0,
    string: (e) => typeof e == "string",
    jsonval: (e) => ke.deepEqual(e, JSON.parse(JSON.stringify(e)))
  })
), Dt = io.get("object"), sf = (e) => Dt(e) || typeof e == "boolean", aS = (e) => ke.deepEqual(e, { type: [] }), Lt = (e, n) => ro.indexOf(e) > ro.indexOf(`https://json-schema.org/${n}/schema`), lS = (e, n, t = !1, r = !1) => Object.freeze({ parent: e, keyname: n, inKeys: t, number: r }), fS = (e, n, t = !1) => Object.freeze({ parent: e, keyval: n, checked: t }), of = Symbol("evaluatedStatic"), yt = Symbol("optDynamic"), cr = Symbol("optDynAnchors"), Fr = Symbol("optRecAnchors"), uS = (e) => {
  if (typeof e == "boolean")
    return e;
  if (Dt(e) && Object.keys(e).length === 0)
    return !0;
}, so = /* @__PURE__ */ new WeakMap(), cS = (e, n, t, r) => {
  if (n) {
    const i = n.replace(/^http:\/\//, "https://").replace(/#$/, "");
    t(ro.includes(i), "Unexpected schema version:", i), so.set(e, {
      exclusiveRefs: Lt(i, "draft/2019-09"),
      contentValidation: Lt(i, "draft/2019-09"),
      dependentUnsupported: Lt(i, "draft/2019-09"),
      newItemsSyntax: !Lt(i, "draft/2020-12"),
      containsEvaluates: !Lt(i, "draft/2020-12"),
      objectContains: !Lt(i, "draft/next"),
      bookending: Lt(i, "draft/next")
    });
  } else
    t(!r, "[requireSchema] $schema is required"), so.set(e, {});
}, ip = (e, n, t, r, i = "") => {
  const {
    mode: s = "default",
    useDefaults: o = !1,
    removeAdditional: a = !1,
    // supports additionalProperties: false and additionalItems: false
    includeErrors: l = !1,
    allErrors: f = !1,
    contentValidation: u,
    dryRun: c,
    // unused, just for rest siblings
    allowUnusedKeywords: d = t.mode === "lax",
    allowUnreachable: m = t.mode === "lax",
    requireSchema: h = t.mode === "strong",
    requireValidation: g = t.mode === "strong",
    requireStringValidation: v = t.mode === "strong",
    forbidNoopValues: w = t.mode === "strong",
    // e.g. $recursiveAnchor: false (it's false by default)
    complexityChecks: A = t.mode === "strong",
    unmodifiedPrototypes: M = !1,
    // assumes no mangled Object/Array prototypes
    isJSON: W = !1,
    // assume input to be JSON, which e.g. makes undefined impossible
    $schemaDefault: I = null,
    formats: F = {},
    weakFormats: C = t.mode !== "strong",
    extraFormats: D = !1,
    schemas: j,
    // always a Map, produced at wrapper
    ...ee
  } = t, E = {
    ...vi.core,
    ...C ? vi.weak : {},
    ...D ? vi.extra : {},
    ...F
  };
  if (Object.keys(ee).length !== 0)
    throw new Error(`Unknown options: ${Object.keys(ee).join(", ")}`);
  if (!["strong", "lax", "default"].includes(s))
    throw new Error(`Invalid mode: ${s}`);
  if (!l && f)
    throw new Error("allErrors requires includeErrors to be enabled");
  if (h && I)
    throw new Error("requireSchema forbids $schemaDefault");
  if (s === "strong") {
    const rn = { requireValidation: g, requireStringValidation: v, complexityChecks: A, requireSchema: h }, cn = { weakFormats: C, allowUnusedKeywords: d };
    for (const [V, S] of Object.entries(rn))
      if (!S)
        throw new Error(`Strong mode demands ${V}`);
    for (const [V, S] of Object.entries(cn))
      if (S)
        throw new Error(`Strong mode forbids ${V}`);
  }
  const { gensym: X, getref: tn, genref: Xe, genformat: G } = rp(r), pe = (rn) => {
    const cn = [];
    let V = rn;
    for (; V; )
      V.name || cn.unshift(V), V = V.parent || V.errorParent;
    if (cn.every((Mn) => Mn.keyval !== void 0))
      return K("%j", Is(cn.map((Mn) => Mn.keyval)));
    const S = ["#"], sn = () => {
      const Mn = S.map(ke.pointerPart).join("/");
      return S.length = 0, Mn;
    };
    let qn = null;
    for (const { keyname: Mn, keyval: oi, number: Pt } of cn)
      if (Mn) {
        Pt || (r.pointerPart = ke.pointerPart);
        const Zt = Pt ? Mn : K("pointerPart(%s)", Mn), ce = `${sn()}/`;
        qn = qn ? K("%s+%j+%s", qn, ce, Zt) : K("%j+%s", ce, Zt);
      } else
        oi && S.push(oi);
    return S.length > 0 ? K("%s+%j", qn, `/${sn()}`) : qn;
  }, Ge = Xe(e);
  let _n = null;
  const xn = (...rn) => {
    const cn = _n(...rn);
    return xn.errors = _n.errors, cn;
  };
  r[Ge] = xn;
  const Tt = tf(e, ["$ref", "$recursiveRef", "$dynamicRef"]), kt = t[cr] && Tt && tf(e, ["$dynamicAnchor"]), et = () => t[cr] ? K(kt ? ", dynAnchors = []" : ", dynAnchors") : K(""), z = t[Fr] ? K(", recursive") : K(""), R = xk();
  R.write("function validate(data%s%s) {", z, et()), l && R.write("validate.errors = null"), f && R.write("let errorCount = 0"), t[yt] && R.write("validate.evaluatedDynamic = null");
  let Bn = t[cr] ? K(", dynAnchors") : K("");
  kt && (R.write("const dynLocal = [{}]"), Bn = K(", [...dynAnchors, dynLocal[0] || []]"));
  const lp = nS(R, r, lS, { unmodifiedPrototypes: M, isJSON: W }, Cs), { present: nt, forObjectKeys: ii, forArray: ls, patternTest: fs, compare: us } = lp, St = [], un = () => so.get(n), Xt = i ? [i] : [], cs = (rn, cn, V, S, sn, qn = {}, { constProp: Mn } = {}) => {
    const oi = cn.length > 0 && cn[cn.length - 1].prop === V, Pt = () => cn.filter((_) => _.prop === V), Zt = !V.parent || V.checked || V.inKeys && W || Pt().length > 0, ce = js(V), It = (..._) => fS(V, ..._), ct = ({ path: _ = [], prop: $ = V, source: O, suberr: P }) => {
      const b = Is([...sn, ..._]), L = l ? pe($) : null;
      if (l === !0 && rn && O) {
        r.errorMerge = ke.errorMerge;
        const U = [O, b, L];
        f ? (R.write("if (validate.errors === null) validate.errors = []"), R.write("validate.errors.push(...%s.map(e => errorMerge(e, %j, %s)))", ...U)) : R.write("validate.errors = [errorMerge(%s[0], %j, %s)]", ...U);
      } else if (l === !0 && rn) {
        const U = K("{ keywordLocation: %j, instanceLocation: %s }", b, L);
        f ? (R.write("if (%s === null) %s = []", rn, rn), R.write("%s.push(%s)", rn, U)) : R.write("%s = [%s]", rn, U);
      }
      P && ba(P), f ? R.write("errorCount++") : R.write("return false");
    }, yn = (_, $) => R.if(_, () => ct($)), jt = (_, $) => {
      const O = $ !== void 0 ? ` ${JSON.stringify($)}` : "";
      throw new Error(`${_}${O} at ${nf(i, Is(sn))}`);
    }, ie = (_, ...$) => _ || jt(...$), kr = (_, ...$) => ie(s === "lax" || _, ...$), dt = (_, $) => kr(!(S[$] < S[_]), `Invalid ${_} / ${$} combination`), pt = (_, $ = "should be specified") => ie(!g, `[requireValidation] ${_} ${$}`), Ue = (..._) => [...sn, ..._], Vt = (_) => ie(!a && !o, `[removeAdditional/useDefaults] uncertain: ${_}`), la = (_, $) => ie(!A, `[complexityChecks] ${_}`, $), fa = (_) => cS(n, _ || I, ie, h), ae = iS(), ge = (_) => sS(ae, _);
    if (typeof S == "boolean")
      return S === !0 ? (pt("schema = true", "is not allowed"), { stat: ae }) : (yn(Zt || V.inKeys ? !0 : nt(V), {}), ge({ type: [] }), { stat: ae });
    ie(Dt(S), "Schema is not an object");
    for (const _ of Object.keys(S))
      ie(tS.includes(_) || d, "Keyword not supported:", _);
    if (Object.keys(S).length === 0)
      return pt("empty rules node", "is not allowed"), { stat: ae };
    const ht = new Set(Object.keys(S)), ua = /* @__PURE__ */ new Set(), mt = (_, ...$) => {
      ie(ua.has(_) || ht.has(_), "Unexpected double consumption:", _), ie(ke.hasOwn(S, _), "Is not an own property:", _), ie($.every((O) => io.has(O)), "Invalid type used in consume"), ie($.some((O) => io.get(O)(S[_])), "Unexpected type for", _), ht.delete(_);
    }, ca = (_, ...$) => (S[_] !== void 0 && mt(_, ...$), S[_]), Y = (_, $, O, P = {}) => {
      if (S[_] === void 0)
        return !1;
      if (mt(_, ...$), O !== null) {
        const b = O(S[_]);
        b !== null && yn(b, { path: [_], ...P });
      }
      return !0;
    };
    if (S === n ? (fa(ca("$schema", "string")), Y("$vocabulary", ["object"], (_) => {
      for (const [$, O] of Object.entries(_))
        O !== !1 && ie(O === !0 && rS.includes($), "Unknown vocabulary:", $);
      return null;
    })) : un() || fa(n.$schema), un().objectContains)
      for (const _ of ["contains", "minContains", "maxContains"])
        ua.add(_);
    Y("examples", ["array"], null), Y("example", ["jsonval"], null);
    for (const _ of ["title", "description", "$comment"])
      Y(_, ["string"], null);
    for (const _ of ["deprecated", "readOnly", "writeOnly"])
      Y(_, ["boolean"], null);
    Y("$defs", ["object"], null) || Y("definitions", ["object"], null);
    const Sr = (_, $, O) => _ === e ? ef("validate") : tn(_) || ip(_, $, t, r, O), gt = () => Xt.length > 0 ? Xt[Xt.length - 1] : "", fp = Xt.length, da = (_) => (Xt.push(nf(gt(), _)), null);
    (!un().exclusiveRefs || !S.$ref) && (Y("$id", ["string"], da) || Y("id", ["string"], da), Y("$anchor", ["string"], null), Y("$dynamicAnchor", ["string"], null), (S.$recursiveAnchor || !w) && Y("$recursiveAnchor", ["boolean"], (_) => (_ && St.push([S, n, gt()]), null)));
    const pa = kt && (S === e || S.id || S.$id);
    if (pa) {
      const _ = eS(S);
      S !== e && R.write("dynLocal.unshift({})");
      for (const [$, O] of _) {
        const P = ar(n, j, `#${$}`, gt()), [b, L, U] = P[0] || [];
        ie(b === O, `Unexpected $dynamicAnchor resolution: ${$}`);
        const se = Sr(b, L, U);
        R.write("dynLocal[0][%j] = %s", `#${$}`, se);
      }
    }
    const ps = (_) => t[yt] && (S[_] || S[_] === !1 || S === e), vn = Object.freeze({
      item: ps("unevaluatedItems") ? X("evaluatedItem") : null,
      items: ps("unevaluatedItems") ? X("evaluatedItems") : null,
      props: ps("unevaluatedProperties") ? X("evaluatedProps") : null
    }), Re = Object.freeze({
      item: vn.item || qn.item,
      items: vn.items || qn.items,
      props: vn.props || qn.props
    }), ha = () => (!Re.items || ae.items === 1 / 0) && (!Re.props || ae.properties.includes(!0)), Gn = (_) => {
      if (Re.item && _.item && ae.items !== 1 / 0 && R.write("%s.push(%s)", Re.item, _.item), Re.items && _.items > ae.items && R.write("%s.push(%d)", Re.items, _.items), Re.props && (_.properties || []).includes(!0) && !ae.properties.includes(!0))
        R.write("%s[0].push(true)", Re.props);
      else if (Re.props) {
        const $ = (b, L) => oS(ae, { properties: b, patterns: L }), O = (_.properties || []).filter((b) => !$([b], [])), P = (_.patterns || []).filter((b) => !$([], [b]));
        O.length > 0 && R.write("%s[0].push(...%j)", Re.props, O), P.length > 0 && R.write("%s[1].push(...%j)", Re.props, P);
        for (const b of _.propertiesVars || [])
          R.write("%s[0].push(%s)", Re.props, b);
      }
    }, ma = (_, $, O, P) => {
      Kn(ae).items && _.item && $ && R.write("%s.push(...%s)", _.item, $), Kn(ae).items && _.items && O && R.write("%s.push(...%s)", _.items, O), Kn(ae).properties && _.props && P && (R.write("%s[0].push(...%s[0])", _.props, P), R.write("%s[1].push(...%s[1])", _.props, P));
    }, up = () => t[Fr] ? St.length === 0 ? K(", recursive") : K(", recursive || %s", Sr(...St[0])) : K(""), ai = (_, $) => {
      const O = r[_] && r[_][of] || { unknown: !0 };
      ge(O);
      const P = K("%s(%s%s%s)", _, ce, up(), Bn);
      if (!l && ha())
        return K("!%s", P);
      const b = X("res"), L = X("err"), U = X("suberr");
      return l && R.write("const %s = validate.errors", L), R.write("const %s = %s", b, P), l && R.write("const %s = %s.errors", U, _), l && R.write("validate.errors = %s", L), yn(Mt(b), { ...$, source: U }), R.if(b, () => {
        const se = Kn(O).items ? K("%s.evaluatedDynamic[0]", _) : null, he = Kn(O).items ? K("%s.evaluatedDynamic[1]", _) : null, de = Kn(O).properties ? K("%s.evaluatedDynamic[2]", _) : null;
        ma(Re, se, he, de);
      }), null;
    }, ga = (_, $) => _ && _.every((O) => $.includes(O)), _a = (_, $) => $.some((O) => _ === null || _.includes(O)), ya = (..._) => Pt().some(($) => ga($.stat.type, _)), cp = (..._) => ga(ae.type, _) || ya(..._), Qt = (..._) => _a(ae.type, _) && Pt().every(($) => _a($.stat.type, _)), hs = (_, $ = S) => {
      ie(typeof _ == "string", "Invalid pattern:", _), (g || v) && ie(/^\^.*\$$/.test(_), "Should start with ^ and end with $:", _), /([{+*].*[{+*]|\)[{+*]|^[^^].*[{+*].)/.test(_) && $.maxLength === void 0 && la("maxLength should be specified for pattern:", _);
    }, dp = S.pattern && !Cs.has(S.pattern), pp = S.uniqueItems || dp || S.patternProperties || S.format, li = f && pp ? X("prev") : null, fi = (_, $) => R.if(_ && li !== null ? K("errorCount === %s", li) : !0, $), va = () => [...cn, { stat: ae, prop: V }], dn = (..._) => cs(rn, va(), ..._).stat, Ct = (_, ...$) => {
      if ($[0] === V) {
        const b = uS($[1]);
        if (b === !0)
          return { sub: K("true"), delta: {} };
        if (b === !1)
          return { sub: K("false"), delta: { type: [] } };
      }
      const O = X("sub");
      R.write("const %s = (() => {", O), f && R.write("let errorCount = 0");
      const { stat: P } = cs(_, va(), ...$);
      return f ? R.write("return errorCount === 0") : R.write("return true"), R.write("})()"), { sub: O, delta: P };
    }, ms = () => {
      const _ = l && f ? X("suberr") : null;
      return _ && R.write("let %s = null", _), _;
    }, ba = (_) => {
      rn === null || _ === null || R.if(_, () => R.write("%s.push(...%s)", rn, _));
    }, wa = () => {
      if (!a)
        return !1;
      if (a === !0)
        return !0;
      if (a === "keyword")
        return S.removeAdditional ? (mt("removeAdditional", "boolean"), !0) : !1;
      throw new Error(`Invalid removeAdditional: ${a}`);
    }, ui = (_, $, O) => {
      Y(_, ["object", "boolean"], (b) => b === !1 && wa() ? (R.write("if (%s.length > %s) %s.length = %s", ce, $, ce, $), null) : b === !1 && !O ? K("%s.length > %s", ce, $) : (ls(V, $, (L, U) => (O && R.write("if (%s) continue", O(U)), dn(L, b, Ue(_)))), null)) && ge({ items: 1 / 0 });
    }, gs = (_, $) => {
      Y(_, ["object", "boolean"], (P) => (ii(V, (b, L) => {
        R.if($(L), () => {
          P === !1 && wa() ? R.write("delete %s[%s]", ce, L) : dn(b, P, Ue(_));
        });
      }), null)) && ge({ properties: [!0] });
    }, $a = (_, $, O) => _i(
      ...$.map((P) => K("%s !== %j", _, P)),
      ...O.map((P) => Mt(fs(P, _)))
    ), Aa = (_, $) => {
      const O = $.map((b) => new RegExp(b, "u")), P = (b) => _.includes(b) || O.some((L) => L.test(b));
      for (const b of ae.required)
        ie(P(b), "Unknown required property:", b);
    }, Oa = [], hp = () => {
      const _ = (O, P) => K("!(%d %c %s)", O, P, ce);
      Number.isFinite(S.exclusiveMinimum) ? Y("exclusiveMinimum", ["finite"], (O) => _(O, "<")) : (Y("minimum", ["finite"], (O) => _(O, S.exclusiveMinimum ? "<" : "<=")), Y("exclusiveMinimum", ["boolean"], null)), Number.isFinite(S.exclusiveMaximum) ? (Y("exclusiveMaximum", ["finite"], (O) => _(O, ">")), dt("minimum", "exclusiveMaximum"), dt("exclusiveMinimum", "exclusiveMaximum")) : S.maximum !== void 0 && (Y("maximum", ["finite"], (O) => _(O, S.exclusiveMaximum ? ">" : ">=")), Y("exclusiveMaximum", ["boolean"], null), dt("minimum", "maximum"), dt("exclusiveMinimum", "maximum"));
      const $ = S.multipleOf === void 0 ? "divisibleBy" : "multipleOf";
      Y($, ["finite"], (O) => {
        ie(O > 0, `Invalid ${$}:`, O);
        const [P, b] = `${O}`.split("e-"), U = `${P}.`.split(".")[1].length + (b ? Number(b) : 0);
        if (Number.isInteger(O * 2 ** U))
          return K("%s %% %d !== 0", ce, O);
        r.isMultipleOf = ke.isMultipleOf;
        const se = [ce, O, U, Math.round(O * Math.pow(10, U))];
        return K("!isMultipleOf(%s, %d, 1e%d, %d)", ...se);
      });
    }, mp = () => {
      Y("maxLength", ["natural"], (_) => (r.stringLength = ke.stringLength, K("%s.length > %d && stringLength(%s) > %d", ce, _, ce, _))), Y("minLength", ["natural"], (_) => (r.stringLength = ke.stringLength, K("%s.length < %d || stringLength(%s) < %d", ce, _, ce, _))), dt("minLength", "maxLength"), fi(!0, () => {
        const _ = (b, L, U = E) => {
          const se = typeof b == "string" && ke.hasOwn(U, b);
          ie(se, "Unrecognized format used:", b);
          const he = U[b], de = he instanceof RegExp || typeof he == "function";
          return ie(de, "Invalid format used:", b), he instanceof RegExp ? (ke.hasOwn(F, b) && hs(he.source), K("!%s.test(%s)", G(he), L)) : K("!%s(%s)", G(he), L);
        };
        Y("format", ["string"], (b) => (ge({ fullstring: !0 }), _(b, ce))), Y("pattern", ["string"], (b) => (hs(b), ge({ fullstring: !0 }), Cs.has(b) ? null : Mt(fs(b, ce)))), ie(S.contentSchema !== !1, "contentSchema cannot be set to false");
        const $ = u === void 0 ? un().contentValidation : u, O = S.contentEncoding || S.contentMediaType || S.contentSchema;
        if (ie(!O || $ || d, '"content*" keywords are disabled by default per spec, enable with { contentValidation = true } option (see doc/Options.md for more info)'), O && $) {
          const b = X("dec");
          S.contentMediaType && R.write("let %s = %s", b, ce), S.contentEncoding === "base64" ? (yn(_("base64", ce, vi.extra), { path: ["contentEncoding"] }), S.contentMediaType && (r.deBase64 = ke.deBase64, R.write("try {"), R.write("%s = deBase64(%s)", b, b)), mt("contentEncoding", "string")) : ie(!S.contentEncoding, "Unknown contentEncoding:", S.contentEncoding);
          let L = !1;
          if (S.contentMediaType === "application/json" ? (R.write("try {"), R.write("%s = JSON.parse(%s)", b, b), L = !0, mt("contentMediaType", "string")) : ie(!S.contentMediaType, "Unknown contentMediaType:", S.contentMediaType), S.contentSchema) {
            ie(L, "contentSchema requires contentMediaType application/json");
            const U = Object.freeze({ name: b, errorParent: V });
            dn(U, S.contentSchema, Ue("contentSchema")), mt("contentSchema", "object", "array"), ge({ fullstring: !0 });
          }
          S.contentMediaType && (R.write("} catch (e) {"), ct({ path: ["contentMediaType"] }), R.write("}"), S.contentEncoding && (R.write("} catch (e) {"), ct({ path: ["contentEncoding"] }), R.write("}")));
        }
      });
    }, gp = () => {
      Y("maxItems", ["natural"], (b) => {
        const L = un().newItemsSyntax ? "prefixItems" : "items";
        return Array.isArray(S[L]) && S[L].length > b && jt(`Invalid maxItems: ${b} is less than ${L} array length`), K("%s.length > %d", ce, b);
      }), Y("minItems", ["natural"], (b) => K("%s.length < %d", ce, b)), dt("minItems", "maxItems");
      const _ = (b) => {
        for (let L = 0; L < b.length; L++)
          dn(It(L), b[L], Ue(`${L}`));
        return ge({ items: b.length }), null;
      };
      un().newItemsSyntax ? (Y("prefixItems", ["array"], _), ui("items", K("%d", (S.prefixItems || []).length))) : Array.isArray(S.items) ? (Y("items", ["array"], _), ui("additionalItems", K("%d", S.items.length))) : Y("items", ["object", "boolean"], (b) => (ls(V, K("0"), (L) => dn(L, b, Ue("items"))), ge({ items: 1 / 0 }), null)), Ra((b) => {
        ls(V, K("0"), (L, U) => {
          b(L, () => {
            ge({ dyn: { item: !0 } }), Gn({ item: U });
          });
        });
      });
      const $ = (b) => {
        if (!Dt(b))
          return !1;
        if (b.enum || ke.hasOwn(b, "const") || b.type && (Array.isArray(b.type) ? b.type : [b.type]).every((U) => Ms.includes(U)))
          return !0;
        if (b.$ref) {
          const [L] = ar(n, j, b.$ref, gt())[0] || [];
          if ($(L))
            return !0;
        }
        return !1;
      }, O = (b) => b === !1 || $(b), P = () => !!(S.maxItems !== void 0 || O(S.items) || Array.isArray(S.items) && O(S.additionalItems));
      fi(!0, () => {
        Y("uniqueItems", ["boolean"], (b) => b === !1 ? null : (P() || la("maxItems should be specified for non-primitive uniqueItems"), Object.assign(r, { unique: ke.unique, deepEqual: ke.deepEqual }), K("!unique(%s)", ce)));
      });
    }, xt = (_) => !f && (ae.required.includes(_) || Pt().some(($) => $.stat.required.includes(_))), _p = () => {
      const _ = K("Object.keys(%s).length", ce);
      Y("maxProperties", ["natural"], ($) => K("%s > %d", _, $)), Y("minProperties", ["natural"], ($) => K("%s < %d", _, $)), dt("minProperties", "maxProperties"), Y("propertyNames", ["object", "boolean"], ($) => (ii(V, (O, P) => {
        const b = typeof $ == "object" && !$.$ref ? { type: "string", ...$ } : $, L = Object.freeze({ name: P, errorParent: O, type: "string" });
        dn(L, b, Ue("propertyNames"));
      }), null)), Y("required", ["array"], ($) => {
        for (const O of $) {
          if (xt(O))
            continue;
          const P = It(O);
          yn(Mt(nt(P)), { path: ["required"], prop: P });
        }
        return ge({ required: $ }), null;
      });
      for (const $ of ["dependencies", "dependentRequired", "dependentSchemas"])
        $ !== "dependencies" && un().dependentUnsupported || Y($, ["object"], (O) => {
          for (const P of Object.keys(O)) {
            const b = typeof O[P] == "string" ? [O[P]] : O[P], L = It(P, xt(P));
            if (Array.isArray(b) && $ !== "dependentSchemas") {
              const U = b.filter((de) => !xt(de)).map((de) => nt(It(de))), se = Mt(_i(...U)), he = { path: [$, P] };
              U.length === 0 || (L.checked ? (yn(se, he), ge({ required: b })) : yn(_i(nt(L), se), he));
            } else
              sf(b) && $ !== "dependentRequired" ? (Vt($), R.if(L.checked ? !0 : nt(L), () => {
                const U = dn(V, b, Ue($, P), Re);
                ge(_t({}, U)), Gn(U);
              })) : jt(`Unexpected ${$} entry`);
          }
          return null;
        });
      Y("propertyDependencies", ["object"], ($) => {
        for (const [O, P] of Object.entries($)) {
          ie(Dt(P), "propertyDependencies must be an object"), Vt("propertyDependencies");
          const b = It(O, xt(O));
          R.if(b.checked ? !0 : nt(b), () => {
            for (const [L, U] of Object.entries(P))
              ie(sf(U), "propertyDependencies must contain schemas"), R.if(us(js(b), L), () => {
                const se = dn(V, U, Ue("propertyDependencies", O, L), Re);
                ge(_t({}, se)), Gn(se);
              });
          });
        }
        return null;
      }), Y("properties", ["object"], ($) => {
        for (const O of Object.keys($))
          Mn !== O && dn(It(O, xt(O)), $[O], Ue("properties", O));
        return ge({ properties: Object.keys($) }), null;
      }), fi(S.patternProperties, () => {
        if (Y("patternProperties", ["object"], ($) => (ii(V, (O, P) => {
          for (const b of Object.keys($))
            hs(b, S.propertyNames || {}), R.if(fs(b, P), () => {
              dn(O, $[b], Ue("patternProperties", b));
            });
        }), ge({ patterns: Object.keys($) }), null)), S.additionalProperties || S.additionalProperties === !1) {
          const $ = Object.keys(S.properties || {}), O = Object.keys(S.patternProperties || {});
          S.additionalProperties === !1 && Oa.push(() => Aa($, O)), gs("additionalProperties", (b) => $a(b, $, O));
        }
      }), un().objectContains && Ra(($) => {
        ii(V, (O, P) => {
          $(O, () => {
            ge({ dyn: { properties: [!0] } }), Gn({ propertiesVars: [P] });
          });
        });
      });
    }, yp = () => {
      const _ = Y("const", ["jsonval"], (O) => Mt(us(ce, O)));
      if (_ && !d)
        return !0;
      const $ = Y("enum", ["array"], (O) => {
        const P = O.filter((L) => L && typeof L == "object"), b = O.filter((L) => !(L && typeof L == "object"));
        return yi(...[...b, ...P].map((L) => us(ce, L)));
      });
      return _ || $;
    }, Ra = (_) => {
      Y("contains", ["object", "boolean"], () => {
        Vt("contains"), un().objectContains && Qt("array") && Qt("object") && pt("possible type confusion in 'contains',", "forbid 'object' or 'array'");
        const $ = X("passes");
        R.write("let %s = 0", $);
        const O = ms();
        return _((P, b) => {
          const { sub: L } = Ct(O, P, S.contains, Ue("contains"));
          R.if(L, () => {
            R.write("%s++", $), un().containsEvaluates && (ie(!a, `Can't use removeAdditional with draft2020+ "contains"`), b());
          });
        }), Y("minContains", ["natural"], (P) => K("%s < %d", $, P), { suberr: O }) || yn(K("%s < 1", $), { path: ["contains"], suberr: O }), Y("maxContains", ["natural"], (P) => K("%s > %d", $, P)), dt("minContains", "maxContains"), null;
      });
    }, vp = () => {
      Y("not", ["object", "boolean"], (b) => Ct(null, V, b, Ue("not")).sub), S.not && Vt("not"), (S.then || S.then === !1 || S.else || S.else === !1 || d) && Y("if", ["object", "boolean"], (b) => {
        Vt("if/then/else");
        const { sub: L, delta: U } = Ct(null, V, b, Ue("if"), Re);
        let se, he, de, ve;
        return Y("else", ["object", "boolean"], (Ae) => (se = () => {
          de = dn(V, Ae, Ue("else"), Re), Gn(de);
        }, null)), Y("then", ["object", "boolean"], (Ae) => (he = () => {
          ve = dn(V, Ae, Ue("then"), Re), Gn(rf(U, ve));
        }, null)), !he && !aS(U) && (he = () => Gn(U)), R.if(L, he, se), ge(_t(de || {}, rf(U, ve || {}))), null;
      });
      const $ = (b, L = "allOf") => {
        ie(b.length > 0, `${L} cannot be empty`);
        for (const [U, se] of Object.entries(b))
          ge(dn(V, se, Ue(L, U), Re));
        return null;
      };
      Y("allOf", ["array"], (b) => $(b));
      let O = null;
      Y("discriminator", ["object"], (b) => {
        const L = /* @__PURE__ */ new Set(), U = (je, nr, tr) => ie(je, `[discriminator]: ${nr}`, tr), { propertyName: se, mapping: he, ...de } = b, ve = It(se);
        U(se && !S.oneOf != !S.anyOf, "need propertyName, oneOf OR anyOf"), U(Object.keys(de).length === 0, 'only "propertyName" and "mapping" are supported');
        const Ae = (je) => Dt(je) ? Object.keys(je).length : null;
        return O = (je, nr) => {
          const tr = () => {
            R.write("switch (%s) {", js(ve));
            let rr;
            for (const [$p, ir] of Object.entries(je)) {
              const { const: _s, enum: ka, ...Ap } = (ir.properties || {})[se] || {};
              let Ir = _s !== void 0 ? [_s] : ka;
              if (!Ir && ir.$ref) {
                const [zn] = ar(n, j, ir.$ref, gt())[0] || [];
                ie(Dt(zn), "failed to resolve $ref:", ir.$ref);
                const jr = (zn.properties || {})[se] || {};
                Ir = jr.const !== void 0 ? [jr.const] : jr.enum;
              }
              const Op = Array.isArray(Ir) && Ir.length > 0;
              U(Op, "branches should have unique string const or enum values for [propertyName]");
              const Rp = Object.keys(Ap).length === 0 && (!_s || !ka);
              U(Rp, "only const OR enum rules are allowed on [propertyName] in branches");
              for (const zn of Ir) {
                const jr = !he || ke.hasOwn(he, zn) && he[zn] === ir.$ref;
                U(jr, "mismatching mapping for", zn);
                const Ep = typeof zn == "string" && !L.has(zn);
                U(Ep, "const/enum values for [propertyName] should be unique strings"), L.add(zn), R.write("case %j:", zn);
              }
              const ys = dn(V, ir, Ue(nr, $p), Re, { constProp: se });
              Gn(ys), rr = rr ? _t(rr, ys) : ys, R.write("break");
            }
            U(he === void 0 || Ae(he) === L.size, "mismatching mapping size"), ge(rr), R.write("default:"), ct({ path: [nr] }), R.write("}");
          }, Pr = () => {
            if (xt(se))
              tr();
            else {
              const rr = ["discriminator", "propertyName"];
              R.if(nt(ve), tr, () => ct({ path: rr, prop: ve }));
            }
          };
          return f || !ke.deepEqual(ae.type, ["object"]) ? R.if(Hn.get("object")(ce), Pr, () => ct({ path: ["discriminator"] })) : Pr(), U(ke.deepEqual(ae.type, ["object"]), "has to be checked for type:", "object"), U(ae.required.includes(se), "propertyName should be placed in required:", se), null;
        }, null;
      });
      const P = (b, L) => {
        const U = L.map((de) => de.type || (Array.isArray(de.const) ? "array" : typeof de.const)), se = U.filter((de) => !Ms.includes(de) && de !== "array").length, he = U.filter((de) => !Ms.includes(de) && de !== "object").length;
        (se > 1 || he > 1) && Vt(`${b}, use discriminator to make it certain`);
      };
      Y("anyOf", ["array"], (b) => {
        if (ie(b.length > 0, "anyOf cannot be empty"), b.length === 1)
          return $(b);
        if (O)
          return O(b, "anyOf");
        const L = ms();
        if (!ha()) {
          P("anyOf", b);
          const ve = Object.entries(b).map(
            ([Ae, je]) => Ct(L, V, je, Ue("anyOf", Ae), Re)
          );
          ge(ve.map((Ae) => Ae.delta).reduce((Ae, je) => _t(Ae, je))), yn(yi(...ve.map(({ sub: Ae }) => Ae)), { path: ["anyOf"], suberr: L });
          for (const { delta: Ae, sub: je } of ve)
            R.if(je, () => Gn(Ae));
          return null;
        }
        const U = b.filter((ve) => ke.hasOwn(ve, "const")), se = b.filter((ve) => !ke.hasOwn(ve, "const"));
        P("anyOf", se);
        const he = [...U, ...se];
        let de;
        if (un().exclusiveRefs) {
          let ve = () => ct({ path: ["anyOf"], suberr: L });
          for (const [Ae, je] of Object.entries(he).reverse()) {
            const nr = ve;
            ve = () => {
              const { sub: tr, delta: Pr } = Ct(L, V, je, Ue("anyOf", Ae));
              R.if(Mt(tr), nr), de = de ? _t(de, Pr) : Pr;
            };
          }
          ve();
        } else {
          const ve = Object.entries(b).map(
            ([Ae, je]) => Ct(L, V, je, Ue("anyOf", Ae), Re)
          );
          de = ve.map((Ae) => Ae.delta).reduce((Ae, je) => _t(Ae, je)), yn(yi(...ve.map(({ sub: Ae }) => Ae)), { path: ["anyOf"], suberr: L });
        }
        return ge(de), null;
      }), Y("oneOf", ["array"], (b) => {
        if (ie(b.length > 0, "oneOf cannot be empty"), b.length === 1)
          return $(b);
        if (O)
          return O(b, "oneOf");
        P("oneOf", b);
        const L = X("passes");
        R.write("let %s = 0", L);
        const U = ms();
        let se, he = 0;
        const de = Object.entries(b).map(([ve, Ae]) => {
          !l && he++ > 1 && yn(K("%s > 1", L), { path: ["oneOf"] });
          const je = Ct(U, V, Ae, Ue("oneOf", ve), Re);
          return R.if(je.sub, () => R.write("%s++", L)), se = se ? _t(se, je.delta) : je.delta, je;
        });
        ge(se), yn(K("%s !== 1", L), { path: ["oneOf"] }), R.if(K("%s === 0", L), () => ba(U));
        for (const ve of de)
          R.if(ve.sub, () => Gn(ve.delta));
        return null;
      });
    }, er = (_, $, O) => {
      const [P, b] = [R.size(), ht.size];
      R.if(cp(...$) ? !0 : O, _), (P !== R.size() || b !== ht.size) && ie(Qt(...$), "Unexpected rules in type", S.type);
    }, bp = () => {
      if (ae.items === 1 / 0)
        S.unevaluatedItems === !1 && mt("unevaluatedItems", "boolean");
      else if (S.unevaluatedItems || S.unevaluatedItems === !1)
        if (Kn(ae).items) {
          if (!t[yt])
            throw new Error("Dynamic unevaluated tracing is not enabled");
          const _ = K("Math.max(%d, ...%s)", ae.items, Re.items), $ = (O) => K("%s.includes(%s)", Re.item, O);
          ui("unevaluatedItems", _, un().containsEvaluates ? $ : null);
        } else
          ui("unevaluatedItems", K("%d", ae.items));
    }, wp = () => {
      fi(ae.patterns.length > 0 || ae.dyn.patterns.length > 0 || ae.unknown, () => {
        if (ae.properties.includes(!0))
          S.unevaluatedProperties === !1 && mt("unevaluatedProperties", "boolean");
        else if (S.unevaluatedProperties || S.unevaluatedProperties === !1) {
          const _ = ($) => $a($, ae.properties, ae.patterns);
          if (Kn(ae).properties) {
            if (!t[yt])
              throw new Error("Dynamic unevaluated tracing is not enabled");
            r.propertyIn = ke.propertyIn;
            const $ = (P) => K("!propertyIn(%s, %s)", P, Re.props);
            gs("unevaluatedProperties", (P) => _i(_(P), $(P)));
          } else
            S.unevaluatedProperties === !1 && Aa(ae.properties, ae.patterns), gs("unevaluatedProperties", _);
        }
      });
    }, Ea = () => {
      if (li !== null && R.write("const %s = errorCount", li), yp()) {
        const _ = [...Hn.keys()];
        if (ge({ properties: [!0], items: 1 / 0, type: _, fullstring: !0 }), !d) {
          ie(ht.size === 0, "Unexpected keywords mixed with const or enum:", [...ht]);
          return;
        }
      }
      er(hp, ["number", "integer"], Hn.get("number")(ce)), er(mp, ["string"], Hn.get("string")(ce)), er(gp, ["array"], Hn.get("array")(ce)), er(_p, ["object"], Hn.get("object")(ce)), vp(), er(bp, ["array"], Hn.get("array")(ce)), er(wp, ["object"], Hn.get("object")(ce));
      for (const _ of Oa)
        _();
      ma(qn, vn.item, vn.items, vn.props);
    }, Ta = () => {
      if (vn.item && R.write("const %s = []", vn.item), vn.items && R.write("const %s = [0]", vn.items), vn.props && R.write("const %s = [[], []]", vn.props), Y("$ref", ["string"], ($) => {
        const O = ar(n, j, $, gt()), [P, b, L] = O[0] || [];
        if (!P && P !== !1 && jt("failed to resolve $ref:", $), P.type) {
          const U = Array.isArray(P.type) ? P.type : [P.type];
          ge({ type: U }), g && (U.includes("array") && ge({ items: 1 / 0 }), U.includes("object") && ge({ properties: [!0] }));
        }
        return ai(Sr(P, b, L), { path: ["$ref"] });
      }), un().exclusiveRefs && (ie(!t[yt], "unevaluated* is supported only on draft2019-09 and above"), S.$ref))
        return;
      Y("$recursiveRef", ["string"], ($) => {
        if (!t[Fr])
          throw new Error("Recursive anchors are not enabled");
        ie($ === "#", 'Behavior of $recursiveRef is defined only for "#"');
        const O = ar(n, j, "#", gt()), [P, b, L] = O[0];
        kr(P.$recursiveAnchor, "$recursiveRef without $recursiveAnchor");
        const U = Sr(P, b, L), se = P.$recursiveAnchor ? K("(recursive || %s)", U) : U;
        return ai(se, { path: ["$recursiveRef"] });
      }), Y("$dynamicRef", ["string"], ($) => {
        if (!t[cr])
          throw new Error("Dynamic anchors are not enabled");
        kr(/^[^#]*#[a-zA-Z0-9_-]+$/.test($), "Unsupported $dynamicRef format");
        const O = $.replace(/^[^#]+/, ""), P = ar(n, j, $, gt());
        if (!P[0] && !un().bookending) {
          kr(!1, "$dynamicRef bookending resolution failed (even though not required)"), r.dynamicResolve = ke.dynamicResolve;
          const ve = K("dynamicResolve(dynAnchors || [], %j)", O);
          return ai(ve, { path: ["$dynamicRef"] });
        }
        ie(P[0], "$dynamicRef bookending resolution failed", $);
        const [b, L, U] = P[0], se = b.$dynamicAnchor && `#${b.$dynamicAnchor}` === O;
        kr(se, "$dynamicRef without $dynamicAnchor in the same scope");
        const he = Sr(b, L, U);
        r.dynamicResolve = ke.dynamicResolve;
        const de = se ? K("(dynamicResolve(dynAnchors || [], %j) || %s)", O, he) : he;
        return ai(de, { path: ["$dynamicRef"] });
      });
      let _ = null;
      Y("type", ["string", "array"], ($) => {
        const O = Array.isArray($) ? $ : [$];
        for (const b of O)
          ie(typeof b == "string" && Hn.has(b), "Unknown type:", b);
        if (V.type)
          return ie(ke.deepEqual(O, [V.type]), "One type allowed:", V.type), ge({ type: [V.type] }), null;
        if (ya(...O))
          return null;
        const P = O.filter((b) => Qt(b));
        return P.length === 0 && jt("No valid types possible"), ge({ type: O }), _ = yi(...P.map((b) => Hn.get(b)(ce))), null;
      }), _ && f ? R.if(_, () => ct({ path: ["type"] }), Ea) : (_ && yn(_, { path: ["type"] }), Ea()), ae.items < 1 / 0 && S.maxItems <= ae.items && ge({ items: 1 / 0 });
    };
    if (S.default !== void 0 && o) {
      Zt && jt("Can not apply default value here (e.g. at root)");
      const _ = ca("default", "jsonval");
      R.if(nt(V), Ta, () => R.write("%s = %j", ce, _));
    } else
      Y("default", ["jsonval"], null), R.if(Zt ? !0 : nt(V), Ta);
    if (Xt.length = fp, St[0] && St[St.length - 1][0] === S && St.pop(), pa && S !== e && R.write("dynLocal.shift()"), m || ie(!R.optimizedOut, "some checks are never reachable"), oi) {
      const _ = ["not", "if", "then", "else"].includes(sn[sn.length - 1]), $ = ["oneOf", "anyOf", "allOf"].includes(sn[sn.length - 2]), O = ["dependencies", "dependentSchemas"].includes(sn[sn.length - 2]), P = ["propertyDependencies"].includes(sn[sn.length - 3]);
      ie(_ || $ || O || P, "Unexpected logical path");
    } else if (!sn.includes("not")) {
      if (ae.type || pt("type"), Qt("array") && ae.items !== 1 / 0 && pt(S.items ? "additionalItems or unevaluatedItems" : "items rule"), Qt("object") && !ae.properties.includes(!0) && pt("additionalProperties or unevaluatedProperties"), typeof S.propertyNames != "object")
        for (const _ of ["additionalProperties", "unevaluatedProperties"])
          S[_] && pt(`wild-card ${_}`, "requires propertyNames");
      !ae.fullstring && v && jt("[requireStringValidation] pattern, format or contentSchema should be specified for strings, use pattern: ^[\\s\\S]*$ to opt-out");
    }
    return S.properties && !S.required && pt("if properties is used, required"), ie(ht.size === 0 || d, "Unprocessed keywords:", [...ht]), { stat: ae, local: vn };
  }, { stat: ds, local: si } = cs(K("validate.errors"), [], { name: ef("data") }, e, []);
  if (t[yt] && (Kn(ds).items || Kn(ds).properties)) {
    if (!si)
      throw new Error("Failed to trace dynamic properties");
    R.write("validate.evaluatedDynamic = [%s, %s, %s]", si.item, si.items, si.props);
  }
  return f ? R.write("return errorCount === 0") : R.write("return true"), R.write("}"), _n = R.makeFunction(r), _n[of] = ds, delete r[Ge], r[Ge] = _n, Ge;
}, Ei = (e, n) => {
  if (!Array.isArray(e))
    throw new Error("Expected an array of schemas");
  try {
    const t = /* @__PURE__ */ Object.create(null), { getref: r } = rp(t);
    return { scope: t, refs: e.map((i) => r(i) || ip(i, i, n, t)) };
  } catch (t) {
    if (!n[yt] && t.message === "Dynamic unevaluated tracing is not enabled")
      return Ei(e, { ...n, [yt]: !0 });
    if (!n[cr] && t.message === "Dynamic anchors are not enabled")
      return Ei(e, { ...n, [cr]: !0 });
    if (!n[Fr] && t.message === "Recursive anchors are not enabled")
      return Ei(e, { ...n, [Fr]: !0 });
    throw t;
  }
};
var dS = { compile: Ei };
const pS = Gd, { buildSchemas: hS } = Qd, { compile: mS } = dS, { deepEqual: aa } = sa, gS = (e) => function n(t) {
  if (!aa(t, JSON.parse(JSON.stringify(t))))
    return n.errors = [{ instanceLocation: "#", error: "not JSON compatible" }], !1;
  const r = e(t);
  return n.errors = e.errors, r;
}, _S = (e) => (n) => aa(n, JSON.parse(JSON.stringify(n))) && e(n), sp = (e, { parse: n = !1, multi: t = !1, jsonCheck: r = !1, isJSON: i = !1, schemas: s = [], ...o } = {}) => {
  if (r && i)
    throw new Error("Can not specify both isJSON and jsonCheck options");
  if (n && (r || i))
    throw new Error("jsonCheck and isJSON options are not applicable in parser mode");
  const a = n ? "strong" : "default", l = i || r || n, f = t ? e : [e], u = { mode: a, ...o, schemas: hS(s, f), isJSON: l }, { scope: c, refs: d } = mS(f, u);
  if (o.dryRun)
    return;
  const m = pS();
  if (n ? c.parseWrap = o.includeErrors ? yS : vS : r && (c.deepEqual = aa, c.jsonCheckWrap = o.includeErrors ? gS : _S), t) {
    m.write("[");
    for (const g of d.slice(0, -1))
      m.write("%s,", g);
    d.length > 0 && m.write("%s", d[d.length - 1]), m.write("]"), n ? m.write(".map(parseWrap)") : r && m.write(".map(jsonCheckWrap)");
  } else
    n ? m.write("parseWrap(%s)", d[0]) : r ? m.write("jsonCheckWrap(%s)", d[0]) : m.write("%s", d[0]);
  const h = m.makeFunction(c);
  return h.toModule = ({ semi: g = !0 } = {}) => m.makeModule(c) + (g ? ";" : ""), h.toJSON = () => e, h;
}, yS = (e) => (n) => {
  if (typeof n != "string")
    return { valid: !1, error: "Input is not a string" };
  try {
    const t = JSON.parse(n);
    if (!e(t)) {
      const { keywordLocation: r, instanceLocation: i } = e.errors[0];
      return { valid: !1, error: `JSON validation failed for ${r.slice(r.lastIndexOf("/") + 1)} at ${i}`, errors: e.errors };
    }
    return { valid: !0, value: t };
  } catch ({ message: t }) {
    return { valid: !1, error: t };
  }
}, vS = (e) => (n) => {
  if (typeof n != "string")
    return { valid: !1 };
  try {
    const t = JSON.parse(n);
    return e(t) ? { valid: !0, value: t } : { valid: !1 };
  } catch {
    return { valid: !1 };
  }
}, bS = function(e, { parse: n = !0, ...t } = {}) {
  if (!n)
    throw new Error("can not disable parse in parser");
  return sp(e, { parse: n, ...t });
};
var wS = { validator: sp, parser: bS };
const op = Symbol(), ap = Symbol();
function af(e, n, t) {
  const r = e.slice();
  return r[6] = n[t], r[8] = t, r;
}
function lf(e) {
  let n, t = (
    /*enumText*/
    (e[4] || [])[
      /*idx*/
      e[8]
    ] + ""
  ), r, i;
  return {
    c() {
      n = N("option"), r = nn(t), n.__value = i = /*enumVal*/
      e[6], n.value = n.__value;
    },
    m(s, o) {
      k(s, n, o), B(n, r);
    },
    p(s, o) {
      o & /*enumText*/
      16 && t !== (t = /*enumText*/
      (s[4] || [])[
        /*idx*/
        s[8]
      ] + "") && hn(r, t), o & /*enumVals*/
      8 && i !== (i = /*enumVal*/
      s[6]) && (n.__value = i, n.value = n.__value);
    },
    d(s) {
      s && T(n);
    }
  };
}
function $S(e) {
  let n, t, r, i, s, o, a, l = (
    /*enumVals*/
    e[3]
  ), f = [];
  for (let u = 0; u < l.length; u += 1)
    f[u] = lf(af(e, l, u));
  return {
    c() {
      n = N("select"), t = N("option");
      for (let u = 0; u < f.length; u += 1)
        f[u].c();
      t.__value = "", t.value = t.__value, y(n, "id", r = /*params*/
      e[0].path.join(".")), y(n, "name", i = /*params*/
      e[0].path.join(".")), n.disabled = s = /*schema*/
      e[1].readOnly || /*params*/
      e[0].containerReadOnly;
    },
    m(u, c) {
      k(u, n, c), B(n, t);
      for (let d = 0; d < f.length; d += 1)
        f[d] && f[d].m(n, null);
      Ia(
        n,
        /*value*/
        e[2]
      ), o || (a = H(
        n,
        "change",
        /*change_handler*/
        e[5]
      ), o = !0);
    },
    p(u, c) {
      if (c & /*enumVals, enumText*/
      24) {
        l = /*enumVals*/
        u[3];
        let d;
        for (d = 0; d < l.length; d += 1) {
          const m = af(u, l, d);
          f[d] ? f[d].p(m, c) : (f[d] = lf(m), f[d].c(), f[d].m(n, null));
        }
        for (; d < f.length; d += 1)
          f[d].d(1);
        f.length = l.length;
      }
      c & /*params*/
      1 && r !== (r = /*params*/
      u[0].path.join(".")) && y(n, "id", r), c & /*params*/
      1 && i !== (i = /*params*/
      u[0].path.join(".")) && y(n, "name", i), c & /*value, enumVals*/
      12 && Ia(
        n,
        /*value*/
        u[2]
      ), c & /*schema, params*/
      3 && s !== (s = /*schema*/
      u[1].readOnly || /*params*/
      u[0].containerReadOnly) && (n.disabled = s);
    },
    d(u) {
      u && T(n), Yr(f, u), o = !1, a();
    }
  };
}
function AS(e) {
  let n, t, r;
  var i = (
    /*params*/
    e[0].components.fieldWrapper
  );
  function s(o) {
    return {
      props: {
        params: (
          /*params*/
          o[0]
        ),
        schema: (
          /*schema*/
          o[1]
        ),
        $$slots: { default: [$S] },
        $$scope: { ctx: o }
      }
    };
  }
  return i && (n = Le(i, s(e))), {
    c() {
      n && Oe(n.$$.fragment), t = Ce();
    },
    m(o, a) {
      n && be(n, o, a), k(o, t, a), r = !0;
    },
    p(o, [a]) {
      const l = {};
      if (a & /*params*/
      1 && (l.params = /*params*/
      o[0]), a & /*schema*/
      2 && (l.schema = /*schema*/
      o[1]), a & /*$$scope, params, value, schema, enumVals, enumText*/
      543 && (l.$$scope = { dirty: a, ctx: o }), a & /*params*/
      1 && i !== (i = /*params*/
      o[0].components.fieldWrapper)) {
        if (n) {
          Fe();
          const f = n;
          x(f.$$.fragment, 1, 0, () => {
            we(f, 1);
          }), We();
        }
        i ? (n = Le(i, s(o)), Oe(n.$$.fragment), J(n.$$.fragment, 1), be(n, t.parentNode, t)) : n = null;
      } else
        i && n.$set(l);
    },
    i(o) {
      r || (n && J(n.$$.fragment, o), r = !0);
    },
    o(o) {
      n && x(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && T(t), n && we(n, o);
    }
  };
}
function OS(e, n, t) {
  let { params: r } = n, { schema: i } = n, { value: s } = n, o, a;
  const l = (f) => r.pathChanged(r.path, f.currentTarget.value || void 0);
  return e.$$set = (f) => {
    "params" in f && t(0, r = f.params), "schema" in f && t(1, i = f.schema), "value" in f && t(2, s = f.value);
  }, e.$$.update = () => {
    e.$$.dirty & /*schema*/
    2 && t(3, o = i.enum), e.$$.dirty & /*schema*/
    2 && t(4, a = i.enumText || i.enum);
  }, [r, i, s, o, a, l];
}
class RS extends Ye {
  constructor(n) {
    super(), Ke(this, n, OS, AS, ze, { params: 0, schema: 1, value: 2 });
  }
}
const Ci = (e, n, t) => () => {
  n.pathChanged(n.path, [
    ...t || [],
    ia(e.items)
  ]);
}, ES = (e, n, t) => () => {
  const r = t || [];
  if (typeof e.minItems != "number" || r.length >= e.minItems)
    return;
  const i = new Array(e.minItems - r.length).fill(ia(e.items));
  n.pathChanged(n.path, [
    ...r,
    ...i
  ]);
}, Mi = (e, n, t) => () => {
  n.pathChanged(n.path, [
    ...t.slice(0, e),
    ...t.slice(e + 1)
  ], "delete", e.toString());
}, Li = (e, n, t) => () => {
  n.pathChanged(n.path, [
    ...t.slice(0, e),
    t[e],
    JSON.parse(JSON.stringify(t[e])),
    ...t.slice(e + 1)
  ], "duplicate", (e + 1).toString());
}, Ni = (e, n, t) => () => {
  e > 0 && n.pathChanged(n.path, [
    ...t.slice(0, e - 1),
    t[e],
    t[e - 1],
    ...t.slice(e + 1)
  ], "up", (e - 1).toString());
}, Fi = (e, n, t) => () => {
  e < t.length - 1 && n.pathChanged(n.path, [
    ...t.slice(0, e),
    t[e + 1],
    t[e],
    ...t.slice(e + 2)
  ], "down", (e + 1).toString());
};
function ff(e, n, t) {
  const r = e.slice();
  return r[13] = n[t], r[15] = t, r;
}
function uf(e) {
  let n, t, r, i, s, o = (
    /*params*/
    (e[1].collapsible || /*legendText*/
    e[9]) && cf(e)
  ), a = (
    /*collapserOpenState*/
    e[3] === "open" && hf(e)
  );
  return {
    c() {
      n = N("fieldset"), o && o.c(), t = Q(), a && a.c(), y(n, "name", r = /*params*/
      e[1].path.join(".")), y(n, "class", i = "subset array depth-" + /*params*/
      e[1].path.length);
    },
    m(l, f) {
      k(l, n, f), o && o.m(n, null), B(n, t), a && a.m(n, null), s = !0;
    },
    p(l, f) {
      /*params*/
      l[1].collapsible || /*legendText*/
      l[9] ? o ? o.p(l, f) : (o = cf(l), o.c(), o.m(n, t)) : o && (o.d(1), o = null), /*collapserOpenState*/
      l[3] === "open" ? a ? (a.p(l, f), f & /*collapserOpenState*/
      8 && J(a, 1)) : (a = hf(l), a.c(), J(a, 1), a.m(n, null)) : a && (Fe(), x(a, 1, 1, () => {
        a = null;
      }), We()), (!s || f & /*params*/
      2 && r !== (r = /*params*/
      l[1].path.join("."))) && y(n, "name", r), (!s || f & /*params*/
      2 && i !== (i = "subset array depth-" + /*params*/
      l[1].path.length)) && y(n, "class", i);
    },
    i(l) {
      s || (J(a), s = !0);
    },
    o(l) {
      x(a), s = !1;
    },
    d(l) {
      l && T(n), o && o.d(), a && a.d();
    }
  };
}
function cf(e) {
  let n, t, r, i = En(
    /*legendText*/
    e[9]
  ) + "", s, o = (
    /*params*/
    e[1].collapsible && df(e)
  ), a = (
    /*schema*/
    e[0].description && pf(e)
  );
  return {
    c() {
      n = N("legend"), o && o.c(), t = Q(), r = N("span"), s = Q(), a && a.c(), y(r, "class", "subset-label-title object-label-title"), y(n, "class", "subset-label array-label");
    },
    m(l, f) {
      k(l, n, f), o && o.m(n, null), B(n, t), B(n, r), r.innerHTML = i, B(n, s), a && a.m(n, null);
    },
    p(l, f) {
      /*params*/
      l[1].collapsible ? o ? o.p(l, f) : (o = df(l), o.c(), o.m(n, t)) : o && (o.d(1), o = null), f & /*legendText*/
      512 && i !== (i = En(
        /*legendText*/
        l[9]
      ) + "") && (r.innerHTML = i), /*schema*/
      l[0].description ? a ? a.p(l, f) : (a = pf(l), a.c(), a.m(n, null)) : a && (a.d(1), a = null);
    },
    d(l) {
      l && T(n), o && o.d(), a && a.d();
    }
  };
}
function df(e) {
  let n, t, r, i;
  return {
    c() {
      n = N("span"), y(n, "class", t = "collapser " + /*collapserOpenState*/
      e[3]);
    },
    m(s, o) {
      k(s, n, o), r || (i = H(
        n,
        "click",
        /*toggle*/
        e[10]
      ), r = !0);
    },
    p(s, o) {
      o & /*collapserOpenState*/
      8 && t !== (t = "collapser " + /*collapserOpenState*/
      s[3]) && y(n, "class", t);
    },
    d(s) {
      s && T(n), r = !1, i();
    }
  };
}
function pf(e) {
  let n, t = En(
    /*schema*/
    e[0].description
  ) + "";
  return {
    c() {
      n = N("span"), y(n, "class", "subset-label-description object-label-description");
    },
    m(r, i) {
      k(r, n, i), n.innerHTML = t;
    },
    p(r, i) {
      i & /*schema*/
      1 && t !== (t = En(
        /*schema*/
        r[0].description
      ) + "") && (n.innerHTML = t);
    },
    d(r) {
      r && T(n);
    }
  };
}
function hf(e) {
  let n, t, r, i = (
    /*controls*/
    e[6].includes("add") && !/*atMaxItems*/
    e[5]
  ), s, o;
  const a = [kS, TS], l = [];
  function f(c, d) {
    return (
      /*emptyText*/
      c[7] ? 1 : 0
    );
  }
  n = f(e), t = l[n] = a[n](e);
  let u = i && bf(e);
  return {
    c() {
      t.c(), r = Q(), u && u.c(), s = Ce();
    },
    m(c, d) {
      l[n].m(c, d), k(c, r, d), u && u.m(c, d), k(c, s, d), o = !0;
    },
    p(c, d) {
      let m = n;
      n = f(c), n === m ? l[n].p(c, d) : (Fe(), x(l[m], 1, 1, () => {
        l[m] = null;
      }), We(), t = l[n], t ? t.p(c, d) : (t = l[n] = a[n](c), t.c()), J(t, 1), t.m(r.parentNode, r)), d & /*controls, atMaxItems*/
      96 && (i = /*controls*/
      c[6].includes("add") && !/*atMaxItems*/
      c[5]), i ? u ? u.p(c, d) : (u = bf(c), u.c(), u.m(s.parentNode, s)) : u && (u.d(1), u = null);
    },
    i(c) {
      o || (J(t), o = !0);
    },
    o(c) {
      x(t), o = !1;
    },
    d(c) {
      l[n].d(c), c && T(r), u && u.d(c), c && T(s);
    }
  };
}
function TS(e) {
  let n, t;
  return {
    c() {
      n = N("div"), t = nn(
        /*emptyText*/
        e[7]
      ), y(n, "class", "emptyText");
    },
    m(r, i) {
      k(r, n, i), B(n, t);
    },
    p(r, i) {
      i & /*emptyText*/
      128 && hn(
        t,
        /*emptyText*/
        r[7]
      );
    },
    i: xe,
    o: xe,
    d(r) {
      r && T(n);
    }
  };
}
function kS(e) {
  let n = [], t = /* @__PURE__ */ new Map(), r, i, s = (
    /*value*/
    e[2] || []
  );
  const o = (a) => (
    /*idx*/
    a[15]
  );
  for (let a = 0; a < s.length; a += 1) {
    let l = ff(e, s, a), f = o(l);
    t.set(f, n[a] = vf(f, l));
  }
  return {
    c() {
      for (let a = 0; a < n.length; a += 1)
        n[a].c();
      r = Ce();
    },
    m(a, l) {
      for (let f = 0; f < n.length; f += 1)
        n[f] && n[f].m(a, l);
      k(a, r, l), i = !0;
    },
    p(a, l) {
      l & /*arrayDown, value, params, controls, arrayUp, arrayDuplicate, atMaxItems, arrayDelete, atMinItems, SubSchemaForm, schema*/
      119 && (s = /*value*/
      a[2] || [], Fe(), n = Jr(n, l, o, 1, a, s, t, r.parentNode, cu, vf, r, ff), We());
    },
    i(a) {
      if (!i) {
        for (let l = 0; l < s.length; l += 1)
          J(n[l]);
        i = !0;
      }
    },
    o(a) {
      for (let l = 0; l < n.length; l += 1)
        x(n[l]);
      i = !1;
    },
    d(a) {
      for (let l = 0; l < n.length; l += 1)
        n[l].d(a);
      a && T(r);
    }
  };
}
function mf(e) {
  let n, t, r;
  return {
    c() {
      n = N("button"), y(n, "type", "button"), y(n, "class", "list-control delete"), y(n, "title", "delete");
    },
    m(i, s) {
      k(i, n, s), t || (r = H(n, "click", function() {
        Be(Mi(
          /*idx*/
          e[15],
          /*params*/
          e[1],
          /*value*/
          e[2]
        )) && Mi(
          /*idx*/
          e[15],
          /*params*/
          e[1],
          /*value*/
          e[2]
        ).apply(this, arguments);
      }), t = !0);
    },
    p(i, s) {
      e = i;
    },
    d(i) {
      i && T(n), t = !1, r();
    }
  };
}
function gf(e) {
  let n, t, r;
  return {
    c() {
      n = N("button"), y(n, "type", "button"), y(n, "class", "list-control duplicate"), y(n, "title", "duplicate");
    },
    m(i, s) {
      k(i, n, s), t || (r = H(n, "click", function() {
        Be(Li(
          /*idx*/
          e[15],
          /*params*/
          e[1],
          /*value*/
          e[2]
        )) && Li(
          /*idx*/
          e[15],
          /*params*/
          e[1],
          /*value*/
          e[2]
        ).apply(this, arguments);
      }), t = !0);
    },
    p(i, s) {
      e = i;
    },
    d(i) {
      i && T(n), t = !1, r();
    }
  };
}
function _f(e) {
  let n, t, r;
  return {
    c() {
      n = N("button"), y(n, "type", "button"), y(n, "class", "list-control up"), y(n, "title", "move up");
    },
    m(i, s) {
      k(i, n, s), t || (r = H(n, "click", function() {
        Be(Ni(
          /*idx*/
          e[15],
          /*params*/
          e[1],
          /*value*/
          e[2]
        )) && Ni(
          /*idx*/
          e[15],
          /*params*/
          e[1],
          /*value*/
          e[2]
        ).apply(this, arguments);
      }), t = !0);
    },
    p(i, s) {
      e = i;
    },
    d(i) {
      i && T(n), t = !1, r();
    }
  };
}
function yf(e) {
  let n, t, r;
  return {
    c() {
      n = N("button"), y(n, "type", "button"), y(n, "class", "list-control down"), y(n, "title", "move down");
    },
    m(i, s) {
      k(i, n, s), t || (r = H(n, "click", function() {
        Be(Fi(
          /*idx*/
          e[15],
          /*params*/
          e[1],
          /*value*/
          e[2]
        )) && Fi(
          /*idx*/
          e[15],
          /*params*/
          e[1],
          /*value*/
          e[2]
        ).apply(this, arguments);
      }), t = !0);
    },
    p(i, s) {
      e = i;
    },
    d(i) {
      i && T(n), t = !1, r();
    }
  };
}
function vf(e, n) {
  let t, r, i, s, o, a = (
    /*controls*/
    n[6].includes("delete") && !/*atMinItems*/
    n[4]
  ), l, f = (
    /*controls*/
    n[6].includes("duplicate") && !/*atMaxItems*/
    n[5]
  ), u, c = (
    /*controls*/
    n[6].includes("reorder") && /*idx*/
    n[15] > 0
  ), d, m = (
    /*controls*/
    n[6].includes("reorder") && /*idx*/
    n[15] < /*value*/
    (n[2] || []).length - 1
  ), h, g;
  function v(C) {
    n[12](C);
  }
  var w = yr;
  function A(C) {
    let D = {
      params: {
        .../*params*/
        C[1],
        path: [
          .../*params*/
          C[1].path,
          /*idx*/
          C[15].toString()
        ],
        containerParent: "array",
        containerReadOnly: (
          /*params*/
          C[1].containerReadOnly || /*schema*/
          C[0].readOnly || !1
        )
      },
      value: (
        /*item*/
        C[13]
      )
    };
    return (
      /*schema*/
      C[0].items !== void 0 && (D.schema = /*schema*/
      C[0].items), { props: D }
    );
  }
  w && (r = Le(w, A(n)), Ze.push(() => Ln(r, "schema", v)));
  let M = a && mf(n), W = f && gf(n), I = c && _f(n), F = m && yf(n);
  return {
    key: e,
    first: null,
    c() {
      t = Ce(), r && Oe(r.$$.fragment), s = Q(), o = N("div"), M && M.c(), l = Q(), W && W.c(), u = Q(), I && I.c(), d = Q(), F && F.c(), h = Q(), y(o, "class", "list-controls"), this.first = t;
    },
    m(C, D) {
      k(C, t, D), r && be(r, C, D), k(C, s, D), k(C, o, D), M && M.m(o, null), B(o, l), W && W.m(o, null), B(o, u), I && I.m(o, null), B(o, d), F && F.m(o, null), B(o, h), g = !0;
    },
    p(C, D) {
      n = C;
      const j = {};
      if (D & /*params, value, schema*/
      7 && (j.params = {
        .../*params*/
        n[1],
        path: [
          .../*params*/
          n[1].path,
          /*idx*/
          n[15].toString()
        ],
        containerParent: "array",
        containerReadOnly: (
          /*params*/
          n[1].containerReadOnly || /*schema*/
          n[0].readOnly || !1
        )
      }), D & /*value*/
      4 && (j.value = /*item*/
      n[13]), !i && D & /*schema*/
      1 && (i = !0, j.schema = /*schema*/
      n[0].items, tt(() => i = !1)), w !== (w = yr)) {
        if (r) {
          Fe();
          const ee = r;
          x(ee.$$.fragment, 1, 0, () => {
            we(ee, 1);
          }), We();
        }
        w ? (r = Le(w, A(n)), Ze.push(() => Ln(r, "schema", v)), Oe(r.$$.fragment), J(r.$$.fragment, 1), be(r, s.parentNode, s)) : r = null;
      } else
        w && r.$set(j);
      D & /*controls, atMinItems*/
      80 && (a = /*controls*/
      n[6].includes("delete") && !/*atMinItems*/
      n[4]), a ? M ? M.p(n, D) : (M = mf(n), M.c(), M.m(o, l)) : M && (M.d(1), M = null), D & /*controls, atMaxItems*/
      96 && (f = /*controls*/
      n[6].includes("duplicate") && !/*atMaxItems*/
      n[5]), f ? W ? W.p(n, D) : (W = gf(n), W.c(), W.m(o, u)) : W && (W.d(1), W = null), D & /*controls, value*/
      68 && (c = /*controls*/
      n[6].includes("reorder") && /*idx*/
      n[15] > 0), c ? I ? I.p(n, D) : (I = _f(n), I.c(), I.m(o, d)) : I && (I.d(1), I = null), D & /*controls, value*/
      68 && (m = /*controls*/
      n[6].includes("reorder") && /*idx*/
      n[15] < /*value*/
      (n[2] || []).length - 1), m ? F ? F.p(n, D) : (F = yf(n), F.c(), F.m(o, h)) : F && (F.d(1), F = null);
    },
    i(C) {
      g || (r && J(r.$$.fragment, C), g = !0);
    },
    o(C) {
      r && x(r.$$.fragment, C), g = !1;
    },
    d(C) {
      C && T(t), r && we(r, C), C && T(s), C && T(o), M && M.d(), W && W.d(), I && I.d(), F && F.d();
    }
  };
}
function bf(e) {
  let n, t, r;
  return {
    c() {
      n = N("button"), y(n, "type", "button"), y(n, "class", "list-control add"), y(n, "title", "add item");
    },
    m(i, s) {
      k(i, n, s), t || (r = H(n, "click", function() {
        Be(Ci(
          /*schema*/
          e[0],
          /*params*/
          e[1],
          /*value*/
          e[2]
        )) && Ci(
          /*schema*/
          e[0],
          /*params*/
          e[1],
          /*value*/
          e[2]
        ).apply(this, arguments);
      }), t = !0);
    },
    p(i, s) {
      e = i;
    },
    d(i) {
      i && T(n), t = !1, r();
    }
  };
}
function SS(e) {
  let n, t, r = (
    /*showWrapper*/
    e[8] && uf(e)
  );
  return {
    c() {
      r && r.c(), n = Ce();
    },
    m(i, s) {
      r && r.m(i, s), k(i, n, s), t = !0;
    },
    p(i, [s]) {
      /*showWrapper*/
      i[8] ? r ? (r.p(i, s), s & /*showWrapper*/
      256 && J(r, 1)) : (r = uf(i), r.c(), J(r, 1), r.m(n.parentNode, n)) : r && (Fe(), x(r, 1, 1, () => {
        r = null;
      }), We());
    },
    i(i) {
      t || (J(r), t = !0);
    },
    o(i) {
      x(r), t = !1;
    },
    d(i) {
      r && r.d(i), i && T(n);
    }
  };
}
function PS(e, n, t) {
  let r, i, s, o, a, l, f, { params: u } = n, { schema: c } = n, { value: d } = n, m = u.path.length === 0 || !u.collapsible ? "open" : "closed";
  const h = () => {
    t(3, m = m === "open" ? "closed" : "open");
  };
  function g(v) {
    e.$$.not_equal(c.items, v) && (c.items = v, t(0, c));
  }
  return e.$$set = (v) => {
    "params" in v && t(1, u = v.params), "schema" in v && t(0, c = v.schema), "value" in v && t(2, d = v.value);
  }, e.$$.update = () => {
    e.$$.dirty & /*schema, params, value*/
    7 && ES(c, u, d)(), e.$$.dirty & /*schema, params*/
    3 && t(9, r = zt(c, u.path)), e.$$.dirty & /*value, schema*/
    5 && t(8, i = d && d.length > 0 || c.emptyDisplay !== !1), e.$$.dirty & /*value, schema*/
    5 && t(7, s = (!d || d.length === 0) && typeof c.emptyDisplay == "string" && c.emptyDisplay), e.$$.dirty & /*params, schema*/
    3 && t(11, o = u.containerReadOnly || c.readOnly || !1), e.$$.dirty & /*schema, readOnly*/
    2049 && t(6, a = c.controls === void 0 ? o ? "" : "add, reorder, delete, duplicate" : c.controls), e.$$.dirty & /*schema, value*/
    5 && t(5, l = typeof c.maxItems == "number" && ((d == null ? void 0 : d.length) || 0) >= c.maxItems), e.$$.dirty & /*schema, value*/
    5 && t(4, f = typeof c.minItems == "number" && ((d == null ? void 0 : d.length) || 0) <= c.minItems);
  }, [
    c,
    u,
    d,
    m,
    f,
    l,
    a,
    s,
    i,
    r,
    h,
    o,
    g
  ];
}
let IS = class extends Ye {
  constructor(n) {
    super(), Ke(this, n, PS, SS, ze, { params: 1, schema: 0, value: 2 });
  }
};
function jS(e) {
  let n, t, r, i, s, o, a;
  return {
    c() {
      n = N("input"), y(n, "id", t = /*params*/
      e[0].path.join(".")), y(n, "name", r = /*params*/
      e[0].path.join(".")), y(n, "type", "checkbox"), n.checked = i = /*value*/
      e[2] || !1, n.disabled = s = /*schema*/
      e[1].readOnly || /*params*/
      e[0].containerReadOnly;
    },
    m(l, f) {
      k(l, n, f), o || (a = H(
        n,
        "change",
        /*change_handler*/
        e[3]
      ), o = !0);
    },
    p(l, f) {
      f & /*params*/
      1 && t !== (t = /*params*/
      l[0].path.join(".")) && y(n, "id", t), f & /*params*/
      1 && r !== (r = /*params*/
      l[0].path.join(".")) && y(n, "name", r), f & /*value*/
      4 && i !== (i = /*value*/
      l[2] || !1) && (n.checked = i), f & /*schema, params*/
      3 && s !== (s = /*schema*/
      l[1].readOnly || /*params*/
      l[0].containerReadOnly) && (n.disabled = s);
    },
    d(l) {
      l && T(n), o = !1, a();
    }
  };
}
function CS(e) {
  let n, t, r;
  var i = (
    /*params*/
    e[0].components.fieldWrapper
  );
  function s(o) {
    return {
      props: {
        params: (
          /*params*/
          o[0]
        ),
        schema: (
          /*schema*/
          o[1]
        ),
        $$slots: { default: [jS] },
        $$scope: { ctx: o }
      }
    };
  }
  return i && (n = Le(i, s(e))), {
    c() {
      n && Oe(n.$$.fragment), t = Ce();
    },
    m(o, a) {
      n && be(n, o, a), k(o, t, a), r = !0;
    },
    p(o, [a]) {
      const l = {};
      if (a & /*params*/
      1 && (l.params = /*params*/
      o[0]), a & /*schema*/
      2 && (l.schema = /*schema*/
      o[1]), a & /*$$scope, params, value, schema*/
      23 && (l.$$scope = { dirty: a, ctx: o }), a & /*params*/
      1 && i !== (i = /*params*/
      o[0].components.fieldWrapper)) {
        if (n) {
          Fe();
          const f = n;
          x(f.$$.fragment, 1, 0, () => {
            we(f, 1);
          }), We();
        }
        i ? (n = Le(i, s(o)), Oe(n.$$.fragment), J(n.$$.fragment, 1), be(n, t.parentNode, t)) : n = null;
      } else
        i && n.$set(l);
    },
    i(o) {
      r || (n && J(n.$$.fragment, o), r = !0);
    },
    o(o) {
      n && x(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && T(t), n && we(n, o);
    }
  };
}
function MS(e, n, t) {
  let { params: r } = n, { schema: i } = n, { value: s } = n;
  const o = (a) => r.pathChanged(r.path, a.currentTarget.checked);
  return e.$$set = (a) => {
    "params" in a && t(0, r = a.params), "schema" in a && t(1, i = a.schema), "value" in a && t(2, s = a.value);
  }, [r, i, s, o];
}
let LS = class extends Ye {
  constructor(n) {
    super(), Ke(this, n, MS, CS, ze, { params: 0, schema: 1, value: 2 });
  }
};
function NS(e) {
  let n, t, r, i, s, o, a;
  return {
    c() {
      n = N("input"), y(n, "id", t = /*params*/
      e[0].path.join(".")), y(n, "name", r = /*params*/
      e[0].path.join(".")), y(n, "type", "number"), n.value = i = /*value*/
      e[2] || "", n.disabled = s = /*schema*/
      e[1].readOnly || /*params*/
      e[0].containerReadOnly;
    },
    m(l, f) {
      k(l, n, f), o || (a = H(
        n,
        "input",
        /*input_handler*/
        e[3]
      ), o = !0);
    },
    p(l, f) {
      f & /*params*/
      1 && t !== (t = /*params*/
      l[0].path.join(".")) && y(n, "id", t), f & /*params*/
      1 && r !== (r = /*params*/
      l[0].path.join(".")) && y(n, "name", r), f & /*value*/
      4 && i !== (i = /*value*/
      l[2] || "") && n.value !== i && (n.value = i), f & /*schema, params*/
      3 && s !== (s = /*schema*/
      l[1].readOnly || /*params*/
      l[0].containerReadOnly) && (n.disabled = s);
    },
    d(l) {
      l && T(n), o = !1, a();
    }
  };
}
function FS(e) {
  let n, t, r;
  var i = (
    /*params*/
    e[0].components.fieldWrapper
  );
  function s(o) {
    return {
      props: {
        params: (
          /*params*/
          o[0]
        ),
        schema: (
          /*schema*/
          o[1]
        ),
        $$slots: { default: [NS] },
        $$scope: { ctx: o }
      }
    };
  }
  return i && (n = Le(i, s(e))), {
    c() {
      n && Oe(n.$$.fragment), t = Ce();
    },
    m(o, a) {
      n && be(n, o, a), k(o, t, a), r = !0;
    },
    p(o, [a]) {
      const l = {};
      if (a & /*params*/
      1 && (l.params = /*params*/
      o[0]), a & /*schema*/
      2 && (l.schema = /*schema*/
      o[1]), a & /*$$scope, params, value, schema*/
      23 && (l.$$scope = { dirty: a, ctx: o }), a & /*params*/
      1 && i !== (i = /*params*/
      o[0].components.fieldWrapper)) {
        if (n) {
          Fe();
          const f = n;
          x(f.$$.fragment, 1, 0, () => {
            we(f, 1);
          }), We();
        }
        i ? (n = Le(i, s(o)), Oe(n.$$.fragment), J(n.$$.fragment, 1), be(n, t.parentNode, t)) : n = null;
      } else
        i && n.$set(l);
    },
    i(o) {
      r || (n && J(n.$$.fragment, o), r = !0);
    },
    o(o) {
      n && x(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && T(t), n && we(n, o);
    }
  };
}
function WS(e, n, t) {
  let { params: r } = n, { schema: i } = n, { value: s } = n;
  const o = (a) => {
    let l = parseFloat(a.currentTarget.value);
    r.pathChanged(r.path, isNaN(l) ? void 0 : l);
  };
  return e.$$set = (a) => {
    "params" in a && t(0, r = a.params), "schema" in a && t(1, i = a.schema), "value" in a && t(2, s = a.value);
  }, [r, i, s, o];
}
let wf = class extends Ye {
  constructor(n) {
    super(), Ke(this, n, WS, FS, ze, { params: 0, schema: 1, value: 2 });
  }
};
function DS(e, n, t, r) {
  const i = Ss(r), s = zr(t, "/"), o = Ss(t);
  switch (s) {
    case "required":
      return [i, "Please enter a value for this item"];
    case "minimum":
      return [i, `Please enter a number at least ${o}`];
    case "maximum":
      return [i, `Please enter a number at most ${o}`];
    case "minLength":
      return [i, `Please enter text of at least ${o} characters`];
    case "maxLength":
      return [i, `Please enter text no longer than ${o} characters`];
    case "pattern":
      return [i, "Please enter properly formatted value"];
    case "format":
      return [i, `Please enter a properly formatted ${{
        "date-time": "date and time",
        time: "time",
        date: "date",
        email: "email address"
      }[o]}`];
  }
  return [i, `Fails to satisfy schema at ${Ss(t)}`];
}
function $f(e, n, t) {
  const r = e.slice();
  return r[28] = n[t][0], r[29] = n[t][1], r;
}
function Af(e) {
  let n;
  return {
    c() {
      n = N("div"), n.textContent = "Drop files or click to upload", y(n, "class", "sf-upload-caption");
    },
    m(t, r) {
      k(t, n, r);
    },
    d(t) {
      t && T(n);
    }
  };
}
function Of(e) {
  let n, t;
  return {
    c() {
      n = N("img"), y(n, "class", "sf-upload-thumb"), gr(n.src, t = /*value*/
      e[0]) || y(n, "src", t), y(n, "alt", "upload file");
    },
    m(r, i) {
      k(r, n, i);
    },
    p(r, i) {
      i[0] & /*value*/
      1 && !gr(n.src, t = /*value*/
      r[0]) && y(n, "src", t);
    },
    d(r) {
      r && T(n);
    }
  };
}
function Rf(e) {
  let n, t = zr(
    /*value*/
    e[0],
    "."
  ) + "", r;
  return {
    c() {
      n = N("div"), r = nn(t), y(n, "class", "sf-upload-file"), y(
        n,
        "title",
        /*value*/
        e[0]
      );
    },
    m(i, s) {
      k(i, n, s), B(n, r);
    },
    p(i, s) {
      s[0] & /*value*/
      1 && t !== (t = zr(
        /*value*/
        i[0],
        "."
      ) + "") && hn(r, t), s[0] & /*value*/
      1 && y(
        n,
        "title",
        /*value*/
        i[0]
      );
    },
    d(i) {
      i && T(n);
    }
  };
}
function Ef(e) {
  let n, t, r, i, s, o;
  return {
    c() {
      n = N("input"), y(n, "type", "text"), y(n, "id", t = /*params*/
      e[2].path.join(".")), y(n, "name", r = /*params*/
      e[2].path.join(".")), n.disabled = /*readOnly*/
      e[8], y(n, "class", "sf-upload-input"), n.value = i = /*value*/
      e[0] || "";
    },
    m(a, l) {
      k(a, n, l), s || (o = [
        H(n, "click", Fn(qS)),
        H(
          n,
          "input",
          /*input_handler*/
          e[22]
        )
      ], s = !0);
    },
    p(a, l) {
      l[0] & /*params*/
      4 && t !== (t = /*params*/
      a[2].path.join(".")) && y(n, "id", t), l[0] & /*params*/
      4 && r !== (r = /*params*/
      a[2].path.join(".")) && y(n, "name", r), l[0] & /*readOnly*/
      256 && (n.disabled = /*readOnly*/
      a[8]), l[0] & /*value*/
      1 && i !== (i = /*value*/
      a[0] || "") && n.value !== i && (n.value = i);
    },
    d(a) {
      a && T(n), s = !1, Ve(o);
    }
  };
}
function Tf(e) {
  let n, t, r;
  return {
    c() {
      n = N("button"), y(n, "type", "button"), y(n, "class", "sf-upload-deleter");
    },
    m(i, s) {
      k(i, n, s), t || (r = H(
        n,
        "click",
        /*deleteUploads*/
        e[15]
      ), t = !0);
    },
    p: xe,
    d(i) {
      i && T(n), t = !1, r();
    }
  };
}
function kf(e) {
  let n, t = Object.entries(
    /*progress*/
    e[6]
  ), r = [];
  for (let i = 0; i < t.length; i += 1)
    r[i] = Sf($f(e, t, i));
  return {
    c() {
      n = N("div");
      for (let i = 0; i < r.length; i += 1)
        r[i].c();
      y(n, "class", "sf-progress-bars");
    },
    m(i, s) {
      k(i, n, s);
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(n, null);
    },
    p(i, s) {
      if (s[0] & /*progress*/
      64) {
        t = Object.entries(
          /*progress*/
          i[6]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const a = $f(i, t, o);
          r[o] ? r[o].p(a, s) : (r[o] = Sf(a), r[o].c(), r[o].m(n, null));
        }
        for (; o < r.length; o += 1)
          r[o].d(1);
        r.length = t.length;
      }
    },
    d(i) {
      i && T(n), Yr(r, i);
    }
  };
}
function Sf(e) {
  let n, t, r, i = (
    /*name*/
    e[28] + ""
  ), s, o;
  return {
    c() {
      n = N("div"), t = N("div"), r = Q(), s = nn(i), o = Q(), y(t, "class", "sf-progress-done"), Wn(
        t,
        "width",
        /*percent*/
        e[29] + "%"
      ), y(n, "class", "sf-progress-bar");
    },
    m(a, l) {
      k(a, n, l), B(n, t), B(n, r), B(n, s), B(n, o);
    },
    p(a, l) {
      l[0] & /*progress*/
      64 && Wn(
        t,
        "width",
        /*percent*/
        a[29] + "%"
      ), l[0] & /*progress*/
      64 && i !== (i = /*name*/
      a[28] + "") && hn(s, i);
    },
    d(a) {
      a && T(n);
    }
  };
}
function US(e) {
  let n, t, r, i, s, o, a = (
    /*value*/
    e[0] && /*isImage*/
    e[18](
      /*value*/
      e[0]
    ) && /*mode*/
    e[7] === "uploader"
  ), l, f = (
    /*value*/
    e[0] && !/*isImage*/
    e[18](
      /*value*/
      e[0]
    ) && /*mode*/
    e[7] === "uploader"
  ), u, c, d, m, h, g, v, w = Object.keys(
    /*progress*/
    e[6]
  ).length > 0, A, M, W, I = (
    /*mode*/
    e[7] === "uploader" && !/*readOnly*/
    e[8] && Af()
  ), F = a && Of(e), C = f && Rf(e), D = (
    /*mode*/
    e[7] === "link" && Ef(e)
  ), j = !/*readOnly*/
  e[8] && Tf(e), ee = w && kf(e);
  return {
    c() {
      n = N("input"), i = Q(), s = N("div"), I && I.c(), o = Q(), F && F.c(), l = Q(), C && C.c(), u = Q(), D && D.c(), c = Q(), d = N("div"), j && j.c(), m = Q(), h = N("button"), v = Q(), ee && ee.c(), A = Ce(), y(n, "id", t = /*params*/
      e[2].path.join(".")), y(n, "name", r = /*params*/
      e[2].path.join(".")), y(n, "type", "file"), n.readOnly = /*readOnly*/
      e[8], Wn(n, "display", "none"), y(h, "type", "button"), Se(
        h,
        "sf-upload-to-link",
        /*mode*/
        e[7] === "uploader"
      ), Se(
        h,
        "sf-upload-to-uploader",
        /*mode*/
        e[7] === "link"
      ), y(d, "class", "sf-upload-controls"), y(s, "class", g = "sf-drop-area " + /*mode*/
      e[7]), y(s, "tabindex", "0"), Se(
        s,
        "highlight",
        /*highlight*/
        e[1]
      );
    },
    m(E, X) {
      k(E, n, X), e[21](n), k(E, i, X), k(E, s, X), I && I.m(s, null), B(s, o), F && F.m(s, null), B(s, l), C && C.m(s, null), B(s, u), D && D.m(s, null), B(s, c), B(s, d), j && j.m(d, null), B(d, m), B(d, h), e[23](s), k(E, v, X), ee && ee.m(E, X), k(E, A, X), M || (W = [
        H(
          n,
          "input",
          /*onInput*/
          e[10]
        ),
        H(
          h,
          "click",
          /*changeMode*/
          e[16]
        ),
        H(
          s,
          "dragenter",
          /*dragEnter*/
          e[11]
        ),
        H(
          s,
          "dragover",
          /*dragOver*/
          e[12]
        ),
        H(
          s,
          "dragleave",
          /*dragLeave*/
          e[13]
        ),
        H(
          s,
          "drop",
          /*drop*/
          e[14]
        ),
        H(
          s,
          "click",
          /*openFile*/
          e[17]
        )
      ], M = !0);
    },
    p(E, X) {
      X[0] & /*params*/
      4 && t !== (t = /*params*/
      E[2].path.join(".")) && y(n, "id", t), X[0] & /*params*/
      4 && r !== (r = /*params*/
      E[2].path.join(".")) && y(n, "name", r), X[0] & /*readOnly*/
      256 && (n.readOnly = /*readOnly*/
      E[8]), /*mode*/
      E[7] === "uploader" && !/*readOnly*/
      E[8] ? I || (I = Af(), I.c(), I.m(s, o)) : I && (I.d(1), I = null), X[0] & /*value, mode*/
      129 && (a = /*value*/
      E[0] && /*isImage*/
      E[18](
        /*value*/
        E[0]
      ) && /*mode*/
      E[7] === "uploader"), a ? F ? F.p(E, X) : (F = Of(E), F.c(), F.m(s, l)) : F && (F.d(1), F = null), X[0] & /*value, mode*/
      129 && (f = /*value*/
      E[0] && !/*isImage*/
      E[18](
        /*value*/
        E[0]
      ) && /*mode*/
      E[7] === "uploader"), f ? C ? C.p(E, X) : (C = Rf(E), C.c(), C.m(s, u)) : C && (C.d(1), C = null), /*mode*/
      E[7] === "link" ? D ? D.p(E, X) : (D = Ef(E), D.c(), D.m(s, c)) : D && (D.d(1), D = null), /*readOnly*/
      E[8] ? j && (j.d(1), j = null) : j ? j.p(E, X) : (j = Tf(E), j.c(), j.m(d, m)), X[0] & /*mode*/
      128 && Se(
        h,
        "sf-upload-to-link",
        /*mode*/
        E[7] === "uploader"
      ), X[0] & /*mode*/
      128 && Se(
        h,
        "sf-upload-to-uploader",
        /*mode*/
        E[7] === "link"
      ), X[0] & /*mode*/
      128 && g !== (g = "sf-drop-area " + /*mode*/
      E[7]) && y(s, "class", g), X[0] & /*mode, highlight*/
      130 && Se(
        s,
        "highlight",
        /*highlight*/
        E[1]
      ), X[0] & /*progress*/
      64 && (w = Object.keys(
        /*progress*/
        E[6]
      ).length > 0), w ? ee ? ee.p(E, X) : (ee = kf(E), ee.c(), ee.m(A.parentNode, A)) : ee && (ee.d(1), ee = null);
    },
    d(E) {
      E && T(n), e[21](null), E && T(i), E && T(s), I && I.d(), F && F.d(), C && C.d(), D && D.d(), j && j.d(), e[23](null), E && T(v), ee && ee.d(E), E && T(A), M = !1, Ve(W);
    }
  };
}
function BS(e) {
  let n, t, r;
  var i = (
    /*params*/
    e[2].components.fieldWrapper
  );
  function s(o) {
    return {
      props: {
        params: (
          /*params*/
          o[2]
        ),
        schema: (
          /*schema*/
          o[3]
        ),
        $$slots: { default: [US] },
        $$scope: { ctx: o }
      }
    };
  }
  return i && (n = Le(i, s(e))), {
    c() {
      n && Oe(n.$$.fragment), t = Ce();
    },
    m(o, a) {
      n && be(n, o, a), k(o, t, a), r = !0;
    },
    p(o, a) {
      const l = {};
      if (a[0] & /*params*/
      4 && (l.params = /*params*/
      o[2]), a[0] & /*schema*/
      8 && (l.schema = /*schema*/
      o[3]), a[0] & /*progress, mode, dropArea, highlight, readOnly, params, value, inp*/
      503 | a[1] & /*$$scope*/
      2 && (l.$$scope = { dirty: a, ctx: o }), a[0] & /*params*/
      4 && i !== (i = /*params*/
      o[2].components.fieldWrapper)) {
        if (n) {
          Fe();
          const f = n;
          x(f.$$.fragment, 1, 0, () => {
            we(f, 1);
          }), We();
        }
        i ? (n = Le(i, s(o)), Oe(n.$$.fragment), J(n.$$.fragment, 1), be(n, t.parentNode, t)) : n = null;
      } else
        i && n.$set(l);
    },
    i(o) {
      r || (n && J(n.$$.fragment, o), r = !0);
    },
    o(o) {
      n && x(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && T(t), n && we(n, o);
    }
  };
}
const qS = () => {
};
function GS(e, n, t) {
  let r, i, { params: s } = n, { schema: o } = n, { value: a } = n, { highlight: l = !1 } = n;
  const f = o.multiple || !1;
  let u, c, d = qp(ap);
  ou(e, d, (G) => t(20, i = G));
  let m, h = [], g = {}, v = "uploader";
  const w = () => {
    var G, pe;
    if (!f) {
      if ((((G = u.files) == null ? void 0 : G.length) || 0) > 1) {
        alert("Please only upload one file"), t(4, u.files = null, u);
        return;
      }
      const Ge = (pe = u.files) == null ? void 0 : pe.item(0);
      if (!Ge)
        return;
      if (o.warningKb && Ge.size > o.warningKb * 1024 && alert(`The file is larger than the recommended maximum size of ${o.warningKb}KB - consider compressing it`), o.maximumKb && Ge.size > o.maximumKb * 1024) {
        alert(`The file is larger than the allowed maximum of ${o.maximumKb}KB - please compress it first`), t(4, u.files = null, u);
        return;
      }
      s.pathChanged(s.path, u.files), F(Ge), g[Ge.name] = { mimeType: Ge.type, size: Ge.size };
    }
  }, A = (G) => {
    w();
  }, M = (G) => {
    var pe;
    r || ((pe = G.dataTransfer) == null ? void 0 : pe.types[0]) !== "Files" || (t(1, l = !0), G.preventDefault());
  }, W = (G) => {
    var pe;
    r || ((pe = G.dataTransfer) == null ? void 0 : pe.types[0]) !== "Files" || G.preventDefault();
  }, I = (G) => {
    r || t(1, l = !1);
  }, F = (G) => {
    if (G.type.startsWith("image")) {
      const pe = document.createElement("img");
      pe.classList.add("sf-upload-thumb"), pe.file = G, c.append(pe), h.push(pe);
      const Ge = new FileReader();
      Ge.onload = (_n) => {
        pe.src = _n.target.result;
      }, Ge.readAsDataURL(G);
    } else {
      const pe = document.createElement("div");
      pe.classList.add("sf-upload-file"), pe.title = G.name, pe.innerText = zr(G.name, ".") || Ld(G.type, "/"), c.append(pe), h.push(pe);
    }
  }, C = (G) => {
    if (o.readOnly || (G.preventDefault(), t(1, l = !1), !G.dataTransfer))
      return;
    const { files: pe } = G.dataTransfer;
    t(4, u.files = pe, u), w();
  }, D = (G) => {
    G.stopPropagation(), t(4, u.files = null, u), h.forEach((pe) => pe.remove()), t(19, h = []), g = {}, t(0, a = ""), s.pathChanged(s.path, op), s.pathChanged(s.path, a);
  }, j = (G) => {
    G.stopPropagation(), t(7, v = v === "uploader" ? "link" : "uploader");
  }, ee = () => {
    r || u.click();
  }, E = (G) => ["jpg", "jpeg", "png", "gif", "svg", "ico"].includes(zr(G, ".").toLowerCase());
  function X(G) {
    Ze[G ? "unshift" : "push"](() => {
      u = G, t(4, u);
    });
  }
  const tn = (G) => s.pathChanged(s.path, G.currentTarget.value || void 0);
  function Xe(G) {
    Ze[G ? "unshift" : "push"](() => {
      c = G, t(5, c);
    });
  }
  return e.$$set = (G) => {
    "params" in G && t(2, s = G.params), "schema" in G && t(3, o = G.schema), "value" in G && t(0, a = G.value), "highlight" in G && t(1, l = G.highlight);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*$pathProgress, params*/
    1048580 && t(6, m = i[s.path.join(".")] || {}), e.$$.dirty[0] & /*value, renderedThumbnails*/
    524289 && a && (a.startsWith("http") || a.startsWith("/")) && h.length > 0 && (h.forEach((G) => G.remove()), t(19, h = [])), e.$$.dirty[0] & /*schema, params*/
    12 && t(8, r = o.readOnly || s.containerReadOnly || !1);
  }, [
    a,
    l,
    s,
    o,
    u,
    c,
    m,
    v,
    r,
    d,
    A,
    M,
    W,
    I,
    C,
    D,
    j,
    ee,
    E,
    h,
    i,
    X,
    tn,
    Xe
  ];
}
class zS extends Ye {
  constructor(n) {
    super(), Ke(
      this,
      n,
      GS,
      BS,
      ze,
      {
        params: 2,
        schema: 3,
        value: 0,
        highlight: 1
      },
      null,
      [-1, -1]
    );
  }
}
function HS(e) {
  let n, t, r, i, s, o, a;
  return {
    c() {
      n = N("textarea"), y(n, "id", t = /*params*/
      e[0].path.join(".")), y(n, "name", r = /*params*/
      e[0].path.join(".")), n.disabled = i = /*schema*/
      e[1].readOnly || /*params*/
      e[0].containerReadOnly, n.value = s = /*value*/
      e[2] || "", y(n, "class", "svelte-vofknr");
    },
    m(l, f) {
      k(l, n, f), o || (a = H(
        n,
        "input",
        /*input_handler*/
        e[3]
      ), o = !0);
    },
    p(l, f) {
      f & /*params*/
      1 && t !== (t = /*params*/
      l[0].path.join(".")) && y(n, "id", t), f & /*params*/
      1 && r !== (r = /*params*/
      l[0].path.join(".")) && y(n, "name", r), f & /*schema, params*/
      3 && i !== (i = /*schema*/
      l[1].readOnly || /*params*/
      l[0].containerReadOnly) && (n.disabled = i), f & /*value*/
      4 && s !== (s = /*value*/
      l[2] || "") && (n.value = s);
    },
    d(l) {
      l && T(n), o = !1, a();
    }
  };
}
function KS(e) {
  let n, t, r;
  var i = (
    /*params*/
    e[0].components.fieldWrapper
  );
  function s(o) {
    return {
      props: {
        params: (
          /*params*/
          o[0]
        ),
        schema: (
          /*schema*/
          o[1]
        ),
        $$slots: { default: [HS] },
        $$scope: { ctx: o }
      }
    };
  }
  return i && (n = Le(i, s(e))), {
    c() {
      n && Oe(n.$$.fragment), t = Ce();
    },
    m(o, a) {
      n && be(n, o, a), k(o, t, a), r = !0;
    },
    p(o, [a]) {
      const l = {};
      if (a & /*params*/
      1 && (l.params = /*params*/
      o[0]), a & /*schema*/
      2 && (l.schema = /*schema*/
      o[1]), a & /*$$scope, params, schema, value*/
      23 && (l.$$scope = { dirty: a, ctx: o }), a & /*params*/
      1 && i !== (i = /*params*/
      o[0].components.fieldWrapper)) {
        if (n) {
          Fe();
          const f = n;
          x(f.$$.fragment, 1, 0, () => {
            we(f, 1);
          }), We();
        }
        i ? (n = Le(i, s(o)), Oe(n.$$.fragment), J(n.$$.fragment, 1), be(n, t.parentNode, t)) : n = null;
      } else
        i && n.$set(l);
    },
    i(o) {
      r || (n && J(n.$$.fragment, o), r = !0);
    },
    o(o) {
      n && x(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && T(t), n && we(n, o);
    }
  };
}
function YS(e, n, t) {
  let { params: r } = n, { schema: i } = n, { value: s } = n;
  const o = (a) => r.pathChanged(r.path, a.currentTarget.value || void 0);
  return e.$$set = (a) => {
    "params" in a && t(0, r = a.params), "schema" in a && t(1, i = a.schema), "value" in a && t(2, s = a.value);
  }, [r, i, s, o];
}
class JS extends Ye {
  constructor(n) {
    super(), Ke(this, n, YS, KS, ze, { params: 0, schema: 1, value: 2 });
  }
}
function Pf(e, n, t) {
  const r = e.slice();
  return r[24] = n[t], r[26] = t, r;
}
function If(e, n) {
  let t, r, i, s = (
    /*getName*/
    n[13](
      /*item*/
      n[24]
    ) + ""
  ), o, a, l, f, u, c, d, m, h, g;
  function v() {
    return (
      /*dragenter_handler*/
      n[16](
        /*idx*/
        n[26]
      )
    );
  }
  return {
    key: e,
    first: null,
    c() {
      t = N("li"), r = N("a"), i = N("h2"), o = nn(s), l = Q(), f = N("div"), u = N("span"), c = Q(), d = N("span"), y(r, "href", a = /*getUrl*/
      n[12](
        /*item*/
        n[24],
        /*idx*/
        n[26]
      )), y(u, "class", "duplicate"), y(u, "title", "Duplicate this"), y(d, "class", "delete"), y(d, "title", "Delete this"), y(f, "class", "actions"), y(t, "class", m = /*getArrayBlockClasses*/
      n[14](
        /*item*/
        n[24]
      )), y(t, "draggable", !0), Se(
        t,
        "drag-over",
        /*hovering*/
        n[3] === /*idx*/
        n[26]
      ), Wn(
        t,
        "background-image",
        /*item*/
        n[24].thumbnail ? `url('${/*item*/
        n[24].thumbnail}')` : ""
      ), this.first = t;
    },
    m(w, A) {
      k(w, t, A), B(t, r), B(r, i), B(i, o), B(t, l), B(t, f), B(f, u), B(f, c), B(f, d), h || (g = [
        H(u, "click", function() {
          Be(
            /*onDuplicate*/
            n[9](
              /*idx*/
              n[26]
            )
          ) && n[9](
            /*idx*/
            n[26]
          ).apply(this, arguments);
        }),
        H(d, "click", function() {
          Be(
            /*onDelete*/
            n[8](
              /*idx*/
              n[26]
            )
          ) && n[8](
            /*idx*/
            n[26]
          ).apply(this, arguments);
        }),
        H(t, "dragstart", function() {
          Be(
            /*onDragstart*/
            n[10](
              /*idx*/
              n[26]
            )
          ) && n[10](
            /*idx*/
            n[26]
          ).apply(this, arguments);
        }),
        H(t, "drop", dr(function() {
          Be(
            /*onDrop*/
            n[11](
              /*idx*/
              n[26]
            )
          ) && n[11](
            /*idx*/
            n[26]
          ).apply(this, arguments);
        })),
        H(t, "dragover", dr(ZS)),
        H(t, "dragenter", dr(v)),
        H(
          t,
          "dragleave",
          /*dragleave_handler*/
          n[17]
        )
      ], h = !0);
    },
    p(w, A) {
      n = w, A & /*value*/
      1 && s !== (s = /*getName*/
      n[13](
        /*item*/
        n[24]
      ) + "") && hn(o, s), A & /*value*/
      1 && a !== (a = /*getUrl*/
      n[12](
        /*item*/
        n[24],
        /*idx*/
        n[26]
      )) && y(r, "href", a), A & /*value*/
      1 && m !== (m = /*getArrayBlockClasses*/
      n[14](
        /*item*/
        n[24]
      )) && y(t, "class", m), A & /*value, hovering, value*/
      9 && Se(
        t,
        "drag-over",
        /*hovering*/
        n[3] === /*idx*/
        n[26]
      ), A & /*value*/
      1 && Wn(
        t,
        "background-image",
        /*item*/
        n[24].thumbnail ? `url('${/*item*/
        n[24].thumbnail}')` : ""
      );
    },
    d(w) {
      w && T(t), h = !1, Ve(g);
    }
  };
}
function jf(e) {
  let n, t, r;
  return {
    c() {
      n = N("li"), y(n, "class", "array-block add"), Se(
        n,
        "drag-over",
        /*hovering*/
        e[3] === /*lastIdx*/
        e[5]
      );
    },
    m(i, s) {
      k(i, n, s), t || (r = [
        H(
          n,
          "click",
          /*onAdd*/
          e[6]
        ),
        H(n, "drop", dr(function() {
          Be(
            /*onDrop*/
            e[11](
              /*lastIdx*/
              e[5]
            )
          ) && e[11](
            /*lastIdx*/
            e[5]
          ).apply(this, arguments);
        })),
        H(n, "dragover", dr(VS)),
        H(n, "dragenter", dr(
          /*dragenter_handler_1*/
          e[18]
        )),
        H(
          n,
          "dragleave",
          /*dragleave_handler_1*/
          e[19]
        )
      ], t = !0);
    },
    p(i, s) {
      e = i, s & /*hovering, lastIdx*/
      40 && Se(
        n,
        "drag-over",
        /*hovering*/
        e[3] === /*lastIdx*/
        e[5]
      );
    },
    d(i) {
      i && T(n), t = !1, Ve(r);
    }
  };
}
function Cf(e) {
  let n, t, r, i, s, o, a;
  function l(u) {
    e[20](u);
  }
  let f = {
    params: {
      .../*params*/
      e[1],
      path: [
        .../*params*/
        e[1].path,
        /*value*/
        (e[0].length - 1).toString()
      ],
      containerParent: "array"
    },
    value: (
      /*value*/
      e[0][
        /*value*/
        e[0].length - 1
      ]
    )
  };
  return (
    /*addItemSchema*/
    e[4] !== void 0 && (f.schema = /*addItemSchema*/
    e[4]), n = new yr({ props: f }), Ze.push(() => Ln(n, "schema", l)), {
      c() {
        Oe(n.$$.fragment), r = Q(), i = N("button"), i.textContent = "Add", y(i, "type", "button"), y(i, "class", "submit-button new-item-submit");
      },
      m(u, c) {
        be(n, u, c), k(u, r, c), k(u, i, c), s = !0, o || (a = H(
          i,
          "click",
          /*onAddUpdate*/
          e[7]
        ), o = !0);
      },
      p(u, c) {
        const d = {};
        c & /*params, value*/
        3 && (d.params = {
          .../*params*/
          u[1],
          path: [
            .../*params*/
            u[1].path,
            /*value*/
            (u[0].length - 1).toString()
          ],
          containerParent: "array"
        }), c & /*value*/
        1 && (d.value = /*value*/
        u[0][
          /*value*/
          u[0].length - 1
        ]), !t && c & /*addItemSchema*/
        16 && (t = !0, d.schema = /*addItemSchema*/
        u[4], tt(() => t = !1)), n.$set(d);
      },
      i(u) {
        s || (J(n.$$.fragment, u), s = !0);
      },
      o(u) {
        x(n.$$.fragment, u), s = !1;
      },
      d(u) {
        we(n, u), u && T(r), u && T(i), o = !1, a();
      }
    }
  );
}
function XS(e) {
  let n, t, r = [], i = /* @__PURE__ */ new Map(), s, o, a, l, f, u = (
    /*value*/
    e[0] || []
  );
  const c = (h) => (
    /*item*/
    h[24]
  );
  for (let h = 0; h < u.length; h += 1) {
    let g = Pf(e, u, h), v = c(g);
    i.set(v, r[h] = If(v, g));
  }
  let d = !/*adding*/
  e[2] && jf(e), m = (
    /*adding*/
    e[2] && Cf(e)
  );
  return {
    c() {
      n = N("div"), t = N("ol");
      for (let h = 0; h < r.length; h += 1)
        r[h].c();
      s = Q(), d && d.c(), o = Q(), m && m.c(), y(n, "id", a = /*params*/
      e[1].path.join(".")), y(n, "class", l = "subset array-blocks depth-" + /*params*/
      e[1].path.length);
    },
    m(h, g) {
      k(h, n, g), B(n, t);
      for (let v = 0; v < r.length; v += 1)
        r[v] && r[v].m(t, null);
      B(t, s), d && d.m(t, null), B(n, o), m && m.m(n, null), f = !0;
    },
    p(h, [g]) {
      g & /*getArrayBlockClasses, value, hovering, onDragstart, onDrop, onDelete, onDuplicate, getUrl, getName*/
      32521 && (u = /*value*/
      h[0] || [], r = Jr(r, g, c, 1, h, u, i, t, oo, If, s, Pf)), /*adding*/
      h[2] ? d && (d.d(1), d = null) : d ? d.p(h, g) : (d = jf(h), d.c(), d.m(t, null)), /*adding*/
      h[2] ? m ? (m.p(h, g), g & /*adding*/
      4 && J(m, 1)) : (m = Cf(h), m.c(), J(m, 1), m.m(n, null)) : m && (Fe(), x(m, 1, 1, () => {
        m = null;
      }), We()), (!f || g & /*params*/
      2 && a !== (a = /*params*/
      h[1].path.join("."))) && y(n, "id", a), (!f || g & /*params*/
      2 && l !== (l = "subset array-blocks depth-" + /*params*/
      h[1].path.length)) && y(n, "class", l);
    },
    i(h) {
      f || (J(m), f = !0);
    },
    o(h) {
      x(m), f = !1;
    },
    d(h) {
      h && T(n);
      for (let g = 0; g < r.length; g += 1)
        r[g].d();
      d && d.d(), m && m.d();
    }
  };
}
const ZS = () => !1, VS = () => !1;
function QS(e, n, t) {
  let r, { params: i } = n, { schema: s } = n, { value: o } = n;
  if (s.type !== "array" || s.items.type !== "object")
    throw new Error("ArrayBlocks editor can only be used on an array with items of type=object");
  let a = !1, l = !1;
  const f = () => {
    i.pathChanged(i.path, [...o || [], ia(s.items)]), t(2, a = !0);
  }, u = async () => {
    var X;
    const j = o.length - 1, ee = [...i.path, j.toString()], E = (X = i.componentContext) == null ? void 0 : X.doUploads;
    E && await E(ee.join(".")), i.pathChanged(ee, o[j]), t(2, a = !1);
  }, c = (j) => () => {
    i.pathChanged(i.path, [...o.slice(0, j), ...o.slice(j + 1)], "delete", j.toString());
  }, d = (j) => () => {
    i.pathChanged(
      i.path,
      [
        ...o.slice(0, j),
        o[j],
        JSON.parse(JSON.stringify(o[j])),
        ...o.slice(j + 1)
      ],
      "duplicate",
      (j + 1).toString()
    );
  }, m = (j) => (ee) => {
    ee.dataTransfer.effectAllowed = "move", ee.dataTransfer.dropEffect = "move", ee.dataTransfer.setData("text/plain", j.toString());
  }, h = (j) => (ee) => {
    ee.dataTransfer.dropEffect = "move";
    const E = parseInt(ee.dataTransfer.getData("text/plain"));
    E < j ? i.pathChanged(i.path, [
      ...o.slice(0, E),
      ...o.slice(E + 1, j),
      o[E],
      ...o.slice(j)
    ]) : j < E && i.pathChanged(i.path, [
      ...o.slice(0, j),
      o[E],
      ...o.slice(j, E),
      ...o.slice(E + 1)
    ]), t(3, l = !1);
  };
  let g = s.effectiveUrl || location.href;
  g.includes("#") && (g = g.split("#")[0]), g.includes("?") && (g = g.split("?")[0]);
  const v = (j, ee) => {
    let E = "";
    return s.itemPathPattern && (E = s.itemPathPattern.replace(/\$\{([^}]*)\}/gi, (tn, Xe) => encodeURIComponent((Xe === "" ? j : p.get(j, Xe.split("."))) || ""))), E || (E = encodeURIComponent(j.name || j.title || "")), YT(g, E);
  }, w = (j) => j.name || j.title || "", A = (j) => {
    const E = w(j).split(" "), X = E.reduce((Xe, G) => G.length > Xe ? G.length : Xe, 0), tn = E.length;
    return X > 18 || tn > 13 ? "array-block xlarge" : X > 14 || tn > 9 ? "array-block large" : X > 10 || tn > 6 ? "array-block medium" : "array-block small";
  };
  let M;
  const W = (j) => t(3, l = j), I = () => t(3, l = !1), F = () => t(3, l = r), C = () => t(3, l = !1);
  function D(j) {
    M = j, t(4, M), t(15, s);
  }
  return e.$$set = (j) => {
    "params" in j && t(1, i = j.params), "schema" in j && t(15, s = j.schema), "value" in j && t(0, o = j.value);
  }, e.$$.update = () => {
    var j;
    if (e.$$.dirty & /*value*/
    1 && t(0, o = o || []), e.$$.dirty & /*schema*/
    32768) {
      const ee = Object.fromEntries(Object.entries(s.items.properties).filter(([E, X]) => X.type !== "array"));
      t(4, M = {
        ...s.items,
        type: "object",
        properties: ee,
        required: ((j = s.items.required) == null ? void 0 : j.filter((E) => Object.keys(ee).includes(E))) || []
      });
    }
    e.$$.dirty & /*value*/
    1 && t(5, r = (o || []).length);
  }, [
    o,
    i,
    a,
    l,
    M,
    r,
    f,
    u,
    c,
    d,
    m,
    h,
    v,
    w,
    A,
    s,
    W,
    I,
    F,
    C,
    D
  ];
}
class xS extends Ye {
  constructor(n) {
    super(), Ke(this, n, QS, XS, ze, { params: 1, schema: 15, value: 0 });
  }
}
function Mf(e, n, t) {
  const r = e.slice();
  return r[18] = n[t], r;
}
function e3(e) {
  var s, o;
  let n, t = (
    /*selected*/
    (((s = e[4]) == null ? void 0 : s.text) || "") + ""
  ), r, i = (
    /*selected*/
    ((o = e[4]) == null ? void 0 : o.image) && Lf(e)
  );
  return {
    c() {
      i && i.c(), n = Q(), r = nn(t);
    },
    m(a, l) {
      i && i.m(a, l), k(a, n, l), k(a, r, l);
    },
    p(a, l) {
      var f, u;
      /*selected*/
      (f = a[4]) != null && f.image ? i ? i.p(a, l) : (i = Lf(a), i.c(), i.m(n.parentNode, n)) : i && (i.d(1), i = null), l & /*selected*/
      16 && t !== (t = /*selected*/
      (((u = a[4]) == null ? void 0 : u.text) || "") + "") && hn(r, t);
    },
    d(a) {
      i && i.d(a), a && T(n), a && T(r);
    }
  };
}
function n3(e) {
  let n, t, r;
  return {
    c() {
      n = N("input"), y(n, "type", "text");
    },
    m(i, s) {
      k(i, n, s), Pa(
        n,
        /*match*/
        e[6]
      ), e[14](n), t || (r = [
        H(
          n,
          "input",
          /*input_1_input_handler*/
          e[13]
        ),
        H(
          n,
          "keyup",
          /*keyup*/
          e[12]
        )
      ], t = !0);
    },
    p(i, s) {
      s & /*match*/
      64 && n.value !== /*match*/
      i[6] && Pa(
        n,
        /*match*/
        i[6]
      );
    },
    d(i) {
      i && T(n), e[14](null), t = !1, Ve(r);
    }
  };
}
function Lf(e) {
  let n, t, r;
  return {
    c() {
      n = N("img"), gr(n.src, t = /*selected*/
      e[4].image) || y(n, "src", t), y(n, "alt", r = /*selected*/
      e[4].text);
    },
    m(i, s) {
      k(i, n, s);
    },
    p(i, s) {
      s & /*selected*/
      16 && !gr(n.src, t = /*selected*/
      i[4].image) && y(n, "src", t), s & /*selected*/
      16 && r !== (r = /*selected*/
      i[4].text) && y(n, "alt", r);
    },
    d(i) {
      i && T(n);
    }
  };
}
function Nf(e) {
  let n, t, r;
  return {
    c() {
      n = N("img"), gr(n.src, t = /*item*/
      e[18].image) || y(n, "src", t), y(n, "alt", r = /*item*/
      e[18].text);
    },
    m(i, s) {
      k(i, n, s);
    },
    p(i, s) {
      s & /*options*/
      32 && !gr(n.src, t = /*item*/
      i[18].image) && y(n, "src", t), s & /*options*/
      32 && r !== (r = /*item*/
      i[18].text) && y(n, "alt", r);
    },
    d(i) {
      i && T(n);
    }
  };
}
function Ff(e, n) {
  let t, r, i = (
    /*item*/
    n[18].text + ""
  ), s, o, a, l, f = (
    /*item*/
    n[18].image && Nf(n)
  );
  return {
    key: e,
    first: null,
    c() {
      t = N("div"), f && f.c(), r = Q(), s = nn(i), o = Q(), Se(
        t,
        "selected",
        /*value*/
        n[0] === /*item*/
        n[18].text
      ), this.first = t;
    },
    m(u, c) {
      k(u, t, c), f && f.m(t, null), B(t, r), B(t, s), B(t, o), a || (l = H(t, "click", function() {
        Be(
          /*handleSelect*/
          n[11](
            /*item*/
            n[18]
          )
        ) && n[11](
          /*item*/
          n[18]
        ).apply(this, arguments);
      }), a = !0);
    },
    p(u, c) {
      n = u, /*item*/
      n[18].image ? f ? f.p(n, c) : (f = Nf(n), f.c(), f.m(t, r)) : f && (f.d(1), f = null), c & /*options*/
      32 && i !== (i = /*item*/
      n[18].text + "") && hn(s, i), c & /*value, options*/
      33 && Se(
        t,
        "selected",
        /*value*/
        n[0] === /*item*/
        n[18].text
      );
    },
    d(u) {
      u && T(t), f && f.d(), a = !1, l();
    }
  };
}
function t3(e) {
  let n, t, r, i, s = [], o = /* @__PURE__ */ new Map(), a, l;
  function f(h, g) {
    return (
      /*inputState*/
      h[3] === "searching" ? n3 : e3
    );
  }
  let u = f(e), c = u(e), d = (
    /*options*/
    e[5]
  );
  const m = (h) => (
    /*item*/
    h[18].id
  );
  for (let h = 0; h < d.length; h += 1) {
    let g = Mf(e, d, h), v = m(g);
    o.set(v, s[h] = Ff(v, g));
  }
  return {
    c() {
      n = N("div"), t = N("div"), c.c(), r = Q(), i = N("div");
      for (let h = 0; h < s.length; h += 1)
        s[h].c();
      y(t, "class", "sf-selected-item input"), y(i, "class", "sf-items"), Wn(
        i,
        "display",
        /*dropdownState*/
        e[7] === "open" ? "block" : "none"
      ), y(n, "class", "sf-autocomplete"), Se(
        n,
        "readonly",
        /*readOnly*/
        e[9]
      );
    },
    m(h, g) {
      k(h, n, g), B(n, t), c.m(t, null), B(n, r), B(n, i);
      for (let v = 0; v < s.length; v += 1)
        s[v] && s[v].m(i, null);
      a || (l = H(
        t,
        "click",
        /*toggleDropDown*/
        e[10]
      ), a = !0);
    },
    p(h, g) {
      u === (u = f(h)) && c ? c.p(h, g) : (c.d(1), c = u(h), c && (c.c(), c.m(t, null))), g & /*value, options, handleSelect*/
      2081 && (d = /*options*/
      h[5], s = Jr(s, g, m, 1, h, d, o, i, oo, Ff, null, Mf)), g & /*dropdownState*/
      128 && Wn(
        i,
        "display",
        /*dropdownState*/
        h[7] === "open" ? "block" : "none"
      ), g & /*readOnly*/
      512 && Se(
        n,
        "readonly",
        /*readOnly*/
        h[9]
      );
    },
    d(h) {
      h && T(n), c.d();
      for (let g = 0; g < s.length; g += 1)
        s[g].d();
      a = !1, l();
    }
  };
}
function r3(e) {
  let n, t, r;
  var i = (
    /*params*/
    e[1].components.fieldWrapper
  );
  function s(o) {
    return {
      props: {
        params: (
          /*params*/
          o[1]
        ),
        schema: (
          /*schema*/
          o[2]
        ),
        $$slots: { default: [t3] },
        $$scope: { ctx: o }
      }
    };
  }
  return i && (n = Le(i, s(e))), {
    c() {
      n && Oe(n.$$.fragment), t = Ce();
    },
    m(o, a) {
      n && be(n, o, a), k(o, t, a), r = !0;
    },
    p(o, [a]) {
      const l = {};
      if (a & /*params*/
      2 && (l.params = /*params*/
      o[1]), a & /*schema*/
      4 && (l.schema = /*schema*/
      o[2]), a & /*$$scope, readOnly, dropdownState, options, value, match, input, inputState, selected*/
      2098169 && (l.$$scope = { dirty: a, ctx: o }), a & /*params*/
      2 && i !== (i = /*params*/
      o[1].components.fieldWrapper)) {
        if (n) {
          Fe();
          const f = n;
          x(f.$$.fragment, 1, 0, () => {
            we(f, 1);
          }), We();
        }
        i ? (n = Le(i, s(o)), Oe(n.$$.fragment), J(n.$$.fragment, 1), be(n, t.parentNode, t)) : n = null;
      } else
        i && n.$set(l);
    },
    i(o) {
      r || (n && J(n.$$.fragment, o), r = !0);
    },
    o(o) {
      n && x(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && T(t), n && we(n, o);
    }
  };
}
function i3(e, n, t) {
  let r, { params: i } = n, { schema: s } = n, { value: o } = n, a = "showing-value", l = "", f = "closed", u, c = [], d, m = null, h;
  const g = (I) => {
    if (d) {
      m && clearTimeout(m);
      const F = new URL(d, location.href);
      I && F.searchParams.append("match", I), m = setTimeout(
        () => fetch(F.toString(), { credentials: "include" }).then((C) => C.json()).then((C) => {
          C.length > 0 && typeof C[0] != "object" ? t(5, c = C.map((D) => ({ id: D, text: D, image: "" }))) : t(5, c = C), t(7, f = "open");
        }),
        100
      );
    }
  }, v = async () => {
    t(7, f = f === "open" ? "closed" : "open"), f === "open" && (t(3, a = "searching"), await bi(), h.focus());
  }, w = (I) => () => {
    r || (t(0, o = I.id), i.pathChanged(i.path, I.id), t(3, a = "showing-value"), t(7, f = "closed"));
  }, A = (I) => {
    var F;
    g((F = I.currentTarget) == null ? void 0 : F.value);
  };
  function M() {
    l = this.value, t(6, l);
  }
  function W(I) {
    Ze[I ? "unshift" : "push"](() => {
      h = I, t(8, h);
    });
  }
  return e.$$set = (I) => {
    "params" in I && t(1, i = I.params), "schema" in I && t(2, s = I.schema), "value" in I && t(0, o = I.value);
  }, e.$$.update = () => {
    e.$$.dirty & /*schema*/
    4 && (d = s.url || ""), e.$$.dirty & /*params, schema*/
    6 && t(9, r = i.containerReadOnly || s.readOnly || !1), e.$$.dirty & /*options, value*/
    33 && t(4, u = c.find((I) => I.id === o)), e.$$.dirty & /*selected, inputState*/
    24 && t(3, a = u ? a : "searching");
  }, [
    o,
    i,
    s,
    a,
    u,
    c,
    l,
    f,
    h,
    r,
    v,
    w,
    A,
    M,
    W
  ];
}
class s3 extends Ye {
  constructor(n) {
    super(), Ke(this, n, i3, r3, ze, { params: 1, schema: 2, value: 0 });
  }
}
function o3(e) {
  let n, t, r, i;
  return {
    c() {
      n = N("input"), y(n, "id", t = /*params*/
      e[0].path.join(".")), y(n, "name", r = /*params*/
      e[0].path.join(".")), y(n, "type", "hidden"), n.value = i = /*value*/
      e[1] || "";
    },
    m(s, o) {
      k(s, n, o);
    },
    p(s, [o]) {
      o & /*params*/
      1 && t !== (t = /*params*/
      s[0].path.join(".")) && y(n, "id", t), o & /*params*/
      1 && r !== (r = /*params*/
      s[0].path.join(".")) && y(n, "name", r), o & /*value*/
      2 && i !== (i = /*value*/
      s[1] || "") && (n.value = i);
    },
    i: xe,
    o: xe,
    d(s) {
      s && T(n);
    }
  };
}
function a3(e, n, t) {
  let { params: r } = n, { value: i } = n;
  return e.$$set = (s) => {
    "params" in s && t(0, r = s.params), "value" in s && t(1, i = s.value);
  }, [r, i];
}
class l3 extends Ye {
  constructor(n) {
    super(), Ke(this, n, a3, o3, ze, { params: 0, value: 1 });
  }
}
function Wf(e, n, t) {
  const r = e.slice();
  return r[36] = n[t], r[38] = t, r;
}
function Df(e, n, t) {
  const r = e.slice();
  return r[39] = n[t], r;
}
function Uf(e, n, t) {
  const r = e.slice();
  return r[42] = n[t], r[38] = t, r;
}
function Bf(e) {
  let n, t, r, i, s, o = (
    /*params*/
    (e[2].collapsible || /*legendText*/
    e[17]) && qf(e)
  ), a = (
    /*collapserOpenState*/
    e[9] === "open" && Hf(e)
  );
  return {
    c() {
      n = N("fieldset"), o && o.c(), t = Q(), a && a.c(), y(n, "name", r = /*params*/
      e[2].path.join(".")), y(n, "class", i = "subset array list-detail depth-" + /*params*/
      e[2].path.length);
    },
    m(l, f) {
      k(l, n, f), o && o.m(n, null), B(n, t), a && a.m(n, null), s = !0;
    },
    p(l, f) {
      /*params*/
      l[2].collapsible || /*legendText*/
      l[17] ? o ? o.p(l, f) : (o = qf(l), o.c(), o.m(n, t)) : o && (o.d(1), o = null), /*collapserOpenState*/
      l[9] === "open" ? a ? (a.p(l, f), f[0] & /*collapserOpenState*/
      512 && J(a, 1)) : (a = Hf(l), a.c(), J(a, 1), a.m(n, null)) : a && (Fe(), x(a, 1, 1, () => {
        a = null;
      }), We()), (!s || f[0] & /*params*/
      4 && r !== (r = /*params*/
      l[2].path.join("."))) && y(n, "name", r), (!s || f[0] & /*params*/
      4 && i !== (i = "subset array list-detail depth-" + /*params*/
      l[2].path.length)) && y(n, "class", i);
    },
    i(l) {
      s || (J(a), s = !0);
    },
    o(l) {
      x(a), s = !1;
    },
    d(l) {
      l && T(n), o && o.d(), a && a.d();
    }
  };
}
function qf(e) {
  let n, t, r, i = En(
    /*legendText*/
    e[17]
  ) + "", s, o = (
    /*params*/
    e[2].collapsible && Gf(e)
  ), a = (
    /*schema*/
    e[0].description && zf(e)
  );
  return {
    c() {
      n = N("legend"), o && o.c(), t = Q(), r = N("span"), s = Q(), a && a.c(), y(r, "class", "subset-label-title object-label-title"), y(n, "class", "subset-label array-label");
    },
    m(l, f) {
      k(l, n, f), o && o.m(n, null), B(n, t), B(n, r), r.innerHTML = i, B(n, s), a && a.m(n, null);
    },
    p(l, f) {
      /*params*/
      l[2].collapsible ? o ? o.p(l, f) : (o = Gf(l), o.c(), o.m(n, t)) : o && (o.d(1), o = null), f[0] & /*legendText*/
      131072 && i !== (i = En(
        /*legendText*/
        l[17]
      ) + "") && (r.innerHTML = i), /*schema*/
      l[0].description ? a ? a.p(l, f) : (a = zf(l), a.c(), a.m(n, null)) : a && (a.d(1), a = null);
    },
    d(l) {
      l && T(n), o && o.d(), a && a.d();
    }
  };
}
function Gf(e) {
  let n, t, r, i;
  return {
    c() {
      n = N("span"), y(n, "class", t = "collapser " + /*collapserOpenState*/
      e[9]);
    },
    m(s, o) {
      k(s, n, o), r || (i = H(
        n,
        "click",
        /*toggle*/
        e[18]
      ), r = !0);
    },
    p(s, o) {
      o[0] & /*collapserOpenState*/
      512 && t !== (t = "collapser " + /*collapserOpenState*/
      s[9]) && y(n, "class", t);
    },
    d(s) {
      s && T(n), r = !1, i();
    }
  };
}
function zf(e) {
  let n, t = En(
    /*schema*/
    e[0].description
  ) + "";
  return {
    c() {
      n = N("span"), y(n, "class", "subset-label-description object-label-description");
    },
    m(r, i) {
      k(r, n, i), n.innerHTML = t;
    },
    p(r, i) {
      i[0] & /*schema*/
      1 && t !== (t = En(
        /*schema*/
        r[0].description
      ) + "") && (n.innerHTML = t);
    },
    d(r) {
      r && T(n);
    }
  };
}
function Hf(e) {
  let n, t, r, i = (
    /*controls*/
    e[14].includes("add")
  ), s, o;
  const a = [u3, f3], l = [];
  function f(c, d) {
    return (
      /*emptyText*/
      c[15] ? 1 : 0
    );
  }
  n = f(e), t = l[n] = a[n](e);
  let u = i && tu(e);
  return {
    c() {
      t.c(), r = Q(), u && u.c(), s = Ce();
    },
    m(c, d) {
      l[n].m(c, d), k(c, r, d), u && u.m(c, d), k(c, s, d), o = !0;
    },
    p(c, d) {
      let m = n;
      n = f(c), n === m ? l[n].p(c, d) : (Fe(), x(l[m], 1, 1, () => {
        l[m] = null;
      }), We(), t = l[n], t ? t.p(c, d) : (t = l[n] = a[n](c), t.c()), J(t, 1), t.m(r.parentNode, r)), d[0] & /*controls*/
      16384 && (i = /*controls*/
      c[14].includes("add")), i ? u ? u.p(c, d) : (u = tu(c), u.c(), u.m(s.parentNode, s)) : u && (u.d(1), u = null);
    },
    i(c) {
      o || (J(t), o = !0);
    },
    o(c) {
      x(t), o = !1;
    },
    d(c) {
      l[n].d(c), c && T(r), u && u.d(c), c && T(s);
    }
  };
}
function f3(e) {
  let n, t;
  return {
    c() {
      n = N("div"), t = nn(
        /*emptyText*/
        e[15]
      ), y(n, "class", "emptyText");
    },
    m(r, i) {
      k(r, n, i), B(n, t);
    },
    p(r, i) {
      i[0] & /*emptyText*/
      32768 && hn(
        t,
        /*emptyText*/
        r[15]
      );
    },
    i: xe,
    o: xe,
    d(r) {
      r && T(n);
    }
  };
}
function u3(e) {
  let n, t, r, i, s, o;
  const a = [d3, c3], l = [];
  function f(u, c) {
    return (
      /*mode*/
      u[3] === "list" ? 0 : 1
    );
  }
  return t = f(e), r = l[t] = a[t](e), {
    c() {
      n = N("div"), r.c(), y(n, "class", "table-container"), y(n, "tabindex", "0"), Wn(
        n,
        "grid-template-columns",
        /*gridTemplateColumns*/
        e[13]
      );
    },
    m(u, c) {
      k(u, n, c), l[t].m(n, null), i = !0, s || (o = [
        H(
          n,
          "keyup",
          /*onKey*/
          e[22]
        ),
        H(
          n,
          "click",
          /*onClick*/
          e[23]
        )
      ], s = !0);
    },
    p(u, c) {
      let d = t;
      t = f(u), t === d ? l[t].p(u, c) : (Fe(), x(l[d], 1, 1, () => {
        l[d] = null;
      }), We(), r = l[t], r ? r.p(u, c) : (r = l[t] = a[t](u), r.c()), J(r, 1), r.m(n, null)), c[0] & /*gridTemplateColumns*/
      8192 && Wn(
        n,
        "grid-template-columns",
        /*gridTemplateColumns*/
        u[13]
      );
    },
    i(u) {
      i || (J(r), i = !0);
    },
    o(u) {
      x(r), i = !1;
    },
    d(u) {
      u && T(n), l[t].d(), s = !1, Ve(o);
    }
  };
}
function c3(e) {
  let n, t, r, i, s, o, a, l, f;
  function u(m) {
    e[33](m);
  }
  let c = {
    params: {
      .../*params*/
      e[2],
      path: [
        .../*params*/
        e[2].path,
        /*selectedIdx*/
        e[10].toString()
      ],
      containerParent: "array",
      containerReadOnly: (
        /*params*/
        e[2].containerReadOnly || /*schema*/
        e[0].readOnly || !1
      )
    },
    value: (
      /*selectedValue*/
      e[12]
    )
  };
  /*schema*/
  e[0].items !== void 0 && (c.schema = /*schema*/
  e[0].items), i = new yr({ props: c }), Ze.push(() => Ln(i, "schema", u));
  let d = (
    /*schema*/
    e[0].submit && Kf(e)
  );
  return {
    c() {
      n = N("button"), n.textContent = "List", t = Q(), r = N("div"), Oe(i.$$.fragment), o = Q(), d && d.c(), y(n, "class", "to-list"), y(n, "type", "button"), y(r, "class", "element");
    },
    m(m, h) {
      k(m, n, h), e[32](n), k(m, t, h), k(m, r, h), be(i, r, null), B(r, o), d && d.m(r, null), a = !0, l || (f = H(
        n,
        "click",
        /*onModeList*/
        e[25]
      ), l = !0);
    },
    p(m, h) {
      const g = {};
      h[0] & /*params, selectedIdx, schema*/
      1029 && (g.params = {
        .../*params*/
        m[2],
        path: [
          .../*params*/
          m[2].path,
          /*selectedIdx*/
          m[10].toString()
        ],
        containerParent: "array",
        containerReadOnly: (
          /*params*/
          m[2].containerReadOnly || /*schema*/
          m[0].readOnly || !1
        )
      }), h[0] & /*selectedValue*/
      4096 && (g.value = /*selectedValue*/
      m[12]), !s && h[0] & /*schema*/
      1 && (s = !0, g.schema = /*schema*/
      m[0].items, tt(() => s = !1)), i.$set(g), /*schema*/
      m[0].submit ? d ? d.p(m, h) : (d = Kf(m), d.c(), d.m(r, null)) : d && (d.d(1), d = null);
    },
    i(m) {
      a || (J(i.$$.fragment, m), a = !0);
    },
    o(m) {
      x(i.$$.fragment, m), a = !1;
    },
    d(m) {
      m && T(n), e[32](null), m && T(t), m && T(r), we(i), d && d.d(), l = !1, f();
    }
  };
}
function d3(e) {
  let n, t, r = [], i = /* @__PURE__ */ new Map(), s, o = (
    /*listFields*/
    e[6]
  ), a = [];
  for (let c = 0; c < o.length; c += 1)
    a[c] = Yf(Uf(e, o, c));
  let l = !/*readOnly*/
  e[7] && Jf(), f = (
    /*rowView*/
    e[4]
  );
  const u = (c) => (
    /*idx*/
    c[38]
  );
  for (let c = 0; c < f.length; c += 1) {
    let d = Wf(e, f, c), m = u(d);
    i.set(m, r[c] = nu(m, d));
  }
  return {
    c() {
      for (let c = 0; c < a.length; c += 1)
        a[c].c();
      n = Q(), l && l.c(), t = Q();
      for (let c = 0; c < r.length; c += 1)
        r[c].c();
      s = Ce();
    },
    m(c, d) {
      for (let m = 0; m < a.length; m += 1)
        a[m] && a[m].m(c, d);
      k(c, n, d), l && l.m(c, d), k(c, t, d);
      for (let m = 0; m < r.length; m += 1)
        r[m] && r[m].m(c, d);
      k(c, s, d);
    },
    p(c, d) {
      if (d[0] & /*headingClass, sort, onSort, listProps, onSortKey, listFields*/
      70254944) {
        o = /*listFields*/
        c[6];
        let m;
        for (m = 0; m < o.length; m += 1) {
          const h = Uf(c, o, m);
          a[m] ? a[m].p(h, d) : (a[m] = Yf(h), a[m].c(), a[m].m(n.parentNode, n));
        }
        for (; m < a.length; m += 1)
          a[m].d(1);
        a.length = o.length;
      }
      /*readOnly*/
      c[7] ? l && (l.d(1), l = null) : l || (l = Jf(), l.c(), l.m(t.parentNode, t)), d[0] & /*rowView, params, value, controls, sort, readOnly, selectedIdx, onSelect, listProps*/
      542134 && (f = /*rowView*/
      c[4], r = Jr(r, d, u, 1, c, f, i, s.parentNode, oo, nu, s, Wf));
    },
    i: xe,
    o: xe,
    d(c) {
      Yr(a, c), c && T(n), l && l.d(c), c && T(t);
      for (let d = 0; d < r.length; d += 1)
        r[d].d(c);
      c && T(s);
    }
  };
}
function Kf(e) {
  let n, t = (
    /*schema*/
    e[0].submit + ""
  ), r, i, s;
  return {
    c() {
      n = N("button"), r = nn(t), y(n, "type", "button"), y(n, "class", "submit-button");
    },
    m(o, a) {
      k(o, n, a), B(n, r), i || (s = H(
        n,
        "click",
        /*onSubmit*/
        e[24]
      ), i = !0);
    },
    p(o, a) {
      a[0] & /*schema*/
      1 && t !== (t = /*schema*/
      o[0].submit + "") && hn(r, t);
    },
    d(o) {
      o && T(n), i = !1, s();
    }
  };
}
function Yf(e) {
  let n, t = (
    /*fieldName*/
    e[42] + ""
  ), r, i, s, o;
  return {
    c() {
      n = N("div"), r = nn(t), y(n, "class", i = /*headingClass*/
      e[26](
        /*idx*/
        e[38],
        /*sort*/
        e[5]
      )), y(n, "tabindex", "0");
    },
    m(a, l) {
      k(a, n, l), B(n, r), s || (o = [
        H(n, "click", Fn(function() {
          Be(
            /*onSort*/
            e[20](
              /*listProps*/
              e[8][
                /*idx*/
                e[38]
              ]
            )
          ) && e[20](
            /*listProps*/
            e[8][
              /*idx*/
              e[38]
            ]
          ).apply(this, arguments);
        })),
        H(n, "keyup", Fn(function() {
          Be(
            /*onSortKey*/
            e[21](
              /*listProps*/
              e[8][
                /*idx*/
                e[38]
              ]
            )
          ) && e[21](
            /*listProps*/
            e[8][
              /*idx*/
              e[38]
            ]
          ).apply(this, arguments);
        }))
      ], s = !0);
    },
    p(a, l) {
      e = a, l[0] & /*listFields*/
      64 && t !== (t = /*fieldName*/
      e[42] + "") && hn(r, t), l[0] & /*sort*/
      32 && i !== (i = /*headingClass*/
      e[26](
        /*idx*/
        e[38],
        /*sort*/
        e[5]
      )) && y(n, "class", i);
    },
    d(a) {
      a && T(n), s = !1, Ve(o);
    }
  };
}
function Jf(e) {
  let n;
  return {
    c() {
      n = N("div"), n.textContent = " ", y(n, "class", "buttons-header");
    },
    m(t, r) {
      k(t, n, r);
    },
    d(t) {
      t && T(n);
    }
  };
}
function Xf(e) {
  let n, t = (
    /*item*/
    (e[36][
      /*propName*/
      e[39]
    ] === void 0 ? " " : (
      /*item*/
      e[36][
        /*propName*/
        e[39]
      ]
    )) + ""
  ), r;
  return {
    c() {
      n = N("div"), r = nn(t), y(n, "class", "item");
    },
    m(i, s) {
      k(i, n, s), B(n, r);
    },
    p(i, s) {
      s[0] & /*rowView, listProps*/
      272 && t !== (t = /*item*/
      (i[36][
        /*propName*/
        i[39]
      ] === void 0 ? " " : (
        /*item*/
        i[36][
          /*propName*/
          i[39]
        ]
      )) + "") && hn(r, t);
    },
    d(i) {
      i && T(n);
    }
  };
}
function Zf(e) {
  let n, t, r = (
    /*controls*/
    e[14].includes("delete")
  ), i, s = (
    /*controls*/
    e[14].includes("duplicate")
  ), o, a = (
    /*controls*/
    e[14].includes("reorder") && /*sort*/
    e[5] === null && /*idx*/
    e[38] > 0
  ), l, f = (
    /*controls*/
    e[14].includes("reorder") && /*sort*/
    e[5] === null && /*idx*/
    e[38] < /*value*/
    (e[1] || []).length - 1
  ), u, c = r && Vf(e), d = s && Qf(e), m = a && xf(e), h = f && eu(e);
  return {
    c() {
      n = N("div"), t = N("div"), c && c.c(), i = Q(), d && d.c(), o = Q(), m && m.c(), l = Q(), h && h.c(), u = Q(), y(t, "class", "row-buttons"), y(n, "class", "array-buttons");
    },
    m(g, v) {
      k(g, n, v), B(n, t), c && c.m(t, null), B(t, i), d && d.m(t, null), B(t, o), m && m.m(t, null), B(t, l), h && h.m(t, null), B(n, u);
    },
    p(g, v) {
      v[0] & /*controls*/
      16384 && (r = /*controls*/
      g[14].includes("delete")), r ? c ? c.p(g, v) : (c = Vf(g), c.c(), c.m(t, i)) : c && (c.d(1), c = null), v[0] & /*controls*/
      16384 && (s = /*controls*/
      g[14].includes("duplicate")), s ? d ? d.p(g, v) : (d = Qf(g), d.c(), d.m(t, o)) : d && (d.d(1), d = null), v[0] & /*controls, sort, rowView*/
      16432 && (a = /*controls*/
      g[14].includes("reorder") && /*sort*/
      g[5] === null && /*idx*/
      g[38] > 0), a ? m ? m.p(g, v) : (m = xf(g), m.c(), m.m(t, l)) : m && (m.d(1), m = null), v[0] & /*controls, sort, rowView, value*/
      16434 && (f = /*controls*/
      g[14].includes("reorder") && /*sort*/
      g[5] === null && /*idx*/
      g[38] < /*value*/
      (g[1] || []).length - 1), f ? h ? h.p(g, v) : (h = eu(g), h.c(), h.m(t, null)) : h && (h.d(1), h = null);
    },
    d(g) {
      g && T(n), c && c.d(), d && d.d(), m && m.d(), h && h.d();
    }
  };
}
function Vf(e) {
  let n, t, r;
  return {
    c() {
      n = N("button"), y(n, "type", "button"), y(n, "class", "list-control delete"), y(n, "title", "delete");
    },
    m(i, s) {
      k(i, n, s), t || (r = [
        H(n, "click", Fn(function() {
          Be(Mi(
            /*idx*/
            e[38],
            /*params*/
            e[2],
            /*value*/
            e[1]
          )) && Mi(
            /*idx*/
            e[38],
            /*params*/
            e[2],
            /*value*/
            e[1]
          ).apply(this, arguments);
        })),
        H(n, "keyup", Fn(
          /*keyup_handler*/
          e[31]
        ))
      ], t = !0);
    },
    p(i, s) {
      e = i;
    },
    d(i) {
      i && T(n), t = !1, Ve(r);
    }
  };
}
function Qf(e) {
  let n, t, r;
  return {
    c() {
      n = N("button"), y(n, "type", "button"), y(n, "class", "list-control duplicate"), y(n, "title", "duplicate");
    },
    m(i, s) {
      k(i, n, s), t || (r = [
        H(n, "click", Fn(function() {
          Be(Li(
            /*idx*/
            e[38],
            /*params*/
            e[2],
            /*value*/
            e[1]
          )) && Li(
            /*idx*/
            e[38],
            /*params*/
            e[2],
            /*value*/
            e[1]
          ).apply(this, arguments);
        })),
        H(n, "keyup", Fn(
          /*keyup_handler_1*/
          e[30]
        ))
      ], t = !0);
    },
    p(i, s) {
      e = i;
    },
    d(i) {
      i && T(n), t = !1, Ve(r);
    }
  };
}
function xf(e) {
  let n, t, r;
  return {
    c() {
      n = N("button"), y(n, "type", "button"), y(n, "class", "list-control up"), y(n, "title", "move up");
    },
    m(i, s) {
      k(i, n, s), t || (r = [
        H(n, "click", Fn(function() {
          Be(Ni(
            /*idx*/
            e[38],
            /*params*/
            e[2],
            /*value*/
            e[1]
          )) && Ni(
            /*idx*/
            e[38],
            /*params*/
            e[2],
            /*value*/
            e[1]
          ).apply(this, arguments);
        })),
        H(n, "keyup", Fn(
          /*keyup_handler_2*/
          e[29]
        ))
      ], t = !0);
    },
    p(i, s) {
      e = i;
    },
    d(i) {
      i && T(n), t = !1, Ve(r);
    }
  };
}
function eu(e) {
  let n, t, r;
  return {
    c() {
      n = N("button"), y(n, "type", "button"), y(n, "class", "list-control down"), y(n, "title", "move down");
    },
    m(i, s) {
      k(i, n, s), t || (r = [
        H(n, "click", Fn(function() {
          Be(Fi(
            /*idx*/
            e[38],
            /*params*/
            e[2],
            /*value*/
            e[1]
          )) && Fi(
            /*idx*/
            e[38],
            /*params*/
            e[2],
            /*value*/
            e[1]
          ).apply(this, arguments);
        })),
        H(n, "keyup", Fn(
          /*keyup_handler_3*/
          e[28]
        ))
      ], t = !0);
    },
    p(i, s) {
      e = i;
    },
    d(i) {
      i && T(n), t = !1, Ve(r);
    }
  };
}
function nu(e, n) {
  let t, r, i, s, o, a = (
    /*listProps*/
    n[8]
  ), l = [];
  for (let u = 0; u < a.length; u += 1)
    l[u] = Xf(Df(n, a, u));
  let f = !/*readOnly*/
  n[7] && Zf(n);
  return {
    key: e,
    first: null,
    c() {
      t = N("div");
      for (let u = 0; u < l.length; u += 1)
        l[u].c();
      r = Q(), f && f.c(), i = Ce(), y(t, "class", "row-wrapper"), Se(
        t,
        "selected",
        /*idx*/
        n[38] === /*selectedIdx*/
        n[10]
      ), this.first = t;
    },
    m(u, c) {
      k(u, t, c);
      for (let d = 0; d < l.length; d += 1)
        l[d] && l[d].m(t, null);
      k(u, r, c), f && f.m(u, c), k(u, i, c), s || (o = H(t, "click", function() {
        Be(
          /*onSelect*/
          n[19](
            /*idx*/
            n[38]
          )
        ) && n[19](
          /*idx*/
          n[38]
        ).apply(this, arguments);
      }), s = !0);
    },
    p(u, c) {
      if (n = u, c[0] & /*rowView, listProps*/
      272) {
        a = /*listProps*/
        n[8];
        let d;
        for (d = 0; d < a.length; d += 1) {
          const m = Df(n, a, d);
          l[d] ? l[d].p(m, c) : (l[d] = Xf(m), l[d].c(), l[d].m(t, null));
        }
        for (; d < l.length; d += 1)
          l[d].d(1);
        l.length = a.length;
      }
      c[0] & /*rowView, selectedIdx*/
      1040 && Se(
        t,
        "selected",
        /*idx*/
        n[38] === /*selectedIdx*/
        n[10]
      ), /*readOnly*/
      n[7] ? f && (f.d(1), f = null) : f ? f.p(n, c) : (f = Zf(n), f.c(), f.m(i.parentNode, i));
    },
    d(u) {
      u && T(t), Yr(l, u), u && T(r), f && f.d(u), u && T(i), s = !1, o();
    }
  };
}
function tu(e) {
  let n, t, r;
  return {
    c() {
      n = N("button"), y(n, "type", "button"), y(n, "class", "list-control add"), y(n, "title", "add item");
    },
    m(i, s) {
      k(i, n, s), t || (r = H(n, "click", function() {
        Be(Ci(
          /*schema*/
          e[0],
          /*params*/
          e[2],
          /*value*/
          e[1]
        )) && Ci(
          /*schema*/
          e[0],
          /*params*/
          e[2],
          /*value*/
          e[1]
        ).apply(this, arguments);
      }), t = !0);
    },
    p(i, s) {
      e = i;
    },
    d(i) {
      i && T(n), t = !1, r();
    }
  };
}
function p3(e) {
  let n, t, r = (
    /*showWrapper*/
    e[16] && Bf(e)
  );
  return {
    c() {
      r && r.c(), n = Ce();
    },
    m(i, s) {
      r && r.m(i, s), k(i, n, s), t = !0;
    },
    p(i, s) {
      /*showWrapper*/
      i[16] ? r ? (r.p(i, s), s[0] & /*showWrapper*/
      65536 && J(r, 1)) : (r = Bf(i), r.c(), J(r, 1), r.m(n.parentNode, n)) : r && (Fe(), x(r, 1, 1, () => {
        r = null;
      }), We());
    },
    i(i) {
      t || (J(r), t = !0);
    },
    o(i) {
      x(r), t = !1;
    },
    d(i) {
      r && r.d(i), i && T(n);
    }
  };
}
function h3(e, n, t) {
  let r, i, s, o, a, l, f, u, c, d, { params: m } = n, { schema: h } = n, { value: g } = n, v = m.path.length === 0 || !m.collapsible ? "open" : "closed", w = -1, A = "list", M = [], W, I = !1, F = null;
  if (h.type !== "array" || h.items.type !== "object")
    throw new Error("ListDetail editor can only be used on an array with items of type=object");
  const C = () => {
    t(9, v = v === "open" ? "closed" : "open");
  }, D = (z) => async () => {
    t(3, A = "detail"), t(10, w = g.findIndex((R) => R === M[z])), t(12, F = g[w]), await bi(), W == null || W.focus();
  }, j = (z) => () => {
    (o == null ? void 0 : o.field) === z && o.direction === "desc" ? t(5, o = null) : t(5, o = {
      field: z,
      direction: (o == null ? void 0 : o.field) === z ? "desc" : "asc"
    });
  }, ee = (z) => (R) => {
    R.key === "Enter" && ((o == null ? void 0 : o.field) === z && o.direction === "desc" ? t(5, o = null) : t(5, o = {
      field: z,
      direction: (o == null ? void 0 : o.field) === z ? "desc" : "asc"
    }));
  }, E = async (z) => {
    A === "list" && !I && (z.target, console.log(`key ${z.key} selectedIdx ${w} len ${g.length}`), z.key === "ArrowDown" && w + 1 < g.length ? (t(10, w += 1), await bi()) : z.key === "ArrowUp" && w > 0 ? t(10, w -= 1) : z.key === "Enter" && D(w)()), I = !1;
  }, X = (z) => {
    A === "list" && z.currentTarget.focus();
  }, tn = () => {
    m.pathChanged([...m.path, w.toString()], F, "innerSubmit");
  }, Xe = async () => {
    t(3, A = "list"), I = !0, await bi(), t(10, w = M.findIndex((z) => z === F));
  }, G = (z) => (R, Bn) => R[z.field] < Bn[z.field] ? z.direction === "asc" ? -1 : 1 : R[z.field] > Bn[z.field] ? z.direction === "desc" ? -1 : 1 : 0, pe = (z, R) => "heading " + (i[z] !== (R == null ? void 0 : R.field) ? "" : R == null ? void 0 : R.direction);
  function Ge(z) {
    di.call(this, e, z);
  }
  function _n(z) {
    di.call(this, e, z);
  }
  function xn(z) {
    di.call(this, e, z);
  }
  function Tt(z) {
    di.call(this, e, z);
  }
  function kt(z) {
    Ze[z ? "unshift" : "push"](() => {
      W = z, t(11, W);
    });
  }
  function et(z) {
    e.$$.not_equal(h.items, z) && (h.items = z, t(0, h));
  }
  return e.$$set = (z) => {
    "params" in z && t(2, m = z.params), "schema" in z && t(0, h = z.schema), "value" in z && t(1, g = z.value);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*value*/
    2 && t(1, g = g || []), e.$$.dirty[0] & /*schema*/
    1 && t(27, r = h.items || {}), e.$$.dirty[0] & /*itemSchema*/
    134217728 && t(8, i = Array.isArray(r.headings) && typeof r.headings[0] == "string" && r.headings || Object.keys(r.properties)), e.$$.dirty[0] & /*listProps, itemSchema, params*/
    134217988 && t(6, s = i.map((z) => zt(r.properties[z], [...m.path, "0", z]))), e.$$.dirty[0] & /*itemSchema*/
    134217728 && t(5, o = r.defaultSort || null), e.$$.dirty[0] & /*schema, params*/
    5 && t(17, a = zt(h, m.path)), e.$$.dirty[0] & /*value, schema*/
    3 && t(16, l = g && g.length > 0 || h.emptyDisplay !== !1), e.$$.dirty[0] & /*value, schema*/
    3 && t(15, f = (!g || g.length === 0) && typeof h.emptyDisplay == "string" && h.emptyDisplay), e.$$.dirty[0] & /*params, schema*/
    5 && t(7, u = m.containerReadOnly || h.readOnly || !1), e.$$.dirty[0] & /*schema, readOnly*/
    129 && t(14, c = h.controls === void 0 ? u ? "" : "add, reorder, delete, duplicate" : h.controls), e.$$.dirty[0] & /*mode, listFields*/
    72 && t(13, d = A === "list" ? `repeat(${s.length}, auto) 50px` : null), e.$$.dirty[0] & /*value, sort, rowView*/
    50 && (t(4, M = [...g]), o && M.sort(G(o)));
  }, [
    h,
    g,
    m,
    A,
    M,
    o,
    s,
    u,
    i,
    v,
    w,
    W,
    F,
    d,
    c,
    f,
    l,
    a,
    C,
    D,
    j,
    ee,
    E,
    X,
    tn,
    Xe,
    pe,
    r,
    Ge,
    _n,
    xn,
    Tt,
    kt,
    et
  ];
}
class m3 extends Ye {
  constructor(n) {
    super(), Ke(this, n, h3, p3, ze, { params: 2, schema: 0, value: 1 }, null, [-1, -1]);
  }
}
function g3(e) {
  let n, t, r, i, s, o;
  return {
    c() {
      n = N("input"), y(n, "id", t = /*params*/
      e[0].path.join(".")), y(n, "name", r = /*params*/
      e[0].path.join(".")), y(n, "class", "currency"), y(n, "type", y3), n.value = /*formattedString*/
      e[2], n.disabled = i = /*schema*/
      e[1].readOnly || /*params*/
      e[0].containerReadOnly;
    },
    m(a, l) {
      k(a, n, l), s || (o = H(
        n,
        "input",
        /*onInput*/
        e[3]
      ), s = !0);
    },
    p(a, l) {
      l & /*params*/
      1 && t !== (t = /*params*/
      a[0].path.join(".")) && y(n, "id", t), l & /*params*/
      1 && r !== (r = /*params*/
      a[0].path.join(".")) && y(n, "name", r), l & /*formattedString*/
      4 && n.value !== /*formattedString*/
      a[2] && (n.value = /*formattedString*/
      a[2]), l & /*schema, params*/
      3 && i !== (i = /*schema*/
      a[1].readOnly || /*params*/
      a[0].containerReadOnly) && (n.disabled = i);
    },
    d(a) {
      a && T(n), s = !1, o();
    }
  };
}
function _3(e) {
  let n, t, r;
  var i = (
    /*params*/
    e[0].components.fieldWrapper
  );
  function s(o) {
    return {
      props: {
        params: (
          /*params*/
          o[0]
        ),
        schema: (
          /*schema*/
          o[1]
        ),
        $$slots: { default: [g3] },
        $$scope: { ctx: o }
      }
    };
  }
  return i && (n = Le(i, s(e))), {
    c() {
      n && Oe(n.$$.fragment), t = Ce();
    },
    m(o, a) {
      n && be(n, o, a), k(o, t, a), r = !0;
    },
    p(o, [a]) {
      const l = {};
      if (a & /*params*/
      1 && (l.params = /*params*/
      o[0]), a & /*schema*/
      2 && (l.schema = /*schema*/
      o[1]), a & /*$$scope, params, formattedString, schema*/
      519 && (l.$$scope = { dirty: a, ctx: o }), a & /*params*/
      1 && i !== (i = /*params*/
      o[0].components.fieldWrapper)) {
        if (n) {
          Fe();
          const f = n;
          x(f.$$.fragment, 1, 0, () => {
            we(f, 1);
          }), We();
        }
        i ? (n = Le(i, s(o)), Oe(n.$$.fragment), J(n.$$.fragment, 1), be(n, t.parentNode, t)) : n = null;
      } else
        i && n.$set(l);
    },
    i(o) {
      r || (n && J(n.$$.fragment, o), r = !0);
    },
    o(o) {
      n && x(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && T(t), n && we(n, o);
    }
  };
}
let y3 = "text";
function v3(e, n, t) {
  let r, { params: i } = n, { schema: s } = n, { value: o } = n, a = i.componentContext;
  const l = a && a.currencySymbol || "$";
  let f;
  a && a.formatCurrency ? f = a.formatCurrency : f = (d) => !d && d !== 0 ? "" : d === Math.round(d) ? `${l}${d}` : `${l}${d.toFixed(2)}`;
  let u = "";
  const c = (d) => {
    let m = d.currentTarget.value;
    if (m === "" || m == l)
      t(6, u = ""), i.pathChanged(i.path, null);
    else {
      const h = m.replace(l, ""), g = parseFloat(h), v = f(g), w = v.replace(l, "");
      t(6, u = v === m || w === m ? "" : m), isNaN(g) || i.pathChanged(i.path, g);
    }
  };
  return e.$$set = (d) => {
    "params" in d && t(0, i = d.params), "schema" in d && t(1, s = d.schema), "value" in d && t(4, o = d.value);
  }, e.$$.update = () => {
    e.$$.dirty & /*holdString, formatCurrency, value*/
    112 && t(2, r = u || f(o || ""));
  }, [i, s, r, c, o, f, u];
}
class b3 extends Ye {
  constructor(n) {
    super(), Ke(this, n, v3, _3, ze, { params: 0, schema: 1, value: 4 });
  }
}
function ru(e, n, t) {
  const r = e.slice();
  return r[8] = n[t], r[10] = t, r;
}
function iu(e) {
  let n, t, r, i, s, o = (
    /*enumText*/
    (e[4] || [])[
      /*idx*/
      e[10]
    ] + ""
  ), a, l, f, u;
  return {
    c() {
      n = N("input"), i = Q(), s = N("label"), a = nn(o), l = Q(), y(n, "class", "sr-only"), y(n, "type", "radio"), y(n, "id", `${/*id*/
      e[6]}-${/*idx*/
      e[10]}`), n.value = t = /*enumVal*/
      e[8], y(
        n,
        "name",
        /*id*/
        e[6]
      ), n.checked = r = /*enumVal*/
      e[8] === /*value*/
      e[2], y(s, "for", `${/*id*/
      e[6]}-${/*idx*/
      e[10]}`);
    },
    m(c, d) {
      k(c, n, d), k(c, i, d), k(c, s, d), B(s, a), B(s, l), f || (u = H(
        n,
        "change",
        /*change_handler*/
        e[7]
      ), f = !0);
    },
    p(c, d) {
      d & /*enumVals*/
      8 && t !== (t = /*enumVal*/
      c[8]) && (n.value = t), d & /*enumVals, value*/
      12 && r !== (r = /*enumVal*/
      c[8] === /*value*/
      c[2]) && (n.checked = r), d & /*enumText*/
      16 && o !== (o = /*enumText*/
      (c[4] || [])[
        /*idx*/
        c[10]
      ] + "") && hn(a, o);
    },
    d(c) {
      c && T(n), c && T(i), c && T(s), f = !1, u();
    }
  };
}
function w3(e) {
  let n, t = (
    /*enumVals*/
    e[3]
  ), r = [];
  for (let i = 0; i < t.length; i += 1)
    r[i] = iu(ru(e, t, i));
  return {
    c() {
      n = N("div");
      for (let i = 0; i < r.length; i += 1)
        r[i].c();
      y(n, "role", "radiogroup"), y(n, "class", "group-container"), y(n, "aria-labelledby", `label-${/*id*/
      e[6]}`), Wn(
        n,
        "flex-direction",
        /*flexDirection*/
        e[5]
      ), y(n, "id", `group-${/*id*/
      e[6]}`);
    },
    m(i, s) {
      k(i, n, s);
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(n, null);
    },
    p(i, s) {
      if (s & /*id, enumText, enumVals, value, params, undefined*/
      93) {
        t = /*enumVals*/
        i[3];
        let o;
        for (o = 0; o < t.length; o += 1) {
          const a = ru(i, t, o);
          r[o] ? r[o].p(a, s) : (r[o] = iu(a), r[o].c(), r[o].m(n, null));
        }
        for (; o < r.length; o += 1)
          r[o].d(1);
        r.length = t.length;
      }
      s & /*flexDirection*/
      32 && Wn(
        n,
        "flex-direction",
        /*flexDirection*/
        i[5]
      );
    },
    d(i) {
      i && T(n), Yr(r, i);
    }
  };
}
function $3(e) {
  let n, t, r;
  var i = (
    /*params*/
    e[0].components.fieldWrapper
  );
  function s(o) {
    return {
      props: {
        params: (
          /*params*/
          o[0]
        ),
        schema: (
          /*schema*/
          o[1]
        ),
        $$slots: { default: [w3] },
        $$scope: { ctx: o }
      }
    };
  }
  return i && (n = Le(i, s(e))), {
    c() {
      n && Oe(n.$$.fragment), t = Ce();
    },
    m(o, a) {
      n && be(n, o, a), k(o, t, a), r = !0;
    },
    p(o, [a]) {
      const l = {};
      if (a & /*params*/
      1 && (l.params = /*params*/
      o[0]), a & /*schema*/
      2 && (l.schema = /*schema*/
      o[1]), a & /*$$scope, flexDirection, enumVals, enumText, value, params*/
      2109 && (l.$$scope = { dirty: a, ctx: o }), a & /*params*/
      1 && i !== (i = /*params*/
      o[0].components.fieldWrapper)) {
        if (n) {
          Fe();
          const f = n;
          x(f.$$.fragment, 1, 0, () => {
            we(f, 1);
          }), We();
        }
        i ? (n = Le(i, s(o)), Oe(n.$$.fragment), J(n.$$.fragment, 1), be(n, t.parentNode, t)) : n = null;
      } else
        i && n.$set(l);
    },
    i(o) {
      r || (n && J(n.$$.fragment, o), r = !0);
    },
    o(o) {
      n && x(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && T(t), n && we(n, o);
    }
  };
}
function A3(e, n, t) {
  let r, { params: i } = n, { schema: s } = n, { value: o } = n, a, l, f = i.path.join(".");
  const u = (c) => i.pathChanged(i.path, c.currentTarget.value || void 0);
  return e.$$set = (c) => {
    "params" in c && t(0, i = c.params), "schema" in c && t(1, s = c.schema), "value" in c && t(2, o = c.value);
  }, e.$$.update = () => {
    e.$$.dirty & /*schema*/
    2 && t(3, a = s.enum), e.$$.dirty & /*schema*/
    2 && t(4, l = s.enumText || s.enum), e.$$.dirty & /*schema*/
    2 && t(5, r = s.direction || "row");
  }, [i, s, o, a, l, r, f, u];
}
class O3 extends Ye {
  constructor(n) {
    super(), Ke(this, n, A3, $3, ze, { params: 0, schema: 1, value: 2 });
  }
}
function R3(e) {
  let n, t, r;
  function i(o) {
    e[10](o);
  }
  let s = {
    params: (
      /*params*/
      e[2]
    ),
    value: (
      /*value*/
      e[1]
    )
  };
  return (
    /*schema*/
    e[0] !== void 0 && (s.schema = /*schema*/
    e[0]), n = new yr({ props: s }), Ze.push(() => Ln(n, "schema", i)), {
      c() {
        Oe(n.$$.fragment);
      },
      m(o, a) {
        be(n, o, a), r = !0;
      },
      p(o, [a]) {
        const l = {};
        a & /*params*/
        4 && (l.params = /*params*/
        o[2]), a & /*value*/
        2 && (l.value = /*value*/
        o[1]), !t && a & /*schema*/
        1 && (t = !0, l.schema = /*schema*/
        o[0], tt(() => t = !1)), n.$set(l);
      },
      i(o) {
        r || (J(n.$$.fragment, o), r = !0);
      },
      o(o) {
        x(n.$$.fragment, o), r = !1;
      },
      d(o) {
        we(n, o);
      }
    }
  );
}
function E3(e, n, t) {
  let { schema: r } = n, { value: i } = n, { uploadFiles: s = {} } = n, { dirty: o = !1 } = n, { showErrors: a = !0 } = n, { collapsible: l = !1 } = n, { components: f = {} } = n, { componentContext: u = {} } = n;
  const c = lu();
  let d = {};
  const m = (w) => {
    const A = wS.validator(qT(r), {
      includeErrors: !0,
      allErrors: !0,
      allowUnusedKeywords: !0
    });
    A(w || i), t(9, d = Object.fromEntries((A.errors || []).map((M) => DS(r, i, M.keywordLocation, M.instanceLocation))));
  };
  Up(() => {
    m(), Object.keys(d).length > 0 && c("value", {
      path: [],
      value: i,
      errors: d
    });
  });
  let h;
  const g = (w, A, M, W) => {
    if (A instanceof FileList)
      return t(3, s[w.join(".")] = A, s), t(4, o = !0), A;
    if (A === op)
      return delete s[w.join(".")], t(4, o = !0), A;
    const I = w.length === 0 ? h.value : _r(h.value, w);
    if (A === I && M !== "innerSubmit")
      return;
    let F = structuredClone(h.value);
    if (A === void 0 && w.length > 0) {
      const j = w.slice(0, -1).length ? _r(F, w.slice(0, -1)) : h.value;
      delete j[w[w.length - 1]];
    } else
      w.length === 0 ? F = A : Qo(F, w, A);
    m(F);
    const C = c(
      "value",
      {
        path: w,
        pathValue: A,
        value: F,
        errors: d,
        op: M,
        subpath: W
      },
      { cancelable: !0 }
    );
    return console.log(`dispatch value path: ${w.join(".")} val: ${JSON.stringify(A)},${M ? " op: " + M : ""} errors: ${JSON.stringify(d)}, succeeded: ${C}`), C ? (t(2, h.value = F, h), t(1, i = h.value), t(4, o = !0)) : m(i), A;
  };
  function v(w) {
    r = w, t(0, r);
  }
  return e.$$set = (w) => {
    "schema" in w && t(0, r = w.schema), "value" in w && t(1, i = w.value), "uploadFiles" in w && t(3, s = w.uploadFiles), "dirty" in w && t(4, o = w.dirty), "showErrors" in w && t(5, a = w.showErrors), "collapsible" in w && t(6, l = w.collapsible), "components" in w && t(7, f = w.components), "componentContext" in w && t(8, u = w.componentContext);
  }, e.$$.update = () => {
    e.$$.dirty & /*value, uploadFiles, components, componentContext, validationErrors, schema, showErrors, collapsible*/
    1003 && t(2, h = {
      value: i,
      files: s,
      path: [],
      components: Object.assign(
        {
          string: or,
          password: or,
          email: or,
          time: or,
          "date-time": or,
          date: or,
          number: wf,
          integer: wf,
          boolean: LS,
          fieldWrapper: nk,
          object: ik,
          array: IS,
          enum: RS,
          upload: zS,
          textarea: JS,
          hidden: l3,
          blocks: xS,
          autocomplete: s3,
          "list-detail": m3,
          currency: b3,
          radio: O3
        },
        f
      ),
      componentContext: u,
      pathChanged: g,
      validationErrors: d,
      containerParent: "none",
      containerReadOnly: r.readOnly || !1,
      showErrors: a,
      collapsible: l,
      idx: zT()
    });
  }, [
    r,
    i,
    h,
    s,
    o,
    a,
    l,
    f,
    u,
    d,
    v
  ];
}
class T3 extends Ye {
  constructor(n) {
    super(), Ke(this, n, E3, R3, ze, {
      schema: 0,
      value: 1,
      uploadFiles: 3,
      dirty: 4,
      showErrors: 5,
      collapsible: 6,
      components: 7,
      componentContext: 8
    });
  }
  get schema() {
    return this.$$.ctx[0];
  }
  set schema(n) {
    this.$$set({ schema: n }), Me();
  }
  get value() {
    return this.$$.ctx[1];
  }
  set value(n) {
    this.$$set({ value: n }), Me();
  }
  get uploadFiles() {
    return this.$$.ctx[3];
  }
  set uploadFiles(n) {
    this.$$set({ uploadFiles: n }), Me();
  }
  get dirty() {
    return this.$$.ctx[4];
  }
  set dirty(n) {
    this.$$set({ dirty: n }), Me();
  }
  get showErrors() {
    return this.$$.ctx[5];
  }
  set showErrors(n) {
    this.$$set({ showErrors: n }), Me();
  }
  get collapsible() {
    return this.$$.ctx[6];
  }
  set collapsible(n) {
    this.$$set({ collapsible: n }), Me();
  }
  get components() {
    return this.$$.ctx[7];
  }
  set components(n) {
    this.$$set({ components: n }), Me();
  }
  get componentContext() {
    return this.$$.ctx[8];
  }
  set componentContext(n) {
    this.$$set({ componentContext: n }), Me();
  }
}
const lr = [];
function k3(e, n = xe) {
  let t;
  const r = /* @__PURE__ */ new Set();
  function i(a) {
    if (ze(e, a) && (e = a, t)) {
      const l = !lr.length;
      for (const f of r)
        f[1](), lr.push(f, e);
      if (l) {
        for (let f = 0; f < lr.length; f += 2)
          lr[f][0](lr[f + 1]);
        lr.length = 0;
      }
    }
  }
  function s(a) {
    i(a(e));
  }
  function o(a, l = xe) {
    const f = [a, l];
    return r.add(f), r.size === 1 && (t = n(i) || xe), a(e), () => {
      r.delete(f), r.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: s, subscribe: o };
}
function S3(e) {
  let n, t, r, i, s, o, a, l, f, u, c, d, m;
  function h(A) {
    e[16](A);
  }
  function g(A) {
    e[17](A);
  }
  function v(A) {
    e[18](A);
  }
  let w = {
    value: (
      /*value*/
      e[1]
    ),
    showErrors: (
      /*showErrors*/
      e[9]
    ),
    components: (
      /*components*/
      e[6]
    ),
    collapsible: (
      /*collapsible*/
      e[7]
    ),
    componentContext: (
      /*componentContext*/
      e[4]
    )
  };
  return (
    /*schema*/
    e[0] !== void 0 && (w.schema = /*schema*/
    e[0]), /*dirty*/
    e[3] !== void 0 && (w.dirty = /*dirty*/
    e[3]), /*uploadFiles*/
    e[2] !== void 0 && (w.uploadFiles = /*uploadFiles*/
    e[2]), t = new T3({ props: w }), Ze.push(() => Ln(t, "schema", h)), Ze.push(() => Ln(t, "dirty", g)), Ze.push(() => Ln(t, "uploadFiles", v)), t.$on(
      "value",
      /*change*/
      e[11]
    ), {
      c() {
        n = N("form"), Oe(t.$$.fragment), o = Q(), a = N("div"), l = N("button"), f = nn(
          /*submitText*/
          e[8]
        ), y(l, "type", u = /*action*/
        e[5] ? "submit" : "button"), y(l, "class", "submit-button"), Se(
          l,
          "dirty",
          /*dirty*/
          e[3]
        ), y(a, "class", "button-container"), y(n, "class", "svelte-schema-form"), y(
          n,
          "action",
          /*action*/
          e[5]
        ), Se(
          n,
          "dirty",
          /*dirty*/
          e[3]
        );
      },
      m(A, M) {
        k(A, n, M), be(t, n, null), B(n, o), B(n, a), B(a, l), B(l, f), c = !0, d || (m = H(
          l,
          "click",
          /*submit*/
          e[12]
        ), d = !0);
      },
      p(A, [M]) {
        const W = {};
        M & /*value*/
        2 && (W.value = /*value*/
        A[1]), M & /*showErrors*/
        512 && (W.showErrors = /*showErrors*/
        A[9]), M & /*components*/
        64 && (W.components = /*components*/
        A[6]), M & /*collapsible*/
        128 && (W.collapsible = /*collapsible*/
        A[7]), M & /*componentContext*/
        16 && (W.componentContext = /*componentContext*/
        A[4]), !r && M & /*schema*/
        1 && (r = !0, W.schema = /*schema*/
        A[0], tt(() => r = !1)), !i && M & /*dirty*/
        8 && (i = !0, W.dirty = /*dirty*/
        A[3], tt(() => i = !1)), !s && M & /*uploadFiles*/
        4 && (s = !0, W.uploadFiles = /*uploadFiles*/
        A[2], tt(() => s = !1)), t.$set(W), (!c || M & /*submitText*/
        256) && hn(
          f,
          /*submitText*/
          A[8]
        ), (!c || M & /*action*/
        32 && u !== (u = /*action*/
        A[5] ? "submit" : "button")) && y(l, "type", u), (!c || M & /*dirty*/
        8) && Se(
          l,
          "dirty",
          /*dirty*/
          A[3]
        ), (!c || M & /*action*/
        32) && y(
          n,
          "action",
          /*action*/
          A[5]
        ), (!c || M & /*dirty*/
        8) && Se(
          n,
          "dirty",
          /*dirty*/
          A[3]
        );
      },
      i(A) {
        c || (J(t.$$.fragment, A), c = !0);
      },
      o(A) {
        x(t.$$.fragment, A), c = !1;
      },
      d(A) {
        A && T(n), we(t), d = !1, m();
      }
    }
  );
}
function P3(e, n, t) {
  let r, { schema: i } = n, { value: s } = n, { uploadFiles: o = {} } = n, { uploadBaseUrl: a = "" } = n, { uploadNamePattern: l = "" } = n, { dirty: f = !1 } = n, { action: u = "" } = n, { components: c = {} } = n, { collapsible: d = !1 } = n, { submitText: m = "Submit" } = n, { submitRequiresDirty: h = !0 } = n, { componentContext: g = {} } = n;
  const v = lu();
  let w = k3({});
  ou(e, w, (E) => t(20, r = E)), Bp(ap, w);
  let A = {}, M = !1;
  const W = (E) => {
    A = E.detail.errors, v("value", E.detail), t(1, s = E.detail.value);
  }, I = (E, X, tn) => {
    let Xe;
    tn === -1 ? (delete (r[E] || {})[X], Xe = { ...r[E] }) : Xe = {
      ...r[E] || {},
      [X]: tn
    }, Mp(w, r = { ...r, [E]: Xe }, r);
  }, F = async (E = "") => {
    if (Object.keys(o).length > 0 && a) {
      const X = l || i.pathPattern;
      if (!X) {
        alert("No uploadNamePattern given or pathPattern property on schema to determine file save url base");
        return;
      }
      const tn = HT(X, s), Xe = Object.entries(o).filter(([G]) => G.startsWith(E)).flatMap(([G, pe]) => {
        const Ge = [];
        for (let _n = 0; _n < pe.length; _n++) {
          const xn = pe[_n], Tt = a + (a.endsWith("/") ? "" : "/") + tn + "/" + G + "/" + xn.name;
          console.log(`Uploading to ${Tt}`);
          const kt = new Promise((et, z) => {
            try {
              const R = new XMLHttpRequest();
              R.upload.onprogress = (Bn) => I(G, xn.name, Bn.loaded / Bn.total * 100), R.upload.onloadend = (Bn) => {
                I(G, xn.name, R.status === 200 || R.status === 0 ? -1 : -R.status), et([G, Tt]);
              }, R.withCredentials = !0, R.open("PUT", Tt), R.send(xn);
            } catch (R) {
              z(R);
            }
          }).then(([et, z]) => {
            et === "" ? t(1, s = z) : Qo(s, et.split("."), z), t(1, s), delete o[et];
          });
          Ge.push(kt);
        }
        return Ge;
      });
      await Promise.all(Xe);
    }
  }, C = async () => {
    (f || !h) && Object.keys(A).length === 0 && (await F(), v("submit", { value: s }), t(3, f = !1)), t(9, M = !0);
  };
  g.doUploads = F;
  function D(E) {
    i = E, t(0, i);
  }
  function j(E) {
    f = E, t(3, f);
  }
  function ee(E) {
    o = E, t(2, o);
  }
  return e.$$set = (E) => {
    "schema" in E && t(0, i = E.schema), "value" in E && t(1, s = E.value), "uploadFiles" in E && t(2, o = E.uploadFiles), "uploadBaseUrl" in E && t(13, a = E.uploadBaseUrl), "uploadNamePattern" in E && t(14, l = E.uploadNamePattern), "dirty" in E && t(3, f = E.dirty), "action" in E && t(5, u = E.action), "components" in E && t(6, c = E.components), "collapsible" in E && t(7, d = E.collapsible), "submitText" in E && t(8, m = E.submitText), "submitRequiresDirty" in E && t(15, h = E.submitRequiresDirty), "componentContext" in E && t(4, g = E.componentContext);
  }, [
    i,
    s,
    o,
    f,
    g,
    u,
    c,
    d,
    m,
    M,
    w,
    W,
    C,
    a,
    l,
    h,
    D,
    j,
    ee
  ];
}
class L3 extends Ye {
  constructor(n) {
    super(), Ke(this, n, P3, S3, ze, {
      schema: 0,
      value: 1,
      uploadFiles: 2,
      uploadBaseUrl: 13,
      uploadNamePattern: 14,
      dirty: 3,
      action: 5,
      components: 6,
      collapsible: 7,
      submitText: 8,
      submitRequiresDirty: 15,
      componentContext: 4
    });
  }
  get schema() {
    return this.$$.ctx[0];
  }
  set schema(n) {
    this.$$set({ schema: n }), Me();
  }
  get value() {
    return this.$$.ctx[1];
  }
  set value(n) {
    this.$$set({ value: n }), Me();
  }
  get uploadFiles() {
    return this.$$.ctx[2];
  }
  set uploadFiles(n) {
    this.$$set({ uploadFiles: n }), Me();
  }
  get uploadBaseUrl() {
    return this.$$.ctx[13];
  }
  set uploadBaseUrl(n) {
    this.$$set({ uploadBaseUrl: n }), Me();
  }
  get uploadNamePattern() {
    return this.$$.ctx[14];
  }
  set uploadNamePattern(n) {
    this.$$set({ uploadNamePattern: n }), Me();
  }
  get dirty() {
    return this.$$.ctx[3];
  }
  set dirty(n) {
    this.$$set({ dirty: n }), Me();
  }
  get action() {
    return this.$$.ctx[5];
  }
  set action(n) {
    this.$$set({ action: n }), Me();
  }
  get components() {
    return this.$$.ctx[6];
  }
  set components(n) {
    this.$$set({ components: n }), Me();
  }
  get collapsible() {
    return this.$$.ctx[7];
  }
  set collapsible(n) {
    this.$$set({ collapsible: n }), Me();
  }
  get submitText() {
    return this.$$.ctx[8];
  }
  set submitText(n) {
    this.$$set({ submitText: n }), Me();
  }
  get submitRequiresDirty() {
    return this.$$.ctx[15];
  }
  set submitRequiresDirty(n) {
    this.$$set({ submitRequiresDirty: n }), Me();
  }
  get componentContext() {
    return this.$$.ctx[4];
  }
  set componentContext(n) {
    this.$$set({ componentContext: n }), Me();
  }
}
export {
  T3 as SchemaForm,
  L3 as SubmitForm
};
