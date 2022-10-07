(function (dn, k) {
  typeof exports == "object" && typeof module != "undefined"
    ? (module.exports = k())
    : typeof define == "function" && define.amd
    ? define(k)
    : ((dn = typeof globalThis != "undefined" ? globalThis : dn || self),
      (dn.app = k()));
})(this, function () {
  "use strict";
  const dn = window.customElements.define.bind(window.customElements);
  window.customElements.define = (n, ...e) => {
    if (!customElements.get(n)) return dn(n, ...e);
  };
  function k() {}
  function fe(n, e) {
    for (const t in e) n[t] = e[t];
    return n;
  }
  function Ga(n) {
    return n && typeof n == "object" && typeof n.then == "function";
  }
  function ei(n) {
    return n();
  }
  function gi() {
    return Object.create(null);
  }
  function at(n) {
    n.forEach(ei);
  }
  function ti(n) {
    return typeof n == "function";
  }
  function Ze(n, e) {
    return n != n
      ? e == e
      : n !== e || (n && typeof n == "object") || typeof n == "function";
  }
  let Rn;
  function vi(n, e) {
    return (
      Rn || (Rn = document.createElement("a")), (Rn.href = e), n === Rn.href
    );
  }
  function Va(n, e) {
    return n != n ? e == e : n !== e;
  }
  function bi(n) {
    return Object.keys(n).length === 0;
  }
  function wi(n, ...e) {
    if (n == null) return k;
    const t = n.subscribe(...e);
    return t.unsubscribe ? () => t.unsubscribe() : t;
  }
  function fn(n, e, t) {
    n.$$.on_destroy.push(wi(e, t));
  }
  function Ce(n) {
    const e = {};
    for (const t in n) t[0] !== "$" && (e[t] = n[t]);
    return e;
  }
  let In = !1;
  function Wa() {
    In = !0;
  }
  function Ja() {
    In = !1;
  }
  function xa(n, e, t, i) {
    for (; n < e; ) {
      const r = n + ((e - n) >> 1);
      t(r) <= i ? (n = r + 1) : (e = r);
    }
    return n;
  }
  function Ya(n) {
    if (n.hydrate_init) return;
    n.hydrate_init = !0;
    let e = n.childNodes;
    if (n.nodeName === "HEAD") {
      const o = [];
      for (let c = 0; c < e.length; c++) {
        const d = e[c];
        d.claim_order !== void 0 && o.push(d);
      }
      e = o;
    }
    const t = new Int32Array(e.length + 1),
      i = new Int32Array(e.length);
    t[0] = -1;
    let r = 0;
    for (let o = 0; o < e.length; o++) {
      const c = e[o].claim_order,
        d =
          (r > 0 && e[t[r]].claim_order <= c
            ? r + 1
            : xa(1, r, (w) => e[t[w]].claim_order, c)) - 1;
      i[o] = t[d] + 1;
      const h = d + 1;
      (t[h] = o), (r = Math.max(h, r));
    }
    const l = [],
      a = [];
    let s = e.length - 1;
    for (let o = t[r] + 1; o != 0; o = i[o - 1]) {
      for (l.push(e[o - 1]); s >= o; s--) a.push(e[s]);
      s--;
    }
    for (; s >= 0; s--) a.push(e[s]);
    l.reverse(), a.sort((o, c) => o.claim_order - c.claim_order);
    for (let o = 0, c = 0; o < a.length; o++) {
      for (; c < l.length && a[o].claim_order >= l[c].claim_order; ) c++;
      const d = c < l.length ? l[c] : null;
      n.insertBefore(a[o], d);
    }
  }
  function b(n, e) {
    n.appendChild(e);
  }
  function ge(n, e) {
    if (In) {
      for (
        Ya(n),
          (n.actual_end_child === void 0 ||
            (n.actual_end_child !== null &&
              n.actual_end_child.parentElement !== n)) &&
            (n.actual_end_child = n.firstChild);
        n.actual_end_child !== null &&
        n.actual_end_child.claim_order === void 0;

      )
        n.actual_end_child = n.actual_end_child.nextSibling;
      e !== n.actual_end_child
        ? (e.claim_order !== void 0 || e.parentNode !== n) &&
          n.insertBefore(e, n.actual_end_child)
        : (n.actual_end_child = e.nextSibling);
    } else (e.parentNode !== n || e.nextSibling !== null) && n.appendChild(e);
  }
  function p(n, e, t) {
    n.insertBefore(e, t || null);
  }
  function ct(n, e, t) {
    In && !t
      ? ge(n, e)
      : (e.parentNode !== n || e.nextSibling != t) &&
        n.insertBefore(e, t || null);
  }
  function m(n) {
    n.parentNode.removeChild(n);
  }
  function wt(n, e) {
    for (let t = 0; t < n.length; t += 1) n[t] && n[t].d(e);
  }
  function v(n) {
    return document.createElement(n);
  }
  function ne(n) {
    return document.createElementNS("http://www.w3.org/2000/svg", n);
  }
  function Z(n) {
    return document.createTextNode(n);
  }
  function x() {
    return Z(" ");
  }
  function Me() {
    return Z("");
  }
  function he(n, e, t, i) {
    return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
  }
  function Za(n) {
    return function (e) {
      return e.preventDefault(), n.call(this, e);
    };
  }
  function Ke(n) {
    return function (e) {
      return e.stopPropagation(), n.call(this, e);
    };
  }
  function f(n, e, t) {
    t == null
      ? n.removeAttribute(e)
      : n.getAttribute(e) !== t && n.setAttribute(e, t);
  }
  function De(n, e) {
    for (const t in e) f(n, t, e[t]);
  }
  function U(n, e, t) {
    e in n
      ? (n[e] = typeof n[e] == "boolean" && t === "" ? !0 : t)
      : f(n, e, t);
  }
  function ie(n) {
    return Array.from(n.childNodes);
  }
  function Ka(n) {
    n.claim_info === void 0 &&
      (n.claim_info = { last_index: 0, total_claimed: 0 });
  }
  function Xa(n, e, t, i, r = !1) {
    Ka(n);
    const l = (() => {
      for (let a = n.claim_info.last_index; a < n.length; a++) {
        const s = n[a];
        if (e(s)) {
          const o = t(s);
          return (
            o === void 0 ? n.splice(a, 1) : (n[a] = o),
            r || (n.claim_info.last_index = a),
            s
          );
        }
      }
      for (let a = n.claim_info.last_index - 1; a >= 0; a--) {
        const s = n[a];
        if (e(s)) {
          const o = t(s);
          return (
            o === void 0 ? n.splice(a, 1) : (n[a] = o),
            r
              ? o === void 0 && n.claim_info.last_index--
              : (n.claim_info.last_index = a),
            s
          );
        }
      }
      return i();
    })();
    return (
      (l.claim_order = n.claim_info.total_claimed),
      (n.claim_info.total_claimed += 1),
      l
    );
  }
  function Qa(n, e, t, i) {
    return Xa(
      n,
      (r) => r.nodeName === e,
      (r) => {
        const l = [];
        for (let a = 0; a < r.attributes.length; a++) {
          const s = r.attributes[a];
          t[s.name] || l.push(s.name);
        }
        l.forEach((a) => r.removeAttribute(a));
      },
      () => i(e),
    );
  }
  function re(n, e, t) {
    return Qa(n, e, t, ne);
  }
  function ue(n, e) {
    (e = "" + e), n.wholeText !== e && (n.data = e);
  }
  function xt(n, e, t, i) {
    t === null
      ? n.style.removeProperty(e)
      : n.style.setProperty(e, t, i ? "important" : "");
  }
  function Ae(n, e, t) {
    n.classList[t ? "add" : "remove"](e);
  }
  class ni {
    constructor() {
      this.e = this.n = null;
    }
    c(e) {
      this.h(e);
    }
    m(e, t, i = null) {
      this.e || ((this.e = v(t.nodeName)), (this.t = t), this.c(e)), this.i(i);
    }
    h(e) {
      (this.e.innerHTML = e), (this.n = Array.from(this.e.childNodes));
    }
    i(e) {
      for (let t = 0; t < this.n.length; t += 1) p(this.t, this.n[t], e);
    }
    p(e) {
      this.d(), this.h(e), this.i(this.a);
    }
    d() {
      this.n.forEach(m);
    }
  }
  function un(n) {
    const e = {};
    for (const t of n) e[t.name] = t.value;
    return e;
  }
  let mn;
  function Tt(n) {
    mn = n;
  }
  function Yt() {
    if (!mn)
      throw new Error("Function called outside component initialization");
    return mn;
  }
  function $a(n) {
    Yt().$$.before_update.push(n);
  }
  function yi(n) {
    Yt().$$.on_mount.push(n);
  }
  const _n = [],
    hn = [],
    jn = [],
    ki = [],
    Ei = Promise.resolve();
  let ii = !1;
  function Ti() {
    ii || ((ii = !0), Ei.then(de));
  }
  function qa() {
    return Ti(), Ei;
  }
  function ri(n) {
    jn.push(n);
  }
  const ai = new Set();
  let Fn = 0;
  function de() {
    const n = mn;
    do {
      for (; Fn < _n.length; ) {
        const e = _n[Fn];
        Fn++, Tt(e), el(e.$$);
      }
      for (Tt(null), _n.length = 0, Fn = 0; hn.length; ) hn.pop()();
      for (let e = 0; e < jn.length; e += 1) {
        const t = jn[e];
        ai.has(t) || (ai.add(t), t());
      }
      jn.length = 0;
    } while (_n.length);
    for (; ki.length; ) ki.pop()();
    (ii = !1), ai.clear(), Tt(n);
  }
  function el(n) {
    if (n.fragment !== null) {
      n.update(), at(n.before_update);
      const e = n.dirty;
      (n.dirty = [-1]),
        n.fragment && n.fragment.p(n.ctx, e),
        n.after_update.forEach(ri);
    }
  }
  const Un = new Set();
  let Ft;
  function ke() {
    Ft = { r: 0, c: [], p: Ft };
  }
  function Ee() {
    Ft.r || at(Ft.c), (Ft = Ft.p);
  }
  function C(n, e) {
    n && n.i && (Un.delete(n), n.i(e));
  }
  function j(n, e, t, i) {
    if (n && n.o) {
      if (Un.has(n)) return;
      Un.add(n),
        Ft.c.push(() => {
          Un.delete(n), i && (t && n.d(1), i());
        }),
        n.o(e);
    }
  }
  function dt(n, e) {
    const t = (e.token = {});
    function i(r, l, a, s) {
      if (e.token !== t) return;
      e.resolved = s;
      let o = e.ctx;
      a !== void 0 && ((o = o.slice()), (o[a] = s));
      const c = r && (e.current = r)(o);
      let d = !1;
      e.block &&
        (e.blocks
          ? e.blocks.forEach((h, w) => {
              w !== l &&
                h &&
                (ke(),
                j(h, 1, 1, () => {
                  e.blocks[w] === h && (e.blocks[w] = null);
                }),
                Ee());
            })
          : e.block.d(1),
        c.c(),
        C(c, 1),
        c.m(e.mount(), e.anchor),
        (d = !0)),
        (e.block = c),
        e.blocks && (e.blocks[l] = c),
        d && de();
    }
    if (Ga(n)) {
      const r = Yt();
      if (
        (n.then(
          (l) => {
            Tt(r), i(e.then, 1, e.value, l), Tt(null);
          },
          (l) => {
            if ((Tt(r), i(e.catch, 2, e.error, l), Tt(null), !e.hasCatch))
              throw l;
          },
        ),
        e.current !== e.pending)
      )
        return i(e.pending, 0), !0;
    } else {
      if (e.current !== e.then) return i(e.then, 1, e.value, n), !0;
      e.resolved = n;
    }
  }
  function Zt(n, e, t) {
    const i = e.slice(),
      { resolved: r } = n;
    n.current === n.then && (i[n.value] = r),
      n.current === n.catch && (i[n.error] = r),
      n.block.p(i, t);
  }
  function ft(n, e) {
    const t = {},
      i = {},
      r = { $$scope: 1 };
    let l = n.length;
    for (; l--; ) {
      const a = n[l],
        s = e[l];
      if (s) {
        for (const o in a) o in s || (i[o] = 1);
        for (const o in s) r[o] || ((t[o] = s[o]), (r[o] = 1));
        n[l] = s;
      } else for (const o in a) r[o] = 1;
    }
    for (const a in i) a in t || (t[a] = void 0);
    return t;
  }
  function ze(n) {
    n && n.c();
  }
  function Fe(n, e, t, i) {
    const { fragment: r, on_mount: l, on_destroy: a, after_update: s } = n.$$;
    r && r.m(e, t),
      i ||
        ri(() => {
          const o = l.map(ei).filter(ti);
          a ? a.push(...o) : at(o), (n.$$.on_mount = []);
        }),
      s.forEach(ri);
  }
  function Ie(n, e) {
    const t = n.$$;
    t.fragment !== null &&
      (at(t.on_destroy),
      t.fragment && t.fragment.d(e),
      (t.on_destroy = t.fragment = null),
      (t.ctx = []));
  }
  function tl(n, e) {
    n.$$.dirty[0] === -1 && (_n.push(n), Ti(), n.$$.dirty.fill(0)),
      (n.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
  }
  function Xe(n, e, t, i, r, l, a, s = [-1]) {
    const o = mn;
    Tt(n);
    const c = (n.$$ = {
      fragment: null,
      ctx: null,
      props: l,
      update: k,
      not_equal: r,
      bound: gi(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(e.context || (o ? o.$$.context : [])),
      callbacks: gi(),
      dirty: s,
      skip_bound: !1,
      root: e.target || o.$$.root,
    });
    a && a(c.root);
    let d = !1;
    if (
      ((c.ctx = t
        ? t(n, e.props || {}, (h, w, ...O) => {
            const y = O.length ? O[0] : w;
            return (
              c.ctx &&
                r(c.ctx[h], (c.ctx[h] = y)) &&
                (!c.skip_bound && c.bound[h] && c.bound[h](y), d && tl(n, h)),
              w
            );
          })
        : []),
      c.update(),
      (d = !0),
      at(c.before_update),
      (c.fragment = i ? i(c.ctx) : !1),
      e.target)
    ) {
      if (e.hydrate) {
        Wa();
        const h = ie(e.target);
        c.fragment && c.fragment.l(h), h.forEach(m);
      } else c.fragment && c.fragment.c();
      e.intro && C(n.$$.fragment),
        Fe(n, e.target, e.anchor, e.customElement),
        Ja(),
        de();
    }
    Tt(o);
  }
  let Kt;
  typeof HTMLElement == "function" &&
    (Kt = class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        const { on_mount: n } = this.$$;
        this.$$.on_disconnect = n.map(ei).filter(ti);
        for (const e in this.$$.slotted) this.appendChild(this.$$.slotted[e]);
      }
      attributeChangedCallback(n, e, t) {
        this[n] = t;
      }
      disconnectedCallback() {
        at(this.$$.on_disconnect);
      }
      $destroy() {
        Ie(this, 1), (this.$destroy = k);
      }
      $on(n, e) {
        const t = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
        return (
          t.push(e),
          () => {
            const i = t.indexOf(e);
            i !== -1 && t.splice(i, 1);
          }
        );
      }
      $set(n) {
        this.$$set &&
          !bi(n) &&
          ((this.$$.skip_bound = !0), this.$$set(n), (this.$$.skip_bound = !1));
      }
    });
  class ut {
    $destroy() {
      Ie(this, 1), (this.$destroy = k);
    }
    $on(e, t) {
      const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
      return (
        i.push(t),
        () => {
          const r = i.indexOf(t);
          r !== -1 && i.splice(r, 1);
        }
      );
    }
    $set(e) {
      this.$$set &&
        !bi(e) &&
        ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
    }
  }
  const Xt = [];
  function nl(n, e) {
    return { subscribe: ht(n, e).subscribe };
  }
  function ht(n, e = k) {
    let t;
    const i = new Set();
    function r(s) {
      if (Ze(n, s) && ((n = s), t)) {
        const o = !Xt.length;
        for (const c of i) c[1](), Xt.push(c, n);
        if (o) {
          for (let c = 0; c < Xt.length; c += 2) Xt[c][0](Xt[c + 1]);
          Xt.length = 0;
        }
      }
    }
    function l(s) {
      r(s(n));
    }
    function a(s, o = k) {
      const c = [s, o];
      return (
        i.add(c),
        i.size === 1 && (t = e(r) || k),
        s(n),
        () => {
          i.delete(c), i.size === 0 && (t(), (t = null));
        }
      );
    }
    return { set: r, update: l, subscribe: a };
  }
  function il(n, e, t) {
    const i = !Array.isArray(n),
      r = i ? [n] : n,
      l = e.length < 2;
    return nl(t, (a) => {
      let s = !1;
      const o = [];
      let c = 0,
        d = k;
      const h = () => {
          if (c) return;
          d();
          const O = e(i ? o[0] : o, a);
          l ? a(O) : (d = ti(O) ? O : k);
        },
        w = r.map((O, y) =>
          wi(
            O,
            (L) => {
              (o[y] = L), (c &= ~(1 << y)), s && h();
            },
            () => {
              c |= 1 << y;
            },
          ),
        );
      return (
        (s = !0),
        h(),
        function () {
          at(w), d();
        }
      );
    });
  }
  function rl() {
    return ht({});
  }
  const li = rl();
  var al = Object.defineProperty,
    ll = Object.defineProperties,
    ol = Object.getOwnPropertyDescriptors,
    Ai = Object.getOwnPropertySymbols,
    sl = Object.prototype.hasOwnProperty,
    cl = Object.prototype.propertyIsEnumerable,
    Oi = (n, e, t) =>
      e in n
        ? al(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (n[e] = t),
    dl = (n, e) => {
      for (var t in e || (e = {})) sl.call(e, t) && Oi(n, t, e[t]);
      if (Ai) for (var t of Ai(e)) cl.call(e, t) && Oi(n, t, e[t]);
      return n;
    },
    fl = (n, e) => ll(n, ol(e));
  async function Be(n) {
    var e;
    if (!n.ok) {
      const t = await n.json().then((l) => l),
        i =
          ((e = t == null ? void 0 : t.response) == null ? void 0 : e.error) ||
          (t == null ? void 0 : t.message),
        r = new Error(i);
      return (
        (r.name = t.name), Promise.reject({ message: r, statusCode: n.status })
      );
    }
    return n.json();
  }
  function Ge(n = { component_id: "" }) {
    return {
      method: n.method || "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Component-Id": n.component_id || "",
        "X-Access-Token": n.access_token || "",
      },
      body: n.body ? JSON.stringify(n.body) : void 0,
    };
  }
  function We(n, e) {
    throw (console.error(e), li.update((t) => fl(dl({}, t), { [n]: e })), e);
  }
  const Si = { "001": "", "002": "ireland-", "003": "canada-" };
  function Ve(n) {
    let e = "";
    if (n.substring(3, 4) === "-") {
      const i = n.substring(0, 3);
      typeof Si[i] != "undefined" && (e = Si[i]);
    }
    return `https://${e}web-components.nylas.com/middleware`;
  }
  function Nt(n) {}
  function ul(n) {
    return Object.keys(n)
      .reduce(
        (e, t) => (n[t] !== void 0 && e.append(t, n[t]), e),
        new URLSearchParams(),
      )
      .toString();
  }
  const ml = async (n, e) => {
      const t = `${Ve(n.component_id)}/contact-list/contacts?${ul(e)}`,
        i = await fetch(
          t,
          Ge({ component_id: n.component_id, access_token: n.access_token }),
        )
          .then((r) => Be(r))
          .then((r) => r.response)
          .catch((r) => We(n.component_id, r));
      return i != null ? i : [];
    },
    _l = async (n) => {
      const e = await fetch(
        `${Ve(n.component_id)}/contacts${n.query}`,
        Ge({ component_id: n.component_id, access_token: n.access_token }),
      )
        .then((t) => Be(t))
        .then((t) => t.response)
        .catch((t) => We(n.component_id, t));
      return e != null ? e : [];
    },
    hl = async (n, e) =>
      await fetch(
        `${Ve(n.component_id)}/contacts/${e}/picture`,
        Ge({ component_id: n.component_id, access_token: n.access_token }),
      )
        .then((t) => Be(t))
        .then((t) => t.response)
        .catch((t) => We(n.component_id, t));
  var pl = Object.defineProperty,
    gl = Object.defineProperties,
    vl = Object.getOwnPropertyDescriptors,
    Ci = Object.getOwnPropertySymbols,
    bl = Object.prototype.hasOwnProperty,
    wl = Object.prototype.propertyIsEnumerable,
    Ni = (n, e, t) =>
      e in n
        ? pl(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (n[e] = t),
    Li = (n, e) => {
      for (var t in e || (e = {})) bl.call(e, t) && Ni(n, t, e[t]);
      if (Ci) for (var t of Ci(e)) wl.call(e, t) && Ni(n, t, e[t]);
      return n;
    },
    Mi = (n, e) => gl(n, vl(e));
  const Di = (n, e, t) => {
    if (n.thread_ids) {
      const r = n.thread_ids.slice(t, t + e);
      return Promise.all(
        r.map(async (l) => {
          const a = `${Ve(n.component_id)}/threads/${l}?view=expanded`;
          return await fetch(a, Ge(n))
            .then((s) => Be(s))
            .then((s) => s.response)
            .then((s) =>
              Mi(Li({}, s), {
                messages: s.messages.filter(
                  (o) => o.from.length !== 0 || o.to.length !== 0,
                ),
              }),
            )
            .catch((s) => We(n.component_id, s));
        }),
      );
    }
    let i = `${Ve(
      n.component_id,
    )}/threads?view=expanded&not_in=trash&limit=${e}&offset=${t}`;
    return (
      n.query &&
        Object.entries(n.query).forEach(
          (r) => (i = i.concat(`&${r[0]}=${r[1]}`)),
        ),
      fetch(i, Ge(n))
        .then((r) => Be(r))
        .then((r) => r.response)
        .then((r) =>
          r.map((l) =>
            Mi(Li({}, l), {
              messages: l.messages.filter(
                (a) => a.from.length !== 0 || a.to.length !== 0,
              ),
            }),
          ),
        )
        .catch((r) => We(n.component_id, r))
    );
  };
  function Pi(n) {
    let e = `${Ve(
      n.component_id,
    )}/threads?view=expanded&not_in=trash&view=count`;
    return (
      n.query &&
        Object.entries(n.query).forEach(
          (t) => (e = e.concat(`&${t[0]}=${t[1]}`)),
        ),
      n.keywordToSearch && (e += `&q=${n.keywordToSearch}`),
      fetch(e, Ge(n))
        .then((t) => Be(t))
        .then((t) => t.response.count)
    );
  }
  const yl = (n) => {
      const e = `${Ve(n.component_id)}/threads/search?q=${
        n.keywordToSearch
      }&view=expanded&limit=${n.query.limit}&offset=${n.query.offset}`;
      return fetch(e, Ge(n))
        .then(async (t) => Be(t))
        .then((t) => t.response)
        .catch((t) => We(n.component_id, t));
    },
    kl = async (n) =>
      await fetch(
        `${Ve(n.component_id)}/threads/${n.thread_id}?view=expanded`,
        Ge({ component_id: n.component_id, access_token: n.access_token }),
      )
        .then((t) => Be(t))
        .then((t) => t.response)
        .catch((t) => We(n.component_id, t)),
    Ri = (n, e) =>
      fetch(
        `${Ve(n.component_id)}/threads/${e.id}`,
        Ge({
          method: "PUT",
          component_id: n.component_id,
          access_token: n.access_token,
          body: {
            unread: e.unread,
            starred: e.starred,
            folder_id: e.folder_id,
            label_ids: e.label_ids,
          },
        }),
      )
        .then((t) => Be(t))
        .then((t) => t.response)
        .catch((t) => We(n.component_id, t)),
    El = async (n, e) =>
      await fetch(`${Ve(n)}/manifest`, Ge({ access_token: e, component_id: n }))
        .then(Be)
        .then((t) => t.component.theming)
        .catch((t) => We(n, t));
  async function Tl(n, e, t) {
    const i = `${Ve(n)}/messages/${e.id}`,
      r = Ge({
        method: "PUT",
        component_id: n,
        access_token: t,
        body: { folder_id: e.folder_id, label_ids: e.label_ids },
      });
    return await fetch(i, r)
      .then((l) => Be(l))
      .then((l) => l.response)
      .catch((l) => We(n, l));
  }
  const Al = async (n, e) => {
      const t = `${Ve(n.component_id)}/messages/${e}`;
      return await fetch(t, Ge(n))
        .then((i) => Be(i))
        .then((i) => i.response)
        .catch((i) => We(n.component_id, i));
    },
    Ol = async (n) => {
      const e = `${Ve(n.component_id)}/messages/${n.message_id}`;
      return await fetch(e, Ge(n))
        .then((t) => Be(t))
        .then((t) => t.response)
        .catch((t) => We(n.component_id, t));
    },
    Sl = async (n) =>
      await fetch(`${Ve(n.component_id)}/account`, Ge(n))
        .then((t) => Be(t))
        .then((t) => t.response)
        .catch((t) => We(n.component_id, t)),
    Ii = (n) =>
      fetch(
        `${Ve(n.component_id)}/neural/conversation`,
        Ge({
          method: "PUT",
          access_token: n.access_token,
          component_id: n.component_id,
          body: { message_id: n.message_id },
        }),
      )
        .then(async (e) => (await Be(e)).response)
        .catch((e) => We(n.component_id, e));
  var Cl = Object.defineProperty,
    ji = Object.getOwnPropertySymbols,
    Nl = Object.prototype.hasOwnProperty,
    Ll = Object.prototype.propertyIsEnumerable,
    Fi = (n, e, t) =>
      e in n
        ? Cl(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (n[e] = t),
    Ui = (n, e) => {
      for (var t in e || (e = {})) Nl.call(e, t) && Fi(n, t, e[t]);
      if (ji) for (var t of ji(e)) Ll.call(e, t) && Fi(n, t, e[t]);
      return n;
    };
  const Ml = async (n) =>
      fetch(
        `${Ve(n.component_id)}/calendars/availability`,
        Ge({
          method: "POST",
          component_id: n.component_id,
          access_token: n.access_token,
          body: n.body,
        }),
      )
        .then(async (e) => {
          const t = await Be(e);
          return (
            (t.response.time_slots = t.response.time_slots.map(
              (i) => (
                (i.start_time = i.start || 0),
                (i.end_time = i.end || 0),
                delete i.start,
                delete i.end,
                i
              ),
            )),
            t.response
          );
        })
        .catch((e) => We(n.component_id, e)),
    Dl = async (n) =>
      fetch(
        `${Ve(n.component_id)}/calendars/availability/consecutive`,
        Ge({
          method: "POST",
          component_id: n.component_id,
          access_token: n.access_token,
          body: n.body,
        }),
      )
        .then(async (e) => {
          var t;
          const r =
              ((t = (await Be(e)).response) == null
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
            l = Pl(r, n.body.events);
          return Rl(l);
        })
        .catch((e) => We(n.component_id, e));
  function Pl(n, e) {
    return n.map((t) =>
      t.map((i) =>
        Ui(
          Ui({}, i),
          e.find(
            (r) =>
              r.participantEmails.length === i.emails.length &&
              r.participantEmails.every((l) => i.emails.includes(l)),
          ),
        ),
      ),
    );
  }
  function Rl(n) {
    const e = new Set();
    return n.filter((t) => {
      const i = `${t[0].start_time}_${t[t.length - 1].end_time}`;
      return e.has(i) ? !1 : (e.add(i), !0);
    });
  }
  var Il = Object.defineProperty,
    Hi = Object.getOwnPropertySymbols,
    jl = Object.prototype.hasOwnProperty,
    Fl = Object.prototype.propertyIsEnumerable,
    zi = (n, e, t) =>
      e in n
        ? Il(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (n[e] = t),
    Ul = (n, e) => {
      for (var t in e || (e = {})) jl.call(e, t) && zi(n, t, e[t]);
      if (Hi) for (var t of Hi(e)) Fl.call(e, t) && zi(n, t, e[t]);
      return n;
    };
  function Hl() {
    const n = (t, i) => {
        var r, l;
        const a = JSON.parse(i),
          s = Ul({}, a);
        if (
          (delete s.forceReload,
          (i = JSON.stringify(s)),
          !(
            !a.component_id ||
            !((r = a == null ? void 0 : a.body) == null
              ? void 0
              : r.start_time) ||
            !((l = a == null ? void 0 : a.body) == null ? void 0 : l.end_time)
          ))
        ) {
          if (!t[i] || a.forceReload) {
            const o = Ml(a);
            e.update((c) => ((c[i] = o), c)), (t[i] = o);
          }
          return t[i];
        }
      },
      e = ht(new Proxy({}, { get: n }));
    return e;
  }
  Hl();
  function zl() {
    const n = (t, i) => {
        var r, l;
        const a = JSON.parse(i);
        if (
          !(
            !a.component_id ||
            !((r = a == null ? void 0 : a.body) == null
              ? void 0
              : r.start_time) ||
            !((l = a == null ? void 0 : a.body) == null ? void 0 : l.end_time)
          )
        ) {
          if (!t[i]) {
            const s = Dl(a);
            e.update((o) => ((o[i] = s), o)), (t[i] = s);
          }
          return t[i];
        }
      },
      e = ht(new Proxy({}, { get: n }));
    return e;
  }
  zl();
  var Bl = Object.defineProperty,
    Bi = Object.getOwnPropertySymbols,
    Gl = Object.prototype.hasOwnProperty,
    Vl = Object.prototype.propertyIsEnumerable,
    Gi = (n, e, t) =>
      e in n
        ? Bl(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (n[e] = t),
    Vi = (n, e) => {
      for (var t in e || (e = {})) Gl.call(e, t) && Gi(n, t, e[t]);
      if (Bi) for (var t of Bi(e)) Vl.call(e, t) && Gi(n, t, e[t]);
      return n;
    };
  let lt = {};
  function Wi(n) {
    return n
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
  function Wl() {
    const { subscribe: n, set: e, update: t } = ht({});
    return {
      subscribe: n,
      addContacts: async (i, r) => {
        var l;
        const a = JSON.stringify(i);
        if (!lt[a] && (i.component_id || i.access_token)) {
          r.offset === 0 && oi.reset();
          const s =
            (l = await ml(i, r)
              .then((o) => Wi(o))
              .catch(() => [])) != null
              ? l
              : [];
          return (
            (lt[a] = lt[a] ? [...lt[a], ...s] : s),
            t((o) => ((o[a] = lt[a]), Vi({}, o))),
            lt[a]
          );
        }
      },
      addContact: async (i) => {
        var r;
        const l = JSON.stringify(i);
        if (!lt[l] && (i.component_id || i.access_token)) {
          const a =
            (r = await _l(i)
              .then((s) => Wi(s))
              .catch(() => [])) != null
              ? r
              : [];
          (lt[l] = lt[l] ? [...lt[l], ...a] : a),
            t((s) => ((s[l] = lt[l]), Vi({}, s)));
        }
        return lt[l];
      },
      reset: () => {
        (lt = {}), e({});
      },
    };
  }
  const oi = Wl(),
    si = {};
  function Jl() {
    const { subscribe: n, set: e } = ht({});
    return {
      subscribe: n,
      getContactAvatar: async (t, i, r = !1) => {
        if (!si[i] || r) {
          const l = await hl(t, i)
            .then((a) => a)
            .catch(() => "");
          l && (si[i] = l);
        }
        return si[i];
      },
      reset: () => e({}),
    };
  }
  const xl = Jl();
  var Yl = Object.defineProperty,
    Ji = Object.getOwnPropertySymbols,
    Zl = Object.prototype.hasOwnProperty,
    Kl = Object.prototype.propertyIsEnumerable,
    xi = (n, e, t) =>
      e in n
        ? Yl(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (n[e] = t),
    Ut = (n, e) => {
      for (var t in e || (e = {})) Zl.call(e, t) && xi(n, t, e[t]);
      if (Ji) for (var t of Ji(e)) Kl.call(e, t) && xi(n, t, e[t]);
      return n;
    };
  async function Yi(n) {
    const e = [];
    for (let t = 0; t < n; t++) e.push({ isLoaded: !1, threads: [] });
    return e;
  }
  function Xl() {
    const { subscribe: n, set: e, update: t } = ht({});
    let i = {},
      r;
    return {
      subscribe: n,
      set: e,
      getThreads: async (l, a, s, o = !1) => {
        const c = JSON.stringify(l);
        if (!l.component_id && !l.access_token) return [];
        if (r === void 0 || o) {
          const d = l.thread_ids ? l.thread_ids.length : await Pi(l).catch(Nt);
          d && (r = d);
        }
        if (!Array.isArray(i[c]) || o) {
          const d = Math.ceil(r / s);
          i[c] = await Yi(d);
        }
        if (typeof i[c][a] == "undefined") return [];
        if (!i[c][a].isLoaded) {
          const d = await Di(l, s, a * s).catch(Nt);
          d && ((i[c][a].threads = d), (i[c][a].isLoaded = !0));
        }
        return t((d) => ((d[c] = i[c]), Ut({}, d))), i[c][a].threads;
      },
      getNumberOfItems: async (l) => {
        if (!l.component_id && !l.access_token) return 0;
        if (typeof r == "undefined") {
          const a = await Pi(l).catch(Nt);
          a && (r = a);
        }
        return r;
      },
      getThreadsWithSearchKeyword: async (l, a = !1) => {
        if (!l.component_id && !l.access_token) return [];
        const s = JSON.stringify(l);
        if (
          ((!Array.isArray(i[s]) || a) && (i[s] = await Yi(1)),
          !i[s][0].isLoaded || a)
        ) {
          const o = await yl(l).catch(Nt);
          o && ((i[s][0].threads = o), (i[s][0].isLoaded = !0));
        }
        return t((o) => ((o[s] = i[s]), Ut({}, o))), i[s][0].threads;
      },
      updateThread: async (l, a, s, o, c) => {
        const d = await Ri(l, s).catch(Nt);
        if (!i[a][o].isLoaded) {
          const h = await Di(JSON.parse(a), c, o * c).catch(Nt);
          h && ((i[a][o].threads = h), (i[a][o].isLoaded = !0));
        }
        return (
          (i[a][o].threads = i[a][o].threads.map(
            (h) => (d && h.id === d.id && (h = Object.assign(h, d)), h),
          )),
          t((h) => ((h[a] = i[a]), Ut({}, h))),
          i[a][o].threads
        );
      },
      updateThreadSelection: (l, a, s) => {
        const o = i[l][a].threads;
        if (s) {
          const c = o.find((d) => d.id === s);
          c && (c.selected = !c.selected);
        } else {
          const c = o.some((d) => d.selected);
          for (const d of o) d.selected = !c;
        }
        return t((c) => ((c[l] = i[l]), Ut({}, c))), i[l][a].threads;
      },
      reset: () => {
        (i = {}), e({});
      },
      hydrateMessageInThread: (l, a, s) => {
        var o, c, d;
        const h = JSON.stringify(a),
          w =
            (c = (o = i[h][s]) == null ? void 0 : o.threads) == null
              ? void 0
              : c.find((O) => O.id === l.thread_id);
        if (w) {
          const O =
            (d = w.messages) == null ? void 0 : d.find((y) => y.id === l.id);
          O
            ? ((O.body = l.body),
              t((y) => {
                if (l.thread_id) {
                  let L = y[h][s].threads.find((R) => R.id === w.id);
                  L && (L = JSON.parse(JSON.stringify(w)));
                }
                return Ut({}, y);
              }))
            : t((y) => {
                if (l.thread_id) {
                  let L = y[h][s].threads.find((R) => R.id === w.id);
                  if (L) {
                    const R = w.messages;
                    R.push(l),
                      (w.messages = R),
                      (w.snippet = l.snippet),
                      (w.drafts = w.drafts.filter((E) => E.id !== l.id)),
                      (L = JSON.parse(JSON.stringify(w)));
                  }
                }
                return Ut({}, y);
              });
        }
        return i[h][s].threads;
      },
      hydrateDraftInThread: (l, a, s) => {
        var o, c, d;
        const h = JSON.stringify(a),
          w =
            (c = (o = i[h][s]) == null ? void 0 : o.threads) == null
              ? void 0
              : c.find((O) => O.id === l.thread_id);
        if (w) {
          const O =
            (d = w.drafts) == null ? void 0 : d.find((y) => y.id === l.id);
          if (l.thread_id) {
            if (O) Object.assign(O, l);
            else {
              const y = w.drafts;
              y.push(l), (w.drafts = y);
            }
            t((y) => {
              let L = y[h][s].threads.find((R) => R.id === w.id);
              return L && (L = JSON.parse(JSON.stringify(w))), Ut({}, y);
            });
          }
        }
        return i[h][s].threads;
      },
    };
  }
  const Ql = Xl(),
    $l = il(Ql, (n) => {
      const e = {};
      return (
        Object.entries(n).forEach(
          ([t, i]) => (e[t] = i.map((r) => r.threads).flat()),
        ),
        e
      );
    });
  function ql() {
    const n = (t, i) => {
        const r = JSON.parse(i);
        if (!!r.component_id) {
          if (!t[i]) {
            const l = El(r.component_id, r.access_token);
            e.update((a) => ((a[i] = l), a)), (t[i] = l);
          }
          return t[i];
        }
      },
      e = ht(new Proxy({}, { get: n }));
    return e;
  }
  const eo = ql(),
    Zi = async (n) => {
      let e = `${Ve(n.component_id)}/files/${n.file_id}/download`;
      return await fetch(e, Ge(n))
        .then((t) => Be(t))
        .then((t) => t.response)
        .catch((t) => We(n.component_id, t));
    },
    to = ["message/delivery-status", "message/rfc822"],
    Ki = [
      "image/png",
      "image/apng",
      "image/avif",
      "image/gif",
      "image/jpeg",
      "image/svg+xml",
    ];
  var no = Object.defineProperty,
    Xi = Object.getOwnPropertySymbols,
    io = Object.prototype.hasOwnProperty,
    ro = Object.prototype.propertyIsEnumerable,
    Qi = (n, e, t) =>
      e in n
        ? no(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (n[e] = t),
    ao = (n, e) => {
      for (var t in e || (e = {})) io.call(e, t) && Qi(n, t, e[t]);
      if (Xi) for (var t of Xi(e)) ro.call(e, t) && Qi(n, t, e[t]);
      return n;
    };
  function lo() {
    const { subscribe: n, set: e, update: t } = ht({}),
      i = {};
    return {
      subscribe: n,
      getFilesForMessage: async (r, l) => {
        if (!i[r.id]) {
          const a = {};
          for (const s of r.files.values())
            (s.content_disposition === "inline" ||
              (s.content_id && Ki.includes(s.content_type))) &&
              !a[s.id] &&
              ((a[s.id] = s),
              (a[s.id].data = await Zi({
                file_id: s.id,
                component_id: l.component_id,
                access_token: l.access_token,
              })));
          (i[r.id] = a), t((s) => ((s[r.id] = a), ao({}, s)));
        }
        return i[r.id];
      },
      hasInlineFiles: (r) => {
        var l;
        return (l = r == null ? void 0 : r.files) == null
          ? void 0
          : l.some(
              (a) =>
                a.content_disposition === "inline" ||
                (a.content_id && Ki.includes(a.content_type)),
            );
      },
      reset: () => e({}),
    };
  }
  const ci = lo();
  function di(n) {
    return (e, t) => {
      n.dispatchEvent &&
        n.dispatchEvent(new CustomEvent(e, { detail: t, composed: !0 }));
    };
  }
  function fi(n, e, t) {
    return new Proxy(n, {
      get: (i, r) =>
        r === "toString" || r === "toJSON"
          ? () => JSON.stringify(i)
          : Reflect.get(i, r) !== void 0
          ? $i(Reflect.get(i, r), t[r])
          : e && r in e
          ? $i(e[r], t[r])
          : t[r],
      ownKeys: (i) => {
        const r = new Set([
          ...Reflect.ownKeys(i),
          ...Object.keys(e),
          ...Object.keys(t),
        ]);
        return Array.from(r);
      },
      getOwnPropertyDescriptor: (i, r) => {
        var l, a;
        let s = Reflect.getOwnPropertyDescriptor(i, r);
        return (
          s ||
            ((s =
              (a =
                (l = e && Object.getOwnPropertyDescriptor(e, r)) != null
                  ? l
                  : t && Object.getOwnPropertyDescriptor(t, r)) != null
                ? a
                : { configurable: !0, enumerable: !0, writable: !0 }),
            Reflect.defineProperty(i, r, s)),
          s
        );
      },
    });
  }
  function $i(n, e) {
    if (n) {
      if (typeof e == "boolean") return oo(n);
      if (typeof e == "number") return Number(n);
      if (e instanceof Date) return new Date(n);
    }
    return n === void 0 ? (e != null ? e : null) : n;
  }
  function oo(n) {
    return [!0, "true", "1"].includes(n);
  }
  function so(n, e) {
    var t;
    const i = Uint8Array.from(atob(n), (s) => s.charCodeAt(0)),
      r = new Blob([i], { type: e.content_type }),
      l = window.URL.createObjectURL(r),
      a = document.createElement("a");
    (a.href = l),
      (a.download = (t = e.filename) != null ? t : e.id),
      (a.target = "_blank"),
      a.click(),
      a.remove();
  }
  function qi(n) {
    let e, t, i, r, l, a;
    function s(d, h) {
      if (d[2] === "HostDomainNotAllowedError") return fo;
      if (d[2] === "IncompatibleProperties") return co;
    }
    let o = s(n),
      c = o && o(n);
    return {
      c() {
        var d, h;
        (e = v("div")),
          c && c.c(),
          (t = x()),
          (i = v("span")),
          (i.textContent = "Debug info:"),
          (r = x()),
          (l = v("textarea")),
          f(i, "class", "details"),
          f(l, "class", "details"),
          (l.readOnly = !0),
          (l.value = a =
            `
      ` +
            n[2] +
            ": " +
            n[0] +
            `
      ` +
            ((h = (d = n[1].message) == null ? void 0 : d.message) != null
              ? h
              : "") +
            `
    `),
          f(e, "class", "message-container");
      },
      m(d, h) {
        p(d, e, h), c && c.m(e, null), b(e, t), b(e, i), b(e, r), b(e, l);
      },
      p(d, h) {
        var w, O;
        o === (o = s(d)) && c
          ? c.p(d, h)
          : (c && c.d(1), (c = o && o(d)), c && (c.c(), c.m(e, t))),
          h & 7 &&
            a !==
              (a =
                `
      ` +
                d[2] +
                ": " +
                d[0] +
                `
      ` +
                ((O = (w = d[1].message) == null ? void 0 : w.message) != null
                  ? O
                  : "") +
                `
    `) &&
            (l.value = a);
      },
      d(d) {
        d && m(e), c && c.d();
      },
    };
  }
  function co(n) {
    let e;
    return {
      c() {
        (e = v("h3")),
          (e.textContent =
            "Your component properties do not work with each other.");
      },
      m(t, i) {
        p(t, e, i);
      },
      p: k,
      d(t) {
        t && m(e);
      },
    };
  }
  function fo(n) {
    let e, t, i, r, l, a;
    return {
      c() {
        (e = v("h3")),
          (t = Z(`You are trying to access this component from\xA0
        `)),
          (i = v("code")),
          (i.textContent = `${window.location.hostname}`),
          (r = Z(`. The component's settings do not
        allow access from this domain.`)),
          (l = x()),
          (a = v("h4")),
          (a.innerHTML = `The list of allowed domains can be modified in your\xA0
        <a href="https://dashboard.nylas.com">Dashboard</a>.`);
      },
      m(s, o) {
        p(s, e, o), b(e, t), b(e, i), b(e, r), p(s, l, o), p(s, a, o);
      },
      p: k,
      d(s) {
        s && m(e), s && m(l), s && m(a);
      },
    };
  }
  function uo(n) {
    let e,
      t = n[2] && n[3] && qi(n);
    return {
      c() {
        t && t.c(), (e = Me()), (this.c = k);
      },
      m(i, r) {
        t && t.m(i, r), p(i, e, r);
      },
      p(i, [r]) {
        i[2] && i[3]
          ? t
            ? t.p(i, r)
            : ((t = qi(i)), t.c(), t.m(e.parentNode, e))
          : t && (t.d(1), (t = null));
      },
      i: k,
      o: k,
      d(i) {
        t && t.d(i), i && m(e);
      },
    };
  }
  function mo(n, e, t) {
    let i;
    fn(n, li, (w) => t(8, (i = w)));
    var r, l, a, s;
    let { id: o } = e,
      c,
      d;
    const h =
      window.location.href.includes("localhost") ||
      window.location.href.includes("127.0.0.1");
    return (
      (n.$$set = (w) => {
        "id" in w && t(0, (o = w.id));
      }),
      (n.$$.update = () => {
        n.$$.dirty & 499 &&
          (t(
            1,
            (c = t(4, (r = i[o])) !== null && r !== void 0 ? r : { name: "" }),
          ),
          t(
            2,
            (d =
              t(
                7,
                (s =
                  t(5, (l = c.name)) !== null && l !== void 0
                    ? l
                    : t(6, (a = c.message)) === null || a === void 0
                    ? void 0
                    : a.name),
              ) !== null && s !== void 0
                ? s
                : ""),
          ));
      }),
      [o, c, d, h, r, l, a, s, i]
    );
  }
  class _o extends Kt {
    constructor(e) {
      super();
      (this.shadowRoot.innerHTML = `<style>.message-container{background:#fff6f6;border-radius:5px;box-shadow:0 0 0 1px #aa92a0 inset, 0 0 0 0 transparent;color:#9f3a38;font-size:1.25rem;padding:10px;margin:0 auto;transition:opacity 500ms ease, color 500ms ease,
      background-color 500ms ease, box-shadow 500ms ease,
      -webkit-box-shadow 500ms ease}.message-container *:focus{outline:5px auto Highlight;outline:5px auto -webkit-focus-ring-color}.details{color:#494949;font-size:0.75rem;width:100%}</style>`),
        Xe(
          this,
          {
            target: this.shadowRoot,
            props: un(this.attributes),
            customElement: !0,
          },
          mo,
          uo,
          Va,
          { id: 0 },
          null,
        ),
        e &&
          (e.target && p(e.target, this, e.anchor),
          e.props && (this.$set(e.props), de()));
    }
    static get observedAttributes() {
      return ["id"];
    }
    get id() {
      return this.$$.ctx[0];
    }
    set id(e) {
      this.$$set({ id: e }), de();
    }
  }
  customElements.define("nylas-error", _o);
  function er(n, e, t) {
    return n ? e[t].some((i) => i.email.toLowerCase() === n.toLowerCase()) : !1;
  }
  function ho(n, e) {
    return [...e.from, ...e.to, ...e.cc, ...e.bcc].filter(
      (i) => !n.includes(i.email),
    );
  }
  function po({ myEmail: n, message: e, type: t }) {
    var i;
    let r = [],
      l = [];
    if (
      ((r = e.reply_to.filter((a) => a.email !== n)),
      r.length || (er(n, e, "from") ? (r = e.to) : (r = e.from)),
      t === "reply_all")
    ) {
      const a = (i = e.from) == null ? void 0 : i.map((s) => s.email);
      l = [...ho([...a, n], e)];
    }
    return { to: r, cc: l };
  }
  var go = Object.defineProperty,
    tr = Object.getOwnPropertySymbols,
    vo = Object.prototype.hasOwnProperty,
    bo = Object.prototype.propertyIsEnumerable,
    nr = (n, e, t) =>
      e in n
        ? go(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (n[e] = t),
    ir = (n, e) => {
      for (var t in e || (e = {})) vo.call(e, t) && nr(n, t, e[t]);
      if (tr) for (var t of tr(e)) bo.call(e, t) && nr(n, t, e[t]);
      return n;
    };
  function ui(n, e) {
    return n.map((t) => ir(ir({}, t), e));
  }
  function wo(n) {
    let e,
      t,
      i = [
        { width: "17" },
        { height: "16" },
        { viewBox: "0 0 17 16" },
        { fill: "none" },
        { xmlns: "http://www.w3.org/2000/svg" },
        n[0],
      ],
      r = {};
    for (let l = 0; l < i.length; l += 1) r = fe(r, i[l]);
    return {
      c() {
        (e = ne("svg")), (t = ne("path")), this.h();
      },
      l(l) {
        e = re(l, "svg", {
          width: !0,
          height: !0,
          viewBox: !0,
          fill: !0,
          xmlns: !0,
        });
        var a = ie(e);
        (t = re(a, "path", { d: !0, stroke: !0, "stroke-miterlimit": !0 })),
          ie(t).forEach(m),
          a.forEach(m),
          this.h();
      },
      h() {
        f(t, "d", "M11.1666 6.66666L8.50094 9.48258L5.83331 6.66666"),
          f(t, "stroke", "#8d94a5"),
          f(t, "stroke-miterlimit", "10"),
          De(e, r);
      },
      m(l, a) {
        ct(l, e, a), ge(e, t);
      },
      p(l, [a]) {
        De(
          e,
          (r = ft(i, [
            { width: "17" },
            { height: "16" },
            { viewBox: "0 0 17 16" },
            { fill: "none" },
            { xmlns: "http://www.w3.org/2000/svg" },
            a & 1 && l[0],
          ])),
        );
      },
      i: k,
      o: k,
      d(l) {
        l && m(e);
      },
    };
  }
  function yo(n, e, t) {
    return (
      (n.$$set = (i) => {
        t(0, (e = fe(fe({}, e), Ce(i))));
      }),
      (e = Ce(e)),
      [e]
    );
  }
  class Qt extends ut {
    constructor(e) {
      super();
      Xe(this, e, yo, wo, Ze, {});
    }
  }
  function ko(n) {
    let e,
      t,
      i = [
        { width: "11" },
        { height: "13" },
        { viewBox: "0 0 11 13" },
        { fill: "none" },
        { xmlns: "http://www.w3.org/2000/svg" },
        n[0],
      ],
      r = {};
    for (let l = 0; l < i.length; l += 1) r = fe(r, i[l]);
    return {
      c() {
        (e = ne("svg")), (t = ne("path")), this.h();
      },
      l(l) {
        e = re(l, "svg", {
          width: !0,
          height: !0,
          viewBox: !0,
          fill: !0,
          xmlns: !0,
        });
        var a = ie(e);
        (t = re(a, "path", { d: !0, fill: !0 })),
          ie(t).forEach(m),
          a.forEach(m),
          this.h();
      },
      h() {
        f(
          t,
          "d",
          "M0.75 11.375C0.75 12.0078 1.24219 12.5 1.875 12.5H8.625C9.23438 12.5 9.75 12.0078 9.75 11.375V3.5H0.75V11.375ZM7.125 5.375C7.125 5.1875 7.28906 5 7.5 5C7.6875 5 7.875 5.1875 7.875 5.375V10.625C7.875 10.8359 7.6875 11 7.5 11C7.28906 11 7.125 10.8359 7.125 10.625V5.375ZM4.875 5.375C4.875 5.1875 5.03906 5 5.25 5C5.4375 5 5.625 5.1875 5.625 5.375V10.625C5.625 10.8359 5.4375 11 5.25 11C5.03906 11 4.875 10.8359 4.875 10.625V5.375ZM2.625 5.375C2.625 5.1875 2.78906 5 3 5C3.1875 5 3.375 5.1875 3.375 5.375V10.625C3.375 10.8359 3.1875 11 3 11C2.78906 11 2.625 10.8359 2.625 10.625V5.375ZM10.125 1.25H7.3125L7.07812 0.828125C6.98438 0.640625 6.79688 0.5 6.58594 0.5H3.89062C3.67969 0.5 3.49219 0.640625 3.39844 0.828125L3.1875 1.25H0.375C0.164062 1.25 0 1.4375 0 1.625V2.375C0 2.58594 0.164062 2.75 0.375 2.75H10.125C10.3125 2.75 10.5 2.58594 10.5 2.375V1.625C10.5 1.4375 10.3125 1.25 10.125 1.25Z",
        ),
          f(t, "fill", "#6A7285"),
          De(e, r);
      },
      m(l, a) {
        ct(l, e, a), ge(e, t);
      },
      p(l, [a]) {
        De(
          e,
          (r = ft(i, [
            { width: "11" },
            { height: "13" },
            { viewBox: "0 0 11 13" },
            { fill: "none" },
            { xmlns: "http://www.w3.org/2000/svg" },
            a & 1 && l[0],
          ])),
        );
      },
      i: k,
      o: k,
      d(l) {
        l && m(e);
      },
    };
  }
  function Eo(n, e, t) {
    return (
      (n.$$set = (i) => {
        t(0, (e = fe(fe({}, e), Ce(i))));
      }),
      (e = Ce(e)),
      [e]
    );
  }
  class rr extends ut {
    constructor(e) {
      super();
      Xe(this, e, Eo, ko, Ze, {});
    }
  }
  function To(n) {
    let e,
      t,
      i = [
        { width: "12" },
        { height: "13" },
        { viewBox: "0 0 12 13" },
        { fill: "none" },
        { xmlns: "http://www.w3.org/2000/svg" },
        n[0],
      ],
      r = {};
    for (let l = 0; l < i.length; l += 1) r = fe(r, i[l]);
    return {
      c() {
        (e = ne("svg")), (t = ne("path")), this.h();
      },
      l(l) {
        e = re(l, "svg", {
          width: !0,
          height: !0,
          viewBox: !0,
          fill: !0,
          xmlns: !0,
        });
        var a = ie(e);
        (t = re(a, "path", { d: !0, fill: !0 })),
          ie(t).forEach(m),
          a.forEach(m),
          this.h();
      },
      h() {
        f(
          t,
          "d",
          "M4.125 5.5625H7.875C8.0625 5.5625 8.25 5.39844 8.25 5.1875V4.8125C8.25 4.625 8.0625 4.4375 7.875 4.4375H4.125C3.91406 4.4375 3.75 4.625 3.75 4.8125V5.1875C3.75 5.39844 3.91406 5.5625 4.125 5.5625ZM3.75 7.4375C3.75 7.64844 3.91406 7.8125 4.125 7.8125H7.875C8.0625 7.8125 8.25 7.64844 8.25 7.4375V7.0625C8.25 6.875 8.0625 6.6875 7.875 6.6875H4.125C3.91406 6.6875 3.75 6.875 3.75 7.0625V7.4375ZM6 10.2969C5.60156 10.2969 5.22656 10.1797 4.89844 9.92188L0 6.38281V11.375C0 12.0078 0.492188 12.5 1.125 12.5H10.875C11.4844 12.5 12 12.0078 12 11.375V6.38281L7.07812 9.92188C6.75 10.1797 6.375 10.2969 6 10.2969ZM11.5547 4.32031C11.3438 4.17969 11.1562 4.01562 10.875 3.80469V2.75C10.875 2.14062 10.3594 1.625 9.75 1.625H7.92188C7.85156 1.57812 7.78125 1.53125 7.71094 1.48438C7.3125 1.20312 6.53906 0.5 6 0.5C5.4375 0.5 4.66406 1.20312 4.26562 1.48438C4.19531 1.53125 4.125 1.57812 4.05469 1.625H2.25C1.61719 1.625 1.125 2.14062 1.125 2.75V3.80469C0.820312 4.01562 0.632812 4.17969 0.421875 4.32031C0.164062 4.53125 0 4.85938 0 5.21094V5.46875L2.25 7.08594V2.75H9.75V7.08594L12 5.46875V5.21094C12 4.85938 11.8359 4.55469 11.5547 4.32031Z",
        ),
          f(t, "fill", "#6A7285"),
          De(e, r);
      },
      m(l, a) {
        ct(l, e, a), ge(e, t);
      },
      p(l, [a]) {
        De(
          e,
          (r = ft(i, [
            { width: "12" },
            { height: "13" },
            { viewBox: "0 0 12 13" },
            { fill: "none" },
            { xmlns: "http://www.w3.org/2000/svg" },
            a & 1 && l[0],
          ])),
        );
      },
      i: k,
      o: k,
      d(l) {
        l && m(e);
      },
    };
  }
  function Ao(n, e, t) {
    return (
      (n.$$set = (i) => {
        t(0, (e = fe(fe({}, e), Ce(i))));
      }),
      (e = Ce(e)),
      [e]
    );
  }
  class ar extends ut {
    constructor(e) {
      super();
      Xe(this, e, Ao, To, Ze, {});
    }
  }
  function Oo(n) {
    let e,
      t,
      i = [
        { width: "12" },
        { height: "9" },
        { viewBox: "0 0 12 9" },
        { fill: "none" },
        { xmlns: "http://www.w3.org/2000/svg" },
        n[0],
      ],
      r = {};
    for (let l = 0; l < i.length; l += 1) r = fe(r, i[l]);
    return {
      c() {
        (e = ne("svg")), (t = ne("path")), this.h();
      },
      l(l) {
        e = re(l, "svg", {
          width: !0,
          height: !0,
          viewBox: !0,
          fill: !0,
          xmlns: !0,
        });
        var a = ie(e);
        (t = re(a, "path", { d: !0, fill: !0 })),
          ie(t).forEach(m),
          a.forEach(m),
          this.h();
      },
      h() {
        f(
          t,
          "d",
          "M11.7656 2.97656C11.2266 3.39844 10.5469 3.91406 8.15625 5.64844C7.6875 6 6.82031 6.77344 6 6.77344C5.15625 6.77344 4.3125 6 3.82031 5.64844C1.42969 3.91406 0.75 3.39844 0.210938 2.97656C0.117188 2.90625 0 2.97656 0 3.09375V7.875C0 8.50781 0.492188 9 1.125 9H10.875C11.4844 9 12 8.50781 12 7.875V3.09375C12 2.97656 11.8594 2.90625 11.7656 2.97656ZM6 6C6.53906 6.02344 7.3125 5.32031 7.71094 5.03906C10.8281 2.78906 11.0625 2.57812 11.7656 2.01562C11.9062 1.92188 12 1.75781 12 1.57031V1.125C12 0.515625 11.4844 0 10.875 0H1.125C0.492188 0 0 0.515625 0 1.125V1.57031C0 1.75781 0.0703125 1.92188 0.210938 2.01562C0.914062 2.57812 1.14844 2.78906 4.26562 5.03906C4.66406 5.32031 5.4375 6.02344 6 6Z",
        ),
          f(t, "fill", "#6A7285"),
          De(e, r);
      },
      m(l, a) {
        ct(l, e, a), ge(e, t);
      },
      p(l, [a]) {
        De(
          e,
          (r = ft(i, [
            { width: "12" },
            { height: "9" },
            { viewBox: "0 0 12 9" },
            { fill: "none" },
            { xmlns: "http://www.w3.org/2000/svg" },
            a & 1 && l[0],
          ])),
        );
      },
      i: k,
      o: k,
      d(l) {
        l && m(e);
      },
    };
  }
  function So(n, e, t) {
    return (
      (n.$$set = (i) => {
        t(0, (e = fe(fe({}, e), Ce(i))));
      }),
      (e = Ce(e)),
      [e]
    );
  }
  class lr extends ut {
    constructor(e) {
      super();
      Xe(this, e, So, Oo, Ze, {});
    }
  }
  function Co(n) {
    let e,
      t,
      i,
      r,
      l = [
        { width: "17" },
        { height: "16" },
        { xmlns: "http://www.w3.org/2000/svg" },
        { "xmlns:xlink": "http://www.w3.org/1999/xlink" },
        { x: "0px" },
        { y: "0px" },
        { viewBox: "0 0 511.36 511.36" },
        { style: "enable-background:new 0 0 511.36 511.36;" },
        { "xml:space": "preserve" },
        n[0],
      ],
      a = {};
    for (let s = 0; s < l.length; s += 1) a = fe(a, l[s]);
    return {
      c() {
        (e = ne("svg")),
          (t = ne("g")),
          (i = ne("g")),
          (r = ne("path")),
          this.h();
      },
      l(s) {
        e = re(s, "svg", {
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
        var o = ie(e);
        t = re(o, "g", {});
        var c = ie(t);
        i = re(c, "g", {});
        var d = ie(i);
        (r = re(d, "path", { d: !0 })),
          ie(r).forEach(m),
          d.forEach(m),
          c.forEach(m),
          o.forEach(m),
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
          De(e, a);
      },
      m(s, o) {
        ct(s, e, o), ge(e, t), ge(t, i), ge(i, r);
      },
      p(s, [o]) {
        De(
          e,
          (a = ft(l, [
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
        s && m(e);
      },
    };
  }
  function No(n, e, t) {
    return (
      (n.$$set = (i) => {
        t(0, (e = fe(fe({}, e), Ce(i))));
      }),
      (e = Ce(e)),
      [e]
    );
  }
  class Lo extends ut {
    constructor(e) {
      super();
      Xe(this, e, No, Co, Ze, {});
    }
  }
  function Mo(n) {
    let e,
      t,
      i,
      r = [
        { width: "24" },
        { height: "24" },
        { viewBox: "0 0 24 24" },
        { fill: "none" },
        { xmlns: "http://www.w3.org/2000/svg" },
        n[0],
      ],
      l = {};
    for (let a = 0; a < r.length; a += 1) l = fe(l, r[a]);
    return {
      c() {
        (e = ne("svg")), (t = ne("path")), (i = ne("path")), this.h();
      },
      l(a) {
        e = re(a, "svg", {
          width: !0,
          height: !0,
          viewBox: !0,
          fill: !0,
          xmlns: !0,
        });
        var s = ie(e);
        (t = re(s, "path", {
          d: !0,
          stroke: !0,
          "stroke-width": !0,
          "stroke-miterlimit": !0,
        })),
          ie(t).forEach(m),
          (i = re(s, "path", {
            d: !0,
            stroke: !0,
            "stroke-width": !0,
            "stroke-miterlimit": !0,
          })),
          ie(i).forEach(m),
          s.forEach(m),
          this.h();
      },
      h() {
        f(t, "d", "M11.7605 17.3029L6.32422 12.1494L11.7605 6.99968"),
          f(t, "stroke", "#161717"),
          f(t, "stroke-width", "1.5"),
          f(t, "stroke-miterlimit", "10"),
          f(i, "d", "M6.42791 12.1494L18 12.1494"),
          f(i, "stroke", "#161717"),
          f(i, "stroke-width", "1.5"),
          f(i, "stroke-miterlimit", "10"),
          De(e, l);
      },
      m(a, s) {
        ct(a, e, s), ge(e, t), ge(e, i);
      },
      p(a, [s]) {
        De(
          e,
          (l = ft(r, [
            { width: "24" },
            { height: "24" },
            { viewBox: "0 0 24 24" },
            { fill: "none" },
            { xmlns: "http://www.w3.org/2000/svg" },
            s & 1 && a[0],
          ])),
        );
      },
      i: k,
      o: k,
      d(a) {
        a && m(e);
      },
    };
  }
  function Do(n, e, t) {
    return (
      (n.$$set = (i) => {
        t(0, (e = fe(fe({}, e), Ce(i))));
      }),
      (e = Ce(e)),
      [e]
    );
  }
  class Po extends ut {
    constructor(e) {
      super();
      Xe(this, e, Do, Mo, Ze, {});
    }
  }
  function Ro(n) {
    let e,
      t,
      i = [
        { width: "30" },
        { height: "28" },
        { style: "margin-top:2px" },
        { viewBox: "0 0 20 20" },
        { fill: "none" },
        { xmlns: "http://www.w3.org/2000/svg" },
        n[0],
      ],
      r = {};
    for (let l = 0; l < i.length; l += 1) r = fe(r, i[l]);
    return {
      c() {
        (e = ne("svg")), (t = ne("path")), this.h();
      },
      l(l) {
        e = re(l, "svg", {
          width: !0,
          height: !0,
          style: !0,
          viewBox: !0,
          fill: !0,
          xmlns: !0,
        });
        var a = ie(e);
        (t = re(a, "path", { d: !0, fill: !0 })),
          ie(t).forEach(m),
          a.forEach(m),
          this.h();
      },
      h() {
        f(
          t,
          "d",
          "M10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3ZM10 12.5C10.4142 12.5 10.75 12.8358 10.75 13.25C10.75 13.6642 10.4142 14 10 14C9.58579 14 9.25 13.6642 9.25 13.25C9.25 12.8358 9.58579 12.5 10 12.5ZM10 6C10.2455 6 10.4496 6.17688 10.4919 6.41012L10.5 6.5V11C10.5 11.2761 10.2761 11.5 10 11.5C9.75454 11.5 9.55039 11.3231 9.50806 11.0899L9.5 11V6.5C9.5 6.22386 9.72386 6 10 6Z",
        ),
          f(t, "fill", "white"),
          De(e, r);
      },
      m(l, a) {
        ct(l, e, a), ge(e, t);
      },
      p(l, [a]) {
        De(
          e,
          (r = ft(i, [
            { width: "30" },
            { height: "28" },
            { style: "margin-top:2px" },
            { viewBox: "0 0 20 20" },
            { fill: "none" },
            { xmlns: "http://www.w3.org/2000/svg" },
            a & 1 && l[0],
          ])),
        );
      },
      i: k,
      o: k,
      d(l) {
        l && m(e);
      },
    };
  }
  function Io(n, e, t) {
    return (
      (n.$$set = (i) => {
        t(0, (e = fe(fe({}, e), Ce(i))));
      }),
      (e = Ce(e)),
      [e]
    );
  }
  class jo extends ut {
    constructor(e) {
      super();
      Xe(this, e, Io, Ro, Ze, {});
    }
  }
  function Fo(n) {
    let e,
      t,
      i = [
        { width: "16" },
        { height: "16" },
        { viewBox: "0 0 16 16" },
        { fill: "none" },
        { xmlns: "http://www.w3.org/2000/svg" },
        n[0],
      ],
      r = {};
    for (let l = 0; l < i.length; l += 1) r = fe(r, i[l]);
    return {
      c() {
        (e = ne("svg")), (t = ne("path")), this.h();
      },
      l(l) {
        e = re(l, "svg", {
          width: !0,
          height: !0,
          viewBox: !0,
          fill: !0,
          xmlns: !0,
        });
        var a = ie(e);
        (t = re(a, "path", { d: !0, fill: !0 })),
          ie(t).forEach(m),
          a.forEach(m),
          this.h();
      },
      h() {
        f(
          t,
          "d",
          "M11.2452 0.817058C12.332 -0.269749 14.0941 -0.269749 15.1809 0.817058C16.2224 1.85858 16.2658 3.52026 15.3111 4.61346L15.1809 4.75273L5.57506 14.3586C5.36997 14.5636 5.12323 14.7212 4.85236 14.821L4.68708 14.8739L0.632111 15.9798C0.285522 16.0743 -0.0345414 15.7857 0.00300655 15.4452L0.0181704 15.3658L1.12407 11.3109C1.20039 11.031 1.33646 10.7718 1.52212 10.5508L1.63939 10.4229L11.2452 0.817058ZM10.385 3.09195L2.34649 11.13C2.2542 11.2223 2.18117 11.3314 2.13111 11.4511L2.08884 11.574L1.2122 14.7847L4.42397 13.9091C4.50791 13.8862 4.58815 13.8526 4.66278 13.8093L4.77028 13.7372L4.86796 13.6515L12.906 5.61295L10.385 3.09195ZM14.4738 1.52417C13.8162 0.866565 12.7727 0.830031 12.0722 1.41457L11.9523 1.52417L11.092 2.38495L13.613 4.90595L14.4738 4.04563C15.1314 3.38803 15.1679 2.34455 14.5834 1.64407L14.4738 1.52417Z",
        ),
          f(t, "fill", "#ffffff"),
          De(e, r);
      },
      m(l, a) {
        ct(l, e, a), ge(e, t);
      },
      p(l, [a]) {
        De(
          e,
          (r = ft(i, [
            { width: "16" },
            { height: "16" },
            { viewBox: "0 0 16 16" },
            { fill: "none" },
            { xmlns: "http://www.w3.org/2000/svg" },
            a & 1 && l[0],
          ])),
        );
      },
      i: k,
      o: k,
      d(l) {
        l && m(e);
      },
    };
  }
  function Uo(n, e, t) {
    return (
      (n.$$set = (i) => {
        t(0, (e = fe(fe({}, e), Ce(i))));
      }),
      (e = Ce(e)),
      [e]
    );
  }
  class or extends ut {
    constructor(e) {
      super();
      Xe(this, e, Uo, Fo, Ze, {});
    }
  }
  function Ho(n) {
    let e,
      t =
        (n[0].given_name && n[0].surname
          ? n[0].given_name.charAt(0) + n[0].surname.charAt(0)
          : n[0].name
          ? n[0].name.charAt(0)
          : n[0].email
          ? n[0].email.charAt(0)
          : "?") + "",
      i;
    return {
      c() {
        (e = v("p")), (i = Z(t)), xt(e, "margin", "0");
      },
      m(r, l) {
        p(r, e, l), b(e, i);
      },
      p(r, l) {
        l & 1 &&
          t !==
            (t =
              (r[0].given_name && r[0].surname
                ? r[0].given_name.charAt(0) + r[0].surname.charAt(0)
                : r[0].name
                ? r[0].name.charAt(0)
                : r[0].email
                ? r[0].email.charAt(0)
                : "?") + "") &&
          ue(i, t);
      },
      d(r) {
        r && m(e);
      },
    };
  }
  function zo(n) {
    let e, t;
    return {
      c() {
        (e = v("img")),
          f(e, "alt", ""),
          xt(e, "height", n[1]),
          xt(e, "width", n[2]),
          xt(e, "border-radius", "50%"),
          vi(e.src, (t = "data:image/jpg;base64," + n[3])) || f(e, "src", t);
      },
      m(i, r) {
        p(i, e, r);
      },
      p(i, r) {
        r & 2 && xt(e, "height", i[1]),
          r & 4 && xt(e, "width", i[2]),
          r & 8 &&
            !vi(e.src, (t = "data:image/jpg;base64," + i[3])) &&
            f(e, "src", t);
      },
      d(i) {
        i && m(e);
      },
    };
  }
  function Bo(n) {
    let e;
    function t(l, a) {
      if (l[3]) return zo;
      if (l[0]) return Ho;
    }
    let i = t(n),
      r = i && i(n);
    return {
      c() {
        r && r.c(), (e = Me()), (this.c = k);
      },
      m(l, a) {
        r && r.m(l, a), p(l, e, a);
      },
      p(l, [a]) {
        i === (i = t(l)) && r
          ? r.p(l, a)
          : (r && r.d(1), (r = i && i(l)), r && (r.c(), r.m(e.parentNode, e)));
      },
      i: k,
      o: k,
      d(l) {
        r && r.d(l), l && m(e);
      },
    };
  }
  function Go(n, e, t) {
    let i,
      { contact: r } = e,
      { contact_query: l } = e,
      { height: a = "32px" } = e,
      { width: s = "32px" } = e;
    return (
      $a(async () => {
        r && r.picture_url
          ? t(3, (i = await xl.getContactAvatar(l, r.id)))
          : t(3, (i = null));
      }),
      (n.$$set = (o) => {
        "contact" in o && t(0, (r = o.contact)),
          "contact_query" in o && t(4, (l = o.contact_query)),
          "height" in o && t(1, (a = o.height)),
          "width" in o && t(2, (s = o.width));
      }),
      t(3, (i = null)),
      [r, a, s, i, l]
    );
  }
  class Vo extends Kt {
    constructor(e) {
      super();
      Xe(
        this,
        {
          target: this.shadowRoot,
          props: un(this.attributes),
          customElement: !0,
        },
        Go,
        Bo,
        Ze,
        { contact: 0, contact_query: 4, height: 1, width: 2 },
        null,
      ),
        e &&
          (e.target && p(e.target, this, e.anchor),
          e.props && (this.$set(e.props), de()));
    }
    static get observedAttributes() {
      return ["contact", "contact_query", "height", "width"];
    }
    get contact() {
      return this.$$.ctx[0];
    }
    set contact(e) {
      this.$$set({ contact: e }), de();
    }
    get contact_query() {
      return this.$$.ctx[4];
    }
    set contact_query(e) {
      this.$$set({ contact_query: e }), de();
    }
    get height() {
      return this.$$.ctx[1];
    }
    set height(e) {
      this.$$set({ height: e }), de();
    }
    get width() {
      return this.$$.ctx[2];
    }
    set width(e) {
      this.$$set({ width: e }), de();
    }
  }
  customElements.define("nylas-contact-image", Vo);
  const sr = (n) =>
    n.content_disposition === "attachment" &&
    !!n.filename &&
    !to.includes(n.content_type);
  var Wo =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : typeof self != "undefined"
      ? self
      : {};
  function Jo(n, e, t) {
    return (
      (t = {
        path: e,
        exports: {},
        require: function (i, r) {
          return xo(i, r == null ? t.path : r);
        },
      }),
      n(t, t.exports),
      t.exports
    );
  }
  function xo() {
    throw new Error(
      "Dynamic requires are not currently supported by @rollup/plugin-commonjs",
    );
  }
  var $t = Jo(function (n, e) {
    /*! @license DOMPurify 2.3.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.5/LICENSE */ (function (
      t,
      i,
    ) {
      n.exports = i();
    })(Wo, function () {
      function t(B) {
        if (Array.isArray(B)) {
          for (var V = 0, q = Array(B.length); V < B.length; V++) q[V] = B[V];
          return q;
        } else return Array.from(B);
      }
      var i = Object.hasOwnProperty,
        r = Object.setPrototypeOf,
        l = Object.isFrozen,
        a = Object.getPrototypeOf,
        s = Object.getOwnPropertyDescriptor,
        o = Object.freeze,
        c = Object.seal,
        d = Object.create,
        h = typeof Reflect != "undefined" && Reflect,
        w = h.apply,
        O = h.construct;
      w ||
        (w = function (V, q, ce) {
          return V.apply(q, ce);
        }),
        o ||
          (o = function (V) {
            return V;
          }),
        c ||
          (c = function (V) {
            return V;
          }),
        O ||
          (O = function (V, q) {
            return new (Function.prototype.bind.apply(
              V,
              [null].concat(t(q)),
            ))();
          });
      var y = G(Array.prototype.forEach),
        L = G(Array.prototype.pop),
        R = G(Array.prototype.push),
        E = G(String.prototype.toLowerCase),
        S = G(String.prototype.match),
        H = G(String.prototype.replace),
        ae = G(String.prototype.indexOf),
        K = G(String.prototype.trim),
        W = G(RegExp.prototype.test),
        z = T(TypeError);
      function G(B) {
        return function (V) {
          for (
            var q = arguments.length, ce = Array(q > 1 ? q - 1 : 0), Le = 1;
            Le < q;
            Le++
          )
            ce[Le - 1] = arguments[Le];
          return w(B, V, ce);
        };
      }
      function T(B) {
        return function () {
          for (var V = arguments.length, q = Array(V), ce = 0; ce < V; ce++)
            q[ce] = arguments[ce];
          return O(B, q);
        };
      }
      function N(B, V) {
        r && r(B, null);
        for (var q = V.length; q--; ) {
          var ce = V[q];
          if (typeof ce == "string") {
            var Le = E(ce);
            Le !== ce && (l(V) || (V[q] = Le), (ce = Le));
          }
          B[ce] = !0;
        }
        return B;
      }
      function _e(B) {
        var V = d(null),
          q = void 0;
        for (q in B) w(i, B, [q]) && (V[q] = B[q]);
        return V;
      }
      function pe(B, V) {
        for (; B !== null; ) {
          var q = s(B, V);
          if (q) {
            if (q.get) return G(q.get);
            if (typeof q.value == "function") return G(q.value);
          }
          B = a(B);
        }
        function ce(Le) {
          return console.warn("fallback value for", Le), null;
        }
        return ce;
      }
      var le = o([
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
        ee = o([
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
        Q = o([
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
        be = o([
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
        $ = o([
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
        Pe = o(["#text"]),
        ve = o([
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
        se = o([
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
        ye = o([
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
        D = o([
          "xlink:href",
          "xml:id",
          "xlink:title",
          "xml:space",
          "xmlns:xlink",
        ]),
        me = c(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
        Ye = c(/<%[\s\S]*|[\s\S]*%>/gm),
        F = c(/^data-[\-\w.\u00B7-\uFFFF]/),
        oe = c(/^aria-[\-\w]+$/),
        M = c(
          /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
        ),
        pt = c(/^(?:\w+script|data):/i),
        gt = c(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
        Qe =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (B) {
                return typeof B;
              }
            : function (B) {
                return B &&
                  typeof Symbol == "function" &&
                  B.constructor === Symbol &&
                  B !== Symbol.prototype
                  ? "symbol"
                  : typeof B;
              };
      function je(B) {
        if (Array.isArray(B)) {
          for (var V = 0, q = Array(B.length); V < B.length; V++) q[V] = B[V];
          return q;
        } else return Array.from(B);
      }
      var Ne = function () {
          return typeof window == "undefined" ? null : window;
        },
        we = function (V, q) {
          if (
            (typeof V == "undefined" ? "undefined" : Qe(V)) !== "object" ||
            typeof V.createPolicy != "function"
          )
            return null;
          var ce = null,
            Le = "data-tt-policy-suffix";
          q.currentScript &&
            q.currentScript.hasAttribute(Le) &&
            (ce = q.currentScript.getAttribute(Le));
          var ot = "dompurify" + (ce ? "#" + ce : "");
          try {
            return V.createPolicy(ot, {
              createHTML: function (et) {
                return et;
              },
            });
          } catch (At) {
            return (
              console.warn(
                "TrustedTypes policy " + ot + " could not be created.",
              ),
              null
            );
          }
        };
      function $e() {
        var B =
            arguments.length > 0 && arguments[0] !== void 0
              ? arguments[0]
              : Ne(),
          V = function (_) {
            return $e(_);
          };
        if (
          ((V.version = "2.3.5"),
          (V.removed = []),
          !B || !B.document || B.document.nodeType !== 9)
        )
          return (V.isSupported = !1), V;
        var q = B.document,
          ce = B.document,
          Le = B.DocumentFragment,
          ot = B.HTMLTemplateElement,
          At = B.Node,
          et = B.Element,
          Ot = B.NodeFilter,
          A = B.NamedNodeMap,
          pn = A === void 0 ? B.NamedNodeMap || B.MozNamedAttrMap : A,
          mi = B.HTMLFormElement,
          gn = B.DOMParser,
          _i = B.trustedTypes,
          vt = et.prototype,
          Bn = pe(vt, "cloneNode"),
          en = pe(vt, "nextSibling"),
          vn = pe(vt, "childNodes"),
          tn = pe(vt, "parentNode");
        if (typeof ot == "function") {
          var bn = ce.createElement("template");
          bn.content &&
            bn.content.ownerDocument &&
            (ce = bn.content.ownerDocument);
        }
        var bt = we(_i, q),
          Gn = bt ? bt.createHTML("") : "",
          nn = ce,
          wn = nn.implementation,
          hi = nn.createNodeIterator,
          zt = nn.createDocumentFragment,
          yn = nn.getElementsByTagName,
          pi = q.importNode,
          kn = {};
        try {
          kn = _e(ce).documentMode ? ce.documentMode : {};
        } catch (X) {}
        var st = {};
        V.isSupported =
          typeof tn == "function" &&
          wn &&
          typeof wn.createHTMLDocument != "undefined" &&
          kn !== 9;
        var yt = me,
          En = Ye,
          Vn = F,
          Wn = oe,
          Jn = pt,
          xn = gt,
          Tn = M,
          Ue = null,
          Yn = N({}, [].concat(je(le), je(ee), je(Q), je(be), je(Pe))),
          Je = null,
          An = N({}, [].concat(je(ve), je(se), je(ye), je(D))),
          Re = Object.seal(
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
          Bt = null,
          rn = null,
          an = !0,
          On = !0,
          Dt = !1,
          kt = !1,
          St = !1,
          Sn = !1,
          Gt = !1,
          Pt = !1,
          ln = !1,
          on = !1,
          Zn = !0,
          Cn = !0,
          Vt = !1,
          Rt = {},
          It = null,
          Kn = N({}, [
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
          Xn = null,
          Qn = N({}, ["audio", "video", "img", "source", "image", "track"]),
          Nn = null,
          $n = N({}, [
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
          Ln = "http://www.w3.org/1998/Math/MathML",
          Mn = "http://www.w3.org/2000/svg",
          Et = "http://www.w3.org/1999/xhtml",
          sn = Et,
          Dn = !1,
          u = void 0,
          g = ["application/xhtml+xml", "text/html"],
          I = "text/html",
          Y = void 0,
          Oe = null,
          Te = ce.createElement("form"),
          He = function (_) {
            return _ instanceof RegExp || _ instanceof Function;
          },
          Wt = function (_) {
            (Oe && Oe === _) ||
              ((!_ ||
                (typeof _ == "undefined" ? "undefined" : Qe(_)) !== "object") &&
                (_ = {}),
              (_ = _e(_)),
              (Ue = "ALLOWED_TAGS" in _ ? N({}, _.ALLOWED_TAGS) : Yn),
              (Je = "ALLOWED_ATTR" in _ ? N({}, _.ALLOWED_ATTR) : An),
              (Nn =
                "ADD_URI_SAFE_ATTR" in _ ? N(_e($n), _.ADD_URI_SAFE_ATTR) : $n),
              (Xn =
                "ADD_DATA_URI_TAGS" in _ ? N(_e(Qn), _.ADD_DATA_URI_TAGS) : Qn),
              (It = "FORBID_CONTENTS" in _ ? N({}, _.FORBID_CONTENTS) : Kn),
              (Bt = "FORBID_TAGS" in _ ? N({}, _.FORBID_TAGS) : {}),
              (rn = "FORBID_ATTR" in _ ? N({}, _.FORBID_ATTR) : {}),
              (Rt = "USE_PROFILES" in _ ? _.USE_PROFILES : !1),
              (an = _.ALLOW_ARIA_ATTR !== !1),
              (On = _.ALLOW_DATA_ATTR !== !1),
              (Dt = _.ALLOW_UNKNOWN_PROTOCOLS || !1),
              (kt = _.SAFE_FOR_TEMPLATES || !1),
              (St = _.WHOLE_DOCUMENT || !1),
              (Pt = _.RETURN_DOM || !1),
              (ln = _.RETURN_DOM_FRAGMENT || !1),
              (on = _.RETURN_TRUSTED_TYPE || !1),
              (Gt = _.FORCE_BODY || !1),
              (Zn = _.SANITIZE_DOM !== !1),
              (Cn = _.KEEP_CONTENT !== !1),
              (Vt = _.IN_PLACE || !1),
              (Tn = _.ALLOWED_URI_REGEXP || Tn),
              (sn = _.NAMESPACE || Et),
              _.CUSTOM_ELEMENT_HANDLING &&
                He(_.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                (Re.tagNameCheck = _.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
              _.CUSTOM_ELEMENT_HANDLING &&
                He(_.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                (Re.attributeNameCheck =
                  _.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
              _.CUSTOM_ELEMENT_HANDLING &&
                typeof _.CUSTOM_ELEMENT_HANDLING
                  .allowCustomizedBuiltInElements == "boolean" &&
                (Re.allowCustomizedBuiltInElements =
                  _.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
              (u =
                g.indexOf(_.PARSER_MEDIA_TYPE) === -1
                  ? (u = I)
                  : (u = _.PARSER_MEDIA_TYPE)),
              (Y =
                u === "application/xhtml+xml"
                  ? function (P) {
                      return P;
                    }
                  : E),
              kt && (On = !1),
              ln && (Pt = !0),
              Rt &&
                ((Ue = N({}, [].concat(je(Pe)))),
                (Je = []),
                Rt.html === !0 && (N(Ue, le), N(Je, ve)),
                Rt.svg === !0 && (N(Ue, ee), N(Je, se), N(Je, D)),
                Rt.svgFilters === !0 && (N(Ue, Q), N(Je, se), N(Je, D)),
                Rt.mathMl === !0 && (N(Ue, be), N(Je, ye), N(Je, D))),
              _.ADD_TAGS && (Ue === Yn && (Ue = _e(Ue)), N(Ue, _.ADD_TAGS)),
              _.ADD_ATTR && (Je === An && (Je = _e(Je)), N(Je, _.ADD_ATTR)),
              _.ADD_URI_SAFE_ATTR && N(Nn, _.ADD_URI_SAFE_ATTR),
              _.FORBID_CONTENTS &&
                (It === Kn && (It = _e(It)), N(It, _.FORBID_CONTENTS)),
              Cn && (Ue["#text"] = !0),
              St && N(Ue, ["html", "head", "body"]),
              Ue.table && (N(Ue, ["tbody"]), delete Bt.tbody),
              o && o(_),
              (Oe = _));
          },
          cn = N({}, ["mi", "mo", "mn", "ms", "mtext"]),
          jt = N({}, ["foreignobject", "desc", "title", "annotation-xml"]),
          tt = N({}, ee);
        N(tt, Q), N(tt, te);
        var mt = N({}, be);
        N(mt, $);
        var Jt = function (_) {
            var P = tn(_);
            (!P || !P.tagName) &&
              (P = { namespaceURI: Et, tagName: "template" });
            var J = E(_.tagName),
              Se = E(P.tagName);
            if (_.namespaceURI === Mn)
              return P.namespaceURI === Et
                ? J === "svg"
                : P.namespaceURI === Ln
                ? J === "svg" && (Se === "annotation-xml" || cn[Se])
                : Boolean(tt[J]);
            if (_.namespaceURI === Ln)
              return P.namespaceURI === Et
                ? J === "math"
                : P.namespaceURI === Mn
                ? J === "math" && jt[Se]
                : Boolean(mt[J]);
            if (_.namespaceURI === Et) {
              if (
                (P.namespaceURI === Mn && !jt[Se]) ||
                (P.namespaceURI === Ln && !cn[Se])
              )
                return !1;
              var nt = N({}, ["title", "style", "font", "a", "script"]);
              return !mt[J] && (nt[J] || !tt[J]);
            }
            return !1;
          },
          rt = function (_) {
            R(V.removed, { element: _ });
            try {
              _.parentNode.removeChild(_);
            } catch (P) {
              try {
                _.outerHTML = Gn;
              } catch (J) {
                _.remove();
              }
            }
          },
          Ra = function (_, P) {
            try {
              R(V.removed, { attribute: P.getAttributeNode(_), from: P });
            } catch (J) {
              R(V.removed, { attribute: null, from: P });
            }
            if ((P.removeAttribute(_), _ === "is" && !Je[_]))
              if (Pt || ln)
                try {
                  rt(P);
                } catch (J) {}
              else
                try {
                  P.setAttribute(_, "");
                } catch (J) {}
          },
          Ia = function (_) {
            var P = void 0,
              J = void 0;
            if (Gt) _ = "<remove></remove>" + _;
            else {
              var Se = S(_, /^[\r\n\t ]+/);
              J = Se && Se[0];
            }
            u === "application/xhtml+xml" &&
              (_ =
                '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
                _ +
                "</body></html>");
            var nt = bt ? bt.createHTML(_) : _;
            if (sn === Et)
              try {
                P = new gn().parseFromString(nt, u);
              } catch (qe) {}
            if (!P || !P.documentElement) {
              P = wn.createDocument(sn, "template", null);
              try {
                P.documentElement.innerHTML = Dn ? "" : nt;
              } catch (qe) {}
            }
            var it = P.body || P.documentElement;
            return (
              _ &&
                J &&
                it.insertBefore(ce.createTextNode(J), it.childNodes[0] || null),
              sn === Et
                ? yn.call(P, St ? "html" : "body")[0]
                : St
                ? P.documentElement
                : it
            );
          },
          ja = function (_) {
            return hi.call(
              _.ownerDocument || _,
              _,
              Ot.SHOW_ELEMENT | Ot.SHOW_COMMENT | Ot.SHOW_TEXT,
              null,
              !1,
            );
          },
          Uc = function (_) {
            return (
              _ instanceof mi &&
              (typeof _.nodeName != "string" ||
                typeof _.textContent != "string" ||
                typeof _.removeChild != "function" ||
                !(_.attributes instanceof pn) ||
                typeof _.removeAttribute != "function" ||
                typeof _.setAttribute != "function" ||
                typeof _.namespaceURI != "string" ||
                typeof _.insertBefore != "function")
            );
          },
          Pn = function (_) {
            return (typeof At == "undefined" ? "undefined" : Qe(At)) ===
              "object"
              ? _ instanceof At
              : _ &&
                  (typeof _ == "undefined" ? "undefined" : Qe(_)) ===
                    "object" &&
                  typeof _.nodeType == "number" &&
                  typeof _.nodeName == "string";
          },
          Ct = function (_, P, J) {
            !st[_] ||
              y(st[_], function (Se) {
                Se.call(V, P, J, Oe);
              });
          },
          Fa = function (_) {
            var P = void 0;
            if (
              (Ct("beforeSanitizeElements", _, null),
              Uc(_) || S(_.nodeName, /[\u0080-\uFFFF]/))
            )
              return rt(_), !0;
            var J = Y(_.nodeName);
            if (
              (Ct("uponSanitizeElement", _, { tagName: J, allowedTags: Ue }),
              (!Pn(_.firstElementChild) &&
                (!Pn(_.content) || !Pn(_.content.firstElementChild)) &&
                W(/<[/\w]/g, _.innerHTML) &&
                W(/<[/\w]/g, _.textContent)) ||
                (J === "select" && W(/<template/i, _.innerHTML)))
            )
              return rt(_), !0;
            if (!Ue[J] || Bt[J]) {
              if (Cn && !It[J]) {
                var Se = tn(_) || _.parentNode,
                  nt = vn(_) || _.childNodes;
                if (nt && Se)
                  for (var it = nt.length, qe = it - 1; qe >= 0; --qe)
                    Se.insertBefore(Bn(nt[qe], !0), en(_));
              }
              return !Bt[J] &&
                Ha(J) &&
                ((Re.tagNameCheck instanceof RegExp && W(Re.tagNameCheck, J)) ||
                  (Re.tagNameCheck instanceof Function && Re.tagNameCheck(J)))
                ? !1
                : (rt(_), !0);
            }
            return (_ instanceof et && !Jt(_)) ||
              ((J === "noscript" || J === "noembed") &&
                W(/<\/no(script|embed)/i, _.innerHTML))
              ? (rt(_), !0)
              : (kt &&
                  _.nodeType === 3 &&
                  ((P = _.textContent),
                  (P = H(P, yt, " ")),
                  (P = H(P, En, " ")),
                  _.textContent !== P &&
                    (R(V.removed, { element: _.cloneNode() }),
                    (_.textContent = P))),
                Ct("afterSanitizeElements", _, null),
                !1);
          },
          Ua = function (_, P, J) {
            if (Zn && (P === "id" || P === "name") && (J in ce || J in Te))
              return !1;
            if (!(On && !rn[P] && W(Vn, P))) {
              if (!(an && W(Wn, P))) {
                if (!Je[P] || rn[P]) {
                  if (
                    !(
                      (Ha(_) &&
                        ((Re.tagNameCheck instanceof RegExp &&
                          W(Re.tagNameCheck, _)) ||
                          (Re.tagNameCheck instanceof Function &&
                            Re.tagNameCheck(_))) &&
                        ((Re.attributeNameCheck instanceof RegExp &&
                          W(Re.attributeNameCheck, P)) ||
                          (Re.attributeNameCheck instanceof Function &&
                            Re.attributeNameCheck(P)))) ||
                      (P === "is" &&
                        Re.allowCustomizedBuiltInElements &&
                        ((Re.tagNameCheck instanceof RegExp &&
                          W(Re.tagNameCheck, J)) ||
                          (Re.tagNameCheck instanceof Function &&
                            Re.tagNameCheck(J))))
                    )
                  )
                    return !1;
                } else if (!Nn[P]) {
                  if (!W(Tn, H(J, xn, ""))) {
                    if (
                      !(
                        (P === "src" || P === "xlink:href" || P === "href") &&
                        _ !== "script" &&
                        ae(J, "data:") === 0 &&
                        Xn[_]
                      )
                    ) {
                      if (!(Dt && !W(Jn, H(J, xn, "")))) {
                        if (J) return !1;
                      }
                    }
                  }
                }
              }
            }
            return !0;
          },
          Ha = function (_) {
            return _.indexOf("-") > 0;
          },
          za = function (_) {
            var P = void 0,
              J = void 0,
              Se = void 0,
              nt = void 0;
            Ct("beforeSanitizeAttributes", _, null);
            var it = _.attributes;
            if (!!it) {
              var qe = {
                attrName: "",
                attrValue: "",
                keepAttr: !0,
                allowedAttributes: Je,
              };
              for (nt = it.length; nt--; ) {
                P = it[nt];
                var qn = P,
                  _t = qn.name,
                  Ba = qn.namespaceURI;
                if (
                  ((J = K(P.value)),
                  (Se = Y(_t)),
                  (qe.attrName = Se),
                  (qe.attrValue = J),
                  (qe.keepAttr = !0),
                  (qe.forceKeepAttr = void 0),
                  Ct("uponSanitizeAttribute", _, qe),
                  (J = qe.attrValue),
                  !qe.forceKeepAttr && (Ra(_t, _), !!qe.keepAttr))
                ) {
                  if (W(/\/>/i, J)) {
                    Ra(_t, _);
                    continue;
                  }
                  kt && ((J = H(J, yt, " ")), (J = H(J, En, " ")));
                  var zc = Y(_.nodeName);
                  if (!!Ua(zc, Se, J))
                    try {
                      Ba ? _.setAttributeNS(Ba, _t, J) : _.setAttribute(_t, J),
                        L(V.removed);
                    } catch (Bc) {}
                }
              }
              Ct("afterSanitizeAttributes", _, null);
            }
          },
          Hc = function X(_) {
            var P = void 0,
              J = ja(_);
            for (Ct("beforeSanitizeShadowDOM", _, null); (P = J.nextNode()); )
              Ct("uponSanitizeShadowNode", P, null),
                !Fa(P) && (P.content instanceof Le && X(P.content), za(P));
            Ct("afterSanitizeShadowDOM", _, null);
          };
        return (
          (V.sanitize = function (X, _) {
            var P = void 0,
              J = void 0,
              Se = void 0,
              nt = void 0,
              it = void 0;
            if (
              ((Dn = !X), Dn && (X = "<!-->"), typeof X != "string" && !Pn(X))
            ) {
              if (typeof X.toString != "function")
                throw z("toString is not a function");
              if (((X = X.toString()), typeof X != "string"))
                throw z("dirty is not a string, aborting");
            }
            if (!V.isSupported) {
              if (
                Qe(B.toStaticHTML) === "object" ||
                typeof B.toStaticHTML == "function"
              ) {
                if (typeof X == "string") return B.toStaticHTML(X);
                if (Pn(X)) return B.toStaticHTML(X.outerHTML);
              }
              return X;
            }
            if (
              (Sn || Wt(_),
              (V.removed = []),
              typeof X == "string" && (Vt = !1),
              Vt)
            ) {
              if (X.nodeName) {
                var qe = Y(X.nodeName);
                if (!Ue[qe] || Bt[qe])
                  throw z(
                    "root node is forbidden and cannot be sanitized in-place",
                  );
              }
            } else if (X instanceof At)
              (P = Ia("<!---->")),
                (J = P.ownerDocument.importNode(X, !0)),
                (J.nodeType === 1 && J.nodeName === "BODY") ||
                J.nodeName === "HTML"
                  ? (P = J)
                  : P.appendChild(J);
            else {
              if (!Pt && !kt && !St && X.indexOf("<") === -1)
                return bt && on ? bt.createHTML(X) : X;
              if (((P = Ia(X)), !P)) return Pt ? null : on ? Gn : "";
            }
            P && Gt && rt(P.firstChild);
            for (var qn = ja(Vt ? X : P); (Se = qn.nextNode()); )
              (Se.nodeType === 3 && Se === nt) ||
                Fa(Se) ||
                (Se.content instanceof Le && Hc(Se.content), za(Se), (nt = Se));
            if (((nt = null), Vt)) return X;
            if (Pt) {
              if (ln)
                for (it = zt.call(P.ownerDocument); P.firstChild; )
                  it.appendChild(P.firstChild);
              else it = P;
              return Je.shadowroot && (it = pi.call(q, it, !0)), it;
            }
            var _t = St ? P.outerHTML : P.innerHTML;
            return (
              kt && ((_t = H(_t, yt, " ")), (_t = H(_t, En, " "))),
              bt && on ? bt.createHTML(_t) : _t
            );
          }),
          (V.setConfig = function (X) {
            Wt(X), (Sn = !0);
          }),
          (V.clearConfig = function () {
            (Oe = null), (Sn = !1);
          }),
          (V.isValidAttribute = function (X, _, P) {
            Oe || Wt({});
            var J = Y(X),
              Se = Y(_);
            return Ua(J, Se, P);
          }),
          (V.addHook = function (X, _) {
            typeof _ == "function" && ((st[X] = st[X] || []), R(st[X], _));
          }),
          (V.removeHook = function (X) {
            st[X] && L(st[X]);
          }),
          (V.removeHooks = function (X) {
            st[X] && (st[X] = []);
          }),
          (V.removeAllHooks = function () {
            st = {};
          }),
          V
        );
      }
      var Ht = $e();
      return Ht;
    });
  });
  function cr(n, e, t) {
    const i = n.slice();
    return (i[6] = e[t]), i;
  }
  function dr(n) {
    let e,
      t,
      i = n[2] && Array.isArray(n[2]) && n[2].length > 0,
      r = typeof n[1] !== null && fr(n),
      l = i && ur(n);
    return {
      c() {
        r && r.c(),
          (e = x()),
          (t = v("div")),
          l && l.c(),
          f(t, "class", "attachment");
      },
      m(a, s) {
        r && r.m(a, s), p(a, e, s), p(a, t, s), l && l.m(t, null);
      },
      p(a, s) {
        typeof a[1] !== null
          ? r
            ? r.p(a, s)
            : ((r = fr(a)), r.c(), r.m(e.parentNode, e))
          : r && (r.d(1), (r = null)),
          s & 4 && (i = a[2] && Array.isArray(a[2]) && a[2].length > 0),
          i
            ? l
              ? l.p(a, s)
              : ((l = ur(a)), l.c(), l.m(t, null))
            : l && (l.d(1), (l = null));
      },
      d(a) {
        r && r.d(a), a && m(e), a && m(t), l && l.d();
      },
    };
  }
  function fr(n) {
    let e,
      t = $t.sanitize(n[1]) + "",
      i;
    return {
      c() {
        (e = new ni()), (i = Me()), (e.a = i);
      },
      m(r, l) {
        e.m(t, r, l), p(r, i, l);
      },
      p(r, l) {
        l & 2 && t !== (t = $t.sanitize(r[1]) + "") && e.p(t);
      },
      d(r) {
        r && m(i), r && e.d();
      },
    };
  }
  function ur(n) {
    let e,
      t = n[2],
      i = [];
    for (let r = 0; r < t.length; r += 1) i[r] = mr(cr(n, t, r));
    return {
      c() {
        for (let r = 0; r < i.length; r += 1) i[r].c();
        e = Me();
      },
      m(r, l) {
        for (let a = 0; a < i.length; a += 1) i[a].m(r, l);
        p(r, e, l);
      },
      p(r, l) {
        if (l & 12) {
          t = r[2];
          let a;
          for (a = 0; a < t.length; a += 1) {
            const s = cr(r, t, a);
            i[a]
              ? i[a].p(s, l)
              : ((i[a] = mr(s)), i[a].c(), i[a].m(e.parentNode, e));
          }
          for (; a < i.length; a += 1) i[a].d(1);
          i.length = t.length;
        }
      },
      d(r) {
        wt(i, r), r && m(e);
      },
    };
  }
  function mr(n) {
    let e,
      t = (n[6].filename || n[6].id) + "",
      i,
      r,
      l,
      a;
    function s(...o) {
      return n[4](n[6], ...o);
    }
    return {
      c() {
        (e = v("button")), (i = Z(t)), (r = x());
      },
      m(o, c) {
        p(o, e, c),
          b(e, i),
          b(e, r),
          l || ((a = he(e, "click", Ke(s))), (l = !0));
      },
      p(o, c) {
        (n = o),
          c & 4 && t !== (t = (n[6].filename || n[6].id) + "") && ue(i, t);
      },
      d(o) {
        o && m(e), (l = !1), a();
      },
    };
  }
  function Yo(n) {
    let e,
      t = n[0] && dr(n);
    return {
      c() {
        (e = v("div")), t && t.c(), (this.c = k);
      },
      m(i, r) {
        p(i, e, r), t && t.m(e, null);
      },
      p(i, [r]) {
        i[0]
          ? t
            ? t.p(i, r)
            : ((t = dr(i)), t.c(), t.m(e, null))
          : t && (t.d(1), (t = null));
      },
      i: k,
      o: k,
      d(i) {
        i && m(e), t && t.d();
      },
    };
  }
  function Zo(n, e, t) {
    let { message: i } = e,
      { body: r } = e;
    const l = di(Yt());
    async function a(c, d) {
      c.stopImmediatePropagation(),
        l("downloadClicked", { event: c, message: i, file: d });
    }
    let s = [];
    yi(() => {
      if (i && i.files.length > 0)
        for (const [c, d] of i.files.entries())
          sr(d) && t(2, (s = [...s, i.files[c]]));
    });
    const o = (c, d) => a(d, c);
    return (
      (n.$$set = (c) => {
        "message" in c && t(0, (i = c.message)),
          "body" in c && t(1, (r = c.body));
      }),
      [i, r, s, a, o]
    );
  }
  class Ko extends Kt {
    constructor(e) {
      super();
      (this.shadowRoot.innerHTML =
        "<style>div{width:inherit}div div.attachment{margin:1rem 0 0 0;display:flex;gap:0.5rem}div div.attachment button{height:fit-content;width:max-content;padding:0.3rem 1rem;border:1px solid var(--grey);border-radius:30px;background:white;cursor:pointer}div div.attachment button:hover{background:var(--grey-light)}</style>"),
        Xe(
          this,
          {
            target: this.shadowRoot,
            props: un(this.attributes),
            customElement: !0,
          },
          Zo,
          Yo,
          Ze,
          { message: 0, body: 1 },
          null,
        ),
        e &&
          (e.target && p(e.target, this, e.anchor),
          e.props && (this.$set(e.props), de()));
    }
    static get observedAttributes() {
      return ["message", "body"];
    }
    get message() {
      return this.$$.ctx[0];
    }
    set message(e) {
      this.$$set({ message: e }), de();
    }
    get body() {
      return this.$$.ctx[1];
    }
    set body(e) {
      this.$$set({ body: e }), de();
    }
  }
  customElements.define("nylas-message-body", Ko);
  function _r(n) {
    let e, t;
    return {
      c() {
        (e = v("p")), (t = Z(n[3]));
      },
      m(i, r) {
        p(i, e, r), b(e, t);
      },
      p(i, r) {
        r & 8 && ue(t, i[3]);
      },
      d(i) {
        i && m(e);
      },
    };
  }
  function hr(n) {
    let e, t, i;
    var r = n[2];
    function l(a) {
      return { props: { "aria-hidden": "true" } };
    }
    return (
      r && (t = new r(l())),
      {
        c() {
          (e = v("div")),
            t && ze(t.$$.fragment),
            f(e, "class", "icon-container"),
            Ae(e, "reverse-icon", n[2] && n[4]);
        },
        m(a, s) {
          p(a, e, s), t && Fe(t, e, null), (i = !0);
        },
        p(a, s) {
          if (r !== (r = a[2])) {
            if (t) {
              ke();
              const o = t;
              j(o.$$.fragment, 1, 0, () => {
                Ie(o, 1);
              }),
                Ee();
            }
            r
              ? ((t = new r(l())),
                ze(t.$$.fragment),
                C(t.$$.fragment, 1),
                Fe(t, e, null))
              : (t = null);
          }
          s & 20 && Ae(e, "reverse-icon", a[2] && a[4]);
        },
        i(a) {
          i || (t && C(t.$$.fragment, a), (i = !0));
        },
        o(a) {
          t && j(t.$$.fragment, a), (i = !1);
        },
        d(a) {
          a && m(e), t && Ie(t);
        },
      }
    );
  }
  function pr(n) {
    let e, t;
    return {
      c() {
        (e = v("p")),
          (t = Z(n[0])),
          f(e, "id", n[1]),
          f(e, "role", "tooltip"),
          f(e, "tabindex", "0"),
          f(e, "class", "tooltip");
      },
      m(i, r) {
        p(i, e, r), b(e, t);
      },
      p(i, r) {
        r & 1 && ue(t, i[0]), r & 2 && f(e, "id", i[1]);
      },
      d(i) {
        i && m(e);
      },
    };
  }
  function Xo(n) {
    let e,
      t,
      i,
      r,
      l,
      a,
      s,
      o,
      c,
      d,
      h = n[3] && _r(n),
      w = n[2] && hr(n),
      O = n[4] && pr(n);
    return {
      c() {
        (e = v("button")),
          h && h.c(),
          (t = x()),
          w && w.c(),
          (a = x()),
          O && O.c(),
          (s = Me()),
          (this.c = k),
          f(e, "class", "tooltip-trigger"),
          f(e, "aria-expanded", (i = n[4] ? "true" : "false")),
          f(e, "id", (r = n[1] ? `tooltip-trigger-${n[1]}` : "")),
          f(e, "aria-describedby", n[1]),
          f(e, "aria-label", (l = n[4] ? "hide email" : "show email"));
      },
      m(y, L) {
        p(y, e, L),
          h && h.m(e, null),
          b(e, t),
          w && w.m(e, null),
          p(y, a, L),
          O && O.m(y, L),
          p(y, s, L),
          (o = !0),
          c || ((d = he(e, "click", Ke(n[7]))), (c = !0));
      },
      p(y, [L]) {
        y[3]
          ? h
            ? h.p(y, L)
            : ((h = _r(y)), h.c(), h.m(e, t))
          : h && (h.d(1), (h = null)),
          y[2]
            ? w
              ? (w.p(y, L), L & 4 && C(w, 1))
              : ((w = hr(y)), w.c(), C(w, 1), w.m(e, null))
            : w &&
              (ke(),
              j(w, 1, 1, () => {
                w = null;
              }),
              Ee()),
          (!o || (L & 16 && i !== (i = y[4] ? "true" : "false"))) &&
            f(e, "aria-expanded", i),
          (!o ||
            (L & 2 && r !== (r = y[1] ? `tooltip-trigger-${y[1]}` : ""))) &&
            f(e, "id", r),
          (!o || L & 2) && f(e, "aria-describedby", y[1]),
          (!o || (L & 16 && l !== (l = y[4] ? "hide email" : "show email"))) &&
            f(e, "aria-label", l),
          y[4]
            ? O
              ? O.p(y, L)
              : ((O = pr(y)), O.c(), O.m(s.parentNode, s))
            : O && (O.d(1), (O = null));
      },
      i(y) {
        o || (C(w), (o = !0));
      },
      o(y) {
        j(w), (o = !1);
      },
      d(y) {
        y && m(e),
          h && h.d(),
          w && w.d(),
          y && m(a),
          O && O.d(y),
          y && m(s),
          (c = !1),
          d();
      },
    };
  }
  function Qo(n, e, t) {
    let i;
    const r = di(Yt());
    let { current_tooltip_id: l } = e,
      { content: a } = e,
      { id: s } = e,
      { icon: o } = e,
      { text: c } = e;
    function d() {
      l !== s ? r("toggleTooltip", { tooltipID: s }) : t(4, (i = !i));
    }
    const h = (w) => d();
    return (
      (n.$$set = (w) => {
        "current_tooltip_id" in w && t(6, (l = w.current_tooltip_id)),
          "content" in w && t(0, (a = w.content)),
          "id" in w && t(1, (s = w.id)),
          "icon" in w && t(2, (o = w.icon)),
          "text" in w && t(3, (c = w.text));
      }),
      (n.$$.update = () => {
        n.$$.dirty & 66 && t(4, (i = !!(l && l === s)));
      }),
      [a, s, o, c, i, d, l, h]
    );
  }
  class $o extends Kt {
    constructor(e) {
      super();
      (this.shadowRoot.innerHTML =
        "<style>button.tooltip-trigger{background:transparent;border:none;box-shadow:none;cursor:pointer;padding:0;height:auto;display:flex;flex-direction:row;align-items:center;align-content:center;justify-content:center}.icon-container{width:1rem}.icon-container.reverse-icon{transform:rotate(180deg)}p.tooltip{background:var(--grey-lightest);border-radius:2px;color:var(--grey-dark);box-shadow:0px 3px 2px rgba(0, 0, 0, 0.25);left:50%;padding:0.5rem;position:absolute;top:8px;transform:translate(-50%, 0);width:max-content;max-width:240px;max-height:240px;overflow-y:scroll;word-break:break-word;white-space:pre-line;z-index:1}</style>"),
        Xe(
          this,
          {
            target: this.shadowRoot,
            props: un(this.attributes),
            customElement: !0,
          },
          Qo,
          Xo,
          Ze,
          { current_tooltip_id: 6, content: 0, id: 1, icon: 2, text: 3 },
          null,
        ),
        e &&
          (e.target && p(e.target, this, e.anchor),
          e.props && (this.$set(e.props), de()));
    }
    static get observedAttributes() {
      return ["current_tooltip_id", "content", "id", "icon", "text"];
    }
    get current_tooltip_id() {
      return this.$$.ctx[6];
    }
    set current_tooltip_id(e) {
      this.$$set({ current_tooltip_id: e }), de();
    }
    get content() {
      return this.$$.ctx[0];
    }
    set content(e) {
      this.$$set({ content: e }), de();
    }
    get id() {
      return this.$$.ctx[1];
    }
    set id(e) {
      this.$$set({ id: e }), de();
    }
    get icon() {
      return this.$$.ctx[2];
    }
    set icon(e) {
      this.$$set({ icon: e }), de();
    }
    get text() {
      return this.$$.ctx[3];
    }
    set text(e) {
      this.$$set({ text: e }), de();
    }
  }
  customElements.define("nylas-tooltip", $o);
  var Hn;
  (function (n) {
    (n.Label = "label"), (n.Folder = "folder");
  })(Hn || (Hn = {}));
  var gr;
  (function (n) {
    (n.RUNNING = "running"), (n.PARTIAL = "partial"), (n.STOPPED = "stopped");
  })(gr || (gr = {}));
  var vr;
  (function (n) {
    (n.SELECTALL = "selectall"),
      (n.DELETE = "delete"),
      (n.STAR = "star"),
      (n.UNREAD = "unread");
  })(vr || (vr = {}));
  var Lt;
  (function (n) {
    (n.DRAFTS = "drafts"), (n.MESSAGES = "messages");
  })(Lt || (Lt = {}));
  var br;
  (function (n) {
    (n.DEFAULT = "default"), (n.CUSTOM = "custom");
  })(br || (br = {}));
  const qo = async (n) => {
    const e = `${Ve(n.component_id)}/labels`;
    return await fetch(e, Ge(n))
      .then((t) => Be(t))
      .then((t) => t.response)
      .catch((t) => We(n.component_id, t));
  };
  var es = Object.defineProperty,
    wr = Object.getOwnPropertySymbols,
    ts = Object.prototype.hasOwnProperty,
    ns = Object.prototype.propertyIsEnumerable,
    yr = (n, e, t) =>
      e in n
        ? es(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (n[e] = t),
    is = (n, e) => {
      for (var t in e || (e = {})) ts.call(e, t) && yr(n, t, e[t]);
      if (wr) for (var t of wr(e)) ns.call(e, t) && yr(n, t, e[t]);
      return n;
    };
  function rs() {
    const { subscribe: n, set: e, update: t } = ht({}),
      i = {};
    return {
      subscribe: n,
      getLabels: async (r, l = !1) => {
        const a = JSON.stringify(r);
        return (
          (!i[a] || l) &&
            (r.component_id || r.access_token) &&
            (i[a] = (await qo(r)).map((s) => ((s.toString = () => s.id), s))),
          t((s) => ((s[a] = i[a]), is({}, s))),
          i[a]
        );
      },
      reset: () => e({}),
    };
  }
  const as = rs(),
    ls = async (n) => {
      const e = `${Ve(n.component_id)}/folders`;
      return await fetch(e, Ge(n))
        .then((t) => Be(t))
        .then((t) => t.response)
        .catch((t) => We(n.component_id, t));
    };
  var os = Object.defineProperty,
    kr = Object.getOwnPropertySymbols,
    ss = Object.prototype.hasOwnProperty,
    cs = Object.prototype.propertyIsEnumerable,
    Er = (n, e, t) =>
      e in n
        ? os(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (n[e] = t),
    ds = (n, e) => {
      for (var t in e || (e = {})) ss.call(e, t) && Er(n, t, e[t]);
      if (kr) for (var t of kr(e)) cs.call(e, t) && Er(n, t, e[t]);
      return n;
    };
  function fs() {
    const { subscribe: n, set: e, update: t } = ht({}),
      i = {};
    return {
      subscribe: n,
      getFolders: async (r, l = !1) => {
        const a = JSON.stringify(r);
        return (
          (!i[a] || l) &&
            (r.component_id || r.access_token) &&
            (i[a] = (await ls(r)).map((s) => ((s.toString = () => s.id), s))),
          t((s) => ((s[a] = i[a]), ds({}, s))),
          i[a]
        );
      },
      reset: () => e({}),
    };
  }
  const us = fs();
  function ms(n) {
    let e,
      t,
      i,
      r,
      l,
      a,
      s,
      o,
      c,
      d,
      h,
      w = [
        { id: "Capa_1" },
        { "enable-background": "new 0 0 497 497" },
        { height: "512" },
        { viewBox: "0 0 497 497" },
        { xmlns: "http://www.w3.org/2000/svg" },
        n[0],
      ],
      O = {};
    for (let y = 0; y < w.length; y += 1) O = fe(O, w[y]);
    return {
      c() {
        (e = ne("svg")),
          (t = ne("g")),
          (i = ne("circle")),
          (r = ne("circle")),
          (l = ne("circle")),
          (a = ne("ellipse")),
          (s = ne("ellipse")),
          (o = ne("ellipse")),
          (c = ne("ellipse")),
          (d = ne("ellipse")),
          (h = ne("circle")),
          this.h();
      },
      l(y) {
        e = re(y, "svg", {
          id: !0,
          "enable-background": !0,
          height: !0,
          viewBox: !0,
          xmlns: !0,
        });
        var L = ie(e);
        t = re(L, "g", {});
        var R = ie(t);
        (i = re(R, "circle", { cx: !0, cy: !0, fill: !0, r: !0 })),
          ie(i).forEach(m),
          (r = re(R, "circle", { cx: !0, cy: !0, fill: !0, r: !0 })),
          ie(r).forEach(m),
          (l = re(R, "circle", { cx: !0, cy: !0, fill: !0, r: !0 })),
          ie(l).forEach(m),
          (a = re(R, "ellipse", { cx: !0, cy: !0, fill: !0, rx: !0, ry: !0 })),
          ie(a).forEach(m),
          (s = re(R, "ellipse", { cx: !0, cy: !0, fill: !0, rx: !0, ry: !0 })),
          ie(s).forEach(m),
          (o = re(R, "ellipse", { cx: !0, cy: !0, fill: !0, rx: !0, ry: !0 })),
          ie(o).forEach(m),
          (c = re(R, "ellipse", { cx: !0, cy: !0, fill: !0, rx: !0, ry: !0 })),
          ie(c).forEach(m),
          (d = re(R, "ellipse", { cx: !0, cy: !0, fill: !0, rx: !0, ry: !0 })),
          ie(d).forEach(m),
          (h = re(R, "circle", { cx: !0, cy: !0, fill: !0, r: !0 })),
          ie(h).forEach(m),
          R.forEach(m),
          L.forEach(m),
          this.h();
      },
      h() {
        f(i, "cx", "98"),
          f(i, "cy", "376"),
          f(i, "fill", "#909ba6"),
          f(i, "r", "53"),
          f(r, "cx", "439"),
          f(r, "cy", "336"),
          f(r, "fill", "#c8d2dc"),
          f(r, "r", "46"),
          f(l, "cx", "397"),
          f(l, "cy", "112"),
          f(l, "fill", "#e9edf1"),
          f(l, "r", "38"),
          f(a, "cx", "56.245"),
          f(a, "cy", "244.754"),
          f(a, "fill", "#7e8b96"),
          f(a, "rx", "56.245"),
          f(a, "ry", "54.874"),
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
          f(h, "cx", "263"),
          f(h, "cy", "62"),
          f(h, "fill", "#4e5a61"),
          f(h, "r", "62"),
          De(e, O);
      },
      m(y, L) {
        ct(y, e, L),
          ge(e, t),
          ge(t, i),
          ge(t, r),
          ge(t, l),
          ge(t, a),
          ge(t, s),
          ge(t, o),
          ge(t, c),
          ge(t, d),
          ge(t, h);
      },
      p(y, [L]) {
        De(
          e,
          (O = ft(w, [
            { id: "Capa_1" },
            { "enable-background": "new 0 0 497 497" },
            { height: "512" },
            { viewBox: "0 0 497 497" },
            { xmlns: "http://www.w3.org/2000/svg" },
            L & 1 && y[0],
          ])),
        );
      },
      i: k,
      o: k,
      d(y) {
        y && m(e);
      },
    };
  }
  function _s(n, e, t) {
    return (
      (n.$$set = (i) => {
        t(0, (e = fe(fe({}, e), Ce(i))));
      }),
      (e = Ce(e)),
      [e]
    );
  }
  class hs extends ut {
    constructor(e) {
      super();
      Xe(this, e, _s, ms, Ze, {});
    }
  }
  function ps(n) {
    let e,
      t,
      i,
      r,
      l = [
        { width: "21px" },
        { height: "21px" },
        { viewBox: "0 0 21 21" },
        { xmlns: "http://www.w3.org/2000/svg" },
        n[0],
      ],
      a = {};
    for (let s = 0; s < l.length; s += 1) a = fe(a, l[s]);
    return {
      c() {
        (e = ne("svg")),
          (t = ne("g")),
          (i = ne("path")),
          (r = ne("path")),
          this.h();
      },
      l(s) {
        e = re(s, "svg", { width: !0, height: !0, viewBox: !0, xmlns: !0 });
        var o = ie(e);
        t = re(o, "g", {
          fill: !0,
          "fill-rule": !0,
          stroke: !0,
          "stroke-linecap": !0,
          "stroke-linejoin": !0,
          "stroke-width": !0,
          transform: !0,
        });
        var c = ie(t);
        (i = re(c, "path", { d: !0 })),
          ie(i).forEach(m),
          (r = re(c, "path", { d: !0 })),
          ie(r).forEach(m),
          c.forEach(m),
          o.forEach(m),
          this.h();
      },
      h() {
        f(i, "d", "m11 8v-2c0-1.65685425-1.34314575-3-3-3h-8"),
          f(r, "d", "m3 6-3.001-3 3.001-3"),
          f(t, "fill", "none"),
          f(t, "fill-rule", "evenodd"),
          f(t, "stroke", "currentColor"),
          f(t, "stroke-linecap", "round"),
          f(t, "stroke-linejoin", "round"),
          f(t, "stroke-width", "1.5px"),
          f(t, "transform", "translate(4.5 6.5)"),
          De(e, a);
      },
      m(s, o) {
        ct(s, e, o), ge(e, t), ge(t, i), ge(t, r);
      },
      p(s, [o]) {
        De(
          e,
          (a = ft(l, [
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
        s && m(e);
      },
    };
  }
  function gs(n, e, t) {
    return (
      (n.$$set = (i) => {
        t(0, (e = fe(fe({}, e), Ce(i))));
      }),
      (e = Ce(e)),
      [e]
    );
  }
  class Tr extends ut {
    constructor(e) {
      super();
      Xe(this, e, gs, ps, Ze, {});
    }
  }
  function vs(n) {
    let e,
      t,
      i,
      r,
      l,
      a = [
        { width: "21px" },
        { height: "21px" },
        { viewBox: "0 0 21 21" },
        { xmlns: "http://www.w3.org/2000/svg" },
        n[0],
      ],
      s = {};
    for (let o = 0; o < a.length; o += 1) s = fe(s, a[o]);
    return {
      c() {
        (e = ne("svg")),
          (t = ne("g")),
          (i = ne("path")),
          (r = ne("path")),
          (l = ne("path")),
          this.h();
      },
      l(o) {
        e = re(o, "svg", { width: !0, height: !0, viewBox: !0, xmlns: !0 });
        var c = ie(e);
        t = re(c, "g", {
          fill: !0,
          "fill-rule": !0,
          stroke: !0,
          "stroke-linecap": !0,
          "stroke-linejoin": !0,
          "stroke-width": !0,
          transform: !0,
        });
        var d = ie(t);
        (i = re(d, "path", { d: !0 })),
          ie(i).forEach(m),
          (r = re(d, "path", { d: !0 })),
          ie(r).forEach(m),
          (l = re(d, "path", { d: !0 })),
          ie(l).forEach(m),
          d.forEach(m),
          c.forEach(m),
          this.h();
      },
      h() {
        f(i, "d", "m14 8v-2c0-1.65685425-1.3431458-3-3-3h-8"),
          f(r, "d", "m3 6-3.001-3 3.001-3"),
          f(l, "d", "m6 6-3.001-3 3.001-3"),
          f(t, "fill", "none"),
          f(t, "fill-rule", "evenodd"),
          f(t, "stroke", "currentColor"),
          f(t, "stroke-linecap", "round"),
          f(t, "stroke-linejoin", "round"),
          f(t, "stroke-width", "1.5px"),
          f(t, "transform", "translate(3.5 6.5)"),
          De(e, s);
      },
      m(o, c) {
        ct(o, e, c), ge(e, t), ge(t, i), ge(t, r), ge(t, l);
      },
      p(o, [c]) {
        De(
          e,
          (s = ft(a, [
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
        o && m(e);
      },
    };
  }
  function bs(n, e, t) {
    return (
      (n.$$set = (i) => {
        t(0, (e = fe(fe({}, e), Ce(i))));
      }),
      (e = Ce(e)),
      [e]
    );
  }
  class Ar extends ut {
    constructor(e) {
      super();
      Xe(this, e, bs, vs, Ze, {});
    }
  }
  function ws(n) {
    let e,
      t,
      i,
      r,
      l = [
        { width: "21px" },
        { height: "21px" },
        { viewBox: "0 0 21 21" },
        { xmlns: "http://www.w3.org/2000/svg" },
        n[0],
      ],
      a = {};
    for (let s = 0; s < l.length; s += 1) a = fe(a, l[s]);
    return {
      c() {
        (e = ne("svg")),
          (t = ne("g")),
          (i = ne("path")),
          (r = ne("path")),
          this.h();
      },
      l(s) {
        e = re(s, "svg", { width: !0, height: !0, viewBox: !0, xmlns: !0 });
        var o = ie(e);
        t = re(o, "g", {
          fill: !0,
          "fill-rule": !0,
          stroke: !0,
          "stroke-linecap": !0,
          "stroke-linejoin": !0,
          "stroke-width": !0,
          transform: !0,
        });
        var c = ie(t);
        (i = re(c, "path", { d: !0 })),
          ie(i).forEach(m),
          (r = re(c, "path", { d: !0 })),
          ie(r).forEach(m),
          c.forEach(m),
          o.forEach(m),
          this.h();
      },
      h() {
        f(i, "d", "m0 8v-2c0-1.65685425 1.34314575-3 3-3h8"),
          f(r, "d", "m7.999 6 3.001-3-3.001-3"),
          f(t, "fill", "none"),
          f(t, "fill-rule", "evenodd"),
          f(t, "stroke", "currentColor"),
          f(t, "stroke-linecap", "round"),
          f(t, "stroke-linejoin", "round"),
          f(t, "stroke-width", "1.5px"),
          f(t, "transform", "translate(5.5 6.5)"),
          De(e, a);
      },
      m(s, o) {
        ct(s, e, o), ge(e, t), ge(t, i), ge(t, r);
      },
      p(s, [o]) {
        De(
          e,
          (a = ft(l, [
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
        s && m(e);
      },
    };
  }
  function ys(n, e, t) {
    return (
      (n.$$set = (i) => {
        t(0, (e = fe(fe({}, e), Ce(i))));
      }),
      (e = Ce(e)),
      [e]
    );
  }
  class Or extends ut {
    constructor(e) {
      super();
      Xe(this, e, ys, ws, Ze, {});
    }
  }
  var ks = "@nylas/components-email",
    Es = "1.1.7-canary.32",
    Ts = {
      type: "git",
      url: "github:nylas/components.git",
      directory: "components/email",
    },
    As = {
      build: "rollup -c",
      dev: "rollup -c -w",
      tscheck: "tsc && svelte-check",
      start: "echo 'Nothing to start'",
    },
    Os = "index.js",
    Ss = "cca94159c114ecff613f41caa0a4468e0f698e2c",
    Cs = { "@types/dompurify": "^2.3.1" },
    Ns = { dompurify: "^2.3.3" },
    Ls = {
      name: ks,
      version: Es,
      repository: Ts,
      scripts: As,
      main: Os,
      gitHead: Ss,
      devDependencies: Cs,
      dependencies: Ns,
    };
  function Sr(n, e, t) {
    const i = n.slice();
    return (i[124] = e[t]), (i[126] = t), i;
  }
  function Cr(n, e, t) {
    const i = n.slice();
    return (i[134] = e[t]), i;
  }
  function Nr(n, e, t) {
    const i = n.slice();
    return (i[129] = e[t]), i;
  }
  function Lr(n, e, t) {
    const i = n.slice();
    return (i[139] = e[t]), (i[141] = t), i;
  }
  function Mr(n, e, t) {
    const i = n.slice();
    return (i[120] = e[t]), (i[121] = e), (i[122] = t), i;
  }
  function Dr(n, e, t) {
    const i = n.slice();
    return (i[124] = e[t]), (i[126] = t), i;
  }
  function Pr(n, e, t) {
    const i = n.slice();
    return (i[2] = e[t]), (i[127] = e), (i[128] = t), i;
  }
  function Rr(n, e, t) {
    const i = n.slice();
    return (i[129] = e[t]), i;
  }
  function Ir(n, e, t) {
    const i = n.slice();
    return (i[124] = e[t]), (i[126] = t), i;
  }
  function jr(n) {
    let e, t, i;
    return {
      c() {
        (e = v("link")), f(e, "rel", "stylesheet"), f(e, "href", n[16]);
      },
      m(r, l) {
        p(r, e, l),
          t || ((i = [he(e, "load", n[78]), he(e, "error", n[79])]), (t = !0));
      },
      p(r, l) {
        l[0] & 65536 && f(e, "href", r[16]);
      },
      d(r) {
        r && m(e), (t = !1), at(i);
      },
    };
  }
  function Ms(n) {
    let e = Object.keys(n[4].message).length > 0,
      t,
      i,
      r = e && Fr(n);
    return {
      c() {
        r && r.c(), (t = Me());
      },
      m(l, a) {
        r && r.m(l, a), p(l, t, a), (i = !0);
      },
      p(l, a) {
        a[0] & 16 && (e = Object.keys(l[4].message).length > 0),
          e
            ? r
              ? (r.p(l, a), a[0] & 16 && C(r, 1))
              : ((r = Fr(l)), r.c(), C(r, 1), r.m(t.parentNode, t))
            : r &&
              (ke(),
              j(r, 1, 1, () => {
                r = null;
              }),
              Ee());
      },
      i(l) {
        i || (C(r), (i = !0));
      },
      o(l) {
        j(r), (i = !1);
      },
      d(l) {
        r && r.d(l), l && m(t);
      },
    };
  }
  function Ds(n) {
    let e,
      t,
      i,
      r = {
        ctx: n,
        current: null,
        token: null,
        hasCatch: !1,
        pending: Rc,
        then: Ws,
        catch: Vs,
        value: 3,
        blocks: [, , ,],
      };
    return (
      dt((t = n[7]), r),
      {
        c() {
          (e = Me()), r.block.c();
        },
        m(l, a) {
          p(l, e, a),
            r.block.m(l, (r.anchor = a)),
            (r.mount = () => e.parentNode),
            (r.anchor = e),
            (i = !0);
        },
        p(l, a) {
          (n = l),
            (r.ctx = n),
            (a[0] & 128 && t !== (t = n[7]) && dt(t, r)) || Zt(r, n, a);
        },
        i(l) {
          i || (C(r.block), (i = !0));
        },
        o(l) {
          for (let a = 0; a < 3; a += 1) {
            const s = r.blocks[a];
            j(s);
          }
          i = !1;
        },
        d(l) {
          l && m(e), r.block.d(l), (r.token = null), (r = null);
        },
      }
    );
  }
  function Fr(n) {
    var oe, M, pt, gt, Qe, je;
    let e,
      t,
      i = ((oe = n[4].message) == null ? void 0 : oe.subject) + "",
      r,
      l,
      a,
      s,
      o,
      c,
      d,
      h,
      w,
      O =
        (n[8] &&
        ((M = n[4].message) == null ? void 0 : M.from[0].email) === n[8]
          ? "me"
          : ((gt = (pt = n[4].message) == null ? void 0 : pt.from[0]) == null
              ? void 0
              : gt.name) ||
            ((je = (Qe = n[4].message) == null ? void 0 : Qe.from[0]) == null
              ? void 0
              : je.email)) + "",
      y,
      L,
      R,
      E,
      S,
      H,
      ae,
      K,
      W,
      z,
      G,
      T,
      N,
      _e = n[4].show_reply_all && n[28](n[4].message),
      pe,
      le,
      ee,
      Q,
      te,
      be,
      $ = n[4].show_contact_avatar && Ur(n),
      Pe = {
        ctx: n,
        current: null,
        token: null,
        hasCatch: !1,
        pending: zs,
        then: Rs,
        catch: Ps,
        value: 123,
      };
    dt(
      (K = n[38]({
        to: n[4].message.to,
        cc: n[4].message.cc,
        bcc: n[4].message.bcc,
      })),
      Pe,
    );
    let ve = n[4].show_received_timestamp && Br(n),
      se = n[4].show_reply && Gr(n),
      ye = _e && Vr(n),
      D = n[4].show_forward && Wr(n);
    function me(Ne, we) {
      if (Ne[4].clean_conversation && Ne[4].message.conversation) return Gs;
      if (Ne[4].message) return Bs;
    }
    let Ye = me(n),
      F = Ye && Ye(n);
    return {
      c() {
        var Ne, we;
        (e = v("div")),
          (t = v("header")),
          (r = Z(i)),
          (l = x()),
          (a = v("div")),
          (s = v("div")),
          (o = v("div")),
          (c = v("div")),
          $ && $.c(),
          (d = x()),
          (h = v("div")),
          (w = v("span")),
          (y = Z(O)),
          (L = x()),
          (R = v("nylas-tooltip")),
          (H = x()),
          (ae = v("div")),
          Pe.block.c(),
          (W = x()),
          (z = v("section")),
          ve && ve.c(),
          (G = x()),
          (T = v("div")),
          se && se.c(),
          (N = x()),
          ye && ye.c(),
          (pe = x()),
          D && D.c(),
          (le = x()),
          (ee = v("div")),
          F && F.c(),
          f(w, "class", "name"),
          U(R, "id", (E = (Ne = n[4].message) == null ? void 0 : Ne.id)),
          U(R, "current_tooltip_id", n[13]),
          U(R, "icon", Qt),
          U(
            R,
            "content",
            (S = (we = n[4].message) == null ? void 0 : we.from[0].email),
          ),
          f(h, "class", "message-from"),
          f(c, "class", "avatar-info"),
          f(ae, "class", "message-to"),
          f(o, "class", "message-from-to"),
          f(T, "aria-label", "Email Actions"),
          f(T, "role", "toolbar"),
          f(z, "class", ""),
          f(s, "class", "message-head"),
          f(ee, "class", "message-body"),
          f(a, "class", "individual-message expanded"),
          f(e, "class", "email-row expanded singular");
      },
      m(Ne, we) {
        p(Ne, e, we),
          b(e, t),
          b(t, r),
          b(e, l),
          b(e, a),
          b(a, s),
          b(s, o),
          b(o, c),
          $ && $.m(c, null),
          b(c, d),
          b(c, h),
          b(h, w),
          b(w, y),
          b(h, L),
          b(h, R),
          b(o, H),
          b(o, ae),
          Pe.block.m(ae, (Pe.anchor = null)),
          (Pe.mount = () => ae),
          (Pe.anchor = null),
          b(s, W),
          b(s, z),
          ve && ve.m(z, null),
          b(z, G),
          b(z, T),
          se && se.m(T, null),
          b(T, N),
          ye && ye.m(T, null),
          b(T, pe),
          D && D.m(T, null),
          b(a, le),
          b(a, ee),
          F && F.m(ee, null),
          (Q = !0),
          te || ((be = he(R, "toggleTooltip", n[34])), (te = !0));
      },
      p(Ne, we) {
        var $e, Ht, B, V, q, ce, Le, ot;
        (n = Ne),
          (!Q || we[0] & 16) &&
            i !==
              (i = (($e = n[4].message) == null ? void 0 : $e.subject) + "") &&
            ue(r, i),
          n[4].show_contact_avatar
            ? $
              ? $.p(n, we)
              : (($ = Ur(n)), $.c(), $.m(c, d))
            : $ && ($.d(1), ($ = null)),
          (!Q || we[0] & 272) &&
            O !==
              (O =
                (n[8] &&
                ((Ht = n[4].message) == null ? void 0 : Ht.from[0].email) ===
                  n[8]
                  ? "me"
                  : ((V = (B = n[4].message) == null ? void 0 : B.from[0]) ==
                    null
                      ? void 0
                      : V.name) ||
                    ((ce = (q = n[4].message) == null ? void 0 : q.from[0]) ==
                    null
                      ? void 0
                      : ce.email)) + "") &&
            ue(y, O),
          (!Q ||
            (we[0] & 16 &&
              E !== (E = (Le = n[4].message) == null ? void 0 : Le.id))) &&
            U(R, "id", E),
          (!Q || we[0] & 8192) && U(R, "current_tooltip_id", n[13]),
          (!Q ||
            (we[0] & 16 &&
              S !==
                (S =
                  (ot = n[4].message) == null ? void 0 : ot.from[0].email))) &&
            U(R, "content", S),
          (Pe.ctx = n),
          (we[0] & 16 &&
            K !==
              (K = n[38]({
                to: n[4].message.to,
                cc: n[4].message.cc,
                bcc: n[4].message.bcc,
              })) &&
            dt(K, Pe)) ||
            Zt(Pe, n, we),
          n[4].show_received_timestamp
            ? ve
              ? ve.p(n, we)
              : ((ve = Br(n)), ve.c(), ve.m(z, G))
            : ve && (ve.d(1), (ve = null)),
          n[4].show_reply
            ? se
              ? (se.p(n, we), we[0] & 16 && C(se, 1))
              : ((se = Gr(n)), se.c(), C(se, 1), se.m(T, N))
            : se &&
              (ke(),
              j(se, 1, 1, () => {
                se = null;
              }),
              Ee()),
          we[0] & 16 && (_e = n[4].show_reply_all && n[28](n[4].message)),
          _e
            ? ye
              ? (ye.p(n, we), we[0] & 16 && C(ye, 1))
              : ((ye = Vr(n)), ye.c(), C(ye, 1), ye.m(T, pe))
            : ye &&
              (ke(),
              j(ye, 1, 1, () => {
                ye = null;
              }),
              Ee()),
          n[4].show_forward
            ? D
              ? (D.p(n, we), we[0] & 16 && C(D, 1))
              : ((D = Wr(n)), D.c(), C(D, 1), D.m(T, null))
            : D &&
              (ke(),
              j(D, 1, 1, () => {
                D = null;
              }),
              Ee()),
          Ye === (Ye = me(n)) && F
            ? F.p(n, we)
            : (F && F.d(1), (F = Ye && Ye(n)), F && (F.c(), F.m(ee, null)));
      },
      i(Ne) {
        Q || (C(se), C(ye), C(D), (Q = !0));
      },
      o(Ne) {
        j(se), j(ye), j(D), (Q = !1);
      },
      d(Ne) {
        Ne && m(e),
          $ && $.d(),
          Pe.block.d(),
          (Pe.token = null),
          (Pe = null),
          ve && ve.d(),
          se && se.d(),
          ye && ye.d(),
          D && D.d(),
          F && F.d(),
          (te = !1),
          be();
      },
    };
  }
  function Ur(n) {
    let e, t;
    return {
      c() {
        (e = v("div")),
          (t = v("nylas-contact-image")),
          U(t, "contact_query", n[12]),
          U(t, "contact", n[17]),
          f(e, "class", "default-avatar");
      },
      m(i, r) {
        p(i, e, r), b(e, t);
      },
      p(i, r) {
        r[0] & 4096 && U(t, "contact_query", i[12]),
          r[0] & 131072 && U(t, "contact", i[17]);
      },
      d(i) {
        i && m(e);
      },
    };
  }
  function Ps(n) {
    return { c: k, m: k, p: k, d: k };
  }
  function Rs(n) {
    let e,
      t,
      i = n[123].slice(0, xe),
      r = [];
    for (let a = 0; a < i.length; a += 1) r[a] = Hr(Sr(n, i, a));
    let l = n[123].length > xe && zr(n);
    return {
      c() {
        for (let a = 0; a < r.length; a += 1) r[a].c();
        (e = x()), l && l.c(), (t = Me());
      },
      m(a, s) {
        for (let o = 0; o < r.length; o += 1) r[o].m(a, s);
        p(a, e, s), l && l.m(a, s), p(a, t, s);
      },
      p(a, s) {
        if ((s[0] & 16) | (s[1] & 128)) {
          i = a[123].slice(0, xe);
          let o;
          for (o = 0; o < i.length; o += 1) {
            const c = Sr(a, i, o);
            r[o]
              ? r[o].p(c, s)
              : ((r[o] = Hr(c)), r[o].c(), r[o].m(e.parentNode, e));
          }
          for (; o < r.length; o += 1) r[o].d(1);
          r.length = i.length;
        }
        a[123].length > xe
          ? l
            ? l.p(a, s)
            : ((l = zr(a)), l.c(), l.m(t.parentNode, t))
          : l && (l.d(1), (l = null));
      },
      d(a) {
        wt(r, a), a && m(e), l && l.d(a), a && m(t);
      },
    };
  }
  function Is(n) {
    let e;
    return {
      c() {
        e = Z("bcc:");
      },
      m(t, i) {
        p(t, e, i);
      },
      p: k,
      d(t) {
        t && m(e);
      },
    };
  }
  function js(n) {
    let e;
    return {
      c() {
        e = Z("cc:");
      },
      m(t, i) {
        p(t, e, i);
      },
      p: k,
      d(t) {
        t && m(e);
      },
    };
  }
  function Fs(n) {
    let e = `to ${
        n[4].you && n[124].email === n[4].you.email_address ? "Me" : ""
      }`,
      t;
    return {
      c() {
        t = Z(e);
      },
      m(i, r) {
        p(i, t, r);
      },
      p(i, r) {
        r[0] & 16 &&
          e !==
            (e = `to ${
              i[4].you && i[124].email === i[4].you.email_address ? "Me" : ""
            }`) &&
          ue(t, e);
      },
      d(i) {
        i && m(t);
      },
    };
  }
  function Us(n) {
    let e = n[124].email + "",
      t;
    return {
      c() {
        t = Z(e);
      },
      m(i, r) {
        p(i, t, r);
      },
      p(i, r) {
        r[0] & 16 && e !== (e = i[124].email + "") && ue(t, e);
      },
      d(i) {
        i && m(t);
      },
    };
  }
  function Hs(n) {
    var s;
    let e = ((s = n[124].name) != null ? s : n[4].you.name) + "",
      t,
      i,
      r = n[124].email + "",
      l,
      a;
    return {
      c() {
        (t = Z(e)), (i = Z(" <")), (l = Z(r)), (a = Z(">"));
      },
      m(o, c) {
        p(o, t, c), p(o, i, c), p(o, l, c), p(o, a, c);
      },
      p(o, c) {
        var d;
        c[0] & 16 &&
          e !== (e = ((d = o[124].name) != null ? d : o[4].you.name) + "") &&
          ue(t, e),
          c[0] & 16 && r !== (r = o[124].email + "") && ue(l, r);
      },
      d(o) {
        o && m(t), o && m(i), o && m(l), o && m(a);
      },
    };
  }
  function Hr(n) {
    let e, t;
    function i(c, d) {
      if (c[126] === 0) return Fs;
      if (c[124]._type === "cc" && c[126] === c[4].message.to.length) return js;
      if (
        c[124]._type === "bcc" &&
        c[126] === c[4].message.to.length + c[4].message.cc.length
      )
        return Is;
    }
    let r = i(n),
      l = r && r(n);
    function a(c, d) {
      if (c[124].email && c[124].name) return Hs;
      if (c[124].email && !c[124].name) return Us;
    }
    let s = a(n),
      o = s && s(n);
    return {
      c() {
        (e = v("p")), l && l.c(), (t = x()), o && o.c();
      },
      m(c, d) {
        p(c, e, d), l && l.m(e, null), b(e, t), o && o.m(e, null);
      },
      p(c, d) {
        r === (r = i(c)) && l
          ? l.p(c, d)
          : (l && l.d(1), (l = r && r(c)), l && (l.c(), l.m(e, t))),
          s === (s = a(c)) && o
            ? o.p(c, d)
            : (o && o.d(1), (o = s && s(c)), o && (o.c(), o.m(e, null)));
      },
      d(c) {
        c && m(e), l && l.d(), o && o.d();
      },
    };
  }
  function zr(n) {
    let e, t, i, r, l, a, s;
    return {
      c() {
        (e = v("div")),
          (t = v("nylas-tooltip")),
          U(t, "id", (i = `show-more-participants-${n[4].message.id}`)),
          U(t, "current_tooltip_id", n[13]),
          U(t, "icon", Qt),
          U(t, "text", (r = `And ${n[123].length - xe} more`)),
          U(t, "content", (l = `${qt(n[123])}`));
      },
      m(o, c) {
        p(o, e, c),
          b(e, t),
          a || ((s = he(t, "toggleTooltip", n[34])), (a = !0));
      },
      p(o, c) {
        c[0] & 16 &&
          i !== (i = `show-more-participants-${o[4].message.id}`) &&
          U(t, "id", i),
          c[0] & 8192 && U(t, "current_tooltip_id", o[13]),
          c[0] & 16 &&
            r !== (r = `And ${o[123].length - xe} more`) &&
            U(t, "text", r),
          c[0] & 16 && l !== (l = `${qt(o[123])}`) && U(t, "content", l);
      },
      d(o) {
        o && m(e), (a = !1), s();
      },
    };
  }
  function zs(n) {
    return { c: k, m: k, p: k, d: k };
  }
  function Br(n) {
    let e,
      t,
      i = Mt(new Date(n[4].message.date * 1e3)) + "",
      r;
    return {
      c() {
        (e = v("div")),
          (t = v("span")),
          (r = Z(i)),
          f(e, "class", "message-date");
      },
      m(l, a) {
        p(l, e, a), b(e, t), b(t, r);
      },
      p(l, a) {
        a[0] & 16 &&
          i !== (i = Mt(new Date(l[4].message.date * 1e3)) + "") &&
          ue(r, i);
      },
      d(l) {
        l && m(e);
      },
    };
  }
  function Gr(n) {
    let e, t, i, r, l, a;
    return (
      (i = new Tr({ props: { "aria-hidden": "true" } })),
      {
        c() {
          (e = v("div")),
            (t = v("button")),
            ze(i.$$.fragment),
            f(t, "title", "Reply"),
            f(t, "aria-label", "Reply"),
            f(e, "class", "reply");
        },
        m(s, o) {
          p(s, e, o),
            b(e, t),
            Fe(i, t, null),
            (r = !0),
            l || ((a = he(t, "click", Ke(n[92]))), (l = !0));
        },
        p: k,
        i(s) {
          r || (C(i.$$.fragment, s), (r = !0));
        },
        o(s) {
          j(i.$$.fragment, s), (r = !1);
        },
        d(s) {
          s && m(e), Ie(i), (l = !1), a();
        },
      }
    );
  }
  function Vr(n) {
    let e, t, i, r, l, a;
    return (
      (i = new Ar({ props: { "aria-hidden": "true" } })),
      {
        c() {
          (e = v("div")),
            (t = v("button")),
            ze(i.$$.fragment),
            f(t, "title", "Reply all"),
            f(t, "aria-label", "Reply all"),
            f(e, "class", "reply-all");
        },
        m(s, o) {
          p(s, e, o),
            b(e, t),
            Fe(i, t, null),
            (r = !0),
            l || ((a = he(t, "click", Ke(n[93]))), (l = !0));
        },
        p: k,
        i(s) {
          r || (C(i.$$.fragment, s), (r = !0));
        },
        o(s) {
          j(i.$$.fragment, s), (r = !1);
        },
        d(s) {
          s && m(e), Ie(i), (l = !1), a();
        },
      }
    );
  }
  function Wr(n) {
    let e, t, i, r, l, a;
    return (
      (i = new Or({ props: { "aria-hidden": "true" } })),
      {
        c() {
          (e = v("div")),
            (t = v("button")),
            ze(i.$$.fragment),
            f(t, "title", "Forward"),
            f(t, "aria-label", "Forward"),
            f(e, "class", "forward");
        },
        m(s, o) {
          p(s, e, o),
            b(e, t),
            Fe(i, t, null),
            (r = !0),
            l || ((a = he(t, "click", Ke(n[94]))), (l = !0));
        },
        p: k,
        i(s) {
          r || (C(i.$$.fragment, s), (r = !0));
        },
        o(s) {
          j(i.$$.fragment, s), (r = !1);
        },
        d(s) {
          s && m(e), Ie(i), (l = !1), a();
        },
      }
    );
  }
  function Bs(n) {
    let e, t, i, r, l;
    return {
      c() {
        (e = v("nylas-message-body")),
          U(e, "message", (t = n[4].message)),
          U(e, "body", (i = n[4].message.body));
      },
      m(a, s) {
        p(a, e, s), r || ((l = he(e, "downloadClicked", n[37])), (r = !0));
      },
      p(a, s) {
        s[0] & 16 && t !== (t = a[4].message) && U(e, "message", t),
          s[0] & 16 && i !== (i = a[4].message.body) && U(e, "body", i);
      },
      d(a) {
        a && m(e), (r = !1), l();
      },
    };
  }
  function Gs(n) {
    var r, l;
    let e,
      t =
        $t.sanitize(
          (l = (r = n[4].message) == null ? void 0 : r.conversation) != null
            ? l
            : "",
        ) + "",
      i;
    return {
      c() {
        (e = new ni()), (i = Me()), (e.a = i);
      },
      m(a, s) {
        e.m(t, a, s), p(a, i, s);
      },
      p(a, s) {
        var o, c;
        s[0] & 16 &&
          t !==
            (t =
              $t.sanitize(
                (c = (o = a[4].message) == null ? void 0 : o.conversation) !=
                  null
                  ? c
                  : "",
              ) + "") &&
          e.p(t);
      },
      d(a) {
        a && m(i), a && e.d();
      },
    };
  }
  function Vs(n) {
    return { c: k, m: k, p: k, i: k, o: k, d: k };
  }
  function Ws(n) {
    let e,
      t,
      i = n[3] && n[7] && Jr(n);
    return {
      c() {
        i && i.c(), (e = Me());
      },
      m(r, l) {
        i && i.m(r, l), p(r, e, l), (t = !0);
      },
      p(r, l) {
        r[3] && r[7]
          ? i
            ? (i.p(r, l), l[0] & 128 && C(i, 1))
            : ((i = Jr(r)), i.c(), C(i, 1), i.m(e.parentNode, e))
          : i &&
            (ke(),
            j(i, 1, 1, () => {
              i = null;
            }),
            Ee());
      },
      i(r) {
        t || (C(i), (t = !0));
      },
      o(r) {
        j(i), (t = !1);
      },
      d(r) {
        i && i.d(r), r && m(e);
      },
    };
  }
  function Jr(n) {
    let e, t, i, r;
    const l = [xs, Js],
      a = [];
    function s(o, c) {
      return o[7].expanded ? 0 : 1;
    }
    return (
      (e = s(n)),
      (t = a[e] = l[e](n)),
      {
        c() {
          t.c(), (i = Me());
        },
        m(o, c) {
          a[e].m(o, c), p(o, i, c), (r = !0);
        },
        p(o, c) {
          let d = e;
          (e = s(o)),
            e === d
              ? a[e].p(o, c)
              : (ke(),
                j(a[d], 1, 1, () => {
                  a[d] = null;
                }),
                Ee(),
                (t = a[e]),
                t ? t.p(o, c) : ((t = a[e] = l[e](o)), t.c()),
                C(t, 1),
                t.m(i.parentNode, i));
        },
        i(o) {
          r || (C(t), (r = !0));
        },
        o(o) {
          j(t), (r = !1);
        },
        d(o) {
          a[e].d(o), o && m(i);
        },
      }
    );
  }
  function Js(n) {
    let e,
      t,
      i,
      r = {
        ctx: n,
        current: null,
        token: null,
        hasCatch: !1,
        pending: oc,
        then: Zs,
        catch: Ys,
        value: 133,
        blocks: [, , ,],
      };
    return (
      dt((t = Da(n[7])), r),
      {
        c() {
          (e = v("div")),
            r.block.c(),
            f(e, "class", "email-row condensed"),
            Ae(e, "show_star", n[4].show_star),
            Ae(e, "unread", n[7].unread),
            Ae(
              e,
              "disable-click",
              n[7] && n[7].messages.length <= 0 && !n[7].drafts.length,
            );
        },
        m(l, a) {
          p(l, e, a),
            r.block.m(e, (r.anchor = null)),
            (r.mount = () => e),
            (r.anchor = null),
            (i = !0);
        },
        p(l, a) {
          (n = l),
            (r.ctx = n),
            (a[0] & 128 && t !== (t = Da(n[7])) && dt(t, r)) || Zt(r, n, a),
            a[0] & 16 && Ae(e, "show_star", n[4].show_star),
            a[0] & 128 && Ae(e, "unread", n[7].unread),
            a[0] & 128 &&
              Ae(
                e,
                "disable-click",
                n[7] && n[7].messages.length <= 0 && !n[7].drafts.length,
              );
        },
        i(l) {
          i || (C(r.block), (i = !0));
        },
        o(l) {
          for (let a = 0; a < 3; a += 1) {
            const s = r.blocks[a];
            j(s);
          }
          i = !1;
        },
        d(l) {
          l && m(e), r.block.d(), (r.token = null), (r = null);
        },
      }
    );
  }
  function xs(n) {
    var G;
    let e,
      t,
      i,
      r,
      l,
      a = ((G = n[3]) == null ? void 0 : G.subject) + "",
      s,
      o,
      c,
      d,
      h,
      w,
      O,
      y,
      L,
      R,
      E = n[4].click_action === "mailbox" && la(n),
      S = n[4].show_star && oa(n),
      H = n[4].show_thread_actions && sa(n);
    const ae = [fc, dc],
      K = [];
    function W(T, N) {
      return T[7].messages.length ? 0 : 1;
    }
    (w = W(n)), (O = K[w] = ae[w](n));
    let z = n[7].drafts.length && ka(n);
    return {
      c() {
        (e = v("div")),
          (t = v("header")),
          (i = v("div")),
          E && E.c(),
          (r = x()),
          (l = v("h1")),
          (s = Z(a)),
          (o = x()),
          (c = v("div")),
          S && S.c(),
          (d = x()),
          H && H.c(),
          (h = x()),
          O.c(),
          (y = x()),
          z && z.c(),
          f(i, "class", "subject-title"),
          f(c, "role", "toolbar"),
          f(t, "class", "subject-header"),
          Ae(t, "mailbox", n[4].click_action === "mailbox"),
          f(
            e,
            "class",
            (L =
              "email-row expanded " +
              (n[4].click_action === "mailbox"
                ? "expanded-mailbox-thread"
                : "")),
          );
      },
      m(T, N) {
        p(T, e, N),
          b(e, t),
          b(t, i),
          E && E.m(i, null),
          b(i, r),
          b(i, l),
          b(l, s),
          b(t, o),
          b(t, c),
          S && S.m(c, null),
          b(c, d),
          H && H.m(c, null),
          b(e, h),
          K[w].m(e, null),
          b(e, y),
          z && z.m(e, null),
          (R = !0);
      },
      p(T, N) {
        var pe;
        T[4].click_action === "mailbox"
          ? E
            ? (E.p(T, N), N[0] & 16 && C(E, 1))
            : ((E = la(T)), E.c(), C(E, 1), E.m(i, r))
          : E &&
            (ke(),
            j(E, 1, 1, () => {
              E = null;
            }),
            Ee()),
          (!R || N[0] & 128) &&
            a !== (a = ((pe = T[3]) == null ? void 0 : pe.subject) + "") &&
            ue(s, a),
          T[4].show_star
            ? S
              ? S.p(T, N)
              : ((S = oa(T)), S.c(), S.m(c, d))
            : S && (S.d(1), (S = null)),
          T[4].show_thread_actions
            ? H
              ? (H.p(T, N), N[0] & 16 && C(H, 1))
              : ((H = sa(T)), H.c(), C(H, 1), H.m(c, null))
            : H &&
              (ke(),
              j(H, 1, 1, () => {
                H = null;
              }),
              Ee()),
          N[0] & 16 && Ae(t, "mailbox", T[4].click_action === "mailbox");
        let _e = w;
        (w = W(T)),
          w === _e
            ? K[w].p(T, N)
            : (ke(),
              j(K[_e], 1, 1, () => {
                K[_e] = null;
              }),
              Ee(),
              (O = K[w]),
              O ? O.p(T, N) : ((O = K[w] = ae[w](T)), O.c()),
              C(O, 1),
              O.m(e, y)),
          T[7].drafts.length
            ? z
              ? (z.p(T, N), N[0] & 128 && C(z, 1))
              : ((z = ka(T)), z.c(), C(z, 1), z.m(e, null))
            : z &&
              (ke(),
              j(z, 1, 1, () => {
                z = null;
              }),
              Ee()),
          (!R ||
            (N[0] & 16 &&
              L !==
                (L =
                  "email-row expanded " +
                  (T[4].click_action === "mailbox"
                    ? "expanded-mailbox-thread"
                    : "")))) &&
            f(e, "class", L);
      },
      i(T) {
        R || (C(E), C(H), C(O), C(z), (R = !0));
      },
      o(T) {
        j(E), j(H), j(O), j(z), (R = !1);
      },
      d(T) {
        T && m(e), E && E.d(), S && S.d(), H && H.d(), K[w].d(), z && z.d();
      },
    };
  }
  function Ys(n) {
    return { c: k, m: k, p: k, i: k, o: k, d: k };
  }
  function Zs(n) {
    var ve, se, ye;
    let e,
      t,
      i,
      r,
      l,
      a,
      s,
      o,
      c,
      d,
      h,
      w,
      O =
        (n[14]
          ? `Sorry, looks like this thread is currently unavailable. It may
                    have been deleted in your provider inbox.`
          : !((ve = n[3]) == null ? void 0 : ve.snippet) && n[133]
          ? "This is a draft email"
          : ((se = n[3]) == null ? void 0 : se.snippet)
          ? n[3].snippet.replace(/\u200C /g, "")
          : "") + "",
      y,
      L,
      R = Object.keys(n[15]).length > 0,
      E,
      S,
      H = n[7].has_attachments && Object.keys(n[15]).length > 0,
      ae,
      K,
      W,
      z,
      G = n[4].show_star && xr(n),
      T = n[4].show_contact_avatar && Yr(n);
    function N(D, me) {
      return D[14] ? qs : $s;
    }
    let _e = N(n),
      pe = _e(n),
      le = n[4].show_number_of_messages && ea(n),
      ee = ((ye = n[3]) == null ? void 0 : ye.subject) && ta(n),
      Q = R && na(n),
      te = H && aa();
    const be = [rc, ic],
      $ = [];
    function Pe(D, me) {
      return D[4].show_thread_actions
        ? 0
        : D[4].show_received_timestamp
        ? 1
        : -1;
    }
    return (
      ~(K = Pe(n)) && (W = $[K] = be[K](n)),
      {
        c() {
          (e = v("div")),
            G && G.c(),
            (t = x()),
            (i = v("div")),
            T && T.c(),
            (r = x()),
            (l = v("div")),
            pe.c(),
            (s = x()),
            le && le.c(),
            (o = x()),
            (c = v("div")),
            (d = v("div")),
            ee && ee.c(),
            (h = x()),
            (w = v("span")),
            (y = Z(O)),
            (L = x()),
            Q && Q.c(),
            (E = x()),
            (S = v("div")),
            te && te.c(),
            (ae = x()),
            W && W.c(),
            f(l, "class", "from-participants"),
            f(i, "class", "from-message-count"),
            f(e, "class", (a = "from" + (n[4].show_star ? "-star" : ""))),
            f(w, "class", "snippet"),
            Ae(w, "deleted", n[14]),
            f(d, "class", "subject-snippet"),
            f(c, "class", "subject-snippet-attachment"),
            Ae(S, "date", n[4].show_received_timestamp),
            Ae(S, "action-icons", n[4].show_thread_actions);
        },
        m(D, me) {
          p(D, e, me),
            G && G.m(e, null),
            b(e, t),
            b(e, i),
            T && T.m(i, null),
            b(i, r),
            b(i, l),
            pe.m(l, null),
            p(D, s, me),
            le && le.m(D, me),
            p(D, o, me),
            p(D, c, me),
            b(c, d),
            ee && ee.m(d, null),
            b(d, h),
            b(d, w),
            b(w, y),
            b(c, L),
            Q && Q.m(c, null),
            p(D, E, me),
            p(D, S, me),
            te && te.m(S, null),
            b(S, ae),
            ~K && $[K].m(S, null),
            (z = !0);
        },
        p(D, me) {
          var F, oe, M;
          D[4].show_star
            ? G
              ? G.p(D, me)
              : ((G = xr(D)), G.c(), G.m(e, t))
            : G && (G.d(1), (G = null)),
            D[4].show_contact_avatar
              ? T
                ? (T.p(D, me), me[0] & 16 && C(T, 1))
                : ((T = Yr(D)), T.c(), C(T, 1), T.m(i, r))
              : T &&
                (ke(),
                j(T, 1, 1, () => {
                  T = null;
                }),
                Ee()),
            _e === (_e = N(D)) && pe
              ? pe.p(D, me)
              : (pe.d(1), (pe = _e(D)), pe && (pe.c(), pe.m(l, null))),
            (!z ||
              (me[0] & 16 &&
                a !== (a = "from" + (D[4].show_star ? "-star" : "")))) &&
              f(e, "class", a),
            D[4].show_number_of_messages
              ? le
                ? le.p(D, me)
                : ((le = ea(D)), le.c(), le.m(o.parentNode, o))
              : le && (le.d(1), (le = null)),
            ((F = D[3]) == null ? void 0 : F.subject)
              ? ee
                ? ee.p(D, me)
                : ((ee = ta(D)), ee.c(), ee.m(d, h))
              : ee && (ee.d(1), (ee = null)),
            (!z || me[0] & 16512) &&
              O !==
                (O =
                  (D[14]
                    ? `Sorry, looks like this thread is currently unavailable. It may
                    have been deleted in your provider inbox.`
                    : !((oe = D[3]) == null ? void 0 : oe.snippet) && D[133]
                    ? "This is a draft email"
                    : ((M = D[3]) == null ? void 0 : M.snippet)
                    ? D[3].snippet.replace(/\u200C /g, "")
                    : "") + "") &&
              ue(y, O),
            me[0] & 16384 && Ae(w, "deleted", D[14]),
            me[0] & 32768 && (R = Object.keys(D[15]).length > 0),
            R
              ? Q
                ? Q.p(D, me)
                : ((Q = na(D)), Q.c(), Q.m(c, null))
              : Q && (Q.d(1), (Q = null)),
            me[0] & 32896 &&
              (H = D[7].has_attachments && Object.keys(D[15]).length > 0),
            H
              ? te
                ? me[0] & 32896 && C(te, 1)
                : ((te = aa()), te.c(), C(te, 1), te.m(S, ae))
              : te &&
                (ke(),
                j(te, 1, 1, () => {
                  te = null;
                }),
                Ee());
          let Ye = K;
          (K = Pe(D)),
            K === Ye
              ? ~K && $[K].p(D, me)
              : (W &&
                  (ke(),
                  j($[Ye], 1, 1, () => {
                    $[Ye] = null;
                  }),
                  Ee()),
                ~K
                  ? ((W = $[K]),
                    W ? W.p(D, me) : ((W = $[K] = be[K](D)), W.c()),
                    C(W, 1),
                    W.m(S, null))
                  : (W = null)),
            me[0] & 16 && Ae(S, "date", D[4].show_received_timestamp),
            me[0] & 16 && Ae(S, "action-icons", D[4].show_thread_actions);
        },
        i(D) {
          z || (C(T), C(te), C(W), (z = !0));
        },
        o(D) {
          j(T), j(te), j(W), (z = !1);
        },
        d(D) {
          D && m(e),
            G && G.d(),
            T && T.d(),
            pe.d(),
            D && m(s),
            le && le.d(D),
            D && m(o),
            D && m(c),
            ee && ee.d(),
            Q && Q.d(),
            D && m(E),
            D && m(S),
            te && te.d(),
            ~K && $[K].d();
        },
      }
    );
  }
  function xr(n) {
    let e, t, i, r, l, a, s, o, c;
    return {
      c() {
        (e = v("div")),
          (t = v("button")),
          f(t, "id", (i = `thread-star-${n[4].thread_id}`)),
          f(t, "class", (r = n[7].starred ? "starred" : "")),
          (t.value = l = n[4].thread_id),
          f(t, "role", "switch"),
          f(t, "aria-checked", (a = n[7].starred)),
          f(t, "aria-label", (s = `Star button for thread ${n[4].thread_id}`)),
          f(e, "class", "starred");
      },
      m(d, h) {
        p(d, e, h), b(e, t), o || ((c = he(t, "click", Za(n[25]))), (o = !0));
      },
      p(d, h) {
        h[0] & 16 &&
          i !== (i = `thread-star-${d[4].thread_id}`) &&
          f(t, "id", i),
          h[0] & 128 &&
            r !== (r = d[7].starred ? "starred" : "") &&
            f(t, "class", r),
          h[0] & 16 && l !== (l = d[4].thread_id) && (t.value = l),
          h[0] & 128 && a !== (a = d[7].starred) && f(t, "aria-checked", a),
          h[0] & 16 &&
            s !== (s = `Star button for thread ${d[4].thread_id}`) &&
            f(t, "aria-label", s);
      },
      d(d) {
        d && m(e), (o = !1), c();
      },
    };
  }
  function Yr(n) {
    let e,
      t,
      i = n[7] && Zr(n);
    return {
      c() {
        (e = v("div")),
          i && i.c(),
          f(e, "class", "default-avatar"),
          Ae(e, "deleted", n[14]),
          Ae(e, "draft-icon", n[133]);
      },
      m(r, l) {
        p(r, e, l), i && i.m(e, null), (t = !0);
      },
      p(r, l) {
        r[7]
          ? i
            ? (i.p(r, l), l[0] & 128 && C(i, 1))
            : ((i = Zr(r)), i.c(), C(i, 1), i.m(e, null))
          : i &&
            (ke(),
            j(i, 1, 1, () => {
              i = null;
            }),
            Ee()),
          l[0] & 16384 && Ae(e, "deleted", r[14]),
          l[0] & 128 && Ae(e, "draft-icon", r[133]);
      },
      i(r) {
        t || (C(i), (t = !0));
      },
      o(r) {
        j(i), (t = !1);
      },
      d(r) {
        r && m(e), i && i.d();
      },
    };
  }
  function Zr(n) {
    let e, t, i, r;
    const l = [Qs, Xs, Ks],
      a = [];
    function s(o, c) {
      return o[133] ? 0 : o[7].messages.length <= 0 ? 1 : 2;
    }
    return (
      (e = s(n)),
      (t = a[e] = l[e](n)),
      {
        c() {
          t.c(), (i = Me());
        },
        m(o, c) {
          a[e].m(o, c), p(o, i, c), (r = !0);
        },
        p(o, c) {
          let d = e;
          (e = s(o)),
            e === d
              ? a[e].p(o, c)
              : (ke(),
                j(a[d], 1, 1, () => {
                  a[d] = null;
                }),
                Ee(),
                (t = a[e]),
                t ? t.p(o, c) : ((t = a[e] = l[e](o)), t.c()),
                C(t, 1),
                t.m(i.parentNode, i));
        },
        i(o) {
          r || (C(t), (r = !0));
        },
        o(o) {
          j(t), (r = !1);
        },
        d(o) {
          a[e].d(o), o && m(i);
        },
      }
    );
  }
  function Ks(n) {
    let e;
    return {
      c() {
        (e = v("nylas-contact-image")),
          U(e, "contact_query", n[12]),
          U(e, "contact", n[10]);
      },
      m(t, i) {
        p(t, e, i);
      },
      p(t, i) {
        i[0] & 4096 && U(e, "contact_query", t[12]),
          i[0] & 1024 && U(e, "contact", t[10]);
      },
      i: k,
      o: k,
      d(t) {
        t && m(e);
      },
    };
  }
  function Xs(n) {
    let e, t;
    return (
      (e = new jo({})),
      {
        c() {
          ze(e.$$.fragment);
        },
        m(i, r) {
          Fe(e, i, r), (t = !0);
        },
        p: k,
        i(i) {
          t || (C(e.$$.fragment, i), (t = !0));
        },
        o(i) {
          j(e.$$.fragment, i), (t = !1);
        },
        d(i) {
          Ie(e, i);
        },
      }
    );
  }
  function Qs(n) {
    let e, t;
    return (
      (e = new or({})),
      {
        c() {
          ze(e.$$.fragment);
        },
        m(i, r) {
          Fe(e, i, r), (t = !0);
        },
        p: k,
        i(i) {
          t || (C(e.$$.fragment, i), (t = !0));
        },
        o(i) {
          j(e.$$.fragment, i), (t = !1);
        },
        d(i) {
          Ie(e, i);
        },
      }
    );
  }
  function $s(n) {
    let e,
      t,
      i,
      r,
      l = zn(n[7].messages, n[7].participants),
      a = {
        ctx: n,
        current: null,
        token: null,
        hasCatch: !1,
        pending: nc,
        then: tc,
        catch: ec,
        value: 18,
      };
    dt((t = n[35](n[7])), a);
    let s = l && Qr(n);
    return {
      c() {
        (e = v("span")),
          a.block.c(),
          (i = x()),
          (r = v("div")),
          s && s.c(),
          f(e, "class", "participants-name"),
          Ae(e, "condensed", zn(n[7].messages, n[7].participants)),
          f(r, "class", "participants-count");
      },
      m(o, c) {
        p(o, e, c),
          a.block.m(e, (a.anchor = null)),
          (a.mount = () => e),
          (a.anchor = null),
          p(o, i, c),
          p(o, r, c),
          s && s.m(r, null);
      },
      p(o, c) {
        (n = o),
          (a.ctx = n),
          (c[0] & 128 && t !== (t = n[35](n[7])) && dt(t, a)) || Zt(a, n, c),
          c[0] & 128 &&
            Ae(e, "condensed", zn(n[7].messages, n[7].participants)),
          c[0] & 128 && (l = zn(n[7].messages, n[7].participants)),
          l
            ? s
              ? s.p(n, c)
              : ((s = Qr(n)), s.c(), s.m(r, null))
            : s && (s.d(1), (s = null));
      },
      d(o) {
        o && m(e),
          a.block.d(),
          (a.token = null),
          (a = null),
          o && m(i),
          o && m(r),
          s && s.d();
      },
    };
  }
  function qs(n) {
    let e;
    return {
      c() {
        (e = v("div")),
          (e.innerHTML =
            '<span class="from-sub-section deleted-email">Deleted Email</span>'),
          f(e, "class", "participants-name");
      },
      m(t, i) {
        p(t, e, i);
      },
      p: k,
      d(t) {
        t && m(e);
      },
    };
  }
  function ec(n) {
    return { c: k, m: k, p: k, d: k };
  }
  function tc(n) {
    let e,
      t = n[18],
      i = [];
    for (let r = 0; r < t.length; r += 1) i[r] = Xr(Lr(n, t, r));
    return {
      c() {
        for (let r = 0; r < i.length; r += 1) i[r].c();
        e = Me();
      },
      m(r, l) {
        for (let a = 0; a < i.length; a += 1) i[a].m(r, l);
        p(r, e, l);
      },
      p(r, l) {
        if ((l[0] & 128) | (l[1] & 16)) {
          t = r[18];
          let a;
          for (a = 0; a < t.length; a += 1) {
            const s = Lr(r, t, a);
            i[a]
              ? i[a].p(s, l)
              : ((i[a] = Xr(s)), i[a].c(), i[a].m(e.parentNode, e));
          }
          for (; a < i.length; a += 1) i[a].d(1);
          i.length = t.length;
        }
      },
      d(r) {
        wt(i, r), r && m(e);
      },
    };
  }
  function Kr(n) {
    let e;
    return {
      c() {
        (e = v("span")),
          (e.textContent = ",\xA0"),
          f(e, "class", "from-sub-section");
      },
      m(t, i) {
        p(t, e, i);
      },
      d(t) {
        t && m(e);
      },
    };
  }
  function Xr(n) {
    let e,
      t = n[139] + "",
      i,
      r,
      l,
      a = n[141] < n[18].length - 1 && Kr();
    return {
      c() {
        (e = v("span")),
          (i = Z(t)),
          (r = x()),
          a && a.c(),
          (l = Me()),
          f(e, "class", "from-sub-section participant-label"),
          Ae(e, "draft-label", n[139] === "Draft");
      },
      m(s, o) {
        p(s, e, o), b(e, i), p(s, r, o), a && a.m(s, o), p(s, l, o);
      },
      p(s, o) {
        o[0] & 128 && t !== (t = s[139] + "") && ue(i, t),
          (o[0] & 128) | (o[1] & 16) &&
            Ae(e, "draft-label", s[139] === "Draft"),
          s[141] < s[18].length - 1
            ? a || ((a = Kr()), a.c(), a.m(l.parentNode, l))
            : a && (a.d(1), (a = null));
      },
      d(s) {
        s && m(e), s && m(r), a && a.d(s), s && m(l);
      },
    };
  }
  function nc(n) {
    return { c: k, m: k, p: k, d: k };
  }
  function Qr(n) {
    let e,
      t,
      i = n[7].participants.length >= 2 && $r(n),
      r = n[7].participants.length > 2 && qr(n);
    return {
      c() {
        i && i.c(), (e = x()), r && r.c(), (t = Me());
      },
      m(l, a) {
        i && i.m(l, a), p(l, e, a), r && r.m(l, a), p(l, t, a);
      },
      p(l, a) {
        l[7].participants.length >= 2
          ? i
            ? i.p(l, a)
            : ((i = $r(l)), i.c(), i.m(e.parentNode, e))
          : i && (i.d(1), (i = null)),
          l[7].participants.length > 2
            ? r
              ? r.p(l, a)
              : ((r = qr(l)), r.c(), r.m(t.parentNode, t))
            : r && (r.d(1), (r = null));
      },
      d(l) {
        i && i.d(l), l && m(e), r && r.d(l), l && m(t);
      },
    };
  }
  function $r(n) {
    let e,
      t,
      i = n[7].participants.length - La + "",
      r;
    return {
      c() {
        (e = v("span")),
          (t = Z("+")),
          (r = Z(i)),
          f(e, "class", "show-on-mobile");
      },
      m(l, a) {
        p(l, e, a), b(e, t), b(e, r);
      },
      p(l, a) {
        a[0] & 128 &&
          i !== (i = l[7].participants.length - La + "") &&
          ue(r, i);
      },
      d(l) {
        l && m(e);
      },
    };
  }
  function qr(n) {
    let e,
      t,
      i = n[7].participants.length - Na + "",
      r;
    return {
      c() {
        (e = v("span")),
          (t = Z("\xA0 + ")),
          (r = Z(i)),
          f(e, "class", "show-on-desktop");
      },
      m(l, a) {
        p(l, e, a), b(e, t), b(e, r);
      },
      p(l, a) {
        a[0] & 128 &&
          i !== (i = l[7].participants.length - Na + "") &&
          ue(r, i);
      },
      d(l) {
        l && m(e);
      },
    };
  }
  function ea(n) {
    var r, l;
    let e,
      t =
        (((l = (r = n[7]) == null ? void 0 : r.messages) == null
          ? void 0
          : l.length) > 0
          ? n[7].messages.length
          : "") + "",
      i;
    return {
      c() {
        (e = v("span")), (i = Z(t)), f(e, "class", "thread-message-count");
      },
      m(a, s) {
        p(a, e, s), b(e, i);
      },
      p(a, s) {
        var o, c;
        s[0] & 128 &&
          t !==
            (t =
              (((c = (o = a[7]) == null ? void 0 : o.messages) == null
                ? void 0
                : c.length) > 0
                ? a[7].messages.length
                : "") + "") &&
          ue(i, t);
      },
      d(a) {
        a && m(e);
      },
    };
  }
  function ta(n) {
    var r;
    let e,
      t = ((r = n[3]) == null ? void 0 : r.subject) + "",
      i;
    return {
      c() {
        (e = v("span")), (i = Z(t)), f(e, "class", "subject");
      },
      m(l, a) {
        p(l, e, a), b(e, i);
      },
      p(l, a) {
        var s;
        a[0] & 128 &&
          t !== (t = ((s = l[3]) == null ? void 0 : s.subject) + "") &&
          ue(i, t);
      },
      d(l) {
        l && m(e);
      },
    };
  }
  function na(n) {
    let e,
      t = Object.values(n[15]),
      i = [];
    for (let r = 0; r < t.length; r += 1) i[r] = ra(Cr(n, t, r));
    return {
      c() {
        e = v("div");
        for (let r = 0; r < i.length; r += 1) i[r].c();
        f(e, "class", "attachment");
      },
      m(r, l) {
        p(r, e, l);
        for (let a = 0; a < i.length; a += 1) i[a].m(e, null);
      },
      p(r, l) {
        if ((l[0] & 32768) | (l[1] & 32)) {
          t = Object.values(r[15]);
          let a;
          for (a = 0; a < t.length; a += 1) {
            const s = Cr(r, t, a);
            i[a] ? i[a].p(s, l) : ((i[a] = ra(s)), i[a].c(), i[a].m(e, null));
          }
          for (; a < i.length; a += 1) i[a].d(1);
          i.length = t.length;
        }
      },
      d(r) {
        r && m(e), wt(i, r);
      },
    };
  }
  function ia(n) {
    let e,
      t = (n[129].filename || n[129].id) + "",
      i,
      r,
      l,
      a;
    function s(...o) {
      return n[91](n[129], ...o);
    }
    return {
      c() {
        (e = v("button")), (i = Z(t)), (r = x());
      },
      m(o, c) {
        p(o, e, c), b(e, i), b(e, r), l || ((a = he(e, "click", s)), (l = !0));
      },
      p(o, c) {
        (n = o),
          c[0] & 32768 &&
            t !== (t = (n[129].filename || n[129].id) + "") &&
            ue(i, t);
      },
      d(o) {
        o && m(e), (l = !1), a();
      },
    };
  }
  function ra(n) {
    let e,
      t = n[134],
      i = [];
    for (let r = 0; r < t.length; r += 1) i[r] = ia(Nr(n, t, r));
    return {
      c() {
        for (let r = 0; r < i.length; r += 1) i[r].c();
        e = Me();
      },
      m(r, l) {
        for (let a = 0; a < i.length; a += 1) i[a].m(r, l);
        p(r, e, l);
      },
      p(r, l) {
        if ((l[0] & 32768) | (l[1] & 32)) {
          t = r[134];
          let a;
          for (a = 0; a < t.length; a += 1) {
            const s = Nr(r, t, a);
            i[a]
              ? i[a].p(s, l)
              : ((i[a] = ia(s)), i[a].c(), i[a].m(e.parentNode, e));
          }
          for (; a < i.length; a += 1) i[a].d(1);
          i.length = t.length;
        }
      },
      d(r) {
        wt(i, r), r && m(e);
      },
    };
  }
  function aa(n) {
    let e, t, i;
    return (
      (t = new Lo({})),
      {
        c() {
          (e = v("span")), ze(t.$$.fragment);
        },
        m(r, l) {
          p(r, e, l), Fe(t, e, null), (i = !0);
        },
        i(r) {
          i || (C(t.$$.fragment, r), (i = !0));
        },
        o(r) {
          j(t.$$.fragment, r), (i = !1);
        },
        d(r) {
          r && m(e), Ie(t);
        },
      }
    );
  }
  function ic(n) {
    let e,
      t = n[33](new Date(n[3].last_message_timestamp * 1e3)) + "",
      i;
    return {
      c() {
        (e = v("span")), (i = Z(t));
      },
      m(r, l) {
        p(r, e, l), b(e, i);
      },
      p(r, l) {
        l[0] & 128 &&
          t !== (t = r[33](new Date(r[3].last_message_timestamp * 1e3)) + "") &&
          ue(i, t);
      },
      i: k,
      o: k,
      d(r) {
        r && m(e);
      },
    };
  }
  function rc(n) {
    let e, t, i, r, l, a, s, o, c, d, h, w, O;
    i = new rr({});
    const y = [lc, ac],
      L = [];
    function R(E, S) {
      return E[7].unread ? 0 : 1;
    }
    return (
      (s = R(n)),
      (o = L[s] = y[s](n)),
      {
        c() {
          (e = v("div")),
            (t = v("button")),
            ze(i.$$.fragment),
            (r = x()),
            (l = v("div")),
            (a = v("button")),
            o.c(),
            f(t, "title", "Delete thread"),
            f(t, "aria-label", "Delete thread"),
            f(e, "class", "delete"),
            f(
              a,
              "title",
              (c = `Mark thread as ${n[7].unread ? "" : "un"}read`),
            ),
            f(
              a,
              "aria-label",
              (d = `Mark thread as ${n[7].unread ? "" : "un"}read`),
            ),
            f(l, "class", "read-status");
        },
        m(E, S) {
          p(E, e, S),
            b(e, t),
            Fe(i, t, null),
            p(E, r, S),
            p(E, l, S),
            b(l, a),
            L[s].m(a, null),
            (h = !0),
            w ||
              ((O = [he(t, "click", Ke(n[21])), he(a, "click", Ke(n[20]))]),
              (w = !0));
        },
        p(E, S) {
          let H = s;
          (s = R(E)),
            s !== H &&
              (ke(),
              j(L[H], 1, 1, () => {
                L[H] = null;
              }),
              Ee(),
              (o = L[s]),
              o || ((o = L[s] = y[s](E)), o.c()),
              C(o, 1),
              o.m(a, null)),
            (!h ||
              (S[0] & 128 &&
                c !== (c = `Mark thread as ${E[7].unread ? "" : "un"}read`))) &&
              f(a, "title", c),
            (!h ||
              (S[0] & 128 &&
                d !== (d = `Mark thread as ${E[7].unread ? "" : "un"}read`))) &&
              f(a, "aria-label", d);
        },
        i(E) {
          h || (C(i.$$.fragment, E), C(o), (h = !0));
        },
        o(E) {
          j(i.$$.fragment, E), j(o), (h = !1);
        },
        d(E) {
          E && m(e), Ie(i), E && m(r), E && m(l), L[s].d(), (w = !1), at(O);
        },
      }
    );
  }
  function ac(n) {
    let e, t;
    return (
      (e = new lr({ props: { "aria-hidden": "true" } })),
      {
        c() {
          ze(e.$$.fragment);
        },
        m(i, r) {
          Fe(e, i, r), (t = !0);
        },
        i(i) {
          t || (C(e.$$.fragment, i), (t = !0));
        },
        o(i) {
          j(e.$$.fragment, i), (t = !1);
        },
        d(i) {
          Ie(e, i);
        },
      }
    );
  }
  function lc(n) {
    let e, t;
    return (
      (e = new ar({ props: { "aria-hidden": "true" } })),
      {
        c() {
          ze(e.$$.fragment);
        },
        m(i, r) {
          Fe(e, i, r), (t = !0);
        },
        i(i) {
          t || (C(e.$$.fragment, i), (t = !0));
        },
        o(i) {
          j(e.$$.fragment, i), (t = !1);
        },
        d(i) {
          Ie(e, i);
        },
      }
    );
  }
  function oc(n) {
    return { c: k, m: k, p: k, i: k, o: k, d: k };
  }
  function la(n) {
    let e, t, i, r, l;
    return (
      (t = new Po({})),
      {
        c() {
          (e = v("button")),
            ze(t.$$.fragment),
            f(e, "title", "Return to Mailbox"),
            f(e, "aria-label", "Return to Mailbox");
        },
        m(a, s) {
          p(a, e, s),
            Fe(t, e, null),
            (i = !0),
            r || ((l = he(e, "click", Ke(n[23]))), (r = !0));
        },
        p: k,
        i(a) {
          i || (C(t.$$.fragment, a), (i = !0));
        },
        o(a) {
          j(t.$$.fragment, a), (i = !1);
        },
        d(a) {
          a && m(e), Ie(t), (r = !1), l();
        },
      }
    );
  }
  function oa(n) {
    let e, t, i, r, l, a, s, o;
    return {
      c() {
        (e = v("div")),
          (t = v("button")),
          f(t, "class", (i = n[3].starred ? "starred" : "")),
          f(t, "title", (r = n[3].starred ? "Unstar thread" : "Star thread")),
          f(
            t,
            "aria-label",
            (l = n[3].starred ? "Unstar thread" : "Star thread"),
          ),
          f(t, "role", "switch"),
          f(t, "aria-checked", (a = n[3].starred)),
          f(e, "class", "starred");
      },
      m(c, d) {
        p(c, e, d), b(e, t), s || ((o = he(t, "click", Ke(n[25]))), (s = !0));
      },
      p(c, d) {
        d[0] & 128 &&
          i !== (i = c[3].starred ? "starred" : "") &&
          f(t, "class", i),
          d[0] & 128 &&
            r !== (r = c[3].starred ? "Unstar thread" : "Star thread") &&
            f(t, "title", r),
          d[0] & 128 &&
            l !== (l = c[3].starred ? "Unstar thread" : "Star thread") &&
            f(t, "aria-label", l),
          d[0] & 128 && a !== (a = c[3].starred) && f(t, "aria-checked", a);
      },
      d(c) {
        c && m(e), (s = !1), o();
      },
    };
  }
  function sa(n) {
    let e, t, i, r, l, a, s, o, c, d, h, w, O;
    i = new rr({});
    const y = [cc, sc],
      L = [];
    function R(E, S) {
      return E[7].unread ? 0 : 1;
    }
    return (
      (s = R(n)),
      (o = L[s] = y[s](n)),
      {
        c() {
          (e = v("div")),
            (t = v("button")),
            ze(i.$$.fragment),
            (r = x()),
            (l = v("div")),
            (a = v("button")),
            o.c(),
            f(t, "title", "Delete thread / Move to trash"),
            f(t, "aria-label", "Delete thread (Move to trash)"),
            f(e, "class", "delete"),
            f(
              a,
              "title",
              (c = `Mark thread as ${n[7].unread ? "" : "un"}read`),
            ),
            f(
              a,
              "aria-label",
              (d = `Mark thread as ${n[7].unread ? "" : "un"}read`),
            ),
            f(l, "class", "read-status");
        },
        m(E, S) {
          p(E, e, S),
            b(e, t),
            Fe(i, t, null),
            p(E, r, S),
            p(E, l, S),
            b(l, a),
            L[s].m(a, null),
            (h = !0),
            w ||
              ((O = [he(t, "click", Ke(n[80])), he(a, "click", Ke(n[20]))]),
              (w = !0));
        },
        p(E, S) {
          let H = s;
          (s = R(E)),
            s !== H &&
              (ke(),
              j(L[H], 1, 1, () => {
                L[H] = null;
              }),
              Ee(),
              (o = L[s]),
              o || ((o = L[s] = y[s](E)), o.c()),
              C(o, 1),
              o.m(a, null)),
            (!h ||
              (S[0] & 128 &&
                c !== (c = `Mark thread as ${E[7].unread ? "" : "un"}read`))) &&
              f(a, "title", c),
            (!h ||
              (S[0] & 128 &&
                d !== (d = `Mark thread as ${E[7].unread ? "" : "un"}read`))) &&
              f(a, "aria-label", d);
        },
        i(E) {
          h || (C(i.$$.fragment, E), C(o), (h = !0));
        },
        o(E) {
          j(i.$$.fragment, E), j(o), (h = !1);
        },
        d(E) {
          E && m(e), Ie(i), E && m(r), E && m(l), L[s].d(), (w = !1), at(O);
        },
      }
    );
  }
  function sc(n) {
    let e, t;
    return (
      (e = new lr({ props: { "aria-hidden": "true" } })),
      {
        c() {
          ze(e.$$.fragment);
        },
        m(i, r) {
          Fe(e, i, r), (t = !0);
        },
        i(i) {
          t || (C(e.$$.fragment, i), (t = !0));
        },
        o(i) {
          j(e.$$.fragment, i), (t = !1);
        },
        d(i) {
          Ie(e, i);
        },
      }
    );
  }
  function cc(n) {
    let e, t;
    return (
      (e = new ar({ props: { "aria-hidden": "true" } })),
      {
        c() {
          ze(e.$$.fragment);
        },
        m(i, r) {
          Fe(e, i, r), (t = !0);
        },
        i(i) {
          t || (C(e.$$.fragment, i), (t = !0));
        },
        o(i) {
          j(e.$$.fragment, i), (t = !1);
        },
        d(i) {
          Ie(e, i);
        },
      }
    );
  }
  function dc(n) {
    let e,
      t = n[3].snippet + "",
      i;
    return {
      c() {
        (e = v("span")), (i = Z(t)), f(e, "class", "snippet");
      },
      m(r, l) {
        p(r, e, l), b(e, i);
      },
      p(r, l) {
        l[0] & 128 && t !== (t = r[3].snippet + "") && ue(i, t);
      },
      i: k,
      o: k,
      d(r) {
        r && m(e);
      },
    };
  }
  function fc(n) {
    let e,
      t,
      i = n[7].messages,
      r = [];
    for (let a = 0; a < i.length; a += 1) r[a] = ya(Pr(n, i, a));
    const l = (a) =>
      j(r[a], 1, 1, () => {
        r[a] = null;
      });
    return {
      c() {
        for (let a = 0; a < r.length; a += 1) r[a].c();
        e = Me();
      },
      m(a, s) {
        for (let o = 0; o < r.length; o += 1) r[o].m(a, s);
        p(a, e, s), (t = !0);
      },
      p(a, s) {
        if ((s[0] & 2080944626) | (s[1] & 200)) {
          i = a[7].messages;
          let o;
          for (o = 0; o < i.length; o += 1) {
            const c = Pr(a, i, o);
            r[o]
              ? (r[o].p(c, s), C(r[o], 1))
              : ((r[o] = ya(c)), r[o].c(), C(r[o], 1), r[o].m(e.parentNode, e));
          }
          for (ke(), o = i.length; o < r.length; o += 1) l(o);
          Ee();
        }
      },
      i(a) {
        if (!t) {
          for (let s = 0; s < i.length; s += 1) C(r[s]);
          t = !0;
        }
      },
      o(a) {
        r = r.filter(Boolean);
        for (let s = 0; s < r.length; s += 1) j(r[s]);
        t = !1;
      },
      d(a) {
        wt(r, a), a && m(e);
      },
    };
  }
  function uc(n) {
    var W, z, G;
    let e,
      t,
      i,
      r,
      l,
      a =
        (n[8] && ((W = n[2]) == null ? void 0 : W.from[0].email) === n[8]
          ? "me"
          : ((z = n[2]) == null ? void 0 : z.from[0].name) ||
            ((G = n[2]) == null ? void 0 : G.from[0].email)) + "",
      s,
      o,
      c,
      d,
      h,
      w,
      O,
      y,
      L,
      R = n[2].snippet + "",
      E,
      S,
      H,
      ae = n[4].show_contact_avatar && ca(n),
      K = n[4].show_received_timestamp && da(n);
    return {
      c() {
        var T, N;
        (e = v("div")),
          (t = v("div")),
          ae && ae.c(),
          (i = x()),
          (r = v("div")),
          (l = v("span")),
          (s = Z(a)),
          (o = x()),
          (c = v("nylas-tooltip")),
          (w = x()),
          (O = v("section")),
          K && K.c(),
          (y = x()),
          (L = v("div")),
          (E = Z(R)),
          f(l, "class", "name"),
          U(c, "id", (d = (T = n[2]) == null ? void 0 : T.id.slice(0, 3))),
          U(c, "current_tooltip_id", n[13]),
          U(c, "icon", Qt),
          U(c, "content", (h = (N = n[2]) == null ? void 0 : N.from[0].email)),
          f(r, "class", "message-from"),
          f(t, "class", "avatar-info"),
          f(e, "class", "message-head"),
          f(L, "class", "snippet");
      },
      m(T, N) {
        p(T, e, N),
          b(e, t),
          ae && ae.m(t, null),
          b(t, i),
          b(t, r),
          b(r, l),
          b(l, s),
          b(r, o),
          b(r, c),
          b(e, w),
          b(e, O),
          K && K.m(O, null),
          p(T, y, N),
          p(T, L, N),
          b(L, E),
          S || ((H = he(c, "toggleTooltip", n[34])), (S = !0));
      },
      p(T, N) {
        var _e, pe, le, ee, Q;
        T[4].show_contact_avatar
          ? ae
            ? ae.p(T, N)
            : ((ae = ca(T)), ae.c(), ae.m(t, i))
          : ae && (ae.d(1), (ae = null)),
          N[0] & 384 &&
            a !==
              (a =
                (T[8] &&
                ((_e = T[2]) == null ? void 0 : _e.from[0].email) === T[8]
                  ? "me"
                  : ((pe = T[2]) == null ? void 0 : pe.from[0].name) ||
                    ((le = T[2]) == null ? void 0 : le.from[0].email)) + "") &&
            ue(s, a),
          N[0] & 128 &&
            d !== (d = (ee = T[2]) == null ? void 0 : ee.id.slice(0, 3)) &&
            U(c, "id", d),
          N[0] & 8192 && U(c, "current_tooltip_id", T[13]),
          N[0] & 128 &&
            h !== (h = (Q = T[2]) == null ? void 0 : Q.from[0].email) &&
            U(c, "content", h),
          T[4].show_received_timestamp
            ? K
              ? K.p(T, N)
              : ((K = da(T)), K.c(), K.m(O, null))
            : K && (K.d(1), (K = null)),
          N[0] & 128 && R !== (R = T[2].snippet + "") && ue(E, R);
      },
      i: k,
      o: k,
      d(T) {
        T && m(e),
          ae && ae.d(),
          K && K.d(),
          T && m(y),
          T && m(L),
          (S = !1),
          H();
      },
    };
  }
  function mc(n) {
    var ye, D, me, Ye;
    let e,
      t,
      i,
      r,
      l,
      a,
      s =
        (n[8] && ((ye = n[2]) == null ? void 0 : ye.from[0].email) === n[8]
          ? "me"
          : ((D = n[2]) == null ? void 0 : D.from[0].name) ||
            ((me = n[2]) == null ? void 0 : me.from[0].email)) + "",
      o,
      c,
      d,
      h,
      w,
      O,
      y,
      L,
      R,
      E,
      S,
      H,
      ae = n[4].show_reply_all && n[28](n[2]),
      K,
      W,
      z,
      G,
      T,
      N,
      _e,
      pe,
      le = n[4].show_contact_avatar && fa(n),
      ee = ((Ye = n[2]) == null ? void 0 : Ye.to) && ua(n),
      Q = n[4].show_received_timestamp && ha(n),
      te = n[4].show_reply && pa(n),
      be = ae && ga(n),
      $ = n[4].show_forward && va(n);
    const Pe = [Ac, Tc, Ec, kc],
      ve = [];
    function se(F, oe) {
      return F[4].clean_conversation && F[2].conversation
        ? 0
        : F[2] && F[2].body != null
        ? 1
        : !!F[4].thread && !F[4].thread_id && F[1] != "mailbox"
        ? 2
        : 3;
    }
    return (
      (G = se(n)),
      (T = ve[G] = Pe[G](n)),
      {
        c() {
          var F, oe;
          (e = v("div")),
            (t = v("div")),
            (i = v("div")),
            le && le.c(),
            (r = x()),
            (l = v("div")),
            (a = v("span")),
            (o = Z(s)),
            (c = x()),
            (d = v("nylas-tooltip")),
            (O = x()),
            (y = v("div")),
            ee && ee.c(),
            (L = x()),
            (R = v("div")),
            Q && Q.c(),
            (E = x()),
            (S = v("div")),
            te && te.c(),
            (H = x()),
            be && be.c(),
            (K = x()),
            $ && $.c(),
            (W = x()),
            (z = v("div")),
            T.c(),
            f(a, "class", "name"),
            U(d, "id", (h = (F = n[2]) == null ? void 0 : F.id.slice(0, 3))),
            U(d, "current_tooltip_id", n[13]),
            U(d, "icon", Qt),
            U(
              d,
              "content",
              (w = (oe = n[2]) == null ? void 0 : oe.from[0].email),
            ),
            f(l, "class", "message-from"),
            f(i, "class", "avatar-info"),
            f(y, "class", "message-to"),
            f(t, "class", "message-from-to"),
            f(S, "aria-label", "Email Actions"),
            f(S, "role", "toolbar"),
            f(R, "class", ""),
            f(e, "class", "message-head"),
            f(z, "class", "message-body");
        },
        m(F, oe) {
          p(F, e, oe),
            b(e, t),
            b(t, i),
            le && le.m(i, null),
            b(i, r),
            b(i, l),
            b(l, a),
            b(a, o),
            b(l, c),
            b(l, d),
            b(t, O),
            b(t, y),
            ee && ee.m(y, null),
            b(e, L),
            b(e, R),
            Q && Q.m(R, null),
            b(R, E),
            b(R, S),
            te && te.m(S, null),
            b(S, H),
            be && be.m(S, null),
            b(S, K),
            $ && $.m(S, null),
            p(F, W, oe),
            p(F, z, oe),
            ve[G].m(z, null),
            (N = !0),
            _e || ((pe = he(d, "toggleTooltip", n[34])), (_e = !0));
        },
        p(F, oe) {
          var pt, gt, Qe, je, Ne, we;
          F[4].show_contact_avatar
            ? le
              ? le.p(F, oe)
              : ((le = fa(F)), le.c(), le.m(i, r))
            : le && (le.d(1), (le = null)),
            (!N || oe[0] & 384) &&
              s !==
                (s =
                  (F[8] &&
                  ((pt = F[2]) == null ? void 0 : pt.from[0].email) === F[8]
                    ? "me"
                    : ((gt = F[2]) == null ? void 0 : gt.from[0].name) ||
                      ((Qe = F[2]) == null ? void 0 : Qe.from[0].email)) +
                  "") &&
              ue(o, s),
            (!N ||
              (oe[0] & 128 &&
                h !==
                  (h = (je = F[2]) == null ? void 0 : je.id.slice(0, 3)))) &&
              U(d, "id", h),
            (!N || oe[0] & 8192) && U(d, "current_tooltip_id", F[13]),
            (!N ||
              (oe[0] & 128 &&
                w !== (w = (Ne = F[2]) == null ? void 0 : Ne.from[0].email))) &&
              U(d, "content", w),
            ((we = F[2]) == null ? void 0 : we.to)
              ? ee
                ? ee.p(F, oe)
                : ((ee = ua(F)), ee.c(), ee.m(y, null))
              : ee && (ee.d(1), (ee = null)),
            F[4].show_received_timestamp
              ? Q
                ? Q.p(F, oe)
                : ((Q = ha(F)), Q.c(), Q.m(R, E))
              : Q && (Q.d(1), (Q = null)),
            F[4].show_reply
              ? te
                ? (te.p(F, oe), oe[0] & 16 && C(te, 1))
                : ((te = pa(F)), te.c(), C(te, 1), te.m(S, H))
              : te &&
                (ke(),
                j(te, 1, 1, () => {
                  te = null;
                }),
                Ee()),
            oe[0] & 144 && (ae = F[4].show_reply_all && F[28](F[2])),
            ae
              ? be
                ? (be.p(F, oe), oe[0] & 144 && C(be, 1))
                : ((be = ga(F)), be.c(), C(be, 1), be.m(S, K))
              : be &&
                (ke(),
                j(be, 1, 1, () => {
                  be = null;
                }),
                Ee()),
            F[4].show_forward
              ? $
                ? ($.p(F, oe), oe[0] & 16 && C($, 1))
                : (($ = va(F)), $.c(), C($, 1), $.m(S, null))
              : $ &&
                (ke(),
                j($, 1, 1, () => {
                  $ = null;
                }),
                Ee());
          let M = G;
          (G = se(F)),
            G === M
              ? ve[G].p(F, oe)
              : (ke(),
                j(ve[M], 1, 1, () => {
                  ve[M] = null;
                }),
                Ee(),
                (T = ve[G]),
                T ? T.p(F, oe) : ((T = ve[G] = Pe[G](F)), T.c()),
                C(T, 1),
                T.m(z, null));
        },
        i(F) {
          N || (C(te), C(be), C($), C(T), (N = !0));
        },
        o(F) {
          j(te), j(be), j($), j(T), (N = !1);
        },
        d(F) {
          F && m(e),
            le && le.d(),
            ee && ee.d(),
            Q && Q.d(),
            te && te.d(),
            be && be.d(),
            $ && $.d(),
            F && m(W),
            F && m(z),
            ve[G].d(),
            (_e = !1),
            pe();
        },
      }
    );
  }
  function ca(n) {
    let e, t, i;
    return {
      c() {
        var r;
        (e = v("div")),
          (t = v("nylas-contact-image")),
          U(t, "contact_query", n[12]),
          U(
            t,
            "contact",
            (i = n[5][(r = n[2]) == null ? void 0 : r.from[0].email]),
          ),
          f(e, "class", "default-avatar");
      },
      m(r, l) {
        p(r, e, l), b(e, t);
      },
      p(r, l) {
        var a;
        l[0] & 4096 && U(t, "contact_query", r[12]),
          l[0] & 160 &&
            i !== (i = r[5][(a = r[2]) == null ? void 0 : a.from[0].email]) &&
            U(t, "contact", i);
      },
      d(r) {
        r && m(e);
      },
    };
  }
  function da(n) {
    let e,
      t,
      i = Mt(new Date(n[2].date * 1e3)) + "",
      r;
    return {
      c() {
        (e = v("div")),
          (t = v("span")),
          (r = Z(i)),
          f(e, "class", "message-date");
      },
      m(l, a) {
        p(l, e, a), b(e, t), b(t, r);
      },
      p(l, a) {
        a[0] & 128 &&
          i !== (i = Mt(new Date(l[2].date * 1e3)) + "") &&
          ue(r, i);
      },
      d(l) {
        l && m(e);
      },
    };
  }
  function fa(n) {
    let e, t, i;
    return {
      c() {
        var r;
        (e = v("div")),
          (t = v("nylas-contact-image")),
          U(t, "contact_query", n[12]),
          U(
            t,
            "contact",
            (i = n[5][(r = n[2]) == null ? void 0 : r.from[0].email]),
          ),
          f(e, "class", "default-avatar");
      },
      m(r, l) {
        p(r, e, l), b(e, t);
      },
      p(r, l) {
        var a;
        l[0] & 4096 && U(t, "contact_query", r[12]),
          l[0] & 160 &&
            i !== (i = r[5][(a = r[2]) == null ? void 0 : a.from[0].email]) &&
            U(t, "contact", i);
      },
      d(r) {
        r && m(e);
      },
    };
  }
  function ua(n) {
    let e,
      t,
      i = {
        ctx: n,
        current: null,
        token: null,
        hasCatch: !1,
        pending: yc,
        then: hc,
        catch: _c,
        value: 123,
      };
    return (
      dt((t = n[38]({ to: n[2].to, cc: n[2].cc, bcc: n[2].bcc })), i),
      {
        c() {
          (e = Me()), i.block.c();
        },
        m(r, l) {
          p(r, e, l),
            i.block.m(r, (i.anchor = l)),
            (i.mount = () => e.parentNode),
            (i.anchor = e);
        },
        p(r, l) {
          (n = r),
            (i.ctx = n),
            (l[0] & 128 &&
              t !== (t = n[38]({ to: n[2].to, cc: n[2].cc, bcc: n[2].bcc })) &&
              dt(t, i)) ||
              Zt(i, n, l);
        },
        d(r) {
          r && m(e), i.block.d(r), (i.token = null), (i = null);
        },
      }
    );
  }
  function _c(n) {
    return { c: k, m: k, p: k, d: k };
  }
  function hc(n) {
    let e,
      t,
      i = n[123].slice(0, xe),
      r = [];
    for (let a = 0; a < i.length; a += 1) r[a] = ma(Ir(n, i, a));
    let l = n[123].length > xe && _a(n);
    return {
      c() {
        for (let a = 0; a < r.length; a += 1) r[a].c();
        (e = x()), l && l.c(), (t = Me());
      },
      m(a, s) {
        for (let o = 0; o < r.length; o += 1) r[o].m(a, s);
        p(a, e, s), l && l.m(a, s), p(a, t, s);
      },
      p(a, s) {
        if ((s[0] & 144) | (s[1] & 128)) {
          i = a[123].slice(0, xe);
          let o;
          for (o = 0; o < i.length; o += 1) {
            const c = Ir(a, i, o);
            r[o]
              ? r[o].p(c, s)
              : ((r[o] = ma(c)), r[o].c(), r[o].m(e.parentNode, e));
          }
          for (; o < r.length; o += 1) r[o].d(1);
          r.length = i.length;
        }
        a[123].length > xe
          ? l
            ? l.p(a, s)
            : ((l = _a(a)), l.c(), l.m(t.parentNode, t))
          : l && (l.d(1), (l = null));
      },
      d(a) {
        wt(r, a), a && m(e), l && l.d(a), a && m(t);
      },
    };
  }
  function pc(n) {
    let e;
    return {
      c() {
        e = Z("bcc:");
      },
      m(t, i) {
        p(t, e, i);
      },
      p: k,
      d(t) {
        t && m(e);
      },
    };
  }
  function gc(n) {
    let e;
    return {
      c() {
        e = Z("cc:");
      },
      m(t, i) {
        p(t, e, i);
      },
      p: k,
      d(t) {
        t && m(e);
      },
    };
  }
  function vc(n) {
    let e = `to ${
        n[4].you && n[124].email === n[4].you.email_address ? "Me" : ""
      }`,
      t;
    return {
      c() {
        t = Z(e);
      },
      m(i, r) {
        p(i, t, r);
      },
      p(i, r) {
        r[0] & 144 &&
          e !==
            (e = `to ${
              i[4].you && i[124].email === i[4].you.email_address ? "Me" : ""
            }`) &&
          ue(t, e);
      },
      d(i) {
        i && m(t);
      },
    };
  }
  function bc(n) {
    let e = n[124].email + "",
      t;
    return {
      c() {
        t = Z(e);
      },
      m(i, r) {
        p(i, t, r);
      },
      p(i, r) {
        r[0] & 128 && e !== (e = i[124].email + "") && ue(t, e);
      },
      d(i) {
        i && m(t);
      },
    };
  }
  function wc(n) {
    var s;
    let e = ((s = n[124].name) != null ? s : n[4].you.name) + "",
      t,
      i,
      r = n[124].email + "",
      l,
      a;
    return {
      c() {
        (t = Z(e)), (i = Z(" <")), (l = Z(r)), (a = Z(">"));
      },
      m(o, c) {
        p(o, t, c), p(o, i, c), p(o, l, c), p(o, a, c);
      },
      p(o, c) {
        var d;
        c[0] & 144 &&
          e !== (e = ((d = o[124].name) != null ? d : o[4].you.name) + "") &&
          ue(t, e),
          c[0] & 128 && r !== (r = o[124].email + "") && ue(l, r);
      },
      d(o) {
        o && m(t), o && m(i), o && m(l), o && m(a);
      },
    };
  }
  function ma(n) {
    let e, t;
    function i(c, d) {
      if (c[126] === 0) return vc;
      if (c[124]._type === "cc" && c[126] === c[2].to.length) return gc;
      if (c[124]._type === "bcc" && c[126] === c[2].to.length + c[2].cc.length)
        return pc;
    }
    let r = i(n),
      l = r && r(n);
    function a(c, d) {
      if (c[124].email && c[124].name) return wc;
      if (c[124].email && !c[124].name) return bc;
    }
    let s = a(n),
      o = s && s(n);
    return {
      c() {
        (e = v("p")), l && l.c(), (t = x()), o && o.c();
      },
      m(c, d) {
        p(c, e, d), l && l.m(e, null), b(e, t), o && o.m(e, null);
      },
      p(c, d) {
        r === (r = i(c)) && l
          ? l.p(c, d)
          : (l && l.d(1), (l = r && r(c)), l && (l.c(), l.m(e, t))),
          s === (s = a(c)) && o
            ? o.p(c, d)
            : (o && o.d(1), (o = s && s(c)), o && (o.c(), o.m(e, null)));
      },
      d(c) {
        c && m(e), l && l.d(), o && o.d();
      },
    };
  }
  function _a(n) {
    let e, t, i, r, l, a, s;
    return {
      c() {
        (e = v("div")),
          (t = v("nylas-tooltip")),
          U(t, "id", (i = `show-more-participants-${n[2].id}`)),
          U(t, "current_tooltip_id", n[13]),
          U(t, "icon", Qt),
          U(t, "text", (r = `And ${n[123].length - xe} more`)),
          U(t, "content", (l = `${qt(n[123])}`));
      },
      m(o, c) {
        p(o, e, c),
          b(e, t),
          a || ((s = he(t, "toggleTooltip", n[34])), (a = !0));
      },
      p(o, c) {
        c[0] & 128 &&
          i !== (i = `show-more-participants-${o[2].id}`) &&
          U(t, "id", i),
          c[0] & 8192 && U(t, "current_tooltip_id", o[13]),
          c[0] & 128 &&
            r !== (r = `And ${o[123].length - xe} more`) &&
            U(t, "text", r),
          c[0] & 128 && l !== (l = `${qt(o[123])}`) && U(t, "content", l);
      },
      d(o) {
        o && m(e), (a = !1), s();
      },
    };
  }
  function yc(n) {
    return { c: k, m: k, p: k, d: k };
  }
  function ha(n) {
    let e,
      t,
      i = Mt(new Date(n[2].date * 1e3)) + "",
      r;
    return {
      c() {
        (e = v("div")),
          (t = v("span")),
          (r = Z(i)),
          f(e, "class", "message-date");
      },
      m(l, a) {
        p(l, e, a), b(e, t), b(t, r);
      },
      p(l, a) {
        a[0] & 128 &&
          i !== (i = Mt(new Date(l[2].date * 1e3)) + "") &&
          ue(r, i);
      },
      d(l) {
        l && m(e);
      },
    };
  }
  function pa(n) {
    let e, t, i, r, l, a;
    i = new Tr({ props: { "aria-hidden": "true" } });
    function s(...o) {
      return n[81](n[2], ...o);
    }
    return {
      c() {
        (e = v("div")),
          (t = v("button")),
          ze(i.$$.fragment),
          f(t, "title", "Reply"),
          f(t, "aria-label", "Reply"),
          f(e, "class", "reply");
      },
      m(o, c) {
        p(o, e, c),
          b(e, t),
          Fe(i, t, null),
          (r = !0),
          l || ((a = he(t, "click", Ke(s))), (l = !0));
      },
      p(o, c) {
        n = o;
      },
      i(o) {
        r || (C(i.$$.fragment, o), (r = !0));
      },
      o(o) {
        j(i.$$.fragment, o), (r = !1);
      },
      d(o) {
        o && m(e), Ie(i), (l = !1), a();
      },
    };
  }
  function ga(n) {
    let e, t, i, r, l, a;
    i = new Ar({ props: { "aria-hidden": "true" } });
    function s(...o) {
      return n[82](n[2], ...o);
    }
    return {
      c() {
        (e = v("div")),
          (t = v("button")),
          ze(i.$$.fragment),
          f(t, "title", "Reply all"),
          f(t, "aria-label", "Reply all"),
          f(e, "class", "reply-all");
      },
      m(o, c) {
        p(o, e, c),
          b(e, t),
          Fe(i, t, null),
          (r = !0),
          l || ((a = he(t, "click", Ke(s))), (l = !0));
      },
      p(o, c) {
        n = o;
      },
      i(o) {
        r || (C(i.$$.fragment, o), (r = !0));
      },
      o(o) {
        j(i.$$.fragment, o), (r = !1);
      },
      d(o) {
        o && m(e), Ie(i), (l = !1), a();
      },
    };
  }
  function va(n) {
    let e, t, i, r, l, a;
    i = new Or({ props: { "aria-hidden": "true" } });
    function s(...o) {
      return n[83](n[2], ...o);
    }
    return {
      c() {
        (e = v("div")),
          (t = v("button")),
          ze(i.$$.fragment),
          f(t, "title", "Forward"),
          f(t, "aria-label", "Forward"),
          f(e, "class", "forward");
      },
      m(o, c) {
        p(o, e, c),
          b(e, t),
          Fe(i, t, null),
          (r = !0),
          l || ((a = he(t, "click", Ke(s))), (l = !0));
      },
      p(o, c) {
        n = o;
      },
      i(o) {
        r || (C(i.$$.fragment, o), (r = !0));
      },
      o(o) {
        j(i.$$.fragment, o), (r = !1);
      },
      d(o) {
        o && m(e), Ie(i), (l = !1), a();
      },
    };
  }
  function kc(n) {
    let e, t, i, r;
    return (
      (t = new hs({ props: { class: "spinner" } })),
      {
        c() {
          (e = v("div")),
            ze(t.$$.fragment),
            (i = Z(`
                          Loading...`)),
            f(e, "class", "email-loader");
        },
        m(l, a) {
          p(l, e, a), Fe(t, e, null), b(e, i), (r = !0);
        },
        p: k,
        i(l) {
          r || (C(t.$$.fragment, l), (r = !0));
        },
        o(l) {
          j(t.$$.fragment, l), (r = !1);
        },
        d(l) {
          l && m(e), Ie(t);
        },
      }
    );
  }
  function Ec(n) {
    var s;
    let e = ((s = n[2].body) != null ? s : n[2].snippet) + "",
      t,
      i,
      r =
        n[15][n[2].id] &&
        Array.isArray(n[15][n[2].id]) &&
        n[15][n[2].id].length > 0,
      l,
      a = r && ba(n);
    return {
      c() {
        (t = Z(e)), (i = x()), a && a.c(), (l = Me());
      },
      m(o, c) {
        p(o, t, c), p(o, i, c), a && a.m(o, c), p(o, l, c);
      },
      p(o, c) {
        var d;
        c[0] & 128 &&
          e !== (e = ((d = o[2].body) != null ? d : o[2].snippet) + "") &&
          ue(t, e),
          c[0] & 32896 &&
            (r =
              o[15][o[2].id] &&
              Array.isArray(o[15][o[2].id]) &&
              o[15][o[2].id].length > 0),
          r
            ? a
              ? a.p(o, c)
              : ((a = ba(o)), a.c(), a.m(l.parentNode, l))
            : a && (a.d(1), (a = null));
      },
      i: k,
      o: k,
      d(o) {
        o && m(t), o && m(i), a && a.d(o), o && m(l);
      },
    };
  }
  function Tc(n) {
    let e, t, i, r, l;
    return {
      c() {
        (e = v("nylas-message-body")),
          U(e, "message", (t = n[2])),
          U(e, "body", (i = n[2].body));
      },
      m(a, s) {
        p(a, e, s), r || ((l = he(e, "downloadClicked", n[37])), (r = !0));
      },
      p(a, s) {
        s[0] & 128 && t !== (t = a[2]) && U(e, "message", t),
          s[0] & 128 && i !== (i = a[2].body) && U(e, "body", i);
      },
      i: k,
      o: k,
      d(a) {
        a && m(e), (r = !1), l();
      },
    };
  }
  function Ac(n) {
    let e,
      t = $t.sanitize(n[2].conversation) + "",
      i;
    return {
      c() {
        (e = new ni()), (i = Me()), (e.a = i);
      },
      m(r, l) {
        e.m(t, r, l), p(r, i, l);
      },
      p(r, l) {
        l[0] & 128 && t !== (t = $t.sanitize(r[2].conversation) + "") && e.p(t);
      },
      i: k,
      o: k,
      d(r) {
        r && m(i), r && e.d();
      },
    };
  }
  function ba(n) {
    let e,
      t = n[15][n[2].id],
      i = [];
    for (let r = 0; r < t.length; r += 1) i[r] = wa(Rr(n, t, r));
    return {
      c() {
        e = v("div");
        for (let r = 0; r < i.length; r += 1) i[r].c();
        f(e, "class", "attachment");
      },
      m(r, l) {
        p(r, e, l);
        for (let a = 0; a < i.length; a += 1) i[a].m(e, null);
      },
      p(r, l) {
        if (l[0] & 557184) {
          t = r[15][r[2].id];
          let a;
          for (a = 0; a < t.length; a += 1) {
            const s = Rr(r, t, a);
            i[a] ? i[a].p(s, l) : ((i[a] = wa(s)), i[a].c(), i[a].m(e, null));
          }
          for (; a < i.length; a += 1) i[a].d(1);
          i.length = t.length;
        }
      },
      d(r) {
        r && m(e), wt(i, r);
      },
    };
  }
  function wa(n) {
    let e,
      t = (n[129].filename || n[129].id) + "",
      i,
      r,
      l,
      a;
    function s(...o) {
      return n[84](n[129], ...o);
    }
    return {
      c() {
        (e = v("button")), (i = Z(t)), (r = x());
      },
      m(o, c) {
        p(o, e, c),
          b(e, i),
          b(e, r),
          l || ((a = he(e, "click", Ke(s))), (l = !0));
      },
      p(o, c) {
        (n = o),
          c[0] & 32896 &&
            t !== (t = (n[129].filename || n[129].id) + "") &&
            ue(i, t);
      },
      d(o) {
        o && m(e), (l = !1), a();
      },
    };
  }
  function ya(n) {
    let e,
      t,
      i,
      r,
      l,
      a = n[128],
      s,
      o,
      c;
    const d = [mc, uc],
      h = [];
    function w(E, S) {
      return E[2].expanded || E[128] === E[7].messages.length - 1 ? 0 : 1;
    }
    (t = w(n)), (i = h[t] = d[t](n));
    const O = () => n[85](e, a),
      y = () => n[85](null, a);
    function L(...E) {
      return n[86](n[128], ...E);
    }
    function R(...E) {
      return n[87](n[128], ...E);
    }
    return {
      c() {
        (e = v("div")),
          i.c(),
          (r = x()),
          f(
            e,
            "class",
            (l = `individual-message ${
              n[128] === n[7].messages.length - 1 || n[2].expanded
                ? "expanded"
                : "condensed"
            }`),
          ),
          Ae(e, "last-message", n[128] === n[7].messages.length - 1);
      },
      m(E, S) {
        p(E, e, S),
          h[t].m(e, null),
          b(e, r),
          O(),
          (s = !0),
          o || ((c = [he(e, "click", Ke(L)), he(e, "keypress", R)]), (o = !0));
      },
      p(E, S) {
        n = E;
        let H = t;
        (t = w(n)),
          t === H
            ? h[t].p(n, S)
            : (ke(),
              j(h[H], 1, 1, () => {
                h[H] = null;
              }),
              Ee(),
              (i = h[t]),
              i ? i.p(n, S) : ((i = h[t] = d[t](n)), i.c()),
              C(i, 1),
              i.m(e, r)),
          (!s ||
            (S[0] & 128 &&
              l !==
                (l = `individual-message ${
                  n[128] === n[7].messages.length - 1 || n[2].expanded
                    ? "expanded"
                    : "condensed"
                }`))) &&
            f(e, "class", l),
          a !== n[128] && (y(), (a = n[128]), O()),
          S[0] & 128 &&
            Ae(e, "last-message", n[128] === n[7].messages.length - 1);
      },
      i(E) {
        s || (C(i), (s = !0));
      },
      o(E) {
        j(i), (s = !1);
      },
      d(E) {
        E && m(e), h[t].d(), y(), (o = !1), at(c);
      },
    };
  }
  function ka(n) {
    let e,
      t,
      i = n[7].drafts,
      r = [];
    for (let a = 0; a < i.length; a += 1) r[a] = Ca(Mr(n, i, a));
    const l = (a) =>
      j(r[a], 1, 1, () => {
        r[a] = null;
      });
    return {
      c() {
        for (let a = 0; a < r.length; a += 1) r[a].c();
        e = Me();
      },
      m(a, s) {
        for (let o = 0; o < r.length; o += 1) r[o].m(a, s);
        p(a, e, s), (t = !0);
      },
      p(a, s) {
        if ((s[0] & 8400) | (s[1] & 139)) {
          i = a[7].drafts;
          let o;
          for (o = 0; o < i.length; o += 1) {
            const c = Mr(a, i, o);
            r[o]
              ? (r[o].p(c, s), C(r[o], 1))
              : ((r[o] = Ca(c)), r[o].c(), C(r[o], 1), r[o].m(e.parentNode, e));
          }
          for (ke(), o = i.length; o < r.length; o += 1) l(o);
          Ee();
        }
      },
      i(a) {
        if (!t) {
          for (let s = 0; s < i.length; s += 1) C(r[s]);
          t = !0;
        }
      },
      o(a) {
        r = r.filter(Boolean);
        for (let s = 0; s < r.length; s += 1) j(r[s]);
        t = !1;
      },
      d(a) {
        wt(r, a), a && m(e);
      },
    };
  }
  function Ea(n) {
    let e, t, i;
    return (
      (t = new or({})),
      {
        c() {
          (e = v("div")),
            ze(t.$$.fragment),
            f(e, "class", "default-avatar draft");
        },
        m(r, l) {
          p(r, e, l), Fe(t, e, null), (i = !0);
        },
        i(r) {
          i || (C(t.$$.fragment, r), (i = !0));
        },
        o(r) {
          j(t.$$.fragment, r), (i = !1);
        },
        d(r) {
          r && m(e), Ie(t);
        },
      }
    );
  }
  function Ta(n) {
    let e,
      t,
      i = {
        ctx: n,
        current: null,
        token: null,
        hasCatch: !1,
        pending: Pc,
        then: Sc,
        catch: Oc,
        value: 123,
      };
    return (
      dt((t = n[38]({ to: n[120].to, cc: n[120].cc, bcc: n[120].bcc })), i),
      {
        c() {
          (e = Me()), i.block.c();
        },
        m(r, l) {
          p(r, e, l),
            i.block.m(r, (i.anchor = l)),
            (i.mount = () => e.parentNode),
            (i.anchor = e);
        },
        p(r, l) {
          (n = r),
            (i.ctx = n),
            (l[0] & 128 &&
              t !==
                (t = n[38]({
                  to: n[120].to,
                  cc: n[120].cc,
                  bcc: n[120].bcc,
                })) &&
              dt(t, i)) ||
              Zt(i, n, l);
        },
        d(r) {
          r && m(e), i.block.d(r), (i.token = null), (i = null);
        },
      }
    );
  }
  function Oc(n) {
    return { c: k, m: k, p: k, d: k };
  }
  function Sc(n) {
    let e,
      t,
      i = n[123].slice(0, xe),
      r = [];
    for (let a = 0; a < i.length; a += 1) r[a] = Aa(Dr(n, i, a));
    let l = n[123].length > xe && Oa(n);
    return {
      c() {
        for (let a = 0; a < r.length; a += 1) r[a].c();
        (e = x()), l && l.c(), (t = Me());
      },
      m(a, s) {
        for (let o = 0; o < r.length; o += 1) r[o].m(a, s);
        p(a, e, s), l && l.m(a, s), p(a, t, s);
      },
      p(a, s) {
        if ((s[0] & 144) | (s[1] & 128)) {
          i = a[123].slice(0, xe);
          let o;
          for (o = 0; o < i.length; o += 1) {
            const c = Dr(a, i, o);
            r[o]
              ? r[o].p(c, s)
              : ((r[o] = Aa(c)), r[o].c(), r[o].m(e.parentNode, e));
          }
          for (; o < r.length; o += 1) r[o].d(1);
          r.length = i.length;
        }
        a[123].length > xe
          ? l
            ? l.p(a, s)
            : ((l = Oa(a)), l.c(), l.m(t.parentNode, t))
          : l && (l.d(1), (l = null));
      },
      d(a) {
        wt(r, a), a && m(e), l && l.d(a), a && m(t);
      },
    };
  }
  function Cc(n) {
    let e;
    return {
      c() {
        e = Z("bcc:");
      },
      m(t, i) {
        p(t, e, i);
      },
      p: k,
      d(t) {
        t && m(e);
      },
    };
  }
  function Nc(n) {
    let e;
    return {
      c() {
        e = Z("cc:");
      },
      m(t, i) {
        p(t, e, i);
      },
      p: k,
      d(t) {
        t && m(e);
      },
    };
  }
  function Lc(n) {
    let e = `to ${
        n[4].you && n[124].email === n[4].you.email_address ? "Me" : ""
      }`,
      t;
    return {
      c() {
        t = Z(e);
      },
      m(i, r) {
        p(i, t, r);
      },
      p(i, r) {
        r[0] & 144 &&
          e !==
            (e = `to ${
              i[4].you && i[124].email === i[4].you.email_address ? "Me" : ""
            }`) &&
          ue(t, e);
      },
      d(i) {
        i && m(t);
      },
    };
  }
  function Mc(n) {
    let e = n[124].email + "",
      t;
    return {
      c() {
        t = Z(e);
      },
      m(i, r) {
        p(i, t, r);
      },
      p(i, r) {
        r[0] & 128 && e !== (e = i[124].email + "") && ue(t, e);
      },
      d(i) {
        i && m(t);
      },
    };
  }
  function Dc(n) {
    var s;
    let e = ((s = n[124].name) != null ? s : n[4].you.name) + "",
      t,
      i,
      r = n[124].email + "",
      l,
      a;
    return {
      c() {
        (t = Z(e)), (i = Z(" <")), (l = Z(r)), (a = Z(">"));
      },
      m(o, c) {
        p(o, t, c), p(o, i, c), p(o, l, c), p(o, a, c);
      },
      p(o, c) {
        var d;
        c[0] & 144 &&
          e !== (e = ((d = o[124].name) != null ? d : o[4].you.name) + "") &&
          ue(t, e),
          c[0] & 128 && r !== (r = o[124].email + "") && ue(l, r);
      },
      d(o) {
        o && m(t), o && m(i), o && m(l), o && m(a);
      },
    };
  }
  function Aa(n) {
    let e, t, i;
    function r(d, h) {
      if (d[126] === 0) return Lc;
      if (d[124]._type === "cc" && d[126] === d[120].to.length) return Nc;
      if (
        d[124]._type === "bcc" &&
        d[126] === d[120].to.length + d[120].cc.length
      )
        return Cc;
    }
    let l = r(n),
      a = l && l(n);
    function s(d, h) {
      if (d[124].email && d[124].name) return Dc;
      if (d[124].email && !d[124].name) return Mc;
    }
    let o = s(n),
      c = o && o(n);
    return {
      c() {
        (e = v("p")),
          (t = Z(`Draft
                                `)),
          a && a.c(),
          (i = x()),
          c && c.c();
      },
      m(d, h) {
        p(d, e, h), b(e, t), a && a.m(e, null), b(e, i), c && c.m(e, null);
      },
      p(d, h) {
        l === (l = r(d)) && a
          ? a.p(d, h)
          : (a && a.d(1), (a = l && l(d)), a && (a.c(), a.m(e, i))),
          o === (o = s(d)) && c
            ? c.p(d, h)
            : (c && c.d(1), (c = o && o(d)), c && (c.c(), c.m(e, null)));
      },
      d(d) {
        d && m(e), a && a.d(), c && c.d();
      },
    };
  }
  function Oa(n) {
    let e, t, i, r, l, a, s;
    return {
      c() {
        (e = v("div")),
          (t = v("nylas-tooltip")),
          U(t, "id", (i = `show-more-participants-${n[120].id}`)),
          U(t, "current_tooltip_id", n[13]),
          U(t, "icon", Qt),
          U(t, "text", (r = `And ${n[123].length - xe} more`)),
          U(t, "content", (l = `${qt(n[123])}`));
      },
      m(o, c) {
        p(o, e, c),
          b(e, t),
          a || ((s = he(t, "toggleTooltip", n[34])), (a = !0));
      },
      p(o, c) {
        c[0] & 128 &&
          i !== (i = `show-more-participants-${o[120].id}`) &&
          U(t, "id", i),
          c[0] & 8192 && U(t, "current_tooltip_id", o[13]),
          c[0] & 128 &&
            r !== (r = `And ${o[123].length - xe} more`) &&
            U(t, "text", r),
          c[0] & 128 && l !== (l = `${qt(o[123])}`) && U(t, "content", l);
      },
      d(o) {
        o && m(e), (a = !1), s();
      },
    };
  }
  function Pc(n) {
    return { c: k, m: k, p: k, d: k };
  }
  function Sa(n) {
    let e,
      t,
      i,
      r = Mt(new Date(n[120].date * 1e3)) + "",
      l;
    return {
      c() {
        (e = v("div")),
          (t = v("span")),
          (i = Z("Saved at: ")),
          (l = Z(r)),
          f(e, "class", "message-date");
      },
      m(a, s) {
        p(a, e, s), b(e, t), b(t, i), b(t, l);
      },
      p(a, s) {
        s[0] & 128 &&
          r !== (r = Mt(new Date(a[120].date * 1e3)) + "") &&
          ue(l, r);
      },
      d(a) {
        a && m(e);
      },
    };
  }
  function Ca(n) {
    var G;
    let e,
      t,
      i,
      r,
      l,
      a,
      s,
      o,
      c,
      d = n[120].snippet + "",
      h,
      w,
      O = n[122],
      y,
      L,
      R,
      E = n[4].show_contact_avatar && Ea(),
      S = ((G = n[120]) == null ? void 0 : G.to) && Ta(n),
      H = n[4].show_received_timestamp && Sa(n);
    const ae = () => n[88](e, O),
      K = () => n[88](null, O);
    function W(...T) {
      return n[89](n[120], ...T);
    }
    function z(...T) {
      return n[90](n[120], ...T);
    }
    return {
      c() {
        (e = v("div")),
          (t = v("div")),
          (i = v("div")),
          E && E.c(),
          (r = x()),
          (l = v("div")),
          S && S.c(),
          (a = x()),
          (s = v("section")),
          H && H.c(),
          (o = x()),
          (c = v("div")),
          (h = Z(d)),
          (w = x()),
          f(l, "class", "draft-to"),
          f(i, "class", "avatar-info"),
          f(t, "class", "message-head draft"),
          f(c, "class", "snippet"),
          f(e, "tabindex", "0"),
          f(e, "class", "individual-message condensed draft-message"),
          Ae(e, "active-draft", n[120].active);
      },
      m(T, N) {
        p(T, e, N),
          b(e, t),
          b(t, i),
          E && E.m(i, null),
          b(i, r),
          b(i, l),
          S && S.m(l, null),
          b(t, a),
          b(t, s),
          H && H.m(s, null),
          b(e, o),
          b(e, c),
          b(c, h),
          b(e, w),
          ae(),
          (y = !0),
          L || ((R = [he(e, "click", Ke(W)), he(e, "keypress", z)]), (L = !0));
      },
      p(T, N) {
        var _e;
        (n = T),
          n[4].show_contact_avatar
            ? E
              ? N[0] & 16 && C(E, 1)
              : ((E = Ea()), E.c(), C(E, 1), E.m(i, r))
            : E &&
              (ke(),
              j(E, 1, 1, () => {
                E = null;
              }),
              Ee()),
          ((_e = n[120]) == null ? void 0 : _e.to)
            ? S
              ? S.p(n, N)
              : ((S = Ta(n)), S.c(), S.m(l, null))
            : S && (S.d(1), (S = null)),
          n[4].show_received_timestamp
            ? H
              ? H.p(n, N)
              : ((H = Sa(n)), H.c(), H.m(s, null))
            : H && (H.d(1), (H = null)),
          (!y || N[0] & 128) && d !== (d = n[120].snippet + "") && ue(h, d),
          O !== n[122] && (K(), (O = n[122]), ae()),
          N[0] & 128 && Ae(e, "active-draft", n[120].active);
      },
      i(T) {
        y || (C(E), (y = !0));
      },
      o(T) {
        j(E), (y = !1);
      },
      d(T) {
        T && m(e), E && E.d(), S && S.d(), H && H.d(), K(), (L = !1), at(R);
      },
    };
  }
  function Rc(n) {
    let e;
    return {
      c() {
        e = Z("Loading...");
      },
      m(t, i) {
        p(t, e, i);
      },
      p: k,
      i: k,
      o: k,
      d(t) {
        t && m(e);
      },
    };
  }
  function Ic(n) {
    let e,
      t,
      i,
      r,
      l,
      a,
      s,
      o,
      c,
      d = n[16] && jr(n);
    const h = [Ds, Ms],
      w = [];
    function O(y, L) {
      return y[4].thread || y[4].thread_id ? 0 : y[4].message ? 1 : -1;
    }
    return (
      ~(l = O(n)) && (a = w[l] = h[l](n)),
      {
        c() {
          (e = v("nylas-error")),
            (t = x()),
            d && d.c(),
            (i = x()),
            (r = v("main")),
            a && a.c(),
            (this.c = k),
            U(e, "id", n[0]),
            f(r, "class", "nylas-email"),
            f(r, "data-cy", "nylas-email"),
            f(r, "tabindex", "0");
        },
        m(y, L) {
          p(y, e, L),
            p(y, t, L),
            d && d.m(y, L),
            p(y, i, L),
            p(y, r, L),
            ~l && w[l].m(r, null),
            n[95](r),
            (s = !0),
            o ||
              ((c = [he(r, "click", n[22]), he(r, "keypress", n[24])]),
              (o = !0));
        },
        p(y, L) {
          (!s || L[0] & 1) && U(e, "id", y[0]),
            y[16]
              ? d
                ? d.p(y, L)
                : ((d = jr(y)), d.c(), d.m(i.parentNode, i))
              : d && (d.d(1), (d = null));
          let R = l;
          (l = O(y)),
            l === R
              ? ~l && w[l].p(y, L)
              : (a &&
                  (ke(),
                  j(w[R], 1, 1, () => {
                    w[R] = null;
                  }),
                  Ee()),
                ~l
                  ? ((a = w[l]),
                    a ? a.p(y, L) : ((a = w[l] = h[l](y)), a.c()),
                    C(a, 1),
                    a.m(r, null))
                  : (a = null));
        },
        i(y) {
          s || (C(a), (s = !0));
        },
        o(y) {
          j(a), (s = !1);
        },
        d(y) {
          y && m(e),
            y && m(t),
            d && d.d(y),
            y && m(i),
            y && m(r),
            ~l && w[l].d(),
            n[95](null),
            (o = !1),
            at(c);
        },
      }
    );
  }
  const xe = 3,
    Na = 2,
    La = 1,
    jc = 20;
  function Ma(n) {
    n.stopImmediatePropagation();
  }
  function Mt(n) {
    return (
      n.toLocaleDateString("en-US", {
        weekday: "short",
        month: "long",
        day: "numeric",
      }) +
      ", " +
      n.toLocaleTimeString("en-US", {
        hour12: !0,
        hour: "numeric",
        minute: "2-digit",
      })
    );
  }
  function zn(n, e) {
    var t, i;
    return (
      n &&
      e &&
      n.length > 1 &&
      e.length >= 2 &&
      ((t = n[0]) === null || t === void 0 ? void 0 : t.from.length) &&
      e[0].email !==
        ((i = n[n.length - 1]) === null || i === void 0
          ? void 0
          : i.from[0].email)
    );
  }
  function Da(n) {
    var e;
    return (
      n && ((e = n.drafts) === null || e === void 0 ? void 0 : e.length) > 0
    );
  }
  function qt(n) {
    return n.reduce((e, t, i) => {
      const r =
        t.name && t.name !== t.email ? `${t.name} <${t.email}>` : t.email;
      return (
        i === 0
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
  function Fc(n, e, t) {
    let i, r, l, a, s, o, c;
    fn(n, oi, (u) => t(101, (a = u))),
      fn(n, $l, (u) => t(76, (s = u))),
      fn(n, eo, (u) => t(102, (o = u))),
      fn(n, li, (u) => t(77, (c = u)));
    var d =
        (this && this.__awaiter) ||
        function (u, g, I, Y) {
          function Oe(Te) {
            return Te instanceof I
              ? Te
              : new I(function (He) {
                  He(Te);
                });
          }
          return new (I || (I = Promise))(function (Te, He) {
            function Wt(tt) {
              try {
                jt(Y.next(tt));
              } catch (mt) {
                He(mt);
              }
            }
            function cn(tt) {
              try {
                jt(Y.throw(tt));
              } catch (mt) {
                He(mt);
              }
            }
            function jt(tt) {
              tt.done ? Te(tt.value) : Oe(tt.value).then(Wt, cn);
            }
            jt((Y = Y.apply(u, g || [])).next());
          });
        },
      h,
      w,
      O,
      y,
      L,
      R,
      E,
      S,
      H,
      ae,
      K;
    const W = di(Yt());
    let { id: z = "" } = e,
      { access_token: G = "" } = e,
      { clean_conversation: T } = e,
      { click_action: N = "default" } = e,
      { message_id: _e } = e,
      { message: pe } = e,
      { show_contact_avatar: le } = e,
      { show_expanded_email_view_onload: ee } = e,
      { show_number_of_messages: Q } = e,
      { show_received_timestamp: te } = e,
      { show_star: be } = e,
      { show_thread_actions: $ } = e,
      { theme: Pe } = e,
      { thread_id: ve } = e,
      { thread: se } = e,
      { you: ye } = e,
      { show_reply: D } = e,
      { show_reply_all: me } = e,
      { show_forward: Ye } = e;
    const F = {
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
    let oe = {},
      M = fi({}, {}, F),
      pt,
      gt = !1,
      Qe = !1,
      je = !1;
    yi(() =>
      d(void 0, void 0, void 0, function* () {
        var u, g, I;
        if (
          (yield qa(),
          t(66, (Qe = !0)),
          t(
            65,
            (oe =
              (yield o[JSON.stringify({ component_id: z, access_token: G })]) ||
              {}),
          ),
          t(67, (je = !0)),
          t(4, (M = fi(e, oe, F))),
          we(),
          z && !((u = M.you) === null || u === void 0 ? void 0 : u.id) && !gn)
        ) {
          t(
            4,
            (M.you = yield Sl({
              component_id: et.component_id,
              access_token: G,
            })),
            M,
          );
          const Y = { component_id: z, access_token: G };
          ((g = M.you) === null || g === void 0
            ? void 0
            : g.organization_unit) === Hn.Label
            ? t(70, (Le = yield as.getLabels(Y)))
            : ((I = M.you) === null || I === void 0
                ? void 0
                : I.organization_unit) === Hn.Folder &&
              t(71, (ot = yield us.getFolders(Y)));
        }
      }),
    );
    let Ne = e;
    function we() {
      return d(this, void 0, void 0, function* () {
        const u = Ne.thread_id;
        t(68, (Ne = e)),
          t(
            4,
            (M.thread_id =
              !se && !_e && !pe ? M.thread_id || oe.thread_id : ""),
            M,
          ),
          z && !M.thread_id && !M.thread && M.message_id && En(),
          (!A || u !== M.thread_id) && (yield mi());
      });
    }
    let $e = {},
      Ht = {},
      B = !1;
    function V(u) {
      var g;
      return d(this, void 0, void 0, function* () {
        const I =
            ((g = u.messages) === null || g === void 0
              ? void 0
              : g.reduce((Oe, Te) => {
                  const He = Te.from[0];
                  return (Oe[He.email] = He), Oe;
                }, {})) || {},
          Y = Array.from(Object.values(I)) || [];
        for (const Oe of Y) {
          const Te = Oe.email;
          !$e[Te] && Te && t(5, ($e[Te] = yield Bn(Oe)), $e);
        }
      });
    }
    let q,
      ce = [],
      Le = [],
      ot = [],
      At = [],
      et,
      Ot,
      A,
      pn;
    function mi() {
      var u, g;
      return d(this, void 0, void 0, function* () {
        if (z && M.thread_id) {
          pn = kl({
            component_id: z,
            thread_id: M.thread_id,
            access_token: G,
          }).catch(Nt);
          const I = yield pn;
          if (
            ((pn = null),
            ((u = I == null ? void 0 : I.messages) === null || u === void 0
              ? void 0
              : u.length) > 0)
          ) {
            const Y = I.messages.length - 1;
            I.messages[Y] = yield yt(I.messages[Y].id);
          }
          I &&
            ((I.expanded =
              (g = A == null ? void 0 : A.expanded) !== null && g !== void 0
                ? g
                : M.show_expanded_email_view_onload),
            t(7, (A = I)),
            W("threadLoaded", I));
        }
      });
    }
    let gn;
    function _i() {
      A
        ? Ii({
            access_token: G,
            component_id: z,
            message_id: A.messages.slice(-jc).map((u) => u.id),
          }).then((u) => {
            u.forEach((g) => {
              let I = A.messages.find((Y) => Y.id === g.id);
              I && (I.conversation = g.conversation);
            }),
              t(7, A),
              t(4, M),
              t(76, s),
              t(73, Ot),
              t(59, R),
              t(3, se),
              t(60, E),
              t(61, S),
              t(66, Qe),
              t(67, je),
              t(103, d),
              t(68, Ne),
              t(119, e),
              t(65, oe),
              t(72, et),
              t(39, G),
              t(0, z);
          })
        : M.message &&
          Ii({ component_id: z, message_id: [M.message.id] }).then((u) => {
            u.forEach((g) => {
              M.message && t(4, (M.message.conversation = g.conversation), M);
            }),
              t(7, A),
              t(4, M),
              t(76, s),
              t(73, Ot),
              t(59, R),
              t(3, se),
              t(60, E),
              t(61, S),
              t(66, Qe),
              t(67, je),
              t(103, d),
              t(68, Ne),
              t(119, e),
              t(65, oe),
              t(72, et),
              t(39, G),
              t(0, z);
          });
    }
    let vt;
    function Bn(u) {
      var g;
      return d(this, void 0, void 0, function* () {
        if ((t(12, (vt.query = `?email=${u.email}`), vt), z)) {
          let I = a[JSON.stringify(vt)];
          return (
            I || (I = yield oi.addContact(vt)),
            (g = I[0]) !== null && g !== void 0 ? g : u
          );
        } else return u;
      });
    }
    function en() {
      return d(this, void 0, void 0, function* () {
        A && et.component_id && M.thread_id && (yield Ri(et, A).catch(Nt));
      });
    }
    let vn = !1;
    function tn(u) {
      return d(this, void 0, void 0, function* () {
        if (vn) return;
        const g = St(A);
        if (!(A[g].length <= 0)) {
          if (
            ((vn = !0),
            M.click_action === "default" || M.click_action === "mailbox")
          ) {
            if (
              (A &&
                M.click_action === "default" &&
                (A.unread && (t(7, (A.unread = !A.unread), A), yield en()),
                t(7, (A.expanded = !A.expanded), A)),
              !gn && g !== Lt.DRAFTS)
            ) {
              const { messages: I } = A,
                Y = I.length - 1;
              (I[Y].expanded = !I[Y].expanded),
                I[Y].body || (I[Y] = yield yt(I[Y].id));
            }
          } else
            g !== Lt.DRAFTS &&
              !A.expanded &&
              t(7, (A.expanded = !A.expanded), A);
          (vn = !1),
            W("threadClicked", { event: u, thread: A, messageType: g }),
            t(13, (Ue = ""));
        }
      });
    }
    function bn(u) {
      return d(this, void 0, void 0, function* () {
        if (A) {
          t(
            7,
            (A = Object.assign(Object.assign({}, A), { unread: !A.unread })),
          ),
            yield en(),
            W("toggleThreadUnreadStatus", { event: u, thread: A });
          return;
        }
      });
    }
    function bt(u) {
      var g;
      return d(this, void 0, void 0, function* () {
        if (M.click_action !== "mailbox")
          if (r) {
            const I =
              ((g = A.labels) === null || g === void 0
                ? void 0
                : g.map((Y) => Y.id)) || [];
            t(7, (A.label_ids = [...I, r]), A), yield en();
          } else
            l &&
              (t(7, (A.folder_id = l), A),
              et.component_id &&
                M.thread_id &&
                A.messages.forEach((I, Y) =>
                  d(this, void 0, void 0, function* () {
                    yield Tl(
                      et.component_id,
                      Object.assign(Object.assign({}, I), { folder_id: l }),
                      G,
                    );
                  }),
                ));
        W("threadDeleted", { event: u, thread: A });
      });
    }
    function Gn(u) {
      (M.message && (!M.thread_id || !M.thread)) ||
        (M.click_action === "mailbox" && A.expanded) ||
        (u.preventDefault(), tn(u));
    }
    function nn(u) {
      W("returnToMailbox", { event: u, thread: A });
    }
    function wn(u) {
      (M.message && (!M.thread_id || !M.thread)) ||
        (M.click_action === "mailbox" && A.expanded) ||
        (u.preventDefault(), u.code === "Enter" && tn(u));
    }
    function hi(u) {
      return d(this, void 0, void 0, function* () {
        u.stopImmediatePropagation(),
          A &&
            (t(
              7,
              (A = Object.assign(Object.assign({}, A), {
                starred: !A.starred,
              })),
            ),
            yield en()),
          W("threadStarred", { event: u, thread: A });
      });
    }
    function zt(u, g, I) {
      var Y, Oe;
      return d(this, void 0, void 0, function* () {
        u.stopImmediatePropagation();
        const Te = { name: M.you.name, email: M.you.email_address },
          He = [Te],
          { to: Wt, cc: cn } = po({ myEmail: Te.email, message: g, type: I }),
          jt = (
            (Y = g.subject) === null || Y === void 0
              ? void 0
              : Y.toLowerCase().startsWith("re:")
          )
            ? g.subject
            : `Re: ${g.subject}`,
          tt = {
            reply_to_message_id: g.id,
            from: He,
            to: Wt,
            reply_to: He,
            cc: cn,
            bcc: g.bcc,
            body: g.body,
            subject: jt,
          };
        let mt;
        switch (I) {
          case "reply":
            mt = "replyClicked";
            break;
          case "reply_all":
            mt = "replyAllClicked";
            break;
        }
        const Jt =
          (Oe = A == null ? void 0 : A.drafts) === null || Oe === void 0
            ? void 0
            : Oe.find((rt) => rt.reply_to_message_id === g.id);
        if (Jt) {
          if (!M.thread && Jt.id) {
            const rt = yield yt(Jt.id);
            (Jt.body = rt.body), (tt.body = rt.body);
          }
          W(mt, {
            event: u,
            message: Object.assign({}, Jt),
            thread: A,
            value: tt,
          });
        } else W(mt, { event: u, message: Object.assign({}, g), thread: A, value: tt });
      });
    }
    function yn(u, g) {
      var I;
      return d(this, void 0, void 0, function* () {
        const Y =
            (I = A == null ? void 0 : A.drafts) === null || I === void 0
              ? void 0
              : I.find((He) => He.reply_to_message_id === g.id),
          Oe = `Fwd: ${g.subject}`,
          Te = { reply_to_message_id: g.id, subject: Oe, body: g.body };
        if (Y) {
          if (!M.thread && Y.id) {
            const He = yield yt(Y.id);
            (Y.body = He.body), (Te.body = He.body);
          }
          W("forwardClicked", {
            event: u,
            message: Object.assign({}, Y),
            thread: A,
            value: Te,
          });
        } else W("forwardClicked", { event: u, message: Object.assign({}, g), thread: A, value: Te });
      });
    }
    function pi(u) {
      var g, I;
      return (
        ((g = u == null ? void 0 : u.to) === null || g === void 0
          ? void 0
          : g.length) +
          ((I = u == null ? void 0 : u.cc) === null || I === void 0
            ? void 0
            : I.length) >
          1 && !er(M.you.email_address, u, "from")
      );
    }
    function kn(u, g) {
      u.stopImmediatePropagation(),
        g === A.messages.length - 1
          ? Ma(u)
          : (t(7, (A.messages[g].expanded = !A.messages[g].expanded), A),
            W("messageClicked", {
              event: u,
              message: A.messages[g],
              thread: A,
            }),
            M.thread ||
              yt(A.messages[g].id).then((I) => {
                t(7, (A.messages[g].body = I.body), A);
              }));
    }
    function st(u, g) {
      u.stopImmediatePropagation(),
        u.code === "Enter" &&
          (g === A.messages.length - 1
            ? Ma(u)
            : t(7, (A.messages[g].expanded = !A.messages[g].expanded), A));
    }
    function yt(u) {
      return z
        ? Al(et, u).then((g) =>
            d(this, void 0, void 0, function* () {
              if (ci.hasInlineFiles(g)) {
                const I = yield rn(g);
                return W("messageLoaded", I), I;
              }
              return W("messageLoaded", g), g;
            }),
          )
        : new Promise(() => null);
    }
    function En() {
      Ol({ access_token: G, component_id: z, message_id: M.message_id }).then(
        (u) =>
          d(this, void 0, void 0, function* () {
            if ((t(4, (M.message = u), M), ci.hasInlineFiles(M.message))) {
              const g = yield rn(M.message);
              t(4, (M.message = g), M);
            }
            W("messageLoaded", M.message);
          }),
      );
    }
    function Vn(u, g) {
      u.stopImmediatePropagation(), Jn(u, g);
    }
    function Wn(u, g) {
      u.stopImmediatePropagation(), u.code === "Enter" && Jn(u, g);
    }
    function Jn(u, g) {
      var I;
      return d(this, void 0, void 0, function* () {
        if (g) {
          if (
            ((g.draft_id = g.id),
            (I = A == null ? void 0 : A.drafts) === null ||
              I === void 0 ||
              I.forEach((Y) => (Y.active = Y.id === g.id)),
            !M.thread && g.id)
          ) {
            const Y = yield yt(g.id);
            g.body = Y.body;
          }
          W("draftClicked", { event: u, message: g, thread: A });
        }
      });
    }
    const xn = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    function Tn(u) {
      const g = new Date(new Date().setHours(0, 0, 0, 0)),
        I = new Date(
          g.getFullYear(),
          g.getMonth(),
          g.getDate() - 1,
          0,
          0,
          0,
          0,
        ),
        Y = new Date(
          g.getFullYear(),
          g.getMonth(),
          g.getDate() - 6,
          0,
          0,
          0,
          0,
        ),
        Oe = new Date(g.getFullYear(), 0, 1);
      return u >= g
        ? u.toLocaleTimeString("en-US", {
            hour12: !0,
            hour: "numeric",
            minute: "2-digit",
          })
        : u >= I
        ? "Yesterday"
        : u >= Y
        ? xn[u.getDay()]
        : u >= Oe
        ? u.toLocaleDateString("en-US", { month: "long", day: "numeric" })
        : u.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          });
    }
    let Ue = "";
    function Yn(u) {
      t(13, (Ue = u.detail.tooltipID));
    }
    function Je(u) {
      let g = [];
      const I = u.messages,
        Y = u.drafts;
      for (let Oe = I.length - 1; Oe >= 0 && g.length != 2; Oe--) {
        const Te = I[Oe].from;
        if (Te && Te.length > 0 && Te) {
          const He = Te[0].email === pt ? "Me" : Te[0].name || Te[0].email;
          g.includes(He) || g.push(He);
        }
      }
      return Y.length && g.unshift("Draft"), g;
    }
    let An = !1,
      Re = {};
    function Bt() {
      var u;
      const g = St(A);
      t(
        15,
        (Re =
          (u = A[g]) === null || u === void 0
            ? void 0
            : u.reduce((I, Y) => {
                for (const [Oe, Te] of Y.files.entries())
                  sr(Te) &&
                    (I[Y.id] || (I[Y.id] = []),
                    (I[Y.id] = [...I[Y.id], Y.files[Oe]]));
                return I;
              }, {})),
      );
    }
    function rn(u) {
      var g;
      return d(this, void 0, void 0, function* () {
        const I = yield ci.getFilesForMessage(u, {
          component_id: z,
          access_token: G,
        });
        for (const Y of Object.values(I))
          u.body &&
            (u.body =
              (g = u.body) === null || g === void 0
                ? void 0
                : g.replaceAll(
                    `src="cid:${Y.content_id}"`,
                    `src="data:${Y.content_type};base64,${Y.data}"`,
                  ));
        return u;
      });
    }
    function an(u, g) {
      return d(this, void 0, void 0, function* () {
        if (
          (u.stopImmediatePropagation(),
          z && ((A && M.thread_id) || M.message_id))
        ) {
          const I = yield Zi({
            file_id: g.id,
            component_id: z,
            access_token: G,
          });
          so(I, g);
        }
        W("downloadClicked", { event: u, thread: A, file: g });
      });
    }
    function On(u) {
      return d(this, void 0, void 0, function* () {
        const g = u.detail.file;
        an(u, g);
      });
    }
    let Dt = null,
      kt = !1;
    function St(u) {
      return u[Lt.DRAFTS].length && !u[Lt.MESSAGES].length
        ? Lt.DRAFTS
        : Lt.MESSAGES;
    }
    function Sn({ to: u, cc: g, bcc: I }) {
      return Promise.resolve([
        ...ui(u, { _type: "to" }),
        ...ui(g, { _type: "cc" }),
        ...ui(I, { _type: "bcc" }),
      ]);
    }
    let Gt;
    const Pt = () => t(9, (gt = !0)),
      ln = () => t(9, (gt = !0)),
      on = (u) => bt(u),
      Zn = (u, g) => zt(g, u, "reply"),
      Cn = (u, g) => zt(g, u, "reply_all"),
      Vt = (u, g) => yn(g, u),
      Rt = (u, g) => W("fileClicked", { event: g, file: u });
    function It(u, g) {
      hn[u ? "unshift" : "push"](() => {
        (ce[g] = u), t(6, ce);
      });
    }
    const Kn = (u, g) => kn(g, u),
      Xn = (u, g) => st(g, u);
    function Qn(u, g) {
      hn[u ? "unshift" : "push"](() => {
        (ce[g] = u), t(6, ce);
      });
    }
    const Nn = (u, g) => Vn(g, u),
      $n = (u, g) => Wn(g, u),
      Ln = (u, g) => an(g, u),
      Mn = (u) => zt(u, M.message, "reply"),
      Et = (u) => zt(u, M.message, "reply_all"),
      sn = (u) => yn(u, pe);
    function Dn(u) {
      hn[u ? "unshift" : "push"](() => {
        (q = u), t(11, q);
      });
    }
    return (
      (n.$$set = (u) => {
        t(119, (e = fe(fe({}, e), Ce(u)))),
          "id" in u && t(0, (z = u.id)),
          "access_token" in u && t(39, (G = u.access_token)),
          "clean_conversation" in u && t(40, (T = u.clean_conversation)),
          "click_action" in u && t(1, (N = u.click_action)),
          "message_id" in u && t(41, (_e = u.message_id)),
          "message" in u && t(2, (pe = u.message)),
          "show_contact_avatar" in u && t(42, (le = u.show_contact_avatar)),
          "show_expanded_email_view_onload" in u &&
            t(43, (ee = u.show_expanded_email_view_onload)),
          "show_number_of_messages" in u &&
            t(44, (Q = u.show_number_of_messages)),
          "show_received_timestamp" in u &&
            t(45, (te = u.show_received_timestamp)),
          "show_star" in u && t(46, (be = u.show_star)),
          "show_thread_actions" in u && t(47, ($ = u.show_thread_actions)),
          "theme" in u && t(48, (Pe = u.theme)),
          "thread_id" in u && t(49, (ve = u.thread_id)),
          "thread" in u && t(3, (se = u.thread)),
          "you" in u && t(50, (ye = u.you)),
          "show_reply" in u && t(51, (D = u.show_reply)),
          "show_reply_all" in u && t(52, (me = u.show_reply_all)),
          "show_forward" in u && t(53, (Ye = u.show_forward));
      }),
      (n.$$.update = () => {
        if (
          (n.$$.dirty[2] & 8 && W("manifestLoaded", oe),
          n.$$.dirty[2] & 32768 && Object.keys(c).length && W("onError", c),
          Qe &&
            je &&
            (() =>
              d(void 0, void 0, void 0, function* () {
                JSON.stringify(Ne) !== JSON.stringify(e) &&
                  (t(4, (M = fi(e, oe, F))), yield we());
              }))(),
          (n.$$.dirty[0] & 16) | (n.$$.dirty[1] & 8388608) &&
            t(
              8,
              (pt =
                t(54, (h = M.you)) === null || h === void 0
                  ? void 0
                  : h.email_address),
            ),
          (n.$$.dirty[0] & 17) | (n.$$.dirty[1] & 256) &&
            t(
              72,
              (et = {
                access_token: G,
                component_id: z,
                thread_id: M.thread_id,
              }),
            ),
          n.$$.dirty[2] & 1024 && t(73, (Ot = JSON.stringify(et))),
          (n.$$.dirty[0] & 24) |
            (n.$$.dirty[1] & 1879048192) |
            (n.$$.dirty[2] & 18432) &&
            M.thread &&
            M.thread.id)
        ) {
          const u =
            t(
              60,
              (E =
                t(59, (R = s[Ot])) === null || R === void 0
                  ? void 0
                  : R.find((g) => g && g.id === (se == null ? void 0 : se.id))),
            ) !== null && E !== void 0
              ? E
              : M.thread;
          if (M.show_expanded_email_view_onload) {
            u.expanded = M.show_expanded_email_view_onload;
            const g = u.messages[u.messages.length - 1];
            g.body =
              t(61, (S = g.body)) !== null && S !== void 0 ? S : g.snippet;
          }
          t(7, (A = u));
        }
        (n.$$.dirty[0] & 184) | (n.$$.dirty[2] & 128) &&
          (() =>
            d(void 0, void 0, void 0, function* () {
              if (B || !$e) {
                if ((t(69, (B = !1)), se && se.messages)) yield V(se);
                else if (A) yield V(A);
                else if (M.message) {
                  const u = M.message.from[0];
                  t(5, ($e[u.email] = yield Bn(u)), $e);
                }
              }
            }))(),
          (n.$$.dirty[0] & 160) | (n.$$.dirty[1] & 16777216) &&
            t(
              10,
              (Ht =
                A && $e
                  ? $e[
                      t(55, (w = A.messages[A.messages.length - 1])) === null ||
                      w === void 0
                        ? void 0
                        : w.from[0].email
                    ]
                  : {}),
            ),
          (n.$$.dirty[0] & 48) | (n.$$.dirty[1] & 33554432) &&
            t(
              17,
              (i =
                M.message && $e
                  ? $e[
                      t(56, (O = M.message)) === null || O === void 0
                        ? void 0
                        : O.from[0].email
                    ]
                  : {}),
            ),
          n.$$.dirty[0] & 16 && (M.thread_id, t(69, (B = !0))),
          (n.$$.dirty[1] & 67108864) | (n.$$.dirty[2] & 256) &&
            (r =
              Le && Le.length
                ? t(57, (y = Le.find((u) => u.name === "trash"))) === null ||
                  y === void 0
                  ? void 0
                  : y.id
                : null),
          (n.$$.dirty[1] & 134217728) | (n.$$.dirty[2] & 512) &&
            (l =
              ot && ot.length
                ? t(58, (L = ot.find((u) => u.name === "trash"))) === null ||
                  L === void 0
                  ? void 0
                  : L.id
                : null),
          n.$$.dirty[0] & 128 && t(18, (At = A ? A.participants : [])),
          n.$$.dirty[0] & 16 && (gn = !!M.thread),
          n.$$.dirty[0] & 16 &&
            M.clean_conversation &&
            (M.thread_id || M.message_id) &&
            _i(),
          (n.$$.dirty[0] & 1) | (n.$$.dirty[1] & 256) &&
            t(12, (vt = { component_id: z, access_token: G, query: "" })),
          (n.$$.dirty[0] & 128) | (n.$$.dirty[2] & 3) &&
            t(
              14,
              (An =
                !(t(62, (H = A == null ? void 0 : A.messages)) === null ||
                H === void 0
                  ? void 0
                  : H.length) &&
                !(t(63, (ae = A == null ? void 0 : A.drafts)) === null ||
                ae === void 0
                  ? void 0
                  : ae.length)),
            ),
          n.$$.dirty[0] & 128 && A && Bt(),
          (n.$$.dirty[0] & 192) | (n.$$.dirty[2] & 4) &&
            t(
              74,
              (Dt =
                ce[
                  (t(64, (K = A == null ? void 0 : A.messages)) === null ||
                  K === void 0
                    ? void 0
                    : K.length) - 1
                ]),
            ),
          n.$$.dirty[2] & 12288 &&
            Dt &&
            !kt &&
            Dt.offsetTop > window.innerHeight &&
            (Dt.scrollIntoView({ behavior: "smooth", block: "end" }),
            t(75, (kt = !0))),
          n.$$.dirty[0] & 16 &&
            M.theme &&
            (M.theme.startsWith(".") || M.theme.startsWith("http")
              ? t(16, (Gt = M.theme))
              : M.theme &&
                t(
                  16,
                  (Gt = `https://unpkg.com/@nylas/components-email@${Ls.version}/themes/${M.theme}.css`),
                ));
      }),
      (e = Ce(e)),
      [
        z,
        N,
        pe,
        se,
        M,
        $e,
        ce,
        A,
        pt,
        gt,
        Ht,
        q,
        vt,
        Ue,
        An,
        Re,
        Gt,
        i,
        At,
        W,
        bn,
        bt,
        Gn,
        nn,
        wn,
        hi,
        zt,
        yn,
        pi,
        kn,
        st,
        Vn,
        Wn,
        Tn,
        Yn,
        Je,
        an,
        On,
        Sn,
        G,
        T,
        _e,
        le,
        ee,
        Q,
        te,
        be,
        $,
        Pe,
        ve,
        ye,
        D,
        me,
        Ye,
        h,
        w,
        O,
        y,
        L,
        R,
        E,
        S,
        H,
        ae,
        K,
        oe,
        Qe,
        je,
        Ne,
        B,
        Le,
        ot,
        et,
        Ot,
        Dt,
        kt,
        s,
        c,
        Pt,
        ln,
        on,
        Zn,
        Cn,
        Vt,
        Rt,
        It,
        Kn,
        Xn,
        Qn,
        Nn,
        $n,
        Ln,
        Mn,
        Et,
        sn,
        Dn,
      ]
    );
  }
  class Pa extends Kt {
    constructor(e) {
      super();
      (this.shadowRoot.innerHTML =
        '<style>@charset "UTF-8";*{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;list-style:none}.sr-only{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}main{--black:#161717;--grey-dark:#636671;--grey:#bdc0cb;--grey-lighter:#dfe1e8;--grey-dark-warm:#9fa4b5;--grey-lightest:#f7f7f8;--grey-background:#f0f1f5;--white:#ffffff;--blue:#314fa9;--blue-lighter:#f0f3ff;--red:#ee3248;--red-lighter:#ffeef0;--fs-12:0.75rem;--fs-14:0.875rem;--fs-16:1rem;--black-90:#2c2e2e;--grey-light:#f7f7f8;--grey-warm:#cbcbcb}main{height:100%;width:100%;position:relative;display:grid;font-family:var(--nylas-email-font-family, -apple-system, BlinkMacSystemFont, sans-serif)}main .email-row{background:var(--nylas-email-background, var(--grey-lightest));border:1px solid var(--nylas-email-border-style, var(--grey-lighter))}main .email-row nylas-tooltip{position:relative}main .email-row .default-avatar{background:var(--nylas-default-avatar-background, var(--blue));border-radius:50%;color:var(--nylas-default-avatar-color, var(--white));font-family:sans-serif;font-size:1rem;font-weight:bold;height:32px;line-height:35px;text-align:center;text-transform:uppercase;width:32px}main .email-row .default-avatar.deleted{background:var(--red)}main .email-row .default-avatar.draft{background:var(--nylas-email-snippet-color, var(--grey-dark))}main .email-row header{font-size:1.2rem;font-weight:700;padding:0.5rem;padding-bottom:0}main .email-row div.starred{position:relative;display:flex;justify-content:center;align-items:center}main .email-row div.starred button{background-color:transparent;cursor:pointer}main .email-row div.starred button:before{content:"\u2605";display:inline-block;font-size:1.1em;color:var(--nylas-email-star-button-inactive-color, #8d94a5);-webkit-user-select:none;-moz-user-select:none;user-select:none}main .email-row div.starred button.starred:before{color:var(--nylas-email-star-button-active-color, #ffc107)}main .email-row div.starred button:hover:before{color:var(--nylas-email-star-button-hover-color, #ffc107)}main .email-row.expanded{background:var(--nylas-email-body-background, var(--white));padding:0;border:1px solid var(--nylas-email-border-style-expanded, var(--grey-lighter));border-radius:4px}main .email-row.expanded .email-loader{height:3rem;display:flex;align-items:center;justify-content:center}main .email-row.expanded .email-loader .spinner{height:18px;animation:rotate 2s linear infinite;margin-right:10px}@keyframes rotate{to{transform:rotate(360deg)}}main .email-row.expanded .subject-header{outline:1px solid var(--grey-lighter);display:flex;align-items:center;padding:24px 16px;gap:8px;border-radius:4px 4px 0 0;font-weight:bold;display:flex;justify-content:space-between;color:var(--nylas-email-subject-color, black);background:var(--nylas-email-header-background, white)}main .email-row.expanded .subject-header.mailbox{cursor:default}main .email-row.expanded .subject-header>div{display:flex;align-items:center;gap:1rem}main .email-row.expanded .subject-header>div button{display:flex;background:none;border:none;outline:0;width:32px;height:32px;border-radius:6px;justify-content:center;align-items:center;cursor:pointer}main .email-row.expanded .subject-header>div button:hover{background:var(--nylas-email-button-hover-background, var(--grey-lighter))}main .email-row.expanded .subject-header>div button *{width:1em;height:1em;fill:var(--nylas-email-subject-color, var(--grey-dark));stroke:var(--nylas-email-subject-color, var(--grey-dark))}main .email-row.expanded .subject-header [role=toolbar]{outline:none}main .email-row.expanded .subject-header [role=toolbar] button *{width:1em;height:1em}main .email-row.expanded [role=toolbar]{outline:1px solid var(--grey-lighter);display:flex;align-items:center;padding:24px 16px;gap:8px;padding:0.7rem 1rem;gap:1rem}main .email-row.expanded [role=toolbar] button{background:none;cursor:pointer;display:flex}main .email-row.expanded [role=toolbar] button *{width:1em;height:1em;stroke:var(--nylas-email-body-color, var(--grey-dark))}main .email-row.expanded .message-head [role=toolbar]{outline:none}main .email-row.expanded .message-head [role=toolbar] button{background:none;outline:none;cursor:pointer}main .email-row.expanded .icon-container,main .email-row.expanded .icon-container>*{pointer-events:none}main .email-row.expanded.expanded-mailbox-thread .message-from .name{font-weight:600}main .email-row.expanded div.individual-message{box-sizing:border-box;padding:0.5rem}main .email-row.expanded div.individual-message div.message-body{overflow:auto;display:inline-flex;flex-direction:column;width:100%;color:var(--nylas-email-body-color, black)}main .email-row.expanded div.individual-message div.message-body div.attachment{overflow-x:auto}main .email-row.expanded div.individual-message div.message-body div.attachment button{margin:0.5rem;height:fit-content;padding:0.3rem 1rem;border:1px solid var(--nylas-email-attachment-border-style, var(--grey));border-radius:30px;color:var(--nylas-email-attachment-button-color, inherit);background:var(--nylas-email-attachment-button-bg, white);cursor:pointer}main .email-row.expanded div.individual-message div.message-body div.attachment button:hover{background:var(--nylas-email-attachment-button-hover-bg, var(--grey-light))}main .email-row.expanded div.individual-message.condensed div.snippet{text-overflow:ellipsis;overflow:hidden;display:block;max-width:inherit;color:var(--nylas-email-snippet-color, var(--grey-dark));margin-top:0.5rem}main .email-row.expanded div.individual-message.condensed div.message-head .avatar-info{display:flex;align-items:center;gap:0.7rem}main .email-row.expanded div.individual-message.condensed div.message-head .avatar-info .draft-to{color:var(--nylas-email-snippet-color, var(--grey-dark))}main .email-row.expanded div.individual-message:not(:last-of-type){border-bottom:1px solid var(--nylas-email-border-style-expanded, var(--grey-lighter))}main .email-row.expanded div.individual-message:not(.last-message).expanded div.message-head:hover{cursor:n-resize}main .email-row.expanded div.individual-message.last-message .message-head:hover,main .email-row.expanded div.individual-message.last-message .message-body:hover{cursor:default}main .email-row.expanded div.individual-message.active-draft{border:1px solid var(--nylas-email-snippet-color, var(--grey-dark))}main .email-row.expanded div.individual-message div.message-head{display:flex;justify-content:space-between;align-items:baseline;gap:0.5rem}main .email-row.expanded div.individual-message div.message-date{display:flex;color:var(--nylas-email-message-date-color, var(--grey));font-size:12px}main .email-row.expanded div.individual-message div.message-from{display:flex;align-items:center;color:var(--nylas-email-message-from-color, black)}main .email-row.expanded div.individual-message div.message-from span.name{font-weight:600;margin-right:0.5rem}main .email-row.expanded.expanded div.message-head.draft{flex-flow:column}main .email-row.expanded.expanded div.message-head div.message-from-to{margin:0.5rem 0}main .email-row.expanded.expanded div.message-head div.message-from-to .avatar-info{display:flex;align-items:center;gap:0.7rem}main .email-row.expanded.expanded div.message-head div.message-from-to div.message-to{color:var(--nylas-email-message-to-color, var(--grey));max-width:150px;margin-left:calc(32px + 0.7rem)}main .email-row.expanded.expanded div.message-head div.message-from-to div.message-to div{display:grid;grid-template-columns:1fr 16px}main .email-row.expanded.expanded div.message-head div.message-from-to div.message-to div span{text-overflow:ellipsis;overflow:hidden}main .email-row.expanded.expanded.condensed{gap:1rem}main .email-row.expanded.expanded.condensed:hover,main .email-row.expanded.expanded.condensed:focus{cursor:s-resize;outline:none}main .email-row.expanded.expanded.condensed span.snippet{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--nylas-email-snippet-color, var(--grey-dark))}main .email-row:hover{cursor:pointer}main .email-row .from-message-count{align-items:center;display:grid;grid-template-columns:repeat(2, auto);grid-gap:1rem;justify-content:flex-start;max-width:350px;color:var(--nylas-email-participant-color, var(--grey-dark))}main .email-row .from-message-count .from-participants{display:grid;grid-template-columns:1fr fit-content(60px)}main .email-row .from-message-count .from-participants .participants-name{overflow:hidden;white-space:nowrap;position:relative;text-overflow:ellipsis;display:flex}main .email-row .from-message-count .from-participants .participants-name .from-sub-section.deleted-email{color:var(--nylas-email-snippet-color, var(--grey-dark))}main .email-row .from-message-count .from-participants .participants-name .from-sub-section.second{display:none}main .email-row .from-message-count .from-participants .participants-name .from-sub-section.participant-label{text-overflow:ellipsis;overflow:hidden}main .email-row .from-message-count .from-participants .participants-name .from-sub-section.draft-label{color:var(--nylas-email-draft-label-color, #dd4b39);overflow:visible}main .email-row .from-message-count .from-participants .participants-count .show-on-mobile{display:inline-block}main .email-row .from-message-count .from-participants .participants-count .show-on-desktop{display:none}main .email-row .subject-snippet-attachment{padding:0.5rem;padding-top:0.4rem;overflow:hidden}main .email-row .subject-snippet-attachment .subject-snippet{display:flex;flex-direction:column;gap:0.5rem;color:var(--nylas-email-snippet-color, var(--grey-dark))}main .email-row .subject-snippet-attachment .subject-snippet .subject{color:var(--nylas-email-subject-color, var(--black));white-space:nowrap;overflow:hidden;text-overflow:ellipsis}main .email-row .subject-snippet-attachment .subject-snippet .snippet{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}main .email-row .subject-snippet-attachment .subject-snippet .snippet.deleted{color:var(--nylas-email-snippet-color, var(--grey-dark))}main .email-row .subject-snippet-attachment .attachment{margin-top:0.5rem;gap:1rem;display:flex;overflow-x:auto}main .email-row .subject-snippet-attachment .attachment button{padding:0.3rem 1rem;border:1px solid var(--nylas-email-attachment-border-style, var(--grey));border-radius:30px;color:var(--nylas-email-attachment-button-color, inherit);background:var(--nylas-email-attachment-button-bg, white);cursor:pointer}main .email-row .subject-snippet-attachment .attachment button:hover{background:var(--nylas-email-attachment-button-hover-bg, var(--grey-light))}main .email-row .subject-snippet-attachment div{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--nylas-email-snippet-color, var(--grey-dark))}main .email-row .subject-snippet-attachment div span.subject{color:var(--nylas-email-subject-color, var(--black))}main .email-row .subject-snippet-attachment div.date{display:flex;justify-content:flex-end;gap:0.5rem;width:100%;font-size:14px;color:var(--nylas-email-message-date-color, var(--grey))}main .email-row .date{display:flex;justify-content:flex-end;align-items:center;width:100%;gap:1rem}main .email-row .date>:last-child{padding-right:1rem}main .email-row .date button,main .email-row .date span{background:none;cursor:pointer;display:flex}main .email-row .date button *,main .email-row .date span *{width:1em;height:1em;fill:var(--nylas-email-action-icons-color, var(--grey-dark))}main .email-row.condensed{height:fit-content;padding:0.5rem;flex-wrap:wrap;overflow:hidden;flex-wrap:wrap;display:grid;gap:0.5rem;align-items:flex-start;grid-template-areas:"a a a a b c" "d d d d d d"}main .email-row.condensed .from-star{grid-area:a}main .email-row.condensed .thread-message-count{grid-area:b}main .email-row.condensed .subject-snippet-attachment{grid-area:d}main .email-row.condensed .date{grid-area:c}@media(min-width: 640px){main .email-row.condensed{display:grid;column-gap:1rem;grid-template-areas:unset;grid-template-columns:minmax(250px, 18%) 6% auto 130px}main .email-row.condensed .from-star{grid-area:unset}main .email-row.condensed .thread-message-count{grid-area:unset;min-height:2rem;display:flex;align-items:center;justify-content:center}main .email-row.condensed .subject-snippet-attachment{grid-area:unset}main .email-row.condensed .date{grid-area:unset;min-height:2rem;display:flex;align-items:center}}main .email-row.condensed.disable-click{cursor:not-allowed;display:grid;align-items:flex-start;background:var(--grey-lighter)}main .email-row.condensed .from-star{display:grid;grid-template-columns:25px auto;column-gap:0.5rem}main .email-row.condensed .thread-message-count{color:var(--nylas-email-thread-message-count-color, var(--black));font-size:12px;text-align:left}main .email-row.condensed .date{text-align:right}main .email-row.condensed.unread{background:var(--nylas-email-unread-background, white)}main .email-row.condensed.unread .from-message-count,main .email-row.condensed.unread .date,main .email-row.condensed.unread .subject{font-weight:600;color:var(--nylas-email-unread-subject-color, var(--black))}main .email-row.condensed.unread .thread-message-count{color:var(--nylas-email-unread-thread-message-count-color, var(--blue))}main .email-row.expanded.singular:hover{box-shadow:none;cursor:default}main .email-row.expanded.singular div.individual-message:not(.last-message).expanded .message-head:hover,main .email-row.expanded.singular div.individual-message:not(.last-message).expanded .message-body:hover{cursor:default}@media(min-width: 640px){main .email-row .from-message-count{max-width:350px}main .email-row .from-message-count .from-participants .participants-name{overflow:hidden;white-space:nowrap;position:relative}main .email-row .from-message-count .from-participants .participants-name .from-sub-section.second{display:inline-block}main .email-row .from-message-count .from-participants .participants-count .show-on-mobile{display:none}main .email-row .from-message-count .from-participants .participants-count .show-on-desktop{display:inline-block}main .email-row.expanded.singular .individual-message.expanded{padding-top:0.5rem}main .email-row.condensed{padding:0.5rem;justify-content:initial}main .email-row.condensed div.starred button:hover:before{color:var(--nylas-email-star-button-hover-color, #ffc107)}main .email-row.condensed .date{text-align:right;padding-right:0.5rem;display:flex;justify-content:flex-end;gap:0.5rem;font-size:14px;color:var(--nylas-email-message-date-color, var(--grey))}main .email-row.condensed .thread-message-count{text-align:center}main .email-row.expanded{display:flex;flex-direction:column;box-sizing:border-box;width:100%;overflow-x:hidden}main .email-row.expanded header{padding:1rem 2.5rem}main .email-row.expanded div.individual-message{display:flex;flex-direction:column;align-items:center;padding:1rem 0;width:inherit}main .email-row.expanded div.individual-message div.message-head,main .email-row.expanded div.individual-message div.message-body{width:100%;box-sizing:border-box;padding:0 2.5rem}main .email-row.expanded div.individual-message div.message-body{display:flex;flex-direction:column}main .email-row.expanded div.individual-message.condensed div.snippet{width:100%;box-sizing:border-box;padding:0 2.5rem;white-space:pre-wrap;max-width:95vw;align-self:flex-start}main .email-row.expanded div.individual-message.condensed div.message-head.draft{flex-flow:row}main .email-row.expanded div.individual-message div.message-date{font-size:14px;align-self:center}main .email-row.expanded div.individual-message.expanded div.message-head div.message-from-to{margin:0.5rem 0}main .email-row.expanded div.individual-message.expanded div.message-head div.message-from-to div.message-to{max-width:inherit;overflow:inherit}main .email-row.expanded div.individual-message.expanded div.message-head div.message-from-to div.message-to div{display:grid;grid-template-columns:1fr 16px;align-items:center}main .email-row.expanded div.individual-message.expanded div.message-head div.message-from-to div.message-to div span{text-overflow:ellipsis;overflow:hidden}main .email-row .subject-snippet-attachment .subject-snippet{display:grid;grid-template-columns:auto 1fr;gap:1rem}}</style>'),
        Xe(
          this,
          {
            target: this.shadowRoot,
            props: un(this.attributes),
            customElement: !0,
          },
          Fc,
          Ic,
          Ze,
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
          (e.target && p(e.target, this, e.anchor),
          e.props && (this.$set(e.props), de()));
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
      this.$$set({ id: e }), de();
    }
    get access_token() {
      return this.$$.ctx[39];
    }
    set access_token(e) {
      this.$$set({ access_token: e }), de();
    }
    get clean_conversation() {
      return this.$$.ctx[40];
    }
    set clean_conversation(e) {
      this.$$set({ clean_conversation: e }), de();
    }
    get click_action() {
      return this.$$.ctx[1];
    }
    set click_action(e) {
      this.$$set({ click_action: e }), de();
    }
    get message_id() {
      return this.$$.ctx[41];
    }
    set message_id(e) {
      this.$$set({ message_id: e }), de();
    }
    get message() {
      return this.$$.ctx[2];
    }
    set message(e) {
      this.$$set({ message: e }), de();
    }
    get show_contact_avatar() {
      return this.$$.ctx[42];
    }
    set show_contact_avatar(e) {
      this.$$set({ show_contact_avatar: e }), de();
    }
    get show_expanded_email_view_onload() {
      return this.$$.ctx[43];
    }
    set show_expanded_email_view_onload(e) {
      this.$$set({ show_expanded_email_view_onload: e }), de();
    }
    get show_number_of_messages() {
      return this.$$.ctx[44];
    }
    set show_number_of_messages(e) {
      this.$$set({ show_number_of_messages: e }), de();
    }
    get show_received_timestamp() {
      return this.$$.ctx[45];
    }
    set show_received_timestamp(e) {
      this.$$set({ show_received_timestamp: e }), de();
    }
    get show_star() {
      return this.$$.ctx[46];
    }
    set show_star(e) {
      this.$$set({ show_star: e }), de();
    }
    get show_thread_actions() {
      return this.$$.ctx[47];
    }
    set show_thread_actions(e) {
      this.$$set({ show_thread_actions: e }), de();
    }
    get theme() {
      return this.$$.ctx[48];
    }
    set theme(e) {
      this.$$set({ theme: e }), de();
    }
    get thread_id() {
      return this.$$.ctx[49];
    }
    set thread_id(e) {
      this.$$set({ thread_id: e }), de();
    }
    get thread() {
      return this.$$.ctx[3];
    }
    set thread(e) {
      this.$$set({ thread: e }), de();
    }
    get you() {
      return this.$$.ctx[50];
    }
    set you(e) {
      this.$$set({ you: e }), de();
    }
    get show_reply() {
      return this.$$.ctx[51];
    }
    set show_reply(e) {
      this.$$set({ show_reply: e }), de();
    }
    get show_reply_all() {
      return this.$$.ctx[52];
    }
    set show_reply_all(e) {
      this.$$set({ show_reply_all: e }), de();
    }
    get show_forward() {
      return this.$$.ctx[53];
    }
    set show_forward(e) {
      this.$$set({ show_forward: e }), de();
    }
  }
  return customElements.define("nylas-email", Pa), Pa;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbW1vbnMvc3JjL2RlZmluZS1jb21wb25lbnQtcGF0Y2gudHMiLCIuLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL2ludGVybmFsL2luZGV4Lm1qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvc3RvcmUvaW5kZXgubWpzIiwiLi4vLi4vY29tbW9ucy9zcmMvc3RvcmUvZXJyb3IudHMiLCIuLi8uLi9jb21tb25zL3NyYy9tZXRob2RzL2FwaS50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL2Nvbm5lY3Rpb25zL2NvbnRhY3RzLnRzIiwiLi4vLi4vY29tbW9ucy9zcmMvY29ubmVjdGlvbnMvdGhyZWFkcy50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL2Nvbm5lY3Rpb25zL21hbmlmZXN0LnRzIiwiLi4vLi4vY29tbW9ucy9zcmMvY29ubmVjdGlvbnMvbWVzc2FnZXMudHMiLCIuLi8uLi9jb21tb25zL3NyYy9jb25uZWN0aW9ucy9hY2NvdW50cy50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL2Nvbm5lY3Rpb25zL25ldXJhbC50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL2Nvbm5lY3Rpb25zL2F2YWlsYWJpbGl0eS50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL3N0b3JlL2F2YWlsYWJpbGl0eS50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL3N0b3JlL2NvbnNlY3V0aXZlLWF2YWlsYWJpbGl0eS50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL3N0b3JlL2NvbnRhY3RzLnRzIiwiLi4vLi4vY29tbW9ucy9zcmMvc3RvcmUvY29udGFjdC1hdmF0YXIudHMiLCIuLi8uLi9jb21tb25zL3NyYy9zdG9yZS9tYWlsYm94LnRzIiwiLi4vLi4vY29tbW9ucy9zcmMvc3RvcmUvbWFuaWZlc3QudHMiLCIuLi8uLi9jb21tb25zL3NyYy9jb25uZWN0aW9ucy9maWxlcy50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL2NvbnN0YW50cy9hdHRhY2htZW50LWNvbnRlbnQtdHlwZXMudHMiLCIuLi8uLi9jb21tb25zL3NyYy9zdG9yZS9maWxlcy50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL21ldGhvZHMvY29tcG9uZW50LnRzIiwiLi4vLi4vY29tbW9ucy9zcmMvY29tcG9uZW50cy9ORXJyb3Iuc3ZlbHRlIiwiLi4vLi4vY29tbW9ucy9zcmMvbWV0aG9kcy9wYXJ0aWNpcGFudHMudHMiLCJzcmMvbWV0aG9kcy9saWIudHMiLCJzcmMvYXNzZXRzL2NoZXZyb24tZG93bi5zdmciLCJzcmMvYXNzZXRzL3RyYXNoLWFsdC5zdmciLCJzcmMvYXNzZXRzL2VudmVsb3BlLW9wZW4tdGV4dC5zdmciLCJzcmMvYXNzZXRzL2VudmVsb3BlLnN2ZyIsInNyYy9hc3NldHMvYXR0YWNobWVudC5zdmciLCJzcmMvYXNzZXRzL2Fycm93LWxpbmUuc3ZnIiwic3JjL2Fzc2V0cy9uby1tZXNzYWdlcy5zdmciLCJzcmMvYXNzZXRzL2RyYWZ0LnN2ZyIsIi4uLy4uL2NvbW1vbnMvc3JjL2NvbXBvbmVudHMvQ29udGFjdEltYWdlL0NvbnRhY3RJbWFnZS5zdmVsdGUiLCIuLi8uLi9jb21tb25zL3NyYy9tZXRob2RzL2lzRmlsZUFuQXR0YWNobWVudC50cyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kb21wdXJpZnkvZGlzdC9wdXJpZnkuanMiLCIuLi8uLi9jb21tb25zL3NyYy9jb21wb25lbnRzL01lc3NhZ2VCb2R5LnN2ZWx0ZSIsIi4uLy4uL2NvbW1vbnMvc3JjL2NvbXBvbmVudHMvVG9vbHRpcC5zdmVsdGUiLCIuLi8uLi9jb21tb25zL3NyYy9lbnVtcy9OeWxhcy50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL2Nvbm5lY3Rpb25zL2xhYmVscy50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL3N0b3JlL2xhYmVscy50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL2Nvbm5lY3Rpb25zL2ZvbGRlcnMudHMiLCIuLi8uLi9jb21tb25zL3NyYy9zdG9yZS9mb2xkZXJzLnRzIiwic3JjL2Fzc2V0cy9sb2FkaW5nLnN2ZyIsInNyYy9hc3NldHMvcmVwbHkuc3ZnIiwic3JjL2Fzc2V0cy9yZXBseS1hbGwuc3ZnIiwic3JjL2Fzc2V0cy9mb3J3YXJkLnN2ZyIsInNyYy9FbWFpbC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG9yaWdpbmFsRGVmaW5lID0gd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZS5iaW5kKFxuICB3aW5kb3cuY3VzdG9tRWxlbWVudHMsXG4pO1xud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSA9IChuYW1lOiBzdHJpbmcsIC4uLmFyZ3MpID0+IHtcbiAgaWYgKGN1c3RvbUVsZW1lbnRzLmdldChuYW1lKSkge1xuICAgIHJldHVybjtcbiAgfVxuICByZXR1cm4gb3JpZ2luYWxEZWZpbmUobmFtZSwgLi4uYXJncyk7XG59O1xuIiwiZnVuY3Rpb24gbm9vcCgpIHsgfVxuY29uc3QgaWRlbnRpdHkgPSB4ID0+IHg7XG5mdW5jdGlvbiBhc3NpZ24odGFyLCBzcmMpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZm9yIChjb25zdCBrIGluIHNyYylcbiAgICAgICAgdGFyW2tdID0gc3JjW2tdO1xuICAgIHJldHVybiB0YXI7XG59XG5mdW5jdGlvbiBpc19wcm9taXNlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBhZGRfbG9jYXRpb24oZWxlbWVudCwgZmlsZSwgbGluZSwgY29sdW1uLCBjaGFyKSB7XG4gICAgZWxlbWVudC5fX3N2ZWx0ZV9tZXRhID0ge1xuICAgICAgICBsb2M6IHsgZmlsZSwgbGluZSwgY29sdW1uLCBjaGFyIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gcnVuKGZuKSB7XG4gICAgcmV0dXJuIGZuKCk7XG59XG5mdW5jdGlvbiBibGFua19vYmplY3QoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCk7XG59XG5mdW5jdGlvbiBydW5fYWxsKGZucykge1xuICAgIGZucy5mb3JFYWNoKHJ1bik7XG59XG5mdW5jdGlvbiBpc19mdW5jdGlvbih0aGluZykge1xuICAgIHJldHVybiB0eXBlb2YgdGhpbmcgPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBzYWZlX25vdF9lcXVhbChhLCBiKSB7XG4gICAgcmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGIgfHwgKChhICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JykgfHwgdHlwZW9mIGEgPT09ICdmdW5jdGlvbicpO1xufVxubGV0IHNyY191cmxfZXF1YWxfYW5jaG9yO1xuZnVuY3Rpb24gc3JjX3VybF9lcXVhbChlbGVtZW50X3NyYywgdXJsKSB7XG4gICAgaWYgKCFzcmNfdXJsX2VxdWFsX2FuY2hvcikge1xuICAgICAgICBzcmNfdXJsX2VxdWFsX2FuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB9XG4gICAgc3JjX3VybF9lcXVhbF9hbmNob3IuaHJlZiA9IHVybDtcbiAgICByZXR1cm4gZWxlbWVudF9zcmMgPT09IHNyY191cmxfZXF1YWxfYW5jaG9yLmhyZWY7XG59XG5mdW5jdGlvbiBub3RfZXF1YWwoYSwgYikge1xuICAgIHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiO1xufVxuZnVuY3Rpb24gaXNfZW1wdHkob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAwO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVfc3RvcmUoc3RvcmUsIG5hbWUpIHtcbiAgICBpZiAoc3RvcmUgIT0gbnVsbCAmJiB0eXBlb2Ygc3RvcmUuc3Vic2NyaWJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJyR7bmFtZX0nIGlzIG5vdCBhIHN0b3JlIHdpdGggYSAnc3Vic2NyaWJlJyBtZXRob2RgKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzdWJzY3JpYmUoc3RvcmUsIC4uLmNhbGxiYWNrcykge1xuICAgIGlmIChzdG9yZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBub29wO1xuICAgIH1cbiAgICBjb25zdCB1bnN1YiA9IHN0b3JlLnN1YnNjcmliZSguLi5jYWxsYmFja3MpO1xuICAgIHJldHVybiB1bnN1Yi51bnN1YnNjcmliZSA/ICgpID0+IHVuc3ViLnVuc3Vic2NyaWJlKCkgOiB1bnN1Yjtcbn1cbmZ1bmN0aW9uIGdldF9zdG9yZV92YWx1ZShzdG9yZSkge1xuICAgIGxldCB2YWx1ZTtcbiAgICBzdWJzY3JpYmUoc3RvcmUsIF8gPT4gdmFsdWUgPSBfKSgpO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGNvbXBvbmVudF9zdWJzY3JpYmUoY29tcG9uZW50LCBzdG9yZSwgY2FsbGJhY2spIHtcbiAgICBjb21wb25lbnQuJCQub25fZGVzdHJveS5wdXNoKHN1YnNjcmliZShzdG9yZSwgY2FsbGJhY2spKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9zbG90KGRlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZm4pIHtcbiAgICBpZiAoZGVmaW5pdGlvbikge1xuICAgICAgICBjb25zdCBzbG90X2N0eCA9IGdldF9zbG90X2NvbnRleHQoZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBmbik7XG4gICAgICAgIHJldHVybiBkZWZpbml0aW9uWzBdKHNsb3RfY3R4KTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRfc2xvdF9jb250ZXh0KGRlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZm4pIHtcbiAgICByZXR1cm4gZGVmaW5pdGlvblsxXSAmJiBmblxuICAgICAgICA/IGFzc2lnbigkJHNjb3BlLmN0eC5zbGljZSgpLCBkZWZpbml0aW9uWzFdKGZuKGN0eCkpKVxuICAgICAgICA6ICQkc2NvcGUuY3R4O1xufVxuZnVuY3Rpb24gZ2V0X3Nsb3RfY2hhbmdlcyhkZWZpbml0aW9uLCAkJHNjb3BlLCBkaXJ0eSwgZm4pIHtcbiAgICBpZiAoZGVmaW5pdGlvblsyXSAmJiBmbikge1xuICAgICAgICBjb25zdCBsZXRzID0gZGVmaW5pdGlvblsyXShmbihkaXJ0eSkpO1xuICAgICAgICBpZiAoJCRzY29wZS5kaXJ0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbGV0cztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGxldHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25zdCBtZXJnZWQgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IE1hdGgubWF4KCQkc2NvcGUuZGlydHkubGVuZ3RoLCBsZXRzLmxlbmd0aCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgbWVyZ2VkW2ldID0gJCRzY29wZS5kaXJ0eVtpXSB8IGxldHNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAkJHNjb3BlLmRpcnR5IHwgbGV0cztcbiAgICB9XG4gICAgcmV0dXJuICQkc2NvcGUuZGlydHk7XG59XG5mdW5jdGlvbiB1cGRhdGVfc2xvdF9iYXNlKHNsb3QsIHNsb3RfZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBzbG90X2NoYW5nZXMsIGdldF9zbG90X2NvbnRleHRfZm4pIHtcbiAgICBpZiAoc2xvdF9jaGFuZ2VzKSB7XG4gICAgICAgIGNvbnN0IHNsb3RfY29udGV4dCA9IGdldF9zbG90X2NvbnRleHQoc2xvdF9kZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGdldF9zbG90X2NvbnRleHRfZm4pO1xuICAgICAgICBzbG90LnAoc2xvdF9jb250ZXh0LCBzbG90X2NoYW5nZXMpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZV9zbG90KHNsb3QsIHNsb3RfZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBkaXJ0eSwgZ2V0X3Nsb3RfY2hhbmdlc19mbiwgZ2V0X3Nsb3RfY29udGV4dF9mbikge1xuICAgIGNvbnN0IHNsb3RfY2hhbmdlcyA9IGdldF9zbG90X2NoYW5nZXMoc2xvdF9kZWZpbml0aW9uLCAkJHNjb3BlLCBkaXJ0eSwgZ2V0X3Nsb3RfY2hhbmdlc19mbik7XG4gICAgdXBkYXRlX3Nsb3RfYmFzZShzbG90LCBzbG90X2RlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgc2xvdF9jaGFuZ2VzLCBnZXRfc2xvdF9jb250ZXh0X2ZuKTtcbn1cbmZ1bmN0aW9uIGdldF9hbGxfZGlydHlfZnJvbV9zY29wZSgkJHNjb3BlKSB7XG4gICAgaWYgKCQkc2NvcGUuY3R4Lmxlbmd0aCA+IDMyKSB7XG4gICAgICAgIGNvbnN0IGRpcnR5ID0gW107XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9ICQkc2NvcGUuY3R4Lmxlbmd0aCAvIDMyO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkaXJ0eVtpXSA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaXJ0eTtcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufVxuZnVuY3Rpb24gZXhjbHVkZV9pbnRlcm5hbF9wcm9wcyhwcm9wcykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3QgayBpbiBwcm9wcylcbiAgICAgICAgaWYgKGtbMF0gIT09ICckJylcbiAgICAgICAgICAgIHJlc3VsdFtrXSA9IHByb3BzW2tdO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBjb21wdXRlX3Jlc3RfcHJvcHMocHJvcHMsIGtleXMpIHtcbiAgICBjb25zdCByZXN0ID0ge307XG4gICAga2V5cyA9IG5ldyBTZXQoa2V5cyk7XG4gICAgZm9yIChjb25zdCBrIGluIHByb3BzKVxuICAgICAgICBpZiAoIWtleXMuaGFzKGspICYmIGtbMF0gIT09ICckJylcbiAgICAgICAgICAgIHJlc3Rba10gPSBwcm9wc1trXTtcbiAgICByZXR1cm4gcmVzdDtcbn1cbmZ1bmN0aW9uIGNvbXB1dGVfc2xvdHMoc2xvdHMpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzbG90cykge1xuICAgICAgICByZXN1bHRba2V5XSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBvbmNlKGZuKSB7XG4gICAgbGV0IHJhbiA9IGZhbHNlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICBpZiAocmFuKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICByYW4gPSB0cnVlO1xuICAgICAgICBmbi5jYWxsKHRoaXMsIC4uLmFyZ3MpO1xuICAgIH07XG59XG5mdW5jdGlvbiBudWxsX3RvX2VtcHR5KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xufVxuZnVuY3Rpb24gc2V0X3N0b3JlX3ZhbHVlKHN0b3JlLCByZXQsIHZhbHVlKSB7XG4gICAgc3RvcmUuc2V0KHZhbHVlKTtcbiAgICByZXR1cm4gcmV0O1xufVxuY29uc3QgaGFzX3Byb3AgPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbmZ1bmN0aW9uIGFjdGlvbl9kZXN0cm95ZXIoYWN0aW9uX3Jlc3VsdCkge1xuICAgIHJldHVybiBhY3Rpb25fcmVzdWx0ICYmIGlzX2Z1bmN0aW9uKGFjdGlvbl9yZXN1bHQuZGVzdHJveSkgPyBhY3Rpb25fcmVzdWx0LmRlc3Ryb3kgOiBub29wO1xufVxuXG5jb25zdCBpc19jbGllbnQgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbmxldCBub3cgPSBpc19jbGllbnRcbiAgICA/ICgpID0+IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKVxuICAgIDogKCkgPT4gRGF0ZS5ub3coKTtcbmxldCByYWYgPSBpc19jbGllbnQgPyBjYiA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2IpIDogbm9vcDtcbi8vIHVzZWQgaW50ZXJuYWxseSBmb3IgdGVzdGluZ1xuZnVuY3Rpb24gc2V0X25vdyhmbikge1xuICAgIG5vdyA9IGZuO1xufVxuZnVuY3Rpb24gc2V0X3JhZihmbikge1xuICAgIHJhZiA9IGZuO1xufVxuXG5jb25zdCB0YXNrcyA9IG5ldyBTZXQoKTtcbmZ1bmN0aW9uIHJ1bl90YXNrcyhub3cpIHtcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBpZiAoIXRhc2suYyhub3cpKSB7XG4gICAgICAgICAgICB0YXNrcy5kZWxldGUodGFzayk7XG4gICAgICAgICAgICB0YXNrLmYoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0YXNrcy5zaXplICE9PSAwKVxuICAgICAgICByYWYocnVuX3Rhc2tzKTtcbn1cbi8qKlxuICogRm9yIHRlc3RpbmcgcHVycG9zZXMgb25seSFcbiAqL1xuZnVuY3Rpb24gY2xlYXJfbG9vcHMoKSB7XG4gICAgdGFza3MuY2xlYXIoKTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB0YXNrIHRoYXQgcnVucyBvbiBlYWNoIHJhZiBmcmFtZVxuICogdW50aWwgaXQgcmV0dXJucyBhIGZhbHN5IHZhbHVlIG9yIGlzIGFib3J0ZWRcbiAqL1xuZnVuY3Rpb24gbG9vcChjYWxsYmFjaykge1xuICAgIGxldCB0YXNrO1xuICAgIGlmICh0YXNrcy5zaXplID09PSAwKVxuICAgICAgICByYWYocnVuX3Rhc2tzKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9taXNlOiBuZXcgUHJvbWlzZShmdWxmaWxsID0+IHtcbiAgICAgICAgICAgIHRhc2tzLmFkZCh0YXNrID0geyBjOiBjYWxsYmFjaywgZjogZnVsZmlsbCB9KTtcbiAgICAgICAgfSksXG4gICAgICAgIGFib3J0KCkge1xuICAgICAgICAgICAgdGFza3MuZGVsZXRlKHRhc2spO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8gVHJhY2sgd2hpY2ggbm9kZXMgYXJlIGNsYWltZWQgZHVyaW5nIGh5ZHJhdGlvbi4gVW5jbGFpbWVkIG5vZGVzIGNhbiB0aGVuIGJlIHJlbW92ZWQgZnJvbSB0aGUgRE9NXG4vLyBhdCB0aGUgZW5kIG9mIGh5ZHJhdGlvbiB3aXRob3V0IHRvdWNoaW5nIHRoZSByZW1haW5pbmcgbm9kZXMuXG5sZXQgaXNfaHlkcmF0aW5nID0gZmFsc2U7XG5mdW5jdGlvbiBzdGFydF9oeWRyYXRpbmcoKSB7XG4gICAgaXNfaHlkcmF0aW5nID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGVuZF9oeWRyYXRpbmcoKSB7XG4gICAgaXNfaHlkcmF0aW5nID0gZmFsc2U7XG59XG5mdW5jdGlvbiB1cHBlcl9ib3VuZChsb3csIGhpZ2gsIGtleSwgdmFsdWUpIHtcbiAgICAvLyBSZXR1cm4gZmlyc3QgaW5kZXggb2YgdmFsdWUgbGFyZ2VyIHRoYW4gaW5wdXQgdmFsdWUgaW4gdGhlIHJhbmdlIFtsb3csIGhpZ2gpXG4gICAgd2hpbGUgKGxvdyA8IGhpZ2gpIHtcbiAgICAgICAgY29uc3QgbWlkID0gbG93ICsgKChoaWdoIC0gbG93KSA+PiAxKTtcbiAgICAgICAgaWYgKGtleShtaWQpIDw9IHZhbHVlKSB7XG4gICAgICAgICAgICBsb3cgPSBtaWQgKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaGlnaCA9IG1pZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbG93O1xufVxuZnVuY3Rpb24gaW5pdF9oeWRyYXRlKHRhcmdldCkge1xuICAgIGlmICh0YXJnZXQuaHlkcmF0ZV9pbml0KVxuICAgICAgICByZXR1cm47XG4gICAgdGFyZ2V0Lmh5ZHJhdGVfaW5pdCA9IHRydWU7XG4gICAgLy8gV2Uga25vdyB0aGF0IGFsbCBjaGlsZHJlbiBoYXZlIGNsYWltX29yZGVyIHZhbHVlcyBzaW5jZSB0aGUgdW5jbGFpbWVkIGhhdmUgYmVlbiBkZXRhY2hlZCBpZiB0YXJnZXQgaXMgbm90IDxoZWFkPlxuICAgIGxldCBjaGlsZHJlbiA9IHRhcmdldC5jaGlsZE5vZGVzO1xuICAgIC8vIElmIHRhcmdldCBpcyA8aGVhZD4sIHRoZXJlIG1heSBiZSBjaGlsZHJlbiB3aXRob3V0IGNsYWltX29yZGVyXG4gICAgaWYgKHRhcmdldC5ub2RlTmFtZSA9PT0gJ0hFQUQnKSB7XG4gICAgICAgIGNvbnN0IG15Q2hpbGRyZW4gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKG5vZGUuY2xhaW1fb3JkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG15Q2hpbGRyZW4ucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjaGlsZHJlbiA9IG15Q2hpbGRyZW47XG4gICAgfVxuICAgIC8qXG4gICAgKiBSZW9yZGVyIGNsYWltZWQgY2hpbGRyZW4gb3B0aW1hbGx5LlxuICAgICogV2UgY2FuIHJlb3JkZXIgY2xhaW1lZCBjaGlsZHJlbiBvcHRpbWFsbHkgYnkgZmluZGluZyB0aGUgbG9uZ2VzdCBzdWJzZXF1ZW5jZSBvZlxuICAgICogbm9kZXMgdGhhdCBhcmUgYWxyZWFkeSBjbGFpbWVkIGluIG9yZGVyIGFuZCBvbmx5IG1vdmluZyB0aGUgcmVzdC4gVGhlIGxvbmdlc3RcbiAgICAqIHN1YnNlcXVlbmNlIHN1YnNlcXVlbmNlIG9mIG5vZGVzIHRoYXQgYXJlIGNsYWltZWQgaW4gb3JkZXIgY2FuIGJlIGZvdW5kIGJ5XG4gICAgKiBjb21wdXRpbmcgdGhlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBvZiAuY2xhaW1fb3JkZXIgdmFsdWVzLlxuICAgICpcbiAgICAqIFRoaXMgYWxnb3JpdGhtIGlzIG9wdGltYWwgaW4gZ2VuZXJhdGluZyB0aGUgbGVhc3QgYW1vdW50IG9mIHJlb3JkZXIgb3BlcmF0aW9uc1xuICAgICogcG9zc2libGUuXG4gICAgKlxuICAgICogUHJvb2Y6XG4gICAgKiBXZSBrbm93IHRoYXQsIGdpdmVuIGEgc2V0IG9mIHJlb3JkZXJpbmcgb3BlcmF0aW9ucywgdGhlIG5vZGVzIHRoYXQgZG8gbm90IG1vdmVcbiAgICAqIGFsd2F5cyBmb3JtIGFuIGluY3JlYXNpbmcgc3Vic2VxdWVuY2UsIHNpbmNlIHRoZXkgZG8gbm90IG1vdmUgYW1vbmcgZWFjaCBvdGhlclxuICAgICogbWVhbmluZyB0aGF0IHRoZXkgbXVzdCBiZSBhbHJlYWR5IG9yZGVyZWQgYW1vbmcgZWFjaCBvdGhlci4gVGh1cywgdGhlIG1heGltYWxcbiAgICAqIHNldCBvZiBub2RlcyB0aGF0IGRvIG5vdCBtb3ZlIGZvcm0gYSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2UuXG4gICAgKi9cbiAgICAvLyBDb21wdXRlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZVxuICAgIC8vIG06IHN1YnNlcXVlbmNlIGxlbmd0aCBqID0+IGluZGV4IGsgb2Ygc21hbGxlc3QgdmFsdWUgdGhhdCBlbmRzIGFuIGluY3JlYXNpbmcgc3Vic2VxdWVuY2Ugb2YgbGVuZ3RoIGpcbiAgICBjb25zdCBtID0gbmV3IEludDMyQXJyYXkoY2hpbGRyZW4ubGVuZ3RoICsgMSk7XG4gICAgLy8gUHJlZGVjZXNzb3IgaW5kaWNlcyArIDFcbiAgICBjb25zdCBwID0gbmV3IEludDMyQXJyYXkoY2hpbGRyZW4ubGVuZ3RoKTtcbiAgICBtWzBdID0gLTE7XG4gICAgbGV0IGxvbmdlc3QgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGNoaWxkcmVuW2ldLmNsYWltX29yZGVyO1xuICAgICAgICAvLyBGaW5kIHRoZSBsYXJnZXN0IHN1YnNlcXVlbmNlIGxlbmd0aCBzdWNoIHRoYXQgaXQgZW5kcyBpbiBhIHZhbHVlIGxlc3MgdGhhbiBvdXIgY3VycmVudCB2YWx1ZVxuICAgICAgICAvLyB1cHBlcl9ib3VuZCByZXR1cm5zIGZpcnN0IGdyZWF0ZXIgdmFsdWUsIHNvIHdlIHN1YnRyYWN0IG9uZVxuICAgICAgICAvLyB3aXRoIGZhc3QgcGF0aCBmb3Igd2hlbiB3ZSBhcmUgb24gdGhlIGN1cnJlbnQgbG9uZ2VzdCBzdWJzZXF1ZW5jZVxuICAgICAgICBjb25zdCBzZXFMZW4gPSAoKGxvbmdlc3QgPiAwICYmIGNoaWxkcmVuW21bbG9uZ2VzdF1dLmNsYWltX29yZGVyIDw9IGN1cnJlbnQpID8gbG9uZ2VzdCArIDEgOiB1cHBlcl9ib3VuZCgxLCBsb25nZXN0LCBpZHggPT4gY2hpbGRyZW5bbVtpZHhdXS5jbGFpbV9vcmRlciwgY3VycmVudCkpIC0gMTtcbiAgICAgICAgcFtpXSA9IG1bc2VxTGVuXSArIDE7XG4gICAgICAgIGNvbnN0IG5ld0xlbiA9IHNlcUxlbiArIDE7XG4gICAgICAgIC8vIFdlIGNhbiBndWFyYW50ZWUgdGhhdCBjdXJyZW50IGlzIHRoZSBzbWFsbGVzdCB2YWx1ZS4gT3RoZXJ3aXNlLCB3ZSB3b3VsZCBoYXZlIGdlbmVyYXRlZCBhIGxvbmdlciBzZXF1ZW5jZS5cbiAgICAgICAgbVtuZXdMZW5dID0gaTtcbiAgICAgICAgbG9uZ2VzdCA9IE1hdGgubWF4KG5ld0xlbiwgbG9uZ2VzdCk7XG4gICAgfVxuICAgIC8vIFRoZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2Ugb2Ygbm9kZXMgKGluaXRpYWxseSByZXZlcnNlZClcbiAgICBjb25zdCBsaXMgPSBbXTtcbiAgICAvLyBUaGUgcmVzdCBvZiB0aGUgbm9kZXMsIG5vZGVzIHRoYXQgd2lsbCBiZSBtb3ZlZFxuICAgIGNvbnN0IHRvTW92ZSA9IFtdO1xuICAgIGxldCBsYXN0ID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICBmb3IgKGxldCBjdXIgPSBtW2xvbmdlc3RdICsgMTsgY3VyICE9IDA7IGN1ciA9IHBbY3VyIC0gMV0pIHtcbiAgICAgICAgbGlzLnB1c2goY2hpbGRyZW5bY3VyIC0gMV0pO1xuICAgICAgICBmb3IgKDsgbGFzdCA+PSBjdXI7IGxhc3QtLSkge1xuICAgICAgICAgICAgdG9Nb3ZlLnB1c2goY2hpbGRyZW5bbGFzdF0pO1xuICAgICAgICB9XG4gICAgICAgIGxhc3QtLTtcbiAgICB9XG4gICAgZm9yICg7IGxhc3QgPj0gMDsgbGFzdC0tKSB7XG4gICAgICAgIHRvTW92ZS5wdXNoKGNoaWxkcmVuW2xhc3RdKTtcbiAgICB9XG4gICAgbGlzLnJldmVyc2UoKTtcbiAgICAvLyBXZSBzb3J0IHRoZSBub2RlcyBiZWluZyBtb3ZlZCB0byBndWFyYW50ZWUgdGhhdCB0aGVpciBpbnNlcnRpb24gb3JkZXIgbWF0Y2hlcyB0aGUgY2xhaW0gb3JkZXJcbiAgICB0b01vdmUuc29ydCgoYSwgYikgPT4gYS5jbGFpbV9vcmRlciAtIGIuY2xhaW1fb3JkZXIpO1xuICAgIC8vIEZpbmFsbHksIHdlIG1vdmUgdGhlIG5vZGVzXG4gICAgZm9yIChsZXQgaSA9IDAsIGogPSAwOyBpIDwgdG9Nb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHdoaWxlIChqIDwgbGlzLmxlbmd0aCAmJiB0b01vdmVbaV0uY2xhaW1fb3JkZXIgPj0gbGlzW2pdLmNsYWltX29yZGVyKSB7XG4gICAgICAgICAgICBqKys7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYW5jaG9yID0gaiA8IGxpcy5sZW5ndGggPyBsaXNbal0gOiBudWxsO1xuICAgICAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlKHRvTW92ZVtpXSwgYW5jaG9yKTtcbiAgICB9XG59XG5mdW5jdGlvbiBhcHBlbmQodGFyZ2V0LCBub2RlKSB7XG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xufVxuZnVuY3Rpb24gYXBwZW5kX3N0eWxlcyh0YXJnZXQsIHN0eWxlX3NoZWV0X2lkLCBzdHlsZXMpIHtcbiAgICBjb25zdCBhcHBlbmRfc3R5bGVzX3RvID0gZ2V0X3Jvb3RfZm9yX3N0eWxlKHRhcmdldCk7XG4gICAgaWYgKCFhcHBlbmRfc3R5bGVzX3RvLmdldEVsZW1lbnRCeUlkKHN0eWxlX3NoZWV0X2lkKSkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IGVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHN0eWxlLmlkID0gc3R5bGVfc2hlZXRfaWQ7XG4gICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gc3R5bGVzO1xuICAgICAgICBhcHBlbmRfc3R5bGVzaGVldChhcHBlbmRfc3R5bGVzX3RvLCBzdHlsZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0X3Jvb3RfZm9yX3N0eWxlKG5vZGUpIHtcbiAgICBpZiAoIW5vZGUpXG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICBjb25zdCByb290ID0gbm9kZS5nZXRSb290Tm9kZSA/IG5vZGUuZ2V0Um9vdE5vZGUoKSA6IG5vZGUub3duZXJEb2N1bWVudDtcbiAgICBpZiAocm9vdCAmJiByb290Lmhvc3QpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfVxuICAgIHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQ7XG59XG5mdW5jdGlvbiBhcHBlbmRfZW1wdHlfc3R5bGVzaGVldChub2RlKSB7XG4gICAgY29uc3Qgc3R5bGVfZWxlbWVudCA9IGVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgYXBwZW5kX3N0eWxlc2hlZXQoZ2V0X3Jvb3RfZm9yX3N0eWxlKG5vZGUpLCBzdHlsZV9lbGVtZW50KTtcbiAgICByZXR1cm4gc3R5bGVfZWxlbWVudC5zaGVldDtcbn1cbmZ1bmN0aW9uIGFwcGVuZF9zdHlsZXNoZWV0KG5vZGUsIHN0eWxlKSB7XG4gICAgYXBwZW5kKG5vZGUuaGVhZCB8fCBub2RlLCBzdHlsZSk7XG59XG5mdW5jdGlvbiBhcHBlbmRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSkge1xuICAgIGlmIChpc19oeWRyYXRpbmcpIHtcbiAgICAgICAgaW5pdF9oeWRyYXRlKHRhcmdldCk7XG4gICAgICAgIGlmICgodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPT09IHVuZGVmaW5lZCkgfHwgKCh0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCAhPT0gbnVsbCkgJiYgKHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkLnBhcmVudEVsZW1lbnQgIT09IHRhcmdldCkpKSB7XG4gICAgICAgICAgICB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCA9IHRhcmdldC5maXJzdENoaWxkO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNraXAgbm9kZXMgb2YgdW5kZWZpbmVkIG9yZGVyaW5nXG4gICAgICAgIHdoaWxlICgodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgIT09IG51bGwpICYmICh0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZC5jbGFpbV9vcmRlciA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPSB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZSAhPT0gdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQpIHtcbiAgICAgICAgICAgIC8vIFdlIG9ubHkgaW5zZXJ0IGlmIHRoZSBvcmRlcmluZyBvZiB0aGlzIG5vZGUgc2hvdWxkIGJlIG1vZGlmaWVkIG9yIHRoZSBwYXJlbnQgbm9kZSBpcyBub3QgdGFyZ2V0XG4gICAgICAgICAgICBpZiAobm9kZS5jbGFpbV9vcmRlciAhPT0gdW5kZWZpbmVkIHx8IG5vZGUucGFyZW50Tm9kZSAhPT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCA9IG5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlICE9PSB0YXJnZXQgfHwgbm9kZS5uZXh0U2libGluZyAhPT0gbnVsbCkge1xuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gaW5zZXJ0KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IgfHwgbnVsbCk7XG59XG5mdW5jdGlvbiBpbnNlcnRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgaWYgKGlzX2h5ZHJhdGluZyAmJiAhYW5jaG9yKSB7XG4gICAgICAgIGFwcGVuZF9oeWRyYXRpb24odGFyZ2V0LCBub2RlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlICE9PSB0YXJnZXQgfHwgbm9kZS5uZXh0U2libGluZyAhPSBhbmNob3IpIHtcbiAgICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IgfHwgbnVsbCk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGV0YWNoKG5vZGUpIHtcbiAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG59XG5mdW5jdGlvbiBkZXN0cm95X2VhY2goaXRlcmF0aW9ucywgZGV0YWNoaW5nKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVyYXRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChpdGVyYXRpb25zW2ldKVxuICAgICAgICAgICAgaXRlcmF0aW9uc1tpXS5kKGRldGFjaGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZWxlbWVudChuYW1lKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG59XG5mdW5jdGlvbiBlbGVtZW50X2lzKG5hbWUsIGlzKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSwgeyBpcyB9KTtcbn1cbmZ1bmN0aW9uIG9iamVjdF93aXRob3V0X3Byb3BlcnRpZXMob2JqLCBleGNsdWRlKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0ge307XG4gICAgZm9yIChjb25zdCBrIGluIG9iaikge1xuICAgICAgICBpZiAoaGFzX3Byb3Aob2JqLCBrKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgJiYgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdGFyZ2V0W2tdID0gb2JqW2tdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBzdmdfZWxlbWVudChuYW1lKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBuYW1lKTtcbn1cbmZ1bmN0aW9uIHRleHQoZGF0YSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKTtcbn1cbmZ1bmN0aW9uIHNwYWNlKCkge1xuICAgIHJldHVybiB0ZXh0KCcgJyk7XG59XG5mdW5jdGlvbiBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGV4dCgnJyk7XG59XG5mdW5jdGlvbiBsaXN0ZW4obm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIHJldHVybiAoKSA9PiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcHJldmVudF9kZWZhdWx0KGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gc3RvcF9wcm9wYWdhdGlvbihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH07XG59XG5mdW5jdGlvbiBzZWxmKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMpXG4gICAgICAgICAgICBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gdHJ1c3RlZChmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoZXZlbnQuaXNUcnVzdGVkKVxuICAgICAgICAgICAgZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGF0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKVxuICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgIGVsc2UgaWYgKG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSkgIT09IHZhbHVlKVxuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHNldF9hdHRyaWJ1dGVzKG5vZGUsIGF0dHJpYnV0ZXMpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgZGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhub2RlLl9fcHJvdG9fXyk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICBpZiAoYXR0cmlidXRlc1trZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlLmNzc1RleHQgPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5ID09PSAnX192YWx1ZScpIHtcbiAgICAgICAgICAgIG5vZGUudmFsdWUgPSBub2RlW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGVzY3JpcHRvcnNba2V5XSAmJiBkZXNjcmlwdG9yc1trZXldLnNldCkge1xuICAgICAgICAgICAgbm9kZVtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBzZXRfc3ZnX2F0dHJpYnV0ZXMobm9kZSwgYXR0cmlidXRlcykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgYXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X2N1c3RvbV9lbGVtZW50X2RhdGEobm9kZSwgcHJvcCwgdmFsdWUpIHtcbiAgICBpZiAocHJvcCBpbiBub2RlKSB7XG4gICAgICAgIG5vZGVbcHJvcF0gPSB0eXBlb2Ygbm9kZVtwcm9wXSA9PT0gJ2Jvb2xlYW4nICYmIHZhbHVlID09PSAnJyA/IHRydWUgOiB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGF0dHIobm9kZSwgcHJvcCwgdmFsdWUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHhsaW5rX2F0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIG5vZGUuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCBhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGdldF9iaW5kaW5nX2dyb3VwX3ZhbHVlKGdyb3VwLCBfX3ZhbHVlLCBjaGVja2VkKSB7XG4gICAgY29uc3QgdmFsdWUgPSBuZXcgU2V0KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncm91cC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoZ3JvdXBbaV0uY2hlY2tlZClcbiAgICAgICAgICAgIHZhbHVlLmFkZChncm91cFtpXS5fX3ZhbHVlKTtcbiAgICB9XG4gICAgaWYgKCFjaGVja2VkKSB7XG4gICAgICAgIHZhbHVlLmRlbGV0ZShfX3ZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20odmFsdWUpO1xufVxuZnVuY3Rpb24gdG9fbnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAnJyA/IG51bGwgOiArdmFsdWU7XG59XG5mdW5jdGlvbiB0aW1lX3Jhbmdlc190b19hcnJheShyYW5nZXMpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGFycmF5LnB1c2goeyBzdGFydDogcmFuZ2VzLnN0YXJ0KGkpLCBlbmQ6IHJhbmdlcy5lbmQoaSkgfSk7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbn1cbmZ1bmN0aW9uIGNoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpO1xufVxuZnVuY3Rpb24gaW5pdF9jbGFpbV9pbmZvKG5vZGVzKSB7XG4gICAgaWYgKG5vZGVzLmNsYWltX2luZm8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBub2Rlcy5jbGFpbV9pbmZvID0geyBsYXN0X2luZGV4OiAwLCB0b3RhbF9jbGFpbWVkOiAwIH07XG4gICAgfVxufVxuZnVuY3Rpb24gY2xhaW1fbm9kZShub2RlcywgcHJlZGljYXRlLCBwcm9jZXNzTm9kZSwgY3JlYXRlTm9kZSwgZG9udFVwZGF0ZUxhc3RJbmRleCA9IGZhbHNlKSB7XG4gICAgLy8gVHJ5IHRvIGZpbmQgbm9kZXMgaW4gYW4gb3JkZXIgc3VjaCB0aGF0IHdlIGxlbmd0aGVuIHRoZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2VcbiAgICBpbml0X2NsYWltX2luZm8obm9kZXMpO1xuICAgIGNvbnN0IHJlc3VsdE5vZGUgPSAoKCkgPT4ge1xuICAgICAgICAvLyBXZSBmaXJzdCB0cnkgdG8gZmluZCBhbiBlbGVtZW50IGFmdGVyIHRoZSBwcmV2aW91cyBvbmVcbiAgICAgICAgZm9yIChsZXQgaSA9IG5vZGVzLmNsYWltX2luZm8ubGFzdF9pbmRleDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgICAgICBpZiAocHJlZGljYXRlKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSBwcm9jZXNzTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVwbGFjZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2Rlc1tpXSA9IHJlcGxhY2VtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWRvbnRVcGRhdGVMYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4ID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSB0cnkgdG8gZmluZCBvbmUgYmVmb3JlXG4gICAgICAgIC8vIFdlIGl0ZXJhdGUgaW4gcmV2ZXJzZSBzbyB0aGF0IHdlIGRvbid0IGdvIHRvbyBmYXIgYmFja1xuICAgICAgICBmb3IgKGxldCBpID0gbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgICAgIGlmIChwcmVkaWNhdGUobm9kZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXBsYWNlbWVudCA9IHByb2Nlc3NOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgIGlmIChyZXBsYWNlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzW2ldID0gcmVwbGFjZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZG9udFVwZGF0ZUxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXBsYWNlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHdlIHNwbGljZWQgYmVmb3JlIHRoZSBsYXN0X2luZGV4LCB3ZSBkZWNyZWFzZSBpdFxuICAgICAgICAgICAgICAgICAgICBub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXgtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgd2UgY2FuJ3QgZmluZCBhbnkgbWF0Y2hpbmcgbm9kZSwgd2UgY3JlYXRlIGEgbmV3IG9uZVxuICAgICAgICByZXR1cm4gY3JlYXRlTm9kZSgpO1xuICAgIH0pKCk7XG4gICAgcmVzdWx0Tm9kZS5jbGFpbV9vcmRlciA9IG5vZGVzLmNsYWltX2luZm8udG90YWxfY2xhaW1lZDtcbiAgICBub2Rlcy5jbGFpbV9pbmZvLnRvdGFsX2NsYWltZWQgKz0gMTtcbiAgICByZXR1cm4gcmVzdWx0Tm9kZTtcbn1cbmZ1bmN0aW9uIGNsYWltX2VsZW1lbnRfYmFzZShub2RlcywgbmFtZSwgYXR0cmlidXRlcywgY3JlYXRlX2VsZW1lbnQpIHtcbiAgICByZXR1cm4gY2xhaW1fbm9kZShub2RlcywgKG5vZGUpID0+IG5vZGUubm9kZU5hbWUgPT09IG5hbWUsIChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbW92ZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gbm9kZS5hdHRyaWJ1dGVzW2pdO1xuICAgICAgICAgICAgaWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZS5uYW1lXSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZS5wdXNoKGF0dHJpYnV0ZS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZW1vdmUuZm9yRWFjaCh2ID0+IG5vZGUucmVtb3ZlQXR0cmlidXRlKHYpKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LCAoKSA9PiBjcmVhdGVfZWxlbWVudChuYW1lKSk7XG59XG5mdW5jdGlvbiBjbGFpbV9lbGVtZW50KG5vZGVzLCBuYW1lLCBhdHRyaWJ1dGVzKSB7XG4gICAgcmV0dXJuIGNsYWltX2VsZW1lbnRfYmFzZShub2RlcywgbmFtZSwgYXR0cmlidXRlcywgZWxlbWVudCk7XG59XG5mdW5jdGlvbiBjbGFpbV9zdmdfZWxlbWVudChub2RlcywgbmFtZSwgYXR0cmlidXRlcykge1xuICAgIHJldHVybiBjbGFpbV9lbGVtZW50X2Jhc2Uobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMsIHN2Z19lbGVtZW50KTtcbn1cbmZ1bmN0aW9uIGNsYWltX3RleHQobm9kZXMsIGRhdGEpIHtcbiAgICByZXR1cm4gY2xhaW1fbm9kZShub2RlcywgKG5vZGUpID0+IG5vZGUubm9kZVR5cGUgPT09IDMsIChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFTdHIgPSAnJyArIGRhdGE7XG4gICAgICAgIGlmIChub2RlLmRhdGEuc3RhcnRzV2l0aChkYXRhU3RyKSkge1xuICAgICAgICAgICAgaWYgKG5vZGUuZGF0YS5sZW5ndGggIT09IGRhdGFTdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuc3BsaXRUZXh0KGRhdGFTdHIubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuZGF0YSA9IGRhdGFTdHI7XG4gICAgICAgIH1cbiAgICB9LCAoKSA9PiB0ZXh0KGRhdGEpLCB0cnVlIC8vIFRleHQgbm9kZXMgc2hvdWxkIG5vdCB1cGRhdGUgbGFzdCBpbmRleCBzaW5jZSBpdCBpcyBsaWtlbHkgbm90IHdvcnRoIGl0IHRvIGVsaW1pbmF0ZSBhbiBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIG9mIGFjdHVhbCBlbGVtZW50c1xuICAgICk7XG59XG5mdW5jdGlvbiBjbGFpbV9zcGFjZShub2Rlcykge1xuICAgIHJldHVybiBjbGFpbV90ZXh0KG5vZGVzLCAnICcpO1xufVxuZnVuY3Rpb24gZmluZF9jb21tZW50KG5vZGVzLCB0ZXh0LCBzdGFydCkge1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDggLyogY29tbWVudCBub2RlICovICYmIG5vZGUudGV4dENvbnRlbnQudHJpbSgpID09PSB0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZXMubGVuZ3RoO1xufVxuZnVuY3Rpb24gY2xhaW1faHRtbF90YWcobm9kZXMpIHtcbiAgICAvLyBmaW5kIGh0bWwgb3BlbmluZyB0YWdcbiAgICBjb25zdCBzdGFydF9pbmRleCA9IGZpbmRfY29tbWVudChub2RlcywgJ0hUTUxfVEFHX1NUQVJUJywgMCk7XG4gICAgY29uc3QgZW5kX2luZGV4ID0gZmluZF9jb21tZW50KG5vZGVzLCAnSFRNTF9UQUdfRU5EJywgc3RhcnRfaW5kZXgpO1xuICAgIGlmIChzdGFydF9pbmRleCA9PT0gZW5kX2luZGV4KSB7XG4gICAgICAgIHJldHVybiBuZXcgSHRtbFRhZ0h5ZHJhdGlvbigpO1xuICAgIH1cbiAgICBpbml0X2NsYWltX2luZm8obm9kZXMpO1xuICAgIGNvbnN0IGh0bWxfdGFnX25vZGVzID0gbm9kZXMuc3BsaWNlKHN0YXJ0X2luZGV4LCBlbmRfaW5kZXggLSBzdGFydF9pbmRleCArIDEpO1xuICAgIGRldGFjaChodG1sX3RhZ19ub2Rlc1swXSk7XG4gICAgZGV0YWNoKGh0bWxfdGFnX25vZGVzW2h0bWxfdGFnX25vZGVzLmxlbmd0aCAtIDFdKTtcbiAgICBjb25zdCBjbGFpbWVkX25vZGVzID0gaHRtbF90YWdfbm9kZXMuc2xpY2UoMSwgaHRtbF90YWdfbm9kZXMubGVuZ3RoIC0gMSk7XG4gICAgZm9yIChjb25zdCBuIG9mIGNsYWltZWRfbm9kZXMpIHtcbiAgICAgICAgbi5jbGFpbV9vcmRlciA9IG5vZGVzLmNsYWltX2luZm8udG90YWxfY2xhaW1lZDtcbiAgICAgICAgbm9kZXMuY2xhaW1faW5mby50b3RhbF9jbGFpbWVkICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBuZXcgSHRtbFRhZ0h5ZHJhdGlvbihjbGFpbWVkX25vZGVzKTtcbn1cbmZ1bmN0aW9uIHNldF9kYXRhKHRleHQsIGRhdGEpIHtcbiAgICBkYXRhID0gJycgKyBkYXRhO1xuICAgIGlmICh0ZXh0Lndob2xlVGV4dCAhPT0gZGF0YSlcbiAgICAgICAgdGV4dC5kYXRhID0gZGF0YTtcbn1cbmZ1bmN0aW9uIHNldF9pbnB1dF92YWx1ZShpbnB1dCwgdmFsdWUpIHtcbiAgICBpbnB1dC52YWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xufVxuZnVuY3Rpb24gc2V0X2lucHV0X3R5cGUoaW5wdXQsIHR5cGUpIHtcbiAgICB0cnkge1xuICAgICAgICBpbnB1dC50eXBlID0gdHlwZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNldF9zdHlsZShub2RlLCBrZXksIHZhbHVlLCBpbXBvcnRhbnQpIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgbm9kZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShrZXkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlLCBpbXBvcnRhbnQgPyAnaW1wb3J0YW50JyA6ICcnKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZWxlY3Rfb3B0aW9uKHNlbGVjdCwgdmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuICAgICAgICBpZiAob3B0aW9uLl9fdmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNlbGVjdC5zZWxlY3RlZEluZGV4ID0gLTE7IC8vIG5vIG9wdGlvbiBzaG91bGQgYmUgc2VsZWN0ZWRcbn1cbmZ1bmN0aW9uIHNlbGVjdF9vcHRpb25zKHNlbGVjdCwgdmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB+dmFsdWUuaW5kZXhPZihvcHRpb24uX192YWx1ZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2VsZWN0X3ZhbHVlKHNlbGVjdCkge1xuICAgIGNvbnN0IHNlbGVjdGVkX29wdGlvbiA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpIHx8IHNlbGVjdC5vcHRpb25zWzBdO1xuICAgIHJldHVybiBzZWxlY3RlZF9vcHRpb24gJiYgc2VsZWN0ZWRfb3B0aW9uLl9fdmFsdWU7XG59XG5mdW5jdGlvbiBzZWxlY3RfbXVsdGlwbGVfdmFsdWUoc2VsZWN0KSB7XG4gICAgcmV0dXJuIFtdLm1hcC5jYWxsKHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCc6Y2hlY2tlZCcpLCBvcHRpb24gPT4gb3B0aW9uLl9fdmFsdWUpO1xufVxuLy8gdW5mb3J0dW5hdGVseSB0aGlzIGNhbid0IGJlIGEgY29uc3RhbnQgYXMgdGhhdCB3b3VsZG4ndCBiZSB0cmVlLXNoYWtlYWJsZVxuLy8gc28gd2UgY2FjaGUgdGhlIHJlc3VsdCBpbnN0ZWFkXG5sZXQgY3Jvc3NvcmlnaW47XG5mdW5jdGlvbiBpc19jcm9zc29yaWdpbigpIHtcbiAgICBpZiAoY3Jvc3NvcmlnaW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjcm9zc29yaWdpbiA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB2b2lkIHdpbmRvdy5wYXJlbnQuZG9jdW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjcm9zc29yaWdpbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNyb3Nzb3JpZ2luO1xufVxuZnVuY3Rpb24gYWRkX3Jlc2l6ZV9saXN0ZW5lcihub2RlLCBmbikge1xuICAgIGNvbnN0IGNvbXB1dGVkX3N0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBpZiAoY29tcHV0ZWRfc3R5bGUucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIG5vZGUuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIH1cbiAgICBjb25zdCBpZnJhbWUgPSBlbGVtZW50KCdpZnJhbWUnKTtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBibG9jazsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7ICcgK1xuICAgICAgICAnb3ZlcmZsb3c6IGhpZGRlbjsgYm9yZGVyOiAwOyBvcGFjaXR5OiAwOyBwb2ludGVyLWV2ZW50czogbm9uZTsgei1pbmRleDogLTE7Jyk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIGlmcmFtZS50YWJJbmRleCA9IC0xO1xuICAgIGNvbnN0IGNyb3Nzb3JpZ2luID0gaXNfY3Jvc3NvcmlnaW4oKTtcbiAgICBsZXQgdW5zdWJzY3JpYmU7XG4gICAgaWYgKGNyb3Nzb3JpZ2luKSB7XG4gICAgICAgIGlmcmFtZS5zcmMgPSBcImRhdGE6dGV4dC9odG1sLDxzY3JpcHQ+b25yZXNpemU9ZnVuY3Rpb24oKXtwYXJlbnQucG9zdE1lc3NhZ2UoMCwnKicpfTwvc2NyaXB0PlwiO1xuICAgICAgICB1bnN1YnNjcmliZSA9IGxpc3Rlbih3aW5kb3csICdtZXNzYWdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBpZnJhbWUuY29udGVudFdpbmRvdylcbiAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmcmFtZS5zcmMgPSAnYWJvdXQ6YmxhbmsnO1xuICAgICAgICBpZnJhbWUub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUgPSBsaXN0ZW4oaWZyYW1lLmNvbnRlbnRXaW5kb3csICdyZXNpemUnLCBmbik7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGFwcGVuZChub2RlLCBpZnJhbWUpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmIChjcm9zc29yaWdpbikge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh1bnN1YnNjcmliZSAmJiBpZnJhbWUuY29udGVudFdpbmRvdykge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICBkZXRhY2goaWZyYW1lKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gdG9nZ2xlX2NsYXNzKGVsZW1lbnQsIG5hbWUsIHRvZ2dsZSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0W3RvZ2dsZSA/ICdhZGQnIDogJ3JlbW92ZSddKG5hbWUpO1xufVxuZnVuY3Rpb24gY3VzdG9tX2V2ZW50KHR5cGUsIGRldGFpbCwgYnViYmxlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgIGUuaW5pdEN1c3RvbUV2ZW50KHR5cGUsIGJ1YmJsZXMsIGZhbHNlLCBkZXRhaWwpO1xuICAgIHJldHVybiBlO1xufVxuZnVuY3Rpb24gcXVlcnlfc2VsZWN0b3JfYWxsKHNlbGVjdG9yLCBwYXJlbnQgPSBkb2N1bWVudC5ib2R5KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20ocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbn1cbmNsYXNzIEh0bWxUYWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmUgPSB0aGlzLm4gPSBudWxsO1xuICAgIH1cbiAgICBjKGh0bWwpIHtcbiAgICAgICAgdGhpcy5oKGh0bWwpO1xuICAgIH1cbiAgICBtKGh0bWwsIHRhcmdldCwgYW5jaG9yID0gbnVsbCkge1xuICAgICAgICBpZiAoIXRoaXMuZSkge1xuICAgICAgICAgICAgdGhpcy5lID0gZWxlbWVudCh0YXJnZXQubm9kZU5hbWUpO1xuICAgICAgICAgICAgdGhpcy50ID0gdGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy5jKGh0bWwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaShhbmNob3IpO1xuICAgIH1cbiAgICBoKGh0bWwpIHtcbiAgICAgICAgdGhpcy5lLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIHRoaXMubiA9IEFycmF5LmZyb20odGhpcy5lLmNoaWxkTm9kZXMpO1xuICAgIH1cbiAgICBpKGFuY2hvcikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaW5zZXJ0KHRoaXMudCwgdGhpcy5uW2ldLCBhbmNob3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHAoaHRtbCkge1xuICAgICAgICB0aGlzLmQoKTtcbiAgICAgICAgdGhpcy5oKGh0bWwpO1xuICAgICAgICB0aGlzLmkodGhpcy5hKTtcbiAgICB9XG4gICAgZCgpIHtcbiAgICAgICAgdGhpcy5uLmZvckVhY2goZGV0YWNoKTtcbiAgICB9XG59XG5jbGFzcyBIdG1sVGFnSHlkcmF0aW9uIGV4dGVuZHMgSHRtbFRhZyB7XG4gICAgY29uc3RydWN0b3IoY2xhaW1lZF9ub2Rlcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmUgPSB0aGlzLm4gPSBudWxsO1xuICAgICAgICB0aGlzLmwgPSBjbGFpbWVkX25vZGVzO1xuICAgIH1cbiAgICBjKGh0bWwpIHtcbiAgICAgICAgaWYgKHRoaXMubCkge1xuICAgICAgICAgICAgdGhpcy5uID0gdGhpcy5sO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIuYyhodG1sKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpKGFuY2hvcikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaW5zZXJ0X2h5ZHJhdGlvbih0aGlzLnQsIHRoaXMubltpXSwgYW5jaG9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGF0dHJpYnV0ZV90b19vYmplY3QoYXR0cmlidXRlcykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3QgYXR0cmlidXRlIG9mIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmVzdWx0W2F0dHJpYnV0ZS5uYW1lXSA9IGF0dHJpYnV0ZS52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGdldF9jdXN0b21fZWxlbWVudHNfc2xvdHMoZWxlbWVudCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgIHJlc3VsdFtub2RlLnNsb3QgfHwgJ2RlZmF1bHQnXSA9IHRydWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gd2UgbmVlZCB0byBzdG9yZSB0aGUgaW5mb3JtYXRpb24gZm9yIG11bHRpcGxlIGRvY3VtZW50cyBiZWNhdXNlIGEgU3ZlbHRlIGFwcGxpY2F0aW9uIGNvdWxkIGFsc28gY29udGFpbiBpZnJhbWVzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vc3ZlbHRlanMvc3ZlbHRlL2lzc3Vlcy8zNjI0XG5jb25zdCBtYW5hZ2VkX3N0eWxlcyA9IG5ldyBNYXAoKTtcbmxldCBhY3RpdmUgPSAwO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Rhcmtza3lhcHAvc3RyaW5nLWhhc2gvYmxvYi9tYXN0ZXIvaW5kZXguanNcbmZ1bmN0aW9uIGhhc2goc3RyKSB7XG4gICAgbGV0IGhhc2ggPSA1MzgxO1xuICAgIGxldCBpID0gc3RyLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKVxuICAgICAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgXiBzdHIuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gaGFzaCA+Pj4gMDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9zdHlsZV9pbmZvcm1hdGlvbihkb2MsIG5vZGUpIHtcbiAgICBjb25zdCBpbmZvID0geyBzdHlsZXNoZWV0OiBhcHBlbmRfZW1wdHlfc3R5bGVzaGVldChub2RlKSwgcnVsZXM6IHt9IH07XG4gICAgbWFuYWdlZF9zdHlsZXMuc2V0KGRvYywgaW5mbyk7XG4gICAgcmV0dXJuIGluZm87XG59XG5mdW5jdGlvbiBjcmVhdGVfcnVsZShub2RlLCBhLCBiLCBkdXJhdGlvbiwgZGVsYXksIGVhc2UsIGZuLCB1aWQgPSAwKSB7XG4gICAgY29uc3Qgc3RlcCA9IDE2LjY2NiAvIGR1cmF0aW9uO1xuICAgIGxldCBrZXlmcmFtZXMgPSAne1xcbic7XG4gICAgZm9yIChsZXQgcCA9IDA7IHAgPD0gMTsgcCArPSBzdGVwKSB7XG4gICAgICAgIGNvbnN0IHQgPSBhICsgKGIgLSBhKSAqIGVhc2UocCk7XG4gICAgICAgIGtleWZyYW1lcyArPSBwICogMTAwICsgYCV7JHtmbih0LCAxIC0gdCl9fVxcbmA7XG4gICAgfVxuICAgIGNvbnN0IHJ1bGUgPSBrZXlmcmFtZXMgKyBgMTAwJSB7JHtmbihiLCAxIC0gYil9fVxcbn1gO1xuICAgIGNvbnN0IG5hbWUgPSBgX19zdmVsdGVfJHtoYXNoKHJ1bGUpfV8ke3VpZH1gO1xuICAgIGNvbnN0IGRvYyA9IGdldF9yb290X2Zvcl9zdHlsZShub2RlKTtcbiAgICBjb25zdCB7IHN0eWxlc2hlZXQsIHJ1bGVzIH0gPSBtYW5hZ2VkX3N0eWxlcy5nZXQoZG9jKSB8fCBjcmVhdGVfc3R5bGVfaW5mb3JtYXRpb24oZG9jLCBub2RlKTtcbiAgICBpZiAoIXJ1bGVzW25hbWVdKSB7XG4gICAgICAgIHJ1bGVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgc3R5bGVzaGVldC5pbnNlcnRSdWxlKGBAa2V5ZnJhbWVzICR7bmFtZX0gJHtydWxlfWAsIHN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcbiAgICB9XG4gICAgY29uc3QgYW5pbWF0aW9uID0gbm9kZS5zdHlsZS5hbmltYXRpb24gfHwgJyc7XG4gICAgbm9kZS5zdHlsZS5hbmltYXRpb24gPSBgJHthbmltYXRpb24gPyBgJHthbmltYXRpb259LCBgIDogJyd9JHtuYW1lfSAke2R1cmF0aW9ufW1zIGxpbmVhciAke2RlbGF5fW1zIDEgYm90aGA7XG4gICAgYWN0aXZlICs9IDE7XG4gICAgcmV0dXJuIG5hbWU7XG59XG5mdW5jdGlvbiBkZWxldGVfcnVsZShub2RlLCBuYW1lKSB7XG4gICAgY29uc3QgcHJldmlvdXMgPSAobm9kZS5zdHlsZS5hbmltYXRpb24gfHwgJycpLnNwbGl0KCcsICcpO1xuICAgIGNvbnN0IG5leHQgPSBwcmV2aW91cy5maWx0ZXIobmFtZVxuICAgICAgICA/IGFuaW0gPT4gYW5pbS5pbmRleE9mKG5hbWUpIDwgMCAvLyByZW1vdmUgc3BlY2lmaWMgYW5pbWF0aW9uXG4gICAgICAgIDogYW5pbSA9PiBhbmltLmluZGV4T2YoJ19fc3ZlbHRlJykgPT09IC0xIC8vIHJlbW92ZSBhbGwgU3ZlbHRlIGFuaW1hdGlvbnNcbiAgICApO1xuICAgIGNvbnN0IGRlbGV0ZWQgPSBwcmV2aW91cy5sZW5ndGggLSBuZXh0Lmxlbmd0aDtcbiAgICBpZiAoZGVsZXRlZCkge1xuICAgICAgICBub2RlLnN0eWxlLmFuaW1hdGlvbiA9IG5leHQuam9pbignLCAnKTtcbiAgICAgICAgYWN0aXZlIC09IGRlbGV0ZWQ7XG4gICAgICAgIGlmICghYWN0aXZlKVxuICAgICAgICAgICAgY2xlYXJfcnVsZXMoKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjbGVhcl9ydWxlcygpIHtcbiAgICByYWYoKCkgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBtYW5hZ2VkX3N0eWxlcy5mb3JFYWNoKGluZm8gPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBzdHlsZXNoZWV0IH0gPSBpbmZvO1xuICAgICAgICAgICAgbGV0IGkgPSBzdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlIChpLS0pXG4gICAgICAgICAgICAgICAgc3R5bGVzaGVldC5kZWxldGVSdWxlKGkpO1xuICAgICAgICAgICAgaW5mby5ydWxlcyA9IHt9O1xuICAgICAgICB9KTtcbiAgICAgICAgbWFuYWdlZF9zdHlsZXMuY2xlYXIoKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlX2FuaW1hdGlvbihub2RlLCBmcm9tLCBmbiwgcGFyYW1zKSB7XG4gICAgaWYgKCFmcm9tKVxuICAgICAgICByZXR1cm4gbm9vcDtcbiAgICBjb25zdCB0byA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKGZyb20ubGVmdCA9PT0gdG8ubGVmdCAmJiBmcm9tLnJpZ2h0ID09PSB0by5yaWdodCAmJiBmcm9tLnRvcCA9PT0gdG8udG9wICYmIGZyb20uYm90dG9tID09PSB0by5ib3R0b20pXG4gICAgICAgIHJldHVybiBub29wO1xuICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIFxuICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogc2hvdWxkIHRoaXMgYmUgc2VwYXJhdGVkIGZyb20gZGVzdHJ1Y3R1cmluZz8gT3Igc3RhcnQvZW5kIGFkZGVkIHRvIHB1YmxpYyBhcGkgYW5kIGRvY3VtZW50YXRpb24/XG4gICAgc3RhcnQ6IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5LCBcbiAgICAvLyBAdHMtaWdub3JlIHRvZG86XG4gICAgZW5kID0gc3RhcnRfdGltZSArIGR1cmF0aW9uLCB0aWNrID0gbm9vcCwgY3NzIH0gPSBmbihub2RlLCB7IGZyb20sIHRvIH0sIHBhcmFtcyk7XG4gICAgbGV0IHJ1bm5pbmcgPSB0cnVlO1xuICAgIGxldCBzdGFydGVkID0gZmFsc2U7XG4gICAgbGV0IG5hbWU7XG4gICAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgIG5hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAwLCAxLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRlbGF5KSB7XG4gICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgbmFtZSk7XG4gICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgbG9vcChub3cgPT4ge1xuICAgICAgICBpZiAoIXN0YXJ0ZWQgJiYgbm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydGVkICYmIG5vdyA+PSBlbmQpIHtcbiAgICAgICAgICAgIHRpY2soMSwgMCk7XG4gICAgICAgICAgICBzdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFydW5uaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBub3cgLSBzdGFydF90aW1lO1xuICAgICAgICAgICAgY29uc3QgdCA9IDAgKyAxICogZWFzaW5nKHAgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICB0aWNrKHQsIDEgLSB0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICBzdGFydCgpO1xuICAgIHRpY2soMCwgMSk7XG4gICAgcmV0dXJuIHN0b3A7XG59XG5mdW5jdGlvbiBmaXhfcG9zaXRpb24obm9kZSkge1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBpZiAoc3R5bGUucG9zaXRpb24gIT09ICdhYnNvbHV0ZScgJiYgc3R5bGUucG9zaXRpb24gIT09ICdmaXhlZCcpIHtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBzdHlsZTtcbiAgICAgICAgY29uc3QgYSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIG5vZGUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBub2RlLnN0eWxlLndpZHRoID0gd2lkdGg7XG4gICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBhZGRfdHJhbnNmb3JtKG5vZGUsIGEpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZF90cmFuc2Zvcm0obm9kZSwgYSkge1xuICAgIGNvbnN0IGIgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChhLmxlZnQgIT09IGIubGVmdCB8fCBhLnRvcCAhPT0gYi50b3ApIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBzdHlsZS50cmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogc3R5bGUudHJhbnNmb3JtO1xuICAgICAgICBub2RlLnN0eWxlLnRyYW5zZm9ybSA9IGAke3RyYW5zZm9ybX0gdHJhbnNsYXRlKCR7YS5sZWZ0IC0gYi5sZWZ0fXB4LCAke2EudG9wIC0gYi50b3B9cHgpYDtcbiAgICB9XG59XG5cbmxldCBjdXJyZW50X2NvbXBvbmVudDtcbmZ1bmN0aW9uIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICBjdXJyZW50X2NvbXBvbmVudCA9IGNvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGdldF9jdXJyZW50X2NvbXBvbmVudCgpIHtcbiAgICBpZiAoIWN1cnJlbnRfY29tcG9uZW50KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Z1bmN0aW9uIGNhbGxlZCBvdXRzaWRlIGNvbXBvbmVudCBpbml0aWFsaXphdGlvbicpO1xuICAgIHJldHVybiBjdXJyZW50X2NvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGJlZm9yZVVwZGF0ZShmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmJlZm9yZV91cGRhdGUucHVzaChmbik7XG59XG5mdW5jdGlvbiBvbk1vdW50KGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQub25fbW91bnQucHVzaChmbik7XG59XG5mdW5jdGlvbiBhZnRlclVwZGF0ZShmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmFmdGVyX3VwZGF0ZS5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIG9uRGVzdHJveShmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLm9uX2Rlc3Ryb3kucHVzaChmbik7XG59XG5mdW5jdGlvbiBjcmVhdGVFdmVudERpc3BhdGNoZXIoKSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCk7XG4gICAgcmV0dXJuICh0eXBlLCBkZXRhaWwpID0+IHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gY29tcG9uZW50LiQkLmNhbGxiYWNrc1t0eXBlXTtcbiAgICAgICAgaWYgKGNhbGxiYWNrcykge1xuICAgICAgICAgICAgLy8gVE9ETyBhcmUgdGhlcmUgc2l0dWF0aW9ucyB3aGVyZSBldmVudHMgY291bGQgYmUgZGlzcGF0Y2hlZFxuICAgICAgICAgICAgLy8gaW4gYSBzZXJ2ZXIgKG5vbi1ET00pIGVudmlyb25tZW50P1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBjdXN0b21fZXZlbnQodHlwZSwgZGV0YWlsKTtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5zbGljZSgpLmZvckVhY2goZm4gPT4ge1xuICAgICAgICAgICAgICAgIGZuLmNhbGwoY29tcG9uZW50LCBldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBzZXRDb250ZXh0KGtleSwgY29udGV4dCkge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQuc2V0KGtleSwgY29udGV4dCk7XG59XG5mdW5jdGlvbiBnZXRDb250ZXh0KGtleSkge1xuICAgIHJldHVybiBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LmdldChrZXkpO1xufVxuZnVuY3Rpb24gZ2V0QWxsQ29udGV4dHMoKSB7XG4gICAgcmV0dXJuIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQ7XG59XG5mdW5jdGlvbiBoYXNDb250ZXh0KGtleSkge1xuICAgIHJldHVybiBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LmhhcyhrZXkpO1xufVxuLy8gVE9ETyBmaWd1cmUgb3V0IGlmIHdlIHN0aWxsIHdhbnQgdG8gc3VwcG9ydFxuLy8gc2hvcnRoYW5kIGV2ZW50cywgb3IgaWYgd2Ugd2FudCB0byBpbXBsZW1lbnRcbi8vIGEgcmVhbCBidWJibGluZyBtZWNoYW5pc21cbmZ1bmN0aW9uIGJ1YmJsZShjb21wb25lbnQsIGV2ZW50KSB7XG4gICAgY29uc3QgY2FsbGJhY2tzID0gY29tcG9uZW50LiQkLmNhbGxiYWNrc1tldmVudC50eXBlXTtcbiAgICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY2FsbGJhY2tzLnNsaWNlKCkuZm9yRWFjaChmbiA9PiBmbi5jYWxsKHRoaXMsIGV2ZW50KSk7XG4gICAgfVxufVxuXG5jb25zdCBkaXJ0eV9jb21wb25lbnRzID0gW107XG5jb25zdCBpbnRyb3MgPSB7IGVuYWJsZWQ6IGZhbHNlIH07XG5jb25zdCBiaW5kaW5nX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgcmVuZGVyX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgZmx1c2hfY2FsbGJhY2tzID0gW107XG5jb25zdCByZXNvbHZlZF9wcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5sZXQgdXBkYXRlX3NjaGVkdWxlZCA9IGZhbHNlO1xuZnVuY3Rpb24gc2NoZWR1bGVfdXBkYXRlKCkge1xuICAgIGlmICghdXBkYXRlX3NjaGVkdWxlZCkge1xuICAgICAgICB1cGRhdGVfc2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgICAgcmVzb2x2ZWRfcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9XG59XG5mdW5jdGlvbiB0aWNrKCkge1xuICAgIHNjaGVkdWxlX3VwZGF0ZSgpO1xuICAgIHJldHVybiByZXNvbHZlZF9wcm9taXNlO1xufVxuZnVuY3Rpb24gYWRkX3JlbmRlcl9jYWxsYmFjayhmbikge1xuICAgIHJlbmRlcl9jYWxsYmFja3MucHVzaChmbik7XG59XG5mdW5jdGlvbiBhZGRfZmx1c2hfY2FsbGJhY2soZm4pIHtcbiAgICBmbHVzaF9jYWxsYmFja3MucHVzaChmbik7XG59XG4vLyBmbHVzaCgpIGNhbGxzIGNhbGxiYWNrcyBpbiB0aGlzIG9yZGVyOlxuLy8gMS4gQWxsIGJlZm9yZVVwZGF0ZSBjYWxsYmFja3MsIGluIG9yZGVyOiBwYXJlbnRzIGJlZm9yZSBjaGlsZHJlblxuLy8gMi4gQWxsIGJpbmQ6dGhpcyBjYWxsYmFja3MsIGluIHJldmVyc2Ugb3JkZXI6IGNoaWxkcmVuIGJlZm9yZSBwYXJlbnRzLlxuLy8gMy4gQWxsIGFmdGVyVXBkYXRlIGNhbGxiYWNrcywgaW4gb3JkZXI6IHBhcmVudHMgYmVmb3JlIGNoaWxkcmVuLiBFWENFUFRcbi8vICAgIGZvciBhZnRlclVwZGF0ZXMgY2FsbGVkIGR1cmluZyB0aGUgaW5pdGlhbCBvbk1vdW50LCB3aGljaCBhcmUgY2FsbGVkIGluXG4vLyAgICByZXZlcnNlIG9yZGVyOiBjaGlsZHJlbiBiZWZvcmUgcGFyZW50cy5cbi8vIFNpbmNlIGNhbGxiYWNrcyBtaWdodCB1cGRhdGUgY29tcG9uZW50IHZhbHVlcywgd2hpY2ggY291bGQgdHJpZ2dlciBhbm90aGVyXG4vLyBjYWxsIHRvIGZsdXNoKCksIHRoZSBmb2xsb3dpbmcgc3RlcHMgZ3VhcmQgYWdhaW5zdCB0aGlzOlxuLy8gMS4gRHVyaW5nIGJlZm9yZVVwZGF0ZSwgYW55IHVwZGF0ZWQgY29tcG9uZW50cyB3aWxsIGJlIGFkZGVkIHRvIHRoZVxuLy8gICAgZGlydHlfY29tcG9uZW50cyBhcnJheSBhbmQgd2lsbCBjYXVzZSBhIHJlZW50cmFudCBjYWxsIHRvIGZsdXNoKCkuIEJlY2F1c2Vcbi8vICAgIHRoZSBmbHVzaCBpbmRleCBpcyBrZXB0IG91dHNpZGUgdGhlIGZ1bmN0aW9uLCB0aGUgcmVlbnRyYW50IGNhbGwgd2lsbCBwaWNrXG4vLyAgICB1cCB3aGVyZSB0aGUgZWFybGllciBjYWxsIGxlZnQgb2ZmIGFuZCBnbyB0aHJvdWdoIGFsbCBkaXJ0eSBjb21wb25lbnRzLiBUaGVcbi8vICAgIGN1cnJlbnRfY29tcG9uZW50IHZhbHVlIGlzIHNhdmVkIGFuZCByZXN0b3JlZCBzbyB0aGF0IHRoZSByZWVudHJhbnQgY2FsbCB3aWxsXG4vLyAgICBub3QgaW50ZXJmZXJlIHdpdGggdGhlIFwicGFyZW50XCIgZmx1c2goKSBjYWxsLlxuLy8gMi4gYmluZDp0aGlzIGNhbGxiYWNrcyBjYW5ub3QgdHJpZ2dlciBuZXcgZmx1c2goKSBjYWxscy5cbi8vIDMuIER1cmluZyBhZnRlclVwZGF0ZSwgYW55IHVwZGF0ZWQgY29tcG9uZW50cyB3aWxsIE5PVCBoYXZlIHRoZWlyIGFmdGVyVXBkYXRlXG4vLyAgICBjYWxsYmFjayBjYWxsZWQgYSBzZWNvbmQgdGltZTsgdGhlIHNlZW5fY2FsbGJhY2tzIHNldCwgb3V0c2lkZSB0aGUgZmx1c2goKVxuLy8gICAgZnVuY3Rpb24sIGd1YXJhbnRlZXMgdGhpcyBiZWhhdmlvci5cbmNvbnN0IHNlZW5fY2FsbGJhY2tzID0gbmV3IFNldCgpO1xubGV0IGZsdXNoaWR4ID0gMDsgLy8gRG8gKm5vdCogbW92ZSB0aGlzIGluc2lkZSB0aGUgZmx1c2goKSBmdW5jdGlvblxuZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgY29uc3Qgc2F2ZWRfY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG4gICAgZG8ge1xuICAgICAgICAvLyBmaXJzdCwgY2FsbCBiZWZvcmVVcGRhdGUgZnVuY3Rpb25zXG4gICAgICAgIC8vIGFuZCB1cGRhdGUgY29tcG9uZW50c1xuICAgICAgICB3aGlsZSAoZmx1c2hpZHggPCBkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gZGlydHlfY29tcG9uZW50c1tmbHVzaGlkeF07XG4gICAgICAgICAgICBmbHVzaGlkeCsrO1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICB1cGRhdGUoY29tcG9uZW50LiQkKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQobnVsbCk7XG4gICAgICAgIGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoID0gMDtcbiAgICAgICAgZmx1c2hpZHggPSAwO1xuICAgICAgICB3aGlsZSAoYmluZGluZ19jYWxsYmFja3MubGVuZ3RoKVxuICAgICAgICAgICAgYmluZGluZ19jYWxsYmFja3MucG9wKCkoKTtcbiAgICAgICAgLy8gdGhlbiwgb25jZSBjb21wb25lbnRzIGFyZSB1cGRhdGVkLCBjYWxsXG4gICAgICAgIC8vIGFmdGVyVXBkYXRlIGZ1bmN0aW9ucy4gVGhpcyBtYXkgY2F1c2VcbiAgICAgICAgLy8gc3Vic2VxdWVudCB1cGRhdGVzLi4uXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVuZGVyX2NhbGxiYWNrcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSByZW5kZXJfY2FsbGJhY2tzW2ldO1xuICAgICAgICAgICAgaWYgKCFzZWVuX2NhbGxiYWNrcy5oYXMoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgLy8gLi4uc28gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBsb29wc1xuICAgICAgICAgICAgICAgIHNlZW5fY2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZW5kZXJfY2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gICAgfSB3aGlsZSAoZGlydHlfY29tcG9uZW50cy5sZW5ndGgpO1xuICAgIHdoaWxlIChmbHVzaF9jYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgICAgIGZsdXNoX2NhbGxiYWNrcy5wb3AoKSgpO1xuICAgIH1cbiAgICB1cGRhdGVfc2NoZWR1bGVkID0gZmFsc2U7XG4gICAgc2Vlbl9jYWxsYmFja3MuY2xlYXIoKTtcbiAgICBzZXRfY3VycmVudF9jb21wb25lbnQoc2F2ZWRfY29tcG9uZW50KTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZSgkJCkge1xuICAgIGlmICgkJC5mcmFnbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAkJC51cGRhdGUoKTtcbiAgICAgICAgcnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTtcbiAgICAgICAgY29uc3QgZGlydHkgPSAkJC5kaXJ0eTtcbiAgICAgICAgJCQuZGlydHkgPSBbLTFdO1xuICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5wKCQkLmN0eCwgZGlydHkpO1xuICAgICAgICAkJC5hZnRlcl91cGRhdGUuZm9yRWFjaChhZGRfcmVuZGVyX2NhbGxiYWNrKTtcbiAgICB9XG59XG5cbmxldCBwcm9taXNlO1xuZnVuY3Rpb24gd2FpdCgpIHtcbiAgICBpZiAoIXByb21pc2UpIHtcbiAgICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICBwcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGRpc3BhdGNoKG5vZGUsIGRpcmVjdGlvbiwga2luZCkge1xuICAgIG5vZGUuZGlzcGF0Y2hFdmVudChjdXN0b21fZXZlbnQoYCR7ZGlyZWN0aW9uID8gJ2ludHJvJyA6ICdvdXRybyd9JHtraW5kfWApKTtcbn1cbmNvbnN0IG91dHJvaW5nID0gbmV3IFNldCgpO1xubGV0IG91dHJvcztcbmZ1bmN0aW9uIGdyb3VwX291dHJvcygpIHtcbiAgICBvdXRyb3MgPSB7XG4gICAgICAgIHI6IDAsXG4gICAgICAgIGM6IFtdLFxuICAgICAgICBwOiBvdXRyb3MgLy8gcGFyZW50IGdyb3VwXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNoZWNrX291dHJvcygpIHtcbiAgICBpZiAoIW91dHJvcy5yKSB7XG4gICAgICAgIHJ1bl9hbGwob3V0cm9zLmMpO1xuICAgIH1cbiAgICBvdXRyb3MgPSBvdXRyb3MucDtcbn1cbmZ1bmN0aW9uIHRyYW5zaXRpb25faW4oYmxvY2ssIGxvY2FsKSB7XG4gICAgaWYgKGJsb2NrICYmIGJsb2NrLmkpIHtcbiAgICAgICAgb3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcbiAgICAgICAgYmxvY2suaShsb2NhbCk7XG4gICAgfVxufVxuZnVuY3Rpb24gdHJhbnNpdGlvbl9vdXQoYmxvY2ssIGxvY2FsLCBkZXRhY2gsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGJsb2NrICYmIGJsb2NrLm8pIHtcbiAgICAgICAgaWYgKG91dHJvaW5nLmhhcyhibG9jaykpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIG91dHJvaW5nLmFkZChibG9jayk7XG4gICAgICAgIG91dHJvcy5jLnB1c2goKCkgPT4ge1xuICAgICAgICAgICAgb3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGlmIChkZXRhY2gpXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrLmQoMSk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJsb2NrLm8obG9jYWwpO1xuICAgIH1cbn1cbmNvbnN0IG51bGxfdHJhbnNpdGlvbiA9IHsgZHVyYXRpb246IDAgfTtcbmZ1bmN0aW9uIGNyZWF0ZV9pbl90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMpIHtcbiAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zKTtcbiAgICBsZXQgcnVubmluZyA9IGZhbHNlO1xuICAgIGxldCBhbmltYXRpb25fbmFtZTtcbiAgICBsZXQgdGFzaztcbiAgICBsZXQgdWlkID0gMDtcbiAgICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdvKCkge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAwLCAxLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzLCB1aWQrKyk7XG4gICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5O1xuICAgICAgICBjb25zdCBlbmRfdGltZSA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbjtcbiAgICAgICAgaWYgKHRhc2spXG4gICAgICAgICAgICB0YXNrLmFib3J0KCk7XG4gICAgICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIHRydWUsICdzdGFydCcpKTtcbiAgICAgICAgdGFzayA9IGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBlbmRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aWNrKDEsIDApO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCB0cnVlLCAnZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBzdGFydF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBlYXNpbmcoKG5vdyAtIHN0YXJ0X3RpbWUpIC8gZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aWNrKHQsIDEgLSB0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcnVubmluZztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBzdGFydGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnQoKSB7XG4gICAgICAgICAgICBpZiAoc3RhcnRlZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUpO1xuICAgICAgICAgICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICBjb25maWcgPSBjb25maWcoKTtcbiAgICAgICAgICAgICAgICB3YWl0KCkudGhlbihnbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBpbnZhbGlkYXRlKCkge1xuICAgICAgICAgICAgc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBlbmQoKSB7XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlX291dF90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMpIHtcbiAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zKTtcbiAgICBsZXQgcnVubmluZyA9IHRydWU7XG4gICAgbGV0IGFuaW1hdGlvbl9uYW1lO1xuICAgIGNvbnN0IGdyb3VwID0gb3V0cm9zO1xuICAgIGdyb3VwLnIgKz0gMTtcbiAgICBmdW5jdGlvbiBnbygpIHtcbiAgICAgICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgdGljayA9IG5vb3AsIGNzcyB9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcbiAgICAgICAgaWYgKGNzcylcbiAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMSwgMCwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcyk7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5O1xuICAgICAgICBjb25zdCBlbmRfdGltZSA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbjtcbiAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCBmYWxzZSwgJ3N0YXJ0JykpO1xuICAgICAgICBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gZW5kX3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGljaygwLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgZmFsc2UsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEtLWdyb3VwLnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2lsbCByZXN1bHQgaW4gYGVuZCgpYCBiZWluZyBjYWxsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSBkb24ndCBuZWVkIHRvIGNsZWFuIHVwIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bl9hbGwoZ3JvdXAuYyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IGVhc2luZygobm93IC0gc3RhcnRfdGltZSkgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRpY2soMSAtIHQsIHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBydW5uaW5nO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgd2FpdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uZmlnID0gY29uZmlnKCk7XG4gICAgICAgICAgICBnbygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGdvKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGVuZChyZXNldCkge1xuICAgICAgICAgICAgaWYgKHJlc2V0ICYmIGNvbmZpZy50aWNrKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLnRpY2soMSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25fbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuICAgICAgICAgICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBjcmVhdGVfYmlkaXJlY3Rpb25hbF90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMsIGludHJvKSB7XG4gICAgbGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcyk7XG4gICAgbGV0IHQgPSBpbnRybyA/IDAgOiAxO1xuICAgIGxldCBydW5uaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgIGxldCBwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgIGxldCBhbmltYXRpb25fbmFtZSA9IG51bGw7XG4gICAgZnVuY3Rpb24gY2xlYXJfYW5pbWF0aW9uKCkge1xuICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluaXQocHJvZ3JhbSwgZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgZCA9IChwcm9ncmFtLmIgLSB0KTtcbiAgICAgICAgZHVyYXRpb24gKj0gTWF0aC5hYnMoZCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhOiB0LFxuICAgICAgICAgICAgYjogcHJvZ3JhbS5iLFxuICAgICAgICAgICAgZCxcbiAgICAgICAgICAgIGR1cmF0aW9uLFxuICAgICAgICAgICAgc3RhcnQ6IHByb2dyYW0uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IHByb2dyYW0uc3RhcnQgKyBkdXJhdGlvbixcbiAgICAgICAgICAgIGdyb3VwOiBwcm9ncmFtLmdyb3VwXG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdvKGIpIHtcbiAgICAgICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgdGljayA9IG5vb3AsIGNzcyB9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcbiAgICAgICAgY29uc3QgcHJvZ3JhbSA9IHtcbiAgICAgICAgICAgIHN0YXJ0OiBub3coKSArIGRlbGF5LFxuICAgICAgICAgICAgYlxuICAgICAgICB9O1xuICAgICAgICBpZiAoIWIpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG4gICAgICAgICAgICBwcm9ncmFtLmdyb3VwID0gb3V0cm9zO1xuICAgICAgICAgICAgb3V0cm9zLnIgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocnVubmluZ19wcm9ncmFtIHx8IHBlbmRpbmdfcHJvZ3JhbSkge1xuICAgICAgICAgICAgcGVuZGluZ19wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIHRoaXMgaXMgYW4gaW50cm8sIGFuZCB0aGVyZSdzIGEgZGVsYXksIHdlIG5lZWQgdG8gZG9cbiAgICAgICAgICAgIC8vIGFuIGluaXRpYWwgdGljayBhbmQvb3IgYXBwbHkgQ1NTIGFuaW1hdGlvbiBpbW1lZGlhdGVseVxuICAgICAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgdCwgYiwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYilcbiAgICAgICAgICAgICAgICB0aWNrKDAsIDEpO1xuICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gaW5pdChwcm9ncmFtLCBkdXJhdGlvbik7XG4gICAgICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIGIsICdzdGFydCcpKTtcbiAgICAgICAgICAgIGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGVuZGluZ19wcm9ncmFtICYmIG5vdyA+IHBlbmRpbmdfcHJvZ3JhbS5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBpbml0KHBlbmRpbmdfcHJvZ3JhbSwgZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCBydW5uaW5nX3Byb2dyYW0uYiwgJ3N0YXJ0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCB0LCBydW5uaW5nX3Byb2dyYW0uYiwgcnVubmluZ19wcm9ncmFtLmR1cmF0aW9uLCAwLCBlYXNpbmcsIGNvbmZpZy5jc3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChydW5uaW5nX3Byb2dyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBydW5uaW5nX3Byb2dyYW0uZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrKHQgPSBydW5uaW5nX3Byb2dyYW0uYiwgMSAtIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgcnVubmluZ19wcm9ncmFtLmIsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGVuZGluZ19wcm9ncmFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UncmUgZG9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChydW5uaW5nX3Byb2dyYW0uYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnRybyDigJQgd2UgY2FuIHRpZHkgdXAgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvdXRybyDigJQgbmVlZHMgdG8gYmUgY29vcmRpbmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEtLXJ1bm5pbmdfcHJvZ3JhbS5ncm91cC5yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVuX2FsbChydW5uaW5nX3Byb2dyYW0uZ3JvdXAuYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChub3cgPj0gcnVubmluZ19wcm9ncmFtLnN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gbm93IC0gcnVubmluZ19wcm9ncmFtLnN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IHJ1bm5pbmdfcHJvZ3JhbS5hICsgcnVubmluZ19wcm9ncmFtLmQgKiBlYXNpbmcocCAvIHJ1bm5pbmdfcHJvZ3JhbS5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrKHQsIDEgLSB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gISEocnVubmluZ19wcm9ncmFtIHx8IHBlbmRpbmdfcHJvZ3JhbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBydW4oYikge1xuICAgICAgICAgICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICB3YWl0KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnID0gY29uZmlnKCk7XG4gICAgICAgICAgICAgICAgICAgIGdvKGIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ28oYik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVuZCgpIHtcbiAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gcGVuZGluZ19wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGhhbmRsZV9wcm9taXNlKHByb21pc2UsIGluZm8pIHtcbiAgICBjb25zdCB0b2tlbiA9IGluZm8udG9rZW4gPSB7fTtcbiAgICBmdW5jdGlvbiB1cGRhdGUodHlwZSwgaW5kZXgsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGluZm8udG9rZW4gIT09IHRva2VuKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpbmZvLnJlc29sdmVkID0gdmFsdWU7XG4gICAgICAgIGxldCBjaGlsZF9jdHggPSBpbmZvLmN0eDtcbiAgICAgICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjaGlsZF9jdHggPSBjaGlsZF9jdHguc2xpY2UoKTtcbiAgICAgICAgICAgIGNoaWxkX2N0eFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYmxvY2sgPSB0eXBlICYmIChpbmZvLmN1cnJlbnQgPSB0eXBlKShjaGlsZF9jdHgpO1xuICAgICAgICBsZXQgbmVlZHNfZmx1c2ggPSBmYWxzZTtcbiAgICAgICAgaWYgKGluZm8uYmxvY2spIHtcbiAgICAgICAgICAgIGlmIChpbmZvLmJsb2Nrcykge1xuICAgICAgICAgICAgICAgIGluZm8uYmxvY2tzLmZvckVhY2goKGJsb2NrLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpICE9PSBpbmRleCAmJiBibG9jaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBfb3V0cm9zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uX291dChibG9jaywgMSwgMSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmZvLmJsb2Nrc1tpXSA9PT0gYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mby5ibG9ja3NbaV0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tfb3V0cm9zKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGluZm8uYmxvY2suZCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJsb2NrLmMoKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb25faW4oYmxvY2ssIDEpO1xuICAgICAgICAgICAgYmxvY2subShpbmZvLm1vdW50KCksIGluZm8uYW5jaG9yKTtcbiAgICAgICAgICAgIG5lZWRzX2ZsdXNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpbmZvLmJsb2NrID0gYmxvY2s7XG4gICAgICAgIGlmIChpbmZvLmJsb2NrcylcbiAgICAgICAgICAgIGluZm8uYmxvY2tzW2luZGV4XSA9IGJsb2NrO1xuICAgICAgICBpZiAobmVlZHNfZmx1c2gpIHtcbiAgICAgICAgICAgIGZsdXNoKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzX3Byb21pc2UocHJvbWlzZSkpIHtcbiAgICAgICAgY29uc3QgY3VycmVudF9jb21wb25lbnQgPSBnZXRfY3VycmVudF9jb21wb25lbnQoKTtcbiAgICAgICAgcHJvbWlzZS50aGVuKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjdXJyZW50X2NvbXBvbmVudCk7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby50aGVuLCAxLCBpbmZvLnZhbHVlLCB2YWx1ZSk7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQobnVsbCk7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjdXJyZW50X2NvbXBvbmVudCk7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby5jYXRjaCwgMiwgaW5mby5lcnJvciwgZXJyb3IpO1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KG51bGwpO1xuICAgICAgICAgICAgaWYgKCFpbmZvLmhhc0NhdGNoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBpZiB3ZSBwcmV2aW91c2x5IGhhZCBhIHRoZW4vY2F0Y2ggYmxvY2ssIGRlc3Ryb3kgaXRcbiAgICAgICAgaWYgKGluZm8uY3VycmVudCAhPT0gaW5mby5wZW5kaW5nKSB7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby5wZW5kaW5nLCAwKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoaW5mby5jdXJyZW50ICE9PSBpbmZvLnRoZW4pIHtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLnRoZW4sIDEsIGluZm8udmFsdWUsIHByb21pc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5mby5yZXNvbHZlZCA9IHByb21pc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gdXBkYXRlX2F3YWl0X2Jsb2NrX2JyYW5jaChpbmZvLCBjdHgsIGRpcnR5KSB7XG4gICAgY29uc3QgY2hpbGRfY3R4ID0gY3R4LnNsaWNlKCk7XG4gICAgY29uc3QgeyByZXNvbHZlZCB9ID0gaW5mbztcbiAgICBpZiAoaW5mby5jdXJyZW50ID09PSBpbmZvLnRoZW4pIHtcbiAgICAgICAgY2hpbGRfY3R4W2luZm8udmFsdWVdID0gcmVzb2x2ZWQ7XG4gICAgfVxuICAgIGlmIChpbmZvLmN1cnJlbnQgPT09IGluZm8uY2F0Y2gpIHtcbiAgICAgICAgY2hpbGRfY3R4W2luZm8uZXJyb3JdID0gcmVzb2x2ZWQ7XG4gICAgfVxuICAgIGluZm8uYmxvY2sucChjaGlsZF9jdHgsIGRpcnR5KTtcbn1cblxuY29uc3QgZ2xvYmFscyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgID8gd2luZG93XG4gICAgOiB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyBnbG9iYWxUaGlzXG4gICAgICAgIDogZ2xvYmFsKTtcblxuZnVuY3Rpb24gZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgYmxvY2suZCgxKTtcbiAgICBsb29rdXAuZGVsZXRlKGJsb2NrLmtleSk7XG59XG5mdW5jdGlvbiBvdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgdHJhbnNpdGlvbl9vdXQoYmxvY2ssIDEsIDEsICgpID0+IHtcbiAgICAgICAgbG9va3VwLmRlbGV0ZShibG9jay5rZXkpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZml4X2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICBibG9jay5mKCk7XG4gICAgZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKTtcbn1cbmZ1bmN0aW9uIGZpeF9hbmRfb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIGJsb2NrLmYoKTtcbiAgICBvdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZV9rZXllZF9lYWNoKG9sZF9ibG9ja3MsIGRpcnR5LCBnZXRfa2V5LCBkeW5hbWljLCBjdHgsIGxpc3QsIGxvb2t1cCwgbm9kZSwgZGVzdHJveSwgY3JlYXRlX2VhY2hfYmxvY2ssIG5leHQsIGdldF9jb250ZXh0KSB7XG4gICAgbGV0IG8gPSBvbGRfYmxvY2tzLmxlbmd0aDtcbiAgICBsZXQgbiA9IGxpc3QubGVuZ3RoO1xuICAgIGxldCBpID0gbztcbiAgICBjb25zdCBvbGRfaW5kZXhlcyA9IHt9O1xuICAgIHdoaWxlIChpLS0pXG4gICAgICAgIG9sZF9pbmRleGVzW29sZF9ibG9ja3NbaV0ua2V5XSA9IGk7XG4gICAgY29uc3QgbmV3X2Jsb2NrcyA9IFtdO1xuICAgIGNvbnN0IG5ld19sb29rdXAgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgZGVsdGFzID0gbmV3IE1hcCgpO1xuICAgIGkgPSBuO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgY29uc3QgY2hpbGRfY3R4ID0gZ2V0X2NvbnRleHQoY3R4LCBsaXN0LCBpKTtcbiAgICAgICAgY29uc3Qga2V5ID0gZ2V0X2tleShjaGlsZF9jdHgpO1xuICAgICAgICBsZXQgYmxvY2sgPSBsb29rdXAuZ2V0KGtleSk7XG4gICAgICAgIGlmICghYmxvY2spIHtcbiAgICAgICAgICAgIGJsb2NrID0gY3JlYXRlX2VhY2hfYmxvY2soa2V5LCBjaGlsZF9jdHgpO1xuICAgICAgICAgICAgYmxvY2suYygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGR5bmFtaWMpIHtcbiAgICAgICAgICAgIGJsb2NrLnAoY2hpbGRfY3R4LCBkaXJ0eSk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3X2xvb2t1cC5zZXQoa2V5LCBuZXdfYmxvY2tzW2ldID0gYmxvY2spO1xuICAgICAgICBpZiAoa2V5IGluIG9sZF9pbmRleGVzKVxuICAgICAgICAgICAgZGVsdGFzLnNldChrZXksIE1hdGguYWJzKGkgLSBvbGRfaW5kZXhlc1trZXldKSk7XG4gICAgfVxuICAgIGNvbnN0IHdpbGxfbW92ZSA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBkaWRfbW92ZSA9IG5ldyBTZXQoKTtcbiAgICBmdW5jdGlvbiBpbnNlcnQoYmxvY2spIHtcbiAgICAgICAgdHJhbnNpdGlvbl9pbihibG9jaywgMSk7XG4gICAgICAgIGJsb2NrLm0obm9kZSwgbmV4dCk7XG4gICAgICAgIGxvb2t1cC5zZXQoYmxvY2sua2V5LCBibG9jayk7XG4gICAgICAgIG5leHQgPSBibG9jay5maXJzdDtcbiAgICAgICAgbi0tO1xuICAgIH1cbiAgICB3aGlsZSAobyAmJiBuKSB7XG4gICAgICAgIGNvbnN0IG5ld19ibG9jayA9IG5ld19ibG9ja3NbbiAtIDFdO1xuICAgICAgICBjb25zdCBvbGRfYmxvY2sgPSBvbGRfYmxvY2tzW28gLSAxXTtcbiAgICAgICAgY29uc3QgbmV3X2tleSA9IG5ld19ibG9jay5rZXk7XG4gICAgICAgIGNvbnN0IG9sZF9rZXkgPSBvbGRfYmxvY2sua2V5O1xuICAgICAgICBpZiAobmV3X2Jsb2NrID09PSBvbGRfYmxvY2spIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIG5leHQgPSBuZXdfYmxvY2suZmlyc3Q7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgICAgICBuLS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIW5ld19sb29rdXAuaGFzKG9sZF9rZXkpKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgb2xkIGJsb2NrXG4gICAgICAgICAgICBkZXN0cm95KG9sZF9ibG9jaywgbG9va3VwKTtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghbG9va3VwLmhhcyhuZXdfa2V5KSB8fCB3aWxsX21vdmUuaGFzKG5ld19rZXkpKSB7XG4gICAgICAgICAgICBpbnNlcnQobmV3X2Jsb2NrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaWRfbW92ZS5oYXMob2xkX2tleSkpIHtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkZWx0YXMuZ2V0KG5ld19rZXkpID4gZGVsdGFzLmdldChvbGRfa2V5KSkge1xuICAgICAgICAgICAgZGlkX21vdmUuYWRkKG5ld19rZXkpO1xuICAgICAgICAgICAgaW5zZXJ0KG5ld19ibG9jayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3aWxsX21vdmUuYWRkKG9sZF9rZXkpO1xuICAgICAgICAgICAgby0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIHdoaWxlIChvLS0pIHtcbiAgICAgICAgY29uc3Qgb2xkX2Jsb2NrID0gb2xkX2Jsb2Nrc1tvXTtcbiAgICAgICAgaWYgKCFuZXdfbG9va3VwLmhhcyhvbGRfYmxvY2sua2V5KSlcbiAgICAgICAgICAgIGRlc3Ryb3kob2xkX2Jsb2NrLCBsb29rdXApO1xuICAgIH1cbiAgICB3aGlsZSAobilcbiAgICAgICAgaW5zZXJ0KG5ld19ibG9ja3NbbiAtIDFdKTtcbiAgICByZXR1cm4gbmV3X2Jsb2Nrcztcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX2VhY2hfa2V5cyhjdHgsIGxpc3QsIGdldF9jb250ZXh0LCBnZXRfa2V5KSB7XG4gICAgY29uc3Qga2V5cyA9IG5ldyBTZXQoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qga2V5ID0gZ2V0X2tleShnZXRfY29udGV4dChjdHgsIGxpc3QsIGkpKTtcbiAgICAgICAgaWYgKGtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGhhdmUgZHVwbGljYXRlIGtleXMgaW4gYSBrZXllZCBlYWNoJyk7XG4gICAgICAgIH1cbiAgICAgICAga2V5cy5hZGQoa2V5KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldF9zcHJlYWRfdXBkYXRlKGxldmVscywgdXBkYXRlcykge1xuICAgIGNvbnN0IHVwZGF0ZSA9IHt9O1xuICAgIGNvbnN0IHRvX251bGxfb3V0ID0ge307XG4gICAgY29uc3QgYWNjb3VudGVkX2ZvciA9IHsgJCRzY29wZTogMSB9O1xuICAgIGxldCBpID0gbGV2ZWxzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGNvbnN0IG8gPSBsZXZlbHNbaV07XG4gICAgICAgIGNvbnN0IG4gPSB1cGRhdGVzW2ldO1xuICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbykge1xuICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiBuKSlcbiAgICAgICAgICAgICAgICAgICAgdG9fbnVsbF9vdXRba2V5XSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBuKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhY2NvdW50ZWRfZm9yW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlW2tleV0gPSBuW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRlZF9mb3Jba2V5XSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV2ZWxzW2ldID0gbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG8pIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50ZWRfZm9yW2tleV0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIHRvX251bGxfb3V0KSB7XG4gICAgICAgIGlmICghKGtleSBpbiB1cGRhdGUpKVxuICAgICAgICAgICAgdXBkYXRlW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiB1cGRhdGU7XG59XG5mdW5jdGlvbiBnZXRfc3ByZWFkX29iamVjdChzcHJlYWRfcHJvcHMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHNwcmVhZF9wcm9wcyA9PT0gJ29iamVjdCcgJiYgc3ByZWFkX3Byb3BzICE9PSBudWxsID8gc3ByZWFkX3Byb3BzIDoge307XG59XG5cbi8vIHNvdXJjZTogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW5kaWNlcy5odG1sXG5jb25zdCBib29sZWFuX2F0dHJpYnV0ZXMgPSBuZXcgU2V0KFtcbiAgICAnYWxsb3dmdWxsc2NyZWVuJyxcbiAgICAnYWxsb3dwYXltZW50cmVxdWVzdCcsXG4gICAgJ2FzeW5jJyxcbiAgICAnYXV0b2ZvY3VzJyxcbiAgICAnYXV0b3BsYXknLFxuICAgICdjaGVja2VkJyxcbiAgICAnY29udHJvbHMnLFxuICAgICdkZWZhdWx0JyxcbiAgICAnZGVmZXInLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2Zvcm1ub3ZhbGlkYXRlJyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaXNtYXAnLFxuICAgICdsb29wJyxcbiAgICAnbXVsdGlwbGUnLFxuICAgICdtdXRlZCcsXG4gICAgJ25vbW9kdWxlJyxcbiAgICAnbm92YWxpZGF0ZScsXG4gICAgJ29wZW4nLFxuICAgICdwbGF5c2lubGluZScsXG4gICAgJ3JlYWRvbmx5JyxcbiAgICAncmVxdWlyZWQnLFxuICAgICdyZXZlcnNlZCcsXG4gICAgJ3NlbGVjdGVkJ1xuXSk7XG5cbmNvbnN0IGludmFsaWRfYXR0cmlidXRlX25hbWVfY2hhcmFjdGVyID0gL1tcXHMnXCI+Lz1cXHV7RkREMH0tXFx1e0ZERUZ9XFx1e0ZGRkV9XFx1e0ZGRkZ9XFx1ezFGRkZFfVxcdXsxRkZGRn1cXHV7MkZGRkV9XFx1ezJGRkZGfVxcdXszRkZGRX1cXHV7M0ZGRkZ9XFx1ezRGRkZFfVxcdXs0RkZGRn1cXHV7NUZGRkV9XFx1ezVGRkZGfVxcdXs2RkZGRX1cXHV7NkZGRkZ9XFx1ezdGRkZFfVxcdXs3RkZGRn1cXHV7OEZGRkV9XFx1ezhGRkZGfVxcdXs5RkZGRX1cXHV7OUZGRkZ9XFx1e0FGRkZFfVxcdXtBRkZGRn1cXHV7QkZGRkV9XFx1e0JGRkZGfVxcdXtDRkZGRX1cXHV7Q0ZGRkZ9XFx1e0RGRkZFfVxcdXtERkZGRn1cXHV7RUZGRkV9XFx1e0VGRkZGfVxcdXtGRkZGRX1cXHV7RkZGRkZ9XFx1ezEwRkZGRX1cXHV7MTBGRkZGfV0vdTtcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI2F0dHJpYnV0ZXMtMlxuLy8gaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI25vbmNoYXJhY3RlclxuZnVuY3Rpb24gc3ByZWFkKGFyZ3MsIGF0dHJzX3RvX2FkZCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHt9LCAuLi5hcmdzKTtcbiAgICBpZiAoYXR0cnNfdG9fYWRkKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXNfdG9fYWRkID0gYXR0cnNfdG9fYWRkLmNsYXNzZXM7XG4gICAgICAgIGNvbnN0IHN0eWxlc190b19hZGQgPSBhdHRyc190b19hZGQuc3R5bGVzO1xuICAgICAgICBpZiAoY2xhc3Nlc190b19hZGQpIHtcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzLmNsYXNzID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLmNsYXNzID0gY2xhc3Nlc190b19hZGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLmNsYXNzICs9ICcgJyArIGNsYXNzZXNfdG9fYWRkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzdHlsZXNfdG9fYWRkKSB7XG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlcy5zdHlsZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5zdHlsZSA9IHN0eWxlX29iamVjdF90b19zdHJpbmcoc3R5bGVzX3RvX2FkZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnN0eWxlID0gc3R5bGVfb2JqZWN0X3RvX3N0cmluZyhtZXJnZV9zc3Jfc3R5bGVzKGF0dHJpYnV0ZXMuc3R5bGUsIHN0eWxlc190b19hZGQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgc3RyID0gJyc7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgaWYgKGludmFsaWRfYXR0cmlidXRlX25hbWVfY2hhcmFjdGVyLnRlc3QobmFtZSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXR0cmlidXRlc1tuYW1lXTtcbiAgICAgICAgaWYgKHZhbHVlID09PSB0cnVlKVxuICAgICAgICAgICAgc3RyICs9ICcgJyArIG5hbWU7XG4gICAgICAgIGVsc2UgaWYgKGJvb2xlYW5fYXR0cmlidXRlcy5oYXMobmFtZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlKVxuICAgICAgICAgICAgICAgIHN0ciArPSAnICcgKyBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHN0ciArPSBgICR7bmFtZX09XCIke3ZhbHVlfVwiYDtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzdHI7XG59XG5mdW5jdGlvbiBtZXJnZV9zc3Jfc3R5bGVzKHN0eWxlX2F0dHJpYnV0ZSwgc3R5bGVfZGlyZWN0aXZlKSB7XG4gICAgY29uc3Qgc3R5bGVfb2JqZWN0ID0ge307XG4gICAgZm9yIChjb25zdCBpbmRpdmlkdWFsX3N0eWxlIG9mIHN0eWxlX2F0dHJpYnV0ZS5zcGxpdCgnOycpKSB7XG4gICAgICAgIGNvbnN0IGNvbG9uX2luZGV4ID0gaW5kaXZpZHVhbF9zdHlsZS5pbmRleE9mKCc6Jyk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBpbmRpdmlkdWFsX3N0eWxlLnNsaWNlKDAsIGNvbG9uX2luZGV4KS50cmltKCk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaW5kaXZpZHVhbF9zdHlsZS5zbGljZShjb2xvbl9pbmRleCArIDEpLnRyaW0oKTtcbiAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIHN0eWxlX29iamVjdFtuYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gc3R5bGVfZGlyZWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGVfZGlyZWN0aXZlW25hbWVdO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHN0eWxlX29iamVjdFtuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHN0eWxlX29iamVjdFtuYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3R5bGVfb2JqZWN0O1xufVxuY29uc3QgZXNjYXBlZCA9IHtcbiAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICBcIidcIjogJyYjMzk7JyxcbiAgICAnJic6ICcmYW1wOycsXG4gICAgJzwnOiAnJmx0OycsXG4gICAgJz4nOiAnJmd0Oydcbn07XG5mdW5jdGlvbiBlc2NhcGUoaHRtbCkge1xuICAgIHJldHVybiBTdHJpbmcoaHRtbCkucmVwbGFjZSgvW1wiJyY8Pl0vZywgbWF0Y2ggPT4gZXNjYXBlZFttYXRjaF0pO1xufVxuZnVuY3Rpb24gZXNjYXBlX2F0dHJpYnV0ZV92YWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gZXNjYXBlKHZhbHVlKSA6IHZhbHVlO1xufVxuZnVuY3Rpb24gZXNjYXBlX29iamVjdChvYmopIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBlc2NhcGVfYXR0cmlidXRlX3ZhbHVlKG9ialtrZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGVhY2goaXRlbXMsIGZuKSB7XG4gICAgbGV0IHN0ciA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgc3RyICs9IGZuKGl0ZW1zW2ldLCBpKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cbmNvbnN0IG1pc3NpbmdfY29tcG9uZW50ID0ge1xuICAgICQkcmVuZGVyOiAoKSA9PiAnJ1xufTtcbmZ1bmN0aW9uIHZhbGlkYXRlX2NvbXBvbmVudChjb21wb25lbnQsIG5hbWUpIHtcbiAgICBpZiAoIWNvbXBvbmVudCB8fCAhY29tcG9uZW50LiQkcmVuZGVyKSB7XG4gICAgICAgIGlmIChuYW1lID09PSAnc3ZlbHRlOmNvbXBvbmVudCcpXG4gICAgICAgICAgICBuYW1lICs9ICcgdGhpcz17Li4ufSc7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgPCR7bmFtZX0+IGlzIG5vdCBhIHZhbGlkIFNTUiBjb21wb25lbnQuIFlvdSBtYXkgbmVlZCB0byByZXZpZXcgeW91ciBidWlsZCBjb25maWcgdG8gZW5zdXJlIHRoYXQgZGVwZW5kZW5jaWVzIGFyZSBjb21waWxlZCwgcmF0aGVyIHRoYW4gaW1wb3J0ZWQgYXMgcHJlLWNvbXBpbGVkIG1vZHVsZXNgKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGRlYnVnKGZpbGUsIGxpbmUsIGNvbHVtbiwgdmFsdWVzKSB7XG4gICAgY29uc29sZS5sb2coYHtAZGVidWd9ICR7ZmlsZSA/IGZpbGUgKyAnICcgOiAnJ30oJHtsaW5lfToke2NvbHVtbn0pYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIHJldHVybiAnJztcbn1cbmxldCBvbl9kZXN0cm95O1xuZnVuY3Rpb24gY3JlYXRlX3Nzcl9jb21wb25lbnQoZm4pIHtcbiAgICBmdW5jdGlvbiAkJHJlbmRlcihyZXN1bHQsIHByb3BzLCBiaW5kaW5ncywgc2xvdHMsIGNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgcGFyZW50X2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICAgICAgICBjb25zdCAkJCA9IHtcbiAgICAgICAgICAgIG9uX2Rlc3Ryb3ksXG4gICAgICAgICAgICBjb250ZXh0OiBuZXcgTWFwKGNvbnRleHQgfHwgKHBhcmVudF9jb21wb25lbnQgPyBwYXJlbnRfY29tcG9uZW50LiQkLmNvbnRleHQgOiBbXSkpLFxuICAgICAgICAgICAgLy8gdGhlc2Ugd2lsbCBiZSBpbW1lZGlhdGVseSBkaXNjYXJkZWRcbiAgICAgICAgICAgIG9uX21vdW50OiBbXSxcbiAgICAgICAgICAgIGJlZm9yZV91cGRhdGU6IFtdLFxuICAgICAgICAgICAgYWZ0ZXJfdXBkYXRlOiBbXSxcbiAgICAgICAgICAgIGNhbGxiYWNrczogYmxhbmtfb2JqZWN0KClcbiAgICAgICAgfTtcbiAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHsgJCQgfSk7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBmbihyZXN1bHQsIHByb3BzLCBiaW5kaW5ncywgc2xvdHMpO1xuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQocGFyZW50X2NvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXI6IChwcm9wcyA9IHt9LCB7ICQkc2xvdHMgPSB7fSwgY29udGV4dCA9IG5ldyBNYXAoKSB9ID0ge30pID0+IHtcbiAgICAgICAgICAgIG9uX2Rlc3Ryb3kgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHsgdGl0bGU6ICcnLCBoZWFkOiAnJywgY3NzOiBuZXcgU2V0KCkgfTtcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSAkJHJlbmRlcihyZXN1bHQsIHByb3BzLCB7fSwgJCRzbG90cywgY29udGV4dCk7XG4gICAgICAgICAgICBydW5fYWxsKG9uX2Rlc3Ryb3kpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBodG1sLFxuICAgICAgICAgICAgICAgIGNzczoge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBBcnJheS5mcm9tKHJlc3VsdC5jc3MpLm1hcChjc3MgPT4gY3NzLmNvZGUpLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICBtYXA6IG51bGwgLy8gVE9ET1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGVhZDogcmVzdWx0LnRpdGxlICsgcmVzdWx0LmhlYWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgICQkcmVuZGVyXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFkZF9hdHRyaWJ1dGUobmFtZSwgdmFsdWUsIGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCAoYm9vbGVhbiAmJiAhdmFsdWUpKVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgcmV0dXJuIGAgJHtuYW1lfSR7dmFsdWUgPT09IHRydWUgJiYgYm9vbGVhbl9hdHRyaWJ1dGVzLmhhcyhuYW1lKSA/ICcnIDogYD0ke3R5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBKU09OLnN0cmluZ2lmeShlc2NhcGUodmFsdWUpKSA6IGBcIiR7dmFsdWV9XCJgfWB9YDtcbn1cbmZ1bmN0aW9uIGFkZF9jbGFzc2VzKGNsYXNzZXMpIHtcbiAgICByZXR1cm4gY2xhc3NlcyA/IGAgY2xhc3M9XCIke2NsYXNzZXN9XCJgIDogJyc7XG59XG5mdW5jdGlvbiBzdHlsZV9vYmplY3RfdG9fc3RyaW5nKHN0eWxlX29iamVjdCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZV9vYmplY3QpXG4gICAgICAgIC5maWx0ZXIoa2V5ID0+IHN0eWxlX29iamVjdFtrZXldKVxuICAgICAgICAubWFwKGtleSA9PiBgJHtrZXl9OiAke3N0eWxlX29iamVjdFtrZXldfTtgKVxuICAgICAgICAuam9pbignICcpO1xufVxuZnVuY3Rpb24gYWRkX3N0eWxlcyhzdHlsZV9vYmplY3QpIHtcbiAgICBjb25zdCBzdHlsZXMgPSBzdHlsZV9vYmplY3RfdG9fc3RyaW5nKHN0eWxlX29iamVjdCk7XG4gICAgcmV0dXJuIHN0eWxlcyA/IGAgc3R5bGU9XCIke3N0eWxlc31cImAgOiAnJztcbn1cblxuZnVuY3Rpb24gYmluZChjb21wb25lbnQsIG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgaW5kZXggPSBjb21wb25lbnQuJCQucHJvcHNbbmFtZV07XG4gICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29tcG9uZW50LiQkLmJvdW5kW2luZGV4XSA9IGNhbGxiYWNrO1xuICAgICAgICBjYWxsYmFjayhjb21wb25lbnQuJCQuY3R4W2luZGV4XSk7XG4gICAgfVxufVxuZnVuY3Rpb24gY3JlYXRlX2NvbXBvbmVudChibG9jaykge1xuICAgIGJsb2NrICYmIGJsb2NrLmMoKTtcbn1cbmZ1bmN0aW9uIGNsYWltX2NvbXBvbmVudChibG9jaywgcGFyZW50X25vZGVzKSB7XG4gICAgYmxvY2sgJiYgYmxvY2subChwYXJlbnRfbm9kZXMpO1xufVxuZnVuY3Rpb24gbW91bnRfY29tcG9uZW50KGNvbXBvbmVudCwgdGFyZ2V0LCBhbmNob3IsIGN1c3RvbUVsZW1lbnQpIHtcbiAgICBjb25zdCB7IGZyYWdtZW50LCBvbl9tb3VudCwgb25fZGVzdHJveSwgYWZ0ZXJfdXBkYXRlIH0gPSBjb21wb25lbnQuJCQ7XG4gICAgZnJhZ21lbnQgJiYgZnJhZ21lbnQubSh0YXJnZXQsIGFuY2hvcik7XG4gICAgaWYgKCFjdXN0b21FbGVtZW50KSB7XG4gICAgICAgIC8vIG9uTW91bnQgaGFwcGVucyBiZWZvcmUgdGhlIGluaXRpYWwgYWZ0ZXJVcGRhdGVcbiAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdfb25fZGVzdHJveSA9IG9uX21vdW50Lm1hcChydW4pLmZpbHRlcihpc19mdW5jdGlvbik7XG4gICAgICAgICAgICBpZiAob25fZGVzdHJveSkge1xuICAgICAgICAgICAgICAgIG9uX2Rlc3Ryb3kucHVzaCguLi5uZXdfb25fZGVzdHJveSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBFZGdlIGNhc2UgLSBjb21wb25lbnQgd2FzIGRlc3Ryb3llZCBpbW1lZGlhdGVseSxcbiAgICAgICAgICAgICAgICAvLyBtb3N0IGxpa2VseSBhcyBhIHJlc3VsdCBvZiBhIGJpbmRpbmcgaW5pdGlhbGlzaW5nXG4gICAgICAgICAgICAgICAgcnVuX2FsbChuZXdfb25fZGVzdHJveSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb21wb25lbnQuJCQub25fbW91bnQgPSBbXTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFmdGVyX3VwZGF0ZS5mb3JFYWNoKGFkZF9yZW5kZXJfY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gZGVzdHJveV9jb21wb25lbnQoY29tcG9uZW50LCBkZXRhY2hpbmcpIHtcbiAgICBjb25zdCAkJCA9IGNvbXBvbmVudC4kJDtcbiAgICBpZiAoJCQuZnJhZ21lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcnVuX2FsbCgkJC5vbl9kZXN0cm95KTtcbiAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQuZChkZXRhY2hpbmcpO1xuICAgICAgICAvLyBUT0RPIG51bGwgb3V0IG90aGVyIHJlZnMsIGluY2x1ZGluZyBjb21wb25lbnQuJCQgKGJ1dCBuZWVkIHRvXG4gICAgICAgIC8vIHByZXNlcnZlIGZpbmFsIHN0YXRlPylcbiAgICAgICAgJCQub25fZGVzdHJveSA9ICQkLmZyYWdtZW50ID0gbnVsbDtcbiAgICAgICAgJCQuY3R4ID0gW107XG4gICAgfVxufVxuZnVuY3Rpb24gbWFrZV9kaXJ0eShjb21wb25lbnQsIGkpIHtcbiAgICBpZiAoY29tcG9uZW50LiQkLmRpcnR5WzBdID09PSAtMSkge1xuICAgICAgICBkaXJ0eV9jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgc2NoZWR1bGVfdXBkYXRlKCk7XG4gICAgICAgIGNvbXBvbmVudC4kJC5kaXJ0eS5maWxsKDApO1xuICAgIH1cbiAgICBjb21wb25lbnQuJCQuZGlydHlbKGkgLyAzMSkgfCAwXSB8PSAoMSA8PCAoaSAlIDMxKSk7XG59XG5mdW5jdGlvbiBpbml0KGNvbXBvbmVudCwgb3B0aW9ucywgaW5zdGFuY2UsIGNyZWF0ZV9mcmFnbWVudCwgbm90X2VxdWFsLCBwcm9wcywgYXBwZW5kX3N0eWxlcywgZGlydHkgPSBbLTFdKSB7XG4gICAgY29uc3QgcGFyZW50X2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpO1xuICAgIGNvbnN0ICQkID0gY29tcG9uZW50LiQkID0ge1xuICAgICAgICBmcmFnbWVudDogbnVsbCxcbiAgICAgICAgY3R4OiBudWxsLFxuICAgICAgICAvLyBzdGF0ZVxuICAgICAgICBwcm9wcyxcbiAgICAgICAgdXBkYXRlOiBub29wLFxuICAgICAgICBub3RfZXF1YWwsXG4gICAgICAgIGJvdW5kOiBibGFua19vYmplY3QoKSxcbiAgICAgICAgLy8gbGlmZWN5Y2xlXG4gICAgICAgIG9uX21vdW50OiBbXSxcbiAgICAgICAgb25fZGVzdHJveTogW10sXG4gICAgICAgIG9uX2Rpc2Nvbm5lY3Q6IFtdLFxuICAgICAgICBiZWZvcmVfdXBkYXRlOiBbXSxcbiAgICAgICAgYWZ0ZXJfdXBkYXRlOiBbXSxcbiAgICAgICAgY29udGV4dDogbmV3IE1hcChvcHRpb25zLmNvbnRleHQgfHwgKHBhcmVudF9jb21wb25lbnQgPyBwYXJlbnRfY29tcG9uZW50LiQkLmNvbnRleHQgOiBbXSkpLFxuICAgICAgICAvLyBldmVyeXRoaW5nIGVsc2VcbiAgICAgICAgY2FsbGJhY2tzOiBibGFua19vYmplY3QoKSxcbiAgICAgICAgZGlydHksXG4gICAgICAgIHNraXBfYm91bmQ6IGZhbHNlLFxuICAgICAgICByb290OiBvcHRpb25zLnRhcmdldCB8fCBwYXJlbnRfY29tcG9uZW50LiQkLnJvb3RcbiAgICB9O1xuICAgIGFwcGVuZF9zdHlsZXMgJiYgYXBwZW5kX3N0eWxlcygkJC5yb290KTtcbiAgICBsZXQgcmVhZHkgPSBmYWxzZTtcbiAgICAkJC5jdHggPSBpbnN0YW5jZVxuICAgICAgICA/IGluc3RhbmNlKGNvbXBvbmVudCwgb3B0aW9ucy5wcm9wcyB8fCB7fSwgKGksIHJldCwgLi4ucmVzdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZXN0Lmxlbmd0aCA/IHJlc3RbMF0gOiByZXQ7XG4gICAgICAgICAgICBpZiAoJCQuY3R4ICYmIG5vdF9lcXVhbCgkJC5jdHhbaV0sICQkLmN0eFtpXSA9IHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghJCQuc2tpcF9ib3VuZCAmJiAkJC5ib3VuZFtpXSlcbiAgICAgICAgICAgICAgICAgICAgJCQuYm91bmRbaV0odmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChyZWFkeSlcbiAgICAgICAgICAgICAgICAgICAgbWFrZV9kaXJ0eShjb21wb25lbnQsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSlcbiAgICAgICAgOiBbXTtcbiAgICAkJC51cGRhdGUoKTtcbiAgICByZWFkeSA9IHRydWU7XG4gICAgcnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTtcbiAgICAvLyBgZmFsc2VgIGFzIGEgc3BlY2lhbCBjYXNlIG9mIG5vIERPTSBjb21wb25lbnRcbiAgICAkJC5mcmFnbWVudCA9IGNyZWF0ZV9mcmFnbWVudCA/IGNyZWF0ZV9mcmFnbWVudCgkJC5jdHgpIDogZmFsc2U7XG4gICAgaWYgKG9wdGlvbnMudGFyZ2V0KSB7XG4gICAgICAgIGlmIChvcHRpb25zLmh5ZHJhdGUpIHtcbiAgICAgICAgICAgIHN0YXJ0X2h5ZHJhdGluZygpO1xuICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBjaGlsZHJlbihvcHRpb25zLnRhcmdldCk7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQubChub2Rlcyk7XG4gICAgICAgICAgICBub2Rlcy5mb3JFYWNoKGRldGFjaCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQuYygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmludHJvKVxuICAgICAgICAgICAgdHJhbnNpdGlvbl9pbihjb21wb25lbnQuJCQuZnJhZ21lbnQpO1xuICAgICAgICBtb3VudF9jb21wb25lbnQoY29tcG9uZW50LCBvcHRpb25zLnRhcmdldCwgb3B0aW9ucy5hbmNob3IsIG9wdGlvbnMuY3VzdG9tRWxlbWVudCk7XG4gICAgICAgIGVuZF9oeWRyYXRpbmcoKTtcbiAgICAgICAgZmx1c2goKTtcbiAgICB9XG4gICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHBhcmVudF9jb21wb25lbnQpO1xufVxubGV0IFN2ZWx0ZUVsZW1lbnQ7XG5pZiAodHlwZW9mIEhUTUxFbGVtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgU3ZlbHRlRWxlbWVudCA9IGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgb25fbW91bnQgfSA9IHRoaXMuJCQ7XG4gICAgICAgICAgICB0aGlzLiQkLm9uX2Rpc2Nvbm5lY3QgPSBvbl9tb3VudC5tYXAocnVuKS5maWx0ZXIoaXNfZnVuY3Rpb24pO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBpbXByb3ZlIHR5cGluZ3NcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuJCQuc2xvdHRlZCkge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLiQkLnNsb3R0ZWRba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHIsIF9vbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXNbYXR0cl0gPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICAgIHJ1bl9hbGwodGhpcy4kJC5vbl9kaXNjb25uZWN0KTtcbiAgICAgICAgfVxuICAgICAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgICAgIGRlc3Ryb3lfY29tcG9uZW50KHRoaXMsIDEpO1xuICAgICAgICAgICAgdGhpcy4kZGVzdHJveSA9IG5vb3A7XG4gICAgICAgIH1cbiAgICAgICAgJG9uKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAvLyBUT0RPIHNob3VsZCB0aGlzIGRlbGVnYXRlIHRvIGFkZEV2ZW50TGlzdGVuZXI/XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFja3MgPSAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gfHwgKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdID0gW10pKTtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjYWxsYmFja3MuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgICRzZXQoJCRwcm9wcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuJCRzZXQgJiYgIWlzX2VtcHR5KCQkcHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kJC5za2lwX2JvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiQkc2V0KCQkcHJvcHMpO1xuICAgICAgICAgICAgICAgIHRoaXMuJCQuc2tpcF9ib3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgU3ZlbHRlIGNvbXBvbmVudHMuIFVzZWQgd2hlbiBkZXY9ZmFsc2UuXG4gKi9cbmNsYXNzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIGRlc3Ryb3lfY29tcG9uZW50KHRoaXMsIDEpO1xuICAgICAgICB0aGlzLiRkZXN0cm95ID0gbm9vcDtcbiAgICB9XG4gICAgJG9uKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSB8fCAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gPSBbXSkpO1xuICAgICAgICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGNhbGxiYWNrcy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgICRzZXQoJCRwcm9wcykge1xuICAgICAgICBpZiAodGhpcy4kJHNldCAmJiAhaXNfZW1wdHkoJCRwcm9wcykpIHtcbiAgICAgICAgICAgIHRoaXMuJCQuc2tpcF9ib3VuZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLiQkc2V0KCQkcHJvcHMpO1xuICAgICAgICAgICAgdGhpcy4kJC5za2lwX2JvdW5kID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoX2Rldih0eXBlLCBkZXRhaWwpIHtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGN1c3RvbV9ldmVudCh0eXBlLCBPYmplY3QuYXNzaWduKHsgdmVyc2lvbjogJzMuNDYuNCcgfSwgZGV0YWlsKSwgdHJ1ZSkpO1xufVxuZnVuY3Rpb24gYXBwZW5kX2Rldih0YXJnZXQsIG5vZGUpIHtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTUluc2VydCcsIHsgdGFyZ2V0LCBub2RlIH0pO1xuICAgIGFwcGVuZCh0YXJnZXQsIG5vZGUpO1xufVxuZnVuY3Rpb24gYXBwZW5kX2h5ZHJhdGlvbl9kZXYodGFyZ2V0LCBub2RlKSB7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01JbnNlcnQnLCB7IHRhcmdldCwgbm9kZSB9KTtcbiAgICBhcHBlbmRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSk7XG59XG5mdW5jdGlvbiBpbnNlcnRfZGV2KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01JbnNlcnQnLCB7IHRhcmdldCwgbm9kZSwgYW5jaG9yIH0pO1xuICAgIGluc2VydCh0YXJnZXQsIG5vZGUsIGFuY2hvcik7XG59XG5mdW5jdGlvbiBpbnNlcnRfaHlkcmF0aW9uX2Rldih0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NSW5zZXJ0JywgeyB0YXJnZXQsIG5vZGUsIGFuY2hvciB9KTtcbiAgICBpbnNlcnRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSwgYW5jaG9yKTtcbn1cbmZ1bmN0aW9uIGRldGFjaF9kZXYobm9kZSkge1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NUmVtb3ZlJywgeyBub2RlIH0pO1xuICAgIGRldGFjaChub2RlKTtcbn1cbmZ1bmN0aW9uIGRldGFjaF9iZXR3ZWVuX2RldihiZWZvcmUsIGFmdGVyKSB7XG4gICAgd2hpbGUgKGJlZm9yZS5uZXh0U2libGluZyAmJiBiZWZvcmUubmV4dFNpYmxpbmcgIT09IGFmdGVyKSB7XG4gICAgICAgIGRldGFjaF9kZXYoYmVmb3JlLm5leHRTaWJsaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZXRhY2hfYmVmb3JlX2RldihhZnRlcikge1xuICAgIHdoaWxlIChhZnRlci5wcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgICAgZGV0YWNoX2RldihhZnRlci5wcmV2aW91c1NpYmxpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRldGFjaF9hZnRlcl9kZXYoYmVmb3JlKSB7XG4gICAgd2hpbGUgKGJlZm9yZS5uZXh0U2libGluZykge1xuICAgICAgICBkZXRhY2hfZGV2KGJlZm9yZS5uZXh0U2libGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gbGlzdGVuX2Rldihub2RlLCBldmVudCwgaGFuZGxlciwgb3B0aW9ucywgaGFzX3ByZXZlbnRfZGVmYXVsdCwgaGFzX3N0b3BfcHJvcGFnYXRpb24pIHtcbiAgICBjb25zdCBtb2RpZmllcnMgPSBvcHRpb25zID09PSB0cnVlID8gWydjYXB0dXJlJ10gOiBvcHRpb25zID8gQXJyYXkuZnJvbShPYmplY3Qua2V5cyhvcHRpb25zKSkgOiBbXTtcbiAgICBpZiAoaGFzX3ByZXZlbnRfZGVmYXVsdClcbiAgICAgICAgbW9kaWZpZXJzLnB1c2goJ3ByZXZlbnREZWZhdWx0Jyk7XG4gICAgaWYgKGhhc19zdG9wX3Byb3BhZ2F0aW9uKVxuICAgICAgICBtb2RpZmllcnMucHVzaCgnc3RvcFByb3BhZ2F0aW9uJyk7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01BZGRFdmVudExpc3RlbmVyJywgeyBub2RlLCBldmVudCwgaGFuZGxlciwgbW9kaWZpZXJzIH0pO1xuICAgIGNvbnN0IGRpc3Bvc2UgPSBsaXN0ZW4obm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NUmVtb3ZlRXZlbnRMaXN0ZW5lcicsIHsgbm9kZSwgZXZlbnQsIGhhbmRsZXIsIG1vZGlmaWVycyB9KTtcbiAgICAgICAgZGlzcG9zZSgpO1xuICAgIH07XG59XG5mdW5jdGlvbiBhdHRyX2Rldihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgYXR0cihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICBpZiAodmFsdWUgPT0gbnVsbClcbiAgICAgICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01SZW1vdmVBdHRyaWJ1dGUnLCB7IG5vZGUsIGF0dHJpYnV0ZSB9KTtcbiAgICBlbHNlXG4gICAgICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NU2V0QXR0cmlidXRlJywgeyBub2RlLCBhdHRyaWJ1dGUsIHZhbHVlIH0pO1xufVxuZnVuY3Rpb24gcHJvcF9kZXYobm9kZSwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgbm9kZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVNldFByb3BlcnR5JywgeyBub2RlLCBwcm9wZXJ0eSwgdmFsdWUgfSk7XG59XG5mdW5jdGlvbiBkYXRhc2V0X2Rldihub2RlLCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBub2RlLmRhdGFzZXRbcHJvcGVydHldID0gdmFsdWU7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01TZXREYXRhc2V0JywgeyBub2RlLCBwcm9wZXJ0eSwgdmFsdWUgfSk7XG59XG5mdW5jdGlvbiBzZXRfZGF0YV9kZXYodGV4dCwgZGF0YSkge1xuICAgIGRhdGEgPSAnJyArIGRhdGE7XG4gICAgaWYgKHRleHQud2hvbGVUZXh0ID09PSBkYXRhKVxuICAgICAgICByZXR1cm47XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01TZXREYXRhJywgeyBub2RlOiB0ZXh0LCBkYXRhIH0pO1xuICAgIHRleHQuZGF0YSA9IGRhdGE7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9lYWNoX2FyZ3VtZW50KGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnc3RyaW5nJyAmJiAhKGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiBhcmcpKSB7XG4gICAgICAgIGxldCBtc2cgPSAneyNlYWNofSBvbmx5IGl0ZXJhdGVzIG92ZXIgYXJyYXktbGlrZSBvYmplY3RzLic7XG4gICAgICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIGFyZyAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gYXJnKSB7XG4gICAgICAgICAgICBtc2cgKz0gJyBZb3UgY2FuIHVzZSBhIHNwcmVhZCB0byBjb252ZXJ0IHRoaXMgaXRlcmFibGUgaW50byBhbiBhcnJheS4nO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX3Nsb3RzKG5hbWUsIHNsb3QsIGtleXMpIHtcbiAgICBmb3IgKGNvbnN0IHNsb3Rfa2V5IG9mIE9iamVjdC5rZXlzKHNsb3QpKSB7XG4gICAgICAgIGlmICghfmtleXMuaW5kZXhPZihzbG90X2tleSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgPCR7bmFtZX0+IHJlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgc2xvdCBcIiR7c2xvdF9rZXl9XCIuYCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIFN2ZWx0ZSBjb21wb25lbnRzIHdpdGggc29tZSBtaW5vciBkZXYtZW5oYW5jZW1lbnRzLiBVc2VkIHdoZW4gZGV2PXRydWUuXG4gKi9cbmNsYXNzIFN2ZWx0ZUNvbXBvbmVudERldiBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBpZiAoIW9wdGlvbnMgfHwgKCFvcHRpb25zLnRhcmdldCAmJiAhb3B0aW9ucy4kJGlubGluZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIid0YXJnZXQnIGlzIGEgcmVxdWlyZWQgb3B0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgICRkZXN0cm95KCkge1xuICAgICAgICBzdXBlci4kZGVzdHJveSgpO1xuICAgICAgICB0aGlzLiRkZXN0cm95ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdDb21wb25lbnQgd2FzIGFscmVhZHkgZGVzdHJveWVkJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICB9O1xuICAgIH1cbiAgICAkY2FwdHVyZV9zdGF0ZSgpIHsgfVxuICAgICRpbmplY3Rfc3RhdGUoKSB7IH1cbn1cbi8qKlxuICogQmFzZSBjbGFzcyB0byBjcmVhdGUgc3Ryb25nbHkgdHlwZWQgU3ZlbHRlIGNvbXBvbmVudHMuXG4gKiBUaGlzIG9ubHkgZXhpc3RzIGZvciB0eXBpbmcgcHVycG9zZXMgYW5kIHNob3VsZCBiZSB1c2VkIGluIGAuZC50c2AgZmlsZXMuXG4gKlxuICogIyMjIEV4YW1wbGU6XG4gKlxuICogWW91IGhhdmUgY29tcG9uZW50IGxpYnJhcnkgb24gbnBtIGNhbGxlZCBgY29tcG9uZW50LWxpYnJhcnlgLCBmcm9tIHdoaWNoXG4gKiB5b3UgZXhwb3J0IGEgY29tcG9uZW50IGNhbGxlZCBgTXlDb21wb25lbnRgLiBGb3IgU3ZlbHRlK1R5cGVTY3JpcHQgdXNlcnMsXG4gKiB5b3Ugd2FudCB0byBwcm92aWRlIHR5cGluZ3MuIFRoZXJlZm9yZSB5b3UgY3JlYXRlIGEgYGluZGV4LmQudHNgOlxuICogYGBgdHNcbiAqIGltcG9ydCB7IFN2ZWx0ZUNvbXBvbmVudFR5cGVkIH0gZnJvbSBcInN2ZWx0ZVwiO1xuICogZXhwb3J0IGNsYXNzIE15Q29tcG9uZW50IGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50VHlwZWQ8e2Zvbzogc3RyaW5nfT4ge31cbiAqIGBgYFxuICogVHlwaW5nIHRoaXMgbWFrZXMgaXQgcG9zc2libGUgZm9yIElERXMgbGlrZSBWUyBDb2RlIHdpdGggdGhlIFN2ZWx0ZSBleHRlbnNpb25cbiAqIHRvIHByb3ZpZGUgaW50ZWxsaXNlbnNlIGFuZCB0byB1c2UgdGhlIGNvbXBvbmVudCBsaWtlIHRoaXMgaW4gYSBTdmVsdGUgZmlsZVxuICogd2l0aCBUeXBlU2NyaXB0OlxuICogYGBgc3ZlbHRlXG4gKiA8c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICogXHRpbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gXCJjb21wb25lbnQtbGlicmFyeVwiO1xuICogPC9zY3JpcHQ+XG4gKiA8TXlDb21wb25lbnQgZm9vPXsnYmFyJ30gLz5cbiAqIGBgYFxuICpcbiAqICMjIyMgV2h5IG5vdCBtYWtlIHRoaXMgcGFydCBvZiBgU3ZlbHRlQ29tcG9uZW50KERldilgP1xuICogQmVjYXVzZVxuICogYGBgdHNcbiAqIGNsYXNzIEFTdWJjbGFzc09mU3ZlbHRlQ29tcG9uZW50IGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50PHtmb286IHN0cmluZ30+IHt9XG4gKiBjb25zdCBjb21wb25lbnQ6IHR5cGVvZiBTdmVsdGVDb21wb25lbnQgPSBBU3ViY2xhc3NPZlN2ZWx0ZUNvbXBvbmVudDtcbiAqIGBgYFxuICogd2lsbCB0aHJvdyBhIHR5cGUgZXJyb3IsIHNvIHdlIG5lZWQgdG8gc2VwYXJhdGUgdGhlIG1vcmUgc3RyaWN0bHkgdHlwZWQgY2xhc3MuXG4gKi9cbmNsYXNzIFN2ZWx0ZUNvbXBvbmVudFR5cGVkIGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50RGV2IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGxvb3BfZ3VhcmQodGltZW91dCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHN0YXJ0ID4gdGltZW91dCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmZpbml0ZSBsb29wIGRldGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgeyBIdG1sVGFnLCBIdG1sVGFnSHlkcmF0aW9uLCBTdmVsdGVDb21wb25lbnQsIFN2ZWx0ZUNvbXBvbmVudERldiwgU3ZlbHRlQ29tcG9uZW50VHlwZWQsIFN2ZWx0ZUVsZW1lbnQsIGFjdGlvbl9kZXN0cm95ZXIsIGFkZF9hdHRyaWJ1dGUsIGFkZF9jbGFzc2VzLCBhZGRfZmx1c2hfY2FsbGJhY2ssIGFkZF9sb2NhdGlvbiwgYWRkX3JlbmRlcl9jYWxsYmFjaywgYWRkX3Jlc2l6ZV9saXN0ZW5lciwgYWRkX3N0eWxlcywgYWRkX3RyYW5zZm9ybSwgYWZ0ZXJVcGRhdGUsIGFwcGVuZCwgYXBwZW5kX2RldiwgYXBwZW5kX2VtcHR5X3N0eWxlc2hlZXQsIGFwcGVuZF9oeWRyYXRpb24sIGFwcGVuZF9oeWRyYXRpb25fZGV2LCBhcHBlbmRfc3R5bGVzLCBhc3NpZ24sIGF0dHIsIGF0dHJfZGV2LCBhdHRyaWJ1dGVfdG9fb2JqZWN0LCBiZWZvcmVVcGRhdGUsIGJpbmQsIGJpbmRpbmdfY2FsbGJhY2tzLCBibGFua19vYmplY3QsIGJ1YmJsZSwgY2hlY2tfb3V0cm9zLCBjaGlsZHJlbiwgY2xhaW1fY29tcG9uZW50LCBjbGFpbV9lbGVtZW50LCBjbGFpbV9odG1sX3RhZywgY2xhaW1fc3BhY2UsIGNsYWltX3N2Z19lbGVtZW50LCBjbGFpbV90ZXh0LCBjbGVhcl9sb29wcywgY29tcG9uZW50X3N1YnNjcmliZSwgY29tcHV0ZV9yZXN0X3Byb3BzLCBjb21wdXRlX3Nsb3RzLCBjcmVhdGVFdmVudERpc3BhdGNoZXIsIGNyZWF0ZV9hbmltYXRpb24sIGNyZWF0ZV9iaWRpcmVjdGlvbmFsX3RyYW5zaXRpb24sIGNyZWF0ZV9jb21wb25lbnQsIGNyZWF0ZV9pbl90cmFuc2l0aW9uLCBjcmVhdGVfb3V0X3RyYW5zaXRpb24sIGNyZWF0ZV9zbG90LCBjcmVhdGVfc3NyX2NvbXBvbmVudCwgY3VycmVudF9jb21wb25lbnQsIGN1c3RvbV9ldmVudCwgZGF0YXNldF9kZXYsIGRlYnVnLCBkZXN0cm95X2Jsb2NrLCBkZXN0cm95X2NvbXBvbmVudCwgZGVzdHJveV9lYWNoLCBkZXRhY2gsIGRldGFjaF9hZnRlcl9kZXYsIGRldGFjaF9iZWZvcmVfZGV2LCBkZXRhY2hfYmV0d2Vlbl9kZXYsIGRldGFjaF9kZXYsIGRpcnR5X2NvbXBvbmVudHMsIGRpc3BhdGNoX2RldiwgZWFjaCwgZWxlbWVudCwgZWxlbWVudF9pcywgZW1wdHksIGVuZF9oeWRyYXRpbmcsIGVzY2FwZSwgZXNjYXBlX2F0dHJpYnV0ZV92YWx1ZSwgZXNjYXBlX29iamVjdCwgZXNjYXBlZCwgZXhjbHVkZV9pbnRlcm5hbF9wcm9wcywgZml4X2FuZF9kZXN0cm95X2Jsb2NrLCBmaXhfYW5kX291dHJvX2FuZF9kZXN0cm95X2Jsb2NrLCBmaXhfcG9zaXRpb24sIGZsdXNoLCBnZXRBbGxDb250ZXh0cywgZ2V0Q29udGV4dCwgZ2V0X2FsbF9kaXJ0eV9mcm9tX3Njb3BlLCBnZXRfYmluZGluZ19ncm91cF92YWx1ZSwgZ2V0X2N1cnJlbnRfY29tcG9uZW50LCBnZXRfY3VzdG9tX2VsZW1lbnRzX3Nsb3RzLCBnZXRfcm9vdF9mb3Jfc3R5bGUsIGdldF9zbG90X2NoYW5nZXMsIGdldF9zcHJlYWRfb2JqZWN0LCBnZXRfc3ByZWFkX3VwZGF0ZSwgZ2V0X3N0b3JlX3ZhbHVlLCBnbG9iYWxzLCBncm91cF9vdXRyb3MsIGhhbmRsZV9wcm9taXNlLCBoYXNDb250ZXh0LCBoYXNfcHJvcCwgaWRlbnRpdHksIGluaXQsIGluc2VydCwgaW5zZXJ0X2RldiwgaW5zZXJ0X2h5ZHJhdGlvbiwgaW5zZXJ0X2h5ZHJhdGlvbl9kZXYsIGludHJvcywgaW52YWxpZF9hdHRyaWJ1dGVfbmFtZV9jaGFyYWN0ZXIsIGlzX2NsaWVudCwgaXNfY3Jvc3NvcmlnaW4sIGlzX2VtcHR5LCBpc19mdW5jdGlvbiwgaXNfcHJvbWlzZSwgbGlzdGVuLCBsaXN0ZW5fZGV2LCBsb29wLCBsb29wX2d1YXJkLCBtZXJnZV9zc3Jfc3R5bGVzLCBtaXNzaW5nX2NvbXBvbmVudCwgbW91bnRfY29tcG9uZW50LCBub29wLCBub3RfZXF1YWwsIG5vdywgbnVsbF90b19lbXB0eSwgb2JqZWN0X3dpdGhvdXRfcHJvcGVydGllcywgb25EZXN0cm95LCBvbk1vdW50LCBvbmNlLCBvdXRyb19hbmRfZGVzdHJveV9ibG9jaywgcHJldmVudF9kZWZhdWx0LCBwcm9wX2RldiwgcXVlcnlfc2VsZWN0b3JfYWxsLCByYWYsIHJ1biwgcnVuX2FsbCwgc2FmZV9ub3RfZXF1YWwsIHNjaGVkdWxlX3VwZGF0ZSwgc2VsZWN0X211bHRpcGxlX3ZhbHVlLCBzZWxlY3Rfb3B0aW9uLCBzZWxlY3Rfb3B0aW9ucywgc2VsZWN0X3ZhbHVlLCBzZWxmLCBzZXRDb250ZXh0LCBzZXRfYXR0cmlidXRlcywgc2V0X2N1cnJlbnRfY29tcG9uZW50LCBzZXRfY3VzdG9tX2VsZW1lbnRfZGF0YSwgc2V0X2RhdGEsIHNldF9kYXRhX2Rldiwgc2V0X2lucHV0X3R5cGUsIHNldF9pbnB1dF92YWx1ZSwgc2V0X25vdywgc2V0X3JhZiwgc2V0X3N0b3JlX3ZhbHVlLCBzZXRfc3R5bGUsIHNldF9zdmdfYXR0cmlidXRlcywgc3BhY2UsIHNwcmVhZCwgc3JjX3VybF9lcXVhbCwgc3RhcnRfaHlkcmF0aW5nLCBzdG9wX3Byb3BhZ2F0aW9uLCBzdWJzY3JpYmUsIHN2Z19lbGVtZW50LCB0ZXh0LCB0aWNrLCB0aW1lX3Jhbmdlc190b19hcnJheSwgdG9fbnVtYmVyLCB0b2dnbGVfY2xhc3MsIHRyYW5zaXRpb25faW4sIHRyYW5zaXRpb25fb3V0LCB0cnVzdGVkLCB1cGRhdGVfYXdhaXRfYmxvY2tfYnJhbmNoLCB1cGRhdGVfa2V5ZWRfZWFjaCwgdXBkYXRlX3Nsb3QsIHVwZGF0ZV9zbG90X2Jhc2UsIHZhbGlkYXRlX2NvbXBvbmVudCwgdmFsaWRhdGVfZWFjaF9hcmd1bWVudCwgdmFsaWRhdGVfZWFjaF9rZXlzLCB2YWxpZGF0ZV9zbG90cywgdmFsaWRhdGVfc3RvcmUsIHhsaW5rX2F0dHIgfTtcbiIsImltcG9ydCB7IG5vb3AsIHNhZmVfbm90X2VxdWFsLCBzdWJzY3JpYmUsIHJ1bl9hbGwsIGlzX2Z1bmN0aW9uIH0gZnJvbSAnLi4vaW50ZXJuYWwvaW5kZXgubWpzJztcbmV4cG9ydCB7IGdldF9zdG9yZV92YWx1ZSBhcyBnZXQgfSBmcm9tICcuLi9pbnRlcm5hbC9pbmRleC5tanMnO1xuXG5jb25zdCBzdWJzY3JpYmVyX3F1ZXVlID0gW107XG4vKipcbiAqIENyZWF0ZXMgYSBgUmVhZGFibGVgIHN0b3JlIHRoYXQgYWxsb3dzIHJlYWRpbmcgYnkgc3Vic2NyaXB0aW9uLlxuICogQHBhcmFtIHZhbHVlIGluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7U3RhcnRTdG9wTm90aWZpZXJ9c3RhcnQgc3RhcnQgYW5kIHN0b3Agbm90aWZpY2F0aW9ucyBmb3Igc3Vic2NyaXB0aW9uc1xuICovXG5mdW5jdGlvbiByZWFkYWJsZSh2YWx1ZSwgc3RhcnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdWJzY3JpYmU6IHdyaXRhYmxlKHZhbHVlLCBzdGFydCkuc3Vic2NyaWJlXG4gICAgfTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgYFdyaXRhYmxlYCBzdG9yZSB0aGF0IGFsbG93cyBib3RoIHVwZGF0aW5nIGFuZCByZWFkaW5nIGJ5IHN1YnNjcmlwdGlvbi5cbiAqIEBwYXJhbSB7Kj19dmFsdWUgaW5pdGlhbCB2YWx1ZVxuICogQHBhcmFtIHtTdGFydFN0b3BOb3RpZmllcj19c3RhcnQgc3RhcnQgYW5kIHN0b3Agbm90aWZpY2F0aW9ucyBmb3Igc3Vic2NyaXB0aW9uc1xuICovXG5mdW5jdGlvbiB3cml0YWJsZSh2YWx1ZSwgc3RhcnQgPSBub29wKSB7XG4gICAgbGV0IHN0b3A7XG4gICAgY29uc3Qgc3Vic2NyaWJlcnMgPSBuZXcgU2V0KCk7XG4gICAgZnVuY3Rpb24gc2V0KG5ld192YWx1ZSkge1xuICAgICAgICBpZiAoc2FmZV9ub3RfZXF1YWwodmFsdWUsIG5ld192YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbmV3X3ZhbHVlO1xuICAgICAgICAgICAgaWYgKHN0b3ApIHsgLy8gc3RvcmUgaXMgcmVhZHlcbiAgICAgICAgICAgICAgICBjb25zdCBydW5fcXVldWUgPSAhc3Vic2NyaWJlcl9xdWV1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBzdWJzY3JpYmVyIG9mIHN1YnNjcmliZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJbMV0oKTtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcl9xdWV1ZS5wdXNoKHN1YnNjcmliZXIsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJ1bl9xdWV1ZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZXJfcXVldWUubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWVbaV1bMF0oc3Vic2NyaWJlcl9xdWV1ZVtpICsgMV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlKGZuKSB7XG4gICAgICAgIHNldChmbih2YWx1ZSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdWJzY3JpYmUocnVuLCBpbnZhbGlkYXRlID0gbm9vcCkge1xuICAgICAgICBjb25zdCBzdWJzY3JpYmVyID0gW3J1biwgaW52YWxpZGF0ZV07XG4gICAgICAgIHN1YnNjcmliZXJzLmFkZChzdWJzY3JpYmVyKTtcbiAgICAgICAgaWYgKHN1YnNjcmliZXJzLnNpemUgPT09IDEpIHtcbiAgICAgICAgICAgIHN0b3AgPSBzdGFydChzZXQpIHx8IG5vb3A7XG4gICAgICAgIH1cbiAgICAgICAgcnVuKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHN1YnNjcmliZXJzLmRlbGV0ZShzdWJzY3JpYmVyKTtcbiAgICAgICAgICAgIGlmIChzdWJzY3JpYmVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc3RvcCgpO1xuICAgICAgICAgICAgICAgIHN0b3AgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4geyBzZXQsIHVwZGF0ZSwgc3Vic2NyaWJlIH07XG59XG5mdW5jdGlvbiBkZXJpdmVkKHN0b3JlcywgZm4sIGluaXRpYWxfdmFsdWUpIHtcbiAgICBjb25zdCBzaW5nbGUgPSAhQXJyYXkuaXNBcnJheShzdG9yZXMpO1xuICAgIGNvbnN0IHN0b3Jlc19hcnJheSA9IHNpbmdsZVxuICAgICAgICA/IFtzdG9yZXNdXG4gICAgICAgIDogc3RvcmVzO1xuICAgIGNvbnN0IGF1dG8gPSBmbi5sZW5ndGggPCAyO1xuICAgIHJldHVybiByZWFkYWJsZShpbml0aWFsX3ZhbHVlLCAoc2V0KSA9PiB7XG4gICAgICAgIGxldCBpbml0ZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gW107XG4gICAgICAgIGxldCBwZW5kaW5nID0gMDtcbiAgICAgICAgbGV0IGNsZWFudXAgPSBub29wO1xuICAgICAgICBjb25zdCBzeW5jID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHBlbmRpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmbihzaW5nbGUgPyB2YWx1ZXNbMF0gOiB2YWx1ZXMsIHNldCk7XG4gICAgICAgICAgICBpZiAoYXV0bykge1xuICAgICAgICAgICAgICAgIHNldChyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xlYW51cCA9IGlzX2Z1bmN0aW9uKHJlc3VsdCkgPyByZXN1bHQgOiBub29wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB1bnN1YnNjcmliZXJzID0gc3RvcmVzX2FycmF5Lm1hcCgoc3RvcmUsIGkpID0+IHN1YnNjcmliZShzdG9yZSwgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB2YWx1ZXNbaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHBlbmRpbmcgJj0gfigxIDw8IGkpO1xuICAgICAgICAgICAgaWYgKGluaXRlZCkge1xuICAgICAgICAgICAgICAgIHN5bmMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgcGVuZGluZyB8PSAoMSA8PCBpKTtcbiAgICAgICAgfSkpO1xuICAgICAgICBpbml0ZWQgPSB0cnVlO1xuICAgICAgICBzeW5jKCk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICAgICAgcnVuX2FsbCh1bnN1YnNjcmliZXJzKTtcbiAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgZGVyaXZlZCwgcmVhZGFibGUsIHdyaXRhYmxlIH07XG4iLCJpbXBvcnQgeyBXcml0YWJsZSwgd3JpdGFibGUgfSBmcm9tIFwic3ZlbHRlL3N0b3JlXCI7XG5pbXBvcnQgdHlwZSB7IE1hbmlmZXN0IH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG5cbnR5cGUgRXJyb3JTdG9yZSA9IFJlY29yZDxzdHJpbmcsIE1hbmlmZXN0W1wiZXJyb3JcIl0+O1xuXG5mdW5jdGlvbiBpbml0aWFsaXplKCk6IFdyaXRhYmxlPEVycm9yU3RvcmU+IHtcbiAgcmV0dXJuIHdyaXRhYmxlKHt9KTtcbn1cblxuZXhwb3J0IGNvbnN0IEVycm9yU3RvcmUgPSBpbml0aWFsaXplKCk7XG4iLCJpbXBvcnQgeyBFcnJvclN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlL2Vycm9yXCI7XG5pbXBvcnQgdHlwZSB7IE1hbmlmZXN0IH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYW5kbGVSZXNwb25zZTxUID0gdW5rbm93bj4oXG4gIHJlc3BvbnNlOiBSZXNwb25zZSxcbik6IFByb21pc2U8VD4ge1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgY29uc3QgcGFzc2VkRXJyb3IgPSBhd2FpdCByZXNwb25zZS5qc29uKCkudGhlbihcbiAgICAgIChqc29uOiB7XG4gICAgICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgICByZXNwb25zZT86IHtcbiAgICAgICAgICBlcnJvcj86IHN0cmluZztcbiAgICAgICAgfTtcbiAgICAgIH0pID0+IGpzb24sXG4gICAgKTtcblxuICAgIGNvbnN0IG1lc3NhZ2UgPSBwYXNzZWRFcnJvcj8ucmVzcG9uc2U/LmVycm9yIHx8IHBhc3NlZEVycm9yPy5tZXNzYWdlO1xuXG4gICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgZXJyb3IubmFtZSA9IHBhc3NlZEVycm9yLm5hbWU7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHsgbWVzc2FnZTogZXJyb3IsIHN0YXR1c0NvZGU6IHJlc3BvbnNlLnN0YXR1cyB9KTtcbiAgfVxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufVxuXG50eXBlIEhUVFBNZXRob2QgPSBcIlBPU1RcIiB8IFwiR0VUXCIgfCBcIlBVVFwiIHwgXCJQQVRDSFwiIHwgXCJPUFRJT05TXCIgfCB1bmRlZmluZWQ7XG5cbnR5cGUgRmV0Y2hPcHRpb25zID0ge1xuICBib2R5PzogdW5rbm93bjtcbiAgbWV0aG9kPzogSFRUUE1ldGhvZDtcbiAgY29tcG9uZW50X2lkPzogc3RyaW5nO1xuICBhY2Nlc3NfdG9rZW4/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmV0Y2hDb25maWcoXG4gIG9wdHM6IEZldGNoT3B0aW9ucyA9IHsgY29tcG9uZW50X2lkOiBcIlwiIH0sXG4pOiBSZXF1ZXN0SW5pdCB7XG4gIHJldHVybiB7XG4gICAgbWV0aG9kOiBvcHRzLm1ldGhvZCB8fCBcIkdFVFwiLCAvLyBHRVQgaXMgZGVmYXVsdCBtZXRob2RcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBcIlgtQ29tcG9uZW50LUlkXCI6IG9wdHMuY29tcG9uZW50X2lkIHx8IFwiXCIsIC8vIENvbXBvbmVudCBJRCBpcyBwYXNzZWQgYXMgaGVhZGVyXG4gICAgICBcIlgtQWNjZXNzLVRva2VuXCI6IG9wdHMuYWNjZXNzX3Rva2VuIHx8IFwiXCIsIC8vIEFjY2VzcyBUb2tlbiBpcyBwYXNzZWQgYXMgaGVhZGVyXG4gICAgfSxcbiAgICBib2R5OiBvcHRzLmJvZHkgPyBKU09OLnN0cmluZ2lmeShvcHRzLmJvZHkpIDogdW5kZWZpbmVkLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRXJyb3IoaWQ6IHN0cmluZywgZXJyb3I6IE1hbmlmZXN0W1wiZXJyb3JcIl0pOiBuZXZlciB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICBFcnJvclN0b3JlLnVwZGF0ZSgoZXJyb3JNYXApID0+ICh7IC4uLmVycm9yTWFwLCBbaWRdOiBlcnJvciB9KSk7XG4gIHRocm93IGVycm9yO1xufVxuXG5jb25zdCBSRUdJT05fTUFQUElORzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgXCIwMDFcIjogXCJcIiwgLy8gVVNcbiAgXCIwMDJcIjogXCJpcmVsYW5kLVwiLCAvLyBFVVxuICBcIjAwM1wiOiBcImNhbmFkYS1cIiwgLy8gQ2FuYWRhXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWlkZGxld2FyZUFwaVVybChpZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IHJlZ2lvbiA9IFwiXCI7XG4gIGlmIChpZC5zdWJzdHJpbmcoMywgNCkgPT09IFwiLVwiKSB7XG4gICAgY29uc3QgY29kZSA9IGlkLnN1YnN0cmluZygwLCAzKTtcbiAgICBpZiAodHlwZW9mIFJFR0lPTl9NQVBQSU5HW2NvZGVdICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZWdpb24gPSBSRUdJT05fTUFQUElOR1tjb2RlXTtcbiAgICB9XG4gIH1cbiAgY29uc3QgQVBJX0dBVEVXQVkgPSBgaHR0cHM6Ly8ke3JlZ2lvbn0ke3Byb2Nlc3MuZW52LkFQSV9HQVRFV0FZfWA7XG4gIHJldHVybiBBUElfR0FURVdBWTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpbGVuY2UoZXJyb3I6IEVycm9yKSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRRdWVyeVBhcmFtcyhwYXJhbXM6IFJlY29yZDxzdHJpbmcsIGFueT4pOiBzdHJpbmcge1xuICByZXR1cm4gT2JqZWN0LmtleXMocGFyYW1zKVxuICAgIC5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICBpZiAocGFyYW1zW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhY2MuYXBwZW5kKGtleSwgcGFyYW1zW2tleV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBuZXcgVVJMU2VhcmNoUGFyYW1zKCkpXG4gICAgLnRvU3RyaW5nKCk7XG59XG4iLCJpbXBvcnQge1xuICBnZXRGZXRjaENvbmZpZyxcbiAgaGFuZGxlRXJyb3IsXG4gIGhhbmRsZVJlc3BvbnNlLFxuICBnZXRNaWRkbGV3YXJlQXBpVXJsLFxuICBidWlsZFF1ZXJ5UGFyYW1zLFxufSBmcm9tIFwiLi4vbWV0aG9kcy9hcGlcIjtcbmltcG9ydCB0eXBlIHtcbiAgQ29udGFjdHNRdWVyeSxcbiAgQ29udGFjdCxcbiAgQ29udGFjdFNlYXJjaFF1ZXJ5LFxuICBDb250YWN0c1F1ZXJ5UGFyYW1zLFxufSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvQ29udGFjdHNcIjtcbmltcG9ydCB0eXBlIHsgTWlkZGxld2FyZVJlc3BvbnNlLCBUaHJlYWQgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvTnlsYXNcIjtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ29udGFjdHMgPSBhc3luYyAoXG4gIHF1ZXJ5OiBDb250YWN0c1F1ZXJ5LFxuICBwYXJhbXM6IENvbnRhY3RzUXVlcnlQYXJhbXMsXG4pOiBQcm9taXNlPENvbnRhY3RbXT4gPT4ge1xuICBjb25zdCB1cmwgPSBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKFxuICAgIHF1ZXJ5LmNvbXBvbmVudF9pZCxcbiAgKX0vY29udGFjdC1saXN0L2NvbnRhY3RzPyR7YnVpbGRRdWVyeVBhcmFtcyhwYXJhbXMpfWA7XG5cbiAgY29uc3QgY29udGFjdHMgPSBhd2FpdCBmZXRjaChcbiAgICB1cmwsXG4gICAgZ2V0RmV0Y2hDb25maWcoe1xuICAgICAgY29tcG9uZW50X2lkOiBxdWVyeS5jb21wb25lbnRfaWQsXG4gICAgICBhY2Nlc3NfdG9rZW46IHF1ZXJ5LmFjY2Vzc190b2tlbixcbiAgICB9KSxcbiAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPENvbnRhY3RbXT4+KHJlc3BvbnNlKSlcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgcmV0dXJuIGpzb24ucmVzcG9uc2U7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihxdWVyeS5jb21wb25lbnRfaWQsIGVycm9yKSk7XG4gIHJldHVybiBjb250YWN0cyA/PyBbXTtcbn07XG5cbi8vIHF1ZXJ5LnF1ZXJ5IHNob3VsZCBiZSBhIHF1ZXJ5U3RyaW5nIGFzIGRlZmluZWQgYXQgaHR0cHM6Ly9kb2NzLm55bGFzLmNvbS9yZWZlcmVuY2UjY29udGFjdHMtMVxuZXhwb3J0IGNvbnN0IGZldGNoQ29udGFjdHNCeVF1ZXJ5ID0gYXN5bmMgKFxuICBxdWVyeTogQ29udGFjdFNlYXJjaFF1ZXJ5LFxuKTogUHJvbWlzZTxDb250YWN0W10+ID0+IHtcbiAgY29uc3QgY29udGFjdHMgPSBhd2FpdCBmZXRjaChcbiAgICBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKHF1ZXJ5LmNvbXBvbmVudF9pZCl9L2NvbnRhY3RzJHtxdWVyeS5xdWVyeX1gLFxuICAgIGdldEZldGNoQ29uZmlnKHtcbiAgICAgIGNvbXBvbmVudF9pZDogcXVlcnkuY29tcG9uZW50X2lkLFxuICAgICAgYWNjZXNzX3Rva2VuOiBxdWVyeS5hY2Nlc3NfdG9rZW4sXG4gICAgfSksXG4gIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxDb250YWN0W10+PihyZXNwb25zZSkpXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xuXG4gIHJldHVybiBjb250YWN0cyA/PyBbXTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaENvbnRhY3RJbWFnZSA9IGFzeW5jIChcbiAgcXVlcnk6IENvbnRhY3RzUXVlcnksXG4gIGlkOiBzdHJpbmcsXG4pOiBQcm9taXNlPHN0cmluZz4gPT4ge1xuICByZXR1cm4gYXdhaXQgZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChxdWVyeS5jb21wb25lbnRfaWQpfS9jb250YWN0cy8ke2lkfS9waWN0dXJlYCxcbiAgICBnZXRGZXRjaENvbmZpZyh7XG4gICAgICBjb21wb25lbnRfaWQ6IHF1ZXJ5LmNvbXBvbmVudF9pZCxcbiAgICAgIGFjY2Vzc190b2tlbjogcXVlcnkuYWNjZXNzX3Rva2VuLFxuICAgIH0pLFxuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8c3RyaW5nPj4ocmVzcG9uc2UpKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaENvbnRhY3RUaHJlYWRzID0gYXN5bmMgKFxuICBxdWVyeTogQ29udGFjdHNRdWVyeSxcbiAgb2Zmc2V0OiBudW1iZXIsXG4gIGxpbWl0OiBudW1iZXIsXG4pOiBQcm9taXNlPFRocmVhZFtdPiA9PiB7XG4gIHJldHVybiBhd2FpdCBmZXRjaChcbiAgICBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKFxuICAgICAgcXVlcnkuY29tcG9uZW50X2lkLFxuICAgICl9L3RocmVhZHM/b2Zmc2V0PSR7b2Zmc2V0fSZsaW1pdD0ke2xpbWl0fWAsXG4gICAgZ2V0RmV0Y2hDb25maWcocXVlcnkpLFxuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8VGhyZWFkW10+PihyZXNwb25zZSkpXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xufTtcbiIsImltcG9ydCB7XG4gIGdldEZldGNoQ29uZmlnLFxuICBoYW5kbGVFcnJvcixcbiAgaGFuZGxlUmVzcG9uc2UsXG4gIGdldE1pZGRsZXdhcmVBcGlVcmwsXG59IGZyb20gXCIuLi9tZXRob2RzL2FwaVwiO1xuaW1wb3J0IHR5cGUge1xuICBNYWlsYm94UXVlcnksXG4gIFRocmVhZCxcbiAgQ29udmVyc2F0aW9uUXVlcnksXG4gIENvbnZlcnNhdGlvbixcbiAgTWlkZGxld2FyZVJlc3BvbnNlLFxufSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvTnlsYXNcIjtcblxuZXhwb3J0IGNvbnN0IGZldGNoVGhyZWFkcyA9IChcbiAgcXVlcnk6IE1haWxib3hRdWVyeSxcbiAgbGltaXQ6IG51bWJlcixcbiAgb2Zmc2V0OiBudW1iZXIsXG4pOiBQcm9taXNlPFRocmVhZFtdPiA9PiB7XG4gIGlmIChxdWVyeS50aHJlYWRfaWRzKSB7XG4gICAgLy8gJmxpbWl0PSR7bGltaXR9Jm9mZnNldD0ke29mZnNldH1cbiAgICBjb25zdCBwYWdlX29mX2lkcyA9IHF1ZXJ5LnRocmVhZF9pZHMuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBsaW1pdCk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgICAgcGFnZV9vZl9pZHMubWFwKGFzeW5jICh0aHJlYWRfaWQpID0+IHtcbiAgICAgICAgLy8gTnlsYXMgQVBJIGRvZXMgbm90IHN1cHBvcnQgZmV0Y2hpbmcgdGhyZWFkcyBpbiBidWxrLCBzbyBtdXN0IGZldGNoIHRoZW0gb25lXG4gICAgICAgIC8vIGF0IGEgdGltZSA6KFxuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9IGAke2dldE1pZGRsZXdhcmVBcGlVcmwoXG4gICAgICAgICAgcXVlcnkuY29tcG9uZW50X2lkLFxuICAgICAgICApfS90aHJlYWRzLyR7dGhyZWFkX2lkfT92aWV3PWV4cGFuZGVkYDtcbiAgICAgICAgLy8gVE9ETzogaWRlYWxseSB0aGlzIHdvdWxkbid0IHJlcGxpY2F0ZSBtdWNoIG9mIHRoZSBjb2RlIGZyb20gYmVsb3dcbiAgICAgICAgcmV0dXJuIGF3YWl0IGZldGNoKHF1ZXJ5U3RyaW5nLCBnZXRGZXRjaENvbmZpZyhxdWVyeSkpXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PlxuICAgICAgICAgICAgaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPFRocmVhZD4+KHJlc3BvbnNlKSxcbiAgICAgICAgICApXG4gICAgICAgICAgLnRoZW4oKGpzb24pID0+IGpzb24ucmVzcG9uc2UpXG4gICAgICAgICAgLy8gVE9ETzogUmVtb3ZlIHRoaXMgdWdseSBoYWNrIHdoZW4gd2UgZml4IHRoZSBBUEkgZnJvbSByZXR1cm5pbmcgZ2hvc3QgbWVzc2FnZXMgKGUuZy4gdy9vIGEgZnJvbS90byBmaWVsZClcbiAgICAgICAgICAudGhlbigodGhyZWFkKSA9PiAoe1xuICAgICAgICAgICAgLi4udGhyZWFkLFxuICAgICAgICAgICAgbWVzc2FnZXM6IHRocmVhZC5tZXNzYWdlcy5maWx0ZXIoXG4gICAgICAgICAgICAgIChtZXNzYWdlKSA9PiBtZXNzYWdlLmZyb20ubGVuZ3RoICE9PSAwIHx8IG1lc3NhZ2UudG8ubGVuZ3RoICE9PSAwLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICB9KSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihxdWVyeS5jb21wb25lbnRfaWQsIGVycm9yKSk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG4gIGxldCBxdWVyeVN0cmluZyA9IGAke2dldE1pZGRsZXdhcmVBcGlVcmwoXG4gICAgcXVlcnkuY29tcG9uZW50X2lkLFxuICApfS90aHJlYWRzP3ZpZXc9ZXhwYW5kZWQmbm90X2luPXRyYXNoJmxpbWl0PSR7bGltaXR9Jm9mZnNldD0ke29mZnNldH1gO1xuICBpZiAocXVlcnkucXVlcnkpIHtcbiAgICBPYmplY3QuZW50cmllcyhxdWVyeS5xdWVyeSkuZm9yRWFjaChcbiAgICAgIChwYXJhbSkgPT4gKHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmcuY29uY2F0KGAmJHtwYXJhbVswXX09JHtwYXJhbVsxXX1gKSksXG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIGZldGNoKHF1ZXJ5U3RyaW5nLCBnZXRGZXRjaENvbmZpZyhxdWVyeSkpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+XG4gICAgICAgIGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxUaHJlYWRbXT4+KHJlc3BvbnNlKSxcbiAgICAgIClcbiAgICAgIC50aGVuKChqc29uKSA9PiBqc29uLnJlc3BvbnNlKVxuICAgICAgLy8gVE9ETzogUmVtb3ZlIHRoaXMgdWdseSBoYWNrIHdoZW4gd2UgZml4IHRoZSBBUEkgZnJvbSByZXR1cm5pbmcgZ2hvc3QgbWVzc2FnZXMgKGUuZy4gdy9vIGEgZnJvbS90byBmaWVsZClcbiAgICAgIC50aGVuKCh0aHJlYWRzKSA9PlxuICAgICAgICB0aHJlYWRzLm1hcCgodGhyZWFkKSA9PiAoe1xuICAgICAgICAgIC4uLnRocmVhZCxcbiAgICAgICAgICBtZXNzYWdlczogdGhyZWFkLm1lc3NhZ2VzLmZpbHRlcihcbiAgICAgICAgICAgIChtZXNzYWdlKSA9PiBtZXNzYWdlLmZyb20ubGVuZ3RoICE9PSAwIHx8IG1lc3NhZ2UudG8ubGVuZ3RoICE9PSAwLFxuICAgICAgICAgICksXG4gICAgICAgIH0pKSxcbiAgICAgIClcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKVxuICApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoVGhyZWFkQ291bnQocXVlcnk6IE1haWxib3hRdWVyeSk6IFByb21pc2U8bnVtYmVyPiB7XG4gIGxldCBxdWVyeVN0cmluZyA9IGAke2dldE1pZGRsZXdhcmVBcGlVcmwoXG4gICAgcXVlcnkuY29tcG9uZW50X2lkLFxuICApfS90aHJlYWRzP3ZpZXc9ZXhwYW5kZWQmbm90X2luPXRyYXNoJnZpZXc9Y291bnRgO1xuICBpZiAocXVlcnkucXVlcnkpIHtcbiAgICBPYmplY3QuZW50cmllcyhxdWVyeS5xdWVyeSkuZm9yRWFjaChcbiAgICAgIChwYXJhbSkgPT4gKHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmcuY29uY2F0KGAmJHtwYXJhbVswXX09JHtwYXJhbVsxXX1gKSksXG4gICAgKTtcbiAgfVxuXG4gIGlmIChxdWVyeS5rZXl3b3JkVG9TZWFyY2gpIHtcbiAgICBxdWVyeVN0cmluZyArPSBgJnE9JHtxdWVyeS5rZXl3b3JkVG9TZWFyY2h9YDtcbiAgfVxuXG4gIHJldHVybiBmZXRjaChxdWVyeVN0cmluZywgZ2V0RmV0Y2hDb25maWcocXVlcnkpKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPGFueT4+KHJlc3BvbnNlKSlcbiAgICAudGhlbigoanNvbikgPT4ganNvbi5yZXNwb25zZS5jb3VudCk7XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNlYXJjaFJlc3VsdFRocmVhZHMgPSAoXG4gIHF1ZXJ5OiBNYWlsYm94UXVlcnksXG4pOiBQcm9taXNlPFRocmVhZFtdPiA9PiB7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gYCR7Z2V0TWlkZGxld2FyZUFwaVVybChcbiAgICBxdWVyeS5jb21wb25lbnRfaWQsXG4gICl9L3RocmVhZHMvc2VhcmNoP3E9JHtxdWVyeS5rZXl3b3JkVG9TZWFyY2h9JnZpZXc9ZXhwYW5kZWQmbGltaXQ9JHtcbiAgICBxdWVyeS5xdWVyeS5saW1pdFxuICB9Jm9mZnNldD0ke3F1ZXJ5LnF1ZXJ5Lm9mZnNldH1gO1xuXG4gIHJldHVybiBmZXRjaChxdWVyeVN0cmluZywgZ2V0RmV0Y2hDb25maWcocXVlcnkpKVxuICAgIC50aGVuKGFzeW5jIChyZXNwb25zZSkgPT5cbiAgICAgIGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxUaHJlYWRbXT4+KHJlc3BvbnNlKSxcbiAgICApXG4gICAgLnRoZW4oKGpzb24pID0+IGpzb24ucmVzcG9uc2UpXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoVGhyZWFkID0gYXN5bmMgKFxuICBxdWVyeTogQ29udmVyc2F0aW9uUXVlcnksXG4pOiBQcm9taXNlPENvbnZlcnNhdGlvbj4gPT4ge1xuICBjb25zdCB0aHJlYWQgPSBhd2FpdCBmZXRjaChcbiAgICBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKHF1ZXJ5LmNvbXBvbmVudF9pZCl9L3RocmVhZHMvJHtcbiAgICAgIHF1ZXJ5LnRocmVhZF9pZFxuICAgIH0/dmlldz1leHBhbmRlZGAsXG4gICAgZ2V0RmV0Y2hDb25maWcoe1xuICAgICAgY29tcG9uZW50X2lkOiBxdWVyeS5jb21wb25lbnRfaWQsXG4gICAgICBhY2Nlc3NfdG9rZW46IHF1ZXJ5LmFjY2Vzc190b2tlbixcbiAgICB9KSxcbiAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT5cbiAgICAgIGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxDb252ZXJzYXRpb24+PihyZXNwb25zZSksXG4gICAgKVxuICAgIC50aGVuKChqc29uKSA9PiBqc29uLnJlc3BvbnNlKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKTtcblxuICByZXR1cm4gdGhyZWFkO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVRocmVhZCA9IChcbiAgcXVlcnk6IENvbnZlcnNhdGlvblF1ZXJ5LFxuICB1cGRhdGVkVGhyZWFkOiBDb252ZXJzYXRpb24sXG4pOiBQcm9taXNlPENvbnZlcnNhdGlvbj4gPT4ge1xuICAvLyBhY2NlcHRzIHVucmVhZCwgc3RhcnJlZCwgZm9sZGVyX2lkICsgbGFiZWxfaWRzLiBkZXZlbG9wZXIubnlsYXMuY29tL2RvY3MvYXBpLyNwdXQvdGhyZWFkcy9pZFxuICByZXR1cm4gZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChxdWVyeS5jb21wb25lbnRfaWQpfS90aHJlYWRzLyR7dXBkYXRlZFRocmVhZC5pZH1gLFxuICAgIGdldEZldGNoQ29uZmlnKHtcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgIGNvbXBvbmVudF9pZDogcXVlcnkuY29tcG9uZW50X2lkLFxuICAgICAgYWNjZXNzX3Rva2VuOiBxdWVyeS5hY2Nlc3NfdG9rZW4sXG4gICAgICBib2R5OiB7XG4gICAgICAgIHVucmVhZDogdXBkYXRlZFRocmVhZC51bnJlYWQsXG4gICAgICAgIHN0YXJyZWQ6IHVwZGF0ZWRUaHJlYWQuc3RhcnJlZCxcbiAgICAgICAgZm9sZGVyX2lkOiB1cGRhdGVkVGhyZWFkLmZvbGRlcl9pZCxcbiAgICAgICAgbGFiZWxfaWRzOiB1cGRhdGVkVGhyZWFkLmxhYmVsX2lkcyxcbiAgICAgIH0sXG4gICAgfSksXG4gIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+XG4gICAgICBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8Q29udmVyc2F0aW9uPj4ocmVzcG9uc2UpLFxuICAgIClcbiAgICAudGhlbigoanNvbikgPT4ganNvbi5yZXNwb25zZSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihxdWVyeS5jb21wb25lbnRfaWQsIGVycm9yKSk7XG59O1xuIiwiaW1wb3J0IHtcbiAgZ2V0RmV0Y2hDb25maWcsXG4gIGhhbmRsZUVycm9yLFxuICBoYW5kbGVSZXNwb25zZSxcbiAgZ2V0TWlkZGxld2FyZUFwaVVybCxcbn0gZnJvbSBcIi4uL21ldGhvZHMvYXBpXCI7XG5pbXBvcnQgdHlwZSB7IE1hbmlmZXN0LCBNaWRkbGV3YXJlUmVzcG9uc2UgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvTnlsYXNcIjtcblxuZXhwb3J0IGNvbnN0IGZldGNoTWFuaWZlc3QgPSBhc3luYyAoXG4gIGlkOiBzdHJpbmcsXG4gIGFjY2Vzc190b2tlbj86IHN0cmluZyxcbik6IFByb21pc2U8TWFuaWZlc3Q+ID0+IHtcbiAgcmV0dXJuIGF3YWl0IGZldGNoKFxuICAgIGAke2dldE1pZGRsZXdhcmVBcGlVcmwoaWQpfS9tYW5pZmVzdGAsXG4gICAgZ2V0RmV0Y2hDb25maWcoe1xuICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgY29tcG9uZW50X2lkOiBpZCxcbiAgICB9KSxcbiAgKVxuICAgIC50aGVuPE1pZGRsZXdhcmVSZXNwb25zZT4oaGFuZGxlUmVzcG9uc2UpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5jb21wb25lbnQudGhlbWluZylcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihpZCwgZXJyb3IpKTtcbn07XG5cbi8vIEFsbG93cyA8bnlsYXMtc2NoZWR1bGUtZWRpdG9yPiB0byBtb2RpZnkgaXRzIG93biBwcm9wZXJ0aWVzXG5cbmV4cG9ydCBjb25zdCBzYXZlTWFuaWZlc3QgPSBhc3luYyAoXG4gIGlkOiBzdHJpbmcsXG4gIG1hbmlmZXN0OiBNYW5pZmVzdCxcbiAgYWNjZXNzX3Rva2VuPzogc3RyaW5nLFxuKTogUHJvbWlzZTxNYW5pZmVzdD4gPT4ge1xuICByZXR1cm4gZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChpZCl9L2NvbXBvbmVudGAsXG4gICAgZ2V0RmV0Y2hDb25maWcoe1xuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgY29tcG9uZW50X2lkOiBpZCxcbiAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgIGJvZHk6IHsgc2V0dGluZ3M6IG1hbmlmZXN0IH0sXG4gICAgfSksXG4gIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxNYW5pZmVzdD4+KHJlc3BvbnNlKSlcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgcmV0dXJuIGpzb24ucmVzcG9uc2U7XG4gICAgfSk7XG59O1xuIiwiaW1wb3J0IHsgTWVzc2FnZVN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlL21lc3NhZ2VzXCI7XG5pbXBvcnQge1xuICBnZXRGZXRjaENvbmZpZyxcbiAgaGFuZGxlRXJyb3IsXG4gIGhhbmRsZVJlc3BvbnNlLFxuICBnZXRNaWRkbGV3YXJlQXBpVXJsLFxufSBmcm9tIFwiLi4vbWV0aG9kcy9hcGlcIjtcbmltcG9ydCB0eXBlIHtcbiAgU2luZ3VsYXJFbWFpbCxcbiAgQ29tbW9uUXVlcnksXG4gIE1lc3NhZ2VzUXVlcnksXG4gIEZpbGUgYXMgTnlsYXNGaWxlLFxuICBNZXNzYWdlIGFzIE55bGFzTWVzc2FnZSxcbiAgTWlkZGxld2FyZVJlc3BvbnNlLFxufSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvTnlsYXNcIjtcbmltcG9ydCB0eXBlIHsgTWVzc2FnZSB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9Db21wb3NlclwiO1xuXG5leHBvcnQgY29uc3Qgc2VuZE1lc3NhZ2UgPSBhc3luYyAoXG4gIGNvbXBvbmVudF9pZDogc3RyaW5nLFxuICBtc2c6IE1lc3NhZ2UsXG4gIGFjY2Vzc190b2tlbj86IHN0cmluZyxcbik6IFByb21pc2U8TnlsYXNNZXNzYWdlPiA9PiB7XG4gIHJldHVybiBhd2FpdCBmZXRjaChcbiAgICBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKGNvbXBvbmVudF9pZCl9L3NlbmRgLFxuICAgIGdldEZldGNoQ29uZmlnKHsgbWV0aG9kOiBcIlBPU1RcIiwgY29tcG9uZW50X2lkLCBhY2Nlc3NfdG9rZW4sIGJvZHk6IG1zZyB9KSxcbiAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT5cbiAgICAgIGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxOeWxhc01lc3NhZ2U+PihyZXNwb25zZSksXG4gICAgKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKGNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVNZXNzYWdlKFxuICBjb21wb25lbnRfaWQ6IHN0cmluZyxcbiAgbWVzc2FnZTogTnlsYXNNZXNzYWdlLFxuICBhY2Nlc3NfdG9rZW4/OiBzdHJpbmcsXG4pOiBQcm9taXNlPE55bGFzTWVzc2FnZT4ge1xuICBjb25zdCB1cmwgPSBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKGNvbXBvbmVudF9pZCl9L21lc3NhZ2VzLyR7bWVzc2FnZS5pZH1gO1xuICBjb25zdCBmZXRjaENvbmZpZyA9IGdldEZldGNoQ29uZmlnKHtcbiAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgY29tcG9uZW50X2lkLFxuICAgIGFjY2Vzc190b2tlbixcbiAgICBib2R5OiB7IGZvbGRlcl9pZDogbWVzc2FnZS5mb2xkZXJfaWQsIGxhYmVsX2lkczogbWVzc2FnZS5sYWJlbF9pZHMgfSxcbiAgfSk7XG4gIHJldHVybiBhd2FpdCBmZXRjaCh1cmwsIGZldGNoQ29uZmlnKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT5cbiAgICAgIGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxOeWxhc01lc3NhZ2U+PihyZXNwb25zZSksXG4gICAgKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKGNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn1cblxuZXhwb3J0IGNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAoXG4gIGNvbXBvbmVudF9pZDogc3RyaW5nLFxuICBmaWxlOiBGaWxlLFxuICBhY2Nlc3NfdG9rZW4/OiBzdHJpbmcsXG4pOiBQcm9taXNlPE55bGFzRmlsZT4gPT4ge1xuICBjb25zdCBmZXRjaENvbmZpZzogUmVxdWVzdEluaXQgPSBnZXRGZXRjaENvbmZpZyh7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBjb21wb25lbnRfaWQsXG4gICAgYWNjZXNzX3Rva2VuLFxuICB9KTtcbiAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xuICBmb3JtLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XG4gIGlmIChcbiAgICB0eXBlb2YgZmV0Y2hDb25maWcuaGVhZGVycyAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgIFwiQ29udGVudC1UeXBlXCIgaW4gZmV0Y2hDb25maWcuaGVhZGVyc1xuICApIHtcbiAgICBkZWxldGUgZmV0Y2hDb25maWcuaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXTtcbiAgfVxuICBmZXRjaENvbmZpZy5ib2R5ID0gZm9ybTtcbiAgcmV0dXJuIGF3YWl0IGZldGNoKGAke2dldE1pZGRsZXdhcmVBcGlVcmwoY29tcG9uZW50X2lkKX0vZmlsZXNgLCBmZXRjaENvbmZpZylcbiAgICAudGhlbigocmVzcG9uc2UpID0+IGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxOeWxhc0ZpbGU+PihyZXNwb25zZSkpXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGpzb24ucmVzcG9uc2UpID8ganNvbi5yZXNwb25zZVswXSA6IGpzb24ucmVzcG9uc2U7XG4gICAgfSlcbiAgICAuY2F0Y2goaGFuZGxlRXJyb3IuYmluZCgwLCBjb21wb25lbnRfaWQpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaE1lc3NhZ2VzID0gYXN5bmMgKFxuICBxdWVyeTogTWVzc2FnZXNRdWVyeSxcbiAgb2Zmc2V0OiBudW1iZXIsXG4gIGxpbWl0OiBudW1iZXIsXG4pOiBQcm9taXNlPE55bGFzTWVzc2FnZVtdPiA9PiB7XG4gIGxldCBxdWVyeVN0cmluZyA9IGAke2dldE1pZGRsZXdhcmVBcGlVcmwoXG4gICAgcXVlcnkuY29tcG9uZW50X2lkLFxuICApfS9tZXNzYWdlcz9vZmZzZXQ9JHtvZmZzZXR9JmxpbWl0PSR7bGltaXR9YDtcbiAgaWYgKHF1ZXJ5LnJlY2VpdmVkX2JlZm9yZSkge1xuICAgIHF1ZXJ5U3RyaW5nID0gYCR7cXVlcnlTdHJpbmd9JnJlY2VpdmVkX2JlZm9yZT0ke3F1ZXJ5LnJlY2VpdmVkX2JlZm9yZX1gO1xuICB9XG4gIGlmIChxdWVyeS5yZWNlaXZlZF9hZnRlcikge1xuICAgIHF1ZXJ5U3RyaW5nID0gYCR7cXVlcnlTdHJpbmd9JnJlY2VpdmVkX2FmdGVyPSR7cXVlcnkucmVjZWl2ZWRfYWZ0ZXJ9YDtcbiAgfVxuICByZXR1cm4gYXdhaXQgZmV0Y2gocXVlcnlTdHJpbmcsIGdldEZldGNoQ29uZmlnKHF1ZXJ5KSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+XG4gICAgICBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8TnlsYXNNZXNzYWdlW10+PihyZXNwb25zZSksXG4gICAgKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICBNZXNzYWdlU3RvcmUuYWRkTWVzc2FnZXMoe1xuICAgICAgICBxdWVyeUtleTogSlNPTi5zdHJpbmdpZnkocXVlcnkpLFxuICAgICAgICBkYXRhOiBqc29uLnJlc3BvbnNlLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaE1lc3NhZ2UgPSBhc3luYyAoXG4gIHF1ZXJ5OiBDb21tb25RdWVyeSxcbiAgbWVzc2FnZUlEOiBzdHJpbmcsXG4pOiBQcm9taXNlPE55bGFzTWVzc2FnZT4gPT4ge1xuICBjb25zdCBxdWVyeVN0cmluZyA9IGAke2dldE1pZGRsZXdhcmVBcGlVcmwoXG4gICAgcXVlcnkuY29tcG9uZW50X2lkLFxuICApfS9tZXNzYWdlcy8ke21lc3NhZ2VJRH1gO1xuICByZXR1cm4gYXdhaXQgZmV0Y2gocXVlcnlTdHJpbmcsIGdldEZldGNoQ29uZmlnKHF1ZXJ5KSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+XG4gICAgICBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8TnlsYXNNZXNzYWdlPj4ocmVzcG9uc2UpLFxuICAgIClcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgcmV0dXJuIGpzb24ucmVzcG9uc2U7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihxdWVyeS5jb21wb25lbnRfaWQsIGVycm9yKSk7XG59O1xuXG4vLyBGb3IgY2FzZXMgd2hlbiBzb21lb25lIHdhbnRzIHRvIHNob3cganVzdCBhIHNpbmdsZSBlbWFpbCBtZXNzYWdlLCByYXRoZXIgdGhhbiB0aGUgZnVsbCB0aHJlYWQgYW5kIHcvbyBwYXNzaW5nIGEgdGhyZWFkIGlkXG5leHBvcnQgY29uc3QgZmV0Y2hFbWFpbCA9IGFzeW5jIChcbiAgcXVlcnk6IFNpbmd1bGFyRW1haWwsXG4pOiBQcm9taXNlPE55bGFzTWVzc2FnZT4gPT4ge1xuICBjb25zdCBxdWVyeVN0cmluZyA9IGAke2dldE1pZGRsZXdhcmVBcGlVcmwocXVlcnkuY29tcG9uZW50X2lkKX0vbWVzc2FnZXMvJHtcbiAgICBxdWVyeS5tZXNzYWdlX2lkXG4gIH1gO1xuICByZXR1cm4gYXdhaXQgZmV0Y2gocXVlcnlTdHJpbmcsIGdldEZldGNoQ29uZmlnKHF1ZXJ5KSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+XG4gICAgICBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8TnlsYXNNZXNzYWdlPj4ocmVzcG9uc2UpLFxuICAgIClcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgcmV0dXJuIGpzb24ucmVzcG9uc2U7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihxdWVyeS5jb21wb25lbnRfaWQsIGVycm9yKSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2F2ZURyYWZ0ID0gYXN5bmMgKFxuICBjb21wb25lbnRfaWQ6IHN0cmluZyxcbiAgbXNnOiBNZXNzYWdlLFxuICBhY2Nlc3NfdG9rZW4/OiBzdHJpbmcsXG4pOiBQcm9taXNlPE55bGFzTWVzc2FnZT4gPT4ge1xuICByZXR1cm4gYXdhaXQgZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChjb21wb25lbnRfaWQpfS9kcmFmdHNgLFxuICAgIGdldEZldGNoQ29uZmlnKHsgbWV0aG9kOiBcIlBPU1RcIiwgY29tcG9uZW50X2lkLCBhY2Nlc3NfdG9rZW4sIGJvZHk6IG1zZyB9KSxcbiAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT5cbiAgICAgIGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxOeWxhc01lc3NhZ2U+PihyZXNwb25zZSksXG4gICAgKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKGNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVEcmFmdCA9IGFzeW5jIChcbiAgY29tcG9uZW50X2lkOiBzdHJpbmcsXG4gIG1zZzogTWVzc2FnZSxcbiAgYWNjZXNzX3Rva2VuPzogc3RyaW5nLFxuKTogUHJvbWlzZTxOeWxhc01lc3NhZ2U+ID0+IHtcbiAgcmV0dXJuIGF3YWl0IGZldGNoKFxuICAgIGAke2dldE1pZGRsZXdhcmVBcGlVcmwoY29tcG9uZW50X2lkKX0vZHJhZnRzLyR7bXNnLmlkfWAsXG4gICAgZ2V0RmV0Y2hDb25maWcoeyBtZXRob2Q6IFwiUFVUXCIsIGNvbXBvbmVudF9pZCwgYWNjZXNzX3Rva2VuLCBib2R5OiBtc2cgfSksXG4gIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+XG4gICAgICBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8TnlsYXNNZXNzYWdlPj4ocmVzcG9uc2UpLFxuICAgIClcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgcmV0dXJuIGpzb24ucmVzcG9uc2U7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihjb21wb25lbnRfaWQsIGVycm9yKSk7XG59O1xuIiwiaW1wb3J0IHtcbiAgZ2V0RmV0Y2hDb25maWcsXG4gIGhhbmRsZUVycm9yLFxuICBoYW5kbGVSZXNwb25zZSxcbiAgZ2V0TWlkZGxld2FyZUFwaVVybCxcbn0gZnJvbSBcIi4uL21ldGhvZHMvYXBpXCI7XG5pbXBvcnQgdHlwZSB7XG4gIEFjY291bnRRdWVyeSxcbiAgQWNjb3VudCxcbiAgTWlkZGxld2FyZVJlc3BvbnNlLFxufSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvTnlsYXNcIjtcblxuZXhwb3J0IGNvbnN0IGZldGNoQWNjb3VudCA9IGFzeW5jIChxdWVyeTogQWNjb3VudFF1ZXJ5KTogUHJvbWlzZTxBY2NvdW50PiA9PiB7XG4gIGNvbnN0IGFjY291bnQgPSBhd2FpdCBmZXRjaChcbiAgICBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKHF1ZXJ5LmNvbXBvbmVudF9pZCl9L2FjY291bnRgLFxuICAgIGdldEZldGNoQ29uZmlnKHF1ZXJ5KSxcbiAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPEFjY291bnQ+PihyZXNwb25zZSkpXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xuXG4gIHJldHVybiBhY2NvdW50O1xufTtcbiIsImltcG9ydCB7XG4gIGdldEZldGNoQ29uZmlnLFxuICBoYW5kbGVFcnJvcixcbiAgaGFuZGxlUmVzcG9uc2UsXG4gIGdldE1pZGRsZXdhcmVBcGlVcmwsXG59IGZyb20gXCIuLi9tZXRob2RzL2FwaVwiO1xuaW1wb3J0IHR5cGUge1xuICBDbGVhbkNvbnZlcnNhdGlvblF1ZXJ5LFxuICBNZXNzYWdlLFxuICBDbGVhbkNvbnZlcnNhdGlvbkZlZWRiYWNrUXVlcnksXG4gIE1pZGRsZXdhcmVSZXNwb25zZSxcbn0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENsZWFuQ29udmVyc2F0aW9ucyA9IChcbiAgcXVlcnk6IENsZWFuQ29udmVyc2F0aW9uUXVlcnksXG4pOiBQcm9taXNlPE1lc3NhZ2VbXT4gPT4ge1xuICByZXR1cm4gZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChxdWVyeS5jb21wb25lbnRfaWQpfS9uZXVyYWwvY29udmVyc2F0aW9uYCxcbiAgICBnZXRGZXRjaENvbmZpZyh7XG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICBhY2Nlc3NfdG9rZW46IHF1ZXJ5LmFjY2Vzc190b2tlbixcbiAgICAgIGNvbXBvbmVudF9pZDogcXVlcnkuY29tcG9uZW50X2lkLFxuICAgICAgYm9keTogeyBtZXNzYWdlX2lkOiBxdWVyeS5tZXNzYWdlX2lkIH0sXG4gICAgfSksXG4gIClcbiAgICAudGhlbihhc3luYyAoYXBpUmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8TWVzc2FnZVtdPj4oXG4gICAgICAgIGFwaVJlc3BvbnNlLFxuICAgICAgKTtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbmRDbGVhbkNvbnZlcnNhdGlvbkZlZWRiYWNrID0gKFxuICBxdWVyeTogQ2xlYW5Db252ZXJzYXRpb25GZWVkYmFja1F1ZXJ5LFxuKTogUHJvbWlzZTxNZXNzYWdlPiA9PiB7XG4gIHJldHVybiBmZXRjaChcbiAgICBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKHF1ZXJ5LmNvbXBvbmVudF9pZCl9L25ldXJhbC9jb252ZXJzYXRpb24vZmVlZGJhY2tgLFxuICAgIGdldEZldGNoQ29uZmlnKHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBhY2Nlc3NfdG9rZW46IHF1ZXJ5LmFjY2Vzc190b2tlbixcbiAgICAgIGNvbXBvbmVudF9pZDogcXVlcnkuY29tcG9uZW50X2lkLFxuICAgICAgYm9keTogeyBtZXNzYWdlX2lkOiBxdWVyeS5tZXNzYWdlX2lkIH0sXG4gICAgfSksXG4gIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxNZXNzYWdlPj4ocmVzcG9uc2UpKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn07XG4iLCJpbXBvcnQge1xuICBnZXRGZXRjaENvbmZpZyxcbiAgaGFuZGxlRXJyb3IsXG4gIGhhbmRsZVJlc3BvbnNlLFxuICBnZXRNaWRkbGV3YXJlQXBpVXJsLFxufSBmcm9tIFwiLi4vbWV0aG9kcy9hcGlcIjtcbmltcG9ydCB0eXBlIHtcbiAgQ29uc2VjdXRpdmVBdmFpbGFiaWxpdHlRdWVyeSxcbiAgQXZhaWxhYmlsaXR5UXVlcnksXG4gIEF2YWlsYWJpbGl0eVJlc3BvbnNlLFxuICBGcmVlQnVzeVJlc3BvbnNlLFxuICBQcmVEYXRlZFRpbWVTbG90LFxufSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvQXZhaWxhYmlsaXR5XCI7XG5pbXBvcnQgdHlwZSB7IE1pZGRsZXdhcmVSZXNwb25zZSB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuaW1wb3J0IHR5cGUgeyBFdmVudERlZmluaXRpb24gfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvU2NoZWR1bGVFZGl0b3JcIjtcbmltcG9ydCB0eXBlIHsgQ29uc2VjdXRpdmVFdmVudCB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9Cb29raW5nXCI7XG5cbi8vIFRPRE86IGRlcHJlY2F0ZSBpZiB3ZSBmaW5kIC9jYWxlbmRhcnMvYXZhaWxhYmlsaXR5IHRvIGJlIGZ1bGx5IHN1ZmZpY2llbnRcbmV4cG9ydCBjb25zdCBmZXRjaEZyZWVCdXN5ID0gYXN5bmMgKFxuICBxdWVyeTogQXZhaWxhYmlsaXR5UXVlcnksXG4pOiBQcm9taXNlPEZyZWVCdXN5UmVzcG9uc2VbXT4gPT4ge1xuICByZXR1cm4gZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChxdWVyeS5jb21wb25lbnRfaWQpfS9jYWxlbmRhcnMvZnJlZS1idXN5YCxcbiAgICBnZXRGZXRjaENvbmZpZyh7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgY29tcG9uZW50X2lkOiBxdWVyeS5jb21wb25lbnRfaWQsXG4gICAgICBhY2Nlc3NfdG9rZW46IHF1ZXJ5LmFjY2Vzc190b2tlbixcbiAgICAgIGJvZHk6IHF1ZXJ5LmJvZHksXG4gICAgfSksXG4gIClcbiAgICAudGhlbihhc3luYyAoYXBpUmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8RnJlZUJ1c3lSZXNwb25zZVtdPj4oXG4gICAgICAgIGFwaVJlc3BvbnNlLFxuICAgICAgKTtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQXZhaWxhYmlsaXR5ID0gYXN5bmMgKFxuICBxdWVyeTogQXZhaWxhYmlsaXR5UXVlcnksXG4pOiBQcm9taXNlPEF2YWlsYWJpbGl0eVJlc3BvbnNlPiA9PiB7XG4gIHJldHVybiBmZXRjaChcbiAgICBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKHF1ZXJ5LmNvbXBvbmVudF9pZCl9L2NhbGVuZGFycy9hdmFpbGFiaWxpdHlgLFxuICAgIGdldEZldGNoQ29uZmlnKHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBjb21wb25lbnRfaWQ6IHF1ZXJ5LmNvbXBvbmVudF9pZCxcbiAgICAgIGFjY2Vzc190b2tlbjogcXVlcnkuYWNjZXNzX3Rva2VuLFxuICAgICAgYm9keTogcXVlcnkuYm9keSxcbiAgICB9KSxcbiAgKVxuICAgIC50aGVuKGFzeW5jIChhcGlSZXNwb25zZSkgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGF3YWl0IGhhbmRsZVJlc3BvbnNlPFxuICAgICAgICBNaWRkbGV3YXJlUmVzcG9uc2U8QXZhaWxhYmlsaXR5UmVzcG9uc2U+XG4gICAgICA+KGFwaVJlc3BvbnNlKTtcbiAgICAgIC8vIE5vcm1hbGl6ZSByZXNwb25zZSAuc3RhcnQgYW5kIC5lbmQgdG8gLnN0YXJ0X3RpbWUgYW5kIC5lbmRfdGltZSB0byBtYWtlIHVwIGZvciBkaXNjcmVwZW5kY3kgaW4gdGhlIE55bGFzIEFQSTogaHR0cHM6Ly9kZXZlbG9wZXIubnlsYXMuY29tL2RvY3MvY29ubmVjdGl2aXR5L2NhbGVuZGFyL2NhbGVuZGFyLWF2YWlsYWJpbGl0eS8jYXZhaWxhYmlsaXR5LXJlc3BvbnNlXG4gICAgICAvLyBBUEkgc3Rvcnk6IGh0dHBzOi8vYXBwLnNob3J0Y3V0LmNvbS9ueWxhcy9zdG9yeS83MzE5Ni9cbiAgICAgIGpzb24ucmVzcG9uc2UudGltZV9zbG90cyA9IGpzb24ucmVzcG9uc2UudGltZV9zbG90cy5tYXAoKHNsb3QpID0+IHtcbiAgICAgICAgc2xvdC5zdGFydF90aW1lID0gc2xvdC5zdGFydCB8fCAwO1xuICAgICAgICBzbG90LmVuZF90aW1lID0gc2xvdC5lbmQgfHwgMDtcbiAgICAgICAgZGVsZXRlIHNsb3Quc3RhcnQ7XG4gICAgICAgIGRlbGV0ZSBzbG90LmVuZDtcbiAgICAgICAgcmV0dXJuIHNsb3Q7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ29uc2VjdXRpdmVBdmFpbGFiaWxpdHkgPSBhc3luYyAoXG4gIHF1ZXJ5OiBDb25zZWN1dGl2ZUF2YWlsYWJpbGl0eVF1ZXJ5LFxuKTogUHJvbWlzZTxDb25zZWN1dGl2ZUV2ZW50W11bXT4gPT4ge1xuICByZXR1cm4gZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChcbiAgICAgIHF1ZXJ5LmNvbXBvbmVudF9pZCxcbiAgICApfS9jYWxlbmRhcnMvYXZhaWxhYmlsaXR5L2NvbnNlY3V0aXZlYCxcbiAgICBnZXRGZXRjaENvbmZpZyh7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgY29tcG9uZW50X2lkOiBxdWVyeS5jb21wb25lbnRfaWQsXG4gICAgICBhY2Nlc3NfdG9rZW46IHF1ZXJ5LmFjY2Vzc190b2tlbixcbiAgICAgIGJvZHk6IHF1ZXJ5LmJvZHksXG4gICAgfSksXG4gIClcbiAgICAudGhlbihhc3luYyAoYXBpUmVzcG9uc2UpOiBQcm9taXNlPENvbnNlY3V0aXZlRXZlbnRbXVtdPiA9PiB7XG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgaGFuZGxlUmVzcG9uc2U8XG4gICAgICAgIE1pZGRsZXdhcmVSZXNwb25zZTxQcmVEYXRlZFRpbWVTbG90W11bXT5cbiAgICAgID4oYXBpUmVzcG9uc2UpO1xuICAgICAgY29uc3QgcmVzcG9uc2U6IFByZURhdGVkVGltZVNsb3RbXVtdID1cbiAgICAgICAganNvbi5yZXNwb25zZT8ubWFwKChibG9ja1Nsb3QpID0+IHtcbiAgICAgICAgICBibG9ja1Nsb3QgPSBibG9ja1Nsb3QubWFwKChzbG90OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHNsb3Quc3RhcnRfdGltZSA9IG5ldyBEYXRlKHNsb3Quc3RhcnRfdGltZSAqIDEwMDApO1xuICAgICAgICAgICAgc2xvdC5lbmRfdGltZSA9IG5ldyBEYXRlKHNsb3QuZW5kX3RpbWUgKiAxMDAwKTtcbiAgICAgICAgICAgIHJldHVybiBzbG90O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBibG9ja1Nsb3Q7XG4gICAgICAgIH0pIHx8IFtdO1xuICAgICAgY29uc3QgaHlkcmF0ZWRSZXNwb25zZSA9IGh5ZHJhdGVTbG90c1RvRXZlbnRzKFxuICAgICAgICByZXNwb25zZSxcbiAgICAgICAgcXVlcnkuYm9keS5ldmVudHMsXG4gICAgICApO1xuICAgICAgY29uc3QgZGVkdXBlZFJlc3BvbnNlID1cbiAgICAgICAgcmVtb3ZlU2ltdWx0YW5lb3VzQXZhaWxhYmlsaXR5T3B0aW9ucyhoeWRyYXRlZFJlc3BvbnNlKTtcbiAgICAgIHJldHVybiBkZWR1cGVkUmVzcG9uc2U7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihxdWVyeS5jb21wb25lbnRfaWQsIGVycm9yKSk7XG59O1xuXG4vLyBEb2luZyB0aGUgYmVzdCB3ZSBjYW4gd2l0aCB3aGF0IHdlJ3ZlIGdvdDogL2NhbGVuZGFycy9hdmFpbGFiaWxpdHkvY29uc2VjdXRpdmUgZG9lc24ndCByZXR1cm4gYW55IGluZm8gb3RoZXIgdGhhbiBlbWFpbHNcbi8vIGFuZCBzdGFydC9lbmQgdGltZXMuIFRoaXMgbWVhbnMgdGhhdCBpZiB3ZSBoYXZlIHRvIGV2ZW50cyAoRXZlbnREZWZpbml0aW9ucykgd2l0aCB0aGUgc2FtZSBlbWFpbCBhZGRyZXNzZXM/IFdlJ3JlIHNob290aW5nIGluIHRoZSBkYXJrIGFib3V0IHdoaWNoIGlzIHdoaWNoLlxuLy8gVE9ETzogYWxsb3cgZm9yIGFuIGluZGljYXRvciBvbiB0aGUgQVBJIHNpZGVcbmZ1bmN0aW9uIGh5ZHJhdGVTbG90c1RvRXZlbnRzKFxuICBhdmFpbGFiaWxpdGllczogUHJlRGF0ZWRUaW1lU2xvdFtdW10sXG4gIGV2ZW50czogRXZlbnREZWZpbml0aW9uW10sXG4pOiBDb25zZWN1dGl2ZUV2ZW50W11bXSB7XG4gIHJldHVybiBhdmFpbGFiaWxpdGllcy5tYXAoKGJsb2NrKSA9PiB7XG4gICAgcmV0dXJuIGJsb2NrLm1hcCgoc3ViZXZlbnQpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN1YmV2ZW50LFxuICAgICAgICAuLi5ldmVudHMuZmluZChcbiAgICAgICAgICAoZXZlbnRkZWYpID0+XG4gICAgICAgICAgICBldmVudGRlZi5wYXJ0aWNpcGFudEVtYWlscy5sZW5ndGggPT09IHN1YmV2ZW50LmVtYWlscy5sZW5ndGggJiZcbiAgICAgICAgICAgIGV2ZW50ZGVmLnBhcnRpY2lwYW50RW1haWxzLmV2ZXJ5KChlbWFpbCkgPT5cbiAgICAgICAgICAgICAgc3ViZXZlbnQuZW1haWxzLmluY2x1ZGVzKGVtYWlsKSxcbiAgICAgICAgICAgICksXG4gICAgICAgICksXG4gICAgICB9O1xuICAgIH0pO1xuICB9KSBhcyBhbnlbXVtdOyAvLyBUT0RPOiBIb3cgdG8gYmVzdCBjb2VyY2UgUHJlRGF0ZWRUaW1lU2xvdFtdW10gdG8gQ29uc2VjdXRpdmVFdmVudFtdW10/IHNwcmVhZC1jb21iaW5lZCByZXR1cm4gaGFuZGxlcyBpdC5cbn1cblxuLy8gV2UgZG9uJ3Qgd2FudCB0byBvdmVyYnVyZGVuIG91ciB1c2VycyB3aXRoIHRvbyBtdWNoIHN3ZWV0IGhvcnJpYmxlIGZyZWVkb20gb2YgY2hvaWNlO1xuLy8gdGhlIC9jYWxlbmRhcnMvYXZhaWxhYmlsaXR5L2NvbnNlY3V0aXZlIGVuZHBvaW50IHJldHVybnMgb3JkZXIgcGVybXV0YXRpb25zIHdpdGggc2FtZSB0aW1lIHNsb3RzO1xuLy8gQ3VsbCB0aGVtIGRvd24gdG8ganVzdCB0aGUgZmlyc3QgdGhhdCBleGlzdHMgcGVyIHRpbWVzbG90LlxuZnVuY3Rpb24gcmVtb3ZlU2ltdWx0YW5lb3VzQXZhaWxhYmlsaXR5T3B0aW9ucyhcbiAgYXZhaWxhYmlsaXRpZXM6IENvbnNlY3V0aXZlRXZlbnRbXVtdLFxuKSB7XG4gIGNvbnN0IGJsb2NrU2V0ID0gbmV3IFNldCgpO1xuICByZXR1cm4gYXZhaWxhYmlsaXRpZXMuZmlsdGVyKChibG9jaykgPT4ge1xuICAgIGNvbnN0IGJsb2NrU3RyaW5nID0gYCR7YmxvY2tbMF0uc3RhcnRfdGltZX1fJHtcbiAgICAgIGJsb2NrW2Jsb2NrLmxlbmd0aCAtIDFdLmVuZF90aW1lXG4gICAgfWA7XG4gICAgaWYgKGJsb2NrU2V0LmhhcyhibG9ja1N0cmluZykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmxvY2tTZXQuYWRkKGJsb2NrU3RyaW5nKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBXcml0YWJsZSwgd3JpdGFibGUgfSBmcm9tIFwic3ZlbHRlL3N0b3JlXCI7XG5pbXBvcnQgeyBmZXRjaEF2YWlsYWJpbGl0eSB9IGZyb20gXCIuLi9jb25uZWN0aW9ucy9hdmFpbGFiaWxpdHlcIjtcbmltcG9ydCB0eXBlIHtcbiAgQXZhaWxhYmlsaXR5UXVlcnksXG4gIEF2YWlsYWJpbGl0eVJlc3BvbnNlLFxufSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvQXZhaWxhYmlsaXR5XCI7XG5cbnR5cGUgQXZhaWxhYmlsaXR5U3RvcmUgPSBSZWNvcmQ8c3RyaW5nLCBQcm9taXNlPEF2YWlsYWJpbGl0eVJlc3BvbnNlPj47XG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoKTogV3JpdGFibGU8QXZhaWxhYmlsaXR5U3RvcmU+IHtcbiAgY29uc3QgZ2V0ID0gKFxuICAgIHRhcmdldDogQXZhaWxhYmlsaXR5U3RvcmUsXG4gICAga2V5OiBzdHJpbmcsXG4gICk6IFByb21pc2U8QXZhaWxhYmlsaXR5UmVzcG9uc2U+IHwgdm9pZCA9PiB7XG4gICAgY29uc3QgYWNjZXNzb3I6IEF2YWlsYWJpbGl0eVF1ZXJ5ID0gSlNPTi5wYXJzZShrZXkpO1xuICAgIC8vIEF2b2lkIHNhdmluZyBmb3JjZVJlbG9hZCBwcm9wZXJ0eSBhcyBwYXJ0IG9mIHN0b3JlIGtleVxuICAgIGNvbnN0IGFjY2Vzc29yQ29weSA9IHsgLi4uYWNjZXNzb3IgfTtcbiAgICBkZWxldGUgYWNjZXNzb3JDb3B5LmZvcmNlUmVsb2FkO1xuICAgIGtleSA9IEpTT04uc3RyaW5naWZ5KGFjY2Vzc29yQ29weSk7XG5cbiAgICBpZiAoXG4gICAgICAhYWNjZXNzb3IuY29tcG9uZW50X2lkIHx8XG4gICAgICAhYWNjZXNzb3I/LmJvZHk/LnN0YXJ0X3RpbWUgfHxcbiAgICAgICFhY2Nlc3Nvcj8uYm9keT8uZW5kX3RpbWVcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRhcmdldFtrZXldIHx8IGFjY2Vzc29yLmZvcmNlUmVsb2FkKSB7XG4gICAgICBjb25zdCBmZXRjaFByb21pc2UgPSBmZXRjaEF2YWlsYWJpbGl0eShhY2Nlc3Nvcik7XG4gICAgICBzdG9yZS51cGRhdGUoKHN0b3JlKSA9PiB7XG4gICAgICAgIHN0b3JlW2tleV0gPSBmZXRjaFByb21pc2U7XG4gICAgICAgIHJldHVybiBzdG9yZTtcbiAgICAgIH0pO1xuICAgICAgdGFyZ2V0W2tleV0gPSBmZXRjaFByb21pc2U7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgfTtcbiAgY29uc3Qgc3RvcmUgPSB3cml0YWJsZShuZXcgUHJveHk8QXZhaWxhYmlsaXR5U3RvcmU+KHt9LCB7IGdldCB9KSk7XG4gIHJldHVybiBzdG9yZTtcbn1cblxuZXhwb3J0IGNvbnN0IEF2YWlsYWJpbGl0eVN0b3JlID0gaW5pdGlhbGl6ZSgpO1xuIiwiaW1wb3J0IHsgV3JpdGFibGUsIHdyaXRhYmxlIH0gZnJvbSBcInN2ZWx0ZS9zdG9yZVwiO1xuaW1wb3J0IHsgZmV0Y2hDb25zZWN1dGl2ZUF2YWlsYWJpbGl0eSB9IGZyb20gXCIuLi9jb25uZWN0aW9ucy9hdmFpbGFiaWxpdHlcIjtcbmltcG9ydCB0eXBlIHsgQ29uc2VjdXRpdmVBdmFpbGFiaWxpdHlRdWVyeSB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9BdmFpbGFiaWxpdHlcIjtcbmltcG9ydCB0eXBlIHsgQ29uc2VjdXRpdmVFdmVudCB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9Cb29raW5nXCI7XG5cbnR5cGUgQ29uc2VjdXRpdmVBdmFpbGFiaWxpdHlTdG9yZSA9IFJlY29yZDxcbiAgc3RyaW5nLFxuICBQcm9taXNlPENvbnNlY3V0aXZlRXZlbnRbXVtdPlxuPjtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpOiBXcml0YWJsZTxDb25zZWN1dGl2ZUF2YWlsYWJpbGl0eVN0b3JlPiB7XG4gIGNvbnN0IGdldCA9IChcbiAgICB0YXJnZXQ6IENvbnNlY3V0aXZlQXZhaWxhYmlsaXR5U3RvcmUsXG4gICAga2V5OiBzdHJpbmcsXG4gICk6IFByb21pc2U8Q29uc2VjdXRpdmVFdmVudFtdW10+IHwgdm9pZCA9PiB7XG4gICAgY29uc3QgYWNjZXNzb3I6IENvbnNlY3V0aXZlQXZhaWxhYmlsaXR5UXVlcnkgPSBKU09OLnBhcnNlKGtleSk7XG5cbiAgICBpZiAoXG4gICAgICAhYWNjZXNzb3IuY29tcG9uZW50X2lkIHx8XG4gICAgICAhYWNjZXNzb3I/LmJvZHk/LnN0YXJ0X3RpbWUgfHxcbiAgICAgICFhY2Nlc3Nvcj8uYm9keT8uZW5kX3RpbWVcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICBjb25zdCBmZXRjaFByb21pc2UgPSBmZXRjaENvbnNlY3V0aXZlQXZhaWxhYmlsaXR5KGFjY2Vzc29yKTtcbiAgICAgIHN0b3JlLnVwZGF0ZSgoc3RvcmUpID0+IHtcbiAgICAgICAgc3RvcmVba2V5XSA9IGZldGNoUHJvbWlzZTtcbiAgICAgICAgcmV0dXJuIHN0b3JlO1xuICAgICAgfSk7XG4gICAgICB0YXJnZXRba2V5XSA9IGZldGNoUHJvbWlzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICB9O1xuICBjb25zdCBzdG9yZSA9IHdyaXRhYmxlKG5ldyBQcm94eTxDb25zZWN1dGl2ZUF2YWlsYWJpbGl0eVN0b3JlPih7fSwgeyBnZXQgfSkpO1xuICByZXR1cm4gc3RvcmU7XG59XG5cbmV4cG9ydCBjb25zdCBDb25zZWN1dGl2ZUF2YWlsYWJpbGl0eVN0b3JlID0gaW5pdGlhbGl6ZSgpO1xuIiwiaW1wb3J0IHsgd3JpdGFibGUgfSBmcm9tIFwic3ZlbHRlL3N0b3JlXCI7XG5pbXBvcnQge1xuICBmZXRjaENvbnRhY3RzLFxuICBmZXRjaENvbnRhY3RzQnlRdWVyeSxcbn0gZnJvbSBcIkBjb21tb25zL2Nvbm5lY3Rpb25zL2NvbnRhY3RzXCI7XG5pbXBvcnQgdHlwZSB7XG4gIENvbnRhY3QsXG4gIENvbnRhY3RFbWFpbCxcbiAgQ29udGFjdFNlYXJjaFF1ZXJ5LFxuICBDb250YWN0c1F1ZXJ5LFxuICBDb250YWN0c1F1ZXJ5UGFyYW1zLFxufSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvQ29udGFjdHNcIjtcblxubGV0IGNvbnRhY3RzTWFwOiBSZWNvcmQ8c3RyaW5nLCBDb250YWN0W10+ID0ge307XG5cbmZ1bmN0aW9uIGZpbHRlckNvbnRhY3RzKGNvbnRhY3RzOiBDb250YWN0W10pIHtcbiAgcmV0dXJuIGNvbnRhY3RzXG4gICAgLmZpbHRlcihcbiAgICAgIChjb250YWN0KSA9PlxuICAgICAgICAhIWNvbnRhY3QuZ2l2ZW5fbmFtZSB8fFxuICAgICAgICAhIWNvbnRhY3Quc3VybmFtZSB8fFxuICAgICAgICAoQXJyYXkuaXNBcnJheShjb250YWN0LmVtYWlscykgJiYgY29udGFjdC5lbWFpbHMubGVuZ3RoID4gMCksXG4gICAgKVxuICAgIC5tYXAoKGNvbnRhY3QpID0+IHtcbiAgICAgIC8vIEVuc3VyZSBlYWNoIGNvbnRhY3QgaGFzIGF0IGxlYXN0IG9uZSBcImVtYWlsXCIgdG8gbG9hZFxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGNvbnRhY3QuZW1haWxzKSB8fCBjb250YWN0LmVtYWlscy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29udGFjdC5lbWFpbHMgPSBbeyBlbWFpbDogXCJcIiB9IGFzIENvbnRhY3RFbWFpbF07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250YWN0O1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplQ29udGFjdHMoKSB7XG4gIGNvbnN0IHsgc3Vic2NyaWJlLCBzZXQsIHVwZGF0ZSB9ID0gd3JpdGFibGU8UmVjb3JkPHN0cmluZywgQ29udGFjdFtdPj4oe30pO1xuICByZXR1cm4ge1xuICAgIHN1YnNjcmliZSxcbiAgICBhZGRDb250YWN0czogYXN5bmMgKHF1ZXJ5OiBDb250YWN0c1F1ZXJ5LCBwYXJhbXM6IENvbnRhY3RzUXVlcnlQYXJhbXMpID0+IHtcbiAgICAgIGNvbnN0IHF1ZXJ5S2V5ID0gSlNPTi5zdHJpbmdpZnkocXVlcnkpO1xuICAgICAgaWYgKFxuICAgICAgICAhY29udGFjdHNNYXBbcXVlcnlLZXldICYmXG4gICAgICAgIChxdWVyeS5jb21wb25lbnRfaWQgfHwgcXVlcnkuYWNjZXNzX3Rva2VuKVxuICAgICAgKSB7XG4gICAgICAgIGlmIChwYXJhbXMub2Zmc2V0ID09PSAwKSB7XG4gICAgICAgICAgLy8gRW5zdXJlIHRoZSBzdG9yZSBpcyBlbXB0eSBpZiBvdXIgb2Zmc2V0IGlzIDBcbiAgICAgICAgICBDb250YWN0U3RvcmUucmVzZXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbnRhY3RzID1cbiAgICAgICAgICAoYXdhaXQgZmV0Y2hDb250YWN0cyhxdWVyeSwgcGFyYW1zKVxuICAgICAgICAgICAgLnRoZW4oKGNvbnRhY3RzKSA9PiBmaWx0ZXJDb250YWN0cyhjb250YWN0cykpXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4gW10pKSA/PyBbXTtcblxuICAgICAgICBjb250YWN0c01hcFtxdWVyeUtleV0gPSBjb250YWN0c01hcFtxdWVyeUtleV1cbiAgICAgICAgICA/IFsuLi5jb250YWN0c01hcFtxdWVyeUtleV0sIC4uLmNvbnRhY3RzXVxuICAgICAgICAgIDogY29udGFjdHM7XG5cbiAgICAgICAgdXBkYXRlKChjb250YWN0cykgPT4ge1xuICAgICAgICAgIGNvbnRhY3RzW3F1ZXJ5S2V5XSA9IGNvbnRhY3RzTWFwW3F1ZXJ5S2V5XTtcbiAgICAgICAgICByZXR1cm4geyAuLi5jb250YWN0cyB9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvbnRhY3RzTWFwW3F1ZXJ5S2V5XTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFkZENvbnRhY3Q6IGFzeW5jIChxdWVyeTogQ29udGFjdFNlYXJjaFF1ZXJ5KSA9PiB7XG4gICAgICBjb25zdCBxdWVyeUtleSA9IEpTT04uc3RyaW5naWZ5KHF1ZXJ5KTtcbiAgICAgIGlmIChcbiAgICAgICAgIWNvbnRhY3RzTWFwW3F1ZXJ5S2V5XSAmJlxuICAgICAgICAocXVlcnkuY29tcG9uZW50X2lkIHx8IHF1ZXJ5LmFjY2Vzc190b2tlbilcbiAgICAgICkge1xuICAgICAgICBjb25zdCBjb250YWN0cyA9XG4gICAgICAgICAgKGF3YWl0IGZldGNoQ29udGFjdHNCeVF1ZXJ5KHF1ZXJ5KVxuICAgICAgICAgICAgLnRoZW4oKGNvbnRhY3RzKSA9PiBmaWx0ZXJDb250YWN0cyhjb250YWN0cykpXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4gW10pKSA/PyBbXTtcblxuICAgICAgICBjb250YWN0c01hcFtxdWVyeUtleV0gPSBjb250YWN0c01hcFtxdWVyeUtleV1cbiAgICAgICAgICA/IFsuLi5jb250YWN0c01hcFtxdWVyeUtleV0sIC4uLmNvbnRhY3RzXVxuICAgICAgICAgIDogY29udGFjdHM7XG4gICAgICAgIHVwZGF0ZSgoY29udGFjdHMpID0+IHtcbiAgICAgICAgICBjb250YWN0c1txdWVyeUtleV0gPSBjb250YWN0c01hcFtxdWVyeUtleV07XG4gICAgICAgICAgcmV0dXJuIHsgLi4uY29udGFjdHMgfTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGFjdHNNYXBbcXVlcnlLZXldO1xuICAgIH0sXG4gICAgcmVzZXQ6ICgpID0+IHtcbiAgICAgIGNvbnRhY3RzTWFwID0ge307XG4gICAgICBzZXQoe30pO1xuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBDb250YWN0U3RvcmUgPSBpbml0aWFsaXplQ29udGFjdHMoKTtcbiIsImltcG9ydCB7IHdyaXRhYmxlIH0gZnJvbSBcInN2ZWx0ZS9zdG9yZVwiO1xuaW1wb3J0IHsgZmV0Y2hDb250YWN0SW1hZ2UgfSBmcm9tIFwiQGNvbW1vbnMvY29ubmVjdGlvbnMvY29udGFjdHNcIjtcbmltcG9ydCB0eXBlIHsgQ29udGFjdHNRdWVyeSB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9Db250YWN0c1wiO1xuXG5jb25zdCBjb250YWN0QXZhdGFyTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVDb250YWN0QXZhdGFycygpIHtcbiAgY29uc3QgeyBzdWJzY3JpYmUsIHNldCB9ID0gd3JpdGFibGU8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4oe30pO1xuICByZXR1cm4ge1xuICAgIHN1YnNjcmliZSxcbiAgICBnZXRDb250YWN0QXZhdGFyOiBhc3luYyAoXG4gICAgICBxdWVyeTogQ29udGFjdHNRdWVyeSxcbiAgICAgIGNvbnRhY3RfaWQ6IHN0cmluZyxcbiAgICAgIHJlZnJlc2ggPSBmYWxzZSxcbiAgICApID0+IHtcbiAgICAgIGlmICghY29udGFjdEF2YXRhck1hcFtjb250YWN0X2lkXSB8fCByZWZyZXNoKSB7XG4gICAgICAgIGNvbnN0IGF2YXRhciA9IGF3YWl0IGZldGNoQ29udGFjdEltYWdlKHF1ZXJ5LCBjb250YWN0X2lkKVxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcylcbiAgICAgICAgICAuY2F0Y2goKCkgPT4gXCJcIik7XG4gICAgICAgIGlmIChhdmF0YXIpIHtcbiAgICAgICAgICBjb250YWN0QXZhdGFyTWFwW2NvbnRhY3RfaWRdID0gYXZhdGFyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGFjdEF2YXRhck1hcFtjb250YWN0X2lkXTtcbiAgICB9LFxuICAgIHJlc2V0OiAoKSA9PiBzZXQoe30pLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgQ29udGFjdEF2YXRhclN0b3JlID0gaW5pdGlhbGl6ZUNvbnRhY3RBdmF0YXJzKCk7XG4iLCJpbXBvcnQgeyBkZXJpdmVkLCBSZWFkYWJsZSwgd3JpdGFibGUgfSBmcm9tIFwic3ZlbHRlL3N0b3JlXCI7XG5pbXBvcnQge1xuICBmZXRjaFRocmVhZHMsXG4gIGZldGNoU2VhcmNoUmVzdWx0VGhyZWFkcyxcbiAgdXBkYXRlVGhyZWFkLFxuICBmZXRjaFRocmVhZENvdW50LFxufSBmcm9tIFwiLi4vY29ubmVjdGlvbnMvdGhyZWFkc1wiO1xuaW1wb3J0IHR5cGUge1xuICBUaHJlYWQsXG4gIE1haWxib3hRdWVyeSxcbiAgQ29udmVyc2F0aW9uUXVlcnksXG4gIE1lc3NhZ2UsXG4gIENvbnZlcnNhdGlvbixcbn0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG5pbXBvcnQgeyBzaWxlbmNlIH0gZnJvbSBcIkBjb21tb25zXCI7XG5cbmludGVyZmFjZSBQYWdpbmF0ZWRUaHJlYWRzIHtcbiAgaXNMb2FkZWQ6IGJvb2xlYW47XG4gIHRocmVhZHM6IFRocmVhZFtdO1xufVxuXG5hc3luYyBmdW5jdGlvbiBpbml0aWFsaXplUGFnaW5hdGVkVGhyZWFkcyh0b3RhbFBhZ2VzOiBudW1iZXIpIHtcbiAgY29uc3QgcGFnaW5hdGVkVGhyZWFkcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWxQYWdlczsgaSsrKSB7XG4gICAgcGFnaW5hdGVkVGhyZWFkcy5wdXNoKHtcbiAgICAgIGlzTG9hZGVkOiBmYWxzZSxcbiAgICAgIHRocmVhZHM6IDxUaHJlYWRbXT5bXSxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcGFnaW5hdGVkVGhyZWFkcztcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVRocmVhZHMoKSB7XG4gIGNvbnN0IHsgc3Vic2NyaWJlLCBzZXQsIHVwZGF0ZSB9ID0gd3JpdGFibGU8XG4gICAgUmVjb3JkPHN0cmluZywgUGFnaW5hdGVkVGhyZWFkc1tdPlxuICA+KHt9KTtcbiAgbGV0IHRocmVhZHNNYXA6IFJlY29yZDxzdHJpbmcsIFBhZ2luYXRlZFRocmVhZHNbXT4gPSB7fTtcbiAgbGV0IHRvdGFsSXRlbXM6IG51bWJlcjtcblxuICByZXR1cm4ge1xuICAgIHN1YnNjcmliZSxcbiAgICBzZXQsXG4gICAgZ2V0VGhyZWFkczogYXN5bmMgKFxuICAgICAgcXVlcnk6IE1haWxib3hRdWVyeSxcbiAgICAgIGN1cnJlbnRQYWdlOiBudW1iZXIsXG4gICAgICBwYWdlU2l6ZTogbnVtYmVyLFxuICAgICAgZm9yY2VSZWZyZXNoID0gZmFsc2UsXG4gICAgKSA9PiB7XG4gICAgICBjb25zdCBxdWVyeUtleSA9IEpTT04uc3RyaW5naWZ5KHF1ZXJ5KTtcblxuICAgICAgaWYgKCFxdWVyeS5jb21wb25lbnRfaWQgJiYgIXF1ZXJ5LmFjY2Vzc190b2tlbikge1xuICAgICAgICAvLyBUaGlzIHNob3VsZCBhbGVydCB0aGUgdXNlclxuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG5cbiAgICAgIGlmICh0b3RhbEl0ZW1zID09PSB1bmRlZmluZWQgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIC8vIFRPRE86IHRoaXMgY2FuIGNvdW50IHBhc3NlZC1pbiBJRHNcbiAgICAgICAgY29uc3QgdGhyZWFkQ291bnQgPSBxdWVyeS50aHJlYWRfaWRzXG4gICAgICAgICAgPyBxdWVyeS50aHJlYWRfaWRzLmxlbmd0aFxuICAgICAgICAgIDogYXdhaXQgZmV0Y2hUaHJlYWRDb3VudChxdWVyeSkuY2F0Y2goc2lsZW5jZSk7XG5cbiAgICAgICAgaWYgKHRocmVhZENvdW50KSB7XG4gICAgICAgICAgdG90YWxJdGVtcyA9IHRocmVhZENvdW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSh0aHJlYWRzTWFwW3F1ZXJ5S2V5XSkgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIGNvbnN0IHRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodG90YWxJdGVtcyAvIHBhZ2VTaXplKTtcbiAgICAgICAgdGhyZWFkc01hcFtxdWVyeUtleV0gPSBhd2FpdCBpbml0aWFsaXplUGFnaW5hdGVkVGhyZWFkcyh0b3RhbFBhZ2VzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgLy8gU2hvdWxkbid0IHRoaXMgYmUgYW4gaW50ZXJuYWwgZXJyb3I/XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH0gZWxzZSBpZiAoIXRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS5pc0xvYWRlZCkge1xuICAgICAgICBjb25zdCB0aHJlYWRzID0gYXdhaXQgZmV0Y2hUaHJlYWRzKFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHBhZ2VTaXplLFxuICAgICAgICAgIGN1cnJlbnRQYWdlICogcGFnZVNpemUsXG4gICAgICAgICkuY2F0Y2goc2lsZW5jZSk7XG5cbiAgICAgICAgaWYgKHRocmVhZHMpIHtcbiAgICAgICAgICB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0udGhyZWFkcyA9IHRocmVhZHM7XG4gICAgICAgICAgdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB1cGRhdGUoKHRocmVhZHMpID0+IHtcbiAgICAgICAgdGhyZWFkc1txdWVyeUtleV0gPSB0aHJlYWRzTWFwW3F1ZXJ5S2V5XTtcbiAgICAgICAgcmV0dXJuIHsgLi4udGhyZWFkcyB9O1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0udGhyZWFkcztcbiAgICB9LFxuICAgIGdldE51bWJlck9mSXRlbXM6IGFzeW5jIChxdWVyeTogTWFpbGJveFF1ZXJ5KSA9PiB7XG4gICAgICBpZiAoIXF1ZXJ5LmNvbXBvbmVudF9pZCAmJiAhcXVlcnkuYWNjZXNzX3Rva2VuKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHRvdGFsSXRlbXMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgY29uc3QgdGhyZWFkQ291bnQgPSBhd2FpdCBmZXRjaFRocmVhZENvdW50KHF1ZXJ5KS5jYXRjaChzaWxlbmNlKTtcblxuICAgICAgICBpZiAodGhyZWFkQ291bnQpIHtcbiAgICAgICAgICB0b3RhbEl0ZW1zID0gdGhyZWFkQ291bnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0b3RhbEl0ZW1zO1xuICAgIH0sXG4gICAgLy8gVE9ETyAtIFVzZSByZWFsIHBhZ2luYXRpb24gd2hlbiBzZWFyY2ggZW5kcG9pbnQgc3VwcG9ydHMgaXRcbiAgICBnZXRUaHJlYWRzV2l0aFNlYXJjaEtleXdvcmQ6IGFzeW5jIChcbiAgICAgIHF1ZXJ5OiBNYWlsYm94UXVlcnksXG4gICAgICBmb3JjZVJlZnJlc2ggPSBmYWxzZSxcbiAgICApID0+IHtcbiAgICAgIGlmICghcXVlcnkuY29tcG9uZW50X2lkICYmICFxdWVyeS5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgY29uc3QgcXVlcnlLZXkgPSBKU09OLnN0cmluZ2lmeShxdWVyeSk7XG5cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSh0aHJlYWRzTWFwW3F1ZXJ5S2V5XSkgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIHRocmVhZHNNYXBbcXVlcnlLZXldID0gYXdhaXQgaW5pdGlhbGl6ZVBhZ2luYXRlZFRocmVhZHMoMSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhyZWFkc01hcFtxdWVyeUtleV1bMF0uaXNMb2FkZWQgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdFRocmVhZHMgPSBhd2FpdCBmZXRjaFNlYXJjaFJlc3VsdFRocmVhZHMocXVlcnkpLmNhdGNoKFxuICAgICAgICAgIHNpbGVuY2UsXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHNlYXJjaFJlc3VsdFRocmVhZHMpIHtcbiAgICAgICAgICB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVswXS50aHJlYWRzID0gc2VhcmNoUmVzdWx0VGhyZWFkcztcbiAgICAgICAgICB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVswXS5pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHVwZGF0ZSgodGhyZWFkcykgPT4ge1xuICAgICAgICB0aHJlYWRzW3F1ZXJ5S2V5XSA9IHRocmVhZHNNYXBbcXVlcnlLZXldO1xuICAgICAgICByZXR1cm4geyAuLi50aHJlYWRzIH07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVswXS50aHJlYWRzO1xuICAgIH0sXG4gICAgdXBkYXRlVGhyZWFkOiBhc3luYyAoXG4gICAgICB0aHJlYWRRdWVyeTogQ29udmVyc2F0aW9uUXVlcnksXG4gICAgICBxdWVyeUtleTogc3RyaW5nLFxuICAgICAgdXBkYXRlZFRocmVhZDogQ29udmVyc2F0aW9uLFxuICAgICAgY3VycmVudFBhZ2U6IG51bWJlcixcbiAgICAgIHBhZ2VTaXplOiBudW1iZXIsXG4gICAgKSA9PiB7XG4gICAgICBjb25zdCB0aHJlYWQgPSBhd2FpdCB1cGRhdGVUaHJlYWQodGhyZWFkUXVlcnksIHVwZGF0ZWRUaHJlYWQpLmNhdGNoKFxuICAgICAgICBzaWxlbmNlLFxuICAgICAgKTtcblxuICAgICAgaWYgKCF0aHJlYWRzTWFwW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0uaXNMb2FkZWQpIHtcbiAgICAgICAgLy8gcG9zc2libGUgaGFjazogcGFzcyBpbiBhcnJheSB0byBxdWVyeT9cbiAgICAgICAgY29uc3QgdGhyZWFkcyA9IGF3YWl0IGZldGNoVGhyZWFkcyhcbiAgICAgICAgICBKU09OLnBhcnNlKHF1ZXJ5S2V5KSxcbiAgICAgICAgICBwYWdlU2l6ZSxcbiAgICAgICAgICBjdXJyZW50UGFnZSAqIHBhZ2VTaXplLFxuICAgICAgICApLmNhdGNoKHNpbGVuY2UpO1xuXG4gICAgICAgIGlmICh0aHJlYWRzKSB7XG4gICAgICAgICAgdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdLnRocmVhZHMgPSB0aHJlYWRzO1xuICAgICAgICAgIHRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS5pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdLnRocmVhZHMgPSB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVtcbiAgICAgICAgY3VycmVudFBhZ2VcbiAgICAgIF0udGhyZWFkcy5tYXAoKGluaXRpYWxUaHJlYWQpID0+IHtcbiAgICAgICAgaWYgKHRocmVhZCAmJiBpbml0aWFsVGhyZWFkLmlkID09PSB0aHJlYWQuaWQpIHtcbiAgICAgICAgICBpbml0aWFsVGhyZWFkID0gT2JqZWN0LmFzc2lnbihpbml0aWFsVGhyZWFkLCB0aHJlYWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbml0aWFsVGhyZWFkO1xuICAgICAgfSk7XG4gICAgICB1cGRhdGUoKHRocmVhZHMpID0+IHtcbiAgICAgICAgdGhyZWFkc1txdWVyeUtleV0gPSB0aHJlYWRzTWFwW3F1ZXJ5S2V5XTtcbiAgICAgICAgcmV0dXJuIHsgLi4udGhyZWFkcyB9O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdLnRocmVhZHM7XG4gICAgfSxcbiAgICB1cGRhdGVUaHJlYWRTZWxlY3Rpb246IChcbiAgICAgIHF1ZXJ5S2V5OiBzdHJpbmcsXG4gICAgICBjdXJyZW50UGFnZTogbnVtYmVyLFxuICAgICAgdGhyZWFkSWQ/OiBzdHJpbmcsXG4gICAgKSA9PiB7XG4gICAgICBjb25zdCB0aHJlYWRzID0gdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdLnRocmVhZHM7XG5cbiAgICAgIGlmICghdGhyZWFkSWQpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uU3RhdGUgPSB0aHJlYWRzLnNvbWUoKHRocmVhZCkgPT4gdGhyZWFkLnNlbGVjdGVkKTtcbiAgICAgICAgZm9yIChjb25zdCB0aHJlYWQgb2YgdGhyZWFkcykge1xuICAgICAgICAgIHRocmVhZC5zZWxlY3RlZCA9ICFzZWxlY3Rpb25TdGF0ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGhyZWFkID0gdGhyZWFkcy5maW5kKCh0aHJlYWQpID0+IHRocmVhZC5pZCA9PT0gdGhyZWFkSWQpO1xuICAgICAgICBpZiAodGhyZWFkKSB7XG4gICAgICAgICAgdGhyZWFkLnNlbGVjdGVkID0gIXRocmVhZC5zZWxlY3RlZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdXBkYXRlKCh0aHJlYWRzKSA9PiB7XG4gICAgICAgIHRocmVhZHNbcXVlcnlLZXldID0gdGhyZWFkc01hcFtxdWVyeUtleV07XG4gICAgICAgIHJldHVybiB7IC4uLnRocmVhZHMgfTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS50aHJlYWRzO1xuICAgIH0sXG5cbiAgICByZXNldDogKCkgPT4ge1xuICAgICAgdGhyZWFkc01hcCA9IHt9O1xuICAgICAgc2V0KHt9KTtcbiAgICB9LFxuXG4gICAgaHlkcmF0ZU1lc3NhZ2VJblRocmVhZDogKFxuICAgICAgaW5jb21pbmdNZXNzYWdlOiBNZXNzYWdlLFxuICAgICAgcXVlcnk6IE1haWxib3hRdWVyeSxcbiAgICAgIGN1cnJlbnRQYWdlOiBudW1iZXIsXG4gICAgKSA9PiB7XG4gICAgICBjb25zdCBxdWVyeUtleSA9IEpTT04uc3RyaW5naWZ5KHF1ZXJ5KTtcblxuICAgICAgY29uc3QgZm91bmRUaHJlYWQgPSB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0/LnRocmVhZHM/LmZpbmQoXG4gICAgICAgICh0aHJlYWQpID0+IHRocmVhZC5pZCA9PT0gaW5jb21pbmdNZXNzYWdlLnRocmVhZF9pZCxcbiAgICAgICk7XG4gICAgICBpZiAoZm91bmRUaHJlYWQpIHtcbiAgICAgICAgY29uc3QgZm91bmRNZXNzYWdlID0gZm91bmRUaHJlYWQubWVzc2FnZXM/LmZpbmQoXG4gICAgICAgICAgKG1lc3NhZ2UpID0+IG1lc3NhZ2UuaWQgPT09IGluY29taW5nTWVzc2FnZS5pZCxcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGZvdW5kTWVzc2FnZSkge1xuICAgICAgICAgIGZvdW5kTWVzc2FnZS5ib2R5ID0gaW5jb21pbmdNZXNzYWdlLmJvZHk7XG4gICAgICAgICAgdXBkYXRlKCh0aHJlYWRzKSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5jb21pbmdNZXNzYWdlLnRocmVhZF9pZCkge1xuICAgICAgICAgICAgICBsZXQgdGhyZWFkVG9VcGRhdGUgPSB0aHJlYWRzW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0udGhyZWFkcy5maW5kKFxuICAgICAgICAgICAgICAgICh0aHJlYWQpID0+IHRocmVhZC5pZCA9PT0gZm91bmRUaHJlYWQuaWQsXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgaWYgKHRocmVhZFRvVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhyZWFkVG9VcGRhdGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZvdW5kVGhyZWFkKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IC4uLnRocmVhZHMgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBUaGlzIGhhcHBlbnMgd2hlbiBzb21lb25lIHNlbmRzIGEgbWVzc2FnZSB1c2luZyBjb21wb3NlciBhbmQgd2Ugd2FudFxuICAgICAgICAgIC8vIHRvIHVwZGF0ZSB0aGUgZXhpc3RpbmcgdGhyZWFkIHdpdGggdGhlIHNlbnQgbWVzc2FnZVxuICAgICAgICAgIHVwZGF0ZSgodGhyZWFkcykgPT4ge1xuICAgICAgICAgICAgaWYgKGluY29taW5nTWVzc2FnZS50aHJlYWRfaWQpIHtcbiAgICAgICAgICAgICAgbGV0IHRocmVhZFRvVXBkYXRlID0gdGhyZWFkc1txdWVyeUtleV1bY3VycmVudFBhZ2VdLnRocmVhZHMuZmluZChcbiAgICAgICAgICAgICAgICAodGhyZWFkKSA9PiB0aHJlYWQuaWQgPT09IGZvdW5kVGhyZWFkLmlkLFxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIGlmICh0aHJlYWRUb1VwZGF0ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gZm91bmRUaHJlYWQubWVzc2FnZXM7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXMucHVzaChpbmNvbWluZ01lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGZvdW5kVGhyZWFkLm1lc3NhZ2VzID0gbWVzc2FnZXM7XG4gICAgICAgICAgICAgICAgZm91bmRUaHJlYWQuc25pcHBldCA9IGluY29taW5nTWVzc2FnZS5zbmlwcGV0O1xuICAgICAgICAgICAgICAgIC8vUmVtb3ZlIGRyYWZ0IHdpdGggdGhlIHNhbWUgaWQgYXMgc2VudCBtZXNzYWdlXG4gICAgICAgICAgICAgICAgZm91bmRUaHJlYWQuZHJhZnRzID0gZm91bmRUaHJlYWQuZHJhZnRzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgIChkcmFmdCkgPT4gZHJhZnQuaWQgIT09IGluY29taW5nTWVzc2FnZS5pZCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRocmVhZFRvVXBkYXRlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmb3VuZFRocmVhZCkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyAuLi50aHJlYWRzIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS50aHJlYWRzO1xuICAgIH0sXG5cbiAgICAvL1VwZGF0ZSBkcmFmdHMgaW4gdGhlIHRocmVhZHMgc3RvcmVcbiAgICBoeWRyYXRlRHJhZnRJblRocmVhZDogKFxuICAgICAgaW5jb21pbmdEcmFmdDogTWVzc2FnZSxcbiAgICAgIHF1ZXJ5OiBNYWlsYm94UXVlcnksXG4gICAgICBjdXJyZW50UGFnZTogbnVtYmVyLFxuICAgICkgPT4ge1xuICAgICAgY29uc3QgcXVlcnlLZXkgPSBKU09OLnN0cmluZ2lmeShxdWVyeSk7XG5cbiAgICAgIGNvbnN0IGZvdW5kVGhyZWFkID0gdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdPy50aHJlYWRzPy5maW5kKFxuICAgICAgICAodGhyZWFkKSA9PiB0aHJlYWQuaWQgPT09IGluY29taW5nRHJhZnQudGhyZWFkX2lkLFxuICAgICAgKTtcbiAgICAgIGlmIChmb3VuZFRocmVhZCkge1xuICAgICAgICAvL1VwZGF0ZSBleGlzdGluZyBkcmFmdCBtZXNzYWdlIGluIHN0b3JlXG4gICAgICAgIGNvbnN0IGZvdW5kRHJhZnQgPSBmb3VuZFRocmVhZC5kcmFmdHM/LmZpbmQoXG4gICAgICAgICAgKGRyYWZ0KSA9PiBkcmFmdC5pZCA9PT0gaW5jb21pbmdEcmFmdC5pZCxcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoaW5jb21pbmdEcmFmdC50aHJlYWRfaWQpIHtcbiAgICAgICAgICBpZiAoZm91bmREcmFmdCkge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihmb3VuZERyYWZ0LCBpbmNvbWluZ0RyYWZ0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZHJhZnRzID0gZm91bmRUaHJlYWQuZHJhZnRzO1xuICAgICAgICAgICAgZHJhZnRzLnB1c2goaW5jb21pbmdEcmFmdCk7XG4gICAgICAgICAgICBmb3VuZFRocmVhZC5kcmFmdHMgPSBkcmFmdHM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdXBkYXRlKCh0aHJlYWRzKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGhyZWFkVG9VcGRhdGUgPSB0aHJlYWRzW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0udGhyZWFkcy5maW5kKFxuICAgICAgICAgICAgICAodGhyZWFkKSA9PiB0aHJlYWQuaWQgPT09IGZvdW5kVGhyZWFkLmlkLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmICh0aHJlYWRUb1VwZGF0ZSkge1xuICAgICAgICAgICAgICB0aHJlYWRUb1VwZGF0ZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZm91bmRUaHJlYWQpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHsgLi4udGhyZWFkcyB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdLnRocmVhZHM7XG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IE1haWxib3hTdG9yZSA9IGluaXRpYWxpemVUaHJlYWRzKCk7XG5cbmV4cG9ydCBjb25zdCBFbWFpbFN0b3JlOiBSZWFkYWJsZTxSZWNvcmQ8c3RyaW5nLCBUaHJlYWRbXT4+ID0gZGVyaXZlZChcbiAgTWFpbGJveFN0b3JlLFxuICAoJE1haWxib3hTdG9yZSkgPT4ge1xuICAgIGNvbnN0IGVtYWlsU3RvcmU6IFJlY29yZDxzdHJpbmcsIFRocmVhZFtdPiA9IHt9O1xuICAgIE9iamVjdC5lbnRyaWVzKCRNYWlsYm94U3RvcmUpLmZvckVhY2goXG4gICAgICAoW2tleSwgcGFnaW5hdGVkVGhyZWFkc10pID0+XG4gICAgICAgIChlbWFpbFN0b3JlW2tleV0gPSBwYWdpbmF0ZWRUaHJlYWRzXG4gICAgICAgICAgLm1hcCgocGFnaW5hdGVkVGhyZWFkKSA9PiBwYWdpbmF0ZWRUaHJlYWQudGhyZWFkcylcbiAgICAgICAgICAuZmxhdCgpKSxcbiAgICApO1xuICAgIHJldHVybiBlbWFpbFN0b3JlO1xuICB9LFxuKTtcbiIsImltcG9ydCB7IGZldGNoTWFuaWZlc3QgfSBmcm9tIFwiLi4vY29ubmVjdGlvbnMvbWFuaWZlc3RcIjtcbmltcG9ydCB7IFdyaXRhYmxlLCB3cml0YWJsZSB9IGZyb20gXCJzdmVsdGUvc3RvcmVcIjtcbmltcG9ydCB0eXBlIHsgTWFuaWZlc3QgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvTnlsYXNcIjtcblxudHlwZSBNYW5pZmVzdEFjY2Vzc29yID0ge1xuICBjb21wb25lbnRfaWQ6IHN0cmluZztcbiAgYWNjZXNzX3Rva2VuPzogc3RyaW5nO1xuICBleHRlcm5hbF9tYW5pZmVzdF9pZHM/OiBbXTtcbn07XG50eXBlIE1hbmlmZXN0U3RvcmUgPSBSZWNvcmQ8c3RyaW5nLCBQcm9taXNlPE1hbmlmZXN0Pj47XG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoKTogV3JpdGFibGU8TWFuaWZlc3RTdG9yZT4ge1xuICBjb25zdCBnZXQgPSAoXG4gICAgdGFyZ2V0OiBNYW5pZmVzdFN0b3JlLFxuICAgIGtleTogc3RyaW5nLFxuICApOiBQcm9taXNlPE1hbmlmZXN0PiB8IHZvaWQgPT4ge1xuICAgIGNvbnN0IGFjY2Vzc29yOiBNYW5pZmVzdEFjY2Vzc29yID0gSlNPTi5wYXJzZShrZXkpO1xuXG4gICAgaWYgKCFhY2Nlc3Nvci5jb21wb25lbnRfaWQpIHJldHVybjtcblxuICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgIGNvbnN0IGZldGNoUHJvbWlzZSA9IGZldGNoTWFuaWZlc3QoXG4gICAgICAgIGFjY2Vzc29yLmNvbXBvbmVudF9pZCxcbiAgICAgICAgYWNjZXNzb3IuYWNjZXNzX3Rva2VuLFxuICAgICAgKTtcbiAgICAgIHN0b3JlLnVwZGF0ZSgoc3RvcmUpID0+IHtcbiAgICAgICAgc3RvcmVba2V5XSA9IGZldGNoUHJvbWlzZTtcbiAgICAgICAgcmV0dXJuIHN0b3JlO1xuICAgICAgfSk7XG4gICAgICB0YXJnZXRba2V5XSA9IGZldGNoUHJvbWlzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICB9O1xuICBjb25zdCBzdG9yZSA9IHdyaXRhYmxlKG5ldyBQcm94eTxNYW5pZmVzdFN0b3JlPih7fSwgeyBnZXQgfSkpO1xuICByZXR1cm4gc3RvcmU7XG59XG5cbmV4cG9ydCBjb25zdCBNYW5pZmVzdFN0b3JlID0gaW5pdGlhbGl6ZSgpO1xuIiwiaW1wb3J0IHtcbiAgZ2V0RmV0Y2hDb25maWcsXG4gIGhhbmRsZUVycm9yLFxuICBoYW5kbGVSZXNwb25zZSxcbiAgZ2V0TWlkZGxld2FyZUFwaVVybCxcbn0gZnJvbSBcIi4uL21ldGhvZHMvYXBpXCI7XG5pbXBvcnQgdHlwZSB7IEZpbGVRdWVyeSwgTWlkZGxld2FyZVJlc3BvbnNlIH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG5cbmV4cG9ydCBjb25zdCBkb3dubG9hZEZpbGUgPSBhc3luYyAocXVlcnk6IEZpbGVRdWVyeSk6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gIGxldCBxdWVyeVN0cmluZyA9IGAke2dldE1pZGRsZXdhcmVBcGlVcmwocXVlcnkuY29tcG9uZW50X2lkKX0vZmlsZXMvJHtcbiAgICBxdWVyeS5maWxlX2lkXG4gIH0vZG93bmxvYWRgO1xuXG4gIHJldHVybiBhd2FpdCBmZXRjaChxdWVyeVN0cmluZywgZ2V0RmV0Y2hDb25maWcocXVlcnkpKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPHN0cmluZz4+KHJlc3BvbnNlKSlcbiAgICAudGhlbigoanNvbikgPT4ganNvbi5yZXNwb25zZSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihxdWVyeS5jb21wb25lbnRfaWQsIGVycm9yKSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IERpc2FsbG93ZWRDb250ZW50VHlwZXMgPSBbXG4gIFwibWVzc2FnZS9kZWxpdmVyeS1zdGF0dXNcIixcbiAgXCJtZXNzYWdlL3JmYzgyMlwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IElubGluZUltYWdlVHlwZXMgPSBbXG4gIFwiaW1hZ2UvcG5nXCIsXG4gIFwiaW1hZ2UvYXBuZ1wiLFxuICBcImltYWdlL2F2aWZcIixcbiAgXCJpbWFnZS9naWZcIixcbiAgXCJpbWFnZS9qcGVnXCIsXG4gIFwiaW1hZ2Uvc3ZnK3htbFwiLFxuXTtcbiIsImltcG9ydCB7IHdyaXRhYmxlIH0gZnJvbSBcInN2ZWx0ZS9zdG9yZVwiO1xuaW1wb3J0IHR5cGUgeyBGaWxlLCBNZXNzYWdlIH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG5pbXBvcnQgeyBkb3dubG9hZEZpbGUgfSBmcm9tIFwiQGNvbW1vbnMvY29ubmVjdGlvbnMvZmlsZXNcIjtcbmltcG9ydCB7IElubGluZUltYWdlVHlwZXMgfSBmcm9tIFwiQGNvbW1vbnMvY29uc3RhbnRzL2F0dGFjaG1lbnQtY29udGVudC10eXBlc1wiO1xuZnVuY3Rpb24gaW5pdGlhbGl6ZUZpbGVzRm9yTWVzc2FnZSgpIHtcbiAgY29uc3QgeyBzdWJzY3JpYmUsIHNldCwgdXBkYXRlIH0gPSB3cml0YWJsZTxcbiAgICBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBGaWxlPj5cbiAgPih7fSk7XG4gIGNvbnN0IGZpbGVzTWFwOiBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBGaWxlPj4gPSB7fTsgLy8ge21lc3NhZ2VfaWQ6IHtmaWxlX2lkOiBCYXNlNjQgU3RyaW5nfX1cblxuICByZXR1cm4ge1xuICAgIHN1YnNjcmliZSxcbiAgICBnZXRGaWxlc0Zvck1lc3NhZ2U6IGFzeW5jIChcbiAgICAgIGluY29taW5nTWVzc2FnZTogTWVzc2FnZSxcbiAgICAgIHF1ZXJ5OiB7IGNvbXBvbmVudF9pZDogc3RyaW5nOyBhY2Nlc3NfdG9rZW46IHN0cmluZyB9LFxuICAgICkgPT4ge1xuICAgICAgaWYgKCFmaWxlc01hcFtpbmNvbWluZ01lc3NhZ2UuaWRdKSB7XG4gICAgICAgIGNvbnN0IGlubGluZUZpbGVzOiBSZWNvcmQ8c3RyaW5nLCBGaWxlPiA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgaW5jb21pbmdNZXNzYWdlLmZpbGVzLnZhbHVlcygpKSB7XG4gICAgICAgICAgLy8gdHJlYXQgYWxsIGZpbGVzIHdpdGggY29udGVudF9pZCBhcyBpbmxpbmVcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAoZmlsZS5jb250ZW50X2Rpc3Bvc2l0aW9uID09PSBcImlubGluZVwiIHx8XG4gICAgICAgICAgICAgIChmaWxlLmNvbnRlbnRfaWQgJiZcbiAgICAgICAgICAgICAgICBJbmxpbmVJbWFnZVR5cGVzLmluY2x1ZGVzKGZpbGUuY29udGVudF90eXBlKSkpICYmXG4gICAgICAgICAgICAhaW5saW5lRmlsZXNbZmlsZS5pZF1cbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGlubGluZUZpbGVzW2ZpbGUuaWRdID0gZmlsZTtcbiAgICAgICAgICAgIGlubGluZUZpbGVzW2ZpbGUuaWRdLmRhdGEgPSBhd2FpdCBkb3dubG9hZEZpbGUoe1xuICAgICAgICAgICAgICBmaWxlX2lkOiBmaWxlLmlkLFxuICAgICAgICAgICAgICBjb21wb25lbnRfaWQ6IHF1ZXJ5LmNvbXBvbmVudF9pZCxcbiAgICAgICAgICAgICAgYWNjZXNzX3Rva2VuOiBxdWVyeS5hY2Nlc3NfdG9rZW4sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmlsZXNNYXBbaW5jb21pbmdNZXNzYWdlLmlkXSA9IGlubGluZUZpbGVzO1xuICAgICAgICB1cGRhdGUoKGZpbGVzKSA9PiB7XG4gICAgICAgICAgZmlsZXNbaW5jb21pbmdNZXNzYWdlLmlkXSA9IGlubGluZUZpbGVzO1xuICAgICAgICAgIHJldHVybiB7IC4uLmZpbGVzIH07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZpbGVzTWFwW2luY29taW5nTWVzc2FnZS5pZF07XG4gICAgfSxcbiAgICBoYXNJbmxpbmVGaWxlczogKGluY29taW5nTWVzc2FnZTogTWVzc2FnZSk6IGJvb2xlYW4gPT4ge1xuICAgICAgcmV0dXJuIGluY29taW5nTWVzc2FnZT8uZmlsZXM/LnNvbWUoXG4gICAgICAgIChmaWxlKSA9PlxuICAgICAgICAgIGZpbGUuY29udGVudF9kaXNwb3NpdGlvbiA9PT0gXCJpbmxpbmVcIiB8fFxuICAgICAgICAgIChmaWxlLmNvbnRlbnRfaWQgJiYgSW5saW5lSW1hZ2VUeXBlcy5pbmNsdWRlcyhmaWxlLmNvbnRlbnRfdHlwZSkpLFxuICAgICAgKTtcbiAgICB9LFxuICAgIHJlc2V0OiAoKSA9PiBzZXQoe30pLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgRmlsZXNTdG9yZSA9IGluaXRpYWxpemVGaWxlc0Zvck1lc3NhZ2UoKTtcbiIsImltcG9ydCB0eXBlIHsgRmlsZSwgTWFuaWZlc3QgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvTnlsYXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEV2ZW50RGlzcGF0Y2hlcihjb21wb25lbnQ6IHtcbiAgZGlzcGF0Y2hFdmVudD86IChlOiBFdmVudCkgPT4gYm9vbGVhbjtcbn0pIHtcbiAgcmV0dXJuIChuYW1lOiBzdHJpbmcsIGRldGFpbDogdW5rbm93bik6IHZvaWQgPT4ge1xuICAgIGlmIChjb21wb25lbnQuZGlzcGF0Y2hFdmVudCkge1xuICAgICAgY29tcG9uZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBDdXN0b21FdmVudChuYW1lLCB7XG4gICAgICAgICAgZGV0YWlsLFxuICAgICAgICAgIGNvbXBvc2VkOiB0cnVlLCAvLyBwcm9wYWdhdGUgYWNyb3NzIHRoZSBzaGFkb3cgRE9NXG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShcbiAgZm46IChhcmdzOiB1bmtub3duKSA9PiB1bmtub3duLFxuICB0aW1lOiBudW1iZXIsXG4pOiAoKSA9PiB2b2lkIHtcbiAgbGV0IHRpbWVvdXRJZDogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD47XG4gIHJldHVybiAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfVxuXG4gICAgdGltZW91dElkID0gc2V0VGltZW91dChmbiwgdGltZSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEludGVybmFsUHJvcHM8VCBleHRlbmRzIFBhcnRpYWw8TWFuaWZlc3Q+PihcbiAgcHJvcGVydGllczogVCxcbiAgbWFuaWZlc3Q6IFQsXG4gIGRlZmF1bHRWYWx1ZU1hcDogVCxcbik6IFQge1xuICByZXR1cm4gbmV3IFByb3h5KHByb3BlcnRpZXMsIHtcbiAgICBnZXQ6ICh0YXJnZXQsIG5hbWU6IGtleW9mIE1hbmlmZXN0IHwgXCJ0b0pTT05cIiB8IFwidG9TdHJpbmdcIikgPT4ge1xuICAgICAgaWYgKG5hbWUgPT09IFwidG9TdHJpbmdcIiB8fCBuYW1lID09PSBcInRvSlNPTlwiKSB7XG4gICAgICAgIHJldHVybiAoKSA9PiBKU09OLnN0cmluZ2lmeSh0YXJnZXQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoUmVmbGVjdC5nZXQodGFyZ2V0LCBuYW1lKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBnZXRQcm9wZXJ0eVZhbHVlKFxuICAgICAgICAgIFJlZmxlY3QuZ2V0KHRhcmdldCwgbmFtZSksXG4gICAgICAgICAgZGVmYXVsdFZhbHVlTWFwW25hbWVdLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAobWFuaWZlc3QgJiYgbmFtZSBpbiBtYW5pZmVzdCkge1xuICAgICAgICByZXR1cm4gZ2V0UHJvcGVydHlWYWx1ZShtYW5pZmVzdFtuYW1lXSwgZGVmYXVsdFZhbHVlTWFwW25hbWVdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZWZhdWx0VmFsdWVNYXBbbmFtZV07XG4gICAgfSxcblxuICAgIG93bktleXM6ICh0YXJnZXQpID0+IHtcbiAgICAgIGNvbnN0IGtleXMgPSBuZXcgU2V0KFtcbiAgICAgICAgLi4uUmVmbGVjdC5vd25LZXlzKHRhcmdldCksXG4gICAgICAgIC4uLk9iamVjdC5rZXlzKG1hbmlmZXN0KSxcbiAgICAgICAgLi4uT2JqZWN0LmtleXMoZGVmYXVsdFZhbHVlTWFwKSxcbiAgICAgIF0pO1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20oa2V5cyk7XG4gICAgfSxcblxuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogKHRhcmdldCwgcHJvcCkgPT4ge1xuICAgICAgbGV0IHByb3BEZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wKTtcbiAgICAgIGlmICghcHJvcERlc2NyaXB0b3IpIHtcbiAgICAgICAgcHJvcERlc2NyaXB0b3IgPSAobWFuaWZlc3QgJiZcbiAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG1hbmlmZXN0LCBwcm9wKSkgPz9cbiAgICAgICAgICAoZGVmYXVsdFZhbHVlTWFwICYmXG4gICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlZmF1bHRWYWx1ZU1hcCwgcHJvcCkpID8/IHtcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICB9O1xuICAgICAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcCwgcHJvcERlc2NyaXB0b3IpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByb3BEZXNjcmlwdG9yO1xuICAgIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcGVydHlWYWx1ZTxUPihwcm9wVmFsdWU6IGFueSwgZGVmYXVsdFRvOiBUKTogVCB7XG4gIGlmIChwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIGRlZmF1bHRUbyA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgIHJldHVybiBwYXJzZUJvb2xlYW4ocHJvcFZhbHVlKSBhcyBhbnk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGVmYXVsdFRvID09PSBcIm51bWJlclwiKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHByb3BWYWx1ZSkgYXMgYW55O1xuICAgIH1cbiAgICBpZiAoZGVmYXVsdFRvIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKHByb3BWYWx1ZSkgYXMgYW55O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wVmFsdWUgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRUbyA/PyBudWxsIDogcHJvcFZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VCb29sZWFuKFxuICB2YWw6IHN0cmluZyB8IGJvb2xlYW4gfCB1bmRlZmluZWQgfCBudWxsLFxuKTogYm9vbGVhbiB7XG4gIHJldHVybiAoPGFueT5bdHJ1ZSwgXCJ0cnVlXCIsIFwiMVwiXSkuaW5jbHVkZXModmFsKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VTdHJpbmdUb0FycmF5KHBhcnNlU3RyOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIGlmICghcGFyc2VTdHIpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBpZiAocGFyc2VTdHIuaW5jbHVkZXMoXCIsXCIpKSB7XG4gICAgcmV0dXJuIHBhcnNlU3RyLnNwbGl0KFwiLFwiKS5tYXAoKHM6IHN0cmluZykgPT4gcy50cmltKCkpO1xuICB9XG4gIGlmIChwYXJzZVN0ci5pbmNsdWRlcyhcIiBcIikpIHtcbiAgICByZXR1cm4gcGFyc2VTdHIuc3BsaXQoXCIgXCIpLm1hcCgoczogc3RyaW5nKSA9PiBzLnRyaW0oKSk7XG4gIH1cbiAgaWYgKHBhcnNlU3RyLmluY2x1ZGVzKFwiXFxuXCIpKSB7XG4gICAgcmV0dXJuIHBhcnNlU3RyLnNwbGl0KFwiXFxuXCIpLm1hcCgoczogc3RyaW5nKSA9PiBzLnRyaW0oKSk7XG4gIH1cblxuICByZXR1cm4gW3BhcnNlU3RyLnRyaW0oKV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZEF0dGFjaGVkRmlsZShmaWxlRGF0YTogc3RyaW5nLCBmaWxlOiBGaWxlKTogdm9pZCB7XG4gIGNvbnN0IGJ1ZmZlciA9IFVpbnQ4QXJyYXkuZnJvbShhdG9iKGZpbGVEYXRhKSwgKGMpID0+IGMuY2hhckNvZGVBdCgwKSk7XG4gIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYnVmZmVyXSwgeyB0eXBlOiBmaWxlLmNvbnRlbnRfdHlwZSB9KTtcbiAgY29uc3QgYmxvYkZpbGUgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGEuaHJlZiA9IGJsb2JGaWxlO1xuICBhLmRvd25sb2FkID0gZmlsZS5maWxlbmFtZSA/PyBmaWxlLmlkO1xuICBhLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gIGEuY2xpY2soKTtcbiAgYS5yZW1vdmUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5Q29udGFpbnNBcnJheShzdXBlcnNldDogYW55W10sIHN1YnNldDogYW55W10pOiBib29sZWFuIHtcbiAgcmV0dXJuIHN1YnNldC5ldmVyeSgodGFyZ2V0KSA9PiBzdXBlcnNldC5pbmNsdWRlcyh0YXJnZXQpKTtcbn1cbiIsIjxzdmVsdGU6b3B0aW9ucyB0YWc9XCJueWxhcy1lcnJvclwiIGltbXV0YWJsZT17dHJ1ZX0gLz5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbiAgaW1wb3J0IHsgRXJyb3JTdG9yZSB9IGZyb20gXCIuLi9zdG9yZS9lcnJvclwiO1xuICBpbXBvcnQgdHlwZSB7IE5FcnJvciB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuXG4gIGV4cG9ydCBsZXQgaWQ6IHN0cmluZzsgLy8gY29tcG9uZW50IGlkXG5cbiAgbGV0IGVycm9yOiBORXJyb3I7XG4gIGxldCBlcnJvck5hbWU6IHN0cmluZztcblxuICAkOiB7XG4gICAgZXJyb3IgPSAkRXJyb3JTdG9yZVtpZF0gPz8geyBuYW1lOiBcIlwiIH07XG4gICAgZXJyb3JOYW1lID0gZXJyb3IubmFtZSA/PyBlcnJvci5tZXNzYWdlPy5uYW1lID8/IFwiXCI7XG4gIH1cblxuICBjb25zdCBpc0RldkVudiA9XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoXCJsb2NhbGhvc3RcIikgfHxcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcyhcIjEyNy4wLjAuMVwiKTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC5tZXNzYWdlLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjZmNjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNhYTkyYTAgaW5zZXQsIDAgMCAwIDAgdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICM5ZjNhMzg7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlLCBjb2xvciA1MDBtcyBlYXNlLFxuICAgICAgYmFja2dyb3VuZC1jb2xvciA1MDBtcyBlYXNlLCBib3gtc2hhZG93IDUwMG1zIGVhc2UsXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3cgNTAwbXMgZWFzZTtcbiAgfVxuXG4gIC5tZXNzYWdlLWNvbnRhaW5lciAqOmZvY3VzIHtcbiAgICBvdXRsaW5lOiA1cHggYXV0byBIaWdobGlnaHQ7XG4gICAgb3V0bGluZTogNXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO1xuICB9XG5cbiAgLmRldGFpbHMge1xuICAgIGNvbG9yOiAjNDk0OTQ5O1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuPC9zdHlsZT5cblxueyNpZiBlcnJvck5hbWUgJiYgaXNEZXZFbnZ9XG4gIDxkaXYgY2xhc3M9XCJtZXNzYWdlLWNvbnRhaW5lclwiPlxuICAgIHsjaWYgZXJyb3JOYW1lID09PSBcIkhvc3REb21haW5Ob3RBbGxvd2VkRXJyb3JcIn1cbiAgICAgIDxoMz5cbiAgICAgICAgWW91IGFyZSB0cnlpbmcgdG8gYWNjZXNzIHRoaXMgY29tcG9uZW50IGZyb20mbmJzcDtcbiAgICAgICAgPGNvZGU+e3dpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZX08L2NvZGU+LiBUaGUgY29tcG9uZW50J3Mgc2V0dGluZ3MgZG8gbm90XG4gICAgICAgIGFsbG93IGFjY2VzcyBmcm9tIHRoaXMgZG9tYWluLlxuICAgICAgPC9oMz5cbiAgICAgIDxoND5cbiAgICAgICAgVGhlIGxpc3Qgb2YgYWxsb3dlZCBkb21haW5zIGNhbiBiZSBtb2RpZmllZCBpbiB5b3VyJm5ic3A7XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2Rhc2hib2FyZC5ueWxhcy5jb21cIj5EYXNoYm9hcmQ8L2E+LlxuICAgICAgPC9oND5cbiAgICB7OmVsc2UgaWYgZXJyb3JOYW1lID09PSBcIkluY29tcGF0aWJsZVByb3BlcnRpZXNcIn1cbiAgICAgIDxoMz5Zb3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGRvIG5vdCB3b3JrIHdpdGggZWFjaCBvdGhlci48L2gzPlxuICAgIHsvaWZ9XG4gICAgPHNwYW4gY2xhc3M9XCJkZXRhaWxzXCI+RGVidWcgaW5mbzo8L3NwYW4+XG4gICAgPHRleHRhcmVhIGNsYXNzPVwiZGV0YWlsc1wiIHJlYWRvbmx5PlxuICAgICAge2Vycm9yTmFtZX06IHtpZH1cbiAgICAgIHtlcnJvci5tZXNzYWdlPy5tZXNzYWdlID8/IFwiXCJ9XG4gICAgPC90ZXh0YXJlYT5cbiAgPC9kaXY+XG57L2lmfVxuIiwiaW1wb3J0IHR5cGUgeyBNZXNzYWdlLCBQYXJ0aWNpcGFudCB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5jbHVkZXNNeUVtYWlsKFxuICBteUVtYWlsOiBzdHJpbmcsXG4gIG1lc3NhZ2U6IE1lc3NhZ2UsXG4gIGZpZWxkOiBcInRvXCIgfCBcImZyb21cIiB8IFwiY2NcIiB8IFwiYmNjXCIsXG4pOiBib29sZWFuIHtcbiAgaWYgKCFteUVtYWlsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIG1lc3NhZ2VbZmllbGRdLnNvbWUoXG4gICAgKGUpID0+IGUuZW1haWwudG9Mb3dlckNhc2UoKSA9PT0gbXlFbWFpbC50b0xvd2VyQ2FzZSgpLFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFydGljaXBhbnRzV2l0aG91dEdpdmVuRW1haWxzKFxuICBlbWFpbHM6IHN0cmluZ1tdLFxuICBtZXNzYWdlOiBNZXNzYWdlLFxuKTogUGFydGljaXBhbnRbXSB7XG4gIGNvbnN0IGFsbFBhcnRpY2lwYW50cyA9IFtcbiAgICAuLi5tZXNzYWdlLmZyb20sXG4gICAgLi4ubWVzc2FnZS50byxcbiAgICAuLi5tZXNzYWdlLmNjLFxuICAgIC4uLm1lc3NhZ2UuYmNjLFxuICBdO1xuICByZXR1cm4gYWxsUGFydGljaXBhbnRzLmZpbHRlcigoZSkgPT4gIWVtYWlscy5pbmNsdWRlcyhlLmVtYWlsKSk7XG59XG5cbnR5cGUgQnVpbGRQYXJ0aWNpcGFudCA9IHtcbiAgbXlFbWFpbDogc3RyaW5nO1xuICBtZXNzYWdlOiBNZXNzYWdlO1xuICB0eXBlOiBcInJlcGx5XCIgfCBcInJlcGx5X2FsbFwiO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUGFydGljaXBhbnRzKHtcbiAgbXlFbWFpbCxcbiAgbWVzc2FnZSxcbiAgdHlwZSxcbn06IEJ1aWxkUGFydGljaXBhbnQpOiBSZWNvcmQ8c3RyaW5nLCBQYXJ0aWNpcGFudFtdPiB7XG4gIGxldCB0bzogUGFydGljaXBhbnRbXSA9IFtdO1xuICBsZXQgY2M6IFBhcnRpY2lwYW50W10gPSBbXTtcbiAgdG8gPSBtZXNzYWdlLnJlcGx5X3RvLmZpbHRlcigoZSkgPT4gZS5lbWFpbCAhPT0gbXlFbWFpbCk7XG4gIC8vIGlmIG1lc3NhZ2UgZG9lcyBub3QgaGF2ZSAncmVwbHlfdG8nOlxuICAvLyAtIEFORCBpZiBtZXNzYWdlIGZyb20gc2VsZiBzZXQgJ3RvJyBhcyB0aGUgZGVmYXVsdCAndG8nXG4gIC8vIC0gZWxzZSBzZXQgJ2Zyb20nIGFzIHRoZSBkZWZhdWx0ICd0bydcbiAgaWYgKCF0by5sZW5ndGgpIHtcbiAgICBpZiAoaW5jbHVkZXNNeUVtYWlsKG15RW1haWwsIG1lc3NhZ2UsIFwiZnJvbVwiKSkge1xuICAgICAgdG8gPSBtZXNzYWdlLnRvO1xuICAgIH0gZWxzZSB7XG4gICAgICB0byA9IG1lc3NhZ2UuZnJvbTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZSA9PT0gXCJyZXBseV9hbGxcIikge1xuICAgIGNvbnN0IGZyb21FbWFpbHMgPSBtZXNzYWdlLmZyb20/Lm1hcCgoaSkgPT4gaS5lbWFpbCk7XG4gICAgY2MgPSBbLi4ucGFydGljaXBhbnRzV2l0aG91dEdpdmVuRW1haWxzKFsuLi5mcm9tRW1haWxzLCBteUVtYWlsXSwgbWVzc2FnZSldO1xuICB9XG5cbiAgcmV0dXJuIHsgdG8sIGNjIH07XG59XG5cbmV4cG9ydCBjb25zdCBpc1ZhbGlkUGFydGljaXBhbnQgPSAocGFydGljaXBhbnQ6IFBhcnRpY2lwYW50KTogYm9vbGVhbiA9PiB7XG4gIGlmIChcImVtYWlsXCIgaW4gcGFydGljaXBhbnQgJiYgXCJuYW1lXCIgaW4gcGFydGljaXBhbnQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYW5QYXJ0aWNpcGFudHMgPSAoY29udGFjdHM6IGFueVtdKTogUGFydGljaXBhbnRbXSA9PiB7XG4gIGNvbnN0IHBhcnRpY2lwYW50cyA9IGNvbnRhY3RzLnJlZHVjZSgocmVzdWx0OiBQYXJ0aWNpcGFudFtdLCBjb250YWN0KSA9PiB7XG4gICAgaWYgKGlzVmFsaWRQYXJ0aWNpcGFudChjb250YWN0KSkge1xuICAgICAgLy8gSWYgaXQgaXMgYSB2YWxpZCBQYXJ0aWNpcGFudCB0eXBlXG4gICAgICByZXN1bHQucHVzaChjb250YWN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgaXQgaXMgYSBDb250YWN0IHR5cGUsIGNvbnN1bWVkIC9jb250YWN0cyBhcGlcbiAgICAgIGlmIChcImVtYWlsc1wiIGluIGNvbnRhY3QgJiYgY29udGFjdC5lbWFpbHM/Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIG5hbWU6IGAke2NvbnRhY3QuZ2l2ZW5fbmFtZSA/PyBcIlwifSAke2NvbnRhY3Quc3VybmFtZSA/PyBcIlwifWAsXG4gICAgICAgICAgZW1haWw6IGNvbnRhY3QuZW1haWxzWzBdLmVtYWlsLFxuICAgICAgICAgIGNvbnRhY3QsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LCBbXSk7XG4gIHJldHVybiBwYXJ0aWNpcGFudHM7XG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGFkZEtleVZhbHVlPFQ+KGFycjogYW55W10sIG9iajogUmVjb3JkPGFueSwgYW55Pik6IFRbXSB7XG4gIHJldHVybiBhcnIubWFwKChpdGVtOiBhbnkpID0+ICh7IC4uLml0ZW0sIC4uLm9iaiB9KSk7XG59XG4iLCI8c3ZnIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTcgMTZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbjxwYXRoIGQ9XCJNMTEuMTY2NiA2LjY2NjY2TDguNTAwOTQgOS40ODI1OEw1LjgzMzMxIDYuNjY2NjZcIiBzdHJva2U9XCIjOGQ5NGE1XCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiLz5cbjwvc3ZnPlxuIiwiPHN2ZyB3aWR0aD1cIjExXCIgaGVpZ2h0PVwiMTNcIiB2aWV3Qm94PVwiMCAwIDExIDEzXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG48cGF0aCBkPVwiTTAuNzUgMTEuMzc1QzAuNzUgMTIuMDA3OCAxLjI0MjE5IDEyLjUgMS44NzUgMTIuNUg4LjYyNUM5LjIzNDM4IDEyLjUgOS43NSAxMi4wMDc4IDkuNzUgMTEuMzc1VjMuNUgwLjc1VjExLjM3NVpNNy4xMjUgNS4zNzVDNy4xMjUgNS4xODc1IDcuMjg5MDYgNSA3LjUgNUM3LjY4NzUgNSA3Ljg3NSA1LjE4NzUgNy44NzUgNS4zNzVWMTAuNjI1QzcuODc1IDEwLjgzNTkgNy42ODc1IDExIDcuNSAxMUM3LjI4OTA2IDExIDcuMTI1IDEwLjgzNTkgNy4xMjUgMTAuNjI1VjUuMzc1Wk00Ljg3NSA1LjM3NUM0Ljg3NSA1LjE4NzUgNS4wMzkwNiA1IDUuMjUgNUM1LjQzNzUgNSA1LjYyNSA1LjE4NzUgNS42MjUgNS4zNzVWMTAuNjI1QzUuNjI1IDEwLjgzNTkgNS40Mzc1IDExIDUuMjUgMTFDNS4wMzkwNiAxMSA0Ljg3NSAxMC44MzU5IDQuODc1IDEwLjYyNVY1LjM3NVpNMi42MjUgNS4zNzVDMi42MjUgNS4xODc1IDIuNzg5MDYgNSAzIDVDMy4xODc1IDUgMy4zNzUgNS4xODc1IDMuMzc1IDUuMzc1VjEwLjYyNUMzLjM3NSAxMC44MzU5IDMuMTg3NSAxMSAzIDExQzIuNzg5MDYgMTEgMi42MjUgMTAuODM1OSAyLjYyNSAxMC42MjVWNS4zNzVaTTEwLjEyNSAxLjI1SDcuMzEyNUw3LjA3ODEyIDAuODI4MTI1QzYuOTg0MzggMC42NDA2MjUgNi43OTY4OCAwLjUgNi41ODU5NCAwLjVIMy44OTA2MkMzLjY3OTY5IDAuNSAzLjQ5MjE5IDAuNjQwNjI1IDMuMzk4NDQgMC44MjgxMjVMMy4xODc1IDEuMjVIMC4zNzVDMC4xNjQwNjIgMS4yNSAwIDEuNDM3NSAwIDEuNjI1VjIuMzc1QzAgMi41ODU5NCAwLjE2NDA2MiAyLjc1IDAuMzc1IDIuNzVIMTAuMTI1QzEwLjMxMjUgMi43NSAxMC41IDIuNTg1OTQgMTAuNSAyLjM3NVYxLjYyNUMxMC41IDEuNDM3NSAxMC4zMTI1IDEuMjUgMTAuMTI1IDEuMjVaXCIgZmlsbD1cIiM2QTcyODVcIi8+XG48L3N2Zz5cbiIsIjxzdmcgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEzXCIgdmlld0JveD1cIjAgMCAxMiAxM1wiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuPHBhdGggZD1cIk00LjEyNSA1LjU2MjVINy44NzVDOC4wNjI1IDUuNTYyNSA4LjI1IDUuMzk4NDQgOC4yNSA1LjE4NzVWNC44MTI1QzguMjUgNC42MjUgOC4wNjI1IDQuNDM3NSA3Ljg3NSA0LjQzNzVINC4xMjVDMy45MTQwNiA0LjQzNzUgMy43NSA0LjYyNSAzLjc1IDQuODEyNVY1LjE4NzVDMy43NSA1LjM5ODQ0IDMuOTE0MDYgNS41NjI1IDQuMTI1IDUuNTYyNVpNMy43NSA3LjQzNzVDMy43NSA3LjY0ODQ0IDMuOTE0MDYgNy44MTI1IDQuMTI1IDcuODEyNUg3Ljg3NUM4LjA2MjUgNy44MTI1IDguMjUgNy42NDg0NCA4LjI1IDcuNDM3NVY3LjA2MjVDOC4yNSA2Ljg3NSA4LjA2MjUgNi42ODc1IDcuODc1IDYuNjg3NUg0LjEyNUMzLjkxNDA2IDYuNjg3NSAzLjc1IDYuODc1IDMuNzUgNy4wNjI1VjcuNDM3NVpNNiAxMC4yOTY5QzUuNjAxNTYgMTAuMjk2OSA1LjIyNjU2IDEwLjE3OTcgNC44OTg0NCA5LjkyMTg4TDAgNi4zODI4MVYxMS4zNzVDMCAxMi4wMDc4IDAuNDkyMTg4IDEyLjUgMS4xMjUgMTIuNUgxMC44NzVDMTEuNDg0NCAxMi41IDEyIDEyLjAwNzggMTIgMTEuMzc1VjYuMzgyODFMNy4wNzgxMiA5LjkyMTg4QzYuNzUgMTAuMTc5NyA2LjM3NSAxMC4yOTY5IDYgMTAuMjk2OVpNMTEuNTU0NyA0LjMyMDMxQzExLjM0MzggNC4xNzk2OSAxMS4xNTYyIDQuMDE1NjIgMTAuODc1IDMuODA0NjlWMi43NUMxMC44NzUgMi4xNDA2MiAxMC4zNTk0IDEuNjI1IDkuNzUgMS42MjVINy45MjE4OEM3Ljg1MTU2IDEuNTc4MTIgNy43ODEyNSAxLjUzMTI1IDcuNzEwOTQgMS40ODQzOEM3LjMxMjUgMS4yMDMxMiA2LjUzOTA2IDAuNSA2IDAuNUM1LjQzNzUgMC41IDQuNjY0MDYgMS4yMDMxMiA0LjI2NTYyIDEuNDg0MzhDNC4xOTUzMSAxLjUzMTI1IDQuMTI1IDEuNTc4MTIgNC4wNTQ2OSAxLjYyNUgyLjI1QzEuNjE3MTkgMS42MjUgMS4xMjUgMi4xNDA2MiAxLjEyNSAyLjc1VjMuODA0NjlDMC44MjAzMTIgNC4wMTU2MiAwLjYzMjgxMiA0LjE3OTY5IDAuNDIxODc1IDQuMzIwMzFDMC4xNjQwNjIgNC41MzEyNSAwIDQuODU5MzggMCA1LjIxMDk0VjUuNDY4NzVMMi4yNSA3LjA4NTk0VjIuNzVIOS43NVY3LjA4NTk0TDEyIDUuNDY4NzVWNS4yMTA5NEMxMiA0Ljg1OTM4IDExLjgzNTkgNC41NTQ2OSAxMS41NTQ3IDQuMzIwMzFaXCIgZmlsbD1cIiM2QTcyODVcIi8+XG48L3N2Zz5cbiIsIjxzdmcgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjlcIiB2aWV3Qm94PVwiMCAwIDEyIDlcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbjxwYXRoIGQ9XCJNMTEuNzY1NiAyLjk3NjU2QzExLjIyNjYgMy4zOTg0NCAxMC41NDY5IDMuOTE0MDYgOC4xNTYyNSA1LjY0ODQ0QzcuNjg3NSA2IDYuODIwMzEgNi43NzM0NCA2IDYuNzczNDRDNS4xNTYyNSA2Ljc3MzQ0IDQuMzEyNSA2IDMuODIwMzEgNS42NDg0NEMxLjQyOTY5IDMuOTE0MDYgMC43NSAzLjM5ODQ0IDAuMjEwOTM4IDIuOTc2NTZDMC4xMTcxODggMi45MDYyNSAwIDIuOTc2NTYgMCAzLjA5Mzc1VjcuODc1QzAgOC41MDc4MSAwLjQ5MjE4OCA5IDEuMTI1IDlIMTAuODc1QzExLjQ4NDQgOSAxMiA4LjUwNzgxIDEyIDcuODc1VjMuMDkzNzVDMTIgMi45NzY1NiAxMS44NTk0IDIuOTA2MjUgMTEuNzY1NiAyLjk3NjU2Wk02IDZDNi41MzkwNiA2LjAyMzQ0IDcuMzEyNSA1LjMyMDMxIDcuNzEwOTQgNS4wMzkwNkMxMC44MjgxIDIuNzg5MDYgMTEuMDYyNSAyLjU3ODEyIDExLjc2NTYgMi4wMTU2MkMxMS45MDYyIDEuOTIxODggMTIgMS43NTc4MSAxMiAxLjU3MDMxVjEuMTI1QzEyIDAuNTE1NjI1IDExLjQ4NDQgMCAxMC44NzUgMEgxLjEyNUMwLjQ5MjE4OCAwIDAgMC41MTU2MjUgMCAxLjEyNVYxLjU3MDMxQzAgMS43NTc4MSAwLjA3MDMxMjUgMS45MjE4OCAwLjIxMDkzOCAyLjAxNTYyQzAuOTE0MDYyIDIuNTc4MTIgMS4xNDg0NCAyLjc4OTA2IDQuMjY1NjIgNS4wMzkwNkM0LjY2NDA2IDUuMzIwMzEgNS40Mzc1IDYuMDIzNDQgNiA2WlwiIGZpbGw9XCIjNkE3Mjg1XCIvPlxuPC9zdmc+XG4iLCI8c3ZnIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIxNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiXHJcblx0IHZpZXdCb3g9XCIwIDAgNTExLjM2IDUxMS4zNlwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTEuMzYgNTExLjM2O1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XHJcbjxnPlxyXG5cdDxnPlxyXG5cdFx0PHBhdGggZD1cIk00NTQuODI3LDM1LjJjLTQ2LjkzMy00Ni45MzMtMTIyLjAyNy00Ni45MzMtMTY4Ljk2LDBMNjMuMTQ3LDI1OC43NzNjLTMuNDEzLDMuNDEzLTMuNDEzLDguNTMzLDAsMTEuOTQ3XHJcblx0XHRcdHM4LjUzMywzLjQxMywxMS45NDcsMGwyMjIuNzItMjIzLjU3M2M0MC4xMDctNDAuMTA3LDEwNC45Ni00MC4xMDcsMTQ1LjA2NywwYzQwLjEwNyw0MC4xMDcsNDAuMTA3LDEwNC45NiwwLDE0NS4wNjdcclxuXHRcdFx0TDE2Mi4xMzMsNDcyLjk2Yy0yOC4xNiwyOC4xNi03NC4yNCwyOC4xNi0xMDIuNCwwYy0yOC4xNi0yOC4xNi0yOC4xNi03NC4yNCwwLTEwMi40bDIyNi4xMzMtMjI2Ljk4N1xyXG5cdFx0XHRjMTcuMDY3LTE2LjIxMyw0My41Mi0xNy4wNjcsNjAuNTg3LDBjMTYuMjEzLDE3LjA2NywxNi4yMTMsNDQuMzczLDAsNjAuNTg3bC0xNjguOTYsMTY5LjgxM2MtMy40MTMsMy40MTMtMy40MTMsOC41MzMsMCwxMS45NDdcclxuXHRcdFx0YzMuNDEzLDMuNDEzLDguNTMzLDMuNDEzLDExLjk0NywwTDM1OC40LDIxNi45NmMyMy4wNC0yMy4wNCwyMy4wNC02MS40NCwwLTg0LjQ4Yy0yMy4wNC0yMy4wNC02MS40NC0yMy4wNC04NC40OCwwXHJcblx0XHRcdEw0Ny43ODcsMzU4LjYxM2MtMzQuOTg3LDM0LjEzMy0zNC45ODcsOTEuMzA3LDAsMTI2LjI5M2MxNy4wNjcsMTcuOTIsNDAuMTA3LDI2LjQ1Myw2My4xNDcsMjYuNDUzXHJcblx0XHRcdGMyMy4wNCwwLDQ2LjA4LTguNTMzLDYzLjE0Ny0yNi40NTNMNDU0LjgyNywyMDQuMTZjMjIuMTg3LTIyLjE4NywzNC45ODctNTIuOTA3LDM0Ljk4Ny04NC40OFxyXG5cdFx0XHRDNDg5LjgxMyw4OC4xMDcsNDc3LjAxMyw1Ny4zODcsNDU0LjgyNywzNS4yelwiLz5cclxuXHQ8L2c+XHJcbjwvc3ZnPlxyXG4iLCI8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbjxwYXRoIGQ9XCJNMTEuNzYwNSAxNy4zMDI5TDYuMzI0MjIgMTIuMTQ5NEwxMS43NjA1IDYuOTk5NjhcIiBzdHJva2U9XCIjMTYxNzE3XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiLz5cbjxwYXRoIGQ9XCJNNi40Mjc5MSAxMi4xNDk0TDE4IDEyLjE0OTRcIiBzdHJva2U9XCIjMTYxNzE3XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiLz5cbjwvc3ZnPlxuIiwiPHN2ZyB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMjhcIiBzdHlsZT1cIm1hcmdpbi10b3A6MnB4XCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuPHBhdGggZD1cIk0xMCAyQzE0LjQxODMgMiAxOCA1LjU4MTcyIDE4IDEwQzE4IDE0LjQxODMgMTQuNDE4MyAxOCAxMCAxOEM1LjU4MTcyIDE4IDIgMTQuNDE4MyAyIDEwQzIgNS41ODE3MiA1LjU4MTcyIDIgMTAgMlpNMTAgM0M2LjEzNDAxIDMgMyA2LjEzNDAxIDMgMTBDMyAxMy44NjYgNi4xMzQwMSAxNyAxMCAxN0MxMy44NjYgMTcgMTcgMTMuODY2IDE3IDEwQzE3IDYuMTM0MDEgMTMuODY2IDMgMTAgM1pNMTAgMTIuNUMxMC40MTQyIDEyLjUgMTAuNzUgMTIuODM1OCAxMC43NSAxMy4yNUMxMC43NSAxMy42NjQyIDEwLjQxNDIgMTQgMTAgMTRDOS41ODU3OSAxNCA5LjI1IDEzLjY2NDIgOS4yNSAxMy4yNUM5LjI1IDEyLjgzNTggOS41ODU3OSAxMi41IDEwIDEyLjVaTTEwIDZDMTAuMjQ1NSA2IDEwLjQ0OTYgNi4xNzY4OCAxMC40OTE5IDYuNDEwMTJMMTAuNSA2LjVWMTFDMTAuNSAxMS4yNzYxIDEwLjI3NjEgMTEuNSAxMCAxMS41QzkuNzU0NTQgMTEuNSA5LjU1MDM5IDExLjMyMzEgOS41MDgwNiAxMS4wODk5TDkuNSAxMVY2LjVDOS41IDYuMjIzODYgOS43MjM4NiA2IDEwIDZaXCIgZmlsbD1cIndoaXRlXCIvPlxuPC9zdmc+XG4iLCI8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbjxwYXRoIGQ9XCJNMTEuMjQ1MiAwLjgxNzA1OEMxMi4zMzIgLTAuMjY5NzQ5IDE0LjA5NDEgLTAuMjY5NzQ5IDE1LjE4MDkgMC44MTcwNThDMTYuMjIyNCAxLjg1ODU4IDE2LjI2NTggMy41MjAyNiAxNS4zMTExIDQuNjEzNDZMMTUuMTgwOSA0Ljc1MjczTDUuNTc1MDYgMTQuMzU4NkM1LjM2OTk3IDE0LjU2MzYgNS4xMjMyMyAxNC43MjEyIDQuODUyMzYgMTQuODIxTDQuNjg3MDggMTQuODczOUwwLjYzMjExMSAxNS45Nzk4QzAuMjg1NTIyIDE2LjA3NDMgLTAuMDM0NTQxNCAxNS43ODU3IDAuMDAzMDA2NTUgMTUuNDQ1MkwwLjAxODE3MDQgMTUuMzY1OEwxLjEyNDA3IDExLjMxMDlDMS4yMDAzOSAxMS4wMzEgMS4zMzY0NiAxMC43NzE4IDEuNTIyMTIgMTAuNTUwOEwxLjYzOTM5IDEwLjQyMjlMMTEuMjQ1MiAwLjgxNzA1OFpNMTAuMzg1IDMuMDkxOTVMMi4zNDY0OSAxMS4xM0MyLjI1NDIgMTEuMjIyMyAyLjE4MTE3IDExLjMzMTQgMi4xMzExMSAxMS40NTExTDIuMDg4ODQgMTEuNTc0TDEuMjEyMiAxNC43ODQ3TDQuNDIzOTcgMTMuOTA5MUM0LjUwNzkxIDEzLjg4NjIgNC41ODgxNSAxMy44NTI2IDQuNjYyNzggMTMuODA5M0w0Ljc3MDI4IDEzLjczNzJMNC44Njc5NiAxMy42NTE1TDEyLjkwNiA1LjYxMjk1TDEwLjM4NSAzLjA5MTk1Wk0xNC40NzM4IDEuNTI0MTdDMTMuODE2MiAwLjg2NjU2NSAxMi43NzI3IDAuODMwMDMxIDEyLjA3MjIgMS40MTQ1N0wxMS45NTIzIDEuNTI0MTdMMTEuMDkyIDIuMzg0OTVMMTMuNjEzIDQuOTA1OTVMMTQuNDczOCA0LjA0NTYzQzE1LjEzMTQgMy4zODgwMyAxNS4xNjc5IDIuMzQ0NTUgMTQuNTgzNCAxLjY0NDA3TDE0LjQ3MzggMS41MjQxN1pcIiBmaWxsPVwiI2ZmZmZmZlwiLz5cbjwvc3ZnPlxuIiwiPHN2ZWx0ZTpvcHRpb25zIHRhZz1cIm55bGFzLWNvbnRhY3QtaW1hZ2VcIiAvPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBDb250YWN0QXZhdGFyU3RvcmUgfSBmcm9tIFwiQGNvbW1vbnNcIjtcbiAgaW1wb3J0IHsgYmVmb3JlVXBkYXRlIH0gZnJvbSBcInN2ZWx0ZS9pbnRlcm5hbFwiO1xuXG4gIGV4cG9ydCBsZXQgY29udGFjdDtcbiAgZXhwb3J0IGxldCBjb250YWN0X3F1ZXJ5O1xuICBleHBvcnQgbGV0IGhlaWdodCA9IFwiMzJweFwiO1xuICBleHBvcnQgbGV0IHdpZHRoID0gXCIzMnB4XCI7XG4gICQ6IGltYWdlID0gbnVsbDtcblxuICBiZWZvcmVVcGRhdGUoYXN5bmMgKCkgPT4ge1xuICAgIGlmIChjb250YWN0ICYmIGNvbnRhY3QucGljdHVyZV91cmwpIHtcbiAgICAgIGltYWdlID0gYXdhaXQgQ29udGFjdEF2YXRhclN0b3JlLmdldENvbnRhY3RBdmF0YXIoXG4gICAgICAgIGNvbnRhY3RfcXVlcnksXG4gICAgICAgIGNvbnRhY3QuaWQsXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbWFnZSA9IG51bGw7XG4gICAgfVxuICB9KTtcbjwvc2NyaXB0PlxuXG57I2lmIGltYWdlfVxuICA8aW1nXG4gICAgYWx0PVwiXCJcbiAgICBzdHlsZT1cImhlaWdodDoge2hlaWdodH07IHdpZHRoOiB7d2lkdGh9OyBib3JkZXItcmFkaXVzOiA1MCU7XCJcbiAgICBzcmM9XCJkYXRhOmltYWdlL2pwZztiYXNlNjQse2ltYWdlfVwiXG4gIC8+XG57OmVsc2UgaWYgY29udGFjdH1cbiAgPHAgc3R5bGU9XCJtYXJnaW46IDA7XCI+XG4gICAge2NvbnRhY3QuZ2l2ZW5fbmFtZSAmJiBjb250YWN0LnN1cm5hbWVcbiAgICAgID8gY29udGFjdC5naXZlbl9uYW1lLmNoYXJBdCgwKSArIGNvbnRhY3Quc3VybmFtZS5jaGFyQXQoMClcbiAgICAgIDogY29udGFjdC5uYW1lXG4gICAgICA/IGNvbnRhY3QubmFtZS5jaGFyQXQoMClcbiAgICAgIDogY29udGFjdC5lbWFpbFxuICAgICAgPyBjb250YWN0LmVtYWlsLmNoYXJBdCgwKVxuICAgICAgOiBcIj9cIn1cbiAgPC9wPlxuey9pZn1cbiIsImltcG9ydCB0eXBlIHsgRmlsZSB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuaW1wb3J0IHsgRGlzYWxsb3dlZENvbnRlbnRUeXBlcyB9IGZyb20gXCJAY29tbW9ucy9jb25zdGFudHMvYXR0YWNobWVudC1jb250ZW50LXR5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBpc0ZpbGVBbkF0dGFjaG1lbnQgPSAoZmlsZTogRmlsZSk6IGJvb2xlYW4gPT5cbiAgZmlsZS5jb250ZW50X2Rpc3Bvc2l0aW9uID09PSBcImF0dGFjaG1lbnRcIiAmJlxuICAhIWZpbGUuZmlsZW5hbWUgJiZcbiAgIURpc2FsbG93ZWRDb250ZW50VHlwZXMuaW5jbHVkZXMoZmlsZS5jb250ZW50X3R5cGUpO1xuIiwiLyohIEBsaWNlbnNlIERPTVB1cmlmeSAyLjMuNSB8IChjKSBDdXJlNTMgYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyB8IFJlbGVhc2VkIHVuZGVyIHRoZSBBcGFjaGUgbGljZW5zZSAyLjAgYW5kIE1vemlsbGEgUHVibGljIExpY2Vuc2UgMi4wIHwgZ2l0aHViLmNvbS9jdXJlNTMvRE9NUHVyaWZ5L2Jsb2IvMi4zLjUvTElDRU5TRSAqL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLkRPTVB1cmlmeSA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG4gIHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5oYXNPd25Qcm9wZXJ0eSxcbiAgICAgIHNldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mLFxuICAgICAgaXNGcm96ZW4gPSBPYmplY3QuaXNGcm96ZW4sXG4gICAgICBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gIHZhciBmcmVlemUgPSBPYmplY3QuZnJlZXplLFxuICAgICAgc2VhbCA9IE9iamVjdC5zZWFsLFxuICAgICAgY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXG5cbiAgdmFyIF9yZWYgPSB0eXBlb2YgUmVmbGVjdCAhPT0gJ3VuZGVmaW5lZCcgJiYgUmVmbGVjdCxcbiAgICAgIGFwcGx5ID0gX3JlZi5hcHBseSxcbiAgICAgIGNvbnN0cnVjdCA9IF9yZWYuY29uc3RydWN0O1xuXG4gIGlmICghYXBwbHkpIHtcbiAgICBhcHBseSA9IGZ1bmN0aW9uIGFwcGx5KGZ1biwgdGhpc1ZhbHVlLCBhcmdzKSB7XG4gICAgICByZXR1cm4gZnVuLmFwcGx5KHRoaXNWYWx1ZSwgYXJncyk7XG4gICAgfTtcbiAgfVxuXG4gIGlmICghZnJlZXplKSB7XG4gICAgZnJlZXplID0gZnVuY3Rpb24gZnJlZXplKHgpIHtcbiAgICAgIHJldHVybiB4O1xuICAgIH07XG4gIH1cblxuICBpZiAoIXNlYWwpIHtcbiAgICBzZWFsID0gZnVuY3Rpb24gc2VhbCh4KSB7XG4gICAgICByZXR1cm4geDtcbiAgICB9O1xuICB9XG5cbiAgaWYgKCFjb25zdHJ1Y3QpIHtcbiAgICBjb25zdHJ1Y3QgPSBmdW5jdGlvbiBjb25zdHJ1Y3QoRnVuYywgYXJncykge1xuICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoRnVuYywgW251bGxdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoYXJncykpKSkoKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIGFycmF5Rm9yRWFjaCA9IHVuYXBwbHkoQXJyYXkucHJvdG90eXBlLmZvckVhY2gpO1xuICB2YXIgYXJyYXlQb3AgPSB1bmFwcGx5KEFycmF5LnByb3RvdHlwZS5wb3ApO1xuICB2YXIgYXJyYXlQdXNoID0gdW5hcHBseShBcnJheS5wcm90b3R5cGUucHVzaCk7XG5cbiAgdmFyIHN0cmluZ1RvTG93ZXJDYXNlID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLnRvTG93ZXJDYXNlKTtcbiAgdmFyIHN0cmluZ01hdGNoID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLm1hdGNoKTtcbiAgdmFyIHN0cmluZ1JlcGxhY2UgPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUucmVwbGFjZSk7XG4gIHZhciBzdHJpbmdJbmRleE9mID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLmluZGV4T2YpO1xuICB2YXIgc3RyaW5nVHJpbSA9IHVuYXBwbHkoU3RyaW5nLnByb3RvdHlwZS50cmltKTtcblxuICB2YXIgcmVnRXhwVGVzdCA9IHVuYXBwbHkoUmVnRXhwLnByb3RvdHlwZS50ZXN0KTtcblxuICB2YXIgdHlwZUVycm9yQ3JlYXRlID0gdW5jb25zdHJ1Y3QoVHlwZUVycm9yKTtcblxuICBmdW5jdGlvbiB1bmFwcGx5KGZ1bmMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRoaXNBcmcpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFwcGx5KGZ1bmMsIHRoaXNBcmcsIGFyZ3MpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB1bmNvbnN0cnVjdChmdW5jKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnN0cnVjdChmdW5jLCBhcmdzKTtcbiAgICB9O1xuICB9XG5cbiAgLyogQWRkIHByb3BlcnRpZXMgdG8gYSBsb29rdXAgdGFibGUgKi9cbiAgZnVuY3Rpb24gYWRkVG9TZXQoc2V0LCBhcnJheSkge1xuICAgIGlmIChzZXRQcm90b3R5cGVPZikge1xuICAgICAgLy8gTWFrZSAnaW4nIGFuZCB0cnV0aHkgY2hlY2tzIGxpa2UgQm9vbGVhbihzZXQuY29uc3RydWN0b3IpXG4gICAgICAvLyBpbmRlcGVuZGVudCBvZiBhbnkgcHJvcGVydGllcyBkZWZpbmVkIG9uIE9iamVjdC5wcm90b3R5cGUuXG4gICAgICAvLyBQcmV2ZW50IHByb3RvdHlwZSBzZXR0ZXJzIGZyb20gaW50ZXJjZXB0aW5nIHNldCBhcyBhIHRoaXMgdmFsdWUuXG4gICAgICBzZXRQcm90b3R5cGVPZihzZXQsIG51bGwpO1xuICAgIH1cblxuICAgIHZhciBsID0gYXJyYXkubGVuZ3RoO1xuICAgIHdoaWxlIChsLS0pIHtcbiAgICAgIHZhciBlbGVtZW50ID0gYXJyYXlbbF07XG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciBsY0VsZW1lbnQgPSBzdHJpbmdUb0xvd2VyQ2FzZShlbGVtZW50KTtcbiAgICAgICAgaWYgKGxjRWxlbWVudCAhPT0gZWxlbWVudCkge1xuICAgICAgICAgIC8vIENvbmZpZyBwcmVzZXRzIChlLmcuIHRhZ3MuanMsIGF0dHJzLmpzKSBhcmUgaW1tdXRhYmxlLlxuICAgICAgICAgIGlmICghaXNGcm96ZW4oYXJyYXkpKSB7XG4gICAgICAgICAgICBhcnJheVtsXSA9IGxjRWxlbWVudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlbGVtZW50ID0gbGNFbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNldFtlbGVtZW50XSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNldDtcbiAgfVxuXG4gIC8qIFNoYWxsb3cgY2xvbmUgYW4gb2JqZWN0ICovXG4gIGZ1bmN0aW9uIGNsb25lKG9iamVjdCkge1xuICAgIHZhciBuZXdPYmplY3QgPSBjcmVhdGUobnVsbCk7XG5cbiAgICB2YXIgcHJvcGVydHkgPSB2b2lkIDA7XG4gICAgZm9yIChwcm9wZXJ0eSBpbiBvYmplY3QpIHtcbiAgICAgIGlmIChhcHBseShoYXNPd25Qcm9wZXJ0eSwgb2JqZWN0LCBbcHJvcGVydHldKSkge1xuICAgICAgICBuZXdPYmplY3RbcHJvcGVydHldID0gb2JqZWN0W3Byb3BlcnR5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3T2JqZWN0O1xuICB9XG5cbiAgLyogSUUxMCBkb2Vzbid0IHN1cHBvcnQgX19sb29rdXBHZXR0ZXJfXyBzbyBsZXRzJ1xuICAgKiBzaW11bGF0ZSBpdC4gSXQgYWxzbyBhdXRvbWF0aWNhbGx5IGNoZWNrc1xuICAgKiBpZiB0aGUgcHJvcCBpcyBmdW5jdGlvbiBvciBnZXR0ZXIgYW5kIGJlaGF2ZXNcbiAgICogYWNjb3JkaW5nbHkuICovXG4gIGZ1bmN0aW9uIGxvb2t1cEdldHRlcihvYmplY3QsIHByb3ApIHtcbiAgICB3aGlsZSAob2JqZWN0ICE9PSBudWxsKSB7XG4gICAgICB2YXIgZGVzYyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3ApO1xuICAgICAgaWYgKGRlc2MpIHtcbiAgICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHVuYXBwbHkoZGVzYy5nZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkZXNjLnZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIHVuYXBwbHkoZGVzYy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmYWxsYmFja1ZhbHVlKGVsZW1lbnQpIHtcbiAgICAgIGNvbnNvbGUud2FybignZmFsbGJhY2sgdmFsdWUgZm9yJywgZWxlbWVudCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsbGJhY2tWYWx1ZTtcbiAgfVxuXG4gIHZhciBodG1sID0gZnJlZXplKFsnYScsICdhYmJyJywgJ2Fjcm9ueW0nLCAnYWRkcmVzcycsICdhcmVhJywgJ2FydGljbGUnLCAnYXNpZGUnLCAnYXVkaW8nLCAnYicsICdiZGknLCAnYmRvJywgJ2JpZycsICdibGluaycsICdibG9ja3F1b3RlJywgJ2JvZHknLCAnYnInLCAnYnV0dG9uJywgJ2NhbnZhcycsICdjYXB0aW9uJywgJ2NlbnRlcicsICdjaXRlJywgJ2NvZGUnLCAnY29sJywgJ2NvbGdyb3VwJywgJ2NvbnRlbnQnLCAnZGF0YScsICdkYXRhbGlzdCcsICdkZCcsICdkZWNvcmF0b3InLCAnZGVsJywgJ2RldGFpbHMnLCAnZGZuJywgJ2RpYWxvZycsICdkaXInLCAnZGl2JywgJ2RsJywgJ2R0JywgJ2VsZW1lbnQnLCAnZW0nLCAnZmllbGRzZXQnLCAnZmlnY2FwdGlvbicsICdmaWd1cmUnLCAnZm9udCcsICdmb290ZXInLCAnZm9ybScsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdoZWFkJywgJ2hlYWRlcicsICdoZ3JvdXAnLCAnaHInLCAnaHRtbCcsICdpJywgJ2ltZycsICdpbnB1dCcsICdpbnMnLCAna2JkJywgJ2xhYmVsJywgJ2xlZ2VuZCcsICdsaScsICdtYWluJywgJ21hcCcsICdtYXJrJywgJ21hcnF1ZWUnLCAnbWVudScsICdtZW51aXRlbScsICdtZXRlcicsICduYXYnLCAnbm9icicsICdvbCcsICdvcHRncm91cCcsICdvcHRpb24nLCAnb3V0cHV0JywgJ3AnLCAncGljdHVyZScsICdwcmUnLCAncHJvZ3Jlc3MnLCAncScsICdycCcsICdydCcsICdydWJ5JywgJ3MnLCAnc2FtcCcsICdzZWN0aW9uJywgJ3NlbGVjdCcsICdzaGFkb3cnLCAnc21hbGwnLCAnc291cmNlJywgJ3NwYWNlcicsICdzcGFuJywgJ3N0cmlrZScsICdzdHJvbmcnLCAnc3R5bGUnLCAnc3ViJywgJ3N1bW1hcnknLCAnc3VwJywgJ3RhYmxlJywgJ3Rib2R5JywgJ3RkJywgJ3RlbXBsYXRlJywgJ3RleHRhcmVhJywgJ3Rmb290JywgJ3RoJywgJ3RoZWFkJywgJ3RpbWUnLCAndHInLCAndHJhY2snLCAndHQnLCAndScsICd1bCcsICd2YXInLCAndmlkZW8nLCAnd2JyJ10pO1xuXG4gIC8vIFNWR1xuICB2YXIgc3ZnID0gZnJlZXplKFsnc3ZnJywgJ2EnLCAnYWx0Z2x5cGgnLCAnYWx0Z2x5cGhkZWYnLCAnYWx0Z2x5cGhpdGVtJywgJ2FuaW1hdGVjb2xvcicsICdhbmltYXRlbW90aW9uJywgJ2FuaW1hdGV0cmFuc2Zvcm0nLCAnY2lyY2xlJywgJ2NsaXBwYXRoJywgJ2RlZnMnLCAnZGVzYycsICdlbGxpcHNlJywgJ2ZpbHRlcicsICdmb250JywgJ2cnLCAnZ2x5cGgnLCAnZ2x5cGhyZWYnLCAnaGtlcm4nLCAnaW1hZ2UnLCAnbGluZScsICdsaW5lYXJncmFkaWVudCcsICdtYXJrZXInLCAnbWFzaycsICdtZXRhZGF0YScsICdtcGF0aCcsICdwYXRoJywgJ3BhdHRlcm4nLCAncG9seWdvbicsICdwb2x5bGluZScsICdyYWRpYWxncmFkaWVudCcsICdyZWN0JywgJ3N0b3AnLCAnc3R5bGUnLCAnc3dpdGNoJywgJ3N5bWJvbCcsICd0ZXh0JywgJ3RleHRwYXRoJywgJ3RpdGxlJywgJ3RyZWYnLCAndHNwYW4nLCAndmlldycsICd2a2VybiddKTtcblxuICB2YXIgc3ZnRmlsdGVycyA9IGZyZWV6ZShbJ2ZlQmxlbmQnLCAnZmVDb2xvck1hdHJpeCcsICdmZUNvbXBvbmVudFRyYW5zZmVyJywgJ2ZlQ29tcG9zaXRlJywgJ2ZlQ29udm9sdmVNYXRyaXgnLCAnZmVEaWZmdXNlTGlnaHRpbmcnLCAnZmVEaXNwbGFjZW1lbnRNYXAnLCAnZmVEaXN0YW50TGlnaHQnLCAnZmVGbG9vZCcsICdmZUZ1bmNBJywgJ2ZlRnVuY0InLCAnZmVGdW5jRycsICdmZUZ1bmNSJywgJ2ZlR2F1c3NpYW5CbHVyJywgJ2ZlSW1hZ2UnLCAnZmVNZXJnZScsICdmZU1lcmdlTm9kZScsICdmZU1vcnBob2xvZ3knLCAnZmVPZmZzZXQnLCAnZmVQb2ludExpZ2h0JywgJ2ZlU3BlY3VsYXJMaWdodGluZycsICdmZVNwb3RMaWdodCcsICdmZVRpbGUnLCAnZmVUdXJidWxlbmNlJ10pO1xuXG4gIC8vIExpc3Qgb2YgU1ZHIGVsZW1lbnRzIHRoYXQgYXJlIGRpc2FsbG93ZWQgYnkgZGVmYXVsdC5cbiAgLy8gV2Ugc3RpbGwgbmVlZCB0byBrbm93IHRoZW0gc28gdGhhdCB3ZSBjYW4gZG8gbmFtZXNwYWNlXG4gIC8vIGNoZWNrcyBwcm9wZXJseSBpbiBjYXNlIG9uZSB3YW50cyB0byBhZGQgdGhlbSB0b1xuICAvLyBhbGxvdy1saXN0LlxuICB2YXIgc3ZnRGlzYWxsb3dlZCA9IGZyZWV6ZShbJ2FuaW1hdGUnLCAnY29sb3ItcHJvZmlsZScsICdjdXJzb3InLCAnZGlzY2FyZCcsICdmZWRyb3BzaGFkb3cnLCAnZm9udC1mYWNlJywgJ2ZvbnQtZmFjZS1mb3JtYXQnLCAnZm9udC1mYWNlLW5hbWUnLCAnZm9udC1mYWNlLXNyYycsICdmb250LWZhY2UtdXJpJywgJ2ZvcmVpZ25vYmplY3QnLCAnaGF0Y2gnLCAnaGF0Y2hwYXRoJywgJ21lc2gnLCAnbWVzaGdyYWRpZW50JywgJ21lc2hwYXRjaCcsICdtZXNocm93JywgJ21pc3NpbmctZ2x5cGgnLCAnc2NyaXB0JywgJ3NldCcsICdzb2xpZGNvbG9yJywgJ3Vua25vd24nLCAndXNlJ10pO1xuXG4gIHZhciBtYXRoTWwgPSBmcmVlemUoWydtYXRoJywgJ21lbmNsb3NlJywgJ21lcnJvcicsICdtZmVuY2VkJywgJ21mcmFjJywgJ21nbHlwaCcsICdtaScsICdtbGFiZWxlZHRyJywgJ21tdWx0aXNjcmlwdHMnLCAnbW4nLCAnbW8nLCAnbW92ZXInLCAnbXBhZGRlZCcsICdtcGhhbnRvbScsICdtcm9vdCcsICdtcm93JywgJ21zJywgJ21zcGFjZScsICdtc3FydCcsICdtc3R5bGUnLCAnbXN1YicsICdtc3VwJywgJ21zdWJzdXAnLCAnbXRhYmxlJywgJ210ZCcsICdtdGV4dCcsICdtdHInLCAnbXVuZGVyJywgJ211bmRlcm92ZXInXSk7XG5cbiAgLy8gU2ltaWxhcmx5IHRvIFNWRywgd2Ugd2FudCB0byBrbm93IGFsbCBNYXRoTUwgZWxlbWVudHMsXG4gIC8vIGV2ZW4gdGhvc2UgdGhhdCB3ZSBkaXNhbGxvdyBieSBkZWZhdWx0LlxuICB2YXIgbWF0aE1sRGlzYWxsb3dlZCA9IGZyZWV6ZShbJ21hY3Rpb24nLCAnbWFsaWduZ3JvdXAnLCAnbWFsaWdubWFyaycsICdtbG9uZ2RpdicsICdtc2NhcnJpZXMnLCAnbXNjYXJyeScsICdtc2dyb3VwJywgJ21zdGFjaycsICdtc2xpbmUnLCAnbXNyb3cnLCAnc2VtYW50aWNzJywgJ2Fubm90YXRpb24nLCAnYW5ub3RhdGlvbi14bWwnLCAnbXByZXNjcmlwdHMnLCAnbm9uZSddKTtcblxuICB2YXIgdGV4dCA9IGZyZWV6ZShbJyN0ZXh0J10pO1xuXG4gIHZhciBodG1sJDEgPSBmcmVlemUoWydhY2NlcHQnLCAnYWN0aW9uJywgJ2FsaWduJywgJ2FsdCcsICdhdXRvY2FwaXRhbGl6ZScsICdhdXRvY29tcGxldGUnLCAnYXV0b3BpY3R1cmVpbnBpY3R1cmUnLCAnYXV0b3BsYXknLCAnYmFja2dyb3VuZCcsICdiZ2NvbG9yJywgJ2JvcmRlcicsICdjYXB0dXJlJywgJ2NlbGxwYWRkaW5nJywgJ2NlbGxzcGFjaW5nJywgJ2NoZWNrZWQnLCAnY2l0ZScsICdjbGFzcycsICdjbGVhcicsICdjb2xvcicsICdjb2xzJywgJ2NvbHNwYW4nLCAnY29udHJvbHMnLCAnY29udHJvbHNsaXN0JywgJ2Nvb3JkcycsICdjcm9zc29yaWdpbicsICdkYXRldGltZScsICdkZWNvZGluZycsICdkZWZhdWx0JywgJ2RpcicsICdkaXNhYmxlZCcsICdkaXNhYmxlcGljdHVyZWlucGljdHVyZScsICdkaXNhYmxlcmVtb3RlcGxheWJhY2snLCAnZG93bmxvYWQnLCAnZHJhZ2dhYmxlJywgJ2VuY3R5cGUnLCAnZW50ZXJrZXloaW50JywgJ2ZhY2UnLCAnZm9yJywgJ2hlYWRlcnMnLCAnaGVpZ2h0JywgJ2hpZGRlbicsICdoaWdoJywgJ2hyZWYnLCAnaHJlZmxhbmcnLCAnaWQnLCAnaW5wdXRtb2RlJywgJ2ludGVncml0eScsICdpc21hcCcsICdraW5kJywgJ2xhYmVsJywgJ2xhbmcnLCAnbGlzdCcsICdsb2FkaW5nJywgJ2xvb3AnLCAnbG93JywgJ21heCcsICdtYXhsZW5ndGgnLCAnbWVkaWEnLCAnbWV0aG9kJywgJ21pbicsICdtaW5sZW5ndGgnLCAnbXVsdGlwbGUnLCAnbXV0ZWQnLCAnbmFtZScsICdub25jZScsICdub3NoYWRlJywgJ25vdmFsaWRhdGUnLCAnbm93cmFwJywgJ29wZW4nLCAnb3B0aW11bScsICdwYXR0ZXJuJywgJ3BsYWNlaG9sZGVyJywgJ3BsYXlzaW5saW5lJywgJ3Bvc3RlcicsICdwcmVsb2FkJywgJ3B1YmRhdGUnLCAncmFkaW9ncm91cCcsICdyZWFkb25seScsICdyZWwnLCAncmVxdWlyZWQnLCAncmV2JywgJ3JldmVyc2VkJywgJ3JvbGUnLCAncm93cycsICdyb3dzcGFuJywgJ3NwZWxsY2hlY2snLCAnc2NvcGUnLCAnc2VsZWN0ZWQnLCAnc2hhcGUnLCAnc2l6ZScsICdzaXplcycsICdzcGFuJywgJ3NyY2xhbmcnLCAnc3RhcnQnLCAnc3JjJywgJ3NyY3NldCcsICdzdGVwJywgJ3N0eWxlJywgJ3N1bW1hcnknLCAndGFiaW5kZXgnLCAndGl0bGUnLCAndHJhbnNsYXRlJywgJ3R5cGUnLCAndXNlbWFwJywgJ3ZhbGlnbicsICd2YWx1ZScsICd3aWR0aCcsICd4bWxucycsICdzbG90J10pO1xuXG4gIHZhciBzdmckMSA9IGZyZWV6ZShbJ2FjY2VudC1oZWlnaHQnLCAnYWNjdW11bGF0ZScsICdhZGRpdGl2ZScsICdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnYXNjZW50JywgJ2F0dHJpYnV0ZW5hbWUnLCAnYXR0cmlidXRldHlwZScsICdhemltdXRoJywgJ2Jhc2VmcmVxdWVuY3knLCAnYmFzZWxpbmUtc2hpZnQnLCAnYmVnaW4nLCAnYmlhcycsICdieScsICdjbGFzcycsICdjbGlwJywgJ2NsaXBwYXRodW5pdHMnLCAnY2xpcC1wYXRoJywgJ2NsaXAtcnVsZScsICdjb2xvcicsICdjb2xvci1pbnRlcnBvbGF0aW9uJywgJ2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVycycsICdjb2xvci1wcm9maWxlJywgJ2NvbG9yLXJlbmRlcmluZycsICdjeCcsICdjeScsICdkJywgJ2R4JywgJ2R5JywgJ2RpZmZ1c2Vjb25zdGFudCcsICdkaXJlY3Rpb24nLCAnZGlzcGxheScsICdkaXZpc29yJywgJ2R1cicsICdlZGdlbW9kZScsICdlbGV2YXRpb24nLCAnZW5kJywgJ2ZpbGwnLCAnZmlsbC1vcGFjaXR5JywgJ2ZpbGwtcnVsZScsICdmaWx0ZXInLCAnZmlsdGVydW5pdHMnLCAnZmxvb2QtY29sb3InLCAnZmxvb2Qtb3BhY2l0eScsICdmb250LWZhbWlseScsICdmb250LXNpemUnLCAnZm9udC1zaXplLWFkanVzdCcsICdmb250LXN0cmV0Y2gnLCAnZm9udC1zdHlsZScsICdmb250LXZhcmlhbnQnLCAnZm9udC13ZWlnaHQnLCAnZngnLCAnZnknLCAnZzEnLCAnZzInLCAnZ2x5cGgtbmFtZScsICdnbHlwaHJlZicsICdncmFkaWVudHVuaXRzJywgJ2dyYWRpZW50dHJhbnNmb3JtJywgJ2hlaWdodCcsICdocmVmJywgJ2lkJywgJ2ltYWdlLXJlbmRlcmluZycsICdpbicsICdpbjInLCAnaycsICdrMScsICdrMicsICdrMycsICdrNCcsICdrZXJuaW5nJywgJ2tleXBvaW50cycsICdrZXlzcGxpbmVzJywgJ2tleXRpbWVzJywgJ2xhbmcnLCAnbGVuZ3RoYWRqdXN0JywgJ2xldHRlci1zcGFjaW5nJywgJ2tlcm5lbG1hdHJpeCcsICdrZXJuZWx1bml0bGVuZ3RoJywgJ2xpZ2h0aW5nLWNvbG9yJywgJ2xvY2FsJywgJ21hcmtlci1lbmQnLCAnbWFya2VyLW1pZCcsICdtYXJrZXItc3RhcnQnLCAnbWFya2VyaGVpZ2h0JywgJ21hcmtlcnVuaXRzJywgJ21hcmtlcndpZHRoJywgJ21hc2tjb250ZW50dW5pdHMnLCAnbWFza3VuaXRzJywgJ21heCcsICdtYXNrJywgJ21lZGlhJywgJ21ldGhvZCcsICdtb2RlJywgJ21pbicsICduYW1lJywgJ251bW9jdGF2ZXMnLCAnb2Zmc2V0JywgJ29wZXJhdG9yJywgJ29wYWNpdHknLCAnb3JkZXInLCAnb3JpZW50JywgJ29yaWVudGF0aW9uJywgJ29yaWdpbicsICdvdmVyZmxvdycsICdwYWludC1vcmRlcicsICdwYXRoJywgJ3BhdGhsZW5ndGgnLCAncGF0dGVybmNvbnRlbnR1bml0cycsICdwYXR0ZXJudHJhbnNmb3JtJywgJ3BhdHRlcm51bml0cycsICdwb2ludHMnLCAncHJlc2VydmVhbHBoYScsICdwcmVzZXJ2ZWFzcGVjdHJhdGlvJywgJ3ByaW1pdGl2ZXVuaXRzJywgJ3InLCAncngnLCAncnknLCAncmFkaXVzJywgJ3JlZngnLCAncmVmeScsICdyZXBlYXRjb3VudCcsICdyZXBlYXRkdXInLCAncmVzdGFydCcsICdyZXN1bHQnLCAncm90YXRlJywgJ3NjYWxlJywgJ3NlZWQnLCAnc2hhcGUtcmVuZGVyaW5nJywgJ3NwZWN1bGFyY29uc3RhbnQnLCAnc3BlY3VsYXJleHBvbmVudCcsICdzcHJlYWRtZXRob2QnLCAnc3RhcnRvZmZzZXQnLCAnc3RkZGV2aWF0aW9uJywgJ3N0aXRjaHRpbGVzJywgJ3N0b3AtY29sb3InLCAnc3RvcC1vcGFjaXR5JywgJ3N0cm9rZS1kYXNoYXJyYXknLCAnc3Ryb2tlLWRhc2hvZmZzZXQnLCAnc3Ryb2tlLWxpbmVjYXAnLCAnc3Ryb2tlLWxpbmVqb2luJywgJ3N0cm9rZS1taXRlcmxpbWl0JywgJ3N0cm9rZS1vcGFjaXR5JywgJ3N0cm9rZScsICdzdHJva2Utd2lkdGgnLCAnc3R5bGUnLCAnc3VyZmFjZXNjYWxlJywgJ3N5c3RlbWxhbmd1YWdlJywgJ3RhYmluZGV4JywgJ3RhcmdldHgnLCAndGFyZ2V0eScsICd0cmFuc2Zvcm0nLCAndHJhbnNmb3JtLW9yaWdpbicsICd0ZXh0LWFuY2hvcicsICd0ZXh0LWRlY29yYXRpb24nLCAndGV4dC1yZW5kZXJpbmcnLCAndGV4dGxlbmd0aCcsICd0eXBlJywgJ3UxJywgJ3UyJywgJ3VuaWNvZGUnLCAndmFsdWVzJywgJ3ZpZXdib3gnLCAndmlzaWJpbGl0eScsICd2ZXJzaW9uJywgJ3ZlcnQtYWR2LXknLCAndmVydC1vcmlnaW4teCcsICd2ZXJ0LW9yaWdpbi15JywgJ3dpZHRoJywgJ3dvcmQtc3BhY2luZycsICd3cmFwJywgJ3dyaXRpbmctbW9kZScsICd4Y2hhbm5lbHNlbGVjdG9yJywgJ3ljaGFubmVsc2VsZWN0b3InLCAneCcsICd4MScsICd4MicsICd4bWxucycsICd5JywgJ3kxJywgJ3kyJywgJ3onLCAnem9vbWFuZHBhbiddKTtcblxuICB2YXIgbWF0aE1sJDEgPSBmcmVlemUoWydhY2NlbnQnLCAnYWNjZW50dW5kZXInLCAnYWxpZ24nLCAnYmV2ZWxsZWQnLCAnY2xvc2UnLCAnY29sdW1uc2FsaWduJywgJ2NvbHVtbmxpbmVzJywgJ2NvbHVtbnNwYW4nLCAnZGVub21hbGlnbicsICdkZXB0aCcsICdkaXInLCAnZGlzcGxheScsICdkaXNwbGF5c3R5bGUnLCAnZW5jb2RpbmcnLCAnZmVuY2UnLCAnZnJhbWUnLCAnaGVpZ2h0JywgJ2hyZWYnLCAnaWQnLCAnbGFyZ2VvcCcsICdsZW5ndGgnLCAnbGluZXRoaWNrbmVzcycsICdsc3BhY2UnLCAnbHF1b3RlJywgJ21hdGhiYWNrZ3JvdW5kJywgJ21hdGhjb2xvcicsICdtYXRoc2l6ZScsICdtYXRodmFyaWFudCcsICdtYXhzaXplJywgJ21pbnNpemUnLCAnbW92YWJsZWxpbWl0cycsICdub3RhdGlvbicsICdudW1hbGlnbicsICdvcGVuJywgJ3Jvd2FsaWduJywgJ3Jvd2xpbmVzJywgJ3Jvd3NwYWNpbmcnLCAncm93c3BhbicsICdyc3BhY2UnLCAncnF1b3RlJywgJ3NjcmlwdGxldmVsJywgJ3NjcmlwdG1pbnNpemUnLCAnc2NyaXB0c2l6ZW11bHRpcGxpZXInLCAnc2VsZWN0aW9uJywgJ3NlcGFyYXRvcicsICdzZXBhcmF0b3JzJywgJ3N0cmV0Y2h5JywgJ3N1YnNjcmlwdHNoaWZ0JywgJ3N1cHNjcmlwdHNoaWZ0JywgJ3N5bW1ldHJpYycsICd2b2Zmc2V0JywgJ3dpZHRoJywgJ3htbG5zJ10pO1xuXG4gIHZhciB4bWwgPSBmcmVlemUoWyd4bGluazpocmVmJywgJ3htbDppZCcsICd4bGluazp0aXRsZScsICd4bWw6c3BhY2UnLCAneG1sbnM6eGxpbmsnXSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vYmV0dGVyLXJlZ2V4XG4gIHZhciBNVVNUQUNIRV9FWFBSID0gc2VhbCgvXFx7XFx7W1xcc1xcU10qfFtcXHNcXFNdKlxcfVxcfS9nbSk7IC8vIFNwZWNpZnkgdGVtcGxhdGUgZGV0ZWN0aW9uIHJlZ2V4IGZvciBTQUZFX0ZPUl9URU1QTEFURVMgbW9kZVxuICB2YXIgRVJCX0VYUFIgPSBzZWFsKC88JVtcXHNcXFNdKnxbXFxzXFxTXSolPi9nbSk7XG4gIHZhciBEQVRBX0FUVFIgPSBzZWFsKC9eZGF0YS1bXFwtXFx3LlxcdTAwQjctXFx1RkZGRl0vKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICB2YXIgQVJJQV9BVFRSID0gc2VhbCgvXmFyaWEtW1xcLVxcd10rJC8pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4gIHZhciBJU19BTExPV0VEX1VSSSA9IHNlYWwoL14oPzooPzooPzpmfGh0KXRwcz98bWFpbHRvfHRlbHxjYWxsdG98Y2lkfHhtcHApOnxbXmEtel18W2EteisuXFwtXSsoPzpbXmEteisuXFwtOl18JCkpL2kgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICApO1xuICB2YXIgSVNfU0NSSVBUX09SX0RBVEEgPSBzZWFsKC9eKD86XFx3K3NjcmlwdHxkYXRhKTovaSk7XG4gIHZhciBBVFRSX1dISVRFU1BBQ0UgPSBzZWFsKC9bXFx1MDAwMC1cXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUxODBFXFx1MjAwMC1cXHUyMDI5XFx1MjA1RlxcdTMwMDBdL2cgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb250cm9sLXJlZ2V4XG4gICk7XG5cbiAgdmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG4gIGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheSQxKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbiAgdmFyIGdldEdsb2JhbCA9IGZ1bmN0aW9uIGdldEdsb2JhbCgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogd2luZG93O1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbm8tb3AgcG9saWN5IGZvciBpbnRlcm5hbCB1c2Ugb25seS5cbiAgICogRG9uJ3QgZXhwb3J0IHRoaXMgZnVuY3Rpb24gb3V0c2lkZSB0aGlzIG1vZHVsZSFcbiAgICogQHBhcmFtIHs/VHJ1c3RlZFR5cGVQb2xpY3lGYWN0b3J5fSB0cnVzdGVkVHlwZXMgVGhlIHBvbGljeSBmYWN0b3J5LlxuICAgKiBAcGFyYW0ge0RvY3VtZW50fSBkb2N1bWVudCBUaGUgZG9jdW1lbnQgb2JqZWN0ICh0byBkZXRlcm1pbmUgcG9saWN5IG5hbWUgc3VmZml4KVxuICAgKiBAcmV0dXJuIHs/VHJ1c3RlZFR5cGVQb2xpY3l9IFRoZSBwb2xpY3kgY3JlYXRlZCAob3IgbnVsbCwgaWYgVHJ1c3RlZCBUeXBlc1xuICAgKiBhcmUgbm90IHN1cHBvcnRlZCkuXG4gICAqL1xuICB2YXIgX2NyZWF0ZVRydXN0ZWRUeXBlc1BvbGljeSA9IGZ1bmN0aW9uIF9jcmVhdGVUcnVzdGVkVHlwZXNQb2xpY3kodHJ1c3RlZFR5cGVzLCBkb2N1bWVudCkge1xuICAgIGlmICgodHlwZW9mIHRydXN0ZWRUeXBlcyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodHJ1c3RlZFR5cGVzKSkgIT09ICdvYmplY3QnIHx8IHR5cGVvZiB0cnVzdGVkVHlwZXMuY3JlYXRlUG9saWN5ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBBbGxvdyB0aGUgY2FsbGVycyB0byBjb250cm9sIHRoZSB1bmlxdWUgcG9saWN5IG5hbWVcbiAgICAvLyBieSBhZGRpbmcgYSBkYXRhLXR0LXBvbGljeS1zdWZmaXggdG8gdGhlIHNjcmlwdCBlbGVtZW50IHdpdGggdGhlIERPTVB1cmlmeS5cbiAgICAvLyBQb2xpY3kgY3JlYXRpb24gd2l0aCBkdXBsaWNhdGUgbmFtZXMgdGhyb3dzIGluIFRydXN0ZWQgVHlwZXMuXG4gICAgdmFyIHN1ZmZpeCA9IG51bGw7XG4gICAgdmFyIEFUVFJfTkFNRSA9ICdkYXRhLXR0LXBvbGljeS1zdWZmaXgnO1xuICAgIGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuaGFzQXR0cmlidXRlKEFUVFJfTkFNRSkpIHtcbiAgICAgIHN1ZmZpeCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuZ2V0QXR0cmlidXRlKEFUVFJfTkFNRSk7XG4gICAgfVxuXG4gICAgdmFyIHBvbGljeU5hbWUgPSAnZG9tcHVyaWZ5JyArIChzdWZmaXggPyAnIycgKyBzdWZmaXggOiAnJyk7XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3kocG9saWN5TmFtZSwge1xuICAgICAgICBjcmVhdGVIVE1MOiBmdW5jdGlvbiBjcmVhdGVIVE1MKGh0bWwkJDEpIHtcbiAgICAgICAgICByZXR1cm4gaHRtbCQkMTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgLy8gUG9saWN5IGNyZWF0aW9uIGZhaWxlZCAobW9zdCBsaWtlbHkgYW5vdGhlciBET01QdXJpZnkgc2NyaXB0IGhhc1xuICAgICAgLy8gYWxyZWFkeSBydW4pLiBTa2lwIGNyZWF0aW5nIHRoZSBwb2xpY3ksIGFzIHRoaXMgd2lsbCBvbmx5IGNhdXNlIGVycm9yc1xuICAgICAgLy8gaWYgVFQgYXJlIGVuZm9yY2VkLlxuICAgICAgY29uc29sZS53YXJuKCdUcnVzdGVkVHlwZXMgcG9saWN5ICcgKyBwb2xpY3lOYW1lICsgJyBjb3VsZCBub3QgYmUgY3JlYXRlZC4nKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVET01QdXJpZnkoKSB7XG4gICAgdmFyIHdpbmRvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZ2V0R2xvYmFsKCk7XG5cbiAgICB2YXIgRE9NUHVyaWZ5ID0gZnVuY3Rpb24gRE9NUHVyaWZ5KHJvb3QpIHtcbiAgICAgIHJldHVybiBjcmVhdGVET01QdXJpZnkocm9vdCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFZlcnNpb24gbGFiZWwsIGV4cG9zZWQgZm9yIGVhc2llciBjaGVja3NcbiAgICAgKiBpZiBET01QdXJpZnkgaXMgdXAgdG8gZGF0ZSBvciBub3RcbiAgICAgKi9cbiAgICBET01QdXJpZnkudmVyc2lvbiA9ICcyLjMuNSc7XG5cbiAgICAvKipcbiAgICAgKiBBcnJheSBvZiBlbGVtZW50cyB0aGF0IERPTVB1cmlmeSByZW1vdmVkIGR1cmluZyBzYW5pdGF0aW9uLlxuICAgICAqIEVtcHR5IGlmIG5vdGhpbmcgd2FzIHJlbW92ZWQuXG4gICAgICovXG4gICAgRE9NUHVyaWZ5LnJlbW92ZWQgPSBbXTtcblxuICAgIGlmICghd2luZG93IHx8ICF3aW5kb3cuZG9jdW1lbnQgfHwgd2luZG93LmRvY3VtZW50Lm5vZGVUeXBlICE9PSA5KSB7XG4gICAgICAvLyBOb3QgcnVubmluZyBpbiBhIGJyb3dzZXIsIHByb3ZpZGUgYSBmYWN0b3J5IGZ1bmN0aW9uXG4gICAgICAvLyBzbyB0aGF0IHlvdSBjYW4gcGFzcyB5b3VyIG93biBXaW5kb3dcbiAgICAgIERPTVB1cmlmeS5pc1N1cHBvcnRlZCA9IGZhbHNlO1xuXG4gICAgICByZXR1cm4gRE9NUHVyaWZ5O1xuICAgIH1cblxuICAgIHZhciBvcmlnaW5hbERvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuXG4gICAgdmFyIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuICAgIHZhciBEb2N1bWVudEZyYWdtZW50ID0gd2luZG93LkRvY3VtZW50RnJhZ21lbnQsXG4gICAgICAgIEhUTUxUZW1wbGF0ZUVsZW1lbnQgPSB3aW5kb3cuSFRNTFRlbXBsYXRlRWxlbWVudCxcbiAgICAgICAgTm9kZSA9IHdpbmRvdy5Ob2RlLFxuICAgICAgICBFbGVtZW50ID0gd2luZG93LkVsZW1lbnQsXG4gICAgICAgIE5vZGVGaWx0ZXIgPSB3aW5kb3cuTm9kZUZpbHRlcixcbiAgICAgICAgX3dpbmRvdyROYW1lZE5vZGVNYXAgPSB3aW5kb3cuTmFtZWROb2RlTWFwLFxuICAgICAgICBOYW1lZE5vZGVNYXAgPSBfd2luZG93JE5hbWVkTm9kZU1hcCA9PT0gdW5kZWZpbmVkID8gd2luZG93Lk5hbWVkTm9kZU1hcCB8fCB3aW5kb3cuTW96TmFtZWRBdHRyTWFwIDogX3dpbmRvdyROYW1lZE5vZGVNYXAsXG4gICAgICAgIEhUTUxGb3JtRWxlbWVudCA9IHdpbmRvdy5IVE1MRm9ybUVsZW1lbnQsXG4gICAgICAgIERPTVBhcnNlciA9IHdpbmRvdy5ET01QYXJzZXIsXG4gICAgICAgIHRydXN0ZWRUeXBlcyA9IHdpbmRvdy50cnVzdGVkVHlwZXM7XG5cblxuICAgIHZhciBFbGVtZW50UHJvdG90eXBlID0gRWxlbWVudC5wcm90b3R5cGU7XG5cbiAgICB2YXIgY2xvbmVOb2RlID0gbG9va3VwR2V0dGVyKEVsZW1lbnRQcm90b3R5cGUsICdjbG9uZU5vZGUnKTtcbiAgICB2YXIgZ2V0TmV4dFNpYmxpbmcgPSBsb29rdXBHZXR0ZXIoRWxlbWVudFByb3RvdHlwZSwgJ25leHRTaWJsaW5nJyk7XG4gICAgdmFyIGdldENoaWxkTm9kZXMgPSBsb29rdXBHZXR0ZXIoRWxlbWVudFByb3RvdHlwZSwgJ2NoaWxkTm9kZXMnKTtcbiAgICB2YXIgZ2V0UGFyZW50Tm9kZSA9IGxvb2t1cEdldHRlcihFbGVtZW50UHJvdG90eXBlLCAncGFyZW50Tm9kZScpO1xuXG4gICAgLy8gQXMgcGVyIGlzc3VlICM0NywgdGhlIHdlYi1jb21wb25lbnRzIHJlZ2lzdHJ5IGlzIGluaGVyaXRlZCBieSBhXG4gICAgLy8gbmV3IGRvY3VtZW50IGNyZWF0ZWQgdmlhIGNyZWF0ZUhUTUxEb2N1bWVudC4gQXMgcGVyIHRoZSBzcGVjXG4gICAgLy8gKGh0dHA6Ly93M2MuZ2l0aHViLmlvL3dlYmNvbXBvbmVudHMvc3BlYy9jdXN0b20vI2NyZWF0aW5nLWFuZC1wYXNzaW5nLXJlZ2lzdHJpZXMpXG4gICAgLy8gYSBuZXcgZW1wdHkgcmVnaXN0cnkgaXMgdXNlZCB3aGVuIGNyZWF0aW5nIGEgdGVtcGxhdGUgY29udGVudHMgb3duZXJcbiAgICAvLyBkb2N1bWVudCwgc28gd2UgdXNlIHRoYXQgYXMgb3VyIHBhcmVudCBkb2N1bWVudCB0byBlbnN1cmUgbm90aGluZ1xuICAgIC8vIGlzIGluaGVyaXRlZC5cbiAgICBpZiAodHlwZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgICBpZiAodGVtcGxhdGUuY29udGVudCAmJiB0ZW1wbGF0ZS5jb250ZW50Lm93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgZG9jdW1lbnQgPSB0ZW1wbGF0ZS5jb250ZW50Lm93bmVyRG9jdW1lbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHRydXN0ZWRUeXBlc1BvbGljeSA9IF9jcmVhdGVUcnVzdGVkVHlwZXNQb2xpY3kodHJ1c3RlZFR5cGVzLCBvcmlnaW5hbERvY3VtZW50KTtcbiAgICB2YXIgZW1wdHlIVE1MID0gdHJ1c3RlZFR5cGVzUG9saWN5ID8gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwoJycpIDogJyc7XG5cbiAgICB2YXIgX2RvY3VtZW50ID0gZG9jdW1lbnQsXG4gICAgICAgIGltcGxlbWVudGF0aW9uID0gX2RvY3VtZW50LmltcGxlbWVudGF0aW9uLFxuICAgICAgICBjcmVhdGVOb2RlSXRlcmF0b3IgPSBfZG9jdW1lbnQuY3JlYXRlTm9kZUl0ZXJhdG9yLFxuICAgICAgICBjcmVhdGVEb2N1bWVudEZyYWdtZW50ID0gX2RvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQsXG4gICAgICAgIGdldEVsZW1lbnRzQnlUYWdOYW1lID0gX2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lO1xuICAgIHZhciBpbXBvcnROb2RlID0gb3JpZ2luYWxEb2N1bWVudC5pbXBvcnROb2RlO1xuXG5cbiAgICB2YXIgZG9jdW1lbnRNb2RlID0ge307XG4gICAgdHJ5IHtcbiAgICAgIGRvY3VtZW50TW9kZSA9IGNsb25lKGRvY3VtZW50KS5kb2N1bWVudE1vZGUgPyBkb2N1bWVudC5kb2N1bWVudE1vZGUgOiB7fTtcbiAgICB9IGNhdGNoIChfKSB7fVxuXG4gICAgdmFyIGhvb2tzID0ge307XG5cbiAgICAvKipcbiAgICAgKiBFeHBvc2Ugd2hldGhlciB0aGlzIGJyb3dzZXIgc3VwcG9ydHMgcnVubmluZyB0aGUgZnVsbCBET01QdXJpZnkuXG4gICAgICovXG4gICAgRE9NUHVyaWZ5LmlzU3VwcG9ydGVkID0gdHlwZW9mIGdldFBhcmVudE5vZGUgPT09ICdmdW5jdGlvbicgJiYgaW1wbGVtZW50YXRpb24gJiYgdHlwZW9mIGltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnRNb2RlICE9PSA5O1xuXG4gICAgdmFyIE1VU1RBQ0hFX0VYUFIkJDEgPSBNVVNUQUNIRV9FWFBSLFxuICAgICAgICBFUkJfRVhQUiQkMSA9IEVSQl9FWFBSLFxuICAgICAgICBEQVRBX0FUVFIkJDEgPSBEQVRBX0FUVFIsXG4gICAgICAgIEFSSUFfQVRUUiQkMSA9IEFSSUFfQVRUUixcbiAgICAgICAgSVNfU0NSSVBUX09SX0RBVEEkJDEgPSBJU19TQ1JJUFRfT1JfREFUQSxcbiAgICAgICAgQVRUUl9XSElURVNQQUNFJCQxID0gQVRUUl9XSElURVNQQUNFO1xuICAgIHZhciBJU19BTExPV0VEX1VSSSQkMSA9IElTX0FMTE9XRURfVVJJO1xuXG4gICAgLyoqXG4gICAgICogV2UgY29uc2lkZXIgdGhlIGVsZW1lbnRzIGFuZCBhdHRyaWJ1dGVzIGJlbG93IHRvIGJlIHNhZmUuIElkZWFsbHlcbiAgICAgKiBkb24ndCBhZGQgYW55IG5ldyBvbmVzIGJ1dCBmZWVsIGZyZWUgdG8gcmVtb3ZlIHVud2FudGVkIG9uZXMuXG4gICAgICovXG5cbiAgICAvKiBhbGxvd2VkIGVsZW1lbnQgbmFtZXMgKi9cblxuICAgIHZhciBBTExPV0VEX1RBR1MgPSBudWxsO1xuICAgIHZhciBERUZBVUxUX0FMTE9XRURfVEFHUyA9IGFkZFRvU2V0KHt9LCBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5JDEoaHRtbCksIF90b0NvbnN1bWFibGVBcnJheSQxKHN2ZyksIF90b0NvbnN1bWFibGVBcnJheSQxKHN2Z0ZpbHRlcnMpLCBfdG9Db25zdW1hYmxlQXJyYXkkMShtYXRoTWwpLCBfdG9Db25zdW1hYmxlQXJyYXkkMSh0ZXh0KSkpO1xuXG4gICAgLyogQWxsb3dlZCBhdHRyaWJ1dGUgbmFtZXMgKi9cbiAgICB2YXIgQUxMT1dFRF9BVFRSID0gbnVsbDtcbiAgICB2YXIgREVGQVVMVF9BTExPV0VEX0FUVFIgPSBhZGRUb1NldCh7fSwgW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheSQxKGh0bWwkMSksIF90b0NvbnN1bWFibGVBcnJheSQxKHN2ZyQxKSwgX3RvQ29uc3VtYWJsZUFycmF5JDEobWF0aE1sJDEpLCBfdG9Db25zdW1hYmxlQXJyYXkkMSh4bWwpKSk7XG5cbiAgICAvKlxuICAgICAqIENvbmZpZ3VyZSBob3cgRE9NUFVyaWZ5IHNob3VsZCBoYW5kbGUgY3VzdG9tIGVsZW1lbnRzIGFuZCB0aGVpciBhdHRyaWJ1dGVzIGFzIHdlbGwgYXMgY3VzdG9taXplZCBidWlsdC1pbiBlbGVtZW50cy5cbiAgICAgKiBAcHJvcGVydHkge1JlZ0V4cHxGdW5jdGlvbnxudWxsfSB0YWdOYW1lQ2hlY2sgb25lIG9mIFtudWxsLCByZWdleFBhdHRlcm4sIHByZWRpY2F0ZV0uIERlZmF1bHQ6IGBudWxsYCAoZGlzYWxsb3cgYW55IGN1c3RvbSBlbGVtZW50cylcbiAgICAgKiBAcHJvcGVydHkge1JlZ0V4cHxGdW5jdGlvbnxudWxsfSBhdHRyaWJ1dGVOYW1lQ2hlY2sgb25lIG9mIFtudWxsLCByZWdleFBhdHRlcm4sIHByZWRpY2F0ZV0uIERlZmF1bHQ6IGBudWxsYCAoZGlzYWxsb3cgYW55IGF0dHJpYnV0ZXMgbm90IG9uIHRoZSBhbGxvdyBsaXN0KVxuICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzIGFsbG93IGN1c3RvbSBlbGVtZW50cyBkZXJpdmVkIGZyb20gYnVpbHQtaW5zIGlmIHRoZXkgcGFzcyBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2suIERlZmF1bHQ6IGBmYWxzZWAuXG4gICAgICovXG4gICAgdmFyIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HID0gT2JqZWN0LnNlYWwoT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgICB0YWdOYW1lQ2hlY2s6IHtcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBudWxsXG4gICAgICB9LFxuICAgICAgYXR0cmlidXRlTmFtZUNoZWNrOiB7XG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIGFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50czoge1xuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9XG4gICAgfSkpO1xuXG4gICAgLyogRXhwbGljaXRseSBmb3JiaWRkZW4gdGFncyAob3ZlcnJpZGVzIEFMTE9XRURfVEFHUy9BRERfVEFHUykgKi9cbiAgICB2YXIgRk9SQklEX1RBR1MgPSBudWxsO1xuXG4gICAgLyogRXhwbGljaXRseSBmb3JiaWRkZW4gYXR0cmlidXRlcyAob3ZlcnJpZGVzIEFMTE9XRURfQVRUUi9BRERfQVRUUikgKi9cbiAgICB2YXIgRk9SQklEX0FUVFIgPSBudWxsO1xuXG4gICAgLyogRGVjaWRlIGlmIEFSSUEgYXR0cmlidXRlcyBhcmUgb2theSAqL1xuICAgIHZhciBBTExPV19BUklBX0FUVFIgPSB0cnVlO1xuXG4gICAgLyogRGVjaWRlIGlmIGN1c3RvbSBkYXRhIGF0dHJpYnV0ZXMgYXJlIG9rYXkgKi9cbiAgICB2YXIgQUxMT1dfREFUQV9BVFRSID0gdHJ1ZTtcblxuICAgIC8qIERlY2lkZSBpZiB1bmtub3duIHByb3RvY29scyBhcmUgb2theSAqL1xuICAgIHZhciBBTExPV19VTktOT1dOX1BST1RPQ09MUyA9IGZhbHNlO1xuXG4gICAgLyogT3V0cHV0IHNob3VsZCBiZSBzYWZlIGZvciBjb21tb24gdGVtcGxhdGUgZW5naW5lcy5cbiAgICAgKiBUaGlzIG1lYW5zLCBET01QdXJpZnkgcmVtb3ZlcyBkYXRhIGF0dHJpYnV0ZXMsIG11c3RhY2hlcyBhbmQgRVJCXG4gICAgICovXG4gICAgdmFyIFNBRkVfRk9SX1RFTVBMQVRFUyA9IGZhbHNlO1xuXG4gICAgLyogRGVjaWRlIGlmIGRvY3VtZW50IHdpdGggPGh0bWw+Li4uIHNob3VsZCBiZSByZXR1cm5lZCAqL1xuICAgIHZhciBXSE9MRV9ET0NVTUVOVCA9IGZhbHNlO1xuXG4gICAgLyogVHJhY2sgd2hldGhlciBjb25maWcgaXMgYWxyZWFkeSBzZXQgb24gdGhpcyBpbnN0YW5jZSBvZiBET01QdXJpZnkuICovXG4gICAgdmFyIFNFVF9DT05GSUcgPSBmYWxzZTtcblxuICAgIC8qIERlY2lkZSBpZiBhbGwgZWxlbWVudHMgKGUuZy4gc3R5bGUsIHNjcmlwdCkgbXVzdCBiZSBjaGlsZHJlbiBvZlxuICAgICAqIGRvY3VtZW50LmJvZHkuIEJ5IGRlZmF1bHQsIGJyb3dzZXJzIG1pZ2h0IG1vdmUgdGhlbSB0byBkb2N1bWVudC5oZWFkICovXG4gICAgdmFyIEZPUkNFX0JPRFkgPSBmYWxzZTtcblxuICAgIC8qIERlY2lkZSBpZiBhIERPTSBgSFRNTEJvZHlFbGVtZW50YCBzaG91bGQgYmUgcmV0dXJuZWQsIGluc3RlYWQgb2YgYSBodG1sXG4gICAgICogc3RyaW5nIChvciBhIFRydXN0ZWRIVE1MIG9iamVjdCBpZiBUcnVzdGVkIFR5cGVzIGFyZSBzdXBwb3J0ZWQpLlxuICAgICAqIElmIGBXSE9MRV9ET0NVTUVOVGAgaXMgZW5hYmxlZCBhIGBIVE1MSHRtbEVsZW1lbnRgIHdpbGwgYmUgcmV0dXJuZWQgaW5zdGVhZFxuICAgICAqL1xuICAgIHZhciBSRVRVUk5fRE9NID0gZmFsc2U7XG5cbiAgICAvKiBEZWNpZGUgaWYgYSBET00gYERvY3VtZW50RnJhZ21lbnRgIHNob3VsZCBiZSByZXR1cm5lZCwgaW5zdGVhZCBvZiBhIGh0bWxcbiAgICAgKiBzdHJpbmcgIChvciBhIFRydXN0ZWRIVE1MIG9iamVjdCBpZiBUcnVzdGVkIFR5cGVzIGFyZSBzdXBwb3J0ZWQpICovXG4gICAgdmFyIFJFVFVSTl9ET01fRlJBR01FTlQgPSBmYWxzZTtcblxuICAgIC8qIFRyeSB0byByZXR1cm4gYSBUcnVzdGVkIFR5cGUgb2JqZWN0IGluc3RlYWQgb2YgYSBzdHJpbmcsIHJldHVybiBhIHN0cmluZyBpblxuICAgICAqIGNhc2UgVHJ1c3RlZCBUeXBlcyBhcmUgbm90IHN1cHBvcnRlZCAgKi9cbiAgICB2YXIgUkVUVVJOX1RSVVNURURfVFlQRSA9IGZhbHNlO1xuXG4gICAgLyogT3V0cHV0IHNob3VsZCBiZSBmcmVlIGZyb20gRE9NIGNsb2JiZXJpbmcgYXR0YWNrcz8gKi9cbiAgICB2YXIgU0FOSVRJWkVfRE9NID0gdHJ1ZTtcblxuICAgIC8qIEtlZXAgZWxlbWVudCBjb250ZW50IHdoZW4gcmVtb3ZpbmcgZWxlbWVudD8gKi9cbiAgICB2YXIgS0VFUF9DT05URU5UID0gdHJ1ZTtcblxuICAgIC8qIElmIGEgYE5vZGVgIGlzIHBhc3NlZCB0byBzYW5pdGl6ZSgpLCB0aGVuIHBlcmZvcm1zIHNhbml0aXphdGlvbiBpbi1wbGFjZSBpbnN0ZWFkXG4gICAgICogb2YgaW1wb3J0aW5nIGl0IGludG8gYSBuZXcgRG9jdW1lbnQgYW5kIHJldHVybmluZyBhIHNhbml0aXplZCBjb3B5ICovXG4gICAgdmFyIElOX1BMQUNFID0gZmFsc2U7XG5cbiAgICAvKiBBbGxvdyB1c2FnZSBvZiBwcm9maWxlcyBsaWtlIGh0bWwsIHN2ZyBhbmQgbWF0aE1sICovXG4gICAgdmFyIFVTRV9QUk9GSUxFUyA9IHt9O1xuXG4gICAgLyogVGFncyB0byBpZ25vcmUgY29udGVudCBvZiB3aGVuIEtFRVBfQ09OVEVOVCBpcyB0cnVlICovXG4gICAgdmFyIEZPUkJJRF9DT05URU5UUyA9IG51bGw7XG4gICAgdmFyIERFRkFVTFRfRk9SQklEX0NPTlRFTlRTID0gYWRkVG9TZXQoe30sIFsnYW5ub3RhdGlvbi14bWwnLCAnYXVkaW8nLCAnY29sZ3JvdXAnLCAnZGVzYycsICdmb3JlaWdub2JqZWN0JywgJ2hlYWQnLCAnaWZyYW1lJywgJ21hdGgnLCAnbWknLCAnbW4nLCAnbW8nLCAnbXMnLCAnbXRleHQnLCAnbm9lbWJlZCcsICdub2ZyYW1lcycsICdub3NjcmlwdCcsICdwbGFpbnRleHQnLCAnc2NyaXB0JywgJ3N0eWxlJywgJ3N2ZycsICd0ZW1wbGF0ZScsICd0aGVhZCcsICd0aXRsZScsICd2aWRlbycsICd4bXAnXSk7XG5cbiAgICAvKiBUYWdzIHRoYXQgYXJlIHNhZmUgZm9yIGRhdGE6IFVSSXMgKi9cbiAgICB2YXIgREFUQV9VUklfVEFHUyA9IG51bGw7XG4gICAgdmFyIERFRkFVTFRfREFUQV9VUklfVEFHUyA9IGFkZFRvU2V0KHt9LCBbJ2F1ZGlvJywgJ3ZpZGVvJywgJ2ltZycsICdzb3VyY2UnLCAnaW1hZ2UnLCAndHJhY2snXSk7XG5cbiAgICAvKiBBdHRyaWJ1dGVzIHNhZmUgZm9yIHZhbHVlcyBsaWtlIFwiamF2YXNjcmlwdDpcIiAqL1xuICAgIHZhciBVUklfU0FGRV9BVFRSSUJVVEVTID0gbnVsbDtcbiAgICB2YXIgREVGQVVMVF9VUklfU0FGRV9BVFRSSUJVVEVTID0gYWRkVG9TZXQoe30sIFsnYWx0JywgJ2NsYXNzJywgJ2ZvcicsICdpZCcsICdsYWJlbCcsICduYW1lJywgJ3BhdHRlcm4nLCAncGxhY2Vob2xkZXInLCAncm9sZScsICdzdW1tYXJ5JywgJ3RpdGxlJywgJ3ZhbHVlJywgJ3N0eWxlJywgJ3htbG5zJ10pO1xuXG4gICAgdmFyIE1BVEhNTF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTCc7XG4gICAgdmFyIFNWR19OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuICAgIHZhciBIVE1MX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcbiAgICAvKiBEb2N1bWVudCBuYW1lc3BhY2UgKi9cbiAgICB2YXIgTkFNRVNQQUNFID0gSFRNTF9OQU1FU1BBQ0U7XG4gICAgdmFyIElTX0VNUFRZX0lOUFVUID0gZmFsc2U7XG5cbiAgICAvKiBQYXJzaW5nIG9mIHN0cmljdCBYSFRNTCBkb2N1bWVudHMgKi9cbiAgICB2YXIgUEFSU0VSX01FRElBX1RZUEUgPSB2b2lkIDA7XG4gICAgdmFyIFNVUFBPUlRFRF9QQVJTRVJfTUVESUFfVFlQRVMgPSBbJ2FwcGxpY2F0aW9uL3hodG1sK3htbCcsICd0ZXh0L2h0bWwnXTtcbiAgICB2YXIgREVGQVVMVF9QQVJTRVJfTUVESUFfVFlQRSA9ICd0ZXh0L2h0bWwnO1xuICAgIHZhciB0cmFuc2Zvcm1DYXNlRnVuYyA9IHZvaWQgMDtcblxuICAgIC8qIEtlZXAgYSByZWZlcmVuY2UgdG8gY29uZmlnIHRvIHBhc3MgdG8gaG9va3MgKi9cbiAgICB2YXIgQ09ORklHID0gbnVsbDtcblxuICAgIC8qIElkZWFsbHksIGRvIG5vdCB0b3VjaCBhbnl0aGluZyBiZWxvdyB0aGlzIGxpbmUgKi9cbiAgICAvKiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICovXG5cbiAgICB2YXIgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgICB2YXIgaXNSZWdleE9yRnVuY3Rpb24gPSBmdW5jdGlvbiBpc1JlZ2V4T3JGdW5jdGlvbih0ZXN0VmFsdWUpIHtcbiAgICAgIHJldHVybiB0ZXN0VmFsdWUgaW5zdGFuY2VvZiBSZWdFeHAgfHwgdGVzdFZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb247XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9wYXJzZUNvbmZpZ1xuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBjZmcgb3B0aW9uYWwgY29uZmlnIGxpdGVyYWxcbiAgICAgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuICAgIHZhciBfcGFyc2VDb25maWcgPSBmdW5jdGlvbiBfcGFyc2VDb25maWcoY2ZnKSB7XG4gICAgICBpZiAoQ09ORklHICYmIENPTkZJRyA9PT0gY2ZnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLyogU2hpZWxkIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGZyb20gdGFtcGVyaW5nICovXG4gICAgICBpZiAoIWNmZyB8fCAodHlwZW9mIGNmZyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoY2ZnKSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNmZyA9IHt9O1xuICAgICAgfVxuXG4gICAgICAvKiBTaGllbGQgY29uZmlndXJhdGlvbiBvYmplY3QgZnJvbSBwcm90b3R5cGUgcG9sbHV0aW9uICovXG4gICAgICBjZmcgPSBjbG9uZShjZmcpO1xuXG4gICAgICAvKiBTZXQgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzICovXG4gICAgICBBTExPV0VEX1RBR1MgPSAnQUxMT1dFRF9UQUdTJyBpbiBjZmcgPyBhZGRUb1NldCh7fSwgY2ZnLkFMTE9XRURfVEFHUykgOiBERUZBVUxUX0FMTE9XRURfVEFHUztcbiAgICAgIEFMTE9XRURfQVRUUiA9ICdBTExPV0VEX0FUVFInIGluIGNmZyA/IGFkZFRvU2V0KHt9LCBjZmcuQUxMT1dFRF9BVFRSKSA6IERFRkFVTFRfQUxMT1dFRF9BVFRSO1xuICAgICAgVVJJX1NBRkVfQVRUUklCVVRFUyA9ICdBRERfVVJJX1NBRkVfQVRUUicgaW4gY2ZnID8gYWRkVG9TZXQoY2xvbmUoREVGQVVMVF9VUklfU0FGRV9BVFRSSUJVVEVTKSwgY2ZnLkFERF9VUklfU0FGRV9BVFRSKSA6IERFRkFVTFRfVVJJX1NBRkVfQVRUUklCVVRFUztcbiAgICAgIERBVEFfVVJJX1RBR1MgPSAnQUREX0RBVEFfVVJJX1RBR1MnIGluIGNmZyA/IGFkZFRvU2V0KGNsb25lKERFRkFVTFRfREFUQV9VUklfVEFHUyksIGNmZy5BRERfREFUQV9VUklfVEFHUykgOiBERUZBVUxUX0RBVEFfVVJJX1RBR1M7XG4gICAgICBGT1JCSURfQ09OVEVOVFMgPSAnRk9SQklEX0NPTlRFTlRTJyBpbiBjZmcgPyBhZGRUb1NldCh7fSwgY2ZnLkZPUkJJRF9DT05URU5UUykgOiBERUZBVUxUX0ZPUkJJRF9DT05URU5UUztcbiAgICAgIEZPUkJJRF9UQUdTID0gJ0ZPUkJJRF9UQUdTJyBpbiBjZmcgPyBhZGRUb1NldCh7fSwgY2ZnLkZPUkJJRF9UQUdTKSA6IHt9O1xuICAgICAgRk9SQklEX0FUVFIgPSAnRk9SQklEX0FUVFInIGluIGNmZyA/IGFkZFRvU2V0KHt9LCBjZmcuRk9SQklEX0FUVFIpIDoge307XG4gICAgICBVU0VfUFJPRklMRVMgPSAnVVNFX1BST0ZJTEVTJyBpbiBjZmcgPyBjZmcuVVNFX1BST0ZJTEVTIDogZmFsc2U7XG4gICAgICBBTExPV19BUklBX0FUVFIgPSBjZmcuQUxMT1dfQVJJQV9BVFRSICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXG4gICAgICBBTExPV19EQVRBX0FUVFIgPSBjZmcuQUxMT1dfREFUQV9BVFRSICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXG4gICAgICBBTExPV19VTktOT1dOX1BST1RPQ09MUyA9IGNmZy5BTExPV19VTktOT1dOX1BST1RPQ09MUyB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgICAgU0FGRV9GT1JfVEVNUExBVEVTID0gY2ZnLlNBRkVfRk9SX1RFTVBMQVRFUyB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgICAgV0hPTEVfRE9DVU1FTlQgPSBjZmcuV0hPTEVfRE9DVU1FTlQgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICAgIFJFVFVSTl9ET00gPSBjZmcuUkVUVVJOX0RPTSB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgICAgUkVUVVJOX0RPTV9GUkFHTUVOVCA9IGNmZy5SRVRVUk5fRE9NX0ZSQUdNRU5UIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgICBSRVRVUk5fVFJVU1RFRF9UWVBFID0gY2ZnLlJFVFVSTl9UUlVTVEVEX1RZUEUgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICAgIEZPUkNFX0JPRFkgPSBjZmcuRk9SQ0VfQk9EWSB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgICAgU0FOSVRJWkVfRE9NID0gY2ZnLlNBTklUSVpFX0RPTSAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuICAgICAgS0VFUF9DT05URU5UID0gY2ZnLktFRVBfQ09OVEVOVCAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuICAgICAgSU5fUExBQ0UgPSBjZmcuSU5fUExBQ0UgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICAgIElTX0FMTE9XRURfVVJJJCQxID0gY2ZnLkFMTE9XRURfVVJJX1JFR0VYUCB8fCBJU19BTExPV0VEX1VSSSQkMTtcbiAgICAgIE5BTUVTUEFDRSA9IGNmZy5OQU1FU1BBQ0UgfHwgSFRNTF9OQU1FU1BBQ0U7XG4gICAgICBpZiAoY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HICYmIGlzUmVnZXhPckZ1bmN0aW9uKGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2spKSB7XG4gICAgICAgIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayA9IGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2s7XG4gICAgICB9XG5cbiAgICAgIGlmIChjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcgJiYgaXNSZWdleE9yRnVuY3Rpb24oY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjaykpIHtcbiAgICAgICAgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrID0gY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjaztcbiAgICAgIH1cblxuICAgICAgaWYgKGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORyAmJiB0eXBlb2YgY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50cyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50cyA9IGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy5hbGxvd0N1c3RvbWl6ZWRCdWlsdEluRWxlbWVudHM7XG4gICAgICB9XG5cbiAgICAgIFBBUlNFUl9NRURJQV9UWVBFID1cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1pbmNsdWRlc1xuICAgICAgU1VQUE9SVEVEX1BBUlNFUl9NRURJQV9UWVBFUy5pbmRleE9mKGNmZy5QQVJTRVJfTUVESUFfVFlQRSkgPT09IC0xID8gUEFSU0VSX01FRElBX1RZUEUgPSBERUZBVUxUX1BBUlNFUl9NRURJQV9UWVBFIDogUEFSU0VSX01FRElBX1RZUEUgPSBjZmcuUEFSU0VSX01FRElBX1RZUEU7XG5cbiAgICAgIC8vIEhUTUwgdGFncyBhbmQgYXR0cmlidXRlcyBhcmUgbm90IGNhc2Utc2Vuc2l0aXZlLCBjb252ZXJ0aW5nIHRvIGxvd2VyY2FzZS4gS2VlcGluZyBYSFRNTCBhcyBpcy5cbiAgICAgIHRyYW5zZm9ybUNhc2VGdW5jID0gUEFSU0VSX01FRElBX1RZUEUgPT09ICdhcHBsaWNhdGlvbi94aHRtbCt4bWwnID8gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgICB9IDogc3RyaW5nVG9Mb3dlckNhc2U7XG5cbiAgICAgIGlmIChTQUZFX0ZPUl9URU1QTEFURVMpIHtcbiAgICAgICAgQUxMT1dfREFUQV9BVFRSID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChSRVRVUk5fRE9NX0ZSQUdNRU5UKSB7XG4gICAgICAgIFJFVFVSTl9ET00gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBQYXJzZSBwcm9maWxlIGluZm8gKi9cbiAgICAgIGlmIChVU0VfUFJPRklMRVMpIHtcbiAgICAgICAgQUxMT1dFRF9UQUdTID0gYWRkVG9TZXQoe30sIFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkkMSh0ZXh0KSkpO1xuICAgICAgICBBTExPV0VEX0FUVFIgPSBbXTtcbiAgICAgICAgaWYgKFVTRV9QUk9GSUxFUy5odG1sID09PSB0cnVlKSB7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBodG1sKTtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIGh0bWwkMSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVVNFX1BST0ZJTEVTLnN2ZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgc3ZnKTtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIHN2ZyQxKTtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIHhtbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVVNFX1BST0ZJTEVTLnN2Z0ZpbHRlcnMgPT09IHRydWUpIHtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIHN2Z0ZpbHRlcnMpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgc3ZnJDEpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgeG1sKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVU0VfUFJPRklMRVMubWF0aE1sID09PSB0cnVlKSB7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBtYXRoTWwpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgbWF0aE1sJDEpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgeG1sKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiBNZXJnZSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgKi9cbiAgICAgIGlmIChjZmcuQUREX1RBR1MpIHtcbiAgICAgICAgaWYgKEFMTE9XRURfVEFHUyA9PT0gREVGQVVMVF9BTExPV0VEX1RBR1MpIHtcbiAgICAgICAgICBBTExPV0VEX1RBR1MgPSBjbG9uZShBTExPV0VEX1RBR1MpO1xuICAgICAgICB9XG5cbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBjZmcuQUREX1RBR1MpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2ZnLkFERF9BVFRSKSB7XG4gICAgICAgIGlmIChBTExPV0VEX0FUVFIgPT09IERFRkFVTFRfQUxMT1dFRF9BVFRSKSB7XG4gICAgICAgICAgQUxMT1dFRF9BVFRSID0gY2xvbmUoQUxMT1dFRF9BVFRSKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgY2ZnLkFERF9BVFRSKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNmZy5BRERfVVJJX1NBRkVfQVRUUikge1xuICAgICAgICBhZGRUb1NldChVUklfU0FGRV9BVFRSSUJVVEVTLCBjZmcuQUREX1VSSV9TQUZFX0FUVFIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2ZnLkZPUkJJRF9DT05URU5UUykge1xuICAgICAgICBpZiAoRk9SQklEX0NPTlRFTlRTID09PSBERUZBVUxUX0ZPUkJJRF9DT05URU5UUykge1xuICAgICAgICAgIEZPUkJJRF9DT05URU5UUyA9IGNsb25lKEZPUkJJRF9DT05URU5UUyk7XG4gICAgICAgIH1cblxuICAgICAgICBhZGRUb1NldChGT1JCSURfQ09OVEVOVFMsIGNmZy5GT1JCSURfQ09OVEVOVFMpO1xuICAgICAgfVxuXG4gICAgICAvKiBBZGQgI3RleHQgaW4gY2FzZSBLRUVQX0NPTlRFTlQgaXMgc2V0IHRvIHRydWUgKi9cbiAgICAgIGlmIChLRUVQX0NPTlRFTlQpIHtcbiAgICAgICAgQUxMT1dFRF9UQUdTWycjdGV4dCddID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLyogQWRkIGh0bWwsIGhlYWQgYW5kIGJvZHkgdG8gQUxMT1dFRF9UQUdTIGluIGNhc2UgV0hPTEVfRE9DVU1FTlQgaXMgdHJ1ZSAqL1xuICAgICAgaWYgKFdIT0xFX0RPQ1VNRU5UKSB7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgWydodG1sJywgJ2hlYWQnLCAnYm9keSddKTtcbiAgICAgIH1cblxuICAgICAgLyogQWRkIHRib2R5IHRvIEFMTE9XRURfVEFHUyBpbiBjYXNlIHRhYmxlcyBhcmUgcGVybWl0dGVkLCBzZWUgIzI4NiwgIzM2NSAqL1xuICAgICAgaWYgKEFMTE9XRURfVEFHUy50YWJsZSkge1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIFsndGJvZHknXSk7XG4gICAgICAgIGRlbGV0ZSBGT1JCSURfVEFHUy50Ym9keTtcbiAgICAgIH1cblxuICAgICAgLy8gUHJldmVudCBmdXJ0aGVyIG1hbmlwdWxhdGlvbiBvZiBjb25maWd1cmF0aW9uLlxuICAgICAgLy8gTm90IGF2YWlsYWJsZSBpbiBJRTgsIFNhZmFyaSA1LCBldGMuXG4gICAgICBpZiAoZnJlZXplKSB7XG4gICAgICAgIGZyZWV6ZShjZmcpO1xuICAgICAgfVxuXG4gICAgICBDT05GSUcgPSBjZmc7XG4gICAgfTtcblxuICAgIHZhciBNQVRITUxfVEVYVF9JTlRFR1JBVElPTl9QT0lOVFMgPSBhZGRUb1NldCh7fSwgWydtaScsICdtbycsICdtbicsICdtcycsICdtdGV4dCddKTtcblxuICAgIHZhciBIVE1MX0lOVEVHUkFUSU9OX1BPSU5UUyA9IGFkZFRvU2V0KHt9LCBbJ2ZvcmVpZ25vYmplY3QnLCAnZGVzYycsICd0aXRsZScsICdhbm5vdGF0aW9uLXhtbCddKTtcblxuICAgIC8qIEtlZXAgdHJhY2sgb2YgYWxsIHBvc3NpYmxlIFNWRyBhbmQgTWF0aE1MIHRhZ3NcbiAgICAgKiBzbyB0aGF0IHdlIGNhbiBwZXJmb3JtIHRoZSBuYW1lc3BhY2UgY2hlY2tzXG4gICAgICogY29ycmVjdGx5LiAqL1xuICAgIHZhciBBTExfU1ZHX1RBR1MgPSBhZGRUb1NldCh7fSwgc3ZnKTtcbiAgICBhZGRUb1NldChBTExfU1ZHX1RBR1MsIHN2Z0ZpbHRlcnMpO1xuICAgIGFkZFRvU2V0KEFMTF9TVkdfVEFHUywgc3ZnRGlzYWxsb3dlZCk7XG5cbiAgICB2YXIgQUxMX01BVEhNTF9UQUdTID0gYWRkVG9TZXQoe30sIG1hdGhNbCk7XG4gICAgYWRkVG9TZXQoQUxMX01BVEhNTF9UQUdTLCBtYXRoTWxEaXNhbGxvd2VkKTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtFbGVtZW50fSBlbGVtZW50IGEgRE9NIGVsZW1lbnQgd2hvc2UgbmFtZXNwYWNlIGlzIGJlaW5nIGNoZWNrZWRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJuIGZhbHNlIGlmIHRoZSBlbGVtZW50IGhhcyBhXG4gICAgICogIG5hbWVzcGFjZSB0aGF0IGEgc3BlYy1jb21wbGlhbnQgcGFyc2VyIHdvdWxkIG5ldmVyXG4gICAgICogIHJldHVybi4gUmV0dXJuIHRydWUgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIHZhciBfY2hlY2tWYWxpZE5hbWVzcGFjZSA9IGZ1bmN0aW9uIF9jaGVja1ZhbGlkTmFtZXNwYWNlKGVsZW1lbnQpIHtcbiAgICAgIHZhciBwYXJlbnQgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuXG4gICAgICAvLyBJbiBKU0RPTSwgaWYgd2UncmUgaW5zaWRlIHNoYWRvdyBET00sIHRoZW4gcGFyZW50Tm9kZVxuICAgICAgLy8gY2FuIGJlIG51bGwuIFdlIGp1c3Qgc2ltdWxhdGUgcGFyZW50IGluIHRoaXMgY2FzZS5cbiAgICAgIGlmICghcGFyZW50IHx8ICFwYXJlbnQudGFnTmFtZSkge1xuICAgICAgICBwYXJlbnQgPSB7XG4gICAgICAgICAgbmFtZXNwYWNlVVJJOiBIVE1MX05BTUVTUEFDRSxcbiAgICAgICAgICB0YWdOYW1lOiAndGVtcGxhdGUnXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHZhciB0YWdOYW1lID0gc3RyaW5nVG9Mb3dlckNhc2UoZWxlbWVudC50YWdOYW1lKTtcbiAgICAgIHZhciBwYXJlbnRUYWdOYW1lID0gc3RyaW5nVG9Mb3dlckNhc2UocGFyZW50LnRhZ05hbWUpO1xuXG4gICAgICBpZiAoZWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IFNWR19OQU1FU1BBQ0UpIHtcbiAgICAgICAgLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIEhUTUwgbmFtZXNwYWNlIHRvIFNWR1xuICAgICAgICAvLyBpcyB2aWEgPHN2Zz4uIElmIGl0IGhhcHBlbnMgdmlhIGFueSBvdGhlciB0YWcsIHRoZW5cbiAgICAgICAgLy8gaXQgc2hvdWxkIGJlIGtpbGxlZC5cbiAgICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICAgICAgcmV0dXJuIHRhZ05hbWUgPT09ICdzdmcnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIE1hdGhNTCB0byBTVkcgaXMgdmlhXG4gICAgICAgIC8vIHN2ZyBpZiBwYXJlbnQgaXMgZWl0aGVyIDxhbm5vdGF0aW9uLXhtbD4gb3IgTWF0aE1MXG4gICAgICAgIC8vIHRleHQgaW50ZWdyYXRpb24gcG9pbnRzLlxuICAgICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gTUFUSE1MX05BTUVTUEFDRSkge1xuICAgICAgICAgIHJldHVybiB0YWdOYW1lID09PSAnc3ZnJyAmJiAocGFyZW50VGFnTmFtZSA9PT0gJ2Fubm90YXRpb24teG1sJyB8fCBNQVRITUxfVEVYVF9JTlRFR1JBVElPTl9QT0lOVFNbcGFyZW50VGFnTmFtZV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2Ugb25seSBhbGxvdyBlbGVtZW50cyB0aGF0IGFyZSBkZWZpbmVkIGluIFNWR1xuICAgICAgICAvLyBzcGVjLiBBbGwgb3RoZXJzIGFyZSBkaXNhbGxvd2VkIGluIFNWRyBuYW1lc3BhY2UuXG4gICAgICAgIHJldHVybiBCb29sZWFuKEFMTF9TVkdfVEFHU1t0YWdOYW1lXSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50Lm5hbWVzcGFjZVVSSSA9PT0gTUFUSE1MX05BTUVTUEFDRSkge1xuICAgICAgICAvLyBUaGUgb25seSB3YXkgdG8gc3dpdGNoIGZyb20gSFRNTCBuYW1lc3BhY2UgdG8gTWF0aE1MXG4gICAgICAgIC8vIGlzIHZpYSA8bWF0aD4uIElmIGl0IGhhcHBlbnMgdmlhIGFueSBvdGhlciB0YWcsIHRoZW5cbiAgICAgICAgLy8gaXQgc2hvdWxkIGJlIGtpbGxlZC5cbiAgICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICAgICAgcmV0dXJuIHRhZ05hbWUgPT09ICdtYXRoJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSBvbmx5IHdheSB0byBzd2l0Y2ggZnJvbSBTVkcgdG8gTWF0aE1MIGlzIHZpYVxuICAgICAgICAvLyA8bWF0aD4gYW5kIEhUTUwgaW50ZWdyYXRpb24gcG9pbnRzXG4gICAgICAgIGlmIChwYXJlbnQubmFtZXNwYWNlVVJJID09PSBTVkdfTkFNRVNQQUNFKSB7XG4gICAgICAgICAgcmV0dXJuIHRhZ05hbWUgPT09ICdtYXRoJyAmJiBIVE1MX0lOVEVHUkFUSU9OX1BPSU5UU1twYXJlbnRUYWdOYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlIG9ubHkgYWxsb3cgZWxlbWVudHMgdGhhdCBhcmUgZGVmaW5lZCBpbiBNYXRoTUxcbiAgICAgICAgLy8gc3BlYy4gQWxsIG90aGVycyBhcmUgZGlzYWxsb3dlZCBpbiBNYXRoTUwgbmFtZXNwYWNlLlxuICAgICAgICByZXR1cm4gQm9vbGVhbihBTExfTUFUSE1MX1RBR1NbdGFnTmFtZV0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICAgIC8vIFRoZSBvbmx5IHdheSB0byBzd2l0Y2ggZnJvbSBTVkcgdG8gSFRNTCBpcyB2aWFcbiAgICAgICAgLy8gSFRNTCBpbnRlZ3JhdGlvbiBwb2ludHMsIGFuZCBmcm9tIE1hdGhNTCB0byBIVE1MXG4gICAgICAgIC8vIGlzIHZpYSBNYXRoTUwgdGV4dCBpbnRlZ3JhdGlvbiBwb2ludHNcbiAgICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IFNWR19OQU1FU1BBQ0UgJiYgIUhUTUxfSU5URUdSQVRJT05fUE9JTlRTW3BhcmVudFRhZ05hbWVdKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IE1BVEhNTF9OQU1FU1BBQ0UgJiYgIU1BVEhNTF9URVhUX0lOVEVHUkFUSU9OX1BPSU5UU1twYXJlbnRUYWdOYW1lXSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENlcnRhaW4gZWxlbWVudHMgYXJlIGFsbG93ZWQgaW4gYm90aCBTVkcgYW5kIEhUTUxcbiAgICAgICAgLy8gbmFtZXNwYWNlLiBXZSBuZWVkIHRvIHNwZWNpZnkgdGhlbSBleHBsaWNpdGx5XG4gICAgICAgIC8vIHNvIHRoYXQgdGhleSBkb24ndCBnZXQgZXJyb25vdXNseSBkZWxldGVkIGZyb21cbiAgICAgICAgLy8gSFRNTCBuYW1lc3BhY2UuXG4gICAgICAgIHZhciBjb21tb25TdmdBbmRIVE1MRWxlbWVudHMgPSBhZGRUb1NldCh7fSwgWyd0aXRsZScsICdzdHlsZScsICdmb250JywgJ2EnLCAnc2NyaXB0J10pO1xuXG4gICAgICAgIC8vIFdlIGRpc2FsbG93IHRhZ3MgdGhhdCBhcmUgc3BlY2lmaWMgZm9yIE1hdGhNTFxuICAgICAgICAvLyBvciBTVkcgYW5kIHNob3VsZCBuZXZlciBhcHBlYXIgaW4gSFRNTCBuYW1lc3BhY2VcbiAgICAgICAgcmV0dXJuICFBTExfTUFUSE1MX1RBR1NbdGFnTmFtZV0gJiYgKGNvbW1vblN2Z0FuZEhUTUxFbGVtZW50c1t0YWdOYW1lXSB8fCAhQUxMX1NWR19UQUdTW3RhZ05hbWVdKTtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvZGUgc2hvdWxkIG5ldmVyIHJlYWNoIHRoaXMgcGxhY2UgKHRoaXMgbWVhbnNcbiAgICAgIC8vIHRoYXQgdGhlIGVsZW1lbnQgc29tZWhvdyBnb3QgbmFtZXNwYWNlIHRoYXQgaXMgbm90XG4gICAgICAvLyBIVE1MLCBTVkcgb3IgTWF0aE1MKS4gUmV0dXJuIGZhbHNlIGp1c3QgaW4gY2FzZS5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX2ZvcmNlUmVtb3ZlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOb2RlfSBub2RlIGEgRE9NIG5vZGVcbiAgICAgKi9cbiAgICB2YXIgX2ZvcmNlUmVtb3ZlID0gZnVuY3Rpb24gX2ZvcmNlUmVtb3ZlKG5vZGUpIHtcbiAgICAgIGFycmF5UHVzaChET01QdXJpZnkucmVtb3ZlZCwgeyBlbGVtZW50OiBub2RlIH0pO1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWRvbS1ub2RlLXJlbW92ZVxuICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbm9kZS5vdXRlckhUTUwgPSBlbXB0eUhUTUw7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICBub2RlLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9yZW1vdmVBdHRyaWJ1dGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZSBhbiBBdHRyaWJ1dGUgbmFtZVxuICAgICAqIEBwYXJhbSAge05vZGV9IG5vZGUgYSBET00gbm9kZVxuICAgICAqL1xuICAgIHZhciBfcmVtb3ZlQXR0cmlidXRlID0gZnVuY3Rpb24gX3JlbW92ZUF0dHJpYnV0ZShuYW1lLCBub2RlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhcnJheVB1c2goRE9NUHVyaWZ5LnJlbW92ZWQsIHtcbiAgICAgICAgICBhdHRyaWJ1dGU6IG5vZGUuZ2V0QXR0cmlidXRlTm9kZShuYW1lKSxcbiAgICAgICAgICBmcm9tOiBub2RlXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBhcnJheVB1c2goRE9NUHVyaWZ5LnJlbW92ZWQsIHtcbiAgICAgICAgICBhdHRyaWJ1dGU6IG51bGwsXG4gICAgICAgICAgZnJvbTogbm9kZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cbiAgICAgIC8vIFdlIHZvaWQgYXR0cmlidXRlIHZhbHVlcyBmb3IgdW5yZW1vdmFibGUgXCJpc1wiXCIgYXR0cmlidXRlc1xuICAgICAgaWYgKG5hbWUgPT09ICdpcycgJiYgIUFMTE9XRURfQVRUUltuYW1lXSkge1xuICAgICAgICBpZiAoUkVUVVJOX0RPTSB8fCBSRVRVUk5fRE9NX0ZSQUdNRU5UKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIF9mb3JjZVJlbW92ZShub2RlKTtcbiAgICAgICAgICB9IGNhdGNoIChfKSB7fVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCAnJyk7XG4gICAgICAgICAgfSBjYXRjaCAoXykge31cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBfaW5pdERvY3VtZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGRpcnR5IGEgc3RyaW5nIG9mIGRpcnR5IG1hcmt1cFxuICAgICAqIEByZXR1cm4ge0RvY3VtZW50fSBhIERPTSwgZmlsbGVkIHdpdGggdGhlIGRpcnR5IG1hcmt1cFxuICAgICAqL1xuICAgIHZhciBfaW5pdERvY3VtZW50ID0gZnVuY3Rpb24gX2luaXREb2N1bWVudChkaXJ0eSkge1xuICAgICAgLyogQ3JlYXRlIGEgSFRNTCBkb2N1bWVudCAqL1xuICAgICAgdmFyIGRvYyA9IHZvaWQgMDtcbiAgICAgIHZhciBsZWFkaW5nV2hpdGVzcGFjZSA9IHZvaWQgMDtcblxuICAgICAgaWYgKEZPUkNFX0JPRFkpIHtcbiAgICAgICAgZGlydHkgPSAnPHJlbW92ZT48L3JlbW92ZT4nICsgZGlydHk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBJZiBGT1JDRV9CT0RZIGlzbid0IHVzZWQsIGxlYWRpbmcgd2hpdGVzcGFjZSBuZWVkcyB0byBiZSBwcmVzZXJ2ZWQgbWFudWFsbHkgKi9cbiAgICAgICAgdmFyIG1hdGNoZXMgPSBzdHJpbmdNYXRjaChkaXJ0eSwgL15bXFxyXFxuXFx0IF0rLyk7XG4gICAgICAgIGxlYWRpbmdXaGl0ZXNwYWNlID0gbWF0Y2hlcyAmJiBtYXRjaGVzWzBdO1xuICAgICAgfVxuXG4gICAgICBpZiAoUEFSU0VSX01FRElBX1RZUEUgPT09ICdhcHBsaWNhdGlvbi94aHRtbCt4bWwnKSB7XG4gICAgICAgIC8vIFJvb3Qgb2YgWEhUTUwgZG9jIG11c3QgY29udGFpbiB4bWxucyBkZWNsYXJhdGlvbiAoc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94aHRtbDEvbm9ybWF0aXZlLmh0bWwjc3RyaWN0KVxuICAgICAgICBkaXJ0eSA9ICc8aHRtbCB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj48aGVhZD48L2hlYWQ+PGJvZHk+JyArIGRpcnR5ICsgJzwvYm9keT48L2h0bWw+JztcbiAgICAgIH1cblxuICAgICAgdmFyIGRpcnR5UGF5bG9hZCA9IHRydXN0ZWRUeXBlc1BvbGljeSA/IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKGRpcnR5KSA6IGRpcnR5O1xuICAgICAgLypcbiAgICAgICAqIFVzZSB0aGUgRE9NUGFyc2VyIEFQSSBieSBkZWZhdWx0LCBmYWxsYmFjayBsYXRlciBpZiBuZWVkcyBiZVxuICAgICAgICogRE9NUGFyc2VyIG5vdCB3b3JrIGZvciBzdmcgd2hlbiBoYXMgbXVsdGlwbGUgcm9vdCBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBpZiAoTkFNRVNQQUNFID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoZGlydHlQYXlsb2FkLCBQQVJTRVJfTUVESUFfVFlQRSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgICB9XG5cbiAgICAgIC8qIFVzZSBjcmVhdGVIVE1MRG9jdW1lbnQgaW4gY2FzZSBET01QYXJzZXIgaXMgbm90IGF2YWlsYWJsZSAqL1xuICAgICAgaWYgKCFkb2MgfHwgIWRvYy5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgZG9jID0gaW1wbGVtZW50YXRpb24uY3JlYXRlRG9jdW1lbnQoTkFNRVNQQUNFLCAndGVtcGxhdGUnLCBudWxsKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBkb2MuZG9jdW1lbnRFbGVtZW50LmlubmVySFRNTCA9IElTX0VNUFRZX0lOUFVUID8gJycgOiBkaXJ0eVBheWxvYWQ7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAvLyBTeW50YXggZXJyb3IgaWYgZGlydHlQYXlsb2FkIGlzIGludmFsaWQgeG1sXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGJvZHkgPSBkb2MuYm9keSB8fCBkb2MuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgICBpZiAoZGlydHkgJiYgbGVhZGluZ1doaXRlc3BhY2UpIHtcbiAgICAgICAgYm9keS5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobGVhZGluZ1doaXRlc3BhY2UpLCBib2R5LmNoaWxkTm9kZXNbMF0gfHwgbnVsbCk7XG4gICAgICB9XG5cbiAgICAgIC8qIFdvcmsgb24gd2hvbGUgZG9jdW1lbnQgb3IganVzdCBpdHMgYm9keSAqL1xuICAgICAgaWYgKE5BTUVTUEFDRSA9PT0gSFRNTF9OQU1FU1BBQ0UpIHtcbiAgICAgICAgcmV0dXJuIGdldEVsZW1lbnRzQnlUYWdOYW1lLmNhbGwoZG9jLCBXSE9MRV9ET0NVTUVOVCA/ICdodG1sJyA6ICdib2R5JylbMF07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBXSE9MRV9ET0NVTUVOVCA/IGRvYy5kb2N1bWVudEVsZW1lbnQgOiBib2R5O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBfY3JlYXRlSXRlcmF0b3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0RvY3VtZW50fSByb290IGRvY3VtZW50L2ZyYWdtZW50IHRvIGNyZWF0ZSBpdGVyYXRvciBmb3JcbiAgICAgKiBAcmV0dXJuIHtJdGVyYXRvcn0gaXRlcmF0b3IgaW5zdGFuY2VcbiAgICAgKi9cbiAgICB2YXIgX2NyZWF0ZUl0ZXJhdG9yID0gZnVuY3Rpb24gX2NyZWF0ZUl0ZXJhdG9yKHJvb3QpIHtcbiAgICAgIHJldHVybiBjcmVhdGVOb2RlSXRlcmF0b3IuY2FsbChyb290Lm93bmVyRG9jdW1lbnQgfHwgcm9vdCwgcm9vdCwgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQgfCBOb2RlRmlsdGVyLlNIT1dfQ09NTUVOVCB8IE5vZGVGaWx0ZXIuU0hPV19URVhULCBudWxsLCBmYWxzZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9pc0Nsb2JiZXJlZFxuICAgICAqXG4gICAgICogQHBhcmFtICB7Tm9kZX0gZWxtIGVsZW1lbnQgdG8gY2hlY2sgZm9yIGNsb2JiZXJpbmcgYXR0YWNrc1xuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgY2xvYmJlcmVkLCBmYWxzZSBpZiBzYWZlXG4gICAgICovXG4gICAgdmFyIF9pc0Nsb2JiZXJlZCA9IGZ1bmN0aW9uIF9pc0Nsb2JiZXJlZChlbG0pIHtcbiAgICAgIHJldHVybiBlbG0gaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQgJiYgKHR5cGVvZiBlbG0ubm9kZU5hbWUgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBlbG0udGV4dENvbnRlbnQgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBlbG0ucmVtb3ZlQ2hpbGQgIT09ICdmdW5jdGlvbicgfHwgIShlbG0uYXR0cmlidXRlcyBpbnN0YW5jZW9mIE5hbWVkTm9kZU1hcCkgfHwgdHlwZW9mIGVsbS5yZW1vdmVBdHRyaWJ1dGUgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGVsbS5zZXRBdHRyaWJ1dGUgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGVsbS5uYW1lc3BhY2VVUkkgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBlbG0uaW5zZXJ0QmVmb3JlICE9PSAnZnVuY3Rpb24nKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX2lzTm9kZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7Tm9kZX0gb2JqIG9iamVjdCB0byBjaGVjayB3aGV0aGVyIGl0J3MgYSBET00gbm9kZVxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaXMgb2JqZWN0IGlzIGEgRE9NIG5vZGVcbiAgICAgKi9cbiAgICB2YXIgX2lzTm9kZSA9IGZ1bmN0aW9uIF9pc05vZGUob2JqZWN0KSB7XG4gICAgICByZXR1cm4gKHR5cGVvZiBOb2RlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihOb2RlKSkgPT09ICdvYmplY3QnID8gb2JqZWN0IGluc3RhbmNlb2YgTm9kZSA6IG9iamVjdCAmJiAodHlwZW9mIG9iamVjdCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob2JqZWN0KSkgPT09ICdvYmplY3QnICYmIHR5cGVvZiBvYmplY3Qubm9kZVR5cGUgPT09ICdudW1iZXInICYmIHR5cGVvZiBvYmplY3Qubm9kZU5hbWUgPT09ICdzdHJpbmcnO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBfZXhlY3V0ZUhvb2tcbiAgICAgKiBFeGVjdXRlIHVzZXIgY29uZmlndXJhYmxlIGhvb2tzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGVudHJ5UG9pbnQgIE5hbWUgb2YgdGhlIGhvb2sncyBlbnRyeSBwb2ludFxuICAgICAqIEBwYXJhbSAge05vZGV9IGN1cnJlbnROb2RlIG5vZGUgdG8gd29yayBvbiB3aXRoIHRoZSBob29rXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIGFkZGl0aW9uYWwgaG9vayBwYXJhbWV0ZXJzXG4gICAgICovXG4gICAgdmFyIF9leGVjdXRlSG9vayA9IGZ1bmN0aW9uIF9leGVjdXRlSG9vayhlbnRyeVBvaW50LCBjdXJyZW50Tm9kZSwgZGF0YSkge1xuICAgICAgaWYgKCFob29rc1tlbnRyeVBvaW50XSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFycmF5Rm9yRWFjaChob29rc1tlbnRyeVBvaW50XSwgZnVuY3Rpb24gKGhvb2spIHtcbiAgICAgICAgaG9vay5jYWxsKERPTVB1cmlmeSwgY3VycmVudE5vZGUsIGRhdGEsIENPTkZJRyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX3Nhbml0aXplRWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwcm90ZWN0IG5vZGVOYW1lXG4gICAgICogQHByb3RlY3QgdGV4dENvbnRlbnRcbiAgICAgKiBAcHJvdGVjdCByZW1vdmVDaGlsZFxuICAgICAqXG4gICAgICogQHBhcmFtICAge05vZGV9IGN1cnJlbnROb2RlIHRvIGNoZWNrIGZvciBwZXJtaXNzaW9uIHRvIGV4aXN0XG4gICAgICogQHJldHVybiAge0Jvb2xlYW59IHRydWUgaWYgbm9kZSB3YXMga2lsbGVkLCBmYWxzZSBpZiBsZWZ0IGFsaXZlXG4gICAgICovXG4gICAgdmFyIF9zYW5pdGl6ZUVsZW1lbnRzID0gZnVuY3Rpb24gX3Nhbml0aXplRWxlbWVudHMoY3VycmVudE5vZGUpIHtcbiAgICAgIHZhciBjb250ZW50ID0gdm9pZCAwO1xuXG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICBfZXhlY3V0ZUhvb2soJ2JlZm9yZVNhbml0aXplRWxlbWVudHMnLCBjdXJyZW50Tm9kZSwgbnVsbCk7XG5cbiAgICAgIC8qIENoZWNrIGlmIGVsZW1lbnQgaXMgY2xvYmJlcmVkIG9yIGNhbiBjbG9iYmVyICovXG4gICAgICBpZiAoX2lzQ2xvYmJlcmVkKGN1cnJlbnROb2RlKSkge1xuICAgICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLyogQ2hlY2sgaWYgdGFnbmFtZSBjb250YWlucyBVbmljb2RlICovXG4gICAgICBpZiAoc3RyaW5nTWF0Y2goY3VycmVudE5vZGUubm9kZU5hbWUsIC9bXFx1MDA4MC1cXHVGRkZGXS8pKSB7XG4gICAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBOb3cgbGV0J3MgY2hlY2sgdGhlIGVsZW1lbnQncyB0eXBlIGFuZCBuYW1lICovXG4gICAgICB2YXIgdGFnTmFtZSA9IHRyYW5zZm9ybUNhc2VGdW5jKGN1cnJlbnROb2RlLm5vZGVOYW1lKTtcblxuICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgICAgX2V4ZWN1dGVIb29rKCd1cG9uU2FuaXRpemVFbGVtZW50JywgY3VycmVudE5vZGUsIHtcbiAgICAgICAgdGFnTmFtZTogdGFnTmFtZSxcbiAgICAgICAgYWxsb3dlZFRhZ3M6IEFMTE9XRURfVEFHU1xuICAgICAgfSk7XG5cbiAgICAgIC8qIERldGVjdCBtWFNTIGF0dGVtcHRzIGFidXNpbmcgbmFtZXNwYWNlIGNvbmZ1c2lvbiAqL1xuICAgICAgaWYgKCFfaXNOb2RlKGN1cnJlbnROb2RlLmZpcnN0RWxlbWVudENoaWxkKSAmJiAoIV9pc05vZGUoY3VycmVudE5vZGUuY29udGVudCkgfHwgIV9pc05vZGUoY3VycmVudE5vZGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZCkpICYmIHJlZ0V4cFRlc3QoLzxbL1xcd10vZywgY3VycmVudE5vZGUuaW5uZXJIVE1MKSAmJiByZWdFeHBUZXN0KC88Wy9cXHddL2csIGN1cnJlbnROb2RlLnRleHRDb250ZW50KSkge1xuICAgICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLyogTWl0aWdhdGUgYSBwcm9ibGVtIHdpdGggdGVtcGxhdGVzIGluc2lkZSBzZWxlY3QgKi9cbiAgICAgIGlmICh0YWdOYW1lID09PSAnc2VsZWN0JyAmJiByZWdFeHBUZXN0KC88dGVtcGxhdGUvaSwgY3VycmVudE5vZGUuaW5uZXJIVE1MKSkge1xuICAgICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLyogUmVtb3ZlIGVsZW1lbnQgaWYgYW55dGhpbmcgZm9yYmlkcyBpdHMgcHJlc2VuY2UgKi9cbiAgICAgIGlmICghQUxMT1dFRF9UQUdTW3RhZ05hbWVdIHx8IEZPUkJJRF9UQUdTW3RhZ05hbWVdKSB7XG4gICAgICAgIC8qIEtlZXAgY29udGVudCBleGNlcHQgZm9yIGJhZC1saXN0ZWQgZWxlbWVudHMgKi9cbiAgICAgICAgaWYgKEtFRVBfQ09OVEVOVCAmJiAhRk9SQklEX0NPTlRFTlRTW3RhZ05hbWVdKSB7XG4gICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGN1cnJlbnROb2RlKSB8fCBjdXJyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgIHZhciBjaGlsZE5vZGVzID0gZ2V0Q2hpbGROb2RlcyhjdXJyZW50Tm9kZSkgfHwgY3VycmVudE5vZGUuY2hpbGROb2RlcztcblxuICAgICAgICAgIGlmIChjaGlsZE5vZGVzICYmIHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZENvdW50ID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBjaGlsZENvdW50IC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2xvbmVOb2RlKGNoaWxkTm9kZXNbaV0sIHRydWUpLCBnZXROZXh0U2libGluZyhjdXJyZW50Tm9kZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghRk9SQklEX1RBR1NbdGFnTmFtZV0gJiYgX2Jhc2ljQ3VzdG9tRWxlbWVudFRlc3QodGFnTmFtZSkpIHtcbiAgICAgICAgICBpZiAoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgUmVnRXhwICYmIHJlZ0V4cFRlc3QoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrLCB0YWdOYW1lKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIGlmIChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sodGFnTmFtZSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBDaGVjayB3aGV0aGVyIGVsZW1lbnQgaGFzIGEgdmFsaWQgbmFtZXNwYWNlICovXG4gICAgICBpZiAoY3VycmVudE5vZGUgaW5zdGFuY2VvZiBFbGVtZW50ICYmICFfY2hlY2tWYWxpZE5hbWVzcGFjZShjdXJyZW50Tm9kZSkpIHtcbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICgodGFnTmFtZSA9PT0gJ25vc2NyaXB0JyB8fCB0YWdOYW1lID09PSAnbm9lbWJlZCcpICYmIHJlZ0V4cFRlc3QoLzxcXC9ubyhzY3JpcHR8ZW1iZWQpL2ksIGN1cnJlbnROb2RlLmlubmVySFRNTCkpIHtcbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8qIFNhbml0aXplIGVsZW1lbnQgY29udGVudCB0byBiZSB0ZW1wbGF0ZS1zYWZlICovXG4gICAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTICYmIGN1cnJlbnROb2RlLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgIC8qIEdldCB0aGUgZWxlbWVudCdzIHRleHQgY29udGVudCAqL1xuICAgICAgICBjb250ZW50ID0gY3VycmVudE5vZGUudGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnRlbnQgPSBzdHJpbmdSZXBsYWNlKGNvbnRlbnQsIE1VU1RBQ0hFX0VYUFIkJDEsICcgJyk7XG4gICAgICAgIGNvbnRlbnQgPSBzdHJpbmdSZXBsYWNlKGNvbnRlbnQsIEVSQl9FWFBSJCQxLCAnICcpO1xuICAgICAgICBpZiAoY3VycmVudE5vZGUudGV4dENvbnRlbnQgIT09IGNvbnRlbnQpIHtcbiAgICAgICAgICBhcnJheVB1c2goRE9NUHVyaWZ5LnJlbW92ZWQsIHsgZWxlbWVudDogY3VycmVudE5vZGUuY2xvbmVOb2RlKCkgfSk7XG4gICAgICAgICAgY3VycmVudE5vZGUudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgIF9leGVjdXRlSG9vaygnYWZ0ZXJTYW5pdGl6ZUVsZW1lbnRzJywgY3VycmVudE5vZGUsIG51bGwpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9pc1ZhbGlkQXR0cmlidXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGxjVGFnIExvd2VyY2FzZSB0YWcgbmFtZSBvZiBjb250YWluaW5nIGVsZW1lbnQuXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBsY05hbWUgTG93ZXJjYXNlIGF0dHJpYnV0ZSBuYW1lLlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gdmFsdWUgQXR0cmlidXRlIHZhbHVlLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBgdmFsdWVgIGlzIHZhbGlkLCBvdGhlcndpc2UgZmFsc2UuXG4gICAgICovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgICB2YXIgX2lzVmFsaWRBdHRyaWJ1dGUgPSBmdW5jdGlvbiBfaXNWYWxpZEF0dHJpYnV0ZShsY1RhZywgbGNOYW1lLCB2YWx1ZSkge1xuICAgICAgLyogTWFrZSBzdXJlIGF0dHJpYnV0ZSBjYW5ub3QgY2xvYmJlciAqL1xuICAgICAgaWYgKFNBTklUSVpFX0RPTSAmJiAobGNOYW1lID09PSAnaWQnIHx8IGxjTmFtZSA9PT0gJ25hbWUnKSAmJiAodmFsdWUgaW4gZG9jdW1lbnQgfHwgdmFsdWUgaW4gZm9ybUVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLyogQWxsb3cgdmFsaWQgZGF0YS0qIGF0dHJpYnV0ZXM6IEF0IGxlYXN0IG9uZSBjaGFyYWN0ZXIgYWZ0ZXIgXCItXCJcbiAgICAgICAgICAoaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZG9tLmh0bWwjZW1iZWRkaW5nLWN1c3RvbS1ub24tdmlzaWJsZS1kYXRhLXdpdGgtdGhlLWRhdGEtKi1hdHRyaWJ1dGVzKVxuICAgICAgICAgIFhNTC1jb21wYXRpYmxlIChodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbmZyYXN0cnVjdHVyZS5odG1sI3htbC1jb21wYXRpYmxlIGFuZCBodHRwOi8vd3d3LnczLm9yZy9UUi94bWwvI2QwZTgwNClcbiAgICAgICAgICBXZSBkb24ndCBuZWVkIHRvIGNoZWNrIHRoZSB2YWx1ZTsgaXQncyBhbHdheXMgVVJJIHNhZmUuICovXG4gICAgICBpZiAoQUxMT1dfREFUQV9BVFRSICYmICFGT1JCSURfQVRUUltsY05hbWVdICYmIHJlZ0V4cFRlc3QoREFUQV9BVFRSJCQxLCBsY05hbWUpKSA7IGVsc2UgaWYgKEFMTE9XX0FSSUFfQVRUUiAmJiByZWdFeHBUZXN0KEFSSUFfQVRUUiQkMSwgbGNOYW1lKSkgOyBlbHNlIGlmICghQUxMT1dFRF9BVFRSW2xjTmFtZV0gfHwgRk9SQklEX0FUVFJbbGNOYW1lXSkge1xuICAgICAgICBpZiAoXG4gICAgICAgIC8vIEZpcnN0IGNvbmRpdGlvbiBkb2VzIGEgdmVyeSBiYXNpYyBjaGVjayBpZiBhKSBpdCdzIGJhc2ljYWxseSBhIHZhbGlkIGN1c3RvbSBlbGVtZW50IHRhZ25hbWUgQU5EXG4gICAgICAgIC8vIGIpIGlmIHRoZSB0YWdOYW1lIHBhc3NlcyB3aGF0ZXZlciB0aGUgdXNlciBoYXMgY29uZmlndXJlZCBmb3IgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrXG4gICAgICAgIC8vIGFuZCBjKSBpZiB0aGUgYXR0cmlidXRlIG5hbWUgcGFzc2VzIHdoYXRldmVyIHRoZSB1c2VyIGhhcyBjb25maWd1cmVkIGZvciBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2tcbiAgICAgICAgX2Jhc2ljQ3VzdG9tRWxlbWVudFRlc3QobGNUYWcpICYmIChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBSZWdFeHAgJiYgcmVnRXhwVGVzdChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2ssIGxjVGFnKSB8fCBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sobGNUYWcpKSAmJiAoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrIGluc3RhbmNlb2YgUmVnRXhwICYmIHJlZ0V4cFRlc3QoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrLCBsY05hbWUpIHx8IENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjayBpbnN0YW5jZW9mIEZ1bmN0aW9uICYmIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjayhsY05hbWUpKSB8fFxuICAgICAgICAvLyBBbHRlcm5hdGl2ZSwgc2Vjb25kIGNvbmRpdGlvbiBjaGVja3MgaWYgaXQncyBhbiBgaXNgLWF0dHJpYnV0ZSwgQU5EXG4gICAgICAgIC8vIHRoZSB2YWx1ZSBwYXNzZXMgd2hhdGV2ZXIgdGhlIHVzZXIgaGFzIGNvbmZpZ3VyZWQgZm9yIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVja1xuICAgICAgICBsY05hbWUgPT09ICdpcycgJiYgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzICYmIChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBSZWdFeHAgJiYgcmVnRXhwVGVzdChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2ssIHZhbHVlKSB8fCBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sodmFsdWUpKSkgOyBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLyogQ2hlY2sgdmFsdWUgaXMgc2FmZS4gRmlyc3QsIGlzIGF0dHIgaW5lcnQ/IElmIHNvLCBpcyBzYWZlICovXG4gICAgICB9IGVsc2UgaWYgKFVSSV9TQUZFX0FUVFJJQlVURVNbbGNOYW1lXSkgOyBlbHNlIGlmIChyZWdFeHBUZXN0KElTX0FMTE9XRURfVVJJJCQxLCBzdHJpbmdSZXBsYWNlKHZhbHVlLCBBVFRSX1dISVRFU1BBQ0UkJDEsICcnKSkpIDsgZWxzZSBpZiAoKGxjTmFtZSA9PT0gJ3NyYycgfHwgbGNOYW1lID09PSAneGxpbms6aHJlZicgfHwgbGNOYW1lID09PSAnaHJlZicpICYmIGxjVGFnICE9PSAnc2NyaXB0JyAmJiBzdHJpbmdJbmRleE9mKHZhbHVlLCAnZGF0YTonKSA9PT0gMCAmJiBEQVRBX1VSSV9UQUdTW2xjVGFnXSkgOyBlbHNlIGlmIChBTExPV19VTktOT1dOX1BST1RPQ09MUyAmJiAhcmVnRXhwVGVzdChJU19TQ1JJUFRfT1JfREFUQSQkMSwgc3RyaW5nUmVwbGFjZSh2YWx1ZSwgQVRUUl9XSElURVNQQUNFJCQxLCAnJykpKSA7IGVsc2UgaWYgKCF2YWx1ZSkgOyBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX2Jhc2ljQ3VzdG9tRWxlbWVudENoZWNrXG4gICAgICogY2hlY2tzIGlmIGF0IGxlYXN0IG9uZSBkYXNoIGlzIGluY2x1ZGVkIGluIHRhZ05hbWUsIGFuZCBpdCdzIG5vdCB0aGUgZmlyc3QgY2hhclxuICAgICAqIGZvciBtb3JlIHNvcGhpc3RpY2F0ZWQgY2hlY2tpbmcgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvdmFsaWRhdGUtZWxlbWVudC1uYW1lXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWUgbmFtZSBvZiB0aGUgdGFnIG9mIHRoZSBub2RlIHRvIHNhbml0aXplXG4gICAgICovXG4gICAgdmFyIF9iYXNpY0N1c3RvbUVsZW1lbnRUZXN0ID0gZnVuY3Rpb24gX2Jhc2ljQ3VzdG9tRWxlbWVudFRlc3QodGFnTmFtZSkge1xuICAgICAgcmV0dXJuIHRhZ05hbWUuaW5kZXhPZignLScpID4gMDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogX3Nhbml0aXplQXR0cmlidXRlc1xuICAgICAqXG4gICAgICogQHByb3RlY3QgYXR0cmlidXRlc1xuICAgICAqIEBwcm90ZWN0IG5vZGVOYW1lXG4gICAgICogQHByb3RlY3QgcmVtb3ZlQXR0cmlidXRlXG4gICAgICogQHByb3RlY3Qgc2V0QXR0cmlidXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOb2RlfSBjdXJyZW50Tm9kZSB0byBzYW5pdGl6ZVxuICAgICAqL1xuICAgIHZhciBfc2FuaXRpemVBdHRyaWJ1dGVzID0gZnVuY3Rpb24gX3Nhbml0aXplQXR0cmlidXRlcyhjdXJyZW50Tm9kZSkge1xuICAgICAgdmFyIGF0dHIgPSB2b2lkIDA7XG4gICAgICB2YXIgdmFsdWUgPSB2b2lkIDA7XG4gICAgICB2YXIgbGNOYW1lID0gdm9pZCAwO1xuICAgICAgdmFyIGwgPSB2b2lkIDA7XG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICBfZXhlY3V0ZUhvb2soJ2JlZm9yZVNhbml0aXplQXR0cmlidXRlcycsIGN1cnJlbnROb2RlLCBudWxsKTtcblxuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBjdXJyZW50Tm9kZS5hdHRyaWJ1dGVzO1xuXG4gICAgICAvKiBDaGVjayBpZiB3ZSBoYXZlIGF0dHJpYnV0ZXM7IGlmIG5vdCB3ZSBtaWdodCBoYXZlIGEgdGV4dCBub2RlICovXG5cbiAgICAgIGlmICghYXR0cmlidXRlcykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBob29rRXZlbnQgPSB7XG4gICAgICAgIGF0dHJOYW1lOiAnJyxcbiAgICAgICAgYXR0clZhbHVlOiAnJyxcbiAgICAgICAga2VlcEF0dHI6IHRydWUsXG4gICAgICAgIGFsbG93ZWRBdHRyaWJ1dGVzOiBBTExPV0VEX0FUVFJcbiAgICAgIH07XG4gICAgICBsID0gYXR0cmlidXRlcy5sZW5ndGg7XG5cbiAgICAgIC8qIEdvIGJhY2t3YXJkcyBvdmVyIGFsbCBhdHRyaWJ1dGVzOyBzYWZlbHkgcmVtb3ZlIGJhZCBvbmVzICovXG4gICAgICB3aGlsZSAobC0tKSB7XG4gICAgICAgIGF0dHIgPSBhdHRyaWJ1dGVzW2xdO1xuICAgICAgICB2YXIgX2F0dHIgPSBhdHRyLFxuICAgICAgICAgICAgbmFtZSA9IF9hdHRyLm5hbWUsXG4gICAgICAgICAgICBuYW1lc3BhY2VVUkkgPSBfYXR0ci5uYW1lc3BhY2VVUkk7XG5cbiAgICAgICAgdmFsdWUgPSBzdHJpbmdUcmltKGF0dHIudmFsdWUpO1xuICAgICAgICBsY05hbWUgPSB0cmFuc2Zvcm1DYXNlRnVuYyhuYW1lKTtcblxuICAgICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICAgIGhvb2tFdmVudC5hdHRyTmFtZSA9IGxjTmFtZTtcbiAgICAgICAgaG9va0V2ZW50LmF0dHJWYWx1ZSA9IHZhbHVlO1xuICAgICAgICBob29rRXZlbnQua2VlcEF0dHIgPSB0cnVlO1xuICAgICAgICBob29rRXZlbnQuZm9yY2VLZWVwQXR0ciA9IHVuZGVmaW5lZDsgLy8gQWxsb3dzIGRldmVsb3BlcnMgdG8gc2VlIHRoaXMgaXMgYSBwcm9wZXJ0eSB0aGV5IGNhbiBzZXRcbiAgICAgICAgX2V4ZWN1dGVIb29rKCd1cG9uU2FuaXRpemVBdHRyaWJ1dGUnLCBjdXJyZW50Tm9kZSwgaG9va0V2ZW50KTtcbiAgICAgICAgdmFsdWUgPSBob29rRXZlbnQuYXR0clZhbHVlO1xuICAgICAgICAvKiBEaWQgdGhlIGhvb2tzIGFwcHJvdmUgb2YgdGhlIGF0dHJpYnV0ZT8gKi9cbiAgICAgICAgaWYgKGhvb2tFdmVudC5mb3JjZUtlZXBBdHRyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBSZW1vdmUgYXR0cmlidXRlICovXG4gICAgICAgIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgY3VycmVudE5vZGUpO1xuXG4gICAgICAgIC8qIERpZCB0aGUgaG9va3MgYXBwcm92ZSBvZiB0aGUgYXR0cmlidXRlPyAqL1xuICAgICAgICBpZiAoIWhvb2tFdmVudC5rZWVwQXR0cikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogV29yayBhcm91bmQgYSBzZWN1cml0eSBpc3N1ZSBpbiBqUXVlcnkgMy4wICovXG4gICAgICAgIGlmIChyZWdFeHBUZXN0KC9cXC8+L2ksIHZhbHVlKSkge1xuICAgICAgICAgIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgY3VycmVudE5vZGUpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogU2FuaXRpemUgYXR0cmlidXRlIGNvbnRlbnQgdG8gYmUgdGVtcGxhdGUtc2FmZSAqL1xuICAgICAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTKSB7XG4gICAgICAgICAgdmFsdWUgPSBzdHJpbmdSZXBsYWNlKHZhbHVlLCBNVVNUQUNIRV9FWFBSJCQxLCAnICcpO1xuICAgICAgICAgIHZhbHVlID0gc3RyaW5nUmVwbGFjZSh2YWx1ZSwgRVJCX0VYUFIkJDEsICcgJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBJcyBgdmFsdWVgIHZhbGlkIGZvciB0aGlzIGF0dHJpYnV0ZT8gKi9cbiAgICAgICAgdmFyIGxjVGFnID0gdHJhbnNmb3JtQ2FzZUZ1bmMoY3VycmVudE5vZGUubm9kZU5hbWUpO1xuICAgICAgICBpZiAoIV9pc1ZhbGlkQXR0cmlidXRlKGxjVGFnLCBsY05hbWUsIHZhbHVlKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogSGFuZGxlIGludmFsaWQgZGF0YS0qIGF0dHJpYnV0ZSBzZXQgYnkgdHJ5LWNhdGNoaW5nIGl0ICovXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKG5hbWVzcGFjZVVSSSkge1xuICAgICAgICAgICAgY3VycmVudE5vZGUuc2V0QXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8qIEZhbGxiYWNrIHRvIHNldEF0dHJpYnV0ZSgpIGZvciBicm93c2VyLXVucmVjb2duaXplZCBuYW1lc3BhY2VzIGUuZy4gXCJ4LXNjaGVtYVwiLiAqL1xuICAgICAgICAgICAgY3VycmVudE5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhcnJheVBvcChET01QdXJpZnkucmVtb3ZlZCk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgICB9XG5cbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgIF9leGVjdXRlSG9vaygnYWZ0ZXJTYW5pdGl6ZUF0dHJpYnV0ZXMnLCBjdXJyZW50Tm9kZSwgbnVsbCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIF9zYW5pdGl6ZVNoYWRvd0RPTVxuICAgICAqXG4gICAgICogQHBhcmFtICB7RG9jdW1lbnRGcmFnbWVudH0gZnJhZ21lbnQgdG8gaXRlcmF0ZSBvdmVyIHJlY3Vyc2l2ZWx5XG4gICAgICovXG4gICAgdmFyIF9zYW5pdGl6ZVNoYWRvd0RPTSA9IGZ1bmN0aW9uIF9zYW5pdGl6ZVNoYWRvd0RPTShmcmFnbWVudCkge1xuICAgICAgdmFyIHNoYWRvd05vZGUgPSB2b2lkIDA7XG4gICAgICB2YXIgc2hhZG93SXRlcmF0b3IgPSBfY3JlYXRlSXRlcmF0b3IoZnJhZ21lbnQpO1xuXG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICBfZXhlY3V0ZUhvb2soJ2JlZm9yZVNhbml0aXplU2hhZG93RE9NJywgZnJhZ21lbnQsIG51bGwpO1xuXG4gICAgICB3aGlsZSAoc2hhZG93Tm9kZSA9IHNoYWRvd0l0ZXJhdG9yLm5leHROb2RlKCkpIHtcbiAgICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgICAgICBfZXhlY3V0ZUhvb2soJ3Vwb25TYW5pdGl6ZVNoYWRvd05vZGUnLCBzaGFkb3dOb2RlLCBudWxsKTtcblxuICAgICAgICAvKiBTYW5pdGl6ZSB0YWdzIGFuZCBlbGVtZW50cyAqL1xuICAgICAgICBpZiAoX3Nhbml0aXplRWxlbWVudHMoc2hhZG93Tm9kZSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIERlZXAgc2hhZG93IERPTSBkZXRlY3RlZCAqL1xuICAgICAgICBpZiAoc2hhZG93Tm9kZS5jb250ZW50IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xuICAgICAgICAgIF9zYW5pdGl6ZVNoYWRvd0RPTShzaGFkb3dOb2RlLmNvbnRlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogQ2hlY2sgYXR0cmlidXRlcywgc2FuaXRpemUgaWYgbmVjZXNzYXJ5ICovXG4gICAgICAgIF9zYW5pdGl6ZUF0dHJpYnV0ZXMoc2hhZG93Tm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgIF9leGVjdXRlSG9vaygnYWZ0ZXJTYW5pdGl6ZVNoYWRvd0RPTScsIGZyYWdtZW50LCBudWxsKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2FuaXRpemVcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHByb3ZpZGluZyBjb3JlIHNhbml0YXRpb24gZnVuY3Rpb25hbGl0eVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd8Tm9kZX0gZGlydHkgc3RyaW5nIG9yIERPTSBub2RlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgICBET01QdXJpZnkuc2FuaXRpemUgPSBmdW5jdGlvbiAoZGlydHksIGNmZykge1xuICAgICAgdmFyIGJvZHkgPSB2b2lkIDA7XG4gICAgICB2YXIgaW1wb3J0ZWROb2RlID0gdm9pZCAwO1xuICAgICAgdmFyIGN1cnJlbnROb2RlID0gdm9pZCAwO1xuICAgICAgdmFyIG9sZE5vZGUgPSB2b2lkIDA7XG4gICAgICB2YXIgcmV0dXJuTm9kZSA9IHZvaWQgMDtcbiAgICAgIC8qIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgc3RyaW5nIHRvIHNhbml0aXplLlxuICAgICAgICBETyBOT1QgcmV0dXJuIGVhcmx5LCBhcyB0aGlzIHdpbGwgcmV0dXJuIHRoZSB3cm9uZyB0eXBlIGlmXG4gICAgICAgIHRoZSB1c2VyIGhhcyByZXF1ZXN0ZWQgYSBET00gb2JqZWN0IHJhdGhlciB0aGFuIGEgc3RyaW5nICovXG4gICAgICBJU19FTVBUWV9JTlBVVCA9ICFkaXJ0eTtcbiAgICAgIGlmIChJU19FTVBUWV9JTlBVVCkge1xuICAgICAgICBkaXJ0eSA9ICc8IS0tPic7XG4gICAgICB9XG5cbiAgICAgIC8qIFN0cmluZ2lmeSwgaW4gY2FzZSBkaXJ0eSBpcyBhbiBvYmplY3QgKi9cbiAgICAgIGlmICh0eXBlb2YgZGlydHkgIT09ICdzdHJpbmcnICYmICFfaXNOb2RlKGRpcnR5KSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVnYXRlZC1jb25kaXRpb25cbiAgICAgICAgaWYgKHR5cGVvZiBkaXJ0eS50b1N0cmluZyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRocm93IHR5cGVFcnJvckNyZWF0ZSgndG9TdHJpbmcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXJ0eSA9IGRpcnR5LnRvU3RyaW5nKCk7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkaXJ0eSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IHR5cGVFcnJvckNyZWF0ZSgnZGlydHkgaXMgbm90IGEgc3RyaW5nLCBhYm9ydGluZycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiBDaGVjayB3ZSBjYW4gcnVuLiBPdGhlcndpc2UgZmFsbCBiYWNrIG9yIGlnbm9yZSAqL1xuICAgICAgaWYgKCFET01QdXJpZnkuaXNTdXBwb3J0ZWQpIHtcbiAgICAgICAgaWYgKF90eXBlb2Yod2luZG93LnRvU3RhdGljSFRNTCkgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB3aW5kb3cudG9TdGF0aWNIVE1MID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkaXJ0eSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cudG9TdGF0aWNIVE1MKGRpcnR5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoX2lzTm9kZShkaXJ0eSkpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cudG9TdGF0aWNIVE1MKGRpcnR5Lm91dGVySFRNTCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRpcnR5O1xuICAgICAgfVxuXG4gICAgICAvKiBBc3NpZ24gY29uZmlnIHZhcnMgKi9cbiAgICAgIGlmICghU0VUX0NPTkZJRykge1xuICAgICAgICBfcGFyc2VDb25maWcoY2ZnKTtcbiAgICAgIH1cblxuICAgICAgLyogQ2xlYW4gdXAgcmVtb3ZlZCBlbGVtZW50cyAqL1xuICAgICAgRE9NUHVyaWZ5LnJlbW92ZWQgPSBbXTtcblxuICAgICAgLyogQ2hlY2sgaWYgZGlydHkgaXMgY29ycmVjdGx5IHR5cGVkIGZvciBJTl9QTEFDRSAqL1xuICAgICAgaWYgKHR5cGVvZiBkaXJ0eSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgSU5fUExBQ0UgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKElOX1BMQUNFKSB7XG4gICAgICAgIC8qIERvIHNvbWUgZWFybHkgcHJlLXNhbml0aXphdGlvbiB0byBhdm9pZCB1bnNhZmUgcm9vdCBub2RlcyAqL1xuICAgICAgICBpZiAoZGlydHkubm9kZU5hbWUpIHtcbiAgICAgICAgICB2YXIgdGFnTmFtZSA9IHRyYW5zZm9ybUNhc2VGdW5jKGRpcnR5Lm5vZGVOYW1lKTtcbiAgICAgICAgICBpZiAoIUFMTE9XRURfVEFHU1t0YWdOYW1lXSB8fCBGT1JCSURfVEFHU1t0YWdOYW1lXSkge1xuICAgICAgICAgICAgdGhyb3cgdHlwZUVycm9yQ3JlYXRlKCdyb290IG5vZGUgaXMgZm9yYmlkZGVuIGFuZCBjYW5ub3QgYmUgc2FuaXRpemVkIGluLXBsYWNlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGRpcnR5IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAvKiBJZiBkaXJ0eSBpcyBhIERPTSBlbGVtZW50LCBhcHBlbmQgdG8gYW4gZW1wdHkgZG9jdW1lbnQgdG8gYXZvaWRcbiAgICAgICAgICAgZWxlbWVudHMgYmVpbmcgc3RyaXBwZWQgYnkgdGhlIHBhcnNlciAqL1xuICAgICAgICBib2R5ID0gX2luaXREb2N1bWVudCgnPCEtLS0tPicpO1xuICAgICAgICBpbXBvcnRlZE5vZGUgPSBib2R5Lm93bmVyRG9jdW1lbnQuaW1wb3J0Tm9kZShkaXJ0eSwgdHJ1ZSk7XG4gICAgICAgIGlmIChpbXBvcnRlZE5vZGUubm9kZVR5cGUgPT09IDEgJiYgaW1wb3J0ZWROb2RlLm5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICAgICAgICAvKiBOb2RlIGlzIGFscmVhZHkgYSBib2R5LCB1c2UgYXMgaXMgKi9cbiAgICAgICAgICBib2R5ID0gaW1wb3J0ZWROb2RlO1xuICAgICAgICB9IGVsc2UgaWYgKGltcG9ydGVkTm9kZS5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgICAgICAgYm9keSA9IGltcG9ydGVkTm9kZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItZG9tLW5vZGUtYXBwZW5kXG4gICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChpbXBvcnRlZE5vZGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBFeGl0IGRpcmVjdGx5IGlmIHdlIGhhdmUgbm90aGluZyB0byBkbyAqL1xuICAgICAgICBpZiAoIVJFVFVSTl9ET00gJiYgIVNBRkVfRk9SX1RFTVBMQVRFUyAmJiAhV0hPTEVfRE9DVU1FTlQgJiZcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWluY2x1ZGVzXG4gICAgICAgIGRpcnR5LmluZGV4T2YoJzwnKSA9PT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1c3RlZFR5cGVzUG9saWN5ICYmIFJFVFVSTl9UUlVTVEVEX1RZUEUgPyB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlSFRNTChkaXJ0eSkgOiBkaXJ0eTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIEluaXRpYWxpemUgdGhlIGRvY3VtZW50IHRvIHdvcmsgb24gKi9cbiAgICAgICAgYm9keSA9IF9pbml0RG9jdW1lbnQoZGlydHkpO1xuXG4gICAgICAgIC8qIENoZWNrIHdlIGhhdmUgYSBET00gbm9kZSBmcm9tIHRoZSBkYXRhICovXG4gICAgICAgIGlmICghYm9keSkge1xuICAgICAgICAgIHJldHVybiBSRVRVUk5fRE9NID8gbnVsbCA6IFJFVFVSTl9UUlVTVEVEX1RZUEUgPyBlbXB0eUhUTUwgOiAnJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiBSZW1vdmUgZmlyc3QgZWxlbWVudCBub2RlIChvdXJzKSBpZiBGT1JDRV9CT0RZIGlzIHNldCAqL1xuICAgICAgaWYgKGJvZHkgJiYgRk9SQ0VfQk9EWSkge1xuICAgICAgICBfZm9yY2VSZW1vdmUoYm9keS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgLyogR2V0IG5vZGUgaXRlcmF0b3IgKi9cbiAgICAgIHZhciBub2RlSXRlcmF0b3IgPSBfY3JlYXRlSXRlcmF0b3IoSU5fUExBQ0UgPyBkaXJ0eSA6IGJvZHkpO1xuXG4gICAgICAvKiBOb3cgc3RhcnQgaXRlcmF0aW5nIG92ZXIgdGhlIGNyZWF0ZWQgZG9jdW1lbnQgKi9cbiAgICAgIHdoaWxlIChjdXJyZW50Tm9kZSA9IG5vZGVJdGVyYXRvci5uZXh0Tm9kZSgpKSB7XG4gICAgICAgIC8qIEZpeCBJRSdzIHN0cmFuZ2UgYmVoYXZpb3Igd2l0aCBtYW5pcHVsYXRlZCB0ZXh0Tm9kZXMgIzg5ICovXG4gICAgICAgIGlmIChjdXJyZW50Tm9kZS5ub2RlVHlwZSA9PT0gMyAmJiBjdXJyZW50Tm9kZSA9PT0gb2xkTm9kZSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogU2FuaXRpemUgdGFncyBhbmQgZWxlbWVudHMgKi9cbiAgICAgICAgaWYgKF9zYW5pdGl6ZUVsZW1lbnRzKGN1cnJlbnROb2RlKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogU2hhZG93IERPTSBkZXRlY3RlZCwgc2FuaXRpemUgaXQgKi9cbiAgICAgICAgaWYgKGN1cnJlbnROb2RlLmNvbnRlbnQgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgICAgX3Nhbml0aXplU2hhZG93RE9NKGN1cnJlbnROb2RlLmNvbnRlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogQ2hlY2sgYXR0cmlidXRlcywgc2FuaXRpemUgaWYgbmVjZXNzYXJ5ICovXG4gICAgICAgIF9zYW5pdGl6ZUF0dHJpYnV0ZXMoY3VycmVudE5vZGUpO1xuXG4gICAgICAgIG9sZE5vZGUgPSBjdXJyZW50Tm9kZTtcbiAgICAgIH1cblxuICAgICAgb2xkTm9kZSA9IG51bGw7XG5cbiAgICAgIC8qIElmIHdlIHNhbml0aXplZCBgZGlydHlgIGluLXBsYWNlLCByZXR1cm4gaXQuICovXG4gICAgICBpZiAoSU5fUExBQ0UpIHtcbiAgICAgICAgcmV0dXJuIGRpcnR5O1xuICAgICAgfVxuXG4gICAgICAvKiBSZXR1cm4gc2FuaXRpemVkIHN0cmluZyBvciBET00gKi9cbiAgICAgIGlmIChSRVRVUk5fRE9NKSB7XG4gICAgICAgIGlmIChSRVRVUk5fRE9NX0ZSQUdNRU5UKSB7XG4gICAgICAgICAgcmV0dXJuTm9kZSA9IGNyZWF0ZURvY3VtZW50RnJhZ21lbnQuY2FsbChib2R5Lm93bmVyRG9jdW1lbnQpO1xuXG4gICAgICAgICAgd2hpbGUgKGJvZHkuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWRvbS1ub2RlLWFwcGVuZFxuICAgICAgICAgICAgcmV0dXJuTm9kZS5hcHBlbmRDaGlsZChib2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm5Ob2RlID0gYm9keTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBTExPV0VEX0FUVFIuc2hhZG93cm9vdCkge1xuICAgICAgICAgIC8qXG4gICAgICAgICAgICBBZG9wdE5vZGUoKSBpcyBub3QgdXNlZCBiZWNhdXNlIGludGVybmFsIHN0YXRlIGlzIG5vdCByZXNldFxuICAgICAgICAgICAgKGUuZy4gdGhlIHBhc3QgbmFtZXMgbWFwIG9mIGEgSFRNTEZvcm1FbGVtZW50KSwgdGhpcyBpcyBzYWZlXG4gICAgICAgICAgICBpbiB0aGVvcnkgYnV0IHdlIHdvdWxkIHJhdGhlciBub3QgcmlzayBhbm90aGVyIGF0dGFjayB2ZWN0b3IuXG4gICAgICAgICAgICBUaGUgc3RhdGUgdGhhdCBpcyBjbG9uZWQgYnkgaW1wb3J0Tm9kZSgpIGlzIGV4cGxpY2l0bHkgZGVmaW5lZFxuICAgICAgICAgICAgYnkgdGhlIHNwZWNzLlxuICAgICAgICAgICovXG4gICAgICAgICAgcmV0dXJuTm9kZSA9IGltcG9ydE5vZGUuY2FsbChvcmlnaW5hbERvY3VtZW50LCByZXR1cm5Ob2RlLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXR1cm5Ob2RlO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2VyaWFsaXplZEhUTUwgPSBXSE9MRV9ET0NVTUVOVCA/IGJvZHkub3V0ZXJIVE1MIDogYm9keS5pbm5lckhUTUw7XG5cbiAgICAgIC8qIFNhbml0aXplIGZpbmFsIHN0cmluZyB0ZW1wbGF0ZS1zYWZlICovXG4gICAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTKSB7XG4gICAgICAgIHNlcmlhbGl6ZWRIVE1MID0gc3RyaW5nUmVwbGFjZShzZXJpYWxpemVkSFRNTCwgTVVTVEFDSEVfRVhQUiQkMSwgJyAnKTtcbiAgICAgICAgc2VyaWFsaXplZEhUTUwgPSBzdHJpbmdSZXBsYWNlKHNlcmlhbGl6ZWRIVE1MLCBFUkJfRVhQUiQkMSwgJyAnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydXN0ZWRUeXBlc1BvbGljeSAmJiBSRVRVUk5fVFJVU1RFRF9UWVBFID8gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwoc2VyaWFsaXplZEhUTUwpIDogc2VyaWFsaXplZEhUTUw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gc2V0IHRoZSBjb25maWd1cmF0aW9uIG9uY2VcbiAgICAgKiBzZXRDb25maWdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgKi9cbiAgICBET01QdXJpZnkuc2V0Q29uZmlnID0gZnVuY3Rpb24gKGNmZykge1xuICAgICAgX3BhcnNlQ29uZmlnKGNmZyk7XG4gICAgICBTRVRfQ09ORklHID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgdGhlIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBjbGVhckNvbmZpZ1xuICAgICAqXG4gICAgICovXG4gICAgRE9NUHVyaWZ5LmNsZWFyQ29uZmlnID0gZnVuY3Rpb24gKCkge1xuICAgICAgQ09ORklHID0gbnVsbDtcbiAgICAgIFNFVF9DT05GSUcgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHVibGljIG1ldGhvZCB0byBjaGVjayBpZiBhbiBhdHRyaWJ1dGUgdmFsdWUgaXMgdmFsaWQuXG4gICAgICogVXNlcyBsYXN0IHNldCBjb25maWcsIGlmIGFueS4gT3RoZXJ3aXNlLCB1c2VzIGNvbmZpZyBkZWZhdWx0cy5cbiAgICAgKiBpc1ZhbGlkQXR0cmlidXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRhZyBUYWcgbmFtZSBvZiBjb250YWluaW5nIGVsZW1lbnQuXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBhdHRyIEF0dHJpYnV0ZSBuYW1lLlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gdmFsdWUgQXR0cmlidXRlIHZhbHVlLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBgdmFsdWVgIGlzIHZhbGlkLiBPdGhlcndpc2UsIHJldHVybnMgZmFsc2UuXG4gICAgICovXG4gICAgRE9NUHVyaWZ5LmlzVmFsaWRBdHRyaWJ1dGUgPSBmdW5jdGlvbiAodGFnLCBhdHRyLCB2YWx1ZSkge1xuICAgICAgLyogSW5pdGlhbGl6ZSBzaGFyZWQgY29uZmlnIHZhcnMgaWYgbmVjZXNzYXJ5LiAqL1xuICAgICAgaWYgKCFDT05GSUcpIHtcbiAgICAgICAgX3BhcnNlQ29uZmlnKHt9KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxjVGFnID0gdHJhbnNmb3JtQ2FzZUZ1bmModGFnKTtcbiAgICAgIHZhciBsY05hbWUgPSB0cmFuc2Zvcm1DYXNlRnVuYyhhdHRyKTtcbiAgICAgIHJldHVybiBfaXNWYWxpZEF0dHJpYnV0ZShsY1RhZywgbGNOYW1lLCB2YWx1ZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZEhvb2tcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHRvIGFkZCBET01QdXJpZnkgaG9va3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBlbnRyeVBvaW50IGVudHJ5IHBvaW50IGZvciB0aGUgaG9vayB0byBhZGRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBob29rRnVuY3Rpb24gZnVuY3Rpb24gdG8gZXhlY3V0ZVxuICAgICAqL1xuICAgIERPTVB1cmlmeS5hZGRIb29rID0gZnVuY3Rpb24gKGVudHJ5UG9pbnQsIGhvb2tGdW5jdGlvbikge1xuICAgICAgaWYgKHR5cGVvZiBob29rRnVuY3Rpb24gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBob29rc1tlbnRyeVBvaW50XSA9IGhvb2tzW2VudHJ5UG9pbnRdIHx8IFtdO1xuICAgICAgYXJyYXlQdXNoKGhvb2tzW2VudHJ5UG9pbnRdLCBob29rRnVuY3Rpb24pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVIb29rXG4gICAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgYSBET01QdXJpZnkgaG9vayBhdCBhIGdpdmVuIGVudHJ5UG9pbnRcbiAgICAgKiAocG9wcyBpdCBmcm9tIHRoZSBzdGFjayBvZiBob29rcyBpZiBtb3JlIGFyZSBwcmVzZW50KVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGVudHJ5UG9pbnQgZW50cnkgcG9pbnQgZm9yIHRoZSBob29rIHRvIHJlbW92ZVxuICAgICAqL1xuICAgIERPTVB1cmlmeS5yZW1vdmVIb29rID0gZnVuY3Rpb24gKGVudHJ5UG9pbnQpIHtcbiAgICAgIGlmIChob29rc1tlbnRyeVBvaW50XSkge1xuICAgICAgICBhcnJheVBvcChob29rc1tlbnRyeVBvaW50XSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZUhvb2tzXG4gICAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgYWxsIERPTVB1cmlmeSBob29rcyBhdCBhIGdpdmVuIGVudHJ5UG9pbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZW50cnlQb2ludCBlbnRyeSBwb2ludCBmb3IgdGhlIGhvb2tzIHRvIHJlbW92ZVxuICAgICAqL1xuICAgIERPTVB1cmlmeS5yZW1vdmVIb29rcyA9IGZ1bmN0aW9uIChlbnRyeVBvaW50KSB7XG4gICAgICBpZiAoaG9va3NbZW50cnlQb2ludF0pIHtcbiAgICAgICAgaG9va3NbZW50cnlQb2ludF0gPSBbXTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlQWxsSG9va3NcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHRvIHJlbW92ZSBhbGwgRE9NUHVyaWZ5IGhvb2tzXG4gICAgICpcbiAgICAgKi9cbiAgICBET01QdXJpZnkucmVtb3ZlQWxsSG9va3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBob29rcyA9IHt9O1xuICAgIH07XG5cbiAgICByZXR1cm4gRE9NUHVyaWZ5O1xuICB9XG5cbiAgdmFyIHB1cmlmeSA9IGNyZWF0ZURPTVB1cmlmeSgpO1xuXG4gIHJldHVybiBwdXJpZnk7XG5cbn0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXB1cmlmeS5qcy5tYXBcbiIsIjxzdmVsdGU6b3B0aW9ucyB0YWc9XCJueWxhcy1tZXNzYWdlLWJvZHlcIiAvPlxuXG48IS0tIFRoaXMgY29tcG9uZW50IGlzIGJlaW5nIHVzZWQgdG8gcmVuZGVyIE1lc3NhZ2UgYm9keSBpbiBFbWFpbCBjb21wb25lbnQuIFxuICBUaGlzIGlzIHRvIGVuc3VyZSB0aGUgc3R5bGVzIGluIHRoZSBodG1sIG1lc3NhZ2UgYm9keSBhcmUgZW5jYXBzdWxhdGVkIGFuZCBcbiAgZG9lcyBub3QgYWZmZWN0IHRoZSBnbG9iYWwgY29tcG9uZW50IGVuY2xvc2luZyBpdCAtLT5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGlzRmlsZUFuQXR0YWNobWVudCB9IGZyb20gXCJAY29tbW9ucy9tZXRob2RzL2lzRmlsZUFuQXR0YWNobWVudFwiO1xuICBpbXBvcnQgKiBhcyBET01QdXJpZnkgZnJvbSBcImRvbXB1cmlmeVwiO1xuICBpbXBvcnQgeyBnZXRFdmVudERpc3BhdGNoZXIgfSBmcm9tIFwiQGNvbW1vbnMvbWV0aG9kcy9jb21wb25lbnRcIjtcbiAgaW1wb3J0IHsgZ2V0X2N1cnJlbnRfY29tcG9uZW50LCBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZS9pbnRlcm5hbFwiO1xuICBpbXBvcnQge1xuICAgIERpc2FsbG93ZWRDb250ZW50VHlwZXMsXG4gICAgSW5saW5lSW1hZ2VUeXBlcyxcbiAgfSBmcm9tIFwiQGNvbW1vbnMvY29uc3RhbnRzL2F0dGFjaG1lbnQtY29udGVudC10eXBlc1wiO1xuXG4gIGV4cG9ydCBsZXQgbWVzc2FnZTtcbiAgZXhwb3J0IGxldCBib2R5O1xuXG4gIGNvbnN0IGRpc3BhdGNoRXZlbnQgPSBnZXRFdmVudERpc3BhdGNoZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGRvd25sb2FkU2VsZWN0ZWRGaWxlKGV2ZW50LCBmaWxlKSB7XG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgZGlzcGF0Y2hFdmVudChcImRvd25sb2FkQ2xpY2tlZFwiLCB7XG4gICAgICBldmVudCxcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBmaWxlLFxuICAgIH0pO1xuICB9XG5cbiAgbGV0IGF0dGFjaGVkRmlsZXMgPSBbXTtcblxuICBvbk1vdW50KCgpID0+IHtcbiAgICBpZiAobWVzc2FnZSAmJiBtZXNzYWdlLmZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAoY29uc3QgW2ZpbGVJbmRleCwgZmlsZV0gb2YgbWVzc2FnZS5maWxlcy5lbnRyaWVzKCkpIHtcbiAgICAgICAgaWYgKGlzRmlsZUFuQXR0YWNobWVudChmaWxlKSkge1xuICAgICAgICAgIGF0dGFjaGVkRmlsZXMgPSBbLi4uYXR0YWNoZWRGaWxlcywgbWVzc2FnZS5maWxlc1tmaWxlSW5kZXhdXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4gIGRpdiB7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG5cbiAgICBkaXYuYXR0YWNobWVudCB7XG4gICAgICBtYXJnaW46IDFyZW0gMCAwIDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAwLjVyZW07XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICAgICAgcGFkZGluZzogMC4zcmVtIDFyZW07XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmV5LWxpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zdHlsZT5cblxuPGRpdj5cbiAgeyNpZiBtZXNzYWdlfVxuICAgIHsjaWYgdHlwZW9mIGJvZHkgIT09IG51bGx9XG4gICAgICB7QGh0bWwgRE9NUHVyaWZ5LnNhbml0aXplKGJvZHkpfVxuICAgIHsvaWZ9XG4gICAgPGRpdiBjbGFzcz1cImF0dGFjaG1lbnRcIj5cbiAgICAgIHsjaWYgYXR0YWNoZWRGaWxlcyAmJiBBcnJheS5pc0FycmF5KGF0dGFjaGVkRmlsZXMpICYmIGF0dGFjaGVkRmlsZXMubGVuZ3RoID4gMH1cbiAgICAgICAgeyNlYWNoIGF0dGFjaGVkRmlsZXMgYXMgZmlsZX1cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbjpjbGlja3xzdG9wUHJvcGFnYXRpb249eyhlKSA9PiBkb3dubG9hZFNlbGVjdGVkRmlsZShlLCBmaWxlKX0+XG4gICAgICAgICAgICB7ZmlsZS5maWxlbmFtZSB8fCBmaWxlLmlkfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7L2VhY2h9XG4gICAgICB7L2lmfVxuICAgIDwvZGl2PlxuICB7L2lmfVxuPC9kaXY+XG4iLCI8c3ZlbHRlOm9wdGlvbnMgdGFnPVwibnlsYXMtdG9vbHRpcFwiIC8+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gXCJzdmVsdGUvaW50ZXJuYWxcIjtcbiAgaW1wb3J0IHsgZ2V0RXZlbnREaXNwYXRjaGVyIH0gZnJvbSBcIkBjb21tb25zL21ldGhvZHMvY29tcG9uZW50XCI7XG4gIGNvbnN0IGRpc3BhdGNoRXZlbnQgPSBnZXRFdmVudERpc3BhdGNoZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIC8qKlxuICAgKiBBZGQgdGhpcyBDU1MgdG8gdGhlIHBhcmVudCBjb21wb25lbnQ6IG55bGFzLXRvb2x0aXAgeyBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICogVGhpcyBlbnN1cmVzIHRoZSB0b29sdGlwIGlzIHBvc2l0aW9uZWQgYWJzb2x1dGVseSB0byB0aGUgdG9vbHRpcCBjb21wb25lbnQgcmF0aGVyIHRoYW4gdGhlIHBhZ2VcbiAgICoqL1xuXG4gIC8vICNyZWdpb24gdG9vbHRpcCBwcm9wc1xuICBleHBvcnQgbGV0IGN1cnJlbnRfdG9vbHRpcF9pZDsgLy8gaWQgb2YgdmlzaWJsZSB0b29sdGlwIGluIHBhcmVudCBjb21wb25lbnRcbiAgZXhwb3J0IGxldCBjb250ZW50O1xuICBleHBvcnQgbGV0IGlkO1xuICBleHBvcnQgbGV0IGljb247XG4gIGV4cG9ydCBsZXQgdGV4dDtcbiAgLy8gI2VuZHJlZ2lvbiB0b29sdGlwIHByb3BzXG5cbiAgJDogaXNUb29sdGlwVmlzaWJsZSA9XG4gICAgY3VycmVudF90b29sdGlwX2lkICYmIGN1cnJlbnRfdG9vbHRpcF9pZCA9PT0gaWQgPyB0cnVlIDogZmFsc2U7XG5cbiAgLy8gc2VuZCB0b29sdGlwSUQgdG8gcGFyZW50IGNvbXBvbmVudCwgc28gaXQgdXBkYXRlcyB0aGUgY3VycmVudF90b29sdGlwX2lkIHByb3BcbiAgZnVuY3Rpb24gdG9nZ2xlVG9vbHRpcFZpc2liaWxpdHkoKSB7XG4gICAgaWYgKGN1cnJlbnRfdG9vbHRpcF9pZCAhPT0gaWQpIHtcbiAgICAgIGRpc3BhdGNoRXZlbnQoXCJ0b2dnbGVUb29sdGlwXCIsIHtcbiAgICAgICAgdG9vbHRpcElEOiBpZCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjbG9zZSB0aGUgdG9vbHRpcCBpZiB1c2VyIGNsaWNrcyB0b29sdGlwIGJ1dHRvbiBhZ2FpblxuICAgICAgaXNUb29sdGlwVmlzaWJsZSA9ICFpc1Rvb2x0aXBWaXNpYmxlO1xuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuICBAaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy90aGVtaW5nL3ZhcmlhYmxlcy5zY3NzXCI7XG4gICRzcGFjaW5nLXM6IDAuNXJlbTtcbiAgYnV0dG9uLnRvb2x0aXAtdHJpZ2dlciB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5pY29uLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDFyZW07XG4gICAgJi5yZXZlcnNlLWljb24ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICB9XG4gIH1cblxuICBwLnRvb2x0aXAge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyZXktbGlnaHRlc3QpO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBjb2xvcjogdmFyKC0tZ3JleS1kYXJrKTtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBwYWRkaW5nOiAkc3BhY2luZy1zO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDhweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgbWF4LXdpZHRoOiAyNDBweDtcbiAgICBtYXgtaGVpZ2h0OiAyNDBweDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gICAgei1pbmRleDogMTtcbiAgfVxuPC9zdHlsZT5cblxuPGJ1dHRvblxuICBjbGFzcz1cInRvb2x0aXAtdHJpZ2dlclwiXG4gIGFyaWEtZXhwYW5kZWQ9e2lzVG9vbHRpcFZpc2libGUgPyBcInRydWVcIiA6IFwiZmFsc2VcIn1cbiAgaWQ9e2lkID8gYHRvb2x0aXAtdHJpZ2dlci0ke2lkfWAgOiBcIlwifVxuICBhcmlhLWRlc2NyaWJlZGJ5PXtpZH1cbiAgYXJpYS1sYWJlbD17aXNUb29sdGlwVmlzaWJsZSA/IFwiaGlkZSBlbWFpbFwiIDogXCJzaG93IGVtYWlsXCJ9XG4gIG9uOmNsaWNrfHN0b3BQcm9wYWdhdGlvbj17KGUpID0+IHRvZ2dsZVRvb2x0aXBWaXNpYmlsaXR5KGUpfVxuPlxuICB7I2lmIHRleHR9XG4gICAgPHA+e3RleHR9PC9wPlxuICB7L2lmfVxuICB7I2lmIGljb259XG4gICAgPGRpdiBjbGFzcz1cImljb24tY29udGFpbmVyXCIgY2xhc3M6cmV2ZXJzZS1pY29uPXtpY29uICYmIGlzVG9vbHRpcFZpc2libGV9PlxuICAgICAgPHN2ZWx0ZTpjb21wb25lbnQgdGhpcz17aWNvbn0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICA8L2Rpdj5cbiAgey9pZn1cbjwvYnV0dG9uPlxueyNpZiBpc1Rvb2x0aXBWaXNpYmxlfVxuICA8cCB7aWR9IHJvbGU9XCJ0b29sdGlwXCIgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJ0b29sdGlwXCI+XG4gICAge2NvbnRlbnR9XG4gICAgPCEtLSB7QGh0bWwgY29udGVudH0gLS0+XG4gIDwvcD5cbnsvaWZ9XG4iLCJleHBvcnQgZW51bSBBY2NvdW50T3JnYW5pemF0aW9uVW5pdCB7XG4gIExhYmVsID0gXCJsYWJlbFwiLFxuICBGb2xkZXIgPSBcImZvbGRlclwiLFxufVxuXG5leHBvcnQgZW51bSBBY2NvdW50U3luY1N0YXRlIHtcbiAgUlVOTklORyA9IFwicnVubmluZ1wiLFxuICBQQVJUSUFMID0gXCJwYXJ0aWFsXCIsXG4gIFNUT1BQRUQgPSBcInN0b3BwZWRcIixcbn1cblxuZXhwb3J0IGVudW0gTWFpbGJveEFjdGlvbnMge1xuICBTRUxFQ1RBTEwgPSBcInNlbGVjdGFsbFwiLFxuICBERUxFVEUgPSBcImRlbGV0ZVwiLFxuICBTVEFSID0gXCJzdGFyXCIsXG4gIFVOUkVBRCA9IFwidW5yZWFkXCIsXG59XG5cbmV4cG9ydCBlbnVtIE1lc3NhZ2VUeXBlIHtcbiAgRFJBRlRTID0gXCJkcmFmdHNcIixcbiAgTUVTU0FHRVMgPSBcIm1lc3NhZ2VzXCIsXG59XG5cbmV4cG9ydCBlbnVtIE1haWxib3hUaHJlYWRDbGlja0FjdGlvbiB7XG4gIERFRkFVTFQgPSBcImRlZmF1bHRcIixcbiAgQ1VTVE9NID0gXCJjdXN0b21cIixcbn1cbiIsImltcG9ydCB7XG4gIGdldEZldGNoQ29uZmlnLFxuICBoYW5kbGVFcnJvcixcbiAgaGFuZGxlUmVzcG9uc2UsXG4gIGdldE1pZGRsZXdhcmVBcGlVcmwsXG59IGZyb20gXCIuLi9tZXRob2RzL2FwaVwiO1xuaW1wb3J0IHR5cGUge1xuICBDb21tb25RdWVyeSxcbiAgTWlkZGxld2FyZVJlc3BvbnNlLFxuICBMYWJlbCxcbn0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG5cbmV4cG9ydCBjb25zdCBmZXRjaExhYmVscyA9IGFzeW5jIChxdWVyeTogQ29tbW9uUXVlcnkpOiBQcm9taXNlPExhYmVsW10+ID0+IHtcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKHF1ZXJ5LmNvbXBvbmVudF9pZCl9L2xhYmVsc2A7XG4gIHJldHVybiBhd2FpdCBmZXRjaChxdWVyeVN0cmluZywgZ2V0RmV0Y2hDb25maWcocXVlcnkpKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPExhYmVsW10+PihyZXNwb25zZSkpXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xufTtcbiIsImltcG9ydCB7IHdyaXRhYmxlIH0gZnJvbSBcInN2ZWx0ZS9zdG9yZVwiO1xuaW1wb3J0IHR5cGUgeyBDb21tb25RdWVyeSwgTGFiZWwsIFN0b3JlZExhYmVscyB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuaW1wb3J0IHsgZmV0Y2hMYWJlbHMgfSBmcm9tIFwiQGNvbW1vbnMvY29ubmVjdGlvbnMvbGFiZWxzXCI7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVMYWJlbHMoKSB7XG4gIGNvbnN0IHsgc3Vic2NyaWJlLCBzZXQsIHVwZGF0ZSB9ID0gd3JpdGFibGU8UmVjb3JkPHN0cmluZywgTGFiZWxbXT4+KHt9KTtcbiAgY29uc3QgbGFiZWxzTWFwOiBSZWNvcmQ8c3RyaW5nLCBMYWJlbFtdPiA9IHt9O1xuXG4gIHJldHVybiB7XG4gICAgc3Vic2NyaWJlLFxuICAgIGdldExhYmVsczogYXN5bmMgKHF1ZXJ5OiBDb21tb25RdWVyeSwgZm9yY2VSZWZyZXNoID0gZmFsc2UpID0+IHtcbiAgICAgIGNvbnN0IHF1ZXJ5S2V5ID0gSlNPTi5zdHJpbmdpZnkocXVlcnkpO1xuICAgICAgaWYgKFxuICAgICAgICAoIWxhYmVsc01hcFtxdWVyeUtleV0gfHwgZm9yY2VSZWZyZXNoKSAmJlxuICAgICAgICAocXVlcnkuY29tcG9uZW50X2lkIHx8IHF1ZXJ5LmFjY2Vzc190b2tlbilcbiAgICAgICkge1xuICAgICAgICBsYWJlbHNNYXBbcXVlcnlLZXldID0gKGF3YWl0IGZldGNoTGFiZWxzKHF1ZXJ5KSkubWFwKChsYWJlbCkgPT4ge1xuICAgICAgICAgIGxhYmVsLnRvU3RyaW5nID0gKCkgPT4gbGFiZWwuaWQ7XG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHVwZGF0ZSgobGFiZWxzKSA9PiB7XG4gICAgICAgIGxhYmVsc1txdWVyeUtleV0gPSBsYWJlbHNNYXBbcXVlcnlLZXldO1xuICAgICAgICByZXR1cm4geyAuLi5sYWJlbHMgfTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGxhYmVsc01hcFtxdWVyeUtleV07XG4gICAgfSxcbiAgICByZXNldDogKCkgPT4gc2V0KHt9KSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IExhYmVsU3RvcmUgPSBpbml0aWFsaXplTGFiZWxzKCk7XG4iLCJpbXBvcnQge1xuICBnZXRGZXRjaENvbmZpZyxcbiAgaGFuZGxlRXJyb3IsXG4gIGhhbmRsZVJlc3BvbnNlLFxuICBnZXRNaWRkbGV3YXJlQXBpVXJsLFxufSBmcm9tIFwiLi4vbWV0aG9kcy9hcGlcIjtcbmltcG9ydCB0eXBlIHtcbiAgQ29tbW9uUXVlcnksXG4gIE1pZGRsZXdhcmVSZXNwb25zZSxcbiAgRm9sZGVyLFxufSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvTnlsYXNcIjtcblxuZXhwb3J0IGNvbnN0IGZldGNoRm9sZGVycyA9IGFzeW5jIChxdWVyeTogQ29tbW9uUXVlcnkpOiBQcm9taXNlPEZvbGRlcltdPiA9PiB7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gYCR7Z2V0TWlkZGxld2FyZUFwaVVybChxdWVyeS5jb21wb25lbnRfaWQpfS9mb2xkZXJzYDtcbiAgcmV0dXJuIGF3YWl0IGZldGNoKHF1ZXJ5U3RyaW5nLCBnZXRGZXRjaENvbmZpZyhxdWVyeSkpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8Rm9sZGVyW10+PihyZXNwb25zZSkpXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xufTtcbiIsImltcG9ydCB7IHdyaXRhYmxlIH0gZnJvbSBcInN2ZWx0ZS9zdG9yZVwiO1xuaW1wb3J0IHR5cGUgeyBDb21tb25RdWVyeSwgRm9sZGVyLCBTdG9yZWRGb2xkZXJzIH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG5pbXBvcnQgeyBmZXRjaEZvbGRlcnMgfSBmcm9tIFwiQGNvbW1vbnMvY29ubmVjdGlvbnMvZm9sZGVyc1wiO1xuXG5mdW5jdGlvbiBpbml0aWFsaXplRm9sZGVycygpIHtcbiAgY29uc3QgeyBzdWJzY3JpYmUsIHNldCwgdXBkYXRlIH0gPSB3cml0YWJsZTxSZWNvcmQ8c3RyaW5nLCBGb2xkZXJbXT4+KHt9KTtcbiAgY29uc3QgZm9sZGVyc01hcDogUmVjb3JkPHN0cmluZywgRm9sZGVyW10+ID0ge307XG5cbiAgcmV0dXJuIHtcbiAgICBzdWJzY3JpYmUsXG4gICAgZ2V0Rm9sZGVyczogYXN5bmMgKHF1ZXJ5OiBDb21tb25RdWVyeSwgZm9yY2VSZWZyZXNoID0gZmFsc2UpID0+IHtcbiAgICAgIGNvbnN0IHF1ZXJ5S2V5ID0gSlNPTi5zdHJpbmdpZnkocXVlcnkpO1xuICAgICAgaWYgKFxuICAgICAgICAoIWZvbGRlcnNNYXBbcXVlcnlLZXldIHx8IGZvcmNlUmVmcmVzaCkgJiZcbiAgICAgICAgKHF1ZXJ5LmNvbXBvbmVudF9pZCB8fCBxdWVyeS5hY2Nlc3NfdG9rZW4pXG4gICAgICApIHtcbiAgICAgICAgZm9sZGVyc01hcFtxdWVyeUtleV0gPSAoYXdhaXQgZmV0Y2hGb2xkZXJzKHF1ZXJ5KSkubWFwKChmb2xkZXIpID0+IHtcbiAgICAgICAgICBmb2xkZXIudG9TdHJpbmcgPSAoKSA9PiBmb2xkZXIuaWQ7XG4gICAgICAgICAgcmV0dXJuIGZvbGRlcjtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB1cGRhdGUoKGZvbGRlcnMpID0+IHtcbiAgICAgICAgZm9sZGVyc1txdWVyeUtleV0gPSBmb2xkZXJzTWFwW3F1ZXJ5S2V5XTtcbiAgICAgICAgcmV0dXJuIHsgLi4uZm9sZGVycyB9O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZm9sZGVyc01hcFtxdWVyeUtleV07XG4gICAgfSxcbiAgICByZXNldDogKCkgPT4gc2V0KHt9KSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IEZvbGRlclN0b3JlID0gaW5pdGlhbGl6ZUZvbGRlcnMoKTtcbiIsIjxzdmcgaWQ9XCJDYXBhXzFcIiBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgNDk3IDQ5N1wiIGhlaWdodD1cIjUxMlwiIHZpZXdCb3g9XCIwIDAgNDk3IDQ5N1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Zz48Y2lyY2xlIGN4PVwiOThcIiBjeT1cIjM3NlwiIGZpbGw9XCIjOTA5YmE2XCIgcj1cIjUzXCIvPjxjaXJjbGUgY3g9XCI0MzlcIiBjeT1cIjMzNlwiIGZpbGw9XCIjYzhkMmRjXCIgcj1cIjQ2XCIvPjxjaXJjbGUgY3g9XCIzOTdcIiBjeT1cIjExMlwiIGZpbGw9XCIjZTllZGYxXCIgcj1cIjM4XCIvPjxlbGxpcHNlIGN4PVwiNTYuMjQ1XCIgY3k9XCIyNDQuNzU0XCIgZmlsbD1cIiM3ZThiOTZcIiByeD1cIjU2LjI0NVwiIHJ5PVwiNTQuODc0XCIvPjxlbGxpcHNlIGN4PVwiMjE3LjgyMVwiIGN5PVwiNDQ3LjE3NVwiIGZpbGw9XCIjYTJhYmI4XCIgcng9XCI1MS4xMzJcIiByeT1cIjQ5LjgyNVwiLz48ZWxsaXBzZSBjeD1cIjM0OS4yMjlcIiBjeT1cIjQyNy44NzNcIiBmaWxsPVwiI2I5YzNjZFwiIHJ4PVwiNDguNTc1XCIgcnk9XCI0Ny4yOTdcIi8+PGVsbGlwc2UgY3g9XCIxMTcuMDkyXCIgY3k9XCIxMTQuNzk0XCIgZmlsbD1cIiM1ZjZjNzVcIiByeD1cIjU4LjgwMVwiIHJ5PVwiNTcuMzk3XCIvPjxlbGxpcHNlIGN4PVwiNDUzLjUzOFwiIGN5PVwiMjE2LjQ3N1wiIGZpbGw9XCIjZGNlNmViXCIgcng9XCI0My40NjJcIiByeT1cIjQyLjY1NlwiLz48Y2lyY2xlIGN4PVwiMjYzXCIgY3k9XCI2MlwiIGZpbGw9XCIjNGU1YTYxXCIgcj1cIjYyXCIvPjwvZz48L3N2Zz4iLCI8c3ZnIHdpZHRoPVwiMjFweFwiIGhlaWdodD1cIjIxcHhcIiB2aWV3Qm94PVwiMCAwIDIxIDIxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxnIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjEuNXB4XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDQuNSA2LjUpXCI+PHBhdGggZD1cIm0xMSA4di0yYzAtMS42NTY4NTQyNS0xLjM0MzE0NTc1LTMtMy0zaC04XCIvPjxwYXRoIGQ9XCJtMyA2LTMuMDAxLTMgMy4wMDEtM1wiLz48L2c+PC9zdmc+IiwiPHN2ZyB3aWR0aD1cIjIxcHhcIiBoZWlnaHQ9XCIyMXB4XCIgdmlld0JveD1cIjAgMCAyMSAyMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZyBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIxLjVweFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzLjUgNi41KVwiPjxwYXRoIGQ9XCJtMTQgOHYtMmMwLTEuNjU2ODU0MjUtMS4zNDMxNDU4LTMtMy0zaC04XCIvPjxwYXRoIGQ9XCJtMyA2LTMuMDAxLTMgMy4wMDEtM1wiLz48cGF0aCBkPVwibTYgNi0zLjAwMS0zIDMuMDAxLTNcIi8+PC9nPjwvc3ZnPiIsIjxzdmcgd2lkdGg9XCIyMXB4XCIgaGVpZ2h0PVwiMjFweFwiIHZpZXdCb3g9XCIwIDAgMjEgMjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGcgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMS41cHhcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNS41IDYuNSlcIj48cGF0aCBkPVwibTAgOHYtMmMwLTEuNjU2ODU0MjUgMS4zNDMxNDU3NS0zIDMtM2g4XCIvPjxwYXRoIGQ9XCJtNy45OTkgNiAzLjAwMS0zLTMuMDAxLTNcIi8+PC9nPjwvc3ZnPiIsIjxzdmVsdGU6b3B0aW9ucyB0YWc9XCJueWxhcy1lbWFpbFwiIC8+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB7XG4gICAgRW1haWxTdG9yZSxcbiAgICBFcnJvclN0b3JlLFxuICAgIE1hbmlmZXN0U3RvcmUsXG4gICAgZmV0Y2hBY2NvdW50LFxuICAgIHVwZGF0ZVRocmVhZCxcbiAgICBmZXRjaE1lc3NhZ2UsXG4gICAgZmV0Y2hFbWFpbCxcbiAgICBDb250YWN0U3RvcmUsXG4gICAgZmV0Y2hDbGVhbkNvbnZlcnNhdGlvbnMsXG4gICAgZmV0Y2hUaHJlYWQsXG4gICAgc2lsZW5jZSxcbiAgICBGaWxlc1N0b3JlLFxuICB9IGZyb20gXCJAY29tbW9uc1wiO1xuXG4gIGltcG9ydCB0eXBlIHsgQ29udGFjdCwgQ29udGFjdFNlYXJjaFF1ZXJ5IH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL0NvbnRhY3RzXCI7XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCwgb25Nb3VudCwgdGljayB9IGZyb20gXCJzdmVsdGUvaW50ZXJuYWxcIjtcbiAgaW1wb3J0IHtcbiAgICBidWlsZEludGVybmFsUHJvcHMsXG4gICAgZG93bmxvYWRBdHRhY2hlZEZpbGUsXG4gICAgZ2V0RXZlbnREaXNwYXRjaGVyLFxuICB9IGZyb20gXCJAY29tbW9ucy9tZXRob2RzL2NvbXBvbmVudFwiO1xuICBpbXBvcnQge1xuICAgIGJ1aWxkUGFydGljaXBhbnRzLFxuICAgIGluY2x1ZGVzTXlFbWFpbCxcbiAgfSBmcm9tIFwiQGNvbW1vbnMvbWV0aG9kcy9wYXJ0aWNpcGFudHNcIjtcbiAgaW1wb3J0IHsgYWRkS2V5VmFsdWUgfSBmcm9tIFwiLi9tZXRob2RzL2xpYlwiO1xuICBpbXBvcnQgRHJvcGRvd25TeW1ib2wgZnJvbSBcIi4vYXNzZXRzL2NoZXZyb24tZG93bi5zdmdcIjtcbiAgaW1wb3J0IFRyYXNoSWNvbiBmcm9tIFwiLi9hc3NldHMvdHJhc2gtYWx0LnN2Z1wiO1xuICBpbXBvcnQgTWFya1JlYWRJY29uIGZyb20gXCIuL2Fzc2V0cy9lbnZlbG9wZS1vcGVuLXRleHQuc3ZnXCI7XG4gIGltcG9ydCBNYXJrVW5yZWFkSWNvbiBmcm9tIFwiLi9hc3NldHMvZW52ZWxvcGUuc3ZnXCI7XG4gIGltcG9ydCBBdHRhY2htZW50SWNvbiBmcm9tIFwiLi9hc3NldHMvYXR0YWNobWVudC5zdmdcIjtcbiAgaW1wb3J0IExlZnRBcnJvd0xpbmVJY29uIGZyb20gXCIuL2Fzc2V0cy9hcnJvdy1saW5lLnN2Z1wiO1xuICBpbXBvcnQgTm9NZXNzYWdlc0ljb24gZnJvbSBcIi4vYXNzZXRzL25vLW1lc3NhZ2VzLnN2Z1wiO1xuICBpbXBvcnQgRHJhZnRJY29uIGZyb20gXCIuL2Fzc2V0cy9kcmFmdC5zdmdcIjtcbiAgaW1wb3J0IHR5cGUge1xuICAgIEVtYWlsUHJvcGVydGllcyxcbiAgICBQYXJ0aWNpcGFudCxcbiAgICBDb252ZXJzYXRpb25RdWVyeSxcbiAgICBDb252ZXJzYXRpb24sXG4gICAgVGhyZWFkLFxuICAgIE1lc3NhZ2UsXG4gICAgQWNjb3VudCxcbiAgICBMYWJlbCxcbiAgICBGb2xkZXIsXG4gICAgRmlsZSxcbiAgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvTnlsYXNcIjtcbiAgaW1wb3J0IFwiQGNvbW1vbnMvY29tcG9uZW50cy9Db250YWN0SW1hZ2UvQ29udGFjdEltYWdlLnN2ZWx0ZVwiO1xuICBpbXBvcnQgXCJAY29tbW9ucy9jb21wb25lbnRzL01lc3NhZ2VCb2R5LnN2ZWx0ZVwiO1xuICBpbXBvcnQgXCJAY29tbW9ucy9jb21wb25lbnRzL1Rvb2x0aXAuc3ZlbHRlXCI7XG4gIGltcG9ydCB7IEFjY291bnRPcmdhbml6YXRpb25Vbml0LCBNZXNzYWdlVHlwZSB9IGZyb20gXCJAY29tbW9ucy9lbnVtcy9OeWxhc1wiO1xuICBpbXBvcnQgeyBMYWJlbFN0b3JlIH0gZnJvbSBcIkBjb21tb25zL3N0b3JlL2xhYmVsc1wiO1xuICBpbXBvcnQgeyBGb2xkZXJTdG9yZSB9IGZyb20gXCJAY29tbW9ucy9zdG9yZS9mb2xkZXJzXCI7XG4gIGltcG9ydCAqIGFzIERPTVB1cmlmeSBmcm9tIFwiZG9tcHVyaWZ5XCI7XG4gIGltcG9ydCBMb2FkaW5nSWNvbiBmcm9tIFwiLi9hc3NldHMvbG9hZGluZy5zdmdcIjtcbiAgaW1wb3J0IHsgZG93bmxvYWRGaWxlIH0gZnJvbSBcIkBjb21tb25zL2Nvbm5lY3Rpb25zL2ZpbGVzXCI7XG4gIGltcG9ydCBSZXBseUljb24gZnJvbSBcIi4vYXNzZXRzL3JlcGx5LnN2Z1wiO1xuICBpbXBvcnQgUmVwbHlBbGxJY29uIGZyb20gXCIuL2Fzc2V0cy9yZXBseS1hbGwuc3ZnXCI7XG4gIGltcG9ydCBGb3J3YXJkSWNvbiBmcm9tIFwiLi9hc3NldHMvZm9yd2FyZC5zdmdcIjtcbiAgaW1wb3J0IHsgaXNGaWxlQW5BdHRhY2htZW50IH0gZnJvbSBcIkBjb21tb25zL21ldGhvZHMvaXNGaWxlQW5BdHRhY2htZW50XCI7XG4gIGltcG9ydCB7IHVwZGF0ZU1lc3NhZ2UgfSBmcm9tIFwiQGNvbW1vbnMvY29ubmVjdGlvbnMvbWVzc2FnZXNcIjtcbiAgaW1wb3J0IHBrZyBmcm9tIFwiLi4vcGFja2FnZS5qc29uXCI7XG5cbiAgY29uc3QgZGlzcGF0Y2hFdmVudCA9IGdldEV2ZW50RGlzcGF0Y2hlcihnZXRfY3VycmVudF9jb21wb25lbnQoKSk7XG4gICQ6IGRpc3BhdGNoRXZlbnQoXCJtYW5pZmVzdExvYWRlZFwiLCBtYW5pZmVzdCk7XG5cbiAgJDogaWYgKE9iamVjdC5rZXlzKCRFcnJvclN0b3JlKS5sZW5ndGgpIHtcbiAgICBkaXNwYXRjaEV2ZW50KFwib25FcnJvclwiLCAkRXJyb3JTdG9yZSk7XG4gIH1cblxuICBleHBvcnQgbGV0IGlkOiBzdHJpbmcgPSBcIlwiO1xuICBleHBvcnQgbGV0IGFjY2Vzc190b2tlbjogc3RyaW5nID0gXCJcIjtcblxuICAvLyBleHBvcnQgbGV0IG1lc3NhZ2VzOiBNZXNzYWdlW10gPSBbXTtcbiAgZXhwb3J0IGxldCBjbGVhbl9jb252ZXJzYXRpb246IGJvb2xlYW47XG4gIGV4cG9ydCBsZXQgY2xpY2tfYWN0aW9uOiBcImRlZmF1bHRcIiB8IFwibWFpbGJveFwiIHwgXCJjdXN0b21cIiA9IFwiZGVmYXVsdFwiO1xuICBleHBvcnQgbGV0IG1lc3NhZ2VfaWQ6IHN0cmluZztcbiAgZXhwb3J0IGxldCBtZXNzYWdlOiBNZXNzYWdlO1xuICBleHBvcnQgbGV0IHNob3dfY29udGFjdF9hdmF0YXI6IGJvb2xlYW47XG4gIGV4cG9ydCBsZXQgc2hvd19leHBhbmRlZF9lbWFpbF92aWV3X29ubG9hZDogYm9vbGVhbjtcbiAgZXhwb3J0IGxldCBzaG93X251bWJlcl9vZl9tZXNzYWdlczogYm9vbGVhbjtcbiAgZXhwb3J0IGxldCBzaG93X3JlY2VpdmVkX3RpbWVzdGFtcDogYm9vbGVhbjtcbiAgZXhwb3J0IGxldCBzaG93X3N0YXI6IGJvb2xlYW47XG4gIGV4cG9ydCBsZXQgc2hvd190aHJlYWRfYWN0aW9uczogYm9vbGVhbjtcbiAgZXhwb3J0IGxldCB0aGVtZTogc3RyaW5nO1xuICBleHBvcnQgbGV0IHRocmVhZF9pZDogc3RyaW5nO1xuICBleHBvcnQgbGV0IHRocmVhZDogVGhyZWFkO1xuICBleHBvcnQgbGV0IHlvdTogUGFydGlhbDxBY2NvdW50PjtcbiAgZXhwb3J0IGxldCBzaG93X3JlcGx5OiBib29sZWFuO1xuICBleHBvcnQgbGV0IHNob3dfcmVwbHlfYWxsOiBib29sZWFuO1xuICBleHBvcnQgbGV0IHNob3dfZm9yd2FyZDogYm9vbGVhbjtcblxuICBjb25zdCBkZWZhdWx0VmFsdWVNYXA6IFBhcnRpYWw8RW1haWxQcm9wZXJ0aWVzPiA9IHtcbiAgICBjbGVhbl9jb252ZXJzYXRpb246IGZhbHNlLFxuICAgIGNsaWNrX2FjdGlvbjogXCJkZWZhdWx0XCIsXG4gICAgbWVzc2FnZV9pZDogXCJcIixcbiAgICBzaG93X2NvbnRhY3RfYXZhdGFyOiB0cnVlLFxuICAgIHNob3dfZXhwYW5kZWRfZW1haWxfdmlld19vbmxvYWQ6IGZhbHNlLFxuICAgIHNob3dfbnVtYmVyX29mX21lc3NhZ2VzOiB0cnVlLFxuICAgIHNob3dfcmVjZWl2ZWRfdGltZXN0YW1wOiB0cnVlLFxuICAgIHNob3dfc3RhcjogZmFsc2UsXG4gICAgc2hvd190aHJlYWRfYWN0aW9uczogZmFsc2UsXG4gICAgdGhlbWU6IFwiYXV0b1wiLFxuICAgIHRocmVhZF9pZDogXCJcIixcbiAgICB5b3U6IHt9LFxuICAgIHNob3dfcmVwbHk6IGZhbHNlLFxuICAgIHNob3dfcmVwbHlfYWxsOiBmYWxzZSxcbiAgICBzaG93X2ZvcndhcmQ6IGZhbHNlLFxuICB9O1xuXG4gIGxldCBtYW5pZmVzdDogUGFydGlhbDxFbWFpbFByb3BlcnRpZXM+ID0ge307XG4gIGxldCBfdGhpcyA9IDxFbWFpbFByb3BlcnRpZXM+YnVpbGRJbnRlcm5hbFByb3BzKHt9LCB7fSwgZGVmYXVsdFZhbHVlTWFwKTtcblxuICBsZXQgdXNlckVtYWlsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICQ6IHVzZXJFbWFpbCA9IDxzdHJpbmc+X3RoaXMueW91Py5lbWFpbF9hZGRyZXNzO1xuICBjb25zdCBQQVJUSUNJUEFOVFNfVE9fVFJVTkNBVEUgPSAzO1xuXG4gIGxldCB0aGVtZUxvYWRlZCA9IGZhbHNlO1xuICBsZXQgcHJvcHNMb2FkZWQgPSBmYWxzZTtcbiAgbGV0IG1hbmlmZXN0TG9hZGVkID0gZmFsc2U7XG4gIG9uTW91bnQoYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHRpY2soKTtcbiAgICBwcm9wc0xvYWRlZCA9IHRydWU7XG5cbiAgICBtYW5pZmVzdCA9ICgoYXdhaXQgJE1hbmlmZXN0U3RvcmVbXG4gICAgICBKU09OLnN0cmluZ2lmeSh7IGNvbXBvbmVudF9pZDogaWQsIGFjY2Vzc190b2tlbiB9KVxuICAgIF0pIHx8IHt9KSBhcyBFbWFpbFByb3BlcnRpZXM7XG4gICAgbWFuaWZlc3RMb2FkZWQgPSB0cnVlO1xuXG4gICAgX3RoaXMgPSBidWlsZEludGVybmFsUHJvcHMoXG4gICAgICAkJHByb3BzLFxuICAgICAgbWFuaWZlc3QsXG4gICAgICBkZWZhdWx0VmFsdWVNYXAsXG4gICAgKSBhcyBFbWFpbFByb3BlcnRpZXM7XG5cbiAgICB0cmFuc2Zvcm1Qcm9wZXJ0eVZhbHVlcygpO1xuXG4gICAgLy8gRmV0Y2ggQWNjb3VudFxuICAgIGlmIChpZCAmJiAhX3RoaXMueW91Py5pZCAmJiAhZW1haWxNYW51YWxseVBhc3NlZCkge1xuICAgICAgX3RoaXMueW91ID0gYXdhaXQgZmV0Y2hBY2NvdW50KHtcbiAgICAgICAgY29tcG9uZW50X2lkOiBxdWVyeS5jb21wb25lbnRfaWQsXG4gICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgIH0pO1xuICAgICAgLy8gSW5pdGlhbGl6ZSBsYWJlbHMgLyBmb2xkZXJzXG4gICAgICBjb25zdCBhY2NvdW50T3JnYW5pemF0aW9uVW5pdFF1ZXJ5ID0ge1xuICAgICAgICBjb21wb25lbnRfaWQ6IGlkLFxuICAgICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICB9O1xuICAgICAgaWYgKF90aGlzLnlvdT8ub3JnYW5pemF0aW9uX3VuaXQgPT09IEFjY291bnRPcmdhbml6YXRpb25Vbml0LkxhYmVsKSB7XG4gICAgICAgIGxhYmVscyA9IGF3YWl0IExhYmVsU3RvcmUuZ2V0TGFiZWxzKGFjY291bnRPcmdhbml6YXRpb25Vbml0UXVlcnkpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgX3RoaXMueW91Py5vcmdhbml6YXRpb25fdW5pdCA9PT0gQWNjb3VudE9yZ2FuaXphdGlvblVuaXQuRm9sZGVyXG4gICAgICApIHtcbiAgICAgICAgZm9sZGVycyA9IGF3YWl0IEZvbGRlclN0b3JlLmdldEZvbGRlcnMoYWNjb3VudE9yZ2FuaXphdGlvblVuaXRRdWVyeSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBsZXQgcHJldmlvdXNQcm9wcyA9ICQkcHJvcHM7XG4gICQ6IHByb3BzTG9hZGVkICYmXG4gICAgbWFuaWZlc3RMb2FkZWQgJiZcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHByZXZpb3VzUHJvcHMpICE9PSBKU09OLnN0cmluZ2lmeSgkJHByb3BzKSkge1xuICAgICAgICBfdGhpcyA9IGJ1aWxkSW50ZXJuYWxQcm9wcyhcbiAgICAgICAgICAkJHByb3BzLFxuICAgICAgICAgIG1hbmlmZXN0LFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZU1hcCxcbiAgICAgICAgKSBhcyBFbWFpbFByb3BlcnRpZXM7XG5cbiAgICAgICAgYXdhaXQgdHJhbnNmb3JtUHJvcGVydHlWYWx1ZXMoKTtcbiAgICAgIH1cbiAgICB9KSgpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHRyYW5zZm9ybVByb3BlcnR5VmFsdWVzKCkge1xuICAgIGNvbnN0IHByZXZpb3VzUHJvcHNUaHJlYWRJZCA9IHByZXZpb3VzUHJvcHMudGhyZWFkX2lkO1xuICAgIHByZXZpb3VzUHJvcHMgPSAkJHByb3BzO1xuICAgIF90aGlzLnRocmVhZF9pZCA9XG4gICAgICAhdGhyZWFkICYmICFtZXNzYWdlX2lkICYmICFtZXNzYWdlXG4gICAgICAgID8gX3RoaXMudGhyZWFkX2lkIHx8IG1hbmlmZXN0LnRocmVhZF9pZFxuICAgICAgICA6IFwiXCI7XG5cbiAgICBpZiAoaWQgJiYgIV90aGlzLnRocmVhZF9pZCAmJiAhX3RoaXMudGhyZWFkICYmIF90aGlzLm1lc3NhZ2VfaWQpIHtcbiAgICAgIGZldGNoT25lTWVzc2FnZSgpO1xuICAgIH1cbiAgICBpZiAoIWFjdGl2ZVRocmVhZCB8fCBwcmV2aW91c1Byb3BzVGhyZWFkSWQgIT09IF90aGlzLnRocmVhZF9pZCkge1xuICAgICAgYXdhaXQgZ2V0VGhyZWFkKCk7XG4gICAgfVxuICB9XG5cbiAgbGV0IGNvbnRhY3RzOiBSZWNvcmQ8c3RyaW5nLCBDb250YWN0PiA9IHt9O1xuICBsZXQgYWN0aXZlVGhyZWFkQ29udGFjdCA9IHt9O1xuXG4gICQ6IGFjdGl2ZVRocmVhZENvbnRhY3QgPVxuICAgIGFjdGl2ZVRocmVhZCAmJiBjb250YWN0c1xuICAgICAgPyBjb250YWN0c1tcbiAgICAgICAgICBhY3RpdmVUaHJlYWQubWVzc2FnZXNbYWN0aXZlVGhyZWFkLm1lc3NhZ2VzLmxlbmd0aCAtIDFdPy5mcm9tWzBdLmVtYWlsXG4gICAgICAgIF1cbiAgICAgIDoge307XG4gICQ6IGFjdGl2ZU1lc3NhZ2VDb250YWN0ID1cbiAgICBfdGhpcy5tZXNzYWdlICYmIGNvbnRhY3RzID8gY29udGFjdHNbX3RoaXMubWVzc2FnZT8uZnJvbVswXS5lbWFpbF0gOiB7fTtcblxuICBsZXQgdGhyZWFkSWRDaGFuZ2VkID0gZmFsc2U7XG4gICQ6IF90aGlzLnRocmVhZF9pZCwgKHRocmVhZElkQ2hhbmdlZCA9IHRydWUpO1xuXG4gICQ6IChhc3luYyAoKSA9PiB7XG4gICAgaWYgKHRocmVhZElkQ2hhbmdlZCB8fCAhY29udGFjdHMpIHtcbiAgICAgIHRocmVhZElkQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgaWYgKHRocmVhZCAmJiB0aHJlYWQubWVzc2FnZXMpIHtcbiAgICAgICAgYXdhaXQgZ2V0VGhyZWFkQ29udGFjdHModGhyZWFkKTtcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlVGhyZWFkKSB7XG4gICAgICAgIGF3YWl0IGdldFRocmVhZENvbnRhY3RzKGFjdGl2ZVRocmVhZCk7XG4gICAgICB9IGVsc2UgaWYgKF90aGlzLm1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgcGFydGljaXBhbnQgPSBfdGhpcy5tZXNzYWdlLmZyb21bMF07XG4gICAgICAgIGNvbnRhY3RzW3BhcnRpY2lwYW50LmVtYWlsXSA9IGF3YWl0IGdldENvbnRhY3QocGFydGljaXBhbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSkoKTtcblxuICBhc3luYyBmdW5jdGlvbiBnZXRUaHJlYWRDb250YWN0cyh0aHJlYWQ6IFRocmVhZCkge1xuICAgIGNvbnN0IGZyb21QYXJ0aWNpcGFudHMgPVxuICAgICAgdGhyZWFkLm1lc3NhZ2VzPy5yZWR1Y2U8UmVjb3JkPHN0cmluZywgUGFydGljaXBhbnQ+PihcbiAgICAgICAgKHBhcnRpY2lwYW50cywgbWVzc2FnZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcnRpY2lwYW50OiBQYXJ0aWNpcGFudCA9IG1lc3NhZ2UuZnJvbVswXTtcbiAgICAgICAgICBwYXJ0aWNpcGFudHNbcGFydGljaXBhbnQuZW1haWxdID0gcGFydGljaXBhbnQ7XG4gICAgICAgICAgcmV0dXJuIHBhcnRpY2lwYW50cztcbiAgICAgICAgfSxcbiAgICAgICAge30sXG4gICAgICApIHx8IHt9O1xuICAgIGNvbnN0IGZyb21QYXJ0aWNpcGFudHNBcnJheSA9XG4gICAgICBBcnJheS5mcm9tKE9iamVjdC52YWx1ZXMoZnJvbVBhcnRpY2lwYW50cykpIHx8IFtdO1xuXG4gICAgZm9yIChjb25zdCBwYXJ0aWNpcGFudCBvZiBmcm9tUGFydGljaXBhbnRzQXJyYXkpIHtcbiAgICAgIGNvbnN0IHBhcnRpY2lwYW50RW1haWwgPSBwYXJ0aWNpcGFudC5lbWFpbDtcbiAgICAgIGlmICghY29udGFjdHNbcGFydGljaXBhbnRFbWFpbF0gJiYgcGFydGljaXBhbnRFbWFpbCkge1xuICAgICAgICBjb250YWN0c1twYXJ0aWNpcGFudEVtYWlsXSA9IGF3YWl0IGdldENvbnRhY3QocGFydGljaXBhbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxldCBtYWluOiBFbGVtZW50O1xuICBsZXQgbWVzc2FnZVJlZnM6IEVsZW1lbnRbXSA9IFtdO1xuICBjb25zdCBNQVhfREVTS1RPUF9QQVJUSUNJUEFOVFMgPSAyO1xuICBjb25zdCBNQVhfTU9CSUxFX1BBUlRJQ0lQQU5UUyA9IDE7XG5cbiAgLy8gI3JlZ2lvbiBpbml0aWFsaXplIGxhYmVsIGFuZCBmb2xkZXIgdmFycyAoZm9yIHRyYXNoKVxuICBsZXQgbGFiZWxzOiBMYWJlbFtdID0gW107XG4gICQ6IHRyYXNoTGFiZWxJRCA9XG4gICAgbGFiZWxzICYmIGxhYmVscy5sZW5ndGhcbiAgICAgID8gbGFiZWxzLmZpbmQoKGxhYmVsKSA9PiBsYWJlbC5uYW1lID09PSBcInRyYXNoXCIpPy5pZFxuICAgICAgOiBudWxsO1xuXG4gIGxldCBmb2xkZXJzOiBGb2xkZXJbXSA9IFtdO1xuICAkOiB0cmFzaEZvbGRlcklEID1cbiAgICBmb2xkZXJzICYmIGZvbGRlcnMubGVuZ3RoXG4gICAgICA/IGZvbGRlcnMuZmluZCgoZm9sZGVyKSA9PiBmb2xkZXIubmFtZSA9PT0gXCJ0cmFzaFwiKT8uaWRcbiAgICAgIDogbnVsbDtcbiAgLy8gI2VuZHJlZ2lvbiBpbml0aWFsaXplIGxhYmVsIGFuZCBmb2xkZXIgdmFycyAoZm9yIHRyYXNoKVxuXG4gIGxldCBwYXJ0aWNpcGFudHM6IFBhcnRpY2lwYW50W10gPSBbXTtcbiAgJDoge1xuICAgIHBhcnRpY2lwYW50cyA9IGFjdGl2ZVRocmVhZCA/IGFjdGl2ZVRocmVhZC5wYXJ0aWNpcGFudHMgOiBbXTtcbiAgfVxuICBsZXQgcXVlcnk6IENvbnZlcnNhdGlvblF1ZXJ5O1xuICAkOiBxdWVyeSA9IHtcbiAgICBhY2Nlc3NfdG9rZW4sXG4gICAgY29tcG9uZW50X2lkOiBpZCxcbiAgICB0aHJlYWRfaWQ6IF90aGlzLnRocmVhZF9pZCxcbiAgfTtcblxuICBsZXQgcXVlcnlLZXk6IHN0cmluZztcbiAgJDogcXVlcnlLZXkgPSBKU09OLnN0cmluZ2lmeShxdWVyeSk7XG5cbiAgbGV0IGFjdGl2ZVRocmVhZDogQ29udmVyc2F0aW9uO1xuXG4gIC8vICNyZWdpb24gdGhyZWFkIGludGFrZSBhbmQgc2V0XG4gIGxldCBmZXRjaGluZ1RocmVhZFByb21pc2U6IFByb21pc2U8Q29udmVyc2F0aW9uPjtcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0VGhyZWFkKCkge1xuICAgIGlmIChpZCAmJiBfdGhpcy50aHJlYWRfaWQpIHtcbiAgICAgIGZldGNoaW5nVGhyZWFkUHJvbWlzZSA9IDxQcm9taXNlPENvbnZlcnNhdGlvbj4+ZmV0Y2hUaHJlYWQoe1xuICAgICAgICBjb21wb25lbnRfaWQ6IGlkLFxuICAgICAgICB0aHJlYWRfaWQ6IF90aGlzLnRocmVhZF9pZCxcbiAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgfSkuY2F0Y2goc2lsZW5jZSk7XG4gICAgICBjb25zdCB0aHJlYWQgPSBhd2FpdCBmZXRjaGluZ1RocmVhZFByb21pc2U7XG4gICAgICBmZXRjaGluZ1RocmVhZFByb21pc2UgPSA8YW55Pm51bGw7XG5cbiAgICAgIC8vIGdldCBib2R5IGZvciBsYXN0IG1lc3NhZ2UgaW4gb3BlbiB0aHJlYWRcbiAgICAgIGlmICh0aHJlYWQ/Lm1lc3NhZ2VzPy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGxhc3RNc2dJbmRleCA9IHRocmVhZC5tZXNzYWdlcy5sZW5ndGggLSAxO1xuICAgICAgICB0aHJlYWQubWVzc2FnZXNbbGFzdE1zZ0luZGV4XSA9IGF3YWl0IGZldGNoSW5kaXZpZHVhbE1lc3NhZ2UoXG4gICAgICAgICAgdGhyZWFkLm1lc3NhZ2VzW2xhc3RNc2dJbmRleF0uaWQsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAodGhyZWFkKSB7XG4gICAgICAgIHRocmVhZC5leHBhbmRlZCA9XG4gICAgICAgICAgYWN0aXZlVGhyZWFkPy5leHBhbmRlZCA/PyBfdGhpcy5zaG93X2V4cGFuZGVkX2VtYWlsX3ZpZXdfb25sb2FkO1xuICAgICAgICBhY3RpdmVUaHJlYWQgPSB0aHJlYWQ7XG4gICAgICAgIGRpc3BhdGNoRXZlbnQoXCJ0aHJlYWRMb2FkZWRcIiwgdGhyZWFkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAkOiB7XG4gICAgaWYgKF90aGlzLnRocmVhZCAmJiBfdGhpcy50aHJlYWQuaWQpIHtcbiAgICAgIC8vIElzIGl0IGluIHRoZSBzdG9yZSBhbHJlYWR5PyAodmlhIDxueWxhcy1tYWlsYm94PiwgZm9yIGV4YW1wbGUpXG4gICAgICBjb25zdCBsb2NhbFRocmVhZCA9ICgkRW1haWxTdG9yZVtxdWVyeUtleV0/LmZpbmQoXG4gICAgICAgIChzdG9yZWRUaHJlYWQ6IFRocmVhZCkgPT5cbiAgICAgICAgICBzdG9yZWRUaHJlYWQgJiYgc3RvcmVkVGhyZWFkLmlkID09PSB0aHJlYWQ/LmlkLFxuICAgICAgKSA/PyBfdGhpcy50aHJlYWQpIGFzIENvbnZlcnNhdGlvbjtcblxuICAgICAgLy8gVGhpcyBpcyBmb3IgRW1haWwgY29tcG9uZW50IGRlbW8gcHVycG9zZSwgd2hlcmUgd2Ugd2FudCB0byBzaG93IGV4cGFuZGVkIHRocmVhZHMgYnkgZGVmYXVsdCBvbiBsb2FkLlxuICAgICAgaWYgKF90aGlzLnNob3dfZXhwYW5kZWRfZW1haWxfdmlld19vbmxvYWQpIHtcbiAgICAgICAgbG9jYWxUaHJlYWQuZXhwYW5kZWQgPSBfdGhpcy5zaG93X2V4cGFuZGVkX2VtYWlsX3ZpZXdfb25sb2FkO1xuXG4gICAgICAgIC8vIGdldCBib2R5IGZvciBsYXN0IG1lc3NhZ2UgaW4gb3BlbiB0aHJlYWRcbiAgICAgICAgY29uc3QgbGFzdE1zZyA9IGxvY2FsVGhyZWFkLm1lc3NhZ2VzW2xvY2FsVGhyZWFkLm1lc3NhZ2VzLmxlbmd0aCAtIDFdO1xuICAgICAgICBsYXN0TXNnLmJvZHkgPSBsYXN0TXNnLmJvZHkgPz8gbGFzdE1zZy5zbmlwcGV0O1xuICAgICAgfVxuICAgICAgYWN0aXZlVGhyZWFkID0gbG9jYWxUaHJlYWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gI2VuZHJlZ2lvbiB0aHJlYWQgaW50YWtlIGFuZCBzZXRcbiAgbGV0IGVtYWlsTWFudWFsbHlQYXNzZWQ6IGJvb2xlYW47XG4gICQ6IGVtYWlsTWFudWFsbHlQYXNzZWQgPSAhIV90aGlzLnRocmVhZDtcblxuICAvLyNyZWdpb24gQ2xlYW4gQ29udmVyc2F0aW9uXG4gIC8vIElmIGEgdXNlciBzZXRzIG1lc3NhZ2VfYm9keV90eXBlIHRvIFwiY2xlYW5cIiwgZXhwYW5kIHRoZWlyIG1lc3NhZ2UgdG8gY2xlYW4gY29udmVyc2F0aW9uLlxuICAvLyBUaGlzIHJlcXVpcmVzIHRoZW0gdG8gaGF2ZSBhY2Nlc3MgdG8gdGhlIE55bGFzIE5ldXJhbCBBUEkuXG5cbiAgY29uc3QgQ09OVkVSU0FUSU9OX0VORFBPSU5UX01BWF9NRVNTQUdFUyA9IDIwO1xuXG4gIGZ1bmN0aW9uIGNsZWFuQ29udmVyc2F0aW9uKCkge1xuICAgIGlmIChhY3RpdmVUaHJlYWQpIHtcbiAgICAgIGZldGNoQ2xlYW5Db252ZXJzYXRpb25zKHtcbiAgICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgICBjb21wb25lbnRfaWQ6IGlkLFxuICAgICAgICBtZXNzYWdlX2lkOiBhY3RpdmVUaHJlYWQubWVzc2FnZXNcbiAgICAgICAgICAuc2xpY2UoLUNPTlZFUlNBVElPTl9FTkRQT0lOVF9NQVhfTUVTU0FHRVMpXG4gICAgICAgICAgLm1hcCgobWVzc2FnZSkgPT4gbWVzc2FnZS5pZCksXG4gICAgICB9KS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgIHJlc3VsdHMuZm9yRWFjaCgobXNnOiBNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgbGV0IGV4aXN0aW5nTWVzc2FnZSA9IGFjdGl2ZVRocmVhZC5tZXNzYWdlcy5maW5kKFxuICAgICAgICAgICAgKG1lc3NhZ2UpID0+IG1lc3NhZ2UuaWQgPT09IG1zZy5pZCxcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChleGlzdGluZ01lc3NhZ2UpIHtcbiAgICAgICAgICAgIGV4aXN0aW5nTWVzc2FnZS5jb252ZXJzYXRpb24gPSBtc2cuY29udmVyc2F0aW9uO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGFjdGl2ZVRocmVhZC5tZXNzYWdlcyA9IGFjdGl2ZVRocmVhZC5tZXNzYWdlcztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoX3RoaXMubWVzc2FnZSkge1xuICAgICAgZmV0Y2hDbGVhbkNvbnZlcnNhdGlvbnMoe1xuICAgICAgICBjb21wb25lbnRfaWQ6IGlkLFxuICAgICAgICBtZXNzYWdlX2lkOiBbX3RoaXMubWVzc2FnZS5pZF0sXG4gICAgICB9KS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgIHJlc3VsdHMuZm9yRWFjaCgobXNnOiBNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgaWYgKF90aGlzLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIF90aGlzLm1lc3NhZ2UuY29udmVyc2F0aW9uID0gbXNnLmNvbnZlcnNhdGlvbjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBhY3RpdmVUaHJlYWQubWVzc2FnZXMgPSBhY3RpdmVUaHJlYWQubWVzc2FnZXM7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAkOiBpZiAoX3RoaXMuY2xlYW5fY29udmVyc2F0aW9uICYmIChfdGhpcy50aHJlYWRfaWQgfHwgX3RoaXMubWVzc2FnZV9pZCkpIHtcbiAgICBjbGVhbkNvbnZlcnNhdGlvbigpO1xuICB9XG4gIC8vI2VuZHJlZ2lvbiBDbGVhbiBDb252ZXJzYXRpb25cblxuICAvLyAjcmVnaW9uIGdldCBjb250YWN0IGZvciBDb250YWN0SW1hZ2VcbiAgbGV0IGNvbnRhY3RfcXVlcnk6IENvbnRhY3RTZWFyY2hRdWVyeTtcbiAgJDogY29udGFjdF9xdWVyeSA9IHtcbiAgICBjb21wb25lbnRfaWQ6IGlkLFxuICAgIGFjY2Vzc190b2tlbixcbiAgICBxdWVyeTogXCJcIixcbiAgfTtcblxuICAvKlxuICAgIEZldGNoZXMgY29udGFjdCBmb3IgQ29udGFjdEltYWdlIGNvbXBvbmVudFxuICAqL1xuICBhc3luYyBmdW5jdGlvbiBnZXRDb250YWN0KGFjY291bnQ6IGFueSkge1xuICAgIGNvbnRhY3RfcXVlcnlbXCJxdWVyeVwiXSA9IGA/ZW1haWw9JHthY2NvdW50LmVtYWlsfWA7XG4gICAgaWYgKGlkKSB7XG4gICAgICBsZXQgY29udGFjdCA9ICRDb250YWN0U3RvcmVbSlNPTi5zdHJpbmdpZnkoY29udGFjdF9xdWVyeSldO1xuICAgICAgaWYgKCFjb250YWN0KSB7XG4gICAgICAgIGNvbnRhY3QgPSBhd2FpdCBDb250YWN0U3RvcmUuYWRkQ29udGFjdChjb250YWN0X3F1ZXJ5KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250YWN0WzBdID8/IGFjY291bnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhY2NvdW50O1xuICAgIH1cbiAgfVxuICAvLyAjZW5kcmVnaW9uIGdldCBjb250YWN0IGZvciBDb250YWN0SW1hZ2VcblxuICBhc3luYyBmdW5jdGlvbiBzYXZlQWN0aXZlVGhyZWFkKCkge1xuICAgIC8vIGlmIHRocmVhZCBhbmQgaWYgY29tcG9uZW50X2lkIChzZWN1cml0eSlcbiAgICBpZiAoYWN0aXZlVGhyZWFkICYmIHF1ZXJ5LmNvbXBvbmVudF9pZCAmJiBfdGhpcy50aHJlYWRfaWQpIHtcbiAgICAgIGF3YWl0IHVwZGF0ZVRocmVhZChxdWVyeSwgYWN0aXZlVGhyZWFkKS5jYXRjaChzaWxlbmNlKTtcbiAgICB9XG4gIH1cblxuICBsZXQgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVUaHJlYWQoZXZlbnQ6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlVHlwZSA9IGdldE1lc3NhZ2VUeXBlKGFjdGl2ZVRocmVhZCk7XG5cbiAgICBpZiAoYWN0aXZlVGhyZWFkW21lc3NhZ2VUeXBlXS5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsb2FkaW5nID0gdHJ1ZTtcbiAgICBpZiAoX3RoaXMuY2xpY2tfYWN0aW9uID09PSBcImRlZmF1bHRcIiB8fCBfdGhpcy5jbGlja19hY3Rpb24gPT09IFwibWFpbGJveFwiKSB7XG4gICAgICAvLyBkZWZhdWx0IGNsaWNrIGFjdGlvblxuICAgICAgaWYgKGFjdGl2ZVRocmVhZCAmJiBfdGhpcy5jbGlja19hY3Rpb24gPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAgIC8vIFNldHRpbmcgcmVhZC91bnJlYWQgc3RhdHVzXG4gICAgICAgIGlmIChhY3RpdmVUaHJlYWQudW5yZWFkKSB7XG4gICAgICAgICAgYWN0aXZlVGhyZWFkLnVucmVhZCA9ICFhY3RpdmVUaHJlYWQudW5yZWFkO1xuICAgICAgICAgIGF3YWl0IHNhdmVBY3RpdmVUaHJlYWQoKTtcbiAgICAgICAgfVxuICAgICAgICBhY3RpdmVUaHJlYWQuZXhwYW5kZWQgPSAhYWN0aXZlVGhyZWFkLmV4cGFuZGVkO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWVtYWlsTWFudWFsbHlQYXNzZWQgJiYgbWVzc2FnZVR5cGUgIT09IE1lc3NhZ2VUeXBlLkRSQUZUUykge1xuICAgICAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSBhY3RpdmVUaHJlYWQ7XG4gICAgICAgIGNvbnN0IGxhc3RNc2dJbmRleCA9IG1lc3NhZ2VzLmxlbmd0aCAtIDE7XG4gICAgICAgIG1lc3NhZ2VzW2xhc3RNc2dJbmRleF0uZXhwYW5kZWQgPSAhbWVzc2FnZXNbbGFzdE1zZ0luZGV4XS5leHBhbmRlZDtcblxuICAgICAgICAvLyBmZXRjaCBsYXN0IG1lc3NhZ2VcbiAgICAgICAgaWYgKCFtZXNzYWdlc1tsYXN0TXNnSW5kZXhdLmJvZHkpIHtcbiAgICAgICAgICBtZXNzYWdlc1tsYXN0TXNnSW5kZXhdID0gYXdhaXQgZmV0Y2hJbmRpdmlkdWFsTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VzW2xhc3RNc2dJbmRleF0uaWQsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobWVzc2FnZVR5cGUgIT09IE1lc3NhZ2VUeXBlLkRSQUZUUyAmJiAhYWN0aXZlVGhyZWFkLmV4cGFuZGVkKSB7XG4gICAgICBhY3RpdmVUaHJlYWQuZXhwYW5kZWQgPSAhYWN0aXZlVGhyZWFkLmV4cGFuZGVkO1xuICAgIH1cbiAgICBsb2FkaW5nID0gZmFsc2U7XG5cbiAgICBkaXNwYXRjaEV2ZW50KFwidGhyZWFkQ2xpY2tlZFwiLCB7XG4gICAgICBldmVudCxcbiAgICAgIHRocmVhZDogYWN0aXZlVGhyZWFkLFxuICAgICAgbWVzc2FnZVR5cGUsXG4gICAgfSk7XG4gICAgY3VycmVudFRvb2x0aXBJZCA9IFwiXCI7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiB0b2dnbGVVbnJlYWRTdGF0dXMoZXZlbnQ6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKGFjdGl2ZVRocmVhZCkge1xuICAgICAgYWN0aXZlVGhyZWFkID0geyAuLi5hY3RpdmVUaHJlYWQsIHVucmVhZDogIWFjdGl2ZVRocmVhZC51bnJlYWQgfTtcbiAgICAgIGF3YWl0IHNhdmVBY3RpdmVUaHJlYWQoKTtcbiAgICAgIGRpc3BhdGNoRXZlbnQoXCJ0b2dnbGVUaHJlYWRVbnJlYWRTdGF0dXNcIiwge1xuICAgICAgICBldmVudCxcbiAgICAgICAgdGhyZWFkOiBhY3RpdmVUaHJlYWQsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBkZWxldGVFbWFpbChldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmIChfdGhpcy5jbGlja19hY3Rpb24gIT09IFwibWFpbGJveFwiKSB7XG4gICAgICBpZiAodHJhc2hMYWJlbElEKSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nTGFiZWxJZHMgPSBhY3RpdmVUaHJlYWQubGFiZWxzPy5tYXAoKGkpID0+IGkuaWQpIHx8IFtdO1xuICAgICAgICBhY3RpdmVUaHJlYWQubGFiZWxfaWRzID0gWy4uLmV4aXN0aW5nTGFiZWxJZHMsIHRyYXNoTGFiZWxJRF07XG4gICAgICAgIGF3YWl0IHNhdmVBY3RpdmVUaHJlYWQoKTtcbiAgICAgIH0gZWxzZSBpZiAodHJhc2hGb2xkZXJJRCkge1xuICAgICAgICBhY3RpdmVUaHJlYWQuZm9sZGVyX2lkID0gdHJhc2hGb2xkZXJJRDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE91ciB0aHJlYWRzIEFQSSBkb2VzIG5vdCBhbGxvdyBtb3ZpbmcgYSB0aHJlYWQgc2VudFxuICAgICAgICAgKiBieSBzZWxmIHRvIHRyYXNoIGZvciBub24tZ21haWwgYWNjb3VudHMuIEhlbmNlLCBtb3ZpbmdcbiAgICAgICAgICogaW5kaXZpZHVhbCBtZXNzYWdlcyB0byB0cmFzaCBmb2xkZXIgYXMgYSB3b3JrYXJvdW5kXG4gICAgICAgICAqKi9cbiAgICAgICAgaWYgKHF1ZXJ5LmNvbXBvbmVudF9pZCAmJiBfdGhpcy50aHJlYWRfaWQpIHtcbiAgICAgICAgICBhY3RpdmVUaHJlYWQubWVzc2FnZXMuZm9yRWFjaChhc3luYyAobWVzc2FnZSwgaSkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgdXBkYXRlTWVzc2FnZShcbiAgICAgICAgICAgICAgcXVlcnkuY29tcG9uZW50X2lkLFxuICAgICAgICAgICAgICB7IC4uLm1lc3NhZ2UsIGZvbGRlcl9pZDogdHJhc2hGb2xkZXJJRCB9LFxuICAgICAgICAgICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQoXCJ0aHJlYWREZWxldGVkXCIsIHtcbiAgICAgIGV2ZW50LFxuICAgICAgdGhyZWFkOiBhY3RpdmVUaHJlYWQsXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVUaHJlYWRDbGljayhldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmIChcbiAgICAgIChfdGhpcy5tZXNzYWdlICYmICghX3RoaXMudGhyZWFkX2lkIHx8ICFfdGhpcy50aHJlYWQpKSB8fFxuICAgICAgKF90aGlzLmNsaWNrX2FjdGlvbiA9PT0gXCJtYWlsYm94XCIgJiYgYWN0aXZlVGhyZWFkLmV4cGFuZGVkKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGhhbmRsZVRocmVhZChldmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiByZXR1cm5Ub01haWxib3goZXZlbnQ6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50KSB7XG4gICAgZGlzcGF0Y2hFdmVudChcInJldHVyblRvTWFpbGJveFwiLCB7XG4gICAgICBldmVudCxcbiAgICAgIHRocmVhZDogYWN0aXZlVGhyZWFkLFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlVGhyZWFkS2V5cHJlc3MoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoXG4gICAgICAoX3RoaXMubWVzc2FnZSAmJiAoIV90aGlzLnRocmVhZF9pZCB8fCAhX3RoaXMudGhyZWFkKSkgfHxcbiAgICAgIChfdGhpcy5jbGlja19hY3Rpb24gPT09IFwibWFpbGJveFwiICYmIGFjdGl2ZVRocmVhZC5leHBhbmRlZClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZXZlbnQuY29kZSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBoYW5kbGVUaHJlYWQoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVRocmVhZFN0YXJDbGljayhldmVudDogTW91c2VFdmVudCkge1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIC8vI3JlZ2lvbiBzdGFycmVkL3Vuc3RhcnJlZFxuICAgIGlmIChhY3RpdmVUaHJlYWQpIHtcbiAgICAgIGFjdGl2ZVRocmVhZCA9IHsgLi4uYWN0aXZlVGhyZWFkLCBzdGFycmVkOiAhYWN0aXZlVGhyZWFkLnN0YXJyZWQgfTtcbiAgICAgIGF3YWl0IHNhdmVBY3RpdmVUaHJlYWQoKTtcbiAgICB9XG4gICAgLy8jZW5kcmVnaW9uIHN0YXJyZWQvdW5zdGFycmVkXG5cbiAgICBkaXNwYXRjaEV2ZW50KFwidGhyZWFkU3RhcnJlZFwiLCB7XG4gICAgICBldmVudCxcbiAgICAgIHRocmVhZDogYWN0aXZlVGhyZWFkLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlUmVwbHlDbGljayhcbiAgICBldmVudDogTW91c2VFdmVudCxcbiAgICBtZXNzYWdlOiBNZXNzYWdlLFxuICAgIHR5cGU6IFwicmVwbHlcIiB8IFwicmVwbHlfYWxsXCIsXG4gICkge1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXG4gICAgY29uc3QgbWU6IFBhcnRpY2lwYW50ID0ge1xuICAgICAgbmFtZTogX3RoaXMueW91Lm5hbWUsXG4gICAgICBlbWFpbDogX3RoaXMueW91LmVtYWlsX2FkZHJlc3MsXG4gICAgfTtcbiAgICBjb25zdCBmcm9tID0gW21lXTtcbiAgICBjb25zdCB7IHRvLCBjYyB9ID0gYnVpbGRQYXJ0aWNpcGFudHMoe1xuICAgICAgbXlFbWFpbDogbWUuZW1haWwsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgdHlwZSxcbiAgICB9KTtcbiAgICBjb25zdCBzdWJqZWN0ID0gbWVzc2FnZS5zdWJqZWN0Py50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoXCJyZTpcIilcbiAgICAgID8gbWVzc2FnZS5zdWJqZWN0XG4gICAgICA6IGBSZTogJHttZXNzYWdlLnN1YmplY3R9YDtcbiAgICBjb25zdCB2YWx1ZSA9IHtcbiAgICAgIHJlcGx5X3RvX21lc3NhZ2VfaWQ6IG1lc3NhZ2UuaWQsXG4gICAgICBmcm9tLFxuICAgICAgdG8sXG4gICAgICByZXBseV90bzogZnJvbSxcbiAgICAgIGNjLFxuICAgICAgYmNjOiBtZXNzYWdlLmJjYyxcbiAgICAgIGJvZHk6IG1lc3NhZ2UuYm9keSxcbiAgICAgIHN1YmplY3Q6IHN1YmplY3QsXG4gICAgfTtcblxuICAgIGxldCBldmVudF9pZGVudGlmaWVyO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBcInJlcGx5XCI6XG4gICAgICAgIGV2ZW50X2lkZW50aWZpZXIgPSBcInJlcGx5Q2xpY2tlZFwiO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcInJlcGx5X2FsbFwiOlxuICAgICAgICBldmVudF9pZGVudGlmaWVyID0gXCJyZXBseUFsbENsaWNrZWRcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy9DaGVjayBleGlzdGluZyBkcmFmdFxuICAgIGNvbnN0IGV4aXN0aW5nRHJhZnQgPSBhY3RpdmVUaHJlYWQ/LmRyYWZ0cz8uZmluZChcbiAgICAgIChkcmFmdCkgPT4gZHJhZnQucmVwbHlfdG9fbWVzc2FnZV9pZCA9PT0gbWVzc2FnZS5pZCxcbiAgICApO1xuICAgIGlmIChleGlzdGluZ0RyYWZ0KSB7XG4gICAgICBpZiAoIV90aGlzLnRocmVhZCAmJiBleGlzdGluZ0RyYWZ0LmlkKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoSW5kaXZpZHVhbE1lc3NhZ2UoZXhpc3RpbmdEcmFmdC5pZCk7XG4gICAgICAgIGV4aXN0aW5nRHJhZnQuYm9keSA9IHJlcy5ib2R5O1xuICAgICAgICB2YWx1ZS5ib2R5ID0gcmVzLmJvZHk7XG4gICAgICB9XG4gICAgICBkaXNwYXRjaEV2ZW50KGV2ZW50X2lkZW50aWZpZXIsIHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIG1lc3NhZ2U6IHsgLi4uZXhpc3RpbmdEcmFmdCB9LFxuICAgICAgICB0aHJlYWQ6IGFjdGl2ZVRocmVhZCxcbiAgICAgICAgdmFsdWUsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy9DcmVhdGluZyBuZXcgcmVwbHkgbWVzc2FnZVxuICAgICAgZGlzcGF0Y2hFdmVudChldmVudF9pZGVudGlmaWVyLCB7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICBtZXNzYWdlOiB7IC4uLm1lc3NhZ2UgfSxcbiAgICAgICAgdGhyZWFkOiBhY3RpdmVUaHJlYWQsXG4gICAgICAgIHZhbHVlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlRm9yd2FyZENsaWNrKGV2ZW50OiBNb3VzZUV2ZW50LCBtZXNzYWdlOiBNZXNzYWdlKSB7XG4gICAgLy9DaGVjayBleGlzdGluZyBkcmFmdFxuICAgIGNvbnN0IGV4aXN0aW5nRHJhZnQgPSBhY3RpdmVUaHJlYWQ/LmRyYWZ0cz8uZmluZChcbiAgICAgIChkcmFmdCkgPT4gZHJhZnQucmVwbHlfdG9fbWVzc2FnZV9pZCA9PT0gbWVzc2FnZS5pZCxcbiAgICApO1xuICAgIGNvbnN0IHN1YmplY3QgPSBgRndkOiAke21lc3NhZ2Uuc3ViamVjdH1gO1xuICAgIGNvbnN0IHZhbHVlID0ge1xuICAgICAgcmVwbHlfdG9fbWVzc2FnZV9pZDogbWVzc2FnZS5pZCxcbiAgICAgIHN1YmplY3Q6IHN1YmplY3QsXG4gICAgICBib2R5OiBtZXNzYWdlLmJvZHksXG4gICAgfTtcbiAgICBpZiAoZXhpc3RpbmdEcmFmdCkge1xuICAgICAgaWYgKCFfdGhpcy50aHJlYWQgJiYgZXhpc3RpbmdEcmFmdC5pZCkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaEluZGl2aWR1YWxNZXNzYWdlKGV4aXN0aW5nRHJhZnQuaWQpO1xuICAgICAgICBleGlzdGluZ0RyYWZ0LmJvZHkgPSByZXMuYm9keTtcbiAgICAgICAgdmFsdWUuYm9keSA9IHJlcy5ib2R5O1xuICAgICAgfVxuICAgICAgZGlzcGF0Y2hFdmVudChcImZvcndhcmRDbGlja2VkXCIsIHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIG1lc3NhZ2U6IHsgLi4uZXhpc3RpbmdEcmFmdCB9LFxuICAgICAgICB0aHJlYWQ6IGFjdGl2ZVRocmVhZCxcbiAgICAgICAgdmFsdWUsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy9DcmVhdGUgbmV3IG1lc3NhZ2VcbiAgICAgIGRpc3BhdGNoRXZlbnQoXCJmb3J3YXJkQ2xpY2tlZFwiLCB7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICBtZXNzYWdlOiB7IC4uLm1lc3NhZ2UgfSxcbiAgICAgICAgdGhyZWFkOiBhY3RpdmVUaHJlYWQsXG4gICAgICAgIHZhbHVlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2FuUmVwbHlBbGwobWVzc2FnZTogTWVzc2FnZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBtZXNzYWdlPy50bz8ubGVuZ3RoICsgbWVzc2FnZT8uY2M/Lmxlbmd0aCA+IDEgJiZcbiAgICAgICFpbmNsdWRlc015RW1haWwoX3RoaXMueW91LmVtYWlsX2FkZHJlc3MsIG1lc3NhZ2UsIFwiZnJvbVwiKVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVFbWFpbENsaWNrKGV2ZW50OiBNb3VzZUV2ZW50LCBtc2dJbmRleDogbnVtYmVyKSB7XG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAobXNnSW5kZXggPT09IGFjdGl2ZVRocmVhZC5tZXNzYWdlcy5sZW5ndGggLSAxKSB7XG4gICAgICBkb05vdGhpbmcoZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY3RpdmVUaHJlYWQubWVzc2FnZXNbbXNnSW5kZXhdLmV4cGFuZGVkID1cbiAgICAgICAgIWFjdGl2ZVRocmVhZC5tZXNzYWdlc1ttc2dJbmRleF0uZXhwYW5kZWQ7XG4gICAgICBkaXNwYXRjaEV2ZW50KFwibWVzc2FnZUNsaWNrZWRcIiwge1xuICAgICAgICBldmVudCxcbiAgICAgICAgbWVzc2FnZTogYWN0aXZlVGhyZWFkLm1lc3NhZ2VzW21zZ0luZGV4XSxcbiAgICAgICAgdGhyZWFkOiBhY3RpdmVUaHJlYWQsXG4gICAgICB9KTtcbiAgICAgIC8vIERvbid0IGZldGNoIG1lc3NhZ2UgYm9keSB3aGVuIHRocmVhZCBpcyBiZWluZyBwYXNzZWQgbWFudWFsbHlcbiAgICAgIGlmICghX3RoaXMudGhyZWFkKSB7XG4gICAgICAgIGZldGNoSW5kaXZpZHVhbE1lc3NhZ2UoYWN0aXZlVGhyZWFkLm1lc3NhZ2VzW21zZ0luZGV4XS5pZCkudGhlbihcbiAgICAgICAgICAocmVzKSA9PiB7XG4gICAgICAgICAgICBhY3RpdmVUaHJlYWQubWVzc2FnZXNbbXNnSW5kZXhdLmJvZHkgPSByZXMuYm9keTtcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUVtYWlsS2V5cHJlc3MoZXZlbnQ6IEtleWJvYXJkRXZlbnQsIG1zZ0luZGV4OiBudW1iZXIpIHtcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoZXZlbnQuY29kZSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBpZiAobXNnSW5kZXggPT09IGFjdGl2ZVRocmVhZC5tZXNzYWdlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGRvTm90aGluZyhldmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY3RpdmVUaHJlYWQubWVzc2FnZXNbbXNnSW5kZXhdLmV4cGFuZGVkID1cbiAgICAgICAgICAhYWN0aXZlVGhyZWFkLm1lc3NhZ2VzW21zZ0luZGV4XS5leHBhbmRlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaEluZGl2aWR1YWxNZXNzYWdlKG1lc3NhZ2VJRDogc3RyaW5nKTogUHJvbWlzZTxNZXNzYWdlIHwgbnVsbD4ge1xuICAgIGlmIChpZCkge1xuICAgICAgcmV0dXJuIGZldGNoTWVzc2FnZShxdWVyeSwgbWVzc2FnZUlEKS50aGVuKGFzeW5jIChqc29uKSA9PiB7XG4gICAgICAgIGlmIChGaWxlc1N0b3JlLmhhc0lubGluZUZpbGVzKGpzb24pKSB7XG4gICAgICAgICAgY29uc3QgbWVzc2FnZVdpdGhJbmxpbmVGaWxlcyA9IGF3YWl0IGdldE1lc3NhZ2VXaXRoSW5saW5lRmlsZXMoanNvbik7XG4gICAgICAgICAgZGlzcGF0Y2hFdmVudChcIm1lc3NhZ2VMb2FkZWRcIiwgbWVzc2FnZVdpdGhJbmxpbmVGaWxlcyk7XG4gICAgICAgICAgcmV0dXJuIG1lc3NhZ2VXaXRoSW5saW5lRmlsZXM7XG4gICAgICAgIH1cbiAgICAgICAgZGlzcGF0Y2hFdmVudChcIm1lc3NhZ2VMb2FkZWRcIiwganNvbik7XG4gICAgICAgIHJldHVybiBqc29uO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiBudWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvTm90aGluZyhlOiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCkge1xuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICAvLyBGb3IgY2FzZXMgd2hlbiBzb21lb25lIHdhbnRzIHRvIHNob3cganVzdCBhIHNpbmdsZSBlbWFpbCBtZXNzYWdlLCByYXRoZXIgdGhhbiB0aGUgZnVsbCB0aHJlYWQuXG4gIGZ1bmN0aW9uIGZldGNoT25lTWVzc2FnZSgpIHtcbiAgICBmZXRjaEVtYWlsKHtcbiAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgIGNvbXBvbmVudF9pZDogaWQsXG4gICAgICBtZXNzYWdlX2lkOiBfdGhpcy5tZXNzYWdlX2lkLFxuICAgIH0pLnRoZW4oYXN5bmMgKGpzb24pID0+IHtcbiAgICAgIF90aGlzLm1lc3NhZ2UgPSBqc29uO1xuICAgICAgaWYgKEZpbGVzU3RvcmUuaGFzSW5saW5lRmlsZXMoX3RoaXMubWVzc2FnZSkpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IGdldE1lc3NhZ2VXaXRoSW5saW5lRmlsZXMoX3RoaXMubWVzc2FnZSk7XG4gICAgICAgIF90aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgfVxuICAgICAgZGlzcGF0Y2hFdmVudChcIm1lc3NhZ2VMb2FkZWRcIiwgX3RoaXMubWVzc2FnZSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVEcmFmdENsaWNrKGV2ZW50OiBNb3VzZUV2ZW50LCBkcmFmdDogTWVzc2FnZSkge1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGRpc3BhdGNoRHJhZnRDbGlja0V2ZW50KGV2ZW50LCBkcmFmdCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVEcmFmdEtleXByZXNzKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBkcmFmdDogTWVzc2FnZSkge1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGlmIChldmVudC5jb2RlID09PSBcIkVudGVyXCIpIHtcbiAgICAgIGRpc3BhdGNoRHJhZnRDbGlja0V2ZW50KGV2ZW50LCBkcmFmdCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZGlzcGF0Y2hEcmFmdENsaWNrRXZlbnQoZXZlbnQ6IFVJRXZlbnQsIGRyYWZ0OiBNZXNzYWdlKSB7XG4gICAgaWYgKGRyYWZ0KSB7XG4gICAgICBkcmFmdC5kcmFmdF9pZCA9IGRyYWZ0LmlkO1xuICAgICAgYWN0aXZlVGhyZWFkPy5kcmFmdHM/LmZvckVhY2goXG4gICAgICAgICh0aHJlYWREcmFmdCkgPT4gKHRocmVhZERyYWZ0LmFjdGl2ZSA9IHRocmVhZERyYWZ0LmlkID09PSBkcmFmdC5pZCksXG4gICAgICApO1xuXG4gICAgICAvLyBEb24ndCBmZXRjaCBtZXNzYWdlIGJvZHkgd2hlbiB0aHJlYWQgaXMgYmVpbmcgcGFzc2VkIG1hbnVhbGx5XG4gICAgICBpZiAoIV90aGlzLnRocmVhZCAmJiBkcmFmdC5pZCkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaEluZGl2aWR1YWxNZXNzYWdlKGRyYWZ0LmlkKTtcbiAgICAgICAgZHJhZnQuYm9keSA9IHJlcy5ib2R5O1xuICAgICAgfVxuXG4gICAgICBkaXNwYXRjaEV2ZW50KFwiZHJhZnRDbGlja2VkXCIsIHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIG1lc3NhZ2U6IGRyYWZ0LFxuICAgICAgICB0aHJlYWQ6IGFjdGl2ZVRocmVhZCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHdlZWtkYXlzID0gW1xuICAgIFwiU3VuZGF5XCIsXG4gICAgXCJNb25kYXlcIixcbiAgICBcIlR1ZXNkYXlcIixcbiAgICBcIldlZG5lc2RheVwiLFxuICAgIFwiVGh1cnNkYXlcIixcbiAgICBcIkZyaWRheVwiLFxuICAgIFwiU2F0dXJkYXlcIixcbiAgXTtcbiAgZnVuY3Rpb24gZm9ybWF0UHJldmlld0RhdGUoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLnNldEhvdXJzKDAsIDAsIDAsIDApKTtcbiAgICBjb25zdCB5ZXN0ZXJkYXkgPSBuZXcgRGF0ZShcbiAgICAgIHRvZGF5LmdldEZ1bGxZZWFyKCksXG4gICAgICB0b2RheS5nZXRNb250aCgpLFxuICAgICAgdG9kYXkuZ2V0RGF0ZSgpIC0gMSxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgKTtcbiAgICBjb25zdCBsYXN0V2VlayA9IG5ldyBEYXRlKFxuICAgICAgdG9kYXkuZ2V0RnVsbFllYXIoKSxcbiAgICAgIHRvZGF5LmdldE1vbnRoKCksXG4gICAgICB0b2RheS5nZXREYXRlKCkgLSA2LFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICApO1xuICAgIGNvbnN0IHRoaXNZZWFyID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XG5cbiAgICBpZiAoZGF0ZSA+PSB0b2RheSkge1xuICAgICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgICAgICBob3VyMTI6IHRydWUsXG4gICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChkYXRlID49IHllc3RlcmRheSkge1xuICAgICAgcmV0dXJuIFwiWWVzdGVyZGF5XCI7XG4gICAgfSBlbHNlIGlmIChkYXRlID49IGxhc3RXZWVrKSB7XG4gICAgICByZXR1cm4gd2Vla2RheXNbZGF0ZS5nZXREYXkoKV07XG4gICAgfSBlbHNlIGlmIChkYXRlID49IHRoaXNZZWFyKSB7XG4gICAgICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRFeHBhbmRlZERhdGUoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgICAgICB3ZWVrZGF5OiBcInNob3J0XCIsXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgIH0pICtcbiAgICAgIFwiLCBcIiArXG4gICAgICBkYXRlLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICAgICAgaG91cjEyOiB0cnVlLFxuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGxldCBjdXJyZW50VG9vbHRpcElkOiBzdHJpbmcgPSBcIlwiO1xuICBmdW5jdGlvbiBzZXRUb29sdGlwKGV2ZW50OiBhbnkpIHtcbiAgICBjdXJyZW50VG9vbHRpcElkID0gZXZlbnQuZGV0YWlsLnRvb2x0aXBJRDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFBhcnRpY2lwYW50cyh0aHJlYWQ6IFRocmVhZCk6IHN0cmluZ1tdIHtcbiAgICBsZXQgcGFydGljaXBhbnRzTGlzdDogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBtZXNzYWdlcyA9IHRocmVhZC5tZXNzYWdlcztcbiAgICBjb25zdCBkcmFmdHMgPSB0aHJlYWQuZHJhZnRzO1xuXG4gICAgZm9yIChsZXQgaSA9IG1lc3NhZ2VzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBpZiAocGFydGljaXBhbnRzTGlzdC5sZW5ndGggPT0gMikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1zZ0Zyb20gPSBtZXNzYWdlc1tpXS5mcm9tO1xuICAgICAgaWYgKG1zZ0Zyb20gJiYgbXNnRnJvbS5sZW5ndGggPiAwICYmIG1zZ0Zyb20pIHtcbiAgICAgICAgY29uc3QgcGFydGljaXBhbnROYW1lID1cbiAgICAgICAgICBtc2dGcm9tWzBdLmVtYWlsID09PSB1c2VyRW1haWxcbiAgICAgICAgICAgID8gXCJNZVwiXG4gICAgICAgICAgICA6IG1zZ0Zyb21bMF0ubmFtZSB8fCBtc2dGcm9tWzBdLmVtYWlsO1xuICAgICAgICBpZiAoIXBhcnRpY2lwYW50c0xpc3QuaW5jbHVkZXMocGFydGljaXBhbnROYW1lKSkge1xuICAgICAgICAgIHBhcnRpY2lwYW50c0xpc3QucHVzaChwYXJ0aWNpcGFudE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChkcmFmdHMubGVuZ3RoKSB7XG4gICAgICBwYXJ0aWNpcGFudHNMaXN0LnVuc2hpZnQoXCJEcmFmdFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnRpY2lwYW50c0xpc3Q7XG4gIH1cblxuICBsZXQgaXNEZWxldGVkOiBib29sZWFuID0gZmFsc2U7XG4gICQ6IGlzRGVsZXRlZCA9XG4gICAgIWFjdGl2ZVRocmVhZD8ubWVzc2FnZXM/Lmxlbmd0aCAmJiAhYWN0aXZlVGhyZWFkPy5kcmFmdHM/Lmxlbmd0aDtcblxuICBmdW5jdGlvbiBzaG93U2Vjb25kRnJvbVBhcnRpY2lwYW50KFxuICAgIG1lc3NhZ2VzOiBNZXNzYWdlW10sXG4gICAgcGFydGljaXBhbnRzOiBQYXJ0aWNpcGFudFtdLFxuICApIHtcbiAgICByZXR1cm4gKFxuICAgICAgbWVzc2FnZXMgJiZcbiAgICAgIHBhcnRpY2lwYW50cyAmJlxuICAgICAgbWVzc2FnZXMubGVuZ3RoID4gMSAmJlxuICAgICAgcGFydGljaXBhbnRzLmxlbmd0aCA+PSAyICYmXG4gICAgICBtZXNzYWdlc1swXT8uZnJvbS5sZW5ndGggJiZcbiAgICAgIHBhcnRpY2lwYW50c1swXS5lbWFpbCAhPT0gbWVzc2FnZXNbbWVzc2FnZXMubGVuZ3RoIC0gMV0/LmZyb21bMF0uZW1haWxcbiAgICApO1xuICB9XG5cbiAgbGV0IGF0dGFjaGVkRmlsZXM6IFJlY29yZDxzdHJpbmcsIEZpbGVbXT4gPSB7fTtcblxuICAkOiBhY3RpdmVUaHJlYWQgPyBpbml0aWFsaXplQXR0YWNoZWRGaWxlcygpIDogXCJcIjtcblxuICBmdW5jdGlvbiBpbml0aWFsaXplQXR0YWNoZWRGaWxlcygpIHtcbiAgICBjb25zdCBtZXNzYWdlVHlwZSA9IGdldE1lc3NhZ2VUeXBlKGFjdGl2ZVRocmVhZCk7XG4gICAgYXR0YWNoZWRGaWxlcyA9IGFjdGl2ZVRocmVhZFttZXNzYWdlVHlwZV0/LnJlZHVjZShcbiAgICAgIChmaWxlczogUmVjb3JkPHN0cmluZywgRmlsZVtdPiwgbWVzc2FnZSkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IFtmaWxlSW5kZXgsIGZpbGVdIG9mIG1lc3NhZ2UuZmlsZXMuZW50cmllcygpKSB7XG4gICAgICAgICAgaWYgKGlzRmlsZUFuQXR0YWNobWVudChmaWxlKSkge1xuICAgICAgICAgICAgaWYgKCFmaWxlc1ttZXNzYWdlLmlkXSkge1xuICAgICAgICAgICAgICBmaWxlc1ttZXNzYWdlLmlkXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmlsZXNbbWVzc2FnZS5pZF0gPSBbXG4gICAgICAgICAgICAgIC4uLmZpbGVzW21lc3NhZ2UuaWRdLFxuICAgICAgICAgICAgICBtZXNzYWdlLmZpbGVzW2ZpbGVJbmRleF0sXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlsZXM7XG4gICAgICB9LFxuICAgICAge30sXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldE1lc3NhZ2VXaXRoSW5saW5lRmlsZXMobWVzc2FnZTogTWVzc2FnZSk6IFByb21pc2U8TWVzc2FnZT4ge1xuICAgIGNvbnN0IGZldGNoZWRGaWxlcyA9IGF3YWl0IEZpbGVzU3RvcmUuZ2V0RmlsZXNGb3JNZXNzYWdlKG1lc3NhZ2UsIHtcbiAgICAgIGNvbXBvbmVudF9pZDogaWQsXG4gICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgfSk7XG4gICAgZm9yIChjb25zdCBmaWxlIG9mIE9iamVjdC52YWx1ZXMoZmV0Y2hlZEZpbGVzKSkge1xuICAgICAgaWYgKG1lc3NhZ2UuYm9keSkge1xuICAgICAgICBtZXNzYWdlLmJvZHkgPSBtZXNzYWdlLmJvZHk/LnJlcGxhY2VBbGwoXG4gICAgICAgICAgYHNyYz1cImNpZDoke2ZpbGUuY29udGVudF9pZH1cImAsXG4gICAgICAgICAgYHNyYz1cImRhdGE6JHtmaWxlLmNvbnRlbnRfdHlwZX07YmFzZTY0LCR7ZmlsZS5kYXRhfVwiYCxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBkb3dubG9hZFNlbGVjdGVkRmlsZShldmVudDogTW91c2VFdmVudCwgZmlsZTogRmlsZSkge1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGlmIChpZCAmJiAoKGFjdGl2ZVRocmVhZCAmJiBfdGhpcy50aHJlYWRfaWQpIHx8IF90aGlzLm1lc3NhZ2VfaWQpKSB7XG4gICAgICBjb25zdCBkb3dubG9hZGVkRmlsZURhdGEgPSBhd2FpdCBkb3dubG9hZEZpbGUoe1xuICAgICAgICBmaWxlX2lkOiBmaWxlLmlkLFxuICAgICAgICBjb21wb25lbnRfaWQ6IGlkLFxuICAgICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICB9KTtcbiAgICAgIGRvd25sb2FkQXR0YWNoZWRGaWxlKGRvd25sb2FkZWRGaWxlRGF0YSwgZmlsZSk7XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQoXCJkb3dubG9hZENsaWNrZWRcIiwge1xuICAgICAgZXZlbnQsXG4gICAgICB0aHJlYWQ6IGFjdGl2ZVRocmVhZCxcbiAgICAgIGZpbGUsXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVEb3dubG9hZEZyb21NZXNzYWdlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgY29uc3QgZmlsZSA9ICg8YW55PmV2ZW50LmRldGFpbCkuZmlsZTtcbiAgICBkb3dubG9hZFNlbGVjdGVkRmlsZShldmVudCwgZmlsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc1RocmVhZEFEcmFmdEVtYWlsKGN1cnJlbnRUaHJlYWQ6IFRocmVhZCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjdXJyZW50VGhyZWFkICYmIGN1cnJlbnRUaHJlYWQuZHJhZnRzPy5sZW5ndGggPiAwO1xuICB9XG5cbiAgbGV0IGxhdGVzdE1lc3NhZ2VOb2RlOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuICAkOiBsYXRlc3RNZXNzYWdlTm9kZSA9IG1lc3NhZ2VSZWZzW2FjdGl2ZVRocmVhZD8ubWVzc2FnZXM/Lmxlbmd0aCAtIDFdO1xuICBsZXQgc2Nyb2xsZWRUb0xhdGVzdCA9IGZhbHNlO1xuXG4gICQ6IGlmIChsYXRlc3RNZXNzYWdlTm9kZSAmJiAhc2Nyb2xsZWRUb0xhdGVzdCkge1xuICAgIC8vIHNjcm9sbCB0byBsYXRlc3QgbWVzc2FnZSBpZiBpdCdzIG91dHNpZGUgb2YgdGhlIHZpZXdwb3J0XG4gICAgaWYgKGxhdGVzdE1lc3NhZ2VOb2RlLm9mZnNldFRvcCA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgbGF0ZXN0TWVzc2FnZU5vZGUuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiwgYmxvY2s6IFwiZW5kXCIgfSk7XG4gICAgICBzY3JvbGxlZFRvTGF0ZXN0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRNZXNzYWdlVHlwZShcbiAgICBjdXJyZW50VGhyZWFkOiBUaHJlYWQsXG4gICk6IGtleW9mIFBpY2s8Q29udmVyc2F0aW9uLCBcIm1lc3NhZ2VzXCIgfCBcImRyYWZ0c1wiPiB7XG4gICAgcmV0dXJuIGN1cnJlbnRUaHJlYWRbTWVzc2FnZVR5cGUuRFJBRlRTXS5sZW5ndGggJiZcbiAgICAgICFjdXJyZW50VGhyZWFkW01lc3NhZ2VUeXBlLk1FU1NBR0VTXS5sZW5ndGhcbiAgICAgID8gTWVzc2FnZVR5cGUuRFJBRlRTXG4gICAgICA6IE1lc3NhZ2VUeXBlLk1FU1NBR0VTO1xuICB9XG5cbiAgaW50ZXJmYWNlIERpc3BsYXllZFBhcnRpY2lwYW50IGV4dGVuZHMgUGFydGljaXBhbnQge1xuICAgIF90eXBlOiBcInRvXCIgfCBcImNjXCIgfCBcImJjY1wiO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFnZ3JlZ2F0ZWQgbGlzdCBvZiBwYXJ0aWNpcGFudHMgaW5jbHVkaW5nIHRoZWlyIF90eXBlLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0QWxsUmVjaXBpZW50cyh7XG4gICAgdG8sXG4gICAgY2MsXG4gICAgYmNjLFxuICB9OiBSZWNvcmQ8XCJ0b1wiIHwgXCJjY1wiIHwgXCJiY2NcIiwgUGFydGljaXBhbnRbXT4pOiBQcm9taXNlPFxuICAgIERpc3BsYXllZFBhcnRpY2lwYW50W11cbiAgPiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXG4gICAgICAuLi5hZGRLZXlWYWx1ZTxEaXNwbGF5ZWRQYXJ0aWNpcGFudD4odG8sIHsgX3R5cGU6IFwidG9cIiB9KSxcbiAgICAgIC4uLmFkZEtleVZhbHVlPERpc3BsYXllZFBhcnRpY2lwYW50PihjYywgeyBfdHlwZTogXCJjY1wiIH0pLFxuICAgICAgLi4uYWRkS2V5VmFsdWU8RGlzcGxheWVkUGFydGljaXBhbnQ+KGJjYywgeyBfdHlwZTogXCJiY2NcIiB9KSxcbiAgICBdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIG9mIHBhcnRpY2lwYW50cyBuYW1lcyBhbmQgZW1haWxzIGFjY29yZGluZyB0byB0aGVpciBfdHlwZSAodG8sIGNjLCBiY2MpXG4gICAqIGVnLiB0bzogcmVjaXBpZW50QG91dGxvb2suY29tLCBjYzogcmVjaXBpZW50QHlhaG9vLmNvbSwgYmNjOiByZWNpcGllbnRAbnlsYXMuY29tXG4gICAqL1xuICBmdW5jdGlvbiBhZ2dyZWdhdGVSZWNpcGllbnRzU3RyaW5nKFxuICAgIGFsbFJlY2lwaWVudHM6IERpc3BsYXllZFBhcnRpY2lwYW50W10sXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGFsbFJlY2lwaWVudHMucmVkdWNlKChhZ2dyZWdhdGVkUmVjaXBpZW50cywgcmVjaXBpZW50LCBpKSA9PiB7XG4gICAgICBjb25zdCBlbWFpbFRleHQgPVxuICAgICAgICByZWNpcGllbnQubmFtZSAmJiByZWNpcGllbnQubmFtZSAhPT0gcmVjaXBpZW50LmVtYWlsXG4gICAgICAgICAgPyBgJHtyZWNpcGllbnQubmFtZX0gPCR7cmVjaXBpZW50LmVtYWlsfT5gXG4gICAgICAgICAgOiByZWNpcGllbnQuZW1haWw7XG5cbiAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgIGFnZ3JlZ2F0ZWRSZWNpcGllbnRzICs9IGB0bzogJHtlbWFpbFRleHR9LFxcbmA7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICByZWNpcGllbnQuX3R5cGUgPT09IFwiY2NcIiAmJlxuICAgICAgICAhYWdncmVnYXRlZFJlY2lwaWVudHMuaW5jbHVkZXMoXCJjYzpcIilcbiAgICAgICkge1xuICAgICAgICBhZ2dyZWdhdGVkUmVjaXBpZW50cyArPSBgY2M6ICR7ZW1haWxUZXh0fSxcXG5gO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgcmVjaXBpZW50Ll90eXBlID09PSBcImJjY1wiICYmXG4gICAgICAgICFhZ2dyZWdhdGVkUmVjaXBpZW50cy5pbmNsdWRlcyhcImJjYzpcIilcbiAgICAgICkge1xuICAgICAgICBhZ2dyZWdhdGVkUmVjaXBpZW50cyArPSBgYmNjOiAke2VtYWlsVGV4dH0sXFxuYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFnZ3JlZ2F0ZWRSZWNpcGllbnRzICs9IGAke2VtYWlsVGV4dH0sXFxuYDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhZ2dyZWdhdGVkUmVjaXBpZW50cztcbiAgICB9LCBcIlwiKTtcbiAgfVxuXG4gIGxldCB0aGVtZVVybDogc3RyaW5nO1xuICAkOiBpZiAoISFfdGhpcy50aGVtZSkge1xuICAgIGlmIChfdGhpcy50aGVtZS5zdGFydHNXaXRoKFwiLlwiKSB8fCBfdGhpcy50aGVtZS5zdGFydHNXaXRoKFwiaHR0cFwiKSkge1xuICAgICAgLy8gSWYgY3VzdG9tIHVybCBzdXBwbGllZFxuICAgICAgdGhlbWVVcmwgPSBfdGhpcy50aGVtZTtcbiAgICB9IGVsc2UgaWYgKF90aGlzLnRoZW1lKSB7XG4gICAgICB0aGVtZVVybCA9IGBodHRwczovL3VucGtnLmNvbS9AbnlsYXMvY29tcG9uZW50cy1lbWFpbEAke3BrZy52ZXJzaW9ufS90aGVtZXMvJHtfdGhpcy50aGVtZX0uY3NzYDtcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbiAgQHVzZSBcInNhc3M6bGlzdFwiO1xuICBAaW1wb3J0IFwiLi4vLi4vdGhlbWluZy9yZXNldC5zY3NzXCI7XG4gIEBpbXBvcnQgXCIuLi8uLi90aGVtaW5nL2FuaW1hdGlvbi5zY3NzXCI7XG4gIEBpbXBvcnQgXCIuLi8uLi90aGVtaW5nL3ZhcmlhYmxlcy5zY3NzXCI7XG4gIEBpbXBvcnQgXCIuL3N0eWxlcy9lbWFpbC5zY3NzXCI7XG5cbiAgJGhvdmVyLW91dGxpbmUtd2lkdGg6IDJweDtcbiAgJGNvbGxhcHNlZC1oZWlnaHQ6IDU2cHg7XG4gICRtb2JpbGUtY29sbGFwc2VkLWhlaWdodDogZml0LWNvbnRlbnQ7XG4gICRzcGFjaW5nLXhzOiAwLjVyZW07XG4gICRzcGFjaW5nLXM6IDAuN3JlbTtcbiAgJHNwYWNpbmctbTogMXJlbTtcbiAgJHNwYWNpbmctbDogMS41cmVtO1xuICAkc3BhY2luZy14bDogMi41cmVtO1xuXG4gIG1haW4ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBmb250LWZhbWlseTogdmFyKFxuICAgICAgLS1ueWxhcy1lbWFpbC1mb250LWZhbWlseSxcbiAgICAgIC1hcHBsZS1zeXN0ZW0sXG4gICAgICBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgICBzYW5zLXNlcmlmXG4gICAgKTtcbiAgICAuZW1haWwtcm93IHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLW55bGFzLWVtYWlsLWJhY2tncm91bmQsIHZhcigtLWdyZXktbGlnaHRlc3QpKTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW55bGFzLWVtYWlsLWJvcmRlci1zdHlsZSwgdmFyKC0tZ3JleS1saWdodGVyKSk7XG5cbiAgICAgIG55bGFzLXRvb2x0aXAge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICAuZGVmYXVsdC1hdmF0YXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ueWxhcy1kZWZhdWx0LWF2YXRhci1iYWNrZ3JvdW5kLCB2YXIoLS1ibHVlKSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgY29sb3I6IHZhcigtLW55bGFzLWRlZmF1bHQtYXZhdGFyLWNvbG9yLCB2YXIoLS13aGl0ZSkpO1xuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgJi5kZWxldGVkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQpO1xuICAgICAgICB9XG4gICAgICAgICYuZHJhZnQge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW55bGFzLWVtYWlsLXNuaXBwZXQtY29sb3IsIHZhcigtLWdyZXktZGFyaykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBoZWFkZXIge1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgcGFkZGluZzogJHNwYWNpbmcteHM7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgfVxuICAgICAgZGl2LnN0YXJyZWQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFwyNjA1XCI7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW55bGFzLWVtYWlsLXN0YXItYnV0dG9uLWluYWN0aXZlLWNvbG9yLCAjOGQ5NGE1KTtcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5zdGFycmVkOmJlZm9yZSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbnlsYXMtZW1haWwtc3Rhci1idXR0b24tYWN0aXZlLWNvbG9yLCAjZmZjMTA3KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjpob3ZlcjpiZWZvcmUge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW55bGFzLWVtYWlsLXN0YXItYnV0dG9uLWhvdmVyLWNvbG9yLCAjZmZjMTA3KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYuZXhwYW5kZWQge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ueWxhcy1lbWFpbC1ib2R5LWJhY2tncm91bmQsIHZhcigtLXdoaXRlKSk7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkXG4gICAgICAgICAgdmFyKC0tbnlsYXMtZW1haWwtYm9yZGVyLXN0eWxlLWV4cGFuZGVkLCB2YXIoLS1ncmV5LWxpZ2h0ZXIpKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAkb3V0bGluZS1zdHlsZTogMXB4IHNvbGlkIHZhcigtLWdyZXktbGlnaHRlcik7XG4gICAgICAgIEBtaXhpbiBiYXJTdHlsZSB7XG4gICAgICAgICAgb3V0bGluZTogJG91dGxpbmUtc3R5bGU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDI0cHggMTZweDtcbiAgICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lbWFpbC1sb2FkZXIge1xuICAgICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAuc3Bpbm5lciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICBhbmltYXRpb246IHJvdGF0ZSAycyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBrZXlmcmFtZXMgcm90YXRlIHtcbiAgICAgICAgICB0byB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWJqZWN0LWhlYWRlciB7XG4gICAgICAgICAgQGluY2x1ZGUgYmFyU3R5bGU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgY29sb3I6IHZhcigtLW55bGFzLWVtYWlsLXN1YmplY3QtY29sb3IsIGJsYWNrKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ueWxhcy1lbWFpbC1oZWFkZXItYmFja2dyb3VuZCwgd2hpdGUpO1xuICAgICAgICAgICYubWFpbGJveCB7XG4gICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgICYgPiBkaXYge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBnYXA6ICRzcGFjaW5nLW07XG5cbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoXG4gICAgICAgICAgICAgICAgICAtLW55bGFzLWVtYWlsLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kLFxuICAgICAgICAgICAgICAgICAgdmFyKC0tZ3JleS1saWdodGVyKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDFlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXIoLS1ueWxhcy1lbWFpbC1zdWJqZWN0LWNvbG9yLCB2YXIoLS1ncmV5LWRhcmspKTtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHZhcigtLW55bGFzLWVtYWlsLXN1YmplY3QtY29sb3IsIHZhcigtLWdyZXktZGFyaykpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFtyb2xlPVwidG9vbGJhclwiXSB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgKiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDFlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIFtyb2xlPVwidG9vbGJhclwiXSB7XG4gICAgICAgICAgQGluY2x1ZGUgYmFyU3R5bGU7XG4gICAgICAgICAgcGFkZGluZzogJHNwYWNpbmctcyAkc3BhY2luZy1tO1xuICAgICAgICAgIGdhcDogJHNwYWNpbmctbTtcbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAqIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDFlbTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgICAgICAgIHN0cm9rZTogdmFyKC0tbnlsYXMtZW1haWwtYm9keS1jb2xvciwgdmFyKC0tZ3JleS1kYXJrKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm1lc3NhZ2UtaGVhZCBbcm9sZT1cInRvb2xiYXJcIl0ge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAubWVzc2FnZS1oZWFkIFtyb2xlPVwidG9vbGJhclwiXSBidXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuaWNvbi1jb250YWluZXIsXG4gICAgICAgIC5pY29uLWNvbnRhaW5lciA+ICoge1xuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICB9XG4gICAgICAgICYuZXhwYW5kZWQtbWFpbGJveC10aHJlYWQge1xuICAgICAgICAgIC5tZXNzYWdlLWZyb20ge1xuICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkaXYuaW5kaXZpZHVhbC1tZXNzYWdlIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIHBhZGRpbmc6ICRzcGFjaW5nLXhzO1xuXG4gICAgICAgICAgZGl2Lm1lc3NhZ2UtYm9keSB7XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW55bGFzLWVtYWlsLWJvZHktY29sb3IsIGJsYWNrKTtcbiAgICAgICAgICAgIGRpdi5hdHRhY2htZW50IHtcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46ICRzcGFjaW5nLXhzO1xuICAgICAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC4zcmVtIDFyZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWRcbiAgICAgICAgICAgICAgICAgIHZhcigtLW55bGFzLWVtYWlsLWF0dGFjaG1lbnQtYm9yZGVyLXN0eWxlLCB2YXIoLS1ncmV5KSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbnlsYXMtZW1haWwtYXR0YWNobWVudC1idXR0b24tY29sb3IsIGluaGVyaXQpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW55bGFzLWVtYWlsLWF0dGFjaG1lbnQtYnV0dG9uLWJnLCB3aGl0ZSk7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoXG4gICAgICAgICAgICAgICAgICAgIC0tbnlsYXMtZW1haWwtYXR0YWNobWVudC1idXR0b24taG92ZXItYmcsXG4gICAgICAgICAgICAgICAgICAgIHZhcigtLWdyZXktbGlnaHQpXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICYuY29uZGVuc2VkIHtcbiAgICAgICAgICAgIGRpdi5zbmlwcGV0IHtcbiAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ueWxhcy1lbWFpbC1zbmlwcGV0LWNvbG9yLCB2YXIoLS1ncmV5LWRhcmspKTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogJHNwYWNpbmcteHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXYubWVzc2FnZS1oZWFkIHtcbiAgICAgICAgICAgICAgLmF2YXRhci1pbmZvIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZ2FwOiAkc3BhY2luZy1zO1xuXG4gICAgICAgICAgICAgICAgJiAuZHJhZnQtdG8ge1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLW55bGFzLWVtYWlsLXNuaXBwZXQtY29sb3IsIHZhcigtLWdyZXktZGFyaykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAmOm5vdCg6bGFzdC1vZi10eXBlKSB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWRcbiAgICAgICAgICAgICAgdmFyKC0tbnlsYXMtZW1haWwtYm9yZGVyLXN0eWxlLWV4cGFuZGVkLCB2YXIoLS1ncmV5LWxpZ2h0ZXIpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjpub3QoLmxhc3QtbWVzc2FnZSkge1xuICAgICAgICAgICAgJi5leHBhbmRlZCB7XG4gICAgICAgICAgICAgIGRpdi5tZXNzYWdlLWhlYWQ6aG92ZXIge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogbi1yZXNpemU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgJi5sYXN0LW1lc3NhZ2Uge1xuICAgICAgICAgICAgLm1lc3NhZ2UtaGVhZDpob3ZlcixcbiAgICAgICAgICAgIC5tZXNzYWdlLWJvZHk6aG92ZXIge1xuICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5hY3RpdmUtZHJhZnQge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbnlsYXMtZW1haWwtc25pcHBldC1jb2xvciwgdmFyKC0tZ3JleS1kYXJrKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGl2Lm1lc3NhZ2UtaGVhZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgICAgICAgZ2FwOiAkc3BhY2luZy14cztcbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2Lm1lc3NhZ2UtZGF0ZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW55bGFzLWVtYWlsLW1lc3NhZ2UtZGF0ZS1jb2xvciwgdmFyKC0tZ3JleSkpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpdi5tZXNzYWdlLWZyb20ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbnlsYXMtZW1haWwtbWVzc2FnZS1mcm9tLWNvbG9yLCBibGFjayk7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgJi5uYW1lIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYuZXhwYW5kZWQge1xuICAgICAgICAgIGRpdi5tZXNzYWdlLWhlYWQge1xuICAgICAgICAgICAgJi5kcmFmdCB7XG4gICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGl2Lm1lc3NhZ2UtZnJvbS10byB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMC41cmVtIDA7XG4gICAgICAgICAgICAgIC5hdmF0YXItaW5mbyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGdhcDogJHNwYWNpbmctcztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYubWVzc2FnZS10byB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLW55bGFzLWVtYWlsLW1lc3NhZ2UtdG8tY29sb3IsIHZhcigtLWdyZXkpKTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDMycHggKyAwLjdyZW0pO1xuICAgICAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTZweDtcblxuICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAmLmNvbmRlbnNlZCB7XG4gICAgICAgICAgICBnYXA6IDFyZW07XG4gICAgICAgICAgICAmOmhvdmVyLFxuICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgIGN1cnNvcjogcy1yZXNpemU7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFuLnNuaXBwZXQge1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLW55bGFzLWVtYWlsLXNuaXBwZXQtY29sb3IsIHZhcigtLWdyZXktZGFyaykpO1xuICAgICAgICAgICAgICBzcGFuLmluaXRpYWwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc3Bhbi5sb2FkaW5nIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICAuZnJvbS1tZXNzYWdlLWNvdW50IHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XG4gICAgICAgIGdyaWQtZ2FwOiAkc3BhY2luZy1tO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ueWxhcy1lbWFpbC1wYXJ0aWNpcGFudC1jb2xvciwgdmFyKC0tZ3JleS1kYXJrKSk7XG4gICAgICAgIC5mcm9tLXBhcnRpY2lwYW50cyB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBmaXQtY29udGVudCg2MHB4KTtcbiAgICAgICAgICAucGFydGljaXBhbnRzLW5hbWUge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAuZnJvbS1zdWItc2VjdGlvbiB7XG4gICAgICAgICAgICAgICYuZGVsZXRlZC1lbWFpbCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLW55bGFzLWVtYWlsLXNuaXBwZXQtY29sb3IsIHZhcigtLWdyZXktZGFyaykpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICYuc2Vjb25kIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICYucGFydGljaXBhbnQtbGFiZWwge1xuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJi5kcmFmdC1sYWJlbCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLW55bGFzLWVtYWlsLWRyYWZ0LWxhYmVsLWNvbG9yLCAjZGQ0YjM5KTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAucGFydGljaXBhbnRzLWNvdW50IHtcbiAgICAgICAgICAgIC5zaG93LW9uLW1vYmlsZSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zaG93LW9uLWRlc2t0b3Age1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnN1YmplY3Qtc25pcHBldC1hdHRhY2htZW50IHtcbiAgICAgICAgcGFkZGluZzogJHNwYWNpbmcteHM7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwLjRyZW07XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIC5zdWJqZWN0LXNuaXBwZXQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBnYXA6IDAuNXJlbTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tbnlsYXMtZW1haWwtc25pcHBldC1jb2xvciwgdmFyKC0tZ3JleS1kYXJrKSk7XG5cbiAgICAgICAgICAuc3ViamVjdCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbnlsYXMtZW1haWwtc3ViamVjdC1jb2xvciwgdmFyKC0tYmxhY2spKTtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNuaXBwZXQge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICYuZGVsZXRlZCB7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ueWxhcy1lbWFpbC1zbmlwcGV0LWNvbG9yLCB2YXIoLS1ncmV5LWRhcmspKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYXR0YWNobWVudCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogJHNwYWNpbmcteHM7XG4gICAgICAgICAgZ2FwOiAxcmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcblxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkXG4gICAgICAgICAgICAgIHZhcigtLW55bGFzLWVtYWlsLWF0dGFjaG1lbnQtYm9yZGVyLXN0eWxlLCB2YXIoLS1ncmV5KSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW55bGFzLWVtYWlsLWF0dGFjaG1lbnQtYnV0dG9uLWNvbG9yLCBpbmhlcml0KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW55bGFzLWVtYWlsLWF0dGFjaG1lbnQtYnV0dG9uLWJnLCB3aGl0ZSk7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKFxuICAgICAgICAgICAgICAgIC0tbnlsYXMtZW1haWwtYXR0YWNobWVudC1idXR0b24taG92ZXItYmcsXG4gICAgICAgICAgICAgICAgdmFyKC0tZ3JleS1saWdodClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLW55bGFzLWVtYWlsLXNuaXBwZXQtY29sb3IsIHZhcigtLWdyZXktZGFyaykpO1xuICAgICAgICAgIHNwYW4uc3ViamVjdCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbnlsYXMtZW1haWwtc3ViamVjdC1jb2xvciwgdmFyKC0tYmxhY2spKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJi5kYXRlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgZ2FwOiAkc3BhY2luZy14cztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW55bGFzLWVtYWlsLW1lc3NhZ2UtZGF0ZS1jb2xvciwgdmFyKC0tZ3JleSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmRhdGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZ2FwOiAxcmVtO1xuICAgICAgICAmID4gOmxhc3QtY2hpbGQge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uLFxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICB3aWR0aDogMWVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgICAgICBmaWxsOiB2YXIoLS1ueWxhcy1lbWFpbC1hY3Rpb24taWNvbnMtY29sb3IsIHZhcigtLWdyZXktZGFyaykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmNvbmRlbnNlZCB7XG4gICAgICAgIGhlaWdodDogJG1vYmlsZS1jb2xsYXBzZWQtaGVpZ2h0O1xuICAgICAgICBwYWRkaW5nOiAkc3BhY2luZy14cztcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBAaW5jbHVkZSBjb25kZW5zZWQtZ3JpZDtcbiAgICAgICAgJi5kaXNhYmxlLWNsaWNrIHtcbiAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JleS1saWdodGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mcm9tLXN0YXIge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4IGF1dG87XG4gICAgICAgICAgY29sdW1uLWdhcDogJHNwYWNpbmcteHM7XG4gICAgICAgIH1cbiAgICAgICAgLnRocmVhZC1tZXNzYWdlLWNvdW50IHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tbnlsYXMtZW1haWwtdGhyZWFkLW1lc3NhZ2UtY291bnQtY29sb3IsIHZhcigtLWJsYWNrKSk7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmRhdGUge1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgICYudW5yZWFkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ueWxhcy1lbWFpbC11bnJlYWQtYmFja2dyb3VuZCwgd2hpdGUpO1xuXG4gICAgICAgICAgLmZyb20tbWVzc2FnZS1jb3VudCxcbiAgICAgICAgICAuZGF0ZSxcbiAgICAgICAgICAuc3ViamVjdCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW55bGFzLWVtYWlsLXVucmVhZC1zdWJqZWN0LWNvbG9yLCB2YXIoLS1ibGFjaykpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50aHJlYWQtbWVzc2FnZS1jb3VudCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKFxuICAgICAgICAgICAgICAtLW55bGFzLWVtYWlsLXVucmVhZC10aHJlYWQtbWVzc2FnZS1jb3VudC1jb2xvcixcbiAgICAgICAgICAgICAgdmFyKC0tYmx1ZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLmV4cGFuZGVkLnNpbmd1bGFyIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgZGl2LmluZGl2aWR1YWwtbWVzc2FnZTpub3QoLmxhc3QtbWVzc2FnZSkuZXhwYW5kZWQge1xuICAgICAgICAgIC5tZXNzYWdlLWhlYWQ6aG92ZXIsXG4gICAgICAgICAgLm1lc3NhZ2UtYm9keTpob3ZlciB7XG4gICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhICN7JGRlc2t0b3B9IHtcbiAgICBtYWluIHtcbiAgICAgIC5lbWFpbC1yb3cge1xuICAgICAgICAuZnJvbS1tZXNzYWdlLWNvdW50IHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICAgICAgICAgIC5mcm9tLXBhcnRpY2lwYW50cyB7XG4gICAgICAgICAgICAucGFydGljaXBhbnRzLW5hbWUge1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIC5mcm9tLXN1Yi1zZWN0aW9uLnNlY29uZCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFydGljaXBhbnRzLWNvdW50IHtcbiAgICAgICAgICAgICAgLnNob3ctb24tbW9iaWxlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zaG93LW9uLWRlc2t0b3Age1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuZXhwYW5kZWQuc2luZ3VsYXIge1xuICAgICAgICAgIC5pbmRpdmlkdWFsLW1lc3NhZ2UuZXhwYW5kZWQge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6ICRzcGFjaW5nLXhzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLmNvbmRlbnNlZCB7XG4gICAgICAgICAgcGFkZGluZzogJHNwYWNpbmcteHM7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBpbml0aWFsO1xuXG4gICAgICAgICAgZGl2LnN0YXJyZWQge1xuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgJjpob3ZlcjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ueWxhcy1lbWFpbC1zdGFyLWJ1dHRvbi1ob3Zlci1jb2xvciwgI2ZmYzEwNyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6ICRzcGFjaW5nLXhzO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICBnYXA6ICRzcGFjaW5nLXhzO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW55bGFzLWVtYWlsLW1lc3NhZ2UtZGF0ZS1jb2xvciwgdmFyKC0tZ3JleSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50aHJlYWQtbWVzc2FnZS1jb3VudCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5leHBhbmRlZCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAkc3BhY2luZy1tICRzcGFjaW5nLXhsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXYuaW5kaXZpZHVhbC1tZXNzYWdlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6ICRzcGFjaW5nLW0gMDtcbiAgICAgICAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgICAgICAgZGl2Lm1lc3NhZ2UtaGVhZCxcbiAgICAgICAgICAgIGRpdi5tZXNzYWdlLWJvZHkge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAkc3BhY2luZy14bDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpdi5tZXNzYWdlLWJvZHkge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmNvbmRlbnNlZCB7XG4gICAgICAgICAgICAgIGRpdi5zbmlwcGV0IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgJHNwYWNpbmcteGw7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogOTV2dztcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZGl2Lm1lc3NhZ2UtaGVhZCB7XG4gICAgICAgICAgICAgICAgJi5kcmFmdCB7XG4gICAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGl2Lm1lc3NhZ2UtZGF0ZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5leHBhbmRlZCB7XG4gICAgICAgICAgICAgIGRpdi5tZXNzYWdlLWhlYWQge1xuICAgICAgICAgICAgICAgIGRpdi5tZXNzYWdlLWZyb20tdG8ge1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAkc3BhY2luZy14cyAwO1xuICAgICAgICAgICAgICAgICAgZGl2Lm1lc3NhZ2UtdG8ge1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnN1YmplY3Qtc25pcHBldC1hdHRhY2htZW50IHtcbiAgICAgICAgICAuc3ViamVjdC1zbmlwcGV0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICAgICAgICAgICAgZ2FwOiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zdHlsZT5cblxuPG55bGFzLWVycm9yIHtpZH0gLz5cbnsjaWYgdGhlbWVVcmx9XG4gIDxsaW5rXG4gICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgaHJlZj17dGhlbWVVcmx9XG4gICAgb246bG9hZD17KCkgPT4gKHRoZW1lTG9hZGVkID0gdHJ1ZSl9XG4gICAgb246ZXJyb3I9eygpID0+ICh0aGVtZUxvYWRlZCA9IHRydWUpfSAvPlxuey9pZn1cbjxtYWluXG4gIGNsYXNzPVwibnlsYXMtZW1haWxcIlxuICBkYXRhLWN5PVwibnlsYXMtZW1haWxcIlxuICBiaW5kOnRoaXM9e21haW59XG4gIG9uOmNsaWNrPXtoYW5kbGVUaHJlYWRDbGlja31cbiAgdGFiaW5kZXg9XCIwXCJcbiAgb246a2V5cHJlc3M9e2hhbmRsZVRocmVhZEtleXByZXNzfT5cbiAgeyNpZiBfdGhpcy50aHJlYWQgfHwgX3RoaXMudGhyZWFkX2lkfVxuICAgIHsjYXdhaXQgYWN0aXZlVGhyZWFkfVxuICAgICAgTG9hZGluZy4uLlxuICAgIHs6dGhlbiB0aHJlYWR9XG4gICAgICB7I2lmIHRocmVhZCAmJiBhY3RpdmVUaHJlYWR9XG4gICAgICAgIHsjaWYgYWN0aXZlVGhyZWFkLmV4cGFuZGVkfVxuICAgICAgICAgIDwhLS0gRXhwYW5kZWQgdGhyZWFkIHJvdyAtLT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImVtYWlsLXJvdyBleHBhbmRlZCB7X3RoaXMuY2xpY2tfYWN0aW9uID09PSAnbWFpbGJveCdcbiAgICAgICAgICAgICAgPyAnZXhwYW5kZWQtbWFpbGJveC10aHJlYWQnXG4gICAgICAgICAgICAgIDogJyd9XCI+XG4gICAgICAgICAgICA8aGVhZGVyXG4gICAgICAgICAgICAgIGNsYXNzPVwic3ViamVjdC1oZWFkZXJcIlxuICAgICAgICAgICAgICBjbGFzczptYWlsYm94PXtfdGhpcy5jbGlja19hY3Rpb24gPT09IFwibWFpbGJveFwifT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1YmplY3QtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICB7I2lmIF90aGlzLmNsaWNrX2FjdGlvbiA9PT0gXCJtYWlsYm94XCJ9XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcIlJldHVybiB0byBNYWlsYm94XCJ9XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e1wiUmV0dXJuIHRvIE1haWxib3hcIn1cbiAgICAgICAgICAgICAgICAgICAgb246Y2xpY2t8c3RvcFByb3BhZ2F0aW9uPXtyZXR1cm5Ub01haWxib3h9PlxuICAgICAgICAgICAgICAgICAgICA8TGVmdEFycm93TGluZUljb24gLz5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgPGgxPnt0aHJlYWQ/LnN1YmplY3R9PC9oMT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgcm9sZT1cInRvb2xiYXJcIj5cbiAgICAgICAgICAgICAgICB7I2lmIF90aGlzLnNob3dfc3Rhcn1cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGFycmVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz17dGhyZWFkLnN0YXJyZWQgPyBcInN0YXJyZWRcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RocmVhZC5zdGFycmVkID8gXCJVbnN0YXIgdGhyZWFkXCIgOiBcIlN0YXIgdGhyZWFkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dGhyZWFkLnN0YXJyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJVbnN0YXIgdGhyZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJTdGFyIHRocmVhZFwifVxuICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJzd2l0Y2hcIlxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY2hlY2tlZD17dGhyZWFkLnN0YXJyZWR9XG4gICAgICAgICAgICAgICAgICAgICAgb246Y2xpY2t8c3RvcFByb3BhZ2F0aW9uPXtoYW5kbGVUaHJlYWRTdGFyQ2xpY2t9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgIHsjaWYgX3RoaXMuc2hvd190aHJlYWRfYWN0aW9uc31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWxldGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRGVsZXRlIHRocmVhZCAvIE1vdmUgdG8gdHJhc2hcIlxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJEZWxldGUgdGhyZWFkIChNb3ZlIHRvIHRyYXNoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgb246Y2xpY2t8c3RvcFByb3BhZ2F0aW9uPXsoZSkgPT4gZGVsZXRlRW1haWwoZSl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWFkLXN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2BNYXJrIHRocmVhZCBhcyAke1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlVGhyZWFkLnVucmVhZCA/IFwiXCIgOiBcInVuXCJcbiAgICAgICAgICAgICAgICAgICAgICB9cmVhZGB9XG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17YE1hcmsgdGhyZWFkIGFzICR7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVUaHJlYWQudW5yZWFkID8gXCJcIiA6IFwidW5cIlxuICAgICAgICAgICAgICAgICAgICAgIH1yZWFkYH1cbiAgICAgICAgICAgICAgICAgICAgICBvbjpjbGlja3xzdG9wUHJvcGFnYXRpb249e3RvZ2dsZVVucmVhZFN0YXR1c30+XG4gICAgICAgICAgICAgICAgICAgICAgeyNpZiBhY3RpdmVUaHJlYWQudW5yZWFkfVxuICAgICAgICAgICAgICAgICAgICAgICAgPE1hcmtSZWFkSWNvbiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNYXJrVW5yZWFkSWNvbiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIHsjaWYgYWN0aXZlVGhyZWFkLm1lc3NhZ2VzLmxlbmd0aH1cbiAgICAgICAgICAgICAgeyNlYWNoIGFjdGl2ZVRocmVhZC5tZXNzYWdlcyBhcyBtZXNzYWdlLCBtc2dJbmRleH1cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzczpsYXN0LW1lc3NhZ2U9e21zZ0luZGV4ID09PVxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVUaHJlYWQubWVzc2FnZXMubGVuZ3RoIC0gMX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzPXtgaW5kaXZpZHVhbC1tZXNzYWdlICR7XG4gICAgICAgICAgICAgICAgICAgIG1zZ0luZGV4ID09PSBhY3RpdmVUaHJlYWQubWVzc2FnZXMubGVuZ3RoIC0gMSB8fFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmV4cGFuZGVkXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImV4cGFuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiY29uZGVuc2VkXCJcbiAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgYmluZDp0aGlzPXttZXNzYWdlUmVmc1ttc2dJbmRleF19XG4gICAgICAgICAgICAgICAgICBvbjpjbGlja3xzdG9wUHJvcGFnYXRpb249eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVFbWFpbENsaWNrKGUsIG1zZ0luZGV4KX1cbiAgICAgICAgICAgICAgICAgIG9uOmtleXByZXNzPXsoZSkgPT4gaGFuZGxlRW1haWxLZXlwcmVzcyhlLCBtc2dJbmRleCl9PlxuICAgICAgICAgICAgICAgICAgeyNpZiBtZXNzYWdlLmV4cGFuZGVkIHx8IG1zZ0luZGV4ID09PSBhY3RpdmVUaHJlYWQubWVzc2FnZXMubGVuZ3RoIC0gMX1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2UtaGVhZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLWZyb20tdG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdmF0YXItaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7I2lmIF90aGlzLnNob3dfY29udGFjdF9hdmF0YXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlZmF1bHQtYXZhdGFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bnlsYXMtY29udGFjdC1pbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udGFjdF9xdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFjdD17Y29udGFjdHNbbWVzc2FnZT8uZnJvbVswXS5lbWFpbF19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLWZyb21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyRW1haWwgJiYgbWVzc2FnZT8uZnJvbVswXS5lbWFpbCA9PT0gdXNlckVtYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbWVzc2FnZT8uZnJvbVswXS5uYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT8uZnJvbVswXS5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSB0b29sdGlwIGNvbXBvbmVudCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bnlsYXMtdG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246dG9nZ2xlVG9vbHRpcD17c2V0VG9vbHRpcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXttZXNzYWdlPy5pZC5zbGljZSgwLCAzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfdG9vbHRpcF9pZD17Y3VycmVudFRvb2x0aXBJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e0Ryb3Bkb3duU3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17bWVzc2FnZT8uZnJvbVswXS5lbWFpbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsjaWYgbWVzc2FnZT8udG99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyNhd2FpdCBnZXRBbGxSZWNpcGllbnRzKCB7IHRvOiBtZXNzYWdlLnRvLCBjYzogbWVzc2FnZS5jYywgYmNjOiBtZXNzYWdlLmJjYyB9LCApIHRoZW4gYWxsUmVjaXBpZW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsjZWFjaCBhbGxSZWNpcGllbnRzLnNsaWNlKDAsIFBBUlRJQ0lQQU5UU19UT19UUlVOQ0FURSkgYXMgcmVjaXBpZW50LCBpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7I2lmIGkgPT09IDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YHRvICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnlvdSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNpcGllbnQuZW1haWwgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMueW91LmVtYWlsX2FkZHJlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiTWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgezplbHNlIGlmIHJlY2lwaWVudC5fdHlwZSA9PT0gXCJjY1wiICYmIGkgPT09IG1lc3NhZ2UudG8ubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgezplbHNlIGlmIHJlY2lwaWVudC5fdHlwZSA9PT0gXCJiY2NcIiAmJiBpID09PSBtZXNzYWdlLnRvLmxlbmd0aCArIG1lc3NhZ2UuY2MubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmNjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvaWZ9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7I2lmIHJlY2lwaWVudC5lbWFpbCAmJiByZWNpcGllbnQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNpcGllbnQubmFtZSA/PyBfdGhpcy55b3UubmFtZX0gJmx0O3tyZWNpcGllbnQuZW1haWx9Jmd0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHs6ZWxzZSBpZiByZWNpcGllbnQuZW1haWwgJiYgIXJlY2lwaWVudC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlY2lwaWVudC5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7I2lmIGFsbFJlY2lwaWVudHMubGVuZ3RoID4gUEFSVElDSVBBTlRTX1RPX1RSVU5DQVRFfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxueWxhcy10b29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjp0b2dnbGVUb29sdGlwPXtzZXRUb29sdGlwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2BzaG93LW1vcmUtcGFydGljaXBhbnRzLSR7bWVzc2FnZS5pZH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF90b29sdGlwX2lkPXtjdXJyZW50VG9vbHRpcElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17RHJvcGRvd25TeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtgQW5kICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFJlY2lwaWVudHMubGVuZ3RoIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUEFSVElDSVBBTlRTX1RPX1RSVU5DQVRFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IG1vcmVgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17YCR7YWdncmVnYXRlUmVjaXBpZW50c1N0cmluZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsUmVjaXBpZW50cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvYXdhaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7I2lmIF90aGlzLnNob3dfcmVjZWl2ZWRfdGltZXN0YW1wfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1kYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0RXhwYW5kZWREYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShtZXNzYWdlLmRhdGUgKiAxMDAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGFyaWEtbGFiZWw9XCJFbWFpbCBBY3Rpb25zXCIgcm9sZT1cInRvb2xiYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyNpZiBfdGhpcy5zaG93X3JlcGx5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXBseVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XCJSZXBseVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtcIlJlcGx5XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOmNsaWNrfHN0b3BQcm9wYWdhdGlvbj17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUmVwbHlDbGljayhlLCBtZXNzYWdlLCBcInJlcGx5XCIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlcGx5SWNvbiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsjaWYgX3RoaXMuc2hvd19yZXBseV9hbGwgJiYgY2FuUmVwbHlBbGwobWVzc2FnZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlcGx5LWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XCJSZXBseSBhbGxcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17XCJSZXBseSBhbGxcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246Y2xpY2t8c3RvcFByb3BhZ2F0aW9uPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVSZXBseUNsaWNrKGUsIG1lc3NhZ2UsIFwicmVwbHlfYWxsXCIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlcGx5QWxsSWNvbiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsjaWYgX3RoaXMuc2hvd19mb3J3YXJkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3J3YXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRm9yd2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJGb3J3YXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246Y2xpY2t8c3RvcFByb3BhZ2F0aW9uPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVGb3J3YXJkQ2xpY2soZSwgbWVzc2FnZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9yd2FyZEljb24gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgeyNpZiBfdGhpcy5jbGVhbl9jb252ZXJzYXRpb24gJiYgbWVzc2FnZS5jb252ZXJzYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICB7QGh0bWwgRE9NUHVyaWZ5LnNhbml0aXplKG1lc3NhZ2UuY29udmVyc2F0aW9uKX1cbiAgICAgICAgICAgICAgICAgICAgICB7OmVsc2UgaWYgbWVzc2FnZSAmJiBtZXNzYWdlLmJvZHkgIT0gbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxueWxhcy1tZXNzYWdlLWJvZHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk9e21lc3NhZ2UuYm9keX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246ZG93bmxvYWRDbGlja2VkPXtoYW5kbGVEb3dubG9hZEZyb21NZXNzYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBJZiBhIHRocmVhZCBpcyBiZWluZyBwYXNzZWQgbWFudWFsbHkgYW5kIHRoZXJlIGlzIG5vIGJvZHksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB3ZSB3aWxsIGtlZXAgbG9hZGluZywgc28gdGhlIGJlbG93IGlzIG91ciBmYWxsYmFjayAtLT5cbiAgICAgICAgICAgICAgICAgICAgICB7OmVsc2UgaWYgISFfdGhpcy50aHJlYWQgJiYgIV90aGlzLnRocmVhZF9pZCAmJiBjbGlja19hY3Rpb24gIT0gXCJtYWlsYm94XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZS5ib2R5ID8/IG1lc3NhZ2Uuc25pcHBldH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsjaWYgYXR0YWNoZWRGaWxlc1ttZXNzYWdlLmlkXSAmJiBBcnJheS5pc0FycmF5KGF0dGFjaGVkRmlsZXNbbWVzc2FnZS5pZF0pICYmIGF0dGFjaGVkRmlsZXNbbWVzc2FnZS5pZF0ubGVuZ3RoID4gMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF0dGFjaG1lbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7I2VhY2ggYXR0YWNoZWRGaWxlc1ttZXNzYWdlLmlkXSBhcyBmaWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjpjbGlja3xzdG9wUHJvcGFnYXRpb249eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoXCJmaWxlQ2xpY2tlZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudDogZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGU6IGZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmlsZS5maWxlbmFtZSB8fCBmaWxlLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey9lYWNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgICAgICAgezplbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVtYWlsLWxvYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZ0ljb24gY2xhc3M9XCJzcGlubmVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLWhlYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsjaWYgX3RoaXMuc2hvd19jb250YWN0X2F2YXRhcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlZmF1bHQtYXZhdGFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG55bGFzLWNvbnRhY3QtaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb250YWN0X3F1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFjdD17Y29udGFjdHNbbWVzc2FnZT8uZnJvbVswXS5lbWFpbF19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLWZyb21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3VzZXJFbWFpbCAmJiBtZXNzYWdlPy5mcm9tWzBdLmVtYWlsID09PSB1c2VyRW1haWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1lc3NhZ2U/LmZyb21bMF0ubmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPy5mcm9tWzBdLmVtYWlsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSB0b29sdGlwIGNvbXBvbmVudCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG55bGFzLXRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjp0b2dnbGVUb29sdGlwPXtzZXRUb29sdGlwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXttZXNzYWdlPy5pZC5zbGljZSgwLCAzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3Rvb2x0aXBfaWQ9e2N1cnJlbnRUb29sdGlwSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17RHJvcGRvd25TeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17bWVzc2FnZT8uZnJvbVswXS5lbWFpbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyNpZiBfdGhpcy5zaG93X3JlY2VpdmVkX3RpbWVzdGFtcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2UtZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdEV4cGFuZGVkRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUobWVzc2FnZS5kYXRlICogMTAwMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbmlwcGV0XCI+XG4gICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2Uuc25pcHBldH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic25pcHBldFwiPnt0aHJlYWQuc25pcHBldH08L3NwYW4+XG4gICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgPCEtLSBEcmFmdCBtZXNzYWdlcyAtLT5cbiAgICAgICAgICAgIHsjaWYgYWN0aXZlVGhyZWFkLmRyYWZ0cy5sZW5ndGh9XG4gICAgICAgICAgICAgIHsjZWFjaCBhY3RpdmVUaHJlYWQuZHJhZnRzIGFzIGRyYWZ0LCBkcmFmdEluZGV4fVxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz17YGluZGl2aWR1YWwtbWVzc2FnZSBjb25kZW5zZWQgZHJhZnQtbWVzc2FnZWB9XG4gICAgICAgICAgICAgICAgICBjbGFzczphY3RpdmUtZHJhZnQ9e2RyYWZ0LmFjdGl2ZX1cbiAgICAgICAgICAgICAgICAgIGJpbmQ6dGhpcz17bWVzc2FnZVJlZnNbZHJhZnRJbmRleF19XG4gICAgICAgICAgICAgICAgICBvbjpjbGlja3xzdG9wUHJvcGFnYXRpb249eyhlKSA9PiBoYW5kbGVEcmFmdENsaWNrKGUsIGRyYWZ0KX1cbiAgICAgICAgICAgICAgICAgIG9uOmtleXByZXNzPXsoZSkgPT4gaGFuZGxlRHJhZnRLZXlwcmVzcyhlLCBkcmFmdCl9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2UtaGVhZCBkcmFmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICB7I2lmIF90aGlzLnNob3dfY29udGFjdF9hdmF0YXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVmYXVsdC1hdmF0YXIgZHJhZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYWZ0SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJhZnQtdG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsjaWYgZHJhZnQ/LnRvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7I2F3YWl0IGdldEFsbFJlY2lwaWVudHMoIHsgdG86IGRyYWZ0LnRvLCBjYzogZHJhZnQuY2MsIGJjYzogZHJhZnQuYmNjIH0sICkgdGhlbiBhbGxSZWNpcGllbnRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsjZWFjaCBhbGxSZWNpcGllbnRzLnNsaWNlKDAsIFBBUlRJQ0lQQU5UU19UT19UUlVOQ0FURSkgYXMgcmVjaXBpZW50LCBpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERyYWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsjaWYgaSA9PT0gMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YHRvICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy55b3UgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2lwaWVudC5lbWFpbCA9PT0gX3RoaXMueW91LmVtYWlsX2FkZHJlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIk1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHs6ZWxzZSBpZiByZWNpcGllbnQuX3R5cGUgPT09IFwiY2NcIiAmJiBpID09PSBkcmFmdC50by5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHs6ZWxzZSBpZiByZWNpcGllbnQuX3R5cGUgPT09IFwiYmNjXCIgJiYgaSA9PT0gZHJhZnQudG8ubGVuZ3RoICsgZHJhZnQuY2MubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJjYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey9pZn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7I2lmIHJlY2lwaWVudC5lbWFpbCAmJiByZWNpcGllbnQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVjaXBpZW50Lm5hbWUgPz8gX3RoaXMueW91Lm5hbWV9ICZsdDt7cmVjaXBpZW50LmVtYWlsfSZndDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgezplbHNlIGlmIHJlY2lwaWVudC5lbWFpbCAmJiAhcmVjaXBpZW50Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlY2lwaWVudC5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyNpZiBhbGxSZWNpcGllbnRzLmxlbmd0aCA+IFBBUlRJQ0lQQU5UU19UT19UUlVOQ0FURX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxueWxhcy10b29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246dG9nZ2xlVG9vbHRpcD17c2V0VG9vbHRpcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YHNob3ctbW9yZS1wYXJ0aWNpcGFudHMtJHtkcmFmdC5pZH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfdG9vbHRpcF9pZD17Y3VycmVudFRvb2x0aXBJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtEcm9wZG93blN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtgQW5kICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxSZWNpcGllbnRzLmxlbmd0aCAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQQVJUSUNJUEFOVFNfVE9fVFJVTkNBVEVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IG1vcmVgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2Ake2FnZ3JlZ2F0ZVJlY2lwaWVudHNTdHJpbmcoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxSZWNpcGllbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvYXdhaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICB7I2lmIF90aGlzLnNob3dfcmVjZWl2ZWRfdGltZXN0YW1wfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2UtZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTYXZlZCBhdDoge2Zvcm1hdEV4cGFuZGVkRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKGRyYWZ0LmRhdGUgKiAxMDAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbmlwcGV0XCI+XG4gICAgICAgICAgICAgICAgICAgIHtkcmFmdC5zbmlwcGV0fVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICA8IS0tIENvbmRlbnNlZCB0aHJlYWQgcm93IC0tPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiZW1haWwtcm93IGNvbmRlbnNlZFwiXG4gICAgICAgICAgICBjbGFzczpzaG93X3N0YXI9e190aGlzLnNob3dfc3Rhcn1cbiAgICAgICAgICAgIGNsYXNzOnVucmVhZD17YWN0aXZlVGhyZWFkLnVucmVhZH1cbiAgICAgICAgICAgIGNsYXNzOmRpc2FibGUtY2xpY2s9e2FjdGl2ZVRocmVhZCAmJlxuICAgICAgICAgICAgICBhY3RpdmVUaHJlYWQubWVzc2FnZXMubGVuZ3RoIDw9IDAgJiZcbiAgICAgICAgICAgICAgIWFjdGl2ZVRocmVhZC5kcmFmdHMubGVuZ3RofT5cbiAgICAgICAgICAgIHsjYXdhaXQgaXNUaHJlYWRBRHJhZnRFbWFpbChhY3RpdmVUaHJlYWQpIHRoZW4gaXNEcmFmdH1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZyb217X3RoaXMuc2hvd19zdGFyID8gJy1zdGFyJyA6ICcnfVwiPlxuICAgICAgICAgICAgICAgIHsjaWYgX3RoaXMuc2hvd19zdGFyfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXJyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtgdGhyZWFkLXN0YXItJHtfdGhpcy50aHJlYWRfaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz17YWN0aXZlVGhyZWFkLnN0YXJyZWQgPyBcInN0YXJyZWRcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e190aGlzLnRocmVhZF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICByb2xlPVwic3dpdGNoXCJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNoZWNrZWQ9e2FjdGl2ZVRocmVhZC5zdGFycmVkfVxuICAgICAgICAgICAgICAgICAgICAgIG9uOmNsaWNrfHByZXZlbnREZWZhdWx0PXtoYW5kbGVUaHJlYWRTdGFyQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17YFN0YXIgYnV0dG9uIGZvciB0aHJlYWQgJHtfdGhpcy50aHJlYWRfaWR9YH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZyb20tbWVzc2FnZS1jb3VudFwiPlxuICAgICAgICAgICAgICAgICAgeyNpZiBfdGhpcy5zaG93X2NvbnRhY3RfYXZhdGFyfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkZWZhdWx0LWF2YXRhclwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ZGVsZXRlZD17aXNEZWxldGVkfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOmRyYWZ0LWljb249e2lzRHJhZnR9PlxuICAgICAgICAgICAgICAgICAgICAgIHsjaWYgYWN0aXZlVGhyZWFkfVxuICAgICAgICAgICAgICAgICAgICAgICAgeyNpZiBpc0RyYWZ0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZnRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7OmVsc2UgaWYgYWN0aXZlVGhyZWFkLm1lc3NhZ2VzLmxlbmd0aCA8PSAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Tm9NZXNzYWdlc0ljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG55bGFzLWNvbnRhY3QtaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udGFjdF9xdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWN0PXthY3RpdmVUaHJlYWRDb250YWN0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnJvbS1wYXJ0aWNpcGFudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgeyNpZiBpc0RlbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhcnRpY2lwYW50cy1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZyb20tc3ViLXNlY3Rpb24gZGVsZXRlZC1lbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVkIEVtYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwYXJ0aWNpcGFudHMtbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczpjb25kZW5zZWQ9e3Nob3dTZWNvbmRGcm9tUGFydGljaXBhbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVRocmVhZC5tZXNzYWdlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlVGhyZWFkLnBhcnRpY2lwYW50cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyNhd2FpdCBnZXRQYXJ0aWNpcGFudHMoYWN0aXZlVGhyZWFkKSB0aGVuIHBhcnRpY2lwYW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyNlYWNoIHBhcnRpY2lwYW50cyBhcyBuYW1lLCBpZHh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZnJvbS1zdWItc2VjdGlvbiBwYXJ0aWNpcGFudC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczpkcmFmdC1sYWJlbD17bmFtZSA9PT0gXCJEcmFmdFwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7I2lmIGlkeCA8IHBhcnRpY2lwYW50cy5sZW5ndGggLSAxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmcm9tLXN1Yi1zZWN0aW9uXCI+LCZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgICAgICAgICAgICAgICAgICB7L2F3YWl0fVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFydGljaXBhbnRzLWNvdW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7I2lmIHNob3dTZWNvbmRGcm9tUGFydGljaXBhbnQoYWN0aXZlVGhyZWFkLm1lc3NhZ2VzLCBhY3RpdmVUaHJlYWQucGFydGljaXBhbnRzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBJZiBpdCBpcyBtb2JpbGUsIHdlIG9ubHkgc2hvdyAxIHBhcnRpY2lwYW50IChsYXRlc3QgZnJvbSBtZXNzYWdlKSwgaGVuY2UgLTEgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsjaWYgYWN0aXZlVGhyZWFkLnBhcnRpY2lwYW50cy5sZW5ndGggPj0gMn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNob3ctb24tbW9iaWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmcGx1czt7YWN0aXZlVGhyZWFkLnBhcnRpY2lwYW50cy5sZW5ndGggLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNQVhfTU9CSUxFX1BBUlRJQ0lQQU5UU31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gSWYgaXQgaXMgZGVza3RvcCwgd2Ugb25seSBzaG93IHVwdG8gMiBwYXJ0aWNpcGFudHMgKGxhdGVzdCBmcm9tIG1lc3NhZ2UpLCBoZW5jZSAtMi4gXG4gICAgICAgICAgICAgICAgICAgICAgICBOb3RlIHRoYXQgdGhpcyBtaWdodCBub3QgYmUgZXhhY3RseSBjb3JyZWN0IGlmIHRoZSBuYW1lIG9mIHRoZSBmaXJzdCBwYXJ0aWNpcGFudCBpcyB0b28gbG9uZyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBvY2N1cGllcyBlbnRpcmUgd2lkdGggLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsjaWYgYWN0aXZlVGhyZWFkLnBhcnRpY2lwYW50cy5sZW5ndGggPiAyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2hvdy1vbi1kZXNrdG9wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsgJnBsdXM7IHthY3RpdmVUaHJlYWQucGFydGljaXBhbnRzLmxlbmd0aCAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1BWF9ERVNLVE9QX1BBUlRJQ0lQQU5UU31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7I2lmIF90aGlzLnNob3dfbnVtYmVyX29mX21lc3NhZ2VzfVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGhyZWFkLW1lc3NhZ2UtY291bnRcIj5cbiAgICAgICAgICAgICAgICAgIHthY3RpdmVUaHJlYWQ/Lm1lc3NhZ2VzPy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgID8gYWN0aXZlVGhyZWFkLm1lc3NhZ2VzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3ViamVjdC1zbmlwcGV0LWF0dGFjaG1lbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3ViamVjdC1zbmlwcGV0XCI+XG4gICAgICAgICAgICAgICAgICB7I2lmIHRocmVhZD8uc3ViamVjdH1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdWJqZWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAge3RocmVhZD8uc3ViamVjdH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic25pcHBldFwiIGNsYXNzOmRlbGV0ZWQ9e2lzRGVsZXRlZH0+XG4gICAgICAgICAgICAgICAgICAgIHtpc0RlbGV0ZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IGBTb3JyeSwgbG9va3MgbGlrZSB0aGlzIHRocmVhZCBpcyBjdXJyZW50bHkgdW5hdmFpbGFibGUuIEl0IG1heVxuICAgICAgICAgICAgICAgICAgICBoYXZlIGJlZW4gZGVsZXRlZCBpbiB5b3VyIHByb3ZpZGVyIGluYm94LmBcbiAgICAgICAgICAgICAgICAgICAgICA6ICF0aHJlYWQ/LnNuaXBwZXQgJiYgaXNEcmFmdFxuICAgICAgICAgICAgICAgICAgICAgID8gXCJUaGlzIGlzIGEgZHJhZnQgZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgIDogdGhyZWFkPy5zbmlwcGV0XG4gICAgICAgICAgICAgICAgICAgICAgPyB0aHJlYWQuc25pcHBldC5yZXBsYWNlKC9cXHUyMDBDIC9nLCBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7I2lmIE9iamVjdC5rZXlzKGF0dGFjaGVkRmlsZXMpLmxlbmd0aCA+IDB9XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXR0YWNobWVudFwiPlxuICAgICAgICAgICAgICAgICAgICB7I2VhY2ggT2JqZWN0LnZhbHVlcyhhdHRhY2hlZEZpbGVzKSBhcyBmaWxlc31cbiAgICAgICAgICAgICAgICAgICAgICB7I2VhY2ggZmlsZXMgYXMgZmlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246Y2xpY2s9eyhldmVudCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZFNlbGVjdGVkRmlsZShldmVudCwgZmlsZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmlsZS5maWxlbmFtZSB8fCBmaWxlLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgey9lYWNofVxuICAgICAgICAgICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzOmRhdGU9e190aGlzLnNob3dfcmVjZWl2ZWRfdGltZXN0YW1wfVxuICAgICAgICAgICAgICAgIGNsYXNzOmFjdGlvbi1pY29ucz17X3RoaXMuc2hvd190aHJlYWRfYWN0aW9uc30+XG4gICAgICAgICAgICAgICAgeyNpZiBhY3RpdmVUaHJlYWQuaGFzX2F0dGFjaG1lbnRzICYmIE9iamVjdC5rZXlzKGF0dGFjaGVkRmlsZXMpLmxlbmd0aCA+IDB9XG4gICAgICAgICAgICAgICAgICA8c3Bhbj48QXR0YWNobWVudEljb24gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICB7I2lmIF90aGlzLnNob3dfdGhyZWFkX2FjdGlvbnN9XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVsZXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRlbGV0ZSB0aHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJEZWxldGUgdGhyZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbjpjbGlja3xzdG9wUHJvcGFnYXRpb249e2RlbGV0ZUVtYWlsfT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHJhc2hJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVhZC1zdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtgTWFyayB0aHJlYWQgYXMgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVRocmVhZC51bnJlYWQgPyBcIlwiIDogXCJ1blwiXG4gICAgICAgICAgICAgICAgICAgICAgfXJlYWRgfVxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2BNYXJrIHRocmVhZCBhcyAke1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlVGhyZWFkLnVucmVhZCA/IFwiXCIgOiBcInVuXCJcbiAgICAgICAgICAgICAgICAgICAgICB9cmVhZGB9XG4gICAgICAgICAgICAgICAgICAgICAgb246Y2xpY2t8c3RvcFByb3BhZ2F0aW9uPXt0b2dnbGVVbnJlYWRTdGF0dXN9PlxuICAgICAgICAgICAgICAgICAgICAgIHsjaWYgYWN0aXZlVGhyZWFkLnVucmVhZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNYXJrUmVhZEljb24gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFya1VucmVhZEljb24gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHs6ZWxzZSBpZiBfdGhpcy5zaG93X3JlY2VpdmVkX3RpbWVzdGFtcH1cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0UHJldmlld0RhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUodGhyZWFkLmxhc3RfbWVzc2FnZV90aW1lc3RhbXAgKiAxMDAwKSxcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvYXdhaXR9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvaWZ9XG4gICAgICB7L2lmfVxuICAgIHsvYXdhaXR9XG4gIHs6ZWxzZSBpZiBfdGhpcy5tZXNzYWdlfVxuICAgIHsjaWYgT2JqZWN0LmtleXMoX3RoaXMubWVzc2FnZSkubGVuZ3RoID4gMH1cbiAgICAgIDxkaXYgY2xhc3M9XCJlbWFpbC1yb3cgZXhwYW5kZWQgc2luZ3VsYXJcIj5cbiAgICAgICAgPGhlYWRlcj57X3RoaXMubWVzc2FnZT8uc3ViamVjdH08L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImluZGl2aWR1YWwtbWVzc2FnZSBleHBhbmRlZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLWhlYWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLWZyb20tdG9cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF2YXRhci1pbmZvXCI+XG4gICAgICAgICAgICAgICAgeyNpZiBfdGhpcy5zaG93X2NvbnRhY3RfYXZhdGFyfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlZmF1bHQtYXZhdGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxueWxhcy1jb250YWN0LWltYWdlXG4gICAgICAgICAgICAgICAgICAgICAge2NvbnRhY3RfcXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgY29udGFjdD17YWN0aXZlTWVzc2FnZUNvbnRhY3R9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLWZyb21cIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgID57dXNlckVtYWlsICYmIF90aGlzLm1lc3NhZ2U/LmZyb21bMF0uZW1haWwgPT09IHVzZXJFbWFpbFxuICAgICAgICAgICAgICAgICAgICAgID8gXCJtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdGhpcy5tZXNzYWdlPy5mcm9tWzBdPy5uYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5tZXNzYWdlPy5mcm9tWzBdPy5lbWFpbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8IS0tIHRvb2x0aXAgY29tcG9uZW50IC0tPlxuICAgICAgICAgICAgICAgICAgPG55bGFzLXRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgb246dG9nZ2xlVG9vbHRpcD17c2V0VG9vbHRpcH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e190aGlzLm1lc3NhZ2U/LmlkfVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3Rvb2x0aXBfaWQ9e2N1cnJlbnRUb29sdGlwSWR9XG4gICAgICAgICAgICAgICAgICAgIGljb249e0Ryb3Bkb3duU3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtfdGhpcy5tZXNzYWdlPy5mcm9tWzBdLmVtYWlsfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS10b1wiPlxuICAgICAgICAgICAgICAgIHsjYXdhaXQgZ2V0QWxsUmVjaXBpZW50cyggeyB0bzogX3RoaXMubWVzc2FnZS50bywgY2M6IF90aGlzLm1lc3NhZ2UuY2MsIGJjYzogX3RoaXMubWVzc2FnZS5iY2MgfSwgKSB0aGVuIGFsbFJlY2lwaWVudHN9XG4gICAgICAgICAgICAgICAgICB7I2VhY2ggYWxsUmVjaXBpZW50cy5zbGljZSgwLCBQQVJUSUNJUEFOVFNfVE9fVFJVTkNBVEUpIGFzIHJlY2lwaWVudCwgaX1cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgeyNpZiBpID09PSAwfVxuICAgICAgICAgICAgICAgICAgICAgICAge2B0byAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy55b3UgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjaXBpZW50LmVtYWlsID09PSBfdGhpcy55b3UuZW1haWxfYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJNZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICB7OmVsc2UgaWYgcmVjaXBpZW50Ll90eXBlID09PSBcImNjXCIgJiYgaSA9PT0gX3RoaXMubWVzc2FnZS50by5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYzpcbiAgICAgICAgICAgICAgICAgICAgICB7OmVsc2UgaWYgcmVjaXBpZW50Ll90eXBlID09PSBcImJjY1wiICYmIGkgPT09IF90aGlzLm1lc3NhZ2UudG8ubGVuZ3RoICsgX3RoaXMubWVzc2FnZS5jYy5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgICAgICBiY2M6XG4gICAgICAgICAgICAgICAgICAgICAgey9pZn1cblxuICAgICAgICAgICAgICAgICAgICAgIHsjaWYgcmVjaXBpZW50LmVtYWlsICYmIHJlY2lwaWVudC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAge3JlY2lwaWVudC5uYW1lID8/IF90aGlzLnlvdS5uYW1lfSAmbHQ7e3JlY2lwaWVudC5lbWFpbH0mZ3Q7XG4gICAgICAgICAgICAgICAgICAgICAgezplbHNlIGlmIHJlY2lwaWVudC5lbWFpbCAmJiAhcmVjaXBpZW50Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVjaXBpZW50LmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgICAgICAgICAgIHsjaWYgYWxsUmVjaXBpZW50cy5sZW5ndGggPiBQQVJUSUNJUEFOVFNfVE9fVFJVTkNBVEV9XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPG55bGFzLXRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOnRvZ2dsZVRvb2x0aXA9e3NldFRvb2x0aXB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17YHNob3ctbW9yZS1wYXJ0aWNpcGFudHMtJHtfdGhpcy5tZXNzYWdlLmlkfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3Rvb2x0aXBfaWQ9e2N1cnJlbnRUb29sdGlwSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtEcm9wZG93blN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e2BBbmQgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsUmVjaXBpZW50cy5sZW5ndGggLSBQQVJUSUNJUEFOVFNfVE9fVFJVTkNBVEVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gbW9yZWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtgJHthZ2dyZWdhdGVSZWNpcGllbnRzU3RyaW5nKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxSZWNpcGllbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgKX1gfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgey9hd2FpdH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgIHsjaWYgX3RoaXMuc2hvd19yZWNlaXZlZF90aW1lc3RhbXB9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2UtZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtmb3JtYXRFeHBhbmRlZERhdGUobmV3IERhdGUoX3RoaXMubWVzc2FnZS5kYXRlICogMTAwMCkpfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICA8ZGl2IGFyaWEtbGFiZWw9XCJFbWFpbCBBY3Rpb25zXCIgcm9sZT1cInRvb2xiYXJcIj5cbiAgICAgICAgICAgICAgICB7I2lmIF90aGlzLnNob3dfcmVwbHl9XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVwbHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcIlJlcGx5XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17XCJSZXBseVwifVxuICAgICAgICAgICAgICAgICAgICAgIG9uOmNsaWNrfHN0b3BQcm9wYWdhdGlvbj17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVSZXBseUNsaWNrKGUsIF90aGlzLm1lc3NhZ2UsIFwicmVwbHlcIil9PlxuICAgICAgICAgICAgICAgICAgICAgIDxSZXBseUljb24gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgIHsjaWYgX3RoaXMuc2hvd19yZXBseV9hbGwgJiYgY2FuUmVwbHlBbGwoX3RoaXMubWVzc2FnZSl9XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVwbHktYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XCJSZXBseSBhbGxcIn1cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtcIlJlcGx5IGFsbFwifVxuICAgICAgICAgICAgICAgICAgICAgIG9uOmNsaWNrfHN0b3BQcm9wYWdhdGlvbj17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVSZXBseUNsaWNrKGUsIF90aGlzLm1lc3NhZ2UsIFwicmVwbHlfYWxsXCIpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8UmVwbHlBbGxJY29uIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICB7I2lmIF90aGlzLnNob3dfZm9yd2FyZH1cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3J3YXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkZvcndhcmRcIlxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJGb3J3YXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbjpjbGlja3xzdG9wUHJvcGFnYXRpb249eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRm9yd2FyZENsaWNrKGUsIG1lc3NhZ2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8Rm9yd2FyZEljb24gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1ib2R5XCI+XG4gICAgICAgICAgICB7I2lmIF90aGlzLmNsZWFuX2NvbnZlcnNhdGlvbiAmJiBfdGhpcy5tZXNzYWdlLmNvbnZlcnNhdGlvbn1cbiAgICAgICAgICAgICAge0BodG1sIERPTVB1cmlmeS5zYW5pdGl6ZShfdGhpcy5tZXNzYWdlPy5jb252ZXJzYXRpb24gPz8gXCJcIil9XG4gICAgICAgICAgICB7OmVsc2UgaWYgX3RoaXMubWVzc2FnZX1cbiAgICAgICAgICAgICAgPG55bGFzLW1lc3NhZ2UtYm9keVxuICAgICAgICAgICAgICAgIG1lc3NhZ2U9e190aGlzLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgYm9keT17X3RoaXMubWVzc2FnZS5ib2R5fVxuICAgICAgICAgICAgICAgIG9uOmRvd25sb2FkQ2xpY2tlZD17aGFuZGxlRG93bmxvYWRGcm9tTWVzc2FnZX0gLz5cbiAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgey9pZn1cbiAgey9pZn1cbjwvbWFpbj5cbiJdLCJuYW1lcyI6WyJpbml0aWFsaXplIiwiX19zcHJlYWRQcm9wcyIsIl9fc3ByZWFkVmFsdWVzIiwidGhpcyIsIkRPTVB1cmlmeS5zYW5pdGl6ZSIsIkRyb3Bkb3duU3ltYm9sIl0sIm1hcHBpbmdzIjoiK09BQWEsSUFBaUIsT0FBTyxlQUFlLE9BQU8sS0FDekQsT0FBTyxnQkFFVCxPQUFPLGVBQWUsT0FBUyxDQUFDLEtBQWlCLElBQVMsSUFDcEQsZ0JBQWUsSUFBSSxTQUdoQixJQUFlLEVBQU0sR0FBRyxJQ1BqQyxZQUFnQixFQUVoQixZQUFnQixFQUFLLEVBQUssQ0FFdEIsU0FBVyxLQUFLLEdBQ1osRUFBSSxHQUFLLEVBQUksR0FDakIsTUFBTyxHQUVYLFlBQW9CLEVBQU8sQ0FDdkIsTUFBTyxJQUFTLE1BQU8sSUFBVSxVQUFZLE1BQU8sR0FBTSxNQUFTLFdBT3ZFLFlBQWEsRUFBSSxDQUNiLE1BQU8sS0FFWCxhQUF3QixDQUNwQixNQUFPLFFBQU8sT0FBTyxNQUV6QixZQUFpQixFQUFLLENBQ2xCLEVBQUksUUFBUSxJQUVoQixZQUFxQixFQUFPLENBQ3hCLE1BQU8sT0FBTyxJQUFVLFdBRTVCLFlBQXdCLEVBQUcsRUFBRyxDQUMxQixNQUFPLElBQUssRUFBSSxHQUFLLEVBQUksSUFBTSxHQUFPLEdBQUssTUFBTyxJQUFNLFVBQWEsTUFBTyxJQUFNLFdBRXRGLEdBQUksSUFDSixZQUF1QixFQUFhLEVBQUssQ0FDckMsTUFBSyxL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
