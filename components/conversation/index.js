(function (at, g) {
  typeof exports == "object" && typeof module != "undefined"
    ? (module.exports = g())
    : typeof define == "function" && define.amd
    ? define(g)
    : ((at = typeof globalThis != "undefined" ? globalThis : at || self),
      (at.app = g()));
})(this, function () {
  "use strict";
  const at = window.customElements.define.bind(window.customElements);
  window.customElements.define = (t, ...e) => {
    if (!customElements.get(t)) return at(t, ...e);
  };
  function g() {}
  function Ce(t, e) {
    for (const r in e) t[r] = e[r];
    return t;
  }
  function Yn(t) {
    return t && typeof t == "object" && typeof t.then == "function";
  }
  function Ht(t) {
    return t();
  }
  function kr() {
    return Object.create(null);
  }
  function De(t) {
    t.forEach(Ht);
  }
  function Bt(t) {
    return typeof t == "function";
  }
  function He(t, e) {
    return t != t
      ? e == e
      : t !== e || (t && typeof t == "object") || typeof t == "function";
  }
  let bt;
  function wr(t, e) {
    return (
      bt || (bt = document.createElement("a")), (bt.href = e), t === bt.href
    );
  }
  function Kn(t, e) {
    return t != t ? e == e : t !== e;
  }
  function Tr(t) {
    return Object.keys(t).length === 0;
  }
  function Er(t, ...e) {
    if (t == null) return g;
    const r = t.subscribe(...e);
    return r.unsubscribe ? () => r.unsubscribe() : r;
  }
  function vt(t, e, r) {
    t.$$.on_destroy.push(Er(e, r));
  }
  function Be(t) {
    const e = {};
    for (const r in t) r[0] !== "$" && (e[r] = t[r]);
    return e;
  }
  let yt = !1;
  function Vn() {
    yt = !0;
  }
  function Xn() {
    yt = !1;
  }
  function $n(t, e, r, n) {
    for (; t < e; ) {
      const o = t + ((e - t) >> 1);
      r(o) <= n ? (t = o + 1) : (e = o);
    }
    return t;
  }
  function Zn(t) {
    if (t.hydrate_init) return;
    t.hydrate_init = !0;
    let e = t.childNodes;
    if (t.nodeName === "HEAD") {
      const i = [];
      for (let c = 0; c < e.length; c++) {
        const u = e[c];
        u.claim_order !== void 0 && i.push(u);
      }
      e = i;
    }
    const r = new Int32Array(e.length + 1),
      n = new Int32Array(e.length);
    r[0] = -1;
    let o = 0;
    for (let i = 0; i < e.length; i++) {
      const c = e[i].claim_order,
        u =
          (o > 0 && e[r[o]].claim_order <= c
            ? o + 1
            : $n(1, o, (b) => e[r[b]].claim_order, c)) - 1;
      n[i] = r[u] + 1;
      const p = u + 1;
      (r[p] = i), (o = Math.max(p, o));
    }
    const a = [],
      s = [];
    let l = e.length - 1;
    for (let i = r[o] + 1; i != 0; i = n[i - 1]) {
      for (a.push(e[i - 1]); l >= i; l--) s.push(e[l]);
      l--;
    }
    for (; l >= 0; l--) s.push(e[l]);
    a.reverse(), s.sort((i, c) => i.claim_order - c.claim_order);
    for (let i = 0, c = 0; i < s.length; i++) {
      for (; c < a.length && s[i].claim_order >= a[c].claim_order; ) c++;
      const u = c < a.length ? a[c] : null;
      t.insertBefore(s[i], u);
    }
  }
  function D(t, e) {
    t.appendChild(e);
  }
  function Gt(t, e) {
    if (yt) {
      for (
        Zn(t),
          (t.actual_end_child === void 0 ||
            (t.actual_end_child !== null &&
              t.actual_end_child.parentElement !== t)) &&
            (t.actual_end_child = t.firstChild);
        t.actual_end_child !== null &&
        t.actual_end_child.claim_order === void 0;

      )
        t.actual_end_child = t.actual_end_child.nextSibling;
      e !== t.actual_end_child
        ? (e.claim_order !== void 0 || e.parentNode !== t) &&
          t.insertBefore(e, t.actual_end_child)
        : (t.actual_end_child = e.nextSibling);
    } else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
  }
  function N(t, e, r) {
    t.insertBefore(e, r || null);
  }
  function Ar(t, e, r) {
    yt && !r
      ? Gt(t, e)
      : (e.parentNode !== t || e.nextSibling != r) &&
        t.insertBefore(e, r || null);
  }
  function A(t) {
    t.parentNode.removeChild(t);
  }
  function Wt(t, e) {
    for (let r = 0; r < t.length; r += 1) t[r] && t[r].d(e);
  }
  function R(t) {
    return document.createElement(t);
  }
  function st(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t);
  }
  function B(t) {
    return document.createTextNode(t);
  }
  function Y() {
    return B(" ");
  }
  function Ge() {
    return B("");
  }
  function kt(t, e, r, n) {
    return t.addEventListener(e, r, n), () => t.removeEventListener(e, r, n);
  }
  function I(t, e, r) {
    r == null
      ? t.removeAttribute(e)
      : t.getAttribute(e) !== r && t.setAttribute(e, r);
  }
  function wt(t, e) {
    for (const r in e) I(t, r, e[r]);
  }
  function ie(t, e, r) {
    e in t
      ? (t[e] = typeof t[e] == "boolean" && r === "" ? !0 : r)
      : I(t, e, r);
  }
  function it(t) {
    return Array.from(t.childNodes);
  }
  function Qn(t) {
    t.claim_info === void 0 &&
      (t.claim_info = { last_index: 0, total_claimed: 0 });
  }
  function qn(t, e, r, n, o = !1) {
    Qn(t);
    const a = (() => {
      for (let s = t.claim_info.last_index; s < t.length; s++) {
        const l = t[s];
        if (e(l)) {
          const i = r(l);
          return (
            i === void 0 ? t.splice(s, 1) : (t[s] = i),
            o || (t.claim_info.last_index = s),
            l
          );
        }
      }
      for (let s = t.claim_info.last_index - 1; s >= 0; s--) {
        const l = t[s];
        if (e(l)) {
          const i = r(l);
          return (
            i === void 0 ? t.splice(s, 1) : (t[s] = i),
            o
              ? i === void 0 && t.claim_info.last_index--
              : (t.claim_info.last_index = s),
            l
          );
        }
      }
      return n();
    })();
    return (
      (a.claim_order = t.claim_info.total_claimed),
      (t.claim_info.total_claimed += 1),
      a
    );
  }
  function eo(t, e, r, n) {
    return qn(
      t,
      (o) => o.nodeName === e,
      (o) => {
        const a = [];
        for (let s = 0; s < o.attributes.length; s++) {
          const l = o.attributes[s];
          r[l.name] || a.push(l.name);
        }
        a.forEach((s) => o.removeAttribute(s));
      },
      () => n(e),
    );
  }
  function Tt(t, e, r) {
    return eo(t, e, r, st);
  }
  function le(t, e) {
    (e = "" + e), t.wholeText !== e && (t.data = e);
  }
  function Or(t, e) {
    t.value = e == null ? "" : e;
  }
  function We(t, e, r, n) {
    r === null
      ? t.style.removeProperty(e)
      : t.style.setProperty(e, r, n ? "important" : "");
  }
  function ne(t, e, r) {
    t.classList[r ? "add" : "remove"](e);
  }
  function Et(t) {
    const e = {};
    for (const r of t) e[r.name] = r.value;
    return e;
  }
  let lt;
  function ke(t) {
    lt = t;
  }
  function ct() {
    if (!lt)
      throw new Error("Function called outside component initialization");
    return lt;
  }
  function to(t) {
    ct().$$.before_update.push(t);
  }
  function ro(t) {
    ct().$$.on_mount.push(t);
  }
  function no(t) {
    ct().$$.after_update.push(t);
  }
  const ft = [],
    Jt = [],
    At = [],
    Sr = [],
    oo = Promise.resolve();
  let Yt = !1;
  function ao() {
    Yt || ((Yt = !0), oo.then(G));
  }
  function Kt(t) {
    At.push(t);
  }
  const Vt = new Set();
  let Ot = 0;
  function G() {
    const t = lt;
    do {
      for (; Ot < ft.length; ) {
        const e = ft[Ot];
        Ot++, ke(e), so(e.$$);
      }
      for (ke(null), ft.length = 0, Ot = 0; Jt.length; ) Jt.pop()();
      for (let e = 0; e < At.length; e += 1) {
        const r = At[e];
        Vt.has(r) || (Vt.add(r), r());
      }
      At.length = 0;
    } while (ft.length);
    for (; Sr.length; ) Sr.pop()();
    (Yt = !1), Vt.clear(), ke(t);
  }
  function so(t) {
    if (t.fragment !== null) {
      t.update(), De(t.before_update);
      const e = t.dirty;
      (t.dirty = [-1]),
        t.fragment && t.fragment.p(t.ctx, e),
        t.after_update.forEach(Kt);
    }
  }
  const St = new Set();
  let Pe;
  function Nt() {
    Pe = { r: 0, c: [], p: Pe };
  }
  function Ct() {
    Pe.r || De(Pe.c), (Pe = Pe.p);
  }
  function ae(t, e) {
    t && t.i && (St.delete(t), t.i(e));
  }
  function pe(t, e, r, n) {
    if (t && t.o) {
      if (St.has(t)) return;
      St.add(t),
        Pe.c.push(() => {
          St.delete(t), n && (r && t.d(1), n());
        }),
        t.o(e);
    }
  }
  function ge(t, e) {
    const r = (e.token = {});
    function n(o, a, s, l) {
      if (e.token !== r) return;
      e.resolved = l;
      let i = e.ctx;
      s !== void 0 && ((i = i.slice()), (i[s] = l));
      const c = o && (e.current = o)(i);
      let u = !1;
      e.block &&
        (e.blocks
          ? e.blocks.forEach((p, b) => {
              b !== a &&
                p &&
                (Nt(),
                pe(p, 1, 1, () => {
                  e.blocks[b] === p && (e.blocks[b] = null);
                }),
                Ct());
            })
          : e.block.d(1),
        c.c(),
        ae(c, 1),
        c.m(e.mount(), e.anchor),
        (u = !0)),
        (e.block = c),
        e.blocks && (e.blocks[a] = c),
        u && G();
    }
    if (Yn(t)) {
      const o = ct();
      if (
        (t.then(
          (a) => {
            ke(o), n(e.then, 1, e.value, a), ke(null);
          },
          (a) => {
            if ((ke(o), n(e.catch, 2, e.error, a), ke(null), !e.hasCatch))
              throw a;
          },
        ),
        e.current !== e.pending)
      )
        return n(e.pending, 0), !0;
    } else {
      if (e.current !== e.then) return n(e.then, 1, e.value, t), !0;
      e.resolved = t;
    }
  }
  function ut(t, e, r) {
    const n = e.slice(),
      { resolved: o } = t;
    t.current === t.then && (n[t.value] = o),
      t.current === t.catch && (n[t.error] = o),
      t.block.p(n, r);
  }
  function Nr(t, e) {
    const r = {},
      n = {},
      o = { $$scope: 1 };
    let a = t.length;
    for (; a--; ) {
      const s = t[a],
        l = e[a];
      if (l) {
        for (const i in s) i in l || (n[i] = 1);
        for (const i in l) o[i] || ((r[i] = l[i]), (o[i] = 1));
        t[a] = l;
      } else for (const i in s) o[i] = 1;
    }
    for (const s in n) s in r || (r[s] = void 0);
    return r;
  }
  function Cr(t) {
    t && t.c();
  }
  function Xt(t, e, r, n) {
    const { fragment: o, on_mount: a, on_destroy: s, after_update: l } = t.$$;
    o && o.m(e, r),
      n ||
        Kt(() => {
          const i = a.map(Ht).filter(Bt);
          s ? s.push(...i) : De(i), (t.$$.on_mount = []);
        }),
      l.forEach(Kt);
  }
  function Dt(t, e) {
    const r = t.$$;
    r.fragment !== null &&
      (De(r.on_destroy),
      r.fragment && r.fragment.d(e),
      (r.on_destroy = r.fragment = null),
      (r.ctx = []));
  }
  function io(t, e) {
    t.$$.dirty[0] === -1 && (ft.push(t), ao(), t.$$.dirty.fill(0)),
      (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
  }
  function Je(t, e, r, n, o, a, s, l = [-1]) {
    const i = lt;
    ke(t);
    const c = (t.$$ = {
      fragment: null,
      ctx: null,
      props: a,
      update: g,
      not_equal: o,
      bound: kr(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(e.context || (i ? i.$$.context : [])),
      callbacks: kr(),
      dirty: l,
      skip_bound: !1,
      root: e.target || i.$$.root,
    });
    s && s(c.root);
    let u = !1;
    if (
      ((c.ctx = r
        ? r(t, e.props || {}, (p, b, ..._) => {
            const T = _.length ? _[0] : b;
            return (
              c.ctx &&
                o(c.ctx[p], (c.ctx[p] = T)) &&
                (!c.skip_bound && c.bound[p] && c.bound[p](T), u && io(t, p)),
              b
            );
          })
        : []),
      c.update(),
      (u = !0),
      De(c.before_update),
      (c.fragment = n ? n(c.ctx) : !1),
      e.target)
    ) {
      if (e.hydrate) {
        Vn();
        const p = it(e.target);
        c.fragment && c.fragment.l(p), p.forEach(A);
      } else c.fragment && c.fragment.c();
      e.intro && ae(t.$$.fragment),
        Xt(t, e.target, e.anchor, e.customElement),
        Xn(),
        G();
    }
    ke(i);
  }
  let mt;
  typeof HTMLElement == "function" &&
    (mt = class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        const { on_mount: t } = this.$$;
        this.$$.on_disconnect = t.map(Ht).filter(Bt);
        for (const e in this.$$.slotted) this.appendChild(this.$$.slotted[e]);
      }
      attributeChangedCallback(t, e, r) {
        this[t] = r;
      }
      disconnectedCallback() {
        De(this.$$.on_disconnect);
      }
      $destroy() {
        Dt(this, 1), (this.$destroy = g);
      }
      $on(t, e) {
        const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return (
          r.push(e),
          () => {
            const n = r.indexOf(e);
            n !== -1 && r.splice(n, 1);
          }
        );
      }
      $set(t) {
        this.$$set &&
          !Tr(t) &&
          ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
      }
    });
  class Dr {
    $destroy() {
      Dt(this, 1), (this.$destroy = g);
    }
    $on(e, r) {
      const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
      return (
        n.push(r),
        () => {
          const o = n.indexOf(r);
          o !== -1 && n.splice(o, 1);
        }
      );
    }
    $set(e) {
      this.$$set &&
        !Tr(e) &&
        ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
    }
  }
  const Ye = [];
  function lo(t, e) {
    return { subscribe: we(t, e).subscribe };
  }
  function we(t, e = g) {
    let r;
    const n = new Set();
    function o(l) {
      if (He(t, l) && ((t = l), r)) {
        const i = !Ye.length;
        for (const c of n) c[1](), Ye.push(c, t);
        if (i) {
          for (let c = 0; c < Ye.length; c += 2) Ye[c][0](Ye[c + 1]);
          Ye.length = 0;
        }
      }
    }
    function a(l) {
      o(l(t));
    }
    function s(l, i = g) {
      const c = [l, i];
      return (
        n.add(c),
        n.size === 1 && (r = e(o) || g),
        l(t),
        () => {
          n.delete(c), n.size === 0 && (r(), (r = null));
        }
      );
    }
    return { set: o, update: a, subscribe: s };
  }
  function co(t, e, r) {
    const n = !Array.isArray(t),
      o = n ? [t] : t,
      a = e.length < 2;
    return lo(r, (s) => {
      let l = !1;
      const i = [];
      let c = 0,
        u = g;
      const p = () => {
          if (c) return;
          u();
          const _ = e(n ? i[0] : i, s);
          a ? s(_) : (u = Bt(_) ? _ : g);
        },
        b = o.map((_, T) =>
          Er(
            _,
            (L) => {
              (i[T] = L), (c &= ~(1 << T)), l && p();
            },
            () => {
              c |= 1 << T;
            },
          ),
        );
      return (
        (l = !0),
        p(),
        function () {
          De(b), u();
        }
      );
    });
  }
  function fo() {
    return we({});
  }
  const $t = fo();
  var uo = Object.defineProperty,
    mo = Object.defineProperties,
    ho = Object.getOwnPropertyDescriptors,
    Rr = Object.getOwnPropertySymbols,
    po = Object.prototype.hasOwnProperty,
    go = Object.prototype.propertyIsEnumerable,
    xr = (t, e, r) =>
      e in t
        ? uo(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
        : (t[e] = r),
    _o = (t, e) => {
      for (var r in e || (e = {})) po.call(e, r) && xr(t, r, e[r]);
      if (Rr) for (var r of Rr(e)) go.call(e, r) && xr(t, r, e[r]);
      return t;
    },
    bo = (t, e) => mo(t, ho(e));
  async function ee(t) {
    var e;
    if (!t.ok) {
      const r = await t.json().then((a) => a),
        n =
          ((e = r == null ? void 0 : r.response) == null ? void 0 : e.error) ||
          (r == null ? void 0 : r.message),
        o = new Error(n);
      return (
        (o.name = r.name), Promise.reject({ message: o, statusCode: t.status })
      );
    }
    return t.json();
  }
  function te(t = { component_id: "" }) {
    return {
      method: t.method || "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Component-Id": t.component_id || "",
        "X-Access-Token": t.access_token || "",
      },
      body: t.body ? JSON.stringify(t.body) : void 0,
    };
  }
  function oe(t, e) {
    throw (console.error(e), $t.update((r) => bo(_o({}, r), { [t]: e })), e);
  }
  const Lr = { "001": "", "002": "ireland-", "003": "canada-" };
  function re(t) {
    let e = "";
    if (t.substring(3, 4) === "-") {
      const n = t.substring(0, 3);
      typeof Lr[n] != "undefined" && (e = Lr[n]);
    }
    return `https://${e}web-components.nylas.com/middleware`;
  }
  function Ie(t) {}
  function vo(t) {
    return Object.keys(t)
      .reduce(
        (e, r) => (t[r] !== void 0 && e.append(r, t[r]), e),
        new URLSearchParams(),
      )
      .toString();
  }
  const yo = async (t, e) => {
      const r = `${re(t.component_id)}/contact-list/contacts?${vo(e)}`,
        n = await fetch(
          r,
          te({ component_id: t.component_id, access_token: t.access_token }),
        )
          .then((o) => ee(o))
          .then((o) => o.response)
          .catch((o) => oe(t.component_id, o));
      return n != null ? n : [];
    },
    ko = async (t) => {
      const e = await fetch(
        `${re(t.component_id)}/contacts${t.query}`,
        te({ component_id: t.component_id, access_token: t.access_token }),
      )
        .then((r) => ee(r))
        .then((r) => r.response)
        .catch((r) => oe(t.component_id, r));
      return e != null ? e : [];
    },
    wo = async (t, e) =>
      await fetch(
        `${re(t.component_id)}/contacts/${e}/picture`,
        te({ component_id: t.component_id, access_token: t.access_token }),
      )
        .then((r) => ee(r))
        .then((r) => r.response)
        .catch((r) => oe(t.component_id, r));
  var To = Object.defineProperty,
    Eo = Object.defineProperties,
    Ao = Object.getOwnPropertyDescriptors,
    Mr = Object.getOwnPropertySymbols,
    Oo = Object.prototype.hasOwnProperty,
    So = Object.prototype.propertyIsEnumerable,
    Pr = (t, e, r) =>
      e in t
        ? To(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
        : (t[e] = r),
    Ir = (t, e) => {
      for (var r in e || (e = {})) Oo.call(e, r) && Pr(t, r, e[r]);
      if (Mr) for (var r of Mr(e)) So.call(e, r) && Pr(t, r, e[r]);
      return t;
    },
    Fr = (t, e) => Eo(t, Ao(e));
  const jr = (t, e, r) => {
    if (t.thread_ids) {
      const o = t.thread_ids.slice(r, r + e);
      return Promise.all(
        o.map(async (a) => {
          const s = `${re(t.component_id)}/threads/${a}?view=expanded`;
          return await fetch(s, te(t))
            .then((l) => ee(l))
            .then((l) => l.response)
            .then((l) =>
              Fr(Ir({}, l), {
                messages: l.messages.filter(
                  (i) => i.from.length !== 0 || i.to.length !== 0,
                ),
              }),
            )
            .catch((l) => oe(t.component_id, l));
        }),
      );
    }
    let n = `${re(
      t.component_id,
    )}/threads?view=expanded&not_in=trash&limit=${e}&offset=${r}`;
    return (
      t.query &&
        Object.entries(t.query).forEach(
          (o) => (n = n.concat(`&${o[0]}=${o[1]}`)),
        ),
      fetch(n, te(t))
        .then((o) => ee(o))
        .then((o) => o.response)
        .then((o) =>
          o.map((a) =>
            Fr(Ir({}, a), {
              messages: a.messages.filter(
                (s) => s.from.length !== 0 || s.to.length !== 0,
              ),
            }),
          ),
        )
        .catch((o) => oe(t.component_id, o))
    );
  };
  function zr(t) {
    let e = `${re(
      t.component_id,
    )}/threads?view=expanded&not_in=trash&view=count`;
    return (
      t.query &&
        Object.entries(t.query).forEach(
          (r) => (e = e.concat(`&${r[0]}=${r[1]}`)),
        ),
      t.keywordToSearch && (e += `&q=${t.keywordToSearch}`),
      fetch(e, te(t))
        .then((r) => ee(r))
        .then((r) => r.response.count)
    );
  }
  const No = (t) => {
      const e = `${re(t.component_id)}/threads/search?q=${
        t.keywordToSearch
      }&view=expanded&limit=${t.query.limit}&offset=${t.query.offset}`;
      return fetch(e, te(t))
        .then(async (r) => ee(r))
        .then((r) => r.response)
        .catch((r) => oe(t.component_id, r));
    },
    Co = async (t) =>
      await fetch(
        `${re(t.component_id)}/threads/${t.thread_id}?view=expanded`,
        te({ component_id: t.component_id, access_token: t.access_token }),
      )
        .then((r) => ee(r))
        .then((r) => r.response)
        .catch((r) => oe(t.component_id, r)),
    Do = (t, e) =>
      fetch(
        `${re(t.component_id)}/threads/${e.id}`,
        te({
          method: "PUT",
          component_id: t.component_id,
          access_token: t.access_token,
          body: {
            unread: e.unread,
            starred: e.starred,
            folder_id: e.folder_id,
            label_ids: e.label_ids,
          },
        }),
      )
        .then((r) => ee(r))
        .then((r) => r.response)
        .catch((r) => oe(t.component_id, r)),
    Ro = async (t, e) =>
      await fetch(`${re(t)}/manifest`, te({ access_token: e, component_id: t }))
        .then(ee)
        .then((r) => r.component.theming)
        .catch((r) => oe(t, r)),
    xo = async (t, e, r) =>
      await fetch(
        `${re(t)}/send`,
        te({ method: "POST", component_id: t, access_token: r, body: e }),
      )
        .then((n) => ee(n))
        .then((n) => n.response)
        .catch((n) => oe(t, n)),
    Lo = async (t) =>
      await fetch(`${re(t.component_id)}/account`, te(t))
        .then((r) => ee(r))
        .then((r) => r.response)
        .catch((r) => oe(t.component_id, r)),
    Mo = (t) =>
      fetch(
        `${re(t.component_id)}/neural/conversation`,
        te({
          method: "PUT",
          access_token: t.access_token,
          component_id: t.component_id,
          body: { message_id: t.message_id },
        }),
      )
        .then(async (e) => (await ee(e)).response)
        .catch((e) => oe(t.component_id, e));
  var Po = Object.defineProperty,
    Ur = Object.getOwnPropertySymbols,
    Io = Object.prototype.hasOwnProperty,
    Fo = Object.prototype.propertyIsEnumerable,
    Hr = (t, e, r) =>
      e in t
        ? Po(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
        : (t[e] = r),
    Br = (t, e) => {
      for (var r in e || (e = {})) Io.call(e, r) && Hr(t, r, e[r]);
      if (Ur) for (var r of Ur(e)) Fo.call(e, r) && Hr(t, r, e[r]);
      return t;
    };
  const jo = async (t) =>
      fetch(
        `${re(t.component_id)}/calendars/availability`,
        te({
          method: "POST",
          component_id: t.component_id,
          access_token: t.access_token,
          body: t.body,
        }),
      )
        .then(async (e) => {
          const r = await ee(e);
          return (
            (r.response.time_slots = r.response.time_slots.map(
              (n) => (
                (n.start_time = n.start || 0),
                (n.end_time = n.end || 0),
                delete n.start,
                delete n.end,
                n
              ),
            )),
            r.response
          );
        })
        .catch((e) => oe(t.component_id, e)),
    zo = async (t) =>
      fetch(
        `${re(t.component_id)}/calendars/availability/consecutive`,
        te({
          method: "POST",
          component_id: t.component_id,
          access_token: t.access_token,
          body: t.body,
        }),
      )
        .then(async (e) => {
          var r;
          const o =
              ((r = (await ee(e)).response) == null
                ? void 0
                : r.map(
                    (l) => (
                      (l = l.map(
                        (i) => (
                          (i.start_time = new Date(i.start_time * 1e3)),
                          (i.end_time = new Date(i.end_time * 1e3)),
                          i
                        ),
                      )),
                      l
                    ),
                  )) || [],
            a = Uo(o, t.body.events);
          return Ho(a);
        })
        .catch((e) => oe(t.component_id, e));
  function Uo(t, e) {
    return t.map((r) =>
      r.map((n) =>
        Br(
          Br({}, n),
          e.find(
            (o) =>
              o.participantEmails.length === n.emails.length &&
              o.participantEmails.every((a) => n.emails.includes(a)),
          ),
        ),
      ),
    );
  }
  function Ho(t) {
    const e = new Set();
    return t.filter((r) => {
      const n = `${r[0].start_time}_${r[r.length - 1].end_time}`;
      return e.has(n) ? !1 : (e.add(n), !0);
    });
  }
  var Bo = Object.defineProperty,
    Gr = Object.getOwnPropertySymbols,
    Go = Object.prototype.hasOwnProperty,
    Wo = Object.prototype.propertyIsEnumerable,
    Wr = (t, e, r) =>
      e in t
        ? Bo(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
        : (t[e] = r),
    Jo = (t, e) => {
      for (var r in e || (e = {})) Go.call(e, r) && Wr(t, r, e[r]);
      if (Gr) for (var r of Gr(e)) Wo.call(e, r) && Wr(t, r, e[r]);
      return t;
    };
  function Yo() {
    const t = (r, n) => {
        var o, a;
        const s = JSON.parse(n),
          l = Jo({}, s);
        if (
          (delete l.forceReload,
          (n = JSON.stringify(l)),
          !(
            !s.component_id ||
            !((o = s == null ? void 0 : s.body) == null
              ? void 0
              : o.start_time) ||
            !((a = s == null ? void 0 : s.body) == null ? void 0 : a.end_time)
          ))
        ) {
          if (!r[n] || s.forceReload) {
            const i = jo(s);
            e.update((c) => ((c[n] = i), c)), (r[n] = i);
          }
          return r[n];
        }
      },
      e = we(new Proxy({}, { get: t }));
    return e;
  }
  Yo();
  function Ko() {
    const t = (r, n) => {
        var o, a;
        const s = JSON.parse(n);
        if (
          !(
            !s.component_id ||
            !((o = s == null ? void 0 : s.body) == null
              ? void 0
              : o.start_time) ||
            !((a = s == null ? void 0 : s.body) == null ? void 0 : a.end_time)
          )
        ) {
          if (!r[n]) {
            const l = zo(s);
            e.update((i) => ((i[n] = l), i)), (r[n] = l);
          }
          return r[n];
        }
      },
      e = we(new Proxy({}, { get: t }));
    return e;
  }
  Ko();
  var Vo = Object.defineProperty,
    Jr = Object.getOwnPropertySymbols,
    Xo = Object.prototype.hasOwnProperty,
    $o = Object.prototype.propertyIsEnumerable,
    Yr = (t, e, r) =>
      e in t
        ? Vo(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
        : (t[e] = r),
    Kr = (t, e) => {
      for (var r in e || (e = {})) Xo.call(e, r) && Yr(t, r, e[r]);
      if (Jr) for (var r of Jr(e)) $o.call(e, r) && Yr(t, r, e[r]);
      return t;
    };
  let se = {};
  function Vr(t) {
    return t
      .filter(
        (e) =>
          !!e.given_name ||
          !!e.surname ||
          (Array.isArray(e.emails) && e.emails.length > 0),
      )
      .map(
        (e) => (
          (!Array.isArray(e.emails) || e.emails.length === 0) &&
            (e.emails = [{ email: "" }]),
          e
        ),
      );
  }
  function Zo() {
    const { subscribe: t, set: e, update: r } = we({});
    return {
      subscribe: t,
      addContacts: async (n, o) => {
        var a;
        const s = JSON.stringify(n);
        if (!se[s] && (n.component_id || n.access_token)) {
          o.offset === 0 && Zt.reset();
          const l =
            (a = await yo(n, o)
              .then((i) => Vr(i))
              .catch(() => [])) != null
              ? a
              : [];
          return (
            (se[s] = se[s] ? [...se[s], ...l] : l),
            r((i) => ((i[s] = se[s]), Kr({}, i))),
            se[s]
          );
        }
      },
      addContact: async (n) => {
        var o;
        const a = JSON.stringify(n);
        if (!se[a] && (n.component_id || n.access_token)) {
          const s =
            (o = await ko(n)
              .then((l) => Vr(l))
              .catch(() => [])) != null
              ? o
              : [];
          (se[a] = se[a] ? [...se[a], ...s] : s),
            r((l) => ((l[a] = se[a]), Kr({}, l)));
        }
        return se[a];
      },
      reset: () => {
        (se = {}), e({});
      },
    };
  }
  const Zt = Zo(),
    Qt = {};
  function Qo() {
    const { subscribe: t, set: e } = we({});
    return {
      subscribe: t,
      getContactAvatar: async (r, n, o = !1) => {
        if (!Qt[n] || o) {
          const a = await wo(r, n)
            .then((s) => s)
            .catch(() => "");
          a && (Qt[n] = a);
        }
        return Qt[n];
      },
      reset: () => e({}),
    };
  }
  const qo = Qo();
  var ea = Object.defineProperty,
    Xr = Object.getOwnPropertySymbols,
    ta = Object.prototype.hasOwnProperty,
    ra = Object.prototype.propertyIsEnumerable,
    $r = (t, e, r) =>
      e in t
        ? ea(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
        : (t[e] = r),
    Ke = (t, e) => {
      for (var r in e || (e = {})) ta.call(e, r) && $r(t, r, e[r]);
      if (Xr) for (var r of Xr(e)) ra.call(e, r) && $r(t, r, e[r]);
      return t;
    };
  function na() {
    const { subscribe: t, set: e, update: r } = we({}),
      n = {};
    return {
      subscribe: t,
      getConversation: async (o) => {
        const a = JSON.stringify(o);
        if (!n[a] && (o.component_id || o.access_token)) {
          const s = await Co(o).catch(Ie);
          s && ((n[a] = s), r((l) => ((l[a] = n[a]), Ke({}, l))));
        }
        return await n[a];
      },
      addThread: (o) => {
        r((a) => ((a[o.queryKey] = o.data), Ke({}, a)));
      },
      updateThread: (o) => {
        r(
          (a) => (
            (a[o.queryKey] = Ke(Ke({}, a[o.queryKey]), o.data)), Ke({}, a)
          ),
        );
      },
      addMessageToThread: (o) => (
        r((a) => {
          var s;
          let l =
            (s = a[o.queryKey].messages) == null
              ? void 0
              : s.find((i) => i.id === o.data.id);
          if (l) l = o.data;
          else {
            const i = a[o.queryKey].messages;
            i.push(o.data), (a[o.queryKey].messages = i);
          }
          return Ke({}, a);
        }),
        n[o.queryKey]
      ),
      reset: () => e({}),
    };
  }
  const Zr = na();
  var oa = Object.defineProperty,
    Qr = Object.getOwnPropertySymbols,
    aa = Object.prototype.hasOwnProperty,
    sa = Object.prototype.propertyIsEnumerable,
    qr = (t, e, r) =>
      e in t
        ? oa(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
        : (t[e] = r),
    Fe = (t, e) => {
      for (var r in e || (e = {})) aa.call(e, r) && qr(t, r, e[r]);
      if (Qr) for (var r of Qr(e)) sa.call(e, r) && qr(t, r, e[r]);
      return t;
    };
  async function en(t) {
    const e = [];
    for (let r = 0; r < t; r++) e.push({ isLoaded: !1, threads: [] });
    return e;
  }
  function ia() {
    const { subscribe: t, set: e, update: r } = we({});
    let n = {},
      o;
    return {
      subscribe: t,
      set: e,
      getThreads: async (a, s, l, i = !1) => {
        const c = JSON.stringify(a);
        if (!a.component_id && !a.access_token) return [];
        if (o === void 0 || i) {
          const u = a.thread_ids ? a.thread_ids.length : await zr(a).catch(Ie);
          u && (o = u);
        }
        if (!Array.isArray(n[c]) || i) {
          const u = Math.ceil(o / l);
          n[c] = await en(u);
        }
        if (typeof n[c][s] == "undefined") return [];
        if (!n[c][s].isLoaded) {
          const u = await jr(a, l, s * l).catch(Ie);
          u && ((n[c][s].threads = u), (n[c][s].isLoaded = !0));
        }
        return r((u) => ((u[c] = n[c]), Fe({}, u))), n[c][s].threads;
      },
      getNumberOfItems: async (a) => {
        if (!a.component_id && !a.access_token) return 0;
        if (typeof o == "undefined") {
          const s = await zr(a).catch(Ie);
          s && (o = s);
        }
        return o;
      },
      getThreadsWithSearchKeyword: async (a, s = !1) => {
        if (!a.component_id && !a.access_token) return [];
        const l = JSON.stringify(a);
        if (
          ((!Array.isArray(n[l]) || s) && (n[l] = await en(1)),
          !n[l][0].isLoaded || s)
        ) {
          const i = await No(a).catch(Ie);
          i && ((n[l][0].threads = i), (n[l][0].isLoaded = !0));
        }
        return r((i) => ((i[l] = n[l]), Fe({}, i))), n[l][0].threads;
      },
      updateThread: async (a, s, l, i, c) => {
        const u = await Do(a, l).catch(Ie);
        if (!n[s][i].isLoaded) {
          const p = await jr(JSON.parse(s), c, i * c).catch(Ie);
          p && ((n[s][i].threads = p), (n[s][i].isLoaded = !0));
        }
        return (
          (n[s][i].threads = n[s][i].threads.map(
            (p) => (u && p.id === u.id && (p = Object.assign(p, u)), p),
          )),
          r((p) => ((p[s] = n[s]), Fe({}, p))),
          n[s][i].threads
        );
      },
      updateThreadSelection: (a, s, l) => {
        const i = n[a][s].threads;
        if (l) {
          const c = i.find((u) => u.id === l);
          c && (c.selected = !c.selected);
        } else {
          const c = i.some((u) => u.selected);
          for (const u of i) u.selected = !c;
        }
        return r((c) => ((c[a] = n[a]), Fe({}, c))), n[a][s].threads;
      },
      reset: () => {
        (n = {}), e({});
      },
      hydrateMessageInThread: (a, s, l) => {
        var i, c, u;
        const p = JSON.stringify(s),
          b =
            (c = (i = n[p][l]) == null ? void 0 : i.threads) == null
              ? void 0
              : c.find((_) => _.id === a.thread_id);
        if (b) {
          const _ =
            (u = b.messages) == null ? void 0 : u.find((T) => T.id === a.id);
          _
            ? ((_.body = a.body),
              r((T) => {
                if (a.thread_id) {
                  let L = T[p][l].threads.find((O) => O.id === b.id);
                  L && (L = JSON.parse(JSON.stringify(b)));
                }
                return Fe({}, T);
              }))
            : r((T) => {
                if (a.thread_id) {
                  let L = T[p][l].threads.find((O) => O.id === b.id);
                  if (L) {
                    const O = b.messages;
                    O.push(a),
                      (b.messages = O),
                      (b.snippet = a.snippet),
                      (b.drafts = b.drafts.filter((M) => M.id !== a.id)),
                      (L = JSON.parse(JSON.stringify(b)));
                  }
                }
                return Fe({}, T);
              });
        }
        return n[p][l].threads;
      },
      hydrateDraftInThread: (a, s, l) => {
        var i, c, u;
        const p = JSON.stringify(s),
          b =
            (c = (i = n[p][l]) == null ? void 0 : i.threads) == null
              ? void 0
              : c.find((_) => _.id === a.thread_id);
        if (b) {
          const _ =
            (u = b.drafts) == null ? void 0 : u.find((T) => T.id === a.id);
          if (a.thread_id) {
            if (_) Object.assign(_, a);
            else {
              const T = b.drafts;
              T.push(a), (b.drafts = T);
            }
            r((T) => {
              let L = T[p][l].threads.find((O) => O.id === b.id);
              return L && (L = JSON.parse(JSON.stringify(b))), Fe({}, T);
            });
          }
        }
        return n[p][l].threads;
      },
    };
  }
  const la = ia();
  co(la, (t) => {
    const e = {};
    return (
      Object.entries(t).forEach(
        ([r, n]) => (e[r] = n.map((o) => o.threads).flat()),
      ),
      e
    );
  });
  function ca() {
    const t = (r, n) => {
        const o = JSON.parse(n);
        if (!!o.component_id) {
          if (!r[n]) {
            const a = Ro(o.component_id, o.access_token);
            e.update((s) => ((s[n] = a), s)), (r[n] = a);
          }
          return r[n];
        }
      },
      e = we(new Proxy({}, { get: t }));
    return e;
  }
  const fa = ca();
  function ua(t) {
    return (e, r) => {
      t.dispatchEvent &&
        t.dispatchEvent(new CustomEvent(e, { detail: r, composed: !0 }));
    };
  }
  function qt(t, e, r) {
    return new Proxy(t, {
      get: (n, o) =>
        o === "toString" || o === "toJSON"
          ? () => JSON.stringify(n)
          : Reflect.get(n, o) !== void 0
          ? tn(Reflect.get(n, o), r[o])
          : e && o in e
          ? tn(e[o], r[o])
          : r[o],
      ownKeys: (n) => {
        const o = new Set([
          ...Reflect.ownKeys(n),
          ...Object.keys(e),
          ...Object.keys(r),
        ]);
        return Array.from(o);
      },
      getOwnPropertyDescriptor: (n, o) => {
        var a, s;
        let l = Reflect.getOwnPropertyDescriptor(n, o);
        return (
          l ||
            ((l =
              (s =
                (a = e && Object.getOwnPropertyDescriptor(e, o)) != null
                  ? a
                  : r && Object.getOwnPropertyDescriptor(r, o)) != null
                ? s
                : { configurable: !0, enumerable: !0, writable: !0 }),
            Reflect.defineProperty(n, o, l)),
          l
        );
      },
    });
  }
  function tn(t, e) {
    if (t) {
      if (typeof e == "boolean") return ma(t);
      if (typeof e == "number") return Number(t);
      if (e instanceof Date) return new Date(t);
    }
    return t === void 0 ? (e != null ? e : null) : t;
  }
  function ma(t) {
    return [!0, "true", "1"].includes(t);
  }
  function rn(t) {
    let e, r, n, o, a, s;
    function l(u, p) {
      if (u[2] === "HostDomainNotAllowedError") return ha;
      if (u[2] === "IncompatibleProperties") return da;
    }
    let i = l(t),
      c = i && i(t);
    return {
      c() {
        var u, p;
        (e = R("div")),
          c && c.c(),
          (r = Y()),
          (n = R("span")),
          (n.textContent = "Debug info:"),
          (o = Y()),
          (a = R("textarea")),
          I(n, "class", "details"),
          I(a, "class", "details"),
          (a.readOnly = !0),
          (a.value = s =
            `
      ` +
            t[2] +
            ": " +
            t[0] +
            `
      ` +
            ((p = (u = t[1].message) == null ? void 0 : u.message) != null
              ? p
              : "") +
            `
    `),
          I(e, "class", "message-container");
      },
      m(u, p) {
        N(u, e, p), c && c.m(e, null), D(e, r), D(e, n), D(e, o), D(e, a);
      },
      p(u, p) {
        var b, _;
        i === (i = l(u)) && c
          ? c.p(u, p)
          : (c && c.d(1), (c = i && i(u)), c && (c.c(), c.m(e, r))),
          p & 7 &&
            s !==
              (s =
                `
      ` +
                u[2] +
                ": " +
                u[0] +
                `
      ` +
                ((_ = (b = u[1].message) == null ? void 0 : b.message) != null
                  ? _
                  : "") +
                `
    `) &&
            (a.value = s);
      },
      d(u) {
        u && A(e), c && c.d();
      },
    };
  }
  function da(t) {
    let e;
    return {
      c() {
        (e = R("h3")),
          (e.textContent =
            "Your component properties do not work with each other.");
      },
      m(r, n) {
        N(r, e, n);
      },
      p: g,
      d(r) {
        r && A(e);
      },
    };
  }
  function ha(t) {
    let e, r, n, o, a, s;
    return {
      c() {
        (e = R("h3")),
          (r = B(`You are trying to access this component from\xA0
        `)),
          (n = R("code")),
          (n.textContent = `${window.location.hostname}`),
          (o = B(`. The component's settings do not
        allow access from this domain.`)),
          (a = Y()),
          (s = R("h4")),
          (s.innerHTML = `The list of allowed domains can be modified in your\xA0
        <a href="https://dashboard.nylas.com">Dashboard</a>.`);
      },
      m(l, i) {
        N(l, e, i), D(e, r), D(e, n), D(e, o), N(l, a, i), N(l, s, i);
      },
      p: g,
      d(l) {
        l && A(e), l && A(a), l && A(s);
      },
    };
  }
  function pa(t) {
    let e,
      r = t[2] && t[3] && rn(t);
    return {
      c() {
        r && r.c(), (e = Ge()), (this.c = g);
      },
      m(n, o) {
        r && r.m(n, o), N(n, e, o);
      },
      p(n, [o]) {
        n[2] && n[3]
          ? r
            ? r.p(n, o)
            : ((r = rn(n)), r.c(), r.m(e.parentNode, e))
          : r && (r.d(1), (r = null));
      },
      i: g,
      o: g,
      d(n) {
        r && r.d(n), n && A(e);
      },
    };
  }
  function ga(t, e, r) {
    let n;
    vt(t, $t, (b) => r(8, (n = b)));
    var o, a, s, l;
    let { id: i } = e,
      c,
      u;
    const p =
      window.location.href.includes("localhost") ||
      window.location.href.includes("127.0.0.1");
    return (
      (t.$$set = (b) => {
        "id" in b && r(0, (i = b.id));
      }),
      (t.$$.update = () => {
        t.$$.dirty & 499 &&
          (r(
            1,
            (c = r(4, (o = n[i])) !== null && o !== void 0 ? o : { name: "" }),
          ),
          r(
            2,
            (u =
              r(
                7,
                (l =
                  r(5, (a = c.name)) !== null && a !== void 0
                    ? a
                    : r(6, (s = c.message)) === null || s === void 0
                    ? void 0
                    : s.name),
              ) !== null && l !== void 0
                ? l
                : ""),
          ));
      }),
      [i, c, u, p, o, a, s, l, n]
    );
  }
  class _a extends mt {
    constructor(e) {
      super();
      (this.shadowRoot.innerHTML = `<style>.message-container{background:#fff6f6;border-radius:5px;box-shadow:0 0 0 1px #aa92a0 inset, 0 0 0 0 transparent;color:#9f3a38;font-size:1.25rem;padding:10px;margin:0 auto;transition:opacity 500ms ease, color 500ms ease,
      background-color 500ms ease, box-shadow 500ms ease,
      -webkit-box-shadow 500ms ease}.message-container *:focus{outline:5px auto Highlight;outline:5px auto -webkit-focus-ring-color}.details{color:#494949;font-size:0.75rem;width:100%}</style>`),
        Je(
          this,
          {
            target: this.shadowRoot,
            props: Et(this.attributes),
            customElement: !0,
          },
          ga,
          pa,
          Kn,
          { id: 0 },
          null,
        ),
        e &&
          (e.target && N(e.target, this, e.anchor),
          e.props && (this.$set(e.props), G()));
    }
    static get observedAttributes() {
      return ["id"];
    }
    get id() {
      return this.$$.ctx[0];
    }
    set id(e) {
      this.$$set({ id: e }), G();
    }
  }
  customElements.define("nylas-error", _a);
  function ba(t) {
    let e,
      r =
        (t[0].given_name && t[0].surname
          ? t[0].given_name.charAt(0) + t[0].surname.charAt(0)
          : t[0].name
          ? t[0].name.charAt(0)
          : t[0].email
          ? t[0].email.charAt(0)
          : "?") + "",
      n;
    return {
      c() {
        (e = R("p")), (n = B(r)), We(e, "margin", "0");
      },
      m(o, a) {
        N(o, e, a), D(e, n);
      },
      p(o, a) {
        a & 1 &&
          r !==
            (r =
              (o[0].given_name && o[0].surname
                ? o[0].given_name.charAt(0) + o[0].surname.charAt(0)
                : o[0].name
                ? o[0].name.charAt(0)
                : o[0].email
                ? o[0].email.charAt(0)
                : "?") + "") &&
          le(n, r);
      },
      d(o) {
        o && A(e);
      },
    };
  }
  function va(t) {
    let e, r;
    return {
      c() {
        (e = R("img")),
          I(e, "alt", ""),
          We(e, "height", t[1]),
          We(e, "width", t[2]),
          We(e, "border-radius", "50%"),
          wr(e.src, (r = "data:image/jpg;base64," + t[3])) || I(e, "src", r);
      },
      m(n, o) {
        N(n, e, o);
      },
      p(n, o) {
        o & 2 && We(e, "height", n[1]),
          o & 4 && We(e, "width", n[2]),
          o & 8 &&
            !wr(e.src, (r = "data:image/jpg;base64," + n[3])) &&
            I(e, "src", r);
      },
      d(n) {
        n && A(e);
      },
    };
  }
  function ya(t) {
    let e;
    function r(a, s) {
      if (a[3]) return va;
      if (a[0]) return ba;
    }
    let n = r(t),
      o = n && n(t);
    return {
      c() {
        o && o.c(), (e = Ge()), (this.c = g);
      },
      m(a, s) {
        o && o.m(a, s), N(a, e, s);
      },
      p(a, [s]) {
        n === (n = r(a)) && o
          ? o.p(a, s)
          : (o && o.d(1), (o = n && n(a)), o && (o.c(), o.m(e.parentNode, e)));
      },
      i: g,
      o: g,
      d(a) {
        o && o.d(a), a && A(e);
      },
    };
  }
  function ka(t, e, r) {
    let n,
      { contact: o } = e,
      { contact_query: a } = e,
      { height: s = "32px" } = e,
      { width: l = "32px" } = e;
    return (
      to(async () => {
        o && o.picture_url
          ? r(3, (n = await qo.getContactAvatar(a, o.id)))
          : r(3, (n = null));
      }),
      (t.$$set = (i) => {
        "contact" in i && r(0, (o = i.contact)),
          "contact_query" in i && r(4, (a = i.contact_query)),
          "height" in i && r(1, (s = i.height)),
          "width" in i && r(2, (l = i.width));
      }),
      r(3, (n = null)),
      [o, s, l, n, a]
    );
  }
  class wa extends mt {
    constructor(e) {
      super();
      Je(
        this,
        {
          target: this.shadowRoot,
          props: Et(this.attributes),
          customElement: !0,
        },
        ka,
        ya,
        He,
        { contact: 0, contact_query: 4, height: 1, width: 2 },
        null,
      ),
        e &&
          (e.target && N(e.target, this, e.anchor),
          e.props && (this.$set(e.props), G()));
    }
    static get observedAttributes() {
      return ["contact", "contact_query", "height", "width"];
    }
    get contact() {
      return this.$$.ctx[0];
    }
    set contact(e) {
      this.$$set({ contact: e }), G();
    }
    get contact_query() {
      return this.$$.ctx[4];
    }
    set contact_query(e) {
      this.$$set({ contact_query: e }), G();
    }
    get height() {
      return this.$$.ctx[1];
    }
    set height(e) {
      this.$$set({ height: e }), G();
    }
    get width() {
      return this.$$.ctx[2];
    }
    set width(e) {
      this.$$set({ width: e }), G();
    }
  }
  customElements.define("nylas-contact-image", wa);
  function Ta(t) {
    let e, r, n, o, a, s, l;
    return {
      c() {
        (e = R("div")),
          (r = R("p")),
          (n = B(t[0])),
          (o = Y()),
          (a = R("button")),
          (a.textContent = "Refresh your page"),
          (this.c = g),
          I(a, "type", "button");
      },
      m(i, c) {
        N(i, e, c),
          D(e, r),
          D(r, n),
          D(e, o),
          D(e, a),
          s || ((l = kt(a, "click", t[1])), (s = !0));
      },
      p(i, [c]) {
        c & 1 && le(n, i[0]);
      },
      i: g,
      o: g,
      d(i) {
        i && A(e), (s = !1), l();
      },
    };
  }
  function Ea(t, e, r) {
    let { error_message: n = "Uh oh! Looks like an error occurred" } = e;
    const o = () => location.reload();
    return (
      (t.$$set = (a) => {
        "error_message" in a && r(0, (n = a.error_message));
      }),
      [n, o]
    );
  }
  class Aa extends mt {
    constructor(e) {
      super();
      (this.shadowRoot.innerHTML =
        "<style>*{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;list-style:none}div{background:var(--red-lighter);bottom:0;color:var(--red);font-size:1rem;line-height:24px;min-height:85px;padding:20px 24px;position:fixed;right:0;min-width:240px;z-index:2}button{background:transparent;color:var(--blue);cursor:pointer;font-style:italic;text-decoration:underline;margin-top:10px}</style>"),
        Je(
          this,
          {
            target: this.shadowRoot,
            props: Et(this.attributes),
            customElement: !0,
          },
          Ea,
          Ta,
          He,
          { error_message: 0 },
          null,
        ),
        e &&
          (e.target && N(e.target, this, e.anchor),
          e.props && (this.$set(e.props), G()));
    }
    static get observedAttributes() {
      return ["error_message"];
    }
    get error_message() {
      return this.$$.ctx[0];
    }
    set error_message(e) {
      this.$$set({ error_message: e }), G();
    }
  }
  customElements.define("nylas-message-error", Aa);
  function Oa(t) {
    const e = t.toLocaleTimeString([], { timeStyle: "short" });
    return e === "12:00 p.m." ? "Noon" : e.replace(/\./g, "");
  }
  function Sa(t) {
    const e = (r) =>
      [31, 21, 1].includes(r)
        ? "st "
        : [22, 2].includes(r)
        ? "nd "
        : [23, 3].includes(r)
        ? "rd "
        : "th ";
    return t
      .toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
      .replaceAll(/, /g, e(t.getDate()))
      .replaceAll(/[.]/g, "");
  }
  function Na(t) {
    return t
      .toLocaleDateString(void 0, { month: "short", day: "numeric" })
      .replaceAll(/[.]/g, "");
  }
  function nn(t) {
    const e = new Date();
    return e.toDateString() === t.toDateString()
      ? Oa(t)
      : e.getFullYear() - t.getFullYear() !== 0
      ? Sa(t)
      : new Date(e.getDate() - 1).toDateString() === t.toDateString()
      ? "Yesterday"
      : Na(t);
  }
  var Ca =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : typeof self != "undefined"
      ? self
      : {};
  function Da(t, e, r) {
    return (
      (r = {
        path: e,
        exports: {},
        require: function (n, o) {
          return Ra(n, o == null ? r.path : o);
        },
      }),
      t(r, r.exports),
      r.exports
    );
  }
  function Ra() {
    throw new Error(
      "Dynamic requires are not currently supported by @rollup/plugin-commonjs",
    );
  }
  var on = Da(function (t, e) {
    /*! @license DOMPurify 2.3.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.5/LICENSE */ (function (
      r,
      n,
    ) {
      t.exports = n();
    })(Ca, function () {
      function r(m) {
        if (Array.isArray(m)) {
          for (var h = 0, C = Array(m.length); h < m.length; h++) C[h] = m[h];
          return C;
        } else return Array.from(m);
      }
      var n = Object.hasOwnProperty,
        o = Object.setPrototypeOf,
        a = Object.isFrozen,
        s = Object.getPrototypeOf,
        l = Object.getOwnPropertyDescriptor,
        i = Object.freeze,
        c = Object.seal,
        u = Object.create,
        p = typeof Reflect != "undefined" && Reflect,
        b = p.apply,
        _ = p.construct;
      b ||
        (b = function (h, C, P) {
          return h.apply(C, P);
        }),
        i ||
          (i = function (h) {
            return h;
          }),
        c ||
          (c = function (h) {
            return h;
          }),
        _ ||
          (_ = function (h, C) {
            return new (Function.prototype.bind.apply(
              h,
              [null].concat(r(C)),
            ))();
          });
      var T = K(Array.prototype.forEach),
        L = K(Array.prototype.pop),
        O = K(Array.prototype.push),
        M = K(String.prototype.toLowerCase),
        x = K(String.prototype.match),
        F = K(String.prototype.replace),
        U = K(String.prototype.indexOf),
        v = K(String.prototype.trim),
        k = K(RegExp.prototype.test),
        H = _e(TypeError);
      function K(m) {
        return function (h) {
          for (
            var C = arguments.length, P = Array(C > 1 ? C - 1 : 0), j = 1;
            j < C;
            j++
          )
            P[j - 1] = arguments[j];
          return b(m, h, P);
        };
      }
      function _e(m) {
        return function () {
          for (var h = arguments.length, C = Array(h), P = 0; P < h; P++)
            C[P] = arguments[P];
          return _(m, C);
        };
      }
      function S(m, h) {
        o && o(m, null);
        for (var C = h.length; C--; ) {
          var P = h[C];
          if (typeof P == "string") {
            var j = M(P);
            j !== P && (a(h) || (h[C] = j), (P = j));
          }
          m[P] = !0;
        }
        return m;
      }
      function be(m) {
        var h = u(null),
          C = void 0;
        for (C in m) b(n, m, [C]) && (h[C] = m[C]);
        return h;
      }
      function de(m, h) {
        for (; m !== null; ) {
          var C = l(m, h);
          if (C) {
            if (C.get) return K(C.get);
            if (typeof C.value == "function") return K(C.value);
          }
          m = s(m);
        }
        function P(j) {
          return console.warn("fallback value for", j), null;
        }
        return P;
      }
      var je = i([
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
        he = i([
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
        Ve = i([
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
        V = i([
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
        Re = i([
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
        Te = i([
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
        Ee = i(["#text"]),
        Rt = i([
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
        dt = i([
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
        xt = i([
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
        W = i([
          "xlink:href",
          "xml:id",
          "xlink:title",
          "xml:space",
          "xmlns:xlink",
        ]),
        Ae = c(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
        ce = c(/<%[\s\S]*|[\s\S]*%>/gm),
        Xe = c(/^data-[\-\w.\u00B7-\uFFFF]/),
        $e = c(/^aria-[\-\w]+$/),
        er = c(
          /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
        ),
        tr = c(/^(?:\w+script|data):/i),
        wn = c(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
        Oe =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (m) {
                return typeof m;
              }
            : function (m) {
                return m &&
                  typeof Symbol == "function" &&
                  m.constructor === Symbol &&
                  m !== Symbol.prototype
                  ? "symbol"
                  : typeof m;
              };
      function fe(m) {
        if (Array.isArray(m)) {
          for (var h = 0, C = Array(m.length); h < m.length; h++) C[h] = m[h];
          return C;
        } else return Array.from(m);
      }
      var rr = function () {
          return typeof window == "undefined" ? null : window;
        },
        nr = function (h, C) {
          if (
            (typeof h == "undefined" ? "undefined" : Oe(h)) !== "object" ||
            typeof h.createPolicy != "function"
          )
            return null;
          var P = null,
            j = "data-tt-policy-suffix";
          C.currentScript &&
            C.currentScript.hasAttribute(j) &&
            (P = C.currentScript.getAttribute(j));
          var ue = "dompurify" + (P ? "#" + P : "");
          try {
            return h.createPolicy(ue, {
              createHTML: function (Ze) {
                return Ze;
              },
            });
          } catch (xe) {
            return (
              console.warn(
                "TrustedTypes policy " + ue + " could not be created.",
              ),
              null
            );
          }
        };
      function Lt() {
        var m =
            arguments.length > 0 && arguments[0] !== void 0
              ? arguments[0]
              : rr(),
          h = function (f) {
            return Lt(f);
          };
        if (
          ((h.version = "2.3.5"),
          (h.removed = []),
          !m || !m.document || m.document.nodeType !== 9)
        )
          return (h.isSupported = !1), h;
        var C = m.document,
          P = m.document,
          j = m.DocumentFragment,
          ue = m.HTMLTemplateElement,
          xe = m.Node,
          Ze = m.Element,
          ze = m.NodeFilter,
          ve = m.NamedNodeMap,
          ht = ve === void 0 ? m.NamedNodeMap || m.MozNamedAttrMap : ve,
          ls = m.HTMLFormElement,
          cs = m.DOMParser,
          fs = m.trustedTypes,
          Mt = Ze.prototype,
          us = de(Mt, "cloneNode"),
          ms = de(Mt, "nextSibling"),
          ds = de(Mt, "childNodes"),
          or = de(Mt, "parentNode");
        if (typeof ue == "function") {
          var ar = P.createElement("template");
          ar.content &&
            ar.content.ownerDocument &&
            (P = ar.content.ownerDocument);
        }
        var Le = nr(fs, C),
          Tn = Le ? Le.createHTML("") : "",
          Pt = P,
          sr = Pt.implementation,
          hs = Pt.createNodeIterator,
          ps = Pt.createDocumentFragment,
          gs = Pt.getElementsByTagName,
          _s = C.importNode,
          En = {};
        try {
          En = be(P).documentMode ? P.documentMode : {};
        } catch (E) {}
        var ye = {};
        h.isSupported =
          typeof or == "function" &&
          sr &&
          typeof sr.createHTMLDocument != "undefined" &&
          En !== 9;
        var ir = Ae,
          lr = ce,
          bs = Xe,
          vs = $e,
          ys = tr,
          An = wn,
          cr = er,
          X = null,
          On = S({}, [].concat(fe(je), fe(he), fe(Ve), fe(Re), fe(Ee))),
          $ = null,
          Sn = S({}, [].concat(fe(Rt), fe(dt), fe(xt), fe(W))),
          J = Object.seal(
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
          pt = null,
          fr = null,
          Nn = !0,
          ur = !0,
          Cn = !1,
          Qe = !1,
          qe = !1,
          mr = !1,
          dr = !1,
          et = !1,
          It = !1,
          Ft = !1,
          Dn = !0,
          hr = !0,
          gt = !1,
          tt = {},
          rt = null,
          Rn = S({}, [
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
          xn = null,
          Ln = S({}, ["audio", "video", "img", "source", "image", "track"]),
          pr = null,
          Mn = S({}, [
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
          gr = "http://www.w3.org/1998/Math/MathML",
          _r = "http://www.w3.org/2000/svg",
          Me = "http://www.w3.org/1999/xhtml",
          jt = Me,
          br = !1,
          nt = void 0,
          ks = ["application/xhtml+xml", "text/html"],
          ws = "text/html",
          Ue = void 0,
          ot = null,
          Ts = P.createElement("form"),
          Pn = function (f) {
            return f instanceof RegExp || f instanceof Function;
          },
          vr = function (f) {
            (ot && ot === f) ||
              ((!f ||
                (typeof f == "undefined" ? "undefined" : Oe(f)) !== "object") &&
                (f = {}),
              (f = be(f)),
              (X = "ALLOWED_TAGS" in f ? S({}, f.ALLOWED_TAGS) : On),
              ($ = "ALLOWED_ATTR" in f ? S({}, f.ALLOWED_ATTR) : Sn),
              (pr =
                "ADD_URI_SAFE_ATTR" in f ? S(be(Mn), f.ADD_URI_SAFE_ATTR) : Mn),
              (xn =
                "ADD_DATA_URI_TAGS" in f ? S(be(Ln), f.ADD_DATA_URI_TAGS) : Ln),
              (rt = "FORBID_CONTENTS" in f ? S({}, f.FORBID_CONTENTS) : Rn),
              (pt = "FORBID_TAGS" in f ? S({}, f.FORBID_TAGS) : {}),
              (fr = "FORBID_ATTR" in f ? S({}, f.FORBID_ATTR) : {}),
              (tt = "USE_PROFILES" in f ? f.USE_PROFILES : !1),
              (Nn = f.ALLOW_ARIA_ATTR !== !1),
              (ur = f.ALLOW_DATA_ATTR !== !1),
              (Cn = f.ALLOW_UNKNOWN_PROTOCOLS || !1),
              (Qe = f.SAFE_FOR_TEMPLATES || !1),
              (qe = f.WHOLE_DOCUMENT || !1),
              (et = f.RETURN_DOM || !1),
              (It = f.RETURN_DOM_FRAGMENT || !1),
              (Ft = f.RETURN_TRUSTED_TYPE || !1),
              (dr = f.FORCE_BODY || !1),
              (Dn = f.SANITIZE_DOM !== !1),
              (hr = f.KEEP_CONTENT !== !1),
              (gt = f.IN_PLACE || !1),
              (cr = f.ALLOWED_URI_REGEXP || cr),
              (jt = f.NAMESPACE || Me),
              f.CUSTOM_ELEMENT_HANDLING &&
                Pn(f.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                (J.tagNameCheck = f.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
              f.CUSTOM_ELEMENT_HANDLING &&
                Pn(f.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                (J.attributeNameCheck =
                  f.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
              f.CUSTOM_ELEMENT_HANDLING &&
                typeof f.CUSTOM_ELEMENT_HANDLING
                  .allowCustomizedBuiltInElements == "boolean" &&
                (J.allowCustomizedBuiltInElements =
                  f.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
              (nt =
                ks.indexOf(f.PARSER_MEDIA_TYPE) === -1
                  ? (nt = ws)
                  : (nt = f.PARSER_MEDIA_TYPE)),
              (Ue =
                nt === "application/xhtml+xml"
                  ? function (d) {
                      return d;
                    }
                  : M),
              Qe && (ur = !1),
              It && (et = !0),
              tt &&
                ((X = S({}, [].concat(fe(Ee)))),
                ($ = []),
                tt.html === !0 && (S(X, je), S($, Rt)),
                tt.svg === !0 && (S(X, he), S($, dt), S($, W)),
                tt.svgFilters === !0 && (S(X, Ve), S($, dt), S($, W)),
                tt.mathMl === !0 && (S(X, Re), S($, xt), S($, W))),
              f.ADD_TAGS && (X === On && (X = be(X)), S(X, f.ADD_TAGS)),
              f.ADD_ATTR && ($ === Sn && ($ = be($)), S($, f.ADD_ATTR)),
              f.ADD_URI_SAFE_ATTR && S(pr, f.ADD_URI_SAFE_ATTR),
              f.FORBID_CONTENTS &&
                (rt === Rn && (rt = be(rt)), S(rt, f.FORBID_CONTENTS)),
              hr && (X["#text"] = !0),
              qe && S(X, ["html", "head", "body"]),
              X.table && (S(X, ["tbody"]), delete pt.tbody),
              i && i(f),
              (ot = f));
          },
          In = S({}, ["mi", "mo", "mn", "ms", "mtext"]),
          Fn = S({}, ["foreignobject", "desc", "title", "annotation-xml"]),
          zt = S({}, he);
        S(zt, Ve), S(zt, V);
        var yr = S({}, Re);
        S(yr, Te);
        var Es = function (f) {
            var d = or(f);
            (!d || !d.tagName) &&
              (d = { namespaceURI: Me, tagName: "template" });
            var y = M(f.tagName),
              z = M(d.tagName);
            if (f.namespaceURI === _r)
              return d.namespaceURI === Me
                ? y === "svg"
                : d.namespaceURI === gr
                ? y === "svg" && (z === "annotation-xml" || In[z])
                : Boolean(zt[y]);
            if (f.namespaceURI === gr)
              return d.namespaceURI === Me
                ? y === "math"
                : d.namespaceURI === _r
                ? y === "math" && Fn[z]
                : Boolean(yr[y]);
            if (f.namespaceURI === Me) {
              if (
                (d.namespaceURI === _r && !Fn[z]) ||
                (d.namespaceURI === gr && !In[z])
              )
                return !1;
              var Q = S({}, ["title", "style", "font", "a", "script"]);
              return !yr[y] && (Q[y] || !zt[y]);
            }
            return !1;
          },
          Se = function (f) {
            O(h.removed, { element: f });
            try {
              f.parentNode.removeChild(f);
            } catch (d) {
              try {
                f.outerHTML = Tn;
              } catch (y) {
                f.remove();
              }
            }
          },
          jn = function (f, d) {
            try {
              O(h.removed, { attribute: d.getAttributeNode(f), from: d });
            } catch (y) {
              O(h.removed, { attribute: null, from: d });
            }
            if ((d.removeAttribute(f), f === "is" && !$[f]))
              if (et || It)
                try {
                  Se(d);
                } catch (y) {}
              else
                try {
                  d.setAttribute(f, "");
                } catch (y) {}
          },
          zn = function (f) {
            var d = void 0,
              y = void 0;
            if (dr) f = "<remove></remove>" + f;
            else {
              var z = x(f, /^[\r\n\t ]+/);
              y = z && z[0];
            }
            nt === "application/xhtml+xml" &&
              (f =
                '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
                f +
                "</body></html>");
            var Q = Le ? Le.createHTML(f) : f;
            if (jt === Me)
              try {
                d = new cs().parseFromString(Q, nt);
              } catch (Z) {}
            if (!d || !d.documentElement) {
              d = sr.createDocument(jt, "template", null);
              try {
                d.documentElement.innerHTML = br ? "" : Q;
              } catch (Z) {}
            }
            var q = d.body || d.documentElement;
            return (
              f &&
                y &&
                q.insertBefore(P.createTextNode(y), q.childNodes[0] || null),
              jt === Me
                ? gs.call(d, qe ? "html" : "body")[0]
                : qe
                ? d.documentElement
                : q
            );
          },
          Un = function (f) {
            return hs.call(
              f.ownerDocument || f,
              f,
              ze.SHOW_ELEMENT | ze.SHOW_COMMENT | ze.SHOW_TEXT,
              null,
              !1,
            );
          },
          As = function (f) {
            return (
              f instanceof ls &&
              (typeof f.nodeName != "string" ||
                typeof f.textContent != "string" ||
                typeof f.removeChild != "function" ||
                !(f.attributes instanceof ht) ||
                typeof f.removeAttribute != "function" ||
                typeof f.setAttribute != "function" ||
                typeof f.namespaceURI != "string" ||
                typeof f.insertBefore != "function")
            );
          },
          _t = function (f) {
            return (typeof xe == "undefined" ? "undefined" : Oe(xe)) ===
              "object"
              ? f instanceof xe
              : f &&
                  (typeof f == "undefined" ? "undefined" : Oe(f)) ===
                    "object" &&
                  typeof f.nodeType == "number" &&
                  typeof f.nodeName == "string";
          },
          Ne = function (f, d, y) {
            !ye[f] ||
              T(ye[f], function (z) {
                z.call(h, d, y, ot);
              });
          },
          Hn = function (f) {
            var d = void 0;
            if (
              (Ne("beforeSanitizeElements", f, null),
              As(f) || x(f.nodeName, /[\u0080-\uFFFF]/))
            )
              return Se(f), !0;
            var y = Ue(f.nodeName);
            if (
              (Ne("uponSanitizeElement", f, { tagName: y, allowedTags: X }),
              (!_t(f.firstElementChild) &&
                (!_t(f.content) || !_t(f.content.firstElementChild)) &&
                k(/<[/\w]/g, f.innerHTML) &&
                k(/<[/\w]/g, f.textContent)) ||
                (y === "select" && k(/<template/i, f.innerHTML)))
            )
              return Se(f), !0;
            if (!X[y] || pt[y]) {
              if (hr && !rt[y]) {
                var z = or(f) || f.parentNode,
                  Q = ds(f) || f.childNodes;
                if (Q && z)
                  for (var q = Q.length, Z = q - 1; Z >= 0; --Z)
                    z.insertBefore(us(Q[Z], !0), ms(f));
              }
              return !pt[y] &&
                Gn(y) &&
                ((J.tagNameCheck instanceof RegExp && k(J.tagNameCheck, y)) ||
                  (J.tagNameCheck instanceof Function && J.tagNameCheck(y)))
                ? !1
                : (Se(f), !0);
            }
            return (f instanceof Ze && !Es(f)) ||
              ((y === "noscript" || y === "noembed") &&
                k(/<\/no(script|embed)/i, f.innerHTML))
              ? (Se(f), !0)
              : (Qe &&
                  f.nodeType === 3 &&
                  ((d = f.textContent),
                  (d = F(d, ir, " ")),
                  (d = F(d, lr, " ")),
                  f.textContent !== d &&
                    (O(h.removed, { element: f.cloneNode() }),
                    (f.textContent = d))),
                Ne("afterSanitizeElements", f, null),
                !1);
          },
          Bn = function (f, d, y) {
            if (Dn && (d === "id" || d === "name") && (y in P || y in Ts))
              return !1;
            if (!(ur && !fr[d] && k(bs, d))) {
              if (!(Nn && k(vs, d))) {
                if (!$[d] || fr[d]) {
                  if (
                    !(
                      (Gn(f) &&
                        ((J.tagNameCheck instanceof RegExp &&
                          k(J.tagNameCheck, f)) ||
                          (J.tagNameCheck instanceof Function &&
                            J.tagNameCheck(f))) &&
                        ((J.attributeNameCheck instanceof RegExp &&
                          k(J.attributeNameCheck, d)) ||
                          (J.attributeNameCheck instanceof Function &&
                            J.attributeNameCheck(d)))) ||
                      (d === "is" &&
                        J.allowCustomizedBuiltInElements &&
                        ((J.tagNameCheck instanceof RegExp &&
                          k(J.tagNameCheck, y)) ||
                          (J.tagNameCheck instanceof Function &&
                            J.tagNameCheck(y))))
                    )
                  )
                    return !1;
                } else if (!pr[d]) {
                  if (!k(cr, F(y, An, ""))) {
                    if (
                      !(
                        (d === "src" || d === "xlink:href" || d === "href") &&
                        f !== "script" &&
                        U(y, "data:") === 0 &&
                        xn[f]
                      )
                    ) {
                      if (!(Cn && !k(ys, F(y, An, "")))) {
                        if (y) return !1;
                      }
                    }
                  }
                }
              }
            }
            return !0;
          },
          Gn = function (f) {
            return f.indexOf("-") > 0;
          },
          Wn = function (f) {
            var d = void 0,
              y = void 0,
              z = void 0,
              Q = void 0;
            Ne("beforeSanitizeAttributes", f, null);
            var q = f.attributes;
            if (!!q) {
              var Z = {
                attrName: "",
                attrValue: "",
                keepAttr: !0,
                allowedAttributes: $,
              };
              for (Q = q.length; Q--; ) {
                d = q[Q];
                var Ut = d,
                  me = Ut.name,
                  Jn = Ut.namespaceURI;
                if (
                  ((y = v(d.value)),
                  (z = Ue(me)),
                  (Z.attrName = z),
                  (Z.attrValue = y),
                  (Z.keepAttr = !0),
                  (Z.forceKeepAttr = void 0),
                  Ne("uponSanitizeAttribute", f, Z),
                  (y = Z.attrValue),
                  !Z.forceKeepAttr && (jn(me, f), !!Z.keepAttr))
                ) {
                  if (k(/\/>/i, y)) {
                    jn(me, f);
                    continue;
                  }
                  Qe && ((y = F(y, ir, " ")), (y = F(y, lr, " ")));
                  var Ss = Ue(f.nodeName);
                  if (!!Bn(Ss, z, y))
                    try {
                      Jn ? f.setAttributeNS(Jn, me, y) : f.setAttribute(me, y),
                        L(h.removed);
                    } catch (Ns) {}
                }
              }
              Ne("afterSanitizeAttributes", f, null);
            }
          },
          Os = function E(f) {
            var d = void 0,
              y = Un(f);
            for (Ne("beforeSanitizeShadowDOM", f, null); (d = y.nextNode()); )
              Ne("uponSanitizeShadowNode", d, null),
                !Hn(d) && (d.content instanceof j && E(d.content), Wn(d));
            Ne("afterSanitizeShadowDOM", f, null);
          };
        return (
          (h.sanitize = function (E, f) {
            var d = void 0,
              y = void 0,
              z = void 0,
              Q = void 0,
              q = void 0;
            if (
              ((br = !E), br && (E = "<!-->"), typeof E != "string" && !_t(E))
            ) {
              if (typeof E.toString != "function")
                throw H("toString is not a function");
              if (((E = E.toString()), typeof E != "string"))
                throw H("dirty is not a string, aborting");
            }
            if (!h.isSupported) {
              if (
                Oe(m.toStaticHTML) === "object" ||
                typeof m.toStaticHTML == "function"
              ) {
                if (typeof E == "string") return m.toStaticHTML(E);
                if (_t(E)) return m.toStaticHTML(E.outerHTML);
              }
              return E;
            }
            if (
              (mr || vr(f),
              (h.removed = []),
              typeof E == "string" && (gt = !1),
              gt)
            ) {
              if (E.nodeName) {
                var Z = Ue(E.nodeName);
                if (!X[Z] || pt[Z])
                  throw H(
                    "root node is forbidden and cannot be sanitized in-place",
                  );
              }
            } else if (E instanceof xe)
              (d = zn("<!---->")),
                (y = d.ownerDocument.importNode(E, !0)),
                (y.nodeType === 1 && y.nodeName === "BODY") ||
                y.nodeName === "HTML"
                  ? (d = y)
                  : d.appendChild(y);
            else {
              if (!et && !Qe && !qe && E.indexOf("<") === -1)
                return Le && Ft ? Le.createHTML(E) : E;
              if (((d = zn(E)), !d)) return et ? null : Ft ? Tn : "";
            }
            d && dr && Se(d.firstChild);
            for (var Ut = Un(gt ? E : d); (z = Ut.nextNode()); )
              (z.nodeType === 3 && z === Q) ||
                Hn(z) ||
                (z.content instanceof j && Os(z.content), Wn(z), (Q = z));
            if (((Q = null), gt)) return E;
            if (et) {
              if (It)
                for (q = ps.call(d.ownerDocument); d.firstChild; )
                  q.appendChild(d.firstChild);
              else q = d;
              return $.shadowroot && (q = _s.call(C, q, !0)), q;
            }
            var me = qe ? d.outerHTML : d.innerHTML;
            return (
              Qe && ((me = F(me, ir, " ")), (me = F(me, lr, " "))),
              Le && Ft ? Le.createHTML(me) : me
            );
          }),
          (h.setConfig = function (E) {
            vr(E), (mr = !0);
          }),
          (h.clearConfig = function () {
            (ot = null), (mr = !1);
          }),
          (h.isValidAttribute = function (E, f, d) {
            ot || vr({});
            var y = Ue(E),
              z = Ue(f);
            return Bn(y, z, d);
          }),
          (h.addHook = function (E, f) {
            typeof f == "function" && ((ye[E] = ye[E] || []), O(ye[E], f));
          }),
          (h.removeHook = function (E) {
            ye[E] && L(ye[E]);
          }),
          (h.removeHooks = function (E) {
            ye[E] && (ye[E] = []);
          }),
          (h.removeAllHooks = function () {
            ye = {};
          }),
          h
        );
      }
      var w = Lt();
      return w;
    });
  });
  function xa(t) {
    let e,
      r,
      n = [
        { width: "13" },
        { height: "13" },
        { viewBox: "0 0 13 13" },
        { xmlns: "http://www.w3.org/2000/svg" },
        t[0],
      ],
      o = {};
    for (let a = 0; a < n.length; a += 1) o = Ce(o, n[a]);
    return {
      c() {
        (e = st("svg")), (r = st("path")), this.h();
      },
      l(a) {
        e = Tt(a, "svg", { width: !0, height: !0, viewBox: !0, xmlns: !0 });
        var s = it(e);
        (r = Tt(s, "path", { d: !0, fill: !0 })),
          it(r).forEach(A),
          s.forEach(A),
          this.h();
      },
      h() {
        I(
          r,
          "d",
          "M0.460449 12.1807L13.0001 6.50003L0.460449 0.819336V5.23765L9.41731 6.50003L0.460449 7.76241V12.1807Z",
        ),
          I(r, "fill", "white"),
          wt(e, o);
      },
      m(a, s) {
        Ar(a, e, s), Gt(e, r);
      },
      p(a, [s]) {
        wt(
          e,
          (o = Nr(n, [
            { width: "13" },
            { height: "13" },
            { viewBox: "0 0 13 13" },
            { xmlns: "http://www.w3.org/2000/svg" },
            s & 1 && a[0],
          ])),
        );
      },
      i: g,
      o: g,
      d(a) {
        a && A(e);
      },
    };
  }
  function La(t, e, r) {
    return (
      (t.$$set = (n) => {
        r(0, (e = Ce(Ce({}, e), Be(n))));
      }),
      (e = Be(e)),
      [e]
    );
  }
  class Ma extends Dr {
    constructor(e) {
      super();
      Je(this, e, La, xa, He, {});
    }
  }
  function Pa(t) {
    let e,
      r,
      n = [
        { width: "12" },
        { height: "12" },
        { viewBox: "0 0 12 12" },
        { xmlns: "http://www.w3.org/2000/svg" },
        t[0],
      ],
      o = {};
    for (let a = 0; a < n.length; a += 1) o = Ce(o, n[a]);
    return {
      c() {
        (e = st("svg")), (r = st("path")), this.h();
      },
      l(a) {
        e = Tt(a, "svg", { width: !0, height: !0, viewBox: !0, xmlns: !0 });
        var s = it(e);
        (r = Tt(s, "path", { d: !0, fill: !0 })),
          it(r).forEach(A),
          s.forEach(A),
          this.h();
      },
      h() {
        I(
          r,
          "d",
          "M1.49229 3.49889C1.24729 3.74389 1.24729 4.13889 1.49229 4.38389L5.64729 8.53889C5.84229 8.73389 6.15729 8.73389 6.35229 8.53889L10.5073 4.38389C10.7523 4.13889 10.7523 3.74389 10.5073 3.49889C10.2623 3.25389 9.86729 3.25389 9.62229 3.49889L5.99729 7.11889L2.37229 3.49389C2.13229 3.25389 1.73229 3.25389 1.49229 3.49889Z",
        ),
          I(r, "fill", "#636671"),
          wt(e, o);
      },
      m(a, s) {
        Ar(a, e, s), Gt(e, r);
      },
      p(a, [s]) {
        wt(
          e,
          (o = Nr(n, [
            { width: "12" },
            { height: "12" },
            { viewBox: "0 0 12 12" },
            { xmlns: "http://www.w3.org/2000/svg" },
            s & 1 && a[0],
          ])),
        );
      },
      i: g,
      o: g,
      d(a) {
        a && A(e);
      },
    };
  }
  function Ia(t, e, r) {
    return (
      (t.$$set = (n) => {
        r(0, (e = Ce(Ce({}, e), Be(n))));
      }),
      (e = Be(e)),
      [e]
    );
  }
  class Fa extends Dr {
    constructor(e) {
      super();
      Je(this, e, Ia, Pa, He, {});
    }
  }
  function an(t, e, r) {
    const n = t.slice();
    return (n[51] = e[r]), (n[53] = r), n;
  }
  function sn(t, e, r) {
    const n = t.slice();
    return (n[57] = e[r]), n;
  }
  function ln(t, e, r) {
    const n = t.slice();
    return (n[57] = e[r]), n;
  }
  function cn(t) {
    let e, r;
    return {
      c() {
        (e = R("nylas-message-error")),
          ie(e, "error_message", (r = t[5][t[0]].message));
      },
      m(n, o) {
        N(n, e, o);
      },
      p(n, o) {
        o[0] & 33 &&
          r !== (r = n[5][n[0]].message) &&
          ie(e, "error_message", r);
      },
      d(n) {
        n && A(e);
      },
    };
  }
  function ja(t) {
    let e, r;
    return {
      c() {
        (e = R("nylas-message-error")),
          ie(e, "error_message", (r = t[62].message));
      },
      m(n, o) {
        N(n, e, o);
      },
      p(n, o) {
        o[0] & 8 && r !== (r = n[62].message) && ie(e, "error_message", r);
      },
      i: g,
      o: g,
      d(n) {
        n && A(e);
      },
    };
  }
  function za(t) {
    let e,
      r,
      n,
      o,
      a,
      s,
      l,
      i,
      c,
      u,
      p,
      b,
      _ = t[10].to.length && fn(t),
      T = (t[10].to.length > 1 || t[10].cc.length) && un(t),
      L = t[13] && mn(t),
      O = t[10].to.length && pn(t),
      M = t[10].cc.length && gn(t),
      x = t[2],
      F = [];
    for (let v = 0; v < x.length; v += 1) F[v] = _n(an(t, x, v));
    let U = t[1].show_reply && bn(t);
    return {
      c() {
        (e = R("header")),
          _ && _.c(),
          (r = Y()),
          T && T.c(),
          (n = Y()),
          L && L.c(),
          (o = Y()),
          (a = R("header")),
          O && O.c(),
          (s = Y()),
          M && M.c(),
          (l = Y()),
          (i = R("div"));
        for (let v = 0; v < F.length; v += 1) F[v].c();
        (u = Y()),
          U && U.c(),
          (p = Ge()),
          I(e, "class", "mobile"),
          ne(e, "loading", t[8] === "loading"),
          ne(e, "error", t[14]),
          ne(e, "expanded", t[13]),
          I(a, "class", "tablet"),
          ne(a, "error", t[14]),
          ne(a, "loading", t[8] === "loading"),
          I(i, "class", (c = "messages " + t[1].theme)),
          ne(i, "dont-show-avatars", !t[1].show_avatars);
      },
      m(v, k) {
        N(v, e, k),
          _ && _.m(e, null),
          D(e, r),
          T && T.m(e, null),
          D(e, n),
          L && L.m(e, null),
          N(v, o, k),
          N(v, a, k),
          O && O.m(a, null),
          D(a, s),
          M && M.m(a, null),
          N(v, l, k),
          N(v, i, k);
        for (let H = 0; H < F.length; H += 1) F[H].m(i, null);
        N(v, u, k), U && U.m(v, k), N(v, p, k), (b = !0);
      },
      p(v, k) {
        if (
          (v[10].to.length
            ? _
              ? _.p(v, k)
              : ((_ = fn(v)), _.c(), _.m(e, r))
            : _ && (_.d(1), (_ = null)),
          v[10].to.length > 1 || v[10].cc.length
            ? T
              ? (T.p(v, k), k[0] & 1024 && ae(T, 1))
              : ((T = un(v)), T.c(), ae(T, 1), T.m(e, n))
            : T &&
              (Nt(),
              pe(T, 1, 1, () => {
                T = null;
              }),
              Ct()),
          v[13]
            ? L
              ? L.p(v, k)
              : ((L = mn(v)), L.c(), L.m(e, null))
            : L && (L.d(1), (L = null)),
          k[0] & 256 && ne(e, "loading", v[8] === "loading"),
          k[0] & 16384 && ne(e, "error", v[14]),
          k[0] & 8192 && ne(e, "expanded", v[13]),
          v[10].to.length
            ? O
              ? O.p(v, k)
              : ((O = pn(v)), O.c(), O.m(a, s))
            : O && (O.d(1), (O = null)),
          v[10].cc.length
            ? M
              ? M.p(v, k)
              : ((M = gn(v)), M.c(), M.m(a, null))
            : M && (M.d(1), (M = null)),
          k[0] & 16384 && ne(a, "error", v[14]),
          k[0] & 256 && ne(a, "loading", v[8] === "loading"),
          k[0] & 598)
        ) {
          x = v[2];
          let H;
          for (H = 0; H < x.length; H += 1) {
            const K = an(v, x, H);
            F[H] ? F[H].p(K, k) : ((F[H] = _n(K)), F[H].c(), F[H].m(i, null));
          }
          for (; H < F.length; H += 1) F[H].d(1);
          F.length = x.length;
        }
        (!b || (k[0] & 2 && c !== (c = "messages " + v[1].theme))) &&
          I(i, "class", c),
          k[0] & 2 && ne(i, "dont-show-avatars", !v[1].show_avatars),
          v[1].show_reply
            ? U
              ? (U.p(v, k), k[0] & 2 && ae(U, 1))
              : ((U = bn(v)), U.c(), ae(U, 1), U.m(p.parentNode, p))
            : U &&
              (Nt(),
              pe(U, 1, 1, () => {
                U = null;
              }),
              Ct());
      },
      i(v) {
        b || (ae(T), ae(U), (b = !0));
      },
      o(v) {
        pe(T), pe(U), (b = !1);
      },
      d(v) {
        v && A(e),
          _ && _.d(),
          T && T.d(),
          L && L.d(),
          v && A(o),
          v && A(a),
          O && O.d(),
          M && M.d(),
          v && A(l),
          v && A(i),
          Wt(F, v),
          v && A(u),
          U && U.d(v),
          v && A(p);
      },
    };
  }
  function fn(t) {
    let e,
      r,
      n = t[10].to[0].email + "",
      o;
    return {
      c() {
        (e = R("span")), (r = B("to: ")), (o = B(n));
      },
      m(a, s) {
        N(a, e, s), D(e, r), D(e, o);
      },
      p(a, s) {
        s[0] & 1024 && n !== (n = a[10].to[0].email + "") && le(o, n);
      },
      d(a) {
        a && A(e);
      },
    };
  }
  function un(t) {
    let e, r, n, o, a;
    return (
      (r = new Fa({ props: { "aria-hidden": "true" } })),
      {
        c() {
          (e = R("button")),
            Cr(r.$$.fragment),
            I(
              e,
              "aria-label",
              "Toggle showing additional emails in this thread",
            );
        },
        m(s, l) {
          N(s, e, l),
            Xt(r, e, null),
            (n = !0),
            o || ((a = kt(e, "click", t[34])), (o = !0));
        },
        p: g,
        i(s) {
          n || (ae(r.$$.fragment, s), (n = !0));
        },
        o(s) {
          pe(r.$$.fragment, s), (n = !1);
        },
        d(s) {
          s && A(e), Dt(r), (o = !1), a();
        },
      }
    );
  }
  function mn(t) {
    let e,
      r,
      n = t[10].to.slice(1),
      o = [];
    for (let l = 0; l < n.length; l += 1) o[l] = dn(ln(t, n, l));
    let a = t[10].cc,
      s = [];
    for (let l = 0; l < a.length; l += 1) s[l] = hn(sn(t, a, l));
    return {
      c() {
        for (let l = 0; l < o.length; l += 1) o[l].c();
        e = Y();
        for (let l = 0; l < s.length; l += 1) s[l].c();
        r = Ge();
      },
      m(l, i) {
        for (let c = 0; c < o.length; c += 1) o[c].m(l, i);
        N(l, e, i);
        for (let c = 0; c < s.length; c += 1) s[c].m(l, i);
        N(l, r, i);
      },
      p(l, i) {
        if (i[0] & 1024) {
          n = l[10].to.slice(1);
          let c;
          for (c = 0; c < n.length; c += 1) {
            const u = ln(l, n, c);
            o[c]
              ? o[c].p(u, i)
              : ((o[c] = dn(u)), o[c].c(), o[c].m(e.parentNode, e));
          }
          for (; c < o.length; c += 1) o[c].d(1);
          o.length = n.length;
        }
        if (i[0] & 1024) {
          a = l[10].cc;
          let c;
          for (c = 0; c < a.length; c += 1) {
            const u = sn(l, a, c);
            s[c]
              ? s[c].p(u, i)
              : ((s[c] = hn(u)), s[c].c(), s[c].m(r.parentNode, r));
          }
          for (; c < s.length; c += 1) s[c].d(1);
          s.length = a.length;
        }
      },
      d(l) {
        Wt(o, l), l && A(e), Wt(s, l), l && A(r);
      },
    };
  }
  function dn(t) {
    let e,
      r,
      n = t[57].email + "",
      o;
    return {
      c() {
        (e = R("span")), (r = B("to: ")), (o = B(n));
      },
      m(a, s) {
        N(a, e, s), D(e, r), D(e, o);
      },
      p(a, s) {
        s[0] & 1024 && n !== (n = a[57].email + "") && le(o, n);
      },
      d(a) {
        a && A(e);
      },
    };
  }
  function hn(t) {
    let e,
      r,
      n = t[57].email + "",
      o;
    return {
      c() {
        (e = R("span")), (r = B("cc: ")), (o = B(n));
      },
      m(a, s) {
        N(a, e, s), D(e, r), D(e, o);
      },
      p(a, s) {
        s[0] & 1024 && n !== (n = a[57].email + "") && le(o, n);
      },
      d(a) {
        a && A(e);
      },
    };
  }
  function pn(t) {
    let e,
      r,
      n = t[10].to.map(vn).join(", ") + "",
      o;
    return {
      c() {
        (e = R("span")), (r = B("to: ")), (o = B(n));
      },
      m(a, s) {
        N(a, e, s), D(e, r), D(e, o);
      },
      p(a, s) {
        s[0] & 1024 && n !== (n = a[10].to.map(vn).join(", ") + "") && le(o, n);
      },
      d(a) {
        a && A(e);
      },
    };
  }
  function gn(t) {
    let e,
      r,
      n = t[10].cc.map(yn).join(", ") + "",
      o;
    return {
      c() {
        (e = R("span")), (r = B("cc: ")), (o = B(n));
      },
      m(a, s) {
        N(a, e, s), D(e, r), D(e, o);
      },
      p(a, s) {
        s[0] & 1024 && n !== (n = a[10].cc.map(yn).join(", ") + "") && le(o, n);
      },
      d(a) {
        a && A(e);
      },
    };
  }
  function Ua(t) {
    return { c: g, m: g, p: g, d: g };
  }
  function Ha(t) {
    let e,
      r,
      n = {
        ctx: t,
        current: null,
        token: null,
        hasCatch: !1,
        pending: es,
        then: Ga,
        catch: Ba,
        value: 55,
      };
    return (
      ge((e = t[54].email === t[1].you.email_address), n),
      {
        c() {
          n.block.c(), (r = Y());
        },
        m(o, a) {
          n.block.m(o, (n.anchor = a)),
            (n.mount = () => r.parentNode),
            (n.anchor = r),
            N(o, r, a);
        },
        p(o, a) {
          (t = o),
            (n.ctx = t),
            (a[0] & 6 &&
              e !== (e = t[54].email === t[1].you.email_address) &&
              ge(e, n)) ||
              ut(n, t, a);
        },
        d(o) {
          n.block.d(o), (n.token = null), (n = null), o && A(r);
        },
      }
    );
  }
  function Ba(t) {
    return { c: g, m: g, p: g, d: g };
  }
  function Ga(t) {
    let e, r;
    function n(...a) {
      return t[35](t[54], ...a);
    }
    let o = {
      ctx: t,
      current: null,
      token: null,
      hasCatch: !1,
      pending: qa,
      then: Ja,
      catch: Wa,
      value: 56,
    };
    return (
      ge((r = t[6].findIndex(n)), o),
      {
        c() {
          (e = Ge()), o.block.c();
        },
        m(a, s) {
          N(a, e, s),
            o.block.m(a, (o.anchor = s)),
            (o.mount = () => e.parentNode),
            (o.anchor = e);
        },
        p(a, s) {
          (t = a),
            (o.ctx = t),
            (s[0] & 68 && r !== (r = t[6].findIndex(n)) && ge(r, o)) ||
              ut(o, t, s);
        },
        d(a) {
          a && A(e), o.block.d(a), (o.token = null), (o = null);
        },
      }
    );
  }
  function Wa(t) {
    return { c: g, m: g, p: g, d: g };
  }
  function Ja(t) {
    let e,
      r,
      n,
      o,
      a,
      s,
      l,
      i,
      c,
      u = nn(new Date(t[51].date * 1e3)) + "",
      p,
      b,
      _ = {
        ctx: t,
        current: null,
        token: null,
        hasCatch: !1,
        pending: Va,
        then: Ka,
        catch: Ya,
        value: 57,
      };
    ge((n = t[4][t[54].email]), _);
    function T(M, x) {
      return (
        x[0] & 4 && (s = null),
        x[0] & 4 && (l = null),
        M[51].conversation
          ? Qa
          : (s == null &&
              (s = !!(
                M[51].hasOwnProperty("conversation") && !M[51].conversation
              )),
            s
              ? Za
              : (l == null && (l = !!M[51].snippet.includes(" On ")),
                l ? $a : Xa))
      );
    }
    let L = T(t, [-1, -1, -1]),
      O = L(t);
    return {
      c() {
        (e = R("article")),
          (r = R("div")),
          _.block.c(),
          (o = Y()),
          (a = R("div")),
          O.c(),
          (i = Y()),
          (c = R("div")),
          (p = B(u)),
          I(r, "class", "contact"),
          I(a, "class", "body"),
          I(c, "class", "time"),
          I(e, "class", (b = "message member-" + (t[56] + 1))),
          ne(e, "you", t[55]);
      },
      m(M, x) {
        N(M, e, x),
          D(e, r),
          _.block.m(r, (_.anchor = null)),
          (_.mount = () => r),
          (_.anchor = null),
          D(e, o),
          D(e, a),
          O.m(a, null),
          D(e, i),
          D(e, c),
          D(c, p);
      },
      p(M, x) {
        (t = M),
          (_.ctx = t),
          (x[0] & 20 && n !== (n = t[4][t[54].email]) && ge(n, _)) ||
            ut(_, t, x),
          L === (L = T(t, x)) && O
            ? O.p(t, x)
            : (O.d(1), (O = L(t)), O && (O.c(), O.m(a, null))),
          x[0] & 4 &&
            u !== (u = nn(new Date(t[51].date * 1e3)) + "") &&
            le(p, u),
          x[0] & 68 &&
            b !== (b = "message member-" + (t[56] + 1)) &&
            I(e, "class", b),
          x[0] & 70 && ne(e, "you", t[55]);
      },
      d(M) {
        M && A(e), _.block.d(), (_.token = null), (_ = null), O.d();
      },
    };
  }
  function Ya(t) {
    return { c: g, m: g, p: g, d: g };
  }
  function Ka(t) {
    let e, r, n;
    return {
      c() {
        (e = R("div")),
          (r = R("nylas-contact-image")),
          ie(r, "contact_query", t[9]),
          ie(r, "contact", (n = t[57])),
          ie(r, "height", "32px"),
          ie(r, "width", "32px"),
          I(e, "class", "avatar");
      },
      m(o, a) {
        N(o, e, a), D(e, r);
      },
      p(o, a) {
        a[0] & 512 && ie(r, "contact_query", o[9]),
          a[0] & 20 && n !== (n = o[57]) && ie(r, "contact", n);
      },
      d(o) {
        o && A(e);
      },
    };
  }
  function Va(t) {
    return { c: g, m: g, p: g, d: g };
  }
  function Xa(t) {
    let e,
      r = t[51].snippet + "",
      n;
    return {
      c() {
        (e = R("p")), (n = B(r));
      },
      m(o, a) {
        N(o, e, a), D(e, n);
      },
      p(o, a) {
        a[0] & 4 && r !== (r = o[51].snippet + "") && le(n, r);
      },
      d(o) {
        o && A(e);
      },
    };
  }
  function $a(t) {
    let e,
      r = t[51].snippet.split("On ")[0] + "",
      n,
      o,
      a,
      s,
      l = t[51].snippet.split("On ")[1] + "",
      i;
    return {
      c() {
        (e = R("p")),
          (n = B(r)),
          (o = Y()),
          (a = R("p")),
          (s = B("On ")),
          (i = B(l)),
          I(a, "class", "after");
      },
      m(c, u) {
        N(c, e, u), D(e, n), N(c, o, u), N(c, a, u), D(a, s), D(a, i);
      },
      p(c, u) {
        u[0] & 4 && r !== (r = c[51].snippet.split("On ")[0] + "") && le(n, r),
          u[0] & 4 &&
            l !== (l = c[51].snippet.split("On ")[1] + "") &&
            le(i, l);
      },
      d(c) {
        c && A(e), c && A(o), c && A(a);
      },
    };
  }
  function Za(t) {
    let e,
      r = on.sanitize(t[51].body) + "";
    return {
      c() {
        e = R("p");
      },
      m(n, o) {
        N(n, e, o), (e.innerHTML = r);
      },
      p(n, o) {
        o[0] & 4 &&
          r !== (r = on.sanitize(n[51].body) + "") &&
          (e.innerHTML = r);
      },
      d(n) {
        n && A(e);
      },
    };
  }
  function Qa(t) {
    let e,
      r = t[51].conversation + "",
      n;
    return {
      c() {
        (e = R("p")), (n = B(r));
      },
      m(o, a) {
        N(o, e, a), D(e, n);
      },
      p(o, a) {
        a[0] & 4 && r !== (r = o[51].conversation + "") && le(n, r);
      },
      d(o) {
        o && A(e);
      },
    };
  }
  function qa(t) {
    return { c: g, m: g, p: g, d: g };
  }
  function es(t) {
    return { c: g, m: g, p: g, d: g };
  }
  function ts(t) {
    return { c: g, m: g, p: g, d: g };
  }
  function _n(t) {
    let e,
      r,
      n = {
        ctx: t,
        current: null,
        token: null,
        hasCatch: !1,
        pending: ts,
        then: Ha,
        catch: Ua,
        value: 54,
      };
    return (
      ge((r = t[51].from[0]), n),
      {
        c() {
          (e = Ge()), n.block.c();
        },
        m(o, a) {
          N(o, e, a),
            n.block.m(o, (n.anchor = a)),
            (n.mount = () => e.parentNode),
            (n.anchor = e);
        },
        p(o, a) {
          (t = o),
            (n.ctx = t),
            (a[0] & 4 && r !== (r = t[51].from[0]) && ge(r, n)) || ut(n, t, a);
        },
        d(o) {
          o && A(e), n.block.d(o), (n.token = null), (n = null);
        },
      }
    );
  }
  function bn(t) {
    let e, r, n, o, a, s, l, i, c, u, p, b, _, T;
    const L = [ns, rs],
      O = [];
    function M(x, F) {
      return x[12] === "sending" ? 0 : 1;
    }
    return (
      (i = M(t)),
      (c = O[i] = L[i](t)),
      {
        c() {
          (e = R("div")),
            (r = R("form")),
            (n = R("label")),
            (n.textContent = "Type and send a response"),
            (o = Y()),
            (a = R("input")),
            (s = Y()),
            (l = R("button")),
            c.c(),
            I(n, "for", "send-response"),
            I(n, "class", "sr-only"),
            I(a, "id", "send-response"),
            I(a, "type", "text"),
            I(a, "placeholder", "Type a Response"),
            I(l, "type", "submit"),
            (l.disabled = u = !t[10].to.length),
            I(l, "aria-label", (p = `Send${t[12] ? "ing" : ""} email`)),
            I(e, "class", "reply-box");
        },
        m(x, F) {
          N(x, e, F),
            D(e, r),
            D(r, n),
            D(r, o),
            D(r, a),
            Or(a, t[11]),
            D(r, s),
            D(r, l),
            O[i].m(l, null),
            (b = !0),
            _ ||
              ((T = [kt(a, "input", t[36]), kt(r, "submit", t[15])]), (_ = !0));
        },
        p(x, F) {
          F[0] & 2048 && a.value !== x[11] && Or(a, x[11]);
          let U = i;
          (i = M(x)),
            i !== U &&
              (Nt(),
              pe(O[U], 1, 1, () => {
                O[U] = null;
              }),
              Ct(),
              (c = O[i]),
              c || ((c = O[i] = L[i](x)), c.c()),
              ae(c, 1),
              c.m(l, null)),
            (!b || (F[0] & 1024 && u !== (u = !x[10].to.length))) &&
              (l.disabled = u),
            (!b ||
              (F[0] & 4096 && p !== (p = `Send${x[12] ? "ing" : ""} email`))) &&
              I(l, "aria-label", p);
        },
        i(x) {
          b || (ae(c), (b = !0));
        },
        o(x) {
          pe(c), (b = !1);
        },
        d(x) {
          x && A(e), O[i].d(), (_ = !1), De(T);
        },
      }
    );
  }
  function rs(t) {
    let e, r;
    return (
      (e = new Ma({ props: { "aria-hidden": "true" } })),
      {
        c() {
          Cr(e.$$.fragment);
        },
        m(n, o) {
          Xt(e, n, o), (r = !0);
        },
        i(n) {
          r || (ae(e.$$.fragment, n), (r = !0));
        },
        o(n) {
          pe(e.$$.fragment, n), (r = !1);
        },
        d(n) {
          Dt(e, n);
        },
      }
    );
  }
  function ns(t) {
    let e;
    return {
      c() {
        e = B("...");
      },
      m(r, n) {
        N(r, e, n);
      },
      i: g,
      o: g,
      d(r) {
        r && A(e);
      },
    };
  }
  function os(t) {
    let e;
    return {
      c() {
        (e = R("div")), I(e, "class", "loading status");
      },
      m(r, n) {
        N(r, e, n);
      },
      p: g,
      i: g,
      o: g,
      d(r) {
        r && A(e);
      },
    };
  }
  function as(t) {
    let e,
      r,
      n,
      o,
      a,
      s,
      l = t[14] && cn(t),
      i = {
        ctx: t,
        current: null,
        token: null,
        hasCatch: !0,
        pending: os,
        then: za,
        catch: ja,
        value: 50,
        error: 62,
        blocks: [, , ,],
      };
    return (
      ge((a = t[3]), i),
      {
        c() {
          (e = R("nylas-error")),
            (r = Y()),
            (n = R("main")),
            l && l.c(),
            (o = Y()),
            i.block.c(),
            (this.c = g),
            ie(e, "id", t[0]);
        },
        m(c, u) {
          N(c, e, u),
            N(c, r, u),
            N(c, n, u),
            l && l.m(n, null),
            D(n, o),
            i.block.m(n, (i.anchor = null)),
            (i.mount = () => n),
            (i.anchor = null),
            t[37](n),
            (s = !0);
        },
        p(c, u) {
          (t = c),
            (!s || u[0] & 1) && ie(e, "id", t[0]),
            t[14]
              ? l
                ? l.p(t, u)
                : ((l = cn(t)), l.c(), l.m(n, o))
              : l && (l.d(1), (l = null)),
            (i.ctx = t),
            (u[0] & 8 && a !== (a = t[3]) && ge(a, i)) || ut(i, t, u);
        },
        i(c) {
          s || (ae(i.block), (s = !0));
        },
        o(c) {
          for (let u = 0; u < 3; u += 1) {
            const p = i.blocks[u];
            pe(p);
          }
          s = !1;
        },
        d(c) {
          c && A(e),
            c && A(r),
            c && A(n),
            l && l.d(),
            i.block.d(),
            (i.token = null),
            (i = null),
            t[37](null);
        },
      }
    );
  }
  const ss = 20,
    vn = (t) => t.email,
    yn = (t) => t.email;
  function is(t, e, r) {
    let n, o, a, s;
    vt(t, Zt, (w) => r(39, (o = w))),
      vt(t, $t, (w) => r(5, (a = w))),
      vt(t, fa, (w) => r(40, (s = w)));
    var l =
        (this && this.__awaiter) ||
        function (w, m, h, C) {
          function P(j) {
            return j instanceof h
              ? j
              : new h(function (ue) {
                  ue(j);
                });
          }
          return new (h || (h = Promise))(function (j, ue) {
            function xe(ve) {
              try {
                ze(C.next(ve));
              } catch (ht) {
                ue(ht);
              }
            }
            function Ze(ve) {
              try {
                ze(C.throw(ve));
              } catch (ht) {
                ue(ht);
              }
            }
            function ze(ve) {
              ve.done ? j(ve.value) : P(ve.value).then(xe, Ze);
            }
            ze((C = C.apply(w, m || [])).next());
          });
        },
      i,
      c,
      u,
      p,
      b;
    let { id: _ = "" } = e,
      { access_token: T = "" } = e,
      { messages: L = [] } = e,
      { show_avatars: O } = e,
      { show_reply: M } = e,
      { theme: x } = e,
      { thread_id: F } = e,
      { you: U } = e;
    const v = {
      show_avatars: !1,
      show_reply: !1,
      theme: "theme-1",
      thread_id: "",
      you: {},
    };
    let k = qt({}, {}, v),
      H = {};
    const K = ua(ct());
    let _e;
    ro(() =>
      l(void 0, void 0, void 0, function* () {
        var w;
        r(
          28,
          (H =
            (yield s[JSON.stringify({ component_id: _, access_token: T })]) ||
            {}),
        ),
          r(1, (k = qt(e, H, v))),
          _ &&
            !((w = k.you) === null || w === void 0 ? void 0 : w.id) &&
            !_e &&
            r(
              1,
              (k.you = yield Lo({
                component_id: he.component_id,
                access_token: T,
              })),
              k,
            );
      }),
    );
    let S,
      be = [],
      de,
      je = e,
      he,
      Ve,
      V = null,
      Re = "loading",
      Te = null,
      Ee;
    function Rt(w) {
      var m;
      return l(this, void 0, void 0, function* () {
        const h =
            ((m = w.messages) === null || m === void 0
              ? void 0
              : m.reduce((P, j) => {
                  const ue = j.from[0];
                  return (P[ue.email] = ue), P;
                }, {})) || {},
          C = Array.from(Object.values(h)) || [];
        for (const P of C) {
          const j = P.email;
          Te || r(4, (Te = {})), j && !Te[j] && r(4, (Te[j] = yield dt(P)), Te);
        }
      });
    }
    function dt(w) {
      var m;
      return l(this, void 0, void 0, function* () {
        if ((r(9, (Ee.query = `?email=${w.email}`), Ee), _)) {
          let h = o[JSON.stringify(Ee)];
          return (
            h || (h = yield Zt.addContact(Ee)),
            (m = h[0]) !== null && m !== void 0 ? m : w
          );
        } else return w;
      });
    }
    function xt() {
      return l(this, void 0, void 0, function* () {
        he.component_id &&
          he.thread_id &&
          (r(8, (Re = "loading")),
          r(3, (V = yield Zr.getConversation(he))),
          r(8, (Re = "loaded")));
      });
    }
    let W = { to: [], from: [], cc: [] },
      Ae = "",
      ce,
      Xe = !1,
      $e = "";
    function er() {
      return (
        Mo({
          access_token: T,
          component_id: _,
          message_id: S.slice(-ss).map((w) => w.id),
        }).then((w) => {
          w.forEach((m) => {
            let h = S.find((C) => C.id === m.id);
            h && ((h.conversation = m.conversation), (h.body = m.body));
          }),
            r(2, S),
            r(29, _e),
            r(1, k),
            r(3, V),
            r(30, je),
            r(49, e),
            r(28, H);
        }),
        !0
      );
    }
    function tr(w) {
      if (
        (w.preventDefault(),
        K("sendMessageClicked", {
          event: w,
          message: Object.assign(Object.assign({}, W), { body: Ae }),
        }),
        !V && _e)
      ) {
        r(11, (Ae = ""));
        return;
      }
      if ($e !== "sending") {
        if ((r(12, ($e = "sending")), !V)) return;
        xo(
          _,
          {
            from: W.from,
            to: W.to,
            body: Ae,
            subject: V.subject,
            cc: W.cc,
            reply_to_message_id: ce.id,
            bcc: [],
          },
          T,
        ).then((m) => {
          const h = { queryKey: Ve, data: m };
          r(3, (V = Zr.addMessageToThread(h))),
            r(12, ($e = "")),
            r(11, (Ae = ""));
        });
      }
    }
    no(() => {
      let w;
      de &&
        ((w = de.scrollHeight),
        de.scrollTo({ top: w, left: 0, behavior: "smooth" }));
    });
    let Oe = !1;
    const fe = () => r(13, (Oe = !Oe)),
      rr = (w, m) => m.email === w.email && m.name === w.name;
    function nr() {
      (Ae = this.value), r(11, Ae);
    }
    function Lt(w) {
      Jt[w ? "unshift" : "push"](() => {
        (de = w), r(7, de);
      });
    }
    return (
      (t.$$set = (w) => {
        r(49, (e = Ce(Ce({}, e), Be(w)))),
          "id" in w && r(0, (_ = w.id)),
          "access_token" in w && r(16, (T = w.access_token)),
          "messages" in w && r(17, (L = w.messages)),
          "show_avatars" in w && r(18, (O = w.show_avatars)),
          "show_reply" in w && r(19, (M = w.show_reply)),
          "theme" in w && r(20, (x = w.theme)),
          "thread_id" in w && r(21, (F = w.thread_id)),
          "you" in w && r(22, (U = w.you));
      }),
      (t.$$.update = () => {
        t.$$.dirty[0] & 268435456 && K("manifestLoaded", H),
          t.$$.dirty[0] & 32 && Object.keys(a).length && K("onError", a),
          JSON.stringify(je) !== JSON.stringify(e) &&
            (r(1, (k = qt(e, H, v))), r(30, (je = e))),
          t.$$.dirty[0] & 2 &&
            r(29, (_e = !!k.messages && k.messages.length > 0)),
          t.$$.dirty[0] & 32 && r(14, (n = !!Object.keys(a).length)),
          t.$$.dirty[0] & 536870922 &&
            r(
              2,
              (S = _e ? k.messages : (V == null ? void 0 : V.messages) || []),
            ),
          t.$$.dirty[0] & 8 &&
            r(6, (be = (V == null ? void 0 : V.participants) || [])),
          t.$$.dirty[0] & 65539 &&
            r(
              31,
              (he = {
                access_token: T,
                component_id: _,
                thread_id: k.thread_id,
              }),
            ),
          t.$$.dirty[1] & 1 && (Ve = JSON.stringify(he)),
          t.$$.dirty[0] & 536870915 &&
            (_ && k.thread_id ? xt() : _e && r(8, (Re = "loaded"))),
          t.$$.dirty[0] & 536870916 &&
            !_e &&
            S.length &&
            !S.filter((w) => w.conversation).length &&
            er(),
          t.$$.dirty[0] & 65537 &&
            r(9, (Ee = { component_id: _, access_token: T, query: "" })),
          t.$$.dirty[0] & 24 &&
            (() =>
              l(void 0, void 0, void 0, function* () {
                !Te && V && (yield Rt(V));
              }))(),
          t.$$.dirty[0] & 4 &&
            S &&
            (r(32, (ce = S[S.length - 1])), r(33, (Xe = !0))),
          (t.$$.dirty[0] & 25165826) | (t.$$.dirty[1] & 6) &&
            ce &&
            Xe &&
            (r(33, (Xe = !1)),
            (r(23, (i = k.you)) === null || i === void 0
              ? void 0
              : i.email_address) &&
              (ce.from[0].email ===
              (r(24, (c = k.you)) === null || c === void 0
                ? void 0
                : c.email_address)
                ? (r(10, (W.to = ce.to), W),
                  r(
                    10,
                    (W.cc =
                      ce.cc.filter((w) => {
                        var m;
                        return (
                          w.email !==
                          ((m = k.you) === null || m === void 0
                            ? void 0
                            : m.email_address)
                        );
                      }) || []),
                    W,
                  ))
                : (r(10, (W.to = ce.from), W),
                  r(
                    10,
                    (W.cc = [...ce.cc, ...ce.to].filter((w) => {
                      var m;
                      return (
                        w.email !==
                        ((m = k.you) === null || m === void 0
                          ? void 0
                          : m.email_address)
                      );
                    })),
                    W,
                  )))),
          t.$$.dirty[0] & 234881026 &&
            (r(25, (u = k.you)) === null || u === void 0
              ? void 0
              : u.email_address) &&
            r(
              10,
              (W.from = [
                {
                  name:
                    r(26, (p = k.you)) === null || p === void 0
                      ? void 0
                      : p.name,
                  email:
                    r(27, (b = k.you)) === null || b === void 0
                      ? void 0
                      : b.email_address,
                },
              ]),
              W,
            );
      }),
      (e = Be(e)),
      [
        _,
        k,
        S,
        V,
        Te,
        a,
        be,
        de,
        Re,
        Ee,
        W,
        Ae,
        $e,
        Oe,
        n,
        tr,
        T,
        L,
        O,
        M,
        x,
        F,
        U,
        i,
        c,
        u,
        p,
        b,
        H,
        _e,
        je,
        he,
        ce,
        Xe,
        fe,
        rr,
        nr,
        Lt,
      ]
    );
  }
  class kn extends mt {
    constructor(e) {
      super();
      (this.shadowRoot.innerHTML =
        '<style>*{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;list-style:none}.sr-only{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}main{--black:#161717;--grey-dark:#636671;--grey:#bdc0cb;--grey-lighter:#dfe1e8;--grey-dark-warm:#9fa4b5;--grey-lightest:#f7f7f8;--grey-background:#f0f1f5;--white:#ffffff;--blue:#314fa9;--blue-lighter:#f0f3ff;--red:#ee3248;--red-lighter:#ffeef0;--fs-12:0.75rem;--fs-14:0.875rem;--fs-16:1rem;--black-90:#2c2e2e;--grey-light:#f7f7f8;--grey-warm:#cbcbcb}.events.theme-1 .event:nth-of-type(12n + 1){color:black;background-color:#8dd3c7}.events.theme-1 .event:nth-of-type(12n + 2){color:black;background-color:#ffffb3}.events.theme-1 .event:nth-of-type(12n + 3){color:black;background-color:#bebada}.events.theme-1 .event:nth-of-type(12n + 4){color:black;background-color:#fb8072}.events.theme-1 .event:nth-of-type(12n + 5){color:black;background-color:#80b1d3}.events.theme-1 .event:nth-of-type(12n + 6){color:black;background-color:#fdb462}.events.theme-1 .event:nth-of-type(12n + 7){color:black;background-color:#b3de69}.events.theme-1 .event:nth-of-type(12n + 8){color:black;background-color:#fccde5}.events.theme-1 .event:nth-of-type(12n + 9){color:black;background-color:#d9d9d9}.events.theme-1 .event:nth-of-type(12n + 10){color:black;background-color:#bc80bd}.events.theme-1 .event:nth-of-type(12n + 11){color:black;background-color:#ccebc5}.events.theme-1 .event:nth-of-type(12n + 12){color:black;background-color:#ffed6f}.events.theme-2 .event:nth-of-type(10n + 1){background-color:#1f77b4}.events.theme-2 .event:nth-of-type(10n + 2){background-color:#ff7f0e}.events.theme-2 .event:nth-of-type(10n + 3){background-color:#2ca02c}.events.theme-2 .event:nth-of-type(10n + 4){background-color:#d62728}.events.theme-2 .event:nth-of-type(10n + 5){background-color:#9467bd}.events.theme-2 .event:nth-of-type(10n + 6){background-color:#8c564b}.events.theme-2 .event:nth-of-type(10n + 7){background-color:#e377c2}.events.theme-2 .event:nth-of-type(10n + 8){background-color:#7f7f7f}.events.theme-2 .event:nth-of-type(10n + 9){background-color:#bcbd22}.events.theme-2 .event:nth-of-type(10n + 10){background-color:#17becf}.events.theme-3 .event:nth-of-type(6n + 1){background-color:#2d588a}.events.theme-3 .event:nth-of-type(6n + 2){background-color:#58954c}.events.theme-3 .event:nth-of-type(6n + 3){background-color:#e9a044}.events.theme-3 .event:nth-of-type(6n + 4){background-color:#c12f32}.events.theme-3 .event:nth-of-type(6n + 5){background-color:#723e77}.events.theme-3 .event:nth-of-type(6n + 6){background-color:#7d807f}.events.gmail .event:nth-of-type(6n + 1){background-color:#4285f4}.events.gmail .event:nth-of-type(6n + 2){background-color:#0b8043}.events.gmail .event:nth-of-type(6n + 3){background-color:#d81b60}.events.gmail .event:nth-of-type(6n + 4){background-color:#b39ddb}.events.gmail .event:nth-of-type(6n + 5){background-color:#e4c441}.events.gmail .event:nth-of-type(6n + 6){background-color:#a79b8e}.events.ellsworth-kelly .event:nth-of-type(11n + 1){background-color:#f8b800}.events.ellsworth-kelly .event:nth-of-type(11n + 2){background-color:#4db930}.events.ellsworth-kelly .event:nth-of-type(11n + 3){background-color:#00a14d}.events.ellsworth-kelly .event:nth-of-type(11n + 4){background-color:#008874}.events.ellsworth-kelly .event:nth-of-type(11n + 5){background-color:#0758bb}.events.ellsworth-kelly .event:nth-of-type(11n + 6){background-color:#093cb3}.events.ellsworth-kelly .event:nth-of-type(11n + 7){background-color:#58266e}.events.ellsworth-kelly .event:nth-of-type(11n + 8){background-color:#ab2049}.events.ellsworth-kelly .event:nth-of-type(11n + 9){background-color:#de032c}.events.ellsworth-kelly .event:nth-of-type(11n + 10){background-color:#f52324}.events.ellsworth-kelly .event:nth-of-type(11n + 11){background-color:#fa540e}.messages.theme-1 .message.member-1{color:black;border-color:#8dd3c7}.messages.theme-1 .message.member-1 .avatar{background-color:#8dd3c7}.messages.theme-1 .message.member-2{color:black;border-color:#ffffb3}.messages.theme-1 .message.member-2 .avatar{background-color:#ffffb3}.messages.theme-1 .message.member-3{color:black;border-color:#bebada}.messages.theme-1 .message.member-3 .avatar{background-color:#bebada}.messages.theme-1 .message.member-4{color:black;border-color:#fb8072}.messages.theme-1 .message.member-4 .avatar{background-color:#fb8072}.messages.theme-1 .message.member-5{color:black;border-color:#80b1d3}.messages.theme-1 .message.member-5 .avatar{background-color:#80b1d3}.messages.theme-1 .message.member-6{color:black;border-color:#fdb462}.messages.theme-1 .message.member-6 .avatar{background-color:#fdb462}.messages.theme-1 .message.member-7{color:black;border-color:#b3de69}.messages.theme-1 .message.member-7 .avatar{background-color:#b3de69}.messages.theme-1 .message.member-8{color:black;border-color:#fccde5}.messages.theme-1 .message.member-8 .avatar{background-color:#fccde5}.messages.theme-1 .message.member-9{color:black;border-color:#d9d9d9}.messages.theme-1 .message.member-9 .avatar{background-color:#d9d9d9}.messages.theme-1 .message.member-10{color:black;border-color:#bc80bd}.messages.theme-1 .message.member-10 .avatar{background-color:#bc80bd}.messages.theme-1 .message.member-11{color:black;border-color:#ccebc5}.messages.theme-1 .message.member-11 .avatar{background-color:#ccebc5}.messages.theme-1 .message.member-12{color:black;border-color:#ffed6f}.messages.theme-1 .message.member-12 .avatar{background-color:#ffed6f}.messages.theme-2 .message.member-1{border-color:#1f77b4}.messages.theme-2 .message.member-1 .avatar{background-color:#1f77b4}.messages.theme-2 .message.member-2{border-color:#ff7f0e}.messages.theme-2 .message.member-2 .avatar{background-color:#ff7f0e}.messages.theme-2 .message.member-3{border-color:#2ca02c}.messages.theme-2 .message.member-3 .avatar{background-color:#2ca02c}.messages.theme-2 .message.member-4{border-color:#d62728}.messages.theme-2 .message.member-4 .avatar{background-color:#d62728}.messages.theme-2 .message.member-5{border-color:#9467bd}.messages.theme-2 .message.member-5 .avatar{background-color:#9467bd}.messages.theme-2 .message.member-6{border-color:#8c564b}.messages.theme-2 .message.member-6 .avatar{background-color:#8c564b}.messages.theme-2 .message.member-7{border-color:#e377c2}.messages.theme-2 .message.member-7 .avatar{background-color:#e377c2}.messages.theme-2 .message.member-8{border-color:#7f7f7f}.messages.theme-2 .message.member-8 .avatar{background-color:#7f7f7f}.messages.theme-2 .message.member-9{border-color:#bcbd22}.messages.theme-2 .message.member-9 .avatar{background-color:#bcbd22}.messages.theme-2 .message.member-10{border-color:#17becf}.messages.theme-2 .message.member-10 .avatar{background-color:#17becf}.messages.theme-3 .message.member-1{border-color:#2d588a}.messages.theme-3 .message.member-1 .avatar{background-color:#2d588a}.messages.theme-3 .message.member-2{border-color:#58954c}.messages.theme-3 .message.member-2 .avatar{background-color:#58954c}.messages.theme-3 .message.member-3{border-color:#e9a044}.messages.theme-3 .message.member-3 .avatar{background-color:#e9a044}.messages.theme-3 .message.member-4{border-color:#c12f32}.messages.theme-3 .message.member-4 .avatar{background-color:#c12f32}.messages.theme-3 .message.member-5{border-color:#723e77}.messages.theme-3 .message.member-5 .avatar{background-color:#723e77}.messages.theme-3 .message.member-6{border-color:#7d807f}.messages.theme-3 .message.member-6 .avatar{background-color:#7d807f}.messages.gmail .message.member-1{border-color:#4285f4}.messages.gmail .message.member-1 .avatar{background-color:#4285f4}.messages.gmail .message.member-2{border-color:#0b8043}.messages.gmail .message.member-2 .avatar{background-color:#0b8043}.messages.gmail .message.member-3{border-color:#d81b60}.messages.gmail .message.member-3 .avatar{background-color:#d81b60}.messages.gmail .message.member-4{border-color:#b39ddb}.messages.gmail .message.member-4 .avatar{background-color:#b39ddb}.messages.gmail .message.member-5{border-color:#e4c441}.messages.gmail .message.member-5 .avatar{background-color:#e4c441}.messages.gmail .message.member-6{border-color:#a79b8e}.messages.gmail .message.member-6 .avatar{background-color:#a79b8e}.messages.ellsworth-kelly .message.member-1{border-color:#f8b800}.messages.ellsworth-kelly .message.member-1 .avatar{background-color:#f8b800}.messages.ellsworth-kelly .message.member-2{border-color:#4db930}.messages.ellsworth-kelly .message.member-2 .avatar{background-color:#4db930}.messages.ellsworth-kelly .message.member-3{border-color:#00a14d}.messages.ellsworth-kelly .message.member-3 .avatar{background-color:#00a14d}.messages.ellsworth-kelly .message.member-4{border-color:#008874}.messages.ellsworth-kelly .message.member-4 .avatar{background-color:#008874}.messages.ellsworth-kelly .message.member-5{border-color:#0758bb}.messages.ellsworth-kelly .message.member-5 .avatar{background-color:#0758bb}.messages.ellsworth-kelly .message.member-6{border-color:#093cb3}.messages.ellsworth-kelly .message.member-6 .avatar{background-color:#093cb3}.messages.ellsworth-kelly .message.member-7{border-color:#58266e}.messages.ellsworth-kelly .message.member-7 .avatar{background-color:#58266e}.messages.ellsworth-kelly .message.member-8{border-color:#ab2049}.messages.ellsworth-kelly .message.member-8 .avatar{background-color:#ab2049}.messages.ellsworth-kelly .message.member-9{border-color:#de032c}.messages.ellsworth-kelly .message.member-9 .avatar{background-color:#de032c}.messages.ellsworth-kelly .message.member-10{border-color:#f52324}.messages.ellsworth-kelly .message.member-10 .avatar{background-color:#f52324}.messages.ellsworth-kelly .message.member-11{border-color:#fa540e}.messages.ellsworth-kelly .message.member-11 .avatar{background-color:#fa540e}main{height:100%;max-height:100vh;width:100%;overflow:auto;position:relative;font-family:sans-serif;background-color:var(--conversation-background, var(--grey-light))}@keyframes progress{0%{width:0}100%{width:100%}}.loading::after{background-color:var(--blue-lighter);z-index:-1}.loading::before{animation:progress 2s ease-in-out infinite;background-color:var(--blue)}.loading::before,.loading::after{top:calc(var(--fs-14) + 30px);left:0;content:"";display:block;height:4px;position:absolute}.loading.status{border-top:calc(var(--fs-14) + 30px) solid #fff;border-bottom:50px solid #fff;height:calc(100vh - (var(--fs-14) + 80px));overflow:hidden}header{display:flex;background:var(--conversation-header-background, var(--white));min-height:var(--fs-14);padding:15px 32px;gap:32px;color:var(--conversation-header-color, var(--black));font-size:var(--fs-14);position:sticky;width:calc(100% - 64px);top:0;z-index:1}@keyframes progress{0%{width:0}100%{width:100%}}header.loading::after{background-color:var(--blue-lighter);z-index:-1}header.loading::before{animation:progress 2s ease-in-out infinite;background-color:var(--blue)}header.loading::before,header.loading::after{bottom:0;left:0;content:"";display:block;height:4px;position:absolute}@keyframes progress{0%{width:0}100%{width:100%}}header.error::after{background-color:var(--red);z-index:-1}header.error::before{animation:progress 2s ease-in-out infinite;background-color:var(--red)}header.error::before,header.error::after{bottom:0;left:0;content:"";display:block;height:4px;position:absolute}header.error::before,header.error::after{animation:none;width:100%}header.mobile{width:calc(100% - (32px * 2))}@media(min-width: 768px){header.mobile{display:none}}header.mobile button{position:absolute;right:32px;top:16px;background:none;display:flex}header.mobile.expanded{display:grid;gap:12px}header.mobile.expanded button{rotate:180deg}header.tablet{display:none}@media(min-width: 768px){header.tablet{display:flex}}.messages{display:grid;gap:1rem;padding:1rem;padding:61px 0 49px 0}.messages .message{max-width:min(400px, calc(100% - 32px - 1rem));display:grid;column-gap:1rem;row-gap:0.25rem;grid-template-columns:32px 1fr;grid-template-rows:auto auto;transition:0.5s}@media(min-width: 768px){.messages .message{width:max-content;max-width:600px}}@media(min-width: 1140px){.messages .message{max-width:752px}}.messages .message:last-child{padding-bottom:2rem}.messages .message .body{border-radius:8px;background-color:var(--conversation-peer-message-background, var(--white));color:var(--conversation-peer-message-color, var(--black));max-height:50vh;overflow:auto;position:relative}.messages .message .contact{display:flex;flex-direction:column;align-items:center;grid-template-rows:auto 1fr;gap:0.5rem}.messages .message .contact .avatar{border-radius:20px;width:32px;height:32px;text-align:center;color:white;font-size:1rem;font-weight:bold;background-color:blue;overflow:hidden;display:grid;align-items:center;justify-items:center}.messages .message .contact .email{font-size:0.8rem;color:#555;width:100%;overflow:hidden;text-overflow:ellipsis}.messages .message .time{grid-column:2/3;font-size:var(--fs-12);color:var(--grey-dark)}.messages .message p{padding:1rem;font-weight:300;line-height:1.3em;font-size:0.9em;border-radius:8px;white-space:pre-line}.messages .message p.after{padding-top:0;margin-top:-1rem;color:var(--grey-dark)}.messages .message.you{justify-self:end;grid-template-columns:1fr 32px}.messages .message.you .contact{grid-row:1/2;grid-column:2/3}.messages .message.you .body{order:1;grid-column:1/1;color:var(--conversation-your-message-color, var(--white));background-color:var(--conversation-your-message-background, var(--blue))}.messages .message.you .body p.after{color:var(--grey)}.messages .message.you .time{order:1;grid-column:1/1}.messages.dont-show-avatars .message{column-gap:0;grid-template-columns:0 1fr;width:clamp(200px, calc(100% - 4rem), 700px)}.messages.dont-show-avatars .message .contact{overflow:hidden}.messages.dont-show-avatars .message.you{grid-template-columns:1fr 0}.reply-box{position:sticky;width:100%;bottom:0;z-index:1}.reply-box form{position:relative;display:flex;align-items:center}.reply-box form button[type=submit]{position:absolute;right:1rem;border-radius:4px;background-color:var(--blue);height:28px;width:28px;color:white;display:flex;align-items:center;justify-content:center}.reply-box form button[type=submit]:disabled{cursor:not-allowed;background-color:gray}.reply-box form input{border-top:1px solid #ebebeb;height:25px;padding:12px 1rem;width:100%;font-size:var(--fs-16);color:var(--conversation-reply-color, var(--grey-black));background-color:var(--conversation-reply-background, var(--white))}.reply-box form input::placeholder{color:var(--conversation-reply-color, var(--grey))}</style>'),
        Je(
          this,
          {
            target: this.shadowRoot,
            props: Et(this.attributes),
            customElement: !0,
          },
          is,
          as,
          He,
          {
            id: 0,
            access_token: 16,
            messages: 17,
            show_avatars: 18,
            show_reply: 19,
            theme: 20,
            thread_id: 21,
            you: 22,
          },
          null,
          [-1, -1, -1],
        ),
        e &&
          (e.target && N(e.target, this, e.anchor),
          e.props && (this.$set(e.props), G()));
    }
    static get observedAttributes() {
      return [
        "id",
        "access_token",
        "messages",
        "show_avatars",
        "show_reply",
        "theme",
        "thread_id",
        "you",
      ];
    }
    get id() {
      return this.$$.ctx[0];
    }
    set id(e) {
      this.$$set({ id: e }), G();
    }
    get access_token() {
      return this.$$.ctx[16];
    }
    set access_token(e) {
      this.$$set({ access_token: e }), G();
    }
    get messages() {
      return this.$$.ctx[17];
    }
    set messages(e) {
      this.$$set({ messages: e }), G();
    }
    get show_avatars() {
      return this.$$.ctx[18];
    }
    set show_avatars(e) {
      this.$$set({ show_avatars: e }), G();
    }
    get show_reply() {
      return this.$$.ctx[19];
    }
    set show_reply(e) {
      this.$$set({ show_reply: e }), G();
    }
    get theme() {
      return this.$$.ctx[20];
    }
    set theme(e) {
      this.$$set({ theme: e }), G();
    }
    get thread_id() {
      return this.$$.ctx[21];
    }
    set thread_id(e) {
      this.$$set({ thread_id: e }), G();
    }
    get you() {
      return this.$$.ctx[22];
    }
    set you(e) {
      this.$$set({ you: e }), G();
    }
  }
  return customElements.define("nylas-conversation", kn), kn;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbW1vbnMvc3JjL2RlZmluZS1jb21wb25lbnQtcGF0Y2gudHMiLCIuLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL2ludGVybmFsL2luZGV4Lm1qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvc3RvcmUvaW5kZXgubWpzIiwiLi4vLi4vY29tbW9ucy9zcmMvc3RvcmUvZXJyb3IudHMiLCIuLi8uLi9jb21tb25zL3NyYy9tZXRob2RzL2FwaS50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL2Nvbm5lY3Rpb25zL2NvbnRhY3RzLnRzIiwiLi4vLi4vY29tbW9ucy9zcmMvY29ubmVjdGlvbnMvdGhyZWFkcy50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL2Nvbm5lY3Rpb25zL21hbmlmZXN0LnRzIiwiLi4vLi4vY29tbW9ucy9zcmMvY29ubmVjdGlvbnMvbWVzc2FnZXMudHMiLCIuLi8uLi9jb21tb25zL3NyYy9jb25uZWN0aW9ucy9hY2NvdW50cy50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL2Nvbm5lY3Rpb25zL25ldXJhbC50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL2Nvbm5lY3Rpb25zL2F2YWlsYWJpbGl0eS50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL3N0b3JlL2F2YWlsYWJpbGl0eS50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL3N0b3JlL2NvbnNlY3V0aXZlLWF2YWlsYWJpbGl0eS50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL3N0b3JlL2NvbnRhY3RzLnRzIiwiLi4vLi4vY29tbW9ucy9zcmMvc3RvcmUvY29udGFjdC1hdmF0YXIudHMiLCIuLi8uLi9jb21tb25zL3NyYy9zdG9yZS9jb252ZXJzYXRpb25zLnRzIiwiLi4vLi4vY29tbW9ucy9zcmMvc3RvcmUvbWFpbGJveC50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL3N0b3JlL21hbmlmZXN0LnRzIiwiLi4vLi4vY29tbW9ucy9zcmMvbWV0aG9kcy9jb21wb25lbnQudHMiLCIuLi8uLi9jb21tb25zL3NyYy9jb21wb25lbnRzL05FcnJvci5zdmVsdGUiLCIuLi8uLi9jb21tb25zL3NyYy9jb21wb25lbnRzL0NvbnRhY3RJbWFnZS9Db250YWN0SW1hZ2Uuc3ZlbHRlIiwiLi4vLi4vY29tbW9ucy9zcmMvY29tcG9uZW50cy9FcnJvck1lc3NhZ2Uuc3ZlbHRlIiwiLi4vLi4vY29tbW9ucy9zcmMvbWV0aG9kcy9kYXRldGltZS50cyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kb21wdXJpZnkvZGlzdC9wdXJpZnkuanMiLCJzcmMvYXNzZXRzL3NlbmQuc3ZnIiwic3JjL2Fzc2V0cy90b2dnbGUuc3ZnIiwic3JjL0NvbnZlcnNhdGlvbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG9yaWdpbmFsRGVmaW5lID0gd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZS5iaW5kKFxuICB3aW5kb3cuY3VzdG9tRWxlbWVudHMsXG4pO1xud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSA9IChuYW1lOiBzdHJpbmcsIC4uLmFyZ3MpID0+IHtcbiAgaWYgKGN1c3RvbUVsZW1lbnRzLmdldChuYW1lKSkge1xuICAgIHJldHVybjtcbiAgfVxuICByZXR1cm4gb3JpZ2luYWxEZWZpbmUobmFtZSwgLi4uYXJncyk7XG59O1xuIiwiZnVuY3Rpb24gbm9vcCgpIHsgfVxuY29uc3QgaWRlbnRpdHkgPSB4ID0+IHg7XG5mdW5jdGlvbiBhc3NpZ24odGFyLCBzcmMpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZm9yIChjb25zdCBrIGluIHNyYylcbiAgICAgICAgdGFyW2tdID0gc3JjW2tdO1xuICAgIHJldHVybiB0YXI7XG59XG5mdW5jdGlvbiBpc19wcm9taXNlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBhZGRfbG9jYXRpb24oZWxlbWVudCwgZmlsZSwgbGluZSwgY29sdW1uLCBjaGFyKSB7XG4gICAgZWxlbWVudC5fX3N2ZWx0ZV9tZXRhID0ge1xuICAgICAgICBsb2M6IHsgZmlsZSwgbGluZSwgY29sdW1uLCBjaGFyIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gcnVuKGZuKSB7XG4gICAgcmV0dXJuIGZuKCk7XG59XG5mdW5jdGlvbiBibGFua19vYmplY3QoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCk7XG59XG5mdW5jdGlvbiBydW5fYWxsKGZucykge1xuICAgIGZucy5mb3JFYWNoKHJ1bik7XG59XG5mdW5jdGlvbiBpc19mdW5jdGlvbih0aGluZykge1xuICAgIHJldHVybiB0eXBlb2YgdGhpbmcgPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBzYWZlX25vdF9lcXVhbChhLCBiKSB7XG4gICAgcmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGIgfHwgKChhICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JykgfHwgdHlwZW9mIGEgPT09ICdmdW5jdGlvbicpO1xufVxubGV0IHNyY191cmxfZXF1YWxfYW5jaG9yO1xuZnVuY3Rpb24gc3JjX3VybF9lcXVhbChlbGVtZW50X3NyYywgdXJsKSB7XG4gICAgaWYgKCFzcmNfdXJsX2VxdWFsX2FuY2hvcikge1xuICAgICAgICBzcmNfdXJsX2VxdWFsX2FuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB9XG4gICAgc3JjX3VybF9lcXVhbF9hbmNob3IuaHJlZiA9IHVybDtcbiAgICByZXR1cm4gZWxlbWVudF9zcmMgPT09IHNyY191cmxfZXF1YWxfYW5jaG9yLmhyZWY7XG59XG5mdW5jdGlvbiBub3RfZXF1YWwoYSwgYikge1xuICAgIHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiO1xufVxuZnVuY3Rpb24gaXNfZW1wdHkob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAwO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVfc3RvcmUoc3RvcmUsIG5hbWUpIHtcbiAgICBpZiAoc3RvcmUgIT0gbnVsbCAmJiB0eXBlb2Ygc3RvcmUuc3Vic2NyaWJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJyR7bmFtZX0nIGlzIG5vdCBhIHN0b3JlIHdpdGggYSAnc3Vic2NyaWJlJyBtZXRob2RgKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzdWJzY3JpYmUoc3RvcmUsIC4uLmNhbGxiYWNrcykge1xuICAgIGlmIChzdG9yZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBub29wO1xuICAgIH1cbiAgICBjb25zdCB1bnN1YiA9IHN0b3JlLnN1YnNjcmliZSguLi5jYWxsYmFja3MpO1xuICAgIHJldHVybiB1bnN1Yi51bnN1YnNjcmliZSA/ICgpID0+IHVuc3ViLnVuc3Vic2NyaWJlKCkgOiB1bnN1Yjtcbn1cbmZ1bmN0aW9uIGdldF9zdG9yZV92YWx1ZShzdG9yZSkge1xuICAgIGxldCB2YWx1ZTtcbiAgICBzdWJzY3JpYmUoc3RvcmUsIF8gPT4gdmFsdWUgPSBfKSgpO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGNvbXBvbmVudF9zdWJzY3JpYmUoY29tcG9uZW50LCBzdG9yZSwgY2FsbGJhY2spIHtcbiAgICBjb21wb25lbnQuJCQub25fZGVzdHJveS5wdXNoKHN1YnNjcmliZShzdG9yZSwgY2FsbGJhY2spKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9zbG90KGRlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZm4pIHtcbiAgICBpZiAoZGVmaW5pdGlvbikge1xuICAgICAgICBjb25zdCBzbG90X2N0eCA9IGdldF9zbG90X2NvbnRleHQoZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBmbik7XG4gICAgICAgIHJldHVybiBkZWZpbml0aW9uWzBdKHNsb3RfY3R4KTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRfc2xvdF9jb250ZXh0KGRlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZm4pIHtcbiAgICByZXR1cm4gZGVmaW5pdGlvblsxXSAmJiBmblxuICAgICAgICA/IGFzc2lnbigkJHNjb3BlLmN0eC5zbGljZSgpLCBkZWZpbml0aW9uWzFdKGZuKGN0eCkpKVxuICAgICAgICA6ICQkc2NvcGUuY3R4O1xufVxuZnVuY3Rpb24gZ2V0X3Nsb3RfY2hhbmdlcyhkZWZpbml0aW9uLCAkJHNjb3BlLCBkaXJ0eSwgZm4pIHtcbiAgICBpZiAoZGVmaW5pdGlvblsyXSAmJiBmbikge1xuICAgICAgICBjb25zdCBsZXRzID0gZGVmaW5pdGlvblsyXShmbihkaXJ0eSkpO1xuICAgICAgICBpZiAoJCRzY29wZS5kaXJ0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbGV0cztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGxldHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25zdCBtZXJnZWQgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IE1hdGgubWF4KCQkc2NvcGUuZGlydHkubGVuZ3RoLCBsZXRzLmxlbmd0aCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgbWVyZ2VkW2ldID0gJCRzY29wZS5kaXJ0eVtpXSB8IGxldHNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAkJHNjb3BlLmRpcnR5IHwgbGV0cztcbiAgICB9XG4gICAgcmV0dXJuICQkc2NvcGUuZGlydHk7XG59XG5mdW5jdGlvbiB1cGRhdGVfc2xvdF9iYXNlKHNsb3QsIHNsb3RfZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBzbG90X2NoYW5nZXMsIGdldF9zbG90X2NvbnRleHRfZm4pIHtcbiAgICBpZiAoc2xvdF9jaGFuZ2VzKSB7XG4gICAgICAgIGNvbnN0IHNsb3RfY29udGV4dCA9IGdldF9zbG90X2NvbnRleHQoc2xvdF9kZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGdldF9zbG90X2NvbnRleHRfZm4pO1xuICAgICAgICBzbG90LnAoc2xvdF9jb250ZXh0LCBzbG90X2NoYW5nZXMpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZV9zbG90KHNsb3QsIHNsb3RfZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBkaXJ0eSwgZ2V0X3Nsb3RfY2hhbmdlc19mbiwgZ2V0X3Nsb3RfY29udGV4dF9mbikge1xuICAgIGNvbnN0IHNsb3RfY2hhbmdlcyA9IGdldF9zbG90X2NoYW5nZXMoc2xvdF9kZWZpbml0aW9uLCAkJHNjb3BlLCBkaXJ0eSwgZ2V0X3Nsb3RfY2hhbmdlc19mbik7XG4gICAgdXBkYXRlX3Nsb3RfYmFzZShzbG90LCBzbG90X2RlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgc2xvdF9jaGFuZ2VzLCBnZXRfc2xvdF9jb250ZXh0X2ZuKTtcbn1cbmZ1bmN0aW9uIGdldF9hbGxfZGlydHlfZnJvbV9zY29wZSgkJHNjb3BlKSB7XG4gICAgaWYgKCQkc2NvcGUuY3R4Lmxlbmd0aCA+IDMyKSB7XG4gICAgICAgIGNvbnN0IGRpcnR5ID0gW107XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9ICQkc2NvcGUuY3R4Lmxlbmd0aCAvIDMyO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkaXJ0eVtpXSA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaXJ0eTtcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufVxuZnVuY3Rpb24gZXhjbHVkZV9pbnRlcm5hbF9wcm9wcyhwcm9wcykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3QgayBpbiBwcm9wcylcbiAgICAgICAgaWYgKGtbMF0gIT09ICckJylcbiAgICAgICAgICAgIHJlc3VsdFtrXSA9IHByb3BzW2tdO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBjb21wdXRlX3Jlc3RfcHJvcHMocHJvcHMsIGtleXMpIHtcbiAgICBjb25zdCByZXN0ID0ge307XG4gICAga2V5cyA9IG5ldyBTZXQoa2V5cyk7XG4gICAgZm9yIChjb25zdCBrIGluIHByb3BzKVxuICAgICAgICBpZiAoIWtleXMuaGFzKGspICYmIGtbMF0gIT09ICckJylcbiAgICAgICAgICAgIHJlc3Rba10gPSBwcm9wc1trXTtcbiAgICByZXR1cm4gcmVzdDtcbn1cbmZ1bmN0aW9uIGNvbXB1dGVfc2xvdHMoc2xvdHMpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzbG90cykge1xuICAgICAgICByZXN1bHRba2V5XSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBvbmNlKGZuKSB7XG4gICAgbGV0IHJhbiA9IGZhbHNlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICBpZiAocmFuKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICByYW4gPSB0cnVlO1xuICAgICAgICBmbi5jYWxsKHRoaXMsIC4uLmFyZ3MpO1xuICAgIH07XG59XG5mdW5jdGlvbiBudWxsX3RvX2VtcHR5KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xufVxuZnVuY3Rpb24gc2V0X3N0b3JlX3ZhbHVlKHN0b3JlLCByZXQsIHZhbHVlKSB7XG4gICAgc3RvcmUuc2V0KHZhbHVlKTtcbiAgICByZXR1cm4gcmV0O1xufVxuY29uc3QgaGFzX3Byb3AgPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbmZ1bmN0aW9uIGFjdGlvbl9kZXN0cm95ZXIoYWN0aW9uX3Jlc3VsdCkge1xuICAgIHJldHVybiBhY3Rpb25fcmVzdWx0ICYmIGlzX2Z1bmN0aW9uKGFjdGlvbl9yZXN1bHQuZGVzdHJveSkgPyBhY3Rpb25fcmVzdWx0LmRlc3Ryb3kgOiBub29wO1xufVxuXG5jb25zdCBpc19jbGllbnQgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbmxldCBub3cgPSBpc19jbGllbnRcbiAgICA/ICgpID0+IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKVxuICAgIDogKCkgPT4gRGF0ZS5ub3coKTtcbmxldCByYWYgPSBpc19jbGllbnQgPyBjYiA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2IpIDogbm9vcDtcbi8vIHVzZWQgaW50ZXJuYWxseSBmb3IgdGVzdGluZ1xuZnVuY3Rpb24gc2V0X25vdyhmbikge1xuICAgIG5vdyA9IGZuO1xufVxuZnVuY3Rpb24gc2V0X3JhZihmbikge1xuICAgIHJhZiA9IGZuO1xufVxuXG5jb25zdCB0YXNrcyA9IG5ldyBTZXQoKTtcbmZ1bmN0aW9uIHJ1bl90YXNrcyhub3cpIHtcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBpZiAoIXRhc2suYyhub3cpKSB7XG4gICAgICAgICAgICB0YXNrcy5kZWxldGUodGFzayk7XG4gICAgICAgICAgICB0YXNrLmYoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0YXNrcy5zaXplICE9PSAwKVxuICAgICAgICByYWYocnVuX3Rhc2tzKTtcbn1cbi8qKlxuICogRm9yIHRlc3RpbmcgcHVycG9zZXMgb25seSFcbiAqL1xuZnVuY3Rpb24gY2xlYXJfbG9vcHMoKSB7XG4gICAgdGFza3MuY2xlYXIoKTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB0YXNrIHRoYXQgcnVucyBvbiBlYWNoIHJhZiBmcmFtZVxuICogdW50aWwgaXQgcmV0dXJucyBhIGZhbHN5IHZhbHVlIG9yIGlzIGFib3J0ZWRcbiAqL1xuZnVuY3Rpb24gbG9vcChjYWxsYmFjaykge1xuICAgIGxldCB0YXNrO1xuICAgIGlmICh0YXNrcy5zaXplID09PSAwKVxuICAgICAgICByYWYocnVuX3Rhc2tzKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9taXNlOiBuZXcgUHJvbWlzZShmdWxmaWxsID0+IHtcbiAgICAgICAgICAgIHRhc2tzLmFkZCh0YXNrID0geyBjOiBjYWxsYmFjaywgZjogZnVsZmlsbCB9KTtcbiAgICAgICAgfSksXG4gICAgICAgIGFib3J0KCkge1xuICAgICAgICAgICAgdGFza3MuZGVsZXRlKHRhc2spO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8gVHJhY2sgd2hpY2ggbm9kZXMgYXJlIGNsYWltZWQgZHVyaW5nIGh5ZHJhdGlvbi4gVW5jbGFpbWVkIG5vZGVzIGNhbiB0aGVuIGJlIHJlbW92ZWQgZnJvbSB0aGUgRE9NXG4vLyBhdCB0aGUgZW5kIG9mIGh5ZHJhdGlvbiB3aXRob3V0IHRvdWNoaW5nIHRoZSByZW1haW5pbmcgbm9kZXMuXG5sZXQgaXNfaHlkcmF0aW5nID0gZmFsc2U7XG5mdW5jdGlvbiBzdGFydF9oeWRyYXRpbmcoKSB7XG4gICAgaXNfaHlkcmF0aW5nID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGVuZF9oeWRyYXRpbmcoKSB7XG4gICAgaXNfaHlkcmF0aW5nID0gZmFsc2U7XG59XG5mdW5jdGlvbiB1cHBlcl9ib3VuZChsb3csIGhpZ2gsIGtleSwgdmFsdWUpIHtcbiAgICAvLyBSZXR1cm4gZmlyc3QgaW5kZXggb2YgdmFsdWUgbGFyZ2VyIHRoYW4gaW5wdXQgdmFsdWUgaW4gdGhlIHJhbmdlIFtsb3csIGhpZ2gpXG4gICAgd2hpbGUgKGxvdyA8IGhpZ2gpIHtcbiAgICAgICAgY29uc3QgbWlkID0gbG93ICsgKChoaWdoIC0gbG93KSA+PiAxKTtcbiAgICAgICAgaWYgKGtleShtaWQpIDw9IHZhbHVlKSB7XG4gICAgICAgICAgICBsb3cgPSBtaWQgKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaGlnaCA9IG1pZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbG93O1xufVxuZnVuY3Rpb24gaW5pdF9oeWRyYXRlKHRhcmdldCkge1xuICAgIGlmICh0YXJnZXQuaHlkcmF0ZV9pbml0KVxuICAgICAgICByZXR1cm47XG4gICAgdGFyZ2V0Lmh5ZHJhdGVfaW5pdCA9IHRydWU7XG4gICAgLy8gV2Uga25vdyB0aGF0IGFsbCBjaGlsZHJlbiBoYXZlIGNsYWltX29yZGVyIHZhbHVlcyBzaW5jZSB0aGUgdW5jbGFpbWVkIGhhdmUgYmVlbiBkZXRhY2hlZCBpZiB0YXJnZXQgaXMgbm90IDxoZWFkPlxuICAgIGxldCBjaGlsZHJlbiA9IHRhcmdldC5jaGlsZE5vZGVzO1xuICAgIC8vIElmIHRhcmdldCBpcyA8aGVhZD4sIHRoZXJlIG1heSBiZSBjaGlsZHJlbiB3aXRob3V0IGNsYWltX29yZGVyXG4gICAgaWYgKHRhcmdldC5ub2RlTmFtZSA9PT0gJ0hFQUQnKSB7XG4gICAgICAgIGNvbnN0IG15Q2hpbGRyZW4gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKG5vZGUuY2xhaW1fb3JkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG15Q2hpbGRyZW4ucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjaGlsZHJlbiA9IG15Q2hpbGRyZW47XG4gICAgfVxuICAgIC8qXG4gICAgKiBSZW9yZGVyIGNsYWltZWQgY2hpbGRyZW4gb3B0aW1hbGx5LlxuICAgICogV2UgY2FuIHJlb3JkZXIgY2xhaW1lZCBjaGlsZHJlbiBvcHRpbWFsbHkgYnkgZmluZGluZyB0aGUgbG9uZ2VzdCBzdWJzZXF1ZW5jZSBvZlxuICAgICogbm9kZXMgdGhhdCBhcmUgYWxyZWFkeSBjbGFpbWVkIGluIG9yZGVyIGFuZCBvbmx5IG1vdmluZyB0aGUgcmVzdC4gVGhlIGxvbmdlc3RcbiAgICAqIHN1YnNlcXVlbmNlIHN1YnNlcXVlbmNlIG9mIG5vZGVzIHRoYXQgYXJlIGNsYWltZWQgaW4gb3JkZXIgY2FuIGJlIGZvdW5kIGJ5XG4gICAgKiBjb21wdXRpbmcgdGhlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBvZiAuY2xhaW1fb3JkZXIgdmFsdWVzLlxuICAgICpcbiAgICAqIFRoaXMgYWxnb3JpdGhtIGlzIG9wdGltYWwgaW4gZ2VuZXJhdGluZyB0aGUgbGVhc3QgYW1vdW50IG9mIHJlb3JkZXIgb3BlcmF0aW9uc1xuICAgICogcG9zc2libGUuXG4gICAgKlxuICAgICogUHJvb2Y6XG4gICAgKiBXZSBrbm93IHRoYXQsIGdpdmVuIGEgc2V0IG9mIHJlb3JkZXJpbmcgb3BlcmF0aW9ucywgdGhlIG5vZGVzIHRoYXQgZG8gbm90IG1vdmVcbiAgICAqIGFsd2F5cyBmb3JtIGFuIGluY3JlYXNpbmcgc3Vic2VxdWVuY2UsIHNpbmNlIHRoZXkgZG8gbm90IG1vdmUgYW1vbmcgZWFjaCBvdGhlclxuICAgICogbWVhbmluZyB0aGF0IHRoZXkgbXVzdCBiZSBhbHJlYWR5IG9yZGVyZWQgYW1vbmcgZWFjaCBvdGhlci4gVGh1cywgdGhlIG1heGltYWxcbiAgICAqIHNldCBvZiBub2RlcyB0aGF0IGRvIG5vdCBtb3ZlIGZvcm0gYSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2UuXG4gICAgKi9cbiAgICAvLyBDb21wdXRlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZVxuICAgIC8vIG06IHN1YnNlcXVlbmNlIGxlbmd0aCBqID0+IGluZGV4IGsgb2Ygc21hbGxlc3QgdmFsdWUgdGhhdCBlbmRzIGFuIGluY3JlYXNpbmcgc3Vic2VxdWVuY2Ugb2YgbGVuZ3RoIGpcbiAgICBjb25zdCBtID0gbmV3IEludDMyQXJyYXkoY2hpbGRyZW4ubGVuZ3RoICsgMSk7XG4gICAgLy8gUHJlZGVjZXNzb3IgaW5kaWNlcyArIDFcbiAgICBjb25zdCBwID0gbmV3IEludDMyQXJyYXkoY2hpbGRyZW4ubGVuZ3RoKTtcbiAgICBtWzBdID0gLTE7XG4gICAgbGV0IGxvbmdlc3QgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGNoaWxkcmVuW2ldLmNsYWltX29yZGVyO1xuICAgICAgICAvLyBGaW5kIHRoZSBsYXJnZXN0IHN1YnNlcXVlbmNlIGxlbmd0aCBzdWNoIHRoYXQgaXQgZW5kcyBpbiBhIHZhbHVlIGxlc3MgdGhhbiBvdXIgY3VycmVudCB2YWx1ZVxuICAgICAgICAvLyB1cHBlcl9ib3VuZCByZXR1cm5zIGZpcnN0IGdyZWF0ZXIgdmFsdWUsIHNvIHdlIHN1YnRyYWN0IG9uZVxuICAgICAgICAvLyB3aXRoIGZhc3QgcGF0aCBmb3Igd2hlbiB3ZSBhcmUgb24gdGhlIGN1cnJlbnQgbG9uZ2VzdCBzdWJzZXF1ZW5jZVxuICAgICAgICBjb25zdCBzZXFMZW4gPSAoKGxvbmdlc3QgPiAwICYmIGNoaWxkcmVuW21bbG9uZ2VzdF1dLmNsYWltX29yZGVyIDw9IGN1cnJlbnQpID8gbG9uZ2VzdCArIDEgOiB1cHBlcl9ib3VuZCgxLCBsb25nZXN0LCBpZHggPT4gY2hpbGRyZW5bbVtpZHhdXS5jbGFpbV9vcmRlciwgY3VycmVudCkpIC0gMTtcbiAgICAgICAgcFtpXSA9IG1bc2VxTGVuXSArIDE7XG4gICAgICAgIGNvbnN0IG5ld0xlbiA9IHNlcUxlbiArIDE7XG4gICAgICAgIC8vIFdlIGNhbiBndWFyYW50ZWUgdGhhdCBjdXJyZW50IGlzIHRoZSBzbWFsbGVzdCB2YWx1ZS4gT3RoZXJ3aXNlLCB3ZSB3b3VsZCBoYXZlIGdlbmVyYXRlZCBhIGxvbmdlciBzZXF1ZW5jZS5cbiAgICAgICAgbVtuZXdMZW5dID0gaTtcbiAgICAgICAgbG9uZ2VzdCA9IE1hdGgubWF4KG5ld0xlbiwgbG9uZ2VzdCk7XG4gICAgfVxuICAgIC8vIFRoZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2Ugb2Ygbm9kZXMgKGluaXRpYWxseSByZXZlcnNlZClcbiAgICBjb25zdCBsaXMgPSBbXTtcbiAgICAvLyBUaGUgcmVzdCBvZiB0aGUgbm9kZXMsIG5vZGVzIHRoYXQgd2lsbCBiZSBtb3ZlZFxuICAgIGNvbnN0IHRvTW92ZSA9IFtdO1xuICAgIGxldCBsYXN0ID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICBmb3IgKGxldCBjdXIgPSBtW2xvbmdlc3RdICsgMTsgY3VyICE9IDA7IGN1ciA9IHBbY3VyIC0gMV0pIHtcbiAgICAgICAgbGlzLnB1c2goY2hpbGRyZW5bY3VyIC0gMV0pO1xuICAgICAgICBmb3IgKDsgbGFzdCA+PSBjdXI7IGxhc3QtLSkge1xuICAgICAgICAgICAgdG9Nb3ZlLnB1c2goY2hpbGRyZW5bbGFzdF0pO1xuICAgICAgICB9XG4gICAgICAgIGxhc3QtLTtcbiAgICB9XG4gICAgZm9yICg7IGxhc3QgPj0gMDsgbGFzdC0tKSB7XG4gICAgICAgIHRvTW92ZS5wdXNoKGNoaWxkcmVuW2xhc3RdKTtcbiAgICB9XG4gICAgbGlzLnJldmVyc2UoKTtcbiAgICAvLyBXZSBzb3J0IHRoZSBub2RlcyBiZWluZyBtb3ZlZCB0byBndWFyYW50ZWUgdGhhdCB0aGVpciBpbnNlcnRpb24gb3JkZXIgbWF0Y2hlcyB0aGUgY2xhaW0gb3JkZXJcbiAgICB0b01vdmUuc29ydCgoYSwgYikgPT4gYS5jbGFpbV9vcmRlciAtIGIuY2xhaW1fb3JkZXIpO1xuICAgIC8vIEZpbmFsbHksIHdlIG1vdmUgdGhlIG5vZGVzXG4gICAgZm9yIChsZXQgaSA9IDAsIGogPSAwOyBpIDwgdG9Nb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHdoaWxlIChqIDwgbGlzLmxlbmd0aCAmJiB0b01vdmVbaV0uY2xhaW1fb3JkZXIgPj0gbGlzW2pdLmNsYWltX29yZGVyKSB7XG4gICAgICAgICAgICBqKys7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYW5jaG9yID0gaiA8IGxpcy5sZW5ndGggPyBsaXNbal0gOiBudWxsO1xuICAgICAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlKHRvTW92ZVtpXSwgYW5jaG9yKTtcbiAgICB9XG59XG5mdW5jdGlvbiBhcHBlbmQodGFyZ2V0LCBub2RlKSB7XG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xufVxuZnVuY3Rpb24gYXBwZW5kX3N0eWxlcyh0YXJnZXQsIHN0eWxlX3NoZWV0X2lkLCBzdHlsZXMpIHtcbiAgICBjb25zdCBhcHBlbmRfc3R5bGVzX3RvID0gZ2V0X3Jvb3RfZm9yX3N0eWxlKHRhcmdldCk7XG4gICAgaWYgKCFhcHBlbmRfc3R5bGVzX3RvLmdldEVsZW1lbnRCeUlkKHN0eWxlX3NoZWV0X2lkKSkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IGVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHN0eWxlLmlkID0gc3R5bGVfc2hlZXRfaWQ7XG4gICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gc3R5bGVzO1xuICAgICAgICBhcHBlbmRfc3R5bGVzaGVldChhcHBlbmRfc3R5bGVzX3RvLCBzdHlsZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0X3Jvb3RfZm9yX3N0eWxlKG5vZGUpIHtcbiAgICBpZiAoIW5vZGUpXG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICBjb25zdCByb290ID0gbm9kZS5nZXRSb290Tm9kZSA/IG5vZGUuZ2V0Um9vdE5vZGUoKSA6IG5vZGUub3duZXJEb2N1bWVudDtcbiAgICBpZiAocm9vdCAmJiByb290Lmhvc3QpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfVxuICAgIHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQ7XG59XG5mdW5jdGlvbiBhcHBlbmRfZW1wdHlfc3R5bGVzaGVldChub2RlKSB7XG4gICAgY29uc3Qgc3R5bGVfZWxlbWVudCA9IGVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgYXBwZW5kX3N0eWxlc2hlZXQoZ2V0X3Jvb3RfZm9yX3N0eWxlKG5vZGUpLCBzdHlsZV9lbGVtZW50KTtcbiAgICByZXR1cm4gc3R5bGVfZWxlbWVudC5zaGVldDtcbn1cbmZ1bmN0aW9uIGFwcGVuZF9zdHlsZXNoZWV0KG5vZGUsIHN0eWxlKSB7XG4gICAgYXBwZW5kKG5vZGUuaGVhZCB8fCBub2RlLCBzdHlsZSk7XG59XG5mdW5jdGlvbiBhcHBlbmRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSkge1xuICAgIGlmIChpc19oeWRyYXRpbmcpIHtcbiAgICAgICAgaW5pdF9oeWRyYXRlKHRhcmdldCk7XG4gICAgICAgIGlmICgodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPT09IHVuZGVmaW5lZCkgfHwgKCh0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCAhPT0gbnVsbCkgJiYgKHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkLnBhcmVudEVsZW1lbnQgIT09IHRhcmdldCkpKSB7XG4gICAgICAgICAgICB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCA9IHRhcmdldC5maXJzdENoaWxkO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNraXAgbm9kZXMgb2YgdW5kZWZpbmVkIG9yZGVyaW5nXG4gICAgICAgIHdoaWxlICgodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgIT09IG51bGwpICYmICh0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZC5jbGFpbV9vcmRlciA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPSB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZSAhPT0gdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQpIHtcbiAgICAgICAgICAgIC8vIFdlIG9ubHkgaW5zZXJ0IGlmIHRoZSBvcmRlcmluZyBvZiB0aGlzIG5vZGUgc2hvdWxkIGJlIG1vZGlmaWVkIG9yIHRoZSBwYXJlbnQgbm9kZSBpcyBub3QgdGFyZ2V0XG4gICAgICAgICAgICBpZiAobm9kZS5jbGFpbV9vcmRlciAhPT0gdW5kZWZpbmVkIHx8IG5vZGUucGFyZW50Tm9kZSAhPT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCA9IG5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlICE9PSB0YXJnZXQgfHwgbm9kZS5uZXh0U2libGluZyAhPT0gbnVsbCkge1xuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gaW5zZXJ0KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IgfHwgbnVsbCk7XG59XG5mdW5jdGlvbiBpbnNlcnRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgaWYgKGlzX2h5ZHJhdGluZyAmJiAhYW5jaG9yKSB7XG4gICAgICAgIGFwcGVuZF9oeWRyYXRpb24odGFyZ2V0LCBub2RlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlICE9PSB0YXJnZXQgfHwgbm9kZS5uZXh0U2libGluZyAhPSBhbmNob3IpIHtcbiAgICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IgfHwgbnVsbCk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGV0YWNoKG5vZGUpIHtcbiAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG59XG5mdW5jdGlvbiBkZXN0cm95X2VhY2goaXRlcmF0aW9ucywgZGV0YWNoaW5nKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVyYXRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChpdGVyYXRpb25zW2ldKVxuICAgICAgICAgICAgaXRlcmF0aW9uc1tpXS5kKGRldGFjaGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZWxlbWVudChuYW1lKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG59XG5mdW5jdGlvbiBlbGVtZW50X2lzKG5hbWUsIGlzKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSwgeyBpcyB9KTtcbn1cbmZ1bmN0aW9uIG9iamVjdF93aXRob3V0X3Byb3BlcnRpZXMob2JqLCBleGNsdWRlKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0ge307XG4gICAgZm9yIChjb25zdCBrIGluIG9iaikge1xuICAgICAgICBpZiAoaGFzX3Byb3Aob2JqLCBrKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgJiYgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdGFyZ2V0W2tdID0gb2JqW2tdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBzdmdfZWxlbWVudChuYW1lKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBuYW1lKTtcbn1cbmZ1bmN0aW9uIHRleHQoZGF0YSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKTtcbn1cbmZ1bmN0aW9uIHNwYWNlKCkge1xuICAgIHJldHVybiB0ZXh0KCcgJyk7XG59XG5mdW5jdGlvbiBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGV4dCgnJyk7XG59XG5mdW5jdGlvbiBsaXN0ZW4obm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIHJldHVybiAoKSA9PiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcHJldmVudF9kZWZhdWx0KGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gc3RvcF9wcm9wYWdhdGlvbihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH07XG59XG5mdW5jdGlvbiBzZWxmKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMpXG4gICAgICAgICAgICBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gdHJ1c3RlZChmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoZXZlbnQuaXNUcnVzdGVkKVxuICAgICAgICAgICAgZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGF0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKVxuICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgIGVsc2UgaWYgKG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSkgIT09IHZhbHVlKVxuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHNldF9hdHRyaWJ1dGVzKG5vZGUsIGF0dHJpYnV0ZXMpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgZGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhub2RlLl9fcHJvdG9fXyk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICBpZiAoYXR0cmlidXRlc1trZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlLmNzc1RleHQgPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5ID09PSAnX192YWx1ZScpIHtcbiAgICAgICAgICAgIG5vZGUudmFsdWUgPSBub2RlW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGVzY3JpcHRvcnNba2V5XSAmJiBkZXNjcmlwdG9yc1trZXldLnNldCkge1xuICAgICAgICAgICAgbm9kZVtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBzZXRfc3ZnX2F0dHJpYnV0ZXMobm9kZSwgYXR0cmlidXRlcykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgYXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X2N1c3RvbV9lbGVtZW50X2RhdGEobm9kZSwgcHJvcCwgdmFsdWUpIHtcbiAgICBpZiAocHJvcCBpbiBub2RlKSB7XG4gICAgICAgIG5vZGVbcHJvcF0gPSB0eXBlb2Ygbm9kZVtwcm9wXSA9PT0gJ2Jvb2xlYW4nICYmIHZhbHVlID09PSAnJyA/IHRydWUgOiB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGF0dHIobm9kZSwgcHJvcCwgdmFsdWUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHhsaW5rX2F0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIG5vZGUuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCBhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGdldF9iaW5kaW5nX2dyb3VwX3ZhbHVlKGdyb3VwLCBfX3ZhbHVlLCBjaGVja2VkKSB7XG4gICAgY29uc3QgdmFsdWUgPSBuZXcgU2V0KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncm91cC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoZ3JvdXBbaV0uY2hlY2tlZClcbiAgICAgICAgICAgIHZhbHVlLmFkZChncm91cFtpXS5fX3ZhbHVlKTtcbiAgICB9XG4gICAgaWYgKCFjaGVja2VkKSB7XG4gICAgICAgIHZhbHVlLmRlbGV0ZShfX3ZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20odmFsdWUpO1xufVxuZnVuY3Rpb24gdG9fbnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAnJyA/IG51bGwgOiArdmFsdWU7XG59XG5mdW5jdGlvbiB0aW1lX3Jhbmdlc190b19hcnJheShyYW5nZXMpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGFycmF5LnB1c2goeyBzdGFydDogcmFuZ2VzLnN0YXJ0KGkpLCBlbmQ6IHJhbmdlcy5lbmQoaSkgfSk7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbn1cbmZ1bmN0aW9uIGNoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpO1xufVxuZnVuY3Rpb24gaW5pdF9jbGFpbV9pbmZvKG5vZGVzKSB7XG4gICAgaWYgKG5vZGVzLmNsYWltX2luZm8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBub2Rlcy5jbGFpbV9pbmZvID0geyBsYXN0X2luZGV4OiAwLCB0b3RhbF9jbGFpbWVkOiAwIH07XG4gICAgfVxufVxuZnVuY3Rpb24gY2xhaW1fbm9kZShub2RlcywgcHJlZGljYXRlLCBwcm9jZXNzTm9kZSwgY3JlYXRlTm9kZSwgZG9udFVwZGF0ZUxhc3RJbmRleCA9IGZhbHNlKSB7XG4gICAgLy8gVHJ5IHRvIGZpbmQgbm9kZXMgaW4gYW4gb3JkZXIgc3VjaCB0aGF0IHdlIGxlbmd0aGVuIHRoZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2VcbiAgICBpbml0X2NsYWltX2luZm8obm9kZXMpO1xuICAgIGNvbnN0IHJlc3VsdE5vZGUgPSAoKCkgPT4ge1xuICAgICAgICAvLyBXZSBmaXJzdCB0cnkgdG8gZmluZCBhbiBlbGVtZW50IGFmdGVyIHRoZSBwcmV2aW91cyBvbmVcbiAgICAgICAgZm9yIChsZXQgaSA9IG5vZGVzLmNsYWltX2luZm8ubGFzdF9pbmRleDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgICAgICBpZiAocHJlZGljYXRlKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSBwcm9jZXNzTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVwbGFjZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2Rlc1tpXSA9IHJlcGxhY2VtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWRvbnRVcGRhdGVMYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4ID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSB0cnkgdG8gZmluZCBvbmUgYmVmb3JlXG4gICAgICAgIC8vIFdlIGl0ZXJhdGUgaW4gcmV2ZXJzZSBzbyB0aGF0IHdlIGRvbid0IGdvIHRvbyBmYXIgYmFja1xuICAgICAgICBmb3IgKGxldCBpID0gbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgICAgIGlmIChwcmVkaWNhdGUobm9kZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXBsYWNlbWVudCA9IHByb2Nlc3NOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgIGlmIChyZXBsYWNlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzW2ldID0gcmVwbGFjZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZG9udFVwZGF0ZUxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXBsYWNlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHdlIHNwbGljZWQgYmVmb3JlIHRoZSBsYXN0X2luZGV4LCB3ZSBkZWNyZWFzZSBpdFxuICAgICAgICAgICAgICAgICAgICBub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXgtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgd2UgY2FuJ3QgZmluZCBhbnkgbWF0Y2hpbmcgbm9kZSwgd2UgY3JlYXRlIGEgbmV3IG9uZVxuICAgICAgICByZXR1cm4gY3JlYXRlTm9kZSgpO1xuICAgIH0pKCk7XG4gICAgcmVzdWx0Tm9kZS5jbGFpbV9vcmRlciA9IG5vZGVzLmNsYWltX2luZm8udG90YWxfY2xhaW1lZDtcbiAgICBub2Rlcy5jbGFpbV9pbmZvLnRvdGFsX2NsYWltZWQgKz0gMTtcbiAgICByZXR1cm4gcmVzdWx0Tm9kZTtcbn1cbmZ1bmN0aW9uIGNsYWltX2VsZW1lbnRfYmFzZShub2RlcywgbmFtZSwgYXR0cmlidXRlcywgY3JlYXRlX2VsZW1lbnQpIHtcbiAgICByZXR1cm4gY2xhaW1fbm9kZShub2RlcywgKG5vZGUpID0+IG5vZGUubm9kZU5hbWUgPT09IG5hbWUsIChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbW92ZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gbm9kZS5hdHRyaWJ1dGVzW2pdO1xuICAgICAgICAgICAgaWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZS5uYW1lXSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZS5wdXNoKGF0dHJpYnV0ZS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZW1vdmUuZm9yRWFjaCh2ID0+IG5vZGUucmVtb3ZlQXR0cmlidXRlKHYpKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LCAoKSA9PiBjcmVhdGVfZWxlbWVudChuYW1lKSk7XG59XG5mdW5jdGlvbiBjbGFpbV9lbGVtZW50KG5vZGVzLCBuYW1lLCBhdHRyaWJ1dGVzKSB7XG4gICAgcmV0dXJuIGNsYWltX2VsZW1lbnRfYmFzZShub2RlcywgbmFtZSwgYXR0cmlidXRlcywgZWxlbWVudCk7XG59XG5mdW5jdGlvbiBjbGFpbV9zdmdfZWxlbWVudChub2RlcywgbmFtZSwgYXR0cmlidXRlcykge1xuICAgIHJldHVybiBjbGFpbV9lbGVtZW50X2Jhc2Uobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMsIHN2Z19lbGVtZW50KTtcbn1cbmZ1bmN0aW9uIGNsYWltX3RleHQobm9kZXMsIGRhdGEpIHtcbiAgICByZXR1cm4gY2xhaW1fbm9kZShub2RlcywgKG5vZGUpID0+IG5vZGUubm9kZVR5cGUgPT09IDMsIChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFTdHIgPSAnJyArIGRhdGE7XG4gICAgICAgIGlmIChub2RlLmRhdGEuc3RhcnRzV2l0aChkYXRhU3RyKSkge1xuICAgICAgICAgICAgaWYgKG5vZGUuZGF0YS5sZW5ndGggIT09IGRhdGFTdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuc3BsaXRUZXh0KGRhdGFTdHIubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuZGF0YSA9IGRhdGFTdHI7XG4gICAgICAgIH1cbiAgICB9LCAoKSA9PiB0ZXh0KGRhdGEpLCB0cnVlIC8vIFRleHQgbm9kZXMgc2hvdWxkIG5vdCB1cGRhdGUgbGFzdCBpbmRleCBzaW5jZSBpdCBpcyBsaWtlbHkgbm90IHdvcnRoIGl0IHRvIGVsaW1pbmF0ZSBhbiBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIG9mIGFjdHVhbCBlbGVtZW50c1xuICAgICk7XG59XG5mdW5jdGlvbiBjbGFpbV9zcGFjZShub2Rlcykge1xuICAgIHJldHVybiBjbGFpbV90ZXh0KG5vZGVzLCAnICcpO1xufVxuZnVuY3Rpb24gZmluZF9jb21tZW50KG5vZGVzLCB0ZXh0LCBzdGFydCkge1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDggLyogY29tbWVudCBub2RlICovICYmIG5vZGUudGV4dENvbnRlbnQudHJpbSgpID09PSB0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZXMubGVuZ3RoO1xufVxuZnVuY3Rpb24gY2xhaW1faHRtbF90YWcobm9kZXMpIHtcbiAgICAvLyBmaW5kIGh0bWwgb3BlbmluZyB0YWdcbiAgICBjb25zdCBzdGFydF9pbmRleCA9IGZpbmRfY29tbWVudChub2RlcywgJ0hUTUxfVEFHX1NUQVJUJywgMCk7XG4gICAgY29uc3QgZW5kX2luZGV4ID0gZmluZF9jb21tZW50KG5vZGVzLCAnSFRNTF9UQUdfRU5EJywgc3RhcnRfaW5kZXgpO1xuICAgIGlmIChzdGFydF9pbmRleCA9PT0gZW5kX2luZGV4KSB7XG4gICAgICAgIHJldHVybiBuZXcgSHRtbFRhZ0h5ZHJhdGlvbigpO1xuICAgIH1cbiAgICBpbml0X2NsYWltX2luZm8obm9kZXMpO1xuICAgIGNvbnN0IGh0bWxfdGFnX25vZGVzID0gbm9kZXMuc3BsaWNlKHN0YXJ0X2luZGV4LCBlbmRfaW5kZXggLSBzdGFydF9pbmRleCArIDEpO1xuICAgIGRldGFjaChodG1sX3RhZ19ub2Rlc1swXSk7XG4gICAgZGV0YWNoKGh0bWxfdGFnX25vZGVzW2h0bWxfdGFnX25vZGVzLmxlbmd0aCAtIDFdKTtcbiAgICBjb25zdCBjbGFpbWVkX25vZGVzID0gaHRtbF90YWdfbm9kZXMuc2xpY2UoMSwgaHRtbF90YWdfbm9kZXMubGVuZ3RoIC0gMSk7XG4gICAgZm9yIChjb25zdCBuIG9mIGNsYWltZWRfbm9kZXMpIHtcbiAgICAgICAgbi5jbGFpbV9vcmRlciA9IG5vZGVzLmNsYWltX2luZm8udG90YWxfY2xhaW1lZDtcbiAgICAgICAgbm9kZXMuY2xhaW1faW5mby50b3RhbF9jbGFpbWVkICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBuZXcgSHRtbFRhZ0h5ZHJhdGlvbihjbGFpbWVkX25vZGVzKTtcbn1cbmZ1bmN0aW9uIHNldF9kYXRhKHRleHQsIGRhdGEpIHtcbiAgICBkYXRhID0gJycgKyBkYXRhO1xuICAgIGlmICh0ZXh0Lndob2xlVGV4dCAhPT0gZGF0YSlcbiAgICAgICAgdGV4dC5kYXRhID0gZGF0YTtcbn1cbmZ1bmN0aW9uIHNldF9pbnB1dF92YWx1ZShpbnB1dCwgdmFsdWUpIHtcbiAgICBpbnB1dC52YWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xufVxuZnVuY3Rpb24gc2V0X2lucHV0X3R5cGUoaW5wdXQsIHR5cGUpIHtcbiAgICB0cnkge1xuICAgICAgICBpbnB1dC50eXBlID0gdHlwZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNldF9zdHlsZShub2RlLCBrZXksIHZhbHVlLCBpbXBvcnRhbnQpIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgbm9kZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShrZXkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlLCBpbXBvcnRhbnQgPyAnaW1wb3J0YW50JyA6ICcnKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZWxlY3Rfb3B0aW9uKHNlbGVjdCwgdmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuICAgICAgICBpZiAob3B0aW9uLl9fdmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNlbGVjdC5zZWxlY3RlZEluZGV4ID0gLTE7IC8vIG5vIG9wdGlvbiBzaG91bGQgYmUgc2VsZWN0ZWRcbn1cbmZ1bmN0aW9uIHNlbGVjdF9vcHRpb25zKHNlbGVjdCwgdmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB+dmFsdWUuaW5kZXhPZihvcHRpb24uX192YWx1ZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2VsZWN0X3ZhbHVlKHNlbGVjdCkge1xuICAgIGNvbnN0IHNlbGVjdGVkX29wdGlvbiA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpIHx8IHNlbGVjdC5vcHRpb25zWzBdO1xuICAgIHJldHVybiBzZWxlY3RlZF9vcHRpb24gJiYgc2VsZWN0ZWRfb3B0aW9uLl9fdmFsdWU7XG59XG5mdW5jdGlvbiBzZWxlY3RfbXVsdGlwbGVfdmFsdWUoc2VsZWN0KSB7XG4gICAgcmV0dXJuIFtdLm1hcC5jYWxsKHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCc6Y2hlY2tlZCcpLCBvcHRpb24gPT4gb3B0aW9uLl9fdmFsdWUpO1xufVxuLy8gdW5mb3J0dW5hdGVseSB0aGlzIGNhbid0IGJlIGEgY29uc3RhbnQgYXMgdGhhdCB3b3VsZG4ndCBiZSB0cmVlLXNoYWtlYWJsZVxuLy8gc28gd2UgY2FjaGUgdGhlIHJlc3VsdCBpbnN0ZWFkXG5sZXQgY3Jvc3NvcmlnaW47XG5mdW5jdGlvbiBpc19jcm9zc29yaWdpbigpIHtcbiAgICBpZiAoY3Jvc3NvcmlnaW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjcm9zc29yaWdpbiA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB2b2lkIHdpbmRvdy5wYXJlbnQuZG9jdW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjcm9zc29yaWdpbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNyb3Nzb3JpZ2luO1xufVxuZnVuY3Rpb24gYWRkX3Jlc2l6ZV9saXN0ZW5lcihub2RlLCBmbikge1xuICAgIGNvbnN0IGNvbXB1dGVkX3N0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBpZiAoY29tcHV0ZWRfc3R5bGUucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIG5vZGUuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIH1cbiAgICBjb25zdCBpZnJhbWUgPSBlbGVtZW50KCdpZnJhbWUnKTtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBibG9jazsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7ICcgK1xuICAgICAgICAnb3ZlcmZsb3c6IGhpZGRlbjsgYm9yZGVyOiAwOyBvcGFjaXR5OiAwOyBwb2ludGVyLWV2ZW50czogbm9uZTsgei1pbmRleDogLTE7Jyk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIGlmcmFtZS50YWJJbmRleCA9IC0xO1xuICAgIGNvbnN0IGNyb3Nzb3JpZ2luID0gaXNfY3Jvc3NvcmlnaW4oKTtcbiAgICBsZXQgdW5zdWJzY3JpYmU7XG4gICAgaWYgKGNyb3Nzb3JpZ2luKSB7XG4gICAgICAgIGlmcmFtZS5zcmMgPSBcImRhdGE6dGV4dC9odG1sLDxzY3JpcHQ+b25yZXNpemU9ZnVuY3Rpb24oKXtwYXJlbnQucG9zdE1lc3NhZ2UoMCwnKicpfTwvc2NyaXB0PlwiO1xuICAgICAgICB1bnN1YnNjcmliZSA9IGxpc3Rlbih3aW5kb3csICdtZXNzYWdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBpZnJhbWUuY29udGVudFdpbmRvdylcbiAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmcmFtZS5zcmMgPSAnYWJvdXQ6YmxhbmsnO1xuICAgICAgICBpZnJhbWUub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUgPSBsaXN0ZW4oaWZyYW1lLmNvbnRlbnRXaW5kb3csICdyZXNpemUnLCBmbik7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGFwcGVuZChub2RlLCBpZnJhbWUpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmIChjcm9zc29yaWdpbikge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh1bnN1YnNjcmliZSAmJiBpZnJhbWUuY29udGVudFdpbmRvdykge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICBkZXRhY2goaWZyYW1lKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gdG9nZ2xlX2NsYXNzKGVsZW1lbnQsIG5hbWUsIHRvZ2dsZSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0W3RvZ2dsZSA/ICdhZGQnIDogJ3JlbW92ZSddKG5hbWUpO1xufVxuZnVuY3Rpb24gY3VzdG9tX2V2ZW50KHR5cGUsIGRldGFpbCwgYnViYmxlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgIGUuaW5pdEN1c3RvbUV2ZW50KHR5cGUsIGJ1YmJsZXMsIGZhbHNlLCBkZXRhaWwpO1xuICAgIHJldHVybiBlO1xufVxuZnVuY3Rpb24gcXVlcnlfc2VsZWN0b3JfYWxsKHNlbGVjdG9yLCBwYXJlbnQgPSBkb2N1bWVudC5ib2R5KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20ocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbn1cbmNsYXNzIEh0bWxUYWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmUgPSB0aGlzLm4gPSBudWxsO1xuICAgIH1cbiAgICBjKGh0bWwpIHtcbiAgICAgICAgdGhpcy5oKGh0bWwpO1xuICAgIH1cbiAgICBtKGh0bWwsIHRhcmdldCwgYW5jaG9yID0gbnVsbCkge1xuICAgICAgICBpZiAoIXRoaXMuZSkge1xuICAgICAgICAgICAgdGhpcy5lID0gZWxlbWVudCh0YXJnZXQubm9kZU5hbWUpO1xuICAgICAgICAgICAgdGhpcy50ID0gdGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy5jKGh0bWwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaShhbmNob3IpO1xuICAgIH1cbiAgICBoKGh0bWwpIHtcbiAgICAgICAgdGhpcy5lLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIHRoaXMubiA9IEFycmF5LmZyb20odGhpcy5lLmNoaWxkTm9kZXMpO1xuICAgIH1cbiAgICBpKGFuY2hvcikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaW5zZXJ0KHRoaXMudCwgdGhpcy5uW2ldLCBhbmNob3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHAoaHRtbCkge1xuICAgICAgICB0aGlzLmQoKTtcbiAgICAgICAgdGhpcy5oKGh0bWwpO1xuICAgICAgICB0aGlzLmkodGhpcy5hKTtcbiAgICB9XG4gICAgZCgpIHtcbiAgICAgICAgdGhpcy5uLmZvckVhY2goZGV0YWNoKTtcbiAgICB9XG59XG5jbGFzcyBIdG1sVGFnSHlkcmF0aW9uIGV4dGVuZHMgSHRtbFRhZyB7XG4gICAgY29uc3RydWN0b3IoY2xhaW1lZF9ub2Rlcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmUgPSB0aGlzLm4gPSBudWxsO1xuICAgICAgICB0aGlzLmwgPSBjbGFpbWVkX25vZGVzO1xuICAgIH1cbiAgICBjKGh0bWwpIHtcbiAgICAgICAgaWYgKHRoaXMubCkge1xuICAgICAgICAgICAgdGhpcy5uID0gdGhpcy5sO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIuYyhodG1sKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpKGFuY2hvcikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaW5zZXJ0X2h5ZHJhdGlvbih0aGlzLnQsIHRoaXMubltpXSwgYW5jaG9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGF0dHJpYnV0ZV90b19vYmplY3QoYXR0cmlidXRlcykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3QgYXR0cmlidXRlIG9mIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmVzdWx0W2F0dHJpYnV0ZS5uYW1lXSA9IGF0dHJpYnV0ZS52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGdldF9jdXN0b21fZWxlbWVudHNfc2xvdHMoZWxlbWVudCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgIHJlc3VsdFtub2RlLnNsb3QgfHwgJ2RlZmF1bHQnXSA9IHRydWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gd2UgbmVlZCB0byBzdG9yZSB0aGUgaW5mb3JtYXRpb24gZm9yIG11bHRpcGxlIGRvY3VtZW50cyBiZWNhdXNlIGEgU3ZlbHRlIGFwcGxpY2F0aW9uIGNvdWxkIGFsc28gY29udGFpbiBpZnJhbWVzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vc3ZlbHRlanMvc3ZlbHRlL2lzc3Vlcy8zNjI0XG5jb25zdCBtYW5hZ2VkX3N0eWxlcyA9IG5ldyBNYXAoKTtcbmxldCBhY3RpdmUgPSAwO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Rhcmtza3lhcHAvc3RyaW5nLWhhc2gvYmxvYi9tYXN0ZXIvaW5kZXguanNcbmZ1bmN0aW9uIGhhc2goc3RyKSB7XG4gICAgbGV0IGhhc2ggPSA1MzgxO1xuICAgIGxldCBpID0gc3RyLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKVxuICAgICAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgXiBzdHIuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gaGFzaCA+Pj4gMDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9zdHlsZV9pbmZvcm1hdGlvbihkb2MsIG5vZGUpIHtcbiAgICBjb25zdCBpbmZvID0geyBzdHlsZXNoZWV0OiBhcHBlbmRfZW1wdHlfc3R5bGVzaGVldChub2RlKSwgcnVsZXM6IHt9IH07XG4gICAgbWFuYWdlZF9zdHlsZXMuc2V0KGRvYywgaW5mbyk7XG4gICAgcmV0dXJuIGluZm87XG59XG5mdW5jdGlvbiBjcmVhdGVfcnVsZShub2RlLCBhLCBiLCBkdXJhdGlvbiwgZGVsYXksIGVhc2UsIGZuLCB1aWQgPSAwKSB7XG4gICAgY29uc3Qgc3RlcCA9IDE2LjY2NiAvIGR1cmF0aW9uO1xuICAgIGxldCBrZXlmcmFtZXMgPSAne1xcbic7XG4gICAgZm9yIChsZXQgcCA9IDA7IHAgPD0gMTsgcCArPSBzdGVwKSB7XG4gICAgICAgIGNvbnN0IHQgPSBhICsgKGIgLSBhKSAqIGVhc2UocCk7XG4gICAgICAgIGtleWZyYW1lcyArPSBwICogMTAwICsgYCV7JHtmbih0LCAxIC0gdCl9fVxcbmA7XG4gICAgfVxuICAgIGNvbnN0IHJ1bGUgPSBrZXlmcmFtZXMgKyBgMTAwJSB7JHtmbihiLCAxIC0gYil9fVxcbn1gO1xuICAgIGNvbnN0IG5hbWUgPSBgX19zdmVsdGVfJHtoYXNoKHJ1bGUpfV8ke3VpZH1gO1xuICAgIGNvbnN0IGRvYyA9IGdldF9yb290X2Zvcl9zdHlsZShub2RlKTtcbiAgICBjb25zdCB7IHN0eWxlc2hlZXQsIHJ1bGVzIH0gPSBtYW5hZ2VkX3N0eWxlcy5nZXQoZG9jKSB8fCBjcmVhdGVfc3R5bGVfaW5mb3JtYXRpb24oZG9jLCBub2RlKTtcbiAgICBpZiAoIXJ1bGVzW25hbWVdKSB7XG4gICAgICAgIHJ1bGVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgc3R5bGVzaGVldC5pbnNlcnRSdWxlKGBAa2V5ZnJhbWVzICR7bmFtZX0gJHtydWxlfWAsIHN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcbiAgICB9XG4gICAgY29uc3QgYW5pbWF0aW9uID0gbm9kZS5zdHlsZS5hbmltYXRpb24gfHwgJyc7XG4gICAgbm9kZS5zdHlsZS5hbmltYXRpb24gPSBgJHthbmltYXRpb24gPyBgJHthbmltYXRpb259LCBgIDogJyd9JHtuYW1lfSAke2R1cmF0aW9ufW1zIGxpbmVhciAke2RlbGF5fW1zIDEgYm90aGA7XG4gICAgYWN0aXZlICs9IDE7XG4gICAgcmV0dXJuIG5hbWU7XG59XG5mdW5jdGlvbiBkZWxldGVfcnVsZShub2RlLCBuYW1lKSB7XG4gICAgY29uc3QgcHJldmlvdXMgPSAobm9kZS5zdHlsZS5hbmltYXRpb24gfHwgJycpLnNwbGl0KCcsICcpO1xuICAgIGNvbnN0IG5leHQgPSBwcmV2aW91cy5maWx0ZXIobmFtZVxuICAgICAgICA/IGFuaW0gPT4gYW5pbS5pbmRleE9mKG5hbWUpIDwgMCAvLyByZW1vdmUgc3BlY2lmaWMgYW5pbWF0aW9uXG4gICAgICAgIDogYW5pbSA9PiBhbmltLmluZGV4T2YoJ19fc3ZlbHRlJykgPT09IC0xIC8vIHJlbW92ZSBhbGwgU3ZlbHRlIGFuaW1hdGlvbnNcbiAgICApO1xuICAgIGNvbnN0IGRlbGV0ZWQgPSBwcmV2aW91cy5sZW5ndGggLSBuZXh0Lmxlbmd0aDtcbiAgICBpZiAoZGVsZXRlZCkge1xuICAgICAgICBub2RlLnN0eWxlLmFuaW1hdGlvbiA9IG5leHQuam9pbignLCAnKTtcbiAgICAgICAgYWN0aXZlIC09IGRlbGV0ZWQ7XG4gICAgICAgIGlmICghYWN0aXZlKVxuICAgICAgICAgICAgY2xlYXJfcnVsZXMoKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjbGVhcl9ydWxlcygpIHtcbiAgICByYWYoKCkgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBtYW5hZ2VkX3N0eWxlcy5mb3JFYWNoKGluZm8gPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBzdHlsZXNoZWV0IH0gPSBpbmZvO1xuICAgICAgICAgICAgbGV0IGkgPSBzdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlIChpLS0pXG4gICAgICAgICAgICAgICAgc3R5bGVzaGVldC5kZWxldGVSdWxlKGkpO1xuICAgICAgICAgICAgaW5mby5ydWxlcyA9IHt9O1xuICAgICAgICB9KTtcbiAgICAgICAgbWFuYWdlZF9zdHlsZXMuY2xlYXIoKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlX2FuaW1hdGlvbihub2RlLCBmcm9tLCBmbiwgcGFyYW1zKSB7XG4gICAgaWYgKCFmcm9tKVxuICAgICAgICByZXR1cm4gbm9vcDtcbiAgICBjb25zdCB0byA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKGZyb20ubGVmdCA9PT0gdG8ubGVmdCAmJiBmcm9tLnJpZ2h0ID09PSB0by5yaWdodCAmJiBmcm9tLnRvcCA9PT0gdG8udG9wICYmIGZyb20uYm90dG9tID09PSB0by5ib3R0b20pXG4gICAgICAgIHJldHVybiBub29wO1xuICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIFxuICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogc2hvdWxkIHRoaXMgYmUgc2VwYXJhdGVkIGZyb20gZGVzdHJ1Y3R1cmluZz8gT3Igc3RhcnQvZW5kIGFkZGVkIHRvIHB1YmxpYyBhcGkgYW5kIGRvY3VtZW50YXRpb24/XG4gICAgc3RhcnQ6IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5LCBcbiAgICAvLyBAdHMtaWdub3JlIHRvZG86XG4gICAgZW5kID0gc3RhcnRfdGltZSArIGR1cmF0aW9uLCB0aWNrID0gbm9vcCwgY3NzIH0gPSBmbihub2RlLCB7IGZyb20sIHRvIH0sIHBhcmFtcyk7XG4gICAgbGV0IHJ1bm5pbmcgPSB0cnVlO1xuICAgIGxldCBzdGFydGVkID0gZmFsc2U7XG4gICAgbGV0IG5hbWU7XG4gICAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgIG5hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAwLCAxLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRlbGF5KSB7XG4gICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgbmFtZSk7XG4gICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgbG9vcChub3cgPT4ge1xuICAgICAgICBpZiAoIXN0YXJ0ZWQgJiYgbm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydGVkICYmIG5vdyA+PSBlbmQpIHtcbiAgICAgICAgICAgIHRpY2soMSwgMCk7XG4gICAgICAgICAgICBzdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFydW5uaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBub3cgLSBzdGFydF90aW1lO1xuICAgICAgICAgICAgY29uc3QgdCA9IDAgKyAxICogZWFzaW5nKHAgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICB0aWNrKHQsIDEgLSB0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICBzdGFydCgpO1xuICAgIHRpY2soMCwgMSk7XG4gICAgcmV0dXJuIHN0b3A7XG59XG5mdW5jdGlvbiBmaXhfcG9zaXRpb24obm9kZSkge1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBpZiAoc3R5bGUucG9zaXRpb24gIT09ICdhYnNvbHV0ZScgJiYgc3R5bGUucG9zaXRpb24gIT09ICdmaXhlZCcpIHtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBzdHlsZTtcbiAgICAgICAgY29uc3QgYSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIG5vZGUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBub2RlLnN0eWxlLndpZHRoID0gd2lkdGg7XG4gICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBhZGRfdHJhbnNmb3JtKG5vZGUsIGEpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZF90cmFuc2Zvcm0obm9kZSwgYSkge1xuICAgIGNvbnN0IGIgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChhLmxlZnQgIT09IGIubGVmdCB8fCBhLnRvcCAhPT0gYi50b3ApIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBzdHlsZS50cmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogc3R5bGUudHJhbnNmb3JtO1xuICAgICAgICBub2RlLnN0eWxlLnRyYW5zZm9ybSA9IGAke3RyYW5zZm9ybX0gdHJhbnNsYXRlKCR7YS5sZWZ0IC0gYi5sZWZ0fXB4LCAke2EudG9wIC0gYi50b3B9cHgpYDtcbiAgICB9XG59XG5cbmxldCBjdXJyZW50X2NvbXBvbmVudDtcbmZ1bmN0aW9uIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICBjdXJyZW50X2NvbXBvbmVudCA9IGNvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGdldF9jdXJyZW50X2NvbXBvbmVudCgpIHtcbiAgICBpZiAoIWN1cnJlbnRfY29tcG9uZW50KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Z1bmN0aW9uIGNhbGxlZCBvdXRzaWRlIGNvbXBvbmVudCBpbml0aWFsaXphdGlvbicpO1xuICAgIHJldHVybiBjdXJyZW50X2NvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGJlZm9yZVVwZGF0ZShmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmJlZm9yZV91cGRhdGUucHVzaChmbik7XG59XG5mdW5jdGlvbiBvbk1vdW50KGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQub25fbW91bnQucHVzaChmbik7XG59XG5mdW5jdGlvbiBhZnRlclVwZGF0ZShmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmFmdGVyX3VwZGF0ZS5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIG9uRGVzdHJveShmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLm9uX2Rlc3Ryb3kucHVzaChmbik7XG59XG5mdW5jdGlvbiBjcmVhdGVFdmVudERpc3BhdGNoZXIoKSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCk7XG4gICAgcmV0dXJuICh0eXBlLCBkZXRhaWwpID0+IHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gY29tcG9uZW50LiQkLmNhbGxiYWNrc1t0eXBlXTtcbiAgICAgICAgaWYgKGNhbGxiYWNrcykge1xuICAgICAgICAgICAgLy8gVE9ETyBhcmUgdGhlcmUgc2l0dWF0aW9ucyB3aGVyZSBldmVudHMgY291bGQgYmUgZGlzcGF0Y2hlZFxuICAgICAgICAgICAgLy8gaW4gYSBzZXJ2ZXIgKG5vbi1ET00pIGVudmlyb25tZW50P1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBjdXN0b21fZXZlbnQodHlwZSwgZGV0YWlsKTtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5zbGljZSgpLmZvckVhY2goZm4gPT4ge1xuICAgICAgICAgICAgICAgIGZuLmNhbGwoY29tcG9uZW50LCBldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBzZXRDb250ZXh0KGtleSwgY29udGV4dCkge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQuc2V0KGtleSwgY29udGV4dCk7XG59XG5mdW5jdGlvbiBnZXRDb250ZXh0KGtleSkge1xuICAgIHJldHVybiBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LmdldChrZXkpO1xufVxuZnVuY3Rpb24gZ2V0QWxsQ29udGV4dHMoKSB7XG4gICAgcmV0dXJuIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQ7XG59XG5mdW5jdGlvbiBoYXNDb250ZXh0KGtleSkge1xuICAgIHJldHVybiBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LmhhcyhrZXkpO1xufVxuLy8gVE9ETyBmaWd1cmUgb3V0IGlmIHdlIHN0aWxsIHdhbnQgdG8gc3VwcG9ydFxuLy8gc2hvcnRoYW5kIGV2ZW50cywgb3IgaWYgd2Ugd2FudCB0byBpbXBsZW1lbnRcbi8vIGEgcmVhbCBidWJibGluZyBtZWNoYW5pc21cbmZ1bmN0aW9uIGJ1YmJsZShjb21wb25lbnQsIGV2ZW50KSB7XG4gICAgY29uc3QgY2FsbGJhY2tzID0gY29tcG9uZW50LiQkLmNhbGxiYWNrc1tldmVudC50eXBlXTtcbiAgICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY2FsbGJhY2tzLnNsaWNlKCkuZm9yRWFjaChmbiA9PiBmbi5jYWxsKHRoaXMsIGV2ZW50KSk7XG4gICAgfVxufVxuXG5jb25zdCBkaXJ0eV9jb21wb25lbnRzID0gW107XG5jb25zdCBpbnRyb3MgPSB7IGVuYWJsZWQ6IGZhbHNlIH07XG5jb25zdCBiaW5kaW5nX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgcmVuZGVyX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgZmx1c2hfY2FsbGJhY2tzID0gW107XG5jb25zdCByZXNvbHZlZF9wcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5sZXQgdXBkYXRlX3NjaGVkdWxlZCA9IGZhbHNlO1xuZnVuY3Rpb24gc2NoZWR1bGVfdXBkYXRlKCkge1xuICAgIGlmICghdXBkYXRlX3NjaGVkdWxlZCkge1xuICAgICAgICB1cGRhdGVfc2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgICAgcmVzb2x2ZWRfcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9XG59XG5mdW5jdGlvbiB0aWNrKCkge1xuICAgIHNjaGVkdWxlX3VwZGF0ZSgpO1xuICAgIHJldHVybiByZXNvbHZlZF9wcm9taXNlO1xufVxuZnVuY3Rpb24gYWRkX3JlbmRlcl9jYWxsYmFjayhmbikge1xuICAgIHJlbmRlcl9jYWxsYmFja3MucHVzaChmbik7XG59XG5mdW5jdGlvbiBhZGRfZmx1c2hfY2FsbGJhY2soZm4pIHtcbiAgICBmbHVzaF9jYWxsYmFja3MucHVzaChmbik7XG59XG4vLyBmbHVzaCgpIGNhbGxzIGNhbGxiYWNrcyBpbiB0aGlzIG9yZGVyOlxuLy8gMS4gQWxsIGJlZm9yZVVwZGF0ZSBjYWxsYmFja3MsIGluIG9yZGVyOiBwYXJlbnRzIGJlZm9yZSBjaGlsZHJlblxuLy8gMi4gQWxsIGJpbmQ6dGhpcyBjYWxsYmFja3MsIGluIHJldmVyc2Ugb3JkZXI6IGNoaWxkcmVuIGJlZm9yZSBwYXJlbnRzLlxuLy8gMy4gQWxsIGFmdGVyVXBkYXRlIGNhbGxiYWNrcywgaW4gb3JkZXI6IHBhcmVudHMgYmVmb3JlIGNoaWxkcmVuLiBFWENFUFRcbi8vICAgIGZvciBhZnRlclVwZGF0ZXMgY2FsbGVkIGR1cmluZyB0aGUgaW5pdGlhbCBvbk1vdW50LCB3aGljaCBhcmUgY2FsbGVkIGluXG4vLyAgICByZXZlcnNlIG9yZGVyOiBjaGlsZHJlbiBiZWZvcmUgcGFyZW50cy5cbi8vIFNpbmNlIGNhbGxiYWNrcyBtaWdodCB1cGRhdGUgY29tcG9uZW50IHZhbHVlcywgd2hpY2ggY291bGQgdHJpZ2dlciBhbm90aGVyXG4vLyBjYWxsIHRvIGZsdXNoKCksIHRoZSBmb2xsb3dpbmcgc3RlcHMgZ3VhcmQgYWdhaW5zdCB0aGlzOlxuLy8gMS4gRHVyaW5nIGJlZm9yZVVwZGF0ZSwgYW55IHVwZGF0ZWQgY29tcG9uZW50cyB3aWxsIGJlIGFkZGVkIHRvIHRoZVxuLy8gICAgZGlydHlfY29tcG9uZW50cyBhcnJheSBhbmQgd2lsbCBjYXVzZSBhIHJlZW50cmFudCBjYWxsIHRvIGZsdXNoKCkuIEJlY2F1c2Vcbi8vICAgIHRoZSBmbHVzaCBpbmRleCBpcyBrZXB0IG91dHNpZGUgdGhlIGZ1bmN0aW9uLCB0aGUgcmVlbnRyYW50IGNhbGwgd2lsbCBwaWNrXG4vLyAgICB1cCB3aGVyZSB0aGUgZWFybGllciBjYWxsIGxlZnQgb2ZmIGFuZCBnbyB0aHJvdWdoIGFsbCBkaXJ0eSBjb21wb25lbnRzLiBUaGVcbi8vICAgIGN1cnJlbnRfY29tcG9uZW50IHZhbHVlIGlzIHNhdmVkIGFuZCByZXN0b3JlZCBzbyB0aGF0IHRoZSByZWVudHJhbnQgY2FsbCB3aWxsXG4vLyAgICBub3QgaW50ZXJmZXJlIHdpdGggdGhlIFwicGFyZW50XCIgZmx1c2goKSBjYWxsLlxuLy8gMi4gYmluZDp0aGlzIGNhbGxiYWNrcyBjYW5ub3QgdHJpZ2dlciBuZXcgZmx1c2goKSBjYWxscy5cbi8vIDMuIER1cmluZyBhZnRlclVwZGF0ZSwgYW55IHVwZGF0ZWQgY29tcG9uZW50cyB3aWxsIE5PVCBoYXZlIHRoZWlyIGFmdGVyVXBkYXRlXG4vLyAgICBjYWxsYmFjayBjYWxsZWQgYSBzZWNvbmQgdGltZTsgdGhlIHNlZW5fY2FsbGJhY2tzIHNldCwgb3V0c2lkZSB0aGUgZmx1c2goKVxuLy8gICAgZnVuY3Rpb24sIGd1YXJhbnRlZXMgdGhpcyBiZWhhdmlvci5cbmNvbnN0IHNlZW5fY2FsbGJhY2tzID0gbmV3IFNldCgpO1xubGV0IGZsdXNoaWR4ID0gMDsgLy8gRG8gKm5vdCogbW92ZSB0aGlzIGluc2lkZSB0aGUgZmx1c2goKSBmdW5jdGlvblxuZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgY29uc3Qgc2F2ZWRfY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG4gICAgZG8ge1xuICAgICAgICAvLyBmaXJzdCwgY2FsbCBiZWZvcmVVcGRhdGUgZnVuY3Rpb25zXG4gICAgICAgIC8vIGFuZCB1cGRhdGUgY29tcG9uZW50c1xuICAgICAgICB3aGlsZSAoZmx1c2hpZHggPCBkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gZGlydHlfY29tcG9uZW50c1tmbHVzaGlkeF07XG4gICAgICAgICAgICBmbHVzaGlkeCsrO1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICB1cGRhdGUoY29tcG9uZW50LiQkKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQobnVsbCk7XG4gICAgICAgIGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoID0gMDtcbiAgICAgICAgZmx1c2hpZHggPSAwO1xuICAgICAgICB3aGlsZSAoYmluZGluZ19jYWxsYmFja3MubGVuZ3RoKVxuICAgICAgICAgICAgYmluZGluZ19jYWxsYmFja3MucG9wKCkoKTtcbiAgICAgICAgLy8gdGhlbiwgb25jZSBjb21wb25lbnRzIGFyZSB1cGRhdGVkLCBjYWxsXG4gICAgICAgIC8vIGFmdGVyVXBkYXRlIGZ1bmN0aW9ucy4gVGhpcyBtYXkgY2F1c2VcbiAgICAgICAgLy8gc3Vic2VxdWVudCB1cGRhdGVzLi4uXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVuZGVyX2NhbGxiYWNrcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSByZW5kZXJfY2FsbGJhY2tzW2ldO1xuICAgICAgICAgICAgaWYgKCFzZWVuX2NhbGxiYWNrcy5oYXMoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgLy8gLi4uc28gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBsb29wc1xuICAgICAgICAgICAgICAgIHNlZW5fY2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZW5kZXJfY2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gICAgfSB3aGlsZSAoZGlydHlfY29tcG9uZW50cy5sZW5ndGgpO1xuICAgIHdoaWxlIChmbHVzaF9jYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgICAgIGZsdXNoX2NhbGxiYWNrcy5wb3AoKSgpO1xuICAgIH1cbiAgICB1cGRhdGVfc2NoZWR1bGVkID0gZmFsc2U7XG4gICAgc2Vlbl9jYWxsYmFja3MuY2xlYXIoKTtcbiAgICBzZXRfY3VycmVudF9jb21wb25lbnQoc2F2ZWRfY29tcG9uZW50KTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZSgkJCkge1xuICAgIGlmICgkJC5mcmFnbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAkJC51cGRhdGUoKTtcbiAgICAgICAgcnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTtcbiAgICAgICAgY29uc3QgZGlydHkgPSAkJC5kaXJ0eTtcbiAgICAgICAgJCQuZGlydHkgPSBbLTFdO1xuICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5wKCQkLmN0eCwgZGlydHkpO1xuICAgICAgICAkJC5hZnRlcl91cGRhdGUuZm9yRWFjaChhZGRfcmVuZGVyX2NhbGxiYWNrKTtcbiAgICB9XG59XG5cbmxldCBwcm9taXNlO1xuZnVuY3Rpb24gd2FpdCgpIHtcbiAgICBpZiAoIXByb21pc2UpIHtcbiAgICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICBwcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGRpc3BhdGNoKG5vZGUsIGRpcmVjdGlvbiwga2luZCkge1xuICAgIG5vZGUuZGlzcGF0Y2hFdmVudChjdXN0b21fZXZlbnQoYCR7ZGlyZWN0aW9uID8gJ2ludHJvJyA6ICdvdXRybyd9JHtraW5kfWApKTtcbn1cbmNvbnN0IG91dHJvaW5nID0gbmV3IFNldCgpO1xubGV0IG91dHJvcztcbmZ1bmN0aW9uIGdyb3VwX291dHJvcygpIHtcbiAgICBvdXRyb3MgPSB7XG4gICAgICAgIHI6IDAsXG4gICAgICAgIGM6IFtdLFxuICAgICAgICBwOiBvdXRyb3MgLy8gcGFyZW50IGdyb3VwXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNoZWNrX291dHJvcygpIHtcbiAgICBpZiAoIW91dHJvcy5yKSB7XG4gICAgICAgIHJ1bl9hbGwob3V0cm9zLmMpO1xuICAgIH1cbiAgICBvdXRyb3MgPSBvdXRyb3MucDtcbn1cbmZ1bmN0aW9uIHRyYW5zaXRpb25faW4oYmxvY2ssIGxvY2FsKSB7XG4gICAgaWYgKGJsb2NrICYmIGJsb2NrLmkpIHtcbiAgICAgICAgb3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcbiAgICAgICAgYmxvY2suaShsb2NhbCk7XG4gICAgfVxufVxuZnVuY3Rpb24gdHJhbnNpdGlvbl9vdXQoYmxvY2ssIGxvY2FsLCBkZXRhY2gsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGJsb2NrICYmIGJsb2NrLm8pIHtcbiAgICAgICAgaWYgKG91dHJvaW5nLmhhcyhibG9jaykpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIG91dHJvaW5nLmFkZChibG9jayk7XG4gICAgICAgIG91dHJvcy5jLnB1c2goKCkgPT4ge1xuICAgICAgICAgICAgb3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGlmIChkZXRhY2gpXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrLmQoMSk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJsb2NrLm8obG9jYWwpO1xuICAgIH1cbn1cbmNvbnN0IG51bGxfdHJhbnNpdGlvbiA9IHsgZHVyYXRpb246IDAgfTtcbmZ1bmN0aW9uIGNyZWF0ZV9pbl90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMpIHtcbiAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zKTtcbiAgICBsZXQgcnVubmluZyA9IGZhbHNlO1xuICAgIGxldCBhbmltYXRpb25fbmFtZTtcbiAgICBsZXQgdGFzaztcbiAgICBsZXQgdWlkID0gMDtcbiAgICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdvKCkge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAwLCAxLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzLCB1aWQrKyk7XG4gICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5O1xuICAgICAgICBjb25zdCBlbmRfdGltZSA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbjtcbiAgICAgICAgaWYgKHRhc2spXG4gICAgICAgICAgICB0YXNrLmFib3J0KCk7XG4gICAgICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIHRydWUsICdzdGFydCcpKTtcbiAgICAgICAgdGFzayA9IGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBlbmRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aWNrKDEsIDApO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCB0cnVlLCAnZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBzdGFydF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBlYXNpbmcoKG5vdyAtIHN0YXJ0X3RpbWUpIC8gZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aWNrKHQsIDEgLSB0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcnVubmluZztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBzdGFydGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnQoKSB7XG4gICAgICAgICAgICBpZiAoc3RhcnRlZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUpO1xuICAgICAgICAgICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICBjb25maWcgPSBjb25maWcoKTtcbiAgICAgICAgICAgICAgICB3YWl0KCkudGhlbihnbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBpbnZhbGlkYXRlKCkge1xuICAgICAgICAgICAgc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBlbmQoKSB7XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlX291dF90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMpIHtcbiAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zKTtcbiAgICBsZXQgcnVubmluZyA9IHRydWU7XG4gICAgbGV0IGFuaW1hdGlvbl9uYW1lO1xuICAgIGNvbnN0IGdyb3VwID0gb3V0cm9zO1xuICAgIGdyb3VwLnIgKz0gMTtcbiAgICBmdW5jdGlvbiBnbygpIHtcbiAgICAgICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgdGljayA9IG5vb3AsIGNzcyB9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcbiAgICAgICAgaWYgKGNzcylcbiAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMSwgMCwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcyk7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5O1xuICAgICAgICBjb25zdCBlbmRfdGltZSA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbjtcbiAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCBmYWxzZSwgJ3N0YXJ0JykpO1xuICAgICAgICBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gZW5kX3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGljaygwLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgZmFsc2UsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEtLWdyb3VwLnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2lsbCByZXN1bHQgaW4gYGVuZCgpYCBiZWluZyBjYWxsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSBkb24ndCBuZWVkIHRvIGNsZWFuIHVwIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bl9hbGwoZ3JvdXAuYyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IGVhc2luZygobm93IC0gc3RhcnRfdGltZSkgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRpY2soMSAtIHQsIHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBydW5uaW5nO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgd2FpdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uZmlnID0gY29uZmlnKCk7XG4gICAgICAgICAgICBnbygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGdvKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGVuZChyZXNldCkge1xuICAgICAgICAgICAgaWYgKHJlc2V0ICYmIGNvbmZpZy50aWNrKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLnRpY2soMSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25fbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuICAgICAgICAgICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBjcmVhdGVfYmlkaXJlY3Rpb25hbF90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMsIGludHJvKSB7XG4gICAgbGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcyk7XG4gICAgbGV0IHQgPSBpbnRybyA/IDAgOiAxO1xuICAgIGxldCBydW5uaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgIGxldCBwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgIGxldCBhbmltYXRpb25fbmFtZSA9IG51bGw7XG4gICAgZnVuY3Rpb24gY2xlYXJfYW5pbWF0aW9uKCkge1xuICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluaXQocHJvZ3JhbSwgZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgZCA9IChwcm9ncmFtLmIgLSB0KTtcbiAgICAgICAgZHVyYXRpb24gKj0gTWF0aC5hYnMoZCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhOiB0LFxuICAgICAgICAgICAgYjogcHJvZ3JhbS5iLFxuICAgICAgICAgICAgZCxcbiAgICAgICAgICAgIGR1cmF0aW9uLFxuICAgICAgICAgICAgc3RhcnQ6IHByb2dyYW0uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IHByb2dyYW0uc3RhcnQgKyBkdXJhdGlvbixcbiAgICAgICAgICAgIGdyb3VwOiBwcm9ncmFtLmdyb3VwXG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdvKGIpIHtcbiAgICAgICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgdGljayA9IG5vb3AsIGNzcyB9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcbiAgICAgICAgY29uc3QgcHJvZ3JhbSA9IHtcbiAgICAgICAgICAgIHN0YXJ0OiBub3coKSArIGRlbGF5LFxuICAgICAgICAgICAgYlxuICAgICAgICB9O1xuICAgICAgICBpZiAoIWIpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG4gICAgICAgICAgICBwcm9ncmFtLmdyb3VwID0gb3V0cm9zO1xuICAgICAgICAgICAgb3V0cm9zLnIgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocnVubmluZ19wcm9ncmFtIHx8IHBlbmRpbmdfcHJvZ3JhbSkge1xuICAgICAgICAgICAgcGVuZGluZ19wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIHRoaXMgaXMgYW4gaW50cm8sIGFuZCB0aGVyZSdzIGEgZGVsYXksIHdlIG5lZWQgdG8gZG9cbiAgICAgICAgICAgIC8vIGFuIGluaXRpYWwgdGljayBhbmQvb3IgYXBwbHkgQ1NTIGFuaW1hdGlvbiBpbW1lZGlhdGVseVxuICAgICAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgdCwgYiwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYilcbiAgICAgICAgICAgICAgICB0aWNrKDAsIDEpO1xuICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gaW5pdChwcm9ncmFtLCBkdXJhdGlvbik7XG4gICAgICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIGIsICdzdGFydCcpKTtcbiAgICAgICAgICAgIGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGVuZGluZ19wcm9ncmFtICYmIG5vdyA+IHBlbmRpbmdfcHJvZ3JhbS5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBpbml0KHBlbmRpbmdfcHJvZ3JhbSwgZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCBydW5uaW5nX3Byb2dyYW0uYiwgJ3N0YXJ0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCB0LCBydW5uaW5nX3Byb2dyYW0uYiwgcnVubmluZ19wcm9ncmFtLmR1cmF0aW9uLCAwLCBlYXNpbmcsIGNvbmZpZy5jc3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChydW5uaW5nX3Byb2dyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBydW5uaW5nX3Byb2dyYW0uZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrKHQgPSBydW5uaW5nX3Byb2dyYW0uYiwgMSAtIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgcnVubmluZ19wcm9ncmFtLmIsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGVuZGluZ19wcm9ncmFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UncmUgZG9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChydW5uaW5nX3Byb2dyYW0uYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnRybyDigJQgd2UgY2FuIHRpZHkgdXAgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvdXRybyDigJQgbmVlZHMgdG8gYmUgY29vcmRpbmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEtLXJ1bm5pbmdfcHJvZ3JhbS5ncm91cC5yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVuX2FsbChydW5uaW5nX3Byb2dyYW0uZ3JvdXAuYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChub3cgPj0gcnVubmluZ19wcm9ncmFtLnN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gbm93IC0gcnVubmluZ19wcm9ncmFtLnN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IHJ1bm5pbmdfcHJvZ3JhbS5hICsgcnVubmluZ19wcm9ncmFtLmQgKiBlYXNpbmcocCAvIHJ1bm5pbmdfcHJvZ3JhbS5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrKHQsIDEgLSB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gISEocnVubmluZ19wcm9ncmFtIHx8IHBlbmRpbmdfcHJvZ3JhbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBydW4oYikge1xuICAgICAgICAgICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICB3YWl0KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnID0gY29uZmlnKCk7XG4gICAgICAgICAgICAgICAgICAgIGdvKGIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ28oYik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVuZCgpIHtcbiAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gcGVuZGluZ19wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGhhbmRsZV9wcm9taXNlKHByb21pc2UsIGluZm8pIHtcbiAgICBjb25zdCB0b2tlbiA9IGluZm8udG9rZW4gPSB7fTtcbiAgICBmdW5jdGlvbiB1cGRhdGUodHlwZSwgaW5kZXgsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGluZm8udG9rZW4gIT09IHRva2VuKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpbmZvLnJlc29sdmVkID0gdmFsdWU7XG4gICAgICAgIGxldCBjaGlsZF9jdHggPSBpbmZvLmN0eDtcbiAgICAgICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjaGlsZF9jdHggPSBjaGlsZF9jdHguc2xpY2UoKTtcbiAgICAgICAgICAgIGNoaWxkX2N0eFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYmxvY2sgPSB0eXBlICYmIChpbmZvLmN1cnJlbnQgPSB0eXBlKShjaGlsZF9jdHgpO1xuICAgICAgICBsZXQgbmVlZHNfZmx1c2ggPSBmYWxzZTtcbiAgICAgICAgaWYgKGluZm8uYmxvY2spIHtcbiAgICAgICAgICAgIGlmIChpbmZvLmJsb2Nrcykge1xuICAgICAgICAgICAgICAgIGluZm8uYmxvY2tzLmZvckVhY2goKGJsb2NrLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpICE9PSBpbmRleCAmJiBibG9jaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBfb3V0cm9zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uX291dChibG9jaywgMSwgMSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmZvLmJsb2Nrc1tpXSA9PT0gYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mby5ibG9ja3NbaV0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tfb3V0cm9zKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGluZm8uYmxvY2suZCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJsb2NrLmMoKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb25faW4oYmxvY2ssIDEpO1xuICAgICAgICAgICAgYmxvY2subShpbmZvLm1vdW50KCksIGluZm8uYW5jaG9yKTtcbiAgICAgICAgICAgIG5lZWRzX2ZsdXNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpbmZvLmJsb2NrID0gYmxvY2s7XG4gICAgICAgIGlmIChpbmZvLmJsb2NrcylcbiAgICAgICAgICAgIGluZm8uYmxvY2tzW2luZGV4XSA9IGJsb2NrO1xuICAgICAgICBpZiAobmVlZHNfZmx1c2gpIHtcbiAgICAgICAgICAgIGZsdXNoKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzX3Byb21pc2UocHJvbWlzZSkpIHtcbiAgICAgICAgY29uc3QgY3VycmVudF9jb21wb25lbnQgPSBnZXRfY3VycmVudF9jb21wb25lbnQoKTtcbiAgICAgICAgcHJvbWlzZS50aGVuKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjdXJyZW50X2NvbXBvbmVudCk7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby50aGVuLCAxLCBpbmZvLnZhbHVlLCB2YWx1ZSk7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQobnVsbCk7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjdXJyZW50X2NvbXBvbmVudCk7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby5jYXRjaCwgMiwgaW5mby5lcnJvciwgZXJyb3IpO1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KG51bGwpO1xuICAgICAgICAgICAgaWYgKCFpbmZvLmhhc0NhdGNoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBpZiB3ZSBwcmV2aW91c2x5IGhhZCBhIHRoZW4vY2F0Y2ggYmxvY2ssIGRlc3Ryb3kgaXRcbiAgICAgICAgaWYgKGluZm8uY3VycmVudCAhPT0gaW5mby5wZW5kaW5nKSB7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby5wZW5kaW5nLCAwKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoaW5mby5jdXJyZW50ICE9PSBpbmZvLnRoZW4pIHtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLnRoZW4sIDEsIGluZm8udmFsdWUsIHByb21pc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5mby5yZXNvbHZlZCA9IHByb21pc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gdXBkYXRlX2F3YWl0X2Jsb2NrX2JyYW5jaChpbmZvLCBjdHgsIGRpcnR5KSB7XG4gICAgY29uc3QgY2hpbGRfY3R4ID0gY3R4LnNsaWNlKCk7XG4gICAgY29uc3QgeyByZXNvbHZlZCB9ID0gaW5mbztcbiAgICBpZiAoaW5mby5jdXJyZW50ID09PSBpbmZvLnRoZW4pIHtcbiAgICAgICAgY2hpbGRfY3R4W2luZm8udmFsdWVdID0gcmVzb2x2ZWQ7XG4gICAgfVxuICAgIGlmIChpbmZvLmN1cnJlbnQgPT09IGluZm8uY2F0Y2gpIHtcbiAgICAgICAgY2hpbGRfY3R4W2luZm8uZXJyb3JdID0gcmVzb2x2ZWQ7XG4gICAgfVxuICAgIGluZm8uYmxvY2sucChjaGlsZF9jdHgsIGRpcnR5KTtcbn1cblxuY29uc3QgZ2xvYmFscyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgID8gd2luZG93XG4gICAgOiB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyBnbG9iYWxUaGlzXG4gICAgICAgIDogZ2xvYmFsKTtcblxuZnVuY3Rpb24gZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgYmxvY2suZCgxKTtcbiAgICBsb29rdXAuZGVsZXRlKGJsb2NrLmtleSk7XG59XG5mdW5jdGlvbiBvdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgdHJhbnNpdGlvbl9vdXQoYmxvY2ssIDEsIDEsICgpID0+IHtcbiAgICAgICAgbG9va3VwLmRlbGV0ZShibG9jay5rZXkpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZml4X2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICBibG9jay5mKCk7XG4gICAgZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKTtcbn1cbmZ1bmN0aW9uIGZpeF9hbmRfb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIGJsb2NrLmYoKTtcbiAgICBvdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZV9rZXllZF9lYWNoKG9sZF9ibG9ja3MsIGRpcnR5LCBnZXRfa2V5LCBkeW5hbWljLCBjdHgsIGxpc3QsIGxvb2t1cCwgbm9kZSwgZGVzdHJveSwgY3JlYXRlX2VhY2hfYmxvY2ssIG5leHQsIGdldF9jb250ZXh0KSB7XG4gICAgbGV0IG8gPSBvbGRfYmxvY2tzLmxlbmd0aDtcbiAgICBsZXQgbiA9IGxpc3QubGVuZ3RoO1xuICAgIGxldCBpID0gbztcbiAgICBjb25zdCBvbGRfaW5kZXhlcyA9IHt9O1xuICAgIHdoaWxlIChpLS0pXG4gICAgICAgIG9sZF9pbmRleGVzW29sZF9ibG9ja3NbaV0ua2V5XSA9IGk7XG4gICAgY29uc3QgbmV3X2Jsb2NrcyA9IFtdO1xuICAgIGNvbnN0IG5ld19sb29rdXAgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgZGVsdGFzID0gbmV3IE1hcCgpO1xuICAgIGkgPSBuO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgY29uc3QgY2hpbGRfY3R4ID0gZ2V0X2NvbnRleHQoY3R4LCBsaXN0LCBpKTtcbiAgICAgICAgY29uc3Qga2V5ID0gZ2V0X2tleShjaGlsZF9jdHgpO1xuICAgICAgICBsZXQgYmxvY2sgPSBsb29rdXAuZ2V0KGtleSk7XG4gICAgICAgIGlmICghYmxvY2spIHtcbiAgICAgICAgICAgIGJsb2NrID0gY3JlYXRlX2VhY2hfYmxvY2soa2V5LCBjaGlsZF9jdHgpO1xuICAgICAgICAgICAgYmxvY2suYygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGR5bmFtaWMpIHtcbiAgICAgICAgICAgIGJsb2NrLnAoY2hpbGRfY3R4LCBkaXJ0eSk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3X2xvb2t1cC5zZXQoa2V5LCBuZXdfYmxvY2tzW2ldID0gYmxvY2spO1xuICAgICAgICBpZiAoa2V5IGluIG9sZF9pbmRleGVzKVxuICAgICAgICAgICAgZGVsdGFzLnNldChrZXksIE1hdGguYWJzKGkgLSBvbGRfaW5kZXhlc1trZXldKSk7XG4gICAgfVxuICAgIGNvbnN0IHdpbGxfbW92ZSA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBkaWRfbW92ZSA9IG5ldyBTZXQoKTtcbiAgICBmdW5jdGlvbiBpbnNlcnQoYmxvY2spIHtcbiAgICAgICAgdHJhbnNpdGlvbl9pbihibG9jaywgMSk7XG4gICAgICAgIGJsb2NrLm0obm9kZSwgbmV4dCk7XG4gICAgICAgIGxvb2t1cC5zZXQoYmxvY2sua2V5LCBibG9jayk7XG4gICAgICAgIG5leHQgPSBibG9jay5maXJzdDtcbiAgICAgICAgbi0tO1xuICAgIH1cbiAgICB3aGlsZSAobyAmJiBuKSB7XG4gICAgICAgIGNvbnN0IG5ld19ibG9jayA9IG5ld19ibG9ja3NbbiAtIDFdO1xuICAgICAgICBjb25zdCBvbGRfYmxvY2sgPSBvbGRfYmxvY2tzW28gLSAxXTtcbiAgICAgICAgY29uc3QgbmV3X2tleSA9IG5ld19ibG9jay5rZXk7XG4gICAgICAgIGNvbnN0IG9sZF9rZXkgPSBvbGRfYmxvY2sua2V5O1xuICAgICAgICBpZiAobmV3X2Jsb2NrID09PSBvbGRfYmxvY2spIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIG5leHQgPSBuZXdfYmxvY2suZmlyc3Q7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgICAgICBuLS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIW5ld19sb29rdXAuaGFzKG9sZF9rZXkpKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgb2xkIGJsb2NrXG4gICAgICAgICAgICBkZXN0cm95KG9sZF9ibG9jaywgbG9va3VwKTtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghbG9va3VwLmhhcyhuZXdfa2V5KSB8fCB3aWxsX21vdmUuaGFzKG5ld19rZXkpKSB7XG4gICAgICAgICAgICBpbnNlcnQobmV3X2Jsb2NrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaWRfbW92ZS5oYXMob2xkX2tleSkpIHtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkZWx0YXMuZ2V0KG5ld19rZXkpID4gZGVsdGFzLmdldChvbGRfa2V5KSkge1xuICAgICAgICAgICAgZGlkX21vdmUuYWRkKG5ld19rZXkpO1xuICAgICAgICAgICAgaW5zZXJ0KG5ld19ibG9jayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3aWxsX21vdmUuYWRkKG9sZF9rZXkpO1xuICAgICAgICAgICAgby0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIHdoaWxlIChvLS0pIHtcbiAgICAgICAgY29uc3Qgb2xkX2Jsb2NrID0gb2xkX2Jsb2Nrc1tvXTtcbiAgICAgICAgaWYgKCFuZXdfbG9va3VwLmhhcyhvbGRfYmxvY2sua2V5KSlcbiAgICAgICAgICAgIGRlc3Ryb3kob2xkX2Jsb2NrLCBsb29rdXApO1xuICAgIH1cbiAgICB3aGlsZSAobilcbiAgICAgICAgaW5zZXJ0KG5ld19ibG9ja3NbbiAtIDFdKTtcbiAgICByZXR1cm4gbmV3X2Jsb2Nrcztcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX2VhY2hfa2V5cyhjdHgsIGxpc3QsIGdldF9jb250ZXh0LCBnZXRfa2V5KSB7XG4gICAgY29uc3Qga2V5cyA9IG5ldyBTZXQoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qga2V5ID0gZ2V0X2tleShnZXRfY29udGV4dChjdHgsIGxpc3QsIGkpKTtcbiAgICAgICAgaWYgKGtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGhhdmUgZHVwbGljYXRlIGtleXMgaW4gYSBrZXllZCBlYWNoJyk7XG4gICAgICAgIH1cbiAgICAgICAga2V5cy5hZGQoa2V5KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldF9zcHJlYWRfdXBkYXRlKGxldmVscywgdXBkYXRlcykge1xuICAgIGNvbnN0IHVwZGF0ZSA9IHt9O1xuICAgIGNvbnN0IHRvX251bGxfb3V0ID0ge307XG4gICAgY29uc3QgYWNjb3VudGVkX2ZvciA9IHsgJCRzY29wZTogMSB9O1xuICAgIGxldCBpID0gbGV2ZWxzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGNvbnN0IG8gPSBsZXZlbHNbaV07XG4gICAgICAgIGNvbnN0IG4gPSB1cGRhdGVzW2ldO1xuICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbykge1xuICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiBuKSlcbiAgICAgICAgICAgICAgICAgICAgdG9fbnVsbF9vdXRba2V5XSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBuKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhY2NvdW50ZWRfZm9yW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlW2tleV0gPSBuW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRlZF9mb3Jba2V5XSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV2ZWxzW2ldID0gbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG8pIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50ZWRfZm9yW2tleV0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIHRvX251bGxfb3V0KSB7XG4gICAgICAgIGlmICghKGtleSBpbiB1cGRhdGUpKVxuICAgICAgICAgICAgdXBkYXRlW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiB1cGRhdGU7XG59XG5mdW5jdGlvbiBnZXRfc3ByZWFkX29iamVjdChzcHJlYWRfcHJvcHMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHNwcmVhZF9wcm9wcyA9PT0gJ29iamVjdCcgJiYgc3ByZWFkX3Byb3BzICE9PSBudWxsID8gc3ByZWFkX3Byb3BzIDoge307XG59XG5cbi8vIHNvdXJjZTogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW5kaWNlcy5odG1sXG5jb25zdCBib29sZWFuX2F0dHJpYnV0ZXMgPSBuZXcgU2V0KFtcbiAgICAnYWxsb3dmdWxsc2NyZWVuJyxcbiAgICAnYWxsb3dwYXltZW50cmVxdWVzdCcsXG4gICAgJ2FzeW5jJyxcbiAgICAnYXV0b2ZvY3VzJyxcbiAgICAnYXV0b3BsYXknLFxuICAgICdjaGVja2VkJyxcbiAgICAnY29udHJvbHMnLFxuICAgICdkZWZhdWx0JyxcbiAgICAnZGVmZXInLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2Zvcm1ub3ZhbGlkYXRlJyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaXNtYXAnLFxuICAgICdsb29wJyxcbiAgICAnbXVsdGlwbGUnLFxuICAgICdtdXRlZCcsXG4gICAgJ25vbW9kdWxlJyxcbiAgICAnbm92YWxpZGF0ZScsXG4gICAgJ29wZW4nLFxuICAgICdwbGF5c2lubGluZScsXG4gICAgJ3JlYWRvbmx5JyxcbiAgICAncmVxdWlyZWQnLFxuICAgICdyZXZlcnNlZCcsXG4gICAgJ3NlbGVjdGVkJ1xuXSk7XG5cbmNvbnN0IGludmFsaWRfYXR0cmlidXRlX25hbWVfY2hhcmFjdGVyID0gL1tcXHMnXCI+Lz1cXHV7RkREMH0tXFx1e0ZERUZ9XFx1e0ZGRkV9XFx1e0ZGRkZ9XFx1ezFGRkZFfVxcdXsxRkZGRn1cXHV7MkZGRkV9XFx1ezJGRkZGfVxcdXszRkZGRX1cXHV7M0ZGRkZ9XFx1ezRGRkZFfVxcdXs0RkZGRn1cXHV7NUZGRkV9XFx1ezVGRkZGfVxcdXs2RkZGRX1cXHV7NkZGRkZ9XFx1ezdGRkZFfVxcdXs3RkZGRn1cXHV7OEZGRkV9XFx1ezhGRkZGfVxcdXs5RkZGRX1cXHV7OUZGRkZ9XFx1e0FGRkZFfVxcdXtBRkZGRn1cXHV7QkZGRkV9XFx1e0JGRkZGfVxcdXtDRkZGRX1cXHV7Q0ZGRkZ9XFx1e0RGRkZFfVxcdXtERkZGRn1cXHV7RUZGRkV9XFx1e0VGRkZGfVxcdXtGRkZGRX1cXHV7RkZGRkZ9XFx1ezEwRkZGRX1cXHV7MTBGRkZGfV0vdTtcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI2F0dHJpYnV0ZXMtMlxuLy8gaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI25vbmNoYXJhY3RlclxuZnVuY3Rpb24gc3ByZWFkKGFyZ3MsIGF0dHJzX3RvX2FkZCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHt9LCAuLi5hcmdzKTtcbiAgICBpZiAoYXR0cnNfdG9fYWRkKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXNfdG9fYWRkID0gYXR0cnNfdG9fYWRkLmNsYXNzZXM7XG4gICAgICAgIGNvbnN0IHN0eWxlc190b19hZGQgPSBhdHRyc190b19hZGQuc3R5bGVzO1xuICAgICAgICBpZiAoY2xhc3Nlc190b19hZGQpIHtcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzLmNsYXNzID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLmNsYXNzID0gY2xhc3Nlc190b19hZGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLmNsYXNzICs9ICcgJyArIGNsYXNzZXNfdG9fYWRkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzdHlsZXNfdG9fYWRkKSB7XG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlcy5zdHlsZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5zdHlsZSA9IHN0eWxlX29iamVjdF90b19zdHJpbmcoc3R5bGVzX3RvX2FkZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnN0eWxlID0gc3R5bGVfb2JqZWN0X3RvX3N0cmluZyhtZXJnZV9zc3Jfc3R5bGVzKGF0dHJpYnV0ZXMuc3R5bGUsIHN0eWxlc190b19hZGQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgc3RyID0gJyc7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgaWYgKGludmFsaWRfYXR0cmlidXRlX25hbWVfY2hhcmFjdGVyLnRlc3QobmFtZSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXR0cmlidXRlc1tuYW1lXTtcbiAgICAgICAgaWYgKHZhbHVlID09PSB0cnVlKVxuICAgICAgICAgICAgc3RyICs9ICcgJyArIG5hbWU7XG4gICAgICAgIGVsc2UgaWYgKGJvb2xlYW5fYXR0cmlidXRlcy5oYXMobmFtZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlKVxuICAgICAgICAgICAgICAgIHN0ciArPSAnICcgKyBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHN0ciArPSBgICR7bmFtZX09XCIke3ZhbHVlfVwiYDtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzdHI7XG59XG5mdW5jdGlvbiBtZXJnZV9zc3Jfc3R5bGVzKHN0eWxlX2F0dHJpYnV0ZSwgc3R5bGVfZGlyZWN0aXZlKSB7XG4gICAgY29uc3Qgc3R5bGVfb2JqZWN0ID0ge307XG4gICAgZm9yIChjb25zdCBpbmRpdmlkdWFsX3N0eWxlIG9mIHN0eWxlX2F0dHJpYnV0ZS5zcGxpdCgnOycpKSB7XG4gICAgICAgIGNvbnN0IGNvbG9uX2luZGV4ID0gaW5kaXZpZHVhbF9zdHlsZS5pbmRleE9mKCc6Jyk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBpbmRpdmlkdWFsX3N0eWxlLnNsaWNlKDAsIGNvbG9uX2luZGV4KS50cmltKCk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaW5kaXZpZHVhbF9zdHlsZS5zbGljZShjb2xvbl9pbmRleCArIDEpLnRyaW0oKTtcbiAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIHN0eWxlX29iamVjdFtuYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gc3R5bGVfZGlyZWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGVfZGlyZWN0aXZlW25hbWVdO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHN0eWxlX29iamVjdFtuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHN0eWxlX29iamVjdFtuYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3R5bGVfb2JqZWN0O1xufVxuY29uc3QgZXNjYXBlZCA9IHtcbiAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICBcIidcIjogJyYjMzk7JyxcbiAgICAnJic6ICcmYW1wOycsXG4gICAgJzwnOiAnJmx0OycsXG4gICAgJz4nOiAnJmd0Oydcbn07XG5mdW5jdGlvbiBlc2NhcGUoaHRtbCkge1xuICAgIHJldHVybiBTdHJpbmcoaHRtbCkucmVwbGFjZSgvW1wiJyY8Pl0vZywgbWF0Y2ggPT4gZXNjYXBlZFttYXRjaF0pO1xufVxuZnVuY3Rpb24gZXNjYXBlX2F0dHJpYnV0ZV92YWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gZXNjYXBlKHZhbHVlKSA6IHZhbHVlO1xufVxuZnVuY3Rpb24gZXNjYXBlX29iamVjdChvYmopIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBlc2NhcGVfYXR0cmlidXRlX3ZhbHVlKG9ialtrZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGVhY2goaXRlbXMsIGZuKSB7XG4gICAgbGV0IHN0ciA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgc3RyICs9IGZuKGl0ZW1zW2ldLCBpKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cbmNvbnN0IG1pc3NpbmdfY29tcG9uZW50ID0ge1xuICAgICQkcmVuZGVyOiAoKSA9PiAnJ1xufTtcbmZ1bmN0aW9uIHZhbGlkYXRlX2NvbXBvbmVudChjb21wb25lbnQsIG5hbWUpIHtcbiAgICBpZiAoIWNvbXBvbmVudCB8fCAhY29tcG9uZW50LiQkcmVuZGVyKSB7XG4gICAgICAgIGlmIChuYW1lID09PSAnc3ZlbHRlOmNvbXBvbmVudCcpXG4gICAgICAgICAgICBuYW1lICs9ICcgdGhpcz17Li4ufSc7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgPCR7bmFtZX0+IGlzIG5vdCBhIHZhbGlkIFNTUiBjb21wb25lbnQuIFlvdSBtYXkgbmVlZCB0byByZXZpZXcgeW91ciBidWlsZCBjb25maWcgdG8gZW5zdXJlIHRoYXQgZGVwZW5kZW5jaWVzIGFyZSBjb21waWxlZCwgcmF0aGVyIHRoYW4gaW1wb3J0ZWQgYXMgcHJlLWNvbXBpbGVkIG1vZHVsZXNgKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGRlYnVnKGZpbGUsIGxpbmUsIGNvbHVtbiwgdmFsdWVzKSB7XG4gICAgY29uc29sZS5sb2coYHtAZGVidWd9ICR7ZmlsZSA/IGZpbGUgKyAnICcgOiAnJ30oJHtsaW5lfToke2NvbHVtbn0pYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIHJldHVybiAnJztcbn1cbmxldCBvbl9kZXN0cm95O1xuZnVuY3Rpb24gY3JlYXRlX3Nzcl9jb21wb25lbnQoZm4pIHtcbiAgICBmdW5jdGlvbiAkJHJlbmRlcihyZXN1bHQsIHByb3BzLCBiaW5kaW5ncywgc2xvdHMsIGNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgcGFyZW50X2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICAgICAgICBjb25zdCAkJCA9IHtcbiAgICAgICAgICAgIG9uX2Rlc3Ryb3ksXG4gICAgICAgICAgICBjb250ZXh0OiBuZXcgTWFwKGNvbnRleHQgfHwgKHBhcmVudF9jb21wb25lbnQgPyBwYXJlbnRfY29tcG9uZW50LiQkLmNvbnRleHQgOiBbXSkpLFxuICAgICAgICAgICAgLy8gdGhlc2Ugd2lsbCBiZSBpbW1lZGlhdGVseSBkaXNjYXJkZWRcbiAgICAgICAgICAgIG9uX21vdW50OiBbXSxcbiAgICAgICAgICAgIGJlZm9yZV91cGRhdGU6IFtdLFxuICAgICAgICAgICAgYWZ0ZXJfdXBkYXRlOiBbXSxcbiAgICAgICAgICAgIGNhbGxiYWNrczogYmxhbmtfb2JqZWN0KClcbiAgICAgICAgfTtcbiAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHsgJCQgfSk7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBmbihyZXN1bHQsIHByb3BzLCBiaW5kaW5ncywgc2xvdHMpO1xuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQocGFyZW50X2NvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXI6IChwcm9wcyA9IHt9LCB7ICQkc2xvdHMgPSB7fSwgY29udGV4dCA9IG5ldyBNYXAoKSB9ID0ge30pID0+IHtcbiAgICAgICAgICAgIG9uX2Rlc3Ryb3kgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHsgdGl0bGU6ICcnLCBoZWFkOiAnJywgY3NzOiBuZXcgU2V0KCkgfTtcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSAkJHJlbmRlcihyZXN1bHQsIHByb3BzLCB7fSwgJCRzbG90cywgY29udGV4dCk7XG4gICAgICAgICAgICBydW5fYWxsKG9uX2Rlc3Ryb3kpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBodG1sLFxuICAgICAgICAgICAgICAgIGNzczoge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBBcnJheS5mcm9tKHJlc3VsdC5jc3MpLm1hcChjc3MgPT4gY3NzLmNvZGUpLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICBtYXA6IG51bGwgLy8gVE9ET1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGVhZDogcmVzdWx0LnRpdGxlICsgcmVzdWx0LmhlYWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgICQkcmVuZGVyXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFkZF9hdHRyaWJ1dGUobmFtZSwgdmFsdWUsIGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCAoYm9vbGVhbiAmJiAhdmFsdWUpKVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgcmV0dXJuIGAgJHtuYW1lfSR7dmFsdWUgPT09IHRydWUgJiYgYm9vbGVhbl9hdHRyaWJ1dGVzLmhhcyhuYW1lKSA/ICcnIDogYD0ke3R5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBKU09OLnN0cmluZ2lmeShlc2NhcGUodmFsdWUpKSA6IGBcIiR7dmFsdWV9XCJgfWB9YDtcbn1cbmZ1bmN0aW9uIGFkZF9jbGFzc2VzKGNsYXNzZXMpIHtcbiAgICByZXR1cm4gY2xhc3NlcyA/IGAgY2xhc3M9XCIke2NsYXNzZXN9XCJgIDogJyc7XG59XG5mdW5jdGlvbiBzdHlsZV9vYmplY3RfdG9fc3RyaW5nKHN0eWxlX29iamVjdCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZV9vYmplY3QpXG4gICAgICAgIC5maWx0ZXIoa2V5ID0+IHN0eWxlX29iamVjdFtrZXldKVxuICAgICAgICAubWFwKGtleSA9PiBgJHtrZXl9OiAke3N0eWxlX29iamVjdFtrZXldfTtgKVxuICAgICAgICAuam9pbignICcpO1xufVxuZnVuY3Rpb24gYWRkX3N0eWxlcyhzdHlsZV9vYmplY3QpIHtcbiAgICBjb25zdCBzdHlsZXMgPSBzdHlsZV9vYmplY3RfdG9fc3RyaW5nKHN0eWxlX29iamVjdCk7XG4gICAgcmV0dXJuIHN0eWxlcyA/IGAgc3R5bGU9XCIke3N0eWxlc31cImAgOiAnJztcbn1cblxuZnVuY3Rpb24gYmluZChjb21wb25lbnQsIG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgaW5kZXggPSBjb21wb25lbnQuJCQucHJvcHNbbmFtZV07XG4gICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29tcG9uZW50LiQkLmJvdW5kW2luZGV4XSA9IGNhbGxiYWNrO1xuICAgICAgICBjYWxsYmFjayhjb21wb25lbnQuJCQuY3R4W2luZGV4XSk7XG4gICAgfVxufVxuZnVuY3Rpb24gY3JlYXRlX2NvbXBvbmVudChibG9jaykge1xuICAgIGJsb2NrICYmIGJsb2NrLmMoKTtcbn1cbmZ1bmN0aW9uIGNsYWltX2NvbXBvbmVudChibG9jaywgcGFyZW50X25vZGVzKSB7XG4gICAgYmxvY2sgJiYgYmxvY2subChwYXJlbnRfbm9kZXMpO1xufVxuZnVuY3Rpb24gbW91bnRfY29tcG9uZW50KGNvbXBvbmVudCwgdGFyZ2V0LCBhbmNob3IsIGN1c3RvbUVsZW1lbnQpIHtcbiAgICBjb25zdCB7IGZyYWdtZW50LCBvbl9tb3VudCwgb25fZGVzdHJveSwgYWZ0ZXJfdXBkYXRlIH0gPSBjb21wb25lbnQuJCQ7XG4gICAgZnJhZ21lbnQgJiYgZnJhZ21lbnQubSh0YXJnZXQsIGFuY2hvcik7XG4gICAgaWYgKCFjdXN0b21FbGVtZW50KSB7XG4gICAgICAgIC8vIG9uTW91bnQgaGFwcGVucyBiZWZvcmUgdGhlIGluaXRpYWwgYWZ0ZXJVcGRhdGVcbiAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdfb25fZGVzdHJveSA9IG9uX21vdW50Lm1hcChydW4pLmZpbHRlcihpc19mdW5jdGlvbik7XG4gICAgICAgICAgICBpZiAob25fZGVzdHJveSkge1xuICAgICAgICAgICAgICAgIG9uX2Rlc3Ryb3kucHVzaCguLi5uZXdfb25fZGVzdHJveSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBFZGdlIGNhc2UgLSBjb21wb25lbnQgd2FzIGRlc3Ryb3llZCBpbW1lZGlhdGVseSxcbiAgICAgICAgICAgICAgICAvLyBtb3N0IGxpa2VseSBhcyBhIHJlc3VsdCBvZiBhIGJpbmRpbmcgaW5pdGlhbGlzaW5nXG4gICAgICAgICAgICAgICAgcnVuX2FsbChuZXdfb25fZGVzdHJveSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb21wb25lbnQuJCQub25fbW91bnQgPSBbXTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFmdGVyX3VwZGF0ZS5mb3JFYWNoKGFkZF9yZW5kZXJfY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gZGVzdHJveV9jb21wb25lbnQoY29tcG9uZW50LCBkZXRhY2hpbmcpIHtcbiAgICBjb25zdCAkJCA9IGNvbXBvbmVudC4kJDtcbiAgICBpZiAoJCQuZnJhZ21lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcnVuX2FsbCgkJC5vbl9kZXN0cm95KTtcbiAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQuZChkZXRhY2hpbmcpO1xuICAgICAgICAvLyBUT0RPIG51bGwgb3V0IG90aGVyIHJlZnMsIGluY2x1ZGluZyBjb21wb25lbnQuJCQgKGJ1dCBuZWVkIHRvXG4gICAgICAgIC8vIHByZXNlcnZlIGZpbmFsIHN0YXRlPylcbiAgICAgICAgJCQub25fZGVzdHJveSA9ICQkLmZyYWdtZW50ID0gbnVsbDtcbiAgICAgICAgJCQuY3R4ID0gW107XG4gICAgfVxufVxuZnVuY3Rpb24gbWFrZV9kaXJ0eShjb21wb25lbnQsIGkpIHtcbiAgICBpZiAoY29tcG9uZW50LiQkLmRpcnR5WzBdID09PSAtMSkge1xuICAgICAgICBkaXJ0eV9jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgc2NoZWR1bGVfdXBkYXRlKCk7XG4gICAgICAgIGNvbXBvbmVudC4kJC5kaXJ0eS5maWxsKDApO1xuICAgIH1cbiAgICBjb21wb25lbnQuJCQuZGlydHlbKGkgLyAzMSkgfCAwXSB8PSAoMSA8PCAoaSAlIDMxKSk7XG59XG5mdW5jdGlvbiBpbml0KGNvbXBvbmVudCwgb3B0aW9ucywgaW5zdGFuY2UsIGNyZWF0ZV9mcmFnbWVudCwgbm90X2VxdWFsLCBwcm9wcywgYXBwZW5kX3N0eWxlcywgZGlydHkgPSBbLTFdKSB7XG4gICAgY29uc3QgcGFyZW50X2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpO1xuICAgIGNvbnN0ICQkID0gY29tcG9uZW50LiQkID0ge1xuICAgICAgICBmcmFnbWVudDogbnVsbCxcbiAgICAgICAgY3R4OiBudWxsLFxuICAgICAgICAvLyBzdGF0ZVxuICAgICAgICBwcm9wcyxcbiAgICAgICAgdXBkYXRlOiBub29wLFxuICAgICAgICBub3RfZXF1YWwsXG4gICAgICAgIGJvdW5kOiBibGFua19vYmplY3QoKSxcbiAgICAgICAgLy8gbGlmZWN5Y2xlXG4gICAgICAgIG9uX21vdW50OiBbXSxcbiAgICAgICAgb25fZGVzdHJveTogW10sXG4gICAgICAgIG9uX2Rpc2Nvbm5lY3Q6IFtdLFxuICAgICAgICBiZWZvcmVfdXBkYXRlOiBbXSxcbiAgICAgICAgYWZ0ZXJfdXBkYXRlOiBbXSxcbiAgICAgICAgY29udGV4dDogbmV3IE1hcChvcHRpb25zLmNvbnRleHQgfHwgKHBhcmVudF9jb21wb25lbnQgPyBwYXJlbnRfY29tcG9uZW50LiQkLmNvbnRleHQgOiBbXSkpLFxuICAgICAgICAvLyBldmVyeXRoaW5nIGVsc2VcbiAgICAgICAgY2FsbGJhY2tzOiBibGFua19vYmplY3QoKSxcbiAgICAgICAgZGlydHksXG4gICAgICAgIHNraXBfYm91bmQ6IGZhbHNlLFxuICAgICAgICByb290OiBvcHRpb25zLnRhcmdldCB8fCBwYXJlbnRfY29tcG9uZW50LiQkLnJvb3RcbiAgICB9O1xuICAgIGFwcGVuZF9zdHlsZXMgJiYgYXBwZW5kX3N0eWxlcygkJC5yb290KTtcbiAgICBsZXQgcmVhZHkgPSBmYWxzZTtcbiAgICAkJC5jdHggPSBpbnN0YW5jZVxuICAgICAgICA/IGluc3RhbmNlKGNvbXBvbmVudCwgb3B0aW9ucy5wcm9wcyB8fCB7fSwgKGksIHJldCwgLi4ucmVzdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZXN0Lmxlbmd0aCA/IHJlc3RbMF0gOiByZXQ7XG4gICAgICAgICAgICBpZiAoJCQuY3R4ICYmIG5vdF9lcXVhbCgkJC5jdHhbaV0sICQkLmN0eFtpXSA9IHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghJCQuc2tpcF9ib3VuZCAmJiAkJC5ib3VuZFtpXSlcbiAgICAgICAgICAgICAgICAgICAgJCQuYm91bmRbaV0odmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChyZWFkeSlcbiAgICAgICAgICAgICAgICAgICAgbWFrZV9kaXJ0eShjb21wb25lbnQsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSlcbiAgICAgICAgOiBbXTtcbiAgICAkJC51cGRhdGUoKTtcbiAgICByZWFkeSA9IHRydWU7XG4gICAgcnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTtcbiAgICAvLyBgZmFsc2VgIGFzIGEgc3BlY2lhbCBjYXNlIG9mIG5vIERPTSBjb21wb25lbnRcbiAgICAkJC5mcmFnbWVudCA9IGNyZWF0ZV9mcmFnbWVudCA/IGNyZWF0ZV9mcmFnbWVudCgkJC5jdHgpIDogZmFsc2U7XG4gICAgaWYgKG9wdGlvbnMudGFyZ2V0KSB7XG4gICAgICAgIGlmIChvcHRpb25zLmh5ZHJhdGUpIHtcbiAgICAgICAgICAgIHN0YXJ0X2h5ZHJhdGluZygpO1xuICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBjaGlsZHJlbihvcHRpb25zLnRhcmdldCk7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQubChub2Rlcyk7XG4gICAgICAgICAgICBub2Rlcy5mb3JFYWNoKGRldGFjaCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQuYygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmludHJvKVxuICAgICAgICAgICAgdHJhbnNpdGlvbl9pbihjb21wb25lbnQuJCQuZnJhZ21lbnQpO1xuICAgICAgICBtb3VudF9jb21wb25lbnQoY29tcG9uZW50LCBvcHRpb25zLnRhcmdldCwgb3B0aW9ucy5hbmNob3IsIG9wdGlvbnMuY3VzdG9tRWxlbWVudCk7XG4gICAgICAgIGVuZF9oeWRyYXRpbmcoKTtcbiAgICAgICAgZmx1c2goKTtcbiAgICB9XG4gICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHBhcmVudF9jb21wb25lbnQpO1xufVxubGV0IFN2ZWx0ZUVsZW1lbnQ7XG5pZiAodHlwZW9mIEhUTUxFbGVtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgU3ZlbHRlRWxlbWVudCA9IGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgb25fbW91bnQgfSA9IHRoaXMuJCQ7XG4gICAgICAgICAgICB0aGlzLiQkLm9uX2Rpc2Nvbm5lY3QgPSBvbl9tb3VudC5tYXAocnVuKS5maWx0ZXIoaXNfZnVuY3Rpb24pO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBpbXByb3ZlIHR5cGluZ3NcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuJCQuc2xvdHRlZCkge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLiQkLnNsb3R0ZWRba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHIsIF9vbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXNbYXR0cl0gPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICAgIHJ1bl9hbGwodGhpcy4kJC5vbl9kaXNjb25uZWN0KTtcbiAgICAgICAgfVxuICAgICAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgICAgIGRlc3Ryb3lfY29tcG9uZW50KHRoaXMsIDEpO1xuICAgICAgICAgICAgdGhpcy4kZGVzdHJveSA9IG5vb3A7XG4gICAgICAgIH1cbiAgICAgICAgJG9uKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAvLyBUT0RPIHNob3VsZCB0aGlzIGRlbGVnYXRlIHRvIGFkZEV2ZW50TGlzdGVuZXI/XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFja3MgPSAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gfHwgKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdID0gW10pKTtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjYWxsYmFja3MuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgICRzZXQoJCRwcm9wcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuJCRzZXQgJiYgIWlzX2VtcHR5KCQkcHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kJC5za2lwX2JvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiQkc2V0KCQkcHJvcHMpO1xuICAgICAgICAgICAgICAgIHRoaXMuJCQuc2tpcF9ib3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgU3ZlbHRlIGNvbXBvbmVudHMuIFVzZWQgd2hlbiBkZXY9ZmFsc2UuXG4gKi9cbmNsYXNzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIGRlc3Ryb3lfY29tcG9uZW50KHRoaXMsIDEpO1xuICAgICAgICB0aGlzLiRkZXN0cm95ID0gbm9vcDtcbiAgICB9XG4gICAgJG9uKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSB8fCAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gPSBbXSkpO1xuICAgICAgICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGNhbGxiYWNrcy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgICRzZXQoJCRwcm9wcykge1xuICAgICAgICBpZiAodGhpcy4kJHNldCAmJiAhaXNfZW1wdHkoJCRwcm9wcykpIHtcbiAgICAgICAgICAgIHRoaXMuJCQuc2tpcF9ib3VuZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLiQkc2V0KCQkcHJvcHMpO1xuICAgICAgICAgICAgdGhpcy4kJC5za2lwX2JvdW5kID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoX2Rldih0eXBlLCBkZXRhaWwpIHtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGN1c3RvbV9ldmVudCh0eXBlLCBPYmplY3QuYXNzaWduKHsgdmVyc2lvbjogJzMuNDYuNCcgfSwgZGV0YWlsKSwgdHJ1ZSkpO1xufVxuZnVuY3Rpb24gYXBwZW5kX2Rldih0YXJnZXQsIG5vZGUpIHtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTUluc2VydCcsIHsgdGFyZ2V0LCBub2RlIH0pO1xuICAgIGFwcGVuZCh0YXJnZXQsIG5vZGUpO1xufVxuZnVuY3Rpb24gYXBwZW5kX2h5ZHJhdGlvbl9kZXYodGFyZ2V0LCBub2RlKSB7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01JbnNlcnQnLCB7IHRhcmdldCwgbm9kZSB9KTtcbiAgICBhcHBlbmRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSk7XG59XG5mdW5jdGlvbiBpbnNlcnRfZGV2KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01JbnNlcnQnLCB7IHRhcmdldCwgbm9kZSwgYW5jaG9yIH0pO1xuICAgIGluc2VydCh0YXJnZXQsIG5vZGUsIGFuY2hvcik7XG59XG5mdW5jdGlvbiBpbnNlcnRfaHlkcmF0aW9uX2Rldih0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NSW5zZXJ0JywgeyB0YXJnZXQsIG5vZGUsIGFuY2hvciB9KTtcbiAgICBpbnNlcnRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSwgYW5jaG9yKTtcbn1cbmZ1bmN0aW9uIGRldGFjaF9kZXYobm9kZSkge1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NUmVtb3ZlJywgeyBub2RlIH0pO1xuICAgIGRldGFjaChub2RlKTtcbn1cbmZ1bmN0aW9uIGRldGFjaF9iZXR3ZWVuX2RldihiZWZvcmUsIGFmdGVyKSB7XG4gICAgd2hpbGUgKGJlZm9yZS5uZXh0U2libGluZyAmJiBiZWZvcmUubmV4dFNpYmxpbmcgIT09IGFmdGVyKSB7XG4gICAgICAgIGRldGFjaF9kZXYoYmVmb3JlLm5leHRTaWJsaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZXRhY2hfYmVmb3JlX2RldihhZnRlcikge1xuICAgIHdoaWxlIChhZnRlci5wcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgICAgZGV0YWNoX2RldihhZnRlci5wcmV2aW91c1NpYmxpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRldGFjaF9hZnRlcl9kZXYoYmVmb3JlKSB7XG4gICAgd2hpbGUgKGJlZm9yZS5uZXh0U2libGluZykge1xuICAgICAgICBkZXRhY2hfZGV2KGJlZm9yZS5uZXh0U2libGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gbGlzdGVuX2Rldihub2RlLCBldmVudCwgaGFuZGxlciwgb3B0aW9ucywgaGFzX3ByZXZlbnRfZGVmYXVsdCwgaGFzX3N0b3BfcHJvcGFnYXRpb24pIHtcbiAgICBjb25zdCBtb2RpZmllcnMgPSBvcHRpb25zID09PSB0cnVlID8gWydjYXB0dXJlJ10gOiBvcHRpb25zID8gQXJyYXkuZnJvbShPYmplY3Qua2V5cyhvcHRpb25zKSkgOiBbXTtcbiAgICBpZiAoaGFzX3ByZXZlbnRfZGVmYXVsdClcbiAgICAgICAgbW9kaWZpZXJzLnB1c2goJ3ByZXZlbnREZWZhdWx0Jyk7XG4gICAgaWYgKGhhc19zdG9wX3Byb3BhZ2F0aW9uKVxuICAgICAgICBtb2RpZmllcnMucHVzaCgnc3RvcFByb3BhZ2F0aW9uJyk7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01BZGRFdmVudExpc3RlbmVyJywgeyBub2RlLCBldmVudCwgaGFuZGxlciwgbW9kaWZpZXJzIH0pO1xuICAgIGNvbnN0IGRpc3Bvc2UgPSBsaXN0ZW4obm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NUmVtb3ZlRXZlbnRMaXN0ZW5lcicsIHsgbm9kZSwgZXZlbnQsIGhhbmRsZXIsIG1vZGlmaWVycyB9KTtcbiAgICAgICAgZGlzcG9zZSgpO1xuICAgIH07XG59XG5mdW5jdGlvbiBhdHRyX2Rldihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgYXR0cihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICBpZiAodmFsdWUgPT0gbnVsbClcbiAgICAgICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01SZW1vdmVBdHRyaWJ1dGUnLCB7IG5vZGUsIGF0dHJpYnV0ZSB9KTtcbiAgICBlbHNlXG4gICAgICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NU2V0QXR0cmlidXRlJywgeyBub2RlLCBhdHRyaWJ1dGUsIHZhbHVlIH0pO1xufVxuZnVuY3Rpb24gcHJvcF9kZXYobm9kZSwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgbm9kZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVNldFByb3BlcnR5JywgeyBub2RlLCBwcm9wZXJ0eSwgdmFsdWUgfSk7XG59XG5mdW5jdGlvbiBkYXRhc2V0X2Rldihub2RlLCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBub2RlLmRhdGFzZXRbcHJvcGVydHldID0gdmFsdWU7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01TZXREYXRhc2V0JywgeyBub2RlLCBwcm9wZXJ0eSwgdmFsdWUgfSk7XG59XG5mdW5jdGlvbiBzZXRfZGF0YV9kZXYodGV4dCwgZGF0YSkge1xuICAgIGRhdGEgPSAnJyArIGRhdGE7XG4gICAgaWYgKHRleHQud2hvbGVUZXh0ID09PSBkYXRhKVxuICAgICAgICByZXR1cm47XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01TZXREYXRhJywgeyBub2RlOiB0ZXh0LCBkYXRhIH0pO1xuICAgIHRleHQuZGF0YSA9IGRhdGE7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9lYWNoX2FyZ3VtZW50KGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnc3RyaW5nJyAmJiAhKGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiBhcmcpKSB7XG4gICAgICAgIGxldCBtc2cgPSAneyNlYWNofSBvbmx5IGl0ZXJhdGVzIG92ZXIgYXJyYXktbGlrZSBvYmplY3RzLic7XG4gICAgICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIGFyZyAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gYXJnKSB7XG4gICAgICAgICAgICBtc2cgKz0gJyBZb3UgY2FuIHVzZSBhIHNwcmVhZCB0byBjb252ZXJ0IHRoaXMgaXRlcmFibGUgaW50byBhbiBhcnJheS4nO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX3Nsb3RzKG5hbWUsIHNsb3QsIGtleXMpIHtcbiAgICBmb3IgKGNvbnN0IHNsb3Rfa2V5IG9mIE9iamVjdC5rZXlzKHNsb3QpKSB7XG4gICAgICAgIGlmICghfmtleXMuaW5kZXhPZihzbG90X2tleSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgPCR7bmFtZX0+IHJlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgc2xvdCBcIiR7c2xvdF9rZXl9XCIuYCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIFN2ZWx0ZSBjb21wb25lbnRzIHdpdGggc29tZSBtaW5vciBkZXYtZW5oYW5jZW1lbnRzLiBVc2VkIHdoZW4gZGV2PXRydWUuXG4gKi9cbmNsYXNzIFN2ZWx0ZUNvbXBvbmVudERldiBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBpZiAoIW9wdGlvbnMgfHwgKCFvcHRpb25zLnRhcmdldCAmJiAhb3B0aW9ucy4kJGlubGluZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIid0YXJnZXQnIGlzIGEgcmVxdWlyZWQgb3B0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgICRkZXN0cm95KCkge1xuICAgICAgICBzdXBlci4kZGVzdHJveSgpO1xuICAgICAgICB0aGlzLiRkZXN0cm95ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdDb21wb25lbnQgd2FzIGFscmVhZHkgZGVzdHJveWVkJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICB9O1xuICAgIH1cbiAgICAkY2FwdHVyZV9zdGF0ZSgpIHsgfVxuICAgICRpbmplY3Rfc3RhdGUoKSB7IH1cbn1cbi8qKlxuICogQmFzZSBjbGFzcyB0byBjcmVhdGUgc3Ryb25nbHkgdHlwZWQgU3ZlbHRlIGNvbXBvbmVudHMuXG4gKiBUaGlzIG9ubHkgZXhpc3RzIGZvciB0eXBpbmcgcHVycG9zZXMgYW5kIHNob3VsZCBiZSB1c2VkIGluIGAuZC50c2AgZmlsZXMuXG4gKlxuICogIyMjIEV4YW1wbGU6XG4gKlxuICogWW91IGhhdmUgY29tcG9uZW50IGxpYnJhcnkgb24gbnBtIGNhbGxlZCBgY29tcG9uZW50LWxpYnJhcnlgLCBmcm9tIHdoaWNoXG4gKiB5b3UgZXhwb3J0IGEgY29tcG9uZW50IGNhbGxlZCBgTXlDb21wb25lbnRgLiBGb3IgU3ZlbHRlK1R5cGVTY3JpcHQgdXNlcnMsXG4gKiB5b3Ugd2FudCB0byBwcm92aWRlIHR5cGluZ3MuIFRoZXJlZm9yZSB5b3UgY3JlYXRlIGEgYGluZGV4LmQudHNgOlxuICogYGBgdHNcbiAqIGltcG9ydCB7IFN2ZWx0ZUNvbXBvbmVudFR5cGVkIH0gZnJvbSBcInN2ZWx0ZVwiO1xuICogZXhwb3J0IGNsYXNzIE15Q29tcG9uZW50IGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50VHlwZWQ8e2Zvbzogc3RyaW5nfT4ge31cbiAqIGBgYFxuICogVHlwaW5nIHRoaXMgbWFrZXMgaXQgcG9zc2libGUgZm9yIElERXMgbGlrZSBWUyBDb2RlIHdpdGggdGhlIFN2ZWx0ZSBleHRlbnNpb25cbiAqIHRvIHByb3ZpZGUgaW50ZWxsaXNlbnNlIGFuZCB0byB1c2UgdGhlIGNvbXBvbmVudCBsaWtlIHRoaXMgaW4gYSBTdmVsdGUgZmlsZVxuICogd2l0aCBUeXBlU2NyaXB0OlxuICogYGBgc3ZlbHRlXG4gKiA8c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICogXHRpbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gXCJjb21wb25lbnQtbGlicmFyeVwiO1xuICogPC9zY3JpcHQ+XG4gKiA8TXlDb21wb25lbnQgZm9vPXsnYmFyJ30gLz5cbiAqIGBgYFxuICpcbiAqICMjIyMgV2h5IG5vdCBtYWtlIHRoaXMgcGFydCBvZiBgU3ZlbHRlQ29tcG9uZW50KERldilgP1xuICogQmVjYXVzZVxuICogYGBgdHNcbiAqIGNsYXNzIEFTdWJjbGFzc09mU3ZlbHRlQ29tcG9uZW50IGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50PHtmb286IHN0cmluZ30+IHt9XG4gKiBjb25zdCBjb21wb25lbnQ6IHR5cGVvZiBTdmVsdGVDb21wb25lbnQgPSBBU3ViY2xhc3NPZlN2ZWx0ZUNvbXBvbmVudDtcbiAqIGBgYFxuICogd2lsbCB0aHJvdyBhIHR5cGUgZXJyb3IsIHNvIHdlIG5lZWQgdG8gc2VwYXJhdGUgdGhlIG1vcmUgc3RyaWN0bHkgdHlwZWQgY2xhc3MuXG4gKi9cbmNsYXNzIFN2ZWx0ZUNvbXBvbmVudFR5cGVkIGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50RGV2IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGxvb3BfZ3VhcmQodGltZW91dCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHN0YXJ0ID4gdGltZW91dCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmZpbml0ZSBsb29wIGRldGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgeyBIdG1sVGFnLCBIdG1sVGFnSHlkcmF0aW9uLCBTdmVsdGVDb21wb25lbnQsIFN2ZWx0ZUNvbXBvbmVudERldiwgU3ZlbHRlQ29tcG9uZW50VHlwZWQsIFN2ZWx0ZUVsZW1lbnQsIGFjdGlvbl9kZXN0cm95ZXIsIGFkZF9hdHRyaWJ1dGUsIGFkZF9jbGFzc2VzLCBhZGRfZmx1c2hfY2FsbGJhY2ssIGFkZF9sb2NhdGlvbiwgYWRkX3JlbmRlcl9jYWxsYmFjaywgYWRkX3Jlc2l6ZV9saXN0ZW5lciwgYWRkX3N0eWxlcywgYWRkX3RyYW5zZm9ybSwgYWZ0ZXJVcGRhdGUsIGFwcGVuZCwgYXBwZW5kX2RldiwgYXBwZW5kX2VtcHR5X3N0eWxlc2hlZXQsIGFwcGVuZF9oeWRyYXRpb24sIGFwcGVuZF9oeWRyYXRpb25fZGV2LCBhcHBlbmRfc3R5bGVzLCBhc3NpZ24sIGF0dHIsIGF0dHJfZGV2LCBhdHRyaWJ1dGVfdG9fb2JqZWN0LCBiZWZvcmVVcGRhdGUsIGJpbmQsIGJpbmRpbmdfY2FsbGJhY2tzLCBibGFua19vYmplY3QsIGJ1YmJsZSwgY2hlY2tfb3V0cm9zLCBjaGlsZHJlbiwgY2xhaW1fY29tcG9uZW50LCBjbGFpbV9lbGVtZW50LCBjbGFpbV9odG1sX3RhZywgY2xhaW1fc3BhY2UsIGNsYWltX3N2Z19lbGVtZW50LCBjbGFpbV90ZXh0LCBjbGVhcl9sb29wcywgY29tcG9uZW50X3N1YnNjcmliZSwgY29tcHV0ZV9yZXN0X3Byb3BzLCBjb21wdXRlX3Nsb3RzLCBjcmVhdGVFdmVudERpc3BhdGNoZXIsIGNyZWF0ZV9hbmltYXRpb24sIGNyZWF0ZV9iaWRpcmVjdGlvbmFsX3RyYW5zaXRpb24sIGNyZWF0ZV9jb21wb25lbnQsIGNyZWF0ZV9pbl90cmFuc2l0aW9uLCBjcmVhdGVfb3V0X3RyYW5zaXRpb24sIGNyZWF0ZV9zbG90LCBjcmVhdGVfc3NyX2NvbXBvbmVudCwgY3VycmVudF9jb21wb25lbnQsIGN1c3RvbV9ldmVudCwgZGF0YXNldF9kZXYsIGRlYnVnLCBkZXN0cm95X2Jsb2NrLCBkZXN0cm95X2NvbXBvbmVudCwgZGVzdHJveV9lYWNoLCBkZXRhY2gsIGRldGFjaF9hZnRlcl9kZXYsIGRldGFjaF9iZWZvcmVfZGV2LCBkZXRhY2hfYmV0d2Vlbl9kZXYsIGRldGFjaF9kZXYsIGRpcnR5X2NvbXBvbmVudHMsIGRpc3BhdGNoX2RldiwgZWFjaCwgZWxlbWVudCwgZWxlbWVudF9pcywgZW1wdHksIGVuZF9oeWRyYXRpbmcsIGVzY2FwZSwgZXNjYXBlX2F0dHJpYnV0ZV92YWx1ZSwgZXNjYXBlX29iamVjdCwgZXNjYXBlZCwgZXhjbHVkZV9pbnRlcm5hbF9wcm9wcywgZml4X2FuZF9kZXN0cm95X2Jsb2NrLCBmaXhfYW5kX291dHJvX2FuZF9kZXN0cm95X2Jsb2NrLCBmaXhfcG9zaXRpb24sIGZsdXNoLCBnZXRBbGxDb250ZXh0cywgZ2V0Q29udGV4dCwgZ2V0X2FsbF9kaXJ0eV9mcm9tX3Njb3BlLCBnZXRfYmluZGluZ19ncm91cF92YWx1ZSwgZ2V0X2N1cnJlbnRfY29tcG9uZW50LCBnZXRfY3VzdG9tX2VsZW1lbnRzX3Nsb3RzLCBnZXRfcm9vdF9mb3Jfc3R5bGUsIGdldF9zbG90X2NoYW5nZXMsIGdldF9zcHJlYWRfb2JqZWN0LCBnZXRfc3ByZWFkX3VwZGF0ZSwgZ2V0X3N0b3JlX3ZhbHVlLCBnbG9iYWxzLCBncm91cF9vdXRyb3MsIGhhbmRsZV9wcm9taXNlLCBoYXNDb250ZXh0LCBoYXNfcHJvcCwgaWRlbnRpdHksIGluaXQsIGluc2VydCwgaW5zZXJ0X2RldiwgaW5zZXJ0X2h5ZHJhdGlvbiwgaW5zZXJ0X2h5ZHJhdGlvbl9kZXYsIGludHJvcywgaW52YWxpZF9hdHRyaWJ1dGVfbmFtZV9jaGFyYWN0ZXIsIGlzX2NsaWVudCwgaXNfY3Jvc3NvcmlnaW4sIGlzX2VtcHR5LCBpc19mdW5jdGlvbiwgaXNfcHJvbWlzZSwgbGlzdGVuLCBsaXN0ZW5fZGV2LCBsb29wLCBsb29wX2d1YXJkLCBtZXJnZV9zc3Jfc3R5bGVzLCBtaXNzaW5nX2NvbXBvbmVudCwgbW91bnRfY29tcG9uZW50LCBub29wLCBub3RfZXF1YWwsIG5vdywgbnVsbF90b19lbXB0eSwgb2JqZWN0X3dpdGhvdXRfcHJvcGVydGllcywgb25EZXN0cm95LCBvbk1vdW50LCBvbmNlLCBvdXRyb19hbmRfZGVzdHJveV9ibG9jaywgcHJldmVudF9kZWZhdWx0LCBwcm9wX2RldiwgcXVlcnlfc2VsZWN0b3JfYWxsLCByYWYsIHJ1biwgcnVuX2FsbCwgc2FmZV9ub3RfZXF1YWwsIHNjaGVkdWxlX3VwZGF0ZSwgc2VsZWN0X211bHRpcGxlX3ZhbHVlLCBzZWxlY3Rfb3B0aW9uLCBzZWxlY3Rfb3B0aW9ucywgc2VsZWN0X3ZhbHVlLCBzZWxmLCBzZXRDb250ZXh0LCBzZXRfYXR0cmlidXRlcywgc2V0X2N1cnJlbnRfY29tcG9uZW50LCBzZXRfY3VzdG9tX2VsZW1lbnRfZGF0YSwgc2V0X2RhdGEsIHNldF9kYXRhX2Rldiwgc2V0X2lucHV0X3R5cGUsIHNldF9pbnB1dF92YWx1ZSwgc2V0X25vdywgc2V0X3JhZiwgc2V0X3N0b3JlX3ZhbHVlLCBzZXRfc3R5bGUsIHNldF9zdmdfYXR0cmlidXRlcywgc3BhY2UsIHNwcmVhZCwgc3JjX3VybF9lcXVhbCwgc3RhcnRfaHlkcmF0aW5nLCBzdG9wX3Byb3BhZ2F0aW9uLCBzdWJzY3JpYmUsIHN2Z19lbGVtZW50LCB0ZXh0LCB0aWNrLCB0aW1lX3Jhbmdlc190b19hcnJheSwgdG9fbnVtYmVyLCB0b2dnbGVfY2xhc3MsIHRyYW5zaXRpb25faW4sIHRyYW5zaXRpb25fb3V0LCB0cnVzdGVkLCB1cGRhdGVfYXdhaXRfYmxvY2tfYnJhbmNoLCB1cGRhdGVfa2V5ZWRfZWFjaCwgdXBkYXRlX3Nsb3QsIHVwZGF0ZV9zbG90X2Jhc2UsIHZhbGlkYXRlX2NvbXBvbmVudCwgdmFsaWRhdGVfZWFjaF9hcmd1bWVudCwgdmFsaWRhdGVfZWFjaF9rZXlzLCB2YWxpZGF0ZV9zbG90cywgdmFsaWRhdGVfc3RvcmUsIHhsaW5rX2F0dHIgfTtcbiIsImltcG9ydCB7IG5vb3AsIHNhZmVfbm90X2VxdWFsLCBzdWJzY3JpYmUsIHJ1bl9hbGwsIGlzX2Z1bmN0aW9uIH0gZnJvbSAnLi4vaW50ZXJuYWwvaW5kZXgubWpzJztcbmV4cG9ydCB7IGdldF9zdG9yZV92YWx1ZSBhcyBnZXQgfSBmcm9tICcuLi9pbnRlcm5hbC9pbmRleC5tanMnO1xuXG5jb25zdCBzdWJzY3JpYmVyX3F1ZXVlID0gW107XG4vKipcbiAqIENyZWF0ZXMgYSBgUmVhZGFibGVgIHN0b3JlIHRoYXQgYWxsb3dzIHJlYWRpbmcgYnkgc3Vic2NyaXB0aW9uLlxuICogQHBhcmFtIHZhbHVlIGluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7U3RhcnRTdG9wTm90aWZpZXJ9c3RhcnQgc3RhcnQgYW5kIHN0b3Agbm90aWZpY2F0aW9ucyBmb3Igc3Vic2NyaXB0aW9uc1xuICovXG5mdW5jdGlvbiByZWFkYWJsZSh2YWx1ZSwgc3RhcnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdWJzY3JpYmU6IHdyaXRhYmxlKHZhbHVlLCBzdGFydCkuc3Vic2NyaWJlXG4gICAgfTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgYFdyaXRhYmxlYCBzdG9yZSB0aGF0IGFsbG93cyBib3RoIHVwZGF0aW5nIGFuZCByZWFkaW5nIGJ5IHN1YnNjcmlwdGlvbi5cbiAqIEBwYXJhbSB7Kj19dmFsdWUgaW5pdGlhbCB2YWx1ZVxuICogQHBhcmFtIHtTdGFydFN0b3BOb3RpZmllcj19c3RhcnQgc3RhcnQgYW5kIHN0b3Agbm90aWZpY2F0aW9ucyBmb3Igc3Vic2NyaXB0aW9uc1xuICovXG5mdW5jdGlvbiB3cml0YWJsZSh2YWx1ZSwgc3RhcnQgPSBub29wKSB7XG4gICAgbGV0IHN0b3A7XG4gICAgY29uc3Qgc3Vic2NyaWJlcnMgPSBuZXcgU2V0KCk7XG4gICAgZnVuY3Rpb24gc2V0KG5ld192YWx1ZSkge1xuICAgICAgICBpZiAoc2FmZV9ub3RfZXF1YWwodmFsdWUsIG5ld192YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbmV3X3ZhbHVlO1xuICAgICAgICAgICAgaWYgKHN0b3ApIHsgLy8gc3RvcmUgaXMgcmVhZHlcbiAgICAgICAgICAgICAgICBjb25zdCBydW5fcXVldWUgPSAhc3Vic2NyaWJlcl9xdWV1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBzdWJzY3JpYmVyIG9mIHN1YnNjcmliZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJbMV0oKTtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcl9xdWV1ZS5wdXNoKHN1YnNjcmliZXIsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJ1bl9xdWV1ZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZXJfcXVldWUubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWVbaV1bMF0oc3Vic2NyaWJlcl9xdWV1ZVtpICsgMV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlKGZuKSB7XG4gICAgICAgIHNldChmbih2YWx1ZSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdWJzY3JpYmUocnVuLCBpbnZhbGlkYXRlID0gbm9vcCkge1xuICAgICAgICBjb25zdCBzdWJzY3JpYmVyID0gW3J1biwgaW52YWxpZGF0ZV07XG4gICAgICAgIHN1YnNjcmliZXJzLmFkZChzdWJzY3JpYmVyKTtcbiAgICAgICAgaWYgKHN1YnNjcmliZXJzLnNpemUgPT09IDEpIHtcbiAgICAgICAgICAgIHN0b3AgPSBzdGFydChzZXQpIHx8IG5vb3A7XG4gICAgICAgIH1cbiAgICAgICAgcnVuKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHN1YnNjcmliZXJzLmRlbGV0ZShzdWJzY3JpYmVyKTtcbiAgICAgICAgICAgIGlmIChzdWJzY3JpYmVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc3RvcCgpO1xuICAgICAgICAgICAgICAgIHN0b3AgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4geyBzZXQsIHVwZGF0ZSwgc3Vic2NyaWJlIH07XG59XG5mdW5jdGlvbiBkZXJpdmVkKHN0b3JlcywgZm4sIGluaXRpYWxfdmFsdWUpIHtcbiAgICBjb25zdCBzaW5nbGUgPSAhQXJyYXkuaXNBcnJheShzdG9yZXMpO1xuICAgIGNvbnN0IHN0b3Jlc19hcnJheSA9IHNpbmdsZVxuICAgICAgICA/IFtzdG9yZXNdXG4gICAgICAgIDogc3RvcmVzO1xuICAgIGNvbnN0IGF1dG8gPSBmbi5sZW5ndGggPCAyO1xuICAgIHJldHVybiByZWFkYWJsZShpbml0aWFsX3ZhbHVlLCAoc2V0KSA9PiB7XG4gICAgICAgIGxldCBpbml0ZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gW107XG4gICAgICAgIGxldCBwZW5kaW5nID0gMDtcbiAgICAgICAgbGV0IGNsZWFudXAgPSBub29wO1xuICAgICAgICBjb25zdCBzeW5jID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHBlbmRpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmbihzaW5nbGUgPyB2YWx1ZXNbMF0gOiB2YWx1ZXMsIHNldCk7XG4gICAgICAgICAgICBpZiAoYXV0bykge1xuICAgICAgICAgICAgICAgIHNldChyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xlYW51cCA9IGlzX2Z1bmN0aW9uKHJlc3VsdCkgPyByZXN1bHQgOiBub29wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB1bnN1YnNjcmliZXJzID0gc3RvcmVzX2FycmF5Lm1hcCgoc3RvcmUsIGkpID0+IHN1YnNjcmliZShzdG9yZSwgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB2YWx1ZXNbaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHBlbmRpbmcgJj0gfigxIDw8IGkpO1xuICAgICAgICAgICAgaWYgKGluaXRlZCkge1xuICAgICAgICAgICAgICAgIHN5bmMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgcGVuZGluZyB8PSAoMSA8PCBpKTtcbiAgICAgICAgfSkpO1xuICAgICAgICBpbml0ZWQgPSB0cnVlO1xuICAgICAgICBzeW5jKCk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICAgICAgcnVuX2FsbCh1bnN1YnNjcmliZXJzKTtcbiAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgZGVyaXZlZCwgcmVhZGFibGUsIHdyaXRhYmxlIH07XG4iLCJpbXBvcnQgeyBXcml0YWJsZSwgd3JpdGFibGUgfSBmcm9tIFwic3ZlbHRlL3N0b3JlXCI7XG5pbXBvcnQgdHlwZSB7IE1hbmlmZXN0IH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG5cbnR5cGUgRXJyb3JTdG9yZSA9IFJlY29yZDxzdHJpbmcsIE1hbmlmZXN0W1wiZXJyb3JcIl0+O1xuXG5mdW5jdGlvbiBpbml0aWFsaXplKCk6IFdyaXRhYmxlPEVycm9yU3RvcmU+IHtcbiAgcmV0dXJuIHdyaXRhYmxlKHt9KTtcbn1cblxuZXhwb3J0IGNvbnN0IEVycm9yU3RvcmUgPSBpbml0aWFsaXplKCk7XG4iLCJpbXBvcnQgeyBFcnJvclN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlL2Vycm9yXCI7XG5pbXBvcnQgdHlwZSB7IE1hbmlmZXN0IH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYW5kbGVSZXNwb25zZTxUID0gdW5rbm93bj4oXG4gIHJlc3BvbnNlOiBSZXNwb25zZSxcbik6IFByb21pc2U8VD4ge1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgY29uc3QgcGFzc2VkRXJyb3IgPSBhd2FpdCByZXNwb25zZS5qc29uKCkudGhlbihcbiAgICAgIChqc29uOiB7XG4gICAgICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgICByZXNwb25zZT86IHtcbiAgICAgICAgICBlcnJvcj86IHN0cmluZztcbiAgICAgICAgfTtcbiAgICAgIH0pID0+IGpzb24sXG4gICAgKTtcblxuICAgIGNvbnN0IG1lc3NhZ2UgPSBwYXNzZWRFcnJvcj8ucmVzcG9uc2U/LmVycm9yIHx8IHBhc3NlZEVycm9yPy5tZXNzYWdlO1xuXG4gICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgZXJyb3IubmFtZSA9IHBhc3NlZEVycm9yLm5hbWU7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHsgbWVzc2FnZTogZXJyb3IsIHN0YXR1c0NvZGU6IHJlc3BvbnNlLnN0YXR1cyB9KTtcbiAgfVxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufVxuXG50eXBlIEhUVFBNZXRob2QgPSBcIlBPU1RcIiB8IFwiR0VUXCIgfCBcIlBVVFwiIHwgXCJQQVRDSFwiIHwgXCJPUFRJT05TXCIgfCB1bmRlZmluZWQ7XG5cbnR5cGUgRmV0Y2hPcHRpb25zID0ge1xuICBib2R5PzogdW5rbm93bjtcbiAgbWV0aG9kPzogSFRUUE1ldGhvZDtcbiAgY29tcG9uZW50X2lkPzogc3RyaW5nO1xuICBhY2Nlc3NfdG9rZW4/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmV0Y2hDb25maWcoXG4gIG9wdHM6IEZldGNoT3B0aW9ucyA9IHsgY29tcG9uZW50X2lkOiBcIlwiIH0sXG4pOiBSZXF1ZXN0SW5pdCB7XG4gIHJldHVybiB7XG4gICAgbWV0aG9kOiBvcHRzLm1ldGhvZCB8fCBcIkdFVFwiLCAvLyBHRVQgaXMgZGVmYXVsdCBtZXRob2RcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBcIlgtQ29tcG9uZW50LUlkXCI6IG9wdHMuY29tcG9uZW50X2lkIHx8IFwiXCIsIC8vIENvbXBvbmVudCBJRCBpcyBwYXNzZWQgYXMgaGVhZGVyXG4gICAgICBcIlgtQWNjZXNzLVRva2VuXCI6IG9wdHMuYWNjZXNzX3Rva2VuIHx8IFwiXCIsIC8vIEFjY2VzcyBUb2tlbiBpcyBwYXNzZWQgYXMgaGVhZGVyXG4gICAgfSxcbiAgICBib2R5OiBvcHRzLmJvZHkgPyBKU09OLnN0cmluZ2lmeShvcHRzLmJvZHkpIDogdW5kZWZpbmVkLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRXJyb3IoaWQ6IHN0cmluZywgZXJyb3I6IE1hbmlmZXN0W1wiZXJyb3JcIl0pOiBuZXZlciB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICBFcnJvclN0b3JlLnVwZGF0ZSgoZXJyb3JNYXApID0+ICh7IC4uLmVycm9yTWFwLCBbaWRdOiBlcnJvciB9KSk7XG4gIHRocm93IGVycm9yO1xufVxuXG5jb25zdCBSRUdJT05fTUFQUElORzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgXCIwMDFcIjogXCJcIiwgLy8gVVNcbiAgXCIwMDJcIjogXCJpcmVsYW5kLVwiLCAvLyBFVVxuICBcIjAwM1wiOiBcImNhbmFkYS1cIiwgLy8gQ2FuYWRhXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWlkZGxld2FyZUFwaVVybChpZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IHJlZ2lvbiA9IFwiXCI7XG4gIGlmIChpZC5zdWJzdHJpbmcoMywgNCkgPT09IFwiLVwiKSB7XG4gICAgY29uc3QgY29kZSA9IGlkLnN1YnN0cmluZygwLCAzKTtcbiAgICBpZiAodHlwZW9mIFJFR0lPTl9NQVBQSU5HW2NvZGVdICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZWdpb24gPSBSRUdJT05fTUFQUElOR1tjb2RlXTtcbiAgICB9XG4gIH1cbiAgY29uc3QgQVBJX0dBVEVXQVkgPSBgaHR0cHM6Ly8ke3JlZ2lvbn0ke3Byb2Nlc3MuZW52LkFQSV9HQVRFV0FZfWA7XG4gIHJldHVybiBBUElfR0FURVdBWTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpbGVuY2UoZXJyb3I6IEVycm9yKSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRRdWVyeVBhcmFtcyhwYXJhbXM6IFJlY29yZDxzdHJpbmcsIGFueT4pOiBzdHJpbmcge1xuICByZXR1cm4gT2JqZWN0LmtleXMocGFyYW1zKVxuICAgIC5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICBpZiAocGFyYW1zW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhY2MuYXBwZW5kKGtleSwgcGFyYW1zW2tleV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBuZXcgVVJMU2VhcmNoUGFyYW1zKCkpXG4gICAgLnRvU3RyaW5nKCk7XG59XG4iLCJpbXBvcnQge1xuICBnZXRGZXRjaENvbmZpZyxcbiAgaGFuZGxlRXJyb3IsXG4gIGhhbmRsZVJlc3BvbnNlLFxuICBnZXRNaWRkbGV3YXJlQXBpVXJsLFxuICBidWlsZFF1ZXJ5UGFyYW1zLFxufSBmcm9tIFwiLi4vbWV0aG9kcy9hcGlcIjtcbmltcG9ydCB0eXBlIHtcbiAgQ29udGFjdHNRdWVyeSxcbiAgQ29udGFjdCxcbiAgQ29udGFjdFNlYXJjaFF1ZXJ5LFxuICBDb250YWN0c1F1ZXJ5UGFyYW1zLFxufSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvQ29udGFjdHNcIjtcbmltcG9ydCB0eXBlIHsgTWlkZGxld2FyZVJlc3BvbnNlLCBUaHJlYWQgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvTnlsYXNcIjtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ29udGFjdHMgPSBhc3luYyAoXG4gIHF1ZXJ5OiBDb250YWN0c1F1ZXJ5LFxuICBwYXJhbXM6IENvbnRhY3RzUXVlcnlQYXJhbXMsXG4pOiBQcm9taXNlPENvbnRhY3RbXT4gPT4ge1xuICBjb25zdCB1cmwgPSBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKFxuICAgIHF1ZXJ5LmNvbXBvbmVudF9pZCxcbiAgKX0vY29udGFjdC1saXN0L2NvbnRhY3RzPyR7YnVpbGRRdWVyeVBhcmFtcyhwYXJhbXMpfWA7XG5cbiAgY29uc3QgY29udGFjdHMgPSBhd2FpdCBmZXRjaChcbiAgICB1cmwsXG4gICAgZ2V0RmV0Y2hDb25maWcoe1xuICAgICAgY29tcG9uZW50X2lkOiBxdWVyeS5jb21wb25lbnRfaWQsXG4gICAgICBhY2Nlc3NfdG9rZW46IHF1ZXJ5LmFjY2Vzc190b2tlbixcbiAgICB9KSxcbiAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPENvbnRhY3RbXT4+KHJlc3BvbnNlKSlcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgcmV0dXJuIGpzb24ucmVzcG9uc2U7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihxdWVyeS5jb21wb25lbnRfaWQsIGVycm9yKSk7XG4gIHJldHVybiBjb250YWN0cyA/PyBbXTtcbn07XG5cbi8vIHF1ZXJ5LnF1ZXJ5IHNob3VsZCBiZSBhIHF1ZXJ5U3RyaW5nIGFzIGRlZmluZWQgYXQgaHR0cHM6Ly9kb2NzLm55bGFzLmNvbS9yZWZlcmVuY2UjY29udGFjdHMtMVxuZXhwb3J0IGNvbnN0IGZldGNoQ29udGFjdHNCeVF1ZXJ5ID0gYXN5bmMgKFxuICBxdWVyeTogQ29udGFjdFNlYXJjaFF1ZXJ5LFxuKTogUHJvbWlzZTxDb250YWN0W10+ID0+IHtcbiAgY29uc3QgY29udGFjdHMgPSBhd2FpdCBmZXRjaChcbiAgICBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKHF1ZXJ5LmNvbXBvbmVudF9pZCl9L2NvbnRhY3RzJHtxdWVyeS5xdWVyeX1gLFxuICAgIGdldEZldGNoQ29uZmlnKHtcbiAgICAgIGNvbXBvbmVudF9pZDogcXVlcnkuY29tcG9uZW50X2lkLFxuICAgICAgYWNjZXNzX3Rva2VuOiBxdWVyeS5hY2Nlc3NfdG9rZW4sXG4gICAgfSksXG4gIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxDb250YWN0W10+PihyZXNwb25zZSkpXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xuXG4gIHJldHVybiBjb250YWN0cyA/PyBbXTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaENvbnRhY3RJbWFnZSA9IGFzeW5jIChcbiAgcXVlcnk6IENvbnRhY3RzUXVlcnksXG4gIGlkOiBzdHJpbmcsXG4pOiBQcm9taXNlPHN0cmluZz4gPT4ge1xuICByZXR1cm4gYXdhaXQgZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChxdWVyeS5jb21wb25lbnRfaWQpfS9jb250YWN0cy8ke2lkfS9waWN0dXJlYCxcbiAgICBnZXRGZXRjaENvbmZpZyh7XG4gICAgICBjb21wb25lbnRfaWQ6IHF1ZXJ5LmNvbXBvbmVudF9pZCxcbiAgICAgIGFjY2Vzc190b2tlbjogcXVlcnkuYWNjZXNzX3Rva2VuLFxuICAgIH0pLFxuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8c3RyaW5nPj4ocmVzcG9uc2UpKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaENvbnRhY3RUaHJlYWRzID0gYXN5bmMgKFxuICBxdWVyeTogQ29udGFjdHNRdWVyeSxcbiAgb2Zmc2V0OiBudW1iZXIsXG4gIGxpbWl0OiBudW1iZXIsXG4pOiBQcm9taXNlPFRocmVhZFtdPiA9PiB7XG4gIHJldHVybiBhd2FpdCBmZXRjaChcbiAgICBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKFxuICAgICAgcXVlcnkuY29tcG9uZW50X2lkLFxuICAgICl9L3RocmVhZHM/b2Zmc2V0PSR7b2Zmc2V0fSZsaW1pdD0ke2xpbWl0fWAsXG4gICAgZ2V0RmV0Y2hDb25maWcocXVlcnkpLFxuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8VGhyZWFkW10+PihyZXNwb25zZSkpXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xufTtcbiIsImltcG9ydCB7XG4gIGdldEZldGNoQ29uZmlnLFxuICBoYW5kbGVFcnJvcixcbiAgaGFuZGxlUmVzcG9uc2UsXG4gIGdldE1pZGRsZXdhcmVBcGlVcmwsXG59IGZyb20gXCIuLi9tZXRob2RzL2FwaVwiO1xuaW1wb3J0IHR5cGUge1xuICBNYWlsYm94UXVlcnksXG4gIFRocmVhZCxcbiAgQ29udmVyc2F0aW9uUXVlcnksXG4gIENvbnZlcnNhdGlvbixcbiAgTWlkZGxld2FyZVJlc3BvbnNlLFxufSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvTnlsYXNcIjtcblxuZXhwb3J0IGNvbnN0IGZldGNoVGhyZWFkcyA9IChcbiAgcXVlcnk6IE1haWxib3hRdWVyeSxcbiAgbGltaXQ6IG51bWJlcixcbiAgb2Zmc2V0OiBudW1iZXIsXG4pOiBQcm9taXNlPFRocmVhZFtdPiA9PiB7XG4gIGlmIChxdWVyeS50aHJlYWRfaWRzKSB7XG4gICAgLy8gJmxpbWl0PSR7bGltaXR9Jm9mZnNldD0ke29mZnNldH1cbiAgICBjb25zdCBwYWdlX29mX2lkcyA9IHF1ZXJ5LnRocmVhZF9pZHMuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBsaW1pdCk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgICAgcGFnZV9vZl9pZHMubWFwKGFzeW5jICh0aHJlYWRfaWQpID0+IHtcbiAgICAgICAgLy8gTnlsYXMgQVBJIGRvZXMgbm90IHN1cHBvcnQgZmV0Y2hpbmcgdGhyZWFkcyBpbiBidWxrLCBzbyBtdXN0IGZldGNoIHRoZW0gb25lXG4gICAgICAgIC8vIGF0IGEgdGltZSA6KFxuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9IGAke2dldE1pZGRsZXdhcmVBcGlVcmwoXG4gICAgICAgICAgcXVlcnkuY29tcG9uZW50X2lkLFxuICAgICAgICApfS90aHJlYWRzLyR7dGhyZWFkX2lkfT92aWV3PWV4cGFuZGVkYDtcbiAgICAgICAgLy8gVE9ETzogaWRlYWxseSB0aGlzIHdvdWxkbid0IHJlcGxpY2F0ZSBtdWNoIG9mIHRoZSBjb2RlIGZyb20gYmVsb3dcbiAgICAgICAgcmV0dXJuIGF3YWl0IGZldGNoKHF1ZXJ5U3RyaW5nLCBnZXRGZXRjaENvbmZpZyhxdWVyeSkpXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PlxuICAgICAgICAgICAgaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPFRocmVhZD4+KHJlc3BvbnNlKSxcbiAgICAgICAgICApXG4gICAgICAgICAgLnRoZW4oKGpzb24pID0+IGpzb24ucmVzcG9uc2UpXG4gICAgICAgICAgLy8gVE9ETzogUmVtb3ZlIHRoaXMgdWdseSBoYWNrIHdoZW4gd2UgZml4IHRoZSBBUEkgZnJvbSByZXR1cm5pbmcgZ2hvc3QgbWVzc2FnZXMgKGUuZy4gdy9vIGEgZnJvbS90byBmaWVsZClcbiAgICAgICAgICAudGhlbigodGhyZWFkKSA9PiAoe1xuICAgICAgICAgICAgLi4udGhyZWFkLFxuICAgICAgICAgICAgbWVzc2FnZXM6IHRocmVhZC5tZXNzYWdlcy5maWx0ZXIoXG4gICAgICAgICAgICAgIChtZXNzYWdlKSA9PiBtZXNzYWdlLmZyb20ubGVuZ3RoICE9PSAwIHx8IG1lc3NhZ2UudG8ubGVuZ3RoICE9PSAwLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICB9KSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihxdWVyeS5jb21wb25lbnRfaWQsIGVycm9yKSk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG4gIGxldCBxdWVyeVN0cmluZyA9IGAke2dldE1pZGRsZXdhcmVBcGlVcmwoXG4gICAgcXVlcnkuY29tcG9uZW50X2lkLFxuICApfS90aHJlYWRzP3ZpZXc9ZXhwYW5kZWQmbm90X2luPXRyYXNoJmxpbWl0PSR7bGltaXR9Jm9mZnNldD0ke29mZnNldH1gO1xuICBpZiAocXVlcnkucXVlcnkpIHtcbiAgICBPYmplY3QuZW50cmllcyhxdWVyeS5xdWVyeSkuZm9yRWFjaChcbiAgICAgIChwYXJhbSkgPT4gKHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmcuY29uY2F0KGAmJHtwYXJhbVswXX09JHtwYXJhbVsxXX1gKSksXG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIGZldGNoKHF1ZXJ5U3RyaW5nLCBnZXRGZXRjaENvbmZpZyhxdWVyeSkpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+XG4gICAgICAgIGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxUaHJlYWRbXT4+KHJlc3BvbnNlKSxcbiAgICAgIClcbiAgICAgIC50aGVuKChqc29uKSA9PiBqc29uLnJlc3BvbnNlKVxuICAgICAgLy8gVE9ETzogUmVtb3ZlIHRoaXMgdWdseSBoYWNrIHdoZW4gd2UgZml4IHRoZSBBUEkgZnJvbSByZXR1cm5pbmcgZ2hvc3QgbWVzc2FnZXMgKGUuZy4gdy9vIGEgZnJvbS90byBmaWVsZClcbiAgICAgIC50aGVuKCh0aHJlYWRzKSA9PlxuICAgICAgICB0aHJlYWRzLm1hcCgodGhyZWFkKSA9PiAoe1xuICAgICAgICAgIC4uLnRocmVhZCxcbiAgICAgICAgICBtZXNzYWdlczogdGhyZWFkLm1lc3NhZ2VzLmZpbHRlcihcbiAgICAgICAgICAgIChtZXNzYWdlKSA9PiBtZXNzYWdlLmZyb20ubGVuZ3RoICE9PSAwIHx8IG1lc3NhZ2UudG8ubGVuZ3RoICE9PSAwLFxuICAgICAgICAgICksXG4gICAgICAgIH0pKSxcbiAgICAgIClcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKVxuICApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoVGhyZWFkQ291bnQocXVlcnk6IE1haWxib3hRdWVyeSk6IFByb21pc2U8bnVtYmVyPiB7XG4gIGxldCBxdWVyeVN0cmluZyA9IGAke2dldE1pZGRsZXdhcmVBcGlVcmwoXG4gICAgcXVlcnkuY29tcG9uZW50X2lkLFxuICApfS90aHJlYWRzP3ZpZXc9ZXhwYW5kZWQmbm90X2luPXRyYXNoJnZpZXc9Y291bnRgO1xuICBpZiAocXVlcnkucXVlcnkpIHtcbiAgICBPYmplY3QuZW50cmllcyhxdWVyeS5xdWVyeSkuZm9yRWFjaChcbiAgICAgIChwYXJhbSkgPT4gKHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmcuY29uY2F0KGAmJHtwYXJhbVswXX09JHtwYXJhbVsxXX1gKSksXG4gICAgKTtcbiAgfVxuXG4gIGlmIChxdWVyeS5rZXl3b3JkVG9TZWFyY2gpIHtcbiAgICBxdWVyeVN0cmluZyArPSBgJnE9JHtxdWVyeS5rZXl3b3JkVG9TZWFyY2h9YDtcbiAgfVxuXG4gIHJldHVybiBmZXRjaChxdWVyeVN0cmluZywgZ2V0RmV0Y2hDb25maWcocXVlcnkpKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPGFueT4+KHJlc3BvbnNlKSlcbiAgICAudGhlbigoanNvbikgPT4ganNvbi5yZXNwb25zZS5jb3VudCk7XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNlYXJjaFJlc3VsdFRocmVhZHMgPSAoXG4gIHF1ZXJ5OiBNYWlsYm94UXVlcnksXG4pOiBQcm9taXNlPFRocmVhZFtdPiA9PiB7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gYCR7Z2V0TWlkZGxld2FyZUFwaVVybChcbiAgICBxdWVyeS5jb21wb25lbnRfaWQsXG4gICl9L3RocmVhZHMvc2VhcmNoP3E9JHtxdWVyeS5rZXl3b3JkVG9TZWFyY2h9JnZpZXc9ZXhwYW5kZWQmbGltaXQ9JHtcbiAgICBxdWVyeS5xdWVyeS5saW1pdFxuICB9Jm9mZnNldD0ke3F1ZXJ5LnF1ZXJ5Lm9mZnNldH1gO1xuXG4gIHJldHVybiBmZXRjaChxdWVyeVN0cmluZywgZ2V0RmV0Y2hDb25maWcocXVlcnkpKVxuICAgIC50aGVuKGFzeW5jIChyZXNwb25zZSkgPT5cbiAgICAgIGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxUaHJlYWRbXT4+KHJlc3BvbnNlKSxcbiAgICApXG4gICAgLnRoZW4oKGpzb24pID0+IGpzb24ucmVzcG9uc2UpXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoVGhyZWFkID0gYXN5bmMgKFxuICBxdWVyeTogQ29udmVyc2F0aW9uUXVlcnksXG4pOiBQcm9taXNlPENvbnZlcnNhdGlvbj4gPT4ge1xuICBjb25zdCB0aHJlYWQgPSBhd2FpdCBmZXRjaChcbiAgICBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKHF1ZXJ5LmNvbXBvbmVudF9pZCl9L3RocmVhZHMvJHtcbiAgICAgIHF1ZXJ5LnRocmVhZF9pZFxuICAgIH0/dmlldz1leHBhbmRlZGAsXG4gICAgZ2V0RmV0Y2hDb25maWcoe1xuICAgICAgY29tcG9uZW50X2lkOiBxdWVyeS5jb21wb25lbnRfaWQsXG4gICAgICBhY2Nlc3NfdG9rZW46IHF1ZXJ5LmFjY2Vzc190b2tlbixcbiAgICB9KSxcbiAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT5cbiAgICAgIGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxDb252ZXJzYXRpb24+PihyZXNwb25zZSksXG4gICAgKVxuICAgIC50aGVuKChqc29uKSA9PiBqc29uLnJlc3BvbnNlKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKTtcblxuICByZXR1cm4gdGhyZWFkO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVRocmVhZCA9IChcbiAgcXVlcnk6IENvbnZlcnNhdGlvblF1ZXJ5LFxuICB1cGRhdGVkVGhyZWFkOiBDb252ZXJzYXRpb24sXG4pOiBQcm9taXNlPENvbnZlcnNhdGlvbj4gPT4ge1xuICAvLyBhY2NlcHRzIHVucmVhZCwgc3RhcnJlZCwgZm9sZGVyX2lkICsgbGFiZWxfaWRzLiBkZXZlbG9wZXIubnlsYXMuY29tL2RvY3MvYXBpLyNwdXQvdGhyZWFkcy9pZFxuICByZXR1cm4gZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChxdWVyeS5jb21wb25lbnRfaWQpfS90aHJlYWRzLyR7dXBkYXRlZFRocmVhZC5pZH1gLFxuICAgIGdldEZldGNoQ29uZmlnKHtcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgIGNvbXBvbmVudF9pZDogcXVlcnkuY29tcG9uZW50X2lkLFxuICAgICAgYWNjZXNzX3Rva2VuOiBxdWVyeS5hY2Nlc3NfdG9rZW4sXG4gICAgICBib2R5OiB7XG4gICAgICAgIHVucmVhZDogdXBkYXRlZFRocmVhZC51bnJlYWQsXG4gICAgICAgIHN0YXJyZWQ6IHVwZGF0ZWRUaHJlYWQuc3RhcnJlZCxcbiAgICAgICAgZm9sZGVyX2lkOiB1cGRhdGVkVGhyZWFkLmZvbGRlcl9pZCxcbiAgICAgICAgbGFiZWxfaWRzOiB1cGRhdGVkVGhyZWFkLmxhYmVsX2lkcyxcbiAgICAgIH0sXG4gICAgfSksXG4gIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+XG4gICAgICBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8Q29udmVyc2F0aW9uPj4ocmVzcG9uc2UpLFxuICAgIClcbiAgICAudGhlbigoanNvbikgPT4ganNvbi5yZXNwb25zZSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihxdWVyeS5jb21wb25lbnRfaWQsIGVycm9yKSk7XG59O1xuIiwiaW1wb3J0IHtcbiAgZ2V0RmV0Y2hDb25maWcsXG4gIGhhbmRsZUVycm9yLFxuICBoYW5kbGVSZXNwb25zZSxcbiAgZ2V0TWlkZGxld2FyZUFwaVVybCxcbn0gZnJvbSBcIi4uL21ldGhvZHMvYXBpXCI7XG5pbXBvcnQgdHlwZSB7IE1hbmlmZXN0LCBNaWRkbGV3YXJlUmVzcG9uc2UgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvTnlsYXNcIjtcblxuZXhwb3J0IGNvbnN0IGZldGNoTWFuaWZlc3QgPSBhc3luYyAoXG4gIGlkOiBzdHJpbmcsXG4gIGFjY2Vzc190b2tlbj86IHN0cmluZyxcbik6IFByb21pc2U8TWFuaWZlc3Q+ID0+IHtcbiAgcmV0dXJuIGF3YWl0IGZldGNoKFxuICAgIGAke2dldE1pZGRsZXdhcmVBcGlVcmwoaWQpfS9tYW5pZmVzdGAsXG4gICAgZ2V0RmV0Y2hDb25maWcoe1xuICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgY29tcG9uZW50X2lkOiBpZCxcbiAgICB9KSxcbiAgKVxuICAgIC50aGVuPE1pZGRsZXdhcmVSZXNwb25zZT4oaGFuZGxlUmVzcG9uc2UpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5jb21wb25lbnQudGhlbWluZylcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihpZCwgZXJyb3IpKTtcbn07XG5cbi8vIEFsbG93cyA8bnlsYXMtc2NoZWR1bGUtZWRpdG9yPiB0byBtb2RpZnkgaXRzIG93biBwcm9wZXJ0aWVzXG5cbmV4cG9ydCBjb25zdCBzYXZlTWFuaWZlc3QgPSBhc3luYyAoXG4gIGlkOiBzdHJpbmcsXG4gIG1hbmlmZXN0OiBNYW5pZmVzdCxcbiAgYWNjZXNzX3Rva2VuPzogc3RyaW5nLFxuKTogUHJvbWlzZTxNYW5pZmVzdD4gPT4ge1xuICByZXR1cm4gZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChpZCl9L2NvbXBvbmVudGAsXG4gICAgZ2V0RmV0Y2hDb25maWcoe1xuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgY29tcG9uZW50X2lkOiBpZCxcbiAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgIGJvZHk6IHsgc2V0dGluZ3M6IG1hbmlmZXN0IH0sXG4gICAgfSksXG4gIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxNYW5pZmVzdD4+KHJlc3BvbnNlKSlcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgcmV0dXJuIGpzb24ucmVzcG9uc2U7XG4gICAgfSk7XG59O1xuIiwiaW1wb3J0IHsgTWVzc2FnZVN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlL21lc3NhZ2VzXCI7XG5pbXBvcnQge1xuICBnZXRGZXRjaENvbmZpZyxcbiAgaGFuZGxlRXJyb3IsXG4gIGhhbmRsZVJlc3BvbnNlLFxuICBnZXRNaWRkbGV3YXJlQXBpVXJsLFxufSBmcm9tIFwiLi4vbWV0aG9kcy9hcGlcIjtcbmltcG9ydCB0eXBlIHtcbiAgU2luZ3VsYXJFbWFpbCxcbiAgQ29tbW9uUXVlcnksXG4gIE1lc3NhZ2VzUXVlcnksXG4gIEZpbGUgYXMgTnlsYXNGaWxlLFxuICBNZXNzYWdlIGFzIE55bGFzTWVzc2FnZSxcbiAgTWlkZGxld2FyZVJlc3BvbnNlLFxufSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvTnlsYXNcIjtcbmltcG9ydCB0eXBlIHsgTWVzc2FnZSB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9Db21wb3NlclwiO1xuXG5leHBvcnQgY29uc3Qgc2VuZE1lc3NhZ2UgPSBhc3luYyAoXG4gIGNvbXBvbmVudF9pZDogc3RyaW5nLFxuICBtc2c6IE1lc3NhZ2UsXG4gIGFjY2Vzc190b2tlbj86IHN0cmluZyxcbik6IFByb21pc2U8TnlsYXNNZXNzYWdlPiA9PiB7XG4gIHJldHVybiBhd2FpdCBmZXRjaChcbiAgICBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKGNvbXBvbmVudF9pZCl9L3NlbmRgLFxuICAgIGdldEZldGNoQ29uZmlnKHsgbWV0aG9kOiBcIlBPU1RcIiwgY29tcG9uZW50X2lkLCBhY2Nlc3NfdG9rZW4sIGJvZHk6IG1zZyB9KSxcbiAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT5cbiAgICAgIGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxOeWxhc01lc3NhZ2U+PihyZXNwb25zZSksXG4gICAgKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKGNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVNZXNzYWdlKFxuICBjb21wb25lbnRfaWQ6IHN0cmluZyxcbiAgbWVzc2FnZTogTnlsYXNNZXNzYWdlLFxuICBhY2Nlc3NfdG9rZW4/OiBzdHJpbmcsXG4pOiBQcm9taXNlPE55bGFzTWVzc2FnZT4ge1xuICBjb25zdCB1cmwgPSBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKGNvbXBvbmVudF9pZCl9L21lc3NhZ2VzLyR7bWVzc2FnZS5pZH1gO1xuICBjb25zdCBmZXRjaENvbmZpZyA9IGdldEZldGNoQ29uZmlnKHtcbiAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgY29tcG9uZW50X2lkLFxuICAgIGFjY2Vzc190b2tlbixcbiAgICBib2R5OiB7IGZvbGRlcl9pZDogbWVzc2FnZS5mb2xkZXJfaWQsIGxhYmVsX2lkczogbWVzc2FnZS5sYWJlbF9pZHMgfSxcbiAgfSk7XG4gIHJldHVybiBhd2FpdCBmZXRjaCh1cmwsIGZldGNoQ29uZmlnKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT5cbiAgICAgIGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxOeWxhc01lc3NhZ2U+PihyZXNwb25zZSksXG4gICAgKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKGNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn1cblxuZXhwb3J0IGNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAoXG4gIGNvbXBvbmVudF9pZDogc3RyaW5nLFxuICBmaWxlOiBGaWxlLFxuICBhY2Nlc3NfdG9rZW4/OiBzdHJpbmcsXG4pOiBQcm9taXNlPE55bGFzRmlsZT4gPT4ge1xuICBjb25zdCBmZXRjaENvbmZpZzogUmVxdWVzdEluaXQgPSBnZXRGZXRjaENvbmZpZyh7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBjb21wb25lbnRfaWQsXG4gICAgYWNjZXNzX3Rva2VuLFxuICB9KTtcbiAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xuICBmb3JtLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XG4gIGlmIChcbiAgICB0eXBlb2YgZmV0Y2hDb25maWcuaGVhZGVycyAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgIFwiQ29udGVudC1UeXBlXCIgaW4gZmV0Y2hDb25maWcuaGVhZGVyc1xuICApIHtcbiAgICBkZWxldGUgZmV0Y2hDb25maWcuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXTtcbiAgfVxuICBmZXRjaENvbmZpZy5ib2R5ID0gZm9ybTtcbiAgcmV0dXJuIGF3YWl0IGZldGNoKGAke2dldE1pZGRsZXdhcmVBcGlVcmwoY29tcG9uZW50X2lkKX0vZmlsZXNgLCBmZXRjaENvbmZpZylcbiAgICAudGhlbigocmVzcG9uc2UpID0+IGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxOeWxhc0ZpbGU+PihyZXNwb25zZSkpXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGpzb24ucmVzcG9uc2UpID8ganNvbi5yZXNwb25zZVswXSA6IGpzb24ucmVzcG9uc2U7XG4gICAgfSlcbiAgICAuY2F0Y2goaGFuZGxlRXJyb3IuYmluZCgwLCBjb21wb25lbnRfaWQpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaE1lc3NhZ2VzID0gYXN5bmMgKFxuICBxdWVyeTogTWVzc2FnZXNRdWVyeSxcbiAgb2Zmc2V0OiBudW1iZXIsXG4gIGxpbWl0OiBudW1iZXIsXG4pOiBQcm9taXNlPE55bGFzTWVzc2FnZVtdPiA9PiB7XG4gIGxldCBxdWVyeVN0cmluZyA9IGAke2dldE1pZGRsZXdhcmVBcGlVcmwoXG4gICAgcXVlcnkuY29tcG9uZW50X2lkLFxuICApfS9tZXNzYWdlcz9vZmZzZXQ9JHtvZmZzZXR9JmxpbWl0PSR7bGltaXR9YDtcbiAgaWYgKHF1ZXJ5LnJlY2VpdmVkX2JlZm9yZSkge1xuICAgIHF1ZXJ5U3RyaW5nID0gYCR7cXVlcnlTdHJpbmd9JnJlY2VpdmVkX2JlZm9yZT0ke3F1ZXJ5LnJlY2VpdmVkX2JlZm9yZX1gO1xuICB9XG4gIGlmIChxdWVyeS5yZWNlaXZlZF9hZnRlcikge1xuICAgIHF1ZXJ5U3RyaW5nID0gYCR7cXVlcnlTdHJpbmd9JnJlY2VpdmVkX2FmdGVyPSR7cXVlcnkucmVjZWl2ZWRfYWZ0ZXJ9YDtcbiAgfVxuICByZXR1cm4gYXdhaXQgZmV0Y2gocXVlcnlTdHJpbmcsIGdldEZldGNoQ29uZmlnKHF1ZXJ5KSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+XG4gICAgICBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8TnlsYXNNZXNzYWdlW10+PihyZXNwb25zZSksXG4gICAgKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICBNZXNzYWdlU3RvcmUuYWRkTWVzc2FnZXMoe1xuICAgICAgICBxdWVyeUtleTogSlNPTi5zdHJpbmdpZnkocXVlcnkpLFxuICAgICAgICBkYXRhOiBqc29uLnJlc3BvbnNlLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaE1lc3NhZ2UgPSBhc3luYyAoXG4gIHF1ZXJ5OiBDb21tb25RdWVyeSxcbiAgbWVzc2FnZUlEOiBzdHJpbmcsXG4pOiBQcm9taXNlPE55bGFzTWVzc2FnZT4gPT4ge1xuICBjb25zdCBxdWVyeVN0cmluZyA9IGAke2dldE1pZGRsZXdhcmVBcGlVcmwoXG4gICAgcXVlcnkuY29tcG9uZW50X2lkLFxuICApfS9tZXNzYWdlcy8ke21lc3NhZ2VJRH1gO1xuICByZXR1cm4gYXdhaXQgZmV0Y2gocXVlcnlTdHJpbmcsIGdldEZldGNoQ29uZmlnKHF1ZXJ5KSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+XG4gICAgICBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8TnlsYXNNZXNzYWdlPj4ocmVzcG9uc2UpLFxuICAgIClcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgcmV0dXJuIGpzb24ucmVzcG9uc2U7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihxdWVyeS5jb21wb25lbnRfaWQsIGVycm9yKSk7XG59O1xuXG4vLyBGb3IgY2FzZXMgd2hlbiBzb21lb25lIHdhbnRzIHRvIHNob3cganVzdCBhIHNpbmdsZSBlbWFpbCBtZXNzYWdlLCByYXRoZXIgdGhhbiB0aGUgZnVsbCB0aHJlYWQgYW5kIHcvbyBwYXNzaW5nIGEgdGhyZWFkIGlkXG5leHBvcnQgY29uc3QgZmV0Y2hFbWFpbCA9IGFzeW5jIChcbiAgcXVlcnk6IFNpbmd1bGFyRW1haWwsXG4pOiBQcm9taXNlPE55bGFzTWVzc2FnZT4gPT4ge1xuICBjb25zdCBxdWVyeVN0cmluZyA9IGAke2dldE1pZGRsZXdhcmVBcGlVcmwocXVlcnkuY29tcG9uZW50X2lkKX0vbWVzc2FnZXMvJHtcbiAgICBxdWVyeS5tZXNzYWdlX2lkXG4gIH1gO1xuICByZXR1cm4gYXdhaXQgZmV0Y2gocXVlcnlTdHJpbmcsIGdldEZldGNoQ29uZmlnKHF1ZXJ5KSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+XG4gICAgICBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8TnlsYXNNZXNzYWdlPj4ocmVzcG9uc2UpLFxuICAgIClcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgcmV0dXJuIGpzb24ucmVzcG9uc2U7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihxdWVyeS5jb21wb25lbnRfaWQsIGVycm9yKSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2F2ZURyYWZ0ID0gYXN5bmMgKFxuICBjb21wb25lbnRfaWQ6IHN0cmluZyxcbiAgbXNnOiBNZXNzYWdlLFxuICBhY2Nlc3NfdG9rZW4/OiBzdHJpbmcsXG4pOiBQcm9taXNlPE55bGFzTWVzc2FnZT4gPT4ge1xuICByZXR1cm4gYXdhaXQgZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChjb21wb25lbnRfaWQpfS9kcmFmdHNgLFxuICAgIGdldEZldGNoQ29uZmlnKHsgbWV0aG9kOiBcIlBPU1RcIiwgY29tcG9uZW50X2lkLCBhY2Nlc3NfdG9rZW4sIGJvZHk6IG1zZyB9KSxcbiAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT5cbiAgICAgIGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxOeWxhc01lc3NhZ2U+PihyZXNwb25zZSksXG4gICAgKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKGNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVEcmFmdCA9IGFzeW5jIChcbiAgY29tcG9uZW50X2lkOiBzdHJpbmcsXG4gIG1zZzogTWVzc2FnZSxcbiAgYWNjZXNzX3Rva2VuPzogc3RyaW5nLFxuKTogUHJvbWlzZTxOeWxhc01lc3NhZ2U+ID0+IHtcbiAgcmV0dXJuIGF3YWl0IGZldGNoKFxuICAgIGAke2dldE1pZGRsZXdhcmVBcGlVcmwoY29tcG9uZW50X2lkKX0vZHJhZnRzLyR7bXNnLmlkfWAsXG4gICAgZ2V0RmV0Y2hDb25maWcoeyBtZXRob2Q6IFwiUFVUXCIsIGNvbXBvbmVudF9pZCwgYWNjZXNzX3Rva2VuLCBib2R5OiBtc2cgfSksXG4gIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+XG4gICAgICBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8TnlsYXNNZXNzYWdlPj4ocmVzcG9uc2UpLFxuICAgIClcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgcmV0dXJuIGpzb24ucmVzcG9uc2U7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihjb21wb25lbnRfaWQsIGVycm9yKSk7XG59O1xuIiwiaW1wb3J0IHtcbiAgZ2V0RmV0Y2hDb25maWcsXG4gIGhhbmRsZUVycm9yLFxuICBoYW5kbGVSZXNwb25zZSxcbiAgZ2V0TWlkZGxld2FyZUFwaVVybCxcbn0gZnJvbSBcIi4uL21ldGhvZHMvYXBpXCI7XG5pbXBvcnQgdHlwZSB7XG4gIEFjY291bnRRdWVyeSxcbiAgQWNjb3VudCxcbiAgTWlkZGxld2FyZVJlc3BvbnNlLFxufSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvTnlsYXNcIjtcblxuZXhwb3J0IGNvbnN0IGZldGNoQWNjb3VudCA9IGFzeW5jIChxdWVyeTogQWNjb3VudFF1ZXJ5KTogUHJvbWlzZTxBY2NvdW50PiA9PiB7XG4gIGNvbnN0IGFjY291bnQgPSBhd2FpdCBmZXRjaChcbiAgICBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKHF1ZXJ5LmNvbXBvbmVudF9pZCl9L2FjY291bnRgLFxuICAgIGdldEZldGNoQ29uZmlnKHF1ZXJ5KSxcbiAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPEFjY291bnQ+PihyZXNwb25zZSkpXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xuXG4gIHJldHVybiBhY2NvdW50O1xufTtcbiIsImltcG9ydCB7XG4gIGdldEZldGNoQ29uZmlnLFxuICBoYW5kbGVFcnJvcixcbiAgaGFuZGxlUmVzcG9uc2UsXG4gIGdldE1pZGRsZXdhcmVBcGlVcmwsXG59IGZyb20gXCIuLi9tZXRob2RzL2FwaVwiO1xuaW1wb3J0IHR5cGUge1xuICBDbGVhbkNvbnZlcnNhdGlvblF1ZXJ5LFxuICBNZXNzYWdlLFxuICBDbGVhbkNvbnZlcnNhdGlvbkZlZWRiYWNrUXVlcnksXG4gIE1pZGRsZXdhcmVSZXNwb25zZSxcbn0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENsZWFuQ29udmVyc2F0aW9ucyA9IChcbiAgcXVlcnk6IENsZWFuQ29udmVyc2F0aW9uUXVlcnksXG4pOiBQcm9taXNlPE1lc3NhZ2VbXT4gPT4ge1xuICByZXR1cm4gZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChxdWVyeS5jb21wb25lbnRfaWQpfS9uZXVyYWwvY29udmVyc2F0aW9uYCxcbiAgICBnZXRGZXRjaENvbmZpZyh7XG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICBhY2Nlc3NfdG9rZW46IHF1ZXJ5LmFjY2Vzc190b2tlbixcbiAgICAgIGNvbXBvbmVudF9pZDogcXVlcnkuY29tcG9uZW50X2lkLFxuICAgICAgYm9keTogeyBtZXNzYWdlX2lkOiBxdWVyeS5tZXNzYWdlX2lkIH0sXG4gICAgfSksXG4gIClcbiAgICAudGhlbihhc3luYyAoYXBpUmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8TWVzc2FnZVtdPj4oXG4gICAgICAgIGFwaVJlc3BvbnNlLFxuICAgICAgKTtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbmRDbGVhbkNvbnZlcnNhdGlvbkZlZWRiYWNrID0gKFxuICBxdWVyeTogQ2xlYW5Db252ZXJzYXRpb25GZWVkYmFja1F1ZXJ5LFxuKTogUHJvbWlzZTxNZXNzYWdlPiA9PiB7XG4gIHJldHVybiBmZXRjaChcbiAgICBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKHF1ZXJ5LmNvbXBvbmVudF9pZCl9L25ldXJhbC9jb252ZXJzYXRpb24vZmVlZGJhY2tgLFxuICAgIGdldEZldGNoQ29uZmlnKHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBhY2Nlc3NfdG9rZW46IHF1ZXJ5LmFjY2Vzc190b2tlbixcbiAgICAgIGNvbXBvbmVudF9pZDogcXVlcnkuY29tcG9uZW50X2lkLFxuICAgICAgYm9keTogeyBtZXNzYWdlX2lkOiBxdWVyeS5tZXNzYWdlX2lkIH0sXG4gICAgfSksXG4gIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxNZXNzYWdlPj4ocmVzcG9uc2UpKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn07XG4iLCJpbXBvcnQge1xuICBnZXRGZXRjaENvbmZpZyxcbiAgaGFuZGxlRXJyb3IsXG4gIGhhbmRsZVJlc3BvbnNlLFxuICBnZXRNaWRkbGV3YXJlQXBpVXJsLFxufSBmcm9tIFwiLi4vbWV0aG9kcy9hcGlcIjtcbmltcG9ydCB0eXBlIHtcbiAgQ29uc2VjdXRpdmVBdmFpbGFiaWxpdHlRdWVyeSxcbiAgQXZhaWxhYmlsaXR5UXVlcnksXG4gIEF2YWlsYWJpbGl0eVJlc3BvbnNlLFxuICBGcmVlQnVzeVJlc3BvbnNlLFxuICBQcmVEYXRlZFRpbWVTbG90LFxufSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvQXZhaWxhYmlsaXR5XCI7XG5pbXBvcnQgdHlwZSB7IE1pZGRsZXdhcmVSZXNwb25zZSB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuaW1wb3J0IHR5cGUgeyBFdmVudERlZmluaXRpb24gfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvU2NoZWR1bGVFZGl0b3JcIjtcbmltcG9ydCB0eXBlIHsgQ29uc2VjdXRpdmVFdmVudCB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9Cb29raW5nXCI7XG5cbi8vIFRPRE86IGRlcHJlY2F0ZSBpZiB3ZSBmaW5kIC9jYWxlbmRhcnMvYXZhaWxhYmlsaXR5IHRvIGJlIGZ1bGx5IHN1ZmZpY2llbnRcbmV4cG9ydCBjb25zdCBmZXRjaEZyZWVCdXN5ID0gYXN5bmMgKFxuICBxdWVyeTogQXZhaWxhYmlsaXR5UXVlcnksXG4pOiBQcm9taXNlPEZyZWVCdXN5UmVzcG9uc2VbXT4gPT4ge1xuICByZXR1cm4gZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChxdWVyeS5jb21wb25lbnRfaWQpfS9jYWxlbmRhcnMvZnJlZS1idXN5YCxcbiAgICBnZXRGZXRjaENvbmZpZyh7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgY29tcG9uZW50X2lkOiBxdWVyeS5jb21wb25lbnRfaWQsXG4gICAgICBhY2Nlc3NfdG9rZW46IHF1ZXJ5LmFjY2Vzc190b2tlbixcbiAgICAgIGJvZHk6IHF1ZXJ5LmJvZHksXG4gICAgfSksXG4gIClcbiAgICAudGhlbihhc3luYyAoYXBpUmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8RnJlZUJ1c3lSZXNwb25zZVtdPj4oXG4gICAgICAgIGFwaVJlc3BvbnNlLFxuICAgICAgKTtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQXZhaWxhYmlsaXR5ID0gYXN5bmMgKFxuICBxdWVyeTogQXZhaWxhYmlsaXR5UXVlcnksXG4pOiBQcm9taXNlPEF2YWlsYWJpbGl0eVJlc3BvbnNlPiA9PiB7XG4gIHJldHVybiBmZXRjaChcbiAgICBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKHF1ZXJ5LmNvbXBvbmVudF9pZCl9L2NhbGVuZGFycy9hdmFpbGFiaWxpdHlgLFxuICAgIGdldEZldGNoQ29uZmlnKHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBjb21wb25lbnRfaWQ6IHF1ZXJ5LmNvbXBvbmVudF9pZCxcbiAgICAgIGFjY2Vzc190b2tlbjogcXVlcnkuYWNjZXNzX3Rva2VuLFxuICAgICAgYm9keTogcXVlcnkuYm9keSxcbiAgICB9KSxcbiAgKVxuICAgIC50aGVuKGFzeW5jIChhcGlSZXNwb25zZSkgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGF3YWl0IGhhbmRsZVJlc3BvbnNlPFxuICAgICAgICBNaWRkbGV3YXJlUmVzcG9uc2U8QXZhaWxhYmlsaXR5UmVzcG9uc2U+XG4gICAgICA+KGFwaVJlc3BvbnNlKTtcbiAgICAgIC8vIE5vcm1hbGl6ZSByZXNwb25zZSAuc3RhcnQgYW5kIC5lbmQgdG8gLnN0YXJ0X3RpbWUgYW5kIC5lbmRfdGltZSB0byBtYWtlIHVwIGZvciBkaXNjcmVwZW5kY3kgaW4gdGhlIE55bGFzIEFQSTogaHR0cHM6Ly9kZXZlbG9wZXIubnlsYXMuY29tL2RvY3MvY29ubmVjdGl2aXR5L2NhbGVuZGFyL2NhbGVuZGFyLWF2YWlsYWJpbGl0eS8jYXZhaWxhYmlsaXR5LXJlc3BvbnNlXG4gICAgICAvLyBBUEkgc3Rvcnk6IGh0dHBzOi8vYXBwLnNob3J0Y3V0LmNvbS9ueWxhcy9zdG9yeS83MzE5Ni9cbiAgICAgIGpzb24ucmVzcG9uc2UudGltZV9zbG90cyA9IGpzb24ucmVzcG9uc2UudGltZV9zbG90cy5tYXAoKHNsb3QpID0+IHtcbiAgICAgICAgc2xvdC5zdGFydF90aW1lID0gc2xvdC5zdGFydCB8fCAwO1xuICAgICAgICBzbG90LmVuZF90aW1lID0gc2xvdC5lbmQgfHwgMDtcbiAgICAgICAgZGVsZXRlIHNsb3Quc3RhcnQ7XG4gICAgICAgIGRlbGV0ZSBzbG90LmVuZDtcbiAgICAgICAgcmV0dXJuIHNsb3Q7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ29uc2VjdXRpdmVBdmFpbGFiaWxpdHkgPSBhc3luYyAoXG4gIHF1ZXJ5OiBDb25zZWN1dGl2ZUF2YWlsYWJpbGl0eVF1ZXJ5LFxuKTogUHJvbWlzZTxDb25zZWN1dGl2ZUV2ZW50W11bXT4gPT4ge1xuICByZXR1cm4gZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChcbiAgICAgIHF1ZXJ5LmNvbXBvbmVudF9pZCxcbiAgICApfS9jYWxlbmRhcnMvYXZhaWxhYmlsaXR5L2NvbnNlY3V0aXZlYCxcbiAgICBnZXRGZXRjaENvbmZpZyh7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgY29tcG9uZW50X2lkOiBxdWVyeS5jb21wb25lbnRfaWQsXG4gICAgICBhY2Nlc3NfdG9rZW46IHF1ZXJ5LmFjY2Vzc190b2tlbixcbiAgICAgIGJvZHk6IHF1ZXJ5LmJvZHksXG4gICAgfSksXG4gIClcbiAgICAudGhlbihhc3luYyAoYXBpUmVzcG9uc2UpOiBQcm9taXNlPENvbnNlY3V0aXZlRXZlbnRbXVtdPiA9PiB7XG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgaGFuZGxlUmVzcG9uc2U8XG4gICAgICAgIE1pZGRsZXdhcmVSZXNwb25zZTxQcmVEYXRlZFRpbWVTbG90W11bXT5cbiAgICAgID4oYXBpUmVzcG9uc2UpO1xuICAgICAgY29uc3QgcmVzcG9uc2U6IFByZURhdGVkVGltZVNsb3RbXVtdID1cbiAgICAgICAganNvbi5yZXNwb25zZT8ubWFwKChibG9ja1Nsb3QpID0+IHtcbiAgICAgICAgICBibG9ja1Nsb3QgPSBibG9ja1Nsb3QubWFwKChzbG90OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHNsb3Quc3RhcnRfdGltZSA9IG5ldyBEYXRlKHNsb3Quc3RhcnRfdGltZSAqIDEwMDApO1xuICAgICAgICAgICAgc2xvdC5lbmRfdGltZSA9IG5ldyBEYXRlKHNsb3QuZW5kX3RpbWUgKiAxMDAwKTtcbiAgICAgICAgICAgIHJldHVybiBzbG90O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBibG9ja1Nsb3Q7XG4gICAgICAgIH0pIHx8IFtdO1xuICAgICAgY29uc3QgaHlkcmF0ZWRSZXNwb25zZSA9IGh5ZHJhdGVTbG90c1RvRXZlbnRzKFxuICAgICAgICByZXNwb25zZSxcbiAgICAgICAgcXVlcnkuYm9keS5ldmVudHMsXG4gICAgICApO1xuICAgICAgY29uc3QgZGVkdXBlZFJlc3BvbnNlID1cbiAgICAgICAgcmVtb3ZlU2ltdWx0YW5lb3VzQXZhaWxhYmlsaXR5T3B0aW9ucyhoeWRyYXRlZFJlc3BvbnNlKTtcbiAgICAgIHJldHVybiBkZWR1cGVkUmVzcG9uc2U7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihxdWVyeS5jb21wb25lbnRfaWQsIGVycm9yKSk7XG59O1xuXG4vLyBEb2luZyB0aGUgYmVzdCB3ZSBjYW4gd2l0aCB3aGF0IHdlJ3ZlIGdvdDogL2NhbGVuZGFycy9hdmFpbGFiaWxpdHkvY29uc2VjdXRpdmUgZG9lc24ndCByZXR1cm4gYW55IGluZm8gb3RoZXIgdGhhbiBlbWFpbHNcbi8vIGFuZCBzdGFydC9lbmQgdGltZXMuIFRoaXMgbWVhbnMgdGhhdCBpZiB3ZSBoYXZlIHRvIGV2ZW50cyAoRXZlbnREZWZpbml0aW9ucykgd2l0aCB0aGUgc2FtZSBlbWFpbCBhZGRyZXNzZXM/IFdlJ3JlIHNob290aW5nIGluIHRoZSBkYXJrIGFib3V0IHdoaWNoIGlzIHdoaWNoLlxuLy8gVE9ETzogYWxsb3cgZm9yIGFuIGluZGljYXRvciBvbiB0aGUgQVBJIHNpZGVcbmZ1bmN0aW9uIGh5ZHJhdGVTbG90c1RvRXZlbnRzKFxuICBhdmFpbGFiaWxpdGllczogUHJlRGF0ZWRUaW1lU2xvdFtdW10sXG4gIGV2ZW50czogRXZlbnREZWZpbml0aW9uW10sXG4pOiBDb25zZWN1dGl2ZUV2ZW50W11bXSB7XG4gIHJldHVybiBhdmFpbGFiaWxpdGllcy5tYXAoKGJsb2NrKSA9PiB7XG4gICAgcmV0dXJuIGJsb2NrLm1hcCgoc3ViZXZlbnQpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN1YmV2ZW50LFxuICAgICAgICAuLi5ldmVudHMuZmluZChcbiAgICAgICAgICAoZXZlbnRkZWYpID0+XG4gICAgICAgICAgICBldmVudGRlZi5wYXJ0aWNpcGFudEVtYWlscy5sZW5ndGggPT09IHN1YmV2ZW50LmVtYWlscy5sZW5ndGggJiZcbiAgICAgICAgICAgIGV2ZW50ZGVmLnBhcnRpY2lwYW50RW1haWxzLmV2ZXJ5KChlbWFpbCkgPT5cbiAgICAgICAgICAgICAgc3ViZXZlbnQuZW1haWxzLmluY2x1ZGVzKGVtYWlsKSxcbiAgICAgICAgICAgICksXG4gICAgICAgICksXG4gICAgICB9O1xuICAgIH0pO1xuICB9KSBhcyBhbnlbXVtdOyAvLyBUT0RPOiBIb3cgdG8gYmVzdCBjb2VyY2UgUHJlRGF0ZWRUaW1lU2xvdFtdW10gdG8gQ29uc2VjdXRpdmVFdmVudFtdW10/IHNwcmVhZC1jb21iaW5lZCByZXR1cm4gaGFuZGxlcyBpdC5cbn1cblxuLy8gV2UgZG9uJ3Qgd2FudCB0byBvdmVyYnVyZGVuIG91ciB1c2VycyB3aXRoIHRvbyBtdWNoIHN3ZWV0IGhvcnJpYmxlIGZyZWVkb20gb2YgY2hvaWNlO1xuLy8gdGhlIC9jYWxlbmRhcnMvYXZhaWxhYmlsaXR5L2NvbnNlY3V0aXZlIGVuZHBvaW50IHJldHVybnMgb3JkZXIgcGVybXV0YXRpb25zIHdpdGggc2FtZSB0aW1lIHNsb3RzO1xuLy8gQ3VsbCB0aGVtIGRvd24gdG8ganVzdCB0aGUgZmlyc3QgdGhhdCBleGlzdHMgcGVyIHRpbWVzbG90LlxuZnVuY3Rpb24gcmVtb3ZlU2ltdWx0YW5lb3VzQXZhaWxhYmlsaXR5T3B0aW9ucyhcbiAgYXZhaWxhYmlsaXRpZXM6IENvbnNlY3V0aXZlRXZlbnRbXVtdLFxuKSB7XG4gIGNvbnN0IGJsb2NrU2V0ID0gbmV3IFNldCgpO1xuICByZXR1cm4gYXZhaWxhYmlsaXRpZXMuZmlsdGVyKChibG9jaykgPT4ge1xuICAgIGNvbnN0IGJsb2NrU3RyaW5nID0gYCR7YmxvY2tbMF0uc3RhcnRfdGltZX1fJHtcbiAgICAgIGJsb2NrW2Jsb2NrLmxlbmd0aCAtIDFdLmVuZF90aW1lXG4gICAgfWA7XG4gICAgaWYgKGJsb2NrU2V0LmhhcyhibG9ja1N0cmluZykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmxvY2tTZXQuYWRkKGJsb2NrU3RyaW5nKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBXcml0YWJsZSwgd3JpdGFibGUgfSBmcm9tIFwic3ZlbHRlL3N0b3JlXCI7XG5pbXBvcnQgeyBmZXRjaEF2YWlsYWJpbGl0eSB9IGZyb20gXCIuLi9jb25uZWN0aW9ucy9hdmFpbGFiaWxpdHlcIjtcbmltcG9ydCB0eXBlIHtcbiAgQXZhaWxhYmlsaXR5UXVlcnksXG4gIEF2YWlsYWJpbGl0eVJlc3BvbnNlLFxufSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvQXZhaWxhYmlsaXR5XCI7XG5cbnR5cGUgQXZhaWxhYmlsaXR5U3RvcmUgPSBSZWNvcmQ8c3RyaW5nLCBQcm9taXNlPEF2YWlsYWJpbGl0eVJlc3BvbnNlPj47XG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoKTogV3JpdGFibGU8QXZhaWxhYmlsaXR5U3RvcmU+IHtcbiAgY29uc3QgZ2V0ID0gKFxuICAgIHRhcmdldDogQXZhaWxhYmlsaXR5U3RvcmUsXG4gICAga2V5OiBzdHJpbmcsXG4gICk6IFByb21pc2U8QXZhaWxhYmlsaXR5UmVzcG9uc2U+IHwgdm9pZCA9PiB7XG4gICAgY29uc3QgYWNjZXNzb3I6IEF2YWlsYWJpbGl0eVF1ZXJ5ID0gSlNPTi5wYXJzZShrZXkpO1xuICAgIC8vIEF2b2lkIHNhdmluZyBmb3JjZVJlbG9hZCBwcm9wZXJ0eSBhcyBwYXJ0IG9mIHN0b3JlIGtleVxuICAgIGNvbnN0IGFjY2Vzc29yQ29weSA9IHsgLi4uYWNjZXNzb3IgfTtcbiAgICBkZWxldGUgYWNjZXNzb3JDb3B5LmZvcmNlUmVsb2FkO1xuICAgIGtleSA9IEpTT04uc3RyaW5naWZ5KGFjY2Vzc29yQ29weSk7XG5cbiAgICBpZiAoXG4gICAgICAhYWNjZXNzb3IuY29tcG9uZW50X2lkIHx8XG4gICAgICAhYWNjZXNzb3I/LmJvZHk/LnN0YXJ0X3RpbWUgfHxcbiAgICAgICFhY2Nlc3Nvcj8uYm9keT8uZW5kX3RpbWVcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRhcmdldFtrZXldIHx8IGFjY2Vzc29yLmZvcmNlUmVsb2FkKSB7XG4gICAgICBjb25zdCBmZXRjaFByb21pc2UgPSBmZXRjaEF2YWlsYWJpbGl0eShhY2Nlc3Nvcik7XG4gICAgICBzdG9yZS51cGRhdGUoKHN0b3JlKSA9PiB7XG4gICAgICAgIHN0b3JlW2tleV0gPSBmZXRjaFByb21pc2U7XG4gICAgICAgIHJldHVybiBzdG9yZTtcbiAgICAgIH0pO1xuICAgICAgdGFyZ2V0W2tleV0gPSBmZXRjaFByb21pc2U7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgfTtcbiAgY29uc3Qgc3RvcmUgPSB3cml0YWJsZShuZXcgUHJveHk8QXZhaWxhYmlsaXR5U3RvcmU+KHt9LCB7IGdldCB9KSk7XG4gIHJldHVybiBzdG9yZTtcbn1cblxuZXhwb3J0IGNvbnN0IEF2YWlsYWJpbGl0eVN0b3JlID0gaW5pdGlhbGl6ZSgpO1xuIiwiaW1wb3J0IHsgV3JpdGFibGUsIHdyaXRhYmxlIH0gZnJvbSBcInN2ZWx0ZS9zdG9yZVwiO1xuaW1wb3J0IHsgZmV0Y2hDb25zZWN1dGl2ZUF2YWlsYWJpbGl0eSB9IGZyb20gXCIuLi9jb25uZWN0aW9ucy9hdmFpbGFiaWxpdHlcIjtcbmltcG9ydCB0eXBlIHsgQ29uc2VjdXRpdmVBdmFpbGFiaWxpdHlRdWVyeSB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9BdmFpbGFiaWxpdHlcIjtcbmltcG9ydCB0eXBlIHsgQ29uc2VjdXRpdmVFdmVudCB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9Cb29raW5nXCI7XG5cbnR5cGUgQ29uc2VjdXRpdmVBdmFpbGFiaWxpdHlTdG9yZSA9IFJlY29yZDxcbiAgc3RyaW5nLFxuICBQcm9taXNlPENvbnNlY3V0aXZlRXZlbnRbXVtdPlxuPjtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpOiBXcml0YWJsZTxDb25zZWN1dGl2ZUF2YWlsYWJpbGl0eVN0b3JlPiB7XG4gIGNvbnN0IGdldCA9IChcbiAgICB0YXJnZXQ6IENvbnNlY3V0aXZlQXZhaWxhYmlsaXR5U3RvcmUsXG4gICAga2V5OiBzdHJpbmcsXG4gICk6IFByb21pc2U8Q29uc2VjdXRpdmVFdmVudFtdW10+IHwgdm9pZCA9PiB7XG4gICAgY29uc3QgYWNjZXNzb3I6IENvbnNlY3V0aXZlQXZhaWxhYmlsaXR5UXVlcnkgPSBKU09OLnBhcnNlKGtleSk7XG5cbiAgICBpZiAoXG4gICAgICAhYWNjZXNzb3IuY29tcG9uZW50X2lkIHx8XG4gICAgICAhYWNjZXNzb3I/LmJvZHk/LnN0YXJ0X3RpbWUgfHxcbiAgICAgICFhY2Nlc3Nvcj8uYm9keT8uZW5kX3RpbWVcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICBjb25zdCBmZXRjaFByb21pc2UgPSBmZXRjaENvbnNlY3V0aXZlQXZhaWxhYmlsaXR5KGFjY2Vzc29yKTtcbiAgICAgIHN0b3JlLnVwZGF0ZSgoc3RvcmUpID0+IHtcbiAgICAgICAgc3RvcmVba2V5XSA9IGZldGNoUHJvbWlzZTtcbiAgICAgICAgcmV0dXJuIHN0b3JlO1xuICAgICAgfSk7XG4gICAgICB0YXJnZXRba2V5XSA9IGZldGNoUHJvbWlzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICB9O1xuICBjb25zdCBzdG9yZSA9IHdyaXRhYmxlKG5ldyBQcm94eTxDb25zZWN1dGl2ZUF2YWlsYWJpbGl0eVN0b3JlPih7fSwgeyBnZXQgfSkpO1xuICByZXR1cm4gc3RvcmU7XG59XG5cbmV4cG9ydCBjb25zdCBDb25zZWN1dGl2ZUF2YWlsYWJpbGl0eVN0b3JlID0gaW5pdGlhbGl6ZSgpO1xuIiwiaW1wb3J0IHsgd3JpdGFibGUgfSBmcm9tIFwic3ZlbHRlL3N0b3JlXCI7XG5pbXBvcnQge1xuICBmZXRjaENvbnRhY3RzLFxuICBmZXRjaENvbnRhY3RzQnlRdWVyeSxcbn0gZnJvbSBcIkBjb21tb25zL2Nvbm5lY3Rpb25zL2NvbnRhY3RzXCI7XG5pbXBvcnQgdHlwZSB7XG4gIENvbnRhY3QsXG4gIENvbnRhY3RFbWFpbCxcbiAgQ29udGFjdFNlYXJjaFF1ZXJ5LFxuICBDb250YWN0c1F1ZXJ5LFxuICBDb250YWN0c1F1ZXJ5UGFyYW1zLFxufSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvQ29udGFjdHNcIjtcblxubGV0IGNvbnRhY3RzTWFwOiBSZWNvcmQ8c3RyaW5nLCBDb250YWN0W10+ID0ge307XG5cbmZ1bmN0aW9uIGZpbHRlckNvbnRhY3RzKGNvbnRhY3RzOiBDb250YWN0W10pIHtcbiAgcmV0dXJuIGNvbnRhY3RzXG4gICAgLmZpbHRlcihcbiAgICAgIChjb250YWN0KSA9PlxuICAgICAgICAhIWNvbnRhY3QuZ2l2ZW5fbmFtZSB8fFxuICAgICAgICAhIWNvbnRhY3Quc3VybmFtZSB8fFxuICAgICAgICAoQXJyYXkuaXNBcnJheShjb250YWN0LmVtYWlscykgJiYgY29udGFjdC5lbWFpbHMubGVuZ3RoID4gMCksXG4gICAgKVxuICAgIC5tYXAoKGNvbnRhY3QpID0+IHtcbiAgICAgIC8vIEVuc3VyZSBlYWNoIGNvbnRhY3QgaGFzIGF0IGxlYXN0IG9uZSBcImVtYWlsXCIgdG8gbG9hZFxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGNvbnRhY3QuZW1haWxzKSB8fCBjb250YWN0LmVtYWlscy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29udGFjdC5lbWFpbHMgPSBbeyBlbWFpbDogXCJcIiB9IGFzIENvbnRhY3RFbWFpbF07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250YWN0O1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplQ29udGFjdHMoKSB7XG4gIGNvbnN0IHsgc3Vic2NyaWJlLCBzZXQsIHVwZGF0ZSB9ID0gd3JpdGFibGU8UmVjb3JkPHN0cmluZywgQ29udGFjdFtdPj4oe30pO1xuICByZXR1cm4ge1xuICAgIHN1YnNjcmliZSxcbiAgICBhZGRDb250YWN0czogYXN5bmMgKHF1ZXJ5OiBDb250YWN0c1F1ZXJ5LCBwYXJhbXM6IENvbnRhY3RzUXVlcnlQYXJhbXMpID0+IHtcbiAgICAgIGNvbnN0IHF1ZXJ5S2V5ID0gSlNPTi5zdHJpbmdpZnkocXVlcnkpO1xuICAgICAgaWYgKFxuICAgICAgICAhY29udGFjdHNNYXBbcXVlcnlLZXldICYmXG4gICAgICAgIChxdWVyeS5jb21wb25lbnRfaWQgfHwgcXVlcnkuYWNjZXNzX3Rva2VuKVxuICAgICAgKSB7XG4gICAgICAgIGlmIChwYXJhbXMub2Zmc2V0ID09PSAwKSB7XG4gICAgICAgICAgLy8gRW5zdXJlIHRoZSBzdG9yZSBpcyBlbXB0eSBpZiBvdXIgb2Zmc2V0IGlzIDBcbiAgICAgICAgICBDb250YWN0U3RvcmUucmVzZXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbnRhY3RzID1cbiAgICAgICAgICAoYXdhaXQgZmV0Y2hDb250YWN0cyhxdWVyeSwgcGFyYW1zKVxuICAgICAgICAgICAgLnRoZW4oKGNvbnRhY3RzKSA9PiBmaWx0ZXJDb250YWN0cyhjb250YWN0cykpXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4gW10pKSA/PyBbXTtcblxuICAgICAgICBjb250YWN0c01hcFtxdWVyeUtleV0gPSBjb250YWN0c01hcFtxdWVyeUtleV1cbiAgICAgICAgICA/IFsuLi5jb250YWN0c01hcFtxdWVyeUtleV0sIC4uLmNvbnRhY3RzXVxuICAgICAgICAgIDogY29udGFjdHM7XG5cbiAgICAgICAgdXBkYXRlKChjb250YWN0cykgPT4ge1xuICAgICAgICAgIGNvbnRhY3RzW3F1ZXJ5S2V5XSA9IGNvbnRhY3RzTWFwW3F1ZXJ5S2V5XTtcbiAgICAgICAgICByZXR1cm4geyAuLi5jb250YWN0cyB9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvbnRhY3RzTWFwW3F1ZXJ5S2V5XTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFkZENvbnRhY3Q6IGFzeW5jIChxdWVyeTogQ29udGFjdFNlYXJjaFF1ZXJ5KSA9PiB7XG4gICAgICBjb25zdCBxdWVyeUtleSA9IEpTT04uc3RyaW5naWZ5KHF1ZXJ5KTtcbiAgICAgIGlmIChcbiAgICAgICAgIWNvbnRhY3RzTWFwW3F1ZXJ5S2V5XSAmJlxuICAgICAgICAocXVlcnkuY29tcG9uZW50X2lkIHx8IHF1ZXJ5LmFjY2Vzc190b2tlbilcbiAgICAgICkge1xuICAgICAgICBjb25zdCBjb250YWN0cyA9XG4gICAgICAgICAgKGF3YWl0IGZldGNoQ29udGFjdHNCeVF1ZXJ5KHF1ZXJ5KVxuICAgICAgICAgICAgLnRoZW4oKGNvbnRhY3RzKSA9PiBmaWx0ZXJDb250YWN0cyhjb250YWN0cykpXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4gW10pKSA/PyBbXTtcblxuICAgICAgICBjb250YWN0c01hcFtxdWVyeUtleV0gPSBjb250YWN0c01hcFtxdWVyeUtleV1cbiAgICAgICAgICA/IFsuLi5jb250YWN0c01hcFtxdWVyeUtleV0sIC4uLmNvbnRhY3RzXVxuICAgICAgICAgIDogY29udGFjdHM7XG4gICAgICAgIHVwZGF0ZSgoY29udGFjdHMpID0+IHtcbiAgICAgICAgICBjb250YWN0c1txdWVyeUtleV0gPSBjb250YWN0c01hcFtxdWVyeUtleV07XG4gICAgICAgICAgcmV0dXJuIHsgLi4uY29udGFjdHMgfTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGFjdHNNYXBbcXVlcnlLZXldO1xuICAgIH0sXG4gICAgcmVzZXQ6ICgpID0+IHtcbiAgICAgIGNvbnRhY3RzTWFwID0ge307XG4gICAgICBzZXQoe30pO1xuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBDb250YWN0U3RvcmUgPSBpbml0aWFsaXplQ29udGFjdHMoKTtcbiIsImltcG9ydCB7IHdyaXRhYmxlIH0gZnJvbSBcInN2ZWx0ZS9zdG9yZVwiO1xuaW1wb3J0IHsgZmV0Y2hDb250YWN0SW1hZ2UgfSBmcm9tIFwiQGNvbW1vbnMvY29ubmVjdGlvbnMvY29udGFjdHNcIjtcbmltcG9ydCB0eXBlIHsgQ29udGFjdHNRdWVyeSB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9Db250YWN0c1wiO1xuXG5jb25zdCBjb250YWN0QXZhdGFyTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVDb250YWN0QXZhdGFycygpIHtcbiAgY29uc3QgeyBzdWJzY3JpYmUsIHNldCB9ID0gd3JpdGFibGU8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4oe30pO1xuICByZXR1cm4ge1xuICAgIHN1YnNjcmliZSxcbiAgICBnZXRDb250YWN0QXZhdGFyOiBhc3luYyAoXG4gICAgICBxdWVyeTogQ29udGFjdHNRdWVyeSxcbiAgICAgIGNvbnRhY3RfaWQ6IHN0cmluZyxcbiAgICAgIHJlZnJlc2ggPSBmYWxzZSxcbiAgICApID0+IHtcbiAgICAgIGlmICghY29udGFjdEF2YXRhck1hcFtjb250YWN0X2lkXSB8fCByZWZyZXNoKSB7XG4gICAgICAgIGNvbnN0IGF2YXRhciA9IGF3YWl0IGZldGNoQ29udGFjdEltYWdlKHF1ZXJ5LCBjb250YWN0X2lkKVxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcylcbiAgICAgICAgICAuY2F0Y2goKCkgPT4gXCJcIik7XG4gICAgICAgIGlmIChhdmF0YXIpIHtcbiAgICAgICAgICBjb250YWN0QXZhdGFyTWFwW2NvbnRhY3RfaWRdID0gYXZhdGFyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGFjdEF2YXRhck1hcFtjb250YWN0X2lkXTtcbiAgICB9LFxuICAgIHJlc2V0OiAoKSA9PiBzZXQoe30pLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgQ29udGFjdEF2YXRhclN0b3JlID0gaW5pdGlhbGl6ZUNvbnRhY3RBdmF0YXJzKCk7XG4iLCJpbXBvcnQgeyB3cml0YWJsZSB9IGZyb20gXCJzdmVsdGUvc3RvcmVcIjtcbmltcG9ydCB7IGZldGNoVGhyZWFkIH0gZnJvbSBcIi4uL2Nvbm5lY3Rpb25zL3RocmVhZHNcIjtcbmltcG9ydCB0eXBlIHtcbiAgQ29udmVyc2F0aW9uLFxuICBTdG9yZWRDb252ZXJzYXRpb24sXG4gIENvbnZlcnNhdGlvblF1ZXJ5LFxuICBTdG9yZWRNZXNzYWdlLFxufSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvTnlsYXNcIjtcbmltcG9ydCB7IHNpbGVuY2UgfSBmcm9tIFwiQGNvbW1vbnNcIjtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUNvbnZlcnNhdGlvbnMoKSB7XG4gIGNvbnN0IHsgc3Vic2NyaWJlLCBzZXQsIHVwZGF0ZSB9ID0gd3JpdGFibGU8UmVjb3JkPHN0cmluZywgQ29udmVyc2F0aW9uPj4oe30pO1xuXG4gIGNvbnN0IHRocmVhZHNNYXA6IFJlY29yZDxzdHJpbmcsIENvbnZlcnNhdGlvbj4gPSB7fTtcblxuICByZXR1cm4ge1xuICAgIHN1YnNjcmliZSxcbiAgICAvLyBnZXRDb252ZXJzYXRpb246IG1pbWlja2luZyBzdG9yZS9ldmVudHMnIGdldEV2ZW50cygpXG4gICAgZ2V0Q29udmVyc2F0aW9uOiBhc3luYyAocXVlcnk6IENvbnZlcnNhdGlvblF1ZXJ5KSA9PiB7XG4gICAgICBjb25zdCBxdWVyeUtleSA9IEpTT04uc3RyaW5naWZ5KHF1ZXJ5KTtcbiAgICAgIGlmICghdGhyZWFkc01hcFtxdWVyeUtleV0gJiYgKHF1ZXJ5LmNvbXBvbmVudF9pZCB8fCBxdWVyeS5hY2Nlc3NfdG9rZW4pKSB7XG4gICAgICAgIGNvbnN0IHRocmVhZCA9IGF3YWl0IGZldGNoVGhyZWFkKHF1ZXJ5KS5jYXRjaChzaWxlbmNlKTtcblxuICAgICAgICBpZiAodGhyZWFkKSB7XG4gICAgICAgICAgdGhyZWFkc01hcFtxdWVyeUtleV0gPSB0aHJlYWQ7XG5cbiAgICAgICAgICB1cGRhdGUoKHRocmVhZHMpID0+IHtcbiAgICAgICAgICAgIHRocmVhZHNbcXVlcnlLZXldID0gdGhyZWFkc01hcFtxdWVyeUtleV07XG4gICAgICAgICAgICByZXR1cm4geyAuLi50aHJlYWRzIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBhd2FpdCB0aHJlYWRzTWFwW3F1ZXJ5S2V5XTtcbiAgICB9LFxuXG4gICAgYWRkVGhyZWFkOiAoaW5jb21pbmdUaHJlYWQ6IFN0b3JlZENvbnZlcnNhdGlvbikgPT4ge1xuICAgICAgdXBkYXRlKCh0aHJlYWQpID0+IHtcbiAgICAgICAgdGhyZWFkW2luY29taW5nVGhyZWFkLnF1ZXJ5S2V5XSA9IGluY29taW5nVGhyZWFkLmRhdGE7XG4gICAgICAgIHJldHVybiB7IC4uLnRocmVhZCB9O1xuICAgICAgfSk7XG4gICAgfSxcbiAgICB1cGRhdGVUaHJlYWQ6IChpbmNvbWluZ1RocmVhZDogU3RvcmVkQ29udmVyc2F0aW9uKSA9PiB7XG4gICAgICB1cGRhdGUoKHRocmVhZCkgPT4ge1xuICAgICAgICB0aHJlYWRbaW5jb21pbmdUaHJlYWQucXVlcnlLZXldID0ge1xuICAgICAgICAgIC4uLnRocmVhZFtpbmNvbWluZ1RocmVhZC5xdWVyeUtleV0sXG4gICAgICAgICAgLi4uaW5jb21pbmdUaHJlYWQuZGF0YSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHsgLi4udGhyZWFkIH07XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGFkZE1lc3NhZ2VUb1RocmVhZDogKGluY29taW5nTWVzc2FnZTogU3RvcmVkTWVzc2FnZSkgPT4ge1xuICAgICAgdXBkYXRlKCh0aHJlYWQpID0+IHtcbiAgICAgICAgbGV0IGZvdW5kTWVzc2FnZSA9IHRocmVhZFtpbmNvbWluZ01lc3NhZ2UucXVlcnlLZXldLm1lc3NhZ2VzPy5maW5kKFxuICAgICAgICAgIChtZXNzYWdlKSA9PiBtZXNzYWdlLmlkID09PSBpbmNvbWluZ01lc3NhZ2UuZGF0YS5pZCxcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGZvdW5kTWVzc2FnZSkge1xuICAgICAgICAgIGZvdW5kTWVzc2FnZSA9IGluY29taW5nTWVzc2FnZS5kYXRhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhyZWFkW2luY29taW5nTWVzc2FnZS5xdWVyeUtleV0ubWVzc2FnZXM7XG4gICAgICAgICAgbWVzc2FnZXMucHVzaChpbmNvbWluZ01lc3NhZ2UuZGF0YSk7XG4gICAgICAgICAgdGhyZWFkW2luY29taW5nTWVzc2FnZS5xdWVyeUtleV0ubWVzc2FnZXMgPSBtZXNzYWdlcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyAuLi50aHJlYWQgfTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRocmVhZHNNYXBbaW5jb21pbmdNZXNzYWdlLnF1ZXJ5S2V5XTtcbiAgICB9LFxuICAgIHJlc2V0OiAoKSA9PiBzZXQoe30pLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgQ29udmVyc2F0aW9uU3RvcmUgPSBpbml0aWFsaXplQ29udmVyc2F0aW9ucygpO1xuIiwiaW1wb3J0IHsgZGVyaXZlZCwgUmVhZGFibGUsIHdyaXRhYmxlIH0gZnJvbSBcInN2ZWx0ZS9zdG9yZVwiO1xuaW1wb3J0IHtcbiAgZmV0Y2hUaHJlYWRzLFxuICBmZXRjaFNlYXJjaFJlc3VsdFRocmVhZHMsXG4gIHVwZGF0ZVRocmVhZCxcbiAgZmV0Y2hUaHJlYWRDb3VudCxcbn0gZnJvbSBcIi4uL2Nvbm5lY3Rpb25zL3RocmVhZHNcIjtcbmltcG9ydCB0eXBlIHtcbiAgVGhyZWFkLFxuICBNYWlsYm94UXVlcnksXG4gIENvbnZlcnNhdGlvblF1ZXJ5LFxuICBNZXNzYWdlLFxuICBDb252ZXJzYXRpb24sXG59IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuaW1wb3J0IHsgc2lsZW5jZSB9IGZyb20gXCJAY29tbW9uc1wiO1xuXG5pbnRlcmZhY2UgUGFnaW5hdGVkVGhyZWFkcyB7XG4gIGlzTG9hZGVkOiBib29sZWFuO1xuICB0aHJlYWRzOiBUaHJlYWRbXTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZVBhZ2luYXRlZFRocmVhZHModG90YWxQYWdlczogbnVtYmVyKSB7XG4gIGNvbnN0IHBhZ2luYXRlZFRocmVhZHMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsUGFnZXM7IGkrKykge1xuICAgIHBhZ2luYXRlZFRocmVhZHMucHVzaCh7XG4gICAgICBpc0xvYWRlZDogZmFsc2UsXG4gICAgICB0aHJlYWRzOiA8VGhyZWFkW10+W10sXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHBhZ2luYXRlZFRocmVhZHM7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVUaHJlYWRzKCkge1xuICBjb25zdCB7IHN1YnNjcmliZSwgc2V0LCB1cGRhdGUgfSA9IHdyaXRhYmxlPFxuICAgIFJlY29yZDxzdHJpbmcsIFBhZ2luYXRlZFRocmVhZHNbXT5cbiAgPih7fSk7XG4gIGxldCB0aHJlYWRzTWFwOiBSZWNvcmQ8c3RyaW5nLCBQYWdpbmF0ZWRUaHJlYWRzW10+ID0ge307XG4gIGxldCB0b3RhbEl0ZW1zOiBudW1iZXI7XG5cbiAgcmV0dXJuIHtcbiAgICBzdWJzY3JpYmUsXG4gICAgc2V0LFxuICAgIGdldFRocmVhZHM6IGFzeW5jIChcbiAgICAgIHF1ZXJ5OiBNYWlsYm94UXVlcnksXG4gICAgICBjdXJyZW50UGFnZTogbnVtYmVyLFxuICAgICAgcGFnZVNpemU6IG51bWJlcixcbiAgICAgIGZvcmNlUmVmcmVzaCA9IGZhbHNlLFxuICAgICkgPT4ge1xuICAgICAgY29uc3QgcXVlcnlLZXkgPSBKU09OLnN0cmluZ2lmeShxdWVyeSk7XG5cbiAgICAgIGlmICghcXVlcnkuY29tcG9uZW50X2lkICYmICFxdWVyeS5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgLy8gVGhpcyBzaG91bGQgYWxlcnQgdGhlIHVzZXJcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICBpZiAodG90YWxJdGVtcyA9PT0gdW5kZWZpbmVkIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgICAgICAvLyBUT0RPOiB0aGlzIGNhbiBjb3VudCBwYXNzZWQtaW4gSURzXG4gICAgICAgIGNvbnN0IHRocmVhZENvdW50ID0gcXVlcnkudGhyZWFkX2lkc1xuICAgICAgICAgID8gcXVlcnkudGhyZWFkX2lkcy5sZW5ndGhcbiAgICAgICAgICA6IGF3YWl0IGZldGNoVGhyZWFkQ291bnQocXVlcnkpLmNhdGNoKHNpbGVuY2UpO1xuXG4gICAgICAgIGlmICh0aHJlYWRDb3VudCkge1xuICAgICAgICAgIHRvdGFsSXRlbXMgPSB0aHJlYWRDb3VudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhyZWFkc01hcFtxdWVyeUtleV0pIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgICAgICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRvdGFsSXRlbXMgLyBwYWdlU2l6ZSk7XG4gICAgICAgIHRocmVhZHNNYXBbcXVlcnlLZXldID0gYXdhaXQgaW5pdGlhbGl6ZVBhZ2luYXRlZFRocmVhZHModG90YWxQYWdlcyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIC8vIFNob3VsZG4ndCB0aGlzIGJlIGFuIGludGVybmFsIGVycm9yP1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9IGVsc2UgaWYgKCF0aHJlYWRzTWFwW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0uaXNMb2FkZWQpIHtcbiAgICAgICAgY29uc3QgdGhyZWFkcyA9IGF3YWl0IGZldGNoVGhyZWFkcyhcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICBwYWdlU2l6ZSxcbiAgICAgICAgICBjdXJyZW50UGFnZSAqIHBhZ2VTaXplLFxuICAgICAgICApLmNhdGNoKHNpbGVuY2UpO1xuXG4gICAgICAgIGlmICh0aHJlYWRzKSB7XG4gICAgICAgICAgdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdLnRocmVhZHMgPSB0aHJlYWRzO1xuICAgICAgICAgIHRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS5pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdXBkYXRlKCh0aHJlYWRzKSA9PiB7XG4gICAgICAgIHRocmVhZHNbcXVlcnlLZXldID0gdGhyZWFkc01hcFtxdWVyeUtleV07XG4gICAgICAgIHJldHVybiB7IC4uLnRocmVhZHMgfTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdLnRocmVhZHM7XG4gICAgfSxcbiAgICBnZXROdW1iZXJPZkl0ZW1zOiBhc3luYyAocXVlcnk6IE1haWxib3hRdWVyeSkgPT4ge1xuICAgICAgaWYgKCFxdWVyeS5jb21wb25lbnRfaWQgJiYgIXF1ZXJ5LmFjY2Vzc190b2tlbikge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB0b3RhbEl0ZW1zID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGNvbnN0IHRocmVhZENvdW50ID0gYXdhaXQgZmV0Y2hUaHJlYWRDb3VudChxdWVyeSkuY2F0Y2goc2lsZW5jZSk7XG5cbiAgICAgICAgaWYgKHRocmVhZENvdW50KSB7XG4gICAgICAgICAgdG90YWxJdGVtcyA9IHRocmVhZENvdW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdG90YWxJdGVtcztcbiAgICB9LFxuICAgIC8vIFRPRE8gLSBVc2UgcmVhbCBwYWdpbmF0aW9uIHdoZW4gc2VhcmNoIGVuZHBvaW50IHN1cHBvcnRzIGl0XG4gICAgZ2V0VGhyZWFkc1dpdGhTZWFyY2hLZXl3b3JkOiBhc3luYyAoXG4gICAgICBxdWVyeTogTWFpbGJveFF1ZXJ5LFxuICAgICAgZm9yY2VSZWZyZXNoID0gZmFsc2UsXG4gICAgKSA9PiB7XG4gICAgICBpZiAoIXF1ZXJ5LmNvbXBvbmVudF9pZCAmJiAhcXVlcnkuYWNjZXNzX3Rva2VuKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHF1ZXJ5S2V5ID0gSlNPTi5zdHJpbmdpZnkocXVlcnkpO1xuXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhyZWFkc01hcFtxdWVyeUtleV0pIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgICAgICB0aHJlYWRzTWFwW3F1ZXJ5S2V5XSA9IGF3YWl0IGluaXRpYWxpemVQYWdpbmF0ZWRUaHJlYWRzKDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRocmVhZHNNYXBbcXVlcnlLZXldWzBdLmlzTG9hZGVkIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgICAgICBjb25zdCBzZWFyY2hSZXN1bHRUaHJlYWRzID0gYXdhaXQgZmV0Y2hTZWFyY2hSZXN1bHRUaHJlYWRzKHF1ZXJ5KS5jYXRjaChcbiAgICAgICAgICBzaWxlbmNlLFxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChzZWFyY2hSZXN1bHRUaHJlYWRzKSB7XG4gICAgICAgICAgdGhyZWFkc01hcFtxdWVyeUtleV1bMF0udGhyZWFkcyA9IHNlYXJjaFJlc3VsdFRocmVhZHM7XG4gICAgICAgICAgdGhyZWFkc01hcFtxdWVyeUtleV1bMF0uaXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB1cGRhdGUoKHRocmVhZHMpID0+IHtcbiAgICAgICAgdGhyZWFkc1txdWVyeUtleV0gPSB0aHJlYWRzTWFwW3F1ZXJ5S2V5XTtcbiAgICAgICAgcmV0dXJuIHsgLi4udGhyZWFkcyB9O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhyZWFkc01hcFtxdWVyeUtleV1bMF0udGhyZWFkcztcbiAgICB9LFxuICAgIHVwZGF0ZVRocmVhZDogYXN5bmMgKFxuICAgICAgdGhyZWFkUXVlcnk6IENvbnZlcnNhdGlvblF1ZXJ5LFxuICAgICAgcXVlcnlLZXk6IHN0cmluZyxcbiAgICAgIHVwZGF0ZWRUaHJlYWQ6IENvbnZlcnNhdGlvbixcbiAgICAgIGN1cnJlbnRQYWdlOiBudW1iZXIsXG4gICAgICBwYWdlU2l6ZTogbnVtYmVyLFxuICAgICkgPT4ge1xuICAgICAgY29uc3QgdGhyZWFkID0gYXdhaXQgdXBkYXRlVGhyZWFkKHRocmVhZFF1ZXJ5LCB1cGRhdGVkVGhyZWFkKS5jYXRjaChcbiAgICAgICAgc2lsZW5jZSxcbiAgICAgICk7XG5cbiAgICAgIGlmICghdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdLmlzTG9hZGVkKSB7XG4gICAgICAgIC8vIHBvc3NpYmxlIGhhY2s6IHBhc3MgaW4gYXJyYXkgdG8gcXVlcnk/XG4gICAgICAgIGNvbnN0IHRocmVhZHMgPSBhd2FpdCBmZXRjaFRocmVhZHMoXG4gICAgICAgICAgSlNPTi5wYXJzZShxdWVyeUtleSksXG4gICAgICAgICAgcGFnZVNpemUsXG4gICAgICAgICAgY3VycmVudFBhZ2UgKiBwYWdlU2l6ZSxcbiAgICAgICAgKS5jYXRjaChzaWxlbmNlKTtcblxuICAgICAgICBpZiAodGhyZWFkcykge1xuICAgICAgICAgIHRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS50aHJlYWRzID0gdGhyZWFkcztcbiAgICAgICAgICB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0uaXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS50aHJlYWRzID0gdGhyZWFkc01hcFtxdWVyeUtleV1bXG4gICAgICAgIGN1cnJlbnRQYWdlXG4gICAgICBdLnRocmVhZHMubWFwKChpbml0aWFsVGhyZWFkKSA9PiB7XG4gICAgICAgIGlmICh0aHJlYWQgJiYgaW5pdGlhbFRocmVhZC5pZCA9PT0gdGhyZWFkLmlkKSB7XG4gICAgICAgICAgaW5pdGlhbFRocmVhZCA9IE9iamVjdC5hc3NpZ24oaW5pdGlhbFRocmVhZCwgdGhyZWFkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5pdGlhbFRocmVhZDtcbiAgICAgIH0pO1xuICAgICAgdXBkYXRlKCh0aHJlYWRzKSA9PiB7XG4gICAgICAgIHRocmVhZHNbcXVlcnlLZXldID0gdGhyZWFkc01hcFtxdWVyeUtleV07XG4gICAgICAgIHJldHVybiB7IC4uLnRocmVhZHMgfTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS50aHJlYWRzO1xuICAgIH0sXG4gICAgdXBkYXRlVGhyZWFkU2VsZWN0aW9uOiAoXG4gICAgICBxdWVyeUtleTogc3RyaW5nLFxuICAgICAgY3VycmVudFBhZ2U6IG51bWJlcixcbiAgICAgIHRocmVhZElkPzogc3RyaW5nLFxuICAgICkgPT4ge1xuICAgICAgY29uc3QgdGhyZWFkcyA9IHRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS50aHJlYWRzO1xuXG4gICAgICBpZiAoIXRocmVhZElkKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvblN0YXRlID0gdGhyZWFkcy5zb21lKCh0aHJlYWQpID0+IHRocmVhZC5zZWxlY3RlZCk7XG4gICAgICAgIGZvciAoY29uc3QgdGhyZWFkIG9mIHRocmVhZHMpIHtcbiAgICAgICAgICB0aHJlYWQuc2VsZWN0ZWQgPSAhc2VsZWN0aW9uU3RhdGU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRocmVhZCA9IHRocmVhZHMuZmluZCgodGhyZWFkKSA9PiB0aHJlYWQuaWQgPT09IHRocmVhZElkKTtcbiAgICAgICAgaWYgKHRocmVhZCkge1xuICAgICAgICAgIHRocmVhZC5zZWxlY3RlZCA9ICF0aHJlYWQuc2VsZWN0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHVwZGF0ZSgodGhyZWFkcykgPT4ge1xuICAgICAgICB0aHJlYWRzW3F1ZXJ5S2V5XSA9IHRocmVhZHNNYXBbcXVlcnlLZXldO1xuICAgICAgICByZXR1cm4geyAuLi50aHJlYWRzIH07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0udGhyZWFkcztcbiAgICB9LFxuXG4gICAgcmVzZXQ6ICgpID0+IHtcbiAgICAgIHRocmVhZHNNYXAgPSB7fTtcbiAgICAgIHNldCh7fSk7XG4gICAgfSxcblxuICAgIGh5ZHJhdGVNZXNzYWdlSW5UaHJlYWQ6IChcbiAgICAgIGluY29taW5nTWVzc2FnZTogTWVzc2FnZSxcbiAgICAgIHF1ZXJ5OiBNYWlsYm94UXVlcnksXG4gICAgICBjdXJyZW50UGFnZTogbnVtYmVyLFxuICAgICkgPT4ge1xuICAgICAgY29uc3QgcXVlcnlLZXkgPSBKU09OLnN0cmluZ2lmeShxdWVyeSk7XG5cbiAgICAgIGNvbnN0IGZvdW5kVGhyZWFkID0gdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdPy50aHJlYWRzPy5maW5kKFxuICAgICAgICAodGhyZWFkKSA9PiB0aHJlYWQuaWQgPT09IGluY29taW5nTWVzc2FnZS50aHJlYWRfaWQsXG4gICAgICApO1xuICAgICAgaWYgKGZvdW5kVGhyZWFkKSB7XG4gICAgICAgIGNvbnN0IGZvdW5kTWVzc2FnZSA9IGZvdW5kVGhyZWFkLm1lc3NhZ2VzPy5maW5kKFxuICAgICAgICAgIChtZXNzYWdlKSA9PiBtZXNzYWdlLmlkID09PSBpbmNvbWluZ01lc3NhZ2UuaWQsXG4gICAgICAgICk7XG4gICAgICAgIGlmIChmb3VuZE1lc3NhZ2UpIHtcbiAgICAgICAgICBmb3VuZE1lc3NhZ2UuYm9keSA9IGluY29taW5nTWVzc2FnZS5ib2R5O1xuICAgICAgICAgIHVwZGF0ZSgodGhyZWFkcykgPT4ge1xuICAgICAgICAgICAgaWYgKGluY29taW5nTWVzc2FnZS50aHJlYWRfaWQpIHtcbiAgICAgICAgICAgICAgbGV0IHRocmVhZFRvVXBkYXRlID0gdGhyZWFkc1txdWVyeUtleV1bY3VycmVudFBhZ2VdLnRocmVhZHMuZmluZChcbiAgICAgICAgICAgICAgICAodGhyZWFkKSA9PiB0aHJlYWQuaWQgPT09IGZvdW5kVGhyZWFkLmlkLFxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIGlmICh0aHJlYWRUb1VwZGF0ZSkge1xuICAgICAgICAgICAgICAgIHRocmVhZFRvVXBkYXRlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmb3VuZFRocmVhZCkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyAuLi50aHJlYWRzIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gVGhpcyBoYXBwZW5zIHdoZW4gc29tZW9uZSBzZW5kcyBhIG1lc3NhZ2UgdXNpbmcgY29tcG9zZXIgYW5kIHdlIHdhbnRcbiAgICAgICAgICAvLyB0byB1cGRhdGUgdGhlIGV4aXN0aW5nIHRocmVhZCB3aXRoIHRoZSBzZW50IG1lc3NhZ2VcbiAgICAgICAgICB1cGRhdGUoKHRocmVhZHMpID0+IHtcbiAgICAgICAgICAgIGlmIChpbmNvbWluZ01lc3NhZ2UudGhyZWFkX2lkKSB7XG4gICAgICAgICAgICAgIGxldCB0aHJlYWRUb1VwZGF0ZSA9IHRocmVhZHNbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS50aHJlYWRzLmZpbmQoXG4gICAgICAgICAgICAgICAgKHRocmVhZCkgPT4gdGhyZWFkLmlkID09PSBmb3VuZFRocmVhZC5pZCxcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICBpZiAodGhyZWFkVG9VcGRhdGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlcyA9IGZvdW5kVGhyZWFkLm1lc3NhZ2VzO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2goaW5jb21pbmdNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBmb3VuZFRocmVhZC5tZXNzYWdlcyA9IG1lc3NhZ2VzO1xuICAgICAgICAgICAgICAgIGZvdW5kVGhyZWFkLnNuaXBwZXQgPSBpbmNvbWluZ01lc3NhZ2Uuc25pcHBldDtcbiAgICAgICAgICAgICAgICAvL1JlbW92ZSBkcmFmdCB3aXRoIHRoZSBzYW1lIGlkIGFzIHNlbnQgbWVzc2FnZVxuICAgICAgICAgICAgICAgIGZvdW5kVGhyZWFkLmRyYWZ0cyA9IGZvdW5kVGhyZWFkLmRyYWZ0cy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAoZHJhZnQpID0+IGRyYWZ0LmlkICE9PSBpbmNvbWluZ01lc3NhZ2UuaWQsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aHJlYWRUb1VwZGF0ZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZm91bmRUaHJlYWQpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgLi4udGhyZWFkcyB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0udGhyZWFkcztcbiAgICB9LFxuXG4gICAgLy9VcGRhdGUgZHJhZnRzIGluIHRoZSB0aHJlYWRzIHN0b3JlXG4gICAgaHlkcmF0ZURyYWZ0SW5UaHJlYWQ6IChcbiAgICAgIGluY29taW5nRHJhZnQ6IE1lc3NhZ2UsXG4gICAgICBxdWVyeTogTWFpbGJveFF1ZXJ5LFxuICAgICAgY3VycmVudFBhZ2U6IG51bWJlcixcbiAgICApID0+IHtcbiAgICAgIGNvbnN0IHF1ZXJ5S2V5ID0gSlNPTi5zdHJpbmdpZnkocXVlcnkpO1xuXG4gICAgICBjb25zdCBmb3VuZFRocmVhZCA9IHRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXT8udGhyZWFkcz8uZmluZChcbiAgICAgICAgKHRocmVhZCkgPT4gdGhyZWFkLmlkID09PSBpbmNvbWluZ0RyYWZ0LnRocmVhZF9pZCxcbiAgICAgICk7XG4gICAgICBpZiAoZm91bmRUaHJlYWQpIHtcbiAgICAgICAgLy9VcGRhdGUgZXhpc3RpbmcgZHJhZnQgbWVzc2FnZSBpbiBzdG9yZVxuICAgICAgICBjb25zdCBmb3VuZERyYWZ0ID0gZm91bmRUaHJlYWQuZHJhZnRzPy5maW5kKFxuICAgICAgICAgIChkcmFmdCkgPT4gZHJhZnQuaWQgPT09IGluY29taW5nRHJhZnQuaWQsXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGluY29taW5nRHJhZnQudGhyZWFkX2lkKSB7XG4gICAgICAgICAgaWYgKGZvdW5kRHJhZnQpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZm91bmREcmFmdCwgaW5jb21pbmdEcmFmdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRyYWZ0cyA9IGZvdW5kVGhyZWFkLmRyYWZ0cztcbiAgICAgICAgICAgIGRyYWZ0cy5wdXNoKGluY29taW5nRHJhZnQpO1xuICAgICAgICAgICAgZm91bmRUaHJlYWQuZHJhZnRzID0gZHJhZnRzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVwZGF0ZSgodGhyZWFkcykgPT4ge1xuICAgICAgICAgICAgbGV0IHRocmVhZFRvVXBkYXRlID0gdGhyZWFkc1txdWVyeUtleV1bY3VycmVudFBhZ2VdLnRocmVhZHMuZmluZChcbiAgICAgICAgICAgICAgKHRocmVhZCkgPT4gdGhyZWFkLmlkID09PSBmb3VuZFRocmVhZC5pZCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAodGhyZWFkVG9VcGRhdGUpIHtcbiAgICAgICAgICAgICAgdGhyZWFkVG9VcGRhdGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZvdW5kVGhyZWFkKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7IC4uLnRocmVhZHMgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS50aHJlYWRzO1xuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBNYWlsYm94U3RvcmUgPSBpbml0aWFsaXplVGhyZWFkcygpO1xuXG5leHBvcnQgY29uc3QgRW1haWxTdG9yZTogUmVhZGFibGU8UmVjb3JkPHN0cmluZywgVGhyZWFkW10+PiA9IGRlcml2ZWQoXG4gIE1haWxib3hTdG9yZSxcbiAgKCRNYWlsYm94U3RvcmUpID0+IHtcbiAgICBjb25zdCBlbWFpbFN0b3JlOiBSZWNvcmQ8c3RyaW5nLCBUaHJlYWRbXT4gPSB7fTtcbiAgICBPYmplY3QuZW50cmllcygkTWFpbGJveFN0b3JlKS5mb3JFYWNoKFxuICAgICAgKFtrZXksIHBhZ2luYXRlZFRocmVhZHNdKSA9PlxuICAgICAgICAoZW1haWxTdG9yZVtrZXldID0gcGFnaW5hdGVkVGhyZWFkc1xuICAgICAgICAgIC5tYXAoKHBhZ2luYXRlZFRocmVhZCkgPT4gcGFnaW5hdGVkVGhyZWFkLnRocmVhZHMpXG4gICAgICAgICAgLmZsYXQoKSksXG4gICAgKTtcbiAgICByZXR1cm4gZW1haWxTdG9yZTtcbiAgfSxcbik7XG4iLCJpbXBvcnQgeyBmZXRjaE1hbmlmZXN0IH0gZnJvbSBcIi4uL2Nvbm5lY3Rpb25zL21hbmlmZXN0XCI7XG5pbXBvcnQgeyBXcml0YWJsZSwgd3JpdGFibGUgfSBmcm9tIFwic3ZlbHRlL3N0b3JlXCI7XG5pbXBvcnQgdHlwZSB7IE1hbmlmZXN0IH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG5cbnR5cGUgTWFuaWZlc3RBY2Nlc3NvciA9IHtcbiAgY29tcG9uZW50X2lkOiBzdHJpbmc7XG4gIGFjY2Vzc190b2tlbj86IHN0cmluZztcbiAgZXh0ZXJuYWxfbWFuaWZlc3RfaWRzPzogW107XG59O1xudHlwZSBNYW5pZmVzdFN0b3JlID0gUmVjb3JkPHN0cmluZywgUHJvbWlzZTxNYW5pZmVzdD4+O1xuXG5mdW5jdGlvbiBpbml0aWFsaXplKCk6IFdyaXRhYmxlPE1hbmlmZXN0U3RvcmU+IHtcbiAgY29uc3QgZ2V0ID0gKFxuICAgIHRhcmdldDogTWFuaWZlc3RTdG9yZSxcbiAgICBrZXk6IHN0cmluZyxcbiAgKTogUHJvbWlzZTxNYW5pZmVzdD4gfCB2b2lkID0+IHtcbiAgICBjb25zdCBhY2Nlc3NvcjogTWFuaWZlc3RBY2Nlc3NvciA9IEpTT04ucGFyc2Uoa2V5KTtcblxuICAgIGlmICghYWNjZXNzb3IuY29tcG9uZW50X2lkKSByZXR1cm47XG5cbiAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICBjb25zdCBmZXRjaFByb21pc2UgPSBmZXRjaE1hbmlmZXN0KFxuICAgICAgICBhY2Nlc3Nvci5jb21wb25lbnRfaWQsXG4gICAgICAgIGFjY2Vzc29yLmFjY2Vzc190b2tlbixcbiAgICAgICk7XG4gICAgICBzdG9yZS51cGRhdGUoKHN0b3JlKSA9PiB7XG4gICAgICAgIHN0b3JlW2tleV0gPSBmZXRjaFByb21pc2U7XG4gICAgICAgIHJldHVybiBzdG9yZTtcbiAgICAgIH0pO1xuICAgICAgdGFyZ2V0W2tleV0gPSBmZXRjaFByb21pc2U7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgfTtcbiAgY29uc3Qgc3RvcmUgPSB3cml0YWJsZShuZXcgUHJveHk8TWFuaWZlc3RTdG9yZT4oe30sIHsgZ2V0IH0pKTtcbiAgcmV0dXJuIHN0b3JlO1xufVxuXG5leHBvcnQgY29uc3QgTWFuaWZlc3RTdG9yZSA9IGluaXRpYWxpemUoKTtcbiIsImltcG9ydCB0eXBlIHsgRmlsZSwgTWFuaWZlc3QgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvTnlsYXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEV2ZW50RGlzcGF0Y2hlcihjb21wb25lbnQ6IHtcbiAgZGlzcGF0Y2hFdmVudD86IChlOiBFdmVudCkgPT4gYm9vbGVhbjtcbn0pIHtcbiAgcmV0dXJuIChuYW1lOiBzdHJpbmcsIGRldGFpbDogdW5rbm93bik6IHZvaWQgPT4ge1xuICAgIGlmIChjb21wb25lbnQuZGlzcGF0Y2hFdmVudCkge1xuICAgICAgY29tcG9uZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBDdXN0b21FdmVudChuYW1lLCB7XG4gICAgICAgICAgZGV0YWlsLFxuICAgICAgICAgIGNvbXBvc2VkOiB0cnVlLCAvLyBwcm9wYWdhdGUgYWNyb3NzIHRoZSBzaGFkb3cgRE9NXG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShcbiAgZm46IChhcmdzOiB1bmtub3duKSA9PiB1bmtub3duLFxuICB0aW1lOiBudW1iZXIsXG4pOiAoKSA9PiB2b2lkIHtcbiAgbGV0IHRpbWVvdXRJZDogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD47XG4gIHJldHVybiAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfVxuXG4gICAgdGltZW91dElkID0gc2V0VGltZW91dChmbiwgdGltZSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEludGVybmFsUHJvcHM8VCBleHRlbmRzIFBhcnRpYWw8TWFuaWZlc3Q+PihcbiAgcHJvcGVydGllczogVCxcbiAgbWFuaWZlc3Q6IFQsXG4gIGRlZmF1bHRWYWx1ZU1hcDogVCxcbik6IFQge1xuICByZXR1cm4gbmV3IFByb3h5KHByb3BlcnRpZXMsIHtcbiAgICBnZXQ6ICh0YXJnZXQsIG5hbWU6IGtleW9mIE1hbmlmZXN0IHwgXCJ0b0pTT05cIiB8IFwidG9TdHJpbmdcIikgPT4ge1xuICAgICAgaWYgKG5hbWUgPT09IFwidG9TdHJpbmdcIiB8fCBuYW1lID09PSBcInRvSlNPTlwiKSB7XG4gICAgICAgIHJldHVybiAoKSA9PiBKU09OLnN0cmluZ2lmeSh0YXJnZXQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoUmVmbGVjdC5nZXQodGFyZ2V0LCBuYW1lKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBnZXRQcm9wZXJ0eVZhbHVlKFxuICAgICAgICAgIFJlZmxlY3QuZ2V0KHRhcmdldCwgbmFtZSksXG4gICAgICAgICAgZGVmYXVsdFZhbHVlTWFwW25hbWVdLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAobWFuaWZlc3QgJiYgbmFtZSBpbiBtYW5pZmVzdCkge1xuICAgICAgICByZXR1cm4gZ2V0UHJvcGVydHlWYWx1ZShtYW5pZmVzdFtuYW1lXSwgZGVmYXVsdFZhbHVlTWFwW25hbWVdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZWZhdWx0VmFsdWVNYXBbbmFtZV07XG4gICAgfSxcblxuICAgIG93bktleXM6ICh0YXJnZXQpID0+IHtcbiAgICAgIGNvbnN0IGtleXMgPSBuZXcgU2V0KFtcbiAgICAgICAgLi4uUmVmbGVjdC5vd25LZXlzKHRhcmdldCksXG4gICAgICAgIC4uLk9iamVjdC5rZXlzKG1hbmlmZXN0KSxcbiAgICAgICAgLi4uT2JqZWN0LmtleXMoZGVmYXVsdFZhbHVlTWFwKSxcbiAgICAgIF0pO1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20oa2V5cyk7XG4gICAgfSxcblxuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogKHRhcmdldCwgcHJvcCkgPT4ge1xuICAgICAgbGV0IHByb3BEZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wKTtcbiAgICAgIGlmICghcHJvcERlc2NyaXB0b3IpIHtcbiAgICAgICAgcHJvcERlc2NyaXB0b3IgPSAobWFuaWZlc3QgJiZcbiAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG1hbmlmZXN0LCBwcm9wKSkgPz9cbiAgICAgICAgICAoZGVmYXVsdFZhbHVlTWFwICYmXG4gICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlZmF1bHRWYWx1ZU1hcCwgcHJvcCkpID8/IHtcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICB9O1xuICAgICAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcCwgcHJvcERlc2NyaXB0b3IpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByb3BEZXNjcmlwdG9yO1xuICAgIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcGVydHlWYWx1ZTxUPihwcm9wVmFsdWU6IGFueSwgZGVmYXVsdFRvOiBUKTogVCB7XG4gIGlmIChwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIGRlZmF1bHRUbyA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgIHJldHVybiBwYXJzZUJvb2xlYW4ocHJvcFZhbHVlKSBhcyBhbnk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGVmYXVsdFRvID09PSBcIm51bWJlclwiKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHByb3BWYWx1ZSkgYXMgYW55O1xuICAgIH1cbiAgICBpZiAoZGVmYXVsdFRvIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKHByb3BWYWx1ZSkgYXMgYW55O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wVmFsdWUgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRUbyA/PyBudWxsIDogcHJvcFZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VCb29sZWFuKFxuICB2YWw6IHN0cmluZyB8IGJvb2xlYW4gfCB1bmRlZmluZWQgfCBudWxsLFxuKTogYm9vbGVhbiB7XG4gIHJldHVybiAoPGFueT5bdHJ1ZSwgXCJ0cnVlXCIsIFwiMVwiXSkuaW5jbHVkZXModmFsKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VTdHJpbmdUb0FycmF5KHBhcnNlU3RyOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIGlmICghcGFyc2VTdHIpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBpZiAocGFyc2VTdHIuaW5jbHVkZXMoXCIsXCIpKSB7XG4gICAgcmV0dXJuIHBhcnNlU3RyLnNwbGl0KFwiLFwiKS5tYXAoKHM6IHN0cmluZykgPT4gcy50cmltKCkpO1xuICB9XG4gIGlmIChwYXJzZVN0ci5pbmNsdWRlcyhcIiBcIikpIHtcbiAgICByZXR1cm4gcGFyc2VTdHIuc3BsaXQoXCIgXCIpLm1hcCgoczogc3RyaW5nKSA9PiBzLnRyaW0oKSk7XG4gIH1cbiAgaWYgKHBhcnNlU3RyLmluY2x1ZGVzKFwiXFxuXCIpKSB7XG4gICAgcmV0dXJuIHBhcnNlU3RyLnNwbGl0KFwiXFxuXCIpLm1hcCgoczogc3RyaW5nKSA9PiBzLnRyaW0oKSk7XG4gIH1cblxuICByZXR1cm4gW3BhcnNlU3RyLnRyaW0oKV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZEF0dGFjaGVkRmlsZShmaWxlRGF0YTogc3RyaW5nLCBmaWxlOiBGaWxlKTogdm9pZCB7XG4gIGNvbnN0IGJ1ZmZlciA9IFVpbnQ4QXJyYXkuZnJvbShhdG9iKGZpbGVEYXRhKSwgKGMpID0+IGMuY2hhckNvZGVBdCgwKSk7XG4gIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYnVmZmVyXSwgeyB0eXBlOiBmaWxlLmNvbnRlbnRfdHlwZSB9KTtcbiAgY29uc3QgYmxvYkZpbGUgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGEuaHJlZiA9IGJsb2JGaWxlO1xuICBhLmRvd25sb2FkID0gZmlsZS5maWxlbmFtZSA/PyBmaWxlLmlkO1xuICBhLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gIGEuY2xpY2soKTtcbiAgYS5yZW1vdmUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5Q29udGFpbnNBcnJheShzdXBlcnNldDogYW55W10sIHN1YnNldDogYW55W10pOiBib29sZWFuIHtcbiAgcmV0dXJuIHN1YnNldC5ldmVyeSgodGFyZ2V0KSA9PiBzdXBlcnNldC5pbmNsdWRlcyh0YXJnZXQpKTtcbn1cbiIsIjxzdmVsdGU6b3B0aW9ucyB0YWc9XCJueWxhcy1lcnJvclwiIGltbXV0YWJsZT17dHJ1ZX0gLz5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbiAgaW1wb3J0IHsgRXJyb3JTdG9yZSB9IGZyb20gXCIuLi9zdG9yZS9lcnJvclwiO1xuICBpbXBvcnQgdHlwZSB7IE5FcnJvciB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuXG4gIGV4cG9ydCBsZXQgaWQ6IHN0cmluZzsgLy8gY29tcG9uZW50IGlkXG5cbiAgbGV0IGVycm9yOiBORXJyb3I7XG4gIGxldCBlcnJvck5hbWU6IHN0cmluZztcblxuICAkOiB7XG4gICAgZXJyb3IgPSAkRXJyb3JTdG9yZVtpZF0gPz8geyBuYW1lOiBcIlwiIH07XG4gICAgZXJyb3JOYW1lID0gZXJyb3IubmFtZSA/PyBlcnJvci5tZXNzYWdlPy5uYW1lID8/IFwiXCI7XG4gIH1cblxuICBjb25zdCBpc0RldkVudiA9XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoXCJsb2NhbGhvc3RcIikgfHxcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcyhcIjEyNy4wLjAuMVwiKTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC5tZXNzYWdlLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjZmNjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNhYTkyYTAgaW5zZXQsIDAgMCAwIDAgdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICM5ZjNhMzg7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlLCBjb2xvciA1MDBtcyBlYXNlLFxuICAgICAgYmFja2dyb3VuZC1jb2xvciA1MDBtcyBlYXNlLCBib3gtc2hhZG93IDUwMG1zIGVhc2UsXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3cgNTAwbXMgZWFzZTtcbiAgfVxuXG4gIC5tZXNzYWdlLWNvbnRhaW5lciAqOmZvY3VzIHtcbiAgICBvdXRsaW5lOiA1cHggYXV0byBIaWdobGlnaHQ7XG4gICAgb3V0bGluZTogNXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO1xuICB9XG5cbiAgLmRldGFpbHMge1xuICAgIGNvbG9yOiAjNDk0OTQ5O1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuPC9zdHlsZT5cblxueyNpZiBlcnJvck5hbWUgJiYgaXNEZXZFbnZ9XG4gIDxkaXYgY2xhc3M9XCJtZXNzYWdlLWNvbnRhaW5lclwiPlxuICAgIHsjaWYgZXJyb3JOYW1lID09PSBcIkhvc3REb21haW5Ob3RBbGxvd2VkRXJyb3JcIn1cbiAgICAgIDxoMz5cbiAgICAgICAgWW91IGFyZSB0cnlpbmcgdG8gYWNjZXNzIHRoaXMgY29tcG9uZW50IGZyb20mbmJzcDtcbiAgICAgICAgPGNvZGU+e3dpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZX08L2NvZGU+LiBUaGUgY29tcG9uZW50J3Mgc2V0dGluZ3MgZG8gbm90XG4gICAgICAgIGFsbG93IGFjY2VzcyBmcm9tIHRoaXMgZG9tYWluLlxuICAgICAgPC9oMz5cbiAgICAgIDxoND5cbiAgICAgICAgVGhlIGxpc3Qgb2YgYWxsb3dlZCBkb21haW5zIGNhbiBiZSBtb2RpZmllZCBpbiB5b3VyJm5ic3A7XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2Rhc2hib2FyZC5ueWxhcy5jb21cIj5EYXNoYm9hcmQ8L2E+LlxuICAgICAgPC9oND5cbiAgICB7OmVsc2UgaWYgZXJyb3JOYW1lID09PSBcIkluY29tcGF0aWJsZVByb3BlcnRpZXNcIn1cbiAgICAgIDxoMz5Zb3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGRvIG5vdCB3b3JrIHdpdGggZWFjaCBvdGhlci48L2gzPlxuICAgIHsvaWZ9XG4gICAgPHNwYW4gY2xhc3M9XCJkZXRhaWxzXCI+RGVidWcgaW5mbzo8L3NwYW4+XG4gICAgPHRleHRhcmVhIGNsYXNzPVwiZGV0YWlsc1wiIHJlYWRvbmx5PlxuICAgICAge2Vycm9yTmFtZX06IHtpZH1cbiAgICAgIHtlcnJvci5tZXNzYWdlPy5tZXNzYWdlID8/IFwiXCJ9XG4gICAgPC90ZXh0YXJlYT5cbiAgPC9kaXY+XG57L2lmfVxuIiwiPHN2ZWx0ZTpvcHRpb25zIHRhZz1cIm55bGFzLWNvbnRhY3QtaW1hZ2VcIiAvPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBDb250YWN0QXZhdGFyU3RvcmUgfSBmcm9tIFwiQGNvbW1vbnNcIjtcbiAgaW1wb3J0IHsgYmVmb3JlVXBkYXRlIH0gZnJvbSBcInN2ZWx0ZS9pbnRlcm5hbFwiO1xuXG4gIGV4cG9ydCBsZXQgY29udGFjdDtcbiAgZXhwb3J0IGxldCBjb250YWN0X3F1ZXJ5O1xuICBleHBvcnQgbGV0IGhlaWdodCA9IFwiMzJweFwiO1xuICBleHBvcnQgbGV0IHdpZHRoID0gXCIzMnB4XCI7XG4gICQ6IGltYWdlID0gbnVsbDtcblxuICBiZWZvcmVVcGRhdGUoYXN5bmMgKCkgPT4ge1xuICAgIGlmIChjb250YWN0ICYmIGNvbnRhY3QucGljdHVyZV91cmwpIHtcbiAgICAgIGltYWdlID0gYXdhaXQgQ29udGFjdEF2YXRhclN0b3JlLmdldENvbnRhY3RBdmF0YXIoXG4gICAgICAgIGNvbnRhY3RfcXVlcnksXG4gICAgICAgIGNvbnRhY3QuaWQsXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbWFnZSA9IG51bGw7XG4gICAgfVxuICB9KTtcbjwvc2NyaXB0PlxuXG57I2lmIGltYWdlfVxuICA8aW1nXG4gICAgYWx0PVwiXCJcbiAgICBzdHlsZT1cImhlaWdodDoge2hlaWdodH07IHdpZHRoOiB7d2lkdGh9OyBib3JkZXItcmFkaXVzOiA1MCU7XCJcbiAgICBzcmM9XCJkYXRhOmltYWdlL2pwZztiYXNlNjQse2ltYWdlfVwiXG4gIC8+XG57OmVsc2UgaWYgY29udGFjdH1cbiAgPHAgc3R5bGU9XCJtYXJnaW46IDA7XCI+XG4gICAge2NvbnRhY3QuZ2l2ZW5fbmFtZSAmJiBjb250YWN0LnN1cm5hbWVcbiAgICAgID8gY29udGFjdC5naXZlbl9uYW1lLmNoYXJBdCgwKSArIGNvbnRhY3Quc3VybmFtZS5jaGFyQXQoMClcbiAgICAgIDogY29udGFjdC5uYW1lXG4gICAgICA/IGNvbnRhY3QubmFtZS5jaGFyQXQoMClcbiAgICAgIDogY29udGFjdC5lbWFpbFxuICAgICAgPyBjb250YWN0LmVtYWlsLmNoYXJBdCgwKVxuICAgICAgOiBcIj9cIn1cbiAgPC9wPlxuey9pZn1cbiIsIjxzdmVsdGU6b3B0aW9ucyB0YWc9XCJueWxhcy1tZXNzYWdlLWVycm9yXCIgLz5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGxldCBlcnJvcl9tZXNzYWdlID0gXCJVaCBvaCEgTG9va3MgbGlrZSBhbiBlcnJvciBvY2N1cnJlZFwiO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuICBAaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy90aGVtaW5nL3Jlc2V0LnNjc3NcIjtcbiAgQGltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdGhlbWluZy92YXJpYWJsZXMuc2Nzc1wiO1xuXG4gIGRpdiB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcmVkLWxpZ2h0ZXIpO1xuICAgIGJvdHRvbTogMDtcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgbWluLWhlaWdodDogODVweDtcbiAgICBwYWRkaW5nOiAyMHB4IDI0cHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1pbi13aWR0aDogMjQwcHg7XG4gICAgei1pbmRleDogMjtcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuPC9zdHlsZT5cblxuPGRpdj5cbiAgPHA+e2Vycm9yX21lc3NhZ2V9PC9wPlxuICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbjpjbGljaz17KCkgPT4gbG9jYXRpb24ucmVsb2FkKCl9PlxuICAgIFJlZnJlc2ggeW91ciBwYWdlXG4gIDwvYnV0dG9uPlxuPC9kaXY+XG4iLCJpbXBvcnQgdHlwZSB7IERheSB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9BdmFpbGFiaWxpdHlcIjtcblxuLyoqXG4gKiBFdmVudHVhbGx5LCBwZXJoYXBzIGEgZGVzaWduLXN5c3RlbS1sZXZlbCBndWlkZWxpbmUgZm9yIGRhdGUgYW5kIHRpbWUgc3RyaW5ncy5cbiAqXG4gKiBDdXJyZW50bHksIERhdGUgbG9naWM6IGh0dHBzOi8vd3d3LmZpZ21hLmNvbS9maWxlL29pQ0tOc0hEZkFvOUtuSDFTYnM4WGovRW1haWwtJTI2LU1haWxib3gtQ29tcG9uZW50P25vZGUtaWQ9MTI4JTNBNTFcbiAqIE5vIHRpbWUgbG9naWMgc3RhbmRhcmQgeWV0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dEYXRlUmFuZ2UoZGF5czogRGF5W10pOiBzdHJpbmcge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoZGF5cykgfHwgZGF5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIGNvbnN0IGZpcnN0RGF5ID0gZGF5c1swXS50aW1lc3RhbXA7XG4gIGNvbnN0IGxhc3REYXkgPSBkYXlzW2RheXMubGVuZ3RoIC0gMV0udGltZXN0YW1wO1xuXG4gIGlmIChsYXN0RGF5LmdldE1vbnRoKCkgIT09IGZpcnN0RGF5LmdldE1vbnRoKCkpIHtcbiAgICBpZiAobGFzdERheS5nZXRGdWxsWWVhcigpICE9PSBmaXJzdERheS5nZXRGdWxsWWVhcigpKSB7XG4gICAgICAvLyBDYXNlIDE6IG1vbnRocyBhbmQgeWVhcnMgZGlmZmVyOiBEZWMgMjAyMSAtIEphbiAyMDIyXG4gICAgICByZXR1cm4gYCR7Z2V0TW9udGhTdHJpbmcoZmlyc3REYXksIHRydWUpfSAtICR7Z2V0TW9udGhTdHJpbmcoXG4gICAgICAgIGxhc3REYXksXG4gICAgICAgIHRydWUsXG4gICAgICApfWA7XG4gICAgfVxuICAgIC8vIENhc2UgMjogbW9udGhzIGRpZmZlciwgeWVhcnMgdGhlIHNhbWU6IE9jdCAtIE5vdiAyMDIxXG4gICAgcmV0dXJuIGAke2dldE1vbnRoU3RyaW5nKGZpcnN0RGF5KX0gLSAke2dldE1vbnRoU3RyaW5nKGxhc3REYXksIHRydWUpfWA7XG4gIH1cbiAgLy8gQ2FzZSAzOiBtb250aHMsIGFuZCB0aGVyZWZvcmUgeWVhcnMsIGFyZSB0aGUgc2FtZTogT2N0IDIwMjFcbiAgcmV0dXJuIGdldE1vbnRoU3RyaW5nKGZpcnN0RGF5LCB0cnVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbmRlbnNlZFRpbWVTdHJpbmcoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gIC8vIDEgYW0gfCAxOjE1IGFtXG4gIGNvbnN0IHRpbWVTdHJpbmcgPSBkYXRlLnRvTG9jYWxlVGltZVN0cmluZyhbXSwgeyB0aW1lU3R5bGU6IFwic2hvcnRcIiB9KTtcbiAgaWYgKGRhdGUuZ2V0TWludXRlcygpID09PSAwKSB7XG4gICAgcmV0dXJuIGRhdGVcbiAgICAgIC50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHtcbiAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgIGhvdXIxMjogdHJ1ZSxcbiAgICAgIH0pXG4gICAgICAucmVwbGFjZUFsbCgvXFwuL2csIFwiXCIpO1xuICB9XG4gIHJldHVybiB0aW1lU3RyaW5nLnJlcGxhY2VBbGwoL1xcLi9nLCBcIlwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWVTdHJpbmcoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gIC8vIDExOjExIGFtLCBOb29uXG4gIGNvbnN0IHRpbWVTdHJpbmcgPSBkYXRlLnRvTG9jYWxlVGltZVN0cmluZyhbXSwgeyB0aW1lU3R5bGU6IFwic2hvcnRcIiB9KTtcbiAgaWYgKHRpbWVTdHJpbmcgPT09IFwiMTI6MDAgcC5tLlwiKSB7XG4gICAgcmV0dXJuIFwiTm9vblwiO1xuICB9XG4gIHJldHVybiB0aW1lU3RyaW5nLnJlcGxhY2UoL1xcLi9nLCBcIlwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vbnRoU3RyaW5nKGRhdGU6IERhdGUsIHdpdGhZZWFyID0gZmFsc2UpOiBzdHJpbmcge1xuICByZXR1cm4gZGF0ZVxuICAgIC50b0xvY2FsZURhdGVTdHJpbmcoXCJkZWZhdWx0XCIsIHtcbiAgICAgIG1vbnRoOiBcInNob3J0XCIsXG4gICAgICB5ZWFyOiB3aXRoWWVhciA/IFwibnVtZXJpY1wiIDogdW5kZWZpbmVkLFxuICAgIH0pXG4gICAgLnJlcGxhY2VBbGwoL1xcLi9nLCBcIlwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFllYXJTdHJpbmcoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gIC8vIEp1bCA1dGggMjAyMFxuICBjb25zdCBzdWZmaXhNYXBwZXIgPSAobnVtOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICAgIGlmIChbMzEsIDIxLCAxXS5pbmNsdWRlcyhudW0pKSByZXR1cm4gXCJzdCBcIjtcbiAgICBpZiAoWzIyLCAyXS5pbmNsdWRlcyhudW0pKSByZXR1cm4gXCJuZCBcIjtcbiAgICBpZiAoWzIzLCAzXS5pbmNsdWRlcyhudW0pKSByZXR1cm4gXCJyZCBcIjtcbiAgICByZXR1cm4gXCJ0aCBcIjtcbiAgfTtcbiAgcmV0dXJuIGRhdGVcbiAgICAudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwge1xuICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICBtb250aDogXCJzaG9ydFwiLFxuICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICB9KVxuICAgIC5yZXBsYWNlQWxsKC8sIC9nLCBzdWZmaXhNYXBwZXIoZGF0ZS5nZXREYXRlKCkpKVxuICAgIC5yZXBsYWNlQWxsKC9bLl0vZywgXCJcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRlU3RyaW5nKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAvLyBTZXAgMjJcbiAgcmV0dXJuIGRhdGVcbiAgICAudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgeyBtb250aDogXCJzaG9ydFwiLCBkYXk6IFwibnVtZXJpY1wiIH0pXG4gICAgLnJlcGxhY2VBbGwoL1suXS9nLCBcIlwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGUoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgaWYgKHRvZGF5LnRvRGF0ZVN0cmluZygpID09PSBkYXRlLnRvRGF0ZVN0cmluZygpKSB7XG4gICAgcmV0dXJuIGdldFRpbWVTdHJpbmcoZGF0ZSk7XG4gIH1cblxuICBjb25zdCBkaWZmX3llYXJzID0gdG9kYXkuZ2V0RnVsbFllYXIoKSAtIGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgaWYgKGRpZmZfeWVhcnMgIT09IDApIHtcbiAgICByZXR1cm4gZ2V0WWVhclN0cmluZyhkYXRlKTtcbiAgfVxuXG4gIGNvbnN0IHllc3RlcmRheSA9IG5ldyBEYXRlKHRvZGF5LmdldERhdGUoKSAtIDEpO1xuICBpZiAoeWVzdGVyZGF5LnRvRGF0ZVN0cmluZygpID09PSBkYXRlLnRvRGF0ZVN0cmluZygpKSB7XG4gICAgcmV0dXJuIFwiWWVzdGVyZGF5XCI7XG4gIH1cblxuICByZXR1cm4gZ2V0RGF0ZVN0cmluZyhkYXRlKTtcbn1cblxuZXhwb3J0IGNvbnN0IHdlZWtkYXlzID0gW1xuICBcIlN1bmRheVwiLFxuICBcIk1vbmRheVwiLFxuICBcIlR1ZXNkYXlcIixcbiAgXCJXZWRuZXNkYXlcIixcbiAgXCJUaHVyc2RheVwiLFxuICBcIkZyaWRheVwiLFxuICBcIlNhdHVyZGF5XCIsXG5dO1xuIiwiLyohIEBsaWNlbnNlIERPTVB1cmlmeSAyLjMuNSB8IChjKSBDdXJlNTMgYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyB8IFJlbGVhc2VkIHVuZGVyIHRoZSBBcGFjaGUgbGljZW5zZSAyLjAgYW5kIE1vemlsbGEgUHVibGljIExpY2Vuc2UgMi4wIHwgZ2l0aHViLmNvbS9jdXJlNTMvRE9NUHVyaWZ5L2Jsb2IvMi4zLjUvTElDRU5TRSAqL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLkRPTVB1cmlmeSA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG4gIHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5oYXNPd25Qcm9wZXJ0eSxcbiAgICAgIHNldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mLFxuICAgICAgaXNGcm96ZW4gPSBPYmplY3QuaXNGcm96ZW4sXG4gICAgICBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gIHZhciBmcmVlemUgPSBPYmplY3QuZnJlZXplLFxuICAgICAgc2VhbCA9IE9iamVjdC5zZWFsLFxuICAgICAgY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXG5cbiAgdmFyIF9yZWYgPSB0eXBlb2YgUmVmbGVjdCAhPT0gJ3VuZGVmaW5lZCcgJiYgUmVmbGVjdCxcbiAgICAgIGFwcGx5ID0gX3JlZi5hcHBseSxcbiAgICAgIGNvbnN0cnVjdCA9IF9yZWYuY29uc3RydWN0O1xuXG4gIGlmICghYXBwbHkpIHtcbiAgICBhcHBseSA9IGZ1bmN0aW9uIGFwcGx5KGZ1biwgdGhpc1ZhbHVlLCBhcmdzKSB7XG4gICAgICByZXR1cm4gZnVuLmFwcGx5KHRoaXNWYWx1ZSwgYXJncyk7XG4gICAgfTtcbiAgfVxuXG4gIGlmICghZnJlZXplKSB7XG4gICAgZnJlZXplID0gZnVuY3Rpb24gZnJlZXplKHgpIHtcbiAgICAgIHJldHVybiB4O1xuICAgIH07XG4gIH1cblxuICBpZiAoIXNlYWwpIHtcbiAgICBzZWFsID0gZnVuY3Rpb24gc2VhbCh4KSB7XG4gICAgICByZXR1cm4geDtcbiAgICB9O1xuICB9XG5cbiAgaWYgKCFjb25zdHJ1Y3QpIHtcbiAgICBjb25zdHJ1Y3QgPSBmdW5jdGlvbiBjb25zdHJ1Y3QoRnVuYywgYXJncykge1xuICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoRnVuYywgW251bGxdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoYXJncykpKSkoKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIGFycmF5Rm9yRWFjaCA9IHVuYXBwbHkoQXJyYXkucHJvdG90eXBlLmZvckVhY2gpO1xuICB2YXIgYXJyYXlQb3AgPSB1bmFwcGx5KEFycmF5LnByb3RvdHlwZS5wb3ApO1xuICB2YXIgYXJyYXlQdXNoID0gdW5hcHBseShBcnJheS5wcm90b3R5cGUucHVzaCk7XG5cbiAgdmFyIHN0cmluZ1RvTG93ZXJDYXNlID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLnRvTG93ZXJDYXNlKTtcbiAgdmFyIHN0cmluZ01hdGNoID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLm1hdGNoKTtcbiAgdmFyIHN0cmluZ1JlcGxhY2UgPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUucmVwbGFjZSk7XG4gIHZhciBzdHJpbmdJbmRleE9mID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLmluZGV4T2YpO1xuICB2YXIgc3RyaW5nVHJpbSA9IHVuYXBwbHkoU3RyaW5nLnByb3RvdHlwZS50cmltKTtcblxuICB2YXIgcmVnRXhwVGVzdCA9IHVuYXBwbHkoUmVnRXhwLnByb3RvdHlwZS50ZXN0KTtcblxuICB2YXIgdHlwZUVycm9yQ3JlYXRlID0gdW5jb25zdHJ1Y3QoVHlwZUVycm9yKTtcblxuICBmdW5jdGlvbiB1bmFwcGx5KGZ1bmMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRoaXNBcmcpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFwcGx5KGZ1bmMsIHRoaXNBcmcsIGFyZ3MpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB1bmNvbnN0cnVjdChmdW5jKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnN0cnVjdChmdW5jLCBhcmdzKTtcbiAgICB9O1xuICB9XG5cbiAgLyogQWRkIHByb3BlcnRpZXMgdG8gYSBsb29rdXAgdGFibGUgKi9cbiAgZnVuY3Rpb24gYWRkVG9TZXQoc2V0LCBhcnJheSkge1xuICAgIGlmIChzZXRQcm90b3R5cGVPZikge1xuICAgICAgLy8gTWFrZSAnaW4nIGFuZCB0cnV0aHkgY2hlY2tzIGxpa2UgQm9vbGVhbihzZXQuY29uc3RydWN0b3IpXG4gICAgICAvLyBpbmRlcGVuZGVudCBvZiBhbnkgcHJvcGVydGllcyBkZWZpbmVkIG9uIE9iamVjdC5wcm90b3R5cGUuXG4gICAgICAvLyBQcmV2ZW50IHByb3RvdHlwZSBzZXR0ZXJzIGZyb20gaW50ZXJjZXB0aW5nIHNldCBhcyBhIHRoaXMgdmFsdWUuXG4gICAgICBzZXRQcm90b3R5cGVPZihzZXQsIG51bGwpO1xuICAgIH1cblxuICAgIHZhciBsID0gYXJyYXkubGVuZ3RoO1xuICAgIHdoaWxlIChsLS0pIHtcbiAgICAgIHZhciBlbGVtZW50ID0gYXJyYXlbbF07XG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciBsY0VsZW1lbnQgPSBzdHJpbmdUb0xvd2VyQ2FzZShlbGVtZW50KTtcbiAgICAgICAgaWYgKGxjRWxlbWVudCAhPT0gZWxlbWVudCkge1xuICAgICAgICAgIC8vIENvbmZpZyBwcmVzZXRzIChlLmcuIHRhZ3MuanMsIGF0dHJzLmpzKSBhcmUgaW1tdXRhYmxlLlxuICAgICAgICAgIGlmICghaXNGcm96ZW4oYXJyYXkpKSB7XG4gICAgICAgICAgICBhcnJheVtsXSA9IGxjRWxlbWVudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlbGVtZW50ID0gbGNFbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNldFtlbGVtZW50XSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNldDtcbiAgfVxuXG4gIC8qIFNoYWxsb3cgY2xvbmUgYW4gb2JqZWN0ICovXG4gIGZ1bmN0aW9uIGNsb25lKG9iamVjdCkge1xuICAgIHZhciBuZXdPYmplY3QgPSBjcmVhdGUobnVsbCk7XG5cbiAgICB2YXIgcHJvcGVydHkgPSB2b2lkIDA7XG4gICAgZm9yIChwcm9wZXJ0eSBpbiBvYmplY3QpIHtcbiAgICAgIGlmIChhcHBseShoYXNPd25Qcm9wZXJ0eSwgb2JqZWN0LCBbcHJvcGVydHldKSkge1xuICAgICAgICBuZXdPYmplY3RbcHJvcGVydHldID0gb2JqZWN0W3Byb3BlcnR5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3T2JqZWN0O1xuICB9XG5cbiAgLyogSUUxMCBkb2Vzbid0IHN1cHBvcnQgX19sb29rdXBHZXR0ZXJfXyBzbyBsZXRzJ1xuICAgKiBzaW11bGF0ZSBpdC4gSXQgYWxzbyBhdXRvbWF0aWNhbGx5IGNoZWNrc1xuICAgKiBpZiB0aGUgcHJvcCBpcyBmdW5jdGlvbiBvciBnZXR0ZXIgYW5kIGJlaGF2ZXNcbiAgICogYWNjb3JkaW5nbHkuICovXG4gIGZ1bmN0aW9uIGxvb2t1cEdldHRlcihvYmplY3QsIHByb3ApIHtcbiAgICB3aGlsZSAob2JqZWN0ICE9PSBudWxsKSB7XG4gICAgICB2YXIgZGVzYyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3ApO1xuICAgICAgaWYgKGRlc2MpIHtcbiAgICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHVuYXBwbHkoZGVzYy5nZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkZXNjLnZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIHVuYXBwbHkoZGVzYy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmYWxsYmFja1ZhbHVlKGVsZW1lbnQpIHtcbiAgICAgIGNvbnNvbGUud2FybignZmFsbGJhY2sgdmFsdWUgZm9yJywgZWxlbWVudCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsbGJhY2tWYWx1ZTtcbiAgfVxuXG4gIHZhciBodG1sID0gZnJlZXplKFsnYScsICdhYmJyJywgJ2Fjcm9ueW0nLCAnYWRkcmVzcycsICdhcmVhJywgJ2FydGljbGUnLCAnYXNpZGUnLCAnYXVkaW8nLCAnYicsICdiZGknLCAnYmRvJywgJ2JpZycsICdibGluaycsICdibG9ja3F1b3RlJywgJ2JvZHknLCAnYnInLCAnYnV0dG9uJywgJ2NhbnZhcycsICdjYXB0aW9uJywgJ2NlbnRlcicsICdjaXRlJywgJ2NvZGUnLCAnY29sJywgJ2NvbGdyb3VwJywgJ2NvbnRlbnQnLCAnZGF0YScsICdkYXRhbGlzdCcsICdkZCcsICdkZWNvcmF0b3InLCAnZGVsJywgJ2RldGFpbHMnLCAnZGZuJywgJ2RpYWxvZycsICdkaXInLCAnZGl2JywgJ2RsJywgJ2R0JywgJ2VsZW1lbnQnLCAnZW0nLCAnZmllbGRzZXQnLCAnZmlnY2FwdGlvbicsICdmaWd1cmUnLCAnZm9udCcsICdmb290ZXInLCAnZm9ybScsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdoZWFkJywgJ2hlYWRlcicsICdoZ3JvdXAnLCAnaHInLCAnaHRtbCcsICdpJywgJ2ltZycsICdpbnB1dCcsICdpbnMnLCAna2JkJywgJ2xhYmVsJywgJ2xlZ2VuZCcsICdsaScsICdtYWluJywgJ21hcCcsICdtYXJrJywgJ21hcnF1ZWUnLCAnbWVudScsICdtZW51aXRlbScsICdtZXRlcicsICduYXYnLCAnbm9icicsICdvbCcsICdvcHRncm91cCcsICdvcHRpb24nLCAnb3V0cHV0JywgJ3AnLCAncGljdHVyZScsICdwcmUnLCAncHJvZ3Jlc3MnLCAncScsICdycCcsICdydCcsICdydWJ5JywgJ3MnLCAnc2FtcCcsICdzZWN0aW9uJywgJ3NlbGVjdCcsICdzaGFkb3cnLCAnc21hbGwnLCAnc291cmNlJywgJ3NwYWNlcicsICdzcGFuJywgJ3N0cmlrZScsICdzdHJvbmcnLCAnc3R5bGUnLCAnc3ViJywgJ3N1bW1hcnknLCAnc3VwJywgJ3RhYmxlJywgJ3Rib2R5JywgJ3RkJywgJ3RlbXBsYXRlJywgJ3RleHRhcmVhJywgJ3Rmb290JywgJ3RoJywgJ3RoZWFkJywgJ3RpbWUnLCAndHInLCAndHJhY2snLCAndHQnLCAndScsICd1bCcsICd2YXInLCAndmlkZW8nLCAnd2JyJ10pO1xuXG4gIC8vIFNWR1xuICB2YXIgc3ZnID0gZnJlZXplKFsnc3ZnJywgJ2EnLCAnYWx0Z2x5cGgnLCAnYWx0Z2x5cGhkZWYnLCAnYWx0Z2x5cGhpdGVtJywgJ2FuaW1hdGVjb2xvcicsICdhbmltYXRlbW90aW9uJywgJ2FuaW1hdGV0cmFuc2Zvcm0nLCAnY2lyY2xlJywgJ2NsaXBwYXRoJywgJ2RlZnMnLCAnZGVzYycsICdlbGxpcHNlJywgJ2ZpbHRlcicsICdmb250JywgJ2cnLCAnZ2x5cGgnLCAnZ2x5cGhyZWYnLCAnaGtlcm4nLCAnaW1hZ2UnLCAnbGluZScsICdsaW5lYXJncmFkaWVudCcsICdtYXJrZXInLCAnbWFzaycsICdtZXRhZGF0YScsICdtcGF0aCcsICdwYXRoJywgJ3BhdHRlcm4nLCAncG9seWdvbicsICdwb2x5bGluZScsICdyYWRpYWxncmFkaWVudCcsICdyZWN0JywgJ3N0b3AnLCAnc3R5bGUnLCAnc3dpdGNoJywgJ3N5bWJvbCcsICd0ZXh0JywgJ3RleHRwYXRoJywgJ3RpdGxlJywgJ3RyZWYnLCAndHNwYW4nLCAndmlldycsICd2a2VybiddKTtcblxuICB2YXIgc3ZnRmlsdGVycyA9IGZyZWV6ZShbJ2ZlQmxlbmQnLCAnZmVDb2xvck1hdHJpeCcsICdmZUNvbXBvbmVudFRyYW5zZmVyJywgJ2ZlQ29tcG9zaXRlJywgJ2ZlQ29udm9sdmVNYXRyaXgnLCAnZmVEaWZmdXNlTGlnaHRpbmcnLCAnZmVEaXNwbGFjZW1lbnRNYXAnLCAnZmVEaXN0YW50TGlnaHQnLCAnZmVGbG9vZCcsICdmZUZ1bmNBJywgJ2ZlRnVuY0InLCAnZmVGdW5jRycsICdmZUZ1bmNSJywgJ2ZlR2F1c3NpYW5CbHVyJywgJ2ZlSW1hZ2UnLCAnZmVNZXJnZScsICdmZU1lcmdlTm9kZScsICdmZU1vcnBob2xvZ3knLCAnZmVPZmZzZXQnLCAnZmVQb2ludExpZ2h0JywgJ2ZlU3BlY3VsYXJMaWdodGluZycsICdmZVNwb3RMaWdodCcsICdmZVRpbGUnLCAnZmVUdXJidWxlbmNlJ10pO1xuXG4gIC8vIExpc3Qgb2YgU1ZHIGVsZW1lbnRzIHRoYXQgYXJlIGRpc2FsbG93ZWQgYnkgZGVmYXVsdC5cbiAgLy8gV2Ugc3RpbGwgbmVlZCB0byBrbm93IHRoZW0gc28gdGhhdCB3ZSBjYW4gZG8gbmFtZXNwYWNlXG4gIC8vIGNoZWNrcyBwcm9wZXJseSBpbiBjYXNlIG9uZSB3YW50cyB0byBhZGQgdGhlbSB0b1xuICAvLyBhbGxvdy1saXN0LlxuICB2YXIgc3ZnRGlzYWxsb3dlZCA9IGZyZWV6ZShbJ2FuaW1hdGUnLCAnY29sb3ItcHJvZmlsZScsICdjdXJzb3InLCAnZGlzY2FyZCcsICdmZWRyb3BzaGFkb3cnLCAnZm9udC1mYWNlJywgJ2ZvbnQtZmFjZS1mb3JtYXQnLCAnZm9udC1mYWNlLW5hbWUnLCAnZm9udC1mYWNlLXNyYycsICdmb250LWZhY2UtdXJpJywgJ2ZvcmVpZ25vYmplY3QnLCAnaGF0Y2gnLCAnaGF0Y2hwYXRoJywgJ21lc2gnLCAnbWVzaGdyYWRpZW50JywgJ21lc2hwYXRjaCcsICdtZXNocm93JywgJ21pc3NpbmctZ2x5cGgnLCAnc2NyaXB0JywgJ3NldCcsICdzb2xpZGNvbG9yJywgJ3Vua25vd24nLCAndXNlJ10pO1xuXG4gIHZhciBtYXRoTWwgPSBmcmVlemUoWydtYXRoJywgJ21lbmNsb3NlJywgJ21lcnJvcicsICdtZmVuY2VkJywgJ21mcmFjJywgJ21nbHlwaCcsICdtaScsICdtbGFiZWxlZHRyJywgJ21tdWx0aXNjcmlwdHMnLCAnbW4nLCAnbW8nLCAnbW92ZXInLCAnbXBhZGRlZCcsICdtcGhhbnRvbScsICdtcm9vdCcsICdtcm93JywgJ21zJywgJ21zcGFjZScsICdtc3FydCcsICdtc3R5bGUnLCAnbXN1YicsICdtc3VwJywgJ21zdWJzdXAnLCAnbXRhYmxlJywgJ210ZCcsICdtdGV4dCcsICdtdHInLCAnbXVuZGVyJywgJ211bmRlcm92ZXInXSk7XG5cbiAgLy8gU2ltaWxhcmx5IHRvIFNWRywgd2Ugd2FudCB0byBrbm93IGFsbCBNYXRoTUwgZWxlbWVudHMsXG4gIC8vIGV2ZW4gdGhvc2UgdGhhdCB3ZSBkaXNhbGxvdyBieSBkZWZhdWx0LlxuICB2YXIgbWF0aE1sRGlzYWxsb3dlZCA9IGZyZWV6ZShbJ21hY3Rpb24nLCAnbWFsaWduZ3JvdXAnLCAnbWFsaWdubWFyaycsICdtbG9uZ2RpdicsICdtc2NhcnJpZXMnLCAnbXNjYXJyeScsICdtc2dyb3VwJywgJ21zdGFjaycsICdtc2xpbmUnLCAnbXNyb3cnLCAnc2VtYW50aWNzJywgJ2Fubm90YXRpb24nLCAnYW5ub3RhdGlvbi14bWwnLCAnbXByZXNjcmlwdHMnLCAnbm9uZSddKTtcblxuICB2YXIgdGV4dCA9IGZyZWV6ZShbJyN0ZXh0J10pO1xuXG4gIHZhciBodG1sJDEgPSBmcmVlemUoWydhY2NlcHQnLCAnYWN0aW9uJywgJ2FsaWduJywgJ2FsdCcsICdhdXRvY2FwaXRhbGl6ZScsICdhdXRvY29tcGxldGUnLCAnYXV0b3BpY3R1cmVpbnBpY3R1cmUnLCAnYXV0b3BsYXknLCAnYmFja2dyb3VuZCcsICdiZ2NvbG9yJywgJ2JvcmRlcicsICdjYXB0dXJlJywgJ2NlbGxwYWRkaW5nJywgJ2NlbGxzcGFjaW5nJywgJ2NoZWNrZWQnLCAnY2l0ZScsICdjbGFzcycsICdjbGVhcicsICdjb2xvcicsICdjb2xzJywgJ2NvbHNwYW4nLCAnY29udHJvbHMnLCAnY29udHJvbHNsaXN0JywgJ2Nvb3JkcycsICdjcm9zc29yaWdpbicsICdkYXRldGltZScsICdkZWNvZGluZycsICdkZWZhdWx0JywgJ2RpcicsICdkaXNhYmxlZCcsICdkaXNhYmxlcGljdHVyZWlucGljdHVyZScsICdkaXNhYmxlcmVtb3RlcGxheWJhY2snLCAnZG93bmxvYWQnLCAnZHJhZ2dhYmxlJywgJ2VuY3R5cGUnLCAnZW50ZXJrZXloaW50JywgJ2ZhY2UnLCAnZm9yJywgJ2hlYWRlcnMnLCAnaGVpZ2h0JywgJ2hpZGRlbicsICdoaWdoJywgJ2hyZWYnLCAnaHJlZmxhbmcnLCAnaWQnLCAnaW5wdXRtb2RlJywgJ2ludGVncml0eScsICdpc21hcCcsICdraW5kJywgJ2xhYmVsJywgJ2xhbmcnLCAnbGlzdCcsICdsb2FkaW5nJywgJ2xvb3AnLCAnbG93JywgJ21heCcsICdtYXhsZW5ndGgnLCAnbWVkaWEnLCAnbWV0aG9kJywgJ21pbicsICdtaW5sZW5ndGgnLCAnbXVsdGlwbGUnLCAnbXV0ZWQnLCAnbmFtZScsICdub25jZScsICdub3NoYWRlJywgJ25vdmFsaWRhdGUnLCAnbm93cmFwJywgJ29wZW4nLCAnb3B0aW11bScsICdwYXR0ZXJuJywgJ3BsYWNlaG9sZGVyJywgJ3BsYXlzaW5saW5lJywgJ3Bvc3RlcicsICdwcmVsb2FkJywgJ3B1YmRhdGUnLCAncmFkaW9ncm91cCcsICdyZWFkb25seScsICdyZWwnLCAncmVxdWlyZWQnLCAncmV2JywgJ3JldmVyc2VkJywgJ3JvbGUnLCAncm93cycsICdyb3dzcGFuJywgJ3NwZWxsY2hlY2snLCAnc2NvcGUnLCAnc2VsZWN0ZWQnLCAnc2hhcGUnLCAnc2l6ZScsICdzaXplcycsICdzcGFuJywgJ3NyY2xhbmcnLCAnc3RhcnQnLCAnc3JjJywgJ3NyY3NldCcsICdzdGVwJywgJ3N0eWxlJywgJ3N1bW1hcnknLCAndGFiaW5kZXgnLCAndGl0bGUnLCAndHJhbnNsYXRlJywgJ3R5cGUnLCAndXNlbWFwJywgJ3ZhbGlnbicsICd2YWx1ZScsICd3aWR0aCcsICd4bWxucycsICdzbG90J10pO1xuXG4gIHZhciBzdmckMSA9IGZyZWV6ZShbJ2FjY2VudC1oZWlnaHQnLCAnYWNjdW11bGF0ZScsICdhZGRpdGl2ZScsICdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnYXNjZW50JywgJ2F0dHJpYnV0ZW5hbWUnLCAnYXR0cmlidXRldHlwZScsICdhemltdXRoJywgJ2Jhc2VmcmVxdWVuY3knLCAnYmFzZWxpbmUtc2hpZnQnLCAnYmVnaW4nLCAnYmlhcycsICdieScsICdjbGFzcycsICdjbGlwJywgJ2NsaXBwYXRodW5pdHMnLCAnY2xpcC1wYXRoJywgJ2NsaXAtcnVsZScsICdjb2xvcicsICdjb2xvci1pbnRlcnBvbGF0aW9uJywgJ2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVycycsICdjb2xvci1wcm9maWxlJywgJ2NvbG9yLXJlbmRlcmluZycsICdjeCcsICdjeScsICdkJywgJ2R4JywgJ2R5JywgJ2RpZmZ1c2Vjb25zdGFudCcsICdkaXJlY3Rpb24nLCAnZGlzcGxheScsICdkaXZpc29yJywgJ2R1cicsICdlZGdlbW9kZScsICdlbGV2YXRpb24nLCAnZW5kJywgJ2ZpbGwnLCAnZmlsbC1vcGFjaXR5JywgJ2ZpbGwtcnVsZScsICdmaWx0ZXInLCAnZmlsdGVydW5pdHMnLCAnZmxvb2QtY29sb3InLCAnZmxvb2Qtb3BhY2l0eScsICdmb250LWZhbWlseScsICdmb250LXNpemUnLCAnZm9udC1zaXplLWFkanVzdCcsICdmb250LXN0cmV0Y2gnLCAnZm9udC1zdHlsZScsICdmb250LXZhcmlhbnQnLCAnZm9udC13ZWlnaHQnLCAnZngnLCAnZnknLCAnZzEnLCAnZzInLCAnZ2x5cGgtbmFtZScsICdnbHlwaHJlZicsICdncmFkaWVudHVuaXRzJywgJ2dyYWRpZW50dHJhbnNmb3JtJywgJ2hlaWdodCcsICdocmVmJywgJ2lkJywgJ2ltYWdlLXJlbmRlcmluZycsICdpbicsICdpbjInLCAnaycsICdrMScsICdrMicsICdrMycsICdrNCcsICdrZXJuaW5nJywgJ2tleXBvaW50cycsICdrZXlzcGxpbmVzJywgJ2tleXRpbWVzJywgJ2xhbmcnLCAnbGVuZ3RoYWRqdXN0JywgJ2xldHRlci1zcGFjaW5nJywgJ2tlcm5lbG1hdHJpeCcsICdrZXJuZWx1bml0bGVuZ3RoJywgJ2xpZ2h0aW5nLWNvbG9yJywgJ2xvY2FsJywgJ21hcmtlci1lbmQnLCAnbWFya2VyLW1pZCcsICdtYXJrZXItc3RhcnQnLCAnbWFya2VyaGVpZ2h0JywgJ21hcmtlcnVuaXRzJywgJ21hcmtlcndpZHRoJywgJ21hc2tjb250ZW50dW5pdHMnLCAnbWFza3VuaXRzJywgJ21heCcsICdtYXNrJywgJ21lZGlhJywgJ21ldGhvZCcsICdtb2RlJywgJ21pbicsICduYW1lJywgJ251bW9jdGF2ZXMnLCAnb2Zmc2V0JywgJ29wZXJhdG9yJywgJ29wYWNpdHknLCAnb3JkZXInLCAnb3JpZW50JywgJ29yaWVudGF0aW9uJywgJ29yaWdpbicsICdvdmVyZmxvdycsICdwYWludC1vcmRlcicsICdwYXRoJywgJ3BhdGhsZW5ndGgnLCAncGF0dGVybmNvbnRlbnR1bml0cycsICdwYXR0ZXJudHJhbnNmb3JtJywgJ3BhdHRlcm51bml0cycsICdwb2ludHMnLCAncHJlc2VydmVhbHBoYScsICdwcmVzZXJ2ZWFzcGVjdHJhdGlvJywgJ3ByaW1pdGl2ZXVuaXRzJywgJ3InLCAncngnLCAncnknLCAncmFkaXVzJywgJ3JlZngnLCAncmVmeScsICdyZXBlYXRjb3VudCcsICdyZXBlYXRkdXInLCAncmVzdGFydCcsICdyZXN1bHQnLCAncm90YXRlJywgJ3NjYWxlJywgJ3NlZWQnLCAnc2hhcGUtcmVuZGVyaW5nJywgJ3NwZWN1bGFyY29uc3RhbnQnLCAnc3BlY3VsYXJleHBvbmVudCcsICdzcHJlYWRtZXRob2QnLCAnc3RhcnRvZmZzZXQnLCAnc3RkZGV2aWF0aW9uJywgJ3N0aXRjaHRpbGVzJywgJ3N0b3AtY29sb3InLCAnc3RvcC1vcGFjaXR5JywgJ3N0cm9rZS1kYXNoYXJyYXknLCAnc3Ryb2tlLWRhc2hvZmZzZXQnLCAnc3Ryb2tlLWxpbmVjYXAnLCAnc3Ryb2tlLWxpbmVqb2luJywgJ3N0cm9rZS1taXRlcmxpbWl0JywgJ3N0cm9rZS1vcGFjaXR5JywgJ3N0cm9rZScsICdzdHJva2Utd2lkdGgnLCAnc3R5bGUnLCAnc3VyZmFjZXNjYWxlJywgJ3N5c3RlbWxhbmd1YWdlJywgJ3RhYmluZGV4JywgJ3RhcmdldHgnLCAndGFyZ2V0eScsICd0cmFuc2Zvcm0nLCAndHJhbnNmb3JtLW9yaWdpbicsICd0ZXh0LWFuY2hvcicsICd0ZXh0LWRlY29yYXRpb24nLCAndGV4dC1yZW5kZXJpbmcnLCAndGV4dGxlbmd0aCcsICd0eXBlJywgJ3UxJywgJ3UyJywgJ3VuaWNvZGUnLCAndmFsdWVzJywgJ3ZpZXdib3gnLCAndmlzaWJpbGl0eScsICd2ZXJzaW9uJywgJ3ZlcnQtYWR2LXknLCAndmVydC1vcmlnaW4teCcsICd2ZXJ0LW9yaWdpbi15JywgJ3dpZHRoJywgJ3dvcmQtc3BhY2luZycsICd3cmFwJywgJ3dyaXRpbmctbW9kZScsICd4Y2hhbm5lbHNlbGVjdG9yJywgJ3ljaGFubmVsc2VsZWN0b3InLCAneCcsICd4MScsICd4MicsICd4bWxucycsICd5JywgJ3kxJywgJ3kyJywgJ3onLCAnem9vbWFuZHBhbiddKTtcblxuICB2YXIgbWF0aE1sJDEgPSBmcmVlemUoWydhY2NlbnQnLCAnYWNjZW50dW5kZXInLCAnYWxpZ24nLCAnYmV2ZWxsZWQnLCAnY2xvc2UnLCAnY29sdW1uc2FsaWduJywgJ2NvbHVtbmxpbmVzJywgJ2NvbHVtbnNwYW4nLCAnZGVub21hbGlnbicsICdkZXB0aCcsICdkaXInLCAnZGlzcGxheScsICdkaXNwbGF5c3R5bGUnLCAnZW5jb2RpbmcnLCAnZmVuY2UnLCAnZnJhbWUnLCAnaGVpZ2h0JywgJ2hyZWYnLCAnaWQnLCAnbGFyZ2VvcCcsICdsZW5ndGgnLCAnbGluZXRoaWNrbmVzcycsICdsc3BhY2UnLCAnbHF1b3RlJywgJ21hdGhiYWNrZ3JvdW5kJywgJ21hdGhjb2xvcicsICdtYXRoc2l6ZScsICdtYXRodmFyaWFudCcsICdtYXhzaXplJywgJ21pbnNpemUnLCAnbW92YWJsZWxpbWl0cycsICdub3RhdGlvbicsICdudW1hbGlnbicsICdvcGVuJywgJ3Jvd2FsaWduJywgJ3Jvd2xpbmVzJywgJ3Jvd3NwYWNpbmcnLCAncm93c3BhbicsICdyc3BhY2UnLCAncnF1b3RlJywgJ3NjcmlwdGxldmVsJywgJ3NjcmlwdG1pbnNpemUnLCAnc2NyaXB0c2l6ZW11bHRpcGxpZXInLCAnc2VsZWN0aW9uJywgJ3NlcGFyYXRvcicsICdzZXBhcmF0b3JzJywgJ3N0cmV0Y2h5JywgJ3N1YnNjcmlwdHNoaWZ0JywgJ3N1cHNjcmlwdHNoaWZ0JywgJ3N5bW1ldHJpYycsICd2b2Zmc2V0JywgJ3dpZHRoJywgJ3htbG5zJ10pO1xuXG4gIHZhciB4bWwgPSBmcmVlemUoWyd4bGluazpocmVmJywgJ3htbDppZCcsICd4bGluazp0aXRsZScsICd4bWw6c3BhY2UnLCAneG1sbnM6eGxpbmsnXSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vYmV0dGVyLXJlZ2V4XG4gIHZhciBNVVNUQUNIRV9FWFBSID0gc2VhbCgvXFx7XFx7W1xcc1xcU10qfFtcXHNcXFNdKlxcfVxcfS9nbSk7IC8vIFNwZWNpZnkgdGVtcGxhdGUgZGV0ZWN0aW9uIHJlZ2V4IGZvciBTQUZFX0ZPUl9URU1QTEFURVMgbW9kZVxuICB2YXIgRVJCX0VYUFIgPSBzZWFsKC88JVtcXHNcXFNdKnxbXFxzXFxTXSolPi9nbSk7XG4gIHZhciBEQVRBX0FUVFIgPSBzZWFsKC9eZGF0YS1bXFwtXFx3LlxcdTAwQjctXFx1RkZGRl0vKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICB2YXIgQVJJQV9BVFRSID0gc2VhbCgvXmFyaWEtW1xcLVxcd10rJC8pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4gIHZhciBJU19BTExPV0VEX1VSSSA9IHNlYWwoL14oPzooPzooPzpmfGh0KXRwcz98bWFpbHRvfHRlbHxjYWxsdG98Y2lkfHhtcHApOnxbXmEtel18W2EteisuXFwtXSsoPzpbXmEteisuXFwtOl18JCkpL2kgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICApO1xuICB2YXIgSVNfU0NSSVBUX09SX0RBVEEgPSBzZWFsKC9eKD86XFx3K3NjcmlwdHxkYXRhKTovaSk7XG4gIHZhciBBVFRSX1dISVRFU1BBQ0UgPSBzZWFsKC9bXFx1MDAwMC1cXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUxODBFXFx1MjAwMC1cXHUyMDI5XFx1MjA1RlxcdTMwMDBdL2cgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb250cm9sLXJlZ2V4XG4gICk7XG5cbiAgdmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG4gIGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheSQxKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbiAgdmFyIGdldEdsb2JhbCA9IGZ1bmN0aW9uIGdldEdsb2JhbCgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogd2luZG93O1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbm8tb3AgcG9saWN5IGZvciBpbnRlcm5hbCB1c2Ugb25seS5cbiAgICogRG9uJ3QgZXhwb3J0IHRoaXMgZnVuY3Rpb24gb3V0c2lkZSB0aGlzIG1vZHVsZSFcbiAgICogQHBhcmFtIHs/VHJ1c3RlZFR5cGVQb2xpY3lGYWN0b3J5fSB0cnVzdGVkVHlwZXMgVGhlIHBvbGljeSBmYWN0b3J5LlxuICAgKiBAcGFyYW0ge0RvY3VtZW50fSBkb2N1bWVudCBUaGUgZG9jdW1lbnQgb2JqZWN0ICh0byBkZXRlcm1pbmUgcG9saWN5IG5hbWUgc3VmZml4KVxuICAgKiBAcmV0dXJuIHs/VHJ1c3RlZFR5cGVQb2xpY3l9IFRoZSBwb2xpY3kgY3JlYXRlZCAob3IgbnVsbCwgaWYgVHJ1c3RlZCBUeXBlc1xuICAgKiBhcmUgbm90IHN1cHBvcnRlZCkuXG4gICAqL1xuICB2YXIgX2NyZWF0ZVRydXN0ZWRUeXBlc1BvbGljeSA9IGZ1bmN0aW9uIF9jcmVhdGVUcnVzdGVkVHlwZXNQb2xpY3kodHJ1c3RlZFR5cGVzLCBkb2N1bWVudCkge1xuICAgIGlmICgodHlwZW9mIHRydXN0ZWRUeXBlcyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodHJ1c3RlZFR5cGVzKSkgIT09ICdvYmplY3QnIHx8IHR5cGVvZiB0cnVzdGVkVHlwZXMuY3JlYXRlUG9saWN5ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBBbGxvdyB0aGUgY2FsbGVycyB0byBjb250cm9sIHRoZSB1bmlxdWUgcG9saWN5IG5hbWVcbiAgICAvLyBieSBhZGRpbmcgYSBkYXRhLXR0LXBvbGljeS1zdWZmaXggdG8gdGhlIHNjcmlwdCBlbGVtZW50IHdpdGggdGhlIERPTVB1cmlmeS5cbiAgICAvLyBQb2xpY3kgY3JlYXRpb24gd2l0aCBkdXBsaWNhdGUgbmFtZXMgdGhyb3dzIGluIFRydXN0ZWQgVHlwZXMuXG4gICAgdmFyIHN1ZmZpeCA9IG51bGw7XG4gICAgdmFyIEFUVFJfTkFNRSA9ICdkYXRhLXR0LXBvbGljeS1zdWZmaXgnO1xuICAgIGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuaGFzQXR0cmlidXRlKEFUVFJfTkFNRSkpIHtcbiAgICAgIHN1ZmZpeCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuZ2V0QXR0cmlidXRlKEFUVFJfTkFNRSk7XG4gICAgfVxuXG4gICAgdmFyIHBvbGljeU5hbWUgPSAnZG9tcHVyaWZ5JyArIChzdWZmaXggPyAnIycgKyBzdWZmaXggOiAnJyk7XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3kocG9saWN5TmFtZSwge1xuICAgICAgICBjcmVhdGVIVE1MOiBmdW5jdGlvbiBjcmVhdGVIVE1MKGh0bWwkJDEpIHtcbiAgICAgICAgICByZXR1cm4gaHRtbCQkMTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgLy8gUG9saWN5IGNyZWF0aW9uIGZhaWxlZCAobW9zdCBsaWtlbHkgYW5vdGhlciBET01QdXJpZnkgc2NyaXB0IGhhc1xuICAgICAgLy8gYWxyZWFkeSBydW4pLiBTa2lwIGNyZWF0aW5nIHRoZSBwb2xpY3ksIGFzIHRoaXMgd2lsbCBvbmx5IGNhdXNlIGVycm9yc1xuICAgICAgLy8gaWYgVFQgYXJlIGVuZm9yY2VkLlxuICAgICAgY29uc29sZS53YXJuKCdUcnVzdGVkVHlwZXMgcG9saWN5ICcgKyBwb2xpY3lOYW1lICsgJyBjb3VsZCBub3QgYmUgY3JlYXRlZC4nKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVET01QdXJpZnkoKSB7XG4gICAgdmFyIHdpbmRvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZ2V0R2xvYmFsKCk7XG5cbiAgICB2YXIgRE9NUHVyaWZ5ID0gZnVuY3Rpb24gRE9NUHVyaWZ5KHJvb3QpIHtcbiAgICAgIHJldHVybiBjcmVhdGVET01QdXJpZnkocm9vdCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFZlcnNpb24gbGFiZWwsIGV4cG9zZWQgZm9yIGVhc2llciBjaGVja3NcbiAgICAgKiBpZiBET01QdXJpZnkgaXMgdXAgdG8gZGF0ZSBvciBub3RcbiAgICAgKi9cbiAgICBET01QdXJpZnkudmVyc2lvbiA9ICcyLjMuNSc7XG5cbiAgICAvKipcbiAgICAgKiBBcnJheSBvZiBlbGVtZW50cyB0aGF0IERPTVB1cmlmeSByZW1vdmVkIGR1cmluZyBzYW5pdGF0aW9uLlxuICAgICAqIEVtcHR5IGlmIG5vdGhpbmcgd2FzIHJlbW92ZWQuXG4gICAgICovXG4gICAgRE9NUHVyaWZ5LnJlbW92ZWQgPSBbXTtcblxuICAgIGlmICghd2luZG93IHx8ICF3aW5kb3cuZG9jdW1lbnQgfHwgd2luZG93LmRvY3VtZW50Lm5vZGVUeXBlICE9PSA5KSB7XG4gICAgICAvLyBOb3QgcnVubmluZyBpbiBhIGJyb3dzZXIsIHByb3ZpZGUgYSBmYWN0b3J5IGZ1bmN0aW9uXG4gICAgICAvLyBzbyB0aGF0IHlvdSBjYW4gcGFzcyB5b3VyIG93biBXaW5kb3dcbiAgICAgIERPTVB1cmlmeS5pc1N1cHBvcnRlZCA9IGZhbHNlO1xuXG4gICAgICByZXR1cm4gRE9NUHVyaWZ5O1xuICAgIH1cblxuICAgIHZhciBvcmlnaW5hbERvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuXG4gICAgdmFyIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuICAgIHZhciBEb2N1bWVudEZyYWdtZW50ID0gd2luZG93LkRvY3VtZW50RnJhZ21lbnQsXG4gICAgICAgIEhUTUxUZW1wbGF0ZUVsZW1lbnQgPSB3aW5kb3cuSFRNTFRlbXBsYXRlRWxlbWVudCxcbiAgICAgICAgTm9kZSA9IHdpbmRvdy5Ob2RlLFxuICAgICAgICBFbGVtZW50ID0gd2luZG93LkVsZW1lbnQsXG4gICAgICAgIE5vZGVGaWx0ZXIgPSB3aW5kb3cuTm9kZUZpbHRlcixcbiAgICAgICAgX3dpbmRvdyROYW1lZE5vZGVNYXAgPSB3aW5kb3cuTmFtZWROb2RlTWFwLFxuICAgICAgICBOYW1lZE5vZGVNYXAgPSBfd2luZG93JE5hbWVkTm9kZU1hcCA9PT0gdW5kZWZpbmVkID8gd2luZG93Lk5hbWVkTm9kZU1hcCB8fCB3aW5kb3cuTW96TmFtZWRBdHRyTWFwIDogX3dpbmRvdyROYW1lZE5vZGVNYXAsXG4gICAgICAgIEhUTUxGb3JtRWxlbWVudCA9IHdpbmRvdy5IVE1MRm9ybUVsZW1lbnQsXG4gICAgICAgIERPTVBhcnNlciA9IHdpbmRvdy5ET01QYXJzZXIsXG4gICAgICAgIHRydXN0ZWRUeXBlcyA9IHdpbmRvdy50cnVzdGVkVHlwZXM7XG5cblxuICAgIHZhciBFbGVtZW50UHJvdG90eXBlID0gRWxlbWVudC5wcm90b3R5cGU7XG5cbiAgICB2YXIgY2xvbmVOb2RlID0gbG9va3VwR2V0dGVyKEVsZW1lbnRQcm90b3R5cGUsICdjbG9uZU5vZGUnKTtcbiAgICB2YXIgZ2V0TmV4dFNpYmxpbmcgPSBsb29rdXBHZXR0ZXIoRWxlbWVudFByb3RvdHlwZSwgJ25leHRTaWJsaW5nJyk7XG4gICAgdmFyIGdldENoaWxkTm9kZXMgPSBsb29rdXBHZXR0ZXIoRWxlbWVudFByb3RvdHlwZSwgJ2NoaWxkTm9kZXMnKTtcbiAgICB2YXIgZ2V0UGFyZW50Tm9kZSA9IGxvb2t1cEdldHRlcihFbGVtZW50UHJvdG90eXBlLCAncGFyZW50Tm9kZScpO1xuXG4gICAgLy8gQXMgcGVyIGlzc3VlICM0NywgdGhlIHdlYi1jb21wb25lbnRzIHJlZ2lzdHJ5IGlzIGluaGVyaXRlZCBieSBhXG4gICAgLy8gbmV3IGRvY3VtZW50IGNyZWF0ZWQgdmlhIGNyZWF0ZUhUTUxEb2N1bWVudC4gQXMgcGVyIHRoZSBzcGVjXG4gICAgLy8gKGh0dHA6Ly93M2MuZ2l0aHViLmlvL3dlYmNvbXBvbmVudHMvc3BlYy9jdXN0b20vI2NyZWF0aW5nLWFuZC1wYXNzaW5nLXJlZ2lzdHJpZXMpXG4gICAgLy8gYSBuZXcgZW1wdHkgcmVnaXN0cnkgaXMgdXNlZCB3aGVuIGNyZWF0aW5nIGEgdGVtcGxhdGUgY29udGVudHMgb3duZXJcbiAgICAvLyBkb2N1bWVudCwgc28gd2UgdXNlIHRoYXQgYXMgb3VyIHBhcmVudCBkb2N1bWVudCB0byBlbnN1cmUgbm90aGluZ1xuICAgIC8vIGlzIGluaGVyaXRlZC5cbiAgICBpZiAodHlwZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgICBpZiAodGVtcGxhdGUuY29udGVudCAmJiB0ZW1wbGF0ZS5jb250ZW50Lm93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgZG9jdW1lbnQgPSB0ZW1wbGF0ZS5jb250ZW50Lm93bmVyRG9jdW1lbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHRydXN0ZWRUeXBlc1BvbGljeSA9IF9jcmVhdGVUcnVzdGVkVHlwZXNQb2xpY3kodHJ1c3RlZFR5cGVzLCBvcmlnaW5hbERvY3VtZW50KTtcbiAgICB2YXIgZW1wdHlIVE1MID0gdHJ1c3RlZFR5cGVzUG9saWN5ID8gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwoJycpIDogJyc7XG5cbiAgICB2YXIgX2RvY3VtZW50ID0gZG9jdW1lbnQsXG4gICAgICAgIGltcGxlbWVudGF0aW9uID0gX2RvY3VtZW50LmltcGxlbWVudGF0aW9uLFxuICAgICAgICBjcmVhdGVOb2RlSXRlcmF0b3IgPSBfZG9jdW1lbnQuY3JlYXRlTm9kZUl0ZXJhdG9yLFxuICAgICAgICBjcmVhdGVEb2N1bWVudEZyYWdtZW50ID0gX2RvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQsXG4gICAgICAgIGdldEVsZW1lbnRzQnlUYWdOYW1lID0gX2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lO1xuICAgIHZhciBpbXBvcnROb2RlID0gb3JpZ2luYWxEb2N1bWVudC5pbXBvcnROb2RlO1xuXG5cbiAgICB2YXIgZG9jdW1lbnRNb2RlID0ge307XG4gICAgdHJ5IHtcbiAgICAgIGRvY3VtZW50TW9kZSA9IGNsb25lKGRvY3VtZW50KS5kb2N1bWVudE1vZGUgPyBkb2N1bWVudC5kb2N1bWVudE1vZGUgOiB7fTtcbiAgICB9IGNhdGNoIChfKSB7fVxuXG4gICAgdmFyIGhvb2tzID0ge307XG5cbiAgICAvKipcbiAgICAgKiBFeHBvc2Ugd2hldGhlciB0aGlzIGJyb3dzZXIgc3VwcG9ydHMgcnVubmluZyB0aGUgZnVsbCBET01QdXJpZnkuXG4gICAgICovXG4gICAgRE9NUHVyaWZ5LmlzU3VwcG9ydGVkID0gdHlwZW9mIGdldFBhcmVudE5vZGUgPT09ICdmdW5jdGlvbicgJiYgaW1wbGVtZW50YXRpb24gJiYgdHlwZW9mIGltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnRNb2RlICE9PSA5O1xuXG4gICAgdmFyIE1VU1RBQ0hFX0VYUFIkJDEgPSBNVVNUQUNIRV9FWFBSLFxuICAgICAgICBFUkJfRVhQUiQkMSA9IEVSQl9FWFBSLFxuICAgICAgICBEQVRBX0FUVFIkJDEgPSBEQVRBX0FUVFIsXG4gICAgICAgIEFSSUFfQVRUUiQkMSA9IEFSSUFfQVRUUixcbiAgICAgICAgSVNfU0NSSVBUX09SX0RBVEEkJDEgPSBJU19TQ1JJUFRfT1JfREFUQSxcbiAgICAgICAgQVRUUl9XSElURVNQQUNFJCQxID0gQVRUUl9XSElURVNQQUNFO1xuICAgIHZhciBJU19BTExPV0VEX1VSSSQkMSA9IElTX0FMTE9XRURfVVJJO1xuXG4gICAgLyoqXG4gICAgICogV2UgY29uc2lkZXIgdGhlIGVsZW1lbnRzIGFuZCBhdHRyaWJ1dGVzIGJlbG93IHRvIGJlIHNhZmUuIElkZWFsbHlcbiAgICAgKiBkb24ndCBhZGQgYW55IG5ldyBvbmVzIGJ1dCBmZWVsIGZyZWUgdG8gcmVtb3ZlIHVud2FudGVkIG9uZXMuXG4gICAgICovXG5cbiAgICAvKiBhbGxvd2VkIGVsZW1lbnQgbmFtZXMgKi9cblxuICAgIHZhciBBTExPV0VEX1RBR1MgPSBudWxsO1xuICAgIHZhciBERUZBVUxUX0FMTE9XRURfVEFHUyA9IGFkZFRvU2V0KHt9LCBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5JDEoaHRtbCksIF90b0NvbnN1bWFibGVBcnJheSQxKHN2ZyksIF90b0NvbnN1bWFibGVBcnJheSQxKHN2Z0ZpbHRlcnMpLCBfdG9Db25zdW1hYmxlQXJyYXkkMShtYXRoTWwpLCBfdG9Db25zdW1hYmxlQXJyYXkkMSh0ZXh0KSkpO1xuXG4gICAgLyogQWxsb3dlZCBhdHRyaWJ1dGUgbmFtZXMgKi9cbiAgICB2YXIgQUxMT1dFRF9BVFRSID0gbnVsbDtcbiAgICB2YXIgREVGQVVMVF9BTExPV0VEX0FUVFIgPSBhZGRUb1NldCh7fSwgW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheSQxKGh0bWwkMSksIF90b0NvbnN1bWFibGVBcnJheSQxKHN2ZyQxKSwgX3RvQ29uc3VtYWJsZUFycmF5JDEobWF0aE1sJDEpLCBfdG9Db25zdW1hYmxlQXJyYXkkMSh4bWwpKSk7XG5cbiAgICAvKlxuICAgICAqIENvbmZpZ3VyZSBob3cgRE9NUFVyaWZ5IHNob3VsZCBoYW5kbGUgY3VzdG9tIGVsZW1lbnRzIGFuZCB0aGVpciBhdHRyaWJ1dGVzIGFzIHdlbGwgYXMgY3VzdG9taXplZCBidWlsdC1pbiBlbGVtZW50cy5cbiAgICAgKiBAcHJvcGVydHkge1JlZ0V4cHxGdW5jdGlvbnxudWxsfSB0YWdOYW1lQ2hlY2sgb25lIG9mIFtudWxsLCByZWdleFBhdHRlcm4sIHByZWRpY2F0ZV0uIERlZmF1bHQ6IGBudWxsYCAoZGlzYWxsb3cgYW55IGN1c3RvbSBlbGVtZW50cylcbiAgICAgKiBAcHJvcGVydHkge1JlZ0V4cHxGdW5jdGlvbnxudWxsfSBhdHRyaWJ1dGVOYW1lQ2hlY2sgb25lIG9mIFtudWxsLCByZWdleFBhdHRlcm4sIHByZWRpY2F0ZV0uIERlZmF1bHQ6IGBudWxsYCAoZGlzYWxsb3cgYW55IGF0dHJpYnV0ZXMgbm90IG9uIHRoZSBhbGxvdyBsaXN0KVxuICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzIGFsbG93IGN1c3RvbSBlbGVtZW50cyBkZXJpdmVkIGZyb20gYnVpbHQtaW5zIGlmIHRoZXkgcGFzcyBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2suIERlZmF1bHQ6IGBmYWxzZWAuXG4gICAgICovXG4gICAgdmFyIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HID0gT2JqZWN0LnNlYWwoT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgICB0YWdOYW1lQ2hlY2s6IHtcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBudWxsXG4gICAgICB9LFxuICAgICAgYXR0cmlidXRlTmFtZUNoZWNrOiB7XG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIGFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50czoge1xuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9XG4gICAgfSkpO1xuXG4gICAgLyogRXhwbGljaXRseSBmb3JiaWRkZW4gdGFncyAob3ZlcnJpZGVzIEFMTE9XRURfVEFHUy9BRERfVEFHUykgKi9cbiAgICB2YXIgRk9SQklEX1RBR1MgPSBudWxsO1xuXG4gICAgLyogRXhwbGljaXRseSBmb3JiaWRkZW4gYXR0cmlidXRlcyAob3ZlcnJpZGVzIEFMTE9XRURfQVRUUi9BRERfQVRUUikgKi9cbiAgICB2YXIgRk9SQklEX0FUVFIgPSBudWxsO1xuXG4gICAgLyogRGVjaWRlIGlmIEFSSUEgYXR0cmlidXRlcyBhcmUgb2theSAqL1xuICAgIHZhciBBTExPV19BUklBX0FUVFIgPSB0cnVlO1xuXG4gICAgLyogRGVjaWRlIGlmIGN1c3RvbSBkYXRhIGF0dHJpYnV0ZXMgYXJlIG9rYXkgKi9cbiAgICB2YXIgQUxMT1dfREFUQV9BVFRSID0gdHJ1ZTtcblxuICAgIC8qIERlY2lkZSBpZiB1bmtub3duIHByb3RvY29scyBhcmUgb2theSAqL1xuICAgIHZhciBBTExPV19VTktOT1dOX1BST1RPQ09MUyA9IGZhbHNlO1xuXG4gICAgLyogT3V0cHV0IHNob3VsZCBiZSBzYWZlIGZvciBjb21tb24gdGVtcGxhdGUgZW5naW5lcy5cbiAgICAgKiBUaGlzIG1lYW5zLCBET01QdXJpZnkgcmVtb3ZlcyBkYXRhIGF0dHJpYnV0ZXMsIG11c3RhY2hlcyBhbmQgRVJCXG4gICAgICovXG4gICAgdmFyIFNBRkVfRk9SX1RFTVBMQVRFUyA9IGZhbHNlO1xuXG4gICAgLyogRGVjaWRlIGlmIGRvY3VtZW50IHdpdGggPGh0bWw+Li4uIHNob3VsZCBiZSByZXR1cm5lZCAqL1xuICAgIHZhciBXSE9MRV9ET0NVTUVOVCA9IGZhbHNlO1xuXG4gICAgLyogVHJhY2sgd2hldGhlciBjb25maWcgaXMgYWxyZWFkeSBzZXQgb24gdGhpcyBpbnN0YW5jZSBvZiBET01QdXJpZnkuICovXG4gICAgdmFyIFNFVF9DT05GSUcgPSBmYWxzZTtcblxuICAgIC8qIERlY2lkZSBpZiBhbGwgZWxlbWVudHMgKGUuZy4gc3R5bGUsIHNjcmlwdCkgbXVzdCBiZSBjaGlsZHJlbiBvZlxuICAgICAqIGRvY3VtZW50LmJvZHkuIEJ5IGRlZmF1bHQsIGJyb3dzZXJzIG1pZ2h0IG1vdmUgdGhlbSB0byBkb2N1bWVudC5oZWFkICovXG4gICAgdmFyIEZPUkNFX0JPRFkgPSBmYWxzZTtcblxuICAgIC8qIERlY2lkZSBpZiBhIERPTSBgSFRNTEJvZHlFbGVtZW50YCBzaG91bGQgYmUgcmV0dXJuZWQsIGluc3RlYWQgb2YgYSBodG1sXG4gICAgICogc3RyaW5nIChvciBhIFRydXN0ZWRIVE1MIG9iamVjdCBpZiBUcnVzdGVkIFR5cGVzIGFyZSBzdXBwb3J0ZWQpLlxuICAgICAqIElmIGBXSE9MRV9ET0NVTUVOVGAgaXMgZW5hYmxlZCBhIGBIVE1MSHRtbEVsZW1lbnRgIHdpbGwgYmUgcmV0dXJuZWQgaW5zdGVhZFxuICAgICAqL1xuICAgIHZhciBSRVRVUk5fRE9NID0gZmFsc2U7XG5cbiAgICAvKiBEZWNpZGUgaWYgYSBET00gYERvY3VtZW50RnJhZ21lbnRgIHNob3VsZCBiZSByZXR1cm5lZCwgaW5zdGVhZCBvZiBhIGh0bWxcbiAgICAgKiBzdHJpbmcgIChvciBhIFRydXN0ZWRIVE1MIG9iamVjdCBpZiBUcnVzdGVkIFR5cGVzIGFyZSBzdXBwb3J0ZWQpICovXG4gICAgdmFyIFJFVFVSTl9ET01fRlJBR01FTlQgPSBmYWxzZTtcblxuICAgIC8qIFRyeSB0byByZXR1cm4gYSBUcnVzdGVkIFR5cGUgb2JqZWN0IGluc3RlYWQgb2YgYSBzdHJpbmcsIHJldHVybiBhIHN0cmluZyBpblxuICAgICAqIGNhc2UgVHJ1c3RlZCBUeXBlcyBhcmUgbm90IHN1cHBvcnRlZCAgKi9cbiAgICB2YXIgUkVUVVJOX1RSVVNURURfVFlQRSA9IGZhbHNlO1xuXG4gICAgLyogT3V0cHV0IHNob3VsZCBiZSBmcmVlIGZyb20gRE9NIGNsb2JiZXJpbmcgYXR0YWNrcz8gKi9cbiAgICB2YXIgU0FOSVRJWkVfRE9NID0gdHJ1ZTtcblxuICAgIC8qIEtlZXAgZWxlbWVudCBjb250ZW50IHdoZW4gcmVtb3ZpbmcgZWxlbWVudD8gKi9cbiAgICB2YXIgS0VFUF9DT05URU5UID0gdHJ1ZTtcblxuICAgIC8qIElmIGEgYE5vZGVgIGlzIHBhc3NlZCB0byBzYW5pdGl6ZSgpLCB0aGVuIHBlcmZvcm1zIHNhbml0aXphdGlvbiBpbi1wbGFjZSBpbnN0ZWFkXG4gICAgICogb2YgaW1wb3J0aW5nIGl0IGludG8gYSBuZXcgRG9jdW1lbnQgYW5kIHJldHVybmluZyBhIHNhbml0aXplZCBjb3B5ICovXG4gICAgdmFyIElOX1BMQUNFID0gZmFsc2U7XG5cbiAgICAvKiBBbGxvdyB1c2FnZSBvZiBwcm9maWxlcyBsaWtlIGh0bWwsIHN2ZyBhbmQgbWF0aE1sICovXG4gICAgdmFyIFVTRV9QUk9GSUxFUyA9IHt9O1xuXG4gICAgLyogVGFncyB0byBpZ25vcmUgY29udGVudCBvZiB3aGVuIEtFRVBfQ09OVEVOVCBpcyB0cnVlICovXG4gICAgdmFyIEZPUkJJRF9DT05URU5UUyA9IG51bGw7XG4gICAgdmFyIERFRkFVTFRfRk9SQklEX0NPTlRFTlRTID0gYWRkVG9TZXQoe30sIFsnYW5ub3RhdGlvbi14bWwnLCAnYXVkaW8nLCAnY29sZ3JvdXAnLCAnZGVzYycsICdmb3JlaWdub2JqZWN0JywgJ2hlYWQnLCAnaWZyYW1lJywgJ21hdGgnLCAnbWknLCAnbW4nLCAnbW8nLCAnbXMnLCAnbXRleHQnLCAnbm9lbWJlZCcsICdub2ZyYW1lcycsICdub3NjcmlwdCcsICdwbGFpbnRleHQnLCAnc2NyaXB0JywgJ3N0eWxlJywgJ3N2ZycsICd0ZW1wbGF0ZScsICd0aGVhZCcsICd0aXRsZScsICd2aWRlbycsICd4bXAnXSk7XG5cbiAgICAvKiBUYWdzIHRoYXQgYXJlIHNhZmUgZm9yIGRhdGE6IFVSSXMgKi9cbiAgICB2YXIgREFUQV9VUklfVEFHUyA9IG51bGw7XG4gICAgdmFyIERFRkFVTFRfREFUQV9VUklfVEFHUyA9IGFkZFRvU2V0KHt9LCBbJ2F1ZGlvJywgJ3ZpZGVvJywgJ2ltZycsICdzb3VyY2UnLCAnaW1hZ2UnLCAndHJhY2snXSk7XG5cbiAgICAvKiBBdHRyaWJ1dGVzIHNhZmUgZm9yIHZhbHVlcyBsaWtlIFwiamF2YXNjcmlwdDpcIiAqL1xuICAgIHZhciBVUklfU0FGRV9BVFRSSUJVVEVTID0gbnVsbDtcbiAgICB2YXIgREVGQVVMVF9VUklfU0FGRV9BVFRSSUJVVEVTID0gYWRkVG9TZXQoe30sIFsnYWx0JywgJ2NsYXNzJywgJ2ZvcicsICdpZCcsICdsYWJlbCcsICduYW1lJywgJ3BhdHRlcm4nLCAncGxhY2Vob2xkZXInLCAncm9sZScsICdzdW1tYXJ5JywgJ3RpdGxlJywgJ3ZhbHVlJywgJ3N0eWxlJywgJ3htbG5zJ10pO1xuXG4gICAgdmFyIE1BVEhNTF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTCc7XG4gICAgdmFyIFNWR19OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuICAgIHZhciBIVE1MX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcbiAgICAvKiBEb2N1bWVudCBuYW1lc3BhY2UgKi9cbiAgICB2YXIgTkFNRVNQQUNFID0gSFRNTF9OQU1FU1BBQ0U7XG4gICAgdmFyIElTX0VNUFRZX0lOUFVUID0gZmFsc2U7XG5cbiAgICAvKiBQYXJzaW5nIG9mIHN0cmljdCBYSFRNTCBkb2N1bWVudHMgKi9cbiAgICB2YXIgUEFSU0VSX01FRElBX1RZUEUgPSB2b2lkIDA7XG4gICAgdmFyIFNVUFBPUlRFRF9QQVJTRVJfTUVESUFfVFlQRVMgPSBbJ2FwcGxpY2F0aW9uL3hodG1sK3htbCcsICd0ZXh0L2h0bWwnXTtcbiAgICB2YXIgREVGQVVMVF9QQVJTRVJfTUVESUFfVFlQRSA9ICd0ZXh0L2h0bWwnO1xuICAgIHZhciB0cmFuc2Zvcm1DYXNlRnVuYyA9IHZvaWQgMDtcblxuICAgIC8qIEtlZXAgYSByZWZlcmVuY2UgdG8gY29uZmlnIHRvIHBhc3MgdG8gaG9va3MgKi9cbiAgICB2YXIgQ09ORklHID0gbnVsbDtcblxuICAgIC8qIElkZWFsbHksIGRvIG5vdCB0b3VjaCBhbnl0aGluZyBiZWxvdyB0aGlzIGxpbmUgKi9cbiAgICAvKiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICovXG5cbiAgICB2YXIgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgICB2YXIgaXNSZWdleE9yRnVuY3Rpb24gPSBmdW5jdGlvbiBpc1JlZ2V4T3JGdW5jdGlvbih0ZXN0VmFsdWUpIHtcbiAgICAgIHJldHVybiB0ZXN0VmFsdWUgaW5zdGFuY2VvZiBSZWdFeHAgfHwgdGVzdFZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb247XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9wYXJzZUNvbmZpZ1xuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBjZmcgb3B0aW9uYWwgY29uZmlnIGxpdGVyYWxcbiAgICAgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuICAgIHZhciBfcGFyc2VDb25maWcgPSBmdW5jdGlvbiBfcGFyc2VDb25maWcoY2ZnKSB7XG4gICAgICBpZiAoQ09ORklHICYmIENPTkZJRyA9PT0gY2ZnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLyogU2hpZWxkIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGZyb20gdGFtcGVyaW5nICovXG4gICAgICBpZiAoIWNmZyB8fCAodHlwZW9mIGNmZyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoY2ZnKSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNmZyA9IHt9O1xuICAgICAgfVxuXG4gICAgICAvKiBTaGllbGQgY29uZmlndXJhdGlvbiBvYmplY3QgZnJvbSBwcm90b3R5cGUgcG9sbHV0aW9uICovXG4gICAgICBjZmcgPSBjbG9uZShjZmcpO1xuXG4gICAgICAvKiBTZXQgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzICovXG4gICAgICBBTExPV0VEX1RBR1MgPSAnQUxMT1dFRF9UQUdTJyBpbiBjZmcgPyBhZGRUb1NldCh7fSwgY2ZnLkFMTE9XRURfVEFHUykgOiBERUZBVUxUX0FMTE9XRURfVEFHUztcbiAgICAgIEFMTE9XRURfQVRUUiA9ICdBTExPV0VEX0FUVFInIGluIGNmZyA/IGFkZFRvU2V0KHt9LCBjZmcuQUxMT1dFRF9BVFRSKSA6IERFRkFVTFRfQUxMT1dFRF9BVFRSO1xuICAgICAgVVJJX1NBRkVfQVRUUklCVVRFUyA9ICdBRERfVVJJX1NBRkVfQVRUUicgaW4gY2ZnID8gYWRkVG9TZXQoY2xvbmUoREVGQVVMVF9VUklfU0FGRV9BVFRSSUJVVEVTKSwgY2ZnLkFERF9VUklfU0FGRV9BVFRSKSA6IERFRkFVTFRfVVJJX1NBRkVfQVRUUklCVVRFUztcbiAgICAgIERBVEFfVVJJX1RBR1MgPSAnQUREX0RBVEFfVVJJX1RBR1MnIGluIGNmZyA/IGFkZFRvU2V0KGNsb25lKERFRkFVTFRfREFUQV9VUklfVEFHUyksIGNmZy5BRERfREFUQV9VUklfVEFHUykgOiBERUZBVUxUX0RBVEFfVVJJX1RBR1M7XG4gICAgICBGT1JCSURfQ09OVEVOVFMgPSAnRk9SQklEX0NPTlRFTlRTJyBpbiBjZmcgPyBhZGRUb1NldCh7fSwgY2ZnLkZPUkJJRF9DT05URU5UUykgOiBERUZBVUxUX0ZPUkJJRF9DT05URU5UUztcbiAgICAgIEZPUkJJRF9UQUdTID0gJ0ZPUkJJRF9UQUdTJyBpbiBjZmcgPyBhZGRUb1NldCh7fSwgY2ZnLkZPUkJJRF9UQUdTKSA6IHt9O1xuICAgICAgRk9SQklEX0FUVFIgPSAnRk9SQklEX0FUVFInIGluIGNmZyA/IGFkZFRvU2V0KHt9LCBjZmcuRk9SQklEX0FUVFIpIDoge307XG4gICAgICBVU0VfUFJPRklMRVMgPSAnVVNFX1BST0ZJTEVTJyBpbiBjZmcgPyBjZmcuVVNFX1BST0ZJTEVTIDogZmFsc2U7XG4gICAgICBBTExPV19BUklBX0FUVFIgPSBjZmcuQUxMT1dfQVJJQV9BVFRSICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXG4gICAgICBBTExPV19EQVRBX0FUVFIgPSBjZmcuQUxMT1dfREFUQV9BVFRSICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXG4gICAgICBBTExPV19VTktOT1dOX1BST1RPQ09MUyA9IGNmZy5BTExPV19VTktOT1dOX1BST1RPQ09MUyB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgICAgU0FGRV9GT1JfVEVNUExBVEVTID0gY2ZnLlNBRkVfRk9SX1RFTVBMQVRFUyB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgICAgV0hPTEVfRE9DVU1FTlQgPSBjZmcuV0hPTEVfRE9DVU1FTlQgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICAgIFJFVFVSTl9ET00gPSBjZmcuUkVUVVJOX0RPTSB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgICAgUkVUVVJOX0RPTV9GUkFHTUVOVCA9IGNmZy5SRVRVUk5fRE9NX0ZSQUdNRU5UIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgICBSRVRVUk5fVFJVU1RFRF9UWVBFID0gY2ZnLlJFVFVSTl9UUlVTVEVEX1RZUEUgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICAgIEZPUkNFX0JPRFkgPSBjZmcuRk9SQ0VfQk9EWSB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgICAgU0FOSVRJWkVfRE9NID0gY2ZnLlNBTklUSVpFX0RPTSAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuICAgICAgS0VFUF9DT05URU5UID0gY2ZnLktFRVBfQ09OVEVOVCAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuICAgICAgSU5fUExBQ0UgPSBjZmcuSU5fUExBQ0UgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICAgIElTX0FMTE9XRURfVVJJJCQxID0gY2ZnLkFMTE9XRURfVVJJX1JFR0VYUCB8fCBJU19BTExPV0VEX1VSSSQkMTtcbiAgICAgIE5BTUVTUEFDRSA9IGNmZy5OQU1FU1BBQ0UgfHwgSFRNTF9OQU1FU1BBQ0U7XG4gICAgICBpZiAoY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HICYmIGlzUmVnZXhPckZ1bmN0aW9uKGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2spKSB7XG4gICAgICAgIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayA9IGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2s7XG4gICAgICB9XG5cbiAgICAgIGlmIChjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcgJiYgaXNSZWdleE9yRnVuY3Rpb24oY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjaykpIHtcbiAgICAgICAgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrID0gY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjaztcbiAgICAgIH1cblxuICAgICAgaWYgKGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORyAmJiB0eXBlb2YgY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50cyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50cyA9IGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy5hbGxvd0N1c3RvbWl6ZWRCdWlsdEluRWxlbWVudHM7XG4gICAgICB9XG5cbiAgICAgIFBBUlNFUl9NRURJQV9UWVBFID1cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1pbmNsdWRlc1xuICAgICAgU1VQUE9SVEVEX1BBUlNFUl9NRURJQV9UWVBFUy5pbmRleE9mKGNmZy5QQVJTRVJfTUVESUFfVFlQRSkgPT09IC0xID8gUEFSU0VSX01FRElBX1RZUEUgPSBERUZBVUxUX1BBUlNFUl9NRURJQV9UWVBFIDogUEFSU0VSX01FRElBX1RZUEUgPSBjZmcuUEFSU0VSX01FRElBX1RZUEU7XG5cbiAgICAgIC8vIEhUTUwgdGFncyBhbmQgYXR0cmlidXRlcyBhcmUgbm90IGNhc2Utc2Vuc2l0aXZlLCBjb252ZXJ0aW5nIHRvIGxvd2VyY2FzZS4gS2VlcGluZyBYSFRNTCBhcyBpcy5cbiAgICAgIHRyYW5zZm9ybUNhc2VGdW5jID0gUEFSU0VSX01FRElBX1RZUEUgPT09ICdhcHBsaWNhdGlvbi94aHRtbCt4bWwnID8gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgICB9IDogc3RyaW5nVG9Mb3dlckNhc2U7XG5cbiAgICAgIGlmIChTQUZFX0ZPUl9URU1QTEFURVMpIHtcbiAgICAgICAgQUxMT1dfREFUQV9BVFRSID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChSRVRVUk5fRE9NX0ZSQUdNRU5UKSB7XG4gICAgICAgIFJFVFVSTl9ET00gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBQYXJzZSBwcm9maWxlIGluZm8gKi9cbiAgICAgIGlmIChVU0VfUFJPRklMRVMpIHtcbiAgICAgICAgQUxMT1dFRF9UQUdTID0gYWRkVG9TZXQoe30sIFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkkMSh0ZXh0KSkpO1xuICAgICAgICBBTExPV0VEX0FUVFIgPSBbXTtcbiAgICAgICAgaWYgKFVTRV9QUk9GSUxFUy5odG1sID09PSB0cnVlKSB7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBodG1sKTtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIGh0bWwkMSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVVNFX1BST0ZJTEVTLnN2ZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgc3ZnKTtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIHN2ZyQxKTtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIHhtbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVVNFX1BST0ZJTEVTLnN2Z0ZpbHRlcnMgPT09IHRydWUpIHtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIHN2Z0ZpbHRlcnMpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgc3ZnJDEpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgeG1sKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVU0VfUFJPRklMRVMubWF0aE1sID09PSB0cnVlKSB7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBtYXRoTWwpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgbWF0aE1sJDEpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgeG1sKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiBNZXJnZSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgKi9cbiAgICAgIGlmIChjZmcuQUREX1RBR1MpIHtcbiAgICAgICAgaWYgKEFMTE9XRURfVEFHUyA9PT0gREVGQVVMVF9BTExPV0VEX1RBR1MpIHtcbiAgICAgICAgICBBTExPV0VEX1RBR1MgPSBjbG9uZShBTExPV0VEX1RBR1MpO1xuICAgICAgICB9XG5cbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBjZmcuQUREX1RBR1MpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2ZnLkFERF9BVFRSKSB7XG4gICAgICAgIGlmIChBTExPV0VEX0FUVFIgPT09IERFRkFVTFRfQUxMT1dFRF9BVFRSKSB7XG4gICAgICAgICAgQUxMT1dFRF9BVFRSID0gY2xvbmUoQUxMT1dFRF9BVFRSKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgY2ZnLkFERF9BVFRSKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNmZy5BRERfVVJJX1NBRkVfQVRUUikge1xuICAgICAgICBhZGRUb1NldChVUklfU0FGRV9BVFRSSUJVVEVTLCBjZmcuQUREX1VSSV9TQUZFX0FUVFIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2ZnLkZPUkJJRF9DT05URU5UUykge1xuICAgICAgICBpZiAoRk9SQklEX0NPTlRFTlRTID09PSBERUZBVUxUX0ZPUkJJRF9DT05URU5UUykge1xuICAgICAgICAgIEZPUkJJRF9DT05URU5UUyA9IGNsb25lKEZPUkJJRF9DT05URU5UUyk7XG4gICAgICAgIH1cblxuICAgICAgICBhZGRUb1NldChGT1JCSURfQ09OVEVOVFMsIGNmZy5GT1JCSURfQ09OVEVOVFMpO1xuICAgICAgfVxuXG4gICAgICAvKiBBZGQgI3RleHQgaW4gY2FzZSBLRUVQX0NPTlRFTlQgaXMgc2V0IHRvIHRydWUgKi9cbiAgICAgIGlmIChLRUVQX0NPTlRFTlQpIHtcbiAgICAgICAgQUxMT1dFRF9UQUdTWycjdGV4dCddID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLyogQWRkIGh0bWwsIGhlYWQgYW5kIGJvZHkgdG8gQUxMT1dFRF9UQUdTIGluIGNhc2UgV0hPTEVfRE9DVU1FTlQgaXMgdHJ1ZSAqL1xuICAgICAgaWYgKFdIT0xFX0RPQ1VNRU5UKSB7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgWydodG1sJywgJ2hlYWQnLCAnYm9keSddKTtcbiAgICAgIH1cblxuICAgICAgLyogQWRkIHRib2R5IHRvIEFMTE9XRURfVEFHUyBpbiBjYXNlIHRhYmxlcyBhcmUgcGVybWl0dGVkLCBzZWUgIzI4NiwgIzM2NSAqL1xuICAgICAgaWYgKEFMTE9XRURfVEFHUy50YWJsZSkge1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIFsndGJvZHknXSk7XG4gICAgICAgIGRlbGV0ZSBGT1JCSURfVEFHUy50Ym9keTtcbiAgICAgIH1cblxuICAgICAgLy8gUHJldmVudCBmdXJ0aGVyIG1hbmlwdWxhdGlvbiBvZiBjb25maWd1cmF0aW9uLlxuICAgICAgLy8gTm90IGF2YWlsYWJsZSBpbiBJRTgsIFNhZmFyaSA1LCBldGMuXG4gICAgICBpZiAoZnJlZXplKSB7XG4gICAgICAgIGZyZWV6ZShjZmcpO1xuICAgICAgfVxuXG4gICAgICBDT05GSUcgPSBjZmc7XG4gICAgfTtcblxuICAgIHZhciBNQVRITUxfVEVYVF9JTlRFR1JBVElPTl9QT0lOVFMgPSBhZGRUb1NldCh7fSwgWydtaScsICdtbycsICdtbicsICdtcycsICdtdGV4dCddKTtcblxuICAgIHZhciBIVE1MX0lOVEVHUkFUSU9OX1BPSU5UUyA9IGFkZFRvU2V0KHt9LCBbJ2ZvcmVpZ25vYmplY3QnLCAnZGVzYycsICd0aXRsZScsICdhbm5vdGF0aW9uLXhtbCddKTtcblxuICAgIC8qIEtlZXAgdHJhY2sgb2YgYWxsIHBvc3NpYmxlIFNWRyBhbmQgTWF0aE1MIHRhZ3NcbiAgICAgKiBzbyB0aGF0IHdlIGNhbiBwZXJmb3JtIHRoZSBuYW1lc3BhY2UgY2hlY2tzXG4gICAgICogY29ycmVjdGx5LiAqL1xuICAgIHZhciBBTExfU1ZHX1RBR1MgPSBhZGRUb1NldCh7fSwgc3ZnKTtcbiAgICBhZGRUb1NldChBTExfU1ZHX1RBR1MsIHN2Z0ZpbHRlcnMpO1xuICAgIGFkZFRvU2V0KEFMTF9TVkdfVEFHUywgc3ZnRGlzYWxsb3dlZCk7XG5cbiAgICB2YXIgQUxMX01BVEhNTF9UQUdTID0gYWRkVG9TZXQoe30sIG1hdGhNbCk7XG4gICAgYWRkVG9TZXQoQUxMX01BVEhNTF9UQUdTLCBtYXRoTWxEaXNhbGxvd2VkKTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtFbGVtZW50fSBlbGVtZW50IGEgRE9NIGVsZW1lbnQgd2hvc2UgbmFtZXNwYWNlIGlzIGJlaW5nIGNoZWNrZWRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJuIGZhbHNlIGlmIHRoZSBlbGVtZW50IGhhcyBhXG4gICAgICogIG5hbWVzcGFjZSB0aGF0IGEgc3BlYy1jb21wbGlhbnQgcGFyc2VyIHdvdWxkIG5ldmVyXG4gICAgICogIHJldHVybi4gUmV0dXJuIHRydWUgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIHZhciBfY2hlY2tWYWxpZE5hbWVzcGFjZSA9IGZ1bmN0aW9uIF9jaGVja1ZhbGlkTmFtZXNwYWNlKGVsZW1lbnQpIHtcbiAgICAgIHZhciBwYXJlbnQgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuXG4gICAgICAvLyBJbiBKU0RPTSwgaWYgd2UncmUgaW5zaWRlIHNoYWRvdyBET00sIHRoZW4gcGFyZW50Tm9kZVxuICAgICAgLy8gY2FuIGJlIG51bGwuIFdlIGp1c3Qgc2ltdWxhdGUgcGFyZW50IGluIHRoaXMgY2FzZS5cbiAgICAgIGlmICghcGFyZW50IHx8ICFwYXJlbnQudGFnTmFtZSkge1xuICAgICAgICBwYXJlbnQgPSB7XG4gICAgICAgICAgbmFtZXNwYWNlVVJJOiBIVE1MX05BTUVTUEFDRSxcbiAgICAgICAgICB0YWdOYW1lOiAndGVtcGxhdGUnXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHZhciB0YWdOYW1lID0gc3RyaW5nVG9Mb3dlckNhc2UoZWxlbWVudC50YWdOYW1lKTtcbiAgICAgIHZhciBwYXJlbnRUYWdOYW1lID0gc3RyaW5nVG9Mb3dlckNhc2UocGFyZW50LnRhZ05hbWUpO1xuXG4gICAgICBpZiAoZWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IFNWR19OQU1FU1BBQ0UpIHtcbiAgICAgICAgLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIEhUTUwgbmFtZXNwYWNlIHRvIFNWR1xuICAgICAgICAvLyBpcyB2aWEgPHN2Zz4uIElmIGl0IGhhcHBlbnMgdmlhIGFueSBvdGhlciB0YWcsIHRoZW5cbiAgICAgICAgLy8gaXQgc2hvdWxkIGJlIGtpbGxlZC5cbiAgICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICAgICAgcmV0dXJuIHRhZ05hbWUgPT09ICdzdmcnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIE1hdGhNTCB0byBTVkcgaXMgdmlhXG4gICAgICAgIC8vIHN2ZyBpZiBwYXJlbnQgaXMgZWl0aGVyIDxhbm5vdGF0aW9uLXhtbD4gb3IgTWF0aE1MXG4gICAgICAgIC8vIHRleHQgaW50ZWdyYXRpb24gcG9pbnRzLlxuICAgICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gTUFUSE1MX05BTUVTUEFDRSkge1xuICAgICAgICAgIHJldHVybiB0YWdOYW1lID09PSAnc3ZnJyAmJiAocGFyZW50VGFnTmFtZSA9PT0gJ2Fubm90YXRpb24teG1sJyB8fCBNQVRITUxfVEVYVF9JTlRFR1JBVElPTl9QT0lOVFNbcGFyZW50VGFnTmFtZV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2Ugb25seSBhbGxvdyBlbGVtZW50cyB0aGF0IGFyZSBkZWZpbmVkIGluIFNWR1xuICAgICAgICAvLyBzcGVjLiBBbGwgb3RoZXJzIGFyZSBkaXNhbGxvd2VkIGluIFNWRyBuYW1lc3BhY2UuXG4gICAgICAgIHJldHVybiBCb29sZWFuKEFMTF9TVkdfVEFHU1t0YWdOYW1lXSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50Lm5hbWVzcGFjZVVSSSA9PT0gTUFUSE1MX05BTUVTUEFDRSkge1xuICAgICAgICAvLyBUaGUgb25seSB3YXkgdG8gc3dpdGNoIGZyb20gSFRNTCBuYW1lc3BhY2UgdG8gTWF0aE1MXG4gICAgICAgIC8vIGlzIHZpYSA8bWF0aD4uIElmIGl0IGhhcHBlbnMgdmlhIGFueSBvdGhlciB0YWcsIHRoZW5cbiAgICAgICAgLy8gaXQgc2hvdWxkIGJlIGtpbGxlZC5cbiAgICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICAgICAgcmV0dXJuIHRhZ05hbWUgPT09ICdtYXRoJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSBvbmx5IHdheSB0byBzd2l0Y2ggZnJvbSBTVkcgdG8gTWF0aE1MIGlzIHZpYVxuICAgICAgICAvLyA8bWF0aD4gYW5kIEhUTUwgaW50ZWdyYXRpb24gcG9pbnRzXG4gICAgICAgIGlmIChwYXJlbnQubmFtZXNwYWNlVVJJID09PSBTVkdfTkFNRVNQQUNFKSB7XG4gICAgICAgICAgcmV0dXJuIHRhZ05hbWUgPT09ICdtYXRoJyAmJiBIVE1MX0lOVEVHUkFUSU9OX1BPSU5UU1twYXJlbnRUYWdOYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlIG9ubHkgYWxsb3cgZWxlbWVudHMgdGhhdCBhcmUgZGVmaW5lZCBpbiBNYXRoTUxcbiAgICAgICAgLy8gc3BlYy4gQWxsIG90aGVycyBhcmUgZGlzYWxsb3dlZCBpbiBNYXRoTUwgbmFtZXNwYWNlLlxuICAgICAgICByZXR1cm4gQm9vbGVhbihBTExfTUFUSE1MX1RBR1NbdGFnTmFtZV0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICAgIC8vIFRoZSBvbmx5IHdheSB0byBzd2l0Y2ggZnJvbSBTVkcgdG8gSFRNTCBpcyB2aWFcbiAgICAgICAgLy8gSFRNTCBpbnRlZ3JhdGlvbiBwb2ludHMsIGFuZCBmcm9tIE1hdGhNTCB0byBIVE1MXG4gICAgICAgIC8vIGlzIHZpYSBNYXRoTUwgdGV4dCBpbnRlZ3JhdGlvbiBwb2ludHNcbiAgICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IFNWR19OQU1FU1BBQ0UgJiYgIUhUTUxfSU5URUdSQVRJT05fUE9JTlRTW3BhcmVudFRhZ05hbWVdKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IE1BVEhNTF9OQU1FU1BBQ0UgJiYgIU1BVEhNTF9URVhUX0lOVEVHUkFUSU9OX1BPSU5UU1twYXJlbnRUYWdOYW1lXSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENlcnRhaW4gZWxlbWVudHMgYXJlIGFsbG93ZWQgaW4gYm90aCBTVkcgYW5kIEhUTUxcbiAgICAgICAgLy8gbmFtZXNwYWNlLiBXZSBuZWVkIHRvIHNwZWNpZnkgdGhlbSBleHBsaWNpdGx5XG4gICAgICAgIC8vIHNvIHRoYXQgdGhleSBkb24ndCBnZXQgZXJyb25vdXNseSBkZWxldGVkIGZyb21cbiAgICAgICAgLy8gSFRNTCBuYW1lc3BhY2UuXG4gICAgICAgIHZhciBjb21tb25TdmdBbmRIVE1MRWxlbWVudHMgPSBhZGRUb1NldCh7fSwgWyd0aXRsZScsICdzdHlsZScsICdmb250JywgJ2EnLCAnc2NyaXB0J10pO1xuXG4gICAgICAgIC8vIFdlIGRpc2FsbG93IHRhZ3MgdGhhdCBhcmUgc3BlY2lmaWMgZm9yIE1hdGhNTFxuICAgICAgICAvLyBvciBTVkcgYW5kIHNob3VsZCBuZXZlciBhcHBlYXIgaW4gSFRNTCBuYW1lc3BhY2VcbiAgICAgICAgcmV0dXJuICFBTExfTUFUSE1MX1RBR1NbdGFnTmFtZV0gJiYgKGNvbW1vblN2Z0FuZEhUTUxFbGVtZW50c1t0YWdOYW1lXSB8fCAhQUxMX1NWR19UQUdTW3RhZ05hbWVdKTtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvZGUgc2hvdWxkIG5ldmVyIHJlYWNoIHRoaXMgcGxhY2UgKHRoaXMgbWVhbnNcbiAgICAgIC8vIHRoYXQgdGhlIGVsZW1lbnQgc29tZWhvdyBnb3QgbmFtZXNwYWNlIHRoYXQgaXMgbm90XG4gICAgICAvLyBIVE1MLCBTVkcgb3IgTWF0aE1MKS4gUmV0dXJuIGZhbHNlIGp1c3QgaW4gY2FzZS5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX2ZvcmNlUmVtb3ZlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOb2RlfSBub2RlIGEgRE9NIG5vZGVcbiAgICAgKi9cbiAgICB2YXIgX2ZvcmNlUmVtb3ZlID0gZnVuY3Rpb24gX2ZvcmNlUmVtb3ZlKG5vZGUpIHtcbiAgICAgIGFycmF5UHVzaChET01QdXJpZnkucmVtb3ZlZCwgeyBlbGVtZW50OiBub2RlIH0pO1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWRvbS1ub2RlLXJlbW92ZVxuICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbm9kZS5vdXRlckhUTUwgPSBlbXB0eUhUTUw7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICBub2RlLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9yZW1vdmVBdHRyaWJ1dGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZSBhbiBBdHRyaWJ1dGUgbmFtZVxuICAgICAqIEBwYXJhbSAge05vZGV9IG5vZGUgYSBET00gbm9kZVxuICAgICAqL1xuICAgIHZhciBfcmVtb3ZlQXR0cmlidXRlID0gZnVuY3Rpb24gX3JlbW92ZUF0dHJpYnV0ZShuYW1lLCBub2RlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhcnJheVB1c2goRE9NUHVyaWZ5LnJlbW92ZWQsIHtcbiAgICAgICAgICBhdHRyaWJ1dGU6IG5vZGUuZ2V0QXR0cmlidXRlTm9kZShuYW1lKSxcbiAgICAgICAgICBmcm9tOiBub2RlXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBhcnJheVB1c2goRE9NUHVyaWZ5LnJlbW92ZWQsIHtcbiAgICAgICAgICBhdHRyaWJ1dGU6IG51bGwsXG4gICAgICAgICAgZnJvbTogbm9kZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cbiAgICAgIC8vIFdlIHZvaWQgYXR0cmlidXRlIHZhbHVlcyBmb3IgdW5yZW1vdmFibGUgXCJpc1wiXCIgYXR0cmlidXRlc1xuICAgICAgaWYgKG5hbWUgPT09ICdpcycgJiYgIUFMTE9XRURfQVRUUltuYW1lXSkge1xuICAgICAgICBpZiAoUkVUVVJOX0RPTSB8fCBSRVRVUk5fRE9NX0ZSQUdNRU5UKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIF9mb3JjZVJlbW92ZShub2RlKTtcbiAgICAgICAgICB9IGNhdGNoIChfKSB7fVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCAnJyk7XG4gICAgICAgICAgfSBjYXRjaCAoXykge31cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBfaW5pdERvY3VtZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGRpcnR5IGEgc3RyaW5nIG9mIGRpcnR5IG1hcmt1cFxuICAgICAqIEByZXR1cm4ge0RvY3VtZW50fSBhIERPTSwgZmlsbGVkIHdpdGggdGhlIGRpcnR5IG1hcmt1cFxuICAgICAqL1xuICAgIHZhciBfaW5pdERvY3VtZW50ID0gZnVuY3Rpb24gX2luaXREb2N1bWVudChkaXJ0eSkge1xuICAgICAgLyogQ3JlYXRlIGEgSFRNTCBkb2N1bWVudCAqL1xuICAgICAgdmFyIGRvYyA9IHZvaWQgMDtcbiAgICAgIHZhciBsZWFkaW5nV2hpdGVzcGFjZSA9IHZvaWQgMDtcblxuICAgICAgaWYgKEZPUkNFX0JPRFkpIHtcbiAgICAgICAgZGlydHkgPSAnPHJlbW92ZT48L3JlbW92ZT4nICsgZGlydHk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBJZiBGT1JDRV9CT0RZIGlzbid0IHVzZWQsIGxlYWRpbmcgd2hpdGVzcGFjZSBuZWVkcyB0byBiZSBwcmVzZXJ2ZWQgbWFudWFsbHkgKi9cbiAgICAgICAgdmFyIG1hdGNoZXMgPSBzdHJpbmdNYXRjaChkaXJ0eSwgL15bXFxyXFxuXFx0IF0rLyk7XG4gICAgICAgIGxlYWRpbmdXaGl0ZXNwYWNlID0gbWF0Y2hlcyAmJiBtYXRjaGVzWzBdO1xuICAgICAgfVxuXG4gICAgICBpZiAoUEFSU0VSX01FRElBX1RZUEUgPT09ICdhcHBsaWNhdGlvbi94aHRtbCt4bWwnKSB7XG4gICAgICAgIC8vIFJvb3Qgb2YgWEhUTUwgZG9jIG11c3QgY29udGFpbiB4bWxucyBkZWNsYXJhdGlvbiAoc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94aHRtbDEvbm9ybWF0aXZlLmh0bWwjc3RyaWN0KVxuICAgICAgICBkaXJ0eSA9ICc8aHRtbCB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj48aGVhZD48L2hlYWQ+PGJvZHk+JyArIGRpcnR5ICsgJzwvYm9keT48L2h0bWw+JztcbiAgICAgIH1cblxuICAgICAgdmFyIGRpcnR5UGF5bG9hZCA9IHRydXN0ZWRUeXBlc1BvbGljeSA/IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKGRpcnR5KSA6IGRpcnR5O1xuICAgICAgLypcbiAgICAgICAqIFVzZSB0aGUgRE9NUGFyc2VyIEFQSSBieSBkZWZhdWx0LCBmYWxsYmFjayBsYXRlciBpZiBuZWVkcyBiZVxuICAgICAgICogRE9NUGFyc2VyIG5vdCB3b3JrIGZvciBzdmcgd2hlbiBoYXMgbXVsdGlwbGUgcm9vdCBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBpZiAoTkFNRVNQQUNFID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoZGlydHlQYXlsb2FkLCBQQVJTRVJfTUVESUFfVFlQRSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgICB9XG5cbiAgICAgIC8qIFVzZSBjcmVhdGVIVE1MRG9jdW1lbnQgaW4gY2FzZSBET01QYXJzZXIgaXMgbm90IGF2YWlsYWJsZSAqL1xuICAgICAgaWYgKCFkb2MgfHwgIWRvYy5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgZG9jID0gaW1wbGVtZW50YXRpb24uY3JlYXRlRG9jdW1lbnQoTkFNRVNQQUNFLCAndGVtcGxhdGUnLCBudWxsKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBkb2MuZG9jdW1lbnRFbGVtZW50LmlubmVySFRNTCA9IElTX0VNUFRZX0lOUFVUID8gJycgOiBkaXJ0eVBheWxvYWQ7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAvLyBTeW50YXggZXJyb3IgaWYgZGlydHlQYXlsb2FkIGlzIGludmFsaWQgeG1sXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGJvZHkgPSBkb2MuYm9keSB8fCBkb2MuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgICBpZiAoZGlydHkgJiYgbGVhZGluZ1doaXRlc3BhY2UpIHtcbiAgICAgICAgYm9keS5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobGVhZGluZ1doaXRlc3BhY2UpLCBib2R5LmNoaWxkTm9kZXNbMF0gfHwgbnVsbCk7XG4gICAgICB9XG5cbiAgICAgIC8qIFdvcmsgb24gd2hvbGUgZG9jdW1lbnQgb3IganVzdCBpdHMgYm9keSAqL1xuICAgICAgaWYgKE5BTUVTUEFDRSA9PT0gSFRNTF9OQU1FU1BBQ0UpIHtcbiAgICAgICAgcmV0dXJuIGdldEVsZW1lbnRzQnlUYWdOYW1lLmNhbGwoZG9jLCBXSE9MRV9ET0NVTUVOVCA/ICdodG1sJyA6ICdib2R5JylbMF07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBXSE9MRV9ET0NVTUVOVCA/IGRvYy5kb2N1bWVudEVsZW1lbnQgOiBib2R5O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBfY3JlYXRlSXRlcmF0b3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0RvY3VtZW50fSByb290IGRvY3VtZW50L2ZyYWdtZW50IHRvIGNyZWF0ZSBpdGVyYXRvciBmb3JcbiAgICAgKiBAcmV0dXJuIHtJdGVyYXRvcn0gaXRlcmF0b3IgaW5zdGFuY2VcbiAgICAgKi9cbiAgICB2YXIgX2NyZWF0ZUl0ZXJhdG9yID0gZnVuY3Rpb24gX2NyZWF0ZUl0ZXJhdG9yKHJvb3QpIHtcbiAgICAgIHJldHVybiBjcmVhdGVOb2RlSXRlcmF0b3IuY2FsbChyb290Lm93bmVyRG9jdW1lbnQgfHwgcm9vdCwgcm9vdCwgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQgfCBOb2RlRmlsdGVyLlNIT1dfQ09NTUVOVCB8IE5vZGVGaWx0ZXIuU0hPV19URVhULCBudWxsLCBmYWxzZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9pc0Nsb2JiZXJlZFxuICAgICAqXG4gICAgICogQHBhcmFtICB7Tm9kZX0gZWxtIGVsZW1lbnQgdG8gY2hlY2sgZm9yIGNsb2JiZXJpbmcgYXR0YWNrc1xuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgY2xvYmJlcmVkLCBmYWxzZSBpZiBzYWZlXG4gICAgICovXG4gICAgdmFyIF9pc0Nsb2JiZXJlZCA9IGZ1bmN0aW9uIF9pc0Nsb2JiZXJlZChlbG0pIHtcbiAgICAgIHJldHVybiBlbG0gaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQgJiYgKHR5cGVvZiBlbG0ubm9kZU5hbWUgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBlbG0udGV4dENvbnRlbnQgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBlbG0ucmVtb3ZlQ2hpbGQgIT09ICdmdW5jdGlvbicgfHwgIShlbG0uYXR0cmlidXRlcyBpbnN0YW5jZW9mIE5hbWVkTm9kZU1hcCkgfHwgdHlwZW9mIGVsbS5yZW1vdmVBdHRyaWJ1dGUgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGVsbS5zZXRBdHRyaWJ1dGUgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGVsbS5uYW1lc3BhY2VVUkkgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBlbG0uaW5zZXJ0QmVmb3JlICE9PSAnZnVuY3Rpb24nKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX2lzTm9kZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7Tm9kZX0gb2JqIG9iamVjdCB0byBjaGVjayB3aGV0aGVyIGl0J3MgYSBET00gbm9kZVxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaXMgb2JqZWN0IGlzIGEgRE9NIG5vZGVcbiAgICAgKi9cbiAgICB2YXIgX2lzTm9kZSA9IGZ1bmN0aW9uIF9pc05vZGUob2JqZWN0KSB7XG4gICAgICByZXR1cm4gKHR5cGVvZiBOb2RlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihOb2RlKSkgPT09ICdvYmplY3QnID8gb2JqZWN0IGluc3RhbmNlb2YgTm9kZSA6IG9iamVjdCAmJiAodHlwZW9mIG9iamVjdCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob2JqZWN0KSkgPT09ICdvYmplY3QnICYmIHR5cGVvZiBvYmplY3Qubm9kZVR5cGUgPT09ICdudW1iZXInICYmIHR5cGVvZiBvYmplY3Qubm9kZU5hbWUgPT09ICdzdHJpbmcnO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBfZXhlY3V0ZUhvb2tcbiAgICAgKiBFeGVjdXRlIHVzZXIgY29uZmlndXJhYmxlIGhvb2tzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGVudHJ5UG9pbnQgIE5hbWUgb2YgdGhlIGhvb2sncyBlbnRyeSBwb2ludFxuICAgICAqIEBwYXJhbSAge05vZGV9IGN1cnJlbnROb2RlIG5vZGUgdG8gd29yayBvbiB3aXRoIHRoZSBob29rXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIGFkZGl0aW9uYWwgaG9vayBwYXJhbWV0ZXJzXG4gICAgICovXG4gICAgdmFyIF9leGVjdXRlSG9vayA9IGZ1bmN0aW9uIF9leGVjdXRlSG9vayhlbnRyeVBvaW50LCBjdXJyZW50Tm9kZSwgZGF0YSkge1xuICAgICAgaWYgKCFob29rc1tlbnRyeVBvaW50XSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFycmF5Rm9yRWFjaChob29rc1tlbnRyeVBvaW50XSwgZnVuY3Rpb24gKGhvb2spIHtcbiAgICAgICAgaG9vay5jYWxsKERPTVB1cmlmeSwgY3VycmVudE5vZGUsIGRhdGEsIENPTkZJRyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX3Nhbml0aXplRWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwcm90ZWN0IG5vZGVOYW1lXG4gICAgICogQHByb3RlY3QgdGV4dENvbnRlbnRcbiAgICAgKiBAcHJvdGVjdCByZW1vdmVDaGlsZFxuICAgICAqXG4gICAgICogQHBhcmFtICAge05vZGV9IGN1cnJlbnROb2RlIHRvIGNoZWNrIGZvciBwZXJtaXNzaW9uIHRvIGV4aXN0XG4gICAgICogQHJldHVybiAge0Jvb2xlYW59IHRydWUgaWYgbm9kZSB3YXMga2lsbGVkLCBmYWxzZSBpZiBsZWZ0IGFsaXZlXG4gICAgICovXG4gICAgdmFyIF9zYW5pdGl6ZUVsZW1lbnRzID0gZnVuY3Rpb24gX3Nhbml0aXplRWxlbWVudHMoY3VycmVudE5vZGUpIHtcbiAgICAgIHZhciBjb250ZW50ID0gdm9pZCAwO1xuXG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICBfZXhlY3V0ZUhvb2soJ2JlZm9yZVNhbml0aXplRWxlbWVudHMnLCBjdXJyZW50Tm9kZSwgbnVsbCk7XG5cbiAgICAgIC8qIENoZWNrIGlmIGVsZW1lbnQgaXMgY2xvYmJlcmVkIG9yIGNhbiBjbG9iYmVyICovXG4gICAgICBpZiAoX2lzQ2xvYmJlcmVkKGN1cnJlbnROb2RlKSkge1xuICAgICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLyogQ2hlY2sgaWYgdGFnbmFtZSBjb250YWlucyBVbmljb2RlICovXG4gICAgICBpZiAoc3RyaW5nTWF0Y2goY3VycmVudE5vZGUubm9kZU5hbWUsIC9bXFx1MDA4MC1cXHVGRkZGXS8pKSB7XG4gICAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBOb3cgbGV0J3MgY2hlY2sgdGhlIGVsZW1lbnQncyB0eXBlIGFuZCBuYW1lICovXG4gICAgICB2YXIgdGFnTmFtZSA9IHRyYW5zZm9ybUNhc2VGdW5jKGN1cnJlbnROb2RlLm5vZGVOYW1lKTtcblxuICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgICAgX2V4ZWN1dGVIb29rKCd1cG9uU2FuaXRpemVFbGVtZW50JywgY3VycmVudE5vZGUsIHtcbiAgICAgICAgdGFnTmFtZTogdGFnTmFtZSxcbiAgICAgICAgYWxsb3dlZFRhZ3M6IEFMTE9XRURfVEFHU1xuICAgICAgfSk7XG5cbiAgICAgIC8qIERldGVjdCBtWFNTIGF0dGVtcHRzIGFidXNpbmcgbmFtZXNwYWNlIGNvbmZ1c2lvbiAqL1xuICAgICAgaWYgKCFfaXNOb2RlKGN1cnJlbnROb2RlLmZpcnN0RWxlbWVudENoaWxkKSAmJiAoIV9pc05vZGUoY3VycmVudE5vZGUuY29udGVudCkgfHwgIV9pc05vZGUoY3VycmVudE5vZGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZCkpICYmIHJlZ0V4cFRlc3QoLzxbL1xcd10vZywgY3VycmVudE5vZGUuaW5uZXJIVE1MKSAmJiByZWdFeHBUZXN0KC88Wy9cXHddL2csIGN1cnJlbnROb2RlLnRleHRDb250ZW50KSkge1xuICAgICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLyogTWl0aWdhdGUgYSBwcm9ibGVtIHdpdGggdGVtcGxhdGVzIGluc2lkZSBzZWxlY3QgKi9cbiAgICAgIGlmICh0YWdOYW1lID09PSAnc2VsZWN0JyAmJiByZWdFeHBUZXN0KC88dGVtcGxhdGUvaSwgY3VycmVudE5vZGUuaW5uZXJIVE1MKSkge1xuICAgICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLyogUmVtb3ZlIGVsZW1lbnQgaWYgYW55dGhpbmcgZm9yYmlkcyBpdHMgcHJlc2VuY2UgKi9cbiAgICAgIGlmICghQUxMT1dFRF9UQUdTW3RhZ05hbWVdIHx8IEZPUkJJRF9UQUdTW3RhZ05hbWVdKSB7XG4gICAgICAgIC8qIEtlZXAgY29udGVudCBleGNlcHQgZm9yIGJhZC1saXN0ZWQgZWxlbWVudHMgKi9cbiAgICAgICAgaWYgKEtFRVBfQ09OVEVOVCAmJiAhRk9SQklEX0NPTlRFTlRTW3RhZ05hbWVdKSB7XG4gICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGN1cnJlbnROb2RlKSB8fCBjdXJyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgIHZhciBjaGlsZE5vZGVzID0gZ2V0Q2hpbGROb2RlcyhjdXJyZW50Tm9kZSkgfHwgY3VycmVudE5vZGUuY2hpbGROb2RlcztcblxuICAgICAgICAgIGlmIChjaGlsZE5vZGVzICYmIHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZENvdW50ID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBjaGlsZENvdW50IC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2xvbmVOb2RlKGNoaWxkTm9kZXNbaV0sIHRydWUpLCBnZXROZXh0U2libGluZyhjdXJyZW50Tm9kZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghRk9SQklEX1RBR1NbdGFnTmFtZV0gJiYgX2Jhc2ljQ3VzdG9tRWxlbWVudFRlc3QodGFnTmFtZSkpIHtcbiAgICAgICAgICBpZiAoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgUmVnRXhwICYmIHJlZ0V4cFRlc3QoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrLCB0YWdOYW1lKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIGlmIChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sodGFnTmFtZSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBDaGVjayB3aGV0aGVyIGVsZW1lbnQgaGFzIGEgdmFsaWQgbmFtZXNwYWNlICovXG4gICAgICBpZiAoY3VycmVudE5vZGUgaW5zdGFuY2VvZiBFbGVtZW50ICYmICFfY2hlY2tWYWxpZE5hbWVzcGFjZShjdXJyZW50Tm9kZSkpIHtcbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICgodGFnTmFtZSA9PT0gJ25vc2NyaXB0JyB8fCB0YWdOYW1lID09PSAnbm9lbWJlZCcpICYmIHJlZ0V4cFRlc3QoLzxcXC9ubyhzY3JpcHR8ZW1iZWQpL2ksIGN1cnJlbnROb2RlLmlubmVySFRNTCkpIHtcbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8qIFNhbml0aXplIGVsZW1lbnQgY29udGVudCB0byBiZSB0ZW1wbGF0ZS1zYWZlICovXG4gICAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTICYmIGN1cnJlbnROb2RlLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgIC8qIEdldCB0aGUgZWxlbWVudCdzIHRleHQgY29udGVudCAqL1xuICAgICAgICBjb250ZW50ID0gY3VycmVudE5vZGUudGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnRlbnQgPSBzdHJpbmdSZXBsYWNlKGNvbnRlbnQsIE1VU1RBQ0hFX0VYUFIkJDEsICcgJyk7XG4gICAgICAgIGNvbnRlbnQgPSBzdHJpbmdSZXBsYWNlKGNvbnRlbnQsIEVSQl9FWFBSJCQxLCAnICcpO1xuICAgICAgICBpZiAoY3VycmVudE5vZGUudGV4dENvbnRlbnQgIT09IGNvbnRlbnQpIHtcbiAgICAgICAgICBhcnJheVB1c2goRE9NUHVyaWZ5LnJlbW92ZWQsIHsgZWxlbWVudDogY3VycmVudE5vZGUuY2xvbmVOb2RlKCkgfSk7XG4gICAgICAgICAgY3VycmVudE5vZGUudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgIF9leGVjdXRlSG9vaygnYWZ0ZXJTYW5pdGl6ZUVsZW1lbnRzJywgY3VycmVudE5vZGUsIG51bGwpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9pc1ZhbGlkQXR0cmlidXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGxjVGFnIExvd2VyY2FzZSB0YWcgbmFtZSBvZiBjb250YWluaW5nIGVsZW1lbnQuXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBsY05hbWUgTG93ZXJjYXNlIGF0dHJpYnV0ZSBuYW1lLlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gdmFsdWUgQXR0cmlidXRlIHZhbHVlLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBgdmFsdWVgIGlzIHZhbGlkLCBvdGhlcndpc2UgZmFsc2UuXG4gICAgICovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgICB2YXIgX2lzVmFsaWRBdHRyaWJ1dGUgPSBmdW5jdGlvbiBfaXNWYWxpZEF0dHJpYnV0ZShsY1RhZywgbGNOYW1lLCB2YWx1ZSkge1xuICAgICAgLyogTWFrZSBzdXJlIGF0dHJpYnV0ZSBjYW5ub3QgY2xvYmJlciAqL1xuICAgICAgaWYgKFNBTklUSVpFX0RPTSAmJiAobGNOYW1lID09PSAnaWQnIHx8IGxjTmFtZSA9PT0gJ25hbWUnKSAmJiAodmFsdWUgaW4gZG9jdW1lbnQgfHwgdmFsdWUgaW4gZm9ybUVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLyogQWxsb3cgdmFsaWQgZGF0YS0qIGF0dHJpYnV0ZXM6IEF0IGxlYXN0IG9uZSBjaGFyYWN0ZXIgYWZ0ZXIgXCItXCJcbiAgICAgICAgICAoaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZG9tLmh0bWwjZW1iZWRkaW5nLWN1c3RvbS1ub24tdmlzaWJsZS1kYXRhLXdpdGgtdGhlLWRhdGEtKi1hdHRyaWJ1dGVzKVxuICAgICAgICAgIFhNTC1jb21wYXRpYmxlIChodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbmZyYXN0cnVjdHVyZS5odG1sI3htbC1jb21wYXRpYmxlIGFuZCBodHRwOi8vd3d3LnczLm9yZy9UUi94bWwvI2QwZTgwNClcbiAgICAgICAgICBXZSBkb24ndCBuZWVkIHRvIGNoZWNrIHRoZSB2YWx1ZTsgaXQncyBhbHdheXMgVVJJIHNhZmUuICovXG4gICAgICBpZiAoQUxMT1dfREFUQV9BVFRSICYmICFGT1JCSURfQVRUUltsY05hbWVdICYmIHJlZ0V4cFRlc3QoREFUQV9BVFRSJCQxLCBsY05hbWUpKSA7IGVsc2UgaWYgKEFMTE9XX0FSSUFfQVRUUiAmJiByZWdFeHBUZXN0KEFSSUFfQVRUUiQkMSwgbGNOYW1lKSkgOyBlbHNlIGlmICghQUxMT1dFRF9BVFRSW2xjTmFtZV0gfHwgRk9SQklEX0FUVFJbbGNOYW1lXSkge1xuICAgICAgICBpZiAoXG4gICAgICAgIC8vIEZpcnN0IGNvbmRpdGlvbiBkb2VzIGEgdmVyeSBiYXNpYyBjaGVjayBpZiBhKSBpdCdzIGJhc2ljYWxseSBhIHZhbGlkIGN1c3RvbSBlbGVtZW50IHRhZ25hbWUgQU5EXG4gICAgICAgIC8vIGIpIGlmIHRoZSB0YWdOYW1lIHBhc3NlcyB3aGF0ZXZlciB0aGUgdXNlciBoYXMgY29uZmlndXJlZCBmb3IgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrXG4gICAgICAgIC8vIGFuZCBjKSBpZiB0aGUgYXR0cmlidXRlIG5hbWUgcGFzc2VzIHdoYXRldmVyIHRoZSB1c2VyIGhhcyBjb25maWd1cmVkIGZvciBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2tcbiAgICAgICAgX2Jhc2ljQ3VzdG9tRWxlbWVudFRlc3QobGNUYWcpICYmIChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBSZWdFeHAgJiYgcmVnRXhwVGVzdChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2ssIGxjVGFnKSB8fCBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sobGNUYWcpKSAmJiAoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrIGluc3RhbmNlb2YgUmVnRXhwICYmIHJlZ0V4cFRlc3QoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrLCBsY05hbWUpIHx8IENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjayBpbnN0YW5jZW9mIEZ1bmN0aW9uICYmIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjayhsY05hbWUpKSB8fFxuICAgICAgICAvLyBBbHRlcm5hdGl2ZSwgc2Vjb25kIGNvbmRpdGlvbiBjaGVja3MgaWYgaXQncyBhbiBgaXNgLWF0dHJpYnV0ZSwgQU5EXG4gICAgICAgIC8vIHRoZSB2YWx1ZSBwYXNzZXMgd2hhdGV2ZXIgdGhlIHVzZXIgaGFzIGNvbmZpZ3VyZWQgZm9yIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVja1xuICAgICAgICBsY05hbWUgPT09ICdpcycgJiYgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzICYmIChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBSZWdFeHAgJiYgcmVnRXhwVGVzdChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2ssIHZhbHVlKSB8fCBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sodmFsdWUpKSkgOyBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLyogQ2hlY2sgdmFsdWUgaXMgc2FmZS4gRmlyc3QsIGlzIGF0dHIgaW5lcnQ/IElmIHNvLCBpcyBzYWZlICovXG4gICAgICB9IGVsc2UgaWYgKFVSSV9TQUZFX0FUVFJJQlVURVNbbGNOYW1lXSkgOyBlbHNlIGlmIChyZWdFeHBUZXN0KElTX0FMTE9XRURfVVJJJCQxLCBzdHJpbmdSZXBsYWNlKHZhbHVlLCBBVFRSX1dISVRFU1BBQ0UkJDEsICcnKSkpIDsgZWxzZSBpZiAoKGxjTmFtZSA9PT0gJ3NyYycgfHwgbGNOYW1lID09PSAneGxpbms6aHJlZicgfHwgbGNOYW1lID09PSAnaHJlZicpICYmIGxjVGFnICE9PSAnc2NyaXB0JyAmJiBzdHJpbmdJbmRleE9mKHZhbHVlLCAnZGF0YTonKSA9PT0gMCAmJiBEQVRBX1VSSV9UQUdTW2xjVGFnXSkgOyBlbHNlIGlmIChBTExPV19VTktOT1dOX1BST1RPQ09MUyAmJiAhcmVnRXhwVGVzdChJU19TQ1JJUFRfT1JfREFUQSQkMSwgc3RyaW5nUmVwbGFjZSh2YWx1ZSwgQVRUUl9XSElURVNQQUNFJCQxLCAnJykpKSA7IGVsc2UgaWYgKCF2YWx1ZSkgOyBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX2Jhc2ljQ3VzdG9tRWxlbWVudENoZWNrXG4gICAgICogY2hlY2tzIGlmIGF0IGxlYXN0IG9uZSBkYXNoIGlzIGluY2x1ZGVkIGluIHRhZ05hbWUsIGFuZCBpdCdzIG5vdCB0aGUgZmlyc3QgY2hhclxuICAgICAqIGZvciBtb3JlIHNvcGhpc3RpY2F0ZWQgY2hlY2tpbmcgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvdmFsaWRhdGUtZWxlbWVudC1uYW1lXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWUgbmFtZSBvZiB0aGUgdGFnIG9mIHRoZSBub2RlIHRvIHNhbml0aXplXG4gICAgICovXG4gICAgdmFyIF9iYXNpY0N1c3RvbUVsZW1lbnRUZXN0ID0gZnVuY3Rpb24gX2Jhc2ljQ3VzdG9tRWxlbWVudFRlc3QodGFnTmFtZSkge1xuICAgICAgcmV0dXJuIHRhZ05hbWUuaW5kZXhPZignLScpID4gMDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX3Nhbml0aXplQXR0cmlidXRlc1xuICAgICAqXG4gICAgICogQHByb3RlY3QgYXR0cmlidXRlc1xuICAgICAqIEBwcm90ZWN0IG5vZGVOYW1lXG4gICAgICogQHByb3RlY3QgcmVtb3ZlQXR0cmlidXRlXG4gICAgICogQHByb3RlY3Qgc2V0QXR0cmlidXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOb2RlfSBjdXJyZW50Tm9kZSB0byBzYW5pdGl6ZVxuICAgICAqL1xuICAgIHZhciBfc2FuaXRpemVBdHRyaWJ1dGVzID0gZnVuY3Rpb24gX3Nhbml0aXplQXR0cmlidXRlcyhjdXJyZW50Tm9kZSkge1xuICAgICAgdmFyIGF0dHIgPSB2b2lkIDA7XG4gICAgICB2YXIgdmFsdWUgPSB2b2lkIDA7XG4gICAgICB2YXIgbGNOYW1lID0gdm9pZCAwO1xuICAgICAgdmFyIGwgPSB2b2lkIDA7XG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICBfZXhlY3V0ZUhvb2soJ2JlZm9yZVNhbml0aXplQXR0cmlidXRlcycsIGN1cnJlbnROb2RlLCBudWxsKTtcblxuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBjdXJyZW50Tm9kZS5hdHRyaWJ1dGVzO1xuXG4gICAgICAvKiBDaGVjayBpZiB3ZSBoYXZlIGF0dHJpYnV0ZXM7IGlmIG5vdCB3ZSBtaWdodCBoYXZlIGEgdGV4dCBub2RlICovXG5cbiAgICAgIGlmICghYXR0cmlidXRlcykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBob29rRXZlbnQgPSB7XG4gICAgICAgIGF0dHJOYW1lOiAnJyxcbiAgICAgICAgYXR0clZhbHVlOiAnJyxcbiAgICAgICAga2VlcEF0dHI6IHRydWUsXG4gICAgICAgIGFsbG93ZWRBdHRyaWJ1dGVzOiBBTExPV0VEX0FUVFJcbiAgICAgIH07XG4gICAgICBsID0gYXR0cmlidXRlcy5sZW5ndGg7XG5cbiAgICAgIC8qIEdvIGJhY2t3YXJkcyBvdmVyIGFsbCBhdHRyaWJ1dGVzOyBzYWZlbHkgcmVtb3ZlIGJhZCBvbmVzICovXG4gICAgICB3aGlsZSAobC0tKSB7XG4gICAgICAgIGF0dHIgPSBhdHRyaWJ1dGVzW2xdO1xuICAgICAgICB2YXIgX2F0dHIgPSBhdHRyLFxuICAgICAgICAgICAgbmFtZSA9IF9hdHRyLm5hbWUsXG4gICAgICAgICAgICBuYW1lc3BhY2VVUkkgPSBfYXR0ci5uYW1lc3BhY2VVUkk7XG5cbiAgICAgICAgdmFsdWUgPSBzdHJpbmdUcmltKGF0dHIudmFsdWUpO1xuICAgICAgICBsY05hbWUgPSB0cmFuc2Zvcm1DYXNlRnVuYyhuYW1lKTtcblxuICAgICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICAgIGhvb2tFdmVudC5hdHRyTmFtZSA9IGxjTmFtZTtcbiAgICAgICAgaG9va0V2ZW50LmF0dHJWYWx1ZSA9IHZhbHVlO1xuICAgICAgICBob29rRXZlbnQua2VlcEF0dHIgPSB0cnVlO1xuICAgICAgICBob29rRXZlbnQuZm9yY2VLZWVwQXR0ciA9IHVuZGVmaW5lZDsgLy8gQWxsb3dzIGRldmVsb3BlcnMgdG8gc2VlIHRoaXMgaXMgYSBwcm9wZXJ0eSB0aGV5IGNhbiBzZXRcbiAgICAgICAgX2V4ZWN1dGVIb29rKCd1cG9uU2FuaXRpemVBdHRyaWJ1dGUnLCBjdXJyZW50Tm9kZSwgaG9va0V2ZW50KTtcbiAgICAgICAgdmFsdWUgPSBob29rRXZlbnQuYXR0clZhbHVlO1xuICAgICAgICAvKiBEaWQgdGhlIGhvb2tzIGFwcHJvdmUgb2YgdGhlIGF0dHJpYnV0ZT8gKi9cbiAgICAgICAgaWYgKGhvb2tFdmVudC5mb3JjZUtlZXBBdHRyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBSZW1vdmUgYXR0cmlidXRlICovXG4gICAgICAgIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgY3VycmVudE5vZGUpO1xuXG4gICAgICAgIC8qIERpZCB0aGUgaG9va3MgYXBwcm92ZSBvZiB0aGUgYXR0cmlidXRlPyAqL1xuICAgICAgICBpZiAoIWhvb2tFdmVudC5rZWVwQXR0cikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogV29yayBhcm91bmQgYSBzZWN1cml0eSBpc3N1ZSBpbiBqUXVlcnkgMy4wICovXG4gICAgICAgIGlmIChyZWdFeHBUZXN0KC9cXC8+L2ksIHZhbHVlKSkge1xuICAgICAgICAgIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgY3VycmVudE5vZGUpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogU2FuaXRpemUgYXR0cmlidXRlIGNvbnRlbnQgdG8gYmUgdGVtcGxhdGUtc2FmZSAqL1xuICAgICAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTKSB7XG4gICAgICAgICAgdmFsdWUgPSBzdHJpbmdSZXBsYWNlKHZhbHVlLCBNVVNUQUNIRV9FWFBSJCQxLCAnICcpO1xuICAgICAgICAgIHZhbHVlID0gc3RyaW5nUmVwbGFjZSh2YWx1ZSwgRVJCX0VYUFIkJDEsICcgJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBJcyBgdmFsdWVgIHZhbGlkIGZvciB0aGlzIGF0dHJpYnV0ZT8gKi9cbiAgICAgICAgdmFyIGxjVGFnID0gdHJhbnNmb3JtQ2FzZUZ1bmMoY3VycmVudE5vZGUubm9kZU5hbWUpO1xuICAgICAgICBpZiAoIV9pc1ZhbGlkQXR0cmlidXRlKGxjVGFnLCBsY05hbWUsIHZhbHVlKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogSGFuZGxlIGludmFsaWQgZGF0YS0qIGF0dHJpYnV0ZSBzZXQgYnkgdHJ5LWNhdGNoaW5nIGl0ICovXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKG5hbWVzcGFjZVVSSSkge1xuICAgICAgICAgICAgY3VycmVudE5vZGUuc2V0QXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8qIEZhbGxiYWNrIHRvIHNldEF0dHJpYnV0ZSgpIGZvciBicm93c2VyLXVucmVjb2duaXplZCBuYW1lc3BhY2VzIGUuZy4gXCJ4LXNjaGVtYVwiLiAqL1xuICAgICAgICAgICAgY3VycmVudE5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhcnJheVBvcChET01QdXJpZnkucmVtb3ZlZCk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgICB9XG5cbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgIF9leGVjdXRlSG9vaygnYWZ0ZXJTYW5pdGl6ZUF0dHJpYnV0ZXMnLCBjdXJyZW50Tm9kZSwgbnVsbCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9zYW5pdGl6ZVNoYWRvd0RPTVxuICAgICAqXG4gICAgICogQHBhcmFtICB7RG9jdW1lbnRGcmFnbWVudH0gZnJhZ21lbnQgdG8gaXRlcmF0ZSBvdmVyIHJlY3Vyc2l2ZWx5XG4gICAgICovXG4gICAgdmFyIF9zYW5pdGl6ZVNoYWRvd0RPTSA9IGZ1bmN0aW9uIF9zYW5pdGl6ZVNoYWRvd0RPTShmcmFnbWVudCkge1xuICAgICAgdmFyIHNoYWRvd05vZGUgPSB2b2lkIDA7XG4gICAgICB2YXIgc2hhZG93SXRlcmF0b3IgPSBfY3JlYXRlSXRlcmF0b3IoZnJhZ21lbnQpO1xuXG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICBfZXhlY3V0ZUhvb2soJ2JlZm9yZVNhbml0aXplU2hhZG93RE9NJywgZnJhZ21lbnQsIG51bGwpO1xuXG4gICAgICB3aGlsZSAoc2hhZG93Tm9kZSA9IHNoYWRvd0l0ZXJhdG9yLm5leHROb2RlKCkpIHtcbiAgICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgICAgICBfZXhlY3V0ZUhvb2soJ3Vwb25TYW5pdGl6ZVNoYWRvd05vZGUnLCBzaGFkb3dOb2RlLCBudWxsKTtcblxuICAgICAgICAvKiBTYW5pdGl6ZSB0YWdzIGFuZCBlbGVtZW50cyAqL1xuICAgICAgICBpZiAoX3Nhbml0aXplRWxlbWVudHMoc2hhZG93Tm9kZSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIERlZXAgc2hhZG93IERPTSBkZXRlY3RlZCAqL1xuICAgICAgICBpZiAoc2hhZG93Tm9kZS5jb250ZW50IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xuICAgICAgICAgIF9zYW5pdGl6ZVNoYWRvd0RPTShzaGFkb3dOb2RlLmNvbnRlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogQ2hlY2sgYXR0cmlidXRlcywgc2FuaXRpemUgaWYgbmVjZXNzYXJ5ICovXG4gICAgICAgIF9zYW5pdGl6ZUF0dHJpYnV0ZXMoc2hhZG93Tm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgIF9leGVjdXRlSG9vaygnYWZ0ZXJTYW5pdGl6ZVNoYWRvd0RPTScsIGZyYWdtZW50LCBudWxsKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2FuaXRpemVcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHByb3ZpZGluZyBjb3JlIHNhbml0YXRpb24gZnVuY3Rpb25hbGl0eVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd8Tm9kZX0gZGlydHkgc3RyaW5nIG9yIERPTSBub2RlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgICBET01QdXJpZnkuc2FuaXRpemUgPSBmdW5jdGlvbiAoZGlydHksIGNmZykge1xuICAgICAgdmFyIGJvZHkgPSB2b2lkIDA7XG4gICAgICB2YXIgaW1wb3J0ZWROb2RlID0gdm9pZCAwO1xuICAgICAgdmFyIGN1cnJlbnROb2RlID0gdm9pZCAwO1xuICAgICAgdmFyIG9sZE5vZGUgPSB2b2lkIDA7XG4gICAgICB2YXIgcmV0dXJuTm9kZSA9IHZvaWQgMDtcbiAgICAgIC8qIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgc3RyaW5nIHRvIHNhbml0aXplLlxuICAgICAgICBETyBOT1QgcmV0dXJuIGVhcmx5LCBhcyB0aGlzIHdpbGwgcmV0dXJuIHRoZSB3cm9uZyB0eXBlIGlmXG4gICAgICAgIHRoZSB1c2VyIGhhcyByZXF1ZXN0ZWQgYSBET00gb2JqZWN0IHJhdGhlciB0aGFuIGEgc3RyaW5nICovXG4gICAgICBJU19FTVBUWV9JTlBVVCA9ICFkaXJ0eTtcbiAgICAgIGlmIChJU19FTVBUWV9JTlBVVCkge1xuICAgICAgICBkaXJ0eSA9ICc8IS0tPic7XG4gICAgICB9XG5cbiAgICAgIC8qIFN0cmluZ2lmeSwgaW4gY2FzZSBkaXJ0eSBpcyBhbiBvYmplY3QgKi9cbiAgICAgIGlmICh0eXBlb2YgZGlydHkgIT09ICdzdHJpbmcnICYmICFfaXNOb2RlKGRpcnR5KSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVnYXRlZC1jb25kaXRpb25cbiAgICAgICAgaWYgKHR5cGVvZiBkaXJ0eS50b1N0cmluZyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRocm93IHR5cGVFcnJvckNyZWF0ZSgndG9TdHJpbmcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXJ0eSA9IGRpcnR5LnRvU3RyaW5nKCk7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkaXJ0eSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IHR5cGVFcnJvckNyZWF0ZSgnZGlydHkgaXMgbm90IGEgc3RyaW5nLCBhYm9ydGluZycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiBDaGVjayB3ZSBjYW4gcnVuLiBPdGhlcndpc2UgZmFsbCBiYWNrIG9yIGlnbm9yZSAqL1xuICAgICAgaWYgKCFET01QdXJpZnkuaXNTdXBwb3J0ZWQpIHtcbiAgICAgICAgaWYgKF90eXBlb2Yod2luZG93LnRvU3RhdGljSFRNTCkgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB3aW5kb3cudG9TdGF0aWNIVE1MID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkaXJ0eSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cudG9TdGF0aWNIVE1MKGRpcnR5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoX2lzTm9kZShkaXJ0eSkpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cudG9TdGF0aWNIVE1MKGRpcnR5Lm91dGVySFRNTCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRpcnR5O1xuICAgICAgfVxuXG4gICAgICAvKiBBc3NpZ24gY29uZmlnIHZhcnMgKi9cbiAgICAgIGlmICghU0VUX0NPTkZJRykge1xuICAgICAgICBfcGFyc2VDb25maWcoY2ZnKTtcbiAgICAgIH1cblxuICAgICAgLyogQ2xlYW4gdXAgcmVtb3ZlZCBlbGVtZW50cyAqL1xuICAgICAgRE9NUHVyaWZ5LnJlbW92ZWQgPSBbXTtcblxuICAgICAgLyogQ2hlY2sgaWYgZGlydHkgaXMgY29ycmVjdGx5IHR5cGVkIGZvciBJTl9QTEFDRSAqL1xuICAgICAgaWYgKHR5cGVvZiBkaXJ0eSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgSU5fUExBQ0UgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKElOX1BMQUNFKSB7XG4gICAgICAgIC8qIERvIHNvbWUgZWFybHkgcHJlLXNhbml0aXphdGlvbiB0byBhdm9pZCB1bnNhZmUgcm9vdCBub2RlcyAqL1xuICAgICAgICBpZiAoZGlydHkubm9kZU5hbWUpIHtcbiAgICAgICAgICB2YXIgdGFnTmFtZSA9IHRyYW5zZm9ybUNhc2VGdW5jKGRpcnR5Lm5vZGVOYW1lKTtcbiAgICAgICAgICBpZiAoIUFMTE9XRURfVEFHU1t0YWdOYW1lXSB8fCBGT1JCSURfVEFHU1t0YWdOYW1lXSkge1xuICAgICAgICAgICAgdGhyb3cgdHlwZUVycm9yQ3JlYXRlKCdyb290IG5vZGUgaXMgZm9yYmlkZGVuIGFuZCBjYW5ub3QgYmUgc2FuaXRpemVkIGluLXBsYWNlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGRpcnR5IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAvKiBJZiBkaXJ0eSBpcyBhIERPTSBlbGVtZW50LCBhcHBlbmQgdG8gYW4gZW1wdHkgZG9jdW1lbnQgdG8gYXZvaWRcbiAgICAgICAgICAgZWxlbWVudHMgYmVpbmcgc3RyaXBwZWQgYnkgdGhlIHBhcnNlciAqL1xuICAgICAgICBib2R5ID0gX2luaXREb2N1bWVudCgnPCEtLS0tPicpO1xuICAgICAgICBpbXBvcnRlZE5vZGUgPSBib2R5Lm93bmVyRG9jdW1lbnQuaW1wb3J0Tm9kZShkaXJ0eSwgdHJ1ZSk7XG4gICAgICAgIGlmIChpbXBvcnRlZE5vZGUubm9kZVR5cGUgPT09IDEgJiYgaW1wb3J0ZWROb2RlLm5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICAgICAgICAvKiBOb2RlIGlzIGFscmVhZHkgYSBib2R5LCB1c2UgYXMgaXMgKi9cbiAgICAgICAgICBib2R5ID0gaW1wb3J0ZWROb2RlO1xuICAgICAgICB9IGVsc2UgaWYgKGltcG9ydGVkTm9kZS5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgICAgICAgYm9keSA9IGltcG9ydGVkTm9kZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItZG9tLW5vZGUtYXBwZW5kXG4gICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChpbXBvcnRlZE5vZGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBFeGl0IGRpcmVjdGx5IGlmIHdlIGhhdmUgbm90aGluZyB0byBkbyAqL1xuICAgICAgICBpZiAoIVJFVFVSTl9ET00gJiYgIVNBRkVfRk9SX1RFTVBMQVRFUyAmJiAhV0hPTEVfRE9DVU1FTlQgJiZcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWluY2x1ZGVzXG4gICAgICAgIGRpcnR5LmluZGV4T2YoJzwnKSA9PT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1c3RlZFR5cGVzUG9saWN5ICYmIFJFVFVSTl9UUlVTVEVEX1RZUEUgPyB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlSFRNTChkaXJ0eSkgOiBkaXJ0eTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIEluaXRpYWxpemUgdGhlIGRvY3VtZW50IHRvIHdvcmsgb24gKi9cbiAgICAgICAgYm9keSA9IF9pbml0RG9jdW1lbnQoZGlydHkpO1xuXG4gICAgICAgIC8qIENoZWNrIHdlIGhhdmUgYSBET00gbm9kZSBmcm9tIHRoZSBkYXRhICovXG4gICAgICAgIGlmICghYm9keSkge1xuICAgICAgICAgIHJldHVybiBSRVRVUk5fRE9NID8gbnVsbCA6IFJFVFVSTl9UUlVTVEVEX1RZUEUgPyBlbXB0eUhUTUwgOiAnJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiBSZW1vdmUgZmlyc3QgZWxlbWVudCBub2RlIChvdXJzKSBpZiBGT1JDRV9CT0RZIGlzIHNldCAqL1xuICAgICAgaWYgKGJvZHkgJiYgRk9SQ0VfQk9EWSkge1xuICAgICAgICBfZm9yY2VSZW1vdmUoYm9keS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgLyogR2V0IG5vZGUgaXRlcmF0b3IgKi9cbiAgICAgIHZhciBub2RlSXRlcmF0b3IgPSBfY3JlYXRlSXRlcmF0b3IoSU5fUExBQ0UgPyBkaXJ0eSA6IGJvZHkpO1xuXG4gICAgICAvKiBOb3cgc3RhcnQgaXRlcmF0aW5nIG92ZXIgdGhlIGNyZWF0ZWQgZG9jdW1lbnQgKi9cbiAgICAgIHdoaWxlIChjdXJyZW50Tm9kZSA9IG5vZGVJdGVyYXRvci5uZXh0Tm9kZSgpKSB7XG4gICAgICAgIC8qIEZpeCBJRSdzIHN0cmFuZ2UgYmVoYXZpb3Igd2l0aCBtYW5pcHVsYXRlZCB0ZXh0Tm9kZXMgIzg5ICovXG4gICAgICAgIGlmIChjdXJyZW50Tm9kZS5ub2RlVHlwZSA9PT0gMyAmJiBjdXJyZW50Tm9kZSA9PT0gb2xkTm9kZSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogU2FuaXRpemUgdGFncyBhbmQgZWxlbWVudHMgKi9cbiAgICAgICAgaWYgKF9zYW5pdGl6ZUVsZW1lbnRzKGN1cnJlbnROb2RlKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogU2hhZG93IERPTSBkZXRlY3RlZCwgc2FuaXRpemUgaXQgKi9cbiAgICAgICAgaWYgKGN1cnJlbnROb2RlLmNvbnRlbnQgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgICAgX3Nhbml0aXplU2hhZG93RE9NKGN1cnJlbnROb2RlLmNvbnRlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogQ2hlY2sgYXR0cmlidXRlcywgc2FuaXRpemUgaWYgbmVjZXNzYXJ5ICovXG4gICAgICAgIF9zYW5pdGl6ZUF0dHJpYnV0ZXMoY3VycmVudE5vZGUpO1xuXG4gICAgICAgIG9sZE5vZGUgPSBjdXJyZW50Tm9kZTtcbiAgICAgIH1cblxuICAgICAgb2xkTm9kZSA9IG51bGw7XG5cbiAgICAgIC8qIElmIHdlIHNhbml0aXplZCBgZGlydHlgIGluLXBsYWNlLCByZXR1cm4gaXQuICovXG4gICAgICBpZiAoSU5fUExBQ0UpIHtcbiAgICAgICAgcmV0dXJuIGRpcnR5O1xuICAgICAgfVxuXG4gICAgICAvKiBSZXR1cm4gc2FuaXRpemVkIHN0cmluZyBvciBET00gKi9cbiAgICAgIGlmIChSRVRVUk5fRE9NKSB7XG4gICAgICAgIGlmIChSRVRVUk5fRE9NX0ZSQUdNRU5UKSB7XG4gICAgICAgICAgcmV0dXJuTm9kZSA9IGNyZWF0ZURvY3VtZW50RnJhZ21lbnQuY2FsbChib2R5Lm93bmVyRG9jdW1lbnQpO1xuXG4gICAgICAgICAgd2hpbGUgKGJvZHkuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWRvbS1ub2RlLWFwcGVuZFxuICAgICAgICAgICAgcmV0dXJuTm9kZS5hcHBlbmRDaGlsZChib2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm5Ob2RlID0gYm9keTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBTExPV0VEX0FUVFIuc2hhZG93cm9vdCkge1xuICAgICAgICAgIC8qXG4gICAgICAgICAgICBBZG9wdE5vZGUoKSBpcyBub3QgdXNlZCBiZWNhdXNlIGludGVybmFsIHN0YXRlIGlzIG5vdCByZXNldFxuICAgICAgICAgICAgKGUuZy4gdGhlIHBhc3QgbmFtZXMgbWFwIG9mIGEgSFRNTEZvcm1FbGVtZW50KSwgdGhpcyBpcyBzYWZlXG4gICAgICAgICAgICBpbiB0aGVvcnkgYnV0IHdlIHdvdWxkIHJhdGhlciBub3QgcmlzayBhbm90aGVyIGF0dGFjayB2ZWN0b3IuXG4gICAgICAgICAgICBUaGUgc3RhdGUgdGhhdCBpcyBjbG9uZWQgYnkgaW1wb3J0Tm9kZSgpIGlzIGV4cGxpY2l0bHkgZGVmaW5lZFxuICAgICAgICAgICAgYnkgdGhlIHNwZWNzLlxuICAgICAgICAgICovXG4gICAgICAgICAgcmV0dXJuTm9kZSA9IGltcG9ydE5vZGUuY2FsbChvcmlnaW5hbERvY3VtZW50LCByZXR1cm5Ob2RlLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXR1cm5Ob2RlO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2VyaWFsaXplZEhUTUwgPSBXSE9MRV9ET0NVTUVOVCA/IGJvZHkub3V0ZXJIVE1MIDogYm9keS5pbm5lckhUTUw7XG5cbiAgICAgIC8qIFNhbml0aXplIGZpbmFsIHN0cmluZyB0ZW1wbGF0ZS1zYWZlICovXG4gICAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTKSB7XG4gICAgICAgIHNlcmlhbGl6ZWRIVE1MID0gc3RyaW5nUmVwbGFjZShzZXJpYWxpemVkSFRNTCwgTVVTVEFDSEVfRVhQUiQkMSwgJyAnKTtcbiAgICAgICAgc2VyaWFsaXplZEhUTUwgPSBzdHJpbmdSZXBsYWNlKHNlcmlhbGl6ZWRIVE1MLCBFUkJfRVhQUiQkMSwgJyAnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydXN0ZWRUeXBlc1BvbGljeSAmJiBSRVRVUk5fVFJVU1RFRF9UWVBFID8gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwoc2VyaWFsaXplZEhUTUwpIDogc2VyaWFsaXplZEhUTUw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gc2V0IHRoZSBjb25maWd1cmF0aW9uIG9uY2VcbiAgICAgKiBzZXRDb25maWdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgKi9cbiAgICBET01QdXJpZnkuc2V0Q29uZmlnID0gZnVuY3Rpb24gKGNmZykge1xuICAgICAgX3BhcnNlQ29uZmlnKGNmZyk7XG4gICAgICBTRVRfQ09ORklHID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgdGhlIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBjbGVhckNvbmZpZ1xuICAgICAqXG4gICAgICovXG4gICAgRE9NUHVyaWZ5LmNsZWFyQ29uZmlnID0gZnVuY3Rpb24gKCkge1xuICAgICAgQ09ORklHID0gbnVsbDtcbiAgICAgIFNFVF9DT05GSUcgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHVibGljIG1ldGhvZCB0byBjaGVjayBpZiBhbiBhdHRyaWJ1dGUgdmFsdWUgaXMgdmFsaWQuXG4gICAgICogVXNlcyBsYXN0IHNldCBjb25maWcsIGlmIGFueS4gT3RoZXJ3aXNlLCB1c2VzIGNvbmZpZyBkZWZhdWx0cy5cbiAgICAgKiBpc1ZhbGlkQXR0cmlidXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRhZyBUYWcgbmFtZSBvZiBjb250YWluaW5nIGVsZW1lbnQuXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBhdHRyIEF0dHJpYnV0ZSBuYW1lLlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gdmFsdWUgQXR0cmlidXRlIHZhbHVlLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBgdmFsdWVgIGlzIHZhbGlkLiBPdGhlcndpc2UsIHJldHVybnMgZmFsc2UuXG4gICAgICovXG4gICAgRE9NUHVyaWZ5LmlzVmFsaWRBdHRyaWJ1dGUgPSBmdW5jdGlvbiAodGFnLCBhdHRyLCB2YWx1ZSkge1xuICAgICAgLyogSW5pdGlhbGl6ZSBzaGFyZWQgY29uZmlnIHZhcnMgaWYgbmVjZXNzYXJ5LiAqL1xuICAgICAgaWYgKCFDT05GSUcpIHtcbiAgICAgICAgX3BhcnNlQ29uZmlnKHt9KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxjVGFnID0gdHJhbnNmb3JtQ2FzZUZ1bmModGFnKTtcbiAgICAgIHZhciBsY05hbWUgPSB0cmFuc2Zvcm1DYXNlRnVuYyhhdHRyKTtcbiAgICAgIHJldHVybiBfaXNWYWxpZEF0dHJpYnV0ZShsY1RhZywgbGNOYW1lLCB2YWx1ZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZEhvb2tcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHRvIGFkZCBET01QdXJpZnkgaG9va3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBlbnRyeVBvaW50IGVudHJ5IHBvaW50IGZvciB0aGUgaG9vayB0byBhZGRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBob29rRnVuY3Rpb24gZnVuY3Rpb24gdG8gZXhlY3V0ZVxuICAgICAqL1xuICAgIERPTVB1cmlmeS5hZGRIb29rID0gZnVuY3Rpb24gKGVudHJ5UG9pbnQsIGhvb2tGdW5jdGlvbikge1xuICAgICAgaWYgKHR5cGVvZiBob29rRnVuY3Rpb24gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBob29rc1tlbnRyeVBvaW50XSA9IGhvb2tzW2VudHJ5UG9pbnRdIHx8IFtdO1xuICAgICAgYXJyYXlQdXNoKGhvb2tzW2VudHJ5UG9pbnRdLCBob29rRnVuY3Rpb24pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVIb29rXG4gICAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgYSBET01QdXJpZnkgaG9vayBhdCBhIGdpdmVuIGVudHJ5UG9pbnRcbiAgICAgKiAocG9wcyBpdCBmcm9tIHRoZSBzdGFjayBvZiBob29rcyBpZiBtb3JlIGFyZSBwcmVzZW50KVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGVudHJ5UG9pbnQgZW50cnkgcG9pbnQgZm9yIHRoZSBob29rIHRvIHJlbW92ZVxuICAgICAqL1xuICAgIERPTVB1cmlmeS5yZW1vdmVIb29rID0gZnVuY3Rpb24gKGVudHJ5UG9pbnQpIHtcbiAgICAgIGlmIChob29rc1tlbnRyeVBvaW50XSkge1xuICAgICAgICBhcnJheVBvcChob29rc1tlbnRyeVBvaW50XSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZUhvb2tzXG4gICAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgYWxsIERPTVB1cmlmeSBob29rcyBhdCBhIGdpdmVuIGVudHJ5UG9pbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZW50cnlQb2ludCBlbnRyeSBwb2ludCBmb3IgdGhlIGhvb2tzIHRvIHJlbW92ZVxuICAgICAqL1xuICAgIERPTVB1cmlmeS5yZW1vdmVIb29rcyA9IGZ1bmN0aW9uIChlbnRyeVBvaW50KSB7XG4gICAgICBpZiAoaG9va3NbZW50cnlQb2ludF0pIHtcbiAgICAgICAgaG9va3NbZW50cnlQb2ludF0gPSBbXTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlQWxsSG9va3NcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHRvIHJlbW92ZSBhbGwgRE9NUHVyaWZ5IGhvb2tzXG4gICAgICpcbiAgICAgKi9cbiAgICBET01QdXJpZnkucmVtb3ZlQWxsSG9va3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBob29rcyA9IHt9O1xuICAgIH07XG5cbiAgICByZXR1cm4gRE9NUHVyaWZ5O1xuICB9XG5cbiAgdmFyIHB1cmlmeSA9IGNyZWF0ZURPTVB1cmlmeSgpO1xuXG4gIHJldHVybiBwdXJpZnk7XG5cbn0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXB1cmlmeS5qcy5tYXBcbiIsIjxzdmdcbiAgd2lkdGg9XCIxM1wiXG4gIGhlaWdodD1cIjEzXCJcbiAgdmlld0JveD1cIjAgMCAxMyAxM1wiXG4gIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgPHBhdGhcbiAgICBkPVwiTTAuNDYwNDQ5IDEyLjE4MDdMMTMuMDAwMSA2LjUwMDAzTDAuNDYwNDQ5IDAuODE5MzM2VjUuMjM3NjVMOS40MTczMSA2LjUwMDAzTDAuNDYwNDQ5IDcuNzYyNDFWMTIuMTgwN1pcIlxuICAgIGZpbGw9XCJ3aGl0ZVwiIC8+XG48L3N2Zz4iLCI8c3ZnXG4gIHdpZHRoPVwiMTJcIlxuICBoZWlnaHQ9XCIxMlwiXG4gIHZpZXdCb3g9XCIwIDAgMTIgMTJcIlxuICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gIDxwYXRoXG4gICAgZD1cIk0xLjQ5MjI5IDMuNDk4ODlDMS4yNDcyOSAzLjc0Mzg5IDEuMjQ3MjkgNC4xMzg4OSAxLjQ5MjI5IDQuMzgzODlMNS42NDcyOSA4LjUzODg5QzUuODQyMjkgOC43MzM4OSA2LjE1NzI5IDguNzMzODkgNi4zNTIyOSA4LjUzODg5TDEwLjUwNzMgNC4zODM4OUMxMC43NTIzIDQuMTM4ODkgMTAuNzUyMyAzLjc0Mzg5IDEwLjUwNzMgMy40OTg4OUMxMC4yNjIzIDMuMjUzODkgOS44NjcyOSAzLjI1Mzg5IDkuNjIyMjkgMy40OTg4OUw1Ljk5NzI5IDcuMTE4ODlMMi4zNzIyOSAzLjQ5Mzg5QzIuMTMyMjkgMy4yNTM4OSAxLjczMjI5IDMuMjUzODkgMS40OTIyOSAzLjQ5ODg5WlwiXG4gICAgZmlsbD1cIiM2MzY2NzFcIiAvPlxuPC9zdmc+IiwiPHN2ZWx0ZTpvcHRpb25zIHRhZz1cIm55bGFzLWNvbnZlcnNhdGlvblwiIC8+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB7XG4gICAgQ29udGFjdFN0b3JlLFxuICAgIENvbnZlcnNhdGlvblN0b3JlLFxuICAgIEVycm9yU3RvcmUsXG4gICAgZmV0Y2hBY2NvdW50LFxuICAgIGZldGNoQ2xlYW5Db252ZXJzYXRpb25zLFxuICAgIE1hbmlmZXN0U3RvcmUsXG4gICAgc2VuZE1lc3NhZ2UsXG4gIH0gZnJvbSBcIkBjb21tb25zXCI7XG5cbiAgaW1wb3J0IFwiQGNvbW1vbnMvY29tcG9uZW50cy9Db250YWN0SW1hZ2UvQ29udGFjdEltYWdlLnN2ZWx0ZVwiO1xuICBpbXBvcnQgXCJAY29tbW9ucy9jb21wb25lbnRzL0Vycm9yTWVzc2FnZS5zdmVsdGVcIjtcbiAgaW1wb3J0IHtcbiAgICBidWlsZEludGVybmFsUHJvcHMsXG4gICAgZ2V0RXZlbnREaXNwYXRjaGVyLFxuICB9IGZyb20gXCJAY29tbW9ucy9tZXRob2RzL2NvbXBvbmVudFwiO1xuICBpbXBvcnQgeyBnZXREYXRlIH0gZnJvbSBcIkBjb21tb25zL21ldGhvZHMvZGF0ZXRpbWVcIjtcbiAgaW1wb3J0IHR5cGUgeyBDb250YWN0U2VhcmNoUXVlcnkgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvQ29udGFjdHNcIjtcbiAgaW1wb3J0IHR5cGUge1xuICAgIEFjY291bnQsXG4gICAgQ29udmVyc2F0aW9uLFxuICAgIENvbnZlcnNhdGlvblByb3BlcnRpZXMsXG4gICAgQ29udmVyc2F0aW9uUXVlcnksXG4gICAgTWVzc2FnZSxcbiAgICBQYXJ0aWNpcGFudCxcbiAgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvTnlsYXNcIjtcbiAgaW1wb3J0ICogYXMgRE9NUHVyaWZ5IGZyb20gXCJkb21wdXJpZnlcIjtcbiAgaW1wb3J0IHsgYWZ0ZXJVcGRhdGUgfSBmcm9tIFwic3ZlbHRlXCI7XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCwgb25Nb3VudCB9IGZyb20gXCJzdmVsdGUvaW50ZXJuYWxcIjtcbiAgaW1wb3J0IFNlbmRJY29uIGZyb20gXCIuL2Fzc2V0cy9zZW5kLnN2Z1wiO1xuICBpbXBvcnQgVG9nZ2xlSWNvbiBmcm9tIFwiLi9hc3NldHMvdG9nZ2xlLnN2Z1wiO1xuXG4gIGV4cG9ydCBsZXQgaWQ6IHN0cmluZyA9IFwiXCI7XG4gIGV4cG9ydCBsZXQgYWNjZXNzX3Rva2VuOiBzdHJpbmcgPSBcIlwiO1xuXG4gIGV4cG9ydCBsZXQgbWVzc2FnZXM6IE1lc3NhZ2VbXSA9IFtdO1xuICBleHBvcnQgbGV0IHNob3dfYXZhdGFyczogYm9vbGVhbiB8IHN0cmluZztcbiAgZXhwb3J0IGxldCBzaG93X3JlcGx5OiBib29sZWFuIHwgc3RyaW5nO1xuICBleHBvcnQgbGV0IHRoZW1lOiBzdHJpbmc7XG4gIGV4cG9ydCBsZXQgdGhyZWFkX2lkOiBzdHJpbmc7XG4gIGV4cG9ydCBsZXQgeW91OiBQYXJ0aWFsPEFjY291bnQ+O1xuXG4gIGNvbnN0IGRlZmF1bHRWYWx1ZU1hcDogUGFydGlhbDxDb252ZXJzYXRpb25Qcm9wZXJ0aWVzPiA9IHtcbiAgICBzaG93X2F2YXRhcnM6IGZhbHNlLFxuICAgIHNob3dfcmVwbHk6IGZhbHNlLFxuICAgIHRoZW1lOiBcInRoZW1lLTFcIixcbiAgICB0aHJlYWRfaWQ6IFwiXCIsXG4gICAgeW91OiB7fSxcbiAgfTtcblxuICBsZXQgX3RoaXMgPSA8Q29udmVyc2F0aW9uUHJvcGVydGllcz4oXG4gICAgYnVpbGRJbnRlcm5hbFByb3BzKHt9LCB7fSwgZGVmYXVsdFZhbHVlTWFwKVxuICApO1xuICBsZXQgbWFuaWZlc3Q6IFBhcnRpYWw8Q29udmVyc2F0aW9uUHJvcGVydGllcz4gPSB7fTtcblxuICBjb25zdCBkaXNwYXRjaEV2ZW50ID0gZ2V0RXZlbnREaXNwYXRjaGVyKGdldF9jdXJyZW50X2NvbXBvbmVudCgpKTtcbiAgJDogZGlzcGF0Y2hFdmVudChcIm1hbmlmZXN0TG9hZGVkXCIsIG1hbmlmZXN0KTtcblxuICAkOiBpZiAoT2JqZWN0LmtleXMoJEVycm9yU3RvcmUpLmxlbmd0aCkge1xuICAgIGRpc3BhdGNoRXZlbnQoXCJvbkVycm9yXCIsICRFcnJvclN0b3JlKTtcbiAgfVxuXG4gIGxldCBjb252ZXJzYXRpb25NYW51YWxseVBhc3NlZDogYm9vbGVhbjtcbiAgJDogY29udmVyc2F0aW9uTWFudWFsbHlQYXNzZWQgPSAhIV90aGlzLm1lc3NhZ2VzICYmIF90aGlzLm1lc3NhZ2VzLmxlbmd0aCA+IDA7XG5cbiAgb25Nb3VudChhc3luYyAoKSA9PiB7XG4gICAgbWFuaWZlc3QgPSAoKGF3YWl0ICRNYW5pZmVzdFN0b3JlW1xuICAgICAgSlNPTi5zdHJpbmdpZnkoeyBjb21wb25lbnRfaWQ6IGlkLCBhY2Nlc3NfdG9rZW4gfSlcbiAgICBdKSB8fCB7fSkgYXMgQ29udmVyc2F0aW9uUHJvcGVydGllcztcblxuICAgIF90aGlzID0gYnVpbGRJbnRlcm5hbFByb3BzKFxuICAgICAgJCRwcm9wcyxcbiAgICAgIG1hbmlmZXN0LFxuICAgICAgZGVmYXVsdFZhbHVlTWFwLFxuICAgICkgYXMgQ29udmVyc2F0aW9uUHJvcGVydGllcztcblxuICAgIC8vIEZldGNoIEFjY291bnRcbiAgICBpZiAoaWQgJiYgIV90aGlzLnlvdT8uaWQgJiYgIWNvbnZlcnNhdGlvbk1hbnVhbGx5UGFzc2VkKSB7XG4gICAgICBfdGhpcy55b3UgPSBhd2FpdCBmZXRjaEFjY291bnQoe1xuICAgICAgICBjb21wb25lbnRfaWQ6IHF1ZXJ5LmNvbXBvbmVudF9pZCxcbiAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICAkOiBoYXNFcnJvciA9IE9iamVjdC5rZXlzKCRFcnJvclN0b3JlKS5sZW5ndGggPyB0cnVlIDogZmFsc2U7XG5cbiAgbGV0IGNvbnZlcnNhdGlvbk1lc3NhZ2VzOiBNZXNzYWdlW107XG4gICQ6IGNvbnZlcnNhdGlvbk1lc3NhZ2VzID0gY29udmVyc2F0aW9uTWFudWFsbHlQYXNzZWRcbiAgICA/IF90aGlzLm1lc3NhZ2VzXG4gICAgOiBjb252ZXJzYXRpb24/Lm1lc3NhZ2VzIHx8IFtdO1xuXG4gIGxldCBwYXJ0aWNpcGFudHM6IFBhcnRpY2lwYW50W10gPSBbXTtcbiAgJDogcGFydGljaXBhbnRzID0gY29udmVyc2F0aW9uPy5wYXJ0aWNpcGFudHMgfHwgW107XG5cbiAgbGV0IG1haW46IEVsZW1lbnQ7XG5cbiAgbGV0IHByZXZpb3VzUHJvcHMgPSAkJHByb3BzO1xuICAkOiB7XG4gICAgaWYgKEpTT04uc3RyaW5naWZ5KHByZXZpb3VzUHJvcHMpICE9PSBKU09OLnN0cmluZ2lmeSgkJHByb3BzKSkge1xuICAgICAgX3RoaXMgPSBidWlsZEludGVybmFsUHJvcHMoXG4gICAgICAgICQkcHJvcHMsXG4gICAgICAgIG1hbmlmZXN0LFxuICAgICAgICBkZWZhdWx0VmFsdWVNYXAsXG4gICAgICApIGFzIENvbnZlcnNhdGlvblByb3BlcnRpZXM7XG4gICAgICBwcmV2aW91c1Byb3BzID0gJCRwcm9wcztcbiAgICB9XG4gIH1cblxuICBsZXQgcXVlcnk6IENvbnZlcnNhdGlvblF1ZXJ5O1xuXG4gICQ6IHF1ZXJ5ID0ge1xuICAgIGFjY2Vzc190b2tlbixcbiAgICBjb21wb25lbnRfaWQ6IGlkLFxuICAgIHRocmVhZF9pZDogX3RoaXMudGhyZWFkX2lkLFxuICB9O1xuXG4gIGxldCBxdWVyeUtleTogc3RyaW5nO1xuICAkOiBxdWVyeUtleSA9IEpTT04uc3RyaW5naWZ5KHF1ZXJ5KTtcblxuICBsZXQgY29udmVyc2F0aW9uOiBDb252ZXJzYXRpb24gfCBudWxsID0gbnVsbDtcbiAgbGV0IHN0YXR1czogXCJsb2FkaW5nXCIgfCBcImxvYWRlZFwiIHwgXCJlcnJvclwiID0gXCJsb2FkaW5nXCI7XG5cbiAgJDoge1xuICAgIGlmIChpZCAmJiBfdGhpcy50aHJlYWRfaWQpIHtcbiAgICAgIHNldENvbnZlcnNhdGlvbigpO1xuICAgIH0gZWxzZSBpZiAoY29udmVyc2F0aW9uTWFudWFsbHlQYXNzZWQpIHtcbiAgICAgIHN0YXR1cyA9IFwibG9hZGVkXCI7XG4gICAgfVxuICB9XG5cbiAgJDoge1xuICAgIGlmIChcbiAgICAgICFjb252ZXJzYXRpb25NYW51YWxseVBhc3NlZCAmJlxuICAgICAgY29udmVyc2F0aW9uTWVzc2FnZXMubGVuZ3RoICYmXG4gICAgICAhY29udmVyc2F0aW9uTWVzc2FnZXMuZmlsdGVyKChtKSA9PiBtLmNvbnZlcnNhdGlvbikubGVuZ3RoXG4gICAgKSB7XG4gICAgICBjbGVhbkNvbnZlcnNhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIC8vI3JlZ2lvbiBDb250YWN0c1xuICBsZXQgY29udGFjdHM6IGFueSA9IG51bGw7XG4gIGxldCBjb250YWN0X3F1ZXJ5OiBDb250YWN0U2VhcmNoUXVlcnk7XG4gICQ6IGNvbnRhY3RfcXVlcnkgPSB7XG4gICAgY29tcG9uZW50X2lkOiBpZCxcbiAgICBhY2Nlc3NfdG9rZW4sXG4gICAgcXVlcnk6IFwiXCIsXG4gIH07XG5cbiAgJDogKGFzeW5jICgpID0+IHtcbiAgICBpZiAoIWNvbnRhY3RzICYmIGNvbnZlcnNhdGlvbikge1xuICAgICAgYXdhaXQgZ2V0Q29udGFjdHMoY29udmVyc2F0aW9uKTtcbiAgICB9XG4gIH0pKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udGFjdHMoY29udmVyc2F0aW9uOiBDb252ZXJzYXRpb24pIHtcbiAgICBjb25zdCBmcm9tUGFydGljaXBhbnRzID1cbiAgICAgIGNvbnZlcnNhdGlvbi5tZXNzYWdlcz8ucmVkdWNlPFJlY29yZDxzdHJpbmcsIFBhcnRpY2lwYW50Pj4oXG4gICAgICAgIChwYXJ0aWNpcGFudHMsIG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXJ0aWNpcGFudDogUGFydGljaXBhbnQgPSBtZXNzYWdlLmZyb21bMF07XG4gICAgICAgICAgcGFydGljaXBhbnRzW3BhcnRpY2lwYW50LmVtYWlsXSA9IHBhcnRpY2lwYW50O1xuICAgICAgICAgIHJldHVybiBwYXJ0aWNpcGFudHM7XG4gICAgICAgIH0sXG4gICAgICAgIHt9LFxuICAgICAgKSB8fCB7fTtcbiAgICBjb25zdCBmcm9tUGFydGljaXBhbnRzQXJyYXkgPVxuICAgICAgQXJyYXkuZnJvbShPYmplY3QudmFsdWVzKGZyb21QYXJ0aWNpcGFudHMpKSB8fCBbXTtcblxuICAgIGZvciAoY29uc3QgcGFydGljaXBhbnQgb2YgZnJvbVBhcnRpY2lwYW50c0FycmF5KSB7XG4gICAgICBjb25zdCBwYXJ0aWNpcGFudEVtYWlsID0gcGFydGljaXBhbnQuZW1haWw7XG4gICAgICBpZiAoIWNvbnRhY3RzKSB7XG4gICAgICAgIGNvbnRhY3RzID0ge307XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJ0aWNpcGFudEVtYWlsICYmICFjb250YWN0c1twYXJ0aWNpcGFudEVtYWlsXSkge1xuICAgICAgICBjb250YWN0c1twYXJ0aWNpcGFudEVtYWlsXSA9IGF3YWl0IGdldENvbnRhY3QocGFydGljaXBhbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vICNyZWdpb24gZ2V0IGNvbnRhY3QgZm9yIENvbnRhY3RJbWFnZVxuICBhc3luYyBmdW5jdGlvbiBnZXRDb250YWN0KHBhcnRpY2lwYW50OiBQYXJ0aWNpcGFudCkge1xuICAgIGNvbnRhY3RfcXVlcnlbXCJxdWVyeVwiXSA9IGA/ZW1haWw9JHtwYXJ0aWNpcGFudC5lbWFpbH1gO1xuXG4gICAgaWYgKGlkKSB7XG4gICAgICBsZXQgY29udGFjdCA9ICRDb250YWN0U3RvcmVbSlNPTi5zdHJpbmdpZnkoY29udGFjdF9xdWVyeSldO1xuICAgICAgaWYgKCFjb250YWN0KSB7XG4gICAgICAgIGNvbnRhY3QgPSBhd2FpdCBDb250YWN0U3RvcmUuYWRkQ29udGFjdChjb250YWN0X3F1ZXJ5KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250YWN0WzBdID8/IHBhcnRpY2lwYW50O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGFydGljaXBhbnQ7XG4gICAgfVxuICB9XG4gIC8vICNlbmRyZWdpb24gZ2V0IGNvbnRhY3QgZm9yIENvbnRhY3RJbWFnZVxuXG4gIC8vI2VuZHJlZ2lvbiBDb250YWN0c1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHNldENvbnZlcnNhdGlvbigpIHtcbiAgICBpZiAocXVlcnkuY29tcG9uZW50X2lkICYmIHF1ZXJ5LnRocmVhZF9pZCkge1xuICAgICAgc3RhdHVzID0gXCJsb2FkaW5nXCI7XG4gICAgICBjb252ZXJzYXRpb24gPSBhd2FpdCBDb252ZXJzYXRpb25TdG9yZS5nZXRDb252ZXJzYXRpb24ocXVlcnkpO1xuICAgICAgc3RhdHVzID0gXCJsb2FkZWRcIjtcbiAgICB9XG4gIH1cblxuICAvLyNyZWdpb24gUmVwbHlcbiAgaW50ZXJmYWNlIFJlcGx5IHtcbiAgICB0bzogUGFydGljaXBhbnRbXTtcbiAgICBmcm9tOiBQYXJ0aWNpcGFudFtdO1xuICAgIGNjOiBQYXJ0aWNpcGFudFtdO1xuICB9XG5cbiAgbGV0IHJlcGx5OiBSZXBseSA9IHtcbiAgICB0bzogW10sXG4gICAgZnJvbTogW10sXG4gICAgY2M6IFtdLFxuICB9O1xuXG4gIGxldCByZXBseUJvZHkgPSBcIlwiO1xuICBsZXQgbGFzdE1lc3NhZ2U6IE1lc3NhZ2U7XG4gIGxldCBsYXN0TWVzc2FnZUluaXRpYWxpc2VkID0gZmFsc2U7XG4gICQ6IGlmIChjb252ZXJzYXRpb25NZXNzYWdlcykge1xuICAgIGxhc3RNZXNzYWdlID0gY29udmVyc2F0aW9uTWVzc2FnZXNbY29udmVyc2F0aW9uTWVzc2FnZXMubGVuZ3RoIC0gMV07XG4gICAgbGFzdE1lc3NhZ2VJbml0aWFsaXNlZCA9IHRydWU7XG4gIH1cblxuICAvLyBJZiB5b3Ugc2VudCB0aGUgbGFzdCBtZXNzYWdlLCBpbml0aWxpemUgeW91ciBUTyB0byB0aGUgcmVwbHkncyBUTy5cbiAgLy8gSWYgc29tZW9uZSBlbHNlIHNlbnQgdGhlIGxhc3QgbWVzc2FnZSwgaW5pdGlhbGl6ZSB5b3VyIFRPIHRvIHRoZSByZXBseSdzIEZST00uXG4gICQ6IGlmIChsYXN0TWVzc2FnZSAmJiBsYXN0TWVzc2FnZUluaXRpYWxpc2VkKSB7XG4gICAgbGFzdE1lc3NhZ2VJbml0aWFsaXNlZCA9IGZhbHNlO1xuICAgIGlmIChfdGhpcy55b3U/LmVtYWlsX2FkZHJlc3MpIHtcbiAgICAgIGlmIChsYXN0TWVzc2FnZS5mcm9tWzBdLmVtYWlsID09PSBfdGhpcy55b3U/LmVtYWlsX2FkZHJlc3MpIHtcbiAgICAgICAgcmVwbHkudG8gPSBsYXN0TWVzc2FnZS50bztcbiAgICAgICAgcmVwbHkuY2MgPVxuICAgICAgICAgIGxhc3RNZXNzYWdlLmNjLmZpbHRlcihcbiAgICAgICAgICAgIChyZWNpcGllbnQpID0+IHJlY2lwaWVudC5lbWFpbCAhPT0gX3RoaXMueW91Py5lbWFpbF9hZGRyZXNzLFxuICAgICAgICAgICkgfHwgW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXBseS50byA9IGxhc3RNZXNzYWdlLmZyb207XG4gICAgICAgIHJlcGx5LmNjID0gWy4uLmxhc3RNZXNzYWdlLmNjLCAuLi5sYXN0TWVzc2FnZS50b10uZmlsdGVyKFxuICAgICAgICAgIChyZWNpcGllbnQpID0+IHJlY2lwaWVudC5lbWFpbCAhPT0gX3RoaXMueW91Py5lbWFpbF9hZGRyZXNzLFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICQ6IGlmIChfdGhpcy55b3U/LmVtYWlsX2FkZHJlc3MpIHtcbiAgICByZXBseS5mcm9tID0gW3sgbmFtZTogX3RoaXMueW91Py5uYW1lLCBlbWFpbDogX3RoaXMueW91Py5lbWFpbF9hZGRyZXNzIH1dO1xuICB9XG5cbiAgbGV0IHJlcGx5U3RhdHVzOiBzdHJpbmcgPSBcIlwiO1xuXG4gIC8vI2VuZHJlZ2lvbiBSZXBseVxuXG4gIGNvbnN0IENPTlZFUlNBVElPTl9FTkRQT0lOVF9NQVhfTUVTU0FHRVMgPSAyMDtcblxuICAvLyNyZWdpb24gQ2xlYW4gQ29udmVyc2F0aW9uXG4gIGZ1bmN0aW9uIGNsZWFuQ29udmVyc2F0aW9uKCkge1xuICAgIGZldGNoQ2xlYW5Db252ZXJzYXRpb25zKHtcbiAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgIGNvbXBvbmVudF9pZDogaWQsXG4gICAgICBtZXNzYWdlX2lkOiBjb252ZXJzYXRpb25NZXNzYWdlc1xuICAgICAgICAuc2xpY2UoLUNPTlZFUlNBVElPTl9FTkRQT0lOVF9NQVhfTUVTU0FHRVMpXG4gICAgICAgIC5tYXAoKG1lc3NhZ2UpID0+IG1lc3NhZ2UuaWQpLFxuICAgIH0pLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgIHJlc3VsdHMuZm9yRWFjaCgobXNnOiBNZXNzYWdlKSA9PiB7XG4gICAgICAgIGxldCBleGlzdGluZ01lc3NhZ2UgPSBjb252ZXJzYXRpb25NZXNzYWdlcy5maW5kKFxuICAgICAgICAgIChtZXNzYWdlKSA9PiBtZXNzYWdlLmlkID09PSBtc2cuaWQsXG4gICAgICAgICk7XG4gICAgICAgIGlmIChleGlzdGluZ01lc3NhZ2UpIHtcbiAgICAgICAgICBleGlzdGluZ01lc3NhZ2UuY29udmVyc2F0aW9uID0gbXNnLmNvbnZlcnNhdGlvbjtcbiAgICAgICAgICBleGlzdGluZ01lc3NhZ2UuYm9keSA9IG1zZy5ib2R5O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnZlcnNhdGlvbk1lc3NhZ2VzID0gY29udmVyc2F0aW9uTWVzc2FnZXM7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBfc2VuZE1lc3NhZ2UoZXZlbnQ6IEV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBkaXNwYXRjaEV2ZW50KFwic2VuZE1lc3NhZ2VDbGlja2VkXCIsIHtcbiAgICAgIGV2ZW50LFxuICAgICAgbWVzc2FnZTogeyAuLi5yZXBseSwgYm9keTogcmVwbHlCb2R5IH0sXG4gICAgfSk7XG4gICAgaWYgKCFjb252ZXJzYXRpb24gJiYgY29udmVyc2F0aW9uTWFudWFsbHlQYXNzZWQpIHtcbiAgICAgIHJlcGx5Qm9keSA9IFwiXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChyZXBseVN0YXR1cyAhPT0gXCJzZW5kaW5nXCIpIHtcbiAgICAgIHJlcGx5U3RhdHVzID0gXCJzZW5kaW5nXCI7XG4gICAgICBpZiAoIWNvbnZlcnNhdGlvbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZW5kTWVzc2FnZShcbiAgICAgICAgaWQsXG4gICAgICAgIHtcbiAgICAgICAgICBmcm9tOiByZXBseS5mcm9tLFxuICAgICAgICAgIHRvOiByZXBseS50byxcbiAgICAgICAgICBib2R5OiByZXBseUJvZHksXG4gICAgICAgICAgc3ViamVjdDogY29udmVyc2F0aW9uLnN1YmplY3QsXG4gICAgICAgICAgY2M6IHJlcGx5LmNjLFxuICAgICAgICAgIHJlcGx5X3RvX21lc3NhZ2VfaWQ6IGxhc3RNZXNzYWdlLmlkLFxuICAgICAgICAgIGJjYzogW10sXG4gICAgICAgIH0sXG4gICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgICkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnZlcnNhdGlvblF1ZXJ5ID0geyBxdWVyeUtleTogcXVlcnlLZXksIGRhdGE6IHJlcyB9O1xuICAgICAgICBjb252ZXJzYXRpb24gPSBDb252ZXJzYXRpb25TdG9yZS5hZGRNZXNzYWdlVG9UaHJlYWQoY29udmVyc2F0aW9uUXVlcnkpO1xuICAgICAgICByZXBseVN0YXR1cyA9IFwiXCI7XG4gICAgICAgIHJlcGx5Qm9keSA9IFwiXCI7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyNlbmRyZWdpb24gQ2xlYW4gQ29udmVyc2F0aW9uXG4gIGNvbnN0IHNjcm9sbFRvQm90dG9tID0gKCkgPT4ge1xuICAgIGxldCBzY3JvbGxIZWlnaHQ7XG4gICAgaWYgKG1haW4pIHtcbiAgICAgIHNjcm9sbEhlaWdodCA9IG1haW4uc2Nyb2xsSGVpZ2h0O1xuICAgICAgbWFpbi5zY3JvbGxUbyh7IHRvcDogc2Nyb2xsSGVpZ2h0LCBsZWZ0OiAwLCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgICB9XG4gIH07XG5cbiAgYWZ0ZXJVcGRhdGUoc2Nyb2xsVG9Cb3R0b20pO1xuXG4gIC8vICNyZWdpb24gbW9iaWxlIGhlYWRlciB2aWV3XG4gIGxldCBoZWFkZXJFeHBhbmRlZCA9IGZhbHNlO1xuICAvLyAjZW5kcmVnaW9uIG1vYmlsZSBoZWFkZXIgdmlld1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuICBAdXNlIFwic2FzczpsaXN0XCI7XG4gIEBpbXBvcnQgXCIuLi8uLi90aGVtaW5nL3Jlc2V0LnNjc3NcIjtcbiAgQGltcG9ydCBcIi4uLy4uL3RoZW1pbmcvYW5pbWF0aW9uLnNjc3NcIjtcbiAgQGltcG9ydCBcIi4uLy4uL3RoZW1pbmcvdmFyaWFibGVzLnNjc3NcIjtcbiAgQGltcG9ydCBcIi4uLy4uL3RoZW1pbmcvdGhlbWVzLnNjc3NcIjtcblxuICAkdGFibGV0QnJlYWtwb2ludDogNzY4cHg7XG4gICRkZXNrdG9wQnJlYWtwb2ludDogMTE0MHB4O1xuICAkY29udGFjdFdpZHRoOiAzMnB4O1xuICAkYXZhdGFyLXNpemU6IDMycHg7XG4gICRoZWFkZXJIb3Jpem9udGFsU3BhY2luZzogMzJweDtcbiAgJGF2YXRhci1ob3Jpem9udGFsLXNwYWNlOiAxcmVtO1xuXG4gIG1haW4ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udmVyc2F0aW9uLWJhY2tncm91bmQsIHZhcigtLWdyZXktbGlnaHQpKTtcbiAgfVxuICAubG9hZGluZyB7XG4gICAgQGluY2x1ZGUgcHJvZ3Jlc3MtYmFyKFxuICAgICAgdG9wLFxuICAgICAgY2FsYyh2YXIoLS1mcy0xNCkgKyAzMHB4KSxcbiAgICAgIGxlZnQsXG4gICAgICAwLFxuICAgICAgdmFyKC0tYmx1ZSksXG4gICAgICB2YXIoLS1ibHVlLWxpZ2h0ZXIpXG4gICAgKTtcbiAgICAmLnN0YXR1cyB7XG4gICAgICBib3JkZXItdG9wOiBjYWxjKHZhcigtLWZzLTE0KSArIDMwcHgpIHNvbGlkICNmZmY7XG4gICAgICBib3JkZXItYm90dG9tOiA1MHB4IHNvbGlkICNmZmY7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAodmFyKC0tZnMtMTQpICsgODBweCkpO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gIH1cbiAgaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbnZlcnNhdGlvbi1oZWFkZXItYmFja2dyb3VuZCwgdmFyKC0td2hpdGUpKTtcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1mcy0xNCk7XG4gICAgcGFkZGluZzogMTVweCAkaGVhZGVySG9yaXpvbnRhbFNwYWNpbmc7XG4gICAgZ2FwOiAkaGVhZGVySG9yaXpvbnRhbFNwYWNpbmc7XG4gICAgY29sb3I6IHZhcigtLWNvbnZlcnNhdGlvbi1oZWFkZXItY29sb3IsIHZhcigtLWJsYWNrKSk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy0xNCk7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjRweCk7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgJi5sb2FkaW5nIHtcbiAgICAgIEBpbmNsdWRlIHByb2dyZXNzLWJhcihcbiAgICAgICAgYm90dG9tLFxuICAgICAgICAwLFxuICAgICAgICBsZWZ0LFxuICAgICAgICAwLFxuICAgICAgICB2YXIoLS1ibHVlKSxcbiAgICAgICAgdmFyKC0tYmx1ZS1saWdodGVyKVxuICAgICAgKTtcbiAgICB9XG4gICAgJi5lcnJvciB7XG4gICAgICBAaW5jbHVkZSBwcm9ncmVzcy1iYXIoYm90dG9tLCAwLCBsZWZ0LCAwLCB2YXIoLS1yZWQpLCB2YXIoLS1yZWQpKTtcbiAgICAgICY6OmJlZm9yZSxcbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgYW5pbWF0aW9uOiBub25lO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5tb2JpbGUge1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICR0YWJsZXRCcmVha3BvaW50KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gKCN7JGhlYWRlckhvcml6b250YWxTcGFjaW5nfSAqIDIpKTtcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6ICRoZWFkZXJIb3Jpem9udGFsU3BhY2luZztcbiAgICAgICAgdG9wOiAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuICAgICAgJi5leHBhbmRlZCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdhcDogMTJweDtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICByb3RhdGU6IDE4MGRlZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAmLnRhYmxldCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICR0YWJsZXRCcmVha3BvaW50KSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5tZXNzYWdlcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDFyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBwYWRkaW5nOiA2MXB4IDAgNDlweCAwO1xuICAgIC5tZXNzYWdlIHtcbiAgICAgIG1heC13aWR0aDogbWluKFxuICAgICAgICA0MDBweCxcbiAgICAgICAgY2FsYygxMDAlIC0gI3skYXZhdGFyLXNpemV9IC0gI3skYXZhdGFyLWhvcml6b250YWwtc3BhY2V9KVxuICAgICAgKTtcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0QnJlYWtwb2ludCkge1xuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogJGRlc2t0b3BCcmVha3BvaW50KSB7XG4gICAgICAgIG1heC13aWR0aDogNzUycHg7XG4gICAgICB9XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgY29sdW1uLWdhcDogJGF2YXRhci1ob3Jpem9udGFsLXNwYWNlO1xuICAgICAgcm93LWdhcDogMC4yNXJlbTtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogJGNvbnRhY3RXaWR0aCAxZnI7XG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcbiAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgICAgIH1cbiAgICAgIC5ib2R5IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoXG4gICAgICAgICAgLS1jb252ZXJzYXRpb24tcGVlci1tZXNzYWdlLWJhY2tncm91bmQsXG4gICAgICAgICAgdmFyKC0td2hpdGUpXG4gICAgICAgICk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb252ZXJzYXRpb24tcGVlci1tZXNzYWdlLWNvbG9yLCB2YXIoLS1ibGFjaykpO1xuICAgICAgICBtYXgtaGVpZ2h0OiA1MHZoO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgLmNvbnRhY3Qge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuICAgICAgICBnYXA6IDAuNXJlbTtcbiAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICB3aWR0aDogJGF2YXRhci1zaXplO1xuICAgICAgICAgIGhlaWdodDogJGF2YXRhci1zaXplO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAvLyBwZXJmZWN0bHkgY2VudGVyIHRleHRcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5lbWFpbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgY29sb3I6ICM1NTU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnRpbWUge1xuICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWZzLTEyKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWdyZXktZGFyayk7XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuM2VtO1xuICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTsgLy8gbWFpbnRhaW5zIG5ld2xpbmVzIGZyb20gY29udmVyc2F0aW9uXG4gICAgICAgICYuYWZ0ZXIge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0xcmVtO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1ncmV5LWRhcmspO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLnlvdSB7XG4gICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAkY29udGFjdFdpZHRoO1xuICAgICAgICAuY29udGFjdCB7XG4gICAgICAgICAgZ3JpZC1yb3c6IDEvMjtcbiAgICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5IHtcbiAgICAgICAgICBvcmRlcjogMTtcbiAgICAgICAgICBncmlkLWNvbHVtbjogMSAvIDE7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWNvbnZlcnNhdGlvbi15b3VyLW1lc3NhZ2UtY29sb3IsIHZhcigtLXdoaXRlKSk7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKFxuICAgICAgICAgICAgLS1jb252ZXJzYXRpb24teW91ci1tZXNzYWdlLWJhY2tncm91bmQsXG4gICAgICAgICAgICB2YXIoLS1ibHVlKVxuICAgICAgICAgICk7XG4gICAgICAgICAgcC5hZnRlciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC50aW1lIHtcbiAgICAgICAgICBvcmRlcjogMTtcbiAgICAgICAgICBncmlkLWNvbHVtbjogMSAvIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJi5kb250LXNob3ctYXZhdGFycyB7XG4gICAgICAubWVzc2FnZSB7XG4gICAgICAgIGNvbHVtbi1nYXA6IDA7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMCAxZnI7XG4gICAgICAgIHdpZHRoOiBjbGFtcCgyMDBweCwgY2FsYygxMDAlIC0gNHJlbSksIDcwMHB4KTtcbiAgICAgICAgLmNvbnRhY3Qge1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgJi55b3Uge1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucmVwbHktYm94IHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGZvcm0ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDFyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaW5wdXQge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2ViZWJlYjtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDFyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWZzLTE2KTtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbnZlcnNhdGlvbi1yZXBseS1jb2xvciwgdmFyKC0tZ3JleS1ibGFjaykpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb252ZXJzYXRpb24tcmVwbHktYmFja2dyb3VuZCwgdmFyKC0td2hpdGUpKTtcbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb252ZXJzYXRpb24tcmVwbHktY29sb3IsIHZhcigtLWdyZXkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zdHlsZT5cblxuPG55bGFzLWVycm9yIHtpZH0gLz5cbjxtYWluIGJpbmQ6dGhpcz17bWFpbn0+XG4gIHsjaWYgaGFzRXJyb3J9XG4gICAgPG55bGFzLW1lc3NhZ2UtZXJyb3IgZXJyb3JfbWVzc2FnZT17JEVycm9yU3RvcmVbaWRdLm1lc3NhZ2V9IC8+XG4gIHsvaWZ9XG4gIHsjYXdhaXQgY29udmVyc2F0aW9ufVxuICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIHN0YXR1c1wiIC8+XG4gIHs6dGhlbiBffVxuICAgIDxoZWFkZXJcbiAgICAgIGNsYXNzPVwibW9iaWxlXCJcbiAgICAgIGNsYXNzOmxvYWRpbmc9eyEhKHN0YXR1cyA9PT0gXCJsb2FkaW5nXCIpfVxuICAgICAgY2xhc3M6ZXJyb3I9e2hhc0Vycm9yfVxuICAgICAgY2xhc3M6ZXhwYW5kZWQ9e2hlYWRlckV4cGFuZGVkfT5cbiAgICAgIHsjaWYgcmVwbHkudG8ubGVuZ3RofVxuICAgICAgICA8c3Bhbj50bzoge3JlcGx5LnRvWzBdLmVtYWlsfTwvc3Bhbj5cbiAgICAgIHsvaWZ9XG4gICAgICB7I2lmIHJlcGx5LnRvLmxlbmd0aCA+IDEgfHwgcmVwbHkuY2MubGVuZ3RofVxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb246Y2xpY2s9eygpID0+IChoZWFkZXJFeHBhbmRlZCA9ICFoZWFkZXJFeHBhbmRlZCl9XG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBzaG93aW5nIGFkZGl0aW9uYWwgZW1haWxzIGluIHRoaXMgdGhyZWFkXCI+XG4gICAgICAgICAgPFRvZ2dsZUljb24gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICB7L2lmfVxuICAgICAgeyNpZiBoZWFkZXJFeHBhbmRlZH1cbiAgICAgICAgPCEtLSBTaG93IHJlc3Qgb2YgdGhlIGVtYWlscyAtLT5cbiAgICAgICAgeyNlYWNoIHJlcGx5LnRvLnNsaWNlKDEpIGFzIGNvbnRhY3R9XG4gICAgICAgICAgPHNwYW4+dG86IHtjb250YWN0LmVtYWlsfTwvc3Bhbj5cbiAgICAgICAgey9lYWNofVxuICAgICAgICB7I2VhY2ggcmVwbHkuY2MgYXMgY29udGFjdH1cbiAgICAgICAgICA8c3Bhbj5jYzoge2NvbnRhY3QuZW1haWx9PC9zcGFuPlxuICAgICAgICB7L2VhY2h9XG4gICAgICB7L2lmfVxuICAgIDwvaGVhZGVyPlxuICAgIDxoZWFkZXJcbiAgICAgIGNsYXNzPVwidGFibGV0XCJcbiAgICAgIGNsYXNzOmVycm9yPXtoYXNFcnJvcn1cbiAgICAgIGNsYXNzOmxvYWRpbmc9eyEhKHN0YXR1cyA9PT0gXCJsb2FkaW5nXCIpfT5cbiAgICAgIHsjaWYgcmVwbHkudG8ubGVuZ3RofVxuICAgICAgICA8c3Bhbj50bzoge3JlcGx5LnRvLm1hcCgocCkgPT4gcC5lbWFpbCkuam9pbihcIiwgXCIpfSA8L3NwYW4+XG4gICAgICB7L2lmfVxuICAgICAgeyNpZiByZXBseS5jYy5sZW5ndGh9XG4gICAgICAgIDxzcGFuPmNjOiB7cmVwbHkuY2MubWFwKChwKSA9PiBwLmVtYWlsKS5qb2luKFwiLCBcIil9IDwvc3Bhbj5cbiAgICAgIHsvaWZ9XG4gICAgPC9oZWFkZXI+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJtZXNzYWdlcyB7X3RoaXMudGhlbWV9XCJcbiAgICAgIGNsYXNzOmRvbnQtc2hvdy1hdmF0YXJzPXshX3RoaXMuc2hvd19hdmF0YXJzfT5cbiAgICAgIHsjZWFjaCBjb252ZXJzYXRpb25NZXNzYWdlcyBhcyBtZXNzYWdlLCBpfVxuICAgICAgICB7I2F3YWl0IG1lc3NhZ2UuZnJvbVswXSB0aGVuIGZyb219XG4gICAgICAgICAgeyNhd2FpdCBmcm9tLmVtYWlsID09PSBfdGhpcy55b3UuZW1haWxfYWRkcmVzcyB0aGVuIGlzWW91fVxuICAgICAgICAgICAgeyNhd2FpdCBwYXJ0aWNpcGFudHMuZmluZEluZGV4KChwKSA9PiBwLmVtYWlsID09PSBmcm9tLmVtYWlsICYmIHAubmFtZSA9PT0gZnJvbS5uYW1lKSB0aGVuIHBhcnRpY2lwYW50SW5kZXh9XG4gICAgICAgICAgICAgIDxhcnRpY2xlXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJtZXNzYWdlIG1lbWJlci17cGFydGljaXBhbnRJbmRleCArIDF9XCJcbiAgICAgICAgICAgICAgICBjbGFzczp5b3U9e2lzWW91fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgeyNhd2FpdCBjb250YWN0c1tmcm9tLmVtYWlsXSB0aGVuIGNvbnRhY3R9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdmF0YXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bnlsYXMtY29udGFjdC1pbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRhY3RfcXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udGFjdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjMycHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMnB4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7L2F3YWl0fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib2R5XCI+XG4gICAgICAgICAgICAgICAgICB7I2lmIG1lc3NhZ2UuY29udmVyc2F0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8cD57bWVzc2FnZS5jb252ZXJzYXRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIGVsc2UgaWYgaXQncyB0aGVyZSBidXQgYmxhbmsgLS0+XG4gICAgICAgICAgICAgICAgICB7OmVsc2UgaWYgbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShcImNvbnZlcnNhdGlvblwiKSAmJiAhbWVzc2FnZS5jb252ZXJzYXRpb259XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgIHtAaHRtbCBET01QdXJpZnkuc2FuaXRpemUobWVzc2FnZS5ib2R5KX1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgezplbHNlIGlmIG1lc3NhZ2Uuc25pcHBldC5pbmNsdWRlcyhcIiBPbiBcIil9XG4gICAgICAgICAgICAgICAgICAgIDxwPnttZXNzYWdlLnNuaXBwZXQuc3BsaXQoXCJPbiBcIilbMF19PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImFmdGVyXCI+T24ge21lc3NhZ2Uuc25pcHBldC5zcGxpdChcIk9uIFwiKVsxXX08L3A+XG4gICAgICAgICAgICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICAgICAgICAgIDxwPnttZXNzYWdlLnNuaXBwZXR9PC9wPlxuICAgICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZVwiPlxuICAgICAgICAgICAgICAgICAge2dldERhdGUobmV3IERhdGUobWVzc2FnZS5kYXRlICogMTAwMCkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICB7L2F3YWl0fVxuICAgICAgICAgIHsvYXdhaXR9XG4gICAgICAgIHsvYXdhaXR9XG4gICAgICB7L2VhY2h9XG4gICAgPC9kaXY+XG4gICAgeyNpZiBfdGhpcy5zaG93X3JlcGx5fVxuICAgICAgPGRpdiBjbGFzcz1cInJlcGx5LWJveFwiPlxuICAgICAgICA8Zm9ybSBvbjpzdWJtaXQ9e19zZW5kTWVzc2FnZX0+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cInNlbmQtcmVzcG9uc2VcIiBjbGFzcz1cInNyLW9ubHlcIj5cbiAgICAgICAgICAgIFR5cGUgYW5kIHNlbmQgYSByZXNwb25zZVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cInNlbmQtcmVzcG9uc2VcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGEgUmVzcG9uc2VcIlxuICAgICAgICAgICAgYmluZDp2YWx1ZT17cmVwbHlCb2R5fSAvPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFyZXBseS50by5sZW5ndGh9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtgU2VuZCR7cmVwbHlTdGF0dXMgPyBcImluZ1wiIDogXCJcIn0gZW1haWxgfT5cbiAgICAgICAgICAgIHsjaWYgcmVwbHlTdGF0dXMgPT09IFwic2VuZGluZ1wifS4uLns6ZWxzZX1cbiAgICAgICAgICAgICAgPFNlbmRJY29uIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICB7L2lmfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICB7L2lmfVxuICB7OmNhdGNoIGVycm9yfVxuICAgIDxueWxhcy1tZXNzYWdlLWVycm9yIGVycm9yX21lc3NhZ2U9e2Vycm9yLm1lc3NhZ2V9IC8+XG4gIHsvYXdhaXR9XG48L21haW4+XG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZSIsIl9fc3ByZWFkUHJvcHMiLCJfX3NwcmVhZFZhbHVlcyIsInRoaXMiLCJET01QdXJpZnkuc2FuaXRpemUiXSwibWFwcGluZ3Mi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
