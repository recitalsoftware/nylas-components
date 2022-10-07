(function ($t, j) {
  typeof exports == "object" && typeof module != "undefined"
    ? (module.exports = j())
    : typeof define == "function" && define.amd
    ? define(j)
    : (($t = typeof globalThis != "undefined" ? globalThis : $t || self),
      ($t.app = j()));
})(this, function () {
  "use strict";
  const $t = window.customElements.define.bind(window.customElements);
  window.customElements.define = (r, ...e) => {
    if (!customElements.get(r)) return $t(r, ...e);
  };
  function j() {}
  function $(r, e) {
    for (const t in e) r[t] = e[t];
    return r;
  }
  function Hr(r) {
    return r();
  }
  function en() {
    return Object.create(null);
  }
  function et(r) {
    r.forEach(Hr);
  }
  function er(r) {
    return typeof r == "function";
  }
  function He(r, e) {
    return r != r
      ? e == e
      : r !== e || (r && typeof r == "object") || typeof r == "function";
  }
  function _r(r, e) {
    return r != r ? e == e : r !== e;
  }
  function tn(r) {
    return Object.keys(r).length === 0;
  }
  function rn(r, ...e) {
    if (r == null) return j;
    const t = r.subscribe(...e);
    return t.unsubscribe ? () => t.unsubscribe() : t;
  }
  function pr(r, e, t) {
    r.$$.on_destroy.push(rn(e, t));
  }
  function pe(r) {
    const e = {};
    for (const t in r) t[0] !== "$" && (e[t] = r[t]);
    return e;
  }
  let gr = !1;
  function Yi() {
    gr = !0;
  }
  function Vi() {
    gr = !1;
  }
  function Xi(r, e, t, n) {
    for (; r < e; ) {
      const i = r + ((e - r) >> 1);
      t(i) <= n ? (r = i + 1) : (e = i);
    }
    return r;
  }
  function Ki(r) {
    if (r.hydrate_init) return;
    r.hydrate_init = !0;
    let e = r.childNodes;
    if (r.nodeName === "HEAD") {
      const o = [];
      for (let a = 0; a < e.length; a++) {
        const f = e[a];
        f.claim_order !== void 0 && o.push(f);
      }
      e = o;
    }
    const t = new Int32Array(e.length + 1),
      n = new Int32Array(e.length);
    t[0] = -1;
    let i = 0;
    for (let o = 0; o < e.length; o++) {
      const a = e[o].claim_order,
        f =
          (i > 0 && e[t[i]].claim_order <= a
            ? i + 1
            : Xi(1, i, (g) => e[t[g]].claim_order, a)) - 1;
      n[o] = t[f] + 1;
      const u = f + 1;
      (t[u] = o), (i = Math.max(u, i));
    }
    const l = [],
      s = [];
    let c = e.length - 1;
    for (let o = t[i] + 1; o != 0; o = n[o - 1]) {
      for (l.push(e[o - 1]); c >= o; c--) s.push(e[c]);
      c--;
    }
    for (; c >= 0; c--) s.push(e[c]);
    l.reverse(), s.sort((o, a) => o.claim_order - a.claim_order);
    for (let o = 0, a = 0; o < s.length; o++) {
      for (; a < l.length && s[o].claim_order >= l[a].claim_order; ) a++;
      const f = a < l.length ? l[a] : null;
      r.insertBefore(s[o], f);
    }
  }
  function p(r, e) {
    r.appendChild(e);
  }
  function L(r, e) {
    if (gr) {
      for (
        Ki(r),
          (r.actual_end_child === void 0 ||
            (r.actual_end_child !== null &&
              r.actual_end_child.parentElement !== r)) &&
            (r.actual_end_child = r.firstChild);
        r.actual_end_child !== null &&
        r.actual_end_child.claim_order === void 0;

      )
        r.actual_end_child = r.actual_end_child.nextSibling;
      e !== r.actual_end_child
        ? (e.claim_order !== void 0 || e.parentNode !== r) &&
          r.insertBefore(e, r.actual_end_child)
        : (r.actual_end_child = e.nextSibling);
    } else (e.parentNode !== r || e.nextSibling !== null) && r.appendChild(e);
  }
  function E(r, e, t) {
    r.insertBefore(e, t || null);
  }
  function Ve(r, e, t) {
    gr && !t
      ? L(r, e)
      : (e.parentNode !== r || e.nextSibling != t) &&
        r.insertBefore(e, t || null);
  }
  function h(r) {
    r.parentNode.removeChild(r);
  }
  function jr(r, e) {
    for (let t = 0; t < r.length; t += 1) r[t] && r[t].d(e);
  }
  function w(r) {
    return document.createElement(r);
  }
  function C(r) {
    return document.createElementNS("http://www.w3.org/2000/svg", r);
  }
  function ee(r) {
    return document.createTextNode(r);
  }
  function P() {
    return ee(" ");
  }
  function st() {
    return ee("");
  }
  function he(r, e, t, n) {
    return r.addEventListener(e, t, n), () => r.removeEventListener(e, t, n);
  }
  function Qi(r) {
    return function (e) {
      return e.preventDefault(), r.call(this, e);
    };
  }
  function qi(r) {
    return function (e) {
      return e.stopPropagation(), r.call(this, e);
    };
  }
  function d(r, e, t) {
    t == null
      ? r.removeAttribute(e)
      : r.getAttribute(e) !== t && r.setAttribute(e, t);
  }
  function ye(r, e) {
    for (const t in e) d(r, t, e[t]);
  }
  function q(r, e, t) {
    e in r
      ? (r[e] = typeof r[e] == "boolean" && t === "" ? !0 : t)
      : d(r, e, t);
  }
  function S(r) {
    return Array.from(r.childNodes);
  }
  function $i(r) {
    r.claim_info === void 0 &&
      (r.claim_info = { last_index: 0, total_claimed: 0 });
  }
  function nn(r, e, t, n, i = !1) {
    $i(r);
    const l = (() => {
      for (let s = r.claim_info.last_index; s < r.length; s++) {
        const c = r[s];
        if (e(c)) {
          const o = t(c);
          return (
            o === void 0 ? r.splice(s, 1) : (r[s] = o),
            i || (r.claim_info.last_index = s),
            c
          );
        }
      }
      for (let s = r.claim_info.last_index - 1; s >= 0; s--) {
        const c = r[s];
        if (e(c)) {
          const o = t(c);
          return (
            o === void 0 ? r.splice(s, 1) : (r[s] = o),
            i
              ? o === void 0 && r.claim_info.last_index--
              : (r.claim_info.last_index = s),
            c
          );
        }
      }
      return n();
    })();
    return (
      (l.claim_order = r.claim_info.total_claimed),
      (r.claim_info.total_claimed += 1),
      l
    );
  }
  function eo(r, e, t, n) {
    return nn(
      r,
      (i) => i.nodeName === e,
      (i) => {
        const l = [];
        for (let s = 0; s < i.attributes.length; s++) {
          const c = i.attributes[s];
          t[c.name] || l.push(c.name);
        }
        l.forEach((s) => i.removeAttribute(s));
      },
      () => n(e),
    );
  }
  function T(r, e, t) {
    return eo(r, e, t, C);
  }
  function vt(r, e) {
    return nn(
      r,
      (t) => t.nodeType === 3,
      (t) => {
        const n = "" + e;
        if (t.data.startsWith(n)) {
          if (t.data.length !== n.length) return t.splitText(n.length);
        } else t.data = n;
      },
      () => ee(e),
      !0,
    );
  }
  function Ae(r, e) {
    (e = "" + e), r.wholeText !== e && (r.data = e);
  }
  function on(r, e) {
    r.value = e == null ? "" : e;
  }
  function br(r, e) {
    for (let t = 0; t < r.options.length; t += 1) {
      const n = r.options[t];
      if (n.__value === e) {
        n.selected = !0;
        return;
      }
    }
    r.selectedIndex = -1;
  }
  function Fe(r, e, t) {
    r.classList[t ? "add" : "remove"](e);
  }
  function Et(r) {
    const e = {};
    for (const t of r) e[t.name] = t.value;
    return e;
  }
  let tr;
  function rr(r) {
    tr = r;
  }
  function ln() {
    if (!tr)
      throw new Error("Function called outside component initialization");
    return tr;
  }
  function to(r) {
    ln().$$.on_mount.push(r);
  }
  const nr = [],
    Ct = [],
    vr = [],
    sn = [],
    an = Promise.resolve();
  let Br = !1;
  function cn() {
    Br || ((Br = !0), an.then(z));
  }
  function wr() {
    return cn(), an;
  }
  function yr(r) {
    vr.push(r);
  }
  const Ur = new Set();
  let kr = 0;
  function z() {
    const r = tr;
    do {
      for (; kr < nr.length; ) {
        const e = nr[kr];
        kr++, rr(e), ro(e.$$);
      }
      for (rr(null), nr.length = 0, kr = 0; Ct.length; ) Ct.pop()();
      for (let e = 0; e < vr.length; e += 1) {
        const t = vr[e];
        Ur.has(t) || (Ur.add(t), t());
      }
      vr.length = 0;
    } while (nr.length);
    for (; sn.length; ) sn.pop()();
    (Br = !1), Ur.clear(), rr(r);
  }
  function ro(r) {
    if (r.fragment !== null) {
      r.update(), et(r.before_update);
      const e = r.dirty;
      (r.dirty = [-1]),
        r.fragment && r.fragment.p(r.ctx, e),
        r.after_update.forEach(yr);
    }
  }
  const xr = new Set();
  let zt;
  function We() {
    zt = { r: 0, c: [], p: zt };
  }
  function Ze() {
    zt.r || et(zt.c), (zt = zt.p);
  }
  function W(r, e) {
    r && r.i && (xr.delete(r), r.i(e));
  }
  function te(r, e, t, n) {
    if (r && r.o) {
      if (xr.has(r)) return;
      xr.add(r),
        zt.c.push(() => {
          xr.delete(r), n && (t && r.d(1), n());
        }),
        r.o(e);
    }
  }
  function Er(r, e) {
    r.d(1), e.delete(r.key);
  }
  function Cr(r, e, t, n, i, l, s, c, o, a, f, u) {
    let g = r.length,
      b = l.length,
      v = g;
    const y = {};
    for (; v--; ) y[r[v].key] = v;
    const x = [],
      D = new Map(),
      H = new Map();
    for (v = b; v--; ) {
      const I = u(i, l, v),
        O = t(I);
      let U = s.get(O);
      U ? n && U.p(I, e) : ((U = a(O, I)), U.c()),
        D.set(O, (x[v] = U)),
        O in y && H.set(O, Math.abs(v - y[O]));
    }
    const G = new Set(),
      oe = new Set();
    function le(I) {
      W(I, 1), I.m(c, f), s.set(I.key, I), (f = I.first), b--;
    }
    for (; g && b; ) {
      const I = x[b - 1],
        O = r[g - 1],
        U = I.key,
        fe = O.key;
      I === O
        ? ((f = I.first), g--, b--)
        : D.has(fe)
        ? !s.has(U) || G.has(U)
          ? le(I)
          : oe.has(fe)
          ? g--
          : H.get(U) > H.get(fe)
          ? (oe.add(U), le(I))
          : (G.add(fe), g--)
        : (o(O, s), g--);
    }
    for (; g--; ) {
      const I = r[g];
      D.has(I.key) || o(I, s);
    }
    for (; b; ) le(x[b - 1]);
    return x;
  }
  function Xe(r, e) {
    const t = {},
      n = {},
      i = { $$scope: 1 };
    let l = r.length;
    for (; l--; ) {
      const s = r[l],
        c = e[l];
      if (c) {
        for (const o in s) o in c || (n[o] = 1);
        for (const o in c) i[o] || ((t[o] = c[o]), (i[o] = 1));
        r[l] = c;
      } else for (const o in s) i[o] = 1;
    }
    for (const s in n) s in t || (t[s] = void 0);
    return t;
  }
  function nt(r) {
    r && r.c();
  }
  function rt(r, e, t, n) {
    const { fragment: i, on_mount: l, on_destroy: s, after_update: c } = r.$$;
    i && i.m(e, t),
      n ||
        yr(() => {
          const o = l.map(Hr).filter(er);
          s ? s.push(...o) : et(o), (r.$$.on_mount = []);
        }),
      c.forEach(yr);
  }
  function tt(r, e) {
    const t = r.$$;
    t.fragment !== null &&
      (et(t.on_destroy),
      t.fragment && t.fragment.d(e),
      (t.on_destroy = t.fragment = null),
      (t.ctx = []));
  }
  function no(r, e) {
    r.$$.dirty[0] === -1 && (nr.push(r), cn(), r.$$.dirty.fill(0)),
      (r.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
  }
  function Me(r, e, t, n, i, l, s, c = [-1]) {
    const o = tr;
    rr(r);
    const a = (r.$$ = {
      fragment: null,
      ctx: null,
      props: l,
      update: j,
      not_equal: i,
      bound: en(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(e.context || (o ? o.$$.context : [])),
      callbacks: en(),
      dirty: c,
      skip_bound: !1,
      root: e.target || o.$$.root,
    });
    s && s(a.root);
    let f = !1;
    if (
      ((a.ctx = t
        ? t(r, e.props || {}, (u, g, ...b) => {
            const v = b.length ? b[0] : g;
            return (
              a.ctx &&
                i(a.ctx[u], (a.ctx[u] = v)) &&
                (!a.skip_bound && a.bound[u] && a.bound[u](v), f && no(r, u)),
              g
            );
          })
        : []),
      a.update(),
      (f = !0),
      et(a.before_update),
      (a.fragment = n ? n(a.ctx) : !1),
      e.target)
    ) {
      if (e.hydrate) {
        Yi();
        const u = S(e.target);
        a.fragment && a.fragment.l(u), u.forEach(h);
      } else a.fragment && a.fragment.c();
      e.intro && W(r.$$.fragment),
        rt(r, e.target, e.anchor, e.customElement),
        Vi(),
        z();
    }
    rr(o);
  }
  let wt;
  typeof HTMLElement == "function" &&
    (wt = class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        const { on_mount: r } = this.$$;
        this.$$.on_disconnect = r.map(Hr).filter(er);
        for (const e in this.$$.slotted) this.appendChild(this.$$.slotted[e]);
      }
      attributeChangedCallback(r, e, t) {
        this[r] = t;
      }
      disconnectedCallback() {
        et(this.$$.on_disconnect);
      }
      $destroy() {
        tt(this, 1), (this.$destroy = j);
      }
      $on(r, e) {
        const t = this.$$.callbacks[r] || (this.$$.callbacks[r] = []);
        return (
          t.push(e),
          () => {
            const n = t.indexOf(e);
            n !== -1 && t.splice(n, 1);
          }
        );
      }
      $set(r) {
        this.$$set &&
          !tn(r) &&
          ((this.$$.skip_bound = !0), this.$$set(r), (this.$$.skip_bound = !1));
      }
    });
  class Ke {
    $destroy() {
      tt(this, 1), (this.$destroy = j);
    }
    $on(e, t) {
      const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
      return (
        n.push(t),
        () => {
          const i = n.indexOf(t);
          i !== -1 && n.splice(i, 1);
        }
      );
    }
    $set(e) {
      this.$$set &&
        !tn(e) &&
        ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
    }
  }
  function io(r) {
    let e,
      t,
      n,
      i,
      l,
      s = [
        { width: "256px" },
        { height: "256px" },
        { viewBox: "0 0 256 256" },
        { version: "1.1" },
        { xmlns: "http://www.w3.org/2000/svg" },
        { "xmlns:xlink": "http://www.w3.org/1999/xlink" },
        r[0],
      ],
      c = {};
    for (let o = 0; o < s.length; o += 1) c = $(c, s[o]);
    return {
      c() {
        (e = C("svg")),
          (t = C("title")),
          (n = ee("icon-bold-complete")),
          (i = C("g")),
          (l = C("path")),
          this.h();
      },
      l(o) {
        e = T(o, "svg", {
          width: !0,
          height: !0,
          viewBox: !0,
          version: !0,
          xmlns: !0,
          "xmlns:xlink": !0,
        });
        var a = S(e);
        t = T(a, "title", {});
        var f = S(t);
        (n = vt(f, "icon-bold-complete")),
          f.forEach(h),
          (i = T(a, "g", {
            id: !0,
            stroke: !0,
            "stroke-width": !0,
            "fill-rule": !0,
          }));
        var u = S(i);
        (l = T(u, "path", { d: !0, id: !0, "fill-rule": !0 })),
          S(l).forEach(h),
          u.forEach(h),
          a.forEach(h),
          this.h();
      },
      h() {
        d(
          l,
          "d",
          "M128.159574,256 C143.489362,256 157.12234,254.037978 169.058511,250.113933 C180.994681,246.189888 191.029255,240.743079 199.162234,233.773507 C207.295213,226.803935 213.468085,218.633722 217.680851,209.262869 C221.893617,199.892016 224,189.75978 224,178.866163 C224,164.341341 219.962766,152.510638 211.888298,143.374056 C203.81383,134.237474 191.351064,127.619309 174.5,123.519561 C182.223404,120.708305 188.835106,117.369938 194.335106,113.504461 C199.835106,109.638984 204.340426,105.392816 207.851064,100.765957 C211.361702,96.1390986 213.93617,91.1608328 215.574468,85.8311599 C217.212766,80.5014871 218.031915,74.9668268 218.031915,69.2271791 C218.031915,58.6849691 216.24734,49.1384123 212.678191,40.5875086 C209.109043,32.0366049 203.404255,24.7741935 195.56383,18.8002745 C187.723404,12.8263555 177.601064,8.19949668 165.196809,4.91969801 C152.792553,1.63989934 137.755319,0 120.085106,0 L120.085106,0 L26,0 L26,256 L128.159574,256 Z M116.736842,108 L86,108 L86,45 L120.578947,45 C127.215311,45 132.949362,45.525 137.7811,46.575 C142.612839,47.625 146.600478,49.375 149.744019,51.825 C152.88756,54.275 155.216108,57.5125 156.729665,61.5375 C158.243222,65.5625 159,70.6083333 159,76.675 C159,82.8583333 158.039474,87.9916667 156.118421,92.075 C154.197368,96.1583333 151.40311,99.3666667 147.735646,101.7 C144.068182,104.033333 139.614833,105.666667 134.375598,106.6 C129.136364,107.533333 123.256778,108 116.736842,108 L116.736842,108 Z M126.754386,211 L85,211 L85,147 L126.403509,147 C133.888889,147 140.087719,147.705234 145,149.115702 C149.912281,150.526171 153.859649,152.524334 156.842105,155.110193 C159.824561,157.696051 161.929825,160.869605 163.157895,164.630854 C164.385965,168.392103 165,172.623508 165,177.325069 C165,181.438935 164.473684,185.494031 163.421053,189.490358 C162.368421,193.486685 160.438596,197.071625 157.631579,200.245179 C154.824561,203.418733 150.935673,206.004591 145.964912,208.002755 C140.994152,210.000918 134.590643,211 126.754386,211 L126.754386,211 Z",
        ),
          d(l, "id", "B"),
          d(l, "fill-rule", "nonzero"),
          d(i, "id", "icon-bold-complete"),
          d(i, "stroke", "none"),
          d(i, "stroke-width", "1"),
          d(i, "fill-rule", "evenodd"),
          ye(e, c);
      },
      m(o, a) {
        Ve(o, e, a), L(e, t), L(t, n), L(e, i), L(i, l);
      },
      p(o, [a]) {
        ye(
          e,
          (c = Xe(s, [
            { width: "256px" },
            { height: "256px" },
            { viewBox: "0 0 256 256" },
            { version: "1.1" },
            { xmlns: "http://www.w3.org/2000/svg" },
            { "xmlns:xlink": "http://www.w3.org/1999/xlink" },
            a & 1 && o[0],
          ])),
        );
      },
      i: j,
      o: j,
      d(o) {
        o && h(e);
      },
    };
  }
  function oo(r, e, t) {
    return (
      (r.$$set = (n) => {
        t(0, (e = $($({}, e), pe(n))));
      }),
      (e = pe(e)),
      [e]
    );
  }
  class lo extends Ke {
    constructor(e) {
      super();
      Me(this, e, oo, io, He, {});
    }
  }
  function so(r) {
    let e,
      t,
      n,
      i,
      l,
      s = [
        { width: "256px" },
        { height: "256px" },
        { viewBox: "0 0 256 256" },
        { version: "1.1" },
        { xmlns: "http://www.w3.org/2000/svg" },
        { "xmlns:xlink": "http://www.w3.org/1999/xlink" },
        r[0],
      ],
      c = {};
    for (let o = 0; o < s.length; o += 1) c = $(c, s[o]);
    return {
      c() {
        (e = C("svg")),
          (t = C("title")),
          (n = ee("icon-italic-complete")),
          (i = C("g")),
          (l = C("polygon")),
          this.h();
      },
      l(o) {
        e = T(o, "svg", {
          width: !0,
          height: !0,
          viewBox: !0,
          version: !0,
          xmlns: !0,
          "xmlns:xlink": !0,
        });
        var a = S(e);
        t = T(a, "title", {});
        var f = S(t);
        (n = vt(f, "icon-italic-complete")),
          f.forEach(h),
          (i = T(a, "g", {
            id: !0,
            stroke: !0,
            "stroke-width": !0,
            "fill-rule": !0,
          }));
        var u = S(i);
        (l = T(u, "polygon", { id: !0, "fill-rule": !0, points: !0 })),
          S(l).forEach(h),
          u.forEach(h),
          a.forEach(h),
          this.h();
      },
      h() {
        d(l, "id", "I"),
          d(l, "fill-rule", "nonzero"),
          d(
            l,
            "points",
            "141.0907 256 172.399 -1.13686838e-13 114.7073 -1.13686838e-13 83.399 256",
          ),
          d(i, "id", "icon-italic-complete"),
          d(i, "stroke", "none"),
          d(i, "stroke-width", "1"),
          d(i, "fill-rule", "evenodd"),
          ye(e, c);
      },
      m(o, a) {
        Ve(o, e, a), L(e, t), L(t, n), L(e, i), L(i, l);
      },
      p(o, [a]) {
        ye(
          e,
          (c = Xe(s, [
            { width: "256px" },
            { height: "256px" },
            { viewBox: "0 0 256 256" },
            { version: "1.1" },
            { xmlns: "http://www.w3.org/2000/svg" },
            { "xmlns:xlink": "http://www.w3.org/1999/xlink" },
            a & 1 && o[0],
          ])),
        );
      },
      i: j,
      o: j,
      d(o) {
        o && h(e);
      },
    };
  }
  function ao(r, e, t) {
    return (
      (r.$$set = (n) => {
        t(0, (e = $($({}, e), pe(n))));
      }),
      (e = pe(e)),
      [e]
    );
  }
  class co extends Ke {
    constructor(e) {
      super();
      Me(this, e, ao, so, He, {});
    }
  }
  function fo(r) {
    let e,
      t,
      n,
      i,
      l,
      s = [
        { width: "256px" },
        { height: "256px" },
        { viewBox: "0 0 256 256" },
        { version: "1.1" },
        { xmlns: "http://www.w3.org/2000/svg" },
        { "xmlns:xlink": "http://www.w3.org/1999/xlink" },
        r[0],
      ],
      c = {};
    for (let o = 0; o < s.length; o += 1) c = $(c, s[o]);
    return {
      c() {
        (e = C("svg")),
          (t = C("title")),
          (n = ee("icon-underline-complete")),
          (i = C("g")),
          (l = C("path")),
          this.h();
      },
      l(o) {
        e = T(o, "svg", {
          width: !0,
          height: !0,
          viewBox: !0,
          version: !0,
          xmlns: !0,
          "xmlns:xlink": !0,
        });
        var a = S(e);
        t = T(a, "title", {});
        var f = S(t);
        (n = vt(f, "icon-underline-complete")),
          f.forEach(h),
          (i = T(a, "g", {
            id: !0,
            stroke: !0,
            "stroke-width": !0,
            "fill-rule": !0,
          }));
        var u = S(i);
        (l = T(u, "path", { d: !0, id: !0, "fill-rule": !0 })),
          S(l).forEach(h),
          u.forEach(h),
          a.forEach(h),
          this.h();
      },
      h() {
        d(
          l,
          "d",
          "M218,232.537 L218,255.861 L39,255.861 L39,232.537 L218,232.537 Z M85.0543131,0.199 L85.0543131,123.091057 L85.0584142,123.932008 C85.1267664,130.910932 86.0495208,137.164899 87.8266773,142.693908 C89.6749201,148.444078 92.3525027,153.338851 95.8594249,157.378226 C99.3663472,161.417601 103.655218,164.506536 108.726038,166.645029 C113.796858,168.783521 119.554846,169.852768 126,169.852768 C132.445154,169.852768 138.203142,168.783521 143.273962,166.645029 C148.344782,164.506536 152.633653,161.441363 156.140575,157.449509 C159.647497,153.457656 162.32508,148.586644 164.173323,142.836475 C166.021565,137.086305 166.945687,130.552021 166.945687,123.233623 L166.945687,123.233623 L166.945687,0.199 L215,0.199 L215,123.233623 L214.995482,124.263974 C214.887062,136.600688 212.827066,147.947665 208.815495,158.304906 C204.692492,168.949849 198.792332,178.121607 191.115016,185.820181 C183.4377,193.518756 174.101704,199.506536 163.107029,203.783521 C152.112354,208.060507 139.743344,210.199 126,210.199 C112.161874,210.199 99.7454739,208.060507 88.7507987,203.783521 C77.7561235,199.506536 68.4201278,193.518756 60.7428115,185.820181 C53.0654952,178.121607 47.1890309,168.949849 43.1134185,158.304906 C39.0378062,147.659964 37,135.969536 37,123.233623 L37,123.233623 L37,0.199 L85.0543131,0.199 Z",
        ),
          d(l, "id", "Combined-Shape"),
          d(l, "fill-rule", "nonzero"),
          d(i, "id", "icon-underline-complete"),
          d(i, "stroke", "none"),
          d(i, "stroke-width", "1"),
          d(i, "fill-rule", "evenodd"),
          ye(e, c);
      },
      m(o, a) {
        Ve(o, e, a), L(e, t), L(t, n), L(e, i), L(i, l);
      },
      p(o, [a]) {
        ye(
          e,
          (c = Xe(s, [
            { width: "256px" },
            { height: "256px" },
            { viewBox: "0 0 256 256" },
            { version: "1.1" },
            { xmlns: "http://www.w3.org/2000/svg" },
            { "xmlns:xlink": "http://www.w3.org/1999/xlink" },
            a & 1 && o[0],
          ])),
        );
      },
      i: j,
      o: j,
      d(o) {
        o && h(e);
      },
    };
  }
  function uo(r, e, t) {
    return (
      (r.$$set = (n) => {
        t(0, (e = $($({}, e), pe(n))));
      }),
      (e = pe(e)),
      [e]
    );
  }
  class ho extends Ke {
    constructor(e) {
      super();
      Me(this, e, uo, fo, He, {});
    }
  }
  function mo(r) {
    let e,
      t,
      n,
      i,
      l,
      s = [
        { width: "256px" },
        { height: "256px" },
        { viewBox: "0 0 256 256" },
        { version: "1.1" },
        { xmlns: "http://www.w3.org/2000/svg" },
        { "xmlns:xlink": "http://www.w3.org/1999/xlink" },
        r[0],
      ],
      c = {};
    for (let o = 0; o < s.length; o += 1) c = $(c, s[o]);
    return {
      c() {
        (e = C("svg")),
          (t = C("title")),
          (n = ee("icon-list-complete")),
          (i = C("g")),
          (l = C("path")),
          this.h();
      },
      l(o) {
        e = T(o, "svg", {
          width: !0,
          height: !0,
          viewBox: !0,
          version: !0,
          xmlns: !0,
          "xmlns:xlink": !0,
        });
        var a = S(e);
        t = T(a, "title", {});
        var f = S(t);
        (n = vt(f, "icon-list-complete")),
          f.forEach(h),
          (i = T(a, "g", {
            id: !0,
            stroke: !0,
            "stroke-width": !0,
            "fill-rule": !0,
          }));
        var u = S(i);
        (l = T(u, "path", { d: !0, id: !0, "fill-rule": !0 })),
          S(l).forEach(h),
          u.forEach(h),
          a.forEach(h),
          this.h();
      },
      h() {
        d(
          l,
          "d",
          "M15.9026369,188 C18.5422583,188 20.8248817,188.27794 22.7505071,188.833819 C24.6761325,189.389699 26.2555781,190.159378 27.4888438,191.142857 C28.7221095,192.126336 29.6308316,193.280855 30.2150101,194.606414 C30.7991886,195.931973 31.0912779,197.364431 31.0912779,198.90379 C31.0912779,201.469388 30.5179175,203.511176 29.3711968,205.029155 C28.224476,206.547133 26.8505747,207.733722 25.2494929,208.588921 C27.1534821,209.358601 28.7545639,210.51312 30.0527383,212.052478 C31.3509128,213.591837 32,215.665695 32,218.274052 C32,220.326531 31.6538201,222.186589 30.9614604,223.854227 C30.2691007,225.521866 29.2305612,226.965015 27.8458418,228.183673 C26.4611224,229.402332 24.7085869,230.343052 22.5882353,231.005831 C20.4678837,231.66861 17.9580798,232 15.0588235,232 C11.8999324,232 9.40094659,231.72206 7.56186613,231.166181 C5.72278567,230.610301 4.21906694,230.011662 3.05070994,229.370262 C2.14198783,228.899903 1.42799189,228.290573 0.90872211,227.542274 C0.389452333,226.793975 0.129817444,226.056365 0.129817444,225.329446 C0.129817444,224.474247 0.346179851,223.512148 0.778904665,222.443149 C1.21162948,221.37415 2.07707911,219.856171 3.37525355,217.889213 C4.63015551,219.000972 6.1663286,220.005831 7.98377282,220.90379 C9.80121704,221.801749 11.8133874,222.250729 14.020284,222.250729 C15.4915483,222.250729 16.6707235,221.876579 17.5578093,221.12828 C18.4448952,220.379981 18.8884381,219.278912 18.8884381,217.825073 C18.8884381,216.884354 18.7261663,216.136054 18.4016227,215.580175 C18.0770791,215.024295 17.6768087,214.596696 17.2008114,214.297376 C16.7248141,213.998056 16.1947262,213.794947 15.6105477,213.688047 C15.0263692,213.581147 14.4530088,213.527697 13.8904665,213.527697 L13.8904665,213.527697 L9.28194726,213.527697 L9.28194726,204.676385 L13.8255578,204.676385 L14.0831643,204.669704 C15.020284,204.620708 15.8755916,204.302235 16.6490872,203.714286 C17.4929006,203.072886 17.9148073,202.153547 17.9148073,200.956268 C17.9148073,199.758989 17.525355,198.90379 16.7464503,198.390671 C15.9675456,197.877551 14.9506423,197.620991 13.6957404,197.620991 C12.0513861,197.620991 10.4719405,197.941691 8.95740365,198.58309 C7.4428668,199.22449 5.71196755,200.229349 3.76470588,201.597668 C2.59634888,200.272109 1.67680865,199.09621 1.00608519,198.069971 C0.335361731,197.043732 0,196.060253 0,195.119534 C0,194.307094 0.227180527,193.622935 0.681541582,193.067055 C1.13590264,192.511176 1.66599053,192.019436 2.27180527,191.591837 C3.52670723,190.736638 5.29006085,189.924198 7.56186613,189.154519 C9.8336714,188.38484 12.6139283,188 15.9026369,188 Z M256,191 L256,231 L58,231 L58,191 L256,191 Z M256,110 L256,150 L58,150 L58,110 L256,110 Z M17.0752475,106 C19.1663366,106 21.1485149,106.224292 23.0217822,106.672876 C24.8950495,107.121461 26.539604,107.85842 27.9554455,108.883756 C29.3712871,109.909091 30.4930693,111.244163 31.3207921,112.888972 C32.1485149,114.53378 32.5623762,116.531048 32.5623762,118.880775 C32.5623762,120.418778 32.3445545,121.903378 31.9089109,123.334575 C31.4732673,124.765772 30.8742574,126.143567 30.1118812,127.467958 C29.349505,128.79235 28.4673267,130.074019 27.4653465,131.312966 C26.4633663,132.551913 25.3960396,133.726776 24.2633663,134.837556 C23.4792079,135.606557 22.6950495,136.364878 21.9108911,137.112519 C21.1267327,137.860159 20.3207921,138.575758 19.4930693,139.259314 L19.4930693,139.259314 L27.0079208,139.259314 L27.3805372,139.263765 C29.4640295,139.314201 31.0715072,139.793343 32.2029703,140.701192 C33.4009901,141.662444 34,143.147044 34,145.154993 C34,145.753105 33.9891089,146.276453 33.9673267,146.725037 C33.9455446,147.173621 33.9346535,147.568803 33.9346535,147.910581 C33.8910891,148.337804 33.8693069,148.700944 33.8693069,149 L33.8693069,149 L2.11089109,149 L2.11089109,140.4769 L2.48896747,140.195064 C3.25445545,139.617005 4.07595474,138.952629 4.95346535,138.201937 C5.97722772,137.32613 7.04455446,136.39692 8.15544554,135.414307 C9.26633663,134.431694 10.3772277,133.395678 11.4881188,132.306259 C12.5990099,131.216841 13.6772277,130.138102 14.7227723,129.070045 C16.2039604,127.532042 17.3584158,126.090164 18.1861386,124.744411 C19.0138614,123.398659 19.4277228,121.956781 19.4277228,120.418778 C19.4277228,119.564332 19.2861386,118.859414 19.0029703,118.304024 C18.719802,117.748634 18.349505,117.30005 17.8920792,116.958271 C17.4346535,116.616493 16.9118812,116.37084 16.3237624,116.221311 C15.7356436,116.071783 15.1584158,115.997019 14.5920792,115.997019 C12.849505,115.997019 11.1613861,116.402881 9.52772277,117.214605 C7.89405941,118.026329 6.42376238,118.96622 5.11683168,120.034277 C3.94059406,118.709886 2.96039604,117.460258 2.17623762,116.285395 C1.39207921,115.110532 1,114.095877 1,113.241431 C1,112.557874 1.18514851,111.959762 1.55544554,111.447094 C1.92574257,110.934426 2.43762376,110.44312 3.09108911,109.973174 C3.7009901,109.545951 4.44158416,109.097367 5.31287129,108.627422 C6.18415842,108.157476 7.1970297,107.730253 8.35148515,107.345753 C9.50594059,106.961252 10.8019802,106.640835 12.239604,106.384501 C13.6772277,106.128167 15.2891089,106 17.0752475,106 Z M256,28 L256,68 L58,68 L58,28 L256,28 Z M22.9369863,25 C24.1643836,25 25.1945205,25.1401003 26.0273973,25.4203008 C26.860274,25.7005013 27.5178082,25.9914787 28,26.2932331 L28,26.2932331 L28,68 L15.0465753,68 L15.0465753,40.0015038 L7.41917808,43.6225564 L6.9260274,42.8686015 C6.27726027,41.8581554 5.66356164,40.8270175 5.08493151,39.775188 C4.36164384,38.460401 4,37.2426065 4,36.1218045 C4,35.0010025 4.23013699,34.1496241 4.69041096,33.5676692 C5.15068493,32.9857143 6.03835616,32.3498747 7.35342466,31.6601504 L7.35342466,31.6601504 L17.1506849,26.6165414 L17.6091324,26.3866332 C18.3701674,26.0154275 19.1159817,25.7040936 19.8465753,25.4526316 C20.7232877,25.1508772 21.7534247,25 22.9369863,25 Z",
        ),
          d(l, "id", "Combined-Shape"),
          d(l, "fill-rule", "nonzero"),
          d(i, "id", "icon-list-complete"),
          d(i, "stroke", "none"),
          d(i, "stroke-width", "1"),
          d(i, "fill-rule", "evenodd"),
          ye(e, c);
      },
      m(o, a) {
        Ve(o, e, a), L(e, t), L(t, n), L(e, i), L(i, l);
      },
      p(o, [a]) {
        ye(
          e,
          (c = Xe(s, [
            { width: "256px" },
            { height: "256px" },
            { viewBox: "0 0 256 256" },
            { version: "1.1" },
            { xmlns: "http://www.w3.org/2000/svg" },
            { "xmlns:xlink": "http://www.w3.org/1999/xlink" },
            a & 1 && o[0],
          ])),
        );
      },
      i: j,
      o: j,
      d(o) {
        o && h(e);
      },
    };
  }
  function _o(r, e, t) {
    return (
      (r.$$set = (n) => {
        t(0, (e = $($({}, e), pe(n))));
      }),
      (e = pe(e)),
      [e]
    );
  }
  class po extends Ke {
    constructor(e) {
      super();
      Me(this, e, _o, mo, He, {});
    }
  }
  function go(r) {
    let e,
      t,
      n,
      i,
      l,
      s = [
        { width: "256px" },
        { height: "256px" },
        { viewBox: "0 0 256 256" },
        { version: "1.1" },
        { xmlns: "http://www.w3.org/2000/svg" },
        { "xmlns:xlink": "http://www.w3.org/1999/xlink" },
        r[0],
      ],
      c = {};
    for (let o = 0; o < s.length; o += 1) c = $(c, s[o]);
    return {
      c() {
        (e = C("svg")),
          (t = C("title")),
          (n = ee("icon-bullet-complete")),
          (i = C("g")),
          (l = C("path")),
          this.h();
      },
      l(o) {
        e = T(o, "svg", {
          width: !0,
          height: !0,
          viewBox: !0,
          version: !0,
          xmlns: !0,
          "xmlns:xlink": !0,
        });
        var a = S(e);
        t = T(a, "title", {});
        var f = S(t);
        (n = vt(f, "icon-bullet-complete")),
          f.forEach(h),
          (i = T(a, "g", {
            id: !0,
            stroke: !0,
            "stroke-width": !0,
            "fill-rule": !0,
          }));
        var u = S(i);
        (l = T(u, "path", { d: !0, id: !0, "fill-rule": !0 })),
          S(l).forEach(h),
          u.forEach(h),
          a.forEach(h),
          this.h();
      },
      h() {
        d(
          l,
          "d",
          "M256,188 L256,227 L67,227 L67,188 L256,188 Z M41,188 L41,227 L0,227 L0,188 L41,188 Z M256,109 L256,148 L67,148 L67,109 L256,109 Z M41,109 L41,148 L0,148 L0,109 L41,109 Z M256,30 L256,69 L67,69 L67,30 L256,30 Z M41,30 L41,69 L0,69 L0,30 L41,30 Z",
        ),
          d(l, "id", "Combined-Shape"),
          d(l, "fill-rule", "nonzero"),
          d(i, "id", "icon-bullet-complete"),
          d(i, "stroke", "none"),
          d(i, "stroke-width", "1"),
          d(i, "fill-rule", "evenodd"),
          ye(e, c);
      },
      m(o, a) {
        Ve(o, e, a), L(e, t), L(t, n), L(e, i), L(i, l);
      },
      p(o, [a]) {
        ye(
          e,
          (c = Xe(s, [
            { width: "256px" },
            { height: "256px" },
            { viewBox: "0 0 256 256" },
            { version: "1.1" },
            { xmlns: "http://www.w3.org/2000/svg" },
            { "xmlns:xlink": "http://www.w3.org/1999/xlink" },
            a & 1 && o[0],
          ])),
        );
      },
      i: j,
      o: j,
      d(o) {
        o && h(e);
      },
    };
  }
  function bo(r, e, t) {
    return (
      (r.$$set = (n) => {
        t(0, (e = $($({}, e), pe(n))));
      }),
      (e = pe(e)),
      [e]
    );
  }
  class vo extends Ke {
    constructor(e) {
      super();
      Me(this, e, bo, go, He, {});
    }
  }
  function wo(r) {
    let e,
      t,
      n,
      i,
      l,
      s = [
        { width: "256px" },
        { height: "256px" },
        { viewBox: "0 0 256 256" },
        { version: "1.1" },
        { xmlns: "http://www.w3.org/2000/svg" },
        { "xmlns:xlink": "http://www.w3.org/1999/xlink" },
        r[0],
      ],
      c = {};
    for (let o = 0; o < s.length; o += 1) c = $(c, s[o]);
    return {
      c() {
        (e = C("svg")),
          (t = C("title")),
          (n = ee("icon-aligned-left-complete")),
          (i = C("g")),
          (l = C("path")),
          this.h();
      },
      l(o) {
        e = T(o, "svg", {
          width: !0,
          height: !0,
          viewBox: !0,
          version: !0,
          xmlns: !0,
          "xmlns:xlink": !0,
        });
        var a = S(e);
        t = T(a, "title", {});
        var f = S(t);
        (n = vt(f, "icon-aligned-left-complete")),
          f.forEach(h),
          (i = T(a, "g", {
            id: !0,
            stroke: !0,
            "stroke-width": !0,
            "fill-rule": !0,
          }));
        var u = S(i);
        (l = T(u, "path", { d: !0, id: !0, "fill-rule": !0 })),
          S(l).forEach(h),
          u.forEach(h),
          a.forEach(h),
          this.h();
      },
      h() {
        d(
          l,
          "d",
          "M256,190 L256,232 L0,232 L0,190 L256,190 Z M162,107 L162,149 L0,149 L0,107 L162,107 Z M256,24 L256,66 L0,66 L0,24 L256,24 Z",
        ),
          d(l, "id", "Combined-Shape"),
          d(l, "fill-rule", "nonzero"),
          d(i, "id", "icon-aligned-left-complete"),
          d(i, "stroke", "none"),
          d(i, "stroke-width", "1"),
          d(i, "fill-rule", "evenodd"),
          ye(e, c);
      },
      m(o, a) {
        Ve(o, e, a), L(e, t), L(t, n), L(e, i), L(i, l);
      },
      p(o, [a]) {
        ye(
          e,
          (c = Xe(s, [
            { width: "256px" },
            { height: "256px" },
            { viewBox: "0 0 256 256" },
            { version: "1.1" },
            { xmlns: "http://www.w3.org/2000/svg" },
            { "xmlns:xlink": "http://www.w3.org/1999/xlink" },
            a & 1 && o[0],
          ])),
        );
      },
      i: j,
      o: j,
      d(o) {
        o && h(e);
      },
    };
  }
  function yo(r, e, t) {
    return (
      (r.$$set = (n) => {
        t(0, (e = $($({}, e), pe(n))));
      }),
      (e = pe(e)),
      [e]
    );
  }
  class ko extends Ke {
    constructor(e) {
      super();
      Me(this, e, yo, wo, He, {});
    }
  }
  function xo(r) {
    let e,
      t,
      n,
      i,
      l,
      s = [
        { width: "256px" },
        { height: "256px" },
        { viewBox: "0 0 256 256" },
        { version: "1.1" },
        { xmlns: "http://www.w3.org/2000/svg" },
        { "xmlns:xlink": "http://www.w3.org/1999/xlink" },
        r[0],
      ],
      c = {};
    for (let o = 0; o < s.length; o += 1) c = $(c, s[o]);
    return {
      c() {
        (e = C("svg")),
          (t = C("title")),
          (n = ee("icon-aligned-right-complete")),
          (i = C("g")),
          (l = C("path")),
          this.h();
      },
      l(o) {
        e = T(o, "svg", {
          width: !0,
          height: !0,
          viewBox: !0,
          version: !0,
          xmlns: !0,
          "xmlns:xlink": !0,
        });
        var a = S(e);
        t = T(a, "title", {});
        var f = S(t);
        (n = vt(f, "icon-aligned-right-complete")),
          f.forEach(h),
          (i = T(a, "g", {
            id: !0,
            stroke: !0,
            "stroke-width": !0,
            "fill-rule": !0,
          }));
        var u = S(i);
        (l = T(u, "path", { d: !0, id: !0, "fill-rule": !0, transform: !0 })),
          S(l).forEach(h),
          u.forEach(h),
          a.forEach(h),
          this.h();
      },
      h() {
        d(
          l,
          "d",
          "M256,190 L256,232 L0,232 L0,190 L256,190 Z M162,107 L162,149 L0,149 L0,107 L162,107 Z M256,24 L256,66 L0,66 L0,24 L256,24 Z",
        ),
          d(l, "id", "Combined-Shape"),
          d(l, "fill-rule", "nonzero"),
          d(
            l,
            "transform",
            "translate(128.000000, 128.000000) scale(-1, 1) translate(-128.000000, -128.000000) ",
          ),
          d(i, "id", "icon-aligned-right-complete"),
          d(i, "stroke", "none"),
          d(i, "stroke-width", "1"),
          d(i, "fill-rule", "evenodd"),
          ye(e, c);
      },
      m(o, a) {
        Ve(o, e, a), L(e, t), L(t, n), L(e, i), L(i, l);
      },
      p(o, [a]) {
        ye(
          e,
          (c = Xe(s, [
            { width: "256px" },
            { height: "256px" },
            { viewBox: "0 0 256 256" },
            { version: "1.1" },
            { xmlns: "http://www.w3.org/2000/svg" },
            { "xmlns:xlink": "http://www.w3.org/1999/xlink" },
            a & 1 && o[0],
          ])),
        );
      },
      i: j,
      o: j,
      d(o) {
        o && h(e);
      },
    };
  }
  function Eo(r, e, t) {
    return (
      (r.$$set = (n) => {
        t(0, (e = $($({}, e), pe(n))));
      }),
      (e = pe(e)),
      [e]
    );
  }
  class Co extends Ke {
    constructor(e) {
      super();
      Me(this, e, Eo, xo, He, {});
    }
  }
  function So(r) {
    let e,
      t,
      n,
      i,
      l,
      s = [
        { width: "256px" },
        { height: "256px" },
        { viewBox: "0 0 256 256" },
        { version: "1.1" },
        { xmlns: "http://www.w3.org/2000/svg" },
        { "xmlns:xlink": "http://www.w3.org/1999/xlink" },
        r[0],
      ],
      c = {};
    for (let o = 0; o < s.length; o += 1) c = $(c, s[o]);
    return {
      c() {
        (e = C("svg")),
          (t = C("title")),
          (n = ee("icon-centered-complete")),
          (i = C("g")),
          (l = C("path")),
          this.h();
      },
      l(o) {
        e = T(o, "svg", {
          width: !0,
          height: !0,
          viewBox: !0,
          version: !0,
          xmlns: !0,
          "xmlns:xlink": !0,
        });
        var a = S(e);
        t = T(a, "title", {});
        var f = S(t);
        (n = vt(f, "icon-centered-complete")),
          f.forEach(h),
          (i = T(a, "g", {
            id: !0,
            stroke: !0,
            "stroke-width": !0,
            "fill-rule": !0,
          }));
        var u = S(i);
        (l = T(u, "path", { d: !0, id: !0, "fill-rule": !0 })),
          S(l).forEach(h),
          u.forEach(h),
          a.forEach(h),
          this.h();
      },
      h() {
        d(
          l,
          "d",
          "M204,186 L204,224 L52,224 L52,186 L204,186 Z M257,110 L257,148 L0,148 L0,110 L257,110 Z M204,32 L204,70 L52,70 L52,32 L204,32 Z",
        ),
          d(l, "id", "Combined-Shape"),
          d(l, "fill-rule", "nonzero"),
          d(i, "id", "icon-centered-complete"),
          d(i, "stroke", "none"),
          d(i, "stroke-width", "1"),
          d(i, "fill-rule", "evenodd"),
          ye(e, c);
      },
      m(o, a) {
        Ve(o, e, a), L(e, t), L(t, n), L(e, i), L(i, l);
      },
      p(o, [a]) {
        ye(
          e,
          (c = Xe(s, [
            { width: "256px" },
            { height: "256px" },
            { viewBox: "0 0 256 256" },
            { version: "1.1" },
            { xmlns: "http://www.w3.org/2000/svg" },
            { "xmlns:xlink": "http://www.w3.org/1999/xlink" },
            a & 1 && o[0],
          ])),
        );
      },
      i: j,
      o: j,
      d(o) {
        o && h(e);
      },
    };
  }
  function To(r, e, t) {
    return (
      (r.$$set = (n) => {
        t(0, (e = $($({}, e), pe(n))));
      }),
      (e = pe(e)),
      [e]
    );
  }
  class Lo extends Ke {
    constructor(e) {
      super();
      Me(this, e, To, So, He, {});
    }
  }
  function Ao(r) {
    let e,
      t,
      n,
      i,
      l,
      s = [
        { width: "256px" },
        { height: "256px" },
        { viewBox: "0 0 256 256" },
        { version: "1.1" },
        { xmlns: "http://www.w3.org/2000/svg" },
        { "xmlns:xlink": "http://www.w3.org/1999/xlink" },
        r[0],
      ],
      c = {};
    for (let o = 0; o < s.length; o += 1) c = $(c, s[o]);
    return {
      c() {
        (e = C("svg")),
          (t = C("title")),
          (n = ee("icon-justified-complete")),
          (i = C("g")),
          (l = C("path")),
          this.h();
      },
      l(o) {
        e = T(o, "svg", {
          width: !0,
          height: !0,
          viewBox: !0,
          version: !0,
          xmlns: !0,
          "xmlns:xlink": !0,
        });
        var a = S(e);
        t = T(a, "title", {});
        var f = S(t);
        (n = vt(f, "icon-justified-complete")),
          f.forEach(h),
          (i = T(a, "g", {
            id: !0,
            stroke: !0,
            "stroke-width": !0,
            "fill-rule": !0,
          }));
        var u = S(i);
        (l = T(u, "path", { d: !0, id: !0, "fill-rule": !0 })),
          S(l).forEach(h),
          u.forEach(h),
          a.forEach(h),
          this.h();
      },
      h() {
        d(
          l,
          "d",
          "M257,186 L257,224 L0,224 L0,186 L257,186 Z M257,110 L257,148 L0,148 L0,110 L257,110 Z M256,32 L256,70 L0,70 L0,32 L256,32 Z",
        ),
          d(l, "id", "Combined-Shape"),
          d(l, "fill-rule", "nonzero"),
          d(i, "id", "icon-justified-complete"),
          d(i, "stroke", "none"),
          d(i, "stroke-width", "1"),
          d(i, "fill-rule", "evenodd"),
          ye(e, c);
      },
      m(o, a) {
        Ve(o, e, a), L(e, t), L(t, n), L(e, i), L(i, l);
      },
      p(o, [a]) {
        ye(
          e,
          (c = Xe(s, [
            { width: "256px" },
            { height: "256px" },
            { viewBox: "0 0 256 256" },
            { version: "1.1" },
            { xmlns: "http://www.w3.org/2000/svg" },
            { "xmlns:xlink": "http://www.w3.org/1999/xlink" },
            a & 1 && o[0],
          ])),
        );
      },
      i: j,
      o: j,
      d(o) {
        o && h(e);
      },
    };
  }
  function Oo(r, e, t) {
    return (
      (r.$$set = (n) => {
        t(0, (e = $($({}, e), pe(n))));
      }),
      (e = pe(e)),
      [e]
    );
  }
  class Mo extends Ke {
    constructor(e) {
      super();
      Me(this, e, Oo, Ao, He, {});
    }
  }
  function No(r) {
    let e,
      t,
      n,
      i,
      l,
      s,
      c = [
        { version: "1.1" },
        { id: "Capa_1" },
        { xmlns: "http://www.w3.org/2000/svg" },
        { "xmlns:xlink": "http://www.w3.org/1999/xlink" },
        { x: "0px" },
        { y: "0px" },
        { viewBox: "0 0 511.997 511.997" },
        { style: "enable-background:new 0 0 511.997 511.997;" },
        { "xml:space": "preserve" },
        r[0],
      ],
      o = {};
    for (let a = 0; a < c.length; a += 1) o = $(o, c[a]);
    return {
      c() {
        (e = C("svg")),
          (t = C("g")),
          (n = C("g")),
          (i = C("g")),
          (l = C("path")),
          (s = C("path")),
          this.h();
      },
      l(a) {
        e = T(a, "svg", {
          version: !0,
          id: !0,
          xmlns: !0,
          "xmlns:xlink": !0,
          x: !0,
          y: !0,
          viewBox: !0,
          style: !0,
          "xml:space": !0,
        });
        var f = S(e);
        t = T(f, "g", { transform: !0 });
        var u = S(t);
        n = T(u, "g", {});
        var g = S(n);
        i = T(g, "g", {});
        var b = S(i);
        (l = T(b, "path", { d: !0 })),
          S(l).forEach(h),
          (s = T(b, "path", { d: !0 })),
          S(s).forEach(h),
          b.forEach(h),
          g.forEach(h),
          u.forEach(h),
          f.forEach(h),
          this.h();
      },
      h() {
        d(
          l,
          "d",
          `M211.26,389.24l-60.331,60.331c-25.012,25.012-65.517,25.012-90.508,0.005c-24.996-24.996-24.996-65.505-0.005-90.496
				l120.683-120.683c24.991-24.992,65.5-24.992,90.491,0c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17
				c-41.654-41.654-109.177-41.654-150.831,0L30.247,328.909c-41.654,41.654-41.654,109.177,0,150.831
				c41.649,41.676,109.177,41.676,150.853,0l60.331-60.331c8.331-8.331,8.331-21.839,0-30.17S219.591,380.909,211.26,389.24z`,
        ),
          d(
            s,
            "d",
            `M479.751,30.24c-41.654-41.654-109.199-41.654-150.853,0l-72.384,72.384c-8.331,8.331-8.331,21.839,0,30.17
				c8.331,8.331,21.839,8.331,30.17,0l72.384-72.384c24.991-24.992,65.521-24.992,90.513,0c24.991,24.991,24.991,65.5,0,90.491
				L316.845,283.638c-24.992,24.992-65.5,24.992-90.491,0c-8.331-8.331-21.839-8.331-30.17,0s-8.331,21.839,0,30.17
				c41.654,41.654,109.177,41.654,150.831,0l132.736-132.736C521.405,139.418,521.405,71.894,479.751,30.24z`,
          ),
          d(t, "transform", "translate(1 1)"),
          ye(e, o);
      },
      m(a, f) {
        Ve(a, e, f), L(e, t), L(t, n), L(n, i), L(i, l), L(i, s);
      },
      p(a, [f]) {
        ye(
          e,
          (o = Xe(c, [
            { version: "1.1" },
            { id: "Capa_1" },
            { xmlns: "http://www.w3.org/2000/svg" },
            { "xmlns:xlink": "http://www.w3.org/1999/xlink" },
            { x: "0px" },
            { y: "0px" },
            { viewBox: "0 0 511.997 511.997" },
            { style: "enable-background:new 0 0 511.997 511.997;" },
            { "xml:space": "preserve" },
            f & 1 && a[0],
          ])),
        );
      },
      i: j,
      o: j,
      d(a) {
        a && h(e);
      },
    };
  }
  function Do(r, e, t) {
    return (
      (r.$$set = (n) => {
        t(0, (e = $($({}, e), pe(n))));
      }),
      (e = pe(e)),
      [e]
    );
  }
  class zo extends Ke {
    constructor(e) {
      super();
      Me(this, e, Do, No, He, {});
    }
  }
  const Rt = (r) => document.queryCommandState(r),
    ht = (r, e) => document.execCommand(r, !1, e),
    Ro = [
      {
        title: "Bold",
        state: () => Rt("bold"),
        result: () => ht("bold"),
        icon: lo,
      },
      {
        title: "Italic",
        state: () => Rt("italic"),
        result: () => ht("italic"),
        icon: co,
      },
      {
        title: "Underline",
        state: () => Rt("underline"),
        result: () => ht("underline"),
        icon: ho,
      },
      {
        title: "Justify Left",
        state: () => Rt("justifyLeft"),
        result: () => ht("justifyLeft"),
        icon: ko,
      },
      {
        title: "Justify Right",
        state: () => Rt("justifyRight"),
        result: () => ht("justifyRight"),
        icon: Co,
      },
      {
        title: "Justify Center",
        state: () => Rt("justifyCenter"),
        result: () => ht("justifyCenter"),
        icon: Lo,
      },
      {
        title: "Justify Full",
        state: () => Rt("justifyFull"),
        result: () => ht("justifyFull"),
        icon: Mo,
      },
      {
        title: "Ordered List",
        result: () => ht("insertOrderedList"),
        icon: po,
      },
      {
        title: "Unordered List",
        result: () => ht("insertUnorderedList"),
        icon: vo,
      },
      {
        title: "Link",
        result: () => {
          const r = prompt("Enter a URL:", "http://");
          return ht("createLink", r || "");
        },
        icon: zo,
      },
    ];
  function fn(r, e, t) {
    const n = r.slice();
    return (n[12] = e[t]), n;
  }
  function un(r) {
    let e,
      t,
      n = r[3],
      i = [];
    for (let s = 0; s < n.length; s += 1) i[s] = dn(fn(r, n, s));
    const l = (s) =>
      te(i[s], 1, 1, () => {
        i[s] = null;
      });
    return {
      c() {
        e = w("div");
        for (let s = 0; s < i.length; s += 1) i[s].c();
        d(e, "class", "toolbar");
      },
      m(s, c) {
        E(s, e, c);
        for (let o = 0; o < i.length; o += 1) i[o].m(e, null);
        t = !0;
      },
      p(s, c) {
        if (c & 24) {
          n = s[3];
          let o;
          for (o = 0; o < n.length; o += 1) {
            const a = fn(s, n, o);
            i[o]
              ? (i[o].p(a, c), W(i[o], 1))
              : ((i[o] = dn(a)), i[o].c(), W(i[o], 1), i[o].m(e, null));
          }
          for (We(), o = n.length; o < i.length; o += 1) l(o);
          Ze();
        }
      },
      i(s) {
        if (!t) {
          for (let c = 0; c < n.length; c += 1) W(i[c]);
          t = !0;
        }
      },
      o(s) {
        i = i.filter(Boolean);
        for (let c = 0; c < i.length; c += 1) te(i[c]);
        t = !1;
      },
      d(s) {
        s && h(e), jr(i, s);
      },
    };
  }
  function Fo(r) {
    let e = r[12].title.charAt(0) + "",
      t;
    return {
      c() {
        t = ee(e);
      },
      m(n, i) {
        E(n, t, i);
      },
      p(n, i) {
        i & 8 && e !== (e = n[12].title.charAt(0) + "") && Ae(t, e);
      },
      i: j,
      o: j,
      d(n) {
        n && h(t);
      },
    };
  }
  function Io(r) {
    let e, t, n;
    var i = r[12].icon;
    function l(s) {
      return {
        props: {
          class: "icon",
          style:
            "fill: var(--composer-icons-color, #666774) !important; width: 12px; height: 12px;",
        },
      };
    }
    return (
      i && (e = new i(l())),
      {
        c() {
          e && nt(e.$$.fragment), (t = st());
        },
        m(s, c) {
          e && rt(e, s, c), E(s, t, c), (n = !0);
        },
        p(s, c) {
          if (i !== (i = s[12].icon)) {
            if (e) {
              We();
              const o = e;
              te(o.$$.fragment, 1, 0, () => {
                tt(o, 1);
              }),
                Ze();
            }
            i
              ? ((e = new i(l())),
                nt(e.$$.fragment),
                W(e.$$.fragment, 1),
                rt(e, t.parentNode, t))
              : (e = null);
          }
        },
        i(s) {
          n || (e && W(e.$$.fragment, s), (n = !0));
        },
        o(s) {
          e && te(e.$$.fragment, s), (n = !1);
        },
        d(s) {
          s && h(t), e && tt(e, s);
        },
      }
    );
  }
  function dn(r) {
    let e, t, n, i, l, s, c, o, a;
    const f = [Io, Fo],
      u = [];
    function g(b, v) {
      return b[12].icon ? 0 : 1;
    }
    return (
      (t = g(r)),
      (n = u[t] = f[t](r)),
      {
        c() {
          (e = w("button")),
            n.c(),
            (i = P()),
            d(e, "title", (l = r[12].title)),
            d(e, "class", (s = r[12].state && r[12].state() ? "active" : ""));
        },
        m(b, v) {
          E(b, e, v),
            u[t].m(e, null),
            p(e, i),
            (c = !0),
            o ||
              ((a = he(
                e,
                "click",
                qi(function () {
                  er(r[4](r[12])) && r[4](r[12]).apply(this, arguments);
                }),
                !0,
              )),
              (o = !0));
        },
        p(b, v) {
          r = b;
          let y = t;
          (t = g(r)),
            t === y
              ? u[t].p(r, v)
              : (We(),
                te(u[y], 1, 1, () => {
                  u[y] = null;
                }),
                Ze(),
                (n = u[t]),
                n ? n.p(r, v) : ((n = u[t] = f[t](r)), n.c()),
                W(n, 1),
                n.m(e, i)),
            (!c || (v & 8 && l !== (l = r[12].title))) && d(e, "title", l),
            (!c ||
              (v & 8 &&
                s !== (s = r[12].state && r[12].state() ? "active" : ""))) &&
              d(e, "class", s);
        },
        i(b) {
          c || (W(n), (c = !0));
        },
        o(b) {
          te(n), (c = !1);
        },
        d(b) {
          b && h(e), u[t].d(), (o = !1), a();
        },
      }
    );
  }
  function Po(r) {
    let e,
      t,
      n,
      i,
      l,
      s,
      c,
      o = r[1] && un(r);
    return {
      c() {
        (e = w("div")),
          o && o.c(),
          (t = P()),
          (n = P()),
          (i = w("div")),
          (this.c = j),
          d(i, "contenteditable", "true"),
          d(i, "class", "html-editor-content"),
          d(i, "role", "textbox"),
          d(i, "aria-label", "HTML Editor"),
          r[0] === void 0 && yr(() => r[11].call(i)),
          d(e, "class", "html-editor");
      },
      m(a, f) {
        E(a, e, f),
          o && o.m(e, null),
          p(e, t),
          p(e, n),
          p(e, i),
          r[10](i),
          r[0] !== void 0 && (i.innerHTML = r[0]),
          (l = !0),
          s ||
            ((c = [
              he(i, "input", r[11]),
              he(i, "focus", r[6]),
              he(i, "keyup", r[5]),
              he(i, "mouseup", r[5]),
            ]),
            (s = !0));
      },
      p(a, [f]) {
        a[1]
          ? o
            ? (o.p(a, f), f & 2 && W(o, 1))
            : ((o = un(a)), o.c(), W(o, 1), o.m(e, t))
          : o &&
            (We(),
            te(o, 1, 1, () => {
              o = null;
            }),
            Ze()),
          f & 1 && a[0] !== i.innerHTML && (i.innerHTML = a[0]);
      },
      i(a) {
        l || (W(o), (l = !0));
      },
      o(a) {
        te(o), (l = !1);
      },
      d(a) {
        a && h(e), o && o.d(), r[10](null), (s = !1), et(c);
      },
    };
  }
  function hn(r, e) {
    const t = document.createRange(),
      n = window.getSelection();
    t.selectNode(r),
      t.setStart(r, e),
      t.collapse(!0),
      t.detach(),
      n == null || n.removeAllRanges(),
      n == null || n.addRange(t);
  }
  function Ho(r, e, t) {
    let { onchange: n = (y) => Promise.resolve({}) } = e,
      { html: i = "" } = e,
      { show_editor_toolbar: l = !0 } = e,
      { replace_fields: s = null } = e,
      { focus_body_onload: c = !1 } = e,
      o,
      a = Ro;
    const f = (y) => () => {
      y.result && (o && o.focus(), y.result()), u();
    };
    function u() {
      t(3, (a = a.map((y) => (y.state && (y.active = y.state()), y))));
    }
    const g = () => {
      if (o.innerHTML === "") {
        t(2, (o.innerHTML = "\xA0"), o);
        const y = window.getSelection(),
          x = document.createRange();
        x.selectNodeContents(o),
          x.collapse(!1),
          y.removeAllRanges(),
          y.addRange(x);
      }
    };
    function b(y) {
      Ct[y ? "unshift" : "push"](() => {
        (o = y), t(2, o);
      });
    }
    function v() {
      (i = this.innerHTML), t(0, i), t(7, s), t(8, n);
    }
    return (
      (r.$$set = (y) => {
        "onchange" in y && t(8, (n = y.onchange)),
          "html" in y && t(0, (i = y.html)),
          "show_editor_toolbar" in y && t(1, (l = y.show_editor_toolbar)),
          "replace_fields" in y && t(7, (s = y.replace_fields)),
          "focus_body_onload" in y && t(9, (c = y.focus_body_onload));
      }),
      (r.$$.update = () => {
        if (
          (r.$$.dirty & 516 && c && o && (o.focus(), g()),
          r.$$.dirty & 385 && i)
        ) {
          const y = window.getSelection();
          if (
            (typeof s == "string" && t(7, (s = JSON.parse(s))),
            y && Array.isArray(s))
          )
            for (const x of s) {
              t(0, (i = i.replaceAll(x.from, x.to)));
              const D = y.focusNode,
                H = y.focusOffset;
              if (D && D.textContent && D.textContent.includes(x.from)) {
                const G = D.textContent.split(x.from).length - 1,
                  oe = document.createTextNode(
                    D.textContent.replaceAll(x.from, x.to),
                  );
                D.replaceWith(oe),
                  y.focusNode &&
                    y.focusNode.nodeType === Node.TEXT_NODE &&
                    (G > 1
                      ? hn(oe, H + (x.to.length - x.from.length) + (G - 1))
                      : hn(oe, H + x.to.length - x.from.length));
              }
            }
          n && n(i);
        }
      }),
      [i, l, o, a, f, u, g, s, n, c, b, v]
    );
  }
  class jo extends wt {
    constructor(e) {
      super();
      (this.shadowRoot.innerHTML =
        "<style>.html-editor{min-height:var(--composer-editor-min-height, 220px);max-height:var(--composer-editor-max-height, 480px)}.html-editor *:focus{outline:5px auto var(--composer-primary-color, #5c77ff)}.html-editor-content{min-height:var(--composer-editor-min-height, 220px);max-height:var(--composer-editor-max-height, 480px)}a{color:var(--composer-primary-color, #5c77ff)}a:hover{color:var(--composer-primary-dark-color, #294dff)}[contenteditable]{padding:var(--composer-outer-padding, 15px) var(--composer-outer-padding, 15px);margin:0;outline:0;line-height:1.3;color:var(--composer-text-color, black);overflow-y:auto}.toolbar{display:flex;font-size:10px;align-items:center;justify-content:flex-start;border-bottom:1px solid var(--composer-border-color, #f7f7f7);padding:0 calc(var(--composer-outer-padding, 15px) / 2)}.toolbar button{color:var(--composer-text-light-color, #6e6e7a);background:none;border:0;cursor:pointer;display:flex;padding:8px;margin:2px;outline:0;border-radius:calc(var(--composer-border-radius, 6px) / 2);transition:background-color 0.3s}.toolbar button.active{background:var(--composer-background-muted-color, #f0f2ff)}.toolbar button:first-child{margin-left:0}.toolbar button:hover{background:var(--composer-background-muted-color, #f0f2ff)}</style>"),
        Me(
          this,
          {
            target: this.shadowRoot,
            props: Et(this.attributes),
            customElement: !0,
          },
          Ho,
          Po,
          He,
          {
            onchange: 8,
            html: 0,
            show_editor_toolbar: 1,
            replace_fields: 7,
            focus_body_onload: 9,
          },
          null,
        ),
        e &&
          (e.target && E(e.target, this, e.anchor),
          e.props && (this.$set(e.props), z()));
    }
    static get observedAttributes() {
      return [
        "onchange",
        "html",
        "show_editor_toolbar",
        "replace_fields",
        "focus_body_onload",
      ];
    }
    get onchange() {
      return this.$$.ctx[8];
    }
    set onchange(e) {
      this.$$set({ onchange: e }), z();
    }
    get html() {
      return this.$$.ctx[0];
    }
    set html(e) {
      this.$$set({ html: e }), z();
    }
    get show_editor_toolbar() {
      return this.$$.ctx[1];
    }
    set show_editor_toolbar(e) {
      this.$$set({ show_editor_toolbar: e }), z();
    }
    get replace_fields() {
      return this.$$.ctx[7];
    }
    set replace_fields(e) {
      this.$$set({ replace_fields: e }), z();
    }
    get focus_body_onload() {
      return this.$$.ctx[9];
    }
    set focus_body_onload(e) {
      this.$$set({ focus_body_onload: e }), z();
    }
  }
  customElements.define("nylas-html-editor", jo);
  function mn(r) {
    let e,
      t,
      n,
      i,
      l = r[2] && _n(r);
    return {
      c() {
        (e = w("div")),
          (t = w("div")),
          (n = w("div")),
          (n.innerHTML = "<slot></slot>"),
          (i = P()),
          l && l.c(),
          d(n, "class", "alert-bar__text"),
          d(t, "class", "alert-bar__container"),
          d(e, "class", "alert-bar"),
          Fe(e, "success", r[1] === "success"),
          Fe(e, "warning", r[1] === "warning"),
          Fe(e, "danger", r[1] === "danger"),
          Fe(e, "primary", r[1] === "primary"),
          Fe(e, "info", r[1] === "info");
      },
      m(s, c) {
        E(s, e, c), p(e, t), p(t, n), p(t, i), l && l.m(t, null);
      },
      p(s, c) {
        s[2]
          ? l
            ? l.p(s, c)
            : ((l = _n(s)), l.c(), l.m(t, null))
          : l && (l.d(1), (l = null)),
          c & 2 && Fe(e, "success", s[1] === "success"),
          c & 2 && Fe(e, "warning", s[1] === "warning"),
          c & 2 && Fe(e, "danger", s[1] === "danger"),
          c & 2 && Fe(e, "primary", s[1] === "primary"),
          c & 2 && Fe(e, "info", s[1] === "info");
      },
      d(s) {
        s && h(e), l && l.d();
      },
    };
  }
  function _n(r) {
    let e, t, n;
    return {
      c() {
        (e = w("button")),
          (e.textContent = "\xD7"),
          d(e, "class", "alert-bar__close");
      },
      m(i, l) {
        E(i, e, l), t || ((n = he(e, "click", r[3])), (t = !0));
      },
      p: j,
      d(i) {
        i && h(e), (t = !1), n();
      },
    };
  }
  function Bo(r) {
    let e,
      t = r[0] && mn(r);
    return {
      c() {
        t && t.c(), (e = st()), (this.c = j);
      },
      m(n, i) {
        t && t.m(n, i), E(n, e, i);
      },
      p(n, [i]) {
        n[0]
          ? t
            ? t.p(n, i)
            : ((t = mn(n)), t.c(), t.m(e.parentNode, e))
          : t && (t.d(1), (t = null));
      },
      i: j,
      o: j,
      d(n) {
        t && t.d(n), n && h(e);
      },
    };
  }
  function Uo(r, e, t) {
    let { type: n = "primary" } = e,
      { dismissible: i = !0 } = e,
      { visible: l = !0 } = e,
      { ondismiss: s = null } = e;
    const c = () => {
      s && s(), t(0, (l = !1));
    };
    return (
      (r.$$set = (o) => {
        "type" in o && t(1, (n = o.type)),
          "dismissible" in o && t(2, (i = o.dismissible)),
          "visible" in o && t(0, (l = o.visible)),
          "ondismiss" in o && t(4, (s = o.ondismiss));
      }),
      [l, n, i, c, s]
    );
  }
  class Go extends wt {
    constructor(e) {
      super();
      (this.shadowRoot.innerHTML =
        "<style>.alert-bar{padding:var(--composer-outer-padding, 15px);text-align:center;font-size:var(--composer-font-size-small, 12px);border-bottom-left-radius:var(--composer-border-color, #f7f7f7-radius);border-bottom-right-radius:var(--composer-border-radius, 6px)}.alert-bar__container{display:flex;align-items:center;justify-content:between}.alert-bar__text{flex-grow:1}.alert-bar__close{outline:0;border:0;background:none;font-size:18px;opacity:0.8;cursor:pointer}.alert-bar__close:hover{opacity:1}.alert-bar *:focus{outline:5px auto Highlight;outline:5px auto -webkit-focus-ring-color}.alert-bar.success{background:var(--composer-success-light-color, var(--composer-primary-color, #5c77ff));color:var(--composer-success-color, var(--composer-background-color, white))}.alert-bar.success .alert-bar__close{color:var(--composer-success-color, var(--composer-background-color, white))}.alert-bar.danger{background:var(--composer-danger-light-color, #ffe3e3);color:var(--composer-danger-color, #ff5c5c)}.alert-bar.danger .alert-bar__close{color:var(--composer-danger-color, #ff5c5c)}.alert-bar.info{background:var(--composer-info-light-color, var(--composer-primary-light-color, #f0f2ff));color:var(--composer-info-color, var(--composer-primary-color, #5c77ff))}.alert-bar.info .alert-bar__close{color:var(--composer-info-color, var(--composer-primary-color, #5c77ff))}</style>"),
        Me(
          this,
          {
            target: this.shadowRoot,
            props: Et(this.attributes),
            customElement: !0,
          },
          Uo,
          Bo,
          He,
          { type: 1, dismissible: 2, visible: 0, ondismiss: 4 },
          null,
        ),
        e &&
          (e.target && E(e.target, this, e.anchor),
          e.props && (this.$set(e.props), z()));
    }
    static get observedAttributes() {
      return ["type", "dismissible", "visible", "ondismiss"];
    }
    get type() {
      return this.$$.ctx[1];
    }
    set type(e) {
      this.$$set({ type: e }), z();
    }
    get dismissible() {
      return this.$$.ctx[2];
    }
    set dismissible(e) {
      this.$$set({ dismissible: e }), z();
    }
    get visible() {
      return this.$$.ctx[0];
    }
    set visible(e) {
      this.$$set({ visible: e }), z();
    }
    get ondismiss() {
      return this.$$.ctx[4];
    }
    set ondismiss(e) {
      this.$$set({ ondismiss: e }), z();
    }
  }
  customElements.define("nylas-composer-alert-bar", Go);
  function Jo(r) {
    let e,
      t,
      n = [
        { height: "10" },
        { viewBox: "0 0 329.26933 329" },
        { width: "10" },
        { xmlns: "http://www.w3.org/2000/svg" },
        r[0],
      ],
      i = {};
    for (let l = 0; l < n.length; l += 1) i = $(i, n[l]);
    return {
      c() {
        (e = C("svg")), (t = C("path")), this.h();
      },
      l(l) {
        e = T(l, "svg", { height: !0, viewBox: !0, width: !0, xmlns: !0 });
        var s = S(e);
        (t = T(s, "path", { d: !0 })), S(t).forEach(h), s.forEach(h), this.h();
      },
      h() {
        d(
          t,
          "d",
          "m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0",
        ),
          ye(e, i);
      },
      m(l, s) {
        Ve(l, e, s), L(e, t);
      },
      p(l, [s]) {
        ye(
          e,
          (i = Xe(n, [
            { height: "10" },
            { viewBox: "0 0 329.26933 329" },
            { width: "10" },
            { xmlns: "http://www.w3.org/2000/svg" },
            s & 1 && l[0],
          ])),
        );
      },
      i: j,
      o: j,
      d(l) {
        l && h(e);
      },
    };
  }
  function Wo(r, e, t) {
    return (
      (r.$$set = (n) => {
        t(0, (e = $($({}, e), pe(n))));
      }),
      (e = pe(e)),
      [e]
    );
  }
  class ir extends Ke {
    constructor(e) {
      super();
      Me(this, e, Wo, Jo, He, {});
    }
  }
  function Zo(r) {
    let e,
      t,
      n,
      i,
      l,
      s,
      c,
      o,
      a,
      f,
      u,
      g = [
        { id: "Capa_1" },
        { "enable-background": "new 0 0 497 497" },
        { height: "512" },
        { viewBox: "0 0 497 497" },
        { width: "512" },
        { xmlns: "http://www.w3.org/2000/svg" },
        r[0],
      ],
      b = {};
    for (let v = 0; v < g.length; v += 1) b = $(b, g[v]);
    return {
      c() {
        (e = C("svg")),
          (t = C("g")),
          (n = C("circle")),
          (i = C("circle")),
          (l = C("circle")),
          (s = C("ellipse")),
          (c = C("ellipse")),
          (o = C("ellipse")),
          (a = C("ellipse")),
          (f = C("ellipse")),
          (u = C("circle")),
          this.h();
      },
      l(v) {
        e = T(v, "svg", {
          id: !0,
          "enable-background": !0,
          height: !0,
          viewBox: !0,
          width: !0,
          xmlns: !0,
        });
        var y = S(e);
        t = T(y, "g", {});
        var x = S(t);
        (n = T(x, "circle", { cx: !0, cy: !0, fill: !0, r: !0 })),
          S(n).forEach(h),
          (i = T(x, "circle", { cx: !0, cy: !0, fill: !0, r: !0 })),
          S(i).forEach(h),
          (l = T(x, "circle", { cx: !0, cy: !0, fill: !0, r: !0 })),
          S(l).forEach(h),
          (s = T(x, "ellipse", { cx: !0, cy: !0, fill: !0, rx: !0, ry: !0 })),
          S(s).forEach(h),
          (c = T(x, "ellipse", { cx: !0, cy: !0, fill: !0, rx: !0, ry: !0 })),
          S(c).forEach(h),
          (o = T(x, "ellipse", { cx: !0, cy: !0, fill: !0, rx: !0, ry: !0 })),
          S(o).forEach(h),
          (a = T(x, "ellipse", { cx: !0, cy: !0, fill: !0, rx: !0, ry: !0 })),
          S(a).forEach(h),
          (f = T(x, "ellipse", { cx: !0, cy: !0, fill: !0, rx: !0, ry: !0 })),
          S(f).forEach(h),
          (u = T(x, "circle", { cx: !0, cy: !0, fill: !0, r: !0 })),
          S(u).forEach(h),
          x.forEach(h),
          y.forEach(h),
          this.h();
      },
      h() {
        d(n, "cx", "98"),
          d(n, "cy", "376"),
          d(n, "fill", "#909ba6"),
          d(n, "r", "53"),
          d(i, "cx", "439"),
          d(i, "cy", "336"),
          d(i, "fill", "#c8d2dc"),
          d(i, "r", "46"),
          d(l, "cx", "397"),
          d(l, "cy", "112"),
          d(l, "fill", "#e9edf1"),
          d(l, "r", "38"),
          d(s, "cx", "56.245"),
          d(s, "cy", "244.754"),
          d(s, "fill", "#7e8b96"),
          d(s, "rx", "56.245"),
          d(s, "ry", "54.874"),
          d(c, "cx", "217.821"),
          d(c, "cy", "447.175"),
          d(c, "fill", "#a2abb8"),
          d(c, "rx", "51.132"),
          d(c, "ry", "49.825"),
          d(o, "cx", "349.229"),
          d(o, "cy", "427.873"),
          d(o, "fill", "#b9c3cd"),
          d(o, "rx", "48.575"),
          d(o, "ry", "47.297"),
          d(a, "cx", "117.092"),
          d(a, "cy", "114.794"),
          d(a, "fill", "#5f6c75"),
          d(a, "rx", "58.801"),
          d(a, "ry", "57.397"),
          d(f, "cx", "453.538"),
          d(f, "cy", "216.477"),
          d(f, "fill", "#dce6eb"),
          d(f, "rx", "43.462"),
          d(f, "ry", "42.656"),
          d(u, "cx", "263"),
          d(u, "cy", "62"),
          d(u, "fill", "#4e5a61"),
          d(u, "r", "62"),
          ye(e, b);
      },
      m(v, y) {
        Ve(v, e, y),
          L(e, t),
          L(t, n),
          L(t, i),
          L(t, l),
          L(t, s),
          L(t, c),
          L(t, o),
          L(t, a),
          L(t, f),
          L(t, u);
      },
      p(v, [y]) {
        ye(
          e,
          (b = Xe(g, [
            { id: "Capa_1" },
            { "enable-background": "new 0 0 497 497" },
            { height: "512" },
            { viewBox: "0 0 497 497" },
            { width: "512" },
            { xmlns: "http://www.w3.org/2000/svg" },
            y & 1 && v[0],
          ])),
        );
      },
      i: j,
      o: j,
      d(v) {
        v && h(e);
      },
    };
  }
  function Yo(r, e, t) {
    return (
      (r.$$set = (n) => {
        t(0, (e = $($({}, e), pe(n))));
      }),
      (e = pe(e)),
      [e]
    );
  }
  class pn extends Ke {
    constructor(e) {
      super();
      Me(this, e, Yo, Zo, He, {});
    }
  }
  function gn(r) {
    let e,
      t,
      n,
      i,
      l,
      s,
      c,
      o,
      a = !r[0].error && bn(r),
      f = r[0].loading && vn(),
      u = r[0].error && wn(r),
      g = !r[0].loading && yn(r);
    return {
      c() {
        (e = w("div")),
          (t = w("div")),
          (n = w("div")),
          a && a.c(),
          (i = P()),
          (l = w("div")),
          f && f.c(),
          (s = P()),
          u && u.c(),
          (c = P()),
          g && g.c(),
          d(n, "class", "file-info"),
          d(l, "class", "file-info__right"),
          d(t, "class", "file-item"),
          d(e, "class", "wrapper");
      },
      m(b, v) {
        E(b, e, v),
          p(e, t),
          p(t, n),
          a && a.m(n, null),
          p(t, i),
          p(t, l),
          f && f.m(l, null),
          p(l, s),
          u && u.m(l, null),
          p(l, c),
          g && g.m(l, null),
          (o = !0);
      },
      p(b, v) {
        b[0].error
          ? a && (a.d(1), (a = null))
          : a
          ? a.p(b, v)
          : ((a = bn(b)), a.c(), a.m(n, null)),
          b[0].loading
            ? f
              ? v & 1 && W(f, 1)
              : ((f = vn()), f.c(), W(f, 1), f.m(l, s))
            : f &&
              (We(),
              te(f, 1, 1, () => {
                f = null;
              }),
              Ze()),
          b[0].error
            ? u
              ? u.p(b, v)
              : ((u = wn(b)), u.c(), u.m(l, c))
            : u && (u.d(1), (u = null)),
          b[0].loading
            ? g &&
              (We(),
              te(g, 1, 1, () => {
                g = null;
              }),
              Ze())
            : g
            ? (g.p(b, v), v & 1 && W(g, 1))
            : ((g = yn(b)), g.c(), W(g, 1), g.m(l, null));
      },
      i(b) {
        o || (W(f), W(g), (o = !0));
      },
      o(b) {
        te(f), te(g), (o = !1);
      },
      d(b) {
        b && h(e), a && a.d(), f && f.d(), u && u.d(), g && g.d();
      },
    };
  }
  function bn(r) {
    let e,
      t = r[0].filename + "",
      n,
      i,
      l,
      s = r[2](r[0].size) + "",
      c;
    return {
      c() {
        (e = w("div")),
          (n = ee(t)),
          (i = P()),
          (l = w("span")),
          (c = ee(s)),
          d(l, "class", "file-item__size");
      },
      m(o, a) {
        E(o, e, a), p(e, n), E(o, i, a), E(o, l, a), p(l, c);
      },
      p(o, a) {
        a & 1 && t !== (t = o[0].filename + "") && Ae(n, t),
          a & 1 && s !== (s = o[2](o[0].size) + "") && Ae(c, s);
      },
      d(o) {
        o && h(e), o && h(i), o && h(l);
      },
    };
  }
  function vn(r) {
    let e, t;
    return (
      (e = new pn({
        props: {
          style:
            "fill: var(--composer-icons-color, #666774); width: 15px; height: 15px; animation: rotate 0.5s infinite linear;",
        },
      })),
      {
        c() {
          nt(e.$$.fragment);
        },
        m(n, i) {
          rt(e, n, i), (t = !0);
        },
        i(n) {
          t || (W(e.$$.fragment, n), (t = !0));
        },
        o(n) {
          te(e.$$.fragment, n), (t = !1);
        },
        d(n) {
          tt(e, n);
        },
      }
    );
  }
  function wn(r) {
    var i;
    let e,
      t =
        ((i = r[0].errorMessage) != null
          ? i
          : "Error: Please try attaching the file again.") + "",
      n;
    return {
      c() {
        (e = w("span")), (n = ee(t)), d(e, "class", "file-info__error");
      },
      m(l, s) {
        E(l, e, s), p(e, n);
      },
      p(l, s) {
        var c;
        s & 1 &&
          t !==
            (t =
              ((c = l[0].errorMessage) != null
                ? c
                : "Error: Please try attaching the file again.") + "") &&
          Ae(n, t);
      },
      d(l) {
        l && h(e);
      },
    };
  }
  function yn(r) {
    let e, t, n, i, l;
    return (
      (t = new ir({ props: { class: "CloseIcon" } })),
      {
        c() {
          (e = w("button")), nt(t.$$.fragment), d(e, "class", "close-btn");
        },
        m(s, c) {
          E(s, e, c),
            rt(t, e, null),
            (n = !0),
            i || ((l = he(e, "click", r[3])), (i = !0));
        },
        p: j,
        i(s) {
          n || (W(t.$$.fragment, s), (n = !0));
        },
        o(s) {
          te(t.$$.fragment, s), (n = !1);
        },
        d(s) {
          s && h(e), tt(t), (i = !1), l();
        },
      }
    );
  }
  function Vo(r) {
    let e,
      t,
      n = r[0] && gn(r);
    return {
      c() {
        n && n.c(), (e = st()), (this.c = j);
      },
      m(i, l) {
        n && n.m(i, l), E(i, e, l), (t = !0);
      },
      p(i, [l]) {
        i[0]
          ? n
            ? (n.p(i, l), l & 1 && W(n, 1))
            : ((n = gn(i)), n.c(), W(n, 1), n.m(e.parentNode, e))
          : n &&
            (We(),
            te(n, 1, 1, () => {
              n = null;
            }),
            Ze());
      },
      i(i) {
        t || (W(n), (t = !0));
      },
      o(i) {
        te(n), (t = !1);
      },
      d(i) {
        n && n.d(i), i && h(e);
      },
    };
  }
  function Xo(r, e, t) {
    let { attachment: n } = e,
      { remove: i } = e;
    const l = (c) => {
        const o = Math.floor(Math.log(c) / Math.log(1024));
        return `${(c / Math.pow(1024, o)).toFixed(2) * 1}
      ${["B", "kB", "MB", "GB", "TB"][o]}`;
      },
      s = () => i(n);
    return (
      (r.$$set = (c) => {
        "attachment" in c && t(0, (n = c.attachment)),
          "remove" in c && t(1, (i = c.remove));
      }),
      [n, i, l, s]
    );
  }
  class Ko extends wt {
    constructor(e) {
      super();
      (this.shadowRoot.innerHTML =
        "<style>.wrapper{padding:0.3rem 0}.file-item{display:flex;align-items:center;justify-content:space-between;padding:0.8rem;color:var(--composer-text-color, black);font-weight:700;background:var(--composer-background-muted-color, #f0f2ff);border-radius:var(--composer-border-radius, 6px)}.close-btn{background:none;border:none;cursor:pointer;margin-left:10px;flex-shrink:0}.file-info{display:flex;color:var(--composer-text-color, black);flex-direction:column}.file-info__error{color:var(--composer-danger-color, #ff5c5c);font-size:var(--composer-font-size-small, 12px);margin-right:5px}.file-info__right{display:flex;align-items:center;justify-content:flex-end;flex-shrink:0;margin-left:10px}.file-item__size{flex-shrink:0;word-break:keep-all;color:var(--composer-text-light-color, #6e6e7a);margin-top:10px;font-size:var(--composer-font-size-small, 12px)}@keyframes rotate{to{transform:rotate(360deg)}}@media(min-width: 640px){.file-info{flex-direction:row;align-items:center;max-width:90%}.file-item__size{margin:0 0 0 5px}}</style>"),
        Me(
          this,
          {
            target: this.shadowRoot,
            props: Et(this.attributes),
            customElement: !0,
          },
          Xo,
          Vo,
          He,
          { attachment: 0, remove: 1 },
          null,
        ),
        e &&
          (e.target && E(e.target, this, e.anchor),
          e.props && (this.$set(e.props), z()));
    }
    static get observedAttributes() {
      return ["attachment", "remove"];
    }
    get attachment() {
      return this.$$.ctx[0];
    }
    set attachment(e) {
      this.$$set({ attachment: e }), z();
    }
    get remove() {
      return this.$$.ctx[1];
    }
    set remove(e) {
      this.$$set({ remove: e }), z();
    }
  }
  customElements.define("nylas-composer-attachment", Ko);
  function kn(r, e, t) {
    const n = r.slice();
    return (n[41] = e[t]), n;
  }
  function xn(r, e, t) {
    const n = r.slice();
    return (n[44] = e[t]), n;
  }
  function En(r, e, t) {
    const n = r.slice();
    return (n[47] = e[t]), n;
  }
  function Cn(r, e) {
    let t,
      n,
      i = e[47].day + "",
      l,
      s,
      c,
      o,
      a;
    function f() {
      return e[24](e[47]);
    }
    return {
      key: r,
      first: null,
      c() {
        (t = w("div")),
          (n = w("button")),
          (l = ee(i)),
          (c = P()),
          (n.disabled = s = e[47].isDisabled),
          Fe(n, "label", !e[47].activeMonth),
          Fe(n, "current", e[47].activeMonth),
          Fe(n, "selected", e[47].isSelected),
          (this.first = t);
      },
      m(u, g) {
        E(u, t, g),
          p(t, n),
          p(n, l),
          p(t, c),
          o || ((a = he(n, "click", f)), (o = !0));
      },
      p(u, g) {
        (e = u),
          g[0] & 4 && i !== (i = e[47].day + "") && Ae(l, i),
          g[0] & 4 && s !== (s = e[47].isDisabled) && (n.disabled = s),
          g[0] & 4 && Fe(n, "label", !e[47].activeMonth),
          g[0] & 4 && Fe(n, "current", e[47].activeMonth),
          g[0] & 4 && Fe(n, "selected", e[47].isSelected);
      },
      d(u) {
        u && h(t), (o = !1), a();
      },
    };
  }
  function Sn(r) {
    let e,
      t,
      n,
      i,
      l,
      s = [],
      c = new Map(),
      o,
      a,
      f,
      u = [],
      g = new Map(),
      b,
      v,
      y,
      x,
      D,
      H,
      G,
      oe,
      le,
      I,
      O,
      U,
      fe,
      B,
      ve = r[3];
    const me = (J) => J[44];
    for (let J = 0; J < ve.length; J += 1) {
      let V = xn(r, ve, J),
        ue = me(V);
      c.set(ue, (s[J] = Tn(ue, V)));
    }
    let we = r[4];
    const Ne = (J) => J[41];
    for (let J = 0; J < we.length; J += 1) {
      let V = kn(r, we, J),
        ue = Ne(V);
      g.set(ue, (u[J] = Ln(ue, V)));
    }
    return {
      c() {
        (e = w("div")),
          (t = w("p")),
          (t.textContent = "Set time"),
          (n = P()),
          (i = w("div")),
          (l = w("select"));
        for (let J = 0; J < s.length; J += 1) s[J].c();
        (a = P()), (f = w("select"));
        for (let J = 0; J < u.length; J += 1) u[J].c();
        (v = P()),
          (y = w("div")),
          (x = w("button")),
          (D = ee("AM")),
          (oe = P()),
          (le = w("button")),
          (I = ee("PM")),
          d(l, "class", "picker"),
          d(f, "class", "picker"),
          d(i, "class", "time"),
          d(
            x,
            "class",
            (H =
              r[1].getHours() < 12
                ? "clock-button clock-button-active"
                : "clock-button"),
          ),
          (x.disabled = G = r[8]()),
          d(
            le,
            "class",
            (O =
              r[1].getHours() >= 12
                ? "clock-button clock-button-active"
                : "clock-button"),
          ),
          (le.disabled = U = r[7]()),
          d(y, "class", "clock"),
          d(e, "class", "timepicker");
      },
      m(J, V) {
        E(J, e, V), p(e, t), p(e, n), p(e, i), p(i, l);
        for (let ue = 0; ue < s.length; ue += 1) s[ue].m(l, null);
        br(l, r[1].getHours()), r[25](l), p(i, a), p(i, f);
        for (let ue = 0; ue < u.length; ue += 1) u[ue].m(f, null);
        br(f, r[1].getMinutes()),
          r[27](f),
          p(e, v),
          p(e, y),
          p(y, x),
          p(x, D),
          p(y, oe),
          p(y, le),
          p(le, I),
          fe ||
            ((B = [
              he(l, "blur", r[26]),
              he(f, "blur", r[28]),
              he(x, "click", r[29]),
              he(le, "click", r[30]),
            ]),
            (fe = !0));
      },
      p(J, V) {
        V[0] & 10 &&
          ((ve = J[3]), (s = Cr(s, V, me, 1, J, ve, c, l, Er, Tn, null, xn))),
          V[0] & 2 && o !== (o = J[1].getHours()) && br(l, J[1].getHours()),
          V[0] & 16 &&
            ((we = J[4]), (u = Cr(u, V, Ne, 1, J, we, g, f, Er, Ln, null, kn))),
          V[0] & 2 && b !== (b = J[1].getMinutes()) && br(f, J[1].getMinutes()),
          V[0] & 2 &&
            H !==
              (H =
                J[1].getHours() < 12
                  ? "clock-button clock-button-active"
                  : "clock-button") &&
            d(x, "class", H),
          V[0] & 256 && G !== (G = J[8]()) && (x.disabled = G),
          V[0] & 2 &&
            O !==
              (O =
                J[1].getHours() >= 12
                  ? "clock-button clock-button-active"
                  : "clock-button") &&
            d(le, "class", O),
          V[0] & 128 && U !== (U = J[7]()) && (le.disabled = U);
      },
      d(J) {
        J && h(e);
        for (let V = 0; V < s.length; V += 1) s[V].d();
        r[25](null);
        for (let V = 0; V < u.length; V += 1) u[V].d();
        r[27](null), (fe = !1), et(B);
      },
    };
  }
  function Qo(r) {
    let e,
      t = r[44].text + "",
      n,
      i,
      l,
      s;
    return {
      c() {
        (e = w("option")),
          (n = ee(t)),
          (i = P()),
          (e.__value = l = r[44].value),
          (e.value = e.__value),
          (e.disabled = s = r[44].disabled);
      },
      m(c, o) {
        E(c, e, o), p(e, n), p(e, i);
      },
      p(c, o) {
        o[0] & 8 && t !== (t = c[44].text + "") && Ae(n, t),
          o[0] & 8 &&
            l !== (l = c[44].value) &&
            ((e.__value = l), (e.value = e.__value)),
          o[0] & 8 && s !== (s = c[44].disabled) && (e.disabled = s);
      },
      d(c) {
        c && h(e);
      },
    };
  }
  function qo(r) {
    let e,
      t = r[44].text + "",
      n,
      i,
      l,
      s;
    return {
      c() {
        (e = w("option")),
          (n = ee(t)),
          (i = P()),
          (e.__value = l = r[44].value),
          (e.value = e.__value),
          (e.disabled = s = r[44].disabled);
      },
      m(c, o) {
        E(c, e, o), p(e, n), p(e, i);
      },
      p(c, o) {
        o[0] & 8 && t !== (t = c[44].text + "") && Ae(n, t),
          o[0] & 8 &&
            l !== (l = c[44].value) &&
            ((e.__value = l), (e.value = e.__value)),
          o[0] & 8 && s !== (s = c[44].disabled) && (e.disabled = s);
      },
      d(c) {
        c && h(e);
      },
    };
  }
  function Tn(r, e) {
    let t, n, i, l;
    function s(a, f) {
      if (
        (f[0] & 10 && (n = null),
        f[0] & 10 && (i = null),
        n == null && (n = a[1].getHours() >= 12 && a[44].value >= 12),
        n)
      )
        return qo;
      if ((i == null && (i = a[1].getHours() < 12 && a[44].value < 12), i))
        return Qo;
    }
    let c = s(e, [-1, -1]),
      o = c && c(e);
    return {
      key: r,
      first: null,
      c() {
        (t = st()), o && o.c(), (l = st()), (this.first = t);
      },
      m(a, f) {
        E(a, t, f), o && o.m(a, f), E(a, l, f);
      },
      p(a, f) {
        (e = a),
          c === (c = s(e, f)) && o
            ? o.p(e, f)
            : (o && o.d(1),
              (o = c && c(e)),
              o && (o.c(), o.m(l.parentNode, l)));
      },
      d(a) {
        a && h(t), o && o.d(a), a && h(l);
      },
    };
  }
  function Ln(r, e) {
    let t,
      n = e[41].text + "",
      i,
      l,
      s,
      c;
    return {
      key: r,
      first: null,
      c() {
        (t = w("option")),
          (i = ee(n)),
          (l = P()),
          (t.__value = s = e[41].value),
          (t.value = t.__value),
          (t.disabled = c = e[41].disabled),
          (this.first = t);
      },
      m(o, a) {
        E(o, t, a), p(t, i), p(t, l);
      },
      p(o, a) {
        (e = o),
          a[0] & 16 && n !== (n = e[41].text + "") && Ae(i, n),
          a[0] & 16 &&
            s !== (s = e[41].value) &&
            ((t.__value = s), (t.value = t.__value)),
          a[0] & 16 && c !== (c = e[41].disabled) && (t.disabled = c);
      },
      d(o) {
        o && h(t);
      },
    };
  }
  function $o(r) {
    let e,
      t,
      n,
      i,
      l,
      s = (r[0] ? " and time" : "") + "",
      c,
      o,
      a,
      f,
      u,
      g = r[11][r[10]] + "",
      b,
      v,
      y,
      x,
      D,
      H,
      G,
      oe,
      le,
      I,
      O,
      U,
      fe,
      B,
      ve,
      me,
      we,
      Ne,
      J,
      V = [],
      ue = new Map(),
      Ue,
      ze,
      F,
      _e = r[2];
    const ke = (ie) => ie[47];
    for (let ie = 0; ie < _e.length; ie += 1) {
      let se = En(r, _e, ie),
        Re = ke(se);
      ue.set(Re, (V[ie] = Cn(Re, se)));
    }
    let ce = r[0] && Sn(r);
    return {
      c() {
        (e = w("div")),
          (t = w("div")),
          (n = w("div")),
          (i = w("h2")),
          (l = ee(`Pick a date
        `)),
          (c = ee(s)),
          (o = P()),
          (a = w("div")),
          (f = w("div")),
          (u = w("h3")),
          (b = ee(g)),
          (v = P()),
          (y = ee(r[9])),
          (x = P()),
          (D = w("div")),
          (H = w("div")),
          (G = w("button")),
          (G.textContent = "\u2039"),
          (oe = P()),
          (le = w("span")),
          (le.textContent = "Previous month"),
          (I = P()),
          (O = w("div")),
          (U = w("button")),
          (U.textContent = "\u203A"),
          (fe = P()),
          (B = w("span")),
          (B.textContent = "Next month"),
          (ve = P()),
          (me = w("div")),
          (we = w("div")),
          (we.innerHTML = `<div class="day label">SUN</div> 
          <div class="day label">MON</div> 
          <div class="day label">TUE</div> 
          <div class="day label">WED</div> 
          <div class="day label">THU</div> 
          <div class="day label">FRI</div> 
          <div class="day label">SAT</div>`),
          (Ne = P()),
          (J = w("div"));
        for (let ie = 0; ie < V.length; ie += 1) V[ie].c();
        (Ue = P()),
          ce && ce.c(),
          (this.c = j),
          d(i, "class", "datepicker-header"),
          d(f, "class", "current-month"),
          d(G, "class", "datepicker-btn"),
          d(le, "class", "tooltiptext"),
          d(H, "class", "tooltip"),
          d(U, "class", "datepicker-btn"),
          d(B, "class", "tooltiptext"),
          d(O, "class", "tooltip"),
          d(a, "class", "datepicker-controls"),
          d(we, "class", "label-days"),
          d(J, "id", "calendarDays"),
          d(J, "class", "days"),
          d(me, "class", "datepicker-dates"),
          d(n, "class", "datepicker-wrapper"),
          d(t, "class", "datepicker"),
          d(t, "id", "datepicker");
      },
      m(ie, se) {
        E(ie, e, se),
          p(e, t),
          p(t, n),
          p(n, i),
          p(i, l),
          p(i, c),
          p(n, o),
          p(n, a),
          p(a, f),
          p(f, u),
          p(u, b),
          p(u, v),
          p(u, y),
          p(a, x),
          p(a, D),
          p(D, H),
          p(H, G),
          p(H, oe),
          p(H, le),
          p(D, I),
          p(D, O),
          p(O, U),
          p(O, fe),
          p(O, B),
          p(n, ve),
          p(n, me),
          p(me, we),
          p(me, Ne),
          p(me, J);
        for (let Re = 0; Re < V.length; Re += 1) V[Re].m(J, null);
        p(me, Ue),
          ce && ce.m(me, null),
          ze ||
            ((F = [he(G, "click", r[22]), he(U, "click", r[23])]), (ze = !0));
      },
      p(ie, se) {
        se[0] & 1 && s !== (s = (ie[0] ? " and time" : "") + "") && Ae(c, s),
          se[0] & 1024 && g !== (g = ie[11][ie[10]] + "") && Ae(b, g),
          se[0] & 512 && Ae(y, ie[9]),
          se[0] & 8196 &&
            ((_e = ie[2]),
            (V = Cr(V, se, ke, 1, ie, _e, ue, J, Er, Cn, null, En))),
          ie[0]
            ? ce
              ? ce.p(ie, se)
              : ((ce = Sn(ie)), ce.c(), ce.m(me, null))
            : ce && (ce.d(1), (ce = null));
      },
      i: j,
      o: j,
      d(ie) {
        ie && h(e);
        for (let se = 0; se < V.length; se += 1) V[se].d();
        ce && ce.d(), (ze = !1), et(F);
      },
    };
  }
  const An = 8634e4;
  function ge(r) {
    let e = "" + (r.getMonth() + 1),
      t = "" + r.getDate(),
      n = r.getFullYear();
    return (
      e.length < 2 && (e = "0" + e),
      t.length < 2 && (t = "0" + t),
      [n, e, t].join("-")
    );
  }
  function el(r, e, t) {
    let n, i, l, s;
    const c = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let { value: o = new Date() } = e,
      { min: a } = e,
      { max: f } = e,
      { timepicker: u = !1 } = e,
      { change: g } = e,
      b = new Date(),
      v = new Date(),
      y = [],
      x = [],
      D = [],
      H,
      G;
    const oe = () => {
        o && t(1, (v = o)), u && (me(), Ne());
      },
      le = (A, ae, Te = 1) => new Date(A, ae + Te, 0).getDate(),
      I = (A) => {
        t(21, (b = new Date(b.setMonth(b.getMonth() + A)))), ue();
      },
      O = (A) => {
        const ae = new Date(A);
        u && (ae.setHours(parseInt(H.value)), ae.setMinutes(parseInt(G.value))),
          t(1, (v = new Date(ae))),
          a && ge(a) === ge(A) && t(1, (v = new Date(a))),
          f && ge(f) === ge(A) && t(1, (v = new Date(f))),
          V(),
          u && (we(), J());
      },
      U = () => {
        t(1, (v = new Date(v.setHours(parseInt(H.value))))),
          a && !f
            ? ge(a) === ge(v) &&
              t(1, (v = new Date(v.setMinutes(a.getMinutes()))))
            : f && !a
            ? ge(f) === ge(v) &&
              t(1, (v = new Date(v.setMinutes(f.getMinutes()))))
            : f &&
              a &&
              (ge(a) === ge(v)
                ? t(1, (v = new Date(v.setMinutes(a.getMinutes()))))
                : ge(f) === ge(v) &&
                  t(1, (v = new Date(v.setMinutes(f.getMinutes()))))),
          J();
      },
      fe = () => {
        t(1, (v = new Date(v.setMinutes(parseInt(G.value)))));
      },
      B = (A) => {
        t(1, (v = new Date(v.setHours(v.getHours() + A))));
      },
      ve = (A) => (
        (A = A > 12 ? A - 12 : A === 0 ? 12 : A),
        `${A}`.length < 2 ? `0${A}` : `${A}`
      ),
      me = () => {
        const A = [];
        for (let ae = 0; ae < 24; ae++)
          A.push({ value: ae, text: ve(ae), disabled: !1 });
        t(3, (x = A)), we();
      },
      we = () =>
        t(
          3,
          (x = x.map(
            (A) => (
              (A.disabled = !1),
              a && !f
                ? ge(a) === ge(v) && (A.disabled = A.value < a.getHours())
                : f && !a
                ? ge(f) === ge(v) && (A.disabled = A.value > f.getHours())
                : f &&
                  a &&
                  (ge(a) === ge(v)
                    ? (A.disabled = A.value < a.getHours())
                    : ge(f) === ge(v) && (A.disabled = A.value > f.getHours())),
              A
            ),
          )),
        ),
      Ne = () => {
        const A = [];
        for (let ae = 0; ae < 60; ae++)
          A.push({
            value: ae,
            text: `${ae}`.length < 2 ? `0${ae}` : `${ae}`,
            disabled: !1,
          });
        t(4, (D = A)), J();
      },
      J = () =>
        t(
          4,
          (D = D.map(
            (A) => (
              (A.disabled = !1),
              a && !f
                ? ge(a) === ge(v) &&
                  v.getHours() === a.getHours() &&
                  (A.disabled = A.value < a.getMinutes())
                : f && !a
                ? ge(f) === ge(v) &&
                  v.getHours() === f.getHours() &&
                  (A.disabled = A.value > f.getMinutes())
                : f &&
                  a &&
                  (ge(a) === ge(v) && v.getHours() === a.getHours()
                    ? (A.disabled = A.value < a.getMinutes())
                    : ge(f) === ge(v) &&
                      v.getHours() === f.getHours() &&
                      (A.disabled = A.value > f.getMinutes())),
              A
            ),
          )),
        ),
      V = () =>
        t(
          2,
          (y = y.map(
            (A) => (
              a && !f && (A.isDisabled = A.date.getTime() + An < a.getTime()),
              f && !a && (A.isDisabled = A.date.getTime() > f.getTime()),
              f &&
                a &&
                (A.isDisabled =
                  A.date.getTime() + An < a.getTime() ||
                  A.date.getTime() > f.getTime()),
              (A.isSelected = ge(A.date) === ge(v) && !A.isDisabled),
              A
            ),
          )),
        ),
      ue = () => {
        t(2, (y = [])), t(21, (b = new Date(b.setDate(1))));
        const A = le(b.getFullYear(), b.getMonth()),
          ae = le(b.getFullYear(), b.getMonth(), 0);
        for (let re = b.getDay(); re > 0; re--)
          t(
            2,
            (y = [
              ...y,
              {
                day: ae - re + 1,
                activeMonth: !1,
                date: new Date(b.getFullYear(), b.getMonth() - 1, ae - re + 1),
              },
            ]),
          );
        for (let re = 1; re <= A; re++)
          t(
            2,
            (y = [
              ...y,
              {
                day: re,
                activeMonth: !0,
                date: new Date(b.getFullYear(), b.getMonth(), re),
              },
            ]),
          );
        const Te = 42 - y.length;
        for (let re = 1; re <= Te; re++)
          t(
            2,
            (y = [
              ...y,
              {
                day: re,
                activeMonth: !1,
                date: new Date(b.getFullYear(), b.getMonth() + 1, re),
              },
            ]),
          );
        V();
      };
    ue();
    const Ue = () => I(-1),
      ze = () => I(1),
      F = (A) => O(A.date);
    function _e(A) {
      Ct[A ? "unshift" : "push"](() => {
        (H = A), t(5, H), t(3, x);
      });
    }
    const ke = () => U();
    function ce(A) {
      Ct[A ? "unshift" : "push"](() => {
        (G = A), t(6, G), t(4, D);
      });
    }
    const ie = () => fe(),
      se = () => v.getHours() >= 12 && B(-12),
      Re = () => v.getHours() < 12 && B(12);
    return (
      (r.$$set = (A) => {
        "value" in A && t(17, (o = A.value)),
          "min" in A && t(18, (a = A.min)),
          "max" in A && t(19, (f = A.max)),
          "timepicker" in A && t(0, (u = A.timepicker)),
          "change" in A && t(20, (g = A.change));
      }),
      (r.$$.update = () => {
        r.$$.dirty[0] & 1048578 &&
          v &&
          g &&
          wr().then(() => {
            g(v);
          }),
          r.$$.dirty[0] & 2097152 && t(10, (n = b.getMonth())),
          r.$$.dirty[0] & 2097152 && t(9, (i = b.getFullYear())),
          r.$$.dirty[0] & 4 &&
            y.filter((A) => A.activeMonth && !A.isDisabled).length,
          r.$$.dirty[0] & 917505 && (o || a || f || u) && (oe(), V()),
          r.$$.dirty[0] & 262146 &&
            t(
              8,
              (l = () => {
                if (a) return ge(a) === ge(v) ? a.getHours() >= 12 : !1;
              }),
            ),
          r.$$.dirty[0] & 524290 &&
            t(
              7,
              (s = () => {
                if (f) return ge(f) === ge(v) ? f.getHours() < 12 : !1;
              }),
            );
      }),
      [
        u,
        v,
        y,
        x,
        D,
        H,
        G,
        s,
        l,
        i,
        n,
        c,
        I,
        O,
        U,
        fe,
        B,
        o,
        a,
        f,
        g,
        b,
        Ue,
        ze,
        F,
        _e,
        ke,
        ce,
        ie,
        se,
        Re,
      ]
    );
  }
  class tl extends wt {
    constructor(e) {
      super();
      (this.shadowRoot.innerHTML =
        "<style>.datepicker{font-family:var(--font);width:100%;font-size:var(--font-size);background:var(--background);font-family:sans-serif;font-size:14px}.datepicker-wrapper{padding:1rem}.datepicker-dates{display:flex;flex-direction:column}.label-days{flex:1;display:flex;flex-wrap:wrap}.datepicker-header{padding:10px;color:var(--text);margin:0px}.datepicker-controls{display:flex;align-items:center;justify-content:space-between;padding:10px}.datepicker-btn{height:31px;width:31px;background:var(--background);font-size:18px;cursor:pointer;font-weight:700;border-radius:50px;border:none;color:var(--text)}.datepicker-btn:hover{background:var(--primary-dark) !important;color:var(--button-active-text)}.datepicker-btn:focus{outline:none}.label-days>div{flex-basis:14.2857142857%;text-align:center}.days{width:100%;display:flex;flex-wrap:wrap}.label{color:var(--text-light);font-size:10px}.current{font-weight:700}.current-month h3{color:var(--text);margin:0px}.selected{background:var(--primary) !important;color:var(--button-active-text) !important;font-weight:700}.days div{flex-basis:14.2857142857%;text-align:center;margin-top:3px;box-sizing:border-box;margin-bottom:3px}.days div button{border-radius:50px;background:var(--background);color:var(--text);width:30px;font-size:12px;font-weight:500;height:30px;padding:0;text-align:center;cursor:pointer;border:none}.days div button:focus{outline:0}.days div button:hover{background:var(--primary-dark);color:var(--button-active-text) !important}.days div button:disabled{color:var(--text-light);opacity:0.6;cursor:not-allowed}.timepicker{display:flex;justify-content:space-between;align-items:center;padding:10px 10px}.timepicker div{display:flex}.timepicker p{margin:0;color:var(--text-light)}.picker{border-radius:4px;border:none;color:var(--text);padding:5px 0px;background:var(--background);margin:0px 3px;width:100%}.clock{border-radius:4px;display:flex;width:75px;background:var(--background)}.time{flex:1}.clock-button{border-radius:4px;color:#a4aaad;background:none;cursor:pointer;flex:1;padding:5px 0px;border:none;outline:0}.clock-button:disabled{cursor:not-allowed}.clock-button-active{color:#fff;background:var(--primary)}.tooltip{position:relative;display:inline-block}.tooltip .tooltiptext{opacity:0;visibility:hidden;width:120px;background-color:white;color:#000;text-align:center;border-radius:6px;padding:5px 0;box-shadow:0 1px 10px rgba(0, 0, 0, 0.11), 0 3px 10px rgba(0, 0, 0, 0.12);position:absolute;z-index:1;top:110%;left:50%;margin-left:-60px;transition:opacity 0.3s;transition-delay:1s}.tooltip:hover .tooltiptext{opacity:1;visibility:visible}</style>"),
        Me(
          this,
          {
            target: this.shadowRoot,
            props: Et(this.attributes),
            customElement: !0,
          },
          el,
          $o,
          _r,
          { value: 17, min: 18, max: 19, timepicker: 0, change: 20 },
          null,
          [-1, -1],
        ),
        e &&
          (e.target && E(e.target, this, e.anchor),
          e.props && (this.$set(e.props), z()));
    }
    static get observedAttributes() {
      return ["value", "min", "max", "timepicker", "change"];
    }
    get value() {
      return this.$$.ctx[17];
    }
    set value(e) {
      this.$$set({ value: e }), z();
    }
    get min() {
      return this.$$.ctx[18];
    }
    set min(e) {
      this.$$set({ min: e }), z();
    }
    get max() {
      return this.$$.ctx[19];
    }
    set max(e) {
      this.$$set({ max: e }), z();
    }
    get timepicker() {
      return this.$$.ctx[0];
    }
    set timepicker(e) {
      this.$$set({ timepicker: e }), z();
    }
    get change() {
      return this.$$.ctx[20];
    }
    set change(e) {
      this.$$set({ change: e }), z();
    }
  }
  customElements.define("nylas-datepicker", tl);
  function rl(r) {
    let e, t, n, i, l, s, c, o, a, f, u;
    return (
      (i = new ir({ props: { class: "CloseIcon" } })),
      {
        c() {
          (e = w("div")),
            (t = w("div")),
            (n = w("span")),
            nt(i.$$.fragment),
            (l = P()),
            (s = w("nylas-datepicker")),
            (c = P()),
            (o = w("button")),
            (o.textContent = "Schedule send"),
            (this.c = j),
            d(n, "class", "close"),
            q(s, "change", r[1]),
            q(s, "timepicker", !0),
            q(s, "min", new Date()),
            d(o, "class", "save-btn"),
            d(t, "class", "modal-content"),
            d(e, "class", "datepicker-modal");
        },
        m(g, b) {
          E(g, e, b),
            p(e, t),
            p(t, n),
            rt(i, n, null),
            p(t, l),
            p(t, s),
            p(t, c),
            p(t, o),
            (a = !0),
            f ||
              ((u = [
                he(n, "click", function () {
                  er(r[0]) && r[0].apply(this, arguments);
                }),
                he(o, "click", r[2]),
              ]),
              (f = !0));
        },
        p(g, [b]) {
          r = g;
        },
        i(g) {
          a || (W(i.$$.fragment, g), (a = !0));
        },
        o(g) {
          te(i.$$.fragment, g), (a = !1);
        },
        d(g) {
          g && h(e), tt(i), (f = !1), et(u);
        },
      }
    );
  }
  function nl(r, e, t) {
    let n,
      { schedule: i } = e,
      { close: l } = e;
    const s = (o) => {
        n = o;
      },
      c = () => {
        i(Math.trunc(n.getTime() / 1e3));
      };
    return (
      (r.$$set = (o) => {
        "schedule" in o && t(3, (i = o.schedule)),
          "close" in o && t(0, (l = o.close));
      }),
      [l, s, c, i]
    );
  }
  class il extends wt {
    constructor(e) {
      super();
      (this.shadowRoot.innerHTML =
        "<style>.modal-content{display:block;box-shadow:var(--composer-shadow, 0 1px 10px rgba(0, 0, 0, 0.11), 0 3px 36px rgba(0, 0, 0, 0.12));border-radius:var(--composer-border-radius, 6px)}.close{color:var(--composer-text-light-color, #6e6e7a);float:right;padding-right:10px;font-size:28px;font-weight:bold}.close:hover,.close:focus{color:var(--composer-text-color, black);text-decoration:none;cursor:pointer}.save-btn{border:0;background:var(--composer-primary-color, #5c77ff);width:100%;color:white;cursor:pointer;padding:10px 25px;font-weight:bold;border-radius:0 0 var(--composer-border-radius, 6px) var(--composer-border-radius, 6px);font-family:var(--composer-font, sans-serif)}.save-btn:disabled{opacity:0.5}.save-btn:hover{background:var(--composer-primary-dark-color, #294dff)}.datepicker-modal{position:absolute;bottom:calc(var(--composer-outer-padding, 15px) * 0.85);right:calc(var(--composer-outer-padding, 15px) * 0.85);left:calc(var(--composer-outer-padding, 15px) * 0.85)}</style>"),
        Me(
          this,
          {
            target: this.shadowRoot,
            props: Et(this.attributes),
            customElement: !0,
          },
          nl,
          rl,
          He,
          { schedule: 3, close: 0 },
          null,
        ),
        e &&
          (e.target && E(e.target, this, e.anchor),
          e.props && (this.$set(e.props), z()));
    }
    static get observedAttributes() {
      return ["schedule", "close"];
    }
    get schedule() {
      return this.$$.ctx[3];
    }
    set schedule(e) {
      this.$$set({ schedule: e }), z();
    }
    get close() {
      return this.$$.ctx[0];
    }
    set close(e) {
      this.$$set({ close: e }), z();
    }
  }
  customElements.define("nylas-composer-datepicker-modal", il);
  var ol =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : typeof self != "undefined"
      ? self
      : {};
  function ll(r, e, t) {
    return (
      (t = {
        path: e,
        exports: {},
        require: function (n, i) {
          return sl(n, i == null ? t.path : i);
        },
      }),
      r(t, t.exports),
      t.exports
    );
  }
  function sl() {
    throw new Error(
      "Dynamic requires are not currently supported by @rollup/plugin-commonjs",
    );
  }
  var al = ll(function (r, e) {
    /*! @license DOMPurify 2.3.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.5/LICENSE */ (function (
      t,
      n,
    ) {
      r.exports = n();
    })(ol, function () {
      function t(N) {
        if (Array.isArray(N)) {
          for (var R = 0, Y = Array(N.length); R < N.length; R++) Y[R] = N[R];
          return Y;
        } else return Array.from(N);
      }
      var n = Object.hasOwnProperty,
        i = Object.setPrototypeOf,
        l = Object.isFrozen,
        s = Object.getPrototypeOf,
        c = Object.getOwnPropertyDescriptor,
        o = Object.freeze,
        a = Object.seal,
        f = Object.create,
        u = typeof Reflect != "undefined" && Reflect,
        g = u.apply,
        b = u.construct;
      g ||
        (g = function (R, Y, ne) {
          return R.apply(Y, ne);
        }),
        o ||
          (o = function (R) {
            return R;
          }),
        a ||
          (a = function (R) {
            return R;
          }),
        b ||
          (b = function (R, Y) {
            return new (Function.prototype.bind.apply(
              R,
              [null].concat(t(Y)),
            ))();
          });
      var v = U(Array.prototype.forEach),
        y = U(Array.prototype.pop),
        x = U(Array.prototype.push),
        D = U(String.prototype.toLowerCase),
        H = U(String.prototype.match),
        G = U(String.prototype.replace),
        oe = U(String.prototype.indexOf),
        le = U(String.prototype.trim),
        I = U(RegExp.prototype.test),
        O = fe(TypeError);
      function U(N) {
        return function (R) {
          for (
            var Y = arguments.length, ne = Array(Y > 1 ? Y - 1 : 0), be = 1;
            be < Y;
            be++
          )
            ne[be - 1] = arguments[be];
          return g(N, R, ne);
        };
      }
      function fe(N) {
        return function () {
          for (var R = arguments.length, Y = Array(R), ne = 0; ne < R; ne++)
            Y[ne] = arguments[ne];
          return b(N, Y);
        };
      }
      function B(N, R) {
        i && i(N, null);
        for (var Y = R.length; Y--; ) {
          var ne = R[Y];
          if (typeof ne == "string") {
            var be = D(ne);
            be !== ne && (l(R) || (R[Y] = be), (ne = be));
          }
          N[ne] = !0;
        }
        return N;
      }
      function ve(N) {
        var R = f(null),
          Y = void 0;
        for (Y in N) g(n, N, [Y]) && (R[Y] = N[Y]);
        return R;
      }
      function me(N, R) {
        for (; N !== null; ) {
          var Y = c(N, R);
          if (Y) {
            if (Y.get) return U(Y.get);
            if (typeof Y.value == "function") return U(Y.value);
          }
          N = s(N);
        }
        function ne(be) {
          return console.warn("fallback value for", be), null;
        }
        return ne;
      }
      var we = o([
          "a",
          "abbr",
          "acronym",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "bdi",
          "bdo",
          "big",
          "blink",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "center",
          "cite",
          "code",
          "col",
          "colgroup",
          "content",
          "data",
          "datalist",
          "dd",
          "decorator",
          "del",
          "details",
          "dfn",
          "dialog",
          "dir",
          "div",
          "dl",
          "dt",
          "element",
          "em",
          "fieldset",
          "figcaption",
          "figure",
          "font",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "img",
          "input",
          "ins",
          "kbd",
          "label",
          "legend",
          "li",
          "main",
          "map",
          "mark",
          "marquee",
          "menu",
          "menuitem",
          "meter",
          "nav",
          "nobr",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "section",
          "select",
          "shadow",
          "small",
          "source",
          "spacer",
          "span",
          "strike",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "template",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "tr",
          "track",
          "tt",
          "u",
          "ul",
          "var",
          "video",
          "wbr",
        ]),
        Ne = o([
          "svg",
          "a",
          "altglyph",
          "altglyphdef",
          "altglyphitem",
          "animatecolor",
          "animatemotion",
          "animatetransform",
          "circle",
          "clippath",
          "defs",
          "desc",
          "ellipse",
          "filter",
          "font",
          "g",
          "glyph",
          "glyphref",
          "hkern",
          "image",
          "line",
          "lineargradient",
          "marker",
          "mask",
          "metadata",
          "mpath",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialgradient",
          "rect",
          "stop",
          "style",
          "switch",
          "symbol",
          "text",
          "textpath",
          "title",
          "tref",
          "tspan",
          "view",
          "vkern",
        ]),
        J = o([
          "feBlend",
          "feColorMatrix",
          "feComponentTransfer",
          "feComposite",
          "feConvolveMatrix",
          "feDiffuseLighting",
          "feDisplacementMap",
          "feDistantLight",
          "feFlood",
          "feFuncA",
          "feFuncB",
          "feFuncG",
          "feFuncR",
          "feGaussianBlur",
          "feImage",
          "feMerge",
          "feMergeNode",
          "feMorphology",
          "feOffset",
          "fePointLight",
          "feSpecularLighting",
          "feSpotLight",
          "feTile",
          "feTurbulence",
        ]),
        V = o([
          "animate",
          "color-profile",
          "cursor",
          "discard",
          "fedropshadow",
          "font-face",
          "font-face-format",
          "font-face-name",
          "font-face-src",
          "font-face-uri",
          "foreignobject",
          "hatch",
          "hatchpath",
          "mesh",
          "meshgradient",
          "meshpatch",
          "meshrow",
          "missing-glyph",
          "script",
          "set",
          "solidcolor",
          "unknown",
          "use",
        ]),
        ue = o([
          "math",
          "menclose",
          "merror",
          "mfenced",
          "mfrac",
          "mglyph",
          "mi",
          "mlabeledtr",
          "mmultiscripts",
          "mn",
          "mo",
          "mover",
          "mpadded",
          "mphantom",
          "mroot",
          "mrow",
          "ms",
          "mspace",
          "msqrt",
          "mstyle",
          "msub",
          "msup",
          "msubsup",
          "mtable",
          "mtd",
          "mtext",
          "mtr",
          "munder",
          "munderover",
        ]),
        Ue = o([
          "maction",
          "maligngroup",
          "malignmark",
          "mlongdiv",
          "mscarries",
          "mscarry",
          "msgroup",
          "mstack",
          "msline",
          "msrow",
          "semantics",
          "annotation",
          "annotation-xml",
          "mprescripts",
          "none",
        ]),
        ze = o(["#text"]),
        F = o([
          "accept",
          "action",
          "align",
          "alt",
          "autocapitalize",
          "autocomplete",
          "autopictureinpicture",
          "autoplay",
          "background",
          "bgcolor",
          "border",
          "capture",
          "cellpadding",
          "cellspacing",
          "checked",
          "cite",
          "class",
          "clear",
          "color",
          "cols",
          "colspan",
          "controls",
          "controlslist",
          "coords",
          "crossorigin",
          "datetime",
          "decoding",
          "default",
          "dir",
          "disabled",
          "disablepictureinpicture",
          "disableremoteplayback",
          "download",
          "draggable",
          "enctype",
          "enterkeyhint",
          "face",
          "for",
          "headers",
          "height",
          "hidden",
          "high",
          "href",
          "hreflang",
          "id",
          "inputmode",
          "integrity",
          "ismap",
          "kind",
          "label",
          "lang",
          "list",
          "loading",
          "loop",
          "low",
          "max",
          "maxlength",
          "media",
          "method",
          "min",
          "minlength",
          "multiple",
          "muted",
          "name",
          "nonce",
          "noshade",
          "novalidate",
          "nowrap",
          "open",
          "optimum",
          "pattern",
          "placeholder",
          "playsinline",
          "poster",
          "preload",
          "pubdate",
          "radiogroup",
          "readonly",
          "rel",
          "required",
          "rev",
          "reversed",
          "role",
          "rows",
          "rowspan",
          "spellcheck",
          "scope",
          "selected",
          "shape",
          "size",
          "sizes",
          "span",
          "srclang",
          "start",
          "src",
          "srcset",
          "step",
          "style",
          "summary",
          "tabindex",
          "title",
          "translate",
          "type",
          "usemap",
          "valign",
          "value",
          "width",
          "xmlns",
          "slot",
        ]),
        _e = o([
          "accent-height",
          "accumulate",
          "additive",
          "alignment-baseline",
          "ascent",
          "attributename",
          "attributetype",
          "azimuth",
          "basefrequency",
          "baseline-shift",
          "begin",
          "bias",
          "by",
          "class",
          "clip",
          "clippathunits",
          "clip-path",
          "clip-rule",
          "color",
          "color-interpolation",
          "color-interpolation-filters",
          "color-profile",
          "color-rendering",
          "cx",
          "cy",
          "d",
          "dx",
          "dy",
          "diffuseconstant",
          "direction",
          "display",
          "divisor",
          "dur",
          "edgemode",
          "elevation",
          "end",
          "fill",
          "fill-opacity",
          "fill-rule",
          "filter",
          "filterunits",
          "flood-color",
          "flood-opacity",
          "font-family",
          "font-size",
          "font-size-adjust",
          "font-stretch",
          "font-style",
          "font-variant",
          "font-weight",
          "fx",
          "fy",
          "g1",
          "g2",
          "glyph-name",
          "glyphref",
          "gradientunits",
          "gradienttransform",
          "height",
          "href",
          "id",
          "image-rendering",
          "in",
          "in2",
          "k",
          "k1",
          "k2",
          "k3",
          "k4",
          "kerning",
          "keypoints",
          "keysplines",
          "keytimes",
          "lang",
          "lengthadjust",
          "letter-spacing",
          "kernelmatrix",
          "kernelunitlength",
          "lighting-color",
          "local",
          "marker-end",
          "marker-mid",
          "marker-start",
          "markerheight",
          "markerunits",
          "markerwidth",
          "maskcontentunits",
          "maskunits",
          "max",
          "mask",
          "media",
          "method",
          "mode",
          "min",
          "name",
          "numoctaves",
          "offset",
          "operator",
          "opacity",
          "order",
          "orient",
          "orientation",
          "origin",
          "overflow",
          "paint-order",
          "path",
          "pathlength",
          "patterncontentunits",
          "patterntransform",
          "patternunits",
          "points",
          "preservealpha",
          "preserveaspectratio",
          "primitiveunits",
          "r",
          "rx",
          "ry",
          "radius",
          "refx",
          "refy",
          "repeatcount",
          "repeatdur",
          "restart",
          "result",
          "rotate",
          "scale",
          "seed",
          "shape-rendering",
          "specularconstant",
          "specularexponent",
          "spreadmethod",
          "startoffset",
          "stddeviation",
          "stitchtiles",
          "stop-color",
          "stop-opacity",
          "stroke-dasharray",
          "stroke-dashoffset",
          "stroke-linecap",
          "stroke-linejoin",
          "stroke-miterlimit",
          "stroke-opacity",
          "stroke",
          "stroke-width",
          "style",
          "surfacescale",
          "systemlanguage",
          "tabindex",
          "targetx",
          "targety",
          "transform",
          "transform-origin",
          "text-anchor",
          "text-decoration",
          "text-rendering",
          "textlength",
          "type",
          "u1",
          "u2",
          "unicode",
          "values",
          "viewbox",
          "visibility",
          "version",
          "vert-adv-y",
          "vert-origin-x",
          "vert-origin-y",
          "width",
          "word-spacing",
          "wrap",
          "writing-mode",
          "xchannelselector",
          "ychannelselector",
          "x",
          "x1",
          "x2",
          "xmlns",
          "y",
          "y1",
          "y2",
          "z",
          "zoomandpan",
        ]),
        ke = o([
          "accent",
          "accentunder",
          "align",
          "bevelled",
          "close",
          "columnsalign",
          "columnlines",
          "columnspan",
          "denomalign",
          "depth",
          "dir",
          "display",
          "displaystyle",
          "encoding",
          "fence",
          "frame",
          "height",
          "href",
          "id",
          "largeop",
          "length",
          "linethickness",
          "lspace",
          "lquote",
          "mathbackground",
          "mathcolor",
          "mathsize",
          "mathvariant",
          "maxsize",
          "minsize",
          "movablelimits",
          "notation",
          "numalign",
          "open",
          "rowalign",
          "rowlines",
          "rowspacing",
          "rowspan",
          "rspace",
          "rquote",
          "scriptlevel",
          "scriptminsize",
          "scriptsizemultiplier",
          "selection",
          "separator",
          "separators",
          "stretchy",
          "subscriptshift",
          "supscriptshift",
          "symmetric",
          "voffset",
          "width",
          "xmlns",
        ]),
        ce = o([
          "xlink:href",
          "xml:id",
          "xlink:title",
          "xml:space",
          "xmlns:xlink",
        ]),
        ie = a(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
        se = a(/<%[\s\S]*|[\s\S]*%>/gm),
        Re = a(/^data-[\-\w.\u00B7-\uFFFF]/),
        A = a(/^aria-[\-\w]+$/),
        ae = a(
          /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
        ),
        Te = a(/^(?:\w+script|data):/i),
        re = a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
        xe =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (N) {
                return typeof N;
              }
            : function (N) {
                return N &&
                  typeof Symbol == "function" &&
                  N.constructor === Symbol &&
                  N !== Symbol.prototype
                  ? "symbol"
                  : typeof N;
              };
      function Ce(N) {
        if (Array.isArray(N)) {
          for (var R = 0, Y = Array(N.length); R < N.length; R++) Y[R] = N[R];
          return Y;
        } else return Array.from(N);
      }
      var Ge = function () {
          return typeof window == "undefined" ? null : window;
        },
        Oe = function (R, Y) {
          if (
            (typeof R == "undefined" ? "undefined" : xe(R)) !== "object" ||
            typeof R.createPolicy != "function"
          )
            return null;
          var ne = null,
            be = "data-tt-policy-suffix";
          Y.currentScript &&
            Y.currentScript.hasAttribute(be) &&
            (ne = Y.currentScript.getAttribute(be));
          var k = "dompurify" + (ne ? "#" + ne : "");
          try {
            return R.createPolicy(k, {
              createHTML: function (ct) {
                return ct;
              },
            });
          } catch (K) {
            return (
              console.warn(
                "TrustedTypes policy " + k + " could not be created.",
              ),
              null
            );
          }
        };
      function Le() {
        var N =
            arguments.length > 0 && arguments[0] !== void 0
              ? arguments[0]
              : Ge(),
          R = function (m) {
            return Le(m);
          };
        if (
          ((R.version = "2.3.5"),
          (R.removed = []),
          !N || !N.document || N.document.nodeType !== 9)
        )
          return (R.isSupported = !1), R;
        var Y = N.document,
          ne = N.document,
          be = N.DocumentFragment,
          k = N.HTMLTemplateElement,
          K = N.Node,
          ct = N.Element,
          Qe = N.NodeFilter,
          Lr = N.NamedNodeMap,
          Wr = Lr === void 0 ? N.NamedNodeMap || N.MozNamedAttrMap : Lr,
          or = N.HTMLFormElement,
          de = N.DOMParser,
          St = N.trustedTypes,
          Tt = ct.prototype,
          Zt = me(Tt, "cloneNode"),
          lr = me(Tt, "nextSibling"),
          Ar = me(Tt, "childNodes"),
          ft = me(Tt, "parentNode");
        if (typeof k == "function") {
          var mt = ne.createElement("template");
          mt.content &&
            mt.content.ownerDocument &&
            (ne = mt.content.ownerDocument);
        }
        var _t = Oe(St, Y),
          Or = _t ? _t.createHTML("") : "",
          Yt = ne,
          sr = Yt.implementation,
          Zr = Yt.createNodeIterator,
          Yr = Yt.createDocumentFragment,
          Vr = Yt.getElementsByTagName,
          Xr = Y.importNode,
          Vt = {};
        try {
          Vt = ve(ne).documentMode ? ne.documentMode : {};
        } catch (X) {}
        var Je = {};
        R.isSupported =
          typeof ft == "function" &&
          sr &&
          typeof sr.createHTMLDocument != "undefined" &&
          Vt !== 9;
        var Lt = ie,
          pt = se,
          Mr = Re,
          gt = A,
          ar = Te,
          yt = re,
          cr = ae,
          Ie = null,
          Xt = B({}, [].concat(Ce(we), Ce(Ne), Ce(J), Ce(ue), Ce(ze))),
          Pe = null,
          Ht = B({}, [].concat(Ce(F), Ce(_e), Ce(ke), Ce(ce))),
          De = Object.seal(
            Object.create(null, {
              tagNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null,
              },
              attributeNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null,
              },
              allowCustomizedBuiltInElements: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: !1,
              },
            }),
          ),
          jt = null,
          fr = null,
          Nr = !0,
          ur = !0,
          Dr = !1,
          At = !1,
          Ot = !1,
          dr = !1,
          hr = !1,
          Mt = !1,
          Kt = !1,
          _ = !1,
          Q = !0,
          Ee = !0,
          Be = !1,
          Nt = {},
          ut = null,
          Bt = B({}, [
            "annotation-xml",
            "audio",
            "colgroup",
            "desc",
            "foreignobject",
            "head",
            "iframe",
            "math",
            "mi",
            "mn",
            "mo",
            "ms",
            "mtext",
            "noembed",
            "noframes",
            "noscript",
            "plaintext",
            "script",
            "style",
            "svg",
            "template",
            "thead",
            "title",
            "video",
            "xmp",
          ]),
          zr = null,
          Rr = B({}, ["audio", "video", "img", "source", "image", "track"]),
          Ut = null,
          bt = B({}, [
            "alt",
            "class",
            "for",
            "id",
            "label",
            "name",
            "pattern",
            "placeholder",
            "role",
            "summary",
            "title",
            "value",
            "style",
            "xmlns",
          ]),
          Gt = "http://www.w3.org/1998/Math/MathML",
          Kr = "http://www.w3.org/2000/svg",
          Dt = "http://www.w3.org/1999/xhtml",
          Fr = Dt,
          Qr = !1,
          Qt = void 0,
          Vs = ["application/xhtml+xml", "text/html"],
          Xs = "text/html",
          Jt = void 0,
          qt = null,
          Ks = ne.createElement("form"),
          Fi = function (m) {
            return m instanceof RegExp || m instanceof Function;
          },
          qr = function (m) {
            (qt && qt === m) ||
              ((!m ||
                (typeof m == "undefined" ? "undefined" : xe(m)) !== "object") &&
                (m = {}),
              (m = ve(m)),
              (Ie = "ALLOWED_TAGS" in m ? B({}, m.ALLOWED_TAGS) : Xt),
              (Pe = "ALLOWED_ATTR" in m ? B({}, m.ALLOWED_ATTR) : Ht),
              (Ut =
                "ADD_URI_SAFE_ATTR" in m ? B(ve(bt), m.ADD_URI_SAFE_ATTR) : bt),
              (zr =
                "ADD_DATA_URI_TAGS" in m ? B(ve(Rr), m.ADD_DATA_URI_TAGS) : Rr),
              (ut = "FORBID_CONTENTS" in m ? B({}, m.FORBID_CONTENTS) : Bt),
              (jt = "FORBID_TAGS" in m ? B({}, m.FORBID_TAGS) : {}),
              (fr = "FORBID_ATTR" in m ? B({}, m.FORBID_ATTR) : {}),
              (Nt = "USE_PROFILES" in m ? m.USE_PROFILES : !1),
              (Nr = m.ALLOW_ARIA_ATTR !== !1),
              (ur = m.ALLOW_DATA_ATTR !== !1),
              (Dr = m.ALLOW_UNKNOWN_PROTOCOLS || !1),
              (At = m.SAFE_FOR_TEMPLATES || !1),
              (Ot = m.WHOLE_DOCUMENT || !1),
              (Mt = m.RETURN_DOM || !1),
              (Kt = m.RETURN_DOM_FRAGMENT || !1),
              (_ = m.RETURN_TRUSTED_TYPE || !1),
              (hr = m.FORCE_BODY || !1),
              (Q = m.SANITIZE_DOM !== !1),
              (Ee = m.KEEP_CONTENT !== !1),
              (Be = m.IN_PLACE || !1),
              (cr = m.ALLOWED_URI_REGEXP || cr),
              (Fr = m.NAMESPACE || Dt),
              m.CUSTOM_ELEMENT_HANDLING &&
                Fi(m.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                (De.tagNameCheck = m.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
              m.CUSTOM_ELEMENT_HANDLING &&
                Fi(m.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                (De.attributeNameCheck =
                  m.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
              m.CUSTOM_ELEMENT_HANDLING &&
                typeof m.CUSTOM_ELEMENT_HANDLING
                  .allowCustomizedBuiltInElements == "boolean" &&
                (De.allowCustomizedBuiltInElements =
                  m.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
              (Qt =
                Vs.indexOf(m.PARSER_MEDIA_TYPE) === -1
                  ? (Qt = Xs)
                  : (Qt = m.PARSER_MEDIA_TYPE)),
              (Jt =
                Qt === "application/xhtml+xml"
                  ? function (M) {
                      return M;
                    }
                  : D),
              At && (ur = !1),
              Kt && (Mt = !0),
              Nt &&
                ((Ie = B({}, [].concat(Ce(ze)))),
                (Pe = []),
                Nt.html === !0 && (B(Ie, we), B(Pe, F)),
                Nt.svg === !0 && (B(Ie, Ne), B(Pe, _e), B(Pe, ce)),
                Nt.svgFilters === !0 && (B(Ie, J), B(Pe, _e), B(Pe, ce)),
                Nt.mathMl === !0 && (B(Ie, ue), B(Pe, ke), B(Pe, ce))),
              m.ADD_TAGS && (Ie === Xt && (Ie = ve(Ie)), B(Ie, m.ADD_TAGS)),
              m.ADD_ATTR && (Pe === Ht && (Pe = ve(Pe)), B(Pe, m.ADD_ATTR)),
              m.ADD_URI_SAFE_ATTR && B(Ut, m.ADD_URI_SAFE_ATTR),
              m.FORBID_CONTENTS &&
                (ut === Bt && (ut = ve(ut)), B(ut, m.FORBID_CONTENTS)),
              Ee && (Ie["#text"] = !0),
              Ot && B(Ie, ["html", "head", "body"]),
              Ie.table && (B(Ie, ["tbody"]), delete jt.tbody),
              o && o(m),
              (qt = m));
          },
          Ii = B({}, ["mi", "mo", "mn", "ms", "mtext"]),
          Pi = B({}, ["foreignobject", "desc", "title", "annotation-xml"]),
          Ir = B({}, Ne);
        B(Ir, J), B(Ir, V);
        var $r = B({}, ue);
        B($r, Ue);
        var Qs = function (m) {
            var M = ft(m);
            (!M || !M.tagName) &&
              (M = { namespaceURI: Dt, tagName: "template" });
            var Z = D(m.tagName),
              Se = D(M.tagName);
            if (m.namespaceURI === Kr)
              return M.namespaceURI === Dt
                ? Z === "svg"
                : M.namespaceURI === Gt
                ? Z === "svg" && (Se === "annotation-xml" || Ii[Se])
                : Boolean(Ir[Z]);
            if (m.namespaceURI === Gt)
              return M.namespaceURI === Dt
                ? Z === "math"
                : M.namespaceURI === Kr
                ? Z === "math" && Pi[Se]
                : Boolean($r[Z]);
            if (m.namespaceURI === Dt) {
              if (
                (M.namespaceURI === Kr && !Pi[Se]) ||
                (M.namespaceURI === Gt && !Ii[Se])
              )
                return !1;
              var qe = B({}, ["title", "style", "font", "a", "script"]);
              return !$r[Z] && (qe[Z] || !Ir[Z]);
            }
            return !1;
          },
          kt = function (m) {
            x(R.removed, { element: m });
            try {
              m.parentNode.removeChild(m);
            } catch (M) {
              try {
                m.outerHTML = Or;
              } catch (Z) {
                m.remove();
              }
            }
          },
          Hi = function (m, M) {
            try {
              x(R.removed, { attribute: M.getAttributeNode(m), from: M });
            } catch (Z) {
              x(R.removed, { attribute: null, from: M });
            }
            if ((M.removeAttribute(m), m === "is" && !Pe[m]))
              if (Mt || Kt)
                try {
                  kt(M);
                } catch (Z) {}
              else
                try {
                  M.setAttribute(m, "");
                } catch (Z) {}
          },
          ji = function (m) {
            var M = void 0,
              Z = void 0;
            if (hr) m = "<remove></remove>" + m;
            else {
              var Se = H(m, /^[\r\n\t ]+/);
              Z = Se && Se[0];
            }
            Qt === "application/xhtml+xml" &&
              (m =
                '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
                m +
                "</body></html>");
            var qe = _t ? _t.createHTML(m) : m;
            if (Fr === Dt)
              try {
                M = new de().parseFromString(qe, Qt);
              } catch (Ye) {}
            if (!M || !M.documentElement) {
              M = sr.createDocument(Fr, "template", null);
              try {
                M.documentElement.innerHTML = Qr ? "" : qe;
              } catch (Ye) {}
            }
            var $e = M.body || M.documentElement;
            return (
              m &&
                Z &&
                $e.insertBefore(ne.createTextNode(Z), $e.childNodes[0] || null),
              Fr === Dt
                ? Vr.call(M, Ot ? "html" : "body")[0]
                : Ot
                ? M.documentElement
                : $e
            );
          },
          Bi = function (m) {
            return Zr.call(
              m.ownerDocument || m,
              m,
              Qe.SHOW_ELEMENT | Qe.SHOW_COMMENT | Qe.SHOW_TEXT,
              null,
              !1,
            );
          },
          qs = function (m) {
            return (
              m instanceof or &&
              (typeof m.nodeName != "string" ||
                typeof m.textContent != "string" ||
                typeof m.removeChild != "function" ||
                !(m.attributes instanceof Wr) ||
                typeof m.removeAttribute != "function" ||
                typeof m.setAttribute != "function" ||
                typeof m.namespaceURI != "string" ||
                typeof m.insertBefore != "function")
            );
          },
          mr = function (m) {
            return (typeof K == "undefined" ? "undefined" : xe(K)) === "object"
              ? m instanceof K
              : m &&
                  (typeof m == "undefined" ? "undefined" : xe(m)) ===
                    "object" &&
                  typeof m.nodeType == "number" &&
                  typeof m.nodeName == "string";
          },
          xt = function (m, M, Z) {
            !Je[m] ||
              v(Je[m], function (Se) {
                Se.call(R, M, Z, qt);
              });
          },
          Ui = function (m) {
            var M = void 0;
            if (
              (xt("beforeSanitizeElements", m, null),
              qs(m) || H(m.nodeName, /[\u0080-\uFFFF]/))
            )
              return kt(m), !0;
            var Z = Jt(m.nodeName);
            if (
              (xt("uponSanitizeElement", m, { tagName: Z, allowedTags: Ie }),
              (!mr(m.firstElementChild) &&
                (!mr(m.content) || !mr(m.content.firstElementChild)) &&
                I(/<[/\w]/g, m.innerHTML) &&
                I(/<[/\w]/g, m.textContent)) ||
                (Z === "select" && I(/<template/i, m.innerHTML)))
            )
              return kt(m), !0;
            if (!Ie[Z] || jt[Z]) {
              if (Ee && !ut[Z]) {
                var Se = ft(m) || m.parentNode,
                  qe = Ar(m) || m.childNodes;
                if (qe && Se)
                  for (var $e = qe.length, Ye = $e - 1; Ye >= 0; --Ye)
                    Se.insertBefore(Zt(qe[Ye], !0), lr(m));
              }
              return !jt[Z] &&
                Ji(Z) &&
                ((De.tagNameCheck instanceof RegExp && I(De.tagNameCheck, Z)) ||
                  (De.tagNameCheck instanceof Function && De.tagNameCheck(Z)))
                ? !1
                : (kt(m), !0);
            }
            return (m instanceof ct && !Qs(m)) ||
              ((Z === "noscript" || Z === "noembed") &&
                I(/<\/no(script|embed)/i, m.innerHTML))
              ? (kt(m), !0)
              : (At &&
                  m.nodeType === 3 &&
                  ((M = m.textContent),
                  (M = G(M, Lt, " ")),
                  (M = G(M, pt, " ")),
                  m.textContent !== M &&
                    (x(R.removed, { element: m.cloneNode() }),
                    (m.textContent = M))),
                xt("afterSanitizeElements", m, null),
                !1);
          },
          Gi = function (m, M, Z) {
            if (Q && (M === "id" || M === "name") && (Z in ne || Z in Ks))
              return !1;
            if (!(ur && !fr[M] && I(Mr, M))) {
              if (!(Nr && I(gt, M))) {
                if (!Pe[M] || fr[M]) {
                  if (
                    !(
                      (Ji(m) &&
                        ((De.tagNameCheck instanceof RegExp &&
                          I(De.tagNameCheck, m)) ||
                          (De.tagNameCheck instanceof Function &&
                            De.tagNameCheck(m))) &&
                        ((De.attributeNameCheck instanceof RegExp &&
                          I(De.attributeNameCheck, M)) ||
                          (De.attributeNameCheck instanceof Function &&
                            De.attributeNameCheck(M)))) ||
                      (M === "is" &&
                        De.allowCustomizedBuiltInElements &&
                        ((De.tagNameCheck instanceof RegExp &&
                          I(De.tagNameCheck, Z)) ||
                          (De.tagNameCheck instanceof Function &&
                            De.tagNameCheck(Z))))
                    )
                  )
                    return !1;
                } else if (!Ut[M]) {
                  if (!I(cr, G(Z, yt, ""))) {
                    if (
                      !(
                        (M === "src" || M === "xlink:href" || M === "href") &&
                        m !== "script" &&
                        oe(Z, "data:") === 0 &&
                        zr[m]
                      )
                    ) {
                      if (!(Dr && !I(ar, G(Z, yt, "")))) {
                        if (Z) return !1;
                      }
                    }
                  }
                }
              }
            }
            return !0;
          },
          Ji = function (m) {
            return m.indexOf("-") > 0;
          },
          Wi = function (m) {
            var M = void 0,
              Z = void 0,
              Se = void 0,
              qe = void 0;
            xt("beforeSanitizeAttributes", m, null);
            var $e = m.attributes;
            if (!!$e) {
              var Ye = {
                attrName: "",
                attrValue: "",
                keepAttr: !0,
                allowedAttributes: Pe,
              };
              for (qe = $e.length; qe--; ) {
                M = $e[qe];
                var Pr = M,
                  dt = Pr.name,
                  Zi = Pr.namespaceURI;
                if (
                  ((Z = le(M.value)),
                  (Se = Jt(dt)),
                  (Ye.attrName = Se),
                  (Ye.attrValue = Z),
                  (Ye.keepAttr = !0),
                  (Ye.forceKeepAttr = void 0),
                  xt("uponSanitizeAttribute", m, Ye),
                  (Z = Ye.attrValue),
                  !Ye.forceKeepAttr && (Hi(dt, m), !!Ye.keepAttr))
                ) {
                  if (I(/\/>/i, Z)) {
                    Hi(dt, m);
                    continue;
                  }
                  At && ((Z = G(Z, Lt, " ")), (Z = G(Z, pt, " ")));
                  var ea = Jt(m.nodeName);
                  if (!!Gi(ea, Se, Z))
                    try {
                      Zi ? m.setAttributeNS(Zi, dt, Z) : m.setAttribute(dt, Z),
                        y(R.removed);
                    } catch (ta) {}
                }
              }
              xt("afterSanitizeAttributes", m, null);
            }
          },
          $s = function X(m) {
            var M = void 0,
              Z = Bi(m);
            for (xt("beforeSanitizeShadowDOM", m, null); (M = Z.nextNode()); )
              xt("uponSanitizeShadowNode", M, null),
                !Ui(M) && (M.content instanceof be && X(M.content), Wi(M));
            xt("afterSanitizeShadowDOM", m, null);
          };
        return (
          (R.sanitize = function (X, m) {
            var M = void 0,
              Z = void 0,
              Se = void 0,
              qe = void 0,
              $e = void 0;
            if (
              ((Qr = !X), Qr && (X = "<!-->"), typeof X != "string" && !mr(X))
            ) {
              if (typeof X.toString != "function")
                throw O("toString is not a function");
              if (((X = X.toString()), typeof X != "string"))
                throw O("dirty is not a string, aborting");
            }
            if (!R.isSupported) {
              if (
                xe(N.toStaticHTML) === "object" ||
                typeof N.toStaticHTML == "function"
              ) {
                if (typeof X == "string") return N.toStaticHTML(X);
                if (mr(X)) return N.toStaticHTML(X.outerHTML);
              }
              return X;
            }
            if (
              (dr || qr(m),
              (R.removed = []),
              typeof X == "string" && (Be = !1),
              Be)
            ) {
              if (X.nodeName) {
                var Ye = Jt(X.nodeName);
                if (!Ie[Ye] || jt[Ye])
                  throw O(
                    "root node is forbidden and cannot be sanitized in-place",
                  );
              }
            } else if (X instanceof K)
              (M = ji("<!---->")),
                (Z = M.ownerDocument.importNode(X, !0)),
                (Z.nodeType === 1 && Z.nodeName === "BODY") ||
                Z.nodeName === "HTML"
                  ? (M = Z)
                  : M.appendChild(Z);
            else {
              if (!Mt && !At && !Ot && X.indexOf("<") === -1)
                return _t && _ ? _t.createHTML(X) : X;
              if (((M = ji(X)), !M)) return Mt ? null : _ ? Or : "";
            }
            M && hr && kt(M.firstChild);
            for (var Pr = Bi(Be ? X : M); (Se = Pr.nextNode()); )
              (Se.nodeType === 3 && Se === qe) ||
                Ui(Se) ||
                (Se.content instanceof be && $s(Se.content), Wi(Se), (qe = Se));
            if (((qe = null), Be)) return X;
            if (Mt) {
              if (Kt)
                for ($e = Yr.call(M.ownerDocument); M.firstChild; )
                  $e.appendChild(M.firstChild);
              else $e = M;
              return Pe.shadowroot && ($e = Xr.call(Y, $e, !0)), $e;
            }
            var dt = Ot ? M.outerHTML : M.innerHTML;
            return (
              At && ((dt = G(dt, Lt, " ")), (dt = G(dt, pt, " "))),
              _t && _ ? _t.createHTML(dt) : dt
            );
          }),
          (R.setConfig = function (X) {
            qr(X), (dr = !0);
          }),
          (R.clearConfig = function () {
            (qt = null), (dr = !1);
          }),
          (R.isValidAttribute = function (X, m, M) {
            qt || qr({});
            var Z = Jt(X),
              Se = Jt(m);
            return Gi(Z, Se, M);
          }),
          (R.addHook = function (X, m) {
            typeof m == "function" && ((Je[X] = Je[X] || []), x(Je[X], m));
          }),
          (R.removeHook = function (X) {
            Je[X] && y(Je[X]);
          }),
          (R.removeHooks = function (X) {
            Je[X] && (Je[X] = []);
          }),
          (R.removeAllHooks = function () {
            Je = {};
          }),
          R
        );
      }
      var je = Le();
      return je;
    });
  });
  const cl = (r, e) => {
      let t;
      return function (...i) {
        const l = () => {
          clearTimeout(t), r(...i);
        };
        clearTimeout(t), (t = setTimeout(l, e));
      };
    },
    fl = (r) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r),
    ul = (r) => {
      var e, t, n, i;
      return r
        ? ((i =
            (n =
              (t =
                (e = al.sanitize(r, { ALLOWED_TAGS: [], KEEP_CONTENT: !0 })) ==
                null
                  ? void 0
                  : e.replace(/(&.+?;)/g, "")) == null
                ? void 0
                : t.replace(/\s+/g, " ")) == null
              ? void 0
              : n.trim()) == null
            ? void 0
            : i.substring(0, 190)) + (r.length > 190 ? "..." : "")
        : "";
    },
    dl = (r) => "email" in r && "name" in r,
    On = (r) =>
      r.reduce((t, n) => {
        var i, l, s;
        return (
          dl(n)
            ? t.push(n)
            : "emails" in n &&
              ((i = n.emails) == null ? void 0 : i.length) > 0 &&
              t.push({
                name: `${(l = n.given_name) != null ? l : ""} ${
                  (s = n.surname) != null ? s : ""
                }`,
                email: n.emails[0].email,
                contact: n,
              }),
          t
        );
      }, []);
  function Mn(r, e, t) {
    const n = r.slice();
    return (n[33] = e[t]), (n[35] = t), n;
  }
  function Nn(r, e, t) {
    const n = r.slice();
    return (n[33] = e[t]), n;
  }
  function hl(r) {
    let e = r[33].email + "",
      t;
    return {
      c() {
        t = ee(e);
      },
      m(n, i) {
        E(n, t, i);
      },
      p(n, i) {
        i[0] & 8 && e !== (e = n[33].email + "") && Ae(t, e);
      },
      d(n) {
        n && h(t);
      },
    };
  }
  function ml(r) {
    let e,
      t = r[33].name + "",
      n,
      i,
      l = `<${r[33].email}>`,
      s;
    return {
      c() {
        (e = w("strong")), (n = ee(t)), (i = P()), (s = ee(l));
      },
      m(c, o) {
        E(c, e, o), p(e, n), E(c, i, o), E(c, s, o);
      },
      p(c, o) {
        o[0] & 8 && t !== (t = c[33].name + "") && Ae(n, t),
          o[0] & 8 && l !== (l = `<${c[33].email}>`) && Ae(s, l);
      },
      d(c) {
        c && h(e), c && h(i), c && h(s);
      },
    };
  }
  function Dn(r, e) {
    let t, n, i, l, s, c, o;
    function a(b, v) {
      return b[33].name ? ml : hl;
    }
    let f = a(e),
      u = f(e);
    function g() {
      return e[22](e[33]);
    }
    return {
      key: r,
      first: null,
      c() {
        (t = w("div")),
          (n = w("span")),
          u.c(),
          (i = P()),
          (l = w("button")),
          (l.textContent = "\xD7"),
          (s = P()),
          d(n, "class", "contact-item__name"),
          d(l, "type", "button"),
          d(l, "name", "term"),
          d(t, "class", "contact-item"),
          (this.first = t);
      },
      m(b, v) {
        E(b, t, v),
          p(t, n),
          u.m(n, null),
          p(t, i),
          p(t, l),
          p(t, s),
          c || ((o = he(l, "click", g)), (c = !0));
      },
      p(b, v) {
        (e = b),
          f === (f = a(e)) && u
            ? u.p(e, v)
            : (u.d(1), (u = f(e)), u && (u.c(), u.m(n, null)));
      },
      d(b) {
        b && h(t), u.d(), (c = !1), o();
      },
    };
  }
  function zn(r) {
    let e, t, n, i;
    return {
      c() {
        (e = w("form")),
          (t = w("input")),
          d(t, "data-cy", "contacts-search-field"),
          d(t, "type", "text"),
          d(t, "name", "email"),
          d(t, "autocomplete", "off"),
          d(t, "class", "search-field"),
          d(e, "class", "search-form");
      },
      m(l, s) {
        E(l, e, s),
          p(e, t),
          r[23](t),
          on(t, r[4]),
          n ||
            ((i = [
              he(t, "keydown", r[14]),
              he(t, "blur", r[24]),
              he(t, "input", r[25]),
              he(e, "submit", Qi(r[16])),
            ]),
            (n = !0));
      },
      p(l, s) {
        s[0] & 16 && t.value !== l[4] && on(t, l[4]);
      },
      d(l) {
        l && h(e), r[23](null), (n = !1), et(i);
      },
    };
  }
  function Rn(r) {
    let e;
    function t(l, s) {
      if (l[9] && !l[7].length) return pl;
      if (l[7].length) return _l;
    }
    let n = t(r),
      i = n && n(r);
    return {
      c() {
        (e = w("div")), i && i.c(), d(e, "class", "dropdown-content");
      },
      m(l, s) {
        E(l, e, s), i && i.m(e, null);
      },
      p(l, s) {
        n === (n = t(l)) && i
          ? i.p(l, s)
          : (i && i.d(1), (i = n && n(l)), i && (i.c(), i.m(e, null)));
      },
      d(l) {
        l && h(e), i && i.d();
      },
    };
  }
  function _l(r) {
    let e,
      t = r[7],
      n = [];
    for (let i = 0; i < t.length; i += 1) n[i] = Fn(Mn(r, t, i));
    return {
      c() {
        for (let i = 0; i < n.length; i += 1) n[i].c();
        e = st();
      },
      m(i, l) {
        for (let s = 0; s < n.length; s += 1) n[s].m(i, l);
        E(i, e, l);
      },
      p(i, l) {
        if (l[0] & 166272) {
          t = i[7];
          let s;
          for (s = 0; s < t.length; s += 1) {
            const c = Mn(i, t, s);
            n[s]
              ? n[s].p(c, l)
              : ((n[s] = Fn(c)), n[s].c(), n[s].m(e.parentNode, e));
          }
          for (; s < n.length; s += 1) n[s].d(1);
          n.length = t.length;
        }
      },
      d(i) {
        jr(n, i), i && h(e);
      },
    };
  }
  function pl(r) {
    let e;
    return {
      c() {
        (e = w("p")),
          (e.textContent = "Loading..."),
          d(e, "class", "dropdown-item");
      },
      m(t, n) {
        E(t, e, n);
      },
      p: j,
      d(t) {
        t && h(e);
      },
    };
  }
  function gl(r) {
    let e,
      t = r[33].email + "",
      n;
    return {
      c() {
        (e = w("div")), (n = ee(t)), d(e, "class", "dropdown-item__name");
      },
      m(i, l) {
        E(i, e, l), p(e, n);
      },
      p(i, l) {
        l[0] & 128 && t !== (t = i[33].email + "") && Ae(n, t);
      },
      d(i) {
        i && h(e);
      },
    };
  }
  function bl(r) {
    let e,
      t = r[33].name + "",
      n,
      i,
      l,
      s = r[33].email + "",
      c;
    return {
      c() {
        (e = w("div")),
          (n = ee(t)),
          (i = P()),
          (l = w("div")),
          (c = ee(s)),
          d(e, "class", "dropdown-item__name"),
          d(l, "class", "dropdown-item__email");
      },
      m(o, a) {
        E(o, e, a), p(e, n), E(o, i, a), E(o, l, a), p(l, c);
      },
      p(o, a) {
        a[0] & 128 && t !== (t = o[33].name + "") && Ae(n, t),
          a[0] & 128 && s !== (s = o[33].email + "") && Ae(c, s);
      },
      d(o) {
        o && h(e), o && h(i), o && h(l);
      },
    };
  }
  function Fn(r) {
    let e, t, n, i;
    function l(f, u) {
      return f[33].name ? bl : gl;
    }
    let s = l(r),
      c = s(r);
    function o() {
      return r[26](r[33]);
    }
    function a() {
      return r[27](r[35]);
    }
    return {
      c() {
        (e = w("div")),
          c.c(),
          (t = P()),
          d(e, "class", "dropdown-item"),
          Fe(e, "active", r[8] === r[35]),
          Fe(e, "selected", r[17](r[33].email));
      },
      m(f, u) {
        E(f, e, u),
          c.m(e, null),
          p(e, t),
          n ||
            ((i = [he(e, "mousedown", o), he(e, "mouseenter", a)]), (n = !0));
      },
      p(f, u) {
        (r = f),
          s === (s = l(r)) && c
            ? c.p(r, u)
            : (c.d(1), (c = s(r)), c && (c.c(), c.m(e, t))),
          u[0] & 256 && Fe(e, "active", r[8] === r[35]),
          u[0] & 131200 && Fe(e, "selected", r[17](r[33].email));
      },
      d(f) {
        f && h(e), c.d(), (n = !1), et(i);
      },
    };
  }
  function vl(r) {
    let e,
      t,
      n,
      i,
      l,
      s,
      c,
      o = [],
      a = new Map(),
      f,
      u,
      g,
      b,
      v = r[3];
    const y = (H) => H[33].email;
    for (let H = 0; H < v.length; H += 1) {
      let G = Nn(r, v, H),
        oe = y(G);
      a.set(oe, (o[H] = Dn(oe, G)));
    }
    let x = ((r[1] && !r[3].length) || !r[1]) && zn(r),
      D = r[6] && r[2] && Rn(r);
    return {
      c() {
        (e = w("div")),
          (t = w("div")),
          (n = w("div")),
          (i = w("div")),
          (l = ee(r[0])),
          (s = P()),
          (c = w("div"));
        for (let H = 0; H < o.length; H += 1) o[H].c();
        (f = P()),
          x && x.c(),
          (u = P()),
          D && D.c(),
          (this.c = j),
          d(i, "class", "contacts-placeholder"),
          d(c, "class", "contacts-results-inner"),
          d(n, "class", "contacts-results"),
          d(t, "class", "contacts-container"),
          d(e, "class", "dropdown");
      },
      m(H, G) {
        E(H, e, G), p(e, t), p(t, n), p(n, i), p(i, l), p(n, s), p(n, c);
        for (let oe = 0; oe < o.length; oe += 1) o[oe].m(c, null);
        p(t, f),
          x && x.m(t, null),
          p(e, u),
          D && D.m(e, null),
          g || ((b = he(t, "click", r[12])), (g = !0));
      },
      p(H, G) {
        G[0] & 1 && Ae(l, H[0]),
          G[0] & 1032 &&
            ((v = H[3]), (o = Cr(o, G, y, 1, H, v, a, c, Er, Dn, null, Nn))),
          (H[1] && !H[3].length) || !H[1]
            ? x
              ? x.p(H, G)
              : ((x = zn(H)), x.c(), x.m(t, null))
            : x && (x.d(1), (x = null)),
          H[6] && H[2]
            ? D
              ? D.p(H, G)
              : ((D = Rn(H)), D.c(), D.m(e, null))
            : D && (D.d(1), (D = null));
      },
      i: j,
      o: j,
      d(H) {
        H && h(e);
        for (let G = 0; G < o.length; G += 1) o[G].d();
        x && x.d(), D && D.d(), (g = !1), b();
      },
    };
  }
  function wl(r, e, t) {
    let n;
    var i =
      (this && this.__awaiter) ||
      function (F, _e, ke, ce) {
        function ie(se) {
          return se instanceof ke
            ? se
            : new ke(function (Re) {
                Re(se);
              });
        }
        return new (ke || (ke = Promise))(function (se, Re) {
          function A(re) {
            try {
              Te(ce.next(re));
            } catch (xe) {
              Re(xe);
            }
          }
          function ae(re) {
            try {
              Te(ce.throw(re));
            } catch (xe) {
              Re(xe);
            }
          }
          function Te(re) {
            re.done ? se(re.value) : ie(re.value).then(A, ae);
          }
          Te((ce = ce.apply(F, _e || [])).next());
        });
      };
    let { contacts: l } = e,
      { value: s = [] } = e,
      { placeholder: c = "To" } = e,
      { single: o = !1 } = e,
      { change: a } = e,
      { show_dropdown: f = !0 } = e,
      u = [],
      g = "",
      b = 0,
      v = !1,
      y,
      x = [],
      D = !1;
    const H = () => {
        Array.isArray(l) && t(21, (x = On(l))),
          Array.isArray(s) && t(3, (u = s));
      },
      G = () => [],
      oe = (F) => {
        t(9, (v = !0)), t(21, (x = [])), le(F);
      },
      le = cl(
        (F) =>
          i(void 0, void 0, void 0, function* () {
            t(9, (v = !0));
            const _e = typeof l == "function" ? l : G;
            try {
              const ke = yield _e(F);
              Array.isArray(ke) && t(21, (x = On(ke))), t(9, (v = !1));
            } catch (ke) {
              t(9, (v = !1));
            }
          }),
        350,
      ),
      I = (F) => {
        t(3, (u = u.filter((_e) => _e.email !== F))), U();
      },
      O = (F) => {
        if (o && u.length === 1) {
          t(3, (u = [F])), t(6, (D = !1));
          return;
        }
        we(F.email) || t(3, (u = [...u, F])), U();
      },
      U = (F) => {
        (F == null ? void 0 : F.target) &&
          y &&
          (!o || !u.length) &&
          (F.target.tagName !== "INPUT" && y.focus(), t(6, (D = !0)));
      },
      fe = (F = {}) => {
        setTimeout(() => {
          F.addContact && !n.length && g && me(),
            t(6, (D = !1)),
            t(4, (g = "")),
            y && y.blur();
        }, F.blurIn || 250);
      },
      B = (F) => {
        U(),
          F.key === "Backspace" &&
            u.length &&
            !g &&
            t(3, (u = u.slice(0, u.length - 1))),
          F.key === "Tab" && me(),
          F.key === "ArrowDown" && x.length && b <= x.length && t(8, (b += 1)),
          F.key === "ArrowUp" && x.length && b != 0 && t(8, (b -= 1)),
          F.key === "Escape" && x.length && fe();
      },
      ve = (F) => {
        t(8, (b = F));
      },
      me = () => {
        (o && u.length === 1) ||
          (n.length &&
            (we(n[b].email) ||
              (t(3, (u = [...u, n[b]])), t(8, (b = 0)), fe({ blurIn: 0 }))),
          !we(g) &&
            g &&
            fl(g) &&
            (t(3, (u = [...u, { email: g }])),
            t(8, (b = 0)),
            fe({ blurIn: 0 })));
      },
      we = (F) => u.map((_e) => _e.email).includes(F),
      Ne = (F) => I(F.email);
    function J(F) {
      Ct[F ? "unshift" : "push"](() => {
        (y = F), t(5, y);
      });
    }
    const V = () => {
      fe({ addContact: !0 });
    };
    function ue() {
      (g = this.value), t(4, g);
    }
    const Ue = (F) => O(F),
      ze = (F) => ve(F);
    return (
      (r.$$set = (F) => {
        "contacts" in F && t(18, (l = F.contacts)),
          "value" in F && t(19, (s = F.value)),
          "placeholder" in F && t(0, (c = F.placeholder)),
          "single" in F && t(1, (o = F.single)),
          "change" in F && t(20, (a = F.change)),
          "show_dropdown" in F && t(2, (f = F.show_dropdown));
      }),
      (r.$$.update = () => {
        r.$$.dirty[0] & 32 &&
          y &&
          (y.setAttribute("tabindex", "-1"),
          y.focus(),
          y.removeAttribute("tabindex")),
          r.$$.dirty[0] & 1048584 &&
            u &&
            a &&
            wr().then(() => {
              a(u);
            }),
          r.$$.dirty[0] & 786432 && (l || s) && H(),
          r.$$.dirty[0] & 262224 && D && typeof l == "function" && oe(g),
          r.$$.dirty[0] & 2097168 &&
            t(
              7,
              (n = x.filter((F) => {
                const _e = g ? g.toLowerCase() : "",
                  ke = F.name ? F.name.toLowerCase() : "",
                  ce = F.email ? F.email.toLowerCase() : "",
                  ie = ke.includes(_e),
                  se = ce.includes(_e);
                return (ie || se) && !we(F.email);
              })),
            ),
          r.$$.dirty[0] & 128 && n && t(8, (b = 0));
      }),
      [
        c,
        o,
        f,
        u,
        g,
        y,
        D,
        n,
        b,
        v,
        I,
        O,
        U,
        fe,
        B,
        ve,
        me,
        we,
        l,
        s,
        a,
        x,
        Ne,
        J,
        V,
        ue,
        Ue,
        ze,
      ]
    );
  }
  class yl extends wt {
    constructor(e) {
      super();
      (this.shadowRoot.innerHTML =
        "<style>:root{font-family:sans-serif}.contacts-container{display:flex;align-items:center;flex-wrap:wrap;padding:0.4rem var(--outer-padding);border-bottom:1px solid var(--border)}.contacts-container *:focus{outline:5px auto var(--primary)}.contacts-container>div{padding-bottom:0.1rem;padding-right:0.1rem}.contact-item{display:inline-flex;background:var(--primary-light);color:var(--primary);align-items:center;border-radius:calc(var(--border-radius) / 2);padding:0.2rem 0.8rem;margin-right:0.25rem;margin-top:2px;margin-bottom:2px}.contact-item>button{color:var(--text-secondary);border:none;background:none;padding:2px 4px;font-weight:bold;font-size:13px;cursor:pointer}.contact-item__name{color:var(--text-secondary);font-size:12px;padding-right:0.75rem}.dropdown{width:100%;position:relative;display:inline-block}.dropdown-content{display:block;position:absolute;max-height:350px;background:var(--background);left:calc(var(--outer-padding) / 2);right:calc(var(--outer-padding) / 2);overflow-y:auto;color:var(--text);box-shadow:var(--shadow);z-index:1;border-radius:calc(var(--border-radius) / 2)}.dropdown-item{cursor:pointer;padding:var(--outer-padding);font-size:var(--font-size-small);background:var(--primary-light)}.dropdown-item.active{background-color:var(--primary);color:white}.dropdown-item.active .dropdown-item__email{color:var(--bg) !important}.dropdown-item.selected{opacity:0.3}.dropdown-item__name{font-weight:bold;display:inline-flex}.dropdown-item__email{color:var(--text-light);display:inline-flex;margin-left:0.25rem}.search-field{border:none;color:var(--text);background:var(--bg);min-width:100%}.search-field:focus{width:100px}.search-form{display:flex;padding-top:0.5rem;padding-bottom:0.5rem;align-items:center;min-width:320px}.contacts-results{display:flex;align-items:center}.contacts-placeholder{font-size:var(--font-size-small);margin-right:10px;min-width:30px;display:flex;color:var(--text-light)}</style>"),
        Me(
          this,
          {
            target: this.shadowRoot,
            props: Et(this.attributes),
            customElement: !0,
          },
          wl,
          vl,
          _r,
          {
            contacts: 18,
            value: 19,
            placeholder: 0,
            single: 1,
            change: 20,
            show_dropdown: 2,
          },
          null,
          [-1, -1],
        ),
        e &&
          (e.target && E(e.target, this, e.anchor),
          e.props && (this.$set(e.props), z()));
    }
    static get observedAttributes() {
      return [
        "contacts",
        "value",
        "placeholder",
        "single",
        "change",
        "show_dropdown",
      ];
    }
    get contacts() {
      return this.$$.ctx[18];
    }
    set contacts(e) {
      this.$$set({ contacts: e }), z();
    }
    get value() {
      return this.$$.ctx[19];
    }
    set value(e) {
      this.$$set({ value: e }), z();
    }
    get placeholder() {
      return this.$$.ctx[0];
    }
    set placeholder(e) {
      this.$$set({ placeholder: e }), z();
    }
    get single() {
      return this.$$.ctx[1];
    }
    set single(e) {
      this.$$set({ single: e }), z();
    }
    get change() {
      return this.$$.ctx[20];
    }
    set change(e) {
      this.$$set({ change: e }), z();
    }
    get show_dropdown() {
      return this.$$.ctx[2];
    }
    set show_dropdown(e) {
      this.$$set({ show_dropdown: e }), z();
    }
  }
  customElements.define("nylas-contacts-search", yl);
  const kl = ["message/delivery-status", "message/rfc822"],
    xl = (r) =>
      r.content_disposition === "attachment" &&
      !!r.filename &&
      !kl.includes(r.content_type),
    Wt = [];
  function El(r, e) {
    return { subscribe: Ft(r, e).subscribe };
  }
  function Ft(r, e = j) {
    let t;
    const n = new Set();
    function i(c) {
      if (He(r, c) && ((r = c), t)) {
        const o = !Wt.length;
        for (const a of n) a[1](), Wt.push(a, r);
        if (o) {
          for (let a = 0; a < Wt.length; a += 2) Wt[a][0](Wt[a + 1]);
          Wt.length = 0;
        }
      }
    }
    function l(c) {
      i(c(r));
    }
    function s(c, o = j) {
      const a = [c, o];
      return (
        n.add(a),
        n.size === 1 && (t = e(i) || j),
        c(r),
        () => {
          n.delete(a), n.size === 0 && (t(), (t = null));
        }
      );
    }
    return { set: i, update: l, subscribe: s };
  }
  function Cl(r, e, t) {
    const n = !Array.isArray(r),
      i = n ? [r] : r,
      l = e.length < 2;
    return El(t, (s) => {
      let c = !1;
      const o = [];
      let a = 0,
        f = j;
      const u = () => {
          if (a) return;
          f();
          const b = e(n ? o[0] : o, s);
          l ? s(b) : (f = er(b) ? b : j);
        },
        g = i.map((b, v) =>
          rn(
            b,
            (y) => {
              (o[v] = y), (a &= ~(1 << v)), c && u();
            },
            () => {
              a |= 1 << v;
            },
          ),
        );
      return (
        (c = !0),
        u(),
        function () {
          et(g), f();
        }
      );
    });
  }
  function Sl() {
    return Ft({});
  }
  const Gr = Sl();
  var Tl = Object.defineProperty,
    Ll = Object.defineProperties,
    Al = Object.getOwnPropertyDescriptors,
    In = Object.getOwnPropertySymbols,
    Ol = Object.prototype.hasOwnProperty,
    Ml = Object.prototype.propertyIsEnumerable,
    Pn = (r, e, t) =>
      e in r
        ? Tl(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (r[e] = t),
    Nl = (r, e) => {
      for (var t in e || (e = {})) Ol.call(e, t) && Pn(r, t, e[t]);
      if (In) for (var t of In(e)) Ml.call(e, t) && Pn(r, t, e[t]);
      return r;
    },
    Dl = (r, e) => Ll(r, Al(e));
  async function it(r) {
    var e;
    if (!r.ok) {
      const t = await r.json().then((l) => l),
        n =
          ((e = t == null ? void 0 : t.response) == null ? void 0 : e.error) ||
          (t == null ? void 0 : t.message),
        i = new Error(n);
      return (
        (i.name = t.name), Promise.reject({ message: i, statusCode: r.status })
      );
    }
    return r.json();
  }
  function ot(r = { component_id: "" }) {
    return {
      method: r.method || "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Component-Id": r.component_id || "",
        "X-Access-Token": r.access_token || "",
      },
      body: r.body ? JSON.stringify(r.body) : void 0,
    };
  }
  function at(r, e) {
    throw (console.error(e), Gr.update((t) => Dl(Nl({}, t), { [r]: e })), e);
  }
  const Hn = { "001": "", "002": "ireland-", "003": "canada-" };
  function lt(r) {
    let e = "";
    if (r.substring(3, 4) === "-") {
      const n = r.substring(0, 3);
      typeof Hn[n] != "undefined" && (e = Hn[n]);
    }
    return `https://${e}web-components.nylas.com/middleware`;
  }
  function It(r) {}
  var zl = Object.defineProperty,
    Rl = Object.defineProperties,
    Fl = Object.getOwnPropertyDescriptors,
    jn = Object.getOwnPropertySymbols,
    Il = Object.prototype.hasOwnProperty,
    Pl = Object.prototype.propertyIsEnumerable,
    Bn = (r, e, t) =>
      e in r
        ? zl(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (r[e] = t),
    Un = (r, e) => {
      for (var t in e || (e = {})) Il.call(e, t) && Bn(r, t, e[t]);
      if (jn) for (var t of jn(e)) Pl.call(e, t) && Bn(r, t, e[t]);
      return r;
    },
    Gn = (r, e) => Rl(r, Fl(e));
  const Jn = (r, e, t) => {
    if (r.thread_ids) {
      const i = r.thread_ids.slice(t, t + e);
      return Promise.all(
        i.map(async (l) => {
          const s = `${lt(r.component_id)}/threads/${l}?view=expanded`;
          return await fetch(s, ot(r))
            .then((c) => it(c))
            .then((c) => c.response)
            .then((c) =>
              Gn(Un({}, c), {
                messages: c.messages.filter(
                  (o) => o.from.length !== 0 || o.to.length !== 0,
                ),
              }),
            )
            .catch((c) => at(r.component_id, c));
        }),
      );
    }
    let n = `${lt(
      r.component_id,
    )}/threads?view=expanded&not_in=trash&limit=${e}&offset=${t}`;
    return (
      r.query &&
        Object.entries(r.query).forEach(
          (i) => (n = n.concat(`&${i[0]}=${i[1]}`)),
        ),
      fetch(n, ot(r))
        .then((i) => it(i))
        .then((i) => i.response)
        .then((i) =>
          i.map((l) =>
            Gn(Un({}, l), {
              messages: l.messages.filter(
                (s) => s.from.length !== 0 || s.to.length !== 0,
              ),
            }),
          ),
        )
        .catch((i) => at(r.component_id, i))
    );
  };
  function Wn(r) {
    let e = `${lt(
      r.component_id,
    )}/threads?view=expanded&not_in=trash&view=count`;
    return (
      r.query &&
        Object.entries(r.query).forEach(
          (t) => (e = e.concat(`&${t[0]}=${t[1]}`)),
        ),
      r.keywordToSearch && (e += `&q=${r.keywordToSearch}`),
      fetch(e, ot(r))
        .then((t) => it(t))
        .then((t) => t.response.count)
    );
  }
  const Hl = (r) => {
      const e = `${lt(r.component_id)}/threads/search?q=${
        r.keywordToSearch
      }&view=expanded&limit=${r.query.limit}&offset=${r.query.offset}`;
      return fetch(e, ot(r))
        .then(async (t) => it(t))
        .then((t) => t.response)
        .catch((t) => at(r.component_id, t));
    },
    jl = (r, e) =>
      fetch(
        `${lt(r.component_id)}/threads/${e.id}`,
        ot({
          method: "PUT",
          component_id: r.component_id,
          access_token: r.access_token,
          body: {
            unread: e.unread,
            starred: e.starred,
            folder_id: e.folder_id,
            label_ids: e.label_ids,
          },
        }),
      )
        .then((t) => it(t))
        .then((t) => t.response)
        .catch((t) => at(r.component_id, t)),
    Bl = async (r, e) =>
      await fetch(`${lt(r)}/manifest`, ot({ access_token: e, component_id: r }))
        .then(it)
        .then((t) => t.component.theming)
        .catch((t) => at(r, t)),
    Ul = async (r, e, t) =>
      await fetch(
        `${lt(r)}/send`,
        ot({ method: "POST", component_id: r, access_token: t, body: e }),
      )
        .then((n) => it(n))
        .then((n) => n.response)
        .catch((n) => at(r, n)),
    Gl = async (r, e, t) => {
      const n = ot({ method: "POST", component_id: r, access_token: t }),
        i = new FormData();
      return (
        i.append("file", e),
        typeof n.headers != "undefined" &&
          "Content-Type" in n.headers &&
          delete n.headers["Content-Type"],
        (n.body = i),
        await fetch(`${lt(r)}/files`, n)
          .then((l) => it(l))
          .then((l) => (Array.isArray(l.response) ? l.response[0] : l.response))
          .catch(at.bind(0, r))
      );
    },
    Jl = async (r, e, t) =>
      await fetch(
        `${lt(r)}/drafts`,
        ot({ method: "POST", component_id: r, access_token: t, body: e }),
      )
        .then((n) => it(n))
        .then((n) => n.response)
        .catch((n) => at(r, n)),
    Zn = async (r, e, t) =>
      await fetch(
        `${lt(r)}/drafts/${e.id}`,
        ot({ method: "PUT", component_id: r, access_token: t, body: e }),
      )
        .then((n) => it(n))
        .then((n) => n.response)
        .catch((n) => at(r, n)),
    Wl = async (r) =>
      await fetch(`${lt(r.component_id)}/account`, ot(r))
        .then((t) => it(t))
        .then((t) => t.response)
        .catch((t) => at(r.component_id, t));
  var Zl = Object.defineProperty,
    Yn = Object.getOwnPropertySymbols,
    Yl = Object.prototype.hasOwnProperty,
    Vl = Object.prototype.propertyIsEnumerable,
    Vn = (r, e, t) =>
      e in r
        ? Zl(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (r[e] = t),
    Xn = (r, e) => {
      for (var t in e || (e = {})) Yl.call(e, t) && Vn(r, t, e[t]);
      if (Yn) for (var t of Yn(e)) Vl.call(e, t) && Vn(r, t, e[t]);
      return r;
    };
  const Xl = async (r) =>
      fetch(
        `${lt(r.component_id)}/calendars/availability`,
        ot({
          method: "POST",
          component_id: r.component_id,
          access_token: r.access_token,
          body: r.body,
        }),
      )
        .then(async (e) => {
          const t = await it(e);
          return (
            (t.response.time_slots = t.response.time_slots.map(
              (n) => (
                (n.start_time = n.start || 0),
                (n.end_time = n.end || 0),
                delete n.start,
                delete n.end,
                n
              ),
            )),
            t.response
          );
        })
        .catch((e) => at(r.component_id, e)),
    Kl = async (r) =>
      fetch(
        `${lt(r.component_id)}/calendars/availability/consecutive`,
        ot({
          method: "POST",
          component_id: r.component_id,
          access_token: r.access_token,
          body: r.body,
        }),
      )
        .then(async (e) => {
          var t;
          const i =
              ((t = (await it(e)).response) == null
                ? void 0
                : t.map(
                    (c) => (
                      (c = c.map(
                        (o) => (
                          (o.start_time = new Date(o.start_time * 1e3)),
                          (o.end_time = new Date(o.end_time * 1e3)),
                          o
                        ),
                      )),
                      c
                    ),
                  )) || [],
            l = Ql(i, r.body.events);
          return ql(l);
        })
        .catch((e) => at(r.component_id, e));
  function Ql(r, e) {
    return r.map((t) =>
      t.map((n) =>
        Xn(
          Xn({}, n),
          e.find(
            (i) =>
              i.participantEmails.length === n.emails.length &&
              i.participantEmails.every((l) => n.emails.includes(l)),
          ),
        ),
      ),
    );
  }
  function ql(r) {
    const e = new Set();
    return r.filter((t) => {
      const n = `${t[0].start_time}_${t[t.length - 1].end_time}`;
      return e.has(n) ? !1 : (e.add(n), !0);
    });
  }
  var $l = Object.defineProperty,
    Kn = Object.getOwnPropertySymbols,
    es = Object.prototype.hasOwnProperty,
    ts = Object.prototype.propertyIsEnumerable,
    Qn = (r, e, t) =>
      e in r
        ? $l(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (r[e] = t),
    rs = (r, e) => {
      for (var t in e || (e = {})) es.call(e, t) && Qn(r, t, e[t]);
      if (Kn) for (var t of Kn(e)) ts.call(e, t) && Qn(r, t, e[t]);
      return r;
    };
  function ns() {
    const r = (t, n) => {
        var i, l;
        const s = JSON.parse(n),
          c = rs({}, s);
        if (
          (delete c.forceReload,
          (n = JSON.stringify(c)),
          !(
            !s.component_id ||
            !((i = s == null ? void 0 : s.body) == null
              ? void 0
              : i.start_time) ||
            !((l = s == null ? void 0 : s.body) == null ? void 0 : l.end_time)
          ))
        ) {
          if (!t[n] || s.forceReload) {
            const o = Xl(s);
            e.update((a) => ((a[n] = o), a)), (t[n] = o);
          }
          return t[n];
        }
      },
      e = Ft(new Proxy({}, { get: r }));
    return e;
  }
  ns();
  function is() {
    const r = (t, n) => {
        var i, l;
        const s = JSON.parse(n);
        if (
          !(
            !s.component_id ||
            !((i = s == null ? void 0 : s.body) == null
              ? void 0
              : i.start_time) ||
            !((l = s == null ? void 0 : s.body) == null ? void 0 : l.end_time)
          )
        ) {
          if (!t[n]) {
            const c = Kl(s);
            e.update((o) => ((o[n] = c), o)), (t[n] = c);
          }
          return t[n];
        }
      },
      e = Ft(new Proxy({}, { get: r }));
    return e;
  }
  is();
  var os = Object.defineProperty,
    qn = Object.getOwnPropertySymbols,
    ls = Object.prototype.hasOwnProperty,
    ss = Object.prototype.propertyIsEnumerable,
    $n = (r, e, t) =>
      e in r
        ? os(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (r[e] = t),
    Pt = (r, e) => {
      for (var t in e || (e = {})) ls.call(e, t) && $n(r, t, e[t]);
      if (qn) for (var t of qn(e)) ss.call(e, t) && $n(r, t, e[t]);
      return r;
    };
  async function ei(r) {
    const e = [];
    for (let t = 0; t < r; t++) e.push({ isLoaded: !1, threads: [] });
    return e;
  }
  function as() {
    const { subscribe: r, set: e, update: t } = Ft({});
    let n = {},
      i;
    return {
      subscribe: r,
      set: e,
      getThreads: async (l, s, c, o = !1) => {
        const a = JSON.stringify(l);
        if (!l.component_id && !l.access_token) return [];
        if (i === void 0 || o) {
          const f = l.thread_ids ? l.thread_ids.length : await Wn(l).catch(It);
          f && (i = f);
        }
        if (!Array.isArray(n[a]) || o) {
          const f = Math.ceil(i / c);
          n[a] = await ei(f);
        }
        if (typeof n[a][s] == "undefined") return [];
        if (!n[a][s].isLoaded) {
          const f = await Jn(l, c, s * c).catch(It);
          f && ((n[a][s].threads = f), (n[a][s].isLoaded = !0));
        }
        return t((f) => ((f[a] = n[a]), Pt({}, f))), n[a][s].threads;
      },
      getNumberOfItems: async (l) => {
        if (!l.component_id && !l.access_token) return 0;
        if (typeof i == "undefined") {
          const s = await Wn(l).catch(It);
          s && (i = s);
        }
        return i;
      },
      getThreadsWithSearchKeyword: async (l, s = !1) => {
        if (!l.component_id && !l.access_token) return [];
        const c = JSON.stringify(l);
        if (
          ((!Array.isArray(n[c]) || s) && (n[c] = await ei(1)),
          !n[c][0].isLoaded || s)
        ) {
          const o = await Hl(l).catch(It);
          o && ((n[c][0].threads = o), (n[c][0].isLoaded = !0));
        }
        return t((o) => ((o[c] = n[c]), Pt({}, o))), n[c][0].threads;
      },
      updateThread: async (l, s, c, o, a) => {
        const f = await jl(l, c).catch(It);
        if (!n[s][o].isLoaded) {
          const u = await Jn(JSON.parse(s), a, o * a).catch(It);
          u && ((n[s][o].threads = u), (n[s][o].isLoaded = !0));
        }
        return (
          (n[s][o].threads = n[s][o].threads.map(
            (u) => (f && u.id === f.id && (u = Object.assign(u, f)), u),
          )),
          t((u) => ((u[s] = n[s]), Pt({}, u))),
          n[s][o].threads
        );
      },
      updateThreadSelection: (l, s, c) => {
        const o = n[l][s].threads;
        if (c) {
          const a = o.find((f) => f.id === c);
          a && (a.selected = !a.selected);
        } else {
          const a = o.some((f) => f.selected);
          for (const f of o) f.selected = !a;
        }
        return t((a) => ((a[l] = n[l]), Pt({}, a))), n[l][s].threads;
      },
      reset: () => {
        (n = {}), e({});
      },
      hydrateMessageInThread: (l, s, c) => {
        var o, a, f;
        const u = JSON.stringify(s),
          g =
            (a = (o = n[u][c]) == null ? void 0 : o.threads) == null
              ? void 0
              : a.find((b) => b.id === l.thread_id);
        if (g) {
          const b =
            (f = g.messages) == null ? void 0 : f.find((v) => v.id === l.id);
          b
            ? ((b.body = l.body),
              t((v) => {
                if (l.thread_id) {
                  let y = v[u][c].threads.find((x) => x.id === g.id);
                  y && (y = JSON.parse(JSON.stringify(g)));
                }
                return Pt({}, v);
              }))
            : t((v) => {
                if (l.thread_id) {
                  let y = v[u][c].threads.find((x) => x.id === g.id);
                  if (y) {
                    const x = g.messages;
                    x.push(l),
                      (g.messages = x),
                      (g.snippet = l.snippet),
                      (g.drafts = g.drafts.filter((D) => D.id !== l.id)),
                      (y = JSON.parse(JSON.stringify(g)));
                  }
                }
                return Pt({}, v);
              });
        }
        return n[u][c].threads;
      },
      hydrateDraftInThread: (l, s, c) => {
        var o, a, f;
        const u = JSON.stringify(s),
          g =
            (a = (o = n[u][c]) == null ? void 0 : o.threads) == null
              ? void 0
              : a.find((b) => b.id === l.thread_id);
        if (g) {
          const b =
            (f = g.drafts) == null ? void 0 : f.find((v) => v.id === l.id);
          if (l.thread_id) {
            if (b) Object.assign(b, l);
            else {
              const v = g.drafts;
              v.push(l), (g.drafts = v);
            }
            t((v) => {
              let y = v[u][c].threads.find((x) => x.id === g.id);
              return y && (y = JSON.parse(JSON.stringify(g))), Pt({}, v);
            });
          }
        }
        return n[u][c].threads;
      },
    };
  }
  const cs = as();
  Cl(cs, (r) => {
    const e = {};
    return (
      Object.entries(r).forEach(
        ([t, n]) => (e[t] = n.map((i) => i.threads).flat()),
      ),
      e
    );
  });
  function fs() {
    const r = (t, n) => {
        const i = JSON.parse(n);
        if (!!i.component_id) {
          if (!t[n]) {
            const l = Bl(i.component_id, i.access_token);
            e.update((s) => ((s[n] = l), s)), (t[n] = l);
          }
          return t[n];
        }
      },
      e = Ft(new Proxy({}, { get: r }));
    return e;
  }
  const us = fs();
  function ds(r) {
    return (e, t) => {
      r.dispatchEvent &&
        r.dispatchEvent(new CustomEvent(e, { detail: t, composed: !0 }));
    };
  }
  function Jr(r, e, t) {
    return new Proxy(r, {
      get: (n, i) =>
        i === "toString" || i === "toJSON"
          ? () => JSON.stringify(n)
          : Reflect.get(n, i) !== void 0
          ? ti(Reflect.get(n, i), t[i])
          : e && i in e
          ? ti(e[i], t[i])
          : t[i],
      ownKeys: (n) => {
        const i = new Set([
          ...Reflect.ownKeys(n),
          ...Object.keys(e),
          ...Object.keys(t),
        ]);
        return Array.from(i);
      },
      getOwnPropertyDescriptor: (n, i) => {
        var l, s;
        let c = Reflect.getOwnPropertyDescriptor(n, i);
        return (
          c ||
            ((c =
              (s =
                (l = e && Object.getOwnPropertyDescriptor(e, i)) != null
                  ? l
                  : t && Object.getOwnPropertyDescriptor(t, i)) != null
                ? s
                : { configurable: !0, enumerable: !0, writable: !0 }),
            Reflect.defineProperty(n, i, c)),
          c
        );
      },
    });
  }
  function ti(r, e) {
    if (r) {
      if (typeof e == "boolean") return hs(r);
      if (typeof e == "number") return Number(r);
      if (e instanceof Date) return new Date(r);
    }
    return r === void 0 ? (e != null ? e : null) : r;
  }
  function hs(r) {
    return [!0, "true", "1"].includes(r);
  }
  function ri(r) {
    let e, t, n, i, l, s;
    function c(f, u) {
      if (f[2] === "HostDomainNotAllowedError") return _s;
      if (f[2] === "IncompatibleProperties") return ms;
    }
    let o = c(r),
      a = o && o(r);
    return {
      c() {
        var f, u;
        (e = w("div")),
          a && a.c(),
          (t = P()),
          (n = w("span")),
          (n.textContent = "Debug info:"),
          (i = P()),
          (l = w("textarea")),
          d(n, "class", "details"),
          d(l, "class", "details"),
          (l.readOnly = !0),
          (l.value = s =
            `
      ` +
            r[2] +
            ": " +
            r[0] +
            `
      ` +
            ((u = (f = r[1].message) == null ? void 0 : f.message) != null
              ? u
              : "") +
            `
    `),
          d(e, "class", "message-container");
      },
      m(f, u) {
        E(f, e, u), a && a.m(e, null), p(e, t), p(e, n), p(e, i), p(e, l);
      },
      p(f, u) {
        var g, b;
        o === (o = c(f)) && a
          ? a.p(f, u)
          : (a && a.d(1), (a = o && o(f)), a && (a.c(), a.m(e, t))),
          u & 7 &&
            s !==
              (s =
                `
      ` +
                f[2] +
                ": " +
                f[0] +
                `
      ` +
                ((b = (g = f[1].message) == null ? void 0 : g.message) != null
                  ? b
                  : "") +
                `
    `) &&
            (l.value = s);
      },
      d(f) {
        f && h(e), a && a.d();
      },
    };
  }
  function ms(r) {
    let e;
    return {
      c() {
        (e = w("h3")),
          (e.textContent =
            "Your component properties do not work with each other.");
      },
      m(t, n) {
        E(t, e, n);
      },
      p: j,
      d(t) {
        t && h(e);
      },
    };
  }
  function _s(r) {
    let e, t, n, i, l, s;
    return {
      c() {
        (e = w("h3")),
          (t = ee(`You are trying to access this component from\xA0
        `)),
          (n = w("code")),
          (n.textContent = `${window.location.hostname}`),
          (i = ee(`. The component's settings do not
        allow access from this domain.`)),
          (l = P()),
          (s = w("h4")),
          (s.innerHTML = `The list of allowed domains can be modified in your\xA0
        <a href="https://dashboard.nylas.com">Dashboard</a>.`);
      },
      m(c, o) {
        E(c, e, o), p(e, t), p(e, n), p(e, i), E(c, l, o), E(c, s, o);
      },
      p: j,
      d(c) {
        c && h(e), c && h(l), c && h(s);
      },
    };
  }
  function ps(r) {
    let e,
      t = r[2] && r[3] && ri(r);
    return {
      c() {
        t && t.c(), (e = st()), (this.c = j);
      },
      m(n, i) {
        t && t.m(n, i), E(n, e, i);
      },
      p(n, [i]) {
        n[2] && n[3]
          ? t
            ? t.p(n, i)
            : ((t = ri(n)), t.c(), t.m(e.parentNode, e))
          : t && (t.d(1), (t = null));
      },
      i: j,
      o: j,
      d(n) {
        t && t.d(n), n && h(e);
      },
    };
  }
  function gs(r, e, t) {
    let n;
    pr(r, Gr, (g) => t(8, (n = g)));
    var i, l, s, c;
    let { id: o } = e,
      a,
      f;
    const u =
      window.location.href.includes("localhost") ||
      window.location.href.includes("127.0.0.1");
    return (
      (r.$$set = (g) => {
        "id" in g && t(0, (o = g.id));
      }),
      (r.$$.update = () => {
        r.$$.dirty & 499 &&
          (t(
            1,
            (a = t(4, (i = n[o])) !== null && i !== void 0 ? i : { name: "" }),
          ),
          t(
            2,
            (f =
              t(
                7,
                (c =
                  t(5, (l = a.name)) !== null && l !== void 0
                    ? l
                    : t(6, (s = a.message)) === null || s === void 0
                    ? void 0
                    : s.name),
              ) !== null && c !== void 0
                ? c
                : ""),
          ));
      }),
      [o, a, f, u, i, l, s, c, n]
    );
  }
  class bs extends wt {
    constructor(e) {
      super();
      (this.shadowRoot.innerHTML = `<style>.message-container{background:#fff6f6;border-radius:5px;box-shadow:0 0 0 1px #aa92a0 inset, 0 0 0 0 transparent;color:#9f3a38;font-size:1.25rem;padding:10px;margin:0 auto;transition:opacity 500ms ease, color 500ms ease,
      background-color 500ms ease, box-shadow 500ms ease,
      -webkit-box-shadow 500ms ease}.message-container *:focus{outline:5px auto Highlight;outline:5px auto -webkit-focus-ring-color}.details{color:#494949;font-size:0.75rem;width:100%}</style>`),
        Me(
          this,
          {
            target: this.shadowRoot,
            props: Et(this.attributes),
            customElement: !0,
          },
          gs,
          ps,
          _r,
          { id: 0 },
          null,
        ),
        e &&
          (e.target && E(e.target, this, e.anchor),
          e.props && (this.$set(e.props), z()));
    }
    static get observedAttributes() {
      return ["id"];
    }
    get id() {
      return this.$$.ctx[0];
    }
    set id(e) {
      this.$$set({ id: e }), z();
    }
  }
  customElements.define("nylas-error", bs);
  var vs = "@nylas/components-composer",
    ws = "1.1.6-canary.20",
    ys = {
      type: "git",
      url: "github:nylas/components.git",
      directory: "components/composer",
    },
    ks = {
      build: "rollup -c",
      dev: "rollup -c -w",
      tscheck:
        'tsc && svelte-check --compiler-warnings "missing-custom-element-compile-options:ignore"',
      start: "echo 'Nothing to start'",
    },
    xs = "index.js",
    Es = "cca94159c114ecff613f41caa0a4468e0f698e2c",
    Cs = {
      name: vs,
      version: ws,
      repository: ys,
      scripts: ks,
      main: xs,
      gitHead: Es,
    },
    Ss = Object.defineProperty,
    ni = Object.getOwnPropertySymbols,
    Ts = Object.prototype.hasOwnProperty,
    Ls = Object.prototype.propertyIsEnumerable,
    ii = (r, e, t) =>
      e in r
        ? Ss(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (r[e] = t),
    oi = (r, e) => {
      for (var t in e || (e = {})) Ts.call(e, t) && ii(r, t, e[t]);
      if (ni) for (var t of ni(e)) Ls.call(e, t) && ii(r, t, e[t]);
      return r;
    };
  const Sr = {
      from: [],
      to: [],
      cc: [],
      bcc: [],
      body: "",
      subject: "New Message",
      send_at: null,
      file_ids: [],
    },
    li = [],
    si = (r, e) =>
      r.update((t) =>
        t.map((n) => n.filename).includes(e.filename) ? t : [...t, e],
      ),
    ai = (r, e, t) =>
      r.update((n) => n.map((i) => (i.filename === e ? oi(oi({}, i), t) : i))),
    As = (r, e) =>
      r.update((t) => [...t.filter((n) => n.filename !== e.filename)]),
    Tr = (r) => {
      r.set(JSON.parse(JSON.stringify(li)));
    },
    ci = (r) =>
      `${
        [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ][r.getMonth()]
      } ${r.getDate()}, ${r.getHours()}:${r.getMinutes()} ${
        r.getHours() >= 12 ? "PM" : "AM"
      }`;
  function Os(r) {
    let e,
      t,
      n,
      i,
      l,
      s,
      c,
      o,
      a,
      f,
      u,
      g,
      b,
      v,
      y,
      x,
      D,
      H,
      G,
      oe = [
        { version: "1.1" },
        { id: "Capa_1" },
        { xmlns: "http://www.w3.org/2000/svg" },
        { "xmlns:xlink": "http://www.w3.org/1999/xlink" },
        { x: "0px" },
        { y: "0px" },
        { width: "357px" },
        { height: "357px" },
        { viewBox: "0 0 357 357" },
        { style: "enable-background:new 0 0 357 357;" },
        { "xml:space": "preserve" },
        r[0],
      ],
      le = {};
    for (let I = 0; I < oe.length; I += 1) le = $(le, oe[I]);
    return {
      c() {
        (e = C("svg")),
          (t = C("g")),
          (n = C("g")),
          (i = C("path")),
          (l = C("g")),
          (s = C("g")),
          (c = C("g")),
          (o = C("g")),
          (a = C("g")),
          (f = C("g")),
          (u = C("g")),
          (g = C("g")),
          (b = C("g")),
          (v = C("g")),
          (y = C("g")),
          (x = C("g")),
          (D = C("g")),
          (H = C("g")),
          (G = C("g")),
          this.h();
      },
      l(I) {
        e = T(I, "svg", {
          version: !0,
          id: !0,
          xmlns: !0,
          "xmlns:xlink": !0,
          x: !0,
          y: !0,
          width: !0,
          height: !0,
          viewBox: !0,
          style: !0,
          "xml:space": !0,
        });
        var O = S(e);
        t = T(O, "g", {});
        var U = S(t);
        n = T(U, "g", { id: !0 });
        var fe = S(n);
        (i = T(fe, "path", { d: !0 })),
          S(i).forEach(h),
          fe.forEach(h),
          U.forEach(h),
          (l = T(O, "g", {}));
        var B = S(l);
        B.forEach(h), (s = T(O, "g", {}));
        var ve = S(s);
        ve.forEach(h), (c = T(O, "g", {}));
        var me = S(c);
        me.forEach(h), (o = T(O, "g", {}));
        var we = S(o);
        we.forEach(h), (a = T(O, "g", {}));
        var Ne = S(a);
        Ne.forEach(h), (f = T(O, "g", {}));
        var J = S(f);
        J.forEach(h), (u = T(O, "g", {}));
        var V = S(u);
        V.forEach(h), (g = T(O, "g", {}));
        var ue = S(g);
        ue.forEach(h), (b = T(O, "g", {}));
        var Ue = S(b);
        Ue.forEach(h), (v = T(O, "g", {}));
        var ze = S(v);
        ze.forEach(h), (y = T(O, "g", {}));
        var F = S(y);
        F.forEach(h), (x = T(O, "g", {}));
        var _e = S(x);
        _e.forEach(h), (D = T(O, "g", {}));
        var ke = S(D);
        ke.forEach(h), (H = T(O, "g", {}));
        var ce = S(H);
        ce.forEach(h), (G = T(O, "g", {}));
        var ie = S(G);
        ie.forEach(h), O.forEach(h), this.h();
      },
      h() {
        d(i, "d", "M357,204H0v-51h357V204z"), d(n, "id", "remove"), ye(e, le);
      },
      m(I, O) {
        Ve(I, e, O),
          L(e, t),
          L(t, n),
          L(n, i),
          L(e, l),
          L(e, s),
          L(e, c),
          L(e, o),
          L(e, a),
          L(e, f),
          L(e, u),
          L(e, g),
          L(e, b),
          L(e, v),
          L(e, y),
          L(e, x),
          L(e, D),
          L(e, H),
          L(e, G);
      },
      p(I, [O]) {
        ye(
          e,
          (le = Xe(oe, [
            { version: "1.1" },
            { id: "Capa_1" },
            { xmlns: "http://www.w3.org/2000/svg" },
            { "xmlns:xlink": "http://www.w3.org/1999/xlink" },
            { x: "0px" },
            { y: "0px" },
            { width: "357px" },
            { height: "357px" },
            { viewBox: "0 0 357 357" },
            { style: "enable-background:new 0 0 357 357;" },
            { "xml:space": "preserve" },
            O & 1 && I[0],
          ])),
        );
      },
      i: j,
      o: j,
      d(I) {
        I && h(e);
      },
    };
  }
  function Ms(r, e, t) {
    return (
      (r.$$set = (n) => {
        t(0, (e = $($({}, e), pe(n))));
      }),
      (e = pe(e)),
      [e]
    );
  }
  class Ns extends Ke {
    constructor(e) {
      super();
      Me(this, e, Ms, Os, He, {});
    }
  }
  function Ds(r) {
    let e,
      t,
      n = [
        { height: "512pt" },
        { viewBox: "-96 0 512 512" },
        { width: "512pt" },
        { xmlns: "http://www.w3.org/2000/svg" },
        r[0],
      ],
      i = {};
    for (let l = 0; l < n.length; l += 1) i = $(i, n[l]);
    return {
      c() {
        (e = C("svg")), (t = C("path")), this.h();
      },
      l(l) {
        e = T(l, "svg", { height: !0, viewBox: !0, width: !0, xmlns: !0 });
        var s = S(e);
        (t = T(s, "path", { d: !0 })), S(t).forEach(h), s.forEach(h), this.h();
      },
      h() {
        d(
          t,
          "d",
          "m160 512c-88.234375 0-160-71.765625-160-160v-224c0-11.796875 9.558594-21.332031 21.332031-21.332031 11.777344 0 21.335938 9.535156 21.335938 21.332031v224c0 64.683594 52.628906 117.332031 117.332031 117.332031s117.332031-52.648437 117.332031-117.332031v-234.667969c0-41.171875-33.492187-74.664062-74.664062-74.664062-41.175781 0-74.667969 33.492187-74.667969 74.664062v213.335938c0 17.640625 14.355469 32 32 32s32-14.359375 32-32v-202.667969c0-11.796875 9.558594-21.332031 21.332031-21.332031 11.777344 0 21.335938 9.535156 21.335938 21.332031v202.667969c0 41.171875-33.496094 74.664062-74.667969 74.664062s-74.667969-33.492187-74.667969-74.664062v-213.335938c0-64.679687 52.628907-117.332031 117.335938-117.332031 64.703125 0 117.332031 52.652344 117.332031 117.332031v234.667969c0 88.234375-71.765625 160-160 160zm0 0",
        ),
          ye(e, i);
      },
      m(l, s) {
        Ve(l, e, s), L(e, t);
      },
      p(l, [s]) {
        ye(
          e,
          (i = Xe(n, [
            { height: "512pt" },
            { viewBox: "-96 0 512 512" },
            { width: "512pt" },
            { xmlns: "http://www.w3.org/2000/svg" },
            s & 1 && l[0],
          ])),
        );
      },
      i: j,
      o: j,
      d(l) {
        l && h(e);
      },
    };
  }
  function zs(r, e, t) {
    return (
      (r.$$set = (n) => {
        t(0, (e = $($({}, e), pe(n))));
      }),
      (e = pe(e)),
      [e]
    );
  }
  class Rs extends Ke {
    constructor(e) {
      super();
      Me(this, e, zs, Ds, He, {});
    }
  }
  function Fs(r) {
    let e,
      t,
      n,
      i = [
        { xmlns: "http://www.w3.org/2000/svg" },
        { height: "24px" },
        { viewBox: "0 0 24 24" },
        { width: "24px" },
        { fill: "#000000" },
        r[0],
      ],
      l = {};
    for (let s = 0; s < i.length; s += 1) l = $(l, i[s]);
    return {
      c() {
        (e = C("svg")), (t = C("path")), (n = C("path")), this.h();
      },
      l(s) {
        e = T(s, "svg", {
          xmlns: !0,
          height: !0,
          viewBox: !0,
          width: !0,
          fill: !0,
        });
        var c = S(e);
        (t = T(c, "path", { d: !0, fill: !0 })),
          S(t).forEach(h),
          (n = T(c, "path", { d: !0 })),
          S(n).forEach(h),
          c.forEach(h),
          this.h();
      },
      h() {
        d(t, "d", "M0 0h24v24H0V0z"),
          d(t, "fill", "none"),
          d(
            n,
            "d",
            "M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zm-2 0v.01L12 13 4 8l8-4.68L19.99 8zM4 18v-7.66l8 5.02 7.99-4.99L20 18H4z",
          ),
          ye(e, l);
      },
      m(s, c) {
        Ve(s, e, c), L(e, t), L(e, n);
      },
      p(s, [c]) {
        ye(
          e,
          (l = Xe(i, [
            { xmlns: "http://www.w3.org/2000/svg" },
            { height: "24px" },
            { viewBox: "0 0 24 24" },
            { width: "24px" },
            { fill: "#000000" },
            c & 1 && s[0],
          ])),
        );
      },
      i: j,
      o: j,
      d(s) {
        s && h(e);
      },
    };
  }
  function Is(r, e, t) {
    return (
      (r.$$set = (n) => {
        t(0, (e = $($({}, e), pe(n))));
      }),
      (e = pe(e)),
      [e]
    );
  }
  class Ps extends Ke {
    constructor(e) {
      super();
      Me(this, e, Is, Fs, He, {});
    }
  }
  function Hs(r) {
    let e,
      t,
      n,
      i,
      l,
      s,
      c,
      o,
      a,
      f,
      u,
      g,
      b,
      v,
      y,
      x,
      D,
      H,
      G,
      oe = [
        { version: "1.1" },
        { id: "Capa_1" },
        { xmlns: "http://www.w3.org/2000/svg" },
        { "xmlns:xlink": "http://www.w3.org/1999/xlink" },
        { x: "0px" },
        { y: "0px" },
        { width: "306px" },
        { height: "306px" },
        { viewBox: "0 0 306 306" },
        { style: "enable-background:new 0 0 306 306;" },
        { "xml:space": "preserve" },
        r[0],
      ],
      le = {};
    for (let I = 0; I < oe.length; I += 1) le = $(le, oe[I]);
    return {
      c() {
        (e = C("svg")),
          (t = C("g")),
          (n = C("g")),
          (i = C("polygon")),
          (l = C("g")),
          (s = C("g")),
          (c = C("g")),
          (o = C("g")),
          (a = C("g")),
          (f = C("g")),
          (u = C("g")),
          (g = C("g")),
          (b = C("g")),
          (v = C("g")),
          (y = C("g")),
          (x = C("g")),
          (D = C("g")),
          (H = C("g")),
          (G = C("g")),
          this.h();
      },
      l(I) {
        e = T(I, "svg", {
          version: !0,
          id: !0,
          xmlns: !0,
          "xmlns:xlink": !0,
          x: !0,
          y: !0,
          width: !0,
          height: !0,
          viewBox: !0,
          style: !0,
          "xml:space": !0,
        });
        var O = S(e);
        t = T(O, "g", {});
        var U = S(t);
        n = T(U, "g", { id: !0 });
        var fe = S(n);
        (i = T(fe, "polygon", { points: !0 })),
          S(i).forEach(h),
          fe.forEach(h),
          U.forEach(h),
          (l = T(O, "g", {}));
        var B = S(l);
        B.forEach(h), (s = T(O, "g", {}));
        var ve = S(s);
        ve.forEach(h), (c = T(O, "g", {}));
        var me = S(c);
        me.forEach(h), (o = T(O, "g", {}));
        var we = S(o);
        we.forEach(h), (a = T(O, "g", {}));
        var Ne = S(a);
        Ne.forEach(h), (f = T(O, "g", {}));
        var J = S(f);
        J.forEach(h), (u = T(O, "g", {}));
        var V = S(u);
        V.forEach(h), (g = T(O, "g", {}));
        var ue = S(g);
        ue.forEach(h), (b = T(O, "g", {}));
        var Ue = S(b);
        Ue.forEach(h), (v = T(O, "g", {}));
        var ze = S(v);
        ze.forEach(h), (y = T(O, "g", {}));
        var F = S(y);
        F.forEach(h), (x = T(O, "g", {}));
        var _e = S(x);
        _e.forEach(h), (D = T(O, "g", {}));
        var ke = S(D);
        ke.forEach(h), (H = T(O, "g", {}));
        var ce = S(H);
        ce.forEach(h), (G = T(O, "g", {}));
        var ie = S(G);
        ie.forEach(h), O.forEach(h), this.h();
      },
      h() {
        d(
          i,
          "points",
          "153,58.65 0,211.65 35.7,247.35 153,130.05 270.3,247.35 306,211.65 		",
        ),
          d(n, "id", "expand-less"),
          ye(e, le);
      },
      m(I, O) {
        Ve(I, e, O),
          L(e, t),
          L(t, n),
          L(n, i),
          L(e, l),
          L(e, s),
          L(e, c),
          L(e, o),
          L(e, a),
          L(e, f),
          L(e, u),
          L(e, g),
          L(e, b),
          L(e, v),
          L(e, y),
          L(e, x),
          L(e, D),
          L(e, H),
          L(e, G);
      },
      p(I, [O]) {
        ye(
          e,
          (le = Xe(oe, [
            { version: "1.1" },
            { id: "Capa_1" },
            { xmlns: "http://www.w3.org/2000/svg" },
            { "xmlns:xlink": "http://www.w3.org/1999/xlink" },
            { x: "0px" },
            { y: "0px" },
            { width: "306px" },
            { height: "306px" },
            { viewBox: "0 0 306 306" },
            { style: "enable-background:new 0 0 306 306;" },
            { "xml:space": "preserve" },
            O & 1 && I[0],
          ])),
        );
      },
      i: j,
      o: j,
      d(I) {
        I && h(e);
      },
    };
  }
  function js(r, e, t) {
    return (
      (r.$$set = (n) => {
        t(0, (e = $($({}, e), pe(n))));
      }),
      (e = pe(e)),
      [e]
    );
  }
  class Bs extends Ke {
    constructor(e) {
      super();
      Me(this, e, js, Hs, He, {});
    }
  }
  function fi(r, e, t) {
    const n = r.slice();
    return (n[104] = e[t]), n;
  }
  function ui(r) {
    let e, t, n;
    return {
      c() {
        (e = w("link")), d(e, "rel", "stylesheet"), d(e, "href", r[21]);
      },
      m(i, l) {
        E(i, e, l),
          t || ((n = [he(e, "load", r[85]), he(e, "error", r[86])]), (t = !0));
      },
      p(i, l) {
        l[0] & 2097152 && d(e, "href", i[21]);
      },
      d(i) {
        i && h(e), (t = !1), et(n);
      },
    };
  }
  function di(r) {
    let e, t, n, i, l;
    return (
      (t = new pn({ props: { class: "nylas-composer__spinner" } })),
      {
        c() {
          (e = w("div")),
            nt(t.$$.fragment),
            (n = P()),
            (i = w("div")),
            (i.textContent = "Loading"),
            d(e, "class", "nylas-composer nylas-composer__loader");
        },
        m(s, c) {
          E(s, e, c), rt(t, e, null), p(e, n), p(e, i), (l = !0);
        },
        i(s) {
          l || (W(t.$$.fragment, s), (l = !0));
        },
        o(s) {
          te(t.$$.fragment, s), (l = !1);
        },
        d(s) {
          s && h(e), tt(t);
        },
      }
    );
  }
  function hi(r) {
    let e,
      t,
      n,
      i = r[8].show_header && mi(r),
      l = !r[8].minimized && gi(r);
    return {
      c() {
        (e = w("div")),
          i && i.c(),
          (t = P()),
          l && l.c(),
          d(e, "class", "nylas-composer"),
          d(e, "data-cy", "nylas-composer"),
          Fe(e, "minimized", r[8].minimized);
      },
      m(s, c) {
        E(s, e, c), i && i.m(e, null), p(e, t), l && l.m(e, null), (n = !0);
      },
      p(s, c) {
        s[8].show_header
          ? i
            ? (i.p(s, c), c[0] & 256 && W(i, 1))
            : ((i = mi(s)), i.c(), W(i, 1), i.m(e, t))
          : i &&
            (We(),
            te(i, 1, 1, () => {
              i = null;
            }),
            Ze()),
          s[8].minimized
            ? l &&
              (We(),
              te(l, 1, 1, () => {
                l = null;
              }),
              Ze())
            : l
            ? (l.p(s, c), c[0] & 256 && W(l, 1))
            : ((l = gi(s)), l.c(), W(l, 1), l.m(e, null)),
          c[0] & 256 && Fe(e, "minimized", s[8].minimized);
      },
      i(s) {
        n || (W(i), W(l), (n = !0));
      },
      o(s) {
        te(i), te(l), (n = !1);
      },
      d(s) {
        s && h(e), i && i.d(), l && l.d();
      },
    };
  }
  function mi(r) {
    let e,
      t,
      n,
      i,
      l,
      s,
      c,
      o,
      a = r[8].show_minimize_button && _i(r),
      f = r[8].show_close_button && pi(r);
    return {
      c() {
        (e = w("header")),
          (t = w("span")),
          (n = ee(r[14])),
          (i = P()),
          (l = w("div")),
          a && a.c(),
          (s = P()),
          f && f.c(),
          d(e, "class", (c = r[8].minimized ? "minimized" : void 0));
      },
      m(u, g) {
        E(u, e, g),
          p(e, t),
          p(t, n),
          p(e, i),
          p(e, l),
          a && a.m(l, null),
          p(l, s),
          f && f.m(l, null),
          (o = !0);
      },
      p(u, g) {
        (!o || g[0] & 16384) && Ae(n, u[14]),
          u[8].show_minimize_button
            ? a
              ? (a.p(u, g), g[0] & 256 && W(a, 1))
              : ((a = _i(u)), a.c(), W(a, 1), a.m(l, s))
            : a &&
              (We(),
              te(a, 1, 1, () => {
                a = null;
              }),
              Ze()),
          u[8].show_close_button
            ? f
              ? (f.p(u, g), g[0] & 256 && W(f, 1))
              : ((f = pi(u)), f.c(), W(f, 1), f.m(l, null))
            : f &&
              (We(),
              te(f, 1, 1, () => {
                f = null;
              }),
              Ze()),
          (!o ||
            (g[0] & 256 &&
              c !== (c = u[8].minimized ? "minimized" : void 0))) &&
            d(e, "class", c);
      },
      i(u) {
        o || (W(a), W(f), (o = !0));
      },
      o(u) {
        te(a), te(f), (o = !1);
      },
      d(u) {
        u && h(e), a && a.d(), f && f.d();
      },
    };
  }
  function _i(r) {
    let e, t, n, i;
    const l = [Gs, Us],
      s = [];
    function c(o, a) {
      return o[8].minimized ? 0 : 1;
    }
    return (
      (e = c(r)),
      (t = s[e] = l[e](r)),
      {
        c() {
          t.c(), (n = st());
        },
        m(o, a) {
          s[e].m(o, a), E(o, n, a), (i = !0);
        },
        p(o, a) {
          let f = e;
          (e = c(o)),
            e === f
              ? s[e].p(o, a)
              : (We(),
                te(s[f], 1, 1, () => {
                  s[f] = null;
                }),
                Ze(),
                (t = s[e]),
                t ? t.p(o, a) : ((t = s[e] = l[e](o)), t.c()),
                W(t, 1),
                t.m(n.parentNode, n));
        },
        i(o) {
          i || (W(t), (i = !0));
        },
        o(o) {
          te(t), (i = !1);
        },
        d(o) {
          s[e].d(o), o && h(n);
        },
      }
    );
  }
  function Us(r) {
    let e, t, n, i, l, s, c;
    return (
      (i = new Ns({ props: { class: "MinimizeIcon" } })),
      {
        c() {
          (e = w("button")),
            (t = w("span")),
            (t.textContent = "Collapse Composer"),
            (n = P()),
            nt(i.$$.fragment),
            d(t, "class", "sr-only"),
            d(e, "class", "composer-btn");
        },
        m(o, a) {
          E(o, e, a),
            p(e, t),
            p(e, n),
            rt(i, e, null),
            (l = !0),
            s || ((c = he(e, "click", r[88])), (s = !0));
        },
        p: j,
        i(o) {
          l || (W(i.$$.fragment, o), (l = !0));
        },
        o(o) {
          te(i.$$.fragment, o), (l = !1);
        },
        d(o) {
          o && h(e), tt(i), (s = !1), c();
        },
      }
    );
  }
  function Gs(r) {
    let e, t, n, i, l, s, c;
    return (
      (i = new Bs({ props: { class: "ExpandIcon" } })),
      {
        c() {
          (e = w("button")),
            (t = w("span")),
            (t.textContent = "Expand Composer"),
            (n = P()),
            nt(i.$$.fragment),
            d(t, "class", "sr-only"),
            d(e, "class", "composer-btn");
        },
        m(o, a) {
          E(o, e, a),
            p(e, t),
            p(e, n),
            rt(i, e, null),
            (l = !0),
            s || ((c = he(e, "click", r[87])), (s = !0));
        },
        p: j,
        i(o) {
          l || (W(i.$$.fragment, o), (l = !0));
        },
        o(o) {
          te(i.$$.fragment, o), (l = !1);
        },
        d(o) {
          o && h(e), tt(i), (s = !1), c();
        },
      }
    );
  }
  function pi(r) {
    let e, t, n, i, l, s, c;
    return (
      (i = new ir({ props: { class: "CloseIcon" } })),
      {
        c() {
          (e = w("button")),
            (t = w("span")),
            (t.textContent = "Close Composer"),
            (n = P()),
            nt(i.$$.fragment),
            d(t, "class", "sr-only"),
            d(e, "class", "composer-btn");
        },
        m(o, a) {
          E(o, e, a),
            p(e, t),
            p(e, n),
            rt(i, e, null),
            (l = !0),
            s || ((c = he(e, "click", r[6])), (s = !0));
        },
        p: j,
        i(o) {
          l || (W(i.$$.fragment, o), (l = !0));
        },
        o(o) {
          te(i.$$.fragment, o), (l = !1);
        },
        d(o) {
          o && h(e), tt(i), (s = !1), c();
        },
      }
    );
  }
  function gi(r) {
    let e,
      t,
      n,
      i,
      l,
      s,
      c,
      o,
      a,
      f,
      u,
      g,
      b,
      v,
      y,
      x,
      D,
      H,
      G,
      oe,
      le,
      I,
      O,
      U,
      fe,
      B,
      ve,
      me,
      we,
      Ne,
      J,
      V,
      ue,
      Ue,
      ze,
      F,
      _e,
      ke,
      ce,
      ie,
      se,
      Re,
      A,
      ae = r[8].show_from && bi(r),
      Te = r[8].show_to && wi(r),
      re = r[8].show_cc && yi(r),
      xe = r[8].show_bcc && ki(r),
      Ce = r[8].show_subject && xi(r),
      Ge = r[26].length && Ei(r),
      Oe = r[8].show_save_as_draft && Si(r),
      Le = r[8].show_attachment_button && (r[0] || r[5]) && Ti(r),
      je = r[11] && Ai(r),
      N = r[7].send_at && !r[16] && !r[17] && Oi(r),
      R = r[16] && Mi(),
      Y = r[17] && Ni(),
      ne = r[18] && Di(),
      be = r[19] && zi();
    return {
      c() {
        (e = w("main")),
          (t = w("div")),
          ae && ae.c(),
          (n = P()),
          Te && Te.c(),
          (i = P()),
          (l = w("div")),
          (s = w("button")),
          (c = ee("CC")),
          (a = P()),
          (f = w("button")),
          (u = ee("BCC")),
          (b = P()),
          re && re.c(),
          (v = P()),
          xe && xe.c(),
          (y = P()),
          Ce && Ce.c(),
          (x = P()),
          (D = w("nylas-html-editor")),
          (I = P()),
          Ge && Ge.c(),
          (O = P()),
          (U = w("footer")),
          (fe = w("div")),
          (B = w("button")),
          (ve = ee(r[20])),
          (we = P()),
          Oe && Oe.c(),
          (Ne = P()),
          Le && Le.c(),
          (J = P()),
          (V = w("form")),
          (ue = w("input")),
          (Ue = P()),
          je && je.c(),
          (ze = P()),
          N && N.c(),
          (F = P()),
          R && R.c(),
          (_e = P()),
          Y && Y.c(),
          (ke = P()),
          ne && ne.c(),
          (ce = P()),
          be && be.c(),
          (ie = st()),
          d(s, "data-cy", "toggle-cc-field-btn"),
          d(s, "type", "button"),
          (s.hidden = o =
            r[8].show_cc && !r[8].show_cc_button && !!r[8].show_to),
          d(f, "data-cy", "toggle-bcc-field-btn"),
          d(f, "type", "button"),
          (f.hidden = g =
            r[8].show_bcc && !r[8].show_bcc_button && !!r[8].show_to),
          d(l, "class", "addons"),
          d(t, "class", "contacts-wrapper"),
          q(D, "data-cy", "html-editor"),
          q(D, "html", (H = r[7].body || r[4])),
          q(D, "onchange", r[29]),
          q(D, "focus_body_onload", (G = r[8].focus_body_onload)),
          q(D, "replace_fields", (oe = r[8].replace_fields)),
          q(D, "show_editor_toolbar", (le = r[8].show_editor_toolbar)),
          d(B, "class", "send-btn"),
          (B.disabled = me = !r[24]),
          d(fe, "class", "btn-group"),
          (ue.hidden = !0),
          d(ue, "type", "file"),
          d(ue, "id", "file-upload"),
          d(V, "action", ""),
          d(V, "enctype", "multipart/form-data");
      },
      m(k, K) {
        E(k, e, K),
          p(e, t),
          ae && ae.m(t, null),
          p(t, n),
          Te && Te.m(t, null),
          p(t, i),
          p(t, l),
          p(l, s),
          p(s, c),
          r[89](s),
          p(l, a),
          p(l, f),
          p(f, u),
          r[91](f),
          p(e, b),
          re && re.m(e, null),
          p(e, v),
          xe && xe.m(e, null),
          p(e, y),
          Ce && Ce.m(e, null),
          p(e, x),
          p(e, D),
          p(e, I),
          Ge && Ge.m(e, null),
          E(k, O, K),
          E(k, U, K),
          p(U, fe),
          p(fe, B),
          p(B, ve),
          p(U, we),
          Oe && Oe.m(U, null),
          p(U, Ne),
          Le && Le.m(U, null),
          p(U, J),
          p(U, V),
          p(V, ue),
          E(k, Ue, K),
          je && je.m(k, K),
          E(k, ze, K),
          N && N.m(k, K),
          E(k, F, K),
          R && R.m(k, K),
          E(k, _e, K),
          Y && Y.m(k, K),
          E(k, ke, K),
          ne && ne.m(k, K),
          E(k, ce, K),
          be && be.m(k, K),
          E(k, ie, K),
          (se = !0),
          Re ||
            ((A = [
              he(s, "click", r[90]),
              he(f, "click", r[92]),
              he(D, "keydown", r[40]),
              he(B, "click", r[37]),
              he(ue, "change", r[34]),
            ]),
            (Re = !0));
      },
      p(k, K) {
        k[8].show_from
          ? ae
            ? ae.p(k, K)
            : ((ae = bi(k)), ae.c(), ae.m(t, n))
          : ae && (ae.d(1), (ae = null)),
          k[8].show_to
            ? Te
              ? Te.p(k, K)
              : ((Te = wi(k)), Te.c(), Te.m(t, i))
            : Te && (Te.d(1), (Te = null)),
          (!se ||
            (K[0] & 256 &&
              o !==
                (o =
                  k[8].show_cc && !k[8].show_cc_button && !!k[8].show_to))) &&
            (s.hidden = o),
          (!se ||
            (K[0] & 256 &&
              g !==
                (g =
                  k[8].show_bcc && !k[8].show_bcc_button && !!k[8].show_to))) &&
            (f.hidden = g),
          k[8].show_cc
            ? re
              ? (re.p(k, K), K[0] & 256 && W(re, 1))
              : ((re = yi(k)), re.c(), W(re, 1), re.m(e, v))
            : re &&
              (We(),
              te(re, 1, 1, () => {
                re = null;
              }),
              Ze()),
          k[8].show_bcc
            ? xe
              ? (xe.p(k, K), K[0] & 256 && W(xe, 1))
              : ((xe = ki(k)), xe.c(), W(xe, 1), xe.m(e, y))
            : xe &&
              (We(),
              te(xe, 1, 1, () => {
                xe = null;
              }),
              Ze()),
          k[8].show_subject
            ? Ce
              ? Ce.p(k, K)
              : ((Ce = xi(k)), Ce.c(), Ce.m(e, x))
            : Ce && (Ce.d(1), (Ce = null)),
          (!se || (K[0] & 144 && H !== (H = k[7].body || k[4]))) &&
            q(D, "html", H),
          (!se || (K[0] & 256 && G !== (G = k[8].focus_body_onload))) &&
            q(D, "focus_body_onload", G),
          (!se || (K[0] & 256 && oe !== (oe = k[8].replace_fields))) &&
            q(D, "replace_fields", oe),
          (!se || (K[0] & 256 && le !== (le = k[8].show_editor_toolbar))) &&
            q(D, "show_editor_toolbar", le),
          k[26].length
            ? Ge
              ? Ge.p(k, K)
              : ((Ge = Ei(k)), Ge.c(), Ge.m(e, null))
            : Ge && (Ge.d(1), (Ge = null)),
          (!se || K[0] & 1048576) && Ae(ve, k[20]),
          (!se || (K[0] & 16777216 && me !== (me = !k[24]))) &&
            (B.disabled = me),
          k[8].show_save_as_draft
            ? Oe
              ? (Oe.p(k, K), K[0] & 256 && W(Oe, 1))
              : ((Oe = Si(k)), Oe.c(), W(Oe, 1), Oe.m(U, Ne))
            : Oe &&
              (We(),
              te(Oe, 1, 1, () => {
                Oe = null;
              }),
              Ze()),
          k[8].show_attachment_button && (k[0] || k[5])
            ? Le
              ? (Le.p(k, K), K[0] & 289 && W(Le, 1))
              : ((Le = Ti(k)), Le.c(), W(Le, 1), Le.m(U, J))
            : Le &&
              (We(),
              te(Le, 1, 1, () => {
                Le = null;
              }),
              Ze()),
          k[11]
            ? je
              ? je.p(k, K)
              : ((je = Ai(k)), je.c(), je.m(ze.parentNode, ze))
            : je && (je.d(1), (je = null)),
          k[7].send_at && !k[16] && !k[17]
            ? N
              ? N.p(k, K)
              : ((N = Oi(k)), N.c(), N.m(F.parentNode, F))
            : N && (N.d(1), (N = null)),
          k[16]
            ? R || ((R = Mi()), R.c(), R.m(_e.parentNode, _e))
            : R && (R.d(1), (R = null)),
          k[17]
            ? Y || ((Y = Ni()), Y.c(), Y.m(ke.parentNode, ke))
            : Y && (Y.d(1), (Y = null)),
          k[18]
            ? ne || ((ne = Di()), ne.c(), ne.m(ce.parentNode, ce))
            : ne && (ne.d(1), (ne = null)),
          k[19]
            ? be || ((be = zi()), be.c(), be.m(ie.parentNode, ie))
            : be && (be.d(1), (be = null));
      },
      i(k) {
        se || (W(re), W(xe), W(Oe), W(Le), (se = !0));
      },
      o(k) {
        te(re), te(xe), te(Oe), te(Le), (se = !1);
      },
      d(k) {
        k && h(e),
          ae && ae.d(),
          Te && Te.d(),
          r[89](null),
          r[91](null),
          re && re.d(),
          xe && xe.d(),
          Ce && Ce.d(),
          Ge && Ge.d(),
          k && h(O),
          k && h(U),
          Oe && Oe.d(),
          Le && Le.d(),
          k && h(Ue),
          je && je.d(k),
          k && h(ze),
          N && N.d(k),
          k && h(F),
          R && R.d(k),
          k && h(_e),
          Y && Y.d(k),
          k && h(ke),
          ne && ne.d(k),
          k && h(ce),
          be && be.d(k),
          k && h(ie),
          (Re = !1),
          et(A);
      },
    };
  }
  function bi(r) {
    let e,
      t,
      n,
      i,
      l,
      s,
      c,
      o = r[7].from.length > 0 && vi(r);
    return {
      c() {
        (e = w("div")),
          (t = w("div")),
          (n = w("div")),
          (n.textContent = "From:"),
          (i = P()),
          (l = w("div")),
          (s = w("div")),
          (c = w("span")),
          o && o.c(),
          d(n, "class", "contacts-placeholder"),
          d(c, "class", "contact-item__name"),
          d(s, "class", "contact-item"),
          d(s, "data-cy", "from-field"),
          d(l, "class", "contacts-results-inner"),
          d(t, "class", "contact-from"),
          d(e, "class", "contacts-container");
      },
      m(a, f) {
        E(a, e, f),
          p(e, t),
          p(t, n),
          p(t, i),
          p(t, l),
          p(l, s),
          p(s, c),
          o && o.m(c, null);
      },
      p(a, f) {
        a[7].from.length > 0
          ? o
            ? o.p(a, f)
            : ((o = vi(a)), o.c(), o.m(c, null))
          : o && (o.d(1), (o = null));
      },
      d(a) {
        a && h(e), o && o.d();
      },
    };
  }
  function vi(r) {
    let e;
    function t(l, s) {
      return l[7].from[0].name ? Ws : Js;
    }
    let n = t(r),
      i = n(r);
    return {
      c() {
        i.c(), (e = st());
      },
      m(l, s) {
        i.m(l, s), E(l, e, s);
      },
      p(l, s) {
        n === (n = t(l)) && i
          ? i.p(l, s)
          : (i.d(1), (i = n(l)), i && (i.c(), i.m(e.parentNode, e)));
      },
      d(l) {
        i.d(l), l && h(e);
      },
    };
  }
  function Js(r) {
    let e = r[7].from[0].email + "",
      t;
    return {
      c() {
        t = ee(e);
      },
      m(n, i) {
        E(n, t, i);
      },
      p(n, i) {
        i[0] & 128 && e !== (e = n[7].from[0].email + "") && Ae(t, e);
      },
      d(n) {
        n && h(t);
      },
    };
  }
  function Ws(r) {
    let e,
      t = r[7].from[0].name + "",
      n,
      i,
      l = `<${r[7].from[0].email}>`,
      s;
    return {
      c() {
        (e = w("strong")), (n = ee(t)), (i = P()), (s = ee(l));
      },
      m(c, o) {
        E(c, e, o), p(e, n), E(c, i, o), E(c, s, o);
      },
      p(c, o) {
        o[0] & 128 && t !== (t = c[7].from[0].name + "") && Ae(n, t),
          o[0] & 128 && l !== (l = `<${c[7].from[0].email}>`) && Ae(s, l);
      },
      d(c) {
        c && h(e), c && h(i), c && h(s);
      },
    };
  }
  function wi(r) {
    let e, t;
    return {
      c() {
        (e = w("nylas-contacts-search")),
          q(e, "data-cy", "to-field"),
          q(e, "placeholder", "To:"),
          q(e, "change", r[30]("to")),
          q(e, "contacts", r[1]),
          q(e, "value", (t = r[7].to));
      },
      m(n, i) {
        E(n, e, i);
      },
      p(n, i) {
        i[0] & 2 && q(e, "contacts", n[1]),
          i[0] & 128 && t !== (t = n[7].to) && q(e, "value", t);
      },
      d(n) {
        n && h(e);
      },
    };
  }
  function yi(r) {
    let e, t, n, i, l, s, c, o, a;
    return (
      (s = new ir({ props: { class: "CloseIcon" } })),
      {
        c() {
          (e = w("div")),
            (t = w("nylas-contacts-search")),
            (i = P()),
            (l = w("button")),
            nt(s.$$.fragment),
            q(t, "data-cy", "cc-field"),
            q(t, "placeholder", "CC:"),
            q(t, "contacts", r[2]),
            q(t, "value", (n = r[7].cc)),
            q(t, "change", r[30]("cc")),
            d(l, "type", "button"),
            d(l, "class", "composer-btn cc-btn"),
            d(l, "aria-label", "remove carbon copy field"),
            d(e, "class", "cc-container");
        },
        m(f, u) {
          E(f, e, u),
            p(e, t),
            p(e, i),
            p(e, l),
            rt(s, l, null),
            (c = !0),
            o || ((a = he(l, "click", r[93])), (o = !0));
        },
        p(f, u) {
          (!c || u[0] & 4) && q(t, "contacts", f[2]),
            (!c || (u[0] & 128 && n !== (n = f[7].cc))) && q(t, "value", n);
        },
        i(f) {
          c || (W(s.$$.fragment, f), (c = !0));
        },
        o(f) {
          te(s.$$.fragment, f), (c = !1);
        },
        d(f) {
          f && h(e), tt(s), (o = !1), a();
        },
      }
    );
  }
  function ki(r) {
    let e, t, n, i, l, s, c, o, a;
    return (
      (s = new ir({ props: { class: "CloseIcon" } })),
      {
        c() {
          (e = w("div")),
            (t = w("nylas-contacts-search")),
            (i = P()),
            (l = w("button")),
            nt(s.$$.fragment),
            q(t, "data-cy", "bcc-field"),
            q(t, "placeholder", "BCC:"),
            q(t, "contacts", r[3]),
            q(t, "value", (n = r[7].bcc)),
            q(t, "change", r[30]("bcc")),
            d(l, "type", "button"),
            d(l, "class", "composer-btn cc-btn"),
            d(l, "aria-label", "remove blind carbon copy field"),
            d(e, "class", "cc-container");
        },
        m(f, u) {
          E(f, e, u),
            p(e, t),
            p(e, i),
            p(e, l),
            rt(s, l, null),
            (c = !0),
            o || ((a = he(l, "click", r[94])), (o = !0));
        },
        p(f, u) {
          (!c || u[0] & 8) && q(t, "contacts", f[3]),
            (!c || (u[0] & 128 && n !== (n = f[7].bcc))) && q(t, "value", n);
        },
        i(f) {
          c || (W(s.$$.fragment, f), (c = !0));
        },
        o(f) {
          te(s.$$.fragment, f), (c = !1);
        },
        d(f) {
          f && h(e), tt(s), (o = !1), a();
        },
      }
    );
  }
  function xi(r) {
    let e, t, n, i, l, s;
    return {
      c() {
        (e = w("label")),
          (t = w("span")),
          (t.textContent = "Email subject"),
          (n = P()),
          (i = w("input")),
          d(t, "class", "sr-only"),
          d(i, "type", "text"),
          d(i, "placeholder", "Subject"),
          d(i, "class", "subject"),
          (i.value = r[14]),
          d(i, "name", "subject");
      },
      m(c, o) {
        E(c, e, o),
          p(e, t),
          p(e, n),
          p(e, i),
          l || ((s = he(i, "input", r[28])), (l = !0));
      },
      p(c, o) {
        o[0] & 16384 && i.value !== c[14] && (i.value = c[14]);
      },
      d(c) {
        c && h(e), (l = !1), s();
      },
    };
  }
  function Ei(r) {
    let e,
      t,
      n,
      i,
      l = r[26],
      s = [];
    for (let c = 0; c < l.length; c += 1) s[c] = Ci(fi(r, l, c));
    return {
      c() {
        (e = w("div")),
          (t = w("div")),
          (n = w("div")),
          (n.textContent = "Attachments:"),
          (i = P());
        for (let c = 0; c < s.length; c += 1) s[c].c();
        d(n, "class", "attachments-caption"),
          d(t, "class", "attachments-wrapper"),
          d(e, "class", "nylas-attachments");
      },
      m(c, o) {
        E(c, e, o), p(e, t), p(t, n), p(t, i);
        for (let a = 0; a < s.length; a += 1) s[a].m(t, null);
      },
      p(c, o) {
        if ((o[0] & 67108864) | (o[1] & 16)) {
          l = c[26];
          let a;
          for (a = 0; a < l.length; a += 1) {
            const f = fi(c, l, a);
            s[a] ? s[a].p(f, o) : ((s[a] = Ci(f)), s[a].c(), s[a].m(t, null));
          }
          for (; a < s.length; a += 1) s[a].d(1);
          s.length = l.length;
        }
      },
      d(c) {
        c && h(e), jr(s, c);
      },
    };
  }
  function Ci(r) {
    let e, t;
    return {
      c() {
        (e = w("nylas-composer-attachment")),
          q(e, "attachment", (t = r[104])),
          q(e, "remove", r[35]);
      },
      m(n, i) {
        E(n, e, i);
      },
      p(n, i) {
        i[0] & 67108864 && t !== (t = n[104]) && q(e, "attachment", t);
      },
      d(n) {
        n && h(e);
      },
    };
  }
  function Si(r) {
    let e, t, n, i, l, s, c;
    return (
      (t = new Ps({ props: { class: "FooterIcon" } })),
      {
        c() {
          (e = w("button")),
            nt(t.$$.fragment),
            (n = P()),
            (i = w("span")),
            (i.textContent = "Save Draft"),
            d(i, "class", "sr-only"),
            d(e, "for", "save-draft"),
            d(e, "class", "composer-btn save-draft"),
            d(e, "title", "Save Email As Draft");
        },
        m(o, a) {
          E(o, e, a),
            rt(t, e, null),
            p(e, n),
            p(e, i),
            (l = !0),
            s || ((c = he(e, "click", r[38])), (s = !0));
        },
        p: j,
        i(o) {
          l || (W(t.$$.fragment, o), (l = !0));
        },
        o(o) {
          te(t.$$.fragment, o), (l = !1);
        },
        d(o) {
          o && h(e), tt(t), (s = !1), c();
        },
      }
    );
  }
  function Ti(r) {
    let e, t, n, i, l, s, c, o;
    t = new Rs({ props: { class: "FooterIcon" } });
    let a = r[8].show_max_file_size && Li(r);
    return {
      c() {
        (e = w("label")),
          nt(t.$$.fragment),
          (n = P()),
          (i = w("span")),
          (i.textContent = "Attach Files"),
          (s = P()),
          a && a.c(),
          (c = st()),
          d(i, "class", "sr-only"),
          d(e, "for", "file-upload"),
          d(e, "class", "composer-btn file-upload"),
          d(e, "title", (l = "Attach Files (up to " + r[15] + "MB)")),
          d(e, "tabindex", "0");
      },
      m(f, u) {
        E(f, e, u),
          rt(t, e, null),
          p(e, n),
          p(e, i),
          E(f, s, u),
          a && a.m(f, u),
          E(f, c, u),
          (o = !0);
      },
      p(f, u) {
        (!o ||
          (u[0] & 32768 &&
            l !== (l = "Attach Files (up to " + f[15] + "MB)"))) &&
          d(e, "title", l),
          f[8].show_max_file_size
            ? a
              ? a.p(f, u)
              : ((a = Li(f)), a.c(), a.m(c.parentNode, c))
            : a && (a.d(1), (a = null));
      },
      i(f) {
        o || (W(t.$$.fragment, f), (o = !0));
      },
      o(f) {
        te(t.$$.fragment, f), (o = !1);
      },
      d(f) {
        f && h(e), tt(t), f && h(s), a && a.d(f), f && h(c);
      },
    };
  }
  function Li(r) {
    let e, t, n, i, l;
    return {
      c() {
        (e = w("div")),
          (t = w("span")),
          (n = ee("Max file size: ")),
          (i = ee(r[15])),
          (l = ee("MB")),
          d(e, "class", "file-size");
      },
      m(s, c) {
        E(s, e, c), p(e, t), p(t, n), p(t, i), p(t, l);
      },
      p(s, c) {
        c[0] & 32768 && Ae(i, s[15]);
      },
      d(s) {
        s && h(e);
      },
    };
  }
  function Ai(r) {
    let e;
    return {
      c() {
        (e = w("nylas-composer-datepicker-modal")),
          q(e, "close", r[33]),
          q(e, "schedule", r[31]);
      },
      m(t, n) {
        E(t, e, n);
      },
      p: j,
      d(t) {
        t && h(e);
      },
    };
  }
  function Oi(r) {
    let e,
      t,
      n,
      i = ci(new Date(r[25])) + "",
      l;
    return {
      c() {
        (e = w("nylas-composer-alert-bar")),
          (t = ee(`Send scheduled for
          `)),
          (n = w("span")),
          (l = ee(i)),
          q(e, "type", "info"),
          q(e, "dismissible", !0),
          q(e, "ondismiss", r[32]);
      },
      m(s, c) {
        E(s, e, c), p(e, t), p(e, n), p(n, l);
      },
      p(s, c) {
        c[0] & 33554432 && i !== (i = ci(new Date(s[25])) + "") && Ae(l, i);
      },
      d(s) {
        s && h(e);
      },
    };
  }
  function Mi(r) {
    let e;
    return {
      c() {
        (e = w("nylas-composer-alert-bar")),
          (e.textContent = "Error: Failed to send the message."),
          q(e, "type", "danger"),
          q(e, "dismissible", !0);
      },
      m(t, n) {
        E(t, e, n);
      },
      d(t) {
        t && h(e);
      },
    };
  }
  function Ni(r) {
    let e;
    return {
      c() {
        (e = w("nylas-composer-alert-bar")),
          (e.textContent = "Message sent successfully!"),
          q(e, "type", "success"),
          q(e, "dismissible", !0);
      },
      m(t, n) {
        E(t, e, n);
      },
      d(t) {
        t && h(e);
      },
    };
  }
  function Di(r) {
    let e;
    return {
      c() {
        (e = w("nylas-composer-alert-bar")),
          (e.textContent = "Error: Failed to save the draft."),
          q(e, "type", "danger"),
          q(e, "dismissible", !0);
      },
      m(t, n) {
        E(t, e, n);
      },
      d(t) {
        t && h(e);
      },
    };
  }
  function zi(r) {
    let e;
    return {
      c() {
        (e = w("nylas-composer-alert-bar")),
          (e.textContent = "Message draft saved successfully!"),
          q(e, "type", "success"),
          q(e, "dismissible", !0);
      },
      m(t, n) {
        E(t, e, n);
      },
      d(t) {
        t && h(e);
      },
    };
  }
  function Zs(r) {
    let e,
      t,
      n,
      i,
      l,
      s,
      c = r[21] && ui(r),
      o = r[13] && r[10] && di(),
      a = r[13] && r[12] && !r[10] && hi(r);
    return {
      c() {
        (e = w("nylas-error")),
          (t = P()),
          c && c.c(),
          (n = P()),
          o && o.c(),
          (i = P()),
          a && a.c(),
          (l = st()),
          (this.c = j),
          q(e, "id", r[0]);
      },
      m(f, u) {
        E(f, e, u),
          E(f, t, u),
          c && c.m(f, u),
          E(f, n, u),
          o && o.m(f, u),
          E(f, i, u),
          a && a.m(f, u),
          E(f, l, u),
          (s = !0);
      },
      p(f, u) {
        (!s || u[0] & 1) && q(e, "id", f[0]),
          f[21]
            ? c
              ? c.p(f, u)
              : ((c = ui(f)), c.c(), c.m(n.parentNode, n))
            : c && (c.d(1), (c = null)),
          f[13] && f[10]
            ? o
              ? u[0] & 9216 && W(o, 1)
              : ((o = di()), o.c(), W(o, 1), o.m(i.parentNode, i))
            : o &&
              (We(),
              te(o, 1, 1, () => {
                o = null;
              }),
              Ze()),
          f[13] && f[12] && !f[10]
            ? a
              ? (a.p(f, u), u[0] & 13312 && W(a, 1))
              : ((a = hi(f)), a.c(), W(a, 1), a.m(l.parentNode, l))
            : a &&
              (We(),
              te(a, 1, 1, () => {
                a = null;
              }),
              Ze());
      },
      i(f) {
        s || (W(o), W(a), (s = !0));
      },
      o(f) {
        te(o), te(a), (s = !1);
      },
      d(f) {
        f && h(e),
          f && h(t),
          c && c.d(f),
          f && h(n),
          o && o.d(f),
          f && h(i),
          a && a.d(f),
          f && h(l);
      },
    };
  }
  function Ys(r, e, t) {
    let n, i, l, s, c;
    pr(r, us, (_) => t(97, (l = _))), pr(r, Gr, (_) => t(84, (s = _)));
    var o =
        (this && this.__awaiter) ||
        function (_, Q, Ee, Be) {
          function Nt(ut) {
            return ut instanceof Ee
              ? ut
              : new Ee(function (Bt) {
                  Bt(ut);
                });
          }
          return new (Ee || (Ee = Promise))(function (ut, Bt) {
            function zr(bt) {
              try {
                Ut(Be.next(bt));
              } catch (Gt) {
                Bt(Gt);
              }
            }
            function Rr(bt) {
              try {
                Ut(Be.throw(bt));
              } catch (Gt) {
                Bt(Gt);
              }
            }
            function Ut(bt) {
              bt.done ? ut(bt.value) : Nt(bt.value).then(zr, Rr);
            }
            Ut((Be = Be.apply(_, Q || [])).next());
          });
        },
      a,
      f,
      u;
    const g = ds(ln());
    let { id: b } = e,
      { access_token: v = "" } = e,
      { value: y } = e,
      { to: x = [] } = e,
      { from: D = [] } = e,
      { cc: H = [] } = e,
      { bcc: G = [] } = e,
      { send: oe } = e,
      { save: le } = e,
      { change: I = null } = e,
      { beforeSend: O } = e,
      { afterSendSuccess: U = null } = e,
      { afterSendError: fe = null } = e,
      { afterSaveSuccess: B = null } = e,
      { afterSaveError: ve = null } = e,
      { template: me = "" } = e,
      { tracking: we = null } = e,
      { minimized: Ne } = e,
      { reset_after_send: J } = e,
      { reset_after_close: V } = e,
      { show_from: ue } = e,
      { show_to: Ue } = e,
      { show_header: ze } = e,
      { show_subject: F } = e,
      { show_close_button: _e } = e,
      { show_minimize_button: ke } = e,
      { show_cc: ce } = e,
      { show_bcc: ie } = e,
      { show_cc_button: se } = e,
      { show_bcc_button: Re } = e,
      { show_attachment_button: A } = e,
      { max_file_size: ae } = e,
      { show_max_file_size: Te } = e,
      { show_save_as_draft: re } = e,
      { show_editor_toolbar: xe } = e,
      { theme: Ce } = e,
      { replace_fields: Ge = null } = e,
      { beforeFileUpload: Oe = null } = e,
      { afterFileUploadSuccess: Le = null } = e,
      { afterFileUploadError: je = null } = e,
      { uploadFile: N = null } = e,
      { beforeFileRemove: R = null } = e,
      { afterFileRemove: Y = null } = e,
      { focus_body_onload: ne } = e;
    const be = {
      show_to: !0,
      show_from: !0,
      minimized: !1,
      reset_after_send: !0,
      show_header: !1,
      show_subject: !1,
      show_close_button: !0,
      show_minimize_button: !0,
      show_cc: !0,
      show_bcc: !0,
      show_cc_button: !0,
      show_bcc_button: !0,
      show_attachment_button: !0,
      max_file_size: 0,
      show_max_file_size: !0,
      show_save_as_draft: !0,
      show_editor_toolbar: !0,
      theme: "auto",
      focus_body_onload: !1,
    };
    let k = JSON.parse(JSON.stringify(Sr));
    const K = (_, Q) => {
        t(7, (k = Object.assign(Object.assign({}, k), { [_]: Q })));
      },
      ct = (_) => {
        t(7, (k = Object.assign(Object.assign({}, k), _)));
      },
      Qe = Ft(JSON.parse(JSON.stringify(li)));
    pr(r, Qe, (_) => t(26, (c = _)));
    const Lr = () => {
        t(13, (lr = !0)),
          de.reset_after_send && t(17, (pt = !1)),
          g("composerOpened", {});
      },
      Wr = () => {
        const _ = k;
        (_.active = !1),
          t(13, (lr = !1)),
          (de.reset_after_send || de.reset_after_close) &&
            (t(17, (pt = !1)), t(19, (yt = !1))),
          de.reset_after_close &&
            (t(7, (k = Object.assign(Object.assign({}, k), Sr))), Tr(Qe)),
          (_.snippet = ul(_.body)),
          Qe.update(() => []),
          g("composerClosed", { message: _ });
      };
    let or = !1,
      de = Jr({}, {}, be),
      St,
      Tt = !1,
      Zt = !1,
      lr = !0,
      Ar =
        (f = (a = de.value) === null || a === void 0 ? void 0 : a.subject) !==
          null && f !== void 0
          ? f
          : k.subject;
    to(() =>
      o(void 0, void 0, void 0, function* () {
        if (
          (t(10, (or = !0)),
          yield wr(),
          t(
            81,
            (St =
              (yield l[JSON.stringify({ component_id: b, access_token: v })]) ||
              {}),
          ),
          St && b)
        ) {
          const _ = yield Wl({ component_id: b, access_token: v }).catch(It);
          _ && K("from", [{ name: _.name, email: _.email_address }]);
        }
        t(8, (de = Jr(e, St, be))),
          we && K("tracking", we),
          t(10, (or = !1)),
          t(12, (Zt = !0));
      }),
    );
    let ft = e,
      mt;
    const _t = (_) => {
        if (!_.target) return;
        const Q = _.target;
        K(Q.name, Q.value);
      },
      Or = (_) => K("body", _),
      Yt = (_) => (Q) => K(_, Q),
      sr = (_) => {
        t(11, (Tt = !1)), K("send_at", _);
      },
      Zr = () => {
        K("send_at", null);
      },
      Yr = () => {
        t(11, (Tt = !1));
      };
    function Vr(_) {
      return o(this, void 0, void 0, function* () {
        const Q = _.target;
        if (!(Q == null ? void 0 : Q.files)) return;
        const Ee = Q.files[0];
        try {
          if (
            (si(Qe, {
              filename: Ee.name,
              size: Ee.size,
              content_type: Ee.type,
              loading: !0,
              error: !1,
            }),
            (Q.value = ""),
            Oe && Oe(Ee),
            mt > 0 && Ee.size >= mt * 1e6)
          )
            throw `Maximum file size is ${mt}MB. Please upload a different file.`;
          const Be = N ? yield N(Ee) : b && (yield Gl(b, Ee, v));
          ai(Qe, Ee.name, { loading: !1, id: Be.id }),
            Be.id &&
              ct({
                file_ids: [...k.file_ids, Be.id],
                files: [
                  ...(k.files || []),
                  Object.assign(Object.assign({}, Be), {
                    content_disposition: "attachment",
                  }),
                ],
              }),
            Le && Le(Be);
        } catch (Be) {
          ai(Qe, Ee.name, {
            loading: !1,
            error: !0,
            errorMessage: typeof Be == "string" ? Be : void 0,
          }),
            je && je(Be);
        }
      });
    }
    const Xr = (_) => {
        var Q;
        R && R(_),
          As(Qe, _),
          _.id &&
            ct({
              file_ids: k.file_ids.filter((Ee) => Ee !== _.id),
              files:
                (Q = k.files) === null || Q === void 0
                  ? void 0
                  : Q.filter((Ee) => Ee.id !== _.id),
            }),
          Y && Y(_);
      },
      Vt = (_) => {
        t(8, (de.minimized = _), de),
          t(9, (ft = de)),
          g(de.minimized ? "composerMinimized" : "composerMaximized", {});
      };
    let Je = !1,
      Lt = !1,
      pt = !1;
    const Mr = () =>
      o(void 0, void 0, void 0, function* () {
        t(82, (Je = !0)), t(16, (Lt = !1)), t(17, (pt = !1));
        let _ = k;
        if (O) {
          const Q = O(k);
          Q && (_ = Q);
        }
        if (oe)
          oe(_)
            .then((Q) => {
              U && U(Q), t(82, (Je = !1)), t(17, (pt = !0));
            })
            .catch((Q) => {
              fe && fe(Q),
                de.reset_after_send &&
                  (t(7, (k = Object.assign(Object.assign({}, k), Sr))), Tr(Qe)),
                t(82, (Je = !1)),
                t(16, (Lt = !0));
            });
        else if (b) {
          if (_.object === "draft") {
            const Q = yield Zn(b, _, v);
            Q.id &&
              (ct(Object.assign({}, Q)),
              (_ = Object.assign({ draft_id: Q.id }, Q)));
          }
          console.log(JSON.stringify(_, null, 2)),
            Ul(b, _, v)
              .then((Q) => {
                U && U(Q),
                  de.reset_after_send &&
                    (t(7, (k = Object.assign(Object.assign({}, k), Sr))),
                    Tr(Qe)),
                  t(82, (Je = !1)),
                  t(17, (pt = !0)),
                  g("messageSent", { message: Q });
              })
              .catch((Q) => {
                fe && fe(Q), t(82, (Je = !1)), t(16, (Lt = !0));
              });
        }
      });
    let gt = !1,
      ar = !1,
      yt = !1;
    const cr = () =>
      o(void 0, void 0, void 0, function* () {
        t(83, (gt = !0)), t(18, (ar = !1)), t(19, (yt = !1));
        let _ = k;
        try {
          if (le) {
            const Q = yield le(_);
            B && B(Q), t(83, (gt = !1)), t(19, (yt = !0));
          } else if (b)
            if (_.id && _.version != null) {
              const Q = yield Zn(b, _, v);
              Q.id && ct(Object.assign({}, Q)),
                B && B(Q),
                t(83, (gt = !1)),
                t(19, (yt = !0)),
                g("draftUpdated", { message: Q });
            } else {
              const Q = yield Jl(b, _, v);
              Q.id && ct(Object.assign({}, Q)),
                B && B(Q),
                t(83, (gt = !1)),
                t(19, (yt = !0)),
                g("draftSaved", { message: Q });
            }
        } catch (Q) {
          ve && ve(Q), t(83, (gt = !1)), t(18, (ar = !0));
        }
      });
    let Ie = "Send",
      Xt,
      Pe,
      Ht;
    const De = (_) =>
        o(void 0, void 0, void 0, function* () {
          yield wr(),
            _ &&
              (_.setAttribute("tabindex", "-1"),
              _.focus(),
              _.removeAttribute("tabindex"));
        }),
      jt = (_) => {
        _.key === "Enter" && _.metaKey && i && Mr();
      },
      fr = () => t(12, (Zt = !0)),
      Nr = () => t(12, (Zt = !0)),
      ur = () => Vt(!1),
      Dr = () => Vt(!0);
    function At(_) {
      Ct[_ ? "unshift" : "push"](() => {
        (Ht = _), t(23, Ht);
      });
    }
    const Ot = () => {
      t(8, (de.show_cc = !0), de), t(9, (ft = de));
    };
    function dr(_) {
      Ct[_ ? "unshift" : "push"](() => {
        (Pe = _), t(22, Pe);
      });
    }
    const hr = () => {
        t(8, (de.show_bcc = !0), de), t(9, (ft = de));
      },
      Mt = () => {
        De(Ht), t(8, (de.show_cc = !1), de), t(9, (ft = de));
      },
      Kt = () => {
        De(Pe), t(8, (de.show_bcc = !1), de), t(9, (ft = de));
      };
    return (
      (r.$$set = (_) => {
        t(103, (e = $($({}, e), pe(_)))),
          "id" in _ && t(0, (b = _.id)),
          "access_token" in _ && t(41, (v = _.access_token)),
          "value" in _ && t(42, (y = _.value)),
          "to" in _ && t(1, (x = _.to)),
          "from" in _ && t(43, (D = _.from)),
          "cc" in _ && t(2, (H = _.cc)),
          "bcc" in _ && t(3, (G = _.bcc)),
          "send" in _ && t(44, (oe = _.send)),
          "save" in _ && t(45, (le = _.save)),
          "change" in _ && t(46, (I = _.change)),
          "beforeSend" in _ && t(47, (O = _.beforeSend)),
          "afterSendSuccess" in _ && t(48, (U = _.afterSendSuccess)),
          "afterSendError" in _ && t(49, (fe = _.afterSendError)),
          "afterSaveSuccess" in _ && t(50, (B = _.afterSaveSuccess)),
          "afterSaveError" in _ && t(51, (ve = _.afterSaveError)),
          "template" in _ && t(4, (me = _.template)),
          "tracking" in _ && t(52, (we = _.tracking)),
          "minimized" in _ && t(53, (Ne = _.minimized)),
          "reset_after_send" in _ && t(54, (J = _.reset_after_send)),
          "reset_after_close" in _ && t(55, (V = _.reset_after_close)),
          "show_from" in _ && t(56, (ue = _.show_from)),
          "show_to" in _ && t(57, (Ue = _.show_to)),
          "show_header" in _ && t(58, (ze = _.show_header)),
          "show_subject" in _ && t(59, (F = _.show_subject)),
          "show_close_button" in _ && t(60, (_e = _.show_close_button)),
          "show_minimize_button" in _ && t(61, (ke = _.show_minimize_button)),
          "show_cc" in _ && t(62, (ce = _.show_cc)),
          "show_bcc" in _ && t(63, (ie = _.show_bcc)),
          "show_cc_button" in _ && t(64, (se = _.show_cc_button)),
          "show_bcc_button" in _ && t(65, (Re = _.show_bcc_button)),
          "show_attachment_button" in _ &&
            t(66, (A = _.show_attachment_button)),
          "max_file_size" in _ && t(67, (ae = _.max_file_size)),
          "show_max_file_size" in _ && t(68, (Te = _.show_max_file_size)),
          "show_save_as_draft" in _ && t(69, (re = _.show_save_as_draft)),
          "show_editor_toolbar" in _ && t(70, (xe = _.show_editor_toolbar)),
          "theme" in _ && t(71, (Ce = _.theme)),
          "replace_fields" in _ && t(72, (Ge = _.replace_fields)),
          "beforeFileUpload" in _ && t(73, (Oe = _.beforeFileUpload)),
          "afterFileUploadSuccess" in _ &&
            t(74, (Le = _.afterFileUploadSuccess)),
          "afterFileUploadError" in _ && t(75, (je = _.afterFileUploadError)),
          "uploadFile" in _ && t(5, (N = _.uploadFile)),
          "beforeFileRemove" in _ && t(76, (R = _.beforeFileRemove)),
          "afterFileRemove" in _ && t(77, (Y = _.afterFileRemove)),
          "focus_body_onload" in _ && t(78, (ne = _.focus_body_onload));
      }),
      (r.$$.update = () => {
        if (
          (r.$$.dirty[2] & 524288 && g("manifestLoaded", St),
          r.$$.dirty[2] & 4194304 && Object.keys(s).length && g("onError", s),
          r.$$.dirty[0] & 128 && t(14, (Ar = k.subject)),
          JSON.stringify(ft) !== JSON.stringify(e) &&
            (t(8, (de = Jr(e, St, be))), t(9, (ft = e))),
          (r.$$.dirty[1] & 2048) | (r.$$.dirty[2] & 262144) &&
            y &&
            (ct(y),
            (t(80, (u = y.files)) === null || u === void 0
              ? void 0
              : u.length) > 0))
        ) {
          let _ = [];
          Tr(Qe);
          for (const [Q, Ee] of y.files.entries())
            _.push(Ee.id),
              xl(Ee) &&
                si(Qe, {
                  account_id: y.account_id,
                  id: Ee.id,
                  filename: Ee.filename,
                  size: Ee.size,
                  content_type: Ee.content_type,
                });
          ct({ file_ids: _ });
        }
        r.$$.dirty[0] & 288 &&
          (N
            ? t(15, (mt = de.max_file_size))
            : t(
                15,
                (mt =
                  de.max_file_size &&
                  de.max_file_size < 4 &&
                  de.max_file_size > 0
                    ? de.max_file_size
                    : 4),
              )),
          (r.$$.dirty[0] & 128) | (r.$$.dirty[1] & 32768) && k && I && I(k),
          r.$$.dirty[0] & 128 && t(25, (n = k.send_at * 1e3)),
          r.$$.dirty[2] & 3145728 &&
            (Je
              ? t(20, (Ie = "Sending"))
              : gt
              ? t(20, (Ie = "Saving"))
              : t(20, (Ie = "Send"))),
          (r.$$.dirty[0] & 129) |
            (r.$$.dirty[1] & 8192) |
            (r.$$.dirty[2] & 3145728) &&
            t(
              24,
              (i =
                !Je &&
                !gt &&
                (b || oe) &&
                k.from.length &&
                (k.to.length || k.cc.length || k.bcc.length)),
            ),
          r.$$.dirty[0] & 256 &&
            de.theme &&
            (de.theme.startsWith(".") || de.theme.startsWith("http")
              ? t(21, (Xt = de.theme))
              : de.theme &&
                t(
                  21,
                  (Xt = `https://unpkg.com/@nylas/components-composer@${Cs.version}/themes/${de.theme}.css`),
                ));
      }),
      (e = pe(e)),
      [
        b,
        x,
        H,
        G,
        me,
        N,
        Wr,
        k,
        de,
        ft,
        or,
        Tt,
        Zt,
        lr,
        Ar,
        mt,
        Lt,
        pt,
        ar,
        yt,
        Ie,
        Xt,
        Pe,
        Ht,
        i,
        n,
        c,
        Qe,
        _t,
        Or,
        Yt,
        sr,
        Zr,
        Yr,
        Vr,
        Xr,
        Vt,
        Mr,
        cr,
        De,
        jt,
        v,
        y,
        D,
        oe,
        le,
        I,
        O,
        U,
        fe,
        B,
        ve,
        we,
        Ne,
        J,
        V,
        ue,
        Ue,
        ze,
        F,
        _e,
        ke,
        ce,
        ie,
        se,
        Re,
        A,
        ae,
        Te,
        re,
        xe,
        Ce,
        Ge,
        Oe,
        Le,
        je,
        R,
        Y,
        ne,
        Lr,
        u,
        St,
        Je,
        gt,
        s,
        fr,
        Nr,
        ur,
        Dr,
        At,
        Ot,
        dr,
        hr,
        Mt,
        Kt,
      ]
    );
  }
  class Ri extends wt {
    constructor(e) {
      super();
      (this.shadowRoot.innerHTML =
        "<style>*{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;list-style:none}.sr-only{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}.nylas-composer{--outer-padding:var(--composer-outer-width, 15px);--font-size-small:var(--composer-font-size-small, 12px);--text-light:var(--composer-text-light-color, #6e6e7a);--border:var(--composer-border-color, #f7f7f7);--border-radius:var(--composer-border-radius, 6px);--primary:var(--composer-primary-color, #5c77ff);--primary-light:var(--composer-primary-light-color, #f0f2ff);--text-secondary:var(--composer-text-secondary-color, #2247ff);width:var(--width, 100%);min-width:300px;height:var(--height, 100%);min-height:300px;background:var(--composer-background-color, white);border-radius:var(--composer-border-radius, 6px);box-shadow:var(--composer-shadow, 0 1px 10px rgba(0, 0, 0, 0.11), 0 3px 36px rgba(0, 0, 0, 0.12));font-family:var(--composer-font, sans-serif);font-size:var(--composer-font-size, 14px);position:relative;display:grid;grid-template-rows:auto 1fr auto}.nylas-composer.popup{position:fixed;bottom:10px;right:10px;z-index:var(--z-index, 1000)}.nylas-composer.minimized{height:auto;min-height:0}.nylas-composer__loader{min-height:var(--composer-editor-max-height, 480px);display:flex;align-items:center;justify-content:center;color:var(--composer-text-light-color, #6e6e7a);box-shadow:none}.nylas-composer__spinner{margin-right:10px;width:18px;animation:rotate 2s linear infinite}.nylas-composer *:focus{outline:5px auto var(--composer-primary-color, #5c77ff)}@keyframes rotate{to{transform:rotate(360deg)}}main{background:var(--bg);overflow:auto}input{font-family:var(--composer-font, sans-serif)}header{border-top-left-radius:var(--composer-border-radius, 6px);border-top-right-radius:var(--composer-border-radius, 6px);border-bottom:1px solid var(--composer-border-color, #f7f7f7);color:var(--composer-text-color, black);padding:15px var(--composer-outer-padding, 15px);display:flex;font-weight:600;align-items:center;justify-content:space-between;background:var(--composer-header-background-color, var(--composer-background-color, white))}header.minimized{border-bottom-left-radius:var(--composer-border-radius, 6px);border-bottom-right-radius:var(--composer-border-radius, 6px)}footer{padding:15px var(--composer-outer-padding, 15px);border-top:1px solid var(--composer-border-color, #f7f7f7);display:flex;align-items:center;justify-content:flex-start;background:var(--bg)}.send-btn{border:0;background:var(--composer-primary-color, #5c77ff);color:white;cursor:pointer;padding:10px 25px;font-weight:bold;border-radius:var(--composer-border-radius, 6px);font-family:var(--composer-font, sans-serif);transition:background-color 0.3s}.send-btn:disabled{opacity:0.5}.send-btn:hover{background:var(--composer-primary-dark-color, #294dff)}.send-btn.send-later{padding:10px 10px;border-radius:var(--composer-border-radius, 6px);border-top-left-radius:0;border-bottom-left-radius:0;margin-left:-4px}.subject{display:block;font-size:var(--composer-font-size, 14px);border:none;border-bottom:1px solid var(--composer-border-color, #f7f7f7);color:var(--composer-text-color, black);width:100%;background:var(--bg);font-weight:600;box-sizing:border-box;padding:15px var(--composer-outer-padding, 15px);outline:0}.subject::placeholer{font-weight:500}.contacts-wrapper{position:relative;text-decoration:none;color:var(--composer-text-color, black)}.contacts-wrapper .contacts-container{display:flex;align-items:center;flex-wrap:wrap;padding:0.4rem var(--outer-padding);border-bottom:1px solid var(--border)}.contacts-wrapper .contact-from{display:flex;align-items:center;padding-bottom:0.1rem;padding-right:0.1rem}.contacts-wrapper .contact-item{display:inline-flex;background:var(--primary-light);color:var(--primary);align-items:center;border-radius:calc(var(--border-radius) / 2);padding:0.2rem 0.8rem;margin-right:0.25rem;margin-top:2px;margin-bottom:2px}.contacts-wrapper .contact-item__name{color:var(--text-secondary);font-size:12px;padding-right:0.75rem}.contacts-wrapper .contacts-placeholder{font-size:var(--font-size-small);margin-right:10px;min-width:30px;display:flex;color:var(--text-light)}.close-btn{background:none;border:none;outline:0;cursor:pointer}.composer-btn{background:none;border:none;outline:0;width:28px;height:28px;border-radius:var(--composer-border-radius, 6px);cursor:pointer}.composer-btn:hover{background:var(--composer-background-muted-color, #f0f2ff)}.composer-btn.file-upload,.composer-btn.save-draft{margin-left:6px;width:32px;height:32px;display:flex;justify-content:center;align-items:center}.file-size{margin-left:6px;color:var(--composer-icons-color, #666774);height:32px;width:auto;display:flex;justify-content:center;align-items:center}.cc-btn{position:absolute;right:10px}.attachments-wrapper{display:flex;padding:15px var(--composer-outer-padding, 15px);flex-direction:column}.addons{font-size:var(--composer-font-size-small, 12px);letter-spacing:1.2px;font-weight:600;position:absolute;right:10px;bottom:16px;color:var(--composer-text-light-color, #6e6e7a)}.addons button{background:transparent;box-shadow:none;border:none;color:var(--composer-text-light-color, #6e6e7a);cursor:pointer;margin-right:10px;padding:5px}.cc-container{display:flex;justify-content:space-between;align-items:center;position:relative}.cc-container>nylas-contacts-search{flex:1}.attachments-caption{font-size:var(--composer-font-size-small, 12px);margin-bottom:5px;color:var(--composer-text-light-color, #6e6e7a)}@media only screen and (max-width: 600px){.nylas-composer{width:100%}.contacts-wrapper{position:initial}.addons{position:initial;float:right;padding:5px}}[class$=Icon]{fill:var(--composer-icons-color, #666774);width:10px;height:10px}[class$=FooterIcon]{width:16px;height:16px}.ExpandIcon{transform:translateY(1px)}.MinimizeIcon{transform:translateY(4px)}</style>"),
        Me(
          this,
          {
            target: this.shadowRoot,
            props: Et(this.attributes),
            customElement: !0,
          },
          Ys,
          Zs,
          _r,
          {
            id: 0,
            access_token: 41,
            value: 42,
            to: 1,
            from: 43,
            cc: 2,
            bcc: 3,
            send: 44,
            save: 45,
            change: 46,
            beforeSend: 47,
            afterSendSuccess: 48,
            afterSendError: 49,
            afterSaveSuccess: 50,
            afterSaveError: 51,
            template: 4,
            tracking: 52,
            minimized: 53,
            reset_after_send: 54,
            reset_after_close: 55,
            show_from: 56,
            show_to: 57,
            show_header: 58,
            show_subject: 59,
            show_close_button: 60,
            show_minimize_button: 61,
            show_cc: 62,
            show_bcc: 63,
            show_cc_button: 64,
            show_bcc_button: 65,
            show_attachment_button: 66,
            max_file_size: 67,
            show_max_file_size: 68,
            show_save_as_draft: 69,
            show_editor_toolbar: 70,
            theme: 71,
            replace_fields: 72,
            beforeFileUpload: 73,
            afterFileUploadSuccess: 74,
            afterFileUploadError: 75,
            uploadFile: 5,
            beforeFileRemove: 76,
            afterFileRemove: 77,
            focus_body_onload: 78,
            open: 79,
            close: 6,
          },
          null,
          [-1, -1, -1, -1],
        ),
        e &&
          (e.target && E(e.target, this, e.anchor),
          e.props && (this.$set(e.props), z()));
    }
    static get observedAttributes() {
      return [
        "id",
        "access_token",
        "value",
        "to",
        "from",
        "cc",
        "bcc",
        "send",
        "save",
        "change",
        "beforeSend",
        "afterSendSuccess",
        "afterSendError",
        "afterSaveSuccess",
        "afterSaveError",
        "template",
        "tracking",
        "minimized",
        "reset_after_send",
        "reset_after_close",
        "show_from",
        "show_to",
        "show_header",
        "show_subject",
        "show_close_button",
        "show_minimize_button",
        "show_cc",
        "show_bcc",
        "show_cc_button",
        "show_bcc_button",
        "show_attachment_button",
        "max_file_size",
        "show_max_file_size",
        "show_save_as_draft",
        "show_editor_toolbar",
        "theme",
        "replace_fields",
        "beforeFileUpload",
        "afterFileUploadSuccess",
        "afterFileUploadError",
        "uploadFile",
        "beforeFileRemove",
        "afterFileRemove",
        "focus_body_onload",
        "open",
        "close",
      ];
    }
    get id() {
      return this.$$.ctx[0];
    }
    set id(e) {
      this.$$set({ id: e }), z();
    }
    get access_token() {
      return this.$$.ctx[41];
    }
    set access_token(e) {
      this.$$set({ access_token: e }), z();
    }
    get value() {
      return this.$$.ctx[42];
    }
    set value(e) {
      this.$$set({ value: e }), z();
    }
    get to() {
      return this.$$.ctx[1];
    }
    set to(e) {
      this.$$set({ to: e }), z();
    }
    get from() {
      return this.$$.ctx[43];
    }
    set from(e) {
      this.$$set({ from: e }), z();
    }
    get cc() {
      return this.$$.ctx[2];
    }
    set cc(e) {
      this.$$set({ cc: e }), z();
    }
    get bcc() {
      return this.$$.ctx[3];
    }
    set bcc(e) {
      this.$$set({ bcc: e }), z();
    }
    get send() {
      return this.$$.ctx[44];
    }
    set send(e) {
      this.$$set({ send: e }), z();
    }
    get save() {
      return this.$$.ctx[45];
    }
    set save(e) {
      this.$$set({ save: e }), z();
    }
    get change() {
      return this.$$.ctx[46];
    }
    set change(e) {
      this.$$set({ change: e }), z();
    }
    get beforeSend() {
      return this.$$.ctx[47];
    }
    set beforeSend(e) {
      this.$$set({ beforeSend: e }), z();
    }
    get afterSendSuccess() {
      return this.$$.ctx[48];
    }
    set afterSendSuccess(e) {
      this.$$set({ afterSendSuccess: e }), z();
    }
    get afterSendError() {
      return this.$$.ctx[49];
    }
    set afterSendError(e) {
      this.$$set({ afterSendError: e }), z();
    }
    get afterSaveSuccess() {
      return this.$$.ctx[50];
    }
    set afterSaveSuccess(e) {
      this.$$set({ afterSaveSuccess: e }), z();
    }
    get afterSaveError() {
      return this.$$.ctx[51];
    }
    set afterSaveError(e) {
      this.$$set({ afterSaveError: e }), z();
    }
    get template() {
      return this.$$.ctx[4];
    }
    set template(e) {
      this.$$set({ template: e }), z();
    }
    get tracking() {
      return this.$$.ctx[52];
    }
    set tracking(e) {
      this.$$set({ tracking: e }), z();
    }
    get minimized() {
      return this.$$.ctx[53];
    }
    set minimized(e) {
      this.$$set({ minimized: e }), z();
    }
    get reset_after_send() {
      return this.$$.ctx[54];
    }
    set reset_after_send(e) {
      this.$$set({ reset_after_send: e }), z();
    }
    get reset_after_close() {
      return this.$$.ctx[55];
    }
    set reset_after_close(e) {
      this.$$set({ reset_after_close: e }), z();
    }
    get show_from() {
      return this.$$.ctx[56];
    }
    set show_from(e) {
      this.$$set({ show_from: e }), z();
    }
    get show_to() {
      return this.$$.ctx[57];
    }
    set show_to(e) {
      this.$$set({ show_to: e }), z();
    }
    get show_header() {
      return this.$$.ctx[58];
    }
    set show_header(e) {
      this.$$set({ show_header: e }), z();
    }
    get show_subject() {
      return this.$$.ctx[59];
    }
    set show_subject(e) {
      this.$$set({ show_subject: e }), z();
    }
    get show_close_button() {
      return this.$$.ctx[60];
    }
    set show_close_button(e) {
      this.$$set({ show_close_button: e }), z();
    }
    get show_minimize_button() {
      return this.$$.ctx[61];
    }
    set show_minimize_button(e) {
      this.$$set({ show_minimize_button: e }), z();
    }
    get show_cc() {
      return this.$$.ctx[62];
    }
    set show_cc(e) {
      this.$$set({ show_cc: e }), z();
    }
    get show_bcc() {
      return this.$$.ctx[63];
    }
    set show_bcc(e) {
      this.$$set({ show_bcc: e }), z();
    }
    get show_cc_button() {
      return this.$$.ctx[64];
    }
    set show_cc_button(e) {
      this.$$set({ show_cc_button: e }), z();
    }
    get show_bcc_button() {
      return this.$$.ctx[65];
    }
    set show_bcc_button(e) {
      this.$$set({ show_bcc_button: e }), z();
    }
    get show_attachment_button() {
      return this.$$.ctx[66];
    }
    set show_attachment_button(e) {
      this.$$set({ show_attachment_button: e }), z();
    }
    get max_file_size() {
      return this.$$.ctx[67];
    }
    set max_file_size(e) {
      this.$$set({ max_file_size: e }), z();
    }
    get show_max_file_size() {
      return this.$$.ctx[68];
    }
    set show_max_file_size(e) {
      this.$$set({ show_max_file_size: e }), z();
    }
    get show_save_as_draft() {
      return this.$$.ctx[69];
    }
    set show_save_as_draft(e) {
      this.$$set({ show_save_as_draft: e }), z();
    }
    get show_editor_toolbar() {
      return this.$$.ctx[70];
    }
    set show_editor_toolbar(e) {
      this.$$set({ show_editor_toolbar: e }), z();
    }
    get theme() {
      return this.$$.ctx[71];
    }
    set theme(e) {
      this.$$set({ theme: e }), z();
    }
    get replace_fields() {
      return this.$$.ctx[72];
    }
    set replace_fields(e) {
      this.$$set({ replace_fields: e }), z();
    }
    get beforeFileUpload() {
      return this.$$.ctx[73];
    }
    set beforeFileUpload(e) {
      this.$$set({ beforeFileUpload: e }), z();
    }
    get afterFileUploadSuccess() {
      return this.$$.ctx[74];
    }
    set afterFileUploadSuccess(e) {
      this.$$set({ afterFileUploadSuccess: e }), z();
    }
    get afterFileUploadError() {
      return this.$$.ctx[75];
    }
    set afterFileUploadError(e) {
      this.$$set({ afterFileUploadError: e }), z();
    }
    get uploadFile() {
      return this.$$.ctx[5];
    }
    set uploadFile(e) {
      this.$$set({ uploadFile: e }), z();
    }
    get beforeFileRemove() {
      return this.$$.ctx[76];
    }
    set beforeFileRemove(e) {
      this.$$set({ beforeFileRemove: e }), z();
    }
    get afterFileRemove() {
      return this.$$.ctx[77];
    }
    set afterFileRemove(e) {
      this.$$set({ afterFileRemove: e }), z();
    }
    get focus_body_onload() {
      return this.$$.ctx[78];
    }
    set focus_body_onload(e) {
      this.$$set({ focus_body_onload: e }), z();
    }
    get open() {
      return this.$$.ctx[79];
    }
    get close() {
      return this.$$.ctx[6];
    }
  }
  return customElements.define("nylas-composer", Ri), Ri;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbW1vbnMvc3JjL2RlZmluZS1jb21wb25lbnQtcGF0Y2gudHMiLCIuLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL2ludGVybmFsL2luZGV4Lm1qcyIsInNyYy9hc3NldHMvYm9sZC5zdmciLCJzcmMvYXNzZXRzL2l0YWxpYy5zdmciLCJzcmMvYXNzZXRzL3VuZGVybGluZS5zdmciLCJzcmMvYXNzZXRzL2xpc3Quc3ZnIiwic3JjL2Fzc2V0cy9idWxsZXQuc3ZnIiwic3JjL2Fzc2V0cy9hbGlnbmVkLWxlZnQuc3ZnIiwic3JjL2Fzc2V0cy9hbGlnbmVkLXJpZ2h0LnN2ZyIsInNyYy9hc3NldHMvY2VudGVyZWQuc3ZnIiwic3JjL2Fzc2V0cy9qdXN0aWZpZWQuc3ZnIiwic3JjL2Fzc2V0cy9saW5rLnN2ZyIsInNyYy9saWIvaHRtbC1lZGl0b3IudHMiLCJzcmMvY29tcG9uZW50cy9IVE1MRWRpdG9yLnN2ZWx0ZSIsInNyYy9jb21wb25lbnRzL0FsZXJ0QmFyLnN2ZWx0ZSIsInNyYy9hc3NldHMvY2xvc2Uuc3ZnIiwic3JjL2Fzc2V0cy9sb2FkaW5nLnN2ZyIsInNyYy9jb21wb25lbnRzL0F0dGFjaG1lbnQuc3ZlbHRlIiwiLi4vZGF0ZXBpY2tlci9zcmMvRGF0ZXBpY2tlci5zdmVsdGUiLCJzcmMvY29tcG9uZW50cy9EYXRlcGlja2VyTW9kYWwuc3ZlbHRlIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2RvbXB1cmlmeS9kaXN0L3B1cmlmeS5qcyIsInNyYy9saWIvdXRpbHMudHMiLCIuLi8uLi9jb21tb25zL3NyYy9tZXRob2RzL3BhcnRpY2lwYW50cy50cyIsInNyYy9jb21wb25lbnRzL0NvbnRhY3RzU2VhcmNoLnN2ZWx0ZSIsIi4uLy4uL2NvbW1vbnMvc3JjL2NvbnN0YW50cy9hdHRhY2htZW50LWNvbnRlbnQtdHlwZXMudHMiLCIuLi8uLi9jb21tb25zL3NyYy9tZXRob2RzL2lzRmlsZUFuQXR0YWNobWVudC50cyIsIi4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvc3RvcmUvaW5kZXgubWpzIiwiLi4vLi4vY29tbW9ucy9zcmMvc3RvcmUvZXJyb3IudHMiLCIuLi8uLi9jb21tb25zL3NyYy9tZXRob2RzL2FwaS50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL2Nvbm5lY3Rpb25zL3RocmVhZHMudHMiLCIuLi8uLi9jb21tb25zL3NyYy9jb25uZWN0aW9ucy9tYW5pZmVzdC50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL2Nvbm5lY3Rpb25zL21lc3NhZ2VzLnRzIiwiLi4vLi4vY29tbW9ucy9zcmMvY29ubmVjdGlvbnMvYWNjb3VudHMudHMiLCIuLi8uLi9jb21tb25zL3NyYy9jb25uZWN0aW9ucy9hdmFpbGFiaWxpdHkudHMiLCIuLi8uLi9jb21tb25zL3NyYy9zdG9yZS9hdmFpbGFiaWxpdHkudHMiLCIuLi8uLi9jb21tb25zL3NyYy9zdG9yZS9jb25zZWN1dGl2ZS1hdmFpbGFiaWxpdHkudHMiLCIuLi8uLi9jb21tb25zL3NyYy9zdG9yZS9tYWlsYm94LnRzIiwiLi4vLi4vY29tbW9ucy9zcmMvc3RvcmUvbWFuaWZlc3QudHMiLCIuLi8uLi9jb21tb25zL3NyYy9tZXRob2RzL2NvbXBvbmVudC50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL2NvbXBvbmVudHMvTkVycm9yLnN2ZWx0ZSIsInNyYy9saWIvc3RvcmUudHMiLCJzcmMvbGliL2Zvcm1hdC1kYXRlLnRzIiwic3JjL2Fzc2V0cy9kYXNoLnN2ZyIsInNyYy9hc3NldHMvYXR0YWNobWVudC5zdmciLCJzcmMvYXNzZXRzL2RyYWZ0cy5zdmciLCJzcmMvYXNzZXRzL2V4cGFuZC5zdmciLCJzcmMvQ29tcG9zZXIuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBvcmlnaW5hbERlZmluZSA9IHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUuYmluZChcbiAgd2luZG93LmN1c3RvbUVsZW1lbnRzLFxuKTtcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUgPSAobmFtZTogc3RyaW5nLCAuLi5hcmdzKSA9PiB7XG4gIGlmIChjdXN0b21FbGVtZW50cy5nZXQobmFtZSkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcmV0dXJuIG9yaWdpbmFsRGVmaW5lKG5hbWUsIC4uLmFyZ3MpO1xufTtcbiIsImZ1bmN0aW9uIG5vb3AoKSB7IH1cbmNvbnN0IGlkZW50aXR5ID0geCA9PiB4O1xuZnVuY3Rpb24gYXNzaWduKHRhciwgc3JjKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGZvciAoY29uc3QgayBpbiBzcmMpXG4gICAgICAgIHRhcltrXSA9IHNyY1trXTtcbiAgICByZXR1cm4gdGFyO1xufVxuZnVuY3Rpb24gaXNfcHJvbWlzZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gYWRkX2xvY2F0aW9uKGVsZW1lbnQsIGZpbGUsIGxpbmUsIGNvbHVtbiwgY2hhcikge1xuICAgIGVsZW1lbnQuX19zdmVsdGVfbWV0YSA9IHtcbiAgICAgICAgbG9jOiB7IGZpbGUsIGxpbmUsIGNvbHVtbiwgY2hhciB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJ1bihmbikge1xuICAgIHJldHVybiBmbigpO1xufVxuZnVuY3Rpb24gYmxhbmtfb2JqZWN0KCkge1xuICAgIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwpO1xufVxuZnVuY3Rpb24gcnVuX2FsbChmbnMpIHtcbiAgICBmbnMuZm9yRWFjaChydW4pO1xufVxuZnVuY3Rpb24gaXNfZnVuY3Rpb24odGhpbmcpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gc2FmZV9ub3RfZXF1YWwoYSwgYikge1xuICAgIHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiIHx8ICgoYSAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHx8IHR5cGVvZiBhID09PSAnZnVuY3Rpb24nKTtcbn1cbmxldCBzcmNfdXJsX2VxdWFsX2FuY2hvcjtcbmZ1bmN0aW9uIHNyY191cmxfZXF1YWwoZWxlbWVudF9zcmMsIHVybCkge1xuICAgIGlmICghc3JjX3VybF9lcXVhbF9hbmNob3IpIHtcbiAgICAgICAgc3JjX3VybF9lcXVhbF9hbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgfVxuICAgIHNyY191cmxfZXF1YWxfYW5jaG9yLmhyZWYgPSB1cmw7XG4gICAgcmV0dXJuIGVsZW1lbnRfc3JjID09PSBzcmNfdXJsX2VxdWFsX2FuY2hvci5ocmVmO1xufVxuZnVuY3Rpb24gbm90X2VxdWFsKGEsIGIpIHtcbiAgICByZXR1cm4gYSAhPSBhID8gYiA9PSBiIDogYSAhPT0gYjtcbn1cbmZ1bmN0aW9uIGlzX2VtcHR5KG9iaikge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX3N0b3JlKHN0b3JlLCBuYW1lKSB7XG4gICAgaWYgKHN0b3JlICE9IG51bGwgJiYgdHlwZW9mIHN0b3JlLnN1YnNjcmliZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCcke25hbWV9JyBpcyBub3QgYSBzdG9yZSB3aXRoIGEgJ3N1YnNjcmliZScgbWV0aG9kYCk7XG4gICAgfVxufVxuZnVuY3Rpb24gc3Vic2NyaWJlKHN0b3JlLCAuLi5jYWxsYmFja3MpIHtcbiAgICBpZiAoc3RvcmUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbm9vcDtcbiAgICB9XG4gICAgY29uc3QgdW5zdWIgPSBzdG9yZS5zdWJzY3JpYmUoLi4uY2FsbGJhY2tzKTtcbiAgICByZXR1cm4gdW5zdWIudW5zdWJzY3JpYmUgPyAoKSA9PiB1bnN1Yi51bnN1YnNjcmliZSgpIDogdW5zdWI7XG59XG5mdW5jdGlvbiBnZXRfc3RvcmVfdmFsdWUoc3RvcmUpIHtcbiAgICBsZXQgdmFsdWU7XG4gICAgc3Vic2NyaWJlKHN0b3JlLCBfID0+IHZhbHVlID0gXykoKTtcbiAgICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBjb21wb25lbnRfc3Vic2NyaWJlKGNvbXBvbmVudCwgc3RvcmUsIGNhbGxiYWNrKSB7XG4gICAgY29tcG9uZW50LiQkLm9uX2Rlc3Ryb3kucHVzaChzdWJzY3JpYmUoc3RvcmUsIGNhbGxiYWNrKSk7XG59XG5mdW5jdGlvbiBjcmVhdGVfc2xvdChkZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGZuKSB7XG4gICAgaWYgKGRlZmluaXRpb24pIHtcbiAgICAgICAgY29uc3Qgc2xvdF9jdHggPSBnZXRfc2xvdF9jb250ZXh0KGRlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZm4pO1xuICAgICAgICByZXR1cm4gZGVmaW5pdGlvblswXShzbG90X2N0eCk7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0X3Nsb3RfY29udGV4dChkZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGZuKSB7XG4gICAgcmV0dXJuIGRlZmluaXRpb25bMV0gJiYgZm5cbiAgICAgICAgPyBhc3NpZ24oJCRzY29wZS5jdHguc2xpY2UoKSwgZGVmaW5pdGlvblsxXShmbihjdHgpKSlcbiAgICAgICAgOiAkJHNjb3BlLmN0eDtcbn1cbmZ1bmN0aW9uIGdldF9zbG90X2NoYW5nZXMoZGVmaW5pdGlvbiwgJCRzY29wZSwgZGlydHksIGZuKSB7XG4gICAgaWYgKGRlZmluaXRpb25bMl0gJiYgZm4pIHtcbiAgICAgICAgY29uc3QgbGV0cyA9IGRlZmluaXRpb25bMl0oZm4oZGlydHkpKTtcbiAgICAgICAgaWYgKCQkc2NvcGUuZGlydHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGxldHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBsZXRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY29uc3QgbWVyZ2VkID0gW107XG4gICAgICAgICAgICBjb25zdCBsZW4gPSBNYXRoLm1heCgkJHNjb3BlLmRpcnR5Lmxlbmd0aCwgbGV0cy5sZW5ndGgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIG1lcmdlZFtpXSA9ICQkc2NvcGUuZGlydHlbaV0gfCBsZXRzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1lcmdlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJCRzY29wZS5kaXJ0eSB8IGxldHM7XG4gICAgfVxuICAgIHJldHVybiAkJHNjb3BlLmRpcnR5O1xufVxuZnVuY3Rpb24gdXBkYXRlX3Nsb3RfYmFzZShzbG90LCBzbG90X2RlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgc2xvdF9jaGFuZ2VzLCBnZXRfc2xvdF9jb250ZXh0X2ZuKSB7XG4gICAgaWYgKHNsb3RfY2hhbmdlcykge1xuICAgICAgICBjb25zdCBzbG90X2NvbnRleHQgPSBnZXRfc2xvdF9jb250ZXh0KHNsb3RfZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBnZXRfc2xvdF9jb250ZXh0X2ZuKTtcbiAgICAgICAgc2xvdC5wKHNsb3RfY29udGV4dCwgc2xvdF9jaGFuZ2VzKTtcbiAgICB9XG59XG5mdW5jdGlvbiB1cGRhdGVfc2xvdChzbG90LCBzbG90X2RlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZGlydHksIGdldF9zbG90X2NoYW5nZXNfZm4sIGdldF9zbG90X2NvbnRleHRfZm4pIHtcbiAgICBjb25zdCBzbG90X2NoYW5nZXMgPSBnZXRfc2xvdF9jaGFuZ2VzKHNsb3RfZGVmaW5pdGlvbiwgJCRzY29wZSwgZGlydHksIGdldF9zbG90X2NoYW5nZXNfZm4pO1xuICAgIHVwZGF0ZV9zbG90X2Jhc2Uoc2xvdCwgc2xvdF9kZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIHNsb3RfY2hhbmdlcywgZ2V0X3Nsb3RfY29udGV4dF9mbik7XG59XG5mdW5jdGlvbiBnZXRfYWxsX2RpcnR5X2Zyb21fc2NvcGUoJCRzY29wZSkge1xuICAgIGlmICgkJHNjb3BlLmN0eC5sZW5ndGggPiAzMikge1xuICAgICAgICBjb25zdCBkaXJ0eSA9IFtdO1xuICAgICAgICBjb25zdCBsZW5ndGggPSAkJHNjb3BlLmN0eC5sZW5ndGggLyAzMjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGlydHlbaV0gPSAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGlydHk7XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cbmZ1bmN0aW9uIGV4Y2x1ZGVfaW50ZXJuYWxfcHJvcHMocHJvcHMpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGsgaW4gcHJvcHMpXG4gICAgICAgIGlmIChrWzBdICE9PSAnJCcpXG4gICAgICAgICAgICByZXN1bHRba10gPSBwcm9wc1trXTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gY29tcHV0ZV9yZXN0X3Byb3BzKHByb3BzLCBrZXlzKSB7XG4gICAgY29uc3QgcmVzdCA9IHt9O1xuICAgIGtleXMgPSBuZXcgU2V0KGtleXMpO1xuICAgIGZvciAoY29uc3QgayBpbiBwcm9wcylcbiAgICAgICAgaWYgKCFrZXlzLmhhcyhrKSAmJiBrWzBdICE9PSAnJCcpXG4gICAgICAgICAgICByZXN0W2tdID0gcHJvcHNba107XG4gICAgcmV0dXJuIHJlc3Q7XG59XG5mdW5jdGlvbiBjb21wdXRlX3Nsb3RzKHNsb3RzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc2xvdHMpIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gb25jZShmbikge1xuICAgIGxldCByYW4gPSBmYWxzZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKHJhbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgcmFuID0gdHJ1ZTtcbiAgICAgICAgZm4uY2FsbCh0aGlzLCAuLi5hcmdzKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gbnVsbF90b19lbXB0eSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHNldF9zdG9yZV92YWx1ZShzdG9yZSwgcmV0LCB2YWx1ZSkge1xuICAgIHN0b3JlLnNldCh2YWx1ZSk7XG4gICAgcmV0dXJuIHJldDtcbn1cbmNvbnN0IGhhc19wcm9wID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG5mdW5jdGlvbiBhY3Rpb25fZGVzdHJveWVyKGFjdGlvbl9yZXN1bHQpIHtcbiAgICByZXR1cm4gYWN0aW9uX3Jlc3VsdCAmJiBpc19mdW5jdGlvbihhY3Rpb25fcmVzdWx0LmRlc3Ryb3kpID8gYWN0aW9uX3Jlc3VsdC5kZXN0cm95IDogbm9vcDtcbn1cblxuY29uc3QgaXNfY2xpZW50ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5sZXQgbm93ID0gaXNfY2xpZW50XG4gICAgPyAoKSA9PiB3aW5kb3cucGVyZm9ybWFuY2Uubm93KClcbiAgICA6ICgpID0+IERhdGUubm93KCk7XG5sZXQgcmFmID0gaXNfY2xpZW50ID8gY2IgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNiKSA6IG5vb3A7XG4vLyB1c2VkIGludGVybmFsbHkgZm9yIHRlc3RpbmdcbmZ1bmN0aW9uIHNldF9ub3coZm4pIHtcbiAgICBub3cgPSBmbjtcbn1cbmZ1bmN0aW9uIHNldF9yYWYoZm4pIHtcbiAgICByYWYgPSBmbjtcbn1cblxuY29uc3QgdGFza3MgPSBuZXcgU2V0KCk7XG5mdW5jdGlvbiBydW5fdGFza3Mobm93KSB7XG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgaWYgKCF0YXNrLmMobm93KSkge1xuICAgICAgICAgICAgdGFza3MuZGVsZXRlKHRhc2spO1xuICAgICAgICAgICAgdGFzay5mKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodGFza3Muc2l6ZSAhPT0gMClcbiAgICAgICAgcmFmKHJ1bl90YXNrcyk7XG59XG4vKipcbiAqIEZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkhXG4gKi9cbmZ1bmN0aW9uIGNsZWFyX2xvb3BzKCkge1xuICAgIHRhc2tzLmNsZWFyKCk7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgdGFzayB0aGF0IHJ1bnMgb24gZWFjaCByYWYgZnJhbWVcbiAqIHVudGlsIGl0IHJldHVybnMgYSBmYWxzeSB2YWx1ZSBvciBpcyBhYm9ydGVkXG4gKi9cbmZ1bmN0aW9uIGxvb3AoY2FsbGJhY2spIHtcbiAgICBsZXQgdGFzaztcbiAgICBpZiAodGFza3Muc2l6ZSA9PT0gMClcbiAgICAgICAgcmFmKHJ1bl90YXNrcyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvbWlzZTogbmV3IFByb21pc2UoZnVsZmlsbCA9PiB7XG4gICAgICAgICAgICB0YXNrcy5hZGQodGFzayA9IHsgYzogY2FsbGJhY2ssIGY6IGZ1bGZpbGwgfSk7XG4gICAgICAgIH0pLFxuICAgICAgICBhYm9ydCgpIHtcbiAgICAgICAgICAgIHRhc2tzLmRlbGV0ZSh0YXNrKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIFRyYWNrIHdoaWNoIG5vZGVzIGFyZSBjbGFpbWVkIGR1cmluZyBoeWRyYXRpb24uIFVuY2xhaW1lZCBub2RlcyBjYW4gdGhlbiBiZSByZW1vdmVkIGZyb20gdGhlIERPTVxuLy8gYXQgdGhlIGVuZCBvZiBoeWRyYXRpb24gd2l0aG91dCB0b3VjaGluZyB0aGUgcmVtYWluaW5nIG5vZGVzLlxubGV0IGlzX2h5ZHJhdGluZyA9IGZhbHNlO1xuZnVuY3Rpb24gc3RhcnRfaHlkcmF0aW5nKCkge1xuICAgIGlzX2h5ZHJhdGluZyA9IHRydWU7XG59XG5mdW5jdGlvbiBlbmRfaHlkcmF0aW5nKCkge1xuICAgIGlzX2h5ZHJhdGluZyA9IGZhbHNlO1xufVxuZnVuY3Rpb24gdXBwZXJfYm91bmQobG93LCBoaWdoLCBrZXksIHZhbHVlKSB7XG4gICAgLy8gUmV0dXJuIGZpcnN0IGluZGV4IG9mIHZhbHVlIGxhcmdlciB0aGFuIGlucHV0IHZhbHVlIGluIHRoZSByYW5nZSBbbG93LCBoaWdoKVxuICAgIHdoaWxlIChsb3cgPCBoaWdoKSB7XG4gICAgICAgIGNvbnN0IG1pZCA9IGxvdyArICgoaGlnaCAtIGxvdykgPj4gMSk7XG4gICAgICAgIGlmIChrZXkobWlkKSA8PSB2YWx1ZSkge1xuICAgICAgICAgICAgbG93ID0gbWlkICsgMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGhpZ2ggPSBtaWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxvdztcbn1cbmZ1bmN0aW9uIGluaXRfaHlkcmF0ZSh0YXJnZXQpIHtcbiAgICBpZiAodGFyZ2V0Lmh5ZHJhdGVfaW5pdClcbiAgICAgICAgcmV0dXJuO1xuICAgIHRhcmdldC5oeWRyYXRlX2luaXQgPSB0cnVlO1xuICAgIC8vIFdlIGtub3cgdGhhdCBhbGwgY2hpbGRyZW4gaGF2ZSBjbGFpbV9vcmRlciB2YWx1ZXMgc2luY2UgdGhlIHVuY2xhaW1lZCBoYXZlIGJlZW4gZGV0YWNoZWQgaWYgdGFyZ2V0IGlzIG5vdCA8aGVhZD5cbiAgICBsZXQgY2hpbGRyZW4gPSB0YXJnZXQuY2hpbGROb2RlcztcbiAgICAvLyBJZiB0YXJnZXQgaXMgPGhlYWQ+LCB0aGVyZSBtYXkgYmUgY2hpbGRyZW4gd2l0aG91dCBjbGFpbV9vcmRlclxuICAgIGlmICh0YXJnZXQubm9kZU5hbWUgPT09ICdIRUFEJykge1xuICAgICAgICBjb25zdCBteUNoaWxkcmVuID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmIChub2RlLmNsYWltX29yZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBteUNoaWxkcmVuLnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGRyZW4gPSBteUNoaWxkcmVuO1xuICAgIH1cbiAgICAvKlxuICAgICogUmVvcmRlciBjbGFpbWVkIGNoaWxkcmVuIG9wdGltYWxseS5cbiAgICAqIFdlIGNhbiByZW9yZGVyIGNsYWltZWQgY2hpbGRyZW4gb3B0aW1hbGx5IGJ5IGZpbmRpbmcgdGhlIGxvbmdlc3Qgc3Vic2VxdWVuY2Ugb2ZcbiAgICAqIG5vZGVzIHRoYXQgYXJlIGFscmVhZHkgY2xhaW1lZCBpbiBvcmRlciBhbmQgb25seSBtb3ZpbmcgdGhlIHJlc3QuIFRoZSBsb25nZXN0XG4gICAgKiBzdWJzZXF1ZW5jZSBzdWJzZXF1ZW5jZSBvZiBub2RlcyB0aGF0IGFyZSBjbGFpbWVkIGluIG9yZGVyIGNhbiBiZSBmb3VuZCBieVxuICAgICogY29tcHV0aW5nIHRoZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2Ugb2YgLmNsYWltX29yZGVyIHZhbHVlcy5cbiAgICAqXG4gICAgKiBUaGlzIGFsZ29yaXRobSBpcyBvcHRpbWFsIGluIGdlbmVyYXRpbmcgdGhlIGxlYXN0IGFtb3VudCBvZiByZW9yZGVyIG9wZXJhdGlvbnNcbiAgICAqIHBvc3NpYmxlLlxuICAgICpcbiAgICAqIFByb29mOlxuICAgICogV2Uga25vdyB0aGF0LCBnaXZlbiBhIHNldCBvZiByZW9yZGVyaW5nIG9wZXJhdGlvbnMsIHRoZSBub2RlcyB0aGF0IGRvIG5vdCBtb3ZlXG4gICAgKiBhbHdheXMgZm9ybSBhbiBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlLCBzaW5jZSB0aGV5IGRvIG5vdCBtb3ZlIGFtb25nIGVhY2ggb3RoZXJcbiAgICAqIG1lYW5pbmcgdGhhdCB0aGV5IG11c3QgYmUgYWxyZWFkeSBvcmRlcmVkIGFtb25nIGVhY2ggb3RoZXIuIFRodXMsIHRoZSBtYXhpbWFsXG4gICAgKiBzZXQgb2Ygbm9kZXMgdGhhdCBkbyBub3QgbW92ZSBmb3JtIGEgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlLlxuICAgICovXG4gICAgLy8gQ29tcHV0ZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2VcbiAgICAvLyBtOiBzdWJzZXF1ZW5jZSBsZW5ndGggaiA9PiBpbmRleCBrIG9mIHNtYWxsZXN0IHZhbHVlIHRoYXQgZW5kcyBhbiBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIG9mIGxlbmd0aCBqXG4gICAgY29uc3QgbSA9IG5ldyBJbnQzMkFycmF5KGNoaWxkcmVuLmxlbmd0aCArIDEpO1xuICAgIC8vIFByZWRlY2Vzc29yIGluZGljZXMgKyAxXG4gICAgY29uc3QgcCA9IG5ldyBJbnQzMkFycmF5KGNoaWxkcmVuLmxlbmd0aCk7XG4gICAgbVswXSA9IC0xO1xuICAgIGxldCBsb25nZXN0ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBjaGlsZHJlbltpXS5jbGFpbV9vcmRlcjtcbiAgICAgICAgLy8gRmluZCB0aGUgbGFyZ2VzdCBzdWJzZXF1ZW5jZSBsZW5ndGggc3VjaCB0aGF0IGl0IGVuZHMgaW4gYSB2YWx1ZSBsZXNzIHRoYW4gb3VyIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgLy8gdXBwZXJfYm91bmQgcmV0dXJucyBmaXJzdCBncmVhdGVyIHZhbHVlLCBzbyB3ZSBzdWJ0cmFjdCBvbmVcbiAgICAgICAgLy8gd2l0aCBmYXN0IHBhdGggZm9yIHdoZW4gd2UgYXJlIG9uIHRoZSBjdXJyZW50IGxvbmdlc3Qgc3Vic2VxdWVuY2VcbiAgICAgICAgY29uc3Qgc2VxTGVuID0gKChsb25nZXN0ID4gMCAmJiBjaGlsZHJlblttW2xvbmdlc3RdXS5jbGFpbV9vcmRlciA8PSBjdXJyZW50KSA/IGxvbmdlc3QgKyAxIDogdXBwZXJfYm91bmQoMSwgbG9uZ2VzdCwgaWR4ID0+IGNoaWxkcmVuW21baWR4XV0uY2xhaW1fb3JkZXIsIGN1cnJlbnQpKSAtIDE7XG4gICAgICAgIHBbaV0gPSBtW3NlcUxlbl0gKyAxO1xuICAgICAgICBjb25zdCBuZXdMZW4gPSBzZXFMZW4gKyAxO1xuICAgICAgICAvLyBXZSBjYW4gZ3VhcmFudGVlIHRoYXQgY3VycmVudCBpcyB0aGUgc21hbGxlc3QgdmFsdWUuIE90aGVyd2lzZSwgd2Ugd291bGQgaGF2ZSBnZW5lcmF0ZWQgYSBsb25nZXIgc2VxdWVuY2UuXG4gICAgICAgIG1bbmV3TGVuXSA9IGk7XG4gICAgICAgIGxvbmdlc3QgPSBNYXRoLm1heChuZXdMZW4sIGxvbmdlc3QpO1xuICAgIH1cbiAgICAvLyBUaGUgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIG9mIG5vZGVzIChpbml0aWFsbHkgcmV2ZXJzZWQpXG4gICAgY29uc3QgbGlzID0gW107XG4gICAgLy8gVGhlIHJlc3Qgb2YgdGhlIG5vZGVzLCBub2RlcyB0aGF0IHdpbGwgYmUgbW92ZWRcbiAgICBjb25zdCB0b01vdmUgPSBbXTtcbiAgICBsZXQgbGFzdCA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7XG4gICAgZm9yIChsZXQgY3VyID0gbVtsb25nZXN0XSArIDE7IGN1ciAhPSAwOyBjdXIgPSBwW2N1ciAtIDFdKSB7XG4gICAgICAgIGxpcy5wdXNoKGNoaWxkcmVuW2N1ciAtIDFdKTtcbiAgICAgICAgZm9yICg7IGxhc3QgPj0gY3VyOyBsYXN0LS0pIHtcbiAgICAgICAgICAgIHRvTW92ZS5wdXNoKGNoaWxkcmVuW2xhc3RdKTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0LS07XG4gICAgfVxuICAgIGZvciAoOyBsYXN0ID49IDA7IGxhc3QtLSkge1xuICAgICAgICB0b01vdmUucHVzaChjaGlsZHJlbltsYXN0XSk7XG4gICAgfVxuICAgIGxpcy5yZXZlcnNlKCk7XG4gICAgLy8gV2Ugc29ydCB0aGUgbm9kZXMgYmVpbmcgbW92ZWQgdG8gZ3VhcmFudGVlIHRoYXQgdGhlaXIgaW5zZXJ0aW9uIG9yZGVyIG1hdGNoZXMgdGhlIGNsYWltIG9yZGVyXG4gICAgdG9Nb3ZlLnNvcnQoKGEsIGIpID0+IGEuY2xhaW1fb3JkZXIgLSBiLmNsYWltX29yZGVyKTtcbiAgICAvLyBGaW5hbGx5LCB3ZSBtb3ZlIHRoZSBub2Rlc1xuICAgIGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IHRvTW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB3aGlsZSAoaiA8IGxpcy5sZW5ndGggJiYgdG9Nb3ZlW2ldLmNsYWltX29yZGVyID49IGxpc1tqXS5jbGFpbV9vcmRlcikge1xuICAgICAgICAgICAgaisrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFuY2hvciA9IGogPCBsaXMubGVuZ3RoID8gbGlzW2pdIDogbnVsbDtcbiAgICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZSh0b01vdmVbaV0sIGFuY2hvcik7XG4gICAgfVxufVxuZnVuY3Rpb24gYXBwZW5kKHRhcmdldCwgbm9kZSkge1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcbn1cbmZ1bmN0aW9uIGFwcGVuZF9zdHlsZXModGFyZ2V0LCBzdHlsZV9zaGVldF9pZCwgc3R5bGVzKSB7XG4gICAgY29uc3QgYXBwZW5kX3N0eWxlc190byA9IGdldF9yb290X2Zvcl9zdHlsZSh0YXJnZXQpO1xuICAgIGlmICghYXBwZW5kX3N0eWxlc190by5nZXRFbGVtZW50QnlJZChzdHlsZV9zaGVldF9pZCkpIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBlbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBzdHlsZS5pZCA9IHN0eWxlX3NoZWV0X2lkO1xuICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IHN0eWxlcztcbiAgICAgICAgYXBwZW5kX3N0eWxlc2hlZXQoYXBwZW5kX3N0eWxlc190bywgc3R5bGUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldF9yb290X2Zvcl9zdHlsZShub2RlKSB7XG4gICAgaWYgKCFub2RlKVxuICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgY29uc3Qgcm9vdCA9IG5vZGUuZ2V0Um9vdE5vZGUgPyBub2RlLmdldFJvb3ROb2RlKCkgOiBub2RlLm93bmVyRG9jdW1lbnQ7XG4gICAgaWYgKHJvb3QgJiYgcm9vdC5ob3N0KSB7XG4gICAgICAgIHJldHVybiByb290O1xuICAgIH1cbiAgICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50O1xufVxuZnVuY3Rpb24gYXBwZW5kX2VtcHR5X3N0eWxlc2hlZXQobm9kZSkge1xuICAgIGNvbnN0IHN0eWxlX2VsZW1lbnQgPSBlbGVtZW50KCdzdHlsZScpO1xuICAgIGFwcGVuZF9zdHlsZXNoZWV0KGdldF9yb290X2Zvcl9zdHlsZShub2RlKSwgc3R5bGVfZWxlbWVudCk7XG4gICAgcmV0dXJuIHN0eWxlX2VsZW1lbnQuc2hlZXQ7XG59XG5mdW5jdGlvbiBhcHBlbmRfc3R5bGVzaGVldChub2RlLCBzdHlsZSkge1xuICAgIGFwcGVuZChub2RlLmhlYWQgfHwgbm9kZSwgc3R5bGUpO1xufVxuZnVuY3Rpb24gYXBwZW5kX2h5ZHJhdGlvbih0YXJnZXQsIG5vZGUpIHtcbiAgICBpZiAoaXNfaHlkcmF0aW5nKSB7XG4gICAgICAgIGluaXRfaHlkcmF0ZSh0YXJnZXQpO1xuICAgICAgICBpZiAoKHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkID09PSB1bmRlZmluZWQpIHx8ICgodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgIT09IG51bGwpICYmICh0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZC5wYXJlbnRFbGVtZW50ICE9PSB0YXJnZXQpKSkge1xuICAgICAgICAgICAgdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPSB0YXJnZXQuZmlyc3RDaGlsZDtcbiAgICAgICAgfVxuICAgICAgICAvLyBTa2lwIG5vZGVzIG9mIHVuZGVmaW5lZCBvcmRlcmluZ1xuICAgICAgICB3aGlsZSAoKHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkICE9PSBudWxsKSAmJiAodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQuY2xhaW1fb3JkZXIgPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgIHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkID0gdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUgIT09IHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkKSB7XG4gICAgICAgICAgICAvLyBXZSBvbmx5IGluc2VydCBpZiB0aGUgb3JkZXJpbmcgb2YgdGhpcyBub2RlIHNob3VsZCBiZSBtb2RpZmllZCBvciB0aGUgcGFyZW50IG5vZGUgaXMgbm90IHRhcmdldFxuICAgICAgICAgICAgaWYgKG5vZGUuY2xhaW1fb3JkZXIgIT09IHVuZGVmaW5lZCB8fCBub2RlLnBhcmVudE5vZGUgIT09IHRhcmdldCkge1xuICAgICAgICAgICAgICAgIHRhcmdldC5pbnNlcnRCZWZvcmUobm9kZSwgdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPSBub2RlLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUucGFyZW50Tm9kZSAhPT0gdGFyZ2V0IHx8IG5vZGUubmV4dFNpYmxpbmcgIT09IG51bGwpIHtcbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGluc2VydCh0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuICAgIHRhcmdldC5pbnNlcnRCZWZvcmUobm9kZSwgYW5jaG9yIHx8IG51bGwpO1xufVxuZnVuY3Rpb24gaW5zZXJ0X2h5ZHJhdGlvbih0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuICAgIGlmIChpc19oeWRyYXRpbmcgJiYgIWFuY2hvcikge1xuICAgICAgICBhcHBlbmRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUucGFyZW50Tm9kZSAhPT0gdGFyZ2V0IHx8IG5vZGUubmV4dFNpYmxpbmcgIT0gYW5jaG9yKSB7XG4gICAgICAgIHRhcmdldC5pbnNlcnRCZWZvcmUobm9kZSwgYW5jaG9yIHx8IG51bGwpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRldGFjaChub2RlKSB7XG4gICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuZnVuY3Rpb24gZGVzdHJveV9lYWNoKGl0ZXJhdGlvbnMsIGRldGFjaGluZykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcmF0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoaXRlcmF0aW9uc1tpXSlcbiAgICAgICAgICAgIGl0ZXJhdGlvbnNbaV0uZChkZXRhY2hpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGVsZW1lbnQobmFtZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xufVxuZnVuY3Rpb24gZWxlbWVudF9pcyhuYW1lLCBpcykge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUsIHsgaXMgfSk7XG59XG5mdW5jdGlvbiBvYmplY3Rfd2l0aG91dF9wcm9wZXJ0aWVzKG9iaiwgZXhjbHVkZSkge1xuICAgIGNvbnN0IHRhcmdldCA9IHt9O1xuICAgIGZvciAoY29uc3QgayBpbiBvYmopIHtcbiAgICAgICAgaWYgKGhhc19wcm9wKG9iaiwgaylcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICYmIGV4Y2x1ZGUuaW5kZXhPZihrKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHRhcmdldFtrXSA9IG9ialtrXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gc3ZnX2VsZW1lbnQobmFtZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgbmFtZSk7XG59XG5mdW5jdGlvbiB0ZXh0KGRhdGEpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YSk7XG59XG5mdW5jdGlvbiBzcGFjZSgpIHtcbiAgICByZXR1cm4gdGV4dCgnICcpO1xufVxuZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgcmV0dXJuIHRleHQoJycpO1xufVxuZnVuY3Rpb24gbGlzdGVuKG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICByZXR1cm4gKCkgPT4gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHByZXZlbnRfZGVmYXVsdChmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHN0b3BfcHJvcGFnYXRpb24oZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gc2VsZihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzKVxuICAgICAgICAgICAgZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRydXN0ZWQoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKGV2ZW50LmlzVHJ1c3RlZClcbiAgICAgICAgICAgIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH07XG59XG5mdW5jdGlvbiBhdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbClcbiAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICBlbHNlIGlmIChub2RlLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpICE9PSB2YWx1ZSlcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBzZXRfYXR0cmlidXRlcyhub2RlLCBhdHRyaWJ1dGVzKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IGRlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMobm9kZS5fX3Byb3RvX18pO1xuICAgIGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXNba2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGtleSA9PT0gJ3N0eWxlJykge1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGtleSA9PT0gJ19fdmFsdWUnKSB7XG4gICAgICAgICAgICBub2RlLnZhbHVlID0gbm9kZVtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRlc2NyaXB0b3JzW2tleV0gJiYgZGVzY3JpcHRvcnNba2V5XS5zZXQpIHtcbiAgICAgICAgICAgIG5vZGVba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGF0dHIobm9kZSwga2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X3N2Z19hdHRyaWJ1dGVzKG5vZGUsIGF0dHJpYnV0ZXMpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGF0dHIobm9kZSwga2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNldF9jdXN0b21fZWxlbWVudF9kYXRhKG5vZGUsIHByb3AsIHZhbHVlKSB7XG4gICAgaWYgKHByb3AgaW4gbm9kZSkge1xuICAgICAgICBub2RlW3Byb3BdID0gdHlwZW9mIG5vZGVbcHJvcF0gPT09ICdib29sZWFuJyAmJiB2YWx1ZSA9PT0gJycgPyB0cnVlIDogdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhdHRyKG5vZGUsIHByb3AsIHZhbHVlKTtcbiAgICB9XG59XG5mdW5jdGlvbiB4bGlua19hdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBub2RlLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBnZXRfYmluZGluZ19ncm91cF92YWx1ZShncm91cCwgX192YWx1ZSwgY2hlY2tlZCkge1xuICAgIGNvbnN0IHZhbHVlID0gbmV3IFNldCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JvdXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGdyb3VwW2ldLmNoZWNrZWQpXG4gICAgICAgICAgICB2YWx1ZS5hZGQoZ3JvdXBbaV0uX192YWx1ZSk7XG4gICAgfVxuICAgIGlmICghY2hlY2tlZCkge1xuICAgICAgICB2YWx1ZS5kZWxldGUoX192YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5mcm9tKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHRvX251bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gJycgPyBudWxsIDogK3ZhbHVlO1xufVxuZnVuY3Rpb24gdGltZV9yYW5nZXNfdG9fYXJyYXkocmFuZ2VzKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmdlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBhcnJheS5wdXNoKHsgc3RhcnQ6IHJhbmdlcy5zdGFydChpKSwgZW5kOiByYW5nZXMuZW5kKGkpIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG59XG5mdW5jdGlvbiBjaGlsZHJlbihlbGVtZW50KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZE5vZGVzKTtcbn1cbmZ1bmN0aW9uIGluaXRfY2xhaW1faW5mbyhub2Rlcykge1xuICAgIGlmIChub2Rlcy5jbGFpbV9pbmZvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbm9kZXMuY2xhaW1faW5mbyA9IHsgbGFzdF9pbmRleDogMCwgdG90YWxfY2xhaW1lZDogMCB9O1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNsYWltX25vZGUobm9kZXMsIHByZWRpY2F0ZSwgcHJvY2Vzc05vZGUsIGNyZWF0ZU5vZGUsIGRvbnRVcGRhdGVMYXN0SW5kZXggPSBmYWxzZSkge1xuICAgIC8vIFRyeSB0byBmaW5kIG5vZGVzIGluIGFuIG9yZGVyIHN1Y2ggdGhhdCB3ZSBsZW5ndGhlbiB0aGUgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlXG4gICAgaW5pdF9jbGFpbV9pbmZvKG5vZGVzKTtcbiAgICBjb25zdCByZXN1bHROb2RlID0gKCgpID0+IHtcbiAgICAgICAgLy8gV2UgZmlyc3QgdHJ5IHRvIGZpbmQgYW4gZWxlbWVudCBhZnRlciB0aGUgcHJldmlvdXMgb25lXG4gICAgICAgIGZvciAobGV0IGkgPSBub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXg7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICAgICAgaWYgKHByZWRpY2F0ZShub2RlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VtZW50ID0gcHJvY2Vzc05vZGUobm9kZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlcGxhY2VtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXNbaV0gPSByZXBsYWNlbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFkb250VXBkYXRlTGFzdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLmNsYWltX2luZm8ubGFzdF9pbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSwgd2UgdHJ5IHRvIGZpbmQgb25lIGJlZm9yZVxuICAgICAgICAvLyBXZSBpdGVyYXRlIGluIHJldmVyc2Ugc28gdGhhdCB3ZSBkb24ndCBnbyB0b28gZmFyIGJhY2tcbiAgICAgICAgZm9yIChsZXQgaSA9IG5vZGVzLmNsYWltX2luZm8ubGFzdF9pbmRleCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgICAgICBpZiAocHJlZGljYXRlKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSBwcm9jZXNzTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVwbGFjZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2Rlc1tpXSA9IHJlcGxhY2VtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWRvbnRVcGRhdGVMYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4ID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVwbGFjZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSB3ZSBzcGxpY2VkIGJlZm9yZSB0aGUgbGFzdF9pbmRleCwgd2UgZGVjcmVhc2UgaXRcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4LS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIHdlIGNhbid0IGZpbmQgYW55IG1hdGNoaW5nIG5vZGUsIHdlIGNyZWF0ZSBhIG5ldyBvbmVcbiAgICAgICAgcmV0dXJuIGNyZWF0ZU5vZGUoKTtcbiAgICB9KSgpO1xuICAgIHJlc3VsdE5vZGUuY2xhaW1fb3JkZXIgPSBub2Rlcy5jbGFpbV9pbmZvLnRvdGFsX2NsYWltZWQ7XG4gICAgbm9kZXMuY2xhaW1faW5mby50b3RhbF9jbGFpbWVkICs9IDE7XG4gICAgcmV0dXJuIHJlc3VsdE5vZGU7XG59XG5mdW5jdGlvbiBjbGFpbV9lbGVtZW50X2Jhc2Uobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMsIGNyZWF0ZV9lbGVtZW50KSB7XG4gICAgcmV0dXJuIGNsYWltX25vZGUobm9kZXMsIChub2RlKSA9PiBub2RlLm5vZGVOYW1lID09PSBuYW1lLCAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCByZW1vdmUgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBub2RlLmF0dHJpYnV0ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IG5vZGUuYXR0cmlidXRlc1tqXTtcbiAgICAgICAgICAgIGlmICghYXR0cmlidXRlc1thdHRyaWJ1dGUubmFtZV0pIHtcbiAgICAgICAgICAgICAgICByZW1vdmUucHVzaChhdHRyaWJ1dGUubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlLmZvckVhY2godiA9PiBub2RlLnJlbW92ZUF0dHJpYnV0ZSh2KSk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSwgKCkgPT4gY3JlYXRlX2VsZW1lbnQobmFtZSkpO1xufVxuZnVuY3Rpb24gY2xhaW1fZWxlbWVudChub2RlcywgbmFtZSwgYXR0cmlidXRlcykge1xuICAgIHJldHVybiBjbGFpbV9lbGVtZW50X2Jhc2Uobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMsIGVsZW1lbnQpO1xufVxuZnVuY3Rpb24gY2xhaW1fc3ZnX2VsZW1lbnQobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMpIHtcbiAgICByZXR1cm4gY2xhaW1fZWxlbWVudF9iYXNlKG5vZGVzLCBuYW1lLCBhdHRyaWJ1dGVzLCBzdmdfZWxlbWVudCk7XG59XG5mdW5jdGlvbiBjbGFpbV90ZXh0KG5vZGVzLCBkYXRhKSB7XG4gICAgcmV0dXJuIGNsYWltX25vZGUobm9kZXMsIChub2RlKSA9PiBub2RlLm5vZGVUeXBlID09PSAzLCAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhU3RyID0gJycgKyBkYXRhO1xuICAgICAgICBpZiAobm9kZS5kYXRhLnN0YXJ0c1dpdGgoZGF0YVN0cikpIHtcbiAgICAgICAgICAgIGlmIChub2RlLmRhdGEubGVuZ3RoICE9PSBkYXRhU3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlLnNwbGl0VGV4dChkYXRhU3RyLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlLmRhdGEgPSBkYXRhU3RyO1xuICAgICAgICB9XG4gICAgfSwgKCkgPT4gdGV4dChkYXRhKSwgdHJ1ZSAvLyBUZXh0IG5vZGVzIHNob3VsZCBub3QgdXBkYXRlIGxhc3QgaW5kZXggc2luY2UgaXQgaXMgbGlrZWx5IG5vdCB3b3J0aCBpdCB0byBlbGltaW5hdGUgYW4gaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBvZiBhY3R1YWwgZWxlbWVudHNcbiAgICApO1xufVxuZnVuY3Rpb24gY2xhaW1fc3BhY2Uobm9kZXMpIHtcbiAgICByZXR1cm4gY2xhaW1fdGV4dChub2RlcywgJyAnKTtcbn1cbmZ1bmN0aW9uIGZpbmRfY29tbWVudChub2RlcywgdGV4dCwgc3RhcnQpIHtcbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBub2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSA4IC8qIGNvbW1lbnQgbm9kZSAqLyAmJiBub2RlLnRleHRDb250ZW50LnRyaW0oKSA9PT0gdGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGVzLmxlbmd0aDtcbn1cbmZ1bmN0aW9uIGNsYWltX2h0bWxfdGFnKG5vZGVzKSB7XG4gICAgLy8gZmluZCBodG1sIG9wZW5pbmcgdGFnXG4gICAgY29uc3Qgc3RhcnRfaW5kZXggPSBmaW5kX2NvbW1lbnQobm9kZXMsICdIVE1MX1RBR19TVEFSVCcsIDApO1xuICAgIGNvbnN0IGVuZF9pbmRleCA9IGZpbmRfY29tbWVudChub2RlcywgJ0hUTUxfVEFHX0VORCcsIHN0YXJ0X2luZGV4KTtcbiAgICBpZiAoc3RhcnRfaW5kZXggPT09IGVuZF9pbmRleCkge1xuICAgICAgICByZXR1cm4gbmV3IEh0bWxUYWdIeWRyYXRpb24oKTtcbiAgICB9XG4gICAgaW5pdF9jbGFpbV9pbmZvKG5vZGVzKTtcbiAgICBjb25zdCBodG1sX3RhZ19ub2RlcyA9IG5vZGVzLnNwbGljZShzdGFydF9pbmRleCwgZW5kX2luZGV4IC0gc3RhcnRfaW5kZXggKyAxKTtcbiAgICBkZXRhY2goaHRtbF90YWdfbm9kZXNbMF0pO1xuICAgIGRldGFjaChodG1sX3RhZ19ub2Rlc1todG1sX3RhZ19ub2Rlcy5sZW5ndGggLSAxXSk7XG4gICAgY29uc3QgY2xhaW1lZF9ub2RlcyA9IGh0bWxfdGFnX25vZGVzLnNsaWNlKDEsIGh0bWxfdGFnX25vZGVzLmxlbmd0aCAtIDEpO1xuICAgIGZvciAoY29uc3QgbiBvZiBjbGFpbWVkX25vZGVzKSB7XG4gICAgICAgIG4uY2xhaW1fb3JkZXIgPSBub2Rlcy5jbGFpbV9pbmZvLnRvdGFsX2NsYWltZWQ7XG4gICAgICAgIG5vZGVzLmNsYWltX2luZm8udG90YWxfY2xhaW1lZCArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEh0bWxUYWdIeWRyYXRpb24oY2xhaW1lZF9ub2Rlcyk7XG59XG5mdW5jdGlvbiBzZXRfZGF0YSh0ZXh0LCBkYXRhKSB7XG4gICAgZGF0YSA9ICcnICsgZGF0YTtcbiAgICBpZiAodGV4dC53aG9sZVRleHQgIT09IGRhdGEpXG4gICAgICAgIHRleHQuZGF0YSA9IGRhdGE7XG59XG5mdW5jdGlvbiBzZXRfaW5wdXRfdmFsdWUoaW5wdXQsIHZhbHVlKSB7XG4gICAgaW5wdXQudmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHNldF9pbnB1dF90eXBlKGlucHV0LCB0eXBlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaW5wdXQudHlwZSA9IHR5cGU7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9XG59XG5mdW5jdGlvbiBzZXRfc3R5bGUobm9kZSwga2V5LCB2YWx1ZSwgaW1wb3J0YW50KSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIG5vZGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoa2V5KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSwgaW1wb3J0YW50ID8gJ2ltcG9ydGFudCcgOiAnJyk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2VsZWN0X29wdGlvbihzZWxlY3QsIHZhbHVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBzZWxlY3Qub3B0aW9uc1tpXTtcbiAgICAgICAgaWYgKG9wdGlvbi5fX3ZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZWxlY3Quc2VsZWN0ZWRJbmRleCA9IC0xOyAvLyBubyBvcHRpb24gc2hvdWxkIGJlIHNlbGVjdGVkXG59XG5mdW5jdGlvbiBzZWxlY3Rfb3B0aW9ucyhzZWxlY3QsIHZhbHVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBzZWxlY3Qub3B0aW9uc1tpXTtcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gfnZhbHVlLmluZGV4T2Yob3B0aW9uLl9fdmFsdWUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNlbGVjdF92YWx1ZShzZWxlY3QpIHtcbiAgICBjb25zdCBzZWxlY3RlZF9vcHRpb24gPSBzZWxlY3QucXVlcnlTZWxlY3RvcignOmNoZWNrZWQnKSB8fCBzZWxlY3Qub3B0aW9uc1swXTtcbiAgICByZXR1cm4gc2VsZWN0ZWRfb3B0aW9uICYmIHNlbGVjdGVkX29wdGlvbi5fX3ZhbHVlO1xufVxuZnVuY3Rpb24gc2VsZWN0X211bHRpcGxlX3ZhbHVlKHNlbGVjdCkge1xuICAgIHJldHVybiBbXS5tYXAuY2FsbChzZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnOmNoZWNrZWQnKSwgb3B0aW9uID0+IG9wdGlvbi5fX3ZhbHVlKTtcbn1cbi8vIHVuZm9ydHVuYXRlbHkgdGhpcyBjYW4ndCBiZSBhIGNvbnN0YW50IGFzIHRoYXQgd291bGRuJ3QgYmUgdHJlZS1zaGFrZWFibGVcbi8vIHNvIHdlIGNhY2hlIHRoZSByZXN1bHQgaW5zdGVhZFxubGV0IGNyb3Nzb3JpZ2luO1xuZnVuY3Rpb24gaXNfY3Jvc3NvcmlnaW4oKSB7XG4gICAgaWYgKGNyb3Nzb3JpZ2luID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3Jvc3NvcmlnaW4gPSBmYWxzZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdm9pZCB3aW5kb3cucGFyZW50LmRvY3VtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY3Jvc3NvcmlnaW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjcm9zc29yaWdpbjtcbn1cbmZ1bmN0aW9uIGFkZF9yZXNpemVfbGlzdGVuZXIobm9kZSwgZm4pIHtcbiAgICBjb25zdCBjb21wdXRlZF9zdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgaWYgKGNvbXB1dGVkX3N0eWxlLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgICAgICBub2RlLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICB9XG4gICAgY29uc3QgaWZyYW1lID0gZWxlbWVudCgnaWZyYW1lJyk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyAnICtcbiAgICAgICAgJ292ZXJmbG93OiBoaWRkZW47IGJvcmRlcjogMDsgb3BhY2l0eTogMDsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHotaW5kZXg6IC0xOycpO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICBpZnJhbWUudGFiSW5kZXggPSAtMTtcbiAgICBjb25zdCBjcm9zc29yaWdpbiA9IGlzX2Nyb3Nzb3JpZ2luKCk7XG4gICAgbGV0IHVuc3Vic2NyaWJlO1xuICAgIGlmIChjcm9zc29yaWdpbikge1xuICAgICAgICBpZnJhbWUuc3JjID0gXCJkYXRhOnRleHQvaHRtbCw8c2NyaXB0Pm9ucmVzaXplPWZ1bmN0aW9uKCl7cGFyZW50LnBvc3RNZXNzYWdlKDAsJyonKX08L3NjcmlwdD5cIjtcbiAgICAgICAgdW5zdWJzY3JpYmUgPSBsaXN0ZW4od2luZG93LCAnbWVzc2FnZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gaWZyYW1lLmNvbnRlbnRXaW5kb3cpXG4gICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZnJhbWUuc3JjID0gJ2Fib3V0OmJsYW5rJztcbiAgICAgICAgaWZyYW1lLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlID0gbGlzdGVuKGlmcmFtZS5jb250ZW50V2luZG93LCAncmVzaXplJywgZm4pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBhcHBlbmQobm9kZSwgaWZyYW1lKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoY3Jvc3NvcmlnaW4pIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodW5zdWJzY3JpYmUgJiYgaWZyYW1lLmNvbnRlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZGV0YWNoKGlmcmFtZSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRvZ2dsZV9jbGFzcyhlbGVtZW50LCBuYW1lLCB0b2dnbGUpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdFt0b2dnbGUgPyAnYWRkJyA6ICdyZW1vdmUnXShuYW1lKTtcbn1cbmZ1bmN0aW9uIGN1c3RvbV9ldmVudCh0eXBlLCBkZXRhaWwsIGJ1YmJsZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICBlLmluaXRDdXN0b21FdmVudCh0eXBlLCBidWJibGVzLCBmYWxzZSwgZGV0YWlsKTtcbiAgICByZXR1cm4gZTtcbn1cbmZ1bmN0aW9uIHF1ZXJ5X3NlbGVjdG9yX2FsbChzZWxlY3RvciwgcGFyZW50ID0gZG9jdW1lbnQuYm9keSkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG59XG5jbGFzcyBIdG1sVGFnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lID0gdGhpcy5uID0gbnVsbDtcbiAgICB9XG4gICAgYyhodG1sKSB7XG4gICAgICAgIHRoaXMuaChodG1sKTtcbiAgICB9XG4gICAgbShodG1sLCB0YXJnZXQsIGFuY2hvciA9IG51bGwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmUpIHtcbiAgICAgICAgICAgIHRoaXMuZSA9IGVsZW1lbnQodGFyZ2V0Lm5vZGVOYW1lKTtcbiAgICAgICAgICAgIHRoaXMudCA9IHRhcmdldDtcbiAgICAgICAgICAgIHRoaXMuYyhodG1sKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmkoYW5jaG9yKTtcbiAgICB9XG4gICAgaChodG1sKSB7XG4gICAgICAgIHRoaXMuZS5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICB0aGlzLm4gPSBBcnJheS5mcm9tKHRoaXMuZS5jaGlsZE5vZGVzKTtcbiAgICB9XG4gICAgaShhbmNob3IpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm4ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGluc2VydCh0aGlzLnQsIHRoaXMubltpXSwgYW5jaG9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwKGh0bWwpIHtcbiAgICAgICAgdGhpcy5kKCk7XG4gICAgICAgIHRoaXMuaChodG1sKTtcbiAgICAgICAgdGhpcy5pKHRoaXMuYSk7XG4gICAgfVxuICAgIGQoKSB7XG4gICAgICAgIHRoaXMubi5mb3JFYWNoKGRldGFjaCk7XG4gICAgfVxufVxuY2xhc3MgSHRtbFRhZ0h5ZHJhdGlvbiBleHRlbmRzIEh0bWxUYWcge1xuICAgIGNvbnN0cnVjdG9yKGNsYWltZWRfbm9kZXMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lID0gdGhpcy5uID0gbnVsbDtcbiAgICAgICAgdGhpcy5sID0gY2xhaW1lZF9ub2RlcztcbiAgICB9XG4gICAgYyhodG1sKSB7XG4gICAgICAgIGlmICh0aGlzLmwpIHtcbiAgICAgICAgICAgIHRoaXMubiA9IHRoaXMubDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN1cGVyLmMoaHRtbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaShhbmNob3IpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm4ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGluc2VydF9oeWRyYXRpb24odGhpcy50LCB0aGlzLm5baV0sIGFuY2hvcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBhdHRyaWJ1dGVfdG9fb2JqZWN0KGF0dHJpYnV0ZXMpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBvZiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJlc3VsdFthdHRyaWJ1dGUubmFtZV0gPSBhdHRyaWJ1dGUudmFsdWU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBnZXRfY3VzdG9tX2VsZW1lbnRzX3Nsb3RzKGVsZW1lbnQpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBlbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICByZXN1bHRbbm9kZS5zbG90IHx8ICdkZWZhdWx0J10gPSB0cnVlO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIHdlIG5lZWQgdG8gc3RvcmUgdGhlIGluZm9ybWF0aW9uIGZvciBtdWx0aXBsZSBkb2N1bWVudHMgYmVjYXVzZSBhIFN2ZWx0ZSBhcHBsaWNhdGlvbiBjb3VsZCBhbHNvIGNvbnRhaW4gaWZyYW1lc1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3N2ZWx0ZWpzL3N2ZWx0ZS9pc3N1ZXMvMzYyNFxuY29uc3QgbWFuYWdlZF9zdHlsZXMgPSBuZXcgTWFwKCk7XG5sZXQgYWN0aXZlID0gMDtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJrc2t5YXBwL3N0cmluZy1oYXNoL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG5mdW5jdGlvbiBoYXNoKHN0cikge1xuICAgIGxldCBoYXNoID0gNTM4MTtcbiAgICBsZXQgaSA9IHN0ci5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSlcbiAgICAgICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpIF4gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGhhc2ggPj4+IDA7XG59XG5mdW5jdGlvbiBjcmVhdGVfc3R5bGVfaW5mb3JtYXRpb24oZG9jLCBub2RlKSB7XG4gICAgY29uc3QgaW5mbyA9IHsgc3R5bGVzaGVldDogYXBwZW5kX2VtcHR5X3N0eWxlc2hlZXQobm9kZSksIHJ1bGVzOiB7fSB9O1xuICAgIG1hbmFnZWRfc3R5bGVzLnNldChkb2MsIGluZm8pO1xuICAgIHJldHVybiBpbmZvO1xufVxuZnVuY3Rpb24gY3JlYXRlX3J1bGUobm9kZSwgYSwgYiwgZHVyYXRpb24sIGRlbGF5LCBlYXNlLCBmbiwgdWlkID0gMCkge1xuICAgIGNvbnN0IHN0ZXAgPSAxNi42NjYgLyBkdXJhdGlvbjtcbiAgICBsZXQga2V5ZnJhbWVzID0gJ3tcXG4nO1xuICAgIGZvciAobGV0IHAgPSAwOyBwIDw9IDE7IHAgKz0gc3RlcCkge1xuICAgICAgICBjb25zdCB0ID0gYSArIChiIC0gYSkgKiBlYXNlKHApO1xuICAgICAgICBrZXlmcmFtZXMgKz0gcCAqIDEwMCArIGAleyR7Zm4odCwgMSAtIHQpfX1cXG5gO1xuICAgIH1cbiAgICBjb25zdCBydWxlID0ga2V5ZnJhbWVzICsgYDEwMCUgeyR7Zm4oYiwgMSAtIGIpfX1cXG59YDtcbiAgICBjb25zdCBuYW1lID0gYF9fc3ZlbHRlXyR7aGFzaChydWxlKX1fJHt1aWR9YDtcbiAgICBjb25zdCBkb2MgPSBnZXRfcm9vdF9mb3Jfc3R5bGUobm9kZSk7XG4gICAgY29uc3QgeyBzdHlsZXNoZWV0LCBydWxlcyB9ID0gbWFuYWdlZF9zdHlsZXMuZ2V0KGRvYykgfHwgY3JlYXRlX3N0eWxlX2luZm9ybWF0aW9uKGRvYywgbm9kZSk7XG4gICAgaWYgKCFydWxlc1tuYW1lXSkge1xuICAgICAgICBydWxlc1tuYW1lXSA9IHRydWU7XG4gICAgICAgIHN0eWxlc2hlZXQuaW5zZXJ0UnVsZShgQGtleWZyYW1lcyAke25hbWV9ICR7cnVsZX1gLCBzdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG4gICAgfVxuICAgIGNvbnN0IGFuaW1hdGlvbiA9IG5vZGUuc3R5bGUuYW5pbWF0aW9uIHx8ICcnO1xuICAgIG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gYCR7YW5pbWF0aW9uID8gYCR7YW5pbWF0aW9ufSwgYCA6ICcnfSR7bmFtZX0gJHtkdXJhdGlvbn1tcyBsaW5lYXIgJHtkZWxheX1tcyAxIGJvdGhgO1xuICAgIGFjdGl2ZSArPSAxO1xuICAgIHJldHVybiBuYW1lO1xufVxuZnVuY3Rpb24gZGVsZXRlX3J1bGUobm9kZSwgbmFtZSkge1xuICAgIGNvbnN0IHByZXZpb3VzID0gKG5vZGUuc3R5bGUuYW5pbWF0aW9uIHx8ICcnKS5zcGxpdCgnLCAnKTtcbiAgICBjb25zdCBuZXh0ID0gcHJldmlvdXMuZmlsdGVyKG5hbWVcbiAgICAgICAgPyBhbmltID0+IGFuaW0uaW5kZXhPZihuYW1lKSA8IDAgLy8gcmVtb3ZlIHNwZWNpZmljIGFuaW1hdGlvblxuICAgICAgICA6IGFuaW0gPT4gYW5pbS5pbmRleE9mKCdfX3N2ZWx0ZScpID09PSAtMSAvLyByZW1vdmUgYWxsIFN2ZWx0ZSBhbmltYXRpb25zXG4gICAgKTtcbiAgICBjb25zdCBkZWxldGVkID0gcHJldmlvdXMubGVuZ3RoIC0gbmV4dC5sZW5ndGg7XG4gICAgaWYgKGRlbGV0ZWQpIHtcbiAgICAgICAgbm9kZS5zdHlsZS5hbmltYXRpb24gPSBuZXh0LmpvaW4oJywgJyk7XG4gICAgICAgIGFjdGl2ZSAtPSBkZWxldGVkO1xuICAgICAgICBpZiAoIWFjdGl2ZSlcbiAgICAgICAgICAgIGNsZWFyX3J1bGVzKCk7XG4gICAgfVxufVxuZnVuY3Rpb24gY2xlYXJfcnVsZXMoKSB7XG4gICAgcmFmKCgpID0+IHtcbiAgICAgICAgaWYgKGFjdGl2ZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgbWFuYWdlZF9zdHlsZXMuZm9yRWFjaChpbmZvID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgc3R5bGVzaGVldCB9ID0gaW5mbztcbiAgICAgICAgICAgIGxldCBpID0gc3R5bGVzaGVldC5jc3NSdWxlcy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoaS0tKVxuICAgICAgICAgICAgICAgIHN0eWxlc2hlZXQuZGVsZXRlUnVsZShpKTtcbiAgICAgICAgICAgIGluZm8ucnVsZXMgPSB7fTtcbiAgICAgICAgfSk7XG4gICAgICAgIG1hbmFnZWRfc3R5bGVzLmNsZWFyKCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZV9hbmltYXRpb24obm9kZSwgZnJvbSwgZm4sIHBhcmFtcykge1xuICAgIGlmICghZnJvbSlcbiAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgY29uc3QgdG8gPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChmcm9tLmxlZnQgPT09IHRvLmxlZnQgJiYgZnJvbS5yaWdodCA9PT0gdG8ucmlnaHQgJiYgZnJvbS50b3AgPT09IHRvLnRvcCAmJiBmcm9tLmJvdHRvbSA9PT0gdG8uYm90dG9tKVxuICAgICAgICByZXR1cm4gbm9vcDtcbiAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCBcbiAgICAvLyBAdHMtaWdub3JlIHRvZG86IHNob3VsZCB0aGlzIGJlIHNlcGFyYXRlZCBmcm9tIGRlc3RydWN0dXJpbmc/IE9yIHN0YXJ0L2VuZCBhZGRlZCB0byBwdWJsaWMgYXBpIGFuZCBkb2N1bWVudGF0aW9uP1xuICAgIHN0YXJ0OiBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheSwgXG4gICAgLy8gQHRzLWlnbm9yZSB0b2RvOlxuICAgIGVuZCA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbiwgdGljayA9IG5vb3AsIGNzcyB9ID0gZm4obm9kZSwgeyBmcm9tLCB0byB9LCBwYXJhbXMpO1xuICAgIGxldCBydW5uaW5nID0gdHJ1ZTtcbiAgICBsZXQgc3RhcnRlZCA9IGZhbHNlO1xuICAgIGxldCBuYW1lO1xuICAgIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICBpZiAoY3NzKSB7XG4gICAgICAgICAgICBuYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMCwgMSwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkZWxheSkge1xuICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgaWYgKGNzcylcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIG5hbWUpO1xuICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIGxvb3Aobm93ID0+IHtcbiAgICAgICAgaWYgKCFzdGFydGVkICYmIG5vdyA+PSBzdGFydF90aW1lKSB7XG4gICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRlZCAmJiBub3cgPj0gZW5kKSB7XG4gICAgICAgICAgICB0aWNrKDEsIDApO1xuICAgICAgICAgICAgc3RvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcnVubmluZykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydGVkKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gbm93IC0gc3RhcnRfdGltZTtcbiAgICAgICAgICAgIGNvbnN0IHQgPSAwICsgMSAqIGVhc2luZyhwIC8gZHVyYXRpb24pO1xuICAgICAgICAgICAgdGljayh0LCAxIC0gdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gICAgc3RhcnQoKTtcbiAgICB0aWNrKDAsIDEpO1xuICAgIHJldHVybiBzdG9wO1xufVxuZnVuY3Rpb24gZml4X3Bvc2l0aW9uKG5vZGUpIHtcbiAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgaWYgKHN0eWxlLnBvc2l0aW9uICE9PSAnYWJzb2x1dGUnICYmIHN0eWxlLnBvc2l0aW9uICE9PSAnZml4ZWQnKSB7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gc3R5bGU7XG4gICAgICAgIGNvbnN0IGEgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBub2RlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgbm9kZS5zdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBub2RlLnN0eWxlLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgYWRkX3RyYW5zZm9ybShub2RlLCBhKTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRfdHJhbnNmb3JtKG5vZGUsIGEpIHtcbiAgICBjb25zdCBiID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoYS5sZWZ0ICE9PSBiLmxlZnQgfHwgYS50b3AgIT09IGIudG9wKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gc3R5bGUudHJhbnNmb3JtID09PSAnbm9uZScgPyAnJyA6IHN0eWxlLnRyYW5zZm9ybTtcbiAgICAgICAgbm9kZS5zdHlsZS50cmFuc2Zvcm0gPSBgJHt0cmFuc2Zvcm19IHRyYW5zbGF0ZSgke2EubGVmdCAtIGIubGVmdH1weCwgJHthLnRvcCAtIGIudG9wfXB4KWA7XG4gICAgfVxufVxuXG5sZXQgY3VycmVudF9jb21wb25lbnQ7XG5mdW5jdGlvbiBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgY3VycmVudF9jb21wb25lbnQgPSBjb21wb25lbnQ7XG59XG5mdW5jdGlvbiBnZXRfY3VycmVudF9jb21wb25lbnQoKSB7XG4gICAgaWYgKCFjdXJyZW50X2NvbXBvbmVudClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGdW5jdGlvbiBjYWxsZWQgb3V0c2lkZSBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24nKTtcbiAgICByZXR1cm4gY3VycmVudF9jb21wb25lbnQ7XG59XG5mdW5jdGlvbiBiZWZvcmVVcGRhdGUoZm4pIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5iZWZvcmVfdXBkYXRlLnB1c2goZm4pO1xufVxuZnVuY3Rpb24gb25Nb3VudChmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLm9uX21vdW50LnB1c2goZm4pO1xufVxuZnVuY3Rpb24gYWZ0ZXJVcGRhdGUoZm4pIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5hZnRlcl91cGRhdGUucHVzaChmbik7XG59XG5mdW5jdGlvbiBvbkRlc3Ryb3koZm4pIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5vbl9kZXN0cm95LnB1c2goZm4pO1xufVxuZnVuY3Rpb24gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCkge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IGdldF9jdXJyZW50X2NvbXBvbmVudCgpO1xuICAgIHJldHVybiAodHlwZSwgZGV0YWlsKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IGNvbXBvbmVudC4kJC5jYWxsYmFja3NbdHlwZV07XG4gICAgICAgIGlmIChjYWxsYmFja3MpIHtcbiAgICAgICAgICAgIC8vIFRPRE8gYXJlIHRoZXJlIHNpdHVhdGlvbnMgd2hlcmUgZXZlbnRzIGNvdWxkIGJlIGRpc3BhdGNoZWRcbiAgICAgICAgICAgIC8vIGluIGEgc2VydmVyIChub24tRE9NKSBlbnZpcm9ubWVudD9cbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gY3VzdG9tX2V2ZW50KHR5cGUsIGRldGFpbCk7XG4gICAgICAgICAgICBjYWxsYmFja3Muc2xpY2UoKS5mb3JFYWNoKGZuID0+IHtcbiAgICAgICAgICAgICAgICBmbi5jYWxsKGNvbXBvbmVudCwgZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gc2V0Q29udGV4dChrZXksIGNvbnRleHQpIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LnNldChrZXksIGNvbnRleHQpO1xufVxuZnVuY3Rpb24gZ2V0Q29udGV4dChrZXkpIHtcbiAgICByZXR1cm4gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuY29udGV4dC5nZXQoa2V5KTtcbn1cbmZ1bmN0aW9uIGdldEFsbENvbnRleHRzKCkge1xuICAgIHJldHVybiBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0O1xufVxuZnVuY3Rpb24gaGFzQ29udGV4dChrZXkpIHtcbiAgICByZXR1cm4gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuY29udGV4dC5oYXMoa2V5KTtcbn1cbi8vIFRPRE8gZmlndXJlIG91dCBpZiB3ZSBzdGlsbCB3YW50IHRvIHN1cHBvcnRcbi8vIHNob3J0aGFuZCBldmVudHMsIG9yIGlmIHdlIHdhbnQgdG8gaW1wbGVtZW50XG4vLyBhIHJlYWwgYnViYmxpbmcgbWVjaGFuaXNtXG5mdW5jdGlvbiBidWJibGUoY29tcG9uZW50LCBldmVudCkge1xuICAgIGNvbnN0IGNhbGxiYWNrcyA9IGNvbXBvbmVudC4kJC5jYWxsYmFja3NbZXZlbnQudHlwZV07XG4gICAgaWYgKGNhbGxiYWNrcykge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNhbGxiYWNrcy5zbGljZSgpLmZvckVhY2goZm4gPT4gZm4uY2FsbCh0aGlzLCBldmVudCkpO1xuICAgIH1cbn1cblxuY29uc3QgZGlydHlfY29tcG9uZW50cyA9IFtdO1xuY29uc3QgaW50cm9zID0geyBlbmFibGVkOiBmYWxzZSB9O1xuY29uc3QgYmluZGluZ19jYWxsYmFja3MgPSBbXTtcbmNvbnN0IHJlbmRlcl9jYWxsYmFja3MgPSBbXTtcbmNvbnN0IGZsdXNoX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgcmVzb2x2ZWRfcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xubGV0IHVwZGF0ZV9zY2hlZHVsZWQgPSBmYWxzZTtcbmZ1bmN0aW9uIHNjaGVkdWxlX3VwZGF0ZSgpIHtcbiAgICBpZiAoIXVwZGF0ZV9zY2hlZHVsZWQpIHtcbiAgICAgICAgdXBkYXRlX3NjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgIHJlc29sdmVkX3Byb21pc2UudGhlbihmbHVzaCk7XG4gICAgfVxufVxuZnVuY3Rpb24gdGljaygpIHtcbiAgICBzY2hlZHVsZV91cGRhdGUoKTtcbiAgICByZXR1cm4gcmVzb2x2ZWRfcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGFkZF9yZW5kZXJfY2FsbGJhY2soZm4pIHtcbiAgICByZW5kZXJfY2FsbGJhY2tzLnB1c2goZm4pO1xufVxuZnVuY3Rpb24gYWRkX2ZsdXNoX2NhbGxiYWNrKGZuKSB7XG4gICAgZmx1c2hfY2FsbGJhY2tzLnB1c2goZm4pO1xufVxuLy8gZmx1c2goKSBjYWxscyBjYWxsYmFja3MgaW4gdGhpcyBvcmRlcjpcbi8vIDEuIEFsbCBiZWZvcmVVcGRhdGUgY2FsbGJhY2tzLCBpbiBvcmRlcjogcGFyZW50cyBiZWZvcmUgY2hpbGRyZW5cbi8vIDIuIEFsbCBiaW5kOnRoaXMgY2FsbGJhY2tzLCBpbiByZXZlcnNlIG9yZGVyOiBjaGlsZHJlbiBiZWZvcmUgcGFyZW50cy5cbi8vIDMuIEFsbCBhZnRlclVwZGF0ZSBjYWxsYmFja3MsIGluIG9yZGVyOiBwYXJlbnRzIGJlZm9yZSBjaGlsZHJlbi4gRVhDRVBUXG4vLyAgICBmb3IgYWZ0ZXJVcGRhdGVzIGNhbGxlZCBkdXJpbmcgdGhlIGluaXRpYWwgb25Nb3VudCwgd2hpY2ggYXJlIGNhbGxlZCBpblxuLy8gICAgcmV2ZXJzZSBvcmRlcjogY2hpbGRyZW4gYmVmb3JlIHBhcmVudHMuXG4vLyBTaW5jZSBjYWxsYmFja3MgbWlnaHQgdXBkYXRlIGNvbXBvbmVudCB2YWx1ZXMsIHdoaWNoIGNvdWxkIHRyaWdnZXIgYW5vdGhlclxuLy8gY2FsbCB0byBmbHVzaCgpLCB0aGUgZm9sbG93aW5nIHN0ZXBzIGd1YXJkIGFnYWluc3QgdGhpczpcbi8vIDEuIER1cmluZyBiZWZvcmVVcGRhdGUsIGFueSB1cGRhdGVkIGNvbXBvbmVudHMgd2lsbCBiZSBhZGRlZCB0byB0aGVcbi8vICAgIGRpcnR5X2NvbXBvbmVudHMgYXJyYXkgYW5kIHdpbGwgY2F1c2UgYSByZWVudHJhbnQgY2FsbCB0byBmbHVzaCgpLiBCZWNhdXNlXG4vLyAgICB0aGUgZmx1c2ggaW5kZXggaXMga2VwdCBvdXRzaWRlIHRoZSBmdW5jdGlvbiwgdGhlIHJlZW50cmFudCBjYWxsIHdpbGwgcGlja1xuLy8gICAgdXAgd2hlcmUgdGhlIGVhcmxpZXIgY2FsbCBsZWZ0IG9mZiBhbmQgZ28gdGhyb3VnaCBhbGwgZGlydHkgY29tcG9uZW50cy4gVGhlXG4vLyAgICBjdXJyZW50X2NvbXBvbmVudCB2YWx1ZSBpcyBzYXZlZCBhbmQgcmVzdG9yZWQgc28gdGhhdCB0aGUgcmVlbnRyYW50IGNhbGwgd2lsbFxuLy8gICAgbm90IGludGVyZmVyZSB3aXRoIHRoZSBcInBhcmVudFwiIGZsdXNoKCkgY2FsbC5cbi8vIDIuIGJpbmQ6dGhpcyBjYWxsYmFja3MgY2Fubm90IHRyaWdnZXIgbmV3IGZsdXNoKCkgY2FsbHMuXG4vLyAzLiBEdXJpbmcgYWZ0ZXJVcGRhdGUsIGFueSB1cGRhdGVkIGNvbXBvbmVudHMgd2lsbCBOT1QgaGF2ZSB0aGVpciBhZnRlclVwZGF0ZVxuLy8gICAgY2FsbGJhY2sgY2FsbGVkIGEgc2Vjb25kIHRpbWU7IHRoZSBzZWVuX2NhbGxiYWNrcyBzZXQsIG91dHNpZGUgdGhlIGZsdXNoKClcbi8vICAgIGZ1bmN0aW9uLCBndWFyYW50ZWVzIHRoaXMgYmVoYXZpb3IuXG5jb25zdCBzZWVuX2NhbGxiYWNrcyA9IG5ldyBTZXQoKTtcbmxldCBmbHVzaGlkeCA9IDA7IC8vIERvICpub3QqIG1vdmUgdGhpcyBpbnNpZGUgdGhlIGZsdXNoKCkgZnVuY3Rpb25cbmZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIGNvbnN0IHNhdmVkX2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICAgIGRvIHtcbiAgICAgICAgLy8gZmlyc3QsIGNhbGwgYmVmb3JlVXBkYXRlIGZ1bmN0aW9uc1xuICAgICAgICAvLyBhbmQgdXBkYXRlIGNvbXBvbmVudHNcbiAgICAgICAgd2hpbGUgKGZsdXNoaWR4IDwgZGlydHlfY29tcG9uZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGRpcnR5X2NvbXBvbmVudHNbZmx1c2hpZHhdO1xuICAgICAgICAgICAgZmx1c2hpZHgrKztcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgdXBkYXRlKGNvbXBvbmVudC4kJCk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KG51bGwpO1xuICAgICAgICBkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCA9IDA7XG4gICAgICAgIGZsdXNoaWR4ID0gMDtcbiAgICAgICAgd2hpbGUgKGJpbmRpbmdfY2FsbGJhY2tzLmxlbmd0aClcbiAgICAgICAgICAgIGJpbmRpbmdfY2FsbGJhY2tzLnBvcCgpKCk7XG4gICAgICAgIC8vIHRoZW4sIG9uY2UgY29tcG9uZW50cyBhcmUgdXBkYXRlZCwgY2FsbFxuICAgICAgICAvLyBhZnRlclVwZGF0ZSBmdW5jdGlvbnMuIFRoaXMgbWF5IGNhdXNlXG4gICAgICAgIC8vIHN1YnNlcXVlbnQgdXBkYXRlcy4uLlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbmRlcl9jYWxsYmFja3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gcmVuZGVyX2NhbGxiYWNrc1tpXTtcbiAgICAgICAgICAgIGlmICghc2Vlbl9jYWxsYmFja3MuaGFzKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgICAgIC8vIC4uLnNvIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgbG9vcHNcbiAgICAgICAgICAgICAgICBzZWVuX2NhbGxiYWNrcy5hZGQoY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyX2NhbGxiYWNrcy5sZW5ndGggPSAwO1xuICAgIH0gd2hpbGUgKGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoKTtcbiAgICB3aGlsZSAoZmx1c2hfY2FsbGJhY2tzLmxlbmd0aCkge1xuICAgICAgICBmbHVzaF9jYWxsYmFja3MucG9wKCkoKTtcbiAgICB9XG4gICAgdXBkYXRlX3NjaGVkdWxlZCA9IGZhbHNlO1xuICAgIHNlZW5fY2FsbGJhY2tzLmNsZWFyKCk7XG4gICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHNhdmVkX2NvbXBvbmVudCk7XG59XG5mdW5jdGlvbiB1cGRhdGUoJCQpIHtcbiAgICBpZiAoJCQuZnJhZ21lbnQgIT09IG51bGwpIHtcbiAgICAgICAgJCQudXBkYXRlKCk7XG4gICAgICAgIHJ1bl9hbGwoJCQuYmVmb3JlX3VwZGF0ZSk7XG4gICAgICAgIGNvbnN0IGRpcnR5ID0gJCQuZGlydHk7XG4gICAgICAgICQkLmRpcnR5ID0gWy0xXTtcbiAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQucCgkJC5jdHgsIGRpcnR5KTtcbiAgICAgICAgJCQuYWZ0ZXJfdXBkYXRlLmZvckVhY2goYWRkX3JlbmRlcl9jYWxsYmFjayk7XG4gICAgfVxufVxuXG5sZXQgcHJvbWlzZTtcbmZ1bmN0aW9uIHdhaXQoKSB7XG4gICAgaWYgKCFwcm9taXNlKSB7XG4gICAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHByb21pc2UgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5mdW5jdGlvbiBkaXNwYXRjaChub2RlLCBkaXJlY3Rpb24sIGtpbmQpIHtcbiAgICBub2RlLmRpc3BhdGNoRXZlbnQoY3VzdG9tX2V2ZW50KGAke2RpcmVjdGlvbiA/ICdpbnRybycgOiAnb3V0cm8nfSR7a2luZH1gKSk7XG59XG5jb25zdCBvdXRyb2luZyA9IG5ldyBTZXQoKTtcbmxldCBvdXRyb3M7XG5mdW5jdGlvbiBncm91cF9vdXRyb3MoKSB7XG4gICAgb3V0cm9zID0ge1xuICAgICAgICByOiAwLFxuICAgICAgICBjOiBbXSxcbiAgICAgICAgcDogb3V0cm9zIC8vIHBhcmVudCBncm91cFxuICAgIH07XG59XG5mdW5jdGlvbiBjaGVja19vdXRyb3MoKSB7XG4gICAgaWYgKCFvdXRyb3Mucikge1xuICAgICAgICBydW5fYWxsKG91dHJvcy5jKTtcbiAgICB9XG4gICAgb3V0cm9zID0gb3V0cm9zLnA7XG59XG5mdW5jdGlvbiB0cmFuc2l0aW9uX2luKGJsb2NrLCBsb2NhbCkge1xuICAgIGlmIChibG9jayAmJiBibG9jay5pKSB7XG4gICAgICAgIG91dHJvaW5nLmRlbGV0ZShibG9jayk7XG4gICAgICAgIGJsb2NrLmkobG9jYWwpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRyYW5zaXRpb25fb3V0KGJsb2NrLCBsb2NhbCwgZGV0YWNoLCBjYWxsYmFjaykge1xuICAgIGlmIChibG9jayAmJiBibG9jay5vKSB7XG4gICAgICAgIGlmIChvdXRyb2luZy5oYXMoYmxvY2spKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBvdXRyb2luZy5hZGQoYmxvY2spO1xuICAgICAgICBvdXRyb3MuYy5wdXNoKCgpID0+IHtcbiAgICAgICAgICAgIG91dHJvaW5nLmRlbGV0ZShibG9jayk7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoZGV0YWNoKVxuICAgICAgICAgICAgICAgICAgICBibG9jay5kKDEpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBibG9jay5vKGxvY2FsKTtcbiAgICB9XG59XG5jb25zdCBudWxsX3RyYW5zaXRpb24gPSB7IGR1cmF0aW9uOiAwIH07XG5mdW5jdGlvbiBjcmVhdGVfaW5fdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zKSB7XG4gICAgbGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcyk7XG4gICAgbGV0IHJ1bm5pbmcgPSBmYWxzZTtcbiAgICBsZXQgYW5pbWF0aW9uX25hbWU7XG4gICAgbGV0IHRhc2s7XG4gICAgbGV0IHVpZCA9IDA7XG4gICAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgICAgaWYgKGFuaW1hdGlvbl9uYW1lKVxuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnbygpIHtcbiAgICAgICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgdGljayA9IG5vb3AsIGNzcyB9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcbiAgICAgICAgaWYgKGNzcylcbiAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMCwgMSwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcywgdWlkKyspO1xuICAgICAgICB0aWNrKDAsIDEpO1xuICAgICAgICBjb25zdCBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheTtcbiAgICAgICAgY29uc3QgZW5kX3RpbWUgPSBzdGFydF90aW1lICsgZHVyYXRpb247XG4gICAgICAgIGlmICh0YXNrKVxuICAgICAgICAgICAgdGFzay5hYm9ydCgpO1xuICAgICAgICBydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCB0cnVlLCAnc3RhcnQnKSk7XG4gICAgICAgIHRhc2sgPSBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gZW5kX3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGljaygxLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgdHJ1ZSwgJ2VuZCcpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gc3RhcnRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ID0gZWFzaW5nKChub3cgLSBzdGFydF90aW1lKSAvIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgdGljayh0LCAxIC0gdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmc7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgc3RhcnRlZCA9IGZhbHNlO1xuICAgIHJldHVybiB7XG4gICAgICAgIHN0YXJ0KCkge1xuICAgICAgICAgICAgaWYgKHN0YXJ0ZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlKTtcbiAgICAgICAgICAgIGlmIChpc19mdW5jdGlvbihjb25maWcpKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnID0gY29uZmlnKCk7XG4gICAgICAgICAgICAgICAgd2FpdCgpLnRoZW4oZ28pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ28oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaW52YWxpZGF0ZSgpIHtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5kKCkge1xuICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9vdXRfdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zKSB7XG4gICAgbGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcyk7XG4gICAgbGV0IHJ1bm5pbmcgPSB0cnVlO1xuICAgIGxldCBhbmltYXRpb25fbmFtZTtcbiAgICBjb25zdCBncm91cCA9IG91dHJvcztcbiAgICBncm91cC5yICs9IDE7XG4gICAgZnVuY3Rpb24gZ28oKSB7XG4gICAgICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIHRpY2sgPSBub29wLCBjc3MgfSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG4gICAgICAgIGlmIChjc3MpXG4gICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDEsIDAsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuICAgICAgICBjb25zdCBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheTtcbiAgICAgICAgY29uc3QgZW5kX3RpbWUgPSBzdGFydF90aW1lICsgZHVyYXRpb247XG4gICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgZmFsc2UsICdzdGFydCcpKTtcbiAgICAgICAgbG9vcChub3cgPT4ge1xuICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAobm93ID49IGVuZF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIGZhbHNlLCAnZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghLS1ncm91cC5yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdpbGwgcmVzdWx0IGluIGBlbmQoKWAgYmVpbmcgY2FsbGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc28gd2UgZG9uJ3QgbmVlZCB0byBjbGVhbiB1cCBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICBydW5fYWxsKGdyb3VwLmMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBzdGFydF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBlYXNpbmcoKG5vdyAtIHN0YXJ0X3RpbWUpIC8gZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aWNrKDEgLSB0LCB0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcnVubmluZztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChpc19mdW5jdGlvbihjb25maWcpKSB7XG4gICAgICAgIHdhaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbmZpZyA9IGNvbmZpZygpO1xuICAgICAgICAgICAgZ28oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBnbygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBlbmQocmVzZXQpIHtcbiAgICAgICAgICAgIGlmIChyZXNldCAmJiBjb25maWcudGljaykge1xuICAgICAgICAgICAgICAgIGNvbmZpZy50aWNrKDEsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIGFuaW1hdGlvbl9uYW1lKTtcbiAgICAgICAgICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlX2JpZGlyZWN0aW9uYWxfdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zLCBpbnRybykge1xuICAgIGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMpO1xuICAgIGxldCB0ID0gaW50cm8gPyAwIDogMTtcbiAgICBsZXQgcnVubmluZ19wcm9ncmFtID0gbnVsbDtcbiAgICBsZXQgcGVuZGluZ19wcm9ncmFtID0gbnVsbDtcbiAgICBsZXQgYW5pbWF0aW9uX25hbWUgPSBudWxsO1xuICAgIGZ1bmN0aW9uIGNsZWFyX2FuaW1hdGlvbigpIHtcbiAgICAgICAgaWYgKGFuaW1hdGlvbl9uYW1lKVxuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbml0KHByb2dyYW0sIGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGQgPSAocHJvZ3JhbS5iIC0gdCk7XG4gICAgICAgIGR1cmF0aW9uICo9IE1hdGguYWJzKGQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYTogdCxcbiAgICAgICAgICAgIGI6IHByb2dyYW0uYixcbiAgICAgICAgICAgIGQsXG4gICAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICAgIHN0YXJ0OiBwcm9ncmFtLnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBwcm9ncmFtLnN0YXJ0ICsgZHVyYXRpb24sXG4gICAgICAgICAgICBncm91cDogcHJvZ3JhbS5ncm91cFxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBnbyhiKSB7XG4gICAgICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIHRpY2sgPSBub29wLCBjc3MgfSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG4gICAgICAgIGNvbnN0IHByb2dyYW0gPSB7XG4gICAgICAgICAgICBzdGFydDogbm93KCkgKyBkZWxheSxcbiAgICAgICAgICAgIGJcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFiKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRvZG86IGltcHJvdmUgdHlwaW5nc1xuICAgICAgICAgICAgcHJvZ3JhbS5ncm91cCA9IG91dHJvcztcbiAgICAgICAgICAgIG91dHJvcy5yICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJ1bm5pbmdfcHJvZ3JhbSB8fCBwZW5kaW5nX3Byb2dyYW0pIHtcbiAgICAgICAgICAgIHBlbmRpbmdfcHJvZ3JhbSA9IHByb2dyYW07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiB0aGlzIGlzIGFuIGludHJvLCBhbmQgdGhlcmUncyBhIGRlbGF5LCB3ZSBuZWVkIHRvIGRvXG4gICAgICAgICAgICAvLyBhbiBpbml0aWFsIHRpY2sgYW5kL29yIGFwcGx5IENTUyBhbmltYXRpb24gaW1tZWRpYXRlbHlcbiAgICAgICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIHQsIGIsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGIpXG4gICAgICAgICAgICAgICAgdGljaygwLCAxKTtcbiAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IGluaXQocHJvZ3JhbSwgZHVyYXRpb24pO1xuICAgICAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCBiLCAnc3RhcnQnKSk7XG4gICAgICAgICAgICBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBlbmRpbmdfcHJvZ3JhbSAmJiBub3cgPiBwZW5kaW5nX3Byb2dyYW0uc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gaW5pdChwZW5kaW5nX3Byb2dyYW0sIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZ19wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgcnVubmluZ19wcm9ncmFtLmIsICdzdGFydCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3NzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgdCwgcnVubmluZ19wcm9ncmFtLmIsIHJ1bm5pbmdfcHJvZ3JhbS5kdXJhdGlvbiwgMCwgZWFzaW5nLCBjb25maWcuY3NzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocnVubmluZ19wcm9ncmFtKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub3cgPj0gcnVubmluZ19wcm9ncmFtLmVuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGljayh0ID0gcnVubmluZ19wcm9ncmFtLmIsIDEgLSB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIHJ1bm5pbmdfcHJvZ3JhbS5iLCAnZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBlbmRpbmdfcHJvZ3JhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlJ3JlIGRvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocnVubmluZ19wcm9ncmFtLmIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW50cm8g4oCUIHdlIGNhbiB0aWR5IHVwIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3V0cm8g4oCUIG5lZWRzIHRvIGJlIGNvb3JkaW5hdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghLS1ydW5uaW5nX3Byb2dyYW0uZ3JvdXAucilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bl9hbGwocnVubmluZ19wcm9ncmFtLmdyb3VwLmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobm93ID49IHJ1bm5pbmdfcHJvZ3JhbS5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IG5vdyAtIHJ1bm5pbmdfcHJvZ3JhbS5zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBydW5uaW5nX3Byb2dyYW0uYSArIHJ1bm5pbmdfcHJvZ3JhbS5kICogZWFzaW5nKHAgLyBydW5uaW5nX3Byb2dyYW0uZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGljayh0LCAxIC0gdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhKHJ1bm5pbmdfcHJvZ3JhbSB8fCBwZW5kaW5nX3Byb2dyYW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcnVuKGIpIHtcbiAgICAgICAgICAgIGlmIChpc19mdW5jdGlvbihjb25maWcpKSB7XG4gICAgICAgICAgICAgICAgd2FpdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNvbmZpZygpO1xuICAgICAgICAgICAgICAgICAgICBnbyhiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGdvKGIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbmQoKSB7XG4gICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IHBlbmRpbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBoYW5kbGVfcHJvbWlzZShwcm9taXNlLCBpbmZvKSB7XG4gICAgY29uc3QgdG9rZW4gPSBpbmZvLnRva2VuID0ge307XG4gICAgZnVuY3Rpb24gdXBkYXRlKHR5cGUsIGluZGV4LCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmIChpbmZvLnRva2VuICE9PSB0b2tlbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaW5mby5yZXNvbHZlZCA9IHZhbHVlO1xuICAgICAgICBsZXQgY2hpbGRfY3R4ID0gaW5mby5jdHg7XG4gICAgICAgIGlmIChrZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2hpbGRfY3R4ID0gY2hpbGRfY3R4LnNsaWNlKCk7XG4gICAgICAgICAgICBjaGlsZF9jdHhba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJsb2NrID0gdHlwZSAmJiAoaW5mby5jdXJyZW50ID0gdHlwZSkoY2hpbGRfY3R4KTtcbiAgICAgICAgbGV0IG5lZWRzX2ZsdXNoID0gZmFsc2U7XG4gICAgICAgIGlmIChpbmZvLmJsb2NrKSB7XG4gICAgICAgICAgICBpZiAoaW5mby5ibG9ja3MpIHtcbiAgICAgICAgICAgICAgICBpbmZvLmJsb2Nrcy5mb3JFYWNoKChibG9jaywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPT0gaW5kZXggJiYgYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwX291dHJvcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbl9vdXQoYmxvY2ssIDEsIDEsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5mby5ibG9ja3NbaV0gPT09IGJsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZm8uYmxvY2tzW2ldID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrX291dHJvcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbmZvLmJsb2NrLmQoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBibG9jay5jKCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uX2luKGJsb2NrLCAxKTtcbiAgICAgICAgICAgIGJsb2NrLm0oaW5mby5tb3VudCgpLCBpbmZvLmFuY2hvcik7XG4gICAgICAgICAgICBuZWVkc19mbHVzaCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5mby5ibG9jayA9IGJsb2NrO1xuICAgICAgICBpZiAoaW5mby5ibG9ja3MpXG4gICAgICAgICAgICBpbmZvLmJsb2Nrc1tpbmRleF0gPSBibG9jaztcbiAgICAgICAgaWYgKG5lZWRzX2ZsdXNoKSB7XG4gICAgICAgICAgICBmbHVzaCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChpc19wcm9taXNlKHByb21pc2UpKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRfY29tcG9uZW50ID0gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCk7XG4gICAgICAgIHByb21pc2UudGhlbih2YWx1ZSA9PiB7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY3VycmVudF9jb21wb25lbnQpO1xuICAgICAgICAgICAgdXBkYXRlKGluZm8udGhlbiwgMSwgaW5mby52YWx1ZSwgdmFsdWUpO1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KG51bGwpO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY3VycmVudF9jb21wb25lbnQpO1xuICAgICAgICAgICAgdXBkYXRlKGluZm8uY2F0Y2gsIDIsIGluZm8uZXJyb3IsIGVycm9yKTtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChudWxsKTtcbiAgICAgICAgICAgIGlmICghaW5mby5oYXNDYXRjaCkge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gaWYgd2UgcHJldmlvdXNseSBoYWQgYSB0aGVuL2NhdGNoIGJsb2NrLCBkZXN0cm95IGl0XG4gICAgICAgIGlmIChpbmZvLmN1cnJlbnQgIT09IGluZm8ucGVuZGluZykge1xuICAgICAgICAgICAgdXBkYXRlKGluZm8ucGVuZGluZywgMCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGluZm8uY3VycmVudCAhPT0gaW5mby50aGVuKSB7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby50aGVuLCAxLCBpbmZvLnZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGluZm8ucmVzb2x2ZWQgPSBwcm9taXNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZV9hd2FpdF9ibG9ja19icmFuY2goaW5mbywgY3R4LCBkaXJ0eSkge1xuICAgIGNvbnN0IGNoaWxkX2N0eCA9IGN0eC5zbGljZSgpO1xuICAgIGNvbnN0IHsgcmVzb2x2ZWQgfSA9IGluZm87XG4gICAgaWYgKGluZm8uY3VycmVudCA9PT0gaW5mby50aGVuKSB7XG4gICAgICAgIGNoaWxkX2N0eFtpbmZvLnZhbHVlXSA9IHJlc29sdmVkO1xuICAgIH1cbiAgICBpZiAoaW5mby5jdXJyZW50ID09PSBpbmZvLmNhdGNoKSB7XG4gICAgICAgIGNoaWxkX2N0eFtpbmZvLmVycm9yXSA9IHJlc29sdmVkO1xuICAgIH1cbiAgICBpbmZvLmJsb2NrLnAoY2hpbGRfY3R4LCBkaXJ0eSk7XG59XG5cbmNvbnN0IGdsb2JhbHMgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICA/IHdpbmRvd1xuICAgIDogdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gZ2xvYmFsVGhpc1xuICAgICAgICA6IGdsb2JhbCk7XG5cbmZ1bmN0aW9uIGRlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIGJsb2NrLmQoMSk7XG4gICAgbG9va3VwLmRlbGV0ZShibG9jay5rZXkpO1xufVxuZnVuY3Rpb24gb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIHRyYW5zaXRpb25fb3V0KGJsb2NrLCAxLCAxLCAoKSA9PiB7XG4gICAgICAgIGxvb2t1cC5kZWxldGUoYmxvY2sua2V5KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZpeF9hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgYmxvY2suZigpO1xuICAgIGRlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCk7XG59XG5mdW5jdGlvbiBmaXhfYW5kX291dHJvX2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICBibG9jay5mKCk7XG4gICAgb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCk7XG59XG5mdW5jdGlvbiB1cGRhdGVfa2V5ZWRfZWFjaChvbGRfYmxvY2tzLCBkaXJ0eSwgZ2V0X2tleSwgZHluYW1pYywgY3R4LCBsaXN0LCBsb29rdXAsIG5vZGUsIGRlc3Ryb3ksIGNyZWF0ZV9lYWNoX2Jsb2NrLCBuZXh0LCBnZXRfY29udGV4dCkge1xuICAgIGxldCBvID0gb2xkX2Jsb2Nrcy5sZW5ndGg7XG4gICAgbGV0IG4gPSBsaXN0Lmxlbmd0aDtcbiAgICBsZXQgaSA9IG87XG4gICAgY29uc3Qgb2xkX2luZGV4ZXMgPSB7fTtcbiAgICB3aGlsZSAoaS0tKVxuICAgICAgICBvbGRfaW5kZXhlc1tvbGRfYmxvY2tzW2ldLmtleV0gPSBpO1xuICAgIGNvbnN0IG5ld19ibG9ja3MgPSBbXTtcbiAgICBjb25zdCBuZXdfbG9va3VwID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IGRlbHRhcyA9IG5ldyBNYXAoKTtcbiAgICBpID0gbjtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkX2N0eCA9IGdldF9jb250ZXh0KGN0eCwgbGlzdCwgaSk7XG4gICAgICAgIGNvbnN0IGtleSA9IGdldF9rZXkoY2hpbGRfY3R4KTtcbiAgICAgICAgbGV0IGJsb2NrID0gbG9va3VwLmdldChrZXkpO1xuICAgICAgICBpZiAoIWJsb2NrKSB7XG4gICAgICAgICAgICBibG9jayA9IGNyZWF0ZV9lYWNoX2Jsb2NrKGtleSwgY2hpbGRfY3R4KTtcbiAgICAgICAgICAgIGJsb2NrLmMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkeW5hbWljKSB7XG4gICAgICAgICAgICBibG9jay5wKGNoaWxkX2N0eCwgZGlydHkpO1xuICAgICAgICB9XG4gICAgICAgIG5ld19sb29rdXAuc2V0KGtleSwgbmV3X2Jsb2Nrc1tpXSA9IGJsb2NrKTtcbiAgICAgICAgaWYgKGtleSBpbiBvbGRfaW5kZXhlcylcbiAgICAgICAgICAgIGRlbHRhcy5zZXQoa2V5LCBNYXRoLmFicyhpIC0gb2xkX2luZGV4ZXNba2V5XSkpO1xuICAgIH1cbiAgICBjb25zdCB3aWxsX21vdmUgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgZGlkX21vdmUgPSBuZXcgU2V0KCk7XG4gICAgZnVuY3Rpb24gaW5zZXJ0KGJsb2NrKSB7XG4gICAgICAgIHRyYW5zaXRpb25faW4oYmxvY2ssIDEpO1xuICAgICAgICBibG9jay5tKG5vZGUsIG5leHQpO1xuICAgICAgICBsb29rdXAuc2V0KGJsb2NrLmtleSwgYmxvY2spO1xuICAgICAgICBuZXh0ID0gYmxvY2suZmlyc3Q7XG4gICAgICAgIG4tLTtcbiAgICB9XG4gICAgd2hpbGUgKG8gJiYgbikge1xuICAgICAgICBjb25zdCBuZXdfYmxvY2sgPSBuZXdfYmxvY2tzW24gLSAxXTtcbiAgICAgICAgY29uc3Qgb2xkX2Jsb2NrID0gb2xkX2Jsb2Nrc1tvIC0gMV07XG4gICAgICAgIGNvbnN0IG5ld19rZXkgPSBuZXdfYmxvY2sua2V5O1xuICAgICAgICBjb25zdCBvbGRfa2V5ID0gb2xkX2Jsb2NrLmtleTtcbiAgICAgICAgaWYgKG5ld19ibG9jayA9PT0gb2xkX2Jsb2NrKSB7XG4gICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgICAgICBuZXh0ID0gbmV3X2Jsb2NrLmZpcnN0O1xuICAgICAgICAgICAgby0tO1xuICAgICAgICAgICAgbi0tO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFuZXdfbG9va3VwLmhhcyhvbGRfa2V5KSkge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIG9sZCBibG9ja1xuICAgICAgICAgICAgZGVzdHJveShvbGRfYmxvY2ssIGxvb2t1cCk7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWxvb2t1cC5oYXMobmV3X2tleSkgfHwgd2lsbF9tb3ZlLmhhcyhuZXdfa2V5KSkge1xuICAgICAgICAgICAgaW5zZXJ0KG5ld19ibG9jayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGlkX21vdmUuaGFzKG9sZF9rZXkpKSB7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGVsdGFzLmdldChuZXdfa2V5KSA+IGRlbHRhcy5nZXQob2xkX2tleSkpIHtcbiAgICAgICAgICAgIGRpZF9tb3ZlLmFkZChuZXdfa2V5KTtcbiAgICAgICAgICAgIGluc2VydChuZXdfYmxvY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgd2lsbF9tb3ZlLmFkZChvbGRfa2V5KTtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB3aGlsZSAoby0tKSB7XG4gICAgICAgIGNvbnN0IG9sZF9ibG9jayA9IG9sZF9ibG9ja3Nbb107XG4gICAgICAgIGlmICghbmV3X2xvb2t1cC5oYXMob2xkX2Jsb2NrLmtleSkpXG4gICAgICAgICAgICBkZXN0cm95KG9sZF9ibG9jaywgbG9va3VwKTtcbiAgICB9XG4gICAgd2hpbGUgKG4pXG4gICAgICAgIGluc2VydChuZXdfYmxvY2tzW24gLSAxXSk7XG4gICAgcmV0dXJuIG5ld19ibG9ja3M7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9lYWNoX2tleXMoY3R4LCBsaXN0LCBnZXRfY29udGV4dCwgZ2V0X2tleSkge1xuICAgIGNvbnN0IGtleXMgPSBuZXcgU2V0KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGdldF9rZXkoZ2V0X2NvbnRleHQoY3R4LCBsaXN0LCBpKSk7XG4gICAgICAgIGlmIChrZXlzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBoYXZlIGR1cGxpY2F0ZSBrZXlzIGluIGEga2V5ZWQgZWFjaCcpO1xuICAgICAgICB9XG4gICAgICAgIGtleXMuYWRkKGtleSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRfc3ByZWFkX3VwZGF0ZShsZXZlbHMsIHVwZGF0ZXMpIHtcbiAgICBjb25zdCB1cGRhdGUgPSB7fTtcbiAgICBjb25zdCB0b19udWxsX291dCA9IHt9O1xuICAgIGNvbnN0IGFjY291bnRlZF9mb3IgPSB7ICQkc2NvcGU6IDEgfTtcbiAgICBsZXQgaSA9IGxldmVscy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICBjb25zdCBvID0gbGV2ZWxzW2ldO1xuICAgICAgICBjb25zdCBuID0gdXBkYXRlc1tpXTtcbiAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG8pIHtcbiAgICAgICAgICAgICAgICBpZiAoIShrZXkgaW4gbikpXG4gICAgICAgICAgICAgICAgICAgIHRvX251bGxfb3V0W2tleV0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbikge1xuICAgICAgICAgICAgICAgIGlmICghYWNjb3VudGVkX2ZvcltrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVtrZXldID0gbltrZXldO1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50ZWRfZm9yW2tleV0gPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldmVsc1tpXSA9IG47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvKSB7XG4gICAgICAgICAgICAgICAgYWNjb3VudGVkX2ZvcltrZXldID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0b19udWxsX291dCkge1xuICAgICAgICBpZiAoIShrZXkgaW4gdXBkYXRlKSlcbiAgICAgICAgICAgIHVwZGF0ZVtrZXldID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gdXBkYXRlO1xufVxuZnVuY3Rpb24gZ2V0X3NwcmVhZF9vYmplY3Qoc3ByZWFkX3Byb3BzKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzcHJlYWRfcHJvcHMgPT09ICdvYmplY3QnICYmIHNwcmVhZF9wcm9wcyAhPT0gbnVsbCA/IHNwcmVhZF9wcm9wcyA6IHt9O1xufVxuXG4vLyBzb3VyY2U6IGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2luZGljZXMuaHRtbFxuY29uc3QgYm9vbGVhbl9hdHRyaWJ1dGVzID0gbmV3IFNldChbXG4gICAgJ2FsbG93ZnVsbHNjcmVlbicsXG4gICAgJ2FsbG93cGF5bWVudHJlcXVlc3QnLFxuICAgICdhc3luYycsXG4gICAgJ2F1dG9mb2N1cycsXG4gICAgJ2F1dG9wbGF5JyxcbiAgICAnY2hlY2tlZCcsXG4gICAgJ2NvbnRyb2xzJyxcbiAgICAnZGVmYXVsdCcsXG4gICAgJ2RlZmVyJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdmb3Jtbm92YWxpZGF0ZScsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2lzbWFwJyxcbiAgICAnbG9vcCcsXG4gICAgJ211bHRpcGxlJyxcbiAgICAnbXV0ZWQnLFxuICAgICdub21vZHVsZScsXG4gICAgJ25vdmFsaWRhdGUnLFxuICAgICdvcGVuJyxcbiAgICAncGxheXNpbmxpbmUnLFxuICAgICdyZWFkb25seScsXG4gICAgJ3JlcXVpcmVkJyxcbiAgICAncmV2ZXJzZWQnLFxuICAgICdzZWxlY3RlZCdcbl0pO1xuXG5jb25zdCBpbnZhbGlkX2F0dHJpYnV0ZV9uYW1lX2NoYXJhY3RlciA9IC9bXFxzJ1wiPi89XFx1e0ZERDB9LVxcdXtGREVGfVxcdXtGRkZFfVxcdXtGRkZGfVxcdXsxRkZGRX1cXHV7MUZGRkZ9XFx1ezJGRkZFfVxcdXsyRkZGRn1cXHV7M0ZGRkV9XFx1ezNGRkZGfVxcdXs0RkZGRX1cXHV7NEZGRkZ9XFx1ezVGRkZFfVxcdXs1RkZGRn1cXHV7NkZGRkV9XFx1ezZGRkZGfVxcdXs3RkZGRX1cXHV7N0ZGRkZ9XFx1ezhGRkZFfVxcdXs4RkZGRn1cXHV7OUZGRkV9XFx1ezlGRkZGfVxcdXtBRkZGRX1cXHV7QUZGRkZ9XFx1e0JGRkZFfVxcdXtCRkZGRn1cXHV7Q0ZGRkV9XFx1e0NGRkZGfVxcdXtERkZGRX1cXHV7REZGRkZ9XFx1e0VGRkZFfVxcdXtFRkZGRn1cXHV7RkZGRkV9XFx1e0ZGRkZGfVxcdXsxMEZGRkV9XFx1ezEwRkZGRn1dL3U7XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNhdHRyaWJ1dGVzLTJcbi8vIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNub25jaGFyYWN0ZXJcbmZ1bmN0aW9uIHNwcmVhZChhcmdzLCBhdHRyc190b19hZGQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7fSwgLi4uYXJncyk7XG4gICAgaWYgKGF0dHJzX3RvX2FkZCkge1xuICAgICAgICBjb25zdCBjbGFzc2VzX3RvX2FkZCA9IGF0dHJzX3RvX2FkZC5jbGFzc2VzO1xuICAgICAgICBjb25zdCBzdHlsZXNfdG9fYWRkID0gYXR0cnNfdG9fYWRkLnN0eWxlcztcbiAgICAgICAgaWYgKGNsYXNzZXNfdG9fYWRkKSB7XG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlcy5jbGFzcyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5jbGFzcyA9IGNsYXNzZXNfdG9fYWRkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5jbGFzcyArPSAnICcgKyBjbGFzc2VzX3RvX2FkZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc3R5bGVzX3RvX2FkZCkge1xuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXMuc3R5bGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuc3R5bGUgPSBzdHlsZV9vYmplY3RfdG9fc3RyaW5nKHN0eWxlc190b19hZGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5zdHlsZSA9IHN0eWxlX29iamVjdF90b19zdHJpbmcobWVyZ2Vfc3NyX3N0eWxlcyhhdHRyaWJ1dGVzLnN0eWxlLCBzdHlsZXNfdG9fYWRkKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IHN0ciA9ICcnO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIGlmIChpbnZhbGlkX2F0dHJpYnV0ZV9uYW1lX2NoYXJhY3Rlci50ZXN0KG5hbWUpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgIHN0ciArPSAnICcgKyBuYW1lO1xuICAgICAgICBlbHNlIGlmIChib29sZWFuX2F0dHJpYnV0ZXMuaGFzKG5hbWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSlcbiAgICAgICAgICAgICAgICBzdHIgKz0gJyAnICsgbmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBzdHIgKz0gYCAke25hbWV9PVwiJHt2YWx1ZX1cImA7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3RyO1xufVxuZnVuY3Rpb24gbWVyZ2Vfc3NyX3N0eWxlcyhzdHlsZV9hdHRyaWJ1dGUsIHN0eWxlX2RpcmVjdGl2ZSkge1xuICAgIGNvbnN0IHN0eWxlX29iamVjdCA9IHt9O1xuICAgIGZvciAoY29uc3QgaW5kaXZpZHVhbF9zdHlsZSBvZiBzdHlsZV9hdHRyaWJ1dGUuc3BsaXQoJzsnKSkge1xuICAgICAgICBjb25zdCBjb2xvbl9pbmRleCA9IGluZGl2aWR1YWxfc3R5bGUuaW5kZXhPZignOicpO1xuICAgICAgICBjb25zdCBuYW1lID0gaW5kaXZpZHVhbF9zdHlsZS5zbGljZSgwLCBjb2xvbl9pbmRleCkudHJpbSgpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGluZGl2aWR1YWxfc3R5bGUuc2xpY2UoY29sb25faW5kZXggKyAxKS50cmltKCk7XG4gICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBzdHlsZV9vYmplY3RbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBuYW1lIGluIHN0eWxlX2RpcmVjdGl2ZSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHN0eWxlX2RpcmVjdGl2ZVtuYW1lXTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBzdHlsZV9vYmplY3RbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzdHlsZV9vYmplY3RbbmFtZV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlX29iamVjdDtcbn1cbmNvbnN0IGVzY2FwZWQgPSB7XG4gICAgJ1wiJzogJyZxdW90OycsXG4gICAgXCInXCI6ICcmIzM5OycsXG4gICAgJyYnOiAnJmFtcDsnLFxuICAgICc8JzogJyZsdDsnLFxuICAgICc+JzogJyZndDsnXG59O1xuZnVuY3Rpb24gZXNjYXBlKGh0bWwpIHtcbiAgICByZXR1cm4gU3RyaW5nKGh0bWwpLnJlcGxhY2UoL1tcIicmPD5dL2csIG1hdGNoID0+IGVzY2FwZWRbbWF0Y2hdKTtcbn1cbmZ1bmN0aW9uIGVzY2FwZV9hdHRyaWJ1dGVfdmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IGVzY2FwZSh2YWx1ZSkgOiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGVzY2FwZV9vYmplY3Qob2JqKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gZXNjYXBlX2F0dHJpYnV0ZV92YWx1ZShvYmpba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBlYWNoKGl0ZW1zLCBmbikge1xuICAgIGxldCBzdHIgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHN0ciArPSBmbihpdGVtc1tpXSwgaSk7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59XG5jb25zdCBtaXNzaW5nX2NvbXBvbmVudCA9IHtcbiAgICAkJHJlbmRlcjogKCkgPT4gJydcbn07XG5mdW5jdGlvbiB2YWxpZGF0ZV9jb21wb25lbnQoY29tcG9uZW50LCBuYW1lKSB7XG4gICAgaWYgKCFjb21wb25lbnQgfHwgIWNvbXBvbmVudC4kJHJlbmRlcikge1xuICAgICAgICBpZiAobmFtZSA9PT0gJ3N2ZWx0ZTpjb21wb25lbnQnKVxuICAgICAgICAgICAgbmFtZSArPSAnIHRoaXM9ey4uLn0nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYDwke25hbWV9PiBpcyBub3QgYSB2YWxpZCBTU1IgY29tcG9uZW50LiBZb3UgbWF5IG5lZWQgdG8gcmV2aWV3IHlvdXIgYnVpbGQgY29uZmlnIHRvIGVuc3VyZSB0aGF0IGRlcGVuZGVuY2llcyBhcmUgY29tcGlsZWQsIHJhdGhlciB0aGFuIGltcG9ydGVkIGFzIHByZS1jb21waWxlZCBtb2R1bGVzYCk7XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5mdW5jdGlvbiBkZWJ1ZyhmaWxlLCBsaW5lLCBjb2x1bW4sIHZhbHVlcykge1xuICAgIGNvbnNvbGUubG9nKGB7QGRlYnVnfSAke2ZpbGUgPyBmaWxlICsgJyAnIDogJyd9KCR7bGluZX06JHtjb2x1bW59KWApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICByZXR1cm4gJyc7XG59XG5sZXQgb25fZGVzdHJveTtcbmZ1bmN0aW9uIGNyZWF0ZV9zc3JfY29tcG9uZW50KGZuKSB7XG4gICAgZnVuY3Rpb24gJCRyZW5kZXIocmVzdWx0LCBwcm9wcywgYmluZGluZ3MsIHNsb3RzLCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHBhcmVudF9jb21wb25lbnQgPSBjdXJyZW50X2NvbXBvbmVudDtcbiAgICAgICAgY29uc3QgJCQgPSB7XG4gICAgICAgICAgICBvbl9kZXN0cm95LFxuICAgICAgICAgICAgY29udGV4dDogbmV3IE1hcChjb250ZXh0IHx8IChwYXJlbnRfY29tcG9uZW50ID8gcGFyZW50X2NvbXBvbmVudC4kJC5jb250ZXh0IDogW10pKSxcbiAgICAgICAgICAgIC8vIHRoZXNlIHdpbGwgYmUgaW1tZWRpYXRlbHkgZGlzY2FyZGVkXG4gICAgICAgICAgICBvbl9tb3VudDogW10sXG4gICAgICAgICAgICBiZWZvcmVfdXBkYXRlOiBbXSxcbiAgICAgICAgICAgIGFmdGVyX3VwZGF0ZTogW10sXG4gICAgICAgICAgICBjYWxsYmFja3M6IGJsYW5rX29iamVjdCgpXG4gICAgICAgIH07XG4gICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudCh7ICQkIH0pO1xuICAgICAgICBjb25zdCBodG1sID0gZm4ocmVzdWx0LCBwcm9wcywgYmluZGluZ3MsIHNsb3RzKTtcbiAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHBhcmVudF9jb21wb25lbnQpO1xuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVuZGVyOiAocHJvcHMgPSB7fSwgeyAkJHNsb3RzID0ge30sIGNvbnRleHQgPSBuZXcgTWFwKCkgfSA9IHt9KSA9PiB7XG4gICAgICAgICAgICBvbl9kZXN0cm95ID0gW107XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB7IHRpdGxlOiAnJywgaGVhZDogJycsIGNzczogbmV3IFNldCgpIH07XG4gICAgICAgICAgICBjb25zdCBodG1sID0gJCRyZW5kZXIocmVzdWx0LCBwcm9wcywge30sICQkc2xvdHMsIGNvbnRleHQpO1xuICAgICAgICAgICAgcnVuX2FsbChvbl9kZXN0cm95KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaHRtbCxcbiAgICAgICAgICAgICAgICBjc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogQXJyYXkuZnJvbShyZXN1bHQuY3NzKS5tYXAoY3NzID0+IGNzcy5jb2RlKS5qb2luKCdcXG4nKSxcbiAgICAgICAgICAgICAgICAgICAgbWFwOiBudWxsIC8vIFRPRE9cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhlYWQ6IHJlc3VsdC50aXRsZSArIHJlc3VsdC5oZWFkXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAkJHJlbmRlclxuICAgIH07XG59XG5mdW5jdGlvbiBhZGRfYXR0cmlidXRlKG5hbWUsIHZhbHVlLCBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwgfHwgKGJvb2xlYW4gJiYgIXZhbHVlKSlcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIHJldHVybiBgICR7bmFtZX0ke3ZhbHVlID09PSB0cnVlICYmIGJvb2xlYW5fYXR0cmlidXRlcy5oYXMobmFtZSkgPyAnJyA6IGA9JHt0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gSlNPTi5zdHJpbmdpZnkoZXNjYXBlKHZhbHVlKSkgOiBgXCIke3ZhbHVlfVwiYH1gfWA7XG59XG5mdW5jdGlvbiBhZGRfY2xhc3NlcyhjbGFzc2VzKSB7XG4gICAgcmV0dXJuIGNsYXNzZXMgPyBgIGNsYXNzPVwiJHtjbGFzc2VzfVwiYCA6ICcnO1xufVxuZnVuY3Rpb24gc3R5bGVfb2JqZWN0X3RvX3N0cmluZyhzdHlsZV9vYmplY3QpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGVfb2JqZWN0KVxuICAgICAgICAuZmlsdGVyKGtleSA9PiBzdHlsZV9vYmplY3Rba2V5XSlcbiAgICAgICAgLm1hcChrZXkgPT4gYCR7a2V5fTogJHtzdHlsZV9vYmplY3Rba2V5XX07YClcbiAgICAgICAgLmpvaW4oJyAnKTtcbn1cbmZ1bmN0aW9uIGFkZF9zdHlsZXMoc3R5bGVfb2JqZWN0KSB7XG4gICAgY29uc3Qgc3R5bGVzID0gc3R5bGVfb2JqZWN0X3RvX3N0cmluZyhzdHlsZV9vYmplY3QpO1xuICAgIHJldHVybiBzdHlsZXMgPyBgIHN0eWxlPVwiJHtzdHlsZXN9XCJgIDogJyc7XG59XG5cbmZ1bmN0aW9uIGJpbmQoY29tcG9uZW50LCBuYW1lLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGluZGV4ID0gY29tcG9uZW50LiQkLnByb3BzW25hbWVdO1xuICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbXBvbmVudC4kJC5ib3VuZFtpbmRleF0gPSBjYWxsYmFjaztcbiAgICAgICAgY2FsbGJhY2soY29tcG9uZW50LiQkLmN0eFtpbmRleF0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZV9jb21wb25lbnQoYmxvY2spIHtcbiAgICBibG9jayAmJiBibG9jay5jKCk7XG59XG5mdW5jdGlvbiBjbGFpbV9jb21wb25lbnQoYmxvY2ssIHBhcmVudF9ub2Rlcykge1xuICAgIGJsb2NrICYmIGJsb2NrLmwocGFyZW50X25vZGVzKTtcbn1cbmZ1bmN0aW9uIG1vdW50X2NvbXBvbmVudChjb21wb25lbnQsIHRhcmdldCwgYW5jaG9yLCBjdXN0b21FbGVtZW50KSB7XG4gICAgY29uc3QgeyBmcmFnbWVudCwgb25fbW91bnQsIG9uX2Rlc3Ryb3ksIGFmdGVyX3VwZGF0ZSB9ID0gY29tcG9uZW50LiQkO1xuICAgIGZyYWdtZW50ICYmIGZyYWdtZW50Lm0odGFyZ2V0LCBhbmNob3IpO1xuICAgIGlmICghY3VzdG9tRWxlbWVudCkge1xuICAgICAgICAvLyBvbk1vdW50IGhhcHBlbnMgYmVmb3JlIHRoZSBpbml0aWFsIGFmdGVyVXBkYXRlXG4gICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3X29uX2Rlc3Ryb3kgPSBvbl9tb3VudC5tYXAocnVuKS5maWx0ZXIoaXNfZnVuY3Rpb24pO1xuICAgICAgICAgICAgaWYgKG9uX2Rlc3Ryb3kpIHtcbiAgICAgICAgICAgICAgICBvbl9kZXN0cm95LnB1c2goLi4ubmV3X29uX2Rlc3Ryb3kpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRWRnZSBjYXNlIC0gY29tcG9uZW50IHdhcyBkZXN0cm95ZWQgaW1tZWRpYXRlbHksXG4gICAgICAgICAgICAgICAgLy8gbW9zdCBsaWtlbHkgYXMgYSByZXN1bHQgb2YgYSBiaW5kaW5nIGluaXRpYWxpc2luZ1xuICAgICAgICAgICAgICAgIHJ1bl9hbGwobmV3X29uX2Rlc3Ryb3kpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tcG9uZW50LiQkLm9uX21vdW50ID0gW107XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhZnRlcl91cGRhdGUuZm9yRWFjaChhZGRfcmVuZGVyX2NhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIGRlc3Ryb3lfY29tcG9uZW50KGNvbXBvbmVudCwgZGV0YWNoaW5nKSB7XG4gICAgY29uc3QgJCQgPSBjb21wb25lbnQuJCQ7XG4gICAgaWYgKCQkLmZyYWdtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJ1bl9hbGwoJCQub25fZGVzdHJveSk7XG4gICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LmQoZGV0YWNoaW5nKTtcbiAgICAgICAgLy8gVE9ETyBudWxsIG91dCBvdGhlciByZWZzLCBpbmNsdWRpbmcgY29tcG9uZW50LiQkIChidXQgbmVlZCB0b1xuICAgICAgICAvLyBwcmVzZXJ2ZSBmaW5hbCBzdGF0ZT8pXG4gICAgICAgICQkLm9uX2Rlc3Ryb3kgPSAkJC5mcmFnbWVudCA9IG51bGw7XG4gICAgICAgICQkLmN0eCA9IFtdO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG1ha2VfZGlydHkoY29tcG9uZW50LCBpKSB7XG4gICAgaWYgKGNvbXBvbmVudC4kJC5kaXJ0eVswXSA9PT0gLTEpIHtcbiAgICAgICAgZGlydHlfY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgIHNjaGVkdWxlX3VwZGF0ZSgpO1xuICAgICAgICBjb21wb25lbnQuJCQuZGlydHkuZmlsbCgwKTtcbiAgICB9XG4gICAgY29tcG9uZW50LiQkLmRpcnR5WyhpIC8gMzEpIHwgMF0gfD0gKDEgPDwgKGkgJSAzMSkpO1xufVxuZnVuY3Rpb24gaW5pdChjb21wb25lbnQsIG9wdGlvbnMsIGluc3RhbmNlLCBjcmVhdGVfZnJhZ21lbnQsIG5vdF9lcXVhbCwgcHJvcHMsIGFwcGVuZF9zdHlsZXMsIGRpcnR5ID0gWy0xXSkge1xuICAgIGNvbnN0IHBhcmVudF9jb21wb25lbnQgPSBjdXJyZW50X2NvbXBvbmVudDtcbiAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KTtcbiAgICBjb25zdCAkJCA9IGNvbXBvbmVudC4kJCA9IHtcbiAgICAgICAgZnJhZ21lbnQ6IG51bGwsXG4gICAgICAgIGN0eDogbnVsbCxcbiAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIHVwZGF0ZTogbm9vcCxcbiAgICAgICAgbm90X2VxdWFsLFxuICAgICAgICBib3VuZDogYmxhbmtfb2JqZWN0KCksXG4gICAgICAgIC8vIGxpZmVjeWNsZVxuICAgICAgICBvbl9tb3VudDogW10sXG4gICAgICAgIG9uX2Rlc3Ryb3k6IFtdLFxuICAgICAgICBvbl9kaXNjb25uZWN0OiBbXSxcbiAgICAgICAgYmVmb3JlX3VwZGF0ZTogW10sXG4gICAgICAgIGFmdGVyX3VwZGF0ZTogW10sXG4gICAgICAgIGNvbnRleHQ6IG5ldyBNYXAob3B0aW9ucy5jb250ZXh0IHx8IChwYXJlbnRfY29tcG9uZW50ID8gcGFyZW50X2NvbXBvbmVudC4kJC5jb250ZXh0IDogW10pKSxcbiAgICAgICAgLy8gZXZlcnl0aGluZyBlbHNlXG4gICAgICAgIGNhbGxiYWNrczogYmxhbmtfb2JqZWN0KCksXG4gICAgICAgIGRpcnR5LFxuICAgICAgICBza2lwX2JvdW5kOiBmYWxzZSxcbiAgICAgICAgcm9vdDogb3B0aW9ucy50YXJnZXQgfHwgcGFyZW50X2NvbXBvbmVudC4kJC5yb290XG4gICAgfTtcbiAgICBhcHBlbmRfc3R5bGVzICYmIGFwcGVuZF9zdHlsZXMoJCQucm9vdCk7XG4gICAgbGV0IHJlYWR5ID0gZmFsc2U7XG4gICAgJCQuY3R4ID0gaW5zdGFuY2VcbiAgICAgICAgPyBpbnN0YW5jZShjb21wb25lbnQsIG9wdGlvbnMucHJvcHMgfHwge30sIChpLCByZXQsIC4uLnJlc3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcmVzdC5sZW5ndGggPyByZXN0WzBdIDogcmV0O1xuICAgICAgICAgICAgaWYgKCQkLmN0eCAmJiBub3RfZXF1YWwoJCQuY3R4W2ldLCAkJC5jdHhbaV0gPSB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoISQkLnNraXBfYm91bmQgJiYgJCQuYm91bmRbaV0pXG4gICAgICAgICAgICAgICAgICAgICQkLmJvdW5kW2ldKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVhZHkpXG4gICAgICAgICAgICAgICAgICAgIG1ha2VfZGlydHkoY29tcG9uZW50LCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0pXG4gICAgICAgIDogW107XG4gICAgJCQudXBkYXRlKCk7XG4gICAgcmVhZHkgPSB0cnVlO1xuICAgIHJ1bl9hbGwoJCQuYmVmb3JlX3VwZGF0ZSk7XG4gICAgLy8gYGZhbHNlYCBhcyBhIHNwZWNpYWwgY2FzZSBvZiBubyBET00gY29tcG9uZW50XG4gICAgJCQuZnJhZ21lbnQgPSBjcmVhdGVfZnJhZ21lbnQgPyBjcmVhdGVfZnJhZ21lbnQoJCQuY3R4KSA6IGZhbHNlO1xuICAgIGlmIChvcHRpb25zLnRhcmdldCkge1xuICAgICAgICBpZiAob3B0aW9ucy5oeWRyYXRlKSB7XG4gICAgICAgICAgICBzdGFydF9oeWRyYXRpbmcoKTtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gY2hpbGRyZW4ob3B0aW9ucy50YXJnZXQpO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50Lmwobm9kZXMpO1xuICAgICAgICAgICAgbm9kZXMuZm9yRWFjaChkZXRhY2gpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LmMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5pbnRybylcbiAgICAgICAgICAgIHRyYW5zaXRpb25faW4oY29tcG9uZW50LiQkLmZyYWdtZW50KTtcbiAgICAgICAgbW91bnRfY29tcG9uZW50KGNvbXBvbmVudCwgb3B0aW9ucy50YXJnZXQsIG9wdGlvbnMuYW5jaG9yLCBvcHRpb25zLmN1c3RvbUVsZW1lbnQpO1xuICAgICAgICBlbmRfaHlkcmF0aW5nKCk7XG4gICAgICAgIGZsdXNoKCk7XG4gICAgfVxuICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChwYXJlbnRfY29tcG9uZW50KTtcbn1cbmxldCBTdmVsdGVFbGVtZW50O1xuaWYgKHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFN2ZWx0ZUVsZW1lbnQgPSBjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICBjb25zdCB7IG9uX21vdW50IH0gPSB0aGlzLiQkO1xuICAgICAgICAgICAgdGhpcy4kJC5vbl9kaXNjb25uZWN0ID0gb25fbW91bnQubWFwKHJ1bikuZmlsdGVyKGlzX2Z1bmN0aW9uKTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLiQkLnNsb3R0ZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRvZG86IGltcHJvdmUgdHlwaW5nc1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy4kJC5zbG90dGVkW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyLCBfb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzW2F0dHJdID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICBydW5fYWxsKHRoaXMuJCQub25fZGlzY29ubmVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgJGRlc3Ryb3koKSB7XG4gICAgICAgICAgICBkZXN0cm95X2NvbXBvbmVudCh0aGlzLCAxKTtcbiAgICAgICAgICAgIHRoaXMuJGRlc3Ryb3kgPSBub29wO1xuICAgICAgICB9XG4gICAgICAgICRvbih0eXBlLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgLy8gVE9ETyBzaG91bGQgdGhpcyBkZWxlZ2F0ZSB0byBhZGRFdmVudExpc3RlbmVyP1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdIHx8ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSA9IFtdKSk7XG4gICAgICAgICAgICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAkc2V0KCQkcHJvcHMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiQkc2V0ICYmICFpc19lbXB0eSgkJHByb3BzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJCQuc2tpcF9ib3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kJHNldCgkJHByb3BzKTtcbiAgICAgICAgICAgICAgICB0aGlzLiQkLnNraXBfYm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIFN2ZWx0ZSBjb21wb25lbnRzLiBVc2VkIHdoZW4gZGV2PWZhbHNlLlxuICovXG5jbGFzcyBTdmVsdGVDb21wb25lbnQge1xuICAgICRkZXN0cm95KCkge1xuICAgICAgICBkZXN0cm95X2NvbXBvbmVudCh0aGlzLCAxKTtcbiAgICAgICAgdGhpcy4kZGVzdHJveSA9IG5vb3A7XG4gICAgfVxuICAgICRvbih0eXBlLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBjYWxsYmFja3MgPSAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gfHwgKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdID0gW10pKTtcbiAgICAgICAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjYWxsYmFja3MuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAkc2V0KCQkcHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuJCRzZXQgJiYgIWlzX2VtcHR5KCQkcHJvcHMpKSB7XG4gICAgICAgICAgICB0aGlzLiQkLnNraXBfYm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy4kJHNldCgkJHByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuJCQuc2tpcF9ib3VuZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaXNwYXRjaF9kZXYodHlwZSwgZGV0YWlsKSB7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChjdXN0b21fZXZlbnQodHlwZSwgT2JqZWN0LmFzc2lnbih7IHZlcnNpb246ICczLjQ2LjQnIH0sIGRldGFpbCksIHRydWUpKTtcbn1cbmZ1bmN0aW9uIGFwcGVuZF9kZXYodGFyZ2V0LCBub2RlKSB7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01JbnNlcnQnLCB7IHRhcmdldCwgbm9kZSB9KTtcbiAgICBhcHBlbmQodGFyZ2V0LCBub2RlKTtcbn1cbmZ1bmN0aW9uIGFwcGVuZF9oeWRyYXRpb25fZGV2KHRhcmdldCwgbm9kZSkge1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NSW5zZXJ0JywgeyB0YXJnZXQsIG5vZGUgfSk7XG4gICAgYXBwZW5kX2h5ZHJhdGlvbih0YXJnZXQsIG5vZGUpO1xufVxuZnVuY3Rpb24gaW5zZXJ0X2Rldih0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NSW5zZXJ0JywgeyB0YXJnZXQsIG5vZGUsIGFuY2hvciB9KTtcbiAgICBpbnNlcnQodGFyZ2V0LCBub2RlLCBhbmNob3IpO1xufVxuZnVuY3Rpb24gaW5zZXJ0X2h5ZHJhdGlvbl9kZXYodGFyZ2V0LCBub2RlLCBhbmNob3IpIHtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTUluc2VydCcsIHsgdGFyZ2V0LCBub2RlLCBhbmNob3IgfSk7XG4gICAgaW5zZXJ0X2h5ZHJhdGlvbih0YXJnZXQsIG5vZGUsIGFuY2hvcik7XG59XG5mdW5jdGlvbiBkZXRhY2hfZGV2KG5vZGUpIHtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVJlbW92ZScsIHsgbm9kZSB9KTtcbiAgICBkZXRhY2gobm9kZSk7XG59XG5mdW5jdGlvbiBkZXRhY2hfYmV0d2Vlbl9kZXYoYmVmb3JlLCBhZnRlcikge1xuICAgIHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcgJiYgYmVmb3JlLm5leHRTaWJsaW5nICE9PSBhZnRlcikge1xuICAgICAgICBkZXRhY2hfZGV2KGJlZm9yZS5uZXh0U2libGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGV0YWNoX2JlZm9yZV9kZXYoYWZ0ZXIpIHtcbiAgICB3aGlsZSAoYWZ0ZXIucHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgIGRldGFjaF9kZXYoYWZ0ZXIucHJldmlvdXNTaWJsaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZXRhY2hfYWZ0ZXJfZGV2KGJlZm9yZSkge1xuICAgIHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgZGV0YWNoX2RldihiZWZvcmUubmV4dFNpYmxpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGxpc3Rlbl9kZXYobm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMsIGhhc19wcmV2ZW50X2RlZmF1bHQsIGhhc19zdG9wX3Byb3BhZ2F0aW9uKSB7XG4gICAgY29uc3QgbW9kaWZpZXJzID0gb3B0aW9ucyA9PT0gdHJ1ZSA/IFsnY2FwdHVyZSddIDogb3B0aW9ucyA/IEFycmF5LmZyb20oT2JqZWN0LmtleXMob3B0aW9ucykpIDogW107XG4gICAgaWYgKGhhc19wcmV2ZW50X2RlZmF1bHQpXG4gICAgICAgIG1vZGlmaWVycy5wdXNoKCdwcmV2ZW50RGVmYXVsdCcpO1xuICAgIGlmIChoYXNfc3RvcF9wcm9wYWdhdGlvbilcbiAgICAgICAgbW9kaWZpZXJzLnB1c2goJ3N0b3BQcm9wYWdhdGlvbicpO1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NQWRkRXZlbnRMaXN0ZW5lcicsIHsgbm9kZSwgZXZlbnQsIGhhbmRsZXIsIG1vZGlmaWVycyB9KTtcbiAgICBjb25zdCBkaXNwb3NlID0gbGlzdGVuKG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVJlbW92ZUV2ZW50TGlzdGVuZXInLCB7IG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBtb2RpZmllcnMgfSk7XG4gICAgICAgIGRpc3Bvc2UoKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gYXR0cl9kZXYobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIGF0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgaWYgKHZhbHVlID09IG51bGwpXG4gICAgICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NUmVtb3ZlQXR0cmlidXRlJywgeyBub2RlLCBhdHRyaWJ1dGUgfSk7XG4gICAgZWxzZVxuICAgICAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVNldEF0dHJpYnV0ZScsIHsgbm9kZSwgYXR0cmlidXRlLCB2YWx1ZSB9KTtcbn1cbmZ1bmN0aW9uIHByb3BfZGV2KG5vZGUsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIG5vZGVbcHJvcGVydHldID0gdmFsdWU7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01TZXRQcm9wZXJ0eScsIHsgbm9kZSwgcHJvcGVydHksIHZhbHVlIH0pO1xufVxuZnVuY3Rpb24gZGF0YXNldF9kZXYobm9kZSwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgbm9kZS5kYXRhc2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NU2V0RGF0YXNldCcsIHsgbm9kZSwgcHJvcGVydHksIHZhbHVlIH0pO1xufVxuZnVuY3Rpb24gc2V0X2RhdGFfZGV2KHRleHQsIGRhdGEpIHtcbiAgICBkYXRhID0gJycgKyBkYXRhO1xuICAgIGlmICh0ZXh0Lndob2xlVGV4dCA9PT0gZGF0YSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NU2V0RGF0YScsIHsgbm9kZTogdGV4dCwgZGF0YSB9KTtcbiAgICB0ZXh0LmRhdGEgPSBkYXRhO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVfZWFjaF9hcmd1bWVudChhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ3N0cmluZycgJiYgIShhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gYXJnKSkge1xuICAgICAgICBsZXQgbXNnID0gJ3sjZWFjaH0gb25seSBpdGVyYXRlcyBvdmVyIGFycmF5LWxpa2Ugb2JqZWN0cy4nO1xuICAgICAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBhcmcgJiYgU3ltYm9sLml0ZXJhdG9yIGluIGFyZykge1xuICAgICAgICAgICAgbXNnICs9ICcgWW91IGNhbiB1c2UgYSBzcHJlYWQgdG8gY29udmVydCB0aGlzIGl0ZXJhYmxlIGludG8gYW4gYXJyYXkuJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICB9XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9zbG90cyhuYW1lLCBzbG90LCBrZXlzKSB7XG4gICAgZm9yIChjb25zdCBzbG90X2tleSBvZiBPYmplY3Qua2V5cyhzbG90KSkge1xuICAgICAgICBpZiAoIX5rZXlzLmluZGV4T2Yoc2xvdF9rZXkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYDwke25hbWV9PiByZWNlaXZlZCBhbiB1bmV4cGVjdGVkIHNsb3QgXCIke3Nsb3Rfa2V5fVwiLmApO1xuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBTdmVsdGUgY29tcG9uZW50cyB3aXRoIHNvbWUgbWlub3IgZGV2LWVuaGFuY2VtZW50cy4gVXNlZCB3aGVuIGRldj10cnVlLlxuICovXG5jbGFzcyBTdmVsdGVDb21wb25lbnREZXYgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zIHx8ICghb3B0aW9ucy50YXJnZXQgJiYgIW9wdGlvbnMuJCRpbmxpbmUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCIndGFyZ2V0JyBpcyBhIHJlcXVpcmVkIG9wdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgc3VwZXIuJGRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy4kZGVzdHJveSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignQ29tcG9uZW50IHdhcyBhbHJlYWR5IGRlc3Ryb3llZCcpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgfTtcbiAgICB9XG4gICAgJGNhcHR1cmVfc3RhdGUoKSB7IH1cbiAgICAkaW5qZWN0X3N0YXRlKCkgeyB9XG59XG4vKipcbiAqIEJhc2UgY2xhc3MgdG8gY3JlYXRlIHN0cm9uZ2x5IHR5cGVkIFN2ZWx0ZSBjb21wb25lbnRzLlxuICogVGhpcyBvbmx5IGV4aXN0cyBmb3IgdHlwaW5nIHB1cnBvc2VzIGFuZCBzaG91bGQgYmUgdXNlZCBpbiBgLmQudHNgIGZpbGVzLlxuICpcbiAqICMjIyBFeGFtcGxlOlxuICpcbiAqIFlvdSBoYXZlIGNvbXBvbmVudCBsaWJyYXJ5IG9uIG5wbSBjYWxsZWQgYGNvbXBvbmVudC1saWJyYXJ5YCwgZnJvbSB3aGljaFxuICogeW91IGV4cG9ydCBhIGNvbXBvbmVudCBjYWxsZWQgYE15Q29tcG9uZW50YC4gRm9yIFN2ZWx0ZStUeXBlU2NyaXB0IHVzZXJzLFxuICogeW91IHdhbnQgdG8gcHJvdmlkZSB0eXBpbmdzLiBUaGVyZWZvcmUgeW91IGNyZWF0ZSBhIGBpbmRleC5kLnRzYDpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBTdmVsdGVDb21wb25lbnRUeXBlZCB9IGZyb20gXCJzdmVsdGVcIjtcbiAqIGV4cG9ydCBjbGFzcyBNeUNvbXBvbmVudCBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudFR5cGVkPHtmb286IHN0cmluZ30+IHt9XG4gKiBgYGBcbiAqIFR5cGluZyB0aGlzIG1ha2VzIGl0IHBvc3NpYmxlIGZvciBJREVzIGxpa2UgVlMgQ29kZSB3aXRoIHRoZSBTdmVsdGUgZXh0ZW5zaW9uXG4gKiB0byBwcm92aWRlIGludGVsbGlzZW5zZSBhbmQgdG8gdXNlIHRoZSBjb21wb25lbnQgbGlrZSB0aGlzIGluIGEgU3ZlbHRlIGZpbGVcbiAqIHdpdGggVHlwZVNjcmlwdDpcbiAqIGBgYHN2ZWx0ZVxuICogPHNjcmlwdCBsYW5nPVwidHNcIj5cbiAqIFx0aW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tIFwiY29tcG9uZW50LWxpYnJhcnlcIjtcbiAqIDwvc2NyaXB0PlxuICogPE15Q29tcG9uZW50IGZvbz17J2Jhcid9IC8+XG4gKiBgYGBcbiAqXG4gKiAjIyMjIFdoeSBub3QgbWFrZSB0aGlzIHBhcnQgb2YgYFN2ZWx0ZUNvbXBvbmVudChEZXYpYD9cbiAqIEJlY2F1c2VcbiAqIGBgYHRzXG4gKiBjbGFzcyBBU3ViY2xhc3NPZlN2ZWx0ZUNvbXBvbmVudCBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudDx7Zm9vOiBzdHJpbmd9PiB7fVxuICogY29uc3QgY29tcG9uZW50OiB0eXBlb2YgU3ZlbHRlQ29tcG9uZW50ID0gQVN1YmNsYXNzT2ZTdmVsdGVDb21wb25lbnQ7XG4gKiBgYGBcbiAqIHdpbGwgdGhyb3cgYSB0eXBlIGVycm9yLCBzbyB3ZSBuZWVkIHRvIHNlcGFyYXRlIHRoZSBtb3JlIHN0cmljdGx5IHR5cGVkIGNsYXNzLlxuICovXG5jbGFzcyBTdmVsdGVDb21wb25lbnRUeXBlZCBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudERldiB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICB9XG59XG5mdW5jdGlvbiBsb29wX2d1YXJkKHRpbWVvdXQpIHtcbiAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKERhdGUubm93KCkgLSBzdGFydCA+IHRpbWVvdXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW5maW5pdGUgbG9vcCBkZXRlY3RlZCcpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgSHRtbFRhZywgSHRtbFRhZ0h5ZHJhdGlvbiwgU3ZlbHRlQ29tcG9uZW50LCBTdmVsdGVDb21wb25lbnREZXYsIFN2ZWx0ZUNvbXBvbmVudFR5cGVkLCBTdmVsdGVFbGVtZW50LCBhY3Rpb25fZGVzdHJveWVyLCBhZGRfYXR0cmlidXRlLCBhZGRfY2xhc3NlcywgYWRkX2ZsdXNoX2NhbGxiYWNrLCBhZGRfbG9jYXRpb24sIGFkZF9yZW5kZXJfY2FsbGJhY2ssIGFkZF9yZXNpemVfbGlzdGVuZXIsIGFkZF9zdHlsZXMsIGFkZF90cmFuc2Zvcm0sIGFmdGVyVXBkYXRlLCBhcHBlbmQsIGFwcGVuZF9kZXYsIGFwcGVuZF9lbXB0eV9zdHlsZXNoZWV0LCBhcHBlbmRfaHlkcmF0aW9uLCBhcHBlbmRfaHlkcmF0aW9uX2RldiwgYXBwZW5kX3N0eWxlcywgYXNzaWduLCBhdHRyLCBhdHRyX2RldiwgYXR0cmlidXRlX3RvX29iamVjdCwgYmVmb3JlVXBkYXRlLCBiaW5kLCBiaW5kaW5nX2NhbGxiYWNrcywgYmxhbmtfb2JqZWN0LCBidWJibGUsIGNoZWNrX291dHJvcywgY2hpbGRyZW4sIGNsYWltX2NvbXBvbmVudCwgY2xhaW1fZWxlbWVudCwgY2xhaW1faHRtbF90YWcsIGNsYWltX3NwYWNlLCBjbGFpbV9zdmdfZWxlbWVudCwgY2xhaW1fdGV4dCwgY2xlYXJfbG9vcHMsIGNvbXBvbmVudF9zdWJzY3JpYmUsIGNvbXB1dGVfcmVzdF9wcm9wcywgY29tcHV0ZV9zbG90cywgY3JlYXRlRXZlbnREaXNwYXRjaGVyLCBjcmVhdGVfYW5pbWF0aW9uLCBjcmVhdGVfYmlkaXJlY3Rpb25hbF90cmFuc2l0aW9uLCBjcmVhdGVfY29tcG9uZW50LCBjcmVhdGVfaW5fdHJhbnNpdGlvbiwgY3JlYXRlX291dF90cmFuc2l0aW9uLCBjcmVhdGVfc2xvdCwgY3JlYXRlX3Nzcl9jb21wb25lbnQsIGN1cnJlbnRfY29tcG9uZW50LCBjdXN0b21fZXZlbnQsIGRhdGFzZXRfZGV2LCBkZWJ1ZywgZGVzdHJveV9ibG9jaywgZGVzdHJveV9jb21wb25lbnQsIGRlc3Ryb3lfZWFjaCwgZGV0YWNoLCBkZXRhY2hfYWZ0ZXJfZGV2LCBkZXRhY2hfYmVmb3JlX2RldiwgZGV0YWNoX2JldHdlZW5fZGV2LCBkZXRhY2hfZGV2LCBkaXJ0eV9jb21wb25lbnRzLCBkaXNwYXRjaF9kZXYsIGVhY2gsIGVsZW1lbnQsIGVsZW1lbnRfaXMsIGVtcHR5LCBlbmRfaHlkcmF0aW5nLCBlc2NhcGUsIGVzY2FwZV9hdHRyaWJ1dGVfdmFsdWUsIGVzY2FwZV9vYmplY3QsIGVzY2FwZWQsIGV4Y2x1ZGVfaW50ZXJuYWxfcHJvcHMsIGZpeF9hbmRfZGVzdHJveV9ibG9jaywgZml4X2FuZF9vdXRyb19hbmRfZGVzdHJveV9ibG9jaywgZml4X3Bvc2l0aW9uLCBmbHVzaCwgZ2V0QWxsQ29udGV4dHMsIGdldENvbnRleHQsIGdldF9hbGxfZGlydHlfZnJvbV9zY29wZSwgZ2V0X2JpbmRpbmdfZ3JvdXBfdmFsdWUsIGdldF9jdXJyZW50X2NvbXBvbmVudCwgZ2V0X2N1c3RvbV9lbGVtZW50c19zbG90cywgZ2V0X3Jvb3RfZm9yX3N0eWxlLCBnZXRfc2xvdF9jaGFuZ2VzLCBnZXRfc3ByZWFkX29iamVjdCwgZ2V0X3NwcmVhZF91cGRhdGUsIGdldF9zdG9yZV92YWx1ZSwgZ2xvYmFscywgZ3JvdXBfb3V0cm9zLCBoYW5kbGVfcHJvbWlzZSwgaGFzQ29udGV4dCwgaGFzX3Byb3AsIGlkZW50aXR5LCBpbml0LCBpbnNlcnQsIGluc2VydF9kZXYsIGluc2VydF9oeWRyYXRpb24sIGluc2VydF9oeWRyYXRpb25fZGV2LCBpbnRyb3MsIGludmFsaWRfYXR0cmlidXRlX25hbWVfY2hhcmFjdGVyLCBpc19jbGllbnQsIGlzX2Nyb3Nzb3JpZ2luLCBpc19lbXB0eSwgaXNfZnVuY3Rpb24sIGlzX3Byb21pc2UsIGxpc3RlbiwgbGlzdGVuX2RldiwgbG9vcCwgbG9vcF9ndWFyZCwgbWVyZ2Vfc3NyX3N0eWxlcywgbWlzc2luZ19jb21wb25lbnQsIG1vdW50X2NvbXBvbmVudCwgbm9vcCwgbm90X2VxdWFsLCBub3csIG51bGxfdG9fZW1wdHksIG9iamVjdF93aXRob3V0X3Byb3BlcnRpZXMsIG9uRGVzdHJveSwgb25Nb3VudCwgb25jZSwgb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2ssIHByZXZlbnRfZGVmYXVsdCwgcHJvcF9kZXYsIHF1ZXJ5X3NlbGVjdG9yX2FsbCwgcmFmLCBydW4sIHJ1bl9hbGwsIHNhZmVfbm90X2VxdWFsLCBzY2hlZHVsZV91cGRhdGUsIHNlbGVjdF9tdWx0aXBsZV92YWx1ZSwgc2VsZWN0X29wdGlvbiwgc2VsZWN0X29wdGlvbnMsIHNlbGVjdF92YWx1ZSwgc2VsZiwgc2V0Q29udGV4dCwgc2V0X2F0dHJpYnV0ZXMsIHNldF9jdXJyZW50X2NvbXBvbmVudCwgc2V0X2N1c3RvbV9lbGVtZW50X2RhdGEsIHNldF9kYXRhLCBzZXRfZGF0YV9kZXYsIHNldF9pbnB1dF90eXBlLCBzZXRfaW5wdXRfdmFsdWUsIHNldF9ub3csIHNldF9yYWYsIHNldF9zdG9yZV92YWx1ZSwgc2V0X3N0eWxlLCBzZXRfc3ZnX2F0dHJpYnV0ZXMsIHNwYWNlLCBzcHJlYWQsIHNyY191cmxfZXF1YWwsIHN0YXJ0X2h5ZHJhdGluZywgc3RvcF9wcm9wYWdhdGlvbiwgc3Vic2NyaWJlLCBzdmdfZWxlbWVudCwgdGV4dCwgdGljaywgdGltZV9yYW5nZXNfdG9fYXJyYXksIHRvX251bWJlciwgdG9nZ2xlX2NsYXNzLCB0cmFuc2l0aW9uX2luLCB0cmFuc2l0aW9uX291dCwgdHJ1c3RlZCwgdXBkYXRlX2F3YWl0X2Jsb2NrX2JyYW5jaCwgdXBkYXRlX2tleWVkX2VhY2gsIHVwZGF0ZV9zbG90LCB1cGRhdGVfc2xvdF9iYXNlLCB2YWxpZGF0ZV9jb21wb25lbnQsIHZhbGlkYXRlX2VhY2hfYXJndW1lbnQsIHZhbGlkYXRlX2VhY2hfa2V5cywgdmFsaWRhdGVfc2xvdHMsIHZhbGlkYXRlX3N0b3JlLCB4bGlua19hdHRyIH07XG4iLCI8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbjxzdmcgd2lkdGg9XCIyNTZweFwiIGhlaWdodD1cIjI1NnB4XCIgdmlld0JveD1cIjAgMCAyNTYgMjU2XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgICA8dGl0bGU+aWNvbi1ib2xkLWNvbXBsZXRlPC90aXRsZT5cbiAgICA8ZyBpZD1cImljb24tYm9sZC1jb21wbGV0ZVwiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgICAgPHBhdGggZD1cIk0xMjguMTU5NTc0LDI1NiBDMTQzLjQ4OTM2MiwyNTYgMTU3LjEyMjM0LDI1NC4wMzc5NzggMTY5LjA1ODUxMSwyNTAuMTEzOTMzIEMxODAuOTk0NjgxLDI0Ni4xODk4ODggMTkxLjAyOTI1NSwyNDAuNzQzMDc5IDE5OS4xNjIyMzQsMjMzLjc3MzUwNyBDMjA3LjI5NTIxMywyMjYuODAzOTM1IDIxMy40NjgwODUsMjE4LjYzMzcyMiAyMTcuNjgwODUxLDIwOS4yNjI4NjkgQzIyMS44OTM2MTcsMTk5Ljg5MjAxNiAyMjQsMTg5Ljc1OTc4IDIyNCwxNzguODY2MTYzIEMyMjQsMTY0LjM0MTM0MSAyMTkuOTYyNzY2LDE1Mi41MTA2MzggMjExLjg4ODI5OCwxNDMuMzc0MDU2IEMyMDMuODEzODMsMTM0LjIzNzQ3NCAxOTEuMzUxMDY0LDEyNy42MTkzMDkgMTc0LjUsMTIzLjUxOTU2MSBDMTgyLjIyMzQwNCwxMjAuNzA4MzA1IDE4OC44MzUxMDYsMTE3LjM2OTkzOCAxOTQuMzM1MTA2LDExMy41MDQ0NjEgQzE5OS44MzUxMDYsMTA5LjYzODk4NCAyMDQuMzQwNDI2LDEwNS4zOTI4MTYgMjA3Ljg1MTA2NCwxMDAuNzY1OTU3IEMyMTEuMzYxNzAyLDk2LjEzOTA5ODYgMjEzLjkzNjE3LDkxLjE2MDgzMjggMjE1LjU3NDQ2OCw4NS44MzExNTk5IEMyMTcuMjEyNzY2LDgwLjUwMTQ4NzEgMjE4LjAzMTkxNSw3NC45NjY4MjY4IDIxOC4wMzE5MTUsNjkuMjI3MTc5MSBDMjE4LjAzMTkxNSw1OC42ODQ5NjkxIDIxNi4yNDczNCw0OS4xMzg0MTIzIDIxMi42NzgxOTEsNDAuNTg3NTA4NiBDMjA5LjEwOTA0MywzMi4wMzY2MDQ5IDIwMy40MDQyNTUsMjQuNzc0MTkzNSAxOTUuNTYzODMsMTguODAwMjc0NSBDMTg3LjcyMzQwNCwxMi44MjYzNTU1IDE3Ny42MDEwNjQsOC4xOTk0OTY2OCAxNjUuMTk2ODA5LDQuOTE5Njk4MDEgQzE1Mi43OTI1NTMsMS42Mzk4OTkzNCAxMzcuNzU1MzE5LDAgMTIwLjA4NTEwNiwwIEwxMjAuMDg1MTA2LDAgTDI2LDAgTDI2LDI1NiBMMTI4LjE1OTU3NCwyNTYgWiBNMTE2LjczNjg0MiwxMDggTDg2LDEwOCBMODYsNDUgTDEyMC41Nzg5NDcsNDUgQzEyNy4yMTUzMTEsNDUgMTMyLjk0OTM2Miw0NS41MjUgMTM3Ljc4MTEsNDYuNTc1IEMxNDIuNjEyODM5LDQ3LjYyNSAxNDYuNjAwNDc4LDQ5LjM3NSAxNDkuNzQ0MDE5LDUxLjgyNSBDMTUyLjg4NzU2LDU0LjI3NSAxNTUuMjE2MTA4LDU3LjUxMjUgMTU2LjcyOTY2NSw2MS41Mzc1IEMxNTguMjQzMjIyLDY1LjU2MjUgMTU5LDcwLjYwODMzMzMgMTU5LDc2LjY3NSBDMTU5LDgyLjg1ODMzMzMgMTU4LjAzOTQ3NCw4Ny45OTE2NjY3IDE1Ni4xMTg0MjEsOTIuMDc1IEMxNTQuMTk3MzY4LDk2LjE1ODMzMzMgMTUxLjQwMzExLDk5LjM2NjY2NjcgMTQ3LjczNTY0NiwxMDEuNyBDMTQ0LjA2ODE4MiwxMDQuMDMzMzMzIDEzOS42MTQ4MzMsMTA1LjY2NjY2NyAxMzQuMzc1NTk4LDEwNi42IEMxMjkuMTM2MzY0LDEwNy41MzMzMzMgMTIzLjI1Njc3OCwxMDggMTE2LjczNjg0MiwxMDggTDExNi43MzY4NDIsMTA4IFogTTEyNi43NTQzODYsMjExIEw4NSwyMTEgTDg1LDE0NyBMMTI2LjQwMzUwOSwxNDcgQzEzMy44ODg4ODksMTQ3IDE0MC4wODc3MTksMTQ3LjcwNTIzNCAxNDUsMTQ5LjExNTcwMiBDMTQ5LjkxMjI4MSwxNTAuNTI2MTcxIDE1My44NTk2NDksMTUyLjUyNDMzNCAxNTYuODQyMTA1LDE1NS4xMTAxOTMgQzE1OS44MjQ1NjEsMTU3LjY5NjA1MSAxNjEuOTI5ODI1LDE2MC44Njk2MDUgMTYzLjE1Nzg5NSwxNjQuNjMwODU0IEMxNjQuMzg1OTY1LDE2OC4zOTIxMDMgMTY1LDE3Mi42MjM1MDggMTY1LDE3Ny4zMjUwNjkgQzE2NSwxODEuNDM4OTM1IDE2NC40NzM2ODQsMTg1LjQ5NDAzMSAxNjMuNDIxMDUzLDE4OS40OTAzNTggQzE2Mi4zNjg0MjEsMTkzLjQ4NjY4NSAxNjAuNDM4NTk2LDE5Ny4wNzE2MjUgMTU3LjYzMTU3OSwyMDAuMjQ1MTc5IEMxNTQuODI0NTYxLDIwMy40MTg3MzMgMTUwLjkzNTY3MywyMDYuMDA0NTkxIDE0NS45NjQ5MTIsMjA4LjAwMjc1NSBDMTQwLjk5NDE1MiwyMTAuMDAwOTE4IDEzNC41OTA2NDMsMjExIDEyNi43NTQzODYsMjExIEwxMjYuNzU0Mzg2LDIxMSBaXCIgaWQ9XCJCXCIgIGZpbGwtcnVsZT1cIm5vbnplcm9cIj48L3BhdGg+XG4gICAgPC9nPlxuPC9zdmc+IiwiPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG48c3ZnIHdpZHRoPVwiMjU2cHhcIiBoZWlnaHQ9XCIyNTZweFwiIHZpZXdCb3g9XCIwIDAgMjU2IDI1NlwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gICAgPHRpdGxlPmljb24taXRhbGljLWNvbXBsZXRlPC90aXRsZT5cbiAgICA8ZyBpZD1cImljb24taXRhbGljLWNvbXBsZXRlXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiAgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxuICAgICAgICA8cG9seWdvbiBpZD1cIklcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCIgcG9pbnRzPVwiMTQxLjA5MDcgMjU2IDE3Mi4zOTkgLTEuMTM2ODY4MzhlLTEzIDExNC43MDczIC0xLjEzNjg2ODM4ZS0xMyA4My4zOTkgMjU2XCI+PC9wb2x5Z29uPlxuICAgIDwvZz5cbjwvc3ZnPiIsIjw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuPHN2ZyB3aWR0aD1cIjI1NnB4XCIgaGVpZ2h0PVwiMjU2cHhcIiB2aWV3Qm94PVwiMCAwIDI1NiAyNTZcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICAgIDx0aXRsZT5pY29uLXVuZGVybGluZS1jb21wbGV0ZTwvdGl0bGU+XG4gICAgPGcgaWQ9XCJpY29uLXVuZGVybGluZS1jb21wbGV0ZVwiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgICAgPHBhdGggZD1cIk0yMTgsMjMyLjUzNyBMMjE4LDI1NS44NjEgTDM5LDI1NS44NjEgTDM5LDIzMi41MzcgTDIxOCwyMzIuNTM3IFogTTg1LjA1NDMxMzEsMC4xOTkgTDg1LjA1NDMxMzEsMTIzLjA5MTA1NyBMODUuMDU4NDE0MiwxMjMuOTMyMDA4IEM4NS4xMjY3NjY0LDEzMC45MTA5MzIgODYuMDQ5NTIwOCwxMzcuMTY0ODk5IDg3LjgyNjY3NzMsMTQyLjY5MzkwOCBDODkuNjc0OTIwMSwxNDguNDQ0MDc4IDkyLjM1MjUwMjcsMTUzLjMzODg1MSA5NS44NTk0MjQ5LDE1Ny4zNzgyMjYgQzk5LjM2NjM0NzIsMTYxLjQxNzYwMSAxMDMuNjU1MjE4LDE2NC41MDY1MzYgMTA4LjcyNjAzOCwxNjYuNjQ1MDI5IEMxMTMuNzk2ODU4LDE2OC43ODM1MjEgMTE5LjU1NDg0NiwxNjkuODUyNzY4IDEyNiwxNjkuODUyNzY4IEMxMzIuNDQ1MTU0LDE2OS44NTI3NjggMTM4LjIwMzE0MiwxNjguNzgzNTIxIDE0My4yNzM5NjIsMTY2LjY0NTAyOSBDMTQ4LjM0NDc4MiwxNjQuNTA2NTM2IDE1Mi42MzM2NTMsMTYxLjQ0MTM2MyAxNTYuMTQwNTc1LDE1Ny40NDk1MDkgQzE1OS42NDc0OTcsMTUzLjQ1NzY1NiAxNjIuMzI1MDgsMTQ4LjU4NjY0NCAxNjQuMTczMzIzLDE0Mi44MzY0NzUgQzE2Ni4wMjE1NjUsMTM3LjA4NjMwNSAxNjYuOTQ1Njg3LDEzMC41NTIwMjEgMTY2Ljk0NTY4NywxMjMuMjMzNjIzIEwxNjYuOTQ1Njg3LDEyMy4yMzM2MjMgTDE2Ni45NDU2ODcsMC4xOTkgTDIxNSwwLjE5OSBMMjE1LDEyMy4yMzM2MjMgTDIxNC45OTU0ODIsMTI0LjI2Mzk3NCBDMjE0Ljg4NzA2MiwxMzYuNjAwNjg4IDIxMi44MjcwNjYsMTQ3Ljk0NzY2NSAyMDguODE1NDk1LDE1OC4zMDQ5MDYgQzIwNC42OTI0OTIsMTY4Ljk0OTg0OSAxOTguNzkyMzMyLDE3OC4xMjE2MDcgMTkxLjExNTAxNiwxODUuODIwMTgxIEMxODMuNDM3NywxOTMuNTE4NzU2IDE3NC4xMDE3MDQsMTk5LjUwNjUzNiAxNjMuMTA3MDI5LDIwMy43ODM1MjEgQzE1Mi4xMTIzNTQsMjA4LjA2MDUwNyAxMzkuNzQzMzQ0LDIxMC4xOTkgMTI2LDIxMC4xOTkgQzExMi4xNjE4NzQsMjEwLjE5OSA5OS43NDU0NzM5LDIwOC4wNjA1MDcgODguNzUwNzk4NywyMDMuNzgzNTIxIEM3Ny43NTYxMjM1LDE5OS41MDY1MzYgNjguNDIwMTI3OCwxOTMuNTE4NzU2IDYwLjc0MjgxMTUsMTg1LjgyMDE4MSBDNTMuMDY1NDk1MiwxNzguMTIxNjA3IDQ3LjE4OTAzMDksMTY4Ljk0OTg0OSA0My4xMTM0MTg1LDE1OC4zMDQ5MDYgQzM5LjAzNzgwNjIsMTQ3LjY1OTk2NCAzNywxMzUuOTY5NTM2IDM3LDEyMy4yMzM2MjMgTDM3LDEyMy4yMzM2MjMgTDM3LDAuMTk5IEw4NS4wNTQzMTMxLDAuMTk5IFpcIiBpZD1cIkNvbWJpbmVkLVNoYXBlXCIgZmlsbC1ydWxlPVwibm9uemVyb1wiPjwvcGF0aD5cbiAgICA8L2c+XG48L3N2Zz4iLCI8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbjxzdmcgd2lkdGg9XCIyNTZweFwiIGhlaWdodD1cIjI1NnB4XCIgdmlld0JveD1cIjAgMCAyNTYgMjU2XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgICA8dGl0bGU+aWNvbi1saXN0LWNvbXBsZXRlPC90aXRsZT5cbiAgICA8ZyBpZD1cImljb24tbGlzdC1jb21wbGV0ZVwiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxuICAgICAgICA8cGF0aCBkPVwiTTE1LjkwMjYzNjksMTg4IEMxOC41NDIyNTgzLDE4OCAyMC44MjQ4ODE3LDE4OC4yNzc5NCAyMi43NTA1MDcxLDE4OC44MzM4MTkgQzI0LjY3NjEzMjUsMTg5LjM4OTY5OSAyNi4yNTU1NzgxLDE5MC4xNTkzNzggMjcuNDg4ODQzOCwxOTEuMTQyODU3IEMyOC43MjIxMDk1LDE5Mi4xMjYzMzYgMjkuNjMwODMxNiwxOTMuMjgwODU1IDMwLjIxNTAxMDEsMTk0LjYwNjQxNCBDMzAuNzk5MTg4NiwxOTUuOTMxOTczIDMxLjA5MTI3NzksMTk3LjM2NDQzMSAzMS4wOTEyNzc5LDE5OC45MDM3OSBDMzEuMDkxMjc3OSwyMDEuNDY5Mzg4IDMwLjUxNzkxNzUsMjAzLjUxMTE3NiAyOS4zNzExOTY4LDIwNS4wMjkxNTUgQzI4LjIyNDQ3NiwyMDYuNTQ3MTMzIDI2Ljg1MDU3NDcsMjA3LjczMzcyMiAyNS4yNDk0OTI5LDIwOC41ODg5MjEgQzI3LjE1MzQ4MjEsMjA5LjM1ODYwMSAyOC43NTQ1NjM5LDIxMC41MTMxMiAzMC4wNTI3MzgzLDIxMi4wNTI0NzggQzMxLjM1MDkxMjgsMjEzLjU5MTgzNyAzMiwyMTUuNjY1Njk1IDMyLDIxOC4yNzQwNTIgQzMyLDIyMC4zMjY1MzEgMzEuNjUzODIwMSwyMjIuMTg2NTg5IDMwLjk2MTQ2MDQsMjIzLjg1NDIyNyBDMzAuMjY5MTAwNywyMjUuNTIxODY2IDI5LjIzMDU2MTIsMjI2Ljk2NTAxNSAyNy44NDU4NDE4LDIyOC4xODM2NzMgQzI2LjQ2MTEyMjQsMjI5LjQwMjMzMiAyNC43MDg1ODY5LDIzMC4zNDMwNTIgMjIuNTg4MjM1MywyMzEuMDA1ODMxIEMyMC40Njc4ODM3LDIzMS42Njg2MSAxNy45NTgwNzk4LDIzMiAxNS4wNTg4MjM1LDIzMiBDMTEuODk5OTMyNCwyMzIgOS40MDA5NDY1OSwyMzEuNzIyMDYgNy41NjE4NjYxMywyMzEuMTY2MTgxIEM1LjcyMjc4NTY3LDIzMC42MTAzMDEgNC4yMTkwNjY5NCwyMzAuMDExNjYyIDMuMDUwNzA5OTQsMjI5LjM3MDI2MiBDMi4xNDE5ODc4MywyMjguODk5OTAzIDEuNDI3OTkxODksMjI4LjI5MDU3MyAwLjkwODcyMjExLDIyNy41NDIyNzQgQzAuMzg5NDUyMzMzLDIyNi43OTM5NzUgMC4xMjk4MTc0NDQsMjI2LjA1NjM2NSAwLjEyOTgxNzQ0NCwyMjUuMzI5NDQ2IEMwLjEyOTgxNzQ0NCwyMjQuNDc0MjQ3IDAuMzQ2MTc5ODUxLDIyMy41MTIxNDggMC43Nzg5MDQ2NjUsMjIyLjQ0MzE0OSBDMS4yMTE2Mjk0OCwyMjEuMzc0MTUgMi4wNzcwNzkxMSwyMTkuODU2MTcxIDMuMzc1MjUzNTUsMjE3Ljg4OTIxMyBDNC42MzAxNTU1MSwyMTkuMDAwOTcyIDYuMTY2MzI4NiwyMjAuMDA1ODMxIDcuOTgzNzcyODIsMjIwLjkwMzc5IEM5LjgwMTIxNzA0LDIyMS44MDE3NDkgMTEuODEzMzg3NCwyMjIuMjUwNzI5IDE0LjAyMDI4NCwyMjIuMjUwNzI5IEMxNS40OTE1NDgzLDIyMi4yNTA3MjkgMTYuNjcwNzIzNSwyMjEuODc2NTc5IDE3LjU1NzgwOTMsMjIxLjEyODI4IEMxOC40NDQ4OTUyLDIyMC4zNzk5ODEgMTguODg4NDM4MSwyMTkuMjc4OTEyIDE4Ljg4ODQzODEsMjE3LjgyNTA3MyBDMTguODg4NDM4MSwyMTYuODg0MzU0IDE4LjcyNjE2NjMsMjE2LjEzNjA1NCAxOC40MDE2MjI3LDIxNS41ODAxNzUgQzE4LjA3NzA3OTEsMjE1LjAyNDI5NSAxNy42NzY4MDg3LDIxNC41OTY2OTYgMTcuMjAwODExNCwyMTQuMjk3Mzc2IEMxNi43MjQ4MTQxLDIxMy45OTgwNTYgMTYuMTk0NzI2MiwyMTMuNzk0OTQ3IDE1LjYxMDU0NzcsMjEzLjY4ODA0NyBDMTUuMDI2MzY5MiwyMTMuNTgxMTQ3IDE0LjQ1MzAwODgsMjEzLjUyNzY5NyAxMy44OTA0NjY1LDIxMy41Mjc2OTcgTDEzLjg5MDQ2NjUsMjEzLjUyNzY5NyBMOS4yODE5NDcyNiwyMTMuNTI3Njk3IEw5LjI4MTk0NzI2LDIwNC42NzYzODUgTDEzLjgyNTU1NzgsMjA0LjY3NjM4NSBMMTQuMDgzMTY0MywyMDQuNjY5NzA0IEMxNS4wMjAyODQsMjA0LjYyMDcwOCAxNS44NzU1OTE2LDIwNC4zMDIyMzUgMTYuNjQ5MDg3MiwyMDMuNzE0Mjg2IEMxNy40OTI5MDA2LDIwMy4wNzI4ODYgMTcuOTE0ODA3MywyMDIuMTUzNTQ3IDE3LjkxNDgwNzMsMjAwLjk1NjI2OCBDMTcuOTE0ODA3MywxOTkuNzU4OTg5IDE3LjUyNTM1NSwxOTguOTAzNzkgMTYuNzQ2NDUwMywxOTguMzkwNjcxIEMxNS45Njc1NDU2LDE5Ny44Nzc1NTEgMTQuOTUwNjQyMywxOTcuNjIwOTkxIDEzLjY5NTc0MDQsMTk3LjYyMDk5MSBDMTIuMDUxMzg2MSwxOTcuNjIwOTkxIDEwLjQ3MTk0MDUsMTk3Ljk0MTY5MSA4Ljk1NzQwMzY1LDE5OC41ODMwOSBDNy40NDI4NjY4LDE5OS4yMjQ0OSA1LjcxMTk2NzU1LDIwMC4yMjkzNDkgMy43NjQ3MDU4OCwyMDEuNTk3NjY4IEMyLjU5NjM0ODg4LDIwMC4yNzIxMDkgMS42NzY4MDg2NSwxOTkuMDk2MjEgMS4wMDYwODUxOSwxOTguMDY5OTcxIEMwLjMzNTM2MTczMSwxOTcuMDQzNzMyIDAsMTk2LjA2MDI1MyAwLDE5NS4xMTk1MzQgQzAsMTk0LjMwNzA5NCAwLjIyNzE4MDUyNywxOTMuNjIyOTM1IDAuNjgxNTQxNTgyLDE5My4wNjcwNTUgQzEuMTM1OTAyNjQsMTkyLjUxMTE3NiAxLjY2NTk5MDUzLDE5Mi4wMTk0MzYgMi4yNzE4MDUyNywxOTEuNTkxODM3IEMzLjUyNjcwNzIzLDE5MC43MzY2MzggNS4yOTAwNjA4NSwxODkuOTI0MTk4IDcuNTYxODY2MTMsMTg5LjE1NDUxOSBDOS44MzM2NzE0LDE4OC4zODQ4NCAxMi42MTM5MjgzLDE4OCAxNS45MDI2MzY5LDE4OCBaIE0yNTYsMTkxIEwyNTYsMjMxIEw1OCwyMzEgTDU4LDE5MSBMMjU2LDE5MSBaIE0yNTYsMTEwIEwyNTYsMTUwIEw1OCwxNTAgTDU4LDExMCBMMjU2LDExMCBaIE0xNy4wNzUyNDc1LDEwNiBDMTkuMTY2MzM2NiwxMDYgMjEuMTQ4NTE0OSwxMDYuMjI0MjkyIDIzLjAyMTc4MjIsMTA2LjY3Mjg3NiBDMjQuODk1MDQ5NSwxMDcuMTIxNDYxIDI2LjUzOTYwNCwxMDcuODU4NDIgMjcuOTU1NDQ1NSwxMDguODgzNzU2IEMyOS4zNzEyODcxLDEwOS45MDkwOTEgMzAuNDkzMDY5MywxMTEuMjQ0MTYzIDMxLjMyMDc5MjEsMTEyLjg4ODk3MiBDMzIuMTQ4NTE0OSwxMTQuNTMzNzggMzIuNTYyMzc2MiwxMTYuNTMxMDQ4IDMyLjU2MjM3NjIsMTE4Ljg4MDc3NSBDMzIuNTYyMzc2MiwxMjAuNDE4Nzc4IDMyLjM0NDU1NDUsMTIxLjkwMzM3OCAzMS45MDg5MTA5LDEyMy4zMzQ1NzUgQzMxLjQ3MzI2NzMsMTI0Ljc2NTc3MiAzMC44NzQyNTc0LDEyNi4xNDM1NjcgMzAuMTExODgxMiwxMjcuNDY3OTU4IEMyOS4zNDk1MDUsMTI4Ljc5MjM1IDI4LjQ2NzMyNjcsMTMwLjA3NDAxOSAyNy40NjUzNDY1LDEzMS4zMTI5NjYgQzI2LjQ2MzM2NjMsMTMyLjU1MTkxMyAyNS4zOTYwMzk2LDEzMy43MjY3NzYgMjQuMjYzMzY2MywxMzQuODM3NTU2IEMyMy40NzkyMDc5LDEzNS42MDY1NTcgMjIuNjk1MDQ5NSwxMzYuMzY0ODc4IDIxLjkxMDg5MTEsMTM3LjExMjUxOSBDMjEuMTI2NzMyNywxMzcuODYwMTU5IDIwLjMyMDc5MjEsMTM4LjU3NTc1OCAxOS40OTMwNjkzLDEzOS4yNTkzMTQgTDE5LjQ5MzA2OTMsMTM5LjI1OTMxNCBMMjcuMDA3OTIwOCwxMzkuMjU5MzE0IEwyNy4zODA1MzcyLDEzOS4yNjM3NjUgQzI5LjQ2NDAyOTUsMTM5LjMxNDIwMSAzMS4wNzE1MDcyLDEzOS43OTMzNDMgMzIuMjAyOTcwMywxNDAuNzAxMTkyIEMzMy40MDA5OTAxLDE0MS42NjI0NDQgMzQsMTQzLjE0NzA0NCAzNCwxNDUuMTU0OTkzIEMzNCwxNDUuNzUzMTA1IDMzLjk4OTEwODksMTQ2LjI3NjQ1MyAzMy45NjczMjY3LDE0Ni43MjUwMzcgQzMzLjk0NTU0NDYsMTQ3LjE3MzYyMSAzMy45MzQ2NTM1LDE0Ny41Njg4MDMgMzMuOTM0NjUzNSwxNDcuOTEwNTgxIEMzMy44OTEwODkxLDE0OC4zMzc4MDQgMzMuODY5MzA2OSwxNDguNzAwOTQ0IDMzLjg2OTMwNjksMTQ5IEwzMy44NjkzMDY5LDE0OSBMMi4xMTA4OTEwOSwxNDkgTDIuMTEwODkxMDksMTQwLjQ3NjkgTDIuNDg4OTY3NDcsMTQwLjE5NTA2NCBDMy4yNTQ0NTU0NSwxMzkuNjE3MDA1IDQuMDc1OTU0NzQsMTM4Ljk1MjYyOSA0Ljk1MzQ2NTM1LDEzOC4yMDE5MzcgQzUuOTc3MjI3NzIsMTM3LjMyNjEzIDcuMDQ0NTU0NDYsMTM2LjM5NjkyIDguMTU1NDQ1NTQsMTM1LjQxNDMwNyBDOS4yNjYzMzY2MywxMzQuNDMxNjk0IDEwLjM3NzIyNzcsMTMzLjM5NTY3OCAxMS40ODgxMTg4LDEzMi4zMDYyNTkgQzEyLjU5OTAwOTksMTMxLjIxNjg0MSAxMy42NzcyMjc3LDEzMC4xMzgxMDIgMTQuNzIyNzcyMywxMjkuMDcwMDQ1IEMxNi4yMDM5NjA0LDEyNy41MzIwNDIgMTcuMzU4NDE1OCwxMjYuMDkwMTY0IDE4LjE4NjEzODYsMTI0Ljc0NDQxMSBDMTkuMDEzODYxNCwxMjMuMzk4NjU5IDE5LjQyNzcyMjgsMTIxLjk1Njc4MSAxOS40Mjc3MjI4LDEyMC40MTg3NzggQzE5LjQyNzcyMjgsMTE5LjU2NDMzMiAxOS4yODYxMzg2LDExOC44NTk0MTQgMTkuMDAyOTcwMywxMTguMzA0MDI0IEMxOC43MTk4MDIsMTE3Ljc0ODYzNCAxOC4zNDk1MDUsMTE3LjMwMDA1IDE3Ljg5MjA3OTIsMTE2Ljk1ODI3MSBDMTcuNDM0NjUzNSwxMTYuNjE2NDkzIDE2LjkxMTg4MTIsMTE2LjM3MDg0IDE2LjMyMzc2MjQsMTE2LjIyMTMxMSBDMTUuNzM1NjQzNiwxMTYuMDcxNzgzIDE1LjE1ODQxNTgsMTE1Ljk5NzAxOSAxNC41OTIwNzkyLDExNS45OTcwMTkgQzEyLjg0OTUwNSwxMTUuOTk3MDE5IDExLjE2MTM4NjEsMTE2LjQwMjg4MSA5LjUyNzcyMjc3LDExNy4yMTQ2MDUgQzcuODk0MDU5NDEsMTE4LjAyNjMyOSA2LjQyMzc2MjM4LDExOC45NjYyMiA1LjExNjgzMTY4LDEyMC4wMzQyNzcgQzMuOTQwNTk0MDYsMTE4LjcwOTg4NiAyLjk2MDM5NjA0LDExNy40NjAyNTggMi4xNzYyMzc2MiwxMTYuMjg1Mzk1IEMxLjM5MjA3OTIxLDExNS4xMTA1MzIgMSwxMTQuMDk1ODc3IDEsMTEzLjI0MTQzMSBDMSwxMTIuNTU3ODc0IDEuMTg1MTQ4NTEsMTExLjk1OTc2MiAxLjU1NTQ0NTU0LDExMS40NDcwOTQgQzEuOTI1NzQyNTcsMTEwLjkzNDQyNiAyLjQzNzYyMzc2LDExMC40NDMxMiAzLjA5MTA4OTExLDEwOS45NzMxNzQgQzMuNzAwOTkwMSwxMDkuNTQ1OTUxIDQuNDQxNTg0MTYsMTA5LjA5NzM2NyA1LjMxMjg3MTI5LDEwOC42Mjc0MjIgQzYuMTg0MTU4NDIsMTA4LjE1NzQ3NiA3LjE5NzAyOTcsMTA3LjczMDI1MyA4LjM1MTQ4NTE1LDEwNy4zNDU3NTMgQzkuNTA1OTQwNTksMTA2Ljk2MTI1MiAxMC44MDE5ODAyLDEwNi42NDA4MzUgMTIuMjM5NjA0LDEwNi4zODQ1MDEgQzEzLjY3NzIyNzcsMTA2LjEyODE2NyAxNS4yODkxMDg5LDEwNiAxNy4wNzUyNDc1LDEwNiBaIE0yNTYsMjggTDI1Niw2OCBMNTgsNjggTDU4LDI4IEwyNTYsMjggWiBNMjIuOTM2OTg2MywyNSBDMjQuMTY0MzgzNiwyNSAyNS4xOTQ1MjA1LDI1LjE0MDEwMDMgMjYuMDI3Mzk3MywyNS40MjAzMDA4IEMyNi44NjAyNzQsMjUuNzAwNTAxMyAyNy41MTc4MDgyLDI1Ljk5MTQ3ODcgMjgsMjYuMjkzMjMzMSBMMjgsMjYuMjkzMjMzMSBMMjgsNjggTDE1LjA0NjU3NTMsNjggTDE1LjA0NjU3NTMsNDAuMDAxNTAzOCBMNy40MTkxNzgwOCw0My42MjI1NTY0IEw2LjkyNjAyNzQsNDIuODY4NjAxNSBDNi4yNzcyNjAyNyw0MS44NTgxNTU0IDUuNjYzNTYxNjQsNDAuODI3MDE3NSA1LjA4NDkzMTUxLDM5Ljc3NTE4OCBDNC4zNjE2NDM4NCwzOC40NjA0MDEgNCwzNy4yNDI2MDY1IDQsMzYuMTIxODA0NSBDNCwzNS4wMDEwMDI1IDQuMjMwMTM2OTksMzQuMTQ5NjI0MSA0LjY5MDQxMDk2LDMzLjU2NzY2OTIgQzUuMTUwNjg0OTMsMzIuOTg1NzE0MyA2LjAzODM1NjE2LDMyLjM0OTg3NDcgNy4zNTM0MjQ2NiwzMS42NjAxNTA0IEw3LjM1MzQyNDY2LDMxLjY2MDE1MDQgTDE3LjE1MDY4NDksMjYuNjE2NTQxNCBMMTcuNjA5MTMyNCwyNi4zODY2MzMyIEMxOC4zNzAxNjc0LDI2LjAxNTQyNzUgMTkuMTE1OTgxNywyNS43MDQwOTM2IDE5Ljg0NjU3NTMsMjUuNDUyNjMxNiBDMjAuNzIzMjg3NywyNS4xNTA4NzcyIDIxLjc1MzQyNDcsMjUgMjIuOTM2OTg2MywyNSBaXCIgaWQ9XCJDb21iaW5lZC1TaGFwZVwiICBmaWxsLXJ1bGU9XCJub256ZXJvXCI+PC9wYXRoPlxuICAgIDwvZz5cbjwvc3ZnPiIsIjw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuPHN2ZyB3aWR0aD1cIjI1NnB4XCIgaGVpZ2h0PVwiMjU2cHhcIiB2aWV3Qm94PVwiMCAwIDI1NiAyNTZcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICAgIDx0aXRsZT5pY29uLWJ1bGxldC1jb21wbGV0ZTwvdGl0bGU+XG4gICAgPGcgaWQ9XCJpY29uLWJ1bGxldC1jb21wbGV0ZVwiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgICAgPHBhdGggZD1cIk0yNTYsMTg4IEwyNTYsMjI3IEw2NywyMjcgTDY3LDE4OCBMMjU2LDE4OCBaIE00MSwxODggTDQxLDIyNyBMMCwyMjcgTDAsMTg4IEw0MSwxODggWiBNMjU2LDEwOSBMMjU2LDE0OCBMNjcsMTQ4IEw2NywxMDkgTDI1NiwxMDkgWiBNNDEsMTA5IEw0MSwxNDggTDAsMTQ4IEwwLDEwOSBMNDEsMTA5IFogTTI1NiwzMCBMMjU2LDY5IEw2Nyw2OSBMNjcsMzAgTDI1NiwzMCBaIE00MSwzMCBMNDEsNjkgTDAsNjkgTDAsMzAgTDQxLDMwIFpcIiBpZD1cIkNvbWJpbmVkLVNoYXBlXCIgIGZpbGwtcnVsZT1cIm5vbnplcm9cIj48L3BhdGg+XG4gICAgPC9nPlxuPC9zdmc+IiwiPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG48c3ZnIHdpZHRoPVwiMjU2cHhcIiBoZWlnaHQ9XCIyNTZweFwiIHZpZXdCb3g9XCIwIDAgMjU2IDI1NlwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gICAgPHRpdGxlPmljb24tYWxpZ25lZC1sZWZ0LWNvbXBsZXRlPC90aXRsZT5cbiAgICA8ZyBpZD1cImljb24tYWxpZ25lZC1sZWZ0LWNvbXBsZXRlXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiAgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxuICAgICAgICA8cGF0aCBkPVwiTTI1NiwxOTAgTDI1NiwyMzIgTDAsMjMyIEwwLDE5MCBMMjU2LDE5MCBaIE0xNjIsMTA3IEwxNjIsMTQ5IEwwLDE0OSBMMCwxMDcgTDE2MiwxMDcgWiBNMjU2LDI0IEwyNTYsNjYgTDAsNjYgTDAsMjQgTDI1NiwyNCBaXCIgaWQ9XCJDb21iaW5lZC1TaGFwZVwiICBmaWxsLXJ1bGU9XCJub256ZXJvXCI+PC9wYXRoPlxuICAgIDwvZz5cbjwvc3ZnPiIsIjw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuPHN2ZyB3aWR0aD1cIjI1NnB4XCIgaGVpZ2h0PVwiMjU2cHhcIiB2aWV3Qm94PVwiMCAwIDI1NiAyNTZcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICAgIDx0aXRsZT5pY29uLWFsaWduZWQtcmlnaHQtY29tcGxldGU8L3RpdGxlPlxuICAgIDxnIGlkPVwiaWNvbi1hbGlnbmVkLXJpZ2h0LWNvbXBsZXRlXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMjU2LDE5MCBMMjU2LDIzMiBMMCwyMzIgTDAsMTkwIEwyNTYsMTkwIFogTTE2MiwxMDcgTDE2MiwxNDkgTDAsMTQ5IEwwLDEwNyBMMTYyLDEwNyBaIE0yNTYsMjQgTDI1Niw2NiBMMCw2NiBMMCwyNCBMMjU2LDI0IFpcIiBpZD1cIkNvbWJpbmVkLVNoYXBlXCIgIGZpbGwtcnVsZT1cIm5vbnplcm9cIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTI4LjAwMDAwMCwgMTI4LjAwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMTI4LjAwMDAwMCwgLTEyOC4wMDAwMDApIFwiPjwvcGF0aD5cbiAgICA8L2c+XG48L3N2Zz4iLCI8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbjxzdmcgd2lkdGg9XCIyNTZweFwiIGhlaWdodD1cIjI1NnB4XCIgdmlld0JveD1cIjAgMCAyNTYgMjU2XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgICA8dGl0bGU+aWNvbi1jZW50ZXJlZC1jb21wbGV0ZTwvdGl0bGU+XG4gICAgPGcgaWQ9XCJpY29uLWNlbnRlcmVkLWNvbXBsZXRlXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiAgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxuICAgICAgICA8cGF0aCBkPVwiTTIwNCwxODYgTDIwNCwyMjQgTDUyLDIyNCBMNTIsMTg2IEwyMDQsMTg2IFogTTI1NywxMTAgTDI1NywxNDggTDAsMTQ4IEwwLDExMCBMMjU3LDExMCBaIE0yMDQsMzIgTDIwNCw3MCBMNTIsNzAgTDUyLDMyIEwyMDQsMzIgWlwiIGlkPVwiQ29tYmluZWQtU2hhcGVcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCI+PC9wYXRoPlxuICAgIDwvZz5cbjwvc3ZnPiIsIjw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuPHN2ZyB3aWR0aD1cIjI1NnB4XCIgaGVpZ2h0PVwiMjU2cHhcIiB2aWV3Qm94PVwiMCAwIDI1NiAyNTZcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICAgIDx0aXRsZT5pY29uLWp1c3RpZmllZC1jb21wbGV0ZTwvdGl0bGU+XG4gICAgPGcgaWQ9XCJpY29uLWp1c3RpZmllZC1jb21wbGV0ZVwiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgICAgPHBhdGggZD1cIk0yNTcsMTg2IEwyNTcsMjI0IEwwLDIyNCBMMCwxODYgTDI1NywxODYgWiBNMjU3LDExMCBMMjU3LDE0OCBMMCwxNDggTDAsMTEwIEwyNTcsMTEwIFogTTI1NiwzMiBMMjU2LDcwIEwwLDcwIEwwLDMyIEwyNTYsMzIgWlwiIGlkPVwiQ29tYmluZWQtU2hhcGVcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCI+PC9wYXRoPlxuICAgIDwvZz5cbjwvc3ZnPiIsIjw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cImlzby04ODU5LTFcIj8+XG48c3ZnIHZlcnNpb249XCIxLjFcIiBpZD1cIkNhcGFfMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiXG5cdCB2aWV3Qm94PVwiMCAwIDUxMS45OTcgNTExLjk5N1wiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTEuOTk3IDUxMS45OTc7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj5cbjxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxIDEpXCI+XG5cdDxnPlxuXHRcdDxnPlxuXHRcdFx0PHBhdGggZD1cIk0yMTEuMjYsMzg5LjI0bC02MC4zMzEsNjAuMzMxYy0yNS4wMTIsMjUuMDEyLTY1LjUxNywyNS4wMTItOTAuNTA4LDAuMDA1Yy0yNC45OTYtMjQuOTk2LTI0Ljk5Ni02NS41MDUtMC4wMDUtOTAuNDk2XG5cdFx0XHRcdGwxMjAuNjgzLTEyMC42ODNjMjQuOTkxLTI0Ljk5Miw2NS41LTI0Ljk5Miw5MC40OTEsMGM4LjMzMSw4LjMzMSwyMS44MzksOC4zMzEsMzAuMTcsMGM4LjMzMS04LjMzMSw4LjMzMS0yMS44MzksMC0zMC4xN1xuXHRcdFx0XHRjLTQxLjY1NC00MS42NTQtMTA5LjE3Ny00MS42NTQtMTUwLjgzMSwwTDMwLjI0NywzMjguOTA5Yy00MS42NTQsNDEuNjU0LTQxLjY1NCwxMDkuMTc3LDAsMTUwLjgzMVxuXHRcdFx0XHRjNDEuNjQ5LDQxLjY3NiwxMDkuMTc3LDQxLjY3NiwxNTAuODUzLDBsNjAuMzMxLTYwLjMzMWM4LjMzMS04LjMzMSw4LjMzMS0yMS44MzksMC0zMC4xN1MyMTkuNTkxLDM4MC45MDksMjExLjI2LDM4OS4yNHpcIi8+XG5cdFx0XHQ8cGF0aCBkPVwiTTQ3OS43NTEsMzAuMjRjLTQxLjY1NC00MS42NTQtMTA5LjE5OS00MS42NTQtMTUwLjg1MywwbC03Mi4zODQsNzIuMzg0Yy04LjMzMSw4LjMzMS04LjMzMSwyMS44MzksMCwzMC4xN1xuXHRcdFx0XHRjOC4zMzEsOC4zMzEsMjEuODM5LDguMzMxLDMwLjE3LDBsNzIuMzg0LTcyLjM4NGMyNC45OTEtMjQuOTkyLDY1LjUyMS0yNC45OTIsOTAuNTEzLDBjMjQuOTkxLDI0Ljk5MSwyNC45OTEsNjUuNSwwLDkwLjQ5MVxuXHRcdFx0XHRMMzE2Ljg0NSwyODMuNjM4Yy0yNC45OTIsMjQuOTkyLTY1LjUsMjQuOTkyLTkwLjQ5MSwwYy04LjMzMS04LjMzMS0yMS44MzktOC4zMzEtMzAuMTcsMHMtOC4zMzEsMjEuODM5LDAsMzAuMTdcblx0XHRcdFx0YzQxLjY1NCw0MS42NTQsMTA5LjE3Nyw0MS42NTQsMTUwLjgzMSwwbDEzMi43MzYtMTMyLjczNkM1MjEuNDA1LDEzOS40MTgsNTIxLjQwNSw3MS44OTQsNDc5Ljc1MSwzMC4yNHpcIi8+XG5cdFx0PC9nPlxuXHQ8L2c+XG48L2c+XG48L3N2Zz5cbiIsImltcG9ydCBCb2xkSWNvbiBmcm9tIFwiLi4vYXNzZXRzL2JvbGQuc3ZnXCI7XG5pbXBvcnQgSXRhbGljSWNvbiBmcm9tIFwiLi4vYXNzZXRzL2l0YWxpYy5zdmdcIjtcbmltcG9ydCBVbmRlcmxpbmVJY29uIGZyb20gXCIuLi9hc3NldHMvdW5kZXJsaW5lLnN2Z1wiO1xuaW1wb3J0IExpc3RJY29uIGZyb20gXCIuLi9hc3NldHMvbGlzdC5zdmdcIjtcbmltcG9ydCBCdWxsZXRJY29uIGZyb20gXCIuLi9hc3NldHMvYnVsbGV0LnN2Z1wiO1xuaW1wb3J0IEp1c3RpZnlMZWZ0SWNvbiBmcm9tIFwiLi4vYXNzZXRzL2FsaWduZWQtbGVmdC5zdmdcIjtcbmltcG9ydCBKdXN0aWZ5UmlnaHRJY29uIGZyb20gXCIuLi9hc3NldHMvYWxpZ25lZC1yaWdodC5zdmdcIjtcbmltcG9ydCBKdXN0aWZ5Q2VudGVySWNvbiBmcm9tIFwiLi4vYXNzZXRzL2NlbnRlcmVkLnN2Z1wiO1xuaW1wb3J0IEp1c3RpZnlJY29uIGZyb20gXCIuLi9hc3NldHMvanVzdGlmaWVkLnN2Z1wiO1xuaW1wb3J0IExpbmtJY29uIGZyb20gXCIuLi9hc3NldHMvbGluay5zdmdcIjtcbmltcG9ydCB0eXBlIHsgVG9vbGJhckl0ZW0gfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvQ29tcG9zZXJcIjtcblxuY29uc3QgcXVlcnlDb21tYW5kU3RhdGUgPSAoY29tbWFuZDogc3RyaW5nKTogYm9vbGVhbiA9PlxuICBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShjb21tYW5kKTtcbmV4cG9ydCBjb25zdCBleGVjID0gKGNvbW1hbmQ6IHN0cmluZywgdmFsdWU/OiBzdHJpbmcpOiBib29sZWFuID0+XG4gIGRvY3VtZW50LmV4ZWNDb21tYW5kKGNvbW1hbmQsIGZhbHNlLCB2YWx1ZSk7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0QWN0aW9uczogVG9vbGJhckl0ZW1bXSA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkJvbGRcIixcbiAgICBzdGF0ZTogKCk6IGJvb2xlYW4gPT4gcXVlcnlDb21tYW5kU3RhdGUoXCJib2xkXCIpLFxuICAgIHJlc3VsdDogKCk6IGJvb2xlYW4gPT4gZXhlYyhcImJvbGRcIiksXG4gICAgaWNvbjogQm9sZEljb24sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJJdGFsaWNcIixcbiAgICBzdGF0ZTogKCk6IGJvb2xlYW4gPT4gcXVlcnlDb21tYW5kU3RhdGUoXCJpdGFsaWNcIiksXG4gICAgcmVzdWx0OiAoKTogYm9vbGVhbiA9PiBleGVjKFwiaXRhbGljXCIpLFxuICAgIGljb246IEl0YWxpY0ljb24sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJVbmRlcmxpbmVcIixcbiAgICBzdGF0ZTogKCk6IGJvb2xlYW4gPT4gcXVlcnlDb21tYW5kU3RhdGUoXCJ1bmRlcmxpbmVcIiksXG4gICAgcmVzdWx0OiAoKTogYm9vbGVhbiA9PiBleGVjKFwidW5kZXJsaW5lXCIpLFxuICAgIGljb246IFVuZGVybGluZUljb24sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJKdXN0aWZ5IExlZnRcIixcbiAgICBzdGF0ZTogKCk6IGJvb2xlYW4gPT4gcXVlcnlDb21tYW5kU3RhdGUoXCJqdXN0aWZ5TGVmdFwiKSxcbiAgICByZXN1bHQ6ICgpOiBib29sZWFuID0+IGV4ZWMoXCJqdXN0aWZ5TGVmdFwiKSxcbiAgICBpY29uOiBKdXN0aWZ5TGVmdEljb24sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJKdXN0aWZ5IFJpZ2h0XCIsXG4gICAgc3RhdGU6ICgpOiBib29sZWFuID0+IHF1ZXJ5Q29tbWFuZFN0YXRlKFwianVzdGlmeVJpZ2h0XCIpLFxuICAgIHJlc3VsdDogKCk6IGJvb2xlYW4gPT4gZXhlYyhcImp1c3RpZnlSaWdodFwiKSxcbiAgICBpY29uOiBKdXN0aWZ5UmlnaHRJY29uLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiSnVzdGlmeSBDZW50ZXJcIixcbiAgICBzdGF0ZTogKCk6IGJvb2xlYW4gPT4gcXVlcnlDb21tYW5kU3RhdGUoXCJqdXN0aWZ5Q2VudGVyXCIpLFxuICAgIHJlc3VsdDogKCk6IGJvb2xlYW4gPT4gZXhlYyhcImp1c3RpZnlDZW50ZXJcIiksXG4gICAgaWNvbjogSnVzdGlmeUNlbnRlckljb24sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJKdXN0aWZ5IEZ1bGxcIixcbiAgICBzdGF0ZTogKCk6IGJvb2xlYW4gPT4gcXVlcnlDb21tYW5kU3RhdGUoXCJqdXN0aWZ5RnVsbFwiKSxcbiAgICByZXN1bHQ6ICgpOiBib29sZWFuID0+IGV4ZWMoXCJqdXN0aWZ5RnVsbFwiKSxcbiAgICBpY29uOiBKdXN0aWZ5SWNvbixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIk9yZGVyZWQgTGlzdFwiLFxuICAgIHJlc3VsdDogKCk6IGJvb2xlYW4gPT4gZXhlYyhcImluc2VydE9yZGVyZWRMaXN0XCIpLFxuICAgIGljb246IExpc3RJY29uLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiVW5vcmRlcmVkIExpc3RcIixcbiAgICByZXN1bHQ6ICgpOiBib29sZWFuID0+IGV4ZWMoXCJpbnNlcnRVbm9yZGVyZWRMaXN0XCIpLFxuICAgIGljb246IEJ1bGxldEljb24sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMaW5rXCIsXG4gICAgcmVzdWx0OiAoKTogYm9vbGVhbiA9PiB7XG4gICAgICBjb25zdCB1cmwgPSBwcm9tcHQoXCJFbnRlciBhIFVSTDpcIiwgXCJodHRwOi8vXCIpO1xuICAgICAgcmV0dXJuIGV4ZWMoXCJjcmVhdGVMaW5rXCIsIHVybCB8fCBcIlwiKTtcbiAgICB9LFxuICAgIGljb246IExpbmtJY29uLFxuICB9LFxuXTtcbiIsIjxzdmVsdGU6b3B0aW9ucyB0YWc9XCJueWxhcy1odG1sLWVkaXRvclwiIC8+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB7IGRlZmF1bHRBY3Rpb25zIH0gZnJvbSBcIi4uL2xpYi9odG1sLWVkaXRvclwiO1xuICBpbXBvcnQgdHlwZSB7IFJlcGxhY2VGaWVsZHMsIFRvb2xiYXJJdGVtIH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL0NvbXBvc2VyXCI7XG5cbiAgZXhwb3J0IGxldCBvbmNoYW5nZSA9IChfaHRtbDogc3RyaW5nKSA9PiBQcm9taXNlLnJlc29sdmUoe30pO1xuICBleHBvcnQgbGV0IGh0bWwgPSBcIlwiO1xuICBleHBvcnQgbGV0IHNob3dfZWRpdG9yX3Rvb2xiYXIgPSB0cnVlO1xuICBleHBvcnQgbGV0IHJlcGxhY2VfZmllbGRzOiBSZXBsYWNlRmllbGRzW10gfCBudWxsID0gbnVsbDtcbiAgZXhwb3J0IGxldCBmb2N1c19ib2R5X29ubG9hZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGxldCBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICBsZXQgdG9vbGJhcjogVG9vbGJhckl0ZW1bXSA9IGRlZmF1bHRBY3Rpb25zO1xuXG4gICQ6IGlmIChmb2N1c19ib2R5X29ubG9hZCAmJiBjb250YWluZXIpIHtcbiAgICBjb250YWluZXIuZm9jdXMoKTtcbiAgICBoYW5kbGVIdG1sQm9keUZvY3VzKCk7XG4gIH1cblxuICAkOiBpZiAoaHRtbCkge1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcblxuICAgIGlmICh0eXBlb2YgcmVwbGFjZV9maWVsZHMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJlcGxhY2VfZmllbGRzID0gSlNPTi5wYXJzZShyZXBsYWNlX2ZpZWxkcyk7XG4gICAgfVxuICAgIGlmIChzZWxlY3Rpb24gJiYgQXJyYXkuaXNBcnJheShyZXBsYWNlX2ZpZWxkcykpIHtcbiAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgcmVwbGFjZV9maWVsZHMpIHtcbiAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZUFsbChmaWVsZC5mcm9tLCBmaWVsZC50byk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRGb2N1c2VkTm9kZSA9IHNlbGVjdGlvbi5mb2N1c05vZGU7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDYXJldFBvc2l0aW9uID0gc2VsZWN0aW9uLmZvY3VzT2Zmc2V0O1xuXG4gICAgICAgIGlmIChjdXJyZW50Rm9jdXNlZE5vZGUgJiYgY3VycmVudEZvY3VzZWROb2RlLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgaWYgKGN1cnJlbnRGb2N1c2VkTm9kZS50ZXh0Q29udGVudC5pbmNsdWRlcyhmaWVsZC5mcm9tKSkge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hDb3VudCA9XG4gICAgICAgICAgICAgIGN1cnJlbnRGb2N1c2VkTm9kZS50ZXh0Q29udGVudC5zcGxpdChmaWVsZC5mcm9tKS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgY29uc3QgcmVwbGFjZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICAgICAgICAgICAgY3VycmVudEZvY3VzZWROb2RlLnRleHRDb250ZW50LnJlcGxhY2VBbGwoZmllbGQuZnJvbSwgZmllbGQudG8pLFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY3VycmVudEZvY3VzZWROb2RlLnJlcGxhY2VXaXRoKHJlcGxhY2VOb2RlKTtcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBzZWxlY3Rpb24uZm9jdXNOb2RlICYmXG4gICAgICAgICAgICAgIHNlbGVjdGlvbi5mb2N1c05vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgaWYgKG1hdGNoQ291bnQgPiAxKSB7XG4gICAgICAgICAgICAgICAgc2V0Q2FyZXRQb3NpdGlvbihcbiAgICAgICAgICAgICAgICAgIHJlcGxhY2VOb2RlLFxuICAgICAgICAgICAgICAgICAgY3VycmVudENhcmV0UG9zaXRpb24gK1xuICAgICAgICAgICAgICAgICAgICAoZmllbGQudG8ubGVuZ3RoIC0gZmllbGQuZnJvbS5sZW5ndGgpICtcbiAgICAgICAgICAgICAgICAgICAgKG1hdGNoQ291bnQgLSAxKSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldENhcmV0UG9zaXRpb24oXG4gICAgICAgICAgICAgICAgICByZXBsYWNlTm9kZSxcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRDYXJldFBvc2l0aW9uICsgZmllbGQudG8ubGVuZ3RoIC0gZmllbGQuZnJvbS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAob25jaGFuZ2UpIG9uY2hhbmdlKGh0bWwpO1xuICB9XG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjYXJldCBwb3NpdGlvbiBhdCBhIGdpdmVuIG9mZnNldCBmb3IgYSBzcGVjaWZpY1xuICAgKiBub2RlLlxuICAgKlxuICAgKiBAcGFyYW0gbm9kZSBOb2RlXG4gICAqIEBwYXJhbSBvZmZzZXQgTnVtYmVyXG4gICAqL1xuICBmdW5jdGlvbiBzZXRDYXJldFBvc2l0aW9uKG5vZGU6IE5vZGUsIG9mZnNldDogbnVtYmVyKSB7XG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICByYW5nZS5zZWxlY3ROb2RlKG5vZGUpO1xuICAgIHJhbmdlLnNldFN0YXJ0KG5vZGUsIG9mZnNldCk7XG4gICAgcmFuZ2UuY29sbGFwc2UodHJ1ZSk7XG4gICAgcmFuZ2UuZGV0YWNoKCk7XG4gICAgc2VsZWN0aW9uPy5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBzZWxlY3Rpb24/LmFkZFJhbmdlKHJhbmdlKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUFjdGlvbiA9IChpdGVtOiBUb29sYmFySXRlbSkgPT4gKCkgPT4ge1xuICAgIGlmIChpdGVtLnJlc3VsdCkge1xuICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICBjb250YWluZXIuZm9jdXMoKTtcbiAgICAgIH1cbiAgICAgIGl0ZW0ucmVzdWx0KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlVG9vbGJhclVJKCk7XG4gIH07XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiB1cGRhdGVzIHRoZSB0b29sYmFyIFVJIHN0YXRlIHdoZW4geW91IHNlbGVjdCB0ZXh0IChlZy4gc2VsZWN0IGJvbGQgdGV4dClcbiAgZnVuY3Rpb24gdXBkYXRlVG9vbGJhclVJKCkge1xuICAgIHRvb2xiYXIgPSB0b29sYmFyLm1hcCgoaXRlbTogVG9vbGJhckl0ZW0pID0+IHtcbiAgICAgIGlmIChpdGVtLnN0YXRlKSB7XG4gICAgICAgIGl0ZW0uYWN0aXZlID0gaXRlbS5zdGF0ZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVIdG1sQm9keUZvY3VzID0gKCkgPT4ge1xuICAgIC8vIGlmIGNvbnRlbnRlZGl0YWJsZSBhcmVhIGlzIGVtcHR5IHdlIG5lZWQgdG8gYWRkIHNvbWV0aGluZyB0byBhZGQgcmFuZ2VcbiAgICBpZiAoY29udGFpbmVyLmlubmVySFRNTCA9PT0gXCJcIikge1xuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXFx1MDBhMFwiO1xuICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKGNvbnRhaW5lcik7XG4gICAgICByYW5nZS5jb2xsYXBzZShmYWxzZSk7IC8vIGNvbGxhcHNlIHJhbmdlIHRvIHRoZSBlbmRcblxuICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcbiAgICB9XG4gIH07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4gIC5odG1sLWVkaXRvciB7XG4gICAgbWluLWhlaWdodDogdmFyKC0tY29tcG9zZXItZWRpdG9yLW1pbi1oZWlnaHQsIDIyMHB4KTtcbiAgICBtYXgtaGVpZ2h0OiB2YXIoLS1jb21wb3Nlci1lZGl0b3ItbWF4LWhlaWdodCwgNDgwcHgpO1xuICAgICo6Zm9jdXMge1xuICAgICAgb3V0bGluZTogNXB4IGF1dG8gdmFyKC0tY29tcG9zZXItcHJpbWFyeS1jb2xvciwgIzVjNzdmZik7XG4gICAgfVxuICB9XG4gIC5odG1sLWVkaXRvci1jb250ZW50IHtcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1jb21wb3Nlci1lZGl0b3ItbWluLWhlaWdodCwgMjIwcHgpO1xuICAgIG1heC1oZWlnaHQ6IHZhcigtLWNvbXBvc2VyLWVkaXRvci1tYXgtaGVpZ2h0LCA0ODBweCk7XG4gIH1cbiAgYSB7XG4gICAgY29sb3I6IHZhcigtLWNvbXBvc2VyLXByaW1hcnktY29sb3IsICM1Yzc3ZmYpO1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLWNvbXBvc2VyLXByaW1hcnktZGFyay1jb2xvciwgIzI5NGRmZik7XG4gICAgfVxuICB9XG4gIFtjb250ZW50ZWRpdGFibGVdIHtcbiAgICBwYWRkaW5nOiB2YXIoLS1jb21wb3Nlci1vdXRlci1wYWRkaW5nLCAxNXB4KVxuICAgICAgdmFyKC0tY29tcG9zZXItb3V0ZXItcGFkZGluZywgMTVweCk7XG4gICAgbWFyZ2luOiAwO1xuICAgIG91dGxpbmU6IDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICBjb2xvcjogdmFyKC0tY29tcG9zZXItdGV4dC1jb2xvciwgYmxhY2spO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cbiAgLnRvb2xiYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb21wb3Nlci1ib3JkZXItY29sb3IsICNmN2Y3ZjcpO1xuICAgIHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1jb21wb3Nlci1vdXRlci1wYWRkaW5nLCAxNXB4KSAvIDIpO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1jb21wb3Nlci10ZXh0LWxpZ2h0LWNvbG9yLCAjNmU2ZTdhKTtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgbWFyZ2luOiAycHg7XG4gICAgICBvdXRsaW5lOiAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1jb21wb3Nlci1ib3JkZXItcmFkaXVzLCA2cHgpIC8gMik7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG5cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29tcG9zZXItYmFja2dyb3VuZC1tdXRlZC1jb2xvciwgI2YwZjJmZik7XG4gICAgICB9XG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICB9XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29tcG9zZXItYmFja2dyb3VuZC1tdXRlZC1jb2xvciwgI2YwZjJmZik7XG4gICAgICB9XG4gICAgfVxuICB9XG48L3N0eWxlPlxuXG48IS0tIFRvb2xiYXIgLS0+XG48ZGl2IGNsYXNzPVwiaHRtbC1lZGl0b3JcIj5cbiAgeyNpZiBzaG93X2VkaXRvcl90b29sYmFyfVxuICAgIDxkaXYgY2xhc3M9XCJ0b29sYmFyXCI+XG4gICAgICB7I2VhY2ggdG9vbGJhciBhcyBpdGVtfVxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb246Y2xpY2t8c3RvcFByb3BhZ2F0aW9ufGNhcHR1cmU9e2hhbmRsZUFjdGlvbihpdGVtKX1cbiAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICBjbGFzcz17aXRlbS5zdGF0ZSAmJiBpdGVtLnN0YXRlKCkgPyBcImFjdGl2ZVwiIDogXCJcIn0+XG4gICAgICAgICAgeyNpZiBpdGVtLmljb259XG4gICAgICAgICAgICA8c3ZlbHRlOmNvbXBvbmVudFxuICAgICAgICAgICAgICB0aGlzPXtpdGVtLmljb259XG4gICAgICAgICAgICAgIGNsYXNzPVwiaWNvblwiXG4gICAgICAgICAgICAgIHN0eWxlPVwiZmlsbDogdmFyKC0tY29tcG9zZXItaWNvbnMtY29sb3IsICM2NjY3NzQpICFpbXBvcnRhbnQ7IHdpZHRoOiAxMnB4OyBoZWlnaHQ6IDEycHg7XCIgLz5cbiAgICAgICAgICB7OmVsc2V9e2l0ZW0udGl0bGUuY2hhckF0KDApfXsvaWZ9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgey9lYWNofVxuICAgIDwvZGl2PlxuICB7L2lmfVxuXG4gIHsjaWYgZmFsc2V9XG4gICAgPCEtLSBUaGUgZm9sbG93aW5nIGlmIHN0YXRlbWVudCBleGlzdHMgdG8gcHJldmVudCBzdmVsdGUgZnJvbSBzdHJpcHBpbmcgc3R5bGluZyBhc3NvY2lhdGVkXG4gICAgICB3aXRoIHRoZSBIVE1MIHRhZ3Mgd2l0aGluIHRoaXMgaWYgc3RhdGVtZW50LiBUaGlzIGlzIHJlcXVpcmVkIHRvIGFkZCBzdHlsaW5nIHRvIHRoZSBcbiAgICAgIEhUTUwgYWRkZWQgaW4gdGhlIFdZU0lXWUcgZWRpdG9yLlxuXG4gICAgICBUaGlzIGhhY2sgd2FzIGltcGxlbWVudGVkIGJlY2F1c2Ugc3ZlbHRlIGRvZXMgbm90IHBhcnNlIHRoZSA6Z2xvYmFsKCkgc2VsZWN0b3IgaW5cbiAgICAgIGN1c3RvbSBlbGVtZW50cy5cblxuICAgICAgTm90ZTogV2hpbGUgdGhlIENTUyBnZXRzIGFkZGVkIGluIHRoZSBmaW5hbCBidW5kbGUsIG5vbmUgb2YgdGhlIEhUTUwgaXMgZ2VuZXJhdGVkLlxuICAtLT5cbiAgICA8IS0tIHN2ZWx0ZS1pZ25vcmUgYTExeS1pbnZhbGlkLWF0dHJpYnV0ZSAtLT5cbiAgICA8IS0tIHN2ZWx0ZS1pZ25vcmUgYTExeS1taXNzaW5nLWF0dHJpYnV0ZSAtLT5cbiAgICA8IS0tIHN2ZWx0ZS1pZ25vcmUgYTExeS1taXNzaW5nLWNvbnRlbnQgLS0+XG4gICAgPGEgLz5cbiAgey9pZn1cblxuICA8ZGl2XG4gICAgYmluZDp0aGlzPXtjb250YWluZXJ9XG4gICAgYmluZDppbm5lckhUTUw9e2h0bWx9XG4gICAgb246Zm9jdXM9e2hhbmRsZUh0bWxCb2R5Rm9jdXN9XG4gICAgY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiXG4gICAgY2xhc3M9XCJodG1sLWVkaXRvci1jb250ZW50XCJcbiAgICByb2xlPVwidGV4dGJveFwiXG4gICAgYXJpYS1sYWJlbD1cIkhUTUwgRWRpdG9yXCJcbiAgICBvbjprZXl1cD17dXBkYXRlVG9vbGJhclVJfVxuICAgIG9uOm1vdXNldXA9e3VwZGF0ZVRvb2xiYXJVSX0gLz5cbjwvZGl2PlxuIiwiPHN2ZWx0ZTpvcHRpb25zIHRhZz1cIm55bGFzLWNvbXBvc2VyLWFsZXJ0LWJhclwiIC8+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBsZXQgdHlwZSA9IFwicHJpbWFyeVwiO1xuICBleHBvcnQgbGV0IGRpc21pc3NpYmxlID0gdHJ1ZTtcbiAgZXhwb3J0IGxldCB2aXNpYmxlID0gdHJ1ZTtcbiAgZXhwb3J0IGxldCBvbmRpc21pc3MgPSBudWxsO1xuXG4gIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xuICAgIGlmIChvbmRpc21pc3MpIG9uZGlzbWlzcygpO1xuICAgIHZpc2libGUgPSBmYWxzZTtcbiAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbiAgLmFsZXJ0LWJhciB7XG4gICAgcGFkZGluZzogdmFyKC0tY29tcG9zZXItb3V0ZXItcGFkZGluZywgMTVweCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tY29tcG9zZXItZm9udC1zaXplLXNtYWxsLCAxMnB4KTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1jb21wb3Nlci1ib3JkZXItY29sb3IsICNmN2Y3ZjctcmFkaXVzKTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogdmFyKC0tY29tcG9zZXItYm9yZGVyLXJhZGl1cywgNnB4KTtcbiAgICAmX19jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGJldHdlZW47XG4gICAgfVxuICAgICZfX3RleHQge1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgIH1cbiAgICAmX19jbG9zZSB7XG4gICAgICBvdXRsaW5lOiAwO1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cbiAgICAqOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IDVweCBhdXRvIEhpZ2hsaWdodDtcbiAgICAgIG91dGxpbmU6IDVweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcjtcbiAgICB9XG4gICAgLy8gTW9kaWZpZXJzXG4gICAgJi5zdWNjZXNzIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcihcbiAgICAgICAgLS1jb21wb3Nlci1zdWNjZXNzLWxpZ2h0LWNvbG9yLFxuICAgICAgICB2YXIoLS1jb21wb3Nlci1wcmltYXJ5LWNvbG9yLCAjNWM3N2ZmKVxuICAgICAgKTtcbiAgICAgIGNvbG9yOiB2YXIoXG4gICAgICAgIC0tY29tcG9zZXItc3VjY2Vzcy1jb2xvcixcbiAgICAgICAgdmFyKC0tY29tcG9zZXItYmFja2dyb3VuZC1jb2xvciwgd2hpdGUpXG4gICAgICApO1xuICAgICAgLmFsZXJ0LWJhcl9fY2xvc2Uge1xuICAgICAgICBjb2xvcjogdmFyKFxuICAgICAgICAgIC0tY29tcG9zZXItc3VjY2Vzcy1jb2xvcixcbiAgICAgICAgICB2YXIoLS1jb21wb3Nlci1iYWNrZ3JvdW5kLWNvbG9yLCB3aGl0ZSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5kYW5nZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29tcG9zZXItZGFuZ2VyLWxpZ2h0LWNvbG9yLCAjZmZlM2UzKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1jb21wb3Nlci1kYW5nZXItY29sb3IsICNmZjVjNWMpO1xuICAgICAgLmFsZXJ0LWJhcl9fY2xvc2Uge1xuICAgICAgICBjb2xvcjogdmFyKC0tY29tcG9zZXItZGFuZ2VyLWNvbG9yLCAjZmY1YzVjKTtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5pbmZvIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcihcbiAgICAgICAgLS1jb21wb3Nlci1pbmZvLWxpZ2h0LWNvbG9yLFxuICAgICAgICB2YXIoLS1jb21wb3Nlci1wcmltYXJ5LWxpZ2h0LWNvbG9yLCAjZjBmMmZmKVxuICAgICAgKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1jb21wb3Nlci1pbmZvLWNvbG9yLCB2YXIoLS1jb21wb3Nlci1wcmltYXJ5LWNvbG9yLCAjNWM3N2ZmKSk7XG4gICAgICAuYWxlcnQtYmFyX19jbG9zZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoXG4gICAgICAgICAgLS1jb21wb3Nlci1pbmZvLWNvbG9yLFxuICAgICAgICAgIHZhcigtLWNvbXBvc2VyLXByaW1hcnktY29sb3IsICM1Yzc3ZmYpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG48L3N0eWxlPlxuXG57I2lmIHZpc2libGV9XG4gIDxkaXZcbiAgICBjbGFzcz1cImFsZXJ0LWJhclwiXG4gICAgY2xhc3M6c3VjY2Vzcz17dHlwZSA9PT0gXCJzdWNjZXNzXCJ9XG4gICAgY2xhc3M6d2FybmluZz17dHlwZSA9PT0gXCJ3YXJuaW5nXCJ9XG4gICAgY2xhc3M6ZGFuZ2VyPXt0eXBlID09PSBcImRhbmdlclwifVxuICAgIGNsYXNzOnByaW1hcnk9e3R5cGUgPT09IFwicHJpbWFyeVwifVxuICAgIGNsYXNzOmluZm89e3R5cGUgPT09IFwiaW5mb1wifVxuICA+XG4gICAgPGRpdiBjbGFzcz1cImFsZXJ0LWJhcl9fY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQtYmFyX190ZXh0XCI+XG4gICAgICAgIDxzbG90IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsjaWYgZGlzbWlzc2libGV9XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJhbGVydC1iYXJfX2Nsb3NlXCIgb246Y2xpY2s9e2Nsb3NlfT4mdGltZXM7PC9idXR0b24+XG4gICAgICB7L2lmfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbnsvaWZ9XG4iLCI8c3ZnIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAzMjkuMjY5MzMgMzI5XCIgd2lkdGg9XCIxMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwibTE5NC44MDA3ODEgMTY0Ljc2OTUzMSAxMjguMjEwOTM4LTEyOC4yMTQ4NDNjOC4zNDM3NS04LjMzOTg0NCA4LjM0Mzc1LTIxLjgyNDIxOSAwLTMwLjE2NDA2My04LjMzOTg0NC04LjMzOTg0NC0yMS44MjQyMTktOC4zMzk4NDQtMzAuMTY0MDYzIDBsLTEyOC4yMTQ4NDQgMTI4LjIxNDg0NC0xMjguMjEwOTM3LTEyOC4yMTQ4NDRjLTguMzQzNzUtOC4zMzk4NDQtMjEuODI0MjE5LTguMzM5ODQ0LTMwLjE2NDA2MyAwLTguMzQzNzUgOC4zMzk4NDQtOC4zNDM3NSAyMS44MjQyMTkgMCAzMC4xNjQwNjNsMTI4LjIxMDkzOCAxMjguMjE0ODQzLTEyOC4yMTA5MzggMTI4LjIxNDg0NGMtOC4zNDM3NSA4LjMzOTg0NC04LjM0Mzc1IDIxLjgyNDIxOSAwIDMwLjE2NDA2MyA0LjE1NjI1IDQuMTYwMTU2IDkuNjIxMDk0IDYuMjUgMTUuMDgyMDMyIDYuMjUgNS40NjA5MzcgMCAxMC45MjE4NzUtMi4wODk4NDQgMTUuMDgyMDMxLTYuMjVsMTI4LjIxMDkzNy0xMjguMjE0ODQ0IDEyOC4yMTQ4NDQgMTI4LjIxNDg0NGM0LjE2MDE1NiA0LjE2MDE1NiA5LjYyMTA5NCA2LjI1IDE1LjA4MjAzMiA2LjI1IDUuNDYwOTM3IDAgMTAuOTIxODc0LTIuMDg5ODQ0IDE1LjA4MjAzMS02LjI1IDguMzQzNzUtOC4zMzk4NDQgOC4zNDM3NS0yMS44MjQyMTkgMC0zMC4xNjQwNjN6bTAgMFwiLz48L3N2Zz4iLCI8c3ZnIGlkPVwiQ2FwYV8xXCIgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDQ5NyA0OTdcIiBoZWlnaHQ9XCI1MTJcIiB2aWV3Qm94PVwiMCAwIDQ5NyA0OTdcIiB3aWR0aD1cIjUxMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Zz48Y2lyY2xlIGN4PVwiOThcIiBjeT1cIjM3NlwiIGZpbGw9XCIjOTA5YmE2XCIgcj1cIjUzXCIvPjxjaXJjbGUgY3g9XCI0MzlcIiBjeT1cIjMzNlwiIGZpbGw9XCIjYzhkMmRjXCIgcj1cIjQ2XCIvPjxjaXJjbGUgY3g9XCIzOTdcIiBjeT1cIjExMlwiIGZpbGw9XCIjZTllZGYxXCIgcj1cIjM4XCIvPjxlbGxpcHNlIGN4PVwiNTYuMjQ1XCIgY3k9XCIyNDQuNzU0XCIgZmlsbD1cIiM3ZThiOTZcIiByeD1cIjU2LjI0NVwiIHJ5PVwiNTQuODc0XCIvPjxlbGxpcHNlIGN4PVwiMjE3LjgyMVwiIGN5PVwiNDQ3LjE3NVwiIGZpbGw9XCIjYTJhYmI4XCIgcng9XCI1MS4xMzJcIiByeT1cIjQ5LjgyNVwiLz48ZWxsaXBzZSBjeD1cIjM0OS4yMjlcIiBjeT1cIjQyNy44NzNcIiBmaWxsPVwiI2I5YzNjZFwiIHJ4PVwiNDguNTc1XCIgcnk9XCI0Ny4yOTdcIi8+PGVsbGlwc2UgY3g9XCIxMTcuMDkyXCIgY3k9XCIxMTQuNzk0XCIgZmlsbD1cIiM1ZjZjNzVcIiByeD1cIjU4LjgwMVwiIHJ5PVwiNTcuMzk3XCIvPjxlbGxpcHNlIGN4PVwiNDUzLjUzOFwiIGN5PVwiMjE2LjQ3N1wiIGZpbGw9XCIjZGNlNmViXCIgcng9XCI0My40NjJcIiByeT1cIjQyLjY1NlwiLz48Y2lyY2xlIGN4PVwiMjYzXCIgY3k9XCI2MlwiIGZpbGw9XCIjNGU1YTYxXCIgcj1cIjYyXCIvPjwvZz48L3N2Zz4iLCI8c3ZlbHRlOm9wdGlvbnMgdGFnPVwibnlsYXMtY29tcG9zZXItYXR0YWNobWVudFwiIC8+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG4gIGltcG9ydCBDbG9zZUljb24gZnJvbSBcIi4uL2Fzc2V0cy9jbG9zZS5zdmdcIjtcbiAgaW1wb3J0IExvYWRpbmdJY29uIGZyb20gXCIuLi9hc3NldHMvbG9hZGluZy5zdmdcIjtcbiAgaW1wb3J0IHR5cGUgeyBBdHRhY2htZW50IH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL0NvbXBvc2VyXCI7XG5cbiAgZXhwb3J0IGxldCBhdHRhY2htZW50OiBBdHRhY2htZW50O1xuICBleHBvcnQgbGV0IHJlbW92ZTogKGF0dGFjaG1lbnQ6IEF0dGFjaG1lbnQpID0+IHZvaWQ7XG5cbiAgLy8gQ3JlYXRlcyBodW1hbi1yZWFkYWJsZSBzaXplXG4gIGNvbnN0IHByZXR0eVNpemUgPSAoc2l6ZTogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgICBjb25zdCBpID0gTWF0aC5mbG9vcihNYXRoLmxvZyhzaXplKSAvIE1hdGgubG9nKDEwMjQpKTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIGAkeyhzaXplIC8gTWF0aC5wb3coMTAyNCwgaSkpLnRvRml4ZWQoMikgKiAxfVxuICAgICAgJHtbXCJCXCIsIFwia0JcIiwgXCJNQlwiLCBcIkdCXCIsIFwiVEJcIl1baV19YDtcbiAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbiAgQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1pbmcvdmFyaWFibGVzLnNjc3NcIjtcbiAgLndyYXBwZXIge1xuICAgIHBhZGRpbmc6IDAuM3JlbSAwO1xuICB9XG5cbiAgLmZpbGUtaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwLjhyZW07XG4gICAgY29sb3I6IHZhcigtLWNvbXBvc2VyLXRleHQtY29sb3IsIGJsYWNrKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbXBvc2VyLWJhY2tncm91bmQtbXV0ZWQtY29sb3IsICNmMGYyZmYpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvbXBvc2VyLWJvcmRlci1yYWRpdXMsIDZweCk7XG4gIH1cblxuICAuY2xvc2UtYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gIH1cblxuICAuZmlsZS1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiB2YXIoLS1jb21wb3Nlci10ZXh0LWNvbG9yLCBibGFjayk7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAmX19lcnJvciB7XG4gICAgICBjb2xvcjogdmFyKC0tY29tcG9zZXItZGFuZ2VyLWNvbG9yLCAjZmY1YzVjKTtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tY29tcG9zZXItZm9udC1zaXplLXNtYWxsLCAxMnB4KTtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIH1cbiAgICAmX19yaWdodCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5maWxlLWl0ZW1fX3NpemUge1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xuICAgIGNvbG9yOiB2YXIoLS1jb21wb3Nlci10ZXh0LWxpZ2h0LWNvbG9yLCAjNmU2ZTdhKTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tY29tcG9zZXItZm9udC1zaXplLXNtYWxsLCAxMnB4KTtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgcm90YXRlIHtcbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAjeyRkZXNrdG9wfSB7XG4gICAgLmZpbGUtaW5mbyB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1heC13aWR0aDogOTAlO1xuICAgIH1cbiAgICAuZmlsZS1pdGVtX19zaXplIHtcbiAgICAgIG1hcmdpbjogMCAwIDAgNXB4O1xuICAgIH1cbiAgfVxuPC9zdHlsZT5cblxueyNpZiBhdHRhY2htZW50fVxuICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJmaWxlLWl0ZW1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLWluZm9cIj5cbiAgICAgICAgeyNpZiAhYXR0YWNobWVudC5lcnJvcn1cbiAgICAgICAgICA8ZGl2PnthdHRhY2htZW50LmZpbGVuYW1lfTwvZGl2PlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmlsZS1pdGVtX19zaXplXCI+e3ByZXR0eVNpemUoYXR0YWNobWVudC5zaXplKX08L3NwYW4+XG4gICAgICAgIHsvaWZ9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLWluZm9fX3JpZ2h0XCI+XG4gICAgICAgIHsjaWYgYXR0YWNobWVudC5sb2FkaW5nfVxuICAgICAgICAgIDxMb2FkaW5nSWNvblxuICAgICAgICAgICAgc3R5bGU9XCJmaWxsOiB2YXIoLS1jb21wb3Nlci1pY29ucy1jb2xvciwgIzY2Njc3NCk7IHdpZHRoOiAxNXB4OyBoZWlnaHQ6IDE1cHg7IGFuaW1hdGlvbjogcm90YXRlIDAuNXMgaW5maW5pdGUgbGluZWFyO1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgey9pZn1cbiAgICAgICAgeyNpZiBhdHRhY2htZW50LmVycm9yfVxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmlsZS1pbmZvX19lcnJvclwiPlxuICAgICAgICAgICAge2F0dGFjaG1lbnQuZXJyb3JNZXNzYWdlID8/XG4gICAgICAgICAgICAgIFwiRXJyb3I6IFBsZWFzZSB0cnkgYXR0YWNoaW5nIHRoZSBmaWxlIGFnYWluLlwifVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgey9pZn1cbiAgICAgICAgeyNpZiAhYXR0YWNobWVudC5sb2FkaW5nfVxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjbG9zZS1idG5cIiBvbjpjbGljaz17KCkgPT4gcmVtb3ZlKGF0dGFjaG1lbnQpfT5cbiAgICAgICAgICAgIDxDbG9zZUljb24gY2xhc3M9XCJDbG9zZUljb25cIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7L2lmfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2Plxuey9pZn1cbiIsIjxzdmVsdGU6b3B0aW9ucyB0YWc9XCJueWxhcy1kYXRlcGlja2VyXCIgaW1tdXRhYmxlPXt0cnVlfSAvPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICBpbXBvcnQgeyB0aWNrIH0gZnJvbSBcInN2ZWx0ZVwiO1xuICBjb25zdCBtb250aHM6IHN0cmluZ1tdID0gW1xuICAgIFwiSmFudWFyeVwiLFxuICAgIFwiRmVicnVhcnlcIixcbiAgICBcIk1hcmNoXCIsXG4gICAgXCJBcHJpbFwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5lXCIsXG4gICAgXCJKdWx5XCIsXG4gICAgXCJBdWd1c3RcIixcbiAgICBcIlNlcHRlbWJlclwiLFxuICAgIFwiT2N0b2JlclwiLFxuICAgIFwiTm92ZW1iZXJcIixcbiAgICBcIkRlY2VtYmVyXCIsXG4gIF07XG4gIGV4cG9ydCBsZXQgdmFsdWU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICBleHBvcnQgbGV0IG1pbjogRGF0ZSB8IG51bGw7XG4gIGV4cG9ydCBsZXQgbWF4OiBEYXRlIHwgbnVsbDtcbiAgZXhwb3J0IGxldCB0aW1lcGlja2VyOiBib29sZWFuID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgY2hhbmdlOiBEYXRlcGlja2VyLkNoYW5nZUNhbGxiYWNrIHwgdm9pZDtcbiAgbGV0IGN1cnJlbnREYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgbGV0IHNlbGVjdGVkRGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGxldCBkYXRlczogRGF0ZXBpY2tlci5EYXRlc1tdID0gW107XG4gIGxldCBob3VyczogRGF0ZXBpY2tlci5UaW1lW10gPSBbXTtcbiAgbGV0IG1pbnV0ZXM6IERhdGVwaWNrZXIuVGltZVtdID0gW107XG4gIGxldCBob3Vyc1NlbGVjdDogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gIGxldCBtaW51dGVzU2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgY29uc3QgVU5JWERBWTogbnVtYmVyID0gODYzNDAwMDA7IC8vIDIzaCA1OW1cbiAgY29uc3QgcG9wdWxhdGUgPSAoKSA9PiB7XG4gICAgLy8gU2V0IGluaXRpYWwgdmFsdWVzXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBzZWxlY3RlZERhdGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKHRpbWVwaWNrZXIpIHtcbiAgICAgIGdldEhvdXJzKCk7XG4gICAgICBnZXRNaW51dGVzKCk7XG4gICAgfVxuICB9O1xuICAvLyBSZXR1cm5zIG51bWJlciBvZiBkYXlzIG9mIHRoZSBtb250aFxuICBjb25zdCBkYXlzSW5Nb250aCA9IChcbiAgICB5ZWFyOiBudW1iZXIsXG4gICAgbW9udGg6IG51bWJlcixcbiAgICBtb2RpZmllcjogbnVtYmVyID0gMSxcbiAgKTogbnVtYmVyID0+IHtcbiAgICBsZXQgZCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoICsgbW9kaWZpZXIsIDApO1xuICAgIHJldHVybiBkLmdldERhdGUoKTtcbiAgfTtcbiAgLy8gQ2hhbmdlcyBtb250aFxuICBjb25zdCBjaGFuZ2VNb250aCA9ICh4OiBudW1iZXIpID0+IHtcbiAgICBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnREYXRlLnNldE1vbnRoKGN1cnJlbnREYXRlLmdldE1vbnRoKCkgKyB4KSk7XG4gICAgc2V0RGF5cygpO1xuICB9O1xuICBjb25zdCBzZXREYXRlID0gKGRhdGU6IERhdGUpID0+IHtcbiAgICBjb25zdCBkYXRlVG9TZWxlY3QgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAvLyBpZiB0aW1lcGlja2VyIGFjdGl2ZSBzZXQgdGltZSBhcyB3ZWxsXG4gICAgaWYgKHRpbWVwaWNrZXIpIHtcbiAgICAgIGRhdGVUb1NlbGVjdC5zZXRIb3VycyhwYXJzZUludChob3Vyc1NlbGVjdC52YWx1ZSkpO1xuICAgICAgZGF0ZVRvU2VsZWN0LnNldE1pbnV0ZXMocGFyc2VJbnQobWludXRlc1NlbGVjdC52YWx1ZSkpO1xuICAgIH1cbiAgICBzZWxlY3RlZERhdGUgPSBuZXcgRGF0ZShkYXRlVG9TZWxlY3QpO1xuXG4gICAgaWYgKG1pbikge1xuICAgICAgaWYgKGZvcm1hdERhdGUobWluKSA9PT0gZm9ybWF0RGF0ZShkYXRlKSkge1xuICAgICAgICBzZWxlY3RlZERhdGUgPSBuZXcgRGF0ZShtaW4pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobWF4KSB7XG4gICAgICBpZiAoZm9ybWF0RGF0ZShtYXgpID09PSBmb3JtYXREYXRlKGRhdGUpKSB7XG4gICAgICAgIHNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKG1heCk7XG4gICAgICB9XG4gICAgfVxuICAgIHNldFNlbGVjdGVkKCk7XG4gICAgaWYgKHRpbWVwaWNrZXIpIHtcbiAgICAgIHNldEhvdXJzKCk7XG4gICAgICBzZXRNaW51dGVzKCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBzZXRIb3VyID0gKCkgPT4ge1xuICAgIHNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKHNlbGVjdGVkRGF0ZS5zZXRIb3VycyhwYXJzZUludChob3Vyc1NlbGVjdC52YWx1ZSkpKTtcbiAgICBpZiAobWluICYmICFtYXgpIHtcbiAgICAgIGlmIChmb3JtYXREYXRlKG1pbikgPT09IGZvcm1hdERhdGUoc2VsZWN0ZWREYXRlKSkge1xuICAgICAgICBzZWxlY3RlZERhdGUgPSBuZXcgRGF0ZShzZWxlY3RlZERhdGUuc2V0TWludXRlcyhtaW4uZ2V0TWludXRlcygpKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtYXggJiYgIW1pbikge1xuICAgICAgaWYgKGZvcm1hdERhdGUobWF4KSA9PT0gZm9ybWF0RGF0ZShzZWxlY3RlZERhdGUpKSB7XG4gICAgICAgIHNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKHNlbGVjdGVkRGF0ZS5zZXRNaW51dGVzKG1heC5nZXRNaW51dGVzKCkpKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1heCAmJiBtaW4pIHtcbiAgICAgIGlmIChmb3JtYXREYXRlKG1pbikgPT09IGZvcm1hdERhdGUoc2VsZWN0ZWREYXRlKSkge1xuICAgICAgICBzZWxlY3RlZERhdGUgPSBuZXcgRGF0ZShzZWxlY3RlZERhdGUuc2V0TWludXRlcyhtaW4uZ2V0TWludXRlcygpKSk7XG4gICAgICB9IGVsc2UgaWYgKGZvcm1hdERhdGUobWF4KSA9PT0gZm9ybWF0RGF0ZShzZWxlY3RlZERhdGUpKSB7XG4gICAgICAgIHNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKHNlbGVjdGVkRGF0ZS5zZXRNaW51dGVzKG1heC5nZXRNaW51dGVzKCkpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgIH1cbiAgICBzZXRNaW51dGVzKCk7XG4gIH07XG4gIGNvbnN0IHNldE1pbnV0ZSA9ICgpID0+IHtcbiAgICBzZWxlY3RlZERhdGUgPSBuZXcgRGF0ZShcbiAgICAgIHNlbGVjdGVkRGF0ZS5zZXRNaW51dGVzKHBhcnNlSW50KG1pbnV0ZXNTZWxlY3QudmFsdWUpKSxcbiAgICApO1xuICB9O1xuICBjb25zdCBzZXRDbG9jayA9IChob3VyczogbnVtYmVyKSA9PiB7XG4gICAgc2VsZWN0ZWREYXRlID0gbmV3IERhdGUoXG4gICAgICBzZWxlY3RlZERhdGUuc2V0SG91cnMoc2VsZWN0ZWREYXRlLmdldEhvdXJzKCkgKyBob3VycyksXG4gICAgKTtcbiAgfTtcbiAgY29uc3QgZm9ybWF0SG91cnMgPSAoeDogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgICB4ID0geCA+IDEyID8geCAtIDEyIDogeCA9PT0gMCA/IDEyIDogeDtcbiAgICByZXR1cm4gYCR7eH1gLmxlbmd0aCA8IDIgPyBgMCR7eH1gIDogYCR7eH1gO1xuICB9O1xuICBjb25zdCBnZXRIb3VycyA9ICgpID0+IHtcbiAgICBjb25zdCBob3VyTGlzdDogRGF0ZXBpY2tlci5UaW1lW10gPSBbXTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDI0OyB4KyspIHtcbiAgICAgIGhvdXJMaXN0LnB1c2goe1xuICAgICAgICB2YWx1ZTogeCxcbiAgICAgICAgdGV4dDogZm9ybWF0SG91cnMoeCksXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBob3VycyA9IGhvdXJMaXN0O1xuICAgIHNldEhvdXJzKCk7XG4gIH07XG4gIGNvbnN0IHNldEhvdXJzID0gKCkgPT5cbiAgICAoaG91cnMgPSBob3Vycy5tYXAoKGhvdXI6IERhdGVwaWNrZXIuVGltZSkgPT4ge1xuICAgICAgaG91ci5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgaWYgKG1pbiAmJiAhbWF4KSB7XG4gICAgICAgIGlmIChmb3JtYXREYXRlKG1pbikgPT09IGZvcm1hdERhdGUoc2VsZWN0ZWREYXRlKSkge1xuICAgICAgICAgIGhvdXIuZGlzYWJsZWQgPSBob3VyLnZhbHVlIDwgbWluLmdldEhvdXJzKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobWF4ICYmICFtaW4pIHtcbiAgICAgICAgaWYgKGZvcm1hdERhdGUobWF4KSA9PT0gZm9ybWF0RGF0ZShzZWxlY3RlZERhdGUpKSB7XG4gICAgICAgICAgaG91ci5kaXNhYmxlZCA9IGhvdXIudmFsdWUgPiBtYXguZ2V0SG91cnMoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChtYXggJiYgbWluKSB7XG4gICAgICAgIGlmIChmb3JtYXREYXRlKG1pbikgPT09IGZvcm1hdERhdGUoc2VsZWN0ZWREYXRlKSkge1xuICAgICAgICAgIGhvdXIuZGlzYWJsZWQgPSBob3VyLnZhbHVlIDwgbWluLmdldEhvdXJzKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZm9ybWF0RGF0ZShtYXgpID09PSBmb3JtYXREYXRlKHNlbGVjdGVkRGF0ZSkpIHtcbiAgICAgICAgICBob3VyLmRpc2FibGVkID0gaG91ci52YWx1ZSA+IG1heC5nZXRIb3VycygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaG91cjtcbiAgICB9KSk7XG4gIGNvbnN0IGdldE1pbnV0ZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgbWludXRlTGlzdDogRGF0ZXBpY2tlci5UaW1lW10gPSBbXTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDYwOyB4KyspIHtcbiAgICAgIG1pbnV0ZUxpc3QucHVzaCh7XG4gICAgICAgIHZhbHVlOiB4LFxuICAgICAgICB0ZXh0OiBgJHt4fWAubGVuZ3RoIDwgMiA/IGAwJHt4fWAgOiBgJHt4fWAsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIG1pbnV0ZXMgPSBtaW51dGVMaXN0O1xuICAgIHNldE1pbnV0ZXMoKTtcbiAgfTtcbiAgY29uc3Qgc2V0TWludXRlcyA9ICgpID0+XG4gICAgKG1pbnV0ZXMgPSBtaW51dGVzLm1hcCgobWludXRlOiBEYXRlcGlja2VyLlRpbWUpID0+IHtcbiAgICAgIG1pbnV0ZS5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAobWluICYmICFtYXgpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGZvcm1hdERhdGUobWluKSA9PT0gZm9ybWF0RGF0ZShzZWxlY3RlZERhdGUpICYmXG4gICAgICAgICAgc2VsZWN0ZWREYXRlLmdldEhvdXJzKCkgPT09IG1pbi5nZXRIb3VycygpXG4gICAgICAgICkge1xuICAgICAgICAgIG1pbnV0ZS5kaXNhYmxlZCA9IG1pbnV0ZS52YWx1ZSA8IG1pbi5nZXRNaW51dGVzKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobWF4ICYmICFtaW4pIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGZvcm1hdERhdGUobWF4KSA9PT0gZm9ybWF0RGF0ZShzZWxlY3RlZERhdGUpICYmXG4gICAgICAgICAgc2VsZWN0ZWREYXRlLmdldEhvdXJzKCkgPT09IG1heC5nZXRIb3VycygpXG4gICAgICAgICkge1xuICAgICAgICAgIG1pbnV0ZS5kaXNhYmxlZCA9IG1pbnV0ZS52YWx1ZSA+IG1heC5nZXRNaW51dGVzKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobWF4ICYmIG1pbikge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZm9ybWF0RGF0ZShtaW4pID09PSBmb3JtYXREYXRlKHNlbGVjdGVkRGF0ZSkgJiZcbiAgICAgICAgICBzZWxlY3RlZERhdGUuZ2V0SG91cnMoKSA9PT0gbWluLmdldEhvdXJzKClcbiAgICAgICAgKSB7XG4gICAgICAgICAgbWludXRlLmRpc2FibGVkID0gbWludXRlLnZhbHVlIDwgbWluLmdldE1pbnV0ZXMoKTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBmb3JtYXREYXRlKG1heCkgPT09IGZvcm1hdERhdGUoc2VsZWN0ZWREYXRlKSAmJlxuICAgICAgICAgIHNlbGVjdGVkRGF0ZS5nZXRIb3VycygpID09PSBtYXguZ2V0SG91cnMoKVxuICAgICAgICApIHtcbiAgICAgICAgICBtaW51dGUuZGlzYWJsZWQgPSBtaW51dGUudmFsdWUgPiBtYXguZ2V0TWludXRlcygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbWludXRlO1xuICAgIH0pKTtcbiAgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICBsZXQgbW9udGggPSBcIlwiICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpLFxuICAgICAgZGF5ID0gXCJcIiArIGRhdGUuZ2V0RGF0ZSgpLFxuICAgICAgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcblxuICAgIGlmIChtb250aC5sZW5ndGggPCAyKSBtb250aCA9IFwiMFwiICsgbW9udGg7XG4gICAgaWYgKGRheS5sZW5ndGggPCAyKSBkYXkgPSBcIjBcIiArIGRheTtcblxuICAgIHJldHVybiBbeWVhciwgbW9udGgsIGRheV0uam9pbihcIi1cIik7XG4gIH1cbiAgY29uc3Qgc2V0U2VsZWN0ZWQgPSAoKSA9PlxuICAgIChkYXRlcyA9IGRhdGVzLm1hcCgoZDogRGF0ZXBpY2tlci5EYXRlcykgPT4ge1xuICAgICAgaWYgKG1pbiAmJiAhbWF4KSB7XG4gICAgICAgIGQuaXNEaXNhYmxlZCA9IGQuZGF0ZS5nZXRUaW1lKCkgKyBVTklYREFZIDwgbWluLmdldFRpbWUoKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXggJiYgIW1pbikge1xuICAgICAgICBkLmlzRGlzYWJsZWQgPSBkLmRhdGUuZ2V0VGltZSgpID4gbWF4LmdldFRpbWUoKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXggJiYgbWluKSB7XG4gICAgICAgIGQuaXNEaXNhYmxlZCA9XG4gICAgICAgICAgZC5kYXRlLmdldFRpbWUoKSArIFVOSVhEQVkgPCBtaW4uZ2V0VGltZSgpIHx8XG4gICAgICAgICAgZC5kYXRlLmdldFRpbWUoKSA+IG1heC5nZXRUaW1lKCk7XG4gICAgICB9XG4gICAgICBkLmlzU2VsZWN0ZWQgPVxuICAgICAgICBmb3JtYXREYXRlKGQuZGF0ZSkgPT09IGZvcm1hdERhdGUoc2VsZWN0ZWREYXRlKSAmJiAhZC5pc0Rpc2FibGVkXG4gICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgOiBmYWxzZTtcbiAgICAgIHJldHVybiBkO1xuICAgIH0pKTtcbiAgY29uc3Qgc2V0RGF5cyA9ICgpID0+IHtcbiAgICBkYXRlcyA9IFtdO1xuICAgIGN1cnJlbnREYXRlID0gbmV3IERhdGUoY3VycmVudERhdGUuc2V0RGF0ZSgxKSk7XG4gICAgY29uc3QgbGFzdERheSA9IGRheXNJbk1vbnRoKFxuICAgICAgY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIGN1cnJlbnREYXRlLmdldE1vbnRoKCksXG4gICAgKTtcbiAgICBjb25zdCBsYXN0UHJldkRheSA9IGRheXNJbk1vbnRoKFxuICAgICAgY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIGN1cnJlbnREYXRlLmdldE1vbnRoKCksXG4gICAgICAwLFxuICAgICk7XG4gICAgLy8gRGF5cyBpbiBwcmV2aW91cyBtb250aFxuICAgIGZvciAobGV0IHggPSBjdXJyZW50RGF0ZS5nZXREYXkoKTsgeCA+IDA7IHgtLSkge1xuICAgICAgZGF0ZXMgPSBbXG4gICAgICAgIC4uLmRhdGVzLFxuICAgICAgICB7XG4gICAgICAgICAgZGF5OiBsYXN0UHJldkRheSAtIHggKyAxLFxuICAgICAgICAgIGFjdGl2ZU1vbnRoOiBmYWxzZSxcbiAgICAgICAgICBkYXRlOiBuZXcgRGF0ZShcbiAgICAgICAgICAgIGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICBjdXJyZW50RGF0ZS5nZXRNb250aCgpIC0gMSxcbiAgICAgICAgICAgIGxhc3RQcmV2RGF5IC0geCArIDEsXG4gICAgICAgICAgKSxcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgfVxuICAgIC8vIERheXMgaW4gY3VycmVudCBtb250aFxuICAgIGZvciAobGV0IHggPSAxOyB4IDw9IGxhc3REYXk7IHgrKykge1xuICAgICAgZGF0ZXMgPSBbXG4gICAgICAgIC4uLmRhdGVzLFxuICAgICAgICB7XG4gICAgICAgICAgZGF5OiB4LFxuICAgICAgICAgIGFjdGl2ZU1vbnRoOiB0cnVlLFxuICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCksIGN1cnJlbnREYXRlLmdldE1vbnRoKCksIHgpLFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICB9XG4gICAgLy8gRGF5cyBpbiBuZXh0IG1vbnRoXG4gICAgY29uc3QgbmV4dERheXMgPSA0MiAtIGRhdGVzLmxlbmd0aDtcbiAgICBmb3IgKGxldCB4ID0gMTsgeCA8PSBuZXh0RGF5czsgeCsrKSB7XG4gICAgICBkYXRlcyA9IFtcbiAgICAgICAgLi4uZGF0ZXMsXG4gICAgICAgIHtcbiAgICAgICAgICBkYXk6IHgsXG4gICAgICAgICAgYWN0aXZlTW9udGg6IGZhbHNlLFxuICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKFxuICAgICAgICAgICAgY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgIGN1cnJlbnREYXRlLmdldE1vbnRoKCkgKyAxLFxuICAgICAgICAgICAgeCxcbiAgICAgICAgICApLFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICB9XG4gICAgLy8gVXBkYXRlIFNlbGVjdGVkIGRhdGVcbiAgICBzZXRTZWxlY3RlZCgpO1xuICB9O1xuICBzZXREYXlzKCk7XG5cbiAgJDogaWYgKHNlbGVjdGVkRGF0ZSAmJiBjaGFuZ2UpIHtcbiAgICB0aWNrKCkudGhlbigoKSA9PiB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjaGFuZ2Uoc2VsZWN0ZWREYXRlKTtcbiAgICB9KTtcbiAgfVxuICAkOiBjdXJyZW50TW9udGggPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpO1xuICAkOiBjdXJyZW50WWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG4gICQ6IHNlbGVjdGFibGVNb250aCA9IGRhdGVzLmZpbHRlcigoZCkgPT4gZC5hY3RpdmVNb250aCAmJiAhZC5pc0Rpc2FibGVkKVxuICAgIC5sZW5ndGg7XG4gICQ6IGlmICh2YWx1ZSB8fCBtaW4gfHwgbWF4IHx8IHRpbWVwaWNrZXIpIHtcbiAgICBwb3B1bGF0ZSgpO1xuXG4gICAgc2V0U2VsZWN0ZWQoKTtcbiAgfVxuICAkOiBpc0FtRGlzYWJsZWQgPSAoKSA9PiB7XG4gICAgaWYgKG1pbikge1xuICAgICAgaWYgKGZvcm1hdERhdGUobWluKSA9PT0gZm9ybWF0RGF0ZShzZWxlY3RlZERhdGUpKSB7XG4gICAgICAgIHJldHVybiBtaW4uZ2V0SG91cnMoKSA+PSAxMjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gICQ6IGlzUG1EaXNhYmxlZCA9ICgpID0+IHtcbiAgICBpZiAobWF4KSB7XG4gICAgICBpZiAoZm9ybWF0RGF0ZShtYXgpID09PSBmb3JtYXREYXRlKHNlbGVjdGVkRGF0ZSkpIHtcbiAgICAgICAgcmV0dXJuIG1heC5nZXRIb3VycygpIDwgMTI7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuICAvL1RvdGFsIHdpZHRoIGRpdmlkZWQgYnkgZGF5cyBpbiBhIHdlZWtcbiAgJGRheS1ibG9jay13aWR0aDogMTAwJS83O1xuICAkZGF5LXRleHQtc2VsZWN0ZWQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICAkZGF5LWJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICAkZGF5LWJhY2tncm91bmQtaG92ZXItY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XG4gICRkYXktYmFja2dyb3VuZC1zZWxlY3RlZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG5cbiAgLm55bGFzLWRhdGVwaWNrZXIge1xuICAgIC0tZm9udDogc2Fucy1zZXJpZjtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIC0tdGV4dDogYmxhY2s7XG4gICAgLS10ZXh0LWxpZ2h0OiAjNmU2ZTdhO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAtLXNoYWRvdzogMCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTEpLCAwIDNweCAzNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgLS1mb250OiBzYW5zLXNlcmlmO1xuICAgIC0tZm9udC1zaXplOiAxMnB4O1xuICAgIC0tYm9yZGVyOiAjZjdmN2Y3O1xuICAgIC0tcHJpbWFyeTogIzVjNzdmZjtcbiAgfVxuICAuZGF0ZXBpY2tlciB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLmRhdGVwaWNrZXItd3JhcHBlciB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuICAuZGF0ZXBpY2tlci1kYXRlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5sYWJlbC1kYXlzIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG4gIC5kYXRlcGlja2VyLWhlYWRlciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgLmRhdGVwaWNrZXItY29udHJvbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAuZGF0ZXBpY2tlci1idG4ge1xuICAgIGhlaWdodDogMzFweDtcbiAgICB3aWR0aDogMzFweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xuICB9XG4gIC5kYXRlcGlja2VyLWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJGRheS1iYWNrZ3JvdW5kLWhvdmVyLWNvbG9yICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1hY3RpdmUtdGV4dCk7XG4gIH1cbiAgLmRhdGVwaWNrZXItYnRuOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIC5sYWJlbC1kYXlzID4gZGl2IHtcbiAgICBmbGV4LWJhc2lzOiAkZGF5LWJsb2NrLXdpZHRoO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuZGF5cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbiAgLmxhYmVsIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIC5jdXJyZW50IHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIC5jdXJyZW50LW1vbnRoIGgzIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAkZGF5LWJhY2tncm91bmQtc2VsZWN0ZWQtY29sb3IgIWltcG9ydGFudDtcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWFjdGl2ZS10ZXh0KSAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgLmRheXMgZGl2IHtcbiAgICBmbGV4LWJhc2lzOiAkZGF5LWJsb2NrLXdpZHRoO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIH1cbiAgLmRheXMgZGl2IGJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBiYWNrZ3JvdW5kOiAkZGF5LWJhY2tncm91bmQtY29sb3I7XG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gIC5kYXlzIGRpdiBidXR0b246Zm9jdXMge1xuICAgIG91dGxpbmU6IDA7XG4gIH1cbiAgLmRheXMgZGl2IGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJGRheS1iYWNrZ3JvdW5kLWhvdmVyLWNvbG9yO1xuICAgIGNvbG9yOiB2YXIoLS1idXR0b24tYWN0aXZlLXRleHQpICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmRheXMgZGl2IGJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG4gIC50aW1lcGlja2VyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgfVxuICAudGltZXBpY2tlciBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLnRpbWVwaWNrZXIgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgfVxuICAucGlja2VyIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgIGJhY2tncm91bmQ6ICRkYXktYmFja2dyb3VuZC1jb2xvcjtcbiAgICBtYXJnaW46IDBweCAzcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNsb2NrIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogNzVweDtcbiAgICBiYWNrZ3JvdW5kOiAkZGF5LWJhY2tncm91bmQtY29sb3I7XG4gICAgLy8gYm9yZGVyOiBub25lO1xuICB9XG4gIC50aW1lIHtcbiAgICBmbGV4OiAxO1xuICAgIC8vIGJvcmRlcjogbm9uZTtcbiAgfVxuICAuY2xvY2stYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY29sb3I6ICNhNGFhYWQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG4gIC5jbG9jay1idXR0b246ZGlzYWJsZWQge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cbiAgLmNsb2NrLWJ1dHRvbi1hY3RpdmUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICB9XG4gIC50b29sdGlwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nOiA1cHggMDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xMSksIDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCAqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRvcDogMTEwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC02MHB4O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcbiAgfVxuICAudG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuICAuZXJyb3Ige1xuICAgIGJhY2tncm91bmQ6ICNmZmUzZTM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xuICAgIHBhZGRpbmc6IDAuN3JlbTtcbiAgICBjb2xvcjogI2ZmNjA2MDtcbiAgfVxuPC9zdHlsZT5cblxuPGRpdj5cbiAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXJcIiBpZD1cImRhdGVwaWNrZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci13cmFwcGVyXCI+XG4gICAgICA8aDIgY2xhc3M9XCJkYXRlcGlja2VyLWhlYWRlclwiPlxuICAgICAgICBQaWNrIGEgZGF0ZVxuICAgICAgICB7dGltZXBpY2tlciA/IFwiIGFuZCB0aW1lXCIgOiBcIlwifVxuICAgICAgPC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLWNvbnRyb2xzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjdXJyZW50LW1vbnRoXCI+XG4gICAgICAgICAgPGgzPnttb250aHNbY3VycmVudE1vbnRoXX0ge2N1cnJlbnRZZWFyfTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29sdGlwXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGF0ZXBpY2tlci1idG5cIiBvbjpjbGljaz17KCkgPT4gY2hhbmdlTW9udGgoLTEpfT5cbiAgICAgICAgICAgICAgJmxzYXF1bztcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b29sdGlwdGV4dFwiPlByZXZpb3VzIG1vbnRoPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29sdGlwXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGF0ZXBpY2tlci1idG5cIiBvbjpjbGljaz17KCkgPT4gY2hhbmdlTW9udGgoMSl9PlxuICAgICAgICAgICAgICAmcnNhcXVvO1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvb2x0aXB0ZXh0XCI+TmV4dCBtb250aDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItZGF0ZXNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsLWRheXNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF5IGxhYmVsXCI+U1VOPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRheSBsYWJlbFwiPk1PTjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXkgbGFiZWxcIj5UVUU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF5IGxhYmVsXCI+V0VEPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRheSBsYWJlbFwiPlRIVTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXkgbGFiZWxcIj5GUkk8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF5IGxhYmVsXCI+U0FUPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgaWQ9XCJjYWxlbmRhckRheXNcIiBjbGFzcz1cImRheXNcIj5cbiAgICAgICAgICB7I2VhY2ggZGF0ZXMgYXMgZGF0ZSAoZGF0ZSl9XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3M6bGFiZWw9eyFkYXRlLmFjdGl2ZU1vbnRofVxuICAgICAgICAgICAgICAgIGNsYXNzOmN1cnJlbnQ9e2RhdGUuYWN0aXZlTW9udGh9XG4gICAgICAgICAgICAgICAgY2xhc3M6c2VsZWN0ZWQ9e2RhdGUuaXNTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGF0ZS5pc0Rpc2FibGVkfVxuICAgICAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiBzZXREYXRlKGRhdGUuZGF0ZSl9PntkYXRlLmRheX08L2J1dHRvblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7I2lmIHRpbWVwaWNrZXJ9XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVwaWNrZXJcIj5cbiAgICAgICAgICAgIDxwPlNldCB0aW1lPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVcIj5cbiAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgIGNsYXNzPVwicGlja2VyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWREYXRlLmdldEhvdXJzKCl9XG4gICAgICAgICAgICAgICAgYmluZDp0aGlzPXtob3Vyc1NlbGVjdH1cbiAgICAgICAgICAgICAgICBvbjpibHVyPXsoKSA9PiBzZXRIb3VyKCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7I2VhY2ggaG91cnMgYXMgaG91ciAoaG91cil9XG4gICAgICAgICAgICAgICAgICB7I2lmIHNlbGVjdGVkRGF0ZS5nZXRIb3VycygpID49IDEyICYmIGhvdXIudmFsdWUgPj0gMTJ9XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2hvdXIudmFsdWV9IGRpc2FibGVkPXtob3VyLmRpc2FibGVkfT5cbiAgICAgICAgICAgICAgICAgICAgICB7aG91ci50ZXh0fVxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIHs6ZWxzZSBpZiBzZWxlY3RlZERhdGUuZ2V0SG91cnMoKSA8IDEyICYmIGhvdXIudmFsdWUgPCAxMn1cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aG91ci52YWx1ZX0gZGlzYWJsZWQ9e2hvdXIuZGlzYWJsZWR9PlxuICAgICAgICAgICAgICAgICAgICAgIHtob3VyLnRleHR9XG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwaWNrZXJcIlxuICAgICAgICAgICAgICAgIGJpbmQ6dGhpcz17bWludXRlc1NlbGVjdH1cbiAgICAgICAgICAgICAgICBvbjpibHVyPXsoKSA9PiBzZXRNaW51dGUoKX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWREYXRlLmdldE1pbnV0ZXMoKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsjZWFjaCBtaW51dGVzIGFzIG1pbnV0ZSAobWludXRlKX1cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e21pbnV0ZS52YWx1ZX0gZGlzYWJsZWQ9e21pbnV0ZS5kaXNhYmxlZH0+XG4gICAgICAgICAgICAgICAgICAgIHttaW51dGUudGV4dH1cbiAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbG9ja1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3M9e3NlbGVjdGVkRGF0ZS5nZXRIb3VycygpIDwgMTJcbiAgICAgICAgICAgICAgICAgID8gXCJjbG9jay1idXR0b24gY2xvY2stYnV0dG9uLWFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICA6IFwiY2xvY2stYnV0dG9uXCJ9XG4gICAgICAgICAgICAgICAgb246Y2xpY2s9eygpID0+IHNlbGVjdGVkRGF0ZS5nZXRIb3VycygpID49IDEyICYmIHNldENsb2NrKC0xMil9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzQW1EaXNhYmxlZCgpfT5BTTwvYnV0dG9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzPXtzZWxlY3RlZERhdGUuZ2V0SG91cnMoKSA+PSAxMlxuICAgICAgICAgICAgICAgICAgPyBcImNsb2NrLWJ1dHRvbiBjbG9jay1idXR0b24tYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgIDogXCJjbG9jay1idXR0b25cIn1cbiAgICAgICAgICAgICAgICBvbjpjbGljaz17KCkgPT4gc2VsZWN0ZWREYXRlLmdldEhvdXJzKCkgPCAxMiAmJiBzZXRDbG9jaygxMil9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzUG1EaXNhYmxlZCgpfT5QTTwvYnV0dG9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB7L2lmfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iLCI8c3ZlbHRlOm9wdGlvbnMgdGFnPVwibnlsYXMtY29tcG9zZXItZGF0ZXBpY2tlci1tb2RhbFwiIC8+XG5cbjxzY3JpcHQgdHlwZT1cInRzXCI+XG4gIGltcG9ydCBcIi4uLy4uLy4uL2RhdGVwaWNrZXIvc3JjL0RhdGVwaWNrZXIuc3ZlbHRlXCI7IC8vIFRPRE86IGZvciBsb2NhbCBkZXZlbG9wbWVudC4gVGhpcydsbCB1cGRhdGUgeW91ciBidW5kbGUgb24gY29tbW9ucyBjaGFuZ2VzLlxuICBpbXBvcnQgQ2xvc2VJY29uIGZyb20gXCIuLi9hc3NldHMvY2xvc2Uuc3ZnXCI7XG4gIGltcG9ydCB0eXBlIHtcbiAgICBEYXRlcGlja2VyQ2FsbGJhY2ssXG4gICAgRGF0ZXBpY2tlckNsb3NlQ2FsbGJhY2ssXG4gIH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL0NvbXBvc2VyXCI7XG5cbiAgbGV0IHNlbGVjdGVkRGF0ZTogRGF0ZTtcbiAgZXhwb3J0IGxldCBzY2hlZHVsZTogRGF0ZXBpY2tlckNhbGxiYWNrO1xuICBleHBvcnQgbGV0IGNsb3NlOiBEYXRlcGlja2VyQ2xvc2VDYWxsYmFjaztcbiAgY29uc3QgY2hhbmdlID0gKGRhdGU6IERhdGUpID0+IHtcbiAgICBzZWxlY3RlZERhdGUgPSBkYXRlO1xuICB9O1xuXG4gIGNvbnN0IHN1Ym1pdCA9ICgpID0+IHtcbiAgICBzY2hlZHVsZShNYXRoLnRydW5jKHNlbGVjdGVkRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKSk7XG4gIH07XG48L3NjcmlwdD5cblxuPHN0eWxlIHR5cGU9XCJzY3NzXCI+XG4gIC8vIC5tb2RhbCB7XG5cbiAgLy8gICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cbiAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG4gIC8vIH1cblxuICAvKiBNb2RhbCBDb250ZW50L0JveCAqL1xuICAubW9kYWwtY29udGVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gICAgYm94LXNoYWRvdzogdmFyKFxuICAgICAgLS1jb21wb3Nlci1zaGFkb3csXG4gICAgICAwIDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xMSksXG4gICAgICAwIDNweCAzNnB4IHJnYmEoMCwgMCwgMCwgMC4xMilcbiAgICApO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvbXBvc2VyLWJvcmRlci1yYWRpdXMsIDZweCk7XG4gIH1cblxuICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXG4gIC5jbG9zZSB7XG4gICAgY29sb3I6IHZhcigtLWNvbXBvc2VyLXRleHQtbGlnaHQtY29sb3IsICM2ZTZlN2EpO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5jbG9zZTpob3ZlcixcbiAgLmNsb3NlOmZvY3VzIHtcbiAgICBjb2xvcjogdmFyKC0tY29tcG9zZXItdGV4dC1jb2xvciwgYmxhY2spO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuc2F2ZS1idG4ge1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb21wb3Nlci1wcmltYXJ5LWNvbG9yLCAjNWM3N2ZmKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgdmFyKC0tY29tcG9zZXItYm9yZGVyLXJhZGl1cywgNnB4KVxuICAgICAgdmFyKC0tY29tcG9zZXItYm9yZGVyLXJhZGl1cywgNnB4KTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tY29tcG9zZXItZm9udCwgc2Fucy1zZXJpZik7XG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29tcG9zZXItcHJpbWFyeS1kYXJrLWNvbG9yLCAjMjk0ZGZmKTtcbiAgICB9XG4gIH1cblxuICAuZGF0ZXBpY2tlci1tb2RhbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogY2FsYyh2YXIoLS1jb21wb3Nlci1vdXRlci1wYWRkaW5nLCAxNXB4KSAqIDAuODUpO1xuICAgIHJpZ2h0OiBjYWxjKHZhcigtLWNvbXBvc2VyLW91dGVyLXBhZGRpbmcsIDE1cHgpICogMC44NSk7XG4gICAgbGVmdDogY2FsYyh2YXIoLS1jb21wb3Nlci1vdXRlci1wYWRkaW5nLCAxNXB4KSAqIDAuODUpO1xuICB9XG5cbiAgLkNsb3NlSWNvbiB7XG4gICAgZmlsbDogdmFyKC0tY29tcG9zZXItaWNvbnMtY29sb3IsICM2NjY3NzQpO1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgfVxuPC9zdHlsZT5cblxuPCEtLSBNb2RhbCBjb250ZW50IC0tPlxuXG48ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1tb2RhbFwiPlxuICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgIDxzcGFuIGNsYXNzPVwiY2xvc2VcIiBvbjpjbGljaz17Y2xvc2V9PlxuICAgICAgPENsb3NlSWNvbiBjbGFzcz1cIkNsb3NlSWNvblwiIC8+XG4gICAgPC9zcGFuPlxuICAgIDxueWxhcy1kYXRlcGlja2VyIHtjaGFuZ2V9IHRpbWVwaWNrZXI9e3RydWV9IG1pbj17bmV3IERhdGUoKX0gLz5cbiAgICA8YnV0dG9uIGNsYXNzPVwic2F2ZS1idG5cIiBvbjpjbGljaz17c3VibWl0fT4gU2NoZWR1bGUgc2VuZCA8L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Rpdj5cbiIsIi8qISBAbGljZW5zZSBET01QdXJpZnkgMi4zLjUgfCAoYykgQ3VyZTUzIGFuZCBvdGhlciBjb250cmlidXRvcnMgfCBSZWxlYXNlZCB1bmRlciB0aGUgQXBhY2hlIGxpY2Vuc2UgMi4wIGFuZCBNb3ppbGxhIFB1YmxpYyBMaWNlbnNlIDIuMCB8IGdpdGh1Yi5jb20vY3VyZTUzL0RPTVB1cmlmeS9ibG9iLzIuMy41L0xJQ0VOU0UgKi9cblxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5ET01QdXJpZnkgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCBmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuICB2YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QuaGFzT3duUHJvcGVydHksXG4gICAgICBzZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZixcbiAgICAgIGlzRnJvemVuID0gT2JqZWN0LmlzRnJvemVuLFxuICAgICAgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gICAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICB2YXIgZnJlZXplID0gT2JqZWN0LmZyZWV6ZSxcbiAgICAgIHNlYWwgPSBPYmplY3Quc2VhbCxcbiAgICAgIGNyZWF0ZSA9IE9iamVjdC5jcmVhdGU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0c1xuXG4gIHZhciBfcmVmID0gdHlwZW9mIFJlZmxlY3QgIT09ICd1bmRlZmluZWQnICYmIFJlZmxlY3QsXG4gICAgICBhcHBseSA9IF9yZWYuYXBwbHksXG4gICAgICBjb25zdHJ1Y3QgPSBfcmVmLmNvbnN0cnVjdDtcblxuICBpZiAoIWFwcGx5KSB7XG4gICAgYXBwbHkgPSBmdW5jdGlvbiBhcHBseShmdW4sIHRoaXNWYWx1ZSwgYXJncykge1xuICAgICAgcmV0dXJuIGZ1bi5hcHBseSh0aGlzVmFsdWUsIGFyZ3MpO1xuICAgIH07XG4gIH1cblxuICBpZiAoIWZyZWV6ZSkge1xuICAgIGZyZWV6ZSA9IGZ1bmN0aW9uIGZyZWV6ZSh4KSB7XG4gICAgICByZXR1cm4geDtcbiAgICB9O1xuICB9XG5cbiAgaWYgKCFzZWFsKSB7XG4gICAgc2VhbCA9IGZ1bmN0aW9uIHNlYWwoeCkge1xuICAgICAgcmV0dXJuIHg7XG4gICAgfTtcbiAgfVxuXG4gIGlmICghY29uc3RydWN0KSB7XG4gICAgY29uc3RydWN0ID0gZnVuY3Rpb24gY29uc3RydWN0KEZ1bmMsIGFyZ3MpIHtcbiAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KEZ1bmMsIFtudWxsXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGFyZ3MpKSkpKCk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBhcnJheUZvckVhY2ggPSB1bmFwcGx5KEFycmF5LnByb3RvdHlwZS5mb3JFYWNoKTtcbiAgdmFyIGFycmF5UG9wID0gdW5hcHBseShBcnJheS5wcm90b3R5cGUucG9wKTtcbiAgdmFyIGFycmF5UHVzaCA9IHVuYXBwbHkoQXJyYXkucHJvdG90eXBlLnB1c2gpO1xuXG4gIHZhciBzdHJpbmdUb0xvd2VyQ2FzZSA9IHVuYXBwbHkoU3RyaW5nLnByb3RvdHlwZS50b0xvd2VyQ2FzZSk7XG4gIHZhciBzdHJpbmdNYXRjaCA9IHVuYXBwbHkoU3RyaW5nLnByb3RvdHlwZS5tYXRjaCk7XG4gIHZhciBzdHJpbmdSZXBsYWNlID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UpO1xuICB2YXIgc3RyaW5nSW5kZXhPZiA9IHVuYXBwbHkoU3RyaW5nLnByb3RvdHlwZS5pbmRleE9mKTtcbiAgdmFyIHN0cmluZ1RyaW0gPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUudHJpbSk7XG5cbiAgdmFyIHJlZ0V4cFRlc3QgPSB1bmFwcGx5KFJlZ0V4cC5wcm90b3R5cGUudGVzdCk7XG5cbiAgdmFyIHR5cGVFcnJvckNyZWF0ZSA9IHVuY29uc3RydWN0KFR5cGVFcnJvcik7XG5cbiAgZnVuY3Rpb24gdW5hcHBseShmdW5jKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0aGlzQXJnKSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzQXJnLCBhcmdzKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gdW5jb25zdHJ1Y3QoZnVuYykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb25zdHJ1Y3QoZnVuYywgYXJncyk7XG4gICAgfTtcbiAgfVxuXG4gIC8qIEFkZCBwcm9wZXJ0aWVzIHRvIGEgbG9va3VwIHRhYmxlICovXG4gIGZ1bmN0aW9uIGFkZFRvU2V0KHNldCwgYXJyYXkpIHtcbiAgICBpZiAoc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIC8vIE1ha2UgJ2luJyBhbmQgdHJ1dGh5IGNoZWNrcyBsaWtlIEJvb2xlYW4oc2V0LmNvbnN0cnVjdG9yKVxuICAgICAgLy8gaW5kZXBlbmRlbnQgb2YgYW55IHByb3BlcnRpZXMgZGVmaW5lZCBvbiBPYmplY3QucHJvdG90eXBlLlxuICAgICAgLy8gUHJldmVudCBwcm90b3R5cGUgc2V0dGVycyBmcm9tIGludGVyY2VwdGluZyBzZXQgYXMgYSB0aGlzIHZhbHVlLlxuICAgICAgc2V0UHJvdG90eXBlT2Yoc2V0LCBudWxsKTtcbiAgICB9XG5cbiAgICB2YXIgbCA9IGFycmF5Lmxlbmd0aDtcbiAgICB3aGlsZSAobC0tKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IGFycmF5W2xdO1xuICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgbGNFbGVtZW50ID0gc3RyaW5nVG9Mb3dlckNhc2UoZWxlbWVudCk7XG4gICAgICAgIGlmIChsY0VsZW1lbnQgIT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAvLyBDb25maWcgcHJlc2V0cyAoZS5nLiB0YWdzLmpzLCBhdHRycy5qcykgYXJlIGltbXV0YWJsZS5cbiAgICAgICAgICBpZiAoIWlzRnJvemVuKGFycmF5KSkge1xuICAgICAgICAgICAgYXJyYXlbbF0gPSBsY0VsZW1lbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZWxlbWVudCA9IGxjRWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzZXRbZWxlbWVudF0gPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzZXQ7XG4gIH1cblxuICAvKiBTaGFsbG93IGNsb25lIGFuIG9iamVjdCAqL1xuICBmdW5jdGlvbiBjbG9uZShvYmplY3QpIHtcbiAgICB2YXIgbmV3T2JqZWN0ID0gY3JlYXRlKG51bGwpO1xuXG4gICAgdmFyIHByb3BlcnR5ID0gdm9pZCAwO1xuICAgIGZvciAocHJvcGVydHkgaW4gb2JqZWN0KSB7XG4gICAgICBpZiAoYXBwbHkoaGFzT3duUHJvcGVydHksIG9iamVjdCwgW3Byb3BlcnR5XSkpIHtcbiAgICAgICAgbmV3T2JqZWN0W3Byb3BlcnR5XSA9IG9iamVjdFtwcm9wZXJ0eV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld09iamVjdDtcbiAgfVxuXG4gIC8qIElFMTAgZG9lc24ndCBzdXBwb3J0IF9fbG9va3VwR2V0dGVyX18gc28gbGV0cydcbiAgICogc2ltdWxhdGUgaXQuIEl0IGFsc28gYXV0b21hdGljYWxseSBjaGVja3NcbiAgICogaWYgdGhlIHByb3AgaXMgZnVuY3Rpb24gb3IgZ2V0dGVyIGFuZCBiZWhhdmVzXG4gICAqIGFjY29yZGluZ2x5LiAqL1xuICBmdW5jdGlvbiBsb29rdXBHZXR0ZXIob2JqZWN0LCBwcm9wKSB7XG4gICAgd2hpbGUgKG9iamVjdCAhPT0gbnVsbCkge1xuICAgICAgdmFyIGRlc2MgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wKTtcbiAgICAgIGlmIChkZXNjKSB7XG4gICAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICAgIHJldHVybiB1bmFwcGx5KGRlc2MuZ2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgZGVzYy52YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiB1bmFwcGx5KGRlc2MudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmFsbGJhY2tWYWx1ZShlbGVtZW50KSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2ZhbGxiYWNrIHZhbHVlIGZvcicsIGVsZW1lbnQpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbGxiYWNrVmFsdWU7XG4gIH1cblxuICB2YXIgaHRtbCA9IGZyZWV6ZShbJ2EnLCAnYWJicicsICdhY3JvbnltJywgJ2FkZHJlc3MnLCAnYXJlYScsICdhcnRpY2xlJywgJ2FzaWRlJywgJ2F1ZGlvJywgJ2InLCAnYmRpJywgJ2JkbycsICdiaWcnLCAnYmxpbmsnLCAnYmxvY2txdW90ZScsICdib2R5JywgJ2JyJywgJ2J1dHRvbicsICdjYW52YXMnLCAnY2FwdGlvbicsICdjZW50ZXInLCAnY2l0ZScsICdjb2RlJywgJ2NvbCcsICdjb2xncm91cCcsICdjb250ZW50JywgJ2RhdGEnLCAnZGF0YWxpc3QnLCAnZGQnLCAnZGVjb3JhdG9yJywgJ2RlbCcsICdkZXRhaWxzJywgJ2RmbicsICdkaWFsb2cnLCAnZGlyJywgJ2RpdicsICdkbCcsICdkdCcsICdlbGVtZW50JywgJ2VtJywgJ2ZpZWxkc2V0JywgJ2ZpZ2NhcHRpb24nLCAnZmlndXJlJywgJ2ZvbnQnLCAnZm9vdGVyJywgJ2Zvcm0nLCAnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnaGVhZCcsICdoZWFkZXInLCAnaGdyb3VwJywgJ2hyJywgJ2h0bWwnLCAnaScsICdpbWcnLCAnaW5wdXQnLCAnaW5zJywgJ2tiZCcsICdsYWJlbCcsICdsZWdlbmQnLCAnbGknLCAnbWFpbicsICdtYXAnLCAnbWFyaycsICdtYXJxdWVlJywgJ21lbnUnLCAnbWVudWl0ZW0nLCAnbWV0ZXInLCAnbmF2JywgJ25vYnInLCAnb2wnLCAnb3B0Z3JvdXAnLCAnb3B0aW9uJywgJ291dHB1dCcsICdwJywgJ3BpY3R1cmUnLCAncHJlJywgJ3Byb2dyZXNzJywgJ3EnLCAncnAnLCAncnQnLCAncnVieScsICdzJywgJ3NhbXAnLCAnc2VjdGlvbicsICdzZWxlY3QnLCAnc2hhZG93JywgJ3NtYWxsJywgJ3NvdXJjZScsICdzcGFjZXInLCAnc3BhbicsICdzdHJpa2UnLCAnc3Ryb25nJywgJ3N0eWxlJywgJ3N1YicsICdzdW1tYXJ5JywgJ3N1cCcsICd0YWJsZScsICd0Ym9keScsICd0ZCcsICd0ZW1wbGF0ZScsICd0ZXh0YXJlYScsICd0Zm9vdCcsICd0aCcsICd0aGVhZCcsICd0aW1lJywgJ3RyJywgJ3RyYWNrJywgJ3R0JywgJ3UnLCAndWwnLCAndmFyJywgJ3ZpZGVvJywgJ3diciddKTtcblxuICAvLyBTVkdcbiAgdmFyIHN2ZyA9IGZyZWV6ZShbJ3N2ZycsICdhJywgJ2FsdGdseXBoJywgJ2FsdGdseXBoZGVmJywgJ2FsdGdseXBoaXRlbScsICdhbmltYXRlY29sb3InLCAnYW5pbWF0ZW1vdGlvbicsICdhbmltYXRldHJhbnNmb3JtJywgJ2NpcmNsZScsICdjbGlwcGF0aCcsICdkZWZzJywgJ2Rlc2MnLCAnZWxsaXBzZScsICdmaWx0ZXInLCAnZm9udCcsICdnJywgJ2dseXBoJywgJ2dseXBocmVmJywgJ2hrZXJuJywgJ2ltYWdlJywgJ2xpbmUnLCAnbGluZWFyZ3JhZGllbnQnLCAnbWFya2VyJywgJ21hc2snLCAnbWV0YWRhdGEnLCAnbXBhdGgnLCAncGF0aCcsICdwYXR0ZXJuJywgJ3BvbHlnb24nLCAncG9seWxpbmUnLCAncmFkaWFsZ3JhZGllbnQnLCAncmVjdCcsICdzdG9wJywgJ3N0eWxlJywgJ3N3aXRjaCcsICdzeW1ib2wnLCAndGV4dCcsICd0ZXh0cGF0aCcsICd0aXRsZScsICd0cmVmJywgJ3RzcGFuJywgJ3ZpZXcnLCAndmtlcm4nXSk7XG5cbiAgdmFyIHN2Z0ZpbHRlcnMgPSBmcmVlemUoWydmZUJsZW5kJywgJ2ZlQ29sb3JNYXRyaXgnLCAnZmVDb21wb25lbnRUcmFuc2ZlcicsICdmZUNvbXBvc2l0ZScsICdmZUNvbnZvbHZlTWF0cml4JywgJ2ZlRGlmZnVzZUxpZ2h0aW5nJywgJ2ZlRGlzcGxhY2VtZW50TWFwJywgJ2ZlRGlzdGFudExpZ2h0JywgJ2ZlRmxvb2QnLCAnZmVGdW5jQScsICdmZUZ1bmNCJywgJ2ZlRnVuY0cnLCAnZmVGdW5jUicsICdmZUdhdXNzaWFuQmx1cicsICdmZUltYWdlJywgJ2ZlTWVyZ2UnLCAnZmVNZXJnZU5vZGUnLCAnZmVNb3JwaG9sb2d5JywgJ2ZlT2Zmc2V0JywgJ2ZlUG9pbnRMaWdodCcsICdmZVNwZWN1bGFyTGlnaHRpbmcnLCAnZmVTcG90TGlnaHQnLCAnZmVUaWxlJywgJ2ZlVHVyYnVsZW5jZSddKTtcblxuICAvLyBMaXN0IG9mIFNWRyBlbGVtZW50cyB0aGF0IGFyZSBkaXNhbGxvd2VkIGJ5IGRlZmF1bHQuXG4gIC8vIFdlIHN0aWxsIG5lZWQgdG8ga25vdyB0aGVtIHNvIHRoYXQgd2UgY2FuIGRvIG5hbWVzcGFjZVxuICAvLyBjaGVja3MgcHJvcGVybHkgaW4gY2FzZSBvbmUgd2FudHMgdG8gYWRkIHRoZW0gdG9cbiAgLy8gYWxsb3ctbGlzdC5cbiAgdmFyIHN2Z0Rpc2FsbG93ZWQgPSBmcmVlemUoWydhbmltYXRlJywgJ2NvbG9yLXByb2ZpbGUnLCAnY3Vyc29yJywgJ2Rpc2NhcmQnLCAnZmVkcm9wc2hhZG93JywgJ2ZvbnQtZmFjZScsICdmb250LWZhY2UtZm9ybWF0JywgJ2ZvbnQtZmFjZS1uYW1lJywgJ2ZvbnQtZmFjZS1zcmMnLCAnZm9udC1mYWNlLXVyaScsICdmb3JlaWdub2JqZWN0JywgJ2hhdGNoJywgJ2hhdGNocGF0aCcsICdtZXNoJywgJ21lc2hncmFkaWVudCcsICdtZXNocGF0Y2gnLCAnbWVzaHJvdycsICdtaXNzaW5nLWdseXBoJywgJ3NjcmlwdCcsICdzZXQnLCAnc29saWRjb2xvcicsICd1bmtub3duJywgJ3VzZSddKTtcblxuICB2YXIgbWF0aE1sID0gZnJlZXplKFsnbWF0aCcsICdtZW5jbG9zZScsICdtZXJyb3InLCAnbWZlbmNlZCcsICdtZnJhYycsICdtZ2x5cGgnLCAnbWknLCAnbWxhYmVsZWR0cicsICdtbXVsdGlzY3JpcHRzJywgJ21uJywgJ21vJywgJ21vdmVyJywgJ21wYWRkZWQnLCAnbXBoYW50b20nLCAnbXJvb3QnLCAnbXJvdycsICdtcycsICdtc3BhY2UnLCAnbXNxcnQnLCAnbXN0eWxlJywgJ21zdWInLCAnbXN1cCcsICdtc3Vic3VwJywgJ210YWJsZScsICdtdGQnLCAnbXRleHQnLCAnbXRyJywgJ211bmRlcicsICdtdW5kZXJvdmVyJ10pO1xuXG4gIC8vIFNpbWlsYXJseSB0byBTVkcsIHdlIHdhbnQgdG8ga25vdyBhbGwgTWF0aE1MIGVsZW1lbnRzLFxuICAvLyBldmVuIHRob3NlIHRoYXQgd2UgZGlzYWxsb3cgYnkgZGVmYXVsdC5cbiAgdmFyIG1hdGhNbERpc2FsbG93ZWQgPSBmcmVlemUoWydtYWN0aW9uJywgJ21hbGlnbmdyb3VwJywgJ21hbGlnbm1hcmsnLCAnbWxvbmdkaXYnLCAnbXNjYXJyaWVzJywgJ21zY2FycnknLCAnbXNncm91cCcsICdtc3RhY2snLCAnbXNsaW5lJywgJ21zcm93JywgJ3NlbWFudGljcycsICdhbm5vdGF0aW9uJywgJ2Fubm90YXRpb24teG1sJywgJ21wcmVzY3JpcHRzJywgJ25vbmUnXSk7XG5cbiAgdmFyIHRleHQgPSBmcmVlemUoWycjdGV4dCddKTtcblxuICB2YXIgaHRtbCQxID0gZnJlZXplKFsnYWNjZXB0JywgJ2FjdGlvbicsICdhbGlnbicsICdhbHQnLCAnYXV0b2NhcGl0YWxpemUnLCAnYXV0b2NvbXBsZXRlJywgJ2F1dG9waWN0dXJlaW5waWN0dXJlJywgJ2F1dG9wbGF5JywgJ2JhY2tncm91bmQnLCAnYmdjb2xvcicsICdib3JkZXInLCAnY2FwdHVyZScsICdjZWxscGFkZGluZycsICdjZWxsc3BhY2luZycsICdjaGVja2VkJywgJ2NpdGUnLCAnY2xhc3MnLCAnY2xlYXInLCAnY29sb3InLCAnY29scycsICdjb2xzcGFuJywgJ2NvbnRyb2xzJywgJ2NvbnRyb2xzbGlzdCcsICdjb29yZHMnLCAnY3Jvc3NvcmlnaW4nLCAnZGF0ZXRpbWUnLCAnZGVjb2RpbmcnLCAnZGVmYXVsdCcsICdkaXInLCAnZGlzYWJsZWQnLCAnZGlzYWJsZXBpY3R1cmVpbnBpY3R1cmUnLCAnZGlzYWJsZXJlbW90ZXBsYXliYWNrJywgJ2Rvd25sb2FkJywgJ2RyYWdnYWJsZScsICdlbmN0eXBlJywgJ2VudGVya2V5aGludCcsICdmYWNlJywgJ2ZvcicsICdoZWFkZXJzJywgJ2hlaWdodCcsICdoaWRkZW4nLCAnaGlnaCcsICdocmVmJywgJ2hyZWZsYW5nJywgJ2lkJywgJ2lucHV0bW9kZScsICdpbnRlZ3JpdHknLCAnaXNtYXAnLCAna2luZCcsICdsYWJlbCcsICdsYW5nJywgJ2xpc3QnLCAnbG9hZGluZycsICdsb29wJywgJ2xvdycsICdtYXgnLCAnbWF4bGVuZ3RoJywgJ21lZGlhJywgJ21ldGhvZCcsICdtaW4nLCAnbWlubGVuZ3RoJywgJ211bHRpcGxlJywgJ211dGVkJywgJ25hbWUnLCAnbm9uY2UnLCAnbm9zaGFkZScsICdub3ZhbGlkYXRlJywgJ25vd3JhcCcsICdvcGVuJywgJ29wdGltdW0nLCAncGF0dGVybicsICdwbGFjZWhvbGRlcicsICdwbGF5c2lubGluZScsICdwb3N0ZXInLCAncHJlbG9hZCcsICdwdWJkYXRlJywgJ3JhZGlvZ3JvdXAnLCAncmVhZG9ubHknLCAncmVsJywgJ3JlcXVpcmVkJywgJ3JldicsICdyZXZlcnNlZCcsICdyb2xlJywgJ3Jvd3MnLCAncm93c3BhbicsICdzcGVsbGNoZWNrJywgJ3Njb3BlJywgJ3NlbGVjdGVkJywgJ3NoYXBlJywgJ3NpemUnLCAnc2l6ZXMnLCAnc3BhbicsICdzcmNsYW5nJywgJ3N0YXJ0JywgJ3NyYycsICdzcmNzZXQnLCAnc3RlcCcsICdzdHlsZScsICdzdW1tYXJ5JywgJ3RhYmluZGV4JywgJ3RpdGxlJywgJ3RyYW5zbGF0ZScsICd0eXBlJywgJ3VzZW1hcCcsICd2YWxpZ24nLCAndmFsdWUnLCAnd2lkdGgnLCAneG1sbnMnLCAnc2xvdCddKTtcblxuICB2YXIgc3ZnJDEgPSBmcmVlemUoWydhY2NlbnQtaGVpZ2h0JywgJ2FjY3VtdWxhdGUnLCAnYWRkaXRpdmUnLCAnYWxpZ25tZW50LWJhc2VsaW5lJywgJ2FzY2VudCcsICdhdHRyaWJ1dGVuYW1lJywgJ2F0dHJpYnV0ZXR5cGUnLCAnYXppbXV0aCcsICdiYXNlZnJlcXVlbmN5JywgJ2Jhc2VsaW5lLXNoaWZ0JywgJ2JlZ2luJywgJ2JpYXMnLCAnYnknLCAnY2xhc3MnLCAnY2xpcCcsICdjbGlwcGF0aHVuaXRzJywgJ2NsaXAtcGF0aCcsICdjbGlwLXJ1bGUnLCAnY29sb3InLCAnY29sb3ItaW50ZXJwb2xhdGlvbicsICdjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnMnLCAnY29sb3ItcHJvZmlsZScsICdjb2xvci1yZW5kZXJpbmcnLCAnY3gnLCAnY3knLCAnZCcsICdkeCcsICdkeScsICdkaWZmdXNlY29uc3RhbnQnLCAnZGlyZWN0aW9uJywgJ2Rpc3BsYXknLCAnZGl2aXNvcicsICdkdXInLCAnZWRnZW1vZGUnLCAnZWxldmF0aW9uJywgJ2VuZCcsICdmaWxsJywgJ2ZpbGwtb3BhY2l0eScsICdmaWxsLXJ1bGUnLCAnZmlsdGVyJywgJ2ZpbHRlcnVuaXRzJywgJ2Zsb29kLWNvbG9yJywgJ2Zsb29kLW9wYWNpdHknLCAnZm9udC1mYW1pbHknLCAnZm9udC1zaXplJywgJ2ZvbnQtc2l6ZS1hZGp1c3QnLCAnZm9udC1zdHJldGNoJywgJ2ZvbnQtc3R5bGUnLCAnZm9udC12YXJpYW50JywgJ2ZvbnQtd2VpZ2h0JywgJ2Z4JywgJ2Z5JywgJ2cxJywgJ2cyJywgJ2dseXBoLW5hbWUnLCAnZ2x5cGhyZWYnLCAnZ3JhZGllbnR1bml0cycsICdncmFkaWVudHRyYW5zZm9ybScsICdoZWlnaHQnLCAnaHJlZicsICdpZCcsICdpbWFnZS1yZW5kZXJpbmcnLCAnaW4nLCAnaW4yJywgJ2snLCAnazEnLCAnazInLCAnazMnLCAnazQnLCAna2VybmluZycsICdrZXlwb2ludHMnLCAna2V5c3BsaW5lcycsICdrZXl0aW1lcycsICdsYW5nJywgJ2xlbmd0aGFkanVzdCcsICdsZXR0ZXItc3BhY2luZycsICdrZXJuZWxtYXRyaXgnLCAna2VybmVsdW5pdGxlbmd0aCcsICdsaWdodGluZy1jb2xvcicsICdsb2NhbCcsICdtYXJrZXItZW5kJywgJ21hcmtlci1taWQnLCAnbWFya2VyLXN0YXJ0JywgJ21hcmtlcmhlaWdodCcsICdtYXJrZXJ1bml0cycsICdtYXJrZXJ3aWR0aCcsICdtYXNrY29udGVudHVuaXRzJywgJ21hc2t1bml0cycsICdtYXgnLCAnbWFzaycsICdtZWRpYScsICdtZXRob2QnLCAnbW9kZScsICdtaW4nLCAnbmFtZScsICdudW1vY3RhdmVzJywgJ29mZnNldCcsICdvcGVyYXRvcicsICdvcGFjaXR5JywgJ29yZGVyJywgJ29yaWVudCcsICdvcmllbnRhdGlvbicsICdvcmlnaW4nLCAnb3ZlcmZsb3cnLCAncGFpbnQtb3JkZXInLCAncGF0aCcsICdwYXRobGVuZ3RoJywgJ3BhdHRlcm5jb250ZW50dW5pdHMnLCAncGF0dGVybnRyYW5zZm9ybScsICdwYXR0ZXJudW5pdHMnLCAncG9pbnRzJywgJ3ByZXNlcnZlYWxwaGEnLCAncHJlc2VydmVhc3BlY3RyYXRpbycsICdwcmltaXRpdmV1bml0cycsICdyJywgJ3J4JywgJ3J5JywgJ3JhZGl1cycsICdyZWZ4JywgJ3JlZnknLCAncmVwZWF0Y291bnQnLCAncmVwZWF0ZHVyJywgJ3Jlc3RhcnQnLCAncmVzdWx0JywgJ3JvdGF0ZScsICdzY2FsZScsICdzZWVkJywgJ3NoYXBlLXJlbmRlcmluZycsICdzcGVjdWxhcmNvbnN0YW50JywgJ3NwZWN1bGFyZXhwb25lbnQnLCAnc3ByZWFkbWV0aG9kJywgJ3N0YXJ0b2Zmc2V0JywgJ3N0ZGRldmlhdGlvbicsICdzdGl0Y2h0aWxlcycsICdzdG9wLWNvbG9yJywgJ3N0b3Atb3BhY2l0eScsICdzdHJva2UtZGFzaGFycmF5JywgJ3N0cm9rZS1kYXNob2Zmc2V0JywgJ3N0cm9rZS1saW5lY2FwJywgJ3N0cm9rZS1saW5lam9pbicsICdzdHJva2UtbWl0ZXJsaW1pdCcsICdzdHJva2Utb3BhY2l0eScsICdzdHJva2UnLCAnc3Ryb2tlLXdpZHRoJywgJ3N0eWxlJywgJ3N1cmZhY2VzY2FsZScsICdzeXN0ZW1sYW5ndWFnZScsICd0YWJpbmRleCcsICd0YXJnZXR4JywgJ3RhcmdldHknLCAndHJhbnNmb3JtJywgJ3RyYW5zZm9ybS1vcmlnaW4nLCAndGV4dC1hbmNob3InLCAndGV4dC1kZWNvcmF0aW9uJywgJ3RleHQtcmVuZGVyaW5nJywgJ3RleHRsZW5ndGgnLCAndHlwZScsICd1MScsICd1MicsICd1bmljb2RlJywgJ3ZhbHVlcycsICd2aWV3Ym94JywgJ3Zpc2liaWxpdHknLCAndmVyc2lvbicsICd2ZXJ0LWFkdi15JywgJ3ZlcnQtb3JpZ2luLXgnLCAndmVydC1vcmlnaW4teScsICd3aWR0aCcsICd3b3JkLXNwYWNpbmcnLCAnd3JhcCcsICd3cml0aW5nLW1vZGUnLCAneGNoYW5uZWxzZWxlY3RvcicsICd5Y2hhbm5lbHNlbGVjdG9yJywgJ3gnLCAneDEnLCAneDInLCAneG1sbnMnLCAneScsICd5MScsICd5MicsICd6JywgJ3pvb21hbmRwYW4nXSk7XG5cbiAgdmFyIG1hdGhNbCQxID0gZnJlZXplKFsnYWNjZW50JywgJ2FjY2VudHVuZGVyJywgJ2FsaWduJywgJ2JldmVsbGVkJywgJ2Nsb3NlJywgJ2NvbHVtbnNhbGlnbicsICdjb2x1bW5saW5lcycsICdjb2x1bW5zcGFuJywgJ2Rlbm9tYWxpZ24nLCAnZGVwdGgnLCAnZGlyJywgJ2Rpc3BsYXknLCAnZGlzcGxheXN0eWxlJywgJ2VuY29kaW5nJywgJ2ZlbmNlJywgJ2ZyYW1lJywgJ2hlaWdodCcsICdocmVmJywgJ2lkJywgJ2xhcmdlb3AnLCAnbGVuZ3RoJywgJ2xpbmV0aGlja25lc3MnLCAnbHNwYWNlJywgJ2xxdW90ZScsICdtYXRoYmFja2dyb3VuZCcsICdtYXRoY29sb3InLCAnbWF0aHNpemUnLCAnbWF0aHZhcmlhbnQnLCAnbWF4c2l6ZScsICdtaW5zaXplJywgJ21vdmFibGVsaW1pdHMnLCAnbm90YXRpb24nLCAnbnVtYWxpZ24nLCAnb3BlbicsICdyb3dhbGlnbicsICdyb3dsaW5lcycsICdyb3dzcGFjaW5nJywgJ3Jvd3NwYW4nLCAncnNwYWNlJywgJ3JxdW90ZScsICdzY3JpcHRsZXZlbCcsICdzY3JpcHRtaW5zaXplJywgJ3NjcmlwdHNpemVtdWx0aXBsaWVyJywgJ3NlbGVjdGlvbicsICdzZXBhcmF0b3InLCAnc2VwYXJhdG9ycycsICdzdHJldGNoeScsICdzdWJzY3JpcHRzaGlmdCcsICdzdXBzY3JpcHRzaGlmdCcsICdzeW1tZXRyaWMnLCAndm9mZnNldCcsICd3aWR0aCcsICd4bWxucyddKTtcblxuICB2YXIgeG1sID0gZnJlZXplKFsneGxpbms6aHJlZicsICd4bWw6aWQnLCAneGxpbms6dGl0bGUnLCAneG1sOnNwYWNlJywgJ3htbG5zOnhsaW5rJ10pO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL2JldHRlci1yZWdleFxuICB2YXIgTVVTVEFDSEVfRVhQUiA9IHNlYWwoL1xce1xce1tcXHNcXFNdKnxbXFxzXFxTXSpcXH1cXH0vZ20pOyAvLyBTcGVjaWZ5IHRlbXBsYXRlIGRldGVjdGlvbiByZWdleCBmb3IgU0FGRV9GT1JfVEVNUExBVEVTIG1vZGVcbiAgdmFyIEVSQl9FWFBSID0gc2VhbCgvPCVbXFxzXFxTXSp8W1xcc1xcU10qJT4vZ20pO1xuICB2YXIgREFUQV9BVFRSID0gc2VhbCgvXmRhdGEtW1xcLVxcdy5cXHUwMEI3LVxcdUZGRkZdLyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgdmFyIEFSSUFfQVRUUiA9IHNlYWwoL15hcmlhLVtcXC1cXHddKyQvKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICB2YXIgSVNfQUxMT1dFRF9VUkkgPSBzZWFsKC9eKD86KD86KD86ZnxodCl0cHM/fG1haWx0b3x0ZWx8Y2FsbHRvfGNpZHx4bXBwKTp8W15hLXpdfFthLXorLlxcLV0rKD86W15hLXorLlxcLTpdfCQpKS9pIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgKTtcbiAgdmFyIElTX1NDUklQVF9PUl9EQVRBID0gc2VhbCgvXig/OlxcdytzY3JpcHR8ZGF0YSk6L2kpO1xuICB2YXIgQVRUUl9XSElURVNQQUNFID0gc2VhbCgvW1xcdTAwMDAtXFx1MDAyMFxcdTAwQTBcXHUxNjgwXFx1MTgwRVxcdTIwMDAtXFx1MjAyOVxcdTIwNUZcXHUzMDAwXS9nIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29udHJvbC1yZWdleFxuICApO1xuXG4gIHZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuICBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkkMShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG4gIHZhciBnZXRHbG9iYWwgPSBmdW5jdGlvbiBnZXRHbG9iYWwoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHdpbmRvdztcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5vLW9wIHBvbGljeSBmb3IgaW50ZXJuYWwgdXNlIG9ubHkuXG4gICAqIERvbid0IGV4cG9ydCB0aGlzIGZ1bmN0aW9uIG91dHNpZGUgdGhpcyBtb2R1bGUhXG4gICAqIEBwYXJhbSB7P1RydXN0ZWRUeXBlUG9saWN5RmFjdG9yeX0gdHJ1c3RlZFR5cGVzIFRoZSBwb2xpY3kgZmFjdG9yeS5cbiAgICogQHBhcmFtIHtEb2N1bWVudH0gZG9jdW1lbnQgVGhlIGRvY3VtZW50IG9iamVjdCAodG8gZGV0ZXJtaW5lIHBvbGljeSBuYW1lIHN1ZmZpeClcbiAgICogQHJldHVybiB7P1RydXN0ZWRUeXBlUG9saWN5fSBUaGUgcG9saWN5IGNyZWF0ZWQgKG9yIG51bGwsIGlmIFRydXN0ZWQgVHlwZXNcbiAgICogYXJlIG5vdCBzdXBwb3J0ZWQpLlxuICAgKi9cbiAgdmFyIF9jcmVhdGVUcnVzdGVkVHlwZXNQb2xpY3kgPSBmdW5jdGlvbiBfY3JlYXRlVHJ1c3RlZFR5cGVzUG9saWN5KHRydXN0ZWRUeXBlcywgZG9jdW1lbnQpIHtcbiAgICBpZiAoKHR5cGVvZiB0cnVzdGVkVHlwZXMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHRydXN0ZWRUeXBlcykpICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgdHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gQWxsb3cgdGhlIGNhbGxlcnMgdG8gY29udHJvbCB0aGUgdW5pcXVlIHBvbGljeSBuYW1lXG4gICAgLy8gYnkgYWRkaW5nIGEgZGF0YS10dC1wb2xpY3ktc3VmZml4IHRvIHRoZSBzY3JpcHQgZWxlbWVudCB3aXRoIHRoZSBET01QdXJpZnkuXG4gICAgLy8gUG9saWN5IGNyZWF0aW9uIHdpdGggZHVwbGljYXRlIG5hbWVzIHRocm93cyBpbiBUcnVzdGVkIFR5cGVzLlxuICAgIHZhciBzdWZmaXggPSBudWxsO1xuICAgIHZhciBBVFRSX05BTUUgPSAnZGF0YS10dC1wb2xpY3ktc3VmZml4JztcbiAgICBpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0Lmhhc0F0dHJpYnV0ZShBVFRSX05BTUUpKSB7XG4gICAgICBzdWZmaXggPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LmdldEF0dHJpYnV0ZShBVFRSX05BTUUpO1xuICAgIH1cblxuICAgIHZhciBwb2xpY3lOYW1lID0gJ2RvbXB1cmlmeScgKyAoc3VmZml4ID8gJyMnICsgc3VmZml4IDogJycpO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB0cnVzdGVkVHlwZXMuY3JlYXRlUG9saWN5KHBvbGljeU5hbWUsIHtcbiAgICAgICAgY3JlYXRlSFRNTDogZnVuY3Rpb24gY3JlYXRlSFRNTChodG1sJCQxKSB7XG4gICAgICAgICAgcmV0dXJuIGh0bWwkJDE7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgIC8vIFBvbGljeSBjcmVhdGlvbiBmYWlsZWQgKG1vc3QgbGlrZWx5IGFub3RoZXIgRE9NUHVyaWZ5IHNjcmlwdCBoYXNcbiAgICAgIC8vIGFscmVhZHkgcnVuKS4gU2tpcCBjcmVhdGluZyB0aGUgcG9saWN5LCBhcyB0aGlzIHdpbGwgb25seSBjYXVzZSBlcnJvcnNcbiAgICAgIC8vIGlmIFRUIGFyZSBlbmZvcmNlZC5cbiAgICAgIGNvbnNvbGUud2FybignVHJ1c3RlZFR5cGVzIHBvbGljeSAnICsgcG9saWN5TmFtZSArICcgY291bGQgbm90IGJlIGNyZWF0ZWQuJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gY3JlYXRlRE9NUHVyaWZ5KCkge1xuICAgIHZhciB3aW5kb3cgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGdldEdsb2JhbCgpO1xuXG4gICAgdmFyIERPTVB1cmlmeSA9IGZ1bmN0aW9uIERPTVB1cmlmeShyb290KSB7XG4gICAgICByZXR1cm4gY3JlYXRlRE9NUHVyaWZ5KHJvb3QpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBWZXJzaW9uIGxhYmVsLCBleHBvc2VkIGZvciBlYXNpZXIgY2hlY2tzXG4gICAgICogaWYgRE9NUHVyaWZ5IGlzIHVwIHRvIGRhdGUgb3Igbm90XG4gICAgICovXG4gICAgRE9NUHVyaWZ5LnZlcnNpb24gPSAnMi4zLjUnO1xuXG4gICAgLyoqXG4gICAgICogQXJyYXkgb2YgZWxlbWVudHMgdGhhdCBET01QdXJpZnkgcmVtb3ZlZCBkdXJpbmcgc2FuaXRhdGlvbi5cbiAgICAgKiBFbXB0eSBpZiBub3RoaW5nIHdhcyByZW1vdmVkLlxuICAgICAqL1xuICAgIERPTVB1cmlmeS5yZW1vdmVkID0gW107XG5cbiAgICBpZiAoIXdpbmRvdyB8fCAhd2luZG93LmRvY3VtZW50IHx8IHdpbmRvdy5kb2N1bWVudC5ub2RlVHlwZSAhPT0gOSkge1xuICAgICAgLy8gTm90IHJ1bm5pbmcgaW4gYSBicm93c2VyLCBwcm92aWRlIGEgZmFjdG9yeSBmdW5jdGlvblxuICAgICAgLy8gc28gdGhhdCB5b3UgY2FuIHBhc3MgeW91ciBvd24gV2luZG93XG4gICAgICBET01QdXJpZnkuaXNTdXBwb3J0ZWQgPSBmYWxzZTtcblxuICAgICAgcmV0dXJuIERPTVB1cmlmeTtcbiAgICB9XG5cbiAgICB2YXIgb3JpZ2luYWxEb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcblxuICAgIHZhciBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcbiAgICB2YXIgRG9jdW1lbnRGcmFnbWVudCA9IHdpbmRvdy5Eb2N1bWVudEZyYWdtZW50LFxuICAgICAgICBIVE1MVGVtcGxhdGVFbGVtZW50ID0gd2luZG93LkhUTUxUZW1wbGF0ZUVsZW1lbnQsXG4gICAgICAgIE5vZGUgPSB3aW5kb3cuTm9kZSxcbiAgICAgICAgRWxlbWVudCA9IHdpbmRvdy5FbGVtZW50LFxuICAgICAgICBOb2RlRmlsdGVyID0gd2luZG93Lk5vZGVGaWx0ZXIsXG4gICAgICAgIF93aW5kb3ckTmFtZWROb2RlTWFwID0gd2luZG93Lk5hbWVkTm9kZU1hcCxcbiAgICAgICAgTmFtZWROb2RlTWFwID0gX3dpbmRvdyROYW1lZE5vZGVNYXAgPT09IHVuZGVmaW5lZCA/IHdpbmRvdy5OYW1lZE5vZGVNYXAgfHwgd2luZG93Lk1vek5hbWVkQXR0ck1hcCA6IF93aW5kb3ckTmFtZWROb2RlTWFwLFxuICAgICAgICBIVE1MRm9ybUVsZW1lbnQgPSB3aW5kb3cuSFRNTEZvcm1FbGVtZW50LFxuICAgICAgICBET01QYXJzZXIgPSB3aW5kb3cuRE9NUGFyc2VyLFxuICAgICAgICB0cnVzdGVkVHlwZXMgPSB3aW5kb3cudHJ1c3RlZFR5cGVzO1xuXG5cbiAgICB2YXIgRWxlbWVudFByb3RvdHlwZSA9IEVsZW1lbnQucHJvdG90eXBlO1xuXG4gICAgdmFyIGNsb25lTm9kZSA9IGxvb2t1cEdldHRlcihFbGVtZW50UHJvdG90eXBlLCAnY2xvbmVOb2RlJyk7XG4gICAgdmFyIGdldE5leHRTaWJsaW5nID0gbG9va3VwR2V0dGVyKEVsZW1lbnRQcm90b3R5cGUsICduZXh0U2libGluZycpO1xuICAgIHZhciBnZXRDaGlsZE5vZGVzID0gbG9va3VwR2V0dGVyKEVsZW1lbnRQcm90b3R5cGUsICdjaGlsZE5vZGVzJyk7XG4gICAgdmFyIGdldFBhcmVudE5vZGUgPSBsb29rdXBHZXR0ZXIoRWxlbWVudFByb3RvdHlwZSwgJ3BhcmVudE5vZGUnKTtcblxuICAgIC8vIEFzIHBlciBpc3N1ZSAjNDcsIHRoZSB3ZWItY29tcG9uZW50cyByZWdpc3RyeSBpcyBpbmhlcml0ZWQgYnkgYVxuICAgIC8vIG5ldyBkb2N1bWVudCBjcmVhdGVkIHZpYSBjcmVhdGVIVE1MRG9jdW1lbnQuIEFzIHBlciB0aGUgc3BlY1xuICAgIC8vIChodHRwOi8vdzNjLmdpdGh1Yi5pby93ZWJjb21wb25lbnRzL3NwZWMvY3VzdG9tLyNjcmVhdGluZy1hbmQtcGFzc2luZy1yZWdpc3RyaWVzKVxuICAgIC8vIGEgbmV3IGVtcHR5IHJlZ2lzdHJ5IGlzIHVzZWQgd2hlbiBjcmVhdGluZyBhIHRlbXBsYXRlIGNvbnRlbnRzIG93bmVyXG4gICAgLy8gZG9jdW1lbnQsIHNvIHdlIHVzZSB0aGF0IGFzIG91ciBwYXJlbnQgZG9jdW1lbnQgdG8gZW5zdXJlIG5vdGhpbmdcbiAgICAvLyBpcyBpbmhlcml0ZWQuXG4gICAgaWYgKHR5cGVvZiBIVE1MVGVtcGxhdGVFbGVtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgICAgaWYgKHRlbXBsYXRlLmNvbnRlbnQgJiYgdGVtcGxhdGUuY29udGVudC5vd25lckRvY3VtZW50KSB7XG4gICAgICAgIGRvY3VtZW50ID0gdGVtcGxhdGUuY29udGVudC5vd25lckRvY3VtZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciB0cnVzdGVkVHlwZXNQb2xpY3kgPSBfY3JlYXRlVHJ1c3RlZFR5cGVzUG9saWN5KHRydXN0ZWRUeXBlcywgb3JpZ2luYWxEb2N1bWVudCk7XG4gICAgdmFyIGVtcHR5SFRNTCA9IHRydXN0ZWRUeXBlc1BvbGljeSA/IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKCcnKSA6ICcnO1xuXG4gICAgdmFyIF9kb2N1bWVudCA9IGRvY3VtZW50LFxuICAgICAgICBpbXBsZW1lbnRhdGlvbiA9IF9kb2N1bWVudC5pbXBsZW1lbnRhdGlvbixcbiAgICAgICAgY3JlYXRlTm9kZUl0ZXJhdG9yID0gX2RvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcixcbiAgICAgICAgY3JlYXRlRG9jdW1lbnRGcmFnbWVudCA9IF9kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50LFxuICAgICAgICBnZXRFbGVtZW50c0J5VGFnTmFtZSA9IF9kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZTtcbiAgICB2YXIgaW1wb3J0Tm9kZSA9IG9yaWdpbmFsRG9jdW1lbnQuaW1wb3J0Tm9kZTtcblxuXG4gICAgdmFyIGRvY3VtZW50TW9kZSA9IHt9O1xuICAgIHRyeSB7XG4gICAgICBkb2N1bWVudE1vZGUgPSBjbG9uZShkb2N1bWVudCkuZG9jdW1lbnRNb2RlID8gZG9jdW1lbnQuZG9jdW1lbnRNb2RlIDoge307XG4gICAgfSBjYXRjaCAoXykge31cblxuICAgIHZhciBob29rcyA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogRXhwb3NlIHdoZXRoZXIgdGhpcyBicm93c2VyIHN1cHBvcnRzIHJ1bm5pbmcgdGhlIGZ1bGwgRE9NUHVyaWZ5LlxuICAgICAqL1xuICAgIERPTVB1cmlmeS5pc1N1cHBvcnRlZCA9IHR5cGVvZiBnZXRQYXJlbnROb2RlID09PSAnZnVuY3Rpb24nICYmIGltcGxlbWVudGF0aW9uICYmIHR5cGVvZiBpbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50TW9kZSAhPT0gOTtcblxuICAgIHZhciBNVVNUQUNIRV9FWFBSJCQxID0gTVVTVEFDSEVfRVhQUixcbiAgICAgICAgRVJCX0VYUFIkJDEgPSBFUkJfRVhQUixcbiAgICAgICAgREFUQV9BVFRSJCQxID0gREFUQV9BVFRSLFxuICAgICAgICBBUklBX0FUVFIkJDEgPSBBUklBX0FUVFIsXG4gICAgICAgIElTX1NDUklQVF9PUl9EQVRBJCQxID0gSVNfU0NSSVBUX09SX0RBVEEsXG4gICAgICAgIEFUVFJfV0hJVEVTUEFDRSQkMSA9IEFUVFJfV0hJVEVTUEFDRTtcbiAgICB2YXIgSVNfQUxMT1dFRF9VUkkkJDEgPSBJU19BTExPV0VEX1VSSTtcblxuICAgIC8qKlxuICAgICAqIFdlIGNvbnNpZGVyIHRoZSBlbGVtZW50cyBhbmQgYXR0cmlidXRlcyBiZWxvdyB0byBiZSBzYWZlLiBJZGVhbGx5XG4gICAgICogZG9uJ3QgYWRkIGFueSBuZXcgb25lcyBidXQgZmVlbCBmcmVlIHRvIHJlbW92ZSB1bndhbnRlZCBvbmVzLlxuICAgICAqL1xuXG4gICAgLyogYWxsb3dlZCBlbGVtZW50IG5hbWVzICovXG5cbiAgICB2YXIgQUxMT1dFRF9UQUdTID0gbnVsbDtcbiAgICB2YXIgREVGQVVMVF9BTExPV0VEX1RBR1MgPSBhZGRUb1NldCh7fSwgW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheSQxKGh0bWwpLCBfdG9Db25zdW1hYmxlQXJyYXkkMShzdmcpLCBfdG9Db25zdW1hYmxlQXJyYXkkMShzdmdGaWx0ZXJzKSwgX3RvQ29uc3VtYWJsZUFycmF5JDEobWF0aE1sKSwgX3RvQ29uc3VtYWJsZUFycmF5JDEodGV4dCkpKTtcblxuICAgIC8qIEFsbG93ZWQgYXR0cmlidXRlIG5hbWVzICovXG4gICAgdmFyIEFMTE9XRURfQVRUUiA9IG51bGw7XG4gICAgdmFyIERFRkFVTFRfQUxMT1dFRF9BVFRSID0gYWRkVG9TZXQoe30sIFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkkMShodG1sJDEpLCBfdG9Db25zdW1hYmxlQXJyYXkkMShzdmckMSksIF90b0NvbnN1bWFibGVBcnJheSQxKG1hdGhNbCQxKSwgX3RvQ29uc3VtYWJsZUFycmF5JDEoeG1sKSkpO1xuXG4gICAgLypcbiAgICAgKiBDb25maWd1cmUgaG93IERPTVBVcmlmeSBzaG91bGQgaGFuZGxlIGN1c3RvbSBlbGVtZW50cyBhbmQgdGhlaXIgYXR0cmlidXRlcyBhcyB3ZWxsIGFzIGN1c3RvbWl6ZWQgYnVpbHQtaW4gZWxlbWVudHMuXG4gICAgICogQHByb3BlcnR5IHtSZWdFeHB8RnVuY3Rpb258bnVsbH0gdGFnTmFtZUNoZWNrIG9uZSBvZiBbbnVsbCwgcmVnZXhQYXR0ZXJuLCBwcmVkaWNhdGVdLiBEZWZhdWx0OiBgbnVsbGAgKGRpc2FsbG93IGFueSBjdXN0b20gZWxlbWVudHMpXG4gICAgICogQHByb3BlcnR5IHtSZWdFeHB8RnVuY3Rpb258bnVsbH0gYXR0cmlidXRlTmFtZUNoZWNrIG9uZSBvZiBbbnVsbCwgcmVnZXhQYXR0ZXJuLCBwcmVkaWNhdGVdLiBEZWZhdWx0OiBgbnVsbGAgKGRpc2FsbG93IGFueSBhdHRyaWJ1dGVzIG5vdCBvbiB0aGUgYWxsb3cgbGlzdClcbiAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50cyBhbGxvdyBjdXN0b20gZWxlbWVudHMgZGVyaXZlZCBmcm9tIGJ1aWx0LWlucyBpZiB0aGV5IHBhc3MgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrLiBEZWZhdWx0OiBgZmFsc2VgLlxuICAgICAqL1xuICAgIHZhciBDVVNUT01fRUxFTUVOVF9IQU5ETElORyA9IE9iamVjdC5zZWFsKE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgICAgdGFnTmFtZUNoZWNrOiB7XG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIGF0dHJpYnV0ZU5hbWVDaGVjazoge1xuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgIH0sXG4gICAgICBhbGxvd0N1c3RvbWl6ZWRCdWlsdEluRWxlbWVudHM6IHtcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfVxuICAgIH0pKTtcblxuICAgIC8qIEV4cGxpY2l0bHkgZm9yYmlkZGVuIHRhZ3MgKG92ZXJyaWRlcyBBTExPV0VEX1RBR1MvQUREX1RBR1MpICovXG4gICAgdmFyIEZPUkJJRF9UQUdTID0gbnVsbDtcblxuICAgIC8qIEV4cGxpY2l0bHkgZm9yYmlkZGVuIGF0dHJpYnV0ZXMgKG92ZXJyaWRlcyBBTExPV0VEX0FUVFIvQUREX0FUVFIpICovXG4gICAgdmFyIEZPUkJJRF9BVFRSID0gbnVsbDtcblxuICAgIC8qIERlY2lkZSBpZiBBUklBIGF0dHJpYnV0ZXMgYXJlIG9rYXkgKi9cbiAgICB2YXIgQUxMT1dfQVJJQV9BVFRSID0gdHJ1ZTtcblxuICAgIC8qIERlY2lkZSBpZiBjdXN0b20gZGF0YSBhdHRyaWJ1dGVzIGFyZSBva2F5ICovXG4gICAgdmFyIEFMTE9XX0RBVEFfQVRUUiA9IHRydWU7XG5cbiAgICAvKiBEZWNpZGUgaWYgdW5rbm93biBwcm90b2NvbHMgYXJlIG9rYXkgKi9cbiAgICB2YXIgQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMgPSBmYWxzZTtcblxuICAgIC8qIE91dHB1dCBzaG91bGQgYmUgc2FmZSBmb3IgY29tbW9uIHRlbXBsYXRlIGVuZ2luZXMuXG4gICAgICogVGhpcyBtZWFucywgRE9NUHVyaWZ5IHJlbW92ZXMgZGF0YSBhdHRyaWJ1dGVzLCBtdXN0YWNoZXMgYW5kIEVSQlxuICAgICAqL1xuICAgIHZhciBTQUZFX0ZPUl9URU1QTEFURVMgPSBmYWxzZTtcblxuICAgIC8qIERlY2lkZSBpZiBkb2N1bWVudCB3aXRoIDxodG1sPi4uLiBzaG91bGQgYmUgcmV0dXJuZWQgKi9cbiAgICB2YXIgV0hPTEVfRE9DVU1FTlQgPSBmYWxzZTtcblxuICAgIC8qIFRyYWNrIHdoZXRoZXIgY29uZmlnIGlzIGFscmVhZHkgc2V0IG9uIHRoaXMgaW5zdGFuY2Ugb2YgRE9NUHVyaWZ5LiAqL1xuICAgIHZhciBTRVRfQ09ORklHID0gZmFsc2U7XG5cbiAgICAvKiBEZWNpZGUgaWYgYWxsIGVsZW1lbnRzIChlLmcuIHN0eWxlLCBzY3JpcHQpIG11c3QgYmUgY2hpbGRyZW4gb2ZcbiAgICAgKiBkb2N1bWVudC5ib2R5LiBCeSBkZWZhdWx0LCBicm93c2VycyBtaWdodCBtb3ZlIHRoZW0gdG8gZG9jdW1lbnQuaGVhZCAqL1xuICAgIHZhciBGT1JDRV9CT0RZID0gZmFsc2U7XG5cbiAgICAvKiBEZWNpZGUgaWYgYSBET00gYEhUTUxCb2R5RWxlbWVudGAgc2hvdWxkIGJlIHJldHVybmVkLCBpbnN0ZWFkIG9mIGEgaHRtbFxuICAgICAqIHN0cmluZyAob3IgYSBUcnVzdGVkSFRNTCBvYmplY3QgaWYgVHJ1c3RlZCBUeXBlcyBhcmUgc3VwcG9ydGVkKS5cbiAgICAgKiBJZiBgV0hPTEVfRE9DVU1FTlRgIGlzIGVuYWJsZWQgYSBgSFRNTEh0bWxFbGVtZW50YCB3aWxsIGJlIHJldHVybmVkIGluc3RlYWRcbiAgICAgKi9cbiAgICB2YXIgUkVUVVJOX0RPTSA9IGZhbHNlO1xuXG4gICAgLyogRGVjaWRlIGlmIGEgRE9NIGBEb2N1bWVudEZyYWdtZW50YCBzaG91bGQgYmUgcmV0dXJuZWQsIGluc3RlYWQgb2YgYSBodG1sXG4gICAgICogc3RyaW5nICAob3IgYSBUcnVzdGVkSFRNTCBvYmplY3QgaWYgVHJ1c3RlZCBUeXBlcyBhcmUgc3VwcG9ydGVkKSAqL1xuICAgIHZhciBSRVRVUk5fRE9NX0ZSQUdNRU5UID0gZmFsc2U7XG5cbiAgICAvKiBUcnkgdG8gcmV0dXJuIGEgVHJ1c3RlZCBUeXBlIG9iamVjdCBpbnN0ZWFkIG9mIGEgc3RyaW5nLCByZXR1cm4gYSBzdHJpbmcgaW5cbiAgICAgKiBjYXNlIFRydXN0ZWQgVHlwZXMgYXJlIG5vdCBzdXBwb3J0ZWQgICovXG4gICAgdmFyIFJFVFVSTl9UUlVTVEVEX1RZUEUgPSBmYWxzZTtcblxuICAgIC8qIE91dHB1dCBzaG91bGQgYmUgZnJlZSBmcm9tIERPTSBjbG9iYmVyaW5nIGF0dGFja3M/ICovXG4gICAgdmFyIFNBTklUSVpFX0RPTSA9IHRydWU7XG5cbiAgICAvKiBLZWVwIGVsZW1lbnQgY29udGVudCB3aGVuIHJlbW92aW5nIGVsZW1lbnQ/ICovXG4gICAgdmFyIEtFRVBfQ09OVEVOVCA9IHRydWU7XG5cbiAgICAvKiBJZiBhIGBOb2RlYCBpcyBwYXNzZWQgdG8gc2FuaXRpemUoKSwgdGhlbiBwZXJmb3JtcyBzYW5pdGl6YXRpb24gaW4tcGxhY2UgaW5zdGVhZFxuICAgICAqIG9mIGltcG9ydGluZyBpdCBpbnRvIGEgbmV3IERvY3VtZW50IGFuZCByZXR1cm5pbmcgYSBzYW5pdGl6ZWQgY29weSAqL1xuICAgIHZhciBJTl9QTEFDRSA9IGZhbHNlO1xuXG4gICAgLyogQWxsb3cgdXNhZ2Ugb2YgcHJvZmlsZXMgbGlrZSBodG1sLCBzdmcgYW5kIG1hdGhNbCAqL1xuICAgIHZhciBVU0VfUFJPRklMRVMgPSB7fTtcblxuICAgIC8qIFRhZ3MgdG8gaWdub3JlIGNvbnRlbnQgb2Ygd2hlbiBLRUVQX0NPTlRFTlQgaXMgdHJ1ZSAqL1xuICAgIHZhciBGT1JCSURfQ09OVEVOVFMgPSBudWxsO1xuICAgIHZhciBERUZBVUxUX0ZPUkJJRF9DT05URU5UUyA9IGFkZFRvU2V0KHt9LCBbJ2Fubm90YXRpb24teG1sJywgJ2F1ZGlvJywgJ2NvbGdyb3VwJywgJ2Rlc2MnLCAnZm9yZWlnbm9iamVjdCcsICdoZWFkJywgJ2lmcmFtZScsICdtYXRoJywgJ21pJywgJ21uJywgJ21vJywgJ21zJywgJ210ZXh0JywgJ25vZW1iZWQnLCAnbm9mcmFtZXMnLCAnbm9zY3JpcHQnLCAncGxhaW50ZXh0JywgJ3NjcmlwdCcsICdzdHlsZScsICdzdmcnLCAndGVtcGxhdGUnLCAndGhlYWQnLCAndGl0bGUnLCAndmlkZW8nLCAneG1wJ10pO1xuXG4gICAgLyogVGFncyB0aGF0IGFyZSBzYWZlIGZvciBkYXRhOiBVUklzICovXG4gICAgdmFyIERBVEFfVVJJX1RBR1MgPSBudWxsO1xuICAgIHZhciBERUZBVUxUX0RBVEFfVVJJX1RBR1MgPSBhZGRUb1NldCh7fSwgWydhdWRpbycsICd2aWRlbycsICdpbWcnLCAnc291cmNlJywgJ2ltYWdlJywgJ3RyYWNrJ10pO1xuXG4gICAgLyogQXR0cmlidXRlcyBzYWZlIGZvciB2YWx1ZXMgbGlrZSBcImphdmFzY3JpcHQ6XCIgKi9cbiAgICB2YXIgVVJJX1NBRkVfQVRUUklCVVRFUyA9IG51bGw7XG4gICAgdmFyIERFRkFVTFRfVVJJX1NBRkVfQVRUUklCVVRFUyA9IGFkZFRvU2V0KHt9LCBbJ2FsdCcsICdjbGFzcycsICdmb3InLCAnaWQnLCAnbGFiZWwnLCAnbmFtZScsICdwYXR0ZXJuJywgJ3BsYWNlaG9sZGVyJywgJ3JvbGUnLCAnc3VtbWFyeScsICd0aXRsZScsICd2YWx1ZScsICdzdHlsZScsICd4bWxucyddKTtcblxuICAgIHZhciBNQVRITUxfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUwnO1xuICAgIHZhciBTVkdfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbiAgICB2YXIgSFRNTF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XG4gICAgLyogRG9jdW1lbnQgbmFtZXNwYWNlICovXG4gICAgdmFyIE5BTUVTUEFDRSA9IEhUTUxfTkFNRVNQQUNFO1xuICAgIHZhciBJU19FTVBUWV9JTlBVVCA9IGZhbHNlO1xuXG4gICAgLyogUGFyc2luZyBvZiBzdHJpY3QgWEhUTUwgZG9jdW1lbnRzICovXG4gICAgdmFyIFBBUlNFUl9NRURJQV9UWVBFID0gdm9pZCAwO1xuICAgIHZhciBTVVBQT1JURURfUEFSU0VSX01FRElBX1RZUEVTID0gWydhcHBsaWNhdGlvbi94aHRtbCt4bWwnLCAndGV4dC9odG1sJ107XG4gICAgdmFyIERFRkFVTFRfUEFSU0VSX01FRElBX1RZUEUgPSAndGV4dC9odG1sJztcbiAgICB2YXIgdHJhbnNmb3JtQ2FzZUZ1bmMgPSB2b2lkIDA7XG5cbiAgICAvKiBLZWVwIGEgcmVmZXJlbmNlIHRvIGNvbmZpZyB0byBwYXNzIHRvIGhvb2tzICovXG4gICAgdmFyIENPTkZJRyA9IG51bGw7XG5cbiAgICAvKiBJZGVhbGx5LCBkbyBub3QgdG91Y2ggYW55dGhpbmcgYmVsb3cgdGhpcyBsaW5lICovXG4gICAgLyogX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL1xuXG4gICAgdmFyIGZvcm1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gICAgdmFyIGlzUmVnZXhPckZ1bmN0aW9uID0gZnVuY3Rpb24gaXNSZWdleE9yRnVuY3Rpb24odGVzdFZhbHVlKSB7XG4gICAgICByZXR1cm4gdGVzdFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwIHx8IHRlc3RWYWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBfcGFyc2VDb25maWdcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gY2ZnIG9wdGlvbmFsIGNvbmZpZyBsaXRlcmFsXG4gICAgICovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgICB2YXIgX3BhcnNlQ29uZmlnID0gZnVuY3Rpb24gX3BhcnNlQ29uZmlnKGNmZykge1xuICAgICAgaWYgKENPTkZJRyAmJiBDT05GSUcgPT09IGNmZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8qIFNoaWVsZCBjb25maWd1cmF0aW9uIG9iamVjdCBmcm9tIHRhbXBlcmluZyAqL1xuICAgICAgaWYgKCFjZmcgfHwgKHR5cGVvZiBjZmcgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGNmZykpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBjZmcgPSB7fTtcbiAgICAgIH1cblxuICAgICAgLyogU2hpZWxkIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGZyb20gcHJvdG90eXBlIHBvbGx1dGlvbiAqL1xuICAgICAgY2ZnID0gY2xvbmUoY2ZnKTtcblxuICAgICAgLyogU2V0IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyAqL1xuICAgICAgQUxMT1dFRF9UQUdTID0gJ0FMTE9XRURfVEFHUycgaW4gY2ZnID8gYWRkVG9TZXQoe30sIGNmZy5BTExPV0VEX1RBR1MpIDogREVGQVVMVF9BTExPV0VEX1RBR1M7XG4gICAgICBBTExPV0VEX0FUVFIgPSAnQUxMT1dFRF9BVFRSJyBpbiBjZmcgPyBhZGRUb1NldCh7fSwgY2ZnLkFMTE9XRURfQVRUUikgOiBERUZBVUxUX0FMTE9XRURfQVRUUjtcbiAgICAgIFVSSV9TQUZFX0FUVFJJQlVURVMgPSAnQUREX1VSSV9TQUZFX0FUVFInIGluIGNmZyA/IGFkZFRvU2V0KGNsb25lKERFRkFVTFRfVVJJX1NBRkVfQVRUUklCVVRFUyksIGNmZy5BRERfVVJJX1NBRkVfQVRUUikgOiBERUZBVUxUX1VSSV9TQUZFX0FUVFJJQlVURVM7XG4gICAgICBEQVRBX1VSSV9UQUdTID0gJ0FERF9EQVRBX1VSSV9UQUdTJyBpbiBjZmcgPyBhZGRUb1NldChjbG9uZShERUZBVUxUX0RBVEFfVVJJX1RBR1MpLCBjZmcuQUREX0RBVEFfVVJJX1RBR1MpIDogREVGQVVMVF9EQVRBX1VSSV9UQUdTO1xuICAgICAgRk9SQklEX0NPTlRFTlRTID0gJ0ZPUkJJRF9DT05URU5UUycgaW4gY2ZnID8gYWRkVG9TZXQoe30sIGNmZy5GT1JCSURfQ09OVEVOVFMpIDogREVGQVVMVF9GT1JCSURfQ09OVEVOVFM7XG4gICAgICBGT1JCSURfVEFHUyA9ICdGT1JCSURfVEFHUycgaW4gY2ZnID8gYWRkVG9TZXQoe30sIGNmZy5GT1JCSURfVEFHUykgOiB7fTtcbiAgICAgIEZPUkJJRF9BVFRSID0gJ0ZPUkJJRF9BVFRSJyBpbiBjZmcgPyBhZGRUb1NldCh7fSwgY2ZnLkZPUkJJRF9BVFRSKSA6IHt9O1xuICAgICAgVVNFX1BST0ZJTEVTID0gJ1VTRV9QUk9GSUxFUycgaW4gY2ZnID8gY2ZnLlVTRV9QUk9GSUxFUyA6IGZhbHNlO1xuICAgICAgQUxMT1dfQVJJQV9BVFRSID0gY2ZnLkFMTE9XX0FSSUFfQVRUUiAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuICAgICAgQUxMT1dfREFUQV9BVFRSID0gY2ZnLkFMTE9XX0RBVEFfQVRUUiAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuICAgICAgQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMgPSBjZmcuQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICAgIFNBRkVfRk9SX1RFTVBMQVRFUyA9IGNmZy5TQUZFX0ZPUl9URU1QTEFURVMgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICAgIFdIT0xFX0RPQ1VNRU5UID0gY2ZnLldIT0xFX0RPQ1VNRU5UIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgICBSRVRVUk5fRE9NID0gY2ZnLlJFVFVSTl9ET00gfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICAgIFJFVFVSTl9ET01fRlJBR01FTlQgPSBjZmcuUkVUVVJOX0RPTV9GUkFHTUVOVCB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgICAgUkVUVVJOX1RSVVNURURfVFlQRSA9IGNmZy5SRVRVUk5fVFJVU1RFRF9UWVBFIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgICBGT1JDRV9CT0RZID0gY2ZnLkZPUkNFX0JPRFkgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICAgIFNBTklUSVpFX0RPTSA9IGNmZy5TQU5JVElaRV9ET00gIT09IGZhbHNlOyAvLyBEZWZhdWx0IHRydWVcbiAgICAgIEtFRVBfQ09OVEVOVCA9IGNmZy5LRUVQX0NPTlRFTlQgIT09IGZhbHNlOyAvLyBEZWZhdWx0IHRydWVcbiAgICAgIElOX1BMQUNFID0gY2ZnLklOX1BMQUNFIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgICBJU19BTExPV0VEX1VSSSQkMSA9IGNmZy5BTExPV0VEX1VSSV9SRUdFWFAgfHwgSVNfQUxMT1dFRF9VUkkkJDE7XG4gICAgICBOQU1FU1BBQ0UgPSBjZmcuTkFNRVNQQUNFIHx8IEhUTUxfTkFNRVNQQUNFO1xuICAgICAgaWYgKGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORyAmJiBpc1JlZ2V4T3JGdW5jdGlvbihjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrKSkge1xuICAgICAgICBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgPSBjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HICYmIGlzUmVnZXhPckZ1bmN0aW9uKGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2spKSB7XG4gICAgICAgIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjayA9IGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2s7XG4gICAgICB9XG5cbiAgICAgIGlmIChjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcgJiYgdHlwZW9mIGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy5hbGxvd0N1c3RvbWl6ZWRCdWlsdEluRWxlbWVudHMgPT09ICdib29sZWFuJykge1xuICAgICAgICBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hbGxvd0N1c3RvbWl6ZWRCdWlsdEluRWxlbWVudHMgPSBjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzO1xuICAgICAgfVxuXG4gICAgICBQQVJTRVJfTUVESUFfVFlQRSA9XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItaW5jbHVkZXNcbiAgICAgIFNVUFBPUlRFRF9QQVJTRVJfTUVESUFfVFlQRVMuaW5kZXhPZihjZmcuUEFSU0VSX01FRElBX1RZUEUpID09PSAtMSA/IFBBUlNFUl9NRURJQV9UWVBFID0gREVGQVVMVF9QQVJTRVJfTUVESUFfVFlQRSA6IFBBUlNFUl9NRURJQV9UWVBFID0gY2ZnLlBBUlNFUl9NRURJQV9UWVBFO1xuXG4gICAgICAvLyBIVE1MIHRhZ3MgYW5kIGF0dHJpYnV0ZXMgYXJlIG5vdCBjYXNlLXNlbnNpdGl2ZSwgY29udmVydGluZyB0byBsb3dlcmNhc2UuIEtlZXBpbmcgWEhUTUwgYXMgaXMuXG4gICAgICB0cmFuc2Zvcm1DYXNlRnVuYyA9IFBBUlNFUl9NRURJQV9UWVBFID09PSAnYXBwbGljYXRpb24veGh0bWwreG1sJyA/IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgICAgfSA6IHN0cmluZ1RvTG93ZXJDYXNlO1xuXG4gICAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTKSB7XG4gICAgICAgIEFMTE9XX0RBVEFfQVRUUiA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoUkVUVVJOX0RPTV9GUkFHTUVOVCkge1xuICAgICAgICBSRVRVUk5fRE9NID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLyogUGFyc2UgcHJvZmlsZSBpbmZvICovXG4gICAgICBpZiAoVVNFX1BST0ZJTEVTKSB7XG4gICAgICAgIEFMTE9XRURfVEFHUyA9IGFkZFRvU2V0KHt9LCBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5JDEodGV4dCkpKTtcbiAgICAgICAgQUxMT1dFRF9BVFRSID0gW107XG4gICAgICAgIGlmIChVU0VfUFJPRklMRVMuaHRtbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgaHRtbCk7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBodG1sJDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFVTRV9QUk9GSUxFUy5zdmcgPT09IHRydWUpIHtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIHN2Zyk7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBzdmckMSk7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCB4bWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFVTRV9QUk9GSUxFUy5zdmdGaWx0ZXJzID09PSB0cnVlKSB7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBzdmdGaWx0ZXJzKTtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIHN2ZyQxKTtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIHhtbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVVNFX1BST0ZJTEVTLm1hdGhNbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgbWF0aE1sKTtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIG1hdGhNbCQxKTtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIHhtbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyogTWVyZ2UgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzICovXG4gICAgICBpZiAoY2ZnLkFERF9UQUdTKSB7XG4gICAgICAgIGlmIChBTExPV0VEX1RBR1MgPT09IERFRkFVTFRfQUxMT1dFRF9UQUdTKSB7XG4gICAgICAgICAgQUxMT1dFRF9UQUdTID0gY2xvbmUoQUxMT1dFRF9UQUdTKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgY2ZnLkFERF9UQUdTKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNmZy5BRERfQVRUUikge1xuICAgICAgICBpZiAoQUxMT1dFRF9BVFRSID09PSBERUZBVUxUX0FMTE9XRURfQVRUUikge1xuICAgICAgICAgIEFMTE9XRURfQVRUUiA9IGNsb25lKEFMTE9XRURfQVRUUik7XG4gICAgICAgIH1cblxuICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIGNmZy5BRERfQVRUUik7XG4gICAgICB9XG5cbiAgICAgIGlmIChjZmcuQUREX1VSSV9TQUZFX0FUVFIpIHtcbiAgICAgICAgYWRkVG9TZXQoVVJJX1NBRkVfQVRUUklCVVRFUywgY2ZnLkFERF9VUklfU0FGRV9BVFRSKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNmZy5GT1JCSURfQ09OVEVOVFMpIHtcbiAgICAgICAgaWYgKEZPUkJJRF9DT05URU5UUyA9PT0gREVGQVVMVF9GT1JCSURfQ09OVEVOVFMpIHtcbiAgICAgICAgICBGT1JCSURfQ09OVEVOVFMgPSBjbG9uZShGT1JCSURfQ09OVEVOVFMpO1xuICAgICAgICB9XG5cbiAgICAgICAgYWRkVG9TZXQoRk9SQklEX0NPTlRFTlRTLCBjZmcuRk9SQklEX0NPTlRFTlRTKTtcbiAgICAgIH1cblxuICAgICAgLyogQWRkICN0ZXh0IGluIGNhc2UgS0VFUF9DT05URU5UIGlzIHNldCB0byB0cnVlICovXG4gICAgICBpZiAoS0VFUF9DT05URU5UKSB7XG4gICAgICAgIEFMTE9XRURfVEFHU1snI3RleHQnXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8qIEFkZCBodG1sLCBoZWFkIGFuZCBib2R5IHRvIEFMTE9XRURfVEFHUyBpbiBjYXNlIFdIT0xFX0RPQ1VNRU5UIGlzIHRydWUgKi9cbiAgICAgIGlmIChXSE9MRV9ET0NVTUVOVCkge1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIFsnaHRtbCcsICdoZWFkJywgJ2JvZHknXSk7XG4gICAgICB9XG5cbiAgICAgIC8qIEFkZCB0Ym9keSB0byBBTExPV0VEX1RBR1MgaW4gY2FzZSB0YWJsZXMgYXJlIHBlcm1pdHRlZCwgc2VlICMyODYsICMzNjUgKi9cbiAgICAgIGlmIChBTExPV0VEX1RBR1MudGFibGUpIHtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBbJ3Rib2R5J10pO1xuICAgICAgICBkZWxldGUgRk9SQklEX1RBR1MudGJvZHk7XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXZlbnQgZnVydGhlciBtYW5pcHVsYXRpb24gb2YgY29uZmlndXJhdGlvbi5cbiAgICAgIC8vIE5vdCBhdmFpbGFibGUgaW4gSUU4LCBTYWZhcmkgNSwgZXRjLlxuICAgICAgaWYgKGZyZWV6ZSkge1xuICAgICAgICBmcmVlemUoY2ZnKTtcbiAgICAgIH1cblxuICAgICAgQ09ORklHID0gY2ZnO1xuICAgIH07XG5cbiAgICB2YXIgTUFUSE1MX1RFWFRfSU5URUdSQVRJT05fUE9JTlRTID0gYWRkVG9TZXQoe30sIFsnbWknLCAnbW8nLCAnbW4nLCAnbXMnLCAnbXRleHQnXSk7XG5cbiAgICB2YXIgSFRNTF9JTlRFR1JBVElPTl9QT0lOVFMgPSBhZGRUb1NldCh7fSwgWydmb3JlaWdub2JqZWN0JywgJ2Rlc2MnLCAndGl0bGUnLCAnYW5ub3RhdGlvbi14bWwnXSk7XG5cbiAgICAvKiBLZWVwIHRyYWNrIG9mIGFsbCBwb3NzaWJsZSBTVkcgYW5kIE1hdGhNTCB0YWdzXG4gICAgICogc28gdGhhdCB3ZSBjYW4gcGVyZm9ybSB0aGUgbmFtZXNwYWNlIGNoZWNrc1xuICAgICAqIGNvcnJlY3RseS4gKi9cbiAgICB2YXIgQUxMX1NWR19UQUdTID0gYWRkVG9TZXQoe30sIHN2Zyk7XG4gICAgYWRkVG9TZXQoQUxMX1NWR19UQUdTLCBzdmdGaWx0ZXJzKTtcbiAgICBhZGRUb1NldChBTExfU1ZHX1RBR1MsIHN2Z0Rpc2FsbG93ZWQpO1xuXG4gICAgdmFyIEFMTF9NQVRITUxfVEFHUyA9IGFkZFRvU2V0KHt9LCBtYXRoTWwpO1xuICAgIGFkZFRvU2V0KEFMTF9NQVRITUxfVEFHUywgbWF0aE1sRGlzYWxsb3dlZCk7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICogQHBhcmFtICB7RWxlbWVudH0gZWxlbWVudCBhIERPTSBlbGVtZW50IHdob3NlIG5hbWVzcGFjZSBpcyBiZWluZyBjaGVja2VkXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybiBmYWxzZSBpZiB0aGUgZWxlbWVudCBoYXMgYVxuICAgICAqICBuYW1lc3BhY2UgdGhhdCBhIHNwZWMtY29tcGxpYW50IHBhcnNlciB3b3VsZCBuZXZlclxuICAgICAqICByZXR1cm4uIFJldHVybiB0cnVlIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICB2YXIgX2NoZWNrVmFsaWROYW1lc3BhY2UgPSBmdW5jdGlvbiBfY2hlY2tWYWxpZE5hbWVzcGFjZShlbGVtZW50KSB7XG4gICAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcblxuICAgICAgLy8gSW4gSlNET00sIGlmIHdlJ3JlIGluc2lkZSBzaGFkb3cgRE9NLCB0aGVuIHBhcmVudE5vZGVcbiAgICAgIC8vIGNhbiBiZSBudWxsLiBXZSBqdXN0IHNpbXVsYXRlIHBhcmVudCBpbiB0aGlzIGNhc2UuXG4gICAgICBpZiAoIXBhcmVudCB8fCAhcGFyZW50LnRhZ05hbWUpIHtcbiAgICAgICAgcGFyZW50ID0ge1xuICAgICAgICAgIG5hbWVzcGFjZVVSSTogSFRNTF9OQU1FU1BBQ0UsXG4gICAgICAgICAgdGFnTmFtZTogJ3RlbXBsYXRlJ1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB2YXIgdGFnTmFtZSA9IHN0cmluZ1RvTG93ZXJDYXNlKGVsZW1lbnQudGFnTmFtZSk7XG4gICAgICB2YXIgcGFyZW50VGFnTmFtZSA9IHN0cmluZ1RvTG93ZXJDYXNlKHBhcmVudC50YWdOYW1lKTtcblxuICAgICAgaWYgKGVsZW1lbnQubmFtZXNwYWNlVVJJID09PSBTVkdfTkFNRVNQQUNFKSB7XG4gICAgICAgIC8vIFRoZSBvbmx5IHdheSB0byBzd2l0Y2ggZnJvbSBIVE1MIG5hbWVzcGFjZSB0byBTVkdcbiAgICAgICAgLy8gaXMgdmlhIDxzdmc+LiBJZiBpdCBoYXBwZW5zIHZpYSBhbnkgb3RoZXIgdGFnLCB0aGVuXG4gICAgICAgIC8vIGl0IHNob3VsZCBiZSBraWxsZWQuXG4gICAgICAgIGlmIChwYXJlbnQubmFtZXNwYWNlVVJJID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgICAgICAgIHJldHVybiB0YWdOYW1lID09PSAnc3ZnJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSBvbmx5IHdheSB0byBzd2l0Y2ggZnJvbSBNYXRoTUwgdG8gU1ZHIGlzIHZpYVxuICAgICAgICAvLyBzdmcgaWYgcGFyZW50IGlzIGVpdGhlciA8YW5ub3RhdGlvbi14bWw+IG9yIE1hdGhNTFxuICAgICAgICAvLyB0ZXh0IGludGVncmF0aW9uIHBvaW50cy5cbiAgICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IE1BVEhNTF9OQU1FU1BBQ0UpIHtcbiAgICAgICAgICByZXR1cm4gdGFnTmFtZSA9PT0gJ3N2ZycgJiYgKHBhcmVudFRhZ05hbWUgPT09ICdhbm5vdGF0aW9uLXhtbCcgfHwgTUFUSE1MX1RFWFRfSU5URUdSQVRJT05fUE9JTlRTW3BhcmVudFRhZ05hbWVdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlIG9ubHkgYWxsb3cgZWxlbWVudHMgdGhhdCBhcmUgZGVmaW5lZCBpbiBTVkdcbiAgICAgICAgLy8gc3BlYy4gQWxsIG90aGVycyBhcmUgZGlzYWxsb3dlZCBpbiBTVkcgbmFtZXNwYWNlLlxuICAgICAgICByZXR1cm4gQm9vbGVhbihBTExfU1ZHX1RBR1NbdGFnTmFtZV0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IE1BVEhNTF9OQU1FU1BBQ0UpIHtcbiAgICAgICAgLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIEhUTUwgbmFtZXNwYWNlIHRvIE1hdGhNTFxuICAgICAgICAvLyBpcyB2aWEgPG1hdGg+LiBJZiBpdCBoYXBwZW5zIHZpYSBhbnkgb3RoZXIgdGFnLCB0aGVuXG4gICAgICAgIC8vIGl0IHNob3VsZCBiZSBraWxsZWQuXG4gICAgICAgIGlmIChwYXJlbnQubmFtZXNwYWNlVVJJID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgICAgICAgIHJldHVybiB0YWdOYW1lID09PSAnbWF0aCc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgb25seSB3YXkgdG8gc3dpdGNoIGZyb20gU1ZHIHRvIE1hdGhNTCBpcyB2aWFcbiAgICAgICAgLy8gPG1hdGg+IGFuZCBIVE1MIGludGVncmF0aW9uIHBvaW50c1xuICAgICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gU1ZHX05BTUVTUEFDRSkge1xuICAgICAgICAgIHJldHVybiB0YWdOYW1lID09PSAnbWF0aCcgJiYgSFRNTF9JTlRFR1JBVElPTl9QT0lOVFNbcGFyZW50VGFnTmFtZV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXZSBvbmx5IGFsbG93IGVsZW1lbnRzIHRoYXQgYXJlIGRlZmluZWQgaW4gTWF0aE1MXG4gICAgICAgIC8vIHNwZWMuIEFsbCBvdGhlcnMgYXJlIGRpc2FsbG93ZWQgaW4gTWF0aE1MIG5hbWVzcGFjZS5cbiAgICAgICAgcmV0dXJuIEJvb2xlYW4oQUxMX01BVEhNTF9UQUdTW3RhZ05hbWVdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsZW1lbnQubmFtZXNwYWNlVVJJID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgICAgICAvLyBUaGUgb25seSB3YXkgdG8gc3dpdGNoIGZyb20gU1ZHIHRvIEhUTUwgaXMgdmlhXG4gICAgICAgIC8vIEhUTUwgaW50ZWdyYXRpb24gcG9pbnRzLCBhbmQgZnJvbSBNYXRoTUwgdG8gSFRNTFxuICAgICAgICAvLyBpcyB2aWEgTWF0aE1MIHRleHQgaW50ZWdyYXRpb24gcG9pbnRzXG4gICAgICAgIGlmIChwYXJlbnQubmFtZXNwYWNlVVJJID09PSBTVkdfTkFNRVNQQUNFICYmICFIVE1MX0lOVEVHUkFUSU9OX1BPSU5UU1twYXJlbnRUYWdOYW1lXSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJlbnQubmFtZXNwYWNlVVJJID09PSBNQVRITUxfTkFNRVNQQUNFICYmICFNQVRITUxfVEVYVF9JTlRFR1JBVElPTl9QT0lOVFNbcGFyZW50VGFnTmFtZV0pIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDZXJ0YWluIGVsZW1lbnRzIGFyZSBhbGxvd2VkIGluIGJvdGggU1ZHIGFuZCBIVE1MXG4gICAgICAgIC8vIG5hbWVzcGFjZS4gV2UgbmVlZCB0byBzcGVjaWZ5IHRoZW0gZXhwbGljaXRseVxuICAgICAgICAvLyBzbyB0aGF0IHRoZXkgZG9uJ3QgZ2V0IGVycm9ub3VzbHkgZGVsZXRlZCBmcm9tXG4gICAgICAgIC8vIEhUTUwgbmFtZXNwYWNlLlxuICAgICAgICB2YXIgY29tbW9uU3ZnQW5kSFRNTEVsZW1lbnRzID0gYWRkVG9TZXQoe30sIFsndGl0bGUnLCAnc3R5bGUnLCAnZm9udCcsICdhJywgJ3NjcmlwdCddKTtcblxuICAgICAgICAvLyBXZSBkaXNhbGxvdyB0YWdzIHRoYXQgYXJlIHNwZWNpZmljIGZvciBNYXRoTUxcbiAgICAgICAgLy8gb3IgU1ZHIGFuZCBzaG91bGQgbmV2ZXIgYXBwZWFyIGluIEhUTUwgbmFtZXNwYWNlXG4gICAgICAgIHJldHVybiAhQUxMX01BVEhNTF9UQUdTW3RhZ05hbWVdICYmIChjb21tb25TdmdBbmRIVE1MRWxlbWVudHNbdGFnTmFtZV0gfHwgIUFMTF9TVkdfVEFHU1t0YWdOYW1lXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb2RlIHNob3VsZCBuZXZlciByZWFjaCB0aGlzIHBsYWNlICh0aGlzIG1lYW5zXG4gICAgICAvLyB0aGF0IHRoZSBlbGVtZW50IHNvbWVob3cgZ290IG5hbWVzcGFjZSB0aGF0IGlzIG5vdFxuICAgICAgLy8gSFRNTCwgU1ZHIG9yIE1hdGhNTCkuIFJldHVybiBmYWxzZSBqdXN0IGluIGNhc2UuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9mb3JjZVJlbW92ZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7Tm9kZX0gbm9kZSBhIERPTSBub2RlXG4gICAgICovXG4gICAgdmFyIF9mb3JjZVJlbW92ZSA9IGZ1bmN0aW9uIF9mb3JjZVJlbW92ZShub2RlKSB7XG4gICAgICBhcnJheVB1c2goRE9NUHVyaWZ5LnJlbW92ZWQsIHsgZWxlbWVudDogbm9kZSB9KTtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1kb20tbm9kZS1yZW1vdmVcbiAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG5vZGUub3V0ZXJIVE1MID0gZW1wdHlIVE1MO1xuICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBfcmVtb3ZlQXR0cmlidXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWUgYW4gQXR0cmlidXRlIG5hbWVcbiAgICAgKiBAcGFyYW0gIHtOb2RlfSBub2RlIGEgRE9NIG5vZGVcbiAgICAgKi9cbiAgICB2YXIgX3JlbW92ZUF0dHJpYnV0ZSA9IGZ1bmN0aW9uIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgbm9kZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXJyYXlQdXNoKERPTVB1cmlmeS5yZW1vdmVkLCB7XG4gICAgICAgICAgYXR0cmlidXRlOiBub2RlLmdldEF0dHJpYnV0ZU5vZGUobmFtZSksXG4gICAgICAgICAgZnJvbTogbm9kZVxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgYXJyYXlQdXNoKERPTVB1cmlmeS5yZW1vdmVkLCB7XG4gICAgICAgICAgYXR0cmlidXRlOiBudWxsLFxuICAgICAgICAgIGZyb206IG5vZGVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXG4gICAgICAvLyBXZSB2b2lkIGF0dHJpYnV0ZSB2YWx1ZXMgZm9yIHVucmVtb3ZhYmxlIFwiaXNcIlwiIGF0dHJpYnV0ZXNcbiAgICAgIGlmIChuYW1lID09PSAnaXMnICYmICFBTExPV0VEX0FUVFJbbmFtZV0pIHtcbiAgICAgICAgaWYgKFJFVFVSTl9ET00gfHwgUkVUVVJOX0RPTV9GUkFHTUVOVCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBfZm9yY2VSZW1vdmUobm9kZSk7XG4gICAgICAgICAgfSBjYXRjaCAoXykge31cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgJycpO1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX2luaXREb2N1bWVudFxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBkaXJ0eSBhIHN0cmluZyBvZiBkaXJ0eSBtYXJrdXBcbiAgICAgKiBAcmV0dXJuIHtEb2N1bWVudH0gYSBET00sIGZpbGxlZCB3aXRoIHRoZSBkaXJ0eSBtYXJrdXBcbiAgICAgKi9cbiAgICB2YXIgX2luaXREb2N1bWVudCA9IGZ1bmN0aW9uIF9pbml0RG9jdW1lbnQoZGlydHkpIHtcbiAgICAgIC8qIENyZWF0ZSBhIEhUTUwgZG9jdW1lbnQgKi9cbiAgICAgIHZhciBkb2MgPSB2b2lkIDA7XG4gICAgICB2YXIgbGVhZGluZ1doaXRlc3BhY2UgPSB2b2lkIDA7XG5cbiAgICAgIGlmIChGT1JDRV9CT0RZKSB7XG4gICAgICAgIGRpcnR5ID0gJzxyZW1vdmU+PC9yZW1vdmU+JyArIGRpcnR5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyogSWYgRk9SQ0VfQk9EWSBpc24ndCB1c2VkLCBsZWFkaW5nIHdoaXRlc3BhY2UgbmVlZHMgdG8gYmUgcHJlc2VydmVkIG1hbnVhbGx5ICovXG4gICAgICAgIHZhciBtYXRjaGVzID0gc3RyaW5nTWF0Y2goZGlydHksIC9eW1xcclxcblxcdCBdKy8pO1xuICAgICAgICBsZWFkaW5nV2hpdGVzcGFjZSA9IG1hdGNoZXMgJiYgbWF0Y2hlc1swXTtcbiAgICAgIH1cblxuICAgICAgaWYgKFBBUlNFUl9NRURJQV9UWVBFID09PSAnYXBwbGljYXRpb24veGh0bWwreG1sJykge1xuICAgICAgICAvLyBSb290IG9mIFhIVE1MIGRvYyBtdXN0IGNvbnRhaW4geG1sbnMgZGVjbGFyYXRpb24gKHNlZSBodHRwczovL3d3dy53My5vcmcvVFIveGh0bWwxL25vcm1hdGl2ZS5odG1sI3N0cmljdClcbiAgICAgICAgZGlydHkgPSAnPGh0bWwgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI+PGhlYWQ+PC9oZWFkPjxib2R5PicgKyBkaXJ0eSArICc8L2JvZHk+PC9odG1sPic7XG4gICAgICB9XG5cbiAgICAgIHZhciBkaXJ0eVBheWxvYWQgPSB0cnVzdGVkVHlwZXNQb2xpY3kgPyB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlSFRNTChkaXJ0eSkgOiBkaXJ0eTtcbiAgICAgIC8qXG4gICAgICAgKiBVc2UgdGhlIERPTVBhcnNlciBBUEkgYnkgZGVmYXVsdCwgZmFsbGJhY2sgbGF0ZXIgaWYgbmVlZHMgYmVcbiAgICAgICAqIERPTVBhcnNlciBub3Qgd29yayBmb3Igc3ZnIHdoZW4gaGFzIG11bHRpcGxlIHJvb3QgZWxlbWVudC5cbiAgICAgICAqL1xuICAgICAgaWYgKE5BTUVTUEFDRSA9PT0gSFRNTF9OQU1FU1BBQ0UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGRpcnR5UGF5bG9hZCwgUEFSU0VSX01FRElBX1RZUEUpO1xuICAgICAgICB9IGNhdGNoIChfKSB7fVxuICAgICAgfVxuXG4gICAgICAvKiBVc2UgY3JlYXRlSFRNTERvY3VtZW50IGluIGNhc2UgRE9NUGFyc2VyIGlzIG5vdCBhdmFpbGFibGUgKi9cbiAgICAgIGlmICghZG9jIHx8ICFkb2MuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgIGRvYyA9IGltcGxlbWVudGF0aW9uLmNyZWF0ZURvY3VtZW50KE5BTUVTUEFDRSwgJ3RlbXBsYXRlJywgbnVsbCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZG9jLmRvY3VtZW50RWxlbWVudC5pbm5lckhUTUwgPSBJU19FTVBUWV9JTlBVVCA/ICcnIDogZGlydHlQYXlsb2FkO1xuICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgLy8gU3ludGF4IGVycm9yIGlmIGRpcnR5UGF5bG9hZCBpcyBpbnZhbGlkIHhtbFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBib2R5ID0gZG9jLmJvZHkgfHwgZG9jLmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgaWYgKGRpcnR5ICYmIGxlYWRpbmdXaGl0ZXNwYWNlKSB7XG4gICAgICAgIGJvZHkuaW5zZXJ0QmVmb3JlKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxlYWRpbmdXaGl0ZXNwYWNlKSwgYm9keS5jaGlsZE5vZGVzWzBdIHx8IG51bGwpO1xuICAgICAgfVxuXG4gICAgICAvKiBXb3JrIG9uIHdob2xlIGRvY3VtZW50IG9yIGp1c3QgaXRzIGJvZHkgKi9cbiAgICAgIGlmIChOQU1FU1BBQ0UgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICAgIHJldHVybiBnZXRFbGVtZW50c0J5VGFnTmFtZS5jYWxsKGRvYywgV0hPTEVfRE9DVU1FTlQgPyAnaHRtbCcgOiAnYm9keScpWzBdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gV0hPTEVfRE9DVU1FTlQgPyBkb2MuZG9jdW1lbnRFbGVtZW50IDogYm9keTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX2NyZWF0ZUl0ZXJhdG9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtEb2N1bWVudH0gcm9vdCBkb2N1bWVudC9mcmFnbWVudCB0byBjcmVhdGUgaXRlcmF0b3IgZm9yXG4gICAgICogQHJldHVybiB7SXRlcmF0b3J9IGl0ZXJhdG9yIGluc3RhbmNlXG4gICAgICovXG4gICAgdmFyIF9jcmVhdGVJdGVyYXRvciA9IGZ1bmN0aW9uIF9jcmVhdGVJdGVyYXRvcihyb290KSB7XG4gICAgICByZXR1cm4gY3JlYXRlTm9kZUl0ZXJhdG9yLmNhbGwocm9vdC5vd25lckRvY3VtZW50IHx8IHJvb3QsIHJvb3QsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5UIHwgTm9kZUZpbHRlci5TSE9XX0NPTU1FTlQgfCBOb2RlRmlsdGVyLlNIT1dfVEVYVCwgbnVsbCwgZmFsc2UpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBfaXNDbG9iYmVyZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge05vZGV9IGVsbSBlbGVtZW50IHRvIGNoZWNrIGZvciBjbG9iYmVyaW5nIGF0dGFja3NcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGNsb2JiZXJlZCwgZmFsc2UgaWYgc2FmZVxuICAgICAqL1xuICAgIHZhciBfaXNDbG9iYmVyZWQgPSBmdW5jdGlvbiBfaXNDbG9iYmVyZWQoZWxtKSB7XG4gICAgICByZXR1cm4gZWxtIGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50ICYmICh0eXBlb2YgZWxtLm5vZGVOYW1lICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgZWxtLnRleHRDb250ZW50ICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgZWxtLnJlbW92ZUNoaWxkICE9PSAnZnVuY3Rpb24nIHx8ICEoZWxtLmF0dHJpYnV0ZXMgaW5zdGFuY2VvZiBOYW1lZE5vZGVNYXApIHx8IHR5cGVvZiBlbG0ucmVtb3ZlQXR0cmlidXRlICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBlbG0uc2V0QXR0cmlidXRlICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBlbG0ubmFtZXNwYWNlVVJJICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgZWxtLmluc2VydEJlZm9yZSAhPT0gJ2Z1bmN0aW9uJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9pc05vZGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge05vZGV9IG9iaiBvYmplY3QgdG8gY2hlY2sgd2hldGhlciBpdCdzIGEgRE9NIG5vZGVcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlzIG9iamVjdCBpcyBhIERPTSBub2RlXG4gICAgICovXG4gICAgdmFyIF9pc05vZGUgPSBmdW5jdGlvbiBfaXNOb2RlKG9iamVjdCkge1xuICAgICAgcmV0dXJuICh0eXBlb2YgTm9kZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoTm9kZSkpID09PSAnb2JqZWN0JyA/IG9iamVjdCBpbnN0YW5jZW9mIE5vZGUgOiBvYmplY3QgJiYgKHR5cGVvZiBvYmplY3QgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9iamVjdCkpID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqZWN0Lm5vZGVUeXBlID09PSAnbnVtYmVyJyAmJiB0eXBlb2Ygb2JqZWN0Lm5vZGVOYW1lID09PSAnc3RyaW5nJztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX2V4ZWN1dGVIb29rXG4gICAgICogRXhlY3V0ZSB1c2VyIGNvbmZpZ3VyYWJsZSBob29rc1xuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBlbnRyeVBvaW50ICBOYW1lIG9mIHRoZSBob29rJ3MgZW50cnkgcG9pbnRcbiAgICAgKiBAcGFyYW0gIHtOb2RlfSBjdXJyZW50Tm9kZSBub2RlIHRvIHdvcmsgb24gd2l0aCB0aGUgaG9va1xuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBhZGRpdGlvbmFsIGhvb2sgcGFyYW1ldGVyc1xuICAgICAqL1xuICAgIHZhciBfZXhlY3V0ZUhvb2sgPSBmdW5jdGlvbiBfZXhlY3V0ZUhvb2soZW50cnlQb2ludCwgY3VycmVudE5vZGUsIGRhdGEpIHtcbiAgICAgIGlmICghaG9va3NbZW50cnlQb2ludF0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcnJheUZvckVhY2goaG9va3NbZW50cnlQb2ludF0sIGZ1bmN0aW9uIChob29rKSB7XG4gICAgICAgIGhvb2suY2FsbChET01QdXJpZnksIGN1cnJlbnROb2RlLCBkYXRhLCBDT05GSUcpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9zYW5pdGl6ZUVsZW1lbnRzXG4gICAgICpcbiAgICAgKiBAcHJvdGVjdCBub2RlTmFtZVxuICAgICAqIEBwcm90ZWN0IHRleHRDb250ZW50XG4gICAgICogQHByb3RlY3QgcmVtb3ZlQ2hpbGRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtOb2RlfSBjdXJyZW50Tm9kZSB0byBjaGVjayBmb3IgcGVybWlzc2lvbiB0byBleGlzdFxuICAgICAqIEByZXR1cm4gIHtCb29sZWFufSB0cnVlIGlmIG5vZGUgd2FzIGtpbGxlZCwgZmFsc2UgaWYgbGVmdCBhbGl2ZVxuICAgICAqL1xuICAgIHZhciBfc2FuaXRpemVFbGVtZW50cyA9IGZ1bmN0aW9uIF9zYW5pdGl6ZUVsZW1lbnRzKGN1cnJlbnROb2RlKSB7XG4gICAgICB2YXIgY29udGVudCA9IHZvaWQgMDtcblxuICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgICAgX2V4ZWN1dGVIb29rKCdiZWZvcmVTYW5pdGl6ZUVsZW1lbnRzJywgY3VycmVudE5vZGUsIG51bGwpO1xuXG4gICAgICAvKiBDaGVjayBpZiBlbGVtZW50IGlzIGNsb2JiZXJlZCBvciBjYW4gY2xvYmJlciAqL1xuICAgICAgaWYgKF9pc0Nsb2JiZXJlZChjdXJyZW50Tm9kZSkpIHtcbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8qIENoZWNrIGlmIHRhZ25hbWUgY29udGFpbnMgVW5pY29kZSAqL1xuICAgICAgaWYgKHN0cmluZ01hdGNoKGN1cnJlbnROb2RlLm5vZGVOYW1lLCAvW1xcdTAwODAtXFx1RkZGRl0vKSkge1xuICAgICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLyogTm93IGxldCdzIGNoZWNrIHRoZSBlbGVtZW50J3MgdHlwZSBhbmQgbmFtZSAqL1xuICAgICAgdmFyIHRhZ05hbWUgPSB0cmFuc2Zvcm1DYXNlRnVuYyhjdXJyZW50Tm9kZS5ub2RlTmFtZSk7XG5cbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgIF9leGVjdXRlSG9vaygndXBvblNhbml0aXplRWxlbWVudCcsIGN1cnJlbnROb2RlLCB7XG4gICAgICAgIHRhZ05hbWU6IHRhZ05hbWUsXG4gICAgICAgIGFsbG93ZWRUYWdzOiBBTExPV0VEX1RBR1NcbiAgICAgIH0pO1xuXG4gICAgICAvKiBEZXRlY3QgbVhTUyBhdHRlbXB0cyBhYnVzaW5nIG5hbWVzcGFjZSBjb25mdXNpb24gKi9cbiAgICAgIGlmICghX2lzTm9kZShjdXJyZW50Tm9kZS5maXJzdEVsZW1lbnRDaGlsZCkgJiYgKCFfaXNOb2RlKGN1cnJlbnROb2RlLmNvbnRlbnQpIHx8ICFfaXNOb2RlKGN1cnJlbnROb2RlLmNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQpKSAmJiByZWdFeHBUZXN0KC88Wy9cXHddL2csIGN1cnJlbnROb2RlLmlubmVySFRNTCkgJiYgcmVnRXhwVGVzdCgvPFsvXFx3XS9nLCBjdXJyZW50Tm9kZS50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8qIE1pdGlnYXRlIGEgcHJvYmxlbSB3aXRoIHRlbXBsYXRlcyBpbnNpZGUgc2VsZWN0ICovXG4gICAgICBpZiAodGFnTmFtZSA9PT0gJ3NlbGVjdCcgJiYgcmVnRXhwVGVzdCgvPHRlbXBsYXRlL2ksIGN1cnJlbnROb2RlLmlubmVySFRNTCkpIHtcbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8qIFJlbW92ZSBlbGVtZW50IGlmIGFueXRoaW5nIGZvcmJpZHMgaXRzIHByZXNlbmNlICovXG4gICAgICBpZiAoIUFMTE9XRURfVEFHU1t0YWdOYW1lXSB8fCBGT1JCSURfVEFHU1t0YWdOYW1lXSkge1xuICAgICAgICAvKiBLZWVwIGNvbnRlbnQgZXhjZXB0IGZvciBiYWQtbGlzdGVkIGVsZW1lbnRzICovXG4gICAgICAgIGlmIChLRUVQX0NPTlRFTlQgJiYgIUZPUkJJRF9DT05URU5UU1t0YWdOYW1lXSkge1xuICAgICAgICAgIHZhciBwYXJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShjdXJyZW50Tm9kZSkgfHwgY3VycmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICB2YXIgY2hpbGROb2RlcyA9IGdldENoaWxkTm9kZXMoY3VycmVudE5vZGUpIHx8IGN1cnJlbnROb2RlLmNoaWxkTm9kZXM7XG5cbiAgICAgICAgICBpZiAoY2hpbGROb2RlcyAmJiBwYXJlbnROb2RlKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGRDb3VudCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gY2hpbGRDb3VudCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNsb25lTm9kZShjaGlsZE5vZGVzW2ldLCB0cnVlKSwgZ2V0TmV4dFNpYmxpbmcoY3VycmVudE5vZGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIUZPUkJJRF9UQUdTW3RhZ05hbWVdICYmIF9iYXNpY0N1c3RvbUVsZW1lbnRUZXN0KHRhZ05hbWUpKSB7XG4gICAgICAgICAgaWYgKENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayBpbnN0YW5jZW9mIFJlZ0V4cCAmJiByZWdFeHBUZXN0KENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjaywgdGFnTmFtZSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICBpZiAoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgRnVuY3Rpb24gJiYgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrKHRhZ05hbWUpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLyogQ2hlY2sgd2hldGhlciBlbGVtZW50IGhhcyBhIHZhbGlkIG5hbWVzcGFjZSAqL1xuICAgICAgaWYgKGN1cnJlbnROb2RlIGluc3RhbmNlb2YgRWxlbWVudCAmJiAhX2NoZWNrVmFsaWROYW1lc3BhY2UoY3VycmVudE5vZGUpKSB7XG4gICAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoKHRhZ05hbWUgPT09ICdub3NjcmlwdCcgfHwgdGFnTmFtZSA9PT0gJ25vZW1iZWQnKSAmJiByZWdFeHBUZXN0KC88XFwvbm8oc2NyaXB0fGVtYmVkKS9pLCBjdXJyZW50Tm9kZS5pbm5lckhUTUwpKSB7XG4gICAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBTYW5pdGl6ZSBlbGVtZW50IGNvbnRlbnQgdG8gYmUgdGVtcGxhdGUtc2FmZSAqL1xuICAgICAgaWYgKFNBRkVfRk9SX1RFTVBMQVRFUyAmJiBjdXJyZW50Tm9kZS5ub2RlVHlwZSA9PT0gMykge1xuICAgICAgICAvKiBHZXQgdGhlIGVsZW1lbnQncyB0ZXh0IGNvbnRlbnQgKi9cbiAgICAgICAgY29udGVudCA9IGN1cnJlbnROb2RlLnRleHRDb250ZW50O1xuICAgICAgICBjb250ZW50ID0gc3RyaW5nUmVwbGFjZShjb250ZW50LCBNVVNUQUNIRV9FWFBSJCQxLCAnICcpO1xuICAgICAgICBjb250ZW50ID0gc3RyaW5nUmVwbGFjZShjb250ZW50LCBFUkJfRVhQUiQkMSwgJyAnKTtcbiAgICAgICAgaWYgKGN1cnJlbnROb2RlLnRleHRDb250ZW50ICE9PSBjb250ZW50KSB7XG4gICAgICAgICAgYXJyYXlQdXNoKERPTVB1cmlmeS5yZW1vdmVkLCB7IGVsZW1lbnQ6IGN1cnJlbnROb2RlLmNsb25lTm9kZSgpIH0pO1xuICAgICAgICAgIGN1cnJlbnROb2RlLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICBfZXhlY3V0ZUhvb2soJ2FmdGVyU2FuaXRpemVFbGVtZW50cycsIGN1cnJlbnROb2RlLCBudWxsKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBfaXNWYWxpZEF0dHJpYnV0ZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBsY1RhZyBMb3dlcmNhc2UgdGFnIG5hbWUgb2YgY29udGFpbmluZyBlbGVtZW50LlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gbGNOYW1lIExvd2VyY2FzZSBhdHRyaWJ1dGUgbmFtZS5cbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHZhbHVlIEF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgICAqL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG4gICAgdmFyIF9pc1ZhbGlkQXR0cmlidXRlID0gZnVuY3Rpb24gX2lzVmFsaWRBdHRyaWJ1dGUobGNUYWcsIGxjTmFtZSwgdmFsdWUpIHtcbiAgICAgIC8qIE1ha2Ugc3VyZSBhdHRyaWJ1dGUgY2Fubm90IGNsb2JiZXIgKi9cbiAgICAgIGlmIChTQU5JVElaRV9ET00gJiYgKGxjTmFtZSA9PT0gJ2lkJyB8fCBsY05hbWUgPT09ICduYW1lJykgJiYgKHZhbHVlIGluIGRvY3VtZW50IHx8IHZhbHVlIGluIGZvcm1FbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8qIEFsbG93IHZhbGlkIGRhdGEtKiBhdHRyaWJ1dGVzOiBBdCBsZWFzdCBvbmUgY2hhcmFjdGVyIGFmdGVyIFwiLVwiXG4gICAgICAgICAgKGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2RvbS5odG1sI2VtYmVkZGluZy1jdXN0b20tbm9uLXZpc2libGUtZGF0YS13aXRoLXRoZS1kYXRhLSotYXR0cmlidXRlcylcbiAgICAgICAgICBYTUwtY29tcGF0aWJsZSAoaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW5mcmFzdHJ1Y3R1cmUuaHRtbCN4bWwtY29tcGF0aWJsZSBhbmQgaHR0cDovL3d3dy53My5vcmcvVFIveG1sLyNkMGU4MDQpXG4gICAgICAgICAgV2UgZG9uJ3QgbmVlZCB0byBjaGVjayB0aGUgdmFsdWU7IGl0J3MgYWx3YXlzIFVSSSBzYWZlLiAqL1xuICAgICAgaWYgKEFMTE9XX0RBVEFfQVRUUiAmJiAhRk9SQklEX0FUVFJbbGNOYW1lXSAmJiByZWdFeHBUZXN0KERBVEFfQVRUUiQkMSwgbGNOYW1lKSkgOyBlbHNlIGlmIChBTExPV19BUklBX0FUVFIgJiYgcmVnRXhwVGVzdChBUklBX0FUVFIkJDEsIGxjTmFtZSkpIDsgZWxzZSBpZiAoIUFMTE9XRURfQVRUUltsY05hbWVdIHx8IEZPUkJJRF9BVFRSW2xjTmFtZV0pIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAvLyBGaXJzdCBjb25kaXRpb24gZG9lcyBhIHZlcnkgYmFzaWMgY2hlY2sgaWYgYSkgaXQncyBiYXNpY2FsbHkgYSB2YWxpZCBjdXN0b20gZWxlbWVudCB0YWduYW1lIEFORFxuICAgICAgICAvLyBiKSBpZiB0aGUgdGFnTmFtZSBwYXNzZXMgd2hhdGV2ZXIgdGhlIHVzZXIgaGFzIGNvbmZpZ3VyZWQgZm9yIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVja1xuICAgICAgICAvLyBhbmQgYykgaWYgdGhlIGF0dHJpYnV0ZSBuYW1lIHBhc3NlcyB3aGF0ZXZlciB0aGUgdXNlciBoYXMgY29uZmlndXJlZCBmb3IgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrXG4gICAgICAgIF9iYXNpY0N1c3RvbUVsZW1lbnRUZXN0KGxjVGFnKSAmJiAoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgUmVnRXhwICYmIHJlZ0V4cFRlc3QoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrLCBsY1RhZykgfHwgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgRnVuY3Rpb24gJiYgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrKGxjVGFnKSkgJiYgKENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjayBpbnN0YW5jZW9mIFJlZ0V4cCAmJiByZWdFeHBUZXN0KENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjaywgbGNOYW1lKSB8fCBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2sgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2sobGNOYW1lKSkgfHxcbiAgICAgICAgLy8gQWx0ZXJuYXRpdmUsIHNlY29uZCBjb25kaXRpb24gY2hlY2tzIGlmIGl0J3MgYW4gYGlzYC1hdHRyaWJ1dGUsIEFORFxuICAgICAgICAvLyB0aGUgdmFsdWUgcGFzc2VzIHdoYXRldmVyIHRoZSB1c2VyIGhhcyBjb25maWd1cmVkIGZvciBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2tcbiAgICAgICAgbGNOYW1lID09PSAnaXMnICYmIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50cyAmJiAoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgUmVnRXhwICYmIHJlZ0V4cFRlc3QoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrLCB2YWx1ZSkgfHwgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgRnVuY3Rpb24gJiYgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrKHZhbHVlKSkpIDsgZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8qIENoZWNrIHZhbHVlIGlzIHNhZmUuIEZpcnN0LCBpcyBhdHRyIGluZXJ0PyBJZiBzbywgaXMgc2FmZSAqL1xuICAgICAgfSBlbHNlIGlmIChVUklfU0FGRV9BVFRSSUJVVEVTW2xjTmFtZV0pIDsgZWxzZSBpZiAocmVnRXhwVGVzdChJU19BTExPV0VEX1VSSSQkMSwgc3RyaW5nUmVwbGFjZSh2YWx1ZSwgQVRUUl9XSElURVNQQUNFJCQxLCAnJykpKSA7IGVsc2UgaWYgKChsY05hbWUgPT09ICdzcmMnIHx8IGxjTmFtZSA9PT0gJ3hsaW5rOmhyZWYnIHx8IGxjTmFtZSA9PT0gJ2hyZWYnKSAmJiBsY1RhZyAhPT0gJ3NjcmlwdCcgJiYgc3RyaW5nSW5kZXhPZih2YWx1ZSwgJ2RhdGE6JykgPT09IDAgJiYgREFUQV9VUklfVEFHU1tsY1RhZ10pIDsgZWxzZSBpZiAoQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMgJiYgIXJlZ0V4cFRlc3QoSVNfU0NSSVBUX09SX0RBVEEkJDEsIHN0cmluZ1JlcGxhY2UodmFsdWUsIEFUVFJfV0hJVEVTUEFDRSQkMSwgJycpKSkgOyBlbHNlIGlmICghdmFsdWUpIDsgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9iYXNpY0N1c3RvbUVsZW1lbnRDaGVja1xuICAgICAqIGNoZWNrcyBpZiBhdCBsZWFzdCBvbmUgZGFzaCBpcyBpbmNsdWRlZCBpbiB0YWdOYW1lLCBhbmQgaXQncyBub3QgdGhlIGZpcnN0IGNoYXJcbiAgICAgKiBmb3IgbW9yZSBzb3BoaXN0aWNhdGVkIGNoZWNraW5nIHNlZSBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3ZhbGlkYXRlLWVsZW1lbnQtbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lIG5hbWUgb2YgdGhlIHRhZyBvZiB0aGUgbm9kZSB0byBzYW5pdGl6ZVxuICAgICAqL1xuICAgIHZhciBfYmFzaWNDdXN0b21FbGVtZW50VGVzdCA9IGZ1bmN0aW9uIF9iYXNpY0N1c3RvbUVsZW1lbnRUZXN0KHRhZ05hbWUpIHtcbiAgICAgIHJldHVybiB0YWdOYW1lLmluZGV4T2YoJy0nKSA+IDA7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9zYW5pdGl6ZUF0dHJpYnV0ZXNcbiAgICAgKlxuICAgICAqIEBwcm90ZWN0IGF0dHJpYnV0ZXNcbiAgICAgKiBAcHJvdGVjdCBub2RlTmFtZVxuICAgICAqIEBwcm90ZWN0IHJlbW92ZUF0dHJpYnV0ZVxuICAgICAqIEBwcm90ZWN0IHNldEF0dHJpYnV0ZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7Tm9kZX0gY3VycmVudE5vZGUgdG8gc2FuaXRpemVcbiAgICAgKi9cbiAgICB2YXIgX3Nhbml0aXplQXR0cmlidXRlcyA9IGZ1bmN0aW9uIF9zYW5pdGl6ZUF0dHJpYnV0ZXMoY3VycmVudE5vZGUpIHtcbiAgICAgIHZhciBhdHRyID0gdm9pZCAwO1xuICAgICAgdmFyIHZhbHVlID0gdm9pZCAwO1xuICAgICAgdmFyIGxjTmFtZSA9IHZvaWQgMDtcbiAgICAgIHZhciBsID0gdm9pZCAwO1xuICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgICAgX2V4ZWN1dGVIb29rKCdiZWZvcmVTYW5pdGl6ZUF0dHJpYnV0ZXMnLCBjdXJyZW50Tm9kZSwgbnVsbCk7XG5cbiAgICAgIHZhciBhdHRyaWJ1dGVzID0gY3VycmVudE5vZGUuYXR0cmlidXRlcztcblxuICAgICAgLyogQ2hlY2sgaWYgd2UgaGF2ZSBhdHRyaWJ1dGVzOyBpZiBub3Qgd2UgbWlnaHQgaGF2ZSBhIHRleHQgbm9kZSAqL1xuXG4gICAgICBpZiAoIWF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaG9va0V2ZW50ID0ge1xuICAgICAgICBhdHRyTmFtZTogJycsXG4gICAgICAgIGF0dHJWYWx1ZTogJycsXG4gICAgICAgIGtlZXBBdHRyOiB0cnVlLFxuICAgICAgICBhbGxvd2VkQXR0cmlidXRlczogQUxMT1dFRF9BVFRSXG4gICAgICB9O1xuICAgICAgbCA9IGF0dHJpYnV0ZXMubGVuZ3RoO1xuXG4gICAgICAvKiBHbyBiYWNrd2FyZHMgb3ZlciBhbGwgYXR0cmlidXRlczsgc2FmZWx5IHJlbW92ZSBiYWQgb25lcyAqL1xuICAgICAgd2hpbGUgKGwtLSkge1xuICAgICAgICBhdHRyID0gYXR0cmlidXRlc1tsXTtcbiAgICAgICAgdmFyIF9hdHRyID0gYXR0cixcbiAgICAgICAgICAgIG5hbWUgPSBfYXR0ci5uYW1lLFxuICAgICAgICAgICAgbmFtZXNwYWNlVVJJID0gX2F0dHIubmFtZXNwYWNlVVJJO1xuXG4gICAgICAgIHZhbHVlID0gc3RyaW5nVHJpbShhdHRyLnZhbHVlKTtcbiAgICAgICAgbGNOYW1lID0gdHJhbnNmb3JtQ2FzZUZ1bmMobmFtZSk7XG5cbiAgICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgICAgICBob29rRXZlbnQuYXR0ck5hbWUgPSBsY05hbWU7XG4gICAgICAgIGhvb2tFdmVudC5hdHRyVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaG9va0V2ZW50LmtlZXBBdHRyID0gdHJ1ZTtcbiAgICAgICAgaG9va0V2ZW50LmZvcmNlS2VlcEF0dHIgPSB1bmRlZmluZWQ7IC8vIEFsbG93cyBkZXZlbG9wZXJzIHRvIHNlZSB0aGlzIGlzIGEgcHJvcGVydHkgdGhleSBjYW4gc2V0XG4gICAgICAgIF9leGVjdXRlSG9vaygndXBvblNhbml0aXplQXR0cmlidXRlJywgY3VycmVudE5vZGUsIGhvb2tFdmVudCk7XG4gICAgICAgIHZhbHVlID0gaG9va0V2ZW50LmF0dHJWYWx1ZTtcbiAgICAgICAgLyogRGlkIHRoZSBob29rcyBhcHByb3ZlIG9mIHRoZSBhdHRyaWJ1dGU/ICovXG4gICAgICAgIGlmIChob29rRXZlbnQuZm9yY2VLZWVwQXR0cikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogUmVtb3ZlIGF0dHJpYnV0ZSAqL1xuICAgICAgICBfcmVtb3ZlQXR0cmlidXRlKG5hbWUsIGN1cnJlbnROb2RlKTtcblxuICAgICAgICAvKiBEaWQgdGhlIGhvb2tzIGFwcHJvdmUgb2YgdGhlIGF0dHJpYnV0ZT8gKi9cbiAgICAgICAgaWYgKCFob29rRXZlbnQua2VlcEF0dHIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIFdvcmsgYXJvdW5kIGEgc2VjdXJpdHkgaXNzdWUgaW4galF1ZXJ5IDMuMCAqL1xuICAgICAgICBpZiAocmVnRXhwVGVzdCgvXFwvPi9pLCB2YWx1ZSkpIHtcbiAgICAgICAgICBfcmVtb3ZlQXR0cmlidXRlKG5hbWUsIGN1cnJlbnROb2RlKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIFNhbml0aXplIGF0dHJpYnV0ZSBjb250ZW50IHRvIGJlIHRlbXBsYXRlLXNhZmUgKi9cbiAgICAgICAgaWYgKFNBRkVfRk9SX1RFTVBMQVRFUykge1xuICAgICAgICAgIHZhbHVlID0gc3RyaW5nUmVwbGFjZSh2YWx1ZSwgTVVTVEFDSEVfRVhQUiQkMSwgJyAnKTtcbiAgICAgICAgICB2YWx1ZSA9IHN0cmluZ1JlcGxhY2UodmFsdWUsIEVSQl9FWFBSJCQxLCAnICcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogSXMgYHZhbHVlYCB2YWxpZCBmb3IgdGhpcyBhdHRyaWJ1dGU/ICovXG4gICAgICAgIHZhciBsY1RhZyA9IHRyYW5zZm9ybUNhc2VGdW5jKGN1cnJlbnROb2RlLm5vZGVOYW1lKTtcbiAgICAgICAgaWYgKCFfaXNWYWxpZEF0dHJpYnV0ZShsY1RhZywgbGNOYW1lLCB2YWx1ZSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIEhhbmRsZSBpbnZhbGlkIGRhdGEtKiBhdHRyaWJ1dGUgc2V0IGJ5IHRyeS1jYXRjaGluZyBpdCAqL1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChuYW1lc3BhY2VVUkkpIHtcbiAgICAgICAgICAgIGN1cnJlbnROb2RlLnNldEF0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSSwgbmFtZSwgdmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvKiBGYWxsYmFjayB0byBzZXRBdHRyaWJ1dGUoKSBmb3IgYnJvd3Nlci11bnJlY29nbml6ZWQgbmFtZXNwYWNlcyBlLmcuIFwieC1zY2hlbWFcIi4gKi9cbiAgICAgICAgICAgIGN1cnJlbnROb2RlLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXJyYXlQb3AoRE9NUHVyaWZ5LnJlbW92ZWQpO1xuICAgICAgICB9IGNhdGNoIChfKSB7fVxuICAgICAgfVxuXG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICBfZXhlY3V0ZUhvb2soJ2FmdGVyU2FuaXRpemVBdHRyaWJ1dGVzJywgY3VycmVudE5vZGUsIG51bGwpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBfc2FuaXRpemVTaGFkb3dET01cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0RvY3VtZW50RnJhZ21lbnR9IGZyYWdtZW50IHRvIGl0ZXJhdGUgb3ZlciByZWN1cnNpdmVseVxuICAgICAqL1xuICAgIHZhciBfc2FuaXRpemVTaGFkb3dET00gPSBmdW5jdGlvbiBfc2FuaXRpemVTaGFkb3dET00oZnJhZ21lbnQpIHtcbiAgICAgIHZhciBzaGFkb3dOb2RlID0gdm9pZCAwO1xuICAgICAgdmFyIHNoYWRvd0l0ZXJhdG9yID0gX2NyZWF0ZUl0ZXJhdG9yKGZyYWdtZW50KTtcblxuICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgICAgX2V4ZWN1dGVIb29rKCdiZWZvcmVTYW5pdGl6ZVNoYWRvd0RPTScsIGZyYWdtZW50LCBudWxsKTtcblxuICAgICAgd2hpbGUgKHNoYWRvd05vZGUgPSBzaGFkb3dJdGVyYXRvci5uZXh0Tm9kZSgpKSB7XG4gICAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgICAgX2V4ZWN1dGVIb29rKCd1cG9uU2FuaXRpemVTaGFkb3dOb2RlJywgc2hhZG93Tm9kZSwgbnVsbCk7XG5cbiAgICAgICAgLyogU2FuaXRpemUgdGFncyBhbmQgZWxlbWVudHMgKi9cbiAgICAgICAgaWYgKF9zYW5pdGl6ZUVsZW1lbnRzKHNoYWRvd05vZGUpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBEZWVwIHNoYWRvdyBET00gZGV0ZWN0ZWQgKi9cbiAgICAgICAgaWYgKHNoYWRvd05vZGUuY29udGVudCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgICAgICBfc2FuaXRpemVTaGFkb3dET00oc2hhZG93Tm9kZS5jb250ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIENoZWNrIGF0dHJpYnV0ZXMsIHNhbml0aXplIGlmIG5lY2Vzc2FyeSAqL1xuICAgICAgICBfc2FuaXRpemVBdHRyaWJ1dGVzKHNoYWRvd05vZGUpO1xuICAgICAgfVxuXG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICBfZXhlY3V0ZUhvb2soJ2FmdGVyU2FuaXRpemVTaGFkb3dET00nLCBmcmFnbWVudCwgbnVsbCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNhbml0aXplXG4gICAgICogUHVibGljIG1ldGhvZCBwcm92aWRpbmcgY29yZSBzYW5pdGF0aW9uIGZ1bmN0aW9uYWxpdHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE5vZGV9IGRpcnR5IHN0cmluZyBvciBET00gbm9kZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAqL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG4gICAgRE9NUHVyaWZ5LnNhbml0aXplID0gZnVuY3Rpb24gKGRpcnR5LCBjZmcpIHtcbiAgICAgIHZhciBib2R5ID0gdm9pZCAwO1xuICAgICAgdmFyIGltcG9ydGVkTm9kZSA9IHZvaWQgMDtcbiAgICAgIHZhciBjdXJyZW50Tm9kZSA9IHZvaWQgMDtcbiAgICAgIHZhciBvbGROb2RlID0gdm9pZCAwO1xuICAgICAgdmFyIHJldHVybk5vZGUgPSB2b2lkIDA7XG4gICAgICAvKiBNYWtlIHN1cmUgd2UgaGF2ZSBhIHN0cmluZyB0byBzYW5pdGl6ZS5cbiAgICAgICAgRE8gTk9UIHJldHVybiBlYXJseSwgYXMgdGhpcyB3aWxsIHJldHVybiB0aGUgd3JvbmcgdHlwZSBpZlxuICAgICAgICB0aGUgdXNlciBoYXMgcmVxdWVzdGVkIGEgRE9NIG9iamVjdCByYXRoZXIgdGhhbiBhIHN0cmluZyAqL1xuICAgICAgSVNfRU1QVFlfSU5QVVQgPSAhZGlydHk7XG4gICAgICBpZiAoSVNfRU1QVFlfSU5QVVQpIHtcbiAgICAgICAgZGlydHkgPSAnPCEtLT4nO1xuICAgICAgfVxuXG4gICAgICAvKiBTdHJpbmdpZnksIGluIGNhc2UgZGlydHkgaXMgYW4gb2JqZWN0ICovXG4gICAgICBpZiAodHlwZW9mIGRpcnR5ICE9PSAnc3RyaW5nJyAmJiAhX2lzTm9kZShkaXJ0eSkpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lZ2F0ZWQtY29uZGl0aW9uXG4gICAgICAgIGlmICh0eXBlb2YgZGlydHkudG9TdHJpbmcgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyB0eXBlRXJyb3JDcmVhdGUoJ3RvU3RyaW5nIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlydHkgPSBkaXJ0eS50b1N0cmluZygpO1xuICAgICAgICAgIGlmICh0eXBlb2YgZGlydHkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyB0eXBlRXJyb3JDcmVhdGUoJ2RpcnR5IGlzIG5vdCBhIHN0cmluZywgYWJvcnRpbmcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyogQ2hlY2sgd2UgY2FuIHJ1bi4gT3RoZXJ3aXNlIGZhbGwgYmFjayBvciBpZ25vcmUgKi9cbiAgICAgIGlmICghRE9NUHVyaWZ5LmlzU3VwcG9ydGVkKSB7XG4gICAgICAgIGlmIChfdHlwZW9mKHdpbmRvdy50b1N0YXRpY0hUTUwpID09PSAnb2JqZWN0JyB8fCB0eXBlb2Ygd2luZG93LnRvU3RhdGljSFRNTCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGlydHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnRvU3RhdGljSFRNTChkaXJ0eSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKF9pc05vZGUoZGlydHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnRvU3RhdGljSFRNTChkaXJ0eS5vdXRlckhUTUwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkaXJ0eTtcbiAgICAgIH1cblxuICAgICAgLyogQXNzaWduIGNvbmZpZyB2YXJzICovXG4gICAgICBpZiAoIVNFVF9DT05GSUcpIHtcbiAgICAgICAgX3BhcnNlQ29uZmlnKGNmZyk7XG4gICAgICB9XG5cbiAgICAgIC8qIENsZWFuIHVwIHJlbW92ZWQgZWxlbWVudHMgKi9cbiAgICAgIERPTVB1cmlmeS5yZW1vdmVkID0gW107XG5cbiAgICAgIC8qIENoZWNrIGlmIGRpcnR5IGlzIGNvcnJlY3RseSB0eXBlZCBmb3IgSU5fUExBQ0UgKi9cbiAgICAgIGlmICh0eXBlb2YgZGlydHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIElOX1BMQUNFID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChJTl9QTEFDRSkge1xuICAgICAgICAvKiBEbyBzb21lIGVhcmx5IHByZS1zYW5pdGl6YXRpb24gdG8gYXZvaWQgdW5zYWZlIHJvb3Qgbm9kZXMgKi9cbiAgICAgICAgaWYgKGRpcnR5Lm5vZGVOYW1lKSB7XG4gICAgICAgICAgdmFyIHRhZ05hbWUgPSB0cmFuc2Zvcm1DYXNlRnVuYyhkaXJ0eS5ub2RlTmFtZSk7XG4gICAgICAgICAgaWYgKCFBTExPV0VEX1RBR1NbdGFnTmFtZV0gfHwgRk9SQklEX1RBR1NbdGFnTmFtZV0pIHtcbiAgICAgICAgICAgIHRocm93IHR5cGVFcnJvckNyZWF0ZSgncm9vdCBub2RlIGlzIGZvcmJpZGRlbiBhbmQgY2Fubm90IGJlIHNhbml0aXplZCBpbi1wbGFjZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkaXJ0eSBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgLyogSWYgZGlydHkgaXMgYSBET00gZWxlbWVudCwgYXBwZW5kIHRvIGFuIGVtcHR5IGRvY3VtZW50IHRvIGF2b2lkXG4gICAgICAgICAgIGVsZW1lbnRzIGJlaW5nIHN0cmlwcGVkIGJ5IHRoZSBwYXJzZXIgKi9cbiAgICAgICAgYm9keSA9IF9pbml0RG9jdW1lbnQoJzwhLS0tLT4nKTtcbiAgICAgICAgaW1wb3J0ZWROb2RlID0gYm9keS5vd25lckRvY3VtZW50LmltcG9ydE5vZGUoZGlydHksIHRydWUpO1xuICAgICAgICBpZiAoaW1wb3J0ZWROb2RlLm5vZGVUeXBlID09PSAxICYmIGltcG9ydGVkTm9kZS5ub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgICAgICAgLyogTm9kZSBpcyBhbHJlYWR5IGEgYm9keSwgdXNlIGFzIGlzICovXG4gICAgICAgICAgYm9keSA9IGltcG9ydGVkTm9kZTtcbiAgICAgICAgfSBlbHNlIGlmIChpbXBvcnRlZE5vZGUubm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgICAgICAgIGJvZHkgPSBpbXBvcnRlZE5vZGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWRvbS1ub2RlLWFwcGVuZFxuICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoaW1wb3J0ZWROb2RlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyogRXhpdCBkaXJlY3RseSBpZiB3ZSBoYXZlIG5vdGhpbmcgdG8gZG8gKi9cbiAgICAgICAgaWYgKCFSRVRVUk5fRE9NICYmICFTQUZFX0ZPUl9URU1QTEFURVMgJiYgIVdIT0xFX0RPQ1VNRU5UICYmXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1pbmNsdWRlc1xuICAgICAgICBkaXJ0eS5pbmRleE9mKCc8JykgPT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIHRydXN0ZWRUeXBlc1BvbGljeSAmJiBSRVRVUk5fVFJVU1RFRF9UWVBFID8gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwoZGlydHkpIDogZGlydHk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBJbml0aWFsaXplIHRoZSBkb2N1bWVudCB0byB3b3JrIG9uICovXG4gICAgICAgIGJvZHkgPSBfaW5pdERvY3VtZW50KGRpcnR5KTtcblxuICAgICAgICAvKiBDaGVjayB3ZSBoYXZlIGEgRE9NIG5vZGUgZnJvbSB0aGUgZGF0YSAqL1xuICAgICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgICByZXR1cm4gUkVUVVJOX0RPTSA/IG51bGwgOiBSRVRVUk5fVFJVU1RFRF9UWVBFID8gZW1wdHlIVE1MIDogJyc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyogUmVtb3ZlIGZpcnN0IGVsZW1lbnQgbm9kZSAob3VycykgaWYgRk9SQ0VfQk9EWSBpcyBzZXQgKi9cbiAgICAgIGlmIChib2R5ICYmIEZPUkNFX0JPRFkpIHtcbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIC8qIEdldCBub2RlIGl0ZXJhdG9yICovXG4gICAgICB2YXIgbm9kZUl0ZXJhdG9yID0gX2NyZWF0ZUl0ZXJhdG9yKElOX1BMQUNFID8gZGlydHkgOiBib2R5KTtcblxuICAgICAgLyogTm93IHN0YXJ0IGl0ZXJhdGluZyBvdmVyIHRoZSBjcmVhdGVkIGRvY3VtZW50ICovXG4gICAgICB3aGlsZSAoY3VycmVudE5vZGUgPSBub2RlSXRlcmF0b3IubmV4dE5vZGUoKSkge1xuICAgICAgICAvKiBGaXggSUUncyBzdHJhbmdlIGJlaGF2aW9yIHdpdGggbWFuaXB1bGF0ZWQgdGV4dE5vZGVzICM4OSAqL1xuICAgICAgICBpZiAoY3VycmVudE5vZGUubm9kZVR5cGUgPT09IDMgJiYgY3VycmVudE5vZGUgPT09IG9sZE5vZGUpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIFNhbml0aXplIHRhZ3MgYW5kIGVsZW1lbnRzICovXG4gICAgICAgIGlmIChfc2FuaXRpemVFbGVtZW50cyhjdXJyZW50Tm9kZSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIFNoYWRvdyBET00gZGV0ZWN0ZWQsIHNhbml0aXplIGl0ICovXG4gICAgICAgIGlmIChjdXJyZW50Tm9kZS5jb250ZW50IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xuICAgICAgICAgIF9zYW5pdGl6ZVNoYWRvd0RPTShjdXJyZW50Tm9kZS5jb250ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIENoZWNrIGF0dHJpYnV0ZXMsIHNhbml0aXplIGlmIG5lY2Vzc2FyeSAqL1xuICAgICAgICBfc2FuaXRpemVBdHRyaWJ1dGVzKGN1cnJlbnROb2RlKTtcblxuICAgICAgICBvbGROb2RlID0gY3VycmVudE5vZGU7XG4gICAgICB9XG5cbiAgICAgIG9sZE5vZGUgPSBudWxsO1xuXG4gICAgICAvKiBJZiB3ZSBzYW5pdGl6ZWQgYGRpcnR5YCBpbi1wbGFjZSwgcmV0dXJuIGl0LiAqL1xuICAgICAgaWYgKElOX1BMQUNFKSB7XG4gICAgICAgIHJldHVybiBkaXJ0eTtcbiAgICAgIH1cblxuICAgICAgLyogUmV0dXJuIHNhbml0aXplZCBzdHJpbmcgb3IgRE9NICovXG4gICAgICBpZiAoUkVUVVJOX0RPTSkge1xuICAgICAgICBpZiAoUkVUVVJOX0RPTV9GUkFHTUVOVCkge1xuICAgICAgICAgIHJldHVybk5vZGUgPSBjcmVhdGVEb2N1bWVudEZyYWdtZW50LmNhbGwoYm9keS5vd25lckRvY3VtZW50KTtcblxuICAgICAgICAgIHdoaWxlIChib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1kb20tbm9kZS1hcHBlbmRcbiAgICAgICAgICAgIHJldHVybk5vZGUuYXBwZW5kQ2hpbGQoYm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuTm9kZSA9IGJvZHk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQUxMT1dFRF9BVFRSLnNoYWRvd3Jvb3QpIHtcbiAgICAgICAgICAvKlxuICAgICAgICAgICAgQWRvcHROb2RlKCkgaXMgbm90IHVzZWQgYmVjYXVzZSBpbnRlcm5hbCBzdGF0ZSBpcyBub3QgcmVzZXRcbiAgICAgICAgICAgIChlLmcuIHRoZSBwYXN0IG5hbWVzIG1hcCBvZiBhIEhUTUxGb3JtRWxlbWVudCksIHRoaXMgaXMgc2FmZVxuICAgICAgICAgICAgaW4gdGhlb3J5IGJ1dCB3ZSB3b3VsZCByYXRoZXIgbm90IHJpc2sgYW5vdGhlciBhdHRhY2sgdmVjdG9yLlxuICAgICAgICAgICAgVGhlIHN0YXRlIHRoYXQgaXMgY2xvbmVkIGJ5IGltcG9ydE5vZGUoKSBpcyBleHBsaWNpdGx5IGRlZmluZWRcbiAgICAgICAgICAgIGJ5IHRoZSBzcGVjcy5cbiAgICAgICAgICAqL1xuICAgICAgICAgIHJldHVybk5vZGUgPSBpbXBvcnROb2RlLmNhbGwob3JpZ2luYWxEb2N1bWVudCwgcmV0dXJuTm9kZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0dXJuTm9kZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNlcmlhbGl6ZWRIVE1MID0gV0hPTEVfRE9DVU1FTlQgPyBib2R5Lm91dGVySFRNTCA6IGJvZHkuaW5uZXJIVE1MO1xuXG4gICAgICAvKiBTYW5pdGl6ZSBmaW5hbCBzdHJpbmcgdGVtcGxhdGUtc2FmZSAqL1xuICAgICAgaWYgKFNBRkVfRk9SX1RFTVBMQVRFUykge1xuICAgICAgICBzZXJpYWxpemVkSFRNTCA9IHN0cmluZ1JlcGxhY2Uoc2VyaWFsaXplZEhUTUwsIE1VU1RBQ0hFX0VYUFIkJDEsICcgJyk7XG4gICAgICAgIHNlcmlhbGl6ZWRIVE1MID0gc3RyaW5nUmVwbGFjZShzZXJpYWxpemVkSFRNTCwgRVJCX0VYUFIkJDEsICcgJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVzdGVkVHlwZXNQb2xpY3kgJiYgUkVUVVJOX1RSVVNURURfVFlQRSA/IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKHNlcmlhbGl6ZWRIVE1MKSA6IHNlcmlhbGl6ZWRIVE1MO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHRvIHNldCB0aGUgY29uZmlndXJhdGlvbiBvbmNlXG4gICAgICogc2V0Q29uZmlnXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICovXG4gICAgRE9NUHVyaWZ5LnNldENvbmZpZyA9IGZ1bmN0aW9uIChjZmcpIHtcbiAgICAgIF9wYXJzZUNvbmZpZyhjZmcpO1xuICAgICAgU0VUX0NPTkZJRyA9IHRydWU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gcmVtb3ZlIHRoZSBjb25maWd1cmF0aW9uXG4gICAgICogY2xlYXJDb25maWdcbiAgICAgKlxuICAgICAqL1xuICAgIERPTVB1cmlmeS5jbGVhckNvbmZpZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIENPTkZJRyA9IG51bGw7XG4gICAgICBTRVRfQ09ORklHID0gZmFsc2U7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gY2hlY2sgaWYgYW4gYXR0cmlidXRlIHZhbHVlIGlzIHZhbGlkLlxuICAgICAqIFVzZXMgbGFzdCBzZXQgY29uZmlnLCBpZiBhbnkuIE90aGVyd2lzZSwgdXNlcyBjb25maWcgZGVmYXVsdHMuXG4gICAgICogaXNWYWxpZEF0dHJpYnV0ZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSB0YWcgVGFnIG5hbWUgb2YgY29udGFpbmluZyBlbGVtZW50LlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gYXR0ciBBdHRyaWJ1dGUgbmFtZS5cbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHZhbHVlIEF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZC4gT3RoZXJ3aXNlLCByZXR1cm5zIGZhbHNlLlxuICAgICAqL1xuICAgIERPTVB1cmlmeS5pc1ZhbGlkQXR0cmlidXRlID0gZnVuY3Rpb24gKHRhZywgYXR0ciwgdmFsdWUpIHtcbiAgICAgIC8qIEluaXRpYWxpemUgc2hhcmVkIGNvbmZpZyB2YXJzIGlmIG5lY2Vzc2FyeS4gKi9cbiAgICAgIGlmICghQ09ORklHKSB7XG4gICAgICAgIF9wYXJzZUNvbmZpZyh7fSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBsY1RhZyA9IHRyYW5zZm9ybUNhc2VGdW5jKHRhZyk7XG4gICAgICB2YXIgbGNOYW1lID0gdHJhbnNmb3JtQ2FzZUZ1bmMoYXR0cik7XG4gICAgICByZXR1cm4gX2lzVmFsaWRBdHRyaWJ1dGUobGNUYWcsIGxjTmFtZSwgdmFsdWUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGRIb29rXG4gICAgICogUHVibGljIG1ldGhvZCB0byBhZGQgRE9NUHVyaWZ5IGhvb2tzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZW50cnlQb2ludCBlbnRyeSBwb2ludCBmb3IgdGhlIGhvb2sgdG8gYWRkXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gaG9va0Z1bmN0aW9uIGZ1bmN0aW9uIHRvIGV4ZWN1dGVcbiAgICAgKi9cbiAgICBET01QdXJpZnkuYWRkSG9vayA9IGZ1bmN0aW9uIChlbnRyeVBvaW50LCBob29rRnVuY3Rpb24pIHtcbiAgICAgIGlmICh0eXBlb2YgaG9va0Z1bmN0aW9uICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaG9va3NbZW50cnlQb2ludF0gPSBob29rc1tlbnRyeVBvaW50XSB8fCBbXTtcbiAgICAgIGFycmF5UHVzaChob29rc1tlbnRyeVBvaW50XSwgaG9va0Z1bmN0aW9uKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlSG9va1xuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gcmVtb3ZlIGEgRE9NUHVyaWZ5IGhvb2sgYXQgYSBnaXZlbiBlbnRyeVBvaW50XG4gICAgICogKHBvcHMgaXQgZnJvbSB0aGUgc3RhY2sgb2YgaG9va3MgaWYgbW9yZSBhcmUgcHJlc2VudClcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBlbnRyeVBvaW50IGVudHJ5IHBvaW50IGZvciB0aGUgaG9vayB0byByZW1vdmVcbiAgICAgKi9cbiAgICBET01QdXJpZnkucmVtb3ZlSG9vayA9IGZ1bmN0aW9uIChlbnRyeVBvaW50KSB7XG4gICAgICBpZiAoaG9va3NbZW50cnlQb2ludF0pIHtcbiAgICAgICAgYXJyYXlQb3AoaG9va3NbZW50cnlQb2ludF0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVIb29rc1xuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gcmVtb3ZlIGFsbCBET01QdXJpZnkgaG9va3MgYXQgYSBnaXZlbiBlbnRyeVBvaW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGVudHJ5UG9pbnQgZW50cnkgcG9pbnQgZm9yIHRoZSBob29rcyB0byByZW1vdmVcbiAgICAgKi9cbiAgICBET01QdXJpZnkucmVtb3ZlSG9va3MgPSBmdW5jdGlvbiAoZW50cnlQb2ludCkge1xuICAgICAgaWYgKGhvb2tzW2VudHJ5UG9pbnRdKSB7XG4gICAgICAgIGhvb2tzW2VudHJ5UG9pbnRdID0gW107XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZUFsbEhvb2tzXG4gICAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgYWxsIERPTVB1cmlmeSBob29rc1xuICAgICAqXG4gICAgICovXG4gICAgRE9NUHVyaWZ5LnJlbW92ZUFsbEhvb2tzID0gZnVuY3Rpb24gKCkge1xuICAgICAgaG9va3MgPSB7fTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIERPTVB1cmlmeTtcbiAgfVxuXG4gIHZhciBwdXJpZnkgPSBjcmVhdGVET01QdXJpZnkoKTtcblxuICByZXR1cm4gcHVyaWZ5O1xuXG59KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wdXJpZnkuanMubWFwXG4iLCJpbXBvcnQgdHlwZSB7IENhbGxiYWNrRGVib3VuY2VGdW5jdGlvbiB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9Db250YWN0c1NlYXJjaFwiO1xuaW1wb3J0ICogYXMgRE9NUHVyaWZ5IGZyb20gXCJkb21wdXJpZnlcIjtcblxuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gKFxuICBmdW5jOiBDYWxsYmFja0RlYm91bmNlRnVuY3Rpb24sXG4gIHdhaXQ6IG51bWJlcixcbik6IENhbGxiYWNrRGVib3VuY2VGdW5jdGlvbiA9PiB7XG4gIGxldCB0aW1lb3V0OiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PjtcblxuICByZXR1cm4gZnVuY3Rpb24gZXhlY3V0ZWRGdW5jdGlvbiguLi5hcmdzOiB1bmtub3duW10pOiB2b2lkIHtcbiAgICBjb25zdCBsYXRlciA9ICgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIGZ1bmMoLi4uYXJncyk7XG4gICAgfTtcblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgaXNWYWxpZEVtYWlsID0gKGVtYWlsOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvLnRlc3QoZW1haWwpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNsZWFuTWVzc2FnZUZvclNuaXBwZXQgPSAoYm9keTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgaWYgKCFib2R5KSByZXR1cm4gXCJcIjtcbiAgcmV0dXJuIChcbiAgICBET01QdXJpZnkuc2FuaXRpemUoYm9keSwge1xuICAgICAgQUxMT1dFRF9UQUdTOiBbXSxcbiAgICAgIEtFRVBfQ09OVEVOVDogdHJ1ZSxcbiAgICB9KVxuICAgICAgLy9SZW1vdmUgYWxsIEhUTUwgZW50aXRpZXNcbiAgICAgID8ucmVwbGFjZSgvKCYuKz87KS9nLCBcIlwiKVxuICAgICAgLy8gUmVtb3ZlIGV4dHJhIHNwYWNlc1xuICAgICAgPy5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKVxuICAgICAgLy8gUmVtb3ZlIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNwYWNlXG4gICAgICA/LnRyaW0oKVxuICAgICAgLy8gQWRkIC4uLiBmb3IgbG9uZ2VyIG1lc3NhZ2VcbiAgICAgID8uc3Vic3RyaW5nKDAsIDE5MCkgKyAoYm9keS5sZW5ndGggPiAxOTAgPyBcIi4uLlwiIDogXCJcIilcbiAgKTtcbn07XG4iLCJpbXBvcnQgdHlwZSB7IE1lc3NhZ2UsIFBhcnRpY2lwYW50IH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNsdWRlc015RW1haWwoXG4gIG15RW1haWw6IHN0cmluZyxcbiAgbWVzc2FnZTogTWVzc2FnZSxcbiAgZmllbGQ6IFwidG9cIiB8IFwiZnJvbVwiIHwgXCJjY1wiIHwgXCJiY2NcIixcbik6IGJvb2xlYW4ge1xuICBpZiAoIW15RW1haWwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gbWVzc2FnZVtmaWVsZF0uc29tZShcbiAgICAoZSkgPT4gZS5lbWFpbC50b0xvd2VyQ2FzZSgpID09PSBteUVtYWlsLnRvTG93ZXJDYXNlKCksXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJ0aWNpcGFudHNXaXRob3V0R2l2ZW5FbWFpbHMoXG4gIGVtYWlsczogc3RyaW5nW10sXG4gIG1lc3NhZ2U6IE1lc3NhZ2UsXG4pOiBQYXJ0aWNpcGFudFtdIHtcbiAgY29uc3QgYWxsUGFydGljaXBhbnRzID0gW1xuICAgIC4uLm1lc3NhZ2UuZnJvbSxcbiAgICAuLi5tZXNzYWdlLnRvLFxuICAgIC4uLm1lc3NhZ2UuY2MsXG4gICAgLi4ubWVzc2FnZS5iY2MsXG4gIF07XG4gIHJldHVybiBhbGxQYXJ0aWNpcGFudHMuZmlsdGVyKChlKSA9PiAhZW1haWxzLmluY2x1ZGVzKGUuZW1haWwpKTtcbn1cblxudHlwZSBCdWlsZFBhcnRpY2lwYW50ID0ge1xuICBteUVtYWlsOiBzdHJpbmc7XG4gIG1lc3NhZ2U6IE1lc3NhZ2U7XG4gIHR5cGU6IFwicmVwbHlcIiB8IFwicmVwbHlfYWxsXCI7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRQYXJ0aWNpcGFudHMoe1xuICBteUVtYWlsLFxuICBtZXNzYWdlLFxuICB0eXBlLFxufTogQnVpbGRQYXJ0aWNpcGFudCk6IFJlY29yZDxzdHJpbmcsIFBhcnRpY2lwYW50W10+IHtcbiAgbGV0IHRvOiBQYXJ0aWNpcGFudFtdID0gW107XG4gIGxldCBjYzogUGFydGljaXBhbnRbXSA9IFtdO1xuICB0byA9IG1lc3NhZ2UucmVwbHlfdG8uZmlsdGVyKChlKSA9PiBlLmVtYWlsICE9PSBteUVtYWlsKTtcbiAgLy8gaWYgbWVzc2FnZSBkb2VzIG5vdCBoYXZlICdyZXBseV90byc6XG4gIC8vIC0gQU5EIGlmIG1lc3NhZ2UgZnJvbSBzZWxmIHNldCAndG8nIGFzIHRoZSBkZWZhdWx0ICd0bydcbiAgLy8gLSBlbHNlIHNldCAnZnJvbScgYXMgdGhlIGRlZmF1bHQgJ3RvJ1xuICBpZiAoIXRvLmxlbmd0aCkge1xuICAgIGlmIChpbmNsdWRlc015RW1haWwobXlFbWFpbCwgbWVzc2FnZSwgXCJmcm9tXCIpKSB7XG4gICAgICB0byA9IG1lc3NhZ2UudG87XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvID0gbWVzc2FnZS5mcm9tO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlID09PSBcInJlcGx5X2FsbFwiKSB7XG4gICAgY29uc3QgZnJvbUVtYWlscyA9IG1lc3NhZ2UuZnJvbT8ubWFwKChpKSA9PiBpLmVtYWlsKTtcbiAgICBjYyA9IFsuLi5wYXJ0aWNpcGFudHNXaXRob3V0R2l2ZW5FbWFpbHMoWy4uLmZyb21FbWFpbHMsIG15RW1haWxdLCBtZXNzYWdlKV07XG4gIH1cblxuICByZXR1cm4geyB0bywgY2MgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGlzVmFsaWRQYXJ0aWNpcGFudCA9IChwYXJ0aWNpcGFudDogUGFydGljaXBhbnQpOiBib29sZWFuID0+IHtcbiAgaWYgKFwiZW1haWxcIiBpbiBwYXJ0aWNpcGFudCAmJiBcIm5hbWVcIiBpbiBwYXJ0aWNpcGFudCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBjbGVhblBhcnRpY2lwYW50cyA9IChjb250YWN0czogYW55W10pOiBQYXJ0aWNpcGFudFtdID0+IHtcbiAgY29uc3QgcGFydGljaXBhbnRzID0gY29udGFjdHMucmVkdWNlKChyZXN1bHQ6IFBhcnRpY2lwYW50W10sIGNvbnRhY3QpID0+IHtcbiAgICBpZiAoaXNWYWxpZFBhcnRpY2lwYW50KGNvbnRhY3QpKSB7XG4gICAgICAvLyBJZiBpdCBpcyBhIHZhbGlkIFBhcnRpY2lwYW50IHR5cGVcbiAgICAgIHJlc3VsdC5wdXNoKGNvbnRhY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiBpdCBpcyBhIENvbnRhY3QgdHlwZSwgY29uc3VtZWQgL2NvbnRhY3RzIGFwaVxuICAgICAgaWYgKFwiZW1haWxzXCIgaW4gY29udGFjdCAmJiBjb250YWN0LmVtYWlscz8ubGVuZ3RoID4gMCkge1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgbmFtZTogYCR7Y29udGFjdC5naXZlbl9uYW1lID8/IFwiXCJ9ICR7Y29udGFjdC5zdXJuYW1lID8/IFwiXCJ9YCxcbiAgICAgICAgICBlbWFpbDogY29udGFjdC5lbWFpbHNbMF0uZW1haWwsXG4gICAgICAgICAgY29udGFjdCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIHBhcnRpY2lwYW50cztcbn07XG4iLCI8c3ZlbHRlOm9wdGlvbnMgdGFnPVwibnlsYXMtY29udGFjdHMtc2VhcmNoXCIgaW1tdXRhYmxlPXt0cnVlfSAvPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICBpbXBvcnQgeyBkZWJvdW5jZSwgaXNWYWxpZEVtYWlsIH0gZnJvbSBcIi4uL2xpYi91dGlsc1wiO1xuICBpbXBvcnQgeyB0aWNrIH0gZnJvbSBcInN2ZWx0ZVwiO1xuICBpbXBvcnQgeyBjbGVhblBhcnRpY2lwYW50cyB9IGZyb20gXCJAY29tbW9ucy9tZXRob2RzL3BhcnRpY2lwYW50c1wiO1xuICBpbXBvcnQgdHlwZSB7IFBhcnRpY2lwYW50IH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG4gIGltcG9ydCB0eXBlIHtcbiAgICBGZXRjaENvbnRhY3RzQ2FsbGJhY2ssXG4gICAgQ2hhbmdlQ2FsbGJhY2ssXG4gICAgQmx1ck9wdGlvbnMsXG4gIH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL0NvbnRhY3RzU2VhcmNoXCI7XG5cbiAgZXhwb3J0IGxldCBjb250YWN0czogUGFydGljaXBhbnRbXSB8IEZldGNoQ29udGFjdHNDYWxsYmFjaztcblxuICBleHBvcnQgbGV0IHZhbHVlOiBQYXJ0aWNpcGFudFtdID0gW107XG4gIGV4cG9ydCBsZXQgcGxhY2Vob2xkZXI6IHN0cmluZyA9IFwiVG9cIjtcbiAgZXhwb3J0IGxldCBzaW5nbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBjaGFuZ2U6IENoYW5nZUNhbGxiYWNrIHwgdm9pZDtcbiAgZXhwb3J0IGxldCBzaG93X2Ryb3Bkb3duOiBib29sZWFuID0gdHJ1ZTtcblxuICBsZXQgc2VsZWN0ZWRDb250YWN0czogUGFydGljaXBhbnRbXSA9IFtdO1xuICBsZXQgdGVybTogc3RyaW5nID0gXCJcIjsgLy8gVE9ETzogcmVuYW1lIHRvIFwidGVybVwiXG4gIGxldCBjdXJyZW50Q29udGFjdEluZGV4ID0gMDtcbiAgbGV0IGxvYWRpbmcgPSBmYWxzZTtcbiAgbGV0IHNlYXJjaEZpZWxkOiBIVE1MSW5wdXRFbGVtZW50O1xuICBsZXQgY29udGFjdHNMaXN0OiBQYXJ0aWNpcGFudFtdID0gW107XG4gIGxldCBpc09wZW4gPSBmYWxzZTtcblxuICAvLyBJbml0aWFsIHN0YXRlIHNldHVwXG4gIGNvbnN0IGluaXRpYWxTZXR1cCA9ICgpID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjb250YWN0cykpIHtcbiAgICAgIGNvbnRhY3RzTGlzdCA9IGNsZWFuUGFydGljaXBhbnRzKGNvbnRhY3RzKTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBzZWxlY3RlZENvbnRhY3RzID0gdmFsdWU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG55bGFzQ29udGFjdHMgPSAoKTogYW55W10gPT4ge1xuICAgIHJldHVybiBbXTtcbiAgfTtcbiAgY29uc3QgZ2V0Q29udGFjdHNTZXR1cCA9ICh0ZXJtOiBzdHJpbmcpID0+IHtcbiAgICBsb2FkaW5nID0gdHJ1ZTtcbiAgICBjb250YWN0c0xpc3QgPSBbXTtcbiAgICBnZXRDb250YWN0cyh0ZXJtKTtcbiAgfTtcbiAgY29uc3QgZ2V0Q29udGFjdHMgPSBkZWJvdW5jZShhc3luYyAodGVybTogc3RyaW5nKSA9PiB7XG4gICAgbG9hZGluZyA9IHRydWU7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IGdldENvbnRhY3RzRnVuYyA9XG4gICAgICB0eXBlb2YgY29udGFjdHMgPT09IFwiZnVuY3Rpb25cIiA/IGNvbnRhY3RzIDogbnlsYXNDb250YWN0cztcbiAgICB0cnkge1xuICAgICAgY29uc3QgY29udGFjdHNSZXNwb25zZSA9IGF3YWl0IGdldENvbnRhY3RzRnVuYyh0ZXJtKTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbnRhY3RzUmVzcG9uc2UpKSB7XG4gICAgICAgIGNvbnRhY3RzTGlzdCA9IGNsZWFuUGFydGljaXBhbnRzKGNvbnRhY3RzUmVzcG9uc2UpO1xuICAgICAgfVxuXG4gICAgICBsb2FkaW5nID0gZmFsc2U7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIFRPRE86IGFkZCBlcnJvciBoYW5kbGluZ1xuICAgICAgbG9hZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfSwgMzUwKTtcblxuICBjb25zdCByZW1vdmVDb250YWN0ID0gKGVtYWlsOiBzdHJpbmcpID0+IHtcbiAgICBzZWxlY3RlZENvbnRhY3RzID0gc2VsZWN0ZWRDb250YWN0cy5maWx0ZXIoKGMpID0+IGMuZW1haWwgIT09IGVtYWlsKTtcbiAgICBmb2N1c1NlYXJjaCgpO1xuICB9O1xuICBjb25zdCBzZWxlY3RDb250YWN0ID0gKGNvbnRhY3Q6IFBhcnRpY2lwYW50KSA9PiB7XG4gICAgaWYgKHNpbmdsZSAmJiBzZWxlY3RlZENvbnRhY3RzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgc2VsZWN0ZWRDb250YWN0cyA9IFtjb250YWN0XTtcbiAgICAgIGlzT3BlbiA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWlzU2VsZWN0ZWQoY29udGFjdC5lbWFpbCkpIHtcbiAgICAgIHNlbGVjdGVkQ29udGFjdHMgPSBbLi4uc2VsZWN0ZWRDb250YWN0cywgY29udGFjdF07XG4gICAgfVxuICAgIGZvY3VzU2VhcmNoKCk7XG4gIH07XG5cbiAgY29uc3QgZm9jdXNTZWFyY2ggPSAoZT86IE1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoZT8udGFyZ2V0ICYmIHNlYXJjaEZpZWxkICYmICghc2luZ2xlIHx8ICFzZWxlY3RlZENvbnRhY3RzLmxlbmd0aCkpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgIT09IFwiSU5QVVRcIikge1xuICAgICAgICAvLyBoYW5kbGVzIGJ1ZyB3aGVuIGlucHV0IGlzIGNsaWNrZWQsIHRoZSBpbnB1dCBpcyBibHVycmVkXG4gICAgICAgIHNlYXJjaEZpZWxkLmZvY3VzKCk7XG4gICAgICB9XG4gICAgICBpc09wZW4gPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICAkOiBpZiAoc2VhcmNoRmllbGQpIHtcbiAgICBzZWFyY2hGaWVsZC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xuICAgIHNlYXJjaEZpZWxkLmZvY3VzKCk7XG4gICAgc2VhcmNoRmllbGQucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XG4gIH1cblxuICBjb25zdCBibHVyU2VhcmNoID0gKG9wdGlvbnM6IEJsdXJPcHRpb25zID0ge30pID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChvcHRpb25zLmFkZENvbnRhY3QgJiYgIWZpbHRlcmVkQ29udGFjdHMubGVuZ3RoICYmIHRlcm0pIHtcbiAgICAgICAgaGFuZGxlU3VibWl0KCk7XG4gICAgICB9XG4gICAgICBpc09wZW4gPSBmYWxzZTtcbiAgICAgIHRlcm0gPSBcIlwiO1xuICAgICAgaWYgKHNlYXJjaEZpZWxkKSB7XG4gICAgICAgIHNlYXJjaEZpZWxkLmJsdXIoKTtcbiAgICAgIH1cbiAgICB9LCBvcHRpb25zLmJsdXJJbiB8fCAyNTApO1xuICB9O1xuICBjb25zdCBoYW5kbGVLZXlkb3duID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgLy8gQmFja3NwYWNlXG4gICAgZm9jdXNTZWFyY2goKTtcblxuICAgIGlmIChldmVudC5rZXkgPT09IFwiQmFja3NwYWNlXCIgJiYgc2VsZWN0ZWRDb250YWN0cy5sZW5ndGggJiYgIXRlcm0pIHtcbiAgICAgIHNlbGVjdGVkQ29udGFjdHMgPSBzZWxlY3RlZENvbnRhY3RzLnNsaWNlKDAsIHNlbGVjdGVkQ29udGFjdHMubGVuZ3RoIC0gMSk7XG4gICAgfVxuICAgIGlmIChldmVudC5rZXkgPT09IFwiVGFiXCIpIHtcbiAgICAgIGhhbmRsZVN1Ym1pdCgpO1xuICAgIH1cbiAgICAvLyBEb3duQXJyb3dcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkFycm93RG93blwiICYmIGNvbnRhY3RzTGlzdC5sZW5ndGgpIHtcbiAgICAgIGlmIChjdXJyZW50Q29udGFjdEluZGV4IDw9IGNvbnRhY3RzTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgY3VycmVudENvbnRhY3RJbmRleCArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBVcEFycm93XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd1VwXCIgJiYgY29udGFjdHNMaXN0Lmxlbmd0aCkge1xuICAgICAgaWYgKGN1cnJlbnRDb250YWN0SW5kZXggIT0gMCkge1xuICAgICAgICBjdXJyZW50Q29udGFjdEluZGV4IC09IDE7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIgJiYgY29udGFjdHNMaXN0Lmxlbmd0aCkge1xuICAgICAgYmx1clNlYXJjaCgpO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgc2V0QWN0aXZlQ29udGFjdCA9IChpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgY3VycmVudENvbnRhY3RJbmRleCA9IGluZGV4O1xuICB9O1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgaWYgKHNpbmdsZSAmJiBzZWxlY3RlZENvbnRhY3RzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZmlsdGVyZWRDb250YWN0cy5sZW5ndGgpIHtcbiAgICAgIGlmICghaXNTZWxlY3RlZChmaWx0ZXJlZENvbnRhY3RzW2N1cnJlbnRDb250YWN0SW5kZXhdLmVtYWlsKSkge1xuICAgICAgICBzZWxlY3RlZENvbnRhY3RzID0gW1xuICAgICAgICAgIC4uLnNlbGVjdGVkQ29udGFjdHMsXG4gICAgICAgICAgZmlsdGVyZWRDb250YWN0c1tjdXJyZW50Q29udGFjdEluZGV4XSxcbiAgICAgICAgXTtcbiAgICAgICAgY3VycmVudENvbnRhY3RJbmRleCA9IDA7XG4gICAgICAgIGJsdXJTZWFyY2goeyBibHVySW46IDAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghaXNTZWxlY3RlZCh0ZXJtKSAmJiB0ZXJtKSB7XG4gICAgICBpZiAoaXNWYWxpZEVtYWlsKHRlcm0pKSB7XG4gICAgICAgIHNlbGVjdGVkQ29udGFjdHMgPSBbLi4uc2VsZWN0ZWRDb250YWN0cywgeyBlbWFpbDogdGVybSB9XTtcbiAgICAgICAgY3VycmVudENvbnRhY3RJbmRleCA9IDA7XG4gICAgICAgIGJsdXJTZWFyY2goeyBibHVySW46IDAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCBpc1NlbGVjdGVkID0gKGVtYWlsOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gc2VsZWN0ZWRDb250YWN0cy5tYXAoKGMpID0+IGMuZW1haWwpLmluY2x1ZGVzKGVtYWlsKTtcbiAgfTtcblxuICAkOiBpZiAoc2VsZWN0ZWRDb250YWN0cyAmJiBjaGFuZ2UpIHtcbiAgICB0aWNrKCkudGhlbigoKSA9PiB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjaGFuZ2Uoc2VsZWN0ZWRDb250YWN0cyk7XG4gICAgfSk7XG4gIH1cbiAgJDogaWYgKGNvbnRhY3RzIHx8IHZhbHVlKSBpbml0aWFsU2V0dXAoKTtcbiAgJDogaWYgKGlzT3BlbiAmJiB0eXBlb2YgY29udGFjdHMgPT09IFwiZnVuY3Rpb25cIikgZ2V0Q29udGFjdHNTZXR1cCh0ZXJtKTtcbiAgJDogZmlsdGVyZWRDb250YWN0cyA9IGNvbnRhY3RzTGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICBjb25zdCB0cm06IHN0cmluZyA9IHRlcm0gPyB0ZXJtLnRvTG93ZXJDYXNlKCkgOiBcIlwiO1xuICAgIGNvbnN0IG5hbWU6IHN0cmluZyA9IGl0ZW0ubmFtZSA/IGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpIDogXCJcIjtcbiAgICBjb25zdCBlbWFpbDogc3RyaW5nID0gaXRlbS5lbWFpbCA/IGl0ZW0uZW1haWwudG9Mb3dlckNhc2UoKSA6IFwiXCI7XG4gICAgY29uc3QgaW5jbHVkZXNOYW1lID0gbmFtZS5pbmNsdWRlcyh0cm0pO1xuICAgIGNvbnN0IGluY2x1ZGVzRW1haWwgPSBlbWFpbC5pbmNsdWRlcyh0cm0pO1xuICAgIGNvbnN0IG1hdGNoZWQgPSBpbmNsdWRlc05hbWUgfHwgaW5jbHVkZXNFbWFpbDtcbiAgICByZXR1cm4gbWF0Y2hlZCAmJiAhaXNTZWxlY3RlZChpdGVtLmVtYWlsKTtcbiAgfSk7XG4gICQ6IGlmIChmaWx0ZXJlZENvbnRhY3RzKSB7XG4gICAgY3VycmVudENvbnRhY3RJbmRleCA9IDA7XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbiAgOnJvb3Qge1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICB9XG4gIC5jb250YWN0cy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcGFkZGluZzogMC40cmVtIHZhcigtLW91dGVyLXBhZGRpbmcpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICAgICo6Zm9jdXMge1xuICAgICAgb3V0bGluZTogNXB4IGF1dG8gdmFyKC0tcHJpbWFyeSk7XG4gICAgfVxuICB9XG4gIC5jb250YWN0cy1jb250YWluZXIgPiBkaXYge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjFyZW07XG4gICAgcGFkZGluZy1yaWdodDogMC4xcmVtO1xuICB9XG4gIC5jb250YWN0LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tYm9yZGVyLXJhZGl1cykgLyAyKTtcbiAgICBwYWRkaW5nOiAwLjJyZW0gMC44cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICB9XG4gIC5jb250YWN0LWl0ZW0gPiBidXR0b24ge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgcGFkZGluZzogMnB4IDRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5jb250YWN0LWl0ZW1fX25hbWUge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XG4gIH1cbiAgLmRyb3Bkb3duIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXgtaGVpZ2h0OiAzNTBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgICBsZWZ0OiBjYWxjKHZhcigtLW91dGVyLXBhZGRpbmcpIC8gMik7XG4gICAgcmlnaHQ6IGNhbGModmFyKC0tb3V0ZXItcGFkZGluZykgLyAyKTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1ib3JkZXItcmFkaXVzKSAvIDIpO1xuICB9XG5cbiAgLmRyb3Bkb3duLWl0ZW0ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiB2YXIoLS1vdXRlci1wYWRkaW5nKTtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIC5kcm9wZG93bi1pdGVtX19lbWFpbCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1iZykgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5zZWxlY3RlZCB7XG4gICAgICBvcGFjaXR5OiAwLjM7XG4gICAgfVxuICAgICZfX25hbWUge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB9XG4gICAgJl9fZW1haWwge1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcbiAgICB9XG4gIH1cbiAgLnNlYXJjaC1maWVsZCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICY6Zm9jdXMge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgIH1cbiAgfVxuICAuc2VhcmNoLWZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiAzMjBweDtcbiAgfVxuXG4gIC5jb250YWN0cy1yZXN1bHRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuY29udGFjdHMtcGxhY2Vob2xkZXIge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtYWxsKTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWluLXdpZHRoOiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICB9XG48L3N0eWxlPlxuXG48ZGl2IGNsYXNzPVwiZHJvcGRvd25cIj5cbiAgPGRpdiBjbGFzcz1cImNvbnRhY3RzLWNvbnRhaW5lclwiIG9uOmNsaWNrPXtmb2N1c1NlYXJjaH0+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhY3RzLXJlc3VsdHNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0cy1wbGFjZWhvbGRlclwiPntwbGFjZWhvbGRlcn08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0cy1yZXN1bHRzLWlubmVyXCI+XG4gICAgICAgIHsjZWFjaCBzZWxlY3RlZENvbnRhY3RzIGFzIGNvbnRhY3QgKGNvbnRhY3QuZW1haWwpfVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWl0ZW1cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGFjdC1pdGVtX19uYW1lXCI+XG4gICAgICAgICAgICAgIHsjaWYgY29udGFjdC5uYW1lfVxuICAgICAgICAgICAgICAgIDxzdHJvbmc+e2NvbnRhY3QubmFtZX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICB7YDwke2NvbnRhY3QuZW1haWx9PmB9XG4gICAgICAgICAgICAgIHs6ZWxzZX17Y29udGFjdC5lbWFpbH17L2lmfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgbmFtZT1cInRlcm1cIlxuICAgICAgICAgICAgICBvbjpjbGljaz17KCkgPT4gcmVtb3ZlQ29udGFjdChjb250YWN0LmVtYWlsKX0+JnRpbWVzOzwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB7L2VhY2h9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIHsjaWYgKHNpbmdsZSAmJiAhc2VsZWN0ZWRDb250YWN0cy5sZW5ndGgpIHx8ICFzaW5nbGV9XG4gICAgICA8Zm9ybSBvbjpzdWJtaXR8cHJldmVudERlZmF1bHQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3M9XCJzZWFyY2gtZm9ybVwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBkYXRhLWN5PVwiY29udGFjdHMtc2VhcmNoLWZpZWxkXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgIGNsYXNzPVwic2VhcmNoLWZpZWxkXCJcbiAgICAgICAgICBiaW5kOnRoaXM9e3NlYXJjaEZpZWxkfVxuICAgICAgICAgIG9uOmtleWRvd249e2hhbmRsZUtleWRvd259XG4gICAgICAgICAgb246Ymx1cj17KCkgPT4ge1xuICAgICAgICAgICAgYmx1clNlYXJjaCh7IGFkZENvbnRhY3Q6IHRydWUgfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBiaW5kOnZhbHVlPXt0ZXJtfSAvPlxuICAgICAgPC9mb3JtPlxuICAgIHsvaWZ9XG4gIDwvZGl2PlxuICB7I2lmIGlzT3BlbiAmJiBzaG93X2Ryb3Bkb3dufVxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICB7I2lmIGxvYWRpbmcgJiYgIWZpbHRlcmVkQ29udGFjdHMubGVuZ3RofVxuICAgICAgICA8cCBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIj5Mb2FkaW5nLi4uPC9wPlxuICAgICAgezplbHNlIGlmIGZpbHRlcmVkQ29udGFjdHMubGVuZ3RofVxuICAgICAgICB7I2VhY2ggZmlsdGVyZWRDb250YWN0cyBhcyBjb250YWN0LCBpfVxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiXG4gICAgICAgICAgICBjbGFzczphY3RpdmU9e2N1cnJlbnRDb250YWN0SW5kZXggPT09IGl9XG4gICAgICAgICAgICBjbGFzczpzZWxlY3RlZD17aXNTZWxlY3RlZChjb250YWN0LmVtYWlsKX1cbiAgICAgICAgICAgIG9uOm1vdXNlZG93bj17KCkgPT4gc2VsZWN0Q29udGFjdChjb250YWN0KX1cbiAgICAgICAgICAgIG9uOm1vdXNlZW50ZXI9eygpID0+IHNldEFjdGl2ZUNvbnRhY3QoaSl9PlxuICAgICAgICAgICAgeyNpZiBjb250YWN0Lm5hbWV9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1pdGVtX19uYW1lXCI+e2NvbnRhY3QubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1fX2VtYWlsXCI+e2NvbnRhY3QuZW1haWx9PC9kaXY+XG4gICAgICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1pdGVtX19uYW1lXCI+e2NvbnRhY3QuZW1haWx9PC9kaXY+XG4gICAgICAgICAgICB7L2lmfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB7L2VhY2h9XG4gICAgICB7L2lmfVxuICAgIDwvZGl2PlxuICB7L2lmfVxuPC9kaXY+XG4iLCJleHBvcnQgY29uc3QgRGlzYWxsb3dlZENvbnRlbnRUeXBlcyA9IFtcbiAgXCJtZXNzYWdlL2RlbGl2ZXJ5LXN0YXR1c1wiLFxuICBcIm1lc3NhZ2UvcmZjODIyXCIsXG5dO1xuXG5leHBvcnQgY29uc3QgSW5saW5lSW1hZ2VUeXBlcyA9IFtcbiAgXCJpbWFnZS9wbmdcIixcbiAgXCJpbWFnZS9hcG5nXCIsXG4gIFwiaW1hZ2UvYXZpZlwiLFxuICBcImltYWdlL2dpZlwiLFxuICBcImltYWdlL2pwZWdcIixcbiAgXCJpbWFnZS9zdmcreG1sXCIsXG5dO1xuIiwiaW1wb3J0IHR5cGUgeyBGaWxlIH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG5pbXBvcnQgeyBEaXNhbGxvd2VkQ29udGVudFR5cGVzIH0gZnJvbSBcIkBjb21tb25zL2NvbnN0YW50cy9hdHRhY2htZW50LWNvbnRlbnQtdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGlzRmlsZUFuQXR0YWNobWVudCA9IChmaWxlOiBGaWxlKTogYm9vbGVhbiA9PlxuICBmaWxlLmNvbnRlbnRfZGlzcG9zaXRpb24gPT09IFwiYXR0YWNobWVudFwiICYmXG4gICEhZmlsZS5maWxlbmFtZSAmJlxuICAhRGlzYWxsb3dlZENvbnRlbnRUeXBlcy5pbmNsdWRlcyhmaWxlLmNvbnRlbnRfdHlwZSk7XG4iLCJpbXBvcnQgeyBub29wLCBzYWZlX25vdF9lcXVhbCwgc3Vic2NyaWJlLCBydW5fYWxsLCBpc19mdW5jdGlvbiB9IGZyb20gJy4uL2ludGVybmFsL2luZGV4Lm1qcyc7XG5leHBvcnQgeyBnZXRfc3RvcmVfdmFsdWUgYXMgZ2V0IH0gZnJvbSAnLi4vaW50ZXJuYWwvaW5kZXgubWpzJztcblxuY29uc3Qgc3Vic2NyaWJlcl9xdWV1ZSA9IFtdO1xuLyoqXG4gKiBDcmVhdGVzIGEgYFJlYWRhYmxlYCBzdG9yZSB0aGF0IGFsbG93cyByZWFkaW5nIGJ5IHN1YnNjcmlwdGlvbi5cbiAqIEBwYXJhbSB2YWx1ZSBpbml0aWFsIHZhbHVlXG4gKiBAcGFyYW0ge1N0YXJ0U3RvcE5vdGlmaWVyfXN0YXJ0IHN0YXJ0IGFuZCBzdG9wIG5vdGlmaWNhdGlvbnMgZm9yIHN1YnNjcmlwdGlvbnNcbiAqL1xuZnVuY3Rpb24gcmVhZGFibGUodmFsdWUsIHN0YXJ0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3Vic2NyaWJlOiB3cml0YWJsZSh2YWx1ZSwgc3RhcnQpLnN1YnNjcmliZVxuICAgIH07XG59XG4vKipcbiAqIENyZWF0ZSBhIGBXcml0YWJsZWAgc3RvcmUgdGhhdCBhbGxvd3MgYm90aCB1cGRhdGluZyBhbmQgcmVhZGluZyBieSBzdWJzY3JpcHRpb24uXG4gKiBAcGFyYW0geyo9fXZhbHVlIGluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7U3RhcnRTdG9wTm90aWZpZXI9fXN0YXJ0IHN0YXJ0IGFuZCBzdG9wIG5vdGlmaWNhdGlvbnMgZm9yIHN1YnNjcmlwdGlvbnNcbiAqL1xuZnVuY3Rpb24gd3JpdGFibGUodmFsdWUsIHN0YXJ0ID0gbm9vcCkge1xuICAgIGxldCBzdG9wO1xuICAgIGNvbnN0IHN1YnNjcmliZXJzID0gbmV3IFNldCgpO1xuICAgIGZ1bmN0aW9uIHNldChuZXdfdmFsdWUpIHtcbiAgICAgICAgaWYgKHNhZmVfbm90X2VxdWFsKHZhbHVlLCBuZXdfdmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ld192YWx1ZTtcbiAgICAgICAgICAgIGlmIChzdG9wKSB7IC8vIHN0b3JlIGlzIHJlYWR5XG4gICAgICAgICAgICAgICAgY29uc3QgcnVuX3F1ZXVlID0gIXN1YnNjcmliZXJfcXVldWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc3Vic2NyaWJlciBvZiBzdWJzY3JpYmVycykge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyWzFdKCk7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWUucHVzaChzdWJzY3JpYmVyLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChydW5fcXVldWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyX3F1ZXVlW2ldWzBdKHN1YnNjcmliZXJfcXVldWVbaSArIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZShmbikge1xuICAgICAgICBzZXQoZm4odmFsdWUpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKHJ1biwgaW52YWxpZGF0ZSA9IG5vb3ApIHtcbiAgICAgICAgY29uc3Qgc3Vic2NyaWJlciA9IFtydW4sIGludmFsaWRhdGVdO1xuICAgICAgICBzdWJzY3JpYmVycy5hZGQoc3Vic2NyaWJlcik7XG4gICAgICAgIGlmIChzdWJzY3JpYmVycy5zaXplID09PSAxKSB7XG4gICAgICAgICAgICBzdG9wID0gc3RhcnQoc2V0KSB8fCBub29wO1xuICAgICAgICB9XG4gICAgICAgIHJ1bih2YWx1ZSk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBzdWJzY3JpYmVycy5kZWxldGUoc3Vic2NyaWJlcik7XG4gICAgICAgICAgICBpZiAoc3Vic2NyaWJlcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHN0b3AoKTtcbiAgICAgICAgICAgICAgICBzdG9wID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgc2V0LCB1cGRhdGUsIHN1YnNjcmliZSB9O1xufVxuZnVuY3Rpb24gZGVyaXZlZChzdG9yZXMsIGZuLCBpbml0aWFsX3ZhbHVlKSB7XG4gICAgY29uc3Qgc2luZ2xlID0gIUFycmF5LmlzQXJyYXkoc3RvcmVzKTtcbiAgICBjb25zdCBzdG9yZXNfYXJyYXkgPSBzaW5nbGVcbiAgICAgICAgPyBbc3RvcmVzXVxuICAgICAgICA6IHN0b3JlcztcbiAgICBjb25zdCBhdXRvID0gZm4ubGVuZ3RoIDwgMjtcbiAgICByZXR1cm4gcmVhZGFibGUoaW5pdGlhbF92YWx1ZSwgKHNldCkgPT4ge1xuICAgICAgICBsZXQgaW5pdGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuICAgICAgICBsZXQgcGVuZGluZyA9IDA7XG4gICAgICAgIGxldCBjbGVhbnVwID0gbm9vcDtcbiAgICAgICAgY29uc3Qgc3luYyA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChwZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm4oc2luZ2xlID8gdmFsdWVzWzBdIDogdmFsdWVzLCBzZXQpO1xuICAgICAgICAgICAgaWYgKGF1dG8pIHtcbiAgICAgICAgICAgICAgICBzZXQocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsZWFudXAgPSBpc19mdW5jdGlvbihyZXN1bHQpID8gcmVzdWx0IDogbm9vcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdW5zdWJzY3JpYmVycyA9IHN0b3Jlc19hcnJheS5tYXAoKHN0b3JlLCBpKSA9PiBzdWJzY3JpYmUoc3RvcmUsICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdmFsdWVzW2ldID0gdmFsdWU7XG4gICAgICAgICAgICBwZW5kaW5nICY9IH4oMSA8PCBpKTtcbiAgICAgICAgICAgIGlmIChpbml0ZWQpIHtcbiAgICAgICAgICAgICAgICBzeW5jKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIHBlbmRpbmcgfD0gKDEgPDwgaSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgaW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgc3luYygpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgICAgIHJ1bl9hbGwodW5zdWJzY3JpYmVycyk7XG4gICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IGRlcml2ZWQsIHJlYWRhYmxlLCB3cml0YWJsZSB9O1xuIiwiaW1wb3J0IHsgV3JpdGFibGUsIHdyaXRhYmxlIH0gZnJvbSBcInN2ZWx0ZS9zdG9yZVwiO1xuaW1wb3J0IHR5cGUgeyBNYW5pZmVzdCB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuXG50eXBlIEVycm9yU3RvcmUgPSBSZWNvcmQ8c3RyaW5nLCBNYW5pZmVzdFtcImVycm9yXCJdPjtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpOiBXcml0YWJsZTxFcnJvclN0b3JlPiB7XG4gIHJldHVybiB3cml0YWJsZSh7fSk7XG59XG5cbmV4cG9ydCBjb25zdCBFcnJvclN0b3JlID0gaW5pdGlhbGl6ZSgpO1xuIiwiaW1wb3J0IHsgRXJyb3JTdG9yZSB9IGZyb20gXCIuLi9zdG9yZS9lcnJvclwiO1xuaW1wb3J0IHR5cGUgeyBNYW5pZmVzdCB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2U8VCA9IHVua25vd24+KFxuICByZXNwb25zZTogUmVzcG9uc2UsXG4pOiBQcm9taXNlPFQ+IHtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIGNvbnN0IHBhc3NlZEVycm9yID0gYXdhaXQgcmVzcG9uc2UuanNvbigpLnRoZW4oXG4gICAgICAoanNvbjoge1xuICAgICAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgICAgcmVzcG9uc2U/OiB7XG4gICAgICAgICAgZXJyb3I/OiBzdHJpbmc7XG4gICAgICAgIH07XG4gICAgICB9KSA9PiBqc29uLFxuICAgICk7XG5cbiAgICBjb25zdCBtZXNzYWdlID0gcGFzc2VkRXJyb3I/LnJlc3BvbnNlPy5lcnJvciB8fCBwYXNzZWRFcnJvcj8ubWVzc2FnZTtcblxuICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIGVycm9yLm5hbWUgPSBwYXNzZWRFcnJvci5uYW1lO1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7IG1lc3NhZ2U6IGVycm9yLCBzdGF0dXNDb2RlOiByZXNwb25zZS5zdGF0dXMgfSk7XG4gIH1cbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn1cblxudHlwZSBIVFRQTWV0aG9kID0gXCJQT1NUXCIgfCBcIkdFVFwiIHwgXCJQVVRcIiB8IFwiUEFUQ0hcIiB8IFwiT1BUSU9OU1wiIHwgdW5kZWZpbmVkO1xuXG50eXBlIEZldGNoT3B0aW9ucyA9IHtcbiAgYm9keT86IHVua25vd247XG4gIG1ldGhvZD86IEhUVFBNZXRob2Q7XG4gIGNvbXBvbmVudF9pZD86IHN0cmluZztcbiAgYWNjZXNzX3Rva2VuPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZldGNoQ29uZmlnKFxuICBvcHRzOiBGZXRjaE9wdGlvbnMgPSB7IGNvbXBvbmVudF9pZDogXCJcIiB9LFxuKTogUmVxdWVzdEluaXQge1xuICByZXR1cm4ge1xuICAgIG1ldGhvZDogb3B0cy5tZXRob2QgfHwgXCJHRVRcIiwgLy8gR0VUIGlzIGRlZmF1bHQgbWV0aG9kXG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgXCJYLUNvbXBvbmVudC1JZFwiOiBvcHRzLmNvbXBvbmVudF9pZCB8fCBcIlwiLCAvLyBDb21wb25lbnQgSUQgaXMgcGFzc2VkIGFzIGhlYWRlclxuICAgICAgXCJYLUFjY2Vzcy1Ub2tlblwiOiBvcHRzLmFjY2Vzc190b2tlbiB8fCBcIlwiLCAvLyBBY2Nlc3MgVG9rZW4gaXMgcGFzc2VkIGFzIGhlYWRlclxuICAgIH0sXG4gICAgYm9keTogb3B0cy5ib2R5ID8gSlNPTi5zdHJpbmdpZnkob3B0cy5ib2R5KSA6IHVuZGVmaW5lZCxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUVycm9yKGlkOiBzdHJpbmcsIGVycm9yOiBNYW5pZmVzdFtcImVycm9yXCJdKTogbmV2ZXIge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgRXJyb3JTdG9yZS51cGRhdGUoKGVycm9yTWFwKSA9PiAoeyAuLi5lcnJvck1hcCwgW2lkXTogZXJyb3IgfSkpO1xuICB0aHJvdyBlcnJvcjtcbn1cblxuY29uc3QgUkVHSU9OX01BUFBJTkc6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIFwiMDAxXCI6IFwiXCIsIC8vIFVTXG4gIFwiMDAyXCI6IFwiaXJlbGFuZC1cIiwgLy8gRVVcbiAgXCIwMDNcIjogXCJjYW5hZGEtXCIsIC8vIENhbmFkYVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1pZGRsZXdhcmVBcGlVcmwoaWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCByZWdpb24gPSBcIlwiO1xuICBpZiAoaWQuc3Vic3RyaW5nKDMsIDQpID09PSBcIi1cIikge1xuICAgIGNvbnN0IGNvZGUgPSBpZC5zdWJzdHJpbmcoMCwgMyk7XG4gICAgaWYgKHR5cGVvZiBSRUdJT05fTUFQUElOR1tjb2RlXSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmVnaW9uID0gUkVHSU9OX01BUFBJTkdbY29kZV07XG4gICAgfVxuICB9XG4gIGNvbnN0IEFQSV9HQVRFV0FZID0gYGh0dHBzOi8vJHtyZWdpb259JHtwcm9jZXNzLmVudi5BUElfR0FURVdBWX1gO1xuICByZXR1cm4gQVBJX0dBVEVXQVk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWxlbmNlKGVycm9yOiBFcnJvcikge31cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUXVlcnlQYXJhbXMocGFyYW1zOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KTogc3RyaW5nIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHBhcmFtcylcbiAgICAucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgaWYgKHBhcmFtc1trZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYWNjLmFwcGVuZChrZXksIHBhcmFtc1trZXldKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgbmV3IFVSTFNlYXJjaFBhcmFtcygpKVxuICAgIC50b1N0cmluZygpO1xufVxuIiwiaW1wb3J0IHtcbiAgZ2V0RmV0Y2hDb25maWcsXG4gIGhhbmRsZUVycm9yLFxuICBoYW5kbGVSZXNwb25zZSxcbiAgZ2V0TWlkZGxld2FyZUFwaVVybCxcbn0gZnJvbSBcIi4uL21ldGhvZHMvYXBpXCI7XG5pbXBvcnQgdHlwZSB7XG4gIE1haWxib3hRdWVyeSxcbiAgVGhyZWFkLFxuICBDb252ZXJzYXRpb25RdWVyeSxcbiAgQ29udmVyc2F0aW9uLFxuICBNaWRkbGV3YXJlUmVzcG9uc2UsXG59IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hUaHJlYWRzID0gKFxuICBxdWVyeTogTWFpbGJveFF1ZXJ5LFxuICBsaW1pdDogbnVtYmVyLFxuICBvZmZzZXQ6IG51bWJlcixcbik6IFByb21pc2U8VGhyZWFkW10+ID0+IHtcbiAgaWYgKHF1ZXJ5LnRocmVhZF9pZHMpIHtcbiAgICAvLyAmbGltaXQ9JHtsaW1pdH0mb2Zmc2V0PSR7b2Zmc2V0fVxuICAgIGNvbnN0IHBhZ2Vfb2ZfaWRzID0gcXVlcnkudGhyZWFkX2lkcy5zbGljZShvZmZzZXQsIG9mZnNldCArIGxpbWl0KTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoXG4gICAgICBwYWdlX29mX2lkcy5tYXAoYXN5bmMgKHRocmVhZF9pZCkgPT4ge1xuICAgICAgICAvLyBOeWxhcyBBUEkgZG9lcyBub3Qgc3VwcG9ydCBmZXRjaGluZyB0aHJlYWRzIGluIGJ1bGssIHNvIG11c3QgZmV0Y2ggdGhlbSBvbmVcbiAgICAgICAgLy8gYXQgYSB0aW1lIDooXG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gYCR7Z2V0TWlkZGxld2FyZUFwaVVybChcbiAgICAgICAgICBxdWVyeS5jb21wb25lbnRfaWQsXG4gICAgICAgICl9L3RocmVhZHMvJHt0aHJlYWRfaWR9P3ZpZXc9ZXhwYW5kZWRgO1xuICAgICAgICAvLyBUT0RPOiBpZGVhbGx5IHRoaXMgd291bGRuJ3QgcmVwbGljYXRlIG11Y2ggb2YgdGhlIGNvZGUgZnJvbSBiZWxvd1xuICAgICAgICByZXR1cm4gYXdhaXQgZmV0Y2gocXVlcnlTdHJpbmcsIGdldEZldGNoQ29uZmlnKHF1ZXJ5KSlcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+XG4gICAgICAgICAgICBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8VGhyZWFkPj4ocmVzcG9uc2UpLFxuICAgICAgICAgIClcbiAgICAgICAgICAudGhlbigoanNvbikgPT4ganNvbi5yZXNwb25zZSlcbiAgICAgICAgICAvLyBUT0RPOiBSZW1vdmUgdGhpcyB1Z2x5IGhhY2sgd2hlbiB3ZSBmaXggdGhlIEFQSSBmcm9tIHJldHVybmluZyBnaG9zdCBtZXNzYWdlcyAoZS5nLiB3L28gYSBmcm9tL3RvIGZpZWxkKVxuICAgICAgICAgIC50aGVuKCh0aHJlYWQpID0+ICh7XG4gICAgICAgICAgICAuLi50aHJlYWQsXG4gICAgICAgICAgICBtZXNzYWdlczogdGhyZWFkLm1lc3NhZ2VzLmZpbHRlcihcbiAgICAgICAgICAgICAgKG1lc3NhZ2UpID0+IG1lc3NhZ2UuZnJvbS5sZW5ndGggIT09IDAgfHwgbWVzc2FnZS50by5sZW5ndGggIT09IDAsXG4gICAgICAgICAgICApLFxuICAgICAgICAgIH0pKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbiAgbGV0IHF1ZXJ5U3RyaW5nID0gYCR7Z2V0TWlkZGxld2FyZUFwaVVybChcbiAgICBxdWVyeS5jb21wb25lbnRfaWQsXG4gICl9L3RocmVhZHM/dmlldz1leHBhbmRlZCZub3RfaW49dHJhc2gmbGltaXQ9JHtsaW1pdH0mb2Zmc2V0PSR7b2Zmc2V0fWA7XG4gIGlmIChxdWVyeS5xdWVyeSkge1xuICAgIE9iamVjdC5lbnRyaWVzKHF1ZXJ5LnF1ZXJ5KS5mb3JFYWNoKFxuICAgICAgKHBhcmFtKSA9PiAocXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZy5jb25jYXQoYCYke3BhcmFtWzBdfT0ke3BhcmFtWzFdfWApKSxcbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgZmV0Y2gocXVlcnlTdHJpbmcsIGdldEZldGNoQ29uZmlnKHF1ZXJ5KSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT5cbiAgICAgICAgaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPFRocmVhZFtdPj4ocmVzcG9uc2UpLFxuICAgICAgKVxuICAgICAgLnRoZW4oKGpzb24pID0+IGpzb24ucmVzcG9uc2UpXG4gICAgICAvLyBUT0RPOiBSZW1vdmUgdGhpcyB1Z2x5IGhhY2sgd2hlbiB3ZSBmaXggdGhlIEFQSSBmcm9tIHJldHVybmluZyBnaG9zdCBtZXNzYWdlcyAoZS5nLiB3L28gYSBmcm9tL3RvIGZpZWxkKVxuICAgICAgLnRoZW4oKHRocmVhZHMpID0+XG4gICAgICAgIHRocmVhZHMubWFwKCh0aHJlYWQpID0+ICh7XG4gICAgICAgICAgLi4udGhyZWFkLFxuICAgICAgICAgIG1lc3NhZ2VzOiB0aHJlYWQubWVzc2FnZXMuZmlsdGVyKFxuICAgICAgICAgICAgKG1lc3NhZ2UpID0+IG1lc3NhZ2UuZnJvbS5sZW5ndGggIT09IDAgfHwgbWVzc2FnZS50by5sZW5ndGggIT09IDAsXG4gICAgICAgICAgKSxcbiAgICAgICAgfSkpLFxuICAgICAgKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpXG4gICk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hUaHJlYWRDb3VudChxdWVyeTogTWFpbGJveFF1ZXJ5KTogUHJvbWlzZTxudW1iZXI+IHtcbiAgbGV0IHF1ZXJ5U3RyaW5nID0gYCR7Z2V0TWlkZGxld2FyZUFwaVVybChcbiAgICBxdWVyeS5jb21wb25lbnRfaWQsXG4gICl9L3RocmVhZHM/dmlldz1leHBhbmRlZCZub3RfaW49dHJhc2gmdmlldz1jb3VudGA7XG4gIGlmIChxdWVyeS5xdWVyeSkge1xuICAgIE9iamVjdC5lbnRyaWVzKHF1ZXJ5LnF1ZXJ5KS5mb3JFYWNoKFxuICAgICAgKHBhcmFtKSA9PiAocXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZy5jb25jYXQoYCYke3BhcmFtWzBdfT0ke3BhcmFtWzFdfWApKSxcbiAgICApO1xuICB9XG5cbiAgaWYgKHF1ZXJ5LmtleXdvcmRUb1NlYXJjaCkge1xuICAgIHF1ZXJ5U3RyaW5nICs9IGAmcT0ke3F1ZXJ5LmtleXdvcmRUb1NlYXJjaH1gO1xuICB9XG5cbiAgcmV0dXJuIGZldGNoKHF1ZXJ5U3RyaW5nLCBnZXRGZXRjaENvbmZpZyhxdWVyeSkpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8YW55Pj4ocmVzcG9uc2UpKVxuICAgIC50aGVuKChqc29uKSA9PiBqc29uLnJlc3BvbnNlLmNvdW50KTtcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoU2VhcmNoUmVzdWx0VGhyZWFkcyA9IChcbiAgcXVlcnk6IE1haWxib3hRdWVyeSxcbik6IFByb21pc2U8VGhyZWFkW10+ID0+IHtcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKFxuICAgIHF1ZXJ5LmNvbXBvbmVudF9pZCxcbiAgKX0vdGhyZWFkcy9zZWFyY2g/cT0ke3F1ZXJ5LmtleXdvcmRUb1NlYXJjaH0mdmlldz1leHBhbmRlZCZsaW1pdD0ke1xuICAgIHF1ZXJ5LnF1ZXJ5LmxpbWl0XG4gIH0mb2Zmc2V0PSR7cXVlcnkucXVlcnkub2Zmc2V0fWA7XG5cbiAgcmV0dXJuIGZldGNoKHF1ZXJ5U3RyaW5nLCBnZXRGZXRjaENvbmZpZyhxdWVyeSkpXG4gICAgLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PlxuICAgICAgaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPFRocmVhZFtdPj4ocmVzcG9uc2UpLFxuICAgIClcbiAgICAudGhlbigoanNvbikgPT4ganNvbi5yZXNwb25zZSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihxdWVyeS5jb21wb25lbnRfaWQsIGVycm9yKSk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hUaHJlYWQgPSBhc3luYyAoXG4gIHF1ZXJ5OiBDb252ZXJzYXRpb25RdWVyeSxcbik6IFByb21pc2U8Q29udmVyc2F0aW9uPiA9PiB7XG4gIGNvbnN0IHRocmVhZCA9IGF3YWl0IGZldGNoKFxuICAgIGAke2dldE1pZGRsZXdhcmVBcGlVcmwocXVlcnkuY29tcG9uZW50X2lkKX0vdGhyZWFkcy8ke1xuICAgICAgcXVlcnkudGhyZWFkX2lkXG4gICAgfT92aWV3PWV4cGFuZGVkYCxcbiAgICBnZXRGZXRjaENvbmZpZyh7XG4gICAgICBjb21wb25lbnRfaWQ6IHF1ZXJ5LmNvbXBvbmVudF9pZCxcbiAgICAgIGFjY2Vzc190b2tlbjogcXVlcnkuYWNjZXNzX3Rva2VuLFxuICAgIH0pLFxuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PlxuICAgICAgaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPENvbnZlcnNhdGlvbj4+KHJlc3BvbnNlKSxcbiAgICApXG4gICAgLnRoZW4oKGpzb24pID0+IGpzb24ucmVzcG9uc2UpXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xuXG4gIHJldHVybiB0aHJlYWQ7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlVGhyZWFkID0gKFxuICBxdWVyeTogQ29udmVyc2F0aW9uUXVlcnksXG4gIHVwZGF0ZWRUaHJlYWQ6IENvbnZlcnNhdGlvbixcbik6IFByb21pc2U8Q29udmVyc2F0aW9uPiA9PiB7XG4gIC8vIGFjY2VwdHMgdW5yZWFkLCBzdGFycmVkLCBmb2xkZXJfaWQgKyBsYWJlbF9pZHMuIGRldmVsb3Blci5ueWxhcy5jb20vZG9jcy9hcGkvI3B1dC90aHJlYWRzL2lkXG4gIHJldHVybiBmZXRjaChcbiAgICBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKHF1ZXJ5LmNvbXBvbmVudF9pZCl9L3RocmVhZHMvJHt1cGRhdGVkVGhyZWFkLmlkfWAsXG4gICAgZ2V0RmV0Y2hDb25maWcoe1xuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgY29tcG9uZW50X2lkOiBxdWVyeS5jb21wb25lbnRfaWQsXG4gICAgICBhY2Nlc3NfdG9rZW46IHF1ZXJ5LmFjY2Vzc190b2tlbixcbiAgICAgIGJvZHk6IHtcbiAgICAgICAgdW5yZWFkOiB1cGRhdGVkVGhyZWFkLnVucmVhZCxcbiAgICAgICAgc3RhcnJlZDogdXBkYXRlZFRocmVhZC5zdGFycmVkLFxuICAgICAgICBmb2xkZXJfaWQ6IHVwZGF0ZWRUaHJlYWQuZm9sZGVyX2lkLFxuICAgICAgICBsYWJlbF9pZHM6IHVwZGF0ZWRUaHJlYWQubGFiZWxfaWRzLFxuICAgICAgfSxcbiAgICB9KSxcbiAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT5cbiAgICAgIGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxDb252ZXJzYXRpb24+PihyZXNwb25zZSksXG4gICAgKVxuICAgIC50aGVuKChqc29uKSA9PiBqc29uLnJlc3BvbnNlKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn07XG4iLCJpbXBvcnQge1xuICBnZXRGZXRjaENvbmZpZyxcbiAgaGFuZGxlRXJyb3IsXG4gIGhhbmRsZVJlc3BvbnNlLFxuICBnZXRNaWRkbGV3YXJlQXBpVXJsLFxufSBmcm9tIFwiLi4vbWV0aG9kcy9hcGlcIjtcbmltcG9ydCB0eXBlIHsgTWFuaWZlc3QsIE1pZGRsZXdhcmVSZXNwb25zZSB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hNYW5pZmVzdCA9IGFzeW5jIChcbiAgaWQ6IHN0cmluZyxcbiAgYWNjZXNzX3Rva2VuPzogc3RyaW5nLFxuKTogUHJvbWlzZTxNYW5pZmVzdD4gPT4ge1xuICByZXR1cm4gYXdhaXQgZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChpZCl9L21hbmlmZXN0YCxcbiAgICBnZXRGZXRjaENvbmZpZyh7XG4gICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICBjb21wb25lbnRfaWQ6IGlkLFxuICAgIH0pLFxuICApXG4gICAgLnRoZW48TWlkZGxld2FyZVJlc3BvbnNlPihoYW5kbGVSZXNwb25zZSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmNvbXBvbmVudC50aGVtaW5nKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKGlkLCBlcnJvcikpO1xufTtcblxuLy8gQWxsb3dzIDxueWxhcy1zY2hlZHVsZS1lZGl0b3I+IHRvIG1vZGlmeSBpdHMgb3duIHByb3BlcnRpZXNcblxuZXhwb3J0IGNvbnN0IHNhdmVNYW5pZmVzdCA9IGFzeW5jIChcbiAgaWQ6IHN0cmluZyxcbiAgbWFuaWZlc3Q6IE1hbmlmZXN0LFxuICBhY2Nlc3NfdG9rZW4/OiBzdHJpbmcsXG4pOiBQcm9taXNlPE1hbmlmZXN0PiA9PiB7XG4gIHJldHVybiBmZXRjaChcbiAgICBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKGlkKX0vY29tcG9uZW50YCxcbiAgICBnZXRGZXRjaENvbmZpZyh7XG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICBjb21wb25lbnRfaWQ6IGlkLFxuICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgYm9keTogeyBzZXR0aW5nczogbWFuaWZlc3QgfSxcbiAgICB9KSxcbiAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPE1hbmlmZXN0Pj4ocmVzcG9uc2UpKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KTtcbn07XG4iLCJpbXBvcnQgeyBNZXNzYWdlU3RvcmUgfSBmcm9tIFwiLi4vc3RvcmUvbWVzc2FnZXNcIjtcbmltcG9ydCB7XG4gIGdldEZldGNoQ29uZmlnLFxuICBoYW5kbGVFcnJvcixcbiAgaGFuZGxlUmVzcG9uc2UsXG4gIGdldE1pZGRsZXdhcmVBcGlVcmwsXG59IGZyb20gXCIuLi9tZXRob2RzL2FwaVwiO1xuaW1wb3J0IHR5cGUge1xuICBTaW5ndWxhckVtYWlsLFxuICBDb21tb25RdWVyeSxcbiAgTWVzc2FnZXNRdWVyeSxcbiAgRmlsZSBhcyBOeWxhc0ZpbGUsXG4gIE1lc3NhZ2UgYXMgTnlsYXNNZXNzYWdlLFxuICBNaWRkbGV3YXJlUmVzcG9uc2UsXG59IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuaW1wb3J0IHR5cGUgeyBNZXNzYWdlIH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL0NvbXBvc2VyXCI7XG5cbmV4cG9ydCBjb25zdCBzZW5kTWVzc2FnZSA9IGFzeW5jIChcbiAgY29tcG9uZW50X2lkOiBzdHJpbmcsXG4gIG1zZzogTWVzc2FnZSxcbiAgYWNjZXNzX3Rva2VuPzogc3RyaW5nLFxuKTogUHJvbWlzZTxOeWxhc01lc3NhZ2U+ID0+IHtcbiAgcmV0dXJuIGF3YWl0IGZldGNoKFxuICAgIGAke2dldE1pZGRsZXdhcmVBcGlVcmwoY29tcG9uZW50X2lkKX0vc2VuZGAsXG4gICAgZ2V0RmV0Y2hDb25maWcoeyBtZXRob2Q6IFwiUE9TVFwiLCBjb21wb25lbnRfaWQsIGFjY2Vzc190b2tlbiwgYm9keTogbXNnIH0pLFxuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PlxuICAgICAgaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPE55bGFzTWVzc2FnZT4+KHJlc3BvbnNlKSxcbiAgICApXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IoY29tcG9uZW50X2lkLCBlcnJvcikpO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lc3NhZ2UoXG4gIGNvbXBvbmVudF9pZDogc3RyaW5nLFxuICBtZXNzYWdlOiBOeWxhc01lc3NhZ2UsXG4gIGFjY2Vzc190b2tlbj86IHN0cmluZyxcbik6IFByb21pc2U8TnlsYXNNZXNzYWdlPiB7XG4gIGNvbnN0IHVybCA9IGAke2dldE1pZGRsZXdhcmVBcGlVcmwoY29tcG9uZW50X2lkKX0vbWVzc2FnZXMvJHttZXNzYWdlLmlkfWA7XG4gIGNvbnN0IGZldGNoQ29uZmlnID0gZ2V0RmV0Y2hDb25maWcoe1xuICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICBjb21wb25lbnRfaWQsXG4gICAgYWNjZXNzX3Rva2VuLFxuICAgIGJvZHk6IHsgZm9sZGVyX2lkOiBtZXNzYWdlLmZvbGRlcl9pZCwgbGFiZWxfaWRzOiBtZXNzYWdlLmxhYmVsX2lkcyB9LFxuICB9KTtcbiAgcmV0dXJuIGF3YWl0IGZldGNoKHVybCwgZmV0Y2hDb25maWcpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PlxuICAgICAgaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPE55bGFzTWVzc2FnZT4+KHJlc3BvbnNlKSxcbiAgICApXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IoY29tcG9uZW50X2lkLCBlcnJvcikpO1xufVxuXG5leHBvcnQgY29uc3QgdXBsb2FkRmlsZSA9IGFzeW5jIChcbiAgY29tcG9uZW50X2lkOiBzdHJpbmcsXG4gIGZpbGU6IEZpbGUsXG4gIGFjY2Vzc190b2tlbj86IHN0cmluZyxcbik6IFByb21pc2U8TnlsYXNGaWxlPiA9PiB7XG4gIGNvbnN0IGZldGNoQ29uZmlnOiBSZXF1ZXN0SW5pdCA9IGdldEZldGNoQ29uZmlnKHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGNvbXBvbmVudF9pZCxcbiAgICBhY2Nlc3NfdG9rZW4sXG4gIH0pO1xuICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XG4gIGZvcm0uYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcbiAgaWYgKFxuICAgIHR5cGVvZiBmZXRjaENvbmZpZy5oZWFkZXJzICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgXCJDb250ZW50LVR5cGVcIiBpbiBmZXRjaENvbmZpZy5oZWFkZXJzXG4gICkge1xuICAgIGRlbGV0ZSBmZXRjaENvbmZpZy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdO1xuICB9XG4gIGZldGNoQ29uZmlnLmJvZHkgPSBmb3JtO1xuICByZXR1cm4gYXdhaXQgZmV0Y2goYCR7Z2V0TWlkZGxld2FyZUFwaVVybChjb21wb25lbnRfaWQpfS9maWxlc2AsIGZldGNoQ29uZmlnKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPE55bGFzRmlsZT4+KHJlc3BvbnNlKSlcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoanNvbi5yZXNwb25zZSkgPyBqc29uLnJlc3BvbnNlWzBdIDoganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaChoYW5kbGVFcnJvci5iaW5kKDAsIGNvbXBvbmVudF9pZCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoTWVzc2FnZXMgPSBhc3luYyAoXG4gIHF1ZXJ5OiBNZXNzYWdlc1F1ZXJ5LFxuICBvZmZzZXQ6IG51bWJlcixcbiAgbGltaXQ6IG51bWJlcixcbik6IFByb21pc2U8TnlsYXNNZXNzYWdlW10+ID0+IHtcbiAgbGV0IHF1ZXJ5U3RyaW5nID0gYCR7Z2V0TWlkZGxld2FyZUFwaVVybChcbiAgICBxdWVyeS5jb21wb25lbnRfaWQsXG4gICl9L21lc3NhZ2VzP29mZnNldD0ke29mZnNldH0mbGltaXQ9JHtsaW1pdH1gO1xuICBpZiAocXVlcnkucmVjZWl2ZWRfYmVmb3JlKSB7XG4gICAgcXVlcnlTdHJpbmcgPSBgJHtxdWVyeVN0cmluZ30mcmVjZWl2ZWRfYmVmb3JlPSR7cXVlcnkucmVjZWl2ZWRfYmVmb3JlfWA7XG4gIH1cbiAgaWYgKHF1ZXJ5LnJlY2VpdmVkX2FmdGVyKSB7XG4gICAgcXVlcnlTdHJpbmcgPSBgJHtxdWVyeVN0cmluZ30mcmVjZWl2ZWRfYWZ0ZXI9JHtxdWVyeS5yZWNlaXZlZF9hZnRlcn1gO1xuICB9XG4gIHJldHVybiBhd2FpdCBmZXRjaChxdWVyeVN0cmluZywgZ2V0RmV0Y2hDb25maWcocXVlcnkpKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT5cbiAgICAgIGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxOeWxhc01lc3NhZ2VbXT4+KHJlc3BvbnNlKSxcbiAgICApXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIE1lc3NhZ2VTdG9yZS5hZGRNZXNzYWdlcyh7XG4gICAgICAgIHF1ZXJ5S2V5OiBKU09OLnN0cmluZ2lmeShxdWVyeSksXG4gICAgICAgIGRhdGE6IGpzb24ucmVzcG9uc2UsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoTWVzc2FnZSA9IGFzeW5jIChcbiAgcXVlcnk6IENvbW1vblF1ZXJ5LFxuICBtZXNzYWdlSUQ6IHN0cmluZyxcbik6IFByb21pc2U8TnlsYXNNZXNzYWdlPiA9PiB7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gYCR7Z2V0TWlkZGxld2FyZUFwaVVybChcbiAgICBxdWVyeS5jb21wb25lbnRfaWQsXG4gICl9L21lc3NhZ2VzLyR7bWVzc2FnZUlEfWA7XG4gIHJldHVybiBhd2FpdCBmZXRjaChxdWVyeVN0cmluZywgZ2V0RmV0Y2hDb25maWcocXVlcnkpKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT5cbiAgICAgIGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxOeWxhc01lc3NhZ2U+PihyZXNwb25zZSksXG4gICAgKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn07XG5cbi8vIEZvciBjYXNlcyB3aGVuIHNvbWVvbmUgd2FudHMgdG8gc2hvdyBqdXN0IGEgc2luZ2xlIGVtYWlsIG1lc3NhZ2UsIHJhdGhlciB0aGFuIHRoZSBmdWxsIHRocmVhZCBhbmQgdy9vIHBhc3NpbmcgYSB0aHJlYWQgaWRcbmV4cG9ydCBjb25zdCBmZXRjaEVtYWlsID0gYXN5bmMgKFxuICBxdWVyeTogU2luZ3VsYXJFbWFpbCxcbik6IFByb21pc2U8TnlsYXNNZXNzYWdlPiA9PiB7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gYCR7Z2V0TWlkZGxld2FyZUFwaVVybChxdWVyeS5jb21wb25lbnRfaWQpfS9tZXNzYWdlcy8ke1xuICAgIHF1ZXJ5Lm1lc3NhZ2VfaWRcbiAgfWA7XG4gIHJldHVybiBhd2FpdCBmZXRjaChxdWVyeVN0cmluZywgZ2V0RmV0Y2hDb25maWcocXVlcnkpKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT5cbiAgICAgIGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxOeWxhc01lc3NhZ2U+PihyZXNwb25zZSksXG4gICAgKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzYXZlRHJhZnQgPSBhc3luYyAoXG4gIGNvbXBvbmVudF9pZDogc3RyaW5nLFxuICBtc2c6IE1lc3NhZ2UsXG4gIGFjY2Vzc190b2tlbj86IHN0cmluZyxcbik6IFByb21pc2U8TnlsYXNNZXNzYWdlPiA9PiB7XG4gIHJldHVybiBhd2FpdCBmZXRjaChcbiAgICBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKGNvbXBvbmVudF9pZCl9L2RyYWZ0c2AsXG4gICAgZ2V0RmV0Y2hDb25maWcoeyBtZXRob2Q6IFwiUE9TVFwiLCBjb21wb25lbnRfaWQsIGFjY2Vzc190b2tlbiwgYm9keTogbXNnIH0pLFxuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PlxuICAgICAgaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPE55bGFzTWVzc2FnZT4+KHJlc3BvbnNlKSxcbiAgICApXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IoY29tcG9uZW50X2lkLCBlcnJvcikpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZURyYWZ0ID0gYXN5bmMgKFxuICBjb21wb25lbnRfaWQ6IHN0cmluZyxcbiAgbXNnOiBNZXNzYWdlLFxuICBhY2Nlc3NfdG9rZW4/OiBzdHJpbmcsXG4pOiBQcm9taXNlPE55bGFzTWVzc2FnZT4gPT4ge1xuICByZXR1cm4gYXdhaXQgZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChjb21wb25lbnRfaWQpfS9kcmFmdHMvJHttc2cuaWR9YCxcbiAgICBnZXRGZXRjaENvbmZpZyh7IG1ldGhvZDogXCJQVVRcIiwgY29tcG9uZW50X2lkLCBhY2Nlc3NfdG9rZW4sIGJvZHk6IG1zZyB9KSxcbiAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT5cbiAgICAgIGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxOeWxhc01lc3NhZ2U+PihyZXNwb25zZSksXG4gICAgKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKGNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn07XG4iLCJpbXBvcnQge1xuICBnZXRGZXRjaENvbmZpZyxcbiAgaGFuZGxlRXJyb3IsXG4gIGhhbmRsZVJlc3BvbnNlLFxuICBnZXRNaWRkbGV3YXJlQXBpVXJsLFxufSBmcm9tIFwiLi4vbWV0aG9kcy9hcGlcIjtcbmltcG9ydCB0eXBlIHtcbiAgQWNjb3VudFF1ZXJ5LFxuICBBY2NvdW50LFxuICBNaWRkbGV3YXJlUmVzcG9uc2UsXG59IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hBY2NvdW50ID0gYXN5bmMgKHF1ZXJ5OiBBY2NvdW50UXVlcnkpOiBQcm9taXNlPEFjY291bnQ+ID0+IHtcbiAgY29uc3QgYWNjb3VudCA9IGF3YWl0IGZldGNoKFxuICAgIGAke2dldE1pZGRsZXdhcmVBcGlVcmwocXVlcnkuY29tcG9uZW50X2lkKX0vYWNjb3VudGAsXG4gICAgZ2V0RmV0Y2hDb25maWcocXVlcnkpLFxuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8QWNjb3VudD4+KHJlc3BvbnNlKSlcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgcmV0dXJuIGpzb24ucmVzcG9uc2U7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihxdWVyeS5jb21wb25lbnRfaWQsIGVycm9yKSk7XG5cbiAgcmV0dXJuIGFjY291bnQ7XG59O1xuIiwiaW1wb3J0IHtcbiAgZ2V0RmV0Y2hDb25maWcsXG4gIGhhbmRsZUVycm9yLFxuICBoYW5kbGVSZXNwb25zZSxcbiAgZ2V0TWlkZGxld2FyZUFwaVVybCxcbn0gZnJvbSBcIi4uL21ldGhvZHMvYXBpXCI7XG5pbXBvcnQgdHlwZSB7XG4gIENvbnNlY3V0aXZlQXZhaWxhYmlsaXR5UXVlcnksXG4gIEF2YWlsYWJpbGl0eVF1ZXJ5LFxuICBBdmFpbGFiaWxpdHlSZXNwb25zZSxcbiAgRnJlZUJ1c3lSZXNwb25zZSxcbiAgUHJlRGF0ZWRUaW1lU2xvdCxcbn0gZnJvbSBcIkBjb21tb25zL3R5cGVzL0F2YWlsYWJpbGl0eVwiO1xuaW1wb3J0IHR5cGUgeyBNaWRkbGV3YXJlUmVzcG9uc2UgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvTnlsYXNcIjtcbmltcG9ydCB0eXBlIHsgRXZlbnREZWZpbml0aW9uIH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL1NjaGVkdWxlRWRpdG9yXCI7XG5pbXBvcnQgdHlwZSB7IENvbnNlY3V0aXZlRXZlbnQgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvQm9va2luZ1wiO1xuXG4vLyBUT0RPOiBkZXByZWNhdGUgaWYgd2UgZmluZCAvY2FsZW5kYXJzL2F2YWlsYWJpbGl0eSB0byBiZSBmdWxseSBzdWZmaWNpZW50XG5leHBvcnQgY29uc3QgZmV0Y2hGcmVlQnVzeSA9IGFzeW5jIChcbiAgcXVlcnk6IEF2YWlsYWJpbGl0eVF1ZXJ5LFxuKTogUHJvbWlzZTxGcmVlQnVzeVJlc3BvbnNlW10+ID0+IHtcbiAgcmV0dXJuIGZldGNoKFxuICAgIGAke2dldE1pZGRsZXdhcmVBcGlVcmwocXVlcnkuY29tcG9uZW50X2lkKX0vY2FsZW5kYXJzL2ZyZWUtYnVzeWAsXG4gICAgZ2V0RmV0Y2hDb25maWcoe1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGNvbXBvbmVudF9pZDogcXVlcnkuY29tcG9uZW50X2lkLFxuICAgICAgYWNjZXNzX3Rva2VuOiBxdWVyeS5hY2Nlc3NfdG9rZW4sXG4gICAgICBib2R5OiBxdWVyeS5ib2R5LFxuICAgIH0pLFxuICApXG4gICAgLnRoZW4oYXN5bmMgKGFwaVJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPEZyZWVCdXN5UmVzcG9uc2VbXT4+KFxuICAgICAgICBhcGlSZXNwb25zZSxcbiAgICAgICk7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaEF2YWlsYWJpbGl0eSA9IGFzeW5jIChcbiAgcXVlcnk6IEF2YWlsYWJpbGl0eVF1ZXJ5LFxuKTogUHJvbWlzZTxBdmFpbGFiaWxpdHlSZXNwb25zZT4gPT4ge1xuICByZXR1cm4gZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChxdWVyeS5jb21wb25lbnRfaWQpfS9jYWxlbmRhcnMvYXZhaWxhYmlsaXR5YCxcbiAgICBnZXRGZXRjaENvbmZpZyh7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgY29tcG9uZW50X2lkOiBxdWVyeS5jb21wb25lbnRfaWQsXG4gICAgICBhY2Nlc3NfdG9rZW46IHF1ZXJ5LmFjY2Vzc190b2tlbixcbiAgICAgIGJvZHk6IHF1ZXJ5LmJvZHksXG4gICAgfSksXG4gIClcbiAgICAudGhlbihhc3luYyAoYXBpUmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCBoYW5kbGVSZXNwb25zZTxcbiAgICAgICAgTWlkZGxld2FyZVJlc3BvbnNlPEF2YWlsYWJpbGl0eVJlc3BvbnNlPlxuICAgICAgPihhcGlSZXNwb25zZSk7XG4gICAgICAvLyBOb3JtYWxpemUgcmVzcG9uc2UgLnN0YXJ0IGFuZCAuZW5kIHRvIC5zdGFydF90aW1lIGFuZCAuZW5kX3RpbWUgdG8gbWFrZSB1cCBmb3IgZGlzY3JlcGVuZGN5IGluIHRoZSBOeWxhcyBBUEk6IGh0dHBzOi8vZGV2ZWxvcGVyLm55bGFzLmNvbS9kb2NzL2Nvbm5lY3Rpdml0eS9jYWxlbmRhci9jYWxlbmRhci1hdmFpbGFiaWxpdHkvI2F2YWlsYWJpbGl0eS1yZXNwb25zZVxuICAgICAgLy8gQVBJIHN0b3J5OiBodHRwczovL2FwcC5zaG9ydGN1dC5jb20vbnlsYXMvc3RvcnkvNzMxOTYvXG4gICAgICBqc29uLnJlc3BvbnNlLnRpbWVfc2xvdHMgPSBqc29uLnJlc3BvbnNlLnRpbWVfc2xvdHMubWFwKChzbG90KSA9PiB7XG4gICAgICAgIHNsb3Quc3RhcnRfdGltZSA9IHNsb3Quc3RhcnQgfHwgMDtcbiAgICAgICAgc2xvdC5lbmRfdGltZSA9IHNsb3QuZW5kIHx8IDA7XG4gICAgICAgIGRlbGV0ZSBzbG90LnN0YXJ0O1xuICAgICAgICBkZWxldGUgc2xvdC5lbmQ7XG4gICAgICAgIHJldHVybiBzbG90O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaENvbnNlY3V0aXZlQXZhaWxhYmlsaXR5ID0gYXN5bmMgKFxuICBxdWVyeTogQ29uc2VjdXRpdmVBdmFpbGFiaWxpdHlRdWVyeSxcbik6IFByb21pc2U8Q29uc2VjdXRpdmVFdmVudFtdW10+ID0+IHtcbiAgcmV0dXJuIGZldGNoKFxuICAgIGAke2dldE1pZGRsZXdhcmVBcGlVcmwoXG4gICAgICBxdWVyeS5jb21wb25lbnRfaWQsXG4gICAgKX0vY2FsZW5kYXJzL2F2YWlsYWJpbGl0eS9jb25zZWN1dGl2ZWAsXG4gICAgZ2V0RmV0Y2hDb25maWcoe1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGNvbXBvbmVudF9pZDogcXVlcnkuY29tcG9uZW50X2lkLFxuICAgICAgYWNjZXNzX3Rva2VuOiBxdWVyeS5hY2Nlc3NfdG9rZW4sXG4gICAgICBib2R5OiBxdWVyeS5ib2R5LFxuICAgIH0pLFxuICApXG4gICAgLnRoZW4oYXN5bmMgKGFwaVJlc3BvbnNlKTogUHJvbWlzZTxDb25zZWN1dGl2ZUV2ZW50W11bXT4gPT4ge1xuICAgICAgY29uc3QganNvbiA9IGF3YWl0IGhhbmRsZVJlc3BvbnNlPFxuICAgICAgICBNaWRkbGV3YXJlUmVzcG9uc2U8UHJlRGF0ZWRUaW1lU2xvdFtdW10+XG4gICAgICA+KGFwaVJlc3BvbnNlKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlOiBQcmVEYXRlZFRpbWVTbG90W11bXSA9XG4gICAgICAgIGpzb24ucmVzcG9uc2U/Lm1hcCgoYmxvY2tTbG90KSA9PiB7XG4gICAgICAgICAgYmxvY2tTbG90ID0gYmxvY2tTbG90Lm1hcCgoc2xvdDogYW55KSA9PiB7XG4gICAgICAgICAgICBzbG90LnN0YXJ0X3RpbWUgPSBuZXcgRGF0ZShzbG90LnN0YXJ0X3RpbWUgKiAxMDAwKTtcbiAgICAgICAgICAgIHNsb3QuZW5kX3RpbWUgPSBuZXcgRGF0ZShzbG90LmVuZF90aW1lICogMTAwMCk7XG4gICAgICAgICAgICByZXR1cm4gc2xvdDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gYmxvY2tTbG90O1xuICAgICAgICB9KSB8fCBbXTtcbiAgICAgIGNvbnN0IGh5ZHJhdGVkUmVzcG9uc2UgPSBoeWRyYXRlU2xvdHNUb0V2ZW50cyhcbiAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgIHF1ZXJ5LmJvZHkuZXZlbnRzLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRlZHVwZWRSZXNwb25zZSA9XG4gICAgICAgIHJlbW92ZVNpbXVsdGFuZW91c0F2YWlsYWJpbGl0eU9wdGlvbnMoaHlkcmF0ZWRSZXNwb25zZSk7XG4gICAgICByZXR1cm4gZGVkdXBlZFJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xufTtcblxuLy8gRG9pbmcgdGhlIGJlc3Qgd2UgY2FuIHdpdGggd2hhdCB3ZSd2ZSBnb3Q6IC9jYWxlbmRhcnMvYXZhaWxhYmlsaXR5L2NvbnNlY3V0aXZlIGRvZXNuJ3QgcmV0dXJuIGFueSBpbmZvIG90aGVyIHRoYW4gZW1haWxzXG4vLyBhbmQgc3RhcnQvZW5kIHRpbWVzLiBUaGlzIG1lYW5zIHRoYXQgaWYgd2UgaGF2ZSB0byBldmVudHMgKEV2ZW50RGVmaW5pdGlvbnMpIHdpdGggdGhlIHNhbWUgZW1haWwgYWRkcmVzc2VzPyBXZSdyZSBzaG9vdGluZyBpbiB0aGUgZGFyayBhYm91dCB3aGljaCBpcyB3aGljaC5cbi8vIFRPRE86IGFsbG93IGZvciBhbiBpbmRpY2F0b3Igb24gdGhlIEFQSSBzaWRlXG5mdW5jdGlvbiBoeWRyYXRlU2xvdHNUb0V2ZW50cyhcbiAgYXZhaWxhYmlsaXRpZXM6IFByZURhdGVkVGltZVNsb3RbXVtdLFxuICBldmVudHM6IEV2ZW50RGVmaW5pdGlvbltdLFxuKTogQ29uc2VjdXRpdmVFdmVudFtdW10ge1xuICByZXR1cm4gYXZhaWxhYmlsaXRpZXMubWFwKChibG9jaykgPT4ge1xuICAgIHJldHVybiBibG9jay5tYXAoKHN1YmV2ZW50KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdWJldmVudCxcbiAgICAgICAgLi4uZXZlbnRzLmZpbmQoXG4gICAgICAgICAgKGV2ZW50ZGVmKSA9PlxuICAgICAgICAgICAgZXZlbnRkZWYucGFydGljaXBhbnRFbWFpbHMubGVuZ3RoID09PSBzdWJldmVudC5lbWFpbHMubGVuZ3RoICYmXG4gICAgICAgICAgICBldmVudGRlZi5wYXJ0aWNpcGFudEVtYWlscy5ldmVyeSgoZW1haWwpID0+XG4gICAgICAgICAgICAgIHN1YmV2ZW50LmVtYWlscy5pbmNsdWRlcyhlbWFpbCksXG4gICAgICAgICAgICApLFxuICAgICAgICApLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfSkgYXMgYW55W11bXTsgLy8gVE9ETzogSG93IHRvIGJlc3QgY29lcmNlIFByZURhdGVkVGltZVNsb3RbXVtdIHRvIENvbnNlY3V0aXZlRXZlbnRbXVtdPyBzcHJlYWQtY29tYmluZWQgcmV0dXJuIGhhbmRsZXMgaXQuXG59XG5cbi8vIFdlIGRvbid0IHdhbnQgdG8gb3ZlcmJ1cmRlbiBvdXIgdXNlcnMgd2l0aCB0b28gbXVjaCBzd2VldCBob3JyaWJsZSBmcmVlZG9tIG9mIGNob2ljZTtcbi8vIHRoZSAvY2FsZW5kYXJzL2F2YWlsYWJpbGl0eS9jb25zZWN1dGl2ZSBlbmRwb2ludCByZXR1cm5zIG9yZGVyIHBlcm11dGF0aW9ucyB3aXRoIHNhbWUgdGltZSBzbG90cztcbi8vIEN1bGwgdGhlbSBkb3duIHRvIGp1c3QgdGhlIGZpcnN0IHRoYXQgZXhpc3RzIHBlciB0aW1lc2xvdC5cbmZ1bmN0aW9uIHJlbW92ZVNpbXVsdGFuZW91c0F2YWlsYWJpbGl0eU9wdGlvbnMoXG4gIGF2YWlsYWJpbGl0aWVzOiBDb25zZWN1dGl2ZUV2ZW50W11bXSxcbikge1xuICBjb25zdCBibG9ja1NldCA9IG5ldyBTZXQoKTtcbiAgcmV0dXJuIGF2YWlsYWJpbGl0aWVzLmZpbHRlcigoYmxvY2spID0+IHtcbiAgICBjb25zdCBibG9ja1N0cmluZyA9IGAke2Jsb2NrWzBdLnN0YXJ0X3RpbWV9XyR7XG4gICAgICBibG9ja1tibG9jay5sZW5ndGggLSAxXS5lbmRfdGltZVxuICAgIH1gO1xuICAgIGlmIChibG9ja1NldC5oYXMoYmxvY2tTdHJpbmcpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJsb2NrU2V0LmFkZChibG9ja1N0cmluZyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgV3JpdGFibGUsIHdyaXRhYmxlIH0gZnJvbSBcInN2ZWx0ZS9zdG9yZVwiO1xuaW1wb3J0IHsgZmV0Y2hBdmFpbGFiaWxpdHkgfSBmcm9tIFwiLi4vY29ubmVjdGlvbnMvYXZhaWxhYmlsaXR5XCI7XG5pbXBvcnQgdHlwZSB7XG4gIEF2YWlsYWJpbGl0eVF1ZXJ5LFxuICBBdmFpbGFiaWxpdHlSZXNwb25zZSxcbn0gZnJvbSBcIkBjb21tb25zL3R5cGVzL0F2YWlsYWJpbGl0eVwiO1xuXG50eXBlIEF2YWlsYWJpbGl0eVN0b3JlID0gUmVjb3JkPHN0cmluZywgUHJvbWlzZTxBdmFpbGFiaWxpdHlSZXNwb25zZT4+O1xuXG5mdW5jdGlvbiBpbml0aWFsaXplKCk6IFdyaXRhYmxlPEF2YWlsYWJpbGl0eVN0b3JlPiB7XG4gIGNvbnN0IGdldCA9IChcbiAgICB0YXJnZXQ6IEF2YWlsYWJpbGl0eVN0b3JlLFxuICAgIGtleTogc3RyaW5nLFxuICApOiBQcm9taXNlPEF2YWlsYWJpbGl0eVJlc3BvbnNlPiB8IHZvaWQgPT4ge1xuICAgIGNvbnN0IGFjY2Vzc29yOiBBdmFpbGFiaWxpdHlRdWVyeSA9IEpTT04ucGFyc2Uoa2V5KTtcbiAgICAvLyBBdm9pZCBzYXZpbmcgZm9yY2VSZWxvYWQgcHJvcGVydHkgYXMgcGFydCBvZiBzdG9yZSBrZXlcbiAgICBjb25zdCBhY2Nlc3NvckNvcHkgPSB7IC4uLmFjY2Vzc29yIH07XG4gICAgZGVsZXRlIGFjY2Vzc29yQ29weS5mb3JjZVJlbG9hZDtcbiAgICBrZXkgPSBKU09OLnN0cmluZ2lmeShhY2Nlc3NvckNvcHkpO1xuXG4gICAgaWYgKFxuICAgICAgIWFjY2Vzc29yLmNvbXBvbmVudF9pZCB8fFxuICAgICAgIWFjY2Vzc29yPy5ib2R5Py5zdGFydF90aW1lIHx8XG4gICAgICAhYWNjZXNzb3I/LmJvZHk/LmVuZF90aW1lXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXRba2V5XSB8fCBhY2Nlc3Nvci5mb3JjZVJlbG9hZCkge1xuICAgICAgY29uc3QgZmV0Y2hQcm9taXNlID0gZmV0Y2hBdmFpbGFiaWxpdHkoYWNjZXNzb3IpO1xuICAgICAgc3RvcmUudXBkYXRlKChzdG9yZSkgPT4ge1xuICAgICAgICBzdG9yZVtrZXldID0gZmV0Y2hQcm9taXNlO1xuICAgICAgICByZXR1cm4gc3RvcmU7XG4gICAgICB9KTtcbiAgICAgIHRhcmdldFtrZXldID0gZmV0Y2hQcm9taXNlO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gIH07XG4gIGNvbnN0IHN0b3JlID0gd3JpdGFibGUobmV3IFByb3h5PEF2YWlsYWJpbGl0eVN0b3JlPih7fSwgeyBnZXQgfSkpO1xuICByZXR1cm4gc3RvcmU7XG59XG5cbmV4cG9ydCBjb25zdCBBdmFpbGFiaWxpdHlTdG9yZSA9IGluaXRpYWxpemUoKTtcbiIsImltcG9ydCB7IFdyaXRhYmxlLCB3cml0YWJsZSB9IGZyb20gXCJzdmVsdGUvc3RvcmVcIjtcbmltcG9ydCB7IGZldGNoQ29uc2VjdXRpdmVBdmFpbGFiaWxpdHkgfSBmcm9tIFwiLi4vY29ubmVjdGlvbnMvYXZhaWxhYmlsaXR5XCI7XG5pbXBvcnQgdHlwZSB7IENvbnNlY3V0aXZlQXZhaWxhYmlsaXR5UXVlcnkgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvQXZhaWxhYmlsaXR5XCI7XG5pbXBvcnQgdHlwZSB7IENvbnNlY3V0aXZlRXZlbnQgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvQm9va2luZ1wiO1xuXG50eXBlIENvbnNlY3V0aXZlQXZhaWxhYmlsaXR5U3RvcmUgPSBSZWNvcmQ8XG4gIHN0cmluZyxcbiAgUHJvbWlzZTxDb25zZWN1dGl2ZUV2ZW50W11bXT5cbj47XG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoKTogV3JpdGFibGU8Q29uc2VjdXRpdmVBdmFpbGFiaWxpdHlTdG9yZT4ge1xuICBjb25zdCBnZXQgPSAoXG4gICAgdGFyZ2V0OiBDb25zZWN1dGl2ZUF2YWlsYWJpbGl0eVN0b3JlLFxuICAgIGtleTogc3RyaW5nLFxuICApOiBQcm9taXNlPENvbnNlY3V0aXZlRXZlbnRbXVtdPiB8IHZvaWQgPT4ge1xuICAgIGNvbnN0IGFjY2Vzc29yOiBDb25zZWN1dGl2ZUF2YWlsYWJpbGl0eVF1ZXJ5ID0gSlNPTi5wYXJzZShrZXkpO1xuXG4gICAgaWYgKFxuICAgICAgIWFjY2Vzc29yLmNvbXBvbmVudF9pZCB8fFxuICAgICAgIWFjY2Vzc29yPy5ib2R5Py5zdGFydF90aW1lIHx8XG4gICAgICAhYWNjZXNzb3I/LmJvZHk/LmVuZF90aW1lXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXRba2V5XSkge1xuICAgICAgY29uc3QgZmV0Y2hQcm9taXNlID0gZmV0Y2hDb25zZWN1dGl2ZUF2YWlsYWJpbGl0eShhY2Nlc3Nvcik7XG4gICAgICBzdG9yZS51cGRhdGUoKHN0b3JlKSA9PiB7XG4gICAgICAgIHN0b3JlW2tleV0gPSBmZXRjaFByb21pc2U7XG4gICAgICAgIHJldHVybiBzdG9yZTtcbiAgICAgIH0pO1xuICAgICAgdGFyZ2V0W2tleV0gPSBmZXRjaFByb21pc2U7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgfTtcbiAgY29uc3Qgc3RvcmUgPSB3cml0YWJsZShuZXcgUHJveHk8Q29uc2VjdXRpdmVBdmFpbGFiaWxpdHlTdG9yZT4oe30sIHsgZ2V0IH0pKTtcbiAgcmV0dXJuIHN0b3JlO1xufVxuXG5leHBvcnQgY29uc3QgQ29uc2VjdXRpdmVBdmFpbGFiaWxpdHlTdG9yZSA9IGluaXRpYWxpemUoKTtcbiIsImltcG9ydCB7IGRlcml2ZWQsIFJlYWRhYmxlLCB3cml0YWJsZSB9IGZyb20gXCJzdmVsdGUvc3RvcmVcIjtcbmltcG9ydCB7XG4gIGZldGNoVGhyZWFkcyxcbiAgZmV0Y2hTZWFyY2hSZXN1bHRUaHJlYWRzLFxuICB1cGRhdGVUaHJlYWQsXG4gIGZldGNoVGhyZWFkQ291bnQsXG59IGZyb20gXCIuLi9jb25uZWN0aW9ucy90aHJlYWRzXCI7XG5pbXBvcnQgdHlwZSB7XG4gIFRocmVhZCxcbiAgTWFpbGJveFF1ZXJ5LFxuICBDb252ZXJzYXRpb25RdWVyeSxcbiAgTWVzc2FnZSxcbiAgQ29udmVyc2F0aW9uLFxufSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvTnlsYXNcIjtcbmltcG9ydCB7IHNpbGVuY2UgfSBmcm9tIFwiQGNvbW1vbnNcIjtcblxuaW50ZXJmYWNlIFBhZ2luYXRlZFRocmVhZHMge1xuICBpc0xvYWRlZDogYm9vbGVhbjtcbiAgdGhyZWFkczogVGhyZWFkW107XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVQYWdpbmF0ZWRUaHJlYWRzKHRvdGFsUGFnZXM6IG51bWJlcikge1xuICBjb25zdCBwYWdpbmF0ZWRUaHJlYWRzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbFBhZ2VzOyBpKyspIHtcbiAgICBwYWdpbmF0ZWRUaHJlYWRzLnB1c2goe1xuICAgICAgaXNMb2FkZWQ6IGZhbHNlLFxuICAgICAgdGhyZWFkczogPFRocmVhZFtdPltdLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBwYWdpbmF0ZWRUaHJlYWRzO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplVGhyZWFkcygpIHtcbiAgY29uc3QgeyBzdWJzY3JpYmUsIHNldCwgdXBkYXRlIH0gPSB3cml0YWJsZTxcbiAgICBSZWNvcmQ8c3RyaW5nLCBQYWdpbmF0ZWRUaHJlYWRzW10+XG4gID4oe30pO1xuICBsZXQgdGhyZWFkc01hcDogUmVjb3JkPHN0cmluZywgUGFnaW5hdGVkVGhyZWFkc1tdPiA9IHt9O1xuICBsZXQgdG90YWxJdGVtczogbnVtYmVyO1xuXG4gIHJldHVybiB7XG4gICAgc3Vic2NyaWJlLFxuICAgIHNldCxcbiAgICBnZXRUaHJlYWRzOiBhc3luYyAoXG4gICAgICBxdWVyeTogTWFpbGJveFF1ZXJ5LFxuICAgICAgY3VycmVudFBhZ2U6IG51bWJlcixcbiAgICAgIHBhZ2VTaXplOiBudW1iZXIsXG4gICAgICBmb3JjZVJlZnJlc2ggPSBmYWxzZSxcbiAgICApID0+IHtcbiAgICAgIGNvbnN0IHF1ZXJ5S2V5ID0gSlNPTi5zdHJpbmdpZnkocXVlcnkpO1xuXG4gICAgICBpZiAoIXF1ZXJ5LmNvbXBvbmVudF9pZCAmJiAhcXVlcnkuYWNjZXNzX3Rva2VuKSB7XG4gICAgICAgIC8vIFRoaXMgc2hvdWxkIGFsZXJ0IHRoZSB1c2VyXG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRvdGFsSXRlbXMgPT09IHVuZGVmaW5lZCB8fCBmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgLy8gVE9ETzogdGhpcyBjYW4gY291bnQgcGFzc2VkLWluIElEc1xuICAgICAgICBjb25zdCB0aHJlYWRDb3VudCA9IHF1ZXJ5LnRocmVhZF9pZHNcbiAgICAgICAgICA/IHF1ZXJ5LnRocmVhZF9pZHMubGVuZ3RoXG4gICAgICAgICAgOiBhd2FpdCBmZXRjaFRocmVhZENvdW50KHF1ZXJ5KS5jYXRjaChzaWxlbmNlKTtcblxuICAgICAgICBpZiAodGhyZWFkQ291bnQpIHtcbiAgICAgICAgICB0b3RhbEl0ZW1zID0gdGhyZWFkQ291bnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHRocmVhZHNNYXBbcXVlcnlLZXldKSB8fCBmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbCh0b3RhbEl0ZW1zIC8gcGFnZVNpemUpO1xuICAgICAgICB0aHJlYWRzTWFwW3F1ZXJ5S2V5XSA9IGF3YWl0IGluaXRpYWxpemVQYWdpbmF0ZWRUaHJlYWRzKHRvdGFsUGFnZXMpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAvLyBTaG91bGRuJ3QgdGhpcyBiZSBhbiBpbnRlcm5hbCBlcnJvcj9cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfSBlbHNlIGlmICghdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdLmlzTG9hZGVkKSB7XG4gICAgICAgIGNvbnN0IHRocmVhZHMgPSBhd2FpdCBmZXRjaFRocmVhZHMoXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgcGFnZVNpemUsXG4gICAgICAgICAgY3VycmVudFBhZ2UgKiBwYWdlU2l6ZSxcbiAgICAgICAgKS5jYXRjaChzaWxlbmNlKTtcblxuICAgICAgICBpZiAodGhyZWFkcykge1xuICAgICAgICAgIHRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS50aHJlYWRzID0gdGhyZWFkcztcbiAgICAgICAgICB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0uaXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZSgodGhyZWFkcykgPT4ge1xuICAgICAgICB0aHJlYWRzW3F1ZXJ5S2V5XSA9IHRocmVhZHNNYXBbcXVlcnlLZXldO1xuICAgICAgICByZXR1cm4geyAuLi50aHJlYWRzIH07XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS50aHJlYWRzO1xuICAgIH0sXG4gICAgZ2V0TnVtYmVyT2ZJdGVtczogYXN5bmMgKHF1ZXJ5OiBNYWlsYm94UXVlcnkpID0+IHtcbiAgICAgIGlmICghcXVlcnkuY29tcG9uZW50X2lkICYmICFxdWVyeS5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdG90YWxJdGVtcyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBjb25zdCB0aHJlYWRDb3VudCA9IGF3YWl0IGZldGNoVGhyZWFkQ291bnQocXVlcnkpLmNhdGNoKHNpbGVuY2UpO1xuXG4gICAgICAgIGlmICh0aHJlYWRDb3VudCkge1xuICAgICAgICAgIHRvdGFsSXRlbXMgPSB0aHJlYWRDb3VudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRvdGFsSXRlbXM7XG4gICAgfSxcbiAgICAvLyBUT0RPIC0gVXNlIHJlYWwgcGFnaW5hdGlvbiB3aGVuIHNlYXJjaCBlbmRwb2ludCBzdXBwb3J0cyBpdFxuICAgIGdldFRocmVhZHNXaXRoU2VhcmNoS2V5d29yZDogYXN5bmMgKFxuICAgICAgcXVlcnk6IE1haWxib3hRdWVyeSxcbiAgICAgIGZvcmNlUmVmcmVzaCA9IGZhbHNlLFxuICAgICkgPT4ge1xuICAgICAgaWYgKCFxdWVyeS5jb21wb25lbnRfaWQgJiYgIXF1ZXJ5LmFjY2Vzc190b2tlbikge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgICBjb25zdCBxdWVyeUtleSA9IEpTT04uc3RyaW5naWZ5KHF1ZXJ5KTtcblxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHRocmVhZHNNYXBbcXVlcnlLZXldKSB8fCBmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgdGhyZWFkc01hcFtxdWVyeUtleV0gPSBhd2FpdCBpbml0aWFsaXplUGFnaW5hdGVkVGhyZWFkcygxKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aHJlYWRzTWFwW3F1ZXJ5S2V5XVswXS5pc0xvYWRlZCB8fCBmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoUmVzdWx0VGhyZWFkcyA9IGF3YWl0IGZldGNoU2VhcmNoUmVzdWx0VGhyZWFkcyhxdWVyeSkuY2F0Y2goXG4gICAgICAgICAgc2lsZW5jZSxcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoc2VhcmNoUmVzdWx0VGhyZWFkcykge1xuICAgICAgICAgIHRocmVhZHNNYXBbcXVlcnlLZXldWzBdLnRocmVhZHMgPSBzZWFyY2hSZXN1bHRUaHJlYWRzO1xuICAgICAgICAgIHRocmVhZHNNYXBbcXVlcnlLZXldWzBdLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdXBkYXRlKCh0aHJlYWRzKSA9PiB7XG4gICAgICAgIHRocmVhZHNbcXVlcnlLZXldID0gdGhyZWFkc01hcFtxdWVyeUtleV07XG4gICAgICAgIHJldHVybiB7IC4uLnRocmVhZHMgfTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRocmVhZHNNYXBbcXVlcnlLZXldWzBdLnRocmVhZHM7XG4gICAgfSxcbiAgICB1cGRhdGVUaHJlYWQ6IGFzeW5jIChcbiAgICAgIHRocmVhZFF1ZXJ5OiBDb252ZXJzYXRpb25RdWVyeSxcbiAgICAgIHF1ZXJ5S2V5OiBzdHJpbmcsXG4gICAgICB1cGRhdGVkVGhyZWFkOiBDb252ZXJzYXRpb24sXG4gICAgICBjdXJyZW50UGFnZTogbnVtYmVyLFxuICAgICAgcGFnZVNpemU6IG51bWJlcixcbiAgICApID0+IHtcbiAgICAgIGNvbnN0IHRocmVhZCA9IGF3YWl0IHVwZGF0ZVRocmVhZCh0aHJlYWRRdWVyeSwgdXBkYXRlZFRocmVhZCkuY2F0Y2goXG4gICAgICAgIHNpbGVuY2UsXG4gICAgICApO1xuXG4gICAgICBpZiAoIXRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS5pc0xvYWRlZCkge1xuICAgICAgICAvLyBwb3NzaWJsZSBoYWNrOiBwYXNzIGluIGFycmF5IHRvIHF1ZXJ5P1xuICAgICAgICBjb25zdCB0aHJlYWRzID0gYXdhaXQgZmV0Y2hUaHJlYWRzKFxuICAgICAgICAgIEpTT04ucGFyc2UocXVlcnlLZXkpLFxuICAgICAgICAgIHBhZ2VTaXplLFxuICAgICAgICAgIGN1cnJlbnRQYWdlICogcGFnZVNpemUsXG4gICAgICAgICkuY2F0Y2goc2lsZW5jZSk7XG5cbiAgICAgICAgaWYgKHRocmVhZHMpIHtcbiAgICAgICAgICB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0udGhyZWFkcyA9IHRocmVhZHM7XG4gICAgICAgICAgdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0udGhyZWFkcyA9IHRocmVhZHNNYXBbcXVlcnlLZXldW1xuICAgICAgICBjdXJyZW50UGFnZVxuICAgICAgXS50aHJlYWRzLm1hcCgoaW5pdGlhbFRocmVhZCkgPT4ge1xuICAgICAgICBpZiAodGhyZWFkICYmIGluaXRpYWxUaHJlYWQuaWQgPT09IHRocmVhZC5pZCkge1xuICAgICAgICAgIGluaXRpYWxUaHJlYWQgPSBPYmplY3QuYXNzaWduKGluaXRpYWxUaHJlYWQsIHRocmVhZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluaXRpYWxUaHJlYWQ7XG4gICAgICB9KTtcbiAgICAgIHVwZGF0ZSgodGhyZWFkcykgPT4ge1xuICAgICAgICB0aHJlYWRzW3F1ZXJ5S2V5XSA9IHRocmVhZHNNYXBbcXVlcnlLZXldO1xuICAgICAgICByZXR1cm4geyAuLi50aHJlYWRzIH07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0udGhyZWFkcztcbiAgICB9LFxuICAgIHVwZGF0ZVRocmVhZFNlbGVjdGlvbjogKFxuICAgICAgcXVlcnlLZXk6IHN0cmluZyxcbiAgICAgIGN1cnJlbnRQYWdlOiBudW1iZXIsXG4gICAgICB0aHJlYWRJZD86IHN0cmluZyxcbiAgICApID0+IHtcbiAgICAgIGNvbnN0IHRocmVhZHMgPSB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0udGhyZWFkcztcblxuICAgICAgaWYgKCF0aHJlYWRJZCkge1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25TdGF0ZSA9IHRocmVhZHMuc29tZSgodGhyZWFkKSA9PiB0aHJlYWQuc2VsZWN0ZWQpO1xuICAgICAgICBmb3IgKGNvbnN0IHRocmVhZCBvZiB0aHJlYWRzKSB7XG4gICAgICAgICAgdGhyZWFkLnNlbGVjdGVkID0gIXNlbGVjdGlvblN0YXRlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0aHJlYWQgPSB0aHJlYWRzLmZpbmQoKHRocmVhZCkgPT4gdGhyZWFkLmlkID09PSB0aHJlYWRJZCk7XG4gICAgICAgIGlmICh0aHJlYWQpIHtcbiAgICAgICAgICB0aHJlYWQuc2VsZWN0ZWQgPSAhdGhyZWFkLnNlbGVjdGVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB1cGRhdGUoKHRocmVhZHMpID0+IHtcbiAgICAgICAgdGhyZWFkc1txdWVyeUtleV0gPSB0aHJlYWRzTWFwW3F1ZXJ5S2V5XTtcbiAgICAgICAgcmV0dXJuIHsgLi4udGhyZWFkcyB9O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdLnRocmVhZHM7XG4gICAgfSxcblxuICAgIHJlc2V0OiAoKSA9PiB7XG4gICAgICB0aHJlYWRzTWFwID0ge307XG4gICAgICBzZXQoe30pO1xuICAgIH0sXG5cbiAgICBoeWRyYXRlTWVzc2FnZUluVGhyZWFkOiAoXG4gICAgICBpbmNvbWluZ01lc3NhZ2U6IE1lc3NhZ2UsXG4gICAgICBxdWVyeTogTWFpbGJveFF1ZXJ5LFxuICAgICAgY3VycmVudFBhZ2U6IG51bWJlcixcbiAgICApID0+IHtcbiAgICAgIGNvbnN0IHF1ZXJ5S2V5ID0gSlNPTi5zdHJpbmdpZnkocXVlcnkpO1xuXG4gICAgICBjb25zdCBmb3VuZFRocmVhZCA9IHRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXT8udGhyZWFkcz8uZmluZChcbiAgICAgICAgKHRocmVhZCkgPT4gdGhyZWFkLmlkID09PSBpbmNvbWluZ01lc3NhZ2UudGhyZWFkX2lkLFxuICAgICAgKTtcbiAgICAgIGlmIChmb3VuZFRocmVhZCkge1xuICAgICAgICBjb25zdCBmb3VuZE1lc3NhZ2UgPSBmb3VuZFRocmVhZC5tZXNzYWdlcz8uZmluZChcbiAgICAgICAgICAobWVzc2FnZSkgPT4gbWVzc2FnZS5pZCA9PT0gaW5jb21pbmdNZXNzYWdlLmlkLFxuICAgICAgICApO1xuICAgICAgICBpZiAoZm91bmRNZXNzYWdlKSB7XG4gICAgICAgICAgZm91bmRNZXNzYWdlLmJvZHkgPSBpbmNvbWluZ01lc3NhZ2UuYm9keTtcbiAgICAgICAgICB1cGRhdGUoKHRocmVhZHMpID0+IHtcbiAgICAgICAgICAgIGlmIChpbmNvbWluZ01lc3NhZ2UudGhyZWFkX2lkKSB7XG4gICAgICAgICAgICAgIGxldCB0aHJlYWRUb1VwZGF0ZSA9IHRocmVhZHNbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS50aHJlYWRzLmZpbmQoXG4gICAgICAgICAgICAgICAgKHRocmVhZCkgPT4gdGhyZWFkLmlkID09PSBmb3VuZFRocmVhZC5pZCxcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICBpZiAodGhyZWFkVG9VcGRhdGUpIHtcbiAgICAgICAgICAgICAgICB0aHJlYWRUb1VwZGF0ZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZm91bmRUaHJlYWQpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgLi4udGhyZWFkcyB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFRoaXMgaGFwcGVucyB3aGVuIHNvbWVvbmUgc2VuZHMgYSBtZXNzYWdlIHVzaW5nIGNvbXBvc2VyIGFuZCB3ZSB3YW50XG4gICAgICAgICAgLy8gdG8gdXBkYXRlIHRoZSBleGlzdGluZyB0aHJlYWQgd2l0aCB0aGUgc2VudCBtZXNzYWdlXG4gICAgICAgICAgdXBkYXRlKCh0aHJlYWRzKSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5jb21pbmdNZXNzYWdlLnRocmVhZF9pZCkge1xuICAgICAgICAgICAgICBsZXQgdGhyZWFkVG9VcGRhdGUgPSB0aHJlYWRzW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0udGhyZWFkcy5maW5kKFxuICAgICAgICAgICAgICAgICh0aHJlYWQpID0+IHRocmVhZC5pZCA9PT0gZm91bmRUaHJlYWQuaWQsXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgaWYgKHRocmVhZFRvVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZXMgPSBmb3VuZFRocmVhZC5tZXNzYWdlcztcbiAgICAgICAgICAgICAgICBtZXNzYWdlcy5wdXNoKGluY29taW5nTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgZm91bmRUaHJlYWQubWVzc2FnZXMgPSBtZXNzYWdlcztcbiAgICAgICAgICAgICAgICBmb3VuZFRocmVhZC5zbmlwcGV0ID0gaW5jb21pbmdNZXNzYWdlLnNuaXBwZXQ7XG4gICAgICAgICAgICAgICAgLy9SZW1vdmUgZHJhZnQgd2l0aCB0aGUgc2FtZSBpZCBhcyBzZW50IG1lc3NhZ2VcbiAgICAgICAgICAgICAgICBmb3VuZFRocmVhZC5kcmFmdHMgPSBmb3VuZFRocmVhZC5kcmFmdHMuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgKGRyYWZ0KSA9PiBkcmFmdC5pZCAhPT0gaW5jb21pbmdNZXNzYWdlLmlkLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhyZWFkVG9VcGRhdGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZvdW5kVGhyZWFkKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IC4uLnRocmVhZHMgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdLnRocmVhZHM7XG4gICAgfSxcblxuICAgIC8vVXBkYXRlIGRyYWZ0cyBpbiB0aGUgdGhyZWFkcyBzdG9yZVxuICAgIGh5ZHJhdGVEcmFmdEluVGhyZWFkOiAoXG4gICAgICBpbmNvbWluZ0RyYWZ0OiBNZXNzYWdlLFxuICAgICAgcXVlcnk6IE1haWxib3hRdWVyeSxcbiAgICAgIGN1cnJlbnRQYWdlOiBudW1iZXIsXG4gICAgKSA9PiB7XG4gICAgICBjb25zdCBxdWVyeUtleSA9IEpTT04uc3RyaW5naWZ5KHF1ZXJ5KTtcblxuICAgICAgY29uc3QgZm91bmRUaHJlYWQgPSB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0/LnRocmVhZHM/LmZpbmQoXG4gICAgICAgICh0aHJlYWQpID0+IHRocmVhZC5pZCA9PT0gaW5jb21pbmdEcmFmdC50aHJlYWRfaWQsXG4gICAgICApO1xuICAgICAgaWYgKGZvdW5kVGhyZWFkKSB7XG4gICAgICAgIC8vVXBkYXRlIGV4aXN0aW5nIGRyYWZ0IG1lc3NhZ2UgaW4gc3RvcmVcbiAgICAgICAgY29uc3QgZm91bmREcmFmdCA9IGZvdW5kVGhyZWFkLmRyYWZ0cz8uZmluZChcbiAgICAgICAgICAoZHJhZnQpID0+IGRyYWZ0LmlkID09PSBpbmNvbWluZ0RyYWZ0LmlkLFxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChpbmNvbWluZ0RyYWZ0LnRocmVhZF9pZCkge1xuICAgICAgICAgIGlmIChmb3VuZERyYWZ0KSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGZvdW5kRHJhZnQsIGluY29taW5nRHJhZnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBkcmFmdHMgPSBmb3VuZFRocmVhZC5kcmFmdHM7XG4gICAgICAgICAgICBkcmFmdHMucHVzaChpbmNvbWluZ0RyYWZ0KTtcbiAgICAgICAgICAgIGZvdW5kVGhyZWFkLmRyYWZ0cyA9IGRyYWZ0cztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1cGRhdGUoKHRocmVhZHMpID0+IHtcbiAgICAgICAgICAgIGxldCB0aHJlYWRUb1VwZGF0ZSA9IHRocmVhZHNbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS50aHJlYWRzLmZpbmQoXG4gICAgICAgICAgICAgICh0aHJlYWQpID0+IHRocmVhZC5pZCA9PT0gZm91bmRUaHJlYWQuaWQsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHRocmVhZFRvVXBkYXRlKSB7XG4gICAgICAgICAgICAgIHRocmVhZFRvVXBkYXRlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmb3VuZFRocmVhZCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4geyAuLi50aHJlYWRzIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0udGhyZWFkcztcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgTWFpbGJveFN0b3JlID0gaW5pdGlhbGl6ZVRocmVhZHMoKTtcblxuZXhwb3J0IGNvbnN0IEVtYWlsU3RvcmU6IFJlYWRhYmxlPFJlY29yZDxzdHJpbmcsIFRocmVhZFtdPj4gPSBkZXJpdmVkKFxuICBNYWlsYm94U3RvcmUsXG4gICgkTWFpbGJveFN0b3JlKSA9PiB7XG4gICAgY29uc3QgZW1haWxTdG9yZTogUmVjb3JkPHN0cmluZywgVGhyZWFkW10+ID0ge307XG4gICAgT2JqZWN0LmVudHJpZXMoJE1haWxib3hTdG9yZSkuZm9yRWFjaChcbiAgICAgIChba2V5LCBwYWdpbmF0ZWRUaHJlYWRzXSkgPT5cbiAgICAgICAgKGVtYWlsU3RvcmVba2V5XSA9IHBhZ2luYXRlZFRocmVhZHNcbiAgICAgICAgICAubWFwKChwYWdpbmF0ZWRUaHJlYWQpID0+IHBhZ2luYXRlZFRocmVhZC50aHJlYWRzKVxuICAgICAgICAgIC5mbGF0KCkpLFxuICAgICk7XG4gICAgcmV0dXJuIGVtYWlsU3RvcmU7XG4gIH0sXG4pO1xuIiwiaW1wb3J0IHsgZmV0Y2hNYW5pZmVzdCB9IGZyb20gXCIuLi9jb25uZWN0aW9ucy9tYW5pZmVzdFwiO1xuaW1wb3J0IHsgV3JpdGFibGUsIHdyaXRhYmxlIH0gZnJvbSBcInN2ZWx0ZS9zdG9yZVwiO1xuaW1wb3J0IHR5cGUgeyBNYW5pZmVzdCB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuXG50eXBlIE1hbmlmZXN0QWNjZXNzb3IgPSB7XG4gIGNvbXBvbmVudF9pZDogc3RyaW5nO1xuICBhY2Nlc3NfdG9rZW4/OiBzdHJpbmc7XG4gIGV4dGVybmFsX21hbmlmZXN0X2lkcz86IFtdO1xufTtcbnR5cGUgTWFuaWZlc3RTdG9yZSA9IFJlY29yZDxzdHJpbmcsIFByb21pc2U8TWFuaWZlc3Q+PjtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpOiBXcml0YWJsZTxNYW5pZmVzdFN0b3JlPiB7XG4gIGNvbnN0IGdldCA9IChcbiAgICB0YXJnZXQ6IE1hbmlmZXN0U3RvcmUsXG4gICAga2V5OiBzdHJpbmcsXG4gICk6IFByb21pc2U8TWFuaWZlc3Q+IHwgdm9pZCA9PiB7XG4gICAgY29uc3QgYWNjZXNzb3I6IE1hbmlmZXN0QWNjZXNzb3IgPSBKU09OLnBhcnNlKGtleSk7XG5cbiAgICBpZiAoIWFjY2Vzc29yLmNvbXBvbmVudF9pZCkgcmV0dXJuO1xuXG4gICAgaWYgKCF0YXJnZXRba2V5XSkge1xuICAgICAgY29uc3QgZmV0Y2hQcm9taXNlID0gZmV0Y2hNYW5pZmVzdChcbiAgICAgICAgYWNjZXNzb3IuY29tcG9uZW50X2lkLFxuICAgICAgICBhY2Nlc3Nvci5hY2Nlc3NfdG9rZW4sXG4gICAgICApO1xuICAgICAgc3RvcmUudXBkYXRlKChzdG9yZSkgPT4ge1xuICAgICAgICBzdG9yZVtrZXldID0gZmV0Y2hQcm9taXNlO1xuICAgICAgICByZXR1cm4gc3RvcmU7XG4gICAgICB9KTtcbiAgICAgIHRhcmdldFtrZXldID0gZmV0Y2hQcm9taXNlO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gIH07XG4gIGNvbnN0IHN0b3JlID0gd3JpdGFibGUobmV3IFByb3h5PE1hbmlmZXN0U3RvcmU+KHt9LCB7IGdldCB9KSk7XG4gIHJldHVybiBzdG9yZTtcbn1cblxuZXhwb3J0IGNvbnN0IE1hbmlmZXN0U3RvcmUgPSBpbml0aWFsaXplKCk7XG4iLCJpbXBvcnQgdHlwZSB7IEZpbGUsIE1hbmlmZXN0IH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFdmVudERpc3BhdGNoZXIoY29tcG9uZW50OiB7XG4gIGRpc3BhdGNoRXZlbnQ/OiAoZTogRXZlbnQpID0+IGJvb2xlYW47XG59KSB7XG4gIHJldHVybiAobmFtZTogc3RyaW5nLCBkZXRhaWw6IHVua25vd24pOiB2b2lkID0+IHtcbiAgICBpZiAoY29tcG9uZW50LmRpc3BhdGNoRXZlbnQpIHtcbiAgICAgIGNvbXBvbmVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xuICAgICAgICAgIGRldGFpbCxcbiAgICAgICAgICBjb21wb3NlZDogdHJ1ZSwgLy8gcHJvcGFnYXRlIGFjcm9zcyB0aGUgc2hhZG93IERPTVxuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoXG4gIGZuOiAoYXJnczogdW5rbm93bikgPT4gdW5rbm93bixcbiAgdGltZTogbnVtYmVyLFxuKTogKCkgPT4gdm9pZCB7XG4gIGxldCB0aW1lb3V0SWQ6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+O1xuICByZXR1cm4gKCk6IHZvaWQgPT4ge1xuICAgIGlmICh0aW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgIH1cblxuICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZm4sIHRpbWUpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRJbnRlcm5hbFByb3BzPFQgZXh0ZW5kcyBQYXJ0aWFsPE1hbmlmZXN0Pj4oXG4gIHByb3BlcnRpZXM6IFQsXG4gIG1hbmlmZXN0OiBULFxuICBkZWZhdWx0VmFsdWVNYXA6IFQsXG4pOiBUIHtcbiAgcmV0dXJuIG5ldyBQcm94eShwcm9wZXJ0aWVzLCB7XG4gICAgZ2V0OiAodGFyZ2V0LCBuYW1lOiBrZXlvZiBNYW5pZmVzdCB8IFwidG9KU09OXCIgfCBcInRvU3RyaW5nXCIpID0+IHtcbiAgICAgIGlmIChuYW1lID09PSBcInRvU3RyaW5nXCIgfHwgbmFtZSA9PT0gXCJ0b0pTT05cIikge1xuICAgICAgICByZXR1cm4gKCkgPT4gSlNPTi5zdHJpbmdpZnkodGFyZ2V0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKFJlZmxlY3QuZ2V0KHRhcmdldCwgbmFtZSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZ2V0UHJvcGVydHlWYWx1ZShcbiAgICAgICAgICBSZWZsZWN0LmdldCh0YXJnZXQsIG5hbWUpLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZU1hcFtuYW1lXSxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1hbmlmZXN0ICYmIG5hbWUgaW4gbWFuaWZlc3QpIHtcbiAgICAgICAgcmV0dXJuIGdldFByb3BlcnR5VmFsdWUobWFuaWZlc3RbbmFtZV0sIGRlZmF1bHRWYWx1ZU1hcFtuYW1lXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVmYXVsdFZhbHVlTWFwW25hbWVdO1xuICAgIH0sXG5cbiAgICBvd25LZXlzOiAodGFyZ2V0KSA9PiB7XG4gICAgICBjb25zdCBrZXlzID0gbmV3IFNldChbXG4gICAgICAgIC4uLlJlZmxlY3Qub3duS2V5cyh0YXJnZXQpLFxuICAgICAgICAuLi5PYmplY3Qua2V5cyhtYW5pZmVzdCksXG4gICAgICAgIC4uLk9iamVjdC5rZXlzKGRlZmF1bHRWYWx1ZU1hcCksXG4gICAgICBdKTtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKGtleXMpO1xuICAgIH0sXG5cbiAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICh0YXJnZXQsIHByb3ApID0+IHtcbiAgICAgIGxldCBwcm9wRGVzY3JpcHRvciA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcCk7XG4gICAgICBpZiAoIXByb3BEZXNjcmlwdG9yKSB7XG4gICAgICAgIHByb3BEZXNjcmlwdG9yID0gKG1hbmlmZXN0ICYmXG4gICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtYW5pZmVzdCwgcHJvcCkpID8/XG4gICAgICAgICAgKGRlZmF1bHRWYWx1ZU1hcCAmJlxuICAgICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkZWZhdWx0VmFsdWVNYXAsIHByb3ApKSA/PyB7XG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgfTtcbiAgICAgICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3AsIHByb3BEZXNjcmlwdG9yKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9wRGVzY3JpcHRvcjtcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3BlcnR5VmFsdWU8VD4ocHJvcFZhbHVlOiBhbnksIGRlZmF1bHRUbzogVCk6IFQge1xuICBpZiAocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBkZWZhdWx0VG8gPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICByZXR1cm4gcGFyc2VCb29sZWFuKHByb3BWYWx1ZSkgYXMgYW55O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRlZmF1bHRUbyA9PT0gXCJudW1iZXJcIikge1xuICAgICAgcmV0dXJuIE51bWJlcihwcm9wVmFsdWUpIGFzIGFueTtcbiAgICB9XG4gICAgaWYgKGRlZmF1bHRUbyBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShwcm9wVmFsdWUpIGFzIGFueTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcFZhbHVlID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VG8gPz8gbnVsbCA6IHByb3BWYWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQm9vbGVhbihcbiAgdmFsOiBzdHJpbmcgfCBib29sZWFuIHwgdW5kZWZpbmVkIHwgbnVsbCxcbik6IGJvb2xlYW4ge1xuICByZXR1cm4gKDxhbnk+W3RydWUsIFwidHJ1ZVwiLCBcIjFcIl0pLmluY2x1ZGVzKHZhbCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlU3RyaW5nVG9BcnJheShwYXJzZVN0cjogc3RyaW5nKTogc3RyaW5nW10ge1xuICBpZiAoIXBhcnNlU3RyKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgaWYgKHBhcnNlU3RyLmluY2x1ZGVzKFwiLFwiKSkge1xuICAgIHJldHVybiBwYXJzZVN0ci5zcGxpdChcIixcIikubWFwKChzOiBzdHJpbmcpID0+IHMudHJpbSgpKTtcbiAgfVxuICBpZiAocGFyc2VTdHIuaW5jbHVkZXMoXCIgXCIpKSB7XG4gICAgcmV0dXJuIHBhcnNlU3RyLnNwbGl0KFwiIFwiKS5tYXAoKHM6IHN0cmluZykgPT4gcy50cmltKCkpO1xuICB9XG4gIGlmIChwYXJzZVN0ci5pbmNsdWRlcyhcIlxcblwiKSkge1xuICAgIHJldHVybiBwYXJzZVN0ci5zcGxpdChcIlxcblwiKS5tYXAoKHM6IHN0cmluZykgPT4gcy50cmltKCkpO1xuICB9XG5cbiAgcmV0dXJuIFtwYXJzZVN0ci50cmltKCldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWRBdHRhY2hlZEZpbGUoZmlsZURhdGE6IHN0cmluZywgZmlsZTogRmlsZSk6IHZvaWQge1xuICBjb25zdCBidWZmZXIgPSBVaW50OEFycmF5LmZyb20oYXRvYihmaWxlRGF0YSksIChjKSA9PiBjLmNoYXJDb2RlQXQoMCkpO1xuICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2J1ZmZlcl0sIHsgdHlwZTogZmlsZS5jb250ZW50X3R5cGUgfSk7XG4gIGNvbnN0IGJsb2JGaWxlID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cbiAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBhLmhyZWYgPSBibG9iRmlsZTtcbiAgYS5kb3dubG9hZCA9IGZpbGUuZmlsZW5hbWUgPz8gZmlsZS5pZDtcbiAgYS50YXJnZXQgPSBcIl9ibGFua1wiO1xuICBhLmNsaWNrKCk7XG4gIGEucmVtb3ZlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheUNvbnRhaW5zQXJyYXkoc3VwZXJzZXQ6IGFueVtdLCBzdWJzZXQ6IGFueVtdKTogYm9vbGVhbiB7XG4gIHJldHVybiBzdWJzZXQuZXZlcnkoKHRhcmdldCkgPT4gc3VwZXJzZXQuaW5jbHVkZXModGFyZ2V0KSk7XG59XG4iLCI8c3ZlbHRlOm9wdGlvbnMgdGFnPVwibnlsYXMtZXJyb3JcIiBpbW11dGFibGU9e3RydWV9IC8+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB7IEVycm9yU3RvcmUgfSBmcm9tIFwiLi4vc3RvcmUvZXJyb3JcIjtcbiAgaW1wb3J0IHR5cGUgeyBORXJyb3IgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvTnlsYXNcIjtcblxuICBleHBvcnQgbGV0IGlkOiBzdHJpbmc7IC8vIGNvbXBvbmVudCBpZFxuXG4gIGxldCBlcnJvcjogTkVycm9yO1xuICBsZXQgZXJyb3JOYW1lOiBzdHJpbmc7XG5cbiAgJDoge1xuICAgIGVycm9yID0gJEVycm9yU3RvcmVbaWRdID8/IHsgbmFtZTogXCJcIiB9O1xuICAgIGVycm9yTmFtZSA9IGVycm9yLm5hbWUgPz8gZXJyb3IubWVzc2FnZT8ubmFtZSA/PyBcIlwiO1xuICB9XG5cbiAgY29uc3QgaXNEZXZFbnYgPVxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKFwibG9jYWxob3N0XCIpIHx8XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoXCIxMjcuMC4wLjFcIik7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAubWVzc2FnZS1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmY2ZjY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjYWE5MmEwIGluc2V0LCAwIDAgMCAwIHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjOWYzYTM4O1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZSwgY29sb3IgNTAwbXMgZWFzZSxcbiAgICAgIGJhY2tncm91bmQtY29sb3IgNTAwbXMgZWFzZSwgYm94LXNoYWRvdyA1MDBtcyBlYXNlLFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93IDUwMG1zIGVhc2U7XG4gIH1cblxuICAubWVzc2FnZS1jb250YWluZXIgKjpmb2N1cyB7XG4gICAgb3V0bGluZTogNXB4IGF1dG8gSGlnaGxpZ2h0O1xuICAgIG91dGxpbmU6IDVweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcjtcbiAgfVxuXG4gIC5kZXRhaWxzIHtcbiAgICBjb2xvcjogIzQ5NDk0OTtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbjwvc3R5bGU+XG5cbnsjaWYgZXJyb3JOYW1lICYmIGlzRGV2RW52fVxuICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1jb250YWluZXJcIj5cbiAgICB7I2lmIGVycm9yTmFtZSA9PT0gXCJIb3N0RG9tYWluTm90QWxsb3dlZEVycm9yXCJ9XG4gICAgICA8aDM+XG4gICAgICAgIFlvdSBhcmUgdHJ5aW5nIHRvIGFjY2VzcyB0aGlzIGNvbXBvbmVudCBmcm9tJm5ic3A7XG4gICAgICAgIDxjb2RlPnt3aW5kb3cubG9jYXRpb24uaG9zdG5hbWV9PC9jb2RlPi4gVGhlIGNvbXBvbmVudCdzIHNldHRpbmdzIGRvIG5vdFxuICAgICAgICBhbGxvdyBhY2Nlc3MgZnJvbSB0aGlzIGRvbWFpbi5cbiAgICAgIDwvaDM+XG4gICAgICA8aDQ+XG4gICAgICAgIFRoZSBsaXN0IG9mIGFsbG93ZWQgZG9tYWlucyBjYW4gYmUgbW9kaWZpZWQgaW4geW91ciZuYnNwO1xuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9kYXNoYm9hcmQubnlsYXMuY29tXCI+RGFzaGJvYXJkPC9hPi5cbiAgICAgIDwvaDQ+XG4gICAgezplbHNlIGlmIGVycm9yTmFtZSA9PT0gXCJJbmNvbXBhdGlibGVQcm9wZXJ0aWVzXCJ9XG4gICAgICA8aDM+WW91ciBjb21wb25lbnQgcHJvcGVydGllcyBkbyBub3Qgd29yayB3aXRoIGVhY2ggb3RoZXIuPC9oMz5cbiAgICB7L2lmfVxuICAgIDxzcGFuIGNsYXNzPVwiZGV0YWlsc1wiPkRlYnVnIGluZm86PC9zcGFuPlxuICAgIDx0ZXh0YXJlYSBjbGFzcz1cImRldGFpbHNcIiByZWFkb25seT5cbiAgICAgIHtlcnJvck5hbWV9OiB7aWR9XG4gICAgICB7ZXJyb3IubWVzc2FnZT8ubWVzc2FnZSA/PyBcIlwifVxuICAgIDwvdGV4dGFyZWE+XG4gIDwvZGl2Plxuey9pZn1cbiIsImltcG9ydCB0eXBlIHsgV3JpdGFibGUgfSBmcm9tIFwic3ZlbHRlL3N0b3JlXCI7XG5pbXBvcnQgdHlwZSB7IEF0dGFjaG1lbnQsIEF0dGFjaG1lbnRVcGRhdGUgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvQ29tcG9zZXJcIjtcbmltcG9ydCB0eXBlIHsgUGFydGljaXBhbnQgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvTnlsYXNcIjtcblxuZXhwb3J0IGNvbnN0IG1lc3NhZ2VJbml0aWFsU3RhdGUgPSB7XG4gIGZyb206IDxQYXJ0aWNpcGFudFtdPltdLFxuICB0bzogPFBhcnRpY2lwYW50W10+W10sXG4gIGNjOiA8UGFydGljaXBhbnRbXT5bXSxcbiAgYmNjOiA8UGFydGljaXBhbnRbXT5bXSxcbiAgYm9keTogXCJcIixcbiAgc3ViamVjdDogXCJOZXcgTWVzc2FnZVwiLFxuICBzZW5kX2F0OiA8RGF0ZT5udWxsLFxuICBmaWxlX2lkczogPHN0cmluZ1tdPltdLFxufTtcbmV4cG9ydCBjb25zdCBhdHRhY2htZW50c0luaXRpYWxTdGF0ZTogQXR0YWNobWVudFtdID0gW107XG5cbmV4cG9ydCBjb25zdCBhZGRBdHRhY2htZW50cyA9IChcbiAgYXR0YWNobWVudHM6IFdyaXRhYmxlPEF0dGFjaG1lbnRbXT4sXG4gIHVwZGF0ZTogQXR0YWNobWVudCxcbik6IHZvaWQgPT4ge1xuICByZXR1cm4gYXR0YWNobWVudHMudXBkYXRlKChzOiBBdHRhY2htZW50W10pID0+IHtcbiAgICBpZiAoIXMubWFwKChhOiBBdHRhY2htZW50KSA9PiBhLmZpbGVuYW1lKS5pbmNsdWRlcyh1cGRhdGUuZmlsZW5hbWUpKSB7XG4gICAgICByZXR1cm4gWy4uLnMsIHVwZGF0ZV07XG4gICAgfVxuICAgIHJldHVybiBzO1xuICB9KTtcbn07XG5leHBvcnQgY29uc3QgdXBkYXRlQXR0YWNobWVudHMgPSAoXG4gIGF0dGFjaG1lbnRzOiBXcml0YWJsZTxBdHRhY2htZW50W10+LFxuICB1cGRhdGU6IEF0dGFjaG1lbnQsXG4pOiB2b2lkID0+IHtcbiAgcmV0dXJuIGF0dGFjaG1lbnRzLnVwZGF0ZSgocykgPT4gWy4uLnMsIHVwZGF0ZV0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUF0dGFjaG1lbnQgPSAoXG4gIGF0dGFjaG1lbnRzOiBXcml0YWJsZTxBdHRhY2htZW50W10+LFxuICBmaWxlbmFtZTogc3RyaW5nLFxuICB1cGRhdGU6IEF0dGFjaG1lbnRVcGRhdGUsXG4pOiB2b2lkID0+IHtcbiAgcmV0dXJuIGF0dGFjaG1lbnRzLnVwZGF0ZSgoczogQXR0YWNobWVudFtdKSA9PlxuICAgIHMubWFwKChhdHRhY2htZW50KSA9PiB7XG4gICAgICByZXR1cm4gYXR0YWNobWVudC5maWxlbmFtZSA9PT0gZmlsZW5hbWVcbiAgICAgICAgPyB7IC4uLmF0dGFjaG1lbnQsIC4uLnVwZGF0ZSB9XG4gICAgICAgIDogYXR0YWNobWVudDtcbiAgICB9KSxcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVBdHRhY2htZW50cyA9IChcbiAgYXR0YWNobWVudHM6IFdyaXRhYmxlPEF0dGFjaG1lbnRbXT4sXG4gIGl0ZW06IEF0dGFjaG1lbnQsXG4pOiB2b2lkID0+IHtcbiAgcmV0dXJuIGF0dGFjaG1lbnRzLnVwZGF0ZSgoczogQXR0YWNobWVudFtdKSA9PiBbXG4gICAgLi4ucy5maWx0ZXIoKGEpID0+IGEuZmlsZW5hbWUgIT09IGl0ZW0uZmlsZW5hbWUpLFxuICBdKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZXNldEF0dGFjaG1lbnRzID0gKGF0dGFjaG1lbnRzOiBXcml0YWJsZTxBdHRhY2htZW50W10+KTogdm9pZCA9PiB7XG4gIGF0dGFjaG1lbnRzLnNldChKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGF0dGFjaG1lbnRzSW5pdGlhbFN0YXRlKSkpO1xufTtcbiIsImV4cG9ydCBjb25zdCBmb3JtYXREYXRlID0gKGRhdGU6IERhdGUpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBtb250aHMgPSBbXG4gICAgXCJKYW51YXJ5XCIsXG4gICAgXCJGZWJydWFyeVwiLFxuICAgIFwiTWFyY2hcIixcbiAgICBcIkFwcmlsXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1bmVcIixcbiAgICBcIkp1bHlcIixcbiAgICBcIkF1Z3VzdFwiLFxuICAgIFwiU2VwdGVtYmVyXCIsXG4gICAgXCJPY3RvYmVyXCIsXG4gICAgXCJOb3ZlbWJlclwiLFxuICAgIFwiRGVjZW1iZXJcIixcbiAgXTtcbiAgcmV0dXJuIGAke1xuICAgIG1vbnRoc1tkYXRlLmdldE1vbnRoKCldXG4gIH0gJHtkYXRlLmdldERhdGUoKX0sICR7ZGF0ZS5nZXRIb3VycygpfToke2RhdGUuZ2V0TWludXRlcygpfSAke1xuICAgIGRhdGUuZ2V0SG91cnMoKSA+PSAxMiA/IFwiUE1cIiA6IFwiQU1cIlxuICB9YDtcbn07XG4iLCI8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJpc28tODg1OS0xXCI/PlxyXG48IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+XHJcbjwhRE9DVFlQRSBzdmcgUFVCTElDIFwiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU5cIiBcImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZFwiPlxyXG48c3ZnIHZlcnNpb249XCIxLjFcIiBpZD1cIkNhcGFfMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiXHJcblx0IHdpZHRoPVwiMzU3cHhcIiBoZWlnaHQ9XCIzNTdweFwiIHZpZXdCb3g9XCIwIDAgMzU3IDM1N1wiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNTcgMzU3O1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XHJcbjxnPlxyXG5cdDxnIGlkPVwicmVtb3ZlXCI+XHJcblx0XHQ8cGF0aCBkPVwiTTM1NywyMDRIMHYtNTFoMzU3VjIwNHpcIi8+XHJcblx0PC9nPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjwvc3ZnPlxyXG4iLCI8c3ZnIGhlaWdodD1cIjUxMnB0XCIgdmlld0JveD1cIi05NiAwIDUxMiA1MTJcIiB3aWR0aD1cIjUxMnB0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJtMTYwIDUxMmMtODguMjM0Mzc1IDAtMTYwLTcxLjc2NTYyNS0xNjAtMTYwdi0yMjRjMC0xMS43OTY4NzUgOS41NTg1OTQtMjEuMzMyMDMxIDIxLjMzMjAzMS0yMS4zMzIwMzEgMTEuNzc3MzQ0IDAgMjEuMzM1OTM4IDkuNTM1MTU2IDIxLjMzNTkzOCAyMS4zMzIwMzF2MjI0YzAgNjQuNjgzNTk0IDUyLjYyODkwNiAxMTcuMzMyMDMxIDExNy4zMzIwMzEgMTE3LjMzMjAzMXMxMTcuMzMyMDMxLTUyLjY0ODQzNyAxMTcuMzMyMDMxLTExNy4zMzIwMzF2LTIzNC42Njc5NjljMC00MS4xNzE4NzUtMzMuNDkyMTg3LTc0LjY2NDA2Mi03NC42NjQwNjItNzQuNjY0MDYyLTQxLjE3NTc4MSAwLTc0LjY2Nzk2OSAzMy40OTIxODctNzQuNjY3OTY5IDc0LjY2NDA2MnYyMTMuMzM1OTM4YzAgMTcuNjQwNjI1IDE0LjM1NTQ2OSAzMiAzMiAzMnMzMi0xNC4zNTkzNzUgMzItMzJ2LTIwMi42Njc5NjljMC0xMS43OTY4NzUgOS41NTg1OTQtMjEuMzMyMDMxIDIxLjMzMjAzMS0yMS4zMzIwMzEgMTEuNzc3MzQ0IDAgMjEuMzM1OTM4IDkuNTM1MTU2IDIxLjMzNTkzOCAyMS4zMzIwMzF2MjAyLjY2Nzk2OWMwIDQxLjE3MTg3NS0zMy40OTYwOTQgNzQuNjY0MDYyLTc0LjY2Nzk2OSA3NC42NjQwNjJzLTc0LjY2Nzk2OS0zMy40OTIxODctNzQuNjY3OTY5LTc0LjY2NDA2MnYtMjEzLjMzNTkzOGMwLTY0LjY3OTY4NyA1Mi42Mjg5MDctMTE3LjMzMjAzMSAxMTcuMzM1OTM4LTExNy4zMzIwMzEgNjQuNzAzMTI1IDAgMTE3LjMzMjAzMSA1Mi42NTIzNDQgMTE3LjMzMjAzMSAxMTcuMzMyMDMxdjIzNC42Njc5NjljMCA4OC4yMzQzNzUtNzEuNzY1NjI1IDE2MC0xNjAgMTYwem0wIDBcIi8+PC9zdmc+IiwiPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiMjRweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0cHhcIiBmaWxsPVwiIzAwMDAwMFwiPjxwYXRoIGQ9XCJNMCAwaDI0djI0SDBWMHpcIiBmaWxsPVwibm9uZVwiLz48cGF0aCBkPVwiTTIxLjk5IDhjMC0uNzItLjM3LTEuMzUtLjk0LTEuN0wxMiAxIDIuOTUgNi4zQzIuMzggNi42NSAyIDcuMjggMiA4djEwYzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJsLS4wMS0xMHptLTIgMHYuMDFMMTIgMTMgNCA4bDgtNC42OEwxOS45OSA4ek00IDE4di03LjY2bDggNS4wMiA3Ljk5LTQuOTlMMjAgMThINHpcIi8+PC9zdmc+IiwiPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiaXNvLTg4NTktMVwiPz5cclxuPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPlxyXG48IURPQ1RZUEUgc3ZnIFBVQkxJQyBcIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOXCIgXCJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGRcIj5cclxuPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJDYXBhXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIlxyXG5cdCB3aWR0aD1cIjMwNnB4XCIgaGVpZ2h0PVwiMzA2cHhcIiB2aWV3Qm94PVwiMCAwIDMwNiAzMDZcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzA2IDMwNjtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPlxyXG48Zz5cclxuXHQ8ZyBpZD1cImV4cGFuZC1sZXNzXCI+XHJcblx0XHQ8cG9seWdvbiBwb2ludHM9XCIxNTMsNTguNjUgMCwyMTEuNjUgMzUuNywyNDcuMzUgMTUzLDEzMC4wNSAyNzAuMywyNDcuMzUgMzA2LDIxMS42NSBcdFx0XCIvPlxyXG5cdDwvZz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48L3N2Zz5cclxuIiwiPHN2ZWx0ZTpvcHRpb25zIHRhZz1cIm55bGFzLWNvbXBvc2VyXCIgaW1tdXRhYmxlIC8+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG4gIGltcG9ydCBcIi4vY29tcG9uZW50cy9IVE1MRWRpdG9yLnN2ZWx0ZVwiO1xuICBpbXBvcnQgXCIuL2NvbXBvbmVudHMvQWxlcnRCYXIuc3ZlbHRlXCI7XG4gIGltcG9ydCBcIi4vY29tcG9uZW50cy9BdHRhY2htZW50LnN2ZWx0ZVwiO1xuICBpbXBvcnQgXCIuL2NvbXBvbmVudHMvRGF0ZXBpY2tlck1vZGFsLnN2ZWx0ZVwiO1xuICBpbXBvcnQgXCIuL2NvbXBvbmVudHMvQ29udGFjdHNTZWFyY2guc3ZlbHRlXCI7XG4gIGltcG9ydCBMb2FkaW5nSWNvbiBmcm9tIFwiLi9hc3NldHMvbG9hZGluZy5zdmdcIjtcbiAgaW1wb3J0IHsgaXNGaWxlQW5BdHRhY2htZW50IH0gZnJvbSBcIkBjb21tb25zL21ldGhvZHMvaXNGaWxlQW5BdHRhY2htZW50XCI7XG4gIGltcG9ydCB7IGNsZWFuTWVzc2FnZUZvclNuaXBwZXQgfSBmcm9tIFwiLi9saWIvdXRpbHNcIjtcblxuICBpbXBvcnQge1xuICAgIEVycm9yU3RvcmUsXG4gICAgTWFuaWZlc3RTdG9yZSxcbiAgICBzZW5kTWVzc2FnZSxcbiAgICBmZXRjaEFjY291bnQsXG4gICAgdXBsb2FkRmlsZSBhcyBueWxhc1VwbG9hZEZpbGUsXG4gICAgc2F2ZURyYWZ0LFxuICAgIHVwZGF0ZURyYWZ0LFxuICB9IGZyb20gXCJAY29tbW9uc1wiO1xuICBpbXBvcnQge1xuICAgIGJ1aWxkSW50ZXJuYWxQcm9wcyxcbiAgICBnZXRFdmVudERpc3BhdGNoZXIsXG4gIH0gZnJvbSBcIkBjb21tb25zL21ldGhvZHMvY29tcG9uZW50XCI7XG4gIGltcG9ydCB7IHNpbGVuY2UgfSBmcm9tIFwiQGNvbW1vbnMvbWV0aG9kcy9hcGlcIjtcbiAgaW1wb3J0IHsgb25Nb3VudCwgdGljaywgZ2V0X2N1cnJlbnRfY29tcG9uZW50IH0gZnJvbSBcInN2ZWx0ZS9pbnRlcm5hbFwiO1xuICBpbXBvcnQgcGtnIGZyb20gXCIuLi9wYWNrYWdlLmpzb25cIjtcbiAgaW1wb3J0IHsgd3JpdGFibGUgfSBmcm9tIFwic3ZlbHRlL3N0b3JlXCI7XG5cbiAgY29uc3QgZGlzcGF0Y2hFdmVudCA9IGdldEV2ZW50RGlzcGF0Y2hlcihnZXRfY3VycmVudF9jb21wb25lbnQoKSk7XG4gICQ6IGRpc3BhdGNoRXZlbnQoXCJtYW5pZmVzdExvYWRlZFwiLCBtYW5pZmVzdCk7XG5cbiAgJDogaWYgKE9iamVjdC5rZXlzKCRFcnJvclN0b3JlKS5sZW5ndGgpIHtcbiAgICBkaXNwYXRjaEV2ZW50KFwib25FcnJvclwiLCAkRXJyb3JTdG9yZSk7XG4gIH1cblxuICBpbXBvcnQge1xuICAgIG1lc3NhZ2VJbml0aWFsU3RhdGUsXG4gICAgYXR0YWNobWVudHNJbml0aWFsU3RhdGUsXG4gICAgYWRkQXR0YWNobWVudHMsXG4gICAgcmVtb3ZlQXR0YWNobWVudHMsXG4gICAgdXBkYXRlQXR0YWNobWVudCxcbiAgICByZXNldEF0dGFjaG1lbnRzLFxuICB9IGZyb20gXCIuL2xpYi9zdG9yZVwiO1xuICBpbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcIi4vbGliL2Zvcm1hdC1kYXRlXCI7XG5cbiAgaW1wb3J0IENsb3NlSWNvbiBmcm9tIFwiLi9hc3NldHMvY2xvc2Uuc3ZnXCI7XG4gIGltcG9ydCBNaW5pbWl6ZUljb24gZnJvbSBcIi4vYXNzZXRzL2Rhc2guc3ZnXCI7XG4gIGltcG9ydCBBdHRhY2htZW50SWNvbiBmcm9tIFwiLi9hc3NldHMvYXR0YWNobWVudC5zdmdcIjtcbiAgaW1wb3J0IERyYWZ0SWNvbiBmcm9tIFwiLi9hc3NldHMvZHJhZnRzLnN2Z1wiO1xuICBpbXBvcnQgRXhwYW5kSWNvbiBmcm9tIFwiLi9hc3NldHMvZXhwYW5kLnN2Z1wiO1xuICBpbXBvcnQgdHlwZSB7XG4gICAgU2VuZENhbGxiYWNrLFxuICAgIEZldGNoQ29udGFjdHNDYWxsYmFjayxcbiAgICBUcmFja2luZyxcbiAgICBBdHRyaWJ1dGUsXG4gICAgUmVwbGFjZUZpZWxkcyxcbiAgICBBdHRhY2htZW50LFxuICB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9Db21wb3NlclwiO1xuICBpbXBvcnQgdHlwZSB7XG4gICAgTWVzc2FnZSxcbiAgICBDb21wb3NlclByb3BlcnRpZXMsXG4gICAgQWNjb3VudCxcbiAgICBQYXJ0aWNpcGFudCxcbiAgICBGaWxlLFxuICB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuICBpbXBvcnQgdHlwZSB7IEZldGNoQ29udGFjdHNDYWxsYmFjayBhcyBDb250YWN0c1NlYXJjaEZldGNoQ29udGFjdHNDYWxsYmFjayB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9Db250YWN0c1NlYXJjaFwiO1xuXG4gIHR5cGUgQ29udGFjdFNlYXJjaENhbGxiYWNrID1cbiAgICB8IFBhcnRpY2lwYW50W11cbiAgICB8IENvbnRhY3RzU2VhcmNoRmV0Y2hDb250YWN0c0NhbGxiYWNrO1xuXG4gIGV4cG9ydCBsZXQgaWQ6IHN0cmluZyB8IHZvaWQ7XG4gIGV4cG9ydCBsZXQgYWNjZXNzX3Rva2VuOiBzdHJpbmcgPSBcIlwiO1xuXG4gIGV4cG9ydCBsZXQgdmFsdWU6IE1lc3NhZ2UgfCB2b2lkO1xuICBleHBvcnQgbGV0IHRvOiBDb250YWN0U2VhcmNoQ2FsbGJhY2sgPSBbXTtcbiAgZXhwb3J0IGxldCBmcm9tOiBDb250YWN0U2VhcmNoQ2FsbGJhY2sgPSBbXTtcbiAgZXhwb3J0IGxldCBjYzogQ29udGFjdFNlYXJjaENhbGxiYWNrID0gW107XG4gIGV4cG9ydCBsZXQgYmNjOiBDb250YWN0U2VhcmNoQ2FsbGJhY2sgPSBbXTtcbiAgZXhwb3J0IGxldCBzZW5kOiBTZW5kQ2FsbGJhY2s7XG4gIGV4cG9ydCBsZXQgc2F2ZTogU2VuZENhbGxiYWNrO1xuICBleHBvcnQgbGV0IGNoYW5nZTogRmV0Y2hDb250YWN0c0NhbGxiYWNrIHwgbnVsbCA9IG51bGw7XG4gIGV4cG9ydCBsZXQgYmVmb3JlU2VuZDogKG1zZzogTWVzc2FnZSkgPT4gTWVzc2FnZSB8IHZvaWQ7XG4gIGV4cG9ydCBsZXQgYWZ0ZXJTZW5kU3VjY2VzczogRnVuY3Rpb24gfCBudWxsID0gbnVsbDtcbiAgZXhwb3J0IGxldCBhZnRlclNlbmRFcnJvcjogRnVuY3Rpb24gfCBudWxsID0gbnVsbDtcbiAgZXhwb3J0IGxldCBhZnRlclNhdmVTdWNjZXNzOiBGdW5jdGlvbiB8IG51bGwgPSBudWxsO1xuICBleHBvcnQgbGV0IGFmdGVyU2F2ZUVycm9yOiBGdW5jdGlvbiB8IG51bGwgPSBudWxsO1xuICBleHBvcnQgbGV0IHRlbXBsYXRlOiBzdHJpbmcgPSBcIlwiO1xuICBleHBvcnQgbGV0IHRyYWNraW5nOiBUcmFja2luZyB8IG51bGwgPSBudWxsO1xuXG4gIC8vIEF0dHJpYnV0ZXNcbiAgZXhwb3J0IGxldCBtaW5pbWl6ZWQ6IEF0dHJpYnV0ZTtcbiAgZXhwb3J0IGxldCByZXNldF9hZnRlcl9zZW5kOiBBdHRyaWJ1dGU7XG4gIGV4cG9ydCBsZXQgcmVzZXRfYWZ0ZXJfY2xvc2U6IEF0dHJpYnV0ZTtcbiAgZXhwb3J0IGxldCBzaG93X2Zyb206IEF0dHJpYnV0ZTtcbiAgZXhwb3J0IGxldCBzaG93X3RvOiBBdHRyaWJ1dGU7XG4gIGV4cG9ydCBsZXQgc2hvd19oZWFkZXI6IEF0dHJpYnV0ZTtcbiAgZXhwb3J0IGxldCBzaG93X3N1YmplY3Q6IEF0dHJpYnV0ZTtcbiAgZXhwb3J0IGxldCBzaG93X2Nsb3NlX2J1dHRvbjogQXR0cmlidXRlO1xuICBleHBvcnQgbGV0IHNob3dfbWluaW1pemVfYnV0dG9uOiBBdHRyaWJ1dGU7XG4gIGV4cG9ydCBsZXQgc2hvd19jYzogQXR0cmlidXRlO1xuICBleHBvcnQgbGV0IHNob3dfYmNjOiBBdHRyaWJ1dGU7XG4gIGV4cG9ydCBsZXQgc2hvd19jY19idXR0b246IEF0dHJpYnV0ZTtcbiAgZXhwb3J0IGxldCBzaG93X2JjY19idXR0b246IEF0dHJpYnV0ZTtcbiAgZXhwb3J0IGxldCBzaG93X2F0dGFjaG1lbnRfYnV0dG9uOiBBdHRyaWJ1dGU7XG4gIGV4cG9ydCBsZXQgbWF4X2ZpbGVfc2l6ZTogbnVtYmVyO1xuICBleHBvcnQgbGV0IHNob3dfbWF4X2ZpbGVfc2l6ZTogQXR0cmlidXRlO1xuICBleHBvcnQgbGV0IHNob3dfc2F2ZV9hc19kcmFmdDogQXR0cmlidXRlO1xuICBleHBvcnQgbGV0IHNob3dfZWRpdG9yX3Rvb2xiYXI6IEF0dHJpYnV0ZTtcbiAgZXhwb3J0IGxldCB0aGVtZTogc3RyaW5nIHwgdm9pZDtcbiAgZXhwb3J0IGxldCByZXBsYWNlX2ZpZWxkczogUmVwbGFjZUZpZWxkc1tdIHwgbnVsbCA9IG51bGw7XG4gIGV4cG9ydCBsZXQgYmVmb3JlRmlsZVVwbG9hZDogRnVuY3Rpb24gfCBudWxsID0gbnVsbDtcbiAgZXhwb3J0IGxldCBhZnRlckZpbGVVcGxvYWRTdWNjZXNzOiBGdW5jdGlvbiB8IG51bGwgPSBudWxsO1xuICBleHBvcnQgbGV0IGFmdGVyRmlsZVVwbG9hZEVycm9yOiBGdW5jdGlvbiB8IG51bGwgPSBudWxsO1xuICBleHBvcnQgbGV0IHVwbG9hZEZpbGU6IEZ1bmN0aW9uIHwgbnVsbCA9IG51bGw7XG4gIGV4cG9ydCBsZXQgYmVmb3JlRmlsZVJlbW92ZTogRnVuY3Rpb24gfCBudWxsID0gbnVsbDtcbiAgZXhwb3J0IGxldCBhZnRlckZpbGVSZW1vdmU6IEZ1bmN0aW9uIHwgbnVsbCA9IG51bGw7XG4gIGV4cG9ydCBsZXQgZm9jdXNfYm9keV9vbmxvYWQ6IGJvb2xlYW47XG5cbiAgY29uc3QgZGVmYXVsdFZhbHVlTWFwOiBQYXJ0aWFsPENvbXBvc2VyUHJvcGVydGllcz4gPSB7XG4gICAgc2hvd190bzogdHJ1ZSxcbiAgICBzaG93X2Zyb206IHRydWUsXG4gICAgbWluaW1pemVkOiBmYWxzZSxcbiAgICByZXNldF9hZnRlcl9zZW5kOiB0cnVlLFxuICAgIHNob3dfaGVhZGVyOiBmYWxzZSxcbiAgICBzaG93X3N1YmplY3Q6IGZhbHNlLFxuICAgIHNob3dfY2xvc2VfYnV0dG9uOiB0cnVlLFxuICAgIHNob3dfbWluaW1pemVfYnV0dG9uOiB0cnVlLFxuICAgIHNob3dfY2M6IHRydWUsXG4gICAgc2hvd19iY2M6IHRydWUsXG4gICAgc2hvd19jY19idXR0b246IHRydWUsXG4gICAgc2hvd19iY2NfYnV0dG9uOiB0cnVlLFxuICAgIHNob3dfYXR0YWNobWVudF9idXR0b246IHRydWUsXG4gICAgbWF4X2ZpbGVfc2l6ZTogMCxcbiAgICBzaG93X21heF9maWxlX3NpemU6IHRydWUsXG4gICAgc2hvd19zYXZlX2FzX2RyYWZ0OiB0cnVlLFxuICAgIHNob3dfZWRpdG9yX3Rvb2xiYXI6IHRydWUsXG4gICAgdGhlbWU6IFwiYXV0b1wiLFxuICAgIGZvY3VzX2JvZHlfb25sb2FkOiBmYWxzZSxcbiAgfTtcblxuICBsZXQgbWVzc2FnZTogTWVzc2FnZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobWVzc2FnZUluaXRpYWxTdGF0ZSkpO1xuICBjb25zdCB1cGRhdGUgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiB1bmtub3duKTogdm9pZCA9PiB7XG4gICAgbWVzc2FnZSA9IHsgLi4ubWVzc2FnZSwgW2tleV06IHZhbHVlIH07XG4gIH07XG4gIGNvbnN0IG1lcmdlTWVzc2FnZSA9ICh1cGRhdGU6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogdm9pZCA9PiB7XG4gICAgbWVzc2FnZSA9IHsgLi4ubWVzc2FnZSwgLi4udXBkYXRlIH07XG4gIH07XG5cbiAgY29uc3QgYXR0YWNobWVudHMgPSB3cml0YWJsZShcbiAgICBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGF0dGFjaG1lbnRzSW5pdGlhbFN0YXRlKSksXG4gICk7XG5cbiAgLy8gQ2FsbGJhY2tzXG4gIGV4cG9ydCBjb25zdCBvcGVuID0gKCk6IHZvaWQgPT4ge1xuICAgIHZpc2libGUgPSB0cnVlO1xuICAgIGlmIChfdGhpcy5yZXNldF9hZnRlcl9zZW5kKSB7XG4gICAgICBzZW5kU3VjY2VzcyA9IGZhbHNlO1xuICAgIH1cbiAgICBkaXNwYXRjaEV2ZW50KFwiY29tcG9zZXJPcGVuZWRcIiwge30pO1xuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBjbG9zZSA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBtc2cgPSBtZXNzYWdlO1xuICAgIG1zZy5hY3RpdmUgPSBmYWxzZTtcbiAgICB2aXNpYmxlID0gZmFsc2U7XG4gICAgaWYgKF90aGlzLnJlc2V0X2FmdGVyX3NlbmQgfHwgX3RoaXMucmVzZXRfYWZ0ZXJfY2xvc2UpIHtcbiAgICAgIHNlbmRTdWNjZXNzID0gZmFsc2U7XG4gICAgICBzYXZlU3VjY2VzcyA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoX3RoaXMucmVzZXRfYWZ0ZXJfY2xvc2UpIHtcbiAgICAgIG1lc3NhZ2UgPSB7IC4uLm1lc3NhZ2UsIC4uLm1lc3NhZ2VJbml0aWFsU3RhdGUgfTtcbiAgICAgIHJlc2V0QXR0YWNobWVudHMoYXR0YWNobWVudHMpO1xuICAgIH1cbiAgICAvLyBVcGRhdGUgdGhlIHNuaXBwZXQgc2hvd2luZyBvbiB0aGUgY29uZGVuc2VkIGRyYWZ0IG1lc3NhZ2VcbiAgICBtc2cuc25pcHBldCA9IGNsZWFuTWVzc2FnZUZvclNuaXBwZXQobXNnLmJvZHkpO1xuICAgIGF0dGFjaG1lbnRzLnVwZGF0ZSgoKSA9PiBbXSk7XG4gICAgZGlzcGF0Y2hFdmVudChcImNvbXBvc2VyQ2xvc2VkXCIsIHtcbiAgICAgIG1lc3NhZ2U6IG1zZyxcbiAgICB9KTtcbiAgfTtcblxuICBsZXQgaXNMb2FkaW5nID0gZmFsc2U7XG4gIGxldCBfdGhpcyA9IDxDb21wb3NlclByb3BlcnRpZXM+YnVpbGRJbnRlcm5hbFByb3BzKHt9LCB7fSwgZGVmYXVsdFZhbHVlTWFwKTtcbiAgbGV0IG1hbmlmZXN0OiBQYXJ0aWFsPENvbXBvc2VyUHJvcGVydGllcz47XG4gIGxldCBzaG93RGF0ZXBpY2tlciA9IGZhbHNlO1xuICBsZXQgdGhlbWVMb2FkZWQgPSBmYWxzZTtcbiAgbGV0IHZpc2libGUgPSB0cnVlO1xuICBsZXQgc3ViamVjdCA9IF90aGlzLnZhbHVlPy5zdWJqZWN0ID8/IG1lc3NhZ2Uuc3ViamVjdDtcbiAgJDogc3ViamVjdCA9IG1lc3NhZ2Uuc3ViamVjdDtcblxuICBvbk1vdW50KGFzeW5jICgpID0+IHtcbiAgICBpc0xvYWRpbmcgPSB0cnVlO1xuICAgIGF3YWl0IHRpY2soKTtcblxuICAgIG1hbmlmZXN0ID1cbiAgICAgIChhd2FpdCAkTWFuaWZlc3RTdG9yZVtcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBjb21wb25lbnRfaWQ6IGlkLCBhY2Nlc3NfdG9rZW4gfSlcbiAgICAgIF0pIHx8IHt9O1xuXG4gICAgaWYgKG1hbmlmZXN0ICYmIGlkKSB7XG4gICAgICBjb25zdCBhY2NvdW50OiBBY2NvdW50IHwgdm9pZCA9IGF3YWl0IGZldGNoQWNjb3VudCh7XG4gICAgICAgIGNvbXBvbmVudF9pZDogaWQsXG4gICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgIH0pLmNhdGNoKHNpbGVuY2UpO1xuXG4gICAgICBpZiAoYWNjb3VudCkge1xuICAgICAgICAvLyBTZXQgXCJmcm9tXCIgZmllbGQgZnJvbSBhY2NvdW50XG4gICAgICAgIHVwZGF0ZShcImZyb21cIiwgW3sgbmFtZTogYWNjb3VudC5uYW1lLCBlbWFpbDogYWNjb3VudC5lbWFpbF9hZGRyZXNzIH1dKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfdGhpcyA9IGJ1aWxkSW50ZXJuYWxQcm9wcyhcbiAgICAgICQkcHJvcHMsXG4gICAgICBtYW5pZmVzdCxcbiAgICAgIGRlZmF1bHRWYWx1ZU1hcCxcbiAgICApIGFzIENvbXBvc2VyUHJvcGVydGllcztcblxuICAgIGlmICh0cmFja2luZykge1xuICAgICAgLy8gU2V0IHRyYWNraW5nIG9uIG1lc3NhZ2Ugb2JqZWN0XG4gICAgICB1cGRhdGUoXCJ0cmFja2luZ1wiLCB0cmFja2luZyk7XG4gICAgfVxuXG4gICAgaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgdGhlbWVMb2FkZWQgPSB0cnVlO1xuICB9KTtcblxuICBsZXQgcHJldmlvdXNQcm9wcyA9ICQkcHJvcHM7XG4gICQ6IHtcbiAgICBpZiAoSlNPTi5zdHJpbmdpZnkocHJldmlvdXNQcm9wcykgIT09IEpTT04uc3RyaW5naWZ5KCQkcHJvcHMpKSB7XG4gICAgICBfdGhpcyA9IGJ1aWxkSW50ZXJuYWxQcm9wcyhcbiAgICAgICAgJCRwcm9wcyxcbiAgICAgICAgbWFuaWZlc3QsXG4gICAgICAgIGRlZmF1bHRWYWx1ZU1hcCxcbiAgICAgICkgYXMgQ29tcG9zZXJQcm9wZXJ0aWVzO1xuICAgICAgcHJldmlvdXNQcm9wcyA9ICQkcHJvcHM7XG4gICAgfVxuICB9XG5cbiAgJDogaWYgKHZhbHVlKSB7XG4gICAgbWVyZ2VNZXNzYWdlKHZhbHVlKTtcbiAgICBpZiAodmFsdWUuZmlsZXM/Lmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCBmaWxlX2lkcyA9IFtdO1xuICAgICAgcmVzZXRBdHRhY2htZW50cyhhdHRhY2htZW50cyk7XG4gICAgICBmb3IgKGNvbnN0IFtfLCBmaWxlXSBvZiB2YWx1ZS5maWxlcy5lbnRyaWVzKCkpIHtcbiAgICAgICAgZmlsZV9pZHMucHVzaChmaWxlLmlkKTtcbiAgICAgICAgaWYgKGlzRmlsZUFuQXR0YWNobWVudChmaWxlKSkge1xuICAgICAgICAgIGFkZEF0dGFjaG1lbnRzKGF0dGFjaG1lbnRzLCB7XG4gICAgICAgICAgICBhY2NvdW50X2lkOiB2YWx1ZS5hY2NvdW50X2lkLFxuICAgICAgICAgICAgaWQ6IGZpbGUuaWQsXG4gICAgICAgICAgICBmaWxlbmFtZTogZmlsZS5maWxlbmFtZSxcbiAgICAgICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICAgIGNvbnRlbnRfdHlwZTogZmlsZS5jb250ZW50X3R5cGUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG1lcmdlTWVzc2FnZSh7IGZpbGVfaWRzIH0pO1xuICAgIH1cbiAgfVxuXG4gIGxldCBtYXhGaWxlU2l6ZTogbnVtYmVyO1xuICAkOiB7XG4gICAgaWYgKCF1cGxvYWRGaWxlKSB7XG4gICAgICAvL1VzaW5nIE55bGFzIGZpbGUgdXBsb2FkIGFwaSwgZGVmYXVsdCA0TUIgbWF4IHNpemUuXG4gICAgICBtYXhGaWxlU2l6ZSA9XG4gICAgICAgIF90aGlzLm1heF9maWxlX3NpemUgJiZcbiAgICAgICAgX3RoaXMubWF4X2ZpbGVfc2l6ZSA8IDQgJiZcbiAgICAgICAgX3RoaXMubWF4X2ZpbGVfc2l6ZSA+IDBcbiAgICAgICAgICA/IF90aGlzLm1heF9maWxlX3NpemVcbiAgICAgICAgICA6IDQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vVXNpbmcgY3VzdG9tIHVwbG9hZEZpbGUgZnVuY3Rpb25cbiAgICAgIG1heEZpbGVTaXplID0gX3RoaXMubWF4X2ZpbGVfc2l6ZTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlOiBFdmVudCkgPT4ge1xuICAgIGlmICghZS50YXJnZXQpIHJldHVybjtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICAgIHVwZGF0ZSh0YXJnZXQubmFtZSwgdGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVCb2R5Q2hhbmdlID0gKGh0bWw6IHN0cmluZykgPT4gdXBkYXRlKFwiYm9keVwiLCBodG1sKTtcblxuICBjb25zdCBoYW5kbGVDb250YWN0c0NoYW5nZSA9IChmaWVsZDogc3RyaW5nKSA9PiAoZGF0YTogUGFydGljaXBhbnRbXSkgPT5cbiAgICB1cGRhdGUoZmllbGQsIGRhdGEpO1xuICBjb25zdCBzY2hlZHVsZSA9IChkYXRhOiBEYXRlKSA9PiB7XG4gICAgc2hvd0RhdGVwaWNrZXIgPSBmYWxzZTtcbiAgICB1cGRhdGUoXCJzZW5kX2F0XCIsIGRhdGEpO1xuICB9O1xuICBjb25zdCByZW1vdmVTY2hlZHVsZSA9ICgpID0+IHtcbiAgICB1cGRhdGUoXCJzZW5kX2F0XCIsIG51bGwpO1xuICB9O1xuICBjb25zdCBkYXRlUGlja2VyQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2hvd0RhdGVwaWNrZXIgPSBmYWxzZTtcbiAgfTtcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVGaWxlc0NoYW5nZShmaWxlQ2hhbmdlZEV2ZW50OiBFdmVudCkge1xuICAgIGNvbnN0IGZpbGVTZWxlY3RvciA9IGZpbGVDaGFuZ2VkRXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgaWYgKCFmaWxlU2VsZWN0b3I/LmZpbGVzKSByZXR1cm47XG5cbiAgICBjb25zdCBmaWxlID0gZmlsZVNlbGVjdG9yLmZpbGVzWzBdO1xuXG4gICAgdHJ5IHtcbiAgICAgIGFkZEF0dGFjaG1lbnRzKGF0dGFjaG1lbnRzLCB7XG4gICAgICAgIGZpbGVuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgY29udGVudF90eXBlOiBmaWxlLnR5cGUsXG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgZmlsZVNlbGVjdG9yLnZhbHVlID0gXCJcIjtcbiAgICAgIGlmIChiZWZvcmVGaWxlVXBsb2FkKSBiZWZvcmVGaWxlVXBsb2FkKGZpbGUpO1xuXG4gICAgICBpZiAobWF4RmlsZVNpemUgPiAwICYmIGZpbGUuc2l6ZSA+PSBtYXhGaWxlU2l6ZSAqIDEwMDAwMDApIHtcbiAgICAgICAgdGhyb3cgYE1heGltdW0gZmlsZSBzaXplIGlzICR7bWF4RmlsZVNpemV9TUIuIFBsZWFzZSB1cGxvYWQgYSBkaWZmZXJlbnQgZmlsZS5gO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN1bHQgPSB1cGxvYWRGaWxlXG4gICAgICAgID8gYXdhaXQgdXBsb2FkRmlsZShmaWxlKVxuICAgICAgICA6IGlkICYmIChhd2FpdCBueWxhc1VwbG9hZEZpbGUoaWQsIGZpbGUsIGFjY2Vzc190b2tlbikpO1xuXG4gICAgICB1cGRhdGVBdHRhY2htZW50KGF0dGFjaG1lbnRzLCBmaWxlLm5hbWUsIHtcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGlkOiByZXN1bHQuaWQsXG4gICAgICB9KTtcbiAgICAgIGlmIChyZXN1bHQuaWQpXG4gICAgICAgIC8vIFVwZGF0ZSBtZXNzYWdlIHN0b3JlIHdpdGggbmV3IGZpbGVfaWQgYW5kIGZpbGVcbiAgICAgICAgLy8gTmV3IGFkZGVkIGZpbGUgaXMgYXR0YWNobWVudCwgdGh1cyBhZGRlZCBjb250ZW50X2Rpc3Bvc2l0aW9uIHByb3BlcnR5XG4gICAgICAgIG1lcmdlTWVzc2FnZSh7XG4gICAgICAgICAgZmlsZV9pZHM6IFsuLi5tZXNzYWdlLmZpbGVfaWRzLCByZXN1bHQuaWRdLFxuICAgICAgICAgIGZpbGVzOiBbXG4gICAgICAgICAgICAuLi4obWVzc2FnZS5maWxlcyB8fCBbXSksXG4gICAgICAgICAgICB7IC4uLnJlc3VsdCwgY29udGVudF9kaXNwb3NpdGlvbjogXCJhdHRhY2htZW50XCIgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KTtcbiAgICAgIGlmIChhZnRlckZpbGVVcGxvYWRTdWNjZXNzKSBhZnRlckZpbGVVcGxvYWRTdWNjZXNzKHJlc3VsdCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdXBkYXRlQXR0YWNobWVudChhdHRhY2htZW50cywgZmlsZS5uYW1lLCB7XG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiB0eXBlb2YgZSA9PT0gXCJzdHJpbmdcIiA/IGUgOiB1bmRlZmluZWQsXG4gICAgICB9KTtcbiAgICAgIGlmIChhZnRlckZpbGVVcGxvYWRFcnJvcikgYWZ0ZXJGaWxlVXBsb2FkRXJyb3IoZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlUmVtb3ZlRmlsZSA9IChhdHRhY2htZW50OiBBdHRhY2htZW50KSA9PiB7XG4gICAgaWYgKGJlZm9yZUZpbGVSZW1vdmUpIGJlZm9yZUZpbGVSZW1vdmUoYXR0YWNobWVudCk7XG4gICAgcmVtb3ZlQXR0YWNobWVudHMoYXR0YWNobWVudHMsIGF0dGFjaG1lbnQpO1xuICAgIGlmIChhdHRhY2htZW50LmlkKSB7XG4gICAgICBtZXJnZU1lc3NhZ2Uoe1xuICAgICAgICBmaWxlX2lkczogbWVzc2FnZS5maWxlX2lkcy5maWx0ZXIoKGlkOiBzdHJpbmcpID0+IGlkICE9PSBhdHRhY2htZW50LmlkKSxcbiAgICAgICAgZmlsZXM6IG1lc3NhZ2UuZmlsZXM/LmZpbHRlcigoZmlsZTogRmlsZSkgPT4gZmlsZS5pZCAhPT0gYXR0YWNobWVudC5pZCksXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGFmdGVyRmlsZVJlbW92ZSkgYWZ0ZXJGaWxlUmVtb3ZlKGF0dGFjaG1lbnQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1pbmltaXplID0gKGlzTWluaW1pemVkOiBib29sZWFuKSA9PiB7XG4gICAgX3RoaXMubWluaW1pemVkID0gaXNNaW5pbWl6ZWQ7XG4gICAgcHJldmlvdXNQcm9wcyA9IF90aGlzO1xuXG4gICAgZGlzcGF0Y2hFdmVudChcbiAgICAgIF90aGlzLm1pbmltaXplZCA/IFwiY29tcG9zZXJNaW5pbWl6ZWRcIiA6IFwiY29tcG9zZXJNYXhpbWl6ZWRcIixcbiAgICAgIHt9LFxuICAgICk7XG4gIH07XG5cbiAgbGV0IGlzUGVuZGluZyA9IGZhbHNlO1xuICBsZXQgc2VuZEVycm9yID0gZmFsc2U7XG4gIGxldCBzZW5kU3VjY2VzcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGhhbmRsZVNlbmQgPSBhc3luYyAoKSA9PiB7XG4gICAgaXNQZW5kaW5nID0gdHJ1ZTtcbiAgICBzZW5kRXJyb3IgPSBmYWxzZTtcbiAgICBzZW5kU3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgbGV0IG1zZyA9IG1lc3NhZ2U7XG4gICAgaWYgKGJlZm9yZVNlbmQpIHtcbiAgICAgIC8vIElmIGJlZm9yZVNlbmQgcmV0dXJucyB2YWx1ZSwgaXQgd2lsbCByZXBsYWNlIHRoZSBtZXNzYWdlXG4gICAgICBjb25zdCB1cGQgPSBiZWZvcmVTZW5kKG1lc3NhZ2UpO1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgaWYgKHVwZCkgbXNnID0gdXBkO1xuICAgIH1cbiAgICBpZiAoc2VuZCkge1xuICAgICAgLy8gQ2FsbGJhY2tcbiAgICAgIHNlbmQobXNnKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKGFmdGVyU2VuZFN1Y2Nlc3MpIGFmdGVyU2VuZFN1Y2Nlc3MocmVzKTtcbiAgICAgICAgICBpc1BlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBzZW5kU3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgaWYgKGFmdGVyU2VuZEVycm9yKSBhZnRlclNlbmRFcnJvcihlcnIpO1xuICAgICAgICAgIGlmIChfdGhpcy5yZXNldF9hZnRlcl9zZW5kKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0geyAuLi5tZXNzYWdlLCAuLi5tZXNzYWdlSW5pdGlhbFN0YXRlIH07XG4gICAgICAgICAgICByZXNldEF0dGFjaG1lbnRzKGF0dGFjaG1lbnRzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaXNQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgc2VuZEVycm9yID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChpZCkge1xuICAgICAgLy9JZiBtZXNzYWdlIGlzIGFuIGV4aXN0aW5nIGRyYWZ0XG4gICAgICBpZiAobXNnLm9iamVjdCA9PT0gXCJkcmFmdFwiKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHVwZGF0ZURyYWZ0KGlkLCBtc2csIGFjY2Vzc190b2tlbik7XG4gICAgICAgIGlmIChyZXMuaWQpIHtcbiAgICAgICAgICBtZXJnZU1lc3NhZ2UoeyAuLi5yZXMgfSk7XG4gICAgICAgICAgbXNnID0geyBkcmFmdF9pZDogcmVzLmlkLCAuLi5yZXMgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gTWlkZGxld2FyZVxuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkobXNnLCBudWxsLCAyKSk7XG4gICAgICBzZW5kTWVzc2FnZShpZCwgbXNnLCBhY2Nlc3NfdG9rZW4pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoYWZ0ZXJTZW5kU3VjY2VzcykgYWZ0ZXJTZW5kU3VjY2VzcyhyZXMpO1xuICAgICAgICAgIGlmIChfdGhpcy5yZXNldF9hZnRlcl9zZW5kKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0geyAuLi5tZXNzYWdlLCAuLi5tZXNzYWdlSW5pdGlhbFN0YXRlIH07XG4gICAgICAgICAgICByZXNldEF0dGFjaG1lbnRzKGF0dGFjaG1lbnRzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaXNQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgc2VuZFN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgIGRpc3BhdGNoRXZlbnQoXCJtZXNzYWdlU2VudFwiLCB7XG4gICAgICAgICAgICBtZXNzYWdlOiByZXMsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgaWYgKGFmdGVyU2VuZEVycm9yKSBhZnRlclNlbmRFcnJvcihlcnIpO1xuICAgICAgICAgIGlzUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHNlbmRFcnJvciA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBsZXQgaXNTYXZpbmcgPSBmYWxzZTtcbiAgbGV0IHNhdmVFcnJvciA9IGZhbHNlO1xuICBsZXQgc2F2ZVN1Y2Nlc3MgPSBmYWxzZTtcbiAgLy9TYXZlIEVtYWlsIE1lc3NhZ2UgYXMgRHJhZnRcbiAgY29uc3QgaGFuZGxlU2F2ZURyYWZ0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlzU2F2aW5nID0gdHJ1ZTtcbiAgICBzYXZlRXJyb3IgPSBmYWxzZTtcbiAgICBzYXZlU3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgbGV0IG1zZyA9IG1lc3NhZ2U7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChzYXZlKSB7XG4gICAgICAgIC8vQ2FsbGluZyBjdXN0b20gc2F2ZSBjYWxsYmFja1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBzYXZlKG1zZyk7XG4gICAgICAgIGlmIChhZnRlclNhdmVTdWNjZXNzKSBhZnRlclNhdmVTdWNjZXNzKHJlcyk7XG4gICAgICAgIGlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgIHNhdmVTdWNjZXNzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoaWQpIHtcbiAgICAgICAgLy8gTWlkZGxld2FyZVxuICAgICAgICBpZiAobXNnLmlkICYmIG1zZy52ZXJzaW9uICE9IG51bGwpIHtcbiAgICAgICAgICAvL1VwZGF0ZSBkcmFmdFxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHVwZGF0ZURyYWZ0KGlkLCBtc2csIGFjY2Vzc190b2tlbik7XG4gICAgICAgICAgaWYgKHJlcy5pZCkgbWVyZ2VNZXNzYWdlKHsgLi4ucmVzIH0pO1xuICAgICAgICAgIGlmIChhZnRlclNhdmVTdWNjZXNzKSBhZnRlclNhdmVTdWNjZXNzKHJlcyk7XG4gICAgICAgICAgaXNTYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgICBzYXZlU3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgZGlzcGF0Y2hFdmVudChcImRyYWZ0VXBkYXRlZFwiLCB7XG4gICAgICAgICAgICBtZXNzYWdlOiByZXMsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9TYXZlIG5ldyBkcmFmdFxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNhdmVEcmFmdChpZCwgbXNnLCBhY2Nlc3NfdG9rZW4pO1xuICAgICAgICAgIGlmIChyZXMuaWQpIG1lcmdlTWVzc2FnZSh7IC4uLnJlcyB9KTtcbiAgICAgICAgICBpZiAoYWZ0ZXJTYXZlU3VjY2VzcykgYWZ0ZXJTYXZlU3VjY2VzcyhyZXMpO1xuICAgICAgICAgIGlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgICAgc2F2ZVN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgIGRpc3BhdGNoRXZlbnQoXCJkcmFmdFNhdmVkXCIsIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IHJlcyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGFmdGVyU2F2ZUVycm9yKSBhZnRlclNhdmVFcnJvcihlcnIpO1xuICAgICAgaXNTYXZpbmcgPSBmYWxzZTtcbiAgICAgIHNhdmVFcnJvciA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIC8vIExpc3RlbmVyIGZvciBtZXNzYWdlIGNoYW5nZXNcbiAgLy8gQHRzLWlnbm9yZVxuICAkOiBpZiAobWVzc2FnZSAmJiBjaGFuZ2UpIGNoYW5nZShtZXNzYWdlKTtcbiAgLy8gQHRzLWlnbm9yZVxuICAkOiBkYXRlcGlja2VyVGltZXN0YW1wID0gbWVzc2FnZS5zZW5kX2F0ICogMTAwMDtcblxuICBsZXQgc2VuZEJ1dHRvblRleHQ6IHN0cmluZyA9IFwiU2VuZFwiO1xuICAkOiBpZiAoaXNQZW5kaW5nKSB7XG4gICAgc2VuZEJ1dHRvblRleHQgPSBcIlNlbmRpbmdcIjtcbiAgfSBlbHNlIGlmIChpc1NhdmluZykge1xuICAgIHNlbmRCdXR0b25UZXh0ID0gXCJTYXZpbmdcIjtcbiAgfSBlbHNlIHtcbiAgICBzZW5kQnV0dG9uVGV4dCA9IFwiU2VuZFwiO1xuICB9XG5cbiAgJDogc2VuZEVuYWJsZWQgPVxuICAgICFpc1BlbmRpbmcgJiZcbiAgICAhaXNTYXZpbmcgJiZcbiAgICAoaWQgfHwgc2VuZCkgJiZcbiAgICBtZXNzYWdlLmZyb20ubGVuZ3RoICYmXG4gICAgKG1lc3NhZ2UudG8ubGVuZ3RoIHx8IG1lc3NhZ2UuY2MubGVuZ3RoIHx8IG1lc3NhZ2UuYmNjLmxlbmd0aCk7XG5cbiAgbGV0IHRoZW1lVXJsOiBzdHJpbmc7XG4gICQ6IGlmICghIV90aGlzLnRoZW1lKSB7XG4gICAgaWYgKF90aGlzLnRoZW1lLnN0YXJ0c1dpdGgoXCIuXCIpIHx8IF90aGlzLnRoZW1lLnN0YXJ0c1dpdGgoXCJodHRwXCIpKSB7XG4gICAgICAvLyBJZiBjdXN0b20gdXJsIHN1cHBsaWVkXG4gICAgICB0aGVtZVVybCA9IF90aGlzLnRoZW1lO1xuICAgIH0gZWxzZSBpZiAoX3RoaXMudGhlbWUpIHtcbiAgICAgIHRoZW1lVXJsID0gYGh0dHBzOi8vdW5wa2cuY29tL0BueWxhcy9jb21wb25lbnRzLWNvbXBvc2VyQCR7cGtnLnZlcnNpb259L3RoZW1lcy8ke190aGlzLnRoZW1lfS5jc3NgO1xuICAgIH1cbiAgfVxuXG4gIGxldCBiY2NGaWVsZDogSFRNTEVsZW1lbnQ7XG4gIGxldCBjY0ZpZWxkOiBIVE1MRWxlbWVudDtcbiAgLy8gd2hlbiAoYiljYyBmaWVsZCBpcyByZW1vdmVkLCByZXR1cm4gZm9jdXMgdG8gaXRzIHJlc3BlY3RpdmUgdHJpZ2dlciBidXR0b25cbiAgY29uc3Qgc2V0Rm9jdXMgPSBhc3luYyAodHJpZ2dlckVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgYXdhaXQgdGljaygpOyAvLyB3YWl0IGZvciB0cmlnZ2VyIGVsZW1lbnQgdG8gcmVhcHBlYXJcbiAgICBpZiAodHJpZ2dlckVsZW1lbnQpIHtcbiAgICAgIHRyaWdnZXJFbGVtZW50LnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XG4gICAgICB0cmlnZ2VyRWxlbWVudC5mb2N1cygpO1xuICAgICAgdHJpZ2dlckVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiICYmIGUubWV0YUtleSkge1xuICAgICAgaWYgKHNlbmRFbmFibGVkKSB7XG4gICAgICAgIGhhbmRsZVNlbmQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4gIEBpbXBvcnQgXCIuLi8uLi90aGVtaW5nL3Jlc2V0LnNjc3NcIjtcblxuICAubnlsYXMtY29tcG9zZXIge1xuICAgIC8vIHNldHRpbmcgdmFycyB0aGF0IGNvbnRhY3Qtc2VhcmNoIHVzZXNcbiAgICAtLW91dGVyLXBhZGRpbmc6IHZhcigtLWNvbXBvc2VyLW91dGVyLXdpZHRoLCAxNXB4KTtcbiAgICAtLWZvbnQtc2l6ZS1zbWFsbDogdmFyKC0tY29tcG9zZXItZm9udC1zaXplLXNtYWxsLCAxMnB4KTtcbiAgICAtLXRleHQtbGlnaHQ6IHZhcigtLWNvbXBvc2VyLXRleHQtbGlnaHQtY29sb3IsICM2ZTZlN2EpO1xuICAgIC0tYm9yZGVyOiB2YXIoLS1jb21wb3Nlci1ib3JkZXItY29sb3IsICNmN2Y3ZjcpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogdmFyKC0tY29tcG9zZXItYm9yZGVyLXJhZGl1cywgNnB4KTtcbiAgICAtLXByaW1hcnk6IHZhcigtLWNvbXBvc2VyLXByaW1hcnktY29sb3IsICM1Yzc3ZmYpO1xuICAgIC0tcHJpbWFyeS1saWdodDogdmFyKC0tY29tcG9zZXItcHJpbWFyeS1saWdodC1jb2xvciwgI2YwZjJmZik7XG4gICAgLS10ZXh0LXNlY29uZGFyeTogdmFyKC0tY29tcG9zZXItdGV4dC1zZWNvbmRhcnktY29sb3IsICMyMjQ3ZmYpO1xuXG4gICAgd2lkdGg6IHZhcigtLXdpZHRoLCAxMDAlKTtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogdmFyKC0taGVpZ2h0LCAxMDAlKTtcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb21wb3Nlci1iYWNrZ3JvdW5kLWNvbG9yLCB3aGl0ZSk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tY29tcG9zZXItYm9yZGVyLXJhZGl1cywgNnB4KTtcbiAgICBib3gtc2hhZG93OiB2YXIoXG4gICAgICAtLWNvbXBvc2VyLXNoYWRvdyxcbiAgICAgIDAgMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjExKSxcbiAgICAgIDAgM3B4IDM2cHggcmdiYSgwLCAwLCAwLCAwLjEyKVxuICAgICk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWNvbXBvc2VyLWZvbnQsIHNhbnMtc2VyaWYpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tY29tcG9zZXItZm9udC1zaXplLCAxNHB4KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XG4gICAgJi5wb3B1cCB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBib3R0b206IDEwcHg7XG4gICAgICByaWdodDogMTBweDtcbiAgICAgIHotaW5kZXg6IHZhcigtLXotaW5kZXgsIDEwMDApO1xuICAgIH1cbiAgICAmLm1pbmltaXplZCB7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBtaW4taGVpZ2h0OiAwO1xuICAgIH1cbiAgICAmX19sb2FkZXIge1xuICAgICAgbWluLWhlaWdodDogdmFyKC0tY29tcG9zZXItZWRpdG9yLW1heC1oZWlnaHQsIDQ4MHB4KTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBjb2xvcjogdmFyKC0tY29tcG9zZXItdGV4dC1saWdodC1jb2xvciwgIzZlNmU3YSk7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgICAmX19zcGlubmVyIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgYW5pbWF0aW9uOiByb3RhdGUgMnMgbGluZWFyIGluZmluaXRlO1xuICAgIH1cbiAgICAqOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IDVweCBhdXRvIHZhcigtLWNvbXBvc2VyLXByaW1hcnktY29sb3IsICM1Yzc3ZmYpO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cbiAgbWFpbiB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG4gIGlucHV0IHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tY29tcG9zZXItZm9udCwgc2Fucy1zZXJpZik7XG4gIH1cbiAgaGVhZGVyIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1jb21wb3Nlci1ib3JkZXItcmFkaXVzLCA2cHgpO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS1jb21wb3Nlci1ib3JkZXItcmFkaXVzLCA2cHgpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb21wb3Nlci1ib3JkZXItY29sb3IsICNmN2Y3ZjcpO1xuICAgIGNvbG9yOiB2YXIoLS1jb21wb3Nlci10ZXh0LWNvbG9yLCBibGFjayk7XG4gICAgcGFkZGluZzogMTVweCB2YXIoLS1jb21wb3Nlci1vdXRlci1wYWRkaW5nLCAxNXB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYmFja2dyb3VuZDogdmFyKFxuICAgICAgLS1jb21wb3Nlci1oZWFkZXItYmFja2dyb3VuZC1jb2xvcixcbiAgICAgIHZhcigtLWNvbXBvc2VyLWJhY2tncm91bmQtY29sb3IsIHdoaXRlKVxuICAgICk7XG4gICAgJi5taW5pbWl6ZWQge1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tY29tcG9zZXItYm9yZGVyLXJhZGl1cywgNnB4KTtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiB2YXIoLS1jb21wb3Nlci1ib3JkZXItcmFkaXVzLCA2cHgpO1xuICAgIH1cbiAgfVxuICBmb290ZXIge1xuICAgIHBhZGRpbmc6IDE1cHggdmFyKC0tY29tcG9zZXItb3V0ZXItcGFkZGluZywgMTVweCk7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNvbXBvc2VyLWJvcmRlci1jb2xvciwgI2Y3ZjdmNyk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7XG4gIH1cbiAgLnNlbmQtYnRuIHtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29tcG9zZXItcHJpbWFyeS1jb2xvciwgIzVjNzdmZik7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tY29tcG9zZXItYm9yZGVyLXJhZGl1cywgNnB4KTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tY29tcG9zZXItZm9udCwgc2Fucy1zZXJpZik7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICAgIC8vIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgIC8vIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29tcG9zZXItcHJpbWFyeS1kYXJrLWNvbG9yLCAjMjk0ZGZmKTtcbiAgICB9XG4gICAgJi5zZW5kLWxhdGVyIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvbXBvc2VyLWJvcmRlci1yYWRpdXMsIDZweCk7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNHB4O1xuICAgIH1cbiAgfVxuXG4gIC5zdWJqZWN0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IHZhcigtLWNvbXBvc2VyLWZvbnQtc2l6ZSwgMTRweCk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb21wb3Nlci1ib3JkZXItY29sb3IsICNmN2Y3ZjcpO1xuICAgIGNvbG9yOiB2YXIoLS1jb21wb3Nlci10ZXh0LWNvbG9yLCBibGFjayk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAxNXB4IHZhcigtLWNvbXBvc2VyLW91dGVyLXBhZGRpbmcsIDE1cHgpO1xuICAgIG91dGxpbmU6IDA7XG4gICAgJjo6cGxhY2Vob2xlciB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgfVxuXG4gIC5jb250YWN0cy13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1jb21wb3Nlci10ZXh0LWNvbG9yLCBibGFjayk7XG4gICAgLmNvbnRhY3RzLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIHBhZGRpbmc6IDAuNHJlbSB2YXIoLS1vdXRlci1wYWRkaW5nKTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICAgIH1cbiAgICAuY29udGFjdC1mcm9tIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZy1ib3R0b206IDAuMXJlbTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDAuMXJlbTtcbiAgICB9XG4gICAgLmNvbnRhY3QtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tYm9yZGVyLXJhZGl1cykgLyAyKTtcbiAgICAgIHBhZGRpbmc6IDAuMnJlbSAwLjhyZW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG4gICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgfVxuICAgIC5jb250YWN0LWl0ZW1fX25hbWUge1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XG4gICAgfVxuICAgIC5jb250YWN0cy1wbGFjZWhvbGRlciB7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICBtaW4td2lkdGg6IDMwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICAgIH1cbiAgfVxuICAuY2xvc2UtYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuY29tcG9zZXItYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIHdpZHRoOiAyOHB4O1xuICAgIGhlaWdodDogMjhweDtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb21wb3Nlci1ib3JkZXItcmFkaXVzLCA2cHgpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbXBvc2VyLWJhY2tncm91bmQtbXV0ZWQtY29sb3IsICNmMGYyZmYpO1xuICAgIH1cbiAgfVxuICAuY29tcG9zZXItYnRuLmZpbGUtdXBsb2FkLFxuICAuY29tcG9zZXItYnRuLnNhdmUtZHJhZnQge1xuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuZmlsZS1zaXplIHtcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb21wb3Nlci1pY29ucy1jb2xvciwgIzY2Njc3NCk7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5jYy1idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgfVxuXG4gIC5hdHRhY2htZW50cy13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDE1cHggdmFyKC0tY29tcG9zZXItb3V0ZXItcGFkZGluZywgMTVweCk7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuYWRkb25zIHtcbiAgICBmb250LXNpemU6IHZhcigtLWNvbXBvc2VyLWZvbnQtc2l6ZS1zbWFsbCwgMTJweCk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGJvdHRvbTogMTZweDtcbiAgICBjb2xvcjogdmFyKC0tY29tcG9zZXItdGV4dC1saWdodC1jb2xvciwgIzZlNmU3YSk7XG4gICAgYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiB2YXIoLS1jb21wb3Nlci10ZXh0LWxpZ2h0LWNvbG9yLCAjNmU2ZTdhKTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICB9XG4gIH1cblxuICAuY2MtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICYgPiBueWxhcy1jb250YWN0cy1zZWFyY2gge1xuICAgICAgZmxleDogMTtcbiAgICB9XG4gIH1cbiAgLmF0dGFjaG1lbnRzLWNhcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tY29tcG9zZXItZm9udC1zaXplLXNtYWxsLCAxMnB4KTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgY29sb3I6IHZhcigtLWNvbXBvc2VyLXRleHQtbGlnaHQtY29sb3IsICM2ZTZlN2EpO1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAubnlsYXMtY29tcG9zZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5jb250YWN0cy13cmFwcGVyIHtcbiAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xuICAgIH1cbiAgICAuYWRkb25zIHtcbiAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgIH1cbiAgfVxuXG4gIFtjbGFzcyQ9XCJJY29uXCJdIHtcbiAgICBmaWxsOiB2YXIoLS1jb21wb3Nlci1pY29ucy1jb2xvciwgIzY2Njc3NCk7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICB9XG4gIFtjbGFzcyQ9XCJGb290ZXJJY29uXCJdIHtcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gIH1cbiAgLkV4cGFuZEljb24ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xuICB9XG4gIC5NaW5pbWl6ZUljb24ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xuICB9XG48L3N0eWxlPlxuXG48bnlsYXMtZXJyb3Ige2lkfSAvPlxuXG57I2lmIHRoZW1lVXJsfVxuICA8bGlua1xuICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgIGhyZWY9e3RoZW1lVXJsfVxuICAgIG9uOmxvYWQ9eygpID0+ICh0aGVtZUxvYWRlZCA9IHRydWUpfVxuICAgIG9uOmVycm9yPXsoKSA9PiAodGhlbWVMb2FkZWQgPSB0cnVlKX0gLz5cbnsvaWZ9XG57I2lmIHZpc2libGUgJiYgaXNMb2FkaW5nfVxuICA8ZGl2IGNsYXNzPVwibnlsYXMtY29tcG9zZXIgbnlsYXMtY29tcG9zZXJfX2xvYWRlclwiPlxuICAgIDxMb2FkaW5nSWNvbiBjbGFzcz1cIm55bGFzLWNvbXBvc2VyX19zcGlubmVyXCIgLz5cbiAgICA8ZGl2PkxvYWRpbmc8L2Rpdj5cbiAgPC9kaXY+XG57L2lmfVxuXG57I2lmIHZpc2libGUgJiYgdGhlbWVMb2FkZWQgJiYgIWlzTG9hZGluZ31cbiAgPGRpdlxuICAgIGNsYXNzPVwibnlsYXMtY29tcG9zZXJcIlxuICAgIGRhdGEtY3k9XCJueWxhcy1jb21wb3NlclwiXG4gICAgY2xhc3M6bWluaW1pemVkPXtfdGhpcy5taW5pbWl6ZWR9PlxuICAgIHsjaWYgX3RoaXMuc2hvd19oZWFkZXJ9XG4gICAgICA8aGVhZGVyIGNsYXNzPXtfdGhpcy5taW5pbWl6ZWQgPyBcIm1pbmltaXplZFwiIDogdW5kZWZpbmVkfT5cbiAgICAgICAgPHNwYW4+e3N1YmplY3R9PC9zcGFuPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHsjaWYgX3RoaXMuc2hvd19taW5pbWl6ZV9idXR0b259XG4gICAgICAgICAgICB7I2lmIF90aGlzLm1pbmltaXplZH1cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY29tcG9zZXItYnRuXCJcbiAgICAgICAgICAgICAgICBvbjpjbGljaz17KCkgPT4gaGFuZGxlTWluaW1pemUoZmFsc2UpfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5FeHBhbmQgQ29tcG9zZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgPEV4cGFuZEljb24gY2xhc3M9XCJFeHBhbmRJY29uXCIgLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzcz1cImNvbXBvc2VyLWJ0blwiXG4gICAgICAgICAgICAgICAgb246Y2xpY2s9eygpID0+IGhhbmRsZU1pbmltaXplKHRydWUpfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Db2xsYXBzZSBDb21wb3Nlcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8TWluaW1pemVJY29uIGNsYXNzPVwiTWluaW1pemVJY29uXCIgLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICB7L2lmfVxuICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgeyNpZiBfdGhpcy5zaG93X2Nsb3NlX2J1dHRvbn1cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjb21wb3Nlci1idG5cIiBvbjpjbGljaz17Y2xvc2V9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5DbG9zZSBDb21wb3Nlcjwvc3Bhbj5cbiAgICAgICAgICAgICAgPENsb3NlSWNvbiBjbGFzcz1cIkNsb3NlSWNvblwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICB7L2lmfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgIHsvaWZ9XG4gICAgeyNpZiAhX3RoaXMubWluaW1pemVkfVxuICAgICAgPG1haW4+XG4gICAgICAgIDwhLS0gU2VhcmNoIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdHMtd3JhcHBlclwiPlxuICAgICAgICAgIHsjaWYgX3RoaXMuc2hvd19mcm9tfVxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3RzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1mcm9tXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3RzLXBsYWNlaG9sZGVyXCI+RnJvbTo8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdHMtcmVzdWx0cy1pbm5lclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtaXRlbVwiIGRhdGEtY3k9XCJmcm9tLWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGFjdC1pdGVtX19uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgeyNpZiBtZXNzYWdlLmZyb20ubGVuZ3RoID4gMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsjaWYgbWVzc2FnZS5mcm9tWzBdLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e21lc3NhZ2UuZnJvbVswXS5uYW1lfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7YDwke21lc3NhZ2UuZnJvbVswXS5lbWFpbH0+YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2UuZnJvbVswXS5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey9pZn1cbiAgICAgICAgICB7I2lmIF90aGlzLnNob3dfdG99XG4gICAgICAgICAgICA8bnlsYXMtY29udGFjdHMtc2VhcmNoXG4gICAgICAgICAgICAgIGRhdGEtY3k9XCJ0by1maWVsZFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVG86XCJcbiAgICAgICAgICAgICAgY2hhbmdlPXtoYW5kbGVDb250YWN0c0NoYW5nZShcInRvXCIpfVxuICAgICAgICAgICAgICBjb250YWN0cz17dG99XG4gICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlLnRvfSAvPlxuICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFkZG9uc1wiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBkYXRhLWN5PVwidG9nZ2xlLWNjLWZpZWxkLWJ0blwiXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBiaW5kOnRoaXM9e2NjRmllbGR9XG4gICAgICAgICAgICAgIGhpZGRlbj17X3RoaXMuc2hvd19jYyAmJiAhX3RoaXMuc2hvd19jY19idXR0b24gJiYgISFfdGhpcy5zaG93X3RvfVxuICAgICAgICAgICAgICBvbjpjbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIF90aGlzLnNob3dfY2MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzUHJvcHMgPSBfdGhpcztcbiAgICAgICAgICAgICAgfX0+Q0M8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBkYXRhLWN5PVwidG9nZ2xlLWJjYy1maWVsZC1idG5cIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgYmluZDp0aGlzPXtiY2NGaWVsZH1cbiAgICAgICAgICAgICAgaGlkZGVuPXtfdGhpcy5zaG93X2JjYyAmJlxuICAgICAgICAgICAgICAgICFfdGhpcy5zaG93X2JjY19idXR0b24gJiZcbiAgICAgICAgICAgICAgICAhIV90aGlzLnNob3dfdG99XG4gICAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2hvd19iY2MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzUHJvcHMgPSBfdGhpcztcbiAgICAgICAgICAgICAgfX0+QkNDPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7I2lmIF90aGlzLnNob3dfY2N9XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNjLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPG55bGFzLWNvbnRhY3RzLXNlYXJjaFxuICAgICAgICAgICAgICBkYXRhLWN5PVwiY2MtZmllbGRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNDOlwiXG4gICAgICAgICAgICAgIGNvbnRhY3RzPXtjY31cbiAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2UuY2N9XG4gICAgICAgICAgICAgIGNoYW5nZT17aGFuZGxlQ29udGFjdHNDaGFuZ2UoXCJjY1wiKX0gLz5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiY29tcG9zZXItYnRuIGNjLWJ0blwiXG4gICAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Rm9jdXMoY2NGaWVsZCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2hvd19jYyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzUHJvcHMgPSBfdGhpcztcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInJlbW92ZSBjYXJib24gY29weSBmaWVsZFwiPlxuICAgICAgICAgICAgICA8Q2xvc2VJY29uIGNsYXNzPVwiQ2xvc2VJY29uXCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB7L2lmfVxuICAgICAgICB7I2lmIF90aGlzLnNob3dfYmNjfVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxueWxhcy1jb250YWN0cy1zZWFyY2hcbiAgICAgICAgICAgICAgZGF0YS1jeT1cImJjYy1maWVsZFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQkNDOlwiXG4gICAgICAgICAgICAgIGNvbnRhY3RzPXtiY2N9XG4gICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlLmJjY31cbiAgICAgICAgICAgICAgY2hhbmdlPXtoYW5kbGVDb250YWN0c0NoYW5nZShcImJjY1wiKX0gLz5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiY29tcG9zZXItYnRuIGNjLWJ0blwiXG4gICAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Rm9jdXMoYmNjRmllbGQpO1xuICAgICAgICAgICAgICAgIF90aGlzLnNob3dfYmNjID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQcm9wcyA9IF90aGlzO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwicmVtb3ZlIGJsaW5kIGNhcmJvbiBjb3B5IGZpZWxkXCI+XG4gICAgICAgICAgICAgIDxDbG9zZUljb24gY2xhc3M9XCJDbG9zZUljb25cIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvaWZ9XG5cbiAgICAgICAgPCEtLSBTdWJqZWN0IC0tPlxuICAgICAgICB7I2lmIF90aGlzLnNob3dfc3ViamVjdH1cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5FbWFpbCBzdWJqZWN0PC9zcGFuPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdWJqZWN0XCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJzdWJqZWN0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3N1YmplY3R9XG4gICAgICAgICAgICAgIG5hbWU9XCJzdWJqZWN0XCJcbiAgICAgICAgICAgICAgb246aW5wdXQ9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIHsvaWZ9XG5cbiAgICAgICAgPCEtLSBIVE1MIEVkaXRvciAtLT5cbiAgICAgICAgPG55bGFzLWh0bWwtZWRpdG9yXG4gICAgICAgICAgZGF0YS1jeT1cImh0bWwtZWRpdG9yXCJcbiAgICAgICAgICBodG1sPXttZXNzYWdlLmJvZHkgfHwgdGVtcGxhdGV9XG4gICAgICAgICAgb25jaGFuZ2U9e2hhbmRsZUJvZHlDaGFuZ2V9XG4gICAgICAgICAgZm9jdXNfYm9keV9vbmxvYWQ9e190aGlzLmZvY3VzX2JvZHlfb25sb2FkfVxuICAgICAgICAgIHJlcGxhY2VfZmllbGRzPXtfdGhpcy5yZXBsYWNlX2ZpZWxkc31cbiAgICAgICAgICBzaG93X2VkaXRvcl90b29sYmFyPXtfdGhpcy5zaG93X2VkaXRvcl90b29sYmFyfVxuICAgICAgICAgIG9uOmtleWRvd249e2hhbmRsZUtleURvd259IC8+XG4gICAgICAgIHsjaWYgJGF0dGFjaG1lbnRzLmxlbmd0aH1cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibnlsYXMtYXR0YWNobWVudHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdHRhY2htZW50cy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdHRhY2htZW50cy1jYXB0aW9uXCI+QXR0YWNobWVudHM6PC9kaXY+XG5cbiAgICAgICAgICAgICAgeyNlYWNoICRhdHRhY2htZW50cyBhcyBmaWxlQXR0YWNobWVudH1cbiAgICAgICAgICAgICAgICA8bnlsYXMtY29tcG9zZXItYXR0YWNobWVudFxuICAgICAgICAgICAgICAgICAgYXR0YWNobWVudD17ZmlsZUF0dGFjaG1lbnR9XG4gICAgICAgICAgICAgICAgICByZW1vdmU9e2hhbmRsZVJlbW92ZUZpbGV9IC8+XG4gICAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB7L2lmfVxuICAgICAgPC9tYWluPlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwic2VuZC1idG5cIlxuICAgICAgICAgICAgb246Y2xpY2s9e2hhbmRsZVNlbmR9XG4gICAgICAgICAgICBkaXNhYmxlZD17IXNlbmRFbmFibGVkfT5cbiAgICAgICAgICAgIHtzZW5kQnV0dG9uVGV4dH1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsjaWYgX3RoaXMuc2hvd19zYXZlX2FzX2RyYWZ0fVxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGZvcj1cInNhdmUtZHJhZnRcIlxuICAgICAgICAgICAgY2xhc3M9XCJjb21wb3Nlci1idG4gc2F2ZS1kcmFmdFwiXG4gICAgICAgICAgICB0aXRsZT1cIlNhdmUgRW1haWwgQXMgRHJhZnRcIlxuICAgICAgICAgICAgb246Y2xpY2s9e2hhbmRsZVNhdmVEcmFmdH0+XG4gICAgICAgICAgICA8RHJhZnRJY29uIGNsYXNzPVwiRm9vdGVySWNvblwiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5TYXZlIERyYWZ0PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7L2lmfVxuICAgICAgICB7I2lmIF90aGlzLnNob3dfYXR0YWNobWVudF9idXR0b24gJiYgKGlkIHx8IHVwbG9hZEZpbGUpfVxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgZm9yPVwiZmlsZS11cGxvYWRcIlxuICAgICAgICAgICAgY2xhc3M9XCJjb21wb3Nlci1idG4gZmlsZS11cGxvYWRcIlxuICAgICAgICAgICAgdGl0bGU9XCJBdHRhY2ggRmlsZXMgKHVwIHRvIHttYXhGaWxlU2l6ZX1NQilcIlxuICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCI+XG4gICAgICAgICAgICA8QXR0YWNobWVudEljb24gY2xhc3M9XCJGb290ZXJJY29uXCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPkF0dGFjaCBGaWxlczwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIHsjaWYgX3RoaXMuc2hvd19tYXhfZmlsZV9zaXplfVxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtc2l6ZVwiPlxuICAgICAgICAgICAgICA8c3Bhbj5NYXggZmlsZSBzaXplOiB7bWF4RmlsZVNpemV9TUI8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7L2lmfVxuICAgICAgICB7L2lmfVxuXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBoaWRkZW5cbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgIGlkPVwiZmlsZS11cGxvYWRcIlxuICAgICAgICAgICAgb246Y2hhbmdlPXtoYW5kbGVGaWxlc0NoYW5nZX0gLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9mb290ZXI+XG4gICAgICA8IS0tIERhdGUgUGlja2VyIENvbXBvbmVudCAtLT5cbiAgICAgIHsjaWYgc2hvd0RhdGVwaWNrZXJ9XG4gICAgICAgIDxueWxhcy1jb21wb3Nlci1kYXRlcGlja2VyLW1vZGFsIGNsb3NlPXtkYXRlUGlja2VyQ2xvc2V9IHtzY2hlZHVsZX0gLz5cbiAgICAgIHsvaWZ9XG4gICAgICA8IS0tIERhdGVwaWNrZXIgQWxlcnQgKGlmIG1lc3NhZ2UgaXMgc2NoZWR1bGVkKSAtLT5cbiAgICAgIHsjaWYgbWVzc2FnZS5zZW5kX2F0ICYmICFzZW5kRXJyb3IgJiYgIXNlbmRTdWNjZXNzfVxuICAgICAgICA8bnlsYXMtY29tcG9zZXItYWxlcnQtYmFyXG4gICAgICAgICAgdHlwZT1cImluZm9cIlxuICAgICAgICAgIGRpc21pc3NpYmxlPXt0cnVlfVxuICAgICAgICAgIG9uZGlzbWlzcz17cmVtb3ZlU2NoZWR1bGV9PlxuICAgICAgICAgIFNlbmQgc2NoZWR1bGVkIGZvclxuICAgICAgICAgIDxzcGFuPntmb3JtYXREYXRlKG5ldyBEYXRlKGRhdGVwaWNrZXJUaW1lc3RhbXApKX08L3NwYW4+XG4gICAgICAgIDwvbnlsYXMtY29tcG9zZXItYWxlcnQtYmFyPlxuICAgICAgey9pZn1cbiAgICAgIDwhLS0gQWxlcnRzIC0tPlxuICAgICAgeyNpZiBzZW5kRXJyb3J9XG4gICAgICAgIDxueWxhcy1jb21wb3Nlci1hbGVydC1iYXIgdHlwZT1cImRhbmdlclwiIGRpc21pc3NpYmxlPXt0cnVlfT5cbiAgICAgICAgICBFcnJvcjogRmFpbGVkIHRvIHNlbmQgdGhlIG1lc3NhZ2UuXG4gICAgICAgIDwvbnlsYXMtY29tcG9zZXItYWxlcnQtYmFyPlxuICAgICAgey9pZn1cbiAgICAgIHsjaWYgc2VuZFN1Y2Nlc3N9XG4gICAgICAgIDxueWxhcy1jb21wb3Nlci1hbGVydC1iYXIgdHlwZT1cInN1Y2Nlc3NcIiBkaXNtaXNzaWJsZT17dHJ1ZX0+XG4gICAgICAgICAgTWVzc2FnZSBzZW50IHN1Y2Nlc3NmdWxseSFcbiAgICAgICAgPC9ueWxhcy1jb21wb3Nlci1hbGVydC1iYXI+XG4gICAgICB7L2lmfVxuICAgICAgeyNpZiBzYXZlRXJyb3J9XG4gICAgICAgIDxueWxhcy1jb21wb3Nlci1hbGVydC1iYXIgdHlwZT1cImRhbmdlclwiIGRpc21pc3NpYmxlPXt0cnVlfT5cbiAgICAgICAgICBFcnJvcjogRmFpbGVkIHRvIHNhdmUgdGhlIGRyYWZ0LlxuICAgICAgICA8L255bGFzLWNvbXBvc2VyLWFsZXJ0LWJhcj5cbiAgICAgIHsvaWZ9XG4gICAgICB7I2lmIHNhdmVTdWNjZXNzfVxuICAgICAgICA8bnlsYXMtY29tcG9zZXItYWxlcnQtYmFyIHR5cGU9XCJzdWNjZXNzXCIgZGlzbWlzc2libGU9e3RydWV9PlxuICAgICAgICAgIE1lc3NhZ2UgZHJhZnQgc2F2ZWQgc3VjY2Vzc2Z1bGx5IVxuICAgICAgICA8L255bGFzLWNvbXBvc2VyLWFsZXJ0LWJhcj5cbiAgICAgIHsvaWZ9XG4gICAgey9pZn1cbiAgPC9kaXY+XG57L2lmfVxuIl0sIm5hbWVzIjpbIkJvbGRJY29uIiwiSXRhbGljSWNvbiIsIlVuZGVybGluZUljb24iLCJKdXN0aWZ5TGVmdEljb24iLCJKdXN0aWZ5UmlnaHRJY29uIiwiSnVzdGlmeUNlbnRlckljb24iLCJKdXN0aWZ5SWNvbiIsIkxpc3RJY29uIiwiQnVsbGV0SWNvbiIsIkxpbmtJY29uIiwidGhpcyIsImluaXRpYWxpemUiLCJfX3NwcmVhZFByb3BzIiwiX19zcHJlYWRWYWx1ZXMiXSwibWFwcGluZ3MiOiIrT0FBYSxJQUFpQixPQUFPLGVBQWUsT0FBTyxLQUN6RCxPQUFPLGdCQUVULE9BQU8sZUFBZSxPQUFTLENBQUMsS0FBaUIsSUFBUyxJQUNwRCxnQkFBZSxJQUFJLFNBR2hCLElBQWUsRUFBTSxHQUFHLElDUGpDLFlBQWdCLEVBRWhCLFdBQWdCLEVBQUssRUFBSyxDQUV0QixTQUFXLEtBQUssR0FDWixFQUFJLEdBQUssRUFBSSxHQUNqQixNQUFPLEdBVVgsWUFBYSxFQUFJLENBQ2IsTUFBTyxLQUVYLGFBQXdCLENBQ3BCLE1BQU8sUUFBTyxPQUFPLE1BRXpCLFlBQWlCLEVBQUssQ0FDbEIsRUFBSSxRQUFRLElBRWhCLFlBQXFCLEVBQU8sQ0FDeEIsTUFBTyxPQUFPLElBQVUsV0FFNUIsWUFBd0IsRUFBRyxFQUFHLENBQzFCLE1BQU8sSUFBSyxFQUFJLEdBQUssRUFBSSxJQUFNLEdBQU8sR0FBSyxNQUFP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
