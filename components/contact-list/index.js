(function (de, w) {
  typeof exports == "object" && typeof module != "undefined"
    ? (module.exports = w())
    : typeof define == "function" && define.amd
    ? define(w)
    : ((de = typeof globalThis != "undefined" ? globalThis : de || self),
      (de.app = w()));
})(this, function () {
  "use strict";
  const de = window.customElements.define.bind(window.customElements);
  window.customElements.define = (t, ...e) => {
    if (!customElements.get(t)) return de(t, ...e);
  };
  function w() {}
  function Ve(t, e) {
    for (const n in e) t[n] = e[n];
    return t;
  }
  function Xt(t) {
    return t && typeof t == "object" && typeof t.then == "function";
  }
  function Ae(t) {
    return t();
  }
  function Xe() {
    return Object.create(null);
  }
  function K(t) {
    t.forEach(Ae);
  }
  function be(t) {
    return typeof t == "function";
  }
  function Be(t, e) {
    return t != t
      ? e == e
      : t !== e || (t && typeof t == "object") || typeof t == "function";
  }
  let ve;
  function oe(t, e) {
    return (
      ve || (ve = document.createElement("a")), (ve.href = e), t === ve.href
    );
  }
  function Bt(t, e) {
    return t != t ? e == e : t !== e;
  }
  function Qt(t) {
    return Object.keys(t).length === 0;
  }
  function Qe(t, ...e) {
    if (t == null) return w;
    const n = t.subscribe(...e);
    return n.unsubscribe ? () => n.unsubscribe() : n;
  }
  function ye(t, e, n) {
    t.$$.on_destroy.push(Qe(e, n));
  }
  function xe(t) {
    const e = {};
    for (const n in t) n[0] !== "$" && (e[n] = t[n]);
    return e;
  }
  function P(t, e) {
    t.appendChild(e);
  }
  function b(t, e, n) {
    t.insertBefore(e, n || null);
  }
  function v(t) {
    t.parentNode.removeChild(t);
  }
  function xt(t, e) {
    for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
  }
  function S(t) {
    return document.createElement(t);
  }
  function A(t) {
    return document.createTextNode(t);
  }
  function j() {
    return A(" ");
  }
  function me() {
    return A("");
  }
  function $(t, e, n, r) {
    return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
  }
  function y(t, e, n) {
    n == null
      ? t.removeAttribute(e)
      : t.getAttribute(e) !== n && t.setAttribute(e, n);
  }
  function Ge(t, e, n) {
    e in t
      ? (t[e] = typeof t[e] == "boolean" && n === "" ? !0 : n)
      : y(t, e, n);
  }
  function Gt(t) {
    return Array.from(t.childNodes);
  }
  function F(t, e) {
    (e = "" + e), t.wholeText !== e && (t.data = e);
  }
  function Ze(t, e) {
    t.value = e == null ? "" : e;
  }
  function we(t, e, n, r) {
    n === null
      ? t.style.removeProperty(e)
      : t.style.setProperty(e, n, r ? "important" : "");
  }
  let ke;
  function Zt() {
    if (ke === void 0) {
      ke = !1;
      try {
        typeof window != "undefined" && window.parent && window.parent.document;
      } catch (t) {
        ke = !0;
      }
    }
    return ke;
  }
  function Kt(t, e) {
    getComputedStyle(t).position === "static" &&
      (t.style.position = "relative");
    const r = S("iframe");
    r.setAttribute(
      "style",
      "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;",
    ),
      r.setAttribute("aria-hidden", "true"),
      (r.tabIndex = -1);
    const i = Zt();
    let o;
    return (
      i
        ? ((r.src =
            "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>"),
          (o = $(window, "message", (a) => {
            a.source === r.contentWindow && e();
          })))
        : ((r.src = "about:blank"),
          (r.onload = () => {
            o = $(r.contentWindow, "resize", e);
          })),
      P(t, r),
      () => {
        (i || (o && r.contentWindow)) && o(), v(r);
      }
    );
  }
  function ae(t, e, n) {
    t.classList[n ? "add" : "remove"](e);
  }
  function Ke(t) {
    const e = {};
    for (const n of t) e[n.name] = n.value;
    return e;
  }
  let he;
  function x(t) {
    he = t;
  }
  function De() {
    if (!he)
      throw new Error("Function called outside component initialization");
    return he;
  }
  function qt(t) {
    De().$$.on_mount.push(t);
  }
  const _e = [],
    je = [],
    Oe = [],
    qe = [],
    $e = Promise.resolve();
  let Ie = !1;
  function et() {
    Ie || ((Ie = !0), $e.then(W));
  }
  function $t() {
    return et(), $e;
  }
  function Pe(t) {
    Oe.push(t);
  }
  const Re = new Set();
  let Se = 0;
  function W() {
    const t = he;
    do {
      for (; Se < _e.length; ) {
        const e = _e[Se];
        Se++, x(e), en(e.$$);
      }
      for (x(null), _e.length = 0, Se = 0; je.length; ) je.pop()();
      for (let e = 0; e < Oe.length; e += 1) {
        const n = Oe[e];
        Re.has(n) || (Re.add(n), n());
      }
      Oe.length = 0;
    } while (_e.length);
    for (; qe.length; ) qe.pop()();
    (Ie = !1), Re.clear(), x(t);
  }
  function en(t) {
    if (t.fragment !== null) {
      t.update(), K(t.before_update);
      const e = t.dirty;
      (t.dirty = [-1]),
        t.fragment && t.fragment.p(t.ctx, e),
        t.after_update.forEach(Pe);
    }
  }
  const Me = new Set();
  let ee;
  function tn() {
    ee = { r: 0, c: [], p: ee };
  }
  function nn() {
    ee.r || K(ee.c), (ee = ee.p);
  }
  function tt(t, e) {
    t && t.i && (Me.delete(t), t.i(e));
  }
  function rn(t, e, n, r) {
    if (t && t.o) {
      if (Me.has(t)) return;
      Me.add(t),
        ee.c.push(() => {
          Me.delete(t), r && (n && t.d(1), r());
        }),
        t.o(e);
    }
  }
  function Ce(t, e) {
    const n = (e.token = {});
    function r(i, o, a, l) {
      if (e.token !== n) return;
      e.resolved = l;
      let s = e.ctx;
      a !== void 0 && ((s = s.slice()), (s[a] = l));
      const c = i && (e.current = i)(s);
      let u = !1;
      e.block &&
        (e.blocks
          ? e.blocks.forEach((f, _) => {
              _ !== o &&
                f &&
                (tn(),
                rn(f, 1, 1, () => {
                  e.blocks[_] === f && (e.blocks[_] = null);
                }),
                nn());
            })
          : e.block.d(1),
        c.c(),
        tt(c, 1),
        c.m(e.mount(), e.anchor),
        (u = !0)),
        (e.block = c),
        e.blocks && (e.blocks[o] = c),
        u && W();
    }
    if (Xt(t)) {
      const i = De();
      if (
        (t.then(
          (o) => {
            x(i), r(e.then, 1, e.value, o), x(null);
          },
          (o) => {
            if ((x(i), r(e.catch, 2, e.error, o), x(null), !e.hasCatch))
              throw o;
          },
        ),
        e.current !== e.pending)
      )
        return r(e.pending, 0), !0;
    } else {
      if (e.current !== e.then) return r(e.then, 1, e.value, t), !0;
      e.resolved = t;
    }
  }
  function nt(t, e, n) {
    const r = e.slice(),
      { resolved: i } = t;
    t.current === t.then && (r[t.value] = i),
      t.current === t.catch && (r[t.error] = i),
      t.block.p(r, n);
  }
  function on(t, e, n, r) {
    const { fragment: i, on_mount: o, on_destroy: a, after_update: l } = t.$$;
    i && i.m(e, n),
      r ||
        Pe(() => {
          const s = o.map(Ae).filter(be);
          a ? a.push(...s) : K(s), (t.$$.on_mount = []);
        }),
      l.forEach(Pe);
  }
  function an(t, e) {
    const n = t.$$;
    n.fragment !== null &&
      (K(n.on_destroy),
      n.fragment && n.fragment.d(e),
      (n.on_destroy = n.fragment = null),
      (n.ctx = []));
  }
  function ln(t, e) {
    t.$$.dirty[0] === -1 && (_e.push(t), et(), t.$$.dirty.fill(0)),
      (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
  }
  function rt(t, e, n, r, i, o, a, l = [-1]) {
    const s = he;
    x(t);
    const c = (t.$$ = {
      fragment: null,
      ctx: null,
      props: o,
      update: w,
      not_equal: i,
      bound: Xe(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(e.context || (s ? s.$$.context : [])),
      callbacks: Xe(),
      dirty: l,
      skip_bound: !1,
      root: e.target || s.$$.root,
    });
    a && a(c.root);
    let u = !1;
    if (
      ((c.ctx = n
        ? n(t, e.props || {}, (f, _, ...d) => {
            const p = d.length ? d[0] : _;
            return (
              c.ctx &&
                i(c.ctx[f], (c.ctx[f] = p)) &&
                (!c.skip_bound && c.bound[f] && c.bound[f](p), u && ln(t, f)),
              _
            );
          })
        : []),
      c.update(),
      (u = !0),
      K(c.before_update),
      (c.fragment = r ? r(c.ctx) : !1),
      e.target)
    ) {
      if (e.hydrate) {
        const f = Gt(e.target);
        c.fragment && c.fragment.l(f), f.forEach(v);
      } else c.fragment && c.fragment.c();
      e.intro && tt(t.$$.fragment),
        on(t, e.target, e.anchor, e.customElement),
        W();
    }
    x(s);
  }
  let We;
  typeof HTMLElement == "function" &&
    (We = class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        const { on_mount: t } = this.$$;
        this.$$.on_disconnect = t.map(Ae).filter(be);
        for (const e in this.$$.slotted) this.appendChild(this.$$.slotted[e]);
      }
      attributeChangedCallback(t, e, n) {
        this[t] = n;
      }
      disconnectedCallback() {
        K(this.$$.on_disconnect);
      }
      $destroy() {
        an(this, 1), (this.$destroy = w);
      }
      $on(t, e) {
        const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return (
          n.push(e),
          () => {
            const r = n.indexOf(e);
            r !== -1 && n.splice(r, 1);
          }
        );
      }
      $set(t) {
        this.$$set &&
          !Qt(t) &&
          ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
      }
    });
  function I(t, e, n) {
    return (
      (n = {
        path: e,
        exports: {},
        require: function (r, i) {
          return sn(r, i == null ? n.path : i);
        },
      }),
      t(n, n.exports),
      n.exports
    );
  }
  function sn() {
    throw new Error(
      "Dynamic requires are not currently supported by @rollup/plugin-commonjs",
    );
  }
  var cn = I(function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = i);
      var n = 6e4;
      function r(o) {
        return o.getTime() % n;
      }
      function i(o) {
        var a = new Date(o.getTime()),
          l = Math.ceil(a.getTimezoneOffset());
        a.setSeconds(0, 0);
        var s = l > 0,
          c = s ? (n + r(a)) % n : r(a);
        return l * n + c;
      }
      t.exports = e.default;
    }),
    pe = I(function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = n);
      function n(r, i) {
        if (i.length < r)
          throw new TypeError(
            r +
              " argument" +
              (r > 1 ? "s" : "") +
              " required, but only " +
              i.length +
              " present",
          );
      }
      t.exports = e.default;
    }),
    Le = I(function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = i);
      var n = r(pe);
      function r(o) {
        return o && o.__esModule ? o : { default: o };
      }
      function i(o) {
        (0, n.default)(1, arguments);
        var a = Object.prototype.toString.call(o);
        return o instanceof Date ||
          (typeof o == "object" && a === "[object Date]")
          ? new Date(o.getTime())
          : typeof o == "number" || a === "[object Number]"
          ? new Date(o)
          : ((typeof o == "string" || a === "[object String]") &&
              typeof console != "undefined" &&
              (console.warn(
                "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule",
              ),
              console.warn(new Error().stack)),
            new Date(NaN));
      }
      t.exports = e.default;
    }),
    un = I(function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = o);
      var n = i(Le),
        r = i(pe);
      function i(a) {
        return a && a.__esModule ? a : { default: a };
      }
      function o(a, l) {
        (0, r.default)(2, arguments);
        var s = (0, n.default)(a),
          c = (0, n.default)(l),
          u = s.getTime() - c.getTime();
        return u < 0 ? -1 : u > 0 ? 1 : u;
      }
      t.exports = e.default;
    }),
    fn = I(function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = o);
      var n = i(Le),
        r = i(pe);
      function i(a) {
        return a && a.__esModule ? a : { default: a };
      }
      function o(a, l) {
        (0, r.default)(2, arguments);
        var s = (0, n.default)(a),
          c = (0, n.default)(l);
        return s.getTime() - c.getTime();
      }
      t.exports = e.default;
    }),
    dn = I(function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = o);
      var n = i(fn),
        r = i(pe);
      function i(a) {
        return a && a.__esModule ? a : { default: a };
      }
      function o(a, l) {
        (0, r.default)(2, arguments);
        var s = (0, n.default)(a, l) / 1e3;
        return s > 0 ? Math.floor(s) : Math.ceil(s);
      }
      t.exports = e.default;
    }),
    mn = I(function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = n);
      function n(r, i) {
        if (r == null)
          throw new TypeError(
            "assign requires that input parameter not be null or undefined",
          );
        i = i || {};
        for (var o in i) i.hasOwnProperty(o) && (r[o] = i[o]);
        return r;
      }
      t.exports = e.default;
    }),
    hn = I(function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = i);
      var n = r(mn);
      function r(o) {
        return o && o.__esModule ? o : { default: o };
      }
      function i(o) {
        return (0, n.default)({}, o);
      }
      t.exports = e.default;
    }),
    _n = I(function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = r);
      var n = {
        lessThanXSeconds: {
          one: "less than a second",
          other: "less than {{count}} seconds",
        },
        xSeconds: { one: "1 second", other: "{{count}} seconds" },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
          one: "less than a minute",
          other: "less than {{count}} minutes",
        },
        xMinutes: { one: "1 minute", other: "{{count}} minutes" },
        aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
        xHours: { one: "1 hour", other: "{{count}} hours" },
        xDays: { one: "1 day", other: "{{count}} days" },
        aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
        xWeeks: { one: "1 week", other: "{{count}} weeks" },
        aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
        xMonths: { one: "1 month", other: "{{count}} months" },
        aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
        xYears: { one: "1 year", other: "{{count}} years" },
        overXYears: { one: "over 1 year", other: "over {{count}} years" },
        almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
      };
      function r(i, o, a) {
        a = a || {};
        var l;
        return (
          typeof n[i] == "string"
            ? (l = n[i])
            : o === 1
            ? (l = n[i].one)
            : (l = n[i].other.replace("{{count}}", o)),
          a.addSuffix ? (a.comparison > 0 ? "in " + l : l + " ago") : l
        );
      }
      t.exports = e.default;
    }),
    pn = I(function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = n);
      function n(r) {
        return function (i) {
          var o = i || {},
            a = o.width ? String(o.width) : r.defaultWidth,
            l = r.formats[a] || r.formats[r.defaultWidth];
          return l;
        };
      }
      t.exports = e.default;
    }),
    gn = I(function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = r(pn);
      function r(c) {
        return c && c.__esModule ? c : { default: c };
      }
      var i = {
          full: "EEEE, MMMM do, y",
          long: "MMMM do, y",
          medium: "MMM d, y",
          short: "MM/dd/yyyy",
        },
        o = {
          full: "h:mm:ss a zzzz",
          long: "h:mm:ss a z",
          medium: "h:mm:ss a",
          short: "h:mm a",
        },
        a = {
          full: "{{date}} 'at' {{time}}",
          long: "{{date}} 'at' {{time}}",
          medium: "{{date}}, {{time}}",
          short: "{{date}}, {{time}}",
        },
        l = {
          date: (0, n.default)({ formats: i, defaultWidth: "full" }),
          time: (0, n.default)({ formats: o, defaultWidth: "full" }),
          dateTime: (0, n.default)({ formats: a, defaultWidth: "full" }),
        },
        s = l;
      (e.default = s), (t.exports = e.default);
    }),
    bn = I(function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = r);
      var n = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: "P",
      };
      function r(i, o, a, l) {
        return n[i];
      }
      t.exports = e.default;
    }),
    vn = I(function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = n);
      function n(r) {
        return function (i, o) {
          var a = o || {},
            l = a.context ? String(a.context) : "standalone",
            s;
          if (l === "formatting" && r.formattingValues) {
            var c = r.defaultFormattingWidth || r.defaultWidth,
              u = a.width ? String(a.width) : c;
            s = r.formattingValues[u] || r.formattingValues[c];
          } else {
            var f = r.defaultWidth,
              _ = a.width ? String(a.width) : r.defaultWidth;
            s = r.values[_] || r.values[f];
          }
          var d = r.argumentCallback ? r.argumentCallback(i) : i;
          return s[d];
        };
      }
      t.exports = e.default;
    }),
    yn = I(function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = r(vn);
      function r(d) {
        return d && d.__esModule ? d : { default: d };
      }
      var i = {
          narrow: ["B", "A"],
          abbreviated: ["BC", "AD"],
          wide: ["Before Christ", "Anno Domini"],
        },
        o = {
          narrow: ["1", "2", "3", "4"],
          abbreviated: ["Q1", "Q2", "Q3", "Q4"],
          wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
        },
        a = {
          narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          abbreviated: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          wide: [
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
          ],
        },
        l = {
          narrow: ["S", "M", "T", "W", "T", "F", "S"],
          short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          wide: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
        },
        s = {
          narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
          },
          abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
          },
          wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
          },
        },
        c = {
          narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
          },
          abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
          },
          wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
          },
        };
      function u(d, p) {
        var m = Number(d),
          h = m % 100;
        if (h > 20 || h < 10)
          switch (h % 10) {
            case 1:
              return m + "st";
            case 2:
              return m + "nd";
            case 3:
              return m + "rd";
          }
        return m + "th";
      }
      var f = {
          ordinalNumber: u,
          era: (0, n.default)({ values: i, defaultWidth: "wide" }),
          quarter: (0, n.default)({
            values: o,
            defaultWidth: "wide",
            argumentCallback: function (d) {
              return Number(d) - 1;
            },
          }),
          month: (0, n.default)({ values: a, defaultWidth: "wide" }),
          day: (0, n.default)({ values: l, defaultWidth: "wide" }),
          dayPeriod: (0, n.default)({
            values: s,
            defaultWidth: "wide",
            formattingValues: c,
            defaultFormattingWidth: "wide",
          }),
        },
        _ = f;
      (e.default = _), (t.exports = e.default);
    }),
    wn = I(function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = n);
      function n(r) {
        return function (i, o) {
          var a = String(i),
            l = o || {},
            s = a.match(r.matchPattern);
          if (!s) return null;
          var c = s[0],
            u = a.match(r.parsePattern);
          if (!u) return null;
          var f = r.valueCallback ? r.valueCallback(u[0]) : u[0];
          return (
            (f = l.valueCallback ? l.valueCallback(f) : f),
            { value: f, rest: a.slice(c.length) }
          );
        };
      }
      t.exports = e.default;
    }),
    kn = I(function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = n);
      function n(o) {
        return function (a, l) {
          var s = String(a),
            c = l || {},
            u = c.width,
            f =
              (u && o.matchPatterns[u]) || o.matchPatterns[o.defaultMatchWidth],
            _ = s.match(f);
          if (!_) return null;
          var d = _[0],
            p =
              (u && o.parsePatterns[u]) || o.parsePatterns[o.defaultParseWidth],
            m;
          return (
            Object.prototype.toString.call(p) === "[object Array]"
              ? (m = i(p, function (h) {
                  return h.test(d);
                }))
              : (m = r(p, function (h) {
                  return h.test(d);
                })),
            (m = o.valueCallback ? o.valueCallback(m) : m),
            (m = c.valueCallback ? c.valueCallback(m) : m),
            { value: m, rest: s.slice(d.length) }
          );
        };
      }
      function r(o, a) {
        for (var l in o) if (o.hasOwnProperty(l) && a(o[l])) return l;
      }
      function i(o, a) {
        for (var l = 0; l < o.length; l++) if (a(o[l])) return l;
      }
      t.exports = e.default;
    }),
    On = I(function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = i(wn),
        r = i(kn);
      function i(M) {
        return M && M.__esModule ? M : { default: M };
      }
      var o = /^(\d+)(th|st|nd|rd)?/i,
        a = /\d+/i,
        l = {
          narrow: /^(b|a)/i,
          abbreviated:
            /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
          wide: /^(before christ|before common era|anno domini|common era)/i,
        },
        s = { any: [/^b/i, /^(a|c)/i] },
        c = {
          narrow: /^[1234]/i,
          abbreviated: /^q[1234]/i,
          wide: /^[1234](th|st|nd|rd)? quarter/i,
        },
        u = { any: [/1/i, /2/i, /3/i, /4/i] },
        f = {
          narrow: /^[jfmasond]/i,
          abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
          wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
        },
        _ = {
          narrow: [
            /^j/i,
            /^f/i,
            /^m/i,
            /^a/i,
            /^m/i,
            /^j/i,
            /^j/i,
            /^a/i,
            /^s/i,
            /^o/i,
            /^n/i,
            /^d/i,
          ],
          any: [
            /^ja/i,
            /^f/i,
            /^mar/i,
            /^ap/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^au/i,
            /^s/i,
            /^o/i,
            /^n/i,
            /^d/i,
          ],
        },
        d = {
          narrow: /^[smtwf]/i,
          short: /^(su|mo|tu|we|th|fr|sa)/i,
          abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
          wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
        },
        p = {
          narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
          any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
        },
        m = {
          narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
          any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
        },
        h = {
          any: {
            am: /^a/i,
            pm: /^p/i,
            midnight: /^mi/i,
            noon: /^no/i,
            morning: /morning/i,
            afternoon: /afternoon/i,
            evening: /evening/i,
            night: /night/i,
          },
        },
        O = {
          ordinalNumber: (0, n.default)({
            matchPattern: o,
            parsePattern: a,
            valueCallback: function (M) {
              return parseInt(M, 10);
            },
          }),
          era: (0, r.default)({
            matchPatterns: l,
            defaultMatchWidth: "wide",
            parsePatterns: s,
            defaultParseWidth: "any",
          }),
          quarter: (0, r.default)({
            matchPatterns: c,
            defaultMatchWidth: "wide",
            parsePatterns: u,
            defaultParseWidth: "any",
            valueCallback: function (M) {
              return M + 1;
            },
          }),
          month: (0, r.default)({
            matchPatterns: f,
            defaultMatchWidth: "wide",
            parsePatterns: _,
            defaultParseWidth: "any",
          }),
          day: (0, r.default)({
            matchPatterns: d,
            defaultMatchWidth: "wide",
            parsePatterns: p,
            defaultParseWidth: "any",
          }),
          dayPeriod: (0, r.default)({
            matchPatterns: m,
            defaultMatchWidth: "any",
            parsePatterns: h,
            defaultParseWidth: "any",
          }),
        },
        R = O;
      (e.default = R), (t.exports = e.default);
    }),
    Pn = I(function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = l(_n),
        r = l(gn),
        i = l(bn),
        o = l(yn),
        a = l(On);
      function l(u) {
        return u && u.__esModule ? u : { default: u };
      }
      var s = {
          code: "en-US",
          formatDistance: n.default,
          formatLong: r.default,
          formatRelative: i.default,
          localize: o.default,
          match: a.default,
          options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
        },
        c = s;
      (e.default = c), (t.exports = e.default);
    }),
    Sn = I(function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = d);
      var n = c(cn),
        r = c(un),
        i = c(Le),
        o = c(dn),
        a = c(hn),
        l = c(Pn),
        s = c(pe);
      function c(p) {
        return p && p.__esModule ? p : { default: p };
      }
      var u = 1440,
        f = 43200,
        _ = 525600;
      function d(p, m, h) {
        (0, s.default)(2, arguments);
        var O = h || {},
          R = O.locale || l.default;
        if (!R.formatDistance)
          throw new RangeError(
            "locale must contain localize.formatDistance property",
          );
        var M = (0, r.default)(p, m);
        if (isNaN(M)) throw new RangeError("Invalid time value");
        var E = (0, a.default)(O);
        (E.addSuffix = Boolean(O.addSuffix)), (E.comparison = M);
        var N, C;
        M > 0
          ? ((N = (0, i.default)(m)), (C = (0, i.default)(p)))
          : ((N = (0, i.default)(p)), (C = (0, i.default)(m)));
        var U = O.roundingMethod == null ? "round" : String(O.roundingMethod),
          k;
        if (U === "floor") k = Math.floor;
        else if (U === "ceil") k = Math.ceil;
        else if (U === "round") k = Math.round;
        else
          throw new RangeError(
            "roundingMethod must be 'floor', 'ceil' or 'round'",
          );
        var D = (0, o.default)(C, N),
          ce = ((0, n.default)(C) - (0, n.default)(N)) / 1e3,
          J = k((D - ce) / 60),
          L;
        if (
          (O.unit == null
            ? J < 1
              ? (L = "second")
              : J < 60
              ? (L = "minute")
              : J < u
              ? (L = "hour")
              : J < f
              ? (L = "day")
              : J < _
              ? (L = "month")
              : (L = "year")
            : (L = String(O.unit)),
          L === "second")
        )
          return R.formatDistance("xSeconds", D, E);
        if (L === "minute") return R.formatDistance("xMinutes", J, E);
        if (L === "hour") {
          var z = k(J / 60);
          return R.formatDistance("xHours", z, E);
        } else if (L === "day") {
          var B = k(J / u);
          return R.formatDistance("xDays", B, E);
        } else if (L === "month") {
          var re = k(J / f);
          return R.formatDistance("xMonths", re, E);
        } else if (L === "year") {
          var ue = k(J / _);
          return R.formatDistance("xYears", ue, E);
        }
        throw new RangeError(
          "unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'",
        );
      }
      t.exports = e.default;
    });
  const le = [];
  function Mn(t, e) {
    return { subscribe: te(t, e).subscribe };
  }
  function te(t, e = w) {
    let n;
    const r = new Set();
    function i(l) {
      if (Be(t, l) && ((t = l), n)) {
        const s = !le.length;
        for (const c of r) c[1](), le.push(c, t);
        if (s) {
          for (let c = 0; c < le.length; c += 2) le[c][0](le[c + 1]);
          le.length = 0;
        }
      }
    }
    function o(l) {
      i(l(t));
    }
    function a(l, s = w) {
      const c = [l, s];
      return (
        r.add(c),
        r.size === 1 && (n = e(i) || w),
        l(t),
        () => {
          r.delete(c), r.size === 0 && (n(), (n = null));
        }
      );
    }
    return { set: i, update: o, subscribe: a };
  }
  function Cn(t, e, n) {
    const r = !Array.isArray(t),
      i = r ? [t] : t,
      o = e.length < 2;
    return Mn(n, (a) => {
      let l = !1;
      const s = [];
      let c = 0,
        u = w;
      const f = () => {
          if (c) return;
          u();
          const d = e(r ? s[0] : s, a);
          o ? a(d) : (u = be(d) ? d : w);
        },
        _ = i.map((d, p) =>
          Qe(
            d,
            (m) => {
              (s[p] = m), (c &= ~(1 << p)), l && f();
            },
            () => {
              c |= 1 << p;
            },
          ),
        );
      return (
        (l = !0),
        f(),
        function () {
          K(_), u();
        }
      );
    });
  }
  function En() {
    return te({});
  }
  const ze = En();
  var Nn = Object.defineProperty,
    Tn = Object.defineProperties,
    An = Object.getOwnPropertyDescriptors,
    it = Object.getOwnPropertySymbols,
    Dn = Object.prototype.hasOwnProperty,
    jn = Object.prototype.propertyIsEnumerable,
    ot = (t, e, n) =>
      e in t
        ? Nn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (t[e] = n),
    In = (t, e) => {
      for (var n in e || (e = {})) Dn.call(e, n) && ot(t, n, e[n]);
      if (it) for (var n of it(e)) jn.call(e, n) && ot(t, n, e[n]);
      return t;
    },
    Rn = (t, e) => Tn(t, An(e));
  async function Y(t) {
    var e;
    if (!t.ok) {
      const n = await t.json().then((o) => o),
        r =
          ((e = n == null ? void 0 : n.response) == null ? void 0 : e.error) ||
          (n == null ? void 0 : n.message),
        i = new Error(r);
      return (
        (i.name = n.name), Promise.reject({ message: i, statusCode: t.status })
      );
    }
    return t.json();
  }
  function V(t = { component_id: "" }) {
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
  function Q(t, e) {
    throw (console.error(e), ze.update((n) => Rn(In({}, n), { [t]: e })), e);
  }
  const at = { "001": "", "002": "ireland-", "003": "canada-" };
  function X(t) {
    let e = "";
    if (t.substring(3, 4) === "-") {
      const r = t.substring(0, 3);
      typeof at[r] != "undefined" && (e = at[r]);
    }
    return `https://${e}web-components.nylas.com/middleware`;
  }
  function se(t) {}
  function Wn(t) {
    return Object.keys(t)
      .reduce(
        (e, n) => (t[n] !== void 0 && e.append(n, t[n]), e),
        new URLSearchParams(),
      )
      .toString();
  }
  const Ln = async (t, e) => {
      const n = `${X(t.component_id)}/contact-list/contacts?${Wn(e)}`,
        r = await fetch(
          n,
          V({ component_id: t.component_id, access_token: t.access_token }),
        )
          .then((i) => Y(i))
          .then((i) => i.response)
          .catch((i) => Q(t.component_id, i));
      return r != null ? r : [];
    },
    zn = async (t) => {
      const e = await fetch(
        `${X(t.component_id)}/contacts${t.query}`,
        V({ component_id: t.component_id, access_token: t.access_token }),
      )
        .then((n) => Y(n))
        .then((n) => n.response)
        .catch((n) => Q(t.component_id, n));
      return e != null ? e : [];
    },
    lt = async (t, e) =>
      await fetch(
        `${X(t.component_id)}/contacts/${e}/picture`,
        V({ component_id: t.component_id, access_token: t.access_token }),
      )
        .then((n) => Y(n))
        .then((n) => n.response)
        .catch((n) => Q(t.component_id, n));
  var Jn = Object.defineProperty,
    Fn = Object.defineProperties,
    Hn = Object.getOwnPropertyDescriptors,
    st = Object.getOwnPropertySymbols,
    Un = Object.prototype.hasOwnProperty,
    Yn = Object.prototype.propertyIsEnumerable,
    ct = (t, e, n) =>
      e in t
        ? Jn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (t[e] = n),
    ut = (t, e) => {
      for (var n in e || (e = {})) Un.call(e, n) && ct(t, n, e[n]);
      if (st) for (var n of st(e)) Yn.call(e, n) && ct(t, n, e[n]);
      return t;
    },
    ft = (t, e) => Fn(t, Hn(e));
  const dt = (t, e, n) => {
    if (t.thread_ids) {
      const i = t.thread_ids.slice(n, n + e);
      return Promise.all(
        i.map(async (o) => {
          const a = `${X(t.component_id)}/threads/${o}?view=expanded`;
          return await fetch(a, V(t))
            .then((l) => Y(l))
            .then((l) => l.response)
            .then((l) =>
              ft(ut({}, l), {
                messages: l.messages.filter(
                  (s) => s.from.length !== 0 || s.to.length !== 0,
                ),
              }),
            )
            .catch((l) => Q(t.component_id, l));
        }),
      );
    }
    let r = `${X(
      t.component_id,
    )}/threads?view=expanded&not_in=trash&limit=${e}&offset=${n}`;
    return (
      t.query &&
        Object.entries(t.query).forEach(
          (i) => (r = r.concat(`&${i[0]}=${i[1]}`)),
        ),
      fetch(r, V(t))
        .then((i) => Y(i))
        .then((i) => i.response)
        .then((i) =>
          i.map((o) =>
            ft(ut({}, o), {
              messages: o.messages.filter(
                (a) => a.from.length !== 0 || a.to.length !== 0,
              ),
            }),
          ),
        )
        .catch((i) => Q(t.component_id, i))
    );
  };
  function mt(t) {
    let e = `${X(
      t.component_id,
    )}/threads?view=expanded&not_in=trash&view=count`;
    return (
      t.query &&
        Object.entries(t.query).forEach(
          (n) => (e = e.concat(`&${n[0]}=${n[1]}`)),
        ),
      t.keywordToSearch && (e += `&q=${t.keywordToSearch}`),
      fetch(e, V(t))
        .then((n) => Y(n))
        .then((n) => n.response.count)
    );
  }
  const Vn = (t) => {
      const e = `${X(t.component_id)}/threads/search?q=${
        t.keywordToSearch
      }&view=expanded&limit=${t.query.limit}&offset=${t.query.offset}`;
      return fetch(e, V(t))
        .then(async (n) => Y(n))
        .then((n) => n.response)
        .catch((n) => Q(t.component_id, n));
    },
    Xn = (t, e) =>
      fetch(
        `${X(t.component_id)}/threads/${e.id}`,
        V({
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
        .then((n) => Y(n))
        .then((n) => n.response)
        .catch((n) => Q(t.component_id, n)),
    Bn = async (t, e) =>
      await fetch(`${X(t)}/manifest`, V({ access_token: e, component_id: t }))
        .then(Y)
        .then((n) => n.component.theming)
        .catch((n) => Q(t, n));
  var Qn = Object.defineProperty,
    ht = Object.getOwnPropertySymbols,
    xn = Object.prototype.hasOwnProperty,
    Gn = Object.prototype.propertyIsEnumerable,
    _t = (t, e, n) =>
      e in t
        ? Qn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (t[e] = n),
    pt = (t, e) => {
      for (var n in e || (e = {})) xn.call(e, n) && _t(t, n, e[n]);
      if (ht) for (var n of ht(e)) Gn.call(e, n) && _t(t, n, e[n]);
      return t;
    };
  const Zn = async (t) =>
      fetch(
        `${X(t.component_id)}/calendars/availability`,
        V({
          method: "POST",
          component_id: t.component_id,
          access_token: t.access_token,
          body: t.body,
        }),
      )
        .then(async (e) => {
          const n = await Y(e);
          return (
            (n.response.time_slots = n.response.time_slots.map(
              (r) => (
                (r.start_time = r.start || 0),
                (r.end_time = r.end || 0),
                delete r.start,
                delete r.end,
                r
              ),
            )),
            n.response
          );
        })
        .catch((e) => Q(t.component_id, e)),
    Kn = async (t) =>
      fetch(
        `${X(t.component_id)}/calendars/availability/consecutive`,
        V({
          method: "POST",
          component_id: t.component_id,
          access_token: t.access_token,
          body: t.body,
        }),
      )
        .then(async (e) => {
          var n;
          const i =
              ((n = (await Y(e)).response) == null
                ? void 0
                : n.map(
                    (l) => (
                      (l = l.map(
                        (s) => (
                          (s.start_time = new Date(s.start_time * 1e3)),
                          (s.end_time = new Date(s.end_time * 1e3)),
                          s
                        ),
                      )),
                      l
                    ),
                  )) || [],
            o = qn(i, t.body.events);
          return $n(o);
        })
        .catch((e) => Q(t.component_id, e));
  function qn(t, e) {
    return t.map((n) =>
      n.map((r) =>
        pt(
          pt({}, r),
          e.find(
            (i) =>
              i.participantEmails.length === r.emails.length &&
              i.participantEmails.every((o) => r.emails.includes(o)),
          ),
        ),
      ),
    );
  }
  function $n(t) {
    const e = new Set();
    return t.filter((n) => {
      const r = `${n[0].start_time}_${n[n.length - 1].end_time}`;
      return e.has(r) ? !1 : (e.add(r), !0);
    });
  }
  var er = Object.defineProperty,
    gt = Object.getOwnPropertySymbols,
    tr = Object.prototype.hasOwnProperty,
    nr = Object.prototype.propertyIsEnumerable,
    bt = (t, e, n) =>
      e in t
        ? er(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (t[e] = n),
    rr = (t, e) => {
      for (var n in e || (e = {})) tr.call(e, n) && bt(t, n, e[n]);
      if (gt) for (var n of gt(e)) nr.call(e, n) && bt(t, n, e[n]);
      return t;
    };
  function ir() {
    const t = (n, r) => {
        var i, o;
        const a = JSON.parse(r),
          l = rr({}, a);
        if (
          (delete l.forceReload,
          (r = JSON.stringify(l)),
          !(
            !a.component_id ||
            !((i = a == null ? void 0 : a.body) == null
              ? void 0
              : i.start_time) ||
            !((o = a == null ? void 0 : a.body) == null ? void 0 : o.end_time)
          ))
        ) {
          if (!n[r] || a.forceReload) {
            const s = Zn(a);
            e.update((c) => ((c[r] = s), c)), (n[r] = s);
          }
          return n[r];
        }
      },
      e = te(new Proxy({}, { get: t }));
    return e;
  }
  ir();
  function or() {
    const t = (n, r) => {
        var i, o;
        const a = JSON.parse(r);
        if (
          !(
            !a.component_id ||
            !((i = a == null ? void 0 : a.body) == null
              ? void 0
              : i.start_time) ||
            !((o = a == null ? void 0 : a.body) == null ? void 0 : o.end_time)
          )
        ) {
          if (!n[r]) {
            const l = Kn(a);
            e.update((s) => ((s[r] = l), s)), (n[r] = l);
          }
          return n[r];
        }
      },
      e = te(new Proxy({}, { get: t }));
    return e;
  }
  or();
  var ar = Object.defineProperty,
    vt = Object.getOwnPropertySymbols,
    lr = Object.prototype.hasOwnProperty,
    sr = Object.prototype.propertyIsEnumerable,
    yt = (t, e, n) =>
      e in t
        ? ar(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (t[e] = n),
    wt = (t, e) => {
      for (var n in e || (e = {})) lr.call(e, n) && yt(t, n, e[n]);
      if (vt) for (var n of vt(e)) sr.call(e, n) && yt(t, n, e[n]);
      return t;
    };
  let H = {};
  function kt(t) {
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
  function cr() {
    const { subscribe: t, set: e, update: n } = te({});
    return {
      subscribe: t,
      addContacts: async (r, i) => {
        var o;
        const a = JSON.stringify(r);
        if (!H[a] && (r.component_id || r.access_token)) {
          i.offset === 0 && Je.reset();
          const l =
            (o = await Ln(r, i)
              .then((s) => kt(s))
              .catch(() => [])) != null
              ? o
              : [];
          return (
            (H[a] = H[a] ? [...H[a], ...l] : l),
            n((s) => ((s[a] = H[a]), wt({}, s))),
            H[a]
          );
        }
      },
      addContact: async (r) => {
        var i;
        const o = JSON.stringify(r);
        if (!H[o] && (r.component_id || r.access_token)) {
          const a =
            (i = await zn(r)
              .then((l) => kt(l))
              .catch(() => [])) != null
              ? i
              : [];
          (H[o] = H[o] ? [...H[o], ...a] : a),
            n((l) => ((l[o] = H[o]), wt({}, l)));
        }
        return H[o];
      },
      reset: () => {
        (H = {}), e({});
      },
    };
  }
  const Je = cr();
  var ur = Object.defineProperty,
    Ot = Object.getOwnPropertySymbols,
    fr = Object.prototype.hasOwnProperty,
    dr = Object.prototype.propertyIsEnumerable,
    Pt = (t, e, n) =>
      e in t
        ? ur(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (t[e] = n),
    ne = (t, e) => {
      for (var n in e || (e = {})) fr.call(e, n) && Pt(t, n, e[n]);
      if (Ot) for (var n of Ot(e)) dr.call(e, n) && Pt(t, n, e[n]);
      return t;
    };
  async function St(t) {
    const e = [];
    for (let n = 0; n < t; n++) e.push({ isLoaded: !1, threads: [] });
    return e;
  }
  function mr() {
    const { subscribe: t, set: e, update: n } = te({});
    let r = {},
      i;
    return {
      subscribe: t,
      set: e,
      getThreads: async (o, a, l, s = !1) => {
        const c = JSON.stringify(o);
        if (!o.component_id && !o.access_token) return [];
        if (i === void 0 || s) {
          const u = o.thread_ids ? o.thread_ids.length : await mt(o).catch(se);
          u && (i = u);
        }
        if (!Array.isArray(r[c]) || s) {
          const u = Math.ceil(i / l);
          r[c] = await St(u);
        }
        if (typeof r[c][a] == "undefined") return [];
        if (!r[c][a].isLoaded) {
          const u = await dt(o, l, a * l).catch(se);
          u && ((r[c][a].threads = u), (r[c][a].isLoaded = !0));
        }
        return n((u) => ((u[c] = r[c]), ne({}, u))), r[c][a].threads;
      },
      getNumberOfItems: async (o) => {
        if (!o.component_id && !o.access_token) return 0;
        if (typeof i == "undefined") {
          const a = await mt(o).catch(se);
          a && (i = a);
        }
        return i;
      },
      getThreadsWithSearchKeyword: async (o, a = !1) => {
        if (!o.component_id && !o.access_token) return [];
        const l = JSON.stringify(o);
        if (
          ((!Array.isArray(r[l]) || a) && (r[l] = await St(1)),
          !r[l][0].isLoaded || a)
        ) {
          const s = await Vn(o).catch(se);
          s && ((r[l][0].threads = s), (r[l][0].isLoaded = !0));
        }
        return n((s) => ((s[l] = r[l]), ne({}, s))), r[l][0].threads;
      },
      updateThread: async (o, a, l, s, c) => {
        const u = await Xn(o, l).catch(se);
        if (!r[a][s].isLoaded) {
          const f = await dt(JSON.parse(a), c, s * c).catch(se);
          f && ((r[a][s].threads = f), (r[a][s].isLoaded = !0));
        }
        return (
          (r[a][s].threads = r[a][s].threads.map(
            (f) => (u && f.id === u.id && (f = Object.assign(f, u)), f),
          )),
          n((f) => ((f[a] = r[a]), ne({}, f))),
          r[a][s].threads
        );
      },
      updateThreadSelection: (o, a, l) => {
        const s = r[o][a].threads;
        if (l) {
          const c = s.find((u) => u.id === l);
          c && (c.selected = !c.selected);
        } else {
          const c = s.some((u) => u.selected);
          for (const u of s) u.selected = !c;
        }
        return n((c) => ((c[o] = r[o]), ne({}, c))), r[o][a].threads;
      },
      reset: () => {
        (r = {}), e({});
      },
      hydrateMessageInThread: (o, a, l) => {
        var s, c, u;
        const f = JSON.stringify(a),
          _ =
            (c = (s = r[f][l]) == null ? void 0 : s.threads) == null
              ? void 0
              : c.find((d) => d.id === o.thread_id);
        if (_) {
          const d =
            (u = _.messages) == null ? void 0 : u.find((p) => p.id === o.id);
          d
            ? ((d.body = o.body),
              n((p) => {
                if (o.thread_id) {
                  let m = p[f][l].threads.find((h) => h.id === _.id);
                  m && (m = JSON.parse(JSON.stringify(_)));
                }
                return ne({}, p);
              }))
            : n((p) => {
                if (o.thread_id) {
                  let m = p[f][l].threads.find((h) => h.id === _.id);
                  if (m) {
                    const h = _.messages;
                    h.push(o),
                      (_.messages = h),
                      (_.snippet = o.snippet),
                      (_.drafts = _.drafts.filter((O) => O.id !== o.id)),
                      (m = JSON.parse(JSON.stringify(_)));
                  }
                }
                return ne({}, p);
              });
        }
        return r[f][l].threads;
      },
      hydrateDraftInThread: (o, a, l) => {
        var s, c, u;
        const f = JSON.stringify(a),
          _ =
            (c = (s = r[f][l]) == null ? void 0 : s.threads) == null
              ? void 0
              : c.find((d) => d.id === o.thread_id);
        if (_) {
          const d =
            (u = _.drafts) == null ? void 0 : u.find((p) => p.id === o.id);
          if (o.thread_id) {
            if (d) Object.assign(d, o);
            else {
              const p = _.drafts;
              p.push(o), (_.drafts = p);
            }
            n((p) => {
              let m = p[f][l].threads.find((h) => h.id === _.id);
              return m && (m = JSON.parse(JSON.stringify(_))), ne({}, p);
            });
          }
        }
        return r[f][l].threads;
      },
    };
  }
  const hr = mr();
  Cn(hr, (t) => {
    const e = {};
    return (
      Object.entries(t).forEach(
        ([n, r]) => (e[n] = r.map((i) => i.threads).flat()),
      ),
      e
    );
  });
  function _r() {
    const t = (n, r) => {
        const i = JSON.parse(r);
        if (!!i.component_id) {
          if (!n[r]) {
            const o = Bn(i.component_id, i.access_token);
            e.update((a) => ((a[r] = o), a)), (n[r] = o);
          }
          return n[r];
        }
      },
      e = te(new Proxy({}, { get: t }));
    return e;
  }
  const pr = _r();
  function gr(t) {
    return (e, n) => {
      t.dispatchEvent &&
        t.dispatchEvent(new CustomEvent(e, { detail: n, composed: !0 }));
    };
  }
  function br(t, e) {
    let n;
    return () => {
      n && clearTimeout(n), (n = setTimeout(t, e));
    };
  }
  function Fe(t, e, n) {
    return new Proxy(t, {
      get: (r, i) =>
        i === "toString" || i === "toJSON"
          ? () => JSON.stringify(r)
          : Reflect.get(r, i) !== void 0
          ? Mt(Reflect.get(r, i), n[i])
          : e && i in e
          ? Mt(e[i], n[i])
          : n[i],
      ownKeys: (r) => {
        const i = new Set([
          ...Reflect.ownKeys(r),
          ...Object.keys(e),
          ...Object.keys(n),
        ]);
        return Array.from(i);
      },
      getOwnPropertyDescriptor: (r, i) => {
        var o, a;
        let l = Reflect.getOwnPropertyDescriptor(r, i);
        return (
          l ||
            ((l =
              (a =
                (o = e && Object.getOwnPropertyDescriptor(e, i)) != null
                  ? o
                  : n && Object.getOwnPropertyDescriptor(n, i)) != null
                ? a
                : { configurable: !0, enumerable: !0, writable: !0 }),
            Reflect.defineProperty(r, i, l)),
          l
        );
      },
    });
  }
  function Mt(t, e) {
    if (t) {
      if (typeof e == "boolean") return vr(t);
      if (typeof e == "number") return Number(t);
      if (e instanceof Date) return new Date(t);
    }
    return t === void 0 ? (e != null ? e : null) : t;
  }
  function vr(t) {
    return [!0, "true", "1"].includes(t);
  }
  function Ct(t) {
    let e, n, r, i, o, a;
    function l(u, f) {
      if (u[2] === "HostDomainNotAllowedError") return wr;
      if (u[2] === "IncompatibleProperties") return yr;
    }
    let s = l(t),
      c = s && s(t);
    return {
      c() {
        var u, f;
        (e = S("div")),
          c && c.c(),
          (n = j()),
          (r = S("span")),
          (r.textContent = "Debug info:"),
          (i = j()),
          (o = S("textarea")),
          y(r, "class", "details"),
          y(o, "class", "details"),
          (o.readOnly = !0),
          (o.value = a =
            `
      ` +
            t[2] +
            ": " +
            t[0] +
            `
      ` +
            ((f = (u = t[1].message) == null ? void 0 : u.message) != null
              ? f
              : "") +
            `
    `),
          y(e, "class", "message-container");
      },
      m(u, f) {
        b(u, e, f), c && c.m(e, null), P(e, n), P(e, r), P(e, i), P(e, o);
      },
      p(u, f) {
        var _, d;
        s === (s = l(u)) && c
          ? c.p(u, f)
          : (c && c.d(1), (c = s && s(u)), c && (c.c(), c.m(e, n))),
          f & 7 &&
            a !==
              (a =
                `
      ` +
                u[2] +
                ": " +
                u[0] +
                `
      ` +
                ((d = (_ = u[1].message) == null ? void 0 : _.message) != null
                  ? d
                  : "") +
                `
    `) &&
            (o.value = a);
      },
      d(u) {
        u && v(e), c && c.d();
      },
    };
  }
  function yr(t) {
    let e;
    return {
      c() {
        (e = S("h3")),
          (e.textContent =
            "Your component properties do not work with each other.");
      },
      m(n, r) {
        b(n, e, r);
      },
      p: w,
      d(n) {
        n && v(e);
      },
    };
  }
  function wr(t) {
    let e, n, r, i, o, a;
    return {
      c() {
        (e = S("h3")),
          (n = A(`You are trying to access this component from\xA0
        `)),
          (r = S("code")),
          (r.textContent = `${window.location.hostname}`),
          (i = A(`. The component's settings do not
        allow access from this domain.`)),
          (o = j()),
          (a = S("h4")),
          (a.innerHTML = `The list of allowed domains can be modified in your\xA0
        <a href="https://dashboard.nylas.com">Dashboard</a>.`);
      },
      m(l, s) {
        b(l, e, s), P(e, n), P(e, r), P(e, i), b(l, o, s), b(l, a, s);
      },
      p: w,
      d(l) {
        l && v(e), l && v(o), l && v(a);
      },
    };
  }
  function kr(t) {
    let e,
      n = t[2] && t[3] && Ct(t);
    return {
      c() {
        n && n.c(), (e = me()), (this.c = w);
      },
      m(r, i) {
        n && n.m(r, i), b(r, e, i);
      },
      p(r, [i]) {
        r[2] && r[3]
          ? n
            ? n.p(r, i)
            : ((n = Ct(r)), n.c(), n.m(e.parentNode, e))
          : n && (n.d(1), (n = null));
      },
      i: w,
      o: w,
      d(r) {
        n && n.d(r), r && v(e);
      },
    };
  }
  function Or(t, e, n) {
    let r;
    ye(t, ze, (_) => n(8, (r = _)));
    var i, o, a, l;
    let { id: s } = e,
      c,
      u;
    const f =
      window.location.href.includes("localhost") ||
      window.location.href.includes("127.0.0.1");
    return (
      (t.$$set = (_) => {
        "id" in _ && n(0, (s = _.id));
      }),
      (t.$$.update = () => {
        t.$$.dirty & 499 &&
          (n(
            1,
            (c = n(4, (i = r[s])) !== null && i !== void 0 ? i : { name: "" }),
          ),
          n(
            2,
            (u =
              n(
                7,
                (l =
                  n(5, (o = c.name)) !== null && o !== void 0
                    ? o
                    : n(6, (a = c.message)) === null || a === void 0
                    ? void 0
                    : a.name),
              ) !== null && l !== void 0
                ? l
                : ""),
          ));
      }),
      [s, c, u, f, i, o, a, l, r]
    );
  }
  class Pr extends We {
    constructor(e) {
      super();
      (this.shadowRoot.innerHTML = `<style>.message-container{background:#fff6f6;border-radius:5px;box-shadow:0 0 0 1px #aa92a0 inset, 0 0 0 0 transparent;color:#9f3a38;font-size:1.25rem;padding:10px;margin:0 auto;transition:opacity 500ms ease, color 500ms ease,
      background-color 500ms ease, box-shadow 500ms ease,
      -webkit-box-shadow 500ms ease}.message-container *:focus{outline:5px auto Highlight;outline:5px auto -webkit-focus-ring-color}.details{color:#494949;font-size:0.75rem;width:100%}</style>`),
        rt(
          this,
          {
            target: this.shadowRoot,
            props: Ke(this.attributes),
            customElement: !0,
          },
          Or,
          kr,
          Bt,
          { id: 0 },
          null,
        ),
        e &&
          (e.target && b(e.target, this, e.anchor),
          e.props && (this.$set(e.props), W()));
    }
    static get observedAttributes() {
      return ["id"];
    }
    get id() {
      return this.$$.ctx[0];
    }
    set id(e) {
      this.$$set({ id: e }), W();
    }
  }
  customElements.define("nylas-error", Pr);
  const Sr = {
    last_emailed: (t, e) =>
      (e.last_contacted_date || 0) - (t.last_contacted_date || 0),
    name: (t, e) =>
      (t.given_name || t.emails[0].email).localeCompare(
        e.given_name || e.emails[0].email,
      ),
  };
  function Et(t, e, n) {
    const r = t.slice();
    return (r[50] = e[n]), (r[51] = e), (r[52] = n), r;
  }
  function Nt(t) {
    let e;
    return {
      c() {
        (e = S("link")), y(e, "rel", "stylesheet"), y(e, "href", t[9]);
      },
      m(n, r) {
        b(n, e, r);
      },
      p(n, r) {
        r[0] & 512 && y(e, "href", n[9]);
      },
      d(n) {
        n && v(e);
      },
    };
  }
  function Mr(t) {
    let e;
    return {
      c() {
        (e = S("div")),
          (e.innerHTML = `<p>Enter contacts using the
        <code>contacts</code>
        prop or sync a Nylas account in the Dashboard.</p> 
      <p>See our <a href="https://docs.nylas.com/docs/contact-list-component" target="_blank">Docs</a>
        for more details.</p>`),
          y(e, "class", "empty-state");
      },
      m(n, r) {
        b(n, e, r);
      },
      d(n) {
        n && v(e);
      },
    };
  }
  function Cr(t) {
    let e;
    return {
      c() {
        (e = S("div")), y(e, "class", "loader");
      },
      m(n, r) {
        b(n, e, r);
      },
      d(n) {
        n && v(e);
      },
    };
  }
  function Er(t) {
    return { c: w, m: w, p: w, d: w };
  }
  function Nr(t) {
    let e,
      n,
      r,
      i = t[8] === "loading" && t[49].length >= t[2].contacts_to_load && Tt(t),
      o = t[2].show_filter && t[8] !== "loading" && At(t),
      a = t[49],
      l = [];
    for (let s = 0; s < a.length; s += 1) l[s] = Ft(Et(t, a, s));
    return {
      c() {
        i && i.c(), (e = j()), o && o.c(), (n = j()), (r = S("ul"));
        for (let s = 0; s < l.length; s += 1) l[s].c();
        y(r, "class", "contacts");
      },
      m(s, c) {
        i && i.m(s, c), b(s, e, c), o && o.m(s, c), b(s, n, c), b(s, r, c);
        for (let u = 0; u < l.length; u += 1) l[u].m(r, null);
      },
      p(s, c) {
        if (
          (s[8] === "loading" && s[49].length >= s[2].contacts_to_load
            ? i
              ? i.p(s, c)
              : ((i = Tt(s)), i.c(), i.m(e.parentNode, e))
            : i && (i.d(1), (i = null)),
          s[2].show_filter && s[8] !== "loading"
            ? o
              ? o.p(s, c)
              : ((o = At(s)), o.c(), o.m(n.parentNode, n))
            : o && (o.d(1), (o = null)),
          c[0] & 5140)
        ) {
          a = s[49];
          let u;
          for (u = 0; u < a.length; u += 1) {
            const f = Et(s, a, u);
            l[u] ? l[u].p(f, c) : ((l[u] = Ft(f)), l[u].c(), l[u].m(r, null));
          }
          for (; u < l.length; u += 1) l[u].d(1);
          l.length = a.length;
        }
      },
      d(s) {
        i && i.d(s), s && v(e), o && o.d(s), s && v(n), s && v(r), xt(l, s);
      },
    };
  }
  function Tt(t) {
    let e, n;
    return {
      c() {
        (e = S("span")),
          (n = A("Loading More Contacts")),
          y(e, "class", "loading"),
          we(e, "--height", t[6] + "px"),
          we(e, "--width", t[7] + "px");
      },
      m(r, i) {
        b(r, e, i), P(e, n);
      },
      p(r, i) {
        i[0] & 64 && we(e, "--height", r[6] + "px"),
          i[0] & 128 && we(e, "--width", r[7] + "px");
      },
      d(r) {
        r && v(e);
      },
    };
  }
  function At(t) {
    let e, n, r, i, o;
    return {
      c() {
        (e = S("label")),
          (n = A("Filter by email: ")),
          (r = S("input")),
          y(r, "id", "show-filter-input"),
          y(r, "type", "text"),
          y(e, "class", "entry filter");
      },
      m(a, l) {
        b(a, e, l),
          P(e, n),
          P(e, r),
          Ze(r, t[1]),
          i || ((o = $(r, "input", t[31])), (i = !0));
      },
      p(a, l) {
        l[0] & 2 && r.value !== a[1] && Ze(r, a[1]);
      },
      d(a) {
        a && v(e), (i = !1), o();
      },
    };
  }
  function Dt(t) {
    let e,
      n,
      r,
      i = (t[50].selected ? "Deselect" : "Select") + "",
      o,
      a,
      l = t[50].given_name + "",
      s,
      c,
      u = t[50].surname + "",
      f,
      _,
      d;
    function p() {
      t[32].call(e, t[51], t[52]);
    }
    return {
      c() {
        (e = S("input")),
          (n = j()),
          (r = S("label")),
          (o = A(i)),
          (a = j()),
          (s = A(l)),
          (c = j()),
          (f = A(u)),
          y(e, "type", "checkbox"),
          y(e, "id", "contact-" + t[52] + "-checkbox"),
          y(r, "for", "contact-" + t[52] + "-checkbox");
      },
      m(m, h) {
        b(m, e, h),
          (e.checked = t[50].selected),
          b(m, n, h),
          b(m, r, h),
          P(r, o),
          P(r, a),
          P(r, s),
          P(r, c),
          P(r, f),
          _ || ((d = $(e, "change", p)), (_ = !0));
      },
      p(m, h) {
        (t = m),
          h[0] & 1024 && (e.checked = t[50].selected),
          h[0] & 1024 &&
            i !== (i = (t[50].selected ? "Deselect" : "Select") + "") &&
            F(o, i),
          h[0] & 1024 && l !== (l = t[50].given_name + "") && F(s, l),
          h[0] & 1024 && u !== (u = t[50].surname + "") && F(f, u);
      },
      d(m) {
        m && v(e), m && v(n), m && v(r), (_ = !1), d();
      },
    };
  }
  function Tr(t) {
    let e,
      n =
        (t[50].given_name && t[50].surname
          ? t[50].given_name.charAt(0) + t[50].surname.charAt(0)
          : t[50].emails[0].email.charAt(0)) + "",
      r;
    return {
      c() {
        (e = S("div")), (r = A(n)), y(e, "class", "default");
      },
      m(i, o) {
        b(i, e, o), P(e, r);
      },
      p(i, o) {
        o[0] & 1024 &&
          n !==
            (n =
              (i[50].given_name && i[50].surname
                ? i[50].given_name.charAt(0) + i[50].surname.charAt(0)
                : i[50].emails[0].email.charAt(0)) + "") &&
          F(r, n);
      },
      d(i) {
        i && v(e);
      },
    };
  }
  function Ar(t) {
    let e = (t[50].default_picture = t[2].default_photo) + "",
      n;
    return {
      c() {
        n = A(e);
      },
      m(r, i) {
        b(r, n, i);
      },
      p(r, i) {
        i[0] & 1028 &&
          e !== (e = (r[50].default_picture = r[2].default_photo) + "") &&
          F(n, e);
      },
      d(r) {
        r && v(n);
      },
    };
  }
  function Dr(t) {
    let e, n, r;
    return {
      c() {
        (e = S("img")),
          oe(e.src, (n = t[50].default_picture)) || y(e, "src", n),
          y(e, "alt", (r = t[50].emails[0].email)),
          y(e, "data-cy", "default_set_by_user");
      },
      m(i, o) {
        b(i, e, o);
      },
      p(i, o) {
        o[0] & 1024 &&
          !oe(e.src, (n = i[50].default_picture)) &&
          y(e, "src", n),
          o[0] & 1024 && r !== (r = i[50].emails[0].email) && y(e, "alt", r);
      },
      d(i) {
        i && v(e);
      },
    };
  }
  function jr(t) {
    let e;
    function n(o, a) {
      var l;
      return ((l = o[2].contacts) == null ? void 0 : l.length) ? Wr : Rr;
    }
    let r = n(t),
      i = r(t);
    return {
      c() {
        i.c(), (e = me());
      },
      m(o, a) {
        i.m(o, a), b(o, e, a);
      },
      p(o, a) {
        r === (r = n(o)) && i
          ? i.p(o, a)
          : (i.d(1), (i = r(o)), i && (i.c(), i.m(e.parentNode, e)));
      },
      d(o) {
        i.d(o), o && v(e);
      },
    };
  }
  function Ir(t) {
    let e,
      n = t[50].picture !== "Loading" && jt(t);
    return {
      c() {
        n && n.c(), (e = me());
      },
      m(r, i) {
        n && n.m(r, i), b(r, e, i);
      },
      p(r, i) {
        r[50].picture !== "Loading"
          ? n
            ? n.p(r, i)
            : ((n = jt(r)), n.c(), n.m(e.parentNode, e))
          : n && (n.d(1), (n = null));
      },
      d(r) {
        n && n.d(r), r && v(e);
      },
    };
  }
  function Rr(t) {
    let e, n;
    function r(...o) {
      return t[33](t[50], t[51], t[52], ...o);
    }
    let i = {
      ctx: t,
      current: null,
      token: null,
      hasCatch: !1,
      pending: Jr,
      then: zr,
      catch: Lr,
    };
    return (
      Ce((n = lt(t[4], t[50].id).then(r)), i),
      {
        c() {
          (e = me()), i.block.c();
        },
        m(o, a) {
          b(o, e, a),
            i.block.m(o, (i.anchor = a)),
            (i.mount = () => e.parentNode),
            (i.anchor = e);
        },
        p(o, a) {
          (t = o),
            (i.ctx = t),
            (a[0] & 1040 &&
              n !== (n = lt(t[4], t[50].id).then(r)) &&
              Ce(n, i)) ||
              nt(i, t, a);
        },
        d(o) {
          o && v(e), i.block.d(o), (i.token = null), (i = null);
        },
      }
    );
  }
  function Wr(t) {
    let e, n, r;
    return {
      c() {
        (e = S("img")),
          oe(e.src, (n = t[50].picture_url)) || y(e, "src", n),
          y(e, "alt", (r = t[50].emails[0].email));
      },
      m(i, o) {
        b(i, e, o);
      },
      p(i, o) {
        o[0] & 1024 && !oe(e.src, (n = i[50].picture_url)) && y(e, "src", n),
          o[0] & 1024 && r !== (r = i[50].emails[0].email) && y(e, "alt", r);
      },
      d(i) {
        i && v(e);
      },
    };
  }
  function Lr(t) {
    return { c: w, m: w, p: w, d: w };
  }
  function zr(t) {
    return { c: w, m: w, p: w, d: w };
  }
  function Jr(t) {
    let e = (t[50].picture = "Loading") + "",
      n;
    return {
      c() {
        n = A(e);
      },
      m(r, i) {
        b(r, n, i);
      },
      p(r, i) {
        i[0] & 1024 && e !== (e = (r[50].picture = "Loading") + "") && F(n, e);
      },
      d(r) {
        r && v(n);
      },
    };
  }
  function jt(t) {
    let e, n, r;
    return {
      c() {
        (e = S("img")),
          y(e, "alt", (n = t[50].emails[0].email)),
          oe(e.src, (r = "data:image/jpg;base64," + t[50].picture)) ||
            y(e, "src", r);
      },
      m(i, o) {
        b(i, e, o);
      },
      p(i, o) {
        o[0] & 1024 && n !== (n = i[50].emails[0].email) && y(e, "alt", n),
          o[0] & 1024 &&
            !oe(e.src, (r = "data:image/jpg;base64," + i[50].picture)) &&
            y(e, "src", r);
      },
      d(i) {
        i && v(e);
      },
    };
  }
  function Fr(t) {
    let e = t[50].emails[0].email + "",
      n;
    return {
      c() {
        n = A(e);
      },
      m(r, i) {
        b(r, n, i);
      },
      p(r, i) {
        i[0] & 1024 && e !== (e = r[50].emails[0].email + "") && F(n, e);
      },
      d(r) {
        r && v(n);
      },
    };
  }
  function Hr(t) {
    let e,
      n,
      r,
      i = t[50].given_name && It(t),
      o = t[50].surname && Rt(t),
      a = !t[50].given_name && !t[50].surname && Wt(t);
    return {
      c() {
        i && i.c(), (e = j()), o && o.c(), (n = j()), a && a.c(), (r = me());
      },
      m(l, s) {
        i && i.m(l, s),
          b(l, e, s),
          o && o.m(l, s),
          b(l, n, s),
          a && a.m(l, s),
          b(l, r, s);
      },
      p(l, s) {
        l[50].given_name
          ? i
            ? i.p(l, s)
            : ((i = It(l)), i.c(), i.m(e.parentNode, e))
          : i && (i.d(1), (i = null)),
          l[50].surname
            ? o
              ? o.p(l, s)
              : ((o = Rt(l)), o.c(), o.m(n.parentNode, n))
            : o && (o.d(1), (o = null)),
          !l[50].given_name && !l[50].surname
            ? a
              ? a.p(l, s)
              : ((a = Wt(l)), a.c(), a.m(r.parentNode, r))
            : a && (a.d(1), (a = null));
      },
      d(l) {
        i && i.d(l), l && v(e), o && o.d(l), l && v(n), a && a.d(l), l && v(r);
      },
    };
  }
  function It(t) {
    let e = t[50].given_name + "",
      n;
    return {
      c() {
        n = A(e);
      },
      m(r, i) {
        b(r, n, i);
      },
      p(r, i) {
        i[0] & 1024 && e !== (e = r[50].given_name + "") && F(n, e);
      },
      d(r) {
        r && v(n);
      },
    };
  }
  function Rt(t) {
    let e = t[50].surname + "",
      n;
    return {
      c() {
        n = A(e);
      },
      m(r, i) {
        b(r, n, i);
      },
      p(r, i) {
        i[0] & 1024 && e !== (e = r[50].surname + "") && F(n, e);
      },
      d(r) {
        r && v(n);
      },
    };
  }
  function Wt(t) {
    let e = t[50].emails[0].email + "",
      n;
    return {
      c() {
        n = A(e);
      },
      m(r, i) {
        b(r, n, i);
      },
      p(r, i) {
        i[0] & 1024 && e !== (e = r[50].emails[0].email + "") && F(n, e);
      },
      d(r) {
        r && v(n);
      },
    };
  }
  function Lt(t) {
    let e,
      n = t[50].emails[0].email + "",
      r,
      i,
      o = t[50].emails.length > 1 && zt(t);
    return {
      c() {
        (e = S("span")),
          (r = A(n)),
          (i = j()),
          o && o.c(),
          y(e, "class", "email");
      },
      m(a, l) {
        b(a, e, l), P(e, r), P(e, i), o && o.m(e, null);
      },
      p(a, l) {
        l[0] & 1024 && n !== (n = a[50].emails[0].email + "") && F(r, n),
          a[50].emails.length > 1
            ? o
              ? o.p(a, l)
              : ((o = zt(a)), o.c(), o.m(e, null))
            : o && (o.d(1), (o = null));
      },
      d(a) {
        a && v(e), o && o.d();
      },
    };
  }
  function zt(t) {
    let e,
      n = t[50].emails.length - 1 + "",
      r,
      i;
    return {
      c() {
        (e = A(`and
                `)),
          (r = A(n)),
          (i = A(`
                others`));
      },
      m(o, a) {
        b(o, e, a), b(o, r, a), b(o, i, a);
      },
      p(o, a) {
        a[0] & 1024 && n !== (n = o[50].emails.length - 1 + "") && F(r, n);
      },
      d(o) {
        o && v(e), o && v(r), o && v(i);
      },
    };
  }
  function Jt(t) {
    let e,
      n = t[50].time_ago + "",
      r;
    return {
      c() {
        (e = S("span")),
          (r = A(n)),
          y(e, "class", "recency"),
          ae(e, "no-last-contact-data", !t[50].last_contacted_date);
      },
      m(i, o) {
        b(i, e, o), P(e, r);
      },
      p(i, o) {
        o[0] & 1024 && n !== (n = i[50].time_ago + "") && F(r, n),
          o[0] & 1024 &&
            ae(e, "no-last-contact-data", !i[50].last_contacted_date);
      },
      d(i) {
        i && v(e);
      },
    };
  }
  function Ft(t) {
    let e,
      n,
      r,
      i,
      o,
      a,
      l,
      s,
      c,
      u,
      f,
      _,
      d = t[2].click_action === "select" && Dt(t);
    function p(k, D) {
      return k[50].picture
        ? Ir
        : k[50].picture_url
        ? jr
        : k[50].default_picture
        ? Dr
        : k[2].default_photo
        ? Ar
        : Tr;
    }
    let m = p(t),
      h = m(t);
    function O(k, D) {
      return k[2].show_names ? Hr : Fr;
    }
    let R = O(t),
      M = R(t),
      E = t[2].show_names && Lt(t),
      N = t[50].time_ago && Jt(t);
    function C(...k) {
      return t[34](t[50], ...k);
    }
    function U(...k) {
      return t[35](t[50], ...k);
    }
    return {
      c() {
        (e = S("li")),
          (n = S("span")),
          d && d.c(),
          (r = j()),
          (i = S("span")),
          h.c(),
          (o = j()),
          (a = S("span")),
          M.c(),
          (l = j()),
          E && E.c(),
          (s = j()),
          N && N.c(),
          (c = j()),
          y(n, "class", "checkbox"),
          y(i, "class", "image"),
          y(a, "class", "title"),
          y(e, "tabindex", "0"),
          y(e, "class", "entry contact"),
          y(e, "data-cy", t[52]),
          y(
            e,
            "data-last-contacted-date",
            (u = t[50].last_contacted_date || -1),
          ),
          ae(e, "selectable", t[2].click_action === "select"),
          ae(e, "selected", t[50].selected);
      },
      m(k, D) {
        b(k, e, D),
          P(e, n),
          d && d.m(n, null),
          P(e, r),
          P(e, i),
          h.m(i, null),
          P(e, o),
          P(e, a),
          M.m(a, null),
          P(e, l),
          E && E.m(e, null),
          P(e, s),
          N && N.m(e, null),
          P(e, c),
          f || ((_ = [$(e, "click", C), $(e, "keyup", U)]), (f = !0));
      },
      p(k, D) {
        (t = k),
          t[2].click_action === "select"
            ? d
              ? d.p(t, D)
              : ((d = Dt(t)), d.c(), d.m(n, null))
            : d && (d.d(1), (d = null)),
          m === (m = p(t)) && h
            ? h.p(t, D)
            : (h.d(1), (h = m(t)), h && (h.c(), h.m(i, null))),
          R === (R = O(t)) && M
            ? M.p(t, D)
            : (M.d(1), (M = R(t)), M && (M.c(), M.m(a, null))),
          t[2].show_names
            ? E
              ? E.p(t, D)
              : ((E = Lt(t)), E.c(), E.m(e, s))
            : E && (E.d(1), (E = null)),
          t[50].time_ago
            ? N
              ? N.p(t, D)
              : ((N = Jt(t)), N.c(), N.m(e, c))
            : N && (N.d(1), (N = null)),
          D[0] & 1024 &&
            u !== (u = t[50].last_contacted_date || -1) &&
            y(e, "data-last-contacted-date", u),
          D[0] & 4 && ae(e, "selectable", t[2].click_action === "select"),
          D[0] & 1024 && ae(e, "selected", t[50].selected);
      },
      d(k) {
        k && v(e),
          d && d.d(),
          h.d(),
          M.d(),
          E && E.d(),
          N && N.d(),
          (f = !1),
          K(_);
      },
    };
  }
  function Ur(t) {
    return { c: w, m: w, p: w, d: w };
  }
  function Yr(t) {
    let e,
      n,
      r,
      i,
      o,
      a,
      l,
      s,
      c,
      u,
      f = t[9] && Nt(t);
    function _(h, O) {
      if (h[8] === "loading" && h[3].length <= 0) return Cr;
      if (h[3].length === 0) return Mr;
    }
    let d = _(t),
      p = d && d(t),
      m = {
        ctx: t,
        current: null,
        token: null,
        hasCatch: !1,
        pending: Ur,
        then: Nr,
        catch: Er,
        value: 49,
      };
    return (
      Ce((a = t[10]), m),
      {
        c() {
          (e = S("nylas-error")),
            (n = j()),
            f && f.c(),
            (r = j()),
            (i = S("main")),
            p && p.c(),
            (o = j()),
            m.block.c(),
            (this.c = w),
            Ge(e, "id", t[0]),
            y(i, "class", (l = t[9] ? "custom" : t[2].theme)),
            Pe(() => t[37].call(i));
        },
        m(h, O) {
          b(h, e, O),
            b(h, n, O),
            f && f.m(h, O),
            b(h, r, O),
            b(h, i, O),
            p && p.m(i, null),
            P(i, o),
            m.block.m(i, (m.anchor = null)),
            (m.mount = () => i),
            (m.anchor = null),
            t[36](i),
            (s = Kt(i, t[37].bind(i))),
            c ||
              ((u = $(i, "scroll", function () {
                be(t[2].contacts ? Ht : t[11]) &&
                  (t[2].contacts ? Ht : t[11]).apply(this, arguments);
              })),
              (c = !0));
        },
        p(h, O) {
          (t = h),
            O[0] & 1 && Ge(e, "id", t[0]),
            t[9]
              ? f
                ? f.p(t, O)
                : ((f = Nt(t)), f.c(), f.m(r.parentNode, r))
              : f && (f.d(1), (f = null)),
            d !== (d = _(t)) &&
              (p && p.d(1), (p = d && d(t)), p && (p.c(), p.m(i, o))),
            (m.ctx = t),
            (O[0] & 1024 && a !== (a = t[10]) && Ce(a, m)) || nt(m, t, O),
            O[0] & 516 &&
              l !== (l = t[9] ? "custom" : t[2].theme) &&
              y(i, "class", l);
        },
        i: w,
        o: w,
        d(h) {
          h && v(e),
            h && v(n),
            f && f.d(h),
            h && v(r),
            h && v(i),
            p && p.d(),
            m.block.d(),
            (m.token = null),
            (m = null),
            t[36](null),
            s(),
            (c = !1),
            u();
        },
      }
    );
  }
  let Vr = "byEmail";
  const Ht = () => {};
  function Xr(t, e, n) {
    let r, i, o;
    ye(t, Je, (g) => n(29, (r = g))),
      ye(t, pr, (g) => n(39, (i = g))),
      ye(t, ze, (g) => n(30, (o = g)));
    var a =
      (this && this.__awaiter) ||
      function (g, T, q, Z) {
        function ri(ge) {
          return ge instanceof q
            ? ge
            : new q(function (Te) {
                Te(ge);
              });
        }
        return new (q || (q = Promise))(function (ge, Te) {
          function ii(ie) {
            try {
              Ue(Z.next(ie));
            } catch (Ye) {
              Te(Ye);
            }
          }
          function oi(ie) {
            try {
              Ue(Z.throw(ie));
            } catch (Ye) {
              Te(Ye);
            }
          }
          function Ue(ie) {
            ie.done ? ge(ie.value) : ri(ie.value).then(ii, oi);
          }
          Ue((Z = Z.apply(g, T || [])).next());
        });
      };
    let { id: l = "" } = e,
      { access_token: s = "" } = e,
      { click_action: c } = e,
      { contacts_to_load: u } = e,
      { contacts: f } = e,
      { default_photo: _ } = e,
      { show_filter: d } = e,
      { show_names: p } = e,
      { sort_by: m } = e,
      { theme: h = "theme-1" } = e,
      { group: O } = e;
    const R = {
      click_action: "email",
      contacts_to_load: 100,
      show_filter: !1,
      show_names: !0,
      sort_by: "name",
      theme: "theme-1",
    };
    let M = "";
    const E = { byEmail: (g) => g.emails[0].email.includes(M) },
      N = gr(De());
    let C = Fe({}, {}, R),
      U = {},
      k,
      D = 0,
      ce = 0,
      J = 0,
      L = 0,
      z = [],
      B = "loading",
      re = !1;
    qt(() =>
      a(void 0, void 0, void 0, function* () {
        yield $t(),
          n(
            6,
            (D = (k == null ? void 0 : k.getBoundingClientRect().height) || 0),
          ),
          n(
            7,
            (ce = (k == null ? void 0 : k.getBoundingClientRect().width) || 0),
          ),
          n(
            23,
            (U =
              (yield i[JSON.stringify({ component_id: l, access_token: s })]) ||
              {}),
          ),
          n(2, (C = Fe(e, U, R))),
          C.contacts
            ? (n(3, (z = C.contacts)), n(8, (B = "loaded")))
            : r[G]
            ? (n(3, (z = r[G])), n(8, (B = "loaded")))
            : fe.component_id && Ee(),
          n(26, (re = !0));
      }),
    );
    let ue = e,
      Yt,
      fe,
      G,
      Vt;
    function Br() {
      return a(this, void 0, void 0, function* () {
        !re ||
          (n(8, (B = "loading")),
          f && Array.isArray(f)
            ? (n(3, (z = f)), n(8, (B = "loaded")))
            : r[G]
            ? (n(3, (z = r[G])), n(8, (B = "loaded")))
            : fe.component_id
            ? Ee()
            : (n(3, (z = [])), n(8, (B = "loaded"))));
      });
    }
    function Ee() {
      n(8, (B = "loading")),
        Je.addContacts(fe, Vt).then((g) => {
          var T;
          g &&
            g.length > 0 &&
            (n(3, (z = (T = r[G]) !== null && T !== void 0 ? T : g)),
            n(24, (J += C.contacts_to_load))),
            n(8, (B = "loaded"));
        });
    }
    function Qr() {
      const { scrollHeight: g, scrollTop: T } = k;
      Math.abs(T + D - g) <= 50 && Ee();
    }
    const xr = br(Qr, 500);
    let Ne = [];
    const Gr = new Date();
    function He(g, T) {
      C.click_action === "email" &&
        (window.location.href = `mailto:${T.emails[0].email}`),
        C.click_action === "select" &&
          ((T.selected = !T.selected),
          N("contactClicked", { event: g, contact: T, contacts: z }),
          n(3, (z = [...z])));
    }
    function Zr() {
      (M = this.value), n(1, M);
    }
    function Kr(g, T) {
      (g[T].selected = this.checked),
        n(10, Ne),
        n(1, M),
        n(3, z),
        n(2, C),
        n(27, ue),
        n(48, e),
        n(23, U),
        n(26, re);
    }
    const qr = (g, T, q, Z) => n(10, (T[q].picture = Z), Ne),
      $r = (g, T) => He(T, g),
      ei = (g, T) => {
        T.key === "Enter" && He(T, g);
      };
    function ti(g) {
      je[g ? "unshift" : "push"](() => {
        (k = g), n(5, k);
      });
    }
    function ni() {
      (D = this.clientHeight), (ce = this.clientWidth), n(6, D), n(7, ce);
    }
    return (
      (t.$$set = (g) => {
        n(48, (e = Ve(Ve({}, e), xe(g)))),
          "id" in g && n(0, (l = g.id)),
          "access_token" in g && n(13, (s = g.access_token)),
          "click_action" in g && n(14, (c = g.click_action)),
          "contacts_to_load" in g && n(15, (u = g.contacts_to_load)),
          "contacts" in g && n(16, (f = g.contacts)),
          "default_photo" in g && n(17, (_ = g.default_photo)),
          "show_filter" in g && n(18, (d = g.show_filter)),
          "show_names" in g && n(19, (p = g.show_names)),
          "sort_by" in g && n(20, (m = g.sort_by)),
          "theme" in g && n(21, (h = g.theme)),
          "group" in g && n(22, (O = g.group));
      }),
      (t.$$.update = () => {
        if (
          (t.$$.dirty[0] & 8388608 && N("manifestLoaded", U),
          t.$$.dirty[0] & 1073741824 &&
            Object.keys(o).length &&
            N("onError", o),
          JSON.stringify(ue) !== JSON.stringify(e) &&
            (n(2, (C = Fe(e, U, R))), n(27, (ue = e))),
          t.$$.dirty[0] & 67108868 &&
            re &&
            n(
              2,
              (C.contacts_to_load = Math.max(
                Math.min(C.contacts_to_load, 1e3),
                1,
              )),
              C,
            ),
          t.$$.dirty[0] & 4 &&
            !!C.theme &&
            (C.theme.startsWith(".") || C.theme.startsWith("http")) &&
            n(9, (Yt = C.theme)),
          t.$$.dirty[0] & 8193 &&
            n(4, (fe = { component_id: l, access_token: s })),
          t.$$.dirty[0] & 16 && n(28, (G = JSON.stringify(fe))),
          t.$$.dirty[0] & 838860804 &&
            r[G] &&
            C.contacts_to_load !== L &&
            (n(25, (L = C.contacts_to_load)), n(24, (J = 0)), Ee()),
          t.$$.dirty[0] & 16777220 &&
            (Vt = Object.assign(
              { offset: J, limit: C.contacts_to_load },
              C.group ? { group: C.group } : {},
            )),
          t.$$.dirty[0] & 268500992 && Br(),
          t.$$.dirty[0] & 8 &&
            z.length &&
            n(
              3,
              (z = z.map(
                (g) => (
                  g.last_contacted_date
                    ? (g.time_ago = `Emailed ${Sn(
                        Gr,
                        new Date(g.last_contacted_date * 1e3),
                        { addSuffix: !1 },
                      )} ago`)
                    : (g.time_ago = "No recent activity"),
                  g
                ),
              )),
            ),
          t.$$.dirty[0] & 14)
        ) {
          const g = z.filter(E[Vr]).sort(Sr[C.sort_by]),
            T = Object.values(
              g.reduce(
                (q, Z) => Object.assign(q, { [Z.emails[0].email]: Z }),
                {},
              ),
            );
          n(10, (Ne = T));
        }
      }),
      (e = xe(e)),
      [
        l,
        M,
        C,
        z,
        fe,
        k,
        D,
        ce,
        B,
        Yt,
        Ne,
        xr,
        He,
        s,
        c,
        u,
        f,
        _,
        d,
        p,
        m,
        h,
        O,
        U,
        J,
        L,
        re,
        ue,
        G,
        r,
        o,
        Zr,
        Kr,
        qr,
        $r,
        ei,
        ti,
        ni,
      ]
    );
  }
  class Ut extends We {
    constructor(e) {
      super();
      (this.shadowRoot.innerHTML = `<style>*{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;list-style:none}.sr-only{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}main{--black:#161717;--grey-dark:#636671;--grey:#bdc0cb;--grey-lighter:#dfe1e8;--grey-dark-warm:#9fa4b5;--grey-lightest:#f7f7f8;--grey-background:#f0f1f5;--white:#ffffff;--blue:#314fa9;--blue-lighter:#f0f3ff;--red:#ee3248;--red-lighter:#ffeef0;--fs-12:0.75rem;--fs-14:0.875rem;--fs-16:1rem;--black-90:#2c2e2e;--grey-light:#f7f7f8;--grey-warm:#cbcbcb}main{height:100%;width:100%;overflow:auto;position:relative}main.theme-1{--mainText:#000000;--linesAndIcons:#d5d5d5;--contactColor:#002db4;--contactTextColor:white;--selectColor:#36d2ac;--hoverColor:#eee}main.theme-2{--mainText:#000000;--linesAndIcons:#d5d5d5;--contactColor:#6300c6;--contactTextColor:#ffffff;--selectColor:#d23636;--hoverColor:#eee}main.theme-3{--mainText:#000000;--linesAndIcons:#d5d5d5;--contactColor:#1d9f51;--contactTextColor:#ffffff;--selectColor:#c12b73;--hoverColor:#eee}main.theme-4{--mainText:#ffffff;--linesAndIcons:#414247;--contactColor:#1951fa;--contactTextColor:#ffffff;--selectColor:#7ae1c7;--hoverColor:#eee}main.theme-5{--mainText:#ffffff;--linesAndIcons:#d5d5d5;--contactColor:#5285ed;--contactTextColor:#ffffff;--selectColor:#ecb63f;--hoverColor:#eee}.loader{display:grid;justify-content:center;align-content:center;height:100%;width:100%}@keyframes lds-dual-ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.loader::after{content:" ";display:block;width:50px;height:50px;margin:8px;border-radius:50%;border:6px solid var(--linesAndIcons);border-left-color:transparent;border-right-color:transparent;animation:lds-dual-ring 1.2s linear infinite}.empty-state{background-color:white;border:2px dashed var(--linesAndIcons);padding:3rem;text-align:center}.empty-state p{margin:1rem 0}.loading{overflow:auto;display:flex;justify-content:center;align-items:center;z-index:1;background-color:#000c;color:white;position:fixed;opacity:0.8;height:var(--height, 100%);width:var(--width, 100%)}.entry{display:flex;align-items:center;padding:14px 8px;list-style-type:none;background-color:white;border-bottom:1px solid var(--linesAndIcons);max-width:100%;overflow:hidden}.filter input{margin-left:10px;padding:0.5rem}.contacts{display:grid;max-width:100%}.contacts .contact{display:grid;transition:0.2s;border-left:0 solid var(--contactColor);grid-template-areas:"check image title title" "check image email recency";grid-template-columns:0 56px 1fr max-content;gap:0.25rem}.contacts .contact.selectable{grid-template-columns:24px 56px 1fr max-content}.contacts .contact.selected{border-left:10px solid var(--contactColor)}.contacts .contact:hover,.contacts .contact:focus{cursor:pointer;background-color:var(--hoverColor);outline:none}.contacts .contact span{display:block;text-overflow:ellipsis;overflow:hidden}.contacts .contact span div.default{background:var(--contactColor);color:var(--contactTextColor);border-radius:48px;height:48px;width:48px;display:flex;justify-content:center;align-items:center;font-size:large;text-transform:uppercase;font-family:sans-serif}.contacts .contact .checkbox{grid-area:check}.contacts .contact .checkbox label{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}.contacts .contact .checkbox input{border-radius:4px;width:16px;height:16px;border:0;cursor:pointer;background-color:var(--linesAndIcons);-webkit-appearance:none;-moz-appearance:none;-o-appearance:none;appearance:none}.contacts .contact .checkbox input:checked{background-color:var(--contactColor)}.contacts .contact .checkbox input:checked::before{content:" ";background-image:url('data:image/svg+xml;utf8,<svg width="14" height="10" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg"><path d="M5.29249 9.2925C4.90249 9.6825 4.27249 9.6825 3.88249 9.2925L0.292486 5.7025C0.105233 5.51567 0 5.26202 0 4.9975C0 4.73298 0.105233 4.47933 0.292486 4.2925C0.682486 3.9025 1.31249 3.9025 1.70249 4.2925L4.58249 7.1725L11.4625 0.2925C11.8525 -0.0975 12.4825 -0.0975 12.8725 0.2925C13.2625 0.6825 13.2625 1.3125 12.8725 1.7025L5.29249 9.2925Z" fill="white"/></svg>');height:10px;width:14px;display:block;text-align:center;margin-left:1.5px;margin-top:3px}.contacts .contact .image{grid-area:image}.contacts .contact .image img{border-radius:48px;height:48px;width:48px}.contacts .contact .title{grid-area:title;font-weight:bold}.contacts .contact .email{grid-area:email;white-space:nowrap}.contacts .contact .recency{grid-area:recency;font-size:small}.contacts .contact .recency.no-last-contact-data{display:none}@media(min-width: 640px){.contacts .contact{grid-template-areas:"check image title recency" "check image email recency"}.contacts .contact .recency.no-last-contact-data{display:block}}</style>`),
        rt(
          this,
          {
            target: this.shadowRoot,
            props: Ke(this.attributes),
            customElement: !0,
          },
          Xr,
          Yr,
          Be,
          {
            id: 0,
            access_token: 13,
            click_action: 14,
            contacts_to_load: 15,
            contacts: 16,
            default_photo: 17,
            show_filter: 18,
            show_names: 19,
            sort_by: 20,
            theme: 21,
            group: 22,
          },
          null,
          [-1, -1],
        ),
        e &&
          (e.target && b(e.target, this, e.anchor),
          e.props && (this.$set(e.props), W()));
    }
    static get observedAttributes() {
      return [
        "id",
        "access_token",
        "click_action",
        "contacts_to_load",
        "contacts",
        "default_photo",
        "show_filter",
        "show_names",
        "sort_by",
        "theme",
        "group",
      ];
    }
    get id() {
      return this.$$.ctx[0];
    }
    set id(e) {
      this.$$set({ id: e }), W();
    }
    get access_token() {
      return this.$$.ctx[13];
    }
    set access_token(e) {
      this.$$set({ access_token: e }), W();
    }
    get click_action() {
      return this.$$.ctx[14];
    }
    set click_action(e) {
      this.$$set({ click_action: e }), W();
    }
    get contacts_to_load() {
      return this.$$.ctx[15];
    }
    set contacts_to_load(e) {
      this.$$set({ contacts_to_load: e }), W();
    }
    get contacts() {
      return this.$$.ctx[16];
    }
    set contacts(e) {
      this.$$set({ contacts: e }), W();
    }
    get default_photo() {
      return this.$$.ctx[17];
    }
    set default_photo(e) {
      this.$$set({ default_photo: e }), W();
    }
    get show_filter() {
      return this.$$.ctx[18];
    }
    set show_filter(e) {
      this.$$set({ show_filter: e }), W();
    }
    get show_names() {
      return this.$$.ctx[19];
    }
    set show_names(e) {
      this.$$set({ show_names: e }), W();
    }
    get sort_by() {
      return this.$$.ctx[20];
    }
    set sort_by(e) {
      this.$$set({ sort_by: e }), W();
    }
    get theme() {
      return this.$$.ctx[21];
    }
    set theme(e) {
      this.$$set({ theme: e }), W();
    }
    get group() {
      return this.$$.ctx[22];
    }
    set group(e) {
      this.$$set({ group: e }), W();
    }
  }
  return customElements.define("nylas-contact-list", Ut), Ut;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbW1vbnMvc3JjL2RlZmluZS1jb21wb25lbnQtcGF0Y2gudHMiLCIuLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL2ludGVybmFsL2luZGV4Lm1qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvdG9EYXRlL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbXBhcmVBc2MvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VJblNlY29uZHMvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9hc3NpZ24vaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9jbG9uZU9iamVjdC9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2VTdHJpY3QvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL3N0b3JlL2luZGV4Lm1qcyIsIi4uLy4uL2NvbW1vbnMvc3JjL3N0b3JlL2Vycm9yLnRzIiwiLi4vLi4vY29tbW9ucy9zcmMvbWV0aG9kcy9hcGkudHMiLCIuLi8uLi9jb21tb25zL3NyYy9jb25uZWN0aW9ucy9jb250YWN0cy50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL2Nvbm5lY3Rpb25zL3RocmVhZHMudHMiLCIuLi8uLi9jb21tb25zL3NyYy9jb25uZWN0aW9ucy9tYW5pZmVzdC50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL2Nvbm5lY3Rpb25zL2F2YWlsYWJpbGl0eS50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL3N0b3JlL2F2YWlsYWJpbGl0eS50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL3N0b3JlL2NvbnNlY3V0aXZlLWF2YWlsYWJpbGl0eS50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL3N0b3JlL2NvbnRhY3RzLnRzIiwiLi4vLi4vY29tbW9ucy9zcmMvc3RvcmUvbWFpbGJveC50cyIsIi4uLy4uL2NvbW1vbnMvc3JjL3N0b3JlL21hbmlmZXN0LnRzIiwiLi4vLi4vY29tbW9ucy9zcmMvbWV0aG9kcy9jb21wb25lbnQudHMiLCIuLi8uLi9jb21tb25zL3NyYy9jb21wb25lbnRzL05FcnJvci5zdmVsdGUiLCJsaWIvc29ydGluZy50cyIsInNyYy9Db250YWN0TGlzdC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG9yaWdpbmFsRGVmaW5lID0gd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZS5iaW5kKFxuICB3aW5kb3cuY3VzdG9tRWxlbWVudHMsXG4pO1xud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSA9IChuYW1lOiBzdHJpbmcsIC4uLmFyZ3MpID0+IHtcbiAgaWYgKGN1c3RvbUVsZW1lbnRzLmdldChuYW1lKSkge1xuICAgIHJldHVybjtcbiAgfVxuICByZXR1cm4gb3JpZ2luYWxEZWZpbmUobmFtZSwgLi4uYXJncyk7XG59O1xuIiwiZnVuY3Rpb24gbm9vcCgpIHsgfVxuY29uc3QgaWRlbnRpdHkgPSB4ID0+IHg7XG5mdW5jdGlvbiBhc3NpZ24odGFyLCBzcmMpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZm9yIChjb25zdCBrIGluIHNyYylcbiAgICAgICAgdGFyW2tdID0gc3JjW2tdO1xuICAgIHJldHVybiB0YXI7XG59XG5mdW5jdGlvbiBpc19wcm9taXNlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBhZGRfbG9jYXRpb24oZWxlbWVudCwgZmlsZSwgbGluZSwgY29sdW1uLCBjaGFyKSB7XG4gICAgZWxlbWVudC5fX3N2ZWx0ZV9tZXRhID0ge1xuICAgICAgICBsb2M6IHsgZmlsZSwgbGluZSwgY29sdW1uLCBjaGFyIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gcnVuKGZuKSB7XG4gICAgcmV0dXJuIGZuKCk7XG59XG5mdW5jdGlvbiBibGFua19vYmplY3QoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCk7XG59XG5mdW5jdGlvbiBydW5fYWxsKGZucykge1xuICAgIGZucy5mb3JFYWNoKHJ1bik7XG59XG5mdW5jdGlvbiBpc19mdW5jdGlvbih0aGluZykge1xuICAgIHJldHVybiB0eXBlb2YgdGhpbmcgPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBzYWZlX25vdF9lcXVhbChhLCBiKSB7XG4gICAgcmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGIgfHwgKChhICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JykgfHwgdHlwZW9mIGEgPT09ICdmdW5jdGlvbicpO1xufVxubGV0IHNyY191cmxfZXF1YWxfYW5jaG9yO1xuZnVuY3Rpb24gc3JjX3VybF9lcXVhbChlbGVtZW50X3NyYywgdXJsKSB7XG4gICAgaWYgKCFzcmNfdXJsX2VxdWFsX2FuY2hvcikge1xuICAgICAgICBzcmNfdXJsX2VxdWFsX2FuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB9XG4gICAgc3JjX3VybF9lcXVhbF9hbmNob3IuaHJlZiA9IHVybDtcbiAgICByZXR1cm4gZWxlbWVudF9zcmMgPT09IHNyY191cmxfZXF1YWxfYW5jaG9yLmhyZWY7XG59XG5mdW5jdGlvbiBub3RfZXF1YWwoYSwgYikge1xuICAgIHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiO1xufVxuZnVuY3Rpb24gaXNfZW1wdHkob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAwO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVfc3RvcmUoc3RvcmUsIG5hbWUpIHtcbiAgICBpZiAoc3RvcmUgIT0gbnVsbCAmJiB0eXBlb2Ygc3RvcmUuc3Vic2NyaWJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJyR7bmFtZX0nIGlzIG5vdCBhIHN0b3JlIHdpdGggYSAnc3Vic2NyaWJlJyBtZXRob2RgKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzdWJzY3JpYmUoc3RvcmUsIC4uLmNhbGxiYWNrcykge1xuICAgIGlmIChzdG9yZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBub29wO1xuICAgIH1cbiAgICBjb25zdCB1bnN1YiA9IHN0b3JlLnN1YnNjcmliZSguLi5jYWxsYmFja3MpO1xuICAgIHJldHVybiB1bnN1Yi51bnN1YnNjcmliZSA/ICgpID0+IHVuc3ViLnVuc3Vic2NyaWJlKCkgOiB1bnN1Yjtcbn1cbmZ1bmN0aW9uIGdldF9zdG9yZV92YWx1ZShzdG9yZSkge1xuICAgIGxldCB2YWx1ZTtcbiAgICBzdWJzY3JpYmUoc3RvcmUsIF8gPT4gdmFsdWUgPSBfKSgpO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGNvbXBvbmVudF9zdWJzY3JpYmUoY29tcG9uZW50LCBzdG9yZSwgY2FsbGJhY2spIHtcbiAgICBjb21wb25lbnQuJCQub25fZGVzdHJveS5wdXNoKHN1YnNjcmliZShzdG9yZSwgY2FsbGJhY2spKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9zbG90KGRlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZm4pIHtcbiAgICBpZiAoZGVmaW5pdGlvbikge1xuICAgICAgICBjb25zdCBzbG90X2N0eCA9IGdldF9zbG90X2NvbnRleHQoZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBmbik7XG4gICAgICAgIHJldHVybiBkZWZpbml0aW9uWzBdKHNsb3RfY3R4KTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRfc2xvdF9jb250ZXh0KGRlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZm4pIHtcbiAgICByZXR1cm4gZGVmaW5pdGlvblsxXSAmJiBmblxuICAgICAgICA/IGFzc2lnbigkJHNjb3BlLmN0eC5zbGljZSgpLCBkZWZpbml0aW9uWzFdKGZuKGN0eCkpKVxuICAgICAgICA6ICQkc2NvcGUuY3R4O1xufVxuZnVuY3Rpb24gZ2V0X3Nsb3RfY2hhbmdlcyhkZWZpbml0aW9uLCAkJHNjb3BlLCBkaXJ0eSwgZm4pIHtcbiAgICBpZiAoZGVmaW5pdGlvblsyXSAmJiBmbikge1xuICAgICAgICBjb25zdCBsZXRzID0gZGVmaW5pdGlvblsyXShmbihkaXJ0eSkpO1xuICAgICAgICBpZiAoJCRzY29wZS5kaXJ0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbGV0cztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGxldHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25zdCBtZXJnZWQgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IE1hdGgubWF4KCQkc2NvcGUuZGlydHkubGVuZ3RoLCBsZXRzLmxlbmd0aCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgbWVyZ2VkW2ldID0gJCRzY29wZS5kaXJ0eVtpXSB8IGxldHNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAkJHNjb3BlLmRpcnR5IHwgbGV0cztcbiAgICB9XG4gICAgcmV0dXJuICQkc2NvcGUuZGlydHk7XG59XG5mdW5jdGlvbiB1cGRhdGVfc2xvdF9iYXNlKHNsb3QsIHNsb3RfZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBzbG90X2NoYW5nZXMsIGdldF9zbG90X2NvbnRleHRfZm4pIHtcbiAgICBpZiAoc2xvdF9jaGFuZ2VzKSB7XG4gICAgICAgIGNvbnN0IHNsb3RfY29udGV4dCA9IGdldF9zbG90X2NvbnRleHQoc2xvdF9kZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGdldF9zbG90X2NvbnRleHRfZm4pO1xuICAgICAgICBzbG90LnAoc2xvdF9jb250ZXh0LCBzbG90X2NoYW5nZXMpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZV9zbG90KHNsb3QsIHNsb3RfZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBkaXJ0eSwgZ2V0X3Nsb3RfY2hhbmdlc19mbiwgZ2V0X3Nsb3RfY29udGV4dF9mbikge1xuICAgIGNvbnN0IHNsb3RfY2hhbmdlcyA9IGdldF9zbG90X2NoYW5nZXMoc2xvdF9kZWZpbml0aW9uLCAkJHNjb3BlLCBkaXJ0eSwgZ2V0X3Nsb3RfY2hhbmdlc19mbik7XG4gICAgdXBkYXRlX3Nsb3RfYmFzZShzbG90LCBzbG90X2RlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgc2xvdF9jaGFuZ2VzLCBnZXRfc2xvdF9jb250ZXh0X2ZuKTtcbn1cbmZ1bmN0aW9uIGdldF9hbGxfZGlydHlfZnJvbV9zY29wZSgkJHNjb3BlKSB7XG4gICAgaWYgKCQkc2NvcGUuY3R4Lmxlbmd0aCA+IDMyKSB7XG4gICAgICAgIGNvbnN0IGRpcnR5ID0gW107XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9ICQkc2NvcGUuY3R4Lmxlbmd0aCAvIDMyO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkaXJ0eVtpXSA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaXJ0eTtcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufVxuZnVuY3Rpb24gZXhjbHVkZV9pbnRlcm5hbF9wcm9wcyhwcm9wcykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3QgayBpbiBwcm9wcylcbiAgICAgICAgaWYgKGtbMF0gIT09ICckJylcbiAgICAgICAgICAgIHJlc3VsdFtrXSA9IHByb3BzW2tdO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBjb21wdXRlX3Jlc3RfcHJvcHMocHJvcHMsIGtleXMpIHtcbiAgICBjb25zdCByZXN0ID0ge307XG4gICAga2V5cyA9IG5ldyBTZXQoa2V5cyk7XG4gICAgZm9yIChjb25zdCBrIGluIHByb3BzKVxuICAgICAgICBpZiAoIWtleXMuaGFzKGspICYmIGtbMF0gIT09ICckJylcbiAgICAgICAgICAgIHJlc3Rba10gPSBwcm9wc1trXTtcbiAgICByZXR1cm4gcmVzdDtcbn1cbmZ1bmN0aW9uIGNvbXB1dGVfc2xvdHMoc2xvdHMpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzbG90cykge1xuICAgICAgICByZXN1bHRba2V5XSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBvbmNlKGZuKSB7XG4gICAgbGV0IHJhbiA9IGZhbHNlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICBpZiAocmFuKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICByYW4gPSB0cnVlO1xuICAgICAgICBmbi5jYWxsKHRoaXMsIC4uLmFyZ3MpO1xuICAgIH07XG59XG5mdW5jdGlvbiBudWxsX3RvX2VtcHR5KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xufVxuZnVuY3Rpb24gc2V0X3N0b3JlX3ZhbHVlKHN0b3JlLCByZXQsIHZhbHVlKSB7XG4gICAgc3RvcmUuc2V0KHZhbHVlKTtcbiAgICByZXR1cm4gcmV0O1xufVxuY29uc3QgaGFzX3Byb3AgPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbmZ1bmN0aW9uIGFjdGlvbl9kZXN0cm95ZXIoYWN0aW9uX3Jlc3VsdCkge1xuICAgIHJldHVybiBhY3Rpb25fcmVzdWx0ICYmIGlzX2Z1bmN0aW9uKGFjdGlvbl9yZXN1bHQuZGVzdHJveSkgPyBhY3Rpb25fcmVzdWx0LmRlc3Ryb3kgOiBub29wO1xufVxuXG5jb25zdCBpc19jbGllbnQgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbmxldCBub3cgPSBpc19jbGllbnRcbiAgICA/ICgpID0+IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKVxuICAgIDogKCkgPT4gRGF0ZS5ub3coKTtcbmxldCByYWYgPSBpc19jbGllbnQgPyBjYiA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2IpIDogbm9vcDtcbi8vIHVzZWQgaW50ZXJuYWxseSBmb3IgdGVzdGluZ1xuZnVuY3Rpb24gc2V0X25vdyhmbikge1xuICAgIG5vdyA9IGZuO1xufVxuZnVuY3Rpb24gc2V0X3JhZihmbikge1xuICAgIHJhZiA9IGZuO1xufVxuXG5jb25zdCB0YXNrcyA9IG5ldyBTZXQoKTtcbmZ1bmN0aW9uIHJ1bl90YXNrcyhub3cpIHtcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBpZiAoIXRhc2suYyhub3cpKSB7XG4gICAgICAgICAgICB0YXNrcy5kZWxldGUodGFzayk7XG4gICAgICAgICAgICB0YXNrLmYoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0YXNrcy5zaXplICE9PSAwKVxuICAgICAgICByYWYocnVuX3Rhc2tzKTtcbn1cbi8qKlxuICogRm9yIHRlc3RpbmcgcHVycG9zZXMgb25seSFcbiAqL1xuZnVuY3Rpb24gY2xlYXJfbG9vcHMoKSB7XG4gICAgdGFza3MuY2xlYXIoKTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB0YXNrIHRoYXQgcnVucyBvbiBlYWNoIHJhZiBmcmFtZVxuICogdW50aWwgaXQgcmV0dXJucyBhIGZhbHN5IHZhbHVlIG9yIGlzIGFib3J0ZWRcbiAqL1xuZnVuY3Rpb24gbG9vcChjYWxsYmFjaykge1xuICAgIGxldCB0YXNrO1xuICAgIGlmICh0YXNrcy5zaXplID09PSAwKVxuICAgICAgICByYWYocnVuX3Rhc2tzKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9taXNlOiBuZXcgUHJvbWlzZShmdWxmaWxsID0+IHtcbiAgICAgICAgICAgIHRhc2tzLmFkZCh0YXNrID0geyBjOiBjYWxsYmFjaywgZjogZnVsZmlsbCB9KTtcbiAgICAgICAgfSksXG4gICAgICAgIGFib3J0KCkge1xuICAgICAgICAgICAgdGFza3MuZGVsZXRlKHRhc2spO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8gVHJhY2sgd2hpY2ggbm9kZXMgYXJlIGNsYWltZWQgZHVyaW5nIGh5ZHJhdGlvbi4gVW5jbGFpbWVkIG5vZGVzIGNhbiB0aGVuIGJlIHJlbW92ZWQgZnJvbSB0aGUgRE9NXG4vLyBhdCB0aGUgZW5kIG9mIGh5ZHJhdGlvbiB3aXRob3V0IHRvdWNoaW5nIHRoZSByZW1haW5pbmcgbm9kZXMuXG5sZXQgaXNfaHlkcmF0aW5nID0gZmFsc2U7XG5mdW5jdGlvbiBzdGFydF9oeWRyYXRpbmcoKSB7XG4gICAgaXNfaHlkcmF0aW5nID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGVuZF9oeWRyYXRpbmcoKSB7XG4gICAgaXNfaHlkcmF0aW5nID0gZmFsc2U7XG59XG5mdW5jdGlvbiB1cHBlcl9ib3VuZChsb3csIGhpZ2gsIGtleSwgdmFsdWUpIHtcbiAgICAvLyBSZXR1cm4gZmlyc3QgaW5kZXggb2YgdmFsdWUgbGFyZ2VyIHRoYW4gaW5wdXQgdmFsdWUgaW4gdGhlIHJhbmdlIFtsb3csIGhpZ2gpXG4gICAgd2hpbGUgKGxvdyA8IGhpZ2gpIHtcbiAgICAgICAgY29uc3QgbWlkID0gbG93ICsgKChoaWdoIC0gbG93KSA+PiAxKTtcbiAgICAgICAgaWYgKGtleShtaWQpIDw9IHZhbHVlKSB7XG4gICAgICAgICAgICBsb3cgPSBtaWQgKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaGlnaCA9IG1pZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbG93O1xufVxuZnVuY3Rpb24gaW5pdF9oeWRyYXRlKHRhcmdldCkge1xuICAgIGlmICh0YXJnZXQuaHlkcmF0ZV9pbml0KVxuICAgICAgICByZXR1cm47XG4gICAgdGFyZ2V0Lmh5ZHJhdGVfaW5pdCA9IHRydWU7XG4gICAgLy8gV2Uga25vdyB0aGF0IGFsbCBjaGlsZHJlbiBoYXZlIGNsYWltX29yZGVyIHZhbHVlcyBzaW5jZSB0aGUgdW5jbGFpbWVkIGhhdmUgYmVlbiBkZXRhY2hlZCBpZiB0YXJnZXQgaXMgbm90IDxoZWFkPlxuICAgIGxldCBjaGlsZHJlbiA9IHRhcmdldC5jaGlsZE5vZGVzO1xuICAgIC8vIElmIHRhcmdldCBpcyA8aGVhZD4sIHRoZXJlIG1heSBiZSBjaGlsZHJlbiB3aXRob3V0IGNsYWltX29yZGVyXG4gICAgaWYgKHRhcmdldC5ub2RlTmFtZSA9PT0gJ0hFQUQnKSB7XG4gICAgICAgIGNvbnN0IG15Q2hpbGRyZW4gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKG5vZGUuY2xhaW1fb3JkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG15Q2hpbGRyZW4ucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjaGlsZHJlbiA9IG15Q2hpbGRyZW47XG4gICAgfVxuICAgIC8qXG4gICAgKiBSZW9yZGVyIGNsYWltZWQgY2hpbGRyZW4gb3B0aW1hbGx5LlxuICAgICogV2UgY2FuIHJlb3JkZXIgY2xhaW1lZCBjaGlsZHJlbiBvcHRpbWFsbHkgYnkgZmluZGluZyB0aGUgbG9uZ2VzdCBzdWJzZXF1ZW5jZSBvZlxuICAgICogbm9kZXMgdGhhdCBhcmUgYWxyZWFkeSBjbGFpbWVkIGluIG9yZGVyIGFuZCBvbmx5IG1vdmluZyB0aGUgcmVzdC4gVGhlIGxvbmdlc3RcbiAgICAqIHN1YnNlcXVlbmNlIHN1YnNlcXVlbmNlIG9mIG5vZGVzIHRoYXQgYXJlIGNsYWltZWQgaW4gb3JkZXIgY2FuIGJlIGZvdW5kIGJ5XG4gICAgKiBjb21wdXRpbmcgdGhlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBvZiAuY2xhaW1fb3JkZXIgdmFsdWVzLlxuICAgICpcbiAgICAqIFRoaXMgYWxnb3JpdGhtIGlzIG9wdGltYWwgaW4gZ2VuZXJhdGluZyB0aGUgbGVhc3QgYW1vdW50IG9mIHJlb3JkZXIgb3BlcmF0aW9uc1xuICAgICogcG9zc2libGUuXG4gICAgKlxuICAgICogUHJvb2Y6XG4gICAgKiBXZSBrbm93IHRoYXQsIGdpdmVuIGEgc2V0IG9mIHJlb3JkZXJpbmcgb3BlcmF0aW9ucywgdGhlIG5vZGVzIHRoYXQgZG8gbm90IG1vdmVcbiAgICAqIGFsd2F5cyBmb3JtIGFuIGluY3JlYXNpbmcgc3Vic2VxdWVuY2UsIHNpbmNlIHRoZXkgZG8gbm90IG1vdmUgYW1vbmcgZWFjaCBvdGhlclxuICAgICogbWVhbmluZyB0aGF0IHRoZXkgbXVzdCBiZSBhbHJlYWR5IG9yZGVyZWQgYW1vbmcgZWFjaCBvdGhlci4gVGh1cywgdGhlIG1heGltYWxcbiAgICAqIHNldCBvZiBub2RlcyB0aGF0IGRvIG5vdCBtb3ZlIGZvcm0gYSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2UuXG4gICAgKi9cbiAgICAvLyBDb21wdXRlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZVxuICAgIC8vIG06IHN1YnNlcXVlbmNlIGxlbmd0aCBqID0+IGluZGV4IGsgb2Ygc21hbGxlc3QgdmFsdWUgdGhhdCBlbmRzIGFuIGluY3JlYXNpbmcgc3Vic2VxdWVuY2Ugb2YgbGVuZ3RoIGpcbiAgICBjb25zdCBtID0gbmV3IEludDMyQXJyYXkoY2hpbGRyZW4ubGVuZ3RoICsgMSk7XG4gICAgLy8gUHJlZGVjZXNzb3IgaW5kaWNlcyArIDFcbiAgICBjb25zdCBwID0gbmV3IEludDMyQXJyYXkoY2hpbGRyZW4ubGVuZ3RoKTtcbiAgICBtWzBdID0gLTE7XG4gICAgbGV0IGxvbmdlc3QgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGNoaWxkcmVuW2ldLmNsYWltX29yZGVyO1xuICAgICAgICAvLyBGaW5kIHRoZSBsYXJnZXN0IHN1YnNlcXVlbmNlIGxlbmd0aCBzdWNoIHRoYXQgaXQgZW5kcyBpbiBhIHZhbHVlIGxlc3MgdGhhbiBvdXIgY3VycmVudCB2YWx1ZVxuICAgICAgICAvLyB1cHBlcl9ib3VuZCByZXR1cm5zIGZpcnN0IGdyZWF0ZXIgdmFsdWUsIHNvIHdlIHN1YnRyYWN0IG9uZVxuICAgICAgICAvLyB3aXRoIGZhc3QgcGF0aCBmb3Igd2hlbiB3ZSBhcmUgb24gdGhlIGN1cnJlbnQgbG9uZ2VzdCBzdWJzZXF1ZW5jZVxuICAgICAgICBjb25zdCBzZXFMZW4gPSAoKGxvbmdlc3QgPiAwICYmIGNoaWxkcmVuW21bbG9uZ2VzdF1dLmNsYWltX29yZGVyIDw9IGN1cnJlbnQpID8gbG9uZ2VzdCArIDEgOiB1cHBlcl9ib3VuZCgxLCBsb25nZXN0LCBpZHggPT4gY2hpbGRyZW5bbVtpZHhdXS5jbGFpbV9vcmRlciwgY3VycmVudCkpIC0gMTtcbiAgICAgICAgcFtpXSA9IG1bc2VxTGVuXSArIDE7XG4gICAgICAgIGNvbnN0IG5ld0xlbiA9IHNlcUxlbiArIDE7XG4gICAgICAgIC8vIFdlIGNhbiBndWFyYW50ZWUgdGhhdCBjdXJyZW50IGlzIHRoZSBzbWFsbGVzdCB2YWx1ZS4gT3RoZXJ3aXNlLCB3ZSB3b3VsZCBoYXZlIGdlbmVyYXRlZCBhIGxvbmdlciBzZXF1ZW5jZS5cbiAgICAgICAgbVtuZXdMZW5dID0gaTtcbiAgICAgICAgbG9uZ2VzdCA9IE1hdGgubWF4KG5ld0xlbiwgbG9uZ2VzdCk7XG4gICAgfVxuICAgIC8vIFRoZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2Ugb2Ygbm9kZXMgKGluaXRpYWxseSByZXZlcnNlZClcbiAgICBjb25zdCBsaXMgPSBbXTtcbiAgICAvLyBUaGUgcmVzdCBvZiB0aGUgbm9kZXMsIG5vZGVzIHRoYXQgd2lsbCBiZSBtb3ZlZFxuICAgIGNvbnN0IHRvTW92ZSA9IFtdO1xuICAgIGxldCBsYXN0ID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICBmb3IgKGxldCBjdXIgPSBtW2xvbmdlc3RdICsgMTsgY3VyICE9IDA7IGN1ciA9IHBbY3VyIC0gMV0pIHtcbiAgICAgICAgbGlzLnB1c2goY2hpbGRyZW5bY3VyIC0gMV0pO1xuICAgICAgICBmb3IgKDsgbGFzdCA+PSBjdXI7IGxhc3QtLSkge1xuICAgICAgICAgICAgdG9Nb3ZlLnB1c2goY2hpbGRyZW5bbGFzdF0pO1xuICAgICAgICB9XG4gICAgICAgIGxhc3QtLTtcbiAgICB9XG4gICAgZm9yICg7IGxhc3QgPj0gMDsgbGFzdC0tKSB7XG4gICAgICAgIHRvTW92ZS5wdXNoKGNoaWxkcmVuW2xhc3RdKTtcbiAgICB9XG4gICAgbGlzLnJldmVyc2UoKTtcbiAgICAvLyBXZSBzb3J0IHRoZSBub2RlcyBiZWluZyBtb3ZlZCB0byBndWFyYW50ZWUgdGhhdCB0aGVpciBpbnNlcnRpb24gb3JkZXIgbWF0Y2hlcyB0aGUgY2xhaW0gb3JkZXJcbiAgICB0b01vdmUuc29ydCgoYSwgYikgPT4gYS5jbGFpbV9vcmRlciAtIGIuY2xhaW1fb3JkZXIpO1xuICAgIC8vIEZpbmFsbHksIHdlIG1vdmUgdGhlIG5vZGVzXG4gICAgZm9yIChsZXQgaSA9IDAsIGogPSAwOyBpIDwgdG9Nb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHdoaWxlIChqIDwgbGlzLmxlbmd0aCAmJiB0b01vdmVbaV0uY2xhaW1fb3JkZXIgPj0gbGlzW2pdLmNsYWltX29yZGVyKSB7XG4gICAgICAgICAgICBqKys7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYW5jaG9yID0gaiA8IGxpcy5sZW5ndGggPyBsaXNbal0gOiBudWxsO1xuICAgICAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlKHRvTW92ZVtpXSwgYW5jaG9yKTtcbiAgICB9XG59XG5mdW5jdGlvbiBhcHBlbmQodGFyZ2V0LCBub2RlKSB7XG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xufVxuZnVuY3Rpb24gYXBwZW5kX3N0eWxlcyh0YXJnZXQsIHN0eWxlX3NoZWV0X2lkLCBzdHlsZXMpIHtcbiAgICBjb25zdCBhcHBlbmRfc3R5bGVzX3RvID0gZ2V0X3Jvb3RfZm9yX3N0eWxlKHRhcmdldCk7XG4gICAgaWYgKCFhcHBlbmRfc3R5bGVzX3RvLmdldEVsZW1lbnRCeUlkKHN0eWxlX3NoZWV0X2lkKSkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IGVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHN0eWxlLmlkID0gc3R5bGVfc2hlZXRfaWQ7XG4gICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gc3R5bGVzO1xuICAgICAgICBhcHBlbmRfc3R5bGVzaGVldChhcHBlbmRfc3R5bGVzX3RvLCBzdHlsZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0X3Jvb3RfZm9yX3N0eWxlKG5vZGUpIHtcbiAgICBpZiAoIW5vZGUpXG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICBjb25zdCByb290ID0gbm9kZS5nZXRSb290Tm9kZSA/IG5vZGUuZ2V0Um9vdE5vZGUoKSA6IG5vZGUub3duZXJEb2N1bWVudDtcbiAgICBpZiAocm9vdCAmJiByb290Lmhvc3QpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfVxuICAgIHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQ7XG59XG5mdW5jdGlvbiBhcHBlbmRfZW1wdHlfc3R5bGVzaGVldChub2RlKSB7XG4gICAgY29uc3Qgc3R5bGVfZWxlbWVudCA9IGVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgYXBwZW5kX3N0eWxlc2hlZXQoZ2V0X3Jvb3RfZm9yX3N0eWxlKG5vZGUpLCBzdHlsZV9lbGVtZW50KTtcbiAgICByZXR1cm4gc3R5bGVfZWxlbWVudC5zaGVldDtcbn1cbmZ1bmN0aW9uIGFwcGVuZF9zdHlsZXNoZWV0KG5vZGUsIHN0eWxlKSB7XG4gICAgYXBwZW5kKG5vZGUuaGVhZCB8fCBub2RlLCBzdHlsZSk7XG59XG5mdW5jdGlvbiBhcHBlbmRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSkge1xuICAgIGlmIChpc19oeWRyYXRpbmcpIHtcbiAgICAgICAgaW5pdF9oeWRyYXRlKHRhcmdldCk7XG4gICAgICAgIGlmICgodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPT09IHVuZGVmaW5lZCkgfHwgKCh0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCAhPT0gbnVsbCkgJiYgKHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkLnBhcmVudEVsZW1lbnQgIT09IHRhcmdldCkpKSB7XG4gICAgICAgICAgICB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCA9IHRhcmdldC5maXJzdENoaWxkO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNraXAgbm9kZXMgb2YgdW5kZWZpbmVkIG9yZGVyaW5nXG4gICAgICAgIHdoaWxlICgodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgIT09IG51bGwpICYmICh0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZC5jbGFpbV9vcmRlciA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPSB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZSAhPT0gdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQpIHtcbiAgICAgICAgICAgIC8vIFdlIG9ubHkgaW5zZXJ0IGlmIHRoZSBvcmRlcmluZyBvZiB0aGlzIG5vZGUgc2hvdWxkIGJlIG1vZGlmaWVkIG9yIHRoZSBwYXJlbnQgbm9kZSBpcyBub3QgdGFyZ2V0XG4gICAgICAgICAgICBpZiAobm9kZS5jbGFpbV9vcmRlciAhPT0gdW5kZWZpbmVkIHx8IG5vZGUucGFyZW50Tm9kZSAhPT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCA9IG5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlICE9PSB0YXJnZXQgfHwgbm9kZS5uZXh0U2libGluZyAhPT0gbnVsbCkge1xuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gaW5zZXJ0KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IgfHwgbnVsbCk7XG59XG5mdW5jdGlvbiBpbnNlcnRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgaWYgKGlzX2h5ZHJhdGluZyAmJiAhYW5jaG9yKSB7XG4gICAgICAgIGFwcGVuZF9oeWRyYXRpb24odGFyZ2V0LCBub2RlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlICE9PSB0YXJnZXQgfHwgbm9kZS5uZXh0U2libGluZyAhPSBhbmNob3IpIHtcbiAgICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IgfHwgbnVsbCk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGV0YWNoKG5vZGUpIHtcbiAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG59XG5mdW5jdGlvbiBkZXN0cm95X2VhY2goaXRlcmF0aW9ucywgZGV0YWNoaW5nKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVyYXRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChpdGVyYXRpb25zW2ldKVxuICAgICAgICAgICAgaXRlcmF0aW9uc1tpXS5kKGRldGFjaGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZWxlbWVudChuYW1lKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG59XG5mdW5jdGlvbiBlbGVtZW50X2lzKG5hbWUsIGlzKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSwgeyBpcyB9KTtcbn1cbmZ1bmN0aW9uIG9iamVjdF93aXRob3V0X3Byb3BlcnRpZXMob2JqLCBleGNsdWRlKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0ge307XG4gICAgZm9yIChjb25zdCBrIGluIG9iaikge1xuICAgICAgICBpZiAoaGFzX3Byb3Aob2JqLCBrKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgJiYgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdGFyZ2V0W2tdID0gb2JqW2tdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBzdmdfZWxlbWVudChuYW1lKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBuYW1lKTtcbn1cbmZ1bmN0aW9uIHRleHQoZGF0YSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKTtcbn1cbmZ1bmN0aW9uIHNwYWNlKCkge1xuICAgIHJldHVybiB0ZXh0KCcgJyk7XG59XG5mdW5jdGlvbiBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGV4dCgnJyk7XG59XG5mdW5jdGlvbiBsaXN0ZW4obm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIHJldHVybiAoKSA9PiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcHJldmVudF9kZWZhdWx0KGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gc3RvcF9wcm9wYWdhdGlvbihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH07XG59XG5mdW5jdGlvbiBzZWxmKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMpXG4gICAgICAgICAgICBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gdHJ1c3RlZChmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoZXZlbnQuaXNUcnVzdGVkKVxuICAgICAgICAgICAgZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGF0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKVxuICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgIGVsc2UgaWYgKG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSkgIT09IHZhbHVlKVxuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHNldF9hdHRyaWJ1dGVzKG5vZGUsIGF0dHJpYnV0ZXMpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgZGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhub2RlLl9fcHJvdG9fXyk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICBpZiAoYXR0cmlidXRlc1trZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlLmNzc1RleHQgPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5ID09PSAnX192YWx1ZScpIHtcbiAgICAgICAgICAgIG5vZGUudmFsdWUgPSBub2RlW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGVzY3JpcHRvcnNba2V5XSAmJiBkZXNjcmlwdG9yc1trZXldLnNldCkge1xuICAgICAgICAgICAgbm9kZVtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBzZXRfc3ZnX2F0dHJpYnV0ZXMobm9kZSwgYXR0cmlidXRlcykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgYXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X2N1c3RvbV9lbGVtZW50X2RhdGEobm9kZSwgcHJvcCwgdmFsdWUpIHtcbiAgICBpZiAocHJvcCBpbiBub2RlKSB7XG4gICAgICAgIG5vZGVbcHJvcF0gPSB0eXBlb2Ygbm9kZVtwcm9wXSA9PT0gJ2Jvb2xlYW4nICYmIHZhbHVlID09PSAnJyA/IHRydWUgOiB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGF0dHIobm9kZSwgcHJvcCwgdmFsdWUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHhsaW5rX2F0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIG5vZGUuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCBhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGdldF9iaW5kaW5nX2dyb3VwX3ZhbHVlKGdyb3VwLCBfX3ZhbHVlLCBjaGVja2VkKSB7XG4gICAgY29uc3QgdmFsdWUgPSBuZXcgU2V0KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncm91cC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoZ3JvdXBbaV0uY2hlY2tlZClcbiAgICAgICAgICAgIHZhbHVlLmFkZChncm91cFtpXS5fX3ZhbHVlKTtcbiAgICB9XG4gICAgaWYgKCFjaGVja2VkKSB7XG4gICAgICAgIHZhbHVlLmRlbGV0ZShfX3ZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20odmFsdWUpO1xufVxuZnVuY3Rpb24gdG9fbnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAnJyA/IG51bGwgOiArdmFsdWU7XG59XG5mdW5jdGlvbiB0aW1lX3Jhbmdlc190b19hcnJheShyYW5nZXMpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGFycmF5LnB1c2goeyBzdGFydDogcmFuZ2VzLnN0YXJ0KGkpLCBlbmQ6IHJhbmdlcy5lbmQoaSkgfSk7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbn1cbmZ1bmN0aW9uIGNoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpO1xufVxuZnVuY3Rpb24gaW5pdF9jbGFpbV9pbmZvKG5vZGVzKSB7XG4gICAgaWYgKG5vZGVzLmNsYWltX2luZm8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBub2Rlcy5jbGFpbV9pbmZvID0geyBsYXN0X2luZGV4OiAwLCB0b3RhbF9jbGFpbWVkOiAwIH07XG4gICAgfVxufVxuZnVuY3Rpb24gY2xhaW1fbm9kZShub2RlcywgcHJlZGljYXRlLCBwcm9jZXNzTm9kZSwgY3JlYXRlTm9kZSwgZG9udFVwZGF0ZUxhc3RJbmRleCA9IGZhbHNlKSB7XG4gICAgLy8gVHJ5IHRvIGZpbmQgbm9kZXMgaW4gYW4gb3JkZXIgc3VjaCB0aGF0IHdlIGxlbmd0aGVuIHRoZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2VcbiAgICBpbml0X2NsYWltX2luZm8obm9kZXMpO1xuICAgIGNvbnN0IHJlc3VsdE5vZGUgPSAoKCkgPT4ge1xuICAgICAgICAvLyBXZSBmaXJzdCB0cnkgdG8gZmluZCBhbiBlbGVtZW50IGFmdGVyIHRoZSBwcmV2aW91cyBvbmVcbiAgICAgICAgZm9yIChsZXQgaSA9IG5vZGVzLmNsYWltX2luZm8ubGFzdF9pbmRleDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgICAgICBpZiAocHJlZGljYXRlKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSBwcm9jZXNzTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVwbGFjZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2Rlc1tpXSA9IHJlcGxhY2VtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWRvbnRVcGRhdGVMYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4ID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSB0cnkgdG8gZmluZCBvbmUgYmVmb3JlXG4gICAgICAgIC8vIFdlIGl0ZXJhdGUgaW4gcmV2ZXJzZSBzbyB0aGF0IHdlIGRvbid0IGdvIHRvbyBmYXIgYmFja1xuICAgICAgICBmb3IgKGxldCBpID0gbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgICAgIGlmIChwcmVkaWNhdGUobm9kZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXBsYWNlbWVudCA9IHByb2Nlc3NOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgIGlmIChyZXBsYWNlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzW2ldID0gcmVwbGFjZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZG9udFVwZGF0ZUxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXBsYWNlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHdlIHNwbGljZWQgYmVmb3JlIHRoZSBsYXN0X2luZGV4LCB3ZSBkZWNyZWFzZSBpdFxuICAgICAgICAgICAgICAgICAgICBub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXgtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgd2UgY2FuJ3QgZmluZCBhbnkgbWF0Y2hpbmcgbm9kZSwgd2UgY3JlYXRlIGEgbmV3IG9uZVxuICAgICAgICByZXR1cm4gY3JlYXRlTm9kZSgpO1xuICAgIH0pKCk7XG4gICAgcmVzdWx0Tm9kZS5jbGFpbV9vcmRlciA9IG5vZGVzLmNsYWltX2luZm8udG90YWxfY2xhaW1lZDtcbiAgICBub2Rlcy5jbGFpbV9pbmZvLnRvdGFsX2NsYWltZWQgKz0gMTtcbiAgICByZXR1cm4gcmVzdWx0Tm9kZTtcbn1cbmZ1bmN0aW9uIGNsYWltX2VsZW1lbnRfYmFzZShub2RlcywgbmFtZSwgYXR0cmlidXRlcywgY3JlYXRlX2VsZW1lbnQpIHtcbiAgICByZXR1cm4gY2xhaW1fbm9kZShub2RlcywgKG5vZGUpID0+IG5vZGUubm9kZU5hbWUgPT09IG5hbWUsIChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbW92ZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gbm9kZS5hdHRyaWJ1dGVzW2pdO1xuICAgICAgICAgICAgaWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZS5uYW1lXSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZS5wdXNoKGF0dHJpYnV0ZS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZW1vdmUuZm9yRWFjaCh2ID0+IG5vZGUucmVtb3ZlQXR0cmlidXRlKHYpKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LCAoKSA9PiBjcmVhdGVfZWxlbWVudChuYW1lKSk7XG59XG5mdW5jdGlvbiBjbGFpbV9lbGVtZW50KG5vZGVzLCBuYW1lLCBhdHRyaWJ1dGVzKSB7XG4gICAgcmV0dXJuIGNsYWltX2VsZW1lbnRfYmFzZShub2RlcywgbmFtZSwgYXR0cmlidXRlcywgZWxlbWVudCk7XG59XG5mdW5jdGlvbiBjbGFpbV9zdmdfZWxlbWVudChub2RlcywgbmFtZSwgYXR0cmlidXRlcykge1xuICAgIHJldHVybiBjbGFpbV9lbGVtZW50X2Jhc2Uobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMsIHN2Z19lbGVtZW50KTtcbn1cbmZ1bmN0aW9uIGNsYWltX3RleHQobm9kZXMsIGRhdGEpIHtcbiAgICByZXR1cm4gY2xhaW1fbm9kZShub2RlcywgKG5vZGUpID0+IG5vZGUubm9kZVR5cGUgPT09IDMsIChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFTdHIgPSAnJyArIGRhdGE7XG4gICAgICAgIGlmIChub2RlLmRhdGEuc3RhcnRzV2l0aChkYXRhU3RyKSkge1xuICAgICAgICAgICAgaWYgKG5vZGUuZGF0YS5sZW5ndGggIT09IGRhdGFTdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuc3BsaXRUZXh0KGRhdGFTdHIubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuZGF0YSA9IGRhdGFTdHI7XG4gICAgICAgIH1cbiAgICB9LCAoKSA9PiB0ZXh0KGRhdGEpLCB0cnVlIC8vIFRleHQgbm9kZXMgc2hvdWxkIG5vdCB1cGRhdGUgbGFzdCBpbmRleCBzaW5jZSBpdCBpcyBsaWtlbHkgbm90IHdvcnRoIGl0IHRvIGVsaW1pbmF0ZSBhbiBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIG9mIGFjdHVhbCBlbGVtZW50c1xuICAgICk7XG59XG5mdW5jdGlvbiBjbGFpbV9zcGFjZShub2Rlcykge1xuICAgIHJldHVybiBjbGFpbV90ZXh0KG5vZGVzLCAnICcpO1xufVxuZnVuY3Rpb24gZmluZF9jb21tZW50KG5vZGVzLCB0ZXh0LCBzdGFydCkge1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDggLyogY29tbWVudCBub2RlICovICYmIG5vZGUudGV4dENvbnRlbnQudHJpbSgpID09PSB0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZXMubGVuZ3RoO1xufVxuZnVuY3Rpb24gY2xhaW1faHRtbF90YWcobm9kZXMpIHtcbiAgICAvLyBmaW5kIGh0bWwgb3BlbmluZyB0YWdcbiAgICBjb25zdCBzdGFydF9pbmRleCA9IGZpbmRfY29tbWVudChub2RlcywgJ0hUTUxfVEFHX1NUQVJUJywgMCk7XG4gICAgY29uc3QgZW5kX2luZGV4ID0gZmluZF9jb21tZW50KG5vZGVzLCAnSFRNTF9UQUdfRU5EJywgc3RhcnRfaW5kZXgpO1xuICAgIGlmIChzdGFydF9pbmRleCA9PT0gZW5kX2luZGV4KSB7XG4gICAgICAgIHJldHVybiBuZXcgSHRtbFRhZ0h5ZHJhdGlvbigpO1xuICAgIH1cbiAgICBpbml0X2NsYWltX2luZm8obm9kZXMpO1xuICAgIGNvbnN0IGh0bWxfdGFnX25vZGVzID0gbm9kZXMuc3BsaWNlKHN0YXJ0X2luZGV4LCBlbmRfaW5kZXggLSBzdGFydF9pbmRleCArIDEpO1xuICAgIGRldGFjaChodG1sX3RhZ19ub2Rlc1swXSk7XG4gICAgZGV0YWNoKGh0bWxfdGFnX25vZGVzW2h0bWxfdGFnX25vZGVzLmxlbmd0aCAtIDFdKTtcbiAgICBjb25zdCBjbGFpbWVkX25vZGVzID0gaHRtbF90YWdfbm9kZXMuc2xpY2UoMSwgaHRtbF90YWdfbm9kZXMubGVuZ3RoIC0gMSk7XG4gICAgZm9yIChjb25zdCBuIG9mIGNsYWltZWRfbm9kZXMpIHtcbiAgICAgICAgbi5jbGFpbV9vcmRlciA9IG5vZGVzLmNsYWltX2luZm8udG90YWxfY2xhaW1lZDtcbiAgICAgICAgbm9kZXMuY2xhaW1faW5mby50b3RhbF9jbGFpbWVkICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBuZXcgSHRtbFRhZ0h5ZHJhdGlvbihjbGFpbWVkX25vZGVzKTtcbn1cbmZ1bmN0aW9uIHNldF9kYXRhKHRleHQsIGRhdGEpIHtcbiAgICBkYXRhID0gJycgKyBkYXRhO1xuICAgIGlmICh0ZXh0Lndob2xlVGV4dCAhPT0gZGF0YSlcbiAgICAgICAgdGV4dC5kYXRhID0gZGF0YTtcbn1cbmZ1bmN0aW9uIHNldF9pbnB1dF92YWx1ZShpbnB1dCwgdmFsdWUpIHtcbiAgICBpbnB1dC52YWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xufVxuZnVuY3Rpb24gc2V0X2lucHV0X3R5cGUoaW5wdXQsIHR5cGUpIHtcbiAgICB0cnkge1xuICAgICAgICBpbnB1dC50eXBlID0gdHlwZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNldF9zdHlsZShub2RlLCBrZXksIHZhbHVlLCBpbXBvcnRhbnQpIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgbm9kZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShrZXkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlLCBpbXBvcnRhbnQgPyAnaW1wb3J0YW50JyA6ICcnKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZWxlY3Rfb3B0aW9uKHNlbGVjdCwgdmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuICAgICAgICBpZiAob3B0aW9uLl9fdmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNlbGVjdC5zZWxlY3RlZEluZGV4ID0gLTE7IC8vIG5vIG9wdGlvbiBzaG91bGQgYmUgc2VsZWN0ZWRcbn1cbmZ1bmN0aW9uIHNlbGVjdF9vcHRpb25zKHNlbGVjdCwgdmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB+dmFsdWUuaW5kZXhPZihvcHRpb24uX192YWx1ZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2VsZWN0X3ZhbHVlKHNlbGVjdCkge1xuICAgIGNvbnN0IHNlbGVjdGVkX29wdGlvbiA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpIHx8IHNlbGVjdC5vcHRpb25zWzBdO1xuICAgIHJldHVybiBzZWxlY3RlZF9vcHRpb24gJiYgc2VsZWN0ZWRfb3B0aW9uLl9fdmFsdWU7XG59XG5mdW5jdGlvbiBzZWxlY3RfbXVsdGlwbGVfdmFsdWUoc2VsZWN0KSB7XG4gICAgcmV0dXJuIFtdLm1hcC5jYWxsKHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCc6Y2hlY2tlZCcpLCBvcHRpb24gPT4gb3B0aW9uLl9fdmFsdWUpO1xufVxuLy8gdW5mb3J0dW5hdGVseSB0aGlzIGNhbid0IGJlIGEgY29uc3RhbnQgYXMgdGhhdCB3b3VsZG4ndCBiZSB0cmVlLXNoYWtlYWJsZVxuLy8gc28gd2UgY2FjaGUgdGhlIHJlc3VsdCBpbnN0ZWFkXG5sZXQgY3Jvc3NvcmlnaW47XG5mdW5jdGlvbiBpc19jcm9zc29yaWdpbigpIHtcbiAgICBpZiAoY3Jvc3NvcmlnaW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjcm9zc29yaWdpbiA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB2b2lkIHdpbmRvdy5wYXJlbnQuZG9jdW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjcm9zc29yaWdpbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNyb3Nzb3JpZ2luO1xufVxuZnVuY3Rpb24gYWRkX3Jlc2l6ZV9saXN0ZW5lcihub2RlLCBmbikge1xuICAgIGNvbnN0IGNvbXB1dGVkX3N0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBpZiAoY29tcHV0ZWRfc3R5bGUucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIG5vZGUuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIH1cbiAgICBjb25zdCBpZnJhbWUgPSBlbGVtZW50KCdpZnJhbWUnKTtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBibG9jazsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7ICcgK1xuICAgICAgICAnb3ZlcmZsb3c6IGhpZGRlbjsgYm9yZGVyOiAwOyBvcGFjaXR5OiAwOyBwb2ludGVyLWV2ZW50czogbm9uZTsgei1pbmRleDogLTE7Jyk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIGlmcmFtZS50YWJJbmRleCA9IC0xO1xuICAgIGNvbnN0IGNyb3Nzb3JpZ2luID0gaXNfY3Jvc3NvcmlnaW4oKTtcbiAgICBsZXQgdW5zdWJzY3JpYmU7XG4gICAgaWYgKGNyb3Nzb3JpZ2luKSB7XG4gICAgICAgIGlmcmFtZS5zcmMgPSBcImRhdGE6dGV4dC9odG1sLDxzY3JpcHQ+b25yZXNpemU9ZnVuY3Rpb24oKXtwYXJlbnQucG9zdE1lc3NhZ2UoMCwnKicpfTwvc2NyaXB0PlwiO1xuICAgICAgICB1bnN1YnNjcmliZSA9IGxpc3Rlbih3aW5kb3csICdtZXNzYWdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBpZnJhbWUuY29udGVudFdpbmRvdylcbiAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmcmFtZS5zcmMgPSAnYWJvdXQ6YmxhbmsnO1xuICAgICAgICBpZnJhbWUub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUgPSBsaXN0ZW4oaWZyYW1lLmNvbnRlbnRXaW5kb3csICdyZXNpemUnLCBmbik7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGFwcGVuZChub2RlLCBpZnJhbWUpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmIChjcm9zc29yaWdpbikge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh1bnN1YnNjcmliZSAmJiBpZnJhbWUuY29udGVudFdpbmRvdykge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICBkZXRhY2goaWZyYW1lKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gdG9nZ2xlX2NsYXNzKGVsZW1lbnQsIG5hbWUsIHRvZ2dsZSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0W3RvZ2dsZSA/ICdhZGQnIDogJ3JlbW92ZSddKG5hbWUpO1xufVxuZnVuY3Rpb24gY3VzdG9tX2V2ZW50KHR5cGUsIGRldGFpbCwgYnViYmxlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgIGUuaW5pdEN1c3RvbUV2ZW50KHR5cGUsIGJ1YmJsZXMsIGZhbHNlLCBkZXRhaWwpO1xuICAgIHJldHVybiBlO1xufVxuZnVuY3Rpb24gcXVlcnlfc2VsZWN0b3JfYWxsKHNlbGVjdG9yLCBwYXJlbnQgPSBkb2N1bWVudC5ib2R5KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20ocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbn1cbmNsYXNzIEh0bWxUYWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmUgPSB0aGlzLm4gPSBudWxsO1xuICAgIH1cbiAgICBjKGh0bWwpIHtcbiAgICAgICAgdGhpcy5oKGh0bWwpO1xuICAgIH1cbiAgICBtKGh0bWwsIHRhcmdldCwgYW5jaG9yID0gbnVsbCkge1xuICAgICAgICBpZiAoIXRoaXMuZSkge1xuICAgICAgICAgICAgdGhpcy5lID0gZWxlbWVudCh0YXJnZXQubm9kZU5hbWUpO1xuICAgICAgICAgICAgdGhpcy50ID0gdGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy5jKGh0bWwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaShhbmNob3IpO1xuICAgIH1cbiAgICBoKGh0bWwpIHtcbiAgICAgICAgdGhpcy5lLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIHRoaXMubiA9IEFycmF5LmZyb20odGhpcy5lLmNoaWxkTm9kZXMpO1xuICAgIH1cbiAgICBpKGFuY2hvcikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaW5zZXJ0KHRoaXMudCwgdGhpcy5uW2ldLCBhbmNob3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHAoaHRtbCkge1xuICAgICAgICB0aGlzLmQoKTtcbiAgICAgICAgdGhpcy5oKGh0bWwpO1xuICAgICAgICB0aGlzLmkodGhpcy5hKTtcbiAgICB9XG4gICAgZCgpIHtcbiAgICAgICAgdGhpcy5uLmZvckVhY2goZGV0YWNoKTtcbiAgICB9XG59XG5jbGFzcyBIdG1sVGFnSHlkcmF0aW9uIGV4dGVuZHMgSHRtbFRhZyB7XG4gICAgY29uc3RydWN0b3IoY2xhaW1lZF9ub2Rlcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmUgPSB0aGlzLm4gPSBudWxsO1xuICAgICAgICB0aGlzLmwgPSBjbGFpbWVkX25vZGVzO1xuICAgIH1cbiAgICBjKGh0bWwpIHtcbiAgICAgICAgaWYgKHRoaXMubCkge1xuICAgICAgICAgICAgdGhpcy5uID0gdGhpcy5sO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIuYyhodG1sKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpKGFuY2hvcikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaW5zZXJ0X2h5ZHJhdGlvbih0aGlzLnQsIHRoaXMubltpXSwgYW5jaG9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGF0dHJpYnV0ZV90b19vYmplY3QoYXR0cmlidXRlcykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3QgYXR0cmlidXRlIG9mIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmVzdWx0W2F0dHJpYnV0ZS5uYW1lXSA9IGF0dHJpYnV0ZS52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGdldF9jdXN0b21fZWxlbWVudHNfc2xvdHMoZWxlbWVudCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgIHJlc3VsdFtub2RlLnNsb3QgfHwgJ2RlZmF1bHQnXSA9IHRydWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gd2UgbmVlZCB0byBzdG9yZSB0aGUgaW5mb3JtYXRpb24gZm9yIG11bHRpcGxlIGRvY3VtZW50cyBiZWNhdXNlIGEgU3ZlbHRlIGFwcGxpY2F0aW9uIGNvdWxkIGFsc28gY29udGFpbiBpZnJhbWVzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vc3ZlbHRlanMvc3ZlbHRlL2lzc3Vlcy8zNjI0XG5jb25zdCBtYW5hZ2VkX3N0eWxlcyA9IG5ldyBNYXAoKTtcbmxldCBhY3RpdmUgPSAwO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Rhcmtza3lhcHAvc3RyaW5nLWhhc2gvYmxvYi9tYXN0ZXIvaW5kZXguanNcbmZ1bmN0aW9uIGhhc2goc3RyKSB7XG4gICAgbGV0IGhhc2ggPSA1MzgxO1xuICAgIGxldCBpID0gc3RyLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKVxuICAgICAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgXiBzdHIuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gaGFzaCA+Pj4gMDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9zdHlsZV9pbmZvcm1hdGlvbihkb2MsIG5vZGUpIHtcbiAgICBjb25zdCBpbmZvID0geyBzdHlsZXNoZWV0OiBhcHBlbmRfZW1wdHlfc3R5bGVzaGVldChub2RlKSwgcnVsZXM6IHt9IH07XG4gICAgbWFuYWdlZF9zdHlsZXMuc2V0KGRvYywgaW5mbyk7XG4gICAgcmV0dXJuIGluZm87XG59XG5mdW5jdGlvbiBjcmVhdGVfcnVsZShub2RlLCBhLCBiLCBkdXJhdGlvbiwgZGVsYXksIGVhc2UsIGZuLCB1aWQgPSAwKSB7XG4gICAgY29uc3Qgc3RlcCA9IDE2LjY2NiAvIGR1cmF0aW9uO1xuICAgIGxldCBrZXlmcmFtZXMgPSAne1xcbic7XG4gICAgZm9yIChsZXQgcCA9IDA7IHAgPD0gMTsgcCArPSBzdGVwKSB7XG4gICAgICAgIGNvbnN0IHQgPSBhICsgKGIgLSBhKSAqIGVhc2UocCk7XG4gICAgICAgIGtleWZyYW1lcyArPSBwICogMTAwICsgYCV7JHtmbih0LCAxIC0gdCl9fVxcbmA7XG4gICAgfVxuICAgIGNvbnN0IHJ1bGUgPSBrZXlmcmFtZXMgKyBgMTAwJSB7JHtmbihiLCAxIC0gYil9fVxcbn1gO1xuICAgIGNvbnN0IG5hbWUgPSBgX19zdmVsdGVfJHtoYXNoKHJ1bGUpfV8ke3VpZH1gO1xuICAgIGNvbnN0IGRvYyA9IGdldF9yb290X2Zvcl9zdHlsZShub2RlKTtcbiAgICBjb25zdCB7IHN0eWxlc2hlZXQsIHJ1bGVzIH0gPSBtYW5hZ2VkX3N0eWxlcy5nZXQoZG9jKSB8fCBjcmVhdGVfc3R5bGVfaW5mb3JtYXRpb24oZG9jLCBub2RlKTtcbiAgICBpZiAoIXJ1bGVzW25hbWVdKSB7XG4gICAgICAgIHJ1bGVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgc3R5bGVzaGVldC5pbnNlcnRSdWxlKGBAa2V5ZnJhbWVzICR7bmFtZX0gJHtydWxlfWAsIHN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcbiAgICB9XG4gICAgY29uc3QgYW5pbWF0aW9uID0gbm9kZS5zdHlsZS5hbmltYXRpb24gfHwgJyc7XG4gICAgbm9kZS5zdHlsZS5hbmltYXRpb24gPSBgJHthbmltYXRpb24gPyBgJHthbmltYXRpb259LCBgIDogJyd9JHtuYW1lfSAke2R1cmF0aW9ufW1zIGxpbmVhciAke2RlbGF5fW1zIDEgYm90aGA7XG4gICAgYWN0aXZlICs9IDE7XG4gICAgcmV0dXJuIG5hbWU7XG59XG5mdW5jdGlvbiBkZWxldGVfcnVsZShub2RlLCBuYW1lKSB7XG4gICAgY29uc3QgcHJldmlvdXMgPSAobm9kZS5zdHlsZS5hbmltYXRpb24gfHwgJycpLnNwbGl0KCcsICcpO1xuICAgIGNvbnN0IG5leHQgPSBwcmV2aW91cy5maWx0ZXIobmFtZVxuICAgICAgICA/IGFuaW0gPT4gYW5pbS5pbmRleE9mKG5hbWUpIDwgMCAvLyByZW1vdmUgc3BlY2lmaWMgYW5pbWF0aW9uXG4gICAgICAgIDogYW5pbSA9PiBhbmltLmluZGV4T2YoJ19fc3ZlbHRlJykgPT09IC0xIC8vIHJlbW92ZSBhbGwgU3ZlbHRlIGFuaW1hdGlvbnNcbiAgICApO1xuICAgIGNvbnN0IGRlbGV0ZWQgPSBwcmV2aW91cy5sZW5ndGggLSBuZXh0Lmxlbmd0aDtcbiAgICBpZiAoZGVsZXRlZCkge1xuICAgICAgICBub2RlLnN0eWxlLmFuaW1hdGlvbiA9IG5leHQuam9pbignLCAnKTtcbiAgICAgICAgYWN0aXZlIC09IGRlbGV0ZWQ7XG4gICAgICAgIGlmICghYWN0aXZlKVxuICAgICAgICAgICAgY2xlYXJfcnVsZXMoKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjbGVhcl9ydWxlcygpIHtcbiAgICByYWYoKCkgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBtYW5hZ2VkX3N0eWxlcy5mb3JFYWNoKGluZm8gPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBzdHlsZXNoZWV0IH0gPSBpbmZvO1xuICAgICAgICAgICAgbGV0IGkgPSBzdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlIChpLS0pXG4gICAgICAgICAgICAgICAgc3R5bGVzaGVldC5kZWxldGVSdWxlKGkpO1xuICAgICAgICAgICAgaW5mby5ydWxlcyA9IHt9O1xuICAgICAgICB9KTtcbiAgICAgICAgbWFuYWdlZF9zdHlsZXMuY2xlYXIoKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlX2FuaW1hdGlvbihub2RlLCBmcm9tLCBmbiwgcGFyYW1zKSB7XG4gICAgaWYgKCFmcm9tKVxuICAgICAgICByZXR1cm4gbm9vcDtcbiAgICBjb25zdCB0byA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKGZyb20ubGVmdCA9PT0gdG8ubGVmdCAmJiBmcm9tLnJpZ2h0ID09PSB0by5yaWdodCAmJiBmcm9tLnRvcCA9PT0gdG8udG9wICYmIGZyb20uYm90dG9tID09PSB0by5ib3R0b20pXG4gICAgICAgIHJldHVybiBub29wO1xuICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIFxuICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogc2hvdWxkIHRoaXMgYmUgc2VwYXJhdGVkIGZyb20gZGVzdHJ1Y3R1cmluZz8gT3Igc3RhcnQvZW5kIGFkZGVkIHRvIHB1YmxpYyBhcGkgYW5kIGRvY3VtZW50YXRpb24/XG4gICAgc3RhcnQ6IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5LCBcbiAgICAvLyBAdHMtaWdub3JlIHRvZG86XG4gICAgZW5kID0gc3RhcnRfdGltZSArIGR1cmF0aW9uLCB0aWNrID0gbm9vcCwgY3NzIH0gPSBmbihub2RlLCB7IGZyb20sIHRvIH0sIHBhcmFtcyk7XG4gICAgbGV0IHJ1bm5pbmcgPSB0cnVlO1xuICAgIGxldCBzdGFydGVkID0gZmFsc2U7XG4gICAgbGV0IG5hbWU7XG4gICAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgIG5hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAwLCAxLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRlbGF5KSB7XG4gICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgbmFtZSk7XG4gICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgbG9vcChub3cgPT4ge1xuICAgICAgICBpZiAoIXN0YXJ0ZWQgJiYgbm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydGVkICYmIG5vdyA+PSBlbmQpIHtcbiAgICAgICAgICAgIHRpY2soMSwgMCk7XG4gICAgICAgICAgICBzdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFydW5uaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBub3cgLSBzdGFydF90aW1lO1xuICAgICAgICAgICAgY29uc3QgdCA9IDAgKyAxICogZWFzaW5nKHAgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICB0aWNrKHQsIDEgLSB0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICBzdGFydCgpO1xuICAgIHRpY2soMCwgMSk7XG4gICAgcmV0dXJuIHN0b3A7XG59XG5mdW5jdGlvbiBmaXhfcG9zaXRpb24obm9kZSkge1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBpZiAoc3R5bGUucG9zaXRpb24gIT09ICdhYnNvbHV0ZScgJiYgc3R5bGUucG9zaXRpb24gIT09ICdmaXhlZCcpIHtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBzdHlsZTtcbiAgICAgICAgY29uc3QgYSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIG5vZGUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBub2RlLnN0eWxlLndpZHRoID0gd2lkdGg7XG4gICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBhZGRfdHJhbnNmb3JtKG5vZGUsIGEpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZF90cmFuc2Zvcm0obm9kZSwgYSkge1xuICAgIGNvbnN0IGIgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChhLmxlZnQgIT09IGIubGVmdCB8fCBhLnRvcCAhPT0gYi50b3ApIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBzdHlsZS50cmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogc3R5bGUudHJhbnNmb3JtO1xuICAgICAgICBub2RlLnN0eWxlLnRyYW5zZm9ybSA9IGAke3RyYW5zZm9ybX0gdHJhbnNsYXRlKCR7YS5sZWZ0IC0gYi5sZWZ0fXB4LCAke2EudG9wIC0gYi50b3B9cHgpYDtcbiAgICB9XG59XG5cbmxldCBjdXJyZW50X2NvbXBvbmVudDtcbmZ1bmN0aW9uIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICBjdXJyZW50X2NvbXBvbmVudCA9IGNvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGdldF9jdXJyZW50X2NvbXBvbmVudCgpIHtcbiAgICBpZiAoIWN1cnJlbnRfY29tcG9uZW50KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Z1bmN0aW9uIGNhbGxlZCBvdXRzaWRlIGNvbXBvbmVudCBpbml0aWFsaXphdGlvbicpO1xuICAgIHJldHVybiBjdXJyZW50X2NvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGJlZm9yZVVwZGF0ZShmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmJlZm9yZV91cGRhdGUucHVzaChmbik7XG59XG5mdW5jdGlvbiBvbk1vdW50KGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQub25fbW91bnQucHVzaChmbik7XG59XG5mdW5jdGlvbiBhZnRlclVwZGF0ZShmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmFmdGVyX3VwZGF0ZS5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIG9uRGVzdHJveShmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLm9uX2Rlc3Ryb3kucHVzaChmbik7XG59XG5mdW5jdGlvbiBjcmVhdGVFdmVudERpc3BhdGNoZXIoKSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCk7XG4gICAgcmV0dXJuICh0eXBlLCBkZXRhaWwpID0+IHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gY29tcG9uZW50LiQkLmNhbGxiYWNrc1t0eXBlXTtcbiAgICAgICAgaWYgKGNhbGxiYWNrcykge1xuICAgICAgICAgICAgLy8gVE9ETyBhcmUgdGhlcmUgc2l0dWF0aW9ucyB3aGVyZSBldmVudHMgY291bGQgYmUgZGlzcGF0Y2hlZFxuICAgICAgICAgICAgLy8gaW4gYSBzZXJ2ZXIgKG5vbi1ET00pIGVudmlyb25tZW50P1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBjdXN0b21fZXZlbnQodHlwZSwgZGV0YWlsKTtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5zbGljZSgpLmZvckVhY2goZm4gPT4ge1xuICAgICAgICAgICAgICAgIGZuLmNhbGwoY29tcG9uZW50LCBldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBzZXRDb250ZXh0KGtleSwgY29udGV4dCkge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQuc2V0KGtleSwgY29udGV4dCk7XG59XG5mdW5jdGlvbiBnZXRDb250ZXh0KGtleSkge1xuICAgIHJldHVybiBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LmdldChrZXkpO1xufVxuZnVuY3Rpb24gZ2V0QWxsQ29udGV4dHMoKSB7XG4gICAgcmV0dXJuIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQ7XG59XG5mdW5jdGlvbiBoYXNDb250ZXh0KGtleSkge1xuICAgIHJldHVybiBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LmhhcyhrZXkpO1xufVxuLy8gVE9ETyBmaWd1cmUgb3V0IGlmIHdlIHN0aWxsIHdhbnQgdG8gc3VwcG9ydFxuLy8gc2hvcnRoYW5kIGV2ZW50cywgb3IgaWYgd2Ugd2FudCB0byBpbXBsZW1lbnRcbi8vIGEgcmVhbCBidWJibGluZyBtZWNoYW5pc21cbmZ1bmN0aW9uIGJ1YmJsZShjb21wb25lbnQsIGV2ZW50KSB7XG4gICAgY29uc3QgY2FsbGJhY2tzID0gY29tcG9uZW50LiQkLmNhbGxiYWNrc1tldmVudC50eXBlXTtcbiAgICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY2FsbGJhY2tzLnNsaWNlKCkuZm9yRWFjaChmbiA9PiBmbi5jYWxsKHRoaXMsIGV2ZW50KSk7XG4gICAgfVxufVxuXG5jb25zdCBkaXJ0eV9jb21wb25lbnRzID0gW107XG5jb25zdCBpbnRyb3MgPSB7IGVuYWJsZWQ6IGZhbHNlIH07XG5jb25zdCBiaW5kaW5nX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgcmVuZGVyX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgZmx1c2hfY2FsbGJhY2tzID0gW107XG5jb25zdCByZXNvbHZlZF9wcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5sZXQgdXBkYXRlX3NjaGVkdWxlZCA9IGZhbHNlO1xuZnVuY3Rpb24gc2NoZWR1bGVfdXBkYXRlKCkge1xuICAgIGlmICghdXBkYXRlX3NjaGVkdWxlZCkge1xuICAgICAgICB1cGRhdGVfc2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgICAgcmVzb2x2ZWRfcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9XG59XG5mdW5jdGlvbiB0aWNrKCkge1xuICAgIHNjaGVkdWxlX3VwZGF0ZSgpO1xuICAgIHJldHVybiByZXNvbHZlZF9wcm9taXNlO1xufVxuZnVuY3Rpb24gYWRkX3JlbmRlcl9jYWxsYmFjayhmbikge1xuICAgIHJlbmRlcl9jYWxsYmFja3MucHVzaChmbik7XG59XG5mdW5jdGlvbiBhZGRfZmx1c2hfY2FsbGJhY2soZm4pIHtcbiAgICBmbHVzaF9jYWxsYmFja3MucHVzaChmbik7XG59XG4vLyBmbHVzaCgpIGNhbGxzIGNhbGxiYWNrcyBpbiB0aGlzIG9yZGVyOlxuLy8gMS4gQWxsIGJlZm9yZVVwZGF0ZSBjYWxsYmFja3MsIGluIG9yZGVyOiBwYXJlbnRzIGJlZm9yZSBjaGlsZHJlblxuLy8gMi4gQWxsIGJpbmQ6dGhpcyBjYWxsYmFja3MsIGluIHJldmVyc2Ugb3JkZXI6IGNoaWxkcmVuIGJlZm9yZSBwYXJlbnRzLlxuLy8gMy4gQWxsIGFmdGVyVXBkYXRlIGNhbGxiYWNrcywgaW4gb3JkZXI6IHBhcmVudHMgYmVmb3JlIGNoaWxkcmVuLiBFWENFUFRcbi8vICAgIGZvciBhZnRlclVwZGF0ZXMgY2FsbGVkIGR1cmluZyB0aGUgaW5pdGlhbCBvbk1vdW50LCB3aGljaCBhcmUgY2FsbGVkIGluXG4vLyAgICByZXZlcnNlIG9yZGVyOiBjaGlsZHJlbiBiZWZvcmUgcGFyZW50cy5cbi8vIFNpbmNlIGNhbGxiYWNrcyBtaWdodCB1cGRhdGUgY29tcG9uZW50IHZhbHVlcywgd2hpY2ggY291bGQgdHJpZ2dlciBhbm90aGVyXG4vLyBjYWxsIHRvIGZsdXNoKCksIHRoZSBmb2xsb3dpbmcgc3RlcHMgZ3VhcmQgYWdhaW5zdCB0aGlzOlxuLy8gMS4gRHVyaW5nIGJlZm9yZVVwZGF0ZSwgYW55IHVwZGF0ZWQgY29tcG9uZW50cyB3aWxsIGJlIGFkZGVkIHRvIHRoZVxuLy8gICAgZGlydHlfY29tcG9uZW50cyBhcnJheSBhbmQgd2lsbCBjYXVzZSBhIHJlZW50cmFudCBjYWxsIHRvIGZsdXNoKCkuIEJlY2F1c2Vcbi8vICAgIHRoZSBmbHVzaCBpbmRleCBpcyBrZXB0IG91dHNpZGUgdGhlIGZ1bmN0aW9uLCB0aGUgcmVlbnRyYW50IGNhbGwgd2lsbCBwaWNrXG4vLyAgICB1cCB3aGVyZSB0aGUgZWFybGllciBjYWxsIGxlZnQgb2ZmIGFuZCBnbyB0aHJvdWdoIGFsbCBkaXJ0eSBjb21wb25lbnRzLiBUaGVcbi8vICAgIGN1cnJlbnRfY29tcG9uZW50IHZhbHVlIGlzIHNhdmVkIGFuZCByZXN0b3JlZCBzbyB0aGF0IHRoZSByZWVudHJhbnQgY2FsbCB3aWxsXG4vLyAgICBub3QgaW50ZXJmZXJlIHdpdGggdGhlIFwicGFyZW50XCIgZmx1c2goKSBjYWxsLlxuLy8gMi4gYmluZDp0aGlzIGNhbGxiYWNrcyBjYW5ub3QgdHJpZ2dlciBuZXcgZmx1c2goKSBjYWxscy5cbi8vIDMuIER1cmluZyBhZnRlclVwZGF0ZSwgYW55IHVwZGF0ZWQgY29tcG9uZW50cyB3aWxsIE5PVCBoYXZlIHRoZWlyIGFmdGVyVXBkYXRlXG4vLyAgICBjYWxsYmFjayBjYWxsZWQgYSBzZWNvbmQgdGltZTsgdGhlIHNlZW5fY2FsbGJhY2tzIHNldCwgb3V0c2lkZSB0aGUgZmx1c2goKVxuLy8gICAgZnVuY3Rpb24sIGd1YXJhbnRlZXMgdGhpcyBiZWhhdmlvci5cbmNvbnN0IHNlZW5fY2FsbGJhY2tzID0gbmV3IFNldCgpO1xubGV0IGZsdXNoaWR4ID0gMDsgLy8gRG8gKm5vdCogbW92ZSB0aGlzIGluc2lkZSB0aGUgZmx1c2goKSBmdW5jdGlvblxuZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgY29uc3Qgc2F2ZWRfY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG4gICAgZG8ge1xuICAgICAgICAvLyBmaXJzdCwgY2FsbCBiZWZvcmVVcGRhdGUgZnVuY3Rpb25zXG4gICAgICAgIC8vIGFuZCB1cGRhdGUgY29tcG9uZW50c1xuICAgICAgICB3aGlsZSAoZmx1c2hpZHggPCBkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gZGlydHlfY29tcG9uZW50c1tmbHVzaGlkeF07XG4gICAgICAgICAgICBmbHVzaGlkeCsrO1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICB1cGRhdGUoY29tcG9uZW50LiQkKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQobnVsbCk7XG4gICAgICAgIGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoID0gMDtcbiAgICAgICAgZmx1c2hpZHggPSAwO1xuICAgICAgICB3aGlsZSAoYmluZGluZ19jYWxsYmFja3MubGVuZ3RoKVxuICAgICAgICAgICAgYmluZGluZ19jYWxsYmFja3MucG9wKCkoKTtcbiAgICAgICAgLy8gdGhlbiwgb25jZSBjb21wb25lbnRzIGFyZSB1cGRhdGVkLCBjYWxsXG4gICAgICAgIC8vIGFmdGVyVXBkYXRlIGZ1bmN0aW9ucy4gVGhpcyBtYXkgY2F1c2VcbiAgICAgICAgLy8gc3Vic2VxdWVudCB1cGRhdGVzLi4uXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVuZGVyX2NhbGxiYWNrcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSByZW5kZXJfY2FsbGJhY2tzW2ldO1xuICAgICAgICAgICAgaWYgKCFzZWVuX2NhbGxiYWNrcy5oYXMoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgLy8gLi4uc28gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBsb29wc1xuICAgICAgICAgICAgICAgIHNlZW5fY2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZW5kZXJfY2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gICAgfSB3aGlsZSAoZGlydHlfY29tcG9uZW50cy5sZW5ndGgpO1xuICAgIHdoaWxlIChmbHVzaF9jYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgICAgIGZsdXNoX2NhbGxiYWNrcy5wb3AoKSgpO1xuICAgIH1cbiAgICB1cGRhdGVfc2NoZWR1bGVkID0gZmFsc2U7XG4gICAgc2Vlbl9jYWxsYmFja3MuY2xlYXIoKTtcbiAgICBzZXRfY3VycmVudF9jb21wb25lbnQoc2F2ZWRfY29tcG9uZW50KTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZSgkJCkge1xuICAgIGlmICgkJC5mcmFnbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAkJC51cGRhdGUoKTtcbiAgICAgICAgcnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTtcbiAgICAgICAgY29uc3QgZGlydHkgPSAkJC5kaXJ0eTtcbiAgICAgICAgJCQuZGlydHkgPSBbLTFdO1xuICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5wKCQkLmN0eCwgZGlydHkpO1xuICAgICAgICAkJC5hZnRlcl91cGRhdGUuZm9yRWFjaChhZGRfcmVuZGVyX2NhbGxiYWNrKTtcbiAgICB9XG59XG5cbmxldCBwcm9taXNlO1xuZnVuY3Rpb24gd2FpdCgpIHtcbiAgICBpZiAoIXByb21pc2UpIHtcbiAgICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICBwcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGRpc3BhdGNoKG5vZGUsIGRpcmVjdGlvbiwga2luZCkge1xuICAgIG5vZGUuZGlzcGF0Y2hFdmVudChjdXN0b21fZXZlbnQoYCR7ZGlyZWN0aW9uID8gJ2ludHJvJyA6ICdvdXRybyd9JHtraW5kfWApKTtcbn1cbmNvbnN0IG91dHJvaW5nID0gbmV3IFNldCgpO1xubGV0IG91dHJvcztcbmZ1bmN0aW9uIGdyb3VwX291dHJvcygpIHtcbiAgICBvdXRyb3MgPSB7XG4gICAgICAgIHI6IDAsXG4gICAgICAgIGM6IFtdLFxuICAgICAgICBwOiBvdXRyb3MgLy8gcGFyZW50IGdyb3VwXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNoZWNrX291dHJvcygpIHtcbiAgICBpZiAoIW91dHJvcy5yKSB7XG4gICAgICAgIHJ1bl9hbGwob3V0cm9zLmMpO1xuICAgIH1cbiAgICBvdXRyb3MgPSBvdXRyb3MucDtcbn1cbmZ1bmN0aW9uIHRyYW5zaXRpb25faW4oYmxvY2ssIGxvY2FsKSB7XG4gICAgaWYgKGJsb2NrICYmIGJsb2NrLmkpIHtcbiAgICAgICAgb3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcbiAgICAgICAgYmxvY2suaShsb2NhbCk7XG4gICAgfVxufVxuZnVuY3Rpb24gdHJhbnNpdGlvbl9vdXQoYmxvY2ssIGxvY2FsLCBkZXRhY2gsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGJsb2NrICYmIGJsb2NrLm8pIHtcbiAgICAgICAgaWYgKG91dHJvaW5nLmhhcyhibG9jaykpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIG91dHJvaW5nLmFkZChibG9jayk7XG4gICAgICAgIG91dHJvcy5jLnB1c2goKCkgPT4ge1xuICAgICAgICAgICAgb3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGlmIChkZXRhY2gpXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrLmQoMSk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJsb2NrLm8obG9jYWwpO1xuICAgIH1cbn1cbmNvbnN0IG51bGxfdHJhbnNpdGlvbiA9IHsgZHVyYXRpb246IDAgfTtcbmZ1bmN0aW9uIGNyZWF0ZV9pbl90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMpIHtcbiAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zKTtcbiAgICBsZXQgcnVubmluZyA9IGZhbHNlO1xuICAgIGxldCBhbmltYXRpb25fbmFtZTtcbiAgICBsZXQgdGFzaztcbiAgICBsZXQgdWlkID0gMDtcbiAgICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdvKCkge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAwLCAxLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzLCB1aWQrKyk7XG4gICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5O1xuICAgICAgICBjb25zdCBlbmRfdGltZSA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbjtcbiAgICAgICAgaWYgKHRhc2spXG4gICAgICAgICAgICB0YXNrLmFib3J0KCk7XG4gICAgICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIHRydWUsICdzdGFydCcpKTtcbiAgICAgICAgdGFzayA9IGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBlbmRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aWNrKDEsIDApO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCB0cnVlLCAnZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBzdGFydF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBlYXNpbmcoKG5vdyAtIHN0YXJ0X3RpbWUpIC8gZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aWNrKHQsIDEgLSB0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcnVubmluZztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBzdGFydGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnQoKSB7XG4gICAgICAgICAgICBpZiAoc3RhcnRlZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUpO1xuICAgICAgICAgICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICBjb25maWcgPSBjb25maWcoKTtcbiAgICAgICAgICAgICAgICB3YWl0KCkudGhlbihnbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBpbnZhbGlkYXRlKCkge1xuICAgICAgICAgICAgc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBlbmQoKSB7XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlX291dF90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMpIHtcbiAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zKTtcbiAgICBsZXQgcnVubmluZyA9IHRydWU7XG4gICAgbGV0IGFuaW1hdGlvbl9uYW1lO1xuICAgIGNvbnN0IGdyb3VwID0gb3V0cm9zO1xuICAgIGdyb3VwLnIgKz0gMTtcbiAgICBmdW5jdGlvbiBnbygpIHtcbiAgICAgICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgdGljayA9IG5vb3AsIGNzcyB9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcbiAgICAgICAgaWYgKGNzcylcbiAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMSwgMCwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcyk7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5O1xuICAgICAgICBjb25zdCBlbmRfdGltZSA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbjtcbiAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCBmYWxzZSwgJ3N0YXJ0JykpO1xuICAgICAgICBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gZW5kX3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGljaygwLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgZmFsc2UsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEtLWdyb3VwLnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2lsbCByZXN1bHQgaW4gYGVuZCgpYCBiZWluZyBjYWxsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSBkb24ndCBuZWVkIHRvIGNsZWFuIHVwIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bl9hbGwoZ3JvdXAuYyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IGVhc2luZygobm93IC0gc3RhcnRfdGltZSkgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRpY2soMSAtIHQsIHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBydW5uaW5nO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgd2FpdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uZmlnID0gY29uZmlnKCk7XG4gICAgICAgICAgICBnbygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGdvKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGVuZChyZXNldCkge1xuICAgICAgICAgICAgaWYgKHJlc2V0ICYmIGNvbmZpZy50aWNrKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLnRpY2soMSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25fbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuICAgICAgICAgICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBjcmVhdGVfYmlkaXJlY3Rpb25hbF90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMsIGludHJvKSB7XG4gICAgbGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcyk7XG4gICAgbGV0IHQgPSBpbnRybyA/IDAgOiAxO1xuICAgIGxldCBydW5uaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgIGxldCBwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgIGxldCBhbmltYXRpb25fbmFtZSA9IG51bGw7XG4gICAgZnVuY3Rpb24gY2xlYXJfYW5pbWF0aW9uKCkge1xuICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluaXQocHJvZ3JhbSwgZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgZCA9IChwcm9ncmFtLmIgLSB0KTtcbiAgICAgICAgZHVyYXRpb24gKj0gTWF0aC5hYnMoZCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhOiB0LFxuICAgICAgICAgICAgYjogcHJvZ3JhbS5iLFxuICAgICAgICAgICAgZCxcbiAgICAgICAgICAgIGR1cmF0aW9uLFxuICAgICAgICAgICAgc3RhcnQ6IHByb2dyYW0uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IHByb2dyYW0uc3RhcnQgKyBkdXJhdGlvbixcbiAgICAgICAgICAgIGdyb3VwOiBwcm9ncmFtLmdyb3VwXG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdvKGIpIHtcbiAgICAgICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgdGljayA9IG5vb3AsIGNzcyB9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcbiAgICAgICAgY29uc3QgcHJvZ3JhbSA9IHtcbiAgICAgICAgICAgIHN0YXJ0OiBub3coKSArIGRlbGF5LFxuICAgICAgICAgICAgYlxuICAgICAgICB9O1xuICAgICAgICBpZiAoIWIpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG4gICAgICAgICAgICBwcm9ncmFtLmdyb3VwID0gb3V0cm9zO1xuICAgICAgICAgICAgb3V0cm9zLnIgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocnVubmluZ19wcm9ncmFtIHx8IHBlbmRpbmdfcHJvZ3JhbSkge1xuICAgICAgICAgICAgcGVuZGluZ19wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIHRoaXMgaXMgYW4gaW50cm8sIGFuZCB0aGVyZSdzIGEgZGVsYXksIHdlIG5lZWQgdG8gZG9cbiAgICAgICAgICAgIC8vIGFuIGluaXRpYWwgdGljayBhbmQvb3IgYXBwbHkgQ1NTIGFuaW1hdGlvbiBpbW1lZGlhdGVseVxuICAgICAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgdCwgYiwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYilcbiAgICAgICAgICAgICAgICB0aWNrKDAsIDEpO1xuICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gaW5pdChwcm9ncmFtLCBkdXJhdGlvbik7XG4gICAgICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIGIsICdzdGFydCcpKTtcbiAgICAgICAgICAgIGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGVuZGluZ19wcm9ncmFtICYmIG5vdyA+IHBlbmRpbmdfcHJvZ3JhbS5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBpbml0KHBlbmRpbmdfcHJvZ3JhbSwgZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCBydW5uaW5nX3Byb2dyYW0uYiwgJ3N0YXJ0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCB0LCBydW5uaW5nX3Byb2dyYW0uYiwgcnVubmluZ19wcm9ncmFtLmR1cmF0aW9uLCAwLCBlYXNpbmcsIGNvbmZpZy5jc3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChydW5uaW5nX3Byb2dyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBydW5uaW5nX3Byb2dyYW0uZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrKHQgPSBydW5uaW5nX3Byb2dyYW0uYiwgMSAtIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgcnVubmluZ19wcm9ncmFtLmIsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGVuZGluZ19wcm9ncmFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UncmUgZG9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChydW5uaW5nX3Byb2dyYW0uYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnRybyDigJQgd2UgY2FuIHRpZHkgdXAgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvdXRybyDigJQgbmVlZHMgdG8gYmUgY29vcmRpbmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEtLXJ1bm5pbmdfcHJvZ3JhbS5ncm91cC5yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVuX2FsbChydW5uaW5nX3Byb2dyYW0uZ3JvdXAuYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChub3cgPj0gcnVubmluZ19wcm9ncmFtLnN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gbm93IC0gcnVubmluZ19wcm9ncmFtLnN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IHJ1bm5pbmdfcHJvZ3JhbS5hICsgcnVubmluZ19wcm9ncmFtLmQgKiBlYXNpbmcocCAvIHJ1bm5pbmdfcHJvZ3JhbS5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrKHQsIDEgLSB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gISEocnVubmluZ19wcm9ncmFtIHx8IHBlbmRpbmdfcHJvZ3JhbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBydW4oYikge1xuICAgICAgICAgICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICB3YWl0KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnID0gY29uZmlnKCk7XG4gICAgICAgICAgICAgICAgICAgIGdvKGIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ28oYik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVuZCgpIHtcbiAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gcGVuZGluZ19wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGhhbmRsZV9wcm9taXNlKHByb21pc2UsIGluZm8pIHtcbiAgICBjb25zdCB0b2tlbiA9IGluZm8udG9rZW4gPSB7fTtcbiAgICBmdW5jdGlvbiB1cGRhdGUodHlwZSwgaW5kZXgsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGluZm8udG9rZW4gIT09IHRva2VuKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpbmZvLnJlc29sdmVkID0gdmFsdWU7XG4gICAgICAgIGxldCBjaGlsZF9jdHggPSBpbmZvLmN0eDtcbiAgICAgICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjaGlsZF9jdHggPSBjaGlsZF9jdHguc2xpY2UoKTtcbiAgICAgICAgICAgIGNoaWxkX2N0eFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYmxvY2sgPSB0eXBlICYmIChpbmZvLmN1cnJlbnQgPSB0eXBlKShjaGlsZF9jdHgpO1xuICAgICAgICBsZXQgbmVlZHNfZmx1c2ggPSBmYWxzZTtcbiAgICAgICAgaWYgKGluZm8uYmxvY2spIHtcbiAgICAgICAgICAgIGlmIChpbmZvLmJsb2Nrcykge1xuICAgICAgICAgICAgICAgIGluZm8uYmxvY2tzLmZvckVhY2goKGJsb2NrLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpICE9PSBpbmRleCAmJiBibG9jaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBfb3V0cm9zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uX291dChibG9jaywgMSwgMSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmZvLmJsb2Nrc1tpXSA9PT0gYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mby5ibG9ja3NbaV0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tfb3V0cm9zKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGluZm8uYmxvY2suZCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJsb2NrLmMoKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb25faW4oYmxvY2ssIDEpO1xuICAgICAgICAgICAgYmxvY2subShpbmZvLm1vdW50KCksIGluZm8uYW5jaG9yKTtcbiAgICAgICAgICAgIG5lZWRzX2ZsdXNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpbmZvLmJsb2NrID0gYmxvY2s7XG4gICAgICAgIGlmIChpbmZvLmJsb2NrcylcbiAgICAgICAgICAgIGluZm8uYmxvY2tzW2luZGV4XSA9IGJsb2NrO1xuICAgICAgICBpZiAobmVlZHNfZmx1c2gpIHtcbiAgICAgICAgICAgIGZsdXNoKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzX3Byb21pc2UocHJvbWlzZSkpIHtcbiAgICAgICAgY29uc3QgY3VycmVudF9jb21wb25lbnQgPSBnZXRfY3VycmVudF9jb21wb25lbnQoKTtcbiAgICAgICAgcHJvbWlzZS50aGVuKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjdXJyZW50X2NvbXBvbmVudCk7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby50aGVuLCAxLCBpbmZvLnZhbHVlLCB2YWx1ZSk7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQobnVsbCk7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjdXJyZW50X2NvbXBvbmVudCk7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby5jYXRjaCwgMiwgaW5mby5lcnJvciwgZXJyb3IpO1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KG51bGwpO1xuICAgICAgICAgICAgaWYgKCFpbmZvLmhhc0NhdGNoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBpZiB3ZSBwcmV2aW91c2x5IGhhZCBhIHRoZW4vY2F0Y2ggYmxvY2ssIGRlc3Ryb3kgaXRcbiAgICAgICAgaWYgKGluZm8uY3VycmVudCAhPT0gaW5mby5wZW5kaW5nKSB7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby5wZW5kaW5nLCAwKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoaW5mby5jdXJyZW50ICE9PSBpbmZvLnRoZW4pIHtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLnRoZW4sIDEsIGluZm8udmFsdWUsIHByb21pc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5mby5yZXNvbHZlZCA9IHByb21pc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gdXBkYXRlX2F3YWl0X2Jsb2NrX2JyYW5jaChpbmZvLCBjdHgsIGRpcnR5KSB7XG4gICAgY29uc3QgY2hpbGRfY3R4ID0gY3R4LnNsaWNlKCk7XG4gICAgY29uc3QgeyByZXNvbHZlZCB9ID0gaW5mbztcbiAgICBpZiAoaW5mby5jdXJyZW50ID09PSBpbmZvLnRoZW4pIHtcbiAgICAgICAgY2hpbGRfY3R4W2luZm8udmFsdWVdID0gcmVzb2x2ZWQ7XG4gICAgfVxuICAgIGlmIChpbmZvLmN1cnJlbnQgPT09IGluZm8uY2F0Y2gpIHtcbiAgICAgICAgY2hpbGRfY3R4W2luZm8uZXJyb3JdID0gcmVzb2x2ZWQ7XG4gICAgfVxuICAgIGluZm8uYmxvY2sucChjaGlsZF9jdHgsIGRpcnR5KTtcbn1cblxuY29uc3QgZ2xvYmFscyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgID8gd2luZG93XG4gICAgOiB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyBnbG9iYWxUaGlzXG4gICAgICAgIDogZ2xvYmFsKTtcblxuZnVuY3Rpb24gZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgYmxvY2suZCgxKTtcbiAgICBsb29rdXAuZGVsZXRlKGJsb2NrLmtleSk7XG59XG5mdW5jdGlvbiBvdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgdHJhbnNpdGlvbl9vdXQoYmxvY2ssIDEsIDEsICgpID0+IHtcbiAgICAgICAgbG9va3VwLmRlbGV0ZShibG9jay5rZXkpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZml4X2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICBibG9jay5mKCk7XG4gICAgZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKTtcbn1cbmZ1bmN0aW9uIGZpeF9hbmRfb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIGJsb2NrLmYoKTtcbiAgICBvdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZV9rZXllZF9lYWNoKG9sZF9ibG9ja3MsIGRpcnR5LCBnZXRfa2V5LCBkeW5hbWljLCBjdHgsIGxpc3QsIGxvb2t1cCwgbm9kZSwgZGVzdHJveSwgY3JlYXRlX2VhY2hfYmxvY2ssIG5leHQsIGdldF9jb250ZXh0KSB7XG4gICAgbGV0IG8gPSBvbGRfYmxvY2tzLmxlbmd0aDtcbiAgICBsZXQgbiA9IGxpc3QubGVuZ3RoO1xuICAgIGxldCBpID0gbztcbiAgICBjb25zdCBvbGRfaW5kZXhlcyA9IHt9O1xuICAgIHdoaWxlIChpLS0pXG4gICAgICAgIG9sZF9pbmRleGVzW29sZF9ibG9ja3NbaV0ua2V5XSA9IGk7XG4gICAgY29uc3QgbmV3X2Jsb2NrcyA9IFtdO1xuICAgIGNvbnN0IG5ld19sb29rdXAgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgZGVsdGFzID0gbmV3IE1hcCgpO1xuICAgIGkgPSBuO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgY29uc3QgY2hpbGRfY3R4ID0gZ2V0X2NvbnRleHQoY3R4LCBsaXN0LCBpKTtcbiAgICAgICAgY29uc3Qga2V5ID0gZ2V0X2tleShjaGlsZF9jdHgpO1xuICAgICAgICBsZXQgYmxvY2sgPSBsb29rdXAuZ2V0KGtleSk7XG4gICAgICAgIGlmICghYmxvY2spIHtcbiAgICAgICAgICAgIGJsb2NrID0gY3JlYXRlX2VhY2hfYmxvY2soa2V5LCBjaGlsZF9jdHgpO1xuICAgICAgICAgICAgYmxvY2suYygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGR5bmFtaWMpIHtcbiAgICAgICAgICAgIGJsb2NrLnAoY2hpbGRfY3R4LCBkaXJ0eSk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3X2xvb2t1cC5zZXQoa2V5LCBuZXdfYmxvY2tzW2ldID0gYmxvY2spO1xuICAgICAgICBpZiAoa2V5IGluIG9sZF9pbmRleGVzKVxuICAgICAgICAgICAgZGVsdGFzLnNldChrZXksIE1hdGguYWJzKGkgLSBvbGRfaW5kZXhlc1trZXldKSk7XG4gICAgfVxuICAgIGNvbnN0IHdpbGxfbW92ZSA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBkaWRfbW92ZSA9IG5ldyBTZXQoKTtcbiAgICBmdW5jdGlvbiBpbnNlcnQoYmxvY2spIHtcbiAgICAgICAgdHJhbnNpdGlvbl9pbihibG9jaywgMSk7XG4gICAgICAgIGJsb2NrLm0obm9kZSwgbmV4dCk7XG4gICAgICAgIGxvb2t1cC5zZXQoYmxvY2sua2V5LCBibG9jayk7XG4gICAgICAgIG5leHQgPSBibG9jay5maXJzdDtcbiAgICAgICAgbi0tO1xuICAgIH1cbiAgICB3aGlsZSAobyAmJiBuKSB7XG4gICAgICAgIGNvbnN0IG5ld19ibG9jayA9IG5ld19ibG9ja3NbbiAtIDFdO1xuICAgICAgICBjb25zdCBvbGRfYmxvY2sgPSBvbGRfYmxvY2tzW28gLSAxXTtcbiAgICAgICAgY29uc3QgbmV3X2tleSA9IG5ld19ibG9jay5rZXk7XG4gICAgICAgIGNvbnN0IG9sZF9rZXkgPSBvbGRfYmxvY2sua2V5O1xuICAgICAgICBpZiAobmV3X2Jsb2NrID09PSBvbGRfYmxvY2spIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIG5leHQgPSBuZXdfYmxvY2suZmlyc3Q7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgICAgICBuLS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIW5ld19sb29rdXAuaGFzKG9sZF9rZXkpKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgb2xkIGJsb2NrXG4gICAgICAgICAgICBkZXN0cm95KG9sZF9ibG9jaywgbG9va3VwKTtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghbG9va3VwLmhhcyhuZXdfa2V5KSB8fCB3aWxsX21vdmUuaGFzKG5ld19rZXkpKSB7XG4gICAgICAgICAgICBpbnNlcnQobmV3X2Jsb2NrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaWRfbW92ZS5oYXMob2xkX2tleSkpIHtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkZWx0YXMuZ2V0KG5ld19rZXkpID4gZGVsdGFzLmdldChvbGRfa2V5KSkge1xuICAgICAgICAgICAgZGlkX21vdmUuYWRkKG5ld19rZXkpO1xuICAgICAgICAgICAgaW5zZXJ0KG5ld19ibG9jayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3aWxsX21vdmUuYWRkKG9sZF9rZXkpO1xuICAgICAgICAgICAgby0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIHdoaWxlIChvLS0pIHtcbiAgICAgICAgY29uc3Qgb2xkX2Jsb2NrID0gb2xkX2Jsb2Nrc1tvXTtcbiAgICAgICAgaWYgKCFuZXdfbG9va3VwLmhhcyhvbGRfYmxvY2sua2V5KSlcbiAgICAgICAgICAgIGRlc3Ryb3kob2xkX2Jsb2NrLCBsb29rdXApO1xuICAgIH1cbiAgICB3aGlsZSAobilcbiAgICAgICAgaW5zZXJ0KG5ld19ibG9ja3NbbiAtIDFdKTtcbiAgICByZXR1cm4gbmV3X2Jsb2Nrcztcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX2VhY2hfa2V5cyhjdHgsIGxpc3QsIGdldF9jb250ZXh0LCBnZXRfa2V5KSB7XG4gICAgY29uc3Qga2V5cyA9IG5ldyBTZXQoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qga2V5ID0gZ2V0X2tleShnZXRfY29udGV4dChjdHgsIGxpc3QsIGkpKTtcbiAgICAgICAgaWYgKGtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGhhdmUgZHVwbGljYXRlIGtleXMgaW4gYSBrZXllZCBlYWNoJyk7XG4gICAgICAgIH1cbiAgICAgICAga2V5cy5hZGQoa2V5KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldF9zcHJlYWRfdXBkYXRlKGxldmVscywgdXBkYXRlcykge1xuICAgIGNvbnN0IHVwZGF0ZSA9IHt9O1xuICAgIGNvbnN0IHRvX251bGxfb3V0ID0ge307XG4gICAgY29uc3QgYWNjb3VudGVkX2ZvciA9IHsgJCRzY29wZTogMSB9O1xuICAgIGxldCBpID0gbGV2ZWxzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGNvbnN0IG8gPSBsZXZlbHNbaV07XG4gICAgICAgIGNvbnN0IG4gPSB1cGRhdGVzW2ldO1xuICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbykge1xuICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiBuKSlcbiAgICAgICAgICAgICAgICAgICAgdG9fbnVsbF9vdXRba2V5XSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBuKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhY2NvdW50ZWRfZm9yW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlW2tleV0gPSBuW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRlZF9mb3Jba2V5XSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV2ZWxzW2ldID0gbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG8pIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50ZWRfZm9yW2tleV0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIHRvX251bGxfb3V0KSB7XG4gICAgICAgIGlmICghKGtleSBpbiB1cGRhdGUpKVxuICAgICAgICAgICAgdXBkYXRlW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiB1cGRhdGU7XG59XG5mdW5jdGlvbiBnZXRfc3ByZWFkX29iamVjdChzcHJlYWRfcHJvcHMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHNwcmVhZF9wcm9wcyA9PT0gJ29iamVjdCcgJiYgc3ByZWFkX3Byb3BzICE9PSBudWxsID8gc3ByZWFkX3Byb3BzIDoge307XG59XG5cbi8vIHNvdXJjZTogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW5kaWNlcy5odG1sXG5jb25zdCBib29sZWFuX2F0dHJpYnV0ZXMgPSBuZXcgU2V0KFtcbiAgICAnYWxsb3dmdWxsc2NyZWVuJyxcbiAgICAnYWxsb3dwYXltZW50cmVxdWVzdCcsXG4gICAgJ2FzeW5jJyxcbiAgICAnYXV0b2ZvY3VzJyxcbiAgICAnYXV0b3BsYXknLFxuICAgICdjaGVja2VkJyxcbiAgICAnY29udHJvbHMnLFxuICAgICdkZWZhdWx0JyxcbiAgICAnZGVmZXInLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2Zvcm1ub3ZhbGlkYXRlJyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaXNtYXAnLFxuICAgICdsb29wJyxcbiAgICAnbXVsdGlwbGUnLFxuICAgICdtdXRlZCcsXG4gICAgJ25vbW9kdWxlJyxcbiAgICAnbm92YWxpZGF0ZScsXG4gICAgJ29wZW4nLFxuICAgICdwbGF5c2lubGluZScsXG4gICAgJ3JlYWRvbmx5JyxcbiAgICAncmVxdWlyZWQnLFxuICAgICdyZXZlcnNlZCcsXG4gICAgJ3NlbGVjdGVkJ1xuXSk7XG5cbmNvbnN0IGludmFsaWRfYXR0cmlidXRlX25hbWVfY2hhcmFjdGVyID0gL1tcXHMnXCI+Lz1cXHV7RkREMH0tXFx1e0ZERUZ9XFx1e0ZGRkV9XFx1e0ZGRkZ9XFx1ezFGRkZFfVxcdXsxRkZGRn1cXHV7MkZGRkV9XFx1ezJGRkZGfVxcdXszRkZGRX1cXHV7M0ZGRkZ9XFx1ezRGRkZFfVxcdXs0RkZGRn1cXHV7NUZGRkV9XFx1ezVGRkZGfVxcdXs2RkZGRX1cXHV7NkZGRkZ9XFx1ezdGRkZFfVxcdXs3RkZGRn1cXHV7OEZGRkV9XFx1ezhGRkZGfVxcdXs5RkZGRX1cXHV7OUZGRkZ9XFx1e0FGRkZFfVxcdXtBRkZGRn1cXHV7QkZGRkV9XFx1e0JGRkZGfVxcdXtDRkZGRX1cXHV7Q0ZGRkZ9XFx1e0RGRkZFfVxcdXtERkZGRn1cXHV7RUZGRkV9XFx1e0VGRkZGfVxcdXtGRkZGRX1cXHV7RkZGRkZ9XFx1ezEwRkZGRX1cXHV7MTBGRkZGfV0vdTtcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI2F0dHJpYnV0ZXMtMlxuLy8gaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI25vbmNoYXJhY3RlclxuZnVuY3Rpb24gc3ByZWFkKGFyZ3MsIGF0dHJzX3RvX2FkZCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHt9LCAuLi5hcmdzKTtcbiAgICBpZiAoYXR0cnNfdG9fYWRkKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXNfdG9fYWRkID0gYXR0cnNfdG9fYWRkLmNsYXNzZXM7XG4gICAgICAgIGNvbnN0IHN0eWxlc190b19hZGQgPSBhdHRyc190b19hZGQuc3R5bGVzO1xuICAgICAgICBpZiAoY2xhc3Nlc190b19hZGQpIHtcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzLmNsYXNzID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLmNsYXNzID0gY2xhc3Nlc190b19hZGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLmNsYXNzICs9ICcgJyArIGNsYXNzZXNfdG9fYWRkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzdHlsZXNfdG9fYWRkKSB7XG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlcy5zdHlsZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5zdHlsZSA9IHN0eWxlX29iamVjdF90b19zdHJpbmcoc3R5bGVzX3RvX2FkZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnN0eWxlID0gc3R5bGVfb2JqZWN0X3RvX3N0cmluZyhtZXJnZV9zc3Jfc3R5bGVzKGF0dHJpYnV0ZXMuc3R5bGUsIHN0eWxlc190b19hZGQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgc3RyID0gJyc7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgaWYgKGludmFsaWRfYXR0cmlidXRlX25hbWVfY2hhcmFjdGVyLnRlc3QobmFtZSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXR0cmlidXRlc1tuYW1lXTtcbiAgICAgICAgaWYgKHZhbHVlID09PSB0cnVlKVxuICAgICAgICAgICAgc3RyICs9ICcgJyArIG5hbWU7XG4gICAgICAgIGVsc2UgaWYgKGJvb2xlYW5fYXR0cmlidXRlcy5oYXMobmFtZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlKVxuICAgICAgICAgICAgICAgIHN0ciArPSAnICcgKyBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHN0ciArPSBgICR7bmFtZX09XCIke3ZhbHVlfVwiYDtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzdHI7XG59XG5mdW5jdGlvbiBtZXJnZV9zc3Jfc3R5bGVzKHN0eWxlX2F0dHJpYnV0ZSwgc3R5bGVfZGlyZWN0aXZlKSB7XG4gICAgY29uc3Qgc3R5bGVfb2JqZWN0ID0ge307XG4gICAgZm9yIChjb25zdCBpbmRpdmlkdWFsX3N0eWxlIG9mIHN0eWxlX2F0dHJpYnV0ZS5zcGxpdCgnOycpKSB7XG4gICAgICAgIGNvbnN0IGNvbG9uX2luZGV4ID0gaW5kaXZpZHVhbF9zdHlsZS5pbmRleE9mKCc6Jyk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBpbmRpdmlkdWFsX3N0eWxlLnNsaWNlKDAsIGNvbG9uX2luZGV4KS50cmltKCk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaW5kaXZpZHVhbF9zdHlsZS5zbGljZShjb2xvbl9pbmRleCArIDEpLnRyaW0oKTtcbiAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIHN0eWxlX29iamVjdFtuYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gc3R5bGVfZGlyZWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGVfZGlyZWN0aXZlW25hbWVdO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHN0eWxlX29iamVjdFtuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHN0eWxlX29iamVjdFtuYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3R5bGVfb2JqZWN0O1xufVxuY29uc3QgZXNjYXBlZCA9IHtcbiAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICBcIidcIjogJyYjMzk7JyxcbiAgICAnJic6ICcmYW1wOycsXG4gICAgJzwnOiAnJmx0OycsXG4gICAgJz4nOiAnJmd0Oydcbn07XG5mdW5jdGlvbiBlc2NhcGUoaHRtbCkge1xuICAgIHJldHVybiBTdHJpbmcoaHRtbCkucmVwbGFjZSgvW1wiJyY8Pl0vZywgbWF0Y2ggPT4gZXNjYXBlZFttYXRjaF0pO1xufVxuZnVuY3Rpb24gZXNjYXBlX2F0dHJpYnV0ZV92YWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gZXNjYXBlKHZhbHVlKSA6IHZhbHVlO1xufVxuZnVuY3Rpb24gZXNjYXBlX29iamVjdChvYmopIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBlc2NhcGVfYXR0cmlidXRlX3ZhbHVlKG9ialtrZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGVhY2goaXRlbXMsIGZuKSB7XG4gICAgbGV0IHN0ciA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgc3RyICs9IGZuKGl0ZW1zW2ldLCBpKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cbmNvbnN0IG1pc3NpbmdfY29tcG9uZW50ID0ge1xuICAgICQkcmVuZGVyOiAoKSA9PiAnJ1xufTtcbmZ1bmN0aW9uIHZhbGlkYXRlX2NvbXBvbmVudChjb21wb25lbnQsIG5hbWUpIHtcbiAgICBpZiAoIWNvbXBvbmVudCB8fCAhY29tcG9uZW50LiQkcmVuZGVyKSB7XG4gICAgICAgIGlmIChuYW1lID09PSAnc3ZlbHRlOmNvbXBvbmVudCcpXG4gICAgICAgICAgICBuYW1lICs9ICcgdGhpcz17Li4ufSc7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgPCR7bmFtZX0+IGlzIG5vdCBhIHZhbGlkIFNTUiBjb21wb25lbnQuIFlvdSBtYXkgbmVlZCB0byByZXZpZXcgeW91ciBidWlsZCBjb25maWcgdG8gZW5zdXJlIHRoYXQgZGVwZW5kZW5jaWVzIGFyZSBjb21waWxlZCwgcmF0aGVyIHRoYW4gaW1wb3J0ZWQgYXMgcHJlLWNvbXBpbGVkIG1vZHVsZXNgKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGRlYnVnKGZpbGUsIGxpbmUsIGNvbHVtbiwgdmFsdWVzKSB7XG4gICAgY29uc29sZS5sb2coYHtAZGVidWd9ICR7ZmlsZSA/IGZpbGUgKyAnICcgOiAnJ30oJHtsaW5lfToke2NvbHVtbn0pYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIHJldHVybiAnJztcbn1cbmxldCBvbl9kZXN0cm95O1xuZnVuY3Rpb24gY3JlYXRlX3Nzcl9jb21wb25lbnQoZm4pIHtcbiAgICBmdW5jdGlvbiAkJHJlbmRlcihyZXN1bHQsIHByb3BzLCBiaW5kaW5ncywgc2xvdHMsIGNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgcGFyZW50X2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICAgICAgICBjb25zdCAkJCA9IHtcbiAgICAgICAgICAgIG9uX2Rlc3Ryb3ksXG4gICAgICAgICAgICBjb250ZXh0OiBuZXcgTWFwKGNvbnRleHQgfHwgKHBhcmVudF9jb21wb25lbnQgPyBwYXJlbnRfY29tcG9uZW50LiQkLmNvbnRleHQgOiBbXSkpLFxuICAgICAgICAgICAgLy8gdGhlc2Ugd2lsbCBiZSBpbW1lZGlhdGVseSBkaXNjYXJkZWRcbiAgICAgICAgICAgIG9uX21vdW50OiBbXSxcbiAgICAgICAgICAgIGJlZm9yZV91cGRhdGU6IFtdLFxuICAgICAgICAgICAgYWZ0ZXJfdXBkYXRlOiBbXSxcbiAgICAgICAgICAgIGNhbGxiYWNrczogYmxhbmtfb2JqZWN0KClcbiAgICAgICAgfTtcbiAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHsgJCQgfSk7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBmbihyZXN1bHQsIHByb3BzLCBiaW5kaW5ncywgc2xvdHMpO1xuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQocGFyZW50X2NvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXI6IChwcm9wcyA9IHt9LCB7ICQkc2xvdHMgPSB7fSwgY29udGV4dCA9IG5ldyBNYXAoKSB9ID0ge30pID0+IHtcbiAgICAgICAgICAgIG9uX2Rlc3Ryb3kgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHsgdGl0bGU6ICcnLCBoZWFkOiAnJywgY3NzOiBuZXcgU2V0KCkgfTtcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSAkJHJlbmRlcihyZXN1bHQsIHByb3BzLCB7fSwgJCRzbG90cywgY29udGV4dCk7XG4gICAgICAgICAgICBydW5fYWxsKG9uX2Rlc3Ryb3kpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBodG1sLFxuICAgICAgICAgICAgICAgIGNzczoge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBBcnJheS5mcm9tKHJlc3VsdC5jc3MpLm1hcChjc3MgPT4gY3NzLmNvZGUpLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICBtYXA6IG51bGwgLy8gVE9ET1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGVhZDogcmVzdWx0LnRpdGxlICsgcmVzdWx0LmhlYWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgICQkcmVuZGVyXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFkZF9hdHRyaWJ1dGUobmFtZSwgdmFsdWUsIGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCAoYm9vbGVhbiAmJiAhdmFsdWUpKVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgcmV0dXJuIGAgJHtuYW1lfSR7dmFsdWUgPT09IHRydWUgJiYgYm9vbGVhbl9hdHRyaWJ1dGVzLmhhcyhuYW1lKSA/ICcnIDogYD0ke3R5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBKU09OLnN0cmluZ2lmeShlc2NhcGUodmFsdWUpKSA6IGBcIiR7dmFsdWV9XCJgfWB9YDtcbn1cbmZ1bmN0aW9uIGFkZF9jbGFzc2VzKGNsYXNzZXMpIHtcbiAgICByZXR1cm4gY2xhc3NlcyA/IGAgY2xhc3M9XCIke2NsYXNzZXN9XCJgIDogJyc7XG59XG5mdW5jdGlvbiBzdHlsZV9vYmplY3RfdG9fc3RyaW5nKHN0eWxlX29iamVjdCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZV9vYmplY3QpXG4gICAgICAgIC5maWx0ZXIoa2V5ID0+IHN0eWxlX29iamVjdFtrZXldKVxuICAgICAgICAubWFwKGtleSA9PiBgJHtrZXl9OiAke3N0eWxlX29iamVjdFtrZXldfTtgKVxuICAgICAgICAuam9pbignICcpO1xufVxuZnVuY3Rpb24gYWRkX3N0eWxlcyhzdHlsZV9vYmplY3QpIHtcbiAgICBjb25zdCBzdHlsZXMgPSBzdHlsZV9vYmplY3RfdG9fc3RyaW5nKHN0eWxlX29iamVjdCk7XG4gICAgcmV0dXJuIHN0eWxlcyA/IGAgc3R5bGU9XCIke3N0eWxlc31cImAgOiAnJztcbn1cblxuZnVuY3Rpb24gYmluZChjb21wb25lbnQsIG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgaW5kZXggPSBjb21wb25lbnQuJCQucHJvcHNbbmFtZV07XG4gICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29tcG9uZW50LiQkLmJvdW5kW2luZGV4XSA9IGNhbGxiYWNrO1xuICAgICAgICBjYWxsYmFjayhjb21wb25lbnQuJCQuY3R4W2luZGV4XSk7XG4gICAgfVxufVxuZnVuY3Rpb24gY3JlYXRlX2NvbXBvbmVudChibG9jaykge1xuICAgIGJsb2NrICYmIGJsb2NrLmMoKTtcbn1cbmZ1bmN0aW9uIGNsYWltX2NvbXBvbmVudChibG9jaywgcGFyZW50X25vZGVzKSB7XG4gICAgYmxvY2sgJiYgYmxvY2subChwYXJlbnRfbm9kZXMpO1xufVxuZnVuY3Rpb24gbW91bnRfY29tcG9uZW50KGNvbXBvbmVudCwgdGFyZ2V0LCBhbmNob3IsIGN1c3RvbUVsZW1lbnQpIHtcbiAgICBjb25zdCB7IGZyYWdtZW50LCBvbl9tb3VudCwgb25fZGVzdHJveSwgYWZ0ZXJfdXBkYXRlIH0gPSBjb21wb25lbnQuJCQ7XG4gICAgZnJhZ21lbnQgJiYgZnJhZ21lbnQubSh0YXJnZXQsIGFuY2hvcik7XG4gICAgaWYgKCFjdXN0b21FbGVtZW50KSB7XG4gICAgICAgIC8vIG9uTW91bnQgaGFwcGVucyBiZWZvcmUgdGhlIGluaXRpYWwgYWZ0ZXJVcGRhdGVcbiAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdfb25fZGVzdHJveSA9IG9uX21vdW50Lm1hcChydW4pLmZpbHRlcihpc19mdW5jdGlvbik7XG4gICAgICAgICAgICBpZiAob25fZGVzdHJveSkge1xuICAgICAgICAgICAgICAgIG9uX2Rlc3Ryb3kucHVzaCguLi5uZXdfb25fZGVzdHJveSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBFZGdlIGNhc2UgLSBjb21wb25lbnQgd2FzIGRlc3Ryb3llZCBpbW1lZGlhdGVseSxcbiAgICAgICAgICAgICAgICAvLyBtb3N0IGxpa2VseSBhcyBhIHJlc3VsdCBvZiBhIGJpbmRpbmcgaW5pdGlhbGlzaW5nXG4gICAgICAgICAgICAgICAgcnVuX2FsbChuZXdfb25fZGVzdHJveSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb21wb25lbnQuJCQub25fbW91bnQgPSBbXTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFmdGVyX3VwZGF0ZS5mb3JFYWNoKGFkZF9yZW5kZXJfY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gZGVzdHJveV9jb21wb25lbnQoY29tcG9uZW50LCBkZXRhY2hpbmcpIHtcbiAgICBjb25zdCAkJCA9IGNvbXBvbmVudC4kJDtcbiAgICBpZiAoJCQuZnJhZ21lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcnVuX2FsbCgkJC5vbl9kZXN0cm95KTtcbiAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQuZChkZXRhY2hpbmcpO1xuICAgICAgICAvLyBUT0RPIG51bGwgb3V0IG90aGVyIHJlZnMsIGluY2x1ZGluZyBjb21wb25lbnQuJCQgKGJ1dCBuZWVkIHRvXG4gICAgICAgIC8vIHByZXNlcnZlIGZpbmFsIHN0YXRlPylcbiAgICAgICAgJCQub25fZGVzdHJveSA9ICQkLmZyYWdtZW50ID0gbnVsbDtcbiAgICAgICAgJCQuY3R4ID0gW107XG4gICAgfVxufVxuZnVuY3Rpb24gbWFrZV9kaXJ0eShjb21wb25lbnQsIGkpIHtcbiAgICBpZiAoY29tcG9uZW50LiQkLmRpcnR5WzBdID09PSAtMSkge1xuICAgICAgICBkaXJ0eV9jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgc2NoZWR1bGVfdXBkYXRlKCk7XG4gICAgICAgIGNvbXBvbmVudC4kJC5kaXJ0eS5maWxsKDApO1xuICAgIH1cbiAgICBjb21wb25lbnQuJCQuZGlydHlbKGkgLyAzMSkgfCAwXSB8PSAoMSA8PCAoaSAlIDMxKSk7XG59XG5mdW5jdGlvbiBpbml0KGNvbXBvbmVudCwgb3B0aW9ucywgaW5zdGFuY2UsIGNyZWF0ZV9mcmFnbWVudCwgbm90X2VxdWFsLCBwcm9wcywgYXBwZW5kX3N0eWxlcywgZGlydHkgPSBbLTFdKSB7XG4gICAgY29uc3QgcGFyZW50X2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpO1xuICAgIGNvbnN0ICQkID0gY29tcG9uZW50LiQkID0ge1xuICAgICAgICBmcmFnbWVudDogbnVsbCxcbiAgICAgICAgY3R4OiBudWxsLFxuICAgICAgICAvLyBzdGF0ZVxuICAgICAgICBwcm9wcyxcbiAgICAgICAgdXBkYXRlOiBub29wLFxuICAgICAgICBub3RfZXF1YWwsXG4gICAgICAgIGJvdW5kOiBibGFua19vYmplY3QoKSxcbiAgICAgICAgLy8gbGlmZWN5Y2xlXG4gICAgICAgIG9uX21vdW50OiBbXSxcbiAgICAgICAgb25fZGVzdHJveTogW10sXG4gICAgICAgIG9uX2Rpc2Nvbm5lY3Q6IFtdLFxuICAgICAgICBiZWZvcmVfdXBkYXRlOiBbXSxcbiAgICAgICAgYWZ0ZXJfdXBkYXRlOiBbXSxcbiAgICAgICAgY29udGV4dDogbmV3IE1hcChvcHRpb25zLmNvbnRleHQgfHwgKHBhcmVudF9jb21wb25lbnQgPyBwYXJlbnRfY29tcG9uZW50LiQkLmNvbnRleHQgOiBbXSkpLFxuICAgICAgICAvLyBldmVyeXRoaW5nIGVsc2VcbiAgICAgICAgY2FsbGJhY2tzOiBibGFua19vYmplY3QoKSxcbiAgICAgICAgZGlydHksXG4gICAgICAgIHNraXBfYm91bmQ6IGZhbHNlLFxuICAgICAgICByb290OiBvcHRpb25zLnRhcmdldCB8fCBwYXJlbnRfY29tcG9uZW50LiQkLnJvb3RcbiAgICB9O1xuICAgIGFwcGVuZF9zdHlsZXMgJiYgYXBwZW5kX3N0eWxlcygkJC5yb290KTtcbiAgICBsZXQgcmVhZHkgPSBmYWxzZTtcbiAgICAkJC5jdHggPSBpbnN0YW5jZVxuICAgICAgICA/IGluc3RhbmNlKGNvbXBvbmVudCwgb3B0aW9ucy5wcm9wcyB8fCB7fSwgKGksIHJldCwgLi4ucmVzdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZXN0Lmxlbmd0aCA/IHJlc3RbMF0gOiByZXQ7XG4gICAgICAgICAgICBpZiAoJCQuY3R4ICYmIG5vdF9lcXVhbCgkJC5jdHhbaV0sICQkLmN0eFtpXSA9IHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghJCQuc2tpcF9ib3VuZCAmJiAkJC5ib3VuZFtpXSlcbiAgICAgICAgICAgICAgICAgICAgJCQuYm91bmRbaV0odmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChyZWFkeSlcbiAgICAgICAgICAgICAgICAgICAgbWFrZV9kaXJ0eShjb21wb25lbnQsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSlcbiAgICAgICAgOiBbXTtcbiAgICAkJC51cGRhdGUoKTtcbiAgICByZWFkeSA9IHRydWU7XG4gICAgcnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTtcbiAgICAvLyBgZmFsc2VgIGFzIGEgc3BlY2lhbCBjYXNlIG9mIG5vIERPTSBjb21wb25lbnRcbiAgICAkJC5mcmFnbWVudCA9IGNyZWF0ZV9mcmFnbWVudCA/IGNyZWF0ZV9mcmFnbWVudCgkJC5jdHgpIDogZmFsc2U7XG4gICAgaWYgKG9wdGlvbnMudGFyZ2V0KSB7XG4gICAgICAgIGlmIChvcHRpb25zLmh5ZHJhdGUpIHtcbiAgICAgICAgICAgIHN0YXJ0X2h5ZHJhdGluZygpO1xuICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBjaGlsZHJlbihvcHRpb25zLnRhcmdldCk7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQubChub2Rlcyk7XG4gICAgICAgICAgICBub2Rlcy5mb3JFYWNoKGRldGFjaCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQuYygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmludHJvKVxuICAgICAgICAgICAgdHJhbnNpdGlvbl9pbihjb21wb25lbnQuJCQuZnJhZ21lbnQpO1xuICAgICAgICBtb3VudF9jb21wb25lbnQoY29tcG9uZW50LCBvcHRpb25zLnRhcmdldCwgb3B0aW9ucy5hbmNob3IsIG9wdGlvbnMuY3VzdG9tRWxlbWVudCk7XG4gICAgICAgIGVuZF9oeWRyYXRpbmcoKTtcbiAgICAgICAgZmx1c2goKTtcbiAgICB9XG4gICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHBhcmVudF9jb21wb25lbnQpO1xufVxubGV0IFN2ZWx0ZUVsZW1lbnQ7XG5pZiAodHlwZW9mIEhUTUxFbGVtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgU3ZlbHRlRWxlbWVudCA9IGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgb25fbW91bnQgfSA9IHRoaXMuJCQ7XG4gICAgICAgICAgICB0aGlzLiQkLm9uX2Rpc2Nvbm5lY3QgPSBvbl9tb3VudC5tYXAocnVuKS5maWx0ZXIoaXNfZnVuY3Rpb24pO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBpbXByb3ZlIHR5cGluZ3NcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuJCQuc2xvdHRlZCkge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLiQkLnNsb3R0ZWRba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHIsIF9vbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXNbYXR0cl0gPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICAgIHJ1bl9hbGwodGhpcy4kJC5vbl9kaXNjb25uZWN0KTtcbiAgICAgICAgfVxuICAgICAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgICAgIGRlc3Ryb3lfY29tcG9uZW50KHRoaXMsIDEpO1xuICAgICAgICAgICAgdGhpcy4kZGVzdHJveSA9IG5vb3A7XG4gICAgICAgIH1cbiAgICAgICAgJG9uKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAvLyBUT0RPIHNob3VsZCB0aGlzIGRlbGVnYXRlIHRvIGFkZEV2ZW50TGlzdGVuZXI/XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFja3MgPSAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gfHwgKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdID0gW10pKTtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjYWxsYmFja3MuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgICRzZXQoJCRwcm9wcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuJCRzZXQgJiYgIWlzX2VtcHR5KCQkcHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kJC5za2lwX2JvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiQkc2V0KCQkcHJvcHMpO1xuICAgICAgICAgICAgICAgIHRoaXMuJCQuc2tpcF9ib3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgU3ZlbHRlIGNvbXBvbmVudHMuIFVzZWQgd2hlbiBkZXY9ZmFsc2UuXG4gKi9cbmNsYXNzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIGRlc3Ryb3lfY29tcG9uZW50KHRoaXMsIDEpO1xuICAgICAgICB0aGlzLiRkZXN0cm95ID0gbm9vcDtcbiAgICB9XG4gICAgJG9uKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSB8fCAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gPSBbXSkpO1xuICAgICAgICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGNhbGxiYWNrcy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgICRzZXQoJCRwcm9wcykge1xuICAgICAgICBpZiAodGhpcy4kJHNldCAmJiAhaXNfZW1wdHkoJCRwcm9wcykpIHtcbiAgICAgICAgICAgIHRoaXMuJCQuc2tpcF9ib3VuZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLiQkc2V0KCQkcHJvcHMpO1xuICAgICAgICAgICAgdGhpcy4kJC5za2lwX2JvdW5kID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoX2Rldih0eXBlLCBkZXRhaWwpIHtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGN1c3RvbV9ldmVudCh0eXBlLCBPYmplY3QuYXNzaWduKHsgdmVyc2lvbjogJzMuNDYuNCcgfSwgZGV0YWlsKSwgdHJ1ZSkpO1xufVxuZnVuY3Rpb24gYXBwZW5kX2Rldih0YXJnZXQsIG5vZGUpIHtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTUluc2VydCcsIHsgdGFyZ2V0LCBub2RlIH0pO1xuICAgIGFwcGVuZCh0YXJnZXQsIG5vZGUpO1xufVxuZnVuY3Rpb24gYXBwZW5kX2h5ZHJhdGlvbl9kZXYodGFyZ2V0LCBub2RlKSB7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01JbnNlcnQnLCB7IHRhcmdldCwgbm9kZSB9KTtcbiAgICBhcHBlbmRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSk7XG59XG5mdW5jdGlvbiBpbnNlcnRfZGV2KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01JbnNlcnQnLCB7IHRhcmdldCwgbm9kZSwgYW5jaG9yIH0pO1xuICAgIGluc2VydCh0YXJnZXQsIG5vZGUsIGFuY2hvcik7XG59XG5mdW5jdGlvbiBpbnNlcnRfaHlkcmF0aW9uX2Rldih0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NSW5zZXJ0JywgeyB0YXJnZXQsIG5vZGUsIGFuY2hvciB9KTtcbiAgICBpbnNlcnRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSwgYW5jaG9yKTtcbn1cbmZ1bmN0aW9uIGRldGFjaF9kZXYobm9kZSkge1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NUmVtb3ZlJywgeyBub2RlIH0pO1xuICAgIGRldGFjaChub2RlKTtcbn1cbmZ1bmN0aW9uIGRldGFjaF9iZXR3ZWVuX2RldihiZWZvcmUsIGFmdGVyKSB7XG4gICAgd2hpbGUgKGJlZm9yZS5uZXh0U2libGluZyAmJiBiZWZvcmUubmV4dFNpYmxpbmcgIT09IGFmdGVyKSB7XG4gICAgICAgIGRldGFjaF9kZXYoYmVmb3JlLm5leHRTaWJsaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZXRhY2hfYmVmb3JlX2RldihhZnRlcikge1xuICAgIHdoaWxlIChhZnRlci5wcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgICAgZGV0YWNoX2RldihhZnRlci5wcmV2aW91c1NpYmxpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRldGFjaF9hZnRlcl9kZXYoYmVmb3JlKSB7XG4gICAgd2hpbGUgKGJlZm9yZS5uZXh0U2libGluZykge1xuICAgICAgICBkZXRhY2hfZGV2KGJlZm9yZS5uZXh0U2libGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gbGlzdGVuX2Rldihub2RlLCBldmVudCwgaGFuZGxlciwgb3B0aW9ucywgaGFzX3ByZXZlbnRfZGVmYXVsdCwgaGFzX3N0b3BfcHJvcGFnYXRpb24pIHtcbiAgICBjb25zdCBtb2RpZmllcnMgPSBvcHRpb25zID09PSB0cnVlID8gWydjYXB0dXJlJ10gOiBvcHRpb25zID8gQXJyYXkuZnJvbShPYmplY3Qua2V5cyhvcHRpb25zKSkgOiBbXTtcbiAgICBpZiAoaGFzX3ByZXZlbnRfZGVmYXVsdClcbiAgICAgICAgbW9kaWZpZXJzLnB1c2goJ3ByZXZlbnREZWZhdWx0Jyk7XG4gICAgaWYgKGhhc19zdG9wX3Byb3BhZ2F0aW9uKVxuICAgICAgICBtb2RpZmllcnMucHVzaCgnc3RvcFByb3BhZ2F0aW9uJyk7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01BZGRFdmVudExpc3RlbmVyJywgeyBub2RlLCBldmVudCwgaGFuZGxlciwgbW9kaWZpZXJzIH0pO1xuICAgIGNvbnN0IGRpc3Bvc2UgPSBsaXN0ZW4obm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NUmVtb3ZlRXZlbnRMaXN0ZW5lcicsIHsgbm9kZSwgZXZlbnQsIGhhbmRsZXIsIG1vZGlmaWVycyB9KTtcbiAgICAgICAgZGlzcG9zZSgpO1xuICAgIH07XG59XG5mdW5jdGlvbiBhdHRyX2Rldihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgYXR0cihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICBpZiAodmFsdWUgPT0gbnVsbClcbiAgICAgICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01SZW1vdmVBdHRyaWJ1dGUnLCB7IG5vZGUsIGF0dHJpYnV0ZSB9KTtcbiAgICBlbHNlXG4gICAgICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NU2V0QXR0cmlidXRlJywgeyBub2RlLCBhdHRyaWJ1dGUsIHZhbHVlIH0pO1xufVxuZnVuY3Rpb24gcHJvcF9kZXYobm9kZSwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgbm9kZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVNldFByb3BlcnR5JywgeyBub2RlLCBwcm9wZXJ0eSwgdmFsdWUgfSk7XG59XG5mdW5jdGlvbiBkYXRhc2V0X2Rldihub2RlLCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBub2RlLmRhdGFzZXRbcHJvcGVydHldID0gdmFsdWU7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01TZXREYXRhc2V0JywgeyBub2RlLCBwcm9wZXJ0eSwgdmFsdWUgfSk7XG59XG5mdW5jdGlvbiBzZXRfZGF0YV9kZXYodGV4dCwgZGF0YSkge1xuICAgIGRhdGEgPSAnJyArIGRhdGE7XG4gICAgaWYgKHRleHQud2hvbGVUZXh0ID09PSBkYXRhKVxuICAgICAgICByZXR1cm47XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01TZXREYXRhJywgeyBub2RlOiB0ZXh0LCBkYXRhIH0pO1xuICAgIHRleHQuZGF0YSA9IGRhdGE7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9lYWNoX2FyZ3VtZW50KGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnc3RyaW5nJyAmJiAhKGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiBhcmcpKSB7XG4gICAgICAgIGxldCBtc2cgPSAneyNlYWNofSBvbmx5IGl0ZXJhdGVzIG92ZXIgYXJyYXktbGlrZSBvYmplY3RzLic7XG4gICAgICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIGFyZyAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gYXJnKSB7XG4gICAgICAgICAgICBtc2cgKz0gJyBZb3UgY2FuIHVzZSBhIHNwcmVhZCB0byBjb252ZXJ0IHRoaXMgaXRlcmFibGUgaW50byBhbiBhcnJheS4nO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX3Nsb3RzKG5hbWUsIHNsb3QsIGtleXMpIHtcbiAgICBmb3IgKGNvbnN0IHNsb3Rfa2V5IG9mIE9iamVjdC5rZXlzKHNsb3QpKSB7XG4gICAgICAgIGlmICghfmtleXMuaW5kZXhPZihzbG90X2tleSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgPCR7bmFtZX0+IHJlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgc2xvdCBcIiR7c2xvdF9rZXl9XCIuYCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIFN2ZWx0ZSBjb21wb25lbnRzIHdpdGggc29tZSBtaW5vciBkZXYtZW5oYW5jZW1lbnRzLiBVc2VkIHdoZW4gZGV2PXRydWUuXG4gKi9cbmNsYXNzIFN2ZWx0ZUNvbXBvbmVudERldiBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBpZiAoIW9wdGlvbnMgfHwgKCFvcHRpb25zLnRhcmdldCAmJiAhb3B0aW9ucy4kJGlubGluZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIid0YXJnZXQnIGlzIGEgcmVxdWlyZWQgb3B0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgICRkZXN0cm95KCkge1xuICAgICAgICBzdXBlci4kZGVzdHJveSgpO1xuICAgICAgICB0aGlzLiRkZXN0cm95ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdDb21wb25lbnQgd2FzIGFscmVhZHkgZGVzdHJveWVkJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICB9O1xuICAgIH1cbiAgICAkY2FwdHVyZV9zdGF0ZSgpIHsgfVxuICAgICRpbmplY3Rfc3RhdGUoKSB7IH1cbn1cbi8qKlxuICogQmFzZSBjbGFzcyB0byBjcmVhdGUgc3Ryb25nbHkgdHlwZWQgU3ZlbHRlIGNvbXBvbmVudHMuXG4gKiBUaGlzIG9ubHkgZXhpc3RzIGZvciB0eXBpbmcgcHVycG9zZXMgYW5kIHNob3VsZCBiZSB1c2VkIGluIGAuZC50c2AgZmlsZXMuXG4gKlxuICogIyMjIEV4YW1wbGU6XG4gKlxuICogWW91IGhhdmUgY29tcG9uZW50IGxpYnJhcnkgb24gbnBtIGNhbGxlZCBgY29tcG9uZW50LWxpYnJhcnlgLCBmcm9tIHdoaWNoXG4gKiB5b3UgZXhwb3J0IGEgY29tcG9uZW50IGNhbGxlZCBgTXlDb21wb25lbnRgLiBGb3IgU3ZlbHRlK1R5cGVTY3JpcHQgdXNlcnMsXG4gKiB5b3Ugd2FudCB0byBwcm92aWRlIHR5cGluZ3MuIFRoZXJlZm9yZSB5b3UgY3JlYXRlIGEgYGluZGV4LmQudHNgOlxuICogYGBgdHNcbiAqIGltcG9ydCB7IFN2ZWx0ZUNvbXBvbmVudFR5cGVkIH0gZnJvbSBcInN2ZWx0ZVwiO1xuICogZXhwb3J0IGNsYXNzIE15Q29tcG9uZW50IGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50VHlwZWQ8e2Zvbzogc3RyaW5nfT4ge31cbiAqIGBgYFxuICogVHlwaW5nIHRoaXMgbWFrZXMgaXQgcG9zc2libGUgZm9yIElERXMgbGlrZSBWUyBDb2RlIHdpdGggdGhlIFN2ZWx0ZSBleHRlbnNpb25cbiAqIHRvIHByb3ZpZGUgaW50ZWxsaXNlbnNlIGFuZCB0byB1c2UgdGhlIGNvbXBvbmVudCBsaWtlIHRoaXMgaW4gYSBTdmVsdGUgZmlsZVxuICogd2l0aCBUeXBlU2NyaXB0OlxuICogYGBgc3ZlbHRlXG4gKiA8c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICogXHRpbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gXCJjb21wb25lbnQtbGlicmFyeVwiO1xuICogPC9zY3JpcHQ+XG4gKiA8TXlDb21wb25lbnQgZm9vPXsnYmFyJ30gLz5cbiAqIGBgYFxuICpcbiAqICMjIyMgV2h5IG5vdCBtYWtlIHRoaXMgcGFydCBvZiBgU3ZlbHRlQ29tcG9uZW50KERldilgP1xuICogQmVjYXVzZVxuICogYGBgdHNcbiAqIGNsYXNzIEFTdWJjbGFzc09mU3ZlbHRlQ29tcG9uZW50IGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50PHtmb286IHN0cmluZ30+IHt9XG4gKiBjb25zdCBjb21wb25lbnQ6IHR5cGVvZiBTdmVsdGVDb21wb25lbnQgPSBBU3ViY2xhc3NPZlN2ZWx0ZUNvbXBvbmVudDtcbiAqIGBgYFxuICogd2lsbCB0aHJvdyBhIHR5cGUgZXJyb3IsIHNvIHdlIG5lZWQgdG8gc2VwYXJhdGUgdGhlIG1vcmUgc3RyaWN0bHkgdHlwZWQgY2xhc3MuXG4gKi9cbmNsYXNzIFN2ZWx0ZUNvbXBvbmVudFR5cGVkIGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50RGV2IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGxvb3BfZ3VhcmQodGltZW91dCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHN0YXJ0ID4gdGltZW91dCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmZpbml0ZSBsb29wIGRldGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgeyBIdG1sVGFnLCBIdG1sVGFnSHlkcmF0aW9uLCBTdmVsdGVDb21wb25lbnQsIFN2ZWx0ZUNvbXBvbmVudERldiwgU3ZlbHRlQ29tcG9uZW50VHlwZWQsIFN2ZWx0ZUVsZW1lbnQsIGFjdGlvbl9kZXN0cm95ZXIsIGFkZF9hdHRyaWJ1dGUsIGFkZF9jbGFzc2VzLCBhZGRfZmx1c2hfY2FsbGJhY2ssIGFkZF9sb2NhdGlvbiwgYWRkX3JlbmRlcl9jYWxsYmFjaywgYWRkX3Jlc2l6ZV9saXN0ZW5lciwgYWRkX3N0eWxlcywgYWRkX3RyYW5zZm9ybSwgYWZ0ZXJVcGRhdGUsIGFwcGVuZCwgYXBwZW5kX2RldiwgYXBwZW5kX2VtcHR5X3N0eWxlc2hlZXQsIGFwcGVuZF9oeWRyYXRpb24sIGFwcGVuZF9oeWRyYXRpb25fZGV2LCBhcHBlbmRfc3R5bGVzLCBhc3NpZ24sIGF0dHIsIGF0dHJfZGV2LCBhdHRyaWJ1dGVfdG9fb2JqZWN0LCBiZWZvcmVVcGRhdGUsIGJpbmQsIGJpbmRpbmdfY2FsbGJhY2tzLCBibGFua19vYmplY3QsIGJ1YmJsZSwgY2hlY2tfb3V0cm9zLCBjaGlsZHJlbiwgY2xhaW1fY29tcG9uZW50LCBjbGFpbV9lbGVtZW50LCBjbGFpbV9odG1sX3RhZywgY2xhaW1fc3BhY2UsIGNsYWltX3N2Z19lbGVtZW50LCBjbGFpbV90ZXh0LCBjbGVhcl9sb29wcywgY29tcG9uZW50X3N1YnNjcmliZSwgY29tcHV0ZV9yZXN0X3Byb3BzLCBjb21wdXRlX3Nsb3RzLCBjcmVhdGVFdmVudERpc3BhdGNoZXIsIGNyZWF0ZV9hbmltYXRpb24sIGNyZWF0ZV9iaWRpcmVjdGlvbmFsX3RyYW5zaXRpb24sIGNyZWF0ZV9jb21wb25lbnQsIGNyZWF0ZV9pbl90cmFuc2l0aW9uLCBjcmVhdGVfb3V0X3RyYW5zaXRpb24sIGNyZWF0ZV9zbG90LCBjcmVhdGVfc3NyX2NvbXBvbmVudCwgY3VycmVudF9jb21wb25lbnQsIGN1c3RvbV9ldmVudCwgZGF0YXNldF9kZXYsIGRlYnVnLCBkZXN0cm95X2Jsb2NrLCBkZXN0cm95X2NvbXBvbmVudCwgZGVzdHJveV9lYWNoLCBkZXRhY2gsIGRldGFjaF9hZnRlcl9kZXYsIGRldGFjaF9iZWZvcmVfZGV2LCBkZXRhY2hfYmV0d2Vlbl9kZXYsIGRldGFjaF9kZXYsIGRpcnR5X2NvbXBvbmVudHMsIGRpc3BhdGNoX2RldiwgZWFjaCwgZWxlbWVudCwgZWxlbWVudF9pcywgZW1wdHksIGVuZF9oeWRyYXRpbmcsIGVzY2FwZSwgZXNjYXBlX2F0dHJpYnV0ZV92YWx1ZSwgZXNjYXBlX29iamVjdCwgZXNjYXBlZCwgZXhjbHVkZV9pbnRlcm5hbF9wcm9wcywgZml4X2FuZF9kZXN0cm95X2Jsb2NrLCBmaXhfYW5kX291dHJvX2FuZF9kZXN0cm95X2Jsb2NrLCBmaXhfcG9zaXRpb24sIGZsdXNoLCBnZXRBbGxDb250ZXh0cywgZ2V0Q29udGV4dCwgZ2V0X2FsbF9kaXJ0eV9mcm9tX3Njb3BlLCBnZXRfYmluZGluZ19ncm91cF92YWx1ZSwgZ2V0X2N1cnJlbnRfY29tcG9uZW50LCBnZXRfY3VzdG9tX2VsZW1lbnRzX3Nsb3RzLCBnZXRfcm9vdF9mb3Jfc3R5bGUsIGdldF9zbG90X2NoYW5nZXMsIGdldF9zcHJlYWRfb2JqZWN0LCBnZXRfc3ByZWFkX3VwZGF0ZSwgZ2V0X3N0b3JlX3ZhbHVlLCBnbG9iYWxzLCBncm91cF9vdXRyb3MsIGhhbmRsZV9wcm9taXNlLCBoYXNDb250ZXh0LCBoYXNfcHJvcCwgaWRlbnRpdHksIGluaXQsIGluc2VydCwgaW5zZXJ0X2RldiwgaW5zZXJ0X2h5ZHJhdGlvbiwgaW5zZXJ0X2h5ZHJhdGlvbl9kZXYsIGludHJvcywgaW52YWxpZF9hdHRyaWJ1dGVfbmFtZV9jaGFyYWN0ZXIsIGlzX2NsaWVudCwgaXNfY3Jvc3NvcmlnaW4sIGlzX2VtcHR5LCBpc19mdW5jdGlvbiwgaXNfcHJvbWlzZSwgbGlzdGVuLCBsaXN0ZW5fZGV2LCBsb29wLCBsb29wX2d1YXJkLCBtZXJnZV9zc3Jfc3R5bGVzLCBtaXNzaW5nX2NvbXBvbmVudCwgbW91bnRfY29tcG9uZW50LCBub29wLCBub3RfZXF1YWwsIG5vdywgbnVsbF90b19lbXB0eSwgb2JqZWN0X3dpdGhvdXRfcHJvcGVydGllcywgb25EZXN0cm95LCBvbk1vdW50LCBvbmNlLCBvdXRyb19hbmRfZGVzdHJveV9ibG9jaywgcHJldmVudF9kZWZhdWx0LCBwcm9wX2RldiwgcXVlcnlfc2VsZWN0b3JfYWxsLCByYWYsIHJ1biwgcnVuX2FsbCwgc2FmZV9ub3RfZXF1YWwsIHNjaGVkdWxlX3VwZGF0ZSwgc2VsZWN0X211bHRpcGxlX3ZhbHVlLCBzZWxlY3Rfb3B0aW9uLCBzZWxlY3Rfb3B0aW9ucywgc2VsZWN0X3ZhbHVlLCBzZWxmLCBzZXRDb250ZXh0LCBzZXRfYXR0cmlidXRlcywgc2V0X2N1cnJlbnRfY29tcG9uZW50LCBzZXRfY3VzdG9tX2VsZW1lbnRfZGF0YSwgc2V0X2RhdGEsIHNldF9kYXRhX2Rldiwgc2V0X2lucHV0X3R5cGUsIHNldF9pbnB1dF92YWx1ZSwgc2V0X25vdywgc2V0X3JhZiwgc2V0X3N0b3JlX3ZhbHVlLCBzZXRfc3R5bGUsIHNldF9zdmdfYXR0cmlidXRlcywgc3BhY2UsIHNwcmVhZCwgc3JjX3VybF9lcXVhbCwgc3RhcnRfaHlkcmF0aW5nLCBzdG9wX3Byb3BhZ2F0aW9uLCBzdWJzY3JpYmUsIHN2Z19lbGVtZW50LCB0ZXh0LCB0aWNrLCB0aW1lX3Jhbmdlc190b19hcnJheSwgdG9fbnVtYmVyLCB0b2dnbGVfY2xhc3MsIHRyYW5zaXRpb25faW4sIHRyYW5zaXRpb25fb3V0LCB0cnVzdGVkLCB1cGRhdGVfYXdhaXRfYmxvY2tfYnJhbmNoLCB1cGRhdGVfa2V5ZWRfZWFjaCwgdXBkYXRlX3Nsb3QsIHVwZGF0ZV9zbG90X2Jhc2UsIHZhbGlkYXRlX2NvbXBvbmVudCwgdmFsaWRhdGVfZWFjaF9hcmd1bWVudCwgdmFsaWRhdGVfZWFjaF9rZXlzLCB2YWxpZGF0ZV9zbG90cywgdmFsaWRhdGVfc3RvcmUsIHhsaW5rX2F0dHIgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcztcbnZhciBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFID0gNjAwMDA7XG5cbmZ1bmN0aW9uIGdldERhdGVNaWxsaXNlY29uZHNQYXJ0KGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpICUgTUlMTElTRUNPTkRTX0lOX01JTlVURTtcbn1cbi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGlydHlEYXRlKSB7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoZGlydHlEYXRlLmdldFRpbWUoKSk7XG4gIHZhciBiYXNlVGltZXpvbmVPZmZzZXQgPSBNYXRoLmNlaWwoZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpKTtcbiAgZGF0ZS5zZXRTZWNvbmRzKDAsIDApO1xuICB2YXIgaGFzTmVnYXRpdmVVVENPZmZzZXQgPSBiYXNlVGltZXpvbmVPZmZzZXQgPiAwO1xuICB2YXIgbWlsbGlzZWNvbmRzUGFydE9mVGltZXpvbmVPZmZzZXQgPSBoYXNOZWdhdGl2ZVVUQ09mZnNldCA/IChNSUxMSVNFQ09ORFNfSU5fTUlOVVRFICsgZ2V0RGF0ZU1pbGxpc2Vjb25kc1BhcnQoZGF0ZSkpICUgTUlMTElTRUNPTkRTX0lOX01JTlVURSA6IGdldERhdGVNaWxsaXNlY29uZHNQYXJ0KGRhdGUpO1xuICByZXR1cm4gYmFzZVRpbWV6b25lT2Zmc2V0ICogTUlMTElTRUNPTkRTX0lOX01JTlVURSArIG1pbGxpc2Vjb25kc1BhcnRPZlRpbWV6b25lT2Zmc2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJlcXVpcmVkQXJncztcblxuZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdG9EYXRlO1xuXG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gICgwLCBfaW5kZXguZGVmYXVsdCkoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY29tcGFyZUFzYztcblxudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3RvRGF0ZS9pbmRleC5qc1wiKSk7XG5cbnZhciBfaW5kZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OTpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IC0xXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlQXNjKVxuICogLy89PiBbXG4gKiAvLyAgIFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMCxcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuZnVuY3Rpb24gY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICAoMCwgX2luZGV4Mi5kZWZhdWx0KSgyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSAoMCwgX2luZGV4LmRlZmF1bHQpKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gKDAsIF9pbmRleC5kZWZhdWx0KShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTsgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHM7XG5cbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi90b0RhdGUvaW5kZXguanNcIikpO1xuXG52YXIgX2luZGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBtaWxsaXNlY29uZHMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDE0IDEyOjMwOjIwLjYwMCBhbmQgMiBKdWx5IDIwMTQgMTI6MzA6MjEuNzAwP1xuICogdmFyIHJlc3VsdCA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMSwgNzAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMCwgNjAwKVxuICogKVxuICogLy89PiAxMTAwXG4gKi9cbmZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICAoMCwgX2luZGV4Mi5kZWZhdWx0KSgyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSAoMCwgX2luZGV4LmRlZmF1bHQpKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gKDAsIF9pbmRleC5kZWZhdWx0KShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdC5nZXRUaW1lKCkgLSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRpZmZlcmVuY2VJblNlY29uZHM7XG5cbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9kaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMvaW5kZXguanNcIikpO1xuXG52YXIgX2luZGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5TZWNvbmRzXG4gKiBAY2F0ZWdvcnkgU2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBzZWNvbmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IHNlY29uZHMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDE0IDEyOjMwOjA3Ljk5OSBhbmQgMiBKdWx5IDIwMTQgMTI6MzA6MjAuMDAwP1xuICogdmFyIHJlc3VsdCA9IGRpZmZlcmVuY2VJblNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDcsIDk5OSlcbiAqIClcbiAqIC8vPT4gMTJcbiAqL1xuZnVuY3Rpb24gZGlmZmVyZW5jZUluU2Vjb25kcyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICAoMCwgX2luZGV4Mi5kZWZhdWx0KSgyLCBhcmd1bWVudHMpO1xuICB2YXIgZGlmZiA9ICgwLCBfaW5kZXguZGVmYXVsdCkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIC8gMTAwMDtcbiAgcmV0dXJuIGRpZmYgPiAwID8gTWF0aC5mbG9vcihkaWZmKSA6IE1hdGguY2VpbChkaWZmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBhc3NpZ247XG5cbmZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIGRpcnR5T2JqZWN0KSB7XG4gIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Fzc2lnbiByZXF1aXJlcyB0aGF0IGlucHV0IHBhcmFtZXRlciBub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgfVxuXG4gIGRpcnR5T2JqZWN0ID0gZGlydHlPYmplY3QgfHwge307XG5cbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gZGlydHlPYmplY3QpIHtcbiAgICBpZiAoZGlydHlPYmplY3QuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICB0YXJnZXRbcHJvcGVydHldID0gZGlydHlPYmplY3RbcHJvcGVydHldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY2xvbmVPYmplY3Q7XG5cbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9hc3NpZ24vaW5kZXguanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBjbG9uZU9iamVjdChkaXJ0eU9iamVjdCkge1xuICByZXR1cm4gKDAsIF9pbmRleC5kZWZhdWx0KSh7fSwgZGlydHlPYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGZvcm1hdERpc3RhbmNlO1xudmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJlc3VsdDtcblxuICBpZiAodHlwZW9mIGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl0ub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudCk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gYnVpbGRGb3JtYXRMb25nRm47XG5cbmZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eU9wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGZvcm1hdExvbmc7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZm9ybWF0UmVsYXRpdmU7XG52YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGJ1aWxkTG9jYWxpemVGbjtcblxuZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBkaXJ0eU9wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7XG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddIC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuICAvLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbiAgLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4gIC8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxufTtcbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG5cbmZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9kaXJ0eU9wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7IC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YDpcbiAgLy9cbiAgLy8gICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fVxuICAvLyAgIHZhciB1bml0ID0gU3RyaW5nKG9wdGlvbnMudW5pdClcbiAgLy9cbiAgLy8gd2hlcmUgYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCdcblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuXG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59XG5cbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIChxdWFydGVyKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHF1YXJ0ZXIpIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogKDAsIF9pbmRleC5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsaXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGJ1aWxkTWF0Y2hQYXR0ZXJuRm47XG5cbmZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5U3RyaW5nLCBkaXJ0eU9wdGlvbnMpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKGRpcnR5U3RyaW5nKTtcbiAgICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuXG4gICAgaWYgKCFwYXJzZVJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpXG4gICAgfTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBidWlsZE1hdGNoRm47XG5cbmZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlTdHJpbmcsIGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcoZGlydHlTdHJpbmcpO1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciB2YWx1ZTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocGFyc2VQYXR0ZXJucykgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHZhbHVlID0gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKVxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfaW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIikpO1xuXG52YXIgX2luZGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6ICgwLCBfaW5kZXguZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6ICgwLCBfaW5kZXgyLmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXgyLmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6ICgwLCBfaW5kZXgyLmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6ICgwLCBfaW5kZXgyLmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleDIuZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xudmFyIF9kZWZhdWx0ID0gbWF0Y2g7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCIpKTtcblxudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiKSk7XG5cbnZhciBfaW5kZXgzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCIpKTtcblxudmFyIF9pbmRleDQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIikpO1xuXG52YXIgX2luZGV4NSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogX2luZGV4LmRlZmF1bHQsXG4gIGZvcm1hdExvbmc6IF9pbmRleDIuZGVmYXVsdCxcbiAgZm9ybWF0UmVsYXRpdmU6IF9pbmRleDMuZGVmYXVsdCxcbiAgbG9jYWxpemU6IF9pbmRleDQuZGVmYXVsdCxcbiAgbWF0Y2g6IF9pbmRleDUuZGVmYXVsdCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMFxuICAgIC8qIFN1bmRheSAqL1xuICAgICxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmb3JtYXREaXN0YW5jZVN0cmljdDtcblxudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiKSk7XG5cbnZhciBfaW5kZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY29tcGFyZUFzYy9pbmRleC5qc1wiKSk7XG5cbnZhciBfaW5kZXgzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vdG9EYXRlL2luZGV4LmpzXCIpKTtcblxudmFyIF9pbmRleDQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9kaWZmZXJlbmNlSW5TZWNvbmRzL2luZGV4LmpzXCIpKTtcblxudmFyIF9pbmRleDUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9fbGliL2Nsb25lT2JqZWN0L2luZGV4LmpzXCIpKTtcblxudmFyIF9pbmRleDYgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIikpO1xuXG52YXIgX2luZGV4NyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIE1JTlVURVNfSU5fREFZID0gMTQ0MDtcbnZhciBNSU5VVEVTX0lOX01PTlRIID0gNDMyMDA7XG52YXIgTUlOVVRFU19JTl9ZRUFSID0gNTI1NjAwO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXREaXN0YW5jZVN0cmljdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIGluIHdvcmRzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyBpbiB3b3JkcywgdXNpbmcgc3RyaWN0IHVuaXRzLlxuICogVGhpcyBpcyBsaWtlIGBmb3JtYXREaXN0YW5jZWAsIGJ1dCBkb2VzIG5vdCB1c2UgaGVscGVycyBsaWtlICdhbG1vc3QnLCAnb3ZlcicsXG4gKiAnbGVzcyB0aGFuJyBhbmQgdGhlIGxpa2UuXG4gKlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzIHwgUmVzdWx0ICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCAuLi4gNTkgc2VjcyAgICAgICAgICB8IFswLi41OV0gc2Vjb25kcyAgICAgfFxuICogfCAxIC4uLiA1OSBtaW5zICAgICAgICAgIHwgWzEuLjU5XSBtaW51dGVzICAgICB8XG4gKiB8IDEgLi4uIDIzIGhycyAgICAgICAgICAgfCBbMS4uMjNdIGhvdXJzICAgICAgIHxcbiAqIHwgMSAuLi4gMjkgZGF5cyAgICAgICAgICB8IFsxLi4yOV0gZGF5cyAgICAgICAgfFxuICogfCAxIC4uLiAxMSBtb250aHMgICAgICAgIHwgWzEuLjExXSBtb250aHMgICAgICB8XG4gKiB8IDEgLi4uIE4geWVhcnMgICAgICAgICAgfCBbMS4uTl0gIHllYXJzICAgICAgIHxcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gVGhlIGZ1bmN0aW9uIHdhcyByZW5hbWVkIGZyb20gYGRpc3RhbmNlSW5Xb3Jkc1N0cmljdGAgdG8gYGZvcm1hdERpc3RhbmNlU3RyaWN0YFxuICogICB0byBtYWtlIGl0cyBuYW1lIGNvbnNpc3RlbnQgd2l0aCBgZm9ybWF0YCBhbmQgYGZvcm1hdFJlbGF0aXZlYC5cbiAqXG4gKiAtIFRoZSBvcmRlciBvZiBhcmd1bWVudHMgaXMgc3dhcHBlZCB0byBtYWtlIHRoZSBmdW5jdGlvblxuICogICBjb25zaXN0ZW50IHdpdGggYGRpZmZlcmVuY2VJbi4uLmAgZnVuY3Rpb25zLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKlxuICogICBkaXN0YW5jZUluV29yZHNTdHJpY3QoXG4gKiAgICAgbmV3IERhdGUoMjAxNSwgMCwgMiksXG4gKiAgICAgbmV3IERhdGUoMjAxNCwgNiwgMilcbiAqICAgKSAvLz0+ICc2IG1vbnRocydcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqXG4gKiAgIGZvcm1hdERpc3RhbmNlU3RyaWN0KFxuICogICAgIG5ldyBEYXRlKDIwMTQsIDYsIDIpLFxuICogICAgIG5ldyBEYXRlKDIwMTUsIDAsIDIpXG4gKiAgICkgLy89PiAnNiBtb250aHMnXG4gKiAgIGBgYFxuICpcbiAqIC0gYHBhcnRpYWxNZXRob2RgIG9wdGlvbiBpcyByZW5hbWVkIHRvIGByb3VuZGluZ01ldGhvZGAuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqXG4gKiAgIGRpc3RhbmNlSW5Xb3Jkc1N0cmljdChcbiAqICAgICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzIsIDApLFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMywgMSksXG4gKiAgICAgeyBwYXJ0aWFsTWV0aG9kOiAnY2VpbCcgfVxuICogICApIC8vPT4gJzIgbWludXRlcydcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqXG4gKiAgIGZvcm1hdERpc3RhbmNlU3RyaWN0KFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMywgMSksXG4gKiAgICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTAsIDMyLCAwKSxcbiAqICAgICB7IHJvdW5kaW5nTWV0aG9kOiAnY2VpbCcgfVxuICogICApIC8vPT4gJzIgbWludXRlcydcbiAqICAgYGBgXG4gKlxuICogLSBJZiBgcm91bmRpbmdNZXRob2RgIGlzIG5vdCBzcGVjaWZpZWQsIGl0IG5vdyBkZWZhdWx0cyB0byBgcm91bmRgIGluc3RlYWQgb2YgYGZsb29yYC5cbiAqXG4gKiAtIGB1bml0YCBvcHRpb24gbm93IGFjY2VwdHMgb25lIG9mIHRoZSBzdHJpbmdzOlxuICogICAnc2Vjb25kJywgJ21pbnV0ZScsICdob3VyJywgJ2RheScsICdtb250aCcgb3IgJ3llYXInIGluc3RlYWQgb2YgJ3MnLCAnbScsICdoJywgJ2QnLCAnTScgb3IgJ1knXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqXG4gKiAgIGRpc3RhbmNlSW5Xb3Jkc1N0cmljdChcbiAqICAgICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzIsIDApLFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMywgMSksXG4gKiAgICAgeyB1bml0OiAnbScgfVxuICogICApXG4gKlxuICogICAvLyB2Mi4wLjAgb253YXJkXG4gKlxuICogICBmb3JtYXREaXN0YW5jZVN0cmljdChcbiAqICAgICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzMsIDEpLFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMiwgMCksXG4gKiAgICAgeyB1bml0OiAnbWludXRlJyB9XG4gKiAgIClcbiAqICAgYGBgXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBiYXNlRGF0ZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFkZFN1ZmZpeD1mYWxzZV0gLSByZXN1bHQgaW5kaWNhdGVzIGlmIHRoZSBzZWNvbmQgZGF0ZSBpcyBlYXJsaWVyIG9yIGxhdGVyIHRoYW4gdGhlIGZpcnN0XG4gKiBAcGFyYW0geydzZWNvbmQnfCdtaW51dGUnfCdob3VyJ3wnZGF5J3wnbW9udGgnfCd5ZWFyJ30gW29wdGlvbnMudW5pdF0gLSBpZiBzcGVjaWZpZWQsIHdpbGwgZm9yY2UgYSB1bml0XG4gKiBAcGFyYW0geydmbG9vcid8J2NlaWwnfCdyb3VuZCd9IFtvcHRpb25zLnJvdW5kaW5nTWV0aG9kPSdyb3VuZCddIC0gd2hpY2ggd2F5IHRvIHJvdW5kIHBhcnRpYWwgdW5pdHNcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGRpc3RhbmNlIGluIHdvcmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgYmFzZURhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMucm91bmRpbmdNZXRob2RgIG11c3QgYmUgJ2Zsb29yJywgJ2NlaWwnIG9yICdyb3VuZCdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLnVuaXRgIG11c3QgYmUgJ3NlY29uZCcsICdtaW51dGUnLCAnaG91cicsICdkYXknLCAnbW9udGgnIG9yICd5ZWFyJ1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdERpc3RhbmNlYCBwcm9wZXJ0eVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDIgSnVseSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNT9cbiAqIHZhciByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVN0cmljdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgbmV3IERhdGUoMjAxNSwgMCwgMikpXG4gKiAvLz0+ICc2IG1vbnRocydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAxIEphbnVhcnkgMjAxNSAwMDowMDoxNVxuICogLy8gYW5kIDEgSmFudWFyeSAyMDE1IDAwOjAwOjAwP1xuICogdmFyIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlU3RyaWN0KFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAxNSksXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDApXG4gKiApXG4gKiAvLz0+ICcxNSBzZWNvbmRzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBmcm9tIDEgSmFudWFyeSAyMDE2XG4gKiAvLyB0byAxIEphbnVhcnkgMjAxNSwgd2l0aCBhIHN1ZmZpeD9cbiAqIHZhciByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVN0cmljdChuZXcgRGF0ZSgyMDE1LCAwLCAxKSwgbmV3IERhdGUoMjAxNiwgMCwgMSksIHtcbiAqICAgYWRkU3VmZml4OiB0cnVlXG4gKiB9KVxuICogLy89PiAnMSB5ZWFyIGFnbydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgZnJvbSAxIEphbnVhcnkgMjAxNlxuICogLy8gdG8gMSBKYW51YXJ5IDIwMTUsIGluIG1pbnV0ZXM/XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VTdHJpY3QobmV3IERhdGUoMjAxNiwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpLCB7XG4gKiAgIHVuaXQ6ICdtaW51dGUnXG4gKiB9KVxuICogLy89PiAnNTI1NjAwIG1pbnV0ZXMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGZyb20gMSBKYW51YXJ5IDIwMTVcbiAqIC8vIHRvIDI4IEphbnVhcnkgMjAxNSwgaW4gbW9udGhzLCByb3VuZGVkIHVwP1xuICogdmFyIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlU3RyaWN0KG5ldyBEYXRlKDIwMTUsIDAsIDI4KSwgbmV3IERhdGUoMjAxNSwgMCwgMSksIHtcbiAqICAgdW5pdDogJ21vbnRoJyxcbiAqICAgcm91bmRpbmdNZXRob2Q6ICdjZWlsJ1xuICogfSlcbiAqIC8vPT4gJzEgbW9udGgnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMSBBdWd1c3QgMjAxNiBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gRXNwZXJhbnRvP1xuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VTdHJpY3QobmV3IERhdGUoMjAxNiwgNywgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcxIGphcm8nXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2VTdHJpY3QoZGlydHlEYXRlLCBkaXJ0eUJhc2VEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgKDAsIF9pbmRleDcuZGVmYXVsdCkoMiwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSB8fCBfaW5kZXg2LmRlZmF1bHQ7XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0RGlzdGFuY2UpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZS5mb3JtYXREaXN0YW5jZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIGNvbXBhcmlzb24gPSAoMCwgX2luZGV4Mi5kZWZhdWx0KShkaXJ0eURhdGUsIGRpcnR5QmFzZURhdGUpO1xuXG4gIGlmIChpc05hTihjb21wYXJpc29uKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfVxuXG4gIHZhciBsb2NhbGl6ZU9wdGlvbnMgPSAoMCwgX2luZGV4NS5kZWZhdWx0KShvcHRpb25zKTtcbiAgbG9jYWxpemVPcHRpb25zLmFkZFN1ZmZpeCA9IEJvb2xlYW4ob3B0aW9ucy5hZGRTdWZmaXgpO1xuICBsb2NhbGl6ZU9wdGlvbnMuY29tcGFyaXNvbiA9IGNvbXBhcmlzb247XG4gIHZhciBkYXRlTGVmdDtcbiAgdmFyIGRhdGVSaWdodDtcblxuICBpZiAoY29tcGFyaXNvbiA+IDApIHtcbiAgICBkYXRlTGVmdCA9ICgwLCBfaW5kZXgzLmRlZmF1bHQpKGRpcnR5QmFzZURhdGUpO1xuICAgIGRhdGVSaWdodCA9ICgwLCBfaW5kZXgzLmRlZmF1bHQpKGRpcnR5RGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0ZUxlZnQgPSAoMCwgX2luZGV4My5kZWZhdWx0KShkaXJ0eURhdGUpO1xuICAgIGRhdGVSaWdodCA9ICgwLCBfaW5kZXgzLmRlZmF1bHQpKGRpcnR5QmFzZURhdGUpO1xuICB9XG5cbiAgdmFyIHJvdW5kaW5nTWV0aG9kID0gb3B0aW9ucy5yb3VuZGluZ01ldGhvZCA9PSBudWxsID8gJ3JvdW5kJyA6IFN0cmluZyhvcHRpb25zLnJvdW5kaW5nTWV0aG9kKTtcbiAgdmFyIHJvdW5kaW5nTWV0aG9kRm47XG5cbiAgaWYgKHJvdW5kaW5nTWV0aG9kID09PSAnZmxvb3InKSB7XG4gICAgcm91bmRpbmdNZXRob2RGbiA9IE1hdGguZmxvb3I7XG4gIH0gZWxzZSBpZiAocm91bmRpbmdNZXRob2QgPT09ICdjZWlsJykge1xuICAgIHJvdW5kaW5nTWV0aG9kRm4gPSBNYXRoLmNlaWw7XG4gIH0gZWxzZSBpZiAocm91bmRpbmdNZXRob2QgPT09ICdyb3VuZCcpIHtcbiAgICByb3VuZGluZ01ldGhvZEZuID0gTWF0aC5yb3VuZDtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcInJvdW5kaW5nTWV0aG9kIG11c3QgYmUgJ2Zsb29yJywgJ2NlaWwnIG9yICdyb3VuZCdcIik7XG4gIH1cblxuICB2YXIgc2Vjb25kcyA9ICgwLCBfaW5kZXg0LmRlZmF1bHQpKGRhdGVSaWdodCwgZGF0ZUxlZnQpO1xuICB2YXIgb2Zmc2V0SW5TZWNvbmRzID0gKCgwLCBfaW5kZXguZGVmYXVsdCkoZGF0ZVJpZ2h0KSAtICgwLCBfaW5kZXguZGVmYXVsdCkoZGF0ZUxlZnQpKSAvIDEwMDA7XG4gIHZhciBtaW51dGVzID0gcm91bmRpbmdNZXRob2RGbigoc2Vjb25kcyAtIG9mZnNldEluU2Vjb25kcykgLyA2MCk7XG4gIHZhciB1bml0O1xuXG4gIGlmIChvcHRpb25zLnVuaXQgPT0gbnVsbCkge1xuICAgIGlmIChtaW51dGVzIDwgMSkge1xuICAgICAgdW5pdCA9ICdzZWNvbmQnO1xuICAgIH0gZWxzZSBpZiAobWludXRlcyA8IDYwKSB7XG4gICAgICB1bml0ID0gJ21pbnV0ZSc7XG4gICAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9EQVkpIHtcbiAgICAgIHVuaXQgPSAnaG91cic7XG4gICAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9NT05USCkge1xuICAgICAgdW5pdCA9ICdkYXknO1xuICAgIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fWUVBUikge1xuICAgICAgdW5pdCA9ICdtb250aCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVuaXQgPSAneWVhcic7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHVuaXQgPSBTdHJpbmcob3B0aW9ucy51bml0KTtcbiAgfSAvLyAwIHVwIHRvIDYwIHNlY29uZHNcblxuXG4gIGlmICh1bml0ID09PSAnc2Vjb25kJykge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hTZWNvbmRzJywgc2Vjb25kcywgbG9jYWxpemVPcHRpb25zKTsgLy8gMSB1cCB0byA2MCBtaW5zXG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ21pbnV0ZScpIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIG1pbnV0ZXMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgdXAgdG8gMjQgaG91cnNcbiAgfSBlbHNlIGlmICh1bml0ID09PSAnaG91cicpIHtcbiAgICB2YXIgaG91cnMgPSByb3VuZGluZ01ldGhvZEZuKG1pbnV0ZXMgLyA2MCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneEhvdXJzJywgaG91cnMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgdXAgdG8gMzAgZGF5c1xuICB9IGVsc2UgaWYgKHVuaXQgPT09ICdkYXknKSB7XG4gICAgdmFyIGRheXMgPSByb3VuZGluZ01ldGhvZEZuKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX0RBWSk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneERheXMnLCBkYXlzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIHVwIHRvIDEyIG1vbnRoc1xuICB9IGVsc2UgaWYgKHVuaXQgPT09ICdtb250aCcpIHtcbiAgICB2YXIgbW9udGhzID0gcm91bmRpbmdNZXRob2RGbihtaW51dGVzIC8gTUlOVVRFU19JTl9NT05USCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1vbnRocycsIG1vbnRocywgbG9jYWxpemVPcHRpb25zKTsgLy8gMSB5ZWFyIHVwIHRvIG1heCBEYXRlXG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ3llYXInKSB7XG4gICAgdmFyIHllYXJzID0gcm91bmRpbmdNZXRob2RGbihtaW51dGVzIC8gTUlOVVRFU19JTl9ZRUFSKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4WWVhcnMnLCB5ZWFycywgbG9jYWxpemVPcHRpb25zKTtcbiAgfVxuXG4gIHRocm93IG5ldyBSYW5nZUVycm9yKFwidW5pdCBtdXN0IGJlICdzZWNvbmQnLCAnbWludXRlJywgJ2hvdXInLCAnZGF5JywgJ21vbnRoJyBvciAneWVhcidcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsImltcG9ydCB7IG5vb3AsIHNhZmVfbm90X2VxdWFsLCBzdWJzY3JpYmUsIHJ1bl9hbGwsIGlzX2Z1bmN0aW9uIH0gZnJvbSAnLi4vaW50ZXJuYWwvaW5kZXgubWpzJztcbmV4cG9ydCB7IGdldF9zdG9yZV92YWx1ZSBhcyBnZXQgfSBmcm9tICcuLi9pbnRlcm5hbC9pbmRleC5tanMnO1xuXG5jb25zdCBzdWJzY3JpYmVyX3F1ZXVlID0gW107XG4vKipcbiAqIENyZWF0ZXMgYSBgUmVhZGFibGVgIHN0b3JlIHRoYXQgYWxsb3dzIHJlYWRpbmcgYnkgc3Vic2NyaXB0aW9uLlxuICogQHBhcmFtIHZhbHVlIGluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7U3RhcnRTdG9wTm90aWZpZXJ9c3RhcnQgc3RhcnQgYW5kIHN0b3Agbm90aWZpY2F0aW9ucyBmb3Igc3Vic2NyaXB0aW9uc1xuICovXG5mdW5jdGlvbiByZWFkYWJsZSh2YWx1ZSwgc3RhcnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdWJzY3JpYmU6IHdyaXRhYmxlKHZhbHVlLCBzdGFydCkuc3Vic2NyaWJlXG4gICAgfTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgYFdyaXRhYmxlYCBzdG9yZSB0aGF0IGFsbG93cyBib3RoIHVwZGF0aW5nIGFuZCByZWFkaW5nIGJ5IHN1YnNjcmlwdGlvbi5cbiAqIEBwYXJhbSB7Kj19dmFsdWUgaW5pdGlhbCB2YWx1ZVxuICogQHBhcmFtIHtTdGFydFN0b3BOb3RpZmllcj19c3RhcnQgc3RhcnQgYW5kIHN0b3Agbm90aWZpY2F0aW9ucyBmb3Igc3Vic2NyaXB0aW9uc1xuICovXG5mdW5jdGlvbiB3cml0YWJsZSh2YWx1ZSwgc3RhcnQgPSBub29wKSB7XG4gICAgbGV0IHN0b3A7XG4gICAgY29uc3Qgc3Vic2NyaWJlcnMgPSBuZXcgU2V0KCk7XG4gICAgZnVuY3Rpb24gc2V0KG5ld192YWx1ZSkge1xuICAgICAgICBpZiAoc2FmZV9ub3RfZXF1YWwodmFsdWUsIG5ld192YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbmV3X3ZhbHVlO1xuICAgICAgICAgICAgaWYgKHN0b3ApIHsgLy8gc3RvcmUgaXMgcmVhZHlcbiAgICAgICAgICAgICAgICBjb25zdCBydW5fcXVldWUgPSAhc3Vic2NyaWJlcl9xdWV1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBzdWJzY3JpYmVyIG9mIHN1YnNjcmliZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJbMV0oKTtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcl9xdWV1ZS5wdXNoKHN1YnNjcmliZXIsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJ1bl9xdWV1ZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZXJfcXVldWUubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWVbaV1bMF0oc3Vic2NyaWJlcl9xdWV1ZVtpICsgMV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlKGZuKSB7XG4gICAgICAgIHNldChmbih2YWx1ZSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdWJzY3JpYmUocnVuLCBpbnZhbGlkYXRlID0gbm9vcCkge1xuICAgICAgICBjb25zdCBzdWJzY3JpYmVyID0gW3J1biwgaW52YWxpZGF0ZV07XG4gICAgICAgIHN1YnNjcmliZXJzLmFkZChzdWJzY3JpYmVyKTtcbiAgICAgICAgaWYgKHN1YnNjcmliZXJzLnNpemUgPT09IDEpIHtcbiAgICAgICAgICAgIHN0b3AgPSBzdGFydChzZXQpIHx8IG5vb3A7XG4gICAgICAgIH1cbiAgICAgICAgcnVuKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHN1YnNjcmliZXJzLmRlbGV0ZShzdWJzY3JpYmVyKTtcbiAgICAgICAgICAgIGlmIChzdWJzY3JpYmVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc3RvcCgpO1xuICAgICAgICAgICAgICAgIHN0b3AgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4geyBzZXQsIHVwZGF0ZSwgc3Vic2NyaWJlIH07XG59XG5mdW5jdGlvbiBkZXJpdmVkKHN0b3JlcywgZm4sIGluaXRpYWxfdmFsdWUpIHtcbiAgICBjb25zdCBzaW5nbGUgPSAhQXJyYXkuaXNBcnJheShzdG9yZXMpO1xuICAgIGNvbnN0IHN0b3Jlc19hcnJheSA9IHNpbmdsZVxuICAgICAgICA/IFtzdG9yZXNdXG4gICAgICAgIDogc3RvcmVzO1xuICAgIGNvbnN0IGF1dG8gPSBmbi5sZW5ndGggPCAyO1xuICAgIHJldHVybiByZWFkYWJsZShpbml0aWFsX3ZhbHVlLCAoc2V0KSA9PiB7XG4gICAgICAgIGxldCBpbml0ZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gW107XG4gICAgICAgIGxldCBwZW5kaW5nID0gMDtcbiAgICAgICAgbGV0IGNsZWFudXAgPSBub29wO1xuICAgICAgICBjb25zdCBzeW5jID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHBlbmRpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmbihzaW5nbGUgPyB2YWx1ZXNbMF0gOiB2YWx1ZXMsIHNldCk7XG4gICAgICAgICAgICBpZiAoYXV0bykge1xuICAgICAgICAgICAgICAgIHNldChyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xlYW51cCA9IGlzX2Z1bmN0aW9uKHJlc3VsdCkgPyByZXN1bHQgOiBub29wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB1bnN1YnNjcmliZXJzID0gc3RvcmVzX2FycmF5Lm1hcCgoc3RvcmUsIGkpID0+IHN1YnNjcmliZShzdG9yZSwgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB2YWx1ZXNbaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHBlbmRpbmcgJj0gfigxIDw8IGkpO1xuICAgICAgICAgICAgaWYgKGluaXRlZCkge1xuICAgICAgICAgICAgICAgIHN5bmMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgcGVuZGluZyB8PSAoMSA8PCBpKTtcbiAgICAgICAgfSkpO1xuICAgICAgICBpbml0ZWQgPSB0cnVlO1xuICAgICAgICBzeW5jKCk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICAgICAgcnVuX2FsbCh1bnN1YnNjcmliZXJzKTtcbiAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgZGVyaXZlZCwgcmVhZGFibGUsIHdyaXRhYmxlIH07XG4iLCJpbXBvcnQgeyBXcml0YWJsZSwgd3JpdGFibGUgfSBmcm9tIFwic3ZlbHRlL3N0b3JlXCI7XG5pbXBvcnQgdHlwZSB7IE1hbmlmZXN0IH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG5cbnR5cGUgRXJyb3JTdG9yZSA9IFJlY29yZDxzdHJpbmcsIE1hbmlmZXN0W1wiZXJyb3JcIl0+O1xuXG5mdW5jdGlvbiBpbml0aWFsaXplKCk6IFdyaXRhYmxlPEVycm9yU3RvcmU+IHtcbiAgcmV0dXJuIHdyaXRhYmxlKHt9KTtcbn1cblxuZXhwb3J0IGNvbnN0IEVycm9yU3RvcmUgPSBpbml0aWFsaXplKCk7XG4iLCJpbXBvcnQgeyBFcnJvclN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlL2Vycm9yXCI7XG5pbXBvcnQgdHlwZSB7IE1hbmlmZXN0IH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYW5kbGVSZXNwb25zZTxUID0gdW5rbm93bj4oXG4gIHJlc3BvbnNlOiBSZXNwb25zZSxcbik6IFByb21pc2U8VD4ge1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgY29uc3QgcGFzc2VkRXJyb3IgPSBhd2FpdCByZXNwb25zZS5qc29uKCkudGhlbihcbiAgICAgIChqc29uOiB7XG4gICAgICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgICByZXNwb25zZT86IHtcbiAgICAgICAgICBlcnJvcj86IHN0cmluZztcbiAgICAgICAgfTtcbiAgICAgIH0pID0+IGpzb24sXG4gICAgKTtcblxuICAgIGNvbnN0IG1lc3NhZ2UgPSBwYXNzZWRFcnJvcj8ucmVzcG9uc2U/LmVycm9yIHx8IHBhc3NlZEVycm9yPy5tZXNzYWdlO1xuXG4gICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgZXJyb3IubmFtZSA9IHBhc3NlZEVycm9yLm5hbWU7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHsgbWVzc2FnZTogZXJyb3IsIHN0YXR1c0NvZGU6IHJlc3BvbnNlLnN0YXR1cyB9KTtcbiAgfVxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufVxuXG50eXBlIEhUVFBNZXRob2QgPSBcIlBPU1RcIiB8IFwiR0VUXCIgfCBcIlBVVFwiIHwgXCJQQVRDSFwiIHwgXCJPUFRJT05TXCIgfCB1bmRlZmluZWQ7XG5cbnR5cGUgRmV0Y2hPcHRpb25zID0ge1xuICBib2R5PzogdW5rbm93bjtcbiAgbWV0aG9kPzogSFRUUE1ldGhvZDtcbiAgY29tcG9uZW50X2lkPzogc3RyaW5nO1xuICBhY2Nlc3NfdG9rZW4/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmV0Y2hDb25maWcoXG4gIG9wdHM6IEZldGNoT3B0aW9ucyA9IHsgY29tcG9uZW50X2lkOiBcIlwiIH0sXG4pOiBSZXF1ZXN0SW5pdCB7XG4gIHJldHVybiB7XG4gICAgbWV0aG9kOiBvcHRzLm1ldGhvZCB8fCBcIkdFVFwiLCAvLyBHRVQgaXMgZGVmYXVsdCBtZXRob2RcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBcIlgtQ29tcG9uZW50LUlkXCI6IG9wdHMuY29tcG9uZW50X2lkIHx8IFwiXCIsIC8vIENvbXBvbmVudCBJRCBpcyBwYXNzZWQgYXMgaGVhZGVyXG4gICAgICBcIlgtQWNjZXNzLVRva2VuXCI6IG9wdHMuYWNjZXNzX3Rva2VuIHx8IFwiXCIsIC8vIEFjY2VzcyBUb2tlbiBpcyBwYXNzZWQgYXMgaGVhZGVyXG4gICAgfSxcbiAgICBib2R5OiBvcHRzLmJvZHkgPyBKU09OLnN0cmluZ2lmeShvcHRzLmJvZHkpIDogdW5kZWZpbmVkLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRXJyb3IoaWQ6IHN0cmluZywgZXJyb3I6IE1hbmlmZXN0W1wiZXJyb3JcIl0pOiBuZXZlciB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICBFcnJvclN0b3JlLnVwZGF0ZSgoZXJyb3JNYXApID0+ICh7IC4uLmVycm9yTWFwLCBbaWRdOiBlcnJvciB9KSk7XG4gIHRocm93IGVycm9yO1xufVxuXG5jb25zdCBSRUdJT05fTUFQUElORzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgXCIwMDFcIjogXCJcIiwgLy8gVVNcbiAgXCIwMDJcIjogXCJpcmVsYW5kLVwiLCAvLyBFVVxuICBcIjAwM1wiOiBcImNhbmFkYS1cIiwgLy8gQ2FuYWRhXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWlkZGxld2FyZUFwaVVybChpZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IHJlZ2lvbiA9IFwiXCI7XG4gIGlmIChpZC5zdWJzdHJpbmcoMywgNCkgPT09IFwiLVwiKSB7XG4gICAgY29uc3QgY29kZSA9IGlkLnN1YnN0cmluZygwLCAzKTtcbiAgICBpZiAodHlwZW9mIFJFR0lPTl9NQVBQSU5HW2NvZGVdICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZWdpb24gPSBSRUdJT05fTUFQUElOR1tjb2RlXTtcbiAgICB9XG4gIH1cbiAgY29uc3QgQVBJX0dBVEVXQVkgPSBgaHR0cHM6Ly8ke3JlZ2lvbn0ke3Byb2Nlc3MuZW52LkFQSV9HQVRFV0FZfWA7XG4gIHJldHVybiBBUElfR0FURVdBWTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpbGVuY2UoZXJyb3I6IEVycm9yKSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRRdWVyeVBhcmFtcyhwYXJhbXM6IFJlY29yZDxzdHJpbmcsIGFueT4pOiBzdHJpbmcge1xuICByZXR1cm4gT2JqZWN0LmtleXMocGFyYW1zKVxuICAgIC5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICBpZiAocGFyYW1zW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhY2MuYXBwZW5kKGtleSwgcGFyYW1zW2tleV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBuZXcgVVJMU2VhcmNoUGFyYW1zKCkpXG4gICAgLnRvU3RyaW5nKCk7XG59XG4iLCJpbXBvcnQge1xuICBnZXRGZXRjaENvbmZpZyxcbiAgaGFuZGxlRXJyb3IsXG4gIGhhbmRsZVJlc3BvbnNlLFxuICBnZXRNaWRkbGV3YXJlQXBpVXJsLFxuICBidWlsZFF1ZXJ5UGFyYW1zLFxufSBmcm9tIFwiLi4vbWV0aG9kcy9hcGlcIjtcbmltcG9ydCB0eXBlIHtcbiAgQ29udGFjdHNRdWVyeSxcbiAgQ29udGFjdCxcbiAgQ29udGFjdFNlYXJjaFF1ZXJ5LFxuICBDb250YWN0c1F1ZXJ5UGFyYW1zLFxufSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvQ29udGFjdHNcIjtcbmltcG9ydCB0eXBlIHsgTWlkZGxld2FyZVJlc3BvbnNlLCBUaHJlYWQgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvTnlsYXNcIjtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ29udGFjdHMgPSBhc3luYyAoXG4gIHF1ZXJ5OiBDb250YWN0c1F1ZXJ5LFxuICBwYXJhbXM6IENvbnRhY3RzUXVlcnlQYXJhbXMsXG4pOiBQcm9taXNlPENvbnRhY3RbXT4gPT4ge1xuICBjb25zdCB1cmwgPSBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKFxuICAgIHF1ZXJ5LmNvbXBvbmVudF9pZCxcbiAgKX0vY29udGFjdC1saXN0L2NvbnRhY3RzPyR7YnVpbGRRdWVyeVBhcmFtcyhwYXJhbXMpfWA7XG5cbiAgY29uc3QgY29udGFjdHMgPSBhd2FpdCBmZXRjaChcbiAgICB1cmwsXG4gICAgZ2V0RmV0Y2hDb25maWcoe1xuICAgICAgY29tcG9uZW50X2lkOiBxdWVyeS5jb21wb25lbnRfaWQsXG4gICAgICBhY2Nlc3NfdG9rZW46IHF1ZXJ5LmFjY2Vzc190b2tlbixcbiAgICB9KSxcbiAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPENvbnRhY3RbXT4+KHJlc3BvbnNlKSlcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgcmV0dXJuIGpzb24ucmVzcG9uc2U7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihxdWVyeS5jb21wb25lbnRfaWQsIGVycm9yKSk7XG4gIHJldHVybiBjb250YWN0cyA/PyBbXTtcbn07XG5cbi8vIHF1ZXJ5LnF1ZXJ5IHNob3VsZCBiZSBhIHF1ZXJ5U3RyaW5nIGFzIGRlZmluZWQgYXQgaHR0cHM6Ly9kb2NzLm55bGFzLmNvbS9yZWZlcmVuY2UjY29udGFjdHMtMVxuZXhwb3J0IGNvbnN0IGZldGNoQ29udGFjdHNCeVF1ZXJ5ID0gYXN5bmMgKFxuICBxdWVyeTogQ29udGFjdFNlYXJjaFF1ZXJ5LFxuKTogUHJvbWlzZTxDb250YWN0W10+ID0+IHtcbiAgY29uc3QgY29udGFjdHMgPSBhd2FpdCBmZXRjaChcbiAgICBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKHF1ZXJ5LmNvbXBvbmVudF9pZCl9L2NvbnRhY3RzJHtxdWVyeS5xdWVyeX1gLFxuICAgIGdldEZldGNoQ29uZmlnKHtcbiAgICAgIGNvbXBvbmVudF9pZDogcXVlcnkuY29tcG9uZW50X2lkLFxuICAgICAgYWNjZXNzX3Rva2VuOiBxdWVyeS5hY2Nlc3NfdG9rZW4sXG4gICAgfSksXG4gIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxDb250YWN0W10+PihyZXNwb25zZSkpXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xuXG4gIHJldHVybiBjb250YWN0cyA/PyBbXTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaENvbnRhY3RJbWFnZSA9IGFzeW5jIChcbiAgcXVlcnk6IENvbnRhY3RzUXVlcnksXG4gIGlkOiBzdHJpbmcsXG4pOiBQcm9taXNlPHN0cmluZz4gPT4ge1xuICByZXR1cm4gYXdhaXQgZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChxdWVyeS5jb21wb25lbnRfaWQpfS9jb250YWN0cy8ke2lkfS9waWN0dXJlYCxcbiAgICBnZXRGZXRjaENvbmZpZyh7XG4gICAgICBjb21wb25lbnRfaWQ6IHF1ZXJ5LmNvbXBvbmVudF9pZCxcbiAgICAgIGFjY2Vzc190b2tlbjogcXVlcnkuYWNjZXNzX3Rva2VuLFxuICAgIH0pLFxuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8c3RyaW5nPj4ocmVzcG9uc2UpKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaENvbnRhY3RUaHJlYWRzID0gYXN5bmMgKFxuICBxdWVyeTogQ29udGFjdHNRdWVyeSxcbiAgb2Zmc2V0OiBudW1iZXIsXG4gIGxpbWl0OiBudW1iZXIsXG4pOiBQcm9taXNlPFRocmVhZFtdPiA9PiB7XG4gIHJldHVybiBhd2FpdCBmZXRjaChcbiAgICBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKFxuICAgICAgcXVlcnkuY29tcG9uZW50X2lkLFxuICAgICl9L3RocmVhZHM/b2Zmc2V0PSR7b2Zmc2V0fSZsaW1pdD0ke2xpbWl0fWAsXG4gICAgZ2V0RmV0Y2hDb25maWcocXVlcnkpLFxuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8VGhyZWFkW10+PihyZXNwb25zZSkpXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHJldHVybiBqc29uLnJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xufTtcbiIsImltcG9ydCB7XG4gIGdldEZldGNoQ29uZmlnLFxuICBoYW5kbGVFcnJvcixcbiAgaGFuZGxlUmVzcG9uc2UsXG4gIGdldE1pZGRsZXdhcmVBcGlVcmwsXG59IGZyb20gXCIuLi9tZXRob2RzL2FwaVwiO1xuaW1wb3J0IHR5cGUge1xuICBNYWlsYm94UXVlcnksXG4gIFRocmVhZCxcbiAgQ29udmVyc2F0aW9uUXVlcnksXG4gIENvbnZlcnNhdGlvbixcbiAgTWlkZGxld2FyZVJlc3BvbnNlLFxufSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvTnlsYXNcIjtcblxuZXhwb3J0IGNvbnN0IGZldGNoVGhyZWFkcyA9IChcbiAgcXVlcnk6IE1haWxib3hRdWVyeSxcbiAgbGltaXQ6IG51bWJlcixcbiAgb2Zmc2V0OiBudW1iZXIsXG4pOiBQcm9taXNlPFRocmVhZFtdPiA9PiB7XG4gIGlmIChxdWVyeS50aHJlYWRfaWRzKSB7XG4gICAgLy8gJmxpbWl0PSR7bGltaXR9Jm9mZnNldD0ke29mZnNldH1cbiAgICBjb25zdCBwYWdlX29mX2lkcyA9IHF1ZXJ5LnRocmVhZF9pZHMuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBsaW1pdCk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgICAgcGFnZV9vZl9pZHMubWFwKGFzeW5jICh0aHJlYWRfaWQpID0+IHtcbiAgICAgICAgLy8gTnlsYXMgQVBJIGRvZXMgbm90IHN1cHBvcnQgZmV0Y2hpbmcgdGhyZWFkcyBpbiBidWxrLCBzbyBtdXN0IGZldGNoIHRoZW0gb25lXG4gICAgICAgIC8vIGF0IGEgdGltZSA6KFxuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9IGAke2dldE1pZGRsZXdhcmVBcGlVcmwoXG4gICAgICAgICAgcXVlcnkuY29tcG9uZW50X2lkLFxuICAgICAgICApfS90aHJlYWRzLyR7dGhyZWFkX2lkfT92aWV3PWV4cGFuZGVkYDtcbiAgICAgICAgLy8gVE9ETzogaWRlYWxseSB0aGlzIHdvdWxkbid0IHJlcGxpY2F0ZSBtdWNoIG9mIHRoZSBjb2RlIGZyb20gYmVsb3dcbiAgICAgICAgcmV0dXJuIGF3YWl0IGZldGNoKHF1ZXJ5U3RyaW5nLCBnZXRGZXRjaENvbmZpZyhxdWVyeSkpXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PlxuICAgICAgICAgICAgaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPFRocmVhZD4+KHJlc3BvbnNlKSxcbiAgICAgICAgICApXG4gICAgICAgICAgLnRoZW4oKGpzb24pID0+IGpzb24ucmVzcG9uc2UpXG4gICAgICAgICAgLy8gVE9ETzogUmVtb3ZlIHRoaXMgdWdseSBoYWNrIHdoZW4gd2UgZml4IHRoZSBBUEkgZnJvbSByZXR1cm5pbmcgZ2hvc3QgbWVzc2FnZXMgKGUuZy4gdy9vIGEgZnJvbS90byBmaWVsZClcbiAgICAgICAgICAudGhlbigodGhyZWFkKSA9PiAoe1xuICAgICAgICAgICAgLi4udGhyZWFkLFxuICAgICAgICAgICAgbWVzc2FnZXM6IHRocmVhZC5tZXNzYWdlcy5maWx0ZXIoXG4gICAgICAgICAgICAgIChtZXNzYWdlKSA9PiBtZXNzYWdlLmZyb20ubGVuZ3RoICE9PSAwIHx8IG1lc3NhZ2UudG8ubGVuZ3RoICE9PSAwLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICB9KSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihxdWVyeS5jb21wb25lbnRfaWQsIGVycm9yKSk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG4gIGxldCBxdWVyeVN0cmluZyA9IGAke2dldE1pZGRsZXdhcmVBcGlVcmwoXG4gICAgcXVlcnkuY29tcG9uZW50X2lkLFxuICApfS90aHJlYWRzP3ZpZXc9ZXhwYW5kZWQmbm90X2luPXRyYXNoJmxpbWl0PSR7bGltaXR9Jm9mZnNldD0ke29mZnNldH1gO1xuICBpZiAocXVlcnkucXVlcnkpIHtcbiAgICBPYmplY3QuZW50cmllcyhxdWVyeS5xdWVyeSkuZm9yRWFjaChcbiAgICAgIChwYXJhbSkgPT4gKHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmcuY29uY2F0KGAmJHtwYXJhbVswXX09JHtwYXJhbVsxXX1gKSksXG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIGZldGNoKHF1ZXJ5U3RyaW5nLCBnZXRGZXRjaENvbmZpZyhxdWVyeSkpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+XG4gICAgICAgIGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxUaHJlYWRbXT4+KHJlc3BvbnNlKSxcbiAgICAgIClcbiAgICAgIC50aGVuKChqc29uKSA9PiBqc29uLnJlc3BvbnNlKVxuICAgICAgLy8gVE9ETzogUmVtb3ZlIHRoaXMgdWdseSBoYWNrIHdoZW4gd2UgZml4IHRoZSBBUEkgZnJvbSByZXR1cm5pbmcgZ2hvc3QgbWVzc2FnZXMgKGUuZy4gdy9vIGEgZnJvbS90byBmaWVsZClcbiAgICAgIC50aGVuKCh0aHJlYWRzKSA9PlxuICAgICAgICB0aHJlYWRzLm1hcCgodGhyZWFkKSA9PiAoe1xuICAgICAgICAgIC4uLnRocmVhZCxcbiAgICAgICAgICBtZXNzYWdlczogdGhyZWFkLm1lc3NhZ2VzLmZpbHRlcihcbiAgICAgICAgICAgIChtZXNzYWdlKSA9PiBtZXNzYWdlLmZyb20ubGVuZ3RoICE9PSAwIHx8IG1lc3NhZ2UudG8ubGVuZ3RoICE9PSAwLFxuICAgICAgICAgICksXG4gICAgICAgIH0pKSxcbiAgICAgIClcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKVxuICApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoVGhyZWFkQ291bnQocXVlcnk6IE1haWxib3hRdWVyeSk6IFByb21pc2U8bnVtYmVyPiB7XG4gIGxldCBxdWVyeVN0cmluZyA9IGAke2dldE1pZGRsZXdhcmVBcGlVcmwoXG4gICAgcXVlcnkuY29tcG9uZW50X2lkLFxuICApfS90aHJlYWRzP3ZpZXc9ZXhwYW5kZWQmbm90X2luPXRyYXNoJnZpZXc9Y291bnRgO1xuICBpZiAocXVlcnkucXVlcnkpIHtcbiAgICBPYmplY3QuZW50cmllcyhxdWVyeS5xdWVyeSkuZm9yRWFjaChcbiAgICAgIChwYXJhbSkgPT4gKHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmcuY29uY2F0KGAmJHtwYXJhbVswXX09JHtwYXJhbVsxXX1gKSksXG4gICAgKTtcbiAgfVxuXG4gIGlmIChxdWVyeS5rZXl3b3JkVG9TZWFyY2gpIHtcbiAgICBxdWVyeVN0cmluZyArPSBgJnE9JHtxdWVyeS5rZXl3b3JkVG9TZWFyY2h9YDtcbiAgfVxuXG4gIHJldHVybiBmZXRjaChxdWVyeVN0cmluZywgZ2V0RmV0Y2hDb25maWcocXVlcnkpKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPGFueT4+KHJlc3BvbnNlKSlcbiAgICAudGhlbigoanNvbikgPT4ganNvbi5yZXNwb25zZS5jb3VudCk7XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNlYXJjaFJlc3VsdFRocmVhZHMgPSAoXG4gIHF1ZXJ5OiBNYWlsYm94UXVlcnksXG4pOiBQcm9taXNlPFRocmVhZFtdPiA9PiB7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gYCR7Z2V0TWlkZGxld2FyZUFwaVVybChcbiAgICBxdWVyeS5jb21wb25lbnRfaWQsXG4gICl9L3RocmVhZHMvc2VhcmNoP3E9JHtxdWVyeS5rZXl3b3JkVG9TZWFyY2h9JnZpZXc9ZXhwYW5kZWQmbGltaXQ9JHtcbiAgICBxdWVyeS5xdWVyeS5saW1pdFxuICB9Jm9mZnNldD0ke3F1ZXJ5LnF1ZXJ5Lm9mZnNldH1gO1xuXG4gIHJldHVybiBmZXRjaChxdWVyeVN0cmluZywgZ2V0RmV0Y2hDb25maWcocXVlcnkpKVxuICAgIC50aGVuKGFzeW5jIChyZXNwb25zZSkgPT5cbiAgICAgIGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxUaHJlYWRbXT4+KHJlc3BvbnNlKSxcbiAgICApXG4gICAgLnRoZW4oKGpzb24pID0+IGpzb24ucmVzcG9uc2UpXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoVGhyZWFkID0gYXN5bmMgKFxuICBxdWVyeTogQ29udmVyc2F0aW9uUXVlcnksXG4pOiBQcm9taXNlPENvbnZlcnNhdGlvbj4gPT4ge1xuICBjb25zdCB0aHJlYWQgPSBhd2FpdCBmZXRjaChcbiAgICBgJHtnZXRNaWRkbGV3YXJlQXBpVXJsKHF1ZXJ5LmNvbXBvbmVudF9pZCl9L3RocmVhZHMvJHtcbiAgICAgIHF1ZXJ5LnRocmVhZF9pZFxuICAgIH0/dmlldz1leHBhbmRlZGAsXG4gICAgZ2V0RmV0Y2hDb25maWcoe1xuICAgICAgY29tcG9uZW50X2lkOiBxdWVyeS5jb21wb25lbnRfaWQsXG4gICAgICBhY2Nlc3NfdG9rZW46IHF1ZXJ5LmFjY2Vzc190b2tlbixcbiAgICB9KSxcbiAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT5cbiAgICAgIGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxDb252ZXJzYXRpb24+PihyZXNwb25zZSksXG4gICAgKVxuICAgIC50aGVuKChqc29uKSA9PiBqc29uLnJlc3BvbnNlKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKTtcblxuICByZXR1cm4gdGhyZWFkO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVRocmVhZCA9IChcbiAgcXVlcnk6IENvbnZlcnNhdGlvblF1ZXJ5LFxuICB1cGRhdGVkVGhyZWFkOiBDb252ZXJzYXRpb24sXG4pOiBQcm9taXNlPENvbnZlcnNhdGlvbj4gPT4ge1xuICAvLyBhY2NlcHRzIHVucmVhZCwgc3RhcnJlZCwgZm9sZGVyX2lkICsgbGFiZWxfaWRzLiBkZXZlbG9wZXIubnlsYXMuY29tL2RvY3MvYXBpLyNwdXQvdGhyZWFkcy9pZFxuICByZXR1cm4gZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChxdWVyeS5jb21wb25lbnRfaWQpfS90aHJlYWRzLyR7dXBkYXRlZFRocmVhZC5pZH1gLFxuICAgIGdldEZldGNoQ29uZmlnKHtcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgIGNvbXBvbmVudF9pZDogcXVlcnkuY29tcG9uZW50X2lkLFxuICAgICAgYWNjZXNzX3Rva2VuOiBxdWVyeS5hY2Nlc3NfdG9rZW4sXG4gICAgICBib2R5OiB7XG4gICAgICAgIHVucmVhZDogdXBkYXRlZFRocmVhZC51bnJlYWQsXG4gICAgICAgIHN0YXJyZWQ6IHVwZGF0ZWRUaHJlYWQuc3RhcnJlZCxcbiAgICAgICAgZm9sZGVyX2lkOiB1cGRhdGVkVGhyZWFkLmZvbGRlcl9pZCxcbiAgICAgICAgbGFiZWxfaWRzOiB1cGRhdGVkVGhyZWFkLmxhYmVsX2lkcyxcbiAgICAgIH0sXG4gICAgfSksXG4gIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+XG4gICAgICBoYW5kbGVSZXNwb25zZTxNaWRkbGV3YXJlUmVzcG9uc2U8Q29udmVyc2F0aW9uPj4ocmVzcG9uc2UpLFxuICAgIClcbiAgICAudGhlbigoanNvbikgPT4ganNvbi5yZXNwb25zZSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihxdWVyeS5jb21wb25lbnRfaWQsIGVycm9yKSk7XG59O1xuIiwiaW1wb3J0IHtcbiAgZ2V0RmV0Y2hDb25maWcsXG4gIGhhbmRsZUVycm9yLFxuICBoYW5kbGVSZXNwb25zZSxcbiAgZ2V0TWlkZGxld2FyZUFwaVVybCxcbn0gZnJvbSBcIi4uL21ldGhvZHMvYXBpXCI7XG5pbXBvcnQgdHlwZSB7IE1hbmlmZXN0LCBNaWRkbGV3YXJlUmVzcG9uc2UgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvTnlsYXNcIjtcblxuZXhwb3J0IGNvbnN0IGZldGNoTWFuaWZlc3QgPSBhc3luYyAoXG4gIGlkOiBzdHJpbmcsXG4gIGFjY2Vzc190b2tlbj86IHN0cmluZyxcbik6IFByb21pc2U8TWFuaWZlc3Q+ID0+IHtcbiAgcmV0dXJuIGF3YWl0IGZldGNoKFxuICAgIGAke2dldE1pZGRsZXdhcmVBcGlVcmwoaWQpfS9tYW5pZmVzdGAsXG4gICAgZ2V0RmV0Y2hDb25maWcoe1xuICAgICAgYWNjZXNzX3Rva2VuLFxuICAgICAgY29tcG9uZW50X2lkOiBpZCxcbiAgICB9KSxcbiAgKVxuICAgIC50aGVuPE1pZGRsZXdhcmVSZXNwb25zZT4oaGFuZGxlUmVzcG9uc2UpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5jb21wb25lbnQudGhlbWluZylcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihpZCwgZXJyb3IpKTtcbn07XG5cbi8vIEFsbG93cyA8bnlsYXMtc2NoZWR1bGUtZWRpdG9yPiB0byBtb2RpZnkgaXRzIG93biBwcm9wZXJ0aWVzXG5cbmV4cG9ydCBjb25zdCBzYXZlTWFuaWZlc3QgPSBhc3luYyAoXG4gIGlkOiBzdHJpbmcsXG4gIG1hbmlmZXN0OiBNYW5pZmVzdCxcbiAgYWNjZXNzX3Rva2VuPzogc3RyaW5nLFxuKTogUHJvbWlzZTxNYW5pZmVzdD4gPT4ge1xuICByZXR1cm4gZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChpZCl9L2NvbXBvbmVudGAsXG4gICAgZ2V0RmV0Y2hDb25maWcoe1xuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgY29tcG9uZW50X2lkOiBpZCxcbiAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgIGJvZHk6IHsgc2V0dGluZ3M6IG1hbmlmZXN0IH0sXG4gICAgfSksXG4gIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IGhhbmRsZVJlc3BvbnNlPE1pZGRsZXdhcmVSZXNwb25zZTxNYW5pZmVzdD4+KHJlc3BvbnNlKSlcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgcmV0dXJuIGpzb24ucmVzcG9uc2U7XG4gICAgfSk7XG59O1xuIiwiaW1wb3J0IHtcbiAgZ2V0RmV0Y2hDb25maWcsXG4gIGhhbmRsZUVycm9yLFxuICBoYW5kbGVSZXNwb25zZSxcbiAgZ2V0TWlkZGxld2FyZUFwaVVybCxcbn0gZnJvbSBcIi4uL21ldGhvZHMvYXBpXCI7XG5pbXBvcnQgdHlwZSB7XG4gIENvbnNlY3V0aXZlQXZhaWxhYmlsaXR5UXVlcnksXG4gIEF2YWlsYWJpbGl0eVF1ZXJ5LFxuICBBdmFpbGFiaWxpdHlSZXNwb25zZSxcbiAgRnJlZUJ1c3lSZXNwb25zZSxcbiAgUHJlRGF0ZWRUaW1lU2xvdCxcbn0gZnJvbSBcIkBjb21tb25zL3R5cGVzL0F2YWlsYWJpbGl0eVwiO1xuaW1wb3J0IHR5cGUgeyBNaWRkbGV3YXJlUmVzcG9uc2UgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvTnlsYXNcIjtcbmltcG9ydCB0eXBlIHsgRXZlbnREZWZpbml0aW9uIH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL1NjaGVkdWxlRWRpdG9yXCI7XG5pbXBvcnQgdHlwZSB7IENvbnNlY3V0aXZlRXZlbnQgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvQm9va2luZ1wiO1xuXG4vLyBUT0RPOiBkZXByZWNhdGUgaWYgd2UgZmluZCAvY2FsZW5kYXJzL2F2YWlsYWJpbGl0eSB0byBiZSBmdWxseSBzdWZmaWNpZW50XG5leHBvcnQgY29uc3QgZmV0Y2hGcmVlQnVzeSA9IGFzeW5jIChcbiAgcXVlcnk6IEF2YWlsYWJpbGl0eVF1ZXJ5LFxuKTogUHJvbWlzZTxGcmVlQnVzeVJlc3BvbnNlW10+ID0+IHtcbiAgcmV0dXJuIGZldGNoKFxuICAgIGAke2dldE1pZGRsZXdhcmVBcGlVcmwocXVlcnkuY29tcG9uZW50X2lkKX0vY2FsZW5kYXJzL2ZyZWUtYnVzeWAsXG4gICAgZ2V0RmV0Y2hDb25maWcoe1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGNvbXBvbmVudF9pZDogcXVlcnkuY29tcG9uZW50X2lkLFxuICAgICAgYWNjZXNzX3Rva2VuOiBxdWVyeS5hY2Nlc3NfdG9rZW4sXG4gICAgICBib2R5OiBxdWVyeS5ib2R5LFxuICAgIH0pLFxuICApXG4gICAgLnRoZW4oYXN5bmMgKGFwaVJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgaGFuZGxlUmVzcG9uc2U8TWlkZGxld2FyZVJlc3BvbnNlPEZyZWVCdXN5UmVzcG9uc2VbXT4+KFxuICAgICAgICBhcGlSZXNwb25zZSxcbiAgICAgICk7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaEF2YWlsYWJpbGl0eSA9IGFzeW5jIChcbiAgcXVlcnk6IEF2YWlsYWJpbGl0eVF1ZXJ5LFxuKTogUHJvbWlzZTxBdmFpbGFiaWxpdHlSZXNwb25zZT4gPT4ge1xuICByZXR1cm4gZmV0Y2goXG4gICAgYCR7Z2V0TWlkZGxld2FyZUFwaVVybChxdWVyeS5jb21wb25lbnRfaWQpfS9jYWxlbmRhcnMvYXZhaWxhYmlsaXR5YCxcbiAgICBnZXRGZXRjaENvbmZpZyh7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgY29tcG9uZW50X2lkOiBxdWVyeS5jb21wb25lbnRfaWQsXG4gICAgICBhY2Nlc3NfdG9rZW46IHF1ZXJ5LmFjY2Vzc190b2tlbixcbiAgICAgIGJvZHk6IHF1ZXJ5LmJvZHksXG4gICAgfSksXG4gIClcbiAgICAudGhlbihhc3luYyAoYXBpUmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCBoYW5kbGVSZXNwb25zZTxcbiAgICAgICAgTWlkZGxld2FyZVJlc3BvbnNlPEF2YWlsYWJpbGl0eVJlc3BvbnNlPlxuICAgICAgPihhcGlSZXNwb25zZSk7XG4gICAgICAvLyBOb3JtYWxpemUgcmVzcG9uc2UgLnN0YXJ0IGFuZCAuZW5kIHRvIC5zdGFydF90aW1lIGFuZCAuZW5kX3RpbWUgdG8gbWFrZSB1cCBmb3IgZGlzY3JlcGVuZGN5IGluIHRoZSBOeWxhcyBBUEk6IGh0dHBzOi8vZGV2ZWxvcGVyLm55bGFzLmNvbS9kb2NzL2Nvbm5lY3Rpdml0eS9jYWxlbmRhci9jYWxlbmRhci1hdmFpbGFiaWxpdHkvI2F2YWlsYWJpbGl0eS1yZXNwb25zZVxuICAgICAgLy8gQVBJIHN0b3J5OiBodHRwczovL2FwcC5zaG9ydGN1dC5jb20vbnlsYXMvc3RvcnkvNzMxOTYvXG4gICAgICBqc29uLnJlc3BvbnNlLnRpbWVfc2xvdHMgPSBqc29uLnJlc3BvbnNlLnRpbWVfc2xvdHMubWFwKChzbG90KSA9PiB7XG4gICAgICAgIHNsb3Quc3RhcnRfdGltZSA9IHNsb3Quc3RhcnQgfHwgMDtcbiAgICAgICAgc2xvdC5lbmRfdGltZSA9IHNsb3QuZW5kIHx8IDA7XG4gICAgICAgIGRlbGV0ZSBzbG90LnN0YXJ0O1xuICAgICAgICBkZWxldGUgc2xvdC5lbmQ7XG4gICAgICAgIHJldHVybiBzbG90O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4ganNvbi5yZXNwb25zZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKHF1ZXJ5LmNvbXBvbmVudF9pZCwgZXJyb3IpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaENvbnNlY3V0aXZlQXZhaWxhYmlsaXR5ID0gYXN5bmMgKFxuICBxdWVyeTogQ29uc2VjdXRpdmVBdmFpbGFiaWxpdHlRdWVyeSxcbik6IFByb21pc2U8Q29uc2VjdXRpdmVFdmVudFtdW10+ID0+IHtcbiAgcmV0dXJuIGZldGNoKFxuICAgIGAke2dldE1pZGRsZXdhcmVBcGlVcmwoXG4gICAgICBxdWVyeS5jb21wb25lbnRfaWQsXG4gICAgKX0vY2FsZW5kYXJzL2F2YWlsYWJpbGl0eS9jb25zZWN1dGl2ZWAsXG4gICAgZ2V0RmV0Y2hDb25maWcoe1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGNvbXBvbmVudF9pZDogcXVlcnkuY29tcG9uZW50X2lkLFxuICAgICAgYWNjZXNzX3Rva2VuOiBxdWVyeS5hY2Nlc3NfdG9rZW4sXG4gICAgICBib2R5OiBxdWVyeS5ib2R5LFxuICAgIH0pLFxuICApXG4gICAgLnRoZW4oYXN5bmMgKGFwaVJlc3BvbnNlKTogUHJvbWlzZTxDb25zZWN1dGl2ZUV2ZW50W11bXT4gPT4ge1xuICAgICAgY29uc3QganNvbiA9IGF3YWl0IGhhbmRsZVJlc3BvbnNlPFxuICAgICAgICBNaWRkbGV3YXJlUmVzcG9uc2U8UHJlRGF0ZWRUaW1lU2xvdFtdW10+XG4gICAgICA+KGFwaVJlc3BvbnNlKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlOiBQcmVEYXRlZFRpbWVTbG90W11bXSA9XG4gICAgICAgIGpzb24ucmVzcG9uc2U/Lm1hcCgoYmxvY2tTbG90KSA9PiB7XG4gICAgICAgICAgYmxvY2tTbG90ID0gYmxvY2tTbG90Lm1hcCgoc2xvdDogYW55KSA9PiB7XG4gICAgICAgICAgICBzbG90LnN0YXJ0X3RpbWUgPSBuZXcgRGF0ZShzbG90LnN0YXJ0X3RpbWUgKiAxMDAwKTtcbiAgICAgICAgICAgIHNsb3QuZW5kX3RpbWUgPSBuZXcgRGF0ZShzbG90LmVuZF90aW1lICogMTAwMCk7XG4gICAgICAgICAgICByZXR1cm4gc2xvdDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gYmxvY2tTbG90O1xuICAgICAgICB9KSB8fCBbXTtcbiAgICAgIGNvbnN0IGh5ZHJhdGVkUmVzcG9uc2UgPSBoeWRyYXRlU2xvdHNUb0V2ZW50cyhcbiAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgIHF1ZXJ5LmJvZHkuZXZlbnRzLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRlZHVwZWRSZXNwb25zZSA9XG4gICAgICAgIHJlbW92ZVNpbXVsdGFuZW91c0F2YWlsYWJpbGl0eU9wdGlvbnMoaHlkcmF0ZWRSZXNwb25zZSk7XG4gICAgICByZXR1cm4gZGVkdXBlZFJlc3BvbnNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IocXVlcnkuY29tcG9uZW50X2lkLCBlcnJvcikpO1xufTtcblxuLy8gRG9pbmcgdGhlIGJlc3Qgd2UgY2FuIHdpdGggd2hhdCB3ZSd2ZSBnb3Q6IC9jYWxlbmRhcnMvYXZhaWxhYmlsaXR5L2NvbnNlY3V0aXZlIGRvZXNuJ3QgcmV0dXJuIGFueSBpbmZvIG90aGVyIHRoYW4gZW1haWxzXG4vLyBhbmQgc3RhcnQvZW5kIHRpbWVzLiBUaGlzIG1lYW5zIHRoYXQgaWYgd2UgaGF2ZSB0byBldmVudHMgKEV2ZW50RGVmaW5pdGlvbnMpIHdpdGggdGhlIHNhbWUgZW1haWwgYWRkcmVzc2VzPyBXZSdyZSBzaG9vdGluZyBpbiB0aGUgZGFyayBhYm91dCB3aGljaCBpcyB3aGljaC5cbi8vIFRPRE86IGFsbG93IGZvciBhbiBpbmRpY2F0b3Igb24gdGhlIEFQSSBzaWRlXG5mdW5jdGlvbiBoeWRyYXRlU2xvdHNUb0V2ZW50cyhcbiAgYXZhaWxhYmlsaXRpZXM6IFByZURhdGVkVGltZVNsb3RbXVtdLFxuICBldmVudHM6IEV2ZW50RGVmaW5pdGlvbltdLFxuKTogQ29uc2VjdXRpdmVFdmVudFtdW10ge1xuICByZXR1cm4gYXZhaWxhYmlsaXRpZXMubWFwKChibG9jaykgPT4ge1xuICAgIHJldHVybiBibG9jay5tYXAoKHN1YmV2ZW50KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdWJldmVudCxcbiAgICAgICAgLi4uZXZlbnRzLmZpbmQoXG4gICAgICAgICAgKGV2ZW50ZGVmKSA9PlxuICAgICAgICAgICAgZXZlbnRkZWYucGFydGljaXBhbnRFbWFpbHMubGVuZ3RoID09PSBzdWJldmVudC5lbWFpbHMubGVuZ3RoICYmXG4gICAgICAgICAgICBldmVudGRlZi5wYXJ0aWNpcGFudEVtYWlscy5ldmVyeSgoZW1haWwpID0+XG4gICAgICAgICAgICAgIHN1YmV2ZW50LmVtYWlscy5pbmNsdWRlcyhlbWFpbCksXG4gICAgICAgICAgICApLFxuICAgICAgICApLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfSkgYXMgYW55W11bXTsgLy8gVE9ETzogSG93IHRvIGJlc3QgY29lcmNlIFByZURhdGVkVGltZVNsb3RbXVtdIHRvIENvbnNlY3V0aXZlRXZlbnRbXVtdPyBzcHJlYWQtY29tYmluZWQgcmV0dXJuIGhhbmRsZXMgaXQuXG59XG5cbi8vIFdlIGRvbid0IHdhbnQgdG8gb3ZlcmJ1cmRlbiBvdXIgdXNlcnMgd2l0aCB0b28gbXVjaCBzd2VldCBob3JyaWJsZSBmcmVlZG9tIG9mIGNob2ljZTtcbi8vIHRoZSAvY2FsZW5kYXJzL2F2YWlsYWJpbGl0eS9jb25zZWN1dGl2ZSBlbmRwb2ludCByZXR1cm5zIG9yZGVyIHBlcm11dGF0aW9ucyB3aXRoIHNhbWUgdGltZSBzbG90cztcbi8vIEN1bGwgdGhlbSBkb3duIHRvIGp1c3QgdGhlIGZpcnN0IHRoYXQgZXhpc3RzIHBlciB0aW1lc2xvdC5cbmZ1bmN0aW9uIHJlbW92ZVNpbXVsdGFuZW91c0F2YWlsYWJpbGl0eU9wdGlvbnMoXG4gIGF2YWlsYWJpbGl0aWVzOiBDb25zZWN1dGl2ZUV2ZW50W11bXSxcbikge1xuICBjb25zdCBibG9ja1NldCA9IG5ldyBTZXQoKTtcbiAgcmV0dXJuIGF2YWlsYWJpbGl0aWVzLmZpbHRlcigoYmxvY2spID0+IHtcbiAgICBjb25zdCBibG9ja1N0cmluZyA9IGAke2Jsb2NrWzBdLnN0YXJ0X3RpbWV9XyR7XG4gICAgICBibG9ja1tibG9jay5sZW5ndGggLSAxXS5lbmRfdGltZVxuICAgIH1gO1xuICAgIGlmIChibG9ja1NldC5oYXMoYmxvY2tTdHJpbmcpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJsb2NrU2V0LmFkZChibG9ja1N0cmluZyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgV3JpdGFibGUsIHdyaXRhYmxlIH0gZnJvbSBcInN2ZWx0ZS9zdG9yZVwiO1xuaW1wb3J0IHsgZmV0Y2hBdmFpbGFiaWxpdHkgfSBmcm9tIFwiLi4vY29ubmVjdGlvbnMvYXZhaWxhYmlsaXR5XCI7XG5pbXBvcnQgdHlwZSB7XG4gIEF2YWlsYWJpbGl0eVF1ZXJ5LFxuICBBdmFpbGFiaWxpdHlSZXNwb25zZSxcbn0gZnJvbSBcIkBjb21tb25zL3R5cGVzL0F2YWlsYWJpbGl0eVwiO1xuXG50eXBlIEF2YWlsYWJpbGl0eVN0b3JlID0gUmVjb3JkPHN0cmluZywgUHJvbWlzZTxBdmFpbGFiaWxpdHlSZXNwb25zZT4+O1xuXG5mdW5jdGlvbiBpbml0aWFsaXplKCk6IFdyaXRhYmxlPEF2YWlsYWJpbGl0eVN0b3JlPiB7XG4gIGNvbnN0IGdldCA9IChcbiAgICB0YXJnZXQ6IEF2YWlsYWJpbGl0eVN0b3JlLFxuICAgIGtleTogc3RyaW5nLFxuICApOiBQcm9taXNlPEF2YWlsYWJpbGl0eVJlc3BvbnNlPiB8IHZvaWQgPT4ge1xuICAgIGNvbnN0IGFjY2Vzc29yOiBBdmFpbGFiaWxpdHlRdWVyeSA9IEpTT04ucGFyc2Uoa2V5KTtcbiAgICAvLyBBdm9pZCBzYXZpbmcgZm9yY2VSZWxvYWQgcHJvcGVydHkgYXMgcGFydCBvZiBzdG9yZSBrZXlcbiAgICBjb25zdCBhY2Nlc3NvckNvcHkgPSB7IC4uLmFjY2Vzc29yIH07XG4gICAgZGVsZXRlIGFjY2Vzc29yQ29weS5mb3JjZVJlbG9hZDtcbiAgICBrZXkgPSBKU09OLnN0cmluZ2lmeShhY2Nlc3NvckNvcHkpO1xuXG4gICAgaWYgKFxuICAgICAgIWFjY2Vzc29yLmNvbXBvbmVudF9pZCB8fFxuICAgICAgIWFjY2Vzc29yPy5ib2R5Py5zdGFydF90aW1lIHx8XG4gICAgICAhYWNjZXNzb3I/LmJvZHk/LmVuZF90aW1lXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXRba2V5XSB8fCBhY2Nlc3Nvci5mb3JjZVJlbG9hZCkge1xuICAgICAgY29uc3QgZmV0Y2hQcm9taXNlID0gZmV0Y2hBdmFpbGFiaWxpdHkoYWNjZXNzb3IpO1xuICAgICAgc3RvcmUudXBkYXRlKChzdG9yZSkgPT4ge1xuICAgICAgICBzdG9yZVtrZXldID0gZmV0Y2hQcm9taXNlO1xuICAgICAgICByZXR1cm4gc3RvcmU7XG4gICAgICB9KTtcbiAgICAgIHRhcmdldFtrZXldID0gZmV0Y2hQcm9taXNlO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gIH07XG4gIGNvbnN0IHN0b3JlID0gd3JpdGFibGUobmV3IFByb3h5PEF2YWlsYWJpbGl0eVN0b3JlPih7fSwgeyBnZXQgfSkpO1xuICByZXR1cm4gc3RvcmU7XG59XG5cbmV4cG9ydCBjb25zdCBBdmFpbGFiaWxpdHlTdG9yZSA9IGluaXRpYWxpemUoKTtcbiIsImltcG9ydCB7IFdyaXRhYmxlLCB3cml0YWJsZSB9IGZyb20gXCJzdmVsdGUvc3RvcmVcIjtcbmltcG9ydCB7IGZldGNoQ29uc2VjdXRpdmVBdmFpbGFiaWxpdHkgfSBmcm9tIFwiLi4vY29ubmVjdGlvbnMvYXZhaWxhYmlsaXR5XCI7XG5pbXBvcnQgdHlwZSB7IENvbnNlY3V0aXZlQXZhaWxhYmlsaXR5UXVlcnkgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvQXZhaWxhYmlsaXR5XCI7XG5pbXBvcnQgdHlwZSB7IENvbnNlY3V0aXZlRXZlbnQgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvQm9va2luZ1wiO1xuXG50eXBlIENvbnNlY3V0aXZlQXZhaWxhYmlsaXR5U3RvcmUgPSBSZWNvcmQ8XG4gIHN0cmluZyxcbiAgUHJvbWlzZTxDb25zZWN1dGl2ZUV2ZW50W11bXT5cbj47XG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoKTogV3JpdGFibGU8Q29uc2VjdXRpdmVBdmFpbGFiaWxpdHlTdG9yZT4ge1xuICBjb25zdCBnZXQgPSAoXG4gICAgdGFyZ2V0OiBDb25zZWN1dGl2ZUF2YWlsYWJpbGl0eVN0b3JlLFxuICAgIGtleTogc3RyaW5nLFxuICApOiBQcm9taXNlPENvbnNlY3V0aXZlRXZlbnRbXVtdPiB8IHZvaWQgPT4ge1xuICAgIGNvbnN0IGFjY2Vzc29yOiBDb25zZWN1dGl2ZUF2YWlsYWJpbGl0eVF1ZXJ5ID0gSlNPTi5wYXJzZShrZXkpO1xuXG4gICAgaWYgKFxuICAgICAgIWFjY2Vzc29yLmNvbXBvbmVudF9pZCB8fFxuICAgICAgIWFjY2Vzc29yPy5ib2R5Py5zdGFydF90aW1lIHx8XG4gICAgICAhYWNjZXNzb3I/LmJvZHk/LmVuZF90aW1lXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXRba2V5XSkge1xuICAgICAgY29uc3QgZmV0Y2hQcm9taXNlID0gZmV0Y2hDb25zZWN1dGl2ZUF2YWlsYWJpbGl0eShhY2Nlc3Nvcik7XG4gICAgICBzdG9yZS51cGRhdGUoKHN0b3JlKSA9PiB7XG4gICAgICAgIHN0b3JlW2tleV0gPSBmZXRjaFByb21pc2U7XG4gICAgICAgIHJldHVybiBzdG9yZTtcbiAgICAgIH0pO1xuICAgICAgdGFyZ2V0W2tleV0gPSBmZXRjaFByb21pc2U7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgfTtcbiAgY29uc3Qgc3RvcmUgPSB3cml0YWJsZShuZXcgUHJveHk8Q29uc2VjdXRpdmVBdmFpbGFiaWxpdHlTdG9yZT4oe30sIHsgZ2V0IH0pKTtcbiAgcmV0dXJuIHN0b3JlO1xufVxuXG5leHBvcnQgY29uc3QgQ29uc2VjdXRpdmVBdmFpbGFiaWxpdHlTdG9yZSA9IGluaXRpYWxpemUoKTtcbiIsImltcG9ydCB7IHdyaXRhYmxlIH0gZnJvbSBcInN2ZWx0ZS9zdG9yZVwiO1xuaW1wb3J0IHtcbiAgZmV0Y2hDb250YWN0cyxcbiAgZmV0Y2hDb250YWN0c0J5UXVlcnksXG59IGZyb20gXCJAY29tbW9ucy9jb25uZWN0aW9ucy9jb250YWN0c1wiO1xuaW1wb3J0IHR5cGUge1xuICBDb250YWN0LFxuICBDb250YWN0RW1haWwsXG4gIENvbnRhY3RTZWFyY2hRdWVyeSxcbiAgQ29udGFjdHNRdWVyeSxcbiAgQ29udGFjdHNRdWVyeVBhcmFtcyxcbn0gZnJvbSBcIkBjb21tb25zL3R5cGVzL0NvbnRhY3RzXCI7XG5cbmxldCBjb250YWN0c01hcDogUmVjb3JkPHN0cmluZywgQ29udGFjdFtdPiA9IHt9O1xuXG5mdW5jdGlvbiBmaWx0ZXJDb250YWN0cyhjb250YWN0czogQ29udGFjdFtdKSB7XG4gIHJldHVybiBjb250YWN0c1xuICAgIC5maWx0ZXIoXG4gICAgICAoY29udGFjdCkgPT5cbiAgICAgICAgISFjb250YWN0LmdpdmVuX25hbWUgfHxcbiAgICAgICAgISFjb250YWN0LnN1cm5hbWUgfHxcbiAgICAgICAgKEFycmF5LmlzQXJyYXkoY29udGFjdC5lbWFpbHMpICYmIGNvbnRhY3QuZW1haWxzLmxlbmd0aCA+IDApLFxuICAgIClcbiAgICAubWFwKChjb250YWN0KSA9PiB7XG4gICAgICAvLyBFbnN1cmUgZWFjaCBjb250YWN0IGhhcyBhdCBsZWFzdCBvbmUgXCJlbWFpbFwiIHRvIGxvYWRcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShjb250YWN0LmVtYWlscykgfHwgY29udGFjdC5lbWFpbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnRhY3QuZW1haWxzID0gW3sgZW1haWw6IFwiXCIgfSBhcyBDb250YWN0RW1haWxdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGFjdDtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUNvbnRhY3RzKCkge1xuICBjb25zdCB7IHN1YnNjcmliZSwgc2V0LCB1cGRhdGUgfSA9IHdyaXRhYmxlPFJlY29yZDxzdHJpbmcsIENvbnRhY3RbXT4+KHt9KTtcbiAgcmV0dXJuIHtcbiAgICBzdWJzY3JpYmUsXG4gICAgYWRkQ29udGFjdHM6IGFzeW5jIChxdWVyeTogQ29udGFjdHNRdWVyeSwgcGFyYW1zOiBDb250YWN0c1F1ZXJ5UGFyYW1zKSA9PiB7XG4gICAgICBjb25zdCBxdWVyeUtleSA9IEpTT04uc3RyaW5naWZ5KHF1ZXJ5KTtcbiAgICAgIGlmIChcbiAgICAgICAgIWNvbnRhY3RzTWFwW3F1ZXJ5S2V5XSAmJlxuICAgICAgICAocXVlcnkuY29tcG9uZW50X2lkIHx8IHF1ZXJ5LmFjY2Vzc190b2tlbilcbiAgICAgICkge1xuICAgICAgICBpZiAocGFyYW1zLm9mZnNldCA9PT0gMCkge1xuICAgICAgICAgIC8vIEVuc3VyZSB0aGUgc3RvcmUgaXMgZW1wdHkgaWYgb3VyIG9mZnNldCBpcyAwXG4gICAgICAgICAgQ29udGFjdFN0b3JlLnJlc2V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb250YWN0cyA9XG4gICAgICAgICAgKGF3YWl0IGZldGNoQ29udGFjdHMocXVlcnksIHBhcmFtcylcbiAgICAgICAgICAgIC50aGVuKChjb250YWN0cykgPT4gZmlsdGVyQ29udGFjdHMoY29udGFjdHMpKVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IFtdKSkgPz8gW107XG5cbiAgICAgICAgY29udGFjdHNNYXBbcXVlcnlLZXldID0gY29udGFjdHNNYXBbcXVlcnlLZXldXG4gICAgICAgICAgPyBbLi4uY29udGFjdHNNYXBbcXVlcnlLZXldLCAuLi5jb250YWN0c11cbiAgICAgICAgICA6IGNvbnRhY3RzO1xuXG4gICAgICAgIHVwZGF0ZSgoY29udGFjdHMpID0+IHtcbiAgICAgICAgICBjb250YWN0c1txdWVyeUtleV0gPSBjb250YWN0c01hcFtxdWVyeUtleV07XG4gICAgICAgICAgcmV0dXJuIHsgLi4uY29udGFjdHMgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb250YWN0c01hcFtxdWVyeUtleV07XG4gICAgICB9XG4gICAgfSxcbiAgICBhZGRDb250YWN0OiBhc3luYyAocXVlcnk6IENvbnRhY3RTZWFyY2hRdWVyeSkgPT4ge1xuICAgICAgY29uc3QgcXVlcnlLZXkgPSBKU09OLnN0cmluZ2lmeShxdWVyeSk7XG4gICAgICBpZiAoXG4gICAgICAgICFjb250YWN0c01hcFtxdWVyeUtleV0gJiZcbiAgICAgICAgKHF1ZXJ5LmNvbXBvbmVudF9pZCB8fCBxdWVyeS5hY2Nlc3NfdG9rZW4pXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgY29udGFjdHMgPVxuICAgICAgICAgIChhd2FpdCBmZXRjaENvbnRhY3RzQnlRdWVyeShxdWVyeSlcbiAgICAgICAgICAgIC50aGVuKChjb250YWN0cykgPT4gZmlsdGVyQ29udGFjdHMoY29udGFjdHMpKVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IFtdKSkgPz8gW107XG5cbiAgICAgICAgY29udGFjdHNNYXBbcXVlcnlLZXldID0gY29udGFjdHNNYXBbcXVlcnlLZXldXG4gICAgICAgICAgPyBbLi4uY29udGFjdHNNYXBbcXVlcnlLZXldLCAuLi5jb250YWN0c11cbiAgICAgICAgICA6IGNvbnRhY3RzO1xuICAgICAgICB1cGRhdGUoKGNvbnRhY3RzKSA9PiB7XG4gICAgICAgICAgY29udGFjdHNbcXVlcnlLZXldID0gY29udGFjdHNNYXBbcXVlcnlLZXldO1xuICAgICAgICAgIHJldHVybiB7IC4uLmNvbnRhY3RzIH07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRhY3RzTWFwW3F1ZXJ5S2V5XTtcbiAgICB9LFxuICAgIHJlc2V0OiAoKSA9PiB7XG4gICAgICBjb250YWN0c01hcCA9IHt9O1xuICAgICAgc2V0KHt9KTtcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgQ29udGFjdFN0b3JlID0gaW5pdGlhbGl6ZUNvbnRhY3RzKCk7XG4iLCJpbXBvcnQgeyBkZXJpdmVkLCBSZWFkYWJsZSwgd3JpdGFibGUgfSBmcm9tIFwic3ZlbHRlL3N0b3JlXCI7XG5pbXBvcnQge1xuICBmZXRjaFRocmVhZHMsXG4gIGZldGNoU2VhcmNoUmVzdWx0VGhyZWFkcyxcbiAgdXBkYXRlVGhyZWFkLFxuICBmZXRjaFRocmVhZENvdW50LFxufSBmcm9tIFwiLi4vY29ubmVjdGlvbnMvdGhyZWFkc1wiO1xuaW1wb3J0IHR5cGUge1xuICBUaHJlYWQsXG4gIE1haWxib3hRdWVyeSxcbiAgQ29udmVyc2F0aW9uUXVlcnksXG4gIE1lc3NhZ2UsXG4gIENvbnZlcnNhdGlvbixcbn0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG5pbXBvcnQgeyBzaWxlbmNlIH0gZnJvbSBcIkBjb21tb25zXCI7XG5cbmludGVyZmFjZSBQYWdpbmF0ZWRUaHJlYWRzIHtcbiAgaXNMb2FkZWQ6IGJvb2xlYW47XG4gIHRocmVhZHM6IFRocmVhZFtdO1xufVxuXG5hc3luYyBmdW5jdGlvbiBpbml0aWFsaXplUGFnaW5hdGVkVGhyZWFkcyh0b3RhbFBhZ2VzOiBudW1iZXIpIHtcbiAgY29uc3QgcGFnaW5hdGVkVGhyZWFkcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWxQYWdlczsgaSsrKSB7XG4gICAgcGFnaW5hdGVkVGhyZWFkcy5wdXNoKHtcbiAgICAgIGlzTG9hZGVkOiBmYWxzZSxcbiAgICAgIHRocmVhZHM6IDxUaHJlYWRbXT5bXSxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcGFnaW5hdGVkVGhyZWFkcztcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVRocmVhZHMoKSB7XG4gIGNvbnN0IHsgc3Vic2NyaWJlLCBzZXQsIHVwZGF0ZSB9ID0gd3JpdGFibGU8XG4gICAgUmVjb3JkPHN0cmluZywgUGFnaW5hdGVkVGhyZWFkc1tdPlxuICA+KHt9KTtcbiAgbGV0IHRocmVhZHNNYXA6IFJlY29yZDxzdHJpbmcsIFBhZ2luYXRlZFRocmVhZHNbXT4gPSB7fTtcbiAgbGV0IHRvdGFsSXRlbXM6IG51bWJlcjtcblxuICByZXR1cm4ge1xuICAgIHN1YnNjcmliZSxcbiAgICBzZXQsXG4gICAgZ2V0VGhyZWFkczogYXN5bmMgKFxuICAgICAgcXVlcnk6IE1haWxib3hRdWVyeSxcbiAgICAgIGN1cnJlbnRQYWdlOiBudW1iZXIsXG4gICAgICBwYWdlU2l6ZTogbnVtYmVyLFxuICAgICAgZm9yY2VSZWZyZXNoID0gZmFsc2UsXG4gICAgKSA9PiB7XG4gICAgICBjb25zdCBxdWVyeUtleSA9IEpTT04uc3RyaW5naWZ5KHF1ZXJ5KTtcblxuICAgICAgaWYgKCFxdWVyeS5jb21wb25lbnRfaWQgJiYgIXF1ZXJ5LmFjY2Vzc190b2tlbikge1xuICAgICAgICAvLyBUaGlzIHNob3VsZCBhbGVydCB0aGUgdXNlclxuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG5cbiAgICAgIGlmICh0b3RhbEl0ZW1zID09PSB1bmRlZmluZWQgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIC8vIFRPRE86IHRoaXMgY2FuIGNvdW50IHBhc3NlZC1pbiBJRHNcbiAgICAgICAgY29uc3QgdGhyZWFkQ291bnQgPSBxdWVyeS50aHJlYWRfaWRzXG4gICAgICAgICAgPyBxdWVyeS50aHJlYWRfaWRzLmxlbmd0aFxuICAgICAgICAgIDogYXdhaXQgZmV0Y2hUaHJlYWRDb3VudChxdWVyeSkuY2F0Y2goc2lsZW5jZSk7XG5cbiAgICAgICAgaWYgKHRocmVhZENvdW50KSB7XG4gICAgICAgICAgdG90YWxJdGVtcyA9IHRocmVhZENvdW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSh0aHJlYWRzTWFwW3F1ZXJ5S2V5XSkgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIGNvbnN0IHRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodG90YWxJdGVtcyAvIHBhZ2VTaXplKTtcbiAgICAgICAgdGhyZWFkc01hcFtxdWVyeUtleV0gPSBhd2FpdCBpbml0aWFsaXplUGFnaW5hdGVkVGhyZWFkcyh0b3RhbFBhZ2VzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgLy8gU2hvdWxkbid0IHRoaXMgYmUgYW4gaW50ZXJuYWwgZXJyb3I/XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH0gZWxzZSBpZiAoIXRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS5pc0xvYWRlZCkge1xuICAgICAgICBjb25zdCB0aHJlYWRzID0gYXdhaXQgZmV0Y2hUaHJlYWRzKFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHBhZ2VTaXplLFxuICAgICAgICAgIGN1cnJlbnRQYWdlICogcGFnZVNpemUsXG4gICAgICAgICkuY2F0Y2goc2lsZW5jZSk7XG5cbiAgICAgICAgaWYgKHRocmVhZHMpIHtcbiAgICAgICAgICB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0udGhyZWFkcyA9IHRocmVhZHM7XG4gICAgICAgICAgdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB1cGRhdGUoKHRocmVhZHMpID0+IHtcbiAgICAgICAgdGhyZWFkc1txdWVyeUtleV0gPSB0aHJlYWRzTWFwW3F1ZXJ5S2V5XTtcbiAgICAgICAgcmV0dXJuIHsgLi4udGhyZWFkcyB9O1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0udGhyZWFkcztcbiAgICB9LFxuICAgIGdldE51bWJlck9mSXRlbXM6IGFzeW5jIChxdWVyeTogTWFpbGJveFF1ZXJ5KSA9PiB7XG4gICAgICBpZiAoIXF1ZXJ5LmNvbXBvbmVudF9pZCAmJiAhcXVlcnkuYWNjZXNzX3Rva2VuKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHRvdGFsSXRlbXMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgY29uc3QgdGhyZWFkQ291bnQgPSBhd2FpdCBmZXRjaFRocmVhZENvdW50KHF1ZXJ5KS5jYXRjaChzaWxlbmNlKTtcblxuICAgICAgICBpZiAodGhyZWFkQ291bnQpIHtcbiAgICAgICAgICB0b3RhbEl0ZW1zID0gdGhyZWFkQ291bnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0b3RhbEl0ZW1zO1xuICAgIH0sXG4gICAgLy8gVE9ETyAtIFVzZSByZWFsIHBhZ2luYXRpb24gd2hlbiBzZWFyY2ggZW5kcG9pbnQgc3VwcG9ydHMgaXRcbiAgICBnZXRUaHJlYWRzV2l0aFNlYXJjaEtleXdvcmQ6IGFzeW5jIChcbiAgICAgIHF1ZXJ5OiBNYWlsYm94UXVlcnksXG4gICAgICBmb3JjZVJlZnJlc2ggPSBmYWxzZSxcbiAgICApID0+IHtcbiAgICAgIGlmICghcXVlcnkuY29tcG9uZW50X2lkICYmICFxdWVyeS5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgY29uc3QgcXVlcnlLZXkgPSBKU09OLnN0cmluZ2lmeShxdWVyeSk7XG5cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSh0aHJlYWRzTWFwW3F1ZXJ5S2V5XSkgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIHRocmVhZHNNYXBbcXVlcnlLZXldID0gYXdhaXQgaW5pdGlhbGl6ZVBhZ2luYXRlZFRocmVhZHMoMSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhyZWFkc01hcFtxdWVyeUtleV1bMF0uaXNMb2FkZWQgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdFRocmVhZHMgPSBhd2FpdCBmZXRjaFNlYXJjaFJlc3VsdFRocmVhZHMocXVlcnkpLmNhdGNoKFxuICAgICAgICAgIHNpbGVuY2UsXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHNlYXJjaFJlc3VsdFRocmVhZHMpIHtcbiAgICAgICAgICB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVswXS50aHJlYWRzID0gc2VhcmNoUmVzdWx0VGhyZWFkcztcbiAgICAgICAgICB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVswXS5pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHVwZGF0ZSgodGhyZWFkcykgPT4ge1xuICAgICAgICB0aHJlYWRzW3F1ZXJ5S2V5XSA9IHRocmVhZHNNYXBbcXVlcnlLZXldO1xuICAgICAgICByZXR1cm4geyAuLi50aHJlYWRzIH07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVswXS50aHJlYWRzO1xuICAgIH0sXG4gICAgdXBkYXRlVGhyZWFkOiBhc3luYyAoXG4gICAgICB0aHJlYWRRdWVyeTogQ29udmVyc2F0aW9uUXVlcnksXG4gICAgICBxdWVyeUtleTogc3RyaW5nLFxuICAgICAgdXBkYXRlZFRocmVhZDogQ29udmVyc2F0aW9uLFxuICAgICAgY3VycmVudFBhZ2U6IG51bWJlcixcbiAgICAgIHBhZ2VTaXplOiBudW1iZXIsXG4gICAgKSA9PiB7XG4gICAgICBjb25zdCB0aHJlYWQgPSBhd2FpdCB1cGRhdGVUaHJlYWQodGhyZWFkUXVlcnksIHVwZGF0ZWRUaHJlYWQpLmNhdGNoKFxuICAgICAgICBzaWxlbmNlLFxuICAgICAgKTtcblxuICAgICAgaWYgKCF0aHJlYWRzTWFwW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0uaXNMb2FkZWQpIHtcbiAgICAgICAgLy8gcG9zc2libGUgaGFjazogcGFzcyBpbiBhcnJheSB0byBxdWVyeT9cbiAgICAgICAgY29uc3QgdGhyZWFkcyA9IGF3YWl0IGZldGNoVGhyZWFkcyhcbiAgICAgICAgICBKU09OLnBhcnNlKHF1ZXJ5S2V5KSxcbiAgICAgICAgICBwYWdlU2l6ZSxcbiAgICAgICAgICBjdXJyZW50UGFnZSAqIHBhZ2VTaXplLFxuICAgICAgICApLmNhdGNoKHNpbGVuY2UpO1xuXG4gICAgICAgIGlmICh0aHJlYWRzKSB7XG4gICAgICAgICAgdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdLnRocmVhZHMgPSB0aHJlYWRzO1xuICAgICAgICAgIHRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS5pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdLnRocmVhZHMgPSB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVtcbiAgICAgICAgY3VycmVudFBhZ2VcbiAgICAgIF0udGhyZWFkcy5tYXAoKGluaXRpYWxUaHJlYWQpID0+IHtcbiAgICAgICAgaWYgKHRocmVhZCAmJiBpbml0aWFsVGhyZWFkLmlkID09PSB0aHJlYWQuaWQpIHtcbiAgICAgICAgICBpbml0aWFsVGhyZWFkID0gT2JqZWN0LmFzc2lnbihpbml0aWFsVGhyZWFkLCB0aHJlYWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbml0aWFsVGhyZWFkO1xuICAgICAgfSk7XG4gICAgICB1cGRhdGUoKHRocmVhZHMpID0+IHtcbiAgICAgICAgdGhyZWFkc1txdWVyeUtleV0gPSB0aHJlYWRzTWFwW3F1ZXJ5S2V5XTtcbiAgICAgICAgcmV0dXJuIHsgLi4udGhyZWFkcyB9O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdLnRocmVhZHM7XG4gICAgfSxcbiAgICB1cGRhdGVUaHJlYWRTZWxlY3Rpb246IChcbiAgICAgIHF1ZXJ5S2V5OiBzdHJpbmcsXG4gICAgICBjdXJyZW50UGFnZTogbnVtYmVyLFxuICAgICAgdGhyZWFkSWQ/OiBzdHJpbmcsXG4gICAgKSA9PiB7XG4gICAgICBjb25zdCB0aHJlYWRzID0gdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdLnRocmVhZHM7XG5cbiAgICAgIGlmICghdGhyZWFkSWQpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uU3RhdGUgPSB0aHJlYWRzLnNvbWUoKHRocmVhZCkgPT4gdGhyZWFkLnNlbGVjdGVkKTtcbiAgICAgICAgZm9yIChjb25zdCB0aHJlYWQgb2YgdGhyZWFkcykge1xuICAgICAgICAgIHRocmVhZC5zZWxlY3RlZCA9ICFzZWxlY3Rpb25TdGF0ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGhyZWFkID0gdGhyZWFkcy5maW5kKCh0aHJlYWQpID0+IHRocmVhZC5pZCA9PT0gdGhyZWFkSWQpO1xuICAgICAgICBpZiAodGhyZWFkKSB7XG4gICAgICAgICAgdGhyZWFkLnNlbGVjdGVkID0gIXRocmVhZC5zZWxlY3RlZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdXBkYXRlKCh0aHJlYWRzKSA9PiB7XG4gICAgICAgIHRocmVhZHNbcXVlcnlLZXldID0gdGhyZWFkc01hcFtxdWVyeUtleV07XG4gICAgICAgIHJldHVybiB7IC4uLnRocmVhZHMgfTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS50aHJlYWRzO1xuICAgIH0sXG5cbiAgICByZXNldDogKCkgPT4ge1xuICAgICAgdGhyZWFkc01hcCA9IHt9O1xuICAgICAgc2V0KHt9KTtcbiAgICB9LFxuXG4gICAgaHlkcmF0ZU1lc3NhZ2VJblRocmVhZDogKFxuICAgICAgaW5jb21pbmdNZXNzYWdlOiBNZXNzYWdlLFxuICAgICAgcXVlcnk6IE1haWxib3hRdWVyeSxcbiAgICAgIGN1cnJlbnRQYWdlOiBudW1iZXIsXG4gICAgKSA9PiB7XG4gICAgICBjb25zdCBxdWVyeUtleSA9IEpTT04uc3RyaW5naWZ5KHF1ZXJ5KTtcblxuICAgICAgY29uc3QgZm91bmRUaHJlYWQgPSB0aHJlYWRzTWFwW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0/LnRocmVhZHM/LmZpbmQoXG4gICAgICAgICh0aHJlYWQpID0+IHRocmVhZC5pZCA9PT0gaW5jb21pbmdNZXNzYWdlLnRocmVhZF9pZCxcbiAgICAgICk7XG4gICAgICBpZiAoZm91bmRUaHJlYWQpIHtcbiAgICAgICAgY29uc3QgZm91bmRNZXNzYWdlID0gZm91bmRUaHJlYWQubWVzc2FnZXM/LmZpbmQoXG4gICAgICAgICAgKG1lc3NhZ2UpID0+IG1lc3NhZ2UuaWQgPT09IGluY29taW5nTWVzc2FnZS5pZCxcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGZvdW5kTWVzc2FnZSkge1xuICAgICAgICAgIGZvdW5kTWVzc2FnZS5ib2R5ID0gaW5jb21pbmdNZXNzYWdlLmJvZHk7XG4gICAgICAgICAgdXBkYXRlKCh0aHJlYWRzKSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5jb21pbmdNZXNzYWdlLnRocmVhZF9pZCkge1xuICAgICAgICAgICAgICBsZXQgdGhyZWFkVG9VcGRhdGUgPSB0aHJlYWRzW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0udGhyZWFkcy5maW5kKFxuICAgICAgICAgICAgICAgICh0aHJlYWQpID0+IHRocmVhZC5pZCA9PT0gZm91bmRUaHJlYWQuaWQsXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgaWYgKHRocmVhZFRvVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhyZWFkVG9VcGRhdGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZvdW5kVGhyZWFkKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IC4uLnRocmVhZHMgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBUaGlzIGhhcHBlbnMgd2hlbiBzb21lb25lIHNlbmRzIGEgbWVzc2FnZSB1c2luZyBjb21wb3NlciBhbmQgd2Ugd2FudFxuICAgICAgICAgIC8vIHRvIHVwZGF0ZSB0aGUgZXhpc3RpbmcgdGhyZWFkIHdpdGggdGhlIHNlbnQgbWVzc2FnZVxuICAgICAgICAgIHVwZGF0ZSgodGhyZWFkcykgPT4ge1xuICAgICAgICAgICAgaWYgKGluY29taW5nTWVzc2FnZS50aHJlYWRfaWQpIHtcbiAgICAgICAgICAgICAgbGV0IHRocmVhZFRvVXBkYXRlID0gdGhyZWFkc1txdWVyeUtleV1bY3VycmVudFBhZ2VdLnRocmVhZHMuZmluZChcbiAgICAgICAgICAgICAgICAodGhyZWFkKSA9PiB0aHJlYWQuaWQgPT09IGZvdW5kVGhyZWFkLmlkLFxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIGlmICh0aHJlYWRUb1VwZGF0ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gZm91bmRUaHJlYWQubWVzc2FnZXM7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXMucHVzaChpbmNvbWluZ01lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGZvdW5kVGhyZWFkLm1lc3NhZ2VzID0gbWVzc2FnZXM7XG4gICAgICAgICAgICAgICAgZm91bmRUaHJlYWQuc25pcHBldCA9IGluY29taW5nTWVzc2FnZS5zbmlwcGV0O1xuICAgICAgICAgICAgICAgIC8vUmVtb3ZlIGRyYWZ0IHdpdGggdGhlIHNhbWUgaWQgYXMgc2VudCBtZXNzYWdlXG4gICAgICAgICAgICAgICAgZm91bmRUaHJlYWQuZHJhZnRzID0gZm91bmRUaHJlYWQuZHJhZnRzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgIChkcmFmdCkgPT4gZHJhZnQuaWQgIT09IGluY29taW5nTWVzc2FnZS5pZCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRocmVhZFRvVXBkYXRlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmb3VuZFRocmVhZCkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyAuLi50aHJlYWRzIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRocmVhZHNNYXBbcXVlcnlLZXldW2N1cnJlbnRQYWdlXS50aHJlYWRzO1xuICAgIH0sXG5cbiAgICAvL1VwZGF0ZSBkcmFmdHMgaW4gdGhlIHRocmVhZHMgc3RvcmVcbiAgICBoeWRyYXRlRHJhZnRJblRocmVhZDogKFxuICAgICAgaW5jb21pbmdEcmFmdDogTWVzc2FnZSxcbiAgICAgIHF1ZXJ5OiBNYWlsYm94UXVlcnksXG4gICAgICBjdXJyZW50UGFnZTogbnVtYmVyLFxuICAgICkgPT4ge1xuICAgICAgY29uc3QgcXVlcnlLZXkgPSBKU09OLnN0cmluZ2lmeShxdWVyeSk7XG5cbiAgICAgIGNvbnN0IGZvdW5kVGhyZWFkID0gdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdPy50aHJlYWRzPy5maW5kKFxuICAgICAgICAodGhyZWFkKSA9PiB0aHJlYWQuaWQgPT09IGluY29taW5nRHJhZnQudGhyZWFkX2lkLFxuICAgICAgKTtcbiAgICAgIGlmIChmb3VuZFRocmVhZCkge1xuICAgICAgICAvL1VwZGF0ZSBleGlzdGluZyBkcmFmdCBtZXNzYWdlIGluIHN0b3JlXG4gICAgICAgIGNvbnN0IGZvdW5kRHJhZnQgPSBmb3VuZFRocmVhZC5kcmFmdHM/LmZpbmQoXG4gICAgICAgICAgKGRyYWZ0KSA9PiBkcmFmdC5pZCA9PT0gaW5jb21pbmdEcmFmdC5pZCxcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoaW5jb21pbmdEcmFmdC50aHJlYWRfaWQpIHtcbiAgICAgICAgICBpZiAoZm91bmREcmFmdCkge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihmb3VuZERyYWZ0LCBpbmNvbWluZ0RyYWZ0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZHJhZnRzID0gZm91bmRUaHJlYWQuZHJhZnRzO1xuICAgICAgICAgICAgZHJhZnRzLnB1c2goaW5jb21pbmdEcmFmdCk7XG4gICAgICAgICAgICBmb3VuZFRocmVhZC5kcmFmdHMgPSBkcmFmdHM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdXBkYXRlKCh0aHJlYWRzKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGhyZWFkVG9VcGRhdGUgPSB0aHJlYWRzW3F1ZXJ5S2V5XVtjdXJyZW50UGFnZV0udGhyZWFkcy5maW5kKFxuICAgICAgICAgICAgICAodGhyZWFkKSA9PiB0aHJlYWQuaWQgPT09IGZvdW5kVGhyZWFkLmlkLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmICh0aHJlYWRUb1VwZGF0ZSkge1xuICAgICAgICAgICAgICB0aHJlYWRUb1VwZGF0ZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZm91bmRUaHJlYWQpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHsgLi4udGhyZWFkcyB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhyZWFkc01hcFtxdWVyeUtleV1bY3VycmVudFBhZ2VdLnRocmVhZHM7XG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IE1haWxib3hTdG9yZSA9IGluaXRpYWxpemVUaHJlYWRzKCk7XG5cbmV4cG9ydCBjb25zdCBFbWFpbFN0b3JlOiBSZWFkYWJsZTxSZWNvcmQ8c3RyaW5nLCBUaHJlYWRbXT4+ID0gZGVyaXZlZChcbiAgTWFpbGJveFN0b3JlLFxuICAoJE1haWxib3hTdG9yZSkgPT4ge1xuICAgIGNvbnN0IGVtYWlsU3RvcmU6IFJlY29yZDxzdHJpbmcsIFRocmVhZFtdPiA9IHt9O1xuICAgIE9iamVjdC5lbnRyaWVzKCRNYWlsYm94U3RvcmUpLmZvckVhY2goXG4gICAgICAoW2tleSwgcGFnaW5hdGVkVGhyZWFkc10pID0+XG4gICAgICAgIChlbWFpbFN0b3JlW2tleV0gPSBwYWdpbmF0ZWRUaHJlYWRzXG4gICAgICAgICAgLm1hcCgocGFnaW5hdGVkVGhyZWFkKSA9PiBwYWdpbmF0ZWRUaHJlYWQudGhyZWFkcylcbiAgICAgICAgICAuZmxhdCgpKSxcbiAgICApO1xuICAgIHJldHVybiBlbWFpbFN0b3JlO1xuICB9LFxuKTtcbiIsImltcG9ydCB7IGZldGNoTWFuaWZlc3QgfSBmcm9tIFwiLi4vY29ubmVjdGlvbnMvbWFuaWZlc3RcIjtcbmltcG9ydCB7IFdyaXRhYmxlLCB3cml0YWJsZSB9IGZyb20gXCJzdmVsdGUvc3RvcmVcIjtcbmltcG9ydCB0eXBlIHsgTWFuaWZlc3QgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvTnlsYXNcIjtcblxudHlwZSBNYW5pZmVzdEFjY2Vzc29yID0ge1xuICBjb21wb25lbnRfaWQ6IHN0cmluZztcbiAgYWNjZXNzX3Rva2VuPzogc3RyaW5nO1xuICBleHRlcm5hbF9tYW5pZmVzdF9pZHM/OiBbXTtcbn07XG50eXBlIE1hbmlmZXN0U3RvcmUgPSBSZWNvcmQ8c3RyaW5nLCBQcm9taXNlPE1hbmlmZXN0Pj47XG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoKTogV3JpdGFibGU8TWFuaWZlc3RTdG9yZT4ge1xuICBjb25zdCBnZXQgPSAoXG4gICAgdGFyZ2V0OiBNYW5pZmVzdFN0b3JlLFxuICAgIGtleTogc3RyaW5nLFxuICApOiBQcm9taXNlPE1hbmlmZXN0PiB8IHZvaWQgPT4ge1xuICAgIGNvbnN0IGFjY2Vzc29yOiBNYW5pZmVzdEFjY2Vzc29yID0gSlNPTi5wYXJzZShrZXkpO1xuXG4gICAgaWYgKCFhY2Nlc3Nvci5jb21wb25lbnRfaWQpIHJldHVybjtcblxuICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgIGNvbnN0IGZldGNoUHJvbWlzZSA9IGZldGNoTWFuaWZlc3QoXG4gICAgICAgIGFjY2Vzc29yLmNvbXBvbmVudF9pZCxcbiAgICAgICAgYWNjZXNzb3IuYWNjZXNzX3Rva2VuLFxuICAgICAgKTtcbiAgICAgIHN0b3JlLnVwZGF0ZSgoc3RvcmUpID0+IHtcbiAgICAgICAgc3RvcmVba2V5XSA9IGZldGNoUHJvbWlzZTtcbiAgICAgICAgcmV0dXJuIHN0b3JlO1xuICAgICAgfSk7XG4gICAgICB0YXJnZXRba2V5XSA9IGZldGNoUHJvbWlzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICB9O1xuICBjb25zdCBzdG9yZSA9IHdyaXRhYmxlKG5ldyBQcm94eTxNYW5pZmVzdFN0b3JlPih7fSwgeyBnZXQgfSkpO1xuICByZXR1cm4gc3RvcmU7XG59XG5cbmV4cG9ydCBjb25zdCBNYW5pZmVzdFN0b3JlID0gaW5pdGlhbGl6ZSgpO1xuIiwiaW1wb3J0IHR5cGUgeyBGaWxlLCBNYW5pZmVzdCB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9OeWxhc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXZlbnREaXNwYXRjaGVyKGNvbXBvbmVudDoge1xuICBkaXNwYXRjaEV2ZW50PzogKGU6IEV2ZW50KSA9PiBib29sZWFuO1xufSkge1xuICByZXR1cm4gKG5hbWU6IHN0cmluZywgZGV0YWlsOiB1bmtub3duKTogdm9pZCA9PiB7XG4gICAgaWYgKGNvbXBvbmVudC5kaXNwYXRjaEV2ZW50KSB7XG4gICAgICBjb21wb25lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtcbiAgICAgICAgICBkZXRhaWwsXG4gICAgICAgICAgY29tcG9zZWQ6IHRydWUsIC8vIHByb3BhZ2F0ZSBhY3Jvc3MgdGhlIHNoYWRvdyBET01cbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlKFxuICBmbjogKGFyZ3M6IHVua25vd24pID0+IHVua25vd24sXG4gIHRpbWU6IG51bWJlcixcbik6ICgpID0+IHZvaWQge1xuICBsZXQgdGltZW91dElkOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PjtcbiAgcmV0dXJuICgpOiB2b2lkID0+IHtcbiAgICBpZiAodGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB9XG5cbiAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZuLCB0aW1lKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkSW50ZXJuYWxQcm9wczxUIGV4dGVuZHMgUGFydGlhbDxNYW5pZmVzdD4+KFxuICBwcm9wZXJ0aWVzOiBULFxuICBtYW5pZmVzdDogVCxcbiAgZGVmYXVsdFZhbHVlTWFwOiBULFxuKTogVCB7XG4gIHJldHVybiBuZXcgUHJveHkocHJvcGVydGllcywge1xuICAgIGdldDogKHRhcmdldCwgbmFtZToga2V5b2YgTWFuaWZlc3QgfCBcInRvSlNPTlwiIHwgXCJ0b1N0cmluZ1wiKSA9PiB7XG4gICAgICBpZiAobmFtZSA9PT0gXCJ0b1N0cmluZ1wiIHx8IG5hbWUgPT09IFwidG9KU09OXCIpIHtcbiAgICAgICAgcmV0dXJuICgpID0+IEpTT04uc3RyaW5naWZ5KHRhcmdldCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChSZWZsZWN0LmdldCh0YXJnZXQsIG5hbWUpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGdldFByb3BlcnR5VmFsdWUoXG4gICAgICAgICAgUmVmbGVjdC5nZXQodGFyZ2V0LCBuYW1lKSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWVNYXBbbmFtZV0sXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtYW5pZmVzdCAmJiBuYW1lIGluIG1hbmlmZXN0KSB7XG4gICAgICAgIHJldHVybiBnZXRQcm9wZXJ0eVZhbHVlKG1hbmlmZXN0W25hbWVdLCBkZWZhdWx0VmFsdWVNYXBbbmFtZV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZU1hcFtuYW1lXTtcbiAgICB9LFxuXG4gICAgb3duS2V5czogKHRhcmdldCkgPT4ge1xuICAgICAgY29uc3Qga2V5cyA9IG5ldyBTZXQoW1xuICAgICAgICAuLi5SZWZsZWN0Lm93bktleXModGFyZ2V0KSxcbiAgICAgICAgLi4uT2JqZWN0LmtleXMobWFuaWZlc3QpLFxuICAgICAgICAuLi5PYmplY3Qua2V5cyhkZWZhdWx0VmFsdWVNYXApLFxuICAgICAgXSk7XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShrZXlzKTtcbiAgICB9LFxuXG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAodGFyZ2V0LCBwcm9wKSA9PiB7XG4gICAgICBsZXQgcHJvcERlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3ApO1xuICAgICAgaWYgKCFwcm9wRGVzY3JpcHRvcikge1xuICAgICAgICBwcm9wRGVzY3JpcHRvciA9IChtYW5pZmVzdCAmJlxuICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobWFuaWZlc3QsIHByb3ApKSA/P1xuICAgICAgICAgIChkZWZhdWx0VmFsdWVNYXAgJiZcbiAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZGVmYXVsdFZhbHVlTWFwLCBwcm9wKSkgPz8ge1xuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIH07XG4gICAgICAgIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wLCBwcm9wRGVzY3JpcHRvcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvcERlc2NyaXB0b3I7XG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wZXJ0eVZhbHVlPFQ+KHByb3BWYWx1ZTogYW55LCBkZWZhdWx0VG86IFQpOiBUIHtcbiAgaWYgKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgZGVmYXVsdFRvID09PSBcImJvb2xlYW5cIikge1xuICAgICAgcmV0dXJuIHBhcnNlQm9vbGVhbihwcm9wVmFsdWUpIGFzIGFueTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkZWZhdWx0VG8gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHJldHVybiBOdW1iZXIocHJvcFZhbHVlKSBhcyBhbnk7XG4gICAgfVxuICAgIGlmIChkZWZhdWx0VG8gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUocHJvcFZhbHVlKSBhcyBhbnk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BWYWx1ZSA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFRvID8/IG51bGwgOiBwcm9wVmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUJvb2xlYW4oXG4gIHZhbDogc3RyaW5nIHwgYm9vbGVhbiB8IHVuZGVmaW5lZCB8IG51bGwsXG4pOiBib29sZWFuIHtcbiAgcmV0dXJuICg8YW55Plt0cnVlLCBcInRydWVcIiwgXCIxXCJdKS5pbmNsdWRlcyh2YWwpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZVN0cmluZ1RvQXJyYXkocGFyc2VTdHI6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgaWYgKCFwYXJzZVN0cikge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGlmIChwYXJzZVN0ci5pbmNsdWRlcyhcIixcIikpIHtcbiAgICByZXR1cm4gcGFyc2VTdHIuc3BsaXQoXCIsXCIpLm1hcCgoczogc3RyaW5nKSA9PiBzLnRyaW0oKSk7XG4gIH1cbiAgaWYgKHBhcnNlU3RyLmluY2x1ZGVzKFwiIFwiKSkge1xuICAgIHJldHVybiBwYXJzZVN0ci5zcGxpdChcIiBcIikubWFwKChzOiBzdHJpbmcpID0+IHMudHJpbSgpKTtcbiAgfVxuICBpZiAocGFyc2VTdHIuaW5jbHVkZXMoXCJcXG5cIikpIHtcbiAgICByZXR1cm4gcGFyc2VTdHIuc3BsaXQoXCJcXG5cIikubWFwKChzOiBzdHJpbmcpID0+IHMudHJpbSgpKTtcbiAgfVxuXG4gIHJldHVybiBbcGFyc2VTdHIudHJpbSgpXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvd25sb2FkQXR0YWNoZWRGaWxlKGZpbGVEYXRhOiBzdHJpbmcsIGZpbGU6IEZpbGUpOiB2b2lkIHtcbiAgY29uc3QgYnVmZmVyID0gVWludDhBcnJheS5mcm9tKGF0b2IoZmlsZURhdGEpLCAoYykgPT4gYy5jaGFyQ29kZUF0KDApKTtcbiAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtidWZmZXJdLCB7IHR5cGU6IGZpbGUuY29udGVudF90eXBlIH0pO1xuICBjb25zdCBibG9iRmlsZSA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG4gIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgYS5ocmVmID0gYmxvYkZpbGU7XG4gIGEuZG93bmxvYWQgPSBmaWxlLmZpbGVuYW1lID8/IGZpbGUuaWQ7XG4gIGEudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgYS5jbGljaygpO1xuICBhLnJlbW92ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlDb250YWluc0FycmF5KHN1cGVyc2V0OiBhbnlbXSwgc3Vic2V0OiBhbnlbXSk6IGJvb2xlYW4ge1xuICByZXR1cm4gc3Vic2V0LmV2ZXJ5KCh0YXJnZXQpID0+IHN1cGVyc2V0LmluY2x1ZGVzKHRhcmdldCkpO1xufVxuIiwiPHN2ZWx0ZTpvcHRpb25zIHRhZz1cIm55bGFzLWVycm9yXCIgaW1tdXRhYmxlPXt0cnVlfSAvPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICBpbXBvcnQgeyBFcnJvclN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlL2Vycm9yXCI7XG4gIGltcG9ydCB0eXBlIHsgTkVycm9yIH0gZnJvbSBcIkBjb21tb25zL3R5cGVzL055bGFzXCI7XG5cbiAgZXhwb3J0IGxldCBpZDogc3RyaW5nOyAvLyBjb21wb25lbnQgaWRcblxuICBsZXQgZXJyb3I6IE5FcnJvcjtcbiAgbGV0IGVycm9yTmFtZTogc3RyaW5nO1xuXG4gICQ6IHtcbiAgICBlcnJvciA9ICRFcnJvclN0b3JlW2lkXSA/PyB7IG5hbWU6IFwiXCIgfTtcbiAgICBlcnJvck5hbWUgPSBlcnJvci5uYW1lID8/IGVycm9yLm1lc3NhZ2U/Lm5hbWUgPz8gXCJcIjtcbiAgfVxuXG4gIGNvbnN0IGlzRGV2RW52ID1cbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcyhcImxvY2FsaG9zdFwiKSB8fFxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKFwiMTI3LjAuMC4xXCIpO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLm1lc3NhZ2UtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmNmY2O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggI2FhOTJhMCBpbnNldCwgMCAwIDAgMCB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogIzlmM2EzODtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2UsIGNvbG9yIDUwMG1zIGVhc2UsXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yIDUwMG1zIGVhc2UsIGJveC1zaGFkb3cgNTAwbXMgZWFzZSxcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdyA1MDBtcyBlYXNlO1xuICB9XG5cbiAgLm1lc3NhZ2UtY29udGFpbmVyICo6Zm9jdXMge1xuICAgIG91dGxpbmU6IDVweCBhdXRvIEhpZ2hsaWdodDtcbiAgICBvdXRsaW5lOiA1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XG4gIH1cblxuICAuZGV0YWlscyB7XG4gICAgY29sb3I6ICM0OTQ5NDk7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG48L3N0eWxlPlxuXG57I2lmIGVycm9yTmFtZSAmJiBpc0RldkVudn1cbiAgPGRpdiBjbGFzcz1cIm1lc3NhZ2UtY29udGFpbmVyXCI+XG4gICAgeyNpZiBlcnJvck5hbWUgPT09IFwiSG9zdERvbWFpbk5vdEFsbG93ZWRFcnJvclwifVxuICAgICAgPGgzPlxuICAgICAgICBZb3UgYXJlIHRyeWluZyB0byBhY2Nlc3MgdGhpcyBjb21wb25lbnQgZnJvbSZuYnNwO1xuICAgICAgICA8Y29kZT57d2luZG93LmxvY2F0aW9uLmhvc3RuYW1lfTwvY29kZT4uIFRoZSBjb21wb25lbnQncyBzZXR0aW5ncyBkbyBub3RcbiAgICAgICAgYWxsb3cgYWNjZXNzIGZyb20gdGhpcyBkb21haW4uXG4gICAgICA8L2gzPlxuICAgICAgPGg0PlxuICAgICAgICBUaGUgbGlzdCBvZiBhbGxvd2VkIGRvbWFpbnMgY2FuIGJlIG1vZGlmaWVkIGluIHlvdXImbmJzcDtcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZGFzaGJvYXJkLm55bGFzLmNvbVwiPkRhc2hib2FyZDwvYT4uXG4gICAgICA8L2g0PlxuICAgIHs6ZWxzZSBpZiBlcnJvck5hbWUgPT09IFwiSW5jb21wYXRpYmxlUHJvcGVydGllc1wifVxuICAgICAgPGgzPllvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgZG8gbm90IHdvcmsgd2l0aCBlYWNoIG90aGVyLjwvaDM+XG4gICAgey9pZn1cbiAgICA8c3BhbiBjbGFzcz1cImRldGFpbHNcIj5EZWJ1ZyBpbmZvOjwvc3Bhbj5cbiAgICA8dGV4dGFyZWEgY2xhc3M9XCJkZXRhaWxzXCIgcmVhZG9ubHk+XG4gICAgICB7ZXJyb3JOYW1lfToge2lkfVxuICAgICAge2Vycm9yLm1lc3NhZ2U/Lm1lc3NhZ2UgPz8gXCJcIn1cbiAgICA8L3RleHRhcmVhPlxuICA8L2Rpdj5cbnsvaWZ9XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzICovXG5pbXBvcnQgdHlwZSB7IEh5ZHJhdGVkQ29udGFjdCwgQ29udGFjdCB9IGZyb20gXCJAY29tbW9ucy90eXBlcy9Db250YWN0c1wiO1xuXG5leHBvcnQgY29uc3Qgc29ydGluZ1ByZWRpY2F0ZXMgPSB7XG4gIGxhc3RfZW1haWxlZDogKGNvbnRhY3QxOiBIeWRyYXRlZENvbnRhY3QsIGNvbnRhY3QyOiBIeWRyYXRlZENvbnRhY3QpID0+XG4gICAgKGNvbnRhY3QyLmxhc3RfY29udGFjdGVkX2RhdGUgfHwgMCkgLSAoY29udGFjdDEubGFzdF9jb250YWN0ZWRfZGF0ZSB8fCAwKSxcbiAgbmFtZTogKGNvbnRhY3QxOiBDb250YWN0LCBjb250YWN0MjogQ29udGFjdCkgPT5cbiAgICAoY29udGFjdDEuZ2l2ZW5fbmFtZSB8fCBjb250YWN0MS5lbWFpbHNbMF0uZW1haWwpLmxvY2FsZUNvbXBhcmUoXG4gICAgICBjb250YWN0Mi5naXZlbl9uYW1lIHx8IGNvbnRhY3QyLmVtYWlsc1swXS5lbWFpbCxcbiAgICApLFxufTtcbiIsIjxzdmVsdGU6b3B0aW9ucyB0YWc9XCJueWxhcy1jb250YWN0LWxpc3RcIiAvPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICBpbXBvcnQgZm9ybWF0RGlzdGFuY2VTdHJpY3QgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdERpc3RhbmNlU3RyaWN0XCI7XG4gIGltcG9ydCB7XG4gICAgRXJyb3JTdG9yZSxcbiAgICBmZXRjaENvbnRhY3RJbWFnZSxcbiAgICBDb250YWN0U3RvcmUsXG4gICAgTWFuaWZlc3RTdG9yZSxcbiAgfSBmcm9tIFwiQGNvbW1vbnNcIjtcblxuICBpbXBvcnQgeyBnZXRfY3VycmVudF9jb21wb25lbnQsIG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlL2ludGVybmFsXCI7XG4gIGltcG9ydCB7IHRpY2sgfSBmcm9tIFwic3ZlbHRlXCI7XG4gIGltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIkBjb21tb25zL21ldGhvZHMvY29tcG9uZW50XCI7XG4gIGltcG9ydCB7XG4gICAgYnVpbGRJbnRlcm5hbFByb3BzLFxuICAgIGdldEV2ZW50RGlzcGF0Y2hlcixcbiAgfSBmcm9tIFwiQGNvbW1vbnMvbWV0aG9kcy9jb21wb25lbnRcIjtcbiAgaW1wb3J0IHR5cGUge1xuICAgIEh5ZHJhdGVkQ29udGFjdCxcbiAgICBDb250YWN0LFxuICAgIENvbnRhY3RzUXVlcnksXG4gICAgQ29udGFjdHNRdWVyeVBhcmFtcyxcbiAgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvQ29udGFjdHNcIjtcbiAgaW1wb3J0IHR5cGUgeyBDb250YWN0TGlzdFByb3BlcnRpZXMgfSBmcm9tIFwiQGNvbW1vbnMvdHlwZXMvTnlsYXNcIjtcbiAgaW1wb3J0IHsgc29ydGluZ1ByZWRpY2F0ZXMgfSBmcm9tIFwiLi4vbGliL3NvcnRpbmdcIjtcblxuICBleHBvcnQgbGV0IGlkOiBzdHJpbmcgPSBcIlwiO1xuICBleHBvcnQgbGV0IGFjY2Vzc190b2tlbjogc3RyaW5nID0gXCJcIjtcblxuICBleHBvcnQgbGV0IGNsaWNrX2FjdGlvbjogXCJlbWFpbFwiIHwgXCJzZWxlY3RcIjtcbiAgZXhwb3J0IGxldCBjb250YWN0c190b19sb2FkOiBudW1iZXI7XG4gIGV4cG9ydCBsZXQgY29udGFjdHM6IEh5ZHJhdGVkQ29udGFjdFtdO1xuICBleHBvcnQgbGV0IGRlZmF1bHRfcGhvdG86IHN0cmluZyB8IG51bGw7XG4gIGV4cG9ydCBsZXQgc2hvd19maWx0ZXI6IGJvb2xlYW47XG4gIGV4cG9ydCBsZXQgc2hvd19uYW1lczogYm9vbGVhbjtcbiAgZXhwb3J0IGxldCBzb3J0X2J5OiBcImxhc3RfZW1haWxlZFwiIHwgXCJuYW1lXCI7XG4gIGV4cG9ydCBsZXQgdGhlbWU6IHN0cmluZyA9IFwidGhlbWUtMVwiO1xuICBleHBvcnQgbGV0IGdyb3VwOiBzdHJpbmc7XG5cbiAgY29uc3QgZGVmYXVsdFZhbHVlTWFwOiBQYXJ0aWFsPENvbnRhY3RMaXN0UHJvcGVydGllcz4gPSB7XG4gICAgY2xpY2tfYWN0aW9uOiBcImVtYWlsXCIsXG4gICAgY29udGFjdHNfdG9fbG9hZDogMTAwLFxuICAgIHNob3dfZmlsdGVyOiBmYWxzZSxcbiAgICBzaG93X25hbWVzOiB0cnVlLFxuICAgIHNvcnRfYnk6IFwibmFtZVwiLFxuICAgIHRoZW1lOiBcInRoZW1lLTFcIixcbiAgfTtcblxuICBsZXQgZmlsdGVyVmFsdWU6IHN0cmluZyA9IFwiXCI7XG4gIGNvbnN0IGZpbHRlclByZWRpY2F0ZXMgPSB7XG4gICAgYnlFbWFpbDogKGNvbnRhY3Q6IENvbnRhY3QpID0+XG4gICAgICBjb250YWN0LmVtYWlsc1swXS5lbWFpbC5pbmNsdWRlcyhmaWx0ZXJWYWx1ZSksXG4gIH07XG4gIGxldCBzZWxlY3RlZEZpbHRlclR5cGU6IGtleW9mIHR5cGVvZiBmaWx0ZXJQcmVkaWNhdGVzID0gXCJieUVtYWlsXCI7XG5cbiAgY29uc3QgZGlzcGF0Y2hFdmVudCA9IGdldEV2ZW50RGlzcGF0Y2hlcihnZXRfY3VycmVudF9jb21wb25lbnQoKSk7XG4gICQ6IGRpc3BhdGNoRXZlbnQoXCJtYW5pZmVzdExvYWRlZFwiLCBtYW5pZmVzdCk7XG5cbiAgJDogaWYgKE9iamVjdC5rZXlzKCRFcnJvclN0b3JlKS5sZW5ndGgpIHtcbiAgICBkaXNwYXRjaEV2ZW50KFwib25FcnJvclwiLCAkRXJyb3JTdG9yZSk7XG4gIH1cblxuICBsZXQgX3RoaXMgPSA8Q29udGFjdExpc3RQcm9wZXJ0aWVzPihcbiAgICBidWlsZEludGVybmFsUHJvcHMoe30sIHt9LCBkZWZhdWx0VmFsdWVNYXApXG4gICk7XG4gIGxldCBtYW5pZmVzdDogUGFydGlhbDxDb250YWN0TGlzdFByb3BlcnRpZXM+ID0ge307XG4gIGxldCBtYWluOiBFbGVtZW50O1xuICBsZXQgY2xpZW50SGVpZ2h0OiBudW1iZXIgPSAwO1xuICBsZXQgY2xpZW50V2lkdGg6IG51bWJlciA9IDA7XG4gIGxldCBvZmZzZXQgPSAwO1xuICBsZXQgbGFzdE51bUNvbnRhY3RzTG9hZGVkID0gMDtcbiAgbGV0IGh5ZHJhdGVkQ29udGFjdHM6IEh5ZHJhdGVkQ29udGFjdFtdID0gW107XG4gIGxldCBzdGF0dXM6IFwibG9hZGluZ1wiIHwgXCJsb2FkZWRcIiB8IFwiZXJyb3JcIiA9IFwibG9hZGluZ1wiO1xuICBsZXQgaGFzQ29tcG9uZW50TG9hZGVkID0gZmFsc2U7XG5cbiAgb25Nb3VudChhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgdGljaygpO1xuICAgIGNsaWVudEhlaWdodCA9IG1haW4/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCB8fCAwO1xuICAgIGNsaWVudFdpZHRoID0gbWFpbj8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggfHwgMDtcblxuICAgIG1hbmlmZXN0ID0gKChhd2FpdCAkTWFuaWZlc3RTdG9yZVtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgY29tcG9uZW50X2lkOiBpZCwgYWNjZXNzX3Rva2VuIH0pXG4gICAgXSkgfHwge30pIGFzIENvbnRhY3RMaXN0UHJvcGVydGllcztcblxuICAgIF90aGlzID0gYnVpbGRJbnRlcm5hbFByb3BzKFxuICAgICAgJCRwcm9wcyxcbiAgICAgIG1hbmlmZXN0LFxuICAgICAgZGVmYXVsdFZhbHVlTWFwLFxuICAgICkgYXMgQ29udGFjdExpc3RQcm9wZXJ0aWVzO1xuXG4gICAgaWYgKF90aGlzLmNvbnRhY3RzKSB7XG4gICAgICBoeWRyYXRlZENvbnRhY3RzID0gX3RoaXMuY29udGFjdHMgYXMgSHlkcmF0ZWRDb250YWN0W107XG4gICAgICBzdGF0dXMgPSBcImxvYWRlZFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoJENvbnRhY3RTdG9yZVtxdWVyeUtleV0pIHtcbiAgICAgICAgaHlkcmF0ZWRDb250YWN0cyA9ICRDb250YWN0U3RvcmVbcXVlcnlLZXldO1xuICAgICAgICBzdGF0dXMgPSBcImxvYWRlZFwiO1xuICAgICAgfSBlbHNlIGlmIChxdWVyeS5jb21wb25lbnRfaWQpIHtcbiAgICAgICAgc2V0Q29udGFjdHMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNDb21wb25lbnRMb2FkZWQgPSB0cnVlO1xuICB9KTtcblxuICBsZXQgcHJldmlvdXNQcm9wcyA9ICQkcHJvcHM7XG4gICQ6IHtcbiAgICBpZiAoSlNPTi5zdHJpbmdpZnkocHJldmlvdXNQcm9wcykgIT09IEpTT04uc3RyaW5naWZ5KCQkcHJvcHMpKSB7XG4gICAgICBfdGhpcyA9IGJ1aWxkSW50ZXJuYWxQcm9wcyhcbiAgICAgICAgJCRwcm9wcyxcbiAgICAgICAgbWFuaWZlc3QsXG4gICAgICAgIGRlZmF1bHRWYWx1ZU1hcCxcbiAgICAgICkgYXMgQ29udGFjdExpc3RQcm9wZXJ0aWVzO1xuICAgICAgcHJldmlvdXNQcm9wcyA9ICQkcHJvcHM7XG4gICAgfVxuICB9XG5cbiAgbGV0IHRoZW1lVXJsOiBzdHJpbmc7XG4gICQ6IGlmIChcbiAgICAhIV90aGlzLnRoZW1lICYmXG4gICAgKF90aGlzLnRoZW1lLnN0YXJ0c1dpdGgoXCIuXCIpIHx8IF90aGlzLnRoZW1lLnN0YXJ0c1dpdGgoXCJodHRwXCIpKVxuICApIHtcbiAgICAvLyBJZiB0aGUgdGhlbWUgaXMgYSBmaWxlIHBhdGggb3IgYSBVUkxcbiAgICB0aGVtZVVybCA9IF90aGlzLnRoZW1lO1xuICB9XG5cbiAgLy8gc2FuaXRpemF0aW9uIHRvIGNvbmZvcm0gd2l0aCBOeWxhcyBBUEkgbWF4aW11bXNcbiAgJDogaWYgKGhhc0NvbXBvbmVudExvYWRlZCkge1xuICAgIF90aGlzLmNvbnRhY3RzX3RvX2xvYWQgPSBNYXRoLm1heChcbiAgICAgIE1hdGgubWluKF90aGlzLmNvbnRhY3RzX3RvX2xvYWQsIDEwMDApLFxuICAgICAgMSxcbiAgICApO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBzZXR0aW5nIGNvbnRhY3RzXG4gIGxldCBxdWVyeTogQ29udGFjdHNRdWVyeTtcbiAgJDogcXVlcnkgPSB7XG4gICAgY29tcG9uZW50X2lkOiBpZCxcbiAgICBhY2Nlc3NfdG9rZW4sXG4gIH07XG5cbiAgbGV0IHF1ZXJ5S2V5OiBzdHJpbmc7XG4gICQ6IHF1ZXJ5S2V5ID0gSlNPTi5zdHJpbmdpZnkocXVlcnkpO1xuXG4gIGxldCBxdWVyeVBhcmFtczogQ29udGFjdHNRdWVyeVBhcmFtcztcbiAgJDogcXVlcnlQYXJhbXMgPSB7XG4gICAgb2Zmc2V0LFxuICAgIGxpbWl0OiBfdGhpcy5jb250YWN0c190b19sb2FkLFxuICAgIC4uLihfdGhpcy5ncm91cCA/IHsgZ3JvdXA6IF90aGlzLmdyb3VwIH0gOiB7fSksXG4gIH07XG5cbiAgLy8gR2l2ZXMgYWJpbGl0eSB0byB0b2dnbGUgYmV0d2VlbiBOeWxhcyBhbmQgY3VzdG9tIGNvbnRhY3RzXG4gICQ6IHNldEh5ZHJhdGVkQ29udGFjdHMoKSwgY29udGFjdHMsIHF1ZXJ5S2V5O1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHNldEh5ZHJhdGVkQ29udGFjdHMoKSB7XG4gICAgaWYgKCFoYXNDb21wb25lbnRMb2FkZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzdGF0dXMgPSBcImxvYWRpbmdcIjtcbiAgICBpZiAoY29udGFjdHMgJiYgQXJyYXkuaXNBcnJheShjb250YWN0cykpIHtcbiAgICAgIGh5ZHJhdGVkQ29udGFjdHMgPSBjb250YWN0cyBhcyBIeWRyYXRlZENvbnRhY3RbXTtcbiAgICAgIHN0YXR1cyA9IFwibG9hZGVkXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICgkQ29udGFjdFN0b3JlW3F1ZXJ5S2V5XSkge1xuICAgICAgICBoeWRyYXRlZENvbnRhY3RzID0gJENvbnRhY3RTdG9yZVtxdWVyeUtleV07XG4gICAgICAgIHN0YXR1cyA9IFwibG9hZGVkXCI7XG4gICAgICB9IGVsc2UgaWYgKHF1ZXJ5LmNvbXBvbmVudF9pZCkge1xuICAgICAgICBzZXRDb250YWN0cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaHlkcmF0ZWRDb250YWN0cyA9IFtdO1xuICAgICAgICBzdGF0dXMgPSBcImxvYWRlZFwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAgRmV0Y2hlcyBtb3JlIGNvbnRhY3RzLCBjaGFuZ2VzIHN0YXR1cyBmcm9tIFwibG9hZGluZ1wiIHRvIHNob3cgXCJsb2FkaW5nIG1vcmUgY29udGFjdHNcIiBvdmVybGF5LlxuICAgIFdoZW4gdGhlIGZldGNoQ29udGFjdHMgY2FsbCBpcyBzdWNjZXNzZnVsLCBjaGFuZ2Ugc3RhdHVzIHRvIGxvYWRlZCwgaGlkZSBcImxvYWRpbmcgbW9yZSBjb250YWN0cyBvdmVybGF5XCIgYW5kIHVwZGF0ZWQgaHlkcmF0ZWRDb250YWN0c1xuICAqL1xuICBmdW5jdGlvbiBzZXRDb250YWN0cygpIHtcbiAgICBzdGF0dXMgPSBcImxvYWRpbmdcIjtcbiAgICBDb250YWN0U3RvcmUuYWRkQ29udGFjdHMocXVlcnksIHF1ZXJ5UGFyYW1zKS50aGVuKChyZXN1bHRzPzogQ29udGFjdFtdKSA9PiB7XG4gICAgICBpZiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaHlkcmF0ZWRDb250YWN0cyA9ICRDb250YWN0U3RvcmVbcXVlcnlLZXldID8/IHJlc3VsdHM7XG4gICAgICAgIG9mZnNldCArPSBfdGhpcy5jb250YWN0c190b19sb2FkO1xuICAgICAgfVxuICAgICAgc3RhdHVzID0gXCJsb2FkZWRcIjtcbiAgICB9KTtcbiAgfVxuICAvLyAjZW5kcmVnaW9uIHNldHRpbmcgY29udGFjdHNcblxuICAvKlxuICAgIERldGVjdHMgaWYgdGhlIHVzZXIgaGFzIHNjcm9sbGVkIHRvIHRoZSBib3R0b20gb2YgdGhlIGNvbnRhY3QgbGlzdC4gRmV0Y2hlcyAxMDAgbW9yZSBjb250YWN0cyBpZiB1c2VyIGlzIHdpdGhpbiAxMHB4IG9mIGJvdHRvbSBvZiBjb250YWN0IGxpc3QgZWxlbWVudFxuICAqL1xuICBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoKSB7XG4gICAgY29uc3QgeyBzY3JvbGxIZWlnaHQsIHNjcm9sbFRvcCB9ID0gbWFpbjtcbiAgICBpZiAoTWF0aC5hYnMoc2Nyb2xsVG9wICsgY2xpZW50SGVpZ2h0IC0gc2Nyb2xsSGVpZ2h0KSA8PSA1MCkge1xuICAgICAgc2V0Q29udGFjdHMoKTtcbiAgICB9XG4gIH1cblxuICAvLyBEZWJvdW5jZSBoYW5kbGVTY3JvbGwgZXZlbnQgdG8gbGltaXQgIyBvZiBjb250YWN0cyBmZXRjaGVkIGFuZCBsb2FkZWRcbiAgY29uc3QgZGVib3VuY2VTY3JvbGwgPSBkZWJvdW5jZShoYW5kbGVTY3JvbGwsIDUwMCk7XG5cbiAgLy8gU2V0IHRpbWVfYWdvIG9uIGh5ZHJhdGVkQ29udGFjdHNcbiAgJDoge1xuICAgIGlmIChoeWRyYXRlZENvbnRhY3RzLmxlbmd0aCkge1xuICAgICAgaHlkcmF0ZWRDb250YWN0cyA9IGh5ZHJhdGVkQ29udGFjdHMubWFwKChjb250YWN0OiBIeWRyYXRlZENvbnRhY3QpID0+IHtcbiAgICAgICAgaWYgKGNvbnRhY3QubGFzdF9jb250YWN0ZWRfZGF0ZSkge1xuICAgICAgICAgIGNvbnRhY3QudGltZV9hZ28gPSBgRW1haWxlZCAke2Zvcm1hdERpc3RhbmNlU3RyaWN0KFxuICAgICAgICAgICAgdG9kYXksXG4gICAgICAgICAgICBuZXcgRGF0ZShjb250YWN0Lmxhc3RfY29udGFjdGVkX2RhdGUgKiAxMDAwKSxcbiAgICAgICAgICAgIHsgYWRkU3VmZml4OiBmYWxzZSB9LFxuICAgICAgICAgICl9IGFnb2A7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGFjdC50aW1lX2FnbyA9IGBObyByZWNlbnQgYWN0aXZpdHlgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250YWN0O1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbGV0IGRpc3BsYXllZENvbnRhY3RzOiBIeWRyYXRlZENvbnRhY3RbXSA9IFtdO1xuICAkOiB7XG4gICAgLy8gZmlsdGVyL3NvcnRcbiAgICBmaWx0ZXJWYWx1ZTtcblxuICAgIGNvbnN0IHNvcnRlZEZpbHRlcmVkID0gaHlkcmF0ZWRDb250YWN0c1xuICAgICAgLmZpbHRlcihmaWx0ZXJQcmVkaWNhdGVzW3NlbGVjdGVkRmlsdGVyVHlwZV0pXG4gICAgICAuc29ydChzb3J0aW5nUHJlZGljYXRlc1tfdGhpcy5zb3J0X2J5XSk7XG5cbiAgICAvLyBub2luc3BlY3Rpb24gVW5uZWNlc3NhcnlMb2NhbFZhcmlhYmxlSlNcbiAgICBjb25zdCBkZWR1cGxpY2F0ZWRDb250YWN0cyA9IE9iamVjdC52YWx1ZXMoXG4gICAgICBzb3J0ZWRGaWx0ZXJlZC5yZWR1Y2U8UmVjb3JkPHN0cmluZywgSHlkcmF0ZWRDb250YWN0Pj4oXG4gICAgICAgIChtZW0sIGMpID0+IE9iamVjdC5hc3NpZ24obWVtLCB7IFtjLmVtYWlsc1swXS5lbWFpbF06IGMgfSksXG4gICAgICAgIHt9LFxuICAgICAgKSxcbiAgICApO1xuICAgIGRpc3BsYXllZENvbnRhY3RzID0gZGVkdXBsaWNhdGVkQ29udGFjdHM7XG4gIH1cblxuICAkOiB7XG4gICAgaWYgKFxuICAgICAgJENvbnRhY3RTdG9yZVtxdWVyeUtleV0gJiZcbiAgICAgIF90aGlzLmNvbnRhY3RzX3RvX2xvYWQgIT09IGxhc3ROdW1Db250YWN0c0xvYWRlZFxuICAgICkge1xuICAgICAgbGFzdE51bUNvbnRhY3RzTG9hZGVkID0gX3RoaXMuY29udGFjdHNfdG9fbG9hZDtcbiAgICAgIG9mZnNldCA9IDA7XG4gICAgICBzZXRDb250YWN0cygpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcblxuICBmdW5jdGlvbiBjb250YWN0Q2xpY2tlZChcbiAgICBldmVudDogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQsXG4gICAgY29udGFjdDogSHlkcmF0ZWRDb250YWN0LFxuICApIHtcbiAgICBpZiAoX3RoaXMuY2xpY2tfYWN0aW9uID09PSBcImVtYWlsXCIpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYG1haWx0bzoke2NvbnRhY3QuZW1haWxzWzBdLmVtYWlsfWA7XG4gICAgfVxuICAgIGlmIChfdGhpcy5jbGlja19hY3Rpb24gPT09IFwic2VsZWN0XCIpIHtcbiAgICAgIGNvbnRhY3Quc2VsZWN0ZWQgPSAhY29udGFjdC5zZWxlY3RlZDtcbiAgICAgIGRpc3BhdGNoRXZlbnQoXCJjb250YWN0Q2xpY2tlZFwiLCB7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICBjb250YWN0LFxuICAgICAgICBjb250YWN0czogaHlkcmF0ZWRDb250YWN0cyxcbiAgICAgIH0pO1xuICAgICAgaHlkcmF0ZWRDb250YWN0cyA9IFsuLi5oeWRyYXRlZENvbnRhY3RzXTtcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbiAgQGltcG9ydCBcIi4uLy4uL3RoZW1pbmcvcmVzZXQuc2Nzc1wiO1xuICBAaW1wb3J0IFwiLi4vLi4vdGhlbWluZy9hbmltYXRpb24uc2Nzc1wiO1xuICBAaW1wb3J0IFwiLi4vLi4vdGhlbWluZy92YXJpYWJsZXMuc2Nzc1wiO1xuXG4gICRpbWFnZVNpemU6IDQ4cHg7XG4gICRpbWFnZUJ1ZmZlcjogOHB4O1xuICAkY2hlY2tib3hTaXplOiAxNnB4O1xuICAkY2hlY2tib3hCdWZmZXI6IDhweDtcbiAgJHRoZW1lQ29sb3VyOiB2YXIoLS1saW5lc0FuZEljb25zKTtcblxuICBtYWluIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgQGltcG9ydCBcIi4vdGhlbWVzL3RoZW1lLTFcIjtcbiAgQGltcG9ydCBcIi4vdGhlbWVzL3RoZW1lLTJcIjtcbiAgQGltcG9ydCBcIi4vdGhlbWVzL3RoZW1lLTNcIjtcbiAgQGltcG9ydCBcIi4vdGhlbWVzL3RoZW1lLTRcIjtcbiAgQGltcG9ydCBcIi4vdGhlbWVzL3RoZW1lLTVcIjtcblxuICAubG9hZGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBAaW5jbHVkZSBsb2FkZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmVtcHR5LXN0YXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgdmFyKC0tbGluZXNBbmRJY29ucyk7XG4gICAgcGFkZGluZzogM3JlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcCB7XG4gICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICB9XG4gIH1cblxuICAubG9hZGluZyB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMGM7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQsIDEwMCUpO1xuICAgIHdpZHRoOiB2YXIoLS13aWR0aCwgMTAwJSk7XG4gIH1cblxuICAuZW50cnkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNHB4IDhweDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpbmVzQW5kSWNvbnMpO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLmZpbHRlciB7XG4gICAgaW5wdXQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgfVxuICB9XG5cbiAgLmNvbnRhY3RzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIG1heC13aWR0aDogMTAwJTtcblxuICAgIC5jb250YWN0IHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgYm9yZGVyLWxlZnQ6IDAgc29saWQgdmFyKC0tY29udGFjdENvbG9yKTtcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgIFwiY2hlY2sgaW1hZ2UgdGl0bGUgdGl0bGVcIlxuICAgICAgICBcImNoZWNrIGltYWdlIGVtYWlsIHJlY2VuY3lcIjtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMCAoJGltYWdlU2l6ZSArICRpbWFnZUJ1ZmZlcikgMWZyIG1heC1jb250ZW50O1xuICAgICAgZ2FwOiAwLjI1cmVtO1xuXG4gICAgICAmLnNlbGVjdGFibGUge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICgkY2hlY2tib3hTaXplICsgJGNoZWNrYm94QnVmZmVyKSAoXG4gICAgICAgICAgICAkaW1hZ2VTaXplICsgJGltYWdlQnVmZmVyXG4gICAgICAgICAgKSAxZnIgbWF4LWNvbnRlbnQ7XG4gICAgICB9XG5cbiAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB2YXIoLS1jb250YWN0Q29sb3IpO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXJDb2xvcik7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgZGl2LmRlZmF1bHQge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbnRhY3RDb2xvcik7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWNvbnRhY3RUZXh0Q29sb3IpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQ4cHg7XG4gICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5jaGVja2JveCB7XG4gICAgICAgIGdyaWQtYXJlYTogY2hlY2s7XG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogLTEwMDAwcHg7XG4gICAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIHdpZHRoOiAkY2hlY2tib3hTaXplO1xuICAgICAgICAgIGhlaWdodDogJGNoZWNrYm94U2l6ZTtcbiAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbmVzQW5kSWNvbnMpO1xuXG4gICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAtby1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG5cbiAgICAgICAgICAmOmNoZWNrZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGFjdENvbG9yKTtcblxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDE0IDEwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNNS4yOTI0OSA5LjI5MjVDNC45MDI0OSA5LjY4MjUgNC4yNzI0OSA5LjY4MjUgMy44ODI0OSA5LjI5MjVMMC4yOTI0ODYgNS43MDI1QzAuMTA1MjMzIDUuNTE1NjcgMCA1LjI2MjAyIDAgNC45OTc1QzAgNC43MzI5OCAwLjEwNTIzMyA0LjQ3OTMzIDAuMjkyNDg2IDQuMjkyNUMwLjY4MjQ4NiAzLjkwMjUgMS4zMTI0OSAzLjkwMjUgMS43MDI0OSA0LjI5MjVMNC41ODI0OSA3LjE3MjVMMTEuNDYyNSAwLjI5MjVDMTEuODUyNSAtMC4wOTc1IDEyLjQ4MjUgLTAuMDk3NSAxMi44NzI1IDAuMjkyNUMxMy4yNjI1IDAuNjgyNSAxMy4yNjI1IDEuMzEyNSAxMi44NzI1IDEuNzAyNUw1LjI5MjQ5IDkuMjkyNVpcIiBmaWxsPVwid2hpdGVcIi8+PC9zdmc+Jyk7XG4gICAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxLjVweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuaW1hZ2Uge1xuICAgICAgICBncmlkLWFyZWE6IGltYWdlO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogJGltYWdlU2l6ZTtcbiAgICAgICAgICBoZWlnaHQ6ICRpbWFnZVNpemU7XG4gICAgICAgICAgd2lkdGg6ICRpbWFnZVNpemU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZ3JpZC1hcmVhOiB0aXRsZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG5cbiAgICAgIC5lbWFpbCB7XG4gICAgICAgIGdyaWQtYXJlYTogZW1haWw7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG5cbiAgICAgIC5yZWNlbmN5IHtcbiAgICAgICAgZ3JpZC1hcmVhOiByZWNlbmN5O1xuICAgICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgICAmLm5vLWxhc3QtY29udGFjdC1kYXRhIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEBtZWRpYSAjeyRkZXNrdG9wfSB7XG4gICAgLmNvbnRhY3RzIC5jb250YWN0IHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgIFwiY2hlY2sgaW1hZ2UgdGl0bGUgcmVjZW5jeVwiXG4gICAgICAgIFwiY2hlY2sgaW1hZ2UgZW1haWwgcmVjZW5jeVwiO1xuICAgICAgLnJlY2VuY3kge1xuICAgICAgICAmLm5vLWxhc3QtY29udGFjdC1kYXRhIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zdHlsZT5cblxuPG55bGFzLWVycm9yIHtpZH0gLz5cblxueyNpZiB0aGVtZVVybH1cbiAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9e3RoZW1lVXJsfSAvPlxuey9pZn1cblxuPG1haW5cbiAgYmluZDp0aGlzPXttYWlufVxuICBvbjpzY3JvbGw9e190aGlzLmNvbnRhY3RzID8gKCkgPT4ge30gOiBkZWJvdW5jZVNjcm9sbH1cbiAgYmluZDpjbGllbnRIZWlnaHRcbiAgYmluZDpjbGllbnRXaWR0aFxuICBjbGFzcz17ISF0aGVtZVVybCA/IFwiY3VzdG9tXCIgOiBfdGhpcy50aGVtZX0+XG4gIHsjaWYgc3RhdHVzID09PSBcImxvYWRpbmdcIiAmJiBoeWRyYXRlZENvbnRhY3RzLmxlbmd0aCA8PSAwfVxuICAgIDxkaXYgY2xhc3M9XCJsb2FkZXJcIiAvPlxuICB7OmVsc2UgaWYgaHlkcmF0ZWRDb250YWN0cy5sZW5ndGggPT09IDB9XG4gICAgPGRpdiBjbGFzcz1cImVtcHR5LXN0YXRlXCI+XG4gICAgICA8cD5cbiAgICAgICAgRW50ZXIgY29udGFjdHMgdXNpbmcgdGhlXG4gICAgICAgIDxjb2RlPmNvbnRhY3RzPC9jb2RlPlxuICAgICAgICBwcm9wIG9yIHN5bmMgYSBOeWxhcyBhY2NvdW50IGluIHRoZSBEYXNoYm9hcmQuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgU2VlIG91ciA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2RvY3MubnlsYXMuY29tL2RvY3MvY29udGFjdC1saXN0LWNvbXBvbmVudFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCI+RG9jczwvYT5cbiAgICAgICAgZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgey9pZn1cbiAgeyNhd2FpdCBkaXNwbGF5ZWRDb250YWN0cyB0aGVuIHJlc3VsdHN9XG4gICAgeyNpZiBzdGF0dXMgPT09IFwibG9hZGluZ1wiICYmIHJlc3VsdHMubGVuZ3RoID49IF90aGlzLmNvbnRhY3RzX3RvX2xvYWR9XG4gICAgICA8c3BhblxuICAgICAgICBjbGFzcz1cImxvYWRpbmdcIlxuICAgICAgICBzdHlsZT1cIi0taGVpZ2h0OiB7Y2xpZW50SGVpZ2h0fXB4OyAtLXdpZHRoOiB7Y2xpZW50V2lkdGh9cHhcIj5cbiAgICAgICAgTG9hZGluZyBNb3JlIENvbnRhY3RzXG4gICAgICA8L3NwYW4+XG4gICAgey9pZn1cblxuICAgIHsjaWYgX3RoaXMuc2hvd19maWx0ZXIgJiYgc3RhdHVzICE9PSBcImxvYWRpbmdcIn1cbiAgICAgIDxsYWJlbCBjbGFzcz1cImVudHJ5IGZpbHRlclwiPlxuICAgICAgICBGaWx0ZXIgYnkgZW1haWw6IDxpbnB1dFxuICAgICAgICAgIGlkPVwic2hvdy1maWx0ZXItaW5wdXRcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBiaW5kOnZhbHVlPXtmaWx0ZXJWYWx1ZX0gLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgey9pZn1cblxuICAgIDx1bCBjbGFzcz1cImNvbnRhY3RzXCI+XG4gICAgICB7I2VhY2ggcmVzdWx0cyBhcyBjb250YWN0LCBpfVxuICAgICAgICA8bGlcbiAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgIG9uOmNsaWNrPXsoZXYpID0+IGNvbnRhY3RDbGlja2VkKGV2LCBjb250YWN0KX1cbiAgICAgICAgICBvbjprZXl1cD17KGV2KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXYua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgICAgY29udGFjdENsaWNrZWQoZXYsIGNvbnRhY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3M9XCJlbnRyeSBjb250YWN0XCJcbiAgICAgICAgICBkYXRhLWN5PXtpfVxuICAgICAgICAgIGRhdGEtbGFzdC1jb250YWN0ZWQtZGF0ZT17Y29udGFjdC5sYXN0X2NvbnRhY3RlZF9kYXRlIHx8IC0xfVxuICAgICAgICAgIGNsYXNzOnNlbGVjdGFibGU9e190aGlzLmNsaWNrX2FjdGlvbiA9PT0gXCJzZWxlY3RcIn1cbiAgICAgICAgICBjbGFzczpzZWxlY3RlZD17Y29udGFjdC5zZWxlY3RlZH0+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgeyNpZiBfdGhpcy5jbGlja19hY3Rpb24gPT09IFwic2VsZWN0XCJ9XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgYmluZDpjaGVja2VkPXtjb250YWN0LnNlbGVjdGVkfVxuICAgICAgICAgICAgICAgIGlkPVwiY29udGFjdC17aX0tY2hlY2tib3hcIiAvPlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29udGFjdC17aX0tY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgID57Y29udGFjdC5zZWxlY3RlZCA/IFwiRGVzZWxlY3RcIiA6IFwiU2VsZWN0XCJ9XG4gICAgICAgICAgICAgICAge2NvbnRhY3QuZ2l2ZW5fbmFtZX1cbiAgICAgICAgICAgICAgICB7Y29udGFjdC5zdXJuYW1lfTwvbGFiZWw+XG4gICAgICAgICAgICB7L2lmfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImltYWdlXCI+XG4gICAgICAgICAgICB7I2lmIGNvbnRhY3QucGljdHVyZX1cbiAgICAgICAgICAgICAgeyNpZiBjb250YWN0LnBpY3R1cmUgIT09IFwiTG9hZGluZ1wifVxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIGFsdD17Y29udGFjdC5lbWFpbHNbMF0uZW1haWx9XG4gICAgICAgICAgICAgICAgICBzcmM9XCJkYXRhOmltYWdlL2pwZztiYXNlNjQse2NvbnRhY3QucGljdHVyZX1cIiAvPlxuICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgezplbHNlIGlmIGNvbnRhY3QucGljdHVyZV91cmx9XG4gICAgICAgICAgICAgIHsjaWYgX3RoaXMuY29udGFjdHM/Lmxlbmd0aH1cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y29udGFjdC5waWN0dXJlX3VybH0gYWx0PXtjb250YWN0LmVtYWlsc1swXS5lbWFpbH0gLz5cbiAgICAgICAgICAgICAgezplbHNlfVxuICAgICAgICAgICAgICAgIHsjYXdhaXQgZmV0Y2hDb250YWN0SW1hZ2UocXVlcnksIGNvbnRhY3QuaWQpLnRoZW4oKGltYWdlKSA9PiAoY29udGFjdC5waWN0dXJlID0gaW1hZ2UpKX1cbiAgICAgICAgICAgICAgICAgIHsoY29udGFjdC5waWN0dXJlID0gXCJMb2FkaW5nXCIpfVxuICAgICAgICAgICAgICAgIHsvYXdhaXR9XG4gICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICB7OmVsc2UgaWYgY29udGFjdC5kZWZhdWx0X3BpY3R1cmV9XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e2NvbnRhY3QuZGVmYXVsdF9waWN0dXJlfVxuICAgICAgICAgICAgICAgIGFsdD17Y29udGFjdC5lbWFpbHNbMF0uZW1haWx9XG4gICAgICAgICAgICAgICAgZGF0YS1jeT1cImRlZmF1bHRfc2V0X2J5X3VzZXJcIiAvPlxuICAgICAgICAgICAgezplbHNlIGlmIF90aGlzLmRlZmF1bHRfcGhvdG99XG4gICAgICAgICAgICAgIHsoY29udGFjdC5kZWZhdWx0X3BpY3R1cmUgPSBfdGhpcy5kZWZhdWx0X3Bob3RvKX1cbiAgICAgICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICB7Y29udGFjdC5naXZlbl9uYW1lICYmIGNvbnRhY3Quc3VybmFtZVxuICAgICAgICAgICAgICAgICAgPyBjb250YWN0LmdpdmVuX25hbWUuY2hhckF0KDApICsgY29udGFjdC5zdXJuYW1lLmNoYXJBdCgwKVxuICAgICAgICAgICAgICAgICAgOiBjb250YWN0LmVtYWlsc1swXS5lbWFpbC5jaGFyQXQoMCl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgeyNpZiBfdGhpcy5zaG93X25hbWVzfVxuICAgICAgICAgICAgICB7I2lmIGNvbnRhY3QuZ2l2ZW5fbmFtZX17Y29udGFjdC5naXZlbl9uYW1lfXsvaWZ9XG4gICAgICAgICAgICAgIHsjaWYgY29udGFjdC5zdXJuYW1lfXtjb250YWN0LnN1cm5hbWV9ey9pZn1cbiAgICAgICAgICAgICAgeyNpZiAhY29udGFjdC5naXZlbl9uYW1lICYmICFjb250YWN0LnN1cm5hbWV9XG4gICAgICAgICAgICAgICAge2NvbnRhY3QuZW1haWxzWzBdLmVtYWlsfVxuICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgezplbHNlfXtjb250YWN0LmVtYWlsc1swXS5lbWFpbH17L2lmfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB7I2lmIF90aGlzLnNob3dfbmFtZXN9XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVtYWlsXCI+XG4gICAgICAgICAgICAgIHtjb250YWN0LmVtYWlsc1swXS5lbWFpbH1cbiAgICAgICAgICAgICAgeyNpZiBjb250YWN0LmVtYWlscy5sZW5ndGggPiAxfVxuICAgICAgICAgICAgICAgIGFuZFxuICAgICAgICAgICAgICAgIHtjb250YWN0LmVtYWlscy5sZW5ndGggLSAxfVxuICAgICAgICAgICAgICAgIG90aGVyc1xuICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgeyNpZiBjb250YWN0LnRpbWVfYWdvfVxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgY2xhc3M9XCJyZWNlbmN5XCJcbiAgICAgICAgICAgICAgY2xhc3M6bm8tbGFzdC1jb250YWN0LWRhdGE9eyFjb250YWN0Lmxhc3RfY29udGFjdGVkX2RhdGV9XG4gICAgICAgICAgICAgID57Y29udGFjdC50aW1lX2Fnb308L3NwYW4+XG4gICAgICAgICAgey9pZn1cbiAgICAgICAgPC9saT5cbiAgICAgIHsvZWFjaH1cbiAgICA8L3VsPlxuICB7L2F3YWl0fVxuPC9tYWluPlxuIl0sIm5hbWVzIjpbInJlcXVpcmUkJDAiLCJyZXF1aXJlJCQxIiwicmVxdWlyZSQkMiIsInJlcXVpcmUkJDMiLCJyZXF1aXJlJCQ0IiwicmVxdWlyZSQkNSIsInJlcXVpcmUkJDYiLCJpbml0aWFsaXplIiwiX19zcHJlYWRQcm9wcyIsIl9fc3ByZWFkVmFsdWVzIl0sIm1hcHBpbmdzIjoiK09BQWEsSUFBaUIsT0FBTyxlQUFlLE9BQU8sS0FDekQsT0FBTyxnQkFFVCxPQUFPLGVBQWUsT0FBUyxDQUFDLEtBQWlCLElBQVMsSUFDcEQsZ0JBQWUsSUFBSSxTQUdoQixJQUFlLEVBQU0sR0FBRyxJQ1BqQyxZQUFnQixFQUVoQixZQUFnQixFQUFLLEVBQUssQ0FFdEIsU0FBVyxLQUFLLEdBQ1osRUFBSSxHQUFLLEVBQUksR0FDakIsTUFBTyxHQUVYLFlBQW9CLEVBQU8sQ0FDdkIsTUFBTyxJQUFTLE1BQU8sSUFBVSxVQUFZLE1BQU8sR0FBTSxNQUFTLFdBT3ZFLFlBQWEsRUFBSSxDQUNiLE1BQU8sS0FFWCxhQUF3QixDQUNwQixNQUFPLFFBQU8sT0FBTyxNQUV6QixXQUFpQixFQUFLLENBQ2xCLEVBQUksUUFBUSxJQUVoQixZQUFxQixFQUFPLENBQ3hCLE1BQU8sT0FBTyxJQUFVLFdBRTVCLFlBQXdCLEVBQUcsRUFBRyxDQUMxQixNQUFPLElBQUssRUFBSSxHQUFLLEVBQUksSUFBTSxHQUFPLEdBQUssTUFBTyxJQUFNLFVBQWEsTUFBTyxJQUFNLFdBRXRGLEdBQUksSUFDSixZQUF1QixFQUFhLEVBQUssQ0FDckMsTUFBSyxL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
