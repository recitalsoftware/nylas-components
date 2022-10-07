(function (le, B) {
  typeof exports == "object" && typeof module != "undefined"
    ? (module.exports = B())
    : typeof define == "function" && define.amd
    ? define(B)
    : ((le = typeof globalThis != "undefined" ? globalThis : le || self),
      (le.app = B()));
})(this, function () {
  "use strict";
  const le = window.customElements.define.bind(window.customElements);
  window.customElements.define = (t, ...e) => {
    if (!customElements.get(t)) return le(t, ...e);
  };
  function B() {}
  function he(t) {
    return t();
  }
  function ye() {
    return Object.create(null);
  }
  function K(t) {
    t.forEach(he);
  }
  function we(t) {
    return typeof t == "function";
  }
  function Ie(t, e) {
    return t != t ? e == e : t !== e;
  }
  function Pe(t) {
    return Object.keys(t).length === 0;
  }
  function u(t, e) {
    t.appendChild(e);
  }
  function V(t, e, l) {
    t.insertBefore(e, l || null);
  }
  function W(t) {
    t.parentNode.removeChild(t);
  }
  function k(t) {
    return document.createElement(t);
  }
  function O(t) {
    return document.createTextNode(t);
  }
  function N() {
    return O(" ");
  }
  function Me() {
    return O("");
  }
  function Q(t, e, l, s) {
    return t.addEventListener(e, l, s), () => t.removeEventListener(e, l, s);
  }
  function x(t, e, l) {
    l == null
      ? t.removeAttribute(e)
      : t.getAttribute(e) !== l && t.setAttribute(e, l);
  }
  function Oe(t) {
    return Array.from(t.childNodes);
  }
  function Z(t, e) {
    (e = "" + e), t.wholeText !== e && (t.data = e);
  }
  function oe(t, e) {
    for (let l = 0; l < t.options.length; l += 1) {
      const s = t.options[l];
      if (s.__value === e) {
        s.selected = !0;
        return;
      }
    }
    t.selectedIndex = -1;
  }
  function ee(t, e, l) {
    t.classList[l ? "add" : "remove"](e);
  }
  function Ue(t) {
    const e = {};
    for (const l of t) e[l.name] = l.value;
    return e;
  }
  let be;
  function ne(t) {
    be = t;
  }
  const ie = [],
    ae = [],
    re = [],
    xe = [],
    De = Promise.resolve();
  let pe = !1;
  function He() {
    pe || ((pe = !0), De.then(q));
  }
  function Je() {
    return He(), De;
  }
  function ge(t) {
    re.push(t);
  }
  const _e = new Set();
  let ce = 0;
  function q() {
    const t = be;
    do {
      for (; ce < ie.length; ) {
        const e = ie[ce];
        ce++, ne(e), Re(e.$$);
      }
      for (ne(null), ie.length = 0, ce = 0; ae.length; ) ae.pop()();
      for (let e = 0; e < re.length; e += 1) {
        const l = re[e];
        _e.has(l) || (_e.add(l), l());
      }
      re.length = 0;
    } while (ie.length);
    for (; xe.length; ) xe.pop()();
    (pe = !1), _e.clear(), ne(t);
  }
  function Re(t) {
    if (t.fragment !== null) {
      t.update(), K(t.before_update);
      const e = t.dirty;
      (t.dirty = [-1]),
        t.fragment && t.fragment.p(t.ctx, e),
        t.after_update.forEach(ge);
    }
  }
  const Be = new Set();
  function Te(t, e) {
    t && t.i && (Be.delete(t), t.i(e));
  }
  function ve(t, e) {
    t.d(1), e.delete(t.key);
  }
  function me(t, e, l, s, b, f, c, h, r, n, o, g) {
    let m = t.length,
      _ = f.length,
      a = m;
    const w = {};
    for (; a--; ) w[t[a].key] = a;
    const T = [],
      L = new Map(),
      E = new Map();
    for (a = _; a--; ) {
      const y = g(b, f, a),
        D = l(y);
      let H = c.get(D);
      H ? s && H.p(y, e) : ((H = n(D, y)), H.c()),
        L.set(D, (T[a] = H)),
        D in w && E.set(D, Math.abs(a - w[D]));
    }
    const A = new Set(),
      R = new Set();
    function S(y) {
      Te(y, 1), y.m(h, o), c.set(y.key, y), (o = y.first), _--;
    }
    for (; m && _; ) {
      const y = T[_ - 1],
        D = t[m - 1],
        H = y.key,
        I = D.key;
      y === D
        ? ((o = y.first), m--, _--)
        : L.has(I)
        ? !c.has(H) || A.has(H)
          ? S(y)
          : R.has(I)
          ? m--
          : E.get(H) > E.get(I)
          ? (R.add(H), S(y))
          : (A.add(I), m--)
        : (r(D, c), m--);
    }
    for (; m--; ) {
      const y = t[m];
      L.has(y.key) || r(y, c);
    }
    for (; _; ) S(T[_ - 1]);
    return T;
  }
  function Ve(t, e, l, s) {
    const { fragment: b, on_mount: f, on_destroy: c, after_update: h } = t.$$;
    b && b.m(e, l),
      s ||
        ge(() => {
          const r = f.map(he).filter(we);
          c ? c.push(...r) : K(r), (t.$$.on_mount = []);
        }),
      h.forEach(ge);
  }
  function We(t, e) {
    const l = t.$$;
    l.fragment !== null &&
      (K(l.on_destroy),
      l.fragment && l.fragment.d(e),
      (l.on_destroy = l.fragment = null),
      (l.ctx = []));
  }
  function Xe(t, e) {
    t.$$.dirty[0] === -1 && (ie.push(t), He(), t.$$.dirty.fill(0)),
      (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
  }
  function qe(t, e, l, s, b, f, c, h = [-1]) {
    const r = be;
    ne(t);
    const n = (t.$$ = {
      fragment: null,
      ctx: null,
      props: f,
      update: B,
      not_equal: b,
      bound: ye(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(e.context || (r ? r.$$.context : [])),
      callbacks: ye(),
      dirty: h,
      skip_bound: !1,
      root: e.target || r.$$.root,
    });
    c && c(n.root);
    let o = !1;
    if (
      ((n.ctx = l
        ? l(t, e.props || {}, (g, m, ..._) => {
            const a = _.length ? _[0] : m;
            return (
              n.ctx &&
                b(n.ctx[g], (n.ctx[g] = a)) &&
                (!n.skip_bound && n.bound[g] && n.bound[g](a), o && Xe(t, g)),
              m
            );
          })
        : []),
      n.update(),
      (o = !0),
      K(n.before_update),
      (n.fragment = s ? s(n.ctx) : !1),
      e.target)
    ) {
      if (e.hydrate) {
        const g = Oe(e.target);
        n.fragment && n.fragment.l(g), g.forEach(W);
      } else n.fragment && n.fragment.c();
      e.intro && Te(t.$$.fragment),
        Ve(t, e.target, e.anchor, e.customElement),
        q();
    }
    ne(r);
  }
  let Ee;
  typeof HTMLElement == "function" &&
    (Ee = class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        const { on_mount: t } = this.$$;
        this.$$.on_disconnect = t.map(he).filter(we);
        for (const e in this.$$.slotted) this.appendChild(this.$$.slotted[e]);
      }
      attributeChangedCallback(t, e, l) {
        this[t] = l;
      }
      disconnectedCallback() {
        K(this.$$.on_disconnect);
      }
      $destroy() {
        We(this, 1), (this.$destroy = B);
      }
      $on(t, e) {
        const l = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return (
          l.push(e),
          () => {
            const s = l.indexOf(e);
            s !== -1 && l.splice(s, 1);
          }
        );
      }
      $set(t) {
        this.$$set &&
          !Pe(t) &&
          ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
      }
    });
  function Se(t, e, l) {
    const s = t.slice();
    return (s[41] = e[l]), s;
  }
  function Ce(t, e, l) {
    const s = t.slice();
    return (s[44] = e[l]), s;
  }
  function Ae(t, e, l) {
    const s = t.slice();
    return (s[47] = e[l]), s;
  }
  function Fe(t, e) {
    let l,
      s,
      b = e[47].day + "",
      f,
      c,
      h,
      r,
      n;
    function o() {
      return e[24](e[47]);
    }
    return {
      key: t,
      first: null,
      c() {
        (l = k("div")),
          (s = k("button")),
          (f = O(b)),
          (h = N()),
          (s.disabled = c = e[47].isDisabled),
          ee(s, "label", !e[47].activeMonth),
          ee(s, "current", e[47].activeMonth),
          ee(s, "selected", e[47].isSelected),
          (this.first = l);
      },
      m(g, m) {
        V(g, l, m),
          u(l, s),
          u(s, f),
          u(l, h),
          r || ((n = Q(s, "click", o)), (r = !0));
      },
      p(g, m) {
        (e = g),
          m[0] & 4 && b !== (b = e[47].day + "") && Z(f, b),
          m[0] & 4 && c !== (c = e[47].isDisabled) && (s.disabled = c),
          m[0] & 4 && ee(s, "label", !e[47].activeMonth),
          m[0] & 4 && ee(s, "current", e[47].activeMonth),
          m[0] & 4 && ee(s, "selected", e[47].isSelected);
      },
      d(g) {
        g && W(l), (r = !1), n();
      },
    };
  }
  function Le(t) {
    let e,
      l,
      s,
      b,
      f,
      c = [],
      h = new Map(),
      r,
      n,
      o,
      g = [],
      m = new Map(),
      _,
      a,
      w,
      T,
      L,
      E,
      A,
      R,
      S,
      y,
      D,
      H,
      I,
      J,
      X = t[3];
    const P = (d) => d[44];
    for (let d = 0; d < X.length; d += 1) {
      let p = Ce(t, X, d),
        F = P(p);
      h.set(F, (c[d] = Ne(F, p)));
    }
    let U = t[4];
    const $ = (d) => d[41];
    for (let d = 0; d < U.length; d += 1) {
      let p = Se(t, U, d),
        F = $(p);
      m.set(F, (g[d] = Ye(F, p)));
    }
    return {
      c() {
        (e = k("div")),
          (l = k("p")),
          (l.textContent = "Set time"),
          (s = N()),
          (b = k("div")),
          (f = k("select"));
        for (let d = 0; d < c.length; d += 1) c[d].c();
        (n = N()), (o = k("select"));
        for (let d = 0; d < g.length; d += 1) g[d].c();
        (a = N()),
          (w = k("div")),
          (T = k("button")),
          (L = O("AM")),
          (R = N()),
          (S = k("button")),
          (y = O("PM")),
          x(f, "class", "picker"),
          x(o, "class", "picker"),
          x(b, "class", "time"),
          x(
            T,
            "class",
            (E =
              t[1].getHours() < 12
                ? "clock-button clock-button-active"
                : "clock-button"),
          ),
          (T.disabled = A = t[8]()),
          x(
            S,
            "class",
            (D =
              t[1].getHours() >= 12
                ? "clock-button clock-button-active"
                : "clock-button"),
          ),
          (S.disabled = H = t[7]()),
          x(w, "class", "clock"),
          x(e, "class", "timepicker");
      },
      m(d, p) {
        V(d, e, p), u(e, l), u(e, s), u(e, b), u(b, f);
        for (let F = 0; F < c.length; F += 1) c[F].m(f, null);
        oe(f, t[1].getHours()), t[25](f), u(b, n), u(b, o);
        for (let F = 0; F < g.length; F += 1) g[F].m(o, null);
        oe(o, t[1].getMinutes()),
          t[27](o),
          u(e, a),
          u(e, w),
          u(w, T),
          u(T, L),
          u(w, R),
          u(w, S),
          u(S, y),
          I ||
            ((J = [
              Q(f, "blur", t[26]),
              Q(o, "blur", t[28]),
              Q(T, "click", t[29]),
              Q(S, "click", t[30]),
            ]),
            (I = !0));
      },
      p(d, p) {
        p[0] & 10 &&
          ((X = d[3]), (c = me(c, p, P, 1, d, X, h, f, ve, Ne, null, Ce))),
          p[0] & 2 && r !== (r = d[1].getHours()) && oe(f, d[1].getHours()),
          p[0] & 16 &&
            ((U = d[4]), (g = me(g, p, $, 1, d, U, m, o, ve, Ye, null, Se))),
          p[0] & 2 && _ !== (_ = d[1].getMinutes()) && oe(o, d[1].getMinutes()),
          p[0] & 2 &&
            E !==
              (E =
                d[1].getHours() < 12
                  ? "clock-button clock-button-active"
                  : "clock-button") &&
            x(T, "class", E),
          p[0] & 256 && A !== (A = d[8]()) && (T.disabled = A),
          p[0] & 2 &&
            D !==
              (D =
                d[1].getHours() >= 12
                  ? "clock-button clock-button-active"
                  : "clock-button") &&
            x(S, "class", D),
          p[0] & 128 && H !== (H = d[7]()) && (S.disabled = H);
      },
      d(d) {
        d && W(e);
        for (let p = 0; p < c.length; p += 1) c[p].d();
        t[25](null);
        for (let p = 0; p < g.length; p += 1) g[p].d();
        t[27](null), (I = !1), K(J);
      },
    };
  }
  function Ge(t) {
    let e,
      l = t[44].text + "",
      s,
      b,
      f,
      c;
    return {
      c() {
        (e = k("option")),
          (s = O(l)),
          (b = N()),
          (e.__value = f = t[44].value),
          (e.value = e.__value),
          (e.disabled = c = t[44].disabled);
      },
      m(h, r) {
        V(h, e, r), u(e, s), u(e, b);
      },
      p(h, r) {
        r[0] & 8 && l !== (l = h[44].text + "") && Z(s, l),
          r[0] & 8 &&
            f !== (f = h[44].value) &&
            ((e.__value = f), (e.value = e.__value)),
          r[0] & 8 && c !== (c = h[44].disabled) && (e.disabled = c);
      },
      d(h) {
        h && W(e);
      },
    };
  }
  function Ke(t) {
    let e,
      l = t[44].text + "",
      s,
      b,
      f,
      c;
    return {
      c() {
        (e = k("option")),
          (s = O(l)),
          (b = N()),
          (e.__value = f = t[44].value),
          (e.value = e.__value),
          (e.disabled = c = t[44].disabled);
      },
      m(h, r) {
        V(h, e, r), u(e, s), u(e, b);
      },
      p(h, r) {
        r[0] & 8 && l !== (l = h[44].text + "") && Z(s, l),
          r[0] & 8 &&
            f !== (f = h[44].value) &&
            ((e.__value = f), (e.value = e.__value)),
          r[0] & 8 && c !== (c = h[44].disabled) && (e.disabled = c);
      },
      d(h) {
        h && W(e);
      },
    };
  }
  function Ne(t, e) {
    let l, s, b, f;
    function c(n, o) {
      if (
        (o[0] & 10 && (s = null),
        o[0] & 10 && (b = null),
        s == null && (s = n[1].getHours() >= 12 && n[44].value >= 12),
        s)
      )
        return Ke;
      if ((b == null && (b = n[1].getHours() < 12 && n[44].value < 12), b))
        return Ge;
    }
    let h = c(e, [-1, -1]),
      r = h && h(e);
    return {
      key: t,
      first: null,
      c() {
        (l = Me()), r && r.c(), (f = Me()), (this.first = l);
      },
      m(n, o) {
        V(n, l, o), r && r.m(n, o), V(n, f, o);
      },
      p(n, o) {
        (e = n),
          h === (h = c(e, o)) && r
            ? r.p(e, o)
            : (r && r.d(1),
              (r = h && h(e)),
              r && (r.c(), r.m(f.parentNode, f)));
      },
      d(n) {
        n && W(l), r && r.d(n), n && W(f);
      },
    };
  }
  function Ye(t, e) {
    let l,
      s = e[41].text + "",
      b,
      f,
      c,
      h;
    return {
      key: t,
      first: null,
      c() {
        (l = k("option")),
          (b = O(s)),
          (f = N()),
          (l.__value = c = e[41].value),
          (l.value = l.__value),
          (l.disabled = h = e[41].disabled),
          (this.first = l);
      },
      m(r, n) {
        V(r, l, n), u(l, b), u(l, f);
      },
      p(r, n) {
        (e = r),
          n[0] & 16 && s !== (s = e[41].text + "") && Z(b, s),
          n[0] & 16 &&
            c !== (c = e[41].value) &&
            ((l.__value = c), (l.value = l.__value)),
          n[0] & 16 && h !== (h = e[41].disabled) && (l.disabled = h);
      },
      d(r) {
        r && W(l);
      },
    };
  }
  function Qe(t) {
    let e,
      l,
      s,
      b,
      f,
      c = (t[0] ? " and time" : "") + "",
      h,
      r,
      n,
      o,
      g,
      m = t[11][t[10]] + "",
      _,
      a,
      w,
      T,
      L,
      E,
      A,
      R,
      S,
      y,
      D,
      H,
      I,
      J,
      X,
      P,
      U,
      $,
      d,
      p = [],
      F = new Map(),
      ue,
      se,
      de,
      te = t[2];
    const fe = (M) => M[47];
    for (let M = 0; M < te.length; M += 1) {
      let Y = Ae(t, te, M),
        G = fe(Y);
      F.set(G, (p[M] = Fe(G, Y)));
    }
    let j = t[0] && Le(t);
    return {
      c() {
        (e = k("div")),
          (l = k("div")),
          (s = k("div")),
          (b = k("h2")),
          (f = O(`Pick a date
        `)),
          (h = O(c)),
          (r = N()),
          (n = k("div")),
          (o = k("div")),
          (g = k("h3")),
          (_ = O(m)),
          (a = N()),
          (w = O(t[9])),
          (T = N()),
          (L = k("div")),
          (E = k("div")),
          (A = k("button")),
          (A.textContent = "\u2039"),
          (R = N()),
          (S = k("span")),
          (S.textContent = "Previous month"),
          (y = N()),
          (D = k("div")),
          (H = k("button")),
          (H.textContent = "\u203A"),
          (I = N()),
          (J = k("span")),
          (J.textContent = "Next month"),
          (X = N()),
          (P = k("div")),
          (U = k("div")),
          (U.innerHTML = `<div class="day label">SUN</div> 
          <div class="day label">MON</div> 
          <div class="day label">TUE</div> 
          <div class="day label">WED</div> 
          <div class="day label">THU</div> 
          <div class="day label">FRI</div> 
          <div class="day label">SAT</div>`),
          ($ = N()),
          (d = k("div"));
        for (let M = 0; M < p.length; M += 1) p[M].c();
        (ue = N()),
          j && j.c(),
          (this.c = B),
          x(b, "class", "datepicker-header"),
          x(o, "class", "current-month"),
          x(A, "class", "datepicker-btn"),
          x(S, "class", "tooltiptext"),
          x(E, "class", "tooltip"),
          x(H, "class", "datepicker-btn"),
          x(J, "class", "tooltiptext"),
          x(D, "class", "tooltip"),
          x(n, "class", "datepicker-controls"),
          x(U, "class", "label-days"),
          x(d, "id", "calendarDays"),
          x(d, "class", "days"),
          x(P, "class", "datepicker-dates"),
          x(s, "class", "datepicker-wrapper"),
          x(l, "class", "datepicker"),
          x(l, "id", "datepicker");
      },
      m(M, Y) {
        V(M, e, Y),
          u(e, l),
          u(l, s),
          u(s, b),
          u(b, f),
          u(b, h),
          u(s, r),
          u(s, n),
          u(n, o),
          u(o, g),
          u(g, _),
          u(g, a),
          u(g, w),
          u(n, T),
          u(n, L),
          u(L, E),
          u(E, A),
          u(E, R),
          u(E, S),
          u(L, y),
          u(L, D),
          u(D, H),
          u(D, I),
          u(D, J),
          u(s, X),
          u(s, P),
          u(P, U),
          u(P, $),
          u(P, d);
        for (let G = 0; G < p.length; G += 1) p[G].m(d, null);
        u(P, ue),
          j && j.m(P, null),
          se ||
            ((de = [Q(A, "click", t[22]), Q(H, "click", t[23])]), (se = !0));
      },
      p(M, Y) {
        Y[0] & 1 && c !== (c = (M[0] ? " and time" : "") + "") && Z(h, c),
          Y[0] & 1024 && m !== (m = M[11][M[10]] + "") && Z(_, m),
          Y[0] & 512 && Z(w, M[9]),
          Y[0] & 8196 &&
            ((te = M[2]), (p = me(p, Y, fe, 1, M, te, F, d, ve, Fe, null, Ae))),
          M[0]
            ? j
              ? j.p(M, Y)
              : ((j = Le(M)), j.c(), j.m(P, null))
            : j && (j.d(1), (j = null));
      },
      i: B,
      o: B,
      d(M) {
        M && W(e);
        for (let Y = 0; Y < p.length; Y += 1) p[Y].d();
        j && j.d(), (se = !1), K(de);
      },
    };
  }
  const je = 8634e4;
  function v(t) {
    let e = "" + (t.getMonth() + 1),
      l = "" + t.getDate(),
      s = t.getFullYear();
    return (
      e.length < 2 && (e = "0" + e),
      l.length < 2 && (l = "0" + l),
      [s, e, l].join("-")
    );
  }
  function Ze(t, e, l) {
    let s, b, f, c;
    const h = [
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
    let { value: r = new Date() } = e,
      { min: n } = e,
      { max: o } = e,
      { timepicker: g = !1 } = e,
      { change: m } = e,
      _ = new Date(),
      a = new Date(),
      w = [],
      T = [],
      L = [],
      E,
      A;
    const R = () => {
        r && l(1, (a = r)), g && (P(), $());
      },
      S = (i, C, ke = 1) => new Date(i, C + ke, 0).getDate(),
      y = (i) => {
        l(21, (_ = new Date(_.setMonth(_.getMonth() + i)))), F();
      },
      D = (i) => {
        const C = new Date(i);
        g && (C.setHours(parseInt(E.value)), C.setMinutes(parseInt(A.value))),
          l(1, (a = new Date(C))),
          n && v(n) === v(i) && l(1, (a = new Date(n))),
          o && v(o) === v(i) && l(1, (a = new Date(o))),
          p(),
          g && (U(), d());
      },
      H = () => {
        l(1, (a = new Date(a.setHours(parseInt(E.value))))),
          n && !o
            ? v(n) === v(a) &&
              l(1, (a = new Date(a.setMinutes(n.getMinutes()))))
            : o && !n
            ? v(o) === v(a) &&
              l(1, (a = new Date(a.setMinutes(o.getMinutes()))))
            : o &&
              n &&
              (v(n) === v(a)
                ? l(1, (a = new Date(a.setMinutes(n.getMinutes()))))
                : v(o) === v(a) &&
                  l(1, (a = new Date(a.setMinutes(o.getMinutes()))))),
          d();
      },
      I = () => {
        l(1, (a = new Date(a.setMinutes(parseInt(A.value)))));
      },
      J = (i) => {
        l(1, (a = new Date(a.setHours(a.getHours() + i))));
      },
      X = (i) => (
        (i = i > 12 ? i - 12 : i === 0 ? 12 : i),
        `${i}`.length < 2 ? `0${i}` : `${i}`
      ),
      P = () => {
        const i = [];
        for (let C = 0; C < 24; C++)
          i.push({ value: C, text: X(C), disabled: !1 });
        l(3, (T = i)), U();
      },
      U = () =>
        l(
          3,
          (T = T.map(
            (i) => (
              (i.disabled = !1),
              n && !o
                ? v(n) === v(a) && (i.disabled = i.value < n.getHours())
                : o && !n
                ? v(o) === v(a) && (i.disabled = i.value > o.getHours())
                : o &&
                  n &&
                  (v(n) === v(a)
                    ? (i.disabled = i.value < n.getHours())
                    : v(o) === v(a) && (i.disabled = i.value > o.getHours())),
              i
            ),
          )),
        ),
      $ = () => {
        const i = [];
        for (let C = 0; C < 60; C++)
          i.push({
            value: C,
            text: `${C}`.length < 2 ? `0${C}` : `${C}`,
            disabled: !1,
          });
        l(4, (L = i)), d();
      },
      d = () =>
        l(
          4,
          (L = L.map(
            (i) => (
              (i.disabled = !1),
              n && !o
                ? v(n) === v(a) &&
                  a.getHours() === n.getHours() &&
                  (i.disabled = i.value < n.getMinutes())
                : o && !n
                ? v(o) === v(a) &&
                  a.getHours() === o.getHours() &&
                  (i.disabled = i.value > o.getMinutes())
                : o &&
                  n &&
                  (v(n) === v(a) && a.getHours() === n.getHours()
                    ? (i.disabled = i.value < n.getMinutes())
                    : v(o) === v(a) &&
                      a.getHours() === o.getHours() &&
                      (i.disabled = i.value > o.getMinutes())),
              i
            ),
          )),
        ),
      p = () =>
        l(
          2,
          (w = w.map(
            (i) => (
              n && !o && (i.isDisabled = i.date.getTime() + je < n.getTime()),
              o && !n && (i.isDisabled = i.date.getTime() > o.getTime()),
              o &&
                n &&
                (i.isDisabled =
                  i.date.getTime() + je < n.getTime() ||
                  i.date.getTime() > o.getTime()),
              (i.isSelected = v(i.date) === v(a) && !i.isDisabled),
              i
            ),
          )),
        ),
      F = () => {
        l(2, (w = [])), l(21, (_ = new Date(_.setDate(1))));
        const i = S(_.getFullYear(), _.getMonth()),
          C = S(_.getFullYear(), _.getMonth(), 0);
        for (let z = _.getDay(); z > 0; z--)
          l(
            2,
            (w = [
              ...w,
              {
                day: C - z + 1,
                activeMonth: !1,
                date: new Date(_.getFullYear(), _.getMonth() - 1, C - z + 1),
              },
            ]),
          );
        for (let z = 1; z <= i; z++)
          l(
            2,
            (w = [
              ...w,
              {
                day: z,
                activeMonth: !0,
                date: new Date(_.getFullYear(), _.getMonth(), z),
              },
            ]),
          );
        const ke = 42 - w.length;
        for (let z = 1; z <= ke; z++)
          l(
            2,
            (w = [
              ...w,
              {
                day: z,
                activeMonth: !1,
                date: new Date(_.getFullYear(), _.getMonth() + 1, z),
              },
            ]),
          );
        p();
      };
    F();
    const ue = () => y(-1),
      se = () => y(1),
      de = (i) => D(i.date);
    function te(i) {
      ae[i ? "unshift" : "push"](() => {
        (E = i), l(5, E), l(3, T);
      });
    }
    const fe = () => H();
    function j(i) {
      ae[i ? "unshift" : "push"](() => {
        (A = i), l(6, A), l(4, L);
      });
    }
    const M = () => I(),
      Y = () => a.getHours() >= 12 && J(-12),
      G = () => a.getHours() < 12 && J(12);
    return (
      (t.$$set = (i) => {
        "value" in i && l(17, (r = i.value)),
          "min" in i && l(18, (n = i.min)),
          "max" in i && l(19, (o = i.max)),
          "timepicker" in i && l(0, (g = i.timepicker)),
          "change" in i && l(20, (m = i.change));
      }),
      (t.$$.update = () => {
        t.$$.dirty[0] & 1048578 &&
          a &&
          m &&
          Je().then(() => {
            m(a);
          }),
          t.$$.dirty[0] & 2097152 && l(10, (s = _.getMonth())),
          t.$$.dirty[0] & 2097152 && l(9, (b = _.getFullYear())),
          t.$$.dirty[0] & 4 &&
            w.filter((i) => i.activeMonth && !i.isDisabled).length,
          t.$$.dirty[0] & 917505 && (r || n || o || g) && (R(), p()),
          t.$$.dirty[0] & 262146 &&
            l(
              8,
              (f = () => {
                if (n) return v(n) === v(a) ? n.getHours() >= 12 : !1;
              }),
            ),
          t.$$.dirty[0] & 524290 &&
            l(
              7,
              (c = () => {
                if (o) return v(o) === v(a) ? o.getHours() < 12 : !1;
              }),
            );
      }),
      [
        g,
        a,
        w,
        T,
        L,
        E,
        A,
        c,
        f,
        b,
        s,
        h,
        y,
        D,
        H,
        I,
        J,
        r,
        n,
        o,
        m,
        _,
        ue,
        se,
        de,
        te,
        fe,
        j,
        M,
        Y,
        G,
      ]
    );
  }
  class ze extends Ee {
    constructor(e) {
      super();
      (this.shadowRoot.innerHTML =
        "<style>.datepicker{font-family:var(--font);width:100%;font-size:var(--font-size);background:var(--background);font-family:sans-serif;font-size:14px}.datepicker-wrapper{padding:1rem}.datepicker-dates{display:flex;flex-direction:column}.label-days{flex:1;display:flex;flex-wrap:wrap}.datepicker-header{padding:10px;color:var(--text);margin:0px}.datepicker-controls{display:flex;align-items:center;justify-content:space-between;padding:10px}.datepicker-btn{height:31px;width:31px;background:var(--background);font-size:18px;cursor:pointer;font-weight:700;border-radius:50px;border:none;color:var(--text)}.datepicker-btn:hover{background:var(--primary-dark) !important;color:var(--button-active-text)}.datepicker-btn:focus{outline:none}.label-days>div{flex-basis:14.2857142857%;text-align:center}.days{width:100%;display:flex;flex-wrap:wrap}.label{color:var(--text-light);font-size:10px}.current{font-weight:700}.current-month h3{color:var(--text);margin:0px}.selected{background:var(--primary) !important;color:var(--button-active-text) !important;font-weight:700}.days div{flex-basis:14.2857142857%;text-align:center;margin-top:3px;box-sizing:border-box;margin-bottom:3px}.days div button{border-radius:50px;background:var(--background);color:var(--text);width:30px;font-size:12px;font-weight:500;height:30px;padding:0;text-align:center;cursor:pointer;border:none}.days div button:focus{outline:0}.days div button:hover{background:var(--primary-dark);color:var(--button-active-text) !important}.days div button:disabled{color:var(--text-light);opacity:0.6;cursor:not-allowed}.timepicker{display:flex;justify-content:space-between;align-items:center;padding:10px 10px}.timepicker div{display:flex}.timepicker p{margin:0;color:var(--text-light)}.picker{border-radius:4px;border:none;color:var(--text);padding:5px 0px;background:var(--background);margin:0px 3px;width:100%}.clock{border-radius:4px;display:flex;width:75px;background:var(--background)}.time{flex:1}.clock-button{border-radius:4px;color:#a4aaad;background:none;cursor:pointer;flex:1;padding:5px 0px;border:none;outline:0}.clock-button:disabled{cursor:not-allowed}.clock-button-active{color:#fff;background:var(--primary)}.tooltip{position:relative;display:inline-block}.tooltip .tooltiptext{opacity:0;visibility:hidden;width:120px;background-color:white;color:#000;text-align:center;border-radius:6px;padding:5px 0;box-shadow:0 1px 10px rgba(0, 0, 0, 0.11), 0 3px 10px rgba(0, 0, 0, 0.12);position:absolute;z-index:1;top:110%;left:50%;margin-left:-60px;transition:opacity 0.3s;transition-delay:1s}.tooltip:hover .tooltiptext{opacity:1;visibility:visible}</style>"),
        qe(
          this,
          {
            target: this.shadowRoot,
            props: Ue(this.attributes),
            customElement: !0,
          },
          Ze,
          Qe,
          Ie,
          { value: 17, min: 18, max: 19, timepicker: 0, change: 20 },
          null,
          [-1, -1],
        ),
        e &&
          (e.target && V(e.target, this, e.anchor),
          e.props && (this.$set(e.props), q()));
    }
    static get observedAttributes() {
      return ["value", "min", "max", "timepicker", "change"];
    }
    get value() {
      return this.$$.ctx[17];
    }
    set value(e) {
      this.$$set({ value: e }), q();
    }
    get min() {
      return this.$$.ctx[18];
    }
    set min(e) {
      this.$$set({ min: e }), q();
    }
    get max() {
      return this.$$.ctx[19];
    }
    set max(e) {
      this.$$set({ max: e }), q();
    }
    get timepicker() {
      return this.$$.ctx[0];
    }
    set timepicker(e) {
      this.$$set({ timepicker: e }), q();
    }
    get change() {
      return this.$$.ctx[20];
    }
    set change(e) {
      this.$$set({ change: e }), q();
    }
  }
  return customElements.define("nylas-datepicker", ze), ze;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbW1vbnMvc3JjL2RlZmluZS1jb21wb25lbnQtcGF0Y2gudHMiLCIuLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL2ludGVybmFsL2luZGV4Lm1qcyIsInNyYy9EYXRlcGlja2VyLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgb3JpZ2luYWxEZWZpbmUgPSB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lLmJpbmQoXG4gIHdpbmRvdy5jdXN0b21FbGVtZW50cyxcbik7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lID0gKG5hbWU6IHN0cmluZywgLi4uYXJncykgPT4ge1xuICBpZiAoY3VzdG9tRWxlbWVudHMuZ2V0KG5hbWUpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJldHVybiBvcmlnaW5hbERlZmluZShuYW1lLCAuLi5hcmdzKTtcbn07XG4iLCJmdW5jdGlvbiBub29wKCkgeyB9XG5jb25zdCBpZGVudGl0eSA9IHggPT4geDtcbmZ1bmN0aW9uIGFzc2lnbih0YXIsIHNyYykge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBmb3IgKGNvbnN0IGsgaW4gc3JjKVxuICAgICAgICB0YXJba10gPSBzcmNba107XG4gICAgcmV0dXJuIHRhcjtcbn1cbmZ1bmN0aW9uIGlzX3Byb21pc2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn1cbmZ1bmN0aW9uIGFkZF9sb2NhdGlvbihlbGVtZW50LCBmaWxlLCBsaW5lLCBjb2x1bW4sIGNoYXIpIHtcbiAgICBlbGVtZW50Ll9fc3ZlbHRlX21ldGEgPSB7XG4gICAgICAgIGxvYzogeyBmaWxlLCBsaW5lLCBjb2x1bW4sIGNoYXIgfVxuICAgIH07XG59XG5mdW5jdGlvbiBydW4oZm4pIHtcbiAgICByZXR1cm4gZm4oKTtcbn1cbmZ1bmN0aW9uIGJsYW5rX29iamVjdCgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsKTtcbn1cbmZ1bmN0aW9uIHJ1bl9hbGwoZm5zKSB7XG4gICAgZm5zLmZvckVhY2gocnVuKTtcbn1cbmZ1bmN0aW9uIGlzX2Z1bmN0aW9uKHRoaW5nKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmZ1bmN0aW9uIHNhZmVfbm90X2VxdWFsKGEsIGIpIHtcbiAgICByZXR1cm4gYSAhPSBhID8gYiA9PSBiIDogYSAhPT0gYiB8fCAoKGEgJiYgdHlwZW9mIGEgPT09ICdvYmplY3QnKSB8fCB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5sZXQgc3JjX3VybF9lcXVhbF9hbmNob3I7XG5mdW5jdGlvbiBzcmNfdXJsX2VxdWFsKGVsZW1lbnRfc3JjLCB1cmwpIHtcbiAgICBpZiAoIXNyY191cmxfZXF1YWxfYW5jaG9yKSB7XG4gICAgICAgIHNyY191cmxfZXF1YWxfYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIH1cbiAgICBzcmNfdXJsX2VxdWFsX2FuY2hvci5ocmVmID0gdXJsO1xuICAgIHJldHVybiBlbGVtZW50X3NyYyA9PT0gc3JjX3VybF9lcXVhbF9hbmNob3IuaHJlZjtcbn1cbmZ1bmN0aW9uIG5vdF9lcXVhbChhLCBiKSB7XG4gICAgcmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGI7XG59XG5mdW5jdGlvbiBpc19lbXB0eShvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPT09IDA7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9zdG9yZShzdG9yZSwgbmFtZSkge1xuICAgIGlmIChzdG9yZSAhPSBudWxsICYmIHR5cGVvZiBzdG9yZS5zdWJzY3JpYmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAnJHtuYW1lfScgaXMgbm90IGEgc3RvcmUgd2l0aCBhICdzdWJzY3JpYmUnIG1ldGhvZGApO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN1YnNjcmliZShzdG9yZSwgLi4uY2FsbGJhY2tzKSB7XG4gICAgaWYgKHN0b3JlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgfVxuICAgIGNvbnN0IHVuc3ViID0gc3RvcmUuc3Vic2NyaWJlKC4uLmNhbGxiYWNrcyk7XG4gICAgcmV0dXJuIHVuc3ViLnVuc3Vic2NyaWJlID8gKCkgPT4gdW5zdWIudW5zdWJzY3JpYmUoKSA6IHVuc3ViO1xufVxuZnVuY3Rpb24gZ2V0X3N0b3JlX3ZhbHVlKHN0b3JlKSB7XG4gICAgbGV0IHZhbHVlO1xuICAgIHN1YnNjcmliZShzdG9yZSwgXyA9PiB2YWx1ZSA9IF8pKCk7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gY29tcG9uZW50X3N1YnNjcmliZShjb21wb25lbnQsIHN0b3JlLCBjYWxsYmFjaykge1xuICAgIGNvbXBvbmVudC4kJC5vbl9kZXN0cm95LnB1c2goc3Vic2NyaWJlKHN0b3JlLCBjYWxsYmFjaykpO1xufVxuZnVuY3Rpb24gY3JlYXRlX3Nsb3QoZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBmbikge1xuICAgIGlmIChkZWZpbml0aW9uKSB7XG4gICAgICAgIGNvbnN0IHNsb3RfY3R4ID0gZ2V0X3Nsb3RfY29udGV4dChkZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGZuKTtcbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb25bMF0oc2xvdF9jdHgpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldF9zbG90X2NvbnRleHQoZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBmbikge1xuICAgIHJldHVybiBkZWZpbml0aW9uWzFdICYmIGZuXG4gICAgICAgID8gYXNzaWduKCQkc2NvcGUuY3R4LnNsaWNlKCksIGRlZmluaXRpb25bMV0oZm4oY3R4KSkpXG4gICAgICAgIDogJCRzY29wZS5jdHg7XG59XG5mdW5jdGlvbiBnZXRfc2xvdF9jaGFuZ2VzKGRlZmluaXRpb24sICQkc2NvcGUsIGRpcnR5LCBmbikge1xuICAgIGlmIChkZWZpbml0aW9uWzJdICYmIGZuKSB7XG4gICAgICAgIGNvbnN0IGxldHMgPSBkZWZpbml0aW9uWzJdKGZuKGRpcnR5KSk7XG4gICAgICAgIGlmICgkJHNjb3BlLmRpcnR5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBsZXRzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbGV0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lcmdlZCA9IFtdO1xuICAgICAgICAgICAgY29uc3QgbGVuID0gTWF0aC5tYXgoJCRzY29wZS5kaXJ0eS5sZW5ndGgsIGxldHMubGVuZ3RoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRbaV0gPSAkJHNjb3BlLmRpcnR5W2ldIHwgbGV0c1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtZXJnZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICQkc2NvcGUuZGlydHkgfCBsZXRzO1xuICAgIH1cbiAgICByZXR1cm4gJCRzY29wZS5kaXJ0eTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZV9zbG90X2Jhc2Uoc2xvdCwgc2xvdF9kZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIHNsb3RfY2hhbmdlcywgZ2V0X3Nsb3RfY29udGV4dF9mbikge1xuICAgIGlmIChzbG90X2NoYW5nZXMpIHtcbiAgICAgICAgY29uc3Qgc2xvdF9jb250ZXh0ID0gZ2V0X3Nsb3RfY29udGV4dChzbG90X2RlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZ2V0X3Nsb3RfY29udGV4dF9mbik7XG4gICAgICAgIHNsb3QucChzbG90X2NvbnRleHQsIHNsb3RfY2hhbmdlcyk7XG4gICAgfVxufVxuZnVuY3Rpb24gdXBkYXRlX3Nsb3Qoc2xvdCwgc2xvdF9kZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGRpcnR5LCBnZXRfc2xvdF9jaGFuZ2VzX2ZuLCBnZXRfc2xvdF9jb250ZXh0X2ZuKSB7XG4gICAgY29uc3Qgc2xvdF9jaGFuZ2VzID0gZ2V0X3Nsb3RfY2hhbmdlcyhzbG90X2RlZmluaXRpb24sICQkc2NvcGUsIGRpcnR5LCBnZXRfc2xvdF9jaGFuZ2VzX2ZuKTtcbiAgICB1cGRhdGVfc2xvdF9iYXNlKHNsb3QsIHNsb3RfZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBzbG90X2NoYW5nZXMsIGdldF9zbG90X2NvbnRleHRfZm4pO1xufVxuZnVuY3Rpb24gZ2V0X2FsbF9kaXJ0eV9mcm9tX3Njb3BlKCQkc2NvcGUpIHtcbiAgICBpZiAoJCRzY29wZS5jdHgubGVuZ3RoID4gMzIpIHtcbiAgICAgICAgY29uc3QgZGlydHkgPSBbXTtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gJCRzY29wZS5jdHgubGVuZ3RoIC8gMzI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRpcnR5W2ldID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpcnR5O1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG59XG5mdW5jdGlvbiBleGNsdWRlX2ludGVybmFsX3Byb3BzKHByb3BzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBrIGluIHByb3BzKVxuICAgICAgICBpZiAoa1swXSAhPT0gJyQnKVxuICAgICAgICAgICAgcmVzdWx0W2tdID0gcHJvcHNba107XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGNvbXB1dGVfcmVzdF9wcm9wcyhwcm9wcywga2V5cykge1xuICAgIGNvbnN0IHJlc3QgPSB7fTtcbiAgICBrZXlzID0gbmV3IFNldChrZXlzKTtcbiAgICBmb3IgKGNvbnN0IGsgaW4gcHJvcHMpXG4gICAgICAgIGlmICgha2V5cy5oYXMoaykgJiYga1swXSAhPT0gJyQnKVxuICAgICAgICAgICAgcmVzdFtrXSA9IHByb3BzW2tdO1xuICAgIHJldHVybiByZXN0O1xufVxuZnVuY3Rpb24gY29tcHV0ZV9zbG90cyhzbG90cykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNsb3RzKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG9uY2UoZm4pIHtcbiAgICBsZXQgcmFuID0gZmFsc2U7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIGlmIChyYW4pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHJhbiA9IHRydWU7XG4gICAgICAgIGZuLmNhbGwodGhpcywgLi4uYXJncyk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIG51bGxfdG9fZW1wdHkodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG59XG5mdW5jdGlvbiBzZXRfc3RvcmVfdmFsdWUoc3RvcmUsIHJldCwgdmFsdWUpIHtcbiAgICBzdG9yZS5zZXQodmFsdWUpO1xuICAgIHJldHVybiByZXQ7XG59XG5jb25zdCBoYXNfcHJvcCA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xuZnVuY3Rpb24gYWN0aW9uX2Rlc3Ryb3llcihhY3Rpb25fcmVzdWx0KSB7XG4gICAgcmV0dXJuIGFjdGlvbl9yZXN1bHQgJiYgaXNfZnVuY3Rpb24oYWN0aW9uX3Jlc3VsdC5kZXN0cm95KSA/IGFjdGlvbl9yZXN1bHQuZGVzdHJveSA6IG5vb3A7XG59XG5cbmNvbnN0IGlzX2NsaWVudCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xubGV0IG5vdyA9IGlzX2NsaWVudFxuICAgID8gKCkgPT4gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpXG4gICAgOiAoKSA9PiBEYXRlLm5vdygpO1xubGV0IHJhZiA9IGlzX2NsaWVudCA/IGNiID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShjYikgOiBub29wO1xuLy8gdXNlZCBpbnRlcm5hbGx5IGZvciB0ZXN0aW5nXG5mdW5jdGlvbiBzZXRfbm93KGZuKSB7XG4gICAgbm93ID0gZm47XG59XG5mdW5jdGlvbiBzZXRfcmFmKGZuKSB7XG4gICAgcmFmID0gZm47XG59XG5cbmNvbnN0IHRhc2tzID0gbmV3IFNldCgpO1xuZnVuY3Rpb24gcnVuX3Rhc2tzKG5vdykge1xuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGlmICghdGFzay5jKG5vdykpIHtcbiAgICAgICAgICAgIHRhc2tzLmRlbGV0ZSh0YXNrKTtcbiAgICAgICAgICAgIHRhc2suZigpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHRhc2tzLnNpemUgIT09IDApXG4gICAgICAgIHJhZihydW5fdGFza3MpO1xufVxuLyoqXG4gKiBGb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5IVxuICovXG5mdW5jdGlvbiBjbGVhcl9sb29wcygpIHtcbiAgICB0YXNrcy5jbGVhcigpO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHRhc2sgdGhhdCBydW5zIG9uIGVhY2ggcmFmIGZyYW1lXG4gKiB1bnRpbCBpdCByZXR1cm5zIGEgZmFsc3kgdmFsdWUgb3IgaXMgYWJvcnRlZFxuICovXG5mdW5jdGlvbiBsb29wKGNhbGxiYWNrKSB7XG4gICAgbGV0IHRhc2s7XG4gICAgaWYgKHRhc2tzLnNpemUgPT09IDApXG4gICAgICAgIHJhZihydW5fdGFza3MpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb21pc2U6IG5ldyBQcm9taXNlKGZ1bGZpbGwgPT4ge1xuICAgICAgICAgICAgdGFza3MuYWRkKHRhc2sgPSB7IGM6IGNhbGxiYWNrLCBmOiBmdWxmaWxsIH0pO1xuICAgICAgICB9KSxcbiAgICAgICAgYWJvcnQoKSB7XG4gICAgICAgICAgICB0YXNrcy5kZWxldGUodGFzayk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vLyBUcmFjayB3aGljaCBub2RlcyBhcmUgY2xhaW1lZCBkdXJpbmcgaHlkcmF0aW9uLiBVbmNsYWltZWQgbm9kZXMgY2FuIHRoZW4gYmUgcmVtb3ZlZCBmcm9tIHRoZSBET01cbi8vIGF0IHRoZSBlbmQgb2YgaHlkcmF0aW9uIHdpdGhvdXQgdG91Y2hpbmcgdGhlIHJlbWFpbmluZyBub2Rlcy5cbmxldCBpc19oeWRyYXRpbmcgPSBmYWxzZTtcbmZ1bmN0aW9uIHN0YXJ0X2h5ZHJhdGluZygpIHtcbiAgICBpc19oeWRyYXRpbmcgPSB0cnVlO1xufVxuZnVuY3Rpb24gZW5kX2h5ZHJhdGluZygpIHtcbiAgICBpc19oeWRyYXRpbmcgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIHVwcGVyX2JvdW5kKGxvdywgaGlnaCwga2V5LCB2YWx1ZSkge1xuICAgIC8vIFJldHVybiBmaXJzdCBpbmRleCBvZiB2YWx1ZSBsYXJnZXIgdGhhbiBpbnB1dCB2YWx1ZSBpbiB0aGUgcmFuZ2UgW2xvdywgaGlnaClcbiAgICB3aGlsZSAobG93IDwgaGlnaCkge1xuICAgICAgICBjb25zdCBtaWQgPSBsb3cgKyAoKGhpZ2ggLSBsb3cpID4+IDEpO1xuICAgICAgICBpZiAoa2V5KG1pZCkgPD0gdmFsdWUpIHtcbiAgICAgICAgICAgIGxvdyA9IG1pZCArIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBoaWdoID0gbWlkO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsb3c7XG59XG5mdW5jdGlvbiBpbml0X2h5ZHJhdGUodGFyZ2V0KSB7XG4gICAgaWYgKHRhcmdldC5oeWRyYXRlX2luaXQpXG4gICAgICAgIHJldHVybjtcbiAgICB0YXJnZXQuaHlkcmF0ZV9pbml0ID0gdHJ1ZTtcbiAgICAvLyBXZSBrbm93IHRoYXQgYWxsIGNoaWxkcmVuIGhhdmUgY2xhaW1fb3JkZXIgdmFsdWVzIHNpbmNlIHRoZSB1bmNsYWltZWQgaGF2ZSBiZWVuIGRldGFjaGVkIGlmIHRhcmdldCBpcyBub3QgPGhlYWQ+XG4gICAgbGV0IGNoaWxkcmVuID0gdGFyZ2V0LmNoaWxkTm9kZXM7XG4gICAgLy8gSWYgdGFyZ2V0IGlzIDxoZWFkPiwgdGhlcmUgbWF5IGJlIGNoaWxkcmVuIHdpdGhvdXQgY2xhaW1fb3JkZXJcbiAgICBpZiAodGFyZ2V0Lm5vZGVOYW1lID09PSAnSEVBRCcpIHtcbiAgICAgICAgY29uc3QgbXlDaGlsZHJlbiA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAobm9kZS5jbGFpbV9vcmRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbXlDaGlsZHJlbi5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNoaWxkcmVuID0gbXlDaGlsZHJlbjtcbiAgICB9XG4gICAgLypcbiAgICAqIFJlb3JkZXIgY2xhaW1lZCBjaGlsZHJlbiBvcHRpbWFsbHkuXG4gICAgKiBXZSBjYW4gcmVvcmRlciBjbGFpbWVkIGNoaWxkcmVuIG9wdGltYWxseSBieSBmaW5kaW5nIHRoZSBsb25nZXN0IHN1YnNlcXVlbmNlIG9mXG4gICAgKiBub2RlcyB0aGF0IGFyZSBhbHJlYWR5IGNsYWltZWQgaW4gb3JkZXIgYW5kIG9ubHkgbW92aW5nIHRoZSByZXN0LiBUaGUgbG9uZ2VzdFxuICAgICogc3Vic2VxdWVuY2Ugc3Vic2VxdWVuY2Ugb2Ygbm9kZXMgdGhhdCBhcmUgY2xhaW1lZCBpbiBvcmRlciBjYW4gYmUgZm91bmQgYnlcbiAgICAqIGNvbXB1dGluZyB0aGUgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIG9mIC5jbGFpbV9vcmRlciB2YWx1ZXMuXG4gICAgKlxuICAgICogVGhpcyBhbGdvcml0aG0gaXMgb3B0aW1hbCBpbiBnZW5lcmF0aW5nIHRoZSBsZWFzdCBhbW91bnQgb2YgcmVvcmRlciBvcGVyYXRpb25zXG4gICAgKiBwb3NzaWJsZS5cbiAgICAqXG4gICAgKiBQcm9vZjpcbiAgICAqIFdlIGtub3cgdGhhdCwgZ2l2ZW4gYSBzZXQgb2YgcmVvcmRlcmluZyBvcGVyYXRpb25zLCB0aGUgbm9kZXMgdGhhdCBkbyBub3QgbW92ZVxuICAgICogYWx3YXlzIGZvcm0gYW4gaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSwgc2luY2UgdGhleSBkbyBub3QgbW92ZSBhbW9uZyBlYWNoIG90aGVyXG4gICAgKiBtZWFuaW5nIHRoYXQgdGhleSBtdXN0IGJlIGFscmVhZHkgb3JkZXJlZCBhbW9uZyBlYWNoIG90aGVyLiBUaHVzLCB0aGUgbWF4aW1hbFxuICAgICogc2V0IG9mIG5vZGVzIHRoYXQgZG8gbm90IG1vdmUgZm9ybSBhIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZS5cbiAgICAqL1xuICAgIC8vIENvbXB1dGUgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlXG4gICAgLy8gbTogc3Vic2VxdWVuY2UgbGVuZ3RoIGogPT4gaW5kZXggayBvZiBzbWFsbGVzdCB2YWx1ZSB0aGF0IGVuZHMgYW4gaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBvZiBsZW5ndGggalxuICAgIGNvbnN0IG0gPSBuZXcgSW50MzJBcnJheShjaGlsZHJlbi5sZW5ndGggKyAxKTtcbiAgICAvLyBQcmVkZWNlc3NvciBpbmRpY2VzICsgMVxuICAgIGNvbnN0IHAgPSBuZXcgSW50MzJBcnJheShjaGlsZHJlbi5sZW5ndGgpO1xuICAgIG1bMF0gPSAtMTtcbiAgICBsZXQgbG9uZ2VzdCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gY2hpbGRyZW5baV0uY2xhaW1fb3JkZXI7XG4gICAgICAgIC8vIEZpbmQgdGhlIGxhcmdlc3Qgc3Vic2VxdWVuY2UgbGVuZ3RoIHN1Y2ggdGhhdCBpdCBlbmRzIGluIGEgdmFsdWUgbGVzcyB0aGFuIG91ciBjdXJyZW50IHZhbHVlXG4gICAgICAgIC8vIHVwcGVyX2JvdW5kIHJldHVybnMgZmlyc3QgZ3JlYXRlciB2YWx1ZSwgc28gd2Ugc3VidHJhY3Qgb25lXG4gICAgICAgIC8vIHdpdGggZmFzdCBwYXRoIGZvciB3aGVuIHdlIGFyZSBvbiB0aGUgY3VycmVudCBsb25nZXN0IHN1YnNlcXVlbmNlXG4gICAgICAgIGNvbnN0IHNlcUxlbiA9ICgobG9uZ2VzdCA+IDAgJiYgY2hpbGRyZW5bbVtsb25nZXN0XV0uY2xhaW1fb3JkZXIgPD0gY3VycmVudCkgPyBsb25nZXN0ICsgMSA6IHVwcGVyX2JvdW5kKDEsIGxvbmdlc3QsIGlkeCA9PiBjaGlsZHJlblttW2lkeF1dLmNsYWltX29yZGVyLCBjdXJyZW50KSkgLSAxO1xuICAgICAgICBwW2ldID0gbVtzZXFMZW5dICsgMTtcbiAgICAgICAgY29uc3QgbmV3TGVuID0gc2VxTGVuICsgMTtcbiAgICAgICAgLy8gV2UgY2FuIGd1YXJhbnRlZSB0aGF0IGN1cnJlbnQgaXMgdGhlIHNtYWxsZXN0IHZhbHVlLiBPdGhlcndpc2UsIHdlIHdvdWxkIGhhdmUgZ2VuZXJhdGVkIGEgbG9uZ2VyIHNlcXVlbmNlLlxuICAgICAgICBtW25ld0xlbl0gPSBpO1xuICAgICAgICBsb25nZXN0ID0gTWF0aC5tYXgobmV3TGVuLCBsb25nZXN0KTtcbiAgICB9XG4gICAgLy8gVGhlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBvZiBub2RlcyAoaW5pdGlhbGx5IHJldmVyc2VkKVxuICAgIGNvbnN0IGxpcyA9IFtdO1xuICAgIC8vIFRoZSByZXN0IG9mIHRoZSBub2Rlcywgbm9kZXMgdGhhdCB3aWxsIGJlIG1vdmVkXG4gICAgY29uc3QgdG9Nb3ZlID0gW107XG4gICAgbGV0IGxhc3QgPSBjaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgIGZvciAobGV0IGN1ciA9IG1bbG9uZ2VzdF0gKyAxOyBjdXIgIT0gMDsgY3VyID0gcFtjdXIgLSAxXSkge1xuICAgICAgICBsaXMucHVzaChjaGlsZHJlbltjdXIgLSAxXSk7XG4gICAgICAgIGZvciAoOyBsYXN0ID49IGN1cjsgbGFzdC0tKSB7XG4gICAgICAgICAgICB0b01vdmUucHVzaChjaGlsZHJlbltsYXN0XSk7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdC0tO1xuICAgIH1cbiAgICBmb3IgKDsgbGFzdCA+PSAwOyBsYXN0LS0pIHtcbiAgICAgICAgdG9Nb3ZlLnB1c2goY2hpbGRyZW5bbGFzdF0pO1xuICAgIH1cbiAgICBsaXMucmV2ZXJzZSgpO1xuICAgIC8vIFdlIHNvcnQgdGhlIG5vZGVzIGJlaW5nIG1vdmVkIHRvIGd1YXJhbnRlZSB0aGF0IHRoZWlyIGluc2VydGlvbiBvcmRlciBtYXRjaGVzIHRoZSBjbGFpbSBvcmRlclxuICAgIHRvTW92ZS5zb3J0KChhLCBiKSA9PiBhLmNsYWltX29yZGVyIC0gYi5jbGFpbV9vcmRlcik7XG4gICAgLy8gRmluYWxseSwgd2UgbW92ZSB0aGUgbm9kZXNcbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCB0b01vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgd2hpbGUgKGogPCBsaXMubGVuZ3RoICYmIHRvTW92ZVtpXS5jbGFpbV9vcmRlciA+PSBsaXNbal0uY2xhaW1fb3JkZXIpIHtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbmNob3IgPSBqIDwgbGlzLmxlbmd0aCA/IGxpc1tqXSA6IG51bGw7XG4gICAgICAgIHRhcmdldC5pbnNlcnRCZWZvcmUodG9Nb3ZlW2ldLCBhbmNob3IpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFwcGVuZCh0YXJnZXQsIG5vZGUpIHtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG59XG5mdW5jdGlvbiBhcHBlbmRfc3R5bGVzKHRhcmdldCwgc3R5bGVfc2hlZXRfaWQsIHN0eWxlcykge1xuICAgIGNvbnN0IGFwcGVuZF9zdHlsZXNfdG8gPSBnZXRfcm9vdF9mb3Jfc3R5bGUodGFyZ2V0KTtcbiAgICBpZiAoIWFwcGVuZF9zdHlsZXNfdG8uZ2V0RWxlbWVudEJ5SWQoc3R5bGVfc2hlZXRfaWQpKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgc3R5bGUuaWQgPSBzdHlsZV9zaGVldF9pZDtcbiAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBzdHlsZXM7XG4gICAgICAgIGFwcGVuZF9zdHlsZXNoZWV0KGFwcGVuZF9zdHlsZXNfdG8sIHN0eWxlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRfcm9vdF9mb3Jfc3R5bGUobm9kZSkge1xuICAgIGlmICghbm9kZSlcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIGNvbnN0IHJvb3QgPSBub2RlLmdldFJvb3ROb2RlID8gbm9kZS5nZXRSb290Tm9kZSgpIDogbm9kZS5vd25lckRvY3VtZW50O1xuICAgIGlmIChyb290ICYmIHJvb3QuaG9zdCkge1xuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGUub3duZXJEb2N1bWVudDtcbn1cbmZ1bmN0aW9uIGFwcGVuZF9lbXB0eV9zdHlsZXNoZWV0KG5vZGUpIHtcbiAgICBjb25zdCBzdHlsZV9lbGVtZW50ID0gZWxlbWVudCgnc3R5bGUnKTtcbiAgICBhcHBlbmRfc3R5bGVzaGVldChnZXRfcm9vdF9mb3Jfc3R5bGUobm9kZSksIHN0eWxlX2VsZW1lbnQpO1xuICAgIHJldHVybiBzdHlsZV9lbGVtZW50LnNoZWV0O1xufVxuZnVuY3Rpb24gYXBwZW5kX3N0eWxlc2hlZXQobm9kZSwgc3R5bGUpIHtcbiAgICBhcHBlbmQobm9kZS5oZWFkIHx8IG5vZGUsIHN0eWxlKTtcbn1cbmZ1bmN0aW9uIGFwcGVuZF9oeWRyYXRpb24odGFyZ2V0LCBub2RlKSB7XG4gICAgaWYgKGlzX2h5ZHJhdGluZykge1xuICAgICAgICBpbml0X2h5ZHJhdGUodGFyZ2V0KTtcbiAgICAgICAgaWYgKCh0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCA9PT0gdW5kZWZpbmVkKSB8fCAoKHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkICE9PSBudWxsKSAmJiAodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQucGFyZW50RWxlbWVudCAhPT0gdGFyZ2V0KSkpIHtcbiAgICAgICAgICAgIHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkID0gdGFyZ2V0LmZpcnN0Q2hpbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2tpcCBub2RlcyBvZiB1bmRlZmluZWQgb3JkZXJpbmdcbiAgICAgICAgd2hpbGUgKCh0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCAhPT0gbnVsbCkgJiYgKHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkLmNsYWltX29yZGVyID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCA9IHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlICE9PSB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCkge1xuICAgICAgICAgICAgLy8gV2Ugb25seSBpbnNlcnQgaWYgdGhlIG9yZGVyaW5nIG9mIHRoaXMgbm9kZSBzaG91bGQgYmUgbW9kaWZpZWQgb3IgdGhlIHBhcmVudCBub2RlIGlzIG5vdCB0YXJnZXRcbiAgICAgICAgICAgIGlmIChub2RlLmNsYWltX29yZGVyICE9PSB1bmRlZmluZWQgfHwgbm9kZS5wYXJlbnROb2RlICE9PSB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlKG5vZGUsIHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkID0gbm9kZS5uZXh0U2libGluZztcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChub2RlLnBhcmVudE5vZGUgIT09IHRhcmdldCB8fCBub2RlLm5leHRTaWJsaW5nICE9PSBudWxsKSB7XG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBpbnNlcnQodGFyZ2V0LCBub2RlLCBhbmNob3IpIHtcbiAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlKG5vZGUsIGFuY2hvciB8fCBudWxsKTtcbn1cbmZ1bmN0aW9uIGluc2VydF9oeWRyYXRpb24odGFyZ2V0LCBub2RlLCBhbmNob3IpIHtcbiAgICBpZiAoaXNfaHlkcmF0aW5nICYmICFhbmNob3IpIHtcbiAgICAgICAgYXBwZW5kX2h5ZHJhdGlvbih0YXJnZXQsIG5vZGUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChub2RlLnBhcmVudE5vZGUgIT09IHRhcmdldCB8fCBub2RlLm5leHRTaWJsaW5nICE9IGFuY2hvcikge1xuICAgICAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlKG5vZGUsIGFuY2hvciB8fCBudWxsKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZXRhY2gobm9kZSkge1xuICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbn1cbmZ1bmN0aW9uIGRlc3Ryb3lfZWFjaChpdGVyYXRpb25zLCBkZXRhY2hpbmcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXJhdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGl0ZXJhdGlvbnNbaV0pXG4gICAgICAgICAgICBpdGVyYXRpb25zW2ldLmQoZGV0YWNoaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBlbGVtZW50KG5hbWUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRfaXMobmFtZSwgaXMpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lLCB7IGlzIH0pO1xufVxuZnVuY3Rpb24gb2JqZWN0X3dpdGhvdXRfcHJvcGVydGllcyhvYmosIGV4Y2x1ZGUpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmIChoYXNfcHJvcChvYmosIGspXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAmJiBleGNsdWRlLmluZGV4T2YoaykgPT09IC0xKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB0YXJnZXRba10gPSBvYmpba107XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIHN2Z19lbGVtZW50KG5hbWUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIG5hbWUpO1xufVxuZnVuY3Rpb24gdGV4dChkYXRhKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEpO1xufVxuZnVuY3Rpb24gc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRleHQoJyAnKTtcbn1cbmZ1bmN0aW9uIGVtcHR5KCkge1xuICAgIHJldHVybiB0ZXh0KCcnKTtcbn1cbmZ1bmN0aW9uIGxpc3Rlbihub2RlLCBldmVudCwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgcmV0dXJuICgpID0+IG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBwcmV2ZW50X2RlZmF1bHQoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH07XG59XG5mdW5jdGlvbiBzdG9wX3Byb3BhZ2F0aW9uKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHNlbGYoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcylcbiAgICAgICAgICAgIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH07XG59XG5mdW5jdGlvbiB0cnVzdGVkKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChldmVudC5pc1RydXN0ZWQpXG4gICAgICAgICAgICBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gYXR0cihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpXG4gICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgZWxzZSBpZiAobm9kZS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKSAhPT0gdmFsdWUpXG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xufVxuZnVuY3Rpb24gc2V0X2F0dHJpYnV0ZXMobm9kZSwgYXR0cmlidXRlcykge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBkZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG5vZGUuX19wcm90b19fKTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzW2tleV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChrZXkgPT09ICdzdHlsZScpIHtcbiAgICAgICAgICAgIG5vZGUuc3R5bGUuY3NzVGV4dCA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChrZXkgPT09ICdfX3ZhbHVlJykge1xuICAgICAgICAgICAgbm9kZS52YWx1ZSA9IG5vZGVba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkZXNjcmlwdG9yc1trZXldICYmIGRlc2NyaXB0b3JzW2tleV0uc2V0KSB7XG4gICAgICAgICAgICBub2RlW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhdHRyKG5vZGUsIGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHNldF9zdmdfYXR0cmlidXRlcyhub2RlLCBhdHRyaWJ1dGVzKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICBhdHRyKG5vZGUsIGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZXRfY3VzdG9tX2VsZW1lbnRfZGF0YShub2RlLCBwcm9wLCB2YWx1ZSkge1xuICAgIGlmIChwcm9wIGluIG5vZGUpIHtcbiAgICAgICAgbm9kZVtwcm9wXSA9IHR5cGVvZiBub2RlW3Byb3BdID09PSAnYm9vbGVhbicgJiYgdmFsdWUgPT09ICcnID8gdHJ1ZSA6IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYXR0cihub2RlLCBwcm9wLCB2YWx1ZSk7XG4gICAgfVxufVxuZnVuY3Rpb24geGxpbmtfYXR0cihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsIGF0dHJpYnV0ZSwgdmFsdWUpO1xufVxuZnVuY3Rpb24gZ2V0X2JpbmRpbmdfZ3JvdXBfdmFsdWUoZ3JvdXAsIF9fdmFsdWUsIGNoZWNrZWQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IG5ldyBTZXQoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyb3VwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChncm91cFtpXS5jaGVja2VkKVxuICAgICAgICAgICAgdmFsdWUuYWRkKGdyb3VwW2ldLl9fdmFsdWUpO1xuICAgIH1cbiAgICBpZiAoIWNoZWNrZWQpIHtcbiAgICAgICAgdmFsdWUuZGVsZXRlKF9fdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gQXJyYXkuZnJvbSh2YWx1ZSk7XG59XG5mdW5jdGlvbiB0b19udW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09ICcnID8gbnVsbCA6ICt2YWx1ZTtcbn1cbmZ1bmN0aW9uIHRpbWVfcmFuZ2VzX3RvX2FycmF5KHJhbmdlcykge1xuICAgIGNvbnN0IGFycmF5ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5nZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgYXJyYXkucHVzaCh7IHN0YXJ0OiByYW5nZXMuc3RhcnQoaSksIGVuZDogcmFuZ2VzLmVuZChpKSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xufVxuZnVuY3Rpb24gY2hpbGRyZW4oZWxlbWVudCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGROb2Rlcyk7XG59XG5mdW5jdGlvbiBpbml0X2NsYWltX2luZm8obm9kZXMpIHtcbiAgICBpZiAobm9kZXMuY2xhaW1faW5mbyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5vZGVzLmNsYWltX2luZm8gPSB7IGxhc3RfaW5kZXg6IDAsIHRvdGFsX2NsYWltZWQ6IDAgfTtcbiAgICB9XG59XG5mdW5jdGlvbiBjbGFpbV9ub2RlKG5vZGVzLCBwcmVkaWNhdGUsIHByb2Nlc3NOb2RlLCBjcmVhdGVOb2RlLCBkb250VXBkYXRlTGFzdEluZGV4ID0gZmFsc2UpIHtcbiAgICAvLyBUcnkgdG8gZmluZCBub2RlcyBpbiBhbiBvcmRlciBzdWNoIHRoYXQgd2UgbGVuZ3RoZW4gdGhlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZVxuICAgIGluaXRfY2xhaW1faW5mbyhub2Rlcyk7XG4gICAgY29uc3QgcmVzdWx0Tm9kZSA9ICgoKSA9PiB7XG4gICAgICAgIC8vIFdlIGZpcnN0IHRyeSB0byBmaW5kIGFuIGVsZW1lbnQgYWZ0ZXIgdGhlIHByZXZpb3VzIG9uZVxuICAgICAgICBmb3IgKGxldCBpID0gbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4OyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgICAgIGlmIChwcmVkaWNhdGUobm9kZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXBsYWNlbWVudCA9IHByb2Nlc3NOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgIGlmIChyZXBsYWNlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzW2ldID0gcmVwbGFjZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZG9udFVwZGF0ZUxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBPdGhlcndpc2UsIHdlIHRyeSB0byBmaW5kIG9uZSBiZWZvcmVcbiAgICAgICAgLy8gV2UgaXRlcmF0ZSBpbiByZXZlcnNlIHNvIHRoYXQgd2UgZG9uJ3QgZ28gdG9vIGZhciBiYWNrXG4gICAgICAgIGZvciAobGV0IGkgPSBub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICAgICAgaWYgKHByZWRpY2F0ZShub2RlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VtZW50ID0gcHJvY2Vzc05vZGUobm9kZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlcGxhY2VtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXNbaV0gPSByZXBsYWNlbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFkb250VXBkYXRlTGFzdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLmNsYWltX2luZm8ubGFzdF9pbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlcGxhY2VtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2luY2Ugd2Ugc3BsaWNlZCBiZWZvcmUgdGhlIGxhc3RfaW5kZXgsIHdlIGRlY3JlYXNlIGl0XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLmNsYWltX2luZm8ubGFzdF9pbmRleC0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB3ZSBjYW4ndCBmaW5kIGFueSBtYXRjaGluZyBub2RlLCB3ZSBjcmVhdGUgYSBuZXcgb25lXG4gICAgICAgIHJldHVybiBjcmVhdGVOb2RlKCk7XG4gICAgfSkoKTtcbiAgICByZXN1bHROb2RlLmNsYWltX29yZGVyID0gbm9kZXMuY2xhaW1faW5mby50b3RhbF9jbGFpbWVkO1xuICAgIG5vZGVzLmNsYWltX2luZm8udG90YWxfY2xhaW1lZCArPSAxO1xuICAgIHJldHVybiByZXN1bHROb2RlO1xufVxuZnVuY3Rpb24gY2xhaW1fZWxlbWVudF9iYXNlKG5vZGVzLCBuYW1lLCBhdHRyaWJ1dGVzLCBjcmVhdGVfZWxlbWVudCkge1xuICAgIHJldHVybiBjbGFpbV9ub2RlKG5vZGVzLCAobm9kZSkgPT4gbm9kZS5ub2RlTmFtZSA9PT0gbmFtZSwgKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgcmVtb3ZlID0gW107XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbm9kZS5hdHRyaWJ1dGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBub2RlLmF0dHJpYnV0ZXNbal07XG4gICAgICAgICAgICBpZiAoIWF0dHJpYnV0ZXNbYXR0cmlidXRlLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlLnB1c2goYXR0cmlidXRlLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlbW92ZS5mb3JFYWNoKHYgPT4gbm9kZS5yZW1vdmVBdHRyaWJ1dGUodikpO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0sICgpID0+IGNyZWF0ZV9lbGVtZW50KG5hbWUpKTtcbn1cbmZ1bmN0aW9uIGNsYWltX2VsZW1lbnQobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMpIHtcbiAgICByZXR1cm4gY2xhaW1fZWxlbWVudF9iYXNlKG5vZGVzLCBuYW1lLCBhdHRyaWJ1dGVzLCBlbGVtZW50KTtcbn1cbmZ1bmN0aW9uIGNsYWltX3N2Z19lbGVtZW50KG5vZGVzLCBuYW1lLCBhdHRyaWJ1dGVzKSB7XG4gICAgcmV0dXJuIGNsYWltX2VsZW1lbnRfYmFzZShub2RlcywgbmFtZSwgYXR0cmlidXRlcywgc3ZnX2VsZW1lbnQpO1xufVxuZnVuY3Rpb24gY2xhaW1fdGV4dChub2RlcywgZGF0YSkge1xuICAgIHJldHVybiBjbGFpbV9ub2RlKG5vZGVzLCAobm9kZSkgPT4gbm9kZS5ub2RlVHlwZSA9PT0gMywgKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YVN0ciA9ICcnICsgZGF0YTtcbiAgICAgICAgaWYgKG5vZGUuZGF0YS5zdGFydHNXaXRoKGRhdGFTdHIpKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5kYXRhLmxlbmd0aCAhPT0gZGF0YVN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZS5zcGxpdFRleHQoZGF0YVN0ci5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5kYXRhID0gZGF0YVN0cjtcbiAgICAgICAgfVxuICAgIH0sICgpID0+IHRleHQoZGF0YSksIHRydWUgLy8gVGV4dCBub2RlcyBzaG91bGQgbm90IHVwZGF0ZSBsYXN0IGluZGV4IHNpbmNlIGl0IGlzIGxpa2VseSBub3Qgd29ydGggaXQgdG8gZWxpbWluYXRlIGFuIGluY3JlYXNpbmcgc3Vic2VxdWVuY2Ugb2YgYWN0dWFsIGVsZW1lbnRzXG4gICAgKTtcbn1cbmZ1bmN0aW9uIGNsYWltX3NwYWNlKG5vZGVzKSB7XG4gICAgcmV0dXJuIGNsYWltX3RleHQobm9kZXMsICcgJyk7XG59XG5mdW5jdGlvbiBmaW5kX2NvbW1lbnQobm9kZXMsIHRleHQsIHN0YXJ0KSB7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgbm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCAvKiBjb21tZW50IG5vZGUgKi8gJiYgbm9kZS50ZXh0Q29udGVudC50cmltKCkgPT09IHRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBub2Rlcy5sZW5ndGg7XG59XG5mdW5jdGlvbiBjbGFpbV9odG1sX3RhZyhub2Rlcykge1xuICAgIC8vIGZpbmQgaHRtbCBvcGVuaW5nIHRhZ1xuICAgIGNvbnN0IHN0YXJ0X2luZGV4ID0gZmluZF9jb21tZW50KG5vZGVzLCAnSFRNTF9UQUdfU1RBUlQnLCAwKTtcbiAgICBjb25zdCBlbmRfaW5kZXggPSBmaW5kX2NvbW1lbnQobm9kZXMsICdIVE1MX1RBR19FTkQnLCBzdGFydF9pbmRleCk7XG4gICAgaWYgKHN0YXJ0X2luZGV4ID09PSBlbmRfaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBIdG1sVGFnSHlkcmF0aW9uKCk7XG4gICAgfVxuICAgIGluaXRfY2xhaW1faW5mbyhub2Rlcyk7XG4gICAgY29uc3QgaHRtbF90YWdfbm9kZXMgPSBub2Rlcy5zcGxpY2Uoc3RhcnRfaW5kZXgsIGVuZF9pbmRleCAtIHN0YXJ0X2luZGV4ICsgMSk7XG4gICAgZGV0YWNoKGh0bWxfdGFnX25vZGVzWzBdKTtcbiAgICBkZXRhY2goaHRtbF90YWdfbm9kZXNbaHRtbF90YWdfbm9kZXMubGVuZ3RoIC0gMV0pO1xuICAgIGNvbnN0IGNsYWltZWRfbm9kZXMgPSBodG1sX3RhZ19ub2Rlcy5zbGljZSgxLCBodG1sX3RhZ19ub2Rlcy5sZW5ndGggLSAxKTtcbiAgICBmb3IgKGNvbnN0IG4gb2YgY2xhaW1lZF9ub2Rlcykge1xuICAgICAgICBuLmNsYWltX29yZGVyID0gbm9kZXMuY2xhaW1faW5mby50b3RhbF9jbGFpbWVkO1xuICAgICAgICBub2Rlcy5jbGFpbV9pbmZvLnRvdGFsX2NsYWltZWQgKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBIdG1sVGFnSHlkcmF0aW9uKGNsYWltZWRfbm9kZXMpO1xufVxuZnVuY3Rpb24gc2V0X2RhdGEodGV4dCwgZGF0YSkge1xuICAgIGRhdGEgPSAnJyArIGRhdGE7XG4gICAgaWYgKHRleHQud2hvbGVUZXh0ICE9PSBkYXRhKVxuICAgICAgICB0ZXh0LmRhdGEgPSBkYXRhO1xufVxuZnVuY3Rpb24gc2V0X2lucHV0X3ZhbHVlKGlucHV0LCB2YWx1ZSkge1xuICAgIGlucHV0LnZhbHVlID0gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG59XG5mdW5jdGlvbiBzZXRfaW5wdXRfdHlwZShpbnB1dCwgdHlwZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGlucHV0LnR5cGUgPSB0eXBlO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X3N0eWxlKG5vZGUsIGtleSwgdmFsdWUsIGltcG9ydGFudCkge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICBub2RlLnN0eWxlLnJlbW92ZVByb3BlcnR5KGtleSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBub2RlLnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUsIGltcG9ydGFudCA/ICdpbXBvcnRhbnQnIDogJycpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNlbGVjdF9vcHRpb24oc2VsZWN0LCB2YWx1ZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0Lm9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gc2VsZWN0Lm9wdGlvbnNbaV07XG4gICAgICAgIGlmIChvcHRpb24uX192YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2VsZWN0LnNlbGVjdGVkSW5kZXggPSAtMTsgLy8gbm8gb3B0aW9uIHNob3VsZCBiZSBzZWxlY3RlZFxufVxuZnVuY3Rpb24gc2VsZWN0X29wdGlvbnMoc2VsZWN0LCB2YWx1ZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0Lm9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gc2VsZWN0Lm9wdGlvbnNbaV07XG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IH52YWx1ZS5pbmRleE9mKG9wdGlvbi5fX3ZhbHVlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZWxlY3RfdmFsdWUoc2VsZWN0KSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRfb3B0aW9uID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJzpjaGVja2VkJykgfHwgc2VsZWN0Lm9wdGlvbnNbMF07XG4gICAgcmV0dXJuIHNlbGVjdGVkX29wdGlvbiAmJiBzZWxlY3RlZF9vcHRpb24uX192YWx1ZTtcbn1cbmZ1bmN0aW9uIHNlbGVjdF9tdWx0aXBsZV92YWx1ZShzZWxlY3QpIHtcbiAgICByZXR1cm4gW10ubWFwLmNhbGwoc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJzpjaGVja2VkJyksIG9wdGlvbiA9PiBvcHRpb24uX192YWx1ZSk7XG59XG4vLyB1bmZvcnR1bmF0ZWx5IHRoaXMgY2FuJ3QgYmUgYSBjb25zdGFudCBhcyB0aGF0IHdvdWxkbid0IGJlIHRyZWUtc2hha2VhYmxlXG4vLyBzbyB3ZSBjYWNoZSB0aGUgcmVzdWx0IGluc3RlYWRcbmxldCBjcm9zc29yaWdpbjtcbmZ1bmN0aW9uIGlzX2Nyb3Nzb3JpZ2luKCkge1xuICAgIGlmIChjcm9zc29yaWdpbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNyb3Nzb3JpZ2luID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHZvaWQgd2luZG93LnBhcmVudC5kb2N1bWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNyb3Nzb3JpZ2luID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3Jvc3NvcmlnaW47XG59XG5mdW5jdGlvbiBhZGRfcmVzaXplX2xpc3RlbmVyKG5vZGUsIGZuKSB7XG4gICAgY29uc3QgY29tcHV0ZWRfc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIGlmIChjb21wdXRlZF9zdHlsZS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgbm9kZS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgfVxuICAgIGNvbnN0IGlmcmFtZSA9IGVsZW1lbnQoJ2lmcmFtZScpO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGJsb2NrOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgJyArXG4gICAgICAgICdvdmVyZmxvdzogaGlkZGVuOyBib3JkZXI6IDA7IG9wYWNpdHk6IDA7IHBvaW50ZXItZXZlbnRzOiBub25lOyB6LWluZGV4OiAtMTsnKTtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgaWZyYW1lLnRhYkluZGV4ID0gLTE7XG4gICAgY29uc3QgY3Jvc3NvcmlnaW4gPSBpc19jcm9zc29yaWdpbigpO1xuICAgIGxldCB1bnN1YnNjcmliZTtcbiAgICBpZiAoY3Jvc3NvcmlnaW4pIHtcbiAgICAgICAgaWZyYW1lLnNyYyA9IFwiZGF0YTp0ZXh0L2h0bWwsPHNjcmlwdD5vbnJlc2l6ZT1mdW5jdGlvbigpe3BhcmVudC5wb3N0TWVzc2FnZSgwLCcqJyl9PC9zY3JpcHQ+XCI7XG4gICAgICAgIHVuc3Vic2NyaWJlID0gbGlzdGVuKHdpbmRvdywgJ21lc3NhZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGlmcmFtZS5jb250ZW50V2luZG93KVxuICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWZyYW1lLnNyYyA9ICdhYm91dDpibGFuayc7XG4gICAgICAgIGlmcmFtZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZSA9IGxpc3RlbihpZnJhbWUuY29udGVudFdpbmRvdywgJ3Jlc2l6ZScsIGZuKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgYXBwZW5kKG5vZGUsIGlmcmFtZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKGNyb3Nzb3JpZ2luKSB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHVuc3Vic2NyaWJlICYmIGlmcmFtZS5jb250ZW50V2luZG93KSB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgICAgIGRldGFjaChpZnJhbWUpO1xuICAgIH07XG59XG5mdW5jdGlvbiB0b2dnbGVfY2xhc3MoZWxlbWVudCwgbmFtZSwgdG9nZ2xlKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3RbdG9nZ2xlID8gJ2FkZCcgOiAncmVtb3ZlJ10obmFtZSk7XG59XG5mdW5jdGlvbiBjdXN0b21fZXZlbnQodHlwZSwgZGV0YWlsLCBidWJibGVzID0gZmFsc2UpIHtcbiAgICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgZS5pbml0Q3VzdG9tRXZlbnQodHlwZSwgYnViYmxlcywgZmFsc2UsIGRldGFpbCk7XG4gICAgcmV0dXJuIGU7XG59XG5mdW5jdGlvbiBxdWVyeV9zZWxlY3Rvcl9hbGwoc2VsZWN0b3IsIHBhcmVudCA9IGRvY3VtZW50LmJvZHkpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xufVxuY2xhc3MgSHRtbFRhZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZSA9IHRoaXMubiA9IG51bGw7XG4gICAgfVxuICAgIGMoaHRtbCkge1xuICAgICAgICB0aGlzLmgoaHRtbCk7XG4gICAgfVxuICAgIG0oaHRtbCwgdGFyZ2V0LCBhbmNob3IgPSBudWxsKSB7XG4gICAgICAgIGlmICghdGhpcy5lKSB7XG4gICAgICAgICAgICB0aGlzLmUgPSBlbGVtZW50KHRhcmdldC5ub2RlTmFtZSk7XG4gICAgICAgICAgICB0aGlzLnQgPSB0YXJnZXQ7XG4gICAgICAgICAgICB0aGlzLmMoaHRtbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pKGFuY2hvcik7XG4gICAgfVxuICAgIGgoaHRtbCkge1xuICAgICAgICB0aGlzLmUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgdGhpcy5uID0gQXJyYXkuZnJvbSh0aGlzLmUuY2hpbGROb2Rlcyk7XG4gICAgfVxuICAgIGkoYW5jaG9yKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpbnNlcnQodGhpcy50LCB0aGlzLm5baV0sIGFuY2hvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcChodG1sKSB7XG4gICAgICAgIHRoaXMuZCgpO1xuICAgICAgICB0aGlzLmgoaHRtbCk7XG4gICAgICAgIHRoaXMuaSh0aGlzLmEpO1xuICAgIH1cbiAgICBkKCkge1xuICAgICAgICB0aGlzLm4uZm9yRWFjaChkZXRhY2gpO1xuICAgIH1cbn1cbmNsYXNzIEh0bWxUYWdIeWRyYXRpb24gZXh0ZW5kcyBIdG1sVGFnIHtcbiAgICBjb25zdHJ1Y3RvcihjbGFpbWVkX25vZGVzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZSA9IHRoaXMubiA9IG51bGw7XG4gICAgICAgIHRoaXMubCA9IGNsYWltZWRfbm9kZXM7XG4gICAgfVxuICAgIGMoaHRtbCkge1xuICAgICAgICBpZiAodGhpcy5sKSB7XG4gICAgICAgICAgICB0aGlzLm4gPSB0aGlzLmw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdXBlci5jKGh0bWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGkoYW5jaG9yKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpbnNlcnRfaHlkcmF0aW9uKHRoaXMudCwgdGhpcy5uW2ldLCBhbmNob3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gYXR0cmlidXRlX3RvX29iamVjdChhdHRyaWJ1dGVzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgYXR0cmlidXRlcykge1xuICAgICAgICByZXN1bHRbYXR0cmlidXRlLm5hbWVdID0gYXR0cmlidXRlLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZ2V0X2N1c3RvbV9lbGVtZW50c19zbG90cyhlbGVtZW50KSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgcmVzdWx0W25vZGUuc2xvdCB8fCAnZGVmYXVsdCddID0gdHJ1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyB3ZSBuZWVkIHRvIHN0b3JlIHRoZSBpbmZvcm1hdGlvbiBmb3IgbXVsdGlwbGUgZG9jdW1lbnRzIGJlY2F1c2UgYSBTdmVsdGUgYXBwbGljYXRpb24gY291bGQgYWxzbyBjb250YWluIGlmcmFtZXNcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zdmVsdGVqcy9zdmVsdGUvaXNzdWVzLzM2MjRcbmNvbnN0IG1hbmFnZWRfc3R5bGVzID0gbmV3IE1hcCgpO1xubGV0IGFjdGl2ZSA9IDA7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vZGFya3NreWFwcC9zdHJpbmctaGFzaC9ibG9iL21hc3Rlci9pbmRleC5qc1xuZnVuY3Rpb24gaGFzaChzdHIpIHtcbiAgICBsZXQgaGFzaCA9IDUzODE7XG4gICAgbGV0IGkgPSBzdHIubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pXG4gICAgICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSBeIHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBoYXNoID4+PiAwO1xufVxuZnVuY3Rpb24gY3JlYXRlX3N0eWxlX2luZm9ybWF0aW9uKGRvYywgbm9kZSkge1xuICAgIGNvbnN0IGluZm8gPSB7IHN0eWxlc2hlZXQ6IGFwcGVuZF9lbXB0eV9zdHlsZXNoZWV0KG5vZGUpLCBydWxlczoge30gfTtcbiAgICBtYW5hZ2VkX3N0eWxlcy5zZXQoZG9jLCBpbmZvKTtcbiAgICByZXR1cm4gaW5mbztcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9ydWxlKG5vZGUsIGEsIGIsIGR1cmF0aW9uLCBkZWxheSwgZWFzZSwgZm4sIHVpZCA9IDApIHtcbiAgICBjb25zdCBzdGVwID0gMTYuNjY2IC8gZHVyYXRpb247XG4gICAgbGV0IGtleWZyYW1lcyA9ICd7XFxuJztcbiAgICBmb3IgKGxldCBwID0gMDsgcCA8PSAxOyBwICs9IHN0ZXApIHtcbiAgICAgICAgY29uc3QgdCA9IGEgKyAoYiAtIGEpICogZWFzZShwKTtcbiAgICAgICAga2V5ZnJhbWVzICs9IHAgKiAxMDAgKyBgJXske2ZuKHQsIDEgLSB0KX19XFxuYDtcbiAgICB9XG4gICAgY29uc3QgcnVsZSA9IGtleWZyYW1lcyArIGAxMDAlIHske2ZuKGIsIDEgLSBiKX19XFxufWA7XG4gICAgY29uc3QgbmFtZSA9IGBfX3N2ZWx0ZV8ke2hhc2gocnVsZSl9XyR7dWlkfWA7XG4gICAgY29uc3QgZG9jID0gZ2V0X3Jvb3RfZm9yX3N0eWxlKG5vZGUpO1xuICAgIGNvbnN0IHsgc3R5bGVzaGVldCwgcnVsZXMgfSA9IG1hbmFnZWRfc3R5bGVzLmdldChkb2MpIHx8IGNyZWF0ZV9zdHlsZV9pbmZvcm1hdGlvbihkb2MsIG5vZGUpO1xuICAgIGlmICghcnVsZXNbbmFtZV0pIHtcbiAgICAgICAgcnVsZXNbbmFtZV0gPSB0cnVlO1xuICAgICAgICBzdHlsZXNoZWV0Lmluc2VydFJ1bGUoYEBrZXlmcmFtZXMgJHtuYW1lfSAke3J1bGV9YCwgc3R5bGVzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuICAgIH1cbiAgICBjb25zdCBhbmltYXRpb24gPSBub2RlLnN0eWxlLmFuaW1hdGlvbiB8fCAnJztcbiAgICBub2RlLnN0eWxlLmFuaW1hdGlvbiA9IGAke2FuaW1hdGlvbiA/IGAke2FuaW1hdGlvbn0sIGAgOiAnJ30ke25hbWV9ICR7ZHVyYXRpb259bXMgbGluZWFyICR7ZGVsYXl9bXMgMSBib3RoYDtcbiAgICBhY3RpdmUgKz0gMTtcbiAgICByZXR1cm4gbmFtZTtcbn1cbmZ1bmN0aW9uIGRlbGV0ZV9ydWxlKG5vZGUsIG5hbWUpIHtcbiAgICBjb25zdCBwcmV2aW91cyA9IChub2RlLnN0eWxlLmFuaW1hdGlvbiB8fCAnJykuc3BsaXQoJywgJyk7XG4gICAgY29uc3QgbmV4dCA9IHByZXZpb3VzLmZpbHRlcihuYW1lXG4gICAgICAgID8gYW5pbSA9PiBhbmltLmluZGV4T2YobmFtZSkgPCAwIC8vIHJlbW92ZSBzcGVjaWZpYyBhbmltYXRpb25cbiAgICAgICAgOiBhbmltID0+IGFuaW0uaW5kZXhPZignX19zdmVsdGUnKSA9PT0gLTEgLy8gcmVtb3ZlIGFsbCBTdmVsdGUgYW5pbWF0aW9uc1xuICAgICk7XG4gICAgY29uc3QgZGVsZXRlZCA9IHByZXZpb3VzLmxlbmd0aCAtIG5leHQubGVuZ3RoO1xuICAgIGlmIChkZWxldGVkKSB7XG4gICAgICAgIG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gbmV4dC5qb2luKCcsICcpO1xuICAgICAgICBhY3RpdmUgLT0gZGVsZXRlZDtcbiAgICAgICAgaWYgKCFhY3RpdmUpXG4gICAgICAgICAgICBjbGVhcl9ydWxlcygpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNsZWFyX3J1bGVzKCkge1xuICAgIHJhZigoKSA9PiB7XG4gICAgICAgIGlmIChhY3RpdmUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIG1hbmFnZWRfc3R5bGVzLmZvckVhY2goaW5mbyA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHN0eWxlc2hlZXQgfSA9IGluZm87XG4gICAgICAgICAgICBsZXQgaSA9IHN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKGktLSlcbiAgICAgICAgICAgICAgICBzdHlsZXNoZWV0LmRlbGV0ZVJ1bGUoaSk7XG4gICAgICAgICAgICBpbmZvLnJ1bGVzID0ge307XG4gICAgICAgIH0pO1xuICAgICAgICBtYW5hZ2VkX3N0eWxlcy5jbGVhcigpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVfYW5pbWF0aW9uKG5vZGUsIGZyb20sIGZuLCBwYXJhbXMpIHtcbiAgICBpZiAoIWZyb20pXG4gICAgICAgIHJldHVybiBub29wO1xuICAgIGNvbnN0IHRvID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoZnJvbS5sZWZ0ID09PSB0by5sZWZ0ICYmIGZyb20ucmlnaHQgPT09IHRvLnJpZ2h0ICYmIGZyb20udG9wID09PSB0by50b3AgJiYgZnJvbS5ib3R0b20gPT09IHRvLmJvdHRvbSlcbiAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgXG4gICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBzaG91bGQgdGhpcyBiZSBzZXBhcmF0ZWQgZnJvbSBkZXN0cnVjdHVyaW5nPyBPciBzdGFydC9lbmQgYWRkZWQgdG8gcHVibGljIGFwaSBhbmQgZG9jdW1lbnRhdGlvbj9cbiAgICBzdGFydDogc3RhcnRfdGltZSA9IG5vdygpICsgZGVsYXksIFxuICAgIC8vIEB0cy1pZ25vcmUgdG9kbzpcbiAgICBlbmQgPSBzdGFydF90aW1lICsgZHVyYXRpb24sIHRpY2sgPSBub29wLCBjc3MgfSA9IGZuKG5vZGUsIHsgZnJvbSwgdG8gfSwgcGFyYW1zKTtcbiAgICBsZXQgcnVubmluZyA9IHRydWU7XG4gICAgbGV0IHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICBsZXQgbmFtZTtcbiAgICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDAsIDEsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZGVsYXkpIHtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIGlmIChjc3MpXG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBuYW1lKTtcbiAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBsb29wKG5vdyA9PiB7XG4gICAgICAgIGlmICghc3RhcnRlZCAmJiBub3cgPj0gc3RhcnRfdGltZSkge1xuICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0ZWQgJiYgbm93ID49IGVuZCkge1xuICAgICAgICAgICAgdGljaygxLCAwKTtcbiAgICAgICAgICAgIHN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRlZCkge1xuICAgICAgICAgICAgY29uc3QgcCA9IG5vdyAtIHN0YXJ0X3RpbWU7XG4gICAgICAgICAgICBjb25zdCB0ID0gMCArIDEgKiBlYXNpbmcocCAvIGR1cmF0aW9uKTtcbiAgICAgICAgICAgIHRpY2sodCwgMSAtIHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIHN0YXJ0KCk7XG4gICAgdGljaygwLCAxKTtcbiAgICByZXR1cm4gc3RvcDtcbn1cbmZ1bmN0aW9uIGZpeF9wb3NpdGlvbihub2RlKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIGlmIChzdHlsZS5wb3NpdGlvbiAhPT0gJ2Fic29sdXRlJyAmJiBzdHlsZS5wb3NpdGlvbiAhPT0gJ2ZpeGVkJykge1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHN0eWxlO1xuICAgICAgICBjb25zdCBhID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbm9kZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIG5vZGUuc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGFkZF90cmFuc2Zvcm0obm9kZSwgYSk7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkX3RyYW5zZm9ybShub2RlLCBhKSB7XG4gICAgY29uc3QgYiA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKGEubGVmdCAhPT0gYi5sZWZ0IHx8IGEudG9wICE9PSBiLnRvcCkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS50cmFuc2Zvcm07XG4gICAgICAgIG5vZGUuc3R5bGUudHJhbnNmb3JtID0gYCR7dHJhbnNmb3JtfSB0cmFuc2xhdGUoJHthLmxlZnQgLSBiLmxlZnR9cHgsICR7YS50b3AgLSBiLnRvcH1weClgO1xuICAgIH1cbn1cblxubGV0IGN1cnJlbnRfY29tcG9uZW50O1xuZnVuY3Rpb24gc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIGN1cnJlbnRfY29tcG9uZW50ID0gY29tcG9uZW50O1xufVxuZnVuY3Rpb24gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkge1xuICAgIGlmICghY3VycmVudF9jb21wb25lbnQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRnVuY3Rpb24gY2FsbGVkIG91dHNpZGUgY29tcG9uZW50IGluaXRpYWxpemF0aW9uJyk7XG4gICAgcmV0dXJuIGN1cnJlbnRfY29tcG9uZW50O1xufVxuZnVuY3Rpb24gYmVmb3JlVXBkYXRlKGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuYmVmb3JlX3VwZGF0ZS5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIG9uTW91bnQoZm4pIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5vbl9tb3VudC5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIGFmdGVyVXBkYXRlKGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuYWZ0ZXJfdXBkYXRlLnB1c2goZm4pO1xufVxuZnVuY3Rpb24gb25EZXN0cm95KGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQub25fZGVzdHJveS5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBnZXRfY3VycmVudF9jb21wb25lbnQoKTtcbiAgICByZXR1cm4gKHR5cGUsIGRldGFpbCkgPT4ge1xuICAgICAgICBjb25zdCBjYWxsYmFja3MgPSBjb21wb25lbnQuJCQuY2FsbGJhY2tzW3R5cGVdO1xuICAgICAgICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAvLyBUT0RPIGFyZSB0aGVyZSBzaXR1YXRpb25zIHdoZXJlIGV2ZW50cyBjb3VsZCBiZSBkaXNwYXRjaGVkXG4gICAgICAgICAgICAvLyBpbiBhIHNlcnZlciAobm9uLURPTSkgZW52aXJvbm1lbnQ/XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IGN1c3RvbV9ldmVudCh0eXBlLCBkZXRhaWwpO1xuICAgICAgICAgICAgY2FsbGJhY2tzLnNsaWNlKCkuZm9yRWFjaChmbiA9PiB7XG4gICAgICAgICAgICAgICAgZm4uY2FsbChjb21wb25lbnQsIGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHNldENvbnRleHQoa2V5LCBjb250ZXh0KSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuY29udGV4dC5zZXQoa2V5LCBjb250ZXh0KTtcbn1cbmZ1bmN0aW9uIGdldENvbnRleHQoa2V5KSB7XG4gICAgcmV0dXJuIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQuZ2V0KGtleSk7XG59XG5mdW5jdGlvbiBnZXRBbGxDb250ZXh0cygpIHtcbiAgICByZXR1cm4gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuY29udGV4dDtcbn1cbmZ1bmN0aW9uIGhhc0NvbnRleHQoa2V5KSB7XG4gICAgcmV0dXJuIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQuaGFzKGtleSk7XG59XG4vLyBUT0RPIGZpZ3VyZSBvdXQgaWYgd2Ugc3RpbGwgd2FudCB0byBzdXBwb3J0XG4vLyBzaG9ydGhhbmQgZXZlbnRzLCBvciBpZiB3ZSB3YW50IHRvIGltcGxlbWVudFxuLy8gYSByZWFsIGJ1YmJsaW5nIG1lY2hhbmlzbVxuZnVuY3Rpb24gYnViYmxlKGNvbXBvbmVudCwgZXZlbnQpIHtcbiAgICBjb25zdCBjYWxsYmFja3MgPSBjb21wb25lbnQuJCQuY2FsbGJhY2tzW2V2ZW50LnR5cGVdO1xuICAgIGlmIChjYWxsYmFja3MpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjYWxsYmFja3Muc2xpY2UoKS5mb3JFYWNoKGZuID0+IGZuLmNhbGwodGhpcywgZXZlbnQpKTtcbiAgICB9XG59XG5cbmNvbnN0IGRpcnR5X2NvbXBvbmVudHMgPSBbXTtcbmNvbnN0IGludHJvcyA9IHsgZW5hYmxlZDogZmFsc2UgfTtcbmNvbnN0IGJpbmRpbmdfY2FsbGJhY2tzID0gW107XG5jb25zdCByZW5kZXJfY2FsbGJhY2tzID0gW107XG5jb25zdCBmbHVzaF9jYWxsYmFja3MgPSBbXTtcbmNvbnN0IHJlc29sdmVkX3Byb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbmxldCB1cGRhdGVfc2NoZWR1bGVkID0gZmFsc2U7XG5mdW5jdGlvbiBzY2hlZHVsZV91cGRhdGUoKSB7XG4gICAgaWYgKCF1cGRhdGVfc2NoZWR1bGVkKSB7XG4gICAgICAgIHVwZGF0ZV9zY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgICByZXNvbHZlZF9wcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRpY2soKSB7XG4gICAgc2NoZWR1bGVfdXBkYXRlKCk7XG4gICAgcmV0dXJuIHJlc29sdmVkX3Byb21pc2U7XG59XG5mdW5jdGlvbiBhZGRfcmVuZGVyX2NhbGxiYWNrKGZuKSB7XG4gICAgcmVuZGVyX2NhbGxiYWNrcy5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIGFkZF9mbHVzaF9jYWxsYmFjayhmbikge1xuICAgIGZsdXNoX2NhbGxiYWNrcy5wdXNoKGZuKTtcbn1cbi8vIGZsdXNoKCkgY2FsbHMgY2FsbGJhY2tzIGluIHRoaXMgb3JkZXI6XG4vLyAxLiBBbGwgYmVmb3JlVXBkYXRlIGNhbGxiYWNrcywgaW4gb3JkZXI6IHBhcmVudHMgYmVmb3JlIGNoaWxkcmVuXG4vLyAyLiBBbGwgYmluZDp0aGlzIGNhbGxiYWNrcywgaW4gcmV2ZXJzZSBvcmRlcjogY2hpbGRyZW4gYmVmb3JlIHBhcmVudHMuXG4vLyAzLiBBbGwgYWZ0ZXJVcGRhdGUgY2FsbGJhY2tzLCBpbiBvcmRlcjogcGFyZW50cyBiZWZvcmUgY2hpbGRyZW4uIEVYQ0VQVFxuLy8gICAgZm9yIGFmdGVyVXBkYXRlcyBjYWxsZWQgZHVyaW5nIHRoZSBpbml0aWFsIG9uTW91bnQsIHdoaWNoIGFyZSBjYWxsZWQgaW5cbi8vICAgIHJldmVyc2Ugb3JkZXI6IGNoaWxkcmVuIGJlZm9yZSBwYXJlbnRzLlxuLy8gU2luY2UgY2FsbGJhY2tzIG1pZ2h0IHVwZGF0ZSBjb21wb25lbnQgdmFsdWVzLCB3aGljaCBjb3VsZCB0cmlnZ2VyIGFub3RoZXJcbi8vIGNhbGwgdG8gZmx1c2goKSwgdGhlIGZvbGxvd2luZyBzdGVwcyBndWFyZCBhZ2FpbnN0IHRoaXM6XG4vLyAxLiBEdXJpbmcgYmVmb3JlVXBkYXRlLCBhbnkgdXBkYXRlZCBjb21wb25lbnRzIHdpbGwgYmUgYWRkZWQgdG8gdGhlXG4vLyAgICBkaXJ0eV9jb21wb25lbnRzIGFycmF5IGFuZCB3aWxsIGNhdXNlIGEgcmVlbnRyYW50IGNhbGwgdG8gZmx1c2goKS4gQmVjYXVzZVxuLy8gICAgdGhlIGZsdXNoIGluZGV4IGlzIGtlcHQgb3V0c2lkZSB0aGUgZnVuY3Rpb24sIHRoZSByZWVudHJhbnQgY2FsbCB3aWxsIHBpY2tcbi8vICAgIHVwIHdoZXJlIHRoZSBlYXJsaWVyIGNhbGwgbGVmdCBvZmYgYW5kIGdvIHRocm91Z2ggYWxsIGRpcnR5IGNvbXBvbmVudHMuIFRoZVxuLy8gICAgY3VycmVudF9jb21wb25lbnQgdmFsdWUgaXMgc2F2ZWQgYW5kIHJlc3RvcmVkIHNvIHRoYXQgdGhlIHJlZW50cmFudCBjYWxsIHdpbGxcbi8vICAgIG5vdCBpbnRlcmZlcmUgd2l0aCB0aGUgXCJwYXJlbnRcIiBmbHVzaCgpIGNhbGwuXG4vLyAyLiBiaW5kOnRoaXMgY2FsbGJhY2tzIGNhbm5vdCB0cmlnZ2VyIG5ldyBmbHVzaCgpIGNhbGxzLlxuLy8gMy4gRHVyaW5nIGFmdGVyVXBkYXRlLCBhbnkgdXBkYXRlZCBjb21wb25lbnRzIHdpbGwgTk9UIGhhdmUgdGhlaXIgYWZ0ZXJVcGRhdGVcbi8vICAgIGNhbGxiYWNrIGNhbGxlZCBhIHNlY29uZCB0aW1lOyB0aGUgc2Vlbl9jYWxsYmFja3Mgc2V0LCBvdXRzaWRlIHRoZSBmbHVzaCgpXG4vLyAgICBmdW5jdGlvbiwgZ3VhcmFudGVlcyB0aGlzIGJlaGF2aW9yLlxuY29uc3Qgc2Vlbl9jYWxsYmFja3MgPSBuZXcgU2V0KCk7XG5sZXQgZmx1c2hpZHggPSAwOyAvLyBEbyAqbm90KiBtb3ZlIHRoaXMgaW5zaWRlIHRoZSBmbHVzaCgpIGZ1bmN0aW9uXG5mdW5jdGlvbiBmbHVzaCgpIHtcbiAgICBjb25zdCBzYXZlZF9jb21wb25lbnQgPSBjdXJyZW50X2NvbXBvbmVudDtcbiAgICBkbyB7XG4gICAgICAgIC8vIGZpcnN0LCBjYWxsIGJlZm9yZVVwZGF0ZSBmdW5jdGlvbnNcbiAgICAgICAgLy8gYW5kIHVwZGF0ZSBjb21wb25lbnRzXG4gICAgICAgIHdoaWxlIChmbHVzaGlkeCA8IGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBkaXJ0eV9jb21wb25lbnRzW2ZsdXNoaWR4XTtcbiAgICAgICAgICAgIGZsdXNoaWR4Kys7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgIHVwZGF0ZShjb21wb25lbnQuJCQpO1xuICAgICAgICB9XG4gICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChudWxsKTtcbiAgICAgICAgZGlydHlfY29tcG9uZW50cy5sZW5ndGggPSAwO1xuICAgICAgICBmbHVzaGlkeCA9IDA7XG4gICAgICAgIHdoaWxlIChiaW5kaW5nX2NhbGxiYWNrcy5sZW5ndGgpXG4gICAgICAgICAgICBiaW5kaW5nX2NhbGxiYWNrcy5wb3AoKSgpO1xuICAgICAgICAvLyB0aGVuLCBvbmNlIGNvbXBvbmVudHMgYXJlIHVwZGF0ZWQsIGNhbGxcbiAgICAgICAgLy8gYWZ0ZXJVcGRhdGUgZnVuY3Rpb25zLiBUaGlzIG1heSBjYXVzZVxuICAgICAgICAvLyBzdWJzZXF1ZW50IHVwZGF0ZXMuLi5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW5kZXJfY2FsbGJhY2tzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IHJlbmRlcl9jYWxsYmFja3NbaV07XG4gICAgICAgICAgICBpZiAoIXNlZW5fY2FsbGJhY2tzLmhhcyhjYWxsYmFjaykpIHtcbiAgICAgICAgICAgICAgICAvLyAuLi5zbyBndWFyZCBhZ2FpbnN0IGluZmluaXRlIGxvb3BzXG4gICAgICAgICAgICAgICAgc2Vlbl9jYWxsYmFja3MuYWRkKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlbmRlcl9jYWxsYmFja3MubGVuZ3RoID0gMDtcbiAgICB9IHdoaWxlIChkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCk7XG4gICAgd2hpbGUgKGZsdXNoX2NhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgZmx1c2hfY2FsbGJhY2tzLnBvcCgpKCk7XG4gICAgfVxuICAgIHVwZGF0ZV9zY2hlZHVsZWQgPSBmYWxzZTtcbiAgICBzZWVuX2NhbGxiYWNrcy5jbGVhcigpO1xuICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChzYXZlZF9jb21wb25lbnQpO1xufVxuZnVuY3Rpb24gdXBkYXRlKCQkKSB7XG4gICAgaWYgKCQkLmZyYWdtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICQkLnVwZGF0ZSgpO1xuICAgICAgICBydW5fYWxsKCQkLmJlZm9yZV91cGRhdGUpO1xuICAgICAgICBjb25zdCBkaXJ0eSA9ICQkLmRpcnR5O1xuICAgICAgICAkJC5kaXJ0eSA9IFstMV07XG4gICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LnAoJCQuY3R4LCBkaXJ0eSk7XG4gICAgICAgICQkLmFmdGVyX3VwZGF0ZS5mb3JFYWNoKGFkZF9yZW5kZXJfY2FsbGJhY2spO1xuICAgIH1cbn1cblxubGV0IHByb21pc2U7XG5mdW5jdGlvbiB3YWl0KCkge1xuICAgIGlmICghcHJvbWlzZSkge1xuICAgICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIHByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBwcm9taXNlID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBwcm9taXNlO1xufVxuZnVuY3Rpb24gZGlzcGF0Y2gobm9kZSwgZGlyZWN0aW9uLCBraW5kKSB7XG4gICAgbm9kZS5kaXNwYXRjaEV2ZW50KGN1c3RvbV9ldmVudChgJHtkaXJlY3Rpb24gPyAnaW50cm8nIDogJ291dHJvJ30ke2tpbmR9YCkpO1xufVxuY29uc3Qgb3V0cm9pbmcgPSBuZXcgU2V0KCk7XG5sZXQgb3V0cm9zO1xuZnVuY3Rpb24gZ3JvdXBfb3V0cm9zKCkge1xuICAgIG91dHJvcyA9IHtcbiAgICAgICAgcjogMCxcbiAgICAgICAgYzogW10sXG4gICAgICAgIHA6IG91dHJvcyAvLyBwYXJlbnQgZ3JvdXBcbiAgICB9O1xufVxuZnVuY3Rpb24gY2hlY2tfb3V0cm9zKCkge1xuICAgIGlmICghb3V0cm9zLnIpIHtcbiAgICAgICAgcnVuX2FsbChvdXRyb3MuYyk7XG4gICAgfVxuICAgIG91dHJvcyA9IG91dHJvcy5wO1xufVxuZnVuY3Rpb24gdHJhbnNpdGlvbl9pbihibG9jaywgbG9jYWwpIHtcbiAgICBpZiAoYmxvY2sgJiYgYmxvY2suaSkge1xuICAgICAgICBvdXRyb2luZy5kZWxldGUoYmxvY2spO1xuICAgICAgICBibG9jay5pKGxvY2FsKTtcbiAgICB9XG59XG5mdW5jdGlvbiB0cmFuc2l0aW9uX291dChibG9jaywgbG9jYWwsIGRldGFjaCwgY2FsbGJhY2spIHtcbiAgICBpZiAoYmxvY2sgJiYgYmxvY2subykge1xuICAgICAgICBpZiAob3V0cm9pbmcuaGFzKGJsb2NrKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgb3V0cm9pbmcuYWRkKGJsb2NrKTtcbiAgICAgICAgb3V0cm9zLmMucHVzaCgoKSA9PiB7XG4gICAgICAgICAgICBvdXRyb2luZy5kZWxldGUoYmxvY2spO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRldGFjaClcbiAgICAgICAgICAgICAgICAgICAgYmxvY2suZCgxKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYmxvY2subyhsb2NhbCk7XG4gICAgfVxufVxuY29uc3QgbnVsbF90cmFuc2l0aW9uID0geyBkdXJhdGlvbjogMCB9O1xuZnVuY3Rpb24gY3JlYXRlX2luX3RyYW5zaXRpb24obm9kZSwgZm4sIHBhcmFtcykge1xuICAgIGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMpO1xuICAgIGxldCBydW5uaW5nID0gZmFsc2U7XG4gICAgbGV0IGFuaW1hdGlvbl9uYW1lO1xuICAgIGxldCB0YXNrO1xuICAgIGxldCB1aWQgPSAwO1xuICAgIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgICAgIGlmIChhbmltYXRpb25fbmFtZSlcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIGFuaW1hdGlvbl9uYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ28oKSB7XG4gICAgICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIHRpY2sgPSBub29wLCBjc3MgfSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG4gICAgICAgIGlmIChjc3MpXG4gICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDAsIDEsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MsIHVpZCsrKTtcbiAgICAgICAgdGljaygwLCAxKTtcbiAgICAgICAgY29uc3Qgc3RhcnRfdGltZSA9IG5vdygpICsgZGVsYXk7XG4gICAgICAgIGNvbnN0IGVuZF90aW1lID0gc3RhcnRfdGltZSArIGR1cmF0aW9uO1xuICAgICAgICBpZiAodGFzaylcbiAgICAgICAgICAgIHRhc2suYWJvcnQoKTtcbiAgICAgICAgcnVubmluZyA9IHRydWU7XG4gICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgdHJ1ZSwgJ3N0YXJ0JykpO1xuICAgICAgICB0YXNrID0gbG9vcChub3cgPT4ge1xuICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAobm93ID49IGVuZF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpY2soMSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIHRydWUsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IGVhc2luZygobm93IC0gc3RhcnRfdGltZSkgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRpY2sodCwgMSAtIHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBydW5uaW5nO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGFydCgpIHtcbiAgICAgICAgICAgIGlmIChzdGFydGVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSk7XG4gICAgICAgICAgICBpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNvbmZpZygpO1xuICAgICAgICAgICAgICAgIHdhaXQoKS50aGVuKGdvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGdvKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGludmFsaWRhdGUoKSB7XG4gICAgICAgICAgICBzdGFydGVkID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIGVuZCgpIHtcbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBjcmVhdGVfb3V0X3RyYW5zaXRpb24obm9kZSwgZm4sIHBhcmFtcykge1xuICAgIGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMpO1xuICAgIGxldCBydW5uaW5nID0gdHJ1ZTtcbiAgICBsZXQgYW5pbWF0aW9uX25hbWU7XG4gICAgY29uc3QgZ3JvdXAgPSBvdXRyb3M7XG4gICAgZ3JvdXAuciArPSAxO1xuICAgIGZ1bmN0aW9uIGdvKCkge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAxLCAwLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcbiAgICAgICAgY29uc3Qgc3RhcnRfdGltZSA9IG5vdygpICsgZGVsYXk7XG4gICAgICAgIGNvbnN0IGVuZF90aW1lID0gc3RhcnRfdGltZSArIGR1cmF0aW9uO1xuICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIGZhbHNlLCAnc3RhcnQnKSk7XG4gICAgICAgIGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBlbmRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aWNrKDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCBmYWxzZSwgJ2VuZCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIS0tZ3JvdXAucikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3aWxsIHJlc3VsdCBpbiBgZW5kKClgIGJlaW5nIGNhbGxlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvIHdlIGRvbid0IG5lZWQgdG8gY2xlYW4gdXAgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgcnVuX2FsbChncm91cC5jKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gc3RhcnRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ID0gZWFzaW5nKChub3cgLSBzdGFydF90aW1lKSAvIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgdGljaygxIC0gdCwgdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmc7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuICAgICAgICB3YWl0KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25maWcgPSBjb25maWcoKTtcbiAgICAgICAgICAgIGdvKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZ28oKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZW5kKHJlc2V0KSB7XG4gICAgICAgICAgICBpZiAocmVzZXQgJiYgY29uZmlnLnRpY2spIHtcbiAgICAgICAgICAgICAgICBjb25maWcudGljaygxLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbl9uYW1lKVxuICAgICAgICAgICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgICAgICAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9iaWRpcmVjdGlvbmFsX3RyYW5zaXRpb24obm9kZSwgZm4sIHBhcmFtcywgaW50cm8pIHtcbiAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zKTtcbiAgICBsZXQgdCA9IGludHJvID8gMCA6IDE7XG4gICAgbGV0IHJ1bm5pbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgbGV0IHBlbmRpbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgbGV0IGFuaW1hdGlvbl9uYW1lID0gbnVsbDtcbiAgICBmdW5jdGlvbiBjbGVhcl9hbmltYXRpb24oKSB7XG4gICAgICAgIGlmIChhbmltYXRpb25fbmFtZSlcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIGFuaW1hdGlvbl9uYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaW5pdChwcm9ncmFtLCBkdXJhdGlvbikge1xuICAgICAgICBjb25zdCBkID0gKHByb2dyYW0uYiAtIHQpO1xuICAgICAgICBkdXJhdGlvbiAqPSBNYXRoLmFicyhkKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGE6IHQsXG4gICAgICAgICAgICBiOiBwcm9ncmFtLmIsXG4gICAgICAgICAgICBkLFxuICAgICAgICAgICAgZHVyYXRpb24sXG4gICAgICAgICAgICBzdGFydDogcHJvZ3JhbS5zdGFydCxcbiAgICAgICAgICAgIGVuZDogcHJvZ3JhbS5zdGFydCArIGR1cmF0aW9uLFxuICAgICAgICAgICAgZ3JvdXA6IHByb2dyYW0uZ3JvdXBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ28oYikge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICBjb25zdCBwcm9ncmFtID0ge1xuICAgICAgICAgICAgc3RhcnQ6IG5vdygpICsgZGVsYXksXG4gICAgICAgICAgICBiXG4gICAgICAgIH07XG4gICAgICAgIGlmICghYikge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBpbXByb3ZlIHR5cGluZ3NcbiAgICAgICAgICAgIHByb2dyYW0uZ3JvdXAgPSBvdXRyb3M7XG4gICAgICAgICAgICBvdXRyb3MuciArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChydW5uaW5nX3Byb2dyYW0gfHwgcGVuZGluZ19wcm9ncmFtKSB7XG4gICAgICAgICAgICBwZW5kaW5nX3Byb2dyYW0gPSBwcm9ncmFtO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBhbiBpbnRybywgYW5kIHRoZXJlJ3MgYSBkZWxheSwgd2UgbmVlZCB0byBkb1xuICAgICAgICAgICAgLy8gYW4gaW5pdGlhbCB0aWNrIGFuZC9vciBhcHBseSBDU1MgYW5pbWF0aW9uIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICBpZiAoY3NzKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCB0LCBiLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChiKVxuICAgICAgICAgICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBpbml0KHByb2dyYW0sIGR1cmF0aW9uKTtcbiAgICAgICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgYiwgJ3N0YXJ0JykpO1xuICAgICAgICAgICAgbG9vcChub3cgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwZW5kaW5nX3Byb2dyYW0gJiYgbm93ID4gcGVuZGluZ19wcm9ncmFtLnN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IGluaXQocGVuZGluZ19wcm9ncmFtLCBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIHJ1bm5pbmdfcHJvZ3JhbS5iLCAnc3RhcnQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIHQsIHJ1bm5pbmdfcHJvZ3JhbS5iLCBydW5uaW5nX3Byb2dyYW0uZHVyYXRpb24sIDAsIGVhc2luZywgY29uZmlnLmNzcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmdfcHJvZ3JhbSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm93ID49IHJ1bm5pbmdfcHJvZ3JhbS5lbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2sodCA9IHJ1bm5pbmdfcHJvZ3JhbS5iLCAxIC0gdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCBydW5uaW5nX3Byb2dyYW0uYiwgJ2VuZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwZW5kaW5nX3Byb2dyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSdyZSBkb25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmdfcHJvZ3JhbS5iKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGludHJvIOKAlCB3ZSBjYW4gdGlkeSB1cCBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG91dHJvIOKAlCBuZWVkcyB0byBiZSBjb29yZGluYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIS0tcnVubmluZ19wcm9ncmFtLmdyb3VwLnIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydW5fYWxsKHJ1bm5pbmdfcHJvZ3JhbS5ncm91cC5jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vdyA+PSBydW5uaW5nX3Byb2dyYW0uc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBub3cgLSBydW5uaW5nX3Byb2dyYW0uc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gcnVubmluZ19wcm9ncmFtLmEgKyBydW5uaW5nX3Byb2dyYW0uZCAqIGVhc2luZyhwIC8gcnVubmluZ19wcm9ncmFtLmR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2sodCwgMSAtIHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAhIShydW5uaW5nX3Byb2dyYW0gfHwgcGVuZGluZ19wcm9ncmFtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHJ1bihiKSB7XG4gICAgICAgICAgICBpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuICAgICAgICAgICAgICAgIHdhaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICBjb25maWcgPSBjb25maWcoKTtcbiAgICAgICAgICAgICAgICAgICAgZ28oYik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnbyhiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW5kKCkge1xuICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlX3Byb21pc2UocHJvbWlzZSwgaW5mbykge1xuICAgIGNvbnN0IHRva2VuID0gaW5mby50b2tlbiA9IHt9O1xuICAgIGZ1bmN0aW9uIHVwZGF0ZSh0eXBlLCBpbmRleCwga2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAoaW5mby50b2tlbiAhPT0gdG9rZW4pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGluZm8ucmVzb2x2ZWQgPSB2YWx1ZTtcbiAgICAgICAgbGV0IGNoaWxkX2N0eCA9IGluZm8uY3R4O1xuICAgICAgICBpZiAoa2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNoaWxkX2N0eCA9IGNoaWxkX2N0eC5zbGljZSgpO1xuICAgICAgICAgICAgY2hpbGRfY3R4W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBibG9jayA9IHR5cGUgJiYgKGluZm8uY3VycmVudCA9IHR5cGUpKGNoaWxkX2N0eCk7XG4gICAgICAgIGxldCBuZWVkc19mbHVzaCA9IGZhbHNlO1xuICAgICAgICBpZiAoaW5mby5ibG9jaykge1xuICAgICAgICAgICAgaWYgKGluZm8uYmxvY2tzKSB7XG4gICAgICAgICAgICAgICAgaW5mby5ibG9ja3MuZm9yRWFjaCgoYmxvY2ssIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgIT09IGluZGV4ICYmIGJsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cF9vdXRyb3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25fb3V0KGJsb2NrLCAxLCAxLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZm8uYmxvY2tzW2ldID09PSBibG9jaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvLmJsb2Nrc1tpXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja19vdXRyb3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5mby5ibG9jay5kKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmxvY2suYygpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbl9pbihibG9jaywgMSk7XG4gICAgICAgICAgICBibG9jay5tKGluZm8ubW91bnQoKSwgaW5mby5hbmNob3IpO1xuICAgICAgICAgICAgbmVlZHNfZmx1c2ggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGluZm8uYmxvY2sgPSBibG9jaztcbiAgICAgICAgaWYgKGluZm8uYmxvY2tzKVxuICAgICAgICAgICAgaW5mby5ibG9ja3NbaW5kZXhdID0gYmxvY2s7XG4gICAgICAgIGlmIChuZWVkc19mbHVzaCkge1xuICAgICAgICAgICAgZmx1c2goKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNfcHJvbWlzZShwcm9taXNlKSkge1xuICAgICAgICBjb25zdCBjdXJyZW50X2NvbXBvbmVudCA9IGdldF9jdXJyZW50X2NvbXBvbmVudCgpO1xuICAgICAgICBwcm9taXNlLnRoZW4odmFsdWUgPT4ge1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGN1cnJlbnRfY29tcG9uZW50KTtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLnRoZW4sIDEsIGluZm8udmFsdWUsIHZhbHVlKTtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChudWxsKTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGN1cnJlbnRfY29tcG9uZW50KTtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLmNhdGNoLCAyLCBpbmZvLmVycm9yLCBlcnJvcik7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQobnVsbCk7XG4gICAgICAgICAgICBpZiAoIWluZm8uaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGlmIHdlIHByZXZpb3VzbHkgaGFkIGEgdGhlbi9jYXRjaCBibG9jaywgZGVzdHJveSBpdFxuICAgICAgICBpZiAoaW5mby5jdXJyZW50ICE9PSBpbmZvLnBlbmRpbmcpIHtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLnBlbmRpbmcsIDApO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChpbmZvLmN1cnJlbnQgIT09IGluZm8udGhlbikge1xuICAgICAgICAgICAgdXBkYXRlKGluZm8udGhlbiwgMSwgaW5mby52YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpbmZvLnJlc29sdmVkID0gcHJvbWlzZTtcbiAgICB9XG59XG5mdW5jdGlvbiB1cGRhdGVfYXdhaXRfYmxvY2tfYnJhbmNoKGluZm8sIGN0eCwgZGlydHkpIHtcbiAgICBjb25zdCBjaGlsZF9jdHggPSBjdHguc2xpY2UoKTtcbiAgICBjb25zdCB7IHJlc29sdmVkIH0gPSBpbmZvO1xuICAgIGlmIChpbmZvLmN1cnJlbnQgPT09IGluZm8udGhlbikge1xuICAgICAgICBjaGlsZF9jdHhbaW5mby52YWx1ZV0gPSByZXNvbHZlZDtcbiAgICB9XG4gICAgaWYgKGluZm8uY3VycmVudCA9PT0gaW5mby5jYXRjaCkge1xuICAgICAgICBjaGlsZF9jdHhbaW5mby5lcnJvcl0gPSByZXNvbHZlZDtcbiAgICB9XG4gICAgaW5mby5ibG9jay5wKGNoaWxkX2N0eCwgZGlydHkpO1xufVxuXG5jb25zdCBnbG9iYWxzID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgPyB3aW5kb3dcbiAgICA6IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IGdsb2JhbFRoaXNcbiAgICAgICAgOiBnbG9iYWwpO1xuXG5mdW5jdGlvbiBkZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICBibG9jay5kKDEpO1xuICAgIGxvb2t1cC5kZWxldGUoYmxvY2sua2V5KTtcbn1cbmZ1bmN0aW9uIG91dHJvX2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICB0cmFuc2l0aW9uX291dChibG9jaywgMSwgMSwgKCkgPT4ge1xuICAgICAgICBsb29rdXAuZGVsZXRlKGJsb2NrLmtleSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmaXhfYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIGJsb2NrLmYoKTtcbiAgICBkZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApO1xufVxuZnVuY3Rpb24gZml4X2FuZF9vdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgYmxvY2suZigpO1xuICAgIG91dHJvX2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApO1xufVxuZnVuY3Rpb24gdXBkYXRlX2tleWVkX2VhY2gob2xkX2Jsb2NrcywgZGlydHksIGdldF9rZXksIGR5bmFtaWMsIGN0eCwgbGlzdCwgbG9va3VwLCBub2RlLCBkZXN0cm95LCBjcmVhdGVfZWFjaF9ibG9jaywgbmV4dCwgZ2V0X2NvbnRleHQpIHtcbiAgICBsZXQgbyA9IG9sZF9ibG9ja3MubGVuZ3RoO1xuICAgIGxldCBuID0gbGlzdC5sZW5ndGg7XG4gICAgbGV0IGkgPSBvO1xuICAgIGNvbnN0IG9sZF9pbmRleGVzID0ge307XG4gICAgd2hpbGUgKGktLSlcbiAgICAgICAgb2xkX2luZGV4ZXNbb2xkX2Jsb2Nrc1tpXS5rZXldID0gaTtcbiAgICBjb25zdCBuZXdfYmxvY2tzID0gW107XG4gICAgY29uc3QgbmV3X2xvb2t1cCA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBkZWx0YXMgPSBuZXcgTWFwKCk7XG4gICAgaSA9IG47XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICBjb25zdCBjaGlsZF9jdHggPSBnZXRfY29udGV4dChjdHgsIGxpc3QsIGkpO1xuICAgICAgICBjb25zdCBrZXkgPSBnZXRfa2V5KGNoaWxkX2N0eCk7XG4gICAgICAgIGxldCBibG9jayA9IGxvb2t1cC5nZXQoa2V5KTtcbiAgICAgICAgaWYgKCFibG9jaykge1xuICAgICAgICAgICAgYmxvY2sgPSBjcmVhdGVfZWFjaF9ibG9jayhrZXksIGNoaWxkX2N0eCk7XG4gICAgICAgICAgICBibG9jay5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZHluYW1pYykge1xuICAgICAgICAgICAgYmxvY2sucChjaGlsZF9jdHgsIGRpcnR5KTtcbiAgICAgICAgfVxuICAgICAgICBuZXdfbG9va3VwLnNldChrZXksIG5ld19ibG9ja3NbaV0gPSBibG9jayk7XG4gICAgICAgIGlmIChrZXkgaW4gb2xkX2luZGV4ZXMpXG4gICAgICAgICAgICBkZWx0YXMuc2V0KGtleSwgTWF0aC5hYnMoaSAtIG9sZF9pbmRleGVzW2tleV0pKTtcbiAgICB9XG4gICAgY29uc3Qgd2lsbF9tb3ZlID0gbmV3IFNldCgpO1xuICAgIGNvbnN0IGRpZF9tb3ZlID0gbmV3IFNldCgpO1xuICAgIGZ1bmN0aW9uIGluc2VydChibG9jaykge1xuICAgICAgICB0cmFuc2l0aW9uX2luKGJsb2NrLCAxKTtcbiAgICAgICAgYmxvY2subShub2RlLCBuZXh0KTtcbiAgICAgICAgbG9va3VwLnNldChibG9jay5rZXksIGJsb2NrKTtcbiAgICAgICAgbmV4dCA9IGJsb2NrLmZpcnN0O1xuICAgICAgICBuLS07XG4gICAgfVxuICAgIHdoaWxlIChvICYmIG4pIHtcbiAgICAgICAgY29uc3QgbmV3X2Jsb2NrID0gbmV3X2Jsb2Nrc1tuIC0gMV07XG4gICAgICAgIGNvbnN0IG9sZF9ibG9jayA9IG9sZF9ibG9ja3NbbyAtIDFdO1xuICAgICAgICBjb25zdCBuZXdfa2V5ID0gbmV3X2Jsb2NrLmtleTtcbiAgICAgICAgY29uc3Qgb2xkX2tleSA9IG9sZF9ibG9jay5rZXk7XG4gICAgICAgIGlmIChuZXdfYmxvY2sgPT09IG9sZF9ibG9jaykge1xuICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICAgICAgbmV4dCA9IG5ld19ibG9jay5maXJzdDtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgICAgIG4tLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghbmV3X2xvb2t1cC5oYXMob2xkX2tleSkpIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBvbGQgYmxvY2tcbiAgICAgICAgICAgIGRlc3Ryb3kob2xkX2Jsb2NrLCBsb29rdXApO1xuICAgICAgICAgICAgby0tO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFsb29rdXAuaGFzKG5ld19rZXkpIHx8IHdpbGxfbW92ZS5oYXMobmV3X2tleSkpIHtcbiAgICAgICAgICAgIGluc2VydChuZXdfYmxvY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRpZF9tb3ZlLmhhcyhvbGRfa2V5KSkge1xuICAgICAgICAgICAgby0tO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRlbHRhcy5nZXQobmV3X2tleSkgPiBkZWx0YXMuZ2V0KG9sZF9rZXkpKSB7XG4gICAgICAgICAgICBkaWRfbW92ZS5hZGQobmV3X2tleSk7XG4gICAgICAgICAgICBpbnNlcnQobmV3X2Jsb2NrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHdpbGxfbW92ZS5hZGQob2xkX2tleSk7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgd2hpbGUgKG8tLSkge1xuICAgICAgICBjb25zdCBvbGRfYmxvY2sgPSBvbGRfYmxvY2tzW29dO1xuICAgICAgICBpZiAoIW5ld19sb29rdXAuaGFzKG9sZF9ibG9jay5rZXkpKVxuICAgICAgICAgICAgZGVzdHJveShvbGRfYmxvY2ssIGxvb2t1cCk7XG4gICAgfVxuICAgIHdoaWxlIChuKVxuICAgICAgICBpbnNlcnQobmV3X2Jsb2Nrc1tuIC0gMV0pO1xuICAgIHJldHVybiBuZXdfYmxvY2tzO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVfZWFjaF9rZXlzKGN0eCwgbGlzdCwgZ2V0X2NvbnRleHQsIGdldF9rZXkpIHtcbiAgICBjb25zdCBrZXlzID0gbmV3IFNldCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBrZXkgPSBnZXRfa2V5KGdldF9jb250ZXh0KGN0eCwgbGlzdCwgaSkpO1xuICAgICAgICBpZiAoa2V5cy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgaGF2ZSBkdXBsaWNhdGUga2V5cyBpbiBhIGtleWVkIGVhY2gnKTtcbiAgICAgICAgfVxuICAgICAgICBrZXlzLmFkZChrZXkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0X3NwcmVhZF91cGRhdGUobGV2ZWxzLCB1cGRhdGVzKSB7XG4gICAgY29uc3QgdXBkYXRlID0ge307XG4gICAgY29uc3QgdG9fbnVsbF9vdXQgPSB7fTtcbiAgICBjb25zdCBhY2NvdW50ZWRfZm9yID0geyAkJHNjb3BlOiAxIH07XG4gICAgbGV0IGkgPSBsZXZlbHMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgY29uc3QgbyA9IGxldmVsc1tpXTtcbiAgICAgICAgY29uc3QgbiA9IHVwZGF0ZXNbaV07XG4gICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoa2V5IGluIG4pKVxuICAgICAgICAgICAgICAgICAgICB0b19udWxsX291dFtrZXldID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG4pIHtcbiAgICAgICAgICAgICAgICBpZiAoIWFjY291bnRlZF9mb3Jba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVba2V5XSA9IG5ba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudGVkX2ZvcltrZXldID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXZlbHNbaV0gPSBuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbykge1xuICAgICAgICAgICAgICAgIGFjY291bnRlZF9mb3Jba2V5XSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdG9fbnVsbF9vdXQpIHtcbiAgICAgICAgaWYgKCEoa2V5IGluIHVwZGF0ZSkpXG4gICAgICAgICAgICB1cGRhdGVba2V5XSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHVwZGF0ZTtcbn1cbmZ1bmN0aW9uIGdldF9zcHJlYWRfb2JqZWN0KHNwcmVhZF9wcm9wcykge1xuICAgIHJldHVybiB0eXBlb2Ygc3ByZWFkX3Byb3BzID09PSAnb2JqZWN0JyAmJiBzcHJlYWRfcHJvcHMgIT09IG51bGwgPyBzcHJlYWRfcHJvcHMgOiB7fTtcbn1cblxuLy8gc291cmNlOiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbmRpY2VzLmh0bWxcbmNvbnN0IGJvb2xlYW5fYXR0cmlidXRlcyA9IG5ldyBTZXQoW1xuICAgICdhbGxvd2Z1bGxzY3JlZW4nLFxuICAgICdhbGxvd3BheW1lbnRyZXF1ZXN0JyxcbiAgICAnYXN5bmMnLFxuICAgICdhdXRvZm9jdXMnLFxuICAgICdhdXRvcGxheScsXG4gICAgJ2NoZWNrZWQnLFxuICAgICdjb250cm9scycsXG4gICAgJ2RlZmF1bHQnLFxuICAgICdkZWZlcicsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnZm9ybW5vdmFsaWRhdGUnLFxuICAgICdoaWRkZW4nLFxuICAgICdpc21hcCcsXG4gICAgJ2xvb3AnLFxuICAgICdtdWx0aXBsZScsXG4gICAgJ211dGVkJyxcbiAgICAnbm9tb2R1bGUnLFxuICAgICdub3ZhbGlkYXRlJyxcbiAgICAnb3BlbicsXG4gICAgJ3BsYXlzaW5saW5lJyxcbiAgICAncmVhZG9ubHknLFxuICAgICdyZXF1aXJlZCcsXG4gICAgJ3JldmVyc2VkJyxcbiAgICAnc2VsZWN0ZWQnXG5dKTtcblxuY29uc3QgaW52YWxpZF9hdHRyaWJ1dGVfbmFtZV9jaGFyYWN0ZXIgPSAvW1xccydcIj4vPVxcdXtGREQwfS1cXHV7RkRFRn1cXHV7RkZGRX1cXHV7RkZGRn1cXHV7MUZGRkV9XFx1ezFGRkZGfVxcdXsyRkZGRX1cXHV7MkZGRkZ9XFx1ezNGRkZFfVxcdXszRkZGRn1cXHV7NEZGRkV9XFx1ezRGRkZGfVxcdXs1RkZGRX1cXHV7NUZGRkZ9XFx1ezZGRkZFfVxcdXs2RkZGRn1cXHV7N0ZGRkV9XFx1ezdGRkZGfVxcdXs4RkZGRX1cXHV7OEZGRkZ9XFx1ezlGRkZFfVxcdXs5RkZGRn1cXHV7QUZGRkV9XFx1e0FGRkZGfVxcdXtCRkZGRX1cXHV7QkZGRkZ9XFx1e0NGRkZFfVxcdXtDRkZGRn1cXHV7REZGRkV9XFx1e0RGRkZGfVxcdXtFRkZGRX1cXHV7RUZGRkZ9XFx1e0ZGRkZFfVxcdXtGRkZGRn1cXHV7MTBGRkZFfVxcdXsxMEZGRkZ9XS91O1xuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjYXR0cmlidXRlcy0yXG4vLyBodHRwczovL2luZnJhLnNwZWMud2hhdHdnLm9yZy8jbm9uY2hhcmFjdGVyXG5mdW5jdGlvbiBzcHJlYWQoYXJncywgYXR0cnNfdG9fYWRkKSB7XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oe30sIC4uLmFyZ3MpO1xuICAgIGlmIChhdHRyc190b19hZGQpIHtcbiAgICAgICAgY29uc3QgY2xhc3Nlc190b19hZGQgPSBhdHRyc190b19hZGQuY2xhc3NlcztcbiAgICAgICAgY29uc3Qgc3R5bGVzX3RvX2FkZCA9IGF0dHJzX3RvX2FkZC5zdHlsZXM7XG4gICAgICAgIGlmIChjbGFzc2VzX3RvX2FkZCkge1xuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXMuY2xhc3MgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuY2xhc3MgPSBjbGFzc2VzX3RvX2FkZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuY2xhc3MgKz0gJyAnICsgY2xhc3Nlc190b19hZGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0eWxlc190b19hZGQpIHtcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzLnN0eWxlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnN0eWxlID0gc3R5bGVfb2JqZWN0X3RvX3N0cmluZyhzdHlsZXNfdG9fYWRkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuc3R5bGUgPSBzdHlsZV9vYmplY3RfdG9fc3RyaW5nKG1lcmdlX3Nzcl9zdHlsZXMoYXR0cmlidXRlcy5zdHlsZSwgc3R5bGVzX3RvX2FkZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBzdHIgPSAnJztcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBpZiAoaW52YWxpZF9hdHRyaWJ1dGVfbmFtZV9jaGFyYWN0ZXIudGVzdChuYW1lKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBhdHRyaWJ1dGVzW25hbWVdO1xuICAgICAgICBpZiAodmFsdWUgPT09IHRydWUpXG4gICAgICAgICAgICBzdHIgKz0gJyAnICsgbmFtZTtcbiAgICAgICAgZWxzZSBpZiAoYm9vbGVhbl9hdHRyaWJ1dGVzLmhhcyhuYW1lLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUpXG4gICAgICAgICAgICAgICAgc3RyICs9ICcgJyArIG5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgc3RyICs9IGAgJHtuYW1lfT1cIiR7dmFsdWV9XCJgO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0cjtcbn1cbmZ1bmN0aW9uIG1lcmdlX3Nzcl9zdHlsZXMoc3R5bGVfYXR0cmlidXRlLCBzdHlsZV9kaXJlY3RpdmUpIHtcbiAgICBjb25zdCBzdHlsZV9vYmplY3QgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGluZGl2aWR1YWxfc3R5bGUgb2Ygc3R5bGVfYXR0cmlidXRlLnNwbGl0KCc7JykpIHtcbiAgICAgICAgY29uc3QgY29sb25faW5kZXggPSBpbmRpdmlkdWFsX3N0eWxlLmluZGV4T2YoJzonKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IGluZGl2aWR1YWxfc3R5bGUuc2xpY2UoMCwgY29sb25faW5kZXgpLnRyaW0oKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpbmRpdmlkdWFsX3N0eWxlLnNsaWNlKGNvbG9uX2luZGV4ICsgMSkudHJpbSgpO1xuICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgc3R5bGVfb2JqZWN0W25hbWVdID0gdmFsdWU7XG4gICAgfVxuICAgIGZvciAoY29uc3QgbmFtZSBpbiBzdHlsZV9kaXJlY3RpdmUpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBzdHlsZV9kaXJlY3RpdmVbbmFtZV07XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgc3R5bGVfb2JqZWN0W25hbWVdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgc3R5bGVfb2JqZWN0W25hbWVdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdHlsZV9vYmplY3Q7XG59XG5jb25zdCBlc2NhcGVkID0ge1xuICAgICdcIic6ICcmcXVvdDsnLFxuICAgIFwiJ1wiOiAnJiMzOTsnLFxuICAgICcmJzogJyZhbXA7JyxcbiAgICAnPCc6ICcmbHQ7JyxcbiAgICAnPic6ICcmZ3Q7J1xufTtcbmZ1bmN0aW9uIGVzY2FwZShodG1sKSB7XG4gICAgcmV0dXJuIFN0cmluZyhodG1sKS5yZXBsYWNlKC9bXCInJjw+XS9nLCBtYXRjaCA9PiBlc2NhcGVkW21hdGNoXSk7XG59XG5mdW5jdGlvbiBlc2NhcGVfYXR0cmlidXRlX3ZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBlc2NhcGUodmFsdWUpIDogdmFsdWU7XG59XG5mdW5jdGlvbiBlc2NhcGVfb2JqZWN0KG9iaikge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgICByZXN1bHRba2V5XSA9IGVzY2FwZV9hdHRyaWJ1dGVfdmFsdWUob2JqW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZWFjaChpdGVtcywgZm4pIHtcbiAgICBsZXQgc3RyID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBzdHIgKz0gZm4oaXRlbXNbaV0sIGkpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuY29uc3QgbWlzc2luZ19jb21wb25lbnQgPSB7XG4gICAgJCRyZW5kZXI6ICgpID0+ICcnXG59O1xuZnVuY3Rpb24gdmFsaWRhdGVfY29tcG9uZW50KGNvbXBvbmVudCwgbmFtZSkge1xuICAgIGlmICghY29tcG9uZW50IHx8ICFjb21wb25lbnQuJCRyZW5kZXIpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09ICdzdmVsdGU6Y29tcG9uZW50JylcbiAgICAgICAgICAgIG5hbWUgKz0gJyB0aGlzPXsuLi59JztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGA8JHtuYW1lfT4gaXMgbm90IGEgdmFsaWQgU1NSIGNvbXBvbmVudC4gWW91IG1heSBuZWVkIHRvIHJldmlldyB5b3VyIGJ1aWxkIGNvbmZpZyB0byBlbnN1cmUgdGhhdCBkZXBlbmRlbmNpZXMgYXJlIGNvbXBpbGVkLCByYXRoZXIgdGhhbiBpbXBvcnRlZCBhcyBwcmUtY29tcGlsZWQgbW9kdWxlc2ApO1xuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuZnVuY3Rpb24gZGVidWcoZmlsZSwgbGluZSwgY29sdW1uLCB2YWx1ZXMpIHtcbiAgICBjb25zb2xlLmxvZyhge0BkZWJ1Z30gJHtmaWxlID8gZmlsZSArICcgJyA6ICcnfSgke2xpbmV9OiR7Y29sdW1ufSlgKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5sb2codmFsdWVzKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgcmV0dXJuICcnO1xufVxubGV0IG9uX2Rlc3Ryb3k7XG5mdW5jdGlvbiBjcmVhdGVfc3NyX2NvbXBvbmVudChmbikge1xuICAgIGZ1bmN0aW9uICQkcmVuZGVyKHJlc3VsdCwgcHJvcHMsIGJpbmRpbmdzLCBzbG90cywgY29udGV4dCkge1xuICAgICAgICBjb25zdCBwYXJlbnRfY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG4gICAgICAgIGNvbnN0ICQkID0ge1xuICAgICAgICAgICAgb25fZGVzdHJveSxcbiAgICAgICAgICAgIGNvbnRleHQ6IG5ldyBNYXAoY29udGV4dCB8fCAocGFyZW50X2NvbXBvbmVudCA/IHBhcmVudF9jb21wb25lbnQuJCQuY29udGV4dCA6IFtdKSksXG4gICAgICAgICAgICAvLyB0aGVzZSB3aWxsIGJlIGltbWVkaWF0ZWx5IGRpc2NhcmRlZFxuICAgICAgICAgICAgb25fbW91bnQ6IFtdLFxuICAgICAgICAgICAgYmVmb3JlX3VwZGF0ZTogW10sXG4gICAgICAgICAgICBhZnRlcl91cGRhdGU6IFtdLFxuICAgICAgICAgICAgY2FsbGJhY2tzOiBibGFua19vYmplY3QoKVxuICAgICAgICB9O1xuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoeyAkJCB9KTtcbiAgICAgICAgY29uc3QgaHRtbCA9IGZuKHJlc3VsdCwgcHJvcHMsIGJpbmRpbmdzLCBzbG90cyk7XG4gICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChwYXJlbnRfY29tcG9uZW50KTtcbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHJlbmRlcjogKHByb3BzID0ge30sIHsgJCRzbG90cyA9IHt9LCBjb250ZXh0ID0gbmV3IE1hcCgpIH0gPSB7fSkgPT4ge1xuICAgICAgICAgICAgb25fZGVzdHJveSA9IFtdO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geyB0aXRsZTogJycsIGhlYWQ6ICcnLCBjc3M6IG5ldyBTZXQoKSB9O1xuICAgICAgICAgICAgY29uc3QgaHRtbCA9ICQkcmVuZGVyKHJlc3VsdCwgcHJvcHMsIHt9LCAkJHNsb3RzLCBjb250ZXh0KTtcbiAgICAgICAgICAgIHJ1bl9hbGwob25fZGVzdHJveSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICAgICAgY3NzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IEFycmF5LmZyb20ocmVzdWx0LmNzcykubWFwKGNzcyA9PiBjc3MuY29kZSkuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgIG1hcDogbnVsbCAvLyBUT0RPXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBoZWFkOiByZXN1bHQudGl0bGUgKyByZXN1bHQuaGVhZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgJCRyZW5kZXJcbiAgICB9O1xufVxuZnVuY3Rpb24gYWRkX2F0dHJpYnV0ZShuYW1lLCB2YWx1ZSwgYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8IChib29sZWFuICYmICF2YWx1ZSkpXG4gICAgICAgIHJldHVybiAnJztcbiAgICByZXR1cm4gYCAke25hbWV9JHt2YWx1ZSA9PT0gdHJ1ZSAmJiBib29sZWFuX2F0dHJpYnV0ZXMuaGFzKG5hbWUpID8gJycgOiBgPSR7dHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IEpTT04uc3RyaW5naWZ5KGVzY2FwZSh2YWx1ZSkpIDogYFwiJHt2YWx1ZX1cImB9YH1gO1xufVxuZnVuY3Rpb24gYWRkX2NsYXNzZXMoY2xhc3Nlcykge1xuICAgIHJldHVybiBjbGFzc2VzID8gYCBjbGFzcz1cIiR7Y2xhc3Nlc31cImAgOiAnJztcbn1cbmZ1bmN0aW9uIHN0eWxlX29iamVjdF90b19zdHJpbmcoc3R5bGVfb2JqZWN0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHN0eWxlX29iamVjdClcbiAgICAgICAgLmZpbHRlcihrZXkgPT4gc3R5bGVfb2JqZWN0W2tleV0pXG4gICAgICAgIC5tYXAoa2V5ID0+IGAke2tleX06ICR7c3R5bGVfb2JqZWN0W2tleV19O2ApXG4gICAgICAgIC5qb2luKCcgJyk7XG59XG5mdW5jdGlvbiBhZGRfc3R5bGVzKHN0eWxlX29iamVjdCkge1xuICAgIGNvbnN0IHN0eWxlcyA9IHN0eWxlX29iamVjdF90b19zdHJpbmcoc3R5bGVfb2JqZWN0KTtcbiAgICByZXR1cm4gc3R5bGVzID8gYCBzdHlsZT1cIiR7c3R5bGVzfVwiYCA6ICcnO1xufVxuXG5mdW5jdGlvbiBiaW5kKGNvbXBvbmVudCwgbmFtZSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBpbmRleCA9IGNvbXBvbmVudC4kJC5wcm9wc1tuYW1lXTtcbiAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb21wb25lbnQuJCQuYm91bmRbaW5kZXhdID0gY2FsbGJhY2s7XG4gICAgICAgIGNhbGxiYWNrKGNvbXBvbmVudC4kJC5jdHhbaW5kZXhdKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjcmVhdGVfY29tcG9uZW50KGJsb2NrKSB7XG4gICAgYmxvY2sgJiYgYmxvY2suYygpO1xufVxuZnVuY3Rpb24gY2xhaW1fY29tcG9uZW50KGJsb2NrLCBwYXJlbnRfbm9kZXMpIHtcbiAgICBibG9jayAmJiBibG9jay5sKHBhcmVudF9ub2Rlcyk7XG59XG5mdW5jdGlvbiBtb3VudF9jb21wb25lbnQoY29tcG9uZW50LCB0YXJnZXQsIGFuY2hvciwgY3VzdG9tRWxlbWVudCkge1xuICAgIGNvbnN0IHsgZnJhZ21lbnQsIG9uX21vdW50LCBvbl9kZXN0cm95LCBhZnRlcl91cGRhdGUgfSA9IGNvbXBvbmVudC4kJDtcbiAgICBmcmFnbWVudCAmJiBmcmFnbWVudC5tKHRhcmdldCwgYW5jaG9yKTtcbiAgICBpZiAoIWN1c3RvbUVsZW1lbnQpIHtcbiAgICAgICAgLy8gb25Nb3VudCBoYXBwZW5zIGJlZm9yZSB0aGUgaW5pdGlhbCBhZnRlclVwZGF0ZVxuICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld19vbl9kZXN0cm95ID0gb25fbW91bnQubWFwKHJ1bikuZmlsdGVyKGlzX2Z1bmN0aW9uKTtcbiAgICAgICAgICAgIGlmIChvbl9kZXN0cm95KSB7XG4gICAgICAgICAgICAgICAgb25fZGVzdHJveS5wdXNoKC4uLm5ld19vbl9kZXN0cm95KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEVkZ2UgY2FzZSAtIGNvbXBvbmVudCB3YXMgZGVzdHJveWVkIGltbWVkaWF0ZWx5LFxuICAgICAgICAgICAgICAgIC8vIG1vc3QgbGlrZWx5IGFzIGEgcmVzdWx0IG9mIGEgYmluZGluZyBpbml0aWFsaXNpbmdcbiAgICAgICAgICAgICAgICBydW5fYWxsKG5ld19vbl9kZXN0cm95KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbXBvbmVudC4kJC5vbl9tb3VudCA9IFtdO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWZ0ZXJfdXBkYXRlLmZvckVhY2goYWRkX3JlbmRlcl9jYWxsYmFjayk7XG59XG5mdW5jdGlvbiBkZXN0cm95X2NvbXBvbmVudChjb21wb25lbnQsIGRldGFjaGluZykge1xuICAgIGNvbnN0ICQkID0gY29tcG9uZW50LiQkO1xuICAgIGlmICgkJC5mcmFnbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBydW5fYWxsKCQkLm9uX2Rlc3Ryb3kpO1xuICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5kKGRldGFjaGluZyk7XG4gICAgICAgIC8vIFRPRE8gbnVsbCBvdXQgb3RoZXIgcmVmcywgaW5jbHVkaW5nIGNvbXBvbmVudC4kJCAoYnV0IG5lZWQgdG9cbiAgICAgICAgLy8gcHJlc2VydmUgZmluYWwgc3RhdGU/KVxuICAgICAgICAkJC5vbl9kZXN0cm95ID0gJCQuZnJhZ21lbnQgPSBudWxsO1xuICAgICAgICAkJC5jdHggPSBbXTtcbiAgICB9XG59XG5mdW5jdGlvbiBtYWtlX2RpcnR5KGNvbXBvbmVudCwgaSkge1xuICAgIGlmIChjb21wb25lbnQuJCQuZGlydHlbMF0gPT09IC0xKSB7XG4gICAgICAgIGRpcnR5X2NvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgICBzY2hlZHVsZV91cGRhdGUoKTtcbiAgICAgICAgY29tcG9uZW50LiQkLmRpcnR5LmZpbGwoMCk7XG4gICAgfVxuICAgIGNvbXBvbmVudC4kJC5kaXJ0eVsoaSAvIDMxKSB8IDBdIHw9ICgxIDw8IChpICUgMzEpKTtcbn1cbmZ1bmN0aW9uIGluaXQoY29tcG9uZW50LCBvcHRpb25zLCBpbnN0YW5jZSwgY3JlYXRlX2ZyYWdtZW50LCBub3RfZXF1YWwsIHByb3BzLCBhcHBlbmRfc3R5bGVzLCBkaXJ0eSA9IFstMV0pIHtcbiAgICBjb25zdCBwYXJlbnRfY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG4gICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgY29uc3QgJCQgPSBjb21wb25lbnQuJCQgPSB7XG4gICAgICAgIGZyYWdtZW50OiBudWxsLFxuICAgICAgICBjdHg6IG51bGwsXG4gICAgICAgIC8vIHN0YXRlXG4gICAgICAgIHByb3BzLFxuICAgICAgICB1cGRhdGU6IG5vb3AsXG4gICAgICAgIG5vdF9lcXVhbCxcbiAgICAgICAgYm91bmQ6IGJsYW5rX29iamVjdCgpLFxuICAgICAgICAvLyBsaWZlY3ljbGVcbiAgICAgICAgb25fbW91bnQ6IFtdLFxuICAgICAgICBvbl9kZXN0cm95OiBbXSxcbiAgICAgICAgb25fZGlzY29ubmVjdDogW10sXG4gICAgICAgIGJlZm9yZV91cGRhdGU6IFtdLFxuICAgICAgICBhZnRlcl91cGRhdGU6IFtdLFxuICAgICAgICBjb250ZXh0OiBuZXcgTWFwKG9wdGlvbnMuY29udGV4dCB8fCAocGFyZW50X2NvbXBvbmVudCA/IHBhcmVudF9jb21wb25lbnQuJCQuY29udGV4dCA6IFtdKSksXG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZWxzZVxuICAgICAgICBjYWxsYmFja3M6IGJsYW5rX29iamVjdCgpLFxuICAgICAgICBkaXJ0eSxcbiAgICAgICAgc2tpcF9ib3VuZDogZmFsc2UsXG4gICAgICAgIHJvb3Q6IG9wdGlvbnMudGFyZ2V0IHx8IHBhcmVudF9jb21wb25lbnQuJCQucm9vdFxuICAgIH07XG4gICAgYXBwZW5kX3N0eWxlcyAmJiBhcHBlbmRfc3R5bGVzKCQkLnJvb3QpO1xuICAgIGxldCByZWFkeSA9IGZhbHNlO1xuICAgICQkLmN0eCA9IGluc3RhbmNlXG4gICAgICAgID8gaW5zdGFuY2UoY29tcG9uZW50LCBvcHRpb25zLnByb3BzIHx8IHt9LCAoaSwgcmV0LCAuLi5yZXN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJlc3QubGVuZ3RoID8gcmVzdFswXSA6IHJldDtcbiAgICAgICAgICAgIGlmICgkJC5jdHggJiYgbm90X2VxdWFsKCQkLmN0eFtpXSwgJCQuY3R4W2ldID0gdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEkJC5za2lwX2JvdW5kICYmICQkLmJvdW5kW2ldKVxuICAgICAgICAgICAgICAgICAgICAkJC5ib3VuZFtpXSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlYWR5KVxuICAgICAgICAgICAgICAgICAgICBtYWtlX2RpcnR5KGNvbXBvbmVudCwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9KVxuICAgICAgICA6IFtdO1xuICAgICQkLnVwZGF0ZSgpO1xuICAgIHJlYWR5ID0gdHJ1ZTtcbiAgICBydW5fYWxsKCQkLmJlZm9yZV91cGRhdGUpO1xuICAgIC8vIGBmYWxzZWAgYXMgYSBzcGVjaWFsIGNhc2Ugb2Ygbm8gRE9NIGNvbXBvbmVudFxuICAgICQkLmZyYWdtZW50ID0gY3JlYXRlX2ZyYWdtZW50ID8gY3JlYXRlX2ZyYWdtZW50KCQkLmN0eCkgOiBmYWxzZTtcbiAgICBpZiAob3B0aW9ucy50YXJnZXQpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuaHlkcmF0ZSkge1xuICAgICAgICAgICAgc3RhcnRfaHlkcmF0aW5nKCk7XG4gICAgICAgICAgICBjb25zdCBub2RlcyA9IGNoaWxkcmVuKG9wdGlvbnMudGFyZ2V0KTtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5sKG5vZGVzKTtcbiAgICAgICAgICAgIG5vZGVzLmZvckVhY2goZGV0YWNoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuaW50cm8pXG4gICAgICAgICAgICB0cmFuc2l0aW9uX2luKGNvbXBvbmVudC4kJC5mcmFnbWVudCk7XG4gICAgICAgIG1vdW50X2NvbXBvbmVudChjb21wb25lbnQsIG9wdGlvbnMudGFyZ2V0LCBvcHRpb25zLmFuY2hvciwgb3B0aW9ucy5jdXN0b21FbGVtZW50KTtcbiAgICAgICAgZW5kX2h5ZHJhdGluZygpO1xuICAgICAgICBmbHVzaCgpO1xuICAgIH1cbiAgICBzZXRfY3VycmVudF9jb21wb25lbnQocGFyZW50X2NvbXBvbmVudCk7XG59XG5sZXQgU3ZlbHRlRWxlbWVudDtcbmlmICh0eXBlb2YgSFRNTEVsZW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBTdmVsdGVFbGVtZW50ID0gY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICAgICAgY29uc3QgeyBvbl9tb3VudCB9ID0gdGhpcy4kJDtcbiAgICAgICAgICAgIHRoaXMuJCQub25fZGlzY29ubmVjdCA9IG9uX21vdW50Lm1hcChydW4pLmZpbHRlcihpc19mdW5jdGlvbik7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRvZG86IGltcHJvdmUgdHlwaW5nc1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy4kJC5zbG90dGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBpbXByb3ZlIHR5cGluZ3NcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuJCQuc2xvdHRlZFtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0ciwgX29sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpc1thdHRyXSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICAgICAgcnVuX2FsbCh0aGlzLiQkLm9uX2Rpc2Nvbm5lY3QpO1xuICAgICAgICB9XG4gICAgICAgICRkZXN0cm95KCkge1xuICAgICAgICAgICAgZGVzdHJveV9jb21wb25lbnQodGhpcywgMSk7XG4gICAgICAgICAgICB0aGlzLiRkZXN0cm95ID0gbm9vcDtcbiAgICAgICAgfVxuICAgICAgICAkb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIC8vIFRPRE8gc2hvdWxkIHRoaXMgZGVsZWdhdGUgdG8gYWRkRXZlbnRMaXN0ZW5lcj9cbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSB8fCAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gPSBbXSkpO1xuICAgICAgICAgICAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGNhbGxiYWNrcy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKVxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgJHNldCgkJHByb3BzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kJHNldCAmJiAhaXNfZW1wdHkoJCRwcm9wcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiQkLnNraXBfYm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJCRzZXQoJCRwcm9wcyk7XG4gICAgICAgICAgICAgICAgdGhpcy4kJC5za2lwX2JvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBTdmVsdGUgY29tcG9uZW50cy4gVXNlZCB3aGVuIGRldj1mYWxzZS5cbiAqL1xuY2xhc3MgU3ZlbHRlQ29tcG9uZW50IHtcbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgZGVzdHJveV9jb21wb25lbnQodGhpcywgMSk7XG4gICAgICAgIHRoaXMuJGRlc3Ryb3kgPSBub29wO1xuICAgIH1cbiAgICAkb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdIHx8ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSA9IFtdKSk7XG4gICAgICAgIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICBjYWxsYmFja3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgJHNldCgkJHByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLiQkc2V0ICYmICFpc19lbXB0eSgkJHByb3BzKSkge1xuICAgICAgICAgICAgdGhpcy4kJC5za2lwX2JvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuJCRzZXQoJCRwcm9wcyk7XG4gICAgICAgICAgICB0aGlzLiQkLnNraXBfYm91bmQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hfZGV2KHR5cGUsIGRldGFpbCkge1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoY3VzdG9tX2V2ZW50KHR5cGUsIE9iamVjdC5hc3NpZ24oeyB2ZXJzaW9uOiAnMy40Ni40JyB9LCBkZXRhaWwpLCB0cnVlKSk7XG59XG5mdW5jdGlvbiBhcHBlbmRfZGV2KHRhcmdldCwgbm9kZSkge1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NSW5zZXJ0JywgeyB0YXJnZXQsIG5vZGUgfSk7XG4gICAgYXBwZW5kKHRhcmdldCwgbm9kZSk7XG59XG5mdW5jdGlvbiBhcHBlbmRfaHlkcmF0aW9uX2Rldih0YXJnZXQsIG5vZGUpIHtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTUluc2VydCcsIHsgdGFyZ2V0LCBub2RlIH0pO1xuICAgIGFwcGVuZF9oeWRyYXRpb24odGFyZ2V0LCBub2RlKTtcbn1cbmZ1bmN0aW9uIGluc2VydF9kZXYodGFyZ2V0LCBub2RlLCBhbmNob3IpIHtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTUluc2VydCcsIHsgdGFyZ2V0LCBub2RlLCBhbmNob3IgfSk7XG4gICAgaW5zZXJ0KHRhcmdldCwgbm9kZSwgYW5jaG9yKTtcbn1cbmZ1bmN0aW9uIGluc2VydF9oeWRyYXRpb25fZGV2KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01JbnNlcnQnLCB7IHRhcmdldCwgbm9kZSwgYW5jaG9yIH0pO1xuICAgIGluc2VydF9oeWRyYXRpb24odGFyZ2V0LCBub2RlLCBhbmNob3IpO1xufVxuZnVuY3Rpb24gZGV0YWNoX2Rldihub2RlKSB7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01SZW1vdmUnLCB7IG5vZGUgfSk7XG4gICAgZGV0YWNoKG5vZGUpO1xufVxuZnVuY3Rpb24gZGV0YWNoX2JldHdlZW5fZGV2KGJlZm9yZSwgYWZ0ZXIpIHtcbiAgICB3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nICYmIGJlZm9yZS5uZXh0U2libGluZyAhPT0gYWZ0ZXIpIHtcbiAgICAgICAgZGV0YWNoX2RldihiZWZvcmUubmV4dFNpYmxpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRldGFjaF9iZWZvcmVfZGV2KGFmdGVyKSB7XG4gICAgd2hpbGUgKGFmdGVyLnByZXZpb3VzU2libGluZykge1xuICAgICAgICBkZXRhY2hfZGV2KGFmdGVyLnByZXZpb3VzU2libGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGV0YWNoX2FmdGVyX2RldihiZWZvcmUpIHtcbiAgICB3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nKSB7XG4gICAgICAgIGRldGFjaF9kZXYoYmVmb3JlLm5leHRTaWJsaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBsaXN0ZW5fZGV2KG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zLCBoYXNfcHJldmVudF9kZWZhdWx0LCBoYXNfc3RvcF9wcm9wYWdhdGlvbikge1xuICAgIGNvbnN0IG1vZGlmaWVycyA9IG9wdGlvbnMgPT09IHRydWUgPyBbJ2NhcHR1cmUnXSA6IG9wdGlvbnMgPyBBcnJheS5mcm9tKE9iamVjdC5rZXlzKG9wdGlvbnMpKSA6IFtdO1xuICAgIGlmIChoYXNfcHJldmVudF9kZWZhdWx0KVxuICAgICAgICBtb2RpZmllcnMucHVzaCgncHJldmVudERlZmF1bHQnKTtcbiAgICBpZiAoaGFzX3N0b3BfcHJvcGFnYXRpb24pXG4gICAgICAgIG1vZGlmaWVycy5wdXNoKCdzdG9wUHJvcGFnYXRpb24nKTtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTUFkZEV2ZW50TGlzdGVuZXInLCB7IG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBtb2RpZmllcnMgfSk7XG4gICAgY29uc3QgZGlzcG9zZSA9IGxpc3Rlbihub2RlLCBldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01SZW1vdmVFdmVudExpc3RlbmVyJywgeyBub2RlLCBldmVudCwgaGFuZGxlciwgbW9kaWZpZXJzIH0pO1xuICAgICAgICBkaXNwb3NlKCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGF0dHJfZGV2KG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBhdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKVxuICAgICAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVJlbW92ZUF0dHJpYnV0ZScsIHsgbm9kZSwgYXR0cmlidXRlIH0pO1xuICAgIGVsc2VcbiAgICAgICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01TZXRBdHRyaWJ1dGUnLCB7IG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUgfSk7XG59XG5mdW5jdGlvbiBwcm9wX2Rldihub2RlLCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBub2RlW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NU2V0UHJvcGVydHknLCB7IG5vZGUsIHByb3BlcnR5LCB2YWx1ZSB9KTtcbn1cbmZ1bmN0aW9uIGRhdGFzZXRfZGV2KG5vZGUsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIG5vZGUuZGF0YXNldFtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVNldERhdGFzZXQnLCB7IG5vZGUsIHByb3BlcnR5LCB2YWx1ZSB9KTtcbn1cbmZ1bmN0aW9uIHNldF9kYXRhX2Rldih0ZXh0LCBkYXRhKSB7XG4gICAgZGF0YSA9ICcnICsgZGF0YTtcbiAgICBpZiAodGV4dC53aG9sZVRleHQgPT09IGRhdGEpXG4gICAgICAgIHJldHVybjtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVNldERhdGEnLCB7IG5vZGU6IHRleHQsIGRhdGEgfSk7XG4gICAgdGV4dC5kYXRhID0gZGF0YTtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX2VhY2hfYXJndW1lbnQoYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdzdHJpbmcnICYmICEoYXJnICYmIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIGFyZykpIHtcbiAgICAgICAgbGV0IG1zZyA9ICd7I2VhY2h9IG9ubHkgaXRlcmF0ZXMgb3ZlciBhcnJheS1saWtlIG9iamVjdHMuJztcbiAgICAgICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgYXJnICYmIFN5bWJvbC5pdGVyYXRvciBpbiBhcmcpIHtcbiAgICAgICAgICAgIG1zZyArPSAnIFlvdSBjYW4gdXNlIGEgc3ByZWFkIHRvIGNvbnZlcnQgdGhpcyBpdGVyYWJsZSBpbnRvIGFuIGFycmF5Lic7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gdmFsaWRhdGVfc2xvdHMobmFtZSwgc2xvdCwga2V5cykge1xuICAgIGZvciAoY29uc3Qgc2xvdF9rZXkgb2YgT2JqZWN0LmtleXMoc2xvdCkpIHtcbiAgICAgICAgaWYgKCF+a2V5cy5pbmRleE9mKHNsb3Rfa2V5KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGA8JHtuYW1lfT4gcmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBzbG90IFwiJHtzbG90X2tleX1cIi5gKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgU3ZlbHRlIGNvbXBvbmVudHMgd2l0aCBzb21lIG1pbm9yIGRldi1lbmhhbmNlbWVudHMuIFVzZWQgd2hlbiBkZXY9dHJ1ZS5cbiAqL1xuY2xhc3MgU3ZlbHRlQ29tcG9uZW50RGV2IGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIGlmICghb3B0aW9ucyB8fCAoIW9wdGlvbnMudGFyZ2V0ICYmICFvcHRpb25zLiQkaW5saW5lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiJ3RhcmdldCcgaXMgYSByZXF1aXJlZCBvcHRpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIHN1cGVyLiRkZXN0cm95KCk7XG4gICAgICAgIHRoaXMuJGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0NvbXBvbmVudCB3YXMgYWxyZWFkeSBkZXN0cm95ZWQnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgIH07XG4gICAgfVxuICAgICRjYXB0dXJlX3N0YXRlKCkgeyB9XG4gICAgJGluamVjdF9zdGF0ZSgpIHsgfVxufVxuLyoqXG4gKiBCYXNlIGNsYXNzIHRvIGNyZWF0ZSBzdHJvbmdseSB0eXBlZCBTdmVsdGUgY29tcG9uZW50cy5cbiAqIFRoaXMgb25seSBleGlzdHMgZm9yIHR5cGluZyBwdXJwb3NlcyBhbmQgc2hvdWxkIGJlIHVzZWQgaW4gYC5kLnRzYCBmaWxlcy5cbiAqXG4gKiAjIyMgRXhhbXBsZTpcbiAqXG4gKiBZb3UgaGF2ZSBjb21wb25lbnQgbGlicmFyeSBvbiBucG0gY2FsbGVkIGBjb21wb25lbnQtbGlicmFyeWAsIGZyb20gd2hpY2hcbiAqIHlvdSBleHBvcnQgYSBjb21wb25lbnQgY2FsbGVkIGBNeUNvbXBvbmVudGAuIEZvciBTdmVsdGUrVHlwZVNjcmlwdCB1c2VycyxcbiAqIHlvdSB3YW50IHRvIHByb3ZpZGUgdHlwaW5ncy4gVGhlcmVmb3JlIHlvdSBjcmVhdGUgYSBgaW5kZXguZC50c2A6XG4gKiBgYGB0c1xuICogaW1wb3J0IHsgU3ZlbHRlQ29tcG9uZW50VHlwZWQgfSBmcm9tIFwic3ZlbHRlXCI7XG4gKiBleHBvcnQgY2xhc3MgTXlDb21wb25lbnQgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnRUeXBlZDx7Zm9vOiBzdHJpbmd9PiB7fVxuICogYGBgXG4gKiBUeXBpbmcgdGhpcyBtYWtlcyBpdCBwb3NzaWJsZSBmb3IgSURFcyBsaWtlIFZTIENvZGUgd2l0aCB0aGUgU3ZlbHRlIGV4dGVuc2lvblxuICogdG8gcHJvdmlkZSBpbnRlbGxpc2Vuc2UgYW5kIHRvIHVzZSB0aGUgY29tcG9uZW50IGxpa2UgdGhpcyBpbiBhIFN2ZWx0ZSBmaWxlXG4gKiB3aXRoIFR5cGVTY3JpcHQ6XG4gKiBgYGBzdmVsdGVcbiAqIDxzY3JpcHQgbGFuZz1cInRzXCI+XG4gKiBcdGltcG9ydCB7IE15Q29tcG9uZW50IH0gZnJvbSBcImNvbXBvbmVudC1saWJyYXJ5XCI7XG4gKiA8L3NjcmlwdD5cbiAqIDxNeUNvbXBvbmVudCBmb289eydiYXInfSAvPlxuICogYGBgXG4gKlxuICogIyMjIyBXaHkgbm90IG1ha2UgdGhpcyBwYXJ0IG9mIGBTdmVsdGVDb21wb25lbnQoRGV2KWA/XG4gKiBCZWNhdXNlXG4gKiBgYGB0c1xuICogY2xhc3MgQVN1YmNsYXNzT2ZTdmVsdGVDb21wb25lbnQgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQ8e2Zvbzogc3RyaW5nfT4ge31cbiAqIGNvbnN0IGNvbXBvbmVudDogdHlwZW9mIFN2ZWx0ZUNvbXBvbmVudCA9IEFTdWJjbGFzc09mU3ZlbHRlQ29tcG9uZW50O1xuICogYGBgXG4gKiB3aWxsIHRocm93IGEgdHlwZSBlcnJvciwgc28gd2UgbmVlZCB0byBzZXBhcmF0ZSB0aGUgbW9yZSBzdHJpY3RseSB0eXBlZCBjbGFzcy5cbiAqL1xuY2xhc3MgU3ZlbHRlQ29tcG9uZW50VHlwZWQgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnREZXYge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgfVxufVxuZnVuY3Rpb24gbG9vcF9ndWFyZCh0aW1lb3V0KSB7XG4gICAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmIChEYXRlLm5vdygpIC0gc3RhcnQgPiB0aW1lb3V0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luZmluaXRlIGxvb3AgZGV0ZWN0ZWQnKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCB7IEh0bWxUYWcsIEh0bWxUYWdIeWRyYXRpb24sIFN2ZWx0ZUNvbXBvbmVudCwgU3ZlbHRlQ29tcG9uZW50RGV2LCBTdmVsdGVDb21wb25lbnRUeXBlZCwgU3ZlbHRlRWxlbWVudCwgYWN0aW9uX2Rlc3Ryb3llciwgYWRkX2F0dHJpYnV0ZSwgYWRkX2NsYXNzZXMsIGFkZF9mbHVzaF9jYWxsYmFjaywgYWRkX2xvY2F0aW9uLCBhZGRfcmVuZGVyX2NhbGxiYWNrLCBhZGRfcmVzaXplX2xpc3RlbmVyLCBhZGRfc3R5bGVzLCBhZGRfdHJhbnNmb3JtLCBhZnRlclVwZGF0ZSwgYXBwZW5kLCBhcHBlbmRfZGV2LCBhcHBlbmRfZW1wdHlfc3R5bGVzaGVldCwgYXBwZW5kX2h5ZHJhdGlvbiwgYXBwZW5kX2h5ZHJhdGlvbl9kZXYsIGFwcGVuZF9zdHlsZXMsIGFzc2lnbiwgYXR0ciwgYXR0cl9kZXYsIGF0dHJpYnV0ZV90b19vYmplY3QsIGJlZm9yZVVwZGF0ZSwgYmluZCwgYmluZGluZ19jYWxsYmFja3MsIGJsYW5rX29iamVjdCwgYnViYmxlLCBjaGVja19vdXRyb3MsIGNoaWxkcmVuLCBjbGFpbV9jb21wb25lbnQsIGNsYWltX2VsZW1lbnQsIGNsYWltX2h0bWxfdGFnLCBjbGFpbV9zcGFjZSwgY2xhaW1fc3ZnX2VsZW1lbnQsIGNsYWltX3RleHQsIGNsZWFyX2xvb3BzLCBjb21wb25lbnRfc3Vic2NyaWJlLCBjb21wdXRlX3Jlc3RfcHJvcHMsIGNvbXB1dGVfc2xvdHMsIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlciwgY3JlYXRlX2FuaW1hdGlvbiwgY3JlYXRlX2JpZGlyZWN0aW9uYWxfdHJhbnNpdGlvbiwgY3JlYXRlX2NvbXBvbmVudCwgY3JlYXRlX2luX3RyYW5zaXRpb24sIGNyZWF0ZV9vdXRfdHJhbnNpdGlvbiwgY3JlYXRlX3Nsb3QsIGNyZWF0ZV9zc3JfY29tcG9uZW50LCBjdXJyZW50X2NvbXBvbmVudCwgY3VzdG9tX2V2ZW50LCBkYXRhc2V0X2RldiwgZGVidWcsIGRlc3Ryb3lfYmxvY2ssIGRlc3Ryb3lfY29tcG9uZW50LCBkZXN0cm95X2VhY2gsIGRldGFjaCwgZGV0YWNoX2FmdGVyX2RldiwgZGV0YWNoX2JlZm9yZV9kZXYsIGRldGFjaF9iZXR3ZWVuX2RldiwgZGV0YWNoX2RldiwgZGlydHlfY29tcG9uZW50cywgZGlzcGF0Y2hfZGV2LCBlYWNoLCBlbGVtZW50LCBlbGVtZW50X2lzLCBlbXB0eSwgZW5kX2h5ZHJhdGluZywgZXNjYXBlLCBlc2NhcGVfYXR0cmlidXRlX3ZhbHVlLCBlc2NhcGVfb2JqZWN0LCBlc2NhcGVkLCBleGNsdWRlX2ludGVybmFsX3Byb3BzLCBmaXhfYW5kX2Rlc3Ryb3lfYmxvY2ssIGZpeF9hbmRfb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2ssIGZpeF9wb3NpdGlvbiwgZmx1c2gsIGdldEFsbENvbnRleHRzLCBnZXRDb250ZXh0LCBnZXRfYWxsX2RpcnR5X2Zyb21fc2NvcGUsIGdldF9iaW5kaW5nX2dyb3VwX3ZhbHVlLCBnZXRfY3VycmVudF9jb21wb25lbnQsIGdldF9jdXN0b21fZWxlbWVudHNfc2xvdHMsIGdldF9yb290X2Zvcl9zdHlsZSwgZ2V0X3Nsb3RfY2hhbmdlcywgZ2V0X3NwcmVhZF9vYmplY3QsIGdldF9zcHJlYWRfdXBkYXRlLCBnZXRfc3RvcmVfdmFsdWUsIGdsb2JhbHMsIGdyb3VwX291dHJvcywgaGFuZGxlX3Byb21pc2UsIGhhc0NvbnRleHQsIGhhc19wcm9wLCBpZGVudGl0eSwgaW5pdCwgaW5zZXJ0LCBpbnNlcnRfZGV2LCBpbnNlcnRfaHlkcmF0aW9uLCBpbnNlcnRfaHlkcmF0aW9uX2RldiwgaW50cm9zLCBpbnZhbGlkX2F0dHJpYnV0ZV9uYW1lX2NoYXJhY3RlciwgaXNfY2xpZW50LCBpc19jcm9zc29yaWdpbiwgaXNfZW1wdHksIGlzX2Z1bmN0aW9uLCBpc19wcm9taXNlLCBsaXN0ZW4sIGxpc3Rlbl9kZXYsIGxvb3AsIGxvb3BfZ3VhcmQsIG1lcmdlX3Nzcl9zdHlsZXMsIG1pc3NpbmdfY29tcG9uZW50LCBtb3VudF9jb21wb25lbnQsIG5vb3AsIG5vdF9lcXVhbCwgbm93LCBudWxsX3RvX2VtcHR5LCBvYmplY3Rfd2l0aG91dF9wcm9wZXJ0aWVzLCBvbkRlc3Ryb3ksIG9uTW91bnQsIG9uY2UsIG91dHJvX2FuZF9kZXN0cm95X2Jsb2NrLCBwcmV2ZW50X2RlZmF1bHQsIHByb3BfZGV2LCBxdWVyeV9zZWxlY3Rvcl9hbGwsIHJhZiwgcnVuLCBydW5fYWxsLCBzYWZlX25vdF9lcXVhbCwgc2NoZWR1bGVfdXBkYXRlLCBzZWxlY3RfbXVsdGlwbGVfdmFsdWUsIHNlbGVjdF9vcHRpb24sIHNlbGVjdF9vcHRpb25zLCBzZWxlY3RfdmFsdWUsIHNlbGYsIHNldENvbnRleHQsIHNldF9hdHRyaWJ1dGVzLCBzZXRfY3VycmVudF9jb21wb25lbnQsIHNldF9jdXN0b21fZWxlbWVudF9kYXRhLCBzZXRfZGF0YSwgc2V0X2RhdGFfZGV2LCBzZXRfaW5wdXRfdHlwZSwgc2V0X2lucHV0X3ZhbHVlLCBzZXRfbm93LCBzZXRfcmFmLCBzZXRfc3RvcmVfdmFsdWUsIHNldF9zdHlsZSwgc2V0X3N2Z19hdHRyaWJ1dGVzLCBzcGFjZSwgc3ByZWFkLCBzcmNfdXJsX2VxdWFsLCBzdGFydF9oeWRyYXRpbmcsIHN0b3BfcHJvcGFnYXRpb24sIHN1YnNjcmliZSwgc3ZnX2VsZW1lbnQsIHRleHQsIHRpY2ssIHRpbWVfcmFuZ2VzX3RvX2FycmF5LCB0b19udW1iZXIsIHRvZ2dsZV9jbGFzcywgdHJhbnNpdGlvbl9pbiwgdHJhbnNpdGlvbl9vdXQsIHRydXN0ZWQsIHVwZGF0ZV9hd2FpdF9ibG9ja19icmFuY2gsIHVwZGF0ZV9rZXllZF9lYWNoLCB1cGRhdGVfc2xvdCwgdXBkYXRlX3Nsb3RfYmFzZSwgdmFsaWRhdGVfY29tcG9uZW50LCB2YWxpZGF0ZV9lYWNoX2FyZ3VtZW50LCB2YWxpZGF0ZV9lYWNoX2tleXMsIHZhbGlkYXRlX3Nsb3RzLCB2YWxpZGF0ZV9zdG9yZSwgeGxpbmtfYXR0ciB9O1xuIiwiPHN2ZWx0ZTpvcHRpb25zIHRhZz1cIm55bGFzLWRhdGVwaWNrZXJcIiBpbW11dGFibGU9e3RydWV9IC8+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB7IHRpY2sgfSBmcm9tIFwic3ZlbHRlXCI7XG4gIGNvbnN0IG1vbnRoczogc3RyaW5nW10gPSBbXG4gICAgXCJKYW51YXJ5XCIsXG4gICAgXCJGZWJydWFyeVwiLFxuICAgIFwiTWFyY2hcIixcbiAgICBcIkFwcmlsXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1bmVcIixcbiAgICBcIkp1bHlcIixcbiAgICBcIkF1Z3VzdFwiLFxuICAgIFwiU2VwdGVtYmVyXCIsXG4gICAgXCJPY3RvYmVyXCIsXG4gICAgXCJOb3ZlbWJlclwiLFxuICAgIFwiRGVjZW1iZXJcIixcbiAgXTtcbiAgZXhwb3J0IGxldCB2YWx1ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGV4cG9ydCBsZXQgbWluOiBEYXRlIHwgbnVsbDtcbiAgZXhwb3J0IGxldCBtYXg6IERhdGUgfCBudWxsO1xuICBleHBvcnQgbGV0IHRpbWVwaWNrZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBjaGFuZ2U6IERhdGVwaWNrZXIuQ2hhbmdlQ2FsbGJhY2sgfCB2b2lkO1xuICBsZXQgY3VycmVudERhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICBsZXQgc2VsZWN0ZWREYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgbGV0IGRhdGVzOiBEYXRlcGlja2VyLkRhdGVzW10gPSBbXTtcbiAgbGV0IGhvdXJzOiBEYXRlcGlja2VyLlRpbWVbXSA9IFtdO1xuICBsZXQgbWludXRlczogRGF0ZXBpY2tlci5UaW1lW10gPSBbXTtcbiAgbGV0IGhvdXJzU2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgbGV0IG1pbnV0ZXNTZWxlY3Q6IEhUTUxTZWxlY3RFbGVtZW50O1xuICBjb25zdCBVTklYREFZOiBudW1iZXIgPSA4NjM0MDAwMDsgLy8gMjNoIDU5bVxuICBjb25zdCBwb3B1bGF0ZSA9ICgpID0+IHtcbiAgICAvLyBTZXQgaW5pdGlhbCB2YWx1ZXNcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHNlbGVjdGVkRGF0ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBpZiAodGltZXBpY2tlcikge1xuICAgICAgZ2V0SG91cnMoKTtcbiAgICAgIGdldE1pbnV0ZXMoKTtcbiAgICB9XG4gIH07XG4gIC8vIFJldHVybnMgbnVtYmVyIG9mIGRheXMgb2YgdGhlIG1vbnRoXG4gIGNvbnN0IGRheXNJbk1vbnRoID0gKFxuICAgIHllYXI6IG51bWJlcixcbiAgICBtb250aDogbnVtYmVyLFxuICAgIG1vZGlmaWVyOiBudW1iZXIgPSAxLFxuICApOiBudW1iZXIgPT4ge1xuICAgIGxldCBkID0gbmV3IERhdGUoeWVhciwgbW9udGggKyBtb2RpZmllciwgMCk7XG4gICAgcmV0dXJuIGQuZ2V0RGF0ZSgpO1xuICB9O1xuICAvLyBDaGFuZ2VzIG1vbnRoXG4gIGNvbnN0IGNoYW5nZU1vbnRoID0gKHg6IG51bWJlcikgPT4ge1xuICAgIGN1cnJlbnREYXRlID0gbmV3IERhdGUoY3VycmVudERhdGUuc2V0TW9udGgoY3VycmVudERhdGUuZ2V0TW9udGgoKSArIHgpKTtcbiAgICBzZXREYXlzKCk7XG4gIH07XG4gIGNvbnN0IHNldERhdGUgPSAoZGF0ZTogRGF0ZSkgPT4ge1xuICAgIGNvbnN0IGRhdGVUb1NlbGVjdCA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIC8vIGlmIHRpbWVwaWNrZXIgYWN0aXZlIHNldCB0aW1lIGFzIHdlbGxcbiAgICBpZiAodGltZXBpY2tlcikge1xuICAgICAgZGF0ZVRvU2VsZWN0LnNldEhvdXJzKHBhcnNlSW50KGhvdXJzU2VsZWN0LnZhbHVlKSk7XG4gICAgICBkYXRlVG9TZWxlY3Quc2V0TWludXRlcyhwYXJzZUludChtaW51dGVzU2VsZWN0LnZhbHVlKSk7XG4gICAgfVxuICAgIHNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKGRhdGVUb1NlbGVjdCk7XG5cbiAgICBpZiAobWluKSB7XG4gICAgICBpZiAoZm9ybWF0RGF0ZShtaW4pID09PSBmb3JtYXREYXRlKGRhdGUpKSB7XG4gICAgICAgIHNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKG1pbik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChtYXgpIHtcbiAgICAgIGlmIChmb3JtYXREYXRlKG1heCkgPT09IGZvcm1hdERhdGUoZGF0ZSkpIHtcbiAgICAgICAgc2VsZWN0ZWREYXRlID0gbmV3IERhdGUobWF4KTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0U2VsZWN0ZWQoKTtcbiAgICBpZiAodGltZXBpY2tlcikge1xuICAgICAgc2V0SG91cnMoKTtcbiAgICAgIHNldE1pbnV0ZXMoKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHNldEhvdXIgPSAoKSA9PiB7XG4gICAgc2VsZWN0ZWREYXRlID0gbmV3IERhdGUoc2VsZWN0ZWREYXRlLnNldEhvdXJzKHBhcnNlSW50KGhvdXJzU2VsZWN0LnZhbHVlKSkpO1xuICAgIGlmIChtaW4gJiYgIW1heCkge1xuICAgICAgaWYgKGZvcm1hdERhdGUobWluKSA9PT0gZm9ybWF0RGF0ZShzZWxlY3RlZERhdGUpKSB7XG4gICAgICAgIHNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKHNlbGVjdGVkRGF0ZS5zZXRNaW51dGVzKG1pbi5nZXRNaW51dGVzKCkpKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1heCAmJiAhbWluKSB7XG4gICAgICBpZiAoZm9ybWF0RGF0ZShtYXgpID09PSBmb3JtYXREYXRlKHNlbGVjdGVkRGF0ZSkpIHtcbiAgICAgICAgc2VsZWN0ZWREYXRlID0gbmV3IERhdGUoc2VsZWN0ZWREYXRlLnNldE1pbnV0ZXMobWF4LmdldE1pbnV0ZXMoKSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobWF4ICYmIG1pbikge1xuICAgICAgaWYgKGZvcm1hdERhdGUobWluKSA9PT0gZm9ybWF0RGF0ZShzZWxlY3RlZERhdGUpKSB7XG4gICAgICAgIHNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKHNlbGVjdGVkRGF0ZS5zZXRNaW51dGVzKG1pbi5nZXRNaW51dGVzKCkpKTtcbiAgICAgIH0gZWxzZSBpZiAoZm9ybWF0RGF0ZShtYXgpID09PSBmb3JtYXREYXRlKHNlbGVjdGVkRGF0ZSkpIHtcbiAgICAgICAgc2VsZWN0ZWREYXRlID0gbmV3IERhdGUoc2VsZWN0ZWREYXRlLnNldE1pbnV0ZXMobWF4LmdldE1pbnV0ZXMoKSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgfVxuICAgIHNldE1pbnV0ZXMoKTtcbiAgfTtcbiAgY29uc3Qgc2V0TWludXRlID0gKCkgPT4ge1xuICAgIHNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgc2VsZWN0ZWREYXRlLnNldE1pbnV0ZXMocGFyc2VJbnQobWludXRlc1NlbGVjdC52YWx1ZSkpLFxuICAgICk7XG4gIH07XG4gIGNvbnN0IHNldENsb2NrID0gKGhvdXJzOiBudW1iZXIpID0+IHtcbiAgICBzZWxlY3RlZERhdGUgPSBuZXcgRGF0ZShcbiAgICAgIHNlbGVjdGVkRGF0ZS5zZXRIb3VycyhzZWxlY3RlZERhdGUuZ2V0SG91cnMoKSArIGhvdXJzKSxcbiAgICApO1xuICB9O1xuICBjb25zdCBmb3JtYXRIb3VycyA9ICh4OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICAgIHggPSB4ID4gMTIgPyB4IC0gMTIgOiB4ID09PSAwID8gMTIgOiB4O1xuICAgIHJldHVybiBgJHt4fWAubGVuZ3RoIDwgMiA/IGAwJHt4fWAgOiBgJHt4fWA7XG4gIH07XG4gIGNvbnN0IGdldEhvdXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IGhvdXJMaXN0OiBEYXRlcGlja2VyLlRpbWVbXSA9IFtdO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgMjQ7IHgrKykge1xuICAgICAgaG91ckxpc3QucHVzaCh7XG4gICAgICAgIHZhbHVlOiB4LFxuICAgICAgICB0ZXh0OiBmb3JtYXRIb3Vycyh4KSxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGhvdXJzID0gaG91ckxpc3Q7XG4gICAgc2V0SG91cnMoKTtcbiAgfTtcbiAgY29uc3Qgc2V0SG91cnMgPSAoKSA9PlxuICAgIChob3VycyA9IGhvdXJzLm1hcCgoaG91cjogRGF0ZXBpY2tlci5UaW1lKSA9PiB7XG4gICAgICBob3VyLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICBpZiAobWluICYmICFtYXgpIHtcbiAgICAgICAgaWYgKGZvcm1hdERhdGUobWluKSA9PT0gZm9ybWF0RGF0ZShzZWxlY3RlZERhdGUpKSB7XG4gICAgICAgICAgaG91ci5kaXNhYmxlZCA9IGhvdXIudmFsdWUgPCBtaW4uZ2V0SG91cnMoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChtYXggJiYgIW1pbikge1xuICAgICAgICBpZiAoZm9ybWF0RGF0ZShtYXgpID09PSBmb3JtYXREYXRlKHNlbGVjdGVkRGF0ZSkpIHtcbiAgICAgICAgICBob3VyLmRpc2FibGVkID0gaG91ci52YWx1ZSA+IG1heC5nZXRIb3VycygpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG1heCAmJiBtaW4pIHtcbiAgICAgICAgaWYgKGZvcm1hdERhdGUobWluKSA9PT0gZm9ybWF0RGF0ZShzZWxlY3RlZERhdGUpKSB7XG4gICAgICAgICAgaG91ci5kaXNhYmxlZCA9IGhvdXIudmFsdWUgPCBtaW4uZ2V0SG91cnMoKTtcbiAgICAgICAgfSBlbHNlIGlmIChmb3JtYXREYXRlKG1heCkgPT09IGZvcm1hdERhdGUoc2VsZWN0ZWREYXRlKSkge1xuICAgICAgICAgIGhvdXIuZGlzYWJsZWQgPSBob3VyLnZhbHVlID4gbWF4LmdldEhvdXJzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBob3VyO1xuICAgIH0pKTtcbiAgY29uc3QgZ2V0TWludXRlcyA9ICgpID0+IHtcbiAgICBjb25zdCBtaW51dGVMaXN0OiBEYXRlcGlja2VyLlRpbWVbXSA9IFtdO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgNjA7IHgrKykge1xuICAgICAgbWludXRlTGlzdC5wdXNoKHtcbiAgICAgICAgdmFsdWU6IHgsXG4gICAgICAgIHRleHQ6IGAke3h9YC5sZW5ndGggPCAyID8gYDAke3h9YCA6IGAke3h9YCxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbWludXRlcyA9IG1pbnV0ZUxpc3Q7XG4gICAgc2V0TWludXRlcygpO1xuICB9O1xuICBjb25zdCBzZXRNaW51dGVzID0gKCkgPT5cbiAgICAobWludXRlcyA9IG1pbnV0ZXMubWFwKChtaW51dGU6IERhdGVwaWNrZXIuVGltZSkgPT4ge1xuICAgICAgbWludXRlLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChtaW4gJiYgIW1heCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZm9ybWF0RGF0ZShtaW4pID09PSBmb3JtYXREYXRlKHNlbGVjdGVkRGF0ZSkgJiZcbiAgICAgICAgICBzZWxlY3RlZERhdGUuZ2V0SG91cnMoKSA9PT0gbWluLmdldEhvdXJzKClcbiAgICAgICAgKSB7XG4gICAgICAgICAgbWludXRlLmRpc2FibGVkID0gbWludXRlLnZhbHVlIDwgbWluLmdldE1pbnV0ZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChtYXggJiYgIW1pbikge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZm9ybWF0RGF0ZShtYXgpID09PSBmb3JtYXREYXRlKHNlbGVjdGVkRGF0ZSkgJiZcbiAgICAgICAgICBzZWxlY3RlZERhdGUuZ2V0SG91cnMoKSA9PT0gbWF4LmdldEhvdXJzKClcbiAgICAgICAgKSB7XG4gICAgICAgICAgbWludXRlLmRpc2FibGVkID0gbWludXRlLnZhbHVlID4gbWF4LmdldE1pbnV0ZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChtYXggJiYgbWluKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBmb3JtYXREYXRlKG1pbikgPT09IGZvcm1hdERhdGUoc2VsZWN0ZWREYXRlKSAmJlxuICAgICAgICAgIHNlbGVjdGVkRGF0ZS5nZXRIb3VycygpID09PSBtaW4uZ2V0SG91cnMoKVxuICAgICAgICApIHtcbiAgICAgICAgICBtaW51dGUuZGlzYWJsZWQgPSBtaW51dGUudmFsdWUgPCBtaW4uZ2V0TWludXRlcygpO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIGZvcm1hdERhdGUobWF4KSA9PT0gZm9ybWF0RGF0ZShzZWxlY3RlZERhdGUpICYmXG4gICAgICAgICAgc2VsZWN0ZWREYXRlLmdldEhvdXJzKCkgPT09IG1heC5nZXRIb3VycygpXG4gICAgICAgICkge1xuICAgICAgICAgIG1pbnV0ZS5kaXNhYmxlZCA9IG1pbnV0ZS52YWx1ZSA+IG1heC5nZXRNaW51dGVzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBtaW51dGU7XG4gICAgfSkpO1xuICBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgIGxldCBtb250aCA9IFwiXCIgKyAoZGF0ZS5nZXRNb250aCgpICsgMSksXG4gICAgICBkYXkgPSBcIlwiICsgZGF0ZS5nZXREYXRlKCksXG4gICAgICB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gICAgaWYgKG1vbnRoLmxlbmd0aCA8IDIpIG1vbnRoID0gXCIwXCIgKyBtb250aDtcbiAgICBpZiAoZGF5Lmxlbmd0aCA8IDIpIGRheSA9IFwiMFwiICsgZGF5O1xuXG4gICAgcmV0dXJuIFt5ZWFyLCBtb250aCwgZGF5XS5qb2luKFwiLVwiKTtcbiAgfVxuICBjb25zdCBzZXRTZWxlY3RlZCA9ICgpID0+XG4gICAgKGRhdGVzID0gZGF0ZXMubWFwKChkOiBEYXRlcGlja2VyLkRhdGVzKSA9PiB7XG4gICAgICBpZiAobWluICYmICFtYXgpIHtcbiAgICAgICAgZC5pc0Rpc2FibGVkID0gZC5kYXRlLmdldFRpbWUoKSArIFVOSVhEQVkgPCBtaW4uZ2V0VGltZSgpO1xuICAgICAgfVxuICAgICAgaWYgKG1heCAmJiAhbWluKSB7XG4gICAgICAgIGQuaXNEaXNhYmxlZCA9IGQuZGF0ZS5nZXRUaW1lKCkgPiBtYXguZ2V0VGltZSgpO1xuICAgICAgfVxuICAgICAgaWYgKG1heCAmJiBtaW4pIHtcbiAgICAgICAgZC5pc0Rpc2FibGVkID1cbiAgICAgICAgICBkLmRhdGUuZ2V0VGltZSgpICsgVU5JWERBWSA8IG1pbi5nZXRUaW1lKCkgfHxcbiAgICAgICAgICBkLmRhdGUuZ2V0VGltZSgpID4gbWF4LmdldFRpbWUoKTtcbiAgICAgIH1cbiAgICAgIGQuaXNTZWxlY3RlZCA9XG4gICAgICAgIGZvcm1hdERhdGUoZC5kYXRlKSA9PT0gZm9ybWF0RGF0ZShzZWxlY3RlZERhdGUpICYmICFkLmlzRGlzYWJsZWRcbiAgICAgICAgICA/IHRydWVcbiAgICAgICAgICA6IGZhbHNlO1xuICAgICAgcmV0dXJuIGQ7XG4gICAgfSkpO1xuICBjb25zdCBzZXREYXlzID0gKCkgPT4ge1xuICAgIGRhdGVzID0gW107XG4gICAgY3VycmVudERhdGUgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZS5zZXREYXRlKDEpKTtcbiAgICBjb25zdCBsYXN0RGF5ID0gZGF5c0luTW9udGgoXG4gICAgICBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgY3VycmVudERhdGUuZ2V0TW9udGgoKSxcbiAgICApO1xuICAgIGNvbnN0IGxhc3RQcmV2RGF5ID0gZGF5c0luTW9udGgoXG4gICAgICBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgY3VycmVudERhdGUuZ2V0TW9udGgoKSxcbiAgICAgIDAsXG4gICAgKTtcbiAgICAvLyBEYXlzIGluIHByZXZpb3VzIG1vbnRoXG4gICAgZm9yIChsZXQgeCA9IGN1cnJlbnREYXRlLmdldERheSgpOyB4ID4gMDsgeC0tKSB7XG4gICAgICBkYXRlcyA9IFtcbiAgICAgICAgLi4uZGF0ZXMsXG4gICAgICAgIHtcbiAgICAgICAgICBkYXk6IGxhc3RQcmV2RGF5IC0geCArIDEsXG4gICAgICAgICAgYWN0aXZlTW9udGg6IGZhbHNlLFxuICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKFxuICAgICAgICAgICAgY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgIGN1cnJlbnREYXRlLmdldE1vbnRoKCkgLSAxLFxuICAgICAgICAgICAgbGFzdFByZXZEYXkgLSB4ICsgMSxcbiAgICAgICAgICApLFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICB9XG4gICAgLy8gRGF5cyBpbiBjdXJyZW50IG1vbnRoXG4gICAgZm9yIChsZXQgeCA9IDE7IHggPD0gbGFzdERheTsgeCsrKSB7XG4gICAgICBkYXRlcyA9IFtcbiAgICAgICAgLi4uZGF0ZXMsXG4gICAgICAgIHtcbiAgICAgICAgICBkYXk6IHgsXG4gICAgICAgICAgYWN0aXZlTW9udGg6IHRydWUsXG4gICAgICAgICAgZGF0ZTogbmV3IERhdGUoY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSwgY3VycmVudERhdGUuZ2V0TW9udGgoKSwgeCksXG4gICAgICAgIH0sXG4gICAgICBdO1xuICAgIH1cbiAgICAvLyBEYXlzIGluIG5leHQgbW9udGhcbiAgICBjb25zdCBuZXh0RGF5cyA9IDQyIC0gZGF0ZXMubGVuZ3RoO1xuICAgIGZvciAobGV0IHggPSAxOyB4IDw9IG5leHREYXlzOyB4KyspIHtcbiAgICAgIGRhdGVzID0gW1xuICAgICAgICAuLi5kYXRlcyxcbiAgICAgICAge1xuICAgICAgICAgIGRheTogeCxcbiAgICAgICAgICBhY3RpdmVNb250aDogZmFsc2UsXG4gICAgICAgICAgZGF0ZTogbmV3IERhdGUoXG4gICAgICAgICAgICBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgY3VycmVudERhdGUuZ2V0TW9udGgoKSArIDEsXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICksXG4gICAgICAgIH0sXG4gICAgICBdO1xuICAgIH1cbiAgICAvLyBVcGRhdGUgU2VsZWN0ZWQgZGF0ZVxuICAgIHNldFNlbGVjdGVkKCk7XG4gIH07XG4gIHNldERheXMoKTtcblxuICAkOiBpZiAoc2VsZWN0ZWREYXRlICYmIGNoYW5nZSkge1xuICAgIHRpY2soKS50aGVuKCgpID0+IHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGNoYW5nZShzZWxlY3RlZERhdGUpO1xuICAgIH0pO1xuICB9XG4gICQ6IGN1cnJlbnRNb250aCA9IGN1cnJlbnREYXRlLmdldE1vbnRoKCk7XG4gICQ6IGN1cnJlbnRZZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgJDogc2VsZWN0YWJsZU1vbnRoID0gZGF0ZXMuZmlsdGVyKChkKSA9PiBkLmFjdGl2ZU1vbnRoICYmICFkLmlzRGlzYWJsZWQpXG4gICAgLmxlbmd0aDtcbiAgJDogaWYgKHZhbHVlIHx8IG1pbiB8fCBtYXggfHwgdGltZXBpY2tlcikge1xuICAgIHBvcHVsYXRlKCk7XG5cbiAgICBzZXRTZWxlY3RlZCgpO1xuICB9XG4gICQ6IGlzQW1EaXNhYmxlZCA9ICgpID0+IHtcbiAgICBpZiAobWluKSB7XG4gICAgICBpZiAoZm9ybWF0RGF0ZShtaW4pID09PSBmb3JtYXREYXRlKHNlbGVjdGVkRGF0ZSkpIHtcbiAgICAgICAgcmV0dXJuIG1pbi5nZXRIb3VycygpID49IDEyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgJDogaXNQbURpc2FibGVkID0gKCkgPT4ge1xuICAgIGlmIChtYXgpIHtcbiAgICAgIGlmIChmb3JtYXREYXRlKG1heCkgPT09IGZvcm1hdERhdGUoc2VsZWN0ZWREYXRlKSkge1xuICAgICAgICByZXR1cm4gbWF4LmdldEhvdXJzKCkgPCAxMjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4gIC8vVG90YWwgd2lkdGggZGl2aWRlZCBieSBkYXlzIGluIGEgd2Vla1xuICAkZGF5LWJsb2NrLXdpZHRoOiAxMDAlLzc7XG4gICRkYXktdGV4dC1zZWxlY3RlZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG4gICRkYXktYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG4gICRkYXktYmFja2dyb3VuZC1ob3Zlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcbiAgJGRheS1iYWNrZ3JvdW5kLXNlbGVjdGVkLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcblxuICAubnlsYXMtZGF0ZXBpY2tlciB7XG4gICAgLS1mb250OiBzYW5zLXNlcmlmO1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgLS10ZXh0OiBibGFjaztcbiAgICAtLXRleHQtbGlnaHQ6ICM2ZTZlN2E7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIC0tc2hhZG93OiAwIDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xMSksIDAgM3B4IDM2cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAtLWZvbnQ6IHNhbnMtc2VyaWY7XG4gICAgLS1mb250LXNpemU6IDEycHg7XG4gICAgLS1ib3JkZXI6ICNmN2Y3Zjc7XG4gICAgLS1wcmltYXJ5OiAjNWM3N2ZmO1xuICB9XG4gIC5kYXRlcGlja2VyIHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAuZGF0ZXBpY2tlci13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG4gIC5kYXRlcGlja2VyLWRhdGVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmxhYmVsLWRheXMge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbiAgLmRhdGVwaWNrZXItaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuICAuZGF0ZXBpY2tlci1jb250cm9scyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIC5kYXRlcGlja2VyLWJ0biB7XG4gICAgaGVpZ2h0OiAzMXB4O1xuICAgIHdpZHRoOiAzMXB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIH1cbiAgLmRhdGVwaWNrZXItYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkZGF5LWJhY2tncm91bmQtaG92ZXItY29sb3IgIWltcG9ydGFudDtcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWFjdGl2ZS10ZXh0KTtcbiAgfVxuICAuZGF0ZXBpY2tlci1idG46Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgLmxhYmVsLWRheXMgPiBkaXYge1xuICAgIGZsZXgtYmFzaXM6ICRkYXktYmxvY2std2lkdGg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5kYXlzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuICAubGFiZWwge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgLmN1cnJlbnQge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgLmN1cnJlbnQtbW9udGggaDMge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuICAuc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQ6ICRkYXktYmFja2dyb3VuZC1zZWxlY3RlZC1jb2xvciAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB2YXIoLS1idXR0b24tYWN0aXZlLXRleHQpICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICAuZGF5cyBkaXYge1xuICAgIGZsZXgtYmFzaXM6ICRkYXktYmxvY2std2lkdGg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgfVxuICAuZGF5cyBkaXYgYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJhY2tncm91bmQ6ICRkYXktYmFja2dyb3VuZC1jb2xvcjtcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgLmRheXMgZGl2IGJ1dHRvbjpmb2N1cyB7XG4gICAgb3V0bGluZTogMDtcbiAgfVxuICAuZGF5cyBkaXYgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkZGF5LWJhY2tncm91bmQtaG92ZXItY29sb3I7XG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1hY3RpdmUtdGV4dCkgIWltcG9ydGFudDtcbiAgfVxuICAuZGF5cyBkaXYgYnV0dG9uOmRpc2FibGVkIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cbiAgLnRpbWVwaWNrZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuICB9XG4gIC50aW1lcGlja2VyIGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAudGltZXBpY2tlciBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICB9XG4gIC5waWNrZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgYmFja2dyb3VuZDogJGRheS1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIG1hcmdpbjogMHB4IDNweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuY2xvY2sge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIGJhY2tncm91bmQ6ICRkYXktYmFja2dyb3VuZC1jb2xvcjtcbiAgICAvLyBib3JkZXI6IG5vbmU7XG4gIH1cbiAgLnRpbWUge1xuICAgIGZsZXg6IDE7XG4gICAgLy8gYm9yZGVyOiBub25lO1xuICB9XG4gIC5jbG9jay1idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjb2xvcjogI2E0YWFhZDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IDA7XG4gIH1cbiAgLmNsb2NrLWJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgfVxuICAuY2xvY2stYnV0dG9uLWFjdGl2ZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIH1cbiAgLnRvb2x0aXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICAudG9vbHRpcCAudG9vbHRpcHRleHQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjExKSwgMCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIC8qIFBvc2l0aW9uIHRoZSB0b29sdGlwICovXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOiAxMTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTYwcHg7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDFzO1xuICB9XG4gIC50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIC5lcnJvciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZTNlMztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XG4gICAgcGFkZGluZzogMC43cmVtO1xuICAgIGNvbG9yOiAjZmY2MDYwO1xuICB9XG48L3N0eWxlPlxuXG48ZGl2PlxuICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlclwiIGlkPVwiZGF0ZXBpY2tlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLXdyYXBwZXJcIj5cbiAgICAgIDxoMiBjbGFzcz1cImRhdGVwaWNrZXItaGVhZGVyXCI+XG4gICAgICAgIFBpY2sgYSBkYXRlXG4gICAgICAgIHt0aW1lcGlja2VyID8gXCIgYW5kIHRpbWVcIiA6IFwiXCJ9XG4gICAgICA8L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItY29udHJvbHNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtbW9udGhcIj5cbiAgICAgICAgICA8aDM+e21vbnRoc1tjdXJyZW50TW9udGhdfSB7Y3VycmVudFllYXJ9PC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2x0aXBcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkYXRlcGlja2VyLWJ0blwiIG9uOmNsaWNrPXsoKSA9PiBjaGFuZ2VNb250aCgtMSl9PlxuICAgICAgICAgICAgICAmbHNhcXVvO1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvb2x0aXB0ZXh0XCI+UHJldmlvdXMgbW9udGg8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2x0aXBcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkYXRlcGlja2VyLWJ0blwiIG9uOmNsaWNrPXsoKSA9PiBjaGFuZ2VNb250aCgxKX0+XG4gICAgICAgICAgICAgICZyc2FxdW87XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9vbHRpcHRleHRcIj5OZXh0IG1vbnRoPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1kYXRlc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWwtZGF5c1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXkgbGFiZWxcIj5TVU48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF5IGxhYmVsXCI+TU9OPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRheSBsYWJlbFwiPlRVRTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXkgbGFiZWxcIj5XRUQ8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF5IGxhYmVsXCI+VEhVPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRheSBsYWJlbFwiPkZSSTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXkgbGFiZWxcIj5TQVQ8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBpZD1cImNhbGVuZGFyRGF5c1wiIGNsYXNzPVwiZGF5c1wiPlxuICAgICAgICAgIHsjZWFjaCBkYXRlcyBhcyBkYXRlIChkYXRlKX1cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzczpsYWJlbD17IWRhdGUuYWN0aXZlTW9udGh9XG4gICAgICAgICAgICAgICAgY2xhc3M6Y3VycmVudD17ZGF0ZS5hY3RpdmVNb250aH1cbiAgICAgICAgICAgICAgICBjbGFzczpzZWxlY3RlZD17ZGF0ZS5pc1NlbGVjdGVkfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkYXRlLmlzRGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgb246Y2xpY2s9eygpID0+IHNldERhdGUoZGF0ZS5kYXRlKX0+e2RhdGUuZGF5fTwvYnV0dG9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsjaWYgdGltZXBpY2tlcn1cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZXBpY2tlclwiPlxuICAgICAgICAgICAgPHA+U2V0IHRpbWU8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZVwiPlxuICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwaWNrZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZERhdGUuZ2V0SG91cnMoKX1cbiAgICAgICAgICAgICAgICBiaW5kOnRoaXM9e2hvdXJzU2VsZWN0fVxuICAgICAgICAgICAgICAgIG9uOmJsdXI9eygpID0+IHNldEhvdXIoKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsjZWFjaCBob3VycyBhcyBob3VyIChob3VyKX1cbiAgICAgICAgICAgICAgICAgIHsjaWYgc2VsZWN0ZWREYXRlLmdldEhvdXJzKCkgPj0gMTIgJiYgaG91ci52YWx1ZSA+PSAxMn1cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aG91ci52YWx1ZX0gZGlzYWJsZWQ9e2hvdXIuZGlzYWJsZWR9PlxuICAgICAgICAgICAgICAgICAgICAgIHtob3VyLnRleHR9XG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgezplbHNlIGlmIHNlbGVjdGVkRGF0ZS5nZXRIb3VycygpIDwgMTIgJiYgaG91ci52YWx1ZSA8IDEyfVxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtob3VyLnZhbHVlfSBkaXNhYmxlZD17aG91ci5kaXNhYmxlZH0+XG4gICAgICAgICAgICAgICAgICAgICAge2hvdXIudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICBjbGFzcz1cInBpY2tlclwiXG4gICAgICAgICAgICAgICAgYmluZDp0aGlzPXttaW51dGVzU2VsZWN0fVxuICAgICAgICAgICAgICAgIG9uOmJsdXI9eygpID0+IHNldE1pbnV0ZSgpfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZERhdGUuZ2V0TWludXRlcygpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeyNlYWNoIG1pbnV0ZXMgYXMgbWludXRlIChtaW51dGUpfVxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17bWludXRlLnZhbHVlfSBkaXNhYmxlZD17bWludXRlLmRpc2FibGVkfT5cbiAgICAgICAgICAgICAgICAgICAge21pbnV0ZS50ZXh0fVxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgey9lYWNofVxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsb2NrXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzcz17c2VsZWN0ZWREYXRlLmdldEhvdXJzKCkgPCAxMlxuICAgICAgICAgICAgICAgICAgPyBcImNsb2NrLWJ1dHRvbiBjbG9jay1idXR0b24tYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgIDogXCJjbG9jay1idXR0b25cIn1cbiAgICAgICAgICAgICAgICBvbjpjbGljaz17KCkgPT4gc2VsZWN0ZWREYXRlLmdldEhvdXJzKCkgPj0gMTIgJiYgc2V0Q2xvY2soLTEyKX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNBbURpc2FibGVkKCl9PkFNPC9idXR0b25cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3M9e3NlbGVjdGVkRGF0ZS5nZXRIb3VycygpID49IDEyXG4gICAgICAgICAgICAgICAgICA/IFwiY2xvY2stYnV0dG9uIGNsb2NrLWJ1dHRvbi1hY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgOiBcImNsb2NrLWJ1dHRvblwifVxuICAgICAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiBzZWxlY3RlZERhdGUuZ2V0SG91cnMoKSA8IDEyICYmIHNldENsb2NrKDEyKX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNQbURpc2FibGVkKCl9PlBNPC9idXR0b25cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvaWZ9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiK09BQWEsSUFBaUIsT0FBTyxlQUFlLE9BQU8sS0FDekQsT0FBTyxnQkFFVCxPQUFPLGVBQWUsT0FBUyxDQUFDLEtBQWlCLElBQVMsSUFDcEQsZ0JBQWUsSUFBSSxTQUdoQixJQUFlLEVBQU0sR0FBRyxJQ1BqQyxZQUFnQixFQWdCaEIsWUFBYSxFQUFJLENBQ2IsTUFBTyxLQUVYLGFBQXdCLENBQ3BCLE1BQU8sUUFBTyxPQUFPLE1BRXpCLFdBQWlCLEVBQUssQ0FDbEIsRUFBSSxRQUFRLElBRWhCLFlBQXFCLEVBQU8sQ0FDeEIsTUFBTyxPQUFPLElBQVUsV0FhNUIsWUFBbUIsRUFBRyxFQUFHLENBQ3JCLE1BQU8sSUFBSyxFQUFJLEdBQUssRUFBSSxJQUFNLEVBRW5DLFlBQWtCLEVBQUssQ0FDbkIsTUFBTyxRQUFPLEtBQUssR0FBSyxTQUFXLEVBd1F2QyxXQUFnQixFQUFRLEVBQU0sQ0FDMUIsRUFBTyxZQUFZLEdBb0R2QixXQUFnQixFQUFRLEVBQU0sRUFBUSxDQUNsQyxFQUFPLGFBQWEsRUFBTSxHQUFVLE1BVXhDLFdBQWdCLEVBQU0sQ0FDbEIsRUFBSyxXQUFXLFlBQVksR0FRaEMsV0FBaUIsRUFBTSxDQUNuQixNQUFPLFVBQVMsY0FBYyxHQW9CbEMsV0FBYyxFQUFNLENBQ2hCLE1BQU8sVUFBUyxlQUFlLEdBRW5DLFlBQWlCLENBQ2IsTUFBTyxHQUFLLEtBRWhCLGFBQWlCLENBQ2IsTUFBTyxHQUFLLElBRWhCLFdBQWdCLEVBQU0sRUFBTyxFQUFTLEVBQVMsQ0FDM0MsU0FBSyxpQkFBaUIsRUFBTyxFQUFTLEdBQy9CLElBQU0sRUFBSyxvQkFBb0IsRUFBTyxFQUFTLEdBOEIxRCxXQUFjLEVBQU0sRUFBVyxFQUFPLENBQ2xDLEFBQUksR0FBUyxLQUNULEVBQUssZ0JBQWdC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
