(() => {
  var Ye = !1,
    Ze = !1,
    V = [];
  function Ft(e) {
    mn(e);
  }
  function mn(e) {
    V.includes(e) || V.push(e), hn();
  }
  function xe(e) {
    let t = V.indexOf(e);
    t !== -1 && V.splice(t, 1);
  }
  function hn() {
    !Ze && !Ye && ((Ye = !0), queueMicrotask(_n));
  }
  function _n() {
    (Ye = !1), (Ze = !0);
    for (let e = 0; e < V.length; e++) V[e]();
    (V.length = 0), (Ze = !1);
  }
  var T,
    I,
    $,
    Qe,
    Xe = !0;
  function Bt(e) {
    (Xe = !1), e(), (Xe = !0);
  }
  function Kt(e) {
    (T = e.reactive),
      ($ = e.release),
      (I = (t) =>
        e.effect(t, {
          scheduler: (r) => {
            Xe ? Ft(r) : r();
          },
        })),
      (Qe = e.raw);
  }
  function et(e) {
    I = e;
  }
  function zt(e) {
    let t = () => {};
    return [
      (n) => {
        let i = I(n);
        return (
          e._x_effects ||
            ((e._x_effects = new Set()),
            (e._x_runEffects = () => {
              e._x_effects.forEach((o) => o());
            })),
          e._x_effects.add(i),
          (t = () => {
            i !== void 0 && (e._x_effects.delete(i), $(i));
          }),
          i
        );
      },
      () => {
        t();
      },
    ];
  }
  var Vt = [],
    Ht = [],
    qt = [];
  function Ut(e) {
    qt.push(e);
  }
  function ye(e, t) {
    typeof t == "function"
      ? (e._x_cleanups || (e._x_cleanups = []), e._x_cleanups.push(t))
      : ((t = e), Ht.push(t));
  }
  function Wt(e) {
    Vt.push(e);
  }
  function Gt(e, t, r) {
    e._x_attributeCleanups || (e._x_attributeCleanups = {}),
      e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []),
      e._x_attributeCleanups[t].push(r);
  }
  function tt(e, t) {
    !e._x_attributeCleanups ||
      Object.entries(e._x_attributeCleanups).forEach(([r, n]) => {
        (t === void 0 || t.includes(r)) &&
          (n.forEach((i) => i()), delete e._x_attributeCleanups[r]);
      });
  }
  var nt = new MutationObserver(rt),
    it = !1;
  function ie() {
    nt.observe(document, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeOldValue: !0,
    }),
      (it = !0);
  }
  function ot() {
    gn(), nt.disconnect(), (it = !1);
  }
  var oe = [],
    st = !1;
  function gn() {
    (oe = oe.concat(nt.takeRecords())),
      oe.length &&
        !st &&
        ((st = !0),
        queueMicrotask(() => {
          xn(), (st = !1);
        }));
  }
  function xn() {
    rt(oe), (oe.length = 0);
  }
  function h(e) {
    if (!it) return e();
    ot();
    let t = e();
    return ie(), t;
  }
  var at = !1,
    be = [];
  function Jt() {
    at = !0;
  }
  function Yt() {
    (at = !1), rt(be), (be = []);
  }
  function rt(e) {
    if (at) {
      be = be.concat(e);
      return;
    }
    let t = [],
      r = [],
      n = new Map(),
      i = new Map();
    for (let o = 0; o < e.length; o++)
      if (
        !e[o].target._x_ignoreMutationObserver &&
        (e[o].type === "childList" &&
          (e[o].addedNodes.forEach((s) => s.nodeType === 1 && t.push(s)),
          e[o].removedNodes.forEach((s) => s.nodeType === 1 && r.push(s))),
        e[o].type === "attributes")
      ) {
        let s = e[o].target,
          a = e[o].attributeName,
          c = e[o].oldValue,
          l = () => {
            n.has(s) || n.set(s, []),
              n.get(s).push({ name: a, value: s.getAttribute(a) });
          },
          u = () => {
            i.has(s) || i.set(s, []), i.get(s).push(a);
          };
        s.hasAttribute(a) && c === null
          ? l()
          : s.hasAttribute(a)
          ? (u(), l())
          : u();
      }
    i.forEach((o, s) => {
      tt(s, o);
    }),
      n.forEach((o, s) => {
        Vt.forEach((a) => a(s, o));
      });
    for (let o of r)
      if (!t.includes(o) && (Ht.forEach((s) => s(o)), o._x_cleanups))
        for (; o._x_cleanups.length; ) o._x_cleanups.pop()();
    t.forEach((o) => {
      (o._x_ignoreSelf = !0), (o._x_ignore = !0);
    });
    for (let o of t)
      r.includes(o) ||
        !o.isConnected ||
        (delete o._x_ignoreSelf,
        delete o._x_ignore,
        qt.forEach((s) => s(o)),
        (o._x_ignore = !0),
        (o._x_ignoreSelf = !0));
    t.forEach((o) => {
      delete o._x_ignoreSelf, delete o._x_ignore;
    }),
      (t = null),
      (r = null),
      (n = null),
      (i = null);
  }
  function ve(e) {
    return j(L(e));
  }
  function M(e, t, r) {
    return (
      (e._x_dataStack = [t, ...L(r || e)]),
      () => {
        e._x_dataStack = e._x_dataStack.filter((n) => n !== t);
      }
    );
  }
  function ct(e, t) {
    let r = e._x_dataStack[0];
    Object.entries(t).forEach(([n, i]) => {
      r[n] = i;
    });
  }
  function L(e) {
    return e._x_dataStack
      ? e._x_dataStack
      : typeof ShadowRoot == "function" && e instanceof ShadowRoot
      ? L(e.host)
      : e.parentNode
      ? L(e.parentNode)
      : [];
  }
  function j(e) {
    let t = new Proxy(
      {},
      {
        ownKeys: () => Array.from(new Set(e.flatMap((r) => Object.keys(r)))),
        has: (r, n) => e.some((i) => i.hasOwnProperty(n)),
        get: (r, n) =>
          (e.find((i) => {
            if (i.hasOwnProperty(n)) {
              let o = Object.getOwnPropertyDescriptor(i, n);
              if (
                (o.get && o.get._x_alreadyBound) ||
                (o.set && o.set._x_alreadyBound)
              )
                return !0;
              if ((o.get || o.set) && o.enumerable) {
                let s = o.get,
                  a = o.set,
                  c = o;
                (s = s && s.bind(t)),
                  (a = a && a.bind(t)),
                  s && (s._x_alreadyBound = !0),
                  a && (a._x_alreadyBound = !0),
                  Object.defineProperty(i, n, { ...c, get: s, set: a });
              }
              return !0;
            }
            return !1;
          }) || {})[n],
        set: (r, n, i) => {
          let o = e.find((s) => s.hasOwnProperty(n));
          return o ? (o[n] = i) : (e[e.length - 1][n] = i), !0;
        },
      }
    );
    return t;
  }
  function we(e) {
    let t = (n) => typeof n == "object" && !Array.isArray(n) && n !== null,
      r = (n, i = "") => {
        Object.entries(Object.getOwnPropertyDescriptors(n)).forEach(
          ([o, { value: s, enumerable: a }]) => {
            if (a === !1 || s === void 0) return;
            let c = i === "" ? o : `${i}.${o}`;
            typeof s == "object" && s !== null && s._x_interceptor
              ? (n[o] = s.initialize(e, c, o))
              : t(s) && s !== n && !(s instanceof Element) && r(s, c);
          }
        );
      };
    return r(e);
  }
  function Ee(e, t = () => {}) {
    let r = {
      initialValue: void 0,
      _x_interceptor: !0,
      initialize(n, i, o) {
        return e(
          this.initialValue,
          () => yn(n, i),
          (s) => lt(n, i, s),
          i,
          o
        );
      },
    };
    return (
      t(r),
      (n) => {
        if (typeof n == "object" && n !== null && n._x_interceptor) {
          let i = r.initialize.bind(r);
          r.initialize = (o, s, a) => {
            let c = n.initialize(o, s, a);
            return (r.initialValue = c), i(o, s, a);
          };
        } else r.initialValue = n;
        return r;
      }
    );
  }
  function yn(e, t) {
    return t.split(".").reduce((r, n) => r[n], e);
  }
  function lt(e, t, r) {
    if ((typeof t == "string" && (t = t.split(".")), t.length === 1))
      e[t[0]] = r;
    else {
      if (t.length === 0) throw error;
      return e[t[0]] || (e[t[0]] = {}), lt(e[t[0]], t.slice(1), r);
    }
  }
  var Zt = {};
  function y(e, t) {
    Zt[e] = t;
  }
  function se(e, t) {
    return (
      Object.entries(Zt).forEach(([r, n]) => {
        Object.defineProperty(e, `$${r}`, {
          get() {
            let [i, o] = ut(t);
            return (i = { interceptor: Ee, ...i }), ye(t, o), n(t, i);
          },
          enumerable: !1,
        });
      }),
      e
    );
  }
  function Qt(e, t, r, ...n) {
    try {
      return r(...n);
    } catch (i) {
      Z(i, e, t);
    }
  }
  function Z(e, t, r = void 0) {
    Object.assign(e, { el: t, expression: r }),
      console.warn(
        `Alpine Expression Error: ${e.message}

${
  r
    ? 'Expression: "' +
      r +
      `"

`
    : ""
}`,
        t
      ),
      setTimeout(() => {
        throw e;
      }, 0);
  }
  var Se = !0;
  function Xt(e) {
    let t = Se;
    (Se = !1), e(), (Se = t);
  }
  function P(e, t, r = {}) {
    let n;
    return x(e, t)((i) => (n = i), r), n;
  }
  function x(...e) {
    return er(...e);
  }
  var er = ft;
  function tr(e) {
    er = e;
  }
  function ft(e, t) {
    let r = {};
    se(r, e);
    let n = [r, ...L(e)];
    if (typeof t == "function") return bn(n, t);
    let i = vn(n, t, e);
    return Qt.bind(null, e, t, i);
  }
  function bn(e, t) {
    return (r = () => {}, { scope: n = {}, params: i = [] } = {}) => {
      let o = t.apply(j([n, ...e]), i);
      Ae(r, o);
    };
  }
  var dt = {};
  function wn(e, t) {
    if (dt[e]) return dt[e];
    let r = Object.getPrototypeOf(async function () {}).constructor,
      n =
        /^[\n\s]*if.*\(.*\)/.test(e) || /^(let|const)\s/.test(e)
          ? `(async()=>{ ${e} })()`
          : e,
      o = (() => {
        try {
          return new r(
            ["__self", "scope"],
            `with (scope) { __self.result = ${n} }; __self.finished = true; return __self.result;`
          );
        } catch (s) {
          return Z(s, t, e), Promise.resolve();
        }
      })();
    return (dt[e] = o), o;
  }
  function vn(e, t, r) {
    let n = wn(t, r);
    return (i = () => {}, { scope: o = {}, params: s = [] } = {}) => {
      (n.result = void 0), (n.finished = !1);
      let a = j([o, ...e]);
      if (typeof n == "function") {
        let c = n(n, a).catch((l) => Z(l, r, t));
        n.finished
          ? (Ae(i, n.result, a, s, r), (n.result = void 0))
          : c
              .then((l) => {
                Ae(i, l, a, s, r);
              })
              .catch((l) => Z(l, r, t))
              .finally(() => (n.result = void 0));
      }
    };
  }
  function Ae(e, t, r, n, i) {
    if (Se && typeof t == "function") {
      let o = t.apply(r, n);
      o instanceof Promise
        ? o.then((s) => Ae(e, s, r, n)).catch((s) => Z(s, i, t))
        : e(o);
    } else
      typeof t == "object" && t instanceof Promise ? t.then((o) => e(o)) : e(t);
  }
  var pt = "x-";
  function S(e = "") {
    return pt + e;
  }
  function rr(e) {
    pt = e;
  }
  var mt = {};
  function p(e, t) {
    return (
      (mt[e] = t),
      {
        before(r) {
          if (!mt[r]) {
            console.warn(
              "Cannot find directive `${directive}`. `${name}` will use the default order of execution"
            );
            return;
          }
          let n = H.indexOf(r) ?? H.indexOf("DEFAULT");
          n >= 0 && H.splice(n, 0, e);
        },
      }
    );
  }
  function ae(e, t, r) {
    if (((t = Array.from(t)), e._x_virtualDirectives)) {
      let o = Object.entries(e._x_virtualDirectives).map(([a, c]) => ({
          name: a,
          value: c,
        })),
        s = ht(o);
      (o = o.map((a) =>
        s.find((c) => c.name === a.name)
          ? { name: `x-bind:${a.name}`, value: `"${a.value}"` }
          : a
      )),
        (t = t.concat(o));
    }
    let n = {};
    return t
      .map(nr((o, s) => (n[o] = s)))
      .filter(ir)
      .map(Sn(n, r))
      .sort(An)
      .map((o) => En(e, o));
  }
  function ht(e) {
    return Array.from(e)
      .map(nr())
      .filter((t) => !ir(t));
  }
  var _t = !1,
    ce = new Map(),
    or = Symbol();
  function sr(e) {
    _t = !0;
    let t = Symbol();
    (or = t), ce.set(t, []);
    let r = () => {
        for (; ce.get(t).length; ) ce.get(t).shift()();
        ce.delete(t);
      },
      n = () => {
        (_t = !1), r();
      };
    e(r), n();
  }
  function ut(e) {
    let t = [],
      r = (a) => t.push(a),
      [n, i] = zt(e);
    return (
      t.push(i),
      [
        {
          Alpine: F,
          effect: n,
          cleanup: r,
          evaluateLater: x.bind(x, e),
          evaluate: P.bind(P, e),
        },
        () => t.forEach((a) => a()),
      ]
    );
  }
  function En(e, t) {
    let r = () => {},
      n = mt[t.type] || r,
      [i, o] = ut(e);
    Gt(e, t.original, o);
    let s = () => {
      e._x_ignore ||
        e._x_ignoreSelf ||
        (n.inline && n.inline(e, t, i),
        (n = n.bind(n, e, t, i)),
        _t ? ce.get(or).push(n) : n());
    };
    return (s.runCleanups = o), s;
  }
  var Oe =
      (e, t) =>
      ({ name: r, value: n }) => (
        r.startsWith(e) && (r = r.replace(e, t)), { name: r, value: n }
      ),
    Te = (e) => e;
  function nr(e = () => {}) {
    return ({ name: t, value: r }) => {
      let { name: n, value: i } = ar.reduce((o, s) => s(o), {
        name: t,
        value: r,
      });
      return n !== t && e(n, t), { name: n, value: i };
    };
  }
  var ar = [];
  function Q(e) {
    ar.push(e);
  }
  function ir({ name: e }) {
    return cr().test(e);
  }
  var cr = () => new RegExp(`^${pt}([^:^.]+)\\b`);
  function Sn(e, t) {
    return ({ name: r, value: n }) => {
      let i = r.match(cr()),
        o = r.match(/:([a-zA-Z0-9\-:]+)/),
        s = r.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
        a = t || e[r] || r;
      return {
        type: i ? i[1] : null,
        value: o ? o[1] : null,
        modifiers: s.map((c) => c.replace(".", "")),
        expression: n,
        original: a,
      };
    };
  }
  var gt = "DEFAULT",
    H = [
      "ignore",
      "ref",
      "data",
      "id",
      "radio",
      "tabs",
      "switch",
      "disclosure",
      "menu",
      "listbox",
      "combobox",
      "bind",
      "init",
      "for",
      "mask",
      "model",
      "modelable",
      "transition",
      "show",
      "if",
      gt,
      "teleport",
    ];
  function An(e, t) {
    let r = H.indexOf(e.type) === -1 ? gt : e.type,
      n = H.indexOf(t.type) === -1 ? gt : t.type;
    return H.indexOf(r) - H.indexOf(n);
  }
  function q(e, t, r = {}) {
    e.dispatchEvent(
      new CustomEvent(t, {
        detail: r,
        bubbles: !0,
        composed: !0,
        cancelable: !0,
      })
    );
  }
  function A(e, t) {
    if (typeof ShadowRoot == "function" && e instanceof ShadowRoot) {
      Array.from(e.children).forEach((i) => A(i, t));
      return;
    }
    let r = !1;
    if ((t(e, () => (r = !0)), r)) return;
    let n = e.firstElementChild;
    for (; n; ) A(n, t, !1), (n = n.nextElementSibling);
  }
  function C(e, ...t) {
    console.warn(`Alpine Warning: ${e}`, ...t);
  }
  function ur() {
    document.body ||
      C(
        "Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"
      ),
      q(document, "alpine:init"),
      q(document, "alpine:initializing"),
      ie(),
      Ut((t) => E(t, A)),
      ye((t) => xt(t)),
      Wt((t, r) => {
        ae(t, r).forEach((n) => n());
      });
    let e = (t) => !U(t.parentElement, !0);
    Array.from(document.querySelectorAll(lr()))
      .filter(e)
      .forEach((t) => {
        E(t);
      }),
      q(document, "alpine:initialized");
  }
  var yt = [],
    fr = [];
  function dr() {
    return yt.map((e) => e());
  }
  function lr() {
    return yt.concat(fr).map((e) => e());
  }
  function Ce(e) {
    yt.push(e);
  }
  function Re(e) {
    fr.push(e);
  }
  function U(e, t = !1) {
    return X(e, (r) => {
      if ((t ? lr() : dr()).some((i) => r.matches(i))) return !0;
    });
  }
  function X(e, t) {
    if (!!e) {
      if (t(e)) return e;
      if ((e._x_teleportBack && (e = e._x_teleportBack), !!e.parentElement))
        return X(e.parentElement, t);
    }
  }
  function pr(e) {
    return dr().some((t) => e.matches(t));
  }
  var mr = [];
  function hr(e) {
    mr.push(e);
  }
  function E(e, t = A, r = () => {}) {
    sr(() => {
      t(e, (n, i) => {
        r(n, i),
          mr.forEach((o) => o(n, i)),
          ae(n, n.attributes).forEach((o) => o()),
          n._x_ignore && i();
      });
    });
  }
  function xt(e) {
    A(e, (t) => tt(t));
  }
  var bt = [],
    vt = !1;
  function ee(e = () => {}) {
    return (
      queueMicrotask(() => {
        vt ||
          setTimeout(() => {
            Me();
          });
      }),
      new Promise((t) => {
        bt.push(() => {
          e(), t();
        });
      })
    );
  }
  function Me() {
    for (vt = !1; bt.length; ) bt.shift()();
  }
  function _r() {
    vt = !0;
  }
  function le(e, t) {
    return Array.isArray(t)
      ? gr(e, t.join(" "))
      : typeof t == "object" && t !== null
      ? On(e, t)
      : typeof t == "function"
      ? le(e, t())
      : gr(e, t);
  }
  function gr(e, t) {
    let r = (o) => o.split(" ").filter(Boolean),
      n = (o) =>
        o
          .split(" ")
          .filter((s) => !e.classList.contains(s))
          .filter(Boolean),
      i = (o) => (
        e.classList.add(...o),
        () => {
          e.classList.remove(...o);
        }
      );
    return (t = t === !0 ? (t = "") : t || ""), i(n(t));
  }
  function On(e, t) {
    let r = (a) => a.split(" ").filter(Boolean),
      n = Object.entries(t)
        .flatMap(([a, c]) => (c ? r(a) : !1))
        .filter(Boolean),
      i = Object.entries(t)
        .flatMap(([a, c]) => (c ? !1 : r(a)))
        .filter(Boolean),
      o = [],
      s = [];
    return (
      i.forEach((a) => {
        e.classList.contains(a) && (e.classList.remove(a), s.push(a));
      }),
      n.forEach((a) => {
        e.classList.contains(a) || (e.classList.add(a), o.push(a));
      }),
      () => {
        s.forEach((a) => e.classList.add(a)),
          o.forEach((a) => e.classList.remove(a));
      }
    );
  }
  function W(e, t) {
    return typeof t == "object" && t !== null ? Tn(e, t) : Cn(e, t);
  }
  function Tn(e, t) {
    let r = {};
    return (
      Object.entries(t).forEach(([n, i]) => {
        (r[n] = e.style[n]),
          n.startsWith("--") || (n = Rn(n)),
          e.style.setProperty(n, i);
      }),
      setTimeout(() => {
        e.style.length === 0 && e.removeAttribute("style");
      }),
      () => {
        W(e, r);
      }
    );
  }
  function Cn(e, t) {
    let r = e.getAttribute("style", t);
    return (
      e.setAttribute("style", t),
      () => {
        e.setAttribute("style", r || "");
      }
    );
  }
  function Rn(e) {
    return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }
  function ue(e, t = () => {}) {
    let r = !1;
    return function () {
      r ? t.apply(this, arguments) : ((r = !0), e.apply(this, arguments));
    };
  }
  p(
    "transition",
    (e, { value: t, modifiers: r, expression: n }, { evaluate: i }) => {
      typeof n == "function" && (n = i(n)), n ? Mn(e, n, t) : Nn(e, r, t);
    }
  );
  function Mn(e, t, r) {
    xr(e, le, ""),
      {
        enter: (i) => {
          e._x_transition.enter.during = i;
        },
        "enter-start": (i) => {
          e._x_transition.enter.start = i;
        },
        "enter-end": (i) => {
          e._x_transition.enter.end = i;
        },
        leave: (i) => {
          e._x_transition.leave.during = i;
        },
        "leave-start": (i) => {
          e._x_transition.leave.start = i;
        },
        "leave-end": (i) => {
          e._x_transition.leave.end = i;
        },
      }[r](t);
  }
  function Nn(e, t, r) {
    xr(e, W);
    let n = !t.includes("in") && !t.includes("out") && !r,
      i = n || t.includes("in") || ["enter"].includes(r),
      o = n || t.includes("out") || ["leave"].includes(r);
    t.includes("in") && !n && (t = t.filter((_, b) => b < t.indexOf("out"))),
      t.includes("out") && !n && (t = t.filter((_, b) => b > t.indexOf("out")));
    let s = !t.includes("opacity") && !t.includes("scale"),
      a = s || t.includes("opacity"),
      c = s || t.includes("scale"),
      l = a ? 0 : 1,
      u = c ? fe(t, "scale", 95) / 100 : 1,
      d = fe(t, "delay", 0),
      m = fe(t, "origin", "center"),
      v = "opacity, transform",
      k = fe(t, "duration", 150) / 1e3,
      _e = fe(t, "duration", 75) / 1e3,
      f = "cubic-bezier(0.4, 0.0, 0.2, 1)";
    i &&
      ((e._x_transition.enter.during = {
        transformOrigin: m,
        transitionDelay: d,
        transitionProperty: v,
        transitionDuration: `${k}s`,
        transitionTimingFunction: f,
      }),
      (e._x_transition.enter.start = { opacity: l, transform: `scale(${u})` }),
      (e._x_transition.enter.end = { opacity: 1, transform: "scale(1)" })),
      o &&
        ((e._x_transition.leave.during = {
          transformOrigin: m,
          transitionDelay: d,
          transitionProperty: v,
          transitionDuration: `${_e}s`,
          transitionTimingFunction: f,
        }),
        (e._x_transition.leave.start = { opacity: 1, transform: "scale(1)" }),
        (e._x_transition.leave.end = { opacity: l, transform: `scale(${u})` }));
  }
  function xr(e, t, r = {}) {
    e._x_transition ||
      (e._x_transition = {
        enter: { during: r, start: r, end: r },
        leave: { during: r, start: r, end: r },
        in(n = () => {}, i = () => {}) {
          Ne(
            e,
            t,
            {
              during: this.enter.during,
              start: this.enter.start,
              end: this.enter.end,
            },
            n,
            i
          );
        },
        out(n = () => {}, i = () => {}) {
          Ne(
            e,
            t,
            {
              during: this.leave.during,
              start: this.leave.start,
              end: this.leave.end,
            },
            n,
            i
          );
        },
      });
  }
  window.Element.prototype._x_toggleAndCascadeWithTransitions = function (
    e,
    t,
    r,
    n
  ) {
    let i =
        document.visibilityState === "visible"
          ? requestAnimationFrame
          : setTimeout,
      o = () => i(r);
    if (t) {
      e._x_transition && (e._x_transition.enter || e._x_transition.leave)
        ? e._x_transition.enter &&
          (Object.entries(e._x_transition.enter.during).length ||
            Object.entries(e._x_transition.enter.start).length ||
            Object.entries(e._x_transition.enter.end).length)
          ? e._x_transition.in(r)
          : o()
        : e._x_transition
        ? e._x_transition.in(r)
        : o();
      return;
    }
    (e._x_hidePromise = e._x_transition
      ? new Promise((s, a) => {
          e._x_transition.out(
            () => {},
            () => s(n)
          ),
            e._x_transitioning.beforeCancel(() =>
              a({ isFromCancelledTransition: !0 })
            );
        })
      : Promise.resolve(n)),
      queueMicrotask(() => {
        let s = yr(e);
        s
          ? (s._x_hideChildren || (s._x_hideChildren = []),
            s._x_hideChildren.push(e))
          : i(() => {
              let a = (c) => {
                let l = Promise.all([
                  c._x_hidePromise,
                  ...(c._x_hideChildren || []).map(a),
                ]).then(([u]) => u());
                return delete c._x_hidePromise, delete c._x_hideChildren, l;
              };
              a(e).catch((c) => {
                if (!c.isFromCancelledTransition) throw c;
              });
            });
      });
  };
  function yr(e) {
    let t = e.parentNode;
    if (!!t) return t._x_hidePromise ? t : yr(t);
  }
  function Ne(
    e,
    t,
    { during: r, start: n, end: i } = {},
    o = () => {},
    s = () => {}
  ) {
    if (
      (e._x_transitioning && e._x_transitioning.cancel(),
      Object.keys(r).length === 0 &&
        Object.keys(n).length === 0 &&
        Object.keys(i).length === 0)
    ) {
      o(), s();
      return;
    }
    let a, c, l;
    Dn(e, {
      start() {
        a = t(e, n);
      },
      during() {
        c = t(e, r);
      },
      before: o,
      end() {
        a(), (l = t(e, i));
      },
      after: s,
      cleanup() {
        c(), l();
      },
    });
  }
  function Dn(e, t) {
    let r,
      n,
      i,
      o = ue(() => {
        h(() => {
          (r = !0),
            n || t.before(),
            i || (t.end(), Me()),
            t.after(),
            e.isConnected && t.cleanup(),
            delete e._x_transitioning;
        });
      });
    (e._x_transitioning = {
      beforeCancels: [],
      beforeCancel(s) {
        this.beforeCancels.push(s);
      },
      cancel: ue(function () {
        for (; this.beforeCancels.length; ) this.beforeCancels.shift()();
        o();
      }),
      finish: o,
    }),
      h(() => {
        t.start(), t.during();
      }),
      _r(),
      requestAnimationFrame(() => {
        if (r) return;
        let s =
            Number(
              getComputedStyle(e)
                .transitionDuration.replace(/,.*/, "")
                .replace("s", "")
            ) * 1e3,
          a =
            Number(
              getComputedStyle(e)
                .transitionDelay.replace(/,.*/, "")
                .replace("s", "")
            ) * 1e3;
        s === 0 &&
          (s =
            Number(getComputedStyle(e).animationDuration.replace("s", "")) *
            1e3),
          h(() => {
            t.before();
          }),
          (n = !0),
          requestAnimationFrame(() => {
            r ||
              (h(() => {
                t.end();
              }),
              Me(),
              setTimeout(e._x_transitioning.finish, s + a),
              (i = !0));
          });
      });
  }
  function fe(e, t, r) {
    if (e.indexOf(t) === -1) return r;
    let n = e[e.indexOf(t) + 1];
    if (!n || (t === "scale" && isNaN(n))) return r;
    if (t === "duration") {
      let i = n.match(/([0-9]+)ms/);
      if (i) return i[1];
    }
    return t === "origin" &&
      ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2])
      ? [n, e[e.indexOf(t) + 2]].join(" ")
      : n;
  }
  var De = !1;
  function N(e, t = () => {}) {
    return (...r) => (De ? t(...r) : e(...r));
  }
  function br(e) {
    return (...t) => De && e(...t);
  }
  function vr(e, t) {
    t._x_dataStack || (t._x_dataStack = e._x_dataStack),
      (De = !0),
      Pn(() => {
        In(t);
      }),
      (De = !1);
  }
  function In(e) {
    let t = !1;
    E(e, (n, i) => {
      A(n, (o, s) => {
        if (t && pr(o)) return s();
        (t = !0), i(o, s);
      });
    });
  }
  function Pn(e) {
    let t = I;
    et((r, n) => {
      let i = t(r);
      return $(i), () => {};
    }),
      e(),
      et(t);
  }
  function de(e, t, r, n = []) {
    switch (
      (e._x_bindings || (e._x_bindings = T({})),
      (e._x_bindings[t] = r),
      (t = n.includes("camel") ? Fn(t) : t),
      t)
    ) {
      case "value":
        kn(e, r);
        break;
      case "style":
        Ln(e, r);
        break;
      case "class":
        $n(e, r);
        break;
      default:
        jn(e, t, r);
        break;
    }
  }
  function kn(e, t) {
    if (e.type === "radio")
      e.attributes.value === void 0 && (e.value = t),
        window.fromModel && (e.checked = wr(e.value, t));
    else if (e.type === "checkbox")
      Number.isInteger(t)
        ? (e.value = t)
        : !Number.isInteger(t) &&
          !Array.isArray(t) &&
          typeof t != "boolean" &&
          ![null, void 0].includes(t)
        ? (e.value = String(t))
        : Array.isArray(t)
        ? (e.checked = t.some((r) => wr(r, e.value)))
        : (e.checked = !!t);
    else if (e.tagName === "SELECT") Bn(e, t);
    else {
      if (e.value === t) return;
      e.value = t;
    }
  }
  function $n(e, t) {
    e._x_undoAddedClasses && e._x_undoAddedClasses(),
      (e._x_undoAddedClasses = le(e, t));
  }
  function Ln(e, t) {
    e._x_undoAddedStyles && e._x_undoAddedStyles(),
      (e._x_undoAddedStyles = W(e, t));
  }
  function jn(e, t, r) {
    [null, void 0, !1].includes(r) && zn(t)
      ? e.removeAttribute(t)
      : (Er(t) && (r = t), Kn(e, t, r));
  }
  function Kn(e, t, r) {
    e.getAttribute(t) != r && e.setAttribute(t, r);
  }
  function Bn(e, t) {
    let r = [].concat(t).map((n) => n + "");
    Array.from(e.options).forEach((n) => {
      n.selected = r.includes(n.value);
    });
  }
  function Fn(e) {
    return e.toLowerCase().replace(/-(\w)/g, (t, r) => r.toUpperCase());
  }
  function wr(e, t) {
    return e == t;
  }
  function Er(e) {
    return [
      "disabled",
      "checked",
      "required",
      "readonly",
      "hidden",
      "open",
      "selected",
      "autofocus",
      "itemscope",
      "multiple",
      "novalidate",
      "allowfullscreen",
      "allowpaymentrequest",
      "formnovalidate",
      "autoplay",
      "controls",
      "loop",
      "muted",
      "playsinline",
      "default",
      "ismap",
      "reversed",
      "async",
      "defer",
      "nomodule",
    ].includes(e);
  }
  function zn(e) {
    return ![
      "aria-pressed",
      "aria-checked",
      "aria-expanded",
      "aria-selected",
    ].includes(e);
  }
  function Sr(e, t, r) {
    if (e._x_bindings && e._x_bindings[t] !== void 0) return e._x_bindings[t];
    let n = e.getAttribute(t);
    return n === null
      ? typeof r == "function"
        ? r()
        : r
      : n === ""
      ? !0
      : Er(t)
      ? !![t, "true"].includes(n)
      : n;
  }
  function Ie(e, t) {
    var r;
    return function () {
      var n = this,
        i = arguments,
        o = function () {
          (r = null), e.apply(n, i);
        };
      clearTimeout(r), (r = setTimeout(o, t));
    };
  }
  function Pe(e, t) {
    let r;
    return function () {
      let n = this,
        i = arguments;
      r || (e.apply(n, i), (r = !0), setTimeout(() => (r = !1), t));
    };
  }
  function Ar(e) {
    e(F);
  }
  var G = {},
    Or = !1;
  function Tr(e, t) {
    if ((Or || ((G = T(G)), (Or = !0)), t === void 0)) return G[e];
    (G[e] = t),
      typeof t == "object" &&
        t !== null &&
        t.hasOwnProperty("init") &&
        typeof t.init == "function" &&
        G[e].init(),
      we(G[e]);
  }
  function Cr() {
    return G;
  }
  var Rr = {};
  function Mr(e, t) {
    let r = typeof t != "function" ? () => t : t;
    e instanceof Element ? wt(e, r()) : (Rr[e] = r);
  }
  function Nr(e) {
    return (
      Object.entries(Rr).forEach(([t, r]) => {
        Object.defineProperty(e, t, {
          get() {
            return (...n) => r(...n);
          },
        });
      }),
      e
    );
  }
  function wt(e, t, r) {
    let n = [];
    for (; n.length; ) n.pop()();
    let i = Object.entries(t).map(([s, a]) => ({ name: s, value: a })),
      o = ht(i);
    (i = i.map((s) =>
      o.find((a) => a.name === s.name)
        ? { name: `x-bind:${s.name}`, value: `"${s.value}"` }
        : s
    )),
      ae(e, i, r).map((s) => {
        n.push(s.runCleanups), s();
      });
  }
  var Dr = {};
  function Ir(e, t) {
    Dr[e] = t;
  }
  function Pr(e, t) {
    return (
      Object.entries(Dr).forEach(([r, n]) => {
        Object.defineProperty(e, r, {
          get() {
            return (...i) => n.bind(t)(...i);
          },
          enumerable: !1,
        });
      }),
      e
    );
  }
  var Vn = {
      get reactive() {
        return T;
      },
      get release() {
        return $;
      },
      get effect() {
        return I;
      },
      get raw() {
        return Qe;
      },
      version: "3.11.1",
      flushAndStopDeferringMutations: Yt,
      dontAutoEvaluateFunctions: Xt,
      disableEffectScheduling: Bt,
      startObservingMutations: ie,
      stopObservingMutations: ot,
      setReactivityEngine: Kt,
      closestDataStack: L,
      skipDuringClone: N,
      onlyDuringClone: br,
      addRootSelector: Ce,
      addInitSelector: Re,
      addScopeToNode: M,
      deferMutations: Jt,
      mapAttributes: Q,
      evaluateLater: x,
      interceptInit: hr,
      setEvaluator: tr,
      mergeProxies: j,
      findClosest: X,
      closestRoot: U,
      destroyTree: xt,
      interceptor: Ee,
      transition: Ne,
      setStyles: W,
      mutateDom: h,
      directive: p,
      throttle: Pe,
      debounce: Ie,
      evaluate: P,
      initTree: E,
      nextTick: ee,
      prefixed: S,
      prefix: rr,
      plugin: Ar,
      magic: y,
      store: Tr,
      start: ur,
      clone: vr,
      bound: Sr,
      $data: ve,
      walk: A,
      data: Ir,
      bind: Mr,
    },
    F = Vn;
  function Et(e, t) {
    let r = Object.create(null),
      n = e.split(",");
    for (let i = 0; i < n.length; i++) r[n[i]] = !0;
    return t ? (i) => !!r[i.toLowerCase()] : (i) => !!r[i];
  }
  var cs = {
      [1]: "TEXT",
      [2]: "CLASS",
      [4]: "STYLE",
      [8]: "PROPS",
      [16]: "FULL_PROPS",
      [32]: "HYDRATE_EVENTS",
      [64]: "STABLE_FRAGMENT",
      [128]: "KEYED_FRAGMENT",
      [256]: "UNKEYED_FRAGMENT",
      [512]: "NEED_PATCH",
      [1024]: "DYNAMIC_SLOTS",
      [2048]: "DEV_ROOT_FRAGMENT",
      [-1]: "HOISTED",
      [-2]: "BAIL",
    },
    ls = { [1]: "STABLE", [2]: "DYNAMIC", [3]: "FORWARDED" };
  var Hn =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
  var us = Et(
    Hn +
      ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
  );
  var kr = Object.freeze({}),
    fs = Object.freeze([]);
  var St = Object.assign;
  var qn = Object.prototype.hasOwnProperty,
    pe = (e, t) => qn.call(e, t),
    B = Array.isArray,
    te = (e) => $r(e) === "[object Map]";
  var Un = (e) => typeof e == "string",
    ke = (e) => typeof e == "symbol",
    me = (e) => e !== null && typeof e == "object";
  var Wn = Object.prototype.toString,
    $r = (e) => Wn.call(e),
    At = (e) => $r(e).slice(8, -1);
  var $e = (e) =>
    Un(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e;
  var Le = (e) => {
      let t = Object.create(null);
      return (r) => t[r] || (t[r] = e(r));
    },
    Gn = /-(\w)/g,
    ds = Le((e) => e.replace(Gn, (t, r) => (r ? r.toUpperCase() : ""))),
    Jn = /\B([A-Z])/g,
    ps = Le((e) => e.replace(Jn, "-$1").toLowerCase()),
    Ot = Le((e) => e.charAt(0).toUpperCase() + e.slice(1)),
    ms = Le((e) => (e ? `on${Ot(e)}` : "")),
    Tt = (e, t) => e !== t && (e === e || t === t);
  var Ct = new WeakMap(),
    he = [],
    D,
    J = Symbol("iterate"),
    Rt = Symbol("Map key iterate");
  function Yn(e) {
    return e && e._isEffect === !0;
  }
  function Lr(e, t = kr) {
    Yn(e) && (e = e.raw);
    let r = Zn(e, t);
    return t.lazy || r(), r;
  }
  function Fr(e) {
    e.active &&
      (jr(e), e.options.onStop && e.options.onStop(), (e.active = !1));
  }
  var Qn = 0;
  function Zn(e, t) {
    let r = function () {
      if (!r.active) return e();
      if (!he.includes(r)) {
        jr(r);
        try {
          return Xn(), he.push(r), (D = r), e();
        } finally {
          he.pop(), Br(), (D = he[he.length - 1]);
        }
      }
    };
    return (
      (r.id = Qn++),
      (r.allowRecurse = !!t.allowRecurse),
      (r._isEffect = !0),
      (r.active = !0),
      (r.raw = e),
      (r.deps = []),
      (r.options = t),
      r
    );
  }
  function jr(e) {
    let { deps: t } = e;
    if (t.length) {
      for (let r = 0; r < t.length; r++) t[r].delete(e);
      t.length = 0;
    }
  }
  var re = !0,
    Mt = [];
  function ei() {
    Mt.push(re), (re = !1);
  }
  function Xn() {
    Mt.push(re), (re = !0);
  }
  function Br() {
    let e = Mt.pop();
    re = e === void 0 ? !0 : e;
  }
  function R(e, t, r) {
    if (!re || D === void 0) return;
    let n = Ct.get(e);
    n || Ct.set(e, (n = new Map()));
    let i = n.get(r);
    i || n.set(r, (i = new Set())),
      i.has(D) ||
        (i.add(D),
        D.deps.push(i),
        D.options.onTrack &&
          D.options.onTrack({ effect: D, target: e, type: t, key: r }));
  }
  function K(e, t, r, n, i, o) {
    let s = Ct.get(e);
    if (!s) return;
    let a = new Set(),
      c = (u) => {
        u &&
          u.forEach((d) => {
            (d !== D || d.allowRecurse) && a.add(d);
          });
      };
    if (t === "clear") s.forEach(c);
    else if (r === "length" && B(e))
      s.forEach((u, d) => {
        (d === "length" || d >= n) && c(u);
      });
    else
      switch ((r !== void 0 && c(s.get(r)), t)) {
        case "add":
          B(e)
            ? $e(r) && c(s.get("length"))
            : (c(s.get(J)), te(e) && c(s.get(Rt)));
          break;
        case "delete":
          B(e) || (c(s.get(J)), te(e) && c(s.get(Rt)));
          break;
        case "set":
          te(e) && c(s.get(J));
          break;
      }
    let l = (u) => {
      u.options.onTrigger &&
        u.options.onTrigger({
          effect: u,
          target: e,
          key: r,
          type: t,
          newValue: n,
          oldValue: i,
          oldTarget: o,
        }),
        u.options.scheduler ? u.options.scheduler(u) : u();
    };
    a.forEach(l);
  }
  var ti = Et("__proto__,__v_isRef,__isVue"),
    Kr = new Set(
      Object.getOwnPropertyNames(Symbol)
        .map((e) => Symbol[e])
        .filter(ke)
    ),
    ri = je(),
    ni = je(!1, !0),
    ii = je(!0),
    oi = je(!0, !0),
    Fe = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    let t = Array.prototype[e];
    Fe[e] = function (...r) {
      let n = g(this);
      for (let o = 0, s = this.length; o < s; o++) R(n, "get", o + "");
      let i = t.apply(n, r);
      return i === -1 || i === !1 ? t.apply(n, r.map(g)) : i;
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    let t = Array.prototype[e];
    Fe[e] = function (...r) {
      ei();
      let n = t.apply(this, r);
      return Br(), n;
    };
  });
  function je(e = !1, t = !1) {
    return function (n, i, o) {
      if (i === "__v_isReactive") return !e;
      if (i === "__v_isReadonly") return e;
      if (i === "__v_raw" && o === (e ? (t ? ai : Vr) : t ? si : zr).get(n))
        return n;
      let s = B(n);
      if (!e && s && pe(Fe, i)) return Reflect.get(Fe, i, o);
      let a = Reflect.get(n, i, o);
      return (ke(i) ? Kr.has(i) : ti(i)) || (e || R(n, "get", i), t)
        ? a
        : Nt(a)
        ? !s || !$e(i)
          ? a.value
          : a
        : me(a)
        ? e
          ? Hr(a)
          : Be(a)
        : a;
    };
  }
  var ci = qr(),
    li = qr(!0);
  function qr(e = !1) {
    return function (r, n, i, o) {
      let s = r[n];
      if (!e && ((i = g(i)), (s = g(s)), !B(r) && Nt(s) && !Nt(i)))
        return (s.value = i), !0;
      let a = B(r) && $e(n) ? Number(n) < r.length : pe(r, n),
        c = Reflect.set(r, n, i, o);
      return (
        r === g(o) &&
          (a ? Tt(i, s) && K(r, "set", n, i, s) : K(r, "add", n, i)),
        c
      );
    };
  }
  function ui(e, t) {
    let r = pe(e, t),
      n = e[t],
      i = Reflect.deleteProperty(e, t);
    return i && r && K(e, "delete", t, void 0, n), i;
  }
  function fi(e, t) {
    let r = Reflect.has(e, t);
    return (!ke(t) || !Kr.has(t)) && R(e, "has", t), r;
  }
  function di(e) {
    return R(e, "iterate", B(e) ? "length" : J), Reflect.ownKeys(e);
  }
  var Ur = { get: ri, set: ci, deleteProperty: ui, has: fi, ownKeys: di },
    Wr = {
      get: ii,
      set(e, t) {
        return (
          console.warn(
            `Set operation on key "${String(t)}" failed: target is readonly.`,
            e
          ),
          !0
        );
      },
      deleteProperty(e, t) {
        return (
          console.warn(
            `Delete operation on key "${String(
              t
            )}" failed: target is readonly.`,
            e
          ),
          !0
        );
      },
    },
    bs = St({}, Ur, { get: ni, set: li }),
    vs = St({}, Wr, { get: oi }),
    Dt = (e) => (me(e) ? Be(e) : e),
    It = (e) => (me(e) ? Hr(e) : e),
    Pt = (e) => e,
    Ke = (e) => Reflect.getPrototypeOf(e);
  function ze(e, t, r = !1, n = !1) {
    e = e.__v_raw;
    let i = g(e),
      o = g(t);
    t !== o && !r && R(i, "get", t), !r && R(i, "get", o);
    let { has: s } = Ke(i),
      a = n ? Pt : r ? It : Dt;
    if (s.call(i, t)) return a(e.get(t));
    if (s.call(i, o)) return a(e.get(o));
    e !== i && e.get(t);
  }
  function Ve(e, t = !1) {
    let r = this.__v_raw,
      n = g(r),
      i = g(e);
    return (
      e !== i && !t && R(n, "has", e),
      !t && R(n, "has", i),
      e === i ? r.has(e) : r.has(e) || r.has(i)
    );
  }
  function He(e, t = !1) {
    return (
      (e = e.__v_raw), !t && R(g(e), "iterate", J), Reflect.get(e, "size", e)
    );
  }
  function Gr(e) {
    e = g(e);
    let t = g(this);
    return Ke(t).has.call(t, e) || (t.add(e), K(t, "add", e, e)), this;
  }
  function Yr(e, t) {
    t = g(t);
    let r = g(this),
      { has: n, get: i } = Ke(r),
      o = n.call(r, e);
    o ? Jr(r, n, e) : ((e = g(e)), (o = n.call(r, e)));
    let s = i.call(r, e);
    return (
      r.set(e, t),
      o ? Tt(t, s) && K(r, "set", e, t, s) : K(r, "add", e, t),
      this
    );
  }
  function Zr(e) {
    let t = g(this),
      { has: r, get: n } = Ke(t),
      i = r.call(t, e);
    i ? Jr(t, r, e) : ((e = g(e)), (i = r.call(t, e)));
    let o = n ? n.call(t, e) : void 0,
      s = t.delete(e);
    return i && K(t, "delete", e, void 0, o), s;
  }
  function Qr() {
    let e = g(this),
      t = e.size !== 0,
      r = te(e) ? new Map(e) : new Set(e),
      n = e.clear();
    return t && K(e, "clear", void 0, void 0, r), n;
  }
  function qe(e, t) {
    return function (n, i) {
      let o = this,
        s = o.__v_raw,
        a = g(s),
        c = t ? Pt : e ? It : Dt;
      return (
        !e && R(a, "iterate", J), s.forEach((l, u) => n.call(i, c(l), c(u), o))
      );
    };
  }
  function Ue(e, t, r) {
    return function (...n) {
      let i = this.__v_raw,
        o = g(i),
        s = te(o),
        a = e === "entries" || (e === Symbol.iterator && s),
        c = e === "keys" && s,
        l = i[e](...n),
        u = r ? Pt : t ? It : Dt;
      return (
        !t && R(o, "iterate", c ? Rt : J),
        {
          next() {
            let { value: d, done: m } = l.next();
            return m
              ? { value: d, done: m }
              : { value: a ? [u(d[0]), u(d[1])] : u(d), done: m };
          },
          [Symbol.iterator]() {
            return this;
          },
        }
      );
    };
  }
  function z(e) {
    return function (...t) {
      {
        let r = t[0] ? `on key "${t[0]}" ` : "";
        console.warn(
          `${Ot(e)} operation ${r}failed: target is readonly.`,
          g(this)
        );
      }
      return e === "delete" ? !1 : this;
    };
  }
  var Xr = {
      get(e) {
        return ze(this, e);
      },
      get size() {
        return He(this);
      },
      has: Ve,
      add: Gr,
      set: Yr,
      delete: Zr,
      clear: Qr,
      forEach: qe(!1, !1),
    },
    en = {
      get(e) {
        return ze(this, e, !1, !0);
      },
      get size() {
        return He(this);
      },
      has: Ve,
      add: Gr,
      set: Yr,
      delete: Zr,
      clear: Qr,
      forEach: qe(!1, !0),
    },
    tn = {
      get(e) {
        return ze(this, e, !0);
      },
      get size() {
        return He(this, !0);
      },
      has(e) {
        return Ve.call(this, e, !0);
      },
      add: z("add"),
      set: z("set"),
      delete: z("delete"),
      clear: z("clear"),
      forEach: qe(!0, !1),
    },
    rn = {
      get(e) {
        return ze(this, e, !0, !0);
      },
      get size() {
        return He(this, !0);
      },
      has(e) {
        return Ve.call(this, e, !0);
      },
      add: z("add"),
      set: z("set"),
      delete: z("delete"),
      clear: z("clear"),
      forEach: qe(!0, !0),
    },
    pi = ["keys", "values", "entries", Symbol.iterator];
  pi.forEach((e) => {
    (Xr[e] = Ue(e, !1, !1)),
      (tn[e] = Ue(e, !0, !1)),
      (en[e] = Ue(e, !1, !0)),
      (rn[e] = Ue(e, !0, !0));
  });
  function We(e, t) {
    let r = t ? (e ? rn : en) : e ? tn : Xr;
    return (n, i, o) =>
      i === "__v_isReactive"
        ? !e
        : i === "__v_isReadonly"
        ? e
        : i === "__v_raw"
        ? n
        : Reflect.get(pe(r, i) && i in n ? r : n, i, o);
  }
  var mi = { get: We(!1, !1) },
    ws = { get: We(!1, !0) },
    hi = { get: We(!0, !1) },
    Es = { get: We(!0, !0) };
  function Jr(e, t, r) {
    let n = g(r);
    if (n !== r && t.call(e, n)) {
      let i = At(e);
      console.warn(
        `Reactive ${i} contains both the raw and reactive versions of the same object${
          i === "Map" ? " as keys" : ""
        }, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
      );
    }
  }
  var zr = new WeakMap(),
    si = new WeakMap(),
    Vr = new WeakMap(),
    ai = new WeakMap();
  function _i(e) {
    switch (e) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function gi(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : _i(At(e));
  }
  function Be(e) {
    return e && e.__v_isReadonly ? e : nn(e, !1, Ur, mi, zr);
  }
  function Hr(e) {
    return nn(e, !0, Wr, hi, Vr);
  }
  function nn(e, t, r, n, i) {
    if (!me(e))
      return console.warn(`value cannot be made reactive: ${String(e)}`), e;
    if (e.__v_raw && !(t && e.__v_isReactive)) return e;
    let o = i.get(e);
    if (o) return o;
    let s = gi(e);
    if (s === 0) return e;
    let a = new Proxy(e, s === 2 ? n : r);
    return i.set(e, a), a;
  }
  function g(e) {
    return (e && g(e.__v_raw)) || e;
  }
  function Nt(e) {
    return Boolean(e && e.__v_isRef === !0);
  }
  y("nextTick", () => ee);
  y("dispatch", (e) => q.bind(q, e));
  y("watch", (e, { evaluateLater: t, effect: r }) => (n, i) => {
    let o = t(n),
      s = !0,
      a,
      c = r(() =>
        o((l) => {
          JSON.stringify(l),
            s
              ? (a = l)
              : queueMicrotask(() => {
                  i(l, a), (a = l);
                }),
            (s = !1);
        })
      );
    e._x_effects.delete(c);
  });
  y("store", Cr);
  y("data", (e) => ve(e));
  y("root", (e) => U(e));
  y(
    "refs",
    (e) => (e._x_refs_proxy || (e._x_refs_proxy = j(xi(e))), e._x_refs_proxy)
  );
  function xi(e) {
    let t = [],
      r = e;
    for (; r; ) r._x_refs && t.push(r._x_refs), (r = r.parentNode);
    return t;
  }
  var kt = {};
  function $t(e) {
    return kt[e] || (kt[e] = 0), ++kt[e];
  }
  function on(e, t) {
    return X(e, (r) => {
      if (r._x_ids && r._x_ids[t]) return !0;
    });
  }
  function sn(e, t) {
    e._x_ids || (e._x_ids = {}), e._x_ids[t] || (e._x_ids[t] = $t(t));
  }
  y("id", (e) => (t, r = null) => {
    let n = on(e, t),
      i = n ? n._x_ids[t] : $t(t);
    return r ? `${t}-${i}-${r}` : `${t}-${i}`;
  });
  y("el", (e) => e);
  an("Focus", "focus", "focus");
  an("Persist", "persist", "persist");
  function an(e, t, r) {
    y(t, (n) =>
      C(
        `You can't use [$${directiveName}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${r}`,
        n
      )
    );
  }
  function cn({ get: e, set: t }, { get: r, set: n }) {
    let i = !0,
      o,
      s,
      a,
      c,
      l = I(() => {
        let u, d;
        i
          ? ((u = e()), n(u), (d = r()), (i = !1))
          : ((u = e()),
            (d = r()),
            (a = JSON.stringify(u)),
            (c = JSON.stringify(d)),
            a !== o ? ((d = r()), n(u), (d = u)) : (t(d), (u = d))),
          (o = JSON.stringify(u)),
          (s = JSON.stringify(d));
      });
    return () => {
      $(l);
    };
  }
  p(
    "modelable",
    (e, { expression: t }, { effect: r, evaluateLater: n, cleanup: i }) => {
      let o = n(t),
        s = () => {
          let u;
          return o((d) => (u = d)), u;
        },
        a = n(`${t} = __placeholder`),
        c = (u) => a(() => {}, { scope: { __placeholder: u } }),
        l = s();
      c(l),
        queueMicrotask(() => {
          if (!e._x_model) return;
          e._x_removeModelListeners.default();
          let u = e._x_model.get,
            d = e._x_model.set,
            m = cn(
              {
                get() {
                  return u();
                },
                set(v) {
                  d(v);
                },
              },
              {
                get() {
                  return s();
                },
                set(v) {
                  c(v);
                },
              }
            );
          i(m);
        });
    }
  );
  var yi = document.createElement("div");
  p("teleport", (e, { modifiers: t, expression: r }, { cleanup: n }) => {
    e.tagName.toLowerCase() !== "template" &&
      C("x-teleport can only be used on a <template> tag", e);
    let i = N(
      () => document.querySelector(r),
      () => yi
    )();
    i || C(`Cannot find x-teleport element for selector: "${r}"`);
    let o = e.content.cloneNode(!0).firstElementChild;
    (e._x_teleport = o),
      (o._x_teleportBack = e),
      e._x_forwardEvents &&
        e._x_forwardEvents.forEach((s) => {
          o.addEventListener(s, (a) => {
            a.stopPropagation(), e.dispatchEvent(new a.constructor(a.type, a));
          });
        }),
      M(o, {}, e),
      h(() => {
        t.includes("prepend")
          ? i.parentNode.insertBefore(o, i)
          : t.includes("append")
          ? i.parentNode.insertBefore(o, i.nextSibling)
          : i.appendChild(o),
          E(o),
          (o._x_ignore = !0);
      }),
      n(() => o.remove());
  });
  var ln = () => {};
  ln.inline = (e, { modifiers: t }, { cleanup: r }) => {
    t.includes("self") ? (e._x_ignoreSelf = !0) : (e._x_ignore = !0),
      r(() => {
        t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore;
      });
  };
  p("ignore", ln);
  p("effect", (e, { expression: t }, { effect: r }) => r(x(e, t)));
  function ne(e, t, r, n) {
    let i = e,
      o = (c) => n(c),
      s = {},
      a = (c, l) => (u) => l(c, u);
    if (
      (r.includes("dot") && (t = bi(t)),
      r.includes("camel") && (t = vi(t)),
      r.includes("passive") && (s.passive = !0),
      r.includes("capture") && (s.capture = !0),
      r.includes("window") && (i = window),
      r.includes("document") && (i = document),
      r.includes("prevent") &&
        (o = a(o, (c, l) => {
          l.preventDefault(), c(l);
        })),
      r.includes("stop") &&
        (o = a(o, (c, l) => {
          l.stopPropagation(), c(l);
        })),
      r.includes("self") &&
        (o = a(o, (c, l) => {
          l.target === e && c(l);
        })),
      (r.includes("away") || r.includes("outside")) &&
        ((i = document),
        (o = a(o, (c, l) => {
          e.contains(l.target) ||
            (l.target.isConnected !== !1 &&
              ((e.offsetWidth < 1 && e.offsetHeight < 1) ||
                (e._x_isShown !== !1 && c(l))));
        }))),
      r.includes("once") &&
        (o = a(o, (c, l) => {
          c(l), i.removeEventListener(t, o, s);
        })),
      (o = a(o, (c, l) => {
        (wi(t) && Ei(l, r)) || c(l);
      })),
      r.includes("debounce"))
    ) {
      let c = r[r.indexOf("debounce") + 1] || "invalid-wait",
        l = Ge(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
      o = Ie(o, l);
    }
    if (r.includes("throttle")) {
      let c = r[r.indexOf("throttle") + 1] || "invalid-wait",
        l = Ge(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
      o = Pe(o, l);
    }
    return (
      i.addEventListener(t, o, s),
      () => {
        i.removeEventListener(t, o, s);
      }
    );
  }
  function bi(e) {
    return e.replace(/-/g, ".");
  }
  function vi(e) {
    return e.toLowerCase().replace(/-(\w)/g, (t, r) => r.toUpperCase());
  }
  function Ge(e) {
    return !Array.isArray(e) && !isNaN(e);
  }
  function Si(e) {
    return [" ", "_"].includes(e)
      ? e
      : e
          .replace(/([a-z])([A-Z])/g, "$1-$2")
          .replace(/[_\s]/, "-")
          .toLowerCase();
  }
  function wi(e) {
    return ["keydown", "keyup"].includes(e);
  }
  function Ei(e, t) {
    let r = t.filter(
      (o) => !["window", "document", "prevent", "stop", "once"].includes(o)
    );
    if (r.includes("debounce")) {
      let o = r.indexOf("debounce");
      r.splice(o, Ge((r[o + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (r.includes("throttle")) {
      let o = r.indexOf("throttle");
      r.splice(o, Ge((r[o + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (r.length === 0 || (r.length === 1 && un(e.key).includes(r[0])))
      return !1;
    let i = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((o) =>
      r.includes(o)
    );
    return (
      (r = r.filter((o) => !i.includes(o))),
      !(
        i.length > 0 &&
        i.filter(
          (s) => ((s === "cmd" || s === "super") && (s = "meta"), e[`${s}Key`])
        ).length === i.length &&
        un(e.key).includes(r[0])
      )
    );
  }
  function un(e) {
    if (!e) return [];
    e = Si(e);
    let t = {
      ctrl: "control",
      slash: "/",
      space: " ",
      spacebar: " ",
      cmd: "meta",
      esc: "escape",
      up: "arrow-up",
      down: "arrow-down",
      left: "arrow-left",
      right: "arrow-right",
      period: ".",
      equal: "=",
      minus: "-",
      underscore: "_",
    };
    return (
      (t[e] = e),
      Object.keys(t)
        .map((r) => {
          if (t[r] === e) return r;
        })
        .filter((r) => r)
    );
  }
  p(
    "model",
    (e, { modifiers: t, expression: r }, { effect: n, cleanup: i }) => {
      let o = e;
      t.includes("parent") && (o = e.parentNode);
      let s = x(o, r),
        a;
      typeof r == "string"
        ? (a = x(o, `${r} = __placeholder`))
        : typeof r == "function" && typeof r() == "string"
        ? (a = x(o, `${r()} = __placeholder`))
        : (a = () => {});
      let c = () => {
          let m;
          return s((v) => (m = v)), fn(m) ? m.get() : m;
        },
        l = (m) => {
          let v;
          s((k) => (v = k)),
            fn(v) ? v.set(m) : a(() => {}, { scope: { __placeholder: m } });
        };
      typeof r == "string" &&
        e.type === "radio" &&
        h(() => {
          e.hasAttribute("name") || e.setAttribute("name", r);
        });
      var u =
        e.tagName.toLowerCase() === "select" ||
        ["checkbox", "radio"].includes(e.type) ||
        t.includes("lazy")
          ? "change"
          : "input";
      let d = ne(e, u, t, (m) => {
        l(Ai(e, t, m, c()));
      });
      if (
        (e._x_removeModelListeners || (e._x_removeModelListeners = {}),
        (e._x_removeModelListeners.default = d),
        i(() => e._x_removeModelListeners.default()),
        e.form)
      ) {
        let m = ne(e.form, "reset", [], (v) => {
          ee(() => e._x_model && e._x_model.set(e.value));
        });
        i(() => m());
      }
      (e._x_model = {
        get() {
          return c();
        },
        set(m) {
          l(m);
        },
      }),
        (e._x_forceModelUpdate = (m) => {
          (m = m === void 0 ? c() : m),
            m === void 0 && typeof r == "string" && r.match(/\./) && (m = ""),
            (window.fromModel = !0),
            h(() => de(e, "value", m)),
            delete window.fromModel;
        }),
        n(() => {
          let m = c();
          (t.includes("unintrusive") && document.activeElement.isSameNode(e)) ||
            e._x_forceModelUpdate(m);
        });
    }
  );
  function Ai(e, t, r, n) {
    return h(() => {
      if (r instanceof CustomEvent && r.detail !== void 0)
        return typeof r.detail != "undefined" ? r.detail : r.target.value;
      if (e.type === "checkbox")
        if (Array.isArray(n)) {
          let i = t.includes("number") ? Lt(r.target.value) : r.target.value;
          return r.target.checked ? n.concat([i]) : n.filter((o) => !Oi(o, i));
        } else return r.target.checked;
      else {
        if (e.tagName.toLowerCase() === "select" && e.multiple)
          return t.includes("number")
            ? Array.from(r.target.selectedOptions).map((i) => {
                let o = i.value || i.text;
                return Lt(o);
              })
            : Array.from(r.target.selectedOptions).map(
                (i) => i.value || i.text
              );
        {
          let i = r.target.value;
          return t.includes("number")
            ? Lt(i)
            : t.includes("trim")
            ? i.trim()
            : i;
        }
      }
    });
  }
  function Lt(e) {
    let t = e ? parseFloat(e) : null;
    return Ti(t) ? t : e;
  }
  function Oi(e, t) {
    return e == t;
  }
  function Ti(e) {
    return !Array.isArray(e) && !isNaN(e);
  }
  function fn(e) {
    return (
      e !== null &&
      typeof e == "object" &&
      typeof e.get == "function" &&
      typeof e.set == "function"
    );
  }
  p("cloak", (e) =>
    queueMicrotask(() => h(() => e.removeAttribute(S("cloak"))))
  );
  Re(() => `[${S("init")}]`);
  p(
    "init",
    N((e, { expression: t }, { evaluate: r }) =>
      typeof t == "string" ? !!t.trim() && r(t, {}, !1) : r(t, {}, !1)
    )
  );
  p("text", (e, { expression: t }, { effect: r, evaluateLater: n }) => {
    let i = n(t);
    r(() => {
      i((o) => {
        h(() => {
          e.textContent = o;
        });
      });
    });
  });
  p("html", (e, { expression: t }, { effect: r, evaluateLater: n }) => {
    let i = n(t);
    r(() => {
      i((o) => {
        h(() => {
          (e.innerHTML = o),
            (e._x_ignoreSelf = !0),
            E(e),
            delete e._x_ignoreSelf;
        });
      });
    });
  });
  Q(Oe(":", Te(S("bind:"))));
  p(
    "bind",
    (
      e,
      { value: t, modifiers: r, expression: n, original: i },
      { effect: o }
    ) => {
      if (!t) {
        let a = {};
        Nr(a),
          x(e, n)(
            (l) => {
              wt(e, l, i);
            },
            { scope: a }
          );
        return;
      }
      if (t === "key") return Ci(e, n);
      let s = x(e, n);
      o(() =>
        s((a) => {
          a === void 0 && typeof n == "string" && n.match(/\./) && (a = ""),
            h(() => de(e, t, a, r));
        })
      );
    }
  );
  function Ci(e, t) {
    e._x_keyExpression = t;
  }
  Ce(() => `[${S("data")}]`);
  p(
    "data",
    N((e, { expression: t }, { cleanup: r }) => {
      t = t === "" ? "{}" : t;
      let n = {};
      se(n, e);
      let i = {};
      Pr(i, n);
      let o = P(e, t, { scope: i });
      o === void 0 && (o = {}), se(o, e);
      let s = T(o);
      we(s);
      let a = M(e, s);
      s.init && P(e, s.init),
        r(() => {
          s.destroy && P(e, s.destroy), a();
        });
    })
  );
  p("show", (e, { modifiers: t, expression: r }, { effect: n }) => {
    let i = x(e, r);
    e._x_doHide ||
      (e._x_doHide = () => {
        h(() => {
          e.style.setProperty(
            "display",
            "none",
            t.includes("important") ? "important" : void 0
          );
        });
      }),
      e._x_doShow ||
        (e._x_doShow = () => {
          h(() => {
            e.style.length === 1 && e.style.display === "none"
              ? e.removeAttribute("style")
              : e.style.removeProperty("display");
          });
        });
    let o = () => {
        e._x_doHide(), (e._x_isShown = !1);
      },
      s = () => {
        e._x_doShow(), (e._x_isShown = !0);
      },
      a = () => setTimeout(s),
      c = ue(
        (d) => (d ? s() : o()),
        (d) => {
          typeof e._x_toggleAndCascadeWithTransitions == "function"
            ? e._x_toggleAndCascadeWithTransitions(e, d, s, o)
            : d
            ? a()
            : o();
        }
      ),
      l,
      u = !0;
    n(() =>
      i((d) => {
        (!u && d === l) ||
          (t.includes("immediate") && (d ? a() : o()), c(d), (l = d), (u = !1));
      })
    );
  });
  p("for", (e, { expression: t }, { effect: r, cleanup: n }) => {
    let i = Mi(t),
      o = x(e, i.items),
      s = x(e, e._x_keyExpression || "index");
    (e._x_prevKeys = []),
      (e._x_lookup = {}),
      r(() => Ri(e, i, o, s)),
      n(() => {
        Object.values(e._x_lookup).forEach((a) => a.remove()),
          delete e._x_prevKeys,
          delete e._x_lookup;
      });
  });
  function Ri(e, t, r, n) {
    let i = (s) => typeof s == "object" && !Array.isArray(s),
      o = e;
    r((s) => {
      Ni(s) && s >= 0 && (s = Array.from(Array(s).keys(), (f) => f + 1)),
        s === void 0 && (s = []);
      let a = e._x_lookup,
        c = e._x_prevKeys,
        l = [],
        u = [];
      if (i(s))
        s = Object.entries(s).map(([f, _]) => {
          let b = dn(t, _, f, s);
          n((w) => u.push(w), { scope: { index: f, ...b } }), l.push(b);
        });
      else
        for (let f = 0; f < s.length; f++) {
          let _ = dn(t, s[f], f, s);
          n((b) => u.push(b), { scope: { index: f, ..._ } }), l.push(_);
        }
      let d = [],
        m = [],
        v = [],
        k = [];
      for (let f = 0; f < c.length; f++) {
        let _ = c[f];
        u.indexOf(_) === -1 && v.push(_);
      }
      c = c.filter((f) => !v.includes(f));
      let _e = "template";
      for (let f = 0; f < u.length; f++) {
        let _ = u[f],
          b = c.indexOf(_);
        if (b === -1) c.splice(f, 0, _), d.push([_e, f]);
        else if (b !== f) {
          let w = c.splice(f, 1)[0],
            O = c.splice(b - 1, 1)[0];
          c.splice(f, 0, O), c.splice(b, 0, w), m.push([w, O]);
        } else k.push(_);
        _e = _;
      }
      for (let f = 0; f < v.length; f++) {
        let _ = v[f];
        a[_]._x_effects && a[_]._x_effects.forEach(xe),
          a[_].remove(),
          (a[_] = null),
          delete a[_];
      }
      for (let f = 0; f < m.length; f++) {
        let [_, b] = m[f],
          w = a[_],
          O = a[b],
          Y = document.createElement("div");
        h(() => {
          O.after(Y),
            w.after(O),
            O._x_currentIfEl && O.after(O._x_currentIfEl),
            Y.before(w),
            w._x_currentIfEl && w.after(w._x_currentIfEl),
            Y.remove();
        }),
          ct(O, l[u.indexOf(b)]);
      }
      for (let f = 0; f < d.length; f++) {
        let [_, b] = d[f],
          w = _ === "template" ? o : a[_];
        w._x_currentIfEl && (w = w._x_currentIfEl);
        let O = l[b],
          Y = u[b],
          ge = document.importNode(o.content, !0).firstElementChild;
        M(ge, T(O), o),
          h(() => {
            w.after(ge), E(ge);
          }),
          typeof Y == "object" &&
            C(
              "x-for key cannot be an object, it must be a string or an integer",
              o
            ),
          (a[Y] = ge);
      }
      for (let f = 0; f < k.length; f++) ct(a[k[f]], l[u.indexOf(k[f])]);
      o._x_prevKeys = u;
    });
  }
  function Mi(e) {
    let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
      r = /^\s*\(|\)\s*$/g,
      n = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
      i = e.match(n);
    if (!i) return;
    let o = {};
    o.items = i[2].trim();
    let s = i[1].replace(r, "").trim(),
      a = s.match(t);
    return (
      a
        ? ((o.item = s.replace(t, "").trim()),
          (o.index = a[1].trim()),
          a[2] && (o.collection = a[2].trim()))
        : (o.item = s),
      o
    );
  }
  function dn(e, t, r, n) {
    let i = {};
    return (
      /^\[.*\]$/.test(e.item) && Array.isArray(t)
        ? e.item
            .replace("[", "")
            .replace("]", "")
            .split(",")
            .map((s) => s.trim())
            .forEach((s, a) => {
              i[s] = t[a];
            })
        : /^\{.*\}$/.test(e.item) && !Array.isArray(t) && typeof t == "object"
        ? e.item
            .replace("{", "")
            .replace("}", "")
            .split(",")
            .map((s) => s.trim())
            .forEach((s) => {
              i[s] = t[s];
            })
        : (i[e.item] = t),
      e.index && (i[e.index] = r),
      e.collection && (i[e.collection] = n),
      i
    );
  }
  function Ni(e) {
    return !Array.isArray(e) && !isNaN(e);
  }
  function pn() {}
  pn.inline = (e, { expression: t }, { cleanup: r }) => {
    let n = U(e);
    n._x_refs || (n._x_refs = {}),
      (n._x_refs[t] = e),
      r(() => delete n._x_refs[t]);
  };
  p("ref", pn);
  p("if", (e, { expression: t }, { effect: r, cleanup: n }) => {
    let i = x(e, t),
      o = () => {
        if (e._x_currentIfEl) return e._x_currentIfEl;
        let a = e.content.cloneNode(!0).firstElementChild;
        return (
          M(a, {}, e),
          h(() => {
            e.after(a), E(a);
          }),
          (e._x_currentIfEl = a),
          (e._x_undoIf = () => {
            A(a, (c) => {
              c._x_effects && c._x_effects.forEach(xe);
            }),
              a.remove(),
              delete e._x_currentIfEl;
          }),
          a
        );
      },
      s = () => {
        !e._x_undoIf || (e._x_undoIf(), delete e._x_undoIf);
      };
    r(() =>
      i((a) => {
        a ? o() : s();
      })
    ),
      n(() => e._x_undoIf && e._x_undoIf());
  });
  p("id", (e, { expression: t }, { evaluate: r }) => {
    r(t).forEach((i) => sn(e, i));
  });
  Q(Oe("@", Te(S("on:"))));
  p(
    "on",
    N((e, { value: t, modifiers: r, expression: n }, { cleanup: i }) => {
      let o = n ? x(e, n) : () => {};
      e.tagName.toLowerCase() === "template" &&
        (e._x_forwardEvents || (e._x_forwardEvents = []),
        e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
      let s = ne(e, t, r, (a) => {
        o(() => {}, { scope: { $event: a }, params: [a] });
      });
      i(() => s());
    })
  );
  Je("Collapse", "collapse", "collapse");
  Je("Intersect", "intersect", "intersect");
  Je("Focus", "trap", "focus");
  Je("Mask", "mask", "mask");
  function Je(e, t, r) {
    p(t, (n) =>
      C(
        `You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${r}`,
        n
      )
    );
  }
  F.setEvaluator(ft);
  F.setReactivityEngine({ reactive: Be, effect: Lr, release: Fr, raw: g });
  var jt = F;
  window.Alpine = jt;
  queueMicrotask(() => {
    jt.start();
  });
})();
