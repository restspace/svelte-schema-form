function en() {
}
function Rp(e, n) {
  for (const t in n)
    e[t] = n[t];
  return e;
}
function tu(e) {
  return e();
}
function ka() {
  return /* @__PURE__ */ Object.create(null);
}
function Qe(e) {
  e.forEach(tu);
}
function Be(e) {
  return typeof e == "function";
}
function He(e, n) {
  return e != e ? n == n : e !== n || e && typeof e == "object" || typeof e == "function";
}
let ci;
function gr(e, n) {
  return ci || (ci = document.createElement("a")), ci.href = n, e === ci.href;
}
function Ep(e) {
  return Object.keys(e).length === 0;
}
function Tp(e, ...n) {
  if (e == null)
    return en;
  const t = e.subscribe(...n);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function ru(e, n, t) {
  e.$$.on_destroy.push(Tp(n, t));
}
function kp(e, n, t, r) {
  if (e) {
    const i = iu(e, n, t, r);
    return e[0](i);
  }
}
function iu(e, n, t, r) {
  return e[1] && r ? Rp(t.ctx.slice(), e[1](r(n))) : t.ctx;
}
function Pp(e, n, t, r) {
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
function Sp(e, n, t, r, i, s) {
  if (i) {
    const o = iu(n, t, r, s);
    e.p(o, i);
  }
}
function jp(e) {
  if (e.ctx.length > 32) {
    const n = [], t = e.ctx.length / 32;
    for (let r = 0; r < t; r++)
      n[r] = -1;
    return n;
  }
  return -1;
}
function Ip(e, n, t) {
  return e.set(t), n;
}
const Cp = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
"WeakMap" in Cp;
function G(e, n) {
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
function Lp(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function an(e) {
  return document.createTextNode(e);
}
function x() {
  return an(" ");
}
function Ce() {
  return an("");
}
function K(e, n, t, r) {
  return e.addEventListener(n, t, r), () => e.removeEventListener(n, t, r);
}
function dr(e) {
  return function(n) {
    return n.preventDefault(), e.call(this, n);
  };
}
function Wn(e) {
  return function(n) {
    return n.stopPropagation(), e.call(this, n);
  };
}
function y(e, n, t) {
  t == null ? e.removeAttribute(n) : e.getAttribute(n) !== t && e.setAttribute(n, t);
}
function Mp(e) {
  return Array.from(e.childNodes);
}
function Tn(e, n) {
  n = "" + n, e.data !== n && (e.data = n);
}
function Pa(e, n) {
  e.value = n ?? "";
}
function Dn(e, n, t, r) {
  t == null ? e.style.removeProperty(n) : e.style.setProperty(n, t, r ? "important" : "");
}
function Sa(e, n, t) {
  for (let r = 0; r < e.options.length; r += 1) {
    const i = e.options[r];
    if (i.__value === n) {
      i.selected = !0;
      return;
    }
  }
  (!t || n !== void 0) && (e.selectedIndex = -1);
}
function Pe(e, n, t) {
  e.classList[t ? "add" : "remove"](n);
}
function Np(e, n, { bubbles: t = !1, cancelable: r = !1 } = {}) {
  const i = document.createEvent("CustomEvent");
  return i.initCustomEvent(e, t, r, n), i;
}
class Fp {
  constructor(n = !1) {
    this.is_svg = !1, this.is_svg = n, this.e = this.n = null;
  }
  c(n) {
    this.h(n);
  }
  m(n, t, r = null) {
    this.e || (this.is_svg ? this.e = Lp(t.nodeName) : this.e = N(t.nodeType === 11 ? "TEMPLATE" : t.nodeName), this.t = t.tagName !== "TEMPLATE" ? t : t.content, this.c(n)), this.i(r);
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
function Me(e, n) {
  return new e(n);
}
let Wr;
function Mr(e) {
  Wr = e;
}
function Wi() {
  if (!Wr)
    throw new Error("Function called outside component initialization");
  return Wr;
}
function Wp(e) {
  Wi().$$.on_mount.push(e);
}
function su() {
  const e = Wi();
  return (n, t, { cancelable: r = !1 } = {}) => {
    const i = e.$$.callbacks[n];
    if (i) {
      const s = Np(n, t, { cancelable: r });
      return i.slice().forEach((o) => {
        o.call(e, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
function Dp(e, n) {
  return Wi().$$.context.set(e, n), n;
}
function Up(e) {
  return Wi().$$.context.get(e);
}
function di(e, n) {
  const t = e.$$.callbacks[n.type];
  t && t.slice().forEach((r) => r.call(this, n));
}
const fr = [], Ve = [];
let pr = [];
const Ms = [], ou = /* @__PURE__ */ Promise.resolve();
let Ns = !1;
function au() {
  Ns || (Ns = !0, ou.then(Le));
}
function bi() {
  return au(), ou;
}
function Fs(e) {
  pr.push(e);
}
function nt(e) {
  Ms.push(e);
}
const vs = /* @__PURE__ */ new Set();
let sr = 0;
function Le() {
  if (sr !== 0)
    return;
  const e = Wr;
  do {
    try {
      for (; sr < fr.length; ) {
        const n = fr[sr];
        sr++, Mr(n), Bp(n.$$);
      }
    } catch (n) {
      throw fr.length = 0, sr = 0, n;
    }
    for (Mr(null), fr.length = 0, sr = 0; Ve.length; )
      Ve.pop()();
    for (let n = 0; n < pr.length; n += 1) {
      const t = pr[n];
      vs.has(t) || (vs.add(t), t());
    }
    pr.length = 0;
  } while (fr.length);
  for (; Ms.length; )
    Ms.pop()();
  Ns = !1, vs.clear(), Mr(e);
}
function Bp(e) {
  if (e.fragment !== null) {
    e.update(), Qe(e.before_update);
    const n = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, n), e.after_update.forEach(Fs);
  }
}
function qp(e) {
  const n = [], t = [];
  pr.forEach((r) => e.indexOf(r) === -1 ? n.push(r) : t.push(r)), t.forEach((r) => r()), pr = n;
}
const wi = /* @__PURE__ */ new Set();
let Dt;
function Fe() {
  Dt = {
    r: 0,
    c: [],
    p: Dt
    // parent group
  };
}
function We() {
  Dt.r || Qe(Dt.c), Dt = Dt.p;
}
function J(e, n) {
  e && e.i && (wi.delete(e), e.i(n));
}
function Q(e, n, t, r) {
  if (e && e.o) {
    if (wi.has(e))
      return;
    wi.add(e), Dt.c.push(() => {
      wi.delete(e), r && (t && e.d(1), r());
    }), e.o(n);
  } else
    r && r();
}
function oo(e, n) {
  e.d(1), n.delete(e.key);
}
function lu(e, n) {
  Q(e, 1, 1, () => {
    n.delete(e.key);
  });
}
function Jr(e, n, t, r, i, s, o, a, l, f, u, c) {
  let p = e.length, m = s.length, h = p;
  const g = {};
  for (; h--; )
    g[e[h].key] = h;
  const b = [], w = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), M = [];
  for (h = m; h--; ) {
    const I = c(i, s, h), D = t(I);
    let C = o.get(D);
    C ? r && M.push(() => C.p(I, n)) : (C = f(D, I), C.c()), w.set(D, b[h] = C), D in g && A.set(D, Math.abs(h - g[D]));
  }
  const W = /* @__PURE__ */ new Set(), j = /* @__PURE__ */ new Set();
  function F(I) {
    J(I, 1), I.m(a, u), o.set(I.key, I), u = I.first, m--;
  }
  for (; p && m; ) {
    const I = b[m - 1], D = e[p - 1], C = I.key, ee = D.key;
    I === D ? (u = I.first, p--, m--) : w.has(ee) ? !o.has(C) || W.has(C) ? F(I) : j.has(ee) ? p-- : A.get(C) > A.get(ee) ? (j.add(C), F(I)) : (W.add(ee), p--) : (l(D, o), p--);
  }
  for (; p--; ) {
    const I = e[p];
    w.has(I.key) || l(I, o);
  }
  for (; m; )
    F(b[m - 1]);
  return Qe(M), b;
}
const Gp = [
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
[...Gp];
function Nn(e, n, t) {
  const r = e.$$.props[n];
  r !== void 0 && (e.$$.bound[r] = t, t(e.$$.ctx[r]));
}
function Oe(e) {
  e && e.c();
}
function be(e, n, t, r) {
  const { fragment: i, after_update: s } = e.$$;
  i && i.m(n, t), r || Fs(() => {
    const o = e.$$.on_mount.map(tu).filter(Be);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : Qe(o), e.$$.on_mount = [];
  }), s.forEach(Fs);
}
function we(e, n) {
  const t = e.$$;
  t.fragment !== null && (qp(t.after_update), Qe(t.on_destroy), t.fragment && t.fragment.d(n), t.on_destroy = t.fragment = null, t.ctx = []);
}
function zp(e, n) {
  e.$$.dirty[0] === -1 && (fr.push(e), au(), e.$$.dirty.fill(0)), e.$$.dirty[n / 31 | 0] |= 1 << n % 31;
}
function Ye(e, n, t, r, i, s, o, a = [-1]) {
  const l = Wr;
  Mr(e);
  const f = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: en,
    not_equal: i,
    bound: ka(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(n.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: ka(),
    dirty: a,
    skip_bound: !1,
    root: n.target || l.$$.root
  };
  o && o(f.root);
  let u = !1;
  if (f.ctx = t ? t(e, n.props || {}, (c, p, ...m) => {
    const h = m.length ? m[0] : p;
    return f.ctx && i(f.ctx[c], f.ctx[c] = h) && (!f.skip_bound && f.bound[c] && f.bound[c](h), u && zp(e, c)), p;
  }) : [], f.update(), u = !0, Qe(f.before_update), f.fragment = r ? r(f.ctx) : !1, n.target) {
    if (n.hydrate) {
      const c = Mp(n.target);
      f.fragment && f.fragment.l(c), c.forEach(T);
    } else
      f.fragment && f.fragment.c();
    n.intro && J(e.$$.fragment), be(e, n.target, n.anchor, n.customElement), Le();
  }
  Mr(l);
}
class Je {
  $destroy() {
    we(this, 1), this.$destroy = en;
  }
  $on(n, t) {
    if (!Be(t))
      return en;
    const r = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
    return r.push(t), () => {
      const i = r.indexOf(t);
      i !== -1 && r.splice(i, 1);
    };
  }
  $set(n) {
    this.$$set && !Ep(n) && (this.$$.skip_bound = !0, this.$$set(n), this.$$.skip_bound = !1);
  }
}
var Hp = typeof global == "object" && global && global.Object === Object && global;
const fu = Hp;
var Kp = typeof self == "object" && self && self.Object === Object && self, Yp = fu || Kp || Function("return this")();
const Xe = Yp;
var Jp = Xe.Symbol;
const nn = Jp;
var uu = Object.prototype, Xp = uu.hasOwnProperty, Zp = uu.toString, Cr = nn ? nn.toStringTag : void 0;
function Vp(e) {
  var n = Xp.call(e, Cr), t = e[Cr];
  try {
    e[Cr] = void 0;
    var r = !0;
  } catch {
  }
  var i = Zp.call(e);
  return r && (n ? e[Cr] = t : delete e[Cr]), i;
}
var Qp = Object.prototype, xp = Qp.toString;
function eh(e) {
  return xp.call(e);
}
var nh = "[object Null]", th = "[object Undefined]", ja = nn ? nn.toStringTag : void 0;
function ln(e) {
  return e == null ? e === void 0 ? th : nh : ja && ja in Object(e) ? Vp(e) : eh(e);
}
function Ne(e) {
  return e != null && typeof e == "object";
}
var rh = "[object Symbol]";
function wn(e) {
  return typeof e == "symbol" || Ne(e) && ln(e) == rh;
}
var ih = 0 / 0;
function Ia(e) {
  return typeof e == "number" ? e : wn(e) ? ih : +e;
}
function Se(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length, i = Array(r); ++t < r; )
    i[t] = n(e[t], t, e);
  return i;
}
var sh = Array.isArray;
const re = sh;
var oh = 1 / 0, Ca = nn ? nn.prototype : void 0, La = Ca ? Ca.toString : void 0;
function $n(e) {
  if (typeof e == "string")
    return e;
  if (re(e))
    return Se(e, $n) + "";
  if (wn(e))
    return La ? La.call(e) : "";
  var n = e + "";
  return n == "0" && 1 / e == -oh ? "-0" : n;
}
function Di(e, n) {
  return function(t, r) {
    var i;
    if (t === void 0 && r === void 0)
      return n;
    if (t !== void 0 && (i = t), r !== void 0) {
      if (i === void 0)
        return r;
      typeof t == "string" || typeof r == "string" ? (t = $n(t), r = $n(r)) : (t = Ia(t), r = Ia(r)), i = e(t, r);
    }
    return i;
  };
}
var ah = Di(function(e, n) {
  return e + n;
}, 0);
const lh = ah;
var fh = /\s/;
function cu(e) {
  for (var n = e.length; n-- && fh.test(e.charAt(n)); )
    ;
  return n;
}
var uh = /^\s+/;
function du(e) {
  return e && e.slice(0, cu(e) + 1).replace(uh, "");
}
function je(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
var Ma = 0 / 0, ch = /^[-+]0x[0-9a-f]+$/i, dh = /^0b[01]+$/i, ph = /^0o[0-7]+$/i, hh = parseInt;
function Pn(e) {
  if (typeof e == "number")
    return e;
  if (wn(e))
    return Ma;
  if (je(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = je(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = du(e);
  var t = dh.test(e);
  return t || ph.test(e) ? hh(e.slice(2), t ? 2 : 8) : ch.test(e) ? Ma : +e;
}
var Na = 1 / 0, mh = 17976931348623157e292;
function tt(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Pn(e), e === Na || e === -Na) {
    var n = e < 0 ? -1 : 1;
    return n * mh;
  }
  return e === e ? e : 0;
}
function oe(e) {
  var n = tt(e), t = n % 1;
  return n === n ? t ? n - t : n : 0;
}
var gh = "Expected a function";
function _h(e, n) {
  if (typeof n != "function")
    throw new TypeError(gh);
  return e = oe(e), function() {
    if (--e < 1)
      return n.apply(this, arguments);
  };
}
function fn(e) {
  return e;
}
var yh = "[object AsyncFunction]", vh = "[object Function]", bh = "[object GeneratorFunction]", wh = "[object Proxy]";
function rt(e) {
  if (!je(e))
    return !1;
  var n = ln(e);
  return n == vh || n == bh || n == yh || n == wh;
}
var $h = Xe["__core-js_shared__"];
const $i = $h;
var Fa = function() {
  var e = /[^.]+$/.exec($i && $i.keys && $i.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ah(e) {
  return !!Fa && Fa in e;
}
var Oh = Function.prototype, Rh = Oh.toString;
function zt(e) {
  if (e != null) {
    try {
      return Rh.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Eh = /[\\^$.*+?()[\]{}|]/g, Th = /^\[object .+?Constructor\]$/, kh = Function.prototype, Ph = Object.prototype, Sh = kh.toString, jh = Ph.hasOwnProperty, Ih = RegExp(
  "^" + Sh.call(jh).replace(Eh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function pu(e) {
  if (!je(e) || Ah(e))
    return !1;
  var n = rt(e) ? Ih : Th;
  return n.test(zt(e));
}
function Ch(e, n) {
  return e == null ? void 0 : e[n];
}
function Ht(e, n) {
  var t = Ch(e, n);
  return pu(t) ? t : void 0;
}
var Lh = Ht(Xe, "WeakMap");
const Dr = Lh;
var Mh = Dr && new Dr();
const Ti = Mh;
var Nh = Ti ? function(e, n) {
  return Ti.set(e, n), e;
} : fn;
const hu = Nh;
var Wa = Object.create, Fh = function() {
  function e() {
  }
  return function(n) {
    if (!je(n))
      return {};
    if (Wa)
      return Wa(n);
    e.prototype = n;
    var t = new e();
    return e.prototype = void 0, t;
  };
}();
const vr = Fh;
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
    return je(r) ? r : t;
  };
}
var Wh = 1;
function Dh(e, n, t) {
  var r = n & Wh, i = Ur(e);
  function s() {
    var o = this && this !== Xe && this instanceof s ? i : e;
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
var Uh = Math.max;
function mu(e, n, t, r) {
  for (var i = -1, s = e.length, o = t.length, a = -1, l = n.length, f = Uh(s - o, 0), u = Array(l + f), c = !r; ++a < l; )
    u[a] = n[a];
  for (; ++i < o; )
    (c || i < s) && (u[t[i]] = e[i]);
  for (; f--; )
    u[a++] = e[i++];
  return u;
}
var Bh = Math.max;
function gu(e, n, t, r) {
  for (var i = -1, s = e.length, o = -1, a = t.length, l = -1, f = n.length, u = Bh(s - a, 0), c = Array(u + f), p = !r; ++i < u; )
    c[i] = e[i];
  for (var m = i; ++l < f; )
    c[m + l] = n[l];
  for (; ++o < a; )
    (p || i < s) && (c[m + t[o]] = e[i++]);
  return c;
}
function qh(e, n) {
  for (var t = e.length, r = 0; t--; )
    e[t] === n && ++r;
  return r;
}
function Ui() {
}
var Gh = 4294967295;
function ue(e) {
  this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Gh, this.__views__ = [];
}
ue.prototype = vr(Ui.prototype);
ue.prototype.constructor = ue;
function ao() {
}
var zh = Ti ? function(e) {
  return Ti.get(e);
} : ao;
const lo = zh;
var Hh = {};
const hr = Hh;
var Kh = Object.prototype, Yh = Kh.hasOwnProperty;
function Ai(e) {
  for (var n = e.name + "", t = hr[n], r = Yh.call(hr, n) ? t.length : 0; r--; ) {
    var i = t[r], s = i.func;
    if (s == null || s == e)
      return i.name;
  }
  return n;
}
function jn(e, n) {
  this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = void 0;
}
jn.prototype = vr(Ui.prototype);
jn.prototype.constructor = jn;
function hn(e, n) {
  var t = -1, r = e.length;
  for (n || (n = Array(r)); ++t < r; )
    n[t] = e[t];
  return n;
}
function _u(e) {
  if (e instanceof ue)
    return e.clone();
  var n = new jn(e.__wrapped__, e.__chain__);
  return n.__actions__ = hn(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
}
var Jh = Object.prototype, Xh = Jh.hasOwnProperty;
function d(e) {
  if (Ne(e) && !re(e) && !(e instanceof ue)) {
    if (e instanceof jn)
      return e;
    if (Xh.call(e, "__wrapped__"))
      return _u(e);
  }
  return new jn(e);
}
d.prototype = Ui.prototype;
d.prototype.constructor = d;
function Ws(e) {
  var n = Ai(e), t = d[n];
  if (typeof t != "function" || !(n in ue.prototype))
    return !1;
  if (e === t)
    return !0;
  var r = lo(t);
  return !!r && e === r[0];
}
var Zh = 800, Vh = 16, Qh = Date.now;
function yu(e) {
  var n = 0, t = 0;
  return function() {
    var r = Qh(), i = Vh - (r - t);
    if (t = r, i > 0) {
      if (++n >= Zh)
        return arguments[0];
    } else
      n = 0;
    return e.apply(void 0, arguments);
  };
}
var xh = yu(hu);
const vu = xh;
var em = /\{\n\/\* \[wrapped with (.+)\] \*/, nm = /,? & /;
function tm(e) {
  var n = e.match(em);
  return n ? n[1].split(nm) : [];
}
var rm = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
function im(e, n) {
  var t = n.length;
  if (!t)
    return e;
  var r = t - 1;
  return n[r] = (t > 1 ? "& " : "") + n[r], n = n.join(t > 2 ? ", " : " "), e.replace(rm, `{
/* [wrapped with ` + n + `] */
`);
}
function fo(e) {
  return function() {
    return e;
  };
}
var sm = function() {
  try {
    var e = Ht(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const ki = sm;
var om = ki ? function(e, n) {
  return ki(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: fo(n),
    writable: !0
  });
} : fn;
const am = om;
var lm = yu(am);
const uo = lm;
function Ln(e, n) {
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
function bu(e) {
  return e !== e;
}
function fm(e, n, t) {
  for (var r = t - 1, i = e.length; ++r < i; )
    if (e[r] === n)
      return r;
  return -1;
}
function br(e, n, t) {
  return n === n ? fm(e, n, t) : Bi(e, bu, t);
}
function qi(e, n) {
  var t = e == null ? 0 : e.length;
  return !!t && br(e, n, 0) > -1;
}
var um = 1, cm = 2, dm = 8, pm = 16, hm = 32, mm = 64, gm = 128, _m = 256, ym = 512, vm = [
  ["ary", gm],
  ["bind", um],
  ["bindKey", cm],
  ["curry", dm],
  ["curryRight", pm],
  ["flip", ym],
  ["partial", hm],
  ["partialRight", mm],
  ["rearg", _m]
];
function bm(e, n) {
  return Ln(vm, function(t) {
    var r = "_." + t[0];
    n & t[1] && !qi(e, r) && e.push(r);
  }), e.sort();
}
function wu(e, n, t) {
  var r = n + "";
  return uo(e, im(r, bm(tm(r), t)));
}
var wm = 1, $m = 2, Am = 4, Om = 8, Da = 32, Ua = 64;
function $u(e, n, t, r, i, s, o, a, l, f) {
  var u = n & Om, c = u ? o : void 0, p = u ? void 0 : o, m = u ? s : void 0, h = u ? void 0 : s;
  n |= u ? Da : Ua, n &= ~(u ? Ua : Da), n & Am || (n &= ~(wm | $m));
  var g = [
    e,
    n,
    i,
    m,
    c,
    h,
    p,
    a,
    l,
    f
  ], b = t.apply(void 0, g);
  return Ws(e) && vu(b, g), b.placeholder = r, wu(b, e, n);
}
function wr(e) {
  var n = e;
  return n.placeholder;
}
var Rm = 9007199254740991, Em = /^(?:0|[1-9]\d*)$/;
function it(e, n) {
  var t = typeof e;
  return n = n ?? Rm, !!n && (t == "number" || t != "symbol" && Em.test(e)) && e > -1 && e % 1 == 0 && e < n;
}
var Tm = Math.min;
function km(e, n) {
  for (var t = e.length, r = Tm(n.length, t), i = hn(e); r--; ) {
    var s = n[r];
    e[r] = it(s, t) ? i[s] : void 0;
  }
  return e;
}
var Ba = "__lodash_placeholder__";
function yt(e, n) {
  for (var t = -1, r = e.length, i = 0, s = []; ++t < r; ) {
    var o = e[t];
    (o === n || o === Ba) && (e[t] = Ba, s[i++] = t);
  }
  return s;
}
var Pm = 1, Sm = 2, jm = 8, Im = 16, Cm = 128, Lm = 512;
function Gi(e, n, t, r, i, s, o, a, l, f) {
  var u = n & Cm, c = n & Pm, p = n & Sm, m = n & (jm | Im), h = n & Lm, g = p ? void 0 : Ur(e);
  function b() {
    for (var w = arguments.length, A = Array(w), M = w; M--; )
      A[M] = arguments[M];
    if (m)
      var W = wr(b), j = qh(A, W);
    if (r && (A = mu(A, r, i, m)), s && (A = gu(A, s, o, m)), w -= j, m && w < f) {
      var F = yt(A, W);
      return $u(
        e,
        n,
        Gi,
        b.placeholder,
        t,
        A,
        F,
        a,
        l,
        f - w
      );
    }
    var I = c ? t : this, D = p ? I[e] : e;
    return w = A.length, a ? A = km(A, a) : h && w > 1 && A.reverse(), u && l < w && (A.length = l), this && this !== Xe && this instanceof b && (D = g || Ur(D)), D.apply(I, A);
  }
  return b;
}
function Mm(e, n, t) {
  var r = Ur(e);
  function i() {
    for (var s = arguments.length, o = Array(s), a = s, l = wr(i); a--; )
      o[a] = arguments[a];
    var f = s < 3 && o[0] !== l && o[s - 1] !== l ? [] : yt(o, l);
    if (s -= f.length, s < t)
      return $u(
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
    var u = this && this !== Xe && this instanceof i ? r : e;
    return An(u, this, o);
  }
  return i;
}
var Nm = 1;
function Fm(e, n, t, r) {
  var i = n & Nm, s = Ur(e);
  function o() {
    for (var a = -1, l = arguments.length, f = -1, u = r.length, c = Array(u + l), p = this && this !== Xe && this instanceof o ? s : e; ++f < u; )
      c[f] = r[f];
    for (; l--; )
      c[f++] = arguments[++a];
    return An(p, i ? t : this, c);
  }
  return o;
}
var qa = "__lodash_placeholder__", bs = 1, Wm = 2, Dm = 4, Ga = 8, Lr = 128, za = 256, Um = Math.min;
function Bm(e, n) {
  var t = e[1], r = n[1], i = t | r, s = i < (bs | Wm | Lr), o = r == Lr && t == Ga || r == Lr && t == za && e[7].length <= n[8] || r == (Lr | za) && n[7].length <= n[8] && t == Ga;
  if (!(s || o))
    return e;
  r & bs && (e[2] = n[2], i |= t & bs ? 0 : Dm);
  var a = n[3];
  if (a) {
    var l = e[3];
    e[3] = l ? mu(l, a, n[4]) : a, e[4] = l ? yt(e[3], qa) : n[4];
  }
  return a = n[5], a && (l = e[5], e[5] = l ? gu(l, a, n[6]) : a, e[6] = l ? yt(e[5], qa) : n[6]), a = n[7], a && (e[7] = a), r & Lr && (e[8] = e[8] == null ? n[8] : Um(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = i, e;
}
var qm = "Expected a function", Ha = 1, Gm = 2, ws = 8, $s = 16, As = 32, Ka = 64, Ya = Math.max;
function st(e, n, t, r, i, s, o, a) {
  var l = n & Gm;
  if (!l && typeof e != "function")
    throw new TypeError(qm);
  var f = r ? r.length : 0;
  if (f || (n &= ~(As | Ka), r = i = void 0), o = o === void 0 ? o : Ya(oe(o), 0), a = a === void 0 ? a : oe(a), f -= i ? i.length : 0, n & Ka) {
    var u = r, c = i;
    r = i = void 0;
  }
  var p = l ? void 0 : lo(e), m = [
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
  if (p && Bm(m, p), e = m[0], n = m[1], t = m[2], r = m[3], i = m[4], a = m[9] = m[9] === void 0 ? l ? 0 : e.length : Ya(m[9] - f, 0), !a && n & (ws | $s) && (n &= ~(ws | $s)), !n || n == Ha)
    var h = Dh(e, n, t);
  else
    n == ws || n == $s ? h = Mm(e, n, a) : (n == As || n == (Ha | As)) && !i.length ? h = Fm(e, n, t, r) : h = Gi.apply(void 0, m);
  var g = p ? hu : vu;
  return wu(g(h, m), e, n);
}
var zm = 128;
function Au(e, n, t) {
  return n = t ? void 0 : n, n = e && n == null ? e.length : n, st(e, zm, void 0, void 0, void 0, void 0, n);
}
function ot(e, n, t) {
  n == "__proto__" && ki ? ki(e, n, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[n] = t;
}
function Bn(e, n) {
  return e === n || e !== e && n !== n;
}
var Hm = Object.prototype, Km = Hm.hasOwnProperty;
function Xr(e, n, t) {
  var r = e[n];
  (!(Km.call(e, n) && Bn(r, t)) || t === void 0 && !(n in e)) && ot(e, n, t);
}
function Jn(e, n, t, r) {
  var i = !t;
  t || (t = {});
  for (var s = -1, o = n.length; ++s < o; ) {
    var a = n[s], l = r ? r(t[a], e[a], a, t, e) : void 0;
    l === void 0 && (l = e[a]), i ? ot(t, a, l) : Xr(t, a, l);
  }
  return t;
}
var Ja = Math.max;
function Ou(e, n, t) {
  return n = Ja(n === void 0 ? e.length - 1 : n, 0), function() {
    for (var r = arguments, i = -1, s = Ja(r.length - n, 0), o = Array(s); ++i < s; )
      o[i] = r[n + i];
    i = -1;
    for (var a = Array(n + 1); ++i < n; )
      a[i] = r[i];
    return a[n] = t(o), An(e, this, a);
  };
}
function le(e, n) {
  return uo(Ou(e, n, fn), e + "");
}
var Ym = 9007199254740991;
function zi(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ym;
}
function mn(e) {
  return e != null && zi(e.length) && !rt(e);
}
function on(e, n, t) {
  if (!je(t))
    return !1;
  var r = typeof n;
  return (r == "number" ? mn(t) && it(n, t.length) : r == "string" && n in t) ? Bn(t[n], e) : !1;
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
var Jm = Object.prototype;
function Zr(e) {
  var n = e && e.constructor, t = typeof n == "function" && n.prototype || Jm;
  return e === t;
}
function co(e, n) {
  for (var t = -1, r = Array(e); ++t < e; )
    r[t] = n(t);
  return r;
}
var Xm = "[object Arguments]";
function Xa(e) {
  return Ne(e) && ln(e) == Xm;
}
var Ru = Object.prototype, Zm = Ru.hasOwnProperty, Vm = Ru.propertyIsEnumerable, Qm = Xa(function() {
  return arguments;
}()) ? Xa : function(e) {
  return Ne(e) && Zm.call(e, "callee") && !Vm.call(e, "callee");
};
const Ut = Qm;
function po() {
  return !1;
}
var Eu = typeof exports == "object" && exports && !exports.nodeType && exports, Za = Eu && typeof module == "object" && module && !module.nodeType && module, xm = Za && Za.exports === Eu, Va = xm ? Xe.Buffer : void 0, eg = Va ? Va.isBuffer : void 0, ng = eg || po;
const vt = ng;
var tg = "[object Arguments]", rg = "[object Array]", ig = "[object Boolean]", sg = "[object Date]", og = "[object Error]", ag = "[object Function]", lg = "[object Map]", fg = "[object Number]", ug = "[object Object]", cg = "[object RegExp]", dg = "[object Set]", pg = "[object String]", hg = "[object WeakMap]", mg = "[object ArrayBuffer]", gg = "[object DataView]", _g = "[object Float32Array]", yg = "[object Float64Array]", vg = "[object Int8Array]", bg = "[object Int16Array]", wg = "[object Int32Array]", $g = "[object Uint8Array]", Ag = "[object Uint8ClampedArray]", Og = "[object Uint16Array]", Rg = "[object Uint32Array]", Te = {};
Te[_g] = Te[yg] = Te[vg] = Te[bg] = Te[wg] = Te[$g] = Te[Ag] = Te[Og] = Te[Rg] = !0;
Te[tg] = Te[rg] = Te[mg] = Te[ig] = Te[gg] = Te[sg] = Te[og] = Te[ag] = Te[lg] = Te[fg] = Te[ug] = Te[cg] = Te[dg] = Te[pg] = Te[hg] = !1;
function Eg(e) {
  return Ne(e) && zi(e.length) && !!Te[ln(e)];
}
function On(e) {
  return function(n) {
    return e(n);
  };
}
var Tu = typeof exports == "object" && exports && !exports.nodeType && exports, Nr = Tu && typeof module == "object" && module && !module.nodeType && module, Tg = Nr && Nr.exports === Tu, Os = Tg && fu.process, kg = function() {
  try {
    var e = Nr && Nr.require && Nr.require("util").types;
    return e || Os && Os.binding && Os.binding("util");
  } catch {
  }
}();
const In = kg;
var Qa = In && In.isTypedArray, Pg = Qa ? On(Qa) : Eg;
const Ar = Pg;
var Sg = Object.prototype, jg = Sg.hasOwnProperty;
function ku(e, n) {
  var t = re(e), r = !t && Ut(e), i = !t && !r && vt(e), s = !t && !r && !i && Ar(e), o = t || r || i || s, a = o ? co(e.length, String) : [], l = a.length;
  for (var f in e)
    (n || jg.call(e, f)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    it(f, l))) && a.push(f);
  return a;
}
function Pu(e, n) {
  return function(t) {
    return e(n(t));
  };
}
var Ig = Pu(Object.keys, Object);
const Cg = Ig;
var Lg = Object.prototype, Mg = Lg.hasOwnProperty;
function ho(e) {
  if (!Zr(e))
    return Cg(e);
  var n = [];
  for (var t in Object(e))
    Mg.call(e, t) && t != "constructor" && n.push(t);
  return n;
}
function Ke(e) {
  return mn(e) ? ku(e) : ho(e);
}
var Ng = Object.prototype, Fg = Ng.hasOwnProperty, Wg = $r(function(e, n) {
  if (Zr(n) || mn(n)) {
    Jn(n, Ke(n), e);
    return;
  }
  for (var t in n)
    Fg.call(n, t) && Xr(e, t, n[t]);
});
const Dg = Wg;
function Ug(e) {
  var n = [];
  if (e != null)
    for (var t in Object(e))
      n.push(t);
  return n;
}
var Bg = Object.prototype, qg = Bg.hasOwnProperty;
function Gg(e) {
  if (!je(e))
    return Ug(e);
  var n = Zr(e), t = [];
  for (var r in e)
    r == "constructor" && (n || !qg.call(e, r)) || t.push(r);
  return t;
}
function gn(e) {
  return mn(e) ? ku(e, !0) : Gg(e);
}
var zg = $r(function(e, n) {
  Jn(n, gn(n), e);
});
const xa = zg;
var Hg = $r(function(e, n, t, r) {
  Jn(n, gn(n), e, r);
});
const Pi = Hg;
var Kg = $r(function(e, n, t, r) {
  Jn(n, Ke(n), e, r);
});
const Yg = Kg;
var Jg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Xg = /^\w*$/;
function mo(e, n) {
  if (re(e))
    return !1;
  var t = typeof e;
  return t == "number" || t == "symbol" || t == "boolean" || e == null || wn(e) ? !0 : Xg.test(e) || !Jg.test(e) || n != null && e in Object(n);
}
var Zg = Ht(Object, "create");
const Br = Zg;
function Vg() {
  this.__data__ = Br ? Br(null) : {}, this.size = 0;
}
function Qg(e) {
  var n = this.has(e) && delete this.__data__[e];
  return this.size -= n ? 1 : 0, n;
}
var xg = "__lodash_hash_undefined__", e1 = Object.prototype, n1 = e1.hasOwnProperty;
function t1(e) {
  var n = this.__data__;
  if (Br) {
    var t = n[e];
    return t === xg ? void 0 : t;
  }
  return n1.call(n, e) ? n[e] : void 0;
}
var r1 = Object.prototype, i1 = r1.hasOwnProperty;
function s1(e) {
  var n = this.__data__;
  return Br ? n[e] !== void 0 : i1.call(n, e);
}
var o1 = "__lodash_hash_undefined__";
function a1(e, n) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Br && n === void 0 ? o1 : n, this;
}
function Bt(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
Bt.prototype.clear = Vg;
Bt.prototype.delete = Qg;
Bt.prototype.get = t1;
Bt.prototype.has = s1;
Bt.prototype.set = a1;
function l1() {
  this.__data__ = [], this.size = 0;
}
function Hi(e, n) {
  for (var t = e.length; t--; )
    if (Bn(e[t][0], n))
      return t;
  return -1;
}
var f1 = Array.prototype, u1 = f1.splice;
function c1(e) {
  var n = this.__data__, t = Hi(n, e);
  if (t < 0)
    return !1;
  var r = n.length - 1;
  return t == r ? n.pop() : u1.call(n, t, 1), --this.size, !0;
}
function d1(e) {
  var n = this.__data__, t = Hi(n, e);
  return t < 0 ? void 0 : n[t][1];
}
function p1(e) {
  return Hi(this.__data__, e) > -1;
}
function h1(e, n) {
  var t = this.__data__, r = Hi(t, e);
  return r < 0 ? (++this.size, t.push([e, n])) : t[r][1] = n, this;
}
function at(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
at.prototype.clear = l1;
at.prototype.delete = c1;
at.prototype.get = d1;
at.prototype.has = p1;
at.prototype.set = h1;
var m1 = Ht(Xe, "Map");
const qr = m1;
function g1() {
  this.size = 0, this.__data__ = {
    hash: new Bt(),
    map: new (qr || at)(),
    string: new Bt()
  };
}
function _1(e) {
  var n = typeof e;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
}
function Ki(e, n) {
  var t = e.__data__;
  return _1(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
}
function y1(e) {
  var n = Ki(this, e).delete(e);
  return this.size -= n ? 1 : 0, n;
}
function v1(e) {
  return Ki(this, e).get(e);
}
function b1(e) {
  return Ki(this, e).has(e);
}
function w1(e, n) {
  var t = Ki(this, e), r = t.size;
  return t.set(e, n), this.size += t.size == r ? 0 : 1, this;
}
function lt(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
lt.prototype.clear = g1;
lt.prototype.delete = y1;
lt.prototype.get = v1;
lt.prototype.has = b1;
lt.prototype.set = w1;
var $1 = "Expected a function";
function Yi(e, n) {
  if (typeof e != "function" || n != null && typeof n != "function")
    throw new TypeError($1);
  var t = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], s = t.cache;
    if (s.has(i))
      return s.get(i);
    var o = e.apply(this, r);
    return t.cache = s.set(i, o) || s, o;
  };
  return t.cache = new (Yi.Cache || lt)(), t;
}
Yi.Cache = lt;
var A1 = 500;
function O1(e) {
  var n = Yi(e, function(r) {
    return t.size === A1 && t.clear(), r;
  }), t = n.cache;
  return n;
}
var R1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, E1 = /\\(\\)?/g, T1 = O1(function(e) {
  var n = [];
  return e.charCodeAt(0) === 46 && n.push(""), e.replace(R1, function(t, r, i, s) {
    n.push(i ? s.replace(E1, "$1") : r || t);
  }), n;
});
const Su = T1;
function _e(e) {
  return e == null ? "" : $n(e);
}
function wt(e, n) {
  return re(e) ? e : mo(e, n) ? [e] : Su(_e(e));
}
var k1 = 1 / 0;
function Xn(e) {
  if (typeof e == "string" || wn(e))
    return e;
  var n = e + "";
  return n == "0" && 1 / e == -k1 ? "-0" : n;
}
function Kt(e, n) {
  n = wt(n, e);
  for (var t = 0, r = n.length; e != null && t < r; )
    e = e[Xn(n[t++])];
  return t && t == r ? e : void 0;
}
function _r(e, n, t) {
  var r = e == null ? void 0 : Kt(e, n);
  return r === void 0 ? t : r;
}
function go(e, n) {
  for (var t = -1, r = n.length, i = Array(r), s = e == null; ++t < r; )
    i[t] = s ? void 0 : _r(e, n[t]);
  return i;
}
function $t(e, n) {
  for (var t = -1, r = n.length, i = e.length; ++t < r; )
    e[i + t] = n[t];
  return e;
}
var el = nn ? nn.isConcatSpreadable : void 0;
function P1(e) {
  return re(e) || Ut(e) || !!(el && e && e[el]);
}
function xe(e, n, t, r, i) {
  var s = -1, o = e.length;
  for (t || (t = P1), i || (i = []); ++s < o; ) {
    var a = e[s];
    n > 0 && t(a) ? n > 1 ? xe(a, n - 1, t, r, i) : $t(i, a) : r || (i[i.length] = a);
  }
  return i;
}
function ju(e) {
  var n = e == null ? 0 : e.length;
  return n ? xe(e, 1) : [];
}
function ft(e) {
  return uo(Ou(e, void 0, ju), e + "");
}
var S1 = ft(go);
const j1 = S1;
var I1 = Pu(Object.getPrototypeOf, Object);
const Ji = I1;
var C1 = "[object Object]", L1 = Function.prototype, M1 = Object.prototype, Iu = L1.toString, N1 = M1.hasOwnProperty, F1 = Iu.call(Object);
function Vr(e) {
  if (!Ne(e) || ln(e) != C1)
    return !1;
  var n = Ji(e);
  if (n === null)
    return !0;
  var t = N1.call(n, "constructor") && n.constructor;
  return typeof t == "function" && t instanceof t && Iu.call(t) == F1;
}
var W1 = "[object DOMException]", D1 = "[object Error]";
function _o(e) {
  if (!Ne(e))
    return !1;
  var n = ln(e);
  return n == D1 || n == W1 || typeof e.message == "string" && typeof e.name == "string" && !Vr(e);
}
var U1 = le(function(e, n) {
  try {
    return An(e, void 0, n);
  } catch (t) {
    return _o(t) ? t : new Error(t);
  }
});
const Cu = U1;
var B1 = "Expected a function";
function Lu(e, n) {
  var t;
  if (typeof n != "function")
    throw new TypeError(B1);
  return e = oe(e), function() {
    return --e > 0 && (t = n.apply(this, arguments)), e <= 1 && (n = void 0), t;
  };
}
var q1 = 1, G1 = 32, yo = le(function(e, n, t) {
  var r = q1;
  if (t.length) {
    var i = yt(t, wr(yo));
    r |= G1;
  }
  return st(e, r, n, t, i);
});
yo.placeholder = {};
const Mu = yo;
var z1 = ft(function(e, n) {
  return Ln(n, function(t) {
    t = Xn(t), ot(e, t, Mu(e[t], e));
  }), e;
});
const H1 = z1;
var K1 = 1, Y1 = 2, J1 = 32, vo = le(function(e, n, t) {
  var r = K1 | Y1;
  if (t.length) {
    var i = yt(t, wr(vo));
    r |= J1;
  }
  return st(n, r, e, t, i);
});
vo.placeholder = {};
const X1 = vo;
function Cn(e, n, t) {
  var r = -1, i = e.length;
  n < 0 && (n = -n > i ? 0 : i + n), t = t > i ? i : t, t < 0 && (t += i), i = n > t ? 0 : t - n >>> 0, n >>>= 0;
  for (var s = Array(i); ++r < i; )
    s[r] = e[r + n];
  return s;
}
function At(e, n, t) {
  var r = e.length;
  return t = t === void 0 ? r : t, !n && t >= r ? e : Cn(e, n, t);
}
var Z1 = "\\ud800-\\udfff", V1 = "\\u0300-\\u036f", Q1 = "\\ufe20-\\ufe2f", x1 = "\\u20d0-\\u20ff", e_ = V1 + Q1 + x1, n_ = "\\ufe0e\\ufe0f", t_ = "\\u200d", r_ = RegExp("[" + t_ + Z1 + e_ + n_ + "]");
function Or(e) {
  return r_.test(e);
}
function i_(e) {
  return e.split("");
}
var Nu = "\\ud800-\\udfff", s_ = "\\u0300-\\u036f", o_ = "\\ufe20-\\ufe2f", a_ = "\\u20d0-\\u20ff", l_ = s_ + o_ + a_, f_ = "\\ufe0e\\ufe0f", u_ = "[" + Nu + "]", Ds = "[" + l_ + "]", Us = "\\ud83c[\\udffb-\\udfff]", c_ = "(?:" + Ds + "|" + Us + ")", Fu = "[^" + Nu + "]", Wu = "(?:\\ud83c[\\udde6-\\uddff]){2}", Du = "[\\ud800-\\udbff][\\udc00-\\udfff]", d_ = "\\u200d", Uu = c_ + "?", Bu = "[" + f_ + "]?", p_ = "(?:" + d_ + "(?:" + [Fu, Wu, Du].join("|") + ")" + Bu + Uu + ")*", h_ = Bu + Uu + p_, m_ = "(?:" + [Fu + Ds + "?", Ds, Wu, Du, u_].join("|") + ")", g_ = RegExp(Us + "(?=" + Us + ")|" + m_ + h_, "g");
function __(e) {
  return e.match(g_) || [];
}
function Un(e) {
  return Or(e) ? __(e) : i_(e);
}
function qu(e) {
  return function(n) {
    n = _e(n);
    var t = Or(n) ? Un(n) : void 0, r = t ? t[0] : n.charAt(0), i = t ? At(t, 1).join("") : n.slice(1);
    return r[e]() + i;
  };
}
var y_ = qu("toUpperCase");
const bo = y_;
function Gu(e) {
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
var v_ = {
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
}, b_ = $o(v_);
const w_ = b_;
var $_ = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, A_ = "\\u0300-\\u036f", O_ = "\\ufe20-\\ufe2f", R_ = "\\u20d0-\\u20ff", E_ = A_ + O_ + R_, T_ = "[" + E_ + "]", k_ = RegExp(T_, "g");
function zu(e) {
  return e = _e(e), e && e.replace($_, w_).replace(k_, "");
}
var P_ = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function S_(e) {
  return e.match(P_) || [];
}
var j_ = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function I_(e) {
  return j_.test(e);
}
var Hu = "\\ud800-\\udfff", C_ = "\\u0300-\\u036f", L_ = "\\ufe20-\\ufe2f", M_ = "\\u20d0-\\u20ff", N_ = C_ + L_ + M_, Ku = "\\u2700-\\u27bf", Yu = "a-z\\xdf-\\xf6\\xf8-\\xff", F_ = "\\xac\\xb1\\xd7\\xf7", W_ = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", D_ = "\\u2000-\\u206f", U_ = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Ju = "A-Z\\xc0-\\xd6\\xd8-\\xde", B_ = "\\ufe0e\\ufe0f", Xu = F_ + W_ + D_ + U_, Zu = "['’]", nl = "[" + Xu + "]", q_ = "[" + N_ + "]", Vu = "\\d+", G_ = "[" + Ku + "]", Qu = "[" + Yu + "]", xu = "[^" + Hu + Xu + Vu + Ku + Yu + Ju + "]", z_ = "\\ud83c[\\udffb-\\udfff]", H_ = "(?:" + q_ + "|" + z_ + ")", K_ = "[^" + Hu + "]", ec = "(?:\\ud83c[\\udde6-\\uddff]){2}", nc = "[\\ud800-\\udbff][\\udc00-\\udfff]", ur = "[" + Ju + "]", Y_ = "\\u200d", tl = "(?:" + Qu + "|" + xu + ")", J_ = "(?:" + ur + "|" + xu + ")", rl = "(?:" + Zu + "(?:d|ll|m|re|s|t|ve))?", il = "(?:" + Zu + "(?:D|LL|M|RE|S|T|VE))?", tc = H_ + "?", rc = "[" + B_ + "]?", X_ = "(?:" + Y_ + "(?:" + [K_, ec, nc].join("|") + ")" + rc + tc + ")*", Z_ = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", V_ = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Q_ = rc + tc + X_, x_ = "(?:" + [G_, ec, nc].join("|") + ")" + Q_, e0 = RegExp([
  ur + "?" + Qu + "+" + rl + "(?=" + [nl, ur, "$"].join("|") + ")",
  J_ + "+" + il + "(?=" + [nl, ur + tl, "$"].join("|") + ")",
  ur + "?" + tl + "+" + rl,
  ur + "+" + il,
  V_,
  Z_,
  Vu,
  x_
].join("|"), "g");
function n0(e) {
  return e.match(e0) || [];
}
function ic(e, n, t) {
  return e = _e(e), n = t ? void 0 : n, n === void 0 ? I_(e) ? n0(e) : S_(e) : e.match(n) || [];
}
var t0 = "['’]", r0 = RegExp(t0, "g");
function Rr(e) {
  return function(n) {
    return wo(ic(zu(n).replace(r0, "")), e, "");
  };
}
var i0 = Rr(function(e, n, t) {
  return n = n.toLowerCase(), e + (t ? Gu(n) : n);
});
const s0 = i0;
function o0() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return re(e) ? e : [e];
}
var a0 = Xe.isFinite, l0 = Math.min;
function Ao(e) {
  var n = Math[e];
  return function(t, r) {
    if (t = Pn(t), r = r == null ? 0 : l0(oe(r), 292), r && a0(t)) {
      var i = (_e(t) + "e").split("e"), s = n(i[0] + "e" + (+i[1] + r));
      return i = (_e(s) + "e").split("e"), +(i[0] + "e" + (+i[1] - r));
    }
    return n(t);
  };
}
var f0 = Ao("ceil");
const u0 = f0;
function sc(e) {
  var n = d(e);
  return n.__chain__ = !0, n;
}
var c0 = Math.ceil, d0 = Math.max;
function p0(e, n, t) {
  (t ? on(e, n, t) : n === void 0) ? n = 1 : n = d0(oe(n), 0);
  var r = e == null ? 0 : e.length;
  if (!r || n < 1)
    return [];
  for (var i = 0, s = 0, o = Array(c0(r / n)); i < r; )
    o[s++] = Cn(e, i, i += n);
  return o;
}
function Yt(e, n, t) {
  return e === e && (t !== void 0 && (e = e <= t ? e : t), n !== void 0 && (e = e >= n ? e : n)), e;
}
function h0(e, n, t) {
  return t === void 0 && (t = n, n = void 0), t !== void 0 && (t = Pn(t), t = t === t ? t : 0), n !== void 0 && (n = Pn(n), n = n === n ? n : 0), Yt(Pn(e), n, t);
}
function m0() {
  this.__data__ = new at(), this.size = 0;
}
function g0(e) {
  var n = this.__data__, t = n.delete(e);
  return this.size = n.size, t;
}
function _0(e) {
  return this.__data__.get(e);
}
function y0(e) {
  return this.__data__.has(e);
}
var v0 = 200;
function b0(e, n) {
  var t = this.__data__;
  if (t instanceof at) {
    var r = t.__data__;
    if (!qr || r.length < v0 - 1)
      return r.push([e, n]), this.size = ++t.size, this;
    t = this.__data__ = new lt(r);
  }
  return t.set(e, n), this.size = t.size, this;
}
function Fn(e) {
  var n = this.__data__ = new at(e);
  this.size = n.size;
}
Fn.prototype.clear = m0;
Fn.prototype.delete = g0;
Fn.prototype.get = _0;
Fn.prototype.has = y0;
Fn.prototype.set = b0;
function oc(e, n) {
  return e && Jn(n, Ke(n), e);
}
function w0(e, n) {
  return e && Jn(n, gn(n), e);
}
var ac = typeof exports == "object" && exports && !exports.nodeType && exports, sl = ac && typeof module == "object" && module && !module.nodeType && module, $0 = sl && sl.exports === ac, ol = $0 ? Xe.Buffer : void 0, al = ol ? ol.allocUnsafe : void 0;
function lc(e, n) {
  if (n)
    return e.slice();
  var t = e.length, r = al ? al(t) : new e.constructor(t);
  return e.copy(r), r;
}
function Ot(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length, i = 0, s = []; ++t < r; ) {
    var o = e[t];
    n(o, t, e) && (s[i++] = o);
  }
  return s;
}
function Oo() {
  return [];
}
var A0 = Object.prototype, O0 = A0.propertyIsEnumerable, ll = Object.getOwnPropertySymbols, R0 = ll ? function(e) {
  return e == null ? [] : (e = Object(e), Ot(ll(e), function(n) {
    return O0.call(e, n);
  }));
} : Oo;
const Ro = R0;
function E0(e, n) {
  return Jn(e, Ro(e), n);
}
var T0 = Object.getOwnPropertySymbols, k0 = T0 ? function(e) {
  for (var n = []; e; )
    $t(n, Ro(e)), e = Ji(e);
  return n;
} : Oo;
const fc = k0;
function P0(e, n) {
  return Jn(e, fc(e), n);
}
function uc(e, n, t) {
  var r = n(e);
  return re(e) ? r : $t(r, t(e));
}
function Bs(e) {
  return uc(e, Ke, Ro);
}
function Eo(e) {
  return uc(e, gn, fc);
}
var S0 = Ht(Xe, "DataView");
const qs = S0;
var j0 = Ht(Xe, "Promise");
const Gs = j0;
var I0 = Ht(Xe, "Set");
const mr = I0;
var fl = "[object Map]", C0 = "[object Object]", ul = "[object Promise]", cl = "[object Set]", dl = "[object WeakMap]", pl = "[object DataView]", L0 = zt(qs), M0 = zt(qr), N0 = zt(Gs), F0 = zt(mr), W0 = zt(Dr), Mt = ln;
(qs && Mt(new qs(new ArrayBuffer(1))) != pl || qr && Mt(new qr()) != fl || Gs && Mt(Gs.resolve()) != ul || mr && Mt(new mr()) != cl || Dr && Mt(new Dr()) != dl) && (Mt = function(e) {
  var n = ln(e), t = n == C0 ? e.constructor : void 0, r = t ? zt(t) : "";
  if (r)
    switch (r) {
      case L0:
        return pl;
      case M0:
        return fl;
      case N0:
        return ul;
      case F0:
        return cl;
      case W0:
        return dl;
    }
  return n;
});
const Yn = Mt;
var D0 = Object.prototype, U0 = D0.hasOwnProperty;
function B0(e) {
  var n = e.length, t = new e.constructor(n);
  return n && typeof e[0] == "string" && U0.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var q0 = Xe.Uint8Array;
const Si = q0;
function To(e) {
  var n = new e.constructor(e.byteLength);
  return new Si(n).set(new Si(e)), n;
}
function G0(e, n) {
  var t = n ? To(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var z0 = /\w*$/;
function H0(e) {
  var n = new e.constructor(e.source, z0.exec(e));
  return n.lastIndex = e.lastIndex, n;
}
var hl = nn ? nn.prototype : void 0, ml = hl ? hl.valueOf : void 0;
function K0(e) {
  return ml ? Object(ml.call(e)) : {};
}
function cc(e, n) {
  var t = n ? To(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.length);
}
var Y0 = "[object Boolean]", J0 = "[object Date]", X0 = "[object Map]", Z0 = "[object Number]", V0 = "[object RegExp]", Q0 = "[object Set]", x0 = "[object String]", ey = "[object Symbol]", ny = "[object ArrayBuffer]", ty = "[object DataView]", ry = "[object Float32Array]", iy = "[object Float64Array]", sy = "[object Int8Array]", oy = "[object Int16Array]", ay = "[object Int32Array]", ly = "[object Uint8Array]", fy = "[object Uint8ClampedArray]", uy = "[object Uint16Array]", cy = "[object Uint32Array]";
function dy(e, n, t) {
  var r = e.constructor;
  switch (n) {
    case ny:
      return To(e);
    case Y0:
    case J0:
      return new r(+e);
    case ty:
      return G0(e, t);
    case ry:
    case iy:
    case sy:
    case oy:
    case ay:
    case ly:
    case fy:
    case uy:
    case cy:
      return cc(e, t);
    case X0:
      return new r();
    case Z0:
    case x0:
      return new r(e);
    case V0:
      return H0(e);
    case Q0:
      return new r();
    case ey:
      return K0(e);
  }
}
function dc(e) {
  return typeof e.constructor == "function" && !Zr(e) ? vr(Ji(e)) : {};
}
var py = "[object Map]";
function hy(e) {
  return Ne(e) && Yn(e) == py;
}
var gl = In && In.isMap, my = gl ? On(gl) : hy;
const pc = my;
var gy = "[object Set]";
function _y(e) {
  return Ne(e) && Yn(e) == gy;
}
var _l = In && In.isSet, yy = _l ? On(_l) : _y;
const hc = yy;
var vy = 1, by = 2, wy = 4, mc = "[object Arguments]", $y = "[object Array]", Ay = "[object Boolean]", Oy = "[object Date]", Ry = "[object Error]", gc = "[object Function]", Ey = "[object GeneratorFunction]", Ty = "[object Map]", ky = "[object Number]", _c = "[object Object]", Py = "[object RegExp]", Sy = "[object Set]", jy = "[object String]", Iy = "[object Symbol]", Cy = "[object WeakMap]", Ly = "[object ArrayBuffer]", My = "[object DataView]", Ny = "[object Float32Array]", Fy = "[object Float64Array]", Wy = "[object Int8Array]", Dy = "[object Int16Array]", Uy = "[object Int32Array]", By = "[object Uint8Array]", qy = "[object Uint8ClampedArray]", Gy = "[object Uint16Array]", zy = "[object Uint32Array]", Ee = {};
Ee[mc] = Ee[$y] = Ee[Ly] = Ee[My] = Ee[Ay] = Ee[Oy] = Ee[Ny] = Ee[Fy] = Ee[Wy] = Ee[Dy] = Ee[Uy] = Ee[Ty] = Ee[ky] = Ee[_c] = Ee[Py] = Ee[Sy] = Ee[jy] = Ee[Iy] = Ee[By] = Ee[qy] = Ee[Gy] = Ee[zy] = !0;
Ee[Ry] = Ee[gc] = Ee[Cy] = !1;
function Sn(e, n, t, r, i, s) {
  var o, a = n & vy, l = n & by, f = n & wy;
  if (t && (o = i ? t(e, r, i, s) : t(e)), o !== void 0)
    return o;
  if (!je(e))
    return e;
  var u = re(e);
  if (u) {
    if (o = B0(e), !a)
      return hn(e, o);
  } else {
    var c = Yn(e), p = c == gc || c == Ey;
    if (vt(e))
      return lc(e, a);
    if (c == _c || c == mc || p && !i) {
      if (o = l || p ? {} : dc(e), !a)
        return l ? P0(e, w0(o, e)) : E0(e, oc(o, e));
    } else {
      if (!Ee[c])
        return i ? e : {};
      o = dy(e, c, a);
    }
  }
  s || (s = new Fn());
  var m = s.get(e);
  if (m)
    return m;
  s.set(e, o), hc(e) ? e.forEach(function(b) {
    o.add(Sn(b, n, t, b, e, s));
  }) : pc(e) && e.forEach(function(b, w) {
    o.set(w, Sn(b, n, t, w, e, s));
  });
  var h = f ? l ? Eo : Bs : l ? gn : Ke, g = u ? void 0 : h(e);
  return Ln(g || e, function(b, w) {
    g && (w = b, b = e[w]), Xr(o, w, Sn(b, n, t, w, e, s));
  }), o;
}
var Hy = 4;
function Ky(e) {
  return Sn(e, Hy);
}
var Yy = 1, Jy = 4;
function Xy(e) {
  return Sn(e, Yy | Jy);
}
var Zy = 1, Vy = 4;
function Qy(e, n) {
  return n = typeof n == "function" ? n : void 0, Sn(e, Zy | Vy, n);
}
var xy = 4;
function ev(e, n) {
  return n = typeof n == "function" ? n : void 0, Sn(e, xy, n);
}
function nv() {
  return new jn(this.value(), this.__chain__);
}
function tv(e) {
  for (var n = -1, t = e == null ? 0 : e.length, r = 0, i = []; ++n < t; ) {
    var s = e[n];
    s && (i[r++] = s);
  }
  return i;
}
function rv() {
  var e = arguments.length;
  if (!e)
    return [];
  for (var n = Array(e - 1), t = arguments[0], r = e; r--; )
    n[r - 1] = arguments[r];
  return $t(re(t) ? hn(t) : [t], xe(n, 1));
}
var iv = "__lodash_hash_undefined__";
function sv(e) {
  return this.__data__.set(e, iv), this;
}
function ov(e) {
  return this.__data__.has(e);
}
function qt(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.__data__ = new lt(); ++n < t; )
    this.add(e[n]);
}
qt.prototype.add = qt.prototype.push = sv;
qt.prototype.has = ov;
function ko(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length; ++t < r; )
    if (n(e[t], t, e))
      return !0;
  return !1;
}
function Gr(e, n) {
  return e.has(n);
}
var av = 1, lv = 2;
function yc(e, n, t, r, i, s) {
  var o = t & av, a = e.length, l = n.length;
  if (a != l && !(o && l > a))
    return !1;
  var f = s.get(e), u = s.get(n);
  if (f && u)
    return f == n && u == e;
  var c = -1, p = !0, m = t & lv ? new qt() : void 0;
  for (s.set(e, n), s.set(n, e); ++c < a; ) {
    var h = e[c], g = n[c];
    if (r)
      var b = o ? r(g, h, c, n, e, s) : r(h, g, c, e, n, s);
    if (b !== void 0) {
      if (b)
        continue;
      p = !1;
      break;
    }
    if (m) {
      if (!ko(n, function(w, A) {
        if (!Gr(m, A) && (h === w || i(h, w, t, r, s)))
          return m.push(A);
      })) {
        p = !1;
        break;
      }
    } else if (!(h === g || i(h, g, t, r, s))) {
      p = !1;
      break;
    }
  }
  return s.delete(e), s.delete(n), p;
}
function Po(e) {
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
var fv = 1, uv = 2, cv = "[object Boolean]", dv = "[object Date]", pv = "[object Error]", hv = "[object Map]", mv = "[object Number]", gv = "[object RegExp]", _v = "[object Set]", yv = "[object String]", vv = "[object Symbol]", bv = "[object ArrayBuffer]", wv = "[object DataView]", yl = nn ? nn.prototype : void 0, Rs = yl ? yl.valueOf : void 0;
function $v(e, n, t, r, i, s, o) {
  switch (t) {
    case wv:
      if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
        return !1;
      e = e.buffer, n = n.buffer;
    case bv:
      return !(e.byteLength != n.byteLength || !s(new Si(e), new Si(n)));
    case cv:
    case dv:
    case mv:
      return Bn(+e, +n);
    case pv:
      return e.name == n.name && e.message == n.message;
    case gv:
    case yv:
      return e == n + "";
    case hv:
      var a = Po;
    case _v:
      var l = r & fv;
      if (a || (a = Xi), e.size != n.size && !l)
        return !1;
      var f = o.get(e);
      if (f)
        return f == n;
      r |= uv, o.set(e, n);
      var u = yc(a(e), a(n), r, i, s, o);
      return o.delete(e), u;
    case vv:
      if (Rs)
        return Rs.call(e) == Rs.call(n);
  }
  return !1;
}
var Av = 1, Ov = Object.prototype, Rv = Ov.hasOwnProperty;
function Ev(e, n, t, r, i, s) {
  var o = t & Av, a = Bs(e), l = a.length, f = Bs(n), u = f.length;
  if (l != u && !o)
    return !1;
  for (var c = l; c--; ) {
    var p = a[c];
    if (!(o ? p in n : Rv.call(n, p)))
      return !1;
  }
  var m = s.get(e), h = s.get(n);
  if (m && h)
    return m == n && h == e;
  var g = !0;
  s.set(e, n), s.set(n, e);
  for (var b = o; ++c < l; ) {
    p = a[c];
    var w = e[p], A = n[p];
    if (r)
      var M = o ? r(A, w, p, n, e, s) : r(w, A, p, e, n, s);
    if (!(M === void 0 ? w === A || i(w, A, t, r, s) : M)) {
      g = !1;
      break;
    }
    b || (b = p == "constructor");
  }
  if (g && !b) {
    var W = e.constructor, j = n.constructor;
    W != j && "constructor" in e && "constructor" in n && !(typeof W == "function" && W instanceof W && typeof j == "function" && j instanceof j) && (g = !1);
  }
  return s.delete(e), s.delete(n), g;
}
var Tv = 1, vl = "[object Arguments]", bl = "[object Array]", pi = "[object Object]", kv = Object.prototype, wl = kv.hasOwnProperty;
function Pv(e, n, t, r, i, s) {
  var o = re(e), a = re(n), l = o ? bl : Yn(e), f = a ? bl : Yn(n);
  l = l == vl ? pi : l, f = f == vl ? pi : f;
  var u = l == pi, c = f == pi, p = l == f;
  if (p && vt(e)) {
    if (!vt(n))
      return !1;
    o = !0, u = !1;
  }
  if (p && !u)
    return s || (s = new Fn()), o || Ar(e) ? yc(e, n, t, r, i, s) : $v(e, n, l, t, r, i, s);
  if (!(t & Tv)) {
    var m = u && wl.call(e, "__wrapped__"), h = c && wl.call(n, "__wrapped__");
    if (m || h) {
      var g = m ? e.value() : e, b = h ? n.value() : n;
      return s || (s = new Fn()), i(g, b, t, r, s);
    }
  }
  return p ? (s || (s = new Fn()), Ev(e, n, t, r, i, s)) : !1;
}
function Qr(e, n, t, r, i) {
  return e === n ? !0 : e == null || n == null || !Ne(e) && !Ne(n) ? e !== e && n !== n : Pv(e, n, t, r, Qr, i);
}
var Sv = 1, jv = 2;
function So(e, n, t, r) {
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
      var c = new Fn();
      if (r)
        var p = r(f, u, l, e, n, c);
      if (!(p === void 0 ? Qr(u, f, Sv | jv, r, c) : p))
        return !1;
    }
  }
  return !0;
}
function vc(e) {
  return e === e && !je(e);
}
function jo(e) {
  for (var n = Ke(e), t = n.length; t--; ) {
    var r = n[t], i = e[r];
    n[t] = [r, i, vc(i)];
  }
  return n;
}
function bc(e, n) {
  return function(t) {
    return t == null ? !1 : t[e] === n && (n !== void 0 || e in Object(t));
  };
}
function wc(e) {
  var n = jo(e);
  return n.length == 1 && n[0][2] ? bc(n[0][0], n[0][1]) : function(t) {
    return t === e || So(t, e, n);
  };
}
function Iv(e, n) {
  return e != null && n in Object(e);
}
function $c(e, n, t) {
  n = wt(n, e);
  for (var r = -1, i = n.length, s = !1; ++r < i; ) {
    var o = Xn(n[r]);
    if (!(s = e != null && t(e, o)))
      break;
    e = e[o];
  }
  return s || ++r != i ? s : (i = e == null ? 0 : e.length, !!i && zi(i) && it(o, i) && (re(e) || Ut(e)));
}
function Io(e, n) {
  return e != null && $c(e, n, Iv);
}
var Cv = 1, Lv = 2;
function Ac(e, n) {
  return mo(e) && vc(n) ? bc(Xn(e), n) : function(t) {
    var r = _r(t, e);
    return r === void 0 && r === n ? Io(t, e) : Qr(n, r, Cv | Lv);
  };
}
function Co(e) {
  return function(n) {
    return n == null ? void 0 : n[e];
  };
}
function Mv(e) {
  return function(n) {
    return Kt(n, e);
  };
}
function Oc(e) {
  return mo(e) ? Co(Xn(e)) : Mv(e);
}
function te(e) {
  return typeof e == "function" ? e : e == null ? fn : typeof e == "object" ? re(e) ? Ac(e[0], e[1]) : wc(e) : Oc(e);
}
var Nv = "Expected a function";
function Fv(e) {
  var n = e == null ? 0 : e.length, t = te;
  return e = n ? Se(e, function(r) {
    if (typeof r[1] != "function")
      throw new TypeError(Nv);
    return [t(r[0]), r[1]];
  }) : [], le(function(r) {
    for (var i = -1; ++i < n; ) {
      var s = e[i];
      if (An(s[0], this, r))
        return An(s[1], this, r);
    }
  });
}
function Rc(e, n, t) {
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
function Wv(e) {
  var n = Ke(e);
  return function(t) {
    return Rc(t, e, n);
  };
}
var Dv = 1;
function Uv(e) {
  return Wv(Sn(e, Dv));
}
function Bv(e, n) {
  return n == null || Rc(e, n, Ke(n));
}
function qv(e, n, t, r) {
  for (var i = -1, s = e == null ? 0 : e.length; ++i < s; ) {
    var o = e[i];
    n(r, o, t(o), e);
  }
  return r;
}
function Ec(e) {
  return function(n, t, r) {
    for (var i = -1, s = Object(n), o = r(n), a = o.length; a--; ) {
      var l = o[e ? a : ++i];
      if (t(s[l], l, s) === !1)
        break;
    }
    return n;
  };
}
var Gv = Ec();
const Lo = Gv;
function Zn(e, n) {
  return e && Lo(e, n, Ke);
}
function Tc(e, n) {
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
var zv = Tc(Zn);
const Rt = zv;
function Hv(e, n, t, r) {
  return Rt(e, function(i, s, o) {
    n(r, i, t(i), o);
  }), r;
}
function Zi(e, n) {
  return function(t, r) {
    var i = re(t) ? qv : Hv, s = n ? n() : {};
    return i(t, e, te(r), s);
  };
}
var Kv = Object.prototype, Yv = Kv.hasOwnProperty, Jv = Zi(function(e, n, t) {
  Yv.call(e, t) ? ++e[t] : ot(e, t, 1);
});
const Xv = Jv;
function Zv(e, n) {
  var t = vr(e);
  return n == null ? t : oc(t, n);
}
var Vv = 8;
function Mo(e, n, t) {
  n = t ? void 0 : n;
  var r = st(e, Vv, void 0, void 0, void 0, void 0, void 0, n);
  return r.placeholder = Mo.placeholder, r;
}
Mo.placeholder = {};
var Qv = 16;
function No(e, n, t) {
  n = t ? void 0 : n;
  var r = st(e, Qv, void 0, void 0, void 0, void 0, void 0, n);
  return r.placeholder = No.placeholder, r;
}
No.placeholder = {};
var xv = function() {
  return Xe.Date.now();
};
const Oi = xv;
var eb = "Expected a function", nb = Math.max, tb = Math.min;
function kc(e, n, t) {
  var r, i, s, o, a, l, f = 0, u = !1, c = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(eb);
  n = Pn(n) || 0, je(t) && (u = !!t.leading, c = "maxWait" in t, s = c ? nb(Pn(t.maxWait) || 0, n) : s, p = "trailing" in t ? !!t.trailing : p);
  function m(F) {
    var I = r, D = i;
    return r = i = void 0, f = F, o = e.apply(D, I), o;
  }
  function h(F) {
    return f = F, a = setTimeout(w, n), u ? m(F) : o;
  }
  function g(F) {
    var I = F - l, D = F - f, C = n - I;
    return c ? tb(C, s - D) : C;
  }
  function b(F) {
    var I = F - l, D = F - f;
    return l === void 0 || I >= n || I < 0 || c && D >= s;
  }
  function w() {
    var F = Oi();
    if (b(F))
      return A(F);
    a = setTimeout(w, g(F));
  }
  function A(F) {
    return a = void 0, p && r ? m(F) : (r = i = void 0, o);
  }
  function M() {
    a !== void 0 && clearTimeout(a), f = 0, r = l = i = a = void 0;
  }
  function W() {
    return a === void 0 ? o : A(Oi());
  }
  function j() {
    var F = Oi(), I = b(F);
    if (r = arguments, i = this, l = F, I) {
      if (a === void 0)
        return h(l);
      if (c)
        return clearTimeout(a), a = setTimeout(w, n), m(l);
    }
    return a === void 0 && (a = setTimeout(w, n)), o;
  }
  return j.cancel = M, j.flush = W, j;
}
function rb(e, n) {
  return e == null || e !== e ? n : e;
}
var Pc = Object.prototype, ib = Pc.hasOwnProperty, sb = le(function(e, n) {
  e = Object(e);
  var t = -1, r = n.length, i = r > 2 ? n[2] : void 0;
  for (i && on(n[0], n[1], i) && (r = 1); ++t < r; )
    for (var s = n[t], o = gn(s), a = -1, l = o.length; ++a < l; ) {
      var f = o[a], u = e[f];
      (u === void 0 || Bn(u, Pc[f]) && !ib.call(e, f)) && (e[f] = s[f]);
    }
  return e;
});
const ob = sb;
function zs(e, n, t) {
  (t !== void 0 && !Bn(e[n], t) || t === void 0 && !(n in e)) && ot(e, n, t);
}
function qe(e) {
  return Ne(e) && mn(e);
}
function Hs(e, n) {
  if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
    return e[n];
}
function Sc(e) {
  return Jn(e, gn(e));
}
function ab(e, n, t, r, i, s, o) {
  var a = Hs(e, t), l = Hs(n, t), f = o.get(l);
  if (f) {
    zs(e, t, f);
    return;
  }
  var u = s ? s(a, l, t + "", e, n, o) : void 0, c = u === void 0;
  if (c) {
    var p = re(l), m = !p && vt(l), h = !p && !m && Ar(l);
    u = l, p || m || h ? re(a) ? u = a : qe(a) ? u = hn(a) : m ? (c = !1, u = lc(l, !0)) : h ? (c = !1, u = cc(l, !0)) : u = [] : Vr(l) || Ut(l) ? (u = a, Ut(a) ? u = Sc(a) : (!je(a) || rt(a)) && (u = dc(l))) : c = !1;
  }
  c && (o.set(l, u), i(u, l, r, s, o), o.delete(l)), zs(e, t, u);
}
function Vi(e, n, t, r, i) {
  e !== n && Lo(n, function(s, o) {
    if (i || (i = new Fn()), je(s))
      ab(e, n, o, t, Vi, r, i);
    else {
      var a = r ? r(Hs(e, o), s, o + "", e, n, i) : void 0;
      a === void 0 && (a = s), zs(e, o, a);
    }
  }, gn);
}
function jc(e, n, t, r, i, s) {
  return je(e) && je(n) && (s.set(n, e), Vi(e, n, void 0, jc, s), s.delete(n)), e;
}
var lb = $r(function(e, n, t, r) {
  Vi(e, n, t, r);
});
const Ic = lb;
var fb = le(function(e) {
  return e.push(void 0, jc), An(Ic, void 0, e);
});
const ub = fb;
var cb = "Expected a function";
function Cc(e, n, t) {
  if (typeof e != "function")
    throw new TypeError(cb);
  return setTimeout(function() {
    e.apply(void 0, t);
  }, n);
}
var db = le(function(e, n) {
  return Cc(e, 1, n);
});
const pb = db;
var hb = le(function(e, n, t) {
  return Cc(e, Pn(n) || 0, t);
});
const mb = hb;
function Fo(e, n, t) {
  for (var r = -1, i = e == null ? 0 : e.length; ++r < i; )
    if (t(n, e[r]))
      return !0;
  return !1;
}
var gb = 200;
function xr(e, n, t, r) {
  var i = -1, s = qi, o = !0, a = e.length, l = [], f = n.length;
  if (!a)
    return l;
  t && (n = Se(n, On(t))), r ? (s = Fo, o = !1) : n.length >= gb && (s = Gr, o = !1, n = new qt(n));
  e:
    for (; ++i < a; ) {
      var u = e[i], c = t == null ? u : t(u);
      if (u = r || u !== 0 ? u : 0, o && c === c) {
        for (var p = f; p--; )
          if (n[p] === c)
            continue e;
        l.push(u);
      } else
        s(n, c, r) || l.push(u);
    }
  return l;
}
var _b = le(function(e, n) {
  return qe(e) ? xr(e, xe(n, 1, qe, !0)) : [];
});
const yb = _b;
function Rn(e) {
  var n = e == null ? 0 : e.length;
  return n ? e[n - 1] : void 0;
}
var vb = le(function(e, n) {
  var t = Rn(n);
  return qe(t) && (t = void 0), qe(e) ? xr(e, xe(n, 1, qe, !0), te(t)) : [];
});
const bb = vb;
var wb = le(function(e, n) {
  var t = Rn(n);
  return qe(t) && (t = void 0), qe(e) ? xr(e, xe(n, 1, qe, !0), void 0, t) : [];
});
const $b = wb;
var Ab = Di(function(e, n) {
  return e / n;
}, 1);
const Ob = Ab;
function Rb(e, n, t) {
  var r = e == null ? 0 : e.length;
  return r ? (n = t || n === void 0 ? 1 : oe(n), Cn(e, n < 0 ? 0 : n, r)) : [];
}
function Eb(e, n, t) {
  var r = e == null ? 0 : e.length;
  return r ? (n = t || n === void 0 ? 1 : oe(n), n = r - n, Cn(e, 0, n < 0 ? 0 : n)) : [];
}
function Qi(e, n, t, r) {
  for (var i = e.length, s = r ? i : -1; (r ? s-- : ++s < i) && n(e[s], s, e); )
    ;
  return t ? Cn(e, r ? 0 : s, r ? s + 1 : i) : Cn(e, r ? s + 1 : 0, r ? i : s);
}
function Tb(e, n) {
  return e && e.length ? Qi(e, te(n), !0, !0) : [];
}
function kb(e, n) {
  return e && e.length ? Qi(e, te(n), !0) : [];
}
function Vn(e) {
  return typeof e == "function" ? e : fn;
}
function $l(e, n) {
  var t = re(e) ? Ln : Rt;
  return t(e, Vn(n));
}
function Pb(e, n) {
  for (var t = e == null ? 0 : e.length; t-- && n(e[t], t, e) !== !1; )
    ;
  return e;
}
var Sb = Ec(!0);
const Lc = Sb;
function Wo(e, n) {
  return e && Lc(e, n, Ke);
}
var jb = Tc(Wo, !0);
const Mc = jb;
function Al(e, n) {
  var t = re(e) ? Pb : Mc;
  return t(e, Vn(n));
}
function Ib(e, n, t) {
  e = _e(e), n = $n(n);
  var r = e.length;
  t = t === void 0 ? r : Yt(oe(t), 0, r);
  var i = t;
  return t -= n.length, t >= 0 && e.slice(t, i) == n;
}
function Cb(e, n) {
  return Se(n, function(t) {
    return [t, e[t]];
  });
}
function Lb(e) {
  var n = -1, t = Array(e.size);
  return e.forEach(function(r) {
    t[++n] = [r, r];
  }), t;
}
var Mb = "[object Map]", Nb = "[object Set]";
function Nc(e) {
  return function(n) {
    var t = Yn(n);
    return t == Mb ? Po(n) : t == Nb ? Lb(n) : Cb(n, e(n));
  };
}
var Fb = Nc(Ke);
const Ol = Fb;
var Wb = Nc(gn);
const Rl = Wb;
var Db = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Ub = $o(Db);
const Bb = Ub;
var Fc = /[&<>"']/g, qb = RegExp(Fc.source);
function Wc(e) {
  return e = _e(e), e && qb.test(e) ? e.replace(Fc, Bb) : e;
}
var Dc = /[\\^$.*+?()[\]{}|]/g, Gb = RegExp(Dc.source);
function zb(e) {
  return e = _e(e), e && Gb.test(e) ? e.replace(Dc, "\\$&") : e;
}
function Uc(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length; ++t < r; )
    if (!n(e[t], t, e))
      return !1;
  return !0;
}
function Hb(e, n) {
  var t = !0;
  return Rt(e, function(r, i, s) {
    return t = !!n(r, i, s), t;
  }), t;
}
function Kb(e, n, t) {
  var r = re(e) ? Uc : Hb;
  return t && on(e, n, t) && (n = void 0), r(e, te(n));
}
var Yb = 4294967295;
function Bc(e) {
  return e ? Yt(oe(e), 0, Yb) : 0;
}
function Jb(e, n, t, r) {
  var i = e.length;
  for (t = oe(t), t < 0 && (t = -t > i ? 0 : i + t), r = r === void 0 || r > i ? i : oe(r), r < 0 && (r += i), r = t > r ? 0 : Bc(r); t < r; )
    e[t++] = n;
  return e;
}
function Xb(e, n, t, r) {
  var i = e == null ? 0 : e.length;
  return i ? (t && typeof t != "number" && on(e, n, t) && (t = 0, r = i), Jb(e, n, t, r)) : [];
}
function qc(e, n) {
  var t = [];
  return Rt(e, function(r, i, s) {
    n(r, i, s) && t.push(r);
  }), t;
}
function Zb(e, n) {
  var t = re(e) ? Ot : qc;
  return t(e, te(n));
}
function Gc(e) {
  return function(n, t, r) {
    var i = Object(n);
    if (!mn(n)) {
      var s = te(t);
      n = Ke(n), t = function(a) {
        return s(i[a], a, i);
      };
    }
    var o = e(n, t, r);
    return o > -1 ? i[s ? n[o] : o] : void 0;
  };
}
var Vb = Math.max;
function zc(e, n, t) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var i = t == null ? 0 : oe(t);
  return i < 0 && (i = Vb(r + i, 0)), Bi(e, te(n), i);
}
var Qb = Gc(zc);
const xb = Qb;
function Hc(e, n, t) {
  var r;
  return t(e, function(i, s, o) {
    if (n(i, s, o))
      return r = s, !1;
  }), r;
}
function ew(e, n) {
  return Hc(e, te(n), Zn);
}
var nw = Math.max, tw = Math.min;
function Kc(e, n, t) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var i = r - 1;
  return t !== void 0 && (i = oe(t), i = t < 0 ? nw(r + i, 0) : tw(i, r - 1)), Bi(e, te(n), i, !0);
}
var rw = Gc(Kc);
const iw = rw;
function sw(e, n) {
  return Hc(e, te(n), Wo);
}
function El(e) {
  return e && e.length ? e[0] : void 0;
}
function Yc(e, n) {
  var t = -1, r = mn(e) ? Array(e.length) : [];
  return Rt(e, function(i, s, o) {
    r[++t] = n(i, s, o);
  }), r;
}
function xi(e, n) {
  var t = re(e) ? Se : Yc;
  return t(e, te(n));
}
function ow(e, n) {
  return xe(xi(e, n), 1);
}
var aw = 1 / 0;
function lw(e, n) {
  return xe(xi(e, n), aw);
}
function fw(e, n, t) {
  return t = t === void 0 ? 1 : oe(t), xe(xi(e, n), t);
}
var uw = 1 / 0;
function cw(e) {
  var n = e == null ? 0 : e.length;
  return n ? xe(e, uw) : [];
}
function dw(e, n) {
  var t = e == null ? 0 : e.length;
  return t ? (n = n === void 0 ? 1 : oe(n), xe(e, n)) : [];
}
var pw = 512;
function hw(e) {
  return st(e, pw);
}
var mw = Ao("floor");
const gw = mw;
var _w = "Expected a function", yw = 8, vw = 32, bw = 128, ww = 256;
function Jc(e) {
  return ft(function(n) {
    var t = n.length, r = t, i = jn.prototype.thru;
    for (e && n.reverse(); r--; ) {
      var s = n[r];
      if (typeof s != "function")
        throw new TypeError(_w);
      if (i && !o && Ai(s) == "wrapper")
        var o = new jn([], !0);
    }
    for (r = o ? r : t; ++r < t; ) {
      s = n[r];
      var a = Ai(s), l = a == "wrapper" ? lo(s) : void 0;
      l && Ws(l[0]) && l[1] == (bw | yw | vw | ww) && !l[4].length && l[9] == 1 ? o = o[Ai(l[0])].apply(o, l[3]) : o = s.length == 1 && Ws(s) ? o[a]() : o.thru(s);
    }
    return function() {
      var f = arguments, u = f[0];
      if (o && f.length == 1 && re(u))
        return o.plant(u).value();
      for (var c = 0, p = t ? n[c].apply(this, f) : u; ++c < t; )
        p = n[c].call(this, p);
      return p;
    };
  });
}
var $w = Jc();
const Aw = $w;
var Ow = Jc(!0);
const Rw = Ow;
function Ew(e, n) {
  return e == null ? e : Lo(e, Vn(n), gn);
}
function Tw(e, n) {
  return e == null ? e : Lc(e, Vn(n), gn);
}
function kw(e, n) {
  return e && Zn(e, Vn(n));
}
function Pw(e, n) {
  return e && Wo(e, Vn(n));
}
function Sw(e) {
  for (var n = -1, t = e == null ? 0 : e.length, r = {}; ++n < t; ) {
    var i = e[n];
    r[i[0]] = i[1];
  }
  return r;
}
function es(e, n) {
  return Ot(n, function(t) {
    return rt(e[t]);
  });
}
function jw(e) {
  return e == null ? [] : es(e, Ke(e));
}
function Iw(e) {
  return e == null ? [] : es(e, gn(e));
}
var Cw = Object.prototype, Lw = Cw.hasOwnProperty, Mw = Zi(function(e, n, t) {
  Lw.call(e, t) ? e[t].push(n) : ot(e, t, [n]);
});
const Nw = Mw;
function Do(e, n) {
  return e > n;
}
function ns(e) {
  return function(n, t) {
    return typeof n == "string" && typeof t == "string" || (n = Pn(n), t = Pn(t)), e(n, t);
  };
}
var Fw = ns(Do);
const Ww = Fw;
var Dw = ns(function(e, n) {
  return e >= n;
});
const Uw = Dw;
var Bw = Object.prototype, qw = Bw.hasOwnProperty;
function Gw(e, n) {
  return e != null && qw.call(e, n);
}
function zw(e, n) {
  return e != null && $c(e, n, Gw);
}
var Hw = Math.max, Kw = Math.min;
function Yw(e, n, t) {
  return e >= Kw(n, t) && e < Hw(n, t);
}
function Jw(e, n, t) {
  return n = tt(n), t === void 0 ? (t = n, n = 0) : t = tt(t), e = Pn(e), Yw(e, n, t);
}
var Xw = "[object String]";
function ts(e) {
  return typeof e == "string" || !re(e) && Ne(e) && ln(e) == Xw;
}
function Uo(e, n) {
  return Se(n, function(t) {
    return e[t];
  });
}
function Er(e) {
  return e == null ? [] : Uo(e, Ke(e));
}
var Zw = Math.max;
function Vw(e, n, t, r) {
  e = mn(e) ? e : Er(e), t = t && !r ? oe(t) : 0;
  var i = e.length;
  return t < 0 && (t = Zw(i + t, 0)), ts(e) ? t <= i && e.indexOf(n, t) > -1 : !!i && br(e, n, t) > -1;
}
var Qw = Math.max;
function xw(e, n, t) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var i = t == null ? 0 : oe(t);
  return i < 0 && (i = Qw(r + i, 0)), br(e, n, i);
}
function e2(e) {
  var n = e == null ? 0 : e.length;
  return n ? Cn(e, 0, -1) : [];
}
var n2 = Math.min;
function Bo(e, n, t) {
  for (var r = t ? Fo : qi, i = e[0].length, s = e.length, o = s, a = Array(s), l = 1 / 0, f = []; o--; ) {
    var u = e[o];
    o && n && (u = Se(u, On(n))), l = n2(u.length, l), a[o] = !t && (n || i >= 120 && u.length >= 120) ? new qt(o && u) : void 0;
  }
  u = e[0];
  var c = -1, p = a[0];
  e:
    for (; ++c < i && f.length < l; ) {
      var m = u[c], h = n ? n(m) : m;
      if (m = t || m !== 0 ? m : 0, !(p ? Gr(p, h) : r(f, h, t))) {
        for (o = s; --o; ) {
          var g = a[o];
          if (!(g ? Gr(g, h) : r(e[o], h, t)))
            continue e;
        }
        p && p.push(h), f.push(m);
      }
    }
  return f;
}
function qo(e) {
  return qe(e) ? e : [];
}
var t2 = le(function(e) {
  var n = Se(e, qo);
  return n.length && n[0] === e[0] ? Bo(n) : [];
});
const r2 = t2;
var i2 = le(function(e) {
  var n = Rn(e), t = Se(e, qo);
  return n === Rn(t) ? n = void 0 : t.pop(), t.length && t[0] === e[0] ? Bo(t, te(n)) : [];
});
const s2 = i2;
var o2 = le(function(e) {
  var n = Rn(e), t = Se(e, qo);
  return n = typeof n == "function" ? n : void 0, n && t.pop(), t.length && t[0] === e[0] ? Bo(t, void 0, n) : [];
});
const a2 = o2;
function l2(e, n, t, r) {
  return Zn(e, function(i, s, o) {
    n(r, t(i), s, o);
  }), r;
}
function Xc(e, n) {
  return function(t, r) {
    return l2(t, e, n(r), {});
  };
}
var f2 = Object.prototype, u2 = f2.toString, c2 = Xc(function(e, n, t) {
  n != null && typeof n.toString != "function" && (n = u2.call(n)), e[n] = t;
}, fo(fn));
const d2 = c2;
var Zc = Object.prototype, p2 = Zc.hasOwnProperty, h2 = Zc.toString, m2 = Xc(function(e, n, t) {
  n != null && typeof n.toString != "function" && (n = h2.call(n)), p2.call(e, n) ? e[n].push(t) : e[n] = [t];
}, te);
const g2 = m2;
function Vc(e, n) {
  return n.length < 2 ? e : Kt(e, Cn(n, 0, -1));
}
function ei(e, n, t) {
  n = wt(n, e), e = Vc(e, n);
  var r = e == null ? e : e[Xn(Rn(n))];
  return r == null ? void 0 : An(r, e, t);
}
var _2 = le(ei);
const y2 = _2;
var v2 = le(function(e, n, t) {
  var r = -1, i = typeof n == "function", s = mn(e) ? Array(e.length) : [];
  return Rt(e, function(o) {
    s[++r] = i ? An(n, o, t) : ei(o, n, t);
  }), s;
});
const b2 = v2;
var w2 = "[object ArrayBuffer]";
function $2(e) {
  return Ne(e) && ln(e) == w2;
}
var Tl = In && In.isArrayBuffer, A2 = Tl ? On(Tl) : $2;
const O2 = A2;
var R2 = "[object Boolean]";
function E2(e) {
  return e === !0 || e === !1 || Ne(e) && ln(e) == R2;
}
var T2 = "[object Date]";
function k2(e) {
  return Ne(e) && ln(e) == T2;
}
var kl = In && In.isDate, P2 = kl ? On(kl) : k2;
const S2 = P2;
function j2(e) {
  return Ne(e) && e.nodeType === 1 && !Vr(e);
}
var I2 = "[object Map]", C2 = "[object Set]", L2 = Object.prototype, M2 = L2.hasOwnProperty;
function N2(e) {
  if (e == null)
    return !0;
  if (mn(e) && (re(e) || typeof e == "string" || typeof e.splice == "function" || vt(e) || Ar(e) || Ut(e)))
    return !e.length;
  var n = Yn(e);
  if (n == I2 || n == C2)
    return !e.size;
  if (Zr(e))
    return !ho(e).length;
  for (var t in e)
    if (M2.call(e, t))
      return !1;
  return !0;
}
function F2(e, n) {
  return Qr(e, n);
}
function W2(e, n, t) {
  t = typeof t == "function" ? t : void 0;
  var r = t ? t(e, n) : void 0;
  return r === void 0 ? Qr(e, n, void 0, t) : !!r;
}
var D2 = Xe.isFinite;
function U2(e) {
  return typeof e == "number" && D2(e);
}
function Qc(e) {
  return typeof e == "number" && e == oe(e);
}
function B2(e, n) {
  return e === n || So(e, n, jo(n));
}
function q2(e, n, t) {
  return t = typeof t == "function" ? t : void 0, So(e, n, jo(n), t);
}
var G2 = "[object Number]";
function xc(e) {
  return typeof e == "number" || Ne(e) && ln(e) == G2;
}
function z2(e) {
  return xc(e) && e != +e;
}
var H2 = $i ? rt : po;
const K2 = H2;
var Y2 = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.";
function J2(e) {
  if (K2(e))
    throw new Error(Y2);
  return pu(e);
}
function X2(e) {
  return e == null;
}
function Z2(e) {
  return e === null;
}
var V2 = "[object RegExp]";
function Q2(e) {
  return Ne(e) && ln(e) == V2;
}
var Pl = In && In.isRegExp, x2 = Pl ? On(Pl) : Q2;
const Go = x2;
var Sl = 9007199254740991;
function e$(e) {
  return Qc(e) && e >= -Sl && e <= Sl;
}
function n$(e) {
  return e === void 0;
}
var t$ = "[object WeakMap]";
function r$(e) {
  return Ne(e) && Yn(e) == t$;
}
var i$ = "[object WeakSet]";
function s$(e) {
  return Ne(e) && ln(e) == i$;
}
var o$ = 1;
function a$(e) {
  return te(typeof e == "function" ? e : Sn(e, o$));
}
var l$ = Array.prototype, f$ = l$.join;
function u$(e, n) {
  return e == null ? "" : f$.call(e, n);
}
var c$ = Rr(function(e, n, t) {
  return e + (t ? "-" : "") + n.toLowerCase();
});
const d$ = c$;
var p$ = Zi(function(e, n, t) {
  ot(e, t, n);
});
const h$ = p$;
function m$(e, n, t) {
  for (var r = t + 1; r--; )
    if (e[r] === n)
      return r;
  return r;
}
var g$ = Math.max, _$ = Math.min;
function y$(e, n, t) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var i = r;
  return t !== void 0 && (i = oe(t), i = i < 0 ? g$(r + i, 0) : _$(i, r - 1)), n === n ? m$(e, n, i) : Bi(e, bu, i, !0);
}
var v$ = Rr(function(e, n, t) {
  return e + (t ? " " : "") + n.toLowerCase();
});
const b$ = v$;
var w$ = qu("toLowerCase");
const $$ = w$;
function zo(e, n) {
  return e < n;
}
var A$ = ns(zo);
const O$ = A$;
var R$ = ns(function(e, n) {
  return e <= n;
});
const E$ = R$;
function T$(e, n) {
  var t = {};
  return n = te(n), Zn(e, function(r, i, s) {
    ot(t, n(r, i, s), r);
  }), t;
}
function k$(e, n) {
  var t = {};
  return n = te(n), Zn(e, function(r, i, s) {
    ot(t, i, n(r, i, s));
  }), t;
}
var P$ = 1;
function S$(e) {
  return wc(Sn(e, P$));
}
var j$ = 1;
function I$(e, n) {
  return Ac(e, Sn(n, j$));
}
function rs(e, n, t) {
  for (var r = -1, i = e.length; ++r < i; ) {
    var s = e[r], o = n(s);
    if (o != null && (a === void 0 ? o === o && !wn(o) : t(o, a)))
      var a = o, l = s;
  }
  return l;
}
function C$(e) {
  return e && e.length ? rs(e, fn, Do) : void 0;
}
function L$(e, n) {
  return e && e.length ? rs(e, te(n), Do) : void 0;
}
function Ho(e, n) {
  for (var t, r = -1, i = e.length; ++r < i; ) {
    var s = n(e[r]);
    s !== void 0 && (t = t === void 0 ? s : t + s);
  }
  return t;
}
var M$ = 0 / 0;
function ed(e, n) {
  var t = e == null ? 0 : e.length;
  return t ? Ho(e, n) / t : M$;
}
function N$(e) {
  return ed(e, fn);
}
function F$(e, n) {
  return ed(e, te(n));
}
var W$ = $r(function(e, n, t) {
  Vi(e, n, t);
});
const D$ = W$;
var U$ = le(function(e, n) {
  return function(t) {
    return ei(t, e, n);
  };
});
const B$ = U$;
var q$ = le(function(e, n) {
  return function(t) {
    return ei(e, t, n);
  };
});
const G$ = q$;
function z$(e) {
  return e && e.length ? rs(e, fn, zo) : void 0;
}
function H$(e, n) {
  return e && e.length ? rs(e, te(n), zo) : void 0;
}
function nd(e, n, t) {
  var r = Ke(n), i = es(n, r), s = !(je(t) && "chain" in t) || !!t.chain, o = rt(e);
  return Ln(i, function(a) {
    var l = n[a];
    e[a] = l, o && (e.prototype[a] = function() {
      var f = this.__chain__;
      if (s || f) {
        var u = e(this.__wrapped__), c = u.__actions__ = hn(this.__actions__);
        return c.push({ func: l, args: arguments, thisArg: e }), u.__chain__ = f, u;
      }
      return l.apply(e, $t([this.value()], arguments));
    });
  }), e;
}
var K$ = Di(function(e, n) {
  return e * n;
}, 1);
const Y$ = K$;
var J$ = "Expected a function";
function ni(e) {
  if (typeof e != "function")
    throw new TypeError(J$);
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
function X$(e) {
  for (var n, t = []; !(n = e.next()).done; )
    t.push(n.value);
  return t;
}
var Z$ = "[object Map]", V$ = "[object Set]", Es = nn ? nn.iterator : void 0;
function td(e) {
  if (!e)
    return [];
  if (mn(e))
    return ts(e) ? Un(e) : hn(e);
  if (Es && e[Es])
    return X$(e[Es]());
  var n = Yn(e), t = n == Z$ ? Po : n == V$ ? Xi : Er;
  return t(e);
}
function Q$() {
  this.__values__ === void 0 && (this.__values__ = td(this.value()));
  var e = this.__index__ >= this.__values__.length, n = e ? void 0 : this.__values__[this.__index__++];
  return { done: e, value: n };
}
function rd(e, n) {
  var t = e.length;
  if (t)
    return n += n < 0 ? t : 0, it(n, t) ? e[n] : void 0;
}
function x$(e, n) {
  return e && e.length ? rd(e, oe(n)) : void 0;
}
function eA(e) {
  return e = oe(e), le(function(n) {
    return rd(n, e);
  });
}
function Ko(e, n) {
  return n = wt(n, e), e = Vc(e, n), e == null || delete e[Xn(Rn(n))];
}
function nA(e) {
  return Vr(e) ? void 0 : e;
}
var tA = 1, rA = 2, iA = 4, sA = ft(function(e, n) {
  var t = {};
  if (e == null)
    return t;
  var r = !1;
  n = Se(n, function(s) {
    return s = wt(s, e), r || (r = s.length > 1), s;
  }), Jn(e, Eo(e), t), r && (t = Sn(t, tA | rA | iA, nA));
  for (var i = n.length; i--; )
    Ko(t, n[i]);
  return t;
});
const oA = sA;
function ti(e, n, t, r) {
  if (!je(e))
    return e;
  n = wt(n, e);
  for (var i = -1, s = n.length, o = s - 1, a = e; a != null && ++i < s; ) {
    var l = Xn(n[i]), f = t;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != o) {
      var u = a[l];
      f = r ? r(u, l, a) : void 0, f === void 0 && (f = je(u) ? u : it(n[i + 1]) ? [] : {});
    }
    Xr(a, l, f), a = a[l];
  }
  return e;
}
function id(e, n, t) {
  for (var r = -1, i = n.length, s = {}; ++r < i; ) {
    var o = n[r], a = Kt(e, o);
    t(a, o) && ti(s, wt(o, e), a);
  }
  return s;
}
function sd(e, n) {
  if (e == null)
    return {};
  var t = Se(Eo(e), function(r) {
    return [r];
  });
  return n = te(n), id(e, t, function(r, i) {
    return n(r, i[0]);
  });
}
function aA(e, n) {
  return sd(e, ni(te(n)));
}
function lA(e) {
  return Lu(2, e);
}
function fA(e, n) {
  var t = e.length;
  for (e.sort(n); t--; )
    e[t] = e[t].value;
  return e;
}
function od(e, n) {
  if (e !== n) {
    var t = e !== void 0, r = e === null, i = e === e, s = wn(e), o = n !== void 0, a = n === null, l = n === n, f = wn(n);
    if (!a && !f && !s && e > n || s && o && l && !a && !f || r && o && l || !t && l || !i)
      return 1;
    if (!r && !s && !f && e < n || f && t && i && !r && !s || a && t && i || !o && i || !l)
      return -1;
  }
  return 0;
}
function uA(e, n, t) {
  for (var r = -1, i = e.criteria, s = n.criteria, o = i.length, a = t.length; ++r < o; ) {
    var l = od(i[r], s[r]);
    if (l) {
      if (r >= a)
        return l;
      var f = t[r];
      return l * (f == "desc" ? -1 : 1);
    }
  }
  return e.index - n.index;
}
function ad(e, n, t) {
  n.length ? n = Se(n, function(s) {
    return re(s) ? function(o) {
      return Kt(o, s.length === 1 ? s[0] : s);
    } : s;
  }) : n = [fn];
  var r = -1;
  n = Se(n, On(te));
  var i = Yc(e, function(s, o, a) {
    var l = Se(n, function(f) {
      return f(s);
    });
    return { criteria: l, index: ++r, value: s };
  });
  return fA(i, function(s, o) {
    return uA(s, o, t);
  });
}
function cA(e, n, t, r) {
  return e == null ? [] : (re(n) || (n = n == null ? [] : [n]), t = r ? void 0 : t, re(t) || (t = t == null ? [] : [t]), ad(e, n, t));
}
function Yo(e) {
  return ft(function(n) {
    return n = Se(n, On(te)), le(function(t) {
      var r = this;
      return e(n, function(i) {
        return An(i, r, t);
      });
    });
  });
}
var dA = Yo(Se);
const pA = dA;
var hA = le;
const mA = hA;
var gA = Math.min, _A = mA(function(e, n) {
  n = n.length == 1 && re(n[0]) ? Se(n[0], On(te)) : Se(xe(n, 1), On(te));
  var t = n.length;
  return le(function(r) {
    for (var i = -1, s = gA(r.length, t); ++i < s; )
      r[i] = n[i].call(this, r[i]);
    return An(e, this, r);
  });
});
const yA = _A;
var vA = Yo(Uc);
const bA = vA;
var wA = Yo(ko);
const $A = wA;
var AA = 9007199254740991, OA = Math.floor;
function Ks(e, n) {
  var t = "";
  if (!e || n < 1 || n > AA)
    return t;
  do
    n % 2 && (t += e), n = OA(n / 2), n && (e += e);
  while (n);
  return t;
}
var RA = Co("length");
const EA = RA;
var ld = "\\ud800-\\udfff", TA = "\\u0300-\\u036f", kA = "\\ufe20-\\ufe2f", PA = "\\u20d0-\\u20ff", SA = TA + kA + PA, jA = "\\ufe0e\\ufe0f", IA = "[" + ld + "]", Ys = "[" + SA + "]", Js = "\\ud83c[\\udffb-\\udfff]", CA = "(?:" + Ys + "|" + Js + ")", fd = "[^" + ld + "]", ud = "(?:\\ud83c[\\udde6-\\uddff]){2}", cd = "[\\ud800-\\udbff][\\udc00-\\udfff]", LA = "\\u200d", dd = CA + "?", pd = "[" + jA + "]?", MA = "(?:" + LA + "(?:" + [fd, ud, cd].join("|") + ")" + pd + dd + ")*", NA = pd + dd + MA, FA = "(?:" + [fd + Ys + "?", Ys, ud, cd, IA].join("|") + ")", jl = RegExp(Js + "(?=" + Js + ")|" + FA + NA, "g");
function WA(e) {
  for (var n = jl.lastIndex = 0; jl.test(e); )
    ++n;
  return n;
}
function Tr(e) {
  return Or(e) ? WA(e) : EA(e);
}
var DA = Math.ceil;
function ji(e, n) {
  n = n === void 0 ? " " : $n(n);
  var t = n.length;
  if (t < 2)
    return t ? Ks(n, e) : n;
  var r = Ks(n, DA(e / Tr(n)));
  return Or(n) ? At(Un(r), 0, e).join("") : r.slice(0, e);
}
var UA = Math.ceil, BA = Math.floor;
function qA(e, n, t) {
  e = _e(e), n = oe(n);
  var r = n ? Tr(e) : 0;
  if (!n || r >= n)
    return e;
  var i = (n - r) / 2;
  return ji(BA(i), t) + e + ji(UA(i), t);
}
function GA(e, n, t) {
  e = _e(e), n = oe(n);
  var r = n ? Tr(e) : 0;
  return n && r < n ? e + ji(n - r, t) : e;
}
function zA(e, n, t) {
  e = _e(e), n = oe(n);
  var r = n ? Tr(e) : 0;
  return n && r < n ? ji(n - r, t) + e : e;
}
var HA = /^\s+/, KA = Xe.parseInt;
function YA(e, n, t) {
  return t || n == null ? n = 0 : n && (n = +n), KA(_e(e).replace(HA, ""), n || 0);
}
var JA = 32, Jo = le(function(e, n) {
  var t = yt(n, wr(Jo));
  return st(e, JA, void 0, n, t);
});
Jo.placeholder = {};
const hd = Jo;
var XA = 64, Xo = le(function(e, n) {
  var t = yt(n, wr(Xo));
  return st(e, XA, void 0, n, t);
});
Xo.placeholder = {};
const ZA = Xo;
var VA = Zi(function(e, n, t) {
  e[t ? 0 : 1].push(n);
}, function() {
  return [[], []];
});
const QA = VA;
function xA(e, n) {
  return id(e, n, function(t, r) {
    return Io(e, r);
  });
}
var eO = ft(function(e, n) {
  return e == null ? {} : xA(e, n);
});
const nO = eO;
function tO(e) {
  for (var n, t = this; t instanceof Ui; ) {
    var r = _u(t);
    r.__index__ = 0, r.__values__ = void 0, n ? i.__wrapped__ = r : n = r;
    var i = r;
    t = t.__wrapped__;
  }
  return i.__wrapped__ = e, n;
}
function rO(e) {
  return function(n) {
    return e == null ? void 0 : Kt(e, n);
  };
}
function iO(e, n, t, r) {
  for (var i = t - 1, s = e.length; ++i < s; )
    if (r(e[i], n))
      return i;
  return -1;
}
var sO = Array.prototype, Il = sO.splice;
function Zo(e, n, t, r) {
  var i = r ? iO : br, s = -1, o = n.length, a = e;
  for (e === n && (n = hn(n)), t && (a = Se(e, On(t))); ++s < o; )
    for (var l = 0, f = n[s], u = t ? t(f) : f; (l = i(a, u, l, r)) > -1; )
      a !== e && Il.call(a, l, 1), Il.call(e, l, 1);
  return e;
}
function md(e, n) {
  return e && e.length && n && n.length ? Zo(e, n) : e;
}
var oO = le(md);
const aO = oO;
function lO(e, n, t) {
  return e && e.length && n && n.length ? Zo(e, n, te(t)) : e;
}
function fO(e, n, t) {
  return e && e.length && n && n.length ? Zo(e, n, void 0, t) : e;
}
var uO = Array.prototype, cO = uO.splice;
function gd(e, n) {
  for (var t = e ? n.length : 0, r = t - 1; t--; ) {
    var i = n[t];
    if (t == r || i !== s) {
      var s = i;
      it(i) ? cO.call(e, i, 1) : Ko(e, i);
    }
  }
  return e;
}
var dO = ft(function(e, n) {
  var t = e == null ? 0 : e.length, r = go(e, n);
  return gd(e, Se(n, function(i) {
    return it(i, t) ? +i : i;
  }).sort(od)), r;
});
const pO = dO;
var hO = Math.floor, mO = Math.random;
function Vo(e, n) {
  return e + hO(mO() * (n - e + 1));
}
var gO = parseFloat, _O = Math.min, yO = Math.random;
function vO(e, n, t) {
  if (t && typeof t != "boolean" && on(e, n, t) && (n = t = void 0), t === void 0 && (typeof n == "boolean" ? (t = n, n = void 0) : typeof e == "boolean" && (t = e, e = void 0)), e === void 0 && n === void 0 ? (e = 0, n = 1) : (e = tt(e), n === void 0 ? (n = e, e = 0) : n = tt(n)), e > n) {
    var r = e;
    e = n, n = r;
  }
  if (t || e % 1 || n % 1) {
    var i = yO();
    return _O(e + i * (n - e + gO("1e-" + ((i + "").length - 1))), n);
  }
  return Vo(e, n);
}
var bO = Math.ceil, wO = Math.max;
function $O(e, n, t, r) {
  for (var i = -1, s = wO(bO((n - e) / (t || 1)), 0), o = Array(s); s--; )
    o[r ? s : ++i] = e, e += t;
  return o;
}
function _d(e) {
  return function(n, t, r) {
    return r && typeof r != "number" && on(n, t, r) && (t = r = void 0), n = tt(n), t === void 0 ? (t = n, n = 0) : t = tt(t), r = r === void 0 ? n < t ? 1 : -1 : tt(r), $O(n, t, r, e);
  };
}
var AO = _d();
const OO = AO;
var RO = _d(!0);
const EO = RO;
var TO = 256, kO = ft(function(e, n) {
  return st(e, TO, void 0, void 0, void 0, n);
});
const PO = kO;
function yd(e, n, t, r, i) {
  return i(e, function(s, o, a) {
    t = r ? (r = !1, s) : n(t, s, o, a);
  }), t;
}
function SO(e, n, t) {
  var r = re(e) ? wo : yd, i = arguments.length < 3;
  return r(e, te(n), t, i, Rt);
}
function jO(e, n, t, r) {
  var i = e == null ? 0 : e.length;
  for (r && i && (t = e[--i]); i--; )
    t = n(t, e[i], i, e);
  return t;
}
function IO(e, n, t) {
  var r = re(e) ? jO : yd, i = arguments.length < 3;
  return r(e, te(n), t, i, Mc);
}
function CO(e, n) {
  var t = re(e) ? Ot : qc;
  return t(e, ni(te(n)));
}
function LO(e, n) {
  var t = [];
  if (!(e && e.length))
    return t;
  var r = -1, i = [], s = e.length;
  for (n = te(n); ++r < s; ) {
    var o = e[r];
    n(o, r, e) && (t.push(o), i.push(r));
  }
  return gd(e, i), t;
}
function MO(e, n, t) {
  return (t ? on(e, n, t) : n === void 0) ? n = 1 : n = oe(n), Ks(_e(e), n);
}
function NO() {
  var e = arguments, n = _e(e[0]);
  return e.length < 3 ? n : n.replace(e[1], e[2]);
}
var FO = "Expected a function";
function WO(e, n) {
  if (typeof e != "function")
    throw new TypeError(FO);
  return n = n === void 0 ? n : oe(n), le(e, n);
}
function DO(e, n, t) {
  n = wt(n, e);
  var r = -1, i = n.length;
  for (i || (i = 1, e = void 0); ++r < i; ) {
    var s = e == null ? void 0 : e[Xn(n[r])];
    s === void 0 && (r = i, s = t), e = rt(s) ? s.call(e) : s;
  }
  return e;
}
var UO = Array.prototype, BO = UO.reverse;
function Xs(e) {
  return e == null ? e : BO.call(e);
}
var qO = Ao("round");
const GO = qO;
function vd(e) {
  var n = e.length;
  return n ? e[Vo(0, n - 1)] : void 0;
}
function zO(e) {
  return vd(Er(e));
}
function HO(e) {
  var n = re(e) ? vd : zO;
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
function KO(e, n) {
  return is(hn(e), Yt(n, 0, e.length));
}
function YO(e, n) {
  var t = Er(e);
  return is(t, Yt(n, 0, t.length));
}
function JO(e, n, t) {
  (t ? on(e, n, t) : n === void 0) ? n = 1 : n = oe(n);
  var r = re(e) ? KO : YO;
  return r(e, n);
}
function Qo(e, n, t) {
  return e == null ? e : ti(e, n, t);
}
function XO(e, n, t, r) {
  return r = typeof r == "function" ? r : void 0, e == null ? e : ti(e, n, t, r);
}
function ZO(e) {
  return is(hn(e));
}
function VO(e) {
  return is(Er(e));
}
function QO(e) {
  var n = re(e) ? ZO : VO;
  return n(e);
}
var xO = "[object Map]", eR = "[object Set]";
function nR(e) {
  if (e == null)
    return 0;
  if (mn(e))
    return ts(e) ? Tr(e) : e.length;
  var n = Yn(e);
  return n == xO || n == eR ? e.size : ho(e).length;
}
function tR(e, n, t) {
  var r = e == null ? 0 : e.length;
  return r ? (t && typeof t != "number" && on(e, n, t) ? (n = 0, t = r) : (n = n == null ? 0 : oe(n), t = t === void 0 ? r : oe(t)), Cn(e, n, t)) : [];
}
var rR = Rr(function(e, n, t) {
  return e + (t ? "_" : "") + n.toLowerCase();
});
const iR = rR;
function sR(e, n) {
  var t;
  return Rt(e, function(r, i, s) {
    return t = n(r, i, s), !t;
  }), !!t;
}
function oR(e, n, t) {
  var r = re(e) ? ko : sR;
  return t && on(e, n, t) && (n = void 0), r(e, te(n));
}
var aR = le(function(e, n) {
  if (e == null)
    return [];
  var t = n.length;
  return t > 1 && on(e, n[0], n[1]) ? n = [] : t > 2 && on(n[0], n[1], n[2]) && (n = [n[0]]), ad(e, xe(n, 1), []);
});
const lR = aR;
var fR = 4294967295, uR = fR - 1, cR = Math.floor, dR = Math.min;
function xo(e, n, t, r) {
  var i = 0, s = e == null ? 0 : e.length;
  if (s === 0)
    return 0;
  n = t(n);
  for (var o = n !== n, a = n === null, l = wn(n), f = n === void 0; i < s; ) {
    var u = cR((i + s) / 2), c = t(e[u]), p = c !== void 0, m = c === null, h = c === c, g = wn(c);
    if (o)
      var b = r || h;
    else
      f ? b = h && (r || p) : a ? b = h && p && (r || !m) : l ? b = h && p && !m && (r || !g) : m || g ? b = !1 : b = r ? c <= n : c < n;
    b ? i = u + 1 : s = u;
  }
  return dR(s, uR);
}
var pR = 4294967295, hR = pR >>> 1;
function ss(e, n, t) {
  var r = 0, i = e == null ? r : e.length;
  if (typeof n == "number" && n === n && i <= hR) {
    for (; r < i; ) {
      var s = r + i >>> 1, o = e[s];
      o !== null && !wn(o) && (t ? o <= n : o < n) ? r = s + 1 : i = s;
    }
    return i;
  }
  return xo(e, n, fn, t);
}
function mR(e, n) {
  return ss(e, n);
}
function gR(e, n, t) {
  return xo(e, n, te(t));
}
function _R(e, n) {
  var t = e == null ? 0 : e.length;
  if (t) {
    var r = ss(e, n);
    if (r < t && Bn(e[r], n))
      return r;
  }
  return -1;
}
function yR(e, n) {
  return ss(e, n, !0);
}
function vR(e, n, t) {
  return xo(e, n, te(t), !0);
}
function bR(e, n) {
  var t = e == null ? 0 : e.length;
  if (t) {
    var r = ss(e, n, !0) - 1;
    if (Bn(e[r], n))
      return r;
  }
  return -1;
}
function bd(e, n) {
  for (var t = -1, r = e.length, i = 0, s = []; ++t < r; ) {
    var o = e[t], a = n ? n(o) : o;
    if (!t || !Bn(a, l)) {
      var l = a;
      s[i++] = o === 0 ? 0 : o;
    }
  }
  return s;
}
function wR(e) {
  return e && e.length ? bd(e) : [];
}
function $R(e, n) {
  return e && e.length ? bd(e, te(n)) : [];
}
var AR = 4294967295;
function OR(e, n, t) {
  return t && typeof t != "number" && on(e, n, t) && (n = t = void 0), t = t === void 0 ? AR : t >>> 0, t ? (e = _e(e), e && (typeof n == "string" || n != null && !Go(n)) && (n = $n(n), !n && Or(e)) ? At(Un(e), 0, t) : e.split(n, t)) : [];
}
var RR = "Expected a function", ER = Math.max;
function TR(e, n) {
  if (typeof e != "function")
    throw new TypeError(RR);
  return n = n == null ? 0 : ER(oe(n), 0), le(function(t) {
    var r = t[n], i = At(t, 0, n);
    return r && $t(i, r), An(e, this, i);
  });
}
var kR = Rr(function(e, n, t) {
  return e + (t ? " " : "") + bo(n);
});
const PR = kR;
function SR(e, n, t) {
  return e = _e(e), t = t == null ? 0 : Yt(oe(t), 0, e.length), n = $n(n), e.slice(t, t + n.length) == n;
}
function jR() {
  return {};
}
function IR() {
  return "";
}
function CR() {
  return !0;
}
var LR = Di(function(e, n) {
  return e - n;
}, 0);
const MR = LR;
function NR(e) {
  return e && e.length ? Ho(e, fn) : 0;
}
function FR(e, n) {
  return e && e.length ? Ho(e, te(n)) : 0;
}
function WR(e) {
  var n = e == null ? 0 : e.length;
  return n ? Cn(e, 1, n) : [];
}
function DR(e, n, t) {
  return e && e.length ? (n = t || n === void 0 ? 1 : oe(n), Cn(e, 0, n < 0 ? 0 : n)) : [];
}
function UR(e, n, t) {
  var r = e == null ? 0 : e.length;
  return r ? (n = t || n === void 0 ? 1 : oe(n), n = r - n, Cn(e, n < 0 ? 0 : n, r)) : [];
}
function BR(e, n) {
  return e && e.length ? Qi(e, te(n), !1, !0) : [];
}
function qR(e, n) {
  return e && e.length ? Qi(e, te(n)) : [];
}
function GR(e, n) {
  return n(e), e;
}
var wd = Object.prototype, zR = wd.hasOwnProperty;
function Cl(e, n, t, r) {
  return e === void 0 || Bn(e, wd[t]) && !zR.call(r, t) ? n : e;
}
var HR = {
  "\\": "\\",
  "'": "'",
  "\n": "n",
  "\r": "r",
  "\u2028": "u2028",
  "\u2029": "u2029"
};
function KR(e) {
  return "\\" + HR[e];
}
var YR = /<%=([\s\S]+?)%>/g;
const $d = YR;
var JR = /<%-([\s\S]+?)%>/g;
const XR = JR;
var ZR = /<%([\s\S]+?)%>/g;
const VR = ZR;
var QR = {
  /**
   * Used to detect `data` property values to be HTML-escaped.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  escape: XR,
  /**
   * Used to detect code to be evaluated.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  evaluate: VR,
  /**
   * Used to detect `data` property values to inject.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  interpolate: $d,
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
    _: { escape: Wc }
  }
};
const Zs = QR;
var xR = "Invalid `variable` option passed into `_.template`", eE = /\b__p \+= '';/g, nE = /\b(__p \+=) '' \+/g, tE = /(__e\(.*?\)|\b__t\)) \+\n'';/g, rE = /[()=,{}\[\]\/\s]/, iE = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, hi = /($^)/, sE = /['\n\r\u2028\u2029\\]/g, oE = Object.prototype, Ll = oE.hasOwnProperty;
function aE(e, n, t) {
  var r = Zs.imports._.templateSettings || Zs;
  t && on(e, n, t) && (n = void 0), e = _e(e), n = Pi({}, n, r, Cl);
  var i = Pi({}, n.imports, r.imports, Cl), s = Ke(i), o = Uo(i, s), a, l, f = 0, u = n.interpolate || hi, c = "__p += '", p = RegExp(
    (n.escape || hi).source + "|" + u.source + "|" + (u === $d ? iE : hi).source + "|" + (n.evaluate || hi).source + "|$",
    "g"
  ), m = Ll.call(n, "sourceURL") ? "//# sourceURL=" + (n.sourceURL + "").replace(/\s/g, " ") + `
` : "";
  e.replace(p, function(b, w, A, M, W, j) {
    return A || (A = M), c += e.slice(f, j).replace(sE, KR), w && (a = !0, c += `' +
__e(` + w + `) +
'`), W && (l = !0, c += `';
` + W + `;
__p += '`), A && (c += `' +
((__t = (` + A + `)) == null ? '' : __t) +
'`), f = j + b.length, b;
  }), c += `';
`;
  var h = Ll.call(n, "variable") && n.variable;
  if (!h)
    c = `with (obj) {
` + c + `
}
`;
  else if (rE.test(h))
    throw new Error(xR);
  c = (l ? c.replace(eE, "") : c).replace(nE, "$1").replace(tE, "$1;"), c = "function(" + (h || "obj") + `) {
` + (h ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (a ? ", __e = _.escape" : "") + (l ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + c + `return __p
}`;
  var g = Cu(function() {
    return Function(s, m + "return " + c).apply(void 0, o);
  });
  if (g.source = c, _o(g))
    throw g;
  return g;
}
var lE = "Expected a function";
function fE(e, n, t) {
  var r = !0, i = !0;
  if (typeof e != "function")
    throw new TypeError(lE);
  return je(t) && (r = "leading" in t ? !!t.leading : r, i = "trailing" in t ? !!t.trailing : i), kc(e, n, {
    leading: r,
    maxWait: n,
    trailing: i
  });
}
function ri(e, n) {
  return n(e);
}
var uE = 9007199254740991, Ts = 4294967295, cE = Math.min;
function dE(e, n) {
  if (e = oe(e), e < 1 || e > uE)
    return [];
  var t = Ts, r = cE(e, Ts);
  n = Vn(n), e -= Ts;
  for (var i = co(r, n); ++t < e; )
    n(t);
  return i;
}
function pE() {
  return this;
}
function Ad(e, n) {
  var t = e;
  return t instanceof ue && (t = t.value()), wo(n, function(r, i) {
    return i.func.apply(i.thisArg, $t([r], i.args));
  }, t);
}
function ks() {
  return Ad(this.__wrapped__, this.__actions__);
}
function hE(e) {
  return _e(e).toLowerCase();
}
function mE(e) {
  return re(e) ? Se(e, Xn) : wn(e) ? [e] : hn(Su(_e(e)));
}
var Ml = 9007199254740991;
function gE(e) {
  return e ? Yt(oe(e), -Ml, Ml) : e === 0 ? e : 0;
}
function _E(e) {
  return _e(e).toUpperCase();
}
function yE(e, n, t) {
  var r = re(e), i = r || vt(e) || Ar(e);
  if (n = te(n), t == null) {
    var s = e && e.constructor;
    i ? t = r ? new s() : [] : je(e) ? t = rt(s) ? vr(Ji(e)) : {} : t = {};
  }
  return (i ? Ln : Zn)(e, function(o, a, l) {
    return n(t, o, a, l);
  }), t;
}
function Od(e, n) {
  for (var t = e.length; t-- && br(n, e[t], 0) > -1; )
    ;
  return t;
}
function Rd(e, n) {
  for (var t = -1, r = e.length; ++t < r && br(n, e[t], 0) > -1; )
    ;
  return t;
}
function vE(e, n, t) {
  if (e = _e(e), e && (t || n === void 0))
    return du(e);
  if (!e || !(n = $n(n)))
    return e;
  var r = Un(e), i = Un(n), s = Rd(r, i), o = Od(r, i) + 1;
  return At(r, s, o).join("");
}
function bE(e, n, t) {
  if (e = _e(e), e && (t || n === void 0))
    return e.slice(0, cu(e) + 1);
  if (!e || !(n = $n(n)))
    return e;
  var r = Un(e), i = Od(r, Un(n)) + 1;
  return At(r, 0, i).join("");
}
var wE = /^\s+/;
function $E(e, n, t) {
  if (e = _e(e), e && (t || n === void 0))
    return e.replace(wE, "");
  if (!e || !(n = $n(n)))
    return e;
  var r = Un(e), i = Rd(r, Un(n));
  return At(r, i).join("");
}
var AE = 30, OE = "...", RE = /\w*$/;
function EE(e, n) {
  var t = AE, r = OE;
  if (je(n)) {
    var i = "separator" in n ? n.separator : i;
    t = "length" in n ? oe(n.length) : t, r = "omission" in n ? $n(n.omission) : r;
  }
  e = _e(e);
  var s = e.length;
  if (Or(e)) {
    var o = Un(e);
    s = o.length;
  }
  if (t >= s)
    return e;
  var a = t - Tr(r);
  if (a < 1)
    return r;
  var l = o ? At(o, 0, a).join("") : e.slice(0, a);
  if (i === void 0)
    return l + r;
  if (o && (a += l.length - a), Go(i)) {
    if (e.slice(a).search(i)) {
      var f, u = l;
      for (i.global || (i = RegExp(i.source, _e(RE.exec(i)) + "g")), i.lastIndex = 0; f = i.exec(u); )
        var c = f.index;
      l = l.slice(0, c === void 0 ? a : c);
    }
  } else if (e.indexOf($n(i), a) != a) {
    var p = l.lastIndexOf(i);
    p > -1 && (l = l.slice(0, p));
  }
  return l + r;
}
function TE(e) {
  return Au(e, 1);
}
var kE = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'"
}, PE = $o(kE);
const SE = PE;
var Ed = /&(?:amp|lt|gt|quot|#39);/g, jE = RegExp(Ed.source);
function IE(e) {
  return e = _e(e), e && jE.test(e) ? e.replace(Ed, SE) : e;
}
var CE = 1 / 0, LE = mr && 1 / Xi(new mr([, -0]))[1] == CE ? function(e) {
  return new mr(e);
} : ao;
const ME = LE;
var NE = 200;
function bt(e, n, t) {
  var r = -1, i = qi, s = e.length, o = !0, a = [], l = a;
  if (t)
    o = !1, i = Fo;
  else if (s >= NE) {
    var f = n ? null : ME(e);
    if (f)
      return Xi(f);
    o = !1, i = Gr, l = new qt();
  } else
    l = n ? [] : a;
  e:
    for (; ++r < s; ) {
      var u = e[r], c = n ? n(u) : u;
      if (u = t || u !== 0 ? u : 0, o && c === c) {
        for (var p = l.length; p--; )
          if (l[p] === c)
            continue e;
        n && l.push(c), a.push(u);
      } else
        i(l, c, t) || (l !== a && l.push(c), a.push(u));
    }
  return a;
}
var FE = le(function(e) {
  return bt(xe(e, 1, qe, !0));
});
const WE = FE;
var DE = le(function(e) {
  var n = Rn(e);
  return qe(n) && (n = void 0), bt(xe(e, 1, qe, !0), te(n));
});
const UE = DE;
var BE = le(function(e) {
  var n = Rn(e);
  return n = typeof n == "function" ? n : void 0, bt(xe(e, 1, qe, !0), void 0, n);
});
const qE = BE;
function GE(e) {
  return e && e.length ? bt(e) : [];
}
function zE(e, n) {
  return e && e.length ? bt(e, te(n)) : [];
}
function HE(e, n) {
  return n = typeof n == "function" ? n : void 0, e && e.length ? bt(e, void 0, n) : [];
}
var KE = 0;
function YE(e) {
  var n = ++KE;
  return _e(e) + n;
}
function JE(e, n) {
  return e == null ? !0 : Ko(e, n);
}
var XE = Math.max;
function ea(e) {
  if (!(e && e.length))
    return [];
  var n = 0;
  return e = Ot(e, function(t) {
    if (qe(t))
      return n = XE(t.length, n), !0;
  }), co(n, function(t) {
    return Se(e, Co(t));
  });
}
function Td(e, n) {
  if (!(e && e.length))
    return [];
  var t = ea(e);
  return n == null ? t : Se(t, function(r) {
    return An(n, void 0, r);
  });
}
function kd(e, n, t, r) {
  return ti(e, n, t(Kt(e, n)), r);
}
function ZE(e, n, t) {
  return e == null ? e : kd(e, n, Vn(t));
}
function VE(e, n, t, r) {
  return r = typeof r == "function" ? r : void 0, e == null ? e : kd(e, n, Vn(t), r);
}
var QE = Rr(function(e, n, t) {
  return e + (t ? " " : "") + n.toUpperCase();
});
const xE = QE;
function eT(e) {
  return e == null ? [] : Uo(e, gn(e));
}
var nT = le(function(e, n) {
  return qe(e) ? xr(e, n) : [];
});
const tT = nT;
function rT(e, n) {
  return hd(Vn(n), e);
}
var iT = ft(function(e) {
  var n = e.length, t = n ? e[0] : 0, r = this.__wrapped__, i = function(s) {
    return go(s, e);
  };
  return n > 1 || this.__actions__.length || !(r instanceof ue) || !it(t) ? this.thru(i) : (r = r.slice(t, +t + (n ? 1 : 0)), r.__actions__.push({
    func: ri,
    args: [i],
    thisArg: void 0
  }), new jn(r, this.__chain__).thru(function(s) {
    return n && !s.length && s.push(void 0), s;
  }));
});
const sT = iT;
function oT() {
  return sc(this);
}
function aT() {
  var e = this.__wrapped__;
  if (e instanceof ue) {
    var n = e;
    return this.__actions__.length && (n = new ue(this)), n = n.reverse(), n.__actions__.push({
      func: ri,
      args: [Xs],
      thisArg: void 0
    }), new jn(n, this.__chain__);
  }
  return this.thru(Xs);
}
function na(e, n, t) {
  var r = e.length;
  if (r < 2)
    return r ? bt(e[0]) : [];
  for (var i = -1, s = Array(r); ++i < r; )
    for (var o = e[i], a = -1; ++a < r; )
      a != i && (s[i] = xr(s[i] || o, e[a], n, t));
  return bt(xe(s, 1), n, t);
}
var lT = le(function(e) {
  return na(Ot(e, qe));
});
const fT = lT;
var uT = le(function(e) {
  var n = Rn(e);
  return qe(n) && (n = void 0), na(Ot(e, qe), te(n));
});
const cT = uT;
var dT = le(function(e) {
  var n = Rn(e);
  return n = typeof n == "function" ? n : void 0, na(Ot(e, qe), void 0, n);
});
const pT = dT;
var hT = le(ea);
const mT = hT;
function Pd(e, n, t) {
  for (var r = -1, i = e.length, s = n.length, o = {}; ++r < i; ) {
    var a = r < s ? n[r] : void 0;
    t(o, e[r], a);
  }
  return o;
}
function gT(e, n) {
  return Pd(e || [], n || [], Xr);
}
function _T(e, n) {
  return Pd(e || [], n || [], ti);
}
var yT = le(function(e) {
  var n = e.length, t = n > 1 ? e[n - 1] : void 0;
  return t = typeof t == "function" ? (e.pop(), t) : void 0, Td(e, t);
});
const vT = yT, B = {
  chunk: p0,
  compact: tv,
  concat: rv,
  difference: yb,
  differenceBy: bb,
  differenceWith: $b,
  drop: Rb,
  dropRight: Eb,
  dropRightWhile: Tb,
  dropWhile: kb,
  fill: Xb,
  findIndex: zc,
  findLastIndex: Kc,
  first: El,
  flatten: ju,
  flattenDeep: cw,
  flattenDepth: dw,
  fromPairs: Sw,
  head: El,
  indexOf: xw,
  initial: e2,
  intersection: r2,
  intersectionBy: s2,
  intersectionWith: a2,
  join: u$,
  last: Rn,
  lastIndexOf: y$,
  nth: x$,
  pull: aO,
  pullAll: md,
  pullAllBy: lO,
  pullAllWith: fO,
  pullAt: pO,
  remove: LO,
  reverse: Xs,
  slice: tR,
  sortedIndex: mR,
  sortedIndexBy: gR,
  sortedIndexOf: _R,
  sortedLastIndex: yR,
  sortedLastIndexBy: vR,
  sortedLastIndexOf: bR,
  sortedUniq: wR,
  sortedUniqBy: $R,
  tail: WR,
  take: DR,
  takeRight: UR,
  takeRightWhile: BR,
  takeWhile: qR,
  union: WE,
  unionBy: UE,
  unionWith: qE,
  uniq: GE,
  uniqBy: zE,
  uniqWith: HE,
  unzip: ea,
  unzipWith: Td,
  without: tT,
  xor: fT,
  xorBy: cT,
  xorWith: pT,
  zip: mT,
  zipObject: gT,
  zipObjectDeep: _T,
  zipWith: vT
}, $e = {
  countBy: Xv,
  each: $l,
  eachRight: Al,
  every: Kb,
  filter: Zb,
  find: xb,
  findLast: iw,
  flatMap: ow,
  flatMapDeep: lw,
  flatMapDepth: fw,
  forEach: $l,
  forEachRight: Al,
  groupBy: Nw,
  includes: Vw,
  invokeMap: b2,
  keyBy: h$,
  map: xi,
  orderBy: cA,
  partition: QA,
  reduce: SO,
  reduceRight: IO,
  reject: CO,
  sample: HO,
  sampleSize: JO,
  shuffle: QO,
  size: nR,
  some: oR,
  sortBy: lR
}, bT = {
  now: Oi
}, De = {
  after: _h,
  ary: Au,
  before: Lu,
  bind: Mu,
  bindKey: X1,
  curry: Mo,
  curryRight: No,
  debounce: kc,
  defer: pb,
  delay: mb,
  flip: hw,
  memoize: Yi,
  negate: ni,
  once: lA,
  overArgs: yA,
  partial: hd,
  partialRight: ZA,
  rearg: PO,
  rest: WO,
  spread: TR,
  throttle: fE,
  unary: TE,
  wrap: rT
}, Z = {
  castArray: o0,
  clone: Ky,
  cloneDeep: Xy,
  cloneDeepWith: Qy,
  cloneWith: ev,
  conformsTo: Bv,
  eq: Bn,
  gt: Ww,
  gte: Uw,
  isArguments: Ut,
  isArray: re,
  isArrayBuffer: O2,
  isArrayLike: mn,
  isArrayLikeObject: qe,
  isBoolean: E2,
  isBuffer: vt,
  isDate: S2,
  isElement: j2,
  isEmpty: N2,
  isEqual: F2,
  isEqualWith: W2,
  isError: _o,
  isFinite: U2,
  isFunction: rt,
  isInteger: Qc,
  isLength: zi,
  isMap: pc,
  isMatch: B2,
  isMatchWith: q2,
  isNaN: z2,
  isNative: J2,
  isNil: X2,
  isNull: Z2,
  isNumber: xc,
  isObject: je,
  isObjectLike: Ne,
  isPlainObject: Vr,
  isRegExp: Go,
  isSafeInteger: e$,
  isSet: hc,
  isString: ts,
  isSymbol: wn,
  isTypedArray: Ar,
  isUndefined: n$,
  isWeakMap: r$,
  isWeakSet: s$,
  lt: O$,
  lte: E$,
  toArray: td,
  toFinite: tt,
  toInteger: oe,
  toLength: Bc,
  toNumber: Pn,
  toPlainObject: Sc,
  toSafeInteger: gE,
  toString: _e
}, un = {
  add: lh,
  ceil: u0,
  divide: Ob,
  floor: gw,
  max: C$,
  maxBy: L$,
  mean: N$,
  meanBy: F$,
  min: z$,
  minBy: H$,
  multiply: Y$,
  round: GO,
  subtract: MR,
  sum: NR,
  sumBy: FR
}, ta = {
  clamp: h0,
  inRange: Jw,
  random: vO
}, ne = {
  assign: Dg,
  assignIn: xa,
  assignInWith: Pi,
  assignWith: Yg,
  at: j1,
  create: Zv,
  defaults: ob,
  defaultsDeep: ub,
  entries: Ol,
  entriesIn: Rl,
  extend: xa,
  extendWith: Pi,
  findKey: ew,
  findLastKey: sw,
  forIn: Ew,
  forInRight: Tw,
  forOwn: kw,
  forOwnRight: Pw,
  functions: jw,
  functionsIn: Iw,
  get: _r,
  has: zw,
  hasIn: Io,
  invert: d2,
  invertBy: g2,
  invoke: y2,
  keys: Ke,
  keysIn: gn,
  mapKeys: T$,
  mapValues: k$,
  merge: D$,
  mergeWith: Ic,
  omit: oA,
  omitBy: aA,
  pick: nO,
  pickBy: sd,
  result: DO,
  set: Qo,
  setWith: XO,
  toPairs: Ol,
  toPairsIn: Rl,
  transform: yE,
  unset: JE,
  update: ZE,
  updateWith: VE,
  values: Er,
  valuesIn: eT
}, Qn = {
  at: sT,
  chain: sc,
  commit: nv,
  lodash: d,
  next: Q$,
  plant: tO,
  reverse: aT,
  tap: GR,
  thru: ri,
  toIterator: pE,
  toJSON: ks,
  value: ks,
  valueOf: ks,
  wrapperChain: oT
}, me = {
  camelCase: s0,
  capitalize: Gu,
  deburr: zu,
  endsWith: Ib,
  escape: Wc,
  escapeRegExp: zb,
  kebabCase: d$,
  lowerCase: b$,
  lowerFirst: $$,
  pad: qA,
  padEnd: GA,
  padStart: zA,
  parseInt: YA,
  repeat: MO,
  replace: NO,
  snakeCase: iR,
  split: OR,
  startCase: PR,
  startsWith: SR,
  template: aE,
  templateSettings: Zs,
  toLower: hE,
  toUpper: _E,
  trim: vE,
  trimEnd: bE,
  trimStart: $E,
  truncate: EE,
  unescape: IE,
  upperCase: xE,
  upperFirst: bo,
  words: ic
}, ye = {
  attempt: Cu,
  bindAll: H1,
  cond: Fv,
  conforms: Uv,
  constant: fo,
  defaultTo: rb,
  flow: Aw,
  flowRight: Rw,
  identity: fn,
  iteratee: a$,
  matches: S$,
  matchesProperty: I$,
  method: B$,
  methodOf: G$,
  mixin: nd,
  noop: ao,
  nthArg: eA,
  over: pA,
  overEvery: bA,
  overSome: $A,
  property: Oc,
  propertyOf: rO,
  range: OO,
  rangeRight: EO,
  stubArray: Oo,
  stubFalse: po,
  stubObject: jR,
  stubString: IR,
  stubTrue: CR,
  times: dE,
  toPath: mE,
  uniqueId: YE
};
function wT() {
  var e = new ue(this.__wrapped__);
  return e.__actions__ = hn(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = hn(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = hn(this.__views__), e;
}
function $T() {
  if (this.__filtered__) {
    var e = new ue(this);
    e.__dir__ = -1, e.__filtered__ = !0;
  } else
    e = this.clone(), e.__dir__ *= -1;
  return e;
}
var AT = Math.max, OT = Math.min;
function RT(e, n, t) {
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
        n = OT(n, e + o);
        break;
      case "takeRight":
        e = AT(e, n - o);
        break;
    }
  }
  return { start: e, end: n };
}
var ET = 1, TT = 2, kT = Math.min;
function PT() {
  var e = this.__wrapped__.value(), n = this.__dir__, t = re(e), r = n < 0, i = t ? e.length : 0, s = RT(0, i, this.__views__), o = s.start, a = s.end, l = a - o, f = r ? a : o - 1, u = this.__iteratees__, c = u.length, p = 0, m = kT(l, this.__takeCount__);
  if (!t || !r && i == l && m == l)
    return Ad(e, this.__actions__);
  var h = [];
  e:
    for (; l-- && p < m; ) {
      f += n;
      for (var g = -1, b = e[f]; ++g < c; ) {
        var w = u[g], A = w.iteratee, M = w.type, W = A(b);
        if (M == TT)
          b = W;
        else if (!W) {
          if (M == ET)
            continue e;
          break e;
        }
      }
      h[p++] = b;
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
var ST = "4.17.21", jT = 2, IT = 1, CT = 3, Sd = 4294967295, LT = Array.prototype, MT = Object.prototype, jd = MT.hasOwnProperty, Nl = nn ? nn.iterator : void 0, NT = Math.max, Fl = Math.min, ra = function(e) {
  return function(n, t, r) {
    if (r == null) {
      var i = je(t), s = i && Ke(t), o = s && s.length && es(t, s);
      (o ? o.length : i) || (r = t, t = n, n = this);
    }
    return e(n, t, r);
  };
}(nd);
d.after = De.after;
d.ary = De.ary;
d.assign = ne.assign;
d.assignIn = ne.assignIn;
d.assignInWith = ne.assignInWith;
d.assignWith = ne.assignWith;
d.at = ne.at;
d.before = De.before;
d.bind = De.bind;
d.bindAll = ye.bindAll;
d.bindKey = De.bindKey;
d.castArray = Z.castArray;
d.chain = Qn.chain;
d.chunk = B.chunk;
d.compact = B.compact;
d.concat = B.concat;
d.cond = ye.cond;
d.conforms = ye.conforms;
d.constant = ye.constant;
d.countBy = $e.countBy;
d.create = ne.create;
d.curry = De.curry;
d.curryRight = De.curryRight;
d.debounce = De.debounce;
d.defaults = ne.defaults;
d.defaultsDeep = ne.defaultsDeep;
d.defer = De.defer;
d.delay = De.delay;
d.difference = B.difference;
d.differenceBy = B.differenceBy;
d.differenceWith = B.differenceWith;
d.drop = B.drop;
d.dropRight = B.dropRight;
d.dropRightWhile = B.dropRightWhile;
d.dropWhile = B.dropWhile;
d.fill = B.fill;
d.filter = $e.filter;
d.flatMap = $e.flatMap;
d.flatMapDeep = $e.flatMapDeep;
d.flatMapDepth = $e.flatMapDepth;
d.flatten = B.flatten;
d.flattenDeep = B.flattenDeep;
d.flattenDepth = B.flattenDepth;
d.flip = De.flip;
d.flow = ye.flow;
d.flowRight = ye.flowRight;
d.fromPairs = B.fromPairs;
d.functions = ne.functions;
d.functionsIn = ne.functionsIn;
d.groupBy = $e.groupBy;
d.initial = B.initial;
d.intersection = B.intersection;
d.intersectionBy = B.intersectionBy;
d.intersectionWith = B.intersectionWith;
d.invert = ne.invert;
d.invertBy = ne.invertBy;
d.invokeMap = $e.invokeMap;
d.iteratee = ye.iteratee;
d.keyBy = $e.keyBy;
d.keys = Ke;
d.keysIn = ne.keysIn;
d.map = $e.map;
d.mapKeys = ne.mapKeys;
d.mapValues = ne.mapValues;
d.matches = ye.matches;
d.matchesProperty = ye.matchesProperty;
d.memoize = De.memoize;
d.merge = ne.merge;
d.mergeWith = ne.mergeWith;
d.method = ye.method;
d.methodOf = ye.methodOf;
d.mixin = ra;
d.negate = ni;
d.nthArg = ye.nthArg;
d.omit = ne.omit;
d.omitBy = ne.omitBy;
d.once = De.once;
d.orderBy = $e.orderBy;
d.over = ye.over;
d.overArgs = De.overArgs;
d.overEvery = ye.overEvery;
d.overSome = ye.overSome;
d.partial = De.partial;
d.partialRight = De.partialRight;
d.partition = $e.partition;
d.pick = ne.pick;
d.pickBy = ne.pickBy;
d.property = ye.property;
d.propertyOf = ye.propertyOf;
d.pull = B.pull;
d.pullAll = B.pullAll;
d.pullAllBy = B.pullAllBy;
d.pullAllWith = B.pullAllWith;
d.pullAt = B.pullAt;
d.range = ye.range;
d.rangeRight = ye.rangeRight;
d.rearg = De.rearg;
d.reject = $e.reject;
d.remove = B.remove;
d.rest = De.rest;
d.reverse = B.reverse;
d.sampleSize = $e.sampleSize;
d.set = ne.set;
d.setWith = ne.setWith;
d.shuffle = $e.shuffle;
d.slice = B.slice;
d.sortBy = $e.sortBy;
d.sortedUniq = B.sortedUniq;
d.sortedUniqBy = B.sortedUniqBy;
d.split = me.split;
d.spread = De.spread;
d.tail = B.tail;
d.take = B.take;
d.takeRight = B.takeRight;
d.takeRightWhile = B.takeRightWhile;
d.takeWhile = B.takeWhile;
d.tap = Qn.tap;
d.throttle = De.throttle;
d.thru = ri;
d.toArray = Z.toArray;
d.toPairs = ne.toPairs;
d.toPairsIn = ne.toPairsIn;
d.toPath = ye.toPath;
d.toPlainObject = Z.toPlainObject;
d.transform = ne.transform;
d.unary = De.unary;
d.union = B.union;
d.unionBy = B.unionBy;
d.unionWith = B.unionWith;
d.uniq = B.uniq;
d.uniqBy = B.uniqBy;
d.uniqWith = B.uniqWith;
d.unset = ne.unset;
d.unzip = B.unzip;
d.unzipWith = B.unzipWith;
d.update = ne.update;
d.updateWith = ne.updateWith;
d.values = ne.values;
d.valuesIn = ne.valuesIn;
d.without = B.without;
d.words = me.words;
d.wrap = De.wrap;
d.xor = B.xor;
d.xorBy = B.xorBy;
d.xorWith = B.xorWith;
d.zip = B.zip;
d.zipObject = B.zipObject;
d.zipObjectDeep = B.zipObjectDeep;
d.zipWith = B.zipWith;
d.entries = ne.toPairs;
d.entriesIn = ne.toPairsIn;
d.extend = ne.assignIn;
d.extendWith = ne.assignInWith;
ra(d, d);
d.add = un.add;
d.attempt = ye.attempt;
d.camelCase = me.camelCase;
d.capitalize = me.capitalize;
d.ceil = un.ceil;
d.clamp = ta.clamp;
d.clone = Z.clone;
d.cloneDeep = Z.cloneDeep;
d.cloneDeepWith = Z.cloneDeepWith;
d.cloneWith = Z.cloneWith;
d.conformsTo = Z.conformsTo;
d.deburr = me.deburr;
d.defaultTo = ye.defaultTo;
d.divide = un.divide;
d.endsWith = me.endsWith;
d.eq = Z.eq;
d.escape = me.escape;
d.escapeRegExp = me.escapeRegExp;
d.every = $e.every;
d.find = $e.find;
d.findIndex = B.findIndex;
d.findKey = ne.findKey;
d.findLast = $e.findLast;
d.findLastIndex = B.findLastIndex;
d.findLastKey = ne.findLastKey;
d.floor = un.floor;
d.forEach = $e.forEach;
d.forEachRight = $e.forEachRight;
d.forIn = ne.forIn;
d.forInRight = ne.forInRight;
d.forOwn = ne.forOwn;
d.forOwnRight = ne.forOwnRight;
d.get = ne.get;
d.gt = Z.gt;
d.gte = Z.gte;
d.has = ne.has;
d.hasIn = ne.hasIn;
d.head = B.head;
d.identity = fn;
d.includes = $e.includes;
d.indexOf = B.indexOf;
d.inRange = ta.inRange;
d.invoke = ne.invoke;
d.isArguments = Z.isArguments;
d.isArray = re;
d.isArrayBuffer = Z.isArrayBuffer;
d.isArrayLike = Z.isArrayLike;
d.isArrayLikeObject = Z.isArrayLikeObject;
d.isBoolean = Z.isBoolean;
d.isBuffer = Z.isBuffer;
d.isDate = Z.isDate;
d.isElement = Z.isElement;
d.isEmpty = Z.isEmpty;
d.isEqual = Z.isEqual;
d.isEqualWith = Z.isEqualWith;
d.isError = Z.isError;
d.isFinite = Z.isFinite;
d.isFunction = Z.isFunction;
d.isInteger = Z.isInteger;
d.isLength = Z.isLength;
d.isMap = Z.isMap;
d.isMatch = Z.isMatch;
d.isMatchWith = Z.isMatchWith;
d.isNaN = Z.isNaN;
d.isNative = Z.isNative;
d.isNil = Z.isNil;
d.isNull = Z.isNull;
d.isNumber = Z.isNumber;
d.isObject = je;
d.isObjectLike = Z.isObjectLike;
d.isPlainObject = Z.isPlainObject;
d.isRegExp = Z.isRegExp;
d.isSafeInteger = Z.isSafeInteger;
d.isSet = Z.isSet;
d.isString = Z.isString;
d.isSymbol = Z.isSymbol;
d.isTypedArray = Z.isTypedArray;
d.isUndefined = Z.isUndefined;
d.isWeakMap = Z.isWeakMap;
d.isWeakSet = Z.isWeakSet;
d.join = B.join;
d.kebabCase = me.kebabCase;
d.last = Rn;
d.lastIndexOf = B.lastIndexOf;
d.lowerCase = me.lowerCase;
d.lowerFirst = me.lowerFirst;
d.lt = Z.lt;
d.lte = Z.lte;
d.max = un.max;
d.maxBy = un.maxBy;
d.mean = un.mean;
d.meanBy = un.meanBy;
d.min = un.min;
d.minBy = un.minBy;
d.stubArray = ye.stubArray;
d.stubFalse = ye.stubFalse;
d.stubObject = ye.stubObject;
d.stubString = ye.stubString;
d.stubTrue = ye.stubTrue;
d.multiply = un.multiply;
d.nth = B.nth;
d.noop = ye.noop;
d.now = bT.now;
d.pad = me.pad;
d.padEnd = me.padEnd;
d.padStart = me.padStart;
d.parseInt = me.parseInt;
d.random = ta.random;
d.reduce = $e.reduce;
d.reduceRight = $e.reduceRight;
d.repeat = me.repeat;
d.replace = me.replace;
d.result = ne.result;
d.round = un.round;
d.sample = $e.sample;
d.size = $e.size;
d.snakeCase = me.snakeCase;
d.some = $e.some;
d.sortedIndex = B.sortedIndex;
d.sortedIndexBy = B.sortedIndexBy;
d.sortedIndexOf = B.sortedIndexOf;
d.sortedLastIndex = B.sortedLastIndex;
d.sortedLastIndexBy = B.sortedLastIndexBy;
d.sortedLastIndexOf = B.sortedLastIndexOf;
d.startCase = me.startCase;
d.startsWith = me.startsWith;
d.subtract = un.subtract;
d.sum = un.sum;
d.sumBy = un.sumBy;
d.template = me.template;
d.times = ye.times;
d.toFinite = Z.toFinite;
d.toInteger = oe;
d.toLength = Z.toLength;
d.toLower = me.toLower;
d.toNumber = Z.toNumber;
d.toSafeInteger = Z.toSafeInteger;
d.toString = Z.toString;
d.toUpper = me.toUpper;
d.trim = me.trim;
d.trimEnd = me.trimEnd;
d.trimStart = me.trimStart;
d.truncate = me.truncate;
d.unescape = me.unescape;
d.uniqueId = ye.uniqueId;
d.upperCase = me.upperCase;
d.upperFirst = me.upperFirst;
d.each = $e.forEach;
d.eachRight = $e.forEachRight;
d.first = B.head;
ra(d, function() {
  var e = {};
  return Zn(d, function(n, t) {
    jd.call(d.prototype, t) || (e[t] = n);
  }), e;
}(), { chain: !1 });
d.VERSION = ST;
(d.templateSettings = me.templateSettings).imports._ = d;
Ln(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
  d[e].placeholder = d;
});
Ln(["drop", "take"], function(e, n) {
  ue.prototype[e] = function(t) {
    t = t === void 0 ? 1 : NT(oe(t), 0);
    var r = this.__filtered__ && !n ? new ue(this) : this.clone();
    return r.__filtered__ ? r.__takeCount__ = Fl(t, r.__takeCount__) : r.__views__.push({
      size: Fl(t, Sd),
      type: e + (r.__dir__ < 0 ? "Right" : "")
    }), r;
  }, ue.prototype[e + "Right"] = function(t) {
    return this.reverse()[e](t).reverse();
  };
});
Ln(["filter", "map", "takeWhile"], function(e, n) {
  var t = n + 1, r = t == IT || t == CT;
  ue.prototype[e] = function(i) {
    var s = this.clone();
    return s.__iteratees__.push({
      iteratee: te(i),
      type: t
    }), s.__filtered__ = s.__filtered__ || r, s;
  };
});
Ln(["head", "last"], function(e, n) {
  var t = "take" + (n ? "Right" : "");
  ue.prototype[e] = function() {
    return this[t](1).value()[0];
  };
});
Ln(["initial", "tail"], function(e, n) {
  var t = "drop" + (n ? "" : "Right");
  ue.prototype[e] = function() {
    return this.__filtered__ ? new ue(this) : this[t](1);
  };
});
ue.prototype.compact = function() {
  return this.filter(fn);
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
  return this.take(Sd);
};
Zn(ue.prototype, function(e, n) {
  var t = /^(?:filter|find|map|reject)|While$/.test(n), r = /^(?:head|last)$/.test(n), i = d[r ? "take" + (n == "last" ? "Right" : "") : n], s = r || /^find/.test(n);
  i && (d.prototype[n] = function() {
    var o = this.__wrapped__, a = r ? [1] : arguments, l = o instanceof ue, f = a[0], u = l || re(o), c = function(w) {
      var A = i.apply(d, $t([w], a));
      return r && p ? A[0] : A;
    };
    u && t && typeof f == "function" && f.length != 1 && (l = u = !1);
    var p = this.__chain__, m = !!this.__actions__.length, h = s && !p, g = l && !m;
    if (!s && u) {
      o = g ? o : new ue(this);
      var b = e.apply(o, a);
      return b.__actions__.push({ func: ri, args: [c], thisArg: void 0 }), new jn(b, p);
    }
    return h && g ? e.apply(this, a) : (b = this.thru(c), h ? r ? b.value()[0] : b.value() : b);
  });
});
Ln(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
  var n = LT[e], t = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(e);
  d.prototype[e] = function() {
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
  var t = d[n];
  if (t) {
    var r = t.name + "";
    jd.call(hr, r) || (hr[r] = []), hr[r].push({ name: n, func: t });
  }
});
hr[Gi(void 0, jT).name] = [{
  name: "wrapper",
  func: void 0
}];
ue.prototype.clone = wT;
ue.prototype.reverse = $T;
ue.prototype.value = PT;
d.prototype.at = Qn.at;
d.prototype.chain = Qn.wrapperChain;
d.prototype.commit = Qn.commit;
d.prototype.next = Qn.next;
d.prototype.plant = Qn.plant;
d.prototype.reverse = Qn.reverse;
d.prototype.toJSON = d.prototype.valueOf = d.prototype.value = Qn.value;
d.prototype.first = d.prototype.head;
Nl && (d.prototype[Nl] = Qn.toIterator);
const FT = (e, n, t) => {
  const r = e.indexOf(n, t);
  return r < 0 ? e.substring(t || 0) : e.substring(t || 0, r);
}, Id = (e, n, t) => {
  const r = e.indexOf(n, t);
  return r < 0 ? "" : e.substring(r + n.length);
}, zr = (e, n, t) => {
  const r = e.lastIndexOf(n, t);
  return r < 0 ? "" : e.substring(r + n.length, t || e.length);
};
function WT(e) {
  e = e.trim();
  const n = [];
  let t = 0;
  for (let r = 1; r < e.length; r++)
    "A" <= e[r] && e[r] <= "Z" && (n.push(e.substring(t, r).toLowerCase()), t = r);
  return n.push(e.substring(t, e.length).toLowerCase()), n.join(" ");
}
function DT(e) {
  return WT(e).replace(/[a-z]/i, (n) => n.toUpperCase());
}
function UT(e) {
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
let BT = 0;
const qT = () => BT++, GT = (e, n) => {
  if (!e || !n)
    return e;
  const t = e.split("${"), r = [];
  r.push(t.shift());
  for (let i of t)
    if (i.includes("}")) {
      const s = FT(i, "}"), o = (s === "" ? n : _r(n, s)) || "";
      r.push(`${o}${Id(i, "}")}`);
    }
  return r.join("");
};
function zT(e) {
  let n = 0, t = e.length;
  return e[n] === "/" && n++, e[t - 1] === "/" && t--, t <= n ? "" : e.substring(n, t);
}
function HT(...e) {
  const n = e.filter((s) => !!s);
  if (n.length === 0)
    return "";
  const t = n[0].startsWith("/"), r = n[n.length - 1].endsWith("/");
  let i = n.map((s) => zT(s)).filter((s) => !!s).join("/");
  return t && (i = "/" + i), r && i !== "/" && (i += "/"), i;
}
function En(e) {
  return (e || "").replace(`
`, "<br/>");
}
function Cd(e) {
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
function Ld(e) {
  switch (e.type || "") {
    case "object":
      return {};
    case "array":
      return [];
    default:
      return null;
  }
}
function Gt(e, n) {
  var t;
  return e.title || DT(((t = n.slice(-1)) == null ? void 0 : t[0]) || "");
}
function Ps(e) {
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
function KT(e) {
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
  return o && (n = Me(o, a(e)), Ve.push(() => Nn(n, "schema", s))), {
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
      l[0], nt(() => t = !1)), f & /*component*/
      8 && o !== (o = /*component*/
      l[3])) {
        if (n) {
          Fe();
          const c = n;
          Q(c.$$.fragment, 1, 0, () => {
            we(c, 1);
          }), We();
        }
        o ? (n = Me(o, a(l)), Ve.push(() => Nn(n, "schema", s)), Oe(n.$$.fragment), J(n.$$.fragment, 1), be(n, r.parentNode, r)) : n = null;
      } else
        o && n.$set(u);
    },
    i(l) {
      i || (n && J(n.$$.fragment, l), i = !0);
    },
    o(l) {
      n && Q(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && T(r), n && we(n, l);
    }
  };
}
function YT(e, n, t) {
  let { params: r } = n, { schema: i } = n, { value: s } = n, { components: o } = r, a;
  function l(f) {
    i = f, t(0, i);
  }
  return e.$$set = (f) => {
    "params" in f && t(1, r = f.params), "schema" in f && t(0, i = f.schema), "value" in f && t(2, s = f.value);
  }, e.$$.update = () => {
    e.$$.dirty & /*schema*/
    1 && t(3, a = o[Cd(i)]);
  }, [i, r, s, a, l];
}
class yr extends Je {
  constructor(n) {
    super(), Ye(this, n, YT, KT, He, { params: 1, schema: 0, value: 2 });
  }
}
function JT(e) {
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
      k(l, n, f), o || (a = K(
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
function XT(e) {
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
        $$slots: { default: [JT] },
        $$scope: { ctx: o }
      }
    };
  }
  return i && (n = Me(i, s(e))), {
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
          Q(f.$$.fragment, 1, 0, () => {
            we(f, 1);
          }), We();
        }
        i ? (n = Me(i, s(o)), Oe(n.$$.fragment), J(n.$$.fragment, 1), be(n, t.parentNode, t)) : n = null;
      } else
        i && n.$set(l);
    },
    i(o) {
      r || (n && J(n.$$.fragment, o), r = !0);
    },
    o(o) {
      n && Q(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && T(t), n && we(n, o);
    }
  };
}
function ZT(e, n, t) {
  let { params: r } = n, { schema: i } = n, { value: s } = n, o = "text";
  const a = (l) => r.pathChanged(r.path, l.currentTarget.value || void 0);
  return e.$$set = (l) => {
    "params" in l && t(0, r = l.params), "schema" in l && t(1, i = l.schema), "value" in l && t(2, s = l.value);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*schema*/
    2) {
      const l = Cd(i);
      t(3, o = l === "password" ? "password" : l === "email" ? "email" : l === "time" ? "time" : l === "date-time" ? "datetime-local" : l === "date" ? "date" : "text");
    }
  }, [r, i, s, o, a];
}
let or = class extends Je {
  constructor(n) {
    super(), Ye(this, n, ZT, XT, He, { params: 0, schema: 1, value: 2 });
  }
};
function Wl(e) {
  let n, t, r = En(
    /*title*/
    e[3]
  ) + "", i, s = (
    /*schema*/
    e[1].description && Dl(e)
  );
  return {
    c() {
      n = N("label"), t = new Fp(!1), i = x(), s && s.c(), t.a = i, y(n, "id", `label-${/*id*/
      e[4]}`), y(
        n,
        "for",
        /*id*/
        e[4]
      ), Pe(
        n,
        "required",
        /*params*/
        e[0].required
      ), Pe(
        n,
        "readonly",
        /*schema*/
        e[1].readOnly || /*params*/
        e[0].containerReadOnly
      );
    },
    m(o, a) {
      k(o, n, a), t.m(r, n), G(n, i), s && s.m(n, null);
    },
    p(o, a) {
      /*schema*/
      o[1].description ? s ? s.p(o, a) : (s = Dl(o), s.c(), s.m(n, null)) : s && (s.d(1), s = null), a & /*params*/
      1 && Pe(
        n,
        "required",
        /*params*/
        o[0].required
      ), a & /*schema, params*/
      3 && Pe(
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
function Dl(e) {
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
function Ul(e) {
  let n, t;
  return {
    c() {
      n = N("div"), t = an(
        /*error*/
        e[2]
      ), y(n, "class", "error");
    },
    m(r, i) {
      k(r, n, i), G(n, t);
    },
    p(r, i) {
      i & /*error*/
      4 && Tn(
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
function VT(e) {
  let n, t, r, i, s = (
    /*params*/
    e[0].containerParent !== "array" && Wl(e)
  );
  const o = (
    /*#slots*/
    e[6].default
  ), a = kp(
    o,
    e,
    /*$$scope*/
    e[5],
    null
  );
  let l = (
    /*error*/
    e[2] && /*params*/
    e[0].showErrors && Ul(e)
  );
  return {
    c() {
      s && s.c(), n = x(), a && a.c(), t = x(), l && l.c(), r = Ce();
    },
    m(f, u) {
      s && s.m(f, u), k(f, n, u), a && a.m(f, u), k(f, t, u), l && l.m(f, u), k(f, r, u), i = !0;
    },
    p(f, [u]) {
      /*params*/
      f[0].containerParent !== "array" ? s ? s.p(f, u) : (s = Wl(f), s.c(), s.m(n.parentNode, n)) : s && (s.d(1), s = null), a && a.p && (!i || u & /*$$scope*/
      32) && Sp(
        a,
        o,
        f,
        /*$$scope*/
        f[5],
        i ? Pp(
          o,
          /*$$scope*/
          f[5],
          u,
          null
        ) : jp(
          /*$$scope*/
          f[5]
        ),
        null
      ), /*error*/
      f[2] && /*params*/
      f[0].showErrors ? l ? l.p(f, u) : (l = Ul(f), l.c(), l.m(r.parentNode, r)) : l && (l.d(1), l = null);
    },
    i(f) {
      i || (J(a, f), i = !0);
    },
    o(f) {
      Q(a, f), i = !1;
    },
    d(f) {
      s && s.d(f), f && T(n), a && a.d(f), f && T(t), l && l.d(f), f && T(r);
    }
  };
}
function QT(e, n, t) {
  let r, { $$slots: i = {}, $$scope: s } = n, { params: o } = n, { schema: a } = n;
  const l = Gt(a, o.path), f = o.path.join(".");
  return e.$$set = (u) => {
    "params" in u && t(0, o = u.params), "schema" in u && t(1, a = u.schema), "$$scope" in u && t(5, s = u.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*params*/
    1 && t(2, r = o.validationErrors[o.path.join(".")]);
  }, [o, a, r, l, f, s, i];
}
class xT extends Je {
  constructor(n) {
    super(), Ye(this, n, QT, VT, He, { params: 0, schema: 1 });
  }
}
function Bl(e, n, t) {
  const r = e.slice();
  return r[10] = n[t], r[11] = n, r[12] = t, r;
}
function ql(e) {
  let n, t, r = (
    /*params*/
    e[1].collapsible && Gl(e)
  ), i = (
    /*params*/
    (e[1].containerParent !== "array" || /*schema*/
    e[0].title) && zl(e)
  );
  return {
    c() {
      n = N("legend"), r && r.c(), t = x(), i && i.c(), y(n, "class", "subset-label object-label");
    },
    m(s, o) {
      k(s, n, o), r && r.m(n, null), G(n, t), i && i.m(n, null);
    },
    p(s, o) {
      /*params*/
      s[1].collapsible ? r ? r.p(s, o) : (r = Gl(s), r.c(), r.m(n, t)) : r && (r.d(1), r = null), /*params*/
      s[1].containerParent !== "array" || /*schema*/
      s[0].title ? i ? i.p(s, o) : (i = zl(s), i.c(), i.m(n, null)) : i && (i.d(1), i = null);
    },
    d(s) {
      s && T(n), r && r.d(), i && i.d();
    }
  };
}
function Gl(e) {
  let n, t, r, i;
  return {
    c() {
      n = N("span"), y(n, "class", t = "collapser " + /*collapserOpenState*/
      e[3]);
    },
    m(s, o) {
      k(s, n, o), r || (i = K(
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
function zl(e) {
  let n, t = En(Gt(
    /*schema*/
    e[0],
    /*params*/
    e[1].path
  )) + "", r, i, s = (
    /*schema*/
    e[0].description && Hl(e)
  );
  return {
    c() {
      n = N("span"), r = x(), s && s.c(), i = Ce(), y(n, "class", "subset-label-title object-label-title");
    },
    m(o, a) {
      k(o, n, a), n.innerHTML = t, k(o, r, a), s && s.m(o, a), k(o, i, a);
    },
    p(o, a) {
      a & /*schema, params*/
      3 && t !== (t = En(Gt(
        /*schema*/
        o[0],
        /*params*/
        o[1].path
      )) + "") && (n.innerHTML = t), /*schema*/
      o[0].description ? s ? s.p(o, a) : (s = Hl(o), s.c(), s.m(i.parentNode, i)) : s && (s.d(1), s = null);
    },
    d(o) {
      o && T(n), o && T(r), s && s.d(o), o && T(i);
    }
  };
}
function Hl(e) {
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
function Kl(e) {
  let n = [], t = /* @__PURE__ */ new Map(), r, i, s = (
    /*propNames*/
    e[5]
  );
  const o = (a) => (
    /*propName*/
    a[10]
  );
  for (let a = 0; a < s.length; a += 1) {
    let l = Bl(e, s, a), f = o(l);
    t.set(f, n[a] = Yl(f, l));
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
      a[5], Fe(), n = Jr(n, l, o, 1, a, s, t, r.parentNode, lu, Yl, r, Bl), We());
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
        Q(n[l]);
      i = !1;
    },
    d(a) {
      for (let l = 0; l < n.length; l += 1)
        n[l].d(a);
      a && T(r);
    }
  };
}
function Yl(e, n) {
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
    ]), r = new yr({ props: a }), Ve.push(() => Nn(r, "schema", o)), {
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
        const p = {};
        c & /*params, propNames, schema*/
        35 && (p.params = {
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
        36 && (p.value = /*value*/
        (h = n[2]) == null ? void 0 : h[
          /*propName*/
          n[10]
        ]), !i && c & /*schema, propNames*/
        33 && (i = !0, p.schema = /*schema*/
        n[0].properties[
          /*propName*/
          n[10]
        ], nt(() => i = !1)), r.$set(p);
      },
      i(u) {
        s || (J(r.$$.fragment, u), s = !0);
      },
      o(u) {
        Q(r.$$.fragment, u), s = !1;
      },
      d(u) {
        u && T(t), we(r, u);
      }
    }
  );
}
function ek(e) {
  let n, t, r, i, s, o = (
    /*showLegend*/
    e[4] && ql(e)
  ), a = (
    /*collapserOpenState*/
    e[3] === "open" && Kl(e)
  );
  return {
    c() {
      n = N("fieldset"), o && o.c(), t = x(), a && a.c(), y(n, "name", r = /*params*/
      e[1].path.join(".")), y(n, "class", i = "subset object depth-" + /*params*/
      e[1].path.length);
    },
    m(l, f) {
      k(l, n, f), o && o.m(n, null), G(n, t), a && a.m(n, null), s = !0;
    },
    p(l, [f]) {
      /*showLegend*/
      l[4] ? o ? o.p(l, f) : (o = ql(l), o.c(), o.m(n, t)) : o && (o.d(1), o = null), /*collapserOpenState*/
      l[3] === "open" ? a ? (a.p(l, f), f & /*collapserOpenState*/
      8 && J(a, 1)) : (a = Kl(l), a.c(), J(a, 1), a.m(n, null)) : a && (Fe(), Q(a, 1, 1, () => {
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
      Q(a), s = !1;
    },
    d(l) {
      l && T(n), o && o.d(), a && a.d();
    }
  };
}
function nk(e, n, t) {
  let r, i, s, { params: o } = n, { schema: a } = n, { value: l } = n, f = o.path.length === 0 || o.containerParent === "array" || !o.collapsible ? "open" : "closed";
  const u = () => {
    t(3, f = f === "open" ? "closed" : "open");
  };
  function c(p, m) {
    e.$$.not_equal(a.properties[m], p) && (a.properties[m] = p, t(0, a));
  }
  return e.$$set = (p) => {
    "params" in p && t(1, o = p.params), "schema" in p && t(0, a = p.schema), "value" in p && t(2, l = p.value);
  }, e.$$.update = () => {
    e.$$.dirty & /*schema*/
    1 && t(5, r = Object.keys(a.properties)), e.$$.dirty & /*schema, params*/
    3 && t(7, i = Gt(a, o.path)), e.$$.dirty & /*params, legendText*/
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
class tk extends Je {
  constructor(n) {
    super(), Ye(this, n, nk, ek, He, { params: 1, schema: 0, value: 2 });
  }
}
class Hr extends String {
}
const rk = /* @__PURE__ */ new Set(["<", ">", "<=", ">="]), ik = (e) => `\\u${e.toString(16).padStart(4, "0")}`, sk = (e) => {
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
  }).replace(/[\u2028\u2029]/g, (t) => ik(t.charCodeAt(0)));
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
        if (rk.has(i))
          return i;
        throw new Error("Expected a compare op");
      case "%j":
        return sk(i);
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
}, Md = (e) => (...n) => {
  if (!n.every((t) => t instanceof Hr))
    throw new Error("Unsafe arguments");
  return new Hr(e(...n));
}, ok = (e) => (
  // simple expression and single brackets can not break priority
  /^[a-z][a-z0-9_().]*$/i.test(e) || /^\([^()]+\)$/i.test(e) ? e : os("(%s)", e)
), ak = Md(
  (...e) => e.some((n) => `${n}` == "true") ? "true" : e.join(" || ") || "false"
), lk = Md(
  (...e) => e.some((n) => `${n}` == "false") ? "false" : e.join(" && ") || "true"
), Nd = (e) => `${e}` == "true" ? Qs("false") : `${e}` == "false" ? Qs("true") : os("!%s", ok(e)), fk = (...e) => Nd(ak(...e));
var as = { format: os, safe: Qs, safeand: lk, safenot: Nd, safenotor: fk };
const { safe: Jl } = as, Ss = /* @__PURE__ */ new WeakMap(), uk = (e) => {
  Ss.has(e) || Ss.set(e, { sym: /* @__PURE__ */ new Map(), ref: /* @__PURE__ */ new Map(), format: /* @__PURE__ */ new Map(), pattern: /* @__PURE__ */ new Map() });
  const n = Ss.get(e), t = (l) => {
    n.sym.get(l) || n.sym.set(l, 0);
    const f = n.sym.get(l);
    return n.sym.set(l, f + 1), Jl(`${l}${f}`);
  }, r = (l) => {
    if (n.pattern.has(l))
      return n.pattern.get(l);
    const f = t("pattern");
    return e[f] = new RegExp(l, "u"), n.pattern.set(l, f), f;
  };
  return n.loop || (n.loop = "ijklmnopqrstuvxyz".split("")), { gensym: t, genpattern: r, genloop: () => {
    const l = n.loop.shift();
    return n.loop.push(`${l}${l[0]}`), Jl(l);
  }, getref: (l) => n.ref.get(l), genref: (l) => {
    const f = t("ref");
    return n.ref.set(l, f), f;
  }, genformat: (l) => {
    let f = n.format.get(l);
    return f || (f = t("format"), e[f] = l, n.format.set(l, f)), f;
  } };
};
var Fd = { scopeMethods: uk };
const ck = (e) => /[\uD800-\uDFFF]/.test(e) ? [...e].length : e.length, dk = (e, n, t, r) => {
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
}, pk = (e) => {
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
}, hk = (e) => {
  if (typeof Buffer < "u")
    return Buffer.from(e, "base64").toString("utf-8");
  const n = atob(e);
  return new TextDecoder("utf-8").decode(new Uint8Array(n.length).map((t, r) => n.charCodeAt(r)));
}, Wd = Function.prototype.call.bind(Object.prototype.hasOwnProperty);
Wd[Symbol.for("toJayString")] = "Function.prototype.call.bind(Object.prototype.hasOwnProperty)";
const Dd = (e) => /~\//.test(e) ? `${e}`.replace(/~/g, "~0").replace(/\//g, "~1") : e, mk = (e) => e.length === 0 ? "#" : `#/${e.map(Dd).join("/")}`, gk = ({ keywordLocation: e, instanceLocation: n }, t, r) => ({
  keywordLocation: `${t}${e.slice(1)}`,
  instanceLocation: `${r}${n.slice(1)}`
}), _k = (e, [n, t]) => n.includes(!0) || n.some((r) => r === e) || t.some((r) => new RegExp(r, "u").test(e)), yk = (e, n) => (e.filter((t) => t[n])[0] || {})[n], vk = { toPointer: mk, pointerPart: Dd, errorMerge: gk, propertyIn: _k, dynamicResolve: yk };
var ia = { stringLength: ck, isMultipleOf: dk, deepEqual: Kr, unique: pk, deBase64: hk, hasOwn: Wd, ...vk };
const { format: fe, safe: bk } = as, { scopeMethods: wk } = Fd, mi = ia, xs = new Map(
  Object.entries({
    null: (e) => fe("%s === null", e),
    boolean: (e) => fe('typeof %s === "boolean"', e),
    array: (e) => fe("Array.isArray(%s)", e),
    object: (e) => fe('typeof %s === "object" && %s && !Array.isArray(%s)', e, e, e),
    number: (e) => fe('typeof %s === "number"', e),
    integer: (e) => fe("Number.isInteger(%s)", e),
    string: (e) => fe('typeof %s === "string"', e)
  })
), Nt = ({ name: e, parent: n, keyval: t, keyname: r }) => {
  if (e) {
    if (n || t || r)
      throw new Error("name can be used only stand-alone");
    return e;
  }
  if (!n)
    throw new Error("Can not use property of undefined parent!");
  const i = Nt(n);
  if (t !== void 0) {
    if (r)
      throw new Error("Can not use key value and name together");
    if (!["string", "number"].includes(typeof t))
      throw new Error("Invalid property path");
    return /^[a-z][a-z0-9_]*$/i.test(t) ? fe("%s.%s", i, bk(t)) : fe("%s[%j]", i, t);
  } else if (r)
    return fe("%s[%s]", i, r);
  throw new Error("Unreachable");
}, $k = new Set(
  [].concat(
    ...[Object, Array, String, Number, Boolean].map((e) => Object.getOwnPropertyNames(e.prototype))
  )
), Ak = (e, n, t, { unmodifiedPrototypes: r, isJSON: i }, s) => {
  const { gensym: o, genpattern: a, genloop: l } = wk(n, t);
  return { present: (h) => {
    const g = Nt(h), { parent: b, keyval: w, keyname: A, inKeys: M, checked: W } = h;
    if (W || M && i)
      throw new Error("Unreachable: useless check for undefined");
    if (M)
      return fe("%s !== undefined", g);
    if (b && A) {
      n.hasOwn = mi.hasOwn;
      const j = Nt(b);
      return i ? fe("%s !== undefined && hasOwn(%s, %s)", g, j, A) : fe("%s in %s && hasOwn(%s, %s)", A, j, j, A);
    } else if (b && w !== void 0) {
      if (r && i && !$k.has(`${w}`))
        return fe("%s !== undefined", g);
      n.hasOwn = mi.hasOwn;
      const j = Nt(b);
      return i ? fe("%s !== undefined && hasOwn(%s, %j)", g, j, w) : fe("%j in %s && hasOwn(%s, %j)", w, j, j, w);
    }
    throw new Error("Unreachable: present() check without parent");
  }, forObjectKeys: (h, g) => {
    const b = o("key");
    e.block(fe("for (const %s of Object.keys(%s))", b, Nt(h)), () => {
      g(t(h, b, !0), b);
    });
  }, forArray: (h, g, b) => {
    const w = l(), A = Nt(h);
    e.block(fe("for (let %s = %s; %s < %s.length; %s++)", w, g, w, A, w), () => {
      b(t(h, w, r, !0), w);
    });
  }, patternTest: (h, g) => {
    const b = h.replace(/[.^$|*+?(){}[\]\\]/gu, "");
    if (h === `^${b}$`)
      return fe("(%s === %j)", g, h.slice(1, -1));
    if (s.has(h))
      return fe("true");
    if ([b, `${b}+`, `${b}.*`, `.*${b}.*`].includes(h))
      return fe("%s.includes(%j)", g, b);
    if ([`^${b}`, `^${b}+`, `^${b}.*`].includes(h))
      return fe("%s.startsWith(%j)", g, b);
    if ([`${b}$`, `.*${b}$`].includes(h))
      return fe("%s.endsWith(%j)", g, b);
    const w = [...b].slice(0, -1).join("");
    return [`${b}*`, `${b}?`].includes(h) ? w.length === 0 ? fe("true") : fe("%s.includes(%j)", g, w) : [`^${b}*`, `^${b}?`].includes(h) ? w.length === 0 ? fe("true") : fe("%s.startsWith(%j)", g, w) : fe("%s.test(%s)", a(h), g);
  }, compare: (h, g) => {
    if (!g || typeof g != "object")
      return fe("%s === %j", h, g);
    let b;
    const w = (A) => A.length <= 3 && A.every((M) => !M || typeof M != "object");
    if (Array.isArray(g)) {
      if (b = xs.get("array")(h), w(g)) {
        let A = fe("%s.length === %d", h, g.length);
        for (let M = 0; M < g.length; M++)
          A = fe("%s && %s[%d] === %j", A, h, M, g[M]);
        return fe("%s && %s", b, A);
      }
    } else {
      b = xs.get("object")(h);
      const [A, M] = [Object.keys(g), Object.values(g)];
      if (w(M)) {
        let W = fe("Object.keys(%s).length === %d", h, A.length);
        A.length > 0 && (n.hasOwn = mi.hasOwn);
        for (const j of A)
          W = fe("%s && hasOwn(%s, %j)", W, h, j);
        for (const j of A)
          W = fe("%s && %s[%j] === %j", W, h, j, g[j]);
        return fe("%s && %s", b, W);
      }
    }
    return n.deepEqual = mi.deepEqual, fe("%s && deepEqual(%s, %j)", b, h, g);
  }, propvar: t };
}, Ok = /^\([^)]*\) *=>/, Rk = /^[^=]*=>/, Xl = Symbol.for("toJayString");
function Ek(e) {
  if (typeof e == "function") {
    if (e[Xl])
      return e[Xl];
    if (Object.getPrototypeOf(e) !== Function.prototype)
      throw new Error("Can not stringify: a function with unexpected prototype");
    const n = `${e}`;
    if (e.prototype) {
      if (!/^function[ (]/.test(n))
        throw new Error("Unexpected function");
      return n;
    }
    if (Ok.test(n) || Rk.test(n))
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
var Ud = { types: xs, buildName: Nt, jsHelpers: Ak, jaystring: Ek };
const { format: gi, safe: Tk, safenot: kk } = as, { jaystring: Pk } = Ud, Sk = /[{[]/, jk = /[}\]]/;
var Bd = () => {
  const e = [];
  let n = 0;
  const t = (s) => {
    jk.test(s.trim()[0]) && n--, e.push({ indent: n, code: s }), Sk.test(s[s.length - 1]) && n++;
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
      `${s}` == "false" ? (a && a(), o && (this.optimizedOut = !0)) : `${s}` == "true" ? (o && o(), a && (this.optimizedOut = !0)) : o && this.block(gi("if (%s)", s), o, !!a) ? a && this.block(gi("else"), a) : a && this.if(kk(s), a);
    },
    makeModule(s = {}) {
      return `(function() {
'use strict'
${i(s).map(
        ([a, l]) => `const ${Tk(a)} = ${Pk(l)};`
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
const Ik = [
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
], Ck = [
  "draft/next",
  "draft/2020-12",
  "draft/2019-09",
  "draft-07",
  "draft-06",
  "draft-04",
  "draft-03"
  // historic
], Lk = Ck.map((e) => `https://json-schema.org/${e}/schema`), Mk = ["core", "applicator", "validation", "meta-data", "format", "content"], Nk = [
  "core",
  "applicator",
  "unevaluated",
  "validation",
  "meta-data",
  "format-annotation",
  "format-assertion",
  "content"
], Fk = [
  ...Mk.map((e) => `https://json-schema.org/draft/2019-09/vocab/${e}`),
  ...Nk.map((e) => `https://json-schema.org/draft/2020-12/vocab/${e}`)
];
var qd = { knownKeywords: Ik, schemaVersions: Lk, knownVocabularies: Fk };
const { knownKeywords: Gd } = qd;
function zd(e, n, t, r = "keys") {
  if (!e.has(n))
    return e.set(n, t);
  if (e.get(n) !== t)
    throw new Error(`Conflicting duplicate ${r}: ${n}`);
}
function Wk(e) {
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
    const o = Wk(s);
    if (typeof i != "object" || !Object.prototype.hasOwnProperty.call(i, o))
      return;
    i = i[o];
  }
  return i;
}
const Zl = /^https?:\/\//;
function Ft(e, n) {
  if (typeof e != "string" || typeof n != "string")
    throw new Error("Unexpected path!");
  if (n.length === 0)
    return e;
  const t = e.replace(/#.*/, "");
  return n.startsWith("#") ? `${t}${n}` : !t.includes("/") || Zl.test(n) ? n : Zl.test(t) ? `${new URL(n, t)}` : n.startsWith("/") ? n : [...t.split("/").slice(0, -1), n].join("/");
}
function Vl(e) {
  return e.map((t) => t && (t.$id || t.id) || "").filter((t) => t && typeof t == "string").reduce(Ft, "");
}
const Hd = ["properties", "patternProperties", "$defs", "definitions"], Kd = ["const", "enum", "examples", "example", "comment"], Yd = Symbol("skip");
function sa(e, n) {
  const t = (r, i = !1) => {
    if (!r || typeof r != "object")
      return;
    const s = n(r);
    if (s !== void 0)
      return s === Yd ? void 0 : s;
    for (const o of Object.keys(r)) {
      if (!i && !Array.isArray(r) && !Gd.includes(o) || !i && Kd.includes(o))
        continue;
      const a = t(r[o], !i && Hd.includes(o));
      if (a !== void 0)
        return a;
    }
  };
  return t(e);
}
function Jd(e, n, t, r = "") {
  const i = Ft(r, t), s = [], [o, a = ""] = i.split("#"), l = decodeURI(a), f = (u, c, p = !1, m = !1) => {
    if (!u || typeof u != "object")
      return;
    const h = u.$id || u.id;
    let g = c;
    if (h && typeof h == "string") {
      if (g = Ft(g, h), g === i || g === o && l === "")
        s.push([u, e, c]);
      else if (g === o && l[0] === "/") {
        const w = [], A = eo(u, l, w);
        A !== void 0 && s.push([A, e, Ft(c, Vl(w))]);
      }
    }
    const b = m ? u.$dynamicAnchor : u.$anchor;
    if (b && typeof b == "string") {
      if (b.includes("#"))
        throw new Error("$anchor can't include '#'");
      if (b.startsWith("/"))
        throw new Error("$anchor can't start with '/'");
      g = Ft(g, `#${b}`), g === i && s.push([u, e, c]);
    }
    for (const w of Object.keys(u))
      !p && !Array.isArray(u) && !Gd.includes(w) || !p && Kd.includes(w) || f(u[w], g, !p && Hd.includes(w));
    !m && u.$dynamicAnchor && f(u, c, p, !0);
  };
  if (f(e, o), o === r.replace(/#$/, "") && (l[0] === "/" || l === "")) {
    const u = [], c = eo(e, l, u);
    c !== void 0 && s.push([c, e, Vl(u)]);
  }
  if (n.has(o) && n.get(o) !== e) {
    const u = Jd(n.get(o), n, `#${a}`, o);
    s.push(...u.map(([c, p, m]) => [c, p, Ft(o, m)]));
  }
  return n.has(i) && s.push([n.get(i), n.get(i), i]), s;
}
function Dk(e) {
  const n = /* @__PURE__ */ new Map();
  return sa(e, (t) => {
    if (t !== e && (t.$id || t.id))
      return Yd;
    const r = t.$dynamicAnchor;
    if (r && typeof r == "string") {
      if (r.includes("#"))
        throw new Error("$dynamicAnchor can't include '#'");
      if (!/^[a-zA-Z0-9_-]+$/.test(r))
        throw new Error(`Unsupported $dynamicAnchor: ${r}`);
      zd(n, r, t, "$dynamicAnchor");
    }
  }), n;
}
const Uk = (e, n) => sa(e, (t) => Object.keys(t).some((r) => n.includes(r)) || void 0) || !1, Ql = (e, n, t = !1) => {
  if (!Array.isArray(n))
    throw new Error("Expected an array of schemas");
  for (const r of n)
    sa(r, (i) => {
      const s = i.$id || i.id, o = s && typeof s == "string" ? s.replace(/#$/, "") : null;
      if (o && o.includes("://") && !o.includes("#"))
        zd(e, o, i, "schema $id in 'schemas'");
      else if (i === r && !t)
        throw new Error("Schema with missing or invalid $id in 'schemas'");
    });
  return e;
}, Xd = (e, n) => {
  if (n)
    return Ql(Xd(e), n, !0);
  if (e)
    switch (Object.getPrototypeOf(e)) {
      case Object.prototype:
        return new Map(Object.entries(e));
      case Map.prototype:
        return new Map(e);
      case Array.prototype:
        return Ql(/* @__PURE__ */ new Map(), e);
    }
  throw new Error("Unexpected value for 'schemas' option");
};
var Zd = { get: eo, joinPath: Ft, resolveReference: Jd, getDynamicAnchors: Dk, hasKeywords: Uk, buildSchemas: Xd };
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
}, Bk = {
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
}, qk = {
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
var Gk = { core: no, extra: Bk, weak: qk };
const kn = (e, n) => [.../* @__PURE__ */ new Set([...e, ...n])].sort(), Vd = (e, n) => e.filter((t) => n.includes(t)), zk = (e) => (...n) => e(...n.map(Ii)), Qd = (e) => (...n) => Ii(e(...n.map(Ii))), bn = (e, n) => e && !e.includes(n), Ii = ({ type: e = null, dyn: n = {}, ...t }) => ({
  type: e && [...e].sort(),
  items: bn(e, "array") ? 1 / 0 : t.items || 0,
  properties: bn(e, "object") ? [!0] : [...t.properties || []].sort(),
  patterns: bn(e, "object") ? [] : [...t.patterns || []].sort(),
  required: bn(e, "object") ? [] : [...t.required || []].sort(),
  fullstring: bn(e, "string") || t.fullstring || !1,
  dyn: {
    item: bn(e, "array") ? !1 : n.item || !1,
    items: bn(e, "array") ? 0 : Math.max(t.items || 0, n.items || 0),
    properties: bn(e, "object") ? [] : kn(t.properties || [], n.properties || []),
    patterns: bn(e, "object") ? [] : kn(t.patterns || [], n.patterns || [])
  },
  unknown: t.unknown && !(bn(e, "object") && bn(e, "array")) || !1
}), Hk = () => Ii({}), xd = Qd((e, n) => ({
  type: e.type && n.type ? Vd(e.type, n.type) : e.type || n.type || null,
  items: Math.max(e.items, n.items),
  properties: kn(e.properties, n.properties),
  patterns: kn(e.patterns, n.patterns),
  required: kn(e.required, n.required),
  fullstring: e.fullstring || n.fullstring,
  dyn: {
    item: e.dyn.item || n.dyn.item,
    items: Math.max(e.dyn.items, n.dyn.items),
    properties: kn(e.dyn.properties, n.dyn.properties),
    patterns: kn(e.dyn.patterns, n.dyn.patterns)
  },
  unknown: e.unknown || n.unknown
})), to = (e, n) => n !== !0 && new RegExp(e, "u").test(n), Kk = ({ properties: e, patterns: n }, { properties: t, patterns: r }) => {
  const i = e.filter((l) => t.includes(l) || t.includes(!0) || r.some((f) => to(f, l))), s = t.filter((l) => e.includes(l) || e.includes(!0) || n.some((f) => to(f, l))), o = n.filter((l) => r.includes(l) || t.includes(!0)), a = r.filter((l) => n.includes(l) || e.includes(!0));
  return { properties: kn(i, s), patterns: kn(o, a) };
}, ep = ({ properties: e, patterns: n }, { properties: t, patterns: r }) => t.every((i) => e.includes(i) || e.includes(!0) || n.some((s) => to(s, i))) && r.every((i) => n.includes(i) || e.includes(!0)), Yk = Qd((e, n) => ({
  type: e.type && n.type ? kn(e.type, n.type) : null,
  items: Math.min(e.items, n.items),
  ...Kk(e, n),
  required: bn(e.type, "object") && n.required || bn(n.type, "object") && e.required || Vd(e.required, n.required),
  fullstring: e.fullstring && n.fullstring,
  dyn: {
    item: e.dyn.item || n.dyn.item,
    items: Math.max(e.dyn.items, n.dyn.items),
    properties: kn(e.dyn.properties, n.dyn.properties),
    patterns: kn(e.dyn.patterns, n.dyn.patterns)
  },
  unknown: e.unknown || n.unknown
})), Jk = (e, n) => Object.assign(e, xd(e, n)), Xk = zk(({ unknown: e, items: n, dyn: t, ...r }) => ({
  items: n !== 1 / 0 && (e || t.items > n || t.item),
  properties: !r.properties.includes(!0) && (e || !ep(r, t))
}));
var Zk = { initTracing: Hk, andDelta: xd, orDelta: Yk, applyDelta: Jk, isDynamic: Xk, inProperties: ep };
const { format: H, safe: xl, safeand: _i, safenot: Ct, safenotor: yi } = as, Vk = Bd, { resolveReference: ar, joinPath: ef, getDynamicAnchors: Qk, hasKeywords: nf } = Zd, vi = Gk, { toPointer: js, ...ke } = ia, { scopeMethods: np } = Fd, { buildName: Is, types: Hn, jsHelpers: xk } = Ud, { knownKeywords: e3, schemaVersions: ro, knownVocabularies: n3 } = qd, { initTracing: t3, andDelta: tf, orDelta: gt, applyDelta: r3, isDynamic: Kn, inProperties: i3 } = Zk, Cs = /* @__PURE__ */ new Set(["^[\\s\\S]*$", "^[\\S\\s]*$", "^[^]*$", "", ".*", "^", "$"]), Ls = ["null", "boolean", "number", "integer", "string"], io = new Map(
  Object.entries({
    boolean: (e) => typeof e == "boolean",
    array: (e) => Array.isArray(e) && Object.getPrototypeOf(e) === Array.prototype,
    object: (e) => e && Object.getPrototypeOf(e) === Object.prototype,
    finite: (e) => Number.isFinite(e),
    natural: (e) => Number.isInteger(e) && e >= 0,
    string: (e) => typeof e == "string",
    jsonval: (e) => ke.deepEqual(e, JSON.parse(JSON.stringify(e)))
  })
), Wt = io.get("object"), rf = (e) => Wt(e) || typeof e == "boolean", s3 = (e) => ke.deepEqual(e, { type: [] }), Lt = (e, n) => ro.indexOf(e) > ro.indexOf(`https://json-schema.org/${n}/schema`), o3 = (e, n, t = !1, r = !1) => Object.freeze({ parent: e, keyname: n, inKeys: t, number: r }), a3 = (e, n, t = !1) => Object.freeze({ parent: e, keyval: n, checked: t }), sf = Symbol("evaluatedStatic"), _t = Symbol("optDynamic"), cr = Symbol("optDynAnchors"), Fr = Symbol("optRecAnchors"), l3 = (e) => {
  if (typeof e == "boolean")
    return e;
  if (Wt(e) && Object.keys(e).length === 0)
    return !0;
}, so = /* @__PURE__ */ new WeakMap(), f3 = (e, n, t, r) => {
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
}, tp = (e, n, t, r, i = "") => {
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
    allowUnusedKeywords: p = t.mode === "lax",
    allowUnreachable: m = t.mode === "lax",
    requireSchema: h = t.mode === "strong",
    requireValidation: g = t.mode === "strong",
    requireStringValidation: b = t.mode === "strong",
    forbidNoopValues: w = t.mode === "strong",
    // e.g. $recursiveAnchor: false (it's false by default)
    complexityChecks: A = t.mode === "strong",
    unmodifiedPrototypes: M = !1,
    // assumes no mangled Object/Array prototypes
    isJSON: W = !1,
    // assume input to be JSON, which e.g. makes undefined impossible
    $schemaDefault: j = null,
    formats: F = {},
    weakFormats: I = t.mode !== "strong",
    extraFormats: D = !1,
    schemas: C,
    // always a Map, produced at wrapper
    ...ee
  } = t, R = {
    ...vi.core,
    ...I ? vi.weak : {},
    ...D ? vi.extra : {},
    ...F
  };
  if (Object.keys(ee).length !== 0)
    throw new Error(`Unknown options: ${Object.keys(ee).join(", ")}`);
  if (!["strong", "lax", "default"].includes(s))
    throw new Error(`Invalid mode: ${s}`);
  if (!l && f)
    throw new Error("allErrors requires includeErrors to be enabled");
  if (h && j)
    throw new Error("requireSchema forbids $schemaDefault");
  if (s === "strong") {
    const rn = { requireValidation: g, requireStringValidation: b, complexityChecks: A, requireSchema: h }, dn = { weakFormats: I, allowUnusedKeywords: p };
    for (const [V, P] of Object.entries(rn))
      if (!P)
        throw new Error(`Strong mode demands ${V}`);
    for (const [V, P] of Object.entries(dn))
      if (P)
        throw new Error(`Strong mode forbids ${V}`);
  }
  const { gensym: X, getref: tn, genref: Ze, genformat: q } = np(r), pe = (rn) => {
    const dn = [];
    let V = rn;
    for (; V; )
      V.name || dn.unshift(V), V = V.parent || V.errorParent;
    if (dn.every((Mn) => Mn.keyval !== void 0))
      return H("%j", js(dn.map((Mn) => Mn.keyval)));
    const P = ["#"], sn = () => {
      const Mn = P.map(ke.pointerPart).join("/");
      return P.length = 0, Mn;
    };
    let qn = null;
    for (const { keyname: Mn, keyval: oi, number: Pt } of dn)
      if (Mn) {
        Pt || (r.pointerPart = ke.pointerPart);
        const Zt = Pt ? Mn : H("pointerPart(%s)", Mn), ce = `${sn()}/`;
        qn = qn ? H("%s+%j+%s", qn, ce, Zt) : H("%j+%s", ce, Zt);
      } else
        oi && P.push(oi);
    return P.length > 0 ? H("%s+%j", qn, `/${sn()}`) : qn;
  }, Ge = Ze(e);
  let _n = null;
  const xn = (...rn) => {
    const dn = _n(...rn);
    return xn.errors = _n.errors, dn;
  };
  r[Ge] = xn;
  const Et = nf(e, ["$ref", "$recursiveRef", "$dynamicRef"]), Tt = t[cr] && Et && nf(e, ["$dynamicAnchor"]), z = () => t[cr] ? H(Tt ? ", dynAnchors = []" : ", dynAnchors") : H(""), ze = t[Fr] ? H(", recursive") : H(""), E = Vk();
  E.write("function validate(data%s%s) {", ze, z()), l && E.write("validate.errors = null"), f && E.write("let errorCount = 0"), t[_t] && E.write("validate.evaluatedDynamic = null");
  let Jt = t[cr] ? H(", dynAnchors") : H("");
  Tt && (E.write("const dynLocal = [{}]"), Jt = H(", [...dynAnchors, dynLocal[0] || []]"));
  const op = xk(E, r, o3, { unmodifiedPrototypes: M, isJSON: W }, Cs), { present: et, forObjectKeys: ii, forArray: ls, patternTest: fs, compare: us } = op, kt = [], cn = () => so.get(n), Xt = i ? [i] : [], cs = (rn, dn, V, P, sn, qn = {}, { constProp: Mn } = {}) => {
    const oi = dn.length > 0 && dn[dn.length - 1].prop === V, Pt = () => dn.filter((_) => _.prop === V), Zt = !V.parent || V.checked || V.inKeys && W || Pt().length > 0, ce = Is(V), St = (..._) => a3(V, ..._), ut = ({ path: _ = [], prop: $ = V, source: O, suberr: S }) => {
      const v = js([...sn, ..._]), L = l ? pe($) : null;
      if (l === !0 && rn && O) {
        r.errorMerge = ke.errorMerge;
        const U = [O, v, L];
        f ? (E.write("if (validate.errors === null) validate.errors = []"), E.write("validate.errors.push(...%s.map(e => errorMerge(e, %j, %s)))", ...U)) : E.write("validate.errors = [errorMerge(%s[0], %j, %s)]", ...U);
      } else if (l === !0 && rn) {
        const U = H("{ keywordLocation: %j, instanceLocation: %s }", v, L);
        f ? (E.write("if (%s === null) %s = []", rn, rn), E.write("%s.push(%s)", rn, U)) : E.write("%s = [%s]", rn, U);
      }
      S && va(S), f ? E.write("errorCount++") : E.write("return false");
    }, yn = (_, $) => E.if(_, () => ut($)), jt = (_, $) => {
      const O = $ !== void 0 ? ` ${JSON.stringify($)}` : "";
      throw new Error(`${_}${O} at ${ef(i, js(sn))}`);
    }, ie = (_, ...$) => _ || jt(...$), kr = (_, ...$) => ie(s === "lax" || _, ...$), ct = (_, $) => kr(!(P[$] < P[_]), `Invalid ${_} / ${$} combination`), dt = (_, $ = "should be specified") => ie(!g, `[requireValidation] ${_} ${$}`), Ue = (..._) => [...sn, ..._], Vt = (_) => ie(!a && !o, `[removeAdditional/useDefaults] uncertain: ${_}`), aa = (_, $) => ie(!A, `[complexityChecks] ${_}`, $), la = (_) => f3(n, _ || j, ie, h), ae = t3(), ge = (_) => r3(ae, _);
    if (typeof P == "boolean")
      return P === !0 ? (dt("schema = true", "is not allowed"), { stat: ae }) : (yn(Zt || V.inKeys ? !0 : et(V), {}), ge({ type: [] }), { stat: ae });
    ie(Wt(P), "Schema is not an object");
    for (const _ of Object.keys(P))
      ie(e3.includes(_) || p, "Keyword not supported:", _);
    if (Object.keys(P).length === 0)
      return dt("empty rules node", "is not allowed"), { stat: ae };
    const pt = new Set(Object.keys(P)), fa = /* @__PURE__ */ new Set(), ht = (_, ...$) => {
      ie(fa.has(_) || pt.has(_), "Unexpected double consumption:", _), ie(ke.hasOwn(P, _), "Is not an own property:", _), ie($.every((O) => io.has(O)), "Invalid type used in consume"), ie($.some((O) => io.get(O)(P[_])), "Unexpected type for", _), pt.delete(_);
    }, ua = (_, ...$) => (P[_] !== void 0 && ht(_, ...$), P[_]), Y = (_, $, O, S = {}) => {
      if (P[_] === void 0)
        return !1;
      if (ht(_, ...$), O !== null) {
        const v = O(P[_]);
        v !== null && yn(v, { path: [_], ...S });
      }
      return !0;
    };
    if (P === n ? (la(ua("$schema", "string")), Y("$vocabulary", ["object"], (_) => {
      for (const [$, O] of Object.entries(_))
        O !== !1 && ie(O === !0 && n3.includes($), "Unknown vocabulary:", $);
      return null;
    })) : cn() || la(n.$schema), cn().objectContains)
      for (const _ of ["contains", "minContains", "maxContains"])
        fa.add(_);
    Y("examples", ["array"], null), Y("example", ["jsonval"], null);
    for (const _ of ["title", "description", "$comment"])
      Y(_, ["string"], null);
    for (const _ of ["deprecated", "readOnly", "writeOnly"])
      Y(_, ["boolean"], null);
    Y("$defs", ["object"], null) || Y("definitions", ["object"], null);
    const Pr = (_, $, O) => _ === e ? xl("validate") : tn(_) || tp(_, $, t, r, O), mt = () => Xt.length > 0 ? Xt[Xt.length - 1] : "", ap = Xt.length, ca = (_) => (Xt.push(ef(mt(), _)), null);
    (!cn().exclusiveRefs || !P.$ref) && (Y("$id", ["string"], ca) || Y("id", ["string"], ca), Y("$anchor", ["string"], null), Y("$dynamicAnchor", ["string"], null), (P.$recursiveAnchor || !w) && Y("$recursiveAnchor", ["boolean"], (_) => (_ && kt.push([P, n, mt()]), null)));
    const da = Tt && (P === e || P.id || P.$id);
    if (da) {
      const _ = Qk(P);
      P !== e && E.write("dynLocal.unshift({})");
      for (const [$, O] of _) {
        const S = ar(n, C, `#${$}`, mt()), [v, L, U] = S[0] || [];
        ie(v === O, `Unexpected $dynamicAnchor resolution: ${$}`);
        const se = Pr(v, L, U);
        E.write("dynLocal[0][%j] = %s", `#${$}`, se);
      }
    }
    const ps = (_) => t[_t] && (P[_] || P[_] === !1 || P === e), vn = Object.freeze({
      item: ps("unevaluatedItems") ? X("evaluatedItem") : null,
      items: ps("unevaluatedItems") ? X("evaluatedItems") : null,
      props: ps("unevaluatedProperties") ? X("evaluatedProps") : null
    }), Re = Object.freeze({
      item: vn.item || qn.item,
      items: vn.items || qn.items,
      props: vn.props || qn.props
    }), pa = () => (!Re.items || ae.items === 1 / 0) && (!Re.props || ae.properties.includes(!0)), Gn = (_) => {
      if (Re.item && _.item && ae.items !== 1 / 0 && E.write("%s.push(%s)", Re.item, _.item), Re.items && _.items > ae.items && E.write("%s.push(%d)", Re.items, _.items), Re.props && (_.properties || []).includes(!0) && !ae.properties.includes(!0))
        E.write("%s[0].push(true)", Re.props);
      else if (Re.props) {
        const $ = (v, L) => i3(ae, { properties: v, patterns: L }), O = (_.properties || []).filter((v) => !$([v], [])), S = (_.patterns || []).filter((v) => !$([], [v]));
        O.length > 0 && E.write("%s[0].push(...%j)", Re.props, O), S.length > 0 && E.write("%s[1].push(...%j)", Re.props, S);
        for (const v of _.propertiesVars || [])
          E.write("%s[0].push(%s)", Re.props, v);
      }
    }, ha = (_, $, O, S) => {
      Kn(ae).items && _.item && $ && E.write("%s.push(...%s)", _.item, $), Kn(ae).items && _.items && O && E.write("%s.push(...%s)", _.items, O), Kn(ae).properties && _.props && S && (E.write("%s[0].push(...%s[0])", _.props, S), E.write("%s[1].push(...%s[1])", _.props, S));
    }, lp = () => t[Fr] ? kt.length === 0 ? H(", recursive") : H(", recursive || %s", Pr(...kt[0])) : H(""), ai = (_, $) => {
      const O = r[_] && r[_][sf] || { unknown: !0 };
      ge(O);
      const S = H("%s(%s%s%s)", _, ce, lp(), Jt);
      if (!l && pa())
        return H("!%s", S);
      const v = X("res"), L = X("err"), U = X("suberr");
      return l && E.write("const %s = validate.errors", L), E.write("const %s = %s", v, S), l && E.write("const %s = %s.errors", U, _), l && E.write("validate.errors = %s", L), yn(Ct(v), { ...$, source: U }), E.if(v, () => {
        const se = Kn(O).items ? H("%s.evaluatedDynamic[0]", _) : null, he = Kn(O).items ? H("%s.evaluatedDynamic[1]", _) : null, de = Kn(O).properties ? H("%s.evaluatedDynamic[2]", _) : null;
        ha(Re, se, he, de);
      }), null;
    }, ma = (_, $) => _ && _.every((O) => $.includes(O)), ga = (_, $) => $.some((O) => _ === null || _.includes(O)), _a = (..._) => Pt().some(($) => ma($.stat.type, _)), fp = (..._) => ma(ae.type, _) || _a(..._), Qt = (..._) => ga(ae.type, _) && Pt().every(($) => ga($.stat.type, _)), hs = (_, $ = P) => {
      ie(typeof _ == "string", "Invalid pattern:", _), (g || b) && ie(/^\^.*\$$/.test(_), "Should start with ^ and end with $:", _), /([{+*].*[{+*]|\)[{+*]|^[^^].*[{+*].)/.test(_) && $.maxLength === void 0 && aa("maxLength should be specified for pattern:", _);
    }, up = P.pattern && !Cs.has(P.pattern), cp = P.uniqueItems || up || P.patternProperties || P.format, li = f && cp ? X("prev") : null, fi = (_, $) => E.if(_ && li !== null ? H("errorCount === %s", li) : !0, $), ya = () => [...dn, { stat: ae, prop: V }], pn = (..._) => cs(rn, ya(), ..._).stat, It = (_, ...$) => {
      if ($[0] === V) {
        const v = l3($[1]);
        if (v === !0)
          return { sub: H("true"), delta: {} };
        if (v === !1)
          return { sub: H("false"), delta: { type: [] } };
      }
      const O = X("sub");
      E.write("const %s = (() => {", O), f && E.write("let errorCount = 0");
      const { stat: S } = cs(_, ya(), ...$);
      return f ? E.write("return errorCount === 0") : E.write("return true"), E.write("})()"), { sub: O, delta: S };
    }, ms = () => {
      const _ = l && f ? X("suberr") : null;
      return _ && E.write("let %s = null", _), _;
    }, va = (_) => {
      rn === null || _ === null || E.if(_, () => E.write("%s.push(...%s)", rn, _));
    }, ba = () => {
      if (!a)
        return !1;
      if (a === !0)
        return !0;
      if (a === "keyword")
        return P.removeAdditional ? (ht("removeAdditional", "boolean"), !0) : !1;
      throw new Error(`Invalid removeAdditional: ${a}`);
    }, ui = (_, $, O) => {
      Y(_, ["object", "boolean"], (v) => v === !1 && ba() ? (E.write("if (%s.length > %s) %s.length = %s", ce, $, ce, $), null) : v === !1 && !O ? H("%s.length > %s", ce, $) : (ls(V, $, (L, U) => (O && E.write("if (%s) continue", O(U)), pn(L, v, Ue(_)))), null)) && ge({ items: 1 / 0 });
    }, gs = (_, $) => {
      Y(_, ["object", "boolean"], (S) => (ii(V, (v, L) => {
        E.if($(L), () => {
          S === !1 && ba() ? E.write("delete %s[%s]", ce, L) : pn(v, S, Ue(_));
        });
      }), null)) && ge({ properties: [!0] });
    }, wa = (_, $, O) => _i(
      ...$.map((S) => H("%s !== %j", _, S)),
      ...O.map((S) => Ct(fs(S, _)))
    ), $a = (_, $) => {
      const O = $.map((v) => new RegExp(v, "u")), S = (v) => _.includes(v) || O.some((L) => L.test(v));
      for (const v of ae.required)
        ie(S(v), "Unknown required property:", v);
    }, Aa = [], dp = () => {
      const _ = (O, S) => H("!(%d %c %s)", O, S, ce);
      Number.isFinite(P.exclusiveMinimum) ? Y("exclusiveMinimum", ["finite"], (O) => _(O, "<")) : (Y("minimum", ["finite"], (O) => _(O, P.exclusiveMinimum ? "<" : "<=")), Y("exclusiveMinimum", ["boolean"], null)), Number.isFinite(P.exclusiveMaximum) ? (Y("exclusiveMaximum", ["finite"], (O) => _(O, ">")), ct("minimum", "exclusiveMaximum"), ct("exclusiveMinimum", "exclusiveMaximum")) : P.maximum !== void 0 && (Y("maximum", ["finite"], (O) => _(O, P.exclusiveMaximum ? ">" : ">=")), Y("exclusiveMaximum", ["boolean"], null), ct("minimum", "maximum"), ct("exclusiveMinimum", "maximum"));
      const $ = P.multipleOf === void 0 ? "divisibleBy" : "multipleOf";
      Y($, ["finite"], (O) => {
        ie(O > 0, `Invalid ${$}:`, O);
        const [S, v] = `${O}`.split("e-"), U = `${S}.`.split(".")[1].length + (v ? Number(v) : 0);
        if (Number.isInteger(O * 2 ** U))
          return H("%s %% %d !== 0", ce, O);
        r.isMultipleOf = ke.isMultipleOf;
        const se = [ce, O, U, Math.round(O * Math.pow(10, U))];
        return H("!isMultipleOf(%s, %d, 1e%d, %d)", ...se);
      });
    }, pp = () => {
      Y("maxLength", ["natural"], (_) => (r.stringLength = ke.stringLength, H("%s.length > %d && stringLength(%s) > %d", ce, _, ce, _))), Y("minLength", ["natural"], (_) => (r.stringLength = ke.stringLength, H("%s.length < %d || stringLength(%s) < %d", ce, _, ce, _))), ct("minLength", "maxLength"), fi(!0, () => {
        const _ = (v, L, U = R) => {
          const se = typeof v == "string" && ke.hasOwn(U, v);
          ie(se, "Unrecognized format used:", v);
          const he = U[v], de = he instanceof RegExp || typeof he == "function";
          return ie(de, "Invalid format used:", v), he instanceof RegExp ? (ke.hasOwn(F, v) && hs(he.source), H("!%s.test(%s)", q(he), L)) : H("!%s(%s)", q(he), L);
        };
        Y("format", ["string"], (v) => (ge({ fullstring: !0 }), _(v, ce))), Y("pattern", ["string"], (v) => (hs(v), ge({ fullstring: !0 }), Cs.has(v) ? null : Ct(fs(v, ce)))), ie(P.contentSchema !== !1, "contentSchema cannot be set to false");
        const $ = u === void 0 ? cn().contentValidation : u, O = P.contentEncoding || P.contentMediaType || P.contentSchema;
        if (ie(!O || $ || p, '"content*" keywords are disabled by default per spec, enable with { contentValidation = true } option (see doc/Options.md for more info)'), O && $) {
          const v = X("dec");
          P.contentMediaType && E.write("let %s = %s", v, ce), P.contentEncoding === "base64" ? (yn(_("base64", ce, vi.extra), { path: ["contentEncoding"] }), P.contentMediaType && (r.deBase64 = ke.deBase64, E.write("try {"), E.write("%s = deBase64(%s)", v, v)), ht("contentEncoding", "string")) : ie(!P.contentEncoding, "Unknown contentEncoding:", P.contentEncoding);
          let L = !1;
          if (P.contentMediaType === "application/json" ? (E.write("try {"), E.write("%s = JSON.parse(%s)", v, v), L = !0, ht("contentMediaType", "string")) : ie(!P.contentMediaType, "Unknown contentMediaType:", P.contentMediaType), P.contentSchema) {
            ie(L, "contentSchema requires contentMediaType application/json");
            const U = Object.freeze({ name: v, errorParent: V });
            pn(U, P.contentSchema, Ue("contentSchema")), ht("contentSchema", "object", "array"), ge({ fullstring: !0 });
          }
          P.contentMediaType && (E.write("} catch (e) {"), ut({ path: ["contentMediaType"] }), E.write("}"), P.contentEncoding && (E.write("} catch (e) {"), ut({ path: ["contentEncoding"] }), E.write("}")));
        }
      });
    }, hp = () => {
      Y("maxItems", ["natural"], (v) => {
        const L = cn().newItemsSyntax ? "prefixItems" : "items";
        return Array.isArray(P[L]) && P[L].length > v && jt(`Invalid maxItems: ${v} is less than ${L} array length`), H("%s.length > %d", ce, v);
      }), Y("minItems", ["natural"], (v) => H("%s.length < %d", ce, v)), ct("minItems", "maxItems");
      const _ = (v) => {
        for (let L = 0; L < v.length; L++)
          pn(St(L), v[L], Ue(`${L}`));
        return ge({ items: v.length }), null;
      };
      cn().newItemsSyntax ? (Y("prefixItems", ["array"], _), ui("items", H("%d", (P.prefixItems || []).length))) : Array.isArray(P.items) ? (Y("items", ["array"], _), ui("additionalItems", H("%d", P.items.length))) : Y("items", ["object", "boolean"], (v) => (ls(V, H("0"), (L) => pn(L, v, Ue("items"))), ge({ items: 1 / 0 }), null)), Oa((v) => {
        ls(V, H("0"), (L, U) => {
          v(L, () => {
            ge({ dyn: { item: !0 } }), Gn({ item: U });
          });
        });
      });
      const $ = (v) => {
        if (!Wt(v))
          return !1;
        if (v.enum || ke.hasOwn(v, "const") || v.type && (Array.isArray(v.type) ? v.type : [v.type]).every((U) => Ls.includes(U)))
          return !0;
        if (v.$ref) {
          const [L] = ar(n, C, v.$ref, mt())[0] || [];
          if ($(L))
            return !0;
        }
        return !1;
      }, O = (v) => v === !1 || $(v), S = () => !!(P.maxItems !== void 0 || O(P.items) || Array.isArray(P.items) && O(P.additionalItems));
      fi(!0, () => {
        Y("uniqueItems", ["boolean"], (v) => v === !1 ? null : (S() || aa("maxItems should be specified for non-primitive uniqueItems"), Object.assign(r, { unique: ke.unique, deepEqual: ke.deepEqual }), H("!unique(%s)", ce)));
      });
    }, xt = (_) => !f && (ae.required.includes(_) || Pt().some(($) => $.stat.required.includes(_))), mp = () => {
      const _ = H("Object.keys(%s).length", ce);
      Y("maxProperties", ["natural"], ($) => H("%s > %d", _, $)), Y("minProperties", ["natural"], ($) => H("%s < %d", _, $)), ct("minProperties", "maxProperties"), Y("propertyNames", ["object", "boolean"], ($) => (ii(V, (O, S) => {
        const v = typeof $ == "object" && !$.$ref ? { type: "string", ...$ } : $, L = Object.freeze({ name: S, errorParent: O, type: "string" });
        pn(L, v, Ue("propertyNames"));
      }), null)), Y("required", ["array"], ($) => {
        for (const O of $) {
          if (xt(O))
            continue;
          const S = St(O);
          yn(Ct(et(S)), { path: ["required"], prop: S });
        }
        return ge({ required: $ }), null;
      });
      for (const $ of ["dependencies", "dependentRequired", "dependentSchemas"])
        $ !== "dependencies" && cn().dependentUnsupported || Y($, ["object"], (O) => {
          for (const S of Object.keys(O)) {
            const v = typeof O[S] == "string" ? [O[S]] : O[S], L = St(S, xt(S));
            if (Array.isArray(v) && $ !== "dependentSchemas") {
              const U = v.filter((de) => !xt(de)).map((de) => et(St(de))), se = Ct(_i(...U)), he = { path: [$, S] };
              U.length === 0 || (L.checked ? (yn(se, he), ge({ required: v })) : yn(_i(et(L), se), he));
            } else
              rf(v) && $ !== "dependentRequired" ? (Vt($), E.if(L.checked ? !0 : et(L), () => {
                const U = pn(V, v, Ue($, S), Re);
                ge(gt({}, U)), Gn(U);
              })) : jt(`Unexpected ${$} entry`);
          }
          return null;
        });
      Y("propertyDependencies", ["object"], ($) => {
        for (const [O, S] of Object.entries($)) {
          ie(Wt(S), "propertyDependencies must be an object"), Vt("propertyDependencies");
          const v = St(O, xt(O));
          E.if(v.checked ? !0 : et(v), () => {
            for (const [L, U] of Object.entries(S))
              ie(rf(U), "propertyDependencies must contain schemas"), E.if(us(Is(v), L), () => {
                const se = pn(V, U, Ue("propertyDependencies", O, L), Re);
                ge(gt({}, se)), Gn(se);
              });
          });
        }
        return null;
      }), Y("properties", ["object"], ($) => {
        for (const O of Object.keys($))
          Mn !== O && pn(St(O, xt(O)), $[O], Ue("properties", O));
        return ge({ properties: Object.keys($) }), null;
      }), fi(P.patternProperties, () => {
        if (Y("patternProperties", ["object"], ($) => (ii(V, (O, S) => {
          for (const v of Object.keys($))
            hs(v, P.propertyNames || {}), E.if(fs(v, S), () => {
              pn(O, $[v], Ue("patternProperties", v));
            });
        }), ge({ patterns: Object.keys($) }), null)), P.additionalProperties || P.additionalProperties === !1) {
          const $ = Object.keys(P.properties || {}), O = Object.keys(P.patternProperties || {});
          P.additionalProperties === !1 && Aa.push(() => $a($, O)), gs("additionalProperties", (v) => wa(v, $, O));
        }
      }), cn().objectContains && Oa(($) => {
        ii(V, (O, S) => {
          $(O, () => {
            ge({ dyn: { properties: [!0] } }), Gn({ propertiesVars: [S] });
          });
        });
      });
    }, gp = () => {
      const _ = Y("const", ["jsonval"], (O) => Ct(us(ce, O)));
      if (_ && !p)
        return !0;
      const $ = Y("enum", ["array"], (O) => {
        const S = O.filter((L) => L && typeof L == "object"), v = O.filter((L) => !(L && typeof L == "object"));
        return yi(...[...v, ...S].map((L) => us(ce, L)));
      });
      return _ || $;
    }, Oa = (_) => {
      Y("contains", ["object", "boolean"], () => {
        Vt("contains"), cn().objectContains && Qt("array") && Qt("object") && dt("possible type confusion in 'contains',", "forbid 'object' or 'array'");
        const $ = X("passes");
        E.write("let %s = 0", $);
        const O = ms();
        return _((S, v) => {
          const { sub: L } = It(O, S, P.contains, Ue("contains"));
          E.if(L, () => {
            E.write("%s++", $), cn().containsEvaluates && (ie(!a, `Can't use removeAdditional with draft2020+ "contains"`), v());
          });
        }), Y("minContains", ["natural"], (S) => H("%s < %d", $, S), { suberr: O }) || yn(H("%s < 1", $), { path: ["contains"], suberr: O }), Y("maxContains", ["natural"], (S) => H("%s > %d", $, S)), ct("minContains", "maxContains"), null;
      });
    }, _p = () => {
      Y("not", ["object", "boolean"], (v) => It(null, V, v, Ue("not")).sub), P.not && Vt("not"), (P.then || P.then === !1 || P.else || P.else === !1 || p) && Y("if", ["object", "boolean"], (v) => {
        Vt("if/then/else");
        const { sub: L, delta: U } = It(null, V, v, Ue("if"), Re);
        let se, he, de, ve;
        return Y("else", ["object", "boolean"], (Ae) => (se = () => {
          de = pn(V, Ae, Ue("else"), Re), Gn(de);
        }, null)), Y("then", ["object", "boolean"], (Ae) => (he = () => {
          ve = pn(V, Ae, Ue("then"), Re), Gn(tf(U, ve));
        }, null)), !he && !s3(U) && (he = () => Gn(U)), E.if(L, he, se), ge(gt(de || {}, tf(U, ve || {}))), null;
      });
      const $ = (v, L = "allOf") => {
        ie(v.length > 0, `${L} cannot be empty`);
        for (const [U, se] of Object.entries(v))
          ge(pn(V, se, Ue(L, U), Re));
        return null;
      };
      Y("allOf", ["array"], (v) => $(v));
      let O = null;
      Y("discriminator", ["object"], (v) => {
        const L = /* @__PURE__ */ new Set(), U = (Ie, nr, tr) => ie(Ie, `[discriminator]: ${nr}`, tr), { propertyName: se, mapping: he, ...de } = v, ve = St(se);
        U(se && !P.oneOf != !P.anyOf, "need propertyName, oneOf OR anyOf"), U(Object.keys(de).length === 0, 'only "propertyName" and "mapping" are supported');
        const Ae = (Ie) => Wt(Ie) ? Object.keys(Ie).length : null;
        return O = (Ie, nr) => {
          const tr = () => {
            E.write("switch (%s) {", Is(ve));
            let rr;
            for (const [bp, ir] of Object.entries(Ie)) {
              const { const: _s, enum: Ta, ...wp } = (ir.properties || {})[se] || {};
              let jr = _s !== void 0 ? [_s] : Ta;
              if (!jr && ir.$ref) {
                const [zn] = ar(n, C, ir.$ref, mt())[0] || [];
                ie(Wt(zn), "failed to resolve $ref:", ir.$ref);
                const Ir = (zn.properties || {})[se] || {};
                jr = Ir.const !== void 0 ? [Ir.const] : Ir.enum;
              }
              const $p = Array.isArray(jr) && jr.length > 0;
              U($p, "branches should have unique string const or enum values for [propertyName]");
              const Ap = Object.keys(wp).length === 0 && (!_s || !Ta);
              U(Ap, "only const OR enum rules are allowed on [propertyName] in branches");
              for (const zn of jr) {
                const Ir = !he || ke.hasOwn(he, zn) && he[zn] === ir.$ref;
                U(Ir, "mismatching mapping for", zn);
                const Op = typeof zn == "string" && !L.has(zn);
                U(Op, "const/enum values for [propertyName] should be unique strings"), L.add(zn), E.write("case %j:", zn);
              }
              const ys = pn(V, ir, Ue(nr, bp), Re, { constProp: se });
              Gn(ys), rr = rr ? gt(rr, ys) : ys, E.write("break");
            }
            U(he === void 0 || Ae(he) === L.size, "mismatching mapping size"), ge(rr), E.write("default:"), ut({ path: [nr] }), E.write("}");
          }, Sr = () => {
            if (xt(se))
              tr();
            else {
              const rr = ["discriminator", "propertyName"];
              E.if(et(ve), tr, () => ut({ path: rr, prop: ve }));
            }
          };
          return f || !ke.deepEqual(ae.type, ["object"]) ? E.if(Hn.get("object")(ce), Sr, () => ut({ path: ["discriminator"] })) : Sr(), U(ke.deepEqual(ae.type, ["object"]), "has to be checked for type:", "object"), U(ae.required.includes(se), "propertyName should be placed in required:", se), null;
        }, null;
      });
      const S = (v, L) => {
        const U = L.map((de) => de.type || (Array.isArray(de.const) ? "array" : typeof de.const)), se = U.filter((de) => !Ls.includes(de) && de !== "array").length, he = U.filter((de) => !Ls.includes(de) && de !== "object").length;
        (se > 1 || he > 1) && Vt(`${v}, use discriminator to make it certain`);
      };
      Y("anyOf", ["array"], (v) => {
        if (ie(v.length > 0, "anyOf cannot be empty"), v.length === 1)
          return $(v);
        if (O)
          return O(v, "anyOf");
        const L = ms();
        if (!pa()) {
          S("anyOf", v);
          const ve = Object.entries(v).map(
            ([Ae, Ie]) => It(L, V, Ie, Ue("anyOf", Ae), Re)
          );
          ge(ve.map((Ae) => Ae.delta).reduce((Ae, Ie) => gt(Ae, Ie))), yn(yi(...ve.map(({ sub: Ae }) => Ae)), { path: ["anyOf"], suberr: L });
          for (const { delta: Ae, sub: Ie } of ve)
            E.if(Ie, () => Gn(Ae));
          return null;
        }
        const U = v.filter((ve) => ke.hasOwn(ve, "const")), se = v.filter((ve) => !ke.hasOwn(ve, "const"));
        S("anyOf", se);
        const he = [...U, ...se];
        let de;
        if (cn().exclusiveRefs) {
          let ve = () => ut({ path: ["anyOf"], suberr: L });
          for (const [Ae, Ie] of Object.entries(he).reverse()) {
            const nr = ve;
            ve = () => {
              const { sub: tr, delta: Sr } = It(L, V, Ie, Ue("anyOf", Ae));
              E.if(Ct(tr), nr), de = de ? gt(de, Sr) : Sr;
            };
          }
          ve();
        } else {
          const ve = Object.entries(v).map(
            ([Ae, Ie]) => It(L, V, Ie, Ue("anyOf", Ae), Re)
          );
          de = ve.map((Ae) => Ae.delta).reduce((Ae, Ie) => gt(Ae, Ie)), yn(yi(...ve.map(({ sub: Ae }) => Ae)), { path: ["anyOf"], suberr: L });
        }
        return ge(de), null;
      }), Y("oneOf", ["array"], (v) => {
        if (ie(v.length > 0, "oneOf cannot be empty"), v.length === 1)
          return $(v);
        if (O)
          return O(v, "oneOf");
        S("oneOf", v);
        const L = X("passes");
        E.write("let %s = 0", L);
        const U = ms();
        let se, he = 0;
        const de = Object.entries(v).map(([ve, Ae]) => {
          !l && he++ > 1 && yn(H("%s > 1", L), { path: ["oneOf"] });
          const Ie = It(U, V, Ae, Ue("oneOf", ve), Re);
          return E.if(Ie.sub, () => E.write("%s++", L)), se = se ? gt(se, Ie.delta) : Ie.delta, Ie;
        });
        ge(se), yn(H("%s !== 1", L), { path: ["oneOf"] }), E.if(H("%s === 0", L), () => va(U));
        for (const ve of de)
          E.if(ve.sub, () => Gn(ve.delta));
        return null;
      });
    }, er = (_, $, O) => {
      const [S, v] = [E.size(), pt.size];
      E.if(fp(...$) ? !0 : O, _), (S !== E.size() || v !== pt.size) && ie(Qt(...$), "Unexpected rules in type", P.type);
    }, yp = () => {
      if (ae.items === 1 / 0)
        P.unevaluatedItems === !1 && ht("unevaluatedItems", "boolean");
      else if (P.unevaluatedItems || P.unevaluatedItems === !1)
        if (Kn(ae).items) {
          if (!t[_t])
            throw new Error("Dynamic unevaluated tracing is not enabled");
          const _ = H("Math.max(%d, ...%s)", ae.items, Re.items), $ = (O) => H("%s.includes(%s)", Re.item, O);
          ui("unevaluatedItems", _, cn().containsEvaluates ? $ : null);
        } else
          ui("unevaluatedItems", H("%d", ae.items));
    }, vp = () => {
      fi(ae.patterns.length > 0 || ae.dyn.patterns.length > 0 || ae.unknown, () => {
        if (ae.properties.includes(!0))
          P.unevaluatedProperties === !1 && ht("unevaluatedProperties", "boolean");
        else if (P.unevaluatedProperties || P.unevaluatedProperties === !1) {
          const _ = ($) => wa($, ae.properties, ae.patterns);
          if (Kn(ae).properties) {
            if (!t[_t])
              throw new Error("Dynamic unevaluated tracing is not enabled");
            r.propertyIn = ke.propertyIn;
            const $ = (S) => H("!propertyIn(%s, %s)", S, Re.props);
            gs("unevaluatedProperties", (S) => _i(_(S), $(S)));
          } else
            P.unevaluatedProperties === !1 && $a(ae.properties, ae.patterns), gs("unevaluatedProperties", _);
        }
      });
    }, Ra = () => {
      if (li !== null && E.write("const %s = errorCount", li), gp()) {
        const _ = [...Hn.keys()];
        if (ge({ properties: [!0], items: 1 / 0, type: _, fullstring: !0 }), !p) {
          ie(pt.size === 0, "Unexpected keywords mixed with const or enum:", [...pt]);
          return;
        }
      }
      er(dp, ["number", "integer"], Hn.get("number")(ce)), er(pp, ["string"], Hn.get("string")(ce)), er(hp, ["array"], Hn.get("array")(ce)), er(mp, ["object"], Hn.get("object")(ce)), _p(), er(yp, ["array"], Hn.get("array")(ce)), er(vp, ["object"], Hn.get("object")(ce));
      for (const _ of Aa)
        _();
      ha(qn, vn.item, vn.items, vn.props);
    }, Ea = () => {
      if (vn.item && E.write("const %s = []", vn.item), vn.items && E.write("const %s = [0]", vn.items), vn.props && E.write("const %s = [[], []]", vn.props), Y("$ref", ["string"], ($) => {
        const O = ar(n, C, $, mt()), [S, v, L] = O[0] || [];
        if (!S && S !== !1 && jt("failed to resolve $ref:", $), S.type) {
          const U = Array.isArray(S.type) ? S.type : [S.type];
          ge({ type: U }), g && (U.includes("array") && ge({ items: 1 / 0 }), U.includes("object") && ge({ properties: [!0] }));
        }
        return ai(Pr(S, v, L), { path: ["$ref"] });
      }), cn().exclusiveRefs && (ie(!t[_t], "unevaluated* is supported only on draft2019-09 and above"), P.$ref))
        return;
      Y("$recursiveRef", ["string"], ($) => {
        if (!t[Fr])
          throw new Error("Recursive anchors are not enabled");
        ie($ === "#", 'Behavior of $recursiveRef is defined only for "#"');
        const O = ar(n, C, "#", mt()), [S, v, L] = O[0];
        kr(S.$recursiveAnchor, "$recursiveRef without $recursiveAnchor");
        const U = Pr(S, v, L), se = S.$recursiveAnchor ? H("(recursive || %s)", U) : U;
        return ai(se, { path: ["$recursiveRef"] });
      }), Y("$dynamicRef", ["string"], ($) => {
        if (!t[cr])
          throw new Error("Dynamic anchors are not enabled");
        kr(/^[^#]*#[a-zA-Z0-9_-]+$/.test($), "Unsupported $dynamicRef format");
        const O = $.replace(/^[^#]+/, ""), S = ar(n, C, $, mt());
        if (!S[0] && !cn().bookending) {
          kr(!1, "$dynamicRef bookending resolution failed (even though not required)"), r.dynamicResolve = ke.dynamicResolve;
          const ve = H("dynamicResolve(dynAnchors || [], %j)", O);
          return ai(ve, { path: ["$dynamicRef"] });
        }
        ie(S[0], "$dynamicRef bookending resolution failed", $);
        const [v, L, U] = S[0], se = v.$dynamicAnchor && `#${v.$dynamicAnchor}` === O;
        kr(se, "$dynamicRef without $dynamicAnchor in the same scope");
        const he = Pr(v, L, U);
        r.dynamicResolve = ke.dynamicResolve;
        const de = se ? H("(dynamicResolve(dynAnchors || [], %j) || %s)", O, he) : he;
        return ai(de, { path: ["$dynamicRef"] });
      });
      let _ = null;
      Y("type", ["string", "array"], ($) => {
        const O = Array.isArray($) ? $ : [$];
        for (const v of O)
          ie(typeof v == "string" && Hn.has(v), "Unknown type:", v);
        if (V.type)
          return ie(ke.deepEqual(O, [V.type]), "One type allowed:", V.type), ge({ type: [V.type] }), null;
        if (_a(...O))
          return null;
        const S = O.filter((v) => Qt(v));
        return S.length === 0 && jt("No valid types possible"), ge({ type: O }), _ = yi(...S.map((v) => Hn.get(v)(ce))), null;
      }), _ && f ? E.if(_, () => ut({ path: ["type"] }), Ra) : (_ && yn(_, { path: ["type"] }), Ra()), ae.items < 1 / 0 && P.maxItems <= ae.items && ge({ items: 1 / 0 });
    };
    if (P.default !== void 0 && o) {
      Zt && jt("Can not apply default value here (e.g. at root)");
      const _ = ua("default", "jsonval");
      E.if(et(V), Ea, () => E.write("%s = %j", ce, _));
    } else
      Y("default", ["jsonval"], null), E.if(Zt ? !0 : et(V), Ea);
    if (Xt.length = ap, kt[0] && kt[kt.length - 1][0] === P && kt.pop(), da && P !== e && E.write("dynLocal.shift()"), m || ie(!E.optimizedOut, "some checks are never reachable"), oi) {
      const _ = ["not", "if", "then", "else"].includes(sn[sn.length - 1]), $ = ["oneOf", "anyOf", "allOf"].includes(sn[sn.length - 2]), O = ["dependencies", "dependentSchemas"].includes(sn[sn.length - 2]), S = ["propertyDependencies"].includes(sn[sn.length - 3]);
      ie(_ || $ || O || S, "Unexpected logical path");
    } else if (!sn.includes("not")) {
      if (ae.type || dt("type"), Qt("array") && ae.items !== 1 / 0 && dt(P.items ? "additionalItems or unevaluatedItems" : "items rule"), Qt("object") && !ae.properties.includes(!0) && dt("additionalProperties or unevaluatedProperties"), typeof P.propertyNames != "object")
        for (const _ of ["additionalProperties", "unevaluatedProperties"])
          P[_] && dt(`wild-card ${_}`, "requires propertyNames");
      !ae.fullstring && b && jt("[requireStringValidation] pattern, format or contentSchema should be specified for strings, use pattern: ^[\\s\\S]*$ to opt-out");
    }
    return P.properties && !P.required && dt("if properties is used, required"), ie(pt.size === 0 || p, "Unprocessed keywords:", [...pt]), { stat: ae, local: vn };
  }, { stat: ds, local: si } = cs(H("validate.errors"), [], { name: xl("data") }, e, []);
  if (t[_t] && (Kn(ds).items || Kn(ds).properties)) {
    if (!si)
      throw new Error("Failed to trace dynamic properties");
    E.write("validate.evaluatedDynamic = [%s, %s, %s]", si.item, si.items, si.props);
  }
  return f ? E.write("return errorCount === 0") : E.write("return true"), E.write("}"), _n = E.makeFunction(r), _n[sf] = ds, delete r[Ge], r[Ge] = _n, Ge;
}, Ei = (e, n) => {
  if (!Array.isArray(e))
    throw new Error("Expected an array of schemas");
  try {
    const t = /* @__PURE__ */ Object.create(null), { getref: r } = np(t);
    return { scope: t, refs: e.map((i) => r(i) || tp(i, i, n, t)) };
  } catch (t) {
    if (!n[_t] && t.message === "Dynamic unevaluated tracing is not enabled")
      return Ei(e, { ...n, [_t]: !0 });
    if (!n[cr] && t.message === "Dynamic anchors are not enabled")
      return Ei(e, { ...n, [cr]: !0 });
    if (!n[Fr] && t.message === "Recursive anchors are not enabled")
      return Ei(e, { ...n, [Fr]: !0 });
    throw t;
  }
};
var u3 = { compile: Ei };
const c3 = Bd, { buildSchemas: d3 } = Zd, { compile: p3 } = u3, { deepEqual: oa } = ia, h3 = (e) => function n(t) {
  if (!oa(t, JSON.parse(JSON.stringify(t))))
    return n.errors = [{ instanceLocation: "#", error: "not JSON compatible" }], !1;
  const r = e(t);
  return n.errors = e.errors, r;
}, m3 = (e) => (n) => oa(n, JSON.parse(JSON.stringify(n))) && e(n), rp = (e, { parse: n = !1, multi: t = !1, jsonCheck: r = !1, isJSON: i = !1, schemas: s = [], ...o } = {}) => {
  if (r && i)
    throw new Error("Can not specify both isJSON and jsonCheck options");
  if (n && (r || i))
    throw new Error("jsonCheck and isJSON options are not applicable in parser mode");
  const a = n ? "strong" : "default", l = i || r || n, f = t ? e : [e], u = { mode: a, ...o, schemas: d3(s, f), isJSON: l }, { scope: c, refs: p } = p3(f, u);
  if (o.dryRun)
    return;
  const m = c3();
  if (n ? c.parseWrap = o.includeErrors ? g3 : _3 : r && (c.deepEqual = oa, c.jsonCheckWrap = o.includeErrors ? h3 : m3), t) {
    m.write("[");
    for (const g of p.slice(0, -1))
      m.write("%s,", g);
    p.length > 0 && m.write("%s", p[p.length - 1]), m.write("]"), n ? m.write(".map(parseWrap)") : r && m.write(".map(jsonCheckWrap)");
  } else
    n ? m.write("parseWrap(%s)", p[0]) : r ? m.write("jsonCheckWrap(%s)", p[0]) : m.write("%s", p[0]);
  const h = m.makeFunction(c);
  return h.toModule = ({ semi: g = !0 } = {}) => m.makeModule(c) + (g ? ";" : ""), h.toJSON = () => e, h;
}, g3 = (e) => (n) => {
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
}, _3 = (e) => (n) => {
  if (typeof n != "string")
    return { valid: !1 };
  try {
    const t = JSON.parse(n);
    return e(t) ? { valid: !0, value: t } : { valid: !1 };
  } catch {
    return { valid: !1 };
  }
}, y3 = function(e, { parse: n = !0, ...t } = {}) {
  if (!n)
    throw new Error("can not disable parse in parser");
  return rp(e, { parse: n, ...t });
};
var v3 = { validator: rp, parser: y3 };
const ip = Symbol(), sp = Symbol();
function of(e, n, t) {
  const r = e.slice();
  return r[6] = n[t], r[8] = t, r;
}
function af(e) {
  let n, t = (
    /*enumText*/
    (e[4] || [])[
      /*idx*/
      e[8]
    ] + ""
  ), r, i;
  return {
    c() {
      n = N("option"), r = an(t), n.__value = i = /*enumVal*/
      e[6], n.value = n.__value;
    },
    m(s, o) {
      k(s, n, o), G(n, r);
    },
    p(s, o) {
      o & /*enumText*/
      16 && t !== (t = /*enumText*/
      (s[4] || [])[
        /*idx*/
        s[8]
      ] + "") && Tn(r, t), o & /*enumVals*/
      8 && i !== (i = /*enumVal*/
      s[6]) && (n.__value = i, n.value = n.__value);
    },
    d(s) {
      s && T(n);
    }
  };
}
function b3(e) {
  let n, t, r, i, s, o, a, l = (
    /*enumVals*/
    e[3]
  ), f = [];
  for (let u = 0; u < l.length; u += 1)
    f[u] = af(of(e, l, u));
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
      k(u, n, c), G(n, t);
      for (let p = 0; p < f.length; p += 1)
        f[p] && f[p].m(n, null);
      Sa(
        n,
        /*value*/
        e[2]
      ), o || (a = K(
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
        let p;
        for (p = 0; p < l.length; p += 1) {
          const m = of(u, l, p);
          f[p] ? f[p].p(m, c) : (f[p] = af(m), f[p].c(), f[p].m(n, null));
        }
        for (; p < f.length; p += 1)
          f[p].d(1);
        f.length = l.length;
      }
      c & /*params*/
      1 && r !== (r = /*params*/
      u[0].path.join(".")) && y(n, "id", r), c & /*params*/
      1 && i !== (i = /*params*/
      u[0].path.join(".")) && y(n, "name", i), c & /*value, enumVals*/
      12 && Sa(
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
function w3(e) {
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
        $$slots: { default: [b3] },
        $$scope: { ctx: o }
      }
    };
  }
  return i && (n = Me(i, s(e))), {
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
          Q(f.$$.fragment, 1, 0, () => {
            we(f, 1);
          }), We();
        }
        i ? (n = Me(i, s(o)), Oe(n.$$.fragment), J(n.$$.fragment, 1), be(n, t.parentNode, t)) : n = null;
      } else
        i && n.$set(l);
    },
    i(o) {
      r || (n && J(n.$$.fragment, o), r = !0);
    },
    o(o) {
      n && Q(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && T(t), n && we(n, o);
    }
  };
}
function $3(e, n, t) {
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
class A3 extends Je {
  constructor(n) {
    super(), Ye(this, n, $3, w3, He, { params: 0, schema: 1, value: 2 });
  }
}
const Ci = (e, n, t) => () => {
  n.pathChanged(n.path, [
    ...t || [],
    Ld(e.items)
  ]);
}, Li = (e, n, t) => () => {
  n.pathChanged(n.path, [
    ...t.slice(0, e),
    ...t.slice(e + 1)
  ], "delete");
}, Mi = (e, n, t) => () => {
  n.pathChanged(n.path, [
    ...t.slice(0, e),
    t[e],
    JSON.parse(JSON.stringify(t[e])),
    ...t.slice(e + 1)
  ], "duplicate");
}, Ni = (e, n, t) => () => {
  e > 0 && n.pathChanged(n.path, [
    ...t.slice(0, e - 1),
    t[e],
    t[e - 1],
    ...t.slice(e + 1)
  ], "up");
}, Fi = (e, n, t) => () => {
  e < t.length - 1 && n.pathChanged(n.path, [
    ...t.slice(0, e),
    t[e + 1],
    t[e],
    ...t.slice(e + 2)
  ], "down");
};
function lf(e, n, t) {
  const r = e.slice();
  return r[11] = n[t], r[13] = t, r;
}
function ff(e) {
  let n, t, r, i, s, o = (
    /*params*/
    (e[1].collapsible || /*legendText*/
    e[7]) && uf(e)
  ), a = (
    /*collapserOpenState*/
    e[3] === "open" && pf(e)
  );
  return {
    c() {
      n = N("fieldset"), o && o.c(), t = x(), a && a.c(), y(n, "name", r = /*params*/
      e[1].path.join(".")), y(n, "class", i = "subset array depth-" + /*params*/
      e[1].path.length);
    },
    m(l, f) {
      k(l, n, f), o && o.m(n, null), G(n, t), a && a.m(n, null), s = !0;
    },
    p(l, f) {
      /*params*/
      l[1].collapsible || /*legendText*/
      l[7] ? o ? o.p(l, f) : (o = uf(l), o.c(), o.m(n, t)) : o && (o.d(1), o = null), /*collapserOpenState*/
      l[3] === "open" ? a ? (a.p(l, f), f & /*collapserOpenState*/
      8 && J(a, 1)) : (a = pf(l), a.c(), J(a, 1), a.m(n, null)) : a && (Fe(), Q(a, 1, 1, () => {
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
      Q(a), s = !1;
    },
    d(l) {
      l && T(n), o && o.d(), a && a.d();
    }
  };
}
function uf(e) {
  let n, t, r, i = En(
    /*legendText*/
    e[7]
  ) + "", s, o = (
    /*params*/
    e[1].collapsible && cf(e)
  ), a = (
    /*schema*/
    e[0].description && df(e)
  );
  return {
    c() {
      n = N("legend"), o && o.c(), t = x(), r = N("span"), s = x(), a && a.c(), y(r, "class", "subset-label-title object-label-title"), y(n, "class", "subset-label array-label");
    },
    m(l, f) {
      k(l, n, f), o && o.m(n, null), G(n, t), G(n, r), r.innerHTML = i, G(n, s), a && a.m(n, null);
    },
    p(l, f) {
      /*params*/
      l[1].collapsible ? o ? o.p(l, f) : (o = cf(l), o.c(), o.m(n, t)) : o && (o.d(1), o = null), f & /*legendText*/
      128 && i !== (i = En(
        /*legendText*/
        l[7]
      ) + "") && (r.innerHTML = i), /*schema*/
      l[0].description ? a ? a.p(l, f) : (a = df(l), a.c(), a.m(n, null)) : a && (a.d(1), a = null);
    },
    d(l) {
      l && T(n), o && o.d(), a && a.d();
    }
  };
}
function cf(e) {
  let n, t, r, i;
  return {
    c() {
      n = N("span"), y(n, "class", t = "collapser " + /*collapserOpenState*/
      e[3]);
    },
    m(s, o) {
      k(s, n, o), r || (i = K(
        n,
        "click",
        /*toggle*/
        e[8]
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
function df(e) {
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
function pf(e) {
  let n, t, r, i = (
    /*controls*/
    e[4].includes("add")
  ), s, o;
  const a = [R3, O3], l = [];
  function f(c, p) {
    return (
      /*emptyText*/
      c[5] ? 1 : 0
    );
  }
  n = f(e), t = l[n] = a[n](e);
  let u = i && vf(e);
  return {
    c() {
      t.c(), r = x(), u && u.c(), s = Ce();
    },
    m(c, p) {
      l[n].m(c, p), k(c, r, p), u && u.m(c, p), k(c, s, p), o = !0;
    },
    p(c, p) {
      let m = n;
      n = f(c), n === m ? l[n].p(c, p) : (Fe(), Q(l[m], 1, 1, () => {
        l[m] = null;
      }), We(), t = l[n], t ? t.p(c, p) : (t = l[n] = a[n](c), t.c()), J(t, 1), t.m(r.parentNode, r)), p & /*controls*/
      16 && (i = /*controls*/
      c[4].includes("add")), i ? u ? u.p(c, p) : (u = vf(c), u.c(), u.m(s.parentNode, s)) : u && (u.d(1), u = null);
    },
    i(c) {
      o || (J(t), o = !0);
    },
    o(c) {
      Q(t), o = !1;
    },
    d(c) {
      l[n].d(c), c && T(r), u && u.d(c), c && T(s);
    }
  };
}
function O3(e) {
  let n, t;
  return {
    c() {
      n = N("div"), t = an(
        /*emptyText*/
        e[5]
      ), y(n, "class", "emptyText");
    },
    m(r, i) {
      k(r, n, i), G(n, t);
    },
    p(r, i) {
      i & /*emptyText*/
      32 && Tn(
        t,
        /*emptyText*/
        r[5]
      );
    },
    i: en,
    o: en,
    d(r) {
      r && T(n);
    }
  };
}
function R3(e) {
  let n = [], t = /* @__PURE__ */ new Map(), r, i, s = (
    /*value*/
    e[2] || []
  );
  const o = (a) => (
    /*idx*/
    a[13]
  );
  for (let a = 0; a < s.length; a += 1) {
    let l = lf(e, s, a), f = o(l);
    t.set(f, n[a] = yf(f, l));
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
      l & /*arrayDown, value, params, controls, arrayUp, arrayDuplicate, arrayDelete, SubSchemaForm, schema*/
      23 && (s = /*value*/
      a[2] || [], Fe(), n = Jr(n, l, o, 1, a, s, t, r.parentNode, lu, yf, r, lf), We());
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
        Q(n[l]);
      i = !1;
    },
    d(a) {
      for (let l = 0; l < n.length; l += 1)
        n[l].d(a);
      a && T(r);
    }
  };
}
function hf(e) {
  let n, t, r;
  return {
    c() {
      n = N("button"), y(n, "type", "button"), y(n, "class", "list-control delete"), y(n, "title", "delete");
    },
    m(i, s) {
      k(i, n, s), t || (r = K(n, "click", function() {
        Be(Li(
          /*idx*/
          e[13],
          /*params*/
          e[1],
          /*value*/
          e[2]
        )) && Li(
          /*idx*/
          e[13],
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
function mf(e) {
  let n, t, r;
  return {
    c() {
      n = N("button"), y(n, "type", "button"), y(n, "class", "list-control duplicate"), y(n, "title", "duplicate");
    },
    m(i, s) {
      k(i, n, s), t || (r = K(n, "click", function() {
        Be(Mi(
          /*idx*/
          e[13],
          /*params*/
          e[1],
          /*value*/
          e[2]
        )) && Mi(
          /*idx*/
          e[13],
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
      n = N("button"), y(n, "type", "button"), y(n, "class", "list-control up"), y(n, "title", "move up");
    },
    m(i, s) {
      k(i, n, s), t || (r = K(n, "click", function() {
        Be(Ni(
          /*idx*/
          e[13],
          /*params*/
          e[1],
          /*value*/
          e[2]
        )) && Ni(
          /*idx*/
          e[13],
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
      n = N("button"), y(n, "type", "button"), y(n, "class", "list-control down"), y(n, "title", "move down");
    },
    m(i, s) {
      k(i, n, s), t || (r = K(n, "click", function() {
        Be(Fi(
          /*idx*/
          e[13],
          /*params*/
          e[1],
          /*value*/
          e[2]
        )) && Fi(
          /*idx*/
          e[13],
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
function yf(e, n) {
  let t, r, i, s, o, a = (
    /*controls*/
    n[4].includes("delete")
  ), l, f = (
    /*controls*/
    n[4].includes("duplicate")
  ), u, c = (
    /*controls*/
    n[4].includes("reorder") && /*idx*/
    n[13] > 0
  ), p, m = (
    /*controls*/
    n[4].includes("reorder") && /*idx*/
    n[13] < /*value*/
    (n[2] || []).length - 1
  ), h, g;
  function b(I) {
    n[10](I);
  }
  var w = yr;
  function A(I) {
    let D = {
      params: {
        .../*params*/
        I[1],
        path: [
          .../*params*/
          I[1].path,
          /*idx*/
          I[13].toString()
        ],
        containerParent: "array",
        containerReadOnly: (
          /*params*/
          I[1].containerReadOnly || /*schema*/
          I[0].readOnly || !1
        )
      },
      value: (
        /*item*/
        I[11]
      )
    };
    return (
      /*schema*/
      I[0].items !== void 0 && (D.schema = /*schema*/
      I[0].items), { props: D }
    );
  }
  w && (r = Me(w, A(n)), Ve.push(() => Nn(r, "schema", b)));
  let M = a && hf(n), W = f && mf(n), j = c && gf(n), F = m && _f(n);
  return {
    key: e,
    first: null,
    c() {
      t = Ce(), r && Oe(r.$$.fragment), s = x(), o = N("div"), M && M.c(), l = x(), W && W.c(), u = x(), j && j.c(), p = x(), F && F.c(), h = x(), y(o, "class", "list-controls"), this.first = t;
    },
    m(I, D) {
      k(I, t, D), r && be(r, I, D), k(I, s, D), k(I, o, D), M && M.m(o, null), G(o, l), W && W.m(o, null), G(o, u), j && j.m(o, null), G(o, p), F && F.m(o, null), G(o, h), g = !0;
    },
    p(I, D) {
      n = I;
      const C = {};
      if (D & /*params, value, schema*/
      7 && (C.params = {
        .../*params*/
        n[1],
        path: [
          .../*params*/
          n[1].path,
          /*idx*/
          n[13].toString()
        ],
        containerParent: "array",
        containerReadOnly: (
          /*params*/
          n[1].containerReadOnly || /*schema*/
          n[0].readOnly || !1
        )
      }), D & /*value*/
      4 && (C.value = /*item*/
      n[11]), !i && D & /*schema*/
      1 && (i = !0, C.schema = /*schema*/
      n[0].items, nt(() => i = !1)), w !== (w = yr)) {
        if (r) {
          Fe();
          const ee = r;
          Q(ee.$$.fragment, 1, 0, () => {
            we(ee, 1);
          }), We();
        }
        w ? (r = Me(w, A(n)), Ve.push(() => Nn(r, "schema", b)), Oe(r.$$.fragment), J(r.$$.fragment, 1), be(r, s.parentNode, s)) : r = null;
      } else
        w && r.$set(C);
      D & /*controls*/
      16 && (a = /*controls*/
      n[4].includes("delete")), a ? M ? M.p(n, D) : (M = hf(n), M.c(), M.m(o, l)) : M && (M.d(1), M = null), D & /*controls*/
      16 && (f = /*controls*/
      n[4].includes("duplicate")), f ? W ? W.p(n, D) : (W = mf(n), W.c(), W.m(o, u)) : W && (W.d(1), W = null), D & /*controls, value*/
      20 && (c = /*controls*/
      n[4].includes("reorder") && /*idx*/
      n[13] > 0), c ? j ? j.p(n, D) : (j = gf(n), j.c(), j.m(o, p)) : j && (j.d(1), j = null), D & /*controls, value*/
      20 && (m = /*controls*/
      n[4].includes("reorder") && /*idx*/
      n[13] < /*value*/
      (n[2] || []).length - 1), m ? F ? F.p(n, D) : (F = _f(n), F.c(), F.m(o, h)) : F && (F.d(1), F = null);
    },
    i(I) {
      g || (r && J(r.$$.fragment, I), g = !0);
    },
    o(I) {
      r && Q(r.$$.fragment, I), g = !1;
    },
    d(I) {
      I && T(t), r && we(r, I), I && T(s), I && T(o), M && M.d(), W && W.d(), j && j.d(), F && F.d();
    }
  };
}
function vf(e) {
  let n, t, r;
  return {
    c() {
      n = N("button"), y(n, "type", "button"), y(n, "class", "list-control add"), y(n, "title", "add item");
    },
    m(i, s) {
      k(i, n, s), t || (r = K(n, "click", function() {
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
function E3(e) {
  let n, t, r = (
    /*showWrapper*/
    e[6] && ff(e)
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
      i[6] ? r ? (r.p(i, s), s & /*showWrapper*/
      64 && J(r, 1)) : (r = ff(i), r.c(), J(r, 1), r.m(n.parentNode, n)) : r && (Fe(), Q(r, 1, 1, () => {
        r = null;
      }), We());
    },
    i(i) {
      t || (J(r), t = !0);
    },
    o(i) {
      Q(r), t = !1;
    },
    d(i) {
      r && r.d(i), i && T(n);
    }
  };
}
function T3(e, n, t) {
  let r, i, s, o, a, { params: l } = n, { schema: f } = n, { value: u } = n, c = l.path.length === 0 || !l.collapsible ? "open" : "closed";
  const p = () => {
    t(3, c = c === "open" ? "closed" : "open");
  };
  function m(h) {
    e.$$.not_equal(f.items, h) && (f.items = h, t(0, f));
  }
  return e.$$set = (h) => {
    "params" in h && t(1, l = h.params), "schema" in h && t(0, f = h.schema), "value" in h && t(2, u = h.value);
  }, e.$$.update = () => {
    e.$$.dirty & /*schema, params*/
    3 && t(7, r = Gt(f, l.path)), e.$$.dirty & /*value, schema*/
    5 && t(6, i = u && u.length > 0 || f.emptyDisplay !== !1), e.$$.dirty & /*value, schema*/
    5 && t(5, s = (!u || u.length === 0) && typeof f.emptyDisplay == "string" && f.emptyDisplay), e.$$.dirty & /*params, schema*/
    3 && t(9, o = l.containerReadOnly || f.readOnly || !1), e.$$.dirty & /*schema, readOnly*/
    513 && t(4, a = f.controls === void 0 ? o ? "" : "add, reorder, delete, duplicate" : f.controls);
  }, [
    f,
    l,
    u,
    c,
    a,
    s,
    i,
    r,
    p,
    o,
    m
  ];
}
let k3 = class extends Je {
  constructor(n) {
    super(), Ye(this, n, T3, E3, He, { params: 1, schema: 0, value: 2 });
  }
};
function P3(e) {
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
      k(l, n, f), o || (a = K(
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
function S3(e) {
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
        $$slots: { default: [P3] },
        $$scope: { ctx: o }
      }
    };
  }
  return i && (n = Me(i, s(e))), {
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
          Q(f.$$.fragment, 1, 0, () => {
            we(f, 1);
          }), We();
        }
        i ? (n = Me(i, s(o)), Oe(n.$$.fragment), J(n.$$.fragment, 1), be(n, t.parentNode, t)) : n = null;
      } else
        i && n.$set(l);
    },
    i(o) {
      r || (n && J(n.$$.fragment, o), r = !0);
    },
    o(o) {
      n && Q(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && T(t), n && we(n, o);
    }
  };
}
function j3(e, n, t) {
  let { params: r } = n, { schema: i } = n, { value: s } = n;
  const o = (a) => r.pathChanged(r.path, a.currentTarget.checked);
  return e.$$set = (a) => {
    "params" in a && t(0, r = a.params), "schema" in a && t(1, i = a.schema), "value" in a && t(2, s = a.value);
  }, [r, i, s, o];
}
let I3 = class extends Je {
  constructor(n) {
    super(), Ye(this, n, j3, S3, He, { params: 0, schema: 1, value: 2 });
  }
};
function C3(e) {
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
      k(l, n, f), o || (a = K(
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
function L3(e) {
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
        $$slots: { default: [C3] },
        $$scope: { ctx: o }
      }
    };
  }
  return i && (n = Me(i, s(e))), {
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
          Q(f.$$.fragment, 1, 0, () => {
            we(f, 1);
          }), We();
        }
        i ? (n = Me(i, s(o)), Oe(n.$$.fragment), J(n.$$.fragment, 1), be(n, t.parentNode, t)) : n = null;
      } else
        i && n.$set(l);
    },
    i(o) {
      r || (n && J(n.$$.fragment, o), r = !0);
    },
    o(o) {
      n && Q(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && T(t), n && we(n, o);
    }
  };
}
function M3(e, n, t) {
  let { params: r } = n, { schema: i } = n, { value: s } = n;
  const o = (a) => {
    let l = parseFloat(a.currentTarget.value);
    r.pathChanged(r.path, isNaN(l) ? void 0 : l);
  };
  return e.$$set = (a) => {
    "params" in a && t(0, r = a.params), "schema" in a && t(1, i = a.schema), "value" in a && t(2, s = a.value);
  }, [r, i, s, o];
}
let N3 = class extends Je {
  constructor(n) {
    super(), Ye(this, n, M3, L3, He, { params: 0, schema: 1, value: 2 });
  }
};
function F3(e, n, t, r) {
  const i = Ps(r), s = zr(t, "/"), o = Ps(t);
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
  return [i, `Fails to satisfy schema at ${Ps(t)}`];
}
function bf(e, n, t) {
  const r = e.slice();
  return r[28] = n[t][0], r[29] = n[t][1], r;
}
function wf(e) {
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
function $f(e) {
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
function Af(e) {
  let n, t = zr(
    /*value*/
    e[0],
    "."
  ) + "", r;
  return {
    c() {
      n = N("div"), r = an(t), y(n, "class", "sf-upload-file"), y(
        n,
        "title",
        /*value*/
        e[0]
      );
    },
    m(i, s) {
      k(i, n, s), G(n, r);
    },
    p(i, s) {
      s[0] & /*value*/
      1 && t !== (t = zr(
        /*value*/
        i[0],
        "."
      ) + "") && Tn(r, t), s[0] & /*value*/
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
function Of(e) {
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
        K(n, "click", Wn(U3)),
        K(
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
      a && T(n), s = !1, Qe(o);
    }
  };
}
function Rf(e) {
  let n, t, r;
  return {
    c() {
      n = N("button"), y(n, "type", "button"), y(n, "class", "sf-upload-deleter");
    },
    m(i, s) {
      k(i, n, s), t || (r = K(
        n,
        "click",
        /*deleteUploads*/
        e[15]
      ), t = !0);
    },
    p: en,
    d(i) {
      i && T(n), t = !1, r();
    }
  };
}
function Ef(e) {
  let n, t = Object.entries(
    /*progress*/
    e[6]
  ), r = [];
  for (let i = 0; i < t.length; i += 1)
    r[i] = Tf(bf(e, t, i));
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
          const a = bf(i, t, o);
          r[o] ? r[o].p(a, s) : (r[o] = Tf(a), r[o].c(), r[o].m(n, null));
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
function Tf(e) {
  let n, t, r, i = (
    /*name*/
    e[28] + ""
  ), s, o;
  return {
    c() {
      n = N("div"), t = N("div"), r = x(), s = an(i), o = x(), y(t, "class", "sf-progress-done"), Dn(
        t,
        "width",
        /*percent*/
        e[29] + "%"
      ), y(n, "class", "sf-progress-bar");
    },
    m(a, l) {
      k(a, n, l), G(n, t), G(n, r), G(n, s), G(n, o);
    },
    p(a, l) {
      l[0] & /*progress*/
      64 && Dn(
        t,
        "width",
        /*percent*/
        a[29] + "%"
      ), l[0] & /*progress*/
      64 && i !== (i = /*name*/
      a[28] + "") && Tn(s, i);
    },
    d(a) {
      a && T(n);
    }
  };
}
function W3(e) {
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
  ), u, c, p, m, h, g, b, w = Object.keys(
    /*progress*/
    e[6]
  ).length > 0, A, M, W, j = (
    /*mode*/
    e[7] === "uploader" && !/*readOnly*/
    e[8] && wf()
  ), F = a && $f(e), I = f && Af(e), D = (
    /*mode*/
    e[7] === "link" && Of(e)
  ), C = !/*readOnly*/
  e[8] && Rf(e), ee = w && Ef(e);
  return {
    c() {
      n = N("input"), i = x(), s = N("div"), j && j.c(), o = x(), F && F.c(), l = x(), I && I.c(), u = x(), D && D.c(), c = x(), p = N("div"), C && C.c(), m = x(), h = N("button"), b = x(), ee && ee.c(), A = Ce(), y(n, "id", t = /*params*/
      e[2].path.join(".")), y(n, "name", r = /*params*/
      e[2].path.join(".")), y(n, "type", "file"), n.readOnly = /*readOnly*/
      e[8], Dn(n, "display", "none"), y(h, "type", "button"), Pe(
        h,
        "sf-upload-to-link",
        /*mode*/
        e[7] === "uploader"
      ), Pe(
        h,
        "sf-upload-to-uploader",
        /*mode*/
        e[7] === "link"
      ), y(p, "class", "sf-upload-controls"), y(s, "class", g = "sf-drop-area " + /*mode*/
      e[7]), y(s, "tabindex", "0"), Pe(
        s,
        "highlight",
        /*highlight*/
        e[1]
      );
    },
    m(R, X) {
      k(R, n, X), e[21](n), k(R, i, X), k(R, s, X), j && j.m(s, null), G(s, o), F && F.m(s, null), G(s, l), I && I.m(s, null), G(s, u), D && D.m(s, null), G(s, c), G(s, p), C && C.m(p, null), G(p, m), G(p, h), e[23](s), k(R, b, X), ee && ee.m(R, X), k(R, A, X), M || (W = [
        K(
          n,
          "input",
          /*onInput*/
          e[10]
        ),
        K(
          h,
          "click",
          /*changeMode*/
          e[16]
        ),
        K(
          s,
          "dragenter",
          /*dragEnter*/
          e[11]
        ),
        K(
          s,
          "dragover",
          /*dragOver*/
          e[12]
        ),
        K(
          s,
          "dragleave",
          /*dragLeave*/
          e[13]
        ),
        K(
          s,
          "drop",
          /*drop*/
          e[14]
        ),
        K(
          s,
          "click",
          /*openFile*/
          e[17]
        )
      ], M = !0);
    },
    p(R, X) {
      X[0] & /*params*/
      4 && t !== (t = /*params*/
      R[2].path.join(".")) && y(n, "id", t), X[0] & /*params*/
      4 && r !== (r = /*params*/
      R[2].path.join(".")) && y(n, "name", r), X[0] & /*readOnly*/
      256 && (n.readOnly = /*readOnly*/
      R[8]), /*mode*/
      R[7] === "uploader" && !/*readOnly*/
      R[8] ? j || (j = wf(), j.c(), j.m(s, o)) : j && (j.d(1), j = null), X[0] & /*value, mode*/
      129 && (a = /*value*/
      R[0] && /*isImage*/
      R[18](
        /*value*/
        R[0]
      ) && /*mode*/
      R[7] === "uploader"), a ? F ? F.p(R, X) : (F = $f(R), F.c(), F.m(s, l)) : F && (F.d(1), F = null), X[0] & /*value, mode*/
      129 && (f = /*value*/
      R[0] && !/*isImage*/
      R[18](
        /*value*/
        R[0]
      ) && /*mode*/
      R[7] === "uploader"), f ? I ? I.p(R, X) : (I = Af(R), I.c(), I.m(s, u)) : I && (I.d(1), I = null), /*mode*/
      R[7] === "link" ? D ? D.p(R, X) : (D = Of(R), D.c(), D.m(s, c)) : D && (D.d(1), D = null), /*readOnly*/
      R[8] ? C && (C.d(1), C = null) : C ? C.p(R, X) : (C = Rf(R), C.c(), C.m(p, m)), X[0] & /*mode*/
      128 && Pe(
        h,
        "sf-upload-to-link",
        /*mode*/
        R[7] === "uploader"
      ), X[0] & /*mode*/
      128 && Pe(
        h,
        "sf-upload-to-uploader",
        /*mode*/
        R[7] === "link"
      ), X[0] & /*mode*/
      128 && g !== (g = "sf-drop-area " + /*mode*/
      R[7]) && y(s, "class", g), X[0] & /*mode, highlight*/
      130 && Pe(
        s,
        "highlight",
        /*highlight*/
        R[1]
      ), X[0] & /*progress*/
      64 && (w = Object.keys(
        /*progress*/
        R[6]
      ).length > 0), w ? ee ? ee.p(R, X) : (ee = Ef(R), ee.c(), ee.m(A.parentNode, A)) : ee && (ee.d(1), ee = null);
    },
    d(R) {
      R && T(n), e[21](null), R && T(i), R && T(s), j && j.d(), F && F.d(), I && I.d(), D && D.d(), C && C.d(), e[23](null), R && T(b), ee && ee.d(R), R && T(A), M = !1, Qe(W);
    }
  };
}
function D3(e) {
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
        $$slots: { default: [W3] },
        $$scope: { ctx: o }
      }
    };
  }
  return i && (n = Me(i, s(e))), {
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
          Q(f.$$.fragment, 1, 0, () => {
            we(f, 1);
          }), We();
        }
        i ? (n = Me(i, s(o)), Oe(n.$$.fragment), J(n.$$.fragment, 1), be(n, t.parentNode, t)) : n = null;
      } else
        i && n.$set(l);
    },
    i(o) {
      r || (n && J(n.$$.fragment, o), r = !0);
    },
    o(o) {
      n && Q(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && T(t), n && we(n, o);
    }
  };
}
const U3 = () => {
};
function B3(e, n, t) {
  let r, i, { params: s } = n, { schema: o } = n, { value: a } = n, { highlight: l = !1 } = n;
  const f = o.multiple || !1;
  let u, c, p = Up(sp);
  ru(e, p, (q) => t(20, i = q));
  let m, h = [], g = {}, b = "uploader";
  const w = () => {
    var q, pe;
    if (!f) {
      if ((((q = u.files) == null ? void 0 : q.length) || 0) > 1) {
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
  }, A = (q) => {
    w();
  }, M = (q) => {
    var pe;
    r || ((pe = q.dataTransfer) == null ? void 0 : pe.types[0]) !== "Files" || (t(1, l = !0), q.preventDefault());
  }, W = (q) => {
    var pe;
    r || ((pe = q.dataTransfer) == null ? void 0 : pe.types[0]) !== "Files" || q.preventDefault();
  }, j = (q) => {
    r || t(1, l = !1);
  }, F = (q) => {
    if (q.type.startsWith("image")) {
      const pe = document.createElement("img");
      pe.classList.add("sf-upload-thumb"), pe.file = q, c.append(pe), h.push(pe);
      const Ge = new FileReader();
      Ge.onload = (_n) => {
        pe.src = _n.target.result;
      }, Ge.readAsDataURL(q);
    } else {
      const pe = document.createElement("div");
      pe.classList.add("sf-upload-file"), pe.title = q.name, pe.innerText = zr(q.name, ".") || Id(q.type, "/"), c.append(pe), h.push(pe);
    }
  }, I = (q) => {
    if (o.readOnly || (q.preventDefault(), t(1, l = !1), !q.dataTransfer))
      return;
    const { files: pe } = q.dataTransfer;
    t(4, u.files = pe, u), w();
  }, D = (q) => {
    q.stopPropagation(), t(4, u.files = null, u), h.forEach((pe) => pe.remove()), t(19, h = []), g = {}, t(0, a = ""), s.pathChanged(s.path, ip), s.pathChanged(s.path, a);
  }, C = (q) => {
    q.stopPropagation(), t(7, b = b === "uploader" ? "link" : "uploader");
  }, ee = () => {
    r || u.click();
  }, R = (q) => ["jpg", "jpeg", "png", "gif", "svg", "ico"].includes(zr(q, ".").toLowerCase());
  function X(q) {
    Ve[q ? "unshift" : "push"](() => {
      u = q, t(4, u);
    });
  }
  const tn = (q) => s.pathChanged(s.path, q.currentTarget.value || void 0);
  function Ze(q) {
    Ve[q ? "unshift" : "push"](() => {
      c = q, t(5, c);
    });
  }
  return e.$$set = (q) => {
    "params" in q && t(2, s = q.params), "schema" in q && t(3, o = q.schema), "value" in q && t(0, a = q.value), "highlight" in q && t(1, l = q.highlight);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*$pathProgress, params*/
    1048580 && t(6, m = i[s.path.join(".")] || {}), e.$$.dirty[0] & /*value, renderedThumbnails*/
    524289 && a && (a.startsWith("http") || a.startsWith("/")) && h.length > 0 && (h.forEach((q) => q.remove()), t(19, h = [])), e.$$.dirty[0] & /*schema, params*/
    12 && t(8, r = o.readOnly || s.containerReadOnly || !1);
  }, [
    a,
    l,
    s,
    o,
    u,
    c,
    m,
    b,
    r,
    p,
    A,
    M,
    W,
    j,
    I,
    D,
    C,
    ee,
    R,
    h,
    i,
    X,
    tn,
    Ze
  ];
}
class q3 extends Je {
  constructor(n) {
    super(), Ye(
      this,
      n,
      B3,
      D3,
      He,
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
function G3(e) {
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
      k(l, n, f), o || (a = K(
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
function z3(e) {
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
        $$slots: { default: [G3] },
        $$scope: { ctx: o }
      }
    };
  }
  return i && (n = Me(i, s(e))), {
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
          Q(f.$$.fragment, 1, 0, () => {
            we(f, 1);
          }), We();
        }
        i ? (n = Me(i, s(o)), Oe(n.$$.fragment), J(n.$$.fragment, 1), be(n, t.parentNode, t)) : n = null;
      } else
        i && n.$set(l);
    },
    i(o) {
      r || (n && J(n.$$.fragment, o), r = !0);
    },
    o(o) {
      n && Q(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && T(t), n && we(n, o);
    }
  };
}
function H3(e, n, t) {
  let { params: r } = n, { schema: i } = n, { value: s } = n;
  const o = (a) => r.pathChanged(r.path, a.currentTarget.value || void 0);
  return e.$$set = (a) => {
    "params" in a && t(0, r = a.params), "schema" in a && t(1, i = a.schema), "value" in a && t(2, s = a.value);
  }, [r, i, s, o];
}
class K3 extends Je {
  constructor(n) {
    super(), Ye(this, n, H3, z3, He, { params: 0, schema: 1, value: 2 });
  }
}
function kf(e, n, t) {
  const r = e.slice();
  return r[24] = n[t], r[26] = t, r;
}
function Pf(e, n) {
  let t, r, i, s = (
    /*getName*/
    n[13](
      /*item*/
      n[24]
    ) + ""
  ), o, a, l, f, u, c, p, m, h, g;
  function b() {
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
      t = N("li"), r = N("a"), i = N("h2"), o = an(s), l = x(), f = N("div"), u = N("span"), c = x(), p = N("span"), y(r, "href", a = /*getUrl*/
      n[12](
        /*item*/
        n[24],
        /*idx*/
        n[26]
      )), y(u, "class", "duplicate"), y(u, "title", "Duplicate this"), y(p, "class", "delete"), y(p, "title", "Delete this"), y(f, "class", "actions"), y(t, "class", m = /*getArrayBlockClasses*/
      n[14](
        /*item*/
        n[24]
      )), y(t, "draggable", !0), Pe(
        t,
        "drag-over",
        /*hovering*/
        n[3] === /*idx*/
        n[26]
      ), Dn(
        t,
        "background-image",
        /*item*/
        n[24].thumbnail ? `url('${/*item*/
        n[24].thumbnail}')` : ""
      ), this.first = t;
    },
    m(w, A) {
      k(w, t, A), G(t, r), G(r, i), G(i, o), G(t, l), G(t, f), G(f, u), G(f, c), G(f, p), h || (g = [
        K(u, "click", function() {
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
        K(p, "click", function() {
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
        K(t, "dragstart", function() {
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
        K(t, "drop", dr(function() {
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
        K(t, "dragover", dr(J3)),
        K(t, "dragenter", dr(b)),
        K(
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
      ) + "") && Tn(o, s), A & /*value*/
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
      9 && Pe(
        t,
        "drag-over",
        /*hovering*/
        n[3] === /*idx*/
        n[26]
      ), A & /*value*/
      1 && Dn(
        t,
        "background-image",
        /*item*/
        n[24].thumbnail ? `url('${/*item*/
        n[24].thumbnail}')` : ""
      );
    },
    d(w) {
      w && T(t), h = !1, Qe(g);
    }
  };
}
function Sf(e) {
  let n, t, r;
  return {
    c() {
      n = N("li"), y(n, "class", "array-block add"), Pe(
        n,
        "drag-over",
        /*hovering*/
        e[3] === /*lastIdx*/
        e[5]
      );
    },
    m(i, s) {
      k(i, n, s), t || (r = [
        K(
          n,
          "click",
          /*onAdd*/
          e[6]
        ),
        K(n, "drop", dr(function() {
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
        K(n, "dragover", dr(X3)),
        K(n, "dragenter", dr(
          /*dragenter_handler_1*/
          e[18]
        )),
        K(
          n,
          "dragleave",
          /*dragleave_handler_1*/
          e[19]
        )
      ], t = !0);
    },
    p(i, s) {
      e = i, s & /*hovering, lastIdx*/
      40 && Pe(
        n,
        "drag-over",
        /*hovering*/
        e[3] === /*lastIdx*/
        e[5]
      );
    },
    d(i) {
      i && T(n), t = !1, Qe(r);
    }
  };
}
function jf(e) {
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
    e[4]), n = new yr({ props: f }), Ve.push(() => Nn(n, "schema", l)), {
      c() {
        Oe(n.$$.fragment), r = x(), i = N("button"), i.textContent = "Add", y(i, "type", "button"), y(i, "class", "submit-button new-item-submit");
      },
      m(u, c) {
        be(n, u, c), k(u, r, c), k(u, i, c), s = !0, o || (a = K(
          i,
          "click",
          /*onAddUpdate*/
          e[7]
        ), o = !0);
      },
      p(u, c) {
        const p = {};
        c & /*params, value*/
        3 && (p.params = {
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
        1 && (p.value = /*value*/
        u[0][
          /*value*/
          u[0].length - 1
        ]), !t && c & /*addItemSchema*/
        16 && (t = !0, p.schema = /*addItemSchema*/
        u[4], nt(() => t = !1)), n.$set(p);
      },
      i(u) {
        s || (J(n.$$.fragment, u), s = !0);
      },
      o(u) {
        Q(n.$$.fragment, u), s = !1;
      },
      d(u) {
        we(n, u), u && T(r), u && T(i), o = !1, a();
      }
    }
  );
}
function Y3(e) {
  let n, t, r = [], i = /* @__PURE__ */ new Map(), s, o, a, l, f, u = (
    /*value*/
    e[0] || []
  );
  const c = (h) => (
    /*item*/
    h[24]
  );
  for (let h = 0; h < u.length; h += 1) {
    let g = kf(e, u, h), b = c(g);
    i.set(b, r[h] = Pf(b, g));
  }
  let p = !/*adding*/
  e[2] && Sf(e), m = (
    /*adding*/
    e[2] && jf(e)
  );
  return {
    c() {
      n = N("div"), t = N("ol");
      for (let h = 0; h < r.length; h += 1)
        r[h].c();
      s = x(), p && p.c(), o = x(), m && m.c(), y(n, "id", a = /*params*/
      e[1].path.join(".")), y(n, "class", l = "subset array-blocks depth-" + /*params*/
      e[1].path.length);
    },
    m(h, g) {
      k(h, n, g), G(n, t);
      for (let b = 0; b < r.length; b += 1)
        r[b] && r[b].m(t, null);
      G(t, s), p && p.m(t, null), G(n, o), m && m.m(n, null), f = !0;
    },
    p(h, [g]) {
      g & /*getArrayBlockClasses, value, hovering, onDragstart, onDrop, onDelete, onDuplicate, getUrl, getName*/
      32521 && (u = /*value*/
      h[0] || [], r = Jr(r, g, c, 1, h, u, i, t, oo, Pf, s, kf)), /*adding*/
      h[2] ? p && (p.d(1), p = null) : p ? p.p(h, g) : (p = Sf(h), p.c(), p.m(t, null)), /*adding*/
      h[2] ? m ? (m.p(h, g), g & /*adding*/
      4 && J(m, 1)) : (m = jf(h), m.c(), J(m, 1), m.m(n, null)) : m && (Fe(), Q(m, 1, 1, () => {
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
      Q(m), f = !1;
    },
    d(h) {
      h && T(n);
      for (let g = 0; g < r.length; g += 1)
        r[g].d();
      p && p.d(), m && m.d();
    }
  };
}
const J3 = () => !1, X3 = () => !1;
function Z3(e, n, t) {
  let r, { params: i } = n, { schema: s } = n, { value: o } = n;
  if (s.type !== "array" || s.items.type !== "object")
    throw new Error("ArrayBlocks editor can only be used on an array with items of type=object");
  let a = !1, l = !1;
  const f = () => {
    i.pathChanged(i.path, [...o || [], Ld(s.items)]), t(2, a = !0);
  }, u = async () => {
    var X;
    const C = o.length - 1, ee = [...i.path, C.toString()], R = (X = i.componentContext) == null ? void 0 : X.doUploads;
    R && await R(ee.join(".")), i.pathChanged(ee, o[C]), t(2, a = !1);
  }, c = (C) => () => {
    i.pathChanged(i.path, [...o.slice(0, C), ...o.slice(C + 1)]);
  }, p = (C) => () => {
    i.pathChanged(i.path, [
      ...o.slice(0, C),
      o[C],
      JSON.parse(JSON.stringify(o[C])),
      ...o.slice(C + 1)
    ]);
  }, m = (C) => (ee) => {
    ee.dataTransfer.effectAllowed = "move", ee.dataTransfer.dropEffect = "move", ee.dataTransfer.setData("text/plain", C.toString());
  }, h = (C) => (ee) => {
    ee.dataTransfer.dropEffect = "move";
    const R = parseInt(ee.dataTransfer.getData("text/plain"));
    R < C ? i.pathChanged(i.path, [
      ...o.slice(0, R),
      ...o.slice(R + 1, C),
      o[R],
      ...o.slice(C)
    ]) : C < R && i.pathChanged(i.path, [
      ...o.slice(0, C),
      o[R],
      ...o.slice(C, R),
      ...o.slice(R + 1)
    ]), t(3, l = !1);
  };
  let g = s.effectiveUrl || location.href;
  g.includes("#") && (g = g.split("#")[0]), g.includes("?") && (g = g.split("?")[0]);
  const b = (C, ee) => {
    let R = "";
    return s.itemPathPattern && (R = s.itemPathPattern.replace(/\$\{([^}]*)\}/gi, (tn, Ze) => encodeURIComponent((Ze === "" ? C : d.get(C, Ze.split("."))) || ""))), R || (R = encodeURIComponent(C.name || C.title || "")), HT(g, R);
  }, w = (C) => C.name || C.title || "", A = (C) => {
    const R = w(C).split(" "), X = R.reduce((Ze, q) => q.length > Ze ? q.length : Ze, 0), tn = R.length;
    return X > 18 || tn > 13 ? "array-block xlarge" : X > 14 || tn > 9 ? "array-block large" : X > 10 || tn > 6 ? "array-block medium" : "array-block small";
  };
  let M;
  const W = (C) => t(3, l = C), j = () => t(3, l = !1), F = () => t(3, l = r), I = () => t(3, l = !1);
  function D(C) {
    M = C, t(4, M), t(15, s);
  }
  return e.$$set = (C) => {
    "params" in C && t(1, i = C.params), "schema" in C && t(15, s = C.schema), "value" in C && t(0, o = C.value);
  }, e.$$.update = () => {
    var C;
    if (e.$$.dirty & /*value*/
    1 && t(0, o = o || []), e.$$.dirty & /*schema*/
    32768) {
      const ee = Object.fromEntries(Object.entries(s.items.properties).filter(([R, X]) => X.type !== "array"));
      t(4, M = {
        ...s.items,
        type: "object",
        properties: ee,
        required: ((C = s.items.required) == null ? void 0 : C.filter((R) => Object.keys(ee).includes(R))) || []
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
    p,
    m,
    h,
    b,
    w,
    A,
    s,
    W,
    j,
    F,
    I,
    D
  ];
}
class V3 extends Je {
  constructor(n) {
    super(), Ye(this, n, Z3, Y3, He, { params: 1, schema: 15, value: 0 });
  }
}
function If(e, n, t) {
  const r = e.slice();
  return r[18] = n[t], r;
}
function Q3(e) {
  var s, o;
  let n, t = (
    /*selected*/
    (((s = e[4]) == null ? void 0 : s.text) || "") + ""
  ), r, i = (
    /*selected*/
    ((o = e[4]) == null ? void 0 : o.image) && Cf(e)
  );
  return {
    c() {
      i && i.c(), n = x(), r = an(t);
    },
    m(a, l) {
      i && i.m(a, l), k(a, n, l), k(a, r, l);
    },
    p(a, l) {
      var f, u;
      /*selected*/
      (f = a[4]) != null && f.image ? i ? i.p(a, l) : (i = Cf(a), i.c(), i.m(n.parentNode, n)) : i && (i.d(1), i = null), l & /*selected*/
      16 && t !== (t = /*selected*/
      (((u = a[4]) == null ? void 0 : u.text) || "") + "") && Tn(r, t);
    },
    d(a) {
      i && i.d(a), a && T(n), a && T(r);
    }
  };
}
function x3(e) {
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
        K(
          n,
          "input",
          /*input_1_input_handler*/
          e[13]
        ),
        K(
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
      i && T(n), e[14](null), t = !1, Qe(r);
    }
  };
}
function Cf(e) {
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
function Lf(e) {
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
function Mf(e, n) {
  let t, r, i = (
    /*item*/
    n[18].text + ""
  ), s, o, a, l, f = (
    /*item*/
    n[18].image && Lf(n)
  );
  return {
    key: e,
    first: null,
    c() {
      t = N("div"), f && f.c(), r = x(), s = an(i), o = x(), Pe(
        t,
        "selected",
        /*value*/
        n[0] === /*item*/
        n[18].text
      ), this.first = t;
    },
    m(u, c) {
      k(u, t, c), f && f.m(t, null), G(t, r), G(t, s), G(t, o), a || (l = K(t, "click", function() {
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
      n[18].image ? f ? f.p(n, c) : (f = Lf(n), f.c(), f.m(t, r)) : f && (f.d(1), f = null), c & /*options*/
      32 && i !== (i = /*item*/
      n[18].text + "") && Tn(s, i), c & /*value, options*/
      33 && Pe(
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
function eP(e) {
  let n, t, r, i, s = [], o = /* @__PURE__ */ new Map(), a, l;
  function f(h, g) {
    return (
      /*inputState*/
      h[3] === "searching" ? x3 : Q3
    );
  }
  let u = f(e), c = u(e), p = (
    /*options*/
    e[5]
  );
  const m = (h) => (
    /*item*/
    h[18].id
  );
  for (let h = 0; h < p.length; h += 1) {
    let g = If(e, p, h), b = m(g);
    o.set(b, s[h] = Mf(b, g));
  }
  return {
    c() {
      n = N("div"), t = N("div"), c.c(), r = x(), i = N("div");
      for (let h = 0; h < s.length; h += 1)
        s[h].c();
      y(t, "class", "sf-selected-item input"), y(i, "class", "sf-items"), Dn(
        i,
        "display",
        /*dropdownState*/
        e[7] === "open" ? "block" : "none"
      ), y(n, "class", "sf-autocomplete"), Pe(
        n,
        "readonly",
        /*readOnly*/
        e[9]
      );
    },
    m(h, g) {
      k(h, n, g), G(n, t), c.m(t, null), G(n, r), G(n, i);
      for (let b = 0; b < s.length; b += 1)
        s[b] && s[b].m(i, null);
      a || (l = K(
        t,
        "click",
        /*toggleDropDown*/
        e[10]
      ), a = !0);
    },
    p(h, g) {
      u === (u = f(h)) && c ? c.p(h, g) : (c.d(1), c = u(h), c && (c.c(), c.m(t, null))), g & /*value, options, handleSelect*/
      2081 && (p = /*options*/
      h[5], s = Jr(s, g, m, 1, h, p, o, i, oo, Mf, null, If)), g & /*dropdownState*/
      128 && Dn(
        i,
        "display",
        /*dropdownState*/
        h[7] === "open" ? "block" : "none"
      ), g & /*readOnly*/
      512 && Pe(
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
function nP(e) {
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
        $$slots: { default: [eP] },
        $$scope: { ctx: o }
      }
    };
  }
  return i && (n = Me(i, s(e))), {
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
          Q(f.$$.fragment, 1, 0, () => {
            we(f, 1);
          }), We();
        }
        i ? (n = Me(i, s(o)), Oe(n.$$.fragment), J(n.$$.fragment, 1), be(n, t.parentNode, t)) : n = null;
      } else
        i && n.$set(l);
    },
    i(o) {
      r || (n && J(n.$$.fragment, o), r = !0);
    },
    o(o) {
      n && Q(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && T(t), n && we(n, o);
    }
  };
}
function tP(e, n, t) {
  let r, { params: i } = n, { schema: s } = n, { value: o } = n, a = "showing-value", l = "", f = "closed", u, c = [], p, m = null, h;
  const g = (j) => {
    if (p) {
      m && clearTimeout(m);
      const F = new URL(p, location.href);
      j && F.searchParams.append("match", j), m = setTimeout(
        () => fetch(F.toString(), { credentials: "include" }).then((I) => I.json()).then((I) => {
          I.length > 0 && typeof I[0] != "object" ? t(5, c = I.map((D) => ({ id: D, text: D, image: "" }))) : t(5, c = I), t(7, f = "open");
        }),
        100
      );
    }
  }, b = async () => {
    t(7, f = f === "open" ? "closed" : "open"), f === "open" && (t(3, a = "searching"), await bi(), h.focus());
  }, w = (j) => () => {
    r || (t(0, o = j.id), i.pathChanged(i.path, j.id), t(3, a = "showing-value"), t(7, f = "closed"));
  }, A = (j) => {
    var F;
    g((F = j.currentTarget) == null ? void 0 : F.value);
  };
  function M() {
    l = this.value, t(6, l);
  }
  function W(j) {
    Ve[j ? "unshift" : "push"](() => {
      h = j, t(8, h);
    });
  }
  return e.$$set = (j) => {
    "params" in j && t(1, i = j.params), "schema" in j && t(2, s = j.schema), "value" in j && t(0, o = j.value);
  }, e.$$.update = () => {
    e.$$.dirty & /*schema*/
    4 && (p = s.url || ""), e.$$.dirty & /*params, schema*/
    6 && t(9, r = i.containerReadOnly || s.readOnly || !1), e.$$.dirty & /*options, value*/
    33 && t(4, u = c.find((j) => j.id === o)), e.$$.dirty & /*selected, inputState*/
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
    b,
    w,
    A,
    M,
    W
  ];
}
class rP extends Je {
  constructor(n) {
    super(), Ye(this, n, tP, nP, He, { params: 1, schema: 2, value: 0 });
  }
}
function iP(e) {
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
    i: en,
    o: en,
    d(s) {
      s && T(n);
    }
  };
}
function sP(e, n, t) {
  let { params: r } = n, { value: i } = n;
  return e.$$set = (s) => {
    "params" in s && t(0, r = s.params), "value" in s && t(1, i = s.value);
  }, [r, i];
}
class oP extends Je {
  constructor(n) {
    super(), Ye(this, n, sP, iP, He, { params: 0, value: 1 });
  }
}
function Nf(e, n, t) {
  const r = e.slice();
  return r[35] = n[t], r[37] = t, r;
}
function Ff(e, n, t) {
  const r = e.slice();
  return r[38] = n[t], r;
}
function Wf(e, n, t) {
  const r = e.slice();
  return r[41] = n[t], r[37] = t, r;
}
function Df(e) {
  let n, t, r, i, s, o = (
    /*params*/
    (e[2].collapsible || /*legendText*/
    e[17]) && Uf(e)
  ), a = (
    /*collapserOpenState*/
    e[9] === "open" && Gf(e)
  );
  return {
    c() {
      n = N("fieldset"), o && o.c(), t = x(), a && a.c(), y(n, "name", r = /*params*/
      e[2].path.join(".")), y(n, "class", i = "subset array list-detail depth-" + /*params*/
      e[2].path.length);
    },
    m(l, f) {
      k(l, n, f), o && o.m(n, null), G(n, t), a && a.m(n, null), s = !0;
    },
    p(l, f) {
      /*params*/
      l[2].collapsible || /*legendText*/
      l[17] ? o ? o.p(l, f) : (o = Uf(l), o.c(), o.m(n, t)) : o && (o.d(1), o = null), /*collapserOpenState*/
      l[9] === "open" ? a ? (a.p(l, f), f[0] & /*collapserOpenState*/
      512 && J(a, 1)) : (a = Gf(l), a.c(), J(a, 1), a.m(n, null)) : a && (Fe(), Q(a, 1, 1, () => {
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
      Q(a), s = !1;
    },
    d(l) {
      l && T(n), o && o.d(), a && a.d();
    }
  };
}
function Uf(e) {
  let n, t, r, i = En(
    /*legendText*/
    e[17]
  ) + "", s, o = (
    /*params*/
    e[2].collapsible && Bf(e)
  ), a = (
    /*schema*/
    e[0].description && qf(e)
  );
  return {
    c() {
      n = N("legend"), o && o.c(), t = x(), r = N("span"), s = x(), a && a.c(), y(r, "class", "subset-label-title object-label-title"), y(n, "class", "subset-label array-label");
    },
    m(l, f) {
      k(l, n, f), o && o.m(n, null), G(n, t), G(n, r), r.innerHTML = i, G(n, s), a && a.m(n, null);
    },
    p(l, f) {
      /*params*/
      l[2].collapsible ? o ? o.p(l, f) : (o = Bf(l), o.c(), o.m(n, t)) : o && (o.d(1), o = null), f[0] & /*legendText*/
      131072 && i !== (i = En(
        /*legendText*/
        l[17]
      ) + "") && (r.innerHTML = i), /*schema*/
      l[0].description ? a ? a.p(l, f) : (a = qf(l), a.c(), a.m(n, null)) : a && (a.d(1), a = null);
    },
    d(l) {
      l && T(n), o && o.d(), a && a.d();
    }
  };
}
function Bf(e) {
  let n, t, r, i;
  return {
    c() {
      n = N("span"), y(n, "class", t = "collapser " + /*collapserOpenState*/
      e[9]);
    },
    m(s, o) {
      k(s, n, o), r || (i = K(
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
function qf(e) {
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
function Gf(e) {
  let n, t, r, i = (
    /*controls*/
    e[14].includes("add")
  ), s, o;
  const a = [lP, aP], l = [];
  function f(c, p) {
    return (
      /*emptyText*/
      c[15] ? 1 : 0
    );
  }
  n = f(e), t = l[n] = a[n](e);
  let u = i && xf(e);
  return {
    c() {
      t.c(), r = x(), u && u.c(), s = Ce();
    },
    m(c, p) {
      l[n].m(c, p), k(c, r, p), u && u.m(c, p), k(c, s, p), o = !0;
    },
    p(c, p) {
      let m = n;
      n = f(c), n === m ? l[n].p(c, p) : (Fe(), Q(l[m], 1, 1, () => {
        l[m] = null;
      }), We(), t = l[n], t ? t.p(c, p) : (t = l[n] = a[n](c), t.c()), J(t, 1), t.m(r.parentNode, r)), p[0] & /*controls*/
      16384 && (i = /*controls*/
      c[14].includes("add")), i ? u ? u.p(c, p) : (u = xf(c), u.c(), u.m(s.parentNode, s)) : u && (u.d(1), u = null);
    },
    i(c) {
      o || (J(t), o = !0);
    },
    o(c) {
      Q(t), o = !1;
    },
    d(c) {
      l[n].d(c), c && T(r), u && u.d(c), c && T(s);
    }
  };
}
function aP(e) {
  let n, t;
  return {
    c() {
      n = N("div"), t = an(
        /*emptyText*/
        e[15]
      ), y(n, "class", "emptyText");
    },
    m(r, i) {
      k(r, n, i), G(n, t);
    },
    p(r, i) {
      i[0] & /*emptyText*/
      32768 && Tn(
        t,
        /*emptyText*/
        r[15]
      );
    },
    i: en,
    o: en,
    d(r) {
      r && T(n);
    }
  };
}
function lP(e) {
  let n, t, r, i, s, o;
  const a = [uP, fP], l = [];
  function f(u, c) {
    return (
      /*mode*/
      u[3] === "list" ? 0 : 1
    );
  }
  return t = f(e), r = l[t] = a[t](e), {
    c() {
      n = N("div"), r.c(), y(n, "class", "table-container"), y(n, "tabindex", "0"), Dn(
        n,
        "grid-template-columns",
        /*gridTemplateColumns*/
        e[13]
      );
    },
    m(u, c) {
      k(u, n, c), l[t].m(n, null), i = !0, s || (o = [
        K(
          n,
          "keyup",
          /*onKey*/
          e[22]
        ),
        K(
          n,
          "click",
          /*onClick*/
          e[23]
        )
      ], s = !0);
    },
    p(u, c) {
      let p = t;
      t = f(u), t === p ? l[t].p(u, c) : (Fe(), Q(l[p], 1, 1, () => {
        l[p] = null;
      }), We(), r = l[t], r ? r.p(u, c) : (r = l[t] = a[t](u), r.c()), J(r, 1), r.m(n, null)), c[0] & /*gridTemplateColumns*/
      8192 && Dn(
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
      Q(r), i = !1;
    },
    d(u) {
      u && T(n), l[t].d(), s = !1, Qe(o);
    }
  };
}
function fP(e) {
  let n, t, r, i, s, o, a, l;
  function f(c) {
    e[32](c);
  }
  let u = {
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
  return (
    /*schema*/
    e[0].items !== void 0 && (u.schema = /*schema*/
    e[0].items), i = new yr({ props: u }), Ve.push(() => Nn(i, "schema", f)), {
      c() {
        n = N("button"), n.textContent = "List", t = x(), r = N("div"), Oe(i.$$.fragment), y(n, "class", "to-list"), y(n, "type", "button"), y(r, "class", "element");
      },
      m(c, p) {
        k(c, n, p), e[31](n), k(c, t, p), k(c, r, p), be(i, r, null), o = !0, a || (l = K(
          n,
          "click",
          /*onModeList*/
          e[24]
        ), a = !0);
      },
      p(c, p) {
        const m = {};
        p[0] & /*params, selectedIdx, schema*/
        1029 && (m.params = {
          .../*params*/
          c[2],
          path: [
            .../*params*/
            c[2].path,
            /*selectedIdx*/
            c[10].toString()
          ],
          containerParent: "array",
          containerReadOnly: (
            /*params*/
            c[2].containerReadOnly || /*schema*/
            c[0].readOnly || !1
          )
        }), p[0] & /*selectedValue*/
        4096 && (m.value = /*selectedValue*/
        c[12]), !s && p[0] & /*schema*/
        1 && (s = !0, m.schema = /*schema*/
        c[0].items, nt(() => s = !1)), i.$set(m);
      },
      i(c) {
        o || (J(i.$$.fragment, c), o = !0);
      },
      o(c) {
        Q(i.$$.fragment, c), o = !1;
      },
      d(c) {
        c && T(n), e[31](null), c && T(t), c && T(r), we(i), a = !1, l();
      }
    }
  );
}
function uP(e) {
  let n, t, r = [], i = /* @__PURE__ */ new Map(), s, o = (
    /*listFields*/
    e[6]
  ), a = [];
  for (let c = 0; c < o.length; c += 1)
    a[c] = zf(Wf(e, o, c));
  let l = !/*readOnly*/
  e[7] && Hf(), f = (
    /*rowView*/
    e[4]
  );
  const u = (c) => (
    /*idx*/
    c[37]
  );
  for (let c = 0; c < f.length; c += 1) {
    let p = Nf(e, f, c), m = u(p);
    i.set(m, r[c] = Qf(m, p));
  }
  return {
    c() {
      for (let c = 0; c < a.length; c += 1)
        a[c].c();
      n = x(), l && l.c(), t = x();
      for (let c = 0; c < r.length; c += 1)
        r[c].c();
      s = Ce();
    },
    m(c, p) {
      for (let m = 0; m < a.length; m += 1)
        a[m] && a[m].m(c, p);
      k(c, n, p), l && l.m(c, p), k(c, t, p);
      for (let m = 0; m < r.length; m += 1)
        r[m] && r[m].m(c, p);
      k(c, s, p);
    },
    p(c, p) {
      if (p[0] & /*headingClass, sort, onSort, listProps, onSortKey, listFields*/
      36700512) {
        o = /*listFields*/
        c[6];
        let m;
        for (m = 0; m < o.length; m += 1) {
          const h = Wf(c, o, m);
          a[m] ? a[m].p(h, p) : (a[m] = zf(h), a[m].c(), a[m].m(n.parentNode, n));
        }
        for (; m < a.length; m += 1)
          a[m].d(1);
        a.length = o.length;
      }
      /*readOnly*/
      c[7] ? l && (l.d(1), l = null) : l || (l = Hf(), l.c(), l.m(t.parentNode, t)), p[0] & /*rowView, params, value, controls, sort, readOnly, selectedIdx, onSelect, listProps*/
      542134 && (f = /*rowView*/
      c[4], r = Jr(r, p, u, 1, c, f, i, s.parentNode, oo, Qf, s, Nf));
    },
    i: en,
    o: en,
    d(c) {
      Yr(a, c), c && T(n), l && l.d(c), c && T(t);
      for (let p = 0; p < r.length; p += 1)
        r[p].d(c);
      c && T(s);
    }
  };
}
function zf(e) {
  let n, t = (
    /*fieldName*/
    e[41] + ""
  ), r, i, s, o;
  return {
    c() {
      n = N("div"), r = an(t), y(n, "class", i = /*headingClass*/
      e[25](
        /*idx*/
        e[37],
        /*sort*/
        e[5]
      )), y(n, "tabindex", "0");
    },
    m(a, l) {
      k(a, n, l), G(n, r), s || (o = [
        K(n, "click", Wn(function() {
          Be(
            /*onSort*/
            e[20](
              /*listProps*/
              e[8][
                /*idx*/
                e[37]
              ]
            )
          ) && e[20](
            /*listProps*/
            e[8][
              /*idx*/
              e[37]
            ]
          ).apply(this, arguments);
        })),
        K(n, "keyup", Wn(function() {
          Be(
            /*onSortKey*/
            e[21](
              /*listProps*/
              e[8][
                /*idx*/
                e[37]
              ]
            )
          ) && e[21](
            /*listProps*/
            e[8][
              /*idx*/
              e[37]
            ]
          ).apply(this, arguments);
        }))
      ], s = !0);
    },
    p(a, l) {
      e = a, l[0] & /*listFields*/
      64 && t !== (t = /*fieldName*/
      e[41] + "") && Tn(r, t), l[0] & /*sort*/
      32 && i !== (i = /*headingClass*/
      e[25](
        /*idx*/
        e[37],
        /*sort*/
        e[5]
      )) && y(n, "class", i);
    },
    d(a) {
      a && T(n), s = !1, Qe(o);
    }
  };
}
function Hf(e) {
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
function Kf(e) {
  let n, t = (
    /*item*/
    (e[35][
      /*propName*/
      e[38]
    ] === void 0 ? " " : (
      /*item*/
      e[35][
        /*propName*/
        e[38]
      ]
    )) + ""
  ), r;
  return {
    c() {
      n = N("div"), r = an(t), y(n, "class", "item");
    },
    m(i, s) {
      k(i, n, s), G(n, r);
    },
    p(i, s) {
      s[0] & /*rowView, listProps*/
      272 && t !== (t = /*item*/
      (i[35][
        /*propName*/
        i[38]
      ] === void 0 ? " " : (
        /*item*/
        i[35][
          /*propName*/
          i[38]
        ]
      )) + "") && Tn(r, t);
    },
    d(i) {
      i && T(n);
    }
  };
}
function Yf(e) {
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
    e[37] > 0
  ), l, f = (
    /*controls*/
    e[14].includes("reorder") && /*sort*/
    e[5] === null && /*idx*/
    e[37] < /*value*/
    (e[1] || []).length - 1
  ), u, c = r && Jf(e), p = s && Xf(e), m = a && Zf(e), h = f && Vf(e);
  return {
    c() {
      n = N("div"), t = N("div"), c && c.c(), i = x(), p && p.c(), o = x(), m && m.c(), l = x(), h && h.c(), u = x(), y(t, "class", "row-buttons"), y(n, "class", "array-buttons");
    },
    m(g, b) {
      k(g, n, b), G(n, t), c && c.m(t, null), G(t, i), p && p.m(t, null), G(t, o), m && m.m(t, null), G(t, l), h && h.m(t, null), G(n, u);
    },
    p(g, b) {
      b[0] & /*controls*/
      16384 && (r = /*controls*/
      g[14].includes("delete")), r ? c ? c.p(g, b) : (c = Jf(g), c.c(), c.m(t, i)) : c && (c.d(1), c = null), b[0] & /*controls*/
      16384 && (s = /*controls*/
      g[14].includes("duplicate")), s ? p ? p.p(g, b) : (p = Xf(g), p.c(), p.m(t, o)) : p && (p.d(1), p = null), b[0] & /*controls, sort, rowView*/
      16432 && (a = /*controls*/
      g[14].includes("reorder") && /*sort*/
      g[5] === null && /*idx*/
      g[37] > 0), a ? m ? m.p(g, b) : (m = Zf(g), m.c(), m.m(t, l)) : m && (m.d(1), m = null), b[0] & /*controls, sort, rowView, value*/
      16434 && (f = /*controls*/
      g[14].includes("reorder") && /*sort*/
      g[5] === null && /*idx*/
      g[37] < /*value*/
      (g[1] || []).length - 1), f ? h ? h.p(g, b) : (h = Vf(g), h.c(), h.m(t, null)) : h && (h.d(1), h = null);
    },
    d(g) {
      g && T(n), c && c.d(), p && p.d(), m && m.d(), h && h.d();
    }
  };
}
function Jf(e) {
  let n, t, r;
  return {
    c() {
      n = N("button"), y(n, "type", "button"), y(n, "class", "list-control delete"), y(n, "title", "delete");
    },
    m(i, s) {
      k(i, n, s), t || (r = [
        K(n, "click", Wn(function() {
          Be(Li(
            /*idx*/
            e[37],
            /*params*/
            e[2],
            /*value*/
            e[1]
          )) && Li(
            /*idx*/
            e[37],
            /*params*/
            e[2],
            /*value*/
            e[1]
          ).apply(this, arguments);
        })),
        K(n, "keyup", Wn(
          /*keyup_handler*/
          e[30]
        ))
      ], t = !0);
    },
    p(i, s) {
      e = i;
    },
    d(i) {
      i && T(n), t = !1, Qe(r);
    }
  };
}
function Xf(e) {
  let n, t, r;
  return {
    c() {
      n = N("button"), y(n, "type", "button"), y(n, "class", "list-control duplicate"), y(n, "title", "duplicate");
    },
    m(i, s) {
      k(i, n, s), t || (r = [
        K(n, "click", Wn(function() {
          Be(Mi(
            /*idx*/
            e[37],
            /*params*/
            e[2],
            /*value*/
            e[1]
          )) && Mi(
            /*idx*/
            e[37],
            /*params*/
            e[2],
            /*value*/
            e[1]
          ).apply(this, arguments);
        })),
        K(n, "keyup", Wn(
          /*keyup_handler_1*/
          e[29]
        ))
      ], t = !0);
    },
    p(i, s) {
      e = i;
    },
    d(i) {
      i && T(n), t = !1, Qe(r);
    }
  };
}
function Zf(e) {
  let n, t, r;
  return {
    c() {
      n = N("button"), y(n, "type", "button"), y(n, "class", "list-control up"), y(n, "title", "move up");
    },
    m(i, s) {
      k(i, n, s), t || (r = [
        K(n, "click", Wn(function() {
          Be(Ni(
            /*idx*/
            e[37],
            /*params*/
            e[2],
            /*value*/
            e[1]
          )) && Ni(
            /*idx*/
            e[37],
            /*params*/
            e[2],
            /*value*/
            e[1]
          ).apply(this, arguments);
        })),
        K(n, "keyup", Wn(
          /*keyup_handler_2*/
          e[28]
        ))
      ], t = !0);
    },
    p(i, s) {
      e = i;
    },
    d(i) {
      i && T(n), t = !1, Qe(r);
    }
  };
}
function Vf(e) {
  let n, t, r;
  return {
    c() {
      n = N("button"), y(n, "type", "button"), y(n, "class", "list-control down"), y(n, "title", "move down");
    },
    m(i, s) {
      k(i, n, s), t || (r = [
        K(n, "click", Wn(function() {
          Be(Fi(
            /*idx*/
            e[37],
            /*params*/
            e[2],
            /*value*/
            e[1]
          )) && Fi(
            /*idx*/
            e[37],
            /*params*/
            e[2],
            /*value*/
            e[1]
          ).apply(this, arguments);
        })),
        K(n, "keyup", Wn(
          /*keyup_handler_3*/
          e[27]
        ))
      ], t = !0);
    },
    p(i, s) {
      e = i;
    },
    d(i) {
      i && T(n), t = !1, Qe(r);
    }
  };
}
function Qf(e, n) {
  let t, r, i, s, o, a = (
    /*listProps*/
    n[8]
  ), l = [];
  for (let u = 0; u < a.length; u += 1)
    l[u] = Kf(Ff(n, a, u));
  let f = !/*readOnly*/
  n[7] && Yf(n);
  return {
    key: e,
    first: null,
    c() {
      t = N("div");
      for (let u = 0; u < l.length; u += 1)
        l[u].c();
      r = x(), f && f.c(), i = Ce(), y(t, "class", "row-wrapper"), Pe(
        t,
        "selected",
        /*idx*/
        n[37] === /*selectedIdx*/
        n[10]
      ), this.first = t;
    },
    m(u, c) {
      k(u, t, c);
      for (let p = 0; p < l.length; p += 1)
        l[p] && l[p].m(t, null);
      k(u, r, c), f && f.m(u, c), k(u, i, c), s || (o = K(t, "click", function() {
        Be(
          /*onSelect*/
          n[19](
            /*idx*/
            n[37]
          )
        ) && n[19](
          /*idx*/
          n[37]
        ).apply(this, arguments);
      }), s = !0);
    },
    p(u, c) {
      if (n = u, c[0] & /*rowView, listProps*/
      272) {
        a = /*listProps*/
        n[8];
        let p;
        for (p = 0; p < a.length; p += 1) {
          const m = Ff(n, a, p);
          l[p] ? l[p].p(m, c) : (l[p] = Kf(m), l[p].c(), l[p].m(t, null));
        }
        for (; p < l.length; p += 1)
          l[p].d(1);
        l.length = a.length;
      }
      c[0] & /*rowView, selectedIdx*/
      1040 && Pe(
        t,
        "selected",
        /*idx*/
        n[37] === /*selectedIdx*/
        n[10]
      ), /*readOnly*/
      n[7] ? f && (f.d(1), f = null) : f ? f.p(n, c) : (f = Yf(n), f.c(), f.m(i.parentNode, i));
    },
    d(u) {
      u && T(t), Yr(l, u), u && T(r), f && f.d(u), u && T(i), s = !1, o();
    }
  };
}
function xf(e) {
  let n, t, r;
  return {
    c() {
      n = N("button"), y(n, "type", "button"), y(n, "class", "list-control add"), y(n, "title", "add item");
    },
    m(i, s) {
      k(i, n, s), t || (r = K(n, "click", function() {
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
function cP(e) {
  let n, t, r = (
    /*showWrapper*/
    e[16] && Df(e)
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
      65536 && J(r, 1)) : (r = Df(i), r.c(), J(r, 1), r.m(n.parentNode, n)) : r && (Fe(), Q(r, 1, 1, () => {
        r = null;
      }), We());
    },
    i(i) {
      t || (J(r), t = !0);
    },
    o(i) {
      Q(r), t = !1;
    },
    d(i) {
      r && r.d(i), i && T(n);
    }
  };
}
function dP(e, n, t) {
  let r, i, s, o, a, l, f, u, c, p, { params: m } = n, { schema: h } = n, { value: g } = n, b = m.path.length === 0 || !m.collapsible ? "open" : "closed", w = -1, A = "list", M = [], W, j = !1, F = null;
  if (h.type !== "array" || h.items.type !== "object")
    throw new Error("ListDetail editor can only be used on an array with items of type=object");
  const I = () => {
    t(9, b = b === "open" ? "closed" : "open");
  }, D = (z) => async () => {
    t(3, A = "detail"), t(10, w = g.findIndex((ze) => ze === M[z])), t(12, F = g[w]), await bi(), W == null || W.focus();
  }, C = (z) => () => {
    (o == null ? void 0 : o.field) === z && o.direction === "desc" ? t(5, o = null) : t(5, o = {
      field: z,
      direction: (o == null ? void 0 : o.field) === z ? "desc" : "asc"
    });
  }, ee = (z) => (ze) => {
    ze.key === "Enter" && ((o == null ? void 0 : o.field) === z && o.direction === "desc" ? t(5, o = null) : t(5, o = {
      field: z,
      direction: (o == null ? void 0 : o.field) === z ? "desc" : "asc"
    }));
  }, R = async (z) => {
    A === "list" && !j && (z.target, console.log(`key ${z.key} selectedIdx ${w} len ${g.length}`), z.key === "ArrowDown" && w + 1 < g.length ? (t(10, w += 1), await bi()) : z.key === "ArrowUp" && w > 0 ? t(10, w -= 1) : z.key === "Enter" && D(w)()), j = !1;
  }, X = (z) => {
    A === "list" && z.currentTarget.focus();
  }, tn = async () => {
    t(3, A = "list"), j = !0, await bi(), t(10, w = M.findIndex((z) => z === F));
  }, Ze = (z) => (ze, E) => ze[z.field] < E[z.field] ? z.direction === "asc" ? -1 : 1 : ze[z.field] > E[z.field] ? z.direction === "desc" ? -1 : 1 : 0, q = (z, ze) => "heading " + (i[z] !== (ze == null ? void 0 : ze.field) ? "" : ze == null ? void 0 : ze.direction);
  function pe(z) {
    di.call(this, e, z);
  }
  function Ge(z) {
    di.call(this, e, z);
  }
  function _n(z) {
    di.call(this, e, z);
  }
  function xn(z) {
    di.call(this, e, z);
  }
  function Et(z) {
    Ve[z ? "unshift" : "push"](() => {
      W = z, t(11, W);
    });
  }
  function Tt(z) {
    e.$$.not_equal(h.items, z) && (h.items = z, t(0, h));
  }
  return e.$$set = (z) => {
    "params" in z && t(2, m = z.params), "schema" in z && t(0, h = z.schema), "value" in z && t(1, g = z.value);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*value*/
    2 && t(1, g = g || []), e.$$.dirty[0] & /*schema*/
    1 && t(26, r = h.items || {}), e.$$.dirty[0] & /*itemSchema*/
    67108864 && t(8, i = Array.isArray(r.headings) && typeof r.headings[0] == "string" && r.headings || Object.keys(r.properties)), e.$$.dirty[0] & /*listProps, itemSchema, params*/
    67109124 && t(6, s = i.map((z) => Gt(r.properties[z], [...m.path, "0", z]))), e.$$.dirty[0] & /*itemSchema*/
    67108864 && t(5, o = r.defaultSort || null), e.$$.dirty[0] & /*schema, params*/
    5 && t(17, a = Gt(h, m.path)), e.$$.dirty[0] & /*value, schema*/
    3 && t(16, l = g && g.length > 0 || h.emptyDisplay !== !1), e.$$.dirty[0] & /*value, schema*/
    3 && t(15, f = (!g || g.length === 0) && typeof h.emptyDisplay == "string" && h.emptyDisplay), e.$$.dirty[0] & /*params, schema*/
    5 && t(7, u = m.containerReadOnly || h.readOnly || !1), e.$$.dirty[0] & /*schema, readOnly*/
    129 && t(14, c = h.controls === void 0 ? u ? "" : "add, reorder, delete, duplicate" : h.controls), e.$$.dirty[0] & /*mode, listFields*/
    72 && t(13, p = A === "list" ? `repeat(${s.length}, auto) 50px` : null), e.$$.dirty[0] & /*value, sort, rowView*/
    50 && (t(4, M = [...g]), o && M.sort(Ze(o)));
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
    b,
    w,
    W,
    F,
    p,
    c,
    f,
    l,
    a,
    I,
    D,
    C,
    ee,
    R,
    X,
    tn,
    q,
    r,
    pe,
    Ge,
    _n,
    xn,
    Et,
    Tt
  ];
}
class pP extends Je {
  constructor(n) {
    super(), Ye(this, n, dP, cP, He, { params: 2, schema: 0, value: 1 }, null, [-1, -1]);
  }
}
function hP(e) {
  let n, t, r, i, s, o;
  return {
    c() {
      n = N("input"), y(n, "id", t = /*params*/
      e[0].path.join(".")), y(n, "name", r = /*params*/
      e[0].path.join(".")), y(n, "class", "currency"), y(n, "type", gP), n.value = /*formattedString*/
      e[2], n.disabled = i = /*schema*/
      e[1].readOnly || /*params*/
      e[0].containerReadOnly;
    },
    m(a, l) {
      k(a, n, l), s || (o = K(
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
function mP(e) {
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
        $$slots: { default: [hP] },
        $$scope: { ctx: o }
      }
    };
  }
  return i && (n = Me(i, s(e))), {
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
          Q(f.$$.fragment, 1, 0, () => {
            we(f, 1);
          }), We();
        }
        i ? (n = Me(i, s(o)), Oe(n.$$.fragment), J(n.$$.fragment, 1), be(n, t.parentNode, t)) : n = null;
      } else
        i && n.$set(l);
    },
    i(o) {
      r || (n && J(n.$$.fragment, o), r = !0);
    },
    o(o) {
      n && Q(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && T(t), n && we(n, o);
    }
  };
}
let gP = "text";
function _P(e, n, t) {
  let r, { params: i } = n, { schema: s } = n, { value: o } = n, a = i.componentContext;
  const l = a && a.currencySymbol || "$";
  let f;
  a && a.formatCurrency ? f = a.formatCurrency : f = (p) => !p && p !== 0 ? "" : p === Math.round(p) ? `${l}${p}` : `${l}${p.toFixed(2)}`;
  let u = "";
  const c = (p) => {
    let m = p.currentTarget.value;
    if (m === "" || m == l)
      t(6, u = ""), i.pathChanged(i.path, null);
    else {
      const h = m.replace(l, ""), g = parseFloat(h), b = f(g), w = b.replace(l, "");
      t(6, u = b === m || w === m ? "" : m), isNaN(g) || i.pathChanged(i.path, g);
    }
  };
  return e.$$set = (p) => {
    "params" in p && t(0, i = p.params), "schema" in p && t(1, s = p.schema), "value" in p && t(4, o = p.value);
  }, e.$$.update = () => {
    e.$$.dirty & /*holdString, formatCurrency, value*/
    112 && t(2, r = u || f(o || ""));
  }, [i, s, r, c, o, f, u];
}
class yP extends Je {
  constructor(n) {
    super(), Ye(this, n, _P, mP, He, { params: 0, schema: 1, value: 4 });
  }
}
function eu(e, n, t) {
  const r = e.slice();
  return r[8] = n[t], r[10] = t, r;
}
function nu(e) {
  let n, t, r, i, s, o = (
    /*enumText*/
    (e[4] || [])[
      /*idx*/
      e[10]
    ] + ""
  ), a, l, f, u;
  return {
    c() {
      n = N("input"), i = x(), s = N("label"), a = an(o), l = x(), y(n, "class", "sr-only"), y(n, "type", "radio"), y(n, "id", `${/*id*/
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
    m(c, p) {
      k(c, n, p), k(c, i, p), k(c, s, p), G(s, a), G(s, l), f || (u = K(
        n,
        "change",
        /*change_handler*/
        e[7]
      ), f = !0);
    },
    p(c, p) {
      p & /*enumVals*/
      8 && t !== (t = /*enumVal*/
      c[8]) && (n.value = t), p & /*enumVals, value*/
      12 && r !== (r = /*enumVal*/
      c[8] === /*value*/
      c[2]) && (n.checked = r), p & /*enumText*/
      16 && o !== (o = /*enumText*/
      (c[4] || [])[
        /*idx*/
        c[10]
      ] + "") && Tn(a, o);
    },
    d(c) {
      c && T(n), c && T(i), c && T(s), f = !1, u();
    }
  };
}
function vP(e) {
  let n, t = (
    /*enumVals*/
    e[3]
  ), r = [];
  for (let i = 0; i < t.length; i += 1)
    r[i] = nu(eu(e, t, i));
  return {
    c() {
      n = N("div");
      for (let i = 0; i < r.length; i += 1)
        r[i].c();
      y(n, "role", "radiogroup"), y(n, "class", "group-container"), y(n, "aria-labelledby", `label-${/*id*/
      e[6]}`), Dn(
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
          const a = eu(i, t, o);
          r[o] ? r[o].p(a, s) : (r[o] = nu(a), r[o].c(), r[o].m(n, null));
        }
        for (; o < r.length; o += 1)
          r[o].d(1);
        r.length = t.length;
      }
      s & /*flexDirection*/
      32 && Dn(
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
function bP(e) {
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
        $$slots: { default: [vP] },
        $$scope: { ctx: o }
      }
    };
  }
  return i && (n = Me(i, s(e))), {
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
          Q(f.$$.fragment, 1, 0, () => {
            we(f, 1);
          }), We();
        }
        i ? (n = Me(i, s(o)), Oe(n.$$.fragment), J(n.$$.fragment, 1), be(n, t.parentNode, t)) : n = null;
      } else
        i && n.$set(l);
    },
    i(o) {
      r || (n && J(n.$$.fragment, o), r = !0);
    },
    o(o) {
      n && Q(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && T(t), n && we(n, o);
    }
  };
}
function wP(e, n, t) {
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
class $P extends Je {
  constructor(n) {
    super(), Ye(this, n, wP, bP, He, { params: 0, schema: 1, value: 2 });
  }
}
function AP(e) {
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
    e[0]), n = new yr({ props: s }), Ve.push(() => Nn(n, "schema", i)), {
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
        o[0], nt(() => t = !1)), n.$set(l);
      },
      i(o) {
        r || (J(n.$$.fragment, o), r = !0);
      },
      o(o) {
        Q(n.$$.fragment, o), r = !1;
      },
      d(o) {
        we(n, o);
      }
    }
  );
}
function OP(e, n, t) {
  let { schema: r } = n, { value: i } = n, { uploadFiles: s = {} } = n, { dirty: o = !1 } = n, { showErrors: a = !0 } = n, { collapsible: l = !1 } = n, { components: f = {} } = n, { componentContext: u = {} } = n;
  const c = su();
  let p = {};
  const m = (w) => {
    const A = v3.validator(UT(r), {
      includeErrors: !0,
      allErrors: !0,
      allowUnusedKeywords: !0
    });
    A(w || i), t(9, p = Object.fromEntries((A.errors || []).map((M) => F3(r, i, M.keywordLocation, M.instanceLocation))));
  };
  Wp(() => {
    m(), Object.keys(p).length > 0 && c("value", {
      path: [],
      value: i,
      errors: p
    });
  });
  let h;
  const g = (w, A, M) => {
    if (A instanceof FileList)
      return t(3, s[w.join(".")] = A, s), t(4, o = !0), A;
    if (A === ip)
      return delete s[w.join(".")], t(4, o = !0), A;
    const W = w.length === 0 ? h.value : _r(h.value, w);
    if (A === W)
      return;
    if (A === void 0 && w.length > 0) {
      const I = w.slice(0, -1).length ? _r(h.value, w.slice(0, -1)) : h.value;
      delete I[w[w.length - 1]];
    } else
      w.length === 0 ? t(2, h.value = A, h) : Qo(h.value, w, A);
    m(h.value);
    const j = c(
      "value",
      {
        path: w,
        pathValue: A,
        value: h.value,
        errors: p,
        op: M
      },
      { cancelable: !0 }
    );
    return console.log(`dispatch value path: ${w.join(".")} val: ${JSON.stringify(A)}, errors: ${JSON.stringify(p)}, succeeded: ${j}`), j ? (t(1, i = h.value), t(4, o = !0)) : m(i), A;
  };
  function b(w) {
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
          number: N3,
          boolean: I3,
          fieldWrapper: xT,
          object: tk,
          array: k3,
          enum: A3,
          upload: q3,
          textarea: K3,
          hidden: oP,
          blocks: V3,
          autocomplete: rP,
          "list-detail": pP,
          currency: yP,
          radio: $P
        },
        f
      ),
      componentContext: u,
      pathChanged: g,
      validationErrors: p,
      containerParent: "none",
      containerReadOnly: r.readOnly || !1,
      showErrors: a,
      collapsible: l,
      idx: qT()
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
    p,
    b
  ];
}
class RP extends Je {
  constructor(n) {
    super(), Ye(this, n, OP, AP, He, {
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
    this.$$set({ schema: n }), Le();
  }
  get value() {
    return this.$$.ctx[1];
  }
  set value(n) {
    this.$$set({ value: n }), Le();
  }
  get uploadFiles() {
    return this.$$.ctx[3];
  }
  set uploadFiles(n) {
    this.$$set({ uploadFiles: n }), Le();
  }
  get dirty() {
    return this.$$.ctx[4];
  }
  set dirty(n) {
    this.$$set({ dirty: n }), Le();
  }
  get showErrors() {
    return this.$$.ctx[5];
  }
  set showErrors(n) {
    this.$$set({ showErrors: n }), Le();
  }
  get collapsible() {
    return this.$$.ctx[6];
  }
  set collapsible(n) {
    this.$$set({ collapsible: n }), Le();
  }
  get components() {
    return this.$$.ctx[7];
  }
  set components(n) {
    this.$$set({ components: n }), Le();
  }
  get componentContext() {
    return this.$$.ctx[8];
  }
  set componentContext(n) {
    this.$$set({ componentContext: n }), Le();
  }
}
const lr = [];
function EP(e, n = en) {
  let t;
  const r = /* @__PURE__ */ new Set();
  function i(a) {
    if (He(e, a) && (e = a, t)) {
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
  function o(a, l = en) {
    const f = [a, l];
    return r.add(f), r.size === 1 && (t = n(i) || en), a(e), () => {
      r.delete(f), r.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: s, subscribe: o };
}
function TP(e) {
  let n, t, r, i, s, o, a, l, f, u, c, p, m;
  function h(A) {
    e[16](A);
  }
  function g(A) {
    e[17](A);
  }
  function b(A) {
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
    e[2]), t = new RP({ props: w }), Ve.push(() => Nn(t, "schema", h)), Ve.push(() => Nn(t, "dirty", g)), Ve.push(() => Nn(t, "uploadFiles", b)), t.$on(
      "value",
      /*change*/
      e[11]
    ), {
      c() {
        n = N("form"), Oe(t.$$.fragment), o = x(), a = N("div"), l = N("button"), f = an(
          /*submitText*/
          e[8]
        ), y(l, "type", u = /*action*/
        e[5] ? "submit" : "button"), y(l, "class", "submit-button"), Pe(
          l,
          "dirty",
          /*dirty*/
          e[3]
        ), y(a, "class", "button-container"), y(n, "class", "svelte-schema-form"), y(
          n,
          "action",
          /*action*/
          e[5]
        ), Pe(
          n,
          "dirty",
          /*dirty*/
          e[3]
        );
      },
      m(A, M) {
        k(A, n, M), be(t, n, null), G(n, o), G(n, a), G(a, l), G(l, f), c = !0, p || (m = K(
          l,
          "click",
          /*submit*/
          e[12]
        ), p = !0);
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
        A[0], nt(() => r = !1)), !i && M & /*dirty*/
        8 && (i = !0, W.dirty = /*dirty*/
        A[3], nt(() => i = !1)), !s && M & /*uploadFiles*/
        4 && (s = !0, W.uploadFiles = /*uploadFiles*/
        A[2], nt(() => s = !1)), t.$set(W), (!c || M & /*submitText*/
        256) && Tn(
          f,
          /*submitText*/
          A[8]
        ), (!c || M & /*action*/
        32 && u !== (u = /*action*/
        A[5] ? "submit" : "button")) && y(l, "type", u), (!c || M & /*dirty*/
        8) && Pe(
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
        8) && Pe(
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
        Q(t.$$.fragment, A), c = !1;
      },
      d(A) {
        A && T(n), we(t), p = !1, m();
      }
    }
  );
}
function kP(e, n, t) {
  let r, { schema: i } = n, { value: s } = n, { uploadFiles: o = {} } = n, { uploadBaseUrl: a = "" } = n, { uploadNamePattern: l = "" } = n, { dirty: f = !1 } = n, { action: u = "" } = n, { components: c = {} } = n, { collapsible: p = !1 } = n, { submitText: m = "Submit" } = n, { submitRequiresDirty: h = !0 } = n, { componentContext: g = {} } = n;
  const b = su();
  let w = EP({});
  ru(e, w, (R) => t(20, r = R)), Dp(sp, w);
  let A = {}, M = !1;
  const W = (R) => {
    A = R.detail.errors, b("value", R.detail), t(1, s = R.detail.value);
  }, j = (R, X, tn) => {
    let Ze;
    tn === -1 ? (delete (r[R] || {})[X], Ze = { ...r[R] }) : Ze = {
      ...r[R] || {},
      [X]: tn
    }, Ip(w, r = { ...r, [R]: Ze }, r);
  }, F = async (R = "") => {
    if (Object.keys(o).length > 0 && a) {
      const X = l || i.pathPattern;
      if (!X) {
        alert("No uploadNamePattern given or pathPattern property on schema to determine file save url base");
        return;
      }
      const tn = GT(X, s), Ze = Object.entries(o).filter(([q]) => q.startsWith(R)).flatMap(([q, pe]) => {
        const Ge = [];
        for (let _n = 0; _n < pe.length; _n++) {
          const xn = pe[_n], Et = a + (a.endsWith("/") ? "" : "/") + tn + "/" + q + "/" + xn.name;
          console.log(`Uploading to ${Et}`);
          const Tt = new Promise((z, ze) => {
            try {
              const E = new XMLHttpRequest();
              E.upload.onprogress = (Jt) => j(q, xn.name, Jt.loaded / Jt.total * 100), E.upload.onloadend = (Jt) => {
                j(q, xn.name, E.status === 200 || E.status === 0 ? -1 : -E.status), z([q, Et]);
              }, E.withCredentials = !0, E.open("PUT", Et), E.send(xn);
            } catch (E) {
              ze(E);
            }
          }).then(([z, ze]) => {
            z === "" ? t(1, s = ze) : Qo(s, z.split("."), ze), t(1, s), delete o[z];
          });
          Ge.push(Tt);
        }
        return Ge;
      });
      await Promise.all(Ze);
    }
  }, I = async () => {
    (f || !h) && Object.keys(A).length === 0 && (await F(), b("submit", { value: s }), t(3, f = !1)), t(9, M = !0);
  };
  g.doUploads = F;
  function D(R) {
    i = R, t(0, i);
  }
  function C(R) {
    f = R, t(3, f);
  }
  function ee(R) {
    o = R, t(2, o);
  }
  return e.$$set = (R) => {
    "schema" in R && t(0, i = R.schema), "value" in R && t(1, s = R.value), "uploadFiles" in R && t(2, o = R.uploadFiles), "uploadBaseUrl" in R && t(13, a = R.uploadBaseUrl), "uploadNamePattern" in R && t(14, l = R.uploadNamePattern), "dirty" in R && t(3, f = R.dirty), "action" in R && t(5, u = R.action), "components" in R && t(6, c = R.components), "collapsible" in R && t(7, p = R.collapsible), "submitText" in R && t(8, m = R.submitText), "submitRequiresDirty" in R && t(15, h = R.submitRequiresDirty), "componentContext" in R && t(4, g = R.componentContext);
  }, [
    i,
    s,
    o,
    f,
    g,
    u,
    c,
    p,
    m,
    M,
    w,
    W,
    I,
    a,
    l,
    h,
    D,
    C,
    ee
  ];
}
class CP extends Je {
  constructor(n) {
    super(), Ye(this, n, kP, TP, He, {
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
    this.$$set({ schema: n }), Le();
  }
  get value() {
    return this.$$.ctx[1];
  }
  set value(n) {
    this.$$set({ value: n }), Le();
  }
  get uploadFiles() {
    return this.$$.ctx[2];
  }
  set uploadFiles(n) {
    this.$$set({ uploadFiles: n }), Le();
  }
  get uploadBaseUrl() {
    return this.$$.ctx[13];
  }
  set uploadBaseUrl(n) {
    this.$$set({ uploadBaseUrl: n }), Le();
  }
  get uploadNamePattern() {
    return this.$$.ctx[14];
  }
  set uploadNamePattern(n) {
    this.$$set({ uploadNamePattern: n }), Le();
  }
  get dirty() {
    return this.$$.ctx[3];
  }
  set dirty(n) {
    this.$$set({ dirty: n }), Le();
  }
  get action() {
    return this.$$.ctx[5];
  }
  set action(n) {
    this.$$set({ action: n }), Le();
  }
  get components() {
    return this.$$.ctx[6];
  }
  set components(n) {
    this.$$set({ components: n }), Le();
  }
  get collapsible() {
    return this.$$.ctx[7];
  }
  set collapsible(n) {
    this.$$set({ collapsible: n }), Le();
  }
  get submitText() {
    return this.$$.ctx[8];
  }
  set submitText(n) {
    this.$$set({ submitText: n }), Le();
  }
  get submitRequiresDirty() {
    return this.$$.ctx[15];
  }
  set submitRequiresDirty(n) {
    this.$$set({ submitRequiresDirty: n }), Le();
  }
  get componentContext() {
    return this.$$.ctx[4];
  }
  set componentContext(n) {
    this.$$set({ componentContext: n }), Le();
  }
}
export {
  RP as SchemaForm,
  CP as SubmitForm
};
