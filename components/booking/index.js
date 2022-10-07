(function (ce, I) {
  typeof exports == "object" && typeof module != "undefined"
    ? (module.exports = I())
    : typeof define == "function" && define.amd
    ? define(I)
    : ((ce = typeof globalThis != "undefined" ? globalThis : ce || self),
      (ce.app = I()));
})(this, function () {
  "use strict";
  const ce = window.customElements.define.bind(window.customElements);
  window.customElements.define = (e, ...t) => {
    if (!customElements.get(e)) return ce(e, ...t);
  };
  function I() {}
  function Te(e, t) {
    for (const n in t) e[n] = t[n];
    return e;
  }
  function be(e) {
    return e();
  }
  function Ne() {
    return Object.create(null);
  }
  function x(e) {
    e.forEach(be);
  }
  function ge(e) {
    return typeof e == "function";
  }
  function Ae(e, t) {
    return e != e
      ? t == t
      : e !== t || (e && typeof e == "object") || typeof e == "function";
  }
  function Nt(e, t) {
    return e != e ? t == t : e !== t;
  }
  function At(e) {
    return Object.keys(e).length === 0;
  }
  function Le(e, ...t) {
    if (e == null) return I;
    const n = e.subscribe(...t);
    return n.unsubscribe ? () => n.unsubscribe() : n;
  }
  function ye(e, t, n) {
    e.$$.on_destroy.push(Le(t, n));
  }
  function Ce(e) {
    const t = {};
    for (const n in e) n[0] !== "$" && (t[n] = e[n]);
    return t;
  }
  function d(e, t) {
    e.appendChild(t);
  }
  function w(e, t, n) {
    e.insertBefore(t, n || null);
  }
  function O(e) {
    e.parentNode.removeChild(e);
  }
  function ae(e, t) {
    for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t);
  }
  function y(e) {
    return document.createElement(e);
  }
  function N(e) {
    return document.createTextNode(e);
  }
  function P() {
    return N(" ");
  }
  function Re() {
    return N("");
  }
  function U(e, t, n, i) {
    return e.addEventListener(t, n, i), () => e.removeEventListener(t, n, i);
  }
  function j(e, t, n) {
    n == null
      ? e.removeAttribute(t)
      : e.getAttribute(t) !== n && e.setAttribute(t, n);
  }
  function Ie(e, t, n) {
    t in e
      ? (e[t] = typeof e[t] == "boolean" && n === "" ? !0 : n)
      : j(e, t, n);
  }
  function De(e) {
    return e === "" ? null : +e;
  }
  function Lt(e) {
    return Array.from(e.childNodes);
  }
  function Y(e, t) {
    (t = "" + t), e.wholeText !== t && (e.data = t);
  }
  function $(e, t) {
    e.value = t == null ? "" : t;
  }
  function Q(e, t, n) {
    e.classList[n ? "add" : "remove"](t);
  }
  function Je(e) {
    const t = {};
    for (const n of e) t[n.name] = n.value;
    return t;
  }
  let ue;
  function fe(e) {
    ue = e;
  }
  function ze() {
    if (!ue)
      throw new Error("Function called outside component initialization");
    return ue;
  }
  function Ct(e) {
    ze().$$.on_mount.push(e);
  }
  const de = [],
    Me = [],
    he = [],
    Ye = [],
    He = Promise.resolve();
  let ve = !1;
  function Fe() {
    ve || ((ve = !0), He.then(D));
  }
  function Rt() {
    return Fe(), He;
  }
  function ke(e) {
    he.push(e);
  }
  const Se = new Set();
  let pe = 0;
  function D() {
    const e = ue;
    do {
      for (; pe < de.length; ) {
        const t = de[pe];
        pe++, fe(t), It(t.$$);
      }
      for (fe(null), de.length = 0, pe = 0; Me.length; ) Me.pop()();
      for (let t = 0; t < he.length; t += 1) {
        const n = he[t];
        Se.has(n) || (Se.add(n), n());
      }
      he.length = 0;
    } while (de.length);
    for (; Ye.length; ) Ye.pop()();
    (ve = !1), Se.clear(), fe(e);
  }
  function It(e) {
    if (e.fragment !== null) {
      e.update(), x(e.before_update);
      const t = e.dirty;
      (e.dirty = [-1]),
        e.fragment && e.fragment.p(e.ctx, t),
        e.after_update.forEach(ke);
    }
  }
  const Dt = new Set();
  function Jt(e, t) {
    e && e.i && (Dt.delete(e), e.i(t));
  }
  function zt(e, t, n, i) {
    const { fragment: l, on_mount: r, on_destroy: o, after_update: s } = e.$$;
    l && l.m(t, n),
      i ||
        ke(() => {
          const c = r.map(be).filter(ge);
          o ? o.push(...c) : x(c), (e.$$.on_mount = []);
        }),
      s.forEach(ke);
  }
  function Mt(e, t) {
    const n = e.$$;
    n.fragment !== null &&
      (x(n.on_destroy),
      n.fragment && n.fragment.d(t),
      (n.on_destroy = n.fragment = null),
      (n.ctx = []));
  }
  function Yt(e, t) {
    e.$$.dirty[0] === -1 && (de.push(e), Fe(), e.$$.dirty.fill(0)),
      (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
  }
  function Ue(e, t, n, i, l, r, o, s = [-1]) {
    const c = ue;
    fe(e);
    const a = (e.$$ = {
      fragment: null,
      ctx: null,
      props: r,
      update: I,
      not_equal: l,
      bound: Ne(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(t.context || (c ? c.$$.context : [])),
      callbacks: Ne(),
      dirty: s,
      skip_bound: !1,
      root: t.target || c.$$.root,
    });
    o && o(a.root);
    let u = !1;
    if (
      ((a.ctx = n
        ? n(e, t.props || {}, (m, h, ..._) => {
            const p = _.length ? _[0] : h;
            return (
              a.ctx &&
                l(a.ctx[m], (a.ctx[m] = p)) &&
                (!a.skip_bound && a.bound[m] && a.bound[m](p), u && Yt(e, m)),
              h
            );
          })
        : []),
      a.update(),
      (u = !0),
      x(a.before_update),
      (a.fragment = i ? i(a.ctx) : !1),
      t.target)
    ) {
      if (t.hydrate) {
        const m = Lt(t.target);
        a.fragment && a.fragment.l(m), m.forEach(O);
      } else a.fragment && a.fragment.c();
      t.intro && Jt(e.$$.fragment),
        zt(e, t.target, t.anchor, t.customElement),
        D();
    }
    fe(c);
  }
  let we;
  typeof HTMLElement == "function" &&
    (we = class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        const { on_mount: e } = this.$$;
        this.$$.on_disconnect = e.map(be).filter(ge);
        for (const t in this.$$.slotted) this.appendChild(this.$$.slotted[t]);
      }
      attributeChangedCallback(e, t, n) {
        this[e] = n;
      }
      disconnectedCallback() {
        x(this.$$.on_disconnect);
      }
      $destroy() {
        Mt(this, 1), (this.$destroy = I);
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
          !At(e) &&
          ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
      }
    });
  const ie = [];
  function Ht(e, t) {
    return { subscribe: re(e, t).subscribe };
  }
  function re(e, t = I) {
    let n;
    const i = new Set();
    function l(s) {
      if (Ae(e, s) && ((e = s), n)) {
        const c = !ie.length;
        for (const a of i) a[1](), ie.push(a, e);
        if (c) {
          for (let a = 0; a < ie.length; a += 2) ie[a][0](ie[a + 1]);
          ie.length = 0;
        }
      }
    }
    function r(s) {
      l(s(e));
    }
    function o(s, c = I) {
      const a = [s, c];
      return (
        i.add(a),
        i.size === 1 && (n = t(l) || I),
        s(e),
        () => {
          i.delete(a), i.size === 0 && (n(), (n = null));
        }
      );
    }
    return { set: l, update: r, subscribe: o };
  }
  function Ft(e, t, n) {
    const i = !Array.isArray(e),
      l = i ? [e] : e,
      r = t.length < 2;
    return Ht(n, (o) => {
      let s = !1;
      const c = [];
      let a = 0,
        u = I;
      const m = () => {
          if (a) return;
          u();
          const _ = t(i ? c[0] : c, o);
          r ? o(_) : (u = ge(_) ? _ : I);
        },
        h = l.map((_, p) =>
          Le(
            _,
            (v) => {
              (c[p] = v), (a &= ~(1 << p)), s && m();
            },
            () => {
              a |= 1 << p;
            },
          ),
        );
      return (
        (s = !0),
        m(),
        function () {
          x(h), u();
        }
      );
    });
  }
  function Ut() {
    return re({});
  }
  const Oe = Ut();
  var Gt = Object.defineProperty,
    Wt = Object.defineProperties,
    Bt = Object.getOwnPropertyDescriptors,
    Ge = Object.getOwnPropertySymbols,
    Qt = Object.prototype.hasOwnProperty,
    Zt = Object.prototype.propertyIsEnumerable,
    We = (e, t, n) =>
      t in e
        ? Gt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (e[t] = n),
    Xt = (e, t) => {
      for (var n in t || (t = {})) Qt.call(t, n) && We(e, n, t[n]);
      if (Ge) for (var n of Ge(t)) Zt.call(t, n) && We(e, n, t[n]);
      return e;
    },
    Kt = (e, t) => Wt(e, Bt(t));
  async function Z(e) {
    var t;
    if (!e.ok) {
      const n = await e.json().then((r) => r),
        i =
          ((t = n == null ? void 0 : n.response) == null ? void 0 : t.error) ||
          (n == null ? void 0 : n.message),
        l = new Error(i);
      return (
        (l.name = n.name), Promise.reject({ message: l, statusCode: e.status })
      );
    }
    return e.json();
  }
  function X(e = { component_id: "" }) {
    return {
      method: e.method || "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Component-Id": e.component_id || "",
        "X-Access-Token": e.access_token || "",
      },
      body: e.body ? JSON.stringify(e.body) : void 0,
    };
  }
  function ee(e, t) {
    throw (console.error(t), Oe.update((n) => Kt(Xt({}, n), { [e]: t })), t);
  }
  const Be = { "001": "", "002": "ireland-", "003": "canada-" };
  function K(e) {
    let t = "";
    if (e.substring(3, 4) === "-") {
      const i = e.substring(0, 3);
      typeof Be[i] != "undefined" && (t = Be[i]);
    }
    return `https://${t}web-components.nylas.com/middleware`;
  }
  function oe(e) {}
  async function Vt(e, t) {
    return fetch(
      `${K(t.component_id || "")}/agenda/events`,
      X({
        method: "POST",
        component_id: t.component_id,
        access_token: t.access_token,
        body: e,
      }),
    )
      .then((n) => Z(n))
      .then((n) => n.response);
  }
  var qt = Object.defineProperty,
    xt = Object.defineProperties,
    $t = Object.getOwnPropertyDescriptors,
    Qe = Object.getOwnPropertySymbols,
    en = Object.prototype.hasOwnProperty,
    tn = Object.prototype.propertyIsEnumerable,
    Ze = (e, t, n) =>
      t in e
        ? qt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (e[t] = n),
    Xe = (e, t) => {
      for (var n in t || (t = {})) en.call(t, n) && Ze(e, n, t[n]);
      if (Qe) for (var n of Qe(t)) tn.call(t, n) && Ze(e, n, t[n]);
      return e;
    },
    Ke = (e, t) => xt(e, $t(t));
  const Ve = (e, t, n) => {
    if (e.thread_ids) {
      const l = e.thread_ids.slice(n, n + t);
      return Promise.all(
        l.map(async (r) => {
          const o = `${K(e.component_id)}/threads/${r}?view=expanded`;
          return await fetch(o, X(e))
            .then((s) => Z(s))
            .then((s) => s.response)
            .then((s) =>
              Ke(Xe({}, s), {
                messages: s.messages.filter(
                  (c) => c.from.length !== 0 || c.to.length !== 0,
                ),
              }),
            )
            .catch((s) => ee(e.component_id, s));
        }),
      );
    }
    let i = `${K(
      e.component_id,
    )}/threads?view=expanded&not_in=trash&limit=${t}&offset=${n}`;
    return (
      e.query &&
        Object.entries(e.query).forEach(
          (l) => (i = i.concat(`&${l[0]}=${l[1]}`)),
        ),
      fetch(i, X(e))
        .then((l) => Z(l))
        .then((l) => l.response)
        .then((l) =>
          l.map((r) =>
            Ke(Xe({}, r), {
              messages: r.messages.filter(
                (o) => o.from.length !== 0 || o.to.length !== 0,
              ),
            }),
          ),
        )
        .catch((l) => ee(e.component_id, l))
    );
  };
  function qe(e) {
    let t = `${K(
      e.component_id,
    )}/threads?view=expanded&not_in=trash&view=count`;
    return (
      e.query &&
        Object.entries(e.query).forEach(
          (n) => (t = t.concat(`&${n[0]}=${n[1]}`)),
        ),
      e.keywordToSearch && (t += `&q=${e.keywordToSearch}`),
      fetch(t, X(e))
        .then((n) => Z(n))
        .then((n) => n.response.count)
    );
  }
  const nn = (e) => {
      const t = `${K(e.component_id)}/threads/search?q=${
        e.keywordToSearch
      }&view=expanded&limit=${e.query.limit}&offset=${e.query.offset}`;
      return fetch(t, X(e))
        .then(async (n) => Z(n))
        .then((n) => n.response)
        .catch((n) => ee(e.component_id, n));
    },
    rn = (e, t) =>
      fetch(
        `${K(e.component_id)}/threads/${t.id}`,
        X({
          method: "PUT",
          component_id: e.component_id,
          access_token: e.access_token,
          body: {
            unread: t.unread,
            starred: t.starred,
            folder_id: t.folder_id,
            label_ids: t.label_ids,
          },
        }),
      )
        .then((n) => Z(n))
        .then((n) => n.response)
        .catch((n) => ee(e.component_id, n)),
    on = async (e, t) =>
      await fetch(`${K(e)}/manifest`, X({ access_token: t, component_id: e }))
        .then(Z)
        .then((n) => n.component.theming)
        .catch((n) => ee(e, n)),
    ln = async (e, t, n) =>
      await fetch(
        `${K(e)}/send`,
        X({ method: "POST", component_id: e, access_token: n, body: t }),
      )
        .then((i) => Z(i))
        .then((i) => i.response)
        .catch((i) => ee(e, i));
  var sn = Object.defineProperty,
    xe = Object.getOwnPropertySymbols,
    cn = Object.prototype.hasOwnProperty,
    an = Object.prototype.propertyIsEnumerable,
    $e = (e, t, n) =>
      t in e
        ? sn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (e[t] = n),
    et = (e, t) => {
      for (var n in t || (t = {})) cn.call(t, n) && $e(e, n, t[n]);
      if (xe) for (var n of xe(t)) an.call(t, n) && $e(e, n, t[n]);
      return e;
    };
  const un = async (e) =>
      fetch(
        `${K(e.component_id)}/calendars/availability`,
        X({
          method: "POST",
          component_id: e.component_id,
          access_token: e.access_token,
          body: e.body,
        }),
      )
        .then(async (t) => {
          const n = await Z(t);
          return (
            (n.response.time_slots = n.response.time_slots.map(
              (i) => (
                (i.start_time = i.start || 0),
                (i.end_time = i.end || 0),
                delete i.start,
                delete i.end,
                i
              ),
            )),
            n.response
          );
        })
        .catch((t) => ee(e.component_id, t)),
    fn = async (e) =>
      fetch(
        `${K(e.component_id)}/calendars/availability/consecutive`,
        X({
          method: "POST",
          component_id: e.component_id,
          access_token: e.access_token,
          body: e.body,
        }),
      )
        .then(async (t) => {
          var n;
          const l =
              ((n = (await Z(t)).response) == null
                ? void 0
                : n.map(
                    (s) => (
                      (s = s.map(
                        (c) => (
                          (c.start_time = new Date(c.start_time * 1e3)),
                          (c.end_time = new Date(c.end_time * 1e3)),
                          c
                        ),
                      )),
                      s
                    ),
                  )) || [],
            r = dn(l, e.body.events);
          return _n(r);
        })
        .catch((t) => ee(e.component_id, t));
  function dn(e, t) {
    return e.map((n) =>
      n.map((i) =>
        et(
          et({}, i),
          t.find(
            (l) =>
              l.participantEmails.length === i.emails.length &&
              l.participantEmails.every((r) => i.emails.includes(r)),
          ),
        ),
      ),
    );
  }
  function _n(e) {
    const t = new Set();
    return e.filter((n) => {
      const i = `${n[0].start_time}_${n[n.length - 1].end_time}`;
      return t.has(i) ? !1 : (t.add(i), !0);
    });
  }
  var mn = Object.defineProperty,
    tt = Object.getOwnPropertySymbols,
    hn = Object.prototype.hasOwnProperty,
    pn = Object.prototype.propertyIsEnumerable,
    nt = (e, t, n) =>
      t in e
        ? mn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (e[t] = n),
    bn = (e, t) => {
      for (var n in t || (t = {})) hn.call(t, n) && nt(e, n, t[n]);
      if (tt) for (var n of tt(t)) pn.call(t, n) && nt(e, n, t[n]);
      return e;
    };
  function gn() {
    const e = (n, i) => {
        var l, r;
        const o = JSON.parse(i),
          s = bn({}, o);
        if (
          (delete s.forceReload,
          (i = JSON.stringify(s)),
          !(
            !o.component_id ||
            !((l = o == null ? void 0 : o.body) == null
              ? void 0
              : l.start_time) ||
            !((r = o == null ? void 0 : o.body) == null ? void 0 : r.end_time)
          ))
        ) {
          if (!n[i] || o.forceReload) {
            const c = un(o);
            t.update((a) => ((a[i] = c), a)), (n[i] = c);
          }
          return n[i];
        }
      },
      t = re(new Proxy({}, { get: e }));
    return t;
  }
  gn();
  function yn() {
    const e = (n, i) => {
        var l, r;
        const o = JSON.parse(i);
        if (
          !(
            !o.component_id ||
            !((l = o == null ? void 0 : o.body) == null
              ? void 0
              : l.start_time) ||
            !((r = o == null ? void 0 : o.body) == null ? void 0 : r.end_time)
          )
        ) {
          if (!n[i]) {
            const s = fn(o);
            t.update((c) => ((c[i] = s), c)), (n[i] = s);
          }
          return n[i];
        }
      },
      t = re(new Proxy({}, { get: e }));
    return t;
  }
  yn();
  var vn = Object.defineProperty,
    it = Object.getOwnPropertySymbols,
    kn = Object.prototype.hasOwnProperty,
    Sn = Object.prototype.propertyIsEnumerable,
    rt = (e, t, n) =>
      t in e
        ? vn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (e[t] = n),
    te = (e, t) => {
      for (var n in t || (t = {})) kn.call(t, n) && rt(e, n, t[n]);
      if (it) for (var n of it(t)) Sn.call(t, n) && rt(e, n, t[n]);
      return e;
    };
  async function ot(e) {
    const t = [];
    for (let n = 0; n < e; n++) t.push({ isLoaded: !1, threads: [] });
    return t;
  }
  function wn() {
    const { subscribe: e, set: t, update: n } = re({});
    let i = {},
      l;
    return {
      subscribe: e,
      set: t,
      getThreads: async (r, o, s, c = !1) => {
        const a = JSON.stringify(r);
        if (!r.component_id && !r.access_token) return [];
        if (l === void 0 || c) {
          const u = r.thread_ids ? r.thread_ids.length : await qe(r).catch(oe);
          u && (l = u);
        }
        if (!Array.isArray(i[a]) || c) {
          const u = Math.ceil(l / s);
          i[a] = await ot(u);
        }
        if (typeof i[a][o] == "undefined") return [];
        if (!i[a][o].isLoaded) {
          const u = await Ve(r, s, o * s).catch(oe);
          u && ((i[a][o].threads = u), (i[a][o].isLoaded = !0));
        }
        return n((u) => ((u[a] = i[a]), te({}, u))), i[a][o].threads;
      },
      getNumberOfItems: async (r) => {
        if (!r.component_id && !r.access_token) return 0;
        if (typeof l == "undefined") {
          const o = await qe(r).catch(oe);
          o && (l = o);
        }
        return l;
      },
      getThreadsWithSearchKeyword: async (r, o = !1) => {
        if (!r.component_id && !r.access_token) return [];
        const s = JSON.stringify(r);
        if (
          ((!Array.isArray(i[s]) || o) && (i[s] = await ot(1)),
          !i[s][0].isLoaded || o)
        ) {
          const c = await nn(r).catch(oe);
          c && ((i[s][0].threads = c), (i[s][0].isLoaded = !0));
        }
        return n((c) => ((c[s] = i[s]), te({}, c))), i[s][0].threads;
      },
      updateThread: async (r, o, s, c, a) => {
        const u = await rn(r, s).catch(oe);
        if (!i[o][c].isLoaded) {
          const m = await Ve(JSON.parse(o), a, c * a).catch(oe);
          m && ((i[o][c].threads = m), (i[o][c].isLoaded = !0));
        }
        return (
          (i[o][c].threads = i[o][c].threads.map(
            (m) => (u && m.id === u.id && (m = Object.assign(m, u)), m),
          )),
          n((m) => ((m[o] = i[o]), te({}, m))),
          i[o][c].threads
        );
      },
      updateThreadSelection: (r, o, s) => {
        const c = i[r][o].threads;
        if (s) {
          const a = c.find((u) => u.id === s);
          a && (a.selected = !a.selected);
        } else {
          const a = c.some((u) => u.selected);
          for (const u of c) u.selected = !a;
        }
        return n((a) => ((a[r] = i[r]), te({}, a))), i[r][o].threads;
      },
      reset: () => {
        (i = {}), t({});
      },
      hydrateMessageInThread: (r, o, s) => {
        var c, a, u;
        const m = JSON.stringify(o),
          h =
            (a = (c = i[m][s]) == null ? void 0 : c.threads) == null
              ? void 0
              : a.find((_) => _.id === r.thread_id);
        if (h) {
          const _ =
            (u = h.messages) == null ? void 0 : u.find((p) => p.id === r.id);
          _
            ? ((_.body = r.body),
              n((p) => {
                if (r.thread_id) {
                  let v = p[m][s].threads.find((b) => b.id === h.id);
                  v && (v = JSON.parse(JSON.stringify(h)));
                }
                return te({}, p);
              }))
            : n((p) => {
                if (r.thread_id) {
                  let v = p[m][s].threads.find((b) => b.id === h.id);
                  if (v) {
                    const b = h.messages;
                    b.push(r),
                      (h.messages = b),
                      (h.snippet = r.snippet),
                      (h.drafts = h.drafts.filter((S) => S.id !== r.id)),
                      (v = JSON.parse(JSON.stringify(h)));
                  }
                }
                return te({}, p);
              });
        }
        return i[m][s].threads;
      },
      hydrateDraftInThread: (r, o, s) => {
        var c, a, u;
        const m = JSON.stringify(o),
          h =
            (a = (c = i[m][s]) == null ? void 0 : c.threads) == null
              ? void 0
              : a.find((_) => _.id === r.thread_id);
        if (h) {
          const _ =
            (u = h.drafts) == null ? void 0 : u.find((p) => p.id === r.id);
          if (r.thread_id) {
            if (_) Object.assign(_, r);
            else {
              const p = h.drafts;
              p.push(r), (h.drafts = p);
            }
            n((p) => {
              let v = p[m][s].threads.find((b) => b.id === h.id);
              return v && (v = JSON.parse(JSON.stringify(h))), te({}, p);
            });
          }
        }
        return i[m][s].threads;
      },
    };
  }
  const On = wn();
  Ft(On, (e) => {
    const t = {};
    return (
      Object.entries(e).forEach(
        ([n, i]) => (t[n] = i.map((l) => l.threads).flat()),
      ),
      t
    );
  });
  function En() {
    const e = (n, i) => {
        const l = JSON.parse(i);
        if (!!l.component_id) {
          if (!n[i]) {
            const r = on(l.component_id, l.access_token);
            t.update((o) => ((o[i] = r), o)), (n[i] = r);
          }
          return n[i];
        }
      },
      t = re(new Proxy({}, { get: e }));
    return t;
  }
  const Pn = En();
  function jn(e) {
    return (t, n) => {
      e.dispatchEvent &&
        e.dispatchEvent(new CustomEvent(t, { detail: n, composed: !0 }));
    };
  }
  function Ee(e, t, n) {
    return new Proxy(e, {
      get: (i, l) =>
        l === "toString" || l === "toJSON"
          ? () => JSON.stringify(i)
          : Reflect.get(i, l) !== void 0
          ? lt(Reflect.get(i, l), n[l])
          : t && l in t
          ? lt(t[l], n[l])
          : n[l],
      ownKeys: (i) => {
        const l = new Set([
          ...Reflect.ownKeys(i),
          ...Object.keys(t),
          ...Object.keys(n),
        ]);
        return Array.from(l);
      },
      getOwnPropertyDescriptor: (i, l) => {
        var r, o;
        let s = Reflect.getOwnPropertyDescriptor(i, l);
        return (
          s ||
            ((s =
              (o =
                (r = t && Object.getOwnPropertyDescriptor(t, l)) != null
                  ? r
                  : n && Object.getOwnPropertyDescriptor(n, l)) != null
                ? o
                : { configurable: !0, enumerable: !0, writable: !0 }),
            Reflect.defineProperty(i, l, s)),
          s
        );
      },
    });
  }
  function lt(e, t) {
    if (e) {
      if (typeof t == "boolean") return Tn(e);
      if (typeof t == "number") return Number(e);
      if (t instanceof Date) return new Date(e);
    }
    return e === void 0 ? (t != null ? t : null) : e;
  }
  function Tn(e) {
    return [!0, "true", "1"].includes(e);
  }
  function st(e) {
    let t, n, i, l, r, o;
    function s(u, m) {
      if (u[2] === "HostDomainNotAllowedError") return An;
      if (u[2] === "IncompatibleProperties") return Nn;
    }
    let c = s(e),
      a = c && c(e);
    return {
      c() {
        var u, m;
        (t = y("div")),
          a && a.c(),
          (n = P()),
          (i = y("span")),
          (i.textContent = "Debug info:"),
          (l = P()),
          (r = y("textarea")),
          j(i, "class", "details"),
          j(r, "class", "details"),
          (r.readOnly = !0),
          (r.value = o =
            `
      ` +
            e[2] +
            ": " +
            e[0] +
            `
      ` +
            ((m = (u = e[1].message) == null ? void 0 : u.message) != null
              ? m
              : "") +
            `
    `),
          j(t, "class", "message-container");
      },
      m(u, m) {
        w(u, t, m), a && a.m(t, null), d(t, n), d(t, i), d(t, l), d(t, r);
      },
      p(u, m) {
        var h, _;
        c === (c = s(u)) && a
          ? a.p(u, m)
          : (a && a.d(1), (a = c && c(u)), a && (a.c(), a.m(t, n))),
          m & 7 &&
            o !==
              (o =
                `
      ` +
                u[2] +
                ": " +
                u[0] +
                `
      ` +
                ((_ = (h = u[1].message) == null ? void 0 : h.message) != null
                  ? _
                  : "") +
                `
    `) &&
            (r.value = o);
      },
      d(u) {
        u && O(t), a && a.d();
      },
    };
  }
  function Nn(e) {
    let t;
    return {
      c() {
        (t = y("h3")),
          (t.textContent =
            "Your component properties do not work with each other.");
      },
      m(n, i) {
        w(n, t, i);
      },
      p: I,
      d(n) {
        n && O(t);
      },
    };
  }
  function An(e) {
    let t, n, i, l, r, o;
    return {
      c() {
        (t = y("h3")),
          (n = N(`You are trying to access this component from\xA0
        `)),
          (i = y("code")),
          (i.textContent = `${window.location.hostname}`),
          (l = N(`. The component's settings do not
        allow access from this domain.`)),
          (r = P()),
          (o = y("h4")),
          (o.innerHTML = `The list of allowed domains can be modified in your\xA0
        <a href="https://dashboard.nylas.com">Dashboard</a>.`);
      },
      m(s, c) {
        w(s, t, c), d(t, n), d(t, i), d(t, l), w(s, r, c), w(s, o, c);
      },
      p: I,
      d(s) {
        s && O(t), s && O(r), s && O(o);
      },
    };
  }
  function Ln(e) {
    let t,
      n = e[2] && e[3] && st(e);
    return {
      c() {
        n && n.c(), (t = Re()), (this.c = I);
      },
      m(i, l) {
        n && n.m(i, l), w(i, t, l);
      },
      p(i, [l]) {
        i[2] && i[3]
          ? n
            ? n.p(i, l)
            : ((n = st(i)), n.c(), n.m(t.parentNode, t))
          : n && (n.d(1), (n = null));
      },
      i: I,
      o: I,
      d(i) {
        n && n.d(i), i && O(t);
      },
    };
  }
  function Cn(e, t, n) {
    let i;
    ye(e, Oe, (h) => n(8, (i = h)));
    var l, r, o, s;
    let { id: c } = t,
      a,
      u;
    const m =
      window.location.href.includes("localhost") ||
      window.location.href.includes("127.0.0.1");
    return (
      (e.$$set = (h) => {
        "id" in h && n(0, (c = h.id));
      }),
      (e.$$.update = () => {
        e.$$.dirty & 499 &&
          (n(
            1,
            (a = n(4, (l = i[c])) !== null && l !== void 0 ? l : { name: "" }),
          ),
          n(
            2,
            (u =
              n(
                7,
                (s =
                  n(5, (r = a.name)) !== null && r !== void 0
                    ? r
                    : n(6, (o = a.message)) === null || o === void 0
                    ? void 0
                    : o.name),
              ) !== null && s !== void 0
                ? s
                : ""),
          ));
      }),
      [c, a, u, m, l, r, o, s, i]
    );
  }
  class Rn extends we {
    constructor(t) {
      super();
      (this.shadowRoot.innerHTML = `<style>.message-container{background:#fff6f6;border-radius:5px;box-shadow:0 0 0 1px #aa92a0 inset, 0 0 0 0 transparent;color:#9f3a38;font-size:1.25rem;padding:10px;margin:0 auto;transition:opacity 500ms ease, color 500ms ease,
      background-color 500ms ease, box-shadow 500ms ease,
      -webkit-box-shadow 500ms ease}.message-container *:focus{outline:5px auto Highlight;outline:5px auto -webkit-focus-ring-color}.details{color:#494949;font-size:0.75rem;width:100%}</style>`),
        Ue(
          this,
          {
            target: this.shadowRoot,
            props: Je(this.attributes),
            customElement: !0,
          },
          Cn,
          Ln,
          Nt,
          { id: 0 },
          null,
        ),
        t &&
          (t.target && w(t.target, this, t.anchor),
          t.props && (this.$set(t.props), D()));
    }
    static get observedAttributes() {
      return ["id"];
    }
    get id() {
      return this.$$.ctx[0];
    }
    set id(t) {
      this.$$set({ id: t }), D();
    }
  }
  customElements.define("nylas-error", Rn);
  const In = [
    { title: "Your Name", type: "text", required: !1 },
    {
      title: "Email Address",
      type: "text",
      required: !0,
      placeholder: "you@example.com",
    },
  ];
  var _e;
  (function (e) {
    (e.SHOW_MESSAGE = "show_message"), (e.SEND_MESSAGE = "send_message");
  })(_e || (_e = {}));
  function ct(e, t, n) {
    const i = e.slice();
    return (i[56] = t[n]), i;
  }
  function at(e, t, n) {
    const i = e.slice();
    return (i[59] = t[n]), (i[61] = n), i;
  }
  function ut(e, t, n) {
    const i = e.slice();
    return (i[47] = t[n]), (i[48] = t), (i[49] = n), i;
  }
  function ft(e, t, n) {
    const i = e.slice();
    return (i[50] = t[n]), (i[51] = t), (i[52] = n), i;
  }
  function dt(e, t, n) {
    const i = e.slice();
    return (i[53] = t[n]), i;
  }
  function Dn(e) {
    let t;
    return {
      c() {
        (t = y("p")),
          (t.textContent = `Select timeslots to view event information (You'll be able to review
        before you book)`);
      },
      m(n, i) {
        w(n, t, i);
      },
      p: I,
      d(n) {
        n && O(t);
      },
    };
  }
  function Jn(e) {
    let t,
      n,
      i,
      l = e[1].event_options,
      r = [];
    for (let o = 0; o < l.length; o += 1) r[o] = mt(ct(e, l, o));
    return {
      c() {
        (t = y("h2")),
          (t.textContent = "Select an option"),
          (n = P()),
          (i = y("ul"));
        for (let o = 0; o < r.length; o += 1) r[o].c();
        j(i, "class", "timeslots timeslot-options");
      },
      m(o, s) {
        w(o, t, s), w(o, n, s), w(o, i, s);
        for (let c = 0; c < r.length; c += 1) r[c].m(i, null);
      },
      p(o, s) {
        if (s[0] & 898) {
          l = o[1].event_options;
          let c;
          for (c = 0; c < l.length; c += 1) {
            const a = ct(o, l, c);
            r[c] ? r[c].p(a, s) : ((r[c] = mt(a)), r[c].c(), r[c].m(i, null));
          }
          for (; c < r.length; c += 1) r[c].d(1);
          r.length = l.length;
        }
      },
      d(o) {
        o && O(t), o && O(n), o && O(i), ae(r, o);
      },
    };
  }
  function zn(e) {
    let t,
      n,
      i,
      l,
      r,
      o,
      s,
      c,
      a = e[1].booking_label + "",
      u,
      m,
      h,
      _,
      p,
      v = e[3],
      b = [];
    for (let g = 0; g < v.length; g += 1) b[g] = vt(ft(e, v, g));
    let S = e[1].custom_fields.length && kt(e);
    return {
      c() {
        (t = y("h2")),
          (t.textContent = "Your Appointment Bookings"),
          (n = P()),
          (i = y("p")),
          (i.textContent = "Do you want to book the following?"),
          (l = P()),
          (r = y("ul"));
        for (let g = 0; g < b.length; g += 1) b[g].c();
        (o = P()),
          S && S.c(),
          (s = P()),
          (c = y("button")),
          (u = N(a)),
          j(r, "class", "timeslots"),
          (c.disabled = m = !e[5]),
          j(
            c,
            "title",
            (h = e[5] ? void 0 : "Please complete all required fields"),
          ),
          j(c, "class", "book");
      },
      m(g, k) {
        w(g, t, k), w(g, n, k), w(g, i, k), w(g, l, k), w(g, r, k);
        for (let T = 0; T < b.length; T += 1) b[T].m(r, null);
        w(g, o, k),
          S && S.m(g, k),
          w(g, s, k),
          w(g, c, k),
          d(c, u),
          _ || ((p = U(c, "click", e[38])), (_ = !0));
      },
      p(g, k) {
        if (k[0] & 10) {
          v = g[3];
          let T;
          for (T = 0; T < v.length; T += 1) {
            const C = ft(g, v, T);
            b[T] ? b[T].p(C, k) : ((b[T] = vt(C)), b[T].c(), b[T].m(r, null));
          }
          for (; T < b.length; T += 1) b[T].d(1);
          b.length = v.length;
        }
        g[1].custom_fields.length
          ? S
            ? S.p(g, k)
            : ((S = kt(g)), S.c(), S.m(s.parentNode, s))
          : S && (S.d(1), (S = null)),
          k[0] & 2 && a !== (a = g[1].booking_label + "") && Y(u, a),
          k[0] & 32 && m !== (m = !g[5]) && (c.disabled = m),
          k[0] & 32 &&
            h !== (h = g[5] ? void 0 : "Please complete all required fields") &&
            j(c, "title", h);
      },
      d(g) {
        g && O(t),
          g && O(n),
          g && O(i),
          g && O(l),
          g && O(r),
          ae(b, g),
          g && O(o),
          S && S.d(g),
          g && O(s),
          g && O(c),
          (_ = !1),
          p();
      },
    };
  }
  function _t(e) {
    let t,
      n,
      i = e[59].event_title + "",
      l,
      r,
      o = e[59].event_description + "",
      s,
      c,
      a = e[59].start_time.toLocaleTimeString([], { timeStyle: "short" }) + "",
      u,
      m,
      h = e[59].end_time.toLocaleTimeString([], { timeStyle: "short" }) + "",
      _,
      p,
      v = e[59].emails.join(", ") + "",
      b,
      S;
    return {
      c() {
        (t = y("span")),
          (n = y("h4")),
          (l = N(i)),
          (r = N(`:
                    `)),
          (s = N(o)),
          (c = P()),
          (u = N(a)),
          (m = N(" - ")),
          (_ = N(h)),
          (p = N(`
                  with `)),
          (b = N(v)),
          (S = P()),
          j(t, "class", "sub-event");
      },
      m(g, k) {
        w(g, t, k),
          d(t, n),
          d(n, l),
          d(n, r),
          d(n, s),
          d(t, c),
          d(t, u),
          d(t, m),
          d(t, _),
          d(t, p),
          d(t, b),
          d(t, S);
      },
      p(g, k) {
        k[0] & 2 && i !== (i = g[59].event_title + "") && Y(l, i),
          k[0] & 2 && o !== (o = g[59].event_description + "") && Y(s, o),
          k[0] & 2 &&
            a !==
              (a =
                g[59].start_time.toLocaleTimeString([], {
                  timeStyle: "short",
                }) + "") &&
            Y(u, a),
          k[0] & 2 &&
            h !==
              (h =
                g[59].end_time.toLocaleTimeString([], { timeStyle: "short" }) +
                "") &&
            Y(_, h),
          k[0] & 2 && v !== (v = g[59].emails.join(", ") + "") && Y(b, v);
      },
      d(g) {
        g && O(t);
      },
    };
  }
  function mt(e) {
    let t,
      n,
      i =
        e[56][0].start_time.toLocaleString([], {
          dateStyle: "medium",
          timeStyle: "short",
        }) + "",
      l,
      r,
      o =
        e[56][e[56].length - 1].end_time.toLocaleString([], {
          dateStyle: "medium",
          timeStyle: "short",
        }) + "",
      s,
      c,
      a,
      u,
      m,
      h,
      _ = e[56],
      p = [];
    for (let S = 0; S < _.length; S += 1) p[S] = _t(at(e, _, S));
    function v() {
      return e[39](e[56]);
    }
    function b() {
      return e[41](e[56]);
    }
    return {
      c() {
        (t = y("li")),
          (n = y("span")),
          (l = N(i)),
          (r = N(`
              -
              `)),
          (s = N(o)),
          (c = P()),
          (a = y("div"));
        for (let S = 0; S < p.length; S += 1) p[S].c();
        (u = P()),
          j(n, "class", "time"),
          j(a, "class", "sub-events"),
          j(t, "aria-role", "button");
      },
      m(S, g) {
        w(S, t, g), d(t, n), d(n, l), d(n, r), d(n, s), d(t, c), d(t, a);
        for (let k = 0; k < p.length; k += 1) p[k].m(a, null);
        d(t, u),
          m ||
            ((h = [
              U(t, "mouseenter", v),
              U(t, "mouseleave", e[40]),
              U(t, "click", b),
            ]),
            (m = !0));
      },
      p(S, g) {
        if (
          ((e = S),
          g[0] & 2 &&
            i !==
              (i =
                e[56][0].start_time.toLocaleString([], {
                  dateStyle: "medium",
                  timeStyle: "short",
                }) + "") &&
            Y(l, i),
          g[0] & 2 &&
            o !==
              (o =
                e[56][e[56].length - 1].end_time.toLocaleString([], {
                  dateStyle: "medium",
                  timeStyle: "short",
                }) + "") &&
            Y(s, o),
          g[0] & 2)
        ) {
          _ = e[56];
          let k;
          for (k = 0; k < _.length; k += 1) {
            const T = at(e, _, k);
            p[k] ? p[k].p(T, g) : ((p[k] = _t(T)), p[k].c(), p[k].m(a, null));
          }
          for (; k < p.length; k += 1) p[k].d(1);
          p.length = _.length;
        }
      },
      d(S) {
        S && O(t), ae(p, S), (m = !1), x(h);
      },
    };
  }
  function ht(e) {
    let t, n;
    function i(s, c) {
      if (s[1].recurrence === "optional") return Yn;
      if (s[1].recurrence === "required") return Mn;
    }
    let l = i(e),
      r = l && l(e),
      o =
        e[50].recurrence_cadence !== "none" && !e[1].recurrence_expiry && bt(e);
    return {
      c() {
        (t = y("footer")), r && r.c(), (n = P()), o && o.c();
      },
      m(s, c) {
        w(s, t, c), r && r.m(t, null), d(t, n), o && o.m(t, null);
      },
      p(s, c) {
        l === (l = i(s)) && r
          ? r.p(s, c)
          : (r && r.d(1), (r = l && l(s)), r && (r.c(), r.m(t, n))),
          s[50].recurrence_cadence !== "none" && !s[1].recurrence_expiry
            ? o
              ? o.p(s, c)
              : ((o = bt(s)), o.c(), o.m(t, null))
            : o && (o.d(1), (o = null));
      },
      d(s) {
        s && O(t), r && r.d(), o && o.d();
      },
    };
  }
  function Mn(e) {
    let t,
      n,
      i = e[50].recurrence_cadence + "",
      l;
    return {
      c() {
        (t = y("strong")), (n = N("Repeating ")), (l = N(i));
      },
      m(r, o) {
        w(r, t, o), d(t, n), d(t, l);
      },
      p(r, o) {
        o[0] & 8 && i !== (i = r[50].recurrence_cadence + "") && Y(l, i);
      },
      d(r) {
        r && O(t);
      },
    };
  }
  function Yn(e) {
    let t, n, i, l, r, o, s, c, a, u;
    e[29][0][e[52]] = [];
    function m() {
      e[28].call(r, e[51], e[52]);
    }
    let h = e[1].recurrence_cadence,
      _ = [];
    for (let p = 0; p < h.length; p += 1) _[p] = pt(dt(e, h, p));
    return {
      c() {
        (t = y("strong")),
          (t.textContent = "How often should this event repeat?"),
          (n = P()),
          (i = y("div")),
          (l = y("label")),
          (r = y("input")),
          (o = P()),
          (s = y("span")),
          (s.textContent = "never"),
          (c = P());
        for (let p = 0; p < _.length; p += 1) _[p].c();
        j(r, "type", "radio"),
          (r.__value = "none"),
          (r.value = r.__value),
          e[29][0][e[52]].push(r),
          Q(l, "checked", e[50].recurrence_cadence === "none"),
          j(i, "class", "cadences");
      },
      m(p, v) {
        w(p, t, v),
          w(p, n, v),
          w(p, i, v),
          d(i, l),
          d(l, r),
          (r.checked = r.__value === e[50].recurrence_cadence),
          d(l, o),
          d(l, s),
          d(i, c);
        for (let b = 0; b < _.length; b += 1) _[b].m(i, null);
        a || ((u = U(r, "change", m)), (a = !0));
      },
      p(p, v) {
        if (
          ((e = p),
          v[0] & 8 && (r.checked = r.__value === e[50].recurrence_cadence),
          v[0] & 8 && Q(l, "checked", e[50].recurrence_cadence === "none"),
          v[0] & 10)
        ) {
          h = e[1].recurrence_cadence;
          let b;
          for (b = 0; b < h.length; b += 1) {
            const S = dt(e, h, b);
            _[b] ? _[b].p(S, v) : ((_[b] = pt(S)), _[b].c(), _[b].m(i, null));
          }
          for (; b < _.length; b += 1) _[b].d(1);
          _.length = h.length;
        }
      },
      d(p) {
        p && O(t),
          p && O(n),
          p && O(i),
          e[29][0][e[52]].splice(e[29][0][e[52]].indexOf(r), 1),
          ae(_, p),
          (a = !1),
          u();
      },
    };
  }
  function pt(e) {
    let t,
      n,
      i,
      l,
      r,
      o = e[53] + "",
      s,
      c,
      a,
      u;
    e[29][0][e[52]] = [];
    function m() {
      e[30].call(n, e[51], e[52]);
    }
    return {
      c() {
        (t = y("label")),
          (n = y("input")),
          (l = P()),
          (r = y("span")),
          (s = N(o)),
          (c = P()),
          j(n, "type", "radio"),
          (n.__value = i = e[53]),
          (n.value = n.__value),
          e[29][0][e[52]].push(n),
          Q(t, "checked", e[50].recurrence_cadence === e[53]);
      },
      m(h, _) {
        w(h, t, _),
          d(t, n),
          (n.checked = n.__value === e[50].recurrence_cadence),
          d(t, l),
          d(t, r),
          d(r, s),
          d(t, c),
          a || ((u = U(n, "change", m)), (a = !0));
      },
      p(h, _) {
        (e = h),
          _[0] & 2 &&
            i !== (i = e[53]) &&
            ((n.__value = i), (n.value = n.__value)),
          _[0] & 8 && (n.checked = n.__value === e[50].recurrence_cadence),
          _[0] & 2 && o !== (o = e[53] + "") && Y(s, o),
          _[0] & 10 && Q(t, "checked", e[50].recurrence_cadence === e[53]);
      },
      d(h) {
        h && O(t),
          e[29][0][e[52]].splice(e[29][0][e[52]].indexOf(n), 1),
          (a = !1),
          u();
      },
    };
  }
  function bt(e) {
    let t, n, i, l, r, o, s, c, a, u, m, h, _, p, v, b, S, g, k, T, C;
    e[29][1][e[52]] = [];
    function z() {
      e[31].call(r, e[51], e[52]);
    }
    function G() {
      e[32].call(u, e[51], e[52]);
    }
    let J = e[50].expirySelection === "after" && gt(e);
    function me() {
      e[34].call(b, e[51], e[52]);
    }
    let E = e[50].expirySelection === "on" && yt(e);
    return {
      c() {
        (t = y("strong")),
          (t.textContent = "Ends"),
          (n = P()),
          (i = y("div")),
          (l = y("label")),
          (r = y("input")),
          (o = P()),
          (s = y("span")),
          (s.textContent = "never"),
          (c = P()),
          (a = y("label")),
          (u = y("input")),
          (m = P()),
          (h = y("span")),
          (h.textContent = "After"),
          (_ = P()),
          J && J.c(),
          (p = P()),
          (v = y("label")),
          (b = y("input")),
          (S = P()),
          (g = y("span")),
          (g.textContent = "On"),
          (k = P()),
          E && E.c(),
          j(r, "type", "radio"),
          (r.__value = "none"),
          (r.value = r.__value),
          e[29][1][e[52]].push(r),
          Q(l, "checked", e[50].expirySelection === "none"),
          j(u, "type", "radio"),
          (u.__value = "after"),
          (u.value = u.__value),
          e[29][1][e[52]].push(u),
          Q(a, "checked", e[50].expirySelection === "after"),
          j(b, "type", "radio"),
          (b.__value = "on"),
          (b.value = b.__value),
          e[29][1][e[52]].push(b),
          Q(v, "checked", e[50].expirySelection === "on"),
          j(i, "class", "expiry");
      },
      m(R, L) {
        w(R, t, L),
          w(R, n, L),
          w(R, i, L),
          d(i, l),
          d(l, r),
          (r.checked = r.__value === e[50].expirySelection),
          d(l, o),
          d(l, s),
          d(i, c),
          d(i, a),
          d(a, u),
          (u.checked = u.__value === e[50].expirySelection),
          d(a, m),
          d(a, h),
          d(a, _),
          J && J.m(a, null),
          d(i, p),
          d(i, v),
          d(v, b),
          (b.checked = b.__value === e[50].expirySelection),
          d(v, S),
          d(v, g),
          d(v, k),
          E && E.m(v, null),
          T ||
            ((C = [U(r, "change", z), U(u, "change", G), U(b, "change", me)]),
            (T = !0));
      },
      p(R, L) {
        (e = R),
          L[0] & 8 && (r.checked = r.__value === e[50].expirySelection),
          L[0] & 8 && Q(l, "checked", e[50].expirySelection === "none"),
          L[0] & 8 && (u.checked = u.__value === e[50].expirySelection),
          e[50].expirySelection === "after"
            ? J
              ? J.p(e, L)
              : ((J = gt(e)), J.c(), J.m(a, null))
            : J && (J.d(1), (J = null)),
          L[0] & 8 && Q(a, "checked", e[50].expirySelection === "after"),
          L[0] & 8 && (b.checked = b.__value === e[50].expirySelection),
          e[50].expirySelection === "on"
            ? E
              ? E.p(e, L)
              : ((E = yt(e)), E.c(), E.m(v, null))
            : E && (E.d(1), (E = null)),
          L[0] & 8 && Q(v, "checked", e[50].expirySelection === "on");
      },
      d(R) {
        R && O(t),
          R && O(n),
          R && O(i),
          e[29][1][e[52]].splice(e[29][1][e[52]].indexOf(r), 1),
          e[29][1][e[52]].splice(e[29][1][e[52]].indexOf(u), 1),
          J && J.d(),
          e[29][1][e[52]].splice(e[29][1][e[52]].indexOf(b), 1),
          E && E.d(),
          (T = !1),
          x(C);
      },
    };
  }
  function gt(e) {
    let t, n, i, l, r;
    function o() {
      e[33].call(t, e[51], e[52]);
    }
    return {
      c() {
        (t = y("input")),
          (n = P()),
          (i = y("span")),
          (i.textContent = "occurrences"),
          j(t, "class", "after"),
          j(t, "type", "number"),
          j(t, "min", "1");
      },
      m(s, c) {
        w(s, t, c),
          $(t, e[50].recurrence_expiry),
          w(s, n, c),
          w(s, i, c),
          l || ((r = U(t, "input", o)), (l = !0));
      },
      p(s, c) {
        (e = s),
          c[0] & 8 &&
            De(t.value) !== e[50].recurrence_expiry &&
            $(t, e[50].recurrence_expiry);
      },
      d(s) {
        s && O(t), s && O(n), s && O(i), (l = !1), r();
      },
    };
  }
  function yt(e) {
    let t, n, i, l;
    function r() {
      e[35].call(t, e[51], e[52]);
    }
    return {
      c() {
        (t = y("input")),
          j(t, "type", "date"),
          j(t, "min", (n = e[50].start_time.toISOString().substring(0, 10)));
      },
      m(o, s) {
        w(o, t, s),
          $(t, e[50].recurrence_expiry),
          i || ((l = U(t, "input", r)), (i = !0));
      },
      p(o, s) {
        (e = o),
          s[0] & 8 &&
            n !== (n = e[50].start_time.toISOString().substring(0, 10)) &&
            j(t, "min", n),
          s[0] & 8 && $(t, e[50].recurrence_expiry);
      },
      d(o) {
        o && O(t), (i = !1), l();
      },
    };
  }
  function vt(e) {
    let t,
      n,
      i = (e[50].event_title || e[1].event_title) + "",
      l,
      r,
      o = (e[50].event_description || e[1].event_description) + "",
      s,
      c,
      a,
      u = e[50].start_time.toLocaleTimeString([], { timeStyle: "short" }) + "",
      m,
      h,
      _ = e[50].end_time.toLocaleTimeString([], { timeStyle: "short" }) + "",
      p,
      v,
      b,
      S =
        e[50].start_time.toLocaleDateString("default", { dateStyle: "full" }) +
        "",
      g,
      k,
      T,
      C = e[1].recurrence !== "none" && ht(e);
    return {
      c() {
        (t = y("li")),
          (n = y("h3")),
          (l = N(i)),
          (r = N(": ")),
          (s = N(o)),
          (c = P()),
          (a = y("span")),
          (m = N(u)),
          (h = N(`
              -
              `)),
          (p = N(_)),
          (v = P()),
          (b = y("span")),
          (g = N(S)),
          (k = P()),
          C && C.c(),
          (T = P()),
          j(a, "class", "time"),
          j(b, "class", "date");
      },
      m(z, G) {
        w(z, t, G),
          d(t, n),
          d(n, l),
          d(n, r),
          d(n, s),
          d(t, c),
          d(t, a),
          d(a, m),
          d(a, h),
          d(a, p),
          d(t, v),
          d(t, b),
          d(b, g),
          d(t, k),
          C && C.m(t, null),
          d(t, T);
      },
      p(z, G) {
        G[0] & 10 &&
          i !== (i = (z[50].event_title || z[1].event_title) + "") &&
          Y(l, i),
          G[0] & 10 &&
            o !==
              (o = (z[50].event_description || z[1].event_description) + "") &&
            Y(s, o),
          G[0] & 8 &&
            u !==
              (u =
                z[50].start_time.toLocaleTimeString([], {
                  timeStyle: "short",
                }) + "") &&
            Y(m, u),
          G[0] & 8 &&
            _ !==
              (_ =
                z[50].end_time.toLocaleTimeString([], { timeStyle: "short" }) +
                "") &&
            Y(p, _),
          G[0] & 8 &&
            S !==
              (S =
                z[50].start_time.toLocaleDateString("default", {
                  dateStyle: "full",
                }) + "") &&
            Y(g, S),
          z[1].recurrence !== "none"
            ? C
              ? C.p(z, G)
              : ((C = ht(z)), C.c(), C.m(t, T))
            : C && (C.d(1), (C = null));
      },
      d(z) {
        z && O(t), C && C.d();
      },
    };
  }
  function kt(e) {
    let t,
      n = e[1].custom_fields,
      i = [];
    for (let l = 0; l < n.length; l += 1) i[l] = St(ut(e, n, l));
    return {
      c() {
        t = y("div");
        for (let l = 0; l < i.length; l += 1) i[l].c();
        j(t, "id", "custom-fields");
      },
      m(l, r) {
        w(l, t, r);
        for (let o = 0; o < i.length; o += 1) i[o].m(t, null);
      },
      p(l, r) {
        if (r[0] & 6) {
          n = l[1].custom_fields;
          let o;
          for (o = 0; o < n.length; o += 1) {
            const s = ut(l, n, o);
            i[o] ? i[o].p(s, r) : ((i[o] = St(s)), i[o].c(), i[o].m(t, null));
          }
          for (; o < i.length; o += 1) i[o].d(1);
          i.length = n.length;
        }
      },
      d(l) {
        l && O(t), ae(i, l);
      },
    };
  }
  function Hn(e) {
    let t,
      n,
      i = e[47].title + "",
      l,
      r,
      o,
      s,
      c,
      a,
      u;
    function m() {
      e[37].call(o, e[47]);
    }
    return {
      c() {
        (t = y("label")),
          (n = y("strong")),
          (l = N(i)),
          (r = P()),
          (o = y("input")),
          (s = P()),
          j(o, "type", "text"),
          j(t, "data-required", (c = e[47].required));
      },
      m(h, _) {
        w(h, t, _),
          d(t, n),
          d(n, l),
          d(t, r),
          d(t, o),
          $(o, e[2][e[47].title]),
          d(t, s),
          a || ((u = U(o, "input", m)), (a = !0));
      },
      p(h, _) {
        (e = h),
          _[0] & 2 && i !== (i = e[47].title + "") && Y(l, i),
          _[0] & 6 && o.value !== e[2][e[47].title] && $(o, e[2][e[47].title]),
          _[0] & 2 && c !== (c = e[47].required) && j(t, "data-required", c);
      },
      d(h) {
        h && O(t), (a = !1), u();
      },
    };
  }
  function Fn(e) {
    let t,
      n,
      i = e[47].title + "",
      l,
      r,
      o,
      s,
      c,
      a,
      u;
    function m() {
      e[36].call(o, e[47]);
    }
    return {
      c() {
        (t = y("label")),
          (n = y("strong")),
          (l = N(i)),
          (r = P()),
          (o = y("input")),
          (s = P()),
          j(o, "type", "email"),
          j(t, "data-required", (c = e[47].required));
      },
      m(h, _) {
        w(h, t, _),
          d(t, n),
          d(n, l),
          d(t, r),
          d(t, o),
          $(o, e[2][e[47].title]),
          d(t, s),
          a || ((u = U(o, "input", m)), (a = !0));
      },
      p(h, _) {
        (e = h),
          _[0] & 2 && i !== (i = e[47].title + "") && Y(l, i),
          _[0] & 6 && o.value !== e[2][e[47].title] && $(o, e[2][e[47].title]),
          _[0] & 2 && c !== (c = e[47].required) && j(t, "data-required", c);
      },
      d(h) {
        h && O(t), (a = !1), u();
      },
    };
  }
  function St(e) {
    let t;
    function n(r, o) {
      return r[47].type === "email" ? Fn : Hn;
    }
    let i = n(e),
      l = i(e);
    return {
      c() {
        l.c(), (t = Re());
      },
      m(r, o) {
        l.m(r, o), w(r, t, o);
      },
      p(r, o) {
        i === (i = n(r)) && l
          ? l.p(r, o)
          : (l.d(1), (l = i(r)), l && (l.c(), l.m(t.parentNode, t)));
      },
      d(r) {
        l.d(r), r && O(t);
      },
    };
  }
  function wt(e) {
    let t,
      n = e[1].notification_message + "",
      i;
    return {
      c() {
        (t = y("p")), (i = N(n));
      },
      m(l, r) {
        w(l, t, r), d(t, i);
      },
      p(l, r) {
        r[0] & 2 && n !== (n = l[1].notification_message + "") && Y(i, n);
      },
      d(l) {
        l && O(t);
      },
    };
  }
  function Un(e) {
    let t, n, i, l, r;
    function o(u, m) {
      return u[3].length ? zn : u[1].event_options.length ? Jn : Dn;
    }
    let s = o(e),
      c = s(e),
      a = e[4] && wt(e);
    return {
      c() {
        (t = y("nylas-error")),
          (n = P()),
          (i = y("main")),
          (l = y("section")),
          c.c(),
          (r = P()),
          a && a.c(),
          (this.c = I),
          Ie(t, "id", e[0]),
          j(l, "class", "booker");
      },
      m(u, m) {
        w(u, t, m),
          w(u, n, m),
          w(u, i, m),
          d(i, l),
          c.m(l, null),
          d(l, r),
          a && a.m(l, null);
      },
      p(u, m) {
        m[0] & 1 && Ie(t, "id", u[0]),
          s === (s = o(u)) && c
            ? c.p(u, m)
            : (c.d(1), (c = s(u)), c && (c.c(), c.m(l, r))),
          u[4]
            ? a
              ? a.p(u, m)
              : ((a = wt(u)), a.c(), a.m(l, null))
            : a && (a.d(1), (a = null));
      },
      i: I,
      o: I,
      d(u) {
        u && O(t), u && O(n), u && O(i), c.d(), a && a.d();
      },
    };
  }
  function Gn(e, t, n) {
    let i, l, r, o;
    ye(e, Pn, (f) => n(42, (r = f))), ye(e, Oe, (f) => n(27, (o = f)));
    var s =
      (this && this.__awaiter) ||
      function (f, M, le, A) {
        function se(W) {
          return W instanceof le
            ? W
            : new le(function (B) {
                B(W);
              });
        }
        return new (le || (le = Promise))(function (W, B) {
          function F(V) {
            try {
              q(A.next(V));
            } catch (je) {
              B(je);
            }
          }
          function ne(V) {
            try {
              q(A.throw(V));
            } catch (je) {
              B(je);
            }
          }
          function q(V) {
            V.done ? W(V.value) : se(V.value).then(F, ne);
          }
          q((A = A.apply(f, M || [])).next());
        });
      };
    let { id: c = "" } = t,
      { access_token: a = "" } = t,
      { booking_label: u } = t,
      { custom_fields: m } = t,
      { event_title: h } = t,
      { event_description: _ } = t,
      { event_location: p } = t,
      { event_conferencing: v } = t,
      { slots_to_book: b } = t,
      { notification_mode: S } = t,
      { notification_message: g } = t,
      { notification_subject: k } = t,
      { recurrence: T } = t,
      { recurrence_cadence: C } = t,
      { recurrence_expiry: z } = t,
      { event_options: G } = t;
    const J = jn(ze()),
      me = {
        booking_label: "Schedule time slots",
        custom_fields: In,
        event_title: "Meeting",
        event_description: "",
        event_conferencing: "",
        event_location: "",
        slots_to_book: [],
        notification_mode: _e.SHOW_MESSAGE,
        notification_message: "Thank you for scheduling!",
        notification_subject: "Invitation",
        recurrence: "none",
        recurrence_cadence: ["none"],
        event_options: [],
      };
    let E = Ee({}, {}, me),
      R = {};
    Ct(() =>
      s(void 0, void 0, void 0, function* () {
        yield Rt();
        const f = JSON.stringify({ component_id: c, access_token: a });
        n(25, (R = (yield r[f]) || {})), n(1, (E = Ee(t, R, me)));
      }),
    );
    let L = t,
      Pe = !1;
    function Et(f) {
      return s(this, void 0, void 0, function* () {
        const M = f.map((A) =>
            s(this, void 0, void 0, function* () {
              var se, W;
              const B = {
                title: A.event_title,
                description: A.event_description,
                location: A.event_location,
                conferencing: A.event_conferencing
                  ? {
                      provider: "Zoom Meeting",
                      details: { url: A.event_conferencing },
                    }
                  : void 0,
                participants: Array.from(
                  new Set([
                    ...A.available_calendars,
                    ...((se = A.participantEmails) !== null && se !== void 0
                      ? se
                      : []),
                  ]),
                ).map((F) => ({ email: F })),
                calendar_id: A.calendar_id,
                when: {
                  start_time: A.start_time.getTime() / 1e3,
                  end_time: A.end_time.getTime() / 1e3,
                },
              };
              if (
                (H["Email Address"] &&
                  ((W = B.participants) === null ||
                    W === void 0 ||
                    W.push({
                      email: H["Email Address"],
                      name: H["Your Name"],
                    })),
                Object.keys(H).length && (B.metadata = H),
                A.recurrence_cadence && A.recurrence_cadence !== "none")
              ) {
                let F = "";
                A.recurrence_cadence === "daily"
                  ? (F = "RRULE:FREQ=DAILY")
                  : A.recurrence_cadence === "weekdays"
                  ? (F = "RRULE:FREQ=DAILY;BYDAY=MO,TU,WE,TH,FR")
                  : A.recurrence_cadence === "weekly"
                  ? (F = "RRULE:FREQ=WEEKLY")
                  : A.recurrence_cadence === "biweekly"
                  ? (F = "RRULE:FREQ=WEEKLY;INTERVAL=2")
                  : A.recurrence_cadence === "monthly" &&
                    (F = "RRULE:FREQ=MONTHLY"),
                  typeof A.recurrence_expiry == "string" &&
                    (A.recurrence_expiry = new Date(A.recurrence_expiry));
                const ne = E.recurrence_expiry || A.recurrence_expiry,
                  q = Number.parseInt(ne);
                isNaN(q)
                  ? ne instanceof Date &&
                    (F += `;UNTIL=${ne
                      .toISOString()
                      .substring(0, 19)
                      .replace(/[^0-9]/g, "")}Z`)
                  : (F += `;COUNT=${q}`),
                  (B.recurrence = {
                    rrule: [F],
                    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                  });
              }
              return Vt(B, { component_id: c, access_token: a });
            }),
          ),
          le = yield Promise.all(M);
        J("bookedEvents", {}),
          E.notification_mode === _e.SEND_MESSAGE
            ? le.map((A, se) => {
                var W;
                const B =
                  (W = A.participants) === null || W === void 0
                    ? void 0
                    : W.map((F) => {
                        const { email: ne, name: q } = F,
                          V = { email: ne };
                        return q && (V.name = q), V;
                      });
                B &&
                  ln(c, {
                    to: B,
                    body: `${E.notification_message}`,
                    subject: `${E.notification_subject}`,
                  });
              })
            : E.notification_mode === _e.SHOW_MESSAGE && n(4, (Pe = !0));
      });
    }
    let H = {};
    function Pt(f) {
      J("hoverOptionChange", { event: f });
    }
    function jt() {
      J("hoverOptionChange", { event: null });
    }
    function Tt(f) {
      J("eventOptionSelected", { event: f });
    }
    const Wn = [[], []];
    function Bn(f, M) {
      (f[M].recurrence_cadence = this.__value),
        n(3, i),
        n(1, E),
        n(26, L),
        n(46, t),
        n(25, R);
    }
    function Qn(f, M) {
      (f[M].recurrence_cadence = this.__value),
        n(3, i),
        n(1, E),
        n(26, L),
        n(46, t),
        n(25, R);
    }
    function Zn(f, M) {
      (f[M].expirySelection = this.__value),
        n(3, i),
        n(1, E),
        n(26, L),
        n(46, t),
        n(25, R);
    }
    function Xn(f, M) {
      (f[M].expirySelection = this.__value),
        n(3, i),
        n(1, E),
        n(26, L),
        n(46, t),
        n(25, R);
    }
    function Kn(f, M) {
      (f[M].recurrence_expiry = De(this.value)),
        n(3, i),
        n(1, E),
        n(26, L),
        n(46, t),
        n(25, R);
    }
    function Vn(f, M) {
      (f[M].expirySelection = this.__value),
        n(3, i),
        n(1, E),
        n(26, L),
        n(46, t),
        n(25, R);
    }
    function qn(f, M) {
      (f[M].recurrence_expiry = this.value),
        n(3, i),
        n(1, E),
        n(26, L),
        n(46, t),
        n(25, R);
    }
    function xn(f) {
      (H[f.title] = this.value), n(2, H), n(1, E), n(26, L), n(46, t), n(25, R);
    }
    function $n(f) {
      (H[f.title] = this.value), n(2, H), n(1, E), n(26, L), n(46, t), n(25, R);
    }
    const ei = () => Et(i),
      ti = (f) => Pt(f),
      ni = () => jt(),
      ii = (f) => Tt(f);
    return (
      (e.$$set = (f) => {
        n(46, (t = Te(Te({}, t), Ce(f)))),
          "id" in f && n(0, (c = f.id)),
          "access_token" in f && n(10, (a = f.access_token)),
          "booking_label" in f && n(11, (u = f.booking_label)),
          "custom_fields" in f && n(12, (m = f.custom_fields)),
          "event_title" in f && n(13, (h = f.event_title)),
          "event_description" in f && n(14, (_ = f.event_description)),
          "event_location" in f && n(15, (p = f.event_location)),
          "event_conferencing" in f && n(16, (v = f.event_conferencing)),
          "slots_to_book" in f && n(17, (b = f.slots_to_book)),
          "notification_mode" in f && n(18, (S = f.notification_mode)),
          "notification_message" in f && n(19, (g = f.notification_message)),
          "notification_subject" in f && n(20, (k = f.notification_subject)),
          "recurrence" in f && n(21, (T = f.recurrence)),
          "recurrence_cadence" in f && n(22, (C = f.recurrence_cadence)),
          "recurrence_expiry" in f && n(23, (z = f.recurrence_expiry)),
          "event_options" in f && n(24, (G = f.event_options));
      }),
      (e.$$.update = () => {
        e.$$.dirty[0] & 134217728 && Object.keys(o).length && J("onError", o),
          JSON.stringify(L) !== JSON.stringify(t) &&
            (n(1, (E = Ee(t, R, me))), n(26, (L = t))),
          e.$$.dirty[0] & 2 &&
            n(
              3,
              (i = E.slots_to_book.map(
                (f) => (
                  f.recurrence_cadence ||
                    (E.recurrence === "required"
                      ? (f.recurrence_cadence = E.recurrence_cadence[0])
                      : (f.recurrence_cadence = "none")),
                  f.expirySelection || (f.expirySelection = "none"),
                  f
                ),
              )),
            ),
          e.$$.dirty[0] & 8 && i.length && n(4, (Pe = !1)),
          e.$$.dirty[0] & 6 &&
            (E.custom_fields.find((f) => H.hasOwnProperty(f.title)) ||
              n(
                2,
                (H = E.custom_fields.reduce(
                  (f, M) =>
                    Object.assign(Object.assign({}, f), { [M.title]: "" }),
                  {},
                )),
              )),
          e.$$.dirty[0] & 6 &&
            n(
              5,
              (l = E.custom_fields
                .filter((f) => f.required)
                .every((f) => H[f.title] !== void 0 && H[f.title] !== "")),
            );
      }),
      (t = Ce(t)),
      [
        c,
        E,
        H,
        i,
        Pe,
        l,
        Et,
        Pt,
        jt,
        Tt,
        a,
        u,
        m,
        h,
        _,
        p,
        v,
        b,
        S,
        g,
        k,
        T,
        C,
        z,
        G,
        R,
        L,
        o,
        Bn,
        Wn,
        Qn,
        Zn,
        Xn,
        Kn,
        Vn,
        qn,
        xn,
        $n,
        ei,
        ti,
        ni,
        ii,
      ]
    );
  }
  class Ot extends we {
    constructor(t) {
      super();
      (this.shadowRoot.innerHTML =
        '<style>*{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;list-style:none}main{--black:#161717;--grey-dark:#636671;--grey:#bdc0cb;--grey-lighter:#dfe1e8;--grey-dark-warm:#9fa4b5;--grey-lightest:#f7f7f8;--grey-background:#f0f1f5;--white:#ffffff;--blue:#314fa9;--blue-lighter:#f0f3ff;--red:#ee3248;--red-lighter:#ffeef0;--fs-12:0.75rem;--fs-14:0.875rem;--fs-16:1rem;--black-90:#2c2e2e;--grey-light:#f7f7f8;--grey-warm:#cbcbcb}main{height:100%;overflow:hidden;display:grid;font-family:Arial, Helvetica, sans-serif;position:relative;z-index:1}main .booker{height:calc(100% - 2rem);overflow:auto;background:rgba(0, 0, 0, 0.03);padding:1rem}main .booker h2{font-size:1.3rem;font-weight:bold;margin-bottom:0.5rem}main .booker>p{opacity:0.8;font-size:0.9rem;line-height:1.3rem;margin-bottom:1rem}main .booker .timeslots{display:grid;grid-auto-flow:row;gap:1rem;margin-bottom:1rem}main .booker .timeslots li{background:rgba(255, 255, 255, 0.8);list-style-type:none;margin:0;padding:1rem;border:1px solid #ebebeb;display:grid;gap:0.5rem;grid-auto-flow:row}main .booker .timeslots li h3{font-size:0.8rem;opacity:0.8}main .booker .timeslots li .time{color:var(--blue)}main .booker .timeslots li .date{font-size:0.8rem}main .booker .timeslots li .sub-events{display:grid;gap:1rem;font-size:0.8rem}main .booker .timeslots li .sub-event{background-color:var(--grey-light);padding:0.5rem}main .booker .timeslots li footer{display:grid;grid-auto-flow:row;gap:0.5rem;padding:1rem;margin:1rem -1rem -1rem;font-size:0.8rem;background:#eeeef5}main .booker .timeslots li footer strong{display:block}main .booker .timeslots li footer .cadences,main .booker .timeslots li footer .expiry{display:flex;flex-wrap:wrap;gap:0.5rem}main .booker .timeslots li footer .cadences label,main .booker .timeslots li footer .expiry label{padding:0.25rem 0.5rem;transition:0.1s;background-color:#fff;align-items:center;display:flex;gap:0.5rem;cursor:pointer}main .booker .timeslots li footer .cadences label.checked,main .booker .timeslots li footer .expiry label.checked{background-color:var(--blue);color:white}main .booker .timeslots li footer .cadences label input,main .booker .timeslots li footer .expiry label input{padding-left:5px}main .booker .timeslots li footer .cadences label input.after,main .booker .timeslots li footer .expiry label input.after{width:15%}main .booker .timeslots li footer .cadences label span,main .booker .timeslots li footer .expiry label span{text-transform:capitalize}main .booker #custom-fields{display:grid;grid-auto-flow:row;gap:1rem;margin-bottom:1rem}main .booker #custom-fields label{display:grid;grid-auto-flow:row;gap:0.5rem}main .booker #custom-fields label strong{font-weight:bold;font-size:0.8rem}main .booker #custom-fields label[data-required=true] strong:after{content:" (required)";font-weight:normal;opacity:0.75;font-style:italic}main .booker #custom-fields label input[type=text],main .booker #custom-fields label input[type=email]{padding:0.5rem;font-size:0.9rem}main .booker button.book{background:var(--blue);color:white;padding:0.5rem 2rem;cursor:pointer}main .booker button.book:disabled{background:var(--grey-dark);opacity:0.5;cursor:not-allowed}</style>'),
        Ue(
          this,
          {
            target: this.shadowRoot,
            props: Je(this.attributes),
            customElement: !0,
          },
          Gn,
          Un,
          Ae,
          {
            id: 0,
            access_token: 10,
            booking_label: 11,
            custom_fields: 12,
            event_title: 13,
            event_description: 14,
            event_location: 15,
            event_conferencing: 16,
            slots_to_book: 17,
            notification_mode: 18,
            notification_message: 19,
            notification_subject: 20,
            recurrence: 21,
            recurrence_cadence: 22,
            recurrence_expiry: 23,
            event_options: 24,
          },
          null,
          [-1, -1],
        ),
        t &&
          (t.target && w(t.target, this, t.anchor),
          t.props && (this.$set(t.props), D()));
    }
    static get observedAttributes() {
      return [
        "id",
        "access_token",
        "booking_label",
        "custom_fields",
        "event_title",
        "event_description",
        "event_location",
        "event_conferencing",
        "slots_to_book",
        "notification_mode",
        "notification_message",
        "notification_subject",
        "recurrence",
        "recurrence_cadence",
        "recurrence_expiry",
        "event_options",
      ];
    }
    get id() {
      return this.$$.ctx[0];
    }
    set id(t) {
      this.$$set({ id: t }), D();
    }
    get access_token() {
      return this.$$.ctx[10];
    }
    set access_token(t) {
      this.$$set({ access_token: t }), D();
    }
    get booking_label() {
      return this.$$.ctx[11];
    }
    set booking_label(t) {
      this.$$set({ booking_label: t }), D();
    }
    get custom_fields() {
      return this.$$.ctx[12];
    }
    set custom_fields(t) {
      this.$$set({ custom_fields: t }), D();
    }
    get event_title() {
      return this.$$.ctx[13];
    }
    set event_title(t) {
      this.$$set({ event_title: t }), D();
    }
    get event_description() {
      return this.$$.ctx[14];
    }
    set event_description(t) {
      this.$$set({ event_description: t }), D();
    }
    get event_location() {
      return this.$$.ctx[15];
    }
    set event_location(t) {
      this.$$set({ event_location: t }), D();
    }
    get event_conferencing() {
      return this.$$.ctx[16];
    }
    set event_conferencing(t) {
      this.$$set({ event_conferencing: t }), D();
    }
    get slots_to_book() {
      return this.$$.ctx[17];
    }
    set slots_to_book(t) {
      this.$$set({ slots_to_book: t }), D();
    }
    get notification_mode() {
      return this.$$.ctx[18];
    }
    set notification_mode(t) {
      this.$$set({ notification_mode: t }), D();
    }
    get notification_message() {
      return this.$$.ctx[19];
    }
    set notification_message(t) {
      this.$$set({ notification_message: t }), D();
    }
    get notification_subject() {
      return this.$$.ctx[20];
    }
    set notification_subject(t) {
      this.$$set({ notification_subject: t }), D();
    }
    get recurrence() {
      return this.$$.ctx[21];
    }
    set recurrence(t) {
      this.$$set({ recurrence: t }), D();
    }
    get recurrence_cadence() {
      return this.$$.ctx[22];
    }
    set recurrence_cadence(t) {
      this.$$set({ recurrence_cadence: t }), D();
    }
    get recurrence_expiry() {
      return this.$$.ctx[23];
    }
    set recurrence_expiry(t) {
      this.$$set({ recurrence_expiry: t }), D();
    }
    get event_options() {
      return this.$$.ctx[24];
    }
    set event_options(t) {
      this.$$set({ event_options: t }), D();
    }
  }
  return customElements.define("nylas-booking", Ot), Ot;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbW1vbnMvc3JjL2RlZmluZS1jb21wb25lbnQtcGF0Y2gudHMiLCIuLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL2ludGVybmFsL2luZGV4Lm1qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvc3RvcmUvaW5kZXgubWpzIiwiLi4vLi4vY29tbW9ucy9zcmMvc3RvcmUvZXJyb3IudHMiLCIuLi8uLi9jb21tb25zL3NyYy9tZXRob2RzL2FwaS50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL2Nvbm5lY3Rpb25zL2V2ZW50cy50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL2Nvbm5lY3Rpb25zL3RocmVhZHMudHMiLCIuLi8uLi9jb21tb25zL3NyYy9jb25uZWN0aW9ucy9tYW5pZmVzdC50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL2Nvbm5lY3Rpb25zL21lc3NhZ2VzLnRzIiwiLi4vLi4vY29tbW9ucy9zcmMvY29ubmVjdGlvbnMvYXZhaWxhYmlsaXR5LnRzIiwiLi4vLi4vY29tbW9ucy9zcmMvc3RvcmUvYXZhaWxhYmlsaXR5LnRzIiwiLi4vLi4vY29tbW9ucy9zcmMvc3RvcmUvY29uc2VjdXRpdmUtYXZhaWxhYmlsaXR5LnRzIiwiLi4vLi4vY29tbW9ucy9zcmMvc3RvcmUvbWFpbGJveC50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL3N0b3JlL21hbmlmZXN0LnRzIiwiLi4vLi4vY29tbW9ucy9zcmMvbWV0aG9kcy9jb21wb25lbnQudHMiLCIuLi8uLi9jb21tb25zL3NyYy9jb21wb25lbnRzL05FcnJvci5zdmVsdGUiLCIuLi8uLi9jb21tb25zL3NyYy9jb25zdGFudHMvY3VzdG9tLWZpZWxkcy50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL2VudW1zL0Jvb2tpbmcudHMiLCJzcmMvQm9va2luZy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG9yaWdpbmFsRGVmaW5lID0gd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZS5iaW5kKFxuICB3aW5kb3cuY3VzdG9tRWxlbWVudHMsXG4pO1xud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSA9IChuYW1lOiBzdHJpbmcsIC4uLmFyZ3MpID0+IHtcbiAgaWYgKGN1c3RvbUVsZW1lbnRzLmdldChuYW1lKSkge1xuICAgIHJldHVybjtcbiAgfVxuICByZXR1cm4gb3JpZ2luYWxEZWZpbmUobmFtZSwgLi4uYXJncyk7XG59O1xuIiwiZnVuY3Rpb24gbm9vcCgpIHsgfVxuY29uc3QgaWRlbnRpdHkgPSB4ID0+IHg7XG5mdW5jdGlvbiBhc3NpZ24odGFyLCBzcmMpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZm9yIChjb25zdCBrIGluIHNyYylcbiAgICAgICAgdGFyW2tdID0gc3JjW2tdO1xuICAgIHJldHVybiB0YXI7XG59XG5mdW5jdGlvbiBpc19wcm9taXNlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBhZGRfbG9jYXRpb24oZWxlbWVudCwgZmlsZSwgbGluZSwgY29sdW1uLCBjaGFyKSB7XG4gICAgZWxlbWVudC5fX3N2ZWx0ZV9tZXRhID0ge1xuICAgICAgICBsb2M6IHsgZmlsZSwgbGluZSwgY29sdW1uLCBjaGFyIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gcnVuKGZuKSB7XG4gICAgcmV0dXJuIGZuKCk7XG59XG5mdW5jdGlvbiBibGFua19vYmplY3QoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCk7XG59XG5mdW5jdGlvbiBydW5fYWxsKGZucykge1xuICAgIGZucy5mb3JFYWNoKHJ1bik7XG59XG5mdW5jdGlvbiBpc19mdW5jdGlvbih0aGluZykge1xuICAgIHJldHVybiB0eXBlb2YgdGhpbmcgPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBzYWZlX25vdF9lcXVhbChhLCBiKSB7XG4gICAgcmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGIgfHwgKChhICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JykgfHwgdHlwZW9mIGEgPT09ICdmdW5jdGlvbicpO1xufVxubGV0IHNyY191cmxfZXF1YWxfYW5jaG9yO1xuZnVuY3Rpb24gc3JjX3VybF9lcXVhbChlbGVtZW50X3NyYywgdXJsKSB7XG4gICAgaWYgKCFzcmNfdXJsX2VxdWFsX2FuY2hvcikge1xuICAgICAgICBzcmNfdXJsX2VxdWFsX2FuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB9XG4gICAgc3JjX3VybF9lcXVhbF9hbmNob3IuaHJlZiA9IHVybDtcbiAgICByZXR1cm4gZWxlbWVudF9zcmMgPT09IHNyY191cmxfZXF1YWxfYW5jaG9yLmhyZWY7XG59XG5mdW5jdGlvbiBub3RfZXF1YWwoYSwgYikge1xuICAgIHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiO1xufVxuZnVuY3Rpb24gaXNfZW1wdHkob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAwO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVfc3RvcmUoc3RvcmUsIG5hbWUpIHtcbiAgICBpZiAoc3RvcmUgIT0gbnVsbCAmJiB0eXBlb2Ygc3RvcmUuc3Vic2NyaWJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJyR7bmFtZX0nIGlzIG5vdCBhIHN0b3JlIHdpdGggYSAnc3Vic2NyaWJlJyBtZXRob2RgKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzdWJzY3JpYmUoc3RvcmUsIC4uLmNhbGxiYWNrcykge1xuICAgIGlmIChzdG9yZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBub29wO1xuICAgIH1cbiAgICBjb25zdCB1bnN1YiA9IHN0b3JlLnN1YnNjcmliZSguLi5jYWxsYmFja3MpO1xuICAgIHJldHVybiB1bnN1Yi51bnN1YnNjcmliZSA/ICgpID0+IHVuc3ViLnVuc3Vic2NyaWJlKCkgOiB1bnN1Yjtcbn1cbmZ1bmN0aW9uIGdldF9zdG9yZV92YWx1ZShzdG9yZSkge1xuICAgIGxldCB2YWx1ZTtcbiAgICBzdWJzY3JpYmUoc3RvcmUsIF8gPT4gdmFsdWUgPSBfKSgpO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGNvbXBvbmVudF9zdWJzY3JpYmUoY29tcG9uZW50LCBzdG9yZSwgY2FsbGJhY2spIHtcbiAgICBjb21wb25lbnQuJCQub25fZGVzdHJveS5wdXNoKHN1YnNjcmliZShzdG9yZSwgY2FsbGJhY2spKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9zbG90KGRlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZm4pIHtcbiAgICBpZiAoZGVmaW5pdGlvbikge1xuICAgICAgICBjb25zdCBzbG90X2N0eCA9IGdldF9zbG90X2NvbnRleHQoZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBmbik7XG4gICAgICAgIHJldHVybiBkZWZpbml0aW9uWzBdKHNsb3RfY3R4KTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRfc2xvdF9jb250ZXh0KGRlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZm4pIHtcbiAgICByZXR1cm4gZGVmaW5pdGlvblsxXSAmJiBmblxuICAgICAgICA/IGFzc2lnbigkJHNjb3BlLmN0eC5zbGljZSgpLCBkZWZpbml0aW9uWzFdKGZuKGN0eCkpKVxuICAgICAgICA6ICQkc2NvcGUuY3R4O1xufVxuZnVuY3Rpb24gZ2V0X3Nsb3RfY2hhbmdlcyhkZWZpbml0aW9uLCAkJHNjb3BlLCBkaXJ0eSwgZm4pIHtcbiAgICBpZiAoZGVmaW5pdGlvblsyXSAmJiBmbikge1xuICAgICAgICBjb25zdCBsZXRzID0gZGVmaW5pdGlvblsyXShmbihkaXJ0eSkpO1xuICAgICAgICBpZiAoJCRzY29wZS5kaXJ0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbGV0cztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGxldHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25zdCBtZXJnZWQgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IE1hdGgubWF4KCQkc2NvcGUuZGlydHkubGVuZ3RoLCBsZXRzLmxlbmd0aCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgbWVyZ2VkW2ldID0gJCRzY29wZS5kaXJ0eVtpXSB8IGxldHNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAkJHNjb3BlLmRpcnR5IHwgbGV0cztcbiAgICB9XG4gICAgcmV0dXJuICQkc2NvcGUuZGlydHk7XG59XG5mdW5jdGlvbiB1cGRhdGVfc2xvdF9iYXNlKHNsb3QsIHNsb3RfZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBzbG90X2NoYW5nZXMsIGdldF9zbG90X2NvbnRleHRfZm4pIHtcbiAgICBpZiAoc2xvdF9jaGFuZ2VzKSB7XG4gICAgICAgIGNvbnN0IHNsb3RfY29udGV4dCA9IGdldF9zbG90X2NvbnRleHQoc2xvdF9kZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGdldF9zbG90X2NvbnRleHRfZm4pO1xuICAgICAgICBzbG90LnAoc2xvdF9jb250ZXh0LCBzbG90X2NoYW5nZXMpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZV9zbG90KHNsb3QsIHNsb3RfZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBkaXJ0eSwgZ2V0X3Nsb3RfY2hhbmdlc19mbiwgZ2V0X3Nsb3RfY29udGV4dF9mbikge1xuICAgIGNvbnN0IHNsb3RfY2hhbmdlcyA9IGdldF9zbG90X2NoYW5nZXMoc2xvdF9kZWZpbml0aW9uLCAkJHNjb3BlLCBkaXJ0eSwgZ2V0X3Nsb3RfY2hhbmdlc19mbik7XG4gICAgdXBkYXRlX3Nsb3RfYmFzZShzbG90LCBzbG90X2RlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgc2xvdF9jaGFuZ2VzLCBnZXRfc2xvdF9jb250ZXh0X2ZuKTtcbn1cbmZ1bmN0aW9uIGdldF9hbGxfZGlydHlfZnJvbV9zY29wZSgkJHNjb3BlKSB7XG4gICAgaWYgKCQkc2NvcGUuY3R4Lmxlbmd0aCA+IDMyKSB7XG4gICAgICAgIGNvbnN0IGRpcnR5ID0gW107XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9ICQkc2NvcGUuY3R4Lmxlbmd0aCAvIDMyO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkaXJ0eVtpXSA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaXJ0eTtcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufVxuZnVuY3Rpb24gZXhjbHVkZV9pbnRlcm5hbF9wcm9wcyhwcm9wcykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3QgayBpbiBwcm9wcylcbiAgICAgICAgaWYgKGtbMF0gIT09ICckJylcbiAgICAgICAgICAgIHJlc3VsdFtrXSA9IHByb3BzW2tdO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBjb21wdXRlX3Jlc3RfcHJvcHMocHJvcHMsIGtleXMpIHtcbiAgICBjb25zdCByZXN0ID0ge307XG4gICAga2V5cyA9IG5ldyBTZXQoa2V5cyk7XG4gICAgZm9yIChjb25zdCBrIGluIHByb3BzKVxuICAgICAgICBpZiAoIWtleXMuaGFzKGspICYmIGtbMF0gIT09ICckJylcbiAgICAgICAgICAgIHJlc3Rba10gPSBwcm9wc1trXTtcbiAgICByZXR1cm4gcmVzdDtcbn1cbmZ1bmN0aW9uIGNvbXB1dGVfc2xvdHMoc2xvdHMpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzbG90cykge1xuICAgICAgICByZXN1bHRba2V5XSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBvbmNlKGZuKSB7XG4gICAgbGV0IHJhbiA9IGZhbHNlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICBpZiAocmFuKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICByYW4gPSB0cnVlO1xuICAgICAgICBmbi5jYWxsKHRoaXMsIC4uLmFyZ3MpO1xuICAgIH07XG59XG5mdW5jdGlvbiBudWxsX3RvX2VtcHR5KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xufVxuZnVuY3Rpb24gc2V0X3N0b3JlX3ZhbHVlKHN0b3JlLCByZXQsIHZhbHVlKSB7XG4gICAgc3RvcmUuc2V0KHZhbHVlKTtcbiAgICByZXR1cm4gcmV0O1xufVxuY29uc3QgaGFzX3Byb3AgPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbmZ1bmN0aW9uIGFjdGlvbl9kZXN0cm95ZXIoYWN0aW9uX3Jlc3VsdCkge1xuICAgIHJldHVybiBhY3Rpb25fcmVzdWx0ICYmIGlzX2Z1bmN0aW9uKGFjdGlvbl9yZXN1bHQuZGVzdHJveSkgPyBhY3Rpb25fcmVzdWx0LmRlc3Ryb3kgOiBub29wO1xufVxuXG5jb25zdCBpc19jbGllbnQgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbmxldCBub3cgPSBpc19jbGllbnRcbiAgICA/ICgpID0+IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKVxuICAgIDogKCkgPT4gRGF0ZS5ub3coKTtcbmxldCByYWYgPSBpc19jbGllbnQgPyBjYiA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2IpIDogbm9vcDtcbi8vIHVzZWQgaW50ZXJuYWxseSBmb3IgdGVzdGluZ1xuZnVuY3Rpb24gc2V0X25vdyhmbikge1xuICAgIG5vdyA9IGZuO1xufVxuZnVuY3Rpb24gc2V0X3JhZihmbikge1xuICAgIHJhZiA9IGZuO1xufVxuXG5jb25zdCB0YXNrcyA9IG5ldyBTZXQoKTtcbmZ1bmN0aW9uIHJ1bl90YXNrcyhub3cpIHtcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBpZiAoIXRhc2suYyhub3cpKSB7XG4gICAgICAgICAgICB0YXNrcy5kZWxldGUodGFzayk7XG4gICAgICAgICAgICB0YXNrLmYoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0YXNrcy5zaXplICE9PSAwKVxuICAgICAgICByYWYocnVuX3Rhc2tzKTtcbn1cbi8qKlxuICogRm9yIHRlc3RpbmcgcHVycG9zZXMgb25seSFcbiAqL1xuZnVuY3Rpb24gY2xlYXJfbG9vcHMoKSB7XG4gICAgdGFza3MuY2xlYXIoKTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB0YXNrIHRoYXQgcnVucyBvbiBlYWNoIHJhZiBmcmFtZVxuICogdW50aWwgaXQgcmV0dXJucyBhIGZhbHN5IHZhbHVlIG9yIGlzIGFib3J0ZWRcbiAqL1xuZnVuY3Rpb24gbG9vcChjYWxsYmFjaykge1xuICAgIGxldCB0YXNrO1xuICAgIGlmICh0YXNrcy5zaXplID09PSAwKVxuICAgICAgICByYWYocnVuX3Rhc2tzKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9taXNlOiBuZXcgUHJvbWlzZShmdWxmaWxsID0+IHtcbiAgICAgICAgICAgIHRhc2tzLmFkZCh0YXNrID0geyBjOiBjYWxsYmFjaywgZjogZnVsZmlsbCB9KTtcbiAgICAgICAgfSksXG4gICAgICAgIGFib3J0KCkge1xuICAgICAgICAgICAgdGFza3MuZGVsZXRlKHRhc2spO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8gVHJhY2sgd2hpY2ggbm9kZXMgYXJlIGNsYWltZWQgZHVyaW5nIGh5ZHJhdGlvbi4gVW5jbGFpbWVkIG5vZGVzIGNhbiB0aGVuIGJlIHJlbW92ZWQgZnJvbSB0aGUgRE9NXG4vLyBhdCB0aGUgZW5kIG9mIGh5ZHJhdGlvbiB3aXRob3V0IHRvdWNoaW5nIHRoZSByZW1haW5pbmcgbm9kZXMuXG5sZXQgaXNfaHlkcmF0aW5nID0gZmFsc2U7XG5mdW5jdGlvbiBzdGFydF9oeWRyYXRpbmcoKSB7XG4gICAgaXNfaHlkcmF0aW5nID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGVuZF9oeWRyYXRpbmcoKSB7XG4gICAgaXNfaHlkcmF0aW5nID0gZmFsc2U7XG59XG5mdW5jdGlvbiB1cHBlcl9ib3VuZChsb3csIGhpZ2gsIGtleSwgdmFsdWUpIHtcbiAgICAvLyBSZXR1cm4gZmlyc3QgaW5kZXggb2YgdmFsdWUgbGFyZ2VyIHRoYW4gaW5wdXQgdmFsdWUgaW4gdGhlIHJhbmdlIFtsb3csIGhpZ2gpXG4gICAgd2hpbGUgKGxvdyA8IGhpZ2gpIHtcbiAgICAgICAgY29uc3QgbWlkID0gbG93ICsgKChoaWdoIC0gbG93KSA+PiAxKTtcbiAgICAgICAgaWYgKGtleShtaWQpIDw9IHZhbHVlKSB7XG4gICAgICAgICAgICBsb3cgPSBtaWQgKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaGlnaCA9IG1pZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbG93O1xufVxuZnVuY3Rpb24gaW5pdF9oeWRyYXRlKHRhcmdldCkge1xuICAgIGlmICh0YXJnZXQuaHlkcmF0ZV9pbml0KVxuICAgICAgICByZXR1cm47XG4gICAgdGFyZ2V0Lmh5ZHJhdGVfaW5pdCA9IHRydWU7XG4gICAgLy8gV2Uga25vdyB0aGF0IGFsbCBjaGlsZHJlbiBoYXZlIGNsYWltX29yZGVyIHZhbHVlcyBzaW5jZSB0aGUgdW5jbGFpbWVkIGhhdmUgYmVlbiBkZXRhY2hlZCBpZiB0YXJnZXQgaXMgbm90IDxoZWFkPlxuICAgIGxldCBjaGlsZHJlbiA9IHRhcmdldC5jaGlsZE5vZGVzO1xuICAgIC8vIElmIHRhcmdldCBpcyA8aGVhZD4sIHRoZXJlIG1heSBiZSBjaGlsZHJlbiB3aXRob3V0IGNsYWltX29yZGVyXG4gICAgaWYgKHRhcmdldC5ub2RlTmFtZSA9PT0gJ0hFQUQnKSB7XG4gICAgICAgIGNvbnN0IG15Q2hpbGRyZW4gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKG5vZGUuY2xhaW1fb3JkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG15Q2hpbGRyZW4ucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjaGlsZHJlbiA9IG15Q2hpbGRyZW47XG4gICAgfVxuICAgIC8qXG4gICAgKiBSZW9yZGVyIGNsYWltZWQgY2hpbGRyZW4gb3B0aW1hbGx5LlxuICAgICogV2UgY2FuIHJlb3JkZXIgY2xhaW1lZCBjaGlsZHJlbiBvcHRpbWFsbHkgYnkgZmluZGluZyB0aGUgbG9uZ2VzdCBzdWJzZXF1ZW5jZSBvZlxuICAgICogbm9kZXMgdGhhdCBhcmUgYWxyZWFkeSBjbGFpbWVkIGluIG9yZGVyIGFuZCBvbmx5IG1vdmluZyB0aGUgcmVzdC4gVGhlIGxvbmdlc3RcbiAgICAqIHN1YnNlcXVlbmNlIHN1YnNlcXVlbmNlIG9mIG5vZGVzIHRoYXQgYXJlIGNsYWltZWQgaW4gb3JkZXIgY2FuIGJlIGZvdW5kIGJ5XG4gICAgKiBjb21wdXRpbmcgdGhlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBvZiAuY2xhaW1fb3JkZXIgdmFsdWVzLlxuICAgICpcbiAgICAqIFRoaXMgYWxnb3JpdGhtIGlzIG9wdGltYWwgaW4gZ2VuZXJhdGluZyB0aGUgbGVhc3QgYW1vdW50IG9mIHJlb3JkZXIgb3BlcmF0aW9uc1xuICAgICogcG9zc2libGUuXG4gICAgKlxuICAgICogUHJvb2Y6XG4gICAgKiBXZSBrbm93IHRoYXQsIGdpdmVuIGEgc2V0IG9mIHJlb3JkZXJpbmcgb3BlcmF0aW9ucywgdGhlIG5vZGVzIHRoYXQgZG8gbm90IG1vdmVcbiAgICAqIGFsd2F5cyBmb3JtIGFuIGluY3JlYXNpbmcgc3Vic2VxdWVuY2UsIHNpbmNlIHRoZXkgZG8gbm90IG1vdmUgYW1vbmcgZWFjaCBvdGhlclxuICAgICogbWVhbmluZyB0aGF0IHRoZXkgbXVzdCBiZSBhbHJlYWR5IG9yZGVyZWQgYW1vbmcgZWFjaCBvdGhlci4gVGh1cywgdGhlIG1heGltYWxcbiAgICAqIHNldCBvZiBub2RlcyB0aGF0IGRvIG5vdCBtb3ZlIGZvcm0gYSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2UuXG4gICAgKi9cbiAgICAvLyBDb21wdXRlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZVxuICAgIC8vIG06IHN1YnNlcXVlbmNlIGxlbmd0aCBqID0+IGluZGV4IGsgb2Ygc21hbGxlc3QgdmFsdWUgdGhhdCBlbmRzIGFuIGluY3JlYXNpbmcgc3Vic2VxdWVuY2Ugb2YgbGVuZ3RoIGpcbiAgICBjb25zdCBtID0gbmV3IEludDMyQXJyYXkoY2hpbGRyZW4ubGVuZ3RoICsgMSk7XG4gICAgLy8gUHJlZGVjZXNzb3IgaW5kaWNlcyArIDFcbiAgICBjb25zdCBwID0gbmV3IEludDMyQXJyYXkoY2hpbGRyZW4ubGVuZ3RoKTtcbiAgICBtWzBdID0gLTE7XG4gICAgbGV0IGxvbmdlc3QgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGNoaWxkcmVuW2ldLmNsYWltX29yZGVyO1xuICAgICAgICAvLyBGaW5kIHRoZSBsYXJnZXN0IHN1YnNlcXVlbmNlIGxlbmd0aCBzdWNoIHRoYXQgaXQgZW5kcyBpbiBhIHZhbHVlIGxlc3MgdGhhbiBvdXIgY3VycmVudCB2YWx1ZVxuICAgICAgICAvLyB1cHBlcl9ib3VuZCByZXR1cm5zIGZpcnN0IGdyZWF0ZXIgdmFsdWUsIHNvIHdlIHN1YnRyYWN0IG9uZVxuICAgICAgICAvLyB3aXRoIGZhc3QgcGF0aCBmb3Igd2hlbiB3ZSBhcmUgb24gdGhlIGN1cnJlbnQgbG9uZ2VzdCBzdWJzZXF1ZW5jZVxuICAgICAgICBjb25zdCBzZXFMZW4gPSAoKGxvbmdlc3QgPiAwICYmIGNoaWxkcmVuW21bbG9uZ2VzdF1dLmNsYWltX29yZGVyIDw9IGN1cnJlbnQpID8gbG9uZ2VzdCArIDEgOiB1cHBlcl9ib3VuZCgxLCBsb25nZXN0LCBpZHggPT4gY2hpbGRyZW5bbVtpZHhdXS5jbGFpbV9vcmRlciwgY3VycmVudCkpIC0gMTtcbiAgICAgICAgcFtpXSA9IG1bc2VxTGVuXSArIDE7XG4gICAgICAgIGNvbnN0IG5ld0xlbiA9IHNlcUxlbiArIDE7XG4gICAgICAgIC8vIFdlIGNhbiBndWFyYW50ZWUgdGhhdCBjdXJyZW50IGlzIHRoZSBzbWFsbGVzdCB2YWx1ZS4gT3RoZXJ3aXNlLCB3ZSB3b3VsZCBoYXZlIGdlbmVyYXRlZCBhIGxvbmdlciBzZXF1ZW5jZS5cbiAgICAgICAgbVtuZXdMZW5dID0gaTtcbiAgICAgICAgbG9uZ2VzdCA9IE1hdGgubWF4KG5ld0xlbiwgbG9uZ2VzdCk7XG4gICAgfVxuICAgIC8vIFRoZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2Ugb2Ygbm9kZXMgKGluaXRpYWxseSByZXZlcnNlZClcbiAgICBjb25zdCBsaXMgPSBbXTtcbiAgICAvLyBUaGUgcmVzdCBvZiB0aGUgbm9kZXMsIG5vZGVzIHRoYXQgd2lsbCBiZSBtb3ZlZFxuICAgIGNvbnN0IHRvTW92ZSA9IFtdO1xuICAgIGxldCBsYXN0ID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICBmb3IgKGxldCBjdXIgPSBtW2xvbmdlc3RdICsgMTsgY3VyICE9IDA7IGN1ciA9IHBbY3VyIC0gMV0pIHtcbiAgICAgICAgbGlzLnB1c2goY2hpbGRyZW5bY3VyIC0gMV0pO1xuICAgICAgICBmb3IgKDsgbGFzdCA+PSBjdXI7IGxhc3QtLSkge1xuICAgICAgICAgICAgdG9Nb3ZlLnB1c2goY2hpbGRyZW5bbGFzdF0pO1xuICAgICAgICB9XG4gICAgICAgIGxhc3QtLTtcbiAgICB9XG4gICAgZm9yICg7IGxhc3QgPj0gMDsgbGFzdC0tKSB7XG4gICAgICAgIHRvTW92ZS5wdXNoKGNoaWxkcmVuW2xhc3RdKTtcbiAgICB9XG4gICAgbGlzLnJldmVyc2UoKTtcbiAgICAvLyBXZSBzb3J0IHRoZSBub2RlcyBiZWluZyBtb3ZlZCB0byBndWFyYW50ZWUgdGhhdCB0aGVpciBpbnNlcnRpb24gb3JkZXIgbWF0Y2hlcyB0aGUgY2xhaW0gb3JkZXJcbiAgICB0b01vdmUuc29ydCgoYSwgYikgPT4gYS5jbGFpbV9vcmRlciAtIGIuY2xhaW1fb3JkZXIpO1xuICAgIC8vIEZpbmFsbHksIHdlIG1vdmUgdGhlIG5vZGVzXG4gICAgZm9yIChsZXQgaSA9IDAsIGogPSAwOyBpIDwgdG9Nb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHdoaWxlIChqIDwgbGlzLmxlbmd0aCAmJiB0b01vdmVbaV0uY2xhaW1fb3JkZXIgPj0gbGlzW2pdLmNsYWltX29yZGVyKSB7XG4gICAgICAgICAgICBqKys7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYW5jaG9yID0gaiA8IGxpcy5sZW5ndGggPyBsaXNbal0gOiBudWxsO1xuICAgICAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlKHRvTW92ZVtpXSwgYW5jaG9yKTtcbiAgICB9XG59XG5mdW5jdGlvbiBhcHBlbmQodGFyZ2V0LCBub2RlKSB7XG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xufVxuZnVuY3Rpb24gYXBwZW5kX3N0eWxlcyh0YXJnZXQsIHN0eWxlX3NoZWV0X2lkLCBzdHlsZXMpIHtcbiAgICBjb25zdCBhcHBlbmRfc3R5bGVzX3RvID0gZ2V0X3Jvb3RfZm9yX3N0eWxlKHRhcmdldCk7XG4gICAgaWYgKCFhcHBlbmRfc3R5bGVzX3RvLmdldEVsZW1lbnRCeUlkKHN0eWxlX3NoZWV0X2lkKSkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IGVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHN0eWxlLmlkID0gc3R5bGVfc2hlZXRfaWQ7XG4gICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gc3R5bGVzO1xuICAgICAgICBhcHBlbmRfc3R5bGVzaGVldChhcHBlbmRfc3R5bGVzX3RvLCBzdHlsZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0X3Jvb3RfZm9yX3N0eWxlKG5vZGUpIHtcbiAgICBpZiAoIW5vZGUpXG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICBjb25zdCByb290ID0gbm9kZS5nZXRSb290Tm9kZSA/IG5vZGUuZ2V0Um9vdE5vZGUoKSA6IG5vZGUub3duZXJEb2N1bWVudDtcbiAgICBpZiAocm9vdCAmJiByb290Lmhvc3QpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfVxuICAgIHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQ7XG59XG5mdW5jdGlvbiBhcHBlbmRfZW1wdHlfc3R5bGVzaGVldChub2RlKSB7XG4gICAgY29uc3Qgc3R5bGVfZWxlbWVudCA9IGVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgYXBwZW5kX3N0eWxlc2hlZXQoZ2V0X3Jvb3RfZm9yX3N0eWxlKG5vZGUpLCBzdHlsZV9lbGVtZW50KTtcbiAgICByZXR1cm4gc3R5bGVfZWxlbWVudC5zaGVldDtcbn1cbmZ1bmN0aW9uIGFwcGVuZF9zdHlsZXNoZWV0KG5vZGUsIHN0eWxlKSB7XG4gICAgYXBwZW5kKG5vZGUuaGVhZCB8fCBub2RlLCBzdHlsZSk7XG59XG5mdW5jdGlvbiBhcHBlbmRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSkge1xuICAgIGlmIChpc19oeWRyYXRpbmcpIHtcbiAgICAgICAgaW5pdF9oeWRyYXRlKHRhcmdldCk7XG4gICAgICAgIGlmICgodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPT09IHVuZGVmaW5lZCkgfHwgKCh0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCAhPT0gbnVsbCkgJiYgKHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkLnBhcmVudEVsZW1lbnQgIT09IHRhcmdldCkpKSB7XG4gICAgICAgICAgICB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCA9IHRhcmdldC5maXJzdENoaWxkO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNraXAgbm9kZXMgb2YgdW5kZWZpbmVkIG9yZGVyaW5nXG4gICAgICAgIHdoaWxlICgodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgIT09IG51bGwpICYmICh0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZC5jbGFpbV9vcmRlciA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPSB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZSAhPT0gdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQpIHtcbiAgICAgICAgICAgIC8vIFdlIG9ubHkgaW5zZXJ0IGlmIHRoZSBvcmRlcmluZyBvZiB0aGlzIG5vZGUgc2hvdWxkIGJlIG1vZGlmaWVkIG9yIHRoZSBwYXJlbnQgbm9kZSBpcyBub3QgdGFyZ2V0XG4gICAgICAgICAgICBpZiAobm9kZS5jbGFpbV9vcmRlciAhPT0gdW5kZWZpbmVkIHx8IG5vZGUucGFyZW50Tm9kZSAhPT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCA9IG5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlICE9PSB0YXJnZXQgfHwgbm9kZS5uZXh0U2libGluZyAhPT0gbnVsbCkge1xuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gaW5zZXJ0KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IgfHwgbnVsbCk7XG59XG5mdW5jdGlvbiBpbnNlcnRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgaWYgKGlzX2h5ZHJhdGluZyAmJiAhYW5jaG9yKSB7XG4gICAgICAgIGFwcGVuZF9oeWRyYXRpb24odGFyZ2V0LCBub2RlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlICE9PSB0YXJnZXQgfHwgbm9kZS5uZXh0U2libGluZyAhPSBhbmNob3IpIHtcbiAgICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IgfHwgbnVsbCk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGV0YWNoKG5vZGUpIHtcbiAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG59XG5mdW5jdGlvbiBkZXN0cm95X2VhY2goaXRlcmF0aW9ucywgZGV0YWNoaW5nKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVyYXRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChpdGVyYXRpb25zW2ldKVxuICAgICAgICAgICAgaXRlcmF0aW9uc1tpXS5kKGRldGFjaGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZWxlbWVudChuYW1lKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG59XG5mdW5jdGlvbiBlbGVtZW50X2lzKG5hbWUsIGlzKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSwgeyBpcyB9KTtcbn1cbmZ1bmN0aW9uIG9iamVjdF93aXRob3V0X3Byb3BlcnRpZXMob2JqLCBleGNsdWRlKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0ge307XG4gICAgZm9yIChjb25zdCBrIGluIG9iaikge1xuICAgICAgICBpZiAoaGFzX3Byb3Aob2JqLCBrKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgJiYgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdGFyZ2V0W2tdID0gb2JqW2tdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBzdmdfZWxlbWVudChuYW1lKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBuYW1lKTtcbn1cbmZ1bmN0aW9uIHRleHQoZGF0YSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKTtcbn1cbmZ1bmN0aW9uIHNwYWNlKCkge1xuICAgIHJldHVybiB0ZXh0KCcgJyk7XG59XG5mdW5jdGlvbiBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGV4dCgnJyk7XG59XG5mdW5jdGlvbiBsaXN0ZW4obm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIHJldHVybiAoKSA9PiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcHJldmVudF9kZWZhdWx0KGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gc3RvcF9wcm9wYWdhdGlvbihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH07XG59XG5mdW5jdGlvbiBzZWxmKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMpXG4gICAgICAgICAgICBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gdHJ1c3RlZChmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoZXZlbnQuaXNUcnVzdGVkKVxuICAgICAgICAgICAgZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGF0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKVxuICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgIGVsc2UgaWYgKG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSkgIT09IHZhbHVlKVxuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHNldF9hdHRyaWJ1dGVzKG5vZGUsIGF0dHJpYnV0ZXMpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgZGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhub2RlLl9fcHJvdG9fXyk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICBpZiAoYXR0cmlidXRlc1trZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlLmNzc1RleHQgPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5ID09PSAnX192YWx1ZScpIHtcbiAgICAgICAgICAgIG5vZGUudmFsdWUgPSBub2RlW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGVzY3JpcHRvcnNba2V5XSAmJiBkZXNjcmlwdG9yc1trZXldLnNldCkge1xuICAgICAgICAgICAgbm9kZVtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBzZXRfc3ZnX2F0dHJpYnV0ZXMobm9kZSwgYXR0cmlidXRlcykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgYXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X2N1c3RvbV9lbGVtZW50X2RhdGEobm9kZSwgcHJvcCwgdmFsdWUpIHtcbiAgICBpZiAocHJvcCBpbiBub2RlKSB7XG4gICAgICAgIG5vZGVbcHJvcF0gPSB0eXBlb2Ygbm9kZVtwcm9wXSA9PT0gJ2Jvb2xlYW4nICYmIHZhbHVlID09PSAnJyA/IHRydWUgOiB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGF0dHIobm9kZSwgcHJvcCwgdmFsdWUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHhsaW5rX2F0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIG5vZGUuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCBhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGdldF9iaW5kaW5nX2dyb3VwX3ZhbHVlKGdyb3VwLCBfX3ZhbHVlLCBjaGVja2VkKSB7XG4gICAgY29uc3QgdmFsdWUgPSBuZXcgU2V0KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncm91cC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoZ3JvdXBbaV0uY2hlY2tlZClcbiAgICAgICAgICAgIHZhbHVlLmFkZChncm91cFtpXS5fX3ZhbHVlKTtcbiAgICB9XG4gICAgaWYgKCFjaGVja2VkKSB7XG4gICAgICAgIHZhbHVlLmRlbGV0ZShfX3ZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20odmFsdWUpO1xufVxuZnVuY3Rpb24gdG9fbnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAnJyA/IG51bGwgOiArdmFsdWU7XG59XG5mdW5jdGlvbiB0aW1lX3Jhbmdlc190b19hcnJheShyYW5nZXMpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGFycmF5LnB1c2goeyBzdGFydDogcmFuZ2VzLnN0YXJ0KGkpLCBlbmQ6IHJhbmdlcy5lbmQoaSkgfSk7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbn1cbmZ1bmN0aW9uIGNoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpO1xufVxuZnVuY3Rpb24gaW5pdF9jbGFpbV9pbmZvKG5vZGVzKSB7XG4gICAgaWYgKG5vZGVzLmNsYWltX2luZm8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBub2Rlcy5jbGFpbV9pbmZvID0geyBsYXN0X2luZGV4OiAwLCB0b3RhbF9jbGFpbWVkOiAwIH07XG4gICAgfVxufVxuZnVuY3Rpb24gY2xhaW1fbm9kZShub2RlcywgcHJlZGljYXRlLCBwcm9jZXNzTm9kZSwgY3JlYXRlTm9kZSwgZG9udFVwZGF0ZUxhc3RJbmRleCA9IGZhbHNlKSB7XG4gICAgLy8gVHJ5IHRvIGZpbmQgbm9kZXMgaW4gYW4gb3JkZXIgc3VjaCB0aGF0IHdlIGxlbmd0aGVuIHRoZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2VcbiAgICBpbml0X2NsYWltX2luZm8obm9kZXMpO1xuICAgIGNvbnN0IHJlc3VsdE5vZGUgPSAoKCkgPT4ge1xuICAgICAgICAvLyBXZSBmaXJzdCB0cnkgdG8gZmluZCBhbiBlbGVtZW50IGFmdGVyIHRoZSBwcmV2aW91cyBvbmVcbiAgICAgICAgZm9yIChsZXQgaSA9IG5vZGVzLmNsYWltX2luZm8ubGFzdF9pbmRleDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgICAgICBpZiAocHJlZGljYXRlKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSBwcm9jZXNzTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVwbGFjZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2Rlc1tpXSA9IHJlcGxhY2VtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWRvbnRVcGRhdGVMYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4ID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSB0cnkgdG8gZmluZCBvbmUgYmVmb3JlXG4gICAgICAgIC8vIFdlIGl0ZXJhdGUgaW4gcmV2ZXJzZSBzbyB0aGF0IHdlIGRvbid0IGdvIHRvbyBmYXIgYmFja1xuICAgICAgICBmb3IgKGxldCBpID0gbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgICAgIGlmIChwcmVkaWNhdGUobm9kZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXBsYWNlbWVudCA9IHByb2Nlc3NOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgIGlmIChyZXBsYWNlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzW2ldID0gcmVwbGFjZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZG9udFVwZGF0ZUxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXBsYWNlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHdlIHNwbGljZWQgYmVmb3JlIHRoZSBsYXN0X2luZGV4LCB3ZSBkZWNyZWFzZSBpdFxuICAgICAgICAgICAgICAgICAgICBub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXgtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgd2UgY2FuJ3QgZmluZCBhbnkgbWF0Y2hpbmcgbm9kZSwgd2UgY3JlYXRlIGEgbmV3IG9uZVxuICAgICAgICByZXR1cm4gY3JlYXRlTm9kZSgpO1xuICAgIH0pKCk7XG4gICAgcmVzdWx0Tm9kZS5jbGFpbV9vcmRlciA9IG5vZGVzLmNsYWltX2luZm8udG90YWxfY2xhaW1lZDtcbiAgICBub2Rlcy5jbGFpbV9pbmZvLnRvdGFsX2NsYWltZWQgKz0gMTtcbiAgICByZXR1cm4gcmVzdWx0Tm9kZTtcbn1cbmZ1bmN0aW9uIGNsYWltX2VsZW1lbnRfYmFzZShub2RlcywgbmFtZSwgYXR0cmlidXRlcywgY3JlYXRlX2VsZW1lbnQpIHtcbiAgICByZXR1cm4gY2xhaW1fbm9kZShub2RlcywgKG5vZGUpID0+IG5vZGUubm9kZU5hbWUgPT09IG5hbWUsIChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbW92ZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gbm9kZS5hdHRyaWJ1dGVzW2pdO1xuICAgICAgICAgICAgaWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZS5uYW1lXSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZS5wdXNoKGF0dHJpYnV0ZS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZW1vdmUuZm9yRWFjaCh2ID0+IG5vZGUucmVtb3ZlQXR0cmlidXRlKHYpKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LCAoKSA9PiBjcmVhdGVfZWxlbWVudChuYW1lKSk7XG59XG5mdW5jdGlvbiBjbGFpbV9lbGVtZW50KG5vZGVzLCBuYW1lLCBhdHRyaWJ1dGVzKSB7XG4gICAgcmV0dXJuIGNsYWltX2VsZW1lbnRfYmFzZShub2RlcywgbmFtZSwgYXR0cmlidXRlcywgZWxlbWVudCk7XG59XG5mdW5jdGlvbiBjbGFpbV9zdmdfZWxlbWVudChub2RlcywgbmFtZSwgYXR0cmlidXRlcykge1xuICAgIHJldHVybiBjbGFpbV9lbGVtZW50X2Jhc2Uobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMsIHN2Z19lbGVtZW50KTtcbn1cbmZ1bmN0aW9uIGNsYWltX3RleHQobm9kZXMsIGRhdGEpIHtcbiAgICByZXR1cm4gY2xhaW1fbm9kZShub2RlcywgKG5vZGUpID0+IG5vZGUubm9kZVR5cGUgPT09IDMsIChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFTdHIgPSAnJyArIGRhdGE7XG4gICAgICAgIGlmIChub2RlLmRhdGEuc3RhcnRzV2l0aChkYXRhU3RyKSkge1xuICAgICAgICAgICAgaWYgKG5vZGUuZGF0YS5sZW5ndGggIT09IGRhdGFTdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuc3BsaXRUZXh0KGRhdGFTdHIubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuZGF0YSA9IGRhdGFTdHI7XG4gICAgICAgIH1cbiAgICB9LCAoKSA9PiB0ZXh0KGRhdGEpLCB0cnVlIC8vIFRleHQgbm9kZXMgc2hvdWxkIG5vdCB1cGRhdGUgbGFzdCBpbmRleCBzaW5jZSBpdCBpcyBsaWtlbHkgbm90IHdvcnRoIGl0IHRvIGVsaW1pbmF0ZSBhbiBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIG9mIGFjdHVhbCBlbGVtZW50c1xuICAgICk7XG59XG5mdW5jdGlvbiBjbGFpbV9zcGFjZShub2Rlcykge1xuICAgIHJldHVybiBjbGFpbV90ZXh0KG5vZGVzLCAnICcpO1xufVxuZnVuY3Rpb24gZmluZF9jb21tZW50KG5vZGVzLCB0ZXh0LCBzdGFydCkge1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDggLyogY29tbWVudCBub2RlICovICYmIG5vZGUudGV4dENvbnRlbnQudHJpbSgpID09PSB0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZXMubGVuZ3RoO1xufVxuZnVuY3Rpb24gY2xhaW1faHRtbF90YWcobm9kZXMpIHtcbiAgICAvLyBmaW5kIGh0bWwgb3BlbmluZyB0YWdcbiAgICBjb25zdCBzdGFydF9pbmRleCA9IGZpbmRfY29tbWVudChub2RlcywgJ0hUTUxfVEFHX1NUQVJUJywgMCk7XG4gICAgY29uc3QgZW5kX2luZGV4ID0gZmluZF9jb21tZW50KG5vZGVzLCAnSFRNTF9UQUdfRU5EJywgc3RhcnRfaW5kZXgpO1xuICAgIGlmIChzdGFydF9pbmRleCA9PT0gZW5kX2luZGV4KSB7XG4gICAgICAgIHJldHVybiBuZXcgSHRtbFRhZ0h5ZHJhdGlvbigpO1xuICAgIH1cbiAgICBpbml0X2NsYWltX2luZm8obm9kZXMpO1xuICAgIGNvbnN0IGh0bWxfdGFnX25vZGVzID0gbm9kZXMuc3BsaWNlKHN0YXJ0X2luZGV4LCBlbmRfaW5kZXggLSBzdGFydF9pbmRleCArIDEpO1xuICAgIGRldGFjaChodG1sX3RhZ19ub2Rlc1swXSk7XG4gICAgZGV0YWNoKGh0bWxfdGFnX25vZGVzW2h0bWxfdGFnX25vZGVzLmxlbmd0aCAtIDFdKTtcbiAgICBjb25zdCBjbGFpbWVkX25vZGVzID0gaHRtbF90YWdfbm9kZXMuc2xpY2UoMSwgaHRtbF90YWdfbm9kZXMubGVuZ3RoIC0gMSk7XG4gICAgZm9yIChjb25zdCBuIG9mIGNsYWltZWRfbm9kZXMpIHtcbiAgICAgICAgbi5jbGFpbV9vcmRlciA9IG5vZGVzLmNsYWltX2luZm8udG90YWxfY2xhaW1lZDtcbiAgICAgICAgbm9kZXMuY2xhaW1faW5mby50b3RhbF9jbGFpbWVkICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBuZXcgSHRtbFRhZ0h5ZHJhdGlvbihjbGFpbWVkX25vZGVzKTtcbn1cbmZ1bmN0aW9uIHNldF9kYXRhKHRleHQsIGRhdGEpIHtcbiAgICBkYXRhID0gJycgKyBkYXRhO1xuICAgIGlmICh0ZXh0Lndob2xlVGV4dCAhPT0gZGF0YSlcbiAgICAgICAgdGV4dC5kYXRhID0gZGF0YTtcbn1cbmZ1bmN0aW9uIHNldF9pbnB1dF92YWx1ZShpbnB1dCwgdmFsdWUpIHtcbiAgICBpbnB1dC52YWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xufVxuZnVuY3Rpb24gc2V0X2lucHV0X3R5cGUoaW5wdXQsIHR5cGUpIHtcbiAgICB0cnkge1xuICAgICAgICBpbnB1dC50eXBlID0gdHlwZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNldF9zdHlsZShub2RlLCBrZXksIHZhbHVlLCBpbXBvcnRhbnQpIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgbm9kZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShrZXkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlLCBpbXBvcnRhbnQgPyAnaW1wb3J0YW50JyA6ICcnKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZWxlY3Rfb3B0aW9uKHNlbGVjdCwgdmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuICAgICAgICBpZiAob3B0aW9uLl9fdmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNlbGVjdC5zZWxlY3RlZEluZGV4ID0gLTE7IC8vIG5vIG9wdGlvbiBzaG91bGQgYmUgc2VsZWN0ZWRcbn1cbmZ1bmN0aW9uIHNlbGVjdF9vcHRpb25zKHNlbGVjdCwgdmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB+dmFsdWUuaW5kZXhPZihvcHRpb24uX192YWx1ZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2VsZWN0X3ZhbHVlKHNlbGVjdCkge1xuICAgIGNvbnN0IHNlbGVjdGVkX29wdGlvbiA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpIHx8IHNlbGVjdC5vcHRpb25zWzBdO1xuICAgIHJldHVybiBzZWxlY3RlZF9vcHRpb24gJiYgc2VsZWN0ZWRfb3B0aW9uLl9fdmFsdWU7XG59XG5mdW5jdGlvbiBzZWxlY3RfbXVsdGlwbGVfdmFsdWUoc2VsZWN0KSB7XG4gICAgcmV0dXJuIFtdLm1hcC5jYWxsKHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCc6Y2hlY2tlZCcpLCBvcHRpb24gPT4gb3B0aW9uLl9fdmFsdWUpO1xufVxuLy8gdW5mb3J0dW5hdGVseSB0aGlzIGNhbid0IGJlIGEgY29uc3RhbnQgYXMgdGhhdCB3b3VsZG4ndCBiZSB0cmVlLXNoYWtlYWJsZVxuLy8gc28gd2UgY2FjaGUgdGhlIHJlc3VsdCBpbnN0ZWFkXG5sZXQgY3Jvc3NvcmlnaW47XG5mdW5jdGlvbiBpc19jcm9zc29yaWdpbigpIHtcbiAgICBpZiAoY3Jvc3NvcmlnaW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjcm9zc29yaWdpbiA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB2b2lkIHdpbmRvdy5wYXJlbnQuZG9jdW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjcm9zc29yaWdpbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNyb3Nzb3JpZ2luO1xufVxuZnVuY3Rpb24gYWRkX3Jlc2l6ZV9saXN0ZW5lcihub2RlLCBmbikge1xuICAgIGNvbnN0IGNvbXB1dGVkX3N0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBpZiAoY29tcHV0ZWRfc3R5bGUucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIG5vZGUuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIH1cbiAgICBjb25zdCBpZnJhbWUgPSBlbGVtZW50KCdpZnJhbWUnKTtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBibG9jazsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7ICcgK1xuICAgICAgICAnb3ZlcmZsb3c6IGhpZGRlbjsgYm9yZGVyOiAwOyBvcGFjaXR5OiAwOyBwb2ludGVyLWV2ZW50czogbm9uZTsgei1pbmRleDogLTE7Jyk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIGlmcmFtZS50YWJJbmRleCA9IC0xO1xuICAgIGNvbnN0IGNyb3Nzb3JpZ2luID0gaXNfY3Jvc3NvcmlnaW4oKTtcbiAgICBsZXQgdW5zdWJzY3JpYmU7XG4gICAgaWYgKGNyb3Nzb3JpZ2luKSB7XG4gICAgICAgIGlmcmFtZS5zcmMgPSBcImRhdGE6dGV4dC9odG1sLDxzY3JpcHQ+b25yZXNpemU9ZnVuY3Rpb24oKXtwYXJlbnQucG9zdE1lc3NhZ2UoMCwnKicpfTwvc2NyaXB0PlwiO1xuICAgICAgICB1bnN1YnNjcmliZSA9IGxpc3Rlbih3aW5kb3csICdtZXNzYWdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBpZnJhbWUuY29udGVudFdpbmRvdylcbiAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmcmFtZS5zcmMgPSAnYWJvdXQ6YmxhbmsnO1xuICAgICAgICBpZnJhbWUub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUgPSBsaXN0ZW4oaWZyYW1lLmNvbnRlbnRXaW5kb3csICdyZXNpemUnLCBmbik7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGFwcGVuZChub2RlLCBpZnJhbWUpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmIChjcm9zc29yaWdpbikge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh1bnN1YnNjcmliZSAmJiBpZnJhbWUuY29udGVudFdpbmRvdykge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICBkZXRhY2goaWZyYW1lKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gdG9nZ2xlX2NsYXNzKGVsZW1lbnQsIG5hbWUsIHRvZ2dsZSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0W3RvZ2dsZSA/ICdhZGQnIDogJ3JlbW92ZSddKG5hbWUpO1xufVxuZnVuY3Rpb24gY3VzdG9tX2V2ZW50KHR5cGUsIGRldGFpbCwgYnViYmxlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgIGUuaW5pdEN1c3RvbUV2ZW50KHR5cGUsIGJ1YmJsZXMsIGZhbHNlLCBkZXRhaWwpO1xuICAgIHJldHVybiBlO1xufVxuZnVuY3Rpb24gcXVlcnlfc2VsZWN0b3JfYWxsKHNlbGVjdG9yLCBwYXJlbnQgPSBkb2N1bWVudC5ib2R5KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20ocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbn1cbmNsYXNzIEh0bWxUYWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmUgPSB0aGlzLm4gPSBudWxsO1xuICAgIH1cbiAgICBjKGh0bWwpIHtcbiAgICAgICAgdGhpcy5oKGh0bWwpO1xuICAgIH1cbiAgICBtKGh0bWwsIHRhcmdldCwgYW5jaG9yID0gbnVsbCkge1xuICAgICAgICBpZiAoIXRoaXMuZSkge1xuICAgICAgICAgICAgdGhpcy5lID0gZWxlbWVudCh0YXJnZXQubm9kZU5hbWUpO1xuICAgICAgICAgICAgdGhpcy50ID0gdGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy5jKGh0bWwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaShhbmNob3IpO1xuICAgIH1cbiAgICBoKGh0bWwpIHtcbiAgICAgICAgdGhpcy5lLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIHRoaXMubiA9IEFycmF5LmZyb20odGhpcy5lLmNoaWxkTm9kZXMpO1xuICAgIH1cbiAgICBpKGFuY2hvcikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaW5zZXJ0KHRoaXMudCwgdGhpcy5uW2ldLCBhbmNob3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHAoaHRtbCkge1xuICAgICAgICB0aGlzLmQoKTtcbiAgICAgICAgdGhpcy5oKGh0bWwpO1xuICAgICAgICB0aGlzLmkodGhpcy5hKTtcbiAgICB9XG4gICAgZCgpIHtcbiAgICAgICAgdGhpcy5uLmZvckVhY2goZGV0YWNoKTtcbiAgICB9XG59XG5jbGFzcyBIdG1sVGFnSHlkcmF0aW9uIGV4dGVuZHMgSHRtbFRhZyB7XG4gICAgY29uc3RydWN0b3IoY2xhaW1lZF9ub2Rlcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmUgPSB0aGlzLm4gPSBudWxsO1xuICAgICAgICB0aGlzLmwgPSBjbGFpbWVkX25vZGVzO1xuICAgIH1cbiAgICBjKGh0bWwpIHtcbiAgICAgICAgaWYgKHRoaXMubCkge1xuICAgICAgICAgICAgdGhpcy5uID0gdGhpcy5sO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIuYyhodG1sKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpKGFuY2hvcikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaW5zZXJ0X2h5ZHJhdGlvbih0aGlzLnQsIHRoaXMubltpXSwgYW5jaG9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGF0dHJpYnV0ZV90b19vYmplY3QoYXR0cmlidXRlcykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3QgYXR0cmlidXRlIG9mIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmVzdWx0W2F0dHJpYnV0ZS5uYW1lXSA9IGF0dHJpYnV0ZS52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGdldF9jdXN0b21fZWxlbWVudHNfc2xvdHMoZWxlbWVudCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgIHJlc3VsdFtub2RlLnNsb3QgfHwgJ2RlZmF1bHQnXSA9IHRydWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gd2UgbmVlZCB0byBzdG9yZSB0aGUgaW5mb3JtYXRpb24gZm9yIG11bHRpcGxlIGRvY3VtZW50cyBiZWNhdXNlIGEgU3ZlbHRlIGFwcGxpY2F0aW9uIGNvdWxkIGFsc28gY29udGFpbiBpZnJhbWVzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vc3ZlbHRlanMvc3ZlbHRlL2lzc3Vlcy8zNjI0XG5jb25zdCBtYW5hZ2VkX3N0eWxlcyA9IG5ldyBNYXAoKTtcbmxldCBhY3RpdmUgPSAwO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Rhcmtza3lhcHAvc3RyaW5nLWhhc2gvYmxvYi9tYXN0ZXIvaW5kZXguanNcbmZ1bmN0aW9uIGhhc2goc3RyKSB7XG4gICAgbGV0IGhhc2ggPSA1MzgxO1xuICAgIGxldCBpID0gc3RyLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKVxuICAgICAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgXiBzdHIuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gaGFzaCA+Pj4gMDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9zdHlsZV9pbmZvcm1hdGlvbihkb2MsIG5vZGUpIHtcbiAgICBjb25zdCBpbmZvID0geyBzdHlsZXNoZWV0OiBhcHBlbmRfZW1wdHlfc3R5bGVzaGVldChub2RlKSwgcnVsZXM6IHt9IH07XG4gICAgbWFuYWdlZF9zdHlsZXMuc2V0KGRvYywgaW5mbyk7XG4gICAgcmV0dXJuIGluZm87XG59XG5mdW5jdGlvbiBjcmVhdGVfcnVsZShub2RlLCBhLCBiLCBkdXJhdGlvbiwgZGVsYXksIGVhc2UsIGZuLCB1aWQgPSAwKSB7XG4gICAgY29uc3Qgc3RlcCA9IDE2LjY2NiAvIGR1cmF0aW9uO1xuICAgIGxldCBrZXlmcmFtZXMgPSAne1xcbic7XG4gICAgZm9yIChsZXQgcCA9IDA7IHAgPD0gMTsgcCArPSBzdGVwKSB7XG4gICAgICAgIGNvbnN0IHQgPSBhICsgKGIgLSBhKSAqIGVhc2UocCk7XG4gICAgICAgIGtleWZyYW1lcyArPSBwICogMTAwICsgYCV7JHtmbih0LCAxIC0gdCl9fVxcbmA7XG4gICAgfVxuICAgIGNvbnN0IHJ1bGUgPSBrZXlmcmFtZXMgKyBgMTAwJSB7JHtmbihiLCAxIC0gYil9fVxcbn1gO1xuICAgIGNvbnN0IG5hbWUgPSBgX19zdmVsdGVfJHtoYXNoKHJ1bGUpfV8ke3VpZH1gO1xuICAgIGNvbnN0IGRvYyA9IGdldF9yb290X2Zvcl9zdHlsZShub2RlKTtcbiAgICBjb25zdCB7IHN0eWxlc2hlZXQsIHJ1bGVzIH0gPSBtYW5hZ2VkX3N0eWxlcy5nZXQoZG9jKSB8fCBjcmVhdGVfc3R5bGVfaW5mb3JtYXRpb24oZG9jLCBub2RlKTtcbiAgICBpZiAoIXJ1bGVzW25hbWVdKSB7XG4gICAgICAgIHJ1bGVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgc3R5bGVzaGVldC5pbnNlcnRSdWxlKGBAa2V5ZnJhbWVzICR7bmFtZX0gJHtydWxlfWAsIHN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcbiAgICB9XG4gICAgY29uc3QgYW5pbWF0aW9uID0gbm9kZS5zdHlsZS5hbmltYXRpb24gfHwgJyc7XG4gICAgbm9kZS5zdHlsZS5hbmltYXRpb24gPSBgJHthbmltYXRpb24gPyBgJHthbmltYXRpb259LCBgIDogJyd9JHtuYW1lfSAke2R1cmF0aW9ufW1zIGxpbmVhciAke2RlbGF5fW1zIDEgYm90aGA7XG4gICAgYWN0aXZlICs9IDE7XG4gICAgcmV0dXJuIG5hbWU7XG59XG5mdW5jdGlvbiBkZWxldGVfcnVsZShub2RlLCBuYW1lKSB7XG4gICAgY29uc3QgcHJldmlvdXMgPSAobm9kZS5zdHlsZS5hbmltYXRpb24gfHwgJycpLnNwbGl0KCcsICcpO1xuICAgIGNvbnN0IG5leHQgPSBwcmV2aW91cy5maWx0ZXIobmFtZVxuICAgICAgICA/IGFuaW0gPT4gYW5pbS5pbmRleE9mKG5hbWUpIDwgMCAvLyByZW1vdmUgc3BlY2lmaWMgYW5pbWF0aW9uXG4gICAgICAgIDogYW5pbSA9PiBhbmltLmluZGV4T2YoJ19fc3ZlbHRlJykgPT09IC0xIC8vIHJlbW92ZSBhbGwgU3ZlbHRlIGFuaW1hdGlvbnNcbiAgICApO1xuICAgIGNvbnN0IGRlbGV0ZWQgPSBwcmV2aW91cy5sZW5ndGggLSBuZXh0Lmxlbmd0aDtcbiAgICBpZiAoZGVsZXRlZCkge1xuICAgICAgICBub2RlLnN0eWxlLmFuaW1hdGlvbiA9IG5leHQuam9pbignLCAnKTtcbiAgICAgICAgYWN0aXZlIC09IGRlbGV0ZWQ7XG4gICAgICAgIGlmICghYWN0aXZlKVxuICAgICAgICAgICAgY2xlYXJfcnVsZXMoKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjbGVhcl9ydWxlcygpIHtcbiAgICByYWYoKCkgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBtYW5hZ2VkX3N0eWxlcy5mb3JFYWNoKGluZm8gPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBzdHlsZXNoZWV0IH0gPSBpbmZvO1xuICAgICAgICAgICAgbGV0IGkgPSBzdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlIChpLS0pXG4gICAgICAgICAgICAgICAgc3R5bGVzaGVldC5kZWxldGVSdWxlKGkpO1xuICAgICAgICAgICAgaW5mby5ydWxlcyA9IHt9O1xuICAgICAgICB9KTtcbiAgICAgICAgbWFuYWdlZF9zdHlsZXMuY2xlYXIoKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlX2FuaW1hdGlvbihub2RlLCBmcm9tLCBmbiwgcGFyYW1zKSB7XG4gICAgaWYgKCFmcm9tKVxuICAgICAgICByZXR1cm4gbm9vcDtcbiAgICBjb25zdCB0byA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKGZyb20ubGVmdCA9PT0gdG8ubGVmdCAmJiBmcm9tLnJpZ2h0ID09PSB0by5yaWdodCAmJiBmcm9tLnRvcCA9PT0gdG8udG9wICYmIGZyb20uYm90dG9tID09PSB0by5ib3R0b20pXG4gICAgICAgIHJldHVybiBub29wO1xuICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIFxuICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogc2hvdWxkIHRoaXMgYmUgc2VwYXJhdGVkIGZyb20gZGVzdHJ1Y3R1cmluZz8gT3Igc3RhcnQvZW5kIGFkZGVkIHRvIHB1YmxpYyBhcGkgYW5kIGRvY3VtZW50YXRpb24/XG4gICAgc3RhcnQ6IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5LCBcbiAgICAvLyBAdHMtaWdub3JlIHRvZG86XG4gICAgZW5kID0gc3RhcnRfdGltZSArIGR1cmF0aW9uLCB0aWNrID0gbm9vcCwgY3NzIH0gPSBmbihub2RlLCB7IGZyb20sIHRvIH0sIHBhcmFtcyk7XG4gICAgbGV0IHJ1bm5pbmcgPSB0cnVlO1xuICAgIGxldCBzdGFydGVkID0gZmFsc2U7XG4gICAgbGV0IG5hbWU7XG4gICAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgIG5hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAwLCAxLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRlbGF5KSB7XG4gICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgbmFtZSk7XG4gICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgbG9vcChub3cgPT4ge1xuICAgICAgICBpZiAoIXN0YXJ0ZWQgJiYgbm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydGVkICYmIG5vdyA+PSBlbmQpIHtcbiAgICAgICAgICAgIHRpY2soMSwgMCk7XG4gICAgICAgICAgICBzdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFydW5uaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBub3cgLSBzdGFydF90aW1lO1xuICAgICAgICAgICAgY29uc3QgdCA9IDAgKyAxICogZWFzaW5nKHAgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICB0aWNrKHQsIDEgLSB0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICBzdGFydCgpO1xuICAgIHRpY2soMCwgMSk7XG4gICAgcmV0dXJuIHN0b3A7XG59XG5mdW5jdGlvbiBmaXhfcG9zaXRpb24obm9kZSkge1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBpZiAoc3R5bGUucG9zaXRpb24gIT09ICdhYnNvbHV0ZScgJiYgc3R5bGUucG9zaXRpb24gIT09ICdmaXhlZCcpIHtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBzdHlsZTtcbiAgICAgICAgY29uc3QgYSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIG5vZGUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBub2RlLnN0eWxlLndpZHRoID0gd2lkdGg7XG4gICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBhZGRfdHJhbnNmb3JtKG5vZGUsIGEpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZF90cmFuc2Zvcm0obm9kZSwgYSkge1xuICAgIGNvbnN0IGIgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChhLmxlZnQgIT09IGIubGVmdCB8fCBhLnRvcCAhPT0gYi50b3ApIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBzdHlsZS50cmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogc3R5bGUudHJhbnNmb3JtO1xuICAgICAgICBub2RlLnN0eWxlLnRyYW5zZm9ybSA9IGAke3RyYW5zZm9ybX0gdHJhbnNsYXRlKCR7YS5sZWZ0IC0gYi5sZWZ0fXB4LCAke2EudG9wIC0gYi50b3B9cHgpYDtcbiAgICB9XG59XG5cbmxldCBjdXJyZW50X2NvbXBvbmVudDtcbmZ1bmN0aW9uIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICBjdXJyZW50X2NvbXBvbmVudCA9IGNvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGdldF9jdXJyZW50X2NvbXBvbmVudCgpIHtcbiAgICBpZiAoIWN1cnJlbnRfY29tcG9uZW50KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Z1bmN0aW9uIGNhbGxlZCBvdXRzaWRlIGNvbXBvbmVudCBpbml0aWFsaXphdGlvbicpO1xuICAgIHJldHVybiBjdXJyZW50X2NvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGJlZm9yZVVwZGF0ZShmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmJlZm9yZV91cGRhdGUucHVzaChmbik7XG59XG5mdW5jdGlvbiBvbk1vdW50KGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQub25fbW91bnQucHVzaChmbik7XG59XG5mdW5jdGlvbiBhZnRlclVwZGF0ZShmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmFmdGVyX3VwZGF0ZS5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIG9uRGVzdHJveShmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLm9uX2Rlc3Ryb3kucHVzaChmbik7XG59XG5mdW5jdGlvbiBjcmVhdGVFdmVudERpc3BhdGNoZXIoKSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCk7XG4gICAgcmV0dXJuICh0eXBlLCBkZXRhaWwpID0+IHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gY29tcG9uZW50LiQkLmNhbGxiYWNrc1t0eXBlXTtcbiAgICAgICAgaWYgKGNhbGxiYWNrcykge1xuICAgICAgICAgICAgLy8gVE9ETyBhcmUgdGhlcmUgc2l0dWF0aW9ucyB3aGVyZSBldmVudHMgY291bGQgYmUgZGlzcGF0Y2hlZFxuICAgICAgICAgICAgLy8gaW4gYSBzZXJ2ZXIgKG5vbi1ET00pIGVudmlyb25tZW50P1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBjdXN0b21fZXZlbnQodHlwZSwgZGV0YWlsKTtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5zbGljZSgpLmZvckVhY2goZm4gPT4ge1xuICAgICAgICAgICAgICAgIGZuLmNhbGwoY29tcG9uZW50LCBldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBzZXRDb250ZXh0KGtleSwgY29udGV4dCkge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQuc2V0KGtleSwgY29udGV4dCk7XG59XG5mdW5jdGlvbiBnZXRDb250ZXh0KGtleSkge1xuICAgIHJldHVybiBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LmdldChrZXkpO1xufVxuZnVuY3Rpb24gZ2V0QWxsQ29udGV4dHMoKSB7XG4gICAgcmV0dXJuIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQ7XG59XG5mdW5jdGlvbiBoYXNDb250ZXh0KGtleSkge1xuICAgIHJldHVybiBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LmhhcyhrZXkpO1xufVxuLy8gVE9ETyBmaWd1cmUgb3V0IGlmIHdlIHN0aWxsIHdhbnQgdG8gc3VwcG9ydFxuLy8gc2hvcnRoYW5kIGV2ZW50cywgb3IgaWYgd2Ugd2FudCB0byBpbXBsZW1lbnRcbi8vIGEgcmVhbCBidWJibGluZyBtZWNoYW5pc21cbmZ1bmN0aW9uIGJ1YmJsZShjb21wb25lbnQsIGV2ZW50KSB7XG4gICAgY29uc3QgY2FsbGJhY2tzID0gY29tcG9uZW50LiQkLmNhbGxiYWNrc1tldmVudC50eXBlXTtcbiAgICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY2FsbGJhY2tzLnNsaWNlKCkuZm9yRWFjaChmbiA9PiBmbi5jYWxsKHRoaXMsIGV2ZW50KSk7XG4gICAgfVxufVxuXG5jb25zdCBkaXJ0eV9jb21wb25lbnRzID0gW107XG5jb25zdCBpbnRyb3MgPSB7IGVuYWJsZWQ6IGZhbHNlIH07XG5jb25zdCBiaW5kaW5nX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgcmVuZGVyX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgZmx1c2hfY2FsbGJhY2tzID0gW107XG5jb25zdCByZXNvbHZlZF9wcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5sZXQgdXBkYXRlX3NjaGVkdWxlZCA9IGZhbHNlO1xuZnVuY3Rpb24gc2NoZWR1bGVfdXBkYXRlKCkge1xuICAgIGlmICghdXBkYXRlX3NjaGVkdWxlZCkge1xuICAgICAgICB1cGRhdGVfc2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgICAgcmVzb2x2ZWRfcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9XG59XG5mdW5jdGlvbiB0aWNrKCkge1xuICAgIHNjaGVkdWxlX3VwZGF0ZSgpO1xuICAgIHJldHVybiByZXNvbHZlZF9wcm9taXNlO1xufVxuZnVuY3Rpb24gYWRkX3JlbmRlcl9jYWxsYmFjayhmbikge1xuICAgIHJlbmRlcl9jYWxsYmFja3MucHVzaChmbik7XG59XG5mdW5jdGlvbiBhZGRfZmx1c2hfY2FsbGJhY2soZm4pIHtcbiAgICBmbHVzaF9jYWxsYmFja3MucHVzaChmbik7XG59XG4vLyBmbHVzaCgpIGNhbGxzIGNhbGxiYWNrcyBpbiB0aGlzIG9yZGVyOlxuLy8gMS4gQWxsIGJlZm9yZVVwZGF0ZSBjYWxsYmFja3MsIGluIG9yZGVyOiBwYXJlbnRzIGJlZm9yZSBjaGlsZHJlblxuLy8gMi4gQWxsIGJpbmQ6dGhpcyBjYWxsYmFja3MsIGluIHJldmVyc2Ugb3JkZXI6IGNoaWxkcmVuIGJlZm9yZSBwYXJlbnRzLlxuLy8gMy4gQWxsIGFmdGVyVXBkYXRlIGNhbGxiYWNrcywgaW4gb3JkZXI6IHBhcmVudHMgYmVmb3JlIGNoaWxkcmVuLiBFWENFUFRcbi8vICAgIGZvciBhZnRlclVwZGF0ZXMgY2FsbGVkIGR1cmluZyB0aGUgaW5pdGlhbCBvbk1vdW50LCB3aGljaCBhcmUgY2FsbGVkIGluXG4vLyAgICByZXZlcnNlIG9yZGVyOiBjaGlsZHJlbiBiZWZvcmUgcGFyZW50cy5cbi8vIFNpbmNlIGNhbGxiYWNrcyBtaWdodCB1cGRhdGUgY29tcG9uZW50IHZhbHVlcywgd2hpY2ggY291bGQgdHJpZ2dlciBhbm90aGVyXG4vLyBjYWxsIHRvIGZsdXNoKCksIHRoZSBmb2xsb3dpbmcgc3RlcHMgZ3VhcmQgYWdhaW5zdCB0aGlzOlxuLy8gMS4gRHVyaW5nIGJlZm9yZVVwZGF0ZSwgYW55IHVwZGF0ZWQgY29tcG9uZW50cyB3aWxsIGJlIGFkZGVkIHRvIHRoZVxuLy8gICAgZGlydHlfY29tcG9uZW50cyBhcnJheSBhbmQgd2lsbCBjYXVzZSBhIHJlZW50cmFudCBjYWxsIHRvIGZsdXNoKCkuIEJlY2F1c2Vcbi8vICAgIHRoZSBmbHVzaCBpbmRleCBpcyBrZXB0IG91dHNpZGUgdGhlIGZ1bmN0aW9uLCB0aGUgcmVlbnRyYW50IGNhbGwgd2lsbCBwaWNrXG4vLyAgICB1cCB3aGVyZSB0aGUgZWFybGllciBjYWxsIGxlZnQgb2ZmIGFuZCBnbyB0aHJvdWdoIGFsbCBkaXJ0eSBjb21wb25lbnRzLiBUaGVcbi8vICAgIGN1cnJlbnRfY29tcG9uZW50IHZhbHVlIGlzIHNhdmVkIGFuZCByZXN0b3JlZCBzbyB0aGF0IHRoZSByZWVudHJhbnQgY2FsbCB3aWxsXG4vLyAgICBub3QgaW50ZXJmZXJlIHdpdGggdGhlIFwicGFyZW50XCIgZmx1c2goKSBjYWxsLlxuLy8gMi4gYmluZDp0aGlzIGNhbGxiYWNrcyBjYW5ub3QgdHJpZ2dlciBuZXcgZmx1c2goKSBjYWxscy5cbi8vIDMuIER1cmluZyBhZnRlclVwZGF0ZSwgYW55IHVwZGF0ZWQgY29tcG9uZW50cyB3aWxsIE5PVCBoYXZlIHRoZWlyIGFmdGVyVXBkYXRlXG4vLyAgICBjYWxsYmFjayBjYWxsZWQgYSBzZWNvbmQgdGltZTsgdGhlIHNlZW5fY2FsbGJhY2tzIHNldCwgb3V0c2lkZSB0aGUgZmx1c2goKVxuLy8gICAgZnVuY3Rpb24sIGd1YXJhbnRlZXMgdGhpcyBiZWhhdmlvci5cbmNvbnN0IHNlZW5fY2FsbGJhY2tzID0gbmV3IFNldCgpO1xubGV0IGZsdXNoaWR4ID0gMDsgLy8gRG8gKm5vdCogbW92ZSB0aGlzIGluc2lkZSB0aGUgZmx1c2goKSBmdW5jdGlvblxuZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgY29uc3Qgc2F2ZWRfY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG4gICAgZG8ge1xuICAgICAgICAvLyBmaXJzdCwgY2FsbCBiZWZvcmVVcGRhdGUgZnVuY3Rpb25zXG4gICAgICAgIC8vIGFuZCB1cGRhdGUgY29tcG9uZW50c1xuICAgICAgICB3aGlsZSAoZmx1c2hpZHggPCBkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gZGlydHlfY29tcG9uZW50c1tmbHVzaGlkeF07XG4gICAgICAgICAgICBmbHVzaGlkeCsrO1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICB1cGRhdGUoY29tcG9uZW50LiQkKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQobnVsbCk7XG4gICAgICAgIGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoID0gMDtcbiAgICAgICAgZmx1c2hpZHggPSAwO1xuICAgICAgICB3aGlsZSAoYmluZGluZ19jYWxsYmFja3MubGVuZ3RoKVxuICAgICAgICAgICAgYmluZGluZ19jYWxsYmFja3MucG9wKCkoKTtcbiAgICAgICAgLy8gdGhlbiwgb25jZSBjb21wb25lbnRzIGFyZSB1cGRhdGVkLCBjYWxsXG4gICAgICAgIC8vIGFmdGVyVXBkYXRlIGZ1bmN0aW9ucy4gVGhpcyBtYXkgY2F1c2VcbiAgICAgICAgLy8gc3Vic2VxdWVudCB1cGRhdGVzLi4uXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVuZGVyX2NhbGxiYWNrcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSByZW5kZXJfY2FsbGJhY2tzW2ldO1xuICAgICAgICAgICAgaWYgKCFzZWVuX2NhbGxiYWNrcy5oYXMoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgLy8gLi4uc28gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBsb29wc1xuICAgICAgICAgICAgICAgIHNlZW5fY2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZW5kZXJfY2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gICAgfSB3aGlsZSAoZGlydHlfY29tcG9uZW50cy5sZW5ndGgpO1xuICAgIHdoaWxlIChmbHVzaF9jYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgICAgIGZsdXNoX2NhbGxiYWNrcy5wb3AoKSgpO1xuICAgIH1cbiAgICB1cGRhdGVfc2NoZWR1bGVkID0gZmFsc2U7XG4gICAgc2Vlbl9jYWxsYmFja3MuY2xlYXIoKTtcbiAgICBzZXRfY3VycmVudF9jb21wb25lbnQoc2F2ZWRfY29tcG9uZW50KTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZSgkJCkge1xuICAgIGlmICgkJC5mcmFnbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAkJC51cGRhdGUoKTtcbiAgICAgICAgcnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTtcbiAgICAgICAgY29uc3QgZGlydHkgPSAkJC5kaXJ0eTtcbiAgICAgICAgJCQuZGlydHkgPSBbLTFdO1xuICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5wKCQkLmN0eCwgZGlydHkpO1xuICAgICAgICAkJC5hZnRlcl91cGRhdGUuZm9yRWFjaChhZGRfcmVuZGVyX2NhbGxiYWNrKTtcbiAgICB9XG59XG5cbmxldCBwcm9taXNlO1xuZnVuY3Rpb24gd2FpdCgpIHtcbiAgICBpZiAoIXByb21pc2UpIHtcbiAgICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICBwcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGRpc3BhdGNoKG5vZGUsIGRpcmVjdGlvbiwga2luZCkge1xuICAgIG5vZGUuZGlzcGF0Y2hFdmVudChjdXN0b21fZXZlbnQoYCR7ZGlyZWN0aW9uID8gJ2ludHJvJyA6ICdvdXRybyd9JHtraW5kfWApKTtcbn1cbmNvbnN0IG91dHJvaW5nID0gbmV3IFNldCgpO1xubGV0IG91dHJvcztcbmZ1bmN0aW9uIGdyb3VwX291dHJvcygpIHtcbiAgICBvdXRyb3MgPSB7XG4gICAgICAgIHI6IDAsXG4gICAgICAgIGM6IFtdLFxuICAgICAgICBwOiBvdXRyb3MgLy8gcGFyZW50IGdyb3VwXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNoZWNrX291dHJvcygpIHtcbiAgICBpZiAoIW91dHJvcy5yKSB7XG4gICAgICAgIHJ1bl9hbGwob3V0cm9zLmMpO1xuICAgIH1cbiAgICBvdXRyb3MgPSBvdXRyb3MucDtcbn1cbmZ1bmN0aW9uIHRyYW5zaXRpb25faW4oYmxvY2ssIGxvY2FsKSB7XG4gICAgaWYgKGJsb2NrICYmIGJsb2NrLmkpIHtcbiAgICAgICAgb3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcbiAgICAgICAgYmxvY2suaShsb2NhbCk7XG4gICAgfVxufVxuZnVuY3Rpb24gdHJhbnNpdGlvbl9vdXQoYmxvY2ssIGxvY2FsLCBkZXRhY2gsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGJsb2NrICYmIGJsb2NrLm8pIHtcbiAgICAgICAgaWYgKG91dHJvaW5nLmhhcyhibG9jaykpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIG91dHJvaW5nLmFkZChibG9jayk7XG4gICAgICAgIG91dHJvcy5jLnB1c2goKCkgPT4ge1xuICAgICAgICAgICAgb3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGlmIChkZXRhY2gpXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrLmQoMSk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJsb2NrLm8obG9jYWwpO1xuICAgIH1cbn1cbmNvbnN0IG51bGxfdHJhbnNpdGlvbiA9IHsgZHVyYXRpb246IDAgfTtcbmZ1bmN0aW9uIGNyZWF0ZV9pbl90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMpIHtcbiAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zKTtcbiAgICBsZXQgcnVubmluZyA9IGZhbHNlO1xuICAgIGxldCBhbmltYXRpb25fbmFtZTtcbiAgICBsZXQgdGFzaztcbiAgICBsZXQgdWlkID0gMDtcbiAgICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdvKCkge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAwLCAxLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzLCB1aWQrKyk7XG4gICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5O1xuICAgICAgICBjb25zdCBlbmRfdGltZSA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbjtcbiAgICAgICAgaWYgKHRhc2spXG4gICAgICAgICAgICB0YXNrLmFib3J0KCk7XG4gICAgICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIHRydWUsICdzdGFydCcpKTtcbiAgICAgICAgdGFzayA9IGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBlbmRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aWNrKDEsIDApO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCB0cnVlLCAnZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBzdGFydF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBlYXNpbmcoKG5vdyAtIHN0YXJ0X3RpbWUpIC8gZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aWNrKHQsIDEgLSB0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcnVubmluZztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBzdGFydGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnQoKSB7XG4gICAgICAgICAgICBpZiAoc3RhcnRlZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUpO1xuICAgICAgICAgICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICBjb25maWcgPSBjb25maWcoKTtcbiAgICAgICAgICAgICAgICB3YWl0KCkudGhlbihnbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBpbnZhbGlkYXRlKCkge1xuICAgICAgICAgICAgc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBlbmQoKSB7XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlX291dF90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMpIHtcbiAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zKTtcbiAgICBsZXQgcnVubmluZyA9IHRydWU7XG4gICAgbGV0IGFuaW1hdGlvbl9uYW1lO1xuICAgIGNvbnN0IGdyb3VwID0gb3V0cm9zO1xuICAgIGdyb3VwLnIgKz0gMTtcbiAgICBmdW5jdGlvbiBnbygpIHtcbiAgICAgICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgdGljayA9IG5vb3AsIGNzcyB9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcbiAgICAgICAgaWYgKGNzcylcbiAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMSwgMCwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcyk7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5O1xuICAgICAgICBjb25zdCBlbmRfdGltZSA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbjtcbiAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCBmYWxzZSwgJ3N0YXJ0JykpO1xuICAgICAgICBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gZW5kX3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGljaygwLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgZmFsc2UsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEtLWdyb3VwLnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2lsbCByZXN1bHQgaW4gYGVuZCgpYCBiZWluZyBjYWxsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSBkb24ndCBuZWVkIHRvIGNsZWFuIHVwIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bl9hbGwoZ3JvdXAuYyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IGVhc2luZygobm93IC0gc3RhcnRfdGltZSkgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRpY2soMSAtIHQsIHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBydW5uaW5nO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgd2FpdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uZmlnID0gY29uZmlnKCk7XG4gICAgICAgICAgICBnbygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGdvKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGVuZChyZXNldCkge1xuICAgICAgICAgICAgaWYgKHJlc2V0ICYmIGNvbmZpZy50aWNrKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLnRpY2soMSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25fbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuICAgICAgICAgICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBjcmVhdGVfYmlkaXJlY3Rpb25hbF90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMsIGludHJvKSB7XG4gICAgbGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcyk7XG4gICAgbGV0IHQgPSBpbnRybyA/IDAgOiAxO1xuICAgIGxldCBydW5uaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgIGxldCBwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgIGxldCBhbmltYXRpb25fbmFtZSA9IG51bGw7XG4gICAgZnVuY3Rpb24gY2xlYXJfYW5pbWF0aW9uKCkge1xuICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluaXQocHJvZ3JhbSwgZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgZCA9IChwcm9ncmFtLmIgLSB0KTtcbiAgICAgICAgZHVyYXRpb24gKj0gTWF0aC5hYnMoZCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhOiB0LFxuICAgICAgICAgICAgYjogcHJvZ3JhbS5iLFxuICAgICAgICAgICAgZCxcbiAgICAgICAgICAgIGR1cmF0aW9uLFxuICAgICAgICAgICAgc3RhcnQ6IHByb2dyYW0uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IHByb2dyYW0uc3RhcnQgKyBkdXJhdGlvbixcbiAgICAgICAgICAgIGdyb3VwOiBwcm9ncmFtLmdyb3VwXG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdvKGIpIHtcbiAgICAgICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgdGljayA9IG5vb3AsIGNzcyB9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcbiAgICAgICAgY29uc3QgcHJvZ3JhbSA9IHtcbiAgICAgICAgICAgIHN0YXJ0OiBub3coKSArIGRlbGF5LFxuICAgICAgICAgICAgYlxuICAgICAgICB9O1xuICAgICAgICBpZiAoIWIpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG4gICAgICAgICAgICBwcm9ncmFtLmdyb3VwID0gb3V0cm9zO1xuICAgICAgICAgICAgb3V0cm9zLnIgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocnVubmluZ19wcm9ncmFtIHx8IHBlbmRpbmdfcHJvZ3JhbSkge1xuICAgICAgICAgICAgcGVuZGluZ19wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIHRoaXMgaXMgYW4gaW50cm8sIGFuZCB0aGVyZSdzIGEgZGVsYXksIHdlIG5lZWQgdG8gZG9cbiAgICAgICAgICAgIC8vIGFuIGluaXRpYWwgdGljayBhbmQvb3IgYXBwbHkgQ1NTIGFuaW1hdGlvbiBpbW1lZGlhdGVseVxuICAgICAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgdCwgYiwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYilcbiAgICAgICAgICAgICAgICB0aWNrKDAsIDEpO1xuICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gaW5pdChwcm9ncmFtLCBkdXJhdGlvbik7XG4gICAgICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIGIsICdzdGFydCcpKTtcbiAgICAgICAgICAgIGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGVuZGluZ19wcm9ncmFtICYmIG5vdyA+IHBlbmRpbmdfcHJvZ3JhbS5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBpbml0KHBlbmRpbmdfcHJvZ3JhbSwgZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCBydW5uaW5nX3Byb2dyYW0uYiwgJ3N0YXJ0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCB0LCBydW5uaW5nX3Byb2dyYW0uYiwgcnVubmluZ19wcm9ncmFtLmR1cmF0aW9uLCAwLCBlYXNpbmcsIGNvbmZpZy5jc3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChydW5uaW5nX3Byb2dyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBydW5uaW5nX3Byb2dyYW0uZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrKHQgPSBydW5uaW5nX3Byb2dyYW0uYiwgMSAtIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgcnVubmluZ19wcm9ncmFtLmIsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGVuZGluZ19wcm9ncmFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UncmUgZG9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChydW5uaW5nX3Byb2dyYW0uYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnRybyDigJQgd2UgY2FuIHRpZHkgdXAgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvdXRybyDigJQgbmVlZHMgdG8gYmUgY29vcmRpbmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEtLXJ1bm5pbmdfcHJvZ3JhbS5ncm91cC5yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVuX2FsbChydW5uaW5nX3Byb2dyYW0uZ3JvdXAuYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChub3cgPj0gcnVubmluZ19wcm9ncmFtLnN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gbm93IC0gcnVubmluZ19wcm9ncmFtLnN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IHJ1bm5pbmdfcHJvZ3JhbS5hICsgcnVubmluZ19wcm9ncmFtLmQgKiBlYXNpbmcocCAvIHJ1bm5pbmdfcHJvZ3JhbS5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrKHQsIDEgLSB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gISEocnVubmluZ19wcm9ncmFtIHx8IHBlbmRpbmdfcHJvZ3JhbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBydW4oYikge1xuICAgICAgICAgICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICB3YWl0KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnID0gY29uZmlnKCk7XG4gICAgICAgICAgICAgICAgICAgIGdvKGIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ28oYik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVuZCgpIHtcbiAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gcGVuZGluZ19wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGhhbmRsZV9wcm9taXNlKHByb21pc2UsIGluZm8pIHtcbiAgICBjb25zdCB0b2tlbiA9IGluZm8udG9rZW4gPSB7fTtcbiAgICBmdW5jdGlvbiB1cGRhdGUodHlwZSwgaW5kZXgsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGluZm8udG9rZW4gIT09IHRva2VuKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpbmZvLnJlc29sdmVkID0gdmFsdWU7XG4gICAgICAgIGxldCBjaGlsZF9jdHggPSBpbmZvLmN0eDtcbiAgICAgICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjaGlsZF9jdHggPSBjaGlsZF9jdHguc2xpY2UoKTtcbiAgICAgICAgICAgIGNoaWxkX2N0eFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYmxvY2sgPSB0eXBlICYmIChpbmZvLmN1cnJlbnQgPSB0eXBlKShjaGlsZF9jdHgpO1xuICAgICAgICBsZXQgbmVlZHNfZmx1c2ggPSBmYWxzZTtcbiAgICAgICAgaWYgKGluZm8uYmxvY2spIHtcbiAgICAgICAgICAgIGlmIChpbmZvLmJsb2Nrcykge1xuICAgICAgICAgICAgICAgIGluZm8uYmxvY2tzLmZvckVhY2goKGJsb2NrLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpICE9PSBpbmRleCAmJiBibG9jaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBfb3V0cm9zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uX291dChibG9jaywgMSwgMSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmZvLmJsb2Nrc1tpXSA9PT0gYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mby5ibG9ja3NbaV0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tfb3V0cm9zKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGluZm8uYmxvY2suZCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJsb2NrLmMoKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb25faW4oYmxvY2ssIDEpO1xuICAgICAgICAgICAgYmxvY2subShpbmZvLm1vdW50KCksIGluZm8uYW5jaG9yKTtcbiAgICAgICAgICAgIG5lZWRzX2ZsdXNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpbmZvLmJsb2NrID0gYmxvY2s7XG4gICAgICAgIGlmIChpbmZvLmJsb2NrcylcbiAgICAgICAgICAgIGluZm8uYmxvY2tzW2luZGV4XSA9IGJsb2NrO1xuICAgICAgICBpZiAobmVlZHNfZmx1c2gpIHtcbiAgICAgICAgICAgIGZsdXNoKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzX3Byb21pc2UocHJvbWlzZSkpIHtcbiAgICAgICAgY29uc3QgY3VycmVudF9jb21wb25lbnQgPSBnZXRfY3VycmVudF9jb21wb25lbnQoKTtcbiAgICAgICAgcHJvbWlzZS50aGVuKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjdXJyZW50X2NvbXBvbmVudCk7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby50aGVuLCAxLCBpbmZvLnZhbHVlLCB2YWx1ZSk7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQobnVsbCk7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjdXJyZW50X2NvbXBvbmVudCk7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby5jYXRjaCwgMiwgaW5mby5lcnJvciwgZXJyb3IpO1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KG51bGwpO1xuICAgICAgICAgICAgaWYgKCFpbmZvLmhhc0NhdGNoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBpZiB3ZSBwcmV2aW91c2x5IGhhZCBhIHRoZW4vY2F0Y2ggYmxvY2ssIGRlc3Ryb3kgaXRcbiAgICAgICAgaWYgKGluZm8uY3VycmVudCAhPT0gaW5mby5wZW5kaW5nKSB7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby5wZW5kaW5nLCAwKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoaW5mby5jdXJyZW50ICE9PSBpbmZvLnRoZW4pIHtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLnRoZW4sIDEsIGluZm8udmFsdWUsIHByb21pc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5mby5yZXNvbHZlZCA9IHByb21pc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gdXBkYXRlX2F3YWl0X2Jsb2NrX2JyYW5jaChpbmZvLCBjdHgsIGRpcnR5KSB7XG4gICAgY29uc3QgY2hpbGRfY3R4ID0gY3R4LnNsaWNlKCk7XG4gICAgY29uc3QgeyByZXNvbHZlZCB9ID0gaW5mbztcbiAgICBpZiAoaW5mby5jdXJyZW50ID09PSBpbmZvLnRoZW4pIHtcbiAgICAgICAgY2hpbGRfY3R4W2luZm8udmFsdWVdID0gcmVzb2x2ZWQ7XG4gICAgfVxuICAgIGlmIChpbmZvLmN1cnJlbnQgPT09IGluZm8uY2F0Y2gpIHtcbiAgICAgICAgY2hpbGRfY3R4W2luZm8uZXJyb3JdID0gcmVzb2x2ZWQ7XG4gICAgfVxuICAgIGluZm8uYmxvY2sucChjaGlsZF9jdHgsIGRpcnR5KTtcbn1cblxuY29uc3QgZ2xvYmFscyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgID8gd2luZG93XG4gICAgOiB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyBnbG9iYWxUaGlzXG4gICAgICAgIDogZ2xvYmFsKTtcblxuZnVuY3Rpb24gZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgYmxvY2suZCgxKTtcbiAgICBsb29rdXAuZGVsZXRlKGJsb2NrLmtleSk7XG59XG5mdW5jdGlvbiBvdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgdHJhbnNpdGlvbl9vdXQoYmxvY2ssIDEsIDEsICgpID0+IHtcbiAgICAgICAgbG9va3VwLmRlbGV0ZShibG9jay5rZXkpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZml4X2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICBibG9jay5mKCk7XG4gICAgZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKTtcbn1cbmZ1bmN0aW9uIGZpeF9hbmRfb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIGJsb2NrLmYoKTtcbiAgICBvdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZV9rZXllZF9lYWNoKG9sZF9ibG9ja3MsIGRpcnR5LCBnZXRfa2V5LCBkeW5hbWljLCBjdHgsIGxpc3QsIGxvb2t1cCwgbm9kZSwgZGVzdHJveSwgY3JlYXRlX2VhY2hfYmxvY2ssIG5leHQsIGdldF9jb250ZXh0KSB7XG4gICAgbGV0IG8gPSBvbGRfYmxvY2tzLmxlbmd0aDtcbiAgICBsZXQgbiA9IGxpc3QubGVuZ3RoO1xuICAgIGxldCBpID0gbztcbiAgICBjb25zdCBvbGRfaW5kZXhlcyA9IHt9O1xuICAgIHdoaWxlIChpLS0pXG4gICAgICAgIG9sZF9pbmRleGVzW29sZF9ibG9ja3NbaV0ua2V5XSA9IGk7XG4gICAgY29uc3QgbmV3X2Jsb2NrcyA9IFtdO1xuICAgIGNvbnN0IG5ld19sb29rdXAgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgZGVsdGFzID0gbmV3IE1hcCgpO1xuICAgIGkgPSBuO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgY29uc3QgY2hpbGRfY3R4ID0gZ2V0X2NvbnRleHQoY3R4LCBsaXN0LCBpKTtcbiAgICAgICAgY29uc3Qga2V5ID0gZ2V0X2tleShjaGlsZF9jdHgpO1xuICAgICAgICBsZXQgYmxvY2sgPSBsb29rdXAuZ2V0KGtleSk7XG4gICAgICAgIGlmICghYmxvY2spIHtcbiAgICAgICAgICAgIGJsb2NrID0gY3JlYXRlX2VhY2hfYmxvY2soa2V5LCBjaGlsZF9jdHgpO1xuICAgICAgICAgICAgYmxvY2suYygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGR5bmFtaWMpIHtcbiAgICAgICAgICAgIGJsb2NrLnAoY2hpbGRfY3R4LCBkaXJ0eSk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3X2xvb2t1cC5zZXQoa2V5LCBuZXdfYmxvY2tzW2ldID0gYmxvY2spO1xuICAgICAgICBpZiAoa2V5IGluIG9sZF9pbmRleGVzKVxuICAgICAgICAgICAgZGVsdGFzLnNldChrZXksIE1hdGguYWJzKGkgLSBvbGRfaW5kZXhlc1trZXldKSk7XG4gICAgfVxuICAgIGNvbnN0IHdpbGxfbW92ZSA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBkaWRfbW92ZSA9IG5ldyBTZXQoKTtcbiAgICBmdW5jdGlvbiBpbnNlcnQoYmxvY2spIHtcbiAgICAgICAgdHJhbnNpdGlvbl9pbihibG9jaywgMSk7XG4gICAgICAgIGJsb2NrLm0obm9kZSwgbmV4dCk7XG4gICAgICAgIGxvb2t1cC5zZXQoYmxvY2sua2V5LCBibG9jayk7XG4gICAgICAgIG5leHQgPSBibG9jay5maXJzdDtcbiAgICAgICAgbi0tO1xuICAgIH1cbiAgICB3aGlsZSAobyAmJiBuKSB7XG4gICAgICAgIGNvbnN0IG5ld19ibG9jayA9IG5ld19ibG9ja3NbbiAtIDFdO1xuICAgICAgICBjb25zdCBvbGRfYmxvY2sgPSBvbGRfYmxvY2tzW28gLSAxXTtcbiAgICAgICAgY29uc3QgbmV3X2tleSA9IG5ld19ibG9jay5rZXk7XG4gICAgICAgIGNvbnN0IG9sZF9rZXkgPSBvbGRfYmxvY2sua2V5O1xuICAgICAgICBpZiAobmV3X2Jsb2NrID09PSBvbGRfYmxvY2spIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIG5leHQgPSBuZXdfYmxvY2suZmlyc3Q7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgICAgICBuLS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIW5ld19sb29rdXAuaGFzKG9sZF9rZXkpKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgb2xkIGJsb2NrXG4gICAgICAgICAgICBkZXN0cm95KG9sZF9ibG9jaywgbG9va3VwKTtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghbG9va3VwLmhhcyhuZXdfa2V5KSB8fCB3aWxsX21vdmUuaGFzKG5ld19rZXkpKSB7XG4gICAgICAgICAgICBpbnNlcnQobmV3X2Jsb2NrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaWRfbW92ZS5oYXMob2xkX2tleSkpIHtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkZWx0YXMuZ2V0KG5ld19rZXkpID4gZGVsdGFzLmdldChvbGRfa2V5KSkge1xuICAgICAgICAgICAgZGlkX21vdmUuYWRkKG5ld19rZXkpO1xuICAgICAgICAgICAgaW5zZXJ0KG5ld19ibG9jayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3aWxsX21vdmUuYWRkKG9sZF9rZXkpO1xuICAgICAgICAgICAgby0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIHdoaWxlIChvLS0pIHtcbiAgICAgICAgY29uc3Qgb2xkX2Jsb2NrID0gb2xkX2Jsb2Nrc1tvXTtcbiAgICAgICAgaWYgKCFuZXdfbG9va3VwLmhhcyhvbGRfYmxvY2sua2V5KSlcbiAgICAgICAgICAgIGRlc3Ryb3kob2xkX2Jsb2NrLCBsb29rdXApO1xuICAgIH1cbiAgICB3aGlsZSAobilcbiAgICAgICAgaW5zZXJ0KG5ld19ibG9ja3NbbiAtIDFdKTtcbiAgICByZXR1cm4gbmV3X2Jsb2Nrcztcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX2VhY2hfa2V5cyhjdHgsIGxpc3QsIGdldF9jb250ZXh0LCBnZXRfa2V5KSB7XG4gICAgY29uc3Qga2V5cyA9IG5ldyBTZXQoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qga2V5ID0gZ2V0X2tleShnZXRfY29udGV4dChjdHgsIGxpc3QsIGkpKTtcbiAgICAgICAgaWYgKGtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGhhdmUgZHVwbGljYXRlIGtleXMgaW4gYSBrZXllZCBlYWNoJyk7XG4gICAgICAgIH1cbiAgICAgICAga2V5cy5hZGQoa2V5KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldF9zcHJlYWRfdXBkYXRlKGxldmVscywgdXBkYXRlcykge1xuICAgIGNvbnN0IHVwZGF0ZSA9IHt9O1xuICAgIGNvbnN0IHRvX251bGxfb3V0ID0ge307XG4gICAgY29uc3QgYWNjb3VudGVkX2ZvciA9IHsgJCRzY29wZTogMSB9O1xuICAgIGxldCBpID0gbGV2ZWxzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGNvbnN0IG8gPSBsZXZlbHNbaV07XG4gICAgICAgIGNvbnN0IG4gPSB1cGRhdGVzW2ldO1xuICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbykge1xuICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiBuKSlcbiAgICAgICAgICAgICAgICAgICAgdG9fbnVsbF9vdXRba2V5XSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBuKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhY2NvdW50ZWRfZm9yW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlW2tleV0gPSBuW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRlZF9mb3Jba2V5XSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV2ZWxzW2ldID0gbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG8pIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50ZWRfZm9yW2tleV0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIHRvX251bGxfb3V0KSB7XG4gICAgICAgIGlmICghKGtleSBpbiB1cGRhdGUpKVxuICAgICAgICAgICAgdXBkYXRlW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiB1cGRhdGU7XG59XG5mdW5jdGlvbiBnZXRfc3ByZWFkX29iamVjdChzcHJlYWRfcHJvcHMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHNwcmVhZF9wcm9wcyA9PT0gJ29iamVjdCcgJiYgc3ByZWFkX3Byb3BzICE9PSBudWxsID8gc3ByZWFkX3Byb3BzIDoge307XG59XG5cbi8vIHNvdXJjZTogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW5kaWNlcy5odG1sXG5jb25zdCBib29sZWFuX2F0dHJpYnV0ZXMgPSBuZXcgU2V0KFtcbiAgICAnYWxsb3dmdWxsc2NyZWVuJyxcbiAgICAnYWxsb3dwYXltZW50cmVxdWVzdCcsXG4gICAgJ2FzeW5jJyxcbiAgICAnYXV0b2ZvY3VzJyxcbiAgICAnYXV0b3BsYXknLFxuICAgICdjaGVja2VkJyxcbiAgICAnY29udHJvbHMnLFxuICAgICdkZWZhdWx0JyxcbiAgICAnZGVmZXInLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2Zvcm1ub3ZhbGlkYXRlJyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaXNtYXAnLFxuICAgICdsb29wJyxcbiAgICAnbXVsdGlwbGUnLFxuICAgICdtdXRlZCcsXG4gICAgJ25vbW9kdWxlJyxcbiAgICAnbm92YWxpZGF0ZScsXG4gICAgJ29wZW4nLFxuICAgICdwbGF5c2lubGluZScsXG4gICAgJ3JlYWRvbmx5JyxcbiAgICAncmVxdWlyZWQnLFxuICAgICdyZXZlcnNlZCcsXG4gICAgJ3NlbGVjdGVkJ1xuXSk7XG5cbmNvbnN0IGludmFsaWRfYXR0cmlidXRlX25hbWVfY2hhcmFjdGVyID0gL1tcXHMnXCI+Lz1cXHV7RkREMH0tXFx1e0ZERUZ9XFx1e0ZGRkV9XFx1e0ZGRkZ9XFx1ezFGRkZFfVxcdXsxRkZGRn1cXHV7MkZGRkV9XFx1ezJGRkZGfVxcdXszRkZGRX1cXHV7M0ZGRkZ9XFx1ezRGRkZFfVxcdXs0RkZGRn1cXHV7NUZGRkV9XFx1ezVGRkZGfVxcdXs2RkZGRX1cXHV7NkZGRkZ9XFx1ezdGRkZFfVxcdXs3RkZGRn1cXHV7OEZGRkV9XFx1ezhGRkZGfVxcdXs5RkZGRX1cXHV7OUZGRkZ9XFx1e0FGRkZFfVxcdXtBRkZGRn1cXHV7QkZGRkV9XFx1e0JGRkZGfVxcdXtDRkZGRX1cXHV7Q0ZGRkZ9XFx1e0RGRkZFfVxcdXtERkZGRn1cXHV7RUZGRkV9XFx1e0VGRkZGfVxcdXtGRkZGRX1cXHV7RkZGRkZ9XFx1ezEwRkZGRX1cXHV7MTBGRkZGfV0vdTtcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI2F0dHJpYnV0ZXMtMlxuLy8gaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI25vbmNoYXJhY3RlclxuZnVuY3Rpb24gc3ByZWFkKGFyZ3MsIGF0dHJzX3RvX2FkZCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHt9LCAuLi5hcmdzKTtcbiAgICBpZiAoYXR0cnNfdG9fYWRkKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXNfdG9fYWRkID0gYXR0cnNfdG9fYWRkLmNsYXNzZXM7XG4gICAgICAgIGNvbnN0IHN0eWxlc190b19hZGQgPSBhdHRyc190b19hZGQuc3R5bGVzO1xuICAgICAgICBpZiAoY2xhc3Nlc190b19hZGQpIHtcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzLmNsYXNzID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLmNsYXNzID0gY2xhc3Nlc190b19hZGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLmNsYXNzICs9ICcgJyArIGNsYXNzZXNfdG9fYWRkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzdHlsZXNfdG9fYWRkKSB7XG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlcy5zdHlsZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5zdHlsZSA9IHN0eWxlX29iamVjdF90b19zdHJpbmcoc3R5bGVzX3RvX2FkZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnN0eWxlID0gc3R5bGVfb2JqZWN0X3RvX3N0cmluZyhtZXJnZV9zc3Jfc3R5bGVzKGF0dHJpYnV0ZXMuc3R5bGUsIHN0eWxlc190b19hZGQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgc3RyID0gJyc7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgaWYgKGludmFsaWRfYXR0cmlidXRlX25hbWVfY2hhcmFjdGVyLnRlc3QobmFtZSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXR0cmlidXRlc1tuYW1lXTtcbiAgICAgICAgaWYgKHZhbHVlID09PSB0cnVlKVxuICAgICAgICAgICAgc3RyICs9ICcgJyArIG5hbWU7XG4gICAgICAgIGVsc2UgaWYgKGJvb2xlYW5fYXR0cmlidXRlcy5oYXMobmFtZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlKVxuICAgICAgICAgICAgICAgIHN0ciArPSAnICcgKyBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHN0ciArPSBgICR7bmFtZX09XCIke3ZhbHVlfVwiYDtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzdHI7XG59XG5mdW5jdGlvbiBtZXJnZV9zc3Jfc3R5bGVzKHN0eWxlX2F0dHJpYnV0ZSwgc3R5bGVfZGlyZWN0aXZlKSB7XG4gICAgY29uc3Qgc3R5bGVfb2JqZWN0ID0ge307XG4gICAgZm9yIChjb25zdCBpbmRpdmlkdWFsX3N0eWxlIG9mIHN0eWxlX2F0dHJpYnV0ZS5zcGxpdCgnOycpKSB7XG4gICAgICAgIGNvbnN0IGNvbG9uX2luZGV4ID0gaW5kaXZpZHVhbF9zdHlsZS5pbmRleE9mKCc6Jyk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBpbmRpdmlkdWFsX3N0eWxlLnNsaWNlKDAsIGNvbG9uX2luZGV4KS50cmltKCk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaW5kaXZpZHVhbF9zdHlsZS5zbGljZShjb2xvbl9pbmRleCArIDEpLnRyaW0oKTtcbiAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIHN0eWxlX29iamVjdFtuYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gc3R5bGVfZGlyZWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGVfZGlyZWN0aXZlW25hbWVdO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHN0eWxlX29iamVjdFtuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHN0eWxlX29iamVjdFtuYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3R5bGVfb2JqZWN0O1xufVxuY29uc3QgZXNjYXBlZCA9IHtcbiAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICBcIidcIjogJyYjMzk7JyxcbiAgICAnJic6ICcmYW1wOycsXG4gICAgJzwnOiAnJmx0OycsXG4gICAgJz4nOiAnJmd0Oydcbn07XG5mdW5jdGlvbiBlc2NhcGUoaHRtbCkge1xuICAgIHJldHVybiBTdHJpbmcoaHRtbCkucmVwbGFjZSgvW1wiJyY8Pl0vZywgbWF0Y2ggPT4gZXNjYXBlZFttYXRjaF0pO1xufVxuZnVuY3Rpb24gZXNjYXBlX2F0dHJpYnV0ZV92YWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gZXNjYXBlKHZhbHVlKSA6IHZhbHVlO1xufVxuZnVuY3Rpb24gZXNjYXBlX29iamVjdChvYmopIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBlc2NhcGVfYXR0cmlidXRlX3ZhbHVlKG9ialtrZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGVhY2goaXRlbXMsIGZuKSB7XG4gICAgbGV0IHN0ciA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgc3RyICs9IGZuKGl0ZW1zW2ldLCBpKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cbmNvbnN0IG1pc3NpbmdfY29tcG9uZW50ID0ge1xuICAgICQkcmVuZGVyOiAoKSA9PiAnJ1xufTtcbmZ1bmN0aW9uIHZhbGlkYXRlX2NvbXBvbmVudChjb21wb25lbnQsIG5hbWUpIHtcbiAgICBpZiAoIWNvbXBvbmVudCB8fCAhY29tcG9uZW50LiQkcmVuZGVyKSB7XG4gICAgICAgIGlmIChuYW1lID09PSAnc3ZlbHRlOmNvbXBvbmVudCcpXG4gICAgICAgICAgICBuYW1lICs9ICcgdGhpcz17Li4ufSc7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgPCR7bmFtZX0+IGlzIG5vdCBhIHZhbGlkIFNTUiBjb21wb25lbnQuIFlvdSBtYXkgbmVlZCB0byByZXZpZXcgeW91ciBidWlsZCBjb25maWcgdG8gZW5zdXJlIHRoYXQgZGVwZW5kZW5jaWVzIGFyZSBjb21waWxlZCwgcmF0aGVyIHRoYW4gaW1wb3J0ZWQgYXMgcHJlLWNvbXBpbGVkIG1vZHVsZXNgKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGRlYnVnKGZpbGUsIGxpbmUsIGNvbHVtbiwgdmFsdWVzKSB7XG4gICAgY29uc29sZS5sb2coYHtAZGVidWd9ICR7ZmlsZSA/IGZpbGUgKyAnICcgOiAnJ30oJHtsaW5lfToke2NvbHVtbn0pYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIHJldHVybiAnJztcbn1cbmxldCBvbl9kZXN0cm95O1xuZnVuY3Rpb24gY3JlYXRlX3Nzcl9jb21wb25lbnQoZm4pIHtcbiAgICBmdW5jdGlvbiAkJHJlbmRlcihyZXN1bHQsIHByb3BzLCBiaW5kaW5ncywgc2xvdHMsIGNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgcGFyZW50X2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICAgICAgICBjb25zdCAkJCA9IHtcbiAgICAgICAgICAgIG9uX2Rlc3Ryb3ksXG4gICAgICAgICAgICBjb250ZXh0OiBuZXcgTWFwKGNvbnRleHQgfHwgKHBhcmVudF9jb21wb25lbnQgPyBwYXJlbnRfY29tcG9uZW50LiQkLmNvbnRleHQgOiBbXSkpLFxuICAgICAgICAgICAgLy8gdGhlc2Ugd2lsbCBiZSBpbW1lZGlhdGVseSBkaXNjYXJkZWRcbiAgICAgICAgICAgIG9uX21vdW50OiBbXSxcbiAgICAgICAgICAgIGJlZm9yZV91cGRhdGU6IFtdLFxuICAgICAgICAgICAgYWZ0ZXJfdXBkYXRlOiBbXSxcbiAgICAgICAgICAgIGNhbGxiYWNrczogYmxhbmtfb2JqZWN0KClcbiAgICAgICAgfTtcbiAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHsgJCQgfSk7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBmbihyZXN1bHQsIHByb3BzLCBiaW5kaW5ncywgc2xvdHMpO1xuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQocGFyZW50X2NvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXI6IChwcm9wcyA9IHt9LCB7ICQkc2xvdHMgPSB7fSwgY29udGV4dCA9IG5ldyBNYXAoKSB9ID0ge30pID0+IHtcbiAgICAgICAgICAgIG9uX2Rlc3Ryb3kgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHsgdGl0bGU6ICcnLCBoZWFkOiAnJywgY3NzOiBuZXcgU2V0KCkgfTtcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSAkJHJlbmRlcihyZXN1bHQsIHByb3BzLCB7fSwgJCRzbG90cywgY29udGV4dCk7XG4gICAgICAgICAgICBydW5fYWxsKG9uX2Rlc3Ryb3kpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBodG1sLFxuICAgICAgICAgICAgICAgIGNzczoge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBBcnJheS5mcm9tKHJlc3VsdC5jc3MpLm1hcChjc3MgPT4gY3NzLmNvZGUpLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICBtYXA6IG51bGwgLy8gVE9ET1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGVhZDogcmVzdWx0LnRpdGxlICsgcmVzdWx0LmhlYWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgICQkcmVuZGVyXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFkZF9hdHRyaWJ1dGUobmFtZSwgdmFsdWUsIGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCAoYm9vbGVhbiAmJiAhdmFsdWUpKVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgcmV0dXJuIGAgJHtuYW1lfSR7dmFsdWUgPT09IHRydWUgJiYgYm9vbGVhbl9hdHRyaWJ1dGVzLmhhcyhuYW1lKSA/ICcnIDogYD0ke3R5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBKU09OLnN0cmluZ2lmeShlc2NhcGUodmFsdWUpKSA6IGBcIiR7dmFsdWV9XCJgfWB9YDtcbn1cbmZ1bmN0aW9uIGFkZF9jbGFzc2VzKGNsYXNzZXMpIHtcbiAgICByZXR1cm4gY2xhc3NlcyA/IGAgY2xhc3M9XCIke2NsYXNzZXN9XCJgIDogJyc7XG59XG5mdW5jdGlvbiBzdHlsZV9vYmplY3RfdG9fc3RyaW5nKHN0eWxlX29iamVjdCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZV9vYmplY3QpXG4gICAgICAgIC5maWx0ZXIoa2V5ID0+IHN0eWxlX29iamVjdFtrZXldKVxuICAgICAgICAubWFwKGtleSA9PiBgJHtrZXl9OiAke3N0eWxlX29iamVjdFtrZXldfTtgKVxuICAgICAgICAuam9pbignICcpO1xufVxuZnVuY3Rpb24gYWRkX3N0eWxlcyhzdHlsZV9vYmplY3QpIHtcbiAgICBjb25zdCBzdHlsZXMgPSBzdHlsZV9vYmplY3RfdG9fc3RyaW5nKHN0eWxlX29iamVjdCk7XG4gICAgcmV0dXJuIHN0eWxlcyA/IGAgc3R5bGU9XCIke3N0eWxlc31cImAgOiAnJztcbn1cblxuZnVuY3Rpb24gYmluZChjb21wb25lbnQsIG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgaW5kZXggPSBjb21wb25lbnQuJCQucHJvcHNbbmFtZV07XG4gICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29tcG9uZW50LiQkLmJvdW5kW2luZGV4XSA9IGNhbGxiYWNrO1xuICAgICAgICBjYWxsYmFjayhjb21wb25lbnQuJCQuY3R4W2luZGV4XSk7XG4gICAgfVxufVxuZnVuY3Rpb24gY3JlYXRlX2NvbXBvbmVudChibG9jaykge1xuICAgIGJsb2NrICYmIGJsb2NrLmMoKTtcbn1cbmZ1bmN0aW9uIGNsYWltX2NvbXBvbmVudChibG9jaywgcGFyZW50X25vZGVzKSB7XG4gICAgYmxvY2sgJiYgYmxvY2subChwYXJlbnRfbm9kZXMpO1xufVxuZnVuY3Rpb24gbW91bnRfY29tcG9uZW50KGNvbXBvbmVudCwgdGFyZ2V0LCBhbmNob3IsIGN1c3RvbUVsZW1lbnQpIHtcbiAgICBjb25zdCB7IGZyYWdtZW50LCBvbl9tb3VudCwgb25fZGVzdHJveSwgYWZ0ZXJfdXBkYXRlIH0gPSBjb21wb25lbnQuJCQ7XG4gICAgZnJhZ21lbnQgJiYgZnJhZ21lbnQubSh0YXJnZXQsIGFuY2hvcik7XG4gICAgaWYgKCFjdXN0b21FbGVtZW50KSB7XG4gICAgICAgIC8vIG9uTW91bnQgaGFwcGVucyBiZWZvcmUgdGhlIGluaXRpYWwgYWZ0ZXJVcGRhdGVcbiAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdfb25fZGVzdHJveSA9IG9uX21vdW50Lm1hcChydW4pLmZpbHRlcihpc19mdW5jdGlvbik7XG4gICAgICAgICAgICBpZiAob25fZGVzdHJveSkge1xuICAgICAgICAgICAgICAgIG9uX2Rlc3Ryb3kucHVzaCguLi5uZXdfb25fZGVzdHJveSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBFZGdlIGNhc2UgLSBjb21wb25lbnQgd2FzIGRlc3Ryb3llZCBpbW1lZGlhdGVseSxcbiAgICAgICAgICAgICAgICAvLyBtb3N0IGxpa2VseSBhcyBhIHJlc3VsdCBvZiBhIGJpbmRpbmcgaW5pdGlhbGlzaW5nXG4gICAgICAgICAgICAgICAgcnVuX2FsbChuZXdfb25fZGVzdHJveSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb21wb25lbnQuJCQub25fbW91bnQgPSBbXTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFmdGVyX3VwZGF0ZS5mb3JFYWNoKGFkZF9yZW5kZXJfY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gZGVzdHJveV9jb21wb25lbnQoY29tcG9uZW50LCBkZXRhY2hpbmcpIHtcbiAgICBjb25zdCAkJCA9IGNvbXBvbmVudC4kJDtcbiAgICBpZiAoJCQuZnJhZ21lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcnVuX2FsbCgkJC5vbl9kZXN0cm95KTtcbiAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQuZChkZXRhY2hpbmcpO1xuICAgICAgICAvLyBUT0RPIG51bGwgb3V0IG90aGVyIHJlZnMsIGluY2x1ZGluZyBjb21wb25lbnQuJCQgKGJ1dCBuZWVkIHRvXG4gICAgICAgIC8vIHByZXNlcnZlIGZpbmFsIHN0YXRlPylcbiAgICAgICAgJCQub25fZGVzdHJveSA9ICQkLmZyYWdtZW50ID0gbnVsbDtcbiAgICAgICAgJCQuY3R4ID0gW107XG4gICAgfVxufVxuZnVuY3Rpb24gbWFrZV9kaXJ0eShjb21wb25lbnQsIGkpIHtcbiAgICBpZiAoY29tcG9uZW50LiQkLmRpcnR5WzBdID09PSAtMSkge1xuICAgICAgICBkaXJ0eV9jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgc2NoZWR1bGVfdXBkYXRlKCk7XG4gICAgICAgIGNvbXBvbmVudC4kJC5kaXJ0eS5maWxsKDApO1xuICAgIH1cbiAgICBjb21wb25lbnQuJCQuZGlydHlbKGkgLyAzMSkgfCAwXSB8PSAoMSA8PCAoaSAlIDMxKSk7XG59XG5mdW5jdGlvbiBpbml0KGNvbXBvbmVudCwgb3B0aW9ucywgaW5zdGFuY2UsIGNyZWF0ZV9mcmFnbWVudCwgbm90X2VxdWFsLCBwcm9wcywgYXBwZW5kX3N0eWxlcywgZGlydHkgPSBbLTFdKSB7XG4gICAgY29uc3QgcGFyZW50X2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpO1xuICAgIGNvbnN0ICQkID0gY29tcG9uZW50LiQkID0ge1xuICAgICAgICBmcmFnbWVudDogbnVsbCxcbiAgICAgICAgY3R4OiBudWxsLFxuICAgICAgICAvLyBzdGF0ZVxuICAgICAgICBwcm9wcyxcbiAgICAgICAgdXBkYXRlOiBub29wLFxuICAgICAgICBub3RfZXF1YWwsXG4gICAgICAgIGJvdW5kOiBibGFua19vYmplY3QoKSxcbiAgICAgICAgLy8gbGlmZWN5Y2xlXG4gICAgICAgIG9uX21vdW50OiBbXSxcbiAgICAgICAgb25fZGVzdHJveTogW10sXG4gICAgICAgIG9uX2Rpc2Nvbm5lY3Q6IFtdLFxuICAgICAgICBiZWZvcmVfdXBkYXRlOiBbXSxcbiAgICAgICAgYWZ0ZXJfdXBkYXRlOiBbXSxcbiAgICAgICAgY29udGV4dDogbmV3IE1hcChvcHRpb25zLmNvbnRleHQgfHwgKHBhcmVudF9jb21wb25lbnQgPyBwYXJlbnRfY29tcG9uZW50LiQkLmNvbnRleHQgOiBbXSkpLFxuICAgICAgICAvLyBldmVyeXRoaW5nIGVsc2VcbiAgICAgICAgY2FsbGJhY2tzOiBibGFua19vYmplY3QoKSxcbiAgICAgICAgZGlydHksXG4gICAgICAgIHNraXBfYm91bmQ6IGZhbHNlLFxuICAgICAgICByb290OiBvcHRpb25zLnRhcmdldCB8fCBwYXJlbnRfY29tcG9uZW50LiQkLnJvb3RcbiAgICB9O1xuICAgIGFwcGVuZF9zdHlsZXMgJiYgYXBwZW5kX3N0eWxlcygkJC5yb290KTtcbiAgICBsZXQgcmVhZHkgPSBmYWxzZTtcbiAgICAkJC5jdHggPSBpbnN0YW5jZVxuICAgICAgICA/IGluc3RhbmNlKGNvbXBvbmVudCwgb3B0aW9ucy5wcm9wcyB8fCB7fSwgKGksIHJldCwgLi4ucmVzdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZXN0Lmxlbmd0aCA/IHJlc3RbMF0gOiByZXQ7XG4gICAgICAgICAgICBpZiAoJCQuY3R4ICYmIG5vdF9lcXVhbCgkJC5jdHhbaV0sICQkLmN0eFtpXSA9IHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghJCQuc2tpcF9ib3VuZCAmJiAkJC5ib3VuZFtpXSlcbiAgICAgICAgICAgICAgICAgICAgJCQuYm91bmRbaV0odmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChyZWFkeSlcbiAgICAgICAgICAgICAgICAgICAgbWFrZV9kaXJ0eShjb21wb25lbnQsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSlcbiAgICAgICAgOiBbXTtcbiAgICAkJC51cGRhdGUoKTtcbiAgICByZWFkeSA9IHRydWU7XG4gICAgcnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTtcbiAgICAvLyBgZmFsc2VgIGFzIGEgc3BlY2lhbCBjYXNlIG9mIG5vIERPTSBjb21wb25lbnRcbiAgICAkJC5mcmFnbWVudCA9IGNyZWF0ZV9mcmFnbWVudCA/IGNyZWF0ZV9mcmFnbWVudCgkJC5jdHgpIDogZmFsc2U7XG4gICAgaWYgKG9wdGlvbnMudGFyZ2V0KSB7XG4gICAgICAgIGlmIChvcHRpb25zLmh5ZHJhdGUpIHtcbiAgICAgICAgICAgIHN0YXJ0X2h5ZHJhdGluZygpO1xuICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBjaGlsZHJlbihvcHRpb25zLnRhcmdldCk7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQubChub2Rlcyk7XG4gICAgICAgICAgICBub2Rlcy5mb3JFYWNoKGRldGFjaCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQuYygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmludHJvKVxuICAgICAgICAgICAgdHJhbnNpdGlvbl9pbihjb21wb25lbnQuJCQuZnJhZ21lbnQpO1xuICAgICAgICBtb3VudF9jb21wb25lbnQoY29tcG9uZW50LCBvcHRpb25zLnRhcmdldCwgb3B0aW9ucy5hbmNob3IsIG9wdGlvbnMuY3VzdG9tRWxlbWVudCk7XG4gICAgICAgIGVuZF9oeWRyYXRpbmcoKTtcbiAgICAgICAgZmx1c2goKTtcbiAgICB9XG4gICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHBhcmVudF9jb21wb25lbnQpO1xufVxubGV0IFN2ZWx0ZUVsZW1lbnQ7XG5pZiAodHlwZW9mIEhUTUxFbGVtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgU3ZlbHRlRWxlbWVudCA9IGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgb25fbW91bnQgfSA9IHRoaXMuJCQ7XG4gICAgICAgICAgICB0aGlzLiQkLm9uX2Rpc2Nvbm5lY3QgPSBvbl9tb3VudC5tYXAocnVuKS5maWx0ZXIoaXNfZnVuY3Rpb24pO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBpbXByb3ZlIHR5cGluZ3NcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuJCQuc2xvdHRlZCkge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLiQkLnNsb3R0ZWRba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHIsIF9vbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXNbYXR0cl0gPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICAgIHJ1bl9hbGwodGhpcy4kJC5vbl9kaXNjb25uZWN0KTtcbiAgICAgICAgfVxuICAgICAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgICAgIGRlc3Ryb3lfY29tcG9uZW50KHRoaXMsIDEpO1xuICAgICAgICAgICAgdGhpcy4kZGVzdHJveSA9IG5vb3A7XG4gICAgICAgIH1cbiAgICAgICAgJG9uKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAvLyBUT0RPIHNob3VsZCB0aGlzIGRlbGVnYXRlIHRvIGFkZEV2ZW50TGlzdGVuZXI/XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFja3MgPSAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gfHwgKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdID0gW10pKTtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjYWxsYmFja3MuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgICRzZXQoJCRwcm9wcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuJCRzZXQgJiYgIWlzX2VtcHR5KCQkcHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kJC5za2lwX2JvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiQkc2V0KCQkcHJvcHMpO1xuICAgICAgICAgICAgICAgIHRoaXMuJCQuc2tpcF9ib3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgU3ZlbHRlIGNvbXBvbmVudHMuIFVzZWQgd2hlbiBkZXY9ZmFsc2UuXG4gKi9cbmNsYXNzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIGRlc3Ryb3lfY29tcG9uZW50KHRoaXMsIDEpO1xuICAgICAgICB0aGlzLiRkZXN0cm95ID0gbm9vcDtcbiAgICB9XG4gICAgJG9uKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSB8fCAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gPSBbXSkpO1xuICAgICAgICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGNhbGxiYWNrcy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgICRzZXQoJCRwcm9wcykge1xuICAgICAgICBpZiAodGhpcy4kJHNldCAmJiAhaXNfZW1wdHkoJCRwcm9wcykpIHtcbiAgICAgICAgICAgIHRoaXMuJCQuc2tpcF9ib3VuZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLiQkc2V0KCQkcHJvcHMpO1xuICAgICAgICAgICAgdGhpcy4kJC5za2lwX2JvdW5kID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoX2Rldih0eXBlLCBkZXRhaWwpIHtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGN1c3RvbV9ldmVudCh0eXBlLCBPYmplY3QuYXNzaWduKHsgdmVyc2lvbjogJzMuNDYuNCcgfSwgZGV0YWlsKSwgdHJ1ZSkpO1xufVxuZnVuY3Rpb24gYXBwZW5kX2Rldih0YXJnZXQsIG5vZGUpIHtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTUluc2VydCcsIHsgdGFyZ2V0LCBub2RlIH0pO1xuICAgIGFwcGVuZCh0YXJnZXQsIG5vZGUpO1xufVxuZnVuY3Rpb24gYXBwZW5kX2h5ZHJhdGlvbl9kZXYodGFyZ2V0LCBub2RlKSB7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01JbnNlcnQnLCB7IHRhcmdldCwgbm9kZSB9KTtcbiAgICBhcHBlbmRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSk7XG59XG5mdW5jdGlvbiBpbnNlcnRfZGV2KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01JbnNlcnQnLCB7IHRhcmdldCwgbm9kZSwgYW5jaG9yIH0pO1xuICAgIGluc2VydCh0YXJnZXQsIG5vZGUsIGFuY2hvcik7XG59XG5mdW5jdGlvbiBpbnNlcnRfaHlkcmF0aW9uX2Rldih0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NSW5zZXJ0JywgeyB0YXJnZXQsIG5vZGUsIGFuY2hvciB9KTtcbiAgICBpbnNlcnRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSwgYW5jaG9yKTtcbn1cbmZ1bmN0aW9uIGRldGFjaF9kZXYobm9kZSkge1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NUmVtb3ZlJywgeyBub2RlIH0pO1xuICAgIGRldGFjaChub2RlKTtcbn1cbmZ1bmN0aW9uIGRldGFjaF9iZXR3ZWVuX2RldihiZWZvcmUsIGFmdGVyKSB7XG4gICAgd2hpbGUgKGJlZm9yZS5uZXh0U2libGluZyAmJiBiZWZvcmUubmV4dFNpYmxpbmcgIT09IGFmdGVyKSB7XG4gICAgICAgIGRldGFjaF9kZXYoYmVmb3JlLm5leHRTaWJsaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZXRhY2hfYmVmb3JlX2RldihhZnRlcikge1xuICAgIHdoaWxlIChhZnRlci5wcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgICAgZGV0YWNoX2RldihhZnRlci5wcmV2aW91c1NpYmxpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRldGFjaF9hZnRlcl9kZXYoYmVmb3JlKSB7XG4gICAgd2hpbGUgKGJlZm9yZS5uZXh0U2libGluZykge1xuICAgICAgICBkZXRhY2hfZGV2KGJlZm9yZS5uZXh0U2libGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gbGlzdGVuX2Rldihub2RlLCBldmVudCwgaGFuZGxlciwgb3B0aW9ucywgaGFzX3ByZXZlbnRfZGVmYXVsdCwgaGFzX3N0b3BfcHJvcGFnYXRpb24pIHtcbiAgICBjb25zdCBtb2RpZmllcnMgPSBvcHRpb25zID09PSB0cnVlID8gWydjYXB0dXJlJ10gOiBvcHRpb25zID8gQXJyYXkuZnJvbShPYmplY3Qua2V5cyhvcHRpb25zKSkgOiBbXTtcbiAgICBpZiAoaGFzX3ByZXZlbnRfZGVmYXVsdClcbiAgICAgICAgbW9kaWZpZXJzLnB1c2goJ3ByZXZlbnREZWZhdWx0Jyk7XG4gICAgaWYgKGhhc19zdG9wX3Byb3BhZ2F0aW9uKVxuICAgICAgICBtb2RpZmllcnMucHVzaCgnc3RvcFByb3BhZ2F0aW9uJyk7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01BZGRFdmVudExpc3RlbmVyJywgeyBub2RlLCBldmVudCwgaGFuZGxlciwgbW9kaWZpZXJzIH0pO1xuICAgIGNvbnN0IGRpc3Bvc2UgPSBsaXN0ZW4obm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NUmVtb3ZlRXZlbnRMaXN0ZW5lcicsIHsgbm9kZSwgZXZlbnQsIGhhbmRsZXIsIG1vZGlmaWVycyB9KTtcbiAgICAgICAgZGlzcG9zZSgpO1xuICAgIH07XG59XG5mdW5jdGlvbiBhdHRyX2Rldihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgYXR0cihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICBpZiAodmFsdWUgPT0gbnVsbClcbiAgICAgICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01SZW1vdmVBdHRyaWJ1dGUnLCB7IG5vZGUsIGF0dHJpYnV0ZSB9KTtcbiAgICBlbHNlXG4gICAgICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NU2V0QXR0cmlidXRlJywgeyBub2RlLCBhdHRyaWJ1dGUsIHZhbHVlIH0pO1xufVxuZnVuY3Rpb24gcHJvcF9kZXYobm9kZSwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgbm9kZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVNldFByb3BlcnR5JywgeyBub2RlLCBwcm9wZXJ0eSwgdmFsdWUgfSk7XG59XG5mdW5jdGlvbiBkYXRhc2V0X2Rldihub2RlLCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBub2RlLmRhdGFzZXRbcHJvcGVydHldID0gdmFsdWU7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01TZXREYXRhc2V0JywgeyBub2RlLCBwcm9wZXJ0eSwgdmFsdWUgfSk7XG59XG5mdW5jdGlvbiBzZXRfZGF0YV9kZXYodGV4dCwgZGF0YSkge1xuICAgIGRhdGEgPSAnJyArIGRhdGE7XG4gICAgaWYgKHRleHQud2hvbGVUZXh0ID09PSBkYXRhKVxuICAgICAgICByZXR1cm47XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01TZXREYXRhJywgeyBub2RlOiB0ZXh0LCBkYXRhIH0pO1xuICAgIHRleHQuZGF0YSA9IGRhdGE7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9lYWNoX2FyZ3VtZW50KGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnc3RyaW5nJyAmJiAhKGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiBhcmcpKSB7XG4gICAgICAgIGxldCBtc2cgPSAneyNlYWNofSBvbmx5IGl0ZXJhdGVzIG92ZXIgYXJyYXktbGlrZSBvYmplY3RzLic7XG4gICAgICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIGFyZyAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gYXJnKSB7XG4gICAgICAgICAgICBtc2cgKz0gJyBZb3UgY2FuIHVzZSBhIHNwcmVhZCB0byBjb252ZXJ0IHRoaXMgaXRlcmFibGUgaW50byBhbiBhcnJheS4nO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX3Nsb3RzKG5hbWUsIHNsb3QsIGtleXMpIHtcbiAgICBmb3IgKGNvbnN0IHNsb3Rfa2V5IG9mIE9iamVjdC5rZXlzKHNsb3QpKSB7XG4gICAgICAgIGlmICghfmtleXMuaW5kZXhPZihzbG90X2tleSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgPCR7bmFtZX0+IHJlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgc2xvdCBcIiR7c2xvdF9rZXl9XCIuYCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIFN2ZWx0ZSBjb21wb25lbnRzIHdpdGggc29tZSBtaW5vciBkZXYtZW5oYW5jZW1lbnRzLiBVc2VkIHdoZW4gZGV2PXRydWUuXG4gKi9cbmNsYXNzIFN2ZWx0ZUNvbXBvbmVudERldiBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBpZiAoIW9wdGlvbnMgfHwgKCFvcHRpb25zLnRhcmdldCAmJiAhb3B0aW9ucy4kJGlubGluZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIid0YXJnZXQnIGlzIGEgcmVxdWlyZWQgb3B0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgICRkZXN0cm95KCkge1xuICAgICAgICBzdXBlci4kZGVzdHJveSgpO1xuICAgICAgICB0aGlzLiRkZXN0cm95ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdDb21wb25lbnQgd2FzIGFscmVhZHkgZGVzdHJveWVkJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICB9O1xuICAgIH1cbiAgICAkY2FwdHVyZV9zdGF0ZSgpIHsgfVxuICAgICRpbmplY3Rfc3RhdGUoKSB7IH1cbn1cbi8qKlxuICogQmFzZSBjbGFzcyB0byBjcmVhdGUgc3Ryb25nbHkgdHlwZWQgU3ZlbHRlIGNvbXBvbmVudHMuXG4gKiBUaGlzIG9ubHkgZXhpc3RzIGZvciB0eXBpbmcgcHVycG9zZXMgYW5kIHNob3VsZCBiZSB1c2VkIGluIGAuZC50c2AgZmlsZXMuXG4gKlxuICogIyMjIEV4YW1wbGU6XG4gKlxuICogWW91IGhhdmUgY29tcG9uZW50IGxpYnJhcnkgb24gbnBtIGNhbGxlZCBgY29tcG9uZW50LWxpYnJhcnlgLCBmcm9tIHdoaWNoXG4gKiB5b3UgZXhwb3J0IGEgY29tcG9uZW50IGNhbGxlZCBgTXlDb21wb25lbnRgLiBGb3IgU3ZlbHRlK1R5cGVTY3JpcHQgdXNlcnMsXG4gKiB5b3Ugd2FudCB0byBwcm92aWRlIHR5cGluZ3MuIFRoZXJlZm9yZSB5b3UgY3JlYXRlIGEgYGluZGV4LmQudHNgOlxuICogYGBgdHNcbiAqIGltcG9ydCB7IFN2ZWx0ZUNvbXBvbmVudFR5cGVkIH0gZnJvbSBcInN2ZWx0ZVwiO1xuICogZXhwb3J0IGNsYXNzIE15Q29tcG9uZW50IGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50VHlwZWQ8e2Zvbzogc3RyaW5nfT4ge31cbiAqIGBgYFxuICogVHlwaW5nIHRoaXMgbWFrZXMgaXQgcG9zc2libGUgZm9yIElERXMgbGlrZSBWUyBDb2RlIHdpdGggdGhlIFN2ZWx0ZSBleHRlbnNpb25cbiAqIHRvIHByb3ZpZGUgaW50ZWxsaXNlbnNlIGFuZCB0byB1c2UgdGhlIGNvbXBvbmVudCBsaWtlIHRoaXMgaW4gYSBTdmVsdGUgZmlsZVxuICogd2l0aCBUeXBlU2NyaXB0OlxuICogYGBgc3ZlbHRlXG4gKiA8c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICogXHRpbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gXCJjb21wb25lbnQtbGlicmFyeVwiO1xuICogPC9zY3JpcHQ+XG4gKiA8TXlDb21wb25lbnQgZm9vPXsnYmFyJ30gLz5cbiAqIGBgYFxuICpcbiAqICMjIyMgV2h5IG5vdCBtYWtlIHRoaXMgcGFydCBvZiBgU3ZlbHRlQ29tcG9uZW50KERldilgP1xuICogQmVjYXVzZVxuICogYGBgdHNcbiAqIGNsYXNzIEFTdWJjbGFzc09mU3ZlbHRlQ29tcG9uZW50IGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50PHtmb286IHN0cmluZ30+IHt9XG4gKiBjb25zdCBjb21wb25lbnQ6IHR5cGVvZiBTdmVsdGVDb21wb25lbnQgPSBBU3ViY2xhc3NPZlN2ZWx0ZUNvbXBvbmVudDtcbiAqIGBgYFxuICogd2lsbCB0aHJvdyBhIHR5cGUgZXJyb3IsIHNvIHdlIG5lZWQgdG8gc2VwYXJhdGUgdGhlIG1vcmUgc3RyaWN0bHkgdHlwZWQgY2xhc3MuXG4gKi9cbmNsYXNzIFN2ZWx0ZUNvbXBvbmVudFR5cGVkIGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50RGV2IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGxvb3BfZ3VhcmQodGltZW91dCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHN0YXJ0ID4gdGltZW91dCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmZpbml0ZSBsb29wIGRldGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgeyBIdG1sVGFnLCBIdG1sVGFnSHlkcmF0aW9uLCBTdmVsdGVDb21wb25lbnQsIFN2ZWx0ZUNvbXBvbmVudERldiwgU3ZlbHRlQ29tcG9uZW50VHlwZWQsIFN2ZWx0ZUVsZW1lbnQsIGFjdGlvbl9kZXN0cm95ZXIsIGFkZF9hdHRyaWJ1dGUsIGFkZF9jbGFzc2VzLCBhZGRfZmx1c2hfY2FsbGJhY2ssIGFkZF9sb2NhdGlvbiwgYWRkX3JlbmRlcl9jYWxsYmFjaywgYWRkX3Jlc2l6ZV9saXN0ZW5lciwgYWRkX3N0eWxlcywgYWRkX3RyYW5zZm9ybSwgYWZ0ZXJVcGRhdGUsIGFwcGVuZCwgYXBwZW5kX2RldiwgYXBwZW5kX2VtcHR5X3N0eWxlc2hlZXQsIGFwcGVuZF9oeWRyYXRpb24sIGFwcGVuZF9oeWRyYXRpb25fZGV2LCBhcHBlbmRfc3R5bGVzLCBhc3NpZ24sIGF0dHIsIGF0dHJfZGV2LCBhdHRyaWJ1dGVfdG9fb2JqZWN0LCBiZWZvcmVVcGRhdGUsIGJpbmQsIGJpbmRpbmdfY2FsbGJhY2tzLCBibGFua19vYmplY3QsIGJ1YmJsZSwgY2hlY2tfb3V0cm9zLCBjaGlsZHJlbiwgY2xhaW1fY29tcG9uZW50LCBjbGFpbV9lbGVtZW50LCBjbGFpbV9odG1sX3RhZywgY2xhaW1fc3BhY2UsIGNsYWltX3N2Z19lbGVtZW50LCBjbGFpbV90ZXh0LCBjbGVhcl9sb29wcywgY29tcG9uZW50X3N1YnNjcmliZSwgY29tcHV0ZV9yZXN0X3Byb3BzLCBjb21wdXRlX3Nsb3RzLCBjcmVhdGVFdmVudERpc3BhdGNoZXIsIGNyZWF0ZV9hbmltYXRpb24sIGNyZWF0ZV9iaWRpcmVjdGlvbmFsX3RyYW5zaXRpb24sIGNyZWF0ZV9jb21wb25lbnQsIGNyZWF0ZV9pbl90cmFuc2l0aW9uLCBjcmVhdGVfb3V0X3RyYW5zaXRpb24sIGNyZWF0ZV9zbG90LCBjcmVhdGVfc3NyX2NvbXBvbmVudCwgY3VycmVudF9jb21wb25lbnQsIGN1c3RvbV9ldmVudCwgZGF0YXNldF9kZXYsIGRlYnVnLCBkZXN0cm95X2Jsb2NrLCBkZXN0cm95X2NvbXBvbmVudCwgZGVzdHJveV9lYWNoLCBkZXRhY2gsIGRldGFjaF9hZnRlcl9kZXYsIGRldGFjaF9iZWZvcmVfZGV2LCBkZXRhY2hfYmV0d2Vlbl9kZXYsIGRldGFjaF9kZXYsIGRpcnR5X2NvbXBvbmVudHMsIGRpc3BhdGNoX2RldiwgZWFjaCwgZWxlbWVudCwgZWxlbWVudF9pcywgZW1wdHksIGVuZF9oeWRyYXRpbmcsIGVzY2FwZSwgZXNjYXBlX2F0dHJpYnV0ZV92YWx1ZSwgZXNjYXBlX29iamVjdCwgZXNjYXBlZCwgZXhjbHVkZV9pbnRlcm5hbF9wcm9wcywgZml4X2FuZF9kZXN0cm95X2Jsb2NrLCBmaXhfYW5kX291dHJvX2FuZF9kZXN0cm95X2Jsb2NrLCBmaXhfcG9zaXRpb24sIGZsdXNoLCBnZXRBbGxDb250ZXh0cywgZ2V0Q29udGV4dCwgZ2V0X2FsbF9kaXJ0eV9mcm9tX3Njb3BlLCBnZXRfYmluZGluZ19ncm91cF92YWx1ZSwgZ2V0X2N1cnJlbnRfY29tcG9uZW50LCBnZXRfY3VzdG9tX2VsZW1lbnRzX3Nsb3RzLCBnZXRfcm9vdF9mb3Jfc3R5bGUsIGdldF9zbG90X2NoYW5nZXMsIGdldF9zcHJlYWRfb2JqZWN0LCBnZXRfc3ByZWFkX3VwZGF0ZSwgZ2V0X3N0b3JlX3ZhbHVlLCBnbG9iYWxzLCBncm91cF9vdXRyb3MsIGhhbmRsZV9wcm9taXNlLCBoYXNDb250ZXh0LCBoYXNfcHJvcCwgaWRlbnRpdHksIGluaXQsIGluc2VydCwgaW5zZXJ0X2RldiwgaW5zZXJ0X2h5ZHJhdGlvbiwgaW5zZXJ0X2h5ZHJhdGlvbl9kZXYsIGludHJvcywgaW52YWxpZF9hdHRyaWJ1dGVfbmFtZV9jaGFyYWN0ZXIsIGlzX2NsaWVudCwgaXNfY3Jvc3NvcmlnaW4sIGlzX2VtcHR5LCBpc19mdW5jdGlvbiwgaXNfcHJvbWlzZSwgbGlzdGVuLCBsaXN0ZW5fZGV2LCBsb29wLCBsb29wX2d1YXJkLCBtZXJnZV9zc3Jfc3R5bGVzLCBtaXNzaW5nX2NvbXBvbmVudCwgbW91bnRfY29tcG9uZW50LCBub29wLCBub3RfZXF1YWwsIG5vdywgbnVsbF90b19lbXB0eSwgb2JqZWN0X3dpdGhvdXRfcHJvcGVydGllcywgb25EZXN0cm95LCBvbk1vdW50LCBvbmNlLCBvdXRyb19hbmRfZGVzdHJveV9ibG9jaywgcHJldmVudF9kZWZhdWx0LCBwcm9wX2RldiwgcXVlcnlfc2VsZWN0b3JfYWxsLCByYWYsIHJ1biwgcnVuX2FsbCwgc2FmZV9ub3RfZXF1YWwsIHNjaGVkdWxlX3VwZGF0ZSwgc2VsZWN0X211bHRpcGxlX3ZhbHVlLCBzZWxlY3Rfb3B0aW9uLCBzZWxlY3Rfb3B0aW9ucywgc2VsZWN0X3ZhbHVlLCBzZWxmLCBzZXRDb250ZXh0LCBzZXRfYXR0cmlidXRlcywgc2V0X2N1cnJlbnRfY29tcG9uZW50LCBzZXRfY3VzdG9tX2VsZW1lbnRfZGF0YSwgc2V0X2RhdGEsIHNldF9kYXRhX2Rldiwgc2V0X2lucHV0X3R5cGUsIHNldF9pbnB1dF92YWx1ZSwgc2V0X25vdywgc2V0X3JhZiwgc2V0X3N0b3JlX3ZhbHVlLCBzZXRfc3R5bGUsIHNldF9zdmdfYXR0cmlidXRlcywgc3BhY2UsIHNwcmVhZCwgc3JjX3VybF9lcXVhbCwgc3RhcnRfaHlkcmF0aW5nLCBzdG9wX3Byb3BhZ2F0aW9uLCBzdWJzY3JpYmUsIHN2Z19lbGVtZW50LCB0ZXh0LCB0aWNrLCB0aW1lX3Jhbmdlc190b19hcnJheSwgdG9fbnVtYmVyLCB0b2dnbGVfY2xhc3MsIHRyYW5zaXRpb25faW4sIHRyYW5zaXRpb25fb3V0LCB0cnVzdGVkLCB1cGRhdGVfYXdhaXRfYmxvY2tfYnJhbmNoLCB1cGRhdGVfa2V5ZWRfZWFjaCwgdXBkYXRlX3Nsb3QsIHVwZGF0ZV9zbG90X2Jhc2UsIHZhbGlkYXRlX2NvbXBvbmVudCwgdmFsaWRhdGVfZWFjaF9hcmd1bWVudCwgdmFsaWRhdGVfZWFjaF9rZXlzLCB2YWxpZGF0ZV9zbG90cywgdmFsaWRhdGVfc3RvcmUsIHhsaW5rX2F0dHIgfTtcbiIsImltcG9ydCB7IG5vb3AsIHNhZmVfbm90X2VxdWFsLCBzdWJzY3JpYmUsIHJ1bl9hbGwsIGlzX2Z1bmN0aW9uIH0gZnJvbSAnLi4vaW50ZXJuYWwvaW5kZXgubWpzJztcbmV4cG9ydCB7IGdldF9zdG9yZV92YWx1ZSBhcyBnZXQgfSBmcm9tICcuLi9pbnRlcm5hbC9pbmRleC5tanMnO1xuXG5jb25zdCBzdWJzY3JpYmVyX3F1ZXVlID0gW107XG4vKipcbiAqIENyZWF0ZXMgYSBgUmVhZGFibGVgIHN0b3JlIHRoYXQgYWxsb3dzIHJlYWRpbmcgYnkgc3Vic2NyaXB0aW9uLlxuICogQHBhcmFtIHZhbHVlIGluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7U3RhcnRTdG9wTm90aWZpZXJ9c3RhcnQgc3RhcnQgYW5kIHN0b3Agbm90aWZpY2F0aW9ucyBmb3Igc3Vic2NyaXB0aW9uc1xuICovXG5mdW5jdGlvbiByZWFkYWJsZSh2YWx1ZSwgc3RhcnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdWJzY3JpYmU6IHdyaXRhYmxlKHZhbHVlLCBzdGFydCkuc3Vic2NyaWJlXG4gICAgfTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgYFdyaXRhYmxlYCBzdG9yZSB0aGF0IGFsbG93cyBib3RoIHVwZGF0aW5nIGFuZCByZWFkaW5nIGJ5IHN1YnNjcmlwdGlvbi5cbiAqIEBwYXJhbSB7Kj19dmFsdWUgaW5pdGlhbCB2YWx1ZVxuICogQHBhcmFtIHtTdGFydFN0b3BOb3RpZmllcj19c3RhcnQgc3RhcnQgYW5kIHN0b3Agbm90aWZpY2F0aW9ucyBmb3Igc3Vic2NyaXB0aW9uc1xuICovXG5mdW5jdGlvbiB3cml0YWJsZSh2YWx1ZSwgc3RhcnQgPSBub29wKSB7XG4gICAgbGV0IHN0b3A7XG4gICAgY29uc3Qgc3Vic2NyaWJlcnMgPSBuZXcgU2V0KCk7XG4gICAgZnVuY3Rpb24gc2V0KG5ld192YWx1ZSkge1xuICAgICAgICBpZiAoc2FmZV9ub3RfZXF1YWwodmFsdWUsIG5ld192YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbmV3X3ZhbHVlO1xuICAgICAgICAgICAgaWYgKHN0b3ApIHsgLy8gc3RvcmUgaXMgcmVhZHlcbiAgICAgICAgICAgICAgICBjb25zdCBydW5fcXVldWUgPSAhc3Vic2NyaWJlcl9xdWV1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBzdWJzY3JpYmVyIG9mIHN1YnNjcmliZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJbMV0oKTtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcl9xdWV1ZS5wdXNoKHN1YnNjcmliZXIsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJ1bl9xdWV1ZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZXJfcXVldWUubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWVbaV1bMF0oc3Vic2NyaWJlcl9xdWV1ZVtpICsgMV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlKGZuKSB7XG4gICAgICAgIHNldChmbih2YWx1ZSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdWJzY3JpYmUocnVuLCBpbnZhbGlkYXRlID0gbm9vcCkge1xuICAgICAgICBjb25zdCBzdWJzY3JpYmVyID0gW3J1biwgaW52YWxpZGF0ZV07XG4gICAgICAgIHN1YnNjcmliZXJzLmFkZChzdWJzY3JpYmVyKTtcbiAgICAgICAgaWYgKHN1YnNjcmliZXJzLnNpemUgPT09IDEpIHtcbiAgICAgICAgICAgIHN0b3AgPSBzdGFydChzZXQpIHx8IG5vb3A7XG4gICAgICAgIH1cbiAgICAgICAgcnVuKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHN1YnNjcmliZXJzLmRlbGV0ZShzdWJzY3JpYmVyKTtcbiAgICAgICAgICAgIGlmIChzdWJzY3JpYmVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc3RvcCgpO1xuICAgICAgICAgICAgICAgIHN0b3AgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4geyBzZXQsIHVwZGF0ZSwgc3Vic2NyaWJlIH07XG59XG5mdW5jdGlvbiBkZXJpdmVkKHN0b3JlcywgZm4sIGluaXRpYWxfdmFsdWUpIHtcbiAgICBjb25zdCBzaW5nbGUgPSAhQXJyYXkuaXNBcnJheShzdG9yZXMpO1xuICAgIGNvbnN0IHN0b3Jlc19hcnJheSA9IHNpbmdsZVxuICAgICAgICA/IFtzdG9yZXNdXG4gICAgICAgIDogc3RvcmVzO1xuICAgIGNvbnN0IGF1dG8gPSBmbi5sZW5ndGggPCAyO1xuICAgIHJldHVybiByZWFkYWJsZShpbml0aWFsX3ZhbHVlLCAoc2V0KSA9PiB7XG4gICAgICAgIGxldCBpbml0ZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gW107XG4gICAgICAgIGxldCBwZW5kaW5nID0gMDtcbiAgICAgICAgbGV0IGNsZWFudXAgPSBub29wO1xuICAgICAgICBjb25zdCBzeW5jID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHBlbmRpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmbihzaW5nbGUgPyB2YWx1ZXNbMF0gOiB2YWx1ZXMsIHNldCk7XG4gICAgICAgICAgICBpZiAoYXV0bykge1xuICAgICAgICAgICAgICAgIHNldChyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xlYW51cCA9IGlzX2Z1bmN0aW9uKHJlc3VsdCkgPyByZXN1bHQgOiBub29wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB1bnN1YnNjcmliZXJzID0gc3RvcmVzX2FycmF5Lm1hcCgoc3RvcmUsIGkpID0+IHN1YnNjcmliZShzdG9yZSwgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB2YWx1ZXNbaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHBlbmRpbmcgJj0gfigxIDw8IGkpO1xuICAgICAgICAgICAgaWYgKGluaXRlZCkge1xuICAgICAgICAgICAgICAgIHN5bmMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgcGVuZGluZyB8PSAoMSA8PCBpKTtcbiAgICAgICAgfSkpO1xuICAgICAgICBpbml0ZWQgPSB0cnVlO1xuICAgICAgICBzeW5jKCk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICAgICAgcnVuX2FsbCh1bnN1YnNjcmliZXJzKTtcbiAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgZGVyaXZlZCwgcmVhZGFibGUsIHdyaXRhYmxlIH07XG4iLCJpbXBvcnQgeyBXcml0YWJsZSwgd3JpdGFibGUgfSBmcm9tIFwic3ZlbHRlL3N0b3JlXCI7XG5pbXBvcnQgdHlwZSB7IE1hbmlmZXN0IH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG5cbnR5cGUgRXJyb3JTdG9yZSA9IFJlY29yZDxzdHJpbmcsIE1hbmlmZXN0W1wiZXJyb3JcIl0+O1xuXG5mdW5jdGlvbiBpbml0aWFsaXplKCk6IFdyaXRhYmxlPEVycm9yU3RvcmU+IHtcbiAgcmV0dXJuIHdyaXRhYmxlKHt9KTtcbn1cblxuZXhwb3J0IGNvbnN0IEVycm9yU3RvcmUgPSBpbml0aWFsaXplKCk7XG4iLCJpbXBvcnQgeyBFcnJvclN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlL2Vycm9yXCI7XG5pbXBvcnQgdHlwZSB7IE1hbmlmZXN0IH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYW5kbGVSZXNwb25zZTxUID0gdW5rbm93bj4oXG4gIHJlc3BvbnNlOiBSZXNwb25zZSxcbik6IFByb21pc2U8VD4ge1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgY29uc3QgcGFzc2VkRXJyb3IgPSBhd2FpdCByZXNwb25zZS5qc29uKCkudGhlbihcbiAgICAgIChqc29uOiB7XG4gICAgICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgICByZXNwb25zZT86IHtcbiAgICAgICAgICBlcnJvcj86IHN0cmluZztcbiAgICAgICAgfTtcbiAgICAgIH0pID0+IGpzb24sXG4gICAgKTtcblxuICAgIGNvbnN0IG1lc3NhZ2UgPSBwYXNzZWRFcnJvcj8ucmVzcG9uc2U/LmVycm9yIHx8IHBhc3NlZEVycm9yPy5tZXNzYWdlO1xuXG4gICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgZXJyb3IubmFtZSA9IHBhc3NlZEVycm9yLm5hbWU7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHsgbWVzc2FnZTogZXJyb3IsIHN0YXR1c0NvZGU6IHJlc3BvbnNlLnN0YXR1cyB9KTtcbiAgfVxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufVxuXG50eXBlIEhUVFBNZXRob2QgPSBcIlBPU1RcIiB8IFwiR0VUXCIgfCBcIlBVVFwiIHwgXCJQQVRDSFwiIHwgXCJPUFRJT05TXCIgfCB1bmRlZmluZWQ7XG5cbnR5cGUgRmV0Y2hPcHRpb25zID0ge1xuICBib2R5PzogdW5rbm93bjtcbiAgbWV0aG9kPzogSFRUUE1ldGhvZDtcbiAgY29tcG9uZW50X2lkPzogc3RyaW5nO1xuICBhY2Nlc3NfdG9rZW4/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmV0Y2hDb25maWcoXG4gIG9wdHM6IEZldGNoT3B0aW9ucyA9IHsgY29tcG9uZW50X2lkOiBcIlwiIH0sXG4pOiBSZXF1ZXN0SW5pdCB7XG4gIHJldHVybiB7XG4gICAgbWV0aG9kOiBvcHRzLm1ldGhvZCB8fCBcIkdFVFwiLCAvLyBHRVQgaXMgZGVmYXVsdCBtZXRob2RcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBcIlgtQ29tcG9uZW50LUlkXCI6IG9wdHMuY29tcG9uZW50X2lkIHx8IFwiXCIsIC8vIENvbXBvbmVudCBJRCBpcyBwYXNzZWQgYXMgaGVhZGVyXG4gICAgICBcIlgtQWNjZXNzLVRva2VuXCI6IG9wdHMuYWNjZXNzX3Rva2VuIHx8IFwiXCIsIC8vIEFjY2VzcyBUb2tlbiBpcyBwYXNzZWQgYXMgaGVhZGVyXG4gICAgfSxcbiAgICBib2R5OiBvcHRzLmJvZHkgPyBKU09OLnN0cmluZ2lmeShvcHRzLmJvZHkpIDogdW5kZWZpbmVkLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRXJyb3IoaWQ6IHN0cmluZywgZXJyb3I6IE1hbmlmZXN0W1wiZXJyb3JcIl0pOiBuZXZlciB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICBFcnJvclN0b3JlLnVwZGF0ZSgoZXJyb3JNYXApID0+ICh7IC4uLmVycm9yTWFwLCBbaWRdOiBlcnJvciB9KSk7XG4gIHRocm93IGVycm9yO1xufVxuXG5jb25zdCBSRUdJT05fTUFQUElORzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgXCIwMDFcIjogXCJcIiwgLy8gVVNcbiAgXCIwMDJcIjogXCJpcmVsYW5kLVwiLCAvLyBFVVxuICBcIjAwM1wiOiBcImNhbmFkYS1cIiwgLy8gQ2FuYWRhXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWlkZGxld2FyZUFwaVVybChpZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IHJlZ2lvbiA9IFwiXCI7XG4gIGlmIChpZC5zdWJzdHJpbmcoMywgNCkgPT09IFwiLVwiKSB7XG4gICAgY29uc3QgY29kZSA9IGlkLnN1YnN0cmluZygwLCAzKTtcbiAgICBpZiAodHlwZW9mIFJFR0lPTl9NQVBQSU5HW2NvZGVdICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZWdpb24gPSBSRUdJT05fTUFQUElOR1tjb2RlXTtcbiAgICB9XG4gIH1cbiAgY29uc3QgQVBJX0dBVEVXQVkgPSBgaHR0cHM6Ly8ke3JlZ2lvbn0ke3Byb2Nlc3MuZW52LkFQSV9HQVRFV0FZfWA7XG4gIHJldHVybiBBUElfR0FURVdBWTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpbGVuY2UoZXJyb3I6IEVycm9yKSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRRdWVyeVBhcmFtcyhwYXJhbXM6IFJlY29yZDxzdHJpbmcsIGFueT4pOiBzdHJpbmcge1xuICByZXR1cm4gT2JqZWN0LmtleXMocGFyYW1zKVxuICAgIC5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICBpZiAocGFyYW1zW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhY2MuYXBwZW5kKGtleSwgcGFyYW1zW2tleV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBuZXcgVVJMU2VhcmNoUGFyYW1zKCkpXG4gICAgLnRvU3RyaW5nKCk7XG59XG4iLCJpbXBvcnQge1xuICBnZXRGZXRjaENvbmZpZyxcbiAgaGFuZGxlRXJyb3IsXG4gIGhhbmRsZVJlc3BvbnNlLFxuICBnZXRNaWRkbGV3YXJlQXBpVXJsLFxufSBmcm9tIFwiLi4vbWV0aG9kcy9hcGlcIjtcbmltcG9ydCB0eXBlIHsgTWlkZGxld2FyZVJlc3BvbnNlIH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG5pbXBvcnQgdHlwZSB7XG4gIEV2ZW50UXVlcnksXG4gIEV2ZW50LFxuICBDYWxlbmRhclF1ZXJ5LFxuICBDYWxlbmRhcixcbn0gZnJvbSBcIkBjb21tb25zL3R5cGVzL0V2ZW50c1wiO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hFdmVudHMgPSBhc3luYyAocXVlcnk6IEV2ZW50UXVlcnkpOiBQcm9taXNlPEV2ZW50W10+ID0+IHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgIHF1ZXJ5LmNhbGVuZGFySURzLm1hcCgoY2FsZW5kYXIpID0+IHtcbiAgICAgIHJldHVybiBmZXRjaChcbiAgICAgICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChcbiAgICAgICAgICBxdWVyeS5jb21wb25lbnRfaWQgfHwgXCJcIixcbiAgICAgICAgKX0vYWdlbmRhL2V2ZW50cz9jYWxlbmRhcl9pZD0ke2NhbGVuZGFyfSZzdGFydHNfYWZ0ZXI9JHtxdWVyeS5zdGFydHNfYWZ0ZXIgLSAxXG4gICAgICAgIH0mZW5kc19iZWZvcmU9JHtxdWVyeS5lbmRzX2JlZm9yZX0mZXhwYW5kX3JlY3VycmluZz10cnVlYCxcbiAgICAgICAgZ2V0RmV0Y2hDb25maWcoe1xuICAgICAgICAgIGNvbXBvbmVudF9pZDogcXVlcnkuY29tcG9uZW50X2lkLFxuICAgICAgICAgIGFjY2Vzc190b2tlbjogcXVlcnkuYWNjZXNzX3Rva2VuLFxuICAgICAgICB9KSxcbiAgICAgIClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PlxuICAgICAgICAgIGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxFdmVudFtdPj4ocmVzcG9uc2UpLFxuICAgICAgICApXG4gICAgICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGpzb24ucmVzcG9uc2U7XG4gICAgICAgIH0pO1xuICAgIH0pLFxuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlcykgPT4ge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlcy5mbGF0KCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihxdWVyeS5jb21wb25lbnRfaWQgfHwgXCJ1bmtub3duXCIsIGVycm9yKSk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDYWxlbmRhcnMgPSBhc3luYyAoXG4gIHF1ZXJ5OiBDYWxlbmRhclF1ZXJ5LFxuKTogUHJvbWlzZTxDYWxlbmRhcltdPiA9PiB7XG4gIGlmIChxdWVyeS5jYWxlbmRhcklEcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGxTZXR0bGVkKFxuICAgICAgcXVlcnkuY2FsZW5kYXJJRHMubWFwKChjYWxlbmRhcjogdW5rbm93bikgPT4ge1xuICAgICAgICByZXR1cm4gZmV0Y2goXG4gICAgICAgICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChcbiAgICAgICAgICAgIHF1ZXJ5LmNvbXBvbmVudF9pZCB8fCBcIlwiLFxuICAgICAgICAgICl9L2NhbGVuZGFycy8ke2NhbGVuZGFyfWAsXG4gICAgICAgICAgZ2V0RmV0Y2hDb25maWcoe1xuICAgICAgICAgICAgY29tcG9uZW50X2lkOiBxdWVyeS5jb21wb25lbnRfaWQsXG4gICAgICAgICAgICBhY2Nlc3NfdG9rZW46IHF1ZXJ5LmFjY2Vzc190b2tlbixcbiAgICAgICAgICB9KSxcbiAgICAgICAgKVxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT5cbiAgICAgICAgICAgIGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxDYWxlbmRhcltdPj4oXG4gICAgICAgICAgICAgIHJlc3BvbnNlLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICApXG4gICAgICAgICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgICAgICAgIH0pO1xuICAgICAgfSksXG4gICAgKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlcykgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZFJlc3BvbnNlcyA9IHJlc3BvbnNlc1xuICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAocmVzcG9uc2UpOiByZXNwb25zZSBpcyBQcm9taXNlRnVsZmlsbGVkUmVzdWx0PENhbGVuZGFyW10+ID0+XG4gICAgICAgICAgICAgIHJlc3BvbnNlLnN0YXR1cyA9PT0gXCJmdWxmaWxsZWRcIixcbiAgICAgICAgICApXG4gICAgICAgICAgLm1hcCgoY2FsKSA9PiBjYWwudmFsdWUpO1xuICAgICAgICByZXR1cm4gZmlsdGVyZWRSZXNwb25zZXMuZmxhdCgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCB8fCBcInVua25vd25cIiwgZXJyb3IpKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmV0Y2goXG4gICAgICBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKHF1ZXJ5LmNvbXBvbmVudF9pZCB8fCBcIlwiKX0vY2FsZW5kYXJzYCxcbiAgICAgIGdldEZldGNoQ29uZmlnKHtcbiAgICAgICAgY29tcG9uZW50X2lkOiBxdWVyeS5jb21wb25lbnRfaWQsXG4gICAgICAgIGFjY2Vzc190b2tlbjogcXVlcnkuYWNjZXNzX3Rva2VuLFxuICAgICAgfSksXG4gICAgKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PlxuICAgICAgICBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8Q2FsZW5kYXJbXT4+KHJlc3BvbnNlKSxcbiAgICAgIClcbiAgICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFdmVudChcbiAgZXZlbnQ6IEV2ZW50LFxuICBxdWVyeTogRXZlbnRRdWVyeSxcbik6IFByb21pc2U8RXZlbnQ+IHtcbiAgcmV0dXJuIGZldGNoKFxuICAgIGAke2dldE1pZGRsZXdhcmVBcGlVcmwocXVlcnkuY29tcG9uZW50X2lkIHx8IFwiXCIpfS9hZ2VuZGEvZXZlbnRzYCxcbiAgICBnZXRGZXRjaENvbmZpZyh7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgY29tcG9uZW50X2lkOiBxdWVyeS5jb21wb25lbnRfaWQsXG4gICAgICBhY2Nlc3NfdG9rZW46IHF1ZXJ5LmFjY2Vzc190b2tlbixcbiAgICAgIGJvZHk6IGV2ZW50LFxuICAgIH0pLFxuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8RXZlbnQ+PihyZXNwb25zZSkpXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHtcbiAgZ2V0RmV0Y2hDb25maWcsXG4gIGhhbmRsZUVycm9yLFxuICBoYW5kbGVSZXNwb25zZSxcbiAgZ2V0TWlkZGxld2FyZUFwaVVybCxcbn0gZnJvbSBcIi4uL21ldGhvZHMvYXBpXCI7XG5pbXBvcnQgdHlwZSB7XG4gIE1haWxib3hRdWVyeSxcbiAgVGhyZWFkLFxuICBDb252ZXJzYXRpb25RdWVyeSxcbiAgQ29udmVyc2F0aW9uLFxuICBNaWRkbGV3YXJlUmVzcG9uc2UsXG59IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hUaHJlYWRzID0gKFxuICBxdWVyeTogTWFpbGJveFF1ZXJ5LFxuICBsaW1pdDogbnVtYmVyLFxuICBvZmZzZXQ6IG51bWJlcixcbik6IFByb21pc2U8VGhyZWFkW10+ID0+IHtcbiAgaWYgKHF1ZXJ5LnRocmVhZF9pZHMpIHtcbiAgICAvLyAmbGltaXQ9JHtsaW1pdH0mb2Zmc2V0PSR7b2Zmc2V0fVxuICAgIGNvbnN0IHBhZ2Vfb2ZfaWRzID0gcXVlcnkudGhyZWFkX2lkcy5zbGljZShvZmZzZXQsIG9mZnNldCArIGxpbWl0KTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoXG4gICAgICBwYWdlX29mX2lkcy5tYXAoYXN5bmMgKHRocmVhZF9pZCkgPT4ge1xuICAgICAgICAvLyBOeWxhcyBBUEkgZG9lcyBub3Qgc3VwcG9ydCBmZXRjaGluZyB0aHJlYWRzIGluIGJ1bGssIHNvIG11c3QgZmV0Y2ggdGhlbSBvbmVcbiAgICAgICAgLy8gYXQgYSB0aW1lIDooXG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gYCR7Z2V0TWlkZGxld2FyZUFwaVVybChcbiAgICAgICAgICBxdWVyeS5jb21wb25lbnRfaWQsXG4gICAgICAgICl9L3RocmVhZHMvJHt0aHJlYWRfaWR9P3ZpZXc9ZXhwYW5kZWRgO1xuICAgICAgICAvLyBUT0RPOiBpZGVhbGx5IHRoaXMgd291bGRuJ3QgcmVwbGljYXRlIG11Y2ggb2YgdGhlIGNvZGUgZnJvbSBiZWxvd1xuICAgICAgICByZXR1cm4gYXdhaXQgZmV0Y2gocXVlcnlTdHJpbmcsIGdldEZldGNoQ29uZmlnKHF1ZXJ5KSlcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+XG4gICAgICAgICAgICBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8VGhyZWFkPj4ocmVzcG9uc2UpLFxuICAgICAgICAgIClcbiAgICAgICAgICAudGhlbigoanNvbikgPT4ganNvbi5yZXNwb25zZSlcbiAgICAgICAgICAvLyBUT0RPOiBSZW1vdmUgdGhpcyB1Z2x5IGhhY2sgd2hlbiB3ZSBmaXggdGhlIEFQSSBmcm9tIHJldHVybmluZyBnaG9zdCBtZXNzYWdlcyAoZS5nLiB3L28gYSBmcm9tL3RvIGZpZWxkKVxuICAgICAgICAgIC50aGVuKCh0aHJlYWQpID0+ICh7XG4gICAgICAgICAgICAuLi50aHJlYWQsXG4gICAgICAgICAgICBtZXNzYWdlczogdGhyZWFkLm1lc3NhZ2VzLmZpbHRlcihcbiAgICAgICAgICAgICAgKG1lc3NhZ2UpID0+IG1lc3NhZ2UuZnJvbS5sZW5ndGggIT09IDAgfHwgbWVzc2FnZS50by5sZW5ndGggIT09IDAsXG4gICAgICAgICAgICApLFxuICAgICAgICAgIH0pKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbiAgbGV0IHF1ZXJ5U3RyaW5nID0gYCR7Z2V0TWlkZGxld2FyZUFwaVVybChcbiAgICBxdWVyeS5jb21wb25lbnRfaWQsXG4gICl9L3RocmVhZHM/dmlldz1leHBhbmRlZCZub3RfaW49dHJhc2gmbGltaXQ9JHtsaW1pdH0mb2Zmc2V0PSR7b2Zmc2V0fWA7XG4gIGlmIChxdWVyeS5xdWVyeSkge1xuICAgIE9iamVjdC5lbnRyaWVzKHF1ZXJ5LnF1ZXJ5KS5mb3JFYWNoKFxuICAgICAgKHBhcmFtKSA9PiAocXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZy5jb25jYXQoYCYke3BhcmFtWzBdfT0ke3BhcmFtWzFdfWApKSxcbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgZmV0Y2gocXVlcnlTdHJpbmcsIGdldEZldGNoQ29uZmlnKHF1ZXJ5KSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT5cbiAgICAgICAgaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPFRocmVhZFtdPj4ocmVzcG9uc2UpLFxuICAgICAgKVxuICAgICAgLnRoZW4oKGpzb24pID0+IGpzb24ucmVzcG9uc2UpXG4gICAgICAvLyBUT0RPOiBSZW1vdmUgdGhpcyB1Z2x5IGhhY2sgd2hlbiB3ZSBmaXggdGhlIEFQSSBmcm9tIHJldHVybmluZyBnaG9zdCBtZXNzYWdlcyAoZS5nLiB3L28gYSBmcm9tL3RvIGZpZWxkKVxuICAgICAgLnRoZW4oKHRocmVhZHMpID0+XG4gICAgICAgIHRocmVhZHMubWFwKCh0aHJlYWQpID0+ICh7XG4gICAgICAgICAgLi4udGhyZWFkLFxuICAgICAgICAgIG1lc3NhZ2VzOiB0aHJlYWQubWVzc2FnZXMuZmlsdGVyKFxuICAgICAgICAgICAgKG1lc3NhZ2UpID0+IG1lc3NhZ2UuZnJvbS5sZW5ndGggIT09IDAgfHwgbWVzc2FnZS50by5sZW5ndGggIT09IDAsXG4gICAgICAgICAgKSxcbiAgICAgICAgfSkpLFxuICAgICAgKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpXG4gICk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hUaHJlYWRDb3VudChxdWVyeTogTWFpbGJveFF1ZXJ5KTogUHJvbWlzZTxudW1iZXI+IHtcbiAgbGV0IHF1ZXJ5U3RyaW5nID0gYCR7Z2V0TWlkZGxld2FyZUFwaVVybChcbiAgICBxdWVyeS5jb21wb25lbnRfaWQsXG4gICl9L3RocmVhZHM/dmlldz1leHBhbmRlZCZub3RfaW49dHJhc2gmdmlldz1jb3VudGA7XG4gIGlmIChxdWVyeS5xdWVyeSkge1xuICAgIE9iamVjdC5lbnRyaWVzKHF1ZXJ5LnF1ZXJ5KS5mb3JFYWNoKFxuICAgICAgKHBhcmFtKSA9PiAocXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZy5jb25jYXQoYCYke3BhcmFtWzBdfT0ke3BhcmFtWzFdfWApKSxcbiAgICApO1xuICB9XG5cbiAgaWYgKHF1ZXJ5LmtleXdvcmRUb1NlYXJjaCkge1xuICAgIHF1ZXJ5U3RyaW5nICs9IGAmcT0ke3F1ZXJ5LmtleXdvcmRUb1NlYXJjaH1gO1xuICB9XG5cbiAgcmV0dXJuIGZldGNoKHF1ZXJ5U3RyaW5nLCBnZXRGZXRjaENvbmZpZyhxdWVyeSkpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8YW55Pj4ocmVzcG9uc2UpKVxuICAgIC50aGVuKChqc29uKSA9PiBqc29uLnJlc3BvbnNlLmNvdW50KTtcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoU2VhcmNoUmVzdWx0VGhyZWFkcyA9IChcbiAgcXVlcnk6IE1haWxib3hRdWVyeSxcbik6IFByb21pc2U8VGhyZWFkW10+ID0+IHtcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKFxuICAgIHF1ZXJ5LmNvbXBvbmVudF9pZCxcbiAgKX0vdGhyZWFkcy9zZWFyY2g/cT0ke3F1ZXJ5LmtleXdvcmRUb1NlYXJjaH0mdmlldz1leHBhbmRlZCZsaW1pdD0ke1xuICAgIHF1ZXJ5LnF1ZXJ5LmxpbWl0XG4gIH0mb2Zmc2V0PSR7cXVlcnkucXVlcnkub2Zmc2V0fWA7XG5cbiAgcmV0dXJuIGZldGNoKHF1ZXJ5U3RyaW5nLCBnZXRGZXRjaENvbmZpZyhxdWVyeSkpXG4gICAgLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PlxuICAgICAgaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPFRocmVhZFtdPj4ocmVzcG9uc2UpLFxuICAgIClcbiAgICAudGhlbigoanNvbikgPT4ganNvbi5yZXNwb25zZSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihxdWVyeS5jb21wb25lbnRfaWQsIGVycm9yKSk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hUaHJlYWQgPSBhc3luYyAoXG4gIHF1ZXJ5OiBDb252ZXJzYXRpb25RdWVyeSxcbik6IFByb21pc2U8Q29udmVyc2F0aW9uPiA9PiB7XG4gIGNvbnN0IHRocmVhZCA9IGF3YWl0IGZldGNoKFxuICAgIGAke2dldE1pZGRsZXdhcmVBcGlVcmwocXVlcnkuY29tcG9uZW50X2lkKX0vdGhyZWFkcy8ke1xuICAgICAgcXVlcnkudGhyZWFkX2lkXG4gICAgfT92aWV3PWV4cGFuZGVkYCxcbiAgICBnZXRGZXRjaENvbmZpZyh7XG4gICAgICBjb21wb25lbnRfaWQ6IHF1ZXJ5LmNvbXBvbmVudF9pZCxcbiAgICAgIGFjY2Vzc190b2tlbjogcXVlcnkuYWNjZXNzX3Rva2VuLFxuICAgIH0pLFxuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PlxuICAgICAgaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPENvbnZlcnNhdGlvbj4+KHJlc3BvbnNlKSxcbiAgICApXG4gICAgLnRoZW4oKGpzb24pID0+IGpzb24ucmVzcG9uc2UpXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xuXG4gIHJldHVybiB0aHJlYWQ7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlVGhyZWFkID0gKFxuICBxdWVyeTogQ29udmVyc2F0aW9uUXVlcnksXG4gIHVwZGF0ZWRUaHJlYWQ6IENvbnZlcnNhdGlvbixcbik6IFByb21pc2U8Q29udmVyc2F0aW9uPiA9PiB7XG4gIC8vIGFjY2VwdHMgdW5yZWFkLCBzdGFycmVkLCBmb2xkZXJfaWQgKyBsYWJlbF9pZHMuIGRldmVsb3Blci5ueWxhcy5jb20vZG9jcy9hcGkvI3B1dC90aHJlYWRzL2lkXG4gIHJldHVybiBmZXRjaChcbiAgICBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKHF1ZXJ5LmNvbXBvbmVudF9pZCl9L3RocmVhZHMvJHt1cGRhdGVkVGhyZWFkLmlkfWAsXG4gICAgZ2V0RmV0Y2hDb25maWcoe1xuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgY29tcG9uZW50X2lkOiBxdWVyeS5jb21wb25lbnRfaWQsXG4gICAgICBhY2Nlc3NfdG9rZW46IHF1ZXJ5LmFjY2Vzc190b2tlbixcbiAgICAgIGJvZHk6IHtcbiAgICAgICAgdW5yZWFkOiB1cGRhdGVkVGhyZWFkLnVucmVhZCxcbiAgICAgICAgc3RhcnJlZDogdXBkYXRlZFRocmVhZC5zdGFycmVkLFxuICAgICAgICBmb2xkZXJfaWQ6IHVwZGF0ZWRUaHJlYWQuZm9sZGVyX2lkLFxuICAgICAgICBsYWJlbF9pZHM6IHVwZGF0ZWRUaHJlYWQubGFiZWxfaWRzLFxuICAgICAgfSxcbiAgICB9KSxcbiAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT5cbiAgICAgIGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxDb252ZXJzYXRpb24+PihyZXNwb25zZSksXG4gICAgKVxuICAgIC50aGVuKChqc29uKSA9PiBqc29uLnJlc3BvbnNlKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn07XG4iLCJpbXBvcnQge1xuICBnZXRGZXRjaENvbmZpZyxcbiAgaGFuZGxlRXJyb3IsXG4gIGhhbmRsZVJlc3BvbnNlLFxuICBnZXRNaWRkbGV3YXJlQXBpVXJsLFxufSBmcm9tIFwiLi4vbWV0aG9kcy9hcGlcIjtcbmltcG9ydCB0eXBlIHsgTWFuaWZlc3QsIE1pZGRsZXdhcmVSZXNwb25zZSB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hNYW5pZmVzdCA9IGFzeW5jIChcbiAgaWQ6IHN0cmluZyxcbiAgYWNjZXNzX3Rva2VuPzogc3RyaW5nLFxuKTogUHJvbWlzZTxNYW5pZmVzdD4gPT4ge1xuICByZXR1cm4gYXdhaXQgZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChpZCl9L21hbmlmZXN0YCxcbiAgICBnZXRGZXRjaENvbmZpZyh7XG4gICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICBjb21wb25lbnRfaWQ6IGlkLFxuICAgIH0pLFxuICApXG4gICAgLnRoZW48TWlkZGxld2FyZVJlc3BvbnNlPihoYW5kbGVSZXNwb25zZSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmNvbXBvbmVudC50aGVtaW5nKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKGlkLCBlcnJvcikpO1xufTtcblxuLy8gQWxsb3dzIDxueWxhcy1zY2hlZHVsZS1lZGl0b3I+IHRvIG1vZGlmeSBpdHMgb3duIHByb3BlcnRpZXNcblxuZXhwb3J0IGNvbnN0IHNhdmVNYW5pZmVzdCA9IGFzeW5jIChcbiAgaWQ6IHN0cmluZyxcbiAgbWFuaWZlc3Q6IE1hbmlmZXN0LFxuICBhY2Nlc3NfdG9rZW4/OiBzdHJpbmcsXG4pOiBQcm9taXNlPE1hbmlmZXN0PiA9PiB7XG4gIHJldHVybiBmZXRjaChcbiAgICBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKGlkKX0vY29tcG9uZW50YCxcbiAgICBnZXRGZXRjaENvbmZpZyh7XG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICBjb21wb25lbnRfaWQ6IGlkLFxuICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgYm9keTogeyBzZXR0aW5nczogbWFuaWZlc3QgfSxcbiAgICB9KSxcbiAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPE1hbmlmZXN0Pj4ocmVzcG9uc2UpKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KTtcbn07XG4iLCJpbXBvcnQgeyBNZXNzYWdlU3RvcmUgfSBmcm9tIFwiLi4vc3RvcmUvbWVzc2FnZXNcIjtcbmltcG9ydCB7XG4gIGdldEZldGNoQ29uZmlnLFxuICBoYW5kbGVFcnJvcixcbiAgaGFuZGxlUmVzcG9uc2UsXG4gIGdldE1pZGRsZXdhcmVBcGlVcmwsXG59IGZyb20gXCIuLi9tZXRob2RzL2FwaVwiO1xuaW1wb3J0IHR5cGUge1xuICBTaW5ndWxhckVtYWlsLFxuICBDb21tb25RdWVyeSxcbiAgTWVzc2FnZXNRdWVyeSxcbiAgRmlsZSBhcyBOeWxhc0ZpbGUsXG4gIE1lc3NhZ2UgYXMgTnlsYXNNZXNzYWdlLFxuICBNaWRkbGV3YXJlUmVzcG9uc2UsXG59IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuaW1wb3J0IHR5cGUgeyBNZXNzYWdlIH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL0NvbXBvc2VyXCI7XG5cbmV4cG9ydCBjb25zdCBzZW5kTWVzc2FnZSA9IGFzeW5jIChcbiAgY29tcG9uZW50X2lkOiBzdHJpbmcsXG4gIG1zZzogTWVzc2FnZSxcbiAgYWNjZXNzX3Rva2VuPzogc3RyaW5nLFxuKTogUHJvbWlzZTxOeWxhc01lc3NhZ2U+ID0+IHtcbiAgcmV0dXJuIGF3YWl0IGZldGNoKFxuICAgIGAke2dldE1pZGRsZXdhcmVBcGlVcmwoY29tcG9uZW50X2lkKX0vc2VuZGAsXG4gICAgZ2V0RmV0Y2hDb25maWcoeyBtZXRob2Q6IFwiUE9TVFwiLCBjb21wb25lbnRfaWQsIGFjY2Vzc190b2tlbiwgYm9keTogbXNnIH0pLFxuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PlxuICAgICAgaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPE55bGFzTWVzc2FnZT4+KHJlc3BvbnNlKSxcbiAgICApXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IoY29tcG9uZW50X2lkLCBlcnJvcikpO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lc3NhZ2UoXG4gIGNvbXBvbmVudF9pZDogc3RyaW5nLFxuICBtZXNzYWdlOiBOeWxhc01lc3NhZ2UsXG4gIGFjY2Vzc190b2tlbj86IHN0cmluZyxcbik6IFByb21pc2U8TnlsYXNNZXNzYWdlPiB7XG4gIGNvbnN0IHVybCA9IGAke2dldE1pZGRsZXdhcmVBcGlVcmwoY29tcG9uZW50X2lkKX0vbWVzc2FnZXMvJHttZXNzYWdlLmlkfWA7XG4gIGNvbnN0IGZldGNoQ29uZmlnID0gZ2V0RmV0Y2hDb25maWcoe1xuICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICBjb21wb25lbnRfaWQsXG4gICAgYWNjZXNzX3Rva2VuLFxuICAgIGJvZHk6IHsgZm9sZGVyX2lkOiBtZXNzYWdlLmZvbGRlcl9pZCwgbGFiZWxfaWRzOiBtZXNzYWdlLmxhYmVsX2lkcyB9LFxuICB9KTtcbiAgcmV0dXJuIGF3YWl0IGZldGNoKHVybCwgZmV0Y2hDb25maWcpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PlxuICAgICAgaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPE55bGFzTWVzc2FnZT4+KHJlc3BvbnNlKSxcbiAgICApXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IoY29tcG9uZW50X2lkLCBlcnJvcikpO1xufVxuXG5leHBvcnQgY29uc3QgdXBsb2FkRmlsZSA9IGFzeW5jIChcbiAgY29tcG9uZW50X2lkOiBzdHJpbmcsXG4gIGZpbGU6IEZpbGUsXG4gIGFjY2Vzc190b2tlbj86IHN0cmluZyxcbik6IFByb21pc2U8TnlsYXNGaWxlPiA9PiB7XG4gIGNvbnN0IGZldGNoQ29uZmlnOiBSZXF1ZXN0SW5pdCA9IGdldEZldGNoQ29uZmlnKHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGNvbXBvbmVudF9pZCxcbiAgICBhY2Nlc3NfdG9rZW4sXG4gIH0pO1xuICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XG4gIGZvcm0uYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcbiAgaWYgKFxuICAgIHR5cGVvZiBmZXRjaENvbmZpZy5oZWFkZXJzICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgXCJDb250ZW50LVR5cGVcIiBpbiBmZXRjaENvbmZpZy5oZWFkZXJzXG4gICkge1xuICAgIGRlbGV0ZSBmZXRjaENvbmZpZy5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdO1xuICB9XG4gIGZldGNoQ29uZmlnLmJvZHkgPSBmb3JtO1xuICByZXR1cm4gYXdhaXQgZmV0Y2goYCR7Z2V0TWlkZGxld2FyZUFwaVVybChjb21wb25lbnRfaWQpfS9maWxlc2AsIGZldGNoQ29uZmlnKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPE55bGFzRmlsZT4+KHJlc3BvbnNlKSlcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoanNvbi5yZXNwb25zZSkgPyBqc29uLnJlc3BvbnNlWzBdIDoganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaChoYW5kbGVFcnJvci5iaW5kKDAsIGNvbXBvbmVudF9pZCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoTWVzc2FnZXMgPSBhc3luYyAoXG4gIHF1ZXJ5OiBNZXNzYWdlc1F1ZXJ5LFxuICBvZmZzZXQ6IG51bWJlcixcbiAgbGltaXQ6IG51bWJlcixcbik6IFByb21pc2U8TnlsYXNNZXNzYWdlW10+ID0+IHtcbiAgbGV0IHF1ZXJ5U3RyaW5nID0gYCR7Z2V0TWlkZGxld2FyZUFwaVVybChcbiAgICBxdWVyeS5jb21wb25lbnRfaWQsXG4gICl9L21lc3NhZ2VzP29mZnNldD0ke29mZnNldH0mbGltaXQ9JHtsaW1pdH1gO1xuICBpZiAocXVlcnkucmVjZWl2ZWRfYmVmb3JlKSB7XG4gICAgcXVlcnlTdHJpbmcgPSBgJHtxdWVyeVN0cmluZ30mcmVjZWl2ZWRfYmVmb3JlPSR7cXVlcnkucmVjZWl2ZWRfYmVmb3JlfWA7XG4gIH1cbiAgaWYgKHF1ZXJ5LnJlY2VpdmVkX2FmdGVyKSB7XG4gICAgcXVlcnlTdHJpbmcgPSBgJHtxdWVyeVN0cmluZ30mcmVjZWl2ZWRfYWZ0ZXI9JHtxdWVyeS5yZWNlaXZlZF9hZnRlcn1gO1xuICB9XG4gIHJldHVybiBhd2FpdCBmZXRjaChxdWVyeVN0cmluZywgZ2V0RmV0Y2hDb25maWcocXVlcnkpKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT5cbiAgICAgIGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxOeWxhc01lc3NhZ2VbXT4+KHJlc3BvbnNlKSxcbiAgICApXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIE1lc3NhZ2VTdG9yZS5hZGRNZXNzYWdlcyh7XG4gICAgICAgIHF1ZXJ5S2V5OiBKU09OLnN0cmluZ2lmeShxdWVyeSksXG4gICAgICAgIGRhdGE6IGpzb24ucmVzcG9uc2UsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoTWVzc2FnZSA9IGFzeW5jIChcbiAgcXVlcnk6IENvbW1vblF1ZXJ5LFxuICBtZXNzYWdlSUQ6IHN0cmluZyxcbik6IFByb21pc2U8TnlsYXNNZXNzYWdlPiA9PiB7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gYCR7Z2V0TWlkZGxld2FyZUFwaVVybChcbiAgICBxdWVyeS5jb21wb25lbnRfaWQsXG4gICl9L21lc3NhZ2VzLyR7bWVzc2FnZUlEfWA7XG4gIHJldHVybiBhd2FpdCBmZXRjaChxdWVyeVN0cmluZywgZ2V0RmV0Y2hDb25maWcocXVlcnkpKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT5cbiAgICAgIGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxOeWxhc01lc3NhZ2U+PihyZXNwb25zZSksXG4gICAgKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn07XG5cbi8vIEZvciBjYXNlcyB3aGVuIHNvbWVvbmUgd2FudHMgdG8gc2hvdyBqdXN0IGEgc2luZ2xlIGVtYWlsIG1lc3NhZ2UsIHJhdGhlciB0aGFuIHRoZSBmdWxsIHRocmVhZCBhbmQgdy9vIHBhc3NpbmcgYSB0aHJlYWQgaWRcbmV4cG9ydCBjb25zdCBmZXRjaEVtYWlsID0gYXN5bmMgKFxuICBxdWVyeTogU2luZ3VsYXJFbWFpbCxcbik6IFByb21pc2U8TnlsYXNNZXNzYWdlPiA9PiB7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gYCR7Z2V0TWlkZGxld2FyZUFwaVVybChxdWVyeS5jb21wb25lbnRfaWQpfS9tZXNzYWdlcy8ke1xuICAgIHF1ZXJ5Lm1lc3NhZ2VfaWRcbiAgfWA7XG4gIHJldHVybiBhd2FpdCBmZXRjaChxdWVyeVN0cmluZywgZ2V0RmV0Y2hDb25maWcocXVlcnkpKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT5cbiAgICAgIGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxOeWxhc01lc3NhZ2U+PihyZXNwb25zZSksXG4gICAgKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzYXZlRHJhZnQgPSBhc3luYyAoXG4gIGNvbXBvbmVudF9pZDogc3RyaW5nLFxuICBtc2c6IE1lc3NhZ2UsXG4gIGFjY2Vzc190b2tlbj86IHN0cmluZyxcbik6IFByb21pc2U8TnlsYXNNZXNzYWdlPiA9PiB7XG4gIHJldHVybiBhd2FpdCBmZXRjaChcbiAgICBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKGNvbXBvbmVudF9pZCl9L2RyYWZ0c2AsXG4gICAgZ2V0RmV0Y2hDb25maWcoeyBtZXRob2Q6IFwiUE9TVFwiLCBjb21wb25lbnRfaWQsIGFjY2Vzc190b2tlbiwgYm9keTogbXNnIH0pLFxuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PlxuICAgICAgaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPE55bGFzTWVzc2FnZT4+KHJlc3BvbnNlKSxcbiAgICApXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IoY29tcG9uZW50X2lkLCBlcnJvcikpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZURyYWZ0ID0gYXN5bmMgKFxuICBjb21wb25lbnRfaWQ6IHN0cmluZyxcbiAgbXNnOiBNZXNzYWdlLFxuICBhY2Nlc3NfdG9rZW4/OiBzdHJpbmcsXG4pOiBQcm9taXNlPE55bGFzTWVzc2FnZT4gPT4ge1xuICByZXR1cm4gYXdhaXQgZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChjb21wb25lbnRfaWQpfS9kcmFmdHMvJHttc2cuaWR9YCxcbiAgICBnZXRGZXRjaENvbmZpZyh7IG1ldGhvZDogXCJQVVRcIiwgY29tcG9uZW50X2lkLCBhY2Nlc3NfdG9rZW4sIGJvZHk6IG1zZyB9KSxcbiAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT5cbiAgICAgIGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxOeWxhc01lc3NhZ2U+PihyZXNwb25zZSksXG4gICAgKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKGNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn07XG4iLCJpbXBvcnQge1xuICBnZXRGZXRjaENvbmZpZyxcbiAgaGFuZGxlRXJyb3IsXG4gIGhhbmRsZVJlc3BvbnNlLFxuICBnZXRNaWRkbGV3YXJlQXBpVXJsLFxufSBmcm9tIFwiLi4vbWV0aG9kcy9hcGlcIjtcbmltcG9ydCB0eXBlIHtcbiAgQ29uc2VjdXRpdmVBdmFpbGFiaWxpdHlRdWVyeSxcbiAgQXZhaWxhYmlsaXR5UXVlcnksXG4gIEF2YWlsYWJpbGl0eVJlc3BvbnNlLFxuICBGcmVlQnVzeVJlc3BvbnNlLFxuICBQcmVEYXRlZFRpbWVTbG90LFxufSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvQXZhaWxhYmlsaXR5XCI7XG5pbXBvcnQgdHlwZSB7IE1pZGRsZXdhcmVSZXNwb25zZSB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuaW1wb3J0IHR5cGUgeyBFdmVudERlZmluaXRpb24gfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvU2NoZWR1bGVFZGl0b3JcIjtcbmltcG9ydCB0eXBlIHsgQ29uc2VjdXRpdmVFdmVudCB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9Cb29raW5nXCI7XG5cbi8vIFRPRE86IGRlcHJlY2F0ZSBpZiB3ZSBmaW5kIC9jYWxlbmRhcnMvYXZhaWxhYmlsaXR5IHRvIGJlIGZ1bGx5IHN1ZmZpY2llbnRcbmV4cG9ydCBjb25zdCBmZXRjaEZyZWVCdXN5ID0gYXN5bmMgKFxuICBxdWVyeTogQXZhaWxhYmlsaXR5UXVlcnksXG4pOiBQcm9taXNlPEZyZWVCdXN5UmVzcG9uc2VbXT4gPT4ge1xuICByZXR1cm4gZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChxdWVyeS5jb21wb25lbnRfaWQpfS9jYWxlbmRhcnMvZnJlZS1idXN5YCxcbiAgICBnZXRGZXRjaENvbmZpZyh7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgY29tcG9uZW50X2lkOiBxdWVyeS5jb21wb25lbnRfaWQsXG4gICAgICBhY2Nlc3NfdG9rZW46IHF1ZXJ5LmFjY2Vzc190b2tlbixcbiAgICAgIGJvZHk6IHF1ZXJ5LmJvZHksXG4gICAgfSksXG4gIClcbiAgICAudGhlbihhc3luYyAoYXBpUmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8RnJlZUJ1c3lSZXNwb25zZVtdPj4oXG4gICAgICAgIGFwaVJlc3BvbnNlLFxuICAgICAgKTtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQXZhaWxhYmlsaXR5ID0gYXN5bmMgKFxuICBxdWVyeTogQXZhaWxhYmlsaXR5UXVlcnksXG4pOiBQcm9taXNlPEF2YWlsYWJpbGl0eVJlc3BvbnNlPiA9PiB7XG4gIHJldHVybiBmZXRjaChcbiAgICBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKHF1ZXJ5LmNvbXBvbmVudF9pZCl9L2NhbGVuZGFycy9hdmFpbGFiaWxpdHlgLFxuICAgIGdldEZldGNoQ29uZmlnKHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBjb21wb25lbnRfaWQ6IHF1ZXJ5LmNvbXBvbmVudF9pZCxcbiAgICAgIGFjY2Vzc190b2tlbjogcXVlcnkuYWNjZXNzX3Rva2VuLFxuICAgICAgYm9keTogcXVlcnkuYm9keSxcbiAgICB9KSxcbiAgKVxuICAgIC50aGVuKGFzeW5jIChhcGlSZXNwb25zZSkgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGF3YWl0IGhhbmRsZVJlc3BvbnNlPFxuICAgICAgICBNaWRkbGV3YXJlUmVzcG9uc2U8QXZhaWxhYmlsaXR5UmVzcG9uc2U+XG4gICAgICA+KGFwaVJlc3BvbnNlKTtcbiAgICAgIC8vIE5vcm1hbGl6ZSByZXNwb25zZSAuc3RhcnQgYW5kIC5lbmQgdG8gLnN0YXJ0X3RpbWUgYW5kIC5lbmRfdGltZSB0byBtYWtlIHVwIGZvciBkaXNjcmVwZW5kY3kgaW4gdGhlIE55bGFzIEFQSTogaHR0cHM6Ly9kZXZlbG9wZXIubnlsYXMuY29tL2RvY3MvY29ubmVjdGl2aXR5L2NhbGVuZGFyL2NhbGVuZGFyLWF2YWlsYWJpbGl0eS8jYXZhaWxhYmlsaXR5LXJlc3BvbnNlXG4gICAgICAvLyBBUEkgc3Rvcnk6IGh0dHBzOi8vYXBwLnNob3J0Y3V0LmNvbS9ueWxhcy9zdG9yeS83MzE5Ni9cbiAgICAgIGpzb24ucmVzcG9uc2UudGltZV9zbG90cyA9IGpzb24ucmVzcG9uc2UudGltZV9zbG90cy5tYXAoKHNsb3QpID0+IHtcbiAgICAgICAgc2xvdC5zdGFydF90aW1lID0gc2xvdC5zdGFydCB8fCAwO1xuICAgICAgICBzbG90LmVuZF90aW1lID0gc2xvdC5lbmQgfHwgMDtcbiAgICAgICAgZGVsZXRlIHNsb3Quc3RhcnQ7XG4gICAgICAgIGRlbGV0ZSBzbG90LmVuZDtcbiAgICAgICAgcmV0dXJuIHNsb3Q7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ29uc2VjdXRpdmVBdmFpbGFiaWxpdHkgPSBhc3luYyAoXG4gIHF1ZXJ5OiBDb25zZWN1dGl2ZUF2YWlsYWJpbGl0eVF1ZXJ5LFxuKTogUHJvbWlzZTxDb25zZWN1dGl2ZUV2ZW50W11bXT4gPT4ge1xuICByZXR1cm4gZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChcbiAgICAgIHF1ZXJ5LmNvbXBvbmVudF9pZCxcbiAgICApfS9jYWxlbmRhcnMvYXZhaWxhYmlsaXR5L2NvbnNlY3V0aXZlYCxcbiAgICBnZXRGZXRjaENvbmZpZyh7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgY29tcG9uZW50X2lkOiBxdWVyeS5jb21wb25lbnRfaWQsXG4gICAgICBhY2Nlc3NfdG9rZW46IHF1ZXJ5LmFjY2Vzc190b2tlbixcbiAgICAgIGJvZHk6IHF1ZXJ5LmJvZHksXG4gICAgfSksXG4gIClcbiAgICAudGhlbihhc3luYyAoYXBpUmVzcG9uc2UpOiBQcm9taXNlPENvbnNlY3V0aXZlRXZlbnRbXVtdPiA9PiB7XG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgaGFuZGxlUmVzcG9uc2U8XG4gICAgICAgIE1pZGRsZXdhcmVSZXNwb25zZTxQcmVEYXRlZFRpbWVTbG90W11bXT5cbiAgICAgID4oYXBpUmVzcG9uc2UpO1xuICAgICAgY29uc3QgcmVzcG9uc2U6IFByZURhdGVkVGltZVNsb3RbXVtdID1cbiAgICAgICAganNvbi5yZXNwb25zZT8ubWFwKChibG9ja1Nsb3QpID0+IHtcbiAgICAgICAgICBibG9ja1Nsb3QgPSBibG9ja1Nsb3QubWFwKChzbG90OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHNsb3Quc3RhcnRfdGltZSA9IG5ldyBEYXRlKHNsb3Quc3RhcnRfdGltZSAqIDEwMDApO1xuICAgICAgICAgICAgc2xvdC5lbmRfdGltZSA9IG5ldyBEYXRlKHNsb3QuZW5kX3RpbWUgKiAxMDAwKTtcbiAgICAgICAgICAgIHJldHVybiBzbG90O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBibG9ja1Nsb3Q7XG4gICAgICAgIH0pIHx8IFtdO1xuICAgICAgY29uc3QgaHlkcmF0ZWRSZXNwb25zZSA9IGh5ZHJhdGVTbG90c1RvRXZlbnRzKFxuICAgICAgICByZXNwb25zZSxcbiAgICAgICAgcXVlcnkuYm9keS5ldmVudHMsXG4gICAgICApO1xuICAgICAgY29uc3QgZGVkdXBlZFJlc3BvbnNlID1cbiAgICAgICAgcmVtb3ZlU2ltdWx0YW5lb3VzQXZhaWxhYmlsaXR5T3B0aW9ucyhoeWRyYXRlZFJlc3BvbnNlKTtcbiAgICAgIHJldHVybiBkZWR1cGVkUmVzcG9uc2U7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihxdWVyeS5jb21wb25lbnRfaWQsIGVycm9yKSk7XG59O1xuXG4vLyBEb2luZyB0aGUgYmVzdCB3ZSBjYW4gd2l0aCB3aGF0IHdlJ3ZlIGdvdDogL2NhbGVuZGFycy9hdmFpbGFiaWxpdHkvY29uc2VjdXRpdmUgZG9lc24ndCByZXR1cm4gYW55IGluZm8gb3RoZXIgdGhhbiBlbWFpbHNcbi8vIGFuZCBzdGFydC9lbmQgdGltZXMuIFRoaXMgbWVhbnMgdGhhdCBpZiB3ZSBoYXZlIHRvIGV2ZW50cyAoRXZlbnREZWZpbml0aW9ucykgd2l0aCB0aGUgc2FtZSBlbWFpbCBhZGRyZXNzZXM/IFdlJ3JlIHNob290aW5nIGluIHRoZSBkYXJrIGFib3V0IHdoaWNoIGlzIHdoaWNoLlxuLy8gVE9ETzogYWxsb3cgZm9yIGFuIGluZGljYXRvciBvbiB0aGUgQVBJIHNpZGVcbmZ1bmN0aW9uIGh5ZHJhdGVTbG90c1RvRXZlbnRzKFxuICBhdmFpbGFiaWxpdGllczogUHJlRGF0ZWRUaW1lU2xvdFtdW10sXG4gIGV2ZW50czogRXZlbnREZWZpbml0aW9uW10sXG4pOiBDb25zZWN1dGl2ZUV2ZW50W11bXSB7XG4gIHJldHVybiBhdmFpbGFiaWxpdGllcy5tYXAoKGJsb2NrKSA9PiB7XG4gICAgcmV0dXJuIGJsb2NrLm1hcCgoc3ViZXZlbnQpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN1YmV2ZW50LFxuICAgICAgICAuLi5ldmVudHMuZmluZChcbiAgICAgICAgICAoZXZlbnRkZWYpID0+XG4gICAgICAgICAgICBldmVudGRlZi5wYXJ0aWNpcGFudEVtYWlscy5sZW5ndGggPT09IHN1YmV2ZW50LmVtYWlscy5sZW5ndGggJiZcbiAgICAgICAgICAgIGV2ZW50ZGVmLnBhcnRpY2lwYW50RW1haWxzLmV2ZXJ5KChlbWFpbCkgPT5cbiAgICAgICAgICAgICAgc3ViZXZlbnQuZW1haWxzLmluY2x1ZGVzKGVtYWlsKSxcbiAgICAgICAgICAgICksXG4gICAgICAgICksXG4gICAgICB9O1xuICAgIH0pO1xuICB9KSBhcyBhbnlbXVtdOyAvLyBUT0RPOiBIb3cgdG8gYmVzdCBjb2VyY2UgUHJlRGF0ZWRUaW1lU2xvdFtdW10gdG8gQ29uc2VjdXRpdmVFdmVudFtdW10/IHNwcmVhZC1jb21iaW5lZCByZXR1cm4gaGFuZGxlcyBpdC5cbn1cblxuLy8gV2UgZG9uJ3Qgd2FudCB0byBvdmVyYnVyZGVuIG91ciB1c2VycyB3aXRoIHRvbyBtdWNoIHN3ZWV0IGhvcnJpYmxlIGZyZWVkb20gb2YgY2hvaWNlO1xuLy8gdGhlIC9jYWxlbmRhcnMvYXZhaWxhYmlsaXR5L2NvbnNlY3V0aXZlIGVuZHBvaW50IHJldHVybnMgb3JkZXIgcGVybXV0YXRpb25zIHdpdGggc2FtZSB0aW1lIHNsb3RzO1xuLy8gQ3VsbCB0aGVtIGRvd24gdG8ganVzdCB0aGUgZmlyc3QgdGhhdCBleGlzdHMgcGVyIHRpbWVzbG90LlxuZnVuY3Rpb24gcmVtb3ZlU2ltdWx0YW5lb3VzQXZhaWxhYmlsaXR5T3B0aW9ucyhcbiAgYXZhaWxhYmlsaXRpZXM6IENvbnNlY3V0aXZlRXZlbnRbXVtdLFxuKSB7XG4gIGNvbnN0IGJsb2NrU2V0ID0gbmV3IFNldCgpO1xuICByZXR1cm4gYXZhaWxhYmlsaXRpZXMuZmlsdGVyKChibG9jaykgPT4ge1xuICAgIGNvbnN0IGJsb2NrU3RyaW5nID0gYCR7YmxvY2tbMF0uc3RhcnRfdGltZX1fJHtcbiAgICAgIGJsb2NrW2Jsb2NrLmxlbmd0aCAtIDFdLmVuZF90aW1lXG4gICAgfWA7XG4gICAgaWYgKGJsb2NrU2V0LmhhcyhibG9ja1N0cmluZykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmxvY2tTZXQuYWRkKGJsb2NrU3RyaW5nKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBXcml0YWJsZSwgd3JpdGFibGUgfSBmcm9tIFwic3ZlbHRlL3N0b3JlXCI7XG5pbXBvcnQgeyBmZXRjaEF2YWlsYWJpbGl0eSB9IGZyb20gXCIuLi9jb25uZWN0aW9ucy9hdmFpbGFiaWxpdHlcIjtcbmltcG9ydCB0eXBlIHtcbiAgQXZhaWxhYmlsaXR5UXVlcnksXG4gIEF2YWlsYWJpbGl0eVJlc3BvbnNlLFxufSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvQXZhaWxhYmlsaXR5XCI7XG5cbnR5cGUgQXZhaWxhYmlsaXR5U3RvcmUgPSBSZWNvcmQ8c3RyaW5nLCBQcm9taXNlPEF2YWlsYWJpbGl0eVJlc3BvbnNlPj47XG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoKTogV3JpdGFibGU8QXZhaWxhYmlsaXR5U3RvcmU+IHtcbiAgY29uc3QgZ2V0ID0gKFxuICAgIHRhcmdldDogQXZhaWxhYmlsaXR5U3RvcmUsXG4gICAga2V5OiBzdHJpbmcsXG4gICk6IFByb21pc2U8QXZhaWxhYmlsaXR5UmVzcG9uc2U+IHwgdm9pZCA9PiB7XG4gICAgY29uc3QgYWNjZXNzb3I6IEF2YWlsYWJpbGl0eVF1ZXJ5ID0gSlNPTi5wYXJzZShrZXkpO1xuICAgIC8vIEF2b2lkIHNhdmluZyBmb3JjZVJlbG9hZCBwcm9wZXJ0eSBhcyBwYXJ0IG9mIHN0b3JlIGtleVxuICAgIGNvbnN0IGFjY2Vzc29yQ29weSA9IHsgLi4uYWNjZXNzb3IgfTtcbiAgICBkZWxldGUgYWNjZXNzb3JDb3B5LmZvcmNlUmVsb2FkO1xuICAgIGtleSA9IEpTT04uc3RyaW5naWZ5KGFjY2Vzc29yQ29weSk7XG5cbiAgICBpZiAoXG4gICAgICAhYWNjZXNzb3IuY29tcG9uZW50X2lkIHx8XG4gICAgICAhYWNjZXNzb3I/LmJvZHk/LnN0YXJ0X3RpbWUgfHxcbiAgICAgICFhY2Nlc3Nvcj8uYm9keT8uZW5kX3RpbWVcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRhcmdldFtrZXldIHx8IGFjY2Vzc29yLmZvcmNlUmVsb2FkKSB7XG4gICAgICBjb25zdCBmZXRjaFByb21pc2UgPSBmZXRjaEF2YWlsYWJpbGl0eShhY2Nlc3Nvcik7XG4gICAgICBzdG9yZS51cGRhdGUoKHN0b3JlKSA9PiB7XG4gICAgICAgIHN0b3JlW2tleV0gPSBmZXRjaFByb21pc2U7XG4gICAgICAgIHJldHVybiBzdG9yZTtcbiAgICAgIH0pO1xuICAgICAgdGFyZ2V0W2tleV0gPSBmZXRjaFByb21pc2U7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgfTtcbiAgY29uc3Qgc3RvcmUgPSB3cml0YWJsZShuZXcgUHJveHk8QXZhaWxhYmlsaXR5U3RvcmU+KHt9LCB7IGdldCB9KSk7XG4gIHJldHVybiBzdG9yZTtcbn1cblxuZXhwb3J0IGNvbnN0IEF2YWlsYWJpbGl0eVN0b3JlID0gaW5pdGlhbGl6ZSgpO1xuIiwiaW1wb3J0IHsgV3JpdGFibGUsIHdyaXRhYmxlIH0gZnJvbSBcInN2ZWx0ZS9zdG9yZVwiO1xuaW1wb3J0IHsgZmV0Y2hDb25zZWN1dGl2ZUF2YWlsYWJpbGl0eSB9IGZyb20gXCIuLi9jb25uZWN0aW9ucy9hdmFpbGFiaWxpdHlcIjtcbmltcG9ydCB0eXBlIHsgQ29uc2VjdXRpdmVBdmFpbGFiaWxpdHlRdWVyeSB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9BdmFpbGFiaWxpdHlcIjtcbmltcG9ydCB0eXBlIHsgQ29uc2VjdXRpdmVFdmVudCB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9Cb29raW5nXCI7XG5cbnR5cGUgQ29uc2VjdXRpdmVBdmFpbGFiaWxpdHlTdG9yZSA9IFJlY29yZDxcbiAgc3RyaW5nLFxuICBQcm9taXNlPENvbnNlY3V0aXZlRXZlbnRbXVtdPlxuPjtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpOiBXcml0YWJsZTxDb25zZWN1dGl2ZUF2YWlsYWJpbGl0eVN0b3JlPiB7XG4gIGNvbnN0IGdldCA9IChcbiAgICB0YXJnZXQ6IENvbnNlY3V0aXZlQXZhaWxhYmlsaXR5U3RvcmUsXG4gICAga2V5OiBzdHJpbmcsXG4gICk6IFByb21pc2U8Q29uc2VjdXRpdmVFdmVudFtdW10+IHwgdm9pZCA9PiB7XG4gICAgY29uc3QgYWNjZXNzb3I6IENvbnNlY3V0aXZlQXZhaWxhYmlsaXR5UXVlcnkgPSBKU09OLnBhcnNlKGtleSk7XG5cbiAgICBpZiAoXG4gICAgICAhYWNjZXNzb3IuY29tcG9uZW50X2lkIHx8XG4gICAgICAhYWNjZXNzb3I/LmJvZHk/LnN0YXJ0X3RpbWUgfHxcbiAgICAgICFhY2Nlc3Nvcj8uYm9keT8uZW5kX3RpbWVcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICBjb25zdCBmZXRjaFByb21pc2UgPSBmZXRjaENvbnNlY3V0aXZlQXZhaWxhYmlsaXR5KGFjY2Vzc29yKTtcbiAgICAgIHN0b3JlLnVwZGF0ZSgoc3RvcmUpID0+IHtcbiAgICAgICAgc3RvcmVba2V5XSA9IGZldGNoUHJvbWlzZTtcbiAgICAgICAgcmV0dXJuIHN0b3JlO1xuICAgICAgfSk7XG4gICAgICB0YXJnZXRba2V5XSA9IGZldGNoUHJvbWlzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICB9O1xuICBjb25zdCBzdG9yZSA9IHdyaXRhYmxlKG5ldyBQcm94eTxDb25zZWN1dGl2ZUF2YWlsYWJpbGl0eVN0b3JlPih7fSwgeyBnZXQgfSkpO1xuICByZXR1cm4gc3RvcmU7XG59XG5cbmV4cG9ydCBjb25zdCBDb25zZWN1dGl2ZUF2YWlsYWJpbGl0eVN0b3JlID0gaW5pdGlhbGl6ZSgpO1xuIiwiaW1wb3J0IHsgZGVyaXZlZCwgUmVhZGFibGUsIHdyaXRhYmxlIH0gZnJvbSBcInN2ZWx0ZS9zdG9yZVwiO1xuaW1wb3J0IHtcbiAgZmV0Y2hUaHJlYWRzLFxuICBmZXRjaFNlYXJjaFJlc3VsdFRocmVhZHMsXG4gIHVwZGF0ZVRocmVhZCxcbiAgZmV0Y2hUaHJlYWRDb3VudCxcbn0gZnJvbSBcIi4uL2Nvbm5lY3Rpb25zL3RocmVhZHNcIjtcbmltcG9ydCB0eXBlIHtcbiAgVGhyZWFkLFxuICBNYWlsYm94UXVlcnksXG4gIENvbnZlcnNhdGlvblF1ZXJ5LFxuICBNZXNzYWdlLFxuICBDb252ZXJzYXRpb24sXG59IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuaW1wb3J0IHsgc2lsZW5jZSB9IGZyb20gXCJAY29tbW9uc1wiO1xuXG5pbnRlcmZhY2UgUGFnaW5hdGVkVGhyZWFkcyB7XG4gIGlzTG9hZGVkOiBib29sZWFuO1xuICB0aHJlYWRzOiBUaHJlYWRbXTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZVBhZ2luYXRlZFRocmVhZHModG90YWxQYWdlczogbnVtYmVyKSB7XG4gIGNvbnN0IHBhZ2luYXRlZFRocmVhZHMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsUGFnZXM7IGkrKykge1xuICAgIHBhZ2luYXRlZFRocmVhZHMucHVzaCh7XG4gICAgICBpc0xvYWRlZDogZmFsc2UsXG4gICAgICB0aHJlYWRzOiA8VGhyZWFkW10+W10sXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHBhZ2luYXRlZFRocmVhZHM7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVUaHJlYWRzKCkge1xuICBjb25zdCB7IHN1YnNjcmliZSwgc2V0LCB1cGRhdGUgfSA9IHdyaXRhYmxlPFxuICAgIFJlY29yZDxzdHJpbmcsIFBhZ2luYXRlZFRocmVhZHNbXT5cbiAgPih7fSk7XG4gIGxldCB0aHJlYWRzTWFwOiBSZWNvcmQ8c3RyaW5nLCBQYWdpbmF0ZWRUaHJlYWRzW10+ID0ge307XG4gIGxldCB0b3RhbEl0ZW1zOiBudW1iZXI7XG5cbiAgcmV0dXJuIHtcbiAgICBzdWJzY3JpYmUsXG4gICAgc2V0LFxuICAgIGdldFRocmVhZHM6IGFzeW5jIChcbiAgICAgIHF1ZXJ5OiBNYWlsYm94UXVlcnksXG4gICAgICBjdXJyZW50UGFnZTogbnVtYmVyLFxuICAgICAgcGFnZVNpemU6IG51bWJlcixcbiAgICAgIGZvcmNlUmVmcmVzaCA9IGZhbHNlLFxuICAgICkgPT4ge1xuICAgICAgY29uc3QgcXVlcnlLZXkgPSBKU09OLnN0cmluZ2lmeShxdWVyeSk7XG5cbiAgICAgIGlmICghcXVlcnkuY29tcG9uZW50X2lkICYmICFxdWVyeS5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgLy8gVGhpcyBzaG91bGQgYWxlcnQgdGhlIHVzZXJcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICBpZiAodG90YWxJdGVtcyA9PT0gdW5kZWZpbmVkIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgICAgICAvLyBUT0RPOiB0aGlzIGNhbiBjb3VudCBwYXNzZWQtaW4gSURzXG4gICAgICAgIGNvbnN0IHRocmVhZENvdW50ID0gcXVlcnkudGhyZWFkX2lkc1xuICAgICAgICAgID8gcXVlcnkudGhyZWFkX2lkcy5sZW5ndGhcbiAgICAgICAgICA6IGF3YWl0IGZldGNoVGhyZWFkQ291bnQocXVlcnkpLmNhdGNoKHNpbGVuY2UpO1xuXG4gICAgICAgIGlmICh0aHJlYWRDb3VudCkge1xuICAgICAgICAgIHRvdGFsSXRlbXMgPSB0aHJlYWRDb3VudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhyZWFkc01hcFtxdWVyeUtleV0pIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgICAgICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRvdGFsSXRlbXMgLyBwYWdlU2l6ZSk7XG4gICAgICAgIHRocmVhZHNNYXBbcXVlcnlLZXldID0gYXdhaXQgaW5pdGlhbGl6ZVBhZ2luYXRlZFRocmVhZHModG90YWxQYWdlcyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIC8vIFNob3VsZG4ndCB0aGlzIGJlIGFuIGludGVybmFsIGVycm9yP1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9IGVsc2UgaWYgKCF0aHJlYWRzTWFwW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0uaXNMb2FkZWQpIHtcbiAgICAgICAgY29uc3QgdGhyZWFkcyA9IGF3YWl0IGZldGNoVGhyZWFkcyhcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICBwYWdlU2l6ZSxcbiAgICAgICAgICBjdXJyZW50UGFnZSAqIHBhZ2VTaXplLFxuICAgICAgICApLmNhdGNoKHNpbGVuY2UpO1xuXG4gICAgICAgIGlmICh0aHJlYWRzKSB7XG4gICAgICAgICAgdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdLnRocmVhZHMgPSB0aHJlYWRzO1xuICAgICAgICAgIHRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS5pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdXBkYXRlKCh0aHJlYWRzKSA9PiB7XG4gICAgICAgIHRocmVhZHNbcXVlcnlLZXldID0gdGhyZWFkc01hcFtxdWVyeUtleV07XG4gICAgICAgIHJldHVybiB7IC4uLnRocmVhZHMgfTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdLnRocmVhZHM7XG4gICAgfSxcbiAgICBnZXROdW1iZXJPZkl0ZW1zOiBhc3luYyAocXVlcnk6IE1haWxib3hRdWVyeSkgPT4ge1xuICAgICAgaWYgKCFxdWVyeS5jb21wb25lbnRfaWQgJiYgIXF1ZXJ5LmFjY2Vzc190b2tlbikge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB0b3RhbEl0ZW1zID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGNvbnN0IHRocmVhZENvdW50ID0gYXdhaXQgZmV0Y2hUaHJlYWRDb3VudChxdWVyeSkuY2F0Y2goc2lsZW5jZSk7XG5cbiAgICAgICAgaWYgKHRocmVhZENvdW50KSB7XG4gICAgICAgICAgdG90YWxJdGVtcyA9IHRocmVhZENvdW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdG90YWxJdGVtcztcbiAgICB9LFxuICAgIC8vIFRPRE8gLSBVc2UgcmVhbCBwYWdpbmF0aW9uIHdoZW4gc2VhcmNoIGVuZHBvaW50IHN1cHBvcnRzIGl0XG4gICAgZ2V0VGhyZWFkc1dpdGhTZWFyY2hLZXl3b3JkOiBhc3luYyAoXG4gICAgICBxdWVyeTogTWFpbGJveFF1ZXJ5LFxuICAgICAgZm9yY2VSZWZyZXNoID0gZmFsc2UsXG4gICAgKSA9PiB7XG4gICAgICBpZiAoIXF1ZXJ5LmNvbXBvbmVudF9pZCAmJiAhcXVlcnkuYWNjZXNzX3Rva2VuKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHF1ZXJ5S2V5ID0gSlNPTi5zdHJpbmdpZnkocXVlcnkpO1xuXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhyZWFkc01hcFtxdWVyeUtleV0pIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgICAgICB0aHJlYWRzTWFwW3F1ZXJ5S2V5XSA9IGF3YWl0IGluaXRpYWxpemVQYWdpbmF0ZWRUaHJlYWRzKDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRocmVhZHNNYXBbcXVlcnlLZXldWzBdLmlzTG9hZGVkIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgICAgICBjb25zdCBzZWFyY2hSZXN1bHRUaHJlYWRzID0gYXdhaXQgZmV0Y2hTZWFyY2hSZXN1bHRUaHJlYWRzKHF1ZXJ5KS5jYXRjaChcbiAgICAgICAgICBzaWxlbmNlLFxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChzZWFyY2hSZXN1bHRUaHJlYWRzKSB7XG4gICAgICAgICAgdGhyZWFkc01hcFtxdWVyeUtleV1bMF0udGhyZWFkcyA9IHNlYXJjaFJlc3VsdFRocmVhZHM7XG4gICAgICAgICAgdGhyZWFkc01hcFtxdWVyeUtleV1bMF0uaXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB1cGRhdGUoKHRocmVhZHMpID0+IHtcbiAgICAgICAgdGhyZWFkc1txdWVyeUtleV0gPSB0aHJlYWRzTWFwW3F1ZXJ5S2V5XTtcbiAgICAgICAgcmV0dXJuIHsgLi4udGhyZWFkcyB9O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhyZWFkc01hcFtxdWVyeUtleV1bMF0udGhyZWFkcztcbiAgICB9LFxuICAgIHVwZGF0ZVRocmVhZDogYXN5bmMgKFxuICAgICAgdGhyZWFkUXVlcnk6IENvbnZlcnNhdGlvblF1ZXJ5LFxuICAgICAgcXVlcnlLZXk6IHN0cmluZyxcbiAgICAgIHVwZGF0ZWRUaHJlYWQ6IENvbnZlcnNhdGlvbixcbiAgICAgIGN1cnJlbnRQYWdlOiBudW1iZXIsXG4gICAgICBwYWdlU2l6ZTogbnVtYmVyLFxuICAgICkgPT4ge1xuICAgICAgY29uc3QgdGhyZWFkID0gYXdhaXQgdXBkYXRlVGhyZWFkKHRocmVhZFF1ZXJ5LCB1cGRhdGVkVGhyZWFkKS5jYXRjaChcbiAgICAgICAgc2lsZW5jZSxcbiAgICAgICk7XG5cbiAgICAgIGlmICghdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdLmlzTG9hZGVkKSB7XG4gICAgICAgIC8vIHBvc3NpYmxlIGhhY2s6IHBhc3MgaW4gYXJyYXkgdG8gcXVlcnk/XG4gICAgICAgIGNvbnN0IHRocmVhZHMgPSBhd2FpdCBmZXRjaFRocmVhZHMoXG4gICAgICAgICAgSlNPTi5wYXJzZShxdWVyeUtleSksXG4gICAgICAgICAgcGFnZVNpemUsXG4gICAgICAgICAgY3VycmVudFBhZ2UgKiBwYWdlU2l6ZSxcbiAgICAgICAgKS5jYXRjaChzaWxlbmNlKTtcblxuICAgICAgICBpZiAodGhyZWFkcykge1xuICAgICAgICAgIHRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS50aHJlYWRzID0gdGhyZWFkcztcbiAgICAgICAgICB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0uaXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS50aHJlYWRzID0gdGhyZWFkc01hcFtxdWVyeUtleV1bXG4gICAgICAgIGN1cnJlbnRQYWdlXG4gICAgICBdLnRocmVhZHMubWFwKChpbml0aWFsVGhyZWFkKSA9PiB7XG4gICAgICAgIGlmICh0aHJlYWQgJiYgaW5pdGlhbFRocmVhZC5pZCA9PT0gdGhyZWFkLmlkKSB7XG4gICAgICAgICAgaW5pdGlhbFRocmVhZCA9IE9iamVjdC5hc3NpZ24oaW5pdGlhbFRocmVhZCwgdGhyZWFkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5pdGlhbFRocmVhZDtcbiAgICAgIH0pO1xuICAgICAgdXBkYXRlKCh0aHJlYWRzKSA9PiB7XG4gICAgICAgIHRocmVhZHNbcXVlcnlLZXldID0gdGhyZWFkc01hcFtxdWVyeUtleV07XG4gICAgICAgIHJldHVybiB7IC4uLnRocmVhZHMgfTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS50aHJlYWRzO1xuICAgIH0sXG4gICAgdXBkYXRlVGhyZWFkU2VsZWN0aW9uOiAoXG4gICAgICBxdWVyeUtleTogc3RyaW5nLFxuICAgICAgY3VycmVudFBhZ2U6IG51bWJlcixcbiAgICAgIHRocmVhZElkPzogc3RyaW5nLFxuICAgICkgPT4ge1xuICAgICAgY29uc3QgdGhyZWFkcyA9IHRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS50aHJlYWRzO1xuXG4gICAgICBpZiAoIXRocmVhZElkKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvblN0YXRlID0gdGhyZWFkcy5zb21lKCh0aHJlYWQpID0+IHRocmVhZC5zZWxlY3RlZCk7XG4gICAgICAgIGZvciAoY29uc3QgdGhyZWFkIG9mIHRocmVhZHMpIHtcbiAgICAgICAgICB0aHJlYWQuc2VsZWN0ZWQgPSAhc2VsZWN0aW9uU3RhdGU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRocmVhZCA9IHRocmVhZHMuZmluZCgodGhyZWFkKSA9PiB0aHJlYWQuaWQgPT09IHRocmVhZElkKTtcbiAgICAgICAgaWYgKHRocmVhZCkge1xuICAgICAgICAgIHRocmVhZC5zZWxlY3RlZCA9ICF0aHJlYWQuc2VsZWN0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHVwZGF0ZSgodGhyZWFkcykgPT4ge1xuICAgICAgICB0aHJlYWRzW3F1ZXJ5S2V5XSA9IHRocmVhZHNNYXBbcXVlcnlLZXldO1xuICAgICAgICByZXR1cm4geyAuLi50aHJlYWRzIH07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0udGhyZWFkcztcbiAgICB9LFxuXG4gICAgcmVzZXQ6ICgpID0+IHtcbiAgICAgIHRocmVhZHNNYXAgPSB7fTtcbiAgICAgIHNldCh7fSk7XG4gICAgfSxcblxuICAgIGh5ZHJhdGVNZXNzYWdlSW5UaHJlYWQ6IChcbiAgICAgIGluY29taW5nTWVzc2FnZTogTWVzc2FnZSxcbiAgICAgIHF1ZXJ5OiBNYWlsYm94UXVlcnksXG4gICAgICBjdXJyZW50UGFnZTogbnVtYmVyLFxuICAgICkgPT4ge1xuICAgICAgY29uc3QgcXVlcnlLZXkgPSBKU09OLnN0cmluZ2lmeShxdWVyeSk7XG5cbiAgICAgIGNvbnN0IGZvdW5kVGhyZWFkID0gdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdPy50aHJlYWRzPy5maW5kKFxuICAgICAgICAodGhyZWFkKSA9PiB0aHJlYWQuaWQgPT09IGluY29taW5nTWVzc2FnZS50aHJlYWRfaWQsXG4gICAgICApO1xuICAgICAgaWYgKGZvdW5kVGhyZWFkKSB7XG4gICAgICAgIGNvbnN0IGZvdW5kTWVzc2FnZSA9IGZvdW5kVGhyZWFkLm1lc3NhZ2VzPy5maW5kKFxuICAgICAgICAgIChtZXNzYWdlKSA9PiBtZXNzYWdlLmlkID09PSBpbmNvbWluZ01lc3NhZ2UuaWQsXG4gICAgICAgICk7XG4gICAgICAgIGlmIChmb3VuZE1lc3NhZ2UpIHtcbiAgICAgICAgICBmb3VuZE1lc3NhZ2UuYm9keSA9IGluY29taW5nTWVzc2FnZS5ib2R5O1xuICAgICAgICAgIHVwZGF0ZSgodGhyZWFkcykgPT4ge1xuICAgICAgICAgICAgaWYgKGluY29taW5nTWVzc2FnZS50aHJlYWRfaWQpIHtcbiAgICAgICAgICAgICAgbGV0IHRocmVhZFRvVXBkYXRlID0gdGhyZWFkc1txdWVyeUtleV1bY3VycmVudFBhZ2VdLnRocmVhZHMuZmluZChcbiAgICAgICAgICAgICAgICAodGhyZWFkKSA9PiB0aHJlYWQuaWQgPT09IGZvdW5kVGhyZWFkLmlkLFxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIGlmICh0aHJlYWRUb1VwZGF0ZSkge1xuICAgICAgICAgICAgICAgIHRocmVhZFRvVXBkYXRlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmb3VuZFRocmVhZCkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyAuLi50aHJlYWRzIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gVGhpcyBoYXBwZW5zIHdoZW4gc29tZW9uZSBzZW5kcyBhIG1lc3NhZ2UgdXNpbmcgY29tcG9zZXIgYW5kIHdlIHdhbnRcbiAgICAgICAgICAvLyB0byB1cGRhdGUgdGhlIGV4aXN0aW5nIHRocmVhZCB3aXRoIHRoZSBzZW50IG1lc3NhZ2VcbiAgICAgICAgICB1cGRhdGUoKHRocmVhZHMpID0+IHtcbiAgICAgICAgICAgIGlmIChpbmNvbWluZ01lc3NhZ2UudGhyZWFkX2lkKSB7XG4gICAgICAgICAgICAgIGxldCB0aHJlYWRUb1VwZGF0ZSA9IHRocmVhZHNbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS50aHJlYWRzLmZpbmQoXG4gICAgICAgICAgICAgICAgKHRocmVhZCkgPT4gdGhyZWFkLmlkID09PSBmb3VuZFRocmVhZC5pZCxcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICBpZiAodGhyZWFkVG9VcGRhdGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlcyA9IGZvdW5kVGhyZWFkLm1lc3NhZ2VzO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2goaW5jb21pbmdNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBmb3VuZFRocmVhZC5tZXNzYWdlcyA9IG1lc3NhZ2VzO1xuICAgICAgICAgICAgICAgIGZvdW5kVGhyZWFkLnNuaXBwZXQgPSBpbmNvbWluZ01lc3NhZ2Uuc25pcHBldDtcbiAgICAgICAgICAgICAgICAvL1JlbW92ZSBkcmFmdCB3aXRoIHRoZSBzYW1lIGlkIGFzIHNlbnQgbWVzc2FnZVxuICAgICAgICAgICAgICAgIGZvdW5kVGhyZWFkLmRyYWZ0cyA9IGZvdW5kVGhyZWFkLmRyYWZ0cy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAoZHJhZnQpID0+IGRyYWZ0LmlkICE9PSBpbmNvbWluZ01lc3NhZ2UuaWQsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aHJlYWRUb1VwZGF0ZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZm91bmRUaHJlYWQpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgLi4udGhyZWFkcyB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0udGhyZWFkcztcbiAgICB9LFxuXG4gICAgLy9VcGRhdGUgZHJhZnRzIGluIHRoZSB0aHJlYWRzIHN0b3JlXG4gICAgaHlkcmF0ZURyYWZ0SW5UaHJlYWQ6IChcbiAgICAgIGluY29taW5nRHJhZnQ6IE1lc3NhZ2UsXG4gICAgICBxdWVyeTogTWFpbGJveFF1ZXJ5LFxuICAgICAgY3VycmVudFBhZ2U6IG51bWJlcixcbiAgICApID0+IHtcbiAgICAgIGNvbnN0IHF1ZXJ5S2V5ID0gSlNPTi5zdHJpbmdpZnkocXVlcnkpO1xuXG4gICAgICBjb25zdCBmb3VuZFRocmVhZCA9IHRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXT8udGhyZWFkcz8uZmluZChcbiAgICAgICAgKHRocmVhZCkgPT4gdGhyZWFkLmlkID09PSBpbmNvbWluZ0RyYWZ0LnRocmVhZF9pZCxcbiAgICAgICk7XG4gICAgICBpZiAoZm91bmRUaHJlYWQpIHtcbiAgICAgICAgLy9VcGRhdGUgZXhpc3RpbmcgZHJhZnQgbWVzc2FnZSBpbiBzdG9yZVxuICAgICAgICBjb25zdCBmb3VuZERyYWZ0ID0gZm91bmRUaHJlYWQuZHJhZnRzPy5maW5kKFxuICAgICAgICAgIChkcmFmdCkgPT4gZHJhZnQuaWQgPT09IGluY29taW5nRHJhZnQuaWQsXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGluY29taW5nRHJhZnQudGhyZWFkX2lkKSB7XG4gICAgICAgICAgaWYgKGZvdW5kRHJhZnQpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZm91bmREcmFmdCwgaW5jb21pbmdEcmFmdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRyYWZ0cyA9IGZvdW5kVGhyZWFkLmRyYWZ0cztcbiAgICAgICAgICAgIGRyYWZ0cy5wdXNoKGluY29taW5nRHJhZnQpO1xuICAgICAgICAgICAgZm91bmRUaHJlYWQuZHJhZnRzID0gZHJhZnRzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVwZGF0ZSgodGhyZWFkcykgPT4ge1xuICAgICAgICAgICAgbGV0IHRocmVhZFRvVXBkYXRlID0gdGhyZWFkc1txdWVyeUtleV1bY3VycmVudFBhZ2VdLnRocmVhZHMuZmluZChcbiAgICAgICAgICAgICAgKHRocmVhZCkgPT4gdGhyZWFkLmlkID09PSBmb3VuZFRocmVhZC5pZCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAodGhyZWFkVG9VcGRhdGUpIHtcbiAgICAgICAgICAgICAgdGhyZWFkVG9VcGRhdGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZvdW5kVGhyZWFkKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7IC4uLnRocmVhZHMgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS50aHJlYWRzO1xuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBNYWlsYm94U3RvcmUgPSBpbml0aWFsaXplVGhyZWFkcygpO1xuXG5leHBvcnQgY29uc3QgRW1haWxTdG9yZTogUmVhZGFibGU8UmVjb3JkPHN0cmluZywgVGhyZWFkW10+PiA9IGRlcml2ZWQoXG4gIE1haWxib3hTdG9yZSxcbiAgKCRNYWlsYm94U3RvcmUpID0+IHtcbiAgICBjb25zdCBlbWFpbFN0b3JlOiBSZWNvcmQ8c3RyaW5nLCBUaHJlYWRbXT4gPSB7fTtcbiAgICBPYmplY3QuZW50cmllcygkTWFpbGJveFN0b3JlKS5mb3JFYWNoKFxuICAgICAgKFtrZXksIHBhZ2luYXRlZFRocmVhZHNdKSA9PlxuICAgICAgICAoZW1haWxTdG9yZVtrZXldID0gcGFnaW5hdGVkVGhyZWFkc1xuICAgICAgICAgIC5tYXAoKHBhZ2luYXRlZFRocmVhZCkgPT4gcGFnaW5hdGVkVGhyZWFkLnRocmVhZHMpXG4gICAgICAgICAgLmZsYXQoKSksXG4gICAgKTtcbiAgICByZXR1cm4gZW1haWxTdG9yZTtcbiAgfSxcbik7XG4iLCJpbXBvcnQgeyBmZXRjaE1hbmlmZXN0IH0gZnJvbSBcIi4uL2Nvbm5lY3Rpb25zL21hbmlmZXN0XCI7XG5pbXBvcnQgeyBXcml0YWJsZSwgd3JpdGFibGUgfSBmcm9tIFwic3ZlbHRlL3N0b3JlXCI7XG5pbXBvcnQgdHlwZSB7IE1hbmlmZXN0IH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG5cbnR5cGUgTWFuaWZlc3RBY2Nlc3NvciA9IHtcbiAgY29tcG9uZW50X2lkOiBzdHJpbmc7XG4gIGFjY2Vzc190b2tlbj86IHN0cmluZztcbiAgZXh0ZXJuYWxfbWFuaWZlc3RfaWRzPzogW107XG59O1xudHlwZSBNYW5pZmVzdFN0b3JlID0gUmVjb3JkPHN0cmluZywgUHJvbWlzZTxNYW5pZmVzdD4+O1xuXG5mdW5jdGlvbiBpbml0aWFsaXplKCk6IFdyaXRhYmxlPE1hbmlmZXN0U3RvcmU+IHtcbiAgY29uc3QgZ2V0ID0gKFxuICAgIHRhcmdldDogTWFuaWZlc3RTdG9yZSxcbiAgICBrZXk6IHN0cmluZyxcbiAgKTogUHJvbWlzZTxNYW5pZmVzdD4gfCB2b2lkID0+IHtcbiAgICBjb25zdCBhY2Nlc3NvcjogTWFuaWZlc3RBY2Nlc3NvciA9IEpTT04ucGFyc2Uoa2V5KTtcblxuICAgIGlmICghYWNjZXNzb3IuY29tcG9uZW50X2lkKSByZXR1cm47XG5cbiAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICBjb25zdCBmZXRjaFByb21pc2UgPSBmZXRjaE1hbmlmZXN0KFxuICAgICAgICBhY2Nlc3Nvci5jb21wb25lbnRfaWQsXG4gICAgICAgIGFjY2Vzc29yLmFjY2Vzc190b2tlbixcbiAgICAgICk7XG4gICAgICBzdG9yZS51cGRhdGUoKHN0b3JlKSA9PiB7XG4gICAgICAgIHN0b3JlW2tleV0gPSBmZXRjaFByb21pc2U7XG4gICAgICAgIHJldHVybiBzdG9yZTtcbiAgICAgIH0pO1xuICAgICAgdGFyZ2V0W2tleV0gPSBmZXRjaFByb21pc2U7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgfTtcbiAgY29uc3Qgc3RvcmUgPSB3cml0YWJsZShuZXcgUHJveHk8TWFuaWZlc3RTdG9yZT4oe30sIHsgZ2V0IH0pKTtcbiAgcmV0dXJuIHN0b3JlO1xufVxuXG5leHBvcnQgY29uc3QgTWFuaWZlc3RTdG9yZSA9IGluaXRpYWxpemUoKTtcbiIsImltcG9ydCB0eXBlIHsgRmlsZSwgTWFuaWZlc3QgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvTnlsYXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEV2ZW50RGlzcGF0Y2hlcihjb21wb25lbnQ6IHtcbiAgZGlzcGF0Y2hFdmVudD86IChlOiBFdmVudCkgPT4gYm9vbGVhbjtcbn0pIHtcbiAgcmV0dXJuIChuYW1lOiBzdHJpbmcsIGRldGFpbDogdW5rbm93bik6IHZvaWQgPT4ge1xuICAgIGlmIChjb21wb25lbnQuZGlzcGF0Y2hFdmVudCkge1xuICAgICAgY29tcG9uZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBDdXN0b21FdmVudChuYW1lLCB7XG4gICAgICAgICAgZGV0YWlsLFxuICAgICAgICAgIGNvbXBvc2VkOiB0cnVlLCAvLyBwcm9wYWdhdGUgYWNyb3NzIHRoZSBzaGFkb3cgRE9NXG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShcbiAgZm46IChhcmdzOiB1bmtub3duKSA9PiB1bmtub3duLFxuICB0aW1lOiBudW1iZXIsXG4pOiAoKSA9PiB2b2lkIHtcbiAgbGV0IHRpbWVvdXRJZDogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD47XG4gIHJldHVybiAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfVxuXG4gICAgdGltZW91dElkID0gc2V0VGltZW91dChmbiwgdGltZSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEludGVybmFsUHJvcHM8VCBleHRlbmRzIFBhcnRpYWw8TWFuaWZlc3Q+PihcbiAgcHJvcGVydGllczogVCxcbiAgbWFuaWZlc3Q6IFQsXG4gIGRlZmF1bHRWYWx1ZU1hcDogVCxcbik6IFQge1xuICByZXR1cm4gbmV3IFByb3h5KHByb3BlcnRpZXMsIHtcbiAgICBnZXQ6ICh0YXJnZXQsIG5hbWU6IGtleW9mIE1hbmlmZXN0IHwgXCJ0b0pTT05cIiB8IFwidG9TdHJpbmdcIikgPT4ge1xuICAgICAgaWYgKG5hbWUgPT09IFwidG9TdHJpbmdcIiB8fCBuYW1lID09PSBcInRvSlNPTlwiKSB7XG4gICAgICAgIHJldHVybiAoKSA9PiBKU09OLnN0cmluZ2lmeSh0YXJnZXQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoUmVmbGVjdC5nZXQodGFyZ2V0LCBuYW1lKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBnZXRQcm9wZXJ0eVZhbHVlKFxuICAgICAgICAgIFJlZmxlY3QuZ2V0KHRhcmdldCwgbmFtZSksXG4gICAgICAgICAgZGVmYXVsdFZhbHVlTWFwW25hbWVdLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAobWFuaWZlc3QgJiYgbmFtZSBpbiBtYW5pZmVzdCkge1xuICAgICAgICByZXR1cm4gZ2V0UHJvcGVydHlWYWx1ZShtYW5pZmVzdFtuYW1lXSwgZGVmYXVsdFZhbHVlTWFwW25hbWVdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZWZhdWx0VmFsdWVNYXBbbmFtZV07XG4gICAgfSxcblxuICAgIG93bktleXM6ICh0YXJnZXQpID0+IHtcbiAgICAgIGNvbnN0IGtleXMgPSBuZXcgU2V0KFtcbiAgICAgICAgLi4uUmVmbGVjdC5vd25LZXlzKHRhcmdldCksXG4gICAgICAgIC4uLk9iamVjdC5rZXlzKG1hbmlmZXN0KSxcbiAgICAgICAgLi4uT2JqZWN0LmtleXMoZGVmYXVsdFZhbHVlTWFwKSxcbiAgICAgIF0pO1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20oa2V5cyk7XG4gICAgfSxcblxuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogKHRhcmdldCwgcHJvcCkgPT4ge1xuICAgICAgbGV0IHByb3BEZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wKTtcbiAgICAgIGlmICghcHJvcERlc2NyaXB0b3IpIHtcbiAgICAgICAgcHJvcERlc2NyaXB0b3IgPSAobWFuaWZlc3QgJiZcbiAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG1hbmlmZXN0LCBwcm9wKSkgPz9cbiAgICAgICAgICAoZGVmYXVsdFZhbHVlTWFwICYmXG4gICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlZmF1bHRWYWx1ZU1hcCwgcHJvcCkpID8/IHtcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICB9O1xuICAgICAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcCwgcHJvcERlc2NyaXB0b3IpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByb3BEZXNjcmlwdG9yO1xuICAgIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcGVydHlWYWx1ZTxUPihwcm9wVmFsdWU6IGFueSwgZGVmYXVsdFRvOiBUKTogVCB7XG4gIGlmIChwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIGRlZmF1bHRUbyA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgIHJldHVybiBwYXJzZUJvb2xlYW4ocHJvcFZhbHVlKSBhcyBhbnk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGVmYXVsdFRvID09PSBcIm51bWJlclwiKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHByb3BWYWx1ZSkgYXMgYW55O1xuICAgIH1cbiAgICBpZiAoZGVmYXVsdFRvIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKHByb3BWYWx1ZSkgYXMgYW55O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wVmFsdWUgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRUbyA/PyBudWxsIDogcHJvcFZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VCb29sZWFuKFxuICB2YWw6IHN0cmluZyB8IGJvb2xlYW4gfCB1bmRlZmluZWQgfCBudWxsLFxuKTogYm9vbGVhbiB7XG4gIHJldHVybiAoPGFueT5bdHJ1ZSwgXCJ0cnVlXCIsIFwiMVwiXSkuaW5jbHVkZXModmFsKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VTdHJpbmdUb0FycmF5KHBhcnNlU3RyOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIGlmICghcGFyc2VTdHIpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBpZiAocGFyc2VTdHIuaW5jbHVkZXMoXCIsXCIpKSB7XG4gICAgcmV0dXJuIHBhcnNlU3RyLnNwbGl0KFwiLFwiKS5tYXAoKHM6IHN0cmluZykgPT4gcy50cmltKCkpO1xuICB9XG4gIGlmIChwYXJzZVN0ci5pbmNsdWRlcyhcIiBcIikpIHtcbiAgICByZXR1cm4gcGFyc2VTdHIuc3BsaXQoXCIgXCIpLm1hcCgoczogc3RyaW5nKSA9PiBzLnRyaW0oKSk7XG4gIH1cbiAgaWYgKHBhcnNlU3RyLmluY2x1ZGVzKFwiXFxuXCIpKSB7XG4gICAgcmV0dXJuIHBhcnNlU3RyLnNwbGl0KFwiXFxuXCIpLm1hcCgoczogc3RyaW5nKSA9PiBzLnRyaW0oKSk7XG4gIH1cblxuICByZXR1cm4gW3BhcnNlU3RyLnRyaW0oKV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZEF0dGFjaGVkRmlsZShmaWxlRGF0YTogc3RyaW5nLCBmaWxlOiBGaWxlKTogdm9pZCB7XG4gIGNvbnN0IGJ1ZmZlciA9IFVpbnQ4QXJyYXkuZnJvbShhdG9iKGZpbGVEYXRhKSwgKGMpID0+IGMuY2hhckNvZGVBdCgwKSk7XG4gIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYnVmZmVyXSwgeyB0eXBlOiBmaWxlLmNvbnRlbnRfdHlwZSB9KTtcbiAgY29uc3QgYmxvYkZpbGUgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGEuaHJlZiA9IGJsb2JGaWxlO1xuICBhLmRvd25sb2FkID0gZmlsZS5maWxlbmFtZSA/PyBmaWxlLmlkO1xuICBhLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gIGEuY2xpY2soKTtcbiAgYS5yZW1vdmUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5Q29udGFpbnNBcnJheShzdXBlcnNldDogYW55W10sIHN1YnNldDogYW55W10pOiBib29sZWFuIHtcbiAgcmV0dXJuIHN1YnNldC5ldmVyeSgodGFyZ2V0KSA9PiBzdXBlcnNldC5pbmNsdWRlcyh0YXJnZXQpKTtcbn1cbiIsIjxzdmVsdGU6b3B0aW9ucyB0YWc9XCJueWxhcy1lcnJvclwiIGltbXV0YWJsZT17dHJ1ZX0gLz5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbiAgaW1wb3J0IHsgRXJyb3JTdG9yZSB9IGZyb20gXCIuLi9zdG9yZS9lcnJvclwiO1xuICBpbXBvcnQgdHlwZSB7IE5FcnJvciB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuXG4gIGV4cG9ydCBsZXQgaWQ6IHN0cmluZzsgLy8gY29tcG9uZW50IGlkXG5cbiAgbGV0IGVycm9yOiBORXJyb3I7XG4gIGxldCBlcnJvck5hbWU6IHN0cmluZztcblxuICAkOiB7XG4gICAgZXJyb3IgPSAkRXJyb3JTdG9yZVtpZF0gPz8geyBuYW1lOiBcIlwiIH07XG4gICAgZXJyb3JOYW1lID0gZXJyb3IubmFtZSA/PyBlcnJvci5tZXNzYWdlPy5uYW1lID8/IFwiXCI7XG4gIH1cblxuICBjb25zdCBpc0RldkVudiA9XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoXCJsb2NhbGhvc3RcIikgfHxcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcyhcIjEyNy4wLjAuMVwiKTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC5tZXNzYWdlLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjZmNjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNhYTkyYTAgaW5zZXQsIDAgMCAwIDAgdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICM5ZjNhMzg7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlLCBjb2xvciA1MDBtcyBlYXNlLFxuICAgICAgYmFja2dyb3VuZC1jb2xvciA1MDBtcyBlYXNlLCBib3gtc2hhZG93IDUwMG1zIGVhc2UsXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3cgNTAwbXMgZWFzZTtcbiAgfVxuXG4gIC5tZXNzYWdlLWNvbnRhaW5lciAqOmZvY3VzIHtcbiAgICBvdXRsaW5lOiA1cHggYXV0byBIaWdobGlnaHQ7XG4gICAgb3V0bGluZTogNXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO1xuICB9XG5cbiAgLmRldGFpbHMge1xuICAgIGNvbG9yOiAjNDk0OTQ5O1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuPC9zdHlsZT5cblxueyNpZiBlcnJvck5hbWUgJiYgaXNEZXZFbnZ9XG4gIDxkaXYgY2xhc3M9XCJtZXNzYWdlLWNvbnRhaW5lclwiPlxuICAgIHsjaWYgZXJyb3JOYW1lID09PSBcIkhvc3REb21haW5Ob3RBbGxvd2VkRXJyb3JcIn1cbiAgICAgIDxoMz5cbiAgICAgICAgWW91IGFyZSB0cnlpbmcgdG8gYWNjZXNzIHRoaXMgY29tcG9uZW50IGZyb20mbmJzcDtcbiAgICAgICAgPGNvZGU+e3dpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZX08L2NvZGU+LiBUaGUgY29tcG9uZW50J3Mgc2V0dGluZ3MgZG8gbm90XG4gICAgICAgIGFsbG93IGFjY2VzcyBmcm9tIHRoaXMgZG9tYWluLlxuICAgICAgPC9oMz5cbiAgICAgIDxoND5cbiAgICAgICAgVGhlIGxpc3Qgb2YgYWxsb3dlZCBkb21haW5zIGNhbiBiZSBtb2RpZmllZCBpbiB5b3VyJm5ic3A7XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2Rhc2hib2FyZC5ueWxhcy5jb21cIj5EYXNoYm9hcmQ8L2E+LlxuICAgICAgPC9oND5cbiAgICB7OmVsc2UgaWYgZXJyb3JOYW1lID09PSBcIkluY29tcGF0aWJsZVByb3BlcnRpZXNcIn1cbiAgICAgIDxoMz5Zb3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGRvIG5vdCB3b3JrIHdpdGggZWFjaCBvdGhlci48L2gzPlxuICAgIHsvaWZ9XG4gICAgPHNwYW4gY2xhc3M9XCJkZXRhaWxzXCI+RGVidWcgaW5mbzo8L3NwYW4+XG4gICAgPHRleHRhcmVhIGNsYXNzPVwiZGV0YWlsc1wiIHJlYWRvbmx5PlxuICAgICAge2Vycm9yTmFtZX06IHtpZH1cbiAgICAgIHtlcnJvci5tZXNzYWdlPy5tZXNzYWdlID8/IFwiXCJ9XG4gICAgPC90ZXh0YXJlYT5cbiAgPC9kaXY+XG57L2lmfVxuIiwiaW1wb3J0IHR5cGUgeyBDdXN0b21GaWVsZCB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9Cb29raW5nXCI7XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0Q3VzdG9tRmllbGRzOiBDdXN0b21GaWVsZFtdID0gW1xuICB7XG4gICAgdGl0bGU6IFwiWW91ciBOYW1lXCIsXG4gICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRW1haWwgQWRkcmVzc1wiLFxuICAgIHR5cGU6IFwidGV4dFwiLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIHBsYWNlaG9sZGVyOiBcInlvdUBleGFtcGxlLmNvbVwiLFxuICB9LFxuXTtcbiIsImV4cG9ydCBlbnVtIE5vdGlmaWNhdGlvbk1vZGUge1xuICBTSE9XX01FU1NBR0UgPSBcInNob3dfbWVzc2FnZVwiLFxuICBTRU5EX01FU1NBR0UgPSBcInNlbmRfbWVzc2FnZVwiLFxufVxuIiwiPHN2ZWx0ZTpvcHRpb25zIHRhZz1cIm55bGFzLWJvb2tpbmdcIiAvPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICBpbXBvcnQgeyBFcnJvclN0b3JlLCBNYW5pZmVzdFN0b3JlLCBzZW5kTWVzc2FnZSB9IGZyb20gXCJAY29tbW9uc1wiO1xuICBpbXBvcnQgeyBjcmVhdGVFdmVudCB9IGZyb20gXCJAY29tbW9ucy9jb25uZWN0aW9ucy9ldmVudHNcIjtcbiAgaW1wb3J0IHsgZ2V0X2N1cnJlbnRfY29tcG9uZW50IH0gZnJvbSBcInN2ZWx0ZS9pbnRlcm5hbFwiO1xuICBpbXBvcnQge1xuICAgIGJ1aWxkSW50ZXJuYWxQcm9wcyxcbiAgICBnZXRFdmVudERpc3BhdGNoZXIsXG4gIH0gZnJvbSBcIkBjb21tb25zL21ldGhvZHMvY29tcG9uZW50XCI7XG5cbiAgaW1wb3J0IHsgRGVmYXVsdEN1c3RvbUZpZWxkcyB9IGZyb20gXCJAY29tbW9ucy9jb25zdGFudHMvY3VzdG9tLWZpZWxkc1wiO1xuICBpbXBvcnQgdHlwZSB7XG4gICAgTWFuaWZlc3QsXG4gICAgQ3VzdG9tRmllbGQsXG4gICAgQ29uc2VjdXRpdmVFdmVudCxcbiAgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvQm9va2luZ1wiO1xuICBpbXBvcnQgdHlwZSB7IEJvb2thYmxlU2xvdCB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9BdmFpbGFiaWxpdHlcIjtcbiAgaW1wb3J0IHR5cGUgeyBFdmVudFF1ZXJ5LCBUaW1lc3BhbkV2ZW50IH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL0V2ZW50c1wiO1xuICBpbXBvcnQgeyBOb3RpZmljYXRpb25Nb2RlIH0gZnJvbSBcIkBjb21tb25zL2VudW1zL0Jvb2tpbmdcIjtcbiAgaW1wb3J0IHsgb25Nb3VudCwgdGljayB9IGZyb20gXCJzdmVsdGVcIjtcblxuICAvLyAjcmVnaW9uIHByb3BzXG4gIGV4cG9ydCBsZXQgaWQ6IHN0cmluZyA9IFwiXCI7XG4gIGV4cG9ydCBsZXQgYWNjZXNzX3Rva2VuOiBzdHJpbmcgPSBcIlwiO1xuXG4gIGV4cG9ydCBsZXQgYm9va2luZ19sYWJlbDogc3RyaW5nO1xuICBleHBvcnQgbGV0IGN1c3RvbV9maWVsZHM6IEN1c3RvbUZpZWxkW107XG4gIGV4cG9ydCBsZXQgZXZlbnRfdGl0bGU6IHN0cmluZztcbiAgZXhwb3J0IGxldCBldmVudF9kZXNjcmlwdGlvbjogc3RyaW5nO1xuICBleHBvcnQgbGV0IGV2ZW50X2xvY2F0aW9uOiBzdHJpbmc7XG4gIGV4cG9ydCBsZXQgZXZlbnRfY29uZmVyZW5jaW5nOiBzdHJpbmc7XG4gIGV4cG9ydCBsZXQgc2xvdHNfdG9fYm9vazogQm9va2FibGVTbG90W107XG4gIGV4cG9ydCBsZXQgbm90aWZpY2F0aW9uX21vZGU6IE5vdGlmaWNhdGlvbk1vZGU7XG4gIGV4cG9ydCBsZXQgbm90aWZpY2F0aW9uX21lc3NhZ2U6IHN0cmluZztcbiAgZXhwb3J0IGxldCBub3RpZmljYXRpb25fc3ViamVjdDogc3RyaW5nO1xuICBleHBvcnQgbGV0IHJlY3VycmVuY2U6IFwibm9uZVwiIHwgXCJyZXF1aXJlZFwiIHwgXCJvcHRpb25hbFwiO1xuICBleHBvcnQgbGV0IHJlY3VycmVuY2VfY2FkZW5jZTogKFxuICAgIHwgXCJub25lXCJcbiAgICB8IFwiZGFpbHlcIlxuICAgIHwgXCJ3ZWVrZGF5c1wiXG4gICAgfCBcIndlZWtseVwiXG4gICAgfCBcImJpd2Vla2x5XCJcbiAgICB8IFwibW9udGhseVwiXG4gIClbXTtcbiAgZXhwb3J0IGxldCByZWN1cnJlbmNlX2V4cGlyeTogRGF0ZSB8IHN0cmluZyB8IG51bGw7XG4gIGV4cG9ydCBsZXQgZXZlbnRfb3B0aW9uczogYW55W107IC8vIFRPRE86IHR5cGVcbiAgLy8gI2VuZHJlZ2lvbiBwcm9wc1xuXG4gIC8vI3JlZ2lvbiBtb3VudCBhbmQgcHJvcCBpbml0aWFsaXphdGlvblxuICBjb25zdCBkaXNwYXRjaEV2ZW50ID0gZ2V0RXZlbnREaXNwYXRjaGVyKGdldF9jdXJyZW50X2NvbXBvbmVudCgpKTtcblxuICAkOiBpZiAoT2JqZWN0LmtleXMoJEVycm9yU3RvcmUpLmxlbmd0aCkge1xuICAgIGRpc3BhdGNoRXZlbnQoXCJvbkVycm9yXCIsICRFcnJvclN0b3JlKTtcbiAgfVxuXG4gIGNvbnN0IGRlZmF1bHRWYWx1ZU1hcDogUGFydGlhbDxNYW5pZmVzdD4gPSB7XG4gICAgYm9va2luZ19sYWJlbDogXCJTY2hlZHVsZSB0aW1lIHNsb3RzXCIsXG4gICAgY3VzdG9tX2ZpZWxkczogRGVmYXVsdEN1c3RvbUZpZWxkcyxcbiAgICBldmVudF90aXRsZTogXCJNZWV0aW5nXCIsXG4gICAgZXZlbnRfZGVzY3JpcHRpb246IFwiXCIsXG4gICAgZXZlbnRfY29uZmVyZW5jaW5nOiBcIlwiLFxuICAgIGV2ZW50X2xvY2F0aW9uOiBcIlwiLFxuICAgIHNsb3RzX3RvX2Jvb2s6IFtdLFxuICAgIG5vdGlmaWNhdGlvbl9tb2RlOiBOb3RpZmljYXRpb25Nb2RlLlNIT1dfTUVTU0FHRSxcbiAgICBub3RpZmljYXRpb25fbWVzc2FnZTogXCJUaGFuayB5b3UgZm9yIHNjaGVkdWxpbmchXCIsXG4gICAgbm90aWZpY2F0aW9uX3N1YmplY3Q6IFwiSW52aXRhdGlvblwiLFxuICAgIHJlY3VycmVuY2U6IFwibm9uZVwiLFxuICAgIHJlY3VycmVuY2VfY2FkZW5jZTogW1wibm9uZVwiXSxcbiAgICBldmVudF9vcHRpb25zOiBbXSxcbiAgfTtcblxuICBsZXQgX3RoaXM6IE1hbmlmZXN0ID0gPE1hbmlmZXN0PmJ1aWxkSW50ZXJuYWxQcm9wcyh7fSwge30sIGRlZmF1bHRWYWx1ZU1hcCk7XG4gIGxldCBtYW5pZmVzdDogUGFydGlhbDxNYW5pZmVzdD4gPSB7fTtcblxuICBvbk1vdW50KGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCB0aWNrKCk7XG4gICAgY29uc3Qgc3RvcmVLZXkgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBjb21wb25lbnRfaWQ6IGlkLFxuICAgICAgYWNjZXNzX3Rva2VuLFxuICAgIH0pO1xuICAgIG1hbmlmZXN0ID0gKGF3YWl0ICRNYW5pZmVzdFN0b3JlW3N0b3JlS2V5XSkgfHwge307XG5cbiAgICBfdGhpcyA9IGJ1aWxkSW50ZXJuYWxQcm9wcygkJHByb3BzLCBtYW5pZmVzdCwgZGVmYXVsdFZhbHVlTWFwKSBhcyBNYW5pZmVzdDtcbiAgfSk7XG5cbiAgbGV0IHByZXZpb3VzUHJvcHMgPSAkJHByb3BzO1xuICAkOiB7XG4gICAgaWYgKEpTT04uc3RyaW5naWZ5KHByZXZpb3VzUHJvcHMpICE9PSBKU09OLnN0cmluZ2lmeSgkJHByb3BzKSkge1xuICAgICAgX3RoaXMgPSBidWlsZEludGVybmFsUHJvcHMoXG4gICAgICAgICQkcHJvcHMsXG4gICAgICAgIG1hbmlmZXN0LFxuICAgICAgICBkZWZhdWx0VmFsdWVNYXAsXG4gICAgICApIGFzIE1hbmlmZXN0O1xuICAgICAgcHJldmlvdXNQcm9wcyA9ICQkcHJvcHM7XG4gICAgfVxuICB9XG4gIC8vICNlbmRyZWdpb24gbW91bnQgYW5kIHByb3AgaW5pdGlhbGl6YXRpb25cblxuICBsZXQgc2hvd1N1Y2Nlc3NOb3RpZmljYXRpb24gPSBmYWxzZTtcblxuICAkOiBzbG90c1RvQm9vayA9IF90aGlzLnNsb3RzX3RvX2Jvb2subWFwKChzbG90KSA9PiB7XG4gICAgaWYgKCFzbG90LnJlY3VycmVuY2VfY2FkZW5jZSkge1xuICAgICAgaWYgKF90aGlzLnJlY3VycmVuY2UgPT09IFwicmVxdWlyZWRcIikge1xuICAgICAgICBzbG90LnJlY3VycmVuY2VfY2FkZW5jZSA9IF90aGlzLnJlY3VycmVuY2VfY2FkZW5jZVswXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNsb3QucmVjdXJyZW5jZV9jYWRlbmNlID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghc2xvdC5leHBpcnlTZWxlY3Rpb24pIHtcbiAgICAgIHNsb3QuZXhwaXJ5U2VsZWN0aW9uID0gXCJub25lXCI7XG4gICAgfVxuICAgIHJldHVybiBzbG90O1xuICB9KTtcbiAgJDogaWYgKHNsb3RzVG9Cb29rLmxlbmd0aCkge1xuICAgIHNob3dTdWNjZXNzTm90aWZpY2F0aW9uID0gZmFsc2U7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBib29rVGltZVNsb3RzKGV2ZW50czogQm9va2FibGVTbG90W10pIHtcbiAgICBjb25zdCBib29raW5ncyA9IGV2ZW50cy5tYXAoYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBwb3N0YWJsZUV2ZW50OiBQYXJ0aWFsPFRpbWVzcGFuRXZlbnQ+ID0ge1xuICAgICAgICB0aXRsZTogZXZlbnQuZXZlbnRfdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBldmVudC5ldmVudF9kZXNjcmlwdGlvbixcbiAgICAgICAgbG9jYXRpb246IGV2ZW50LmV2ZW50X2xvY2F0aW9uLFxuICAgICAgICBjb25mZXJlbmNpbmc6IGV2ZW50LmV2ZW50X2NvbmZlcmVuY2luZ1xuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBwcm92aWRlcjogXCJab29tIE1lZXRpbmdcIiwgLy8gVE9ETzogbWFrZSB0aGlzIGR5bmFtaWNcbiAgICAgICAgICAgICAgZGV0YWlsczoge1xuICAgICAgICAgICAgICAgIHVybDogZXZlbnQuZXZlbnRfY29uZmVyZW5jaW5nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICBwYXJ0aWNpcGFudHM6IEFycmF5LmZyb20oXG4gICAgICAgICAgbmV3IFNldChbXG4gICAgICAgICAgICAuLi5ldmVudC5hdmFpbGFibGVfY2FsZW5kYXJzLFxuICAgICAgICAgICAgLi4uKGV2ZW50LnBhcnRpY2lwYW50RW1haWxzID8/IFtdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgKS5tYXAoKGVtYWlsKSA9PiAoeyBlbWFpbCB9KSksXG4gICAgICAgIGNhbGVuZGFyX2lkOiBldmVudC5jYWxlbmRhcl9pZCxcbiAgICAgICAgd2hlbjoge1xuICAgICAgICAgIHN0YXJ0X3RpbWU6IGV2ZW50LnN0YXJ0X3RpbWUuZ2V0VGltZSgpIC8gMTAwMCxcbiAgICAgICAgICBlbmRfdGltZTogZXZlbnQuZW5kX3RpbWUuZ2V0VGltZSgpIC8gMTAwMCxcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIGlmIChjdXN0b21GaWVsZFJlc3BvbnNlc1tcIkVtYWlsIEFkZHJlc3NcIl0pIHtcbiAgICAgICAgcG9zdGFibGVFdmVudC5wYXJ0aWNpcGFudHM/LnB1c2goe1xuICAgICAgICAgIGVtYWlsOiBjdXN0b21GaWVsZFJlc3BvbnNlc1tcIkVtYWlsIEFkZHJlc3NcIl0sXG4gICAgICAgICAgbmFtZTogY3VzdG9tRmllbGRSZXNwb25zZXNbXCJZb3VyIE5hbWVcIl0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoT2JqZWN0LmtleXMoY3VzdG9tRmllbGRSZXNwb25zZXMpLmxlbmd0aCkge1xuICAgICAgICBwb3N0YWJsZUV2ZW50Lm1ldGFkYXRhID0gY3VzdG9tRmllbGRSZXNwb25zZXM7XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC5yZWN1cnJlbmNlX2NhZGVuY2UgJiYgZXZlbnQucmVjdXJyZW5jZV9jYWRlbmNlICE9PSBcIm5vbmVcIikge1xuICAgICAgICBsZXQgcnJ1bGU6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIGlmIChldmVudC5yZWN1cnJlbmNlX2NhZGVuY2UgPT09IFwiZGFpbHlcIikge1xuICAgICAgICAgIHJydWxlID0gXCJSUlVMRTpGUkVRPURBSUxZXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQucmVjdXJyZW5jZV9jYWRlbmNlID09PSBcIndlZWtkYXlzXCIpIHtcbiAgICAgICAgICBycnVsZSA9IFwiUlJVTEU6RlJFUT1EQUlMWTtCWURBWT1NTyxUVSxXRSxUSCxGUlwiO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnJlY3VycmVuY2VfY2FkZW5jZSA9PT0gXCJ3ZWVrbHlcIikge1xuICAgICAgICAgIHJydWxlID0gXCJSUlVMRTpGUkVRPVdFRUtMWVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnJlY3VycmVuY2VfY2FkZW5jZSA9PT0gXCJiaXdlZWtseVwiKSB7XG4gICAgICAgICAgcnJ1bGUgPSBcIlJSVUxFOkZSRVE9V0VFS0xZO0lOVEVSVkFMPTJcIjtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5yZWN1cnJlbmNlX2NhZGVuY2UgPT09IFwibW9udGhseVwiKSB7XG4gICAgICAgICAgcnJ1bGUgPSBcIlJSVUxFOkZSRVE9TU9OVEhMWVwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIENvbnZlcnQgZGF0ZSBpbnB1dCB0byBEYXRlIHR5cGVcbiAgICAgICAgaWYgKHR5cGVvZiBldmVudC5yZWN1cnJlbmNlX2V4cGlyeSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIGV2ZW50LnJlY3VycmVuY2VfZXhwaXJ5ID0gbmV3IERhdGUoZXZlbnQucmVjdXJyZW5jZV9leHBpcnkgYXMgc3RyaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBleHBpcnkgPSBfdGhpcy5yZWN1cnJlbmNlX2V4cGlyeSB8fCBldmVudC5yZWN1cnJlbmNlX2V4cGlyeTtcbiAgICAgICAgY29uc3QgZXhwaXJ5SW50ID0gTnVtYmVyLnBhcnNlSW50KDxzdHJpbmc+ZXhwaXJ5KTtcblxuICAgICAgICBpZiAoIWlzTmFOKGV4cGlyeUludCkpIHtcbiAgICAgICAgICBycnVsZSArPSBgO0NPVU5UPSR7ZXhwaXJ5SW50fWA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXhwaXJ5IGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgIHJydWxlICs9IGA7VU5USUw9JHtleHBpcnlcbiAgICAgICAgICAgIC50b0lTT1N0cmluZygpXG4gICAgICAgICAgICAuc3Vic3RyaW5nKDAsIDE5KSAvLyBSZW1vdmUgTVMgZnJvbSB0aW1lIHN0cmluZ1xuICAgICAgICAgICAgLnJlcGxhY2UoL1teMC05XS9nLCBcIlwiKX1aYDtcbiAgICAgICAgfVxuICAgICAgICBwb3N0YWJsZUV2ZW50LnJlY3VycmVuY2UgPSB7XG4gICAgICAgICAgcnJ1bGU6IFtycnVsZV0sXG4gICAgICAgICAgdGltZXpvbmU6IEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjcmVhdGVFdmVudChcbiAgICAgICAgcG9zdGFibGVFdmVudCBhcyBUaW1lc3BhbkV2ZW50LFxuICAgICAgICB7XG4gICAgICAgICAgY29tcG9uZW50X2lkOiBpZCxcbiAgICAgICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICAgIH0gYXMgRXZlbnRRdWVyeSxcbiAgICAgICk7XG4gICAgfSk7XG4gICAgY29uc3QgZXZlbnRCb29raW5ncyA9IGF3YWl0IFByb21pc2UuYWxsKGJvb2tpbmdzKTtcblxuICAgIGRpc3BhdGNoRXZlbnQoXCJib29rZWRFdmVudHNcIiwge30pO1xuXG4gICAgaWYgKF90aGlzLm5vdGlmaWNhdGlvbl9tb2RlID09PSBOb3RpZmljYXRpb25Nb2RlLlNFTkRfTUVTU0FHRSkge1xuICAgICAgZXZlbnRCb29raW5ncy5tYXAoKGV2ZW50LCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGV2ZW50UGFydGljaXBhbnRzID0gZXZlbnQucGFydGljaXBhbnRzPy5tYXAoKHBhcnRpY2lwYW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBlbWFpbCwgbmFtZSB9ID0gcGFydGljaXBhbnQ7XG4gICAgICAgICAgY29uc3QgdG86IHsgZW1haWw6IHN0cmluZzsgbmFtZT86IHN0cmluZyB9ID0geyBlbWFpbCB9O1xuICAgICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICB0by5uYW1lID0gbmFtZTtcbiAgICAgICAgICB9IC8vIE9ubHkgYXNzaWduIG5hbWUgaWYgbm90IG51bGwsIGVsc2Ugd2UgZ2V0IGVycm9yXG4gICAgICAgICAgcmV0dXJuIHRvO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGV2ZW50UGFydGljaXBhbnRzKSB7XG4gICAgICAgICAgc2VuZE1lc3NhZ2UoaWQsIHtcbiAgICAgICAgICAgIHRvOiBldmVudFBhcnRpY2lwYW50cyxcbiAgICAgICAgICAgIGJvZHk6IGAke190aGlzLm5vdGlmaWNhdGlvbl9tZXNzYWdlfWAsXG4gICAgICAgICAgICBzdWJqZWN0OiBgJHtfdGhpcy5ub3RpZmljYXRpb25fc3ViamVjdH1gLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKF90aGlzLm5vdGlmaWNhdGlvbl9tb2RlID09PSBOb3RpZmljYXRpb25Nb2RlLlNIT1dfTUVTU0FHRSkge1xuICAgICAgc2hvd1N1Y2Nlc3NOb3RpZmljYXRpb24gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8vICNyZWdpb24gY3VzdG9tIGZpZWxkc1xuICBsZXQgY3VzdG9tRmllbGRSZXNwb25zZXM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTsgLy8gaWRlYWxseSBcImFueVwiIHdvdWxkIGJlIFwic3RyaW5nIHwgYm9vbGVhblwiLCBidXQgdGV4dCBpbnB1dHMgY2FzdCB0byBtYW55IHR5cGVzXG4gICQ6IGlmIChcbiAgICAhX3RoaXMuY3VzdG9tX2ZpZWxkcy5maW5kKChmaWVsZCkgPT5cbiAgICAgIGN1c3RvbUZpZWxkUmVzcG9uc2VzLmhhc093blByb3BlcnR5KGZpZWxkLnRpdGxlKSxcbiAgICApXG4gICkge1xuICAgIGN1c3RvbUZpZWxkUmVzcG9uc2VzID0gX3RoaXMuY3VzdG9tX2ZpZWxkcy5yZWR1Y2UoKHJlc3BvbnNlcywgZmllbGQpID0+IHtcbiAgICAgIHJldHVybiB7IC4uLnJlc3BvbnNlcywgW2ZpZWxkLnRpdGxlXTogXCJcIiB9O1xuICAgIH0sIHt9KTtcbiAgfVxuXG4gICQ6IHJlcXVpcmVkRmllbGRzRmlsbGVkID0gX3RoaXMuY3VzdG9tX2ZpZWxkc1xuICAgIC5maWx0ZXIoKGZpZWxkKSA9PiBmaWVsZC5yZXF1aXJlZClcbiAgICAuZXZlcnkoXG4gICAgICAoZmllbGQpID0+XG4gICAgICAgIGN1c3RvbUZpZWxkUmVzcG9uc2VzW2ZpZWxkLnRpdGxlXSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIGN1c3RvbUZpZWxkUmVzcG9uc2VzW2ZpZWxkLnRpdGxlXSAhPT0gXCJcIixcbiAgICApO1xuICAvLyAjZW5kcmVnaW9uIGN1c3RvbSBmaWVsZHNcblxuICAvLyNyZWdpb24gRXZlbnQgT3B0aW9uc1xuICAvLyBJbnRlcmZhY2UgaGFuZGxpbmcgZm9yIHdoZW4geW91J3ZlIGdvdCBtdWx0aXBsZSBldmVudHMgdG8gc2VsZWN0IGZyb20sIGxpa2UgQ29uc2VjdXRpdmUgRXZlbnQgb3B0aW9uc1xuXG4gIGZ1bmN0aW9uIGhvdmVyT3B0aW9uKGV2ZW50OiBDb25zZWN1dGl2ZUV2ZW50W10pIHtcbiAgICBkaXNwYXRjaEV2ZW50KFwiaG92ZXJPcHRpb25DaGFuZ2VcIiwge1xuICAgICAgZXZlbnQsXG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gYmx1ck9wdGlvbigpIHtcbiAgICBkaXNwYXRjaEV2ZW50KFwiaG92ZXJPcHRpb25DaGFuZ2VcIiwge1xuICAgICAgZXZlbnQ6IG51bGwsXG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gc2VsZWN0T3B0aW9uKGV2ZW50OiBDb25zZWN1dGl2ZUV2ZW50W10pIHtcbiAgICBkaXNwYXRjaEV2ZW50KFwiZXZlbnRPcHRpb25TZWxlY3RlZFwiLCB7XG4gICAgICBldmVudCxcbiAgICB9KTtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvbiBFdmVudCBPcHRpb25zXG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4gIEBpbXBvcnQgXCIuL3N0eWxlcy9ib29raW5nLnNjc3NcIjtcbjwvc3R5bGU+XG5cbjxueWxhcy1lcnJvciB7aWR9IC8+XG48bWFpbj5cbiAgPHNlY3Rpb24gY2xhc3M9XCJib29rZXJcIj5cbiAgICB7I2lmIHNsb3RzVG9Cb29rLmxlbmd0aH1cbiAgICAgIDxoMj5Zb3VyIEFwcG9pbnRtZW50IEJvb2tpbmdzPC9oMj5cbiAgICAgIDxwPkRvIHlvdSB3YW50IHRvIGJvb2sgdGhlIGZvbGxvd2luZz88L3A+XG4gICAgICA8dWwgY2xhc3M9XCJ0aW1lc2xvdHNcIj5cbiAgICAgICAgeyNlYWNoIHNsb3RzVG9Cb29rIGFzIHRpbWVTbG90fVxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAge3RpbWVTbG90LmV2ZW50X3RpdGxlIHx8IF90aGlzLmV2ZW50X3RpdGxlfToge3RpbWVTbG90LmV2ZW50X2Rlc2NyaXB0aW9uIHx8XG4gICAgICAgICAgICAgICAgX3RoaXMuZXZlbnRfZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aW1lXCJcbiAgICAgICAgICAgICAgPnt0aW1lU2xvdC5zdGFydF90aW1lLnRvTG9jYWxlVGltZVN0cmluZyhbXSwge1xuICAgICAgICAgICAgICAgIHRpbWVTdHlsZTogXCJzaG9ydFwiLFxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgLVxuICAgICAgICAgICAgICB7dGltZVNsb3QuZW5kX3RpbWUudG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7XG4gICAgICAgICAgICAgICAgdGltZVN0eWxlOiBcInNob3J0XCIsXG4gICAgICAgICAgICAgIH0pfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZVwiXG4gICAgICAgICAgICAgID57dGltZVNsb3Quc3RhcnRfdGltZS50b0xvY2FsZURhdGVTdHJpbmcoXCJkZWZhdWx0XCIsIHtcbiAgICAgICAgICAgICAgICBkYXRlU3R5bGU6IFwiZnVsbFwiLFxuICAgICAgICAgICAgICB9KX08L3NwYW4+XG4gICAgICAgICAgICB7I2lmIF90aGlzLnJlY3VycmVuY2UgIT09IFwibm9uZVwifVxuICAgICAgICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgICAgIHsjaWYgX3RoaXMucmVjdXJyZW5jZSA9PT0gXCJvcHRpb25hbFwifVxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Ib3cgb2Z0ZW4gc2hvdWxkIHRoaXMgZXZlbnQgcmVwZWF0Pzwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhZGVuY2VzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOmNoZWNrZWQ9e3RpbWVTbG90LnJlY3VycmVuY2VfY2FkZW5jZSA9PT0gXCJub25lXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBiaW5kOmdyb3VwPXt0aW1lU2xvdC5yZWN1cnJlbmNlX2NhZGVuY2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+bmV2ZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIHsjZWFjaCBfdGhpcy5yZWN1cnJlbmNlX2NhZGVuY2UgYXMgY2FkZW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOmNoZWNrZWQ9e3RpbWVTbG90LnJlY3VycmVuY2VfY2FkZW5jZSA9PT0gY2FkZW5jZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NhZGVuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJpbmQ6Z3JvdXA9e3RpbWVTbG90LnJlY3VycmVuY2VfY2FkZW5jZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjYWRlbmNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7OmVsc2UgaWYgX3RoaXMucmVjdXJyZW5jZSA9PT0gXCJyZXF1aXJlZFwifVxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5SZXBlYXRpbmcge3RpbWVTbG90LnJlY3VycmVuY2VfY2FkZW5jZX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgIHsjaWYgdGltZVNsb3QucmVjdXJyZW5jZV9jYWRlbmNlICE9PSBcIm5vbmVcIiAmJiAhX3RoaXMucmVjdXJyZW5jZV9leHBpcnl9XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkVuZHM8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHBpcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzOmNoZWNrZWQ9e3RpbWVTbG90LmV4cGlyeVNlbGVjdGlvbiA9PT0gXCJub25lXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBiaW5kOmdyb3VwPXt0aW1lU2xvdC5leHBpcnlTZWxlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+bmV2ZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzczpjaGVja2VkPXt0aW1lU2xvdC5leHBpcnlTZWxlY3Rpb24gPT09IFwiYWZ0ZXJcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJhZnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBiaW5kOmdyb3VwPXt0aW1lU2xvdC5leHBpcnlTZWxlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWZ0ZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgeyNpZiB0aW1lU2xvdC5leHBpcnlTZWxlY3Rpb24gPT09IFwiYWZ0ZXJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFmdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBiaW5kOnZhbHVlPXt0aW1lU2xvdC5yZWN1cnJlbmNlX2V4cGlyeX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPm9jY3VycmVuY2VzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzczpjaGVja2VkPXt0aW1lU2xvdC5leHBpcnlTZWxlY3Rpb24gPT09IFwib25cIn0+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBiaW5kOmdyb3VwPXt0aW1lU2xvdC5leHBpcnlTZWxlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+T248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgeyNpZiB0aW1lU2xvdC5leHBpcnlTZWxlY3Rpb24gPT09IFwib25cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17dGltZVNsb3Quc3RhcnRfdGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0lTT1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnN0cmluZygwLCAxMCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJpbmQ6dmFsdWU9e3RpbWVTbG90LnJlY3VycmVuY2VfZXhwaXJ5fSAvPlxuICAgICAgICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgey9lYWNofVxuICAgICAgPC91bD5cbiAgICAgIHsjaWYgX3RoaXMuY3VzdG9tX2ZpZWxkcy5sZW5ndGh9XG4gICAgICAgIDxkaXYgaWQ9XCJjdXN0b20tZmllbGRzXCI+XG4gICAgICAgICAgeyNlYWNoIF90aGlzLmN1c3RvbV9maWVsZHMgYXMgZmllbGR9XG4gICAgICAgICAgICB7I2lmIGZpZWxkLnR5cGUgPT09IFwiZW1haWxcIn1cbiAgICAgICAgICAgICAgPGxhYmVsIGRhdGEtcmVxdWlyZWQ9e2ZpZWxkLnJlcXVpcmVkfT5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPntmaWVsZC50aXRsZX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8IS0tIFRPRE86IHNlZSBpZiB3ZSBjYW4gbWFrZSB0eXBlPVwidGV4dFwiIGR5bmFtaWMgZm9yIGVtYWlsIGNhc2UuIFN2ZWx0ZSBkb2VzbnQgY2FyZSBmb3IgaXQgYXMgaXMuIC0tPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIGJpbmQ6dmFsdWU9e2N1c3RvbUZpZWxkUmVzcG9uc2VzW2ZpZWxkLnRpdGxlXX0gLz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICAgICAgPGxhYmVsIGRhdGEtcmVxdWlyZWQ9e2ZpZWxkLnJlcXVpcmVkfT5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPntmaWVsZC50aXRsZX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIGJpbmQ6dmFsdWU9e2N1c3RvbUZpZWxkUmVzcG9uc2VzW2ZpZWxkLnRpdGxlXX0gLz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgey9lYWNofVxuICAgICAgICA8L2Rpdj5cbiAgICAgIHsvaWZ9XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGRpc2FibGVkPXshcmVxdWlyZWRGaWVsZHNGaWxsZWR9XG4gICAgICAgIHRpdGxlPXshcmVxdWlyZWRGaWVsZHNGaWxsZWRcbiAgICAgICAgICA/IFwiUGxlYXNlIGNvbXBsZXRlIGFsbCByZXF1aXJlZCBmaWVsZHNcIlxuICAgICAgICAgIDogdW5kZWZpbmVkfVxuICAgICAgICBjbGFzcz1cImJvb2tcIlxuICAgICAgICBvbjpjbGljaz17KCkgPT4gYm9va1RpbWVTbG90cyhzbG90c1RvQm9vayl9XG4gICAgICAgID57X3RoaXMuYm9va2luZ19sYWJlbH08L2J1dHRvbj5cbiAgICB7OmVsc2UgaWYgX3RoaXMuZXZlbnRfb3B0aW9ucy5sZW5ndGh9XG4gICAgICA8aDI+U2VsZWN0IGFuIG9wdGlvbjwvaDI+XG4gICAgICA8dWwgY2xhc3M9XCJ0aW1lc2xvdHMgdGltZXNsb3Qtb3B0aW9uc1wiPlxuICAgICAgICB7I2VhY2ggX3RoaXMuZXZlbnRfb3B0aW9ucyBhcyBvcHRpb259XG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICBhcmlhLXJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb246bW91c2VlbnRlcj17KCkgPT4gaG92ZXJPcHRpb24ob3B0aW9uKX1cbiAgICAgICAgICAgIG9uOm1vdXNlbGVhdmU9eygpID0+IGJsdXJPcHRpb24oKX1cbiAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiBzZWxlY3RPcHRpb24ob3B0aW9uKX0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpbWVcIlxuICAgICAgICAgICAgICA+e29wdGlvblswXS5zdGFydF90aW1lLnRvTG9jYWxlU3RyaW5nKFtdLCB7XG4gICAgICAgICAgICAgICAgZGF0ZVN0eWxlOiBcIm1lZGl1bVwiLFxuICAgICAgICAgICAgICAgIHRpbWVTdHlsZTogXCJzaG9ydFwiLFxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgLVxuICAgICAgICAgICAgICB7b3B0aW9uW29wdGlvbi5sZW5ndGggLSAxXS5lbmRfdGltZS50b0xvY2FsZVN0cmluZyhbXSwge1xuICAgICAgICAgICAgICAgIGRhdGVTdHlsZTogXCJtZWRpdW1cIixcbiAgICAgICAgICAgICAgICB0aW1lU3R5bGU6IFwic2hvcnRcIixcbiAgICAgICAgICAgICAgfSl9PC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1Yi1ldmVudHNcIj5cbiAgICAgICAgICAgICAgeyNlYWNoIG9wdGlvbiBhcyBzdWJldmVudCwgaXRlcn1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN1Yi1ldmVudFwiPlxuICAgICAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgICAgICB7c3ViZXZlbnQuZXZlbnRfdGl0bGV9OlxuICAgICAgICAgICAgICAgICAgICB7c3ViZXZlbnQuZXZlbnRfZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAge3N1YmV2ZW50LnN0YXJ0X3RpbWUudG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVTdHlsZTogXCJzaG9ydFwiLFxuICAgICAgICAgICAgICAgICAgfSl9IC0ge3N1YmV2ZW50LmVuZF90aW1lLnRvTG9jYWxlVGltZVN0cmluZyhbXSwge1xuICAgICAgICAgICAgICAgICAgICB0aW1lU3R5bGU6IFwic2hvcnRcIixcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgd2l0aCB7c3ViZXZlbnQuZW1haWxzLmpvaW4oXCIsIFwiKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIHsvZWFjaH1cbiAgICAgIDwvdWw+XG4gICAgezplbHNlfVxuICAgICAgPHA+XG4gICAgICAgIFNlbGVjdCB0aW1lc2xvdHMgdG8gdmlldyBldmVudCBpbmZvcm1hdGlvbiAoWW91J2xsIGJlIGFibGUgdG8gcmV2aWV3XG4gICAgICAgIGJlZm9yZSB5b3UgYm9vaylcbiAgICAgIDwvcD5cbiAgICB7L2lmfVxuICAgIHsjaWYgc2hvd1N1Y2Nlc3NOb3RpZmljYXRpb259XG4gICAgICA8cD57X3RoaXMubm90aWZpY2F0aW9uX21lc3NhZ2V9PC9wPlxuICAgIHsvaWZ9XG4gIDwvc2VjdGlvbj5cbjwvbWFpbj5cbiJdLCJuYW1lcyI6WyJpbml0aWFsaXplIiwiX19zcHJlYWRQcm9wcyIsIl9fc3ByZWFkVmFsdWVzIl0sIm1hcHBpbmdzIjoiK09BQWEsSUFBaUIsT0FBTyxlQUFlLE9BQU8sS0FDekQsT0FBTyxnQkFFVCxPQUFPLGVBQWUsT0FBUyxDQUFDLEtBQWlCLElBQVMsSUFDcEQsZ0JBQWUsSUFBSSxTQUdoQixJQUFlLEVBQU0sR0FBRyxJQ1BqQyxZQUFnQixFQUVoQixZQUFnQixFQUFLLEVBQUssQ0FFdEIsU0FBVyxLQUFLLEdBQ1osRUFBSSxHQUFLLEVBQUksR0FDakIsTUFBTyxHQVVYLFlBQWEsRUFBSSxDQUNiLE1BQU8sS0FFWCxhQUF3QixDQUNwQixNQUFPLFFBQU8sT0FBTyxNQUV6QixXQUFpQixFQUFLLENBQ2xCLEVBQUksUUFBUSxJQUVoQixZQUFxQixFQUFPLENBQ3hCLE1BQU8sT0FBTyxJQUFVLFdBRTVCLFlBQXdCLEVBQUcsRUFBRyxDQUMxQixNQUFPLElBQUssRUFBSSxHQUFLLEVBQUksSUFBTSxHQUFPLEdBQUssTUFBTyxJQUFNLFVBQWEsTUFBTyxJQUFNLFdBVXRGLFlB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
