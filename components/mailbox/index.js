(function (Ri, k) {
  typeof exports == "object" && typeof module != "undefined"
    ? (module.exports = k())
    : typeof define == "function" && define.amd
    ? define(k)
    : ((Ri = typeof globalThis != "undefined" ? globalThis : Ri || self),
      (Ri.app = k()));
})(this, function () {
  "use strict";
  const Ri = window.customElements.define.bind(window.customElements);
  window.customElements.define = (i, ...e) => {
    if (!customElements.get(i)) return Ri(i, ...e);
  };
  function k() {}
  function ie(i, e) {
    for (const t in e) i[t] = e[t];
    return i;
  }
  function Aa(i) {
    return i && typeof i == "object" && typeof i.then == "function";
  }
  function fn(i) {
    return i();
  }
  function Tn() {
    return Object.create(null);
  }
  function ot(i) {
    i.forEach(fn);
  }
  function un(i) {
    return typeof i == "function";
  }
  function Ue(i, e) {
    return i != i
      ? e == e
      : i !== e || (i && typeof i == "object") || typeof i == "function";
  }
  let Qi;
  function Cn(i, e) {
    return (
      Qi || (Qi = document.createElement("a")), (Qi.href = e), i === Qi.href
    );
  }
  function Sa(i, e) {
    return i != i ? e == e : i !== e;
  }
  function An(i) {
    return Object.keys(i).length === 0;
  }
  function Sn(i, ...e) {
    if (i == null) return k;
    const t = i.subscribe(...e);
    return t.unsubscribe ? () => t.unsubscribe() : t;
  }
  function Wt(i, e, t) {
    i.$$.on_destroy.push(Sn(e, t));
  }
  function ve(i) {
    const e = {};
    for (const t in i) t[0] !== "$" && (e[t] = i[t]);
    return e;
  }
  let qi = !1;
  function Oa() {
    qi = !0;
  }
  function La() {
    qi = !1;
  }
  function Ma(i, e, t, n) {
    for (; i < e; ) {
      const r = i + ((e - i) >> 1);
      t(r) <= n ? (i = r + 1) : (e = r);
    }
    return i;
  }
  function Na(i) {
    if (i.hydrate_init) return;
    i.hydrate_init = !0;
    let e = i.childNodes;
    if (i.nodeName === "HEAD") {
      const o = [];
      for (let c = 0; c < e.length; c++) {
        const d = e[c];
        d.claim_order !== void 0 && o.push(d);
      }
      e = o;
    }
    const t = new Int32Array(e.length + 1),
      n = new Int32Array(e.length);
    t[0] = -1;
    let r = 0;
    for (let o = 0; o < e.length; o++) {
      const c = e[o].claim_order,
        d =
          (r > 0 && e[t[r]].claim_order <= c
            ? r + 1
            : Ma(1, r, (h) => e[t[h]].claim_order, c)) - 1;
      n[o] = t[d] + 1;
      const m = d + 1;
      (t[m] = o), (r = Math.max(m, r));
    }
    const a = [],
      l = [];
    let s = e.length - 1;
    for (let o = t[r] + 1; o != 0; o = n[o - 1]) {
      for (a.push(e[o - 1]); s >= o; s--) l.push(e[s]);
      s--;
    }
    for (; s >= 0; s--) l.push(e[s]);
    a.reverse(), l.sort((o, c) => o.claim_order - c.claim_order);
    for (let o = 0, c = 0; o < l.length; o++) {
      for (; c < a.length && l[o].claim_order >= a[c].claim_order; ) c++;
      const d = c < a.length ? a[c] : null;
      i.insertBefore(l[o], d);
    }
  }
  function y(i, e) {
    i.appendChild(e);
  }
  function fe(i, e) {
    if (qi) {
      for (
        Na(i),
          (i.actual_end_child === void 0 ||
            (i.actual_end_child !== null &&
              i.actual_end_child.parentElement !== i)) &&
            (i.actual_end_child = i.firstChild);
        i.actual_end_child !== null &&
        i.actual_end_child.claim_order === void 0;

      )
        i.actual_end_child = i.actual_end_child.nextSibling;
      e !== i.actual_end_child
        ? (e.claim_order !== void 0 || e.parentNode !== i) &&
          i.insertBefore(e, i.actual_end_child)
        : (i.actual_end_child = e.nextSibling);
    } else (e.parentNode !== i || e.nextSibling !== null) && i.appendChild(e);
  }
  function g(i, e, t) {
    i.insertBefore(e, t || null);
  }
  function et(i, e, t) {
    qi && !t
      ? fe(i, e)
      : (e.parentNode !== i || e.nextSibling != t) &&
        i.insertBefore(e, t || null);
  }
  function u(i) {
    i.parentNode.removeChild(i);
  }
  function bt(i, e) {
    for (let t = 0; t < i.length; t += 1) i[t] && i[t].d(e);
  }
  function v(i) {
    return document.createElement(i);
  }
  function W(i) {
    return document.createElementNS("http://www.w3.org/2000/svg", i);
  }
  function J(i) {
    return document.createTextNode(i);
  }
  function z() {
    return J(" ");
  }
  function Be() {
    return J("");
  }
  function Y(i, e, t, n) {
    return i.addEventListener(e, t, n), () => i.removeEventListener(e, t, n);
  }
  function Da(i) {
    return function (e) {
      return e.preventDefault(), i.call(this, e);
    };
  }
  function Ke(i) {
    return function (e) {
      return e.stopPropagation(), i.call(this, e);
    };
  }
  function f(i, e, t) {
    t == null
      ? i.removeAttribute(e)
      : i.getAttribute(e) !== t && i.setAttribute(e, t);
  }
  function Te(i, e) {
    for (const t in e) f(i, t, e[t]);
  }
  function S(i, e, t) {
    e in i
      ? (i[e] = typeof i[e] == "boolean" && t === "" ? !0 : t)
      : f(i, e, t);
  }
  function K(i) {
    return Array.from(i.childNodes);
  }
  function Pa(i) {
    i.claim_info === void 0 &&
      (i.claim_info = { last_index: 0, total_claimed: 0 });
  }
  function ja(i, e, t, n, r = !1) {
    Pa(i);
    const a = (() => {
      for (let l = i.claim_info.last_index; l < i.length; l++) {
        const s = i[l];
        if (e(s)) {
          const o = t(s);
          return (
            o === void 0 ? i.splice(l, 1) : (i[l] = o),
            r || (i.claim_info.last_index = l),
            s
          );
        }
      }
      for (let l = i.claim_info.last_index - 1; l >= 0; l--) {
        const s = i[l];
        if (e(s)) {
          const o = t(s);
          return (
            o === void 0 ? i.splice(l, 1) : (i[l] = o),
            r
              ? o === void 0 && i.claim_info.last_index--
              : (i.claim_info.last_index = l),
            s
          );
        }
      }
      return n();
    })();
    return (
      (a.claim_order = i.claim_info.total_claimed),
      (i.claim_info.total_claimed += 1),
      a
    );
  }
  function Ra(i, e, t, n) {
    return ja(
      i,
      (r) => r.nodeName === e,
      (r) => {
        const a = [];
        for (let l = 0; l < r.attributes.length; l++) {
          const s = r.attributes[l];
          t[s.name] || a.push(s.name);
        }
        a.forEach((l) => r.removeAttribute(l));
      },
      () => n(e),
    );
  }
  function Q(i, e, t) {
    return Ra(i, e, t, W);
  }
  function pe(i, e) {
    (e = "" + e), i.wholeText !== e && (i.data = e);
  }
  function bi(i, e, t, n) {
    t === null
      ? i.style.removeProperty(e)
      : i.style.setProperty(e, t, n ? "important" : "");
  }
  function we(i, e, t) {
    i.classList[t ? "add" : "remove"](e);
  }
  class mn {
    constructor() {
      this.e = this.n = null;
    }
    c(e) {
      this.h(e);
    }
    m(e, t, n = null) {
      this.e || ((this.e = v(t.nodeName)), (this.t = t), this.c(e)), this.i(n);
    }
    h(e) {
      (this.e.innerHTML = e), (this.n = Array.from(this.e.childNodes));
    }
    i(e) {
      for (let t = 0; t < this.n.length; t += 1) g(this.t, this.n[t], e);
    }
    p(e) {
      this.d(), this.h(e), this.i(this.a);
    }
    d() {
      this.n.forEach(u);
    }
  }
  function ni(i) {
    const e = {};
    for (const t of i) e[t.name] = t.value;
    return e;
  }
  let Ii;
  function Ft(i) {
    Ii = i;
  }
  function Zt() {
    if (!Ii)
      throw new Error("Function called outside component initialization");
    return Ii;
  }
  function Ia(i) {
    Zt().$$.before_update.push(i);
  }
  function hn(i) {
    Zt().$$.on_mount.push(i);
  }
  const Fi = [],
    xi = [],
    $i = [],
    On = [],
    Ln = Promise.resolve();
  let _n = !1;
  function Mn() {
    _n || ((_n = !0), Ln.then(re));
  }
  function Nn() {
    return Mn(), Ln;
  }
  function pn(i) {
    $i.push(i);
  }
  const gn = new Set();
  let en = 0;
  function re() {
    const i = Ii;
    do {
      for (; en < Fi.length; ) {
        const e = Fi[en];
        en++, Ft(e), Fa(e.$$);
      }
      for (Ft(null), Fi.length = 0, en = 0; xi.length; ) xi.pop()();
      for (let e = 0; e < $i.length; e += 1) {
        const t = $i[e];
        gn.has(t) || (gn.add(t), t());
      }
      $i.length = 0;
    } while (Fi.length);
    for (; On.length; ) On.pop()();
    (_n = !1), gn.clear(), Ft(i);
  }
  function Fa(i) {
    if (i.fragment !== null) {
      i.update(), ot(i.before_update);
      const e = i.dirty;
      (i.dirty = [-1]),
        i.fragment && i.fragment.p(i.ctx, e),
        i.after_update.forEach(pn);
    }
  }
  const tn = new Set();
  let ri;
  function Ae() {
    ri = { r: 0, c: [], p: ri };
  }
  function Se() {
    ri.r || ot(ri.c), (ri = ri.p);
  }
  function A(i, e) {
    i && i.i && (tn.delete(i), i.i(e));
  }
  function F(i, e, t, n) {
    if (i && i.o) {
      if (tn.has(i)) return;
      tn.add(i),
        ri.c.push(() => {
          tn.delete(i), n && (t && i.d(1), n());
        }),
        i.o(e);
    }
  }
  function vt(i, e) {
    const t = (e.token = {});
    function n(r, a, l, s) {
      if (e.token !== t) return;
      e.resolved = s;
      let o = e.ctx;
      l !== void 0 && ((o = o.slice()), (o[l] = s));
      const c = r && (e.current = r)(o);
      let d = !1;
      e.block &&
        (e.blocks
          ? e.blocks.forEach((m, h) => {
              h !== a &&
                m &&
                (Ae(),
                F(m, 1, 1, () => {
                  e.blocks[h] === m && (e.blocks[h] = null);
                }),
                Se());
            })
          : e.block.d(1),
        c.c(),
        A(c, 1),
        c.m(e.mount(), e.anchor),
        (d = !0)),
        (e.block = c),
        e.blocks && (e.blocks[a] = c),
        d && re();
    }
    if (Aa(i)) {
      const r = Zt();
      if (
        (i.then(
          (a) => {
            Ft(r), n(e.then, 1, e.value, a), Ft(null);
          },
          (a) => {
            if ((Ft(r), n(e.catch, 2, e.error, a), Ft(null), !e.hasCatch))
              throw a;
          },
        ),
        e.current !== e.pending)
      )
        return n(e.pending, 0), !0;
    } else {
      if (e.current !== e.then) return n(e.then, 1, e.value, i), !0;
      e.resolved = i;
    }
  }
  function li(i, e, t) {
    const n = e.slice(),
      { resolved: r } = i;
    i.current === i.then && (n[i.value] = r),
      i.current === i.catch && (n[i.error] = r),
      i.block.p(n, t);
  }
  function tt(i, e) {
    const t = {},
      n = {},
      r = { $$scope: 1 };
    let a = i.length;
    for (; a--; ) {
      const l = i[a],
        s = e[a];
      if (s) {
        for (const o in l) o in s || (n[o] = 1);
        for (const o in s) r[o] || ((t[o] = s[o]), (r[o] = 1));
        i[a] = s;
      } else for (const o in l) r[o] = 1;
    }
    for (const l in n) l in t || (t[l] = void 0);
    return t;
  }
  function He(i) {
    i && i.c();
  }
  function Fe(i, e, t, n) {
    const { fragment: r, on_mount: a, on_destroy: l, after_update: s } = i.$$;
    r && r.m(e, t),
      n ||
        pn(() => {
          const o = a.map(fn).filter(un);
          l ? l.push(...o) : ot(o), (i.$$.on_mount = []);
        }),
      s.forEach(pn);
  }
  function Ie(i, e) {
    const t = i.$$;
    t.fragment !== null &&
      (ot(t.on_destroy),
      t.fragment && t.fragment.d(e),
      (t.on_destroy = t.fragment = null),
      (t.ctx = []));
  }
  function xa(i, e) {
    i.$$.dirty[0] === -1 && (Fi.push(i), Mn(), i.$$.dirty.fill(0)),
      (i.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
  }
  function We(i, e, t, n, r, a, l, s = [-1]) {
    const o = Ii;
    Ft(i);
    const c = (i.$$ = {
      fragment: null,
      ctx: null,
      props: a,
      update: k,
      not_equal: r,
      bound: Tn(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(e.context || (o ? o.$$.context : [])),
      callbacks: Tn(),
      dirty: s,
      skip_bound: !1,
      root: e.target || o.$$.root,
    });
    l && l(c.root);
    let d = !1;
    if (
      ((c.ctx = t
        ? t(i, e.props || {}, (m, h, ...b) => {
            const _ = b.length ? b[0] : h;
            return (
              c.ctx &&
                r(c.ctx[m], (c.ctx[m] = _)) &&
                (!c.skip_bound && c.bound[m] && c.bound[m](_), d && xa(i, m)),
              h
            );
          })
        : []),
      c.update(),
      (d = !0),
      ot(c.before_update),
      (c.fragment = n ? n(c.ctx) : !1),
      e.target)
    ) {
      if (e.hydrate) {
        Oa();
        const m = K(e.target);
        c.fragment && c.fragment.l(m), m.forEach(u);
      } else c.fragment && c.fragment.c();
      e.intro && A(i.$$.fragment),
        Fe(i, e.target, e.anchor, e.customElement),
        La(),
        re();
    }
    Ft(o);
  }
  let Jt;
  typeof HTMLElement == "function" &&
    (Jt = class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        const { on_mount: i } = this.$$;
        this.$$.on_disconnect = i.map(fn).filter(un);
        for (const e in this.$$.slotted) this.appendChild(this.$$.slotted[e]);
      }
      attributeChangedCallback(i, e, t) {
        this[i] = t;
      }
      disconnectedCallback() {
        ot(this.$$.on_disconnect);
      }
      $destroy() {
        Ie(this, 1), (this.$destroy = k);
      }
      $on(i, e) {
        const t = this.$$.callbacks[i] || (this.$$.callbacks[i] = []);
        return (
          t.push(e),
          () => {
            const n = t.indexOf(e);
            n !== -1 && t.splice(n, 1);
          }
        );
      }
      $set(i) {
        this.$$set &&
          !An(i) &&
          ((this.$$.skip_bound = !0), this.$$set(i), (this.$$.skip_bound = !1));
      }
    });
  class it {
    $destroy() {
      Ie(this, 1), (this.$destroy = k);
    }
    $on(e, t) {
      const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
      return (
        n.push(t),
        () => {
          const r = n.indexOf(t);
          r !== -1 && n.splice(r, 1);
        }
      );
    }
    $set(e) {
      this.$$set &&
        !An(e) &&
        ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
    }
  }
  const vi = [];
  function Ua(i, e) {
    return { subscribe: Nt(i, e).subscribe };
  }
  function Nt(i, e = k) {
    let t;
    const n = new Set();
    function r(s) {
      if (Ue(i, s) && ((i = s), t)) {
        const o = !vi.length;
        for (const c of n) c[1](), vi.push(c, i);
        if (o) {
          for (let c = 0; c < vi.length; c += 2) vi[c][0](vi[c + 1]);
          vi.length = 0;
        }
      }
    }
    function a(s) {
      r(s(i));
    }
    function l(s, o = k) {
      const c = [s, o];
      return (
        n.add(c),
        n.size === 1 && (t = e(r) || k),
        s(i),
        () => {
          n.delete(c), n.size === 0 && (t(), (t = null));
        }
      );
    }
    return { set: r, update: a, subscribe: l };
  }
  function Ba(i, e, t) {
    const n = !Array.isArray(i),
      r = n ? [i] : i,
      a = e.length < 2;
    return Ua(t, (l) => {
      let s = !1;
      const o = [];
      let c = 0,
        d = k;
      const m = () => {
          if (c) return;
          d();
          const b = e(n ? o[0] : o, l);
          a ? l(b) : (d = un(b) ? b : k);
        },
        h = r.map((b, _) =>
          Sn(
            b,
            (O) => {
              (o[_] = O), (c &= ~(1 << _)), s && m();
            },
            () => {
              c |= 1 << _;
            },
          ),
        );
      return (
        (s = !0),
        m(),
        function () {
          ot(h), d();
        }
      );
    });
  }
  function Ha() {
    return Nt({});
  }
  const nn = Ha();
  var za = Object.defineProperty,
    Va = Object.defineProperties,
    Ga = Object.getOwnPropertyDescriptors,
    Dn = Object.getOwnPropertySymbols,
    Wa = Object.prototype.hasOwnProperty,
    Za = Object.prototype.propertyIsEnumerable,
    Pn = (i, e, t) =>
      e in i
        ? za(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (i[e] = t),
    Ja = (i, e) => {
      for (var t in e || (e = {})) Wa.call(e, t) && Pn(i, t, e[t]);
      if (Dn) for (var t of Dn(e)) Za.call(e, t) && Pn(i, t, e[t]);
      return i;
    },
    Ya = (i, e) => Va(i, Ga(e));
  async function nt(i) {
    var e;
    if (!i.ok) {
      const t = await i.json().then((a) => a),
        n =
          ((e = t == null ? void 0 : t.response) == null ? void 0 : e.error) ||
          (t == null ? void 0 : t.message),
        r = new Error(n);
      return (
        (r.name = t.name), Promise.reject({ message: r, statusCode: i.status })
      );
    }
    return i.json();
  }
  function rt(i = { component_id: "" }) {
    return {
      method: i.method || "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Component-Id": i.component_id || "",
        "X-Access-Token": i.access_token || "",
      },
      body: i.body ? JSON.stringify(i.body) : void 0,
    };
  }
  function at(i, e) {
    throw (console.error(e), nn.update((t) => Ya(Ja({}, t), { [i]: e })), e);
  }
  const jn = { "001": "", "002": "ireland-", "003": "canada-" };
  function lt(i) {
    let e = "";
    if (i.substring(3, 4) === "-") {
      const n = i.substring(0, 3);
      typeof jn[n] != "undefined" && (e = jn[n]);
    }
    return `https://${e}web-components.nylas.com/middleware`;
  }
  function Yt(i) {}
  function Ka(i) {
    return Object.keys(i)
      .reduce(
        (e, t) => (i[t] !== void 0 && e.append(t, i[t]), e),
        new URLSearchParams(),
      )
      .toString();
  }
  const Xa = async (i, e) => {
      const t = `${lt(i.component_id)}/contact-list/contacts?${Ka(e)}`,
        n = await fetch(
          t,
          rt({ component_id: i.component_id, access_token: i.access_token }),
        )
          .then((r) => nt(r))
          .then((r) => r.response)
          .catch((r) => at(i.component_id, r));
      return n != null ? n : [];
    },
    Qa = async (i) => {
      const e = await fetch(
        `${lt(i.component_id)}/contacts${i.query}`,
        rt({ component_id: i.component_id, access_token: i.access_token }),
      )
        .then((t) => nt(t))
        .then((t) => t.response)
        .catch((t) => at(i.component_id, t));
      return e != null ? e : [];
    },
    qa = async (i, e) =>
      await fetch(
        `${lt(i.component_id)}/contacts/${e}/picture`,
        rt({ component_id: i.component_id, access_token: i.access_token }),
      )
        .then((t) => nt(t))
        .then((t) => t.response)
        .catch((t) => at(i.component_id, t));
  var $a = Object.defineProperty,
    eo = Object.defineProperties,
    to = Object.getOwnPropertyDescriptors,
    Rn = Object.getOwnPropertySymbols,
    io = Object.prototype.hasOwnProperty,
    no = Object.prototype.propertyIsEnumerable,
    In = (i, e, t) =>
      e in i
        ? $a(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (i[e] = t),
    Fn = (i, e) => {
      for (var t in e || (e = {})) io.call(e, t) && In(i, t, e[t]);
      if (Rn) for (var t of Rn(e)) no.call(e, t) && In(i, t, e[t]);
      return i;
    },
    xn = (i, e) => eo(i, to(e));
  const Un = (i, e, t) => {
    if (i.thread_ids) {
      const r = i.thread_ids.slice(t, t + e);
      return Promise.all(
        r.map(async (a) => {
          const l = `${lt(i.component_id)}/threads/${a}?view=expanded`;
          return await fetch(l, rt(i))
            .then((s) => nt(s))
            .then((s) => s.response)
            .then((s) =>
              xn(Fn({}, s), {
                messages: s.messages.filter(
                  (o) => o.from.length !== 0 || o.to.length !== 0,
                ),
              }),
            )
            .catch((s) => at(i.component_id, s));
        }),
      );
    }
    let n = `${lt(
      i.component_id,
    )}/threads?view=expanded&not_in=trash&limit=${e}&offset=${t}`;
    return (
      i.query &&
        Object.entries(i.query).forEach(
          (r) => (n = n.concat(`&${r[0]}=${r[1]}`)),
        ),
      fetch(n, rt(i))
        .then((r) => nt(r))
        .then((r) => r.response)
        .then((r) =>
          r.map((a) =>
            xn(Fn({}, a), {
              messages: a.messages.filter(
                (l) => l.from.length !== 0 || l.to.length !== 0,
              ),
            }),
          ),
        )
        .catch((r) => at(i.component_id, r))
    );
  };
  function Bn(i) {
    let e = `${lt(
      i.component_id,
    )}/threads?view=expanded&not_in=trash&view=count`;
    return (
      i.query &&
        Object.entries(i.query).forEach(
          (t) => (e = e.concat(`&${t[0]}=${t[1]}`)),
        ),
      i.keywordToSearch && (e += `&q=${i.keywordToSearch}`),
      fetch(e, rt(i))
        .then((t) => nt(t))
        .then((t) => t.response.count)
    );
  }
  const ro = (i) => {
      const e = `${lt(i.component_id)}/threads/search?q=${
        i.keywordToSearch
      }&view=expanded&limit=${i.query.limit}&offset=${i.query.offset}`;
      return fetch(e, rt(i))
        .then(async (t) => nt(t))
        .then((t) => t.response)
        .catch((t) => at(i.component_id, t));
    },
    lo = async (i) =>
      await fetch(
        `${lt(i.component_id)}/threads/${i.thread_id}?view=expanded`,
        rt({ component_id: i.component_id, access_token: i.access_token }),
      )
        .then((t) => nt(t))
        .then((t) => t.response)
        .catch((t) => at(i.component_id, t)),
    Hn = (i, e) =>
      fetch(
        `${lt(i.component_id)}/threads/${e.id}`,
        rt({
          method: "PUT",
          component_id: i.component_id,
          access_token: i.access_token,
          body: {
            unread: e.unread,
            starred: e.starred,
            folder_id: e.folder_id,
            label_ids: e.label_ids,
          },
        }),
      )
        .then((t) => nt(t))
        .then((t) => t.response)
        .catch((t) => at(i.component_id, t)),
    ao = async (i, e) =>
      await fetch(`${lt(i)}/manifest`, rt({ access_token: e, component_id: i }))
        .then(nt)
        .then((t) => t.component.theming)
        .catch((t) => at(i, t));
  async function bn(i, e, t) {
    const n = `${lt(i)}/messages/${e.id}`,
      r = rt({
        method: "PUT",
        component_id: i,
        access_token: t,
        body: { folder_id: e.folder_id, label_ids: e.label_ids },
      });
    return await fetch(n, r)
      .then((a) => nt(a))
      .then((a) => a.response)
      .catch((a) => at(i, a));
  }
  const zn = async (i, e) => {
      const t = `${lt(i.component_id)}/messages/${e}`;
      return await fetch(t, rt(i))
        .then((n) => nt(n))
        .then((n) => n.response)
        .catch((n) => at(i.component_id, n));
    },
    oo = async (i) => {
      const e = `${lt(i.component_id)}/messages/${i.message_id}`;
      return await fetch(e, rt(i))
        .then((t) => nt(t))
        .then((t) => t.response)
        .catch((t) => at(i.component_id, t));
    },
    Vn = async (i) =>
      await fetch(`${lt(i.component_id)}/account`, rt(i))
        .then((t) => nt(t))
        .then((t) => t.response)
        .catch((t) => at(i.component_id, t)),
    Gn = (i) =>
      fetch(
        `${lt(i.component_id)}/neural/conversation`,
        rt({
          method: "PUT",
          access_token: i.access_token,
          component_id: i.component_id,
          body: { message_id: i.message_id },
        }),
      )
        .then(async (e) => (await nt(e)).response)
        .catch((e) => at(i.component_id, e));
  var so = Object.defineProperty,
    Wn = Object.getOwnPropertySymbols,
    co = Object.prototype.hasOwnProperty,
    fo = Object.prototype.propertyIsEnumerable,
    Zn = (i, e, t) =>
      e in i
        ? so(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (i[e] = t),
    Jn = (i, e) => {
      for (var t in e || (e = {})) co.call(e, t) && Zn(i, t, e[t]);
      if (Wn) for (var t of Wn(e)) fo.call(e, t) && Zn(i, t, e[t]);
      return i;
    };
  const uo = async (i) =>
      fetch(
        `${lt(i.component_id)}/calendars/availability`,
        rt({
          method: "POST",
          component_id: i.component_id,
          access_token: i.access_token,
          body: i.body,
        }),
      )
        .then(async (e) => {
          const t = await nt(e);
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
        .catch((e) => at(i.component_id, e)),
    mo = async (i) =>
      fetch(
        `${lt(i.component_id)}/calendars/availability/consecutive`,
        rt({
          method: "POST",
          component_id: i.component_id,
          access_token: i.access_token,
          body: i.body,
        }),
      )
        .then(async (e) => {
          var t;
          const r =
              ((t = (await nt(e)).response) == null
                ? void 0
                : t.map(
                    (s) => (
                      (s = s.map(
                        (o) => (
                          (o.start_time = new Date(o.start_time * 1e3)),
                          (o.end_time = new Date(o.end_time * 1e3)),
                          o
                        ),
                      )),
                      s
                    ),
                  )) || [],
            a = ho(r, i.body.events);
          return _o(a);
        })
        .catch((e) => at(i.component_id, e));
  function ho(i, e) {
    return i.map((t) =>
      t.map((n) =>
        Jn(
          Jn({}, n),
          e.find(
            (r) =>
              r.participantEmails.length === n.emails.length &&
              r.participantEmails.every((a) => n.emails.includes(a)),
          ),
        ),
      ),
    );
  }
  function _o(i) {
    const e = new Set();
    return i.filter((t) => {
      const n = `${t[0].start_time}_${t[t.length - 1].end_time}`;
      return e.has(n) ? !1 : (e.add(n), !0);
    });
  }
  var po = Object.defineProperty,
    Yn = Object.getOwnPropertySymbols,
    go = Object.prototype.hasOwnProperty,
    bo = Object.prototype.propertyIsEnumerable,
    Kn = (i, e, t) =>
      e in i
        ? po(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (i[e] = t),
    vo = (i, e) => {
      for (var t in e || (e = {})) go.call(e, t) && Kn(i, t, e[t]);
      if (Yn) for (var t of Yn(e)) bo.call(e, t) && Kn(i, t, e[t]);
      return i;
    };
  function wo() {
    const i = (t, n) => {
        var r, a;
        const l = JSON.parse(n),
          s = vo({}, l);
        if (
          (delete s.forceReload,
          (n = JSON.stringify(s)),
          !(
            !l.component_id ||
            !((r = l == null ? void 0 : l.body) == null
              ? void 0
              : r.start_time) ||
            !((a = l == null ? void 0 : l.body) == null ? void 0 : a.end_time)
          ))
        ) {
          if (!t[n] || l.forceReload) {
            const o = uo(l);
            e.update((c) => ((c[n] = o), c)), (t[n] = o);
          }
          return t[n];
        }
      },
      e = Nt(new Proxy({}, { get: i }));
    return e;
  }
  wo();
  function yo() {
    const i = (t, n) => {
        var r, a;
        const l = JSON.parse(n);
        if (
          !(
            !l.component_id ||
            !((r = l == null ? void 0 : l.body) == null
              ? void 0
              : r.start_time) ||
            !((a = l == null ? void 0 : l.body) == null ? void 0 : a.end_time)
          )
        ) {
          if (!t[n]) {
            const s = mo(l);
            e.update((o) => ((o[n] = s), o)), (t[n] = s);
          }
          return t[n];
        }
      },
      e = Nt(new Proxy({}, { get: i }));
    return e;
  }
  yo();
  var ko = Object.defineProperty,
    Xn = Object.getOwnPropertySymbols,
    Eo = Object.prototype.hasOwnProperty,
    To = Object.prototype.propertyIsEnumerable,
    Qn = (i, e, t) =>
      e in i
        ? ko(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (i[e] = t),
    qn = (i, e) => {
      for (var t in e || (e = {})) Eo.call(e, t) && Qn(i, t, e[t]);
      if (Xn) for (var t of Xn(e)) To.call(e, t) && Qn(i, t, e[t]);
      return i;
    };
  let Ct = {};
  function $n(i) {
    return i
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
  function Co() {
    const { subscribe: i, set: e, update: t } = Nt({});
    return {
      subscribe: i,
      addContacts: async (n, r) => {
        var a;
        const l = JSON.stringify(n);
        if (!Ct[l] && (n.component_id || n.access_token)) {
          r.offset === 0 && vn.reset();
          const s =
            (a = await Xa(n, r)
              .then((o) => $n(o))
              .catch(() => [])) != null
              ? a
              : [];
          return (
            (Ct[l] = Ct[l] ? [...Ct[l], ...s] : s),
            t((o) => ((o[l] = Ct[l]), qn({}, o))),
            Ct[l]
          );
        }
      },
      addContact: async (n) => {
        var r;
        const a = JSON.stringify(n);
        if (!Ct[a] && (n.component_id || n.access_token)) {
          const l =
            (r = await Qa(n)
              .then((s) => $n(s))
              .catch(() => [])) != null
              ? r
              : [];
          (Ct[a] = Ct[a] ? [...Ct[a], ...l] : l),
            t((s) => ((s[a] = Ct[a]), qn({}, s)));
        }
        return Ct[a];
      },
      reset: () => {
        (Ct = {}), e({});
      },
    };
  }
  const vn = Co(),
    wn = {};
  function Ao() {
    const { subscribe: i, set: e } = Nt({});
    return {
      subscribe: i,
      getContactAvatar: async (t, n, r = !1) => {
        if (!wn[n] || r) {
          const a = await qa(t, n)
            .then((l) => l)
            .catch(() => "");
          a && (wn[n] = a);
        }
        return wn[n];
      },
      reset: () => e({}),
    };
  }
  const So = Ao();
  var Oo = Object.defineProperty,
    er = Object.getOwnPropertySymbols,
    Lo = Object.prototype.hasOwnProperty,
    Mo = Object.prototype.propertyIsEnumerable,
    tr = (i, e, t) =>
      e in i
        ? Oo(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (i[e] = t),
    ai = (i, e) => {
      for (var t in e || (e = {})) Lo.call(e, t) && tr(i, t, e[t]);
      if (er) for (var t of er(e)) Mo.call(e, t) && tr(i, t, e[t]);
      return i;
    };
  async function ir(i) {
    const e = [];
    for (let t = 0; t < i; t++) e.push({ isLoaded: !1, threads: [] });
    return e;
  }
  function No() {
    const { subscribe: i, set: e, update: t } = Nt({});
    let n = {},
      r;
    return {
      subscribe: i,
      set: e,
      getThreads: async (a, l, s, o = !1) => {
        const c = JSON.stringify(a);
        if (!a.component_id && !a.access_token) return [];
        if (r === void 0 || o) {
          const d = a.thread_ids ? a.thread_ids.length : await Bn(a).catch(Yt);
          d && (r = d);
        }
        if (!Array.isArray(n[c]) || o) {
          const d = Math.ceil(r / s);
          n[c] = await ir(d);
        }
        if (typeof n[c][l] == "undefined") return [];
        if (!n[c][l].isLoaded) {
          const d = await Un(a, s, l * s).catch(Yt);
          d && ((n[c][l].threads = d), (n[c][l].isLoaded = !0));
        }
        return t((d) => ((d[c] = n[c]), ai({}, d))), n[c][l].threads;
      },
      getNumberOfItems: async (a) => {
        if (!a.component_id && !a.access_token) return 0;
        if (typeof r == "undefined") {
          const l = await Bn(a).catch(Yt);
          l && (r = l);
        }
        return r;
      },
      getThreadsWithSearchKeyword: async (a, l = !1) => {
        if (!a.component_id && !a.access_token) return [];
        const s = JSON.stringify(a);
        if (
          ((!Array.isArray(n[s]) || l) && (n[s] = await ir(1)),
          !n[s][0].isLoaded || l)
        ) {
          const o = await ro(a).catch(Yt);
          o && ((n[s][0].threads = o), (n[s][0].isLoaded = !0));
        }
        return t((o) => ((o[s] = n[s]), ai({}, o))), n[s][0].threads;
      },
      updateThread: async (a, l, s, o, c) => {
        const d = await Hn(a, s).catch(Yt);
        if (!n[l][o].isLoaded) {
          const m = await Un(JSON.parse(l), c, o * c).catch(Yt);
          m && ((n[l][o].threads = m), (n[l][o].isLoaded = !0));
        }
        return (
          (n[l][o].threads = n[l][o].threads.map(
            (m) => (d && m.id === d.id && (m = Object.assign(m, d)), m),
          )),
          t((m) => ((m[l] = n[l]), ai({}, m))),
          n[l][o].threads
        );
      },
      updateThreadSelection: (a, l, s) => {
        const o = n[a][l].threads;
        if (s) {
          const c = o.find((d) => d.id === s);
          c && (c.selected = !c.selected);
        } else {
          const c = o.some((d) => d.selected);
          for (const d of o) d.selected = !c;
        }
        return t((c) => ((c[a] = n[a]), ai({}, c))), n[a][l].threads;
      },
      reset: () => {
        (n = {}), e({});
      },
      hydrateMessageInThread: (a, l, s) => {
        var o, c, d;
        const m = JSON.stringify(l),
          h =
            (c = (o = n[m][s]) == null ? void 0 : o.threads) == null
              ? void 0
              : c.find((b) => b.id === a.thread_id);
        if (h) {
          const b =
            (d = h.messages) == null ? void 0 : d.find((_) => _.id === a.id);
          b
            ? ((b.body = a.body),
              t((_) => {
                if (a.thread_id) {
                  let O = _[m][s].threads.find((P) => P.id === h.id);
                  O && (O = JSON.parse(JSON.stringify(h)));
                }
                return ai({}, _);
              }))
            : t((_) => {
                if (a.thread_id) {
                  let O = _[m][s].threads.find((P) => P.id === h.id);
                  if (O) {
                    const P = h.messages;
                    P.push(a),
                      (h.messages = P),
                      (h.snippet = a.snippet),
                      (h.drafts = h.drafts.filter((C) => C.id !== a.id)),
                      (O = JSON.parse(JSON.stringify(h)));
                  }
                }
                return ai({}, _);
              });
        }
        return n[m][s].threads;
      },
      hydrateDraftInThread: (a, l, s) => {
        var o, c, d;
        const m = JSON.stringify(l),
          h =
            (c = (o = n[m][s]) == null ? void 0 : o.threads) == null
              ? void 0
              : c.find((b) => b.id === a.thread_id);
        if (h) {
          const b =
            (d = h.drafts) == null ? void 0 : d.find((_) => _.id === a.id);
          if (a.thread_id) {
            if (b) Object.assign(b, a);
            else {
              const _ = h.drafts;
              _.push(a), (h.drafts = _);
            }
            t((_) => {
              let O = _[m][s].threads.find((P) => P.id === h.id);
              return O && (O = JSON.parse(JSON.stringify(h))), ai({}, _);
            });
          }
        }
        return n[m][s].threads;
      },
    };
  }
  const wt = No(),
    Do = Ba(wt, (i) => {
      const e = {};
      return (
        Object.entries(i).forEach(
          ([t, n]) => (e[t] = n.map((r) => r.threads).flat()),
        ),
        e
      );
    });
  function Po() {
    const i = (t, n) => {
        const r = JSON.parse(n);
        if (!!r.component_id) {
          if (!t[n]) {
            const a = ao(r.component_id, r.access_token);
            e.update((l) => ((l[n] = a), l)), (t[n] = a);
          }
          return t[n];
        }
      },
      e = Nt(new Proxy({}, { get: i }));
    return e;
  }
  const nr = Po(),
    yn = async (i) => {
      let e = `${lt(i.component_id)}/files/${i.file_id}/download`;
      return await fetch(e, rt(i))
        .then((t) => nt(t))
        .then((t) => t.response)
        .catch((t) => at(i.component_id, t));
    },
    jo = ["message/delivery-status", "message/rfc822"],
    rr = [
      "image/png",
      "image/apng",
      "image/avif",
      "image/gif",
      "image/jpeg",
      "image/svg+xml",
    ];
  var Ro = Object.defineProperty,
    lr = Object.getOwnPropertySymbols,
    Io = Object.prototype.hasOwnProperty,
    Fo = Object.prototype.propertyIsEnumerable,
    ar = (i, e, t) =>
      e in i
        ? Ro(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (i[e] = t),
    xo = (i, e) => {
      for (var t in e || (e = {})) Io.call(e, t) && ar(i, t, e[t]);
      if (lr) for (var t of lr(e)) Fo.call(e, t) && ar(i, t, e[t]);
      return i;
    };
  function Uo() {
    const { subscribe: i, set: e, update: t } = Nt({}),
      n = {};
    return {
      subscribe: i,
      getFilesForMessage: async (r, a) => {
        if (!n[r.id]) {
          const l = {};
          for (const s of r.files.values())
            (s.content_disposition === "inline" ||
              (s.content_id && rr.includes(s.content_type))) &&
              !l[s.id] &&
              ((l[s.id] = s),
              (l[s.id].data = await yn({
                file_id: s.id,
                component_id: a.component_id,
                access_token: a.access_token,
              })));
          (n[r.id] = l), t((s) => ((s[r.id] = l), xo({}, s)));
        }
        return n[r.id];
      },
      hasInlineFiles: (r) => {
        var a;
        return (a = r == null ? void 0 : r.files) == null
          ? void 0
          : a.some(
              (l) =>
                l.content_disposition === "inline" ||
                (l.content_id && rr.includes(l.content_type)),
            );
      },
      reset: () => e({}),
    };
  }
  const oi = Uo();
  function Ui(i) {
    return (e, t) => {
      i.dispatchEvent &&
        i.dispatchEvent(new CustomEvent(e, { detail: t, composed: !0 }));
    };
  }
  function wi(i, e, t) {
    return new Proxy(i, {
      get: (n, r) =>
        r === "toString" || r === "toJSON"
          ? () => JSON.stringify(n)
          : Reflect.get(n, r) !== void 0
          ? or(Reflect.get(n, r), t[r])
          : e && r in e
          ? or(e[r], t[r])
          : t[r],
      ownKeys: (n) => {
        const r = new Set([
          ...Reflect.ownKeys(n),
          ...Object.keys(e),
          ...Object.keys(t),
        ]);
        return Array.from(r);
      },
      getOwnPropertyDescriptor: (n, r) => {
        var a, l;
        let s = Reflect.getOwnPropertyDescriptor(n, r);
        return (
          s ||
            ((s =
              (l =
                (a = e && Object.getOwnPropertyDescriptor(e, r)) != null
                  ? a
                  : t && Object.getOwnPropertyDescriptor(t, r)) != null
                ? l
                : { configurable: !0, enumerable: !0, writable: !0 }),
            Reflect.defineProperty(n, r, s)),
          s
        );
      },
    });
  }
  function or(i, e) {
    if (i) {
      if (typeof e == "boolean") return Bo(i);
      if (typeof e == "number") return Number(i);
      if (e instanceof Date) return new Date(i);
    }
    return i === void 0 ? (e != null ? e : null) : i;
  }
  function Bo(i) {
    return [!0, "true", "1"].includes(i);
  }
  function sr(i, e) {
    var t;
    const n = Uint8Array.from(atob(i), (s) => s.charCodeAt(0)),
      r = new Blob([n], { type: e.content_type }),
      a = window.URL.createObjectURL(r),
      l = document.createElement("a");
    (l.href = a),
      (l.download = (t = e.filename) != null ? t : e.id),
      (l.target = "_blank"),
      l.click(),
      l.remove();
  }
  function cr(i) {
    let e, t, n, r, a, l;
    function s(d, m) {
      if (d[2] === "HostDomainNotAllowedError") return zo;
      if (d[2] === "IncompatibleProperties") return Ho;
    }
    let o = s(i),
      c = o && o(i);
    return {
      c() {
        var d, m;
        (e = v("div")),
          c && c.c(),
          (t = z()),
          (n = v("span")),
          (n.textContent = "Debug info:"),
          (r = z()),
          (a = v("textarea")),
          f(n, "class", "details"),
          f(a, "class", "details"),
          (a.readOnly = !0),
          (a.value = l =
            `
      ` +
            i[2] +
            ": " +
            i[0] +
            `
      ` +
            ((m = (d = i[1].message) == null ? void 0 : d.message) != null
              ? m
              : "") +
            `
    `),
          f(e, "class", "message-container");
      },
      m(d, m) {
        g(d, e, m), c && c.m(e, null), y(e, t), y(e, n), y(e, r), y(e, a);
      },
      p(d, m) {
        var h, b;
        o === (o = s(d)) && c
          ? c.p(d, m)
          : (c && c.d(1), (c = o && o(d)), c && (c.c(), c.m(e, t))),
          m & 7 &&
            l !==
              (l =
                `
      ` +
                d[2] +
                ": " +
                d[0] +
                `
      ` +
                ((b = (h = d[1].message) == null ? void 0 : h.message) != null
                  ? b
                  : "") +
                `
    `) &&
            (a.value = l);
      },
      d(d) {
        d && u(e), c && c.d();
      },
    };
  }
  function Ho(i) {
    let e;
    return {
      c() {
        (e = v("h3")),
          (e.textContent =
            "Your component properties do not work with each other.");
      },
      m(t, n) {
        g(t, e, n);
      },
      p: k,
      d(t) {
        t && u(e);
      },
    };
  }
  function zo(i) {
    let e, t, n, r, a, l;
    return {
      c() {
        (e = v("h3")),
          (t = J(`You are trying to access this component from\xA0
        `)),
          (n = v("code")),
          (n.textContent = `${window.location.hostname}`),
          (r = J(`. The component's settings do not
        allow access from this domain.`)),
          (a = z()),
          (l = v("h4")),
          (l.innerHTML = `The list of allowed domains can be modified in your\xA0
        <a href="https://dashboard.nylas.com">Dashboard</a>.`);
      },
      m(s, o) {
        g(s, e, o), y(e, t), y(e, n), y(e, r), g(s, a, o), g(s, l, o);
      },
      p: k,
      d(s) {
        s && u(e), s && u(a), s && u(l);
      },
    };
  }
  function Vo(i) {
    let e,
      t = i[2] && i[3] && cr(i);
    return {
      c() {
        t && t.c(), (e = Be()), (this.c = k);
      },
      m(n, r) {
        t && t.m(n, r), g(n, e, r);
      },
      p(n, [r]) {
        n[2] && n[3]
          ? t
            ? t.p(n, r)
            : ((t = cr(n)), t.c(), t.m(e.parentNode, e))
          : t && (t.d(1), (t = null));
      },
      i: k,
      o: k,
      d(n) {
        t && t.d(n), n && u(e);
      },
    };
  }
  function Go(i, e, t) {
    let n;
    Wt(i, nn, (h) => t(8, (n = h)));
    var r, a, l, s;
    let { id: o } = e,
      c,
      d;
    const m =
      window.location.href.includes("localhost") ||
      window.location.href.includes("127.0.0.1");
    return (
      (i.$$set = (h) => {
        "id" in h && t(0, (o = h.id));
      }),
      (i.$$.update = () => {
        i.$$.dirty & 499 &&
          (t(
            1,
            (c = t(4, (r = n[o])) !== null && r !== void 0 ? r : { name: "" }),
          ),
          t(
            2,
            (d =
              t(
                7,
                (s =
                  t(5, (a = c.name)) !== null && a !== void 0
                    ? a
                    : t(6, (l = c.message)) === null || l === void 0
                    ? void 0
                    : l.name),
              ) !== null && s !== void 0
                ? s
                : ""),
          ));
      }),
      [o, c, d, m, r, a, l, s, n]
    );
  }
  class Wo extends Jt {
    constructor(e) {
      super();
      (this.shadowRoot.innerHTML = `<style>.message-container{background:#fff6f6;border-radius:5px;box-shadow:0 0 0 1px #aa92a0 inset, 0 0 0 0 transparent;color:#9f3a38;font-size:1.25rem;padding:10px;margin:0 auto;transition:opacity 500ms ease, color 500ms ease,
      background-color 500ms ease, box-shadow 500ms ease,
      -webkit-box-shadow 500ms ease}.message-container *:focus{outline:5px auto Highlight;outline:5px auto -webkit-focus-ring-color}.details{color:#494949;font-size:0.75rem;width:100%}</style>`),
        We(
          this,
          {
            target: this.shadowRoot,
            props: ni(this.attributes),
            customElement: !0,
          },
          Go,
          Vo,
          Sa,
          { id: 0 },
          null,
        ),
        e &&
          (e.target && g(e.target, this, e.anchor),
          e.props && (this.$set(e.props), re()));
    }
    static get observedAttributes() {
      return ["id"];
    }
    get id() {
      return this.$$.ctx[0];
    }
    set id(e) {
      this.$$set({ id: e }), re();
    }
  }
  customElements.define("nylas-error", Wo);
  var yi;
  (function (i) {
    (i.Label = "label"), (i.Folder = "folder");
  })(yi || (yi = {}));
  var dr;
  (function (i) {
    (i.RUNNING = "running"), (i.PARTIAL = "partial"), (i.STOPPED = "stopped");
  })(dr || (dr = {}));
  var jt;
  (function (i) {
    (i.SELECTALL = "selectall"),
      (i.DELETE = "delete"),
      (i.STAR = "star"),
      (i.UNREAD = "unread");
  })(jt || (jt = {}));
  var xt;
  (function (i) {
    (i.DRAFTS = "drafts"), (i.MESSAGES = "messages");
  })(xt || (xt = {}));
  var Bi;
  (function (i) {
    (i.DEFAULT = "default"), (i.CUSTOM = "custom");
  })(Bi || (Bi = {}));
  const Zo = async (i) => {
    const e = `${lt(i.component_id)}/folders`;
    return await fetch(e, rt(i))
      .then((t) => nt(t))
      .then((t) => t.response)
      .catch((t) => at(i.component_id, t));
  };
  var Jo = Object.defineProperty,
    fr = Object.getOwnPropertySymbols,
    Yo = Object.prototype.hasOwnProperty,
    Ko = Object.prototype.propertyIsEnumerable,
    ur = (i, e, t) =>
      e in i
        ? Jo(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (i[e] = t),
    Xo = (i, e) => {
      for (var t in e || (e = {})) Yo.call(e, t) && ur(i, t, e[t]);
      if (fr) for (var t of fr(e)) Ko.call(e, t) && ur(i, t, e[t]);
      return i;
    };
  function Qo() {
    const { subscribe: i, set: e, update: t } = Nt({}),
      n = {};
    return {
      subscribe: i,
      getFolders: async (r, a = !1) => {
        const l = JSON.stringify(r);
        return (
          (!n[l] || a) &&
            (r.component_id || r.access_token) &&
            (n[l] = (await Zo(r)).map((s) => ((s.toString = () => s.id), s))),
          t((s) => ((s[l] = n[l]), Xo({}, s))),
          n[l]
        );
      },
      reset: () => e({}),
    };
  }
  const mr = Qo(),
    qo = async (i) => {
      const e = `${lt(i.component_id)}/labels`;
      return await fetch(e, rt(i))
        .then((t) => nt(t))
        .then((t) => t.response)
        .catch((t) => at(i.component_id, t));
    };
  var $o = Object.defineProperty,
    hr = Object.getOwnPropertySymbols,
    es = Object.prototype.hasOwnProperty,
    ts = Object.prototype.propertyIsEnumerable,
    _r = (i, e, t) =>
      e in i
        ? $o(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (i[e] = t),
    is = (i, e) => {
      for (var t in e || (e = {})) es.call(e, t) && _r(i, t, e[t]);
      if (hr) for (var t of hr(e)) ts.call(e, t) && _r(i, t, e[t]);
      return i;
    };
  function ns() {
    const { subscribe: i, set: e, update: t } = Nt({}),
      n = {};
    return {
      subscribe: i,
      getLabels: async (r, a = !1) => {
        const l = JSON.stringify(r);
        return (
          (!n[l] || a) &&
            (r.component_id || r.access_token) &&
            (n[l] = (await qo(r)).map((s) => ((s.toString = () => s.id), s))),
          t((s) => ((s[l] = n[l]), is({}, s))),
          n[l]
        );
      },
      reset: () => e({}),
    };
  }
  const pr = ns();
  function gr(i, e, t) {
    return i ? e[t].some((n) => n.email.toLowerCase() === i.toLowerCase()) : !1;
  }
  function rs(i, e) {
    return [...e.from, ...e.to, ...e.cc, ...e.bcc].filter(
      (n) => !i.includes(n.email),
    );
  }
  function ls({ myEmail: i, message: e, type: t }) {
    var n;
    let r = [],
      a = [];
    if (
      ((r = e.reply_to.filter((l) => l.email !== i)),
      r.length || (gr(i, e, "from") ? (r = e.to) : (r = e.from)),
      t === "reply_all")
    ) {
      const l = (n = e.from) == null ? void 0 : n.map((s) => s.email);
      a = [...rs([...l, i], e)];
    }
    return { to: r, cc: a };
  }
  var as = Object.defineProperty,
    br = Object.getOwnPropertySymbols,
    os = Object.prototype.hasOwnProperty,
    ss = Object.prototype.propertyIsEnumerable,
    vr = (i, e, t) =>
      e in i
        ? as(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (i[e] = t),
    wr = (i, e) => {
      for (var t in e || (e = {})) os.call(e, t) && vr(i, t, e[t]);
      if (br) for (var t of br(e)) ss.call(e, t) && vr(i, t, e[t]);
      return i;
    };
  function kn(i, e) {
    return i.map((t) => wr(wr({}, t), e));
  }
  function cs(i) {
    let e,
      t,
      n = [
        { width: "17" },
        { height: "16" },
        { viewBox: "0 0 17 16" },
        { fill: "none" },
        { xmlns: "http://www.w3.org/2000/svg" },
        i[0],
      ],
      r = {};
    for (let a = 0; a < n.length; a += 1) r = ie(r, n[a]);
    return {
      c() {
        (e = W("svg")), (t = W("path")), this.h();
      },
      l(a) {
        e = Q(a, "svg", {
          width: !0,
          height: !0,
          viewBox: !0,
          fill: !0,
          xmlns: !0,
        });
        var l = K(e);
        (t = Q(l, "path", { d: !0, stroke: !0, "stroke-miterlimit": !0 })),
          K(t).forEach(u),
          l.forEach(u),
          this.h();
      },
      h() {
        f(t, "d", "M11.1666 6.66666L8.50094 9.48258L5.83331 6.66666"),
          f(t, "stroke", "#8d94a5"),
          f(t, "stroke-miterlimit", "10"),
          Te(e, r);
      },
      m(a, l) {
        et(a, e, l), fe(e, t);
      },
      p(a, [l]) {
        Te(
          e,
          (r = tt(n, [
            { width: "17" },
            { height: "16" },
            { viewBox: "0 0 17 16" },
            { fill: "none" },
            { xmlns: "http://www.w3.org/2000/svg" },
            l & 1 && a[0],
          ])),
        );
      },
      i: k,
      o: k,
      d(a) {
        a && u(e);
      },
    };
  }
  function ds(i, e, t) {
    return (
      (i.$$set = (n) => {
        t(0, (e = ie(ie({}, e), ve(n))));
      }),
      (e = ve(e)),
      [e]
    );
  }
  class ki extends it {
    constructor(e) {
      super();
      We(this, e, ds, cs, Ue, {});
    }
  }
  function fs(i) {
    let e,
      t,
      n = [
        { width: "11" },
        { height: "13" },
        { viewBox: "0 0 11 13" },
        { fill: "none" },
        { xmlns: "http://www.w3.org/2000/svg" },
        i[0],
      ],
      r = {};
    for (let a = 0; a < n.length; a += 1) r = ie(r, n[a]);
    return {
      c() {
        (e = W("svg")), (t = W("path")), this.h();
      },
      l(a) {
        e = Q(a, "svg", {
          width: !0,
          height: !0,
          viewBox: !0,
          fill: !0,
          xmlns: !0,
        });
        var l = K(e);
        (t = Q(l, "path", { d: !0, fill: !0 })),
          K(t).forEach(u),
          l.forEach(u),
          this.h();
      },
      h() {
        f(
          t,
          "d",
          "M0.75 11.375C0.75 12.0078 1.24219 12.5 1.875 12.5H8.625C9.23438 12.5 9.75 12.0078 9.75 11.375V3.5H0.75V11.375ZM7.125 5.375C7.125 5.1875 7.28906 5 7.5 5C7.6875 5 7.875 5.1875 7.875 5.375V10.625C7.875 10.8359 7.6875 11 7.5 11C7.28906 11 7.125 10.8359 7.125 10.625V5.375ZM4.875 5.375C4.875 5.1875 5.03906 5 5.25 5C5.4375 5 5.625 5.1875 5.625 5.375V10.625C5.625 10.8359 5.4375 11 5.25 11C5.03906 11 4.875 10.8359 4.875 10.625V5.375ZM2.625 5.375C2.625 5.1875 2.78906 5 3 5C3.1875 5 3.375 5.1875 3.375 5.375V10.625C3.375 10.8359 3.1875 11 3 11C2.78906 11 2.625 10.8359 2.625 10.625V5.375ZM10.125 1.25H7.3125L7.07812 0.828125C6.98438 0.640625 6.79688 0.5 6.58594 0.5H3.89062C3.67969 0.5 3.49219 0.640625 3.39844 0.828125L3.1875 1.25H0.375C0.164062 1.25 0 1.4375 0 1.625V2.375C0 2.58594 0.164062 2.75 0.375 2.75H10.125C10.3125 2.75 10.5 2.58594 10.5 2.375V1.625C10.5 1.4375 10.3125 1.25 10.125 1.25Z",
        ),
          f(t, "fill", "#6A7285"),
          Te(e, r);
      },
      m(a, l) {
        et(a, e, l), fe(e, t);
      },
      p(a, [l]) {
        Te(
          e,
          (r = tt(n, [
            { width: "11" },
            { height: "13" },
            { viewBox: "0 0 11 13" },
            { fill: "none" },
            { xmlns: "http://www.w3.org/2000/svg" },
            l & 1 && a[0],
          ])),
        );
      },
      i: k,
      o: k,
      d(a) {
        a && u(e);
      },
    };
  }
  function us(i, e, t) {
    return (
      (i.$$set = (n) => {
        t(0, (e = ie(ie({}, e), ve(n))));
      }),
      (e = ve(e)),
      [e]
    );
  }
  class yr extends it {
    constructor(e) {
      super();
      We(this, e, us, fs, Ue, {});
    }
  }
  function ms(i) {
    let e,
      t,
      n = [
        { width: "12" },
        { height: "13" },
        { viewBox: "0 0 12 13" },
        { fill: "none" },
        { xmlns: "http://www.w3.org/2000/svg" },
        i[0],
      ],
      r = {};
    for (let a = 0; a < n.length; a += 1) r = ie(r, n[a]);
    return {
      c() {
        (e = W("svg")), (t = W("path")), this.h();
      },
      l(a) {
        e = Q(a, "svg", {
          width: !0,
          height: !0,
          viewBox: !0,
          fill: !0,
          xmlns: !0,
        });
        var l = K(e);
        (t = Q(l, "path", { d: !0, fill: !0 })),
          K(t).forEach(u),
          l.forEach(u),
          this.h();
      },
      h() {
        f(
          t,
          "d",
          "M4.125 5.5625H7.875C8.0625 5.5625 8.25 5.39844 8.25 5.1875V4.8125C8.25 4.625 8.0625 4.4375 7.875 4.4375H4.125C3.91406 4.4375 3.75 4.625 3.75 4.8125V5.1875C3.75 5.39844 3.91406 5.5625 4.125 5.5625ZM3.75 7.4375C3.75 7.64844 3.91406 7.8125 4.125 7.8125H7.875C8.0625 7.8125 8.25 7.64844 8.25 7.4375V7.0625C8.25 6.875 8.0625 6.6875 7.875 6.6875H4.125C3.91406 6.6875 3.75 6.875 3.75 7.0625V7.4375ZM6 10.2969C5.60156 10.2969 5.22656 10.1797 4.89844 9.92188L0 6.38281V11.375C0 12.0078 0.492188 12.5 1.125 12.5H10.875C11.4844 12.5 12 12.0078 12 11.375V6.38281L7.07812 9.92188C6.75 10.1797 6.375 10.2969 6 10.2969ZM11.5547 4.32031C11.3438 4.17969 11.1562 4.01562 10.875 3.80469V2.75C10.875 2.14062 10.3594 1.625 9.75 1.625H7.92188C7.85156 1.57812 7.78125 1.53125 7.71094 1.48438C7.3125 1.20312 6.53906 0.5 6 0.5C5.4375 0.5 4.66406 1.20312 4.26562 1.48438C4.19531 1.53125 4.125 1.57812 4.05469 1.625H2.25C1.61719 1.625 1.125 2.14062 1.125 2.75V3.80469C0.820312 4.01562 0.632812 4.17969 0.421875 4.32031C0.164062 4.53125 0 4.85938 0 5.21094V5.46875L2.25 7.08594V2.75H9.75V7.08594L12 5.46875V5.21094C12 4.85938 11.8359 4.55469 11.5547 4.32031Z",
        ),
          f(t, "fill", "#6A7285"),
          Te(e, r);
      },
      m(a, l) {
        et(a, e, l), fe(e, t);
      },
      p(a, [l]) {
        Te(
          e,
          (r = tt(n, [
            { width: "12" },
            { height: "13" },
            { viewBox: "0 0 12 13" },
            { fill: "none" },
            { xmlns: "http://www.w3.org/2000/svg" },
            l & 1 && a[0],
          ])),
        );
      },
      i: k,
      o: k,
      d(a) {
        a && u(e);
      },
    };
  }
  function hs(i, e, t) {
    return (
      (i.$$set = (n) => {
        t(0, (e = ie(ie({}, e), ve(n))));
      }),
      (e = ve(e)),
      [e]
    );
  }
  class kr extends it {
    constructor(e) {
      super();
      We(this, e, hs, ms, Ue, {});
    }
  }
  function _s(i) {
    let e,
      t,
      n = [
        { width: "12" },
        { height: "9" },
        { viewBox: "0 0 12 9" },
        { fill: "none" },
        { xmlns: "http://www.w3.org/2000/svg" },
        i[0],
      ],
      r = {};
    for (let a = 0; a < n.length; a += 1) r = ie(r, n[a]);
    return {
      c() {
        (e = W("svg")), (t = W("path")), this.h();
      },
      l(a) {
        e = Q(a, "svg", {
          width: !0,
          height: !0,
          viewBox: !0,
          fill: !0,
          xmlns: !0,
        });
        var l = K(e);
        (t = Q(l, "path", { d: !0, fill: !0 })),
          K(t).forEach(u),
          l.forEach(u),
          this.h();
      },
      h() {
        f(
          t,
          "d",
          "M11.7656 2.97656C11.2266 3.39844 10.5469 3.91406 8.15625 5.64844C7.6875 6 6.82031 6.77344 6 6.77344C5.15625 6.77344 4.3125 6 3.82031 5.64844C1.42969 3.91406 0.75 3.39844 0.210938 2.97656C0.117188 2.90625 0 2.97656 0 3.09375V7.875C0 8.50781 0.492188 9 1.125 9H10.875C11.4844 9 12 8.50781 12 7.875V3.09375C12 2.97656 11.8594 2.90625 11.7656 2.97656ZM6 6C6.53906 6.02344 7.3125 5.32031 7.71094 5.03906C10.8281 2.78906 11.0625 2.57812 11.7656 2.01562C11.9062 1.92188 12 1.75781 12 1.57031V1.125C12 0.515625 11.4844 0 10.875 0H1.125C0.492188 0 0 0.515625 0 1.125V1.57031C0 1.75781 0.0703125 1.92188 0.210938 2.01562C0.914062 2.57812 1.14844 2.78906 4.26562 5.03906C4.66406 5.32031 5.4375 6.02344 6 6Z",
        ),
          f(t, "fill", "#6A7285"),
          Te(e, r);
      },
      m(a, l) {
        et(a, e, l), fe(e, t);
      },
      p(a, [l]) {
        Te(
          e,
          (r = tt(n, [
            { width: "12" },
            { height: "9" },
            { viewBox: "0 0 12 9" },
            { fill: "none" },
            { xmlns: "http://www.w3.org/2000/svg" },
            l & 1 && a[0],
          ])),
        );
      },
      i: k,
      o: k,
      d(a) {
        a && u(e);
      },
    };
  }
  function ps(i, e, t) {
    return (
      (i.$$set = (n) => {
        t(0, (e = ie(ie({}, e), ve(n))));
      }),
      (e = ve(e)),
      [e]
    );
  }
  class Er extends it {
    constructor(e) {
      super();
      We(this, e, ps, _s, Ue, {});
    }
  }
  function gs(i) {
    let e,
      t,
      n,
      r,
      a = [
        { width: "17" },
        { height: "16" },
        { xmlns: "http://www.w3.org/2000/svg" },
        { "xmlns:xlink": "http://www.w3.org/1999/xlink" },
        { x: "0px" },
        { y: "0px" },
        { viewBox: "0 0 511.36 511.36" },
        { style: "enable-background:new 0 0 511.36 511.36;" },
        { "xml:space": "preserve" },
        i[0],
      ],
      l = {};
    for (let s = 0; s < a.length; s += 1) l = ie(l, a[s]);
    return {
      c() {
        (e = W("svg")), (t = W("g")), (n = W("g")), (r = W("path")), this.h();
      },
      l(s) {
        e = Q(s, "svg", {
          width: !0,
          height: !0,
          xmlns: !0,
          "xmlns:xlink": !0,
          x: !0,
          y: !0,
          viewBox: !0,
          style: !0,
          "xml:space": !0,
        });
        var o = K(e);
        t = Q(o, "g", {});
        var c = K(t);
        n = Q(c, "g", {});
        var d = K(n);
        (r = Q(d, "path", { d: !0 })),
          K(r).forEach(u),
          d.forEach(u),
          c.forEach(u),
          o.forEach(u),
          this.h();
      },
      h() {
        f(
          r,
          "d",
          `M454.827,35.2c-46.933-46.933-122.027-46.933-168.96,0L63.147,258.773c-3.413,3.413-3.413,8.533,0,11.947\r
			s8.533,3.413,11.947,0l222.72-223.573c40.107-40.107,104.96-40.107,145.067,0c40.107,40.107,40.107,104.96,0,145.067\r
			L162.133,472.96c-28.16,28.16-74.24,28.16-102.4,0c-28.16-28.16-28.16-74.24,0-102.4l226.133-226.987\r
			c17.067-16.213,43.52-17.067,60.587,0c16.213,17.067,16.213,44.373,0,60.587l-168.96,169.813c-3.413,3.413-3.413,8.533,0,11.947\r
			c3.413,3.413,8.533,3.413,11.947,0L358.4,216.96c23.04-23.04,23.04-61.44,0-84.48c-23.04-23.04-61.44-23.04-84.48,0\r
			L47.787,358.613c-34.987,34.133-34.987,91.307,0,126.293c17.067,17.92,40.107,26.453,63.147,26.453\r
			c23.04,0,46.08-8.533,63.147-26.453L454.827,204.16c22.187-22.187,34.987-52.907,34.987-84.48\r
			C489.813,88.107,477.013,57.387,454.827,35.2z`,
        ),
          Te(e, l);
      },
      m(s, o) {
        et(s, e, o), fe(e, t), fe(t, n), fe(n, r);
      },
      p(s, [o]) {
        Te(
          e,
          (l = tt(a, [
            { width: "17" },
            { height: "16" },
            { xmlns: "http://www.w3.org/2000/svg" },
            { "xmlns:xlink": "http://www.w3.org/1999/xlink" },
            { x: "0px" },
            { y: "0px" },
            { viewBox: "0 0 511.36 511.36" },
            { style: "enable-background:new 0 0 511.36 511.36;" },
            { "xml:space": "preserve" },
            o & 1 && s[0],
          ])),
        );
      },
      i: k,
      o: k,
      d(s) {
        s && u(e);
      },
    };
  }
  function bs(i, e, t) {
    return (
      (i.$$set = (n) => {
        t(0, (e = ie(ie({}, e), ve(n))));
      }),
      (e = ve(e)),
      [e]
    );
  }
  class vs extends it {
    constructor(e) {
      super();
      We(this, e, bs, gs, Ue, {});
    }
  }
  function ws(i) {
    let e,
      t,
      n,
      r = [
        { width: "24" },
        { height: "24" },
        { viewBox: "0 0 24 24" },
        { fill: "none" },
        { xmlns: "http://www.w3.org/2000/svg" },
        i[0],
      ],
      a = {};
    for (let l = 0; l < r.length; l += 1) a = ie(a, r[l]);
    return {
      c() {
        (e = W("svg")), (t = W("path")), (n = W("path")), this.h();
      },
      l(l) {
        e = Q(l, "svg", {
          width: !0,
          height: !0,
          viewBox: !0,
          fill: !0,
          xmlns: !0,
        });
        var s = K(e);
        (t = Q(s, "path", {
          d: !0,
          stroke: !0,
          "stroke-width": !0,
          "stroke-miterlimit": !0,
        })),
          K(t).forEach(u),
          (n = Q(s, "path", {
            d: !0,
            stroke: !0,
            "stroke-width": !0,
            "stroke-miterlimit": !0,
          })),
          K(n).forEach(u),
          s.forEach(u),
          this.h();
      },
      h() {
        f(t, "d", "M11.7605 17.3029L6.32422 12.1494L11.7605 6.99968"),
          f(t, "stroke", "#161717"),
          f(t, "stroke-width", "1.5"),
          f(t, "stroke-miterlimit", "10"),
          f(n, "d", "M6.42791 12.1494L18 12.1494"),
          f(n, "stroke", "#161717"),
          f(n, "stroke-width", "1.5"),
          f(n, "stroke-miterlimit", "10"),
          Te(e, a);
      },
      m(l, s) {
        et(l, e, s), fe(e, t), fe(e, n);
      },
      p(l, [s]) {
        Te(
          e,
          (a = tt(r, [
            { width: "24" },
            { height: "24" },
            { viewBox: "0 0 24 24" },
            { fill: "none" },
            { xmlns: "http://www.w3.org/2000/svg" },
            s & 1 && l[0],
          ])),
        );
      },
      i: k,
      o: k,
      d(l) {
        l && u(e);
      },
    };
  }
  function ys(i, e, t) {
    return (
      (i.$$set = (n) => {
        t(0, (e = ie(ie({}, e), ve(n))));
      }),
      (e = ve(e)),
      [e]
    );
  }
  class ks extends it {
    constructor(e) {
      super();
      We(this, e, ys, ws, Ue, {});
    }
  }
  function Es(i) {
    let e,
      t,
      n = [
        { width: "30" },
        { height: "28" },
        { style: "margin-top:2px" },
        { viewBox: "0 0 20 20" },
        { fill: "none" },
        { xmlns: "http://www.w3.org/2000/svg" },
        i[0],
      ],
      r = {};
    for (let a = 0; a < n.length; a += 1) r = ie(r, n[a]);
    return {
      c() {
        (e = W("svg")), (t = W("path")), this.h();
      },
      l(a) {
        e = Q(a, "svg", {
          width: !0,
          height: !0,
          style: !0,
          viewBox: !0,
          fill: !0,
          xmlns: !0,
        });
        var l = K(e);
        (t = Q(l, "path", { d: !0, fill: !0 })),
          K(t).forEach(u),
          l.forEach(u),
          this.h();
      },
      h() {
        f(
          t,
          "d",
          "M10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3ZM10 12.5C10.4142 12.5 10.75 12.8358 10.75 13.25C10.75 13.6642 10.4142 14 10 14C9.58579 14 9.25 13.6642 9.25 13.25C9.25 12.8358 9.58579 12.5 10 12.5ZM10 6C10.2455 6 10.4496 6.17688 10.4919 6.41012L10.5 6.5V11C10.5 11.2761 10.2761 11.5 10 11.5C9.75454 11.5 9.55039 11.3231 9.50806 11.0899L9.5 11V6.5C9.5 6.22386 9.72386 6 10 6Z",
        ),
          f(t, "fill", "white"),
          Te(e, r);
      },
      m(a, l) {
        et(a, e, l), fe(e, t);
      },
      p(a, [l]) {
        Te(
          e,
          (r = tt(n, [
            { width: "30" },
            { height: "28" },
            { style: "margin-top:2px" },
            { viewBox: "0 0 20 20" },
            { fill: "none" },
            { xmlns: "http://www.w3.org/2000/svg" },
            l & 1 && a[0],
          ])),
        );
      },
      i: k,
      o: k,
      d(a) {
        a && u(e);
      },
    };
  }
  function Ts(i, e, t) {
    return (
      (i.$$set = (n) => {
        t(0, (e = ie(ie({}, e), ve(n))));
      }),
      (e = ve(e)),
      [e]
    );
  }
  class Cs extends it {
    constructor(e) {
      super();
      We(this, e, Ts, Es, Ue, {});
    }
  }
  function As(i) {
    let e,
      t,
      n = [
        { width: "16" },
        { height: "16" },
        { viewBox: "0 0 16 16" },
        { fill: "none" },
        { xmlns: "http://www.w3.org/2000/svg" },
        i[0],
      ],
      r = {};
    for (let a = 0; a < n.length; a += 1) r = ie(r, n[a]);
    return {
      c() {
        (e = W("svg")), (t = W("path")), this.h();
      },
      l(a) {
        e = Q(a, "svg", {
          width: !0,
          height: !0,
          viewBox: !0,
          fill: !0,
          xmlns: !0,
        });
        var l = K(e);
        (t = Q(l, "path", { d: !0, fill: !0 })),
          K(t).forEach(u),
          l.forEach(u),
          this.h();
      },
      h() {
        f(
          t,
          "d",
          "M11.2452 0.817058C12.332 -0.269749 14.0941 -0.269749 15.1809 0.817058C16.2224 1.85858 16.2658 3.52026 15.3111 4.61346L15.1809 4.75273L5.57506 14.3586C5.36997 14.5636 5.12323 14.7212 4.85236 14.821L4.68708 14.8739L0.632111 15.9798C0.285522 16.0743 -0.0345414 15.7857 0.00300655 15.4452L0.0181704 15.3658L1.12407 11.3109C1.20039 11.031 1.33646 10.7718 1.52212 10.5508L1.63939 10.4229L11.2452 0.817058ZM10.385 3.09195L2.34649 11.13C2.2542 11.2223 2.18117 11.3314 2.13111 11.4511L2.08884 11.574L1.2122 14.7847L4.42397 13.9091C4.50791 13.8862 4.58815 13.8526 4.66278 13.8093L4.77028 13.7372L4.86796 13.6515L12.906 5.61295L10.385 3.09195ZM14.4738 1.52417C13.8162 0.866565 12.7727 0.830031 12.0722 1.41457L11.9523 1.52417L11.092 2.38495L13.613 4.90595L14.4738 4.04563C15.1314 3.38803 15.1679 2.34455 14.5834 1.64407L14.4738 1.52417Z",
        ),
          f(t, "fill", "#ffffff"),
          Te(e, r);
      },
      m(a, l) {
        et(a, e, l), fe(e, t);
      },
      p(a, [l]) {
        Te(
          e,
          (r = tt(n, [
            { width: "16" },
            { height: "16" },
            { viewBox: "0 0 16 16" },
            { fill: "none" },
            { xmlns: "http://www.w3.org/2000/svg" },
            l & 1 && a[0],
          ])),
        );
      },
      i: k,
      o: k,
      d(a) {
        a && u(e);
      },
    };
  }
  function Ss(i, e, t) {
    return (
      (i.$$set = (n) => {
        t(0, (e = ie(ie({}, e), ve(n))));
      }),
      (e = ve(e)),
      [e]
    );
  }
  class Tr extends it {
    constructor(e) {
      super();
      We(this, e, Ss, As, Ue, {});
    }
  }
  function Os(i) {
    let e,
      t =
        (i[0].given_name && i[0].surname
          ? i[0].given_name.charAt(0) + i[0].surname.charAt(0)
          : i[0].name
          ? i[0].name.charAt(0)
          : i[0].email
          ? i[0].email.charAt(0)
          : "?") + "",
      n;
    return {
      c() {
        (e = v("p")), (n = J(t)), bi(e, "margin", "0");
      },
      m(r, a) {
        g(r, e, a), y(e, n);
      },
      p(r, a) {
        a & 1 &&
          t !==
            (t =
              (r[0].given_name && r[0].surname
                ? r[0].given_name.charAt(0) + r[0].surname.charAt(0)
                : r[0].name
                ? r[0].name.charAt(0)
                : r[0].email
                ? r[0].email.charAt(0)
                : "?") + "") &&
          pe(n, t);
      },
      d(r) {
        r && u(e);
      },
    };
  }
  function Ls(i) {
    let e, t;
    return {
      c() {
        (e = v("img")),
          f(e, "alt", ""),
          bi(e, "height", i[1]),
          bi(e, "width", i[2]),
          bi(e, "border-radius", "50%"),
          Cn(e.src, (t = "data:image/jpg;base64," + i[3])) || f(e, "src", t);
      },
      m(n, r) {
        g(n, e, r);
      },
      p(n, r) {
        r & 2 && bi(e, "height", n[1]),
          r & 4 && bi(e, "width", n[2]),
          r & 8 &&
            !Cn(e.src, (t = "data:image/jpg;base64," + n[3])) &&
            f(e, "src", t);
      },
      d(n) {
        n && u(e);
      },
    };
  }
  function Ms(i) {
    let e;
    function t(a, l) {
      if (a[3]) return Ls;
      if (a[0]) return Os;
    }
    let n = t(i),
      r = n && n(i);
    return {
      c() {
        r && r.c(), (e = Be()), (this.c = k);
      },
      m(a, l) {
        r && r.m(a, l), g(a, e, l);
      },
      p(a, [l]) {
        n === (n = t(a)) && r
          ? r.p(a, l)
          : (r && r.d(1), (r = n && n(a)), r && (r.c(), r.m(e.parentNode, e)));
      },
      i: k,
      o: k,
      d(a) {
        r && r.d(a), a && u(e);
      },
    };
  }
  function Ns(i, e, t) {
    let n,
      { contact: r } = e,
      { contact_query: a } = e,
      { height: l = "32px" } = e,
      { width: s = "32px" } = e;
    return (
      Ia(async () => {
        r && r.picture_url
          ? t(3, (n = await So.getContactAvatar(a, r.id)))
          : t(3, (n = null));
      }),
      (i.$$set = (o) => {
        "contact" in o && t(0, (r = o.contact)),
          "contact_query" in o && t(4, (a = o.contact_query)),
          "height" in o && t(1, (l = o.height)),
          "width" in o && t(2, (s = o.width));
      }),
      t(3, (n = null)),
      [r, l, s, n, a]
    );
  }
  class Ds extends Jt {
    constructor(e) {
      super();
      We(
        this,
        {
          target: this.shadowRoot,
          props: ni(this.attributes),
          customElement: !0,
        },
        Ns,
        Ms,
        Ue,
        { contact: 0, contact_query: 4, height: 1, width: 2 },
        null,
      ),
        e &&
          (e.target && g(e.target, this, e.anchor),
          e.props && (this.$set(e.props), re()));
    }
    static get observedAttributes() {
      return ["contact", "contact_query", "height", "width"];
    }
    get contact() {
      return this.$$.ctx[0];
    }
    set contact(e) {
      this.$$set({ contact: e }), re();
    }
    get contact_query() {
      return this.$$.ctx[4];
    }
    set contact_query(e) {
      this.$$set({ contact_query: e }), re();
    }
    get height() {
      return this.$$.ctx[1];
    }
    set height(e) {
      this.$$set({ height: e }), re();
    }
    get width() {
      return this.$$.ctx[2];
    }
    set width(e) {
      this.$$set({ width: e }), re();
    }
  }
  customElements.define("nylas-contact-image", Ds);
  const Cr = (i) =>
    i.content_disposition === "attachment" &&
    !!i.filename &&
    !jo.includes(i.content_type);
  var Ps =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : typeof self != "undefined"
      ? self
      : {};
  function js(i, e, t) {
    return (
      (t = {
        path: e,
        exports: {},
        require: function (n, r) {
          return Rs(n, r == null ? t.path : r);
        },
      }),
      i(t, t.exports),
      t.exports
    );
  }
  function Rs() {
    throw new Error(
      "Dynamic requires are not currently supported by @rollup/plugin-commonjs",
    );
  }
  var Ei = js(function (i, e) {
    /*! @license DOMPurify 2.3.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.5/LICENSE */ (function (
      t,
      n,
    ) {
      i.exports = n();
    })(Ps, function () {
      function t(G) {
        if (Array.isArray(G)) {
          for (var q = 0, ue = Array(G.length); q < G.length; q++) ue[q] = G[q];
          return ue;
        } else return Array.from(G);
      }
      var n = Object.hasOwnProperty,
        r = Object.setPrototypeOf,
        a = Object.isFrozen,
        l = Object.getPrototypeOf,
        s = Object.getOwnPropertyDescriptor,
        o = Object.freeze,
        c = Object.seal,
        d = Object.create,
        m = typeof Reflect != "undefined" && Reflect,
        h = m.apply,
        b = m.construct;
      h ||
        (h = function (q, ue, be) {
          return q.apply(ue, be);
        }),
        o ||
          (o = function (q) {
            return q;
          }),
        c ||
          (c = function (q) {
            return q;
          }),
        b ||
          (b = function (q, ue) {
            return new (Function.prototype.bind.apply(
              q,
              [null].concat(t(ue)),
            ))();
          });
      var _ = X(Array.prototype.forEach),
        O = X(Array.prototype.pop),
        P = X(Array.prototype.push),
        C = X(String.prototype.toLowerCase),
        I = X(String.prototype.match),
        N = X(String.prototype.replace),
        oe = X(String.prototype.indexOf),
        le = X(String.prototype.trim),
        ee = X(RegExp.prototype.test),
        Z = L(TypeError);
      function X(G) {
        return function (q) {
          for (
            var ue = arguments.length, be = Array(ue > 1 ? ue - 1 : 0), Je = 1;
            Je < ue;
            Je++
          )
            be[Je - 1] = arguments[Je];
          return h(G, q, be);
        };
      }
      function L(G) {
        return function () {
          for (var q = arguments.length, ue = Array(q), be = 0; be < q; be++)
            ue[be] = arguments[be];
          return b(G, ue);
        };
      }
      function x(G, q) {
        r && r(G, null);
        for (var ue = q.length; ue--; ) {
          var be = q[ue];
          if (typeof be == "string") {
            var Je = C(be);
            Je !== be && (a(q) || (q[ue] = Je), (be = Je));
          }
          G[be] = !0;
        }
        return G;
      }
      function Oe(G) {
        var q = d(null),
          ue = void 0;
        for (ue in G) h(n, G, [ue]) && (q[ue] = G[ue]);
        return q;
      }
      function Ne(G, q) {
        for (; G !== null; ) {
          var ue = s(G, q);
          if (ue) {
            if (ue.get) return X(ue.get);
            if (typeof ue.value == "function") return X(ue.value);
          }
          G = l(G);
        }
        function be(Je) {
          return console.warn("fallback value for", Je), null;
        }
        return be;
      }
      var ye = o([
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
        he = o([
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
        de = o([
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
        te = o([
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
        Le = o([
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
        U = o([
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
        _e = o(["#text"]),
        De = o([
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
        ke = o([
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
        Me = o([
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
        R = o([
          "xlink:href",
          "xml:id",
          "xlink:title",
          "xml:space",
          "xmlns:xlink",
        ]),
        Ee = c(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
        Xe = c(/<%[\s\S]*|[\s\S]*%>/gm),
        H = c(/^data-[\-\w.\u00B7-\uFFFF]/),
        ge = c(/^aria-[\-\w]+$/),
        M = c(
          /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
        ),
        ct = c(/^(?:\w+script|data):/i),
        se = c(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
        qe =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (G) {
                return typeof G;
              }
            : function (G) {
                return G &&
                  typeof Symbol == "function" &&
                  G.constructor === Symbol &&
                  G !== Symbol.prototype
                  ? "symbol"
                  : typeof G;
              };
      function Ze(G) {
        if (Array.isArray(G)) {
          for (var q = 0, ue = Array(G.length); q < G.length; q++) ue[q] = G[q];
          return ue;
        } else return Array.from(G);
      }
      var Pe = function () {
          return typeof window == "undefined" ? null : window;
        },
        je = function (q, ue) {
          if (
            (typeof q == "undefined" ? "undefined" : qe(q)) !== "object" ||
            typeof q.createPolicy != "function"
          )
            return null;
          var be = null,
            Je = "data-tt-policy-suffix";
          ue.currentScript &&
            ue.currentScript.hasAttribute(Je) &&
            (be = ue.currentScript.getAttribute(Je));
          var pt = "dompurify" + (be ? "#" + be : "");
          try {
            return q.createPolicy(pt, {
              createHTML: function (Ye) {
                return Ye;
              },
            });
          } catch (ft) {
            return (
              console.warn(
                "TrustedTypes policy " + pt + " could not be created.",
              ),
              null
            );
          }
        };
      function Qe() {
        var G =
            arguments.length > 0 && arguments[0] !== void 0
              ? arguments[0]
              : Pe(),
          q = function (w) {
            return Qe(w);
          };
        if (
          ((q.version = "2.3.5"),
          (q.removed = []),
          !G || !G.document || G.document.nodeType !== 9)
        )
          return (q.isSupported = !1), q;
        var ue = G.document,
          be = G.document,
          Je = G.DocumentFragment,
          pt = G.HTMLTemplateElement,
          ft = G.Node,
          Ye = G.Element,
          Dt = G.NodeFilter,
          j = G.NamedNodeMap,
          si = j === void 0 ? G.NamedNodeMap || G.MozNamedAttrMap : j,
          ci = G.HTMLFormElement,
          di = G.DOMParser,
          Hi = G.trustedTypes,
          yt = Ye.prototype,
          Ci = Ne(yt, "cloneNode"),
          Rt = Ne(yt, "nextSibling"),
          Xt = Ne(yt, "childNodes"),
          St = Ne(yt, "parentNode");
        if (typeof pt == "function") {
          var fi = be.createElement("template");
          fi.content &&
            fi.content.ownerDocument &&
            (be = fi.content.ownerDocument);
        }
        var kt = je(Hi, ue),
          Ai = kt ? kt.createHTML("") : "",
          Qt = be,
          qt = Qt.implementation,
          zi = Qt.createNodeIterator,
          Bt = Qt.createDocumentFragment,
          Ht = Qt.getElementsByTagName,
          Vi = ue.importNode,
          ui = {};
        try {
          ui = Oe(be).documentMode ? be.documentMode : {};
        } catch (ce) {}
        var gt = {};
        q.isSupported =
          typeof St == "function" &&
          qt &&
          typeof qt.createHTMLDocument != "undefined" &&
          ui !== 9;
        var Ot = Ee,
          mi = Xe,
          Si = H,
          Oi = ge,
          Li = ct,
          Mi = se,
          E = M,
          D = null,
          me = x({}, [].concat(Ze(ye), Ze(he), Ze(de), Ze(Le), Ze(_e))),
          $ = null,
          Re = x({}, [].concat(Ze(De), Ze(ke), Ze(Me), Ze(R))),
          Ce = Object.seal(
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
          ze = null,
          At = null,
          Pt = !0,
          zt = !0,
          ut = !1,
          Et = !1,
          Vt = !1,
          Gi = !1,
          hi = !1,
          $t = !1,
          Ni = !1,
          Di = !1,
          ln = !0,
          Wi = !0,
          _i = !1,
          ei = {},
          ti = null,
          an = x({}, [
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
          on = null,
          sn = x({}, ["audio", "video", "img", "source", "image", "track"]),
          Zi = null,
          cn = x({}, [
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
          Ji = "http://www.w3.org/1998/Math/MathML",
          Yi = "http://www.w3.org/2000/svg",
          It = "http://www.w3.org/1999/xhtml",
          Pi = It,
          Ki = !1,
          p = void 0,
          T = ["application/xhtml+xml", "text/html"],
          V = "text/html",
          ae = void 0,
          Ve = null,
          xe = be.createElement("form"),
          $e = function (w) {
            return w instanceof RegExp || w instanceof Function;
          },
          pi = function (w) {
            (Ve && Ve === w) ||
              ((!w ||
                (typeof w == "undefined" ? "undefined" : qe(w)) !== "object") &&
                (w = {}),
              (w = Oe(w)),
              (D = "ALLOWED_TAGS" in w ? x({}, w.ALLOWED_TAGS) : me),
              ($ = "ALLOWED_ATTR" in w ? x({}, w.ALLOWED_ATTR) : Re),
              (Zi =
                "ADD_URI_SAFE_ATTR" in w ? x(Oe(cn), w.ADD_URI_SAFE_ATTR) : cn),
              (on =
                "ADD_DATA_URI_TAGS" in w ? x(Oe(sn), w.ADD_DATA_URI_TAGS) : sn),
              (ti = "FORBID_CONTENTS" in w ? x({}, w.FORBID_CONTENTS) : an),
              (ze = "FORBID_TAGS" in w ? x({}, w.FORBID_TAGS) : {}),
              (At = "FORBID_ATTR" in w ? x({}, w.FORBID_ATTR) : {}),
              (ei = "USE_PROFILES" in w ? w.USE_PROFILES : !1),
              (Pt = w.ALLOW_ARIA_ATTR !== !1),
              (zt = w.ALLOW_DATA_ATTR !== !1),
              (ut = w.ALLOW_UNKNOWN_PROTOCOLS || !1),
              (Et = w.SAFE_FOR_TEMPLATES || !1),
              (Vt = w.WHOLE_DOCUMENT || !1),
              ($t = w.RETURN_DOM || !1),
              (Ni = w.RETURN_DOM_FRAGMENT || !1),
              (Di = w.RETURN_TRUSTED_TYPE || !1),
              (hi = w.FORCE_BODY || !1),
              (ln = w.SANITIZE_DOM !== !1),
              (Wi = w.KEEP_CONTENT !== !1),
              (_i = w.IN_PLACE || !1),
              (E = w.ALLOWED_URI_REGEXP || E),
              (Pi = w.NAMESPACE || It),
              w.CUSTOM_ELEMENT_HANDLING &&
                $e(w.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                (Ce.tagNameCheck = w.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
              w.CUSTOM_ELEMENT_HANDLING &&
                $e(w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                (Ce.attributeNameCheck =
                  w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
              w.CUSTOM_ELEMENT_HANDLING &&
                typeof w.CUSTOM_ELEMENT_HANDLING
                  .allowCustomizedBuiltInElements == "boolean" &&
                (Ce.allowCustomizedBuiltInElements =
                  w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
              (p =
                T.indexOf(w.PARSER_MEDIA_TYPE) === -1
                  ? (p = V)
                  : (p = w.PARSER_MEDIA_TYPE)),
              (ae =
                p === "application/xhtml+xml"
                  ? function (B) {
                      return B;
                    }
                  : C),
              Et && (zt = !1),
              Ni && ($t = !0),
              ei &&
                ((D = x({}, [].concat(Ze(_e)))),
                ($ = []),
                ei.html === !0 && (x(D, ye), x($, De)),
                ei.svg === !0 && (x(D, he), x($, ke), x($, R)),
                ei.svgFilters === !0 && (x(D, de), x($, ke), x($, R)),
                ei.mathMl === !0 && (x(D, Le), x($, Me), x($, R))),
              w.ADD_TAGS && (D === me && (D = Oe(D)), x(D, w.ADD_TAGS)),
              w.ADD_ATTR && ($ === Re && ($ = Oe($)), x($, w.ADD_ATTR)),
              w.ADD_URI_SAFE_ATTR && x(Zi, w.ADD_URI_SAFE_ATTR),
              w.FORBID_CONTENTS &&
                (ti === an && (ti = Oe(ti)), x(ti, w.FORBID_CONTENTS)),
              Wi && (D["#text"] = !0),
              Vt && x(D, ["html", "head", "body"]),
              D.table && (x(D, ["tbody"]), delete ze.tbody),
              o && o(w),
              (Ve = w));
          },
          ji = x({}, ["mi", "mo", "mn", "ms", "mtext"]),
          ii = x({}, ["foreignobject", "desc", "title", "annotation-xml"]),
          mt = x({}, he);
        x(mt, de), x(mt, te);
        var Lt = x({}, Le);
        x(Lt, U);
        var gi = function (w) {
            var B = St(w);
            (!B || !B.tagName) &&
              (B = { namespaceURI: It, tagName: "template" });
            var ne = C(w.tagName),
              Ge = C(B.tagName);
            if (w.namespaceURI === Yi)
              return B.namespaceURI === It
                ? ne === "svg"
                : B.namespaceURI === Ji
                ? ne === "svg" && (Ge === "annotation-xml" || ji[Ge])
                : Boolean(mt[ne]);
            if (w.namespaceURI === Ji)
              return B.namespaceURI === It
                ? ne === "math"
                : B.namespaceURI === Yi
                ? ne === "math" && ii[Ge]
                : Boolean(Lt[ne]);
            if (w.namespaceURI === It) {
              if (
                (B.namespaceURI === Yi && !ii[Ge]) ||
                (B.namespaceURI === Ji && !ji[Ge])
              )
                return !1;
              var ht = x({}, ["title", "style", "font", "a", "script"]);
              return !Lt[ne] && (ht[ne] || !mt[ne]);
            }
            return !1;
          },
          Tt = function (w) {
            P(q.removed, { element: w });
            try {
              w.parentNode.removeChild(w);
            } catch (B) {
              try {
                w.outerHTML = Ai;
              } catch (ne) {
                w.remove();
              }
            }
          },
          ba = function (w, B) {
            try {
              P(q.removed, { attribute: B.getAttributeNode(w), from: B });
            } catch (ne) {
              P(q.removed, { attribute: null, from: B });
            }
            if ((B.removeAttribute(w), w === "is" && !$[w]))
              if ($t || Ni)
                try {
                  Tt(B);
                } catch (ne) {}
              else
                try {
                  B.setAttribute(w, "");
                } catch (ne) {}
          },
          va = function (w) {
            var B = void 0,
              ne = void 0;
            if (hi) w = "<remove></remove>" + w;
            else {
              var Ge = I(w, /^[\r\n\t ]+/);
              ne = Ge && Ge[0];
            }
            p === "application/xhtml+xml" &&
              (w =
                '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
                w +
                "</body></html>");
            var ht = kt ? kt.createHTML(w) : w;
            if (Pi === It)
              try {
                B = new di().parseFromString(ht, p);
              } catch (dt) {}
            if (!B || !B.documentElement) {
              B = qt.createDocument(Pi, "template", null);
              try {
                B.documentElement.innerHTML = Ki ? "" : ht;
              } catch (dt) {}
            }
            var _t = B.body || B.documentElement;
            return (
              w &&
                ne &&
                _t.insertBefore(
                  be.createTextNode(ne),
                  _t.childNodes[0] || null,
                ),
              Pi === It
                ? Ht.call(B, Vt ? "html" : "body")[0]
                : Vt
                ? B.documentElement
                : _t
            );
          },
          wa = function (w) {
            return zi.call(
              w.ownerDocument || w,
              w,
              Dt.SHOW_ELEMENT | Dt.SHOW_COMMENT | Dt.SHOW_TEXT,
              null,
              !1,
            );
          },
          df = function (w) {
            return (
              w instanceof ci &&
              (typeof w.nodeName != "string" ||
                typeof w.textContent != "string" ||
                typeof w.removeChild != "function" ||
                !(w.attributes instanceof si) ||
                typeof w.removeAttribute != "function" ||
                typeof w.setAttribute != "function" ||
                typeof w.namespaceURI != "string" ||
                typeof w.insertBefore != "function")
            );
          },
          Xi = function (w) {
            return (typeof ft == "undefined" ? "undefined" : qe(ft)) ===
              "object"
              ? w instanceof ft
              : w &&
                  (typeof w == "undefined" ? "undefined" : qe(w)) ===
                    "object" &&
                  typeof w.nodeType == "number" &&
                  typeof w.nodeName == "string";
          },
          Gt = function (w, B, ne) {
            !gt[w] ||
              _(gt[w], function (Ge) {
                Ge.call(q, B, ne, Ve);
              });
          },
          ya = function (w) {
            var B = void 0;
            if (
              (Gt("beforeSanitizeElements", w, null),
              df(w) || I(w.nodeName, /[\u0080-\uFFFF]/))
            )
              return Tt(w), !0;
            var ne = ae(w.nodeName);
            if (
              (Gt("uponSanitizeElement", w, { tagName: ne, allowedTags: D }),
              (!Xi(w.firstElementChild) &&
                (!Xi(w.content) || !Xi(w.content.firstElementChild)) &&
                ee(/<[/\w]/g, w.innerHTML) &&
                ee(/<[/\w]/g, w.textContent)) ||
                (ne === "select" && ee(/<template/i, w.innerHTML)))
            )
              return Tt(w), !0;
            if (!D[ne] || ze[ne]) {
              if (Wi && !ti[ne]) {
                var Ge = St(w) || w.parentNode,
                  ht = Xt(w) || w.childNodes;
                if (ht && Ge)
                  for (var _t = ht.length, dt = _t - 1; dt >= 0; --dt)
                    Ge.insertBefore(Ci(ht[dt], !0), Rt(w));
              }
              return !ze[ne] &&
                Ea(ne) &&
                ((Ce.tagNameCheck instanceof RegExp &&
                  ee(Ce.tagNameCheck, ne)) ||
                  (Ce.tagNameCheck instanceof Function && Ce.tagNameCheck(ne)))
                ? !1
                : (Tt(w), !0);
            }
            return (w instanceof Ye && !gi(w)) ||
              ((ne === "noscript" || ne === "noembed") &&
                ee(/<\/no(script|embed)/i, w.innerHTML))
              ? (Tt(w), !0)
              : (Et &&
                  w.nodeType === 3 &&
                  ((B = w.textContent),
                  (B = N(B, Ot, " ")),
                  (B = N(B, mi, " ")),
                  w.textContent !== B &&
                    (P(q.removed, { element: w.cloneNode() }),
                    (w.textContent = B))),
                Gt("afterSanitizeElements", w, null),
                !1);
          },
          ka = function (w, B, ne) {
            if (ln && (B === "id" || B === "name") && (ne in be || ne in xe))
              return !1;
            if (!(zt && !At[B] && ee(Si, B))) {
              if (!(Pt && ee(Oi, B))) {
                if (!$[B] || At[B]) {
                  if (
                    !(
                      (Ea(w) &&
                        ((Ce.tagNameCheck instanceof RegExp &&
                          ee(Ce.tagNameCheck, w)) ||
                          (Ce.tagNameCheck instanceof Function &&
                            Ce.tagNameCheck(w))) &&
                        ((Ce.attributeNameCheck instanceof RegExp &&
                          ee(Ce.attributeNameCheck, B)) ||
                          (Ce.attributeNameCheck instanceof Function &&
                            Ce.attributeNameCheck(B)))) ||
                      (B === "is" &&
                        Ce.allowCustomizedBuiltInElements &&
                        ((Ce.tagNameCheck instanceof RegExp &&
                          ee(Ce.tagNameCheck, ne)) ||
                          (Ce.tagNameCheck instanceof Function &&
                            Ce.tagNameCheck(ne))))
                    )
                  )
                    return !1;
                } else if (!Zi[B]) {
                  if (!ee(E, N(ne, Mi, ""))) {
                    if (
                      !(
                        (B === "src" || B === "xlink:href" || B === "href") &&
                        w !== "script" &&
                        oe(ne, "data:") === 0 &&
                        on[w]
                      )
                    ) {
                      if (!(ut && !ee(Li, N(ne, Mi, "")))) {
                        if (ne) return !1;
                      }
                    }
                  }
                }
              }
            }
            return !0;
          },
          Ea = function (w) {
            return w.indexOf("-") > 0;
          },
          Ta = function (w) {
            var B = void 0,
              ne = void 0,
              Ge = void 0,
              ht = void 0;
            Gt("beforeSanitizeAttributes", w, null);
            var _t = w.attributes;
            if (!!_t) {
              var dt = {
                attrName: "",
                attrValue: "",
                keepAttr: !0,
                allowedAttributes: $,
              };
              for (ht = _t.length; ht--; ) {
                B = _t[ht];
                var dn = B,
                  Mt = dn.name,
                  Ca = dn.namespaceURI;
                if (
                  ((ne = le(B.value)),
                  (Ge = ae(Mt)),
                  (dt.attrName = Ge),
                  (dt.attrValue = ne),
                  (dt.keepAttr = !0),
                  (dt.forceKeepAttr = void 0),
                  Gt("uponSanitizeAttribute", w, dt),
                  (ne = dt.attrValue),
                  !dt.forceKeepAttr && (ba(Mt, w), !!dt.keepAttr))
                ) {
                  if (ee(/\/>/i, ne)) {
                    ba(Mt, w);
                    continue;
                  }
                  Et && ((ne = N(ne, Ot, " ")), (ne = N(ne, mi, " ")));
                  var uf = ae(w.nodeName);
                  if (!!ka(uf, Ge, ne))
                    try {
                      Ca
                        ? w.setAttributeNS(Ca, Mt, ne)
                        : w.setAttribute(Mt, ne),
                        O(q.removed);
                    } catch (mf) {}
                }
              }
              Gt("afterSanitizeAttributes", w, null);
            }
          },
          ff = function ce(w) {
            var B = void 0,
              ne = wa(w);
            for (Gt("beforeSanitizeShadowDOM", w, null); (B = ne.nextNode()); )
              Gt("uponSanitizeShadowNode", B, null),
                !ya(B) && (B.content instanceof Je && ce(B.content), Ta(B));
            Gt("afterSanitizeShadowDOM", w, null);
          };
        return (
          (q.sanitize = function (ce, w) {
            var B = void 0,
              ne = void 0,
              Ge = void 0,
              ht = void 0,
              _t = void 0;
            if (
              ((Ki = !ce),
              Ki && (ce = "<!-->"),
              typeof ce != "string" && !Xi(ce))
            ) {
              if (typeof ce.toString != "function")
                throw Z("toString is not a function");
              if (((ce = ce.toString()), typeof ce != "string"))
                throw Z("dirty is not a string, aborting");
            }
            if (!q.isSupported) {
              if (
                qe(G.toStaticHTML) === "object" ||
                typeof G.toStaticHTML == "function"
              ) {
                if (typeof ce == "string") return G.toStaticHTML(ce);
                if (Xi(ce)) return G.toStaticHTML(ce.outerHTML);
              }
              return ce;
            }
            if (
              (Gi || pi(w),
              (q.removed = []),
              typeof ce == "string" && (_i = !1),
              _i)
            ) {
              if (ce.nodeName) {
                var dt = ae(ce.nodeName);
                if (!D[dt] || ze[dt])
                  throw Z(
                    "root node is forbidden and cannot be sanitized in-place",
                  );
              }
            } else if (ce instanceof ft)
              (B = va("<!---->")),
                (ne = B.ownerDocument.importNode(ce, !0)),
                (ne.nodeType === 1 && ne.nodeName === "BODY") ||
                ne.nodeName === "HTML"
                  ? (B = ne)
                  : B.appendChild(ne);
            else {
              if (!$t && !Et && !Vt && ce.indexOf("<") === -1)
                return kt && Di ? kt.createHTML(ce) : ce;
              if (((B = va(ce)), !B)) return $t ? null : Di ? Ai : "";
            }
            B && hi && Tt(B.firstChild);
            for (var dn = wa(_i ? ce : B); (Ge = dn.nextNode()); )
              (Ge.nodeType === 3 && Ge === ht) ||
                ya(Ge) ||
                (Ge.content instanceof Je && ff(Ge.content), Ta(Ge), (ht = Ge));
            if (((ht = null), _i)) return ce;
            if ($t) {
              if (Ni)
                for (_t = Bt.call(B.ownerDocument); B.firstChild; )
                  _t.appendChild(B.firstChild);
              else _t = B;
              return $.shadowroot && (_t = Vi.call(ue, _t, !0)), _t;
            }
            var Mt = Vt ? B.outerHTML : B.innerHTML;
            return (
              Et && ((Mt = N(Mt, Ot, " ")), (Mt = N(Mt, mi, " "))),
              kt && Di ? kt.createHTML(Mt) : Mt
            );
          }),
          (q.setConfig = function (ce) {
            pi(ce), (Gi = !0);
          }),
          (q.clearConfig = function () {
            (Ve = null), (Gi = !1);
          }),
          (q.isValidAttribute = function (ce, w, B) {
            Ve || pi({});
            var ne = ae(ce),
              Ge = ae(w);
            return ka(ne, Ge, B);
          }),
          (q.addHook = function (ce, w) {
            typeof w == "function" && ((gt[ce] = gt[ce] || []), P(gt[ce], w));
          }),
          (q.removeHook = function (ce) {
            gt[ce] && O(gt[ce]);
          }),
          (q.removeHooks = function (ce) {
            gt[ce] && (gt[ce] = []);
          }),
          (q.removeAllHooks = function () {
            gt = {};
          }),
          q
        );
      }
      var Ut = Qe();
      return Ut;
    });
  });
  function Ar(i, e, t) {
    const n = i.slice();
    return (n[6] = e[t]), n;
  }
  function Sr(i) {
    let e,
      t,
      n = i[2] && Array.isArray(i[2]) && i[2].length > 0,
      r = typeof i[1] !== null && Or(i),
      a = n && Lr(i);
    return {
      c() {
        r && r.c(),
          (e = z()),
          (t = v("div")),
          a && a.c(),
          f(t, "class", "attachment");
      },
      m(l, s) {
        r && r.m(l, s), g(l, e, s), g(l, t, s), a && a.m(t, null);
      },
      p(l, s) {
        typeof l[1] !== null
          ? r
            ? r.p(l, s)
            : ((r = Or(l)), r.c(), r.m(e.parentNode, e))
          : r && (r.d(1), (r = null)),
          s & 4 && (n = l[2] && Array.isArray(l[2]) && l[2].length > 0),
          n
            ? a
              ? a.p(l, s)
              : ((a = Lr(l)), a.c(), a.m(t, null))
            : a && (a.d(1), (a = null));
      },
      d(l) {
        r && r.d(l), l && u(e), l && u(t), a && a.d();
      },
    };
  }
  function Or(i) {
    let e,
      t = Ei.sanitize(i[1]) + "",
      n;
    return {
      c() {
        (e = new mn()), (n = Be()), (e.a = n);
      },
      m(r, a) {
        e.m(t, r, a), g(r, n, a);
      },
      p(r, a) {
        a & 2 && t !== (t = Ei.sanitize(r[1]) + "") && e.p(t);
      },
      d(r) {
        r && u(n), r && e.d();
      },
    };
  }
  function Lr(i) {
    let e,
      t = i[2],
      n = [];
    for (let r = 0; r < t.length; r += 1) n[r] = Mr(Ar(i, t, r));
    return {
      c() {
        for (let r = 0; r < n.length; r += 1) n[r].c();
        e = Be();
      },
      m(r, a) {
        for (let l = 0; l < n.length; l += 1) n[l].m(r, a);
        g(r, e, a);
      },
      p(r, a) {
        if (a & 12) {
          t = r[2];
          let l;
          for (l = 0; l < t.length; l += 1) {
            const s = Ar(r, t, l);
            n[l]
              ? n[l].p(s, a)
              : ((n[l] = Mr(s)), n[l].c(), n[l].m(e.parentNode, e));
          }
          for (; l < n.length; l += 1) n[l].d(1);
          n.length = t.length;
        }
      },
      d(r) {
        bt(n, r), r && u(e);
      },
    };
  }
  function Mr(i) {
    let e,
      t = (i[6].filename || i[6].id) + "",
      n,
      r,
      a,
      l;
    function s(...o) {
      return i[4](i[6], ...o);
    }
    return {
      c() {
        (e = v("button")), (n = J(t)), (r = z());
      },
      m(o, c) {
        g(o, e, c),
          y(e, n),
          y(e, r),
          a || ((l = Y(e, "click", Ke(s))), (a = !0));
      },
      p(o, c) {
        (i = o),
          c & 4 && t !== (t = (i[6].filename || i[6].id) + "") && pe(n, t);
      },
      d(o) {
        o && u(e), (a = !1), l();
      },
    };
  }
  function Is(i) {
    let e,
      t = i[0] && Sr(i);
    return {
      c() {
        (e = v("div")), t && t.c(), (this.c = k);
      },
      m(n, r) {
        g(n, e, r), t && t.m(e, null);
      },
      p(n, [r]) {
        n[0]
          ? t
            ? t.p(n, r)
            : ((t = Sr(n)), t.c(), t.m(e, null))
          : t && (t.d(1), (t = null));
      },
      i: k,
      o: k,
      d(n) {
        n && u(e), t && t.d();
      },
    };
  }
  function Fs(i, e, t) {
    let { message: n } = e,
      { body: r } = e;
    const a = Ui(Zt());
    async function l(c, d) {
      c.stopImmediatePropagation(),
        a("downloadClicked", { event: c, message: n, file: d });
    }
    let s = [];
    hn(() => {
      if (n && n.files.length > 0)
        for (const [c, d] of n.files.entries())
          Cr(d) && t(2, (s = [...s, n.files[c]]));
    });
    const o = (c, d) => l(d, c);
    return (
      (i.$$set = (c) => {
        "message" in c && t(0, (n = c.message)),
          "body" in c && t(1, (r = c.body));
      }),
      [n, r, s, l, o]
    );
  }
  class xs extends Jt {
    constructor(e) {
      super();
      (this.shadowRoot.innerHTML =
        "<style>div{width:inherit}div div.attachment{margin:1rem 0 0 0;display:flex;gap:0.5rem}div div.attachment button{height:fit-content;width:max-content;padding:0.3rem 1rem;border:1px solid var(--grey);border-radius:30px;background:white;cursor:pointer}div div.attachment button:hover{background:var(--grey-light)}</style>"),
        We(
          this,
          {
            target: this.shadowRoot,
            props: ni(this.attributes),
            customElement: !0,
          },
          Fs,
          Is,
          Ue,
          { message: 0, body: 1 },
          null,
        ),
        e &&
          (e.target && g(e.target, this, e.anchor),
          e.props && (this.$set(e.props), re()));
    }
    static get observedAttributes() {
      return ["message", "body"];
    }
    get message() {
      return this.$$.ctx[0];
    }
    set message(e) {
      this.$$set({ message: e }), re();
    }
    get body() {
      return this.$$.ctx[1];
    }
    set body(e) {
      this.$$set({ body: e }), re();
    }
  }
  customElements.define("nylas-message-body", xs);
  function Nr(i) {
    let e, t;
    return {
      c() {
        (e = v("p")), (t = J(i[3]));
      },
      m(n, r) {
        g(n, e, r), y(e, t);
      },
      p(n, r) {
        r & 8 && pe(t, n[3]);
      },
      d(n) {
        n && u(e);
      },
    };
  }
  function Dr(i) {
    let e, t, n;
    var r = i[2];
    function a(l) {
      return { props: { "aria-hidden": "true" } };
    }
    return (
      r && (t = new r(a())),
      {
        c() {
          (e = v("div")),
            t && He(t.$$.fragment),
            f(e, "class", "icon-container"),
            we(e, "reverse-icon", i[2] && i[4]);
        },
        m(l, s) {
          g(l, e, s), t && Fe(t, e, null), (n = !0);
        },
        p(l, s) {
          if (r !== (r = l[2])) {
            if (t) {
              Ae();
              const o = t;
              F(o.$$.fragment, 1, 0, () => {
                Ie(o, 1);
              }),
                Se();
            }
            r
              ? ((t = new r(a())),
                He(t.$$.fragment),
                A(t.$$.fragment, 1),
                Fe(t, e, null))
              : (t = null);
          }
          s & 20 && we(e, "reverse-icon", l[2] && l[4]);
        },
        i(l) {
          n || (t && A(t.$$.fragment, l), (n = !0));
        },
        o(l) {
          t && F(t.$$.fragment, l), (n = !1);
        },
        d(l) {
          l && u(e), t && Ie(t);
        },
      }
    );
  }
  function Pr(i) {
    let e, t;
    return {
      c() {
        (e = v("p")),
          (t = J(i[0])),
          f(e, "id", i[1]),
          f(e, "role", "tooltip"),
          f(e, "tabindex", "0"),
          f(e, "class", "tooltip");
      },
      m(n, r) {
        g(n, e, r), y(e, t);
      },
      p(n, r) {
        r & 1 && pe(t, n[0]), r & 2 && f(e, "id", n[1]);
      },
      d(n) {
        n && u(e);
      },
    };
  }
  function Us(i) {
    let e,
      t,
      n,
      r,
      a,
      l,
      s,
      o,
      c,
      d,
      m = i[3] && Nr(i),
      h = i[2] && Dr(i),
      b = i[4] && Pr(i);
    return {
      c() {
        (e = v("button")),
          m && m.c(),
          (t = z()),
          h && h.c(),
          (l = z()),
          b && b.c(),
          (s = Be()),
          (this.c = k),
          f(e, "class", "tooltip-trigger"),
          f(e, "aria-expanded", (n = i[4] ? "true" : "false")),
          f(e, "id", (r = i[1] ? `tooltip-trigger-${i[1]}` : "")),
          f(e, "aria-describedby", i[1]),
          f(e, "aria-label", (a = i[4] ? "hide email" : "show email"));
      },
      m(_, O) {
        g(_, e, O),
          m && m.m(e, null),
          y(e, t),
          h && h.m(e, null),
          g(_, l, O),
          b && b.m(_, O),
          g(_, s, O),
          (o = !0),
          c || ((d = Y(e, "click", Ke(i[7]))), (c = !0));
      },
      p(_, [O]) {
        _[3]
          ? m
            ? m.p(_, O)
            : ((m = Nr(_)), m.c(), m.m(e, t))
          : m && (m.d(1), (m = null)),
          _[2]
            ? h
              ? (h.p(_, O), O & 4 && A(h, 1))
              : ((h = Dr(_)), h.c(), A(h, 1), h.m(e, null))
            : h &&
              (Ae(),
              F(h, 1, 1, () => {
                h = null;
              }),
              Se()),
          (!o || (O & 16 && n !== (n = _[4] ? "true" : "false"))) &&
            f(e, "aria-expanded", n),
          (!o ||
            (O & 2 && r !== (r = _[1] ? `tooltip-trigger-${_[1]}` : ""))) &&
            f(e, "id", r),
          (!o || O & 2) && f(e, "aria-describedby", _[1]),
          (!o || (O & 16 && a !== (a = _[4] ? "hide email" : "show email"))) &&
            f(e, "aria-label", a),
          _[4]
            ? b
              ? b.p(_, O)
              : ((b = Pr(_)), b.c(), b.m(s.parentNode, s))
            : b && (b.d(1), (b = null));
      },
      i(_) {
        o || (A(h), (o = !0));
      },
      o(_) {
        F(h), (o = !1);
      },
      d(_) {
        _ && u(e),
          m && m.d(),
          h && h.d(),
          _ && u(l),
          b && b.d(_),
          _ && u(s),
          (c = !1),
          d();
      },
    };
  }
  function Bs(i, e, t) {
    let n;
    const r = Ui(Zt());
    let { current_tooltip_id: a } = e,
      { content: l } = e,
      { id: s } = e,
      { icon: o } = e,
      { text: c } = e;
    function d() {
      a !== s ? r("toggleTooltip", { tooltipID: s }) : t(4, (n = !n));
    }
    const m = (h) => d();
    return (
      (i.$$set = (h) => {
        "current_tooltip_id" in h && t(6, (a = h.current_tooltip_id)),
          "content" in h && t(0, (l = h.content)),
          "id" in h && t(1, (s = h.id)),
          "icon" in h && t(2, (o = h.icon)),
          "text" in h && t(3, (c = h.text));
      }),
      (i.$$.update = () => {
        i.$$.dirty & 66 && t(4, (n = !!(a && a === s)));
      }),
      [l, s, o, c, n, d, a, m]
    );
  }
  class Hs extends Jt {
    constructor(e) {
      super();
      (this.shadowRoot.innerHTML =
        "<style>button.tooltip-trigger{background:transparent;border:none;box-shadow:none;cursor:pointer;padding:0;height:auto;display:flex;flex-direction:row;align-items:center;align-content:center;justify-content:center}.icon-container{width:1rem}.icon-container.reverse-icon{transform:rotate(180deg)}p.tooltip{background:var(--grey-lightest);border-radius:2px;color:var(--grey-dark);box-shadow:0px 3px 2px rgba(0, 0, 0, 0.25);left:50%;padding:0.5rem;position:absolute;top:8px;transform:translate(-50%, 0);width:max-content;max-width:240px;max-height:240px;overflow-y:scroll;word-break:break-word;white-space:pre-line;z-index:1}</style>"),
        We(
          this,
          {
            target: this.shadowRoot,
            props: ni(this.attributes),
            customElement: !0,
          },
          Bs,
          Us,
          Ue,
          { current_tooltip_id: 6, content: 0, id: 1, icon: 2, text: 3 },
          null,
        ),
        e &&
          (e.target && g(e.target, this, e.anchor),
          e.props && (this.$set(e.props), re()));
    }
    static get observedAttributes() {
      return ["current_tooltip_id", "content", "id", "icon", "text"];
    }
    get current_tooltip_id() {
      return this.$$.ctx[6];
    }
    set current_tooltip_id(e) {
      this.$$set({ current_tooltip_id: e }), re();
    }
    get content() {
      return this.$$.ctx[0];
    }
    set content(e) {
      this.$$set({ content: e }), re();
    }
    get id() {
      return this.$$.ctx[1];
    }
    set id(e) {
      this.$$set({ id: e }), re();
    }
    get icon() {
      return this.$$.ctx[2];
    }
    set icon(e) {
      this.$$set({ icon: e }), re();
    }
    get text() {
      return this.$$.ctx[3];
    }
    set text(e) {
      this.$$set({ text: e }), re();
    }
  }
  customElements.define("nylas-tooltip", Hs);
  function zs(i) {
    let e,
      t,
      n,
      r,
      a,
      l,
      s,
      o,
      c,
      d,
      m,
      h = [
        { id: "Capa_1" },
        { "enable-background": "new 0 0 497 497" },
        { height: "512" },
        { viewBox: "0 0 497 497" },
        { xmlns: "http://www.w3.org/2000/svg" },
        i[0],
      ],
      b = {};
    for (let _ = 0; _ < h.length; _ += 1) b = ie(b, h[_]);
    return {
      c() {
        (e = W("svg")),
          (t = W("g")),
          (n = W("circle")),
          (r = W("circle")),
          (a = W("circle")),
          (l = W("ellipse")),
          (s = W("ellipse")),
          (o = W("ellipse")),
          (c = W("ellipse")),
          (d = W("ellipse")),
          (m = W("circle")),
          this.h();
      },
      l(_) {
        e = Q(_, "svg", {
          id: !0,
          "enable-background": !0,
          height: !0,
          viewBox: !0,
          xmlns: !0,
        });
        var O = K(e);
        t = Q(O, "g", {});
        var P = K(t);
        (n = Q(P, "circle", { cx: !0, cy: !0, fill: !0, r: !0 })),
          K(n).forEach(u),
          (r = Q(P, "circle", { cx: !0, cy: !0, fill: !0, r: !0 })),
          K(r).forEach(u),
          (a = Q(P, "circle", { cx: !0, cy: !0, fill: !0, r: !0 })),
          K(a).forEach(u),
          (l = Q(P, "ellipse", { cx: !0, cy: !0, fill: !0, rx: !0, ry: !0 })),
          K(l).forEach(u),
          (s = Q(P, "ellipse", { cx: !0, cy: !0, fill: !0, rx: !0, ry: !0 })),
          K(s).forEach(u),
          (o = Q(P, "ellipse", { cx: !0, cy: !0, fill: !0, rx: !0, ry: !0 })),
          K(o).forEach(u),
          (c = Q(P, "ellipse", { cx: !0, cy: !0, fill: !0, rx: !0, ry: !0 })),
          K(c).forEach(u),
          (d = Q(P, "ellipse", { cx: !0, cy: !0, fill: !0, rx: !0, ry: !0 })),
          K(d).forEach(u),
          (m = Q(P, "circle", { cx: !0, cy: !0, fill: !0, r: !0 })),
          K(m).forEach(u),
          P.forEach(u),
          O.forEach(u),
          this.h();
      },
      h() {
        f(n, "cx", "98"),
          f(n, "cy", "376"),
          f(n, "fill", "#909ba6"),
          f(n, "r", "53"),
          f(r, "cx", "439"),
          f(r, "cy", "336"),
          f(r, "fill", "#c8d2dc"),
          f(r, "r", "46"),
          f(a, "cx", "397"),
          f(a, "cy", "112"),
          f(a, "fill", "#e9edf1"),
          f(a, "r", "38"),
          f(l, "cx", "56.245"),
          f(l, "cy", "244.754"),
          f(l, "fill", "#7e8b96"),
          f(l, "rx", "56.245"),
          f(l, "ry", "54.874"),
          f(s, "cx", "217.821"),
          f(s, "cy", "447.175"),
          f(s, "fill", "#a2abb8"),
          f(s, "rx", "51.132"),
          f(s, "ry", "49.825"),
          f(o, "cx", "349.229"),
          f(o, "cy", "427.873"),
          f(o, "fill", "#b9c3cd"),
          f(o, "rx", "48.575"),
          f(o, "ry", "47.297"),
          f(c, "cx", "117.092"),
          f(c, "cy", "114.794"),
          f(c, "fill", "#5f6c75"),
          f(c, "rx", "58.801"),
          f(c, "ry", "57.397"),
          f(d, "cx", "453.538"),
          f(d, "cy", "216.477"),
          f(d, "fill", "#dce6eb"),
          f(d, "rx", "43.462"),
          f(d, "ry", "42.656"),
          f(m, "cx", "263"),
          f(m, "cy", "62"),
          f(m, "fill", "#4e5a61"),
          f(m, "r", "62"),
          Te(e, b);
      },
      m(_, O) {
        et(_, e, O),
          fe(e, t),
          fe(t, n),
          fe(t, r),
          fe(t, a),
          fe(t, l),
          fe(t, s),
          fe(t, o),
          fe(t, c),
          fe(t, d),
          fe(t, m);
      },
      p(_, [O]) {
        Te(
          e,
          (b = tt(h, [
            { id: "Capa_1" },
            { "enable-background": "new 0 0 497 497" },
            { height: "512" },
            { viewBox: "0 0 497 497" },
            { xmlns: "http://www.w3.org/2000/svg" },
            O & 1 && _[0],
          ])),
        );
      },
      i: k,
      o: k,
      d(_) {
        _ && u(e);
      },
    };
  }
  function Vs(i, e, t) {
    return (
      (i.$$set = (n) => {
        t(0, (e = ie(ie({}, e), ve(n))));
      }),
      (e = ve(e)),
      [e]
    );
  }
  class Gs extends it {
    constructor(e) {
      super();
      We(this, e, Vs, zs, Ue, {});
    }
  }
  function Ws(i) {
    let e,
      t,
      n,
      r,
      a = [
        { width: "21px" },
        { height: "21px" },
        { viewBox: "0 0 21 21" },
        { xmlns: "http://www.w3.org/2000/svg" },
        i[0],
      ],
      l = {};
    for (let s = 0; s < a.length; s += 1) l = ie(l, a[s]);
    return {
      c() {
        (e = W("svg")),
          (t = W("g")),
          (n = W("path")),
          (r = W("path")),
          this.h();
      },
      l(s) {
        e = Q(s, "svg", { width: !0, height: !0, viewBox: !0, xmlns: !0 });
        var o = K(e);
        t = Q(o, "g", {
          fill: !0,
          "fill-rule": !0,
          stroke: !0,
          "stroke-linecap": !0,
          "stroke-linejoin": !0,
          "stroke-width": !0,
          transform: !0,
        });
        var c = K(t);
        (n = Q(c, "path", { d: !0 })),
          K(n).forEach(u),
          (r = Q(c, "path", { d: !0 })),
          K(r).forEach(u),
          c.forEach(u),
          o.forEach(u),
          this.h();
      },
      h() {
        f(n, "d", "m11 8v-2c0-1.65685425-1.34314575-3-3-3h-8"),
          f(r, "d", "m3 6-3.001-3 3.001-3"),
          f(t, "fill", "none"),
          f(t, "fill-rule", "evenodd"),
          f(t, "stroke", "currentColor"),
          f(t, "stroke-linecap", "round"),
          f(t, "stroke-linejoin", "round"),
          f(t, "stroke-width", "1.5px"),
          f(t, "transform", "translate(4.5 6.5)"),
          Te(e, l);
      },
      m(s, o) {
        et(s, e, o), fe(e, t), fe(t, n), fe(t, r);
      },
      p(s, [o]) {
        Te(
          e,
          (l = tt(a, [
            { width: "21px" },
            { height: "21px" },
            { viewBox: "0 0 21 21" },
            { xmlns: "http://www.w3.org/2000/svg" },
            o & 1 && s[0],
          ])),
        );
      },
      i: k,
      o: k,
      d(s) {
        s && u(e);
      },
    };
  }
  function Zs(i, e, t) {
    return (
      (i.$$set = (n) => {
        t(0, (e = ie(ie({}, e), ve(n))));
      }),
      (e = ve(e)),
      [e]
    );
  }
  class jr extends it {
    constructor(e) {
      super();
      We(this, e, Zs, Ws, Ue, {});
    }
  }
  function Js(i) {
    let e,
      t,
      n,
      r,
      a,
      l = [
        { width: "21px" },
        { height: "21px" },
        { viewBox: "0 0 21 21" },
        { xmlns: "http://www.w3.org/2000/svg" },
        i[0],
      ],
      s = {};
    for (let o = 0; o < l.length; o += 1) s = ie(s, l[o]);
    return {
      c() {
        (e = W("svg")),
          (t = W("g")),
          (n = W("path")),
          (r = W("path")),
          (a = W("path")),
          this.h();
      },
      l(o) {
        e = Q(o, "svg", { width: !0, height: !0, viewBox: !0, xmlns: !0 });
        var c = K(e);
        t = Q(c, "g", {
          fill: !0,
          "fill-rule": !0,
          stroke: !0,
          "stroke-linecap": !0,
          "stroke-linejoin": !0,
          "stroke-width": !0,
          transform: !0,
        });
        var d = K(t);
        (n = Q(d, "path", { d: !0 })),
          K(n).forEach(u),
          (r = Q(d, "path", { d: !0 })),
          K(r).forEach(u),
          (a = Q(d, "path", { d: !0 })),
          K(a).forEach(u),
          d.forEach(u),
          c.forEach(u),
          this.h();
      },
      h() {
        f(n, "d", "m14 8v-2c0-1.65685425-1.3431458-3-3-3h-8"),
          f(r, "d", "m3 6-3.001-3 3.001-3"),
          f(a, "d", "m6 6-3.001-3 3.001-3"),
          f(t, "fill", "none"),
          f(t, "fill-rule", "evenodd"),
          f(t, "stroke", "currentColor"),
          f(t, "stroke-linecap", "round"),
          f(t, "stroke-linejoin", "round"),
          f(t, "stroke-width", "1.5px"),
          f(t, "transform", "translate(3.5 6.5)"),
          Te(e, s);
      },
      m(o, c) {
        et(o, e, c), fe(e, t), fe(t, n), fe(t, r), fe(t, a);
      },
      p(o, [c]) {
        Te(
          e,
          (s = tt(l, [
            { width: "21px" },
            { height: "21px" },
            { viewBox: "0 0 21 21" },
            { xmlns: "http://www.w3.org/2000/svg" },
            c & 1 && o[0],
          ])),
        );
      },
      i: k,
      o: k,
      d(o) {
        o && u(e);
      },
    };
  }
  function Ys(i, e, t) {
    return (
      (i.$$set = (n) => {
        t(0, (e = ie(ie({}, e), ve(n))));
      }),
      (e = ve(e)),
      [e]
    );
  }
  class Rr extends it {
    constructor(e) {
      super();
      We(this, e, Ys, Js, Ue, {});
    }
  }
  function Ks(i) {
    let e,
      t,
      n,
      r,
      a = [
        { width: "21px" },
        { height: "21px" },
        { viewBox: "0 0 21 21" },
        { xmlns: "http://www.w3.org/2000/svg" },
        i[0],
      ],
      l = {};
    for (let s = 0; s < a.length; s += 1) l = ie(l, a[s]);
    return {
      c() {
        (e = W("svg")),
          (t = W("g")),
          (n = W("path")),
          (r = W("path")),
          this.h();
      },
      l(s) {
        e = Q(s, "svg", { width: !0, height: !0, viewBox: !0, xmlns: !0 });
        var o = K(e);
        t = Q(o, "g", {
          fill: !0,
          "fill-rule": !0,
          stroke: !0,
          "stroke-linecap": !0,
          "stroke-linejoin": !0,
          "stroke-width": !0,
          transform: !0,
        });
        var c = K(t);
        (n = Q(c, "path", { d: !0 })),
          K(n).forEach(u),
          (r = Q(c, "path", { d: !0 })),
          K(r).forEach(u),
          c.forEach(u),
          o.forEach(u),
          this.h();
      },
      h() {
        f(n, "d", "m0 8v-2c0-1.65685425 1.34314575-3 3-3h8"),
          f(r, "d", "m7.999 6 3.001-3-3.001-3"),
          f(t, "fill", "none"),
          f(t, "fill-rule", "evenodd"),
          f(t, "stroke", "currentColor"),
          f(t, "stroke-linecap", "round"),
          f(t, "stroke-linejoin", "round"),
          f(t, "stroke-width", "1.5px"),
          f(t, "transform", "translate(5.5 6.5)"),
          Te(e, l);
      },
      m(s, o) {
        et(s, e, o), fe(e, t), fe(t, n), fe(t, r);
      },
      p(s, [o]) {
        Te(
          e,
          (l = tt(a, [
            { width: "21px" },
            { height: "21px" },
            { viewBox: "0 0 21 21" },
            { xmlns: "http://www.w3.org/2000/svg" },
            o & 1 && s[0],
          ])),
        );
      },
      i: k,
      o: k,
      d(s) {
        s && u(e);
      },
    };
  }
  function Xs(i, e, t) {
    return (
      (i.$$set = (n) => {
        t(0, (e = ie(ie({}, e), ve(n))));
      }),
      (e = ve(e)),
      [e]
    );
  }
  class Ir extends it {
    constructor(e) {
      super();
      We(this, e, Xs, Ks, Ue, {});
    }
  }
  var Qs = "@nylas/components-email",
    qs = "1.1.7",
    $s = {
      type: "git",
      url: "github:nylas/components.git",
      directory: "components/email",
    },
    ec = {
      build: "rollup -c",
      dev: "rollup -c -w",
      tscheck: "tsc && svelte-check",
      start: "echo 'Nothing to start'",
    },
    tc = "index.js",
    ic = "cca94159c114ecff613f41caa0a4468e0f698e2c",
    nc = { "@types/dompurify": "^2.3.1" },
    rc = { dompurify: "^2.3.3" },
    lc = {
      name: Qs,
      version: qs,
      repository: $s,
      scripts: ec,
      main: tc,
      gitHead: ic,
      devDependencies: nc,
      dependencies: rc,
    };
  function Fr(i, e, t) {
    const n = i.slice();
    return (n[124] = e[t]), (n[126] = t), n;
  }
  function xr(i, e, t) {
    const n = i.slice();
    return (n[134] = e[t]), n;
  }
  function Ur(i, e, t) {
    const n = i.slice();
    return (n[129] = e[t]), n;
  }
  function Br(i, e, t) {
    const n = i.slice();
    return (n[139] = e[t]), (n[141] = t), n;
  }
  function Hr(i, e, t) {
    const n = i.slice();
    return (n[120] = e[t]), (n[121] = e), (n[122] = t), n;
  }
  function zr(i, e, t) {
    const n = i.slice();
    return (n[124] = e[t]), (n[126] = t), n;
  }
  function Vr(i, e, t) {
    const n = i.slice();
    return (n[2] = e[t]), (n[127] = e), (n[128] = t), n;
  }
  function Gr(i, e, t) {
    const n = i.slice();
    return (n[129] = e[t]), n;
  }
  function Wr(i, e, t) {
    const n = i.slice();
    return (n[124] = e[t]), (n[126] = t), n;
  }
  function Zr(i) {
    let e, t, n;
    return {
      c() {
        (e = v("link")), f(e, "rel", "stylesheet"), f(e, "href", i[16]);
      },
      m(r, a) {
        g(r, e, a),
          t || ((n = [Y(e, "load", i[78]), Y(e, "error", i[79])]), (t = !0));
      },
      p(r, a) {
        a[0] & 65536 && f(e, "href", r[16]);
      },
      d(r) {
        r && u(e), (t = !1), ot(n);
      },
    };
  }
  function ac(i) {
    let e = Object.keys(i[4].message).length > 0,
      t,
      n,
      r = e && Jr(i);
    return {
      c() {
        r && r.c(), (t = Be());
      },
      m(a, l) {
        r && r.m(a, l), g(a, t, l), (n = !0);
      },
      p(a, l) {
        l[0] & 16 && (e = Object.keys(a[4].message).length > 0),
          e
            ? r
              ? (r.p(a, l), l[0] & 16 && A(r, 1))
              : ((r = Jr(a)), r.c(), A(r, 1), r.m(t.parentNode, t))
            : r &&
              (Ae(),
              F(r, 1, 1, () => {
                r = null;
              }),
              Se());
      },
      i(a) {
        n || (A(r), (n = !0));
      },
      o(a) {
        F(r), (n = !1);
      },
      d(a) {
        r && r.d(a), a && u(t);
      },
    };
  }
  function oc(i) {
    let e,
      t,
      n,
      r = {
        ctx: i,
        current: null,
        token: null,
        hasCatch: !1,
        pending: cd,
        then: vc,
        catch: bc,
        value: 3,
        blocks: [, , ,],
      };
    return (
      vt((t = i[7]), r),
      {
        c() {
          (e = Be()), r.block.c();
        },
        m(a, l) {
          g(a, e, l),
            r.block.m(a, (r.anchor = l)),
            (r.mount = () => e.parentNode),
            (r.anchor = e),
            (n = !0);
        },
        p(a, l) {
          (i = a),
            (r.ctx = i),
            (l[0] & 128 && t !== (t = i[7]) && vt(t, r)) || li(r, i, l);
        },
        i(a) {
          n || (A(r.block), (n = !0));
        },
        o(a) {
          for (let l = 0; l < 3; l += 1) {
            const s = r.blocks[l];
            F(s);
          }
          n = !1;
        },
        d(a) {
          a && u(e), r.block.d(a), (r.token = null), (r = null);
        },
      }
    );
  }
  function Jr(i) {
    var ge, M, ct, se, qe, Ze;
    let e,
      t,
      n = ((ge = i[4].message) == null ? void 0 : ge.subject) + "",
      r,
      a,
      l,
      s,
      o,
      c,
      d,
      m,
      h,
      b =
        (i[8] &&
        ((M = i[4].message) == null ? void 0 : M.from[0].email) === i[8]
          ? "me"
          : ((se = (ct = i[4].message) == null ? void 0 : ct.from[0]) == null
              ? void 0
              : se.name) ||
            ((Ze = (qe = i[4].message) == null ? void 0 : qe.from[0]) == null
              ? void 0
              : Ze.email)) + "",
      _,
      O,
      P,
      C,
      I,
      N,
      oe,
      le,
      ee,
      Z,
      X,
      L,
      x,
      Oe = i[4].show_reply_all && i[28](i[4].message),
      Ne,
      ye,
      he,
      de,
      te,
      Le,
      U = i[4].show_contact_avatar && Yr(i),
      _e = {
        ctx: i,
        current: null,
        token: null,
        hasCatch: !1,
        pending: _c,
        then: cc,
        catch: sc,
        value: 123,
      };
    vt(
      (le = i[38]({
        to: i[4].message.to,
        cc: i[4].message.cc,
        bcc: i[4].message.bcc,
      })),
      _e,
    );
    let De = i[4].show_received_timestamp && Qr(i),
      ke = i[4].show_reply && qr(i),
      Me = Oe && $r(i),
      R = i[4].show_forward && el(i);
    function Ee(Pe, je) {
      if (Pe[4].clean_conversation && Pe[4].message.conversation) return gc;
      if (Pe[4].message) return pc;
    }
    let Xe = Ee(i),
      H = Xe && Xe(i);
    return {
      c() {
        var Pe, je;
        (e = v("div")),
          (t = v("header")),
          (r = J(n)),
          (a = z()),
          (l = v("div")),
          (s = v("div")),
          (o = v("div")),
          (c = v("div")),
          U && U.c(),
          (d = z()),
          (m = v("div")),
          (h = v("span")),
          (_ = J(b)),
          (O = z()),
          (P = v("nylas-tooltip")),
          (N = z()),
          (oe = v("div")),
          _e.block.c(),
          (ee = z()),
          (Z = v("section")),
          De && De.c(),
          (X = z()),
          (L = v("div")),
          ke && ke.c(),
          (x = z()),
          Me && Me.c(),
          (Ne = z()),
          R && R.c(),
          (ye = z()),
          (he = v("div")),
          H && H.c(),
          f(h, "class", "name"),
          S(P, "id", (C = (Pe = i[4].message) == null ? void 0 : Pe.id)),
          S(P, "current_tooltip_id", i[13]),
          S(P, "icon", ki),
          S(
            P,
            "content",
            (I = (je = i[4].message) == null ? void 0 : je.from[0].email),
          ),
          f(m, "class", "message-from"),
          f(c, "class", "avatar-info"),
          f(oe, "class", "message-to"),
          f(o, "class", "message-from-to"),
          f(L, "aria-label", "Email Actions"),
          f(L, "role", "toolbar"),
          f(Z, "class", ""),
          f(s, "class", "message-head"),
          f(he, "class", "message-body"),
          f(l, "class", "individual-message expanded"),
          f(e, "class", "email-row expanded singular");
      },
      m(Pe, je) {
        g(Pe, e, je),
          y(e, t),
          y(t, r),
          y(e, a),
          y(e, l),
          y(l, s),
          y(s, o),
          y(o, c),
          U && U.m(c, null),
          y(c, d),
          y(c, m),
          y(m, h),
          y(h, _),
          y(m, O),
          y(m, P),
          y(o, N),
          y(o, oe),
          _e.block.m(oe, (_e.anchor = null)),
          (_e.mount = () => oe),
          (_e.anchor = null),
          y(s, ee),
          y(s, Z),
          De && De.m(Z, null),
          y(Z, X),
          y(Z, L),
          ke && ke.m(L, null),
          y(L, x),
          Me && Me.m(L, null),
          y(L, Ne),
          R && R.m(L, null),
          y(l, ye),
          y(l, he),
          H && H.m(he, null),
          (de = !0),
          te || ((Le = Y(P, "toggleTooltip", i[34])), (te = !0));
      },
      p(Pe, je) {
        var Qe, Ut, G, q, ue, be, Je, pt;
        (i = Pe),
          (!de || je[0] & 16) &&
            n !==
              (n = ((Qe = i[4].message) == null ? void 0 : Qe.subject) + "") &&
            pe(r, n),
          i[4].show_contact_avatar
            ? U
              ? U.p(i, je)
              : ((U = Yr(i)), U.c(), U.m(c, d))
            : U && (U.d(1), (U = null)),
          (!de || je[0] & 272) &&
            b !==
              (b =
                (i[8] &&
                ((Ut = i[4].message) == null ? void 0 : Ut.from[0].email) ===
                  i[8]
                  ? "me"
                  : ((q = (G = i[4].message) == null ? void 0 : G.from[0]) ==
                    null
                      ? void 0
                      : q.name) ||
                    ((be = (ue = i[4].message) == null ? void 0 : ue.from[0]) ==
                    null
                      ? void 0
                      : be.email)) + "") &&
            pe(_, b),
          (!de ||
            (je[0] & 16 &&
              C !== (C = (Je = i[4].message) == null ? void 0 : Je.id))) &&
            S(P, "id", C),
          (!de || je[0] & 8192) && S(P, "current_tooltip_id", i[13]),
          (!de ||
            (je[0] & 16 &&
              I !==
                (I =
                  (pt = i[4].message) == null ? void 0 : pt.from[0].email))) &&
            S(P, "content", I),
          (_e.ctx = i),
          (je[0] & 16 &&
            le !==
              (le = i[38]({
                to: i[4].message.to,
                cc: i[4].message.cc,
                bcc: i[4].message.bcc,
              })) &&
            vt(le, _e)) ||
            li(_e, i, je),
          i[4].show_received_timestamp
            ? De
              ? De.p(i, je)
              : ((De = Qr(i)), De.c(), De.m(Z, X))
            : De && (De.d(1), (De = null)),
          i[4].show_reply
            ? ke
              ? (ke.p(i, je), je[0] & 16 && A(ke, 1))
              : ((ke = qr(i)), ke.c(), A(ke, 1), ke.m(L, x))
            : ke &&
              (Ae(),
              F(ke, 1, 1, () => {
                ke = null;
              }),
              Se()),
          je[0] & 16 && (Oe = i[4].show_reply_all && i[28](i[4].message)),
          Oe
            ? Me
              ? (Me.p(i, je), je[0] & 16 && A(Me, 1))
              : ((Me = $r(i)), Me.c(), A(Me, 1), Me.m(L, Ne))
            : Me &&
              (Ae(),
              F(Me, 1, 1, () => {
                Me = null;
              }),
              Se()),
          i[4].show_forward
            ? R
              ? (R.p(i, je), je[0] & 16 && A(R, 1))
              : ((R = el(i)), R.c(), A(R, 1), R.m(L, null))
            : R &&
              (Ae(),
              F(R, 1, 1, () => {
                R = null;
              }),
              Se()),
          Xe === (Xe = Ee(i)) && H
            ? H.p(i, je)
            : (H && H.d(1), (H = Xe && Xe(i)), H && (H.c(), H.m(he, null)));
      },
      i(Pe) {
        de || (A(ke), A(Me), A(R), (de = !0));
      },
      o(Pe) {
        F(ke), F(Me), F(R), (de = !1);
      },
      d(Pe) {
        Pe && u(e),
          U && U.d(),
          _e.block.d(),
          (_e.token = null),
          (_e = null),
          De && De.d(),
          ke && ke.d(),
          Me && Me.d(),
          R && R.d(),
          H && H.d(),
          (te = !1),
          Le();
      },
    };
  }
  function Yr(i) {
    let e, t;
    return {
      c() {
        (e = v("div")),
          (t = v("nylas-contact-image")),
          S(t, "contact_query", i[12]),
          S(t, "contact", i[17]),
          f(e, "class", "default-avatar");
      },
      m(n, r) {
        g(n, e, r), y(e, t);
      },
      p(n, r) {
        r[0] & 4096 && S(t, "contact_query", n[12]),
          r[0] & 131072 && S(t, "contact", n[17]);
      },
      d(n) {
        n && u(e);
      },
    };
  }
  function sc(i) {
    return { c: k, m: k, p: k, d: k };
  }
  function cc(i) {
    let e,
      t,
      n = i[123].slice(0, st),
      r = [];
    for (let l = 0; l < n.length; l += 1) r[l] = Kr(Fr(i, n, l));
    let a = i[123].length > st && Xr(i);
    return {
      c() {
        for (let l = 0; l < r.length; l += 1) r[l].c();
        (e = z()), a && a.c(), (t = Be());
      },
      m(l, s) {
        for (let o = 0; o < r.length; o += 1) r[o].m(l, s);
        g(l, e, s), a && a.m(l, s), g(l, t, s);
      },
      p(l, s) {
        if ((s[0] & 16) | (s[1] & 128)) {
          n = l[123].slice(0, st);
          let o;
          for (o = 0; o < n.length; o += 1) {
            const c = Fr(l, n, o);
            r[o]
              ? r[o].p(c, s)
              : ((r[o] = Kr(c)), r[o].c(), r[o].m(e.parentNode, e));
          }
          for (; o < r.length; o += 1) r[o].d(1);
          r.length = n.length;
        }
        l[123].length > st
          ? a
            ? a.p(l, s)
            : ((a = Xr(l)), a.c(), a.m(t.parentNode, t))
          : a && (a.d(1), (a = null));
      },
      d(l) {
        bt(r, l), l && u(e), a && a.d(l), l && u(t);
      },
    };
  }
  function dc(i) {
    let e;
    return {
      c() {
        e = J("bcc:");
      },
      m(t, n) {
        g(t, e, n);
      },
      p: k,
      d(t) {
        t && u(e);
      },
    };
  }
  function fc(i) {
    let e;
    return {
      c() {
        e = J("cc:");
      },
      m(t, n) {
        g(t, e, n);
      },
      p: k,
      d(t) {
        t && u(e);
      },
    };
  }
  function uc(i) {
    let e = `to ${
        i[4].you && i[124].email === i[4].you.email_address ? "Me" : ""
      }`,
      t;
    return {
      c() {
        t = J(e);
      },
      m(n, r) {
        g(n, t, r);
      },
      p(n, r) {
        r[0] & 16 &&
          e !==
            (e = `to ${
              n[4].you && n[124].email === n[4].you.email_address ? "Me" : ""
            }`) &&
          pe(t, e);
      },
      d(n) {
        n && u(t);
      },
    };
  }
  function mc(i) {
    let e = i[124].email + "",
      t;
    return {
      c() {
        t = J(e);
      },
      m(n, r) {
        g(n, t, r);
      },
      p(n, r) {
        r[0] & 16 && e !== (e = n[124].email + "") && pe(t, e);
      },
      d(n) {
        n && u(t);
      },
    };
  }
  function hc(i) {
    var s;
    let e = ((s = i[124].name) != null ? s : i[4].you.name) + "",
      t,
      n,
      r = i[124].email + "",
      a,
      l;
    return {
      c() {
        (t = J(e)), (n = J(" <")), (a = J(r)), (l = J(">"));
      },
      m(o, c) {
        g(o, t, c), g(o, n, c), g(o, a, c), g(o, l, c);
      },
      p(o, c) {
        var d;
        c[0] & 16 &&
          e !== (e = ((d = o[124].name) != null ? d : o[4].you.name) + "") &&
          pe(t, e),
          c[0] & 16 && r !== (r = o[124].email + "") && pe(a, r);
      },
      d(o) {
        o && u(t), o && u(n), o && u(a), o && u(l);
      },
    };
  }
  function Kr(i) {
    let e, t;
    function n(c, d) {
      if (c[126] === 0) return uc;
      if (c[124]._type === "cc" && c[126] === c[4].message.to.length) return fc;
      if (
        c[124]._type === "bcc" &&
        c[126] === c[4].message.to.length + c[4].message.cc.length
      )
        return dc;
    }
    let r = n(i),
      a = r && r(i);
    function l(c, d) {
      if (c[124].email && c[124].name) return hc;
      if (c[124].email && !c[124].name) return mc;
    }
    let s = l(i),
      o = s && s(i);
    return {
      c() {
        (e = v("p")), a && a.c(), (t = z()), o && o.c();
      },
      m(c, d) {
        g(c, e, d), a && a.m(e, null), y(e, t), o && o.m(e, null);
      },
      p(c, d) {
        r === (r = n(c)) && a
          ? a.p(c, d)
          : (a && a.d(1), (a = r && r(c)), a && (a.c(), a.m(e, t))),
          s === (s = l(c)) && o
            ? o.p(c, d)
            : (o && o.d(1), (o = s && s(c)), o && (o.c(), o.m(e, null)));
      },
      d(c) {
        c && u(e), a && a.d(), o && o.d();
      },
    };
  }
  function Xr(i) {
    let e, t, n, r, a, l, s;
    return {
      c() {
        (e = v("div")),
          (t = v("nylas-tooltip")),
          S(t, "id", (n = `show-more-participants-${i[4].message.id}`)),
          S(t, "current_tooltip_id", i[13]),
          S(t, "icon", ki),
          S(t, "text", (r = `And ${i[123].length - st} more`)),
          S(t, "content", (a = `${Ti(i[123])}`));
      },
      m(o, c) {
        g(o, e, c),
          y(e, t),
          l || ((s = Y(t, "toggleTooltip", i[34])), (l = !0));
      },
      p(o, c) {
        c[0] & 16 &&
          n !== (n = `show-more-participants-${o[4].message.id}`) &&
          S(t, "id", n),
          c[0] & 8192 && S(t, "current_tooltip_id", o[13]),
          c[0] & 16 &&
            r !== (r = `And ${o[123].length - st} more`) &&
            S(t, "text", r),
          c[0] & 16 && a !== (a = `${Ti(o[123])}`) && S(t, "content", a);
      },
      d(o) {
        o && u(e), (l = !1), s();
      },
    };
  }
  function _c(i) {
    return { c: k, m: k, p: k, d: k };
  }
  function Qr(i) {
    let e,
      t,
      n = Kt(new Date(i[4].message.date * 1e3)) + "",
      r;
    return {
      c() {
        (e = v("div")),
          (t = v("span")),
          (r = J(n)),
          f(e, "class", "message-date");
      },
      m(a, l) {
        g(a, e, l), y(e, t), y(t, r);
      },
      p(a, l) {
        l[0] & 16 &&
          n !== (n = Kt(new Date(a[4].message.date * 1e3)) + "") &&
          pe(r, n);
      },
      d(a) {
        a && u(e);
      },
    };
  }
  function qr(i) {
    let e, t, n, r, a, l;
    return (
      (n = new jr({ props: { "aria-hidden": "true" } })),
      {
        c() {
          (e = v("div")),
            (t = v("button")),
            He(n.$$.fragment),
            f(t, "title", "Reply"),
            f(t, "aria-label", "Reply"),
            f(e, "class", "reply");
        },
        m(s, o) {
          g(s, e, o),
            y(e, t),
            Fe(n, t, null),
            (r = !0),
            a || ((l = Y(t, "click", Ke(i[92]))), (a = !0));
        },
        p: k,
        i(s) {
          r || (A(n.$$.fragment, s), (r = !0));
        },
        o(s) {
          F(n.$$.fragment, s), (r = !1);
        },
        d(s) {
          s && u(e), Ie(n), (a = !1), l();
        },
      }
    );
  }
  function $r(i) {
    let e, t, n, r, a, l;
    return (
      (n = new Rr({ props: { "aria-hidden": "true" } })),
      {
        c() {
          (e = v("div")),
            (t = v("button")),
            He(n.$$.fragment),
            f(t, "title", "Reply all"),
            f(t, "aria-label", "Reply all"),
            f(e, "class", "reply-all");
        },
        m(s, o) {
          g(s, e, o),
            y(e, t),
            Fe(n, t, null),
            (r = !0),
            a || ((l = Y(t, "click", Ke(i[93]))), (a = !0));
        },
        p: k,
        i(s) {
          r || (A(n.$$.fragment, s), (r = !0));
        },
        o(s) {
          F(n.$$.fragment, s), (r = !1);
        },
        d(s) {
          s && u(e), Ie(n), (a = !1), l();
        },
      }
    );
  }
  function el(i) {
    let e, t, n, r, a, l;
    return (
      (n = new Ir({ props: { "aria-hidden": "true" } })),
      {
        c() {
          (e = v("div")),
            (t = v("button")),
            He(n.$$.fragment),
            f(t, "title", "Forward"),
            f(t, "aria-label", "Forward"),
            f(e, "class", "forward");
        },
        m(s, o) {
          g(s, e, o),
            y(e, t),
            Fe(n, t, null),
            (r = !0),
            a || ((l = Y(t, "click", Ke(i[94]))), (a = !0));
        },
        p: k,
        i(s) {
          r || (A(n.$$.fragment, s), (r = !0));
        },
        o(s) {
          F(n.$$.fragment, s), (r = !1);
        },
        d(s) {
          s && u(e), Ie(n), (a = !1), l();
        },
      }
    );
  }
  function pc(i) {
    let e, t, n, r, a;
    return {
      c() {
        (e = v("nylas-message-body")),
          S(e, "message", (t = i[4].message)),
          S(e, "body", (n = i[4].message.body));
      },
      m(l, s) {
        g(l, e, s), r || ((a = Y(e, "downloadClicked", i[37])), (r = !0));
      },
      p(l, s) {
        s[0] & 16 && t !== (t = l[4].message) && S(e, "message", t),
          s[0] & 16 && n !== (n = l[4].message.body) && S(e, "body", n);
      },
      d(l) {
        l && u(e), (r = !1), a();
      },
    };
  }
  function gc(i) {
    var r, a;
    let e,
      t =
        Ei.sanitize(
          (a = (r = i[4].message) == null ? void 0 : r.conversation) != null
            ? a
            : "",
        ) + "",
      n;
    return {
      c() {
        (e = new mn()), (n = Be()), (e.a = n);
      },
      m(l, s) {
        e.m(t, l, s), g(l, n, s);
      },
      p(l, s) {
        var o, c;
        s[0] & 16 &&
          t !==
            (t =
              Ei.sanitize(
                (c = (o = l[4].message) == null ? void 0 : o.conversation) !=
                  null
                  ? c
                  : "",
              ) + "") &&
          e.p(t);
      },
      d(l) {
        l && u(n), l && e.d();
      },
    };
  }
  function bc(i) {
    return { c: k, m: k, p: k, i: k, o: k, d: k };
  }
  function vc(i) {
    let e,
      t,
      n = i[3] && i[7] && tl(i);
    return {
      c() {
        n && n.c(), (e = Be());
      },
      m(r, a) {
        n && n.m(r, a), g(r, e, a), (t = !0);
      },
      p(r, a) {
        r[3] && r[7]
          ? n
            ? (n.p(r, a), a[0] & 128 && A(n, 1))
            : ((n = tl(r)), n.c(), A(n, 1), n.m(e.parentNode, e))
          : n &&
            (Ae(),
            F(n, 1, 1, () => {
              n = null;
            }),
            Se());
      },
      i(r) {
        t || (A(n), (t = !0));
      },
      o(r) {
        F(n), (t = !1);
      },
      d(r) {
        n && n.d(r), r && u(e);
      },
    };
  }
  function tl(i) {
    let e, t, n, r;
    const a = [yc, wc],
      l = [];
    function s(o, c) {
      return o[7].expanded ? 0 : 1;
    }
    return (
      (e = s(i)),
      (t = l[e] = a[e](i)),
      {
        c() {
          t.c(), (n = Be());
        },
        m(o, c) {
          l[e].m(o, c), g(o, n, c), (r = !0);
        },
        p(o, c) {
          let d = e;
          (e = s(o)),
            e === d
              ? l[e].p(o, c)
              : (Ae(),
                F(l[d], 1, 1, () => {
                  l[d] = null;
                }),
                Se(),
                (t = l[e]),
                t ? t.p(o, c) : ((t = l[e] = a[e](o)), t.c()),
                A(t, 1),
                t.m(n.parentNode, n));
        },
        i(o) {
          r || (A(t), (r = !0));
        },
        o(o) {
          F(t), (r = !1);
        },
        d(o) {
          l[e].d(o), o && u(n);
        },
      }
    );
  }
  function wc(i) {
    let e,
      t,
      n,
      r = {
        ctx: i,
        current: null,
        token: null,
        hasCatch: !1,
        pending: Ic,
        then: Ec,
        catch: kc,
        value: 133,
        blocks: [, , ,],
      };
    return (
      vt((t = zl(i[7])), r),
      {
        c() {
          (e = v("div")),
            r.block.c(),
            f(e, "class", "email-row condensed"),
            we(e, "show_star", i[4].show_star),
            we(e, "unread", i[7].unread),
            we(
              e,
              "disable-click",
              i[7] && i[7].messages.length <= 0 && !i[7].drafts.length,
            );
        },
        m(a, l) {
          g(a, e, l),
            r.block.m(e, (r.anchor = null)),
            (r.mount = () => e),
            (r.anchor = null),
            (n = !0);
        },
        p(a, l) {
          (i = a),
            (r.ctx = i),
            (l[0] & 128 && t !== (t = zl(i[7])) && vt(t, r)) || li(r, i, l),
            l[0] & 16 && we(e, "show_star", i[4].show_star),
            l[0] & 128 && we(e, "unread", i[7].unread),
            l[0] & 128 &&
              we(
                e,
                "disable-click",
                i[7] && i[7].messages.length <= 0 && !i[7].drafts.length,
              );
        },
        i(a) {
          n || (A(r.block), (n = !0));
        },
        o(a) {
          for (let l = 0; l < 3; l += 1) {
            const s = r.blocks[l];
            F(s);
          }
          n = !1;
        },
        d(a) {
          a && u(e), r.block.d(), (r.token = null), (r = null);
        },
      }
    );
  }
  function yc(i) {
    var X;
    let e,
      t,
      n,
      r,
      a,
      l = ((X = i[3]) == null ? void 0 : X.subject) + "",
      s,
      o,
      c,
      d,
      m,
      h,
      b,
      _,
      O,
      P,
      C = i[4].click_action === "mailbox" && pl(i),
      I = i[4].show_star && gl(i),
      N = i[4].show_thread_actions && bl(i);
    const oe = [Bc, Uc],
      le = [];
    function ee(L, x) {
      return L[7].messages.length ? 0 : 1;
    }
    (h = ee(i)), (b = le[h] = oe[h](i));
    let Z = i[7].drafts.length && Dl(i);
    return {
      c() {
        (e = v("div")),
          (t = v("header")),
          (n = v("div")),
          C && C.c(),
          (r = z()),
          (a = v("h1")),
          (s = J(l)),
          (o = z()),
          (c = v("div")),
          I && I.c(),
          (d = z()),
          N && N.c(),
          (m = z()),
          b.c(),
          (_ = z()),
          Z && Z.c(),
          f(n, "class", "subject-title"),
          f(c, "role", "toolbar"),
          f(t, "class", "subject-header"),
          we(t, "mailbox", i[4].click_action === "mailbox"),
          f(
            e,
            "class",
            (O =
              "email-row expanded " +
              (i[4].click_action === "mailbox"
                ? "expanded-mailbox-thread"
                : "")),
          );
      },
      m(L, x) {
        g(L, e, x),
          y(e, t),
          y(t, n),
          C && C.m(n, null),
          y(n, r),
          y(n, a),
          y(a, s),
          y(t, o),
          y(t, c),
          I && I.m(c, null),
          y(c, d),
          N && N.m(c, null),
          y(e, m),
          le[h].m(e, null),
          y(e, _),
          Z && Z.m(e, null),
          (P = !0);
      },
      p(L, x) {
        var Ne;
        L[4].click_action === "mailbox"
          ? C
            ? (C.p(L, x), x[0] & 16 && A(C, 1))
            : ((C = pl(L)), C.c(), A(C, 1), C.m(n, r))
          : C &&
            (Ae(),
            F(C, 1, 1, () => {
              C = null;
            }),
            Se()),
          (!P || x[0] & 128) &&
            l !== (l = ((Ne = L[3]) == null ? void 0 : Ne.subject) + "") &&
            pe(s, l),
          L[4].show_star
            ? I
              ? I.p(L, x)
              : ((I = gl(L)), I.c(), I.m(c, d))
            : I && (I.d(1), (I = null)),
          L[4].show_thread_actions
            ? N
              ? (N.p(L, x), x[0] & 16 && A(N, 1))
              : ((N = bl(L)), N.c(), A(N, 1), N.m(c, null))
            : N &&
              (Ae(),
              F(N, 1, 1, () => {
                N = null;
              }),
              Se()),
          x[0] & 16 && we(t, "mailbox", L[4].click_action === "mailbox");
        let Oe = h;
        (h = ee(L)),
          h === Oe
            ? le[h].p(L, x)
            : (Ae(),
              F(le[Oe], 1, 1, () => {
                le[Oe] = null;
              }),
              Se(),
              (b = le[h]),
              b ? b.p(L, x) : ((b = le[h] = oe[h](L)), b.c()),
              A(b, 1),
              b.m(e, _)),
          L[7].drafts.length
            ? Z
              ? (Z.p(L, x), x[0] & 128 && A(Z, 1))
              : ((Z = Dl(L)), Z.c(), A(Z, 1), Z.m(e, null))
            : Z &&
              (Ae(),
              F(Z, 1, 1, () => {
                Z = null;
              }),
              Se()),
          (!P ||
            (x[0] & 16 &&
              O !==
                (O =
                  "email-row expanded " +
                  (L[4].click_action === "mailbox"
                    ? "expanded-mailbox-thread"
                    : "")))) &&
            f(e, "class", O);
      },
      i(L) {
        P || (A(C), A(N), A(b), A(Z), (P = !0));
      },
      o(L) {
        F(C), F(N), F(b), F(Z), (P = !1);
      },
      d(L) {
        L && u(e), C && C.d(), I && I.d(), N && N.d(), le[h].d(), Z && Z.d();
      },
    };
  }
  function kc(i) {
    return { c: k, m: k, p: k, i: k, o: k, d: k };
  }
  function Ec(i) {
    var De, ke, Me;
    let e,
      t,
      n,
      r,
      a,
      l,
      s,
      o,
      c,
      d,
      m,
      h,
      b =
        (i[14]
          ? `Sorry, looks like this thread is currently unavailable. It may
                    have been deleted in your provider inbox.`
          : !((De = i[3]) == null ? void 0 : De.snippet) && i[133]
          ? "This is a draft email"
          : ((ke = i[3]) == null ? void 0 : ke.snippet)
          ? i[3].snippet.replace(/\u200C /g, "")
          : "") + "",
      _,
      O,
      P = Object.keys(i[15]).length > 0,
      C,
      I,
      N = i[7].has_attachments && Object.keys(i[15]).length > 0,
      oe,
      le,
      ee,
      Z,
      X = i[4].show_star && il(i),
      L = i[4].show_contact_avatar && nl(i);
    function x(R, Ee) {
      return R[14] ? Oc : Sc;
    }
    let Oe = x(i),
      Ne = Oe(i),
      ye = i[4].show_number_of_messages && dl(i),
      he = ((Me = i[3]) == null ? void 0 : Me.subject) && fl(i),
      de = P && ul(i),
      te = N && _l();
    const Le = [Pc, Dc],
      U = [];
    function _e(R, Ee) {
      return R[4].show_thread_actions
        ? 0
        : R[4].show_received_timestamp
        ? 1
        : -1;
    }
    return (
      ~(le = _e(i)) && (ee = U[le] = Le[le](i)),
      {
        c() {
          (e = v("div")),
            X && X.c(),
            (t = z()),
            (n = v("div")),
            L && L.c(),
            (r = z()),
            (a = v("div")),
            Ne.c(),
            (s = z()),
            ye && ye.c(),
            (o = z()),
            (c = v("div")),
            (d = v("div")),
            he && he.c(),
            (m = z()),
            (h = v("span")),
            (_ = J(b)),
            (O = z()),
            de && de.c(),
            (C = z()),
            (I = v("div")),
            te && te.c(),
            (oe = z()),
            ee && ee.c(),
            f(a, "class", "from-participants"),
            f(n, "class", "from-message-count"),
            f(e, "class", (l = "from" + (i[4].show_star ? "-star" : ""))),
            f(h, "class", "snippet"),
            we(h, "deleted", i[14]),
            f(d, "class", "subject-snippet"),
            f(c, "class", "subject-snippet-attachment"),
            we(I, "date", i[4].show_received_timestamp),
            we(I, "action-icons", i[4].show_thread_actions);
        },
        m(R, Ee) {
          g(R, e, Ee),
            X && X.m(e, null),
            y(e, t),
            y(e, n),
            L && L.m(n, null),
            y(n, r),
            y(n, a),
            Ne.m(a, null),
            g(R, s, Ee),
            ye && ye.m(R, Ee),
            g(R, o, Ee),
            g(R, c, Ee),
            y(c, d),
            he && he.m(d, null),
            y(d, m),
            y(d, h),
            y(h, _),
            y(c, O),
            de && de.m(c, null),
            g(R, C, Ee),
            g(R, I, Ee),
            te && te.m(I, null),
            y(I, oe),
            ~le && U[le].m(I, null),
            (Z = !0);
        },
        p(R, Ee) {
          var H, ge, M;
          R[4].show_star
            ? X
              ? X.p(R, Ee)
              : ((X = il(R)), X.c(), X.m(e, t))
            : X && (X.d(1), (X = null)),
            R[4].show_contact_avatar
              ? L
                ? (L.p(R, Ee), Ee[0] & 16 && A(L, 1))
                : ((L = nl(R)), L.c(), A(L, 1), L.m(n, r))
              : L &&
                (Ae(),
                F(L, 1, 1, () => {
                  L = null;
                }),
                Se()),
            Oe === (Oe = x(R)) && Ne
              ? Ne.p(R, Ee)
              : (Ne.d(1), (Ne = Oe(R)), Ne && (Ne.c(), Ne.m(a, null))),
            (!Z ||
              (Ee[0] & 16 &&
                l !== (l = "from" + (R[4].show_star ? "-star" : "")))) &&
              f(e, "class", l),
            R[4].show_number_of_messages
              ? ye
                ? ye.p(R, Ee)
                : ((ye = dl(R)), ye.c(), ye.m(o.parentNode, o))
              : ye && (ye.d(1), (ye = null)),
            ((H = R[3]) == null ? void 0 : H.subject)
              ? he
                ? he.p(R, Ee)
                : ((he = fl(R)), he.c(), he.m(d, m))
              : he && (he.d(1), (he = null)),
            (!Z || Ee[0] & 16512) &&
              b !==
                (b =
                  (R[14]
                    ? `Sorry, looks like this thread is currently unavailable. It may
                    have been deleted in your provider inbox.`
                    : !((ge = R[3]) == null ? void 0 : ge.snippet) && R[133]
                    ? "This is a draft email"
                    : ((M = R[3]) == null ? void 0 : M.snippet)
                    ? R[3].snippet.replace(/\u200C /g, "")
                    : "") + "") &&
              pe(_, b),
            Ee[0] & 16384 && we(h, "deleted", R[14]),
            Ee[0] & 32768 && (P = Object.keys(R[15]).length > 0),
            P
              ? de
                ? de.p(R, Ee)
                : ((de = ul(R)), de.c(), de.m(c, null))
              : de && (de.d(1), (de = null)),
            Ee[0] & 32896 &&
              (N = R[7].has_attachments && Object.keys(R[15]).length > 0),
            N
              ? te
                ? Ee[0] & 32896 && A(te, 1)
                : ((te = _l()), te.c(), A(te, 1), te.m(I, oe))
              : te &&
                (Ae(),
                F(te, 1, 1, () => {
                  te = null;
                }),
                Se());
          let Xe = le;
          (le = _e(R)),
            le === Xe
              ? ~le && U[le].p(R, Ee)
              : (ee &&
                  (Ae(),
                  F(U[Xe], 1, 1, () => {
                    U[Xe] = null;
                  }),
                  Se()),
                ~le
                  ? ((ee = U[le]),
                    ee ? ee.p(R, Ee) : ((ee = U[le] = Le[le](R)), ee.c()),
                    A(ee, 1),
                    ee.m(I, null))
                  : (ee = null)),
            Ee[0] & 16 && we(I, "date", R[4].show_received_timestamp),
            Ee[0] & 16 && we(I, "action-icons", R[4].show_thread_actions);
        },
        i(R) {
          Z || (A(L), A(te), A(ee), (Z = !0));
        },
        o(R) {
          F(L), F(te), F(ee), (Z = !1);
        },
        d(R) {
          R && u(e),
            X && X.d(),
            L && L.d(),
            Ne.d(),
            R && u(s),
            ye && ye.d(R),
            R && u(o),
            R && u(c),
            he && he.d(),
            de && de.d(),
            R && u(C),
            R && u(I),
            te && te.d(),
            ~le && U[le].d();
        },
      }
    );
  }
  function il(i) {
    let e, t, n, r, a, l, s, o, c;
    return {
      c() {
        (e = v("div")),
          (t = v("button")),
          f(t, "id", (n = `thread-star-${i[4].thread_id}`)),
          f(t, "class", (r = i[7].starred ? "starred" : "")),
          (t.value = a = i[4].thread_id),
          f(t, "role", "switch"),
          f(t, "aria-checked", (l = i[7].starred)),
          f(t, "aria-label", (s = `Star button for thread ${i[4].thread_id}`)),
          f(e, "class", "starred");
      },
      m(d, m) {
        g(d, e, m), y(e, t), o || ((c = Y(t, "click", Da(i[25]))), (o = !0));
      },
      p(d, m) {
        m[0] & 16 &&
          n !== (n = `thread-star-${d[4].thread_id}`) &&
          f(t, "id", n),
          m[0] & 128 &&
            r !== (r = d[7].starred ? "starred" : "") &&
            f(t, "class", r),
          m[0] & 16 && a !== (a = d[4].thread_id) && (t.value = a),
          m[0] & 128 && l !== (l = d[7].starred) && f(t, "aria-checked", l),
          m[0] & 16 &&
            s !== (s = `Star button for thread ${d[4].thread_id}`) &&
            f(t, "aria-label", s);
      },
      d(d) {
        d && u(e), (o = !1), c();
      },
    };
  }
  function nl(i) {
    let e,
      t,
      n = i[7] && rl(i);
    return {
      c() {
        (e = v("div")),
          n && n.c(),
          f(e, "class", "default-avatar"),
          we(e, "deleted", i[14]),
          we(e, "draft-icon", i[133]);
      },
      m(r, a) {
        g(r, e, a), n && n.m(e, null), (t = !0);
      },
      p(r, a) {
        r[7]
          ? n
            ? (n.p(r, a), a[0] & 128 && A(n, 1))
            : ((n = rl(r)), n.c(), A(n, 1), n.m(e, null))
          : n &&
            (Ae(),
            F(n, 1, 1, () => {
              n = null;
            }),
            Se()),
          a[0] & 16384 && we(e, "deleted", r[14]),
          a[0] & 128 && we(e, "draft-icon", r[133]);
      },
      i(r) {
        t || (A(n), (t = !0));
      },
      o(r) {
        F(n), (t = !1);
      },
      d(r) {
        r && u(e), n && n.d();
      },
    };
  }
  function rl(i) {
    let e, t, n, r;
    const a = [Ac, Cc, Tc],
      l = [];
    function s(o, c) {
      return o[133] ? 0 : o[7].messages.length <= 0 ? 1 : 2;
    }
    return (
      (e = s(i)),
      (t = l[e] = a[e](i)),
      {
        c() {
          t.c(), (n = Be());
        },
        m(o, c) {
          l[e].m(o, c), g(o, n, c), (r = !0);
        },
        p(o, c) {
          let d = e;
          (e = s(o)),
            e === d
              ? l[e].p(o, c)
              : (Ae(),
                F(l[d], 1, 1, () => {
                  l[d] = null;
                }),
                Se(),
                (t = l[e]),
                t ? t.p(o, c) : ((t = l[e] = a[e](o)), t.c()),
                A(t, 1),
                t.m(n.parentNode, n));
        },
        i(o) {
          r || (A(t), (r = !0));
        },
        o(o) {
          F(t), (r = !1);
        },
        d(o) {
          l[e].d(o), o && u(n);
        },
      }
    );
  }
  function Tc(i) {
    let e;
    return {
      c() {
        (e = v("nylas-contact-image")),
          S(e, "contact_query", i[12]),
          S(e, "contact", i[10]);
      },
      m(t, n) {
        g(t, e, n);
      },
      p(t, n) {
        n[0] & 4096 && S(e, "contact_query", t[12]),
          n[0] & 1024 && S(e, "contact", t[10]);
      },
      i: k,
      o: k,
      d(t) {
        t && u(e);
      },
    };
  }
  function Cc(i) {
    let e, t;
    return (
      (e = new Cs({})),
      {
        c() {
          He(e.$$.fragment);
        },
        m(n, r) {
          Fe(e, n, r), (t = !0);
        },
        p: k,
        i(n) {
          t || (A(e.$$.fragment, n), (t = !0));
        },
        o(n) {
          F(e.$$.fragment, n), (t = !1);
        },
        d(n) {
          Ie(e, n);
        },
      }
    );
  }
  function Ac(i) {
    let e, t;
    return (
      (e = new Tr({})),
      {
        c() {
          He(e.$$.fragment);
        },
        m(n, r) {
          Fe(e, n, r), (t = !0);
        },
        p: k,
        i(n) {
          t || (A(e.$$.fragment, n), (t = !0));
        },
        o(n) {
          F(e.$$.fragment, n), (t = !1);
        },
        d(n) {
          Ie(e, n);
        },
      }
    );
  }
  function Sc(i) {
    let e,
      t,
      n,
      r,
      a = rn(i[7].messages, i[7].participants),
      l = {
        ctx: i,
        current: null,
        token: null,
        hasCatch: !1,
        pending: Nc,
        then: Mc,
        catch: Lc,
        value: 18,
      };
    vt((t = i[35](i[7])), l);
    let s = a && ol(i);
    return {
      c() {
        (e = v("span")),
          l.block.c(),
          (n = z()),
          (r = v("div")),
          s && s.c(),
          f(e, "class", "participants-name"),
          we(e, "condensed", rn(i[7].messages, i[7].participants)),
          f(r, "class", "participants-count");
      },
      m(o, c) {
        g(o, e, c),
          l.block.m(e, (l.anchor = null)),
          (l.mount = () => e),
          (l.anchor = null),
          g(o, n, c),
          g(o, r, c),
          s && s.m(r, null);
      },
      p(o, c) {
        (i = o),
          (l.ctx = i),
          (c[0] & 128 && t !== (t = i[35](i[7])) && vt(t, l)) || li(l, i, c),
          c[0] & 128 &&
            we(e, "condensed", rn(i[7].messages, i[7].participants)),
          c[0] & 128 && (a = rn(i[7].messages, i[7].participants)),
          a
            ? s
              ? s.p(i, c)
              : ((s = ol(i)), s.c(), s.m(r, null))
            : s && (s.d(1), (s = null));
      },
      d(o) {
        o && u(e),
          l.block.d(),
          (l.token = null),
          (l = null),
          o && u(n),
          o && u(r),
          s && s.d();
      },
    };
  }
  function Oc(i) {
    let e;
    return {
      c() {
        (e = v("div")),
          (e.innerHTML =
            '<span class="from-sub-section deleted-email">Deleted Email</span>'),
          f(e, "class", "participants-name");
      },
      m(t, n) {
        g(t, e, n);
      },
      p: k,
      d(t) {
        t && u(e);
      },
    };
  }
  function Lc(i) {
    return { c: k, m: k, p: k, d: k };
  }
  function Mc(i) {
    let e,
      t = i[18],
      n = [];
    for (let r = 0; r < t.length; r += 1) n[r] = al(Br(i, t, r));
    return {
      c() {
        for (let r = 0; r < n.length; r += 1) n[r].c();
        e = Be();
      },
      m(r, a) {
        for (let l = 0; l < n.length; l += 1) n[l].m(r, a);
        g(r, e, a);
      },
      p(r, a) {
        if ((a[0] & 128) | (a[1] & 16)) {
          t = r[18];
          let l;
          for (l = 0; l < t.length; l += 1) {
            const s = Br(r, t, l);
            n[l]
              ? n[l].p(s, a)
              : ((n[l] = al(s)), n[l].c(), n[l].m(e.parentNode, e));
          }
          for (; l < n.length; l += 1) n[l].d(1);
          n.length = t.length;
        }
      },
      d(r) {
        bt(n, r), r && u(e);
      },
    };
  }
  function ll(i) {
    let e;
    return {
      c() {
        (e = v("span")),
          (e.textContent = ",\xA0"),
          f(e, "class", "from-sub-section");
      },
      m(t, n) {
        g(t, e, n);
      },
      d(t) {
        t && u(e);
      },
    };
  }
  function al(i) {
    let e,
      t = i[139] + "",
      n,
      r,
      a,
      l = i[141] < i[18].length - 1 && ll();
    return {
      c() {
        (e = v("span")),
          (n = J(t)),
          (r = z()),
          l && l.c(),
          (a = Be()),
          f(e, "class", "from-sub-section participant-label"),
          we(e, "draft-label", i[139] === "Draft");
      },
      m(s, o) {
        g(s, e, o), y(e, n), g(s, r, o), l && l.m(s, o), g(s, a, o);
      },
      p(s, o) {
        o[0] & 128 && t !== (t = s[139] + "") && pe(n, t),
          (o[0] & 128) | (o[1] & 16) &&
            we(e, "draft-label", s[139] === "Draft"),
          s[141] < s[18].length - 1
            ? l || ((l = ll()), l.c(), l.m(a.parentNode, a))
            : l && (l.d(1), (l = null));
      },
      d(s) {
        s && u(e), s && u(r), l && l.d(s), s && u(a);
      },
    };
  }
  function Nc(i) {
    return { c: k, m: k, p: k, d: k };
  }
  function ol(i) {
    let e,
      t,
      n = i[7].participants.length >= 2 && sl(i),
      r = i[7].participants.length > 2 && cl(i);
    return {
      c() {
        n && n.c(), (e = z()), r && r.c(), (t = Be());
      },
      m(a, l) {
        n && n.m(a, l), g(a, e, l), r && r.m(a, l), g(a, t, l);
      },
      p(a, l) {
        a[7].participants.length >= 2
          ? n
            ? n.p(a, l)
            : ((n = sl(a)), n.c(), n.m(e.parentNode, e))
          : n && (n.d(1), (n = null)),
          a[7].participants.length > 2
            ? r
              ? r.p(a, l)
              : ((r = cl(a)), r.c(), r.m(t.parentNode, t))
            : r && (r.d(1), (r = null));
      },
      d(a) {
        n && n.d(a), a && u(e), r && r.d(a), a && u(t);
      },
    };
  }
  function sl(i) {
    let e,
      t,
      n = i[7].participants.length - Bl + "",
      r;
    return {
      c() {
        (e = v("span")),
          (t = J("+")),
          (r = J(n)),
          f(e, "class", "show-on-mobile");
      },
      m(a, l) {
        g(a, e, l), y(e, t), y(e, r);
      },
      p(a, l) {
        l[0] & 128 &&
          n !== (n = a[7].participants.length - Bl + "") &&
          pe(r, n);
      },
      d(a) {
        a && u(e);
      },
    };
  }
  function cl(i) {
    let e,
      t,
      n = i[7].participants.length - Ul + "",
      r;
    return {
      c() {
        (e = v("span")),
          (t = J("\xA0 + ")),
          (r = J(n)),
          f(e, "class", "show-on-desktop");
      },
      m(a, l) {
        g(a, e, l), y(e, t), y(e, r);
      },
      p(a, l) {
        l[0] & 128 &&
          n !== (n = a[7].participants.length - Ul + "") &&
          pe(r, n);
      },
      d(a) {
        a && u(e);
      },
    };
  }
  function dl(i) {
    var r, a;
    let e,
      t =
        (((a = (r = i[7]) == null ? void 0 : r.messages) == null
          ? void 0
          : a.length) > 0
          ? i[7].messages.length
          : "") + "",
      n;
    return {
      c() {
        (e = v("span")), (n = J(t)), f(e, "class", "thread-message-count");
      },
      m(l, s) {
        g(l, e, s), y(e, n);
      },
      p(l, s) {
        var o, c;
        s[0] & 128 &&
          t !==
            (t =
              (((c = (o = l[7]) == null ? void 0 : o.messages) == null
                ? void 0
                : c.length) > 0
                ? l[7].messages.length
                : "") + "") &&
          pe(n, t);
      },
      d(l) {
        l && u(e);
      },
    };
  }
  function fl(i) {
    var r;
    let e,
      t = ((r = i[3]) == null ? void 0 : r.subject) + "",
      n;
    return {
      c() {
        (e = v("span")), (n = J(t)), f(e, "class", "subject");
      },
      m(a, l) {
        g(a, e, l), y(e, n);
      },
      p(a, l) {
        var s;
        l[0] & 128 &&
          t !== (t = ((s = a[3]) == null ? void 0 : s.subject) + "") &&
          pe(n, t);
      },
      d(a) {
        a && u(e);
      },
    };
  }
  function ul(i) {
    let e,
      t = Object.values(i[15]),
      n = [];
    for (let r = 0; r < t.length; r += 1) n[r] = hl(xr(i, t, r));
    return {
      c() {
        e = v("div");
        for (let r = 0; r < n.length; r += 1) n[r].c();
        f(e, "class", "attachment");
      },
      m(r, a) {
        g(r, e, a);
        for (let l = 0; l < n.length; l += 1) n[l].m(e, null);
      },
      p(r, a) {
        if ((a[0] & 32768) | (a[1] & 32)) {
          t = Object.values(r[15]);
          let l;
          for (l = 0; l < t.length; l += 1) {
            const s = xr(r, t, l);
            n[l] ? n[l].p(s, a) : ((n[l] = hl(s)), n[l].c(), n[l].m(e, null));
          }
          for (; l < n.length; l += 1) n[l].d(1);
          n.length = t.length;
        }
      },
      d(r) {
        r && u(e), bt(n, r);
      },
    };
  }
  function ml(i) {
    let e,
      t = (i[129].filename || i[129].id) + "",
      n,
      r,
      a,
      l;
    function s(...o) {
      return i[91](i[129], ...o);
    }
    return {
      c() {
        (e = v("button")), (n = J(t)), (r = z());
      },
      m(o, c) {
        g(o, e, c), y(e, n), y(e, r), a || ((l = Y(e, "click", s)), (a = !0));
      },
      p(o, c) {
        (i = o),
          c[0] & 32768 &&
            t !== (t = (i[129].filename || i[129].id) + "") &&
            pe(n, t);
      },
      d(o) {
        o && u(e), (a = !1), l();
      },
    };
  }
  function hl(i) {
    let e,
      t = i[134],
      n = [];
    for (let r = 0; r < t.length; r += 1) n[r] = ml(Ur(i, t, r));
    return {
      c() {
        for (let r = 0; r < n.length; r += 1) n[r].c();
        e = Be();
      },
      m(r, a) {
        for (let l = 0; l < n.length; l += 1) n[l].m(r, a);
        g(r, e, a);
      },
      p(r, a) {
        if ((a[0] & 32768) | (a[1] & 32)) {
          t = r[134];
          let l;
          for (l = 0; l < t.length; l += 1) {
            const s = Ur(r, t, l);
            n[l]
              ? n[l].p(s, a)
              : ((n[l] = ml(s)), n[l].c(), n[l].m(e.parentNode, e));
          }
          for (; l < n.length; l += 1) n[l].d(1);
          n.length = t.length;
        }
      },
      d(r) {
        bt(n, r), r && u(e);
      },
    };
  }
  function _l(i) {
    let e, t, n;
    return (
      (t = new vs({})),
      {
        c() {
          (e = v("span")), He(t.$$.fragment);
        },
        m(r, a) {
          g(r, e, a), Fe(t, e, null), (n = !0);
        },
        i(r) {
          n || (A(t.$$.fragment, r), (n = !0));
        },
        o(r) {
          F(t.$$.fragment, r), (n = !1);
        },
        d(r) {
          r && u(e), Ie(t);
        },
      }
    );
  }
  function Dc(i) {
    let e,
      t = i[33](new Date(i[3].last_message_timestamp * 1e3)) + "",
      n;
    return {
      c() {
        (e = v("span")), (n = J(t));
      },
      m(r, a) {
        g(r, e, a), y(e, n);
      },
      p(r, a) {
        a[0] & 128 &&
          t !== (t = r[33](new Date(r[3].last_message_timestamp * 1e3)) + "") &&
          pe(n, t);
      },
      i: k,
      o: k,
      d(r) {
        r && u(e);
      },
    };
  }
  function Pc(i) {
    let e, t, n, r, a, l, s, o, c, d, m, h, b;
    n = new yr({});
    const _ = [Rc, jc],
      O = [];
    function P(C, I) {
      return C[7].unread ? 0 : 1;
    }
    return (
      (s = P(i)),
      (o = O[s] = _[s](i)),
      {
        c() {
          (e = v("div")),
            (t = v("button")),
            He(n.$$.fragment),
            (r = z()),
            (a = v("div")),
            (l = v("button")),
            o.c(),
            f(t, "title", "Delete thread"),
            f(t, "aria-label", "Delete thread"),
            f(e, "class", "delete"),
            f(
              l,
              "title",
              (c = `Mark thread as ${i[7].unread ? "" : "un"}read`),
            ),
            f(
              l,
              "aria-label",
              (d = `Mark thread as ${i[7].unread ? "" : "un"}read`),
            ),
            f(a, "class", "read-status");
        },
        m(C, I) {
          g(C, e, I),
            y(e, t),
            Fe(n, t, null),
            g(C, r, I),
            g(C, a, I),
            y(a, l),
            O[s].m(l, null),
            (m = !0),
            h ||
              ((b = [Y(t, "click", Ke(i[21])), Y(l, "click", Ke(i[20]))]),
              (h = !0));
        },
        p(C, I) {
          let N = s;
          (s = P(C)),
            s !== N &&
              (Ae(),
              F(O[N], 1, 1, () => {
                O[N] = null;
              }),
              Se(),
              (o = O[s]),
              o || ((o = O[s] = _[s](C)), o.c()),
              A(o, 1),
              o.m(l, null)),
            (!m ||
              (I[0] & 128 &&
                c !== (c = `Mark thread as ${C[7].unread ? "" : "un"}read`))) &&
              f(l, "title", c),
            (!m ||
              (I[0] & 128 &&
                d !== (d = `Mark thread as ${C[7].unread ? "" : "un"}read`))) &&
              f(l, "aria-label", d);
        },
        i(C) {
          m || (A(n.$$.fragment, C), A(o), (m = !0));
        },
        o(C) {
          F(n.$$.fragment, C), F(o), (m = !1);
        },
        d(C) {
          C && u(e), Ie(n), C && u(r), C && u(a), O[s].d(), (h = !1), ot(b);
        },
      }
    );
  }
  function jc(i) {
    let e, t;
    return (
      (e = new Er({ props: { "aria-hidden": "true" } })),
      {
        c() {
          He(e.$$.fragment);
        },
        m(n, r) {
          Fe(e, n, r), (t = !0);
        },
        i(n) {
          t || (A(e.$$.fragment, n), (t = !0));
        },
        o(n) {
          F(e.$$.fragment, n), (t = !1);
        },
        d(n) {
          Ie(e, n);
        },
      }
    );
  }
  function Rc(i) {
    let e, t;
    return (
      (e = new kr({ props: { "aria-hidden": "true" } })),
      {
        c() {
          He(e.$$.fragment);
        },
        m(n, r) {
          Fe(e, n, r), (t = !0);
        },
        i(n) {
          t || (A(e.$$.fragment, n), (t = !0));
        },
        o(n) {
          F(e.$$.fragment, n), (t = !1);
        },
        d(n) {
          Ie(e, n);
        },
      }
    );
  }
  function Ic(i) {
    return { c: k, m: k, p: k, i: k, o: k, d: k };
  }
  function pl(i) {
    let e, t, n, r, a;
    return (
      (t = new ks({})),
      {
        c() {
          (e = v("button")),
            He(t.$$.fragment),
            f(e, "title", "Return to Mailbox"),
            f(e, "aria-label", "Return to Mailbox");
        },
        m(l, s) {
          g(l, e, s),
            Fe(t, e, null),
            (n = !0),
            r || ((a = Y(e, "click", Ke(i[23]))), (r = !0));
        },
        p: k,
        i(l) {
          n || (A(t.$$.fragment, l), (n = !0));
        },
        o(l) {
          F(t.$$.fragment, l), (n = !1);
        },
        d(l) {
          l && u(e), Ie(t), (r = !1), a();
        },
      }
    );
  }
  function gl(i) {
    let e, t, n, r, a, l, s, o;
    return {
      c() {
        (e = v("div")),
          (t = v("button")),
          f(t, "class", (n = i[3].starred ? "starred" : "")),
          f(t, "title", (r = i[3].starred ? "Unstar thread" : "Star thread")),
          f(
            t,
            "aria-label",
            (a = i[3].starred ? "Unstar thread" : "Star thread"),
          ),
          f(t, "role", "switch"),
          f(t, "aria-checked", (l = i[3].starred)),
          f(e, "class", "starred");
      },
      m(c, d) {
        g(c, e, d), y(e, t), s || ((o = Y(t, "click", Ke(i[25]))), (s = !0));
      },
      p(c, d) {
        d[0] & 128 &&
          n !== (n = c[3].starred ? "starred" : "") &&
          f(t, "class", n),
          d[0] & 128 &&
            r !== (r = c[3].starred ? "Unstar thread" : "Star thread") &&
            f(t, "title", r),
          d[0] & 128 &&
            a !== (a = c[3].starred ? "Unstar thread" : "Star thread") &&
            f(t, "aria-label", a),
          d[0] & 128 && l !== (l = c[3].starred) && f(t, "aria-checked", l);
      },
      d(c) {
        c && u(e), (s = !1), o();
      },
    };
  }
  function bl(i) {
    let e, t, n, r, a, l, s, o, c, d, m, h, b;
    n = new yr({});
    const _ = [xc, Fc],
      O = [];
    function P(C, I) {
      return C[7].unread ? 0 : 1;
    }
    return (
      (s = P(i)),
      (o = O[s] = _[s](i)),
      {
        c() {
          (e = v("div")),
            (t = v("button")),
            He(n.$$.fragment),
            (r = z()),
            (a = v("div")),
            (l = v("button")),
            o.c(),
            f(t, "title", "Delete thread / Move to trash"),
            f(t, "aria-label", "Delete thread (Move to trash)"),
            f(e, "class", "delete"),
            f(
              l,
              "title",
              (c = `Mark thread as ${i[7].unread ? "" : "un"}read`),
            ),
            f(
              l,
              "aria-label",
              (d = `Mark thread as ${i[7].unread ? "" : "un"}read`),
            ),
            f(a, "class", "read-status");
        },
        m(C, I) {
          g(C, e, I),
            y(e, t),
            Fe(n, t, null),
            g(C, r, I),
            g(C, a, I),
            y(a, l),
            O[s].m(l, null),
            (m = !0),
            h ||
              ((b = [Y(t, "click", Ke(i[80])), Y(l, "click", Ke(i[20]))]),
              (h = !0));
        },
        p(C, I) {
          let N = s;
          (s = P(C)),
            s !== N &&
              (Ae(),
              F(O[N], 1, 1, () => {
                O[N] = null;
              }),
              Se(),
              (o = O[s]),
              o || ((o = O[s] = _[s](C)), o.c()),
              A(o, 1),
              o.m(l, null)),
            (!m ||
              (I[0] & 128 &&
                c !== (c = `Mark thread as ${C[7].unread ? "" : "un"}read`))) &&
              f(l, "title", c),
            (!m ||
              (I[0] & 128 &&
                d !== (d = `Mark thread as ${C[7].unread ? "" : "un"}read`))) &&
              f(l, "aria-label", d);
        },
        i(C) {
          m || (A(n.$$.fragment, C), A(o), (m = !0));
        },
        o(C) {
          F(n.$$.fragment, C), F(o), (m = !1);
        },
        d(C) {
          C && u(e), Ie(n), C && u(r), C && u(a), O[s].d(), (h = !1), ot(b);
        },
      }
    );
  }
  function Fc(i) {
    let e, t;
    return (
      (e = new Er({ props: { "aria-hidden": "true" } })),
      {
        c() {
          He(e.$$.fragment);
        },
        m(n, r) {
          Fe(e, n, r), (t = !0);
        },
        i(n) {
          t || (A(e.$$.fragment, n), (t = !0));
        },
        o(n) {
          F(e.$$.fragment, n), (t = !1);
        },
        d(n) {
          Ie(e, n);
        },
      }
    );
  }
  function xc(i) {
    let e, t;
    return (
      (e = new kr({ props: { "aria-hidden": "true" } })),
      {
        c() {
          He(e.$$.fragment);
        },
        m(n, r) {
          Fe(e, n, r), (t = !0);
        },
        i(n) {
          t || (A(e.$$.fragment, n), (t = !0));
        },
        o(n) {
          F(e.$$.fragment, n), (t = !1);
        },
        d(n) {
          Ie(e, n);
        },
      }
    );
  }
  function Uc(i) {
    let e,
      t = i[3].snippet + "",
      n;
    return {
      c() {
        (e = v("span")), (n = J(t)), f(e, "class", "snippet");
      },
      m(r, a) {
        g(r, e, a), y(e, n);
      },
      p(r, a) {
        a[0] & 128 && t !== (t = r[3].snippet + "") && pe(n, t);
      },
      i: k,
      o: k,
      d(r) {
        r && u(e);
      },
    };
  }
  function Bc(i) {
    let e,
      t,
      n = i[7].messages,
      r = [];
    for (let l = 0; l < n.length; l += 1) r[l] = Nl(Vr(i, n, l));
    const a = (l) =>
      F(r[l], 1, 1, () => {
        r[l] = null;
      });
    return {
      c() {
        for (let l = 0; l < r.length; l += 1) r[l].c();
        e = Be();
      },
      m(l, s) {
        for (let o = 0; o < r.length; o += 1) r[o].m(l, s);
        g(l, e, s), (t = !0);
      },
      p(l, s) {
        if ((s[0] & 2080944626) | (s[1] & 200)) {
          n = l[7].messages;
          let o;
          for (o = 0; o < n.length; o += 1) {
            const c = Vr(l, n, o);
            r[o]
              ? (r[o].p(c, s), A(r[o], 1))
              : ((r[o] = Nl(c)), r[o].c(), A(r[o], 1), r[o].m(e.parentNode, e));
          }
          for (Ae(), o = n.length; o < r.length; o += 1) a(o);
          Se();
        }
      },
      i(l) {
        if (!t) {
          for (let s = 0; s < n.length; s += 1) A(r[s]);
          t = !0;
        }
      },
      o(l) {
        r = r.filter(Boolean);
        for (let s = 0; s < r.length; s += 1) F(r[s]);
        t = !1;
      },
      d(l) {
        bt(r, l), l && u(e);
      },
    };
  }
  function Hc(i) {
    var ee, Z, X;
    let e,
      t,
      n,
      r,
      a,
      l =
        (i[8] && ((ee = i[2]) == null ? void 0 : ee.from[0].email) === i[8]
          ? "me"
          : ((Z = i[2]) == null ? void 0 : Z.from[0].name) ||
            ((X = i[2]) == null ? void 0 : X.from[0].email)) + "",
      s,
      o,
      c,
      d,
      m,
      h,
      b,
      _,
      O,
      P = i[2].snippet + "",
      C,
      I,
      N,
      oe = i[4].show_contact_avatar && vl(i),
      le = i[4].show_received_timestamp && wl(i);
    return {
      c() {
        var L, x;
        (e = v("div")),
          (t = v("div")),
          oe && oe.c(),
          (n = z()),
          (r = v("div")),
          (a = v("span")),
          (s = J(l)),
          (o = z()),
          (c = v("nylas-tooltip")),
          (h = z()),
          (b = v("section")),
          le && le.c(),
          (_ = z()),
          (O = v("div")),
          (C = J(P)),
          f(a, "class", "name"),
          S(c, "id", (d = (L = i[2]) == null ? void 0 : L.id.slice(0, 3))),
          S(c, "current_tooltip_id", i[13]),
          S(c, "icon", ki),
          S(c, "content", (m = (x = i[2]) == null ? void 0 : x.from[0].email)),
          f(r, "class", "message-from"),
          f(t, "class", "avatar-info"),
          f(e, "class", "message-head"),
          f(O, "class", "snippet");
      },
      m(L, x) {
        g(L, e, x),
          y(e, t),
          oe && oe.m(t, null),
          y(t, n),
          y(t, r),
          y(r, a),
          y(a, s),
          y(r, o),
          y(r, c),
          y(e, h),
          y(e, b),
          le && le.m(b, null),
          g(L, _, x),
          g(L, O, x),
          y(O, C),
          I || ((N = Y(c, "toggleTooltip", i[34])), (I = !0));
      },
      p(L, x) {
        var Oe, Ne, ye, he, de;
        L[4].show_contact_avatar
          ? oe
            ? oe.p(L, x)
            : ((oe = vl(L)), oe.c(), oe.m(t, n))
          : oe && (oe.d(1), (oe = null)),
          x[0] & 384 &&
            l !==
              (l =
                (L[8] &&
                ((Oe = L[2]) == null ? void 0 : Oe.from[0].email) === L[8]
                  ? "me"
                  : ((Ne = L[2]) == null ? void 0 : Ne.from[0].name) ||
                    ((ye = L[2]) == null ? void 0 : ye.from[0].email)) + "") &&
            pe(s, l),
          x[0] & 128 &&
            d !== (d = (he = L[2]) == null ? void 0 : he.id.slice(0, 3)) &&
            S(c, "id", d),
          x[0] & 8192 && S(c, "current_tooltip_id", L[13]),
          x[0] & 128 &&
            m !== (m = (de = L[2]) == null ? void 0 : de.from[0].email) &&
            S(c, "content", m),
          L[4].show_received_timestamp
            ? le
              ? le.p(L, x)
              : ((le = wl(L)), le.c(), le.m(b, null))
            : le && (le.d(1), (le = null)),
          x[0] & 128 && P !== (P = L[2].snippet + "") && pe(C, P);
      },
      i: k,
      o: k,
      d(L) {
        L && u(e),
          oe && oe.d(),
          le && le.d(),
          L && u(_),
          L && u(O),
          (I = !1),
          N();
      },
    };
  }
  function zc(i) {
    var Me, R, Ee, Xe;
    let e,
      t,
      n,
      r,
      a,
      l,
      s =
        (i[8] && ((Me = i[2]) == null ? void 0 : Me.from[0].email) === i[8]
          ? "me"
          : ((R = i[2]) == null ? void 0 : R.from[0].name) ||
            ((Ee = i[2]) == null ? void 0 : Ee.from[0].email)) + "",
      o,
      c,
      d,
      m,
      h,
      b,
      _,
      O,
      P,
      C,
      I,
      N,
      oe = i[4].show_reply_all && i[28](i[2]),
      le,
      ee,
      Z,
      X,
      L,
      x,
      Oe,
      Ne,
      ye = i[4].show_contact_avatar && yl(i),
      he = ((Xe = i[2]) == null ? void 0 : Xe.to) && kl(i),
      de = i[4].show_received_timestamp && Cl(i),
      te = i[4].show_reply && Al(i),
      Le = oe && Sl(i),
      U = i[4].show_forward && Ol(i);
    const _e = [ed, $c, qc, Qc],
      De = [];
    function ke(H, ge) {
      return H[4].clean_conversation && H[2].conversation
        ? 0
        : H[2] && H[2].body != null
        ? 1
        : !!H[4].thread && !H[4].thread_id && H[1] != "mailbox"
        ? 2
        : 3;
    }
    return (
      (X = ke(i)),
      (L = De[X] = _e[X](i)),
      {
        c() {
          var H, ge;
          (e = v("div")),
            (t = v("div")),
            (n = v("div")),
            ye && ye.c(),
            (r = z()),
            (a = v("div")),
            (l = v("span")),
            (o = J(s)),
            (c = z()),
            (d = v("nylas-tooltip")),
            (b = z()),
            (_ = v("div")),
            he && he.c(),
            (O = z()),
            (P = v("div")),
            de && de.c(),
            (C = z()),
            (I = v("div")),
            te && te.c(),
            (N = z()),
            Le && Le.c(),
            (le = z()),
            U && U.c(),
            (ee = z()),
            (Z = v("div")),
            L.c(),
            f(l, "class", "name"),
            S(d, "id", (m = (H = i[2]) == null ? void 0 : H.id.slice(0, 3))),
            S(d, "current_tooltip_id", i[13]),
            S(d, "icon", ki),
            S(
              d,
              "content",
              (h = (ge = i[2]) == null ? void 0 : ge.from[0].email),
            ),
            f(a, "class", "message-from"),
            f(n, "class", "avatar-info"),
            f(_, "class", "message-to"),
            f(t, "class", "message-from-to"),
            f(I, "aria-label", "Email Actions"),
            f(I, "role", "toolbar"),
            f(P, "class", ""),
            f(e, "class", "message-head"),
            f(Z, "class", "message-body");
        },
        m(H, ge) {
          g(H, e, ge),
            y(e, t),
            y(t, n),
            ye && ye.m(n, null),
            y(n, r),
            y(n, a),
            y(a, l),
            y(l, o),
            y(a, c),
            y(a, d),
            y(t, b),
            y(t, _),
            he && he.m(_, null),
            y(e, O),
            y(e, P),
            de && de.m(P, null),
            y(P, C),
            y(P, I),
            te && te.m(I, null),
            y(I, N),
            Le && Le.m(I, null),
            y(I, le),
            U && U.m(I, null),
            g(H, ee, ge),
            g(H, Z, ge),
            De[X].m(Z, null),
            (x = !0),
            Oe || ((Ne = Y(d, "toggleTooltip", i[34])), (Oe = !0));
        },
        p(H, ge) {
          var ct, se, qe, Ze, Pe, je;
          H[4].show_contact_avatar
            ? ye
              ? ye.p(H, ge)
              : ((ye = yl(H)), ye.c(), ye.m(n, r))
            : ye && (ye.d(1), (ye = null)),
            (!x || ge[0] & 384) &&
              s !==
                (s =
                  (H[8] &&
                  ((ct = H[2]) == null ? void 0 : ct.from[0].email) === H[8]
                    ? "me"
                    : ((se = H[2]) == null ? void 0 : se.from[0].name) ||
                      ((qe = H[2]) == null ? void 0 : qe.from[0].email)) +
                  "") &&
              pe(o, s),
            (!x ||
              (ge[0] & 128 &&
                m !==
                  (m = (Ze = H[2]) == null ? void 0 : Ze.id.slice(0, 3)))) &&
              S(d, "id", m),
            (!x || ge[0] & 8192) && S(d, "current_tooltip_id", H[13]),
            (!x ||
              (ge[0] & 128 &&
                h !== (h = (Pe = H[2]) == null ? void 0 : Pe.from[0].email))) &&
              S(d, "content", h),
            ((je = H[2]) == null ? void 0 : je.to)
              ? he
                ? he.p(H, ge)
                : ((he = kl(H)), he.c(), he.m(_, null))
              : he && (he.d(1), (he = null)),
            H[4].show_received_timestamp
              ? de
                ? de.p(H, ge)
                : ((de = Cl(H)), de.c(), de.m(P, C))
              : de && (de.d(1), (de = null)),
            H[4].show_reply
              ? te
                ? (te.p(H, ge), ge[0] & 16 && A(te, 1))
                : ((te = Al(H)), te.c(), A(te, 1), te.m(I, N))
              : te &&
                (Ae(),
                F(te, 1, 1, () => {
                  te = null;
                }),
                Se()),
            ge[0] & 144 && (oe = H[4].show_reply_all && H[28](H[2])),
            oe
              ? Le
                ? (Le.p(H, ge), ge[0] & 144 && A(Le, 1))
                : ((Le = Sl(H)), Le.c(), A(Le, 1), Le.m(I, le))
              : Le &&
                (Ae(),
                F(Le, 1, 1, () => {
                  Le = null;
                }),
                Se()),
            H[4].show_forward
              ? U
                ? (U.p(H, ge), ge[0] & 16 && A(U, 1))
                : ((U = Ol(H)), U.c(), A(U, 1), U.m(I, null))
              : U &&
                (Ae(),
                F(U, 1, 1, () => {
                  U = null;
                }),
                Se());
          let M = X;
          (X = ke(H)),
            X === M
              ? De[X].p(H, ge)
              : (Ae(),
                F(De[M], 1, 1, () => {
                  De[M] = null;
                }),
                Se(),
                (L = De[X]),
                L ? L.p(H, ge) : ((L = De[X] = _e[X](H)), L.c()),
                A(L, 1),
                L.m(Z, null));
        },
        i(H) {
          x || (A(te), A(Le), A(U), A(L), (x = !0));
        },
        o(H) {
          F(te), F(Le), F(U), F(L), (x = !1);
        },
        d(H) {
          H && u(e),
            ye && ye.d(),
            he && he.d(),
            de && de.d(),
            te && te.d(),
            Le && Le.d(),
            U && U.d(),
            H && u(ee),
            H && u(Z),
            De[X].d(),
            (Oe = !1),
            Ne();
        },
      }
    );
  }
  function vl(i) {
    let e, t, n;
    return {
      c() {
        var r;
        (e = v("div")),
          (t = v("nylas-contact-image")),
          S(t, "contact_query", i[12]),
          S(
            t,
            "contact",
            (n = i[5][(r = i[2]) == null ? void 0 : r.from[0].email]),
          ),
          f(e, "class", "default-avatar");
      },
      m(r, a) {
        g(r, e, a), y(e, t);
      },
      p(r, a) {
        var l;
        a[0] & 4096 && S(t, "contact_query", r[12]),
          a[0] & 160 &&
            n !== (n = r[5][(l = r[2]) == null ? void 0 : l.from[0].email]) &&
            S(t, "contact", n);
      },
      d(r) {
        r && u(e);
      },
    };
  }
  function wl(i) {
    let e,
      t,
      n = Kt(new Date(i[2].date * 1e3)) + "",
      r;
    return {
      c() {
        (e = v("div")),
          (t = v("span")),
          (r = J(n)),
          f(e, "class", "message-date");
      },
      m(a, l) {
        g(a, e, l), y(e, t), y(t, r);
      },
      p(a, l) {
        l[0] & 128 &&
          n !== (n = Kt(new Date(a[2].date * 1e3)) + "") &&
          pe(r, n);
      },
      d(a) {
        a && u(e);
      },
    };
  }
  function yl(i) {
    let e, t, n;
    return {
      c() {
        var r;
        (e = v("div")),
          (t = v("nylas-contact-image")),
          S(t, "contact_query", i[12]),
          S(
            t,
            "contact",
            (n = i[5][(r = i[2]) == null ? void 0 : r.from[0].email]),
          ),
          f(e, "class", "default-avatar");
      },
      m(r, a) {
        g(r, e, a), y(e, t);
      },
      p(r, a) {
        var l;
        a[0] & 4096 && S(t, "contact_query", r[12]),
          a[0] & 160 &&
            n !== (n = r[5][(l = r[2]) == null ? void 0 : l.from[0].email]) &&
            S(t, "contact", n);
      },
      d(r) {
        r && u(e);
      },
    };
  }
  function kl(i) {
    let e,
      t,
      n = {
        ctx: i,
        current: null,
        token: null,
        hasCatch: !1,
        pending: Xc,
        then: Gc,
        catch: Vc,
        value: 123,
      };
    return (
      vt((t = i[38]({ to: i[2].to, cc: i[2].cc, bcc: i[2].bcc })), n),
      {
        c() {
          (e = Be()), n.block.c();
        },
        m(r, a) {
          g(r, e, a),
            n.block.m(r, (n.anchor = a)),
            (n.mount = () => e.parentNode),
            (n.anchor = e);
        },
        p(r, a) {
          (i = r),
            (n.ctx = i),
            (a[0] & 128 &&
              t !== (t = i[38]({ to: i[2].to, cc: i[2].cc, bcc: i[2].bcc })) &&
              vt(t, n)) ||
              li(n, i, a);
        },
        d(r) {
          r && u(e), n.block.d(r), (n.token = null), (n = null);
        },
      }
    );
  }
  function Vc(i) {
    return { c: k, m: k, p: k, d: k };
  }
  function Gc(i) {
    let e,
      t,
      n = i[123].slice(0, st),
      r = [];
    for (let l = 0; l < n.length; l += 1) r[l] = El(Wr(i, n, l));
    let a = i[123].length > st && Tl(i);
    return {
      c() {
        for (let l = 0; l < r.length; l += 1) r[l].c();
        (e = z()), a && a.c(), (t = Be());
      },
      m(l, s) {
        for (let o = 0; o < r.length; o += 1) r[o].m(l, s);
        g(l, e, s), a && a.m(l, s), g(l, t, s);
      },
      p(l, s) {
        if ((s[0] & 144) | (s[1] & 128)) {
          n = l[123].slice(0, st);
          let o;
          for (o = 0; o < n.length; o += 1) {
            const c = Wr(l, n, o);
            r[o]
              ? r[o].p(c, s)
              : ((r[o] = El(c)), r[o].c(), r[o].m(e.parentNode, e));
          }
          for (; o < r.length; o += 1) r[o].d(1);
          r.length = n.length;
        }
        l[123].length > st
          ? a
            ? a.p(l, s)
            : ((a = Tl(l)), a.c(), a.m(t.parentNode, t))
          : a && (a.d(1), (a = null));
      },
      d(l) {
        bt(r, l), l && u(e), a && a.d(l), l && u(t);
      },
    };
  }
  function Wc(i) {
    let e;
    return {
      c() {
        e = J("bcc:");
      },
      m(t, n) {
        g(t, e, n);
      },
      p: k,
      d(t) {
        t && u(e);
      },
    };
  }
  function Zc(i) {
    let e;
    return {
      c() {
        e = J("cc:");
      },
      m(t, n) {
        g(t, e, n);
      },
      p: k,
      d(t) {
        t && u(e);
      },
    };
  }
  function Jc(i) {
    let e = `to ${
        i[4].you && i[124].email === i[4].you.email_address ? "Me" : ""
      }`,
      t;
    return {
      c() {
        t = J(e);
      },
      m(n, r) {
        g(n, t, r);
      },
      p(n, r) {
        r[0] & 144 &&
          e !==
            (e = `to ${
              n[4].you && n[124].email === n[4].you.email_address ? "Me" : ""
            }`) &&
          pe(t, e);
      },
      d(n) {
        n && u(t);
      },
    };
  }
  function Yc(i) {
    let e = i[124].email + "",
      t;
    return {
      c() {
        t = J(e);
      },
      m(n, r) {
        g(n, t, r);
      },
      p(n, r) {
        r[0] & 128 && e !== (e = n[124].email + "") && pe(t, e);
      },
      d(n) {
        n && u(t);
      },
    };
  }
  function Kc(i) {
    var s;
    let e = ((s = i[124].name) != null ? s : i[4].you.name) + "",
      t,
      n,
      r = i[124].email + "",
      a,
      l;
    return {
      c() {
        (t = J(e)), (n = J(" <")), (a = J(r)), (l = J(">"));
      },
      m(o, c) {
        g(o, t, c), g(o, n, c), g(o, a, c), g(o, l, c);
      },
      p(o, c) {
        var d;
        c[0] & 144 &&
          e !== (e = ((d = o[124].name) != null ? d : o[4].you.name) + "") &&
          pe(t, e),
          c[0] & 128 && r !== (r = o[124].email + "") && pe(a, r);
      },
      d(o) {
        o && u(t), o && u(n), o && u(a), o && u(l);
      },
    };
  }
  function El(i) {
    let e, t;
    function n(c, d) {
      if (c[126] === 0) return Jc;
      if (c[124]._type === "cc" && c[126] === c[2].to.length) return Zc;
      if (c[124]._type === "bcc" && c[126] === c[2].to.length + c[2].cc.length)
        return Wc;
    }
    let r = n(i),
      a = r && r(i);
    function l(c, d) {
      if (c[124].email && c[124].name) return Kc;
      if (c[124].email && !c[124].name) return Yc;
    }
    let s = l(i),
      o = s && s(i);
    return {
      c() {
        (e = v("p")), a && a.c(), (t = z()), o && o.c();
      },
      m(c, d) {
        g(c, e, d), a && a.m(e, null), y(e, t), o && o.m(e, null);
      },
      p(c, d) {
        r === (r = n(c)) && a
          ? a.p(c, d)
          : (a && a.d(1), (a = r && r(c)), a && (a.c(), a.m(e, t))),
          s === (s = l(c)) && o
            ? o.p(c, d)
            : (o && o.d(1), (o = s && s(c)), o && (o.c(), o.m(e, null)));
      },
      d(c) {
        c && u(e), a && a.d(), o && o.d();
      },
    };
  }
  function Tl(i) {
    let e, t, n, r, a, l, s;
    return {
      c() {
        (e = v("div")),
          (t = v("nylas-tooltip")),
          S(t, "id", (n = `show-more-participants-${i[2].id}`)),
          S(t, "current_tooltip_id", i[13]),
          S(t, "icon", ki),
          S(t, "text", (r = `And ${i[123].length - st} more`)),
          S(t, "content", (a = `${Ti(i[123])}`));
      },
      m(o, c) {
        g(o, e, c),
          y(e, t),
          l || ((s = Y(t, "toggleTooltip", i[34])), (l = !0));
      },
      p(o, c) {
        c[0] & 128 &&
          n !== (n = `show-more-participants-${o[2].id}`) &&
          S(t, "id", n),
          c[0] & 8192 && S(t, "current_tooltip_id", o[13]),
          c[0] & 128 &&
            r !== (r = `And ${o[123].length - st} more`) &&
            S(t, "text", r),
          c[0] & 128 && a !== (a = `${Ti(o[123])}`) && S(t, "content", a);
      },
      d(o) {
        o && u(e), (l = !1), s();
      },
    };
  }
  function Xc(i) {
    return { c: k, m: k, p: k, d: k };
  }
  function Cl(i) {
    let e,
      t,
      n = Kt(new Date(i[2].date * 1e3)) + "",
      r;
    return {
      c() {
        (e = v("div")),
          (t = v("span")),
          (r = J(n)),
          f(e, "class", "message-date");
      },
      m(a, l) {
        g(a, e, l), y(e, t), y(t, r);
      },
      p(a, l) {
        l[0] & 128 &&
          n !== (n = Kt(new Date(a[2].date * 1e3)) + "") &&
          pe(r, n);
      },
      d(a) {
        a && u(e);
      },
    };
  }
  function Al(i) {
    let e, t, n, r, a, l;
    n = new jr({ props: { "aria-hidden": "true" } });
    function s(...o) {
      return i[81](i[2], ...o);
    }
    return {
      c() {
        (e = v("div")),
          (t = v("button")),
          He(n.$$.fragment),
          f(t, "title", "Reply"),
          f(t, "aria-label", "Reply"),
          f(e, "class", "reply");
      },
      m(o, c) {
        g(o, e, c),
          y(e, t),
          Fe(n, t, null),
          (r = !0),
          a || ((l = Y(t, "click", Ke(s))), (a = !0));
      },
      p(o, c) {
        i = o;
      },
      i(o) {
        r || (A(n.$$.fragment, o), (r = !0));
      },
      o(o) {
        F(n.$$.fragment, o), (r = !1);
      },
      d(o) {
        o && u(e), Ie(n), (a = !1), l();
      },
    };
  }
  function Sl(i) {
    let e, t, n, r, a, l;
    n = new Rr({ props: { "aria-hidden": "true" } });
    function s(...o) {
      return i[82](i[2], ...o);
    }
    return {
      c() {
        (e = v("div")),
          (t = v("button")),
          He(n.$$.fragment),
          f(t, "title", "Reply all"),
          f(t, "aria-label", "Reply all"),
          f(e, "class", "reply-all");
      },
      m(o, c) {
        g(o, e, c),
          y(e, t),
          Fe(n, t, null),
          (r = !0),
          a || ((l = Y(t, "click", Ke(s))), (a = !0));
      },
      p(o, c) {
        i = o;
      },
      i(o) {
        r || (A(n.$$.fragment, o), (r = !0));
      },
      o(o) {
        F(n.$$.fragment, o), (r = !1);
      },
      d(o) {
        o && u(e), Ie(n), (a = !1), l();
      },
    };
  }
  function Ol(i) {
    let e, t, n, r, a, l;
    n = new Ir({ props: { "aria-hidden": "true" } });
    function s(...o) {
      return i[83](i[2], ...o);
    }
    return {
      c() {
        (e = v("div")),
          (t = v("button")),
          He(n.$$.fragment),
          f(t, "title", "Forward"),
          f(t, "aria-label", "Forward"),
          f(e, "class", "forward");
      },
      m(o, c) {
        g(o, e, c),
          y(e, t),
          Fe(n, t, null),
          (r = !0),
          a || ((l = Y(t, "click", Ke(s))), (a = !0));
      },
      p(o, c) {
        i = o;
      },
      i(o) {
        r || (A(n.$$.fragment, o), (r = !0));
      },
      o(o) {
        F(n.$$.fragment, o), (r = !1);
      },
      d(o) {
        o && u(e), Ie(n), (a = !1), l();
      },
    };
  }
  function Qc(i) {
    let e, t, n, r;
    return (
      (t = new Gs({ props: { class: "spinner" } })),
      {
        c() {
          (e = v("div")),
            He(t.$$.fragment),
            (n = J(`
                          Loading...`)),
            f(e, "class", "email-loader");
        },
        m(a, l) {
          g(a, e, l), Fe(t, e, null), y(e, n), (r = !0);
        },
        p: k,
        i(a) {
          r || (A(t.$$.fragment, a), (r = !0));
        },
        o(a) {
          F(t.$$.fragment, a), (r = !1);
        },
        d(a) {
          a && u(e), Ie(t);
        },
      }
    );
  }
  function qc(i) {
    var s;
    let e = ((s = i[2].body) != null ? s : i[2].snippet) + "",
      t,
      n,
      r =
        i[15][i[2].id] &&
        Array.isArray(i[15][i[2].id]) &&
        i[15][i[2].id].length > 0,
      a,
      l = r && Ll(i);
    return {
      c() {
        (t = J(e)), (n = z()), l && l.c(), (a = Be());
      },
      m(o, c) {
        g(o, t, c), g(o, n, c), l && l.m(o, c), g(o, a, c);
      },
      p(o, c) {
        var d;
        c[0] & 128 &&
          e !== (e = ((d = o[2].body) != null ? d : o[2].snippet) + "") &&
          pe(t, e),
          c[0] & 32896 &&
            (r =
              o[15][o[2].id] &&
              Array.isArray(o[15][o[2].id]) &&
              o[15][o[2].id].length > 0),
          r
            ? l
              ? l.p(o, c)
              : ((l = Ll(o)), l.c(), l.m(a.parentNode, a))
            : l && (l.d(1), (l = null));
      },
      i: k,
      o: k,
      d(o) {
        o && u(t), o && u(n), l && l.d(o), o && u(a);
      },
    };
  }
  function $c(i) {
    let e, t, n, r, a;
    return {
      c() {
        (e = v("nylas-message-body")),
          S(e, "message", (t = i[2])),
          S(e, "body", (n = i[2].body));
      },
      m(l, s) {
        g(l, e, s), r || ((a = Y(e, "downloadClicked", i[37])), (r = !0));
      },
      p(l, s) {
        s[0] & 128 && t !== (t = l[2]) && S(e, "message", t),
          s[0] & 128 && n !== (n = l[2].body) && S(e, "body", n);
      },
      i: k,
      o: k,
      d(l) {
        l && u(e), (r = !1), a();
      },
    };
  }
  function ed(i) {
    let e,
      t = Ei.sanitize(i[2].conversation) + "",
      n;
    return {
      c() {
        (e = new mn()), (n = Be()), (e.a = n);
      },
      m(r, a) {
        e.m(t, r, a), g(r, n, a);
      },
      p(r, a) {
        a[0] & 128 && t !== (t = Ei.sanitize(r[2].conversation) + "") && e.p(t);
      },
      i: k,
      o: k,
      d(r) {
        r && u(n), r && e.d();
      },
    };
  }
  function Ll(i) {
    let e,
      t = i[15][i[2].id],
      n = [];
    for (let r = 0; r < t.length; r += 1) n[r] = Ml(Gr(i, t, r));
    return {
      c() {
        e = v("div");
        for (let r = 0; r < n.length; r += 1) n[r].c();
        f(e, "class", "attachment");
      },
      m(r, a) {
        g(r, e, a);
        for (let l = 0; l < n.length; l += 1) n[l].m(e, null);
      },
      p(r, a) {
        if (a[0] & 557184) {
          t = r[15][r[2].id];
          let l;
          for (l = 0; l < t.length; l += 1) {
            const s = Gr(r, t, l);
            n[l] ? n[l].p(s, a) : ((n[l] = Ml(s)), n[l].c(), n[l].m(e, null));
          }
          for (; l < n.length; l += 1) n[l].d(1);
          n.length = t.length;
        }
      },
      d(r) {
        r && u(e), bt(n, r);
      },
    };
  }
  function Ml(i) {
    let e,
      t = (i[129].filename || i[129].id) + "",
      n,
      r,
      a,
      l;
    function s(...o) {
      return i[84](i[129], ...o);
    }
    return {
      c() {
        (e = v("button")), (n = J(t)), (r = z());
      },
      m(o, c) {
        g(o, e, c),
          y(e, n),
          y(e, r),
          a || ((l = Y(e, "click", Ke(s))), (a = !0));
      },
      p(o, c) {
        (i = o),
          c[0] & 32896 &&
            t !== (t = (i[129].filename || i[129].id) + "") &&
            pe(n, t);
      },
      d(o) {
        o && u(e), (a = !1), l();
      },
    };
  }
  function Nl(i) {
    let e,
      t,
      n,
      r,
      a,
      l = i[128],
      s,
      o,
      c;
    const d = [zc, Hc],
      m = [];
    function h(C, I) {
      return C[2].expanded || C[128] === C[7].messages.length - 1 ? 0 : 1;
    }
    (t = h(i)), (n = m[t] = d[t](i));
    const b = () => i[85](e, l),
      _ = () => i[85](null, l);
    function O(...C) {
      return i[86](i[128], ...C);
    }
    function P(...C) {
      return i[87](i[128], ...C);
    }
    return {
      c() {
        (e = v("div")),
          n.c(),
          (r = z()),
          f(
            e,
            "class",
            (a = `individual-message ${
              i[128] === i[7].messages.length - 1 || i[2].expanded
                ? "expanded"
                : "condensed"
            }`),
          ),
          we(e, "last-message", i[128] === i[7].messages.length - 1);
      },
      m(C, I) {
        g(C, e, I),
          m[t].m(e, null),
          y(e, r),
          b(),
          (s = !0),
          o || ((c = [Y(e, "click", Ke(O)), Y(e, "keypress", P)]), (o = !0));
      },
      p(C, I) {
        i = C;
        let N = t;
        (t = h(i)),
          t === N
            ? m[t].p(i, I)
            : (Ae(),
              F(m[N], 1, 1, () => {
                m[N] = null;
              }),
              Se(),
              (n = m[t]),
              n ? n.p(i, I) : ((n = m[t] = d[t](i)), n.c()),
              A(n, 1),
              n.m(e, r)),
          (!s ||
            (I[0] & 128 &&
              a !==
                (a = `individual-message ${
                  i[128] === i[7].messages.length - 1 || i[2].expanded
                    ? "expanded"
                    : "condensed"
                }`))) &&
            f(e, "class", a),
          l !== i[128] && (_(), (l = i[128]), b()),
          I[0] & 128 &&
            we(e, "last-message", i[128] === i[7].messages.length - 1);
      },
      i(C) {
        s || (A(n), (s = !0));
      },
      o(C) {
        F(n), (s = !1);
      },
      d(C) {
        C && u(e), m[t].d(), _(), (o = !1), ot(c);
      },
    };
  }
  function Dl(i) {
    let e,
      t,
      n = i[7].drafts,
      r = [];
    for (let l = 0; l < n.length; l += 1) r[l] = xl(Hr(i, n, l));
    const a = (l) =>
      F(r[l], 1, 1, () => {
        r[l] = null;
      });
    return {
      c() {
        for (let l = 0; l < r.length; l += 1) r[l].c();
        e = Be();
      },
      m(l, s) {
        for (let o = 0; o < r.length; o += 1) r[o].m(l, s);
        g(l, e, s), (t = !0);
      },
      p(l, s) {
        if ((s[0] & 8400) | (s[1] & 139)) {
          n = l[7].drafts;
          let o;
          for (o = 0; o < n.length; o += 1) {
            const c = Hr(l, n, o);
            r[o]
              ? (r[o].p(c, s), A(r[o], 1))
              : ((r[o] = xl(c)), r[o].c(), A(r[o], 1), r[o].m(e.parentNode, e));
          }
          for (Ae(), o = n.length; o < r.length; o += 1) a(o);
          Se();
        }
      },
      i(l) {
        if (!t) {
          for (let s = 0; s < n.length; s += 1) A(r[s]);
          t = !0;
        }
      },
      o(l) {
        r = r.filter(Boolean);
        for (let s = 0; s < r.length; s += 1) F(r[s]);
        t = !1;
      },
      d(l) {
        bt(r, l), l && u(e);
      },
    };
  }
  function Pl(i) {
    let e, t, n;
    return (
      (t = new Tr({})),
      {
        c() {
          (e = v("div")),
            He(t.$$.fragment),
            f(e, "class", "default-avatar draft");
        },
        m(r, a) {
          g(r, e, a), Fe(t, e, null), (n = !0);
        },
        i(r) {
          n || (A(t.$$.fragment, r), (n = !0));
        },
        o(r) {
          F(t.$$.fragment, r), (n = !1);
        },
        d(r) {
          r && u(e), Ie(t);
        },
      }
    );
  }
  function jl(i) {
    let e,
      t,
      n = {
        ctx: i,
        current: null,
        token: null,
        hasCatch: !1,
        pending: sd,
        then: id,
        catch: td,
        value: 123,
      };
    return (
      vt((t = i[38]({ to: i[120].to, cc: i[120].cc, bcc: i[120].bcc })), n),
      {
        c() {
          (e = Be()), n.block.c();
        },
        m(r, a) {
          g(r, e, a),
            n.block.m(r, (n.anchor = a)),
            (n.mount = () => e.parentNode),
            (n.anchor = e);
        },
        p(r, a) {
          (i = r),
            (n.ctx = i),
            (a[0] & 128 &&
              t !==
                (t = i[38]({
                  to: i[120].to,
                  cc: i[120].cc,
                  bcc: i[120].bcc,
                })) &&
              vt(t, n)) ||
              li(n, i, a);
        },
        d(r) {
          r && u(e), n.block.d(r), (n.token = null), (n = null);
        },
      }
    );
  }
  function td(i) {
    return { c: k, m: k, p: k, d: k };
  }
  function id(i) {
    let e,
      t,
      n = i[123].slice(0, st),
      r = [];
    for (let l = 0; l < n.length; l += 1) r[l] = Rl(zr(i, n, l));
    let a = i[123].length > st && Il(i);
    return {
      c() {
        for (let l = 0; l < r.length; l += 1) r[l].c();
        (e = z()), a && a.c(), (t = Be());
      },
      m(l, s) {
        for (let o = 0; o < r.length; o += 1) r[o].m(l, s);
        g(l, e, s), a && a.m(l, s), g(l, t, s);
      },
      p(l, s) {
        if ((s[0] & 144) | (s[1] & 128)) {
          n = l[123].slice(0, st);
          let o;
          for (o = 0; o < n.length; o += 1) {
            const c = zr(l, n, o);
            r[o]
              ? r[o].p(c, s)
              : ((r[o] = Rl(c)), r[o].c(), r[o].m(e.parentNode, e));
          }
          for (; o < r.length; o += 1) r[o].d(1);
          r.length = n.length;
        }
        l[123].length > st
          ? a
            ? a.p(l, s)
            : ((a = Il(l)), a.c(), a.m(t.parentNode, t))
          : a && (a.d(1), (a = null));
      },
      d(l) {
        bt(r, l), l && u(e), a && a.d(l), l && u(t);
      },
    };
  }
  function nd(i) {
    let e;
    return {
      c() {
        e = J("bcc:");
      },
      m(t, n) {
        g(t, e, n);
      },
      p: k,
      d(t) {
        t && u(e);
      },
    };
  }
  function rd(i) {
    let e;
    return {
      c() {
        e = J("cc:");
      },
      m(t, n) {
        g(t, e, n);
      },
      p: k,
      d(t) {
        t && u(e);
      },
    };
  }
  function ld(i) {
    let e = `to ${
        i[4].you && i[124].email === i[4].you.email_address ? "Me" : ""
      }`,
      t;
    return {
      c() {
        t = J(e);
      },
      m(n, r) {
        g(n, t, r);
      },
      p(n, r) {
        r[0] & 144 &&
          e !==
            (e = `to ${
              n[4].you && n[124].email === n[4].you.email_address ? "Me" : ""
            }`) &&
          pe(t, e);
      },
      d(n) {
        n && u(t);
      },
    };
  }
  function ad(i) {
    let e = i[124].email + "",
      t;
    return {
      c() {
        t = J(e);
      },
      m(n, r) {
        g(n, t, r);
      },
      p(n, r) {
        r[0] & 128 && e !== (e = n[124].email + "") && pe(t, e);
      },
      d(n) {
        n && u(t);
      },
    };
  }
  function od(i) {
    var s;
    let e = ((s = i[124].name) != null ? s : i[4].you.name) + "",
      t,
      n,
      r = i[124].email + "",
      a,
      l;
    return {
      c() {
        (t = J(e)), (n = J(" <")), (a = J(r)), (l = J(">"));
      },
      m(o, c) {
        g(o, t, c), g(o, n, c), g(o, a, c), g(o, l, c);
      },
      p(o, c) {
        var d;
        c[0] & 144 &&
          e !== (e = ((d = o[124].name) != null ? d : o[4].you.name) + "") &&
          pe(t, e),
          c[0] & 128 && r !== (r = o[124].email + "") && pe(a, r);
      },
      d(o) {
        o && u(t), o && u(n), o && u(a), o && u(l);
      },
    };
  }
  function Rl(i) {
    let e, t, n;
    function r(d, m) {
      if (d[126] === 0) return ld;
      if (d[124]._type === "cc" && d[126] === d[120].to.length) return rd;
      if (
        d[124]._type === "bcc" &&
        d[126] === d[120].to.length + d[120].cc.length
      )
        return nd;
    }
    let a = r(i),
      l = a && a(i);
    function s(d, m) {
      if (d[124].email && d[124].name) return od;
      if (d[124].email && !d[124].name) return ad;
    }
    let o = s(i),
      c = o && o(i);
    return {
      c() {
        (e = v("p")),
          (t = J(`Draft
                                `)),
          l && l.c(),
          (n = z()),
          c && c.c();
      },
      m(d, m) {
        g(d, e, m), y(e, t), l && l.m(e, null), y(e, n), c && c.m(e, null);
      },
      p(d, m) {
        a === (a = r(d)) && l
          ? l.p(d, m)
          : (l && l.d(1), (l = a && a(d)), l && (l.c(), l.m(e, n))),
          o === (o = s(d)) && c
            ? c.p(d, m)
            : (c && c.d(1), (c = o && o(d)), c && (c.c(), c.m(e, null)));
      },
      d(d) {
        d && u(e), l && l.d(), c && c.d();
      },
    };
  }
  function Il(i) {
    let e, t, n, r, a, l, s;
    return {
      c() {
        (e = v("div")),
          (t = v("nylas-tooltip")),
          S(t, "id", (n = `show-more-participants-${i[120].id}`)),
          S(t, "current_tooltip_id", i[13]),
          S(t, "icon", ki),
          S(t, "text", (r = `And ${i[123].length - st} more`)),
          S(t, "content", (a = `${Ti(i[123])}`));
      },
      m(o, c) {
        g(o, e, c),
          y(e, t),
          l || ((s = Y(t, "toggleTooltip", i[34])), (l = !0));
      },
      p(o, c) {
        c[0] & 128 &&
          n !== (n = `show-more-participants-${o[120].id}`) &&
          S(t, "id", n),
          c[0] & 8192 && S(t, "current_tooltip_id", o[13]),
          c[0] & 128 &&
            r !== (r = `And ${o[123].length - st} more`) &&
            S(t, "text", r),
          c[0] & 128 && a !== (a = `${Ti(o[123])}`) && S(t, "content", a);
      },
      d(o) {
        o && u(e), (l = !1), s();
      },
    };
  }
  function sd(i) {
    return { c: k, m: k, p: k, d: k };
  }
  function Fl(i) {
    let e,
      t,
      n,
      r = Kt(new Date(i[120].date * 1e3)) + "",
      a;
    return {
      c() {
        (e = v("div")),
          (t = v("span")),
          (n = J("Saved at: ")),
          (a = J(r)),
          f(e, "class", "message-date");
      },
      m(l, s) {
        g(l, e, s), y(e, t), y(t, n), y(t, a);
      },
      p(l, s) {
        s[0] & 128 &&
          r !== (r = Kt(new Date(l[120].date * 1e3)) + "") &&
          pe(a, r);
      },
      d(l) {
        l && u(e);
      },
    };
  }
  function xl(i) {
    var X;
    let e,
      t,
      n,
      r,
      a,
      l,
      s,
      o,
      c,
      d = i[120].snippet + "",
      m,
      h,
      b = i[122],
      _,
      O,
      P,
      C = i[4].show_contact_avatar && Pl(),
      I = ((X = i[120]) == null ? void 0 : X.to) && jl(i),
      N = i[4].show_received_timestamp && Fl(i);
    const oe = () => i[88](e, b),
      le = () => i[88](null, b);
    function ee(...L) {
      return i[89](i[120], ...L);
    }
    function Z(...L) {
      return i[90](i[120], ...L);
    }
    return {
      c() {
        (e = v("div")),
          (t = v("div")),
          (n = v("div")),
          C && C.c(),
          (r = z()),
          (a = v("div")),
          I && I.c(),
          (l = z()),
          (s = v("section")),
          N && N.c(),
          (o = z()),
          (c = v("div")),
          (m = J(d)),
          (h = z()),
          f(a, "class", "draft-to"),
          f(n, "class", "avatar-info"),
          f(t, "class", "message-head draft"),
          f(c, "class", "snippet"),
          f(e, "tabindex", "0"),
          f(e, "class", "individual-message condensed draft-message"),
          we(e, "active-draft", i[120].active);
      },
      m(L, x) {
        g(L, e, x),
          y(e, t),
          y(t, n),
          C && C.m(n, null),
          y(n, r),
          y(n, a),
          I && I.m(a, null),
          y(t, l),
          y(t, s),
          N && N.m(s, null),
          y(e, o),
          y(e, c),
          y(c, m),
          y(e, h),
          oe(),
          (_ = !0),
          O || ((P = [Y(e, "click", Ke(ee)), Y(e, "keypress", Z)]), (O = !0));
      },
      p(L, x) {
        var Oe;
        (i = L),
          i[4].show_contact_avatar
            ? C
              ? x[0] & 16 && A(C, 1)
              : ((C = Pl()), C.c(), A(C, 1), C.m(n, r))
            : C &&
              (Ae(),
              F(C, 1, 1, () => {
                C = null;
              }),
              Se()),
          ((Oe = i[120]) == null ? void 0 : Oe.to)
            ? I
              ? I.p(i, x)
              : ((I = jl(i)), I.c(), I.m(a, null))
            : I && (I.d(1), (I = null)),
          i[4].show_received_timestamp
            ? N
              ? N.p(i, x)
              : ((N = Fl(i)), N.c(), N.m(s, null))
            : N && (N.d(1), (N = null)),
          (!_ || x[0] & 128) && d !== (d = i[120].snippet + "") && pe(m, d),
          b !== i[122] && (le(), (b = i[122]), oe()),
          x[0] & 128 && we(e, "active-draft", i[120].active);
      },
      i(L) {
        _ || (A(C), (_ = !0));
      },
      o(L) {
        F(C), (_ = !1);
      },
      d(L) {
        L && u(e), C && C.d(), I && I.d(), N && N.d(), le(), (O = !1), ot(P);
      },
    };
  }
  function cd(i) {
    let e;
    return {
      c() {
        e = J("Loading...");
      },
      m(t, n) {
        g(t, e, n);
      },
      p: k,
      i: k,
      o: k,
      d(t) {
        t && u(e);
      },
    };
  }
  function dd(i) {
    let e,
      t,
      n,
      r,
      a,
      l,
      s,
      o,
      c,
      d = i[16] && Zr(i);
    const m = [oc, ac],
      h = [];
    function b(_, O) {
      return _[4].thread || _[4].thread_id ? 0 : _[4].message ? 1 : -1;
    }
    return (
      ~(a = b(i)) && (l = h[a] = m[a](i)),
      {
        c() {
          (e = v("nylas-error")),
            (t = z()),
            d && d.c(),
            (n = z()),
            (r = v("main")),
            l && l.c(),
            (this.c = k),
            S(e, "id", i[0]),
            f(r, "class", "nylas-email"),
            f(r, "data-cy", "nylas-email"),
            f(r, "tabindex", "0");
        },
        m(_, O) {
          g(_, e, O),
            g(_, t, O),
            d && d.m(_, O),
            g(_, n, O),
            g(_, r, O),
            ~a && h[a].m(r, null),
            i[95](r),
            (s = !0),
            o ||
              ((c = [Y(r, "click", i[22]), Y(r, "keypress", i[24])]), (o = !0));
        },
        p(_, O) {
          (!s || O[0] & 1) && S(e, "id", _[0]),
            _[16]
              ? d
                ? d.p(_, O)
                : ((d = Zr(_)), d.c(), d.m(n.parentNode, n))
              : d && (d.d(1), (d = null));
          let P = a;
          (a = b(_)),
            a === P
              ? ~a && h[a].p(_, O)
              : (l &&
                  (Ae(),
                  F(h[P], 1, 1, () => {
                    h[P] = null;
                  }),
                  Se()),
                ~a
                  ? ((l = h[a]),
                    l ? l.p(_, O) : ((l = h[a] = m[a](_)), l.c()),
                    A(l, 1),
                    l.m(r, null))
                  : (l = null));
        },
        i(_) {
          s || (A(l), (s = !0));
        },
        o(_) {
          F(l), (s = !1);
        },
        d(_) {
          _ && u(e),
            _ && u(t),
            d && d.d(_),
            _ && u(n),
            _ && u(r),
            ~a && h[a].d(),
            i[95](null),
            (o = !1),
            ot(c);
        },
      }
    );
  }
  const st = 3,
    Ul = 2,
    Bl = 1,
    fd = 20;
  function Hl(i) {
    i.stopImmediatePropagation();
  }
  function Kt(i) {
    return (
      i.toLocaleDateString("en-US", {
        weekday: "short",
        month: "long",
        day: "numeric",
      }) +
      ", " +
      i.toLocaleTimeString("en-US", {
        hour12: !0,
        hour: "numeric",
        minute: "2-digit",
      })
    );
  }
  function rn(i, e) {
    var t, n;
    return (
      i &&
      e &&
      i.length > 1 &&
      e.length >= 2 &&
      ((t = i[0]) === null || t === void 0 ? void 0 : t.from.length) &&
      e[0].email !==
        ((n = i[i.length - 1]) === null || n === void 0
          ? void 0
          : n.from[0].email)
    );
  }
  function zl(i) {
    var e;
    return (
      i && ((e = i.drafts) === null || e === void 0 ? void 0 : e.length) > 0
    );
  }
  function Ti(i) {
    return i.reduce((e, t, n) => {
      const r =
        t.name && t.name !== t.email ? `${t.name} <${t.email}>` : t.email;
      return (
        n === 0
          ? (e += `to: ${r},
`)
          : t._type === "cc" && !e.includes("cc:")
          ? (e += `cc: ${r},
`)
          : t._type === "bcc" && !e.includes("bcc:")
          ? (e += `bcc: ${r},
`)
          : (e += `${r},
`),
        e
      );
    }, "");
  }
  function ud(i, e, t) {
    let n, r, a, l, s, o, c;
    Wt(i, vn, (p) => t(101, (l = p))),
      Wt(i, Do, (p) => t(76, (s = p))),
      Wt(i, nr, (p) => t(102, (o = p))),
      Wt(i, nn, (p) => t(77, (c = p)));
    var d =
        (this && this.__awaiter) ||
        function (p, T, V, ae) {
          function Ve(xe) {
            return xe instanceof V
              ? xe
              : new V(function ($e) {
                  $e(xe);
                });
          }
          return new (V || (V = Promise))(function (xe, $e) {
            function pi(mt) {
              try {
                ii(ae.next(mt));
              } catch (Lt) {
                $e(Lt);
              }
            }
            function ji(mt) {
              try {
                ii(ae.throw(mt));
              } catch (Lt) {
                $e(Lt);
              }
            }
            function ii(mt) {
              mt.done ? xe(mt.value) : Ve(mt.value).then(pi, ji);
            }
            ii((ae = ae.apply(p, T || [])).next());
          });
        },
      m,
      h,
      b,
      _,
      O,
      P,
      C,
      I,
      N,
      oe,
      le;
    const ee = Ui(Zt());
    let { id: Z = "" } = e,
      { access_token: X = "" } = e,
      { clean_conversation: L } = e,
      { click_action: x = "default" } = e,
      { message_id: Oe } = e,
      { message: Ne } = e,
      { show_contact_avatar: ye } = e,
      { show_expanded_email_view_onload: he } = e,
      { show_number_of_messages: de } = e,
      { show_received_timestamp: te } = e,
      { show_star: Le } = e,
      { show_thread_actions: U } = e,
      { theme: _e } = e,
      { thread_id: De } = e,
      { thread: ke } = e,
      { you: Me } = e,
      { show_reply: R } = e,
      { show_reply_all: Ee } = e,
      { show_forward: Xe } = e;
    const H = {
      clean_conversation: !1,
      click_action: "default",
      message_id: "",
      show_contact_avatar: !0,
      show_expanded_email_view_onload: !1,
      show_number_of_messages: !0,
      show_received_timestamp: !0,
      show_star: !1,
      show_thread_actions: !1,
      theme: "auto",
      thread_id: "",
      you: {},
      show_reply: !1,
      show_reply_all: !1,
      show_forward: !1,
    };
    let ge = {},
      M = wi({}, {}, H),
      ct,
      se = !1,
      qe = !1,
      Ze = !1;
    hn(() =>
      d(void 0, void 0, void 0, function* () {
        var p, T, V;
        if (
          (yield Nn(),
          t(66, (qe = !0)),
          t(
            65,
            (ge =
              (yield o[JSON.stringify({ component_id: Z, access_token: X })]) ||
              {}),
          ),
          t(67, (Ze = !0)),
          t(4, (M = wi(e, ge, H))),
          je(),
          Z && !((p = M.you) === null || p === void 0 ? void 0 : p.id) && !di)
        ) {
          t(
            4,
            (M.you = yield Vn({
              component_id: Ye.component_id,
              access_token: X,
            })),
            M,
          );
          const ae = { component_id: Z, access_token: X };
          ((T = M.you) === null || T === void 0
            ? void 0
            : T.organization_unit) === yi.Label
            ? t(70, (Je = yield pr.getLabels(ae)))
            : ((V = M.you) === null || V === void 0
                ? void 0
                : V.organization_unit) === yi.Folder &&
              t(71, (pt = yield mr.getFolders(ae)));
        }
      }),
    );
    let Pe = e;
    function je() {
      return d(this, void 0, void 0, function* () {
        const p = Pe.thread_id;
        t(68, (Pe = e)),
          t(
            4,
            (M.thread_id =
              !ke && !Oe && !Ne ? M.thread_id || ge.thread_id : ""),
            M,
          ),
          Z && !M.thread_id && !M.thread && M.message_id && mi(),
          (!j || p !== M.thread_id) && (yield ci());
      });
    }
    let Qe = {},
      Ut = {},
      G = !1;
    function q(p) {
      var T;
      return d(this, void 0, void 0, function* () {
        const V =
            ((T = p.messages) === null || T === void 0
              ? void 0
              : T.reduce((Ve, xe) => {
                  const $e = xe.from[0];
                  return (Ve[$e.email] = $e), Ve;
                }, {})) || {},
          ae = Array.from(Object.values(V)) || [];
        for (const Ve of ae) {
          const xe = Ve.email;
          !Qe[xe] && xe && t(5, (Qe[xe] = yield Ci(Ve)), Qe);
        }
      });
    }
    let ue,
      be = [],
      Je = [],
      pt = [],
      ft = [],
      Ye,
      Dt,
      j,
      si;
    function ci() {
      var p, T;
      return d(this, void 0, void 0, function* () {
        if (Z && M.thread_id) {
          si = lo({
            component_id: Z,
            thread_id: M.thread_id,
            access_token: X,
          }).catch(Yt);
          const V = yield si;
          if (
            ((si = null),
            ((p = V == null ? void 0 : V.messages) === null || p === void 0
              ? void 0
              : p.length) > 0)
          ) {
            const ae = V.messages.length - 1;
            V.messages[ae] = yield Ot(V.messages[ae].id);
          }
          V &&
            ((V.expanded =
              (T = j == null ? void 0 : j.expanded) !== null && T !== void 0
                ? T
                : M.show_expanded_email_view_onload),
            t(7, (j = V)),
            ee("threadLoaded", V));
        }
      });
    }
    let di;
    function Hi() {
      j
        ? Gn({
            access_token: X,
            component_id: Z,
            message_id: j.messages.slice(-fd).map((p) => p.id),
          }).then((p) => {
            p.forEach((T) => {
              let V = j.messages.find((ae) => ae.id === T.id);
              V && (V.conversation = T.conversation);
            }),
              t(7, j),
              t(4, M),
              t(76, s),
              t(73, Dt),
              t(59, P),
              t(3, ke),
              t(60, C),
              t(61, I),
              t(66, qe),
              t(67, Ze),
              t(103, d),
              t(68, Pe),
              t(119, e),
              t(65, ge),
              t(72, Ye),
              t(39, X),
              t(0, Z);
          })
        : M.message &&
          Gn({ component_id: Z, message_id: [M.message.id] }).then((p) => {
            p.forEach((T) => {
              M.message && t(4, (M.message.conversation = T.conversation), M);
            }),
              t(7, j),
              t(4, M),
              t(76, s),
              t(73, Dt),
              t(59, P),
              t(3, ke),
              t(60, C),
              t(61, I),
              t(66, qe),
              t(67, Ze),
              t(103, d),
              t(68, Pe),
              t(119, e),
              t(65, ge),
              t(72, Ye),
              t(39, X),
              t(0, Z);
          });
    }
    let yt;
    function Ci(p) {
      var T;
      return d(this, void 0, void 0, function* () {
        if ((t(12, (yt.query = `?email=${p.email}`), yt), Z)) {
          let V = l[JSON.stringify(yt)];
          return (
            V || (V = yield vn.addContact(yt)),
            (T = V[0]) !== null && T !== void 0 ? T : p
          );
        } else return p;
      });
    }
    function Rt() {
      return d(this, void 0, void 0, function* () {
        j && Ye.component_id && M.thread_id && (yield Hn(Ye, j).catch(Yt));
      });
    }
    let Xt = !1;
    function St(p) {
      return d(this, void 0, void 0, function* () {
        if (Xt) return;
        const T = Vt(j);
        if (!(j[T].length <= 0)) {
          if (
            ((Xt = !0),
            M.click_action === "default" || M.click_action === "mailbox")
          ) {
            if (
              (j &&
                M.click_action === "default" &&
                (j.unread && (t(7, (j.unread = !j.unread), j), yield Rt()),
                t(7, (j.expanded = !j.expanded), j)),
              !di && T !== xt.DRAFTS)
            ) {
              const { messages: V } = j,
                ae = V.length - 1;
              (V[ae].expanded = !V[ae].expanded),
                V[ae].body || (V[ae] = yield Ot(V[ae].id));
            }
          } else
            T !== xt.DRAFTS &&
              !j.expanded &&
              t(7, (j.expanded = !j.expanded), j);
          (Xt = !1),
            ee("threadClicked", { event: p, thread: j, messageType: T }),
            t(13, (D = ""));
        }
      });
    }
    function fi(p) {
      return d(this, void 0, void 0, function* () {
        if (j) {
          t(
            7,
            (j = Object.assign(Object.assign({}, j), { unread: !j.unread })),
          ),
            yield Rt(),
            ee("toggleThreadUnreadStatus", { event: p, thread: j });
          return;
        }
      });
    }
    function kt(p) {
      var T;
      return d(this, void 0, void 0, function* () {
        if (M.click_action !== "mailbox")
          if (r) {
            const V =
              ((T = j.labels) === null || T === void 0
                ? void 0
                : T.map((ae) => ae.id)) || [];
            t(7, (j.label_ids = [...V, r]), j), yield Rt();
          } else
            a &&
              (t(7, (j.folder_id = a), j),
              Ye.component_id &&
                M.thread_id &&
                j.messages.forEach((V, ae) =>
                  d(this, void 0, void 0, function* () {
                    yield bn(
                      Ye.component_id,
                      Object.assign(Object.assign({}, V), { folder_id: a }),
                      X,
                    );
                  }),
                ));
        ee("threadDeleted", { event: p, thread: j });
      });
    }
    function Ai(p) {
      (M.message && (!M.thread_id || !M.thread)) ||
        (M.click_action === "mailbox" && j.expanded) ||
        (p.preventDefault(), St(p));
    }
    function Qt(p) {
      ee("returnToMailbox", { event: p, thread: j });
    }
    function qt(p) {
      (M.message && (!M.thread_id || !M.thread)) ||
        (M.click_action === "mailbox" && j.expanded) ||
        (p.preventDefault(), p.code === "Enter" && St(p));
    }
    function zi(p) {
      return d(this, void 0, void 0, function* () {
        p.stopImmediatePropagation(),
          j &&
            (t(
              7,
              (j = Object.assign(Object.assign({}, j), {
                starred: !j.starred,
              })),
            ),
            yield Rt()),
          ee("threadStarred", { event: p, thread: j });
      });
    }
    function Bt(p, T, V) {
      var ae, Ve;
      return d(this, void 0, void 0, function* () {
        p.stopImmediatePropagation();
        const xe = { name: M.you.name, email: M.you.email_address },
          $e = [xe],
          { to: pi, cc: ji } = ls({ myEmail: xe.email, message: T, type: V }),
          ii = (
            (ae = T.subject) === null || ae === void 0
              ? void 0
              : ae.toLowerCase().startsWith("re:")
          )
            ? T.subject
            : `Re: ${T.subject}`,
          mt = {
            reply_to_message_id: T.id,
            from: $e,
            to: pi,
            reply_to: $e,
            cc: ji,
            bcc: T.bcc,
            body: T.body,
            subject: ii,
          };
        let Lt;
        switch (V) {
          case "reply":
            Lt = "replyClicked";
            break;
          case "reply_all":
            Lt = "replyAllClicked";
            break;
        }
        const gi =
          (Ve = j == null ? void 0 : j.drafts) === null || Ve === void 0
            ? void 0
            : Ve.find((Tt) => Tt.reply_to_message_id === T.id);
        if (gi) {
          if (!M.thread && gi.id) {
            const Tt = yield Ot(gi.id);
            (gi.body = Tt.body), (mt.body = Tt.body);
          }
          ee(Lt, {
            event: p,
            message: Object.assign({}, gi),
            thread: j,
            value: mt,
          });
        } else ee(Lt, { event: p, message: Object.assign({}, T), thread: j, value: mt });
      });
    }
    function Ht(p, T) {
      var V;
      return d(this, void 0, void 0, function* () {
        const ae =
            (V = j == null ? void 0 : j.drafts) === null || V === void 0
              ? void 0
              : V.find(($e) => $e.reply_to_message_id === T.id),
          Ve = `Fwd: ${T.subject}`,
          xe = { reply_to_message_id: T.id, subject: Ve, body: T.body };
        if (ae) {
          if (!M.thread && ae.id) {
            const $e = yield Ot(ae.id);
            (ae.body = $e.body), (xe.body = $e.body);
          }
          ee("forwardClicked", {
            event: p,
            message: Object.assign({}, ae),
            thread: j,
            value: xe,
          });
        } else ee("forwardClicked", { event: p, message: Object.assign({}, T), thread: j, value: xe });
      });
    }
    function Vi(p) {
      var T, V;
      return (
        ((T = p == null ? void 0 : p.to) === null || T === void 0
          ? void 0
          : T.length) +
          ((V = p == null ? void 0 : p.cc) === null || V === void 0
            ? void 0
            : V.length) >
          1 && !gr(M.you.email_address, p, "from")
      );
    }
    function ui(p, T) {
      p.stopImmediatePropagation(),
        T === j.messages.length - 1
          ? Hl(p)
          : (t(7, (j.messages[T].expanded = !j.messages[T].expanded), j),
            ee("messageClicked", {
              event: p,
              message: j.messages[T],
              thread: j,
            }),
            M.thread ||
              Ot(j.messages[T].id).then((V) => {
                t(7, (j.messages[T].body = V.body), j);
              }));
    }
    function gt(p, T) {
      p.stopImmediatePropagation(),
        p.code === "Enter" &&
          (T === j.messages.length - 1
            ? Hl(p)
            : t(7, (j.messages[T].expanded = !j.messages[T].expanded), j));
    }
    function Ot(p) {
      return Z
        ? zn(Ye, p).then((T) =>
            d(this, void 0, void 0, function* () {
              if (oi.hasInlineFiles(T)) {
                const V = yield At(T);
                return ee("messageLoaded", V), V;
              }
              return ee("messageLoaded", T), T;
            }),
          )
        : new Promise(() => null);
    }
    function mi() {
      oo({ access_token: X, component_id: Z, message_id: M.message_id }).then(
        (p) =>
          d(this, void 0, void 0, function* () {
            if ((t(4, (M.message = p), M), oi.hasInlineFiles(M.message))) {
              const T = yield At(M.message);
              t(4, (M.message = T), M);
            }
            ee("messageLoaded", M.message);
          }),
      );
    }
    function Si(p, T) {
      p.stopImmediatePropagation(), Li(p, T);
    }
    function Oi(p, T) {
      p.stopImmediatePropagation(), p.code === "Enter" && Li(p, T);
    }
    function Li(p, T) {
      var V;
      return d(this, void 0, void 0, function* () {
        if (T) {
          if (
            ((T.draft_id = T.id),
            (V = j == null ? void 0 : j.drafts) === null ||
              V === void 0 ||
              V.forEach((ae) => (ae.active = ae.id === T.id)),
            !M.thread && T.id)
          ) {
            const ae = yield Ot(T.id);
            T.body = ae.body;
          }
          ee("draftClicked", { event: p, message: T, thread: j });
        }
      });
    }
    const Mi = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    function E(p) {
      const T = new Date(new Date().setHours(0, 0, 0, 0)),
        V = new Date(
          T.getFullYear(),
          T.getMonth(),
          T.getDate() - 1,
          0,
          0,
          0,
          0,
        ),
        ae = new Date(
          T.getFullYear(),
          T.getMonth(),
          T.getDate() - 6,
          0,
          0,
          0,
          0,
        ),
        Ve = new Date(T.getFullYear(), 0, 1);
      return p >= T
        ? p.toLocaleTimeString("en-US", {
            hour12: !0,
            hour: "numeric",
            minute: "2-digit",
          })
        : p >= V
        ? "Yesterday"
        : p >= ae
        ? Mi[p.getDay()]
        : p >= Ve
        ? p.toLocaleDateString("en-US", { month: "long", day: "numeric" })
        : p.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          });
    }
    let D = "";
    function me(p) {
      t(13, (D = p.detail.tooltipID));
    }
    function $(p) {
      let T = [];
      const V = p.messages,
        ae = p.drafts;
      for (let Ve = V.length - 1; Ve >= 0 && T.length != 2; Ve--) {
        const xe = V[Ve].from;
        if (xe && xe.length > 0 && xe) {
          const $e = xe[0].email === ct ? "Me" : xe[0].name || xe[0].email;
          T.includes($e) || T.push($e);
        }
      }
      return ae.length && T.unshift("Draft"), T;
    }
    let Re = !1,
      Ce = {};
    function ze() {
      var p;
      const T = Vt(j);
      t(
        15,
        (Ce =
          (p = j[T]) === null || p === void 0
            ? void 0
            : p.reduce((V, ae) => {
                for (const [Ve, xe] of ae.files.entries())
                  Cr(xe) &&
                    (V[ae.id] || (V[ae.id] = []),
                    (V[ae.id] = [...V[ae.id], ae.files[Ve]]));
                return V;
              }, {})),
      );
    }
    function At(p) {
      var T;
      return d(this, void 0, void 0, function* () {
        const V = yield oi.getFilesForMessage(p, {
          component_id: Z,
          access_token: X,
        });
        for (const ae of Object.values(V))
          p.body &&
            (p.body =
              (T = p.body) === null || T === void 0
                ? void 0
                : T.replaceAll(
                    `src="cid:${ae.content_id}"`,
                    `src="data:${ae.content_type};base64,${ae.data}"`,
                  ));
        return p;
      });
    }
    function Pt(p, T) {
      return d(this, void 0, void 0, function* () {
        if (
          (p.stopImmediatePropagation(),
          Z && ((j && M.thread_id) || M.message_id))
        ) {
          const V = yield yn({
            file_id: T.id,
            component_id: Z,
            access_token: X,
          });
          sr(V, T);
        }
        ee("downloadClicked", { event: p, thread: j, file: T });
      });
    }
    function zt(p) {
      return d(this, void 0, void 0, function* () {
        const T = p.detail.file;
        Pt(p, T);
      });
    }
    let ut = null,
      Et = !1;
    function Vt(p) {
      return p[xt.DRAFTS].length && !p[xt.MESSAGES].length
        ? xt.DRAFTS
        : xt.MESSAGES;
    }
    function Gi({ to: p, cc: T, bcc: V }) {
      return Promise.resolve([
        ...kn(p, { _type: "to" }),
        ...kn(T, { _type: "cc" }),
        ...kn(V, { _type: "bcc" }),
      ]);
    }
    let hi;
    const $t = () => t(9, (se = !0)),
      Ni = () => t(9, (se = !0)),
      Di = (p) => kt(p),
      ln = (p, T) => Bt(T, p, "reply"),
      Wi = (p, T) => Bt(T, p, "reply_all"),
      _i = (p, T) => Ht(T, p),
      ei = (p, T) => ee("fileClicked", { event: T, file: p });
    function ti(p, T) {
      xi[p ? "unshift" : "push"](() => {
        (be[T] = p), t(6, be);
      });
    }
    const an = (p, T) => ui(T, p),
      on = (p, T) => gt(T, p);
    function sn(p, T) {
      xi[p ? "unshift" : "push"](() => {
        (be[T] = p), t(6, be);
      });
    }
    const Zi = (p, T) => Si(T, p),
      cn = (p, T) => Oi(T, p),
      Ji = (p, T) => Pt(T, p),
      Yi = (p) => Bt(p, M.message, "reply"),
      It = (p) => Bt(p, M.message, "reply_all"),
      Pi = (p) => Ht(p, Ne);
    function Ki(p) {
      xi[p ? "unshift" : "push"](() => {
        (ue = p), t(11, ue);
      });
    }
    return (
      (i.$$set = (p) => {
        t(119, (e = ie(ie({}, e), ve(p)))),
          "id" in p && t(0, (Z = p.id)),
          "access_token" in p && t(39, (X = p.access_token)),
          "clean_conversation" in p && t(40, (L = p.clean_conversation)),
          "click_action" in p && t(1, (x = p.click_action)),
          "message_id" in p && t(41, (Oe = p.message_id)),
          "message" in p && t(2, (Ne = p.message)),
          "show_contact_avatar" in p && t(42, (ye = p.show_contact_avatar)),
          "show_expanded_email_view_onload" in p &&
            t(43, (he = p.show_expanded_email_view_onload)),
          "show_number_of_messages" in p &&
            t(44, (de = p.show_number_of_messages)),
          "show_received_timestamp" in p &&
            t(45, (te = p.show_received_timestamp)),
          "show_star" in p && t(46, (Le = p.show_star)),
          "show_thread_actions" in p && t(47, (U = p.show_thread_actions)),
          "theme" in p && t(48, (_e = p.theme)),
          "thread_id" in p && t(49, (De = p.thread_id)),
          "thread" in p && t(3, (ke = p.thread)),
          "you" in p && t(50, (Me = p.you)),
          "show_reply" in p && t(51, (R = p.show_reply)),
          "show_reply_all" in p && t(52, (Ee = p.show_reply_all)),
          "show_forward" in p && t(53, (Xe = p.show_forward));
      }),
      (i.$$.update = () => {
        if (
          (i.$$.dirty[2] & 8 && ee("manifestLoaded", ge),
          i.$$.dirty[2] & 32768 && Object.keys(c).length && ee("onError", c),
          qe &&
            Ze &&
            (() =>
              d(void 0, void 0, void 0, function* () {
                JSON.stringify(Pe) !== JSON.stringify(e) &&
                  (t(4, (M = wi(e, ge, H))), yield je());
              }))(),
          (i.$$.dirty[0] & 16) | (i.$$.dirty[1] & 8388608) &&
            t(
              8,
              (ct =
                t(54, (m = M.you)) === null || m === void 0
                  ? void 0
                  : m.email_address),
            ),
          (i.$$.dirty[0] & 17) | (i.$$.dirty[1] & 256) &&
            t(
              72,
              (Ye = {
                access_token: X,
                component_id: Z,
                thread_id: M.thread_id,
              }),
            ),
          i.$$.dirty[2] & 1024 && t(73, (Dt = JSON.stringify(Ye))),
          (i.$$.dirty[0] & 24) |
            (i.$$.dirty[1] & 1879048192) |
            (i.$$.dirty[2] & 18432) &&
            M.thread &&
            M.thread.id)
        ) {
          const p =
            t(
              60,
              (C =
                t(59, (P = s[Dt])) === null || P === void 0
                  ? void 0
                  : P.find((T) => T && T.id === (ke == null ? void 0 : ke.id))),
            ) !== null && C !== void 0
              ? C
              : M.thread;
          if (M.show_expanded_email_view_onload) {
            p.expanded = M.show_expanded_email_view_onload;
            const T = p.messages[p.messages.length - 1];
            T.body =
              t(61, (I = T.body)) !== null && I !== void 0 ? I : T.snippet;
          }
          t(7, (j = p));
        }
        (i.$$.dirty[0] & 184) | (i.$$.dirty[2] & 128) &&
          (() =>
            d(void 0, void 0, void 0, function* () {
              if (G || !Qe) {
                if ((t(69, (G = !1)), ke && ke.messages)) yield q(ke);
                else if (j) yield q(j);
                else if (M.message) {
                  const p = M.message.from[0];
                  t(5, (Qe[p.email] = yield Ci(p)), Qe);
                }
              }
            }))(),
          (i.$$.dirty[0] & 160) | (i.$$.dirty[1] & 16777216) &&
            t(
              10,
              (Ut =
                j && Qe
                  ? Qe[
                      t(55, (h = j.messages[j.messages.length - 1])) === null ||
                      h === void 0
                        ? void 0
                        : h.from[0].email
                    ]
                  : {}),
            ),
          (i.$$.dirty[0] & 48) | (i.$$.dirty[1] & 33554432) &&
            t(
              17,
              (n =
                M.message && Qe
                  ? Qe[
                      t(56, (b = M.message)) === null || b === void 0
                        ? void 0
                        : b.from[0].email
                    ]
                  : {}),
            ),
          i.$$.dirty[0] & 16 && (M.thread_id, t(69, (G = !0))),
          (i.$$.dirty[1] & 67108864) | (i.$$.dirty[2] & 256) &&
            (r =
              Je && Je.length
                ? t(57, (_ = Je.find((p) => p.name === "trash"))) === null ||
                  _ === void 0
                  ? void 0
                  : _.id
                : null),
          (i.$$.dirty[1] & 134217728) | (i.$$.dirty[2] & 512) &&
            (a =
              pt && pt.length
                ? t(58, (O = pt.find((p) => p.name === "trash"))) === null ||
                  O === void 0
                  ? void 0
                  : O.id
                : null),
          i.$$.dirty[0] & 128 && t(18, (ft = j ? j.participants : [])),
          i.$$.dirty[0] & 16 && (di = !!M.thread),
          i.$$.dirty[0] & 16 &&
            M.clean_conversation &&
            (M.thread_id || M.message_id) &&
            Hi(),
          (i.$$.dirty[0] & 1) | (i.$$.dirty[1] & 256) &&
            t(12, (yt = { component_id: Z, access_token: X, query: "" })),
          (i.$$.dirty[0] & 128) | (i.$$.dirty[2] & 3) &&
            t(
              14,
              (Re =
                !(t(62, (N = j == null ? void 0 : j.messages)) === null ||
                N === void 0
                  ? void 0
                  : N.length) &&
                !(t(63, (oe = j == null ? void 0 : j.drafts)) === null ||
                oe === void 0
                  ? void 0
                  : oe.length)),
            ),
          i.$$.dirty[0] & 128 && j && ze(),
          (i.$$.dirty[0] & 192) | (i.$$.dirty[2] & 4) &&
            t(
              74,
              (ut =
                be[
                  (t(64, (le = j == null ? void 0 : j.messages)) === null ||
                  le === void 0
                    ? void 0
                    : le.length) - 1
                ]),
            ),
          i.$$.dirty[2] & 12288 &&
            ut &&
            !Et &&
            ut.offsetTop > window.innerHeight &&
            (ut.scrollIntoView({ behavior: "smooth", block: "end" }),
            t(75, (Et = !0))),
          i.$$.dirty[0] & 16 &&
            M.theme &&
            (M.theme.startsWith(".") || M.theme.startsWith("http")
              ? t(16, (hi = M.theme))
              : M.theme &&
                t(
                  16,
                  (hi = `https://unpkg.com/@nylas/components-email@${lc.version}/themes/${M.theme}.css`),
                ));
      }),
      (e = ve(e)),
      [
        Z,
        x,
        Ne,
        ke,
        M,
        Qe,
        be,
        j,
        ct,
        se,
        Ut,
        ue,
        yt,
        D,
        Re,
        Ce,
        hi,
        n,
        ft,
        ee,
        fi,
        kt,
        Ai,
        Qt,
        qt,
        zi,
        Bt,
        Ht,
        Vi,
        ui,
        gt,
        Si,
        Oi,
        E,
        me,
        $,
        Pt,
        zt,
        Gi,
        X,
        L,
        Oe,
        ye,
        he,
        de,
        te,
        Le,
        U,
        _e,
        De,
        Me,
        R,
        Ee,
        Xe,
        m,
        h,
        b,
        _,
        O,
        P,
        C,
        I,
        N,
        oe,
        le,
        ge,
        qe,
        Ze,
        Pe,
        G,
        Je,
        pt,
        Ye,
        Dt,
        ut,
        Et,
        s,
        c,
        $t,
        Ni,
        Di,
        ln,
        Wi,
        _i,
        ei,
        ti,
        an,
        on,
        sn,
        Zi,
        cn,
        Ji,
        Yi,
        It,
        Pi,
        Ki,
      ]
    );
  }
  class md extends Jt {
    constructor(e) {
      super();
      (this.shadowRoot.innerHTML =
        '<style>@charset "UTF-8";*{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;list-style:none}.sr-only{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}main{--black:#161717;--grey-dark:#636671;--grey:#bdc0cb;--grey-lighter:#dfe1e8;--grey-dark-warm:#9fa4b5;--grey-lightest:#f7f7f8;--grey-background:#f0f1f5;--white:#ffffff;--blue:#314fa9;--blue-lighter:#f0f3ff;--red:#ee3248;--red-lighter:#ffeef0;--fs-12:0.75rem;--fs-14:0.875rem;--fs-16:1rem;--black-90:#2c2e2e;--grey-light:#f7f7f8;--grey-warm:#cbcbcb}main{height:100%;width:100%;position:relative;display:grid;font-family:var(--nylas-email-font-family, -apple-system, BlinkMacSystemFont, sans-serif)}main .email-row{background:var(--nylas-email-background, var(--grey-lightest));border:1px solid var(--nylas-email-border-style, var(--grey-lighter))}main .email-row nylas-tooltip{position:relative}main .email-row .default-avatar{background:var(--nylas-default-avatar-background, var(--blue));border-radius:50%;color:var(--nylas-default-avatar-color, var(--white));font-family:sans-serif;font-size:1rem;font-weight:bold;height:32px;line-height:35px;text-align:center;text-transform:uppercase;width:32px}main .email-row .default-avatar.deleted{background:var(--red)}main .email-row .default-avatar.draft{background:var(--nylas-email-snippet-color, var(--grey-dark))}main .email-row header{font-size:1.2rem;font-weight:700;padding:0.5rem;padding-bottom:0}main .email-row div.starred{position:relative;display:flex;justify-content:center;align-items:center}main .email-row div.starred button{background-color:transparent;cursor:pointer}main .email-row div.starred button:before{content:"\u2605";display:inline-block;font-size:1.1em;color:var(--nylas-email-star-button-inactive-color, #8d94a5);-webkit-user-select:none;-moz-user-select:none;user-select:none}main .email-row div.starred button.starred:before{color:var(--nylas-email-star-button-active-color, #ffc107)}main .email-row div.starred button:hover:before{color:var(--nylas-email-star-button-hover-color, #ffc107)}main .email-row.expanded{background:var(--nylas-email-body-background, var(--white));padding:0;border:1px solid var(--nylas-email-border-style-expanded, var(--grey-lighter));border-radius:4px}main .email-row.expanded .email-loader{height:3rem;display:flex;align-items:center;justify-content:center}main .email-row.expanded .email-loader .spinner{height:18px;animation:rotate 2s linear infinite;margin-right:10px}@keyframes rotate{to{transform:rotate(360deg)}}main .email-row.expanded .subject-header{outline:1px solid var(--grey-lighter);display:flex;align-items:center;padding:24px 16px;gap:8px;border-radius:4px 4px 0 0;font-weight:bold;display:flex;justify-content:space-between;color:var(--nylas-email-subject-color, black);background:var(--nylas-email-header-background, white)}main .email-row.expanded .subject-header.mailbox{cursor:default}main .email-row.expanded .subject-header>div{display:flex;align-items:center;gap:1rem}main .email-row.expanded .subject-header>div button{display:flex;background:none;border:none;outline:0;width:32px;height:32px;border-radius:6px;justify-content:center;align-items:center;cursor:pointer}main .email-row.expanded .subject-header>div button:hover{background:var(--nylas-email-button-hover-background, var(--grey-lighter))}main .email-row.expanded .subject-header>div button *{width:1em;height:1em;fill:var(--nylas-email-subject-color, var(--grey-dark));stroke:var(--nylas-email-subject-color, var(--grey-dark))}main .email-row.expanded .subject-header [role=toolbar]{outline:none}main .email-row.expanded .subject-header [role=toolbar] button *{width:1em;height:1em}main .email-row.expanded [role=toolbar]{outline:1px solid var(--grey-lighter);display:flex;align-items:center;padding:24px 16px;gap:8px;padding:0.7rem 1rem;gap:1rem}main .email-row.expanded [role=toolbar] button{background:none;cursor:pointer;display:flex}main .email-row.expanded [role=toolbar] button *{width:1em;height:1em;stroke:var(--nylas-email-body-color, var(--grey-dark))}main .email-row.expanded .message-head [role=toolbar]{outline:none}main .email-row.expanded .message-head [role=toolbar] button{background:none;outline:none;cursor:pointer}main .email-row.expanded .icon-container,main .email-row.expanded .icon-container>*{pointer-events:none}main .email-row.expanded.expanded-mailbox-thread .message-from .name{font-weight:600}main .email-row.expanded div.individual-message{box-sizing:border-box;padding:0.5rem}main .email-row.expanded div.individual-message div.message-body{overflow:auto;display:inline-flex;flex-direction:column;width:100%;color:var(--nylas-email-body-color, black)}main .email-row.expanded div.individual-message div.message-body div.attachment{overflow-x:auto}main .email-row.expanded div.individual-message div.message-body div.attachment button{margin:0.5rem;height:fit-content;padding:0.3rem 1rem;border:1px solid var(--nylas-email-attachment-border-style, var(--grey));border-radius:30px;color:var(--nylas-email-attachment-button-color, inherit);background:var(--nylas-email-attachment-button-bg, white);cursor:pointer}main .email-row.expanded div.individual-message div.message-body div.attachment button:hover{background:var(--nylas-email-attachment-button-hover-bg, var(--grey-light))}main .email-row.expanded div.individual-message.condensed div.snippet{text-overflow:ellipsis;overflow:hidden;display:block;max-width:inherit;color:var(--nylas-email-snippet-color, var(--grey-dark));margin-top:0.5rem}main .email-row.expanded div.individual-message.condensed div.message-head .avatar-info{display:flex;align-items:center;gap:0.7rem}main .email-row.expanded div.individual-message.condensed div.message-head .avatar-info .draft-to{color:var(--nylas-email-snippet-color, var(--grey-dark))}main .email-row.expanded div.individual-message:not(:last-of-type){border-bottom:1px solid var(--nylas-email-border-style-expanded, var(--grey-lighter))}main .email-row.expanded div.individual-message:not(.last-message).expanded div.message-head:hover{cursor:n-resize}main .email-row.expanded div.individual-message.last-message .message-head:hover,main .email-row.expanded div.individual-message.last-message .message-body:hover{cursor:default}main .email-row.expanded div.individual-message.active-draft{border:1px solid var(--nylas-email-snippet-color, var(--grey-dark))}main .email-row.expanded div.individual-message div.message-head{display:flex;justify-content:space-between;align-items:baseline;gap:0.5rem}main .email-row.expanded div.individual-message div.message-date{display:flex;color:var(--nylas-email-message-date-color, var(--grey));font-size:12px}main .email-row.expanded div.individual-message div.message-from{display:flex;align-items:center;color:var(--nylas-email-message-from-color, black)}main .email-row.expanded div.individual-message div.message-from span.name{font-weight:600;margin-right:0.5rem}main .email-row.expanded.expanded div.message-head.draft{flex-flow:column}main .email-row.expanded.expanded div.message-head div.message-from-to{margin:0.5rem 0}main .email-row.expanded.expanded div.message-head div.message-from-to .avatar-info{display:flex;align-items:center;gap:0.7rem}main .email-row.expanded.expanded div.message-head div.message-from-to div.message-to{color:var(--nylas-email-message-to-color, var(--grey));max-width:150px;margin-left:calc(32px + 0.7rem)}main .email-row.expanded.expanded div.message-head div.message-from-to div.message-to div{display:grid;grid-template-columns:1fr 16px}main .email-row.expanded.expanded div.message-head div.message-from-to div.message-to div span{text-overflow:ellipsis;overflow:hidden}main .email-row.expanded.expanded.condensed{gap:1rem}main .email-row.expanded.expanded.condensed:hover,main .email-row.expanded.expanded.condensed:focus{cursor:s-resize;outline:none}main .email-row.expanded.expanded.condensed span.snippet{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--nylas-email-snippet-color, var(--grey-dark))}main .email-row:hover{cursor:pointer}main .email-row .from-message-count{align-items:center;display:grid;grid-template-columns:repeat(2, auto);grid-gap:1rem;justify-content:flex-start;max-width:350px;color:var(--nylas-email-participant-color, var(--grey-dark))}main .email-row .from-message-count .from-participants{display:grid;grid-template-columns:1fr fit-content(60px)}main .email-row .from-message-count .from-participants .participants-name{overflow:hidden;white-space:nowrap;position:relative;text-overflow:ellipsis;display:flex}main .email-row .from-message-count .from-participants .participants-name .from-sub-section.deleted-email{color:var(--nylas-email-snippet-color, var(--grey-dark))}main .email-row .from-message-count .from-participants .participants-name .from-sub-section.second{display:none}main .email-row .from-message-count .from-participants .participants-name .from-sub-section.participant-label{text-overflow:ellipsis;overflow:hidden}main .email-row .from-message-count .from-participants .participants-name .from-sub-section.draft-label{color:var(--nylas-email-draft-label-color, #dd4b39);overflow:visible}main .email-row .from-message-count .from-participants .participants-count .show-on-mobile{display:inline-block}main .email-row .from-message-count .from-participants .participants-count .show-on-desktop{display:none}main .email-row .subject-snippet-attachment{padding:0.5rem;padding-top:0.4rem;overflow:hidden}main .email-row .subject-snippet-attachment .subject-snippet{display:flex;flex-direction:column;gap:0.5rem;color:var(--nylas-email-snippet-color, var(--grey-dark))}main .email-row .subject-snippet-attachment .subject-snippet .subject{color:var(--nylas-email-subject-color, var(--black));white-space:nowrap;overflow:hidden;text-overflow:ellipsis}main .email-row .subject-snippet-attachment .subject-snippet .snippet{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}main .email-row .subject-snippet-attachment .subject-snippet .snippet.deleted{color:var(--nylas-email-snippet-color, var(--grey-dark))}main .email-row .subject-snippet-attachment .attachment{margin-top:0.5rem;gap:1rem;display:flex;overflow-x:auto}main .email-row .subject-snippet-attachment .attachment button{padding:0.3rem 1rem;border:1px solid var(--nylas-email-attachment-border-style, var(--grey));border-radius:30px;color:var(--nylas-email-attachment-button-color, inherit);background:var(--nylas-email-attachment-button-bg, white);cursor:pointer}main .email-row .subject-snippet-attachment .attachment button:hover{background:var(--nylas-email-attachment-button-hover-bg, var(--grey-light))}main .email-row .subject-snippet-attachment div{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--nylas-email-snippet-color, var(--grey-dark))}main .email-row .subject-snippet-attachment div span.subject{color:var(--nylas-email-subject-color, var(--black))}main .email-row .subject-snippet-attachment div.date{display:flex;justify-content:flex-end;gap:0.5rem;width:100%;font-size:14px;color:var(--nylas-email-message-date-color, var(--grey))}main .email-row .date{display:flex;justify-content:flex-end;align-items:center;width:100%;gap:1rem}main .email-row .date>:last-child{padding-right:1rem}main .email-row .date button,main .email-row .date span{background:none;cursor:pointer;display:flex}main .email-row .date button *,main .email-row .date span *{width:1em;height:1em;fill:var(--nylas-email-action-icons-color, var(--grey-dark))}main .email-row.condensed{height:fit-content;padding:0.5rem;flex-wrap:wrap;overflow:hidden;flex-wrap:wrap;display:grid;gap:0.5rem;align-items:flex-start;grid-template-areas:"a a a a b c" "d d d d d d"}main .email-row.condensed .from-star{grid-area:a}main .email-row.condensed .thread-message-count{grid-area:b}main .email-row.condensed .subject-snippet-attachment{grid-area:d}main .email-row.condensed .date{grid-area:c}@media(min-width: 640px){main .email-row.condensed{display:grid;column-gap:1rem;grid-template-areas:unset;grid-template-columns:minmax(250px, 18%) 6% auto 130px}main .email-row.condensed .from-star{grid-area:unset}main .email-row.condensed .thread-message-count{grid-area:unset;min-height:2rem;display:flex;align-items:center;justify-content:center}main .email-row.condensed .subject-snippet-attachment{grid-area:unset}main .email-row.condensed .date{grid-area:unset;min-height:2rem;display:flex;align-items:center}}main .email-row.condensed.disable-click{cursor:not-allowed;display:grid;align-items:flex-start;background:var(--grey-lighter)}main .email-row.condensed .from-star{display:grid;grid-template-columns:25px auto;column-gap:0.5rem}main .email-row.condensed .thread-message-count{color:var(--nylas-email-thread-message-count-color, var(--black));font-size:12px;text-align:left}main .email-row.condensed .date{text-align:right}main .email-row.condensed.unread{background:var(--nylas-email-unread-background, white)}main .email-row.condensed.unread .from-message-count,main .email-row.condensed.unread .date,main .email-row.condensed.unread .subject{font-weight:600;color:var(--nylas-email-unread-subject-color, var(--black))}main .email-row.condensed.unread .thread-message-count{color:var(--nylas-email-unread-thread-message-count-color, var(--blue))}main .email-row.expanded.singular:hover{box-shadow:none;cursor:default}main .email-row.expanded.singular div.individual-message:not(.last-message).expanded .message-head:hover,main .email-row.expanded.singular div.individual-message:not(.last-message).expanded .message-body:hover{cursor:default}@media(min-width: 640px){main .email-row .from-message-count{max-width:350px}main .email-row .from-message-count .from-participants .participants-name{overflow:hidden;white-space:nowrap;position:relative}main .email-row .from-message-count .from-participants .participants-name .from-sub-section.second{display:inline-block}main .email-row .from-message-count .from-participants .participants-count .show-on-mobile{display:none}main .email-row .from-message-count .from-participants .participants-count .show-on-desktop{display:inline-block}main .email-row.expanded.singular .individual-message.expanded{padding-top:0.5rem}main .email-row.condensed{padding:0.5rem;justify-content:initial}main .email-row.condensed div.starred button:hover:before{color:var(--nylas-email-star-button-hover-color, #ffc107)}main .email-row.condensed .date{text-align:right;padding-right:0.5rem;display:flex;justify-content:flex-end;gap:0.5rem;font-size:14px;color:var(--nylas-email-message-date-color, var(--grey))}main .email-row.condensed .thread-message-count{text-align:center}main .email-row.expanded{display:flex;flex-direction:column;box-sizing:border-box;width:100%;overflow-x:hidden}main .email-row.expanded header{padding:1rem 2.5rem}main .email-row.expanded div.individual-message{display:flex;flex-direction:column;align-items:center;padding:1rem 0;width:inherit}main .email-row.expanded div.individual-message div.message-head,main .email-row.expanded div.individual-message div.message-body{width:100%;box-sizing:border-box;padding:0 2.5rem}main .email-row.expanded div.individual-message div.message-body{display:flex;flex-direction:column}main .email-row.expanded div.individual-message.condensed div.snippet{width:100%;box-sizing:border-box;padding:0 2.5rem;white-space:pre-wrap;max-width:95vw;align-self:flex-start}main .email-row.expanded div.individual-message.condensed div.message-head.draft{flex-flow:row}main .email-row.expanded div.individual-message div.message-date{font-size:14px;align-self:center}main .email-row.expanded div.individual-message.expanded div.message-head div.message-from-to{margin:0.5rem 0}main .email-row.expanded div.individual-message.expanded div.message-head div.message-from-to div.message-to{max-width:inherit;overflow:inherit}main .email-row.expanded div.individual-message.expanded div.message-head div.message-from-to div.message-to div{display:grid;grid-template-columns:1fr 16px;align-items:center}main .email-row.expanded div.individual-message.expanded div.message-head div.message-from-to div.message-to div span{text-overflow:ellipsis;overflow:hidden}main .email-row .subject-snippet-attachment .subject-snippet{display:grid;grid-template-columns:auto 1fr;gap:1rem}}</style>'),
        We(
          this,
          {
            target: this.shadowRoot,
            props: ni(this.attributes),
            customElement: !0,
          },
          ud,
          dd,
          Ue,
          {
            id: 0,
            access_token: 39,
            clean_conversation: 40,
            click_action: 1,
            message_id: 41,
            message: 2,
            show_contact_avatar: 42,
            show_expanded_email_view_onload: 43,
            show_number_of_messages: 44,
            show_received_timestamp: 45,
            show_star: 46,
            show_thread_actions: 47,
            theme: 48,
            thread_id: 49,
            thread: 3,
            you: 50,
            show_reply: 51,
            show_reply_all: 52,
            show_forward: 53,
          },
          null,
          [-1, -1, -1, -1, -1],
        ),
        e &&
          (e.target && g(e.target, this, e.anchor),
          e.props && (this.$set(e.props), re()));
    }
    static get observedAttributes() {
      return [
        "id",
        "access_token",
        "clean_conversation",
        "click_action",
        "message_id",
        "message",
        "show_contact_avatar",
        "show_expanded_email_view_onload",
        "show_number_of_messages",
        "show_received_timestamp",
        "show_star",
        "show_thread_actions",
        "theme",
        "thread_id",
        "thread",
        "you",
        "show_reply",
        "show_reply_all",
        "show_forward",
      ];
    }
    get id() {
      return this.$$.ctx[0];
    }
    set id(e) {
      this.$$set({ id: e }), re();
    }
    get access_token() {
      return this.$$.ctx[39];
    }
    set access_token(e) {
      this.$$set({ access_token: e }), re();
    }
    get clean_conversation() {
      return this.$$.ctx[40];
    }
    set clean_conversation(e) {
      this.$$set({ clean_conversation: e }), re();
    }
    get click_action() {
      return this.$$.ctx[1];
    }
    set click_action(e) {
      this.$$set({ click_action: e }), re();
    }
    get message_id() {
      return this.$$.ctx[41];
    }
    set message_id(e) {
      this.$$set({ message_id: e }), re();
    }
    get message() {
      return this.$$.ctx[2];
    }
    set message(e) {
      this.$$set({ message: e }), re();
    }
    get show_contact_avatar() {
      return this.$$.ctx[42];
    }
    set show_contact_avatar(e) {
      this.$$set({ show_contact_avatar: e }), re();
    }
    get show_expanded_email_view_onload() {
      return this.$$.ctx[43];
    }
    set show_expanded_email_view_onload(e) {
      this.$$set({ show_expanded_email_view_onload: e }), re();
    }
    get show_number_of_messages() {
      return this.$$.ctx[44];
    }
    set show_number_of_messages(e) {
      this.$$set({ show_number_of_messages: e }), re();
    }
    get show_received_timestamp() {
      return this.$$.ctx[45];
    }
    set show_received_timestamp(e) {
      this.$$set({ show_received_timestamp: e }), re();
    }
    get show_star() {
      return this.$$.ctx[46];
    }
    set show_star(e) {
      this.$$set({ show_star: e }), re();
    }
    get show_thread_actions() {
      return this.$$.ctx[47];
    }
    set show_thread_actions(e) {
      this.$$set({ show_thread_actions: e }), re();
    }
    get theme() {
      return this.$$.ctx[48];
    }
    set theme(e) {
      this.$$set({ theme: e }), re();
    }
    get thread_id() {
      return this.$$.ctx[49];
    }
    set thread_id(e) {
      this.$$set({ thread_id: e }), re();
    }
    get thread() {
      return this.$$.ctx[3];
    }
    set thread(e) {
      this.$$set({ thread: e }), re();
    }
    get you() {
      return this.$$.ctx[50];
    }
    set you(e) {
      this.$$set({ you: e }), re();
    }
    get show_reply() {
      return this.$$.ctx[51];
    }
    set show_reply(e) {
      this.$$set({ show_reply: e }), re();
    }
    get show_reply_all() {
      return this.$$.ctx[52];
    }
    set show_reply_all(e) {
      this.$$set({ show_reply_all: e }), re();
    }
    get show_forward() {
      return this.$$.ctx[53];
    }
    set show_forward(e) {
      this.$$set({ show_forward: e }), re();
    }
  }
  customElements.define("nylas-email", md);
  function hd(i) {
    let e,
      t,
      n = [
        { width: "12" },
        { height: "13" },
        { viewBox: "0 0 12 13" },
        { fill: "none" },
        { xmlns: "http://www.w3.org/2000/svg" },
        i[0],
      ],
      r = {};
    for (let a = 0; a < n.length; a += 1) r = ie(r, n[a]);
    return {
      c() {
        (e = W("svg")), (t = W("path")), this.h();
      },
      l(a) {
        e = Q(a, "svg", {
          width: !0,
          height: !0,
          viewBox: !0,
          fill: !0,
          xmlns: !0,
        });
        var l = K(e);
        (t = Q(l, "path", { d: !0 })), K(t).forEach(u), l.forEach(u), this.h();
      },
      h() {
        f(
          t,
          "d",
          "M4.125 5.5625H7.875C8.0625 5.5625 8.25 5.39844 8.25 5.1875V4.8125C8.25 4.625 8.0625 4.4375 7.875 4.4375H4.125C3.91406 4.4375 3.75 4.625 3.75 4.8125V5.1875C3.75 5.39844 3.91406 5.5625 4.125 5.5625ZM3.75 7.4375C3.75 7.64844 3.91406 7.8125 4.125 7.8125H7.875C8.0625 7.8125 8.25 7.64844 8.25 7.4375V7.0625C8.25 6.875 8.0625 6.6875 7.875 6.6875H4.125C3.91406 6.6875 3.75 6.875 3.75 7.0625V7.4375ZM6 10.2969C5.60156 10.2969 5.22656 10.1797 4.89844 9.92188L0 6.38281V11.375C0 12.0078 0.492188 12.5 1.125 12.5H10.875C11.4844 12.5 12 12.0078 12 11.375V6.38281L7.07812 9.92188C6.75 10.1797 6.375 10.2969 6 10.2969ZM11.5547 4.32031C11.3438 4.17969 11.1562 4.01562 10.875 3.80469V2.75C10.875 2.14062 10.3594 1.625 9.75 1.625H7.92188C7.85156 1.57812 7.78125 1.53125 7.71094 1.48438C7.3125 1.20312 6.53906 0.5 6 0.5C5.4375 0.5 4.66406 1.20312 4.26562 1.48438C4.19531 1.53125 4.125 1.57812 4.05469 1.625H2.25C1.61719 1.625 1.125 2.14062 1.125 2.75V3.80469C0.820312 4.01562 0.632812 4.17969 0.421875 4.32031C0.164062 4.53125 0 4.85938 0 5.21094V5.46875L2.25 7.08594V2.75H9.75V7.08594L12 5.46875V5.21094C12 4.85938 11.8359 4.55469 11.5547 4.32031Z",
        ),
          Te(e, r);
      },
      m(a, l) {
        et(a, e, l), fe(e, t);
      },
      p(a, [l]) {
        Te(
          e,
          (r = tt(n, [
            { width: "12" },
            { height: "13" },
            { viewBox: "0 0 12 13" },
            { fill: "none" },
            { xmlns: "http://www.w3.org/2000/svg" },
            l & 1 && a[0],
          ])),
        );
      },
      i: k,
      o: k,
      d(a) {
        a && u(e);
      },
    };
  }
  function _d(i, e, t) {
    return (
      (i.$$set = (n) => {
        t(0, (e = ie(ie({}, e), ve(n))));
      }),
      (e = ve(e)),
      [e]
    );
  }
  class pd extends it {
    constructor(e) {
      super();
      We(this, e, _d, hd, Ue, {});
    }
  }
  function gd(i) {
    let e,
      t,
      n = [
        { width: "12" },
        { height: "9" },
        { viewBox: "0 0 12 9" },
        { fill: "none" },
        { xmlns: "http://www.w3.org/2000/svg" },
        i[0],
      ],
      r = {};
    for (let a = 0; a < n.length; a += 1) r = ie(r, n[a]);
    return {
      c() {
        (e = W("svg")), (t = W("path")), this.h();
      },
      l(a) {
        e = Q(a, "svg", {
          width: !0,
          height: !0,
          viewBox: !0,
          fill: !0,
          xmlns: !0,
        });
        var l = K(e);
        (t = Q(l, "path", { d: !0 })), K(t).forEach(u), l.forEach(u), this.h();
      },
      h() {
        f(
          t,
          "d",
          "M11.7656 2.97656C11.2266 3.39844 10.5469 3.91406 8.15625 5.64844C7.6875 6 6.82031 6.77344 6 6.77344C5.15625 6.77344 4.3125 6 3.82031 5.64844C1.42969 3.91406 0.75 3.39844 0.210938 2.97656C0.117188 2.90625 0 2.97656 0 3.09375V7.875C0 8.50781 0.492188 9 1.125 9H10.875C11.4844 9 12 8.50781 12 7.875V3.09375C12 2.97656 11.8594 2.90625 11.7656 2.97656ZM6 6C6.53906 6.02344 7.3125 5.32031 7.71094 5.03906C10.8281 2.78906 11.0625 2.57812 11.7656 2.01562C11.9062 1.92188 12 1.75781 12 1.57031V1.125C12 0.515625 11.4844 0 10.875 0H1.125C0.492188 0 0 0.515625 0 1.125V1.57031C0 1.75781 0.0703125 1.92188 0.210938 2.01562C0.914062 2.57812 1.14844 2.78906 4.26562 5.03906C4.66406 5.32031 5.4375 6.02344 6 6Z",
        ),
          Te(e, r);
      },
      m(a, l) {
        et(a, e, l), fe(e, t);
      },
      p(a, [l]) {
        Te(
          e,
          (r = tt(n, [
            { width: "12" },
            { height: "9" },
            { viewBox: "0 0 12 9" },
            { fill: "none" },
            { xmlns: "http://www.w3.org/2000/svg" },
            l & 1 && a[0],
          ])),
        );
      },
      i: k,
      o: k,
      d(a) {
        a && u(e);
      },
    };
  }
  function bd(i, e, t) {
    return (
      (i.$$set = (n) => {
        t(0, (e = ie(ie({}, e), ve(n))));
      }),
      (e = ve(e)),
      [e]
    );
  }
  class vd extends it {
    constructor(e) {
      super();
      We(this, e, bd, gd, Ue, {});
    }
  }
  function wd(i) {
    let e,
      t,
      n,
      r,
      a,
      l,
      s,
      o,
      c,
      d,
      m,
      h = [
        { id: "Capa_1" },
        { "enable-background": "new 0 0 497 497" },
        { height: "512" },
        { viewBox: "0 0 497 497" },
        { width: "512" },
        { xmlns: "http://www.w3.org/2000/svg" },
        i[0],
      ],
      b = {};
    for (let _ = 0; _ < h.length; _ += 1) b = ie(b, h[_]);
    return {
      c() {
        (e = W("svg")),
          (t = W("g")),
          (n = W("circle")),
          (r = W("circle")),
          (a = W("circle")),
          (l = W("ellipse")),
          (s = W("ellipse")),
          (o = W("ellipse")),
          (c = W("ellipse")),
          (d = W("ellipse")),
          (m = W("circle")),
          this.h();
      },
      l(_) {
        e = Q(_, "svg", {
          id: !0,
          "enable-background": !0,
          height: !0,
          viewBox: !0,
          width: !0,
          xmlns: !0,
        });
        var O = K(e);
        t = Q(O, "g", {});
        var P = K(t);
        (n = Q(P, "circle", { cx: !0, cy: !0, fill: !0, r: !0 })),
          K(n).forEach(u),
          (r = Q(P, "circle", { cx: !0, cy: !0, fill: !0, r: !0 })),
          K(r).forEach(u),
          (a = Q(P, "circle", { cx: !0, cy: !0, fill: !0, r: !0 })),
          K(a).forEach(u),
          (l = Q(P, "ellipse", { cx: !0, cy: !0, fill: !0, rx: !0, ry: !0 })),
          K(l).forEach(u),
          (s = Q(P, "ellipse", { cx: !0, cy: !0, fill: !0, rx: !0, ry: !0 })),
          K(s).forEach(u),
          (o = Q(P, "ellipse", { cx: !0, cy: !0, fill: !0, rx: !0, ry: !0 })),
          K(o).forEach(u),
          (c = Q(P, "ellipse", { cx: !0, cy: !0, fill: !0, rx: !0, ry: !0 })),
          K(c).forEach(u),
          (d = Q(P, "ellipse", { cx: !0, cy: !0, fill: !0, rx: !0, ry: !0 })),
          K(d).forEach(u),
          (m = Q(P, "circle", { cx: !0, cy: !0, fill: !0, r: !0 })),
          K(m).forEach(u),
          P.forEach(u),
          O.forEach(u),
          this.h();
      },
      h() {
        f(n, "cx", "98"),
          f(n, "cy", "376"),
          f(n, "fill", "#909ba6"),
          f(n, "r", "53"),
          f(r, "cx", "439"),
          f(r, "cy", "336"),
          f(r, "fill", "#c8d2dc"),
          f(r, "r", "46"),
          f(a, "cx", "397"),
          f(a, "cy", "112"),
          f(a, "fill", "#e9edf1"),
          f(a, "r", "38"),
          f(l, "cx", "56.245"),
          f(l, "cy", "244.754"),
          f(l, "fill", "#7e8b96"),
          f(l, "rx", "56.245"),
          f(l, "ry", "54.874"),
          f(s, "cx", "217.821"),
          f(s, "cy", "447.175"),
          f(s, "fill", "#a2abb8"),
          f(s, "rx", "51.132"),
          f(s, "ry", "49.825"),
          f(o, "cx", "349.229"),
          f(o, "cy", "427.873"),
          f(o, "fill", "#b9c3cd"),
          f(o, "rx", "48.575"),
          f(o, "ry", "47.297"),
          f(c, "cx", "117.092"),
          f(c, "cy", "114.794"),
          f(c, "fill", "#5f6c75"),
          f(c, "rx", "58.801"),
          f(c, "ry", "57.397"),
          f(d, "cx", "453.538"),
          f(d, "cy", "216.477"),
          f(d, "fill", "#dce6eb"),
          f(d, "rx", "43.462"),
          f(d, "ry", "42.656"),
          f(m, "cx", "263"),
          f(m, "cy", "62"),
          f(m, "fill", "#4e5a61"),
          f(m, "r", "62"),
          Te(e, b);
      },
      m(_, O) {
        et(_, e, O),
          fe(e, t),
          fe(t, n),
          fe(t, r),
          fe(t, a),
          fe(t, l),
          fe(t, s),
          fe(t, o),
          fe(t, c),
          fe(t, d),
          fe(t, m);
      },
      p(_, [O]) {
        Te(
          e,
          (b = tt(h, [
            { id: "Capa_1" },
            { "enable-background": "new 0 0 497 497" },
            { height: "512" },
            { viewBox: "0 0 497 497" },
            { width: "512" },
            { xmlns: "http://www.w3.org/2000/svg" },
            O & 1 && _[0],
          ])),
        );
      },
      i: k,
      o: k,
      d(_) {
        _ && u(e);
      },
    };
  }
  function yd(i, e, t) {
    return (
      (i.$$set = (n) => {
        t(0, (e = ie(ie({}, e), ve(n))));
      }),
      (e = ve(e)),
      [e]
    );
  }
  class kd extends it {
    constructor(e) {
      super();
      We(this, e, yd, wd, Ue, {});
    }
  }
  function Ed(i) {
    let e,
      t,
      n = [
        { width: "11" },
        { height: "13" },
        { viewBox: "0 0 11 13" },
        { fill: "#8d94a5" },
        { xmlns: "http://www.w3.org/2000/svg" },
        i[0],
      ],
      r = {};
    for (let a = 0; a < n.length; a += 1) r = ie(r, n[a]);
    return {
      c() {
        (e = W("svg")), (t = W("path")), this.h();
      },
      l(a) {
        e = Q(a, "svg", {
          width: !0,
          height: !0,
          viewBox: !0,
          fill: !0,
          xmlns: !0,
        });
        var l = K(e);
        (t = Q(l, "path", { d: !0 })), K(t).forEach(u), l.forEach(u), this.h();
      },
      h() {
        f(
          t,
          "d",
          "M0.75 11.375C0.75 12.0078 1.24219 12.5 1.875 12.5H8.625C9.23438 12.5 9.75 12.0078 9.75 11.375V3.5H0.75V11.375ZM7.125 5.375C7.125 5.1875 7.28906 5 7.5 5C7.6875 5 7.875 5.1875 7.875 5.375V10.625C7.875 10.8359 7.6875 11 7.5 11C7.28906 11 7.125 10.8359 7.125 10.625V5.375ZM4.875 5.375C4.875 5.1875 5.03906 5 5.25 5C5.4375 5 5.625 5.1875 5.625 5.375V10.625C5.625 10.8359 5.4375 11 5.25 11C5.03906 11 4.875 10.8359 4.875 10.625V5.375ZM2.625 5.375C2.625 5.1875 2.78906 5 3 5C3.1875 5 3.375 5.1875 3.375 5.375V10.625C3.375 10.8359 3.1875 11 3 11C2.78906 11 2.625 10.8359 2.625 10.625V5.375ZM10.125 1.25H7.3125L7.07812 0.828125C6.98438 0.640625 6.79688 0.5 6.58594 0.5H3.89062C3.67969 0.5 3.49219 0.640625 3.39844 0.828125L3.1875 1.25H0.375C0.164062 1.25 0 1.4375 0 1.625V2.375C0 2.58594 0.164062 2.75 0.375 2.75H10.125C10.3125 2.75 10.5 2.58594 10.5 2.375V1.625C10.5 1.4375 10.3125 1.25 10.125 1.25Z",
        ),
          Te(e, r);
      },
      m(a, l) {
        et(a, e, l), fe(e, t);
      },
      p(a, [l]) {
        Te(
          e,
          (r = tt(n, [
            { width: "11" },
            { height: "13" },
            { viewBox: "0 0 11 13" },
            { fill: "#8d94a5" },
            { xmlns: "http://www.w3.org/2000/svg" },
            l & 1 && a[0],
          ])),
        );
      },
      i: k,
      o: k,
      d(a) {
        a && u(e);
      },
    };
  }
  function Td(i, e, t) {
    return (
      (i.$$set = (n) => {
        t(0, (e = ie(ie({}, e), ve(n))));
      }),
      (e = ve(e)),
      [e]
    );
  }
  class Cd extends it {
    constructor(e) {
      super();
      We(this, e, Td, Ed, Ue, {});
    }
  }
  function Ad(i) {
    let e,
      t,
      n,
      r = [
        { width: "29" },
        { height: "24" },
        { viewBox: "0 0 29 24" },
        { fill: "none" },
        { xmlns: "http://www.w3.org/2000/svg" },
        i[0],
      ],
      a = {};
    for (let l = 0; l < r.length; l += 1) a = ie(a, r[l]);
    return {
      c() {
        (e = W("svg")), (t = W("path")), (n = W("path")), this.h();
      },
      l(l) {
        e = Q(l, "svg", {
          width: !0,
          height: !0,
          viewBox: !0,
          fill: !0,
          xmlns: !0,
        });
        var s = K(e);
        (t = Q(s, "path", {
          d: !0,
          stroke: !0,
          "stroke-width": !0,
          "stroke-miterlimit": !0,
        })),
          K(t).forEach(u),
          (n = Q(s, "path", {
            d: !0,
            stroke: !0,
            "stroke-width": !0,
            "stroke-miterlimit": !0,
          })),
          K(n).forEach(u),
          s.forEach(u),
          this.h();
      },
      h() {
        f(t, "d", "M14 16L9.77612 12.0014L14 8"),
          f(t, "stroke", "#6A7285"),
          f(t, "stroke-width", "1.5"),
          f(t, "stroke-miterlimit", "10"),
          f(n, "d", "M19 16L14.7761 12.0014L19 8"),
          f(n, "stroke", "#6A7285"),
          f(n, "stroke-width", "1.5"),
          f(n, "stroke-miterlimit", "10"),
          Te(e, a);
      },
      m(l, s) {
        et(l, e, s), fe(e, t), fe(e, n);
      },
      p(l, [s]) {
        Te(
          e,
          (a = tt(r, [
            { width: "29" },
            { height: "24" },
            { viewBox: "0 0 29 24" },
            { fill: "none" },
            { xmlns: "http://www.w3.org/2000/svg" },
            s & 1 && l[0],
          ])),
        );
      },
      i: k,
      o: k,
      d(l) {
        l && u(e);
      },
    };
  }
  function Sd(i, e, t) {
    return (
      (i.$$set = (n) => {
        t(0, (e = ie(ie({}, e), ve(n))));
      }),
      (e = ve(e)),
      [e]
    );
  }
  class Od extends it {
    constructor(e) {
      super();
      We(this, e, Sd, Ad, Ue, {});
    }
  }
  function Ld(i) {
    let e,
      t,
      n = [
        { width: "24" },
        { height: "24" },
        { viewBox: "0 0 24 24" },
        { fill: "none" },
        { xmlns: "http://www.w3.org/2000/svg" },
        i[0],
      ],
      r = {};
    for (let a = 0; a < n.length; a += 1) r = ie(r, n[a]);
    return {
      c() {
        (e = W("svg")), (t = W("path")), this.h();
      },
      l(a) {
        e = Q(a, "svg", {
          width: !0,
          height: !0,
          viewBox: !0,
          fill: !0,
          xmlns: !0,
        });
        var l = K(e);
        (t = Q(l, "path", {
          d: !0,
          stroke: !0,
          "stroke-width": !0,
          "stroke-miterlimit": !0,
        })),
          K(t).forEach(u),
          l.forEach(u),
          this.h();
      },
      h() {
        f(t, "d", "M14 16L9.77612 12.0014L14 8"),
          f(t, "stroke", "#6A7285"),
          f(t, "stroke-width", "1.5"),
          f(t, "stroke-miterlimit", "10"),
          Te(e, r);
      },
      m(a, l) {
        et(a, e, l), fe(e, t);
      },
      p(a, [l]) {
        Te(
          e,
          (r = tt(n, [
            { width: "24" },
            { height: "24" },
            { viewBox: "0 0 24 24" },
            { fill: "none" },
            { xmlns: "http://www.w3.org/2000/svg" },
            l & 1 && a[0],
          ])),
        );
      },
      i: k,
      o: k,
      d(a) {
        a && u(e);
      },
    };
  }
  function Md(i, e, t) {
    return (
      (i.$$set = (n) => {
        t(0, (e = ie(ie({}, e), ve(n))));
      }),
      (e = ve(e)),
      [e]
    );
  }
  class Nd extends it {
    constructor(e) {
      super();
      We(this, e, Md, Ld, Ue, {});
    }
  }
  function Dd(i) {
    let e,
      t,
      n = [
        { width: "24" },
        { height: "24" },
        { viewBox: "0 0 24 24" },
        { fill: "none" },
        { xmlns: "http://www.w3.org/2000/svg" },
        i[0],
      ],
      r = {};
    for (let a = 0; a < n.length; a += 1) r = ie(r, n[a]);
    return {
      c() {
        (e = W("svg")), (t = W("path")), this.h();
      },
      l(a) {
        e = Q(a, "svg", {
          width: !0,
          height: !0,
          viewBox: !0,
          fill: !0,
          xmlns: !0,
        });
        var l = K(e);
        (t = Q(l, "path", {
          d: !0,
          stroke: !0,
          "stroke-width": !0,
          "stroke-miterlimit": !0,
        })),
          K(t).forEach(u),
          l.forEach(u),
          this.h();
      },
      h() {
        f(t, "d", "M10 8L14.2239 11.9986L10 16"),
          f(t, "stroke", "#6A7285"),
          f(t, "stroke-width", "1.5"),
          f(t, "stroke-miterlimit", "10"),
          Te(e, r);
      },
      m(a, l) {
        et(a, e, l), fe(e, t);
      },
      p(a, [l]) {
        Te(
          e,
          (r = tt(n, [
            { width: "24" },
            { height: "24" },
            { viewBox: "0 0 24 24" },
            { fill: "none" },
            { xmlns: "http://www.w3.org/2000/svg" },
            l & 1 && a[0],
          ])),
        );
      },
      i: k,
      o: k,
      d(a) {
        a && u(e);
      },
    };
  }
  function Pd(i, e, t) {
    return (
      (i.$$set = (n) => {
        t(0, (e = ie(ie({}, e), ve(n))));
      }),
      (e = ve(e)),
      [e]
    );
  }
  class jd extends it {
    constructor(e) {
      super();
      We(this, e, Pd, Dd, Ue, {});
    }
  }
  function Rd(i) {
    let e,
      t,
      n,
      r = [
        { width: "29" },
        { height: "24" },
        { viewBox: "0 0 29 24" },
        { fill: "none" },
        { xmlns: "http://www.w3.org/2000/svg" },
        i[0],
      ],
      a = {};
    for (let l = 0; l < r.length; l += 1) a = ie(a, r[l]);
    return {
      c() {
        (e = W("svg")), (t = W("path")), (n = W("path")), this.h();
      },
      l(l) {
        e = Q(l, "svg", {
          width: !0,
          height: !0,
          viewBox: !0,
          fill: !0,
          xmlns: !0,
        });
        var s = K(e);
        (t = Q(s, "path", {
          d: !0,
          stroke: !0,
          "stroke-width": !0,
          "stroke-miterlimit": !0,
        })),
          K(t).forEach(u),
          (n = Q(s, "path", {
            d: !0,
            stroke: !0,
            "stroke-width": !0,
            "stroke-miterlimit": !0,
          })),
          K(n).forEach(u),
          s.forEach(u),
          this.h();
      },
      h() {
        f(t, "d", "M15 8L19.2239 11.9986L15 16"),
          f(t, "stroke", "#6A7285"),
          f(t, "stroke-width", "1.5"),
          f(t, "stroke-miterlimit", "10"),
          f(n, "d", "M10 8L14.2239 11.9986L10 16"),
          f(n, "stroke", "#6A7285"),
          f(n, "stroke-width", "1.5"),
          f(n, "stroke-miterlimit", "10"),
          Te(e, a);
      },
      m(l, s) {
        et(l, e, s), fe(e, t), fe(e, n);
      },
      p(l, [s]) {
        Te(
          e,
          (a = tt(r, [
            { width: "29" },
            { height: "24" },
            { viewBox: "0 0 29 24" },
            { fill: "none" },
            { xmlns: "http://www.w3.org/2000/svg" },
            s & 1 && l[0],
          ])),
        );
      },
      i: k,
      o: k,
      d(l) {
        l && u(e);
      },
    };
  }
  function Id(i, e, t) {
    return (
      (i.$$set = (n) => {
        t(0, (e = ie(ie({}, e), ve(n))));
      }),
      (e = ve(e)),
      [e]
    );
  }
  class Fd extends it {
    constructor(e) {
      super();
      We(this, e, Id, Rd, Ue, {});
    }
  }
  function Vl(i) {
    let e,
      t,
      n = i[0] * i[1] + 1 + "",
      r,
      a,
      l,
      s = Math.min((i[0] + 1) * i[1], i[3]) + "",
      o,
      c,
      d,
      m;
    return {
      c() {
        (e = v("span")),
          (t = v("span")),
          (r = J(n)),
          (a = J(`
      -
      `)),
          (l = v("span")),
          (o = J(s)),
          (c = J(`
      of
      `)),
          (d = v("span")),
          (m = J(i[3])),
          f(t, "class", "page-start"),
          f(l, "class", "page-end"),
          f(d, "class", "total"),
          f(e, "class", "page-indicator");
      },
      m(h, b) {
        g(h, e, b),
          y(e, t),
          y(t, r),
          y(e, a),
          y(e, l),
          y(l, o),
          y(e, c),
          y(e, d),
          y(d, m);
      },
      p(h, b) {
        b & 3 && n !== (n = h[0] * h[1] + 1 + "") && pe(r, n),
          b & 11 &&
            s !== (s = Math.min((h[0] + 1) * h[1], h[3]) + "") &&
            pe(o, s),
          b & 8 && pe(m, h[3]);
      },
      d(h) {
        h && u(e);
      },
    };
  }
  function Gl(i) {
    let e, t, n, r, a, l, s, o, c, d, m, h, b, _, O, P, C, I;
    return (
      (t = new Od({ props: { style: "width: 24px; height: 24px;" } })),
      (l = new Nd({ props: { style: "width: 24px; height: 24px;" } })),
      (d = new jd({ props: { style: "height:24px;width:24px;" } })),
      (_ = new Fd({ props: { style: "height:24px;width:24px;" } })),
      {
        c() {
          (e = v("button")),
            He(t.$$.fragment),
            (r = z()),
            (a = v("button")),
            He(l.$$.fragment),
            (o = z()),
            (c = v("button")),
            He(d.$$.fragment),
            (h = z()),
            (b = v("button")),
            He(_.$$.fragment),
            f(e, "class", "paginate-btn first-btn"),
            (e.disabled = n = i[0] === 0),
            f(a, "class", "paginate-btn back-btn"),
            (a.disabled = s = i[0] === 0),
            f(c, "class", "paginate-btn next-btn"),
            (c.disabled = m = i[0] === i[2] - 1),
            f(b, "class", "paginate-btn last-btn"),
            (b.disabled = O = i[0] === i[2] - 1);
        },
        m(N, oe) {
          g(N, e, oe),
            Fe(t, e, null),
            g(N, r, oe),
            g(N, a, oe),
            Fe(l, a, null),
            g(N, o, oe),
            g(N, c, oe),
            Fe(d, c, null),
            g(N, h, oe),
            g(N, b, oe),
            Fe(_, b, null),
            (P = !0),
            C ||
              ((I = [
                Y(e, "click", i[6]),
                Y(a, "click", i[7]),
                Y(c, "click", i[8]),
                Y(b, "click", i[9]),
              ]),
              (C = !0));
        },
        p(N, oe) {
          (!P || (oe & 1 && n !== (n = N[0] === 0))) && (e.disabled = n),
            (!P || (oe & 1 && s !== (s = N[0] === 0))) && (a.disabled = s),
            (!P || (oe & 5 && m !== (m = N[0] === N[2] - 1))) &&
              (c.disabled = m),
            (!P || (oe & 5 && O !== (O = N[0] === N[2] - 1))) &&
              (b.disabled = O);
        },
        i(N) {
          P ||
            (A(t.$$.fragment, N),
            A(l.$$.fragment, N),
            A(d.$$.fragment, N),
            A(_.$$.fragment, N),
            (P = !0));
        },
        o(N) {
          F(t.$$.fragment, N),
            F(l.$$.fragment, N),
            F(d.$$.fragment, N),
            F(_.$$.fragment, N),
            (P = !1);
        },
        d(N) {
          N && u(e),
            Ie(t),
            N && u(r),
            N && u(a),
            Ie(l),
            N && u(o),
            N && u(c),
            Ie(d),
            N && u(h),
            N && u(b),
            Ie(_),
            (C = !1),
            ot(I);
        },
      }
    );
  }
  function xd(i) {
    let e,
      t,
      n,
      r = i[4] && Vl(i),
      a = i[2] > 1 && Gl(i);
    return {
      c() {
        (e = v("nav")),
          r && r.c(),
          (t = z()),
          a && a.c(),
          (this.c = k),
          f(e, "class", "pagination-nav");
      },
      m(l, s) {
        g(l, e, s), r && r.m(e, null), y(e, t), a && a.m(e, null), (n = !0);
      },
      p(l, [s]) {
        l[4]
          ? r
            ? r.p(l, s)
            : ((r = Vl(l)), r.c(), r.m(e, t))
          : r && (r.d(1), (r = null)),
          l[2] > 1
            ? a
              ? (a.p(l, s), s & 4 && A(a, 1))
              : ((a = Gl(l)), a.c(), A(a, 1), a.m(e, null))
            : a &&
              (Ae(),
              F(a, 1, 1, () => {
                a = null;
              }),
              Se());
      },
      i(l) {
        n || (A(a), (n = !0));
      },
      o(l) {
        F(a), (n = !1);
      },
      d(l) {
        l && u(e), r && r.d(), a && a.d();
      },
    };
  }
  function Ud(i, e, t) {
    let { current_page: n = 0 } = e,
      { items_per_page: r } = e,
      { num_pages: a = 1 } = e,
      { num_items: l } = e,
      { num_pages_visible: s = !0 } = e;
    const o = Ui(Zt());
    function c(_) {
      o("changePage", { newPage: _ });
    }
    const d = () => c(0),
      m = () => c(n - 1),
      h = () => c(n + 1),
      b = () => c(a - 1);
    return (
      (i.$$set = (_) => {
        "current_page" in _ && t(0, (n = _.current_page)),
          "items_per_page" in _ && t(1, (r = _.items_per_page)),
          "num_pages" in _ && t(2, (a = _.num_pages)),
          "num_items" in _ && t(3, (l = _.num_items)),
          "num_pages_visible" in _ && t(4, (s = _.num_pages_visible));
      }),
      [n, r, a, l, s, c, d, m, h, b]
    );
  }
  class Bd extends Jt {
    constructor(e) {
      super();
      (this.shadowRoot.innerHTML =
        "<style>.pagination-nav{--disabled-text:#454954;--font:-apple-system, BlinkMacSystemFont, sans-serif;display:flex;align-items:center}.pagination-nav .page-indicator{color:var(--nylas-mailbox-pagination-indicator-color, #454954);height:38px;margin:2em 1em 0 1em}.pagination-nav .paginate-btn{display:flex;justify-content:center;align-items:center;margin-top:1em;text-align:center;min-width:38px;min-height:38px;margin-right:-1px;font-family:var(--font);cursor:pointer;border:1px solid var(--nylas-mailbox-pagination-button-border-color, #e3e8ee);background-color:var(--nylas-mailbox-pagination-button-background, #f7f7f8);color:var(--nylas-mailbox-pagination-button-color, #454954)}.pagination-nav .paginate-btn *{stroke:var(--nylas-mailbox-pagination-button-color, #454954)}.pagination-nav .paginate-btn:hover{background-color:var(--nylas-mailbox-pagination-button-hover-color, #eaeaea)}.pagination-nav .paginate-btn:disabled{cursor:default;background-color:var(--nylas-mailbox-pagination-button-background-disabled, #f7f7f8);border:1px solid var(--nylas-mailbox-pagination-button-background-disabled, #f7f7f8)}</style>"),
        We(
          this,
          {
            target: this.shadowRoot,
            props: ni(this.attributes),
            customElement: !0,
          },
          Ud,
          xd,
          Ue,
          {
            current_page: 0,
            items_per_page: 1,
            num_pages: 2,
            num_items: 3,
            num_pages_visible: 4,
          },
          null,
        ),
        e &&
          (e.target && g(e.target, this, e.anchor),
          e.props && (this.$set(e.props), re()));
    }
    static get observedAttributes() {
      return [
        "current_page",
        "items_per_page",
        "num_pages",
        "num_items",
        "num_pages_visible",
      ];
    }
    get current_page() {
      return this.$$.ctx[0];
    }
    set current_page(e) {
      this.$$set({ current_page: e }), re();
    }
    get items_per_page() {
      return this.$$.ctx[1];
    }
    set items_per_page(e) {
      this.$$set({ items_per_page: e }), re();
    }
    get num_pages() {
      return this.$$.ctx[2];
    }
    set num_pages(e) {
      this.$$set({ num_pages: e }), re();
    }
    get num_items() {
      return this.$$.ctx[3];
    }
    set num_items(e) {
      this.$$set({ num_items: e }), re();
    }
    get num_pages_visible() {
      return this.$$.ctx[4];
    }
    set num_pages_visible(e) {
      this.$$set({ num_pages_visible: e }), re();
    }
  }
  customElements.define("pagination-nav", Bd);
  var Hd = "@nylas/components-mailbox",
    zd = "1.1.6",
    Vd = {
      type: "git",
      url: "github:nylas/components.git",
      directory: "components/mailbox",
    },
    Gd = {
      build: "rollup -c",
      dev: "rollup -c -w",
      tscheck: "tsc && svelte-check",
      start: "echo 'Nothing to start'",
    },
    Wd = "index.js",
    Zd = "cca94159c114ecff613f41caa0a4468e0f698e2c",
    Jd = { dompurify: "^2.3.3" },
    Yd = { "@types/dompurify": "^2.3.1" },
    Kd = {
      name: Hd,
      version: zd,
      repository: Vd,
      scripts: Gd,
      main: Wd,
      gitHead: Zd,
      dependencies: Jd,
      devDependencies: Yd,
    };
  function Wl(i, e, t) {
    const n = i.slice();
    return (n[88] = e[t]), n;
  }
  function Zl(i, e, t) {
    const n = i.slice();
    return (n[91] = e[t]), n;
  }
  function Jl(i, e, t) {
    const n = i.slice();
    return (n[94] = e[t]), n;
  }
  function Yl(i, e, t) {
    const n = i.slice();
    return (n[97] = e[t]), n;
  }
  function Kl(i) {
    let e, t, n;
    return {
      c() {
        (e = v("link")), f(e, "rel", "stylesheet"), f(e, "href", i[16]);
      },
      m(r, a) {
        g(r, e, a),
          t || ((n = [Y(e, "load", i[60]), Y(e, "error", i[61])]), (t = !0));
      },
      p(r, a) {
        a[0] & 65536 && f(e, "href", r[16]);
      },
      d(r) {
        r && u(e), (t = !1), ot(n);
      },
    };
  }
  function Xd(i) {
    let e, t, n, r, a;
    return (
      (t = new kd({
        props: {
          class: "spinner",
          style:
            "height:18px; animation: rotate 2s linear infinite; margin:10px;",
        },
      })),
      {
        c() {
          (e = v("div")),
            He(t.$$.fragment),
            (n = z()),
            (r = v("p")),
            (r.textContent = "Loading..."),
            f(e, "class", "mailbox-loader");
        },
        m(l, s) {
          g(l, e, s), Fe(t, e, null), y(e, n), y(e, r), (a = !0);
        },
        p: k,
        i(l) {
          a || (A(t.$$.fragment, l), (a = !0));
        },
        o(l) {
          F(t.$$.fragment, l), (a = !1);
        },
        d(l) {
          l && u(e), Ie(t);
        },
      }
    );
  }
  function Qd(i) {
    let e, t, n, r;
    const a = [$d, qd],
      l = [];
    function s(o, c) {
      return o[7] ? 0 : 1;
    }
    return (
      (e = s(i)),
      (t = l[e] = a[e](i)),
      {
        c() {
          t.c(), (n = Be());
        },
        m(o, c) {
          l[e].m(o, c), g(o, n, c), (r = !0);
        },
        p(o, c) {
          let d = e;
          (e = s(o)),
            e === d
              ? l[e].p(o, c)
              : (Ae(),
                F(l[d], 1, 1, () => {
                  l[d] = null;
                }),
                Se(),
                (t = l[e]),
                t ? t.p(o, c) : ((t = l[e] = a[e](o)), t.c()),
                A(t, 1),
                t.m(n.parentNode, n));
        },
        i(o) {
          r || (A(t), (r = !0));
        },
        o(o) {
          F(t), (r = !1);
        },
        d(o) {
          l[e].d(o), o && u(n);
        },
      }
    );
  }
  function qd(i) {
    let e,
      t,
      n,
      r,
      a,
      l = i[1].header && Xl(i),
      s = i[1].show_thread_checkbox && i[1].actions_bar.length && Ql(i),
      o = i[5],
      c = [];
    for (let h = 0; h < o.length; h += 1) c[h] = ca(Wl(i, o, h));
    let d = null;
    o.length || (d = la(i));
    let m = i[5] && i[5].length > 0 && da(i);
    return {
      c() {
        l && l.c(), (e = z()), s && s.c(), (t = z()), (n = v("ul"));
        for (let h = 0; h < c.length; h += 1) c[h].c();
        d && d.c(),
          (r = z()),
          m && m.c(),
          f(n, "id", "mailboxlist"),
          we(n, "refreshing", i[14]),
          we(n, "deleting", i[15]);
      },
      m(h, b) {
        l && l.m(h, b), g(h, e, b), s && s.m(h, b), g(h, t, b), g(h, n, b);
        for (let _ = 0; _ < c.length; _ += 1) c[_].m(n, null);
        d && d.m(n, null), y(n, r), m && m.m(n, null), (a = !0);
      },
      p(h, b) {
        if (
          (h[1].header
            ? l
              ? l.p(h, b)
              : ((l = Xl(h)), l.c(), l.m(e.parentNode, e))
            : l && (l.d(1), (l = null)),
          h[1].show_thread_checkbox && h[1].actions_bar.length
            ? s
              ? (s.p(h, b), b[0] & 2 && A(s, 1))
              : ((s = Ql(h)), s.c(), A(s, 1), s.m(t.parentNode, t))
            : s &&
              (Ae(),
              F(s, 1, 1, () => {
                s = null;
              }),
              Se()),
          b[0] & 1789854755)
        ) {
          o = h[5];
          let _;
          for (_ = 0; _ < o.length; _ += 1) {
            const O = Wl(h, o, _);
            c[_] ? c[_].p(O, b) : ((c[_] = ca(O)), c[_].c(), c[_].m(n, r));
          }
          for (; _ < c.length; _ += 1) c[_].d(1);
          (c.length = o.length),
            !o.length && d
              ? d.p(h, b)
              : o.length
              ? d && (d.d(1), (d = null))
              : ((d = la(h)), d.c(), d.m(n, r));
        }
        h[5] && h[5].length > 0
          ? m
            ? m.p(h, b)
            : ((m = da(h)), m.c(), m.m(n, null))
          : m && (m.d(1), (m = null)),
          b[0] & 16384 && we(n, "refreshing", h[14]),
          b[0] & 32768 && we(n, "deleting", h[15]);
      },
      i(h) {
        a || (A(s), (a = !0));
      },
      o(h) {
        F(s), (a = !1);
      },
      d(h) {
        l && l.d(h),
          h && u(e),
          s && s.d(h),
          h && u(t),
          h && u(n),
          bt(c, h),
          d && d.d(),
          m && m.d();
      },
    };
  }
  function $d(i) {
    let e, t, n, r, a, l, s, o;
    return {
      c() {
        (e = v("div")),
          (t = v("nylas-email")),
          S(t, "clean_conversation", !1),
          S(t, "thread", i[7]),
          S(t, "you", i[10]),
          S(t, "show_star", (n = i[1].show_star)),
          S(t, "click_action", "mailbox"),
          S(t, "show_reply", (r = i[1].show_reply)),
          S(t, "show_reply_all", (a = i[1].show_reply_all)),
          S(t, "show_forward", (l = i[1].show_forward)),
          S(t, "theme", i[16]),
          f(e, "class", "email-container");
      },
      m(c, d) {
        g(c, e, d),
          y(e, t),
          s ||
            ((o = [
              Y(t, "messageClicked", i[17]),
              Y(t, "draftClicked", Ke(i[18])),
              Y(t, "forwardClicked", Ke(i[18])),
              Y(t, "replyClicked", Ke(i[18])),
              Y(t, "replyAllClicked", Ke(i[18])),
              Y(t, "threadStarred", i[23]),
              Y(t, "returnToMailbox", i[30]),
              Y(t, "toggleThreadUnreadStatus", i[25]),
              Y(t, "threadDeleted", i[27]),
              Y(t, "downloadClicked", i[29]),
            ]),
            (s = !0));
      },
      p(c, d) {
        d[0] & 128 && S(t, "thread", c[7]),
          d[0] & 1024 && S(t, "you", c[10]),
          d[0] & 2 && n !== (n = c[1].show_star) && S(t, "show_star", n),
          d[0] & 2 && r !== (r = c[1].show_reply) && S(t, "show_reply", r),
          d[0] & 2 &&
            a !== (a = c[1].show_reply_all) &&
            S(t, "show_reply_all", a),
          d[0] & 2 && l !== (l = c[1].show_forward) && S(t, "show_forward", l),
          d[0] & 65536 && S(t, "theme", c[16]);
      },
      i: k,
      o: k,
      d(c) {
        c && u(e), (s = !1), ot(o);
      },
    };
  }
  function Xl(i) {
    let e, t, n, r, a, l, s, o, c;
    return {
      c() {
        (e = v("header")),
          (t = v("button")),
          (n = W("svg")),
          (r = W("path")),
          (a = z()),
          (l = v("h1")),
          (s = J(i[0])),
          f(
            r,
            "d",
            "M9.41757 0.780979L9.57471 0.00782773C12.9388 0.717887 15.4617 3.80648 15.4617 7.49954C15.4617 8.7935 15.1519 10.0136 14.6046 11.083L16 12.458L11.6994 13.7113L12.7846 9.28951L14.0208 10.5077C14.4473 9.60009 14.6869 8.5795 14.6869 7.49954C14.6869 4.17742 12.4188 1.41444 9.41757 0.780979ZM0 2.90469L4.24241 1.46013L3.3489 5.92625L2.06118 4.7644C1.71079 5.60175 1.51627 6.5265 1.51627 7.49954C1.51627 10.8217 3.7844 13.5847 6.78563 14.2182L6.62849 14.9913C3.26437 14.2812 0.741524 11.1926 0.741524 7.49954C0.741524 6.32506 0.996751 5.21133 1.45323 4.21587L0 2.90469Z",
          ),
          f(n, "width", "16"),
          f(n, "height", "16"),
          f(n, "viewBox", "0 0 16 16"),
          we(n, "refreshing", i[14]);
      },
      m(d, m) {
        g(d, e, m),
          y(e, t),
          y(t, n),
          y(n, r),
          y(e, a),
          y(e, l),
          y(l, s),
          o || ((c = Y(t, "click", i[20])), (o = !0));
      },
      p(d, m) {
        m[0] & 16384 && we(n, "refreshing", d[14]), m[0] & 1 && pe(s, d[0]);
      },
      d(d) {
        d && u(e), (o = !1), c();
      },
    };
  }
  function Ql(i) {
    let e,
      t = i[1].actions_bar.includes(jt.SELECTALL),
      n,
      r = i[5].filter(ua).length,
      a,
      l = t && ql(i),
      s = r && ea(i);
    return {
      c() {
        (e = v("div")),
          l && l.c(),
          (n = z()),
          s && s.c(),
          f(e, "role", "toolbar"),
          f(e, "aria-label", "Bulk actions"),
          f(e, "aria-controls", "mailboxlist");
      },
      m(o, c) {
        g(o, e, c), l && l.m(e, null), y(e, n), s && s.m(e, null), (a = !0);
      },
      p(o, c) {
        c[0] & 2 && (t = o[1].actions_bar.includes(jt.SELECTALL)),
          t
            ? l
              ? l.p(o, c)
              : ((l = ql(o)), l.c(), l.m(e, n))
            : l && (l.d(1), (l = null)),
          c[0] & 32 && (r = o[5].filter(ua).length),
          r
            ? s
              ? (s.p(o, c), c[0] & 32 && A(s, 1))
              : ((s = ea(o)), s.c(), A(s, 1), s.m(e, null))
            : s &&
              (Ae(),
              F(s, 1, 1, () => {
                s = null;
              }),
              Se());
      },
      i(o) {
        a || (A(s), (a = !0));
      },
      o(o) {
        F(s), (a = !1);
      },
      d(o) {
        o && u(e), l && l.d(), s && s.d();
      },
    };
  }
  function ql(i) {
    let e,
      t = [i[11] ? "Deselect all" : "Select all"],
      n = [];
    for (let r = 0; r < 1; r += 1) n[r] = $l(Yl(i, t, r));
    return {
      c() {
        e = v("div");
        for (let r = 0; r < 1; r += 1) n[r].c();
        f(e, "class", "thread-checkbox");
      },
      m(r, a) {
        g(r, e, a);
        for (let l = 0; l < 1; l += 1) n[l].m(e, null);
      },
      p(r, a) {
        if (a[0] & 4196352) {
          t = [r[11] ? "Deselect all" : "Select all"];
          let l;
          for (l = 0; l < 1; l += 1) {
            const s = Yl(r, t, l);
            n[l] ? n[l].p(s, a) : ((n[l] = $l(s)), n[l].c(), n[l].m(e, null));
          }
          for (; l < 1; l += 1) n[l].d(1);
        }
      },
      d(r) {
        r && u(e), bt(n, r);
      },
    };
  }
  function $l(i) {
    let e, t, n, r, a;
    return {
      c() {
        (e = v("input")),
          f(e, "title", (t = i[97])),
          f(e, "aria-label", (n = i[97])),
          f(e, "type", "checkbox"),
          (e.checked = i[11]);
      },
      m(l, s) {
        g(l, e, s), r || ((a = Y(e, "click", i[22])), (r = !0));
      },
      p(l, s) {
        s[0] & 2048 && t !== (t = l[97]) && f(e, "title", t),
          s[0] & 2048 && n !== (n = l[97]) && f(e, "aria-label", n),
          s[0] & 2048 && (e.checked = l[11]);
      },
      d(l) {
        l && u(e), (r = !1), a();
      },
    };
  }
  function ea(i) {
    let e = i[1].actions_bar.includes(jt.DELETE),
      t,
      n = i[1].show_star && i[1].actions_bar.includes(jt.STAR),
      r,
      a = i[1].actions_bar.includes(jt.UNREAD),
      l,
      s,
      o = e && ta(i),
      c = n && ia(i),
      d = a && ra(i);
    return {
      c() {
        o && o.c(), (t = z()), c && c.c(), (r = z()), d && d.c(), (l = Be());
      },
      m(m, h) {
        o && o.m(m, h),
          g(m, t, h),
          c && c.m(m, h),
          g(m, r, h),
          d && d.m(m, h),
          g(m, l, h),
          (s = !0);
      },
      p(m, h) {
        h[0] & 2 && (e = m[1].actions_bar.includes(jt.DELETE)),
          e
            ? o
              ? (o.p(m, h), h[0] & 2 && A(o, 1))
              : ((o = ta(m)), o.c(), A(o, 1), o.m(t.parentNode, t))
            : o &&
              (Ae(),
              F(o, 1, 1, () => {
                o = null;
              }),
              Se()),
          h[0] & 2 &&
            (n = m[1].show_star && m[1].actions_bar.includes(jt.STAR)),
          n
            ? c
              ? c.p(m, h)
              : ((c = ia(m)), c.c(), c.m(r.parentNode, r))
            : c && (c.d(1), (c = null)),
          h[0] & 2 && (a = m[1].actions_bar.includes(jt.UNREAD)),
          a
            ? d
              ? (d.p(m, h), h[0] & 2 && A(d, 1))
              : ((d = ra(m)), d.c(), A(d, 1), d.m(l.parentNode, l))
            : d &&
              (Ae(),
              F(d, 1, 1, () => {
                d = null;
              }),
              Se());
      },
      i(m) {
        s || (A(o), A(d), (s = !0));
      },
      o(m) {
        F(o), F(d), (s = !1);
      },
      d(m) {
        o && o.d(m), m && u(t), c && c.d(m), m && u(r), d && d.d(m), m && u(l);
      },
    };
  }
  function ta(i) {
    let e, t, n, r, a, l, s;
    return (
      (n = new Cd({})),
      {
        c() {
          (e = v("div")),
            (t = v("button")),
            He(n.$$.fragment),
            f(t, "title", "Delete selected email(s)"),
            (t.disabled = r = !i[5].filter(ma).length),
            f(t, "aria-label", "Delete selected email(s)"),
            f(e, "class", "delete");
        },
        m(o, c) {
          g(o, e, c),
            y(e, t),
            Fe(n, t, null),
            (a = !0),
            l || ((s = Y(t, "click", i[62])), (l = !0));
        },
        p(o, c) {
          (!a || (c[0] & 32 && r !== (r = !o[5].filter(ma).length))) &&
            (t.disabled = r);
        },
        i(o) {
          a || (A(n.$$.fragment, o), (a = !0));
        },
        o(o) {
          F(n.$$.fragment, o), (a = !1);
        },
        d(o) {
          o && u(e), Ie(n), (l = !1), s();
        },
      }
    );
  }
  function ia(i) {
    let e,
      t = [i[12] ? "Unstar selected email(s)" : "Star selected email(s)"],
      n = [];
    for (let r = 0; r < 1; r += 1) n[r] = na(Jl(i, t, r));
    return {
      c() {
        e = v("div");
        for (let r = 0; r < 1; r += 1) n[r].c();
        f(e, "class", "starred");
      },
      m(r, a) {
        g(r, e, a);
        for (let l = 0; l < 1; l += 1) n[l].m(e, null);
      },
      p(r, a) {
        if (a[0] & 16781344) {
          t = [r[12] ? "Unstar selected email(s)" : "Star selected email(s)"];
          let l;
          for (l = 0; l < 1; l += 1) {
            const s = Jl(r, t, l);
            n[l] ? n[l].p(s, a) : ((n[l] = na(s)), n[l].c(), n[l].m(e, null));
          }
          for (; l < 1; l += 1) n[l].d(1);
        }
      },
      d(r) {
        r && u(e), bt(n, r);
      },
    };
  }
  function na(i) {
    let e, t, n, r, a, l, s;
    return {
      c() {
        (e = v("button")),
          f(e, "class", (t = i[12] ? "starred" : "")),
          f(e, "title", (n = i[94])),
          f(e, "aria-label", (r = i[94])),
          f(e, "role", "switch"),
          (e.disabled = a = !i[5].filter(ha).length),
          f(e, "aria-checked", i[12]);
      },
      m(o, c) {
        g(o, e, c), l || ((s = Y(e, "click", i[63])), (l = !0));
      },
      p(o, c) {
        c[0] & 4096 && t !== (t = o[12] ? "starred" : "") && f(e, "class", t),
          c[0] & 4096 && n !== (n = o[94]) && f(e, "title", n),
          c[0] & 4096 && r !== (r = o[94]) && f(e, "aria-label", r),
          c[0] & 32 && a !== (a = !o[5].filter(ha).length) && (e.disabled = a),
          c[0] & 4096 && f(e, "aria-checked", o[12]);
      },
      d(o) {
        o && u(e), (l = !1), s();
      },
    };
  }
  function ra(i) {
    let e, t, n, r;
    const a = [tf, ef],
      l = [];
    function s(o, c) {
      return o[13] ? 1 : 0;
    }
    return (
      (t = s(i)),
      (n = l[t] = a[t](i)),
      {
        c() {
          (e = v("div")), n.c(), f(e, "class", "read-status");
        },
        m(o, c) {
          g(o, e, c), l[t].m(e, null), (r = !0);
        },
        p(o, c) {
          let d = t;
          (t = s(o)),
            t === d
              ? l[t].p(o, c)
              : (Ae(),
                F(l[d], 1, 1, () => {
                  l[d] = null;
                }),
                Se(),
                (n = l[t]),
                n ? n.p(o, c) : ((n = l[t] = a[t](o)), n.c()),
                A(n, 1),
                n.m(e, null));
        },
        i(o) {
          r || (A(n), (r = !0));
        },
        o(o) {
          F(n), (r = !1);
        },
        d(o) {
          o && u(e), l[t].d();
        },
      }
    );
  }
  function ef(i) {
    let e, t, n, r, a;
    return (
      (t = new vd({})),
      {
        c() {
          (e = v("button")),
            He(t.$$.fragment),
            f(e, "data-cy", "mark-unread"),
            f(e, "title", "Mark selected email(s) as unread"),
            f(e, "aria-label", "Mark selected email(s) as unread");
        },
        m(l, s) {
          g(l, e, s),
            Fe(t, e, null),
            (n = !0),
            r || ((a = Y(e, "click", i[65])), (r = !0));
        },
        p: k,
        i(l) {
          n || (A(t.$$.fragment, l), (n = !0));
        },
        o(l) {
          F(t.$$.fragment, l), (n = !1);
        },
        d(l) {
          l && u(e), Ie(t), (r = !1), a();
        },
      }
    );
  }
  function tf(i) {
    let e, t, n, r, a, l;
    return (
      (t = new pd({})),
      {
        c() {
          (e = v("button")),
            He(t.$$.fragment),
            f(e, "data-cy", "mark-read"),
            f(e, "title", "Mark selected email(s) as read"),
            (e.disabled = n = !i[5].filter(_a).length),
            f(e, "aria-label", "Mark selected email(s) as read");
        },
        m(s, o) {
          g(s, e, o),
            Fe(t, e, null),
            (r = !0),
            a || ((l = Y(e, "click", i[64])), (a = !0));
        },
        p(s, o) {
          (!r || (o[0] & 32 && n !== (n = !s[5].filter(_a).length))) &&
            (e.disabled = n);
        },
        i(s) {
          r || (A(t.$$.fragment, s), (r = !0));
        },
        o(s) {
          F(t.$$.fragment, s), (r = !1);
        },
        d(s) {
          s && u(e), Ie(t), (a = !1), l();
        },
      }
    );
  }
  function la(i) {
    let e, t, n;
    function r(s, o) {
      return s[1].header ? rf : nf;
    }
    let a = r(i),
      l = a(i);
    return {
      c() {
        (e = v("div")),
          (t = v("p")),
          l.c(),
          (n = J(" is empty!")),
          f(e, "class", "mailbox-empty");
      },
      m(s, o) {
        g(s, e, o), y(e, t), l.m(t, null), y(t, n);
      },
      p(s, o) {
        a === (a = r(s)) && l
          ? l.p(s, o)
          : (l.d(1), (l = a(s)), l && (l.c(), l.m(t, n)));
      },
      d(s) {
        s && u(e), l.d();
      },
    };
  }
  function nf(i) {
    let e;
    return {
      c() {
        e = J("Your Mailbox");
      },
      m(t, n) {
        g(t, e, n);
      },
      p: k,
      d(t) {
        t && u(e);
      },
    };
  }
  function rf(i) {
    let e;
    return {
      c() {
        e = J(i[0]);
      },
      m(t, n) {
        g(t, e, n);
      },
      p(t, n) {
        n[0] & 1 && pe(e, t[0]);
      },
      d(t) {
        t && u(e);
      },
    };
  }
  function aa(i) {
    let e, t, n, r, a, l, s;
    function o(...c) {
      return i[66](i[88], ...c);
    }
    return {
      c() {
        var c, d, m, h, b;
        (e = v("input")),
          f(e, "title", (t = i[91])),
          f(e, "aria-label", (n = i[91])),
          f(e, "type", "checkbox"),
          (e.checked = r = i[88].selected),
          (e.disabled = a =
            i[88] &&
            ((c = i[88]) == null ? void 0 : c.messages) &&
            ((m = (d = i[88]) == null ? void 0 : d.messages) == null
              ? void 0
              : m.length) <= 0 &&
            !((b = (h = i[88]) == null ? void 0 : h.drafts) == null
              ? void 0
              : b.length));
      },
      m(c, d) {
        g(c, e, d), l || ((s = Y(e, "click", o)), (l = !0));
      },
      p(c, d) {
        var m, h, b, _, O;
        (i = c),
          d[0] & 32 && t !== (t = i[91]) && f(e, "title", t),
          d[0] & 32 && n !== (n = i[91]) && f(e, "aria-label", n),
          d[0] & 32 && r !== (r = i[88].selected) && (e.checked = r),
          d[0] & 32 &&
            a !==
              (a =
                i[88] &&
                ((m = i[88]) == null ? void 0 : m.messages) &&
                ((b = (h = i[88]) == null ? void 0 : h.messages) == null
                  ? void 0
                  : b.length) <= 0 &&
                !((O = (_ = i[88]) == null ? void 0 : _.drafts) == null
                  ? void 0
                  : O.length)) &&
            (e.disabled = a);
      },
      d(c) {
        c && u(e), (l = !1), s();
      },
    };
  }
  function oa(i) {
    let e, t, n, r, a, l, s, o, c;
    return {
      c() {
        (e = v("nylas-email")),
          S(e, "clean_conversation", !1),
          S(e, "thread", (t = i[88])),
          S(e, "you", i[10]),
          S(e, "show_star", (n = i[1].show_star)),
          S(e, "click_action", "mailbox"),
          S(e, "show_reply", (r = i[1].show_reply)),
          S(e, "show_reply_all", (a = i[1].show_reply_all)),
          S(e, "show_forward", (l = i[1].show_forward)),
          S(e, "theme", i[16]),
          S(e, "show_thread_actions", (s = i[88].selected));
      },
      m(d, m) {
        g(d, e, m),
          o ||
            ((c = [
              Y(e, "threadClicked", i[19]),
              Y(e, "messageClicked", i[17]),
              Y(e, "draftClicked", Ke(i[18])),
              Y(e, "forwardClicked", Ke(i[18])),
              Y(e, "replyClicked", Ke(i[18])),
              Y(e, "replyAllClicked", Ke(i[18])),
              Y(e, "threadStarred", i[23]),
              Y(e, "returnToMailbox", i[30]),
              Y(e, "toggleThreadUnreadStatus", i[25]),
              Y(e, "threadDeleted", i[27]),
              Y(e, "downloadClicked", i[29]),
            ]),
            (o = !0));
      },
      p(d, m) {
        m[0] & 32 && t !== (t = d[88]) && S(e, "thread", t),
          m[0] & 1024 && S(e, "you", d[10]),
          m[0] & 2 && n !== (n = d[1].show_star) && S(e, "show_star", n),
          m[0] & 2 && r !== (r = d[1].show_reply) && S(e, "show_reply", r),
          m[0] & 2 &&
            a !== (a = d[1].show_reply_all) &&
            S(e, "show_reply_all", a),
          m[0] & 2 && l !== (l = d[1].show_forward) && S(e, "show_forward", l),
          m[0] & 65536 && S(e, "theme", d[16]),
          m[0] & 32 &&
            s !== (s = d[88].selected) &&
            S(e, "show_thread_actions", s);
      },
      d(d) {
        d && u(e), (o = !1), ot(c);
      },
    };
  }
  function sa(i) {
    let e,
      t,
      n,
      r,
      a = i[88].id,
      l = i[1].show_thread_checkbox && aa(i),
      s = oa(i);
    return {
      c() {
        var o, c, d, m, h;
        (e = v("li")),
          (t = v("div")),
          l && l.c(),
          (n = z()),
          (r = v("div")),
          s.c(),
          f(t, "class", "checkbox-container thread-checkbox"),
          f(r, "class", "email-container"),
          we(e, "unread", i[88].unread),
          we(e, "checked", i[88].selected),
          we(
            e,
            "no-messages",
            i[88] &&
              ((o = i[88]) == null ? void 0 : o.messages) &&
              ((d = (c = i[88]) == null ? void 0 : c.messages) == null
                ? void 0
                : d.length) <= 0 &&
              !((h = (m = i[88]) == null ? void 0 : m.drafts) == null
                ? void 0
                : h.length),
          );
      },
      m(o, c) {
        g(o, e, c), y(e, t), l && l.m(t, null), y(e, n), y(e, r), s.m(r, null);
      },
      p(o, c) {
        var d, m, h, b, _;
        o[1].show_thread_checkbox
          ? l
            ? l.p(o, c)
            : ((l = aa(o)), l.c(), l.m(t, null))
          : l && (l.d(1), (l = null)),
          c[0] & 32 && Ue(a, (a = o[88].id))
            ? (s.d(1), (s = oa(o)), s.c(), s.m(r, null))
            : s.p(o, c),
          c[0] & 32 && we(e, "unread", o[88].unread),
          c[0] & 32 && we(e, "checked", o[88].selected),
          c[0] & 32 &&
            we(
              e,
              "no-messages",
              o[88] &&
                ((d = o[88]) == null ? void 0 : d.messages) &&
                ((h = (m = o[88]) == null ? void 0 : m.messages) == null
                  ? void 0
                  : h.length) <= 0 &&
                !((_ = (b = o[88]) == null ? void 0 : b.drafts) == null
                  ? void 0
                  : _.length),
            );
      },
      d(o) {
        o && u(e), l && l.d(), s.d(o);
      },
    };
  }
  function ca(i) {
    let e,
      t = [
        i[88].selected
          ? `Deselect thread ${i[88].subject}`
          : `Select thread ${i[88].subject}`,
      ],
      n = [];
    for (let r = 0; r < 1; r += 1) n[r] = sa(Zl(i, t, r));
    return {
      c() {
        for (let r = 0; r < 1; r += 1) n[r].c();
        e = Be();
      },
      m(r, a) {
        for (let l = 0; l < 1; l += 1) n[l].m(r, a);
        g(r, e, a);
      },
      p(r, a) {
        if (a[0] & 1789854754) {
          t = [
            r[88].selected
              ? `Deselect thread ${r[88].subject}`
              : `Select thread ${r[88].subject}`,
          ];
          let l;
          for (l = 0; l < 1; l += 1) {
            const s = Zl(r, t, l);
            n[l]
              ? n[l].p(s, a)
              : ((n[l] = sa(s)), n[l].c(), n[l].m(e.parentNode, e));
          }
          for (; l < 1; l += 1) n[l].d(1);
        }
      },
      d(r) {
        bt(n, r), r && u(e);
      },
    };
  }
  function da(i) {
    let e, t, n, r, a;
    return {
      c() {
        (e = v("pagination-nav")),
          S(e, "current_page", i[3]),
          S(e, "items_per_page", (t = i[1].items_per_page)),
          S(e, "num_pages", i[9]),
          S(e, "num_items", i[4]),
          S(e, "visible", !0),
          S(e, "num_pages_visible", (n = !i[1].keyword_to_search));
      },
      m(l, s) {
        g(l, e, s), r || ((a = Y(e, "changePage", i[31])), (r = !0));
      },
      p(l, s) {
        s[0] & 8 && S(e, "current_page", l[3]),
          s[0] & 2 &&
            t !== (t = l[1].items_per_page) &&
            S(e, "items_per_page", t),
          s[0] & 512 && S(e, "num_pages", l[9]),
          s[0] & 16 && S(e, "num_items", l[4]),
          s[0] & 2 &&
            n !== (n = !l[1].keyword_to_search) &&
            S(e, "num_pages_visible", n);
      },
      d(l) {
        l && u(e), (r = !1), a();
      },
    };
  }
  function fa(i) {
    let e,
      t,
      n,
      r,
      a,
      l,
      s,
      o,
      c,
      d,
      m = {
        ctx: i,
        current: null,
        token: null,
        hasCatch: !1,
        pending: of,
        then: af,
        catch: lf,
        value: 87,
      };
    return (
      vt((n = i[5].filter(pa).length > 1), m),
      {
        c() {
          (e = v("div")),
            (t = v("div")),
            m.block.c(),
            (r = z()),
            (a = v("div")),
            (l = v("button")),
            (l.textContent = "Confirm"),
            (s = z()),
            (o = v("button")),
            (o.textContent = "Cancel"),
            f(l, "class", "danger"),
            f(o, "class", "cancel"),
            f(a, "class", "footer"),
            f(t, "class", "modal"),
            f(e, "class", "overlay");
        },
        m(h, b) {
          g(h, e, b),
            y(e, t),
            m.block.m(t, (m.anchor = null)),
            (m.mount = () => t),
            (m.anchor = r),
            y(t, r),
            y(t, a),
            y(a, l),
            y(a, s),
            y(a, o),
            c ||
              ((d = [
                Y(l, "click", i[28]),
                Y(o, "click", i[67]),
                Y(e, "click", i[68]),
              ]),
              (c = !0));
        },
        p(h, b) {
          (i = h),
            (m.ctx = i),
            (b[0] & 32 && n !== (n = i[5].filter(pa).length > 1) && vt(n, m)) ||
              li(m, i, b);
        },
        d(h) {
          h && u(e), m.block.d(), (m.token = null), (m = null), (c = !1), ot(d);
        },
      }
    );
  }
  function lf(i) {
    return { c: k, m: k, p: k, d: k };
  }
  function af(i) {
    let e,
      t = `Are you sure you want to delete the selected email${
        i[87] ? "s" : ""
      }?`,
      n,
      r,
      a,
      l = `Once deleted, ${
        i[87] ? "these emails" : "this email"
      } can only be recovered from your native email
        client.`,
      s;
    return {
      c() {
        (e = v("h3")),
          (n = J(t)),
          (r = z()),
          (a = v("p")),
          (s = J(l)),
          f(e, "class", "title"),
          f(a, "class", "description");
      },
      m(o, c) {
        g(o, e, c), y(e, n), g(o, r, c), g(o, a, c), y(a, s);
      },
      p(o, c) {
        c[0] & 32 &&
          t !==
            (t = `Are you sure you want to delete the selected email${
              o[87] ? "s" : ""
            }?`) &&
          pe(n, t),
          c[0] & 32 &&
            l !==
              (l = `Once deleted, ${
                o[87] ? "these emails" : "this email"
              } can only be recovered from your native email
        client.`) &&
            pe(s, l);
      },
      d(o) {
        o && u(e), o && u(r), o && u(a);
      },
    };
  }
  function of(i) {
    return { c: k, m: k, p: k, d: k };
  }
  function sf(i) {
    let e,
      t,
      n,
      r,
      a,
      l,
      s,
      o = i[16] && Kl(i);
    const c = [Qd, Xd],
      d = [];
    function m(b, _) {
      return b[2] ? 0 : 1;
    }
    (n = m(i)), (r = d[n] = c[n](i));
    let h = i[6].isOpen && fa(i);
    return {
      c() {
        var b;
        o && o.c(),
          (e = z()),
          (t = v("main")),
          r.c(),
          (a = z()),
          h && h.c(),
          (l = Be()),
          (this.c = k),
          f(t, "class", "nylas-mailbox"),
          f(t, "data-cy", "nylas-mailbox"),
          we(t, "loading", !i[2]),
          we(t, "empty", !((b = i[5]) == null ? void 0 : b.length) && i[2]);
      },
      m(b, _) {
        o && o.m(b, _),
          g(b, e, _),
          g(b, t, _),
          d[n].m(t, null),
          g(b, a, _),
          h && h.m(b, _),
          g(b, l, _),
          (s = !0);
      },
      p(b, _) {
        var P;
        b[16]
          ? o
            ? o.p(b, _)
            : ((o = Kl(b)), o.c(), o.m(e.parentNode, e))
          : o && (o.d(1), (o = null));
        let O = n;
        (n = m(b)),
          n === O
            ? d[n].p(b, _)
            : (Ae(),
              F(d[O], 1, 1, () => {
                d[O] = null;
              }),
              Se(),
              (r = d[n]),
              r ? r.p(b, _) : ((r = d[n] = c[n](b)), r.c()),
              A(r, 1),
              r.m(t, null)),
          _[0] & 4 && we(t, "loading", !b[2]),
          _[0] & 36 &&
            we(t, "empty", !((P = b[5]) == null ? void 0 : P.length) && b[2]),
          b[6].isOpen
            ? h
              ? h.p(b, _)
              : ((h = fa(b)), h.c(), h.m(l.parentNode, l))
            : h && (h.d(1), (h = null));
      },
      i(b) {
        s || (A(r), (s = !0));
      },
      o(b) {
        F(r), (s = !1);
      },
      d(b) {
        o && o.d(b),
          b && u(e),
          b && u(t),
          d[n].d(),
          b && u(a),
          h && h.d(b),
          b && u(l);
      },
    };
  }
  const En = 1,
    ua = (i) => i.selected,
    ma = (i) => i.selected,
    ha = (i) => i.selected,
    _a = (i) => i.selected,
    pa = (i) => i.selected;
  function cf(i, e, t) {
    let n, r, a, l, s;
    Wt(i, wt, (E) => t(73, (a = E))),
      Wt(i, nr, (E) => t(74, (l = E))),
      Wt(i, nn, (E) => t(59, (s = E)));
    var o =
        (this && this.__awaiter) ||
        function (E, D, me, $) {
          function Re(Ce) {
            return Ce instanceof me
              ? Ce
              : new me(function (ze) {
                  ze(Ce);
                });
          }
          return new (me || (me = Promise))(function (Ce, ze) {
            function At(ut) {
              try {
                zt($.next(ut));
              } catch (Et) {
                ze(Et);
              }
            }
            function Pt(ut) {
              try {
                zt($.throw(ut));
              } catch (Et) {
                ze(Et);
              }
            }
            function zt(ut) {
              ut.done ? Ce(ut.value) : Re(ut.value).then(At, Pt);
            }
            zt(($ = $.apply(E, D || [])).next());
          });
        },
      c,
      d,
      m;
    const h = Ui(Zt());
    let { id: b = "" } = e,
      { access_token: _ = "" } = e,
      { actions_bar: O } = e,
      { all_threads: P } = e,
      { thread_ids: C } = e,
      { header: I = "Mailbox" } = e,
      { items_per_page: N } = e,
      { keyword_to_search: oe } = e,
      { onSelectThread: le = ci } = e,
      { query_string: ee } = e,
      { show_star: Z } = e,
      { show_thread_checkbox: X } = e,
      { show_reply: L } = e,
      { show_reply_all: x } = e,
      { show_forward: Oe } = e,
      { theme: Ne } = e,
      { thread_click_action: ye = Bi.DEFAULT } = e;
    const he = {
      actions_bar: [],
      items_per_page: 13,
      query_string: "in=inbox",
      thread_ids: void 0,
      show_star: !1,
      show_thread_checkbox: !0,
      show_reply: !1,
      show_reply_all: !1,
      show_forward: !1,
      theme: "auto",
      thread_click_action: Bi.DEFAULT,
    };
    let de;
    const te = { isOpen: !1, type: "", event: de };
    let Le = {},
      U = wi({}, {}, he),
      _e,
      De = !1,
      ke = !1,
      Me,
      R = 0,
      Ee = En,
      Xe = 0,
      H = 0;
    hn(() =>
      o(void 0, void 0, void 0, function* () {
        yield Nn(),
          t(
            53,
            (Le =
              (yield l[JSON.stringify({ component_id: b, access_token: _ })]) ||
              {}),
          ),
          t(1, (U = wi(e, Le, he))),
          b &&
            !Pe.id &&
            !U.all_threads &&
            t(
              10,
              (Pe = yield Vn({
                component_id: M.component_id,
                access_token: _,
              })),
            );
        const E = { component_id: b, access_token: _ };
        (Pe == null ? void 0 : Pe.organization_unit) === yi.Label
          ? pr.getLabels(E).then((D) => t(57, (qe = D)))
          : (Pe == null ? void 0 : Pe.organization_unit) === yi.Folder &&
            mr.getFolders(E).then((D) => t(58, (Ze = D))),
          yield Qe(),
          t(2, (ke = !0));
      }),
    );
    let ge = e,
      M,
      ct,
      se = [],
      qe = [],
      Ze = [],
      Pe = {};
    function je(E) {
      return zn(M, E.id).then((D) => ((E.body = D.body), E));
    }
    function Qe(E = !1) {
      var D, me;
      return o(this, void 0, void 0, function* () {
        Me && (yield Me),
          !U.all_threads &&
            b &&
            (U.keyword_to_search
              ? ((Me = wt.getThreadsWithSearchKeyword(M, E)),
                t(5, (se = (D = yield Me) !== null && D !== void 0 ? D : [])),
                U.items_per_page + 1 === se.length &&
                  (H === 0
                    ? t(9, (Ee = En + 1))
                    : t(9, (Ee = En + Math.ceil(H / U.items_per_page) + 1)),
                  se.pop()))
              : ((Me = wt.getThreads(M, R, U.items_per_page, E)),
                t(
                  5,
                  (se = (me = yield Me) !== null && me !== void 0 ? me : []),
                ),
                t(4, (Xe = yield wt.getNumberOfItems(M))),
                t(9, (Ee = Math.ceil(Xe / U.items_per_page)))));
      });
    }
    function Ut(E) {
      return o(this, void 0, void 0, function* () {
        t(5, (se = wt.hydrateMessageInThread(E, M, R)));
      });
    }
    function G(E) {
      return o(this, void 0, void 0, function* () {
        t(5, (se = wt.hydrateDraftInThread(E, M, R)));
        const D = se.find((me) => me.id === E.thread_id);
        _e && t(7, (_e.drafts = D.drafts), _e);
      });
    }
    let q = !1,
      ue = !1,
      be = !1;
    function Je(E) {
      var D, me;
      return o(this, void 0, void 0, function* () {
        let $ = E.detail.message;
        !U.all_threads &&
          $ &&
          _e &&
          (($ = yield je($)),
          t(5, (se = wt.hydrateMessageInThread($, M, R))),
          oi.hasInlineFiles($) &&
            (($ = yield j($)), t(5, (se = wt.hydrateMessageInThread($, M, R)))),
          _e &&
            (t(
              7,
              (_e.messages =
                (me =
                  (D = _e.messages) === null || D === void 0
                    ? void 0
                    : D.map((Re) => (Re.id === $.id ? $ : Re))) !== null &&
                me !== void 0
                  ? me
                  : []),
              _e,
            ),
            t(7, _e)));
      });
    }
    function pt(E) {
      return o(this, void 0, void 0, function* () {
        let D = E.detail.message;
        const me = E.detail.value;
        !U.all_threads &&
          (D == null ? void 0 : D.object) === "draft" &&
          _e &&
          ((D == null ? void 0 : D.body) || (D = yield je(D)),
          oi.hasInlineFiles(D) && (D = yield j(D)),
          me && (me.body = D.body),
          G(D)),
          h(E.type, E.detail);
      });
    }
    function ft(E) {
      return o(this, void 0, void 0, function* () {
        b &&
          E &&
          E.id &&
          (yield wt.updateThread(
            { access_token: _, component_id: b, thread_id: E.id },
            ct,
            E,
            R,
            U.items_per_page,
          ));
      });
    }
    let Ye = !1;
    function Dt(E) {
      var D, me;
      return o(this, void 0, void 0, function* () {
        const { thread: $, messageType: Re } = E.detail,
          Ce = $[Re];
        if (!Ye) {
          if ((t(14, (Ye = !0)), U.thread_click_action === Bi.DEFAULT)) {
            let ze = yield je(Ce[Ce.length - 1]);
            if (Re === xt.DRAFTS) {
              yield Bt(E), t(14, (Ye = !1));
              return;
            }
            t(7, (_e = $)),
              ($.expanded = !$.expanded),
              !U.all_threads &&
                ($ == null ? void 0 : $.expanded) &&
                ($.unread && (($.unread = !1), yield ft($)),
                t(5, (se = wt.hydrateMessageInThread(ze, M, R))),
                oi.hasInlineFiles(ze) &&
                  ((ze = yield j(ze)),
                  t(5, (se = wt.hydrateMessageInThread(ze, M, R)))),
                _e &&
                  (t(
                    7,
                    (_e.messages =
                      (me =
                        (D = _e.messages) === null || D === void 0
                          ? void 0
                          : D.map((At) => (At.id === ze.id ? ze : At))) !==
                        null && me !== void 0
                        ? me
                        : []),
                    _e,
                  ),
                  t(7, _e)));
          }
          t(14, (Ye = !1));
        }
      });
    }
    function j(E) {
      var D;
      return o(this, void 0, void 0, function* () {
        const me = yield oi.getFilesForMessage(E, {
          component_id: b,
          access_token: _,
        });
        for (const $ of Object.values(me))
          E.body &&
            (E.body =
              (D = E.body) === null || D === void 0
                ? void 0
                : D.replaceAll(
                    `src="cid:${$.content_id}"`,
                    `src="data:${$.content_type};base64,${$.data}"`,
                  ));
        return E;
      });
    }
    function si(E) {
      return o(this, void 0, void 0, function* () {
        t(14, (Ye = !0)),
          h("refreshClicked", { event: E }),
          yield Qe(!0),
          t(14, (Ye = !1));
      });
    }
    function ci(E, D) {
      Array.isArray(U.all_threads)
        ? ((D.selected = !D.selected), t(5, (se = [...se])))
        : t(5, (se = wt.updateThreadSelection(JSON.stringify(M), R, D.id))),
        h("onSelectOneClicked", { event: E, thread: D });
    }
    function di(E) {
      Array.isArray(U.all_threads)
        ? t(
            5,
            (se = se.map((D) =>
              Object.assign(Object.assign({}, D), { selected: !q }),
            )),
          )
        : t(5, (se = wt.updateThreadSelection(JSON.stringify(M), R))),
        h("onSelectAllClicked", {
          event: E,
          selectedThreads: se.filter((D) => D.selected),
        });
    }
    function Hi(E) {
      return o(this, void 0, void 0, function* () {
        const D = E.detail.thread;
        Array.isArray(U.all_threads) ||
          (yield ft(D), t(5, (se = a[ct][R].threads))),
          h("onStarSelected", { event: E, starredThreads: [D] });
      });
    }
    function yt(E) {
      return o(this, void 0, void 0, function* () {
        if (Array.isArray(U.all_threads))
          t(
            5,
            (se = se.map((D) =>
              Object.assign(Object.assign({}, D), { starred: !ue }),
            )),
          );
        else {
          const D = [];
          for (const me of se.filter(($) => $.selected))
            (me.starred = !ue), D.push(ft(me));
          yield Promise.all(D), t(5, (se = a[ct][R].threads));
        }
        h("onStarSelected", {
          event: E,
          selectedThreads: se.filter((D) => D.selected),
        });
      });
    }
    function Ci(E) {
      return o(this, void 0, void 0, function* () {
        Array.isArray(U.all_threads)
          ? t(5, (se = [...se]))
          : (yield ft(E.detail.thread), t(5, (se = a[ct][R].threads)));
      });
    }
    function Rt(E) {
      return o(this, void 0, void 0, function* () {
        if (Array.isArray(U.all_threads))
          t(
            5,
            (se = se.map(
              (D) => (D.selected && (D.unread = be), Object.assign({}, D)),
            )),
          );
        else {
          const D = [];
          for (const me of se.filter(($) => $.selected))
            (me.unread = be), D.push(ft(me));
          yield Promise.all(D), t(5, (se = a[ct][R].threads));
        }
        h("onChangeSelectedReadStatus", {
          event: E,
          selectedThreads: se.filter((D) => D.selected),
        });
      });
    }
    function Xt(E, D = "") {
      t(6, (te.isOpen = !0), te),
        t(6, (te.event = E), te),
        t(6, (te.type = D), te);
    }
    let St = !1;
    function fi() {
      t(15, (St = !0)),
        te.type === "selected" ? Qt(te.event) : kt(te.event),
        t(6, (te.isOpen = !1), te),
        t(6, (te.type = ""), te),
        t(6, (te.event = de), te);
    }
    function kt(E) {
      var D, me;
      return o(this, void 0, void 0, function* () {
        const $ = E.detail.thread;
        if (Array.isArray(U.all_threads))
          t(5, (se = se.filter((Re) => Re.id !== $.id)));
        else {
          if (n) {
            const Re =
              ((D = $.labels) === null || D === void 0
                ? void 0
                : D.map((ze) => ze.id)) || [];
            ($.label_ids = [...Re, n]), yield ft($);
            const Ce = [...$.drafts];
            for (let ze of Ce) {
              const At =
                ((me = ze.labels) === null || me === void 0
                  ? void 0
                  : me.map((Pt) => Pt.id)) || [];
              yield bn(
                M.component_id,
                Object.assign(Object.assign({}, ze), { label_ids: [...At, n] }),
                _,
              ).catch((Pt) => {});
            }
          } else if (r && (($.folder_id = r), b)) {
            const Re = [...$.messages, ...$.drafts];
            for (let Ce of Re)
              yield bn(
                M.component_id,
                Object.assign(Object.assign({}, Ce), { folder_id: r }),
                _,
              ).catch((ze) => {
                t(15, (St = !1));
              });
          }
          yield Qe(!0);
        }
        t(15, (St = !1)), qt();
      });
    }
    function Ai(E) {
      return o(this, void 0, void 0, function* () {
        const D = E.detail.file,
          me = yield yn({ file_id: D.id, component_id: b, access_token: _ });
        sr(me, D);
      });
    }
    function Qt(E) {
      return o(this, void 0, void 0, function* () {
        if (Array.isArray(U.all_threads)) {
          const D = se.filter((me) => me.selected);
          t(5, (se = se.filter((me) => !D.includes(me))));
        } else if (n || r) {
          const D = [];
          for (const me of se.filter(($) => $.selected))
            D.push(kt({ detail: { thread: me } }));
          yield Promise.all(D);
        }
        h("onDeleteSelected", { event: E, deletedThreads: _e ? [_e] : se }),
          t(15, (St = !1));
      });
    }
    function qt() {
      _e && (t(7, (_e.expanded = !1), _e), t(7, (_e = null)));
    }
    function zi(E) {
      return o(this, void 0, void 0, function* () {
        t(14, (Ye = !0)),
          t(3, (R = E.detail.newPage)),
          t(54, (H = U.items_per_page * R)),
          yield Qe(),
          t(14, (Ye = !1));
      });
    }
    function Bt(E) {
      var D, me;
      return o(this, void 0, void 0, function* () {
        const { thread: $ } = E.detail,
          Re =
            (D = E.detail.message) !== null && D !== void 0 ? D : $.drafts[0];
        if ((me = Re.cids) === null || me === void 0 ? void 0 : me.length) {
          const ze = yield j(Re);
          Re.body = ze.body;
        }
        G(Re);
        const Ce = {
          to: Re.to,
          cc: Re.cc,
          bcc: Re.bcc,
          from: Re.from,
          subject: Re.subject,
          body: Re.body,
        };
        h("draftThreadClicked", {
          event: E,
          message: Re,
          thread: $,
          value: Ce,
        }),
          console.warn(
            "draftThreadEvent is Deprecated and will be removed in a future stable release; Please use draftThreadClicked instead",
          ),
          h("draftThreadEvent", {
            warning:
              "draftThreadEvent is Deprecated and will be removed in a future stable release; Please use draftThreadClicked instead.",
            event: E,
            message: Re,
            thread: $,
            value: Ce,
          });
      });
    }
    let Ht;
    const Vi = () => t(8, (De = !0)),
      ui = () => t(8, (De = !0)),
      gt = (E) => {
        Xt(E, "selected");
      },
      Ot = (E) => yt(E),
      mi = (E) => Rt(E),
      Si = (E) => Rt(E),
      Oi = (E, D) => ci(D, E),
      Li = () => t(6, (te.isOpen = !1), te),
      Mi = () => t(6, (te.isOpen = !1), te);
    return (
      (i.$$set = (E) => {
        t(86, (e = ie(ie({}, e), ve(E)))),
          "id" in E && t(32, (b = E.id)),
          "access_token" in E && t(33, (_ = E.access_token)),
          "actions_bar" in E && t(34, (O = E.actions_bar)),
          "all_threads" in E && t(35, (P = E.all_threads)),
          "thread_ids" in E && t(36, (C = E.thread_ids)),
          "header" in E && t(0, (I = E.header)),
          "items_per_page" in E && t(37, (N = E.items_per_page)),
          "keyword_to_search" in E && t(38, (oe = E.keyword_to_search)),
          "onSelectThread" in E && t(39, (le = E.onSelectThread)),
          "query_string" in E && t(40, (ee = E.query_string)),
          "show_star" in E && t(41, (Z = E.show_star)),
          "show_thread_checkbox" in E && t(42, (X = E.show_thread_checkbox)),
          "show_reply" in E && t(43, (L = E.show_reply)),
          "show_reply_all" in E && t(44, (x = E.show_reply_all)),
          "show_forward" in E && t(45, (Oe = E.show_forward)),
          "theme" in E && t(46, (Ne = E.theme)),
          "thread_click_action" in E && t(47, (ye = E.thread_click_action));
      }),
      (i.$$.update = () => {
        if (
          (i.$$.dirty[1] & 4194304 && h("manifestLoaded", Le),
          i.$$.dirty[1] & 268435456 && Object.keys(s).length && h("onError", s),
          JSON.stringify(ge) !== JSON.stringify(e) &&
            (t(1, (U = wi(e, Le, he))), t(55, (ge = e))),
          i.$$.dirty[0] & 6 &&
            (() =>
              o(void 0, void 0, void 0, function* () {
                !U.all_threads && U.items_per_page && ke && (yield Qe(!0));
              }))(),
          i.$$.dirty[0] & 26 && Array.isArray(U.all_threads))
        ) {
          t(4, (Xe = U.all_threads.length)),
            t(9, (Ee = Math.ceil(Xe / U.items_per_page)));
          const E = R * U.items_per_page;
          t(5, (se = U.all_threads.slice(E, E + U.items_per_page)));
        }
        (i.$$.dirty[0] & 2) | (i.$$.dirty[1] & 8912934) &&
          (t(
            56,
            (M = {
              component_id: b,
              access_token: _,
              query: Object.fromEntries(
                new URLSearchParams(
                  t(50, (c = U.query_string)) === null || c === void 0
                    ? void 0
                    : c.replaceAll(" ", "&"),
                ),
              ),
              thread_ids: C,
            }),
          ),
          U.keyword_to_search &&
            (t(56, (M.keywordToSearch = U.keyword_to_search), M),
            t(56, (M.query.limit = U.items_per_page + 1), M),
            t(56, (M.query.offset = H), M))),
          i.$$.dirty[1] & 33554432 && (ct = JSON.stringify(M)),
          i.$$.dirty[1] & 68157440 &&
            (n = qe.length
              ? t(51, (d = qe.find((E) => E.name === "trash"))) === null ||
                d === void 0
                ? void 0
                : d.id
              : null),
          i.$$.dirty[1] & 136314880 &&
            (r = Ze.length
              ? t(52, (m = Ze.find((E) => E.name === "trash"))) === null ||
                m === void 0
                ? void 0
                : m.id
              : null),
          i.$$.dirty[0] & 32 && t(11, (q = se.some((E) => E.selected))),
          i.$$.dirty[0] & 32 &&
            t(12, (ue = se.filter((E) => E.selected).some((E) => E.starred))),
          i.$$.dirty[0] & 32 &&
            t(13, (be = se.filter((E) => E.selected).some((E) => !E.unread))),
          i.$$.dirty[0] & 2 &&
            U.theme &&
            (U.theme.startsWith(".") || U.theme.startsWith("http")
              ? t(16, (Ht = U.theme))
              : U.theme &&
                t(
                  16,
                  (Ht = `https://unpkg.com/@nylas/components-mailbox@${Kd.version}/themes/${U.theme}.css`),
                ));
      }),
      (e = ve(e)),
      [
        I,
        U,
        ke,
        R,
        Xe,
        se,
        te,
        _e,
        De,
        Ee,
        Pe,
        q,
        ue,
        be,
        Ye,
        St,
        Ht,
        Je,
        pt,
        Dt,
        si,
        ci,
        di,
        Hi,
        yt,
        Ci,
        Rt,
        Xt,
        fi,
        Ai,
        qt,
        zi,
        b,
        _,
        O,
        P,
        C,
        N,
        oe,
        le,
        ee,
        Z,
        X,
        L,
        x,
        Oe,
        Ne,
        ye,
        Ut,
        G,
        c,
        d,
        m,
        Le,
        H,
        ge,
        M,
        qe,
        Ze,
        s,
        Vi,
        ui,
        gt,
        Ot,
        mi,
        Si,
        Oi,
        Li,
        Mi,
      ]
    );
  }
  class ga extends Jt {
    constructor(e) {
      super();
      (this.shadowRoot.innerHTML = `<style>@charset "UTF-8";*{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;list-style:none}main{--black:#161717;--grey-dark:#636671;--grey:#bdc0cb;--grey-lighter:#dfe1e8;--grey-dark-warm:#9fa4b5;--grey-lightest:#f7f7f8;--grey-background:#f0f1f5;--white:#ffffff;--blue:#314fa9;--blue-lighter:#f0f3ff;--red:#ee3248;--red-lighter:#ffeef0;--fs-12:0.75rem;--fs-14:0.875rem;--fs-16:1rem;--black-90:#2c2e2e;--grey-light:#f7f7f8;--grey-warm:#cbcbcb}.overlay{background:rgba(0, 0, 0, 0.5);position:fixed;top:0;left:0;width:100%;height:100%;z-index:var(--z-index-overlay, 1001);overflow-x:hidden;overflow-y:auto;display:grid;justify-content:center;align-items:center}.overlay .modal{position:relative;width:calc(100% - 5rem);margin:1rem;z-index:var(--z-index-modal, 1002);background-color:white;padding:1.5rem;display:flex;align-items:center;flex-direction:column}.overlay .modal .title{font-family:sans-serif;font-style:normal;font-weight:bold;font-size:20px;line-height:28px;display:flex;align-items:center;color:var(--black)}.overlay .modal .description{font-family:sans-serif;font-style:normal;font-weight:normal;font-size:16px;line-height:24px;color:#636671;margin-top:0.5rem}.overlay .modal .footer{width:100%;display:flex;justify-content:flex-start;align-items:center;gap:0.75rem;margin-top:1.5rem}.overlay .modal .footer button{display:flex;justify-content:center;align-items:center;font-family:sans-serif;border-radius:4px;padding:0.5rem 1rem;cursor:pointer}.overlay .modal .footer button.danger{background:#ee3248;color:white}.overlay .modal .footer button.cancel{background:transparent}@media(min-width: 640px){.overlay .modal{width:365px}.overlay .modal .footer{width:inherit}}main{height:100%;width:100%;position:relative;display:grid;grid-auto-rows:max-content;font-family:var(--nylas-mailbox-font-family, -apple-system, BlinkMacSystemFont, sans-serif)}main.empty{grid-template-rows:68px 33.5px minmax(auto, calc(100vh - 117.5px))}main.empty ul{height:100%}main header{border:1px solid var(--nylas-mailbox-border-color, var(--grey-lighter));display:flex;align-items:center;padding:24px 16px;gap:8px;border-bottom:none;border-radius:4px 4px 0 0;font-weight:bold;background:var(--nylas-mailbox-header-background, white);color:var(--nylas-email-subject-color, black);background-color:#fff}main header button svg{fill:var(--nylas-email-subject-color, black)}main header button svg.refreshing{animation:rotate 1s linear infinite}main button{background:none;display:flex;cursor:pointer}main [role=toolbar]{border:1px solid var(--nylas-mailbox-border-color, var(--grey-lighter));display:flex;align-items:center;padding:24px 16px;gap:8px;border-bottom:0.5px solid var(--nylas-mailbox-border-color, var(--grey-lighter));background:var(--nylas-mailbox-toolbar-background, white);padding:0.5rem 1rem;gap:1rem;min-height:24px;background-color:#fff}main [role=toolbar] .thread-checkbox{display:flex}main [role=toolbar] button[disabled] svg{fill:var(--grey)}main [role=toolbar] button svg{fill:var(--nylas-email-action-icons-color, var(--grey-dark))}main .thread-checkbox input{padding:4px 2px 2px 2px;width:1rem;height:1rem;background:var(--grey-lighter);border-radius:4px;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;-o-appearance:none;appearance:none;transition-duration:0.3s}main .thread-checkbox input:hover{background:var(--grey-light)}main .thread-checkbox input:checked{background:var(--nylas-mailbox-checkedbox-active-color, var(--blue))}main .thread-checkbox input:checked::before{content:" ";background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 10 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.66344 0.0402832L9.98373 1.36062L3.80759 7.53676L0 3.72925L1.32029 2.40891L3.80759 4.89613L8.66344 0.0402832Z' fill='white'/%3E%3C/svg%3E%0A");height:100%;width:100%;background-repeat:no-repeat;background-size:contain;display:block;text-align:center}main .thread-checkbox input:disabled{cursor:not-allowed}main div.starred{position:relative;display:flex;justify-content:center;align-items:center}main div.starred button{background-color:transparent;cursor:pointer}main div.starred button:before{content:"\u2605";display:inline-block;font-size:1em;color:var(--nylas-email-star-button-disabled-color, var(--grey));-webkit-user-select:none;-moz-user-select:none;user-select:none}main div.starred button:not([disabled]):before,main div.starred button svg{color:var(--nylas-email-star-button-inactive-color, #8d94a5)}main div.starred button:not([disabled]).starred:before{color:var(--nylas-email-star-button-active-color, #ffc107)}main #mailboxlist li{display:grid;grid-template-columns:auto 1fr;align-items:center;justify-content:left;position:relative;--nylas-email-border-style:none !important;border-top:0.5px solid var(--nylas-mailbox-vertical-border-color, var(--nylas-mailbox-border-color, var(--grey-lighter)));border-bottom:0.5px solid var(--nylas-mailbox-vertical-border-color, var(--nylas-mailbox-border-color, var(--grey-lighter)));border-left:1px solid var(--nylas-mailbox-horizontal-border-color, var(--nylas-mailbox-border-color, var(--grey-lighter)));border-right:1px solid var(--nylas-mailbox-horizontal-border-color, var(--nylas-mailbox-border-color, var(--grey-lighter)));--nylas-email-background:transparent;--nylas-email-unread-background:#fff}main #mailboxlist li .checkbox-container.thread-checkbox{padding:1rem 0 0 1rem;align-self:baseline}main #mailboxlist li:hover{box-shadow:inset 1px 0 0 var(--nylas-mailbox-hover-shadow-color, var(--grey-warm)), inset -1px 0 0 var(--nylas-mailbox-hover-shadow-color, var(--grey-warm)), 0 1px 2px 0 rgba(44, 46, 46, 0.2), 0 1px 3px 1px rgba(44, 46, 46, 0.05);border-color:var(--nylas-mailbox-hover-shadow-color, var(--grey-warm));cursor:pointer;z-index:1}main #mailboxlist li:not(.unread){background:var(--nylas-mailbox-read-background, var(--grey-lightest))}main #mailboxlist li.unread{background:var(--nylas-mailbox-unread-background, white)}main #mailboxlist li.no-messages{background:var(--grey-lighter)}main #mailboxlist li.no-messages .thread-checkbox input{background:var(--grey-dark-warm)}main #mailboxlist li.checked{border-left:4px solid var(--nylas-mailbox-checked-border-color, var(--blue));background:var(--nylas-mailbox-checked-bg-color, var(--blue-lighter))}main #mailboxlist li.checked .checkbox-container.thread-checkbox{padding-left:13px}ul::before{z-index:1}ul.deleting,ul.refreshing{position:relative}@keyframes progress{0%{width:0}100%{width:100%}}ul.refreshing::after{background-color:var(--blue-lighter);z-index:-1}ul.refreshing::before{animation:progress 2s ease-in-out infinite;background-color:var(--blue)}ul.refreshing::before,ul.refreshing::after{top:0;left:0;content:"";display:block;height:4px;position:absolute}@keyframes progress{0%{width:0}100%{width:100%}}ul.deleting::after{background-color:var(--red-lighter);z-index:-1}ul.deleting::before{animation:progress 2s ease-in-out infinite;background-color:var(--red)}ul.deleting::before,ul.deleting::after{top:0;left:0;content:"";display:block;height:4px;position:absolute}.checkbox-container{padding:4px}.mailbox-empty{height:100%}.mailbox-loader,.mailbox-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:none}@keyframes rotate{to{transform:rotate(360deg)}}@media(min-width: 640px){main #mailboxlist li .checkbox-container.thread-checkbox{padding:0.6rem 0 0 1rem;display:flex;min-height:2rem;align-items:center}main div.starred button:hover:before{color:var(--nylas-email-star-button-active-color, #ffc107)}}</style>`),
        We(
          this,
          {
            target: this.shadowRoot,
            props: ni(this.attributes),
            customElement: !0,
          },
          cf,
          sf,
          Ue,
          {
            id: 32,
            access_token: 33,
            actions_bar: 34,
            all_threads: 35,
            thread_ids: 36,
            header: 0,
            items_per_page: 37,
            keyword_to_search: 38,
            onSelectThread: 39,
            query_string: 40,
            show_star: 41,
            show_thread_checkbox: 42,
            show_reply: 43,
            show_reply_all: 44,
            show_forward: 45,
            theme: 46,
            thread_click_action: 47,
            sentMessageUpdate: 48,
            draftMessageUpdate: 49,
          },
          null,
          [-1, -1, -1, -1],
        ),
        e &&
          (e.target && g(e.target, this, e.anchor),
          e.props && (this.$set(e.props), re()));
    }
    static get observedAttributes() {
      return [
        "id",
        "access_token",
        "actions_bar",
        "all_threads",
        "thread_ids",
        "header",
        "items_per_page",
        "keyword_to_search",
        "onSelectThread",
        "query_string",
        "show_star",
        "show_thread_checkbox",
        "show_reply",
        "show_reply_all",
        "show_forward",
        "theme",
        "thread_click_action",
        "sentMessageUpdate",
        "draftMessageUpdate",
      ];
    }
    get id() {
      return this.$$.ctx[32];
    }
    set id(e) {
      this.$$set({ id: e }), re();
    }
    get access_token() {
      return this.$$.ctx[33];
    }
    set access_token(e) {
      this.$$set({ access_token: e }), re();
    }
    get actions_bar() {
      return this.$$.ctx[34];
    }
    set actions_bar(e) {
      this.$$set({ actions_bar: e }), re();
    }
    get all_threads() {
      return this.$$.ctx[35];
    }
    set all_threads(e) {
      this.$$set({ all_threads: e }), re();
    }
    get thread_ids() {
      return this.$$.ctx[36];
    }
    set thread_ids(e) {
      this.$$set({ thread_ids: e }), re();
    }
    get header() {
      return this.$$.ctx[0];
    }
    set header(e) {
      this.$$set({ header: e }), re();
    }
    get items_per_page() {
      return this.$$.ctx[37];
    }
    set items_per_page(e) {
      this.$$set({ items_per_page: e }), re();
    }
    get keyword_to_search() {
      return this.$$.ctx[38];
    }
    set keyword_to_search(e) {
      this.$$set({ keyword_to_search: e }), re();
    }
    get onSelectThread() {
      return this.$$.ctx[39];
    }
    set onSelectThread(e) {
      this.$$set({ onSelectThread: e }), re();
    }
    get query_string() {
      return this.$$.ctx[40];
    }
    set query_string(e) {
      this.$$set({ query_string: e }), re();
    }
    get show_star() {
      return this.$$.ctx[41];
    }
    set show_star(e) {
      this.$$set({ show_star: e }), re();
    }
    get show_thread_checkbox() {
      return this.$$.ctx[42];
    }
    set show_thread_checkbox(e) {
      this.$$set({ show_thread_checkbox: e }), re();
    }
    get show_reply() {
      return this.$$.ctx[43];
    }
    set show_reply(e) {
      this.$$set({ show_reply: e }), re();
    }
    get show_reply_all() {
      return this.$$.ctx[44];
    }
    set show_reply_all(e) {
      this.$$set({ show_reply_all: e }), re();
    }
    get show_forward() {
      return this.$$.ctx[45];
    }
    set show_forward(e) {
      this.$$set({ show_forward: e }), re();
    }
    get theme() {
      return this.$$.ctx[46];
    }
    set theme(e) {
      this.$$set({ theme: e }), re();
    }
    get thread_click_action() {
      return this.$$.ctx[47];
    }
    set thread_click_action(e) {
      this.$$set({ thread_click_action: e }), re();
    }
    get sentMessageUpdate() {
      return this.$$.ctx[48];
    }
    get draftMessageUpdate() {
      return this.$$.ctx[49];
    }
  }
  return customElements.define("nylas-mailbox", ga), ga;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbW1vbnMvc3JjL2RlZmluZS1jb21wb25lbnQtcGF0Y2gudHMiLCIuLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL2ludGVybmFsL2luZGV4Lm1qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvc3RvcmUvaW5kZXgubWpzIiwiLi4vLi4vY29tbW9ucy9zcmMvc3RvcmUvZXJyb3IudHMiLCIuLi8uLi9jb21tb25zL3NyYy9tZXRob2RzL2FwaS50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL2Nvbm5lY3Rpb25zL2NvbnRhY3RzLnRzIiwiLi4vLi4vY29tbW9ucy9zcmMvY29ubmVjdGlvbnMvdGhyZWFkcy50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL2Nvbm5lY3Rpb25zL21hbmlmZXN0LnRzIiwiLi4vLi4vY29tbW9ucy9zcmMvY29ubmVjdGlvbnMvbWVzc2FnZXMudHMiLCIuLi8uLi9jb21tb25zL3NyYy9jb25uZWN0aW9ucy9hY2NvdW50cy50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL2Nvbm5lY3Rpb25zL25ldXJhbC50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL2Nvbm5lY3Rpb25zL2F2YWlsYWJpbGl0eS50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL3N0b3JlL2F2YWlsYWJpbGl0eS50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL3N0b3JlL2NvbnNlY3V0aXZlLWF2YWlsYWJpbGl0eS50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL3N0b3JlL2NvbnRhY3RzLnRzIiwiLi4vLi4vY29tbW9ucy9zcmMvc3RvcmUvY29udGFjdC1hdmF0YXIudHMiLCIuLi8uLi9jb21tb25zL3NyYy9zdG9yZS9tYWlsYm94LnRzIiwiLi4vLi4vY29tbW9ucy9zcmMvc3RvcmUvbWFuaWZlc3QudHMiLCIuLi8uLi9jb21tb25zL3NyYy9jb25uZWN0aW9ucy9maWxlcy50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL2NvbnN0YW50cy9hdHRhY2htZW50LWNvbnRlbnQtdHlwZXMudHMiLCIuLi8uLi9jb21tb25zL3NyYy9zdG9yZS9maWxlcy50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL21ldGhvZHMvY29tcG9uZW50LnRzIiwiLi4vLi4vY29tbW9ucy9zcmMvY29tcG9uZW50cy9ORXJyb3Iuc3ZlbHRlIiwiLi4vLi4vY29tbW9ucy9zcmMvZW51bXMvTnlsYXMudHMiLCIuLi8uLi9jb21tb25zL3NyYy9jb25uZWN0aW9ucy9mb2xkZXJzLnRzIiwiLi4vLi4vY29tbW9ucy9zcmMvc3RvcmUvZm9sZGVycy50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL2Nvbm5lY3Rpb25zL2xhYmVscy50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL3N0b3JlL2xhYmVscy50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL21ldGhvZHMvcGFydGljaXBhbnRzLnRzIiwiLi4vZW1haWwvc3JjL21ldGhvZHMvbGliLnRzIiwiLi4vZW1haWwvc3JjL2Fzc2V0cy9jaGV2cm9uLWRvd24uc3ZnIiwiLi4vZW1haWwvc3JjL2Fzc2V0cy90cmFzaC1hbHQuc3ZnIiwiLi4vZW1haWwvc3JjL2Fzc2V0cy9lbnZlbG9wZS1vcGVuLXRleHQuc3ZnIiwiLi4vZW1haWwvc3JjL2Fzc2V0cy9lbnZlbG9wZS5zdmciLCIuLi9lbWFpbC9zcmMvYXNzZXRzL2F0dGFjaG1lbnQuc3ZnIiwiLi4vZW1haWwvc3JjL2Fzc2V0cy9hcnJvdy1saW5lLnN2ZyIsIi4uL2VtYWlsL3NyYy9hc3NldHMvbm8tbWVzc2FnZXMuc3ZnIiwiLi4vZW1haWwvc3JjL2Fzc2V0cy9kcmFmdC5zdmciLCIuLi8uLi9jb21tb25zL3NyYy9jb21wb25lbnRzL0NvbnRhY3RJbWFnZS9Db250YWN0SW1hZ2Uuc3ZlbHRlIiwiLi4vLi4vY29tbW9ucy9zcmMvbWV0aG9kcy9pc0ZpbGVBbkF0dGFjaG1lbnQudHMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZG9tcHVyaWZ5L2Rpc3QvcHVyaWZ5LmpzIiwiLi4vLi4vY29tbW9ucy9zcmMvY29tcG9uZW50cy9NZXNzYWdlQm9keS5zdmVsdGUiLCIuLi8uLi9jb21tb25zL3NyYy9jb21wb25lbnRzL1Rvb2x0aXAuc3ZlbHRlIiwiLi4vZW1haWwvc3JjL2Fzc2V0cy9sb2FkaW5nLnN2ZyIsIi4uL2VtYWlsL3NyYy9hc3NldHMvcmVwbHkuc3ZnIiwiLi4vZW1haWwvc3JjL2Fzc2V0cy9yZXBseS1hbGwuc3ZnIiwiLi4vZW1haWwvc3JjL2Fzc2V0cy9mb3J3YXJkLnN2ZyIsIi4uL2VtYWlsL3NyYy9FbWFpbC5zdmVsdGUiLCJzcmMvYXNzZXRzL2VudmVsb3BlLW9wZW4tdGV4dC5zdmciLCJzcmMvYXNzZXRzL2VudmVsb3BlLnN2ZyIsInNyYy9hc3NldHMvbG9hZGluZy5zdmciLCJzcmMvYXNzZXRzL3RyYXNoLWFsdC5zdmciLCJzcmMvYXNzZXRzL2RvdWJsZS1sZWZ0LWFycm93LnN2ZyIsInNyYy9hc3NldHMvbGVmdC1hcnJvdy5zdmciLCJzcmMvYXNzZXRzL3JpZ2h0LWFycm93LnN2ZyIsInNyYy9hc3NldHMvZG91YmxlLXJpZ2h0LWFycm93LnN2ZyIsInNyYy9jb21wb25lbnRzL1BhZ2luYXRpb25OYXYuc3ZlbHRlIiwic3JjL01haWxib3guc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBvcmlnaW5hbERlZmluZSA9IHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUuYmluZChcbiAgd2luZG93LmN1c3RvbUVsZW1lbnRzLFxuKTtcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUgPSAobmFtZTogc3RyaW5nLCAuLi5hcmdzKSA9PiB7XG4gIGlmIChjdXN0b21FbGVtZW50cy5nZXQobmFtZSkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcmV0dXJuIG9yaWdpbmFsRGVmaW5lKG5hbWUsIC4uLmFyZ3MpO1xufTtcbiIsImZ1bmN0aW9uIG5vb3AoKSB7IH1cbmNvbnN0IGlkZW50aXR5ID0geCA9PiB4O1xuZnVuY3Rpb24gYXNzaWduKHRhciwgc3JjKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGZvciAoY29uc3QgayBpbiBzcmMpXG4gICAgICAgIHRhcltrXSA9IHNyY1trXTtcbiAgICByZXR1cm4gdGFyO1xufVxuZnVuY3Rpb24gaXNfcHJvbWlzZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gYWRkX2xvY2F0aW9uKGVsZW1lbnQsIGZpbGUsIGxpbmUsIGNvbHVtbiwgY2hhcikge1xuICAgIGVsZW1lbnQuX19zdmVsdGVfbWV0YSA9IHtcbiAgICAgICAgbG9jOiB7IGZpbGUsIGxpbmUsIGNvbHVtbiwgY2hhciB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJ1bihmbikge1xuICAgIHJldHVybiBmbigpO1xufVxuZnVuY3Rpb24gYmxhbmtfb2JqZWN0KCkge1xuICAgIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwpO1xufVxuZnVuY3Rpb24gcnVuX2FsbChmbnMpIHtcbiAgICBmbnMuZm9yRWFjaChydW4pO1xufVxuZnVuY3Rpb24gaXNfZnVuY3Rpb24odGhpbmcpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gc2FmZV9ub3RfZXF1YWwoYSwgYikge1xuICAgIHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiIHx8ICgoYSAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHx8IHR5cGVvZiBhID09PSAnZnVuY3Rpb24nKTtcbn1cbmxldCBzcmNfdXJsX2VxdWFsX2FuY2hvcjtcbmZ1bmN0aW9uIHNyY191cmxfZXF1YWwoZWxlbWVudF9zcmMsIHVybCkge1xuICAgIGlmICghc3JjX3VybF9lcXVhbF9hbmNob3IpIHtcbiAgICAgICAgc3JjX3VybF9lcXVhbF9hbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgfVxuICAgIHNyY191cmxfZXF1YWxfYW5jaG9yLmhyZWYgPSB1cmw7XG4gICAgcmV0dXJuIGVsZW1lbnRfc3JjID09PSBzcmNfdXJsX2VxdWFsX2FuY2hvci5ocmVmO1xufVxuZnVuY3Rpb24gbm90X2VxdWFsKGEsIGIpIHtcbiAgICByZXR1cm4gYSAhPSBhID8gYiA9PSBiIDogYSAhPT0gYjtcbn1cbmZ1bmN0aW9uIGlzX2VtcHR5KG9iaikge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX3N0b3JlKHN0b3JlLCBuYW1lKSB7XG4gICAgaWYgKHN0b3JlICE9IG51bGwgJiYgdHlwZW9mIHN0b3JlLnN1YnNjcmliZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCcke25hbWV9JyBpcyBub3QgYSBzdG9yZSB3aXRoIGEgJ3N1YnNjcmliZScgbWV0aG9kYCk7XG4gICAgfVxufVxuZnVuY3Rpb24gc3Vic2NyaWJlKHN0b3JlLCAuLi5jYWxsYmFja3MpIHtcbiAgICBpZiAoc3RvcmUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbm9vcDtcbiAgICB9XG4gICAgY29uc3QgdW5zdWIgPSBzdG9yZS5zdWJzY3JpYmUoLi4uY2FsbGJhY2tzKTtcbiAgICByZXR1cm4gdW5zdWIudW5zdWJzY3JpYmUgPyAoKSA9PiB1bnN1Yi51bnN1YnNjcmliZSgpIDogdW5zdWI7XG59XG5mdW5jdGlvbiBnZXRfc3RvcmVfdmFsdWUoc3RvcmUpIHtcbiAgICBsZXQgdmFsdWU7XG4gICAgc3Vic2NyaWJlKHN0b3JlLCBfID0+IHZhbHVlID0gXykoKTtcbiAgICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBjb21wb25lbnRfc3Vic2NyaWJlKGNvbXBvbmVudCwgc3RvcmUsIGNhbGxiYWNrKSB7XG4gICAgY29tcG9uZW50LiQkLm9uX2Rlc3Ryb3kucHVzaChzdWJzY3JpYmUoc3RvcmUsIGNhbGxiYWNrKSk7XG59XG5mdW5jdGlvbiBjcmVhdGVfc2xvdChkZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGZuKSB7XG4gICAgaWYgKGRlZmluaXRpb24pIHtcbiAgICAgICAgY29uc3Qgc2xvdF9jdHggPSBnZXRfc2xvdF9jb250ZXh0KGRlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZm4pO1xuICAgICAgICByZXR1cm4gZGVmaW5pdGlvblswXShzbG90X2N0eCk7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0X3Nsb3RfY29udGV4dChkZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGZuKSB7XG4gICAgcmV0dXJuIGRlZmluaXRpb25bMV0gJiYgZm5cbiAgICAgICAgPyBhc3NpZ24oJCRzY29wZS5jdHguc2xpY2UoKSwgZGVmaW5pdGlvblsxXShmbihjdHgpKSlcbiAgICAgICAgOiAkJHNjb3BlLmN0eDtcbn1cbmZ1bmN0aW9uIGdldF9zbG90X2NoYW5nZXMoZGVmaW5pdGlvbiwgJCRzY29wZSwgZGlydHksIGZuKSB7XG4gICAgaWYgKGRlZmluaXRpb25bMl0gJiYgZm4pIHtcbiAgICAgICAgY29uc3QgbGV0cyA9IGRlZmluaXRpb25bMl0oZm4oZGlydHkpKTtcbiAgICAgICAgaWYgKCQkc2NvcGUuZGlydHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGxldHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBsZXRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY29uc3QgbWVyZ2VkID0gW107XG4gICAgICAgICAgICBjb25zdCBsZW4gPSBNYXRoLm1heCgkJHNjb3BlLmRpcnR5Lmxlbmd0aCwgbGV0cy5sZW5ndGgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIG1lcmdlZFtpXSA9ICQkc2NvcGUuZGlydHlbaV0gfCBsZXRzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1lcmdlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJCRzY29wZS5kaXJ0eSB8IGxldHM7XG4gICAgfVxuICAgIHJldHVybiAkJHNjb3BlLmRpcnR5O1xufVxuZnVuY3Rpb24gdXBkYXRlX3Nsb3RfYmFzZShzbG90LCBzbG90X2RlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgc2xvdF9jaGFuZ2VzLCBnZXRfc2xvdF9jb250ZXh0X2ZuKSB7XG4gICAgaWYgKHNsb3RfY2hhbmdlcykge1xuICAgICAgICBjb25zdCBzbG90X2NvbnRleHQgPSBnZXRfc2xvdF9jb250ZXh0KHNsb3RfZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBnZXRfc2xvdF9jb250ZXh0X2ZuKTtcbiAgICAgICAgc2xvdC5wKHNsb3RfY29udGV4dCwgc2xvdF9jaGFuZ2VzKTtcbiAgICB9XG59XG5mdW5jdGlvbiB1cGRhdGVfc2xvdChzbG90LCBzbG90X2RlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZGlydHksIGdldF9zbG90X2NoYW5nZXNfZm4sIGdldF9zbG90X2NvbnRleHRfZm4pIHtcbiAgICBjb25zdCBzbG90X2NoYW5nZXMgPSBnZXRfc2xvdF9jaGFuZ2VzKHNsb3RfZGVmaW5pdGlvbiwgJCRzY29wZSwgZGlydHksIGdldF9zbG90X2NoYW5nZXNfZm4pO1xuICAgIHVwZGF0ZV9zbG90X2Jhc2Uoc2xvdCwgc2xvdF9kZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIHNsb3RfY2hhbmdlcywgZ2V0X3Nsb3RfY29udGV4dF9mbik7XG59XG5mdW5jdGlvbiBnZXRfYWxsX2RpcnR5X2Zyb21fc2NvcGUoJCRzY29wZSkge1xuICAgIGlmICgkJHNjb3BlLmN0eC5sZW5ndGggPiAzMikge1xuICAgICAgICBjb25zdCBkaXJ0eSA9IFtdO1xuICAgICAgICBjb25zdCBsZW5ndGggPSAkJHNjb3BlLmN0eC5sZW5ndGggLyAzMjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGlydHlbaV0gPSAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGlydHk7XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cbmZ1bmN0aW9uIGV4Y2x1ZGVfaW50ZXJuYWxfcHJvcHMocHJvcHMpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGsgaW4gcHJvcHMpXG4gICAgICAgIGlmIChrWzBdICE9PSAnJCcpXG4gICAgICAgICAgICByZXN1bHRba10gPSBwcm9wc1trXTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gY29tcHV0ZV9yZXN0X3Byb3BzKHByb3BzLCBrZXlzKSB7XG4gICAgY29uc3QgcmVzdCA9IHt9O1xuICAgIGtleXMgPSBuZXcgU2V0KGtleXMpO1xuICAgIGZvciAoY29uc3QgayBpbiBwcm9wcylcbiAgICAgICAgaWYgKCFrZXlzLmhhcyhrKSAmJiBrWzBdICE9PSAnJCcpXG4gICAgICAgICAgICByZXN0W2tdID0gcHJvcHNba107XG4gICAgcmV0dXJuIHJlc3Q7XG59XG5mdW5jdGlvbiBjb21wdXRlX3Nsb3RzKHNsb3RzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc2xvdHMpIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gb25jZShmbikge1xuICAgIGxldCByYW4gPSBmYWxzZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKHJhbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgcmFuID0gdHJ1ZTtcbiAgICAgICAgZm4uY2FsbCh0aGlzLCAuLi5hcmdzKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gbnVsbF90b19lbXB0eSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHNldF9zdG9yZV92YWx1ZShzdG9yZSwgcmV0LCB2YWx1ZSkge1xuICAgIHN0b3JlLnNldCh2YWx1ZSk7XG4gICAgcmV0dXJuIHJldDtcbn1cbmNvbnN0IGhhc19wcm9wID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG5mdW5jdGlvbiBhY3Rpb25fZGVzdHJveWVyKGFjdGlvbl9yZXN1bHQpIHtcbiAgICByZXR1cm4gYWN0aW9uX3Jlc3VsdCAmJiBpc19mdW5jdGlvbihhY3Rpb25fcmVzdWx0LmRlc3Ryb3kpID8gYWN0aW9uX3Jlc3VsdC5kZXN0cm95IDogbm9vcDtcbn1cblxuY29uc3QgaXNfY2xpZW50ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5sZXQgbm93ID0gaXNfY2xpZW50XG4gICAgPyAoKSA9PiB3aW5kb3cucGVyZm9ybWFuY2Uubm93KClcbiAgICA6ICgpID0+IERhdGUubm93KCk7XG5sZXQgcmFmID0gaXNfY2xpZW50ID8gY2IgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNiKSA6IG5vb3A7XG4vLyB1c2VkIGludGVybmFsbHkgZm9yIHRlc3RpbmdcbmZ1bmN0aW9uIHNldF9ub3coZm4pIHtcbiAgICBub3cgPSBmbjtcbn1cbmZ1bmN0aW9uIHNldF9yYWYoZm4pIHtcbiAgICByYWYgPSBmbjtcbn1cblxuY29uc3QgdGFza3MgPSBuZXcgU2V0KCk7XG5mdW5jdGlvbiBydW5fdGFza3Mobm93KSB7XG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgaWYgKCF0YXNrLmMobm93KSkge1xuICAgICAgICAgICAgdGFza3MuZGVsZXRlKHRhc2spO1xuICAgICAgICAgICAgdGFzay5mKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodGFza3Muc2l6ZSAhPT0gMClcbiAgICAgICAgcmFmKHJ1bl90YXNrcyk7XG59XG4vKipcbiAqIEZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkhXG4gKi9cbmZ1bmN0aW9uIGNsZWFyX2xvb3BzKCkge1xuICAgIHRhc2tzLmNsZWFyKCk7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgdGFzayB0aGF0IHJ1bnMgb24gZWFjaCByYWYgZnJhbWVcbiAqIHVudGlsIGl0IHJldHVybnMgYSBmYWxzeSB2YWx1ZSBvciBpcyBhYm9ydGVkXG4gKi9cbmZ1bmN0aW9uIGxvb3AoY2FsbGJhY2spIHtcbiAgICBsZXQgdGFzaztcbiAgICBpZiAodGFza3Muc2l6ZSA9PT0gMClcbiAgICAgICAgcmFmKHJ1bl90YXNrcyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvbWlzZTogbmV3IFByb21pc2UoZnVsZmlsbCA9PiB7XG4gICAgICAgICAgICB0YXNrcy5hZGQodGFzayA9IHsgYzogY2FsbGJhY2ssIGY6IGZ1bGZpbGwgfSk7XG4gICAgICAgIH0pLFxuICAgICAgICBhYm9ydCgpIHtcbiAgICAgICAgICAgIHRhc2tzLmRlbGV0ZSh0YXNrKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIFRyYWNrIHdoaWNoIG5vZGVzIGFyZSBjbGFpbWVkIGR1cmluZyBoeWRyYXRpb24uIFVuY2xhaW1lZCBub2RlcyBjYW4gdGhlbiBiZSByZW1vdmVkIGZyb20gdGhlIERPTVxuLy8gYXQgdGhlIGVuZCBvZiBoeWRyYXRpb24gd2l0aG91dCB0b3VjaGluZyB0aGUgcmVtYWluaW5nIG5vZGVzLlxubGV0IGlzX2h5ZHJhdGluZyA9IGZhbHNlO1xuZnVuY3Rpb24gc3RhcnRfaHlkcmF0aW5nKCkge1xuICAgIGlzX2h5ZHJhdGluZyA9IHRydWU7XG59XG5mdW5jdGlvbiBlbmRfaHlkcmF0aW5nKCkge1xuICAgIGlzX2h5ZHJhdGluZyA9IGZhbHNlO1xufVxuZnVuY3Rpb24gdXBwZXJfYm91bmQobG93LCBoaWdoLCBrZXksIHZhbHVlKSB7XG4gICAgLy8gUmV0dXJuIGZpcnN0IGluZGV4IG9mIHZhbHVlIGxhcmdlciB0aGFuIGlucHV0IHZhbHVlIGluIHRoZSByYW5nZSBbbG93LCBoaWdoKVxuICAgIHdoaWxlIChsb3cgPCBoaWdoKSB7XG4gICAgICAgIGNvbnN0IG1pZCA9IGxvdyArICgoaGlnaCAtIGxvdykgPj4gMSk7XG4gICAgICAgIGlmIChrZXkobWlkKSA8PSB2YWx1ZSkge1xuICAgICAgICAgICAgbG93ID0gbWlkICsgMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGhpZ2ggPSBtaWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxvdztcbn1cbmZ1bmN0aW9uIGluaXRfaHlkcmF0ZSh0YXJnZXQpIHtcbiAgICBpZiAodGFyZ2V0Lmh5ZHJhdGVfaW5pdClcbiAgICAgICAgcmV0dXJuO1xuICAgIHRhcmdldC5oeWRyYXRlX2luaXQgPSB0cnVlO1xuICAgIC8vIFdlIGtub3cgdGhhdCBhbGwgY2hpbGRyZW4gaGF2ZSBjbGFpbV9vcmRlciB2YWx1ZXMgc2luY2UgdGhlIHVuY2xhaW1lZCBoYXZlIGJlZW4gZGV0YWNoZWQgaWYgdGFyZ2V0IGlzIG5vdCA8aGVhZD5cbiAgICBsZXQgY2hpbGRyZW4gPSB0YXJnZXQuY2hpbGROb2RlcztcbiAgICAvLyBJZiB0YXJnZXQgaXMgPGhlYWQ+LCB0aGVyZSBtYXkgYmUgY2hpbGRyZW4gd2l0aG91dCBjbGFpbV9vcmRlclxuICAgIGlmICh0YXJnZXQubm9kZU5hbWUgPT09ICdIRUFEJykge1xuICAgICAgICBjb25zdCBteUNoaWxkcmVuID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmIChub2RlLmNsYWltX29yZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBteUNoaWxkcmVuLnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGRyZW4gPSBteUNoaWxkcmVuO1xuICAgIH1cbiAgICAvKlxuICAgICogUmVvcmRlciBjbGFpbWVkIGNoaWxkcmVuIG9wdGltYWxseS5cbiAgICAqIFdlIGNhbiByZW9yZGVyIGNsYWltZWQgY2hpbGRyZW4gb3B0aW1hbGx5IGJ5IGZpbmRpbmcgdGhlIGxvbmdlc3Qgc3Vic2VxdWVuY2Ugb2ZcbiAgICAqIG5vZGVzIHRoYXQgYXJlIGFscmVhZHkgY2xhaW1lZCBpbiBvcmRlciBhbmQgb25seSBtb3ZpbmcgdGhlIHJlc3QuIFRoZSBsb25nZXN0XG4gICAgKiBzdWJzZXF1ZW5jZSBzdWJzZXF1ZW5jZSBvZiBub2RlcyB0aGF0IGFyZSBjbGFpbWVkIGluIG9yZGVyIGNhbiBiZSBmb3VuZCBieVxuICAgICogY29tcHV0aW5nIHRoZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2Ugb2YgLmNsYWltX29yZGVyIHZhbHVlcy5cbiAgICAqXG4gICAgKiBUaGlzIGFsZ29yaXRobSBpcyBvcHRpbWFsIGluIGdlbmVyYXRpbmcgdGhlIGxlYXN0IGFtb3VudCBvZiByZW9yZGVyIG9wZXJhdGlvbnNcbiAgICAqIHBvc3NpYmxlLlxuICAgICpcbiAgICAqIFByb29mOlxuICAgICogV2Uga25vdyB0aGF0LCBnaXZlbiBhIHNldCBvZiByZW9yZGVyaW5nIG9wZXJhdGlvbnMsIHRoZSBub2RlcyB0aGF0IGRvIG5vdCBtb3ZlXG4gICAgKiBhbHdheXMgZm9ybSBhbiBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlLCBzaW5jZSB0aGV5IGRvIG5vdCBtb3ZlIGFtb25nIGVhY2ggb3RoZXJcbiAgICAqIG1lYW5pbmcgdGhhdCB0aGV5IG11c3QgYmUgYWxyZWFkeSBvcmRlcmVkIGFtb25nIGVhY2ggb3RoZXIuIFRodXMsIHRoZSBtYXhpbWFsXG4gICAgKiBzZXQgb2Ygbm9kZXMgdGhhdCBkbyBub3QgbW92ZSBmb3JtIGEgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlLlxuICAgICovXG4gICAgLy8gQ29tcHV0ZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2VcbiAgICAvLyBtOiBzdWJzZXF1ZW5jZSBsZW5ndGggaiA9PiBpbmRleCBrIG9mIHNtYWxsZXN0IHZhbHVlIHRoYXQgZW5kcyBhbiBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIG9mIGxlbmd0aCBqXG4gICAgY29uc3QgbSA9IG5ldyBJbnQzMkFycmF5KGNoaWxkcmVuLmxlbmd0aCArIDEpO1xuICAgIC8vIFByZWRlY2Vzc29yIGluZGljZXMgKyAxXG4gICAgY29uc3QgcCA9IG5ldyBJbnQzMkFycmF5KGNoaWxkcmVuLmxlbmd0aCk7XG4gICAgbVswXSA9IC0xO1xuICAgIGxldCBsb25nZXN0ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBjaGlsZHJlbltpXS5jbGFpbV9vcmRlcjtcbiAgICAgICAgLy8gRmluZCB0aGUgbGFyZ2VzdCBzdWJzZXF1ZW5jZSBsZW5ndGggc3VjaCB0aGF0IGl0IGVuZHMgaW4gYSB2YWx1ZSBsZXNzIHRoYW4gb3VyIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgLy8gdXBwZXJfYm91bmQgcmV0dXJucyBmaXJzdCBncmVhdGVyIHZhbHVlLCBzbyB3ZSBzdWJ0cmFjdCBvbmVcbiAgICAgICAgLy8gd2l0aCBmYXN0IHBhdGggZm9yIHdoZW4gd2UgYXJlIG9uIHRoZSBjdXJyZW50IGxvbmdlc3Qgc3Vic2VxdWVuY2VcbiAgICAgICAgY29uc3Qgc2VxTGVuID0gKChsb25nZXN0ID4gMCAmJiBjaGlsZHJlblttW2xvbmdlc3RdXS5jbGFpbV9vcmRlciA8PSBjdXJyZW50KSA/IGxvbmdlc3QgKyAxIDogdXBwZXJfYm91bmQoMSwgbG9uZ2VzdCwgaWR4ID0+IGNoaWxkcmVuW21baWR4XV0uY2xhaW1fb3JkZXIsIGN1cnJlbnQpKSAtIDE7XG4gICAgICAgIHBbaV0gPSBtW3NlcUxlbl0gKyAxO1xuICAgICAgICBjb25zdCBuZXdMZW4gPSBzZXFMZW4gKyAxO1xuICAgICAgICAvLyBXZSBjYW4gZ3VhcmFudGVlIHRoYXQgY3VycmVudCBpcyB0aGUgc21hbGxlc3QgdmFsdWUuIE90aGVyd2lzZSwgd2Ugd291bGQgaGF2ZSBnZW5lcmF0ZWQgYSBsb25nZXIgc2VxdWVuY2UuXG4gICAgICAgIG1bbmV3TGVuXSA9IGk7XG4gICAgICAgIGxvbmdlc3QgPSBNYXRoLm1heChuZXdMZW4sIGxvbmdlc3QpO1xuICAgIH1cbiAgICAvLyBUaGUgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIG9mIG5vZGVzIChpbml0aWFsbHkgcmV2ZXJzZWQpXG4gICAgY29uc3QgbGlzID0gW107XG4gICAgLy8gVGhlIHJlc3Qgb2YgdGhlIG5vZGVzLCBub2RlcyB0aGF0IHdpbGwgYmUgbW92ZWRcbiAgICBjb25zdCB0b01vdmUgPSBbXTtcbiAgICBsZXQgbGFzdCA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7XG4gICAgZm9yIChsZXQgY3VyID0gbVtsb25nZXN0XSArIDE7IGN1ciAhPSAwOyBjdXIgPSBwW2N1ciAtIDFdKSB7XG4gICAgICAgIGxpcy5wdXNoKGNoaWxkcmVuW2N1ciAtIDFdKTtcbiAgICAgICAgZm9yICg7IGxhc3QgPj0gY3VyOyBsYXN0LS0pIHtcbiAgICAgICAgICAgIHRvTW92ZS5wdXNoKGNoaWxkcmVuW2xhc3RdKTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0LS07XG4gICAgfVxuICAgIGZvciAoOyBsYXN0ID49IDA7IGxhc3QtLSkge1xuICAgICAgICB0b01vdmUucHVzaChjaGlsZHJlbltsYXN0XSk7XG4gICAgfVxuICAgIGxpcy5yZXZlcnNlKCk7XG4gICAgLy8gV2Ugc29ydCB0aGUgbm9kZXMgYmVpbmcgbW92ZWQgdG8gZ3VhcmFudGVlIHRoYXQgdGhlaXIgaW5zZXJ0aW9uIG9yZGVyIG1hdGNoZXMgdGhlIGNsYWltIG9yZGVyXG4gICAgdG9Nb3ZlLnNvcnQoKGEsIGIpID0+IGEuY2xhaW1fb3JkZXIgLSBiLmNsYWltX29yZGVyKTtcbiAgICAvLyBGaW5hbGx5LCB3ZSBtb3ZlIHRoZSBub2Rlc1xuICAgIGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IHRvTW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB3aGlsZSAoaiA8IGxpcy5sZW5ndGggJiYgdG9Nb3ZlW2ldLmNsYWltX29yZGVyID49IGxpc1tqXS5jbGFpbV9vcmRlcikge1xuICAgICAgICAgICAgaisrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFuY2hvciA9IGogPCBsaXMubGVuZ3RoID8gbGlzW2pdIDogbnVsbDtcbiAgICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZSh0b01vdmVbaV0sIGFuY2hvcik7XG4gICAgfVxufVxuZnVuY3Rpb24gYXBwZW5kKHRhcmdldCwgbm9kZSkge1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcbn1cbmZ1bmN0aW9uIGFwcGVuZF9zdHlsZXModGFyZ2V0LCBzdHlsZV9zaGVldF9pZCwgc3R5bGVzKSB7XG4gICAgY29uc3QgYXBwZW5kX3N0eWxlc190byA9IGdldF9yb290X2Zvcl9zdHlsZSh0YXJnZXQpO1xuICAgIGlmICghYXBwZW5kX3N0eWxlc190by5nZXRFbGVtZW50QnlJZChzdHlsZV9zaGVldF9pZCkpIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBlbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBzdHlsZS5pZCA9IHN0eWxlX3NoZWV0X2lkO1xuICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IHN0eWxlcztcbiAgICAgICAgYXBwZW5kX3N0eWxlc2hlZXQoYXBwZW5kX3N0eWxlc190bywgc3R5bGUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldF9yb290X2Zvcl9zdHlsZShub2RlKSB7XG4gICAgaWYgKCFub2RlKVxuICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgY29uc3Qgcm9vdCA9IG5vZGUuZ2V0Um9vdE5vZGUgPyBub2RlLmdldFJvb3ROb2RlKCkgOiBub2RlLm93bmVyRG9jdW1lbnQ7XG4gICAgaWYgKHJvb3QgJiYgcm9vdC5ob3N0KSB7XG4gICAgICAgIHJldHVybiByb290O1xuICAgIH1cbiAgICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50O1xufVxuZnVuY3Rpb24gYXBwZW5kX2VtcHR5X3N0eWxlc2hlZXQobm9kZSkge1xuICAgIGNvbnN0IHN0eWxlX2VsZW1lbnQgPSBlbGVtZW50KCdzdHlsZScpO1xuICAgIGFwcGVuZF9zdHlsZXNoZWV0KGdldF9yb290X2Zvcl9zdHlsZShub2RlKSwgc3R5bGVfZWxlbWVudCk7XG4gICAgcmV0dXJuIHN0eWxlX2VsZW1lbnQuc2hlZXQ7XG59XG5mdW5jdGlvbiBhcHBlbmRfc3R5bGVzaGVldChub2RlLCBzdHlsZSkge1xuICAgIGFwcGVuZChub2RlLmhlYWQgfHwgbm9kZSwgc3R5bGUpO1xufVxuZnVuY3Rpb24gYXBwZW5kX2h5ZHJhdGlvbih0YXJnZXQsIG5vZGUpIHtcbiAgICBpZiAoaXNfaHlkcmF0aW5nKSB7XG4gICAgICAgIGluaXRfaHlkcmF0ZSh0YXJnZXQpO1xuICAgICAgICBpZiAoKHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkID09PSB1bmRlZmluZWQpIHx8ICgodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgIT09IG51bGwpICYmICh0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZC5wYXJlbnRFbGVtZW50ICE9PSB0YXJnZXQpKSkge1xuICAgICAgICAgICAgdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPSB0YXJnZXQuZmlyc3RDaGlsZDtcbiAgICAgICAgfVxuICAgICAgICAvLyBTa2lwIG5vZGVzIG9mIHVuZGVmaW5lZCBvcmRlcmluZ1xuICAgICAgICB3aGlsZSAoKHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkICE9PSBudWxsKSAmJiAodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQuY2xhaW1fb3JkZXIgPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgIHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkID0gdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUgIT09IHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkKSB7XG4gICAgICAgICAgICAvLyBXZSBvbmx5IGluc2VydCBpZiB0aGUgb3JkZXJpbmcgb2YgdGhpcyBub2RlIHNob3VsZCBiZSBtb2RpZmllZCBvciB0aGUgcGFyZW50IG5vZGUgaXMgbm90IHRhcmdldFxuICAgICAgICAgICAgaWYgKG5vZGUuY2xhaW1fb3JkZXIgIT09IHVuZGVmaW5lZCB8fCBub2RlLnBhcmVudE5vZGUgIT09IHRhcmdldCkge1xuICAgICAgICAgICAgICAgIHRhcmdldC5pbnNlcnRCZWZvcmUobm9kZSwgdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPSBub2RlLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUucGFyZW50Tm9kZSAhPT0gdGFyZ2V0IHx8IG5vZGUubmV4dFNpYmxpbmcgIT09IG51bGwpIHtcbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGluc2VydCh0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuICAgIHRhcmdldC5pbnNlcnRCZWZvcmUobm9kZSwgYW5jaG9yIHx8IG51bGwpO1xufVxuZnVuY3Rpb24gaW5zZXJ0X2h5ZHJhdGlvbih0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuICAgIGlmIChpc19oeWRyYXRpbmcgJiYgIWFuY2hvcikge1xuICAgICAgICBhcHBlbmRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUucGFyZW50Tm9kZSAhPT0gdGFyZ2V0IHx8IG5vZGUubmV4dFNpYmxpbmcgIT0gYW5jaG9yKSB7XG4gICAgICAgIHRhcmdldC5pbnNlcnRCZWZvcmUobm9kZSwgYW5jaG9yIHx8IG51bGwpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRldGFjaChub2RlKSB7XG4gICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuZnVuY3Rpb24gZGVzdHJveV9lYWNoKGl0ZXJhdGlvbnMsIGRldGFjaGluZykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcmF0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoaXRlcmF0aW9uc1tpXSlcbiAgICAgICAgICAgIGl0ZXJhdGlvbnNbaV0uZChkZXRhY2hpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGVsZW1lbnQobmFtZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xufVxuZnVuY3Rpb24gZWxlbWVudF9pcyhuYW1lLCBpcykge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUsIHsgaXMgfSk7XG59XG5mdW5jdGlvbiBvYmplY3Rfd2l0aG91dF9wcm9wZXJ0aWVzKG9iaiwgZXhjbHVkZSkge1xuICAgIGNvbnN0IHRhcmdldCA9IHt9O1xuICAgIGZvciAoY29uc3QgayBpbiBvYmopIHtcbiAgICAgICAgaWYgKGhhc19wcm9wKG9iaiwgaylcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICYmIGV4Y2x1ZGUuaW5kZXhPZihrKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHRhcmdldFtrXSA9IG9ialtrXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gc3ZnX2VsZW1lbnQobmFtZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgbmFtZSk7XG59XG5mdW5jdGlvbiB0ZXh0KGRhdGEpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YSk7XG59XG5mdW5jdGlvbiBzcGFjZSgpIHtcbiAgICByZXR1cm4gdGV4dCgnICcpO1xufVxuZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgcmV0dXJuIHRleHQoJycpO1xufVxuZnVuY3Rpb24gbGlzdGVuKG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICByZXR1cm4gKCkgPT4gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHByZXZlbnRfZGVmYXVsdChmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHN0b3BfcHJvcGFnYXRpb24oZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gc2VsZihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzKVxuICAgICAgICAgICAgZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRydXN0ZWQoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKGV2ZW50LmlzVHJ1c3RlZClcbiAgICAgICAgICAgIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH07XG59XG5mdW5jdGlvbiBhdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbClcbiAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICBlbHNlIGlmIChub2RlLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpICE9PSB2YWx1ZSlcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBzZXRfYXR0cmlidXRlcyhub2RlLCBhdHRyaWJ1dGVzKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IGRlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMobm9kZS5fX3Byb3RvX18pO1xuICAgIGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXNba2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGtleSA9PT0gJ3N0eWxlJykge1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGtleSA9PT0gJ19fdmFsdWUnKSB7XG4gICAgICAgICAgICBub2RlLnZhbHVlID0gbm9kZVtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRlc2NyaXB0b3JzW2tleV0gJiYgZGVzY3JpcHRvcnNba2V5XS5zZXQpIHtcbiAgICAgICAgICAgIG5vZGVba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGF0dHIobm9kZSwga2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X3N2Z19hdHRyaWJ1dGVzKG5vZGUsIGF0dHJpYnV0ZXMpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGF0dHIobm9kZSwga2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNldF9jdXN0b21fZWxlbWVudF9kYXRhKG5vZGUsIHByb3AsIHZhbHVlKSB7XG4gICAgaWYgKHByb3AgaW4gbm9kZSkge1xuICAgICAgICBub2RlW3Byb3BdID0gdHlwZW9mIG5vZGVbcHJvcF0gPT09ICdib29sZWFuJyAmJiB2YWx1ZSA9PT0gJycgPyB0cnVlIDogdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhdHRyKG5vZGUsIHByb3AsIHZhbHVlKTtcbiAgICB9XG59XG5mdW5jdGlvbiB4bGlua19hdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBub2RlLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBnZXRfYmluZGluZ19ncm91cF92YWx1ZShncm91cCwgX192YWx1ZSwgY2hlY2tlZCkge1xuICAgIGNvbnN0IHZhbHVlID0gbmV3IFNldCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JvdXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGdyb3VwW2ldLmNoZWNrZWQpXG4gICAgICAgICAgICB2YWx1ZS5hZGQoZ3JvdXBbaV0uX192YWx1ZSk7XG4gICAgfVxuICAgIGlmICghY2hlY2tlZCkge1xuICAgICAgICB2YWx1ZS5kZWxldGUoX192YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5mcm9tKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHRvX251bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gJycgPyBudWxsIDogK3ZhbHVlO1xufVxuZnVuY3Rpb24gdGltZV9yYW5nZXNfdG9fYXJyYXkocmFuZ2VzKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmdlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBhcnJheS5wdXNoKHsgc3RhcnQ6IHJhbmdlcy5zdGFydChpKSwgZW5kOiByYW5nZXMuZW5kKGkpIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG59XG5mdW5jdGlvbiBjaGlsZHJlbihlbGVtZW50KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZE5vZGVzKTtcbn1cbmZ1bmN0aW9uIGluaXRfY2xhaW1faW5mbyhub2Rlcykge1xuICAgIGlmIChub2Rlcy5jbGFpbV9pbmZvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbm9kZXMuY2xhaW1faW5mbyA9IHsgbGFzdF9pbmRleDogMCwgdG90YWxfY2xhaW1lZDogMCB9O1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNsYWltX25vZGUobm9kZXMsIHByZWRpY2F0ZSwgcHJvY2Vzc05vZGUsIGNyZWF0ZU5vZGUsIGRvbnRVcGRhdGVMYXN0SW5kZXggPSBmYWxzZSkge1xuICAgIC8vIFRyeSB0byBmaW5kIG5vZGVzIGluIGFuIG9yZGVyIHN1Y2ggdGhhdCB3ZSBsZW5ndGhlbiB0aGUgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlXG4gICAgaW5pdF9jbGFpbV9pbmZvKG5vZGVzKTtcbiAgICBjb25zdCByZXN1bHROb2RlID0gKCgpID0+IHtcbiAgICAgICAgLy8gV2UgZmlyc3QgdHJ5IHRvIGZpbmQgYW4gZWxlbWVudCBhZnRlciB0aGUgcHJldmlvdXMgb25lXG4gICAgICAgIGZvciAobGV0IGkgPSBub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXg7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICAgICAgaWYgKHByZWRpY2F0ZShub2RlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VtZW50ID0gcHJvY2Vzc05vZGUobm9kZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlcGxhY2VtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXNbaV0gPSByZXBsYWNlbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFkb250VXBkYXRlTGFzdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLmNsYWltX2luZm8ubGFzdF9pbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSwgd2UgdHJ5IHRvIGZpbmQgb25lIGJlZm9yZVxuICAgICAgICAvLyBXZSBpdGVyYXRlIGluIHJldmVyc2Ugc28gdGhhdCB3ZSBkb24ndCBnbyB0b28gZmFyIGJhY2tcbiAgICAgICAgZm9yIChsZXQgaSA9IG5vZGVzLmNsYWltX2luZm8ubGFzdF9pbmRleCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgICAgICBpZiAocHJlZGljYXRlKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSBwcm9jZXNzTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVwbGFjZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2Rlc1tpXSA9IHJlcGxhY2VtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWRvbnRVcGRhdGVMYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4ID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVwbGFjZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSB3ZSBzcGxpY2VkIGJlZm9yZSB0aGUgbGFzdF9pbmRleCwgd2UgZGVjcmVhc2UgaXRcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4LS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIHdlIGNhbid0IGZpbmQgYW55IG1hdGNoaW5nIG5vZGUsIHdlIGNyZWF0ZSBhIG5ldyBvbmVcbiAgICAgICAgcmV0dXJuIGNyZWF0ZU5vZGUoKTtcbiAgICB9KSgpO1xuICAgIHJlc3VsdE5vZGUuY2xhaW1fb3JkZXIgPSBub2Rlcy5jbGFpbV9pbmZvLnRvdGFsX2NsYWltZWQ7XG4gICAgbm9kZXMuY2xhaW1faW5mby50b3RhbF9jbGFpbWVkICs9IDE7XG4gICAgcmV0dXJuIHJlc3VsdE5vZGU7XG59XG5mdW5jdGlvbiBjbGFpbV9lbGVtZW50X2Jhc2Uobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMsIGNyZWF0ZV9lbGVtZW50KSB7XG4gICAgcmV0dXJuIGNsYWltX25vZGUobm9kZXMsIChub2RlKSA9PiBub2RlLm5vZGVOYW1lID09PSBuYW1lLCAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCByZW1vdmUgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBub2RlLmF0dHJpYnV0ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IG5vZGUuYXR0cmlidXRlc1tqXTtcbiAgICAgICAgICAgIGlmICghYXR0cmlidXRlc1thdHRyaWJ1dGUubmFtZV0pIHtcbiAgICAgICAgICAgICAgICByZW1vdmUucHVzaChhdHRyaWJ1dGUubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlLmZvckVhY2godiA9PiBub2RlLnJlbW92ZUF0dHJpYnV0ZSh2KSk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSwgKCkgPT4gY3JlYXRlX2VsZW1lbnQobmFtZSkpO1xufVxuZnVuY3Rpb24gY2xhaW1fZWxlbWVudChub2RlcywgbmFtZSwgYXR0cmlidXRlcykge1xuICAgIHJldHVybiBjbGFpbV9lbGVtZW50X2Jhc2Uobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMsIGVsZW1lbnQpO1xufVxuZnVuY3Rpb24gY2xhaW1fc3ZnX2VsZW1lbnQobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMpIHtcbiAgICByZXR1cm4gY2xhaW1fZWxlbWVudF9iYXNlKG5vZGVzLCBuYW1lLCBhdHRyaWJ1dGVzLCBzdmdfZWxlbWVudCk7XG59XG5mdW5jdGlvbiBjbGFpbV90ZXh0KG5vZGVzLCBkYXRhKSB7XG4gICAgcmV0dXJuIGNsYWltX25vZGUobm9kZXMsIChub2RlKSA9PiBub2RlLm5vZGVUeXBlID09PSAzLCAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhU3RyID0gJycgKyBkYXRhO1xuICAgICAgICBpZiAobm9kZS5kYXRhLnN0YXJ0c1dpdGgoZGF0YVN0cikpIHtcbiAgICAgICAgICAgIGlmIChub2RlLmRhdGEubGVuZ3RoICE9PSBkYXRhU3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlLnNwbGl0VGV4dChkYXRhU3RyLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlLmRhdGEgPSBkYXRhU3RyO1xuICAgICAgICB9XG4gICAgfSwgKCkgPT4gdGV4dChkYXRhKSwgdHJ1ZSAvLyBUZXh0IG5vZGVzIHNob3VsZCBub3QgdXBkYXRlIGxhc3QgaW5kZXggc2luY2UgaXQgaXMgbGlrZWx5IG5vdCB3b3J0aCBpdCB0byBlbGltaW5hdGUgYW4gaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBvZiBhY3R1YWwgZWxlbWVudHNcbiAgICApO1xufVxuZnVuY3Rpb24gY2xhaW1fc3BhY2Uobm9kZXMpIHtcbiAgICByZXR1cm4gY2xhaW1fdGV4dChub2RlcywgJyAnKTtcbn1cbmZ1bmN0aW9uIGZpbmRfY29tbWVudChub2RlcywgdGV4dCwgc3RhcnQpIHtcbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBub2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSA4IC8qIGNvbW1lbnQgbm9kZSAqLyAmJiBub2RlLnRleHRDb250ZW50LnRyaW0oKSA9PT0gdGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGVzLmxlbmd0aDtcbn1cbmZ1bmN0aW9uIGNsYWltX2h0bWxfdGFnKG5vZGVzKSB7XG4gICAgLy8gZmluZCBodG1sIG9wZW5pbmcgdGFnXG4gICAgY29uc3Qgc3RhcnRfaW5kZXggPSBmaW5kX2NvbW1lbnQobm9kZXMsICdIVE1MX1RBR19TVEFSVCcsIDApO1xuICAgIGNvbnN0IGVuZF9pbmRleCA9IGZpbmRfY29tbWVudChub2RlcywgJ0hUTUxfVEFHX0VORCcsIHN0YXJ0X2luZGV4KTtcbiAgICBpZiAoc3RhcnRfaW5kZXggPT09IGVuZF9pbmRleCkge1xuICAgICAgICByZXR1cm4gbmV3IEh0bWxUYWdIeWRyYXRpb24oKTtcbiAgICB9XG4gICAgaW5pdF9jbGFpbV9pbmZvKG5vZGVzKTtcbiAgICBjb25zdCBodG1sX3RhZ19ub2RlcyA9IG5vZGVzLnNwbGljZShzdGFydF9pbmRleCwgZW5kX2luZGV4IC0gc3RhcnRfaW5kZXggKyAxKTtcbiAgICBkZXRhY2goaHRtbF90YWdfbm9kZXNbMF0pO1xuICAgIGRldGFjaChodG1sX3RhZ19ub2Rlc1todG1sX3RhZ19ub2Rlcy5sZW5ndGggLSAxXSk7XG4gICAgY29uc3QgY2xhaW1lZF9ub2RlcyA9IGh0bWxfdGFnX25vZGVzLnNsaWNlKDEsIGh0bWxfdGFnX25vZGVzLmxlbmd0aCAtIDEpO1xuICAgIGZvciAoY29uc3QgbiBvZiBjbGFpbWVkX25vZGVzKSB7XG4gICAgICAgIG4uY2xhaW1fb3JkZXIgPSBub2Rlcy5jbGFpbV9pbmZvLnRvdGFsX2NsYWltZWQ7XG4gICAgICAgIG5vZGVzLmNsYWltX2luZm8udG90YWxfY2xhaW1lZCArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEh0bWxUYWdIeWRyYXRpb24oY2xhaW1lZF9ub2Rlcyk7XG59XG5mdW5jdGlvbiBzZXRfZGF0YSh0ZXh0LCBkYXRhKSB7XG4gICAgZGF0YSA9ICcnICsgZGF0YTtcbiAgICBpZiAodGV4dC53aG9sZVRleHQgIT09IGRhdGEpXG4gICAgICAgIHRleHQuZGF0YSA9IGRhdGE7XG59XG5mdW5jdGlvbiBzZXRfaW5wdXRfdmFsdWUoaW5wdXQsIHZhbHVlKSB7XG4gICAgaW5wdXQudmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHNldF9pbnB1dF90eXBlKGlucHV0LCB0eXBlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaW5wdXQudHlwZSA9IHR5cGU7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9XG59XG5mdW5jdGlvbiBzZXRfc3R5bGUobm9kZSwga2V5LCB2YWx1ZSwgaW1wb3J0YW50KSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIG5vZGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoa2V5KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSwgaW1wb3J0YW50ID8gJ2ltcG9ydGFudCcgOiAnJyk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2VsZWN0X29wdGlvbihzZWxlY3QsIHZhbHVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBzZWxlY3Qub3B0aW9uc1tpXTtcbiAgICAgICAgaWYgKG9wdGlvbi5fX3ZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZWxlY3Quc2VsZWN0ZWRJbmRleCA9IC0xOyAvLyBubyBvcHRpb24gc2hvdWxkIGJlIHNlbGVjdGVkXG59XG5mdW5jdGlvbiBzZWxlY3Rfb3B0aW9ucyhzZWxlY3QsIHZhbHVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBzZWxlY3Qub3B0aW9uc1tpXTtcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gfnZhbHVlLmluZGV4T2Yob3B0aW9uLl9fdmFsdWUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNlbGVjdF92YWx1ZShzZWxlY3QpIHtcbiAgICBjb25zdCBzZWxlY3RlZF9vcHRpb24gPSBzZWxlY3QucXVlcnlTZWxlY3RvcignOmNoZWNrZWQnKSB8fCBzZWxlY3Qub3B0aW9uc1swXTtcbiAgICByZXR1cm4gc2VsZWN0ZWRfb3B0aW9uICYmIHNlbGVjdGVkX29wdGlvbi5fX3ZhbHVlO1xufVxuZnVuY3Rpb24gc2VsZWN0X211bHRpcGxlX3ZhbHVlKHNlbGVjdCkge1xuICAgIHJldHVybiBbXS5tYXAuY2FsbChzZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnOmNoZWNrZWQnKSwgb3B0aW9uID0+IG9wdGlvbi5fX3ZhbHVlKTtcbn1cbi8vIHVuZm9ydHVuYXRlbHkgdGhpcyBjYW4ndCBiZSBhIGNvbnN0YW50IGFzIHRoYXQgd291bGRuJ3QgYmUgdHJlZS1zaGFrZWFibGVcbi8vIHNvIHdlIGNhY2hlIHRoZSByZXN1bHQgaW5zdGVhZFxubGV0IGNyb3Nzb3JpZ2luO1xuZnVuY3Rpb24gaXNfY3Jvc3NvcmlnaW4oKSB7XG4gICAgaWYgKGNyb3Nzb3JpZ2luID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3Jvc3NvcmlnaW4gPSBmYWxzZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdm9pZCB3aW5kb3cucGFyZW50LmRvY3VtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY3Jvc3NvcmlnaW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjcm9zc29yaWdpbjtcbn1cbmZ1bmN0aW9uIGFkZF9yZXNpemVfbGlzdGVuZXIobm9kZSwgZm4pIHtcbiAgICBjb25zdCBjb21wdXRlZF9zdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgaWYgKGNvbXB1dGVkX3N0eWxlLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgICAgICBub2RlLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICB9XG4gICAgY29uc3QgaWZyYW1lID0gZWxlbWVudCgnaWZyYW1lJyk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyAnICtcbiAgICAgICAgJ292ZXJmbG93OiBoaWRkZW47IGJvcmRlcjogMDsgb3BhY2l0eTogMDsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHotaW5kZXg6IC0xOycpO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICBpZnJhbWUudGFiSW5kZXggPSAtMTtcbiAgICBjb25zdCBjcm9zc29yaWdpbiA9IGlzX2Nyb3Nzb3JpZ2luKCk7XG4gICAgbGV0IHVuc3Vic2NyaWJlO1xuICAgIGlmIChjcm9zc29yaWdpbikge1xuICAgICAgICBpZnJhbWUuc3JjID0gXCJkYXRhOnRleHQvaHRtbCw8c2NyaXB0Pm9ucmVzaXplPWZ1bmN0aW9uKCl7cGFyZW50LnBvc3RNZXNzYWdlKDAsJyonKX08L3NjcmlwdD5cIjtcbiAgICAgICAgdW5zdWJzY3JpYmUgPSBsaXN0ZW4od2luZG93LCAnbWVzc2FnZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gaWZyYW1lLmNvbnRlbnRXaW5kb3cpXG4gICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZnJhbWUuc3JjID0gJ2Fib3V0OmJsYW5rJztcbiAgICAgICAgaWZyYW1lLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlID0gbGlzdGVuKGlmcmFtZS5jb250ZW50V2luZG93LCAncmVzaXplJywgZm4pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBhcHBlbmQobm9kZSwgaWZyYW1lKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoY3Jvc3NvcmlnaW4pIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodW5zdWJzY3JpYmUgJiYgaWZyYW1lLmNvbnRlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZGV0YWNoKGlmcmFtZSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRvZ2dsZV9jbGFzcyhlbGVtZW50LCBuYW1lLCB0b2dnbGUpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdFt0b2dnbGUgPyAnYWRkJyA6ICdyZW1vdmUnXShuYW1lKTtcbn1cbmZ1bmN0aW9uIGN1c3RvbV9ldmVudCh0eXBlLCBkZXRhaWwsIGJ1YmJsZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICBlLmluaXRDdXN0b21FdmVudCh0eXBlLCBidWJibGVzLCBmYWxzZSwgZGV0YWlsKTtcbiAgICByZXR1cm4gZTtcbn1cbmZ1bmN0aW9uIHF1ZXJ5X3NlbGVjdG9yX2FsbChzZWxlY3RvciwgcGFyZW50ID0gZG9jdW1lbnQuYm9keSkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG59XG5jbGFzcyBIdG1sVGFnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lID0gdGhpcy5uID0gbnVsbDtcbiAgICB9XG4gICAgYyhodG1sKSB7XG4gICAgICAgIHRoaXMuaChodG1sKTtcbiAgICB9XG4gICAgbShodG1sLCB0YXJnZXQsIGFuY2hvciA9IG51bGwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmUpIHtcbiAgICAgICAgICAgIHRoaXMuZSA9IGVsZW1lbnQodGFyZ2V0Lm5vZGVOYW1lKTtcbiAgICAgICAgICAgIHRoaXMudCA9IHRhcmdldDtcbiAgICAgICAgICAgIHRoaXMuYyhodG1sKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmkoYW5jaG9yKTtcbiAgICB9XG4gICAgaChodG1sKSB7XG4gICAgICAgIHRoaXMuZS5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICB0aGlzLm4gPSBBcnJheS5mcm9tKHRoaXMuZS5jaGlsZE5vZGVzKTtcbiAgICB9XG4gICAgaShhbmNob3IpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm4ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGluc2VydCh0aGlzLnQsIHRoaXMubltpXSwgYW5jaG9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwKGh0bWwpIHtcbiAgICAgICAgdGhpcy5kKCk7XG4gICAgICAgIHRoaXMuaChodG1sKTtcbiAgICAgICAgdGhpcy5pKHRoaXMuYSk7XG4gICAgfVxuICAgIGQoKSB7XG4gICAgICAgIHRoaXMubi5mb3JFYWNoKGRldGFjaCk7XG4gICAgfVxufVxuY2xhc3MgSHRtbFRhZ0h5ZHJhdGlvbiBleHRlbmRzIEh0bWxUYWcge1xuICAgIGNvbnN0cnVjdG9yKGNsYWltZWRfbm9kZXMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lID0gdGhpcy5uID0gbnVsbDtcbiAgICAgICAgdGhpcy5sID0gY2xhaW1lZF9ub2RlcztcbiAgICB9XG4gICAgYyhodG1sKSB7XG4gICAgICAgIGlmICh0aGlzLmwpIHtcbiAgICAgICAgICAgIHRoaXMubiA9IHRoaXMubDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN1cGVyLmMoaHRtbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaShhbmNob3IpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm4ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGluc2VydF9oeWRyYXRpb24odGhpcy50LCB0aGlzLm5baV0sIGFuY2hvcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBhdHRyaWJ1dGVfdG9fb2JqZWN0KGF0dHJpYnV0ZXMpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBvZiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJlc3VsdFthdHRyaWJ1dGUubmFtZV0gPSBhdHRyaWJ1dGUudmFsdWU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBnZXRfY3VzdG9tX2VsZW1lbnRzX3Nsb3RzKGVsZW1lbnQpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBlbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICByZXN1bHRbbm9kZS5zbG90IHx8ICdkZWZhdWx0J10gPSB0cnVlO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIHdlIG5lZWQgdG8gc3RvcmUgdGhlIGluZm9ybWF0aW9uIGZvciBtdWx0aXBsZSBkb2N1bWVudHMgYmVjYXVzZSBhIFN2ZWx0ZSBhcHBsaWNhdGlvbiBjb3VsZCBhbHNvIGNvbnRhaW4gaWZyYW1lc1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3N2ZWx0ZWpzL3N2ZWx0ZS9pc3N1ZXMvMzYyNFxuY29uc3QgbWFuYWdlZF9zdHlsZXMgPSBuZXcgTWFwKCk7XG5sZXQgYWN0aXZlID0gMDtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJrc2t5YXBwL3N0cmluZy1oYXNoL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG5mdW5jdGlvbiBoYXNoKHN0cikge1xuICAgIGxldCBoYXNoID0gNTM4MTtcbiAgICBsZXQgaSA9IHN0ci5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSlcbiAgICAgICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpIF4gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGhhc2ggPj4+IDA7XG59XG5mdW5jdGlvbiBjcmVhdGVfc3R5bGVfaW5mb3JtYXRpb24oZG9jLCBub2RlKSB7XG4gICAgY29uc3QgaW5mbyA9IHsgc3R5bGVzaGVldDogYXBwZW5kX2VtcHR5X3N0eWxlc2hlZXQobm9kZSksIHJ1bGVzOiB7fSB9O1xuICAgIG1hbmFnZWRfc3R5bGVzLnNldChkb2MsIGluZm8pO1xuICAgIHJldHVybiBpbmZvO1xufVxuZnVuY3Rpb24gY3JlYXRlX3J1bGUobm9kZSwgYSwgYiwgZHVyYXRpb24sIGRlbGF5LCBlYXNlLCBmbiwgdWlkID0gMCkge1xuICAgIGNvbnN0IHN0ZXAgPSAxNi42NjYgLyBkdXJhdGlvbjtcbiAgICBsZXQga2V5ZnJhbWVzID0gJ3tcXG4nO1xuICAgIGZvciAobGV0IHAgPSAwOyBwIDw9IDE7IHAgKz0gc3RlcCkge1xuICAgICAgICBjb25zdCB0ID0gYSArIChiIC0gYSkgKiBlYXNlKHApO1xuICAgICAgICBrZXlmcmFtZXMgKz0gcCAqIDEwMCArIGAleyR7Zm4odCwgMSAtIHQpfX1cXG5gO1xuICAgIH1cbiAgICBjb25zdCBydWxlID0ga2V5ZnJhbWVzICsgYDEwMCUgeyR7Zm4oYiwgMSAtIGIpfX1cXG59YDtcbiAgICBjb25zdCBuYW1lID0gYF9fc3ZlbHRlXyR7aGFzaChydWxlKX1fJHt1aWR9YDtcbiAgICBjb25zdCBkb2MgPSBnZXRfcm9vdF9mb3Jfc3R5bGUobm9kZSk7XG4gICAgY29uc3QgeyBzdHlsZXNoZWV0LCBydWxlcyB9ID0gbWFuYWdlZF9zdHlsZXMuZ2V0KGRvYykgfHwgY3JlYXRlX3N0eWxlX2luZm9ybWF0aW9uKGRvYywgbm9kZSk7XG4gICAgaWYgKCFydWxlc1tuYW1lXSkge1xuICAgICAgICBydWxlc1tuYW1lXSA9IHRydWU7XG4gICAgICAgIHN0eWxlc2hlZXQuaW5zZXJ0UnVsZShgQGtleWZyYW1lcyAke25hbWV9ICR7cnVsZX1gLCBzdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG4gICAgfVxuICAgIGNvbnN0IGFuaW1hdGlvbiA9IG5vZGUuc3R5bGUuYW5pbWF0aW9uIHx8ICcnO1xuICAgIG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gYCR7YW5pbWF0aW9uID8gYCR7YW5pbWF0aW9ufSwgYCA6ICcnfSR7bmFtZX0gJHtkdXJhdGlvbn1tcyBsaW5lYXIgJHtkZWxheX1tcyAxIGJvdGhgO1xuICAgIGFjdGl2ZSArPSAxO1xuICAgIHJldHVybiBuYW1lO1xufVxuZnVuY3Rpb24gZGVsZXRlX3J1bGUobm9kZSwgbmFtZSkge1xuICAgIGNvbnN0IHByZXZpb3VzID0gKG5vZGUuc3R5bGUuYW5pbWF0aW9uIHx8ICcnKS5zcGxpdCgnLCAnKTtcbiAgICBjb25zdCBuZXh0ID0gcHJldmlvdXMuZmlsdGVyKG5hbWVcbiAgICAgICAgPyBhbmltID0+IGFuaW0uaW5kZXhPZihuYW1lKSA8IDAgLy8gcmVtb3ZlIHNwZWNpZmljIGFuaW1hdGlvblxuICAgICAgICA6IGFuaW0gPT4gYW5pbS5pbmRleE9mKCdfX3N2ZWx0ZScpID09PSAtMSAvLyByZW1vdmUgYWxsIFN2ZWx0ZSBhbmltYXRpb25zXG4gICAgKTtcbiAgICBjb25zdCBkZWxldGVkID0gcHJldmlvdXMubGVuZ3RoIC0gbmV4dC5sZW5ndGg7XG4gICAgaWYgKGRlbGV0ZWQpIHtcbiAgICAgICAgbm9kZS5zdHlsZS5hbmltYXRpb24gPSBuZXh0LmpvaW4oJywgJyk7XG4gICAgICAgIGFjdGl2ZSAtPSBkZWxldGVkO1xuICAgICAgICBpZiAoIWFjdGl2ZSlcbiAgICAgICAgICAgIGNsZWFyX3J1bGVzKCk7XG4gICAgfVxufVxuZnVuY3Rpb24gY2xlYXJfcnVsZXMoKSB7XG4gICAgcmFmKCgpID0+IHtcbiAgICAgICAgaWYgKGFjdGl2ZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgbWFuYWdlZF9zdHlsZXMuZm9yRWFjaChpbmZvID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgc3R5bGVzaGVldCB9ID0gaW5mbztcbiAgICAgICAgICAgIGxldCBpID0gc3R5bGVzaGVldC5jc3NSdWxlcy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoaS0tKVxuICAgICAgICAgICAgICAgIHN0eWxlc2hlZXQuZGVsZXRlUnVsZShpKTtcbiAgICAgICAgICAgIGluZm8ucnVsZXMgPSB7fTtcbiAgICAgICAgfSk7XG4gICAgICAgIG1hbmFnZWRfc3R5bGVzLmNsZWFyKCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZV9hbmltYXRpb24obm9kZSwgZnJvbSwgZm4sIHBhcmFtcykge1xuICAgIGlmICghZnJvbSlcbiAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgY29uc3QgdG8gPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChmcm9tLmxlZnQgPT09IHRvLmxlZnQgJiYgZnJvbS5yaWdodCA9PT0gdG8ucmlnaHQgJiYgZnJvbS50b3AgPT09IHRvLnRvcCAmJiBmcm9tLmJvdHRvbSA9PT0gdG8uYm90dG9tKVxuICAgICAgICByZXR1cm4gbm9vcDtcbiAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCBcbiAgICAvLyBAdHMtaWdub3JlIHRvZG86IHNob3VsZCB0aGlzIGJlIHNlcGFyYXRlZCBmcm9tIGRlc3RydWN0dXJpbmc/IE9yIHN0YXJ0L2VuZCBhZGRlZCB0byBwdWJsaWMgYXBpIGFuZCBkb2N1bWVudGF0aW9uP1xuICAgIHN0YXJ0OiBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheSwgXG4gICAgLy8gQHRzLWlnbm9yZSB0b2RvOlxuICAgIGVuZCA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbiwgdGljayA9IG5vb3AsIGNzcyB9ID0gZm4obm9kZSwgeyBmcm9tLCB0byB9LCBwYXJhbXMpO1xuICAgIGxldCBydW5uaW5nID0gdHJ1ZTtcbiAgICBsZXQgc3RhcnRlZCA9IGZhbHNlO1xuICAgIGxldCBuYW1lO1xuICAgIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICBpZiAoY3NzKSB7XG4gICAgICAgICAgICBuYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMCwgMSwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkZWxheSkge1xuICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgaWYgKGNzcylcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIG5hbWUpO1xuICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIGxvb3Aobm93ID0+IHtcbiAgICAgICAgaWYgKCFzdGFydGVkICYmIG5vdyA+PSBzdGFydF90aW1lKSB7XG4gICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRlZCAmJiBub3cgPj0gZW5kKSB7XG4gICAgICAgICAgICB0aWNrKDEsIDApO1xuICAgICAgICAgICAgc3RvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcnVubmluZykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydGVkKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gbm93IC0gc3RhcnRfdGltZTtcbiAgICAgICAgICAgIGNvbnN0IHQgPSAwICsgMSAqIGVhc2luZyhwIC8gZHVyYXRpb24pO1xuICAgICAgICAgICAgdGljayh0LCAxIC0gdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gICAgc3RhcnQoKTtcbiAgICB0aWNrKDAsIDEpO1xuICAgIHJldHVybiBzdG9wO1xufVxuZnVuY3Rpb24gZml4X3Bvc2l0aW9uKG5vZGUpIHtcbiAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgaWYgKHN0eWxlLnBvc2l0aW9uICE9PSAnYWJzb2x1dGUnICYmIHN0eWxlLnBvc2l0aW9uICE9PSAnZml4ZWQnKSB7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gc3R5bGU7XG4gICAgICAgIGNvbnN0IGEgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBub2RlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgbm9kZS5zdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBub2RlLnN0eWxlLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgYWRkX3RyYW5zZm9ybShub2RlLCBhKTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRfdHJhbnNmb3JtKG5vZGUsIGEpIHtcbiAgICBjb25zdCBiID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoYS5sZWZ0ICE9PSBiLmxlZnQgfHwgYS50b3AgIT09IGIudG9wKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gc3R5bGUudHJhbnNmb3JtID09PSAnbm9uZScgPyAnJyA6IHN0eWxlLnRyYW5zZm9ybTtcbiAgICAgICAgbm9kZS5zdHlsZS50cmFuc2Zvcm0gPSBgJHt0cmFuc2Zvcm19IHRyYW5zbGF0ZSgke2EubGVmdCAtIGIubGVmdH1weCwgJHthLnRvcCAtIGIudG9wfXB4KWA7XG4gICAgfVxufVxuXG5sZXQgY3VycmVudF9jb21wb25lbnQ7XG5mdW5jdGlvbiBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgY3VycmVudF9jb21wb25lbnQgPSBjb21wb25lbnQ7XG59XG5mdW5jdGlvbiBnZXRfY3VycmVudF9jb21wb25lbnQoKSB7XG4gICAgaWYgKCFjdXJyZW50X2NvbXBvbmVudClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGdW5jdGlvbiBjYWxsZWQgb3V0c2lkZSBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24nKTtcbiAgICByZXR1cm4gY3VycmVudF9jb21wb25lbnQ7XG59XG5mdW5jdGlvbiBiZWZvcmVVcGRhdGUoZm4pIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5iZWZvcmVfdXBkYXRlLnB1c2goZm4pO1xufVxuZnVuY3Rpb24gb25Nb3VudChmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLm9uX21vdW50LnB1c2goZm4pO1xufVxuZnVuY3Rpb24gYWZ0ZXJVcGRhdGUoZm4pIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5hZnRlcl91cGRhdGUucHVzaChmbik7XG59XG5mdW5jdGlvbiBvbkRlc3Ryb3koZm4pIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5vbl9kZXN0cm95LnB1c2goZm4pO1xufVxuZnVuY3Rpb24gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCkge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IGdldF9jdXJyZW50X2NvbXBvbmVudCgpO1xuICAgIHJldHVybiAodHlwZSwgZGV0YWlsKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IGNvbXBvbmVudC4kJC5jYWxsYmFja3NbdHlwZV07XG4gICAgICAgIGlmIChjYWxsYmFja3MpIHtcbiAgICAgICAgICAgIC8vIFRPRE8gYXJlIHRoZXJlIHNpdHVhdGlvbnMgd2hlcmUgZXZlbnRzIGNvdWxkIGJlIGRpc3BhdGNoZWRcbiAgICAgICAgICAgIC8vIGluIGEgc2VydmVyIChub24tRE9NKSBlbnZpcm9ubWVudD9cbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gY3VzdG9tX2V2ZW50KHR5cGUsIGRldGFpbCk7XG4gICAgICAgICAgICBjYWxsYmFja3Muc2xpY2UoKS5mb3JFYWNoKGZuID0+IHtcbiAgICAgICAgICAgICAgICBmbi5jYWxsKGNvbXBvbmVudCwgZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gc2V0Q29udGV4dChrZXksIGNvbnRleHQpIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LnNldChrZXksIGNvbnRleHQpO1xufVxuZnVuY3Rpb24gZ2V0Q29udGV4dChrZXkpIHtcbiAgICByZXR1cm4gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuY29udGV4dC5nZXQoa2V5KTtcbn1cbmZ1bmN0aW9uIGdldEFsbENvbnRleHRzKCkge1xuICAgIHJldHVybiBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0O1xufVxuZnVuY3Rpb24gaGFzQ29udGV4dChrZXkpIHtcbiAgICByZXR1cm4gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuY29udGV4dC5oYXMoa2V5KTtcbn1cbi8vIFRPRE8gZmlndXJlIG91dCBpZiB3ZSBzdGlsbCB3YW50IHRvIHN1cHBvcnRcbi8vIHNob3J0aGFuZCBldmVudHMsIG9yIGlmIHdlIHdhbnQgdG8gaW1wbGVtZW50XG4vLyBhIHJlYWwgYnViYmxpbmcgbWVjaGFuaXNtXG5mdW5jdGlvbiBidWJibGUoY29tcG9uZW50LCBldmVudCkge1xuICAgIGNvbnN0IGNhbGxiYWNrcyA9IGNvbXBvbmVudC4kJC5jYWxsYmFja3NbZXZlbnQudHlwZV07XG4gICAgaWYgKGNhbGxiYWNrcykge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNhbGxiYWNrcy5zbGljZSgpLmZvckVhY2goZm4gPT4gZm4uY2FsbCh0aGlzLCBldmVudCkpO1xuICAgIH1cbn1cblxuY29uc3QgZGlydHlfY29tcG9uZW50cyA9IFtdO1xuY29uc3QgaW50cm9zID0geyBlbmFibGVkOiBmYWxzZSB9O1xuY29uc3QgYmluZGluZ19jYWxsYmFja3MgPSBbXTtcbmNvbnN0IHJlbmRlcl9jYWxsYmFja3MgPSBbXTtcbmNvbnN0IGZsdXNoX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgcmVzb2x2ZWRfcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xubGV0IHVwZGF0ZV9zY2hlZHVsZWQgPSBmYWxzZTtcbmZ1bmN0aW9uIHNjaGVkdWxlX3VwZGF0ZSgpIHtcbiAgICBpZiAoIXVwZGF0ZV9zY2hlZHVsZWQpIHtcbiAgICAgICAgdXBkYXRlX3NjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgIHJlc29sdmVkX3Byb21pc2UudGhlbihmbHVzaCk7XG4gICAgfVxufVxuZnVuY3Rpb24gdGljaygpIHtcbiAgICBzY2hlZHVsZV91cGRhdGUoKTtcbiAgICByZXR1cm4gcmVzb2x2ZWRfcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGFkZF9yZW5kZXJfY2FsbGJhY2soZm4pIHtcbiAgICByZW5kZXJfY2FsbGJhY2tzLnB1c2goZm4pO1xufVxuZnVuY3Rpb24gYWRkX2ZsdXNoX2NhbGxiYWNrKGZuKSB7XG4gICAgZmx1c2hfY2FsbGJhY2tzLnB1c2goZm4pO1xufVxuLy8gZmx1c2goKSBjYWxscyBjYWxsYmFja3MgaW4gdGhpcyBvcmRlcjpcbi8vIDEuIEFsbCBiZWZvcmVVcGRhdGUgY2FsbGJhY2tzLCBpbiBvcmRlcjogcGFyZW50cyBiZWZvcmUgY2hpbGRyZW5cbi8vIDIuIEFsbCBiaW5kOnRoaXMgY2FsbGJhY2tzLCBpbiByZXZlcnNlIG9yZGVyOiBjaGlsZHJlbiBiZWZvcmUgcGFyZW50cy5cbi8vIDMuIEFsbCBhZnRlclVwZGF0ZSBjYWxsYmFja3MsIGluIG9yZGVyOiBwYXJlbnRzIGJlZm9yZSBjaGlsZHJlbi4gRVhDRVBUXG4vLyAgICBmb3IgYWZ0ZXJVcGRhdGVzIGNhbGxlZCBkdXJpbmcgdGhlIGluaXRpYWwgb25Nb3VudCwgd2hpY2ggYXJlIGNhbGxlZCBpblxuLy8gICAgcmV2ZXJzZSBvcmRlcjogY2hpbGRyZW4gYmVmb3JlIHBhcmVudHMuXG4vLyBTaW5jZSBjYWxsYmFja3MgbWlnaHQgdXBkYXRlIGNvbXBvbmVudCB2YWx1ZXMsIHdoaWNoIGNvdWxkIHRyaWdnZXIgYW5vdGhlclxuLy8gY2FsbCB0byBmbHVzaCgpLCB0aGUgZm9sbG93aW5nIHN0ZXBzIGd1YXJkIGFnYWluc3QgdGhpczpcbi8vIDEuIER1cmluZyBiZWZvcmVVcGRhdGUsIGFueSB1cGRhdGVkIGNvbXBvbmVudHMgd2lsbCBiZSBhZGRlZCB0byB0aGVcbi8vICAgIGRpcnR5X2NvbXBvbmVudHMgYXJyYXkgYW5kIHdpbGwgY2F1c2UgYSByZWVudHJhbnQgY2FsbCB0byBmbHVzaCgpLiBCZWNhdXNlXG4vLyAgICB0aGUgZmx1c2ggaW5kZXggaXMga2VwdCBvdXRzaWRlIHRoZSBmdW5jdGlvbiwgdGhlIHJlZW50cmFudCBjYWxsIHdpbGwgcGlja1xuLy8gICAgdXAgd2hlcmUgdGhlIGVhcmxpZXIgY2FsbCBsZWZ0IG9mZiBhbmQgZ28gdGhyb3VnaCBhbGwgZGlydHkgY29tcG9uZW50cy4gVGhlXG4vLyAgICBjdXJyZW50X2NvbXBvbmVudCB2YWx1ZSBpcyBzYXZlZCBhbmQgcmVzdG9yZWQgc28gdGhhdCB0aGUgcmVlbnRyYW50IGNhbGwgd2lsbFxuLy8gICAgbm90IGludGVyZmVyZSB3aXRoIHRoZSBcInBhcmVudFwiIGZsdXNoKCkgY2FsbC5cbi8vIDIuIGJpbmQ6dGhpcyBjYWxsYmFja3MgY2Fubm90IHRyaWdnZXIgbmV3IGZsdXNoKCkgY2FsbHMuXG4vLyAzLiBEdXJpbmcgYWZ0ZXJVcGRhdGUsIGFueSB1cGRhdGVkIGNvbXBvbmVudHMgd2lsbCBOT1QgaGF2ZSB0aGVpciBhZnRlclVwZGF0ZVxuLy8gICAgY2FsbGJhY2sgY2FsbGVkIGEgc2Vjb25kIHRpbWU7IHRoZSBzZWVuX2NhbGxiYWNrcyBzZXQsIG91dHNpZGUgdGhlIGZsdXNoKClcbi8vICAgIGZ1bmN0aW9uLCBndWFyYW50ZWVzIHRoaXMgYmVoYXZpb3IuXG5jb25zdCBzZWVuX2NhbGxiYWNrcyA9IG5ldyBTZXQoKTtcbmxldCBmbHVzaGlkeCA9IDA7IC8vIERvICpub3QqIG1vdmUgdGhpcyBpbnNpZGUgdGhlIGZsdXNoKCkgZnVuY3Rpb25cbmZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIGNvbnN0IHNhdmVkX2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICAgIGRvIHtcbiAgICAgICAgLy8gZmlyc3QsIGNhbGwgYmVmb3JlVXBkYXRlIGZ1bmN0aW9uc1xuICAgICAgICAvLyBhbmQgdXBkYXRlIGNvbXBvbmVudHNcbiAgICAgICAgd2hpbGUgKGZsdXNoaWR4IDwgZGlydHlfY29tcG9uZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGRpcnR5X2NvbXBvbmVudHNbZmx1c2hpZHhdO1xuICAgICAgICAgICAgZmx1c2hpZHgrKztcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgdXBkYXRlKGNvbXBvbmVudC4kJCk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KG51bGwpO1xuICAgICAgICBkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCA9IDA7XG4gICAgICAgIGZsdXNoaWR4ID0gMDtcbiAgICAgICAgd2hpbGUgKGJpbmRpbmdfY2FsbGJhY2tzLmxlbmd0aClcbiAgICAgICAgICAgIGJpbmRpbmdfY2FsbGJhY2tzLnBvcCgpKCk7XG4gICAgICAgIC8vIHRoZW4sIG9uY2UgY29tcG9uZW50cyBhcmUgdXBkYXRlZCwgY2FsbFxuICAgICAgICAvLyBhZnRlclVwZGF0ZSBmdW5jdGlvbnMuIFRoaXMgbWF5IGNhdXNlXG4gICAgICAgIC8vIHN1YnNlcXVlbnQgdXBkYXRlcy4uLlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbmRlcl9jYWxsYmFja3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gcmVuZGVyX2NhbGxiYWNrc1tpXTtcbiAgICAgICAgICAgIGlmICghc2Vlbl9jYWxsYmFja3MuaGFzKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgICAgIC8vIC4uLnNvIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgbG9vcHNcbiAgICAgICAgICAgICAgICBzZWVuX2NhbGxiYWNrcy5hZGQoY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyX2NhbGxiYWNrcy5sZW5ndGggPSAwO1xuICAgIH0gd2hpbGUgKGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoKTtcbiAgICB3aGlsZSAoZmx1c2hfY2FsbGJhY2tzLmxlbmd0aCkge1xuICAgICAgICBmbHVzaF9jYWxsYmFja3MucG9wKCkoKTtcbiAgICB9XG4gICAgdXBkYXRlX3NjaGVkdWxlZCA9IGZhbHNlO1xuICAgIHNlZW5fY2FsbGJhY2tzLmNsZWFyKCk7XG4gICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHNhdmVkX2NvbXBvbmVudCk7XG59XG5mdW5jdGlvbiB1cGRhdGUoJCQpIHtcbiAgICBpZiAoJCQuZnJhZ21lbnQgIT09IG51bGwpIHtcbiAgICAgICAgJCQudXBkYXRlKCk7XG4gICAgICAgIHJ1bl9hbGwoJCQuYmVmb3JlX3VwZGF0ZSk7XG4gICAgICAgIGNvbnN0IGRpcnR5ID0gJCQuZGlydHk7XG4gICAgICAgICQkLmRpcnR5ID0gWy0xXTtcbiAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQucCgkJC5jdHgsIGRpcnR5KTtcbiAgICAgICAgJCQuYWZ0ZXJfdXBkYXRlLmZvckVhY2goYWRkX3JlbmRlcl9jYWxsYmFjayk7XG4gICAgfVxufVxuXG5sZXQgcHJvbWlzZTtcbmZ1bmN0aW9uIHdhaXQoKSB7XG4gICAgaWYgKCFwcm9taXNlKSB7XG4gICAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHByb21pc2UgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5mdW5jdGlvbiBkaXNwYXRjaChub2RlLCBkaXJlY3Rpb24sIGtpbmQpIHtcbiAgICBub2RlLmRpc3BhdGNoRXZlbnQoY3VzdG9tX2V2ZW50KGAke2RpcmVjdGlvbiA/ICdpbnRybycgOiAnb3V0cm8nfSR7a2luZH1gKSk7XG59XG5jb25zdCBvdXRyb2luZyA9IG5ldyBTZXQoKTtcbmxldCBvdXRyb3M7XG5mdW5jdGlvbiBncm91cF9vdXRyb3MoKSB7XG4gICAgb3V0cm9zID0ge1xuICAgICAgICByOiAwLFxuICAgICAgICBjOiBbXSxcbiAgICAgICAgcDogb3V0cm9zIC8vIHBhcmVudCBncm91cFxuICAgIH07XG59XG5mdW5jdGlvbiBjaGVja19vdXRyb3MoKSB7XG4gICAgaWYgKCFvdXRyb3Mucikge1xuICAgICAgICBydW5fYWxsKG91dHJvcy5jKTtcbiAgICB9XG4gICAgb3V0cm9zID0gb3V0cm9zLnA7XG59XG5mdW5jdGlvbiB0cmFuc2l0aW9uX2luKGJsb2NrLCBsb2NhbCkge1xuICAgIGlmIChibG9jayAmJiBibG9jay5pKSB7XG4gICAgICAgIG91dHJvaW5nLmRlbGV0ZShibG9jayk7XG4gICAgICAgIGJsb2NrLmkobG9jYWwpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRyYW5zaXRpb25fb3V0KGJsb2NrLCBsb2NhbCwgZGV0YWNoLCBjYWxsYmFjaykge1xuICAgIGlmIChibG9jayAmJiBibG9jay5vKSB7XG4gICAgICAgIGlmIChvdXRyb2luZy5oYXMoYmxvY2spKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBvdXRyb2luZy5hZGQoYmxvY2spO1xuICAgICAgICBvdXRyb3MuYy5wdXNoKCgpID0+IHtcbiAgICAgICAgICAgIG91dHJvaW5nLmRlbGV0ZShibG9jayk7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoZGV0YWNoKVxuICAgICAgICAgICAgICAgICAgICBibG9jay5kKDEpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBibG9jay5vKGxvY2FsKTtcbiAgICB9XG59XG5jb25zdCBudWxsX3RyYW5zaXRpb24gPSB7IGR1cmF0aW9uOiAwIH07XG5mdW5jdGlvbiBjcmVhdGVfaW5fdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zKSB7XG4gICAgbGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcyk7XG4gICAgbGV0IHJ1bm5pbmcgPSBmYWxzZTtcbiAgICBsZXQgYW5pbWF0aW9uX25hbWU7XG4gICAgbGV0IHRhc2s7XG4gICAgbGV0IHVpZCA9IDA7XG4gICAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgICAgaWYgKGFuaW1hdGlvbl9uYW1lKVxuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnbygpIHtcbiAgICAgICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgdGljayA9IG5vb3AsIGNzcyB9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcbiAgICAgICAgaWYgKGNzcylcbiAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMCwgMSwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcywgdWlkKyspO1xuICAgICAgICB0aWNrKDAsIDEpO1xuICAgICAgICBjb25zdCBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheTtcbiAgICAgICAgY29uc3QgZW5kX3RpbWUgPSBzdGFydF90aW1lICsgZHVyYXRpb247XG4gICAgICAgIGlmICh0YXNrKVxuICAgICAgICAgICAgdGFzay5hYm9ydCgpO1xuICAgICAgICBydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCB0cnVlLCAnc3RhcnQnKSk7XG4gICAgICAgIHRhc2sgPSBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gZW5kX3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGljaygxLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgdHJ1ZSwgJ2VuZCcpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gc3RhcnRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ID0gZWFzaW5nKChub3cgLSBzdGFydF90aW1lKSAvIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgdGljayh0LCAxIC0gdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmc7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgc3RhcnRlZCA9IGZhbHNlO1xuICAgIHJldHVybiB7XG4gICAgICAgIHN0YXJ0KCkge1xuICAgICAgICAgICAgaWYgKHN0YXJ0ZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlKTtcbiAgICAgICAgICAgIGlmIChpc19mdW5jdGlvbihjb25maWcpKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnID0gY29uZmlnKCk7XG4gICAgICAgICAgICAgICAgd2FpdCgpLnRoZW4oZ28pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ28oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaW52YWxpZGF0ZSgpIHtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5kKCkge1xuICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9vdXRfdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zKSB7XG4gICAgbGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcyk7XG4gICAgbGV0IHJ1bm5pbmcgPSB0cnVlO1xuICAgIGxldCBhbmltYXRpb25fbmFtZTtcbiAgICBjb25zdCBncm91cCA9IG91dHJvcztcbiAgICBncm91cC5yICs9IDE7XG4gICAgZnVuY3Rpb24gZ28oKSB7XG4gICAgICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIHRpY2sgPSBub29wLCBjc3MgfSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG4gICAgICAgIGlmIChjc3MpXG4gICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDEsIDAsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuICAgICAgICBjb25zdCBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheTtcbiAgICAgICAgY29uc3QgZW5kX3RpbWUgPSBzdGFydF90aW1lICsgZHVyYXRpb247XG4gICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgZmFsc2UsICdzdGFydCcpKTtcbiAgICAgICAgbG9vcChub3cgPT4ge1xuICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAobm93ID49IGVuZF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIGZhbHNlLCAnZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghLS1ncm91cC5yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdpbGwgcmVzdWx0IGluIGBlbmQoKWAgYmVpbmcgY2FsbGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc28gd2UgZG9uJ3QgbmVlZCB0byBjbGVhbiB1cCBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICBydW5fYWxsKGdyb3VwLmMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBzdGFydF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBlYXNpbmcoKG5vdyAtIHN0YXJ0X3RpbWUpIC8gZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aWNrKDEgLSB0LCB0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcnVubmluZztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChpc19mdW5jdGlvbihjb25maWcpKSB7XG4gICAgICAgIHdhaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbmZpZyA9IGNvbmZpZygpO1xuICAgICAgICAgICAgZ28oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBnbygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBlbmQocmVzZXQpIHtcbiAgICAgICAgICAgIGlmIChyZXNldCAmJiBjb25maWcudGljaykge1xuICAgICAgICAgICAgICAgIGNvbmZpZy50aWNrKDEsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIGFuaW1hdGlvbl9uYW1lKTtcbiAgICAgICAgICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlX2JpZGlyZWN0aW9uYWxfdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zLCBpbnRybykge1xuICAgIGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMpO1xuICAgIGxldCB0ID0gaW50cm8gPyAwIDogMTtcbiAgICBsZXQgcnVubmluZ19wcm9ncmFtID0gbnVsbDtcbiAgICBsZXQgcGVuZGluZ19wcm9ncmFtID0gbnVsbDtcbiAgICBsZXQgYW5pbWF0aW9uX25hbWUgPSBudWxsO1xuICAgIGZ1bmN0aW9uIGNsZWFyX2FuaW1hdGlvbigpIHtcbiAgICAgICAgaWYgKGFuaW1hdGlvbl9uYW1lKVxuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbml0KHByb2dyYW0sIGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGQgPSAocHJvZ3JhbS5iIC0gdCk7XG4gICAgICAgIGR1cmF0aW9uICo9IE1hdGguYWJzKGQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYTogdCxcbiAgICAgICAgICAgIGI6IHByb2dyYW0uYixcbiAgICAgICAgICAgIGQsXG4gICAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICAgIHN0YXJ0OiBwcm9ncmFtLnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBwcm9ncmFtLnN0YXJ0ICsgZHVyYXRpb24sXG4gICAgICAgICAgICBncm91cDogcHJvZ3JhbS5ncm91cFxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBnbyhiKSB7XG4gICAgICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIHRpY2sgPSBub29wLCBjc3MgfSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG4gICAgICAgIGNvbnN0IHByb2dyYW0gPSB7XG4gICAgICAgICAgICBzdGFydDogbm93KCkgKyBkZWxheSxcbiAgICAgICAgICAgIGJcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFiKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRvZG86IGltcHJvdmUgdHlwaW5nc1xuICAgICAgICAgICAgcHJvZ3JhbS5ncm91cCA9IG91dHJvcztcbiAgICAgICAgICAgIG91dHJvcy5yICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJ1bm5pbmdfcHJvZ3JhbSB8fCBwZW5kaW5nX3Byb2dyYW0pIHtcbiAgICAgICAgICAgIHBlbmRpbmdfcHJvZ3JhbSA9IHByb2dyYW07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiB0aGlzIGlzIGFuIGludHJvLCBhbmQgdGhlcmUncyBhIGRlbGF5LCB3ZSBuZWVkIHRvIGRvXG4gICAgICAgICAgICAvLyBhbiBpbml0aWFsIHRpY2sgYW5kL29yIGFwcGx5IENTUyBhbmltYXRpb24gaW1tZWRpYXRlbHlcbiAgICAgICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIHQsIGIsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGIpXG4gICAgICAgICAgICAgICAgdGljaygwLCAxKTtcbiAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IGluaXQocHJvZ3JhbSwgZHVyYXRpb24pO1xuICAgICAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCBiLCAnc3RhcnQnKSk7XG4gICAgICAgICAgICBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBlbmRpbmdfcHJvZ3JhbSAmJiBub3cgPiBwZW5kaW5nX3Byb2dyYW0uc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gaW5pdChwZW5kaW5nX3Byb2dyYW0sIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZ19wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgcnVubmluZ19wcm9ncmFtLmIsICdzdGFydCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3NzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgdCwgcnVubmluZ19wcm9ncmFtLmIsIHJ1bm5pbmdfcHJvZ3JhbS5kdXJhdGlvbiwgMCwgZWFzaW5nLCBjb25maWcuY3NzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocnVubmluZ19wcm9ncmFtKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub3cgPj0gcnVubmluZ19wcm9ncmFtLmVuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGljayh0ID0gcnVubmluZ19wcm9ncmFtLmIsIDEgLSB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIHJ1bm5pbmdfcHJvZ3JhbS5iLCAnZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBlbmRpbmdfcHJvZ3JhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlJ3JlIGRvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocnVubmluZ19wcm9ncmFtLmIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW50cm8g4oCUIHdlIGNhbiB0aWR5IHVwIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3V0cm8g4oCUIG5lZWRzIHRvIGJlIGNvb3JkaW5hdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghLS1ydW5uaW5nX3Byb2dyYW0uZ3JvdXAucilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bl9hbGwocnVubmluZ19wcm9ncmFtLmdyb3VwLmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobm93ID49IHJ1bm5pbmdfcHJvZ3JhbS5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IG5vdyAtIHJ1bm5pbmdfcHJvZ3JhbS5zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBydW5uaW5nX3Byb2dyYW0uYSArIHJ1bm5pbmdfcHJvZ3JhbS5kICogZWFzaW5nKHAgLyBydW5uaW5nX3Byb2dyYW0uZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGljayh0LCAxIC0gdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhKHJ1bm5pbmdfcHJvZ3JhbSB8fCBwZW5kaW5nX3Byb2dyYW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcnVuKGIpIHtcbiAgICAgICAgICAgIGlmIChpc19mdW5jdGlvbihjb25maWcpKSB7XG4gICAgICAgICAgICAgICAgd2FpdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNvbmZpZygpO1xuICAgICAgICAgICAgICAgICAgICBnbyhiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGdvKGIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbmQoKSB7XG4gICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IHBlbmRpbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBoYW5kbGVfcHJvbWlzZShwcm9taXNlLCBpbmZvKSB7XG4gICAgY29uc3QgdG9rZW4gPSBpbmZvLnRva2VuID0ge307XG4gICAgZnVuY3Rpb24gdXBkYXRlKHR5cGUsIGluZGV4LCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmIChpbmZvLnRva2VuICE9PSB0b2tlbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaW5mby5yZXNvbHZlZCA9IHZhbHVlO1xuICAgICAgICBsZXQgY2hpbGRfY3R4ID0gaW5mby5jdHg7XG4gICAgICAgIGlmIChrZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2hpbGRfY3R4ID0gY2hpbGRfY3R4LnNsaWNlKCk7XG4gICAgICAgICAgICBjaGlsZF9jdHhba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJsb2NrID0gdHlwZSAmJiAoaW5mby5jdXJyZW50ID0gdHlwZSkoY2hpbGRfY3R4KTtcbiAgICAgICAgbGV0IG5lZWRzX2ZsdXNoID0gZmFsc2U7XG4gICAgICAgIGlmIChpbmZvLmJsb2NrKSB7XG4gICAgICAgICAgICBpZiAoaW5mby5ibG9ja3MpIHtcbiAgICAgICAgICAgICAgICBpbmZvLmJsb2Nrcy5mb3JFYWNoKChibG9jaywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPT0gaW5kZXggJiYgYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwX291dHJvcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbl9vdXQoYmxvY2ssIDEsIDEsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5mby5ibG9ja3NbaV0gPT09IGJsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZm8uYmxvY2tzW2ldID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrX291dHJvcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbmZvLmJsb2NrLmQoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBibG9jay5jKCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uX2luKGJsb2NrLCAxKTtcbiAgICAgICAgICAgIGJsb2NrLm0oaW5mby5tb3VudCgpLCBpbmZvLmFuY2hvcik7XG4gICAgICAgICAgICBuZWVkc19mbHVzaCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5mby5ibG9jayA9IGJsb2NrO1xuICAgICAgICBpZiAoaW5mby5ibG9ja3MpXG4gICAgICAgICAgICBpbmZvLmJsb2Nrc1tpbmRleF0gPSBibG9jaztcbiAgICAgICAgaWYgKG5lZWRzX2ZsdXNoKSB7XG4gICAgICAgICAgICBmbHVzaCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChpc19wcm9taXNlKHByb21pc2UpKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRfY29tcG9uZW50ID0gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCk7XG4gICAgICAgIHByb21pc2UudGhlbih2YWx1ZSA9PiB7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY3VycmVudF9jb21wb25lbnQpO1xuICAgICAgICAgICAgdXBkYXRlKGluZm8udGhlbiwgMSwgaW5mby52YWx1ZSwgdmFsdWUpO1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KG51bGwpO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY3VycmVudF9jb21wb25lbnQpO1xuICAgICAgICAgICAgdXBkYXRlKGluZm8uY2F0Y2gsIDIsIGluZm8uZXJyb3IsIGVycm9yKTtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChudWxsKTtcbiAgICAgICAgICAgIGlmICghaW5mby5oYXNDYXRjaCkge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gaWYgd2UgcHJldmlvdXNseSBoYWQgYSB0aGVuL2NhdGNoIGJsb2NrLCBkZXN0cm95IGl0XG4gICAgICAgIGlmIChpbmZvLmN1cnJlbnQgIT09IGluZm8ucGVuZGluZykge1xuICAgICAgICAgICAgdXBkYXRlKGluZm8ucGVuZGluZywgMCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGluZm8uY3VycmVudCAhPT0gaW5mby50aGVuKSB7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby50aGVuLCAxLCBpbmZvLnZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGluZm8ucmVzb2x2ZWQgPSBwcm9taXNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZV9hd2FpdF9ibG9ja19icmFuY2goaW5mbywgY3R4LCBkaXJ0eSkge1xuICAgIGNvbnN0IGNoaWxkX2N0eCA9IGN0eC5zbGljZSgpO1xuICAgIGNvbnN0IHsgcmVzb2x2ZWQgfSA9IGluZm87XG4gICAgaWYgKGluZm8uY3VycmVudCA9PT0gaW5mby50aGVuKSB7XG4gICAgICAgIGNoaWxkX2N0eFtpbmZvLnZhbHVlXSA9IHJlc29sdmVkO1xuICAgIH1cbiAgICBpZiAoaW5mby5jdXJyZW50ID09PSBpbmZvLmNhdGNoKSB7XG4gICAgICAgIGNoaWxkX2N0eFtpbmZvLmVycm9yXSA9IHJlc29sdmVkO1xuICAgIH1cbiAgICBpbmZvLmJsb2NrLnAoY2hpbGRfY3R4LCBkaXJ0eSk7XG59XG5cbmNvbnN0IGdsb2JhbHMgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICA/IHdpbmRvd1xuICAgIDogdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gZ2xvYmFsVGhpc1xuICAgICAgICA6IGdsb2JhbCk7XG5cbmZ1bmN0aW9uIGRlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIGJsb2NrLmQoMSk7XG4gICAgbG9va3VwLmRlbGV0ZShibG9jay5rZXkpO1xufVxuZnVuY3Rpb24gb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIHRyYW5zaXRpb25fb3V0KGJsb2NrLCAxLCAxLCAoKSA9PiB7XG4gICAgICAgIGxvb2t1cC5kZWxldGUoYmxvY2sua2V5KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZpeF9hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgYmxvY2suZigpO1xuICAgIGRlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCk7XG59XG5mdW5jdGlvbiBmaXhfYW5kX291dHJvX2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICBibG9jay5mKCk7XG4gICAgb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCk7XG59XG5mdW5jdGlvbiB1cGRhdGVfa2V5ZWRfZWFjaChvbGRfYmxvY2tzLCBkaXJ0eSwgZ2V0X2tleSwgZHluYW1pYywgY3R4LCBsaXN0LCBsb29rdXAsIG5vZGUsIGRlc3Ryb3ksIGNyZWF0ZV9lYWNoX2Jsb2NrLCBuZXh0LCBnZXRfY29udGV4dCkge1xuICAgIGxldCBvID0gb2xkX2Jsb2Nrcy5sZW5ndGg7XG4gICAgbGV0IG4gPSBsaXN0Lmxlbmd0aDtcbiAgICBsZXQgaSA9IG87XG4gICAgY29uc3Qgb2xkX2luZGV4ZXMgPSB7fTtcbiAgICB3aGlsZSAoaS0tKVxuICAgICAgICBvbGRfaW5kZXhlc1tvbGRfYmxvY2tzW2ldLmtleV0gPSBpO1xuICAgIGNvbnN0IG5ld19ibG9ja3MgPSBbXTtcbiAgICBjb25zdCBuZXdfbG9va3VwID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IGRlbHRhcyA9IG5ldyBNYXAoKTtcbiAgICBpID0gbjtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkX2N0eCA9IGdldF9jb250ZXh0KGN0eCwgbGlzdCwgaSk7XG4gICAgICAgIGNvbnN0IGtleSA9IGdldF9rZXkoY2hpbGRfY3R4KTtcbiAgICAgICAgbGV0IGJsb2NrID0gbG9va3VwLmdldChrZXkpO1xuICAgICAgICBpZiAoIWJsb2NrKSB7XG4gICAgICAgICAgICBibG9jayA9IGNyZWF0ZV9lYWNoX2Jsb2NrKGtleSwgY2hpbGRfY3R4KTtcbiAgICAgICAgICAgIGJsb2NrLmMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkeW5hbWljKSB7XG4gICAgICAgICAgICBibG9jay5wKGNoaWxkX2N0eCwgZGlydHkpO1xuICAgICAgICB9XG4gICAgICAgIG5ld19sb29rdXAuc2V0KGtleSwgbmV3X2Jsb2Nrc1tpXSA9IGJsb2NrKTtcbiAgICAgICAgaWYgKGtleSBpbiBvbGRfaW5kZXhlcylcbiAgICAgICAgICAgIGRlbHRhcy5zZXQoa2V5LCBNYXRoLmFicyhpIC0gb2xkX2luZGV4ZXNba2V5XSkpO1xuICAgIH1cbiAgICBjb25zdCB3aWxsX21vdmUgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgZGlkX21vdmUgPSBuZXcgU2V0KCk7XG4gICAgZnVuY3Rpb24gaW5zZXJ0KGJsb2NrKSB7XG4gICAgICAgIHRyYW5zaXRpb25faW4oYmxvY2ssIDEpO1xuICAgICAgICBibG9jay5tKG5vZGUsIG5leHQpO1xuICAgICAgICBsb29rdXAuc2V0KGJsb2NrLmtleSwgYmxvY2spO1xuICAgICAgICBuZXh0ID0gYmxvY2suZmlyc3Q7XG4gICAgICAgIG4tLTtcbiAgICB9XG4gICAgd2hpbGUgKG8gJiYgbikge1xuICAgICAgICBjb25zdCBuZXdfYmxvY2sgPSBuZXdfYmxvY2tzW24gLSAxXTtcbiAgICAgICAgY29uc3Qgb2xkX2Jsb2NrID0gb2xkX2Jsb2Nrc1tvIC0gMV07XG4gICAgICAgIGNvbnN0IG5ld19rZXkgPSBuZXdfYmxvY2sua2V5O1xuICAgICAgICBjb25zdCBvbGRfa2V5ID0gb2xkX2Jsb2NrLmtleTtcbiAgICAgICAgaWYgKG5ld19ibG9jayA9PT0gb2xkX2Jsb2NrKSB7XG4gICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgICAgICBuZXh0ID0gbmV3X2Jsb2NrLmZpcnN0O1xuICAgICAgICAgICAgby0tO1xuICAgICAgICAgICAgbi0tO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFuZXdfbG9va3VwLmhhcyhvbGRfa2V5KSkge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIG9sZCBibG9ja1xuICAgICAgICAgICAgZGVzdHJveShvbGRfYmxvY2ssIGxvb2t1cCk7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWxvb2t1cC5oYXMobmV3X2tleSkgfHwgd2lsbF9tb3ZlLmhhcyhuZXdfa2V5KSkge1xuICAgICAgICAgICAgaW5zZXJ0KG5ld19ibG9jayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGlkX21vdmUuaGFzKG9sZF9rZXkpKSB7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGVsdGFzLmdldChuZXdfa2V5KSA+IGRlbHRhcy5nZXQob2xkX2tleSkpIHtcbiAgICAgICAgICAgIGRpZF9tb3ZlLmFkZChuZXdfa2V5KTtcbiAgICAgICAgICAgIGluc2VydChuZXdfYmxvY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgd2lsbF9tb3ZlLmFkZChvbGRfa2V5KTtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB3aGlsZSAoby0tKSB7XG4gICAgICAgIGNvbnN0IG9sZF9ibG9jayA9IG9sZF9ibG9ja3Nbb107XG4gICAgICAgIGlmICghbmV3X2xvb2t1cC5oYXMob2xkX2Jsb2NrLmtleSkpXG4gICAgICAgICAgICBkZXN0cm95KG9sZF9ibG9jaywgbG9va3VwKTtcbiAgICB9XG4gICAgd2hpbGUgKG4pXG4gICAgICAgIGluc2VydChuZXdfYmxvY2tzW24gLSAxXSk7XG4gICAgcmV0dXJuIG5ld19ibG9ja3M7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9lYWNoX2tleXMoY3R4LCBsaXN0LCBnZXRfY29udGV4dCwgZ2V0X2tleSkge1xuICAgIGNvbnN0IGtleXMgPSBuZXcgU2V0KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGdldF9rZXkoZ2V0X2NvbnRleHQoY3R4LCBsaXN0LCBpKSk7XG4gICAgICAgIGlmIChrZXlzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBoYXZlIGR1cGxpY2F0ZSBrZXlzIGluIGEga2V5ZWQgZWFjaCcpO1xuICAgICAgICB9XG4gICAgICAgIGtleXMuYWRkKGtleSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRfc3ByZWFkX3VwZGF0ZShsZXZlbHMsIHVwZGF0ZXMpIHtcbiAgICBjb25zdCB1cGRhdGUgPSB7fTtcbiAgICBjb25zdCB0b19udWxsX291dCA9IHt9O1xuICAgIGNvbnN0IGFjY291bnRlZF9mb3IgPSB7ICQkc2NvcGU6IDEgfTtcbiAgICBsZXQgaSA9IGxldmVscy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICBjb25zdCBvID0gbGV2ZWxzW2ldO1xuICAgICAgICBjb25zdCBuID0gdXBkYXRlc1tpXTtcbiAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG8pIHtcbiAgICAgICAgICAgICAgICBpZiAoIShrZXkgaW4gbikpXG4gICAgICAgICAgICAgICAgICAgIHRvX251bGxfb3V0W2tleV0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbikge1xuICAgICAgICAgICAgICAgIGlmICghYWNjb3VudGVkX2ZvcltrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVtrZXldID0gbltrZXldO1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50ZWRfZm9yW2tleV0gPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldmVsc1tpXSA9IG47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvKSB7XG4gICAgICAgICAgICAgICAgYWNjb3VudGVkX2ZvcltrZXldID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0b19udWxsX291dCkge1xuICAgICAgICBpZiAoIShrZXkgaW4gdXBkYXRlKSlcbiAgICAgICAgICAgIHVwZGF0ZVtrZXldID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gdXBkYXRlO1xufVxuZnVuY3Rpb24gZ2V0X3NwcmVhZF9vYmplY3Qoc3ByZWFkX3Byb3BzKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzcHJlYWRfcHJvcHMgPT09ICdvYmplY3QnICYmIHNwcmVhZF9wcm9wcyAhPT0gbnVsbCA/IHNwcmVhZF9wcm9wcyA6IHt9O1xufVxuXG4vLyBzb3VyY2U6IGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2luZGljZXMuaHRtbFxuY29uc3QgYm9vbGVhbl9hdHRyaWJ1dGVzID0gbmV3IFNldChbXG4gICAgJ2FsbG93ZnVsbHNjcmVlbicsXG4gICAgJ2FsbG93cGF5bWVudHJlcXVlc3QnLFxuICAgICdhc3luYycsXG4gICAgJ2F1dG9mb2N1cycsXG4gICAgJ2F1dG9wbGF5JyxcbiAgICAnY2hlY2tlZCcsXG4gICAgJ2NvbnRyb2xzJyxcbiAgICAnZGVmYXVsdCcsXG4gICAgJ2RlZmVyJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdmb3Jtbm92YWxpZGF0ZScsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2lzbWFwJyxcbiAgICAnbG9vcCcsXG4gICAgJ211bHRpcGxlJyxcbiAgICAnbXV0ZWQnLFxuICAgICdub21vZHVsZScsXG4gICAgJ25vdmFsaWRhdGUnLFxuICAgICdvcGVuJyxcbiAgICAncGxheXNpbmxpbmUnLFxuICAgICdyZWFkb25seScsXG4gICAgJ3JlcXVpcmVkJyxcbiAgICAncmV2ZXJzZWQnLFxuICAgICdzZWxlY3RlZCdcbl0pO1xuXG5jb25zdCBpbnZhbGlkX2F0dHJpYnV0ZV9uYW1lX2NoYXJhY3RlciA9IC9bXFxzJ1wiPi89XFx1e0ZERDB9LVxcdXtGREVGfVxcdXtGRkZFfVxcdXtGRkZGfVxcdXsxRkZGRX1cXHV7MUZGRkZ9XFx1ezJGRkZFfVxcdXsyRkZGRn1cXHV7M0ZGRkV9XFx1ezNGRkZGfVxcdXs0RkZGRX1cXHV7NEZGRkZ9XFx1ezVGRkZFfVxcdXs1RkZGRn1cXHV7NkZGRkV9XFx1ezZGRkZGfVxcdXs3RkZGRX1cXHV7N0ZGRkZ9XFx1ezhGRkZFfVxcdXs4RkZGRn1cXHV7OUZGRkV9XFx1ezlGRkZGfVxcdXtBRkZGRX1cXHV7QUZGRkZ9XFx1e0JGRkZFfVxcdXtCRkZGRn1cXHV7Q0ZGRkV9XFx1e0NGRkZGfVxcdXtERkZGRX1cXHV7REZGRkZ9XFx1e0VGRkZFfVxcdXtFRkZGRn1cXHV7RkZGRkV9XFx1e0ZGRkZGfVxcdXsxMEZGRkV9XFx1ezEwRkZGRn1dL3U7XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNhdHRyaWJ1dGVzLTJcbi8vIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNub25jaGFyYWN0ZXJcbmZ1bmN0aW9uIHNwcmVhZChhcmdzLCBhdHRyc190b19hZGQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7fSwgLi4uYXJncyk7XG4gICAgaWYgKGF0dHJzX3RvX2FkZCkge1xuICAgICAgICBjb25zdCBjbGFzc2VzX3RvX2FkZCA9IGF0dHJzX3RvX2FkZC5jbGFzc2VzO1xuICAgICAgICBjb25zdCBzdHlsZXNfdG9fYWRkID0gYXR0cnNfdG9fYWRkLnN0eWxlcztcbiAgICAgICAgaWYgKGNsYXNzZXNfdG9fYWRkKSB7XG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlcy5jbGFzcyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5jbGFzcyA9IGNsYXNzZXNfdG9fYWRkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5jbGFzcyArPSAnICcgKyBjbGFzc2VzX3RvX2FkZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc3R5bGVzX3RvX2FkZCkge1xuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXMuc3R5bGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuc3R5bGUgPSBzdHlsZV9vYmplY3RfdG9fc3RyaW5nKHN0eWxlc190b19hZGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5zdHlsZSA9IHN0eWxlX29iamVjdF90b19zdHJpbmcobWVyZ2Vfc3NyX3N0eWxlcyhhdHRyaWJ1dGVzLnN0eWxlLCBzdHlsZXNfdG9fYWRkKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IHN0ciA9ICcnO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIGlmIChpbnZhbGlkX2F0dHJpYnV0ZV9uYW1lX2NoYXJhY3Rlci50ZXN0KG5hbWUpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgIHN0ciArPSAnICcgKyBuYW1lO1xuICAgICAgICBlbHNlIGlmIChib29sZWFuX2F0dHJpYnV0ZXMuaGFzKG5hbWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSlcbiAgICAgICAgICAgICAgICBzdHIgKz0gJyAnICsgbmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBzdHIgKz0gYCAke25hbWV9PVwiJHt2YWx1ZX1cImA7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3RyO1xufVxuZnVuY3Rpb24gbWVyZ2Vfc3NyX3N0eWxlcyhzdHlsZV9hdHRyaWJ1dGUsIHN0eWxlX2RpcmVjdGl2ZSkge1xuICAgIGNvbnN0IHN0eWxlX29iamVjdCA9IHt9O1xuICAgIGZvciAoY29uc3QgaW5kaXZpZHVhbF9zdHlsZSBvZiBzdHlsZV9hdHRyaWJ1dGUuc3BsaXQoJzsnKSkge1xuICAgICAgICBjb25zdCBjb2xvbl9pbmRleCA9IGluZGl2aWR1YWxfc3R5bGUuaW5kZXhPZignOicpO1xuICAgICAgICBjb25zdCBuYW1lID0gaW5kaXZpZHVhbF9zdHlsZS5zbGljZSgwLCBjb2xvbl9pbmRleCkudHJpbSgpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGluZGl2aWR1YWxfc3R5bGUuc2xpY2UoY29sb25faW5kZXggKyAxKS50cmltKCk7XG4gICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBzdHlsZV9vYmplY3RbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBuYW1lIGluIHN0eWxlX2RpcmVjdGl2ZSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHN0eWxlX2RpcmVjdGl2ZVtuYW1lXTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBzdHlsZV9vYmplY3RbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzdHlsZV9vYmplY3RbbmFtZV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlX29iamVjdDtcbn1cbmNvbnN0IGVzY2FwZWQgPSB7XG4gICAgJ1wiJzogJyZxdW90OycsXG4gICAgXCInXCI6ICcmIzM5OycsXG4gICAgJyYnOiAnJmFtcDsnLFxuICAgICc8JzogJyZsdDsnLFxuICAgICc+JzogJyZndDsnXG59O1xuZnVuY3Rpb24gZXNjYXBlKGh0bWwpIHtcbiAgICByZXR1cm4gU3RyaW5nKGh0bWwpLnJlcGxhY2UoL1tcIicmPD5dL2csIG1hdGNoID0+IGVzY2FwZWRbbWF0Y2hdKTtcbn1cbmZ1bmN0aW9uIGVzY2FwZV9hdHRyaWJ1dGVfdmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IGVzY2FwZSh2YWx1ZSkgOiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGVzY2FwZV9vYmplY3Qob2JqKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gZXNjYXBlX2F0dHJpYnV0ZV92YWx1ZShvYmpba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBlYWNoKGl0ZW1zLCBmbikge1xuICAgIGxldCBzdHIgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHN0ciArPSBmbihpdGVtc1tpXSwgaSk7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59XG5jb25zdCBtaXNzaW5nX2NvbXBvbmVudCA9IHtcbiAgICAkJHJlbmRlcjogKCkgPT4gJydcbn07XG5mdW5jdGlvbiB2YWxpZGF0ZV9jb21wb25lbnQoY29tcG9uZW50LCBuYW1lKSB7XG4gICAgaWYgKCFjb21wb25lbnQgfHwgIWNvbXBvbmVudC4kJHJlbmRlcikge1xuICAgICAgICBpZiAobmFtZSA9PT0gJ3N2ZWx0ZTpjb21wb25lbnQnKVxuICAgICAgICAgICAgbmFtZSArPSAnIHRoaXM9ey4uLn0nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYDwke25hbWV9PiBpcyBub3QgYSB2YWxpZCBTU1IgY29tcG9uZW50LiBZb3UgbWF5IG5lZWQgdG8gcmV2aWV3IHlvdXIgYnVpbGQgY29uZmlnIHRvIGVuc3VyZSB0aGF0IGRlcGVuZGVuY2llcyBhcmUgY29tcGlsZWQsIHJhdGhlciB0aGFuIGltcG9ydGVkIGFzIHByZS1jb21waWxlZCBtb2R1bGVzYCk7XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5mdW5jdGlvbiBkZWJ1ZyhmaWxlLCBsaW5lLCBjb2x1bW4sIHZhbHVlcykge1xuICAgIGNvbnNvbGUubG9nKGB7QGRlYnVnfSAke2ZpbGUgPyBmaWxlICsgJyAnIDogJyd9KCR7bGluZX06JHtjb2x1bW59KWApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICByZXR1cm4gJyc7XG59XG5sZXQgb25fZGVzdHJveTtcbmZ1bmN0aW9uIGNyZWF0ZV9zc3JfY29tcG9uZW50KGZuKSB7XG4gICAgZnVuY3Rpb24gJCRyZW5kZXIocmVzdWx0LCBwcm9wcywgYmluZGluZ3MsIHNsb3RzLCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHBhcmVudF9jb21wb25lbnQgPSBjdXJyZW50X2NvbXBvbmVudDtcbiAgICAgICAgY29uc3QgJCQgPSB7XG4gICAgICAgICAgICBvbl9kZXN0cm95LFxuICAgICAgICAgICAgY29udGV4dDogbmV3IE1hcChjb250ZXh0IHx8IChwYXJlbnRfY29tcG9uZW50ID8gcGFyZW50X2NvbXBvbmVudC4kJC5jb250ZXh0IDogW10pKSxcbiAgICAgICAgICAgIC8vIHRoZXNlIHdpbGwgYmUgaW1tZWRpYXRlbHkgZGlzY2FyZGVkXG4gICAgICAgICAgICBvbl9tb3VudDogW10sXG4gICAgICAgICAgICBiZWZvcmVfdXBkYXRlOiBbXSxcbiAgICAgICAgICAgIGFmdGVyX3VwZGF0ZTogW10sXG4gICAgICAgICAgICBjYWxsYmFja3M6IGJsYW5rX29iamVjdCgpXG4gICAgICAgIH07XG4gICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudCh7ICQkIH0pO1xuICAgICAgICBjb25zdCBodG1sID0gZm4ocmVzdWx0LCBwcm9wcywgYmluZGluZ3MsIHNsb3RzKTtcbiAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHBhcmVudF9jb21wb25lbnQpO1xuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVuZGVyOiAocHJvcHMgPSB7fSwgeyAkJHNsb3RzID0ge30sIGNvbnRleHQgPSBuZXcgTWFwKCkgfSA9IHt9KSA9PiB7XG4gICAgICAgICAgICBvbl9kZXN0cm95ID0gW107XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB7IHRpdGxlOiAnJywgaGVhZDogJycsIGNzczogbmV3IFNldCgpIH07XG4gICAgICAgICAgICBjb25zdCBodG1sID0gJCRyZW5kZXIocmVzdWx0LCBwcm9wcywge30sICQkc2xvdHMsIGNvbnRleHQpO1xuICAgICAgICAgICAgcnVuX2FsbChvbl9kZXN0cm95KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaHRtbCxcbiAgICAgICAgICAgICAgICBjc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogQXJyYXkuZnJvbShyZXN1bHQuY3NzKS5tYXAoY3NzID0+IGNzcy5jb2RlKS5qb2luKCdcXG4nKSxcbiAgICAgICAgICAgICAgICAgICAgbWFwOiBudWxsIC8vIFRPRE9cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhlYWQ6IHJlc3VsdC50aXRsZSArIHJlc3VsdC5oZWFkXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAkJHJlbmRlclxuICAgIH07XG59XG5mdW5jdGlvbiBhZGRfYXR0cmlidXRlKG5hbWUsIHZhbHVlLCBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwgfHwgKGJvb2xlYW4gJiYgIXZhbHVlKSlcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIHJldHVybiBgICR7bmFtZX0ke3ZhbHVlID09PSB0cnVlICYmIGJvb2xlYW5fYXR0cmlidXRlcy5oYXMobmFtZSkgPyAnJyA6IGA9JHt0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gSlNPTi5zdHJpbmdpZnkoZXNjYXBlKHZhbHVlKSkgOiBgXCIke3ZhbHVlfVwiYH1gfWA7XG59XG5mdW5jdGlvbiBhZGRfY2xhc3NlcyhjbGFzc2VzKSB7XG4gICAgcmV0dXJuIGNsYXNzZXMgPyBgIGNsYXNzPVwiJHtjbGFzc2VzfVwiYCA6ICcnO1xufVxuZnVuY3Rpb24gc3R5bGVfb2JqZWN0X3RvX3N0cmluZyhzdHlsZV9vYmplY3QpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGVfb2JqZWN0KVxuICAgICAgICAuZmlsdGVyKGtleSA9PiBzdHlsZV9vYmplY3Rba2V5XSlcbiAgICAgICAgLm1hcChrZXkgPT4gYCR7a2V5fTogJHtzdHlsZV9vYmplY3Rba2V5XX07YClcbiAgICAgICAgLmpvaW4oJyAnKTtcbn1cbmZ1bmN0aW9uIGFkZF9zdHlsZXMoc3R5bGVfb2JqZWN0KSB7XG4gICAgY29uc3Qgc3R5bGVzID0gc3R5bGVfb2JqZWN0X3RvX3N0cmluZyhzdHlsZV9vYmplY3QpO1xuICAgIHJldHVybiBzdHlsZXMgPyBgIHN0eWxlPVwiJHtzdHlsZXN9XCJgIDogJyc7XG59XG5cbmZ1bmN0aW9uIGJpbmQoY29tcG9uZW50LCBuYW1lLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGluZGV4ID0gY29tcG9uZW50LiQkLnByb3BzW25hbWVdO1xuICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbXBvbmVudC4kJC5ib3VuZFtpbmRleF0gPSBjYWxsYmFjaztcbiAgICAgICAgY2FsbGJhY2soY29tcG9uZW50LiQkLmN0eFtpbmRleF0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZV9jb21wb25lbnQoYmxvY2spIHtcbiAgICBibG9jayAmJiBibG9jay5jKCk7XG59XG5mdW5jdGlvbiBjbGFpbV9jb21wb25lbnQoYmxvY2ssIHBhcmVudF9ub2Rlcykge1xuICAgIGJsb2NrICYmIGJsb2NrLmwocGFyZW50X25vZGVzKTtcbn1cbmZ1bmN0aW9uIG1vdW50X2NvbXBvbmVudChjb21wb25lbnQsIHRhcmdldCwgYW5jaG9yLCBjdXN0b21FbGVtZW50KSB7XG4gICAgY29uc3QgeyBmcmFnbWVudCwgb25fbW91bnQsIG9uX2Rlc3Ryb3ksIGFmdGVyX3VwZGF0ZSB9ID0gY29tcG9uZW50LiQkO1xuICAgIGZyYWdtZW50ICYmIGZyYWdtZW50Lm0odGFyZ2V0LCBhbmNob3IpO1xuICAgIGlmICghY3VzdG9tRWxlbWVudCkge1xuICAgICAgICAvLyBvbk1vdW50IGhhcHBlbnMgYmVmb3JlIHRoZSBpbml0aWFsIGFmdGVyVXBkYXRlXG4gICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3X29uX2Rlc3Ryb3kgPSBvbl9tb3VudC5tYXAocnVuKS5maWx0ZXIoaXNfZnVuY3Rpb24pO1xuICAgICAgICAgICAgaWYgKG9uX2Rlc3Ryb3kpIHtcbiAgICAgICAgICAgICAgICBvbl9kZXN0cm95LnB1c2goLi4ubmV3X29uX2Rlc3Ryb3kpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRWRnZSBjYXNlIC0gY29tcG9uZW50IHdhcyBkZXN0cm95ZWQgaW1tZWRpYXRlbHksXG4gICAgICAgICAgICAgICAgLy8gbW9zdCBsaWtlbHkgYXMgYSByZXN1bHQgb2YgYSBiaW5kaW5nIGluaXRpYWxpc2luZ1xuICAgICAgICAgICAgICAgIHJ1bl9hbGwobmV3X29uX2Rlc3Ryb3kpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tcG9uZW50LiQkLm9uX21vdW50ID0gW107XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhZnRlcl91cGRhdGUuZm9yRWFjaChhZGRfcmVuZGVyX2NhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIGRlc3Ryb3lfY29tcG9uZW50KGNvbXBvbmVudCwgZGV0YWNoaW5nKSB7XG4gICAgY29uc3QgJCQgPSBjb21wb25lbnQuJCQ7XG4gICAgaWYgKCQkLmZyYWdtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJ1bl9hbGwoJCQub25fZGVzdHJveSk7XG4gICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LmQoZGV0YWNoaW5nKTtcbiAgICAgICAgLy8gVE9ETyBudWxsIG91dCBvdGhlciByZWZzLCBpbmNsdWRpbmcgY29tcG9uZW50LiQkIChidXQgbmVlZCB0b1xuICAgICAgICAvLyBwcmVzZXJ2ZSBmaW5hbCBzdGF0ZT8pXG4gICAgICAgICQkLm9uX2Rlc3Ryb3kgPSAkJC5mcmFnbWVudCA9IG51bGw7XG4gICAgICAgICQkLmN0eCA9IFtdO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG1ha2VfZGlydHkoY29tcG9uZW50LCBpKSB7XG4gICAgaWYgKGNvbXBvbmVudC4kJC5kaXJ0eVswXSA9PT0gLTEpIHtcbiAgICAgICAgZGlydHlfY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgIHNjaGVkdWxlX3VwZGF0ZSgpO1xuICAgICAgICBjb21wb25lbnQuJCQuZGlydHkuZmlsbCgwKTtcbiAgICB9XG4gICAgY29tcG9uZW50LiQkLmRpcnR5WyhpIC8gMzEpIHwgMF0gfD0gKDEgPDwgKGkgJSAzMSkpO1xufVxuZnVuY3Rpb24gaW5pdChjb21wb25lbnQsIG9wdGlvbnMsIGluc3RhbmNlLCBjcmVhdGVfZnJhZ21lbnQsIG5vdF9lcXVhbCwgcHJvcHMsIGFwcGVuZF9zdHlsZXMsIGRpcnR5ID0gWy0xXSkge1xuICAgIGNvbnN0IHBhcmVudF9jb21wb25lbnQgPSBjdXJyZW50X2NvbXBvbmVudDtcbiAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KTtcbiAgICBjb25zdCAkJCA9IGNvbXBvbmVudC4kJCA9IHtcbiAgICAgICAgZnJhZ21lbnQ6IG51bGwsXG4gICAgICAgIGN0eDogbnVsbCxcbiAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIHVwZGF0ZTogbm9vcCxcbiAgICAgICAgbm90X2VxdWFsLFxuICAgICAgICBib3VuZDogYmxhbmtfb2JqZWN0KCksXG4gICAgICAgIC8vIGxpZmVjeWNsZVxuICAgICAgICBvbl9tb3VudDogW10sXG4gICAgICAgIG9uX2Rlc3Ryb3k6IFtdLFxuICAgICAgICBvbl9kaXNjb25uZWN0OiBbXSxcbiAgICAgICAgYmVmb3JlX3VwZGF0ZTogW10sXG4gICAgICAgIGFmdGVyX3VwZGF0ZTogW10sXG4gICAgICAgIGNvbnRleHQ6IG5ldyBNYXAob3B0aW9ucy5jb250ZXh0IHx8IChwYXJlbnRfY29tcG9uZW50ID8gcGFyZW50X2NvbXBvbmVudC4kJC5jb250ZXh0IDogW10pKSxcbiAgICAgICAgLy8gZXZlcnl0aGluZyBlbHNlXG4gICAgICAgIGNhbGxiYWNrczogYmxhbmtfb2JqZWN0KCksXG4gICAgICAgIGRpcnR5LFxuICAgICAgICBza2lwX2JvdW5kOiBmYWxzZSxcbiAgICAgICAgcm9vdDogb3B0aW9ucy50YXJnZXQgfHwgcGFyZW50X2NvbXBvbmVudC4kJC5yb290XG4gICAgfTtcbiAgICBhcHBlbmRfc3R5bGVzICYmIGFwcGVuZF9zdHlsZXMoJCQucm9vdCk7XG4gICAgbGV0IHJlYWR5ID0gZmFsc2U7XG4gICAgJCQuY3R4ID0gaW5zdGFuY2VcbiAgICAgICAgPyBpbnN0YW5jZShjb21wb25lbnQsIG9wdGlvbnMucHJvcHMgfHwge30sIChpLCByZXQsIC4uLnJlc3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcmVzdC5sZW5ndGggPyByZXN0WzBdIDogcmV0O1xuICAgICAgICAgICAgaWYgKCQkLmN0eCAmJiBub3RfZXF1YWwoJCQuY3R4W2ldLCAkJC5jdHhbaV0gPSB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoISQkLnNraXBfYm91bmQgJiYgJCQuYm91bmRbaV0pXG4gICAgICAgICAgICAgICAgICAgICQkLmJvdW5kW2ldKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVhZHkpXG4gICAgICAgICAgICAgICAgICAgIG1ha2VfZGlydHkoY29tcG9uZW50LCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0pXG4gICAgICAgIDogW107XG4gICAgJCQudXBkYXRlKCk7XG4gICAgcmVhZHkgPSB0cnVlO1xuICAgIHJ1bl9hbGwoJCQuYmVmb3JlX3VwZGF0ZSk7XG4gICAgLy8gYGZhbHNlYCBhcyBhIHNwZWNpYWwgY2FzZSBvZiBubyBET00gY29tcG9uZW50XG4gICAgJCQuZnJhZ21lbnQgPSBjcmVhdGVfZnJhZ21lbnQgPyBjcmVhdGVfZnJhZ21lbnQoJCQuY3R4KSA6IGZhbHNlO1xuICAgIGlmIChvcHRpb25zLnRhcmdldCkge1xuICAgICAgICBpZiAob3B0aW9ucy5oeWRyYXRlKSB7XG4gICAgICAgICAgICBzdGFydF9oeWRyYXRpbmcoKTtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gY2hpbGRyZW4ob3B0aW9ucy50YXJnZXQpO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50Lmwobm9kZXMpO1xuICAgICAgICAgICAgbm9kZXMuZm9yRWFjaChkZXRhY2gpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LmMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5pbnRybylcbiAgICAgICAgICAgIHRyYW5zaXRpb25faW4oY29tcG9uZW50LiQkLmZyYWdtZW50KTtcbiAgICAgICAgbW91bnRfY29tcG9uZW50KGNvbXBvbmVudCwgb3B0aW9ucy50YXJnZXQsIG9wdGlvbnMuYW5jaG9yLCBvcHRpb25zLmN1c3RvbUVsZW1lbnQpO1xuICAgICAgICBlbmRfaHlkcmF0aW5nKCk7XG4gICAgICAgIGZsdXNoKCk7XG4gICAgfVxuICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChwYXJlbnRfY29tcG9uZW50KTtcbn1cbmxldCBTdmVsdGVFbGVtZW50O1xuaWYgKHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFN2ZWx0ZUVsZW1lbnQgPSBjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICBjb25zdCB7IG9uX21vdW50IH0gPSB0aGlzLiQkO1xuICAgICAgICAgICAgdGhpcy4kJC5vbl9kaXNjb25uZWN0ID0gb25fbW91bnQubWFwKHJ1bikuZmlsdGVyKGlzX2Z1bmN0aW9uKTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLiQkLnNsb3R0ZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRvZG86IGltcHJvdmUgdHlwaW5nc1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy4kJC5zbG90dGVkW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyLCBfb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzW2F0dHJdID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICBydW5fYWxsKHRoaXMuJCQub25fZGlzY29ubmVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgJGRlc3Ryb3koKSB7XG4gICAgICAgICAgICBkZXN0cm95X2NvbXBvbmVudCh0aGlzLCAxKTtcbiAgICAgICAgICAgIHRoaXMuJGRlc3Ryb3kgPSBub29wO1xuICAgICAgICB9XG4gICAgICAgICRvbih0eXBlLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgLy8gVE9ETyBzaG91bGQgdGhpcyBkZWxlZ2F0ZSB0byBhZGRFdmVudExpc3RlbmVyP1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdIHx8ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSA9IFtdKSk7XG4gICAgICAgICAgICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAkc2V0KCQkcHJvcHMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiQkc2V0ICYmICFpc19lbXB0eSgkJHByb3BzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJCQuc2tpcF9ib3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kJHNldCgkJHByb3BzKTtcbiAgICAgICAgICAgICAgICB0aGlzLiQkLnNraXBfYm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIFN2ZWx0ZSBjb21wb25lbnRzLiBVc2VkIHdoZW4gZGV2PWZhbHNlLlxuICovXG5jbGFzcyBTdmVsdGVDb21wb25lbnQge1xuICAgICRkZXN0cm95KCkge1xuICAgICAgICBkZXN0cm95X2NvbXBvbmVudCh0aGlzLCAxKTtcbiAgICAgICAgdGhpcy4kZGVzdHJveSA9IG5vb3A7XG4gICAgfVxuICAgICRvbih0eXBlLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBjYWxsYmFja3MgPSAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gfHwgKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdID0gW10pKTtcbiAgICAgICAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjYWxsYmFja3MuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAkc2V0KCQkcHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuJCRzZXQgJiYgIWlzX2VtcHR5KCQkcHJvcHMpKSB7XG4gICAgICAgICAgICB0aGlzLiQkLnNraXBfYm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy4kJHNldCgkJHByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuJCQuc2tpcF9ib3VuZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaXNwYXRjaF9kZXYodHlwZSwgZGV0YWlsKSB7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChjdXN0b21fZXZlbnQodHlwZSwgT2JqZWN0LmFzc2lnbih7IHZlcnNpb246ICczLjQ2LjQnIH0sIGRldGFpbCksIHRydWUpKTtcbn1cbmZ1bmN0aW9uIGFwcGVuZF9kZXYodGFyZ2V0LCBub2RlKSB7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01JbnNlcnQnLCB7IHRhcmdldCwgbm9kZSB9KTtcbiAgICBhcHBlbmQodGFyZ2V0LCBub2RlKTtcbn1cbmZ1bmN0aW9uIGFwcGVuZF9oeWRyYXRpb25fZGV2KHRhcmdldCwgbm9kZSkge1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NSW5zZXJ0JywgeyB0YXJnZXQsIG5vZGUgfSk7XG4gICAgYXBwZW5kX2h5ZHJhdGlvbih0YXJnZXQsIG5vZGUpO1xufVxuZnVuY3Rpb24gaW5zZXJ0X2Rldih0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NSW5zZXJ0JywgeyB0YXJnZXQsIG5vZGUsIGFuY2hvciB9KTtcbiAgICBpbnNlcnQodGFyZ2V0LCBub2RlLCBhbmNob3IpO1xufVxuZnVuY3Rpb24gaW5zZXJ0X2h5ZHJhdGlvbl9kZXYodGFyZ2V0LCBub2RlLCBhbmNob3IpIHtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTUluc2VydCcsIHsgdGFyZ2V0LCBub2RlLCBhbmNob3IgfSk7XG4gICAgaW5zZXJ0X2h5ZHJhdGlvbih0YXJnZXQsIG5vZGUsIGFuY2hvcik7XG59XG5mdW5jdGlvbiBkZXRhY2hfZGV2KG5vZGUpIHtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVJlbW92ZScsIHsgbm9kZSB9KTtcbiAgICBkZXRhY2gobm9kZSk7XG59XG5mdW5jdGlvbiBkZXRhY2hfYmV0d2Vlbl9kZXYoYmVmb3JlLCBhZnRlcikge1xuICAgIHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcgJiYgYmVmb3JlLm5leHRTaWJsaW5nICE9PSBhZnRlcikge1xuICAgICAgICBkZXRhY2hfZGV2KGJlZm9yZS5uZXh0U2libGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGV0YWNoX2JlZm9yZV9kZXYoYWZ0ZXIpIHtcbiAgICB3aGlsZSAoYWZ0ZXIucHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgIGRldGFjaF9kZXYoYWZ0ZXIucHJldmlvdXNTaWJsaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZXRhY2hfYWZ0ZXJfZGV2KGJlZm9yZSkge1xuICAgIHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgZGV0YWNoX2RldihiZWZvcmUubmV4dFNpYmxpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGxpc3Rlbl9kZXYobm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMsIGhhc19wcmV2ZW50X2RlZmF1bHQsIGhhc19zdG9wX3Byb3BhZ2F0aW9uKSB7XG4gICAgY29uc3QgbW9kaWZpZXJzID0gb3B0aW9ucyA9PT0gdHJ1ZSA/IFsnY2FwdHVyZSddIDogb3B0aW9ucyA/IEFycmF5LmZyb20oT2JqZWN0LmtleXMob3B0aW9ucykpIDogW107XG4gICAgaWYgKGhhc19wcmV2ZW50X2RlZmF1bHQpXG4gICAgICAgIG1vZGlmaWVycy5wdXNoKCdwcmV2ZW50RGVmYXVsdCcpO1xuICAgIGlmIChoYXNfc3RvcF9wcm9wYWdhdGlvbilcbiAgICAgICAgbW9kaWZpZXJzLnB1c2goJ3N0b3BQcm9wYWdhdGlvbicpO1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NQWRkRXZlbnRMaXN0ZW5lcicsIHsgbm9kZSwgZXZlbnQsIGhhbmRsZXIsIG1vZGlmaWVycyB9KTtcbiAgICBjb25zdCBkaXNwb3NlID0gbGlzdGVuKG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVJlbW92ZUV2ZW50TGlzdGVuZXInLCB7IG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBtb2RpZmllcnMgfSk7XG4gICAgICAgIGRpc3Bvc2UoKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gYXR0cl9kZXYobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIGF0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgaWYgKHZhbHVlID09IG51bGwpXG4gICAgICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NUmVtb3ZlQXR0cmlidXRlJywgeyBub2RlLCBhdHRyaWJ1dGUgfSk7XG4gICAgZWxzZVxuICAgICAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVNldEF0dHJpYnV0ZScsIHsgbm9kZSwgYXR0cmlidXRlLCB2YWx1ZSB9KTtcbn1cbmZ1bmN0aW9uIHByb3BfZGV2KG5vZGUsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIG5vZGVbcHJvcGVydHldID0gdmFsdWU7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01TZXRQcm9wZXJ0eScsIHsgbm9kZSwgcHJvcGVydHksIHZhbHVlIH0pO1xufVxuZnVuY3Rpb24gZGF0YXNldF9kZXYobm9kZSwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgbm9kZS5kYXRhc2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NU2V0RGF0YXNldCcsIHsgbm9kZSwgcHJvcGVydHksIHZhbHVlIH0pO1xufVxuZnVuY3Rpb24gc2V0X2RhdGFfZGV2KHRleHQsIGRhdGEpIHtcbiAgICBkYXRhID0gJycgKyBkYXRhO1xuICAgIGlmICh0ZXh0Lndob2xlVGV4dCA9PT0gZGF0YSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NU2V0RGF0YScsIHsgbm9kZTogdGV4dCwgZGF0YSB9KTtcbiAgICB0ZXh0LmRhdGEgPSBkYXRhO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVfZWFjaF9hcmd1bWVudChhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ3N0cmluZycgJiYgIShhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gYXJnKSkge1xuICAgICAgICBsZXQgbXNnID0gJ3sjZWFjaH0gb25seSBpdGVyYXRlcyBvdmVyIGFycmF5LWxpa2Ugb2JqZWN0cy4nO1xuICAgICAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBhcmcgJiYgU3ltYm9sLml0ZXJhdG9yIGluIGFyZykge1xuICAgICAgICAgICAgbXNnICs9ICcgWW91IGNhbiB1c2UgYSBzcHJlYWQgdG8gY29udmVydCB0aGlzIGl0ZXJhYmxlIGludG8gYW4gYXJyYXkuJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICB9XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9zbG90cyhuYW1lLCBzbG90LCBrZXlzKSB7XG4gICAgZm9yIChjb25zdCBzbG90X2tleSBvZiBPYmplY3Qua2V5cyhzbG90KSkge1xuICAgICAgICBpZiAoIX5rZXlzLmluZGV4T2Yoc2xvdF9rZXkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYDwke25hbWV9PiByZWNlaXZlZCBhbiB1bmV4cGVjdGVkIHNsb3QgXCIke3Nsb3Rfa2V5fVwiLmApO1xuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBTdmVsdGUgY29tcG9uZW50cyB3aXRoIHNvbWUgbWlub3IgZGV2LWVuaGFuY2VtZW50cy4gVXNlZCB3aGVuIGRldj10cnVlLlxuICovXG5jbGFzcyBTdmVsdGVDb21wb25lbnREZXYgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zIHx8ICghb3B0aW9ucy50YXJnZXQgJiYgIW9wdGlvbnMuJCRpbmxpbmUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCIndGFyZ2V0JyBpcyBhIHJlcXVpcmVkIG9wdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgc3VwZXIuJGRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy4kZGVzdHJveSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignQ29tcG9uZW50IHdhcyBhbHJlYWR5IGRlc3Ryb3llZCcpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgfTtcbiAgICB9XG4gICAgJGNhcHR1cmVfc3RhdGUoKSB7IH1cbiAgICAkaW5qZWN0X3N0YXRlKCkgeyB9XG59XG4vKipcbiAqIEJhc2UgY2xhc3MgdG8gY3JlYXRlIHN0cm9uZ2x5IHR5cGVkIFN2ZWx0ZSBjb21wb25lbnRzLlxuICogVGhpcyBvbmx5IGV4aXN0cyBmb3IgdHlwaW5nIHB1cnBvc2VzIGFuZCBzaG91bGQgYmUgdXNlZCBpbiBgLmQudHNgIGZpbGVzLlxuICpcbiAqICMjIyBFeGFtcGxlOlxuICpcbiAqIFlvdSBoYXZlIGNvbXBvbmVudCBsaWJyYXJ5IG9uIG5wbSBjYWxsZWQgYGNvbXBvbmVudC1saWJyYXJ5YCwgZnJvbSB3aGljaFxuICogeW91IGV4cG9ydCBhIGNvbXBvbmVudCBjYWxsZWQgYE15Q29tcG9uZW50YC4gRm9yIFN2ZWx0ZStUeXBlU2NyaXB0IHVzZXJzLFxuICogeW91IHdhbnQgdG8gcHJvdmlkZSB0eXBpbmdzLiBUaGVyZWZvcmUgeW91IGNyZWF0ZSBhIGBpbmRleC5kLnRzYDpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBTdmVsdGVDb21wb25lbnRUeXBlZCB9IGZyb20gXCJzdmVsdGVcIjtcbiAqIGV4cG9ydCBjbGFzcyBNeUNvbXBvbmVudCBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudFR5cGVkPHtmb286IHN0cmluZ30+IHt9XG4gKiBgYGBcbiAqIFR5cGluZyB0aGlzIG1ha2VzIGl0IHBvc3NpYmxlIGZvciBJREVzIGxpa2UgVlMgQ29kZSB3aXRoIHRoZSBTdmVsdGUgZXh0ZW5zaW9uXG4gKiB0byBwcm92aWRlIGludGVsbGlzZW5zZSBhbmQgdG8gdXNlIHRoZSBjb21wb25lbnQgbGlrZSB0aGlzIGluIGEgU3ZlbHRlIGZpbGVcbiAqIHdpdGggVHlwZVNjcmlwdDpcbiAqIGBgYHN2ZWx0ZVxuICogPHNjcmlwdCBsYW5nPVwidHNcIj5cbiAqIFx0aW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tIFwiY29tcG9uZW50LWxpYnJhcnlcIjtcbiAqIDwvc2NyaXB0PlxuICogPE15Q29tcG9uZW50IGZvbz17J2Jhcid9IC8+XG4gKiBgYGBcbiAqXG4gKiAjIyMjIFdoeSBub3QgbWFrZSB0aGlzIHBhcnQgb2YgYFN2ZWx0ZUNvbXBvbmVudChEZXYpYD9cbiAqIEJlY2F1c2VcbiAqIGBgYHRzXG4gKiBjbGFzcyBBU3ViY2xhc3NPZlN2ZWx0ZUNvbXBvbmVudCBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudDx7Zm9vOiBzdHJpbmd9PiB7fVxuICogY29uc3QgY29tcG9uZW50OiB0eXBlb2YgU3ZlbHRlQ29tcG9uZW50ID0gQVN1YmNsYXNzT2ZTdmVsdGVDb21wb25lbnQ7XG4gKiBgYGBcbiAqIHdpbGwgdGhyb3cgYSB0eXBlIGVycm9yLCBzbyB3ZSBuZWVkIHRvIHNlcGFyYXRlIHRoZSBtb3JlIHN0cmljdGx5IHR5cGVkIGNsYXNzLlxuICovXG5jbGFzcyBTdmVsdGVDb21wb25lbnRUeXBlZCBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudERldiB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICB9XG59XG5mdW5jdGlvbiBsb29wX2d1YXJkKHRpbWVvdXQpIHtcbiAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKERhdGUubm93KCkgLSBzdGFydCA+IHRpbWVvdXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW5maW5pdGUgbG9vcCBkZXRlY3RlZCcpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgSHRtbFRhZywgSHRtbFRhZ0h5ZHJhdGlvbiwgU3ZlbHRlQ29tcG9uZW50LCBTdmVsdGVDb21wb25lbnREZXYsIFN2ZWx0ZUNvbXBvbmVudFR5cGVkLCBTdmVsdGVFbGVtZW50LCBhY3Rpb25fZGVzdHJveWVyLCBhZGRfYXR0cmlidXRlLCBhZGRfY2xhc3NlcywgYWRkX2ZsdXNoX2NhbGxiYWNrLCBhZGRfbG9jYXRpb24sIGFkZF9yZW5kZXJfY2FsbGJhY2ssIGFkZF9yZXNpemVfbGlzdGVuZXIsIGFkZF9zdHlsZXMsIGFkZF90cmFuc2Zvcm0sIGFmdGVyVXBkYXRlLCBhcHBlbmQsIGFwcGVuZF9kZXYsIGFwcGVuZF9lbXB0eV9zdHlsZXNoZWV0LCBhcHBlbmRfaHlkcmF0aW9uLCBhcHBlbmRfaHlkcmF0aW9uX2RldiwgYXBwZW5kX3N0eWxlcywgYXNzaWduLCBhdHRyLCBhdHRyX2RldiwgYXR0cmlidXRlX3RvX29iamVjdCwgYmVmb3JlVXBkYXRlLCBiaW5kLCBiaW5kaW5nX2NhbGxiYWNrcywgYmxhbmtfb2JqZWN0LCBidWJibGUsIGNoZWNrX291dHJvcywgY2hpbGRyZW4sIGNsYWltX2NvbXBvbmVudCwgY2xhaW1fZWxlbWVudCwgY2xhaW1faHRtbF90YWcsIGNsYWltX3NwYWNlLCBjbGFpbV9zdmdfZWxlbWVudCwgY2xhaW1fdGV4dCwgY2xlYXJfbG9vcHMsIGNvbXBvbmVudF9zdWJzY3JpYmUsIGNvbXB1dGVfcmVzdF9wcm9wcywgY29tcHV0ZV9zbG90cywgY3JlYXRlRXZlbnREaXNwYXRjaGVyLCBjcmVhdGVfYW5pbWF0aW9uLCBjcmVhdGVfYmlkaXJlY3Rpb25hbF90cmFuc2l0aW9uLCBjcmVhdGVfY29tcG9uZW50LCBjcmVhdGVfaW5fdHJhbnNpdGlvbiwgY3JlYXRlX291dF90cmFuc2l0aW9uLCBjcmVhdGVfc2xvdCwgY3JlYXRlX3Nzcl9jb21wb25lbnQsIGN1cnJlbnRfY29tcG9uZW50LCBjdXN0b21fZXZlbnQsIGRhdGFzZXRfZGV2LCBkZWJ1ZywgZGVzdHJveV9ibG9jaywgZGVzdHJveV9jb21wb25lbnQsIGRlc3Ryb3lfZWFjaCwgZGV0YWNoLCBkZXRhY2hfYWZ0ZXJfZGV2LCBkZXRhY2hfYmVmb3JlX2RldiwgZGV0YWNoX2JldHdlZW5fZGV2LCBkZXRhY2hfZGV2LCBkaXJ0eV9jb21wb25lbnRzLCBkaXNwYXRjaF9kZXYsIGVhY2gsIGVsZW1lbnQsIGVsZW1lbnRfaXMsIGVtcHR5LCBlbmRfaHlkcmF0aW5nLCBlc2NhcGUsIGVzY2FwZV9hdHRyaWJ1dGVfdmFsdWUsIGVzY2FwZV9vYmplY3QsIGVzY2FwZWQsIGV4Y2x1ZGVfaW50ZXJuYWxfcHJvcHMsIGZpeF9hbmRfZGVzdHJveV9ibG9jaywgZml4X2FuZF9vdXRyb19hbmRfZGVzdHJveV9ibG9jaywgZml4X3Bvc2l0aW9uLCBmbHVzaCwgZ2V0QWxsQ29udGV4dHMsIGdldENvbnRleHQsIGdldF9hbGxfZGlydHlfZnJvbV9zY29wZSwgZ2V0X2JpbmRpbmdfZ3JvdXBfdmFsdWUsIGdldF9jdXJyZW50X2NvbXBvbmVudCwgZ2V0X2N1c3RvbV9lbGVtZW50c19zbG90cywgZ2V0X3Jvb3RfZm9yX3N0eWxlLCBnZXRfc2xvdF9jaGFuZ2VzLCBnZXRfc3ByZWFkX29iamVjdCwgZ2V0X3NwcmVhZF91cGRhdGUsIGdldF9zdG9yZV92YWx1ZSwgZ2xvYmFscywgZ3JvdXBfb3V0cm9zLCBoYW5kbGVfcHJvbWlzZSwgaGFzQ29udGV4dCwgaGFzX3Byb3AsIGlkZW50aXR5LCBpbml0LCBpbnNlcnQsIGluc2VydF9kZXYsIGluc2VydF9oeWRyYXRpb24sIGluc2VydF9oeWRyYXRpb25fZGV2LCBpbnRyb3MsIGludmFsaWRfYXR0cmlidXRlX25hbWVfY2hhcmFjdGVyLCBpc19jbGllbnQsIGlzX2Nyb3Nzb3JpZ2luLCBpc19lbXB0eSwgaXNfZnVuY3Rpb24sIGlzX3Byb21pc2UsIGxpc3RlbiwgbGlzdGVuX2RldiwgbG9vcCwgbG9vcF9ndWFyZCwgbWVyZ2Vfc3NyX3N0eWxlcywgbWlzc2luZ19jb21wb25lbnQsIG1vdW50X2NvbXBvbmVudCwgbm9vcCwgbm90X2VxdWFsLCBub3csIG51bGxfdG9fZW1wdHksIG9iamVjdF93aXRob3V0X3Byb3BlcnRpZXMsIG9uRGVzdHJveSwgb25Nb3VudCwgb25jZSwgb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2ssIHByZXZlbnRfZGVmYXVsdCwgcHJvcF9kZXYsIHF1ZXJ5X3NlbGVjdG9yX2FsbCwgcmFmLCBydW4sIHJ1bl9hbGwsIHNhZmVfbm90X2VxdWFsLCBzY2hlZHVsZV91cGRhdGUsIHNlbGVjdF9tdWx0aXBsZV92YWx1ZSwgc2VsZWN0X29wdGlvbiwgc2VsZWN0X29wdGlvbnMsIHNlbGVjdF92YWx1ZSwgc2VsZiwgc2V0Q29udGV4dCwgc2V0X2F0dHJpYnV0ZXMsIHNldF9jdXJyZW50X2NvbXBvbmVudCwgc2V0X2N1c3RvbV9lbGVtZW50X2RhdGEsIHNldF9kYXRhLCBzZXRfZGF0YV9kZXYsIHNldF9pbnB1dF90eXBlLCBzZXRfaW5wdXRfdmFsdWUsIHNldF9ub3csIHNldF9yYWYsIHNldF9zdG9yZV92YWx1ZSwgc2V0X3N0eWxlLCBzZXRfc3ZnX2F0dHJpYnV0ZXMsIHNwYWNlLCBzcHJlYWQsIHNyY191cmxfZXF1YWwsIHN0YXJ0X2h5ZHJhdGluZywgc3RvcF9wcm9wYWdhdGlvbiwgc3Vic2NyaWJlLCBzdmdfZWxlbWVudCwgdGV4dCwgdGljaywgdGltZV9yYW5nZXNfdG9fYXJyYXksIHRvX251bWJlciwgdG9nZ2xlX2NsYXNzLCB0cmFuc2l0aW9uX2luLCB0cmFuc2l0aW9uX291dCwgdHJ1c3RlZCwgdXBkYXRlX2F3YWl0X2Jsb2NrX2JyYW5jaCwgdXBkYXRlX2tleWVkX2VhY2gsIHVwZGF0ZV9zbG90LCB1cGRhdGVfc2xvdF9iYXNlLCB2YWxpZGF0ZV9jb21wb25lbnQsIHZhbGlkYXRlX2VhY2hfYXJndW1lbnQsIHZhbGlkYXRlX2VhY2hfa2V5cywgdmFsaWRhdGVfc2xvdHMsIHZhbGlkYXRlX3N0b3JlLCB4bGlua19hdHRyIH07XG4iLCJpbXBvcnQgeyBub29wLCBzYWZlX25vdF9lcXVhbCwgc3Vic2NyaWJlLCBydW5fYWxsLCBpc19mdW5jdGlvbiB9IGZyb20gJy4uL2ludGVybmFsL2luZGV4Lm1qcyc7XG5leHBvcnQgeyBnZXRfc3RvcmVfdmFsdWUgYXMgZ2V0IH0gZnJvbSAnLi4vaW50ZXJuYWwvaW5kZXgubWpzJztcblxuY29uc3Qgc3Vic2NyaWJlcl9xdWV1ZSA9IFtdO1xuLyoqXG4gKiBDcmVhdGVzIGEgYFJlYWRhYmxlYCBzdG9yZSB0aGF0IGFsbG93cyByZWFkaW5nIGJ5IHN1YnNjcmlwdGlvbi5cbiAqIEBwYXJhbSB2YWx1ZSBpbml0aWFsIHZhbHVlXG4gKiBAcGFyYW0ge1N0YXJ0U3RvcE5vdGlmaWVyfXN0YXJ0IHN0YXJ0IGFuZCBzdG9wIG5vdGlmaWNhdGlvbnMgZm9yIHN1YnNjcmlwdGlvbnNcbiAqL1xuZnVuY3Rpb24gcmVhZGFibGUodmFsdWUsIHN0YXJ0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3Vic2NyaWJlOiB3cml0YWJsZSh2YWx1ZSwgc3RhcnQpLnN1YnNjcmliZVxuICAgIH07XG59XG4vKipcbiAqIENyZWF0ZSBhIGBXcml0YWJsZWAgc3RvcmUgdGhhdCBhbGxvd3MgYm90aCB1cGRhdGluZyBhbmQgcmVhZGluZyBieSBzdWJzY3JpcHRpb24uXG4gKiBAcGFyYW0geyo9fXZhbHVlIGluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7U3RhcnRTdG9wTm90aWZpZXI9fXN0YXJ0IHN0YXJ0IGFuZCBzdG9wIG5vdGlmaWNhdGlvbnMgZm9yIHN1YnNjcmlwdGlvbnNcbiAqL1xuZnVuY3Rpb24gd3JpdGFibGUodmFsdWUsIHN0YXJ0ID0gbm9vcCkge1xuICAgIGxldCBzdG9wO1xuICAgIGNvbnN0IHN1YnNjcmliZXJzID0gbmV3IFNldCgpO1xuICAgIGZ1bmN0aW9uIHNldChuZXdfdmFsdWUpIHtcbiAgICAgICAgaWYgKHNhZmVfbm90X2VxdWFsKHZhbHVlLCBuZXdfdmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ld192YWx1ZTtcbiAgICAgICAgICAgIGlmIChzdG9wKSB7IC8vIHN0b3JlIGlzIHJlYWR5XG4gICAgICAgICAgICAgICAgY29uc3QgcnVuX3F1ZXVlID0gIXN1YnNjcmliZXJfcXVldWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc3Vic2NyaWJlciBvZiBzdWJzY3JpYmVycykge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyWzFdKCk7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWUucHVzaChzdWJzY3JpYmVyLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChydW5fcXVldWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyX3F1ZXVlW2ldWzBdKHN1YnNjcmliZXJfcXVldWVbaSArIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZShmbikge1xuICAgICAgICBzZXQoZm4odmFsdWUpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKHJ1biwgaW52YWxpZGF0ZSA9IG5vb3ApIHtcbiAgICAgICAgY29uc3Qgc3Vic2NyaWJlciA9IFtydW4sIGludmFsaWRhdGVdO1xuICAgICAgICBzdWJzY3JpYmVycy5hZGQoc3Vic2NyaWJlcik7XG4gICAgICAgIGlmIChzdWJzY3JpYmVycy5zaXplID09PSAxKSB7XG4gICAgICAgICAgICBzdG9wID0gc3RhcnQoc2V0KSB8fCBub29wO1xuICAgICAgICB9XG4gICAgICAgIHJ1bih2YWx1ZSk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBzdWJzY3JpYmVycy5kZWxldGUoc3Vic2NyaWJlcik7XG4gICAgICAgICAgICBpZiAoc3Vic2NyaWJlcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHN0b3AoKTtcbiAgICAgICAgICAgICAgICBzdG9wID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgc2V0LCB1cGRhdGUsIHN1YnNjcmliZSB9O1xufVxuZnVuY3Rpb24gZGVyaXZlZChzdG9yZXMsIGZuLCBpbml0aWFsX3ZhbHVlKSB7XG4gICAgY29uc3Qgc2luZ2xlID0gIUFycmF5LmlzQXJyYXkoc3RvcmVzKTtcbiAgICBjb25zdCBzdG9yZXNfYXJyYXkgPSBzaW5nbGVcbiAgICAgICAgPyBbc3RvcmVzXVxuICAgICAgICA6IHN0b3JlcztcbiAgICBjb25zdCBhdXRvID0gZm4ubGVuZ3RoIDwgMjtcbiAgICByZXR1cm4gcmVhZGFibGUoaW5pdGlhbF92YWx1ZSwgKHNldCkgPT4ge1xuICAgICAgICBsZXQgaW5pdGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuICAgICAgICBsZXQgcGVuZGluZyA9IDA7XG4gICAgICAgIGxldCBjbGVhbnVwID0gbm9vcDtcbiAgICAgICAgY29uc3Qgc3luYyA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChwZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm4oc2luZ2xlID8gdmFsdWVzWzBdIDogdmFsdWVzLCBzZXQpO1xuICAgICAgICAgICAgaWYgKGF1dG8pIHtcbiAgICAgICAgICAgICAgICBzZXQocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsZWFudXAgPSBpc19mdW5jdGlvbihyZXN1bHQpID8gcmVzdWx0IDogbm9vcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdW5zdWJzY3JpYmVycyA9IHN0b3Jlc19hcnJheS5tYXAoKHN0b3JlLCBpKSA9PiBzdWJzY3JpYmUoc3RvcmUsICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdmFsdWVzW2ldID0gdmFsdWU7XG4gICAgICAgICAgICBwZW5kaW5nICY9IH4oMSA8PCBpKTtcbiAgICAgICAgICAgIGlmIChpbml0ZWQpIHtcbiAgICAgICAgICAgICAgICBzeW5jKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIHBlbmRpbmcgfD0gKDEgPDwgaSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgaW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgc3luYygpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgICAgIHJ1bl9hbGwodW5zdWJzY3JpYmVycyk7XG4gICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IGRlcml2ZWQsIHJlYWRhYmxlLCB3cml0YWJsZSB9O1xuIiwiaW1wb3J0IHsgV3JpdGFibGUsIHdyaXRhYmxlIH0gZnJvbSBcInN2ZWx0ZS9zdG9yZVwiO1xuaW1wb3J0IHR5cGUgeyBNYW5pZmVzdCB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuXG50eXBlIEVycm9yU3RvcmUgPSBSZWNvcmQ8c3RyaW5nLCBNYW5pZmVzdFtcImVycm9yXCJdPjtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpOiBXcml0YWJsZTxFcnJvclN0b3JlPiB7XG4gIHJldHVybiB3cml0YWJsZSh7fSk7XG59XG5cbmV4cG9ydCBjb25zdCBFcnJvclN0b3JlID0gaW5pdGlhbGl6ZSgpO1xuIiwiaW1wb3J0IHsgRXJyb3JTdG9yZSB9IGZyb20gXCIuLi9zdG9yZS9lcnJvclwiO1xuaW1wb3J0IHR5cGUgeyBNYW5pZmVzdCB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2U8VCA9IHVua25vd24+KFxuICByZXNwb25zZTogUmVzcG9uc2UsXG4pOiBQcm9taXNlPFQ+IHtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIGNvbnN0IHBhc3NlZEVycm9yID0gYXdhaXQgcmVzcG9uc2UuanNvbigpLnRoZW4oXG4gICAgICAoanNvbjoge1xuICAgICAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgICAgcmVzcG9uc2U/OiB7XG4gICAgICAgICAgZXJyb3I/OiBzdHJpbmc7XG4gICAgICAgIH07XG4gICAgICB9KSA9PiBqc29uLFxuICAgICk7XG5cbiAgICBjb25zdCBtZXNzYWdlID0gcGFzc2VkRXJyb3I/LnJlc3BvbnNlPy5lcnJvciB8fCBwYXNzZWRFcnJvcj8ubWVzc2FnZTtcblxuICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIGVycm9yLm5hbWUgPSBwYXNzZWRFcnJvci5uYW1lO1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7IG1lc3NhZ2U6IGVycm9yLCBzdGF0dXNDb2RlOiByZXNwb25zZS5zdGF0dXMgfSk7XG4gIH1cbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn1cblxudHlwZSBIVFRQTWV0aG9kID0gXCJQT1NUXCIgfCBcIkdFVFwiIHwgXCJQVVRcIiB8IFwiUEFUQ0hcIiB8IFwiT1BUSU9OU1wiIHwgdW5kZWZpbmVkO1xuXG50eXBlIEZldGNoT3B0aW9ucyA9IHtcbiAgYm9keT86IHVua25vd247XG4gIG1ldGhvZD86IEhUVFBNZXRob2Q7XG4gIGNvbXBvbmVudF9pZD86IHN0cmluZztcbiAgYWNjZXNzX3Rva2VuPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZldGNoQ29uZmlnKFxuICBvcHRzOiBGZXRjaE9wdGlvbnMgPSB7IGNvbXBvbmVudF9pZDogXCJcIiB9LFxuKTogUmVxdWVzdEluaXQge1xuICByZXR1cm4ge1xuICAgIG1ldGhvZDogb3B0cy5tZXRob2QgfHwgXCJHRVRcIiwgLy8gR0VUIGlzIGRlZmF1bHQgbWV0aG9kXG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgXCJYLUNvbXBvbmVudC1JZFwiOiBvcHRzLmNvbXBvbmVudF9pZCB8fCBcIlwiLCAvLyBDb21wb25lbnQgSUQgaXMgcGFzc2VkIGFzIGhlYWRlclxuICAgICAgXCJYLUFjY2Vzcy1Ub2tlblwiOiBvcHRzLmFjY2Vzc190b2tlbiB8fCBcIlwiLCAvLyBBY2Nlc3MgVG9rZW4gaXMgcGFzc2VkIGFzIGhlYWRlclxuICAgIH0sXG4gICAgYm9keTogb3B0cy5ib2R5ID8gSlNPTi5zdHJpbmdpZnkob3B0cy5ib2R5KSA6IHVuZGVmaW5lZCxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUVycm9yKGlkOiBzdHJpbmcsIGVycm9yOiBNYW5pZmVzdFtcImVycm9yXCJdKTogbmV2ZXIge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgRXJyb3JTdG9yZS51cGRhdGUoKGVycm9yTWFwKSA9PiAoeyAuLi5lcnJvck1hcCwgW2lkXTogZXJyb3IgfSkpO1xuICB0aHJvdyBlcnJvcjtcbn1cblxuY29uc3QgUkVHSU9OX01BUFBJTkc6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIFwiMDAxXCI6IFwiXCIsIC8vIFVTXG4gIFwiMDAyXCI6IFwiaXJlbGFuZC1cIiwgLy8gRVVcbiAgXCIwMDNcIjogXCJjYW5hZGEtXCIsIC8vIENhbmFkYVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1pZGRsZXdhcmVBcGlVcmwoaWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCByZWdpb24gPSBcIlwiO1xuICBpZiAoaWQuc3Vic3RyaW5nKDMsIDQpID09PSBcIi1cIikge1xuICAgIGNvbnN0IGNvZGUgPSBpZC5zdWJzdHJpbmcoMCwgMyk7XG4gICAgaWYgKHR5cGVvZiBSRUdJT05fTUFQUElOR1tjb2RlXSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmVnaW9uID0gUkVHSU9OX01BUFBJTkdbY29kZV07XG4gICAgfVxuICB9XG4gIGNvbnN0IEFQSV9HQVRFV0FZID0gYGh0dHBzOi8vJHtyZWdpb259JHtwcm9jZXNzLmVudi5BUElfR0FURVdBWX1gO1xuICByZXR1cm4gQVBJX0dBVEVXQVk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWxlbmNlKGVycm9yOiBFcnJvcikge31cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUXVlcnlQYXJhbXMocGFyYW1zOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KTogc3RyaW5nIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHBhcmFtcylcbiAgICAucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgaWYgKHBhcmFtc1trZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYWNjLmFwcGVuZChrZXksIHBhcmFtc1trZXldKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgbmV3IFVSTFNlYXJjaFBhcmFtcygpKVxuICAgIC50b1N0cmluZygpO1xufVxuIiwiaW1wb3J0IHtcbiAgZ2V0RmV0Y2hDb25maWcsXG4gIGhhbmRsZUVycm9yLFxuICBoYW5kbGVSZXNwb25zZSxcbiAgZ2V0TWlkZGxld2FyZUFwaVVybCxcbiAgYnVpbGRRdWVyeVBhcmFtcyxcbn0gZnJvbSBcIi4uL21ldGhvZHMvYXBpXCI7XG5pbXBvcnQgdHlwZSB7XG4gIENvbnRhY3RzUXVlcnksXG4gIENvbnRhY3QsXG4gIENvbnRhY3RTZWFyY2hRdWVyeSxcbiAgQ29udGFjdHNRdWVyeVBhcmFtcyxcbn0gZnJvbSBcIkBjb21tb25zL3R5cGVzL0NvbnRhY3RzXCI7XG5pbXBvcnQgdHlwZSB7IE1pZGRsZXdhcmVSZXNwb25zZSwgVGhyZWFkIH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENvbnRhY3RzID0gYXN5bmMgKFxuICBxdWVyeTogQ29udGFjdHNRdWVyeSxcbiAgcGFyYW1zOiBDb250YWN0c1F1ZXJ5UGFyYW1zLFxuKTogUHJvbWlzZTxDb250YWN0W10+ID0+IHtcbiAgY29uc3QgdXJsID0gYCR7Z2V0TWlkZGxld2FyZUFwaVVybChcbiAgICBxdWVyeS5jb21wb25lbnRfaWQsXG4gICl9L2NvbnRhY3QtbGlzdC9jb250YWN0cz8ke2J1aWxkUXVlcnlQYXJhbXMocGFyYW1zKX1gO1xuXG4gIGNvbnN0IGNvbnRhY3RzID0gYXdhaXQgZmV0Y2goXG4gICAgdXJsLFxuICAgIGdldEZldGNoQ29uZmlnKHtcbiAgICAgIGNvbXBvbmVudF9pZDogcXVlcnkuY29tcG9uZW50X2lkLFxuICAgICAgYWNjZXNzX3Rva2VuOiBxdWVyeS5hY2Nlc3NfdG9rZW4sXG4gICAgfSksXG4gIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxDb250YWN0W10+PihyZXNwb25zZSkpXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xuICByZXR1cm4gY29udGFjdHMgPz8gW107XG59O1xuXG4vLyBxdWVyeS5xdWVyeSBzaG91bGQgYmUgYSBxdWVyeVN0cmluZyBhcyBkZWZpbmVkIGF0IGh0dHBzOi8vZG9jcy5ueWxhcy5jb20vcmVmZXJlbmNlI2NvbnRhY3RzLTFcbmV4cG9ydCBjb25zdCBmZXRjaENvbnRhY3RzQnlRdWVyeSA9IGFzeW5jIChcbiAgcXVlcnk6IENvbnRhY3RTZWFyY2hRdWVyeSxcbik6IFByb21pc2U8Q29udGFjdFtdPiA9PiB7XG4gIGNvbnN0IGNvbnRhY3RzID0gYXdhaXQgZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChxdWVyeS5jb21wb25lbnRfaWQpfS9jb250YWN0cyR7cXVlcnkucXVlcnl9YCxcbiAgICBnZXRGZXRjaENvbmZpZyh7XG4gICAgICBjb21wb25lbnRfaWQ6IHF1ZXJ5LmNvbXBvbmVudF9pZCxcbiAgICAgIGFjY2Vzc190b2tlbjogcXVlcnkuYWNjZXNzX3Rva2VuLFxuICAgIH0pLFxuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8Q29udGFjdFtdPj4ocmVzcG9uc2UpKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKTtcblxuICByZXR1cm4gY29udGFjdHMgPz8gW107XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDb250YWN0SW1hZ2UgPSBhc3luYyAoXG4gIHF1ZXJ5OiBDb250YWN0c1F1ZXJ5LFxuICBpZDogc3RyaW5nLFxuKTogUHJvbWlzZTxzdHJpbmc+ID0+IHtcbiAgcmV0dXJuIGF3YWl0IGZldGNoKFxuICAgIGAke2dldE1pZGRsZXdhcmVBcGlVcmwocXVlcnkuY29tcG9uZW50X2lkKX0vY29udGFjdHMvJHtpZH0vcGljdHVyZWAsXG4gICAgZ2V0RmV0Y2hDb25maWcoe1xuICAgICAgY29tcG9uZW50X2lkOiBxdWVyeS5jb21wb25lbnRfaWQsXG4gICAgICBhY2Nlc3NfdG9rZW46IHF1ZXJ5LmFjY2Vzc190b2tlbixcbiAgICB9KSxcbiAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPHN0cmluZz4+KHJlc3BvbnNlKSlcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgcmV0dXJuIGpzb24ucmVzcG9uc2U7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihxdWVyeS5jb21wb25lbnRfaWQsIGVycm9yKSk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDb250YWN0VGhyZWFkcyA9IGFzeW5jIChcbiAgcXVlcnk6IENvbnRhY3RzUXVlcnksXG4gIG9mZnNldDogbnVtYmVyLFxuICBsaW1pdDogbnVtYmVyLFxuKTogUHJvbWlzZTxUaHJlYWRbXT4gPT4ge1xuICByZXR1cm4gYXdhaXQgZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChcbiAgICAgIHF1ZXJ5LmNvbXBvbmVudF9pZCxcbiAgICApfS90aHJlYWRzP29mZnNldD0ke29mZnNldH0mbGltaXQ9JHtsaW1pdH1gLFxuICAgIGdldEZldGNoQ29uZmlnKHF1ZXJ5KSxcbiAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPFRocmVhZFtdPj4ocmVzcG9uc2UpKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn07XG4iLCJpbXBvcnQge1xuICBnZXRGZXRjaENvbmZpZyxcbiAgaGFuZGxlRXJyb3IsXG4gIGhhbmRsZVJlc3BvbnNlLFxuICBnZXRNaWRkbGV3YXJlQXBpVXJsLFxufSBmcm9tIFwiLi4vbWV0aG9kcy9hcGlcIjtcbmltcG9ydCB0eXBlIHtcbiAgTWFpbGJveFF1ZXJ5LFxuICBUaHJlYWQsXG4gIENvbnZlcnNhdGlvblF1ZXJ5LFxuICBDb252ZXJzYXRpb24sXG4gIE1pZGRsZXdhcmVSZXNwb25zZSxcbn0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFRocmVhZHMgPSAoXG4gIHF1ZXJ5OiBNYWlsYm94UXVlcnksXG4gIGxpbWl0OiBudW1iZXIsXG4gIG9mZnNldDogbnVtYmVyLFxuKTogUHJvbWlzZTxUaHJlYWRbXT4gPT4ge1xuICBpZiAocXVlcnkudGhyZWFkX2lkcykge1xuICAgIC8vICZsaW1pdD0ke2xpbWl0fSZvZmZzZXQ9JHtvZmZzZXR9XG4gICAgY29uc3QgcGFnZV9vZl9pZHMgPSBxdWVyeS50aHJlYWRfaWRzLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgbGltaXQpO1xuICAgIHJldHVybiBQcm9taXNlLmFsbChcbiAgICAgIHBhZ2Vfb2ZfaWRzLm1hcChhc3luYyAodGhyZWFkX2lkKSA9PiB7XG4gICAgICAgIC8vIE55bGFzIEFQSSBkb2VzIG5vdCBzdXBwb3J0IGZldGNoaW5nIHRocmVhZHMgaW4gYnVsaywgc28gbXVzdCBmZXRjaCB0aGVtIG9uZVxuICAgICAgICAvLyBhdCBhIHRpbWUgOihcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPSBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKFxuICAgICAgICAgIHF1ZXJ5LmNvbXBvbmVudF9pZCxcbiAgICAgICAgKX0vdGhyZWFkcy8ke3RocmVhZF9pZH0/dmlldz1leHBhbmRlZGA7XG4gICAgICAgIC8vIFRPRE86IGlkZWFsbHkgdGhpcyB3b3VsZG4ndCByZXBsaWNhdGUgbXVjaCBvZiB0aGUgY29kZSBmcm9tIGJlbG93XG4gICAgICAgIHJldHVybiBhd2FpdCBmZXRjaChxdWVyeVN0cmluZywgZ2V0RmV0Y2hDb25maWcocXVlcnkpKVxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT5cbiAgICAgICAgICAgIGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxUaHJlYWQ+PihyZXNwb25zZSksXG4gICAgICAgICAgKVxuICAgICAgICAgIC50aGVuKChqc29uKSA9PiBqc29uLnJlc3BvbnNlKVxuICAgICAgICAgIC8vIFRPRE86IFJlbW92ZSB0aGlzIHVnbHkgaGFjayB3aGVuIHdlIGZpeCB0aGUgQVBJIGZyb20gcmV0dXJuaW5nIGdob3N0IG1lc3NhZ2VzIChlLmcuIHcvbyBhIGZyb20vdG8gZmllbGQpXG4gICAgICAgICAgLnRoZW4oKHRocmVhZCkgPT4gKHtcbiAgICAgICAgICAgIC4uLnRocmVhZCxcbiAgICAgICAgICAgIG1lc3NhZ2VzOiB0aHJlYWQubWVzc2FnZXMuZmlsdGVyKFxuICAgICAgICAgICAgICAobWVzc2FnZSkgPT4gbWVzc2FnZS5mcm9tLmxlbmd0aCAhPT0gMCB8fCBtZXNzYWdlLnRvLmxlbmd0aCAhPT0gMCxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgfSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuICBsZXQgcXVlcnlTdHJpbmcgPSBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKFxuICAgIHF1ZXJ5LmNvbXBvbmVudF9pZCxcbiAgKX0vdGhyZWFkcz92aWV3PWV4cGFuZGVkJm5vdF9pbj10cmFzaCZsaW1pdD0ke2xpbWl0fSZvZmZzZXQ9JHtvZmZzZXR9YDtcbiAgaWYgKHF1ZXJ5LnF1ZXJ5KSB7XG4gICAgT2JqZWN0LmVudHJpZXMocXVlcnkucXVlcnkpLmZvckVhY2goXG4gICAgICAocGFyYW0pID0+IChxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nLmNvbmNhdChgJiR7cGFyYW1bMF19PSR7cGFyYW1bMV19YCkpLFxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICBmZXRjaChxdWVyeVN0cmluZywgZ2V0RmV0Y2hDb25maWcocXVlcnkpKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PlxuICAgICAgICBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8VGhyZWFkW10+PihyZXNwb25zZSksXG4gICAgICApXG4gICAgICAudGhlbigoanNvbikgPT4ganNvbi5yZXNwb25zZSlcbiAgICAgIC8vIFRPRE86IFJlbW92ZSB0aGlzIHVnbHkgaGFjayB3aGVuIHdlIGZpeCB0aGUgQVBJIGZyb20gcmV0dXJuaW5nIGdob3N0IG1lc3NhZ2VzIChlLmcuIHcvbyBhIGZyb20vdG8gZmllbGQpXG4gICAgICAudGhlbigodGhyZWFkcykgPT5cbiAgICAgICAgdGhyZWFkcy5tYXAoKHRocmVhZCkgPT4gKHtcbiAgICAgICAgICAuLi50aHJlYWQsXG4gICAgICAgICAgbWVzc2FnZXM6IHRocmVhZC5tZXNzYWdlcy5maWx0ZXIoXG4gICAgICAgICAgICAobWVzc2FnZSkgPT4gbWVzc2FnZS5mcm9tLmxlbmd0aCAhPT0gMCB8fCBtZXNzYWdlLnRvLmxlbmd0aCAhPT0gMCxcbiAgICAgICAgICApLFxuICAgICAgICB9KSksXG4gICAgICApXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihxdWVyeS5jb21wb25lbnRfaWQsIGVycm9yKSlcbiAgKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFRocmVhZENvdW50KHF1ZXJ5OiBNYWlsYm94UXVlcnkpOiBQcm9taXNlPG51bWJlcj4ge1xuICBsZXQgcXVlcnlTdHJpbmcgPSBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKFxuICAgIHF1ZXJ5LmNvbXBvbmVudF9pZCxcbiAgKX0vdGhyZWFkcz92aWV3PWV4cGFuZGVkJm5vdF9pbj10cmFzaCZ2aWV3PWNvdW50YDtcbiAgaWYgKHF1ZXJ5LnF1ZXJ5KSB7XG4gICAgT2JqZWN0LmVudHJpZXMocXVlcnkucXVlcnkpLmZvckVhY2goXG4gICAgICAocGFyYW0pID0+IChxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nLmNvbmNhdChgJiR7cGFyYW1bMF19PSR7cGFyYW1bMV19YCkpLFxuICAgICk7XG4gIH1cblxuICBpZiAocXVlcnkua2V5d29yZFRvU2VhcmNoKSB7XG4gICAgcXVlcnlTdHJpbmcgKz0gYCZxPSR7cXVlcnkua2V5d29yZFRvU2VhcmNofWA7XG4gIH1cblxuICByZXR1cm4gZmV0Y2gocXVlcnlTdHJpbmcsIGdldEZldGNoQ29uZmlnKHF1ZXJ5KSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxhbnk+PihyZXNwb25zZSkpXG4gICAgLnRoZW4oKGpzb24pID0+IGpzb24ucmVzcG9uc2UuY291bnQpO1xufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hTZWFyY2hSZXN1bHRUaHJlYWRzID0gKFxuICBxdWVyeTogTWFpbGJveFF1ZXJ5LFxuKTogUHJvbWlzZTxUaHJlYWRbXT4gPT4ge1xuICBjb25zdCBxdWVyeVN0cmluZyA9IGAke2dldE1pZGRsZXdhcmVBcGlVcmwoXG4gICAgcXVlcnkuY29tcG9uZW50X2lkLFxuICApfS90aHJlYWRzL3NlYXJjaD9xPSR7cXVlcnkua2V5d29yZFRvU2VhcmNofSZ2aWV3PWV4cGFuZGVkJmxpbWl0PSR7XG4gICAgcXVlcnkucXVlcnkubGltaXRcbiAgfSZvZmZzZXQ9JHtxdWVyeS5xdWVyeS5vZmZzZXR9YDtcblxuICByZXR1cm4gZmV0Y2gocXVlcnlTdHJpbmcsIGdldEZldGNoQ29uZmlnKHF1ZXJ5KSlcbiAgICAudGhlbihhc3luYyAocmVzcG9uc2UpID0+XG4gICAgICBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8VGhyZWFkW10+PihyZXNwb25zZSksXG4gICAgKVxuICAgIC50aGVuKChqc29uKSA9PiBqc29uLnJlc3BvbnNlKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaFRocmVhZCA9IGFzeW5jIChcbiAgcXVlcnk6IENvbnZlcnNhdGlvblF1ZXJ5LFxuKTogUHJvbWlzZTxDb252ZXJzYXRpb24+ID0+IHtcbiAgY29uc3QgdGhyZWFkID0gYXdhaXQgZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChxdWVyeS5jb21wb25lbnRfaWQpfS90aHJlYWRzLyR7XG4gICAgICBxdWVyeS50aHJlYWRfaWRcbiAgICB9P3ZpZXc9ZXhwYW5kZWRgLFxuICAgIGdldEZldGNoQ29uZmlnKHtcbiAgICAgIGNvbXBvbmVudF9pZDogcXVlcnkuY29tcG9uZW50X2lkLFxuICAgICAgYWNjZXNzX3Rva2VuOiBxdWVyeS5hY2Nlc3NfdG9rZW4sXG4gICAgfSksXG4gIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+XG4gICAgICBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8Q29udmVyc2F0aW9uPj4ocmVzcG9uc2UpLFxuICAgIClcbiAgICAudGhlbigoanNvbikgPT4ganNvbi5yZXNwb25zZSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihxdWVyeS5jb21wb25lbnRfaWQsIGVycm9yKSk7XG5cbiAgcmV0dXJuIHRocmVhZDtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVUaHJlYWQgPSAoXG4gIHF1ZXJ5OiBDb252ZXJzYXRpb25RdWVyeSxcbiAgdXBkYXRlZFRocmVhZDogQ29udmVyc2F0aW9uLFxuKTogUHJvbWlzZTxDb252ZXJzYXRpb24+ID0+IHtcbiAgLy8gYWNjZXB0cyB1bnJlYWQsIHN0YXJyZWQsIGZvbGRlcl9pZCArIGxhYmVsX2lkcy4gZGV2ZWxvcGVyLm55bGFzLmNvbS9kb2NzL2FwaS8jcHV0L3RocmVhZHMvaWRcbiAgcmV0dXJuIGZldGNoKFxuICAgIGAke2dldE1pZGRsZXdhcmVBcGlVcmwocXVlcnkuY29tcG9uZW50X2lkKX0vdGhyZWFkcy8ke3VwZGF0ZWRUaHJlYWQuaWR9YCxcbiAgICBnZXRGZXRjaENvbmZpZyh7XG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICBjb21wb25lbnRfaWQ6IHF1ZXJ5LmNvbXBvbmVudF9pZCxcbiAgICAgIGFjY2Vzc190b2tlbjogcXVlcnkuYWNjZXNzX3Rva2VuLFxuICAgICAgYm9keToge1xuICAgICAgICB1bnJlYWQ6IHVwZGF0ZWRUaHJlYWQudW5yZWFkLFxuICAgICAgICBzdGFycmVkOiB1cGRhdGVkVGhyZWFkLnN0YXJyZWQsXG4gICAgICAgIGZvbGRlcl9pZDogdXBkYXRlZFRocmVhZC5mb2xkZXJfaWQsXG4gICAgICAgIGxhYmVsX2lkczogdXBkYXRlZFRocmVhZC5sYWJlbF9pZHMsXG4gICAgICB9LFxuICAgIH0pLFxuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PlxuICAgICAgaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPENvbnZlcnNhdGlvbj4+KHJlc3BvbnNlKSxcbiAgICApXG4gICAgLnRoZW4oKGpzb24pID0+IGpzb24ucmVzcG9uc2UpXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xufTtcbiIsImltcG9ydCB7XG4gIGdldEZldGNoQ29uZmlnLFxuICBoYW5kbGVFcnJvcixcbiAgaGFuZGxlUmVzcG9uc2UsXG4gIGdldE1pZGRsZXdhcmVBcGlVcmwsXG59IGZyb20gXCIuLi9tZXRob2RzL2FwaVwiO1xuaW1wb3J0IHR5cGUgeyBNYW5pZmVzdCwgTWlkZGxld2FyZVJlc3BvbnNlIH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG5cbmV4cG9ydCBjb25zdCBmZXRjaE1hbmlmZXN0ID0gYXN5bmMgKFxuICBpZDogc3RyaW5nLFxuICBhY2Nlc3NfdG9rZW4/OiBzdHJpbmcsXG4pOiBQcm9taXNlPE1hbmlmZXN0PiA9PiB7XG4gIHJldHVybiBhd2FpdCBmZXRjaChcbiAgICBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKGlkKX0vbWFuaWZlc3RgLFxuICAgIGdldEZldGNoQ29uZmlnKHtcbiAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgIGNvbXBvbmVudF9pZDogaWQsXG4gICAgfSksXG4gIClcbiAgICAudGhlbjxNaWRkbGV3YXJlUmVzcG9uc2U+KGhhbmRsZVJlc3BvbnNlKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuY29tcG9uZW50LnRoZW1pbmcpXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IoaWQsIGVycm9yKSk7XG59O1xuXG4vLyBBbGxvd3MgPG55bGFzLXNjaGVkdWxlLWVkaXRvcj4gdG8gbW9kaWZ5IGl0cyBvd24gcHJvcGVydGllc1xuXG5leHBvcnQgY29uc3Qgc2F2ZU1hbmlmZXN0ID0gYXN5bmMgKFxuICBpZDogc3RyaW5nLFxuICBtYW5pZmVzdDogTWFuaWZlc3QsXG4gIGFjY2Vzc190b2tlbj86IHN0cmluZyxcbik6IFByb21pc2U8TWFuaWZlc3Q+ID0+IHtcbiAgcmV0dXJuIGZldGNoKFxuICAgIGAke2dldE1pZGRsZXdhcmVBcGlVcmwoaWQpfS9jb21wb25lbnRgLFxuICAgIGdldEZldGNoQ29uZmlnKHtcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgIGNvbXBvbmVudF9pZDogaWQsXG4gICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICBib2R5OiB7IHNldHRpbmdzOiBtYW5pZmVzdCB9LFxuICAgIH0pLFxuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8TWFuaWZlc3Q+PihyZXNwb25zZSkpXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pO1xufTtcbiIsImltcG9ydCB7IE1lc3NhZ2VTdG9yZSB9IGZyb20gXCIuLi9zdG9yZS9tZXNzYWdlc1wiO1xuaW1wb3J0IHtcbiAgZ2V0RmV0Y2hDb25maWcsXG4gIGhhbmRsZUVycm9yLFxuICBoYW5kbGVSZXNwb25zZSxcbiAgZ2V0TWlkZGxld2FyZUFwaVVybCxcbn0gZnJvbSBcIi4uL21ldGhvZHMvYXBpXCI7XG5pbXBvcnQgdHlwZSB7XG4gIFNpbmd1bGFyRW1haWwsXG4gIENvbW1vblF1ZXJ5LFxuICBNZXNzYWdlc1F1ZXJ5LFxuICBGaWxlIGFzIE55bGFzRmlsZSxcbiAgTWVzc2FnZSBhcyBOeWxhc01lc3NhZ2UsXG4gIE1pZGRsZXdhcmVSZXNwb25zZSxcbn0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG5pbXBvcnQgdHlwZSB7IE1lc3NhZ2UgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IHNlbmRNZXNzYWdlID0gYXN5bmMgKFxuICBjb21wb25lbnRfaWQ6IHN0cmluZyxcbiAgbXNnOiBNZXNzYWdlLFxuICBhY2Nlc3NfdG9rZW4/OiBzdHJpbmcsXG4pOiBQcm9taXNlPE55bGFzTWVzc2FnZT4gPT4ge1xuICByZXR1cm4gYXdhaXQgZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChjb21wb25lbnRfaWQpfS9zZW5kYCxcbiAgICBnZXRGZXRjaENvbmZpZyh7IG1ldGhvZDogXCJQT1NUXCIsIGNvbXBvbmVudF9pZCwgYWNjZXNzX3Rva2VuLCBib2R5OiBtc2cgfSksXG4gIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+XG4gICAgICBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8TnlsYXNNZXNzYWdlPj4ocmVzcG9uc2UpLFxuICAgIClcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgcmV0dXJuIGpzb24ucmVzcG9uc2U7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihjb21wb25lbnRfaWQsIGVycm9yKSk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlTWVzc2FnZShcbiAgY29tcG9uZW50X2lkOiBzdHJpbmcsXG4gIG1lc3NhZ2U6IE55bGFzTWVzc2FnZSxcbiAgYWNjZXNzX3Rva2VuPzogc3RyaW5nLFxuKTogUHJvbWlzZTxOeWxhc01lc3NhZ2U+IHtcbiAgY29uc3QgdXJsID0gYCR7Z2V0TWlkZGxld2FyZUFwaVVybChjb21wb25lbnRfaWQpfS9tZXNzYWdlcy8ke21lc3NhZ2UuaWR9YDtcbiAgY29uc3QgZmV0Y2hDb25maWcgPSBnZXRGZXRjaENvbmZpZyh7XG4gICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgIGNvbXBvbmVudF9pZCxcbiAgICBhY2Nlc3NfdG9rZW4sXG4gICAgYm9keTogeyBmb2xkZXJfaWQ6IG1lc3NhZ2UuZm9sZGVyX2lkLCBsYWJlbF9pZHM6IG1lc3NhZ2UubGFiZWxfaWRzIH0sXG4gIH0pO1xuICByZXR1cm4gYXdhaXQgZmV0Y2godXJsLCBmZXRjaENvbmZpZylcbiAgICAudGhlbigocmVzcG9uc2UpID0+XG4gICAgICBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8TnlsYXNNZXNzYWdlPj4ocmVzcG9uc2UpLFxuICAgIClcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgcmV0dXJuIGpzb24ucmVzcG9uc2U7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihjb21wb25lbnRfaWQsIGVycm9yKSk7XG59XG5cbmV4cG9ydCBjb25zdCB1cGxvYWRGaWxlID0gYXN5bmMgKFxuICBjb21wb25lbnRfaWQ6IHN0cmluZyxcbiAgZmlsZTogRmlsZSxcbiAgYWNjZXNzX3Rva2VuPzogc3RyaW5nLFxuKTogUHJvbWlzZTxOeWxhc0ZpbGU+ID0+IHtcbiAgY29uc3QgZmV0Y2hDb25maWc6IFJlcXVlc3RJbml0ID0gZ2V0RmV0Y2hDb25maWcoe1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgY29tcG9uZW50X2lkLFxuICAgIGFjY2Vzc190b2tlbixcbiAgfSk7XG4gIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcbiAgZm9ybS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUpO1xuICBpZiAoXG4gICAgdHlwZW9mIGZldGNoQ29uZmlnLmhlYWRlcnMgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICBcIkNvbnRlbnQtVHlwZVwiIGluIGZldGNoQ29uZmlnLmhlYWRlcnNcbiAgKSB7XG4gICAgZGVsZXRlIGZldGNoQ29uZmlnLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl07XG4gIH1cbiAgZmV0Y2hDb25maWcuYm9keSA9IGZvcm07XG4gIHJldHVybiBhd2FpdCBmZXRjaChgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKGNvbXBvbmVudF9pZCl9L2ZpbGVzYCwgZmV0Y2hDb25maWcpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8TnlsYXNGaWxlPj4ocmVzcG9uc2UpKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShqc29uLnJlc3BvbnNlKSA/IGpzb24ucmVzcG9uc2VbMF0gOiBqc29uLnJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKGhhbmRsZUVycm9yLmJpbmQoMCwgY29tcG9uZW50X2lkKSk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hNZXNzYWdlcyA9IGFzeW5jIChcbiAgcXVlcnk6IE1lc3NhZ2VzUXVlcnksXG4gIG9mZnNldDogbnVtYmVyLFxuICBsaW1pdDogbnVtYmVyLFxuKTogUHJvbWlzZTxOeWxhc01lc3NhZ2VbXT4gPT4ge1xuICBsZXQgcXVlcnlTdHJpbmcgPSBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKFxuICAgIHF1ZXJ5LmNvbXBvbmVudF9pZCxcbiAgKX0vbWVzc2FnZXM/b2Zmc2V0PSR7b2Zmc2V0fSZsaW1pdD0ke2xpbWl0fWA7XG4gIGlmIChxdWVyeS5yZWNlaXZlZF9iZWZvcmUpIHtcbiAgICBxdWVyeVN0cmluZyA9IGAke3F1ZXJ5U3RyaW5nfSZyZWNlaXZlZF9iZWZvcmU9JHtxdWVyeS5yZWNlaXZlZF9iZWZvcmV9YDtcbiAgfVxuICBpZiAocXVlcnkucmVjZWl2ZWRfYWZ0ZXIpIHtcbiAgICBxdWVyeVN0cmluZyA9IGAke3F1ZXJ5U3RyaW5nfSZyZWNlaXZlZF9hZnRlcj0ke3F1ZXJ5LnJlY2VpdmVkX2FmdGVyfWA7XG4gIH1cbiAgcmV0dXJuIGF3YWl0IGZldGNoKHF1ZXJ5U3RyaW5nLCBnZXRGZXRjaENvbmZpZyhxdWVyeSkpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PlxuICAgICAgaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPE55bGFzTWVzc2FnZVtdPj4ocmVzcG9uc2UpLFxuICAgIClcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgTWVzc2FnZVN0b3JlLmFkZE1lc3NhZ2VzKHtcbiAgICAgICAgcXVlcnlLZXk6IEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSxcbiAgICAgICAgZGF0YToganNvbi5yZXNwb25zZSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGpzb24ucmVzcG9uc2U7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihxdWVyeS5jb21wb25lbnRfaWQsIGVycm9yKSk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hNZXNzYWdlID0gYXN5bmMgKFxuICBxdWVyeTogQ29tbW9uUXVlcnksXG4gIG1lc3NhZ2VJRDogc3RyaW5nLFxuKTogUHJvbWlzZTxOeWxhc01lc3NhZ2U+ID0+IHtcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKFxuICAgIHF1ZXJ5LmNvbXBvbmVudF9pZCxcbiAgKX0vbWVzc2FnZXMvJHttZXNzYWdlSUR9YDtcbiAgcmV0dXJuIGF3YWl0IGZldGNoKHF1ZXJ5U3RyaW5nLCBnZXRGZXRjaENvbmZpZyhxdWVyeSkpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PlxuICAgICAgaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPE55bGFzTWVzc2FnZT4+KHJlc3BvbnNlKSxcbiAgICApXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xufTtcblxuLy8gRm9yIGNhc2VzIHdoZW4gc29tZW9uZSB3YW50cyB0byBzaG93IGp1c3QgYSBzaW5nbGUgZW1haWwgbWVzc2FnZSwgcmF0aGVyIHRoYW4gdGhlIGZ1bGwgdGhyZWFkIGFuZCB3L28gcGFzc2luZyBhIHRocmVhZCBpZFxuZXhwb3J0IGNvbnN0IGZldGNoRW1haWwgPSBhc3luYyAoXG4gIHF1ZXJ5OiBTaW5ndWxhckVtYWlsLFxuKTogUHJvbWlzZTxOeWxhc01lc3NhZ2U+ID0+IHtcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKHF1ZXJ5LmNvbXBvbmVudF9pZCl9L21lc3NhZ2VzLyR7XG4gICAgcXVlcnkubWVzc2FnZV9pZFxuICB9YDtcbiAgcmV0dXJuIGF3YWl0IGZldGNoKHF1ZXJ5U3RyaW5nLCBnZXRGZXRjaENvbmZpZyhxdWVyeSkpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PlxuICAgICAgaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPE55bGFzTWVzc2FnZT4+KHJlc3BvbnNlKSxcbiAgICApXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNhdmVEcmFmdCA9IGFzeW5jIChcbiAgY29tcG9uZW50X2lkOiBzdHJpbmcsXG4gIG1zZzogTWVzc2FnZSxcbiAgYWNjZXNzX3Rva2VuPzogc3RyaW5nLFxuKTogUHJvbWlzZTxOeWxhc01lc3NhZ2U+ID0+IHtcbiAgcmV0dXJuIGF3YWl0IGZldGNoKFxuICAgIGAke2dldE1pZGRsZXdhcmVBcGlVcmwoY29tcG9uZW50X2lkKX0vZHJhZnRzYCxcbiAgICBnZXRGZXRjaENvbmZpZyh7IG1ldGhvZDogXCJQT1NUXCIsIGNvbXBvbmVudF9pZCwgYWNjZXNzX3Rva2VuLCBib2R5OiBtc2cgfSksXG4gIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+XG4gICAgICBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8TnlsYXNNZXNzYWdlPj4ocmVzcG9uc2UpLFxuICAgIClcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgcmV0dXJuIGpzb24ucmVzcG9uc2U7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihjb21wb25lbnRfaWQsIGVycm9yKSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlRHJhZnQgPSBhc3luYyAoXG4gIGNvbXBvbmVudF9pZDogc3RyaW5nLFxuICBtc2c6IE1lc3NhZ2UsXG4gIGFjY2Vzc190b2tlbj86IHN0cmluZyxcbik6IFByb21pc2U8TnlsYXNNZXNzYWdlPiA9PiB7XG4gIHJldHVybiBhd2FpdCBmZXRjaChcbiAgICBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKGNvbXBvbmVudF9pZCl9L2RyYWZ0cy8ke21zZy5pZH1gLFxuICAgIGdldEZldGNoQ29uZmlnKHsgbWV0aG9kOiBcIlBVVFwiLCBjb21wb25lbnRfaWQsIGFjY2Vzc190b2tlbiwgYm9keTogbXNnIH0pLFxuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PlxuICAgICAgaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPE55bGFzTWVzc2FnZT4+KHJlc3BvbnNlKSxcbiAgICApXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IoY29tcG9uZW50X2lkLCBlcnJvcikpO1xufTtcbiIsImltcG9ydCB7XG4gIGdldEZldGNoQ29uZmlnLFxuICBoYW5kbGVFcnJvcixcbiAgaGFuZGxlUmVzcG9uc2UsXG4gIGdldE1pZGRsZXdhcmVBcGlVcmwsXG59IGZyb20gXCIuLi9tZXRob2RzL2FwaVwiO1xuaW1wb3J0IHR5cGUge1xuICBBY2NvdW50UXVlcnksXG4gIEFjY291bnQsXG4gIE1pZGRsZXdhcmVSZXNwb25zZSxcbn0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEFjY291bnQgPSBhc3luYyAocXVlcnk6IEFjY291bnRRdWVyeSk6IFByb21pc2U8QWNjb3VudD4gPT4ge1xuICBjb25zdCBhY2NvdW50ID0gYXdhaXQgZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChxdWVyeS5jb21wb25lbnRfaWQpfS9hY2NvdW50YCxcbiAgICBnZXRGZXRjaENvbmZpZyhxdWVyeSksXG4gIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxBY2NvdW50Pj4ocmVzcG9uc2UpKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKTtcblxuICByZXR1cm4gYWNjb3VudDtcbn07XG4iLCJpbXBvcnQge1xuICBnZXRGZXRjaENvbmZpZyxcbiAgaGFuZGxlRXJyb3IsXG4gIGhhbmRsZVJlc3BvbnNlLFxuICBnZXRNaWRkbGV3YXJlQXBpVXJsLFxufSBmcm9tIFwiLi4vbWV0aG9kcy9hcGlcIjtcbmltcG9ydCB0eXBlIHtcbiAgQ2xlYW5Db252ZXJzYXRpb25RdWVyeSxcbiAgTWVzc2FnZSxcbiAgQ2xlYW5Db252ZXJzYXRpb25GZWVkYmFja1F1ZXJ5LFxuICBNaWRkbGV3YXJlUmVzcG9uc2UsXG59IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDbGVhbkNvbnZlcnNhdGlvbnMgPSAoXG4gIHF1ZXJ5OiBDbGVhbkNvbnZlcnNhdGlvblF1ZXJ5LFxuKTogUHJvbWlzZTxNZXNzYWdlW10+ID0+IHtcbiAgcmV0dXJuIGZldGNoKFxuICAgIGAke2dldE1pZGRsZXdhcmVBcGlVcmwocXVlcnkuY29tcG9uZW50X2lkKX0vbmV1cmFsL2NvbnZlcnNhdGlvbmAsXG4gICAgZ2V0RmV0Y2hDb25maWcoe1xuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgYWNjZXNzX3Rva2VuOiBxdWVyeS5hY2Nlc3NfdG9rZW4sXG4gICAgICBjb21wb25lbnRfaWQ6IHF1ZXJ5LmNvbXBvbmVudF9pZCxcbiAgICAgIGJvZHk6IHsgbWVzc2FnZV9pZDogcXVlcnkubWVzc2FnZV9pZCB9LFxuICAgIH0pLFxuICApXG4gICAgLnRoZW4oYXN5bmMgKGFwaVJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPE1lc3NhZ2VbXT4+KFxuICAgICAgICBhcGlSZXNwb25zZSxcbiAgICAgICk7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZW5kQ2xlYW5Db252ZXJzYXRpb25GZWVkYmFjayA9IChcbiAgcXVlcnk6IENsZWFuQ29udmVyc2F0aW9uRmVlZGJhY2tRdWVyeSxcbik6IFByb21pc2U8TWVzc2FnZT4gPT4ge1xuICByZXR1cm4gZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChxdWVyeS5jb21wb25lbnRfaWQpfS9uZXVyYWwvY29udmVyc2F0aW9uL2ZlZWRiYWNrYCxcbiAgICBnZXRGZXRjaENvbmZpZyh7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYWNjZXNzX3Rva2VuOiBxdWVyeS5hY2Nlc3NfdG9rZW4sXG4gICAgICBjb21wb25lbnRfaWQ6IHF1ZXJ5LmNvbXBvbmVudF9pZCxcbiAgICAgIGJvZHk6IHsgbWVzc2FnZV9pZDogcXVlcnkubWVzc2FnZV9pZCB9LFxuICAgIH0pLFxuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8TWVzc2FnZT4+KHJlc3BvbnNlKSlcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgcmV0dXJuIGpzb24ucmVzcG9uc2U7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihxdWVyeS5jb21wb25lbnRfaWQsIGVycm9yKSk7XG59O1xuIiwiaW1wb3J0IHtcbiAgZ2V0RmV0Y2hDb25maWcsXG4gIGhhbmRsZUVycm9yLFxuICBoYW5kbGVSZXNwb25zZSxcbiAgZ2V0TWlkZGxld2FyZUFwaVVybCxcbn0gZnJvbSBcIi4uL21ldGhvZHMvYXBpXCI7XG5pbXBvcnQgdHlwZSB7XG4gIENvbnNlY3V0aXZlQXZhaWxhYmlsaXR5UXVlcnksXG4gIEF2YWlsYWJpbGl0eVF1ZXJ5LFxuICBBdmFpbGFiaWxpdHlSZXNwb25zZSxcbiAgRnJlZUJ1c3lSZXNwb25zZSxcbiAgUHJlRGF0ZWRUaW1lU2xvdCxcbn0gZnJvbSBcIkBjb21tb25zL3R5cGVzL0F2YWlsYWJpbGl0eVwiO1xuaW1wb3J0IHR5cGUgeyBNaWRkbGV3YXJlUmVzcG9uc2UgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvTnlsYXNcIjtcbmltcG9ydCB0eXBlIHsgRXZlbnREZWZpbml0aW9uIH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL1NjaGVkdWxlRWRpdG9yXCI7XG5pbXBvcnQgdHlwZSB7IENvbnNlY3V0aXZlRXZlbnQgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvQm9va2luZ1wiO1xuXG4vLyBUT0RPOiBkZXByZWNhdGUgaWYgd2UgZmluZCAvY2FsZW5kYXJzL2F2YWlsYWJpbGl0eSB0byBiZSBmdWxseSBzdWZmaWNpZW50XG5leHBvcnQgY29uc3QgZmV0Y2hGcmVlQnVzeSA9IGFzeW5jIChcbiAgcXVlcnk6IEF2YWlsYWJpbGl0eVF1ZXJ5LFxuKTogUHJvbWlzZTxGcmVlQnVzeVJlc3BvbnNlW10+ID0+IHtcbiAgcmV0dXJuIGZldGNoKFxuICAgIGAke2dldE1pZGRsZXdhcmVBcGlVcmwocXVlcnkuY29tcG9uZW50X2lkKX0vY2FsZW5kYXJzL2ZyZWUtYnVzeWAsXG4gICAgZ2V0RmV0Y2hDb25maWcoe1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGNvbXBvbmVudF9pZDogcXVlcnkuY29tcG9uZW50X2lkLFxuICAgICAgYWNjZXNzX3Rva2VuOiBxdWVyeS5hY2Nlc3NfdG9rZW4sXG4gICAgICBib2R5OiBxdWVyeS5ib2R5LFxuICAgIH0pLFxuICApXG4gICAgLnRoZW4oYXN5bmMgKGFwaVJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPEZyZWVCdXN5UmVzcG9uc2VbXT4+KFxuICAgICAgICBhcGlSZXNwb25zZSxcbiAgICAgICk7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaEF2YWlsYWJpbGl0eSA9IGFzeW5jIChcbiAgcXVlcnk6IEF2YWlsYWJpbGl0eVF1ZXJ5LFxuKTogUHJvbWlzZTxBdmFpbGFiaWxpdHlSZXNwb25zZT4gPT4ge1xuICByZXR1cm4gZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChxdWVyeS5jb21wb25lbnRfaWQpfS9jYWxlbmRhcnMvYXZhaWxhYmlsaXR5YCxcbiAgICBnZXRGZXRjaENvbmZpZyh7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgY29tcG9uZW50X2lkOiBxdWVyeS5jb21wb25lbnRfaWQsXG4gICAgICBhY2Nlc3NfdG9rZW46IHF1ZXJ5LmFjY2Vzc190b2tlbixcbiAgICAgIGJvZHk6IHF1ZXJ5LmJvZHksXG4gICAgfSksXG4gIClcbiAgICAudGhlbihhc3luYyAoYXBpUmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCBoYW5kbGVSZXNwb25zZTxcbiAgICAgICAgTWlkZGxld2FyZVJlc3BvbnNlPEF2YWlsYWJpbGl0eVJlc3BvbnNlPlxuICAgICAgPihhcGlSZXNwb25zZSk7XG4gICAgICAvLyBOb3JtYWxpemUgcmVzcG9uc2UgLnN0YXJ0IGFuZCAuZW5kIHRvIC5zdGFydF90aW1lIGFuZCAuZW5kX3RpbWUgdG8gbWFrZSB1cCBmb3IgZGlzY3JlcGVuZGN5IGluIHRoZSBOeWxhcyBBUEk6IGh0dHBzOi8vZGV2ZWxvcGVyLm55bGFzLmNvbS9kb2NzL2Nvbm5lY3Rpdml0eS9jYWxlbmRhci9jYWxlbmRhci1hdmFpbGFiaWxpdHkvI2F2YWlsYWJpbGl0eS1yZXNwb25zZVxuICAgICAgLy8gQVBJIHN0b3J5OiBodHRwczovL2FwcC5zaG9ydGN1dC5jb20vbnlsYXMvc3RvcnkvNzMxOTYvXG4gICAgICBqc29uLnJlc3BvbnNlLnRpbWVfc2xvdHMgPSBqc29uLnJlc3BvbnNlLnRpbWVfc2xvdHMubWFwKChzbG90KSA9PiB7XG4gICAgICAgIHNsb3Quc3RhcnRfdGltZSA9IHNsb3Quc3RhcnQgfHwgMDtcbiAgICAgICAgc2xvdC5lbmRfdGltZSA9IHNsb3QuZW5kIHx8IDA7XG4gICAgICAgIGRlbGV0ZSBzbG90LnN0YXJ0O1xuICAgICAgICBkZWxldGUgc2xvdC5lbmQ7XG4gICAgICAgIHJldHVybiBzbG90O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaENvbnNlY3V0aXZlQXZhaWxhYmlsaXR5ID0gYXN5bmMgKFxuICBxdWVyeTogQ29uc2VjdXRpdmVBdmFpbGFiaWxpdHlRdWVyeSxcbik6IFByb21pc2U8Q29uc2VjdXRpdmVFdmVudFtdW10+ID0+IHtcbiAgcmV0dXJuIGZldGNoKFxuICAgIGAke2dldE1pZGRsZXdhcmVBcGlVcmwoXG4gICAgICBxdWVyeS5jb21wb25lbnRfaWQsXG4gICAgKX0vY2FsZW5kYXJzL2F2YWlsYWJpbGl0eS9jb25zZWN1dGl2ZWAsXG4gICAgZ2V0RmV0Y2hDb25maWcoe1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGNvbXBvbmVudF9pZDogcXVlcnkuY29tcG9uZW50X2lkLFxuICAgICAgYWNjZXNzX3Rva2VuOiBxdWVyeS5hY2Nlc3NfdG9rZW4sXG4gICAgICBib2R5OiBxdWVyeS5ib2R5LFxuICAgIH0pLFxuICApXG4gICAgLnRoZW4oYXN5bmMgKGFwaVJlc3BvbnNlKTogUHJvbWlzZTxDb25zZWN1dGl2ZUV2ZW50W11bXT4gPT4ge1xuICAgICAgY29uc3QganNvbiA9IGF3YWl0IGhhbmRsZVJlc3BvbnNlPFxuICAgICAgICBNaWRkbGV3YXJlUmVzcG9uc2U8UHJlRGF0ZWRUaW1lU2xvdFtdW10+XG4gICAgICA+KGFwaVJlc3BvbnNlKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlOiBQcmVEYXRlZFRpbWVTbG90W11bXSA9XG4gICAgICAgIGpzb24ucmVzcG9uc2U/Lm1hcCgoYmxvY2tTbG90KSA9PiB7XG4gICAgICAgICAgYmxvY2tTbG90ID0gYmxvY2tTbG90Lm1hcCgoc2xvdDogYW55KSA9PiB7XG4gICAgICAgICAgICBzbG90LnN0YXJ0X3RpbWUgPSBuZXcgRGF0ZShzbG90LnN0YXJ0X3RpbWUgKiAxMDAwKTtcbiAgICAgICAgICAgIHNsb3QuZW5kX3RpbWUgPSBuZXcgRGF0ZShzbG90LmVuZF90aW1lICogMTAwMCk7XG4gICAgICAgICAgICByZXR1cm4gc2xvdDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gYmxvY2tTbG90O1xuICAgICAgICB9KSB8fCBbXTtcbiAgICAgIGNvbnN0IGh5ZHJhdGVkUmVzcG9uc2UgPSBoeWRyYXRlU2xvdHNUb0V2ZW50cyhcbiAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgIHF1ZXJ5LmJvZHkuZXZlbnRzLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRlZHVwZWRSZXNwb25zZSA9XG4gICAgICAgIHJlbW92ZVNpbXVsdGFuZW91c0F2YWlsYWJpbGl0eU9wdGlvbnMoaHlkcmF0ZWRSZXNwb25zZSk7XG4gICAgICByZXR1cm4gZGVkdXBlZFJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xufTtcblxuLy8gRG9pbmcgdGhlIGJlc3Qgd2UgY2FuIHdpdGggd2hhdCB3ZSd2ZSBnb3Q6IC9jYWxlbmRhcnMvYXZhaWxhYmlsaXR5L2NvbnNlY3V0aXZlIGRvZXNuJ3QgcmV0dXJuIGFueSBpbmZvIG90aGVyIHRoYW4gZW1haWxzXG4vLyBhbmQgc3RhcnQvZW5kIHRpbWVzLiBUaGlzIG1lYW5zIHRoYXQgaWYgd2UgaGF2ZSB0byBldmVudHMgKEV2ZW50RGVmaW5pdGlvbnMpIHdpdGggdGhlIHNhbWUgZW1haWwgYWRkcmVzc2VzPyBXZSdyZSBzaG9vdGluZyBpbiB0aGUgZGFyayBhYm91dCB3aGljaCBpcyB3aGljaC5cbi8vIFRPRE86IGFsbG93IGZvciBhbiBpbmRpY2F0b3Igb24gdGhlIEFQSSBzaWRlXG5mdW5jdGlvbiBoeWRyYXRlU2xvdHNUb0V2ZW50cyhcbiAgYXZhaWxhYmlsaXRpZXM6IFByZURhdGVkVGltZVNsb3RbXVtdLFxuICBldmVudHM6IEV2ZW50RGVmaW5pdGlvbltdLFxuKTogQ29uc2VjdXRpdmVFdmVudFtdW10ge1xuICByZXR1cm4gYXZhaWxhYmlsaXRpZXMubWFwKChibG9jaykgPT4ge1xuICAgIHJldHVybiBibG9jay5tYXAoKHN1YmV2ZW50KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdWJldmVudCxcbiAgICAgICAgLi4uZXZlbnRzLmZpbmQoXG4gICAgICAgICAgKGV2ZW50ZGVmKSA9PlxuICAgICAgICAgICAgZXZlbnRkZWYucGFydGljaXBhbnRFbWFpbHMubGVuZ3RoID09PSBzdWJldmVudC5lbWFpbHMubGVuZ3RoICYmXG4gICAgICAgICAgICBldmVudGRlZi5wYXJ0aWNpcGFudEVtYWlscy5ldmVyeSgoZW1haWwpID0+XG4gICAgICAgICAgICAgIHN1YmV2ZW50LmVtYWlscy5pbmNsdWRlcyhlbWFpbCksXG4gICAgICAgICAgICApLFxuICAgICAgICApLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfSkgYXMgYW55W11bXTsgLy8gVE9ETzogSG93IHRvIGJlc3QgY29lcmNlIFByZURhdGVkVGltZVNsb3RbXVtdIHRvIENvbnNlY3V0aXZlRXZlbnRbXVtdPyBzcHJlYWQtY29tYmluZWQgcmV0dXJuIGhhbmRsZXMgaXQuXG59XG5cbi8vIFdlIGRvbid0IHdhbnQgdG8gb3ZlcmJ1cmRlbiBvdXIgdXNlcnMgd2l0aCB0b28gbXVjaCBzd2VldCBob3JyaWJsZSBmcmVlZG9tIG9mIGNob2ljZTtcbi8vIHRoZSAvY2FsZW5kYXJzL2F2YWlsYWJpbGl0eS9jb25zZWN1dGl2ZSBlbmRwb2ludCByZXR1cm5zIG9yZGVyIHBlcm11dGF0aW9ucyB3aXRoIHNhbWUgdGltZSBzbG90cztcbi8vIEN1bGwgdGhlbSBkb3duIHRvIGp1c3QgdGhlIGZpcnN0IHRoYXQgZXhpc3RzIHBlciB0aW1lc2xvdC5cbmZ1bmN0aW9uIHJlbW92ZVNpbXVsdGFuZW91c0F2YWlsYWJpbGl0eU9wdGlvbnMoXG4gIGF2YWlsYWJpbGl0aWVzOiBDb25zZWN1dGl2ZUV2ZW50W11bXSxcbikge1xuICBjb25zdCBibG9ja1NldCA9IG5ldyBTZXQoKTtcbiAgcmV0dXJuIGF2YWlsYWJpbGl0aWVzLmZpbHRlcigoYmxvY2spID0+IHtcbiAgICBjb25zdCBibG9ja1N0cmluZyA9IGAke2Jsb2NrWzBdLnN0YXJ0X3RpbWV9XyR7XG4gICAgICBibG9ja1tibG9jay5sZW5ndGggLSAxXS5lbmRfdGltZVxuICAgIH1gO1xuICAgIGlmIChibG9ja1NldC5oYXMoYmxvY2tTdHJpbmcpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJsb2NrU2V0LmFkZChibG9ja1N0cmluZyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgV3JpdGFibGUsIHdyaXRhYmxlIH0gZnJvbSBcInN2ZWx0ZS9zdG9yZVwiO1xuaW1wb3J0IHsgZmV0Y2hBdmFpbGFiaWxpdHkgfSBmcm9tIFwiLi4vY29ubmVjdGlvbnMvYXZhaWxhYmlsaXR5XCI7XG5pbXBvcnQgdHlwZSB7XG4gIEF2YWlsYWJpbGl0eVF1ZXJ5LFxuICBBdmFpbGFiaWxpdHlSZXNwb25zZSxcbn0gZnJvbSBcIkBjb21tb25zL3R5cGVzL0F2YWlsYWJpbGl0eVwiO1xuXG50eXBlIEF2YWlsYWJpbGl0eVN0b3JlID0gUmVjb3JkPHN0cmluZywgUHJvbWlzZTxBdmFpbGFiaWxpdHlSZXNwb25zZT4+O1xuXG5mdW5jdGlvbiBpbml0aWFsaXplKCk6IFdyaXRhYmxlPEF2YWlsYWJpbGl0eVN0b3JlPiB7XG4gIGNvbnN0IGdldCA9IChcbiAgICB0YXJnZXQ6IEF2YWlsYWJpbGl0eVN0b3JlLFxuICAgIGtleTogc3RyaW5nLFxuICApOiBQcm9taXNlPEF2YWlsYWJpbGl0eVJlc3BvbnNlPiB8IHZvaWQgPT4ge1xuICAgIGNvbnN0IGFjY2Vzc29yOiBBdmFpbGFiaWxpdHlRdWVyeSA9IEpTT04ucGFyc2Uoa2V5KTtcbiAgICAvLyBBdm9pZCBzYXZpbmcgZm9yY2VSZWxvYWQgcHJvcGVydHkgYXMgcGFydCBvZiBzdG9yZSBrZXlcbiAgICBjb25zdCBhY2Nlc3NvckNvcHkgPSB7IC4uLmFjY2Vzc29yIH07XG4gICAgZGVsZXRlIGFjY2Vzc29yQ29weS5mb3JjZVJlbG9hZDtcbiAgICBrZXkgPSBKU09OLnN0cmluZ2lmeShhY2Nlc3NvckNvcHkpO1xuXG4gICAgaWYgKFxuICAgICAgIWFjY2Vzc29yLmNvbXBvbmVudF9pZCB8fFxuICAgICAgIWFjY2Vzc29yPy5ib2R5Py5zdGFydF90aW1lIHx8XG4gICAgICAhYWNjZXNzb3I/LmJvZHk/LmVuZF90aW1lXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXRba2V5XSB8fCBhY2Nlc3Nvci5mb3JjZVJlbG9hZCkge1xuICAgICAgY29uc3QgZmV0Y2hQcm9taXNlID0gZmV0Y2hBdmFpbGFiaWxpdHkoYWNjZXNzb3IpO1xuICAgICAgc3RvcmUudXBkYXRlKChzdG9yZSkgPT4ge1xuICAgICAgICBzdG9yZVtrZXldID0gZmV0Y2hQcm9taXNlO1xuICAgICAgICByZXR1cm4gc3RvcmU7XG4gICAgICB9KTtcbiAgICAgIHRhcmdldFtrZXldID0gZmV0Y2hQcm9taXNlO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gIH07XG4gIGNvbnN0IHN0b3JlID0gd3JpdGFibGUobmV3IFByb3h5PEF2YWlsYWJpbGl0eVN0b3JlPih7fSwgeyBnZXQgfSkpO1xuICByZXR1cm4gc3RvcmU7XG59XG5cbmV4cG9ydCBjb25zdCBBdmFpbGFiaWxpdHlTdG9yZSA9IGluaXRpYWxpemUoKTtcbiIsImltcG9ydCB7IFdyaXRhYmxlLCB3cml0YWJsZSB9IGZyb20gXCJzdmVsdGUvc3RvcmVcIjtcbmltcG9ydCB7IGZldGNoQ29uc2VjdXRpdmVBdmFpbGFiaWxpdHkgfSBmcm9tIFwiLi4vY29ubmVjdGlvbnMvYXZhaWxhYmlsaXR5XCI7XG5pbXBvcnQgdHlwZSB7IENvbnNlY3V0aXZlQXZhaWxhYmlsaXR5UXVlcnkgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvQXZhaWxhYmlsaXR5XCI7XG5pbXBvcnQgdHlwZSB7IENvbnNlY3V0aXZlRXZlbnQgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvQm9va2luZ1wiO1xuXG50eXBlIENvbnNlY3V0aXZlQXZhaWxhYmlsaXR5U3RvcmUgPSBSZWNvcmQ8XG4gIHN0cmluZyxcbiAgUHJvbWlzZTxDb25zZWN1dGl2ZUV2ZW50W11bXT5cbj47XG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoKTogV3JpdGFibGU8Q29uc2VjdXRpdmVBdmFpbGFiaWxpdHlTdG9yZT4ge1xuICBjb25zdCBnZXQgPSAoXG4gICAgdGFyZ2V0OiBDb25zZWN1dGl2ZUF2YWlsYWJpbGl0eVN0b3JlLFxuICAgIGtleTogc3RyaW5nLFxuICApOiBQcm9taXNlPENvbnNlY3V0aXZlRXZlbnRbXVtdPiB8IHZvaWQgPT4ge1xuICAgIGNvbnN0IGFjY2Vzc29yOiBDb25zZWN1dGl2ZUF2YWlsYWJpbGl0eVF1ZXJ5ID0gSlNPTi5wYXJzZShrZXkpO1xuXG4gICAgaWYgKFxuICAgICAgIWFjY2Vzc29yLmNvbXBvbmVudF9pZCB8fFxuICAgICAgIWFjY2Vzc29yPy5ib2R5Py5zdGFydF90aW1lIHx8XG4gICAgICAhYWNjZXNzb3I/LmJvZHk/LmVuZF90aW1lXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXRba2V5XSkge1xuICAgICAgY29uc3QgZmV0Y2hQcm9taXNlID0gZmV0Y2hDb25zZWN1dGl2ZUF2YWlsYWJpbGl0eShhY2Nlc3Nvcik7XG4gICAgICBzdG9yZS51cGRhdGUoKHN0b3JlKSA9PiB7XG4gICAgICAgIHN0b3JlW2tleV0gPSBmZXRjaFByb21pc2U7XG4gICAgICAgIHJldHVybiBzdG9yZTtcbiAgICAgIH0pO1xuICAgICAgdGFyZ2V0W2tleV0gPSBmZXRjaFByb21pc2U7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgfTtcbiAgY29uc3Qgc3RvcmUgPSB3cml0YWJsZShuZXcgUHJveHk8Q29uc2VjdXRpdmVBdmFpbGFiaWxpdHlTdG9yZT4oe30sIHsgZ2V0IH0pKTtcbiAgcmV0dXJuIHN0b3JlO1xufVxuXG5leHBvcnQgY29uc3QgQ29uc2VjdXRpdmVBdmFpbGFiaWxpdHlTdG9yZSA9IGluaXRpYWxpemUoKTtcbiIsImltcG9ydCB7IHdyaXRhYmxlIH0gZnJvbSBcInN2ZWx0ZS9zdG9yZVwiO1xuaW1wb3J0IHtcbiAgZmV0Y2hDb250YWN0cyxcbiAgZmV0Y2hDb250YWN0c0J5UXVlcnksXG59IGZyb20gXCJAY29tbW9ucy9jb25uZWN0aW9ucy9jb250YWN0c1wiO1xuaW1wb3J0IHR5cGUge1xuICBDb250YWN0LFxuICBDb250YWN0RW1haWwsXG4gIENvbnRhY3RTZWFyY2hRdWVyeSxcbiAgQ29udGFjdHNRdWVyeSxcbiAgQ29udGFjdHNRdWVyeVBhcmFtcyxcbn0gZnJvbSBcIkBjb21tb25zL3R5cGVzL0NvbnRhY3RzXCI7XG5cbmxldCBjb250YWN0c01hcDogUmVjb3JkPHN0cmluZywgQ29udGFjdFtdPiA9IHt9O1xuXG5mdW5jdGlvbiBmaWx0ZXJDb250YWN0cyhjb250YWN0czogQ29udGFjdFtdKSB7XG4gIHJldHVybiBjb250YWN0c1xuICAgIC5maWx0ZXIoXG4gICAgICAoY29udGFjdCkgPT5cbiAgICAgICAgISFjb250YWN0LmdpdmVuX25hbWUgfHxcbiAgICAgICAgISFjb250YWN0LnN1cm5hbWUgfHxcbiAgICAgICAgKEFycmF5LmlzQXJyYXkoY29udGFjdC5lbWFpbHMpICYmIGNvbnRhY3QuZW1haWxzLmxlbmd0aCA+IDApLFxuICAgIClcbiAgICAubWFwKChjb250YWN0KSA9PiB7XG4gICAgICAvLyBFbnN1cmUgZWFjaCBjb250YWN0IGhhcyBhdCBsZWFzdCBvbmUgXCJlbWFpbFwiIHRvIGxvYWRcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShjb250YWN0LmVtYWlscykgfHwgY29udGFjdC5lbWFpbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnRhY3QuZW1haWxzID0gW3sgZW1haWw6IFwiXCIgfSBhcyBDb250YWN0RW1haWxdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGFjdDtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUNvbnRhY3RzKCkge1xuICBjb25zdCB7IHN1YnNjcmliZSwgc2V0LCB1cGRhdGUgfSA9IHdyaXRhYmxlPFJlY29yZDxzdHJpbmcsIENvbnRhY3RbXT4+KHt9KTtcbiAgcmV0dXJuIHtcbiAgICBzdWJzY3JpYmUsXG4gICAgYWRkQ29udGFjdHM6IGFzeW5jIChxdWVyeTogQ29udGFjdHNRdWVyeSwgcGFyYW1zOiBDb250YWN0c1F1ZXJ5UGFyYW1zKSA9PiB7XG4gICAgICBjb25zdCBxdWVyeUtleSA9IEpTT04uc3RyaW5naWZ5KHF1ZXJ5KTtcbiAgICAgIGlmIChcbiAgICAgICAgIWNvbnRhY3RzTWFwW3F1ZXJ5S2V5XSAmJlxuICAgICAgICAocXVlcnkuY29tcG9uZW50X2lkIHx8IHF1ZXJ5LmFjY2Vzc190b2tlbilcbiAgICAgICkge1xuICAgICAgICBpZiAocGFyYW1zLm9mZnNldCA9PT0gMCkge1xuICAgICAgICAgIC8vIEVuc3VyZSB0aGUgc3RvcmUgaXMgZW1wdHkgaWYgb3VyIG9mZnNldCBpcyAwXG4gICAgICAgICAgQ29udGFjdFN0b3JlLnJlc2V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb250YWN0cyA9XG4gICAgICAgICAgKGF3YWl0IGZldGNoQ29udGFjdHMocXVlcnksIHBhcmFtcylcbiAgICAgICAgICAgIC50aGVuKChjb250YWN0cykgPT4gZmlsdGVyQ29udGFjdHMoY29udGFjdHMpKVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IFtdKSkgPz8gW107XG5cbiAgICAgICAgY29udGFjdHNNYXBbcXVlcnlLZXldID0gY29udGFjdHNNYXBbcXVlcnlLZXldXG4gICAgICAgICAgPyBbLi4uY29udGFjdHNNYXBbcXVlcnlLZXldLCAuLi5jb250YWN0c11cbiAgICAgICAgICA6IGNvbnRhY3RzO1xuXG4gICAgICAgIHVwZGF0ZSgoY29udGFjdHMpID0+IHtcbiAgICAgICAgICBjb250YWN0c1txdWVyeUtleV0gPSBjb250YWN0c01hcFtxdWVyeUtleV07XG4gICAgICAgICAgcmV0dXJuIHsgLi4uY29udGFjdHMgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb250YWN0c01hcFtxdWVyeUtleV07XG4gICAgICB9XG4gICAgfSxcbiAgICBhZGRDb250YWN0OiBhc3luYyAocXVlcnk6IENvbnRhY3RTZWFyY2hRdWVyeSkgPT4ge1xuICAgICAgY29uc3QgcXVlcnlLZXkgPSBKU09OLnN0cmluZ2lmeShxdWVyeSk7XG4gICAgICBpZiAoXG4gICAgICAgICFjb250YWN0c01hcFtxdWVyeUtleV0gJiZcbiAgICAgICAgKHF1ZXJ5LmNvbXBvbmVudF9pZCB8fCBxdWVyeS5hY2Nlc3NfdG9rZW4pXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgY29udGFjdHMgPVxuICAgICAgICAgIChhd2FpdCBmZXRjaENvbnRhY3RzQnlRdWVyeShxdWVyeSlcbiAgICAgICAgICAgIC50aGVuKChjb250YWN0cykgPT4gZmlsdGVyQ29udGFjdHMoY29udGFjdHMpKVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IFtdKSkgPz8gW107XG5cbiAgICAgICAgY29udGFjdHNNYXBbcXVlcnlLZXldID0gY29udGFjdHNNYXBbcXVlcnlLZXldXG4gICAgICAgICAgPyBbLi4uY29udGFjdHNNYXBbcXVlcnlLZXldLCAuLi5jb250YWN0c11cbiAgICAgICAgICA6IGNvbnRhY3RzO1xuICAgICAgICB1cGRhdGUoKGNvbnRhY3RzKSA9PiB7XG4gICAgICAgICAgY29udGFjdHNbcXVlcnlLZXldID0gY29udGFjdHNNYXBbcXVlcnlLZXldO1xuICAgICAgICAgIHJldHVybiB7IC4uLmNvbnRhY3RzIH07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRhY3RzTWFwW3F1ZXJ5S2V5XTtcbiAgICB9LFxuICAgIHJlc2V0OiAoKSA9PiB7XG4gICAgICBjb250YWN0c01hcCA9IHt9O1xuICAgICAgc2V0KHt9KTtcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgQ29udGFjdFN0b3JlID0gaW5pdGlhbGl6ZUNvbnRhY3RzKCk7XG4iLCJpbXBvcnQgeyB3cml0YWJsZSB9IGZyb20gXCJzdmVsdGUvc3RvcmVcIjtcbmltcG9ydCB7IGZldGNoQ29udGFjdEltYWdlIH0gZnJvbSBcIkBjb21tb25zL2Nvbm5lY3Rpb25zL2NvbnRhY3RzXCI7XG5pbXBvcnQgdHlwZSB7IENvbnRhY3RzUXVlcnkgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvQ29udGFjdHNcIjtcblxuY29uc3QgY29udGFjdEF2YXRhck1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuXG5mdW5jdGlvbiBpbml0aWFsaXplQ29udGFjdEF2YXRhcnMoKSB7XG4gIGNvbnN0IHsgc3Vic2NyaWJlLCBzZXQgfSA9IHdyaXRhYmxlPFJlY29yZDxzdHJpbmcsIHN0cmluZz4+KHt9KTtcbiAgcmV0dXJuIHtcbiAgICBzdWJzY3JpYmUsXG4gICAgZ2V0Q29udGFjdEF2YXRhcjogYXN5bmMgKFxuICAgICAgcXVlcnk6IENvbnRhY3RzUXVlcnksXG4gICAgICBjb250YWN0X2lkOiBzdHJpbmcsXG4gICAgICByZWZyZXNoID0gZmFsc2UsXG4gICAgKSA9PiB7XG4gICAgICBpZiAoIWNvbnRhY3RBdmF0YXJNYXBbY29udGFjdF9pZF0gfHwgcmVmcmVzaCkge1xuICAgICAgICBjb25zdCBhdmF0YXIgPSBhd2FpdCBmZXRjaENvbnRhY3RJbWFnZShxdWVyeSwgY29udGFjdF9pZClcbiAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMpXG4gICAgICAgICAgLmNhdGNoKCgpID0+IFwiXCIpO1xuICAgICAgICBpZiAoYXZhdGFyKSB7XG4gICAgICAgICAgY29udGFjdEF2YXRhck1hcFtjb250YWN0X2lkXSA9IGF2YXRhcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRhY3RBdmF0YXJNYXBbY29udGFjdF9pZF07XG4gICAgfSxcbiAgICByZXNldDogKCkgPT4gc2V0KHt9KSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IENvbnRhY3RBdmF0YXJTdG9yZSA9IGluaXRpYWxpemVDb250YWN0QXZhdGFycygpO1xuIiwiaW1wb3J0IHsgZGVyaXZlZCwgUmVhZGFibGUsIHdyaXRhYmxlIH0gZnJvbSBcInN2ZWx0ZS9zdG9yZVwiO1xuaW1wb3J0IHtcbiAgZmV0Y2hUaHJlYWRzLFxuICBmZXRjaFNlYXJjaFJlc3VsdFRocmVhZHMsXG4gIHVwZGF0ZVRocmVhZCxcbiAgZmV0Y2hUaHJlYWRDb3VudCxcbn0gZnJvbSBcIi4uL2Nvbm5lY3Rpb25zL3RocmVhZHNcIjtcbmltcG9ydCB0eXBlIHtcbiAgVGhyZWFkLFxuICBNYWlsYm94UXVlcnksXG4gIENvbnZlcnNhdGlvblF1ZXJ5LFxuICBNZXNzYWdlLFxuICBDb252ZXJzYXRpb24sXG59IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuaW1wb3J0IHsgc2lsZW5jZSB9IGZyb20gXCJAY29tbW9uc1wiO1xuXG5pbnRlcmZhY2UgUGFnaW5hdGVkVGhyZWFkcyB7XG4gIGlzTG9hZGVkOiBib29sZWFuO1xuICB0aHJlYWRzOiBUaHJlYWRbXTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZVBhZ2luYXRlZFRocmVhZHModG90YWxQYWdlczogbnVtYmVyKSB7XG4gIGNvbnN0IHBhZ2luYXRlZFRocmVhZHMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsUGFnZXM7IGkrKykge1xuICAgIHBhZ2luYXRlZFRocmVhZHMucHVzaCh7XG4gICAgICBpc0xvYWRlZDogZmFsc2UsXG4gICAgICB0aHJlYWRzOiA8VGhyZWFkW10+W10sXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHBhZ2luYXRlZFRocmVhZHM7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVUaHJlYWRzKCkge1xuICBjb25zdCB7IHN1YnNjcmliZSwgc2V0LCB1cGRhdGUgfSA9IHdyaXRhYmxlPFxuICAgIFJlY29yZDxzdHJpbmcsIFBhZ2luYXRlZFRocmVhZHNbXT5cbiAgPih7fSk7XG4gIGxldCB0aHJlYWRzTWFwOiBSZWNvcmQ8c3RyaW5nLCBQYWdpbmF0ZWRUaHJlYWRzW10+ID0ge307XG4gIGxldCB0b3RhbEl0ZW1zOiBudW1iZXI7XG5cbiAgcmV0dXJuIHtcbiAgICBzdWJzY3JpYmUsXG4gICAgc2V0LFxuICAgIGdldFRocmVhZHM6IGFzeW5jIChcbiAgICAgIHF1ZXJ5OiBNYWlsYm94UXVlcnksXG4gICAgICBjdXJyZW50UGFnZTogbnVtYmVyLFxuICAgICAgcGFnZVNpemU6IG51bWJlcixcbiAgICAgIGZvcmNlUmVmcmVzaCA9IGZhbHNlLFxuICAgICkgPT4ge1xuICAgICAgY29uc3QgcXVlcnlLZXkgPSBKU09OLnN0cmluZ2lmeShxdWVyeSk7XG5cbiAgICAgIGlmICghcXVlcnkuY29tcG9uZW50X2lkICYmICFxdWVyeS5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgLy8gVGhpcyBzaG91bGQgYWxlcnQgdGhlIHVzZXJcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICBpZiAodG90YWxJdGVtcyA9PT0gdW5kZWZpbmVkIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgICAgICAvLyBUT0RPOiB0aGlzIGNhbiBjb3VudCBwYXNzZWQtaW4gSURzXG4gICAgICAgIGNvbnN0IHRocmVhZENvdW50ID0gcXVlcnkudGhyZWFkX2lkc1xuICAgICAgICAgID8gcXVlcnkudGhyZWFkX2lkcy5sZW5ndGhcbiAgICAgICAgICA6IGF3YWl0IGZldGNoVGhyZWFkQ291bnQocXVlcnkpLmNhdGNoKHNpbGVuY2UpO1xuXG4gICAgICAgIGlmICh0aHJlYWRDb3VudCkge1xuICAgICAgICAgIHRvdGFsSXRlbXMgPSB0aHJlYWRDb3VudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhyZWFkc01hcFtxdWVyeUtleV0pIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgICAgICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRvdGFsSXRlbXMgLyBwYWdlU2l6ZSk7XG4gICAgICAgIHRocmVhZHNNYXBbcXVlcnlLZXldID0gYXdhaXQgaW5pdGlhbGl6ZVBhZ2luYXRlZFRocmVhZHModG90YWxQYWdlcyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIC8vIFNob3VsZG4ndCB0aGlzIGJlIGFuIGludGVybmFsIGVycm9yP1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9IGVsc2UgaWYgKCF0aHJlYWRzTWFwW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0uaXNMb2FkZWQpIHtcbiAgICAgICAgY29uc3QgdGhyZWFkcyA9IGF3YWl0IGZldGNoVGhyZWFkcyhcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICBwYWdlU2l6ZSxcbiAgICAgICAgICBjdXJyZW50UGFnZSAqIHBhZ2VTaXplLFxuICAgICAgICApLmNhdGNoKHNpbGVuY2UpO1xuXG4gICAgICAgIGlmICh0aHJlYWRzKSB7XG4gICAgICAgICAgdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdLnRocmVhZHMgPSB0aHJlYWRzO1xuICAgICAgICAgIHRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS5pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdXBkYXRlKCh0aHJlYWRzKSA9PiB7XG4gICAgICAgIHRocmVhZHNbcXVlcnlLZXldID0gdGhyZWFkc01hcFtxdWVyeUtleV07XG4gICAgICAgIHJldHVybiB7IC4uLnRocmVhZHMgfTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdLnRocmVhZHM7XG4gICAgfSxcbiAgICBnZXROdW1iZXJPZkl0ZW1zOiBhc3luYyAocXVlcnk6IE1haWxib3hRdWVyeSkgPT4ge1xuICAgICAgaWYgKCFxdWVyeS5jb21wb25lbnRfaWQgJiYgIXF1ZXJ5LmFjY2Vzc190b2tlbikge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB0b3RhbEl0ZW1zID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGNvbnN0IHRocmVhZENvdW50ID0gYXdhaXQgZmV0Y2hUaHJlYWRDb3VudChxdWVyeSkuY2F0Y2goc2lsZW5jZSk7XG5cbiAgICAgICAgaWYgKHRocmVhZENvdW50KSB7XG4gICAgICAgICAgdG90YWxJdGVtcyA9IHRocmVhZENvdW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdG90YWxJdGVtcztcbiAgICB9LFxuICAgIC8vIFRPRE8gLSBVc2UgcmVhbCBwYWdpbmF0aW9uIHdoZW4gc2VhcmNoIGVuZHBvaW50IHN1cHBvcnRzIGl0XG4gICAgZ2V0VGhyZWFkc1dpdGhTZWFyY2hLZXl3b3JkOiBhc3luYyAoXG4gICAgICBxdWVyeTogTWFpbGJveFF1ZXJ5LFxuICAgICAgZm9yY2VSZWZyZXNoID0gZmFsc2UsXG4gICAgKSA9PiB7XG4gICAgICBpZiAoIXF1ZXJ5LmNvbXBvbmVudF9pZCAmJiAhcXVlcnkuYWNjZXNzX3Rva2VuKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHF1ZXJ5S2V5ID0gSlNPTi5zdHJpbmdpZnkocXVlcnkpO1xuXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhyZWFkc01hcFtxdWVyeUtleV0pIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgICAgICB0aHJlYWRzTWFwW3F1ZXJ5S2V5XSA9IGF3YWl0IGluaXRpYWxpemVQYWdpbmF0ZWRUaHJlYWRzKDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRocmVhZHNNYXBbcXVlcnlLZXldWzBdLmlzTG9hZGVkIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgICAgICBjb25zdCBzZWFyY2hSZXN1bHRUaHJlYWRzID0gYXdhaXQgZmV0Y2hTZWFyY2hSZXN1bHRUaHJlYWRzKHF1ZXJ5KS5jYXRjaChcbiAgICAgICAgICBzaWxlbmNlLFxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChzZWFyY2hSZXN1bHRUaHJlYWRzKSB7XG4gICAgICAgICAgdGhyZWFkc01hcFtxdWVyeUtleV1bMF0udGhyZWFkcyA9IHNlYXJjaFJlc3VsdFRocmVhZHM7XG4gICAgICAgICAgdGhyZWFkc01hcFtxdWVyeUtleV1bMF0uaXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB1cGRhdGUoKHRocmVhZHMpID0+IHtcbiAgICAgICAgdGhyZWFkc1txdWVyeUtleV0gPSB0aHJlYWRzTWFwW3F1ZXJ5S2V5XTtcbiAgICAgICAgcmV0dXJuIHsgLi4udGhyZWFkcyB9O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhyZWFkc01hcFtxdWVyeUtleV1bMF0udGhyZWFkcztcbiAgICB9LFxuICAgIHVwZGF0ZVRocmVhZDogYXN5bmMgKFxuICAgICAgdGhyZWFkUXVlcnk6IENvbnZlcnNhdGlvblF1ZXJ5LFxuICAgICAgcXVlcnlLZXk6IHN0cmluZyxcbiAgICAgIHVwZGF0ZWRUaHJlYWQ6IENvbnZlcnNhdGlvbixcbiAgICAgIGN1cnJlbnRQYWdlOiBudW1iZXIsXG4gICAgICBwYWdlU2l6ZTogbnVtYmVyLFxuICAgICkgPT4ge1xuICAgICAgY29uc3QgdGhyZWFkID0gYXdhaXQgdXBkYXRlVGhyZWFkKHRocmVhZFF1ZXJ5LCB1cGRhdGVkVGhyZWFkKS5jYXRjaChcbiAgICAgICAgc2lsZW5jZSxcbiAgICAgICk7XG5cbiAgICAgIGlmICghdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdLmlzTG9hZGVkKSB7XG4gICAgICAgIC8vIHBvc3NpYmxlIGhhY2s6IHBhc3MgaW4gYXJyYXkgdG8gcXVlcnk/XG4gICAgICAgIGNvbnN0IHRocmVhZHMgPSBhd2FpdCBmZXRjaFRocmVhZHMoXG4gICAgICAgICAgSlNPTi5wYXJzZShxdWVyeUtleSksXG4gICAgICAgICAgcGFnZVNpemUsXG4gICAgICAgICAgY3VycmVudFBhZ2UgKiBwYWdlU2l6ZSxcbiAgICAgICAgKS5jYXRjaChzaWxlbmNlKTtcblxuICAgICAgICBpZiAodGhyZWFkcykge1xuICAgICAgICAgIHRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS50aHJlYWRzID0gdGhyZWFkcztcbiAgICAgICAgICB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0uaXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS50aHJlYWRzID0gdGhyZWFkc01hcFtxdWVyeUtleV1bXG4gICAgICAgIGN1cnJlbnRQYWdlXG4gICAgICBdLnRocmVhZHMubWFwKChpbml0aWFsVGhyZWFkKSA9PiB7XG4gICAgICAgIGlmICh0aHJlYWQgJiYgaW5pdGlhbFRocmVhZC5pZCA9PT0gdGhyZWFkLmlkKSB7XG4gICAgICAgICAgaW5pdGlhbFRocmVhZCA9IE9iamVjdC5hc3NpZ24oaW5pdGlhbFRocmVhZCwgdGhyZWFkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5pdGlhbFRocmVhZDtcbiAgICAgIH0pO1xuICAgICAgdXBkYXRlKCh0aHJlYWRzKSA9PiB7XG4gICAgICAgIHRocmVhZHNbcXVlcnlLZXldID0gdGhyZWFkc01hcFtxdWVyeUtleV07XG4gICAgICAgIHJldHVybiB7IC4uLnRocmVhZHMgfTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS50aHJlYWRzO1xuICAgIH0sXG4gICAgdXBkYXRlVGhyZWFkU2VsZWN0aW9uOiAoXG4gICAgICBxdWVyeUtleTogc3RyaW5nLFxuICAgICAgY3VycmVudFBhZ2U6IG51bWJlcixcbiAgICAgIHRocmVhZElkPzogc3RyaW5nLFxuICAgICkgPT4ge1xuICAgICAgY29uc3QgdGhyZWFkcyA9IHRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS50aHJlYWRzO1xuXG4gICAgICBpZiAoIXRocmVhZElkKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvblN0YXRlID0gdGhyZWFkcy5zb21lKCh0aHJlYWQpID0+IHRocmVhZC5zZWxlY3RlZCk7XG4gICAgICAgIGZvciAoY29uc3QgdGhyZWFkIG9mIHRocmVhZHMpIHtcbiAgICAgICAgICB0aHJlYWQuc2VsZWN0ZWQgPSAhc2VsZWN0aW9uU3RhdGU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRocmVhZCA9IHRocmVhZHMuZmluZCgodGhyZWFkKSA9PiB0aHJlYWQuaWQgPT09IHRocmVhZElkKTtcbiAgICAgICAgaWYgKHRocmVhZCkge1xuICAgICAgICAgIHRocmVhZC5zZWxlY3RlZCA9ICF0aHJlYWQuc2VsZWN0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHVwZGF0ZSgodGhyZWFkcykgPT4ge1xuICAgICAgICB0aHJlYWRzW3F1ZXJ5S2V5XSA9IHRocmVhZHNNYXBbcXVlcnlLZXldO1xuICAgICAgICByZXR1cm4geyAuLi50aHJlYWRzIH07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0udGhyZWFkcztcbiAgICB9LFxuXG4gICAgcmVzZXQ6ICgpID0+IHtcbiAgICAgIHRocmVhZHNNYXAgPSB7fTtcbiAgICAgIHNldCh7fSk7XG4gICAgfSxcblxuICAgIGh5ZHJhdGVNZXNzYWdlSW5UaHJlYWQ6IChcbiAgICAgIGluY29taW5nTWVzc2FnZTogTWVzc2FnZSxcbiAgICAgIHF1ZXJ5OiBNYWlsYm94UXVlcnksXG4gICAgICBjdXJyZW50UGFnZTogbnVtYmVyLFxuICAgICkgPT4ge1xuICAgICAgY29uc3QgcXVlcnlLZXkgPSBKU09OLnN0cmluZ2lmeShxdWVyeSk7XG5cbiAgICAgIGNvbnN0IGZvdW5kVGhyZWFkID0gdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdPy50aHJlYWRzPy5maW5kKFxuICAgICAgICAodGhyZWFkKSA9PiB0aHJlYWQuaWQgPT09IGluY29taW5nTWVzc2FnZS50aHJlYWRfaWQsXG4gICAgICApO1xuICAgICAgaWYgKGZvdW5kVGhyZWFkKSB7XG4gICAgICAgIGNvbnN0IGZvdW5kTWVzc2FnZSA9IGZvdW5kVGhyZWFkLm1lc3NhZ2VzPy5maW5kKFxuICAgICAgICAgIChtZXNzYWdlKSA9PiBtZXNzYWdlLmlkID09PSBpbmNvbWluZ01lc3NhZ2UuaWQsXG4gICAgICAgICk7XG4gICAgICAgIGlmIChmb3VuZE1lc3NhZ2UpIHtcbiAgICAgICAgICBmb3VuZE1lc3NhZ2UuYm9keSA9IGluY29taW5nTWVzc2FnZS5ib2R5O1xuICAgICAgICAgIHVwZGF0ZSgodGhyZWFkcykgPT4ge1xuICAgICAgICAgICAgaWYgKGluY29taW5nTWVzc2FnZS50aHJlYWRfaWQpIHtcbiAgICAgICAgICAgICAgbGV0IHRocmVhZFRvVXBkYXRlID0gdGhyZWFkc1txdWVyeUtleV1bY3VycmVudFBhZ2VdLnRocmVhZHMuZmluZChcbiAgICAgICAgICAgICAgICAodGhyZWFkKSA9PiB0aHJlYWQuaWQgPT09IGZvdW5kVGhyZWFkLmlkLFxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIGlmICh0aHJlYWRUb1VwZGF0ZSkge1xuICAgICAgICAgICAgICAgIHRocmVhZFRvVXBkYXRlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmb3VuZFRocmVhZCkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyAuLi50aHJlYWRzIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gVGhpcyBoYXBwZW5zIHdoZW4gc29tZW9uZSBzZW5kcyBhIG1lc3NhZ2UgdXNpbmcgY29tcG9zZXIgYW5kIHdlIHdhbnRcbiAgICAgICAgICAvLyB0byB1cGRhdGUgdGhlIGV4aXN0aW5nIHRocmVhZCB3aXRoIHRoZSBzZW50IG1lc3NhZ2VcbiAgICAgICAgICB1cGRhdGUoKHRocmVhZHMpID0+IHtcbiAgICAgICAgICAgIGlmIChpbmNvbWluZ01lc3NhZ2UudGhyZWFkX2lkKSB7XG4gICAgICAgICAgICAgIGxldCB0aHJlYWRUb1VwZGF0ZSA9IHRocmVhZHNbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS50aHJlYWRzLmZpbmQoXG4gICAgICAgICAgICAgICAgKHRocmVhZCkgPT4gdGhyZWFkLmlkID09PSBmb3VuZFRocmVhZC5pZCxcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICBpZiAodGhyZWFkVG9VcGRhdGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlcyA9IGZvdW5kVGhyZWFkLm1lc3NhZ2VzO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2goaW5jb21pbmdNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBmb3VuZFRocmVhZC5tZXNzYWdlcyA9IG1lc3NhZ2VzO1xuICAgICAgICAgICAgICAgIGZvdW5kVGhyZWFkLnNuaXBwZXQgPSBpbmNvbWluZ01lc3NhZ2Uuc25pcHBldDtcbiAgICAgICAgICAgICAgICAvL1JlbW92ZSBkcmFmdCB3aXRoIHRoZSBzYW1lIGlkIGFzIHNlbnQgbWVzc2FnZVxuICAgICAgICAgICAgICAgIGZvdW5kVGhyZWFkLmRyYWZ0cyA9IGZvdW5kVGhyZWFkLmRyYWZ0cy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAoZHJhZnQpID0+IGRyYWZ0LmlkICE9PSBpbmNvbWluZ01lc3NhZ2UuaWQsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aHJlYWRUb1VwZGF0ZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZm91bmRUaHJlYWQpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgLi4udGhyZWFkcyB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0udGhyZWFkcztcbiAgICB9LFxuXG4gICAgLy9VcGRhdGUgZHJhZnRzIGluIHRoZSB0aHJlYWRzIHN0b3JlXG4gICAgaHlkcmF0ZURyYWZ0SW5UaHJlYWQ6IChcbiAgICAgIGluY29taW5nRHJhZnQ6IE1lc3NhZ2UsXG4gICAgICBxdWVyeTogTWFpbGJveFF1ZXJ5LFxuICAgICAgY3VycmVudFBhZ2U6IG51bWJlcixcbiAgICApID0+IHtcbiAgICAgIGNvbnN0IHF1ZXJ5S2V5ID0gSlNPTi5zdHJpbmdpZnkocXVlcnkpO1xuXG4gICAgICBjb25zdCBmb3VuZFRocmVhZCA9IHRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXT8udGhyZWFkcz8uZmluZChcbiAgICAgICAgKHRocmVhZCkgPT4gdGhyZWFkLmlkID09PSBpbmNvbWluZ0RyYWZ0LnRocmVhZF9pZCxcbiAgICAgICk7XG4gICAgICBpZiAoZm91bmRUaHJlYWQpIHtcbiAgICAgICAgLy9VcGRhdGUgZXhpc3RpbmcgZHJhZnQgbWVzc2FnZSBpbiBzdG9yZVxuICAgICAgICBjb25zdCBmb3VuZERyYWZ0ID0gZm91bmRUaHJlYWQuZHJhZnRzPy5maW5kKFxuICAgICAgICAgIChkcmFmdCkgPT4gZHJhZnQuaWQgPT09IGluY29taW5nRHJhZnQuaWQsXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGluY29taW5nRHJhZnQudGhyZWFkX2lkKSB7XG4gICAgICAgICAgaWYgKGZvdW5kRHJhZnQpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZm91bmREcmFmdCwgaW5jb21pbmdEcmFmdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRyYWZ0cyA9IGZvdW5kVGhyZWFkLmRyYWZ0cztcbiAgICAgICAgICAgIGRyYWZ0cy5wdXNoKGluY29taW5nRHJhZnQpO1xuICAgICAgICAgICAgZm91bmRUaHJlYWQuZHJhZnRzID0gZHJhZnRzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVwZGF0ZSgodGhyZWFkcykgPT4ge1xuICAgICAgICAgICAgbGV0IHRocmVhZFRvVXBkYXRlID0gdGhyZWFkc1txdWVyeUtleV1bY3VycmVudFBhZ2VdLnRocmVhZHMuZmluZChcbiAgICAgICAgICAgICAgKHRocmVhZCkgPT4gdGhyZWFkLmlkID09PSBmb3VuZFRocmVhZC5pZCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAodGhyZWFkVG9VcGRhdGUpIHtcbiAgICAgICAgICAgICAgdGhyZWFkVG9VcGRhdGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZvdW5kVGhyZWFkKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7IC4uLnRocmVhZHMgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS50aHJlYWRzO1xuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBNYWlsYm94U3RvcmUgPSBpbml0aWFsaXplVGhyZWFkcygpO1xuXG5leHBvcnQgY29uc3QgRW1haWxTdG9yZTogUmVhZGFibGU8UmVjb3JkPHN0cmluZywgVGhyZWFkW10+PiA9IGRlcml2ZWQoXG4gIE1haWxib3hTdG9yZSxcbiAgKCRNYWlsYm94U3RvcmUpID0+IHtcbiAgICBjb25zdCBlbWFpbFN0b3JlOiBSZWNvcmQ8c3RyaW5nLCBUaHJlYWRbXT4gPSB7fTtcbiAgICBPYmplY3QuZW50cmllcygkTWFpbGJveFN0b3JlKS5mb3JFYWNoKFxuICAgICAgKFtrZXksIHBhZ2luYXRlZFRocmVhZHNdKSA9PlxuICAgICAgICAoZW1haWxTdG9yZVtrZXldID0gcGFnaW5hdGVkVGhyZWFkc1xuICAgICAgICAgIC5tYXAoKHBhZ2luYXRlZFRocmVhZCkgPT4gcGFnaW5hdGVkVGhyZWFkLnRocmVhZHMpXG4gICAgICAgICAgLmZsYXQoKSksXG4gICAgKTtcbiAgICByZXR1cm4gZW1haWxTdG9yZTtcbiAgfSxcbik7XG4iLCJpbXBvcnQgeyBmZXRjaE1hbmlmZXN0IH0gZnJvbSBcIi4uL2Nvbm5lY3Rpb25zL21hbmlmZXN0XCI7XG5pbXBvcnQgeyBXcml0YWJsZSwgd3JpdGFibGUgfSBmcm9tIFwic3ZlbHRlL3N0b3JlXCI7XG5pbXBvcnQgdHlwZSB7IE1hbmlmZXN0IH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG5cbnR5cGUgTWFuaWZlc3RBY2Nlc3NvciA9IHtcbiAgY29tcG9uZW50X2lkOiBzdHJpbmc7XG4gIGFjY2Vzc190b2tlbj86IHN0cmluZztcbiAgZXh0ZXJuYWxfbWFuaWZlc3RfaWRzPzogW107XG59O1xudHlwZSBNYW5pZmVzdFN0b3JlID0gUmVjb3JkPHN0cmluZywgUHJvbWlzZTxNYW5pZmVzdD4+O1xuXG5mdW5jdGlvbiBpbml0aWFsaXplKCk6IFdyaXRhYmxlPE1hbmlmZXN0U3RvcmU+IHtcbiAgY29uc3QgZ2V0ID0gKFxuICAgIHRhcmdldDogTWFuaWZlc3RTdG9yZSxcbiAgICBrZXk6IHN0cmluZyxcbiAgKTogUHJvbWlzZTxNYW5pZmVzdD4gfCB2b2lkID0+IHtcbiAgICBjb25zdCBhY2Nlc3NvcjogTWFuaWZlc3RBY2Nlc3NvciA9IEpTT04ucGFyc2Uoa2V5KTtcblxuICAgIGlmICghYWNjZXNzb3IuY29tcG9uZW50X2lkKSByZXR1cm47XG5cbiAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICBjb25zdCBmZXRjaFByb21pc2UgPSBmZXRjaE1hbmlmZXN0KFxuICAgICAgICBhY2Nlc3Nvci5jb21wb25lbnRfaWQsXG4gICAgICAgIGFjY2Vzc29yLmFjY2Vzc190b2tlbixcbiAgICAgICk7XG4gICAgICBzdG9yZS51cGRhdGUoKHN0b3JlKSA9PiB7XG4gICAgICAgIHN0b3JlW2tleV0gPSBmZXRjaFByb21pc2U7XG4gICAgICAgIHJldHVybiBzdG9yZTtcbiAgICAgIH0pO1xuICAgICAgdGFyZ2V0W2tleV0gPSBmZXRjaFByb21pc2U7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgfTtcbiAgY29uc3Qgc3RvcmUgPSB3cml0YWJsZShuZXcgUHJveHk8TWFuaWZlc3RTdG9yZT4oe30sIHsgZ2V0IH0pKTtcbiAgcmV0dXJuIHN0b3JlO1xufVxuXG5leHBvcnQgY29uc3QgTWFuaWZlc3RTdG9yZSA9IGluaXRpYWxpemUoKTtcbiIsImltcG9ydCB7XG4gIGdldEZldGNoQ29uZmlnLFxuICBoYW5kbGVFcnJvcixcbiAgaGFuZGxlUmVzcG9uc2UsXG4gIGdldE1pZGRsZXdhcmVBcGlVcmwsXG59IGZyb20gXCIuLi9tZXRob2RzL2FwaVwiO1xuaW1wb3J0IHR5cGUgeyBGaWxlUXVlcnksIE1pZGRsZXdhcmVSZXNwb25zZSB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuXG5leHBvcnQgY29uc3QgZG93bmxvYWRGaWxlID0gYXN5bmMgKHF1ZXJ5OiBGaWxlUXVlcnkpOiBQcm9taXNlPHN0cmluZz4gPT4ge1xuICBsZXQgcXVlcnlTdHJpbmcgPSBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKHF1ZXJ5LmNvbXBvbmVudF9pZCl9L2ZpbGVzLyR7XG4gICAgcXVlcnkuZmlsZV9pZFxuICB9L2Rvd25sb2FkYDtcblxuICByZXR1cm4gYXdhaXQgZmV0Y2gocXVlcnlTdHJpbmcsIGdldEZldGNoQ29uZmlnKHF1ZXJ5KSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxzdHJpbmc+PihyZXNwb25zZSkpXG4gICAgLnRoZW4oKGpzb24pID0+IGpzb24ucmVzcG9uc2UpXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xufTtcbiIsImV4cG9ydCBjb25zdCBEaXNhbGxvd2VkQ29udGVudFR5cGVzID0gW1xuICBcIm1lc3NhZ2UvZGVsaXZlcnktc3RhdHVzXCIsXG4gIFwibWVzc2FnZS9yZmM4MjJcIixcbl07XG5cbmV4cG9ydCBjb25zdCBJbmxpbmVJbWFnZVR5cGVzID0gW1xuICBcImltYWdlL3BuZ1wiLFxuICBcImltYWdlL2FwbmdcIixcbiAgXCJpbWFnZS9hdmlmXCIsXG4gIFwiaW1hZ2UvZ2lmXCIsXG4gIFwiaW1hZ2UvanBlZ1wiLFxuICBcImltYWdlL3N2Zyt4bWxcIixcbl07XG4iLCJpbXBvcnQgeyB3cml0YWJsZSB9IGZyb20gXCJzdmVsdGUvc3RvcmVcIjtcbmltcG9ydCB0eXBlIHsgRmlsZSwgTWVzc2FnZSB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuaW1wb3J0IHsgZG93bmxvYWRGaWxlIH0gZnJvbSBcIkBjb21tb25zL2Nvbm5lY3Rpb25zL2ZpbGVzXCI7XG5pbXBvcnQgeyBJbmxpbmVJbWFnZVR5cGVzIH0gZnJvbSBcIkBjb21tb25zL2NvbnN0YW50cy9hdHRhY2htZW50LWNvbnRlbnQtdHlwZXNcIjtcbmZ1bmN0aW9uIGluaXRpYWxpemVGaWxlc0Zvck1lc3NhZ2UoKSB7XG4gIGNvbnN0IHsgc3Vic2NyaWJlLCBzZXQsIHVwZGF0ZSB9ID0gd3JpdGFibGU8XG4gICAgUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgRmlsZT4+XG4gID4oe30pO1xuICBjb25zdCBmaWxlc01hcDogUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgRmlsZT4+ID0ge307IC8vIHttZXNzYWdlX2lkOiB7ZmlsZV9pZDogQmFzZTY0IFN0cmluZ319XG5cbiAgcmV0dXJuIHtcbiAgICBzdWJzY3JpYmUsXG4gICAgZ2V0RmlsZXNGb3JNZXNzYWdlOiBhc3luYyAoXG4gICAgICBpbmNvbWluZ01lc3NhZ2U6IE1lc3NhZ2UsXG4gICAgICBxdWVyeTogeyBjb21wb25lbnRfaWQ6IHN0cmluZzsgYWNjZXNzX3Rva2VuOiBzdHJpbmcgfSxcbiAgICApID0+IHtcbiAgICAgIGlmICghZmlsZXNNYXBbaW5jb21pbmdNZXNzYWdlLmlkXSkge1xuICAgICAgICBjb25zdCBpbmxpbmVGaWxlczogUmVjb3JkPHN0cmluZywgRmlsZT4gPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBmaWxlIG9mIGluY29taW5nTWVzc2FnZS5maWxlcy52YWx1ZXMoKSkge1xuICAgICAgICAgIC8vIHRyZWF0IGFsbCBmaWxlcyB3aXRoIGNvbnRlbnRfaWQgYXMgaW5saW5lXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgKGZpbGUuY29udGVudF9kaXNwb3NpdGlvbiA9PT0gXCJpbmxpbmVcIiB8fFxuICAgICAgICAgICAgICAoZmlsZS5jb250ZW50X2lkICYmXG4gICAgICAgICAgICAgICAgSW5saW5lSW1hZ2VUeXBlcy5pbmNsdWRlcyhmaWxlLmNvbnRlbnRfdHlwZSkpKSAmJlxuICAgICAgICAgICAgIWlubGluZUZpbGVzW2ZpbGUuaWRdXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBpbmxpbmVGaWxlc1tmaWxlLmlkXSA9IGZpbGU7XG4gICAgICAgICAgICBpbmxpbmVGaWxlc1tmaWxlLmlkXS5kYXRhID0gYXdhaXQgZG93bmxvYWRGaWxlKHtcbiAgICAgICAgICAgICAgZmlsZV9pZDogZmlsZS5pZCxcbiAgICAgICAgICAgICAgY29tcG9uZW50X2lkOiBxdWVyeS5jb21wb25lbnRfaWQsXG4gICAgICAgICAgICAgIGFjY2Vzc190b2tlbjogcXVlcnkuYWNjZXNzX3Rva2VuLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZpbGVzTWFwW2luY29taW5nTWVzc2FnZS5pZF0gPSBpbmxpbmVGaWxlcztcbiAgICAgICAgdXBkYXRlKChmaWxlcykgPT4ge1xuICAgICAgICAgIGZpbGVzW2luY29taW5nTWVzc2FnZS5pZF0gPSBpbmxpbmVGaWxlcztcbiAgICAgICAgICByZXR1cm4geyAuLi5maWxlcyB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmaWxlc01hcFtpbmNvbWluZ01lc3NhZ2UuaWRdO1xuICAgIH0sXG4gICAgaGFzSW5saW5lRmlsZXM6IChpbmNvbWluZ01lc3NhZ2U6IE1lc3NhZ2UpOiBib29sZWFuID0+IHtcbiAgICAgIHJldHVybiBpbmNvbWluZ01lc3NhZ2U/LmZpbGVzPy5zb21lKFxuICAgICAgICAoZmlsZSkgPT5cbiAgICAgICAgICBmaWxlLmNvbnRlbnRfZGlzcG9zaXRpb24gPT09IFwiaW5saW5lXCIgfHxcbiAgICAgICAgICAoZmlsZS5jb250ZW50X2lkICYmIElubGluZUltYWdlVHlwZXMuaW5jbHVkZXMoZmlsZS5jb250ZW50X3R5cGUpKSxcbiAgICAgICk7XG4gICAgfSxcbiAgICByZXNldDogKCkgPT4gc2V0KHt9KSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IEZpbGVzU3RvcmUgPSBpbml0aWFsaXplRmlsZXNGb3JNZXNzYWdlKCk7XG4iLCJpbXBvcnQgdHlwZSB7IEZpbGUsIE1hbmlmZXN0IH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFdmVudERpc3BhdGNoZXIoY29tcG9uZW50OiB7XG4gIGRpc3BhdGNoRXZlbnQ/OiAoZTogRXZlbnQpID0+IGJvb2xlYW47XG59KSB7XG4gIHJldHVybiAobmFtZTogc3RyaW5nLCBkZXRhaWw6IHVua25vd24pOiB2b2lkID0+IHtcbiAgICBpZiAoY29tcG9uZW50LmRpc3BhdGNoRXZlbnQpIHtcbiAgICAgIGNvbXBvbmVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xuICAgICAgICAgIGRldGFpbCxcbiAgICAgICAgICBjb21wb3NlZDogdHJ1ZSwgLy8gcHJvcGFnYXRlIGFjcm9zcyB0aGUgc2hhZG93IERPTVxuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoXG4gIGZuOiAoYXJnczogdW5rbm93bikgPT4gdW5rbm93bixcbiAgdGltZTogbnVtYmVyLFxuKTogKCkgPT4gdm9pZCB7XG4gIGxldCB0aW1lb3V0SWQ6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+O1xuICByZXR1cm4gKCk6IHZvaWQgPT4ge1xuICAgIGlmICh0aW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgIH1cblxuICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZm4sIHRpbWUpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRJbnRlcm5hbFByb3BzPFQgZXh0ZW5kcyBQYXJ0aWFsPE1hbmlmZXN0Pj4oXG4gIHByb3BlcnRpZXM6IFQsXG4gIG1hbmlmZXN0OiBULFxuICBkZWZhdWx0VmFsdWVNYXA6IFQsXG4pOiBUIHtcbiAgcmV0dXJuIG5ldyBQcm94eShwcm9wZXJ0aWVzLCB7XG4gICAgZ2V0OiAodGFyZ2V0LCBuYW1lOiBrZXlvZiBNYW5pZmVzdCB8IFwidG9KU09OXCIgfCBcInRvU3RyaW5nXCIpID0+IHtcbiAgICAgIGlmIChuYW1lID09PSBcInRvU3RyaW5nXCIgfHwgbmFtZSA9PT0gXCJ0b0pTT05cIikge1xuICAgICAgICByZXR1cm4gKCkgPT4gSlNPTi5zdHJpbmdpZnkodGFyZ2V0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKFJlZmxlY3QuZ2V0KHRhcmdldCwgbmFtZSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZ2V0UHJvcGVydHlWYWx1ZShcbiAgICAgICAgICBSZWZsZWN0LmdldCh0YXJnZXQsIG5hbWUpLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZU1hcFtuYW1lXSxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1hbmlmZXN0ICYmIG5hbWUgaW4gbWFuaWZlc3QpIHtcbiAgICAgICAgcmV0dXJuIGdldFByb3BlcnR5VmFsdWUobWFuaWZlc3RbbmFtZV0sIGRlZmF1bHRWYWx1ZU1hcFtuYW1lXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVmYXVsdFZhbHVlTWFwW25hbWVdO1xuICAgIH0sXG5cbiAgICBvd25LZXlzOiAodGFyZ2V0KSA9PiB7XG4gICAgICBjb25zdCBrZXlzID0gbmV3IFNldChbXG4gICAgICAgIC4uLlJlZmxlY3Qub3duS2V5cyh0YXJnZXQpLFxuICAgICAgICAuLi5PYmplY3Qua2V5cyhtYW5pZmVzdCksXG4gICAgICAgIC4uLk9iamVjdC5rZXlzKGRlZmF1bHRWYWx1ZU1hcCksXG4gICAgICBdKTtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKGtleXMpO1xuICAgIH0sXG5cbiAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICh0YXJnZXQsIHByb3ApID0+IHtcbiAgICAgIGxldCBwcm9wRGVzY3JpcHRvciA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcCk7XG4gICAgICBpZiAoIXByb3BEZXNjcmlwdG9yKSB7XG4gICAgICAgIHByb3BEZXNjcmlwdG9yID0gKG1hbmlmZXN0ICYmXG4gICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtYW5pZmVzdCwgcHJvcCkpID8/XG4gICAgICAgICAgKGRlZmF1bHRWYWx1ZU1hcCAmJlxuICAgICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkZWZhdWx0VmFsdWVNYXAsIHByb3ApKSA/PyB7XG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgfTtcbiAgICAgICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3AsIHByb3BEZXNjcmlwdG9yKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9wRGVzY3JpcHRvcjtcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3BlcnR5VmFsdWU8VD4ocHJvcFZhbHVlOiBhbnksIGRlZmF1bHRUbzogVCk6IFQge1xuICBpZiAocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBkZWZhdWx0VG8gPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICByZXR1cm4gcGFyc2VCb29sZWFuKHByb3BWYWx1ZSkgYXMgYW55O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRlZmF1bHRUbyA9PT0gXCJudW1iZXJcIikge1xuICAgICAgcmV0dXJuIE51bWJlcihwcm9wVmFsdWUpIGFzIGFueTtcbiAgICB9XG4gICAgaWYgKGRlZmF1bHRUbyBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShwcm9wVmFsdWUpIGFzIGFueTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcFZhbHVlID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VG8gPz8gbnVsbCA6IHByb3BWYWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQm9vbGVhbihcbiAgdmFsOiBzdHJpbmcgfCBib29sZWFuIHwgdW5kZWZpbmVkIHwgbnVsbCxcbik6IGJvb2xlYW4ge1xuICByZXR1cm4gKDxhbnk+W3RydWUsIFwidHJ1ZVwiLCBcIjFcIl0pLmluY2x1ZGVzKHZhbCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlU3RyaW5nVG9BcnJheShwYXJzZVN0cjogc3RyaW5nKTogc3RyaW5nW10ge1xuICBpZiAoIXBhcnNlU3RyKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgaWYgKHBhcnNlU3RyLmluY2x1ZGVzKFwiLFwiKSkge1xuICAgIHJldHVybiBwYXJzZVN0ci5zcGxpdChcIixcIikubWFwKChzOiBzdHJpbmcpID0+IHMudHJpbSgpKTtcbiAgfVxuICBpZiAocGFyc2VTdHIuaW5jbHVkZXMoXCIgXCIpKSB7XG4gICAgcmV0dXJuIHBhcnNlU3RyLnNwbGl0KFwiIFwiKS5tYXAoKHM6IHN0cmluZykgPT4gcy50cmltKCkpO1xuICB9XG4gIGlmIChwYXJzZVN0ci5pbmNsdWRlcyhcIlxcblwiKSkge1xuICAgIHJldHVybiBwYXJzZVN0ci5zcGxpdChcIlxcblwiKS5tYXAoKHM6IHN0cmluZykgPT4gcy50cmltKCkpO1xuICB9XG5cbiAgcmV0dXJuIFtwYXJzZVN0ci50cmltKCldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWRBdHRhY2hlZEZpbGUoZmlsZURhdGE6IHN0cmluZywgZmlsZTogRmlsZSk6IHZvaWQge1xuICBjb25zdCBidWZmZXIgPSBVaW50OEFycmF5LmZyb20oYXRvYihmaWxlRGF0YSksIChjKSA9PiBjLmNoYXJDb2RlQXQoMCkpO1xuICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2J1ZmZlcl0sIHsgdHlwZTogZmlsZS5jb250ZW50X3R5cGUgfSk7XG4gIGNvbnN0IGJsb2JGaWxlID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cbiAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBhLmhyZWYgPSBibG9iRmlsZTtcbiAgYS5kb3dubG9hZCA9IGZpbGUuZmlsZW5hbWUgPz8gZmlsZS5pZDtcbiAgYS50YXJnZXQgPSBcIl9ibGFua1wiO1xuICBhLmNsaWNrKCk7XG4gIGEucmVtb3ZlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheUNvbnRhaW5zQXJyYXkoc3VwZXJzZXQ6IGFueVtdLCBzdWJzZXQ6IGFueVtdKTogYm9vbGVhbiB7XG4gIHJldHVybiBzdWJzZXQuZXZlcnkoKHRhcmdldCkgPT4gc3VwZXJzZXQuaW5jbHVkZXModGFyZ2V0KSk7XG59XG4iLCI8c3ZlbHRlOm9wdGlvbnMgdGFnPVwibnlsYXMtZXJyb3JcIiBpbW11dGFibGU9e3RydWV9IC8+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB7IEVycm9yU3RvcmUgfSBmcm9tIFwiLi4vc3RvcmUvZXJyb3JcIjtcbiAgaW1wb3J0IHR5cGUgeyBORXJyb3IgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvTnlsYXNcIjtcblxuICBleHBvcnQgbGV0IGlkOiBzdHJpbmc7IC8vIGNvbXBvbmVudCBpZFxuXG4gIGxldCBlcnJvcjogTkVycm9yO1xuICBsZXQgZXJyb3JOYW1lOiBzdHJpbmc7XG5cbiAgJDoge1xuICAgIGVycm9yID0gJEVycm9yU3RvcmVbaWRdID8/IHsgbmFtZTogXCJcIiB9O1xuICAgIGVycm9yTmFtZSA9IGVycm9yLm5hbWUgPz8gZXJyb3IubWVzc2FnZT8ubmFtZSA/PyBcIlwiO1xuICB9XG5cbiAgY29uc3QgaXNEZXZFbnYgPVxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKFwibG9jYWxob3N0XCIpIHx8XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoXCIxMjcuMC4wLjFcIik7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAubWVzc2FnZS1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmY2ZjY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjYWE5MmEwIGluc2V0LCAwIDAgMCAwIHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjOWYzYTM4O1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZSwgY29sb3IgNTAwbXMgZWFzZSxcbiAgICAgIGJhY2tncm91bmQtY29sb3IgNTAwbXMgZWFzZSwgYm94LXNoYWRvdyA1MDBtcyBlYXNlLFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93IDUwMG1zIGVhc2U7XG4gIH1cblxuICAubWVzc2FnZS1jb250YWluZXIgKjpmb2N1cyB7XG4gICAgb3V0bGluZTogNXB4IGF1dG8gSGlnaGxpZ2h0O1xuICAgIG91dGxpbmU6IDVweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcjtcbiAgfVxuXG4gIC5kZXRhaWxzIHtcbiAgICBjb2xvcjogIzQ5NDk0OTtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbjwvc3R5bGU+XG5cbnsjaWYgZXJyb3JOYW1lICYmIGlzRGV2RW52fVxuICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1jb250YWluZXJcIj5cbiAgICB7I2lmIGVycm9yTmFtZSA9PT0gXCJIb3N0RG9tYWluTm90QWxsb3dlZEVycm9yXCJ9XG4gICAgICA8aDM+XG4gICAgICAgIFlvdSBhcmUgdHJ5aW5nIHRvIGFjY2VzcyB0aGlzIGNvbXBvbmVudCBmcm9tJm5ic3A7XG4gICAgICAgIDxjb2RlPnt3aW5kb3cubG9jYXRpb24uaG9zdG5hbWV9PC9jb2RlPi4gVGhlIGNvbXBvbmVudCdzIHNldHRpbmdzIGRvIG5vdFxuICAgICAgICBhbGxvdyBhY2Nlc3MgZnJvbSB0aGlzIGRvbWFpbi5cbiAgICAgIDwvaDM+XG4gICAgICA8aDQ+XG4gICAgICAgIFRoZSBsaXN0IG9mIGFsbG93ZWQgZG9tYWlucyBjYW4gYmUgbW9kaWZpZWQgaW4geW91ciZuYnNwO1xuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9kYXNoYm9hcmQubnlsYXMuY29tXCI+RGFzaGJvYXJkPC9hPi5cbiAgICAgIDwvaDQ+XG4gICAgezplbHNlIGlmIGVycm9yTmFtZSA9PT0gXCJJbmNvbXBhdGlibGVQcm9wZXJ0aWVzXCJ9XG4gICAgICA8aDM+WW91ciBjb21wb25lbnQgcHJvcGVydGllcyBkbyBub3Qgd29yayB3aXRoIGVhY2ggb3RoZXIuPC9oMz5cbiAgICB7L2lmfVxuICAgIDxzcGFuIGNsYXNzPVwiZGV0YWlsc1wiPkRlYnVnIGluZm86PC9zcGFuPlxuICAgIDx0ZXh0YXJlYSBjbGFzcz1cImRldGFpbHNcIiByZWFkb25seT5cbiAgICAgIHtlcnJvck5hbWV9OiB7aWR9XG4gICAgICB7ZXJyb3IubWVzc2FnZT8ubWVzc2FnZSA/PyBcIlwifVxuICAgIDwvdGV4dGFyZWE+XG4gIDwvZGl2Plxuey9pZn1cbiIsImV4cG9ydCBlbnVtIEFjY291bnRPcmdhbml6YXRpb25Vbml0IHtcbiAgTGFiZWwgPSBcImxhYmVsXCIsXG4gIEZvbGRlciA9IFwiZm9sZGVyXCIsXG59XG5cbmV4cG9ydCBlbnVtIEFjY291bnRTeW5jU3RhdGUge1xuICBSVU5OSU5HID0gXCJydW5uaW5nXCIsXG4gIFBBUlRJQUwgPSBcInBhcnRpYWxcIixcbiAgU1RPUFBFRCA9IFwic3RvcHBlZFwiLFxufVxuXG5leHBvcnQgZW51bSBNYWlsYm94QWN0aW9ucyB7XG4gIFNFTEVDVEFMTCA9IFwic2VsZWN0YWxsXCIsXG4gIERFTEVURSA9IFwiZGVsZXRlXCIsXG4gIFNUQVIgPSBcInN0YXJcIixcbiAgVU5SRUFEID0gXCJ1bnJlYWRcIixcbn1cblxuZXhwb3J0IGVudW0gTWVzc2FnZVR5cGUge1xuICBEUkFGVFMgPSBcImRyYWZ0c1wiLFxuICBNRVNTQUdFUyA9IFwibWVzc2FnZXNcIixcbn1cblxuZXhwb3J0IGVudW0gTWFpbGJveFRocmVhZENsaWNrQWN0aW9uIHtcbiAgREVGQVVMVCA9IFwiZGVmYXVsdFwiLFxuICBDVVNUT00gPSBcImN1c3RvbVwiLFxufVxuIiwiaW1wb3J0IHtcbiAgZ2V0RmV0Y2hDb25maWcsXG4gIGhhbmRsZUVycm9yLFxuICBoYW5kbGVSZXNwb25zZSxcbiAgZ2V0TWlkZGxld2FyZUFwaVVybCxcbn0gZnJvbSBcIi4uL21ldGhvZHMvYXBpXCI7XG5pbXBvcnQgdHlwZSB7XG4gIENvbW1vblF1ZXJ5LFxuICBNaWRkbGV3YXJlUmVzcG9uc2UsXG4gIEZvbGRlcixcbn0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEZvbGRlcnMgPSBhc3luYyAocXVlcnk6IENvbW1vblF1ZXJ5KTogUHJvbWlzZTxGb2xkZXJbXT4gPT4ge1xuICBjb25zdCBxdWVyeVN0cmluZyA9IGAke2dldE1pZGRsZXdhcmVBcGlVcmwocXVlcnkuY29tcG9uZW50X2lkKX0vZm9sZGVyc2A7XG4gIHJldHVybiBhd2FpdCBmZXRjaChxdWVyeVN0cmluZywgZ2V0RmV0Y2hDb25maWcocXVlcnkpKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPEZvbGRlcltdPj4ocmVzcG9uc2UpKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn07XG4iLCJpbXBvcnQgeyB3cml0YWJsZSB9IGZyb20gXCJzdmVsdGUvc3RvcmVcIjtcbmltcG9ydCB0eXBlIHsgQ29tbW9uUXVlcnksIEZvbGRlciwgU3RvcmVkRm9sZGVycyB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuaW1wb3J0IHsgZmV0Y2hGb2xkZXJzIH0gZnJvbSBcIkBjb21tb25zL2Nvbm5lY3Rpb25zL2ZvbGRlcnNcIjtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUZvbGRlcnMoKSB7XG4gIGNvbnN0IHsgc3Vic2NyaWJlLCBzZXQsIHVwZGF0ZSB9ID0gd3JpdGFibGU8UmVjb3JkPHN0cmluZywgRm9sZGVyW10+Pih7fSk7XG4gIGNvbnN0IGZvbGRlcnNNYXA6IFJlY29yZDxzdHJpbmcsIEZvbGRlcltdPiA9IHt9O1xuXG4gIHJldHVybiB7XG4gICAgc3Vic2NyaWJlLFxuICAgIGdldEZvbGRlcnM6IGFzeW5jIChxdWVyeTogQ29tbW9uUXVlcnksIGZvcmNlUmVmcmVzaCA9IGZhbHNlKSA9PiB7XG4gICAgICBjb25zdCBxdWVyeUtleSA9IEpTT04uc3RyaW5naWZ5KHF1ZXJ5KTtcbiAgICAgIGlmIChcbiAgICAgICAgKCFmb2xkZXJzTWFwW3F1ZXJ5S2V5XSB8fCBmb3JjZVJlZnJlc2gpICYmXG4gICAgICAgIChxdWVyeS5jb21wb25lbnRfaWQgfHwgcXVlcnkuYWNjZXNzX3Rva2VuKVxuICAgICAgKSB7XG4gICAgICAgIGZvbGRlcnNNYXBbcXVlcnlLZXldID0gKGF3YWl0IGZldGNoRm9sZGVycyhxdWVyeSkpLm1hcCgoZm9sZGVyKSA9PiB7XG4gICAgICAgICAgZm9sZGVyLnRvU3RyaW5nID0gKCkgPT4gZm9sZGVyLmlkO1xuICAgICAgICAgIHJldHVybiBmb2xkZXI7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdXBkYXRlKChmb2xkZXJzKSA9PiB7XG4gICAgICAgIGZvbGRlcnNbcXVlcnlLZXldID0gZm9sZGVyc01hcFtxdWVyeUtleV07XG4gICAgICAgIHJldHVybiB7IC4uLmZvbGRlcnMgfTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZvbGRlcnNNYXBbcXVlcnlLZXldO1xuICAgIH0sXG4gICAgcmVzZXQ6ICgpID0+IHNldCh7fSksXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBGb2xkZXJTdG9yZSA9IGluaXRpYWxpemVGb2xkZXJzKCk7XG4iLCJpbXBvcnQge1xuICBnZXRGZXRjaENvbmZpZyxcbiAgaGFuZGxlRXJyb3IsXG4gIGhhbmRsZVJlc3BvbnNlLFxuICBnZXRNaWRkbGV3YXJlQXBpVXJsLFxufSBmcm9tIFwiLi4vbWV0aG9kcy9hcGlcIjtcbmltcG9ydCB0eXBlIHtcbiAgQ29tbW9uUXVlcnksXG4gIE1pZGRsZXdhcmVSZXNwb25zZSxcbiAgTGFiZWwsXG59IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hMYWJlbHMgPSBhc3luYyAocXVlcnk6IENvbW1vblF1ZXJ5KTogUHJvbWlzZTxMYWJlbFtdPiA9PiB7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gYCR7Z2V0TWlkZGxld2FyZUFwaVVybChxdWVyeS5jb21wb25lbnRfaWQpfS9sYWJlbHNgO1xuICByZXR1cm4gYXdhaXQgZmV0Y2gocXVlcnlTdHJpbmcsIGdldEZldGNoQ29uZmlnKHF1ZXJ5KSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxMYWJlbFtdPj4ocmVzcG9uc2UpKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn07XG4iLCJpbXBvcnQgeyB3cml0YWJsZSB9IGZyb20gXCJzdmVsdGUvc3RvcmVcIjtcbmltcG9ydCB0eXBlIHsgQ29tbW9uUXVlcnksIExhYmVsLCBTdG9yZWRMYWJlbHMgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvTnlsYXNcIjtcbmltcG9ydCB7IGZldGNoTGFiZWxzIH0gZnJvbSBcIkBjb21tb25zL2Nvbm5lY3Rpb25zL2xhYmVsc1wiO1xuXG5mdW5jdGlvbiBpbml0aWFsaXplTGFiZWxzKCkge1xuICBjb25zdCB7IHN1YnNjcmliZSwgc2V0LCB1cGRhdGUgfSA9IHdyaXRhYmxlPFJlY29yZDxzdHJpbmcsIExhYmVsW10+Pih7fSk7XG4gIGNvbnN0IGxhYmVsc01hcDogUmVjb3JkPHN0cmluZywgTGFiZWxbXT4gPSB7fTtcblxuICByZXR1cm4ge1xuICAgIHN1YnNjcmliZSxcbiAgICBnZXRMYWJlbHM6IGFzeW5jIChxdWVyeTogQ29tbW9uUXVlcnksIGZvcmNlUmVmcmVzaCA9IGZhbHNlKSA9PiB7XG4gICAgICBjb25zdCBxdWVyeUtleSA9IEpTT04uc3RyaW5naWZ5KHF1ZXJ5KTtcbiAgICAgIGlmIChcbiAgICAgICAgKCFsYWJlbHNNYXBbcXVlcnlLZXldIHx8IGZvcmNlUmVmcmVzaCkgJiZcbiAgICAgICAgKHF1ZXJ5LmNvbXBvbmVudF9pZCB8fCBxdWVyeS5hY2Nlc3NfdG9rZW4pXG4gICAgICApIHtcbiAgICAgICAgbGFiZWxzTWFwW3F1ZXJ5S2V5XSA9IChhd2FpdCBmZXRjaExhYmVscyhxdWVyeSkpLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgICBsYWJlbC50b1N0cmluZyA9ICgpID0+IGxhYmVsLmlkO1xuICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB1cGRhdGUoKGxhYmVscykgPT4ge1xuICAgICAgICBsYWJlbHNbcXVlcnlLZXldID0gbGFiZWxzTWFwW3F1ZXJ5S2V5XTtcbiAgICAgICAgcmV0dXJuIHsgLi4ubGFiZWxzIH07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBsYWJlbHNNYXBbcXVlcnlLZXldO1xuICAgIH0sXG4gICAgcmVzZXQ6ICgpID0+IHNldCh7fSksXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBMYWJlbFN0b3JlID0gaW5pdGlhbGl6ZUxhYmVscygpO1xuIiwiaW1wb3J0IHR5cGUgeyBNZXNzYWdlLCBQYXJ0aWNpcGFudCB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5jbHVkZXNNeUVtYWlsKFxuICBteUVtYWlsOiBzdHJpbmcsXG4gIG1lc3NhZ2U6IE1lc3NhZ2UsXG4gIGZpZWxkOiBcInRvXCIgfCBcImZyb21cIiB8IFwiY2NcIiB8IFwiYmNjXCIsXG4pOiBib29sZWFuIHtcbiAgaWYgKCFteUVtYWlsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIG1lc3NhZ2VbZmllbGRdLnNvbWUoXG4gICAgKGUpID0+IGUuZW1haWwudG9Mb3dlckNhc2UoKSA9PT0gbXlFbWFpbC50b0xvd2VyQ2FzZSgpLFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFydGljaXBhbnRzV2l0aG91dEdpdmVuRW1haWxzKFxuICBlbWFpbHM6IHN0cmluZ1tdLFxuICBtZXNzYWdlOiBNZXNzYWdlLFxuKTogUGFydGljaXBhbnRbXSB7XG4gIGNvbnN0IGFsbFBhcnRpY2lwYW50cyA9IFtcbiAgICAuLi5tZXNzYWdlLmZyb20sXG4gICAgLi4ubWVzc2FnZS50byxcbiAgICAuLi5tZXNzYWdlLmNjLFxuICAgIC4uLm1lc3NhZ2UuYmNjLFxuICBdO1xuICByZXR1cm4gYWxsUGFydGljaXBhbnRzLmZpbHRlcigoZSkgPT4gIWVtYWlscy5pbmNsdWRlcyhlLmVtYWlsKSk7XG59XG5cbnR5cGUgQnVpbGRQYXJ0aWNpcGFudCA9IHtcbiAgbXlFbWFpbDogc3RyaW5nO1xuICBtZXNzYWdlOiBNZXNzYWdlO1xuICB0eXBlOiBcInJlcGx5XCIgfCBcInJlcGx5X2FsbFwiO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUGFydGljaXBhbnRzKHtcbiAgbXlFbWFpbCxcbiAgbWVzc2FnZSxcbiAgdHlwZSxcbn06IEJ1aWxkUGFydGljaXBhbnQpOiBSZWNvcmQ8c3RyaW5nLCBQYXJ0aWNpcGFudFtdPiB7XG4gIGxldCB0bzogUGFydGljaXBhbnRbXSA9IFtdO1xuICBsZXQgY2M6IFBhcnRpY2lwYW50W10gPSBbXTtcbiAgdG8gPSBtZXNzYWdlLnJlcGx5X3RvLmZpbHRlcigoZSkgPT4gZS5lbWFpbCAhPT0gbXlFbWFpbCk7XG4gIC8vIGlmIG1lc3NhZ2UgZG9lcyBub3QgaGF2ZSAncmVwbHlfdG8nOlxuICAvLyAtIEFORCBpZiBtZXNzYWdlIGZyb20gc2VsZiBzZXQgJ3RvJyBhcyB0aGUgZGVmYXVsdCAndG8nXG4gIC8vIC0gZWxzZSBzZXQgJ2Zyb20nIGFzIHRoZSBkZWZhdWx0ICd0bydcbiAgaWYgKCF0by5sZW5ndGgpIHtcbiAgICBpZiAoaW5jbHVkZXNNeUVtYWlsKG15RW1haWwsIG1lc3NhZ2UsIFwiZnJvbVwiKSkge1xuICAgICAgdG8gPSBtZXNzYWdlLnRvO1xuICAgIH0gZWxzZSB7XG4gICAgICB0byA9IG1lc3NhZ2UuZnJvbTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZSA9PT0gXCJyZXBseV9hbGxcIikge1xuICAgIGNvbnN0IGZyb21FbWFpbHMgPSBtZXNzYWdlLmZyb20/Lm1hcCgoaSkgPT4gaS5lbWFpbCk7XG4gICAgY2MgPSBbLi4ucGFydGljaXBhbnRzV2l0aG91dEdpdmVuRW1haWxzKFsuLi5mcm9tRW1haWxzLCBteUVtYWlsXSwgbWVzc2FnZSldO1xuICB9XG5cbiAgcmV0dXJuIHsgdG8sIGNjIH07XG59XG5cbmV4cG9ydCBjb25zdCBpc1ZhbGlkUGFydGljaXBhbnQgPSAocGFydGljaXBhbnQ6IFBhcnRpY2lwYW50KTogYm9vbGVhbiA9PiB7XG4gIGlmIChcImVtYWlsXCIgaW4gcGFydGljaXBhbnQgJiYgXCJuYW1lXCIgaW4gcGFydGljaXBhbnQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYW5QYXJ0aWNpcGFudHMgPSAoY29udGFjdHM6IGFueVtdKTogUGFydGljaXBhbnRbXSA9PiB7XG4gIGNvbnN0IHBhcnRpY2lwYW50cyA9IGNvbnRhY3RzLnJlZHVjZSgocmVzdWx0OiBQYXJ0aWNpcGFudFtdLCBjb250YWN0KSA9PiB7XG4gICAgaWYgKGlzVmFsaWRQYXJ0aWNpcGFudChjb250YWN0KSkge1xuICAgICAgLy8gSWYgaXQgaXMgYSB2YWxpZCBQYXJ0aWNpcGFudCB0eXBlXG4gICAgICByZXN1bHQucHVzaChjb250YWN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgaXQgaXMgYSBDb250YWN0IHR5cGUsIGNvbnN1bWVkIC9jb250YWN0cyBhcGlcbiAgICAgIGlmIChcImVtYWlsc1wiIGluIGNvbnRhY3QgJiYgY29udGFjdC5lbWFpbHM/Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIG5hbWU6IGAke2NvbnRhY3QuZ2l2ZW5fbmFtZSA/PyBcIlwifSAke2NvbnRhY3Quc3VybmFtZSA/PyBcIlwifWAsXG4gICAgICAgICAgZW1haWw6IGNvbnRhY3QuZW1haWxzWzBdLmVtYWlsLFxuICAgICAgICAgIGNvbnRhY3QsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LCBbXSk7XG4gIHJldHVybiBwYXJ0aWNpcGFudHM7XG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGFkZEtleVZhbHVlPFQ+KGFycjogYW55W10sIG9iajogUmVjb3JkPGFueSwgYW55Pik6IFRbXSB7XG4gIHJldHVybiBhcnIubWFwKChpdGVtOiBhbnkpID0+ICh7IC4uLml0ZW0sIC4uLm9iaiB9KSk7XG59XG4iLCI8c3ZnIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTcgMTZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbjxwYXRoIGQ9XCJNMTEuMTY2NiA2LjY2NjY2TDguNTAwOTQgOS40ODI1OEw1LjgzMzMxIDYuNjY2NjZcIiBzdHJva2U9XCIjOGQ5NGE1XCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiLz5cbjwvc3ZnPlxuIiwiPHN2ZyB3aWR0aD1cIjExXCIgaGVpZ2h0PVwiMTNcIiB2aWV3Qm94PVwiMCAwIDExIDEzXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG48cGF0aCBkPVwiTTAuNzUgMTEuMzc1QzAuNzUgMTIuMDA3OCAxLjI0MjE5IDEyLjUgMS44NzUgMTIuNUg4LjYyNUM5LjIzNDM4IDEyLjUgOS43NSAxMi4wMDc4IDkuNzUgMTEuMzc1VjMuNUgwLjc1VjExLjM3NVpNNy4xMjUgNS4zNzVDNy4xMjUgNS4xODc1IDcuMjg5MDYgNSA3LjUgNUM3LjY4NzUgNSA3Ljg3NSA1LjE4NzUgNy44NzUgNS4zNzVWMTAuNjI1QzcuODc1IDEwLjgzNTkgNy42ODc1IDExIDcuNSAxMUM3LjI4OTA2IDExIDcuMTI1IDEwLjgzNTkgNy4xMjUgMTAuNjI1VjUuMzc1Wk00Ljg3NSA1LjM3NUM0Ljg3NSA1LjE4NzUgNS4wMzkwNiA1IDUuMjUgNUM1LjQzNzUgNSA1LjYyNSA1LjE4NzUgNS42MjUgNS4zNzVWMTAuNjI1QzUuNjI1IDEwLjgzNTkgNS40Mzc1IDExIDUuMjUgMTFDNS4wMzkwNiAxMSA0Ljg3NSAxMC44MzU5IDQuODc1IDEwLjYyNVY1LjM3NVpNMi42MjUgNS4zNzVDMi42MjUgNS4xODc1IDIuNzg5MDYgNSAzIDVDMy4xODc1IDUgMy4zNzUgNS4xODc1IDMuMzc1IDUuMzc1VjEwLjYyNUMzLjM3NSAxMC44MzU5IDMuMTg3NSAxMSAzIDExQzIuNzg5MDYgMTEgMi42MjUgMTAuODM1OSAyLjYyNSAxMC42MjVWNS4zNzVaTTEwLjEyNSAxLjI1SDcuMzEyNUw3LjA3ODEyIDAuODI4MTI1QzYuOTg0MzggMC42NDA2MjUgNi43OTY4OCAwLjUgNi41ODU5NCAwLjVIMy44OTA2MkMzLjY3OTY5IDAuNSAzLjQ5MjE5IDAuNjQwNjI1IDMuMzk4NDQgMC44MjgxMjVMMy4xODc1IDEuMjVIMC4zNzVDMC4xNjQwNjIgMS4yNSAwIDEuNDM3NSAwIDEuNjI1VjIuMzc1QzAgMi41ODU5NCAwLjE2NDA2MiAyLjc1IDAuMzc1IDIuNzVIMTAuMTI1QzEwLjMxMjUgMi43NSAxMC41IDIuNTg1OTQgMTAuNSAyLjM3NVYxLjYyNUMxMC41IDEuNDM3NSAxMC4zMTI1IDEuMjUgMTAuMTI1IDEuMjVaXCIgZmlsbD1cIiM2QTcyODVcIi8+XG48L3N2Zz5cbiIsIjxzdmcgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEzXCIgdmlld0JveD1cIjAgMCAxMiAxM1wiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuPHBhdGggZD1cIk00LjEyNSA1LjU2MjVINy44NzVDOC4wNjI1IDUuNTYyNSA4LjI1IDUuMzk4NDQgOC4yNSA1LjE4NzVWNC44MTI1QzguMjUgNC42MjUgOC4wNjI1IDQuNDM3NSA3Ljg3NSA0LjQzNzVINC4xMjVDMy45MTQwNiA0LjQzNzUgMy43NSA0LjYyNSAzLjc1IDQuODEyNVY1LjE4NzVDMy43NSA1LjM5ODQ0IDMuOTE0MDYgNS41NjI1IDQuMTI1IDUuNTYyNVpNMy43NSA3LjQzNzVDMy43NSA3LjY0ODQ0IDMuOTE0MDYgNy44MTI1IDQuMTI1IDcuODEyNUg3Ljg3NUM4LjA2MjUgNy44MTI1IDguMjUgNy42NDg0NCA4LjI1IDcuNDM3NVY3LjA2MjVDOC4yNSA2Ljg3NSA4LjA2MjUgNi42ODc1IDcuODc1IDYuNjg3NUg0LjEyNUMzLjkxNDA2IDYuNjg3NSAzLjc1IDYuODc1IDMuNzUgNy4wNjI1VjcuNDM3NVpNNiAxMC4yOTY5QzUuNjAxNTYgMTAuMjk2OSA1LjIyNjU2IDEwLjE3OTcgNC44OTg0NCA5LjkyMTg4TDAgNi4zODI4MVYxMS4zNzVDMCAxMi4wMDc4IDAuNDkyMTg4IDEyLjUgMS4xMjUgMTIuNUgxMC44NzVDMTEuNDg0NCAxMi41IDEyIDEyLjAwNzggMTIgMTEuMzc1VjYuMzgyODFMNy4wNzgxMiA5LjkyMTg4QzYuNzUgMTAuMTc5NyA2LjM3NSAxMC4yOTY5IDYgMTAuMjk2OVpNMTEuNTU0NyA0LjMyMDMxQzExLjM0MzggNC4xNzk2OSAxMS4xNTYyIDQuMDE1NjIgMTAuODc1IDMuODA0NjlWMi43NUMxMC44NzUgMi4xNDA2MiAxMC4zNTk0IDEuNjI1IDkuNzUgMS42MjVINy45MjE4OEM3Ljg1MTU2IDEuNTc4MTIgNy43ODEyNSAxLjUzMTI1IDcuNzEwOTQgMS40ODQzOEM3LjMxMjUgMS4yMDMxMiA2LjUzOTA2IDAuNSA2IDAuNUM1LjQzNzUgMC41IDQuNjY0MDYgMS4yMDMxMiA0LjI2NTYyIDEuNDg0MzhDNC4xOTUzMSAxLjUzMTI1IDQuMTI1IDEuNTc4MTIgNC4wNTQ2OSAxLjYyNUgyLjI1QzEuNjE3MTkgMS42MjUgMS4xMjUgMi4xNDA2MiAxLjEyNSAyLjc1VjMuODA0NjlDMC44MjAzMTIgNC4wMTU2MiAwLjYzMjgxMiA0LjE3OTY5IDAuNDIxODc1IDQuMzIwMzFDMC4xNjQwNjIgNC41MzEyNSAwIDQuODU5MzggMCA1LjIxMDk0VjUuNDY4NzVMMi4yNSA3LjA4NTk0VjIuNzVIOS43NVY3LjA4NTk0TDEyIDUuNDY4NzVWNS4yMTA5NEMxMiA0Ljg1OTM4IDExLjgzNTkgNC41NTQ2OSAxMS41NTQ3IDQuMzIwMzFaXCIgZmlsbD1cIiM2QTcyODVcIi8+XG48L3N2Zz5cbiIsIjxzdmcgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjlcIiB2aWV3Qm94PVwiMCAwIDEyIDlcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbjxwYXRoIGQ9XCJNMTEuNzY1NiAyLjk3NjU2QzExLjIyNjYgMy4zOTg0NCAxMC41NDY5IDMuOTE0MDYgOC4xNTYyNSA1LjY0ODQ0QzcuNjg3NSA2IDYuODIwMzEgNi43NzM0NCA2IDYuNzczNDRDNS4xNTYyNSA2Ljc3MzQ0IDQuMzEyNSA2IDMuODIwMzEgNS42NDg0NEMxLjQyOTY5IDMuOTE0MDYgMC43NSAzLjM5ODQ0IDAuMjEwOTM4IDIuOTc2NTZDMC4xMTcxODggMi45MDYyNSAwIDIuOTc2NTYgMCAzLjA5Mzc1VjcuODc1QzAgOC41MDc4MSAwLjQ5MjE4OCA5IDEuMTI1IDlIMTAuODc1QzExLjQ4NDQgOSAxMiA4LjUwNzgxIDEyIDcuODc1VjMuMDkzNzVDMTIgMi45NzY1NiAxMS44NTk0IDIuOTA2MjUgMTEuNzY1NiAyLjk3NjU2Wk02IDZDNi41MzkwNiA2LjAyMzQ0IDcuMzEyNSA1LjMyMDMxIDcuNzEwOTQgNS4wMzkwNkMxMC44MjgxIDIuNzg5MDYgMTEuMDYyNSAyLjU3ODEyIDExLjc2NTYgMi4wMTU2MkMxMS45MDYyIDEuOTIxODggMTIgMS43NTc4MSAxMiAxLjU3MDMxVjEuMTI1QzEyIDAuNTE1NjI1IDExLjQ4NDQgMCAxMC44NzUgMEgxLjEyNUMwLjQ5MjE4OCAwIDAgMC41MTU2MjUgMCAxLjEyNVYxLjU3MDMxQzAgMS43NTc4MSAwLjA3MDMxMjUgMS45MjE4OCAwLjIxMDkzOCAyLjAxNTYyQzAuOTE0MDYyIDIuNTc4MTIgMS4xNDg0NCAyLjc4OTA2IDQuMjY1NjIgNS4wMzkwNkM0LjY2NDA2IDUuMzIwMzEgNS40Mzc1IDYuMDIzNDQgNiA2WlwiIGZpbGw9XCIjNkE3Mjg1XCIvPlxuPC9zdmc+XG4iLCI8c3ZnIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIxNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiXHJcblx0IHZpZXdCb3g9XCIwIDAgNTExLjM2IDUxMS4zNlwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTEuMzYgNTExLjM2O1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XHJcbjxnPlxyXG5cdDxnPlxyXG5cdFx0PHBhdGggZD1cIk00NTQuODI3LDM1LjJjLTQ2LjkzMy00Ni45MzMtMTIyLjAyNy00Ni45MzMtMTY4Ljk2LDBMNjMuMTQ3LDI1OC43NzNjLTMuNDEzLDMuNDEzLTMuNDEzLDguNTMzLDAsMTEuOTQ3XHJcblx0XHRcdHM4LjUzMywzLjQxMywxMS45NDcsMGwyMjIuNzItMjIzLjU3M2M0MC4xMDctNDAuMTA3LDEwNC45Ni00MC4xMDcsMTQ1LjA2NywwYzQwLjEwNyw0MC4xMDcsNDAuMTA3LDEwNC45NiwwLDE0NS4wNjdcclxuXHRcdFx0TDE2Mi4xMzMsNDcyLjk2Yy0yOC4xNiwyOC4xNi03NC4yNCwyOC4xNi0xMDIuNCwwYy0yOC4xNi0yOC4xNi0yOC4xNi03NC4yNCwwLTEwMi40bDIyNi4xMzMtMjI2Ljk4N1xyXG5cdFx0XHRjMTcuMDY3LTE2LjIxMyw0My41Mi0xNy4wNjcsNjAuNTg3LDBjMTYuMjEzLDE3LjA2NywxNi4yMTMsNDQuMzczLDAsNjAuNTg3bC0xNjguOTYsMTY5LjgxM2MtMy40MTMsMy40MTMtMy40MTMsOC41MzMsMCwxMS45NDdcclxuXHRcdFx0YzMuNDEzLDMuNDEzLDguNTMzLDMuNDEzLDExLjk0NywwTDM1OC40LDIxNi45NmMyMy4wNC0yMy4wNCwyMy4wNC02MS40NCwwLTg0LjQ4Yy0yMy4wNC0yMy4wNC02MS40NC0yMy4wNC04NC40OCwwXHJcblx0XHRcdEw0Ny43ODcsMzU4LjYxM2MtMzQuOTg3LDM0LjEzMy0zNC45ODcsOTEuMzA3LDAsMTI2LjI5M2MxNy4wNjcsMTcuOTIsNDAuMTA3LDI2LjQ1Myw2My4xNDcsMjYuNDUzXHJcblx0XHRcdGMyMy4wNCwwLDQ2LjA4LTguNTMzLDYzLjE0Ny0yNi40NTNMNDU0LjgyNywyMDQuMTZjMjIuMTg3LTIyLjE4NywzNC45ODctNTIuOTA3LDM0Ljk4Ny04NC40OFxyXG5cdFx0XHRDNDg5LjgxMyw4OC4xMDcsNDc3LjAxMyw1Ny4zODcsNDU0LjgyNywzNS4yelwiLz5cclxuXHQ8L2c+XHJcbjwvc3ZnPlxyXG4iLCI8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbjxwYXRoIGQ9XCJNMTEuNzYwNSAxNy4zMDI5TDYuMzI0MjIgMTIuMTQ5NEwxMS43NjA1IDYuOTk5NjhcIiBzdHJva2U9XCIjMTYxNzE3XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiLz5cbjxwYXRoIGQ9XCJNNi40Mjc5MSAxMi4xNDk0TDE4IDEyLjE0OTRcIiBzdHJva2U9XCIjMTYxNzE3XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiLz5cbjwvc3ZnPlxuIiwiPHN2ZyB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMjhcIiBzdHlsZT1cIm1hcmdpbi10b3A6MnB4XCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuPHBhdGggZD1cIk0xMCAyQzE0LjQxODMgMiAxOCA1LjU4MTcyIDE4IDEwQzE4IDE0LjQxODMgMTQuNDE4MyAxOCAxMCAxOEM1LjU4MTcyIDE4IDIgMTQuNDE4MyAyIDEwQzIgNS41ODE3MiA1LjU4MTcyIDIgMTAgMlpNMTAgM0M2LjEzNDAxIDMgMyA2LjEzNDAxIDMgMTBDMyAxMy44NjYgNi4xMzQwMSAxNyAxMCAxN0MxMy44NjYgMTcgMTcgMTMuODY2IDE3IDEwQzE3IDYuMTM0MDEgMTMuODY2IDMgMTAgM1pNMTAgMTIuNUMxMC40MTQyIDEyLjUgMTAuNzUgMTIuODM1OCAxMC43NSAxMy4yNUMxMC43NSAxMy42NjQyIDEwLjQxNDIgMTQgMTAgMTRDOS41ODU3OSAxNCA5LjI1IDEzLjY2NDIgOS4yNSAxMy4yNUM5LjI1IDEyLjgzNTggOS41ODU3OSAxMi41IDEwIDEyLjVaTTEwIDZDMTAuMjQ1NSA2IDEwLjQ0OTYgNi4xNzY4OCAxMC40OTE5IDYuNDEwMTJMMTAuNSA2LjVWMTFDMTAuNSAxMS4yNzYxIDEwLjI3NjEgMTEuNSAxMCAxMS41QzkuNzU0NTQgMTEuNSA5LjU1MDM5IDExLjMyMzEgOS41MDgwNiAxMS4wODk5TDkuNSAxMVY2LjVDOS41IDYuMjIzODYgOS43MjM4NiA2IDEwIDZaXCIgZmlsbD1cIndoaXRlXCIvPlxuPC9zdmc+XG4iLCI8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbjxwYXRoIGQ9XCJNMTEuMjQ1MiAwLjgxNzA1OEMxMi4zMzIgLTAuMjY5NzQ5IDE0LjA5NDEgLTAuMjY5NzQ5IDE1LjE4MDkgMC44MTcwNThDMTYuMjIyNCAxLjg1ODU4IDE2LjI2NTggMy41MjAyNiAxNS4zMTExIDQuNjEzNDZMMTUuMTgwOSA0Ljc1MjczTDUuNTc1MDYgMTQuMzU4NkM1LjM2OTk3IDE0LjU2MzYgNS4xMjMyMyAxNC43MjEyIDQuODUyMzYgMTQuODIxTDQuNjg3MDggMTQuODczOUwwLjYzMjExMSAxNS45Nzk4QzAuMjg1NTIyIDE2LjA3NDMgLTAuMDM0NTQxNCAxNS43ODU3IDAuMDAzMDA2NTUgMTUuNDQ1MkwwLjAxODE3MDQgMTUuMzY1OEwxLjEyNDA3IDExLjMxMDlDMS4yMDAzOSAxMS4wMzEgMS4zMzY0NiAxMC43NzE4IDEuNTIyMTIgMTAuNTUwOEwxLjYzOTM5IDEwLjQyMjlMMTEuMjQ1MiAwLjgxNzA1OFpNMTAuMzg1IDMuMDkxOTVMMi4zNDY0OSAxMS4xM0MyLjI1NDIgMTEuMjIyMyAyLjE4MTE3IDExLjMzMTQgMi4xMzExMSAxMS40NTExTDIuMDg4ODQgMTEuNTc0TDEuMjEyMiAxNC43ODQ3TDQuNDIzOTcgMTMuOTA5MUM0LjUwNzkxIDEzLjg4NjIgNC41ODgxNSAxMy44NTI2IDQuNjYyNzggMTMuODA5M0w0Ljc3MDI4IDEzLjczNzJMNC44Njc5NiAxMy42NTE1TDEyLjkwNiA1LjYxMjk1TDEwLjM4NSAzLjA5MTk1Wk0xNC40NzM4IDEuNTI0MTdDMTMuODE2MiAwLjg2NjU2NSAxMi43NzI3IDAuODMwMDMxIDEyLjA3MjIgMS40MTQ1N0wxMS45NTIzIDEuNTI0MTdMMTEuMDkyIDIuMzg0OTVMMTMuNjEzIDQuOTA1OTVMMTQuNDczOCA0LjA0NTYzQzE1LjEzMTQgMy4zODgwMyAxNS4xNjc5IDIuMzQ0NTUgMTQuNTgzNCAxLjY0NDA3TDE0LjQ3MzggMS41MjQxN1pcIiBmaWxsPVwiI2ZmZmZmZlwiLz5cbjwvc3ZnPlxuIiwiPHN2ZWx0ZTpvcHRpb25zIHRhZz1cIm55bGFzLWNvbnRhY3QtaW1hZ2VcIiAvPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBDb250YWN0QXZhdGFyU3RvcmUgfSBmcm9tIFwiQGNvbW1vbnNcIjtcbiAgaW1wb3J0IHsgYmVmb3JlVXBkYXRlIH0gZnJvbSBcInN2ZWx0ZS9pbnRlcm5hbFwiO1xuXG4gIGV4cG9ydCBsZXQgY29udGFjdDtcbiAgZXhwb3J0IGxldCBjb250YWN0X3F1ZXJ5O1xuICBleHBvcnQgbGV0IGhlaWdodCA9IFwiMzJweFwiO1xuICBleHBvcnQgbGV0IHdpZHRoID0gXCIzMnB4XCI7XG4gICQ6IGltYWdlID0gbnVsbDtcblxuICBiZWZvcmVVcGRhdGUoYXN5bmMgKCkgPT4ge1xuICAgIGlmIChjb250YWN0ICYmIGNvbnRhY3QucGljdHVyZV91cmwpIHtcbiAgICAgIGltYWdlID0gYXdhaXQgQ29udGFjdEF2YXRhclN0b3JlLmdldENvbnRhY3RBdmF0YXIoXG4gICAgICAgIGNvbnRhY3RfcXVlcnksXG4gICAgICAgIGNvbnRhY3QuaWQsXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbWFnZSA9IG51bGw7XG4gICAgfVxuICB9KTtcbjwvc2NyaXB0PlxuXG57I2lmIGltYWdlfVxuICA8aW1nXG4gICAgYWx0PVwiXCJcbiAgICBzdHlsZT1cImhlaWdodDoge2hlaWdodH07IHdpZHRoOiB7d2lkdGh9OyBib3JkZXItcmFkaXVzOiA1MCU7XCJcbiAgICBzcmM9XCJkYXRhOmltYWdlL2pwZztiYXNlNjQse2ltYWdlfVwiXG4gIC8+XG57OmVsc2UgaWYgY29udGFjdH1cbiAgPHAgc3R5bGU9XCJtYXJnaW46IDA7XCI+XG4gICAge2NvbnRhY3QuZ2l2ZW5fbmFtZSAmJiBjb250YWN0LnN1cm5hbWVcbiAgICAgID8gY29udGFjdC5naXZlbl9uYW1lLmNoYXJBdCgwKSArIGNvbnRhY3Quc3VybmFtZS5jaGFyQXQoMClcbiAgICAgIDogY29udGFjdC5uYW1lXG4gICAgICA/IGNvbnRhY3QubmFtZS5jaGFyQXQoMClcbiAgICAgIDogY29udGFjdC5lbWFpbFxuICAgICAgPyBjb250YWN0LmVtYWlsLmNoYXJBdCgwKVxuICAgICAgOiBcIj9cIn1cbiAgPC9wPlxuey9pZn1cbiIsImltcG9ydCB0eXBlIHsgRmlsZSB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuaW1wb3J0IHsgRGlzYWxsb3dlZENvbnRlbnRUeXBlcyB9IGZyb20gXCJAY29tbW9ucy9jb25zdGFudHMvYXR0YWNobWVudC1jb250ZW50LXR5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBpc0ZpbGVBbkF0dGFjaG1lbnQgPSAoZmlsZTogRmlsZSk6IGJvb2xlYW4gPT5cbiAgZmlsZS5jb250ZW50X2Rpc3Bvc2l0aW9uID09PSBcImF0dGFjaG1lbnRcIiAmJlxuICAhIWZpbGUuZmlsZW5hbWUgJiZcbiAgIURpc2FsbG93ZWRDb250ZW50VHlwZXMuaW5jbHVkZXMoZmlsZS5jb250ZW50X3R5cGUpO1xuIiwiLyohIEBsaWNlbnNlIERPTVB1cmlmeSAyLjMuNSB8IChjKSBDdXJlNTMgYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyB8IFJlbGVhc2VkIHVuZGVyIHRoZSBBcGFjaGUgbGljZW5zZSAyLjAgYW5kIE1vemlsbGEgUHVibGljIExpY2Vuc2UgMi4wIHwgZ2l0aHViLmNvbS9jdXJlNTMvRE9NUHVyaWZ5L2Jsb2IvMi4zLjUvTElDRU5TRSAqL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLkRPTVB1cmlmeSA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG4gIHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5oYXNPd25Qcm9wZXJ0eSxcbiAgICAgIHNldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mLFxuICAgICAgaXNGcm96ZW4gPSBPYmplY3QuaXNGcm96ZW4sXG4gICAgICBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gIHZhciBmcmVlemUgPSBPYmplY3QuZnJlZXplLFxuICAgICAgc2VhbCA9IE9iamVjdC5zZWFsLFxuICAgICAgY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXG5cbiAgdmFyIF9yZWYgPSB0eXBlb2YgUmVmbGVjdCAhPT0gJ3VuZGVmaW5lZCcgJiYgUmVmbGVjdCxcbiAgICAgIGFwcGx5ID0gX3JlZi5hcHBseSxcbiAgICAgIGNvbnN0cnVjdCA9IF9yZWYuY29uc3RydWN0O1xuXG4gIGlmICghYXBwbHkpIHtcbiAgICBhcHBseSA9IGZ1bmN0aW9uIGFwcGx5KGZ1biwgdGhpc1ZhbHVlLCBhcmdzKSB7XG4gICAgICByZXR1cm4gZnVuLmFwcGx5KHRoaXNWYWx1ZSwgYXJncyk7XG4gICAgfTtcbiAgfVxuXG4gIGlmICghZnJlZXplKSB7XG4gICAgZnJlZXplID0gZnVuY3Rpb24gZnJlZXplKHgpIHtcbiAgICAgIHJldHVybiB4O1xuICAgIH07XG4gIH1cblxuICBpZiAoIXNlYWwpIHtcbiAgICBzZWFsID0gZnVuY3Rpb24gc2VhbCh4KSB7XG4gICAgICByZXR1cm4geDtcbiAgICB9O1xuICB9XG5cbiAgaWYgKCFjb25zdHJ1Y3QpIHtcbiAgICBjb25zdHJ1Y3QgPSBmdW5jdGlvbiBjb25zdHJ1Y3QoRnVuYywgYXJncykge1xuICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoRnVuYywgW251bGxdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoYXJncykpKSkoKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIGFycmF5Rm9yRWFjaCA9IHVuYXBwbHkoQXJyYXkucHJvdG90eXBlLmZvckVhY2gpO1xuICB2YXIgYXJyYXlQb3AgPSB1bmFwcGx5KEFycmF5LnByb3RvdHlwZS5wb3ApO1xuICB2YXIgYXJyYXlQdXNoID0gdW5hcHBseShBcnJheS5wcm90b3R5cGUucHVzaCk7XG5cbiAgdmFyIHN0cmluZ1RvTG93ZXJDYXNlID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLnRvTG93ZXJDYXNlKTtcbiAgdmFyIHN0cmluZ01hdGNoID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLm1hdGNoKTtcbiAgdmFyIHN0cmluZ1JlcGxhY2UgPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUucmVwbGFjZSk7XG4gIHZhciBzdHJpbmdJbmRleE9mID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLmluZGV4T2YpO1xuICB2YXIgc3RyaW5nVHJpbSA9IHVuYXBwbHkoU3RyaW5nLnByb3RvdHlwZS50cmltKTtcblxuICB2YXIgcmVnRXhwVGVzdCA9IHVuYXBwbHkoUmVnRXhwLnByb3RvdHlwZS50ZXN0KTtcblxuICB2YXIgdHlwZUVycm9yQ3JlYXRlID0gdW5jb25zdHJ1Y3QoVHlwZUVycm9yKTtcblxuICBmdW5jdGlvbiB1bmFwcGx5KGZ1bmMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRoaXNBcmcpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFwcGx5KGZ1bmMsIHRoaXNBcmcsIGFyZ3MpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB1bmNvbnN0cnVjdChmdW5jKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnN0cnVjdChmdW5jLCBhcmdzKTtcbiAgICB9O1xuICB9XG5cbiAgLyogQWRkIHByb3BlcnRpZXMgdG8gYSBsb29rdXAgdGFibGUgKi9cbiAgZnVuY3Rpb24gYWRkVG9TZXQoc2V0LCBhcnJheSkge1xuICAgIGlmIChzZXRQcm90b3R5cGVPZikge1xuICAgICAgLy8gTWFrZSAnaW4nIGFuZCB0cnV0aHkgY2hlY2tzIGxpa2UgQm9vbGVhbihzZXQuY29uc3RydWN0b3IpXG4gICAgICAvLyBpbmRlcGVuZGVudCBvZiBhbnkgcHJvcGVydGllcyBkZWZpbmVkIG9uIE9iamVjdC5wcm90b3R5cGUuXG4gICAgICAvLyBQcmV2ZW50IHByb3RvdHlwZSBzZXR0ZXJzIGZyb20gaW50ZXJjZXB0aW5nIHNldCBhcyBhIHRoaXMgdmFsdWUuXG4gICAgICBzZXRQcm90b3R5cGVPZihzZXQsIG51bGwpO1xuICAgIH1cblxuICAgIHZhciBsID0gYXJyYXkubGVuZ3RoO1xuICAgIHdoaWxlIChsLS0pIHtcbiAgICAgIHZhciBlbGVtZW50ID0gYXJyYXlbbF07XG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciBsY0VsZW1lbnQgPSBzdHJpbmdUb0xvd2VyQ2FzZShlbGVtZW50KTtcbiAgICAgICAgaWYgKGxjRWxlbWVudCAhPT0gZWxlbWVudCkge1xuICAgICAgICAgIC8vIENvbmZpZyBwcmVzZXRzIChlLmcuIHRhZ3MuanMsIGF0dHJzLmpzKSBhcmUgaW1tdXRhYmxlLlxuICAgICAgICAgIGlmICghaXNGcm96ZW4oYXJyYXkpKSB7XG4gICAgICAgICAgICBhcnJheVtsXSA9IGxjRWxlbWVudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlbGVtZW50ID0gbGNFbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNldFtlbGVtZW50XSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNldDtcbiAgfVxuXG4gIC8qIFNoYWxsb3cgY2xvbmUgYW4gb2JqZWN0ICovXG4gIGZ1bmN0aW9uIGNsb25lKG9iamVjdCkge1xuICAgIHZhciBuZXdPYmplY3QgPSBjcmVhdGUobnVsbCk7XG5cbiAgICB2YXIgcHJvcGVydHkgPSB2b2lkIDA7XG4gICAgZm9yIChwcm9wZXJ0eSBpbiBvYmplY3QpIHtcbiAgICAgIGlmIChhcHBseShoYXNPd25Qcm9wZXJ0eSwgb2JqZWN0LCBbcHJvcGVydHldKSkge1xuICAgICAgICBuZXdPYmplY3RbcHJvcGVydHldID0gb2JqZWN0W3Byb3BlcnR5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3T2JqZWN0O1xuICB9XG5cbiAgLyogSUUxMCBkb2Vzbid0IHN1cHBvcnQgX19sb29rdXBHZXR0ZXJfXyBzbyBsZXRzJ1xuICAgKiBzaW11bGF0ZSBpdC4gSXQgYWxzbyBhdXRvbWF0aWNhbGx5IGNoZWNrc1xuICAgKiBpZiB0aGUgcHJvcCBpcyBmdW5jdGlvbiBvciBnZXR0ZXIgYW5kIGJlaGF2ZXNcbiAgICogYWNjb3JkaW5nbHkuICovXG4gIGZ1bmN0aW9uIGxvb2t1cEdldHRlcihvYmplY3QsIHByb3ApIHtcbiAgICB3aGlsZSAob2JqZWN0ICE9PSBudWxsKSB7XG4gICAgICB2YXIgZGVzYyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3ApO1xuICAgICAgaWYgKGRlc2MpIHtcbiAgICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHVuYXBwbHkoZGVzYy5nZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkZXNjLnZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIHVuYXBwbHkoZGVzYy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmYWxsYmFja1ZhbHVlKGVsZW1lbnQpIHtcbiAgICAgIGNvbnNvbGUud2FybignZmFsbGJhY2sgdmFsdWUgZm9yJywgZWxlbWVudCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsbGJhY2tWYWx1ZTtcbiAgfVxuXG4gIHZhciBodG1sID0gZnJlZXplKFsnYScsICdhYmJyJywgJ2Fjcm9ueW0nLCAnYWRkcmVzcycsICdhcmVhJywgJ2FydGljbGUnLCAnYXNpZGUnLCAnYXVkaW8nLCAnYicsICdiZGknLCAnYmRvJywgJ2JpZycsICdibGluaycsICdibG9ja3F1b3RlJywgJ2JvZHknLCAnYnInLCAnYnV0dG9uJywgJ2NhbnZhcycsICdjYXB0aW9uJywgJ2NlbnRlcicsICdjaXRlJywgJ2NvZGUnLCAnY29sJywgJ2NvbGdyb3VwJywgJ2NvbnRlbnQnLCAnZGF0YScsICdkYXRhbGlzdCcsICdkZCcsICdkZWNvcmF0b3InLCAnZGVsJywgJ2RldGFpbHMnLCAnZGZuJywgJ2RpYWxvZycsICdkaXInLCAnZGl2JywgJ2RsJywgJ2R0JywgJ2VsZW1lbnQnLCAnZW0nLCAnZmllbGRzZXQnLCAnZmlnY2FwdGlvbicsICdmaWd1cmUnLCAnZm9udCcsICdmb290ZXInLCAnZm9ybScsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdoZWFkJywgJ2hlYWRlcicsICdoZ3JvdXAnLCAnaHInLCAnaHRtbCcsICdpJywgJ2ltZycsICdpbnB1dCcsICdpbnMnLCAna2JkJywgJ2xhYmVsJywgJ2xlZ2VuZCcsICdsaScsICdtYWluJywgJ21hcCcsICdtYXJrJywgJ21hcnF1ZWUnLCAnbWVudScsICdtZW51aXRlbScsICdtZXRlcicsICduYXYnLCAnbm9icicsICdvbCcsICdvcHRncm91cCcsICdvcHRpb24nLCAnb3V0cHV0JywgJ3AnLCAncGljdHVyZScsICdwcmUnLCAncHJvZ3Jlc3MnLCAncScsICdycCcsICdydCcsICdydWJ5JywgJ3MnLCAnc2FtcCcsICdzZWN0aW9uJywgJ3NlbGVjdCcsICdzaGFkb3cnLCAnc21hbGwnLCAnc291cmNlJywgJ3NwYWNlcicsICdzcGFuJywgJ3N0cmlrZScsICdzdHJvbmcnLCAnc3R5bGUnLCAnc3ViJywgJ3N1bW1hcnknLCAnc3VwJywgJ3RhYmxlJywgJ3Rib2R5JywgJ3RkJywgJ3RlbXBsYXRlJywgJ3RleHRhcmVhJywgJ3Rmb290JywgJ3RoJywgJ3RoZWFkJywgJ3RpbWUnLCAndHInLCAndHJhY2snLCAndHQnLCAndScsICd1bCcsICd2YXInLCAndmlkZW8nLCAnd2JyJ10pO1xuXG4gIC8vIFNWR1xuICB2YXIgc3ZnID0gZnJlZXplKFsnc3ZnJywgJ2EnLCAnYWx0Z2x5cGgnLCAnYWx0Z2x5cGhkZWYnLCAnYWx0Z2x5cGhpdGVtJywgJ2FuaW1hdGVjb2xvcicsICdhbmltYXRlbW90aW9uJywgJ2FuaW1hdGV0cmFuc2Zvcm0nLCAnY2lyY2xlJywgJ2NsaXBwYXRoJywgJ2RlZnMnLCAnZGVzYycsICdlbGxpcHNlJywgJ2ZpbHRlcicsICdmb250JywgJ2cnLCAnZ2x5cGgnLCAnZ2x5cGhyZWYnLCAnaGtlcm4nLCAnaW1hZ2UnLCAnbGluZScsICdsaW5lYXJncmFkaWVudCcsICdtYXJrZXInLCAnbWFzaycsICdtZXRhZGF0YScsICdtcGF0aCcsICdwYXRoJywgJ3BhdHRlcm4nLCAncG9seWdvbicsICdwb2x5bGluZScsICdyYWRpYWxncmFkaWVudCcsICdyZWN0JywgJ3N0b3AnLCAnc3R5bGUnLCAnc3dpdGNoJywgJ3N5bWJvbCcsICd0ZXh0JywgJ3RleHRwYXRoJywgJ3RpdGxlJywgJ3RyZWYnLCAndHNwYW4nLCAndmlldycsICd2a2VybiddKTtcblxuICB2YXIgc3ZnRmlsdGVycyA9IGZyZWV6ZShbJ2ZlQmxlbmQnLCAnZmVDb2xvck1hdHJpeCcsICdmZUNvbXBvbmVudFRyYW5zZmVyJywgJ2ZlQ29tcG9zaXRlJywgJ2ZlQ29udm9sdmVNYXRyaXgnLCAnZmVEaWZmdXNlTGlnaHRpbmcnLCAnZmVEaXNwbGFjZW1lbnRNYXAnLCAnZmVEaXN0YW50TGlnaHQnLCAnZmVGbG9vZCcsICdmZUZ1bmNBJywgJ2ZlRnVuY0InLCAnZmVGdW5jRycsICdmZUZ1bmNSJywgJ2ZlR2F1c3NpYW5CbHVyJywgJ2ZlSW1hZ2UnLCAnZmVNZXJnZScsICdmZU1lcmdlTm9kZScsICdmZU1vcnBob2xvZ3knLCAnZmVPZmZzZXQnLCAnZmVQb2ludExpZ2h0JywgJ2ZlU3BlY3VsYXJMaWdodGluZycsICdmZVNwb3RMaWdodCcsICdmZVRpbGUnLCAnZmVUdXJidWxlbmNlJ10pO1xuXG4gIC8vIExpc3Qgb2YgU1ZHIGVsZW1lbnRzIHRoYXQgYXJlIGRpc2FsbG93ZWQgYnkgZGVmYXVsdC5cbiAgLy8gV2Ugc3RpbGwgbmVlZCB0byBrbm93IHRoZW0gc28gdGhhdCB3ZSBjYW4gZG8gbmFtZXNwYWNlXG4gIC8vIGNoZWNrcyBwcm9wZXJseSBpbiBjYXNlIG9uZSB3YW50cyB0byBhZGQgdGhlbSB0b1xuICAvLyBhbGxvdy1saXN0LlxuICB2YXIgc3ZnRGlzYWxsb3dlZCA9IGZyZWV6ZShbJ2FuaW1hdGUnLCAnY29sb3ItcHJvZmlsZScsICdjdXJzb3InLCAnZGlzY2FyZCcsICdmZWRyb3BzaGFkb3cnLCAnZm9udC1mYWNlJywgJ2ZvbnQtZmFjZS1mb3JtYXQnLCAnZm9udC1mYWNlLW5hbWUnLCAnZm9udC1mYWNlLXNyYycsICdmb250LWZhY2UtdXJpJywgJ2ZvcmVpZ25vYmplY3QnLCAnaGF0Y2gnLCAnaGF0Y2hwYXRoJywgJ21lc2gnLCAnbWVzaGdyYWRpZW50JywgJ21lc2hwYXRjaCcsICdtZXNocm93JywgJ21pc3NpbmctZ2x5cGgnLCAnc2NyaXB0JywgJ3NldCcsICdzb2xpZGNvbG9yJywgJ3Vua25vd24nLCAndXNlJ10pO1xuXG4gIHZhciBtYXRoTWwgPSBmcmVlemUoWydtYXRoJywgJ21lbmNsb3NlJywgJ21lcnJvcicsICdtZmVuY2VkJywgJ21mcmFjJywgJ21nbHlwaCcsICdtaScsICdtbGFiZWxlZHRyJywgJ21tdWx0aXNjcmlwdHMnLCAnbW4nLCAnbW8nLCAnbW92ZXInLCAnbXBhZGRlZCcsICdtcGhhbnRvbScsICdtcm9vdCcsICdtcm93JywgJ21zJywgJ21zcGFjZScsICdtc3FydCcsICdtc3R5bGUnLCAnbXN1YicsICdtc3VwJywgJ21zdWJzdXAnLCAnbXRhYmxlJywgJ210ZCcsICdtdGV4dCcsICdtdHInLCAnbXVuZGVyJywgJ211bmRlcm92ZXInXSk7XG5cbiAgLy8gU2ltaWxhcmx5IHRvIFNWRywgd2Ugd2FudCB0byBrbm93IGFsbCBNYXRoTUwgZWxlbWVudHMsXG4gIC8vIGV2ZW4gdGhvc2UgdGhhdCB3ZSBkaXNhbGxvdyBieSBkZWZhdWx0LlxuICB2YXIgbWF0aE1sRGlzYWxsb3dlZCA9IGZyZWV6ZShbJ21hY3Rpb24nLCAnbWFsaWduZ3JvdXAnLCAnbWFsaWdubWFyaycsICdtbG9uZ2RpdicsICdtc2NhcnJpZXMnLCAnbXNjYXJyeScsICdtc2dyb3VwJywgJ21zdGFjaycsICdtc2xpbmUnLCAnbXNyb3cnLCAnc2VtYW50aWNzJywgJ2Fubm90YXRpb24nLCAnYW5ub3RhdGlvbi14bWwnLCAnbXByZXNjcmlwdHMnLCAnbm9uZSddKTtcblxuICB2YXIgdGV4dCA9IGZyZWV6ZShbJyN0ZXh0J10pO1xuXG4gIHZhciBodG1sJDEgPSBmcmVlemUoWydhY2NlcHQnLCAnYWN0aW9uJywgJ2FsaWduJywgJ2FsdCcsICdhdXRvY2FwaXRhbGl6ZScsICdhdXRvY29tcGxldGUnLCAnYXV0b3BpY3R1cmVpbnBpY3R1cmUnLCAnYXV0b3BsYXknLCAnYmFja2dyb3VuZCcsICdiZ2NvbG9yJywgJ2JvcmRlcicsICdjYXB0dXJlJywgJ2NlbGxwYWRkaW5nJywgJ2NlbGxzcGFjaW5nJywgJ2NoZWNrZWQnLCAnY2l0ZScsICdjbGFzcycsICdjbGVhcicsICdjb2xvcicsICdjb2xzJywgJ2NvbHNwYW4nLCAnY29udHJvbHMnLCAnY29udHJvbHNsaXN0JywgJ2Nvb3JkcycsICdjcm9zc29yaWdpbicsICdkYXRldGltZScsICdkZWNvZGluZycsICdkZWZhdWx0JywgJ2RpcicsICdkaXNhYmxlZCcsICdkaXNhYmxlcGljdHVyZWlucGljdHVyZScsICdkaXNhYmxlcmVtb3RlcGxheWJhY2snLCAnZG93bmxvYWQnLCAnZHJhZ2dhYmxlJywgJ2VuY3R5cGUnLCAnZW50ZXJrZXloaW50JywgJ2ZhY2UnLCAnZm9yJywgJ2hlYWRlcnMnLCAnaGVpZ2h0JywgJ2hpZGRlbicsICdoaWdoJywgJ2hyZWYnLCAnaHJlZmxhbmcnLCAnaWQnLCAnaW5wdXRtb2RlJywgJ2ludGVncml0eScsICdpc21hcCcsICdraW5kJywgJ2xhYmVsJywgJ2xhbmcnLCAnbGlzdCcsICdsb2FkaW5nJywgJ2xvb3AnLCAnbG93JywgJ21heCcsICdtYXhsZW5ndGgnLCAnbWVkaWEnLCAnbWV0aG9kJywgJ21pbicsICdtaW5sZW5ndGgnLCAnbXVsdGlwbGUnLCAnbXV0ZWQnLCAnbmFtZScsICdub25jZScsICdub3NoYWRlJywgJ25vdmFsaWRhdGUnLCAnbm93cmFwJywgJ29wZW4nLCAnb3B0aW11bScsICdwYXR0ZXJuJywgJ3BsYWNlaG9sZGVyJywgJ3BsYXlzaW5saW5lJywgJ3Bvc3RlcicsICdwcmVsb2FkJywgJ3B1YmRhdGUnLCAncmFkaW9ncm91cCcsICdyZWFkb25seScsICdyZWwnLCAncmVxdWlyZWQnLCAncmV2JywgJ3JldmVyc2VkJywgJ3JvbGUnLCAncm93cycsICdyb3dzcGFuJywgJ3NwZWxsY2hlY2snLCAnc2NvcGUnLCAnc2VsZWN0ZWQnLCAnc2hhcGUnLCAnc2l6ZScsICdzaXplcycsICdzcGFuJywgJ3NyY2xhbmcnLCAnc3RhcnQnLCAnc3JjJywgJ3NyY3NldCcsICdzdGVwJywgJ3N0eWxlJywgJ3N1bW1hcnknLCAndGFiaW5kZXgnLCAndGl0bGUnLCAndHJhbnNsYXRlJywgJ3R5cGUnLCAndXNlbWFwJywgJ3ZhbGlnbicsICd2YWx1ZScsICd3aWR0aCcsICd4bWxucycsICdzbG90J10pO1xuXG4gIHZhciBzdmckMSA9IGZyZWV6ZShbJ2FjY2VudC1oZWlnaHQnLCAnYWNjdW11bGF0ZScsICdhZGRpdGl2ZScsICdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnYXNjZW50JywgJ2F0dHJpYnV0ZW5hbWUnLCAnYXR0cmlidXRldHlwZScsICdhemltdXRoJywgJ2Jhc2VmcmVxdWVuY3knLCAnYmFzZWxpbmUtc2hpZnQnLCAnYmVnaW4nLCAnYmlhcycsICdieScsICdjbGFzcycsICdjbGlwJywgJ2NsaXBwYXRodW5pdHMnLCAnY2xpcC1wYXRoJywgJ2NsaXAtcnVsZScsICdjb2xvcicsICdjb2xvci1pbnRlcnBvbGF0aW9uJywgJ2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVycycsICdjb2xvci1wcm9maWxlJywgJ2NvbG9yLXJlbmRlcmluZycsICdjeCcsICdjeScsICdkJywgJ2R4JywgJ2R5JywgJ2RpZmZ1c2Vjb25zdGFudCcsICdkaXJlY3Rpb24nLCAnZGlzcGxheScsICdkaXZpc29yJywgJ2R1cicsICdlZGdlbW9kZScsICdlbGV2YXRpb24nLCAnZW5kJywgJ2ZpbGwnLCAnZmlsbC1vcGFjaXR5JywgJ2ZpbGwtcnVsZScsICdmaWx0ZXInLCAnZmlsdGVydW5pdHMnLCAnZmxvb2QtY29sb3InLCAnZmxvb2Qtb3BhY2l0eScsICdmb250LWZhbWlseScsICdmb250LXNpemUnLCAnZm9udC1zaXplLWFkanVzdCcsICdmb250LXN0cmV0Y2gnLCAnZm9udC1zdHlsZScsICdmb250LXZhcmlhbnQnLCAnZm9udC13ZWlnaHQnLCAnZngnLCAnZnknLCAnZzEnLCAnZzInLCAnZ2x5cGgtbmFtZScsICdnbHlwaHJlZicsICdncmFkaWVudHVuaXRzJywgJ2dyYWRpZW50dHJhbnNmb3JtJywgJ2hlaWdodCcsICdocmVmJywgJ2lkJywgJ2ltYWdlLXJlbmRlcmluZycsICdpbicsICdpbjInLCAnaycsICdrMScsICdrMicsICdrMycsICdrNCcsICdrZXJuaW5nJywgJ2tleXBvaW50cycsICdrZXlzcGxpbmVzJywgJ2tleXRpbWVzJywgJ2xhbmcnLCAnbGVuZ3RoYWRqdXN0JywgJ2xldHRlci1zcGFjaW5nJywgJ2tlcm5lbG1hdHJpeCcsICdrZXJuZWx1bml0bGVuZ3RoJywgJ2xpZ2h0aW5nLWNvbG9yJywgJ2xvY2FsJywgJ21hcmtlci1lbmQnLCAnbWFya2VyLW1pZCcsICdtYXJrZXItc3RhcnQnLCAnbWFya2VyaGVpZ2h0JywgJ21hcmtlcnVuaXRzJywgJ21hcmtlcndpZHRoJywgJ21hc2tjb250ZW50dW5pdHMnLCAnbWFza3VuaXRzJywgJ21heCcsICdtYXNrJywgJ21lZGlhJywgJ21ldGhvZCcsICdtb2RlJywgJ21pbicsICduYW1lJywgJ251bW9jdGF2ZXMnLCAnb2Zmc2V0JywgJ29wZXJhdG9yJywgJ29wYWNpdHknLCAnb3JkZXInLCAnb3JpZW50JywgJ29yaWVudGF0aW9uJywgJ29yaWdpbicsICdvdmVyZmxvdycsICdwYWludC1vcmRlcicsICdwYXRoJywgJ3BhdGhsZW5ndGgnLCAncGF0dGVybmNvbnRlbnR1bml0cycsICdwYXR0ZXJudHJhbnNmb3JtJywgJ3BhdHRlcm51bml0cycsICdwb2ludHMnLCAncHJlc2VydmVhbHBoYScsICdwcmVzZXJ2ZWFzcGVjdHJhdGlvJywgJ3ByaW1pdGl2ZXVuaXRzJywgJ3InLCAncngnLCAncnknLCAncmFkaXVzJywgJ3JlZngnLCAncmVmeScsICdyZXBlYXRjb3VudCcsICdyZXBlYXRkdXInLCAncmVzdGFydCcsICdyZXN1bHQnLCAncm90YXRlJywgJ3NjYWxlJywgJ3NlZWQnLCAnc2hhcGUtcmVuZGVyaW5nJywgJ3NwZWN1bGFyY29uc3RhbnQnLCAnc3BlY3VsYXJleHBvbmVudCcsICdzcHJlYWRtZXRob2QnLCAnc3RhcnRvZmZzZXQnLCAnc3RkZGV2aWF0aW9uJywgJ3N0aXRjaHRpbGVzJywgJ3N0b3AtY29sb3InLCAnc3RvcC1vcGFjaXR5JywgJ3N0cm9rZS1kYXNoYXJyYXknLCAnc3Ryb2tlLWRhc2hvZmZzZXQnLCAnc3Ryb2tlLWxpbmVjYXAnLCAnc3Ryb2tlLWxpbmVqb2luJywgJ3N0cm9rZS1taXRlcmxpbWl0JywgJ3N0cm9rZS1vcGFjaXR5JywgJ3N0cm9rZScsICdzdHJva2Utd2lkdGgnLCAnc3R5bGUnLCAnc3VyZmFjZXNjYWxlJywgJ3N5c3RlbWxhbmd1YWdlJywgJ3RhYmluZGV4JywgJ3RhcmdldHgnLCAndGFyZ2V0eScsICd0cmFuc2Zvcm0nLCAndHJhbnNmb3JtLW9yaWdpbicsICd0ZXh0LWFuY2hvcicsICd0ZXh0LWRlY29yYXRpb24nLCAndGV4dC1yZW5kZXJpbmcnLCAndGV4dGxlbmd0aCcsICd0eXBlJywgJ3UxJywgJ3UyJywgJ3VuaWNvZGUnLCAndmFsdWVzJywgJ3ZpZXdib3gnLCAndmlzaWJpbGl0eScsICd2ZXJzaW9uJywgJ3ZlcnQtYWR2LXknLCAndmVydC1vcmlnaW4teCcsICd2ZXJ0LW9yaWdpbi15JywgJ3dpZHRoJywgJ3dvcmQtc3BhY2luZycsICd3cmFwJywgJ3dyaXRpbmctbW9kZScsICd4Y2hhbm5lbHNlbGVjdG9yJywgJ3ljaGFubmVsc2VsZWN0b3InLCAneCcsICd4MScsICd4MicsICd4bWxucycsICd5JywgJ3kxJywgJ3kyJywgJ3onLCAnem9vbWFuZHBhbiddKTtcblxuICB2YXIgbWF0aE1sJDEgPSBmcmVlemUoWydhY2NlbnQnLCAnYWNjZW50dW5kZXInLCAnYWxpZ24nLCAnYmV2ZWxsZWQnLCAnY2xvc2UnLCAnY29sdW1uc2FsaWduJywgJ2NvbHVtbmxpbmVzJywgJ2NvbHVtbnNwYW4nLCAnZGVub21hbGlnbicsICdkZXB0aCcsICdkaXInLCAnZGlzcGxheScsICdkaXNwbGF5c3R5bGUnLCAnZW5jb2RpbmcnLCAnZmVuY2UnLCAnZnJhbWUnLCAnaGVpZ2h0JywgJ2hyZWYnLCAnaWQnLCAnbGFyZ2VvcCcsICdsZW5ndGgnLCAnbGluZXRoaWNrbmVzcycsICdsc3BhY2UnLCAnbHF1b3RlJywgJ21hdGhiYWNrZ3JvdW5kJywgJ21hdGhjb2xvcicsICdtYXRoc2l6ZScsICdtYXRodmFyaWFudCcsICdtYXhzaXplJywgJ21pbnNpemUnLCAnbW92YWJsZWxpbWl0cycsICdub3RhdGlvbicsICdudW1hbGlnbicsICdvcGVuJywgJ3Jvd2FsaWduJywgJ3Jvd2xpbmVzJywgJ3Jvd3NwYWNpbmcnLCAncm93c3BhbicsICdyc3BhY2UnLCAncnF1b3RlJywgJ3NjcmlwdGxldmVsJywgJ3NjcmlwdG1pbnNpemUnLCAnc2NyaXB0c2l6ZW11bHRpcGxpZXInLCAnc2VsZWN0aW9uJywgJ3NlcGFyYXRvcicsICdzZXBhcmF0b3JzJywgJ3N0cmV0Y2h5JywgJ3N1YnNjcmlwdHNoaWZ0JywgJ3N1cHNjcmlwdHNoaWZ0JywgJ3N5bW1ldHJpYycsICd2b2Zmc2V0JywgJ3dpZHRoJywgJ3htbG5zJ10pO1xuXG4gIHZhciB4bWwgPSBmcmVlemUoWyd4bGluazpocmVmJywgJ3htbDppZCcsICd4bGluazp0aXRsZScsICd4bWw6c3BhY2UnLCAneG1sbnM6eGxpbmsnXSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vYmV0dGVyLXJlZ2V4XG4gIHZhciBNVVNUQUNIRV9FWFBSID0gc2VhbCgvXFx7XFx7W1xcc1xcU10qfFtcXHNcXFNdKlxcfVxcfS9nbSk7IC8vIFNwZWNpZnkgdGVtcGxhdGUgZGV0ZWN0aW9uIHJlZ2V4IGZvciBTQUZFX0ZPUl9URU1QTEFURVMgbW9kZVxuICB2YXIgRVJCX0VYUFIgPSBzZWFsKC88JVtcXHNcXFNdKnxbXFxzXFxTXSolPi9nbSk7XG4gIHZhciBEQVRBX0FUVFIgPSBzZWFsKC9eZGF0YS1bXFwtXFx3LlxcdTAwQjctXFx1RkZGRl0vKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICB2YXIgQVJJQV9BVFRSID0gc2VhbCgvXmFyaWEtW1xcLVxcd10rJC8pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4gIHZhciBJU19BTExPV0VEX1VSSSA9IHNlYWwoL14oPzooPzooPzpmfGh0KXRwcz98bWFpbHRvfHRlbHxjYWxsdG98Y2lkfHhtcHApOnxbXmEtel18W2EteisuXFwtXSsoPzpbXmEteisuXFwtOl18JCkpL2kgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICApO1xuICB2YXIgSVNfU0NSSVBUX09SX0RBVEEgPSBzZWFsKC9eKD86XFx3K3NjcmlwdHxkYXRhKTovaSk7XG4gIHZhciBBVFRSX1dISVRFU1BBQ0UgPSBzZWFsKC9bXFx1MDAwMC1cXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUxODBFXFx1MjAwMC1cXHUyMDI5XFx1MjA1RlxcdTMwMDBdL2cgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb250cm9sLXJlZ2V4XG4gICk7XG5cbiAgdmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG4gIGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheSQxKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbiAgdmFyIGdldEdsb2JhbCA9IGZ1bmN0aW9uIGdldEdsb2JhbCgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogd2luZG93O1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbm8tb3AgcG9saWN5IGZvciBpbnRlcm5hbCB1c2Ugb25seS5cbiAgICogRG9uJ3QgZXhwb3J0IHRoaXMgZnVuY3Rpb24gb3V0c2lkZSB0aGlzIG1vZHVsZSFcbiAgICogQHBhcmFtIHs/VHJ1c3RlZFR5cGVQb2xpY3lGYWN0b3J5fSB0cnVzdGVkVHlwZXMgVGhlIHBvbGljeSBmYWN0b3J5LlxuICAgKiBAcGFyYW0ge0RvY3VtZW50fSBkb2N1bWVudCBUaGUgZG9jdW1lbnQgb2JqZWN0ICh0byBkZXRlcm1pbmUgcG9saWN5IG5hbWUgc3VmZml4KVxuICAgKiBAcmV0dXJuIHs/VHJ1c3RlZFR5cGVQb2xpY3l9IFRoZSBwb2xpY3kgY3JlYXRlZCAob3IgbnVsbCwgaWYgVHJ1c3RlZCBUeXBlc1xuICAgKiBhcmUgbm90IHN1cHBvcnRlZCkuXG4gICAqL1xuICB2YXIgX2NyZWF0ZVRydXN0ZWRUeXBlc1BvbGljeSA9IGZ1bmN0aW9uIF9jcmVhdGVUcnVzdGVkVHlwZXNQb2xpY3kodHJ1c3RlZFR5cGVzLCBkb2N1bWVudCkge1xuICAgIGlmICgodHlwZW9mIHRydXN0ZWRUeXBlcyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodHJ1c3RlZFR5cGVzKSkgIT09ICdvYmplY3QnIHx8IHR5cGVvZiB0cnVzdGVkVHlwZXMuY3JlYXRlUG9saWN5ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBBbGxvdyB0aGUgY2FsbGVycyB0byBjb250cm9sIHRoZSB1bmlxdWUgcG9saWN5IG5hbWVcbiAgICAvLyBieSBhZGRpbmcgYSBkYXRhLXR0LXBvbGljeS1zdWZmaXggdG8gdGhlIHNjcmlwdCBlbGVtZW50IHdpdGggdGhlIERPTVB1cmlmeS5cbiAgICAvLyBQb2xpY3kgY3JlYXRpb24gd2l0aCBkdXBsaWNhdGUgbmFtZXMgdGhyb3dzIGluIFRydXN0ZWQgVHlwZXMuXG4gICAgdmFyIHN1ZmZpeCA9IG51bGw7XG4gICAgdmFyIEFUVFJfTkFNRSA9ICdkYXRhLXR0LXBvbGljeS1zdWZmaXgnO1xuICAgIGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuaGFzQXR0cmlidXRlKEFUVFJfTkFNRSkpIHtcbiAgICAgIHN1ZmZpeCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuZ2V0QXR0cmlidXRlKEFUVFJfTkFNRSk7XG4gICAgfVxuXG4gICAgdmFyIHBvbGljeU5hbWUgPSAnZG9tcHVyaWZ5JyArIChzdWZmaXggPyAnIycgKyBzdWZmaXggOiAnJyk7XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3kocG9saWN5TmFtZSwge1xuICAgICAgICBjcmVhdGVIVE1MOiBmdW5jdGlvbiBjcmVhdGVIVE1MKGh0bWwkJDEpIHtcbiAgICAgICAgICByZXR1cm4gaHRtbCQkMTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgLy8gUG9saWN5IGNyZWF0aW9uIGZhaWxlZCAobW9zdCBsaWtlbHkgYW5vdGhlciBET01QdXJpZnkgc2NyaXB0IGhhc1xuICAgICAgLy8gYWxyZWFkeSBydW4pLiBTa2lwIGNyZWF0aW5nIHRoZSBwb2xpY3ksIGFzIHRoaXMgd2lsbCBvbmx5IGNhdXNlIGVycm9yc1xuICAgICAgLy8gaWYgVFQgYXJlIGVuZm9yY2VkLlxuICAgICAgY29uc29sZS53YXJuKCdUcnVzdGVkVHlwZXMgcG9saWN5ICcgKyBwb2xpY3lOYW1lICsgJyBjb3VsZCBub3QgYmUgY3JlYXRlZC4nKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVET01QdXJpZnkoKSB7XG4gICAgdmFyIHdpbmRvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZ2V0R2xvYmFsKCk7XG5cbiAgICB2YXIgRE9NUHVyaWZ5ID0gZnVuY3Rpb24gRE9NUHVyaWZ5KHJvb3QpIHtcbiAgICAgIHJldHVybiBjcmVhdGVET01QdXJpZnkocm9vdCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFZlcnNpb24gbGFiZWwsIGV4cG9zZWQgZm9yIGVhc2llciBjaGVja3NcbiAgICAgKiBpZiBET01QdXJpZnkgaXMgdXAgdG8gZGF0ZSBvciBub3RcbiAgICAgKi9cbiAgICBET01QdXJpZnkudmVyc2lvbiA9ICcyLjMuNSc7XG5cbiAgICAvKipcbiAgICAgKiBBcnJheSBvZiBlbGVtZW50cyB0aGF0IERPTVB1cmlmeSByZW1vdmVkIGR1cmluZyBzYW5pdGF0aW9uLlxuICAgICAqIEVtcHR5IGlmIG5vdGhpbmcgd2FzIHJlbW92ZWQuXG4gICAgICovXG4gICAgRE9NUHVyaWZ5LnJlbW92ZWQgPSBbXTtcblxuICAgIGlmICghd2luZG93IHx8ICF3aW5kb3cuZG9jdW1lbnQgfHwgd2luZG93LmRvY3VtZW50Lm5vZGVUeXBlICE9PSA5KSB7XG4gICAgICAvLyBOb3QgcnVubmluZyBpbiBhIGJyb3dzZXIsIHByb3ZpZGUgYSBmYWN0b3J5IGZ1bmN0aW9uXG4gICAgICAvLyBzbyB0aGF0IHlvdSBjYW4gcGFzcyB5b3VyIG93biBXaW5kb3dcbiAgICAgIERPTVB1cmlmeS5pc1N1cHBvcnRlZCA9IGZhbHNlO1xuXG4gICAgICByZXR1cm4gRE9NUHVyaWZ5O1xuICAgIH1cblxuICAgIHZhciBvcmlnaW5hbERvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuXG4gICAgdmFyIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuICAgIHZhciBEb2N1bWVudEZyYWdtZW50ID0gd2luZG93LkRvY3VtZW50RnJhZ21lbnQsXG4gICAgICAgIEhUTUxUZW1wbGF0ZUVsZW1lbnQgPSB3aW5kb3cuSFRNTFRlbXBsYXRlRWxlbWVudCxcbiAgICAgICAgTm9kZSA9IHdpbmRvdy5Ob2RlLFxuICAgICAgICBFbGVtZW50ID0gd2luZG93LkVsZW1lbnQsXG4gICAgICAgIE5vZGVGaWx0ZXIgPSB3aW5kb3cuTm9kZUZpbHRlcixcbiAgICAgICAgX3dpbmRvdyROYW1lZE5vZGVNYXAgPSB3aW5kb3cuTmFtZWROb2RlTWFwLFxuICAgICAgICBOYW1lZE5vZGVNYXAgPSBfd2luZG93JE5hbWVkTm9kZU1hcCA9PT0gdW5kZWZpbmVkID8gd2luZG93Lk5hbWVkTm9kZU1hcCB8fCB3aW5kb3cuTW96TmFtZWRBdHRyTWFwIDogX3dpbmRvdyROYW1lZE5vZGVNYXAsXG4gICAgICAgIEhUTUxGb3JtRWxlbWVudCA9IHdpbmRvdy5IVE1MRm9ybUVsZW1lbnQsXG4gICAgICAgIERPTVBhcnNlciA9IHdpbmRvdy5ET01QYXJzZXIsXG4gICAgICAgIHRydXN0ZWRUeXBlcyA9IHdpbmRvdy50cnVzdGVkVHlwZXM7XG5cblxuICAgIHZhciBFbGVtZW50UHJvdG90eXBlID0gRWxlbWVudC5wcm90b3R5cGU7XG5cbiAgICB2YXIgY2xvbmVOb2RlID0gbG9va3VwR2V0dGVyKEVsZW1lbnRQcm90b3R5cGUsICdjbG9uZU5vZGUnKTtcbiAgICB2YXIgZ2V0TmV4dFNpYmxpbmcgPSBsb29rdXBHZXR0ZXIoRWxlbWVudFByb3RvdHlwZSwgJ25leHRTaWJsaW5nJyk7XG4gICAgdmFyIGdldENoaWxkTm9kZXMgPSBsb29rdXBHZXR0ZXIoRWxlbWVudFByb3RvdHlwZSwgJ2NoaWxkTm9kZXMnKTtcbiAgICB2YXIgZ2V0UGFyZW50Tm9kZSA9IGxvb2t1cEdldHRlcihFbGVtZW50UHJvdG90eXBlLCAncGFyZW50Tm9kZScpO1xuXG4gICAgLy8gQXMgcGVyIGlzc3VlICM0NywgdGhlIHdlYi1jb21wb25lbnRzIHJlZ2lzdHJ5IGlzIGluaGVyaXRlZCBieSBhXG4gICAgLy8gbmV3IGRvY3VtZW50IGNyZWF0ZWQgdmlhIGNyZWF0ZUhUTUxEb2N1bWVudC4gQXMgcGVyIHRoZSBzcGVjXG4gICAgLy8gKGh0dHA6Ly93M2MuZ2l0aHViLmlvL3dlYmNvbXBvbmVudHMvc3BlYy9jdXN0b20vI2NyZWF0aW5nLWFuZC1wYXNzaW5nLXJlZ2lzdHJpZXMpXG4gICAgLy8gYSBuZXcgZW1wdHkgcmVnaXN0cnkgaXMgdXNlZCB3aGVuIGNyZWF0aW5nIGEgdGVtcGxhdGUgY29udGVudHMgb3duZXJcbiAgICAvLyBkb2N1bWVudCwgc28gd2UgdXNlIHRoYXQgYXMgb3VyIHBhcmVudCBkb2N1bWVudCB0byBlbnN1cmUgbm90aGluZ1xuICAgIC8vIGlzIGluaGVyaXRlZC5cbiAgICBpZiAodHlwZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgICBpZiAodGVtcGxhdGUuY29udGVudCAmJiB0ZW1wbGF0ZS5jb250ZW50Lm93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgZG9jdW1lbnQgPSB0ZW1wbGF0ZS5jb250ZW50Lm93bmVyRG9jdW1lbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHRydXN0ZWRUeXBlc1BvbGljeSA9IF9jcmVhdGVUcnVzdGVkVHlwZXNQb2xpY3kodHJ1c3RlZFR5cGVzLCBvcmlnaW5hbERvY3VtZW50KTtcbiAgICB2YXIgZW1wdHlIVE1MID0gdHJ1c3RlZFR5cGVzUG9saWN5ID8gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwoJycpIDogJyc7XG5cbiAgICB2YXIgX2RvY3VtZW50ID0gZG9jdW1lbnQsXG4gICAgICAgIGltcGxlbWVudGF0aW9uID0gX2RvY3VtZW50LmltcGxlbWVudGF0aW9uLFxuICAgICAgICBjcmVhdGVOb2RlSXRlcmF0b3IgPSBfZG9jdW1lbnQuY3JlYXRlTm9kZUl0ZXJhdG9yLFxuICAgICAgICBjcmVhdGVEb2N1bWVudEZyYWdtZW50ID0gX2RvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQsXG4gICAgICAgIGdldEVsZW1lbnRzQnlUYWdOYW1lID0gX2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lO1xuICAgIHZhciBpbXBvcnROb2RlID0gb3JpZ2luYWxEb2N1bWVudC5pbXBvcnROb2RlO1xuXG5cbiAgICB2YXIgZG9jdW1lbnRNb2RlID0ge307XG4gICAgdHJ5IHtcbiAgICAgIGRvY3VtZW50TW9kZSA9IGNsb25lKGRvY3VtZW50KS5kb2N1bWVudE1vZGUgPyBkb2N1bWVudC5kb2N1bWVudE1vZGUgOiB7fTtcbiAgICB9IGNhdGNoIChfKSB7fVxuXG4gICAgdmFyIGhvb2tzID0ge307XG5cbiAgICAvKipcbiAgICAgKiBFeHBvc2Ugd2hldGhlciB0aGlzIGJyb3dzZXIgc3VwcG9ydHMgcnVubmluZyB0aGUgZnVsbCBET01QdXJpZnkuXG4gICAgICovXG4gICAgRE9NUHVyaWZ5LmlzU3VwcG9ydGVkID0gdHlwZW9mIGdldFBhcmVudE5vZGUgPT09ICdmdW5jdGlvbicgJiYgaW1wbGVtZW50YXRpb24gJiYgdHlwZW9mIGltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnRNb2RlICE9PSA5O1xuXG4gICAgdmFyIE1VU1RBQ0hFX0VYUFIkJDEgPSBNVVNUQUNIRV9FWFBSLFxuICAgICAgICBFUkJfRVhQUiQkMSA9IEVSQl9FWFBSLFxuICAgICAgICBEQVRBX0FUVFIkJDEgPSBEQVRBX0FUVFIsXG4gICAgICAgIEFSSUFfQVRUUiQkMSA9IEFSSUFfQVRUUixcbiAgICAgICAgSVNfU0NSSVBUX09SX0RBVEEkJDEgPSBJU19TQ1JJUFRfT1JfREFUQSxcbiAgICAgICAgQVRUUl9XSElURVNQQUNFJCQxID0gQVRUUl9XSElURVNQQUNFO1xuICAgIHZhciBJU19BTExPV0VEX1VSSSQkMSA9IElTX0FMTE9XRURfVVJJO1xuXG4gICAgLyoqXG4gICAgICogV2UgY29uc2lkZXIgdGhlIGVsZW1lbnRzIGFuZCBhdHRyaWJ1dGVzIGJlbG93IHRvIGJlIHNhZmUuIElkZWFsbHlcbiAgICAgKiBkb24ndCBhZGQgYW55IG5ldyBvbmVzIGJ1dCBmZWVsIGZyZWUgdG8gcmVtb3ZlIHVud2FudGVkIG9uZXMuXG4gICAgICovXG5cbiAgICAvKiBhbGxvd2VkIGVsZW1lbnQgbmFtZXMgKi9cblxuICAgIHZhciBBTExPV0VEX1RBR1MgPSBudWxsO1xuICAgIHZhciBERUZBVUxUX0FMTE9XRURfVEFHUyA9IGFkZFRvU2V0KHt9LCBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5JDEoaHRtbCksIF90b0NvbnN1bWFibGVBcnJheSQxKHN2ZyksIF90b0NvbnN1bWFibGVBcnJheSQxKHN2Z0ZpbHRlcnMpLCBfdG9Db25zdW1hYmxlQXJyYXkkMShtYXRoTWwpLCBfdG9Db25zdW1hYmxlQXJyYXkkMSh0ZXh0KSkpO1xuXG4gICAgLyogQWxsb3dlZCBhdHRyaWJ1dGUgbmFtZXMgKi9cbiAgICB2YXIgQUxMT1dFRF9BVFRSID0gbnVsbDtcbiAgICB2YXIgREVGQVVMVF9BTExPV0VEX0FUVFIgPSBhZGRUb1NldCh7fSwgW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheSQxKGh0bWwkMSksIF90b0NvbnN1bWFibGVBcnJheSQxKHN2ZyQxKSwgX3RvQ29uc3VtYWJsZUFycmF5JDEobWF0aE1sJDEpLCBfdG9Db25zdW1hYmxlQXJyYXkkMSh4bWwpKSk7XG5cbiAgICAvKlxuICAgICAqIENvbmZpZ3VyZSBob3cgRE9NUFVyaWZ5IHNob3VsZCBoYW5kbGUgY3VzdG9tIGVsZW1lbnRzIGFuZCB0aGVpciBhdHRyaWJ1dGVzIGFzIHdlbGwgYXMgY3VzdG9taXplZCBidWlsdC1pbiBlbGVtZW50cy5cbiAgICAgKiBAcHJvcGVydHkge1JlZ0V4cHxGdW5jdGlvbnxudWxsfSB0YWdOYW1lQ2hlY2sgb25lIG9mIFtudWxsLCByZWdleFBhdHRlcm4sIHByZWRpY2F0ZV0uIERlZmF1bHQ6IGBudWxsYCAoZGlzYWxsb3cgYW55IGN1c3RvbSBlbGVtZW50cylcbiAgICAgKiBAcHJvcGVydHkge1JlZ0V4cHxGdW5jdGlvbnxudWxsfSBhdHRyaWJ1dGVOYW1lQ2hlY2sgb25lIG9mIFtudWxsLCByZWdleFBhdHRlcm4sIHByZWRpY2F0ZV0uIERlZmF1bHQ6IGBudWxsYCAoZGlzYWxsb3cgYW55IGF0dHJpYnV0ZXMgbm90IG9uIHRoZSBhbGxvdyBsaXN0KVxuICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzIGFsbG93IGN1c3RvbSBlbGVtZW50cyBkZXJpdmVkIGZyb20gYnVpbHQtaW5zIGlmIHRoZXkgcGFzcyBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2suIERlZmF1bHQ6IGBmYWxzZWAuXG4gICAgICovXG4gICAgdmFyIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HID0gT2JqZWN0LnNlYWwoT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgICB0YWdOYW1lQ2hlY2s6IHtcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBudWxsXG4gICAgICB9LFxuICAgICAgYXR0cmlidXRlTmFtZUNoZWNrOiB7XG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIGFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50czoge1xuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9XG4gICAgfSkpO1xuXG4gICAgLyogRXhwbGljaXRseSBmb3JiaWRkZW4gdGFncyAob3ZlcnJpZGVzIEFMTE9XRURfVEFHUy9BRERfVEFHUykgKi9cbiAgICB2YXIgRk9SQklEX1RBR1MgPSBudWxsO1xuXG4gICAgLyogRXhwbGljaXRseSBmb3JiaWRkZW4gYXR0cmlidXRlcyAob3ZlcnJpZGVzIEFMTE9XRURfQVRUUi9BRERfQVRUUikgKi9cbiAgICB2YXIgRk9SQklEX0FUVFIgPSBudWxsO1xuXG4gICAgLyogRGVjaWRlIGlmIEFSSUEgYXR0cmlidXRlcyBhcmUgb2theSAqL1xuICAgIHZhciBBTExPV19BUklBX0FUVFIgPSB0cnVlO1xuXG4gICAgLyogRGVjaWRlIGlmIGN1c3RvbSBkYXRhIGF0dHJpYnV0ZXMgYXJlIG9rYXkgKi9cbiAgICB2YXIgQUxMT1dfREFUQV9BVFRSID0gdHJ1ZTtcblxuICAgIC8qIERlY2lkZSBpZiB1bmtub3duIHByb3RvY29scyBhcmUgb2theSAqL1xuICAgIHZhciBBTExPV19VTktOT1dOX1BST1RPQ09MUyA9IGZhbHNlO1xuXG4gICAgLyogT3V0cHV0IHNob3VsZCBiZSBzYWZlIGZvciBjb21tb24gdGVtcGxhdGUgZW5naW5lcy5cbiAgICAgKiBUaGlzIG1lYW5zLCBET01QdXJpZnkgcmVtb3ZlcyBkYXRhIGF0dHJpYnV0ZXMsIG11c3RhY2hlcyBhbmQgRVJCXG4gICAgICovXG4gICAgdmFyIFNBRkVfRk9SX1RFTVBMQVRFUyA9IGZhbHNlO1xuXG4gICAgLyogRGVjaWRlIGlmIGRvY3VtZW50IHdpdGggPGh0bWw+Li4uIHNob3VsZCBiZSByZXR1cm5lZCAqL1xuICAgIHZhciBXSE9MRV9ET0NVTUVOVCA9IGZhbHNlO1xuXG4gICAgLyogVHJhY2sgd2hldGhlciBjb25maWcgaXMgYWxyZWFkeSBzZXQgb24gdGhpcyBpbnN0YW5jZSBvZiBET01QdXJpZnkuICovXG4gICAgdmFyIFNFVF9DT05GSUcgPSBmYWxzZTtcblxuICAgIC8qIERlY2lkZSBpZiBhbGwgZWxlbWVudHMgKGUuZy4gc3R5bGUsIHNjcmlwdCkgbXVzdCBiZSBjaGlsZHJlbiBvZlxuICAgICAqIGRvY3VtZW50LmJvZHkuIEJ5IGRlZmF1bHQsIGJyb3dzZXJzIG1pZ2h0IG1vdmUgdGhlbSB0byBkb2N1bWVudC5oZWFkICovXG4gICAgdmFyIEZPUkNFX0JPRFkgPSBmYWxzZTtcblxuICAgIC8qIERlY2lkZSBpZiBhIERPTSBgSFRNTEJvZHlFbGVtZW50YCBzaG91bGQgYmUgcmV0dXJuZWQsIGluc3RlYWQgb2YgYSBodG1sXG4gICAgICogc3RyaW5nIChvciBhIFRydXN0ZWRIVE1MIG9iamVjdCBpZiBUcnVzdGVkIFR5cGVzIGFyZSBzdXBwb3J0ZWQpLlxuICAgICAqIElmIGBXSE9MRV9ET0NVTUVOVGAgaXMgZW5hYmxlZCBhIGBIVE1MSHRtbEVsZW1lbnRgIHdpbGwgYmUgcmV0dXJuZWQgaW5zdGVhZFxuICAgICAqL1xuICAgIHZhciBSRVRVUk5fRE9NID0gZmFsc2U7XG5cbiAgICAvKiBEZWNpZGUgaWYgYSBET00gYERvY3VtZW50RnJhZ21lbnRgIHNob3VsZCBiZSByZXR1cm5lZCwgaW5zdGVhZCBvZiBhIGh0bWxcbiAgICAgKiBzdHJpbmcgIChvciBhIFRydXN0ZWRIVE1MIG9iamVjdCBpZiBUcnVzdGVkIFR5cGVzIGFyZSBzdXBwb3J0ZWQpICovXG4gICAgdmFyIFJFVFVSTl9ET01fRlJBR01FTlQgPSBmYWxzZTtcblxuICAgIC8qIFRyeSB0byByZXR1cm4gYSBUcnVzdGVkIFR5cGUgb2JqZWN0IGluc3RlYWQgb2YgYSBzdHJpbmcsIHJldHVybiBhIHN0cmluZyBpblxuICAgICAqIGNhc2UgVHJ1c3RlZCBUeXBlcyBhcmUgbm90IHN1cHBvcnRlZCAgKi9cbiAgICB2YXIgUkVUVVJOX1RSVVNURURfVFlQRSA9IGZhbHNlO1xuXG4gICAgLyogT3V0cHV0IHNob3VsZCBiZSBmcmVlIGZyb20gRE9NIGNsb2JiZXJpbmcgYXR0YWNrcz8gKi9cbiAgICB2YXIgU0FOSVRJWkVfRE9NID0gdHJ1ZTtcblxuICAgIC8qIEtlZXAgZWxlbWVudCBjb250ZW50IHdoZW4gcmVtb3ZpbmcgZWxlbWVudD8gKi9cbiAgICB2YXIgS0VFUF9DT05URU5UID0gdHJ1ZTtcblxuICAgIC8qIElmIGEgYE5vZGVgIGlzIHBhc3NlZCB0byBzYW5pdGl6ZSgpLCB0aGVuIHBlcmZvcm1zIHNhbml0aXphdGlvbiBpbi1wbGFjZSBpbnN0ZWFkXG4gICAgICogb2YgaW1wb3J0aW5nIGl0IGludG8gYSBuZXcgRG9jdW1lbnQgYW5kIHJldHVybmluZyBhIHNhbml0aXplZCBjb3B5ICovXG4gICAgdmFyIElOX1BMQUNFID0gZmFsc2U7XG5cbiAgICAvKiBBbGxvdyB1c2FnZSBvZiBwcm9maWxlcyBsaWtlIGh0bWwsIHN2ZyBhbmQgbWF0aE1sICovXG4gICAgdmFyIFVTRV9QUk9GSUxFUyA9IHt9O1xuXG4gICAgLyogVGFncyB0byBpZ25vcmUgY29udGVudCBvZiB3aGVuIEtFRVBfQ09OVEVOVCBpcyB0cnVlICovXG4gICAgdmFyIEZPUkJJRF9DT05URU5UUyA9IG51bGw7XG4gICAgdmFyIERFRkFVTFRfRk9SQklEX0NPTlRFTlRTID0gYWRkVG9TZXQoe30sIFsnYW5ub3RhdGlvbi14bWwnLCAnYXVkaW8nLCAnY29sZ3JvdXAnLCAnZGVzYycsICdmb3JlaWdub2JqZWN0JywgJ2hlYWQnLCAnaWZyYW1lJywgJ21hdGgnLCAnbWknLCAnbW4nLCAnbW8nLCAnbXMnLCAnbXRleHQnLCAnbm9lbWJlZCcsICdub2ZyYW1lcycsICdub3NjcmlwdCcsICdwbGFpbnRleHQnLCAnc2NyaXB0JywgJ3N0eWxlJywgJ3N2ZycsICd0ZW1wbGF0ZScsICd0aGVhZCcsICd0aXRsZScsICd2aWRlbycsICd4bXAnXSk7XG5cbiAgICAvKiBUYWdzIHRoYXQgYXJlIHNhZmUgZm9yIGRhdGE6IFVSSXMgKi9cbiAgICB2YXIgREFUQV9VUklfVEFHUyA9IG51bGw7XG4gICAgdmFyIERFRkFVTFRfREFUQV9VUklfVEFHUyA9IGFkZFRvU2V0KHt9LCBbJ2F1ZGlvJywgJ3ZpZGVvJywgJ2ltZycsICdzb3VyY2UnLCAnaW1hZ2UnLCAndHJhY2snXSk7XG5cbiAgICAvKiBBdHRyaWJ1dGVzIHNhZmUgZm9yIHZhbHVlcyBsaWtlIFwiamF2YXNjcmlwdDpcIiAqL1xuICAgIHZhciBVUklfU0FGRV9BVFRSSUJVVEVTID0gbnVsbDtcbiAgICB2YXIgREVGQVVMVF9VUklfU0FGRV9BVFRSSUJVVEVTID0gYWRkVG9TZXQoe30sIFsnYWx0JywgJ2NsYXNzJywgJ2ZvcicsICdpZCcsICdsYWJlbCcsICduYW1lJywgJ3BhdHRlcm4nLCAncGxhY2Vob2xkZXInLCAncm9sZScsICdzdW1tYXJ5JywgJ3RpdGxlJywgJ3ZhbHVlJywgJ3N0eWxlJywgJ3htbG5zJ10pO1xuXG4gICAgdmFyIE1BVEhNTF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTCc7XG4gICAgdmFyIFNWR19OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuICAgIHZhciBIVE1MX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcbiAgICAvKiBEb2N1bWVudCBuYW1lc3BhY2UgKi9cbiAgICB2YXIgTkFNRVNQQUNFID0gSFRNTF9OQU1FU1BBQ0U7XG4gICAgdmFyIElTX0VNUFRZX0lOUFVUID0gZmFsc2U7XG5cbiAgICAvKiBQYXJzaW5nIG9mIHN0cmljdCBYSFRNTCBkb2N1bWVudHMgKi9cbiAgICB2YXIgUEFSU0VSX01FRElBX1RZUEUgPSB2b2lkIDA7XG4gICAgdmFyIFNVUFBPUlRFRF9QQVJTRVJfTUVESUFfVFlQRVMgPSBbJ2FwcGxpY2F0aW9uL3hodG1sK3htbCcsICd0ZXh0L2h0bWwnXTtcbiAgICB2YXIgREVGQVVMVF9QQVJTRVJfTUVESUFfVFlQRSA9ICd0ZXh0L2h0bWwnO1xuICAgIHZhciB0cmFuc2Zvcm1DYXNlRnVuYyA9IHZvaWQgMDtcblxuICAgIC8qIEtlZXAgYSByZWZlcmVuY2UgdG8gY29uZmlnIHRvIHBhc3MgdG8gaG9va3MgKi9cbiAgICB2YXIgQ09ORklHID0gbnVsbDtcblxuICAgIC8qIElkZWFsbHksIGRvIG5vdCB0b3VjaCBhbnl0aGluZyBiZWxvdyB0aGlzIGxpbmUgKi9cbiAgICAvKiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICovXG5cbiAgICB2YXIgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgICB2YXIgaXNSZWdleE9yRnVuY3Rpb24gPSBmdW5jdGlvbiBpc1JlZ2V4T3JGdW5jdGlvbih0ZXN0VmFsdWUpIHtcbiAgICAgIHJldHVybiB0ZXN0VmFsdWUgaW5zdGFuY2VvZiBSZWdFeHAgfHwgdGVzdFZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb247XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9wYXJzZUNvbmZpZ1xuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBjZmcgb3B0aW9uYWwgY29uZmlnIGxpdGVyYWxcbiAgICAgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuICAgIHZhciBfcGFyc2VDb25maWcgPSBmdW5jdGlvbiBfcGFyc2VDb25maWcoY2ZnKSB7XG4gICAgICBpZiAoQ09ORklHICYmIENPTkZJRyA9PT0gY2ZnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLyogU2hpZWxkIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGZyb20gdGFtcGVyaW5nICovXG4gICAgICBpZiAoIWNmZyB8fCAodHlwZW9mIGNmZyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoY2ZnKSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNmZyA9IHt9O1xuICAgICAgfVxuXG4gICAgICAvKiBTaGllbGQgY29uZmlndXJhdGlvbiBvYmplY3QgZnJvbSBwcm90b3R5cGUgcG9sbHV0aW9uICovXG4gICAgICBjZmcgPSBjbG9uZShjZmcpO1xuXG4gICAgICAvKiBTZXQgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzICovXG4gICAgICBBTExPV0VEX1RBR1MgPSAnQUxMT1dFRF9UQUdTJyBpbiBjZmcgPyBhZGRUb1NldCh7fSwgY2ZnLkFMTE9XRURfVEFHUykgOiBERUZBVUxUX0FMTE9XRURfVEFHUztcbiAgICAgIEFMTE9XRURfQVRUUiA9ICdBTExPV0VEX0FUVFInIGluIGNmZyA/IGFkZFRvU2V0KHt9LCBjZmcuQUxMT1dFRF9BVFRSKSA6IERFRkFVTFRfQUxMT1dFRF9BVFRSO1xuICAgICAgVVJJX1NBRkVfQVRUUklCVVRFUyA9ICdBRERfVVJJX1NBRkVfQVRUUicgaW4gY2ZnID8gYWRkVG9TZXQoY2xvbmUoREVGQVVMVF9VUklfU0FGRV9BVFRSSUJVVEVTKSwgY2ZnLkFERF9VUklfU0FGRV9BVFRSKSA6IERFRkFVTFRfVVJJX1NBRkVfQVRUUklCVVRFUztcbiAgICAgIERBVEFfVVJJX1RBR1MgPSAnQUREX0RBVEFfVVJJX1RBR1MnIGluIGNmZyA/IGFkZFRvU2V0KGNsb25lKERFRkFVTFRfREFUQV9VUklfVEFHUyksIGNmZy5BRERfREFUQV9VUklfVEFHUykgOiBERUZBVUxUX0RBVEFfVVJJX1RBR1M7XG4gICAgICBGT1JCSURfQ09OVEVOVFMgPSAnRk9SQklEX0NPTlRFTlRTJyBpbiBjZmcgPyBhZGRUb1NldCh7fSwgY2ZnLkZPUkJJRF9DT05URU5UUykgOiBERUZBVUxUX0ZPUkJJRF9DT05URU5UUztcbiAgICAgIEZPUkJJRF9UQUdTID0gJ0ZPUkJJRF9UQUdTJyBpbiBjZmcgPyBhZGRUb1NldCh7fSwgY2ZnLkZPUkJJRF9UQUdTKSA6IHt9O1xuICAgICAgRk9SQklEX0FUVFIgPSAnRk9SQklEX0FUVFInIGluIGNmZyA/IGFkZFRvU2V0KHt9LCBjZmcuRk9SQklEX0FUVFIpIDoge307XG4gICAgICBVU0VfUFJPRklMRVMgPSAnVVNFX1BST0ZJTEVTJyBpbiBjZmcgPyBjZmcuVVNFX1BST0ZJTEVTIDogZmFsc2U7XG4gICAgICBBTExPV19BUklBX0FUVFIgPSBjZmcuQUxMT1dfQVJJQV9BVFRSICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXG4gICAgICBBTExPV19EQVRBX0FUVFIgPSBjZmcuQUxMT1dfREFUQV9BVFRSICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXG4gICAgICBBTExPV19VTktOT1dOX1BST1RPQ09MUyA9IGNmZy5BTExPV19VTktOT1dOX1BST1RPQ09MUyB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgICAgU0FGRV9GT1JfVEVNUExBVEVTID0gY2ZnLlNBRkVfRk9SX1RFTVBMQVRFUyB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgICAgV0hPTEVfRE9DVU1FTlQgPSBjZmcuV0hPTEVfRE9DVU1FTlQgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICAgIFJFVFVSTl9ET00gPSBjZmcuUkVUVVJOX0RPTSB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgICAgUkVUVVJOX0RPTV9GUkFHTUVOVCA9IGNmZy5SRVRVUk5fRE9NX0ZSQUdNRU5UIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgICBSRVRVUk5fVFJVU1RFRF9UWVBFID0gY2ZnLlJFVFVSTl9UUlVTVEVEX1RZUEUgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICAgIEZPUkNFX0JPRFkgPSBjZmcuRk9SQ0VfQk9EWSB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgICAgU0FOSVRJWkVfRE9NID0gY2ZnLlNBTklUSVpFX0RPTSAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuICAgICAgS0VFUF9DT05URU5UID0gY2ZnLktFRVBfQ09OVEVOVCAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuICAgICAgSU5fUExBQ0UgPSBjZmcuSU5fUExBQ0UgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICAgIElTX0FMTE9XRURfVVJJJCQxID0gY2ZnLkFMTE9XRURfVVJJX1JFR0VYUCB8fCBJU19BTExPV0VEX1VSSSQkMTtcbiAgICAgIE5BTUVTUEFDRSA9IGNmZy5OQU1FU1BBQ0UgfHwgSFRNTF9OQU1FU1BBQ0U7XG4gICAgICBpZiAoY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HICYmIGlzUmVnZXhPckZ1bmN0aW9uKGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2spKSB7XG4gICAgICAgIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayA9IGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2s7XG4gICAgICB9XG5cbiAgICAgIGlmIChjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcgJiYgaXNSZWdleE9yRnVuY3Rpb24oY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjaykpIHtcbiAgICAgICAgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrID0gY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjaztcbiAgICAgIH1cblxuICAgICAgaWYgKGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORyAmJiB0eXBlb2YgY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50cyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50cyA9IGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy5hbGxvd0N1c3RvbWl6ZWRCdWlsdEluRWxlbWVudHM7XG4gICAgICB9XG5cbiAgICAgIFBBUlNFUl9NRURJQV9UWVBFID1cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1pbmNsdWRlc1xuICAgICAgU1VQUE9SVEVEX1BBUlNFUl9NRURJQV9UWVBFUy5pbmRleE9mKGNmZy5QQVJTRVJfTUVESUFfVFlQRSkgPT09IC0xID8gUEFSU0VSX01FRElBX1RZUEUgPSBERUZBVUxUX1BBUlNFUl9NRURJQV9UWVBFIDogUEFSU0VSX01FRElBX1RZUEUgPSBjZmcuUEFSU0VSX01FRElBX1RZUEU7XG5cbiAgICAgIC8vIEhUTUwgdGFncyBhbmQgYXR0cmlidXRlcyBhcmUgbm90IGNhc2Utc2Vuc2l0aXZlLCBjb252ZXJ0aW5nIHRvIGxvd2VyY2FzZS4gS2VlcGluZyBYSFRNTCBhcyBpcy5cbiAgICAgIHRyYW5zZm9ybUNhc2VGdW5jID0gUEFSU0VSX01FRElBX1RZUEUgPT09ICdhcHBsaWNhdGlvbi94aHRtbCt4bWwnID8gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgICB9IDogc3RyaW5nVG9Mb3dlckNhc2U7XG5cbiAgICAgIGlmIChTQUZFX0ZPUl9URU1QTEFURVMpIHtcbiAgICAgICAgQUxMT1dfREFUQV9BVFRSID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChSRVRVUk5fRE9NX0ZSQUdNRU5UKSB7XG4gICAgICAgIFJFVFVSTl9ET00gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBQYXJzZSBwcm9maWxlIGluZm8gKi9cbiAgICAgIGlmIChVU0VfUFJPRklMRVMpIHtcbiAgICAgICAgQUxMT1dFRF9UQUdTID0gYWRkVG9TZXQoe30sIFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkkMSh0ZXh0KSkpO1xuICAgICAgICBBTExPV0VEX0FUVFIgPSBbXTtcbiAgICAgICAgaWYgKFVTRV9QUk9GSUxFUy5odG1sID09PSB0cnVlKSB7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBodG1sKTtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIGh0bWwkMSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVVNFX1BST0ZJTEVTLnN2ZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgc3ZnKTtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIHN2ZyQxKTtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIHhtbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVVNFX1BST0ZJTEVTLnN2Z0ZpbHRlcnMgPT09IHRydWUpIHtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIHN2Z0ZpbHRlcnMpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgc3ZnJDEpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgeG1sKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVU0VfUFJPRklMRVMubWF0aE1sID09PSB0cnVlKSB7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBtYXRoTWwpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgbWF0aE1sJDEpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgeG1sKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiBNZXJnZSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgKi9cbiAgICAgIGlmIChjZmcuQUREX1RBR1MpIHtcbiAgICAgICAgaWYgKEFMTE9XRURfVEFHUyA9PT0gREVGQVVMVF9BTExPV0VEX1RBR1MpIHtcbiAgICAgICAgICBBTExPV0VEX1RBR1MgPSBjbG9uZShBTExPV0VEX1RBR1MpO1xuICAgICAgICB9XG5cbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBjZmcuQUREX1RBR1MpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2ZnLkFERF9BVFRSKSB7XG4gICAgICAgIGlmIChBTExPV0VEX0FUVFIgPT09IERFRkFVTFRfQUxMT1dFRF9BVFRSKSB7XG4gICAgICAgICAgQUxMT1dFRF9BVFRSID0gY2xvbmUoQUxMT1dFRF9BVFRSKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgY2ZnLkFERF9BVFRSKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNmZy5BRERfVVJJX1NBRkVfQVRUUikge1xuICAgICAgICBhZGRUb1NldChVUklfU0FGRV9BVFRSSUJVVEVTLCBjZmcuQUREX1VSSV9TQUZFX0FUVFIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2ZnLkZPUkJJRF9DT05URU5UUykge1xuICAgICAgICBpZiAoRk9SQklEX0NPTlRFTlRTID09PSBERUZBVUxUX0ZPUkJJRF9DT05URU5UUykge1xuICAgICAgICAgIEZPUkJJRF9DT05URU5UUyA9IGNsb25lKEZPUkJJRF9DT05URU5UUyk7XG4gICAgICAgIH1cblxuICAgICAgICBhZGRUb1NldChGT1JCSURfQ09OVEVOVFMsIGNmZy5GT1JCSURfQ09OVEVOVFMpO1xuICAgICAgfVxuXG4gICAgICAvKiBBZGQgI3RleHQgaW4gY2FzZSBLRUVQX0NPTlRFTlQgaXMgc2V0IHRvIHRydWUgKi9cbiAgICAgIGlmIChLRUVQX0NPTlRFTlQpIHtcbiAgICAgICAgQUxMT1dFRF9UQUdTWycjdGV4dCddID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLyogQWRkIGh0bWwsIGhlYWQgYW5kIGJvZHkgdG8gQUxMT1dFRF9UQUdTIGluIGNhc2UgV0hPTEVfRE9DVU1FTlQgaXMgdHJ1ZSAqL1xuICAgICAgaWYgKFdIT0xFX0RPQ1VNRU5UKSB7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgWydodG1sJywgJ2hlYWQnLCAnYm9keSddKTtcbiAgICAgIH1cblxuICAgICAgLyogQWRkIHRib2R5IHRvIEFMTE9XRURfVEFHUyBpbiBjYXNlIHRhYmxlcyBhcmUgcGVybWl0dGVkLCBzZWUgIzI4NiwgIzM2NSAqL1xuICAgICAgaWYgKEFMTE9XRURfVEFHUy50YWJsZSkge1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIFsndGJvZHknXSk7XG4gICAgICAgIGRlbGV0ZSBGT1JCSURfVEFHUy50Ym9keTtcbiAgICAgIH1cblxuICAgICAgLy8gUHJldmVudCBmdXJ0aGVyIG1hbmlwdWxhdGlvbiBvZiBjb25maWd1cmF0aW9uLlxuICAgICAgLy8gTm90IGF2YWlsYWJsZSBpbiBJRTgsIFNhZmFyaSA1LCBldGMuXG4gICAgICBpZiAoZnJlZXplKSB7XG4gICAgICAgIGZyZWV6ZShjZmcpO1xuICAgICAgfVxuXG4gICAgICBDT05GSUcgPSBjZmc7XG4gICAgfTtcblxuICAgIHZhciBNQVRITUxfVEVYVF9JTlRFR1JBVElPTl9QT0lOVFMgPSBhZGRUb1NldCh7fSwgWydtaScsICdtbycsICdtbicsICdtcycsICdtdGV4dCddKTtcblxuICAgIHZhciBIVE1MX0lOVEVHUkFUSU9OX1BPSU5UUyA9IGFkZFRvU2V0KHt9LCBbJ2ZvcmVpZ25vYmplY3QnLCAnZGVzYycsICd0aXRsZScsICdhbm5vdGF0aW9uLXhtbCddKTtcblxuICAgIC8qIEtlZXAgdHJhY2sgb2YgYWxsIHBvc3NpYmxlIFNWRyBhbmQgTWF0aE1MIHRhZ3NcbiAgICAgKiBzbyB0aGF0IHdlIGNhbiBwZXJmb3JtIHRoZSBuYW1lc3BhY2UgY2hlY2tzXG4gICAgICogY29ycmVjdGx5LiAqL1xuICAgIHZhciBBTExfU1ZHX1RBR1MgPSBhZGRUb1NldCh7fSwgc3ZnKTtcbiAgICBhZGRUb1NldChBTExfU1ZHX1RBR1MsIHN2Z0ZpbHRlcnMpO1xuICAgIGFkZFRvU2V0KEFMTF9TVkdfVEFHUywgc3ZnRGlzYWxsb3dlZCk7XG5cbiAgICB2YXIgQUxMX01BVEhNTF9UQUdTID0gYWRkVG9TZXQoe30sIG1hdGhNbCk7XG4gICAgYWRkVG9TZXQoQUxMX01BVEhNTF9UQUdTLCBtYXRoTWxEaXNhbGxvd2VkKTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtFbGVtZW50fSBlbGVtZW50IGEgRE9NIGVsZW1lbnQgd2hvc2UgbmFtZXNwYWNlIGlzIGJlaW5nIGNoZWNrZWRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJuIGZhbHNlIGlmIHRoZSBlbGVtZW50IGhhcyBhXG4gICAgICogIG5hbWVzcGFjZSB0aGF0IGEgc3BlYy1jb21wbGlhbnQgcGFyc2VyIHdvdWxkIG5ldmVyXG4gICAgICogIHJldHVybi4gUmV0dXJuIHRydWUgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIHZhciBfY2hlY2tWYWxpZE5hbWVzcGFjZSA9IGZ1bmN0aW9uIF9jaGVja1ZhbGlkTmFtZXNwYWNlKGVsZW1lbnQpIHtcbiAgICAgIHZhciBwYXJlbnQgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuXG4gICAgICAvLyBJbiBKU0RPTSwgaWYgd2UncmUgaW5zaWRlIHNoYWRvdyBET00sIHRoZW4gcGFyZW50Tm9kZVxuICAgICAgLy8gY2FuIGJlIG51bGwuIFdlIGp1c3Qgc2ltdWxhdGUgcGFyZW50IGluIHRoaXMgY2FzZS5cbiAgICAgIGlmICghcGFyZW50IHx8ICFwYXJlbnQudGFnTmFtZSkge1xuICAgICAgICBwYXJlbnQgPSB7XG4gICAgICAgICAgbmFtZXNwYWNlVVJJOiBIVE1MX05BTUVTUEFDRSxcbiAgICAgICAgICB0YWdOYW1lOiAndGVtcGxhdGUnXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHZhciB0YWdOYW1lID0gc3RyaW5nVG9Mb3dlckNhc2UoZWxlbWVudC50YWdOYW1lKTtcbiAgICAgIHZhciBwYXJlbnRUYWdOYW1lID0gc3RyaW5nVG9Mb3dlckNhc2UocGFyZW50LnRhZ05hbWUpO1xuXG4gICAgICBpZiAoZWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IFNWR19OQU1FU1BBQ0UpIHtcbiAgICAgICAgLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIEhUTUwgbmFtZXNwYWNlIHRvIFNWR1xuICAgICAgICAvLyBpcyB2aWEgPHN2Zz4uIElmIGl0IGhhcHBlbnMgdmlhIGFueSBvdGhlciB0YWcsIHRoZW5cbiAgICAgICAgLy8gaXQgc2hvdWxkIGJlIGtpbGxlZC5cbiAgICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICAgICAgcmV0dXJuIHRhZ05hbWUgPT09ICdzdmcnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIE1hdGhNTCB0byBTVkcgaXMgdmlhXG4gICAgICAgIC8vIHN2ZyBpZiBwYXJlbnQgaXMgZWl0aGVyIDxhbm5vdGF0aW9uLXhtbD4gb3IgTWF0aE1MXG4gICAgICAgIC8vIHRleHQgaW50ZWdyYXRpb24gcG9pbnRzLlxuICAgICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gTUFUSE1MX05BTUVTUEFDRSkge1xuICAgICAgICAgIHJldHVybiB0YWdOYW1lID09PSAnc3ZnJyAmJiAocGFyZW50VGFnTmFtZSA9PT0gJ2Fubm90YXRpb24teG1sJyB8fCBNQVRITUxfVEVYVF9JTlRFR1JBVElPTl9QT0lOVFNbcGFyZW50VGFnTmFtZV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2Ugb25seSBhbGxvdyBlbGVtZW50cyB0aGF0IGFyZSBkZWZpbmVkIGluIFNWR1xuICAgICAgICAvLyBzcGVjLiBBbGwgb3RoZXJzIGFyZSBkaXNhbGxvd2VkIGluIFNWRyBuYW1lc3BhY2UuXG4gICAgICAgIHJldHVybiBCb29sZWFuKEFMTF9TVkdfVEFHU1t0YWdOYW1lXSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50Lm5hbWVzcGFjZVVSSSA9PT0gTUFUSE1MX05BTUVTUEFDRSkge1xuICAgICAgICAvLyBUaGUgb25seSB3YXkgdG8gc3dpdGNoIGZyb20gSFRNTCBuYW1lc3BhY2UgdG8gTWF0aE1MXG4gICAgICAgIC8vIGlzIHZpYSA8bWF0aD4uIElmIGl0IGhhcHBlbnMgdmlhIGFueSBvdGhlciB0YWcsIHRoZW5cbiAgICAgICAgLy8gaXQgc2hvdWxkIGJlIGtpbGxlZC5cbiAgICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICAgICAgcmV0dXJuIHRhZ05hbWUgPT09ICdtYXRoJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSBvbmx5IHdheSB0byBzd2l0Y2ggZnJvbSBTVkcgdG8gTWF0aE1MIGlzIHZpYVxuICAgICAgICAvLyA8bWF0aD4gYW5kIEhUTUwgaW50ZWdyYXRpb24gcG9pbnRzXG4gICAgICAgIGlmIChwYXJlbnQubmFtZXNwYWNlVVJJID09PSBTVkdfTkFNRVNQQUNFKSB7XG4gICAgICAgICAgcmV0dXJuIHRhZ05hbWUgPT09ICdtYXRoJyAmJiBIVE1MX0lOVEVHUkFUSU9OX1BPSU5UU1twYXJlbnRUYWdOYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlIG9ubHkgYWxsb3cgZWxlbWVudHMgdGhhdCBhcmUgZGVmaW5lZCBpbiBNYXRoTUxcbiAgICAgICAgLy8gc3BlYy4gQWxsIG90aGVycyBhcmUgZGlzYWxsb3dlZCBpbiBNYXRoTUwgbmFtZXNwYWNlLlxuICAgICAgICByZXR1cm4gQm9vbGVhbihBTExfTUFUSE1MX1RBR1NbdGFnTmFtZV0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICAgIC8vIFRoZSBvbmx5IHdheSB0byBzd2l0Y2ggZnJvbSBTVkcgdG8gSFRNTCBpcyB2aWFcbiAgICAgICAgLy8gSFRNTCBpbnRlZ3JhdGlvbiBwb2ludHMsIGFuZCBmcm9tIE1hdGhNTCB0byBIVE1MXG4gICAgICAgIC8vIGlzIHZpYSBNYXRoTUwgdGV4dCBpbnRlZ3JhdGlvbiBwb2ludHNcbiAgICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IFNWR19OQU1FU1BBQ0UgJiYgIUhUTUxfSU5URUdSQVRJT05fUE9JTlRTW3BhcmVudFRhZ05hbWVdKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IE1BVEhNTF9OQU1FU1BBQ0UgJiYgIU1BVEhNTF9URVhUX0lOVEVHUkFUSU9OX1BPSU5UU1twYXJlbnRUYWdOYW1lXSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENlcnRhaW4gZWxlbWVudHMgYXJlIGFsbG93ZWQgaW4gYm90aCBTVkcgYW5kIEhUTUxcbiAgICAgICAgLy8gbmFtZXNwYWNlLiBXZSBuZWVkIHRvIHNwZWNpZnkgdGhlbSBleHBsaWNpdGx5XG4gICAgICAgIC8vIHNvIHRoYXQgdGhleSBkb24ndCBnZXQgZXJyb25vdXNseSBkZWxldGVkIGZyb21cbiAgICAgICAgLy8gSFRNTCBuYW1lc3BhY2UuXG4gICAgICAgIHZhciBjb21tb25TdmdBbmRIVE1MRWxlbWVudHMgPSBhZGRUb1NldCh7fSwgWyd0aXRsZScsICdzdHlsZScsICdmb250JywgJ2EnLCAnc2NyaXB0J10pO1xuXG4gICAgICAgIC8vIFdlIGRpc2FsbG93IHRhZ3MgdGhhdCBhcmUgc3BlY2lmaWMgZm9yIE1hdGhNTFxuICAgICAgICAvLyBvciBTVkcgYW5kIHNob3VsZCBuZXZlciBhcHBlYXIgaW4gSFRNTCBuYW1lc3BhY2VcbiAgICAgICAgcmV0dXJuICFBTExfTUFUSE1MX1RBR1NbdGFnTmFtZV0gJiYgKGNvbW1vblN2Z0FuZEhUTUxFbGVtZW50c1t0YWdOYW1lXSB8fCAhQUxMX1NWR19UQUdTW3RhZ05hbWVdKTtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvZGUgc2hvdWxkIG5ldmVyIHJlYWNoIHRoaXMgcGxhY2UgKHRoaXMgbWVhbnNcbiAgICAgIC8vIHRoYXQgdGhlIGVsZW1lbnQgc29tZWhvdyBnb3QgbmFtZXNwYWNlIHRoYXQgaXMgbm90XG4gICAgICAvLyBIVE1MLCBTVkcgb3IgTWF0aE1MKS4gUmV0dXJuIGZhbHNlIGp1c3QgaW4gY2FzZS5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX2ZvcmNlUmVtb3ZlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOb2RlfSBub2RlIGEgRE9NIG5vZGVcbiAgICAgKi9cbiAgICB2YXIgX2ZvcmNlUmVtb3ZlID0gZnVuY3Rpb24gX2ZvcmNlUmVtb3ZlKG5vZGUpIHtcbiAgICAgIGFycmF5UHVzaChET01QdXJpZnkucmVtb3ZlZCwgeyBlbGVtZW50OiBub2RlIH0pO1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWRvbS1ub2RlLXJlbW92ZVxuICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbm9kZS5vdXRlckhUTUwgPSBlbXB0eUhUTUw7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICBub2RlLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9yZW1vdmVBdHRyaWJ1dGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZSBhbiBBdHRyaWJ1dGUgbmFtZVxuICAgICAqIEBwYXJhbSAge05vZGV9IG5vZGUgYSBET00gbm9kZVxuICAgICAqL1xuICAgIHZhciBfcmVtb3ZlQXR0cmlidXRlID0gZnVuY3Rpb24gX3JlbW92ZUF0dHJpYnV0ZShuYW1lLCBub2RlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhcnJheVB1c2goRE9NUHVyaWZ5LnJlbW92ZWQsIHtcbiAgICAgICAgICBhdHRyaWJ1dGU6IG5vZGUuZ2V0QXR0cmlidXRlTm9kZShuYW1lKSxcbiAgICAgICAgICBmcm9tOiBub2RlXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBhcnJheVB1c2goRE9NUHVyaWZ5LnJlbW92ZWQsIHtcbiAgICAgICAgICBhdHRyaWJ1dGU6IG51bGwsXG4gICAgICAgICAgZnJvbTogbm9kZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cbiAgICAgIC8vIFdlIHZvaWQgYXR0cmlidXRlIHZhbHVlcyBmb3IgdW5yZW1vdmFibGUgXCJpc1wiXCIgYXR0cmlidXRlc1xuICAgICAgaWYgKG5hbWUgPT09ICdpcycgJiYgIUFMTE9XRURfQVRUUltuYW1lXSkge1xuICAgICAgICBpZiAoUkVUVVJOX0RPTSB8fCBSRVRVUk5fRE9NX0ZSQUdNRU5UKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIF9mb3JjZVJlbW92ZShub2RlKTtcbiAgICAgICAgICB9IGNhdGNoIChfKSB7fVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCAnJyk7XG4gICAgICAgICAgfSBjYXRjaCAoXykge31cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBfaW5pdERvY3VtZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGRpcnR5IGEgc3RyaW5nIG9mIGRpcnR5IG1hcmt1cFxuICAgICAqIEByZXR1cm4ge0RvY3VtZW50fSBhIERPTSwgZmlsbGVkIHdpdGggdGhlIGRpcnR5IG1hcmt1cFxuICAgICAqL1xuICAgIHZhciBfaW5pdERvY3VtZW50ID0gZnVuY3Rpb24gX2luaXREb2N1bWVudChkaXJ0eSkge1xuICAgICAgLyogQ3JlYXRlIGEgSFRNTCBkb2N1bWVudCAqL1xuICAgICAgdmFyIGRvYyA9IHZvaWQgMDtcbiAgICAgIHZhciBsZWFkaW5nV2hpdGVzcGFjZSA9IHZvaWQgMDtcblxuICAgICAgaWYgKEZPUkNFX0JPRFkpIHtcbiAgICAgICAgZGlydHkgPSAnPHJlbW92ZT48L3JlbW92ZT4nICsgZGlydHk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBJZiBGT1JDRV9CT0RZIGlzbid0IHVzZWQsIGxlYWRpbmcgd2hpdGVzcGFjZSBuZWVkcyB0byBiZSBwcmVzZXJ2ZWQgbWFudWFsbHkgKi9cbiAgICAgICAgdmFyIG1hdGNoZXMgPSBzdHJpbmdNYXRjaChkaXJ0eSwgL15bXFxyXFxuXFx0IF0rLyk7XG4gICAgICAgIGxlYWRpbmdXaGl0ZXNwYWNlID0gbWF0Y2hlcyAmJiBtYXRjaGVzWzBdO1xuICAgICAgfVxuXG4gICAgICBpZiAoUEFSU0VSX01FRElBX1RZUEUgPT09ICdhcHBsaWNhdGlvbi94aHRtbCt4bWwnKSB7XG4gICAgICAgIC8vIFJvb3Qgb2YgWEhUTUwgZG9jIG11c3QgY29udGFpbiB4bWxucyBkZWNsYXJhdGlvbiAoc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94aHRtbDEvbm9ybWF0aXZlLmh0bWwjc3RyaWN0KVxuICAgICAgICBkaXJ0eSA9ICc8aHRtbCB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj48aGVhZD48L2hlYWQ+PGJvZHk+JyArIGRpcnR5ICsgJzwvYm9keT48L2h0bWw+JztcbiAgICAgIH1cblxuICAgICAgdmFyIGRpcnR5UGF5bG9hZCA9IHRydXN0ZWRUeXBlc1BvbGljeSA/IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKGRpcnR5KSA6IGRpcnR5O1xuICAgICAgLypcbiAgICAgICAqIFVzZSB0aGUgRE9NUGFyc2VyIEFQSSBieSBkZWZhdWx0LCBmYWxsYmFjayBsYXRlciBpZiBuZWVkcyBiZVxuICAgICAgICogRE9NUGFyc2VyIG5vdCB3b3JrIGZvciBzdmcgd2hlbiBoYXMgbXVsdGlwbGUgcm9vdCBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBpZiAoTkFNRVNQQUNFID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoZGlydHlQYXlsb2FkLCBQQVJTRVJfTUVESUFfVFlQRSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgICB9XG5cbiAgICAgIC8qIFVzZSBjcmVhdGVIVE1MRG9jdW1lbnQgaW4gY2FzZSBET01QYXJzZXIgaXMgbm90IGF2YWlsYWJsZSAqL1xuICAgICAgaWYgKCFkb2MgfHwgIWRvYy5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgZG9jID0gaW1wbGVtZW50YXRpb24uY3JlYXRlRG9jdW1lbnQoTkFNRVNQQUNFLCAndGVtcGxhdGUnLCBudWxsKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBkb2MuZG9jdW1lbnRFbGVtZW50LmlubmVySFRNTCA9IElTX0VNUFRZX0lOUFVUID8gJycgOiBkaXJ0eVBheWxvYWQ7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAvLyBTeW50YXggZXJyb3IgaWYgZGlydHlQYXlsb2FkIGlzIGludmFsaWQgeG1sXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGJvZHkgPSBkb2MuYm9keSB8fCBkb2MuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgICBpZiAoZGlydHkgJiYgbGVhZGluZ1doaXRlc3BhY2UpIHtcbiAgICAgICAgYm9keS5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobGVhZGluZ1doaXRlc3BhY2UpLCBib2R5LmNoaWxkTm9kZXNbMF0gfHwgbnVsbCk7XG4gICAgICB9XG5cbiAgICAgIC8qIFdvcmsgb24gd2hvbGUgZG9jdW1lbnQgb3IganVzdCBpdHMgYm9keSAqL1xuICAgICAgaWYgKE5BTUVTUEFDRSA9PT0gSFRNTF9OQU1FU1BBQ0UpIHtcbiAgICAgICAgcmV0dXJuIGdldEVsZW1lbnRzQnlUYWdOYW1lLmNhbGwoZG9jLCBXSE9MRV9ET0NVTUVOVCA/ICdodG1sJyA6ICdib2R5JylbMF07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBXSE9MRV9ET0NVTUVOVCA/IGRvYy5kb2N1bWVudEVsZW1lbnQgOiBib2R5O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBfY3JlYXRlSXRlcmF0b3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0RvY3VtZW50fSByb290IGRvY3VtZW50L2ZyYWdtZW50IHRvIGNyZWF0ZSBpdGVyYXRvciBmb3JcbiAgICAgKiBAcmV0dXJuIHtJdGVyYXRvcn0gaXRlcmF0b3IgaW5zdGFuY2VcbiAgICAgKi9cbiAgICB2YXIgX2NyZWF0ZUl0ZXJhdG9yID0gZnVuY3Rpb24gX2NyZWF0ZUl0ZXJhdG9yKHJvb3QpIHtcbiAgICAgIHJldHVybiBjcmVhdGVOb2RlSXRlcmF0b3IuY2FsbChyb290Lm93bmVyRG9jdW1lbnQgfHwgcm9vdCwgcm9vdCwgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQgfCBOb2RlRmlsdGVyLlNIT1dfQ09NTUVOVCB8IE5vZGVGaWx0ZXIuU0hPV19URVhULCBudWxsLCBmYWxzZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9pc0Nsb2JiZXJlZFxuICAgICAqXG4gICAgICogQHBhcmFtICB7Tm9kZX0gZWxtIGVsZW1lbnQgdG8gY2hlY2sgZm9yIGNsb2JiZXJpbmcgYXR0YWNrc1xuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgY2xvYmJlcmVkLCBmYWxzZSBpZiBzYWZlXG4gICAgICovXG4gICAgdmFyIF9pc0Nsb2JiZXJlZCA9IGZ1bmN0aW9uIF9pc0Nsb2JiZXJlZChlbG0pIHtcbiAgICAgIHJldHVybiBlbG0gaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQgJiYgKHR5cGVvZiBlbG0ubm9kZU5hbWUgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBlbG0udGV4dENvbnRlbnQgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBlbG0ucmVtb3ZlQ2hpbGQgIT09ICdmdW5jdGlvbicgfHwgIShlbG0uYXR0cmlidXRlcyBpbnN0YW5jZW9mIE5hbWVkTm9kZU1hcCkgfHwgdHlwZW9mIGVsbS5yZW1vdmVBdHRyaWJ1dGUgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGVsbS5zZXRBdHRyaWJ1dGUgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGVsbS5uYW1lc3BhY2VVUkkgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBlbG0uaW5zZXJ0QmVmb3JlICE9PSAnZnVuY3Rpb24nKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX2lzTm9kZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7Tm9kZX0gb2JqIG9iamVjdCB0byBjaGVjayB3aGV0aGVyIGl0J3MgYSBET00gbm9kZVxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaXMgb2JqZWN0IGlzIGEgRE9NIG5vZGVcbiAgICAgKi9cbiAgICB2YXIgX2lzTm9kZSA9IGZ1bmN0aW9uIF9pc05vZGUob2JqZWN0KSB7XG4gICAgICByZXR1cm4gKHR5cGVvZiBOb2RlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihOb2RlKSkgPT09ICdvYmplY3QnID8gb2JqZWN0IGluc3RhbmNlb2YgTm9kZSA6IG9iamVjdCAmJiAodHlwZW9mIG9iamVjdCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob2JqZWN0KSkgPT09ICdvYmplY3QnICYmIHR5cGVvZiBvYmplY3Qubm9kZVR5cGUgPT09ICdudW1iZXInICYmIHR5cGVvZiBvYmplY3Qubm9kZU5hbWUgPT09ICdzdHJpbmcnO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBfZXhlY3V0ZUhvb2tcbiAgICAgKiBFeGVjdXRlIHVzZXIgY29uZmlndXJhYmxlIGhvb2tzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGVudHJ5UG9pbnQgIE5hbWUgb2YgdGhlIGhvb2sncyBlbnRyeSBwb2ludFxuICAgICAqIEBwYXJhbSAge05vZGV9IGN1cnJlbnROb2RlIG5vZGUgdG8gd29yayBvbiB3aXRoIHRoZSBob29rXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIGFkZGl0aW9uYWwgaG9vayBwYXJhbWV0ZXJzXG4gICAgICovXG4gICAgdmFyIF9leGVjdXRlSG9vayA9IGZ1bmN0aW9uIF9leGVjdXRlSG9vayhlbnRyeVBvaW50LCBjdXJyZW50Tm9kZSwgZGF0YSkge1xuICAgICAgaWYgKCFob29rc1tlbnRyeVBvaW50XSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFycmF5Rm9yRWFjaChob29rc1tlbnRyeVBvaW50XSwgZnVuY3Rpb24gKGhvb2spIHtcbiAgICAgICAgaG9vay5jYWxsKERPTVB1cmlmeSwgY3VycmVudE5vZGUsIGRhdGEsIENPTkZJRyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX3Nhbml0aXplRWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwcm90ZWN0IG5vZGVOYW1lXG4gICAgICogQHByb3RlY3QgdGV4dENvbnRlbnRcbiAgICAgKiBAcHJvdGVjdCByZW1vdmVDaGlsZFxuICAgICAqXG4gICAgICogQHBhcmFtICAge05vZGV9IGN1cnJlbnROb2RlIHRvIGNoZWNrIGZvciBwZXJtaXNzaW9uIHRvIGV4aXN0XG4gICAgICogQHJldHVybiAge0Jvb2xlYW59IHRydWUgaWYgbm9kZSB3YXMga2lsbGVkLCBmYWxzZSBpZiBsZWZ0IGFsaXZlXG4gICAgICovXG4gICAgdmFyIF9zYW5pdGl6ZUVsZW1lbnRzID0gZnVuY3Rpb24gX3Nhbml0aXplRWxlbWVudHMoY3VycmVudE5vZGUpIHtcbiAgICAgIHZhciBjb250ZW50ID0gdm9pZCAwO1xuXG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICBfZXhlY3V0ZUhvb2soJ2JlZm9yZVNhbml0aXplRWxlbWVudHMnLCBjdXJyZW50Tm9kZSwgbnVsbCk7XG5cbiAgICAgIC8qIENoZWNrIGlmIGVsZW1lbnQgaXMgY2xvYmJlcmVkIG9yIGNhbiBjbG9iYmVyICovXG4gICAgICBpZiAoX2lzQ2xvYmJlcmVkKGN1cnJlbnROb2RlKSkge1xuICAgICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLyogQ2hlY2sgaWYgdGFnbmFtZSBjb250YWlucyBVbmljb2RlICovXG4gICAgICBpZiAoc3RyaW5nTWF0Y2goY3VycmVudE5vZGUubm9kZU5hbWUsIC9bXFx1MDA4MC1cXHVGRkZGXS8pKSB7XG4gICAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBOb3cgbGV0J3MgY2hlY2sgdGhlIGVsZW1lbnQncyB0eXBlIGFuZCBuYW1lICovXG4gICAgICB2YXIgdGFnTmFtZSA9IHRyYW5zZm9ybUNhc2VGdW5jKGN1cnJlbnROb2RlLm5vZGVOYW1lKTtcblxuICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgICAgX2V4ZWN1dGVIb29rKCd1cG9uU2FuaXRpemVFbGVtZW50JywgY3VycmVudE5vZGUsIHtcbiAgICAgICAgdGFnTmFtZTogdGFnTmFtZSxcbiAgICAgICAgYWxsb3dlZFRhZ3M6IEFMTE9XRURfVEFHU1xuICAgICAgfSk7XG5cbiAgICAgIC8qIERldGVjdCBtWFNTIGF0dGVtcHRzIGFidXNpbmcgbmFtZXNwYWNlIGNvbmZ1c2lvbiAqL1xuICAgICAgaWYgKCFfaXNOb2RlKGN1cnJlbnROb2RlLmZpcnN0RWxlbWVudENoaWxkKSAmJiAoIV9pc05vZGUoY3VycmVudE5vZGUuY29udGVudCkgfHwgIV9pc05vZGUoY3VycmVudE5vZGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZCkpICYmIHJlZ0V4cFRlc3QoLzxbL1xcd10vZywgY3VycmVudE5vZGUuaW5uZXJIVE1MKSAmJiByZWdFeHBUZXN0KC88Wy9cXHddL2csIGN1cnJlbnROb2RlLnRleHRDb250ZW50KSkge1xuICAgICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLyogTWl0aWdhdGUgYSBwcm9ibGVtIHdpdGggdGVtcGxhdGVzIGluc2lkZSBzZWxlY3QgKi9cbiAgICAgIGlmICh0YWdOYW1lID09PSAnc2VsZWN0JyAmJiByZWdFeHBUZXN0KC88dGVtcGxhdGUvaSwgY3VycmVudE5vZGUuaW5uZXJIVE1MKSkge1xuICAgICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLyogUmVtb3ZlIGVsZW1lbnQgaWYgYW55dGhpbmcgZm9yYmlkcyBpdHMgcHJlc2VuY2UgKi9cbiAgICAgIGlmICghQUxMT1dFRF9UQUdTW3RhZ05hbWVdIHx8IEZPUkJJRF9UQUdTW3RhZ05hbWVdKSB7XG4gICAgICAgIC8qIEtlZXAgY29udGVudCBleGNlcHQgZm9yIGJhZC1saXN0ZWQgZWxlbWVudHMgKi9cbiAgICAgICAgaWYgKEtFRVBfQ09OVEVOVCAmJiAhRk9SQklEX0NPTlRFTlRTW3RhZ05hbWVdKSB7XG4gICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGN1cnJlbnROb2RlKSB8fCBjdXJyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgIHZhciBjaGlsZE5vZGVzID0gZ2V0Q2hpbGROb2RlcyhjdXJyZW50Tm9kZSkgfHwgY3VycmVudE5vZGUuY2hpbGROb2RlcztcblxuICAgICAgICAgIGlmIChjaGlsZE5vZGVzICYmIHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZENvdW50ID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBjaGlsZENvdW50IC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2xvbmVOb2RlKGNoaWxkTm9kZXNbaV0sIHRydWUpLCBnZXROZXh0U2libGluZyhjdXJyZW50Tm9kZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghRk9SQklEX1RBR1NbdGFnTmFtZV0gJiYgX2Jhc2ljQ3VzdG9tRWxlbWVudFRlc3QodGFnTmFtZSkpIHtcbiAgICAgICAgICBpZiAoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgUmVnRXhwICYmIHJlZ0V4cFRlc3QoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrLCB0YWdOYW1lKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIGlmIChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sodGFnTmFtZSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBDaGVjayB3aGV0aGVyIGVsZW1lbnQgaGFzIGEgdmFsaWQgbmFtZXNwYWNlICovXG4gICAgICBpZiAoY3VycmVudE5vZGUgaW5zdGFuY2VvZiBFbGVtZW50ICYmICFfY2hlY2tWYWxpZE5hbWVzcGFjZShjdXJyZW50Tm9kZSkpIHtcbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICgodGFnTmFtZSA9PT0gJ25vc2NyaXB0JyB8fCB0YWdOYW1lID09PSAnbm9lbWJlZCcpICYmIHJlZ0V4cFRlc3QoLzxcXC9ubyhzY3JpcHR8ZW1iZWQpL2ksIGN1cnJlbnROb2RlLmlubmVySFRNTCkpIHtcbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8qIFNhbml0aXplIGVsZW1lbnQgY29udGVudCB0byBiZSB0ZW1wbGF0ZS1zYWZlICovXG4gICAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTICYmIGN1cnJlbnROb2RlLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgIC8qIEdldCB0aGUgZWxlbWVudCdzIHRleHQgY29udGVudCAqL1xuICAgICAgICBjb250ZW50ID0gY3VycmVudE5vZGUudGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnRlbnQgPSBzdHJpbmdSZXBsYWNlKGNvbnRlbnQsIE1VU1RBQ0hFX0VYUFIkJDEsICcgJyk7XG4gICAgICAgIGNvbnRlbnQgPSBzdHJpbmdSZXBsYWNlKGNvbnRlbnQsIEVSQl9FWFBSJCQxLCAnICcpO1xuICAgICAgICBpZiAoY3VycmVudE5vZGUudGV4dENvbnRlbnQgIT09IGNvbnRlbnQpIHtcbiAgICAgICAgICBhcnJheVB1c2goRE9NUHVyaWZ5LnJlbW92ZWQsIHsgZWxlbWVudDogY3VycmVudE5vZGUuY2xvbmVOb2RlKCkgfSk7XG4gICAgICAgICAgY3VycmVudE5vZGUudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgIF9leGVjdXRlSG9vaygnYWZ0ZXJTYW5pdGl6ZUVsZW1lbnRzJywgY3VycmVudE5vZGUsIG51bGwpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9pc1ZhbGlkQXR0cmlidXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGxjVGFnIExvd2VyY2FzZSB0YWcgbmFtZSBvZiBjb250YWluaW5nIGVsZW1lbnQuXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBsY05hbWUgTG93ZXJjYXNlIGF0dHJpYnV0ZSBuYW1lLlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gdmFsdWUgQXR0cmlidXRlIHZhbHVlLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBgdmFsdWVgIGlzIHZhbGlkLCBvdGhlcndpc2UgZmFsc2UuXG4gICAgICovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgICB2YXIgX2lzVmFsaWRBdHRyaWJ1dGUgPSBmdW5jdGlvbiBfaXNWYWxpZEF0dHJpYnV0ZShsY1RhZywgbGNOYW1lLCB2YWx1ZSkge1xuICAgICAgLyogTWFrZSBzdXJlIGF0dHJpYnV0ZSBjYW5ub3QgY2xvYmJlciAqL1xuICAgICAgaWYgKFNBTklUSVpFX0RPTSAmJiAobGNOYW1lID09PSAnaWQnIHx8IGxjTmFtZSA9PT0gJ25hbWUnKSAmJiAodmFsdWUgaW4gZG9jdW1lbnQgfHwgdmFsdWUgaW4gZm9ybUVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLyogQWxsb3cgdmFsaWQgZGF0YS0qIGF0dHJpYnV0ZXM6IEF0IGxlYXN0IG9uZSBjaGFyYWN0ZXIgYWZ0ZXIgXCItXCJcbiAgICAgICAgICAoaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZG9tLmh0bWwjZW1iZWRkaW5nLWN1c3RvbS1ub24tdmlzaWJsZS1kYXRhLXdpdGgtdGhlLWRhdGEtKi1hdHRyaWJ1dGVzKVxuICAgICAgICAgIFhNTC1jb21wYXRpYmxlIChodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbmZyYXN0cnVjdHVyZS5odG1sI3htbC1jb21wYXRpYmxlIGFuZCBodHRwOi8vd3d3LnczLm9yZy9UUi94bWwvI2QwZTgwNClcbiAgICAgICAgICBXZSBkb24ndCBuZWVkIHRvIGNoZWNrIHRoZSB2YWx1ZTsgaXQncyBhbHdheXMgVVJJIHNhZmUuICovXG4gICAgICBpZiAoQUxMT1dfREFUQV9BVFRSICYmICFGT1JCSURfQVRUUltsY05hbWVdICYmIHJlZ0V4cFRlc3QoREFUQV9BVFRSJCQxLCBsY05hbWUpKSA7IGVsc2UgaWYgKEFMTE9XX0FSSUFfQVRUUiAmJiByZWdFeHBUZXN0KEFSSUFfQVRUUiQkMSwgbGNOYW1lKSkgOyBlbHNlIGlmICghQUxMT1dFRF9BVFRSW2xjTmFtZV0gfHwgRk9SQklEX0FUVFJbbGNOYW1lXSkge1xuICAgICAgICBpZiAoXG4gICAgICAgIC8vIEZpcnN0IGNvbmRpdGlvbiBkb2VzIGEgdmVyeSBiYXNpYyBjaGVjayBpZiBhKSBpdCdzIGJhc2ljYWxseSBhIHZhbGlkIGN1c3RvbSBlbGVtZW50IHRhZ25hbWUgQU5EXG4gICAgICAgIC8vIGIpIGlmIHRoZSB0YWdOYW1lIHBhc3NlcyB3aGF0ZXZlciB0aGUgdXNlciBoYXMgY29uZmlndXJlZCBmb3IgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrXG4gICAgICAgIC8vIGFuZCBjKSBpZiB0aGUgYXR0cmlidXRlIG5hbWUgcGFzc2VzIHdoYXRldmVyIHRoZSB1c2VyIGhhcyBjb25maWd1cmVkIGZvciBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2tcbiAgICAgICAgX2Jhc2ljQ3VzdG9tRWxlbWVudFRlc3QobGNUYWcpICYmIChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBSZWdFeHAgJiYgcmVnRXhwVGVzdChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2ssIGxjVGFnKSB8fCBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sobGNUYWcpKSAmJiAoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrIGluc3RhbmNlb2YgUmVnRXhwICYmIHJlZ0V4cFRlc3QoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrLCBsY05hbWUpIHx8IENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjayBpbnN0YW5jZW9mIEZ1bmN0aW9uICYmIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjayhsY05hbWUpKSB8fFxuICAgICAgICAvLyBBbHRlcm5hdGl2ZSwgc2Vjb25kIGNvbmRpdGlvbiBjaGVja3MgaWYgaXQncyBhbiBgaXNgLWF0dHJpYnV0ZSwgQU5EXG4gICAgICAgIC8vIHRoZSB2YWx1ZSBwYXNzZXMgd2hhdGV2ZXIgdGhlIHVzZXIgaGFzIGNvbmZpZ3VyZWQgZm9yIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVja1xuICAgICAgICBsY05hbWUgPT09ICdpcycgJiYgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzICYmIChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBSZWdFeHAgJiYgcmVnRXhwVGVzdChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2ssIHZhbHVlKSB8fCBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sodmFsdWUpKSkgOyBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLyogQ2hlY2sgdmFsdWUgaXMgc2FmZS4gRmlyc3QsIGlzIGF0dHIgaW5lcnQ/IElmIHNvLCBpcyBzYWZlICovXG4gICAgICB9IGVsc2UgaWYgKFVSSV9TQUZFX0FUVFJJQlVURVNbbGNOYW1lXSkgOyBlbHNlIGlmIChyZWdFeHBUZXN0KElTX0FMTE9XRURfVVJJJCQxLCBzdHJpbmdSZXBsYWNlKHZhbHVlLCBBVFRSX1dISVRFU1BBQ0UkJDEsICcnKSkpIDsgZWxzZSBpZiAoKGxjTmFtZSA9PT0gJ3NyYycgfHwgbGNOYW1lID09PSAneGxpbms6aHJlZicgfHwgbGNOYW1lID09PSAnaHJlZicpICYmIGxjVGFnICE9PSAnc2NyaXB0JyAmJiBzdHJpbmdJbmRleE9mKHZhbHVlLCAnZGF0YTonKSA9PT0gMCAmJiBEQVRBX1VSSV9UQUdTW2xjVGFnXSkgOyBlbHNlIGlmIChBTExPV19VTktOT1dOX1BST1RPQ09MUyAmJiAhcmVnRXhwVGVzdChJU19TQ1JJUFRfT1JfREFUQSQkMSwgc3RyaW5nUmVwbGFjZSh2YWx1ZSwgQVRUUl9XSElURVNQQUNFJCQxLCAnJykpKSA7IGVsc2UgaWYgKCF2YWx1ZSkgOyBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX2Jhc2ljQ3VzdG9tRWxlbWVudENoZWNrXG4gICAgICogY2hlY2tzIGlmIGF0IGxlYXN0IG9uZSBkYXNoIGlzIGluY2x1ZGVkIGluIHRhZ05hbWUsIGFuZCBpdCdzIG5vdCB0aGUgZmlyc3QgY2hhclxuICAgICAqIGZvciBtb3JlIHNvcGhpc3RpY2F0ZWQgY2hlY2tpbmcgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvdmFsaWRhdGUtZWxlbWVudC1uYW1lXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWUgbmFtZSBvZiB0aGUgdGFnIG9mIHRoZSBub2RlIHRvIHNhbml0aXplXG4gICAgICovXG4gICAgdmFyIF9iYXNpY0N1c3RvbUVsZW1lbnRUZXN0ID0gZnVuY3Rpb24gX2Jhc2ljQ3VzdG9tRWxlbWVudFRlc3QodGFnTmFtZSkge1xuICAgICAgcmV0dXJuIHRhZ05hbWUuaW5kZXhPZignLScpID4gMDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX3Nhbml0aXplQXR0cmlidXRlc1xuICAgICAqXG4gICAgICogQHByb3RlY3QgYXR0cmlidXRlc1xuICAgICAqIEBwcm90ZWN0IG5vZGVOYW1lXG4gICAgICogQHByb3RlY3QgcmVtb3ZlQXR0cmlidXRlXG4gICAgICogQHByb3RlY3Qgc2V0QXR0cmlidXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOb2RlfSBjdXJyZW50Tm9kZSB0byBzYW5pdGl6ZVxuICAgICAqL1xuICAgIHZhciBfc2FuaXRpemVBdHRyaWJ1dGVzID0gZnVuY3Rpb24gX3Nhbml0aXplQXR0cmlidXRlcyhjdXJyZW50Tm9kZSkge1xuICAgICAgdmFyIGF0dHIgPSB2b2lkIDA7XG4gICAgICB2YXIgdmFsdWUgPSB2b2lkIDA7XG4gICAgICB2YXIgbGNOYW1lID0gdm9pZCAwO1xuICAgICAgdmFyIGwgPSB2b2lkIDA7XG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICBfZXhlY3V0ZUhvb2soJ2JlZm9yZVNhbml0aXplQXR0cmlidXRlcycsIGN1cnJlbnROb2RlLCBudWxsKTtcblxuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBjdXJyZW50Tm9kZS5hdHRyaWJ1dGVzO1xuXG4gICAgICAvKiBDaGVjayBpZiB3ZSBoYXZlIGF0dHJpYnV0ZXM7IGlmIG5vdCB3ZSBtaWdodCBoYXZlIGEgdGV4dCBub2RlICovXG5cbiAgICAgIGlmICghYXR0cmlidXRlcykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBob29rRXZlbnQgPSB7XG4gICAgICAgIGF0dHJOYW1lOiAnJyxcbiAgICAgICAgYXR0clZhbHVlOiAnJyxcbiAgICAgICAga2VlcEF0dHI6IHRydWUsXG4gICAgICAgIGFsbG93ZWRBdHRyaWJ1dGVzOiBBTExPV0VEX0FUVFJcbiAgICAgIH07XG4gICAgICBsID0gYXR0cmlidXRlcy5sZW5ndGg7XG5cbiAgICAgIC8qIEdvIGJhY2t3YXJkcyBvdmVyIGFsbCBhdHRyaWJ1dGVzOyBzYWZlbHkgcmVtb3ZlIGJhZCBvbmVzICovXG4gICAgICB3aGlsZSAobC0tKSB7XG4gICAgICAgIGF0dHIgPSBhdHRyaWJ1dGVzW2xdO1xuICAgICAgICB2YXIgX2F0dHIgPSBhdHRyLFxuICAgICAgICAgICAgbmFtZSA9IF9hdHRyLm5hbWUsXG4gICAgICAgICAgICBuYW1lc3BhY2VVUkkgPSBfYXR0ci5uYW1lc3BhY2VVUkk7XG5cbiAgICAgICAgdmFsdWUgPSBzdHJpbmdUcmltKGF0dHIudmFsdWUpO1xuICAgICAgICBsY05hbWUgPSB0cmFuc2Zvcm1DYXNlRnVuYyhuYW1lKTtcblxuICAgICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICAgIGhvb2tFdmVudC5hdHRyTmFtZSA9IGxjTmFtZTtcbiAgICAgICAgaG9va0V2ZW50LmF0dHJWYWx1ZSA9IHZhbHVlO1xuICAgICAgICBob29rRXZlbnQua2VlcEF0dHIgPSB0cnVlO1xuICAgICAgICBob29rRXZlbnQuZm9yY2VLZWVwQXR0ciA9IHVuZGVmaW5lZDsgLy8gQWxsb3dzIGRldmVsb3BlcnMgdG8gc2VlIHRoaXMgaXMgYSBwcm9wZXJ0eSB0aGV5IGNhbiBzZXRcbiAgICAgICAgX2V4ZWN1dGVIb29rKCd1cG9uU2FuaXRpemVBdHRyaWJ1dGUnLCBjdXJyZW50Tm9kZSwgaG9va0V2ZW50KTtcbiAgICAgICAgdmFsdWUgPSBob29rRXZlbnQuYXR0clZhbHVlO1xuICAgICAgICAvKiBEaWQgdGhlIGhvb2tzIGFwcHJvdmUgb2YgdGhlIGF0dHJpYnV0ZT8gKi9cbiAgICAgICAgaWYgKGhvb2tFdmVudC5mb3JjZUtlZXBBdHRyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBSZW1vdmUgYXR0cmlidXRlICovXG4gICAgICAgIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgY3VycmVudE5vZGUpO1xuXG4gICAgICAgIC8qIERpZCB0aGUgaG9va3MgYXBwcm92ZSBvZiB0aGUgYXR0cmlidXRlPyAqL1xuICAgICAgICBpZiAoIWhvb2tFdmVudC5rZWVwQXR0cikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogV29yayBhcm91bmQgYSBzZWN1cml0eSBpc3N1ZSBpbiBqUXVlcnkgMy4wICovXG4gICAgICAgIGlmIChyZWdFeHBUZXN0KC9cXC8+L2ksIHZhbHVlKSkge1xuICAgICAgICAgIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgY3VycmVudE5vZGUpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogU2FuaXRpemUgYXR0cmlidXRlIGNvbnRlbnQgdG8gYmUgdGVtcGxhdGUtc2FmZSAqL1xuICAgICAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTKSB7XG4gICAgICAgICAgdmFsdWUgPSBzdHJpbmdSZXBsYWNlKHZhbHVlLCBNVVNUQUNIRV9FWFBSJCQxLCAnICcpO1xuICAgICAgICAgIHZhbHVlID0gc3RyaW5nUmVwbGFjZSh2YWx1ZSwgRVJCX0VYUFIkJDEsICcgJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBJcyBgdmFsdWVgIHZhbGlkIGZvciB0aGlzIGF0dHJpYnV0ZT8gKi9cbiAgICAgICAgdmFyIGxjVGFnID0gdHJhbnNmb3JtQ2FzZUZ1bmMoY3VycmVudE5vZGUubm9kZU5hbWUpO1xuICAgICAgICBpZiAoIV9pc1ZhbGlkQXR0cmlidXRlKGxjVGFnLCBsY05hbWUsIHZhbHVlKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogSGFuZGxlIGludmFsaWQgZGF0YS0qIGF0dHJpYnV0ZSBzZXQgYnkgdHJ5LWNhdGNoaW5nIGl0ICovXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKG5hbWVzcGFjZVVSSSkge1xuICAgICAgICAgICAgY3VycmVudE5vZGUuc2V0QXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8qIEZhbGxiYWNrIHRvIHNldEF0dHJpYnV0ZSgpIGZvciBicm93c2VyLXVucmVjb2duaXplZCBuYW1lc3BhY2VzIGUuZy4gXCJ4LXNjaGVtYVwiLiAqL1xuICAgICAgICAgICAgY3VycmVudE5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhcnJheVBvcChET01QdXJpZnkucmVtb3ZlZCk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgICB9XG5cbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgIF9leGVjdXRlSG9vaygnYWZ0ZXJTYW5pdGl6ZUF0dHJpYnV0ZXMnLCBjdXJyZW50Tm9kZSwgbnVsbCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9zYW5pdGl6ZVNoYWRvd0RPTVxuICAgICAqXG4gICAgICogQHBhcmFtICB7RG9jdW1lbnRGcmFnbWVudH0gZnJhZ21lbnQgdG8gaXRlcmF0ZSBvdmVyIHJlY3Vyc2l2ZWx5XG4gICAgICovXG4gICAgdmFyIF9zYW5pdGl6ZVNoYWRvd0RPTSA9IGZ1bmN0aW9uIF9zYW5pdGl6ZVNoYWRvd0RPTShmcmFnbWVudCkge1xuICAgICAgdmFyIHNoYWRvd05vZGUgPSB2b2lkIDA7XG4gICAgICB2YXIgc2hhZG93SXRlcmF0b3IgPSBfY3JlYXRlSXRlcmF0b3IoZnJhZ21lbnQpO1xuXG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICBfZXhlY3V0ZUhvb2soJ2JlZm9yZVNhbml0aXplU2hhZG93RE9NJywgZnJhZ21lbnQsIG51bGwpO1xuXG4gICAgICB3aGlsZSAoc2hhZG93Tm9kZSA9IHNoYWRvd0l0ZXJhdG9yLm5leHROb2RlKCkpIHtcbiAgICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgICAgICBfZXhlY3V0ZUhvb2soJ3Vwb25TYW5pdGl6ZVNoYWRvd05vZGUnLCBzaGFkb3dOb2RlLCBudWxsKTtcblxuICAgICAgICAvKiBTYW5pdGl6ZSB0YWdzIGFuZCBlbGVtZW50cyAqL1xuICAgICAgICBpZiAoX3Nhbml0aXplRWxlbWVudHMoc2hhZG93Tm9kZSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIERlZXAgc2hhZG93IERPTSBkZXRlY3RlZCAqL1xuICAgICAgICBpZiAoc2hhZG93Tm9kZS5jb250ZW50IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xuICAgICAgICAgIF9zYW5pdGl6ZVNoYWRvd0RPTShzaGFkb3dOb2RlLmNvbnRlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogQ2hlY2sgYXR0cmlidXRlcywgc2FuaXRpemUgaWYgbmVjZXNzYXJ5ICovXG4gICAgICAgIF9zYW5pdGl6ZUF0dHJpYnV0ZXMoc2hhZG93Tm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgIF9leGVjdXRlSG9vaygnYWZ0ZXJTYW5pdGl6ZVNoYWRvd0RPTScsIGZyYWdtZW50LCBudWxsKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2FuaXRpemVcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHByb3ZpZGluZyBjb3JlIHNhbml0YXRpb24gZnVuY3Rpb25hbGl0eVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd8Tm9kZX0gZGlydHkgc3RyaW5nIG9yIERPTSBub2RlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgICBET01QdXJpZnkuc2FuaXRpemUgPSBmdW5jdGlvbiAoZGlydHksIGNmZykge1xuICAgICAgdmFyIGJvZHkgPSB2b2lkIDA7XG4gICAgICB2YXIgaW1wb3J0ZWROb2RlID0gdm9pZCAwO1xuICAgICAgdmFyIGN1cnJlbnROb2RlID0gdm9pZCAwO1xuICAgICAgdmFyIG9sZE5vZGUgPSB2b2lkIDA7XG4gICAgICB2YXIgcmV0dXJuTm9kZSA9IHZvaWQgMDtcbiAgICAgIC8qIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgc3RyaW5nIHRvIHNhbml0aXplLlxuICAgICAgICBETyBOT1QgcmV0dXJuIGVhcmx5LCBhcyB0aGlzIHdpbGwgcmV0dXJuIHRoZSB3cm9uZyB0eXBlIGlmXG4gICAgICAgIHRoZSB1c2VyIGhhcyByZXF1ZXN0ZWQgYSBET00gb2JqZWN0IHJhdGhlciB0aGFuIGEgc3RyaW5nICovXG4gICAgICBJU19FTVBUWV9JTlBVVCA9ICFkaXJ0eTtcbiAgICAgIGlmIChJU19FTVBUWV9JTlBVVCkge1xuICAgICAgICBkaXJ0eSA9ICc8IS0tPic7XG4gICAgICB9XG5cbiAgICAgIC8qIFN0cmluZ2lmeSwgaW4gY2FzZSBkaXJ0eSBpcyBhbiBvYmplY3QgKi9cbiAgICAgIGlmICh0eXBlb2YgZGlydHkgIT09ICdzdHJpbmcnICYmICFfaXNOb2RlKGRpcnR5KSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVnYXRlZC1jb25kaXRpb25cbiAgICAgICAgaWYgKHR5cGVvZiBkaXJ0eS50b1N0cmluZyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRocm93IHR5cGVFcnJvckNyZWF0ZSgndG9TdHJpbmcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXJ0eSA9IGRpcnR5LnRvU3RyaW5nKCk7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkaXJ0eSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IHR5cGVFcnJvckNyZWF0ZSgnZGlydHkgaXMgbm90IGEgc3RyaW5nLCBhYm9ydGluZycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiBDaGVjayB3ZSBjYW4gcnVuLiBPdGhlcndpc2UgZmFsbCBiYWNrIG9yIGlnbm9yZSAqL1xuICAgICAgaWYgKCFET01QdXJpZnkuaXNTdXBwb3J0ZWQpIHtcbiAgICAgICAgaWYgKF90eXBlb2Yod2luZG93LnRvU3RhdGljSFRNTCkgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB3aW5kb3cudG9TdGF0aWNIVE1MID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkaXJ0eSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cudG9TdGF0aWNIVE1MKGRpcnR5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoX2lzTm9kZShkaXJ0eSkpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cudG9TdGF0aWNIVE1MKGRpcnR5Lm91dGVySFRNTCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRpcnR5O1xuICAgICAgfVxuXG4gICAgICAvKiBBc3NpZ24gY29uZmlnIHZhcnMgKi9cbiAgICAgIGlmICghU0VUX0NPTkZJRykge1xuICAgICAgICBfcGFyc2VDb25maWcoY2ZnKTtcbiAgICAgIH1cblxuICAgICAgLyogQ2xlYW4gdXAgcmVtb3ZlZCBlbGVtZW50cyAqL1xuICAgICAgRE9NUHVyaWZ5LnJlbW92ZWQgPSBbXTtcblxuICAgICAgLyogQ2hlY2sgaWYgZGlydHkgaXMgY29ycmVjdGx5IHR5cGVkIGZvciBJTl9QTEFDRSAqL1xuICAgICAgaWYgKHR5cGVvZiBkaXJ0eSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgSU5fUExBQ0UgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKElOX1BMQUNFKSB7XG4gICAgICAgIC8qIERvIHNvbWUgZWFybHkgcHJlLXNhbml0aXphdGlvbiB0byBhdm9pZCB1bnNhZmUgcm9vdCBub2RlcyAqL1xuICAgICAgICBpZiAoZGlydHkubm9kZU5hbWUpIHtcbiAgICAgICAgICB2YXIgdGFnTmFtZSA9IHRyYW5zZm9ybUNhc2VGdW5jKGRpcnR5Lm5vZGVOYW1lKTtcbiAgICAgICAgICBpZiAoIUFMTE9XRURfVEFHU1t0YWdOYW1lXSB8fCBGT1JCSURfVEFHU1t0YWdOYW1lXSkge1xuICAgICAgICAgICAgdGhyb3cgdHlwZUVycm9yQ3JlYXRlKCdyb290IG5vZGUgaXMgZm9yYmlkZGVuIGFuZCBjYW5ub3QgYmUgc2FuaXRpemVkIGluLXBsYWNlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGRpcnR5IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAvKiBJZiBkaXJ0eSBpcyBhIERPTSBlbGVtZW50LCBhcHBlbmQgdG8gYW4gZW1wdHkgZG9jdW1lbnQgdG8gYXZvaWRcbiAgICAgICAgICAgZWxlbWVudHMgYmVpbmcgc3RyaXBwZWQgYnkgdGhlIHBhcnNlciAqL1xuICAgICAgICBib2R5ID0gX2luaXREb2N1bWVudCgnPCEtLS0tPicpO1xuICAgICAgICBpbXBvcnRlZE5vZGUgPSBib2R5Lm93bmVyRG9jdW1lbnQuaW1wb3J0Tm9kZShkaXJ0eSwgdHJ1ZSk7XG4gICAgICAgIGlmIChpbXBvcnRlZE5vZGUubm9kZVR5cGUgPT09IDEgJiYgaW1wb3J0ZWROb2RlLm5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICAgICAgICAvKiBOb2RlIGlzIGFscmVhZHkgYSBib2R5LCB1c2UgYXMgaXMgKi9cbiAgICAgICAgICBib2R5ID0gaW1wb3J0ZWROb2RlO1xuICAgICAgICB9IGVsc2UgaWYgKGltcG9ydGVkTm9kZS5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgICAgICAgYm9keSA9IGltcG9ydGVkTm9kZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItZG9tLW5vZGUtYXBwZW5kXG4gICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChpbXBvcnRlZE5vZGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBFeGl0IGRpcmVjdGx5IGlmIHdlIGhhdmUgbm90aGluZyB0byBkbyAqL1xuICAgICAgICBpZiAoIVJFVFVSTl9ET00gJiYgIVNBRkVfRk9SX1RFTVBMQVRFUyAmJiAhV0hPTEVfRE9DVU1FTlQgJiZcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWluY2x1ZGVzXG4gICAgICAgIGRpcnR5LmluZGV4T2YoJzwnKSA9PT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1c3RlZFR5cGVzUG9saWN5ICYmIFJFVFVSTl9UUlVTVEVEX1RZUEUgPyB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlSFRNTChkaXJ0eSkgOiBkaXJ0eTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIEluaXRpYWxpemUgdGhlIGRvY3VtZW50IHRvIHdvcmsgb24gKi9cbiAgICAgICAgYm9keSA9IF9pbml0RG9jdW1lbnQoZGlydHkpO1xuXG4gICAgICAgIC8qIENoZWNrIHdlIGhhdmUgYSBET00gbm9kZSBmcm9tIHRoZSBkYXRhICovXG4gICAgICAgIGlmICghYm9keSkge1xuICAgICAgICAgIHJldHVybiBSRVRVUk5fRE9NID8gbnVsbCA6IFJFVFVSTl9UUlVTVEVEX1RZUEUgPyBlbXB0eUhUTUwgOiAnJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiBSZW1vdmUgZmlyc3QgZWxlbWVudCBub2RlIChvdXJzKSBpZiBGT1JDRV9CT0RZIGlzIHNldCAqL1xuICAgICAgaWYgKGJvZHkgJiYgRk9SQ0VfQk9EWSkge1xuICAgICAgICBfZm9yY2VSZW1vdmUoYm9keS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgLyogR2V0IG5vZGUgaXRlcmF0b3IgKi9cbiAgICAgIHZhciBub2RlSXRlcmF0b3IgPSBfY3JlYXRlSXRlcmF0b3IoSU5fUExBQ0UgPyBkaXJ0eSA6IGJvZHkpO1xuXG4gICAgICAvKiBOb3cgc3RhcnQgaXRlcmF0aW5nIG92ZXIgdGhlIGNyZWF0ZWQgZG9jdW1lbnQgKi9cbiAgICAgIHdoaWxlIChjdXJyZW50Tm9kZSA9IG5vZGVJdGVyYXRvci5uZXh0Tm9kZSgpKSB7XG4gICAgICAgIC8qIEZpeCBJRSdzIHN0cmFuZ2UgYmVoYXZpb3Igd2l0aCBtYW5pcHVsYXRlZCB0ZXh0Tm9kZXMgIzg5ICovXG4gICAgICAgIGlmIChjdXJyZW50Tm9kZS5ub2RlVHlwZSA9PT0gMyAmJiBjdXJyZW50Tm9kZSA9PT0gb2xkTm9kZSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogU2FuaXRpemUgdGFncyBhbmQgZWxlbWVudHMgKi9cbiAgICAgICAgaWYgKF9zYW5pdGl6ZUVsZW1lbnRzKGN1cnJlbnROb2RlKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogU2hhZG93IERPTSBkZXRlY3RlZCwgc2FuaXRpemUgaXQgKi9cbiAgICAgICAgaWYgKGN1cnJlbnROb2RlLmNvbnRlbnQgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgICAgX3Nhbml0aXplU2hhZG93RE9NKGN1cnJlbnROb2RlLmNvbnRlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogQ2hlY2sgYXR0cmlidXRlcywgc2FuaXRpemUgaWYgbmVjZXNzYXJ5ICovXG4gICAgICAgIF9zYW5pdGl6ZUF0dHJpYnV0ZXMoY3VycmVudE5vZGUpO1xuXG4gICAgICAgIG9sZE5vZGUgPSBjdXJyZW50Tm9kZTtcbiAgICAgIH1cblxuICAgICAgb2xkTm9kZSA9IG51bGw7XG5cbiAgICAgIC8qIElmIHdlIHNhbml0aXplZCBgZGlydHlgIGluLXBsYWNlLCByZXR1cm4gaXQuICovXG4gICAgICBpZiAoSU5fUExBQ0UpIHtcbiAgICAgICAgcmV0dXJuIGRpcnR5O1xuICAgICAgfVxuXG4gICAgICAvKiBSZXR1cm4gc2FuaXRpemVkIHN0cmluZyBvciBET00gKi9cbiAgICAgIGlmIChSRVRVUk5fRE9NKSB7XG4gICAgICAgIGlmIChSRVRVUk5fRE9NX0ZSQUdNRU5UKSB7XG4gICAgICAgICAgcmV0dXJuTm9kZSA9IGNyZWF0ZURvY3VtZW50RnJhZ21lbnQuY2FsbChib2R5Lm93bmVyRG9jdW1lbnQpO1xuXG4gICAgICAgICAgd2hpbGUgKGJvZHkuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWRvbS1ub2RlLWFwcGVuZFxuICAgICAgICAgICAgcmV0dXJuTm9kZS5hcHBlbmRDaGlsZChib2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm5Ob2RlID0gYm9keTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBTExPV0VEX0FUVFIuc2hhZG93cm9vdCkge1xuICAgICAgICAgIC8qXG4gICAgICAgICAgICBBZG9wdE5vZGUoKSBpcyBub3QgdXNlZCBiZWNhdXNlIGludGVybmFsIHN0YXRlIGlzIG5vdCByZXNldFxuICAgICAgICAgICAgKGUuZy4gdGhlIHBhc3QgbmFtZXMgbWFwIG9mIGEgSFRNTEZvcm1FbGVtZW50KSwgdGhpcyBpcyBzYWZlXG4gICAgICAgICAgICBpbiB0aGVvcnkgYnV0IHdlIHdvdWxkIHJhdGhlciBub3QgcmlzayBhbm90aGVyIGF0dGFjayB2ZWN0b3IuXG4gICAgICAgICAgICBUaGUgc3RhdGUgdGhhdCBpcyBjbG9uZWQgYnkgaW1wb3J0Tm9kZSgpIGlzIGV4cGxpY2l0bHkgZGVmaW5lZFxuICAgICAgICAgICAgYnkgdGhlIHNwZWNzLlxuICAgICAgICAgICovXG4gICAgICAgICAgcmV0dXJuTm9kZSA9IGltcG9ydE5vZGUuY2FsbChvcmlnaW5hbERvY3VtZW50LCByZXR1cm5Ob2RlLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXR1cm5Ob2RlO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2VyaWFsaXplZEhUTUwgPSBXSE9MRV9ET0NVTUVOVCA/IGJvZHkub3V0ZXJIVE1MIDogYm9keS5pbm5lckhUTUw7XG5cbiAgICAgIC8qIFNhbml0aXplIGZpbmFsIHN0cmluZyB0ZW1wbGF0ZS1zYWZlICovXG4gICAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTKSB7XG4gICAgICAgIHNlcmlhbGl6ZWRIVE1MID0gc3RyaW5nUmVwbGFjZShzZXJpYWxpemVkSFRNTCwgTVVTVEFDSEVfRVhQUiQkMSwgJyAnKTtcbiAgICAgICAgc2VyaWFsaXplZEhUTUwgPSBzdHJpbmdSZXBsYWNlKHNlcmlhbGl6ZWRIVE1MLCBFUkJfRVhQUiQkMSwgJyAnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydXN0ZWRUeXBlc1BvbGljeSAmJiBSRVRVUk5fVFJVU1RFRF9UWVBFID8gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwoc2VyaWFsaXplZEhUTUwpIDogc2VyaWFsaXplZEhUTUw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gc2V0IHRoZSBjb25maWd1cmF0aW9uIG9uY2VcbiAgICAgKiBzZXRDb25maWdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgKi9cbiAgICBET01QdXJpZnkuc2V0Q29uZmlnID0gZnVuY3Rpb24gKGNmZykge1xuICAgICAgX3BhcnNlQ29uZmlnKGNmZyk7XG4gICAgICBTRVRfQ09ORklHID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgdGhlIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBjbGVhckNvbmZpZ1xuICAgICAqXG4gICAgICovXG4gICAgRE9NUHVyaWZ5LmNsZWFyQ29uZmlnID0gZnVuY3Rpb24gKCkge1xuICAgICAgQ09ORklHID0gbnVsbDtcbiAgICAgIFNFVF9DT05GSUcgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHVibGljIG1ldGhvZCB0byBjaGVjayBpZiBhbiBhdHRyaWJ1dGUgdmFsdWUgaXMgdmFsaWQuXG4gICAgICogVXNlcyBsYXN0IHNldCBjb25maWcsIGlmIGFueS4gT3RoZXJ3aXNlLCB1c2VzIGNvbmZpZyBkZWZhdWx0cy5cbiAgICAgKiBpc1ZhbGlkQXR0cmlidXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRhZyBUYWcgbmFtZSBvZiBjb250YWluaW5nIGVsZW1lbnQuXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBhdHRyIEF0dHJpYnV0ZSBuYW1lLlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gdmFsdWUgQXR0cmlidXRlIHZhbHVlLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBgdmFsdWVgIGlzIHZhbGlkLiBPdGhlcndpc2UsIHJldHVybnMgZmFsc2UuXG4gICAgICovXG4gICAgRE9NUHVyaWZ5LmlzVmFsaWRBdHRyaWJ1dGUgPSBmdW5jdGlvbiAodGFnLCBhdHRyLCB2YWx1ZSkge1xuICAgICAgLyogSW5pdGlhbGl6ZSBzaGFyZWQgY29uZmlnIHZhcnMgaWYgbmVjZXNzYXJ5LiAqL1xuICAgICAgaWYgKCFDT05GSUcpIHtcbiAgICAgICAgX3BhcnNlQ29uZmlnKHt9KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxjVGFnID0gdHJhbnNmb3JtQ2FzZUZ1bmModGFnKTtcbiAgICAgIHZhciBsY05hbWUgPSB0cmFuc2Zvcm1DYXNlRnVuYyhhdHRyKTtcbiAgICAgIHJldHVybiBfaXNWYWxpZEF0dHJpYnV0ZShsY1RhZywgbGNOYW1lLCB2YWx1ZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZEhvb2tcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHRvIGFkZCBET01QdXJpZnkgaG9va3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBlbnRyeVBvaW50IGVudHJ5IHBvaW50IGZvciB0aGUgaG9vayB0byBhZGRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBob29rRnVuY3Rpb24gZnVuY3Rpb24gdG8gZXhlY3V0ZVxuICAgICAqL1xuICAgIERPTVB1cmlmeS5hZGRIb29rID0gZnVuY3Rpb24gKGVudHJ5UG9pbnQsIGhvb2tGdW5jdGlvbikge1xuICAgICAgaWYgKHR5cGVvZiBob29rRnVuY3Rpb24gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBob29rc1tlbnRyeVBvaW50XSA9IGhvb2tzW2VudHJ5UG9pbnRdIHx8IFtdO1xuICAgICAgYXJyYXlQdXNoKGhvb2tzW2VudHJ5UG9pbnRdLCBob29rRnVuY3Rpb24pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVIb29rXG4gICAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgYSBET01QdXJpZnkgaG9vayBhdCBhIGdpdmVuIGVudHJ5UG9pbnRcbiAgICAgKiAocG9wcyBpdCBmcm9tIHRoZSBzdGFjayBvZiBob29rcyBpZiBtb3JlIGFyZSBwcmVzZW50KVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGVudHJ5UG9pbnQgZW50cnkgcG9pbnQgZm9yIHRoZSBob29rIHRvIHJlbW92ZVxuICAgICAqL1xuICAgIERPTVB1cmlmeS5yZW1vdmVIb29rID0gZnVuY3Rpb24gKGVudHJ5UG9pbnQpIHtcbiAgICAgIGlmIChob29rc1tlbnRyeVBvaW50XSkge1xuICAgICAgICBhcnJheVBvcChob29rc1tlbnRyeVBvaW50XSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZUhvb2tzXG4gICAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgYWxsIERPTVB1cmlmeSBob29rcyBhdCBhIGdpdmVuIGVudHJ5UG9pbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZW50cnlQb2ludCBlbnRyeSBwb2ludCBmb3IgdGhlIGhvb2tzIHRvIHJlbW92ZVxuICAgICAqL1xuICAgIERPTVB1cmlmeS5yZW1vdmVIb29rcyA9IGZ1bmN0aW9uIChlbnRyeVBvaW50KSB7XG4gICAgICBpZiAoaG9va3NbZW50cnlQb2ludF0pIHtcbiAgICAgICAgaG9va3NbZW50cnlQb2ludF0gPSBbXTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlQWxsSG9va3NcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHRvIHJlbW92ZSBhbGwgRE9NUHVyaWZ5IGhvb2tzXG4gICAgICpcbiAgICAgKi9cbiAgICBET01QdXJpZnkucmVtb3ZlQWxsSG9va3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBob29rcyA9IHt9O1xuICAgIH07XG5cbiAgICByZXR1cm4gRE9NUHVyaWZ5O1xuICB9XG5cbiAgdmFyIHB1cmlmeSA9IGNyZWF0ZURPTVB1cmlmeSgpO1xuXG4gIHJldHVybiBwdXJpZnk7XG5cbn0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXB1cmlmeS5qcy5tYXBcbiIsIjxzdmVsdGU6b3B0aW9ucyB0YWc9XCJueWxhcy1tZXNzYWdlLWJvZHlcIiAvPlxuXG48IS0tIFRoaXMgY29tcG9uZW50IGlzIGJlaW5nIHVzZWQgdG8gcmVuZGVyIE1lc3NhZ2UgYm9keSBpbiBFbWFpbCBjb21wb25lbnQuIFxuICBUaGlzIGlzIHRvIGVuc3VyZSB0aGUgc3R5bGVzIGluIHRoZSBodG1sIG1lc3NhZ2UgYm9keSBhcmUgZW5jYXBzdWxhdGVkIGFuZCBcbiAgZG9lcyBub3QgYWZmZWN0IHRoZSBnbG9iYWwgY29tcG9uZW50IGVuY2xvc2luZyBpdCAtLT5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGlzRmlsZUFuQXR0YWNobWVudCB9IGZyb20gXCJAY29tbW9ucy9tZXRob2RzL2lzRmlsZUFuQXR0YWNobWVudFwiO1xuICBpbXBvcnQgKiBhcyBET01QdXJpZnkgZnJvbSBcImRvbXB1cmlmeVwiO1xuICBpbXBvcnQgeyBnZXRFdmVudERpc3BhdGNoZXIgfSBmcm9tIFwiQGNvbW1vbnMvbWV0aG9kcy9jb21wb25lbnRcIjtcbiAgaW1wb3J0IHsgZ2V0X2N1cnJlbnRfY29tcG9uZW50LCBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZS9pbnRlcm5hbFwiO1xuICBpbXBvcnQge1xuICAgIERpc2FsbG93ZWRDb250ZW50VHlwZXMsXG4gICAgSW5saW5lSW1hZ2VUeXBlcyxcbiAgfSBmcm9tIFwiQGNvbW1vbnMvY29uc3RhbnRzL2F0dGFjaG1lbnQtY29udGVudC10eXBlc1wiO1xuXG4gIGV4cG9ydCBsZXQgbWVzc2FnZTtcbiAgZXhwb3J0IGxldCBib2R5O1xuXG4gIGNvbnN0IGRpc3BhdGNoRXZlbnQgPSBnZXRFdmVudERpc3BhdGNoZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGRvd25sb2FkU2VsZWN0ZWRGaWxlKGV2ZW50LCBmaWxlKSB7XG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgZGlzcGF0Y2hFdmVudChcImRvd25sb2FkQ2xpY2tlZFwiLCB7XG4gICAgICBldmVudCxcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBmaWxlLFxuICAgIH0pO1xuICB9XG5cbiAgbGV0IGF0dGFjaGVkRmlsZXMgPSBbXTtcblxuICBvbk1vdW50KCgpID0+IHtcbiAgICBpZiAobWVzc2FnZSAmJiBtZXNzYWdlLmZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAoY29uc3QgW2ZpbGVJbmRleCwgZmlsZV0gb2YgbWVzc2FnZS5maWxlcy5lbnRyaWVzKCkpIHtcbiAgICAgICAgaWYgKGlzRmlsZUFuQXR0YWNobWVudChmaWxlKSkge1xuICAgICAgICAgIGF0dGFjaGVkRmlsZXMgPSBbLi4uYXR0YWNoZWRGaWxlcywgbWVzc2FnZS5maWxlc1tmaWxlSW5kZXhdXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4gIGRpdiB7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG5cbiAgICBkaXYuYXR0YWNobWVudCB7XG4gICAgICBtYXJnaW46IDFyZW0gMCAwIDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAwLjVyZW07XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICAgICAgcGFkZGluZzogMC4zcmVtIDFyZW07XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmV5LWxpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zdHlsZT5cblxuPGRpdj5cbiAgeyNpZiBtZXNzYWdlfVxuICAgIHsjaWYgdHlwZW9mIGJvZHkgIT09IG51bGx9XG4gICAgICB7QGh0bWwgRE9NUHVyaWZ5LnNhbml0aXplKGJvZHkpfVxuICAgIHsvaWZ9XG4gICAgPGRpdiBjbGFzcz1cImF0dGFjaG1lbnRcIj5cbiAgICAgIHsjaWYgYXR0YWNoZWRGaWxlcyAmJiBBcnJheS5pc0FycmF5KGF0dGFjaGVkRmlsZXMpICYmIGF0dGFjaGVkRmlsZXMubGVuZ3RoID4gMH1cbiAgICAgICAgeyNlYWNoIGF0dGFjaGVkRmlsZXMgYXMgZmlsZX1cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbjpjbGlja3xzdG9wUHJvcGFnYXRpb249eyhlKSA9PiBkb3dubG9hZFNlbGVjdGVkRmlsZShlLCBmaWxlKX0+XG4gICAgICAgICAgICB7ZmlsZS5maWxlbmFtZSB8fCBmaWxlLmlkfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7L2VhY2h9XG4gICAgICB7L2lmfVxuICAgIDwvZGl2PlxuICB7L2lmfVxuPC9kaXY+XG4iLCI8c3ZlbHRlOm9wdGlvbnMgdGFnPVwibnlsYXMtdG9vbHRpcFwiIC8+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gXCJzdmVsdGUvaW50ZXJuYWxcIjtcbiAgaW1wb3J0IHsgZ2V0RXZlbnREaXNwYXRjaGVyIH0gZnJvbSBcIkBjb21tb25zL21ldGhvZHMvY29tcG9uZW50XCI7XG4gIGNvbnN0IGRpc3BhdGNoRXZlbnQgPSBnZXRFdmVudERpc3BhdGNoZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIC8qKlxuICAgKiBBZGQgdGhpcyBDU1MgdG8gdGhlIHBhcmVudCBjb21wb25lbnQ6IG55bGFzLXRvb2x0aXAgeyBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICogVGhpcyBlbnN1cmVzIHRoZSB0b29sdGlwIGlzIHBvc2l0aW9uZWQgYWJzb2x1dGVseSB0byB0aGUgdG9vbHRpcCBjb21wb25lbnQgcmF0aGVyIHRoYW4gdGhlIHBhZ2VcbiAgICoqL1xuXG4gIC8vICNyZWdpb24gdG9vbHRpcCBwcm9wc1xuICBleHBvcnQgbGV0IGN1cnJlbnRfdG9vbHRpcF9pZDsgLy8gaWQgb2YgdmlzaWJsZSB0b29sdGlwIGluIHBhcmVudCBjb21wb25lbnRcbiAgZXhwb3J0IGxldCBjb250ZW50O1xuICBleHBvcnQgbGV0IGlkO1xuICBleHBvcnQgbGV0IGljb247XG4gIGV4cG9ydCBsZXQgdGV4dDtcbiAgLy8gI2VuZHJlZ2lvbiB0b29sdGlwIHByb3BzXG5cbiAgJDogaXNUb29sdGlwVmlzaWJsZSA9XG4gICAgY3VycmVudF90b29sdGlwX2lkICYmIGN1cnJlbnRfdG9vbHRpcF9pZCA9PT0gaWQgPyB0cnVlIDogZmFsc2U7XG5cbiAgLy8gc2VuZCB0b29sdGlwSUQgdG8gcGFyZW50IGNvbXBvbmVudCwgc28gaXQgdXBkYXRlcyB0aGUgY3VycmVudF90b29sdGlwX2lkIHByb3BcbiAgZnVuY3Rpb24gdG9nZ2xlVG9vbHRpcFZpc2liaWxpdHkoKSB7XG4gICAgaWYgKGN1cnJlbnRfdG9vbHRpcF9pZCAhPT0gaWQpIHtcbiAgICAgIGRpc3BhdGNoRXZlbnQoXCJ0b2dnbGVUb29sdGlwXCIsIHtcbiAgICAgICAgdG9vbHRpcElEOiBpZCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjbG9zZSB0aGUgdG9vbHRpcCBpZiB1c2VyIGNsaWNrcyB0b29sdGlwIGJ1dHRvbiBhZ2FpblxuICAgICAgaXNUb29sdGlwVmlzaWJsZSA9ICFpc1Rvb2x0aXBWaXNpYmxlO1xuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuICBAaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy90aGVtaW5nL3ZhcmlhYmxlcy5zY3NzXCI7XG4gICRzcGFjaW5nLXM6IDAuNXJlbTtcbiAgYnV0dG9uLnRvb2x0aXAtdHJpZ2dlciB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5pY29uLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDFyZW07XG4gICAgJi5yZXZlcnNlLWljb24ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICB9XG4gIH1cblxuICBwLnRvb2x0aXAge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyZXktbGlnaHRlc3QpO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBjb2xvcjogdmFyKC0tZ3JleS1kYXJrKTtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBwYWRkaW5nOiAkc3BhY2luZy1zO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDhweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgbWF4LXdpZHRoOiAyNDBweDtcbiAgICBtYXgtaGVpZ2h0OiAyNDBweDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gICAgei1pbmRleDogMTtcbiAgfVxuPC9zdHlsZT5cblxuPGJ1dHRvblxuICBjbGFzcz1cInRvb2x0aXAtdHJpZ2dlclwiXG4gIGFyaWEtZXhwYW5kZWQ9e2lzVG9vbHRpcFZpc2libGUgPyBcInRydWVcIiA6IFwiZmFsc2VcIn1cbiAgaWQ9e2lkID8gYHRvb2x0aXAtdHJpZ2dlci0ke2lkfWAgOiBcIlwifVxuICBhcmlhLWRlc2NyaWJlZGJ5PXtpZH1cbiAgYXJpYS1sYWJlbD17aXNUb29sdGlwVmlzaWJsZSA/IFwiaGlkZSBlbWFpbFwiIDogXCJzaG93IGVtYWlsXCJ9XG4gIG9uOmNsaWNrfHN0b3BQcm9wYWdhdGlvbj17KGUpID0+IHRvZ2dsZVRvb2x0aXBWaXNpYmlsaXR5KGUpfVxuPlxuICB7I2lmIHRleHR9XG4gICAgPHA+e3RleHR9PC9wPlxuICB7L2lmfVxuICB7I2lmIGljb259XG4gICAgPGRpdiBjbGFzcz1cImljb24tY29udGFpbmVyXCIgY2xhc3M6cmV2ZXJzZS1pY29uPXtpY29uICYmIGlzVG9vbHRpcFZpc2libGV9PlxuICAgICAgPHN2ZWx0ZTpjb21wb25lbnQgdGhpcz17aWNvbn0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICA8L2Rpdj5cbiAgey9pZn1cbjwvYnV0dG9uPlxueyNpZiBpc1Rvb2x0aXBWaXNpYmxlfVxuICA8cCB7aWR9IHJvbGU9XCJ0b29sdGlwXCIgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJ0b29sdGlwXCI+XG4gICAge2NvbnRlbnR9XG4gICAgPCEtLSB7QGh0bWwgY29udGVudH0gLS0+XG4gIDwvcD5cbnsvaWZ9XG4iLCI8c3ZnIGlkPVwiQ2FwYV8xXCIgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDQ5NyA0OTdcIiBoZWlnaHQ9XCI1MTJcIiB2aWV3Qm94PVwiMCAwIDQ5NyA0OTdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGc+PGNpcmNsZSBjeD1cIjk4XCIgY3k9XCIzNzZcIiBmaWxsPVwiIzkwOWJhNlwiIHI9XCI1M1wiLz48Y2lyY2xlIGN4PVwiNDM5XCIgY3k9XCIzMzZcIiBmaWxsPVwiI2M4ZDJkY1wiIHI9XCI0NlwiLz48Y2lyY2xlIGN4PVwiMzk3XCIgY3k9XCIxMTJcIiBmaWxsPVwiI2U5ZWRmMVwiIHI9XCIzOFwiLz48ZWxsaXBzZSBjeD1cIjU2LjI0NVwiIGN5PVwiMjQ0Ljc1NFwiIGZpbGw9XCIjN2U4Yjk2XCIgcng9XCI1Ni4yNDVcIiByeT1cIjU0Ljg3NFwiLz48ZWxsaXBzZSBjeD1cIjIxNy44MjFcIiBjeT1cIjQ0Ny4xNzVcIiBmaWxsPVwiI2EyYWJiOFwiIHJ4PVwiNTEuMTMyXCIgcnk9XCI0OS44MjVcIi8+PGVsbGlwc2UgY3g9XCIzNDkuMjI5XCIgY3k9XCI0MjcuODczXCIgZmlsbD1cIiNiOWMzY2RcIiByeD1cIjQ4LjU3NVwiIHJ5PVwiNDcuMjk3XCIvPjxlbGxpcHNlIGN4PVwiMTE3LjA5MlwiIGN5PVwiMTE0Ljc5NFwiIGZpbGw9XCIjNWY2Yzc1XCIgcng9XCI1OC44MDFcIiByeT1cIjU3LjM5N1wiLz48ZWxsaXBzZSBjeD1cIjQ1My41MzhcIiBjeT1cIjIxNi40NzdcIiBmaWxsPVwiI2RjZTZlYlwiIHJ4PVwiNDMuNDYyXCIgcnk9XCI0Mi42NTZcIi8+PGNpcmNsZSBjeD1cIjI2M1wiIGN5PVwiNjJcIiBmaWxsPVwiIzRlNWE2MVwiIHI9XCI2MlwiLz48L2c+PC9zdmc+IiwiPHN2ZyB3aWR0aD1cIjIxcHhcIiBoZWlnaHQ9XCIyMXB4XCIgdmlld0JveD1cIjAgMCAyMSAyMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZyBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIxLjVweFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0LjUgNi41KVwiPjxwYXRoIGQ9XCJtMTEgOHYtMmMwLTEuNjU2ODU0MjUtMS4zNDMxNDU3NS0zLTMtM2gtOFwiLz48cGF0aCBkPVwibTMgNi0zLjAwMS0zIDMuMDAxLTNcIi8+PC9nPjwvc3ZnPiIsIjxzdmcgd2lkdGg9XCIyMXB4XCIgaGVpZ2h0PVwiMjFweFwiIHZpZXdCb3g9XCIwIDAgMjEgMjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGcgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMS41cHhcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMy41IDYuNSlcIj48cGF0aCBkPVwibTE0IDh2LTJjMC0xLjY1Njg1NDI1LTEuMzQzMTQ1OC0zLTMtM2gtOFwiLz48cGF0aCBkPVwibTMgNi0zLjAwMS0zIDMuMDAxLTNcIi8+PHBhdGggZD1cIm02IDYtMy4wMDEtMyAzLjAwMS0zXCIvPjwvZz48L3N2Zz4iLCI8c3ZnIHdpZHRoPVwiMjFweFwiIGhlaWdodD1cIjIxcHhcIiB2aWV3Qm94PVwiMCAwIDIxIDIxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxnIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjEuNXB4XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUuNSA2LjUpXCI+PHBhdGggZD1cIm0wIDh2LTJjMC0xLjY1Njg1NDI1IDEuMzQzMTQ1NzUtMyAzLTNoOFwiLz48cGF0aCBkPVwibTcuOTk5IDYgMy4wMDEtMy0zLjAwMS0zXCIvPjwvZz48L3N2Zz4iLCI8c3ZlbHRlOm9wdGlvbnMgdGFnPVwibnlsYXMtZW1haWxcIiAvPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICBpbXBvcnQge1xuICAgIEVtYWlsU3RvcmUsXG4gICAgRXJyb3JTdG9yZSxcbiAgICBNYW5pZmVzdFN0b3JlLFxuICAgIGZldGNoQWNjb3VudCxcbiAgICB1cGRhdGVUaHJlYWQsXG4gICAgZmV0Y2hNZXNzYWdlLFxuICAgIGZldGNoRW1haWwsXG4gICAgQ29udGFjdFN0b3JlLFxuICAgIGZldGNoQ2xlYW5Db252ZXJzYXRpb25zLFxuICAgIGZldGNoVGhyZWFkLFxuICAgIHNpbGVuY2UsXG4gICAgRmlsZXNTdG9yZSxcbiAgfSBmcm9tIFwiQGNvbW1vbnNcIjtcblxuICBpbXBvcnQgdHlwZSB7IENvbnRhY3QsIENvbnRhY3RTZWFyY2hRdWVyeSB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9Db250YWN0c1wiO1xuICBpbXBvcnQgeyBnZXRfY3VycmVudF9jb21wb25lbnQsIG9uTW91bnQsIHRpY2sgfSBmcm9tIFwic3ZlbHRlL2ludGVybmFsXCI7XG4gIGltcG9ydCB7XG4gICAgYnVpbGRJbnRlcm5hbFByb3BzLFxuICAgIGRvd25sb2FkQXR0YWNoZWRGaWxlLFxuICAgIGdldEV2ZW50RGlzcGF0Y2hlcixcbiAgfSBmcm9tIFwiQGNvbW1vbnMvbWV0aG9kcy9jb21wb25lbnRcIjtcbiAgaW1wb3J0IHtcbiAgICBidWlsZFBhcnRpY2lwYW50cyxcbiAgICBpbmNsdWRlc015RW1haWwsXG4gIH0gZnJvbSBcIkBjb21tb25zL21ldGhvZHMvcGFydGljaXBhbnRzXCI7XG4gIGltcG9ydCB7IGFkZEtleVZhbHVlIH0gZnJvbSBcIi4vbWV0aG9kcy9saWJcIjtcbiAgaW1wb3J0IERyb3Bkb3duU3ltYm9sIGZyb20gXCIuL2Fzc2V0cy9jaGV2cm9uLWRvd24uc3ZnXCI7XG4gIGltcG9ydCBUcmFzaEljb24gZnJvbSBcIi4vYXNzZXRzL3RyYXNoLWFsdC5zdmdcIjtcbiAgaW1wb3J0IE1hcmtSZWFkSWNvbiBmcm9tIFwiLi9hc3NldHMvZW52ZWxvcGUtb3Blbi10ZXh0LnN2Z1wiO1xuICBpbXBvcnQgTWFya1VucmVhZEljb24gZnJvbSBcIi4vYXNzZXRzL2VudmVsb3BlLnN2Z1wiO1xuICBpbXBvcnQgQXR0YWNobWVudEljb24gZnJvbSBcIi4vYXNzZXRzL2F0dGFjaG1lbnQuc3ZnXCI7XG4gIGltcG9ydCBMZWZ0QXJyb3dMaW5lSWNvbiBmcm9tIFwiLi9hc3NldHMvYXJyb3ctbGluZS5zdmdcIjtcbiAgaW1wb3J0IE5vTWVzc2FnZXNJY29uIGZyb20gXCIuL2Fzc2V0cy9uby1tZXNzYWdlcy5zdmdcIjtcbiAgaW1wb3J0IERyYWZ0SWNvbiBmcm9tIFwiLi9hc3NldHMvZHJhZnQuc3ZnXCI7XG4gIGltcG9ydCB0eXBlIHtcbiAgICBFbWFpbFByb3BlcnRpZXMsXG4gICAgUGFydGljaXBhbnQsXG4gICAgQ29udmVyc2F0aW9uUXVlcnksXG4gICAgQ29udmVyc2F0aW9uLFxuICAgIFRocmVhZCxcbiAgICBNZXNzYWdlLFxuICAgIEFjY291bnQsXG4gICAgTGFiZWwsXG4gICAgRm9sZGVyLFxuICAgIEZpbGUsXG4gIH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG4gIGltcG9ydCBcIkBjb21tb25zL2NvbXBvbmVudHMvQ29udGFjdEltYWdlL0NvbnRhY3RJbWFnZS5zdmVsdGVcIjtcbiAgaW1wb3J0IFwiQGNvbW1vbnMvY29tcG9uZW50cy9NZXNzYWdlQm9keS5zdmVsdGVcIjtcbiAgaW1wb3J0IFwiQGNvbW1vbnMvY29tcG9uZW50cy9Ub29sdGlwLnN2ZWx0ZVwiO1xuICBpbXBvcnQgeyBBY2NvdW50T3JnYW5pemF0aW9uVW5pdCwgTWVzc2FnZVR5cGUgfSBmcm9tIFwiQGNvbW1vbnMvZW51bXMvTnlsYXNcIjtcbiAgaW1wb3J0IHsgTGFiZWxTdG9yZSB9IGZyb20gXCJAY29tbW9ucy9zdG9yZS9sYWJlbHNcIjtcbiAgaW1wb3J0IHsgRm9sZGVyU3RvcmUgfSBmcm9tIFwiQGNvbW1vbnMvc3RvcmUvZm9sZGVyc1wiO1xuICBpbXBvcnQgKiBhcyBET01QdXJpZnkgZnJvbSBcImRvbXB1cmlmeVwiO1xuICBpbXBvcnQgTG9hZGluZ0ljb24gZnJvbSBcIi4vYXNzZXRzL2xvYWRpbmcuc3ZnXCI7XG4gIGltcG9ydCB7IGRvd25sb2FkRmlsZSB9IGZyb20gXCJAY29tbW9ucy9jb25uZWN0aW9ucy9maWxlc1wiO1xuICBpbXBvcnQgUmVwbHlJY29uIGZyb20gXCIuL2Fzc2V0cy9yZXBseS5zdmdcIjtcbiAgaW1wb3J0IFJlcGx5QWxsSWNvbiBmcm9tIFwiLi9hc3NldHMvcmVwbHktYWxsLnN2Z1wiO1xuICBpbXBvcnQgRm9yd2FyZEljb24gZnJvbSBcIi4vYXNzZXRzL2ZvcndhcmQuc3ZnXCI7XG4gIGltcG9ydCB7IGlzRmlsZUFuQXR0YWNobWVudCB9IGZyb20gXCJAY29tbW9ucy9tZXRob2RzL2lzRmlsZUFuQXR0YWNobWVudFwiO1xuICBpbXBvcnQgeyB1cGRhdGVNZXNzYWdlIH0gZnJvbSBcIkBjb21tb25zL2Nvbm5lY3Rpb25zL21lc3NhZ2VzXCI7XG4gIGltcG9ydCBwa2cgZnJvbSBcIi4uL3BhY2thZ2UuanNvblwiO1xuXG4gIGNvbnN0IGRpc3BhdGNoRXZlbnQgPSBnZXRFdmVudERpc3BhdGNoZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuICAkOiBkaXNwYXRjaEV2ZW50KFwibWFuaWZlc3RMb2FkZWRcIiwgbWFuaWZlc3QpO1xuXG4gICQ6IGlmIChPYmplY3Qua2V5cygkRXJyb3JTdG9yZSkubGVuZ3RoKSB7XG4gICAgZGlzcGF0Y2hFdmVudChcIm9uRXJyb3JcIiwgJEVycm9yU3RvcmUpO1xuICB9XG5cbiAgZXhwb3J0IGxldCBpZDogc3RyaW5nID0gXCJcIjtcbiAgZXhwb3J0IGxldCBhY2Nlc3NfdG9rZW46IHN0cmluZyA9IFwiXCI7XG5cbiAgLy8gZXhwb3J0IGxldCBtZXNzYWdlczogTWVzc2FnZVtdID0gW107XG4gIGV4cG9ydCBsZXQgY2xlYW5fY29udmVyc2F0aW9uOiBib29sZWFuO1xuICBleHBvcnQgbGV0IGNsaWNrX2FjdGlvbjogXCJkZWZhdWx0XCIgfCBcIm1haWxib3hcIiB8IFwiY3VzdG9tXCIgPSBcImRlZmF1bHRcIjtcbiAgZXhwb3J0IGxldCBtZXNzYWdlX2lkOiBzdHJpbmc7XG4gIGV4cG9ydCBsZXQgbWVzc2FnZTogTWVzc2FnZTtcbiAgZXhwb3J0IGxldCBzaG93X2NvbnRhY3RfYXZhdGFyOiBib29sZWFuO1xuICBleHBvcnQgbGV0IHNob3dfZXhwYW5kZWRfZW1haWxfdmlld19vbmxvYWQ6IGJvb2xlYW47XG4gIGV4cG9ydCBsZXQgc2hvd19udW1iZXJfb2ZfbWVzc2FnZXM6IGJvb2xlYW47XG4gIGV4cG9ydCBsZXQgc2hvd19yZWNlaXZlZF90aW1lc3RhbXA6IGJvb2xlYW47XG4gIGV4cG9ydCBsZXQgc2hvd19zdGFyOiBib29sZWFuO1xuICBleHBvcnQgbGV0IHNob3dfdGhyZWFkX2FjdGlvbnM6IGJvb2xlYW47XG4gIGV4cG9ydCBsZXQgdGhlbWU6IHN0cmluZztcbiAgZXhwb3J0IGxldCB0aHJlYWRfaWQ6IHN0cmluZztcbiAgZXhwb3J0IGxldCB0aHJlYWQ6IFRocmVhZDtcbiAgZXhwb3J0IGxldCB5b3U6IFBhcnRpYWw8QWNjb3VudD47XG4gIGV4cG9ydCBsZXQgc2hvd19yZXBseTogYm9vbGVhbjtcbiAgZXhwb3J0IGxldCBzaG93X3JlcGx5X2FsbDogYm9vbGVhbjtcbiAgZXhwb3J0IGxldCBzaG93X2ZvcndhcmQ6IGJvb2xlYW47XG5cbiAgY29uc3QgZGVmYXVsdFZhbHVlTWFwOiBQYXJ0aWFsPEVtYWlsUHJvcGVydGllcz4gPSB7XG4gICAgY2xlYW5fY29udmVyc2F0aW9uOiBmYWxzZSxcbiAgICBjbGlja19hY3Rpb246IFwiZGVmYXVsdFwiLFxuICAgIG1lc3NhZ2VfaWQ6IFwiXCIsXG4gICAgc2hvd19jb250YWN0X2F2YXRhcjogdHJ1ZSxcbiAgICBzaG93X2V4cGFuZGVkX2VtYWlsX3ZpZXdfb25sb2FkOiBmYWxzZSxcbiAgICBzaG93X251bWJlcl9vZl9tZXNzYWdlczogdHJ1ZSxcbiAgICBzaG93X3JlY2VpdmVkX3RpbWVzdGFtcDogdHJ1ZSxcbiAgICBzaG93X3N0YXI6IGZhbHNlLFxuICAgIHNob3dfdGhyZWFkX2FjdGlvbnM6IGZhbHNlLFxuICAgIHRoZW1lOiBcImF1dG9cIixcbiAgICB0aHJlYWRfaWQ6IFwiXCIsXG4gICAgeW91OiB7fSxcbiAgICBzaG93X3JlcGx5OiBmYWxzZSxcbiAgICBzaG93X3JlcGx5X2FsbDogZmFsc2UsXG4gICAgc2hvd19mb3J3YXJkOiBmYWxzZSxcbiAgfTtcblxuICBsZXQgbWFuaWZlc3Q6IFBhcnRpYWw8RW1haWxQcm9wZXJ0aWVzPiA9IHt9O1xuICBsZXQgX3RoaXMgPSA8RW1haWxQcm9wZXJ0aWVzPmJ1aWxkSW50ZXJuYWxQcm9wcyh7fSwge30sIGRlZmF1bHRWYWx1ZU1hcCk7XG5cbiAgbGV0IHVzZXJFbWFpbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAkOiB1c2VyRW1haWwgPSA8c3RyaW5nPl90aGlzLnlvdT8uZW1haWxfYWRkcmVzcztcbiAgY29uc3QgUEFSVElDSVBBTlRTX1RPX1RSVU5DQVRFID0gMztcblxuICBsZXQgdGhlbWVMb2FkZWQgPSBmYWxzZTtcbiAgbGV0IHByb3BzTG9hZGVkID0gZmFsc2U7XG4gIGxldCBtYW5pZmVzdExvYWRlZCA9IGZhbHNlO1xuICBvbk1vdW50KGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCB0aWNrKCk7XG4gICAgcHJvcHNMb2FkZWQgPSB0cnVlO1xuXG4gICAgbWFuaWZlc3QgPSAoKGF3YWl0ICRNYW5pZmVzdFN0b3JlW1xuICAgICAgSlNPTi5zdHJpbmdpZnkoeyBjb21wb25lbnRfaWQ6IGlkLCBhY2Nlc3NfdG9rZW4gfSlcbiAgICBdKSB8fCB7fSkgYXMgRW1haWxQcm9wZXJ0aWVzO1xuICAgIG1hbmlmZXN0TG9hZGVkID0gdHJ1ZTtcblxuICAgIF90aGlzID0gYnVpbGRJbnRlcm5hbFByb3BzKFxuICAgICAgJCRwcm9wcyxcbiAgICAgIG1hbmlmZXN0LFxuICAgICAgZGVmYXVsdFZhbHVlTWFwLFxuICAgICkgYXMgRW1haWxQcm9wZXJ0aWVzO1xuXG4gICAgdHJhbnNmb3JtUHJvcGVydHlWYWx1ZXMoKTtcblxuICAgIC8vIEZldGNoIEFjY291bnRcbiAgICBpZiAoaWQgJiYgIV90aGlzLnlvdT8uaWQgJiYgIWVtYWlsTWFudWFsbHlQYXNzZWQpIHtcbiAgICAgIF90aGlzLnlvdSA9IGF3YWl0IGZldGNoQWNjb3VudCh7XG4gICAgICAgIGNvbXBvbmVudF9pZDogcXVlcnkuY29tcG9uZW50X2lkLFxuICAgICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICB9KTtcbiAgICAgIC8vIEluaXRpYWxpemUgbGFiZWxzIC8gZm9sZGVyc1xuICAgICAgY29uc3QgYWNjb3VudE9yZ2FuaXphdGlvblVuaXRRdWVyeSA9IHtcbiAgICAgICAgY29tcG9uZW50X2lkOiBpZCxcbiAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgfTtcbiAgICAgIGlmIChfdGhpcy55b3U/Lm9yZ2FuaXphdGlvbl91bml0ID09PSBBY2NvdW50T3JnYW5pemF0aW9uVW5pdC5MYWJlbCkge1xuICAgICAgICBsYWJlbHMgPSBhd2FpdCBMYWJlbFN0b3JlLmdldExhYmVscyhhY2NvdW50T3JnYW5pemF0aW9uVW5pdFF1ZXJ5KTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIF90aGlzLnlvdT8ub3JnYW5pemF0aW9uX3VuaXQgPT09IEFjY291bnRPcmdhbml6YXRpb25Vbml0LkZvbGRlclxuICAgICAgKSB7XG4gICAgICAgIGZvbGRlcnMgPSBhd2FpdCBGb2xkZXJTdG9yZS5nZXRGb2xkZXJzKGFjY291bnRPcmdhbml6YXRpb25Vbml0UXVlcnkpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgbGV0IHByZXZpb3VzUHJvcHMgPSAkJHByb3BzO1xuICAkOiBwcm9wc0xvYWRlZCAmJlxuICAgIG1hbmlmZXN0TG9hZGVkICYmXG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGlmIChKU09OLnN0cmluZ2lmeShwcmV2aW91c1Byb3BzKSAhPT0gSlNPTi5zdHJpbmdpZnkoJCRwcm9wcykpIHtcbiAgICAgICAgX3RoaXMgPSBidWlsZEludGVybmFsUHJvcHMoXG4gICAgICAgICAgJCRwcm9wcyxcbiAgICAgICAgICBtYW5pZmVzdCxcbiAgICAgICAgICBkZWZhdWx0VmFsdWVNYXAsXG4gICAgICAgICkgYXMgRW1haWxQcm9wZXJ0aWVzO1xuXG4gICAgICAgIGF3YWl0IHRyYW5zZm9ybVByb3BlcnR5VmFsdWVzKCk7XG4gICAgICB9XG4gICAgfSkoKTtcblxuICBhc3luYyBmdW5jdGlvbiB0cmFuc2Zvcm1Qcm9wZXJ0eVZhbHVlcygpIHtcbiAgICBjb25zdCBwcmV2aW91c1Byb3BzVGhyZWFkSWQgPSBwcmV2aW91c1Byb3BzLnRocmVhZF9pZDtcbiAgICBwcmV2aW91c1Byb3BzID0gJCRwcm9wcztcbiAgICBfdGhpcy50aHJlYWRfaWQgPVxuICAgICAgIXRocmVhZCAmJiAhbWVzc2FnZV9pZCAmJiAhbWVzc2FnZVxuICAgICAgICA/IF90aGlzLnRocmVhZF9pZCB8fCBtYW5pZmVzdC50aHJlYWRfaWRcbiAgICAgICAgOiBcIlwiO1xuXG4gICAgaWYgKGlkICYmICFfdGhpcy50aHJlYWRfaWQgJiYgIV90aGlzLnRocmVhZCAmJiBfdGhpcy5tZXNzYWdlX2lkKSB7XG4gICAgICBmZXRjaE9uZU1lc3NhZ2UoKTtcbiAgICB9XG4gICAgaWYgKCFhY3RpdmVUaHJlYWQgfHwgcHJldmlvdXNQcm9wc1RocmVhZElkICE9PSBfdGhpcy50aHJlYWRfaWQpIHtcbiAgICAgIGF3YWl0IGdldFRocmVhZCgpO1xuICAgIH1cbiAgfVxuXG4gIGxldCBjb250YWN0czogUmVjb3JkPHN0cmluZywgQ29udGFjdD4gPSB7fTtcbiAgbGV0IGFjdGl2ZVRocmVhZENvbnRhY3QgPSB7fTtcblxuICAkOiBhY3RpdmVUaHJlYWRDb250YWN0ID1cbiAgICBhY3RpdmVUaHJlYWQgJiYgY29udGFjdHNcbiAgICAgID8gY29udGFjdHNbXG4gICAgICAgICAgYWN0aXZlVGhyZWFkLm1lc3NhZ2VzW2FjdGl2ZVRocmVhZC5tZXNzYWdlcy5sZW5ndGggLSAxXT8uZnJvbVswXS5lbWFpbFxuICAgICAgICBdXG4gICAgICA6IHt9O1xuICAkOiBhY3RpdmVNZXNzYWdlQ29udGFjdCA9XG4gICAgX3RoaXMubWVzc2FnZSAmJiBjb250YWN0cyA/IGNvbnRhY3RzW190aGlzLm1lc3NhZ2U/LmZyb21bMF0uZW1haWxdIDoge307XG5cbiAgbGV0IHRocmVhZElkQ2hhbmdlZCA9IGZhbHNlO1xuICAkOiBfdGhpcy50aHJlYWRfaWQsICh0aHJlYWRJZENoYW5nZWQgPSB0cnVlKTtcblxuICAkOiAoYXN5bmMgKCkgPT4ge1xuICAgIGlmICh0aHJlYWRJZENoYW5nZWQgfHwgIWNvbnRhY3RzKSB7XG4gICAgICB0aHJlYWRJZENoYW5nZWQgPSBmYWxzZTtcbiAgICAgIGlmICh0aHJlYWQgJiYgdGhyZWFkLm1lc3NhZ2VzKSB7XG4gICAgICAgIGF3YWl0IGdldFRocmVhZENvbnRhY3RzKHRocmVhZCk7XG4gICAgICB9IGVsc2UgaWYgKGFjdGl2ZVRocmVhZCkge1xuICAgICAgICBhd2FpdCBnZXRUaHJlYWRDb250YWN0cyhhY3RpdmVUaHJlYWQpO1xuICAgICAgfSBlbHNlIGlmIChfdGhpcy5tZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IHBhcnRpY2lwYW50ID0gX3RoaXMubWVzc2FnZS5mcm9tWzBdO1xuICAgICAgICBjb250YWN0c1twYXJ0aWNpcGFudC5lbWFpbF0gPSBhd2FpdCBnZXRDb250YWN0KHBhcnRpY2lwYW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0VGhyZWFkQ29udGFjdHModGhyZWFkOiBUaHJlYWQpIHtcbiAgICBjb25zdCBmcm9tUGFydGljaXBhbnRzID1cbiAgICAgIHRocmVhZC5tZXNzYWdlcz8ucmVkdWNlPFJlY29yZDxzdHJpbmcsIFBhcnRpY2lwYW50Pj4oXG4gICAgICAgIChwYXJ0aWNpcGFudHMsIG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXJ0aWNpcGFudDogUGFydGljaXBhbnQgPSBtZXNzYWdlLmZyb21bMF07XG4gICAgICAgICAgcGFydGljaXBhbnRzW3BhcnRpY2lwYW50LmVtYWlsXSA9IHBhcnRpY2lwYW50O1xuICAgICAgICAgIHJldHVybiBwYXJ0aWNpcGFudHM7XG4gICAgICAgIH0sXG4gICAgICAgIHt9LFxuICAgICAgKSB8fCB7fTtcbiAgICBjb25zdCBmcm9tUGFydGljaXBhbnRzQXJyYXkgPVxuICAgICAgQXJyYXkuZnJvbShPYmplY3QudmFsdWVzKGZyb21QYXJ0aWNpcGFudHMpKSB8fCBbXTtcblxuICAgIGZvciAoY29uc3QgcGFydGljaXBhbnQgb2YgZnJvbVBhcnRpY2lwYW50c0FycmF5KSB7XG4gICAgICBjb25zdCBwYXJ0aWNpcGFudEVtYWlsID0gcGFydGljaXBhbnQuZW1haWw7XG4gICAgICBpZiAoIWNvbnRhY3RzW3BhcnRpY2lwYW50RW1haWxdICYmIHBhcnRpY2lwYW50RW1haWwpIHtcbiAgICAgICAgY29udGFjdHNbcGFydGljaXBhbnRFbWFpbF0gPSBhd2FpdCBnZXRDb250YWN0KHBhcnRpY2lwYW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBsZXQgbWFpbjogRWxlbWVudDtcbiAgbGV0IG1lc3NhZ2VSZWZzOiBFbGVtZW50W10gPSBbXTtcbiAgY29uc3QgTUFYX0RFU0tUT1BfUEFSVElDSVBBTlRTID0gMjtcbiAgY29uc3QgTUFYX01PQklMRV9QQVJUSUNJUEFOVFMgPSAxO1xuXG4gIC8vICNyZWdpb24gaW5pdGlhbGl6ZSBsYWJlbCBhbmQgZm9sZGVyIHZhcnMgKGZvciB0cmFzaClcbiAgbGV0IGxhYmVsczogTGFiZWxbXSA9IFtdO1xuICAkOiB0cmFzaExhYmVsSUQgPVxuICAgIGxhYmVscyAmJiBsYWJlbHMubGVuZ3RoXG4gICAgICA/IGxhYmVscy5maW5kKChsYWJlbCkgPT4gbGFiZWwubmFtZSA9PT0gXCJ0cmFzaFwiKT8uaWRcbiAgICAgIDogbnVsbDtcblxuICBsZXQgZm9sZGVyczogRm9sZGVyW10gPSBbXTtcbiAgJDogdHJhc2hGb2xkZXJJRCA9XG4gICAgZm9sZGVycyAmJiBmb2xkZXJzLmxlbmd0aFxuICAgICAgPyBmb2xkZXJzLmZpbmQoKGZvbGRlcikgPT4gZm9sZGVyLm5hbWUgPT09IFwidHJhc2hcIik/LmlkXG4gICAgICA6IG51bGw7XG4gIC8vICNlbmRyZWdpb24gaW5pdGlhbGl6ZSBsYWJlbCBhbmQgZm9sZGVyIHZhcnMgKGZvciB0cmFzaClcblxuICBsZXQgcGFydGljaXBhbnRzOiBQYXJ0aWNpcGFudFtdID0gW107XG4gICQ6IHtcbiAgICBwYXJ0aWNpcGFudHMgPSBhY3RpdmVUaHJlYWQgPyBhY3RpdmVUaHJlYWQucGFydGljaXBhbnRzIDogW107XG4gIH1cbiAgbGV0IHF1ZXJ5OiBDb252ZXJzYXRpb25RdWVyeTtcbiAgJDogcXVlcnkgPSB7XG4gICAgYWNjZXNzX3Rva2VuLFxuICAgIGNvbXBvbmVudF9pZDogaWQsXG4gICAgdGhyZWFkX2lkOiBfdGhpcy50aHJlYWRfaWQsXG4gIH07XG5cbiAgbGV0IHF1ZXJ5S2V5OiBzdHJpbmc7XG4gICQ6IHF1ZXJ5S2V5ID0gSlNPTi5zdHJpbmdpZnkocXVlcnkpO1xuXG4gIGxldCBhY3RpdmVUaHJlYWQ6IENvbnZlcnNhdGlvbjtcblxuICAvLyAjcmVnaW9uIHRocmVhZCBpbnRha2UgYW5kIHNldFxuICBsZXQgZmV0Y2hpbmdUaHJlYWRQcm9taXNlOiBQcm9taXNlPENvbnZlcnNhdGlvbj47XG4gIGFzeW5jIGZ1bmN0aW9uIGdldFRocmVhZCgpIHtcbiAgICBpZiAoaWQgJiYgX3RoaXMudGhyZWFkX2lkKSB7XG4gICAgICBmZXRjaGluZ1RocmVhZFByb21pc2UgPSA8UHJvbWlzZTxDb252ZXJzYXRpb24+PmZldGNoVGhyZWFkKHtcbiAgICAgICAgY29tcG9uZW50X2lkOiBpZCxcbiAgICAgICAgdGhyZWFkX2lkOiBfdGhpcy50aHJlYWRfaWQsXG4gICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgIH0pLmNhdGNoKHNpbGVuY2UpO1xuICAgICAgY29uc3QgdGhyZWFkID0gYXdhaXQgZmV0Y2hpbmdUaHJlYWRQcm9taXNlO1xuICAgICAgZmV0Y2hpbmdUaHJlYWRQcm9taXNlID0gPGFueT5udWxsO1xuXG4gICAgICAvLyBnZXQgYm9keSBmb3IgbGFzdCBtZXNzYWdlIGluIG9wZW4gdGhyZWFkXG4gICAgICBpZiAodGhyZWFkPy5tZXNzYWdlcz8ubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBsYXN0TXNnSW5kZXggPSB0aHJlYWQubWVzc2FnZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgdGhyZWFkLm1lc3NhZ2VzW2xhc3RNc2dJbmRleF0gPSBhd2FpdCBmZXRjaEluZGl2aWR1YWxNZXNzYWdlKFxuICAgICAgICAgIHRocmVhZC5tZXNzYWdlc1tsYXN0TXNnSW5kZXhdLmlkLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKHRocmVhZCkge1xuICAgICAgICB0aHJlYWQuZXhwYW5kZWQgPVxuICAgICAgICAgIGFjdGl2ZVRocmVhZD8uZXhwYW5kZWQgPz8gX3RoaXMuc2hvd19leHBhbmRlZF9lbWFpbF92aWV3X29ubG9hZDtcbiAgICAgICAgYWN0aXZlVGhyZWFkID0gdGhyZWFkO1xuICAgICAgICBkaXNwYXRjaEV2ZW50KFwidGhyZWFkTG9hZGVkXCIsIHRocmVhZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJDoge1xuICAgIGlmIChfdGhpcy50aHJlYWQgJiYgX3RoaXMudGhyZWFkLmlkKSB7XG4gICAgICAvLyBJcyBpdCBpbiB0aGUgc3RvcmUgYWxyZWFkeT8gKHZpYSA8bnlsYXMtbWFpbGJveD4sIGZvciBleGFtcGxlKVxuICAgICAgY29uc3QgbG9jYWxUaHJlYWQgPSAoJEVtYWlsU3RvcmVbcXVlcnlLZXldPy5maW5kKFxuICAgICAgICAoc3RvcmVkVGhyZWFkOiBUaHJlYWQpID0+XG4gICAgICAgICAgc3RvcmVkVGhyZWFkICYmIHN0b3JlZFRocmVhZC5pZCA9PT0gdGhyZWFkPy5pZCxcbiAgICAgICkgPz8gX3RoaXMudGhyZWFkKSBhcyBDb252ZXJzYXRpb247XG5cbiAgICAgIC8vIFRoaXMgaXMgZm9yIEVtYWlsIGNvbXBvbmVudCBkZW1vIHB1cnBvc2UsIHdoZXJlIHdlIHdhbnQgdG8gc2hvdyBleHBhbmRlZCB0aHJlYWRzIGJ5IGRlZmF1bHQgb24gbG9hZC5cbiAgICAgIGlmIChfdGhpcy5zaG93X2V4cGFuZGVkX2VtYWlsX3ZpZXdfb25sb2FkKSB7XG4gICAgICAgIGxvY2FsVGhyZWFkLmV4cGFuZGVkID0gX3RoaXMuc2hvd19leHBhbmRlZF9lbWFpbF92aWV3X29ubG9hZDtcblxuICAgICAgICAvLyBnZXQgYm9keSBmb3IgbGFzdCBtZXNzYWdlIGluIG9wZW4gdGhyZWFkXG4gICAgICAgIGNvbnN0IGxhc3RNc2cgPSBsb2NhbFRocmVhZC5tZXNzYWdlc1tsb2NhbFRocmVhZC5tZXNzYWdlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgbGFzdE1zZy5ib2R5ID0gbGFzdE1zZy5ib2R5ID8/IGxhc3RNc2cuc25pcHBldDtcbiAgICAgIH1cbiAgICAgIGFjdGl2ZVRocmVhZCA9IGxvY2FsVGhyZWFkO1xuICAgIH1cbiAgfVxuXG4gIC8vICNlbmRyZWdpb24gdGhyZWFkIGludGFrZSBhbmQgc2V0XG4gIGxldCBlbWFpbE1hbnVhbGx5UGFzc2VkOiBib29sZWFuO1xuICAkOiBlbWFpbE1hbnVhbGx5UGFzc2VkID0gISFfdGhpcy50aHJlYWQ7XG5cbiAgLy8jcmVnaW9uIENsZWFuIENvbnZlcnNhdGlvblxuICAvLyBJZiBhIHVzZXIgc2V0cyBtZXNzYWdlX2JvZHlfdHlwZSB0byBcImNsZWFuXCIsIGV4cGFuZCB0aGVpciBtZXNzYWdlIHRvIGNsZWFuIGNvbnZlcnNhdGlvbi5cbiAgLy8gVGhpcyByZXF1aXJlcyB0aGVtIHRvIGhhdmUgYWNjZXNzIHRvIHRoZSBOeWxhcyBOZXVyYWwgQVBJLlxuXG4gIGNvbnN0IENPTlZFUlNBVElPTl9FTkRQT0lOVF9NQVhfTUVTU0FHRVMgPSAyMDtcblxuICBmdW5jdGlvbiBjbGVhbkNvbnZlcnNhdGlvbigpIHtcbiAgICBpZiAoYWN0aXZlVGhyZWFkKSB7XG4gICAgICBmZXRjaENsZWFuQ29udmVyc2F0aW9ucyh7XG4gICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgICAgY29tcG9uZW50X2lkOiBpZCxcbiAgICAgICAgbWVzc2FnZV9pZDogYWN0aXZlVGhyZWFkLm1lc3NhZ2VzXG4gICAgICAgICAgLnNsaWNlKC1DT05WRVJTQVRJT05fRU5EUE9JTlRfTUFYX01FU1NBR0VTKVxuICAgICAgICAgIC5tYXAoKG1lc3NhZ2UpID0+IG1lc3NhZ2UuaWQpLFxuICAgICAgfSkudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICByZXN1bHRzLmZvckVhY2goKG1zZzogTWVzc2FnZSkgPT4ge1xuICAgICAgICAgIGxldCBleGlzdGluZ01lc3NhZ2UgPSBhY3RpdmVUaHJlYWQubWVzc2FnZXMuZmluZChcbiAgICAgICAgICAgIChtZXNzYWdlKSA9PiBtZXNzYWdlLmlkID09PSBtc2cuaWQsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoZXhpc3RpbmdNZXNzYWdlKSB7XG4gICAgICAgICAgICBleGlzdGluZ01lc3NhZ2UuY29udmVyc2F0aW9uID0gbXNnLmNvbnZlcnNhdGlvbjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBhY3RpdmVUaHJlYWQubWVzc2FnZXMgPSBhY3RpdmVUaHJlYWQubWVzc2FnZXM7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKF90aGlzLm1lc3NhZ2UpIHtcbiAgICAgIGZldGNoQ2xlYW5Db252ZXJzYXRpb25zKHtcbiAgICAgICAgY29tcG9uZW50X2lkOiBpZCxcbiAgICAgICAgbWVzc2FnZV9pZDogW190aGlzLm1lc3NhZ2UuaWRdLFxuICAgICAgfSkudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICByZXN1bHRzLmZvckVhY2goKG1zZzogTWVzc2FnZSkgPT4ge1xuICAgICAgICAgIGlmIChfdGhpcy5tZXNzYWdlKSB7XG4gICAgICAgICAgICBfdGhpcy5tZXNzYWdlLmNvbnZlcnNhdGlvbiA9IG1zZy5jb252ZXJzYXRpb247XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYWN0aXZlVGhyZWFkLm1lc3NhZ2VzID0gYWN0aXZlVGhyZWFkLm1lc3NhZ2VzO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgJDogaWYgKF90aGlzLmNsZWFuX2NvbnZlcnNhdGlvbiAmJiAoX3RoaXMudGhyZWFkX2lkIHx8IF90aGlzLm1lc3NhZ2VfaWQpKSB7XG4gICAgY2xlYW5Db252ZXJzYXRpb24oKTtcbiAgfVxuICAvLyNlbmRyZWdpb24gQ2xlYW4gQ29udmVyc2F0aW9uXG5cbiAgLy8gI3JlZ2lvbiBnZXQgY29udGFjdCBmb3IgQ29udGFjdEltYWdlXG4gIGxldCBjb250YWN0X3F1ZXJ5OiBDb250YWN0U2VhcmNoUXVlcnk7XG4gICQ6IGNvbnRhY3RfcXVlcnkgPSB7XG4gICAgY29tcG9uZW50X2lkOiBpZCxcbiAgICBhY2Nlc3NfdG9rZW4sXG4gICAgcXVlcnk6IFwiXCIsXG4gIH07XG5cbiAgLypcbiAgICBGZXRjaGVzIGNvbnRhY3QgZm9yIENvbnRhY3RJbWFnZSBjb21wb25lbnRcbiAgKi9cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udGFjdChhY2NvdW50OiBhbnkpIHtcbiAgICBjb250YWN0X3F1ZXJ5W1wicXVlcnlcIl0gPSBgP2VtYWlsPSR7YWNjb3VudC5lbWFpbH1gO1xuICAgIGlmIChpZCkge1xuICAgICAgbGV0IGNvbnRhY3QgPSAkQ29udGFjdFN0b3JlW0pTT04uc3RyaW5naWZ5KGNvbnRhY3RfcXVlcnkpXTtcbiAgICAgIGlmICghY29udGFjdCkge1xuICAgICAgICBjb250YWN0ID0gYXdhaXQgQ29udGFjdFN0b3JlLmFkZENvbnRhY3QoY29udGFjdF9xdWVyeSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGFjdFswXSA/PyBhY2NvdW50O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYWNjb3VudDtcbiAgICB9XG4gIH1cbiAgLy8gI2VuZHJlZ2lvbiBnZXQgY29udGFjdCBmb3IgQ29udGFjdEltYWdlXG5cbiAgYXN5bmMgZnVuY3Rpb24gc2F2ZUFjdGl2ZVRocmVhZCgpIHtcbiAgICAvLyBpZiB0aHJlYWQgYW5kIGlmIGNvbXBvbmVudF9pZCAoc2VjdXJpdHkpXG4gICAgaWYgKGFjdGl2ZVRocmVhZCAmJiBxdWVyeS5jb21wb25lbnRfaWQgJiYgX3RoaXMudGhyZWFkX2lkKSB7XG4gICAgICBhd2FpdCB1cGRhdGVUaHJlYWQocXVlcnksIGFjdGl2ZVRocmVhZCkuY2F0Y2goc2lsZW5jZSk7XG4gICAgfVxuICB9XG5cbiAgbGV0IGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlVGhyZWFkKGV2ZW50OiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZVR5cGUgPSBnZXRNZXNzYWdlVHlwZShhY3RpdmVUaHJlYWQpO1xuXG4gICAgaWYgKGFjdGl2ZVRocmVhZFttZXNzYWdlVHlwZV0ubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbG9hZGluZyA9IHRydWU7XG4gICAgaWYgKF90aGlzLmNsaWNrX2FjdGlvbiA9PT0gXCJkZWZhdWx0XCIgfHwgX3RoaXMuY2xpY2tfYWN0aW9uID09PSBcIm1haWxib3hcIikge1xuICAgICAgLy8gZGVmYXVsdCBjbGljayBhY3Rpb25cbiAgICAgIGlmIChhY3RpdmVUaHJlYWQgJiYgX3RoaXMuY2xpY2tfYWN0aW9uID09PSBcImRlZmF1bHRcIikge1xuICAgICAgICAvLyBTZXR0aW5nIHJlYWQvdW5yZWFkIHN0YXR1c1xuICAgICAgICBpZiAoYWN0aXZlVGhyZWFkLnVucmVhZCkge1xuICAgICAgICAgIGFjdGl2ZVRocmVhZC51bnJlYWQgPSAhYWN0aXZlVGhyZWFkLnVucmVhZDtcbiAgICAgICAgICBhd2FpdCBzYXZlQWN0aXZlVGhyZWFkKCk7XG4gICAgICAgIH1cbiAgICAgICAgYWN0aXZlVGhyZWFkLmV4cGFuZGVkID0gIWFjdGl2ZVRocmVhZC5leHBhbmRlZDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFlbWFpbE1hbnVhbGx5UGFzc2VkICYmIG1lc3NhZ2VUeXBlICE9PSBNZXNzYWdlVHlwZS5EUkFGVFMpIHtcbiAgICAgICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gYWN0aXZlVGhyZWFkO1xuICAgICAgICBjb25zdCBsYXN0TXNnSW5kZXggPSBtZXNzYWdlcy5sZW5ndGggLSAxO1xuICAgICAgICBtZXNzYWdlc1tsYXN0TXNnSW5kZXhdLmV4cGFuZGVkID0gIW1lc3NhZ2VzW2xhc3RNc2dJbmRleF0uZXhwYW5kZWQ7XG5cbiAgICAgICAgLy8gZmV0Y2ggbGFzdCBtZXNzYWdlXG4gICAgICAgIGlmICghbWVzc2FnZXNbbGFzdE1zZ0luZGV4XS5ib2R5KSB7XG4gICAgICAgICAgbWVzc2FnZXNbbGFzdE1zZ0luZGV4XSA9IGF3YWl0IGZldGNoSW5kaXZpZHVhbE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlc1tsYXN0TXNnSW5kZXhdLmlkLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2VUeXBlICE9PSBNZXNzYWdlVHlwZS5EUkFGVFMgJiYgIWFjdGl2ZVRocmVhZC5leHBhbmRlZCkge1xuICAgICAgYWN0aXZlVGhyZWFkLmV4cGFuZGVkID0gIWFjdGl2ZVRocmVhZC5leHBhbmRlZDtcbiAgICB9XG4gICAgbG9hZGluZyA9IGZhbHNlO1xuXG4gICAgZGlzcGF0Y2hFdmVudChcInRocmVhZENsaWNrZWRcIiwge1xuICAgICAgZXZlbnQsXG4gICAgICB0aHJlYWQ6IGFjdGl2ZVRocmVhZCxcbiAgICAgIG1lc3NhZ2VUeXBlLFxuICAgIH0pO1xuICAgIGN1cnJlbnRUb29sdGlwSWQgPSBcIlwiO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gdG9nZ2xlVW5yZWFkU3RhdHVzKGV2ZW50OiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmIChhY3RpdmVUaHJlYWQpIHtcbiAgICAgIGFjdGl2ZVRocmVhZCA9IHsgLi4uYWN0aXZlVGhyZWFkLCB1bnJlYWQ6ICFhY3RpdmVUaHJlYWQudW5yZWFkIH07XG4gICAgICBhd2FpdCBzYXZlQWN0aXZlVGhyZWFkKCk7XG4gICAgICBkaXNwYXRjaEV2ZW50KFwidG9nZ2xlVGhyZWFkVW5yZWFkU3RhdHVzXCIsIHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIHRocmVhZDogYWN0aXZlVGhyZWFkLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRW1haWwoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoX3RoaXMuY2xpY2tfYWN0aW9uICE9PSBcIm1haWxib3hcIikge1xuICAgICAgaWYgKHRyYXNoTGFiZWxJRCkge1xuICAgICAgICBjb25zdCBleGlzdGluZ0xhYmVsSWRzID0gYWN0aXZlVGhyZWFkLmxhYmVscz8ubWFwKChpKSA9PiBpLmlkKSB8fCBbXTtcbiAgICAgICAgYWN0aXZlVGhyZWFkLmxhYmVsX2lkcyA9IFsuLi5leGlzdGluZ0xhYmVsSWRzLCB0cmFzaExhYmVsSURdO1xuICAgICAgICBhd2FpdCBzYXZlQWN0aXZlVGhyZWFkKCk7XG4gICAgICB9IGVsc2UgaWYgKHRyYXNoRm9sZGVySUQpIHtcbiAgICAgICAgYWN0aXZlVGhyZWFkLmZvbGRlcl9pZCA9IHRyYXNoRm9sZGVySUQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPdXIgdGhyZWFkcyBBUEkgZG9lcyBub3QgYWxsb3cgbW92aW5nIGEgdGhyZWFkIHNlbnRcbiAgICAgICAgICogYnkgc2VsZiB0byB0cmFzaCBmb3Igbm9uLWdtYWlsIGFjY291bnRzLiBIZW5jZSwgbW92aW5nXG4gICAgICAgICAqIGluZGl2aWR1YWwgbWVzc2FnZXMgdG8gdHJhc2ggZm9sZGVyIGFzIGEgd29ya2Fyb3VuZFxuICAgICAgICAgKiovXG4gICAgICAgIGlmIChxdWVyeS5jb21wb25lbnRfaWQgJiYgX3RoaXMudGhyZWFkX2lkKSB7XG4gICAgICAgICAgYWN0aXZlVGhyZWFkLm1lc3NhZ2VzLmZvckVhY2goYXN5bmMgKG1lc3NhZ2UsIGkpID0+IHtcbiAgICAgICAgICAgIGF3YWl0IHVwZGF0ZU1lc3NhZ2UoXG4gICAgICAgICAgICAgIHF1ZXJ5LmNvbXBvbmVudF9pZCxcbiAgICAgICAgICAgICAgeyAuLi5tZXNzYWdlLCBmb2xkZXJfaWQ6IHRyYXNoRm9sZGVySUQgfSxcbiAgICAgICAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBkaXNwYXRjaEV2ZW50KFwidGhyZWFkRGVsZXRlZFwiLCB7XG4gICAgICBldmVudCxcbiAgICAgIHRocmVhZDogYWN0aXZlVGhyZWFkLFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlVGhyZWFkQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoXG4gICAgICAoX3RoaXMubWVzc2FnZSAmJiAoIV90aGlzLnRocmVhZF9pZCB8fCAhX3RoaXMudGhyZWFkKSkgfHxcbiAgICAgIChfdGhpcy5jbGlja19hY3Rpb24gPT09IFwibWFpbGJveFwiICYmIGFjdGl2ZVRocmVhZC5leHBhbmRlZClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBoYW5kbGVUaHJlYWQoZXZlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmV0dXJuVG9NYWlsYm94KGV2ZW50OiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCkge1xuICAgIGRpc3BhdGNoRXZlbnQoXCJyZXR1cm5Ub01haWxib3hcIiwge1xuICAgICAgZXZlbnQsXG4gICAgICB0aHJlYWQ6IGFjdGl2ZVRocmVhZCxcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVRocmVhZEtleXByZXNzKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKFxuICAgICAgKF90aGlzLm1lc3NhZ2UgJiYgKCFfdGhpcy50aHJlYWRfaWQgfHwgIV90aGlzLnRocmVhZCkpIHx8XG4gICAgICAoX3RoaXMuY2xpY2tfYWN0aW9uID09PSBcIm1haWxib3hcIiAmJiBhY3RpdmVUaHJlYWQuZXhwYW5kZWQpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGV2ZW50LmNvZGUgPT09IFwiRW50ZXJcIikge1xuICAgICAgaGFuZGxlVGhyZWFkKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVUaHJlYWRTdGFyQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAvLyNyZWdpb24gc3RhcnJlZC91bnN0YXJyZWRcbiAgICBpZiAoYWN0aXZlVGhyZWFkKSB7XG4gICAgICBhY3RpdmVUaHJlYWQgPSB7IC4uLmFjdGl2ZVRocmVhZCwgc3RhcnJlZDogIWFjdGl2ZVRocmVhZC5zdGFycmVkIH07XG4gICAgICBhd2FpdCBzYXZlQWN0aXZlVGhyZWFkKCk7XG4gICAgfVxuICAgIC8vI2VuZHJlZ2lvbiBzdGFycmVkL3Vuc3RhcnJlZFxuXG4gICAgZGlzcGF0Y2hFdmVudChcInRocmVhZFN0YXJyZWRcIiwge1xuICAgICAgZXZlbnQsXG4gICAgICB0aHJlYWQ6IGFjdGl2ZVRocmVhZCxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVJlcGx5Q2xpY2soXG4gICAgZXZlbnQ6IE1vdXNlRXZlbnQsXG4gICAgbWVzc2FnZTogTWVzc2FnZSxcbiAgICB0eXBlOiBcInJlcGx5XCIgfCBcInJlcGx5X2FsbFwiLFxuICApIHtcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblxuICAgIGNvbnN0IG1lOiBQYXJ0aWNpcGFudCA9IHtcbiAgICAgIG5hbWU6IF90aGlzLnlvdS5uYW1lLFxuICAgICAgZW1haWw6IF90aGlzLnlvdS5lbWFpbF9hZGRyZXNzLFxuICAgIH07XG4gICAgY29uc3QgZnJvbSA9IFttZV07XG4gICAgY29uc3QgeyB0bywgY2MgfSA9IGJ1aWxkUGFydGljaXBhbnRzKHtcbiAgICAgIG15RW1haWw6IG1lLmVtYWlsLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgIHR5cGUsXG4gICAgfSk7XG4gICAgY29uc3Qgc3ViamVjdCA9IG1lc3NhZ2Uuc3ViamVjdD8udG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKFwicmU6XCIpXG4gICAgICA/IG1lc3NhZ2Uuc3ViamVjdFxuICAgICAgOiBgUmU6ICR7bWVzc2FnZS5zdWJqZWN0fWA7XG4gICAgY29uc3QgdmFsdWUgPSB7XG4gICAgICByZXBseV90b19tZXNzYWdlX2lkOiBtZXNzYWdlLmlkLFxuICAgICAgZnJvbSxcbiAgICAgIHRvLFxuICAgICAgcmVwbHlfdG86IGZyb20sXG4gICAgICBjYyxcbiAgICAgIGJjYzogbWVzc2FnZS5iY2MsXG4gICAgICBib2R5OiBtZXNzYWdlLmJvZHksXG4gICAgICBzdWJqZWN0OiBzdWJqZWN0LFxuICAgIH07XG5cbiAgICBsZXQgZXZlbnRfaWRlbnRpZmllcjtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgXCJyZXBseVwiOlxuICAgICAgICBldmVudF9pZGVudGlmaWVyID0gXCJyZXBseUNsaWNrZWRcIjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJyZXBseV9hbGxcIjpcbiAgICAgICAgZXZlbnRfaWRlbnRpZmllciA9IFwicmVwbHlBbGxDbGlja2VkXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vQ2hlY2sgZXhpc3RpbmcgZHJhZnRcbiAgICBjb25zdCBleGlzdGluZ0RyYWZ0ID0gYWN0aXZlVGhyZWFkPy5kcmFmdHM/LmZpbmQoXG4gICAgICAoZHJhZnQpID0+IGRyYWZ0LnJlcGx5X3RvX21lc3NhZ2VfaWQgPT09IG1lc3NhZ2UuaWQsXG4gICAgKTtcbiAgICBpZiAoZXhpc3RpbmdEcmFmdCkge1xuICAgICAgaWYgKCFfdGhpcy50aHJlYWQgJiYgZXhpc3RpbmdEcmFmdC5pZCkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaEluZGl2aWR1YWxNZXNzYWdlKGV4aXN0aW5nRHJhZnQuaWQpO1xuICAgICAgICBleGlzdGluZ0RyYWZ0LmJvZHkgPSByZXMuYm9keTtcbiAgICAgICAgdmFsdWUuYm9keSA9IHJlcy5ib2R5O1xuICAgICAgfVxuICAgICAgZGlzcGF0Y2hFdmVudChldmVudF9pZGVudGlmaWVyLCB7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICBtZXNzYWdlOiB7IC4uLmV4aXN0aW5nRHJhZnQgfSxcbiAgICAgICAgdGhyZWFkOiBhY3RpdmVUaHJlYWQsXG4gICAgICAgIHZhbHVlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vQ3JlYXRpbmcgbmV3IHJlcGx5IG1lc3NhZ2VcbiAgICAgIGRpc3BhdGNoRXZlbnQoZXZlbnRfaWRlbnRpZmllciwge1xuICAgICAgICBldmVudCxcbiAgICAgICAgbWVzc2FnZTogeyAuLi5tZXNzYWdlIH0sXG4gICAgICAgIHRocmVhZDogYWN0aXZlVGhyZWFkLFxuICAgICAgICB2YWx1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUZvcndhcmRDbGljayhldmVudDogTW91c2VFdmVudCwgbWVzc2FnZTogTWVzc2FnZSkge1xuICAgIC8vQ2hlY2sgZXhpc3RpbmcgZHJhZnRcbiAgICBjb25zdCBleGlzdGluZ0RyYWZ0ID0gYWN0aXZlVGhyZWFkPy5kcmFmdHM/LmZpbmQoXG4gICAgICAoZHJhZnQpID0+IGRyYWZ0LnJlcGx5X3RvX21lc3NhZ2VfaWQgPT09IG1lc3NhZ2UuaWQsXG4gICAgKTtcbiAgICBjb25zdCBzdWJqZWN0ID0gYEZ3ZDogJHttZXNzYWdlLnN1YmplY3R9YDtcbiAgICBjb25zdCB2YWx1ZSA9IHtcbiAgICAgIHJlcGx5X3RvX21lc3NhZ2VfaWQ6IG1lc3NhZ2UuaWQsXG4gICAgICBzdWJqZWN0OiBzdWJqZWN0LFxuICAgICAgYm9keTogbWVzc2FnZS5ib2R5LFxuICAgIH07XG4gICAgaWYgKGV4aXN0aW5nRHJhZnQpIHtcbiAgICAgIGlmICghX3RoaXMudGhyZWFkICYmIGV4aXN0aW5nRHJhZnQuaWQpIHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hJbmRpdmlkdWFsTWVzc2FnZShleGlzdGluZ0RyYWZ0LmlkKTtcbiAgICAgICAgZXhpc3RpbmdEcmFmdC5ib2R5ID0gcmVzLmJvZHk7XG4gICAgICAgIHZhbHVlLmJvZHkgPSByZXMuYm9keTtcbiAgICAgIH1cbiAgICAgIGRpc3BhdGNoRXZlbnQoXCJmb3J3YXJkQ2xpY2tlZFwiLCB7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICBtZXNzYWdlOiB7IC4uLmV4aXN0aW5nRHJhZnQgfSxcbiAgICAgICAgdGhyZWFkOiBhY3RpdmVUaHJlYWQsXG4gICAgICAgIHZhbHVlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vQ3JlYXRlIG5ldyBtZXNzYWdlXG4gICAgICBkaXNwYXRjaEV2ZW50KFwiZm9yd2FyZENsaWNrZWRcIiwge1xuICAgICAgICBldmVudCxcbiAgICAgICAgbWVzc2FnZTogeyAuLi5tZXNzYWdlIH0sXG4gICAgICAgIHRocmVhZDogYWN0aXZlVGhyZWFkLFxuICAgICAgICB2YWx1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNhblJlcGx5QWxsKG1lc3NhZ2U6IE1lc3NhZ2UpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgbWVzc2FnZT8udG8/Lmxlbmd0aCArIG1lc3NhZ2U/LmNjPy5sZW5ndGggPiAxICYmXG4gICAgICAhaW5jbHVkZXNNeUVtYWlsKF90aGlzLnlvdS5lbWFpbF9hZGRyZXNzLCBtZXNzYWdlLCBcImZyb21cIilcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRW1haWxDbGljayhldmVudDogTW91c2VFdmVudCwgbXNnSW5kZXg6IG51bWJlcikge1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKG1zZ0luZGV4ID09PSBhY3RpdmVUaHJlYWQubWVzc2FnZXMubGVuZ3RoIC0gMSkge1xuICAgICAgZG9Ob3RoaW5nKGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aXZlVGhyZWFkLm1lc3NhZ2VzW21zZ0luZGV4XS5leHBhbmRlZCA9XG4gICAgICAgICFhY3RpdmVUaHJlYWQubWVzc2FnZXNbbXNnSW5kZXhdLmV4cGFuZGVkO1xuICAgICAgZGlzcGF0Y2hFdmVudChcIm1lc3NhZ2VDbGlja2VkXCIsIHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIG1lc3NhZ2U6IGFjdGl2ZVRocmVhZC5tZXNzYWdlc1ttc2dJbmRleF0sXG4gICAgICAgIHRocmVhZDogYWN0aXZlVGhyZWFkLFxuICAgICAgfSk7XG4gICAgICAvLyBEb24ndCBmZXRjaCBtZXNzYWdlIGJvZHkgd2hlbiB0aHJlYWQgaXMgYmVpbmcgcGFzc2VkIG1hbnVhbGx5XG4gICAgICBpZiAoIV90aGlzLnRocmVhZCkge1xuICAgICAgICBmZXRjaEluZGl2aWR1YWxNZXNzYWdlKGFjdGl2ZVRocmVhZC5tZXNzYWdlc1ttc2dJbmRleF0uaWQpLnRoZW4oXG4gICAgICAgICAgKHJlcykgPT4ge1xuICAgICAgICAgICAgYWN0aXZlVGhyZWFkLm1lc3NhZ2VzW21zZ0luZGV4XS5ib2R5ID0gcmVzLmJvZHk7XG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVFbWFpbEtleXByZXNzKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBtc2dJbmRleDogbnVtYmVyKSB7XG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKGV2ZW50LmNvZGUgPT09IFwiRW50ZXJcIikge1xuICAgICAgaWYgKG1zZ0luZGV4ID09PSBhY3RpdmVUaHJlYWQubWVzc2FnZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICBkb05vdGhpbmcoZXZlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aXZlVGhyZWFkLm1lc3NhZ2VzW21zZ0luZGV4XS5leHBhbmRlZCA9XG4gICAgICAgICAgIWFjdGl2ZVRocmVhZC5tZXNzYWdlc1ttc2dJbmRleF0uZXhwYW5kZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hJbmRpdmlkdWFsTWVzc2FnZShtZXNzYWdlSUQ6IHN0cmluZyk6IFByb21pc2U8TWVzc2FnZSB8IG51bGw+IHtcbiAgICBpZiAoaWQpIHtcbiAgICAgIHJldHVybiBmZXRjaE1lc3NhZ2UocXVlcnksIG1lc3NhZ2VJRCkudGhlbihhc3luYyAoanNvbikgPT4ge1xuICAgICAgICBpZiAoRmlsZXNTdG9yZS5oYXNJbmxpbmVGaWxlcyhqc29uKSkge1xuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VXaXRoSW5saW5lRmlsZXMgPSBhd2FpdCBnZXRNZXNzYWdlV2l0aElubGluZUZpbGVzKGpzb24pO1xuICAgICAgICAgIGRpc3BhdGNoRXZlbnQoXCJtZXNzYWdlTG9hZGVkXCIsIG1lc3NhZ2VXaXRoSW5saW5lRmlsZXMpO1xuICAgICAgICAgIHJldHVybiBtZXNzYWdlV2l0aElubGluZUZpbGVzO1xuICAgICAgICB9XG4gICAgICAgIGRpc3BhdGNoRXZlbnQoXCJtZXNzYWdlTG9hZGVkXCIsIGpzb24pO1xuICAgICAgICByZXR1cm4ganNvbjtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4gbnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBkb05vdGhpbmcoZTogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQpIHtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgLy8gRm9yIGNhc2VzIHdoZW4gc29tZW9uZSB3YW50cyB0byBzaG93IGp1c3QgYSBzaW5nbGUgZW1haWwgbWVzc2FnZSwgcmF0aGVyIHRoYW4gdGhlIGZ1bGwgdGhyZWFkLlxuICBmdW5jdGlvbiBmZXRjaE9uZU1lc3NhZ2UoKSB7XG4gICAgZmV0Y2hFbWFpbCh7XG4gICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICBjb21wb25lbnRfaWQ6IGlkLFxuICAgICAgbWVzc2FnZV9pZDogX3RoaXMubWVzc2FnZV9pZCxcbiAgICB9KS50aGVuKGFzeW5jIChqc29uKSA9PiB7XG4gICAgICBfdGhpcy5tZXNzYWdlID0ganNvbjtcbiAgICAgIGlmIChGaWxlc1N0b3JlLmhhc0lubGluZUZpbGVzKF90aGlzLm1lc3NhZ2UpKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCBnZXRNZXNzYWdlV2l0aElubGluZUZpbGVzKF90aGlzLm1lc3NhZ2UpO1xuICAgICAgICBfdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIGRpc3BhdGNoRXZlbnQoXCJtZXNzYWdlTG9hZGVkXCIsIF90aGlzLm1lc3NhZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRHJhZnRDbGljayhldmVudDogTW91c2VFdmVudCwgZHJhZnQ6IE1lc3NhZ2UpIHtcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBkaXNwYXRjaERyYWZ0Q2xpY2tFdmVudChldmVudCwgZHJhZnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRHJhZnRLZXlwcmVzcyhldmVudDogS2V5Ym9hcmRFdmVudCwgZHJhZnQ6IE1lc3NhZ2UpIHtcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoZXZlbnQuY29kZSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBkaXNwYXRjaERyYWZ0Q2xpY2tFdmVudChldmVudCwgZHJhZnQpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGRpc3BhdGNoRHJhZnRDbGlja0V2ZW50KGV2ZW50OiBVSUV2ZW50LCBkcmFmdDogTWVzc2FnZSkge1xuICAgIGlmIChkcmFmdCkge1xuICAgICAgZHJhZnQuZHJhZnRfaWQgPSBkcmFmdC5pZDtcbiAgICAgIGFjdGl2ZVRocmVhZD8uZHJhZnRzPy5mb3JFYWNoKFxuICAgICAgICAodGhyZWFkRHJhZnQpID0+ICh0aHJlYWREcmFmdC5hY3RpdmUgPSB0aHJlYWREcmFmdC5pZCA9PT0gZHJhZnQuaWQpLFxuICAgICAgKTtcblxuICAgICAgLy8gRG9uJ3QgZmV0Y2ggbWVzc2FnZSBib2R5IHdoZW4gdGhyZWFkIGlzIGJlaW5nIHBhc3NlZCBtYW51YWxseVxuICAgICAgaWYgKCFfdGhpcy50aHJlYWQgJiYgZHJhZnQuaWQpIHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hJbmRpdmlkdWFsTWVzc2FnZShkcmFmdC5pZCk7XG4gICAgICAgIGRyYWZ0LmJvZHkgPSByZXMuYm9keTtcbiAgICAgIH1cblxuICAgICAgZGlzcGF0Y2hFdmVudChcImRyYWZ0Q2xpY2tlZFwiLCB7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICBtZXNzYWdlOiBkcmFmdCxcbiAgICAgICAgdGhyZWFkOiBhY3RpdmVUaHJlYWQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb25zdCB3ZWVrZGF5cyA9IFtcbiAgICBcIlN1bmRheVwiLFxuICAgIFwiTW9uZGF5XCIsXG4gICAgXCJUdWVzZGF5XCIsXG4gICAgXCJXZWRuZXNkYXlcIixcbiAgICBcIlRodXJzZGF5XCIsXG4gICAgXCJGcmlkYXlcIixcbiAgICBcIlNhdHVyZGF5XCIsXG4gIF07XG4gIGZ1bmN0aW9uIGZvcm1hdFByZXZpZXdEYXRlKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUobmV3IERhdGUoKS5zZXRIb3VycygwLCAwLCAwLCAwKSk7XG4gICAgY29uc3QgeWVzdGVyZGF5ID0gbmV3IERhdGUoXG4gICAgICB0b2RheS5nZXRGdWxsWWVhcigpLFxuICAgICAgdG9kYXkuZ2V0TW9udGgoKSxcbiAgICAgIHRvZGF5LmdldERhdGUoKSAtIDEsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICk7XG4gICAgY29uc3QgbGFzdFdlZWsgPSBuZXcgRGF0ZShcbiAgICAgIHRvZGF5LmdldEZ1bGxZZWFyKCksXG4gICAgICB0b2RheS5nZXRNb250aCgpLFxuICAgICAgdG9kYXkuZ2V0RGF0ZSgpIC0gNixcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgKTtcbiAgICBjb25zdCB0aGlzWWVhciA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIDAsIDEpO1xuXG4gICAgaWYgKGRhdGUgPj0gdG9kYXkpIHtcbiAgICAgIHJldHVybiBkYXRlLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICAgICAgaG91cjEyOiB0cnVlLFxuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoZGF0ZSA+PSB5ZXN0ZXJkYXkpIHtcbiAgICAgIHJldHVybiBcIlllc3RlcmRheVwiO1xuICAgIH0gZWxzZSBpZiAoZGF0ZSA+PSBsYXN0V2Vlaykge1xuICAgICAgcmV0dXJuIHdlZWtkYXlzW2RhdGUuZ2V0RGF5KCldO1xuICAgIH0gZWxzZSBpZiAoZGF0ZSA+PSB0aGlzWWVhcikge1xuICAgICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0RXhwYW5kZWREYXRlKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgIHJldHVybiAoXG4gICAgICBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICAgICAgd2Vla2RheTogXCJzaG9ydFwiLFxuICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICB9KSArXG4gICAgICBcIiwgXCIgK1xuICAgICAgZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgICAgIGhvdXIxMjogdHJ1ZSxcbiAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBsZXQgY3VycmVudFRvb2x0aXBJZDogc3RyaW5nID0gXCJcIjtcbiAgZnVuY3Rpb24gc2V0VG9vbHRpcChldmVudDogYW55KSB7XG4gICAgY3VycmVudFRvb2x0aXBJZCA9IGV2ZW50LmRldGFpbC50b29sdGlwSUQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQYXJ0aWNpcGFudHModGhyZWFkOiBUaHJlYWQpOiBzdHJpbmdbXSB7XG4gICAgbGV0IHBhcnRpY2lwYW50c0xpc3Q6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aHJlYWQubWVzc2FnZXM7XG4gICAgY29uc3QgZHJhZnRzID0gdGhyZWFkLmRyYWZ0cztcblxuICAgIGZvciAobGV0IGkgPSBtZXNzYWdlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgaWYgKHBhcnRpY2lwYW50c0xpc3QubGVuZ3RoID09IDIpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjb25zdCBtc2dGcm9tID0gbWVzc2FnZXNbaV0uZnJvbTtcbiAgICAgIGlmIChtc2dGcm9tICYmIG1zZ0Zyb20ubGVuZ3RoID4gMCAmJiBtc2dGcm9tKSB7XG4gICAgICAgIGNvbnN0IHBhcnRpY2lwYW50TmFtZSA9XG4gICAgICAgICAgbXNnRnJvbVswXS5lbWFpbCA9PT0gdXNlckVtYWlsXG4gICAgICAgICAgICA/IFwiTWVcIlxuICAgICAgICAgICAgOiBtc2dGcm9tWzBdLm5hbWUgfHwgbXNnRnJvbVswXS5lbWFpbDtcbiAgICAgICAgaWYgKCFwYXJ0aWNpcGFudHNMaXN0LmluY2x1ZGVzKHBhcnRpY2lwYW50TmFtZSkpIHtcbiAgICAgICAgICBwYXJ0aWNpcGFudHNMaXN0LnB1c2gocGFydGljaXBhbnROYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZHJhZnRzLmxlbmd0aCkge1xuICAgICAgcGFydGljaXBhbnRzTGlzdC51bnNoaWZ0KFwiRHJhZnRcIik7XG4gICAgfVxuICAgIHJldHVybiBwYXJ0aWNpcGFudHNMaXN0O1xuICB9XG5cbiAgbGV0IGlzRGVsZXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAkOiBpc0RlbGV0ZWQgPVxuICAgICFhY3RpdmVUaHJlYWQ/Lm1lc3NhZ2VzPy5sZW5ndGggJiYgIWFjdGl2ZVRocmVhZD8uZHJhZnRzPy5sZW5ndGg7XG5cbiAgZnVuY3Rpb24gc2hvd1NlY29uZEZyb21QYXJ0aWNpcGFudChcbiAgICBtZXNzYWdlczogTWVzc2FnZVtdLFxuICAgIHBhcnRpY2lwYW50czogUGFydGljaXBhbnRbXSxcbiAgKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIG1lc3NhZ2VzICYmXG4gICAgICBwYXJ0aWNpcGFudHMgJiZcbiAgICAgIG1lc3NhZ2VzLmxlbmd0aCA+IDEgJiZcbiAgICAgIHBhcnRpY2lwYW50cy5sZW5ndGggPj0gMiAmJlxuICAgICAgbWVzc2FnZXNbMF0/LmZyb20ubGVuZ3RoICYmXG4gICAgICBwYXJ0aWNpcGFudHNbMF0uZW1haWwgIT09IG1lc3NhZ2VzW21lc3NhZ2VzLmxlbmd0aCAtIDFdPy5mcm9tWzBdLmVtYWlsXG4gICAgKTtcbiAgfVxuXG4gIGxldCBhdHRhY2hlZEZpbGVzOiBSZWNvcmQ8c3RyaW5nLCBGaWxlW10+ID0ge307XG5cbiAgJDogYWN0aXZlVGhyZWFkID8gaW5pdGlhbGl6ZUF0dGFjaGVkRmlsZXMoKSA6IFwiXCI7XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUF0dGFjaGVkRmlsZXMoKSB7XG4gICAgY29uc3QgbWVzc2FnZVR5cGUgPSBnZXRNZXNzYWdlVHlwZShhY3RpdmVUaHJlYWQpO1xuICAgIGF0dGFjaGVkRmlsZXMgPSBhY3RpdmVUaHJlYWRbbWVzc2FnZVR5cGVdPy5yZWR1Y2UoXG4gICAgICAoZmlsZXM6IFJlY29yZDxzdHJpbmcsIEZpbGVbXT4sIG1lc3NhZ2UpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBbZmlsZUluZGV4LCBmaWxlXSBvZiBtZXNzYWdlLmZpbGVzLmVudHJpZXMoKSkge1xuICAgICAgICAgIGlmIChpc0ZpbGVBbkF0dGFjaG1lbnQoZmlsZSkpIHtcbiAgICAgICAgICAgIGlmICghZmlsZXNbbWVzc2FnZS5pZF0pIHtcbiAgICAgICAgICAgICAgZmlsZXNbbWVzc2FnZS5pZF0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbGVzW21lc3NhZ2UuaWRdID0gW1xuICAgICAgICAgICAgICAuLi5maWxlc1ttZXNzYWdlLmlkXSxcbiAgICAgICAgICAgICAgbWVzc2FnZS5maWxlc1tmaWxlSW5kZXhdLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpbGVzO1xuICAgICAgfSxcbiAgICAgIHt9LFxuICAgICk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXRNZXNzYWdlV2l0aElubGluZUZpbGVzKG1lc3NhZ2U6IE1lc3NhZ2UpOiBQcm9taXNlPE1lc3NhZ2U+IHtcbiAgICBjb25zdCBmZXRjaGVkRmlsZXMgPSBhd2FpdCBGaWxlc1N0b3JlLmdldEZpbGVzRm9yTWVzc2FnZShtZXNzYWdlLCB7XG4gICAgICBjb21wb25lbnRfaWQ6IGlkLFxuICAgICAgYWNjZXNzX3Rva2VuLFxuICAgIH0pO1xuICAgIGZvciAoY29uc3QgZmlsZSBvZiBPYmplY3QudmFsdWVzKGZldGNoZWRGaWxlcykpIHtcbiAgICAgIGlmIChtZXNzYWdlLmJvZHkpIHtcbiAgICAgICAgbWVzc2FnZS5ib2R5ID0gbWVzc2FnZS5ib2R5Py5yZXBsYWNlQWxsKFxuICAgICAgICAgIGBzcmM9XCJjaWQ6JHtmaWxlLmNvbnRlbnRfaWR9XCJgLFxuICAgICAgICAgIGBzcmM9XCJkYXRhOiR7ZmlsZS5jb250ZW50X3R5cGV9O2Jhc2U2NCwke2ZpbGUuZGF0YX1cImAsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZG93bmxvYWRTZWxlY3RlZEZpbGUoZXZlbnQ6IE1vdXNlRXZlbnQsIGZpbGU6IEZpbGUpIHtcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoaWQgJiYgKChhY3RpdmVUaHJlYWQgJiYgX3RoaXMudGhyZWFkX2lkKSB8fCBfdGhpcy5tZXNzYWdlX2lkKSkge1xuICAgICAgY29uc3QgZG93bmxvYWRlZEZpbGVEYXRhID0gYXdhaXQgZG93bmxvYWRGaWxlKHtcbiAgICAgICAgZmlsZV9pZDogZmlsZS5pZCxcbiAgICAgICAgY29tcG9uZW50X2lkOiBpZCxcbiAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgfSk7XG4gICAgICBkb3dubG9hZEF0dGFjaGVkRmlsZShkb3dubG9hZGVkRmlsZURhdGEsIGZpbGUpO1xuICAgIH1cbiAgICBkaXNwYXRjaEV2ZW50KFwiZG93bmxvYWRDbGlja2VkXCIsIHtcbiAgICAgIGV2ZW50LFxuICAgICAgdGhyZWFkOiBhY3RpdmVUaHJlYWQsXG4gICAgICBmaWxlLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlRG93bmxvYWRGcm9tTWVzc2FnZShldmVudDogTW91c2VFdmVudCkge1xuICAgIGNvbnN0IGZpbGUgPSAoPGFueT5ldmVudC5kZXRhaWwpLmZpbGU7XG4gICAgZG93bmxvYWRTZWxlY3RlZEZpbGUoZXZlbnQsIGZpbGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNUaHJlYWRBRHJhZnRFbWFpbChjdXJyZW50VGhyZWFkOiBUaHJlYWQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY3VycmVudFRocmVhZCAmJiBjdXJyZW50VGhyZWFkLmRyYWZ0cz8ubGVuZ3RoID4gMDtcbiAgfVxuXG4gIGxldCBsYXRlc3RNZXNzYWdlTm9kZTogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgJDogbGF0ZXN0TWVzc2FnZU5vZGUgPSBtZXNzYWdlUmVmc1thY3RpdmVUaHJlYWQ/Lm1lc3NhZ2VzPy5sZW5ndGggLSAxXTtcbiAgbGV0IHNjcm9sbGVkVG9MYXRlc3QgPSBmYWxzZTtcblxuICAkOiBpZiAobGF0ZXN0TWVzc2FnZU5vZGUgJiYgIXNjcm9sbGVkVG9MYXRlc3QpIHtcbiAgICAvLyBzY3JvbGwgdG8gbGF0ZXN0IG1lc3NhZ2UgaWYgaXQncyBvdXRzaWRlIG9mIHRoZSB2aWV3cG9ydFxuICAgIGlmIChsYXRlc3RNZXNzYWdlTm9kZS5vZmZzZXRUb3AgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgIGxhdGVzdE1lc3NhZ2VOb2RlLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcImVuZFwiIH0pO1xuICAgICAgc2Nyb2xsZWRUb0xhdGVzdCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWVzc2FnZVR5cGUoXG4gICAgY3VycmVudFRocmVhZDogVGhyZWFkLFxuICApOiBrZXlvZiBQaWNrPENvbnZlcnNhdGlvbiwgXCJtZXNzYWdlc1wiIHwgXCJkcmFmdHNcIj4ge1xuICAgIHJldHVybiBjdXJyZW50VGhyZWFkW01lc3NhZ2VUeXBlLkRSQUZUU10ubGVuZ3RoICYmXG4gICAgICAhY3VycmVudFRocmVhZFtNZXNzYWdlVHlwZS5NRVNTQUdFU10ubGVuZ3RoXG4gICAgICA/IE1lc3NhZ2VUeXBlLkRSQUZUU1xuICAgICAgOiBNZXNzYWdlVHlwZS5NRVNTQUdFUztcbiAgfVxuXG4gIGludGVyZmFjZSBEaXNwbGF5ZWRQYXJ0aWNpcGFudCBleHRlbmRzIFBhcnRpY2lwYW50IHtcbiAgICBfdHlwZTogXCJ0b1wiIHwgXCJjY1wiIHwgXCJiY2NcIjtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhbiBhZ2dyZWdhdGVkIGxpc3Qgb2YgcGFydGljaXBhbnRzIGluY2x1ZGluZyB0aGVpciBfdHlwZS5cbiAgICovXG4gIGZ1bmN0aW9uIGdldEFsbFJlY2lwaWVudHMoe1xuICAgIHRvLFxuICAgIGNjLFxuICAgIGJjYyxcbiAgfTogUmVjb3JkPFwidG9cIiB8IFwiY2NcIiB8IFwiYmNjXCIsIFBhcnRpY2lwYW50W10+KTogUHJvbWlzZTxcbiAgICBEaXNwbGF5ZWRQYXJ0aWNpcGFudFtdXG4gID4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW1xuICAgICAgLi4uYWRkS2V5VmFsdWU8RGlzcGxheWVkUGFydGljaXBhbnQ+KHRvLCB7IF90eXBlOiBcInRvXCIgfSksXG4gICAgICAuLi5hZGRLZXlWYWx1ZTxEaXNwbGF5ZWRQYXJ0aWNpcGFudD4oY2MsIHsgX3R5cGU6IFwiY2NcIiB9KSxcbiAgICAgIC4uLmFkZEtleVZhbHVlPERpc3BsYXllZFBhcnRpY2lwYW50PihiY2MsIHsgX3R5cGU6IFwiYmNjXCIgfSksXG4gICAgXSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyBvZiBwYXJ0aWNpcGFudHMgbmFtZXMgYW5kIGVtYWlscyBhY2NvcmRpbmcgdG8gdGhlaXIgX3R5cGUgKHRvLCBjYywgYmNjKVxuICAgKiBlZy4gdG86IHJlY2lwaWVudEBvdXRsb29rLmNvbSwgY2M6IHJlY2lwaWVudEB5YWhvby5jb20sIGJjYzogcmVjaXBpZW50QG55bGFzLmNvbVxuICAgKi9cbiAgZnVuY3Rpb24gYWdncmVnYXRlUmVjaXBpZW50c1N0cmluZyhcbiAgICBhbGxSZWNpcGllbnRzOiBEaXNwbGF5ZWRQYXJ0aWNpcGFudFtdLFxuICApOiBzdHJpbmcge1xuICAgIHJldHVybiBhbGxSZWNpcGllbnRzLnJlZHVjZSgoYWdncmVnYXRlZFJlY2lwaWVudHMsIHJlY2lwaWVudCwgaSkgPT4ge1xuICAgICAgY29uc3QgZW1haWxUZXh0ID1cbiAgICAgICAgcmVjaXBpZW50Lm5hbWUgJiYgcmVjaXBpZW50Lm5hbWUgIT09IHJlY2lwaWVudC5lbWFpbFxuICAgICAgICAgID8gYCR7cmVjaXBpZW50Lm5hbWV9IDwke3JlY2lwaWVudC5lbWFpbH0+YFxuICAgICAgICAgIDogcmVjaXBpZW50LmVtYWlsO1xuXG4gICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICBhZ2dyZWdhdGVkUmVjaXBpZW50cyArPSBgdG86ICR7ZW1haWxUZXh0fSxcXG5gO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgcmVjaXBpZW50Ll90eXBlID09PSBcImNjXCIgJiZcbiAgICAgICAgIWFnZ3JlZ2F0ZWRSZWNpcGllbnRzLmluY2x1ZGVzKFwiY2M6XCIpXG4gICAgICApIHtcbiAgICAgICAgYWdncmVnYXRlZFJlY2lwaWVudHMgKz0gYGNjOiAke2VtYWlsVGV4dH0sXFxuYDtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHJlY2lwaWVudC5fdHlwZSA9PT0gXCJiY2NcIiAmJlxuICAgICAgICAhYWdncmVnYXRlZFJlY2lwaWVudHMuaW5jbHVkZXMoXCJiY2M6XCIpXG4gICAgICApIHtcbiAgICAgICAgYWdncmVnYXRlZFJlY2lwaWVudHMgKz0gYGJjYzogJHtlbWFpbFRleHR9LFxcbmA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZ2dyZWdhdGVkUmVjaXBpZW50cyArPSBgJHtlbWFpbFRleHR9LFxcbmA7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWdncmVnYXRlZFJlY2lwaWVudHM7XG4gICAgfSwgXCJcIik7XG4gIH1cblxuICBsZXQgdGhlbWVVcmw6IHN0cmluZztcbiAgJDogaWYgKCEhX3RoaXMudGhlbWUpIHtcbiAgICBpZiAoX3RoaXMudGhlbWUuc3RhcnRzV2l0aChcIi5cIikgfHwgX3RoaXMudGhlbWUuc3RhcnRzV2l0aChcImh0dHBcIikpIHtcbiAgICAgIC8vIElmIGN1c3RvbSB1cmwgc3VwcGxpZWRcbiAgICAgIHRoZW1lVXJsID0gX3RoaXMudGhlbWU7XG4gICAgfSBlbHNlIGlmIChfdGhpcy50aGVtZSkge1xuICAgICAgdGhlbWVVcmwgPSBgaHR0cHM6Ly91bnBrZy5jb20vQG55bGFzL2NvbXBvbmVudHMtZW1haWxAJHtwa2cudmVyc2lvbn0vdGhlbWVzLyR7X3RoaXMudGhlbWV9LmNzc2A7XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4gIEB1c2UgXCJzYXNzOmxpc3RcIjtcbiAgQGltcG9ydCBcIi4uLy4uL3RoZW1pbmcvcmVzZXQuc2Nzc1wiO1xuICBAaW1wb3J0IFwiLi4vLi4vdGhlbWluZy9hbmltYXRpb24uc2Nzc1wiO1xuICBAaW1wb3J0IFwiLi4vLi4vdGhlbWluZy92YXJpYWJsZXMuc2Nzc1wiO1xuICBAaW1wb3J0IFwiLi9zdHlsZXMvZW1haWwuc2Nzc1wiO1xuXG4gICRob3Zlci1vdXRsaW5lLXdpZHRoOiAycHg7XG4gICRjb2xsYXBzZWQtaGVpZ2h0OiA1NnB4O1xuICAkbW9iaWxlLWNvbGxhcHNlZC1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICAkc3BhY2luZy14czogMC41cmVtO1xuICAkc3BhY2luZy1zOiAwLjdyZW07XG4gICRzcGFjaW5nLW06IDFyZW07XG4gICRzcGFjaW5nLWw6IDEuNXJlbTtcbiAgJHNwYWNpbmcteGw6IDIuNXJlbTtcblxuICBtYWluIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZm9udC1mYW1pbHk6IHZhcihcbiAgICAgIC0tbnlsYXMtZW1haWwtZm9udC1mYW1pbHksXG4gICAgICAtYXBwbGUtc3lzdGVtLFxuICAgICAgQmxpbmtNYWNTeXN0ZW1Gb250LFxuICAgICAgc2Fucy1zZXJpZlxuICAgICk7XG4gICAgLmVtYWlsLXJvdyB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ueWxhcy1lbWFpbC1iYWNrZ3JvdW5kLCB2YXIoLS1ncmV5LWxpZ2h0ZXN0KSk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ueWxhcy1lbWFpbC1ib3JkZXItc3R5bGUsIHZhcigtLWdyZXktbGlnaHRlcikpO1xuXG4gICAgICBueWxhcy10b29sdGlwIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgLmRlZmF1bHQtYXZhdGFyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbnlsYXMtZGVmYXVsdC1hdmF0YXItYmFja2dyb3VuZCwgdmFyKC0tYmx1ZSkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ueWxhcy1kZWZhdWx0LWF2YXRhci1jb2xvciwgdmFyKC0td2hpdGUpKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICYuZGVsZXRlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcbiAgICAgICAgfVxuICAgICAgICAmLmRyYWZ0IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ueWxhcy1lbWFpbC1zbmlwcGV0LWNvbG9yLCB2YXIoLS1ncmV5LWRhcmspKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaGVhZGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIHBhZGRpbmc6ICRzcGFjaW5nLXhzO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICAgIGRpdi5zdGFycmVkIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlxcMjYwNVwiO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ueWxhcy1lbWFpbC1zdGFyLWJ1dHRvbi1pbmFjdGl2ZS1jb2xvciwgIzhkOTRhNSk7XG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuc3RhcnJlZDpiZWZvcmUge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW55bGFzLWVtYWlsLXN0YXItYnV0dG9uLWFjdGl2ZS1jb2xvciwgI2ZmYzEwNyk7XG4gICAgICAgICAgfVxuICAgICAgICAgICY6aG92ZXI6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ueWxhcy1lbWFpbC1zdGFyLWJ1dHRvbi1ob3Zlci1jb2xvciwgI2ZmYzEwNyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLmV4cGFuZGVkIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbnlsYXMtZW1haWwtYm9keS1iYWNrZ3JvdW5kLCB2YXIoLS13aGl0ZSkpO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZFxuICAgICAgICAgIHZhcigtLW55bGFzLWVtYWlsLWJvcmRlci1zdHlsZS1leHBhbmRlZCwgdmFyKC0tZ3JleS1saWdodGVyKSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgJG91dGxpbmUtc3R5bGU6IDFweCBzb2xpZCB2YXIoLS1ncmV5LWxpZ2h0ZXIpO1xuICAgICAgICBAbWl4aW4gYmFyU3R5bGUge1xuICAgICAgICAgIG91dGxpbmU6ICRvdXRsaW5lLXN0eWxlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XG4gICAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZW1haWwtbG9hZGVyIHtcbiAgICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgLnNwaW5uZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiByb3RhdGUgMnMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gICAgICAgICAgdG8ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc3ViamVjdC1oZWFkZXIge1xuICAgICAgICAgIEBpbmNsdWRlIGJhclN0eWxlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1ueWxhcy1lbWFpbC1zdWJqZWN0LWNvbG9yLCBibGFjayk7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbnlsYXMtZW1haWwtaGVhZGVyLWJhY2tncm91bmQsIHdoaXRlKTtcbiAgICAgICAgICAmLm1haWxib3gge1xuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAmID4gZGl2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZ2FwOiAkc3BhY2luZy1tO1xuXG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKFxuICAgICAgICAgICAgICAgICAgLS1ueWxhcy1lbWFpbC1idXR0b24taG92ZXItYmFja2dyb3VuZCxcbiAgICAgICAgICAgICAgICAgIHZhcigtLWdyZXktbGlnaHRlcilcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICoge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxZW07XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyKC0tbnlsYXMtZW1haWwtc3ViamVjdC1jb2xvciwgdmFyKC0tZ3JleS1kYXJrKSk7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXIoLS1ueWxhcy1lbWFpbC1zdWJqZWN0LWNvbG9yLCB2YXIoLS1ncmV5LWRhcmspKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBbcm9sZT1cInRvb2xiYXJcIl0ge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICoge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxZW07XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBbcm9sZT1cInRvb2xiYXJcIl0ge1xuICAgICAgICAgIEBpbmNsdWRlIGJhclN0eWxlO1xuICAgICAgICAgIHBhZGRpbmc6ICRzcGFjaW5nLXMgJHNwYWNpbmctbTtcbiAgICAgICAgICBnYXA6ICRzcGFjaW5nLW07XG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgKiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxZW07XG4gICAgICAgICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICAgICAgICBzdHJva2U6IHZhcigtLW55bGFzLWVtYWlsLWJvZHktY29sb3IsIHZhcigtLWdyZXktZGFyaykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5tZXNzYWdlLWhlYWQgW3JvbGU9XCJ0b29sYmFyXCJdIHtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lc3NhZ2UtaGVhZCBbcm9sZT1cInRvb2xiYXJcIl0gYnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmljb24tY29udGFpbmVyLFxuICAgICAgICAuaWNvbi1jb250YWluZXIgPiAqIHtcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAmLmV4cGFuZGVkLW1haWxib3gtdGhyZWFkIHtcbiAgICAgICAgICAubWVzc2FnZS1mcm9tIHtcbiAgICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGl2LmluZGl2aWR1YWwtbWVzc2FnZSB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBwYWRkaW5nOiAkc3BhY2luZy14cztcblxuICAgICAgICAgIGRpdi5tZXNzYWdlLWJvZHkge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ueWxhcy1lbWFpbC1ib2R5LWNvbG9yLCBibGFjayk7XG4gICAgICAgICAgICBkaXYuYXR0YWNobWVudCB7XG4gICAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAkc3BhY2luZy14cztcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkXG4gICAgICAgICAgICAgICAgICB2YXIoLS1ueWxhcy1lbWFpbC1hdHRhY2htZW50LWJvcmRlci1zdHlsZSwgdmFyKC0tZ3JleSkpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLW55bGFzLWVtYWlsLWF0dGFjaG1lbnQtYnV0dG9uLWNvbG9yLCBpbmhlcml0KTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ueWxhcy1lbWFpbC1hdHRhY2htZW50LWJ1dHRvbi1iZywgd2hpdGUpO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKFxuICAgICAgICAgICAgICAgICAgICAtLW55bGFzLWVtYWlsLWF0dGFjaG1lbnQtYnV0dG9uLWhvdmVyLWJnLFxuICAgICAgICAgICAgICAgICAgICB2YXIoLS1ncmV5LWxpZ2h0KVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmNvbmRlbnNlZCB7XG4gICAgICAgICAgICBkaXYuc25pcHBldCB7XG4gICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbnlsYXMtZW1haWwtc25pcHBldC1jb2xvciwgdmFyKC0tZ3JleS1kYXJrKSk7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6ICRzcGFjaW5nLXhzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGl2Lm1lc3NhZ2UtaGVhZCB7XG4gICAgICAgICAgICAgIC5hdmF0YXItaW5mbyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGdhcDogJHNwYWNpbmctcztcblxuICAgICAgICAgICAgICAgICYgLmRyYWZ0LXRvIHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ueWxhcy1lbWFpbC1zbmlwcGV0LWNvbG9yLCB2YXIoLS1ncmV5LWRhcmspKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgJjpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkXG4gICAgICAgICAgICAgIHZhcigtLW55bGFzLWVtYWlsLWJvcmRlci1zdHlsZS1leHBhbmRlZCwgdmFyKC0tZ3JleS1saWdodGVyKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgICY6bm90KC5sYXN0LW1lc3NhZ2UpIHtcbiAgICAgICAgICAgICYuZXhwYW5kZWQge1xuICAgICAgICAgICAgICBkaXYubWVzc2FnZS1oZWFkOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IG4tcmVzaXplO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgICYubGFzdC1tZXNzYWdlIHtcbiAgICAgICAgICAgIC5tZXNzYWdlLWhlYWQ6aG92ZXIsXG4gICAgICAgICAgICAubWVzc2FnZS1ib2R5OmhvdmVyIHtcbiAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICYuYWN0aXZlLWRyYWZ0IHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW55bGFzLWVtYWlsLXNuaXBwZXQtY29sb3IsIHZhcigtLWdyZXktZGFyaykpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpdi5tZXNzYWdlLWhlYWQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgICAgIGdhcDogJHNwYWNpbmcteHM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpdi5tZXNzYWdlLWRhdGUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ueWxhcy1lbWFpbC1tZXNzYWdlLWRhdGUtY29sb3IsIHZhcigtLWdyZXkpKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXYubWVzc2FnZS1mcm9tIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW55bGFzLWVtYWlsLW1lc3NhZ2UtZnJvbS1jb2xvciwgYmxhY2spO1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICYubmFtZSB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLmV4cGFuZGVkIHtcbiAgICAgICAgICBkaXYubWVzc2FnZS1oZWFkIHtcbiAgICAgICAgICAgICYuZHJhZnQge1xuICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpdi5tZXNzYWdlLWZyb20tdG8ge1xuICAgICAgICAgICAgICBtYXJnaW46IDAuNXJlbSAwO1xuICAgICAgICAgICAgICAuYXZhdGFyLWluZm8ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBnYXA6ICRzcGFjaW5nLXM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGl2Lm1lc3NhZ2UtdG8ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ueWxhcy1lbWFpbC1tZXNzYWdlLXRvLWNvbG9yLCB2YXIoLS1ncmV5KSk7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygzMnB4ICsgMC43cmVtKTtcbiAgICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDE2cHg7XG5cbiAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgJi5jb25kZW5zZWQge1xuICAgICAgICAgICAgZ2FwOiAxcmVtO1xuICAgICAgICAgICAgJjpob3ZlcixcbiAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICBjdXJzb3I6IHMtcmVzaXplO1xuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3Bhbi5zbmlwcGV0IHtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ueWxhcy1lbWFpbC1zbmlwcGV0LWNvbG9yLCB2YXIoLS1ncmV5LWRhcmspKTtcbiAgICAgICAgICAgICAgc3Bhbi5pbml0aWFsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNwYW4ubG9hZGluZyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgLmZyb20tbWVzc2FnZS1jb3VudCB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xuICAgICAgICBncmlkLWdhcDogJHNwYWNpbmctbTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tbnlsYXMtZW1haWwtcGFydGljaXBhbnQtY29sb3IsIHZhcigtLWdyZXktZGFyaykpO1xuICAgICAgICAuZnJvbS1wYXJ0aWNpcGFudHMge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgZml0LWNvbnRlbnQoNjBweCk7XG4gICAgICAgICAgLnBhcnRpY2lwYW50cy1uYW1lIHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgLmZyb20tc3ViLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAmLmRlbGV0ZWQtZW1haWwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ueWxhcy1lbWFpbC1zbmlwcGV0LWNvbG9yLCB2YXIoLS1ncmV5LWRhcmspKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAmLnNlY29uZCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAmLnBhcnRpY2lwYW50LWxhYmVsIHtcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICYuZHJhZnQtbGFiZWwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ueWxhcy1lbWFpbC1kcmFmdC1sYWJlbC1jb2xvciwgI2RkNGIzOSk7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLnBhcnRpY2lwYW50cy1jb3VudCB7XG4gICAgICAgICAgICAuc2hvdy1vbi1tb2JpbGUge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2hvdy1vbi1kZXNrdG9wIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5zdWJqZWN0LXNuaXBwZXQtYXR0YWNobWVudCB7XG4gICAgICAgIHBhZGRpbmc6ICRzcGFjaW5nLXhzO1xuICAgICAgICBwYWRkaW5nLXRvcDogMC40cmVtO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAuc3ViamVjdC1zbmlwcGV0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZ2FwOiAwLjVyZW07XG4gICAgICAgICAgY29sb3I6IHZhcigtLW55bGFzLWVtYWlsLXNuaXBwZXQtY29sb3IsIHZhcigtLWdyZXktZGFyaykpO1xuXG4gICAgICAgICAgLnN1YmplY3Qge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW55bGFzLWVtYWlsLXN1YmplY3QtY29sb3IsIHZhcigtLWJsYWNrKSk7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zbmlwcGV0IHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAmLmRlbGV0ZWQge1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbnlsYXMtZW1haWwtc25pcHBldC1jb2xvciwgdmFyKC0tZ3JleS1kYXJrKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmF0dGFjaG1lbnQge1xuICAgICAgICAgIG1hcmdpbi10b3A6ICRzcGFjaW5nLXhzO1xuICAgICAgICAgIGdhcDogMXJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG5cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgcGFkZGluZzogMC4zcmVtIDFyZW07XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZFxuICAgICAgICAgICAgICB2YXIoLS1ueWxhcy1lbWFpbC1hdHRhY2htZW50LWJvcmRlci1zdHlsZSwgdmFyKC0tZ3JleSkpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ueWxhcy1lbWFpbC1hdHRhY2htZW50LWJ1dHRvbi1jb2xvciwgaW5oZXJpdCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ueWxhcy1lbWFpbC1hdHRhY2htZW50LWJ1dHRvbi1iZywgd2hpdGUpO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcihcbiAgICAgICAgICAgICAgICAtLW55bGFzLWVtYWlsLWF0dGFjaG1lbnQtYnV0dG9uLWhvdmVyLWJnLFxuICAgICAgICAgICAgICAgIHZhcigtLWdyZXktbGlnaHQpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1ueWxhcy1lbWFpbC1zbmlwcGV0LWNvbG9yLCB2YXIoLS1ncmV5LWRhcmspKTtcbiAgICAgICAgICBzcGFuLnN1YmplY3Qge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW55bGFzLWVtYWlsLXN1YmplY3QtY29sb3IsIHZhcigtLWJsYWNrKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgICYuZGF0ZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGdhcDogJHNwYWNpbmcteHM7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ueWxhcy1lbWFpbC1tZXNzYWdlLWRhdGUtY29sb3IsIHZhcigtLWdyZXkpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5kYXRlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGdhcDogMXJlbTtcbiAgICAgICAgJiA+IDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbixcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgICoge1xuICAgICAgICAgICAgd2lkdGg6IDFlbTtcbiAgICAgICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICAgICAgZmlsbDogdmFyKC0tbnlsYXMtZW1haWwtYWN0aW9uLWljb25zLWNvbG9yLCB2YXIoLS1ncmV5LWRhcmspKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5jb25kZW5zZWQge1xuICAgICAgICBoZWlnaHQ6ICRtb2JpbGUtY29sbGFwc2VkLWhlaWdodDtcbiAgICAgICAgcGFkZGluZzogJHNwYWNpbmcteHM7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgQGluY2x1ZGUgY29uZGVuc2VkLWdyaWQ7XG4gICAgICAgICYuZGlzYWJsZS1jbGljayB7XG4gICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyZXktbGlnaHRlcik7XG4gICAgICAgIH1cblxuICAgICAgICAuZnJvbS1zdGFyIHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweCBhdXRvO1xuICAgICAgICAgIGNvbHVtbi1nYXA6ICRzcGFjaW5nLXhzO1xuICAgICAgICB9XG4gICAgICAgIC50aHJlYWQtbWVzc2FnZS1jb3VudCB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLW55bGFzLWVtYWlsLXRocmVhZC1tZXNzYWdlLWNvdW50LWNvbG9yLCB2YXIoLS1ibGFjaykpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIC5kYXRlIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgICAmLnVucmVhZCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbnlsYXMtZW1haWwtdW5yZWFkLWJhY2tncm91bmQsIHdoaXRlKTtcblxuICAgICAgICAgIC5mcm9tLW1lc3NhZ2UtY291bnQsXG4gICAgICAgICAgLmRhdGUsXG4gICAgICAgICAgLnN1YmplY3Qge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ueWxhcy1lbWFpbC11bnJlYWQtc3ViamVjdC1jb2xvciwgdmFyKC0tYmxhY2spKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGhyZWFkLW1lc3NhZ2UtY291bnQge1xuICAgICAgICAgICAgY29sb3I6IHZhcihcbiAgICAgICAgICAgICAgLS1ueWxhcy1lbWFpbC11bnJlYWQtdGhyZWFkLW1lc3NhZ2UtY291bnQtY29sb3IsXG4gICAgICAgICAgICAgIHZhcigtLWJsdWUpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5leHBhbmRlZC5zaW5ndWxhciB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICB9XG4gICAgICAgIGRpdi5pbmRpdmlkdWFsLW1lc3NhZ2U6bm90KC5sYXN0LW1lc3NhZ2UpLmV4cGFuZGVkIHtcbiAgICAgICAgICAubWVzc2FnZS1oZWFkOmhvdmVyLFxuICAgICAgICAgIC5tZXNzYWdlLWJvZHk6aG92ZXIge1xuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAjeyRkZXNrdG9wfSB7XG4gICAgbWFpbiB7XG4gICAgICAuZW1haWwtcm93IHtcbiAgICAgICAgLmZyb20tbWVzc2FnZS1jb3VudCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgICAgICAgICAuZnJvbS1wYXJ0aWNpcGFudHMge1xuICAgICAgICAgICAgLnBhcnRpY2lwYW50cy1uYW1lIHtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAuZnJvbS1zdWItc2VjdGlvbi5zZWNvbmQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhcnRpY2lwYW50cy1jb3VudCB7XG4gICAgICAgICAgICAgIC5zaG93LW9uLW1vYmlsZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2hvdy1vbi1kZXNrdG9wIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmV4cGFuZGVkLnNpbmd1bGFyIHtcbiAgICAgICAgICAuaW5kaXZpZHVhbC1tZXNzYWdlLmV4cGFuZGVkIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAkc3BhY2luZy14cztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5jb25kZW5zZWQge1xuICAgICAgICAgIHBhZGRpbmc6ICRzcGFjaW5nLXhzO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcblxuICAgICAgICAgIGRpdi5zdGFycmVkIHtcbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICY6aG92ZXI6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbnlsYXMtZW1haWwtc3Rhci1idXR0b24taG92ZXItY29sb3IsICNmZmMxMDcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmRhdGUge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAkc3BhY2luZy14cztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgZ2FwOiAkc3BhY2luZy14cztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ueWxhcy1lbWFpbC1tZXNzYWdlLWRhdGUtY29sb3IsIHZhcigtLWdyZXkpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGhyZWFkLW1lc3NhZ2UtY291bnQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuZXhwYW5kZWQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgcGFkZGluZzogJHNwYWNpbmctbSAkc3BhY2luZy14bDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2LmluZGl2aWR1YWwtbWVzc2FnZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAkc3BhY2luZy1tIDA7XG4gICAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcbiAgICAgICAgICAgIGRpdi5tZXNzYWdlLWhlYWQsXG4gICAgICAgICAgICBkaXYubWVzc2FnZS1ib2R5IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgJHNwYWNpbmcteGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXYubWVzc2FnZS1ib2R5IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5jb25kZW5zZWQge1xuICAgICAgICAgICAgICBkaXYuc25pcHBldCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwICRzcGFjaW5nLXhsO1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDk1dnc7XG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGRpdi5tZXNzYWdlLWhlYWQge1xuICAgICAgICAgICAgICAgICYuZHJhZnQge1xuICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRpdi5tZXNzYWdlLWRhdGUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuZXhwYW5kZWQge1xuICAgICAgICAgICAgICBkaXYubWVzc2FnZS1oZWFkIHtcbiAgICAgICAgICAgICAgICBkaXYubWVzc2FnZS1mcm9tLXRvIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogJHNwYWNpbmcteHMgMDtcbiAgICAgICAgICAgICAgICAgIGRpdi5tZXNzYWdlLXRvIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWJqZWN0LXNuaXBwZXQtYXR0YWNobWVudCB7XG4gICAgICAgICAgLnN1YmplY3Qtc25pcHBldCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbiAgICAgICAgICAgIGdhcDogMXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc3R5bGU+XG5cbjxueWxhcy1lcnJvciB7aWR9IC8+XG57I2lmIHRoZW1lVXJsfVxuICA8bGlua1xuICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgIGhyZWY9e3RoZW1lVXJsfVxuICAgIG9uOmxvYWQ9eygpID0+ICh0aGVtZUxvYWRlZCA9IHRydWUpfVxuICAgIG9uOmVycm9yPXsoKSA9PiAodGhlbWVMb2FkZWQgPSB0cnVlKX0gLz5cbnsvaWZ9XG48bWFpblxuICBjbGFzcz1cIm55bGFzLWVtYWlsXCJcbiAgZGF0YS1jeT1cIm55bGFzLWVtYWlsXCJcbiAgYmluZDp0aGlzPXttYWlufVxuICBvbjpjbGljaz17aGFuZGxlVGhyZWFkQ2xpY2t9XG4gIHRhYmluZGV4PVwiMFwiXG4gIG9uOmtleXByZXNzPXtoYW5kbGVUaHJlYWRLZXlwcmVzc30+XG4gIHsjaWYgX3RoaXMudGhyZWFkIHx8IF90aGlzLnRocmVhZF9pZH1cbiAgICB7I2F3YWl0IGFjdGl2ZVRocmVhZH1cbiAgICAgIExvYWRpbmcuLi5cbiAgICB7OnRoZW4gdGhyZWFkfVxuICAgICAgeyNpZiB0aHJlYWQgJiYgYWN0aXZlVGhyZWFkfVxuICAgICAgICB7I2lmIGFjdGl2ZVRocmVhZC5leHBhbmRlZH1cbiAgICAgICAgICA8IS0tIEV4cGFuZGVkIHRocmVhZCByb3cgLS0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJlbWFpbC1yb3cgZXhwYW5kZWQge190aGlzLmNsaWNrX2FjdGlvbiA9PT0gJ21haWxib3gnXG4gICAgICAgICAgICAgID8gJ2V4cGFuZGVkLW1haWxib3gtdGhyZWFkJ1xuICAgICAgICAgICAgICA6ICcnfVwiPlxuICAgICAgICAgICAgPGhlYWRlclxuICAgICAgICAgICAgICBjbGFzcz1cInN1YmplY3QtaGVhZGVyXCJcbiAgICAgICAgICAgICAgY2xhc3M6bWFpbGJveD17X3RoaXMuY2xpY2tfYWN0aW9uID09PSBcIm1haWxib3hcIn0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWJqZWN0LXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgeyNpZiBfdGhpcy5jbGlja19hY3Rpb24gPT09IFwibWFpbGJveFwifVxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17XCJSZXR1cm4gdG8gTWFpbGJveFwifVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtcIlJldHVybiB0byBNYWlsYm94XCJ9XG4gICAgICAgICAgICAgICAgICAgIG9uOmNsaWNrfHN0b3BQcm9wYWdhdGlvbj17cmV0dXJuVG9NYWlsYm94fT5cbiAgICAgICAgICAgICAgICAgICAgPExlZnRBcnJvd0xpbmVJY29uIC8+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgIDxoMT57dGhyZWFkPy5zdWJqZWN0fTwvaDE+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJ0b29sYmFyXCI+XG4gICAgICAgICAgICAgICAgeyNpZiBfdGhpcy5zaG93X3N0YXJ9XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhcnJlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9e3RocmVhZC5zdGFycmVkID8gXCJzdGFycmVkXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aHJlYWQuc3RhcnJlZCA/IFwiVW5zdGFyIHRocmVhZFwiIDogXCJTdGFyIHRocmVhZFwifVxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3RocmVhZC5zdGFycmVkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiVW5zdGFyIHRocmVhZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiU3RhciB0aHJlYWRcIn1cbiAgICAgICAgICAgICAgICAgICAgICByb2xlPVwic3dpdGNoXCJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNoZWNrZWQ9e3RocmVhZC5zdGFycmVkfVxuICAgICAgICAgICAgICAgICAgICAgIG9uOmNsaWNrfHN0b3BQcm9wYWdhdGlvbj17aGFuZGxlVGhyZWFkU3RhckNsaWNrfSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICB7I2lmIF90aGlzLnNob3dfdGhyZWFkX2FjdGlvbnN9XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVsZXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRlbGV0ZSB0aHJlYWQgLyBNb3ZlIHRvIHRyYXNoXCJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVsZXRlIHRocmVhZCAoTW92ZSB0byB0cmFzaClcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uOmNsaWNrfHN0b3BQcm9wYWdhdGlvbj17KGUpID0+IGRlbGV0ZUVtYWlsKGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHJhc2hJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVhZC1zdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtgTWFyayB0aHJlYWQgYXMgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVRocmVhZC51bnJlYWQgPyBcIlwiIDogXCJ1blwiXG4gICAgICAgICAgICAgICAgICAgICAgfXJlYWRgfVxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2BNYXJrIHRocmVhZCBhcyAke1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlVGhyZWFkLnVucmVhZCA/IFwiXCIgOiBcInVuXCJcbiAgICAgICAgICAgICAgICAgICAgICB9cmVhZGB9XG4gICAgICAgICAgICAgICAgICAgICAgb246Y2xpY2t8c3RvcFByb3BhZ2F0aW9uPXt0b2dnbGVVbnJlYWRTdGF0dXN9PlxuICAgICAgICAgICAgICAgICAgICAgIHsjaWYgYWN0aXZlVGhyZWFkLnVucmVhZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNYXJrUmVhZEljb24gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFya1VucmVhZEljb24gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICB7I2lmIGFjdGl2ZVRocmVhZC5tZXNzYWdlcy5sZW5ndGh9XG4gICAgICAgICAgICAgIHsjZWFjaCBhY3RpdmVUaHJlYWQubWVzc2FnZXMgYXMgbWVzc2FnZSwgbXNnSW5kZXh9XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3M6bGFzdC1tZXNzYWdlPXttc2dJbmRleCA9PT1cbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlVGhyZWFkLm1lc3NhZ2VzLmxlbmd0aCAtIDF9XG4gICAgICAgICAgICAgICAgICBjbGFzcz17YGluZGl2aWR1YWwtbWVzc2FnZSAke1xuICAgICAgICAgICAgICAgICAgICBtc2dJbmRleCA9PT0gYWN0aXZlVGhyZWFkLm1lc3NhZ2VzLmxlbmd0aCAtIDEgfHxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5leHBhbmRlZFxuICAgICAgICAgICAgICAgICAgICAgID8gXCJleHBhbmRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcImNvbmRlbnNlZFwiXG4gICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgIGJpbmQ6dGhpcz17bWVzc2FnZVJlZnNbbXNnSW5kZXhdfVxuICAgICAgICAgICAgICAgICAgb246Y2xpY2t8c3RvcFByb3BhZ2F0aW9uPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlRW1haWxDbGljayhlLCBtc2dJbmRleCl9XG4gICAgICAgICAgICAgICAgICBvbjprZXlwcmVzcz17KGUpID0+IGhhbmRsZUVtYWlsS2V5cHJlc3MoZSwgbXNnSW5kZXgpfT5cbiAgICAgICAgICAgICAgICAgIHsjaWYgbWVzc2FnZS5leHBhbmRlZCB8fCBtc2dJbmRleCA9PT0gYWN0aXZlVGhyZWFkLm1lc3NhZ2VzLmxlbmd0aCAtIDF9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLWhlYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1mcm9tLXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyNpZiBfdGhpcy5zaG93X2NvbnRhY3RfYXZhdGFyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWZhdWx0LWF2YXRhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG55bGFzLWNvbnRhY3QtaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRhY3RfcXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhY3Q9e2NvbnRhY3RzW21lc3NhZ2U/LmZyb21bMF0uZW1haWxdfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1mcm9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlckVtYWlsICYmIG1lc3NhZ2U/LmZyb21bMF0uZW1haWwgPT09IHVzZXJFbWFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1lc3NhZ2U/LmZyb21bMF0ubmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U/LmZyb21bMF0uZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gdG9vbHRpcCBjb21wb25lbnQgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG55bGFzLXRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOnRvZ2dsZVRvb2x0aXA9e3NldFRvb2x0aXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17bWVzc2FnZT8uaWQuc2xpY2UoMCwgMyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3Rvb2x0aXBfaWQ9e2N1cnJlbnRUb29sdGlwSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtEcm9wZG93blN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e21lc3NhZ2U/LmZyb21bMF0uZW1haWx9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS10b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7I2lmIG1lc3NhZ2U/LnRvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsjYXdhaXQgZ2V0QWxsUmVjaXBpZW50cyggeyB0bzogbWVzc2FnZS50bywgY2M6IG1lc3NhZ2UuY2MsIGJjYzogbWVzc2FnZS5iY2MgfSwgKSB0aGVuIGFsbFJlY2lwaWVudHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7I2VhY2ggYWxsUmVjaXBpZW50cy5zbGljZSgwLCBQQVJUSUNJUEFOVFNfVE9fVFJVTkNBVEUpIGFzIHJlY2lwaWVudCwgaX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyNpZiBpID09PSAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2B0byAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy55b3UgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjaXBpZW50LmVtYWlsID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnlvdS5lbWFpbF9hZGRyZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIk1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHs6ZWxzZSBpZiByZWNpcGllbnQuX3R5cGUgPT09IFwiY2NcIiAmJiBpID09PSBtZXNzYWdlLnRvLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHs6ZWxzZSBpZiByZWNpcGllbnQuX3R5cGUgPT09IFwiYmNjXCIgJiYgaSA9PT0gbWVzc2FnZS50by5sZW5ndGggKyBtZXNzYWdlLmNjLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJjYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7L2lmfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyNpZiByZWNpcGllbnQuZW1haWwgJiYgcmVjaXBpZW50Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVjaXBpZW50Lm5hbWUgPz8gX3RoaXMueW91Lm5hbWV9ICZsdDt7cmVjaXBpZW50LmVtYWlsfSZndDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7OmVsc2UgaWYgcmVjaXBpZW50LmVtYWlsICYmICFyZWNpcGllbnQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNpcGllbnQuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey9lYWNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyNpZiBhbGxSZWNpcGllbnRzLmxlbmd0aCA+IFBBUlRJQ0lQQU5UU19UT19UUlVOQ0FURX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bnlsYXMtdG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246dG9nZ2xlVG9vbHRpcD17c2V0VG9vbHRpcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgc2hvdy1tb3JlLXBhcnRpY2lwYW50cy0ke21lc3NhZ2UuaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfdG9vbHRpcF9pZD17Y3VycmVudFRvb2x0aXBJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e0Ryb3Bkb3duU3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17YEFuZCAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxSZWNpcGllbnRzLmxlbmd0aCAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBBUlRJQ0lQQU5UU19UT19UUlVOQ0FURVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBtb3JlYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2Ake2FnZ3JlZ2F0ZVJlY2lwaWVudHNTdHJpbmcoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFJlY2lwaWVudHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7L2F3YWl0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyNpZiBfdGhpcy5zaG93X3JlY2VpdmVkX3RpbWVzdGFtcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2UtZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdEV4cGFuZGVkRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUobWVzc2FnZS5kYXRlICogMTAwMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBhcmlhLWxhYmVsPVwiRW1haWwgQWN0aW9uc1wiIHJvbGU9XCJ0b29sYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsjaWYgX3RoaXMuc2hvd19yZXBseX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVwbHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1wiUmVwbHlcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17XCJSZXBseVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjpjbGlja3xzdG9wUHJvcGFnYXRpb249eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVJlcGx5Q2xpY2soZSwgbWVzc2FnZSwgXCJyZXBseVwiKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXBseUljb24gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7I2lmIF90aGlzLnNob3dfcmVwbHlfYWxsICYmIGNhblJlcGx5QWxsKG1lc3NhZ2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXBseS1hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1wiUmVwbHkgYWxsXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e1wiUmVwbHkgYWxsXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOmNsaWNrfHN0b3BQcm9wYWdhdGlvbj17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUmVwbHlDbGljayhlLCBtZXNzYWdlLCBcInJlcGx5X2FsbFwiKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXBseUFsbEljb24gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7I2lmIF90aGlzLnNob3dfZm9yd2FyZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9yd2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkZvcndhcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRm9yd2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOmNsaWNrfHN0b3BQcm9wYWdhdGlvbj17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRm9yd2FyZENsaWNrKGUsIG1lc3NhZ2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcndhcmRJY29uIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2UtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHsjaWYgX3RoaXMuY2xlYW5fY29udmVyc2F0aW9uICYmIG1lc3NhZ2UuY29udmVyc2F0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAge0BodG1sIERPTVB1cmlmeS5zYW5pdGl6ZShtZXNzYWdlLmNvbnZlcnNhdGlvbil9XG4gICAgICAgICAgICAgICAgICAgICAgezplbHNlIGlmIG1lc3NhZ2UgJiYgbWVzc2FnZS5ib2R5ICE9IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8bnlsYXMtbWVzc2FnZS1ib2R5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5PXttZXNzYWdlLmJvZHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOmRvd25sb2FkQ2xpY2tlZD17aGFuZGxlRG93bmxvYWRGcm9tTWVzc2FnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gSWYgYSB0aHJlYWQgaXMgYmVpbmcgcGFzc2VkIG1hbnVhbGx5IGFuZCB0aGVyZSBpcyBubyBib2R5LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2Ugd2lsbCBrZWVwIGxvYWRpbmcsIHNvIHRoZSBiZWxvdyBpcyBvdXIgZmFsbGJhY2sgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgezplbHNlIGlmICEhX3RoaXMudGhyZWFkICYmICFfdGhpcy50aHJlYWRfaWQgJiYgY2xpY2tfYWN0aW9uICE9IFwibWFpbGJveFwifVxuICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2UuYm9keSA/PyBtZXNzYWdlLnNuaXBwZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICB7I2lmIGF0dGFjaGVkRmlsZXNbbWVzc2FnZS5pZF0gJiYgQXJyYXkuaXNBcnJheShhdHRhY2hlZEZpbGVzW21lc3NhZ2UuaWRdKSAmJiBhdHRhY2hlZEZpbGVzW21lc3NhZ2UuaWRdLmxlbmd0aCA+IDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdHRhY2htZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyNlYWNoIGF0dGFjaGVkRmlsZXNbbWVzc2FnZS5pZF0gYXMgZmlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246Y2xpY2t8c3RvcFByb3BhZ2F0aW9uPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaEV2ZW50KFwiZmlsZUNsaWNrZWRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlOiBmaWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpbGUuZmlsZW5hbWUgfHwgZmlsZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbWFpbC1sb2FkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdJY29uIGNsYXNzPVwic3Bpbm5lclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgezplbHNlfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1oZWFkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF2YXRhci1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7I2lmIF90aGlzLnNob3dfY29udGFjdF9hdmF0YXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWZhdWx0LWF2YXRhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxueWxhcy1jb250YWN0LWltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udGFjdF9xdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhY3Q9e2NvbnRhY3RzW21lc3NhZ2U/LmZyb21bMF0uZW1haWxdfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1mcm9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt1c2VyRW1haWwgJiYgbWVzc2FnZT8uZnJvbVswXS5lbWFpbCA9PT0gdXNlckVtYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtZXNzYWdlPy5mcm9tWzBdLm5hbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT8uZnJvbVswXS5lbWFpbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gdG9vbHRpcCBjb21wb25lbnQgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxueWxhcy10b29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246dG9nZ2xlVG9vbHRpcD17c2V0VG9vbHRpcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17bWVzc2FnZT8uaWQuc2xpY2UoMCwgMyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF90b29sdGlwX2lkPXtjdXJyZW50VG9vbHRpcElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e0Ryb3Bkb3duU3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e21lc3NhZ2U/LmZyb21bMF0uZW1haWx9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsjaWYgX3RoaXMuc2hvd19yZWNlaXZlZF90aW1lc3RhbXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLWRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXRFeHBhbmRlZERhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKG1lc3NhZ2UuZGF0ZSAqIDEwMDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic25pcHBldFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlLnNuaXBwZXR9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey9lYWNofVxuICAgICAgICAgICAgezplbHNlfVxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNuaXBwZXRcIj57dGhyZWFkLnNuaXBwZXR9PC9zcGFuPlxuICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgIDwhLS0gRHJhZnQgbWVzc2FnZXMgLS0+XG4gICAgICAgICAgICB7I2lmIGFjdGl2ZVRocmVhZC5kcmFmdHMubGVuZ3RofVxuICAgICAgICAgICAgICB7I2VhY2ggYWN0aXZlVGhyZWFkLmRyYWZ0cyBhcyBkcmFmdCwgZHJhZnRJbmRleH1cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9e2BpbmRpdmlkdWFsLW1lc3NhZ2UgY29uZGVuc2VkIGRyYWZ0LW1lc3NhZ2VgfVxuICAgICAgICAgICAgICAgICAgY2xhc3M6YWN0aXZlLWRyYWZ0PXtkcmFmdC5hY3RpdmV9XG4gICAgICAgICAgICAgICAgICBiaW5kOnRoaXM9e21lc3NhZ2VSZWZzW2RyYWZ0SW5kZXhdfVxuICAgICAgICAgICAgICAgICAgb246Y2xpY2t8c3RvcFByb3BhZ2F0aW9uPXsoZSkgPT4gaGFuZGxlRHJhZnRDbGljayhlLCBkcmFmdCl9XG4gICAgICAgICAgICAgICAgICBvbjprZXlwcmVzcz17KGUpID0+IGhhbmRsZURyYWZ0S2V5cHJlc3MoZSwgZHJhZnQpfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLWhlYWQgZHJhZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF2YXRhci1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgeyNpZiBfdGhpcy5zaG93X2NvbnRhY3RfYXZhdGFyfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlZmF1bHQtYXZhdGFyIGRyYWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFmdEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyYWZ0LXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7I2lmIGRyYWZ0Py50b31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyNhd2FpdCBnZXRBbGxSZWNpcGllbnRzKCB7IHRvOiBkcmFmdC50bywgY2M6IGRyYWZ0LmNjLCBiY2M6IGRyYWZ0LmJjYyB9LCApIHRoZW4gYWxsUmVjaXBpZW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7I2VhY2ggYWxsUmVjaXBpZW50cy5zbGljZSgwLCBQQVJUSUNJUEFOVFNfVE9fVFJVTkNBVEUpIGFzIHJlY2lwaWVudCwgaX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEcmFmdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7I2lmIGkgPT09IDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2B0byAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMueW91ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNpcGllbnQuZW1haWwgPT09IF90aGlzLnlvdS5lbWFpbF9hZGRyZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJNZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7OmVsc2UgaWYgcmVjaXBpZW50Ll90eXBlID09PSBcImNjXCIgJiYgaSA9PT0gZHJhZnQudG8ubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7OmVsc2UgaWYgcmVjaXBpZW50Ll90eXBlID09PSBcImJjY1wiICYmIGkgPT09IGRyYWZ0LnRvLmxlbmd0aCArIGRyYWZ0LmNjLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiY2M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvaWZ9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyNpZiByZWNpcGllbnQuZW1haWwgJiYgcmVjaXBpZW50Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlY2lwaWVudC5uYW1lID8/IF90aGlzLnlvdS5uYW1lfSAmbHQ7e3JlY2lwaWVudC5lbWFpbH0mZ3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHs6ZWxzZSBpZiByZWNpcGllbnQuZW1haWwgJiYgIXJlY2lwaWVudC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNpcGllbnQuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey9lYWNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsjaWYgYWxsUmVjaXBpZW50cy5sZW5ndGggPiBQQVJUSUNJUEFOVFNfVE9fVFJVTkNBVEV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bnlsYXMtdG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOnRvZ2dsZVRvb2x0aXA9e3NldFRvb2x0aXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2BzaG93LW1vcmUtcGFydGljaXBhbnRzLSR7ZHJhZnQuaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3Rvb2x0aXBfaWQ9e2N1cnJlbnRUb29sdGlwSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17RHJvcGRvd25TeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17YEFuZCAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsUmVjaXBpZW50cy5sZW5ndGggLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUEFSVElDSVBBTlRTX1RPX1RSVU5DQVRFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBtb3JlYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtgJHthZ2dyZWdhdGVSZWNpcGllbnRzU3RyaW5nKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsUmVjaXBpZW50cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7L2F3YWl0fVxuICAgICAgICAgICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgeyNpZiBfdGhpcy5zaG93X3JlY2VpdmVkX3RpbWVzdGFtcH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLWRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZWQgYXQ6IHtmb3JtYXRFeHBhbmRlZERhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShkcmFmdC5kYXRlICogMTAwMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic25pcHBldFwiPlxuICAgICAgICAgICAgICAgICAgICB7ZHJhZnQuc25pcHBldH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgICAgICB7L2lmfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgPCEtLSBDb25kZW5zZWQgdGhyZWFkIHJvdyAtLT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImVtYWlsLXJvdyBjb25kZW5zZWRcIlxuICAgICAgICAgICAgY2xhc3M6c2hvd19zdGFyPXtfdGhpcy5zaG93X3N0YXJ9XG4gICAgICAgICAgICBjbGFzczp1bnJlYWQ9e2FjdGl2ZVRocmVhZC51bnJlYWR9XG4gICAgICAgICAgICBjbGFzczpkaXNhYmxlLWNsaWNrPXthY3RpdmVUaHJlYWQgJiZcbiAgICAgICAgICAgICAgYWN0aXZlVGhyZWFkLm1lc3NhZ2VzLmxlbmd0aCA8PSAwICYmXG4gICAgICAgICAgICAgICFhY3RpdmVUaHJlYWQuZHJhZnRzLmxlbmd0aH0+XG4gICAgICAgICAgICB7I2F3YWl0IGlzVGhyZWFkQURyYWZ0RW1haWwoYWN0aXZlVGhyZWFkKSB0aGVuIGlzRHJhZnR9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmcm9te190aGlzLnNob3dfc3RhciA/ICctc3RhcicgOiAnJ31cIj5cbiAgICAgICAgICAgICAgICB7I2lmIF90aGlzLnNob3dfc3Rhcn1cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGFycmVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBpZD17YHRocmVhZC1zdGFyLSR7X3RoaXMudGhyZWFkX2lkfWB9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9e2FjdGl2ZVRocmVhZC5zdGFycmVkID8gXCJzdGFycmVkXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtfdGhpcy50aHJlYWRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgcm9sZT1cInN3aXRjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1jaGVja2VkPXthY3RpdmVUaHJlYWQuc3RhcnJlZH1cbiAgICAgICAgICAgICAgICAgICAgICBvbjpjbGlja3xwcmV2ZW50RGVmYXVsdD17aGFuZGxlVGhyZWFkU3RhckNsaWNrfVxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2BTdGFyIGJ1dHRvbiBmb3IgdGhyZWFkICR7X3RoaXMudGhyZWFkX2lkfWB9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmcm9tLW1lc3NhZ2UtY291bnRcIj5cbiAgICAgICAgICAgICAgICAgIHsjaWYgX3RoaXMuc2hvd19jb250YWN0X2F2YXRhcn1cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZGVmYXVsdC1hdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOmRlbGV0ZWQ9e2lzRGVsZXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczpkcmFmdC1pY29uPXtpc0RyYWZ0fT5cbiAgICAgICAgICAgICAgICAgICAgICB7I2lmIGFjdGl2ZVRocmVhZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsjaWYgaXNEcmFmdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYWZ0SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgezplbHNlIGlmIGFjdGl2ZVRocmVhZC5tZXNzYWdlcy5sZW5ndGggPD0gMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE5vTWVzc2FnZXNJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxueWxhcy1jb250YWN0LWltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRhY3RfcXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFjdD17YWN0aXZlVGhyZWFkQ29udGFjdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZyb20tcGFydGljaXBhbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgIHsjaWYgaXNEZWxldGVkfVxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXJ0aWNpcGFudHMtbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmcm9tLXN1Yi1zZWN0aW9uIGRlbGV0ZWQtZW1haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlZCBFbWFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicGFydGljaXBhbnRzLW5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6Y29uZGVuc2VkPXtzaG93U2Vjb25kRnJvbVBhcnRpY2lwYW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVUaHJlYWQubWVzc2FnZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVRocmVhZC5wYXJ0aWNpcGFudHMsXG4gICAgICAgICAgICAgICAgICAgICAgICApfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsjYXdhaXQgZ2V0UGFydGljaXBhbnRzKGFjdGl2ZVRocmVhZCkgdGhlbiBwYXJ0aWNpcGFudHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsjZWFjaCBwYXJ0aWNpcGFudHMgYXMgbmFtZSwgaWR4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZyb20tc3ViLXNlY3Rpb24gcGFydGljaXBhbnQtbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ZHJhZnQtbGFiZWw9e25hbWUgPT09IFwiRHJhZnRcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyNpZiBpZHggPCBwYXJ0aWNpcGFudHMubGVuZ3RoIC0gMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZnJvbS1zdWItc2VjdGlvblwiPiwmbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey9lYWNofVxuICAgICAgICAgICAgICAgICAgICAgICAgey9hd2FpdH1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhcnRpY2lwYW50cy1jb3VudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyNpZiBzaG93U2Vjb25kRnJvbVBhcnRpY2lwYW50KGFjdGl2ZVRocmVhZC5tZXNzYWdlcywgYWN0aXZlVGhyZWFkLnBhcnRpY2lwYW50cyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gSWYgaXQgaXMgbW9iaWxlLCB3ZSBvbmx5IHNob3cgMSBwYXJ0aWNpcGFudCAobGF0ZXN0IGZyb20gbWVzc2FnZSksIGhlbmNlIC0xIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7I2lmIGFjdGl2ZVRocmVhZC5wYXJ0aWNpcGFudHMubGVuZ3RoID49IDJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzaG93LW9uLW1vYmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJnBsdXM7e2FjdGl2ZVRocmVhZC5wYXJ0aWNpcGFudHMubGVuZ3RoIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTUFYX01PQklMRV9QQVJUSUNJUEFOVFN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIElmIGl0IGlzIGRlc2t0b3AsIHdlIG9ubHkgc2hvdyB1cHRvIDIgcGFydGljaXBhbnRzIChsYXRlc3QgZnJvbSBtZXNzYWdlKSwgaGVuY2UgLTIuIFxuICAgICAgICAgICAgICAgICAgICAgICAgTm90ZSB0aGF0IHRoaXMgbWlnaHQgbm90IGJlIGV4YWN0bHkgY29ycmVjdCBpZiB0aGUgbmFtZSBvZiB0aGUgZmlyc3QgcGFydGljaXBhbnQgaXMgdG9vIGxvbmcgXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmQgb2NjdXBpZXMgZW50aXJlIHdpZHRoIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7I2lmIGFjdGl2ZVRocmVhZC5wYXJ0aWNpcGFudHMubGVuZ3RoID4gMn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNob3ctb24tZGVza3RvcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7ICZwbHVzOyB7YWN0aXZlVGhyZWFkLnBhcnRpY2lwYW50cy5sZW5ndGggLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNQVhfREVTS1RPUF9QQVJUSUNJUEFOVFN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgeyNpZiBfdGhpcy5zaG93X251bWJlcl9vZl9tZXNzYWdlc31cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRocmVhZC1tZXNzYWdlLWNvdW50XCI+XG4gICAgICAgICAgICAgICAgICB7YWN0aXZlVGhyZWFkPy5tZXNzYWdlcz8ubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICA/IGFjdGl2ZVRocmVhZC5tZXNzYWdlcy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1YmplY3Qtc25pcHBldC1hdHRhY2htZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1YmplY3Qtc25pcHBldFwiPlxuICAgICAgICAgICAgICAgICAgeyNpZiB0aHJlYWQ/LnN1YmplY3R9XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3ViamVjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt0aHJlYWQ/LnN1YmplY3R9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNuaXBwZXRcIiBjbGFzczpkZWxldGVkPXtpc0RlbGV0ZWR9PlxuICAgICAgICAgICAgICAgICAgICB7aXNEZWxldGVkXG4gICAgICAgICAgICAgICAgICAgICAgPyBgU29ycnksIGxvb2tzIGxpa2UgdGhpcyB0aHJlYWQgaXMgY3VycmVudGx5IHVuYXZhaWxhYmxlLiBJdCBtYXlcbiAgICAgICAgICAgICAgICAgICAgaGF2ZSBiZWVuIGRlbGV0ZWQgaW4geW91ciBwcm92aWRlciBpbmJveC5gXG4gICAgICAgICAgICAgICAgICAgICAgOiAhdGhyZWFkPy5zbmlwcGV0ICYmIGlzRHJhZnRcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiVGhpcyBpcyBhIGRyYWZ0IGVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IHRocmVhZD8uc25pcHBldFxuICAgICAgICAgICAgICAgICAgICAgID8gdGhyZWFkLnNuaXBwZXQucmVwbGFjZSgvXFx1MjAwQyAvZywgXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgeyNpZiBPYmplY3Qua2V5cyhhdHRhY2hlZEZpbGVzKS5sZW5ndGggPiAwfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF0dGFjaG1lbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgeyNlYWNoIE9iamVjdC52YWx1ZXMoYXR0YWNoZWRGaWxlcykgYXMgZmlsZXN9XG4gICAgICAgICAgICAgICAgICAgICAgeyNlYWNoIGZpbGVzIGFzIGZpbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOmNsaWNrPXsoZXZlbnQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRTZWxlY3RlZEZpbGUoZXZlbnQsIGZpbGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpbGUuZmlsZW5hbWUgfHwgZmlsZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgICAgICAgICAgICAgey9lYWNofVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzczpkYXRlPXtfdGhpcy5zaG93X3JlY2VpdmVkX3RpbWVzdGFtcH1cbiAgICAgICAgICAgICAgICBjbGFzczphY3Rpb24taWNvbnM9e190aGlzLnNob3dfdGhyZWFkX2FjdGlvbnN9PlxuICAgICAgICAgICAgICAgIHsjaWYgYWN0aXZlVGhyZWFkLmhhc19hdHRhY2htZW50cyAmJiBPYmplY3Qua2V5cyhhdHRhY2hlZEZpbGVzKS5sZW5ndGggPiAwfVxuICAgICAgICAgICAgICAgICAgPHNwYW4+PEF0dGFjaG1lbnRJY29uIC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgeyNpZiBfdGhpcy5zaG93X3RocmVhZF9hY3Rpb25zfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbGV0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEZWxldGUgdGhyZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVsZXRlIHRocmVhZFwiXG4gICAgICAgICAgICAgICAgICAgICAgb246Y2xpY2t8c3RvcFByb3BhZ2F0aW9uPXtkZWxldGVFbWFpbH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFRyYXNoSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlYWQtc3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17YE1hcmsgdGhyZWFkIGFzICR7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVUaHJlYWQudW5yZWFkID8gXCJcIiA6IFwidW5cIlxuICAgICAgICAgICAgICAgICAgICAgIH1yZWFkYH1cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtgTWFyayB0aHJlYWQgYXMgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVRocmVhZC51bnJlYWQgPyBcIlwiIDogXCJ1blwiXG4gICAgICAgICAgICAgICAgICAgICAgfXJlYWRgfVxuICAgICAgICAgICAgICAgICAgICAgIG9uOmNsaWNrfHN0b3BQcm9wYWdhdGlvbj17dG9nZ2xlVW5yZWFkU3RhdHVzfT5cbiAgICAgICAgICAgICAgICAgICAgICB7I2lmIGFjdGl2ZVRocmVhZC51bnJlYWR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFya1JlYWRJY29uIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgezplbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPE1hcmtVbnJlYWRJY29uIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7OmVsc2UgaWYgX3RoaXMuc2hvd19yZWNlaXZlZF90aW1lc3RhbXB9XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge2Zvcm1hdFByZXZpZXdEYXRlKFxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKHRocmVhZC5sYXN0X21lc3NhZ2VfdGltZXN0YW1wICogMTAwMCksXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7L2F3YWl0fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB7L2lmfVxuICAgICAgey9pZn1cbiAgICB7L2F3YWl0fVxuICB7OmVsc2UgaWYgX3RoaXMubWVzc2FnZX1cbiAgICB7I2lmIE9iamVjdC5rZXlzKF90aGlzLm1lc3NhZ2UpLmxlbmd0aCA+IDB9XG4gICAgICA8ZGl2IGNsYXNzPVwiZW1haWwtcm93IGV4cGFuZGVkIHNpbmd1bGFyXCI+XG4gICAgICAgIDxoZWFkZXI+e190aGlzLm1lc3NhZ2U/LnN1YmplY3R9PC9oZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmRpdmlkdWFsLW1lc3NhZ2UgZXhwYW5kZWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1oZWFkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1mcm9tLXRvXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdmF0YXItaW5mb1wiPlxuICAgICAgICAgICAgICAgIHsjaWYgX3RoaXMuc2hvd19jb250YWN0X2F2YXRhcn1cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWZhdWx0LWF2YXRhclwiPlxuICAgICAgICAgICAgICAgICAgICA8bnlsYXMtY29udGFjdC1pbWFnZVxuICAgICAgICAgICAgICAgICAgICAgIHtjb250YWN0X3F1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRhY3Q9e2FjdGl2ZU1lc3NhZ2VDb250YWN0fSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1mcm9tXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICA+e3VzZXJFbWFpbCAmJiBfdGhpcy5tZXNzYWdlPy5mcm9tWzBdLmVtYWlsID09PSB1c2VyRW1haWxcbiAgICAgICAgICAgICAgICAgICAgICA/IFwibWVcIlxuICAgICAgICAgICAgICAgICAgICAgIDogX3RoaXMubWVzc2FnZT8uZnJvbVswXT8ubmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubWVzc2FnZT8uZnJvbVswXT8uZW1haWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPCEtLSB0b29sdGlwIGNvbXBvbmVudCAtLT5cbiAgICAgICAgICAgICAgICAgIDxueWxhcy10b29sdGlwXG4gICAgICAgICAgICAgICAgICAgIG9uOnRvZ2dsZVRvb2x0aXA9e3NldFRvb2x0aXB9XG4gICAgICAgICAgICAgICAgICAgIGlkPXtfdGhpcy5tZXNzYWdlPy5pZH1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudF90b29sdGlwX2lkPXtjdXJyZW50VG9vbHRpcElkfVxuICAgICAgICAgICAgICAgICAgICBpY29uPXtEcm9wZG93blN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17X3RoaXMubWVzc2FnZT8uZnJvbVswXS5lbWFpbH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2UtdG9cIj5cbiAgICAgICAgICAgICAgICB7I2F3YWl0IGdldEFsbFJlY2lwaWVudHMoIHsgdG86IF90aGlzLm1lc3NhZ2UudG8sIGNjOiBfdGhpcy5tZXNzYWdlLmNjLCBiY2M6IF90aGlzLm1lc3NhZ2UuYmNjIH0sICkgdGhlbiBhbGxSZWNpcGllbnRzfVxuICAgICAgICAgICAgICAgICAgeyNlYWNoIGFsbFJlY2lwaWVudHMuc2xpY2UoMCwgUEFSVElDSVBBTlRTX1RPX1RSVU5DQVRFKSBhcyByZWNpcGllbnQsIGl9XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgIHsjaWYgaSA9PT0gMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtgdG8gJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMueW91ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2lwaWVudC5lbWFpbCA9PT0gX3RoaXMueW91LmVtYWlsX2FkZHJlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiTWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgezplbHNlIGlmIHJlY2lwaWVudC5fdHlwZSA9PT0gXCJjY1wiICYmIGkgPT09IF90aGlzLm1lc3NhZ2UudG8ubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgY2M6XG4gICAgICAgICAgICAgICAgICAgICAgezplbHNlIGlmIHJlY2lwaWVudC5fdHlwZSA9PT0gXCJiY2NcIiAmJiBpID09PSBfdGhpcy5tZXNzYWdlLnRvLmxlbmd0aCArIF90aGlzLm1lc3NhZ2UuY2MubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgYmNjOlxuICAgICAgICAgICAgICAgICAgICAgIHsvaWZ9XG5cbiAgICAgICAgICAgICAgICAgICAgICB7I2lmIHJlY2lwaWVudC5lbWFpbCAmJiByZWNpcGllbnQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNpcGllbnQubmFtZSA/PyBfdGhpcy55b3UubmFtZX0gJmx0O3tyZWNpcGllbnQuZW1haWx9Jmd0O1xuICAgICAgICAgICAgICAgICAgICAgIHs6ZWxzZSBpZiByZWNpcGllbnQuZW1haWwgJiYgIXJlY2lwaWVudC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAge3JlY2lwaWVudC5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgICAgICAgICAgICB7I2lmIGFsbFJlY2lwaWVudHMubGVuZ3RoID4gUEFSVElDSVBBTlRTX1RPX1RSVU5DQVRFfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxueWxhcy10b29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjp0b2dnbGVUb29sdGlwPXtzZXRUb29sdGlwfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2BzaG93LW1vcmUtcGFydGljaXBhbnRzLSR7X3RoaXMubWVzc2FnZS5pZH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF90b29sdGlwX2lkPXtjdXJyZW50VG9vbHRpcElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17RHJvcGRvd25TeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtgQW5kICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFJlY2lwaWVudHMubGVuZ3RoIC0gUEFSVElDSVBBTlRTX1RPX1RSVU5DQVRFXG4gICAgICAgICAgICAgICAgICAgICAgICB9IG1vcmVgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17YCR7YWdncmVnYXRlUmVjaXBpZW50c1N0cmluZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsUmVjaXBpZW50cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICl9YH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgIHsvYXdhaXR9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICB7I2lmIF90aGlzLnNob3dfcmVjZWl2ZWRfdGltZXN0YW1wfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLWRhdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0RXhwYW5kZWREYXRlKG5ldyBEYXRlKF90aGlzLm1lc3NhZ2UuZGF0ZSAqIDEwMDApKX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgPGRpdiBhcmlhLWxhYmVsPVwiRW1haWwgQWN0aW9uc1wiIHJvbGU9XCJ0b29sYmFyXCI+XG4gICAgICAgICAgICAgICAgeyNpZiBfdGhpcy5zaG93X3JlcGx5fVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlcGx5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XCJSZXBseVwifVxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e1wiUmVwbHlcIn1cbiAgICAgICAgICAgICAgICAgICAgICBvbjpjbGlja3xzdG9wUHJvcGFnYXRpb249eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUmVwbHlDbGljayhlLCBfdGhpcy5tZXNzYWdlLCBcInJlcGx5XCIpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8UmVwbHlJY29uIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICB7I2lmIF90aGlzLnNob3dfcmVwbHlfYWxsICYmIGNhblJlcGx5QWxsKF90aGlzLm1lc3NhZ2UpfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlcGx5LWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1wiUmVwbHkgYWxsXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17XCJSZXBseSBhbGxcIn1cbiAgICAgICAgICAgICAgICAgICAgICBvbjpjbGlja3xzdG9wUHJvcGFnYXRpb249eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUmVwbHlDbGljayhlLCBfdGhpcy5tZXNzYWdlLCBcInJlcGx5X2FsbFwiKX0+XG4gICAgICAgICAgICAgICAgICAgICAgPFJlcGx5QWxsSWNvbiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgeyNpZiBfdGhpcy5zaG93X2ZvcndhcmR9XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9yd2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJGb3J3YXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRm9yd2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgb246Y2xpY2t8c3RvcFByb3BhZ2F0aW9uPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUZvcndhcmRDbGljayhlLCBtZXNzYWdlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgPEZvcndhcmRJY29uIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2UtYm9keVwiPlxuICAgICAgICAgICAgeyNpZiBfdGhpcy5jbGVhbl9jb252ZXJzYXRpb24gJiYgX3RoaXMubWVzc2FnZS5jb252ZXJzYXRpb259XG4gICAgICAgICAgICAgIHtAaHRtbCBET01QdXJpZnkuc2FuaXRpemUoX3RoaXMubWVzc2FnZT8uY29udmVyc2F0aW9uID8/IFwiXCIpfVxuICAgICAgICAgICAgezplbHNlIGlmIF90aGlzLm1lc3NhZ2V9XG4gICAgICAgICAgICAgIDxueWxhcy1tZXNzYWdlLWJvZHlcbiAgICAgICAgICAgICAgICBtZXNzYWdlPXtfdGhpcy5tZXNzYWdlfVxuICAgICAgICAgICAgICAgIGJvZHk9e190aGlzLm1lc3NhZ2UuYm9keX1cbiAgICAgICAgICAgICAgICBvbjpkb3dubG9hZENsaWNrZWQ9e2hhbmRsZURvd25sb2FkRnJvbU1lc3NhZ2V9IC8+XG4gICAgICAgICAgICB7L2lmfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIHsvaWZ9XG4gIHsvaWZ9XG48L21haW4+XG4iLCI8c3ZnIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxM1wiIHZpZXdCb3g9XCIwIDAgMTIgMTNcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbjxwYXRoIGQ9XCJNNC4xMjUgNS41NjI1SDcuODc1QzguMDYyNSA1LjU2MjUgOC4yNSA1LjM5ODQ0IDguMjUgNS4xODc1VjQuODEyNUM4LjI1IDQuNjI1IDguMDYyNSA0LjQzNzUgNy44NzUgNC40Mzc1SDQuMTI1QzMuOTE0MDYgNC40Mzc1IDMuNzUgNC42MjUgMy43NSA0LjgxMjVWNS4xODc1QzMuNzUgNS4zOTg0NCAzLjkxNDA2IDUuNTYyNSA0LjEyNSA1LjU2MjVaTTMuNzUgNy40Mzc1QzMuNzUgNy42NDg0NCAzLjkxNDA2IDcuODEyNSA0LjEyNSA3LjgxMjVINy44NzVDOC4wNjI1IDcuODEyNSA4LjI1IDcuNjQ4NDQgOC4yNSA3LjQzNzVWNy4wNjI1QzguMjUgNi44NzUgOC4wNjI1IDYuNjg3NSA3Ljg3NSA2LjY4NzVINC4xMjVDMy45MTQwNiA2LjY4NzUgMy43NSA2Ljg3NSAzLjc1IDcuMDYyNVY3LjQzNzVaTTYgMTAuMjk2OUM1LjYwMTU2IDEwLjI5NjkgNS4yMjY1NiAxMC4xNzk3IDQuODk4NDQgOS45MjE4OEwwIDYuMzgyODFWMTEuMzc1QzAgMTIuMDA3OCAwLjQ5MjE4OCAxMi41IDEuMTI1IDEyLjVIMTAuODc1QzExLjQ4NDQgMTIuNSAxMiAxMi4wMDc4IDEyIDExLjM3NVY2LjM4MjgxTDcuMDc4MTIgOS45MjE4OEM2Ljc1IDEwLjE3OTcgNi4zNzUgMTAuMjk2OSA2IDEwLjI5NjlaTTExLjU1NDcgNC4zMjAzMUMxMS4zNDM4IDQuMTc5NjkgMTEuMTU2MiA0LjAxNTYyIDEwLjg3NSAzLjgwNDY5VjIuNzVDMTAuODc1IDIuMTQwNjIgMTAuMzU5NCAxLjYyNSA5Ljc1IDEuNjI1SDcuOTIxODhDNy44NTE1NiAxLjU3ODEyIDcuNzgxMjUgMS41MzEyNSA3LjcxMDk0IDEuNDg0MzhDNy4zMTI1IDEuMjAzMTIgNi41MzkwNiAwLjUgNiAwLjVDNS40Mzc1IDAuNSA0LjY2NDA2IDEuMjAzMTIgNC4yNjU2MiAxLjQ4NDM4QzQuMTk1MzEgMS41MzEyNSA0LjEyNSAxLjU3ODEyIDQuMDU0NjkgMS42MjVIMi4yNUMxLjYxNzE5IDEuNjI1IDEuMTI1IDIuMTQwNjIgMS4xMjUgMi43NVYzLjgwNDY5QzAuODIwMzEyIDQuMDE1NjIgMC42MzI4MTIgNC4xNzk2OSAwLjQyMTg3NSA0LjMyMDMxQzAuMTY0MDYyIDQuNTMxMjUgMCA0Ljg1OTM4IDAgNS4yMTA5NFY1LjQ2ODc1TDIuMjUgNy4wODU5NFYyLjc1SDkuNzVWNy4wODU5NEwxMiA1LjQ2ODc1VjUuMjEwOTRDMTIgNC44NTkzOCAxMS44MzU5IDQuNTU0NjkgMTEuNTU0NyA0LjMyMDMxWlwiIC8+XG48L3N2Zz5cbiIsIjxzdmcgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjlcIiB2aWV3Qm94PVwiMCAwIDEyIDlcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbjxwYXRoIGQ9XCJNMTEuNzY1NiAyLjk3NjU2QzExLjIyNjYgMy4zOTg0NCAxMC41NDY5IDMuOTE0MDYgOC4xNTYyNSA1LjY0ODQ0QzcuNjg3NSA2IDYuODIwMzEgNi43NzM0NCA2IDYuNzczNDRDNS4xNTYyNSA2Ljc3MzQ0IDQuMzEyNSA2IDMuODIwMzEgNS42NDg0NEMxLjQyOTY5IDMuOTE0MDYgMC43NSAzLjM5ODQ0IDAuMjEwOTM4IDIuOTc2NTZDMC4xMTcxODggMi45MDYyNSAwIDIuOTc2NTYgMCAzLjA5Mzc1VjcuODc1QzAgOC41MDc4MSAwLjQ5MjE4OCA5IDEuMTI1IDlIMTAuODc1QzExLjQ4NDQgOSAxMiA4LjUwNzgxIDEyIDcuODc1VjMuMDkzNzVDMTIgMi45NzY1NiAxMS44NTk0IDIuOTA2MjUgMTEuNzY1NiAyLjk3NjU2Wk02IDZDNi41MzkwNiA2LjAyMzQ0IDcuMzEyNSA1LjMyMDMxIDcuNzEwOTQgNS4wMzkwNkMxMC44MjgxIDIuNzg5MDYgMTEuMDYyNSAyLjU3ODEyIDExLjc2NTYgMi4wMTU2MkMxMS45MDYyIDEuOTIxODggMTIgMS43NTc4MSAxMiAxLjU3MDMxVjEuMTI1QzEyIDAuNTE1NjI1IDExLjQ4NDQgMCAxMC44NzUgMEgxLjEyNUMwLjQ5MjE4OCAwIDAgMC41MTU2MjUgMCAxLjEyNVYxLjU3MDMxQzAgMS43NTc4MSAwLjA3MDMxMjUgMS45MjE4OCAwLjIxMDkzOCAyLjAxNTYyQzAuOTE0MDYyIDIuNTc4MTIgMS4xNDg0NCAyLjc4OTA2IDQuMjY1NjIgNS4wMzkwNkM0LjY2NDA2IDUuMzIwMzEgNS40Mzc1IDYuMDIzNDQgNiA2WlwiIC8+XG48L3N2Zz5cbiIsIjxzdmcgaWQ9XCJDYXBhXzFcIiBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgNDk3IDQ5N1wiIGhlaWdodD1cIjUxMlwiIHZpZXdCb3g9XCIwIDAgNDk3IDQ5N1wiIHdpZHRoPVwiNTEyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxnPjxjaXJjbGUgY3g9XCI5OFwiIGN5PVwiMzc2XCIgZmlsbD1cIiM5MDliYTZcIiByPVwiNTNcIi8+PGNpcmNsZSBjeD1cIjQzOVwiIGN5PVwiMzM2XCIgZmlsbD1cIiNjOGQyZGNcIiByPVwiNDZcIi8+PGNpcmNsZSBjeD1cIjM5N1wiIGN5PVwiMTEyXCIgZmlsbD1cIiNlOWVkZjFcIiByPVwiMzhcIi8+PGVsbGlwc2UgY3g9XCI1Ni4yNDVcIiBjeT1cIjI0NC43NTRcIiBmaWxsPVwiIzdlOGI5NlwiIHJ4PVwiNTYuMjQ1XCIgcnk9XCI1NC44NzRcIi8+PGVsbGlwc2UgY3g9XCIyMTcuODIxXCIgY3k9XCI0NDcuMTc1XCIgZmlsbD1cIiNhMmFiYjhcIiByeD1cIjUxLjEzMlwiIHJ5PVwiNDkuODI1XCIvPjxlbGxpcHNlIGN4PVwiMzQ5LjIyOVwiIGN5PVwiNDI3Ljg3M1wiIGZpbGw9XCIjYjljM2NkXCIgcng9XCI0OC41NzVcIiByeT1cIjQ3LjI5N1wiLz48ZWxsaXBzZSBjeD1cIjExNy4wOTJcIiBjeT1cIjExNC43OTRcIiBmaWxsPVwiIzVmNmM3NVwiIHJ4PVwiNTguODAxXCIgcnk9XCI1Ny4zOTdcIi8+PGVsbGlwc2UgY3g9XCI0NTMuNTM4XCIgY3k9XCIyMTYuNDc3XCIgZmlsbD1cIiNkY2U2ZWJcIiByeD1cIjQzLjQ2MlwiIHJ5PVwiNDIuNjU2XCIvPjxjaXJjbGUgY3g9XCIyNjNcIiBjeT1cIjYyXCIgZmlsbD1cIiM0ZTVhNjFcIiByPVwiNjJcIi8+PC9nPjwvc3ZnPiIsIjxzdmcgd2lkdGg9XCIxMVwiIGhlaWdodD1cIjEzXCIgdmlld0JveD1cIjAgMCAxMSAxM1wiIGZpbGw9XCIjOGQ5NGE1XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuPHBhdGggZD1cIk0wLjc1IDExLjM3NUMwLjc1IDEyLjAwNzggMS4yNDIxOSAxMi41IDEuODc1IDEyLjVIOC42MjVDOS4yMzQzOCAxMi41IDkuNzUgMTIuMDA3OCA5Ljc1IDExLjM3NVYzLjVIMC43NVYxMS4zNzVaTTcuMTI1IDUuMzc1QzcuMTI1IDUuMTg3NSA3LjI4OTA2IDUgNy41IDVDNy42ODc1IDUgNy44NzUgNS4xODc1IDcuODc1IDUuMzc1VjEwLjYyNUM3Ljg3NSAxMC44MzU5IDcuNjg3NSAxMSA3LjUgMTFDNy4yODkwNiAxMSA3LjEyNSAxMC44MzU5IDcuMTI1IDEwLjYyNVY1LjM3NVpNNC44NzUgNS4zNzVDNC44NzUgNS4xODc1IDUuMDM5MDYgNSA1LjI1IDVDNS40Mzc1IDUgNS42MjUgNS4xODc1IDUuNjI1IDUuMzc1VjEwLjYyNUM1LjYyNSAxMC44MzU5IDUuNDM3NSAxMSA1LjI1IDExQzUuMDM5MDYgMTEgNC44NzUgMTAuODM1OSA0Ljg3NSAxMC42MjVWNS4zNzVaTTIuNjI1IDUuMzc1QzIuNjI1IDUuMTg3NSAyLjc4OTA2IDUgMyA1QzMuMTg3NSA1IDMuMzc1IDUuMTg3NSAzLjM3NSA1LjM3NVYxMC42MjVDMy4zNzUgMTAuODM1OSAzLjE4NzUgMTEgMyAxMUMyLjc4OTA2IDExIDIuNjI1IDEwLjgzNTkgMi42MjUgMTAuNjI1VjUuMzc1Wk0xMC4xMjUgMS4yNUg3LjMxMjVMNy4wNzgxMiAwLjgyODEyNUM2Ljk4NDM4IDAuNjQwNjI1IDYuNzk2ODggMC41IDYuNTg1OTQgMC41SDMuODkwNjJDMy42Nzk2OSAwLjUgMy40OTIxOSAwLjY0MDYyNSAzLjM5ODQ0IDAuODI4MTI1TDMuMTg3NSAxLjI1SDAuMzc1QzAuMTY0MDYyIDEuMjUgMCAxLjQzNzUgMCAxLjYyNVYyLjM3NUMwIDIuNTg1OTQgMC4xNjQwNjIgMi43NSAwLjM3NSAyLjc1SDEwLjEyNUMxMC4zMTI1IDIuNzUgMTAuNSAyLjU4NTk0IDEwLjUgMi4zNzVWMS42MjVDMTAuNSAxLjQzNzUgMTAuMzEyNSAxLjI1IDEwLjEyNSAxLjI1WlwiIC8+XG48L3N2Zz5cbiIsIjxzdmcgd2lkdGg9XCIyOVwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyOSAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuPHBhdGggZD1cIk0xNCAxNkw5Ljc3NjEyIDEyLjAwMTRMMTQgOFwiIHN0cm9rZT1cIiM2QTcyODVcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCIvPlxuPHBhdGggZD1cIk0xOSAxNkwxNC43NzYxIDEyLjAwMTRMMTkgOFwiIHN0cm9rZT1cIiM2QTcyODVcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCIvPlxuPC9zdmc+XG4iLCI8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbjxwYXRoIGQ9XCJNMTQgMTZMOS43NzYxMiAxMi4wMDE0TDE0IDhcIiBzdHJva2U9XCIjNkE3Mjg1XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiLz5cbjwvc3ZnPlxuIiwiPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG48cGF0aCBkPVwiTTEwIDhMMTQuMjIzOSAxMS45OTg2TDEwIDE2XCIgc3Ryb2tlPVwiIzZBNzI4NVwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZS1taXRlcmxpbWl0PVwiMTBcIi8+XG48L3N2Zz5cbiIsIjxzdmcgd2lkdGg9XCIyOVwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyOSAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuPHBhdGggZD1cIk0xNSA4TDE5LjIyMzkgMTEuOTk4NkwxNSAxNlwiIHN0cm9rZT1cIiM2QTcyODVcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCIvPlxuPHBhdGggZD1cIk0xMCA4TDE0LjIyMzkgMTEuOTk4NkwxMCAxNlwiIHN0cm9rZT1cIiM2QTcyODVcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCIvPlxuPC9zdmc+XG4iLCI8c3ZlbHRlOm9wdGlvbnMgdGFnPVwicGFnaW5hdGlvbi1uYXZcIiAvPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICBleHBvcnQgbGV0IGN1cnJlbnRfcGFnZTogbnVtYmVyID0gMDtcbiAgZXhwb3J0IGxldCBpdGVtc19wZXJfcGFnZTogbnVtYmVyO1xuICBleHBvcnQgbGV0IG51bV9wYWdlczogbnVtYmVyID0gMTtcbiAgZXhwb3J0IGxldCBudW1faXRlbXM6IG51bWJlcjtcbiAgZXhwb3J0IGxldCBudW1fcGFnZXNfdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgaW1wb3J0IHsgZ2V0RXZlbnREaXNwYXRjaGVyIH0gZnJvbSBcIkBjb21tb25zL21ldGhvZHMvY29tcG9uZW50XCI7XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gXCJzdmVsdGUvaW50ZXJuYWxcIjtcblxuICBpbXBvcnQgRmlyc3RJY29uIGZyb20gXCIuLi9hc3NldHMvZG91YmxlLWxlZnQtYXJyb3cuc3ZnXCI7XG4gIGltcG9ydCBCYWNrSWNvbiBmcm9tIFwiLi4vYXNzZXRzL2xlZnQtYXJyb3cuc3ZnXCI7XG4gIGltcG9ydCBOZXh0SWNvbiBmcm9tIFwiLi4vYXNzZXRzL3JpZ2h0LWFycm93LnN2Z1wiO1xuICBpbXBvcnQgTGFzdEljb24gZnJvbSBcIi4uL2Fzc2V0cy9kb3VibGUtcmlnaHQtYXJyb3cuc3ZnXCI7XG5cbiAgY29uc3QgZGlzcGF0Y2hFdmVudCA9IGdldEV2ZW50RGlzcGF0Y2hlcihnZXRfY3VycmVudF9jb21wb25lbnQoKSk7XG5cbiAgZnVuY3Rpb24gY2hhbmdlUGFnZShuZXdQYWdlOiBudW1iZXIpIHtcbiAgICBkaXNwYXRjaEV2ZW50KFwiY2hhbmdlUGFnZVwiLCB7XG4gICAgICBuZXdQYWdlLFxuICAgIH0pO1xuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4gIC5wYWdpbmF0aW9uLW5hdiB7XG4gICAgLS1kaXNhYmxlZC10ZXh0OiAjNDU0OTU0O1xuICAgIC0tZm9udDogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBzYW5zLXNlcmlmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5wYWdlLWluZGljYXRvciB7XG4gICAgICBjb2xvcjogdmFyKC0tbnlsYXMtbWFpbGJveC1wYWdpbmF0aW9uLWluZGljYXRvci1jb2xvciwgIzQ1NDk1NCk7XG4gICAgICBoZWlnaHQ6IDM4cHg7XG4gICAgICBtYXJnaW46IDJlbSAxZW0gMCAxZW07XG4gICAgfVxuICAgIC5wYWdpbmF0ZS1idG4ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1pbi13aWR0aDogMzhweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDM4cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC0xcHg7XG4gICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZFxuICAgICAgICB2YXIoLS1ueWxhcy1tYWlsYm94LXBhZ2luYXRpb24tYnV0dG9uLWJvcmRlci1jb2xvciwgI2UzZThlZSk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoXG4gICAgICAgIC0tbnlsYXMtbWFpbGJveC1wYWdpbmF0aW9uLWJ1dHRvbi1iYWNrZ3JvdW5kLFxuICAgICAgICAjZjdmN2Y4XG4gICAgICApO1xuICAgICAgY29sb3I6IHZhcigtLW55bGFzLW1haWxib3gtcGFnaW5hdGlvbi1idXR0b24tY29sb3IsICM0NTQ5NTQpO1xuXG4gICAgICAqIHtcbiAgICAgICAgc3Ryb2tlOiB2YXIoLS1ueWxhcy1tYWlsYm94LXBhZ2luYXRpb24tYnV0dG9uLWNvbG9yLCAjNDU0OTU0KTtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcihcbiAgICAgICAgICAtLW55bGFzLW1haWxib3gtcGFnaW5hdGlvbi1idXR0b24taG92ZXItY29sb3IsXG4gICAgICAgICAgI2VhZWFlYVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAmLmN1cnJlbnQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgY29sb3I6ICMyYzJlMmU7XG4gICAgICB9XG4gICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoXG4gICAgICAgICAgLS1ueWxhcy1tYWlsYm94LXBhZ2luYXRpb24tYnV0dG9uLWJhY2tncm91bmQtZGlzYWJsZWQsXG4gICAgICAgICAgI2Y3ZjdmOFxuICAgICAgICApO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZFxuICAgICAgICAgIHZhcigtLW55bGFzLW1haWxib3gtcGFnaW5hdGlvbi1idXR0b24tYmFja2dyb3VuZC1kaXNhYmxlZCwgI2Y3ZjdmOCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnBhZ2UtbnVtYmVycyB7XG4gICAgbWFyZ2luOiAwIDhweDtcbiAgfVxuPC9zdHlsZT5cblxuPG5hdiBjbGFzcz1cInBhZ2luYXRpb24tbmF2XCI+XG4gIHsjaWYgbnVtX3BhZ2VzX3Zpc2libGV9XG4gICAgPHNwYW4gY2xhc3M9XCJwYWdlLWluZGljYXRvclwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJwYWdlLXN0YXJ0XCI+XG4gICAgICAgIHtjdXJyZW50X3BhZ2UgKiBpdGVtc19wZXJfcGFnZSArIDF9XG4gICAgICA8L3NwYW4+XG4gICAgICAtXG4gICAgICA8c3BhbiBjbGFzcz1cInBhZ2UtZW5kXCI+XG4gICAgICAgIHtNYXRoLm1pbigoY3VycmVudF9wYWdlICsgMSkgKiBpdGVtc19wZXJfcGFnZSwgbnVtX2l0ZW1zKX1cbiAgICAgIDwvc3Bhbj5cbiAgICAgIG9mXG4gICAgICA8c3BhbiBjbGFzcz1cInRvdGFsXCI+e251bV9pdGVtc308L3NwYW4+XG4gICAgPC9zcGFuPlxuICB7L2lmfVxuICB7I2lmIG51bV9wYWdlcyA+IDF9XG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3M9XCJwYWdpbmF0ZS1idG4gZmlyc3QtYnRuXCJcbiAgICAgIG9uOmNsaWNrPXsoKSA9PiBjaGFuZ2VQYWdlKDApfVxuICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRfcGFnZSA9PT0gMH0+XG4gICAgICA8Rmlyc3RJY29uIHN0eWxlPVwid2lkdGg6IDI0cHg7IGhlaWdodDogMjRweDtcIiAvPlxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwicGFnaW5hdGUtYnRuIGJhY2stYnRuXCJcbiAgICAgIG9uOmNsaWNrPXsoKSA9PiBjaGFuZ2VQYWdlKGN1cnJlbnRfcGFnZSAtIDEpfVxuICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRfcGFnZSA9PT0gMH0+XG4gICAgICA8QmFja0ljb24gc3R5bGU9XCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4O1wiIC8+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3M9XCJwYWdpbmF0ZS1idG4gbmV4dC1idG5cIlxuICAgICAgb246Y2xpY2s9eygpID0+IGNoYW5nZVBhZ2UoY3VycmVudF9wYWdlICsgMSl9XG4gICAgICBkaXNhYmxlZD17Y3VycmVudF9wYWdlID09PSBudW1fcGFnZXMgLSAxfT5cbiAgICAgIDxOZXh0SWNvbiBzdHlsZT1cImhlaWdodDoyNHB4O3dpZHRoOjI0cHg7XCIgLz5cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cInBhZ2luYXRlLWJ0biBsYXN0LWJ0blwiXG4gICAgICBvbjpjbGljaz17KCkgPT4gY2hhbmdlUGFnZShudW1fcGFnZXMgLSAxKX1cbiAgICAgIGRpc2FibGVkPXtjdXJyZW50X3BhZ2UgPT09IG51bV9wYWdlcyAtIDF9PlxuICAgICAgPExhc3RJY29uIHN0eWxlPVwiaGVpZ2h0OjI0cHg7d2lkdGg6MjRweDtcIiAvPlxuICAgIDwvYnV0dG9uPlxuICB7L2lmfVxuPC9uYXY+XG4iLCI8c3ZlbHRlOm9wdGlvbnMgdGFnPVwibnlsYXMtbWFpbGJveFwiIC8+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB7IEVycm9yU3RvcmUsIGZldGNoQWNjb3VudCwgTWFuaWZlc3RTdG9yZSwgc2lsZW5jZSB9IGZyb20gXCJAY29tbW9uc1wiO1xuICBpbXBvcnQgeyBmZXRjaE1lc3NhZ2UsIHVwZGF0ZU1lc3NhZ2UgfSBmcm9tIFwiQGNvbW1vbnMvY29ubmVjdGlvbnMvbWVzc2FnZXNcIjtcbiAgaW1wb3J0IHtcbiAgICBBY2NvdW50T3JnYW5pemF0aW9uVW5pdCxcbiAgICBNYWlsYm94QWN0aW9ucyxcbiAgICBNZXNzYWdlVHlwZSxcbiAgICBNYWlsYm94VGhyZWFkQ2xpY2tBY3Rpb24sXG4gIH0gZnJvbSBcIkBjb21tb25zL2VudW1zL055bGFzXCI7XG5cbiAgaW1wb3J0IHtcbiAgICBidWlsZEludGVybmFsUHJvcHMsXG4gICAgZG93bmxvYWRBdHRhY2hlZEZpbGUsXG4gICAgZ2V0RXZlbnREaXNwYXRjaGVyLFxuICB9IGZyb20gXCJAY29tbW9ucy9tZXRob2RzL2NvbXBvbmVudFwiO1xuICBpbXBvcnQgeyBGb2xkZXJTdG9yZSB9IGZyb20gXCJAY29tbW9ucy9zdG9yZS9mb2xkZXJzXCI7XG4gIGltcG9ydCB7IExhYmVsU3RvcmUgfSBmcm9tIFwiQGNvbW1vbnMvc3RvcmUvbGFiZWxzXCI7XG4gIGltcG9ydCB7IE1haWxib3hTdG9yZSB9IGZyb20gXCJAY29tbW9ucy9zdG9yZS9tYWlsYm94XCI7XG4gIGltcG9ydCB0eXBlIHtcbiAgICBBY2NvdW50LFxuICAgIEZvbGRlcixcbiAgICBMYWJlbCxcbiAgICBNYWlsYm94UHJvcGVydGllcyxcbiAgICBNYWlsYm94UXVlcnksXG4gICAgTWVzc2FnZSxcbiAgICBUaHJlYWQsXG4gIH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG4gIGltcG9ydCB7IGRvd25sb2FkRmlsZSB9IGZyb20gXCJAY29tbW9ucy9jb25uZWN0aW9ucy9maWxlc1wiO1xuICBpbXBvcnQgeyBnZXRfY3VycmVudF9jb21wb25lbnQsIG9uTW91bnQsIHRpY2sgfSBmcm9tIFwic3ZlbHRlL2ludGVybmFsXCI7XG4gIGltcG9ydCBcIi4uLy4uL2VtYWlsL3NyYy9FbWFpbC5zdmVsdGVcIjtcbiAgaW1wb3J0IE1hcmtSZWFkSWNvbiBmcm9tIFwiLi9hc3NldHMvZW52ZWxvcGUtb3Blbi10ZXh0LnN2Z1wiO1xuICBpbXBvcnQgTWFya1VucmVhZEljb24gZnJvbSBcIi4vYXNzZXRzL2VudmVsb3BlLnN2Z1wiO1xuICBpbXBvcnQgTG9hZGluZ0ljb24gZnJvbSBcIi4vYXNzZXRzL2xvYWRpbmcuc3ZnXCI7XG4gIGltcG9ydCBUcmFzaEljb24gZnJvbSBcIi4vYXNzZXRzL3RyYXNoLWFsdC5zdmdcIjtcbiAgaW1wb3J0IFwiLi9jb21wb25lbnRzL1BhZ2luYXRpb25OYXYuc3ZlbHRlXCI7XG4gIGltcG9ydCB7IEZpbGVzU3RvcmUgfSBmcm9tIFwiQGNvbW1vbnMvc3RvcmUvZmlsZXNcIjtcbiAgaW1wb3J0IHBrZyBmcm9tIFwiLi4vcGFja2FnZS5qc29uXCI7XG5cbiAgY29uc3QgZGlzcGF0Y2hFdmVudCA9IGdldEV2ZW50RGlzcGF0Y2hlcihnZXRfY3VycmVudF9jb21wb25lbnQoKSk7XG4gICQ6IGRpc3BhdGNoRXZlbnQoXCJtYW5pZmVzdExvYWRlZFwiLCBtYW5pZmVzdCk7XG5cbiAgJDogaWYgKE9iamVjdC5rZXlzKCRFcnJvclN0b3JlKS5sZW5ndGgpIHtcbiAgICBkaXNwYXRjaEV2ZW50KFwib25FcnJvclwiLCAkRXJyb3JTdG9yZSk7XG4gIH1cblxuICBleHBvcnQgbGV0IGlkOiBzdHJpbmcgPSBcIlwiO1xuICBleHBvcnQgbGV0IGFjY2Vzc190b2tlbjogc3RyaW5nID0gXCJcIjtcblxuICBleHBvcnQgbGV0IGFjdGlvbnNfYmFyOiBNYWlsYm94QWN0aW9uc1tdO1xuICBleHBvcnQgbGV0IGFsbF90aHJlYWRzOiBUaHJlYWRbXTtcbiAgZXhwb3J0IGxldCB0aHJlYWRfaWRzOiBzdHJpbmdbXTtcbiAgZXhwb3J0IGxldCBoZWFkZXI6IHN0cmluZyA9IFwiTWFpbGJveFwiO1xuICBleHBvcnQgbGV0IGl0ZW1zX3Blcl9wYWdlOiBudW1iZXI7XG4gIGV4cG9ydCBsZXQga2V5d29yZF90b19zZWFyY2g6IHN0cmluZztcbiAgZXhwb3J0IGxldCBvblNlbGVjdFRocmVhZDogKGV2ZW50OiBNb3VzZUV2ZW50LCB0OiBUaHJlYWQpID0+IHZvaWQgPVxuICAgIG9uU2VsZWN0T25lO1xuICBleHBvcnQgbGV0IHF1ZXJ5X3N0cmluZzogc3RyaW5nOyAvLyBBbGxvd2VkIHF1ZXJ5IHBhcmFtZXRlciBsaXN0IGh0dHBzOi8vZGV2ZWxvcGVyLm55bGFzLmNvbS9kb2NzL2FwaS8jZ2V0L3RocmVhZHNcbiAgLy8gcXVlcnlfc3RyaW5nIGZvcm1hdCA9PiBcImluPXRyYXNoIGZyb209cGhpbC5yQG55bGFzLmNvbVwiXG4gIGV4cG9ydCBsZXQgc2hvd19zdGFyOiBib29sZWFuO1xuICBleHBvcnQgbGV0IHNob3dfdGhyZWFkX2NoZWNrYm94OiBib29sZWFuO1xuICBleHBvcnQgbGV0IHNob3dfcmVwbHk6IGJvb2xlYW47XG4gIGV4cG9ydCBsZXQgc2hvd19yZXBseV9hbGw6IGJvb2xlYW47XG4gIGV4cG9ydCBsZXQgc2hvd19mb3J3YXJkOiBib29sZWFuO1xuICBleHBvcnQgbGV0IHRoZW1lOiBzdHJpbmc7XG4gIGV4cG9ydCBsZXQgdGhyZWFkX2NsaWNrX2FjdGlvbjogTWFpbGJveFRocmVhZENsaWNrQWN0aW9uID1cbiAgICBNYWlsYm94VGhyZWFkQ2xpY2tBY3Rpb24uREVGQVVMVDtcblxuICBjb25zdCBkZWZhdWx0VmFsdWVNYXA6IFBhcnRpYWw8TWFpbGJveFByb3BlcnRpZXM+ID0ge1xuICAgIGFjdGlvbnNfYmFyOiBbXSxcbiAgICBpdGVtc19wZXJfcGFnZTogMTMsXG4gICAgcXVlcnlfc3RyaW5nOiBcImluPWluYm94XCIsXG4gICAgdGhyZWFkX2lkczogdW5kZWZpbmVkLFxuICAgIHNob3dfc3RhcjogZmFsc2UsXG4gICAgc2hvd190aHJlYWRfY2hlY2tib3g6IHRydWUsXG4gICAgc2hvd19yZXBseTogZmFsc2UsXG4gICAgc2hvd19yZXBseV9hbGw6IGZhbHNlLFxuICAgIHNob3dfZm9yd2FyZDogZmFsc2UsXG4gICAgdGhlbWU6IFwiYXV0b1wiLFxuICAgIHRocmVhZF9jbGlja19hY3Rpb246IE1haWxib3hUaHJlYWRDbGlja0FjdGlvbi5ERUZBVUxULFxuICB9O1xuXG4gIGxldCBtb3VzZUV2ZW50OiBDdXN0b21FdmVudDtcbiAgY29uc3QgY29uZmlybURlbGV0ZU1vZGFsOiB7XG4gICAgaXNPcGVuOiBib29sZWFuO1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBldmVudDogQ3VzdG9tRXZlbnQ7XG4gIH0gPSB7XG4gICAgaXNPcGVuOiBmYWxzZSxcbiAgICB0eXBlOiBcIlwiLFxuICAgIGV2ZW50OiBtb3VzZUV2ZW50LFxuICB9O1xuXG4gIGxldCBtYW5pZmVzdDogUGFydGlhbDxNYWlsYm94UHJvcGVydGllcz4gPSB7fTtcbiAgbGV0IF90aGlzID0gPE1haWxib3hQcm9wZXJ0aWVzPmJ1aWxkSW50ZXJuYWxQcm9wcyh7fSwge30sIGRlZmF1bHRWYWx1ZU1hcCk7XG5cbiAgbGV0IGN1cnJlbnRseVNlbGVjdGVkVGhyZWFkOiBUaHJlYWQgfCBudWxsO1xuICBsZXQgdGhlbWVMb2FkZWQgPSBmYWxzZTtcbiAgbGV0IGhhc0NvbXBvbmVudExvYWRlZCA9IGZhbHNlO1xuICBsZXQgZGlzcGxheWVkVGhyZWFkc1Byb21pc2U6IFByb21pc2U8VGhyZWFkW10+O1xuXG4gIC8vIHBhZ2luYXRpb25zIHZhcnNcbiAgY29uc3QgREVGQVVMVF9OVU1fUEFHRVMgPSAxO1xuICBsZXQgY3VycmVudFBhZ2U6IG51bWJlciA9IDA7XG4gIGxldCBudW1QYWdlczogbnVtYmVyID0gREVGQVVMVF9OVU1fUEFHRVM7XG4gIGxldCBudW1UaHJlYWRzOiBudW1iZXIgPSAwO1xuXG4gIC8vIHBhZ2luYXRpb24gd2hlbiBzZWFyY2hpbmcgdGhyZWFkcyBpcyBsaW1pdGVkIHRvIGxpbWl0IGFuZCBvZmZzZXQsIHRoaXMgY3Vyc29yIGtlZXBzIHRyYWNrIG9mIHRoZSBvZmZzZXRcbiAgbGV0IHNlYXJjaEN1cnNvcjogbnVtYmVyID0gMDtcblxuICBvbk1vdW50KGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCB0aWNrKCk7XG5cbiAgICBtYW5pZmVzdCA9ICgoYXdhaXQgJE1hbmlmZXN0U3RvcmVbXG4gICAgICBKU09OLnN0cmluZ2lmeSh7IGNvbXBvbmVudF9pZDogaWQsIGFjY2Vzc190b2tlbiB9KVxuICAgIF0pIHx8IHt9KSBhcyBNYWlsYm94UHJvcGVydGllcztcblxuICAgIF90aGlzID0gYnVpbGRJbnRlcm5hbFByb3BzKFxuICAgICAgJCRwcm9wcyxcbiAgICAgIG1hbmlmZXN0LFxuICAgICAgZGVmYXVsdFZhbHVlTWFwLFxuICAgICkgYXMgTWFpbGJveFByb3BlcnRpZXM7XG5cbiAgICAvLyBGZXRjaCBBY2NvdW50XG4gICAgaWYgKGlkICYmICF5b3UuaWQgJiYgIV90aGlzLmFsbF90aHJlYWRzKSB7XG4gICAgICB5b3UgPSBhd2FpdCBmZXRjaEFjY291bnQoe1xuICAgICAgICBjb21wb25lbnRfaWQ6IHF1ZXJ5LmNvbXBvbmVudF9pZCxcbiAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWNjb3VudE9yZ2FuaXphdGlvblVuaXRRdWVyeSA9IHtcbiAgICAgIGNvbXBvbmVudF9pZDogaWQsXG4gICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgfTtcbiAgICAvLyBJbml0aWFsaXplIGxhYmVscyAvIGZvbGRlcnNcbiAgICBpZiAoeW91Py5vcmdhbml6YXRpb25fdW5pdCA9PT0gQWNjb3VudE9yZ2FuaXphdGlvblVuaXQuTGFiZWwpIHtcbiAgICAgIExhYmVsU3RvcmUuZ2V0TGFiZWxzKGFjY291bnRPcmdhbml6YXRpb25Vbml0UXVlcnkpLnRoZW4oXG4gICAgICAgIChscykgPT4gKGxhYmVscyA9IGxzKSxcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh5b3U/Lm9yZ2FuaXphdGlvbl91bml0ID09PSBBY2NvdW50T3JnYW5pemF0aW9uVW5pdC5Gb2xkZXIpIHtcbiAgICAgIEZvbGRlclN0b3JlLmdldEZvbGRlcnMoYWNjb3VudE9yZ2FuaXphdGlvblVuaXRRdWVyeSkudGhlbihcbiAgICAgICAgKGZzKSA9PiAoZm9sZGVycyA9IGZzKSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgYXdhaXQgdXBkYXRlRGlzcGxheWVkVGhyZWFkcygpO1xuXG4gICAgaGFzQ29tcG9uZW50TG9hZGVkID0gdHJ1ZTtcbiAgfSk7XG5cbiAgbGV0IHByZXZpb3VzUHJvcHMgPSAkJHByb3BzO1xuICAkOiB7XG4gICAgaWYgKEpTT04uc3RyaW5naWZ5KHByZXZpb3VzUHJvcHMpICE9PSBKU09OLnN0cmluZ2lmeSgkJHByb3BzKSkge1xuICAgICAgX3RoaXMgPSBidWlsZEludGVybmFsUHJvcHMoXG4gICAgICAgICQkcHJvcHMsXG4gICAgICAgIG1hbmlmZXN0LFxuICAgICAgICBkZWZhdWx0VmFsdWVNYXAsXG4gICAgICApIGFzIE1haWxib3hQcm9wZXJ0aWVzO1xuICAgICAgcHJldmlvdXNQcm9wcyA9ICQkcHJvcHM7XG4gICAgfVxuICB9XG5cbiAgJDogKGFzeW5jICgpID0+IHtcbiAgICBpZiAoIV90aGlzLmFsbF90aHJlYWRzICYmIF90aGlzLml0ZW1zX3Blcl9wYWdlICYmIGhhc0NvbXBvbmVudExvYWRlZCkge1xuICAgICAgYXdhaXQgdXBkYXRlRGlzcGxheWVkVGhyZWFkcyh0cnVlKTtcbiAgICB9XG4gIH0pKCk7XG5cbiAgJDogaWYgKEFycmF5LmlzQXJyYXkoX3RoaXMuYWxsX3RocmVhZHMpKSB7XG4gICAgbnVtVGhyZWFkcyA9IF90aGlzLmFsbF90aHJlYWRzLmxlbmd0aDtcbiAgICBudW1QYWdlcyA9IE1hdGguY2VpbChudW1UaHJlYWRzIC8gX3RoaXMuaXRlbXNfcGVyX3BhZ2UpO1xuXG4gICAgY29uc3QgcGFnZVN0YXJ0ID0gY3VycmVudFBhZ2UgKiBfdGhpcy5pdGVtc19wZXJfcGFnZTtcbiAgICB0aHJlYWRzID0gX3RoaXMuYWxsX3RocmVhZHMuc2xpY2UoXG4gICAgICBwYWdlU3RhcnQsXG4gICAgICBwYWdlU3RhcnQgKyBfdGhpcy5pdGVtc19wZXJfcGFnZSxcbiAgICApO1xuICB9XG5cbiAgbGV0IHF1ZXJ5OiBNYWlsYm94UXVlcnk7XG4gICQ6IHtcbiAgICBxdWVyeSA9IHtcbiAgICAgIGNvbXBvbmVudF9pZDogaWQsXG4gICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICBxdWVyeTogT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgICAgICBuZXcgVVJMU2VhcmNoUGFyYW1zKF90aGlzLnF1ZXJ5X3N0cmluZz8ucmVwbGFjZUFsbChcIiBcIiwgXCImXCIpKSxcbiAgICAgICksXG4gICAgICB0aHJlYWRfaWRzLFxuICAgIH07XG5cbiAgICBpZiAoX3RoaXMua2V5d29yZF90b19zZWFyY2gpIHtcbiAgICAgIHF1ZXJ5LmtleXdvcmRUb1NlYXJjaCA9IF90aGlzLmtleXdvcmRfdG9fc2VhcmNoO1xuICAgICAgcXVlcnkucXVlcnkubGltaXQgPSBfdGhpcy5pdGVtc19wZXJfcGFnZSArIDE7IC8vIGFkZCBvbmUgdG8gY2hlY2sgaWYgdGhlcmUgaXMgYW5vdGhlciBwYWdlIG9mIHRocmVhZHNcbiAgICAgIHF1ZXJ5LnF1ZXJ5Lm9mZnNldCA9IHNlYXJjaEN1cnNvcjtcbiAgICB9XG4gIH1cblxuICBsZXQgcXVlcnlLZXk6IHN0cmluZztcbiAgJDogcXVlcnlLZXkgPSBKU09OLnN0cmluZ2lmeShxdWVyeSk7XG5cbiAgbGV0IHRocmVhZHM6IFRocmVhZFtdID0gW107XG5cbiAgbGV0IGxhYmVsczogTGFiZWxbXSA9IFtdO1xuICAkOiB0cmFzaExhYmVsSUQgPSBsYWJlbHMubGVuZ3RoXG4gICAgPyBsYWJlbHMuZmluZCgobGFiZWwpID0+IGxhYmVsLm5hbWUgPT09IFwidHJhc2hcIik/LmlkXG4gICAgOiBudWxsO1xuXG4gIGxldCBmb2xkZXJzOiBGb2xkZXJbXSA9IFtdO1xuICAkOiB0cmFzaEZvbGRlcklEID0gZm9sZGVycy5sZW5ndGhcbiAgICA/IGZvbGRlcnMuZmluZCgoZm9sZGVyKSA9PiBmb2xkZXIubmFtZSA9PT0gXCJ0cmFzaFwiKT8uaWRcbiAgICA6IG51bGw7XG5cbiAgbGV0IHlvdTogUGFydGlhbDxBY2NvdW50PiA9IHt9O1xuXG4gIC8vI3JlZ2lvbiBtZXRob2RzXG4gIGZ1bmN0aW9uIGZldGNoSW5kaXZpZHVhbE1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSkge1xuICAgIHJldHVybiBmZXRjaE1lc3NhZ2UocXVlcnksIG1lc3NhZ2UuaWQpLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIG1lc3NhZ2UuYm9keSA9IGpzb24uYm9keTtcbiAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRGlzcGxheWVkVGhyZWFkcyhmb3JjZVJlZnJlc2ggPSBmYWxzZSkge1xuICAgIGlmIChkaXNwbGF5ZWRUaHJlYWRzUHJvbWlzZSkge1xuICAgICAgYXdhaXQgZGlzcGxheWVkVGhyZWFkc1Byb21pc2U7XG4gICAgfVxuXG4gICAgaWYgKCFfdGhpcy5hbGxfdGhyZWFkcyAmJiBpZCkge1xuICAgICAgaWYgKF90aGlzLmtleXdvcmRfdG9fc2VhcmNoKSB7XG4gICAgICAgIGRpc3BsYXllZFRocmVhZHNQcm9taXNlID0gTWFpbGJveFN0b3JlLmdldFRocmVhZHNXaXRoU2VhcmNoS2V5d29yZChcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICBmb3JjZVJlZnJlc2gsXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhyZWFkcyA9IChhd2FpdCBkaXNwbGF5ZWRUaHJlYWRzUHJvbWlzZSkgPz8gW107XG5cbiAgICAgICAgLy8gV2Ugb25seSBkaXNwbGF5IHRoZSBudW1iZXIgb2YgbWVzc2FnZXMgaW4gX3RoaXMuaXRlbXNfcGVyX3BhZ2VcbiAgICAgICAgaWYgKF90aGlzLml0ZW1zX3Blcl9wYWdlICsgMSA9PT0gdGhyZWFkcy5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAoc2VhcmNoQ3Vyc29yID09PSAwKSB7XG4gICAgICAgICAgICBudW1QYWdlcyA9IERFRkFVTFRfTlVNX1BBR0VTICsgMTsgLy8gdGhlcmUgaXMgMSBtb3JlIGl0ZW0gaW4gX3RoaXMuaXRlbXNfcGVyX3BhZ2UsIG1lYW5pbmcgdGhlcmUncyBhbm90aGVyIHBhZ2VcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbnVtUGFnZXMgPVxuICAgICAgICAgICAgICBERUZBVUxUX05VTV9QQUdFUyArXG4gICAgICAgICAgICAgIE1hdGguY2VpbChzZWFyY2hDdXJzb3IgLyBfdGhpcy5pdGVtc19wZXJfcGFnZSkgK1xuICAgICAgICAgICAgICAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJlYWRzLnBvcCgpOyAvLyB0aGVyZSBpcyBvbmUgYWRkaXRpb25hbCBpdGVtIGluIHRocmVhZHMgdG8gY2hlY2sgZm9yIG5leHQgcGFnZSwgd2UgcmVtb3ZlIGl0IHRvIG9ubHkgZGlzcGxheSBfdGhpcy5pdGVtc19wZXJfcGFnZVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwbGF5ZWRUaHJlYWRzUHJvbWlzZSA9IE1haWxib3hTdG9yZS5nZXRUaHJlYWRzKFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIGN1cnJlbnRQYWdlLFxuICAgICAgICAgIF90aGlzLml0ZW1zX3Blcl9wYWdlLFxuICAgICAgICAgIGZvcmNlUmVmcmVzaCxcbiAgICAgICAgKTtcbiAgICAgICAgdGhyZWFkcyA9IChhd2FpdCBkaXNwbGF5ZWRUaHJlYWRzUHJvbWlzZSkgPz8gW107XG4gICAgICAgIG51bVRocmVhZHMgPSBhd2FpdCBNYWlsYm94U3RvcmUuZ2V0TnVtYmVyT2ZJdGVtcyhxdWVyeSk7XG4gICAgICAgIG51bVBhZ2VzID0gTWF0aC5jZWlsKG51bVRocmVhZHMgLyBfdGhpcy5pdGVtc19wZXJfcGFnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8jZW5kcmVnaW9uIG1ldGhvZHNcblxuICAvLyBDYWxsYmFja3NcbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbnRNZXNzYWdlVXBkYXRlKG1lc3NhZ2U6IE1lc3NhZ2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aHJlYWRzID0gTWFpbGJveFN0b3JlLmh5ZHJhdGVNZXNzYWdlSW5UaHJlYWQobWVzc2FnZSwgcXVlcnksIGN1cnJlbnRQYWdlKTtcbiAgfVxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZHJhZnRNZXNzYWdlVXBkYXRlKG1lc3NhZ2U6IE1lc3NhZ2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aHJlYWRzID0gTWFpbGJveFN0b3JlLmh5ZHJhdGVEcmFmdEluVGhyZWFkKG1lc3NhZ2UsIHF1ZXJ5LCBjdXJyZW50UGFnZSk7XG4gICAgY29uc3QgdXBkYXRlZFRocmVhZCA9IHRocmVhZHMuZmluZCgodCkgPT4gdC5pZCA9PT0gbWVzc2FnZS50aHJlYWRfaWQpO1xuICAgIGlmIChjdXJyZW50bHlTZWxlY3RlZFRocmVhZCkge1xuICAgICAgY3VycmVudGx5U2VsZWN0ZWRUaHJlYWQuZHJhZnRzID0gdXBkYXRlZFRocmVhZC5kcmFmdHM7XG4gICAgfVxuICB9XG5cbiAgLy8jcmVnaW9uIGFjdGlvbnNcbiAgbGV0IGFyZUFsbFNlbGVjdGVkID0gZmFsc2U7XG4gICQ6IGFyZUFsbFNlbGVjdGVkID0gdGhyZWFkcy5zb21lKCh0aHJlYWQpID0+IHRocmVhZC5zZWxlY3RlZCk7XG5cbiAgbGV0IGFyZUFsbFNlbGVjdGVkU3RhcnJlZCA9IGZhbHNlO1xuICAkOiBhcmVBbGxTZWxlY3RlZFN0YXJyZWQgPSB0aHJlYWRzXG4gICAgLmZpbHRlcigodGhyZWFkKSA9PiB0aHJlYWQuc2VsZWN0ZWQpXG4gICAgLnNvbWUoKHRocmVhZCkgPT4gdGhyZWFkLnN0YXJyZWQpO1xuXG4gIGxldCBhcmVBbGxTZWxlY3RlZFJlYWQgPSBmYWxzZTtcbiAgJDogYXJlQWxsU2VsZWN0ZWRSZWFkID0gdGhyZWFkc1xuICAgIC5maWx0ZXIoKHRocmVhZCkgPT4gdGhyZWFkLnNlbGVjdGVkKVxuICAgIC5zb21lKCh0aHJlYWQpID0+ICF0aHJlYWQudW5yZWFkKTtcblxuICBhc3luYyBmdW5jdGlvbiBtZXNzYWdlQ2xpY2tlZChldmVudDogQ3VzdG9tRXZlbnQpIHtcbiAgICBsZXQgbWVzc2FnZSA9IGV2ZW50LmRldGFpbC5tZXNzYWdlO1xuXG4gICAgaWYgKCFfdGhpcy5hbGxfdGhyZWFkcyAmJiBtZXNzYWdlICYmIGN1cnJlbnRseVNlbGVjdGVkVGhyZWFkKSB7XG4gICAgICBtZXNzYWdlID0gYXdhaXQgZmV0Y2hJbmRpdmlkdWFsTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgIHRocmVhZHMgPSBNYWlsYm94U3RvcmUuaHlkcmF0ZU1lc3NhZ2VJblRocmVhZChcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGN1cnJlbnRQYWdlLFxuICAgICAgKTtcbiAgICAgIGlmIChGaWxlc1N0b3JlLmhhc0lubGluZUZpbGVzKG1lc3NhZ2UpKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBhd2FpdCBnZXRNZXNzYWdlV2l0aElubGluZUZpbGVzKG1lc3NhZ2UpO1xuICAgICAgICB0aHJlYWRzID0gTWFpbGJveFN0b3JlLmh5ZHJhdGVNZXNzYWdlSW5UaHJlYWQoXG4gICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICBjdXJyZW50UGFnZSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50bHlTZWxlY3RlZFRocmVhZCkge1xuICAgICAgICBjdXJyZW50bHlTZWxlY3RlZFRocmVhZC5tZXNzYWdlcyA9XG4gICAgICAgICAgY3VycmVudGx5U2VsZWN0ZWRUaHJlYWQubWVzc2FnZXM/Lm1hcCgoY3VycmVudE1lc3NhZ2UpID0+XG4gICAgICAgICAgICBjdXJyZW50TWVzc2FnZS5pZCA9PT0gbWVzc2FnZS5pZCA/IG1lc3NhZ2UgOiBjdXJyZW50TWVzc2FnZSxcbiAgICAgICAgICApID8/IFtdO1xuICAgICAgICBjdXJyZW50bHlTZWxlY3RlZFRocmVhZCA9IGN1cnJlbnRseVNlbGVjdGVkVGhyZWFkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUVtYWlsRHJhZnRPcGVuZWQoZXZlbnQ6IEN1c3RvbUV2ZW50KSB7XG4gICAgbGV0IGRyYWZ0ID0gZXZlbnQuZGV0YWlsLm1lc3NhZ2U7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudC5kZXRhaWwudmFsdWU7XG5cbiAgICAvL0ZldGNoIGRyYWZ0IGJvZHkgZm9yIGRyYWZ0IGluIGVtYWlsXG4gICAgaWYgKFxuICAgICAgIV90aGlzLmFsbF90aHJlYWRzICYmXG4gICAgICBkcmFmdD8ub2JqZWN0ID09PSBcImRyYWZ0XCIgJiZcbiAgICAgIGN1cnJlbnRseVNlbGVjdGVkVGhyZWFkXG4gICAgKSB7XG4gICAgICBpZiAoIWRyYWZ0Py5ib2R5KSB7XG4gICAgICAgIGRyYWZ0ID0gYXdhaXQgZmV0Y2hJbmRpdmlkdWFsTWVzc2FnZShkcmFmdCk7XG4gICAgICB9XG4gICAgICBpZiAoRmlsZXNTdG9yZS5oYXNJbmxpbmVGaWxlcyhkcmFmdCkpIHtcbiAgICAgICAgZHJhZnQgPSBhd2FpdCBnZXRNZXNzYWdlV2l0aElubGluZUZpbGVzKGRyYWZ0KTtcbiAgICAgIH1cbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB2YWx1ZS5ib2R5ID0gZHJhZnQuYm9keTtcbiAgICAgIH1cbiAgICAgIGRyYWZ0TWVzc2FnZVVwZGF0ZShkcmFmdCk7XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQoZXZlbnQudHlwZSwgZXZlbnQuZGV0YWlsKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRocmVhZFN0YXR1cyh1cGRhdGVkVGhyZWFkOiBhbnkpIHtcbiAgICBpZiAoaWQgJiYgdXBkYXRlZFRocmVhZCAmJiB1cGRhdGVkVGhyZWFkLmlkKSB7XG4gICAgICBhd2FpdCBNYWlsYm94U3RvcmUudXBkYXRlVGhyZWFkKFxuICAgICAgICB7XG4gICAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgICAgIGNvbXBvbmVudF9pZDogaWQsXG4gICAgICAgICAgdGhyZWFkX2lkOiB1cGRhdGVkVGhyZWFkLmlkLFxuICAgICAgICB9LFxuICAgICAgICBxdWVyeUtleSxcbiAgICAgICAgdXBkYXRlZFRocmVhZCxcbiAgICAgICAgY3VycmVudFBhZ2UsXG4gICAgICAgIF90aGlzLml0ZW1zX3Blcl9wYWdlLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBsZXQgbG9hZGluZyA9IGZhbHNlO1xuICBhc3luYyBmdW5jdGlvbiB0aHJlYWRDbGlja2VkKGV2ZW50OiBDdXN0b21FdmVudCkge1xuICAgIGNvbnN0IHsgdGhyZWFkLCBtZXNzYWdlVHlwZSB9ID0gZXZlbnQuZGV0YWlsO1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhyZWFkW21lc3NhZ2VUeXBlXTtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsb2FkaW5nID0gdHJ1ZTtcbiAgICBpZiAoX3RoaXMudGhyZWFkX2NsaWNrX2FjdGlvbiA9PT0gTWFpbGJveFRocmVhZENsaWNrQWN0aW9uLkRFRkFVTFQpIHtcbiAgICAgIGxldCBtZXNzYWdlID0gYXdhaXQgZmV0Y2hJbmRpdmlkdWFsTWVzc2FnZShtZXNzYWdlc1ttZXNzYWdlcy5sZW5ndGggLSAxXSk7XG5cbiAgICAgIGlmIChtZXNzYWdlVHlwZSA9PT0gTWVzc2FnZVR5cGUuRFJBRlRTKSB7XG4gICAgICAgIGF3YWl0IGRpc3BhdGNoRHJhZnRUaHJlYWRDbGlja2VkKGV2ZW50KTtcbiAgICAgICAgbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRseVNlbGVjdGVkVGhyZWFkID0gdGhyZWFkO1xuICAgICAgdGhyZWFkLmV4cGFuZGVkID0gIXRocmVhZC5leHBhbmRlZDtcbiAgICAgIGlmICghX3RoaXMuYWxsX3RocmVhZHMgJiYgdGhyZWFkPy5leHBhbmRlZCkge1xuICAgICAgICBpZiAodGhyZWFkLnVucmVhZCkge1xuICAgICAgICAgIHRocmVhZC51bnJlYWQgPSBmYWxzZTtcbiAgICAgICAgICBhd2FpdCB1cGRhdGVUaHJlYWRTdGF0dXModGhyZWFkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocmVhZHMgPSBNYWlsYm94U3RvcmUuaHlkcmF0ZU1lc3NhZ2VJblRocmVhZChcbiAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIGN1cnJlbnRQYWdlLFxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChGaWxlc1N0b3JlLmhhc0lubGluZUZpbGVzKG1lc3NhZ2UpKSB7XG4gICAgICAgICAgbWVzc2FnZSA9IGF3YWl0IGdldE1lc3NhZ2VXaXRoSW5saW5lRmlsZXMobWVzc2FnZSk7XG4gICAgICAgICAgdGhyZWFkcyA9IE1haWxib3hTdG9yZS5oeWRyYXRlTWVzc2FnZUluVGhyZWFkKFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgY3VycmVudFBhZ2UsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50bHlTZWxlY3RlZFRocmVhZCkge1xuICAgICAgICAgIGN1cnJlbnRseVNlbGVjdGVkVGhyZWFkLm1lc3NhZ2VzID1cbiAgICAgICAgICAgIGN1cnJlbnRseVNlbGVjdGVkVGhyZWFkLm1lc3NhZ2VzPy5tYXAoKGN1cnJlbnRNZXNzYWdlKSA9PlxuICAgICAgICAgICAgICBjdXJyZW50TWVzc2FnZS5pZCA9PT0gbWVzc2FnZS5pZCA/IG1lc3NhZ2UgOiBjdXJyZW50TWVzc2FnZSxcbiAgICAgICAgICAgICkgPz8gW107XG4gICAgICAgICAgY3VycmVudGx5U2VsZWN0ZWRUaHJlYWQgPSBjdXJyZW50bHlTZWxlY3RlZFRocmVhZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBsb2FkaW5nID0gZmFsc2U7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXRNZXNzYWdlV2l0aElubGluZUZpbGVzKG1lc3NhZ2U6IE1lc3NhZ2UpOiBQcm9taXNlPE1lc3NhZ2U+IHtcbiAgICBjb25zdCBmZXRjaGVkRmlsZXMgPSBhd2FpdCBGaWxlc1N0b3JlLmdldEZpbGVzRm9yTWVzc2FnZShtZXNzYWdlLCB7XG4gICAgICBjb21wb25lbnRfaWQ6IGlkLFxuICAgICAgYWNjZXNzX3Rva2VuLFxuICAgIH0pO1xuICAgIGZvciAoY29uc3QgZmlsZSBvZiBPYmplY3QudmFsdWVzKGZldGNoZWRGaWxlcykpIHtcbiAgICAgIGlmIChtZXNzYWdlLmJvZHkpIHtcbiAgICAgICAgbWVzc2FnZS5ib2R5ID0gbWVzc2FnZS5ib2R5Py5yZXBsYWNlQWxsKFxuICAgICAgICAgIGBzcmM9XCJjaWQ6JHtmaWxlLmNvbnRlbnRfaWR9XCJgLFxuICAgICAgICAgIGBzcmM9XCJkYXRhOiR7ZmlsZS5jb250ZW50X3R5cGV9O2Jhc2U2NCwke2ZpbGUuZGF0YX1cImAsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaENsaWNrZWQoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBsb2FkaW5nID0gdHJ1ZTtcbiAgICBkaXNwYXRjaEV2ZW50KFwicmVmcmVzaENsaWNrZWRcIiwgeyBldmVudCB9KTtcbiAgICBhd2FpdCB1cGRhdGVEaXNwbGF5ZWRUaHJlYWRzKHRydWUpO1xuICAgIGxvYWRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uU2VsZWN0T25lKGV2ZW50OiBNb3VzZUV2ZW50LCB0aHJlYWQ6IFRocmVhZCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KF90aGlzLmFsbF90aHJlYWRzKSkge1xuICAgICAgdGhyZWFkLnNlbGVjdGVkID0gIXRocmVhZC5zZWxlY3RlZDtcbiAgICAgIHRocmVhZHMgPSBbLi4udGhyZWFkc107XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocmVhZHMgPSBNYWlsYm94U3RvcmUudXBkYXRlVGhyZWFkU2VsZWN0aW9uKFxuICAgICAgICBKU09OLnN0cmluZ2lmeShxdWVyeSksXG4gICAgICAgIGN1cnJlbnRQYWdlLFxuICAgICAgICB0aHJlYWQuaWQsXG4gICAgICApO1xuICAgIH1cbiAgICBkaXNwYXRjaEV2ZW50KFwib25TZWxlY3RPbmVDbGlja2VkXCIsIHsgZXZlbnQsIHRocmVhZCB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uU2VsZWN0QWxsKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoX3RoaXMuYWxsX3RocmVhZHMpKSB7XG4gICAgICB0aHJlYWRzID0gdGhyZWFkcy5tYXAoKHRocmVhZCkgPT4ge1xuICAgICAgICByZXR1cm4geyAuLi50aHJlYWQsIHNlbGVjdGVkOiAhYXJlQWxsU2VsZWN0ZWQgfTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJlYWRzID0gTWFpbGJveFN0b3JlLnVwZGF0ZVRocmVhZFNlbGVjdGlvbihcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkocXVlcnkpLFxuICAgICAgICBjdXJyZW50UGFnZSxcbiAgICAgICk7XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQoXCJvblNlbGVjdEFsbENsaWNrZWRcIiwge1xuICAgICAgZXZlbnQsXG4gICAgICBzZWxlY3RlZFRocmVhZHM6IHRocmVhZHMuZmlsdGVyKCh0aHJlYWQpID0+IHRocmVhZC5zZWxlY3RlZCksXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiB0aHJlYWRTdGFycmVkKGV2ZW50OiBDdXN0b21FdmVudCkge1xuICAgIGNvbnN0IHRocmVhZCA9IGV2ZW50LmRldGFpbC50aHJlYWQ7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KF90aGlzLmFsbF90aHJlYWRzKSkge1xuICAgICAgYXdhaXQgdXBkYXRlVGhyZWFkU3RhdHVzKHRocmVhZCk7XG4gICAgICB0aHJlYWRzID0gJE1haWxib3hTdG9yZVtxdWVyeUtleV1bY3VycmVudFBhZ2VdLnRocmVhZHM7XG4gICAgfVxuXG4gICAgZGlzcGF0Y2hFdmVudChcIm9uU3RhclNlbGVjdGVkXCIsIHtcbiAgICAgIGV2ZW50LFxuICAgICAgc3RhcnJlZFRocmVhZHM6IFt0aHJlYWRdLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gb25TdGFyU2VsZWN0ZWQoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShfdGhpcy5hbGxfdGhyZWFkcykpIHtcbiAgICAgIHRocmVhZHMgPSB0aHJlYWRzLm1hcCgodGhyZWFkKSA9PiB7XG4gICAgICAgIHJldHVybiB7IC4uLnRocmVhZCwgc3RhcnJlZDogIWFyZUFsbFNlbGVjdGVkU3RhcnJlZCB9O1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0YXJUaHJlYWRzUHJvbWlzZXMgPSBbXTtcbiAgICAgIGZvciAoY29uc3QgdGhyZWFkIG9mIHRocmVhZHMuZmlsdGVyKCh0aHJlYWQpID0+IHRocmVhZC5zZWxlY3RlZCkpIHtcbiAgICAgICAgdGhyZWFkLnN0YXJyZWQgPSAhYXJlQWxsU2VsZWN0ZWRTdGFycmVkO1xuICAgICAgICBzdGFyVGhyZWFkc1Byb21pc2VzLnB1c2godXBkYXRlVGhyZWFkU3RhdHVzKHRocmVhZCkpO1xuICAgICAgfVxuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoc3RhclRocmVhZHNQcm9taXNlcyk7XG4gICAgICB0aHJlYWRzID0gJE1haWxib3hTdG9yZVtxdWVyeUtleV1bY3VycmVudFBhZ2VdLnRocmVhZHM7XG4gICAgfVxuXG4gICAgZGlzcGF0Y2hFdmVudChcIm9uU3RhclNlbGVjdGVkXCIsIHtcbiAgICAgIGV2ZW50LFxuICAgICAgc2VsZWN0ZWRUaHJlYWRzOiB0aHJlYWRzLmZpbHRlcigodGhyZWFkcykgPT4gdGhyZWFkcy5zZWxlY3RlZCksXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiB0b2dnbGVUaHJlYWRVbnJlYWRTdGF0dXMoZXZlbnQ6IEN1c3RvbUV2ZW50KSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoX3RoaXMuYWxsX3RocmVhZHMpKSB7XG4gICAgICB0aHJlYWRzID0gWy4uLnRocmVhZHNdO1xuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCB1cGRhdGVUaHJlYWRTdGF0dXMoZXZlbnQuZGV0YWlsLnRocmVhZCk7XG4gICAgICB0aHJlYWRzID0gJE1haWxib3hTdG9yZVtxdWVyeUtleV1bY3VycmVudFBhZ2VdLnRocmVhZHM7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gb25DaGFuZ2VTZWxlY3RlZFJlYWRTdGF0dXMoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShfdGhpcy5hbGxfdGhyZWFkcykpIHtcbiAgICAgIHRocmVhZHMgPSB0aHJlYWRzLm1hcCgodGhyZWFkKSA9PiB7XG4gICAgICAgIGlmICh0aHJlYWQuc2VsZWN0ZWQpIHtcbiAgICAgICAgICB0aHJlYWQudW5yZWFkID0gYXJlQWxsU2VsZWN0ZWRSZWFkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IC4uLnRocmVhZCB9O1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlYWRTdGF0dXNQcm9taXNlcyA9IFtdO1xuICAgICAgZm9yIChjb25zdCB0aHJlYWQgb2YgdGhyZWFkcy5maWx0ZXIoKHRocmVhZCkgPT4gdGhyZWFkLnNlbGVjdGVkKSkge1xuICAgICAgICB0aHJlYWQudW5yZWFkID0gYXJlQWxsU2VsZWN0ZWRSZWFkO1xuICAgICAgICByZWFkU3RhdHVzUHJvbWlzZXMucHVzaCh1cGRhdGVUaHJlYWRTdGF0dXModGhyZWFkKSk7XG4gICAgICB9XG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChyZWFkU3RhdHVzUHJvbWlzZXMpO1xuICAgICAgdGhyZWFkcyA9ICRNYWlsYm94U3RvcmVbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS50aHJlYWRzO1xuICAgIH1cbiAgICBkaXNwYXRjaEV2ZW50KFwib25DaGFuZ2VTZWxlY3RlZFJlYWRTdGF0dXNcIiwge1xuICAgICAgZXZlbnQsXG4gICAgICBzZWxlY3RlZFRocmVhZHM6IHRocmVhZHMuZmlsdGVyKCh0aHJlYWRzKSA9PiB0aHJlYWRzLnNlbGVjdGVkKSxcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dDb25maXJtRGVsZXRlTW9kYWwoZXZlbnQ6IGFueSwgdHlwZSA9IFwiXCIpIHtcbiAgICBjb25maXJtRGVsZXRlTW9kYWwuaXNPcGVuID0gdHJ1ZTtcbiAgICBjb25maXJtRGVsZXRlTW9kYWwuZXZlbnQgPSBldmVudDtcbiAgICBjb25maXJtRGVsZXRlTW9kYWwudHlwZSA9IHR5cGU7XG4gIH1cblxuICBsZXQgZGVsZXRpbmcgPSBmYWxzZTtcbiAgZnVuY3Rpb24gY29uZmlybURlbGV0ZUNsaWNrSGFuZGxlcigpIHtcbiAgICBkZWxldGluZyA9IHRydWU7XG4gICAgaWYgKGNvbmZpcm1EZWxldGVNb2RhbC50eXBlID09PSBcInNlbGVjdGVkXCIpIHtcbiAgICAgIG9uRGVsZXRlU2VsZWN0ZWQoY29uZmlybURlbGV0ZU1vZGFsLmV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlVGhyZWFkKGNvbmZpcm1EZWxldGVNb2RhbC5ldmVudCk7XG4gICAgfVxuICAgIC8vIHJlc2V0IGNvbmZpcm1EZWxldGVNb2RhbFxuICAgIGNvbmZpcm1EZWxldGVNb2RhbC5pc09wZW4gPSBmYWxzZTtcbiAgICBjb25maXJtRGVsZXRlTW9kYWwudHlwZSA9IFwiXCI7XG4gICAgY29uZmlybURlbGV0ZU1vZGFsLmV2ZW50ID0gbW91c2VFdmVudDtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRocmVhZChldmVudDogQ3VzdG9tRXZlbnQpIHtcbiAgICBjb25zdCB0aHJlYWQgPSBldmVudC5kZXRhaWwudGhyZWFkO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoX3RoaXMuYWxsX3RocmVhZHMpKSB7XG4gICAgICB0aHJlYWRzID0gdGhyZWFkcy5maWx0ZXIoXG4gICAgICAgIChjdXJyZW50VGhyZWFkKSA9PiBjdXJyZW50VGhyZWFkLmlkICE9PSB0aHJlYWQuaWQsXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHJhc2hMYWJlbElEKSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nTGFiZWxJZHMgPVxuICAgICAgICAgIHRocmVhZC5sYWJlbHM/Lm1hcCgobGFiZWw6IGFueSkgPT4gbGFiZWwuaWQpIHx8IFtdO1xuICAgICAgICB0aHJlYWQubGFiZWxfaWRzID0gWy4uLmV4aXN0aW5nTGFiZWxJZHMsIHRyYXNoTGFiZWxJRF07XG4gICAgICAgIGF3YWl0IHVwZGF0ZVRocmVhZFN0YXR1cyh0aHJlYWQpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOeWxhcyB0aHJlYWQgdXBkYXRlIEFQSSBkb2VzIG5vdCB1cGRhdGUgbGFiZWwgb2YgdGhlIGRyYWZ0cyBpbiB0aHJlYWQgY3VycmVudGx5XG4gICAgICAgICAqIEFzIGEgd29ya2Fyb3VuZCwgYW55IGRyYWZ0cyBpbiB0aHJlYWQgbmVlZHMgdG8gYmUgZGVsZXRlZCBpbmRpdmlkdWFsbHlcbiAgICAgICAgICoqL1xuICAgICAgICBjb25zdCBhbGxEcmFmdHMgPSBbLi4udGhyZWFkLmRyYWZ0c107XG4gICAgICAgIGZvciAobGV0IGRyYWZ0IG9mIGFsbERyYWZ0cykge1xuICAgICAgICAgIGNvbnN0IGRyYWZ0TGFiZWxzID0gZHJhZnQubGFiZWxzPy5tYXAoKGxhYmVsOiBhbnkpID0+IGxhYmVsLmlkKSB8fCBbXTtcbiAgICAgICAgICBhd2FpdCB1cGRhdGVNZXNzYWdlKFxuICAgICAgICAgICAgcXVlcnkuY29tcG9uZW50X2lkLFxuICAgICAgICAgICAgeyAuLi5kcmFmdCwgbGFiZWxfaWRzOiBbLi4uZHJhZnRMYWJlbHMsIHRyYXNoTGFiZWxJRF0gfSxcbiAgICAgICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgICAgICApLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHNpbGVuY2UoZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0cmFzaEZvbGRlcklEKSB7XG4gICAgICAgIHRocmVhZC5mb2xkZXJfaWQgPSB0cmFzaEZvbGRlcklEO1xuICAgICAgICAvKipcbiAgICAgICAgICogT3VyIHRocmVhZHMgQVBJIGRvZXMgbm90IGFsbG93IG1vdmluZyBhIHRocmVhZCBzZW50XG4gICAgICAgICAqIGJ5IHNlbGYgdG8gdHJhc2ggZm9yIG5vbi1nbWFpbCBhY2NvdW50cy4gSGVuY2UsIG1vdmluZ1xuICAgICAgICAgKiBpbmRpdmlkdWFsIG1lc3NhZ2VzIHRvIHRyYXNoIGZvbGRlciBhcyBhIHdvcmthcm91bmRcbiAgICAgICAgICoqL1xuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICBjb25zdCBhbGxNZXNzYWdlcyA9IFsuLi50aHJlYWQubWVzc2FnZXMsIC4uLnRocmVhZC5kcmFmdHNdO1xuICAgICAgICAgIGZvciAobGV0IG1lc3NhZ2Ugb2YgYWxsTWVzc2FnZXMpIHtcbiAgICAgICAgICAgIGF3YWl0IHVwZGF0ZU1lc3NhZ2UoXG4gICAgICAgICAgICAgIHF1ZXJ5LmNvbXBvbmVudF9pZCxcbiAgICAgICAgICAgICAgeyAuLi5tZXNzYWdlLCBmb2xkZXJfaWQ6IHRyYXNoRm9sZGVySUQgfSxcbiAgICAgICAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgICAgICAgKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgIHNpbGVuY2UoZXJyKTtcbiAgICAgICAgICAgICAgZGVsZXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXdhaXQgdXBkYXRlRGlzcGxheWVkVGhyZWFkcyh0cnVlKTtcbiAgICB9XG4gICAgZGVsZXRpbmcgPSBmYWxzZTtcbiAgICByZXR1cm5Ub01haWxib3goKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGRvd25sb2FkU2VsZWN0ZWRGaWxlKGV2ZW50OiBDdXN0b21FdmVudCkge1xuICAgIGNvbnN0IGZpbGUgPSBldmVudC5kZXRhaWwuZmlsZTtcbiAgICBjb25zdCBkb3dubG9hZGVkRmlsZURhdGEgPSBhd2FpdCBkb3dubG9hZEZpbGUoe1xuICAgICAgZmlsZV9pZDogZmlsZS5pZCxcbiAgICAgIGNvbXBvbmVudF9pZDogaWQsXG4gICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgfSk7XG4gICAgZG93bmxvYWRBdHRhY2hlZEZpbGUoZG93bmxvYWRlZEZpbGVEYXRhLCBmaWxlKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uRGVsZXRlU2VsZWN0ZWQoZXZlbnQ6IEN1c3RvbUV2ZW50KSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoX3RoaXMuYWxsX3RocmVhZHMpKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZFRocmVhZHMgPSB0aHJlYWRzLmZpbHRlcigodGhyZWFkKSA9PiB0aHJlYWQuc2VsZWN0ZWQpO1xuICAgICAgdGhyZWFkcyA9IHRocmVhZHMuZmlsdGVyKCh0aHJlYWQpID0+ICFzZWxlY3RlZFRocmVhZHMuaW5jbHVkZXModGhyZWFkKSk7XG4gICAgfSBlbHNlIGlmICh0cmFzaExhYmVsSUQgfHwgdHJhc2hGb2xkZXJJRCkge1xuICAgICAgY29uc3QgZGVsZXRlVGhyZWFkc1Byb21pc2UgPSBbXTtcbiAgICAgIGZvciAoY29uc3QgdGhyZWFkIG9mIHRocmVhZHMuZmlsdGVyKCh0aHJlYWQpID0+IHRocmVhZC5zZWxlY3RlZCkpIHtcbiAgICAgICAgZGVsZXRlVGhyZWFkc1Byb21pc2UucHVzaChkZWxldGVUaHJlYWQoPGFueT57IGRldGFpbDogeyB0aHJlYWQgfSB9KSk7XG4gICAgICB9XG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChkZWxldGVUaHJlYWRzUHJvbWlzZSk7XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQoXCJvbkRlbGV0ZVNlbGVjdGVkXCIsIHtcbiAgICAgIGV2ZW50LFxuICAgICAgZGVsZXRlZFRocmVhZHM6IGN1cnJlbnRseVNlbGVjdGVkVGhyZWFkXG4gICAgICAgID8gW2N1cnJlbnRseVNlbGVjdGVkVGhyZWFkXVxuICAgICAgICA6IHRocmVhZHMsXG4gICAgfSk7XG4gICAgZGVsZXRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJldHVyblRvTWFpbGJveCgpIHtcbiAgICBpZiAoY3VycmVudGx5U2VsZWN0ZWRUaHJlYWQpIHtcbiAgICAgIGN1cnJlbnRseVNlbGVjdGVkVGhyZWFkLmV4cGFuZGVkID0gZmFsc2U7XG4gICAgICBjdXJyZW50bHlTZWxlY3RlZFRocmVhZCA9IG51bGw7XG4gICAgfVxuICB9XG4gIC8vI2VuZHJlZ2lvbiBhY3Rpb25zXG5cbiAgLy8jcmVnaW9uIHBhZ2luYXRpb25cbiAgYXN5bmMgZnVuY3Rpb24gY2hhbmdlUGFnZShldmVudDogQ3VzdG9tRXZlbnQpIHtcbiAgICBsb2FkaW5nID0gdHJ1ZTtcblxuICAgIGN1cnJlbnRQYWdlID0gZXZlbnQuZGV0YWlsLm5ld1BhZ2U7XG5cbiAgICBzZWFyY2hDdXJzb3IgPSBfdGhpcy5pdGVtc19wZXJfcGFnZSAqIGN1cnJlbnRQYWdlO1xuXG4gICAgYXdhaXQgdXBkYXRlRGlzcGxheWVkVGhyZWFkcygpO1xuXG4gICAgbG9hZGluZyA9IGZhbHNlO1xuICB9XG4gIC8vI2VuZHJlZ2lvbiBwYWdpbmF0aW9uXG5cbiAgYXN5bmMgZnVuY3Rpb24gZGlzcGF0Y2hEcmFmdFRocmVhZENsaWNrZWQoZXZlbnQ6IEN1c3RvbUV2ZW50KSB7XG4gICAgY29uc3QgeyB0aHJlYWQgfSA9IGV2ZW50LmRldGFpbDtcbiAgICBjb25zdCBtZXNzYWdlID0gZXZlbnQuZGV0YWlsLm1lc3NhZ2UgPz8gdGhyZWFkLmRyYWZ0c1swXTtcblxuICAgIGlmIChtZXNzYWdlLmNpZHM/Lmxlbmd0aCkge1xuICAgICAgY29uc3QgaW5saW5lTWVzc2FnZSA9IGF3YWl0IGdldE1lc3NhZ2VXaXRoSW5saW5lRmlsZXMobWVzc2FnZSk7XG4gICAgICBtZXNzYWdlLmJvZHkgPSBpbmxpbmVNZXNzYWdlLmJvZHk7XG4gICAgfVxuICAgIGRyYWZ0TWVzc2FnZVVwZGF0ZShtZXNzYWdlKTtcblxuICAgIGNvbnN0IHZhbHVlID0ge1xuICAgICAgdG86IG1lc3NhZ2UudG8sXG4gICAgICBjYzogbWVzc2FnZS5jYyxcbiAgICAgIGJjYzogbWVzc2FnZS5iY2MsXG4gICAgICBmcm9tOiBtZXNzYWdlLmZyb20sXG4gICAgICBzdWJqZWN0OiBtZXNzYWdlLnN1YmplY3QsXG4gICAgICBib2R5OiBtZXNzYWdlLmJvZHksXG4gICAgfTtcbiAgICBkaXNwYXRjaEV2ZW50KFwiZHJhZnRUaHJlYWRDbGlja2VkXCIsIHtcbiAgICAgIGV2ZW50LFxuICAgICAgbWVzc2FnZSxcbiAgICAgIHRocmVhZCxcbiAgICAgIHZhbHVlLFxuICAgIH0pO1xuXG4gICAgLy9EZXByZWNhdGVkOiBETyBOT1QgVVNFIGRyYWZ0VGhyZWFkRXZlbnRcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBcImRyYWZ0VGhyZWFkRXZlbnQgaXMgRGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHN0YWJsZSByZWxlYXNlOyBQbGVhc2UgdXNlIGRyYWZ0VGhyZWFkQ2xpY2tlZCBpbnN0ZWFkXCIsXG4gICAgKTtcbiAgICBkaXNwYXRjaEV2ZW50KFwiZHJhZnRUaHJlYWRFdmVudFwiLCB7XG4gICAgICB3YXJuaW5nOlxuICAgICAgICBcImRyYWZ0VGhyZWFkRXZlbnQgaXMgRGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHN0YWJsZSByZWxlYXNlOyBQbGVhc2UgdXNlIGRyYWZ0VGhyZWFkQ2xpY2tlZCBpbnN0ZWFkLlwiLFxuICAgICAgZXZlbnQsXG4gICAgICBtZXNzYWdlLFxuICAgICAgdGhyZWFkLFxuICAgICAgdmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBsZXQgdGhlbWVVcmw6IHN0cmluZztcbiAgJDogaWYgKCEhX3RoaXMudGhlbWUpIHtcbiAgICBpZiAoX3RoaXMudGhlbWUuc3RhcnRzV2l0aChcIi5cIikgfHwgX3RoaXMudGhlbWUuc3RhcnRzV2l0aChcImh0dHBcIikpIHtcbiAgICAgIC8vIElmIGN1c3RvbSB1cmwgc3VwcGxpZWRcbiAgICAgIHRoZW1lVXJsID0gX3RoaXMudGhlbWU7XG4gICAgfSBlbHNlIGlmIChfdGhpcy50aGVtZSkge1xuICAgICAgdGhlbWVVcmwgPSBgaHR0cHM6Ly91bnBrZy5jb20vQG55bGFzL2NvbXBvbmVudHMtbWFpbGJveEAke3BrZy52ZXJzaW9ufS90aGVtZXMvJHtfdGhpcy50aGVtZX0uY3NzYDtcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbiAgQHVzZSBcInNhc3M6bGlzdFwiO1xuICBAaW1wb3J0IFwiLi4vLi4vdGhlbWluZy9yZXNldC5zY3NzXCI7XG4gIEBpbXBvcnQgXCIuLi8uLi90aGVtaW5nL2FuaW1hdGlvbi5zY3NzXCI7XG4gIEBpbXBvcnQgXCIuLi8uLi90aGVtaW5nL3ZhcmlhYmxlcy5zY3NzXCI7XG4gIEBpbXBvcnQgXCIuLi8uLi8uLi9jb21tb25zL3NyYy9jb21wb25lbnRzL2NoZWNrYm94LnNjc3NcIjtcbiAgQGltcG9ydCBcIi4vc3R5bGVzL21vZGFsLnNjc3NcIjtcblxuICAkc3BhY2luZy1zOiAwLjVyZW07XG4gICRzcGFjaW5nLW06IDFyZW07XG5cbiAgQGluY2x1ZGUgbW9kYWwtc3R5bGVzO1xuXG4gIG1haW4ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XG4gICAgZm9udC1mYW1pbHk6IHZhcihcbiAgICAgIC0tbnlsYXMtbWFpbGJveC1mb250LWZhbWlseSxcbiAgICAgIC1hcHBsZS1zeXN0ZW0sXG4gICAgICBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgICBzYW5zLXNlcmlmXG4gICAgKTtcblxuICAgICRvdXRsaW5lLXN0eWxlOiAxcHggc29saWRcbiAgICAgIHZhcigtLW55bGFzLW1haWxib3gtYm9yZGVyLWNvbG9yLCB2YXIoLS1ncmV5LWxpZ2h0ZXIpKTtcbiAgICBAbWl4aW4gYmFyU3R5bGUge1xuICAgICAgYm9yZGVyOiAkb3V0bGluZS1zdHlsZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogMjRweCAxNnB4O1xuICAgICAgZ2FwOiA4cHg7XG4gICAgfVxuXG4gICAgJi5lbXB0eSB7XG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDY4cHggMzMuNXB4IG1pbm1heChhdXRvLCBjYWxjKDEwMHZoIC0gMTE3LjVweCkpOyAvKiogaGVhZGVyLCB0b29sYmFyLCBlbXB0eSBtYWlsYm94ICgxMDB2aCkgbWludXMgaGVhZGVyLCB0b29sYmFyIGFuZCBwYWRkaW5nICoqL1xuICAgICAgdWwge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGVhZGVyIHtcbiAgICAgIEBpbmNsdWRlIGJhclN0eWxlO1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ueWxhcy1tYWlsYm94LWhlYWRlci1iYWNrZ3JvdW5kLCB3aGl0ZSk7XG4gICAgICBjb2xvcjogdmFyKC0tbnlsYXMtZW1haWwtc3ViamVjdC1jb2xvciwgYmxhY2spO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgZmlsbDogdmFyKC0tbnlsYXMtZW1haWwtc3ViamVjdC1jb2xvciwgYmxhY2spO1xuICAgICAgICAgICYucmVmcmVzaGluZyB7XG4gICAgICAgICAgICBhbmltYXRpb246IHJvdGF0ZSAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIFtyb2xlPVwidG9vbGJhclwiXSB7XG4gICAgICBAaW5jbHVkZSBiYXJTdHlsZTtcbiAgICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkXG4gICAgICAgIHZhcigtLW55bGFzLW1haWxib3gtYm9yZGVyLWNvbG9yLCB2YXIoLS1ncmV5LWxpZ2h0ZXIpKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLW55bGFzLW1haWxib3gtdG9vbGJhci1iYWNrZ3JvdW5kLCB3aGl0ZSk7XG4gICAgICBwYWRkaW5nOiAkc3BhY2luZy1zICRzcGFjaW5nLW07XG4gICAgICBnYXA6ICRzcGFjaW5nLW07XG4gICAgICBtaW4taGVpZ2h0OiAyNHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuICAgICAgLnRocmVhZC1jaGVja2JveCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgICZbZGlzYWJsZWRdIHN2ZyB7XG4gICAgICAgICAgZmlsbDogdmFyKC0tZ3JleSk7XG4gICAgICAgIH1cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICBmaWxsOiB2YXIoLS1ueWxhcy1lbWFpbC1hY3Rpb24taWNvbnMtY29sb3IsIHZhcigtLWdyZXktZGFyaykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVG9nZ2xlIHNlbGVjdC1hbGwgY2hlY2tib3ggYW5kIHRocmVhZCBjaGVja2JveCBmcm9tIENTUyBWYXJcbiAgICAudGhyZWFkLWNoZWNrYm94IHtcbiAgICAgIGlucHV0IHtcbiAgICAgICAgQGluY2x1ZGUgY2hlY2tib3g7XG4gICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBkaXYuc3RhcnJlZCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXFwyNjA1XCI7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1ueWxhcy1lbWFpbC1zdGFyLWJ1dHRvbi1kaXNhYmxlZC1jb2xvciwgdmFyKC0tZ3JleSkpO1xuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bm90KFtkaXNhYmxlZF0pOmJlZm9yZSxcbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tbnlsYXMtZW1haWwtc3Rhci1idXR0b24taW5hY3RpdmUtY29sb3IsICM4ZDk0YTUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpub3QoW2Rpc2FibGVkXSkuc3RhcnJlZDpiZWZvcmUge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1ueWxhcy1lbWFpbC1zdGFyLWJ1dHRvbi1hY3RpdmUtY29sb3IsICNmZmMxMDcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgI21haWxib3hsaXN0IGxpIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgLmNoZWNrYm94LWNvbnRhaW5lci50aHJlYWQtY2hlY2tib3gge1xuICAgICAgICBwYWRkaW5nOiAxcmVtIDAgMCAxcmVtO1xuICAgICAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIDBcbiAgICAgICAgICAgIHZhcigtLW55bGFzLW1haWxib3gtaG92ZXItc2hhZG93LWNvbG9yLCB2YXIoLS1ncmV5LXdhcm0pKSxcbiAgICAgICAgICBpbnNldCAtMXB4IDAgMCB2YXIoLS1ueWxhcy1tYWlsYm94LWhvdmVyLXNoYWRvdy1jb2xvciwgdmFyKC0tZ3JleS13YXJtKSksXG4gICAgICAgICAgMCAxcHggMnB4IDAgcmdiKDQ0IDQ2IDQ2IC8gMjAlKSwgMCAxcHggM3B4IDFweCByZ2IoNDQgNDYgNDYgLyA1JSk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbnlsYXMtbWFpbGJveC1ob3Zlci1zaGFkb3ctY29sb3IsIHZhcigtLWdyZXktd2FybSkpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICB9XG5cbiAgICAgIC8vICNyZWdpb24gZGVmaW5lIGJvcmRlciBzdHlsZXNcbiAgICAgIC0tbnlsYXMtZW1haWwtYm9yZGVyLXN0eWxlOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXItdG9wOiAwLjVweCBzb2xpZFxuICAgICAgICB2YXIoXG4gICAgICAgICAgLS1ueWxhcy1tYWlsYm94LXZlcnRpY2FsLWJvcmRlci1jb2xvcixcbiAgICAgICAgICB2YXIoLS1ueWxhcy1tYWlsYm94LWJvcmRlci1jb2xvciwgdmFyKC0tZ3JleS1saWdodGVyKSlcbiAgICAgICAgKTtcbiAgICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkXG4gICAgICAgIHZhcihcbiAgICAgICAgICAtLW55bGFzLW1haWxib3gtdmVydGljYWwtYm9yZGVyLWNvbG9yLFxuICAgICAgICAgIHZhcigtLW55bGFzLW1haWxib3gtYm9yZGVyLWNvbG9yLCB2YXIoLS1ncmV5LWxpZ2h0ZXIpKVxuICAgICAgICApO1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZFxuICAgICAgICB2YXIoXG4gICAgICAgICAgLS1ueWxhcy1tYWlsYm94LWhvcml6b250YWwtYm9yZGVyLWNvbG9yLFxuICAgICAgICAgIHZhcigtLW55bGFzLW1haWxib3gtYm9yZGVyLWNvbG9yLCB2YXIoLS1ncmV5LWxpZ2h0ZXIpKVxuICAgICAgICApO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWRcbiAgICAgICAgdmFyKFxuICAgICAgICAgIC0tbnlsYXMtbWFpbGJveC1ob3Jpem9udGFsLWJvcmRlci1jb2xvcixcbiAgICAgICAgICB2YXIoLS1ueWxhcy1tYWlsYm94LWJvcmRlci1jb2xvciwgdmFyKC0tZ3JleS1saWdodGVyKSlcbiAgICAgICAgKTtcblxuICAgICAgLy8gI2VuZHJlZ2lvbiBkZWZpbmUgYm9yZGVyIHN0eWxlc1xuXG4gICAgICAvLyAjcmVnaW9uIGRlZmluZSBiYWNrZ3JvdW5kIHN0eWxlc1xuICAgICAgLy8gLS1ueWxhcy1lbWFpbC1ib3JkZXItbGVmdC13aWR0aDogMHB4O1xuICAgICAgLS1ueWxhcy1lbWFpbC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIC0tbnlsYXMtZW1haWwtdW5yZWFkLWJhY2tncm91bmQ6ICNmZmY7XG5cbiAgICAgICY6bm90KC51bnJlYWQpIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbnlsYXMtbWFpbGJveC1yZWFkLWJhY2tncm91bmQsIHZhcigtLWdyZXktbGlnaHRlc3QpKTtcbiAgICAgIH1cbiAgICAgICYudW5yZWFkIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbnlsYXMtbWFpbGJveC11bnJlYWQtYmFja2dyb3VuZCwgd2hpdGUpO1xuICAgICAgfVxuICAgICAgJi5uby1tZXNzYWdlcyB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyZXktbGlnaHRlcik7XG4gICAgICAgIC50aHJlYWQtY2hlY2tib3gge1xuICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyZXktZGFyay13YXJtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vICNlbmRyZWdpb24gZGVmaW5lIGJhY2tncm91bmQgc3R5bGVzXG5cbiAgICAgIC8vICNyZWdpb24gZGVmaW5lIGNoZWNrZWQgc3R5bGVzXG4gICAgICAmLmNoZWNrZWQge1xuICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkXG4gICAgICAgICAgdmFyKC0tbnlsYXMtbWFpbGJveC1jaGVja2VkLWJvcmRlci1jb2xvciwgdmFyKC0tYmx1ZSkpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ueWxhcy1tYWlsYm94LWNoZWNrZWQtYmctY29sb3IsIHZhcigtLWJsdWUtbGlnaHRlcikpO1xuXG4gICAgICAgIC5jaGVja2JveC1jb250YWluZXIudGhyZWFkLWNoZWNrYm94IHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vICNlbmRyZWdpb24gZGVmaW5lIGNoZWNrZWQgc3R5bGVzXG4gICAgfVxuICB9XG5cbiAgdWwge1xuICAgICY6OmJlZm9yZSB7XG4gICAgICB6LWluZGV4OiAxO1xuICAgIH1cbiAgICAmLmRlbGV0aW5nLFxuICAgICYucmVmcmVzaGluZyB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgJi5yZWZyZXNoaW5nIHtcbiAgICAgIEBpbmNsdWRlIHByb2dyZXNzLWJhcih0b3AsIDAsIGxlZnQsIDAsIHZhcigtLWJsdWUpLCB2YXIoLS1ibHVlLWxpZ2h0ZXIpKTtcbiAgICB9XG4gICAgJi5kZWxldGluZyB7XG4gICAgICBAaW5jbHVkZSBwcm9ncmVzcy1iYXIodG9wLCAwLCBsZWZ0LCAwLCB2YXIoLS1yZWQpLCB2YXIoLS1yZWQtbGlnaHRlcikpO1xuICAgIH1cbiAgfVxuXG4gIC5jaGVja2JveC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDRweDtcbiAgfVxuXG4gIC5tYWlsYm94LWVtcHR5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLm1haWxib3gtbG9hZGVyLFxuICAubWFpbGJveC1lbXB0eSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgcm90YXRlIHtcbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAjeyRkZXNrdG9wfSB7XG4gICAgbWFpbiB7XG4gICAgICAjbWFpbGJveGxpc3QgbGkge1xuICAgICAgICAuY2hlY2tib3gtY29udGFpbmVyLnRocmVhZC1jaGVja2JveCB7XG4gICAgICAgICAgcGFkZGluZzogMC42cmVtIDAgMCAkc3BhY2luZy1tO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWluLWhlaWdodDogMnJlbTtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGRpdi5zdGFycmVkIHtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAmOmhvdmVyOmJlZm9yZSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbnlsYXMtZW1haWwtc3Rhci1idXR0b24tYWN0aXZlLWNvbG9yLCAjZmZjMTA3KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc3R5bGU+XG5cbnsjaWYgdGhlbWVVcmx9XG4gIDxsaW5rXG4gICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgaHJlZj17dGhlbWVVcmx9XG4gICAgb246bG9hZD17KCkgPT4gKHRoZW1lTG9hZGVkID0gdHJ1ZSl9XG4gICAgb246ZXJyb3I9eygpID0+ICh0aGVtZUxvYWRlZCA9IHRydWUpfSAvPlxuey9pZn1cbjxtYWluXG4gIGNsYXNzPVwibnlsYXMtbWFpbGJveFwiXG4gIGRhdGEtY3k9XCJueWxhcy1tYWlsYm94XCJcbiAgY2xhc3M6bG9hZGluZz17IWhhc0NvbXBvbmVudExvYWRlZH1cbiAgY2xhc3M6ZW1wdHk9eyF0aHJlYWRzPy5sZW5ndGggJiYgaGFzQ29tcG9uZW50TG9hZGVkfT5cbiAgeyNpZiBoYXNDb21wb25lbnRMb2FkZWR9XG4gICAgeyNpZiBjdXJyZW50bHlTZWxlY3RlZFRocmVhZH1cbiAgICAgIDxkaXYgY2xhc3M9XCJlbWFpbC1jb250YWluZXJcIj5cbiAgICAgICAgPG55bGFzLWVtYWlsXG4gICAgICAgICAgY2xlYW5fY29udmVyc2F0aW9uPXtmYWxzZX1cbiAgICAgICAgICB0aHJlYWQ9e2N1cnJlbnRseVNlbGVjdGVkVGhyZWFkfVxuICAgICAgICAgIHt5b3V9XG4gICAgICAgICAgc2hvd19zdGFyPXtfdGhpcy5zaG93X3N0YXJ9XG4gICAgICAgICAgY2xpY2tfYWN0aW9uPVwibWFpbGJveFwiXG4gICAgICAgICAgc2hvd19yZXBseT17X3RoaXMuc2hvd19yZXBseX1cbiAgICAgICAgICBzaG93X3JlcGx5X2FsbD17X3RoaXMuc2hvd19yZXBseV9hbGx9XG4gICAgICAgICAgc2hvd19mb3J3YXJkPXtfdGhpcy5zaG93X2ZvcndhcmR9XG4gICAgICAgICAgdGhlbWU9e3RoZW1lVXJsfVxuICAgICAgICAgIG9uOm1lc3NhZ2VDbGlja2VkPXttZXNzYWdlQ2xpY2tlZH1cbiAgICAgICAgICBvbjpkcmFmdENsaWNrZWR8c3RvcFByb3BhZ2F0aW9uPXtoYW5kbGVFbWFpbERyYWZ0T3BlbmVkfVxuICAgICAgICAgIG9uOmZvcndhcmRDbGlja2VkfHN0b3BQcm9wYWdhdGlvbj17aGFuZGxlRW1haWxEcmFmdE9wZW5lZH1cbiAgICAgICAgICBvbjpyZXBseUNsaWNrZWR8c3RvcFByb3BhZ2F0aW9uPXtoYW5kbGVFbWFpbERyYWZ0T3BlbmVkfVxuICAgICAgICAgIG9uOnJlcGx5QWxsQ2xpY2tlZHxzdG9wUHJvcGFnYXRpb249e2hhbmRsZUVtYWlsRHJhZnRPcGVuZWR9XG4gICAgICAgICAgb246dGhyZWFkU3RhcnJlZD17dGhyZWFkU3RhcnJlZH1cbiAgICAgICAgICBvbjpyZXR1cm5Ub01haWxib3g9e3JldHVyblRvTWFpbGJveH1cbiAgICAgICAgICBvbjp0b2dnbGVUaHJlYWRVbnJlYWRTdGF0dXM9e3RvZ2dsZVRocmVhZFVucmVhZFN0YXR1c31cbiAgICAgICAgICBvbjp0aHJlYWREZWxldGVkPXtzaG93Q29uZmlybURlbGV0ZU1vZGFsfVxuICAgICAgICAgIG9uOmRvd25sb2FkQ2xpY2tlZD17ZG93bmxvYWRTZWxlY3RlZEZpbGV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICB7OmVsc2V9XG4gICAgICB7I2lmIF90aGlzLmhlYWRlcn1cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8YnV0dG9uIG9uOmNsaWNrPXtyZWZyZXNoQ2xpY2tlZH0+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuICAgICAgICAgICAgICBjbGFzczpyZWZyZXNoaW5nPXtsb2FkaW5nfT5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTkuNDE3NTcgMC43ODA5NzlMOS41NzQ3MSAwLjAwNzgyNzczQzEyLjkzODggMC43MTc4ODcgMTUuNDYxNyAzLjgwNjQ4IDE1LjQ2MTcgNy40OTk1NEMxNS40NjE3IDguNzkzNSAxNS4xNTE5IDEwLjAxMzYgMTQuNjA0NiAxMS4wODNMMTYgMTIuNDU4TDExLjY5OTQgMTMuNzExM0wxMi43ODQ2IDkuMjg5NTFMMTQuMDIwOCAxMC41MDc3QzE0LjQ0NzMgOS42MDAwOSAxNC42ODY5IDguNTc5NSAxNC42ODY5IDcuNDk5NTRDMTQuNjg2OSA0LjE3NzQyIDEyLjQxODggMS40MTQ0NCA5LjQxNzU3IDAuNzgwOTc5Wk0wIDIuOTA0NjlMNC4yNDI0MSAxLjQ2MDEzTDMuMzQ4OSA1LjkyNjI1TDIuMDYxMTggNC43NjQ0QzEuNzEwNzkgNS42MDE3NSAxLjUxNjI3IDYuNTI2NSAxLjUxNjI3IDcuNDk5NTRDMS41MTYyNyAxMC44MjE3IDMuNzg0NCAxMy41ODQ3IDYuNzg1NjMgMTQuMjE4Mkw2LjYyODQ5IDE0Ljk5MTNDMy4yNjQzNyAxNC4yODEyIDAuNzQxNTI0IDExLjE5MjYgMC43NDE1MjQgNy40OTk1NEMwLjc0MTUyNCA2LjMyNTA2IDAuOTk2NzUxIDUuMjExMzMgMS40NTMyMyA0LjIxNTg3TDAgMi45MDQ2OVpcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGgxPntoZWFkZXJ9PC9oMT5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICB7L2lmfVxuICAgICAgeyNpZiBfdGhpcy5zaG93X3RocmVhZF9jaGVja2JveCAmJiBfdGhpcy5hY3Rpb25zX2Jhci5sZW5ndGh9XG4gICAgICAgIDxkaXZcbiAgICAgICAgICByb2xlPVwidG9vbGJhclwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIkJ1bGsgYWN0aW9uc1wiXG4gICAgICAgICAgYXJpYS1jb250cm9scz1cIm1haWxib3hsaXN0XCI+XG4gICAgICAgICAgeyNpZiBfdGhpcy5hY3Rpb25zX2Jhci5pbmNsdWRlcyhNYWlsYm94QWN0aW9ucy5TRUxFQ1RBTEwpfVxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRocmVhZC1jaGVja2JveFwiPlxuICAgICAgICAgICAgICB7I2VhY2ggW2FyZUFsbFNlbGVjdGVkID8gXCJEZXNlbGVjdCBhbGxcIiA6IFwiU2VsZWN0IGFsbFwiXSBhcyBzZWxlY3RBbGxUaXRsZX1cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtzZWxlY3RBbGxUaXRsZX1cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3NlbGVjdEFsbFRpdGxlfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2FyZUFsbFNlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgb246Y2xpY2s9e29uU2VsZWN0QWxsfSAvPlxuICAgICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7L2lmfVxuICAgICAgICAgIHsjaWYgdGhyZWFkcy5maWx0ZXIoKHRocmVhZCkgPT4gdGhyZWFkLnNlbGVjdGVkKS5sZW5ndGh9XG4gICAgICAgICAgICB7I2lmIF90aGlzLmFjdGlvbnNfYmFyLmluY2x1ZGVzKE1haWxib3hBY3Rpb25zLkRFTEVURSl9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWxldGVcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIkRlbGV0ZSBzZWxlY3RlZCBlbWFpbChzKVwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRocmVhZHMuZmlsdGVyKCh0aHJlYWQpID0+IHRocmVhZC5zZWxlY3RlZCkubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRlbGV0ZSBzZWxlY3RlZCBlbWFpbChzKVwiXG4gICAgICAgICAgICAgICAgICBvbjpjbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NvbmZpcm1EZWxldGVNb2RhbChlLCBcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgICAgfX0+PFRyYXNoSWNvbiAvPjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICB7I2lmIF90aGlzLnNob3dfc3RhciAmJiBfdGhpcy5hY3Rpb25zX2Jhci5pbmNsdWRlcyhNYWlsYm94QWN0aW9ucy5TVEFSKX1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXJyZWRcIj5cbiAgICAgICAgICAgICAgICB7I2VhY2ggW2FyZUFsbFNlbGVjdGVkU3RhcnJlZCA/IFwiVW5zdGFyIHNlbGVjdGVkIGVtYWlsKHMpXCIgOiBcIlN0YXIgc2VsZWN0ZWQgZW1haWwocylcIl0gYXMgc3RhckFsbFRpdGxlfVxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzcz17YXJlQWxsU2VsZWN0ZWRTdGFycmVkID8gXCJzdGFycmVkXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17c3RhckFsbFRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtzdGFyQWxsVGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJzd2l0Y2hcIlxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRocmVhZHMuZmlsdGVyKCh0aHJlYWQpID0+IHRocmVhZC5zZWxlY3RlZClcbiAgICAgICAgICAgICAgICAgICAgICAubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWNoZWNrZWQ9e2FyZUFsbFNlbGVjdGVkU3RhcnJlZH1cbiAgICAgICAgICAgICAgICAgICAgb246Y2xpY2s9eyhlKSA9PiBvblN0YXJTZWxlY3RlZChlKX0gLz5cbiAgICAgICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgIHsjaWYgX3RoaXMuYWN0aW9uc19iYXIuaW5jbHVkZXMoTWFpbGJveEFjdGlvbnMuVU5SRUFEKX1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlYWQtc3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgeyNpZiAhYXJlQWxsU2VsZWN0ZWRSZWFkfVxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBkYXRhLWN5PVwibWFyay1yZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJNYXJrIHNlbGVjdGVkIGVtYWlsKHMpIGFzIHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRocmVhZHMuZmlsdGVyKCh0aHJlYWQpID0+IHRocmVhZC5zZWxlY3RlZClcbiAgICAgICAgICAgICAgICAgICAgICAubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTWFyayBzZWxlY3RlZCBlbWFpbChzKSBhcyByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgb246Y2xpY2s9eyhlKSA9PiBvbkNoYW5nZVNlbGVjdGVkUmVhZFN0YXR1cyhlKX0+XG4gICAgICAgICAgICAgICAgICAgIDxNYXJrUmVhZEljb24gLz5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgZGF0YS1jeT1cIm1hcmstdW5yZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJNYXJrIHNlbGVjdGVkIGVtYWlsKHMpIGFzIHVucmVhZFwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJNYXJrIHNlbGVjdGVkIGVtYWlsKHMpIGFzIHVucmVhZFwiXG4gICAgICAgICAgICAgICAgICAgIG9uOmNsaWNrPXsoZSkgPT4gb25DaGFuZ2VTZWxlY3RlZFJlYWRTdGF0dXMoZSl9PlxuICAgICAgICAgICAgICAgICAgICA8TWFya1VucmVhZEljb24gLz5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICB7L2lmfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIHsvaWZ9XG4gICAgICA8dWwgaWQ9XCJtYWlsYm94bGlzdFwiIGNsYXNzOnJlZnJlc2hpbmc9e2xvYWRpbmd9IGNsYXNzOmRlbGV0aW5nPlxuICAgICAgICB7I2VhY2ggdGhyZWFkcyBhcyB0aHJlYWR9XG4gICAgICAgICAgeyNlYWNoIFt0aHJlYWQuc2VsZWN0ZWQgPyBgRGVzZWxlY3QgdGhyZWFkICR7dGhyZWFkLnN1YmplY3R9YCA6IGBTZWxlY3QgdGhyZWFkICR7dGhyZWFkLnN1YmplY3R9YF0gYXMgc2VsZWN0VGl0bGV9XG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgY2xhc3M6dW5yZWFkPXt0aHJlYWQudW5yZWFkfVxuICAgICAgICAgICAgICBjbGFzczpjaGVja2VkPXt0aHJlYWQuc2VsZWN0ZWR9XG4gICAgICAgICAgICAgIGNsYXNzOm5vLW1lc3NhZ2VzPXt0aHJlYWQgJiZcbiAgICAgICAgICAgICAgICB0aHJlYWQ/Lm1lc3NhZ2VzICYmXG4gICAgICAgICAgICAgICAgdGhyZWFkPy5tZXNzYWdlcz8ubGVuZ3RoIDw9IDAgJiZcbiAgICAgICAgICAgICAgICAhdGhyZWFkPy5kcmFmdHM/Lmxlbmd0aH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveC1jb250YWluZXIgdGhyZWFkLWNoZWNrYm94XCI+XG4gICAgICAgICAgICAgICAgeyNpZiBfdGhpcy5zaG93X3RocmVhZF9jaGVja2JveH1cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17c2VsZWN0VGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3NlbGVjdFRpdGxlfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aHJlYWQuc2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aHJlYWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICB0aHJlYWQ/Lm1lc3NhZ2VzICYmXG4gICAgICAgICAgICAgICAgICAgICAgdGhyZWFkPy5tZXNzYWdlcz8ubGVuZ3RoIDw9IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAhdGhyZWFkPy5kcmFmdHM/Lmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgb246Y2xpY2s9eyhlKSA9PiBvblNlbGVjdE9uZShlLCB0aHJlYWQpfSAvPlxuICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW1haWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgeyNrZXkgdGhyZWFkLmlkfVxuICAgICAgICAgICAgICAgICAgPG55bGFzLWVtYWlsXG4gICAgICAgICAgICAgICAgICAgIGNsZWFuX2NvbnZlcnNhdGlvbj17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIHt0aHJlYWR9XG4gICAgICAgICAgICAgICAgICAgIHt5b3V9XG4gICAgICAgICAgICAgICAgICAgIHNob3dfc3Rhcj17X3RoaXMuc2hvd19zdGFyfVxuICAgICAgICAgICAgICAgICAgICBjbGlja19hY3Rpb249XCJtYWlsYm94XCJcbiAgICAgICAgICAgICAgICAgICAgc2hvd19yZXBseT17X3RoaXMuc2hvd19yZXBseX1cbiAgICAgICAgICAgICAgICAgICAgc2hvd19yZXBseV9hbGw9e190aGlzLnNob3dfcmVwbHlfYWxsfVxuICAgICAgICAgICAgICAgICAgICBzaG93X2ZvcndhcmQ9e190aGlzLnNob3dfZm9yd2FyZH1cbiAgICAgICAgICAgICAgICAgICAgdGhlbWU9e3RoZW1lVXJsfVxuICAgICAgICAgICAgICAgICAgICBvbjp0aHJlYWRDbGlja2VkPXt0aHJlYWRDbGlja2VkfVxuICAgICAgICAgICAgICAgICAgICBvbjptZXNzYWdlQ2xpY2tlZD17bWVzc2FnZUNsaWNrZWR9XG4gICAgICAgICAgICAgICAgICAgIG9uOmRyYWZ0Q2xpY2tlZHxzdG9wUHJvcGFnYXRpb249e2hhbmRsZUVtYWlsRHJhZnRPcGVuZWR9XG4gICAgICAgICAgICAgICAgICAgIG9uOmZvcndhcmRDbGlja2VkfHN0b3BQcm9wYWdhdGlvbj17aGFuZGxlRW1haWxEcmFmdE9wZW5lZH1cbiAgICAgICAgICAgICAgICAgICAgb246cmVwbHlDbGlja2VkfHN0b3BQcm9wYWdhdGlvbj17aGFuZGxlRW1haWxEcmFmdE9wZW5lZH1cbiAgICAgICAgICAgICAgICAgICAgb246cmVwbHlBbGxDbGlja2VkfHN0b3BQcm9wYWdhdGlvbj17aGFuZGxlRW1haWxEcmFmdE9wZW5lZH1cbiAgICAgICAgICAgICAgICAgICAgb246dGhyZWFkU3RhcnJlZD17dGhyZWFkU3RhcnJlZH1cbiAgICAgICAgICAgICAgICAgICAgb246cmV0dXJuVG9NYWlsYm94PXtyZXR1cm5Ub01haWxib3h9XG4gICAgICAgICAgICAgICAgICAgIG9uOnRvZ2dsZVRocmVhZFVucmVhZFN0YXR1cz17dG9nZ2xlVGhyZWFkVW5yZWFkU3RhdHVzfVxuICAgICAgICAgICAgICAgICAgICBvbjp0aHJlYWREZWxldGVkPXtzaG93Q29uZmlybURlbGV0ZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICBvbjpkb3dubG9hZENsaWNrZWQ9e2Rvd25sb2FkU2VsZWN0ZWRGaWxlfVxuICAgICAgICAgICAgICAgICAgICBzaG93X3RocmVhZF9hY3Rpb25zPXt0aHJlYWQuc2VsZWN0ZWR9IC8+XG4gICAgICAgICAgICAgICAgey9rZXl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbGJveC1lbXB0eVwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHsjaWYgX3RoaXMuaGVhZGVyfVxuICAgICAgICAgICAgICAgIHtoZWFkZXJ9XG4gICAgICAgICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICAgICAgICBZb3VyIE1haWxib3hcbiAgICAgICAgICAgICAgey9pZn0gaXMgZW1wdHkhXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvZWFjaH1cbiAgICAgICAgeyNpZiB0aHJlYWRzICYmIHRocmVhZHMubGVuZ3RoID4gMH1cbiAgICAgICAgICA8cGFnaW5hdGlvbi1uYXZcbiAgICAgICAgICAgIGN1cnJlbnRfcGFnZT17Y3VycmVudFBhZ2V9XG4gICAgICAgICAgICBpdGVtc19wZXJfcGFnZT17X3RoaXMuaXRlbXNfcGVyX3BhZ2V9XG4gICAgICAgICAgICBudW1fcGFnZXM9e251bVBhZ2VzfVxuICAgICAgICAgICAgbnVtX2l0ZW1zPXtudW1UaHJlYWRzfVxuICAgICAgICAgICAgdmlzaWJsZT17dHJ1ZX1cbiAgICAgICAgICAgIG51bV9wYWdlc192aXNpYmxlPXshX3RoaXMua2V5d29yZF90b19zZWFyY2h9XG4gICAgICAgICAgICBvbjpjaGFuZ2VQYWdlPXtjaGFuZ2VQYWdlfSAvPlxuICAgICAgICB7L2lmfVxuICAgICAgPC91bD5cbiAgICB7L2lmfVxuICB7OmVsc2V9XG4gICAgPGRpdiBjbGFzcz1cIm1haWxib3gtbG9hZGVyXCI+XG4gICAgICA8TG9hZGluZ0ljb25cbiAgICAgICAgY2xhc3M9XCJzcGlubmVyXCJcbiAgICAgICAgc3R5bGU9XCJoZWlnaHQ6MThweDsgYW5pbWF0aW9uOiByb3RhdGUgMnMgbGluZWFyIGluZmluaXRlOyBtYXJnaW46MTBweDtcIiAvPlxuICAgICAgPHA+TG9hZGluZy4uLjwvcD5cbiAgICA8L2Rpdj5cbiAgey9pZn1cbjwvbWFpbj5cblxueyNpZiBjb25maXJtRGVsZXRlTW9kYWwuaXNPcGVufVxuICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiIG9uOmNsaWNrPXsoKSA9PiAoY29uZmlybURlbGV0ZU1vZGFsLmlzT3BlbiA9IGZhbHNlKX0+XG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsXCI+XG4gICAgICB7I2F3YWl0IHRocmVhZHMuZmlsdGVyKCh0aHJlYWQpID0+IHRocmVhZC5zZWxlY3RlZCkubGVuZ3RoID4gMSB0aGVuIGlzRGVsZXRpbmdNdWx0aXBsZUVtYWlsc31cbiAgICAgICAgPGgzIGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICB7YEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhlIHNlbGVjdGVkIGVtYWlsJHtcbiAgICAgICAgICAgIGlzRGVsZXRpbmdNdWx0aXBsZUVtYWlscyA/IFwic1wiIDogXCJcIlxuICAgICAgICAgIH0/YH1cbiAgICAgICAgPC9oMz5cbiAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIHtgT25jZSBkZWxldGVkLCAke1xuICAgICAgICAgICAgaXNEZWxldGluZ011bHRpcGxlRW1haWxzID8gXCJ0aGVzZSBlbWFpbHNcIiA6IFwidGhpcyBlbWFpbFwiXG4gICAgICAgICAgfSBjYW4gb25seSBiZSByZWNvdmVyZWQgZnJvbSB5b3VyIG5hdGl2ZSBlbWFpbFxuICAgICAgICBjbGllbnQuYH1cbiAgICAgICAgPC9wPlxuICAgICAgey9hd2FpdH1cbiAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRhbmdlclwiIG9uOmNsaWNrPXtjb25maXJtRGVsZXRlQ2xpY2tIYW5kbGVyfT5cbiAgICAgICAgICBDb25maXJtXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3M9XCJjYW5jZWxcIlxuICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiAoY29uZmlybURlbGV0ZU1vZGFsLmlzT3BlbiA9IGZhbHNlKX0+XG4gICAgICAgICAgQ2FuY2VsXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2Plxuey9pZn1cbiJdLCJuYW1lcyI6WyJpbml0aWFsaXplIiwiX19zcHJlYWRQcm9wcyIsIl9fc3ByZWFkVmFsdWVzIiwiY3JlYXRlX2lmX2Jsb2NrXzEiLCJjcmVhdGVfaWZfYmxvY2tfMiIsImNyZWF0ZV9pZl9ibG9jayIsInRoaXMiLCJET01QdXJpZnkuc2FuaXRpemUiLCJEcm9wZG93blN5bWJvbCIsImNyZWF0ZV9pZl9ibG9ja18zIiwiY3JlYXRlX2lmX2Jsb2NrXzYiLCJjcmVhdGVfaWZfYmxvY2tfOSIsImNyZWF0ZV9pZl9ibG9ja18xMCIsImNyZWF0ZV9pZl9ibG9ja18xMSIsImNyZWF0ZV9pZl9ibG9ja183IiwiY3JlYXRlX2lmX2Jsb2NrXzgiLCJjcmVhdGVfaWZfYmxvY2tfMTIiLCJjcmVhdGVfaWZfYmxvY2tfNSIsImNyZWF0ZV9pZl9ibG9ja180Il0sIm1hcHBpbmdzIjoiME9BQU8sS0FBTSxJQUFpQixPQUFPLGVBQWUsT0FBTyxLQUN6RCxPQUFPLGdCQUVULE9BQU8sZUFBZSxPQUFTLENBQUMsS0FBaUIsSUFBUyxDQUNwRCxHQUFBLGdCQUFlLElBQUksR0FHaEIsTUFBQSxJQUFlLEVBQU0sR0FBRyxJQ1BqQyxZQUFnQixFQUVoQixZQUFnQixFQUFLLEVBQUssQ0FFdEIsU0FBVyxLQUFLLEdBQ1osRUFBSSxHQUFLLEVBQUksR0FDakIsTUFBTyxHQUVYLFlBQW9CLEVBQU8sQ0FDdkIsTUFBTyxJQUFTLE1BQU8sSUFBVSxVQUFZLE1BQU8sR0FBTSxNQUFTLFdBT3ZFLFlBQWEsRUFBSSxDQUNiLE1BQU8sS0FFWCxhQUF3QixDQUNwQixNQUFPLFFBQU8sT0FBTyxNQUV6QixZQUFpQixFQUFLLENBQ2xCLEVBQUksUUFBUSxJQUVoQixZQUFxQixFQUFPLENBQ3hCLE1BQU8sT0FBTyxJQUFVLFdBRTVCLFlBQXdCLEVBQUcsRUFBRyxDQUMxQixNQUFPLElBQUssRUFBSSxHQUFLLEVBQUksSUFBTSxHQUFPLEdBQUssTUFBTyxJQUFNLFVBQWEsTUFBTyxJQUFNLFdBRXRGLEdBQUksSUFDSixZQUF1QixFQUFhLEVBQUssQ0FDckMsTUFBSyxLQUNELElBQXVCLFNBQVMsY0FBYyxNQUVsRCxHQUFxQixLQUFPLEVBQ3JCLElBQWdCLEdBQXFCLEtBRWhELFlBQW1CLEVBQUcsRUFBRyxDQUNyQixNQUFPLElBQUssRUFBSSxHQUFLLEVBQUks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
