var eS = Object.defineProperty;
var tS = (e, t, n) =>
  t in e
    ? eS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Y = (e, t, n) => tS(e, typeof t != "symbol" ? t + "" : t, n);
function nS(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function tp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function rS(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var Ry = { exports: {} },
  Tc = {},
  Oy = { exports: {} },
  J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pa = Symbol.for("react.element"),
  iS = Symbol.for("react.portal"),
  oS = Symbol.for("react.fragment"),
  sS = Symbol.for("react.strict_mode"),
  aS = Symbol.for("react.profiler"),
  lS = Symbol.for("react.provider"),
  cS = Symbol.for("react.context"),
  uS = Symbol.for("react.forward_ref"),
  dS = Symbol.for("react.suspense"),
  fS = Symbol.for("react.memo"),
  pS = Symbol.for("react.lazy"),
  ng = Symbol.iterator;
function hS(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ng && e[ng]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Iy = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ay = Object.assign,
  Ly = {};
function ko(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ly),
    (this.updater = n || Iy);
}
ko.prototype.isReactComponent = {};
ko.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ko.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function $y() {}
$y.prototype = ko.prototype;
function np(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ly),
    (this.updater = n || Iy);
}
var rp = (np.prototype = new $y());
rp.constructor = np;
Ay(rp, ko.prototype);
rp.isPureReactComponent = !0;
var rg = Array.isArray,
  Fy = Object.prototype.hasOwnProperty,
  ip = { current: null },
  zy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Dy(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Fy.call(t, r) && !zy.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: pa,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: ip.current,
  };
}
function gS(e, t) {
  return {
    $$typeof: pa,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function op(e) {
  return typeof e == "object" && e !== null && e.$$typeof === pa;
}
function mS(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ig = /\/+/g;
function Hu(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? mS("" + e.key)
    : t.toString(36);
}
function hl(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case pa:
          case iS:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Hu(s, 0) : r),
      rg(i)
        ? ((n = ""),
          e != null && (n = e.replace(ig, "$&/") + "/"),
          hl(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (op(i) &&
            (i = gS(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(ig, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), rg(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + Hu(o, a);
      s += hl(o, t, n, l, i);
    }
  else if (((l = hS(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + Hu(o, a++)), (s += hl(o, t, n, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Ea(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    hl(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function yS(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ct = { current: null },
  gl = { transition: null },
  vS = {
    ReactCurrentDispatcher: Ct,
    ReactCurrentBatchConfig: gl,
    ReactCurrentOwner: ip,
  };
function Ny() {
  throw Error("act(...) is not supported in production builds of React.");
}
J.Children = {
  map: Ea,
  forEach: function (e, t, n) {
    Ea(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ea(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ea(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!op(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
J.Component = ko;
J.Fragment = oS;
J.Profiler = aS;
J.PureComponent = np;
J.StrictMode = sS;
J.Suspense = dS;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vS;
J.act = Ny;
J.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ay({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = ip.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Fy.call(t, l) &&
        !zy.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: pa, type: e.type, key: i, ref: o, props: r, _owner: s };
};
J.createContext = function (e) {
  return (
    (e = {
      $$typeof: cS,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: lS, _context: e }),
    (e.Consumer = e)
  );
};
J.createElement = Dy;
J.createFactory = function (e) {
  var t = Dy.bind(null, e);
  return (t.type = e), t;
};
J.createRef = function () {
  return { current: null };
};
J.forwardRef = function (e) {
  return { $$typeof: uS, render: e };
};
J.isValidElement = op;
J.lazy = function (e) {
  return { $$typeof: pS, _payload: { _status: -1, _result: e }, _init: yS };
};
J.memo = function (e, t) {
  return { $$typeof: fS, type: e, compare: t === void 0 ? null : t };
};
J.startTransition = function (e) {
  var t = gl.transition;
  gl.transition = {};
  try {
    e();
  } finally {
    gl.transition = t;
  }
};
J.unstable_act = Ny;
J.useCallback = function (e, t) {
  return Ct.current.useCallback(e, t);
};
J.useContext = function (e) {
  return Ct.current.useContext(e);
};
J.useDebugValue = function () {};
J.useDeferredValue = function (e) {
  return Ct.current.useDeferredValue(e);
};
J.useEffect = function (e, t) {
  return Ct.current.useEffect(e, t);
};
J.useId = function () {
  return Ct.current.useId();
};
J.useImperativeHandle = function (e, t, n) {
  return Ct.current.useImperativeHandle(e, t, n);
};
J.useInsertionEffect = function (e, t) {
  return Ct.current.useInsertionEffect(e, t);
};
J.useLayoutEffect = function (e, t) {
  return Ct.current.useLayoutEffect(e, t);
};
J.useMemo = function (e, t) {
  return Ct.current.useMemo(e, t);
};
J.useReducer = function (e, t, n) {
  return Ct.current.useReducer(e, t, n);
};
J.useRef = function (e) {
  return Ct.current.useRef(e);
};
J.useState = function (e) {
  return Ct.current.useState(e);
};
J.useSyncExternalStore = function (e, t, n) {
  return Ct.current.useSyncExternalStore(e, t, n);
};
J.useTransition = function () {
  return Ct.current.useTransition();
};
J.version = "18.3.1";
Oy.exports = J;
var C = Oy.exports;
const Zt = tp(C),
  Ll = nS({ __proto__: null, default: Zt }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xS = C,
  bS = Symbol.for("react.element"),
  SS = Symbol.for("react.fragment"),
  CS = Object.prototype.hasOwnProperty,
  wS = xS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  kS = { key: !0, ref: !0, __self: !0, __source: !0 };
function By(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) CS.call(t, r) && !kS.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: bS,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: wS.current,
  };
}
Tc.Fragment = SS;
Tc.jsx = By;
Tc.jsxs = By;
Ry.exports = Tc;
var P = Ry.exports,
  jy = { exports: {} },
  Wt = {},
  Wy = { exports: {} },
  Hy = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, $) {
    var B = T.length;
    T.push($);
    e: for (; 0 < B; ) {
      var H = (B - 1) >>> 1,
        Q = T[H];
      if (0 < i(Q, $)) (T[H] = $), (T[B] = Q), (B = H);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var $ = T[0],
      B = T.pop();
    if (B !== $) {
      T[0] = B;
      e: for (var H = 0, Q = T.length, q = Q >>> 1; H < q; ) {
        var G = 2 * (H + 1) - 1,
          le = T[G],
          re = G + 1,
          He = T[re];
        if (0 > i(le, B))
          re < Q && 0 > i(He, le)
            ? ((T[H] = He), (T[re] = B), (H = re))
            : ((T[H] = le), (T[G] = B), (H = G));
        else if (re < Q && 0 > i(He, B)) (T[H] = He), (T[re] = B), (H = re);
        else break e;
      }
    }
    return $;
  }
  function i(T, $) {
    var B = T.sortIndex - $.sortIndex;
    return B !== 0 ? B : T.id - $.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    c = [],
    u = 1,
    d = null,
    f = 3,
    p = !1,
    h = !1,
    y = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(T) {
    for (var $ = n(c); $ !== null; ) {
      if ($.callback === null) r(c);
      else if ($.startTime <= T)
        r(c), ($.sortIndex = $.expirationTime), t(l, $);
      else break;
      $ = n(c);
    }
  }
  function S(T) {
    if (((y = !1), m(T), !h))
      if (n(l) !== null) (h = !0), A(w);
      else {
        var $ = n(c);
        $ !== null && N(S, $.startTime - T);
      }
  }
  function w(T, $) {
    (h = !1), y && ((y = !1), g(M), (M = -1)), (p = !0);
    var B = f;
    try {
      for (
        m($), d = n(l);
        d !== null && (!(d.expirationTime > $) || (T && !R()));

      ) {
        var H = d.callback;
        if (typeof H == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var Q = H(d.expirationTime <= $);
          ($ = e.unstable_now()),
            typeof Q == "function" ? (d.callback = Q) : d === n(l) && r(l),
            m($);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var q = !0;
      else {
        var G = n(c);
        G !== null && N(S, G.startTime - $), (q = !1);
      }
      return q;
    } finally {
      (d = null), (f = B), (p = !1);
    }
  }
  var _ = !1,
    k = null,
    M = -1,
    b = 5,
    E = -1;
  function R() {
    return !(e.unstable_now() - E < b);
  }
  function I() {
    if (k !== null) {
      var T = e.unstable_now();
      E = T;
      var $ = !0;
      try {
        $ = k(!0, T);
      } finally {
        $ ? z() : ((_ = !1), (k = null));
      }
    } else _ = !1;
  }
  var z;
  if (typeof v == "function")
    z = function () {
      v(I);
    };
  else if (typeof MessageChannel < "u") {
    var D = new MessageChannel(),
      L = D.port2;
    (D.port1.onmessage = I),
      (z = function () {
        L.postMessage(null);
      });
  } else
    z = function () {
      x(I, 0);
    };
  function A(T) {
    (k = T), _ || ((_ = !0), z());
  }
  function N(T, $) {
    M = x(function () {
      T(e.unstable_now());
    }, $);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      h || p || ((h = !0), A(w));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (b = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (T) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = f;
      }
      var B = f;
      f = $;
      try {
        return T();
      } finally {
        f = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, $) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var B = f;
      f = T;
      try {
        return $();
      } finally {
        f = B;
      }
    }),
    (e.unstable_scheduleCallback = function (T, $, B) {
      var H = e.unstable_now();
      switch (
        (typeof B == "object" && B !== null
          ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? H + B : H))
          : (B = H),
        T)
      ) {
        case 1:
          var Q = -1;
          break;
        case 2:
          Q = 250;
          break;
        case 5:
          Q = 1073741823;
          break;
        case 4:
          Q = 1e4;
          break;
        default:
          Q = 5e3;
      }
      return (
        (Q = B + Q),
        (T = {
          id: u++,
          callback: $,
          priorityLevel: T,
          startTime: B,
          expirationTime: Q,
          sortIndex: -1,
        }),
        B > H
          ? ((T.sortIndex = B),
            t(c, T),
            n(l) === null &&
              T === n(c) &&
              (y ? (g(M), (M = -1)) : (y = !0), N(S, B - H)))
          : ((T.sortIndex = Q), t(l, T), h || p || ((h = !0), A(w))),
        T
      );
    }),
    (e.unstable_shouldYield = R),
    (e.unstable_wrapCallback = function (T) {
      var $ = f;
      return function () {
        var B = f;
        f = $;
        try {
          return T.apply(this, arguments);
        } finally {
          f = B;
        }
      };
    });
})(Hy);
Wy.exports = Hy;
var _S = Wy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var PS = C,
  jt = _S;
function F(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Uy = new Set(),
  zs = {};
function xi(e, t) {
  lo(e, t), lo(e + "Capture", t);
}
function lo(e, t) {
  for (zs[e] = t, e = 0; e < t.length; e++) Uy.add(t[e]);
}
var Zn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  $d = Object.prototype.hasOwnProperty,
  ES =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  og = {},
  sg = {};
function MS(e) {
  return $d.call(sg, e)
    ? !0
    : $d.call(og, e)
    ? !1
    : ES.test(e)
    ? (sg[e] = !0)
    : ((og[e] = !0), !1);
}
function TS(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function RS(e, t, n, r) {
  if (t === null || typeof t > "u" || TS(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function wt(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var dt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    dt[e] = new wt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  dt[t] = new wt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  dt[e] = new wt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  dt[e] = new wt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    dt[e] = new wt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  dt[e] = new wt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  dt[e] = new wt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  dt[e] = new wt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  dt[e] = new wt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var sp = /[\-:]([a-z])/g;
function ap(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(sp, ap);
    dt[t] = new wt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(sp, ap);
    dt[t] = new wt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(sp, ap);
  dt[t] = new wt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  dt[e] = new wt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
dt.xlinkHref = new wt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  dt[e] = new wt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function lp(e, t, n, r) {
  var i = dt.hasOwnProperty(t) ? dt[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (RS(t, n, i, r) && (n = null),
    r || i === null
      ? MS(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ar = PS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ma = Symbol.for("react.element"),
  Di = Symbol.for("react.portal"),
  Ni = Symbol.for("react.fragment"),
  cp = Symbol.for("react.strict_mode"),
  Fd = Symbol.for("react.profiler"),
  Vy = Symbol.for("react.provider"),
  Gy = Symbol.for("react.context"),
  up = Symbol.for("react.forward_ref"),
  zd = Symbol.for("react.suspense"),
  Dd = Symbol.for("react.suspense_list"),
  dp = Symbol.for("react.memo"),
  dr = Symbol.for("react.lazy"),
  Ky = Symbol.for("react.offscreen"),
  ag = Symbol.iterator;
function jo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ag && e[ag]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Le = Object.assign,
  Uu;
function ls(e) {
  if (Uu === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Uu = (t && t[1]) || "";
    }
  return (
    `
` +
    Uu +
    e
  );
}
var Vu = !1;
function Gu(e, t) {
  if (!e || Vu) return "";
  Vu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Vu = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ls(e) : "";
}
function OS(e) {
  switch (e.tag) {
    case 5:
      return ls(e.type);
    case 16:
      return ls("Lazy");
    case 13:
      return ls("Suspense");
    case 19:
      return ls("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Gu(e.type, !1)), e;
    case 11:
      return (e = Gu(e.type.render, !1)), e;
    case 1:
      return (e = Gu(e.type, !0)), e;
    default:
      return "";
  }
}
function Nd(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ni:
      return "Fragment";
    case Di:
      return "Portal";
    case Fd:
      return "Profiler";
    case cp:
      return "StrictMode";
    case zd:
      return "Suspense";
    case Dd:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Gy:
        return (e.displayName || "Context") + ".Consumer";
      case Vy:
        return (e._context.displayName || "Context") + ".Provider";
      case up:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case dp:
        return (
          (t = e.displayName || null), t !== null ? t : Nd(e.type) || "Memo"
        );
      case dr:
        (t = e._payload), (e = e._init);
        try {
          return Nd(e(t));
        } catch {}
    }
  return null;
}
function IS(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Nd(t);
    case 8:
      return t === cp ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Ar(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Yy(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function AS(e) {
  var t = Yy(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ta(e) {
  e._valueTracker || (e._valueTracker = AS(e));
}
function Xy(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Yy(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function $l(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Bd(e, t) {
  var n = t.checked;
  return Le({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function lg(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ar(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Qy(e, t) {
  (t = t.checked), t != null && lp(e, "checked", t, !1);
}
function jd(e, t) {
  Qy(e, t);
  var n = Ar(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Wd(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Wd(e, t.type, Ar(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function cg(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Wd(e, t, n) {
  (t !== "number" || $l(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var cs = Array.isArray;
function Qi(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ar(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Hd(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(F(91));
  return Le({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ug(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(F(92));
      if (cs(n)) {
        if (1 < n.length) throw Error(F(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Ar(n) };
}
function qy(e, t) {
  var n = Ar(t.value),
    r = Ar(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function dg(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Jy(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ud(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Jy(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ra,
  Zy = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ra = Ra || document.createElement("div"),
          Ra.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ra.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ds(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var xs = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  LS = ["Webkit", "ms", "Moz", "O"];
Object.keys(xs).forEach(function (e) {
  LS.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (xs[t] = xs[e]);
  });
});
function ev(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (xs.hasOwnProperty(e) && xs[e])
    ? ("" + t).trim()
    : t + "px";
}
function tv(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = ev(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var $S = Le(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Vd(e, t) {
  if (t) {
    if ($S[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(F(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(F(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(F(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(F(62));
  }
}
function Gd(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Kd = null;
function fp(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Yd = null,
  qi = null,
  Ji = null;
function fg(e) {
  if ((e = ma(e))) {
    if (typeof Yd != "function") throw Error(F(280));
    var t = e.stateNode;
    t && ((t = Lc(t)), Yd(e.stateNode, e.type, t));
  }
}
function nv(e) {
  qi ? (Ji ? Ji.push(e) : (Ji = [e])) : (qi = e);
}
function rv() {
  if (qi) {
    var e = qi,
      t = Ji;
    if (((Ji = qi = null), fg(e), t)) for (e = 0; e < t.length; e++) fg(t[e]);
  }
}
function iv(e, t) {
  return e(t);
}
function ov() {}
var Ku = !1;
function sv(e, t, n) {
  if (Ku) return e(t, n);
  Ku = !0;
  try {
    return iv(e, t, n);
  } finally {
    (Ku = !1), (qi !== null || Ji !== null) && (ov(), rv());
  }
}
function Ns(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Lc(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(F(231, t, typeof n));
  return n;
}
var Xd = !1;
if (Zn)
  try {
    var Wo = {};
    Object.defineProperty(Wo, "passive", {
      get: function () {
        Xd = !0;
      },
    }),
      window.addEventListener("test", Wo, Wo),
      window.removeEventListener("test", Wo, Wo);
  } catch {
    Xd = !1;
  }
function FS(e, t, n, r, i, o, s, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var bs = !1,
  Fl = null,
  zl = !1,
  Qd = null,
  zS = {
    onError: function (e) {
      (bs = !0), (Fl = e);
    },
  };
function DS(e, t, n, r, i, o, s, a, l) {
  (bs = !1), (Fl = null), FS.apply(zS, arguments);
}
function NS(e, t, n, r, i, o, s, a, l) {
  if ((DS.apply(this, arguments), bs)) {
    if (bs) {
      var c = Fl;
      (bs = !1), (Fl = null);
    } else throw Error(F(198));
    zl || ((zl = !0), (Qd = c));
  }
}
function bi(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function av(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function pg(e) {
  if (bi(e) !== e) throw Error(F(188));
}
function BS(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = bi(e)), t === null)) throw Error(F(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return pg(i), e;
        if (o === r) return pg(i), t;
        o = o.sibling;
      }
      throw Error(F(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(F(189));
      }
    }
    if (n.alternate !== r) throw Error(F(190));
  }
  if (n.tag !== 3) throw Error(F(188));
  return n.stateNode.current === n ? e : t;
}
function lv(e) {
  return (e = BS(e)), e !== null ? cv(e) : null;
}
function cv(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = cv(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var uv = jt.unstable_scheduleCallback,
  hg = jt.unstable_cancelCallback,
  jS = jt.unstable_shouldYield,
  WS = jt.unstable_requestPaint,
  je = jt.unstable_now,
  HS = jt.unstable_getCurrentPriorityLevel,
  pp = jt.unstable_ImmediatePriority,
  dv = jt.unstable_UserBlockingPriority,
  Dl = jt.unstable_NormalPriority,
  US = jt.unstable_LowPriority,
  fv = jt.unstable_IdlePriority,
  Rc = null,
  $n = null;
function VS(e) {
  if ($n && typeof $n.onCommitFiberRoot == "function")
    try {
      $n.onCommitFiberRoot(Rc, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var vn = Math.clz32 ? Math.clz32 : YS,
  GS = Math.log,
  KS = Math.LN2;
function YS(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((GS(e) / KS) | 0)) | 0;
}
var Oa = 64,
  Ia = 4194304;
function us(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Nl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = us(a)) : ((o &= s), o !== 0 && (r = us(o)));
  } else (s = n & ~i), s !== 0 ? (r = us(s)) : o !== 0 && (r = us(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - vn(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function XS(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function QS(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - vn(o),
      a = 1 << s,
      l = i[s];
    l === -1
      ? (!(a & n) || a & r) && (i[s] = XS(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function qd(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function pv() {
  var e = Oa;
  return (Oa <<= 1), !(Oa & 4194240) && (Oa = 64), e;
}
function Yu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ha(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - vn(t)),
    (e[t] = n);
}
function qS(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - vn(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function hp(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - vn(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var ge = 0;
function hv(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var gv,
  gp,
  mv,
  yv,
  vv,
  Jd = !1,
  Aa = [],
  Cr = null,
  wr = null,
  kr = null,
  Bs = new Map(),
  js = new Map(),
  pr = [],
  JS =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function gg(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Cr = null;
      break;
    case "dragenter":
    case "dragleave":
      wr = null;
      break;
    case "mouseover":
    case "mouseout":
      kr = null;
      break;
    case "pointerover":
    case "pointerout":
      Bs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      js.delete(t.pointerId);
  }
}
function Ho(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = ma(t)), t !== null && gp(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function ZS(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Cr = Ho(Cr, e, t, n, r, i)), !0;
    case "dragenter":
      return (wr = Ho(wr, e, t, n, r, i)), !0;
    case "mouseover":
      return (kr = Ho(kr, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Bs.set(o, Ho(Bs.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), js.set(o, Ho(js.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function xv(e) {
  var t = ti(e.target);
  if (t !== null) {
    var n = bi(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = av(n)), t !== null)) {
          (e.blockedOn = t),
            vv(e.priority, function () {
              mv(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ml(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Zd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Kd = r), n.target.dispatchEvent(r), (Kd = null);
    } else return (t = ma(n)), t !== null && gp(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function mg(e, t, n) {
  ml(e) && n.delete(t);
}
function eC() {
  (Jd = !1),
    Cr !== null && ml(Cr) && (Cr = null),
    wr !== null && ml(wr) && (wr = null),
    kr !== null && ml(kr) && (kr = null),
    Bs.forEach(mg),
    js.forEach(mg);
}
function Uo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Jd ||
      ((Jd = !0),
      jt.unstable_scheduleCallback(jt.unstable_NormalPriority, eC)));
}
function Ws(e) {
  function t(i) {
    return Uo(i, e);
  }
  if (0 < Aa.length) {
    Uo(Aa[0], e);
    for (var n = 1; n < Aa.length; n++) {
      var r = Aa[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Cr !== null && Uo(Cr, e),
      wr !== null && Uo(wr, e),
      kr !== null && Uo(kr, e),
      Bs.forEach(t),
      js.forEach(t),
      n = 0;
    n < pr.length;
    n++
  )
    (r = pr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < pr.length && ((n = pr[0]), n.blockedOn === null); )
    xv(n), n.blockedOn === null && pr.shift();
}
var Zi = ar.ReactCurrentBatchConfig,
  Bl = !0;
function tC(e, t, n, r) {
  var i = ge,
    o = Zi.transition;
  Zi.transition = null;
  try {
    (ge = 1), mp(e, t, n, r);
  } finally {
    (ge = i), (Zi.transition = o);
  }
}
function nC(e, t, n, r) {
  var i = ge,
    o = Zi.transition;
  Zi.transition = null;
  try {
    (ge = 4), mp(e, t, n, r);
  } finally {
    (ge = i), (Zi.transition = o);
  }
}
function mp(e, t, n, r) {
  if (Bl) {
    var i = Zd(e, t, n, r);
    if (i === null) id(e, t, r, jl, n), gg(e, r);
    else if (ZS(i, e, t, n, r)) r.stopPropagation();
    else if ((gg(e, r), t & 4 && -1 < JS.indexOf(e))) {
      for (; i !== null; ) {
        var o = ma(i);
        if (
          (o !== null && gv(o),
          (o = Zd(e, t, n, r)),
          o === null && id(e, t, r, jl, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else id(e, t, r, null, n);
  }
}
var jl = null;
function Zd(e, t, n, r) {
  if (((jl = null), (e = fp(r)), (e = ti(e)), e !== null))
    if (((t = bi(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = av(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (jl = e), null;
}
function bv(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (HS()) {
        case pp:
          return 1;
        case dv:
          return 4;
        case Dl:
        case US:
          return 16;
        case fv:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var gr = null,
  yp = null,
  yl = null;
function Sv() {
  if (yl) return yl;
  var e,
    t = yp,
    n = t.length,
    r,
    i = "value" in gr ? gr.value : gr.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (yl = i.slice(e, 1 < r ? 1 - r : void 0));
}
function vl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function La() {
  return !0;
}
function yg() {
  return !1;
}
function Ht(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? La
        : yg),
      (this.isPropagationStopped = yg),
      this
    );
  }
  return (
    Le(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = La));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = La));
      },
      persist: function () {},
      isPersistent: La,
    }),
    t
  );
}
var _o = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  vp = Ht(_o),
  ga = Le({}, _o, { view: 0, detail: 0 }),
  rC = Ht(ga),
  Xu,
  Qu,
  Vo,
  Oc = Le({}, ga, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: xp,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Vo &&
            (Vo && e.type === "mousemove"
              ? ((Xu = e.screenX - Vo.screenX), (Qu = e.screenY - Vo.screenY))
              : (Qu = Xu = 0),
            (Vo = e)),
          Xu);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Qu;
    },
  }),
  vg = Ht(Oc),
  iC = Le({}, Oc, { dataTransfer: 0 }),
  oC = Ht(iC),
  sC = Le({}, ga, { relatedTarget: 0 }),
  qu = Ht(sC),
  aC = Le({}, _o, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  lC = Ht(aC),
  cC = Le({}, _o, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  uC = Ht(cC),
  dC = Le({}, _o, { data: 0 }),
  xg = Ht(dC),
  fC = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  pC = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  hC = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function gC(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = hC[e]) ? !!t[e] : !1;
}
function xp() {
  return gC;
}
var mC = Le({}, ga, {
    key: function (e) {
      if (e.key) {
        var t = fC[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = vl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? pC[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: xp,
    charCode: function (e) {
      return e.type === "keypress" ? vl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? vl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  yC = Ht(mC),
  vC = Le({}, Oc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  bg = Ht(vC),
  xC = Le({}, ga, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: xp,
  }),
  bC = Ht(xC),
  SC = Le({}, _o, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  CC = Ht(SC),
  wC = Le({}, Oc, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  kC = Ht(wC),
  _C = [9, 13, 27, 32],
  bp = Zn && "CompositionEvent" in window,
  Ss = null;
Zn && "documentMode" in document && (Ss = document.documentMode);
var PC = Zn && "TextEvent" in window && !Ss,
  Cv = Zn && (!bp || (Ss && 8 < Ss && 11 >= Ss)),
  Sg = " ",
  Cg = !1;
function wv(e, t) {
  switch (e) {
    case "keyup":
      return _C.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function kv(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Bi = !1;
function EC(e, t) {
  switch (e) {
    case "compositionend":
      return kv(t);
    case "keypress":
      return t.which !== 32 ? null : ((Cg = !0), Sg);
    case "textInput":
      return (e = t.data), e === Sg && Cg ? null : e;
    default:
      return null;
  }
}
function MC(e, t) {
  if (Bi)
    return e === "compositionend" || (!bp && wv(e, t))
      ? ((e = Sv()), (yl = yp = gr = null), (Bi = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Cv && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var TC = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function wg(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!TC[e.type] : t === "textarea";
}
function _v(e, t, n, r) {
  nv(r),
    (t = Wl(t, "onChange")),
    0 < t.length &&
      ((n = new vp("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Cs = null,
  Hs = null;
function RC(e) {
  Fv(e, 0);
}
function Ic(e) {
  var t = Hi(e);
  if (Xy(t)) return e;
}
function OC(e, t) {
  if (e === "change") return t;
}
var Pv = !1;
if (Zn) {
  var Ju;
  if (Zn) {
    var Zu = "oninput" in document;
    if (!Zu) {
      var kg = document.createElement("div");
      kg.setAttribute("oninput", "return;"),
        (Zu = typeof kg.oninput == "function");
    }
    Ju = Zu;
  } else Ju = !1;
  Pv = Ju && (!document.documentMode || 9 < document.documentMode);
}
function _g() {
  Cs && (Cs.detachEvent("onpropertychange", Ev), (Hs = Cs = null));
}
function Ev(e) {
  if (e.propertyName === "value" && Ic(Hs)) {
    var t = [];
    _v(t, Hs, e, fp(e)), sv(RC, t);
  }
}
function IC(e, t, n) {
  e === "focusin"
    ? (_g(), (Cs = t), (Hs = n), Cs.attachEvent("onpropertychange", Ev))
    : e === "focusout" && _g();
}
function AC(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ic(Hs);
}
function LC(e, t) {
  if (e === "click") return Ic(t);
}
function $C(e, t) {
  if (e === "input" || e === "change") return Ic(t);
}
function FC(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var bn = typeof Object.is == "function" ? Object.is : FC;
function Us(e, t) {
  if (bn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!$d.call(t, i) || !bn(e[i], t[i])) return !1;
  }
  return !0;
}
function Pg(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Eg(e, t) {
  var n = Pg(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Pg(n);
  }
}
function Mv(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Mv(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Tv() {
  for (var e = window, t = $l(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = $l(e.document);
  }
  return t;
}
function Sp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function zC(e) {
  var t = Tv(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Mv(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Sp(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Eg(n, o));
        var s = Eg(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var DC = Zn && "documentMode" in document && 11 >= document.documentMode,
  ji = null,
  ef = null,
  ws = null,
  tf = !1;
function Mg(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  tf ||
    ji == null ||
    ji !== $l(r) ||
    ((r = ji),
    "selectionStart" in r && Sp(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ws && Us(ws, r)) ||
      ((ws = r),
      (r = Wl(ef, "onSelect")),
      0 < r.length &&
        ((t = new vp("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ji))));
}
function $a(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Wi = {
    animationend: $a("Animation", "AnimationEnd"),
    animationiteration: $a("Animation", "AnimationIteration"),
    animationstart: $a("Animation", "AnimationStart"),
    transitionend: $a("Transition", "TransitionEnd"),
  },
  ed = {},
  Rv = {};
Zn &&
  ((Rv = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Wi.animationend.animation,
    delete Wi.animationiteration.animation,
    delete Wi.animationstart.animation),
  "TransitionEvent" in window || delete Wi.transitionend.transition);
function Ac(e) {
  if (ed[e]) return ed[e];
  if (!Wi[e]) return e;
  var t = Wi[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Rv) return (ed[e] = t[n]);
  return e;
}
var Ov = Ac("animationend"),
  Iv = Ac("animationiteration"),
  Av = Ac("animationstart"),
  Lv = Ac("transitionend"),
  $v = new Map(),
  Tg =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Dr(e, t) {
  $v.set(e, t), xi(t, [e]);
}
for (var td = 0; td < Tg.length; td++) {
  var nd = Tg[td],
    NC = nd.toLowerCase(),
    BC = nd[0].toUpperCase() + nd.slice(1);
  Dr(NC, "on" + BC);
}
Dr(Ov, "onAnimationEnd");
Dr(Iv, "onAnimationIteration");
Dr(Av, "onAnimationStart");
Dr("dblclick", "onDoubleClick");
Dr("focusin", "onFocus");
Dr("focusout", "onBlur");
Dr(Lv, "onTransitionEnd");
lo("onMouseEnter", ["mouseout", "mouseover"]);
lo("onMouseLeave", ["mouseout", "mouseover"]);
lo("onPointerEnter", ["pointerout", "pointerover"]);
lo("onPointerLeave", ["pointerout", "pointerover"]);
xi(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
xi(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
xi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
xi(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
xi(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
xi(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ds =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  jC = new Set("cancel close invalid load scroll toggle".split(" ").concat(ds));
function Rg(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), NS(r, t, void 0, e), (e.currentTarget = null);
}
function Fv(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          Rg(i, a, c), (o = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          Rg(i, a, c), (o = l);
        }
    }
  }
  if (zl) throw ((e = Qd), (zl = !1), (Qd = null), e);
}
function Pe(e, t) {
  var n = t[af];
  n === void 0 && (n = t[af] = new Set());
  var r = e + "__bubble";
  n.has(r) || (zv(t, e, 2, !1), n.add(r));
}
function rd(e, t, n) {
  var r = 0;
  t && (r |= 4), zv(n, e, r, t);
}
var Fa = "_reactListening" + Math.random().toString(36).slice(2);
function Vs(e) {
  if (!e[Fa]) {
    (e[Fa] = !0),
      Uy.forEach(function (n) {
        n !== "selectionchange" && (jC.has(n) || rd(n, !1, e), rd(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Fa] || ((t[Fa] = !0), rd("selectionchange", !1, t));
  }
}
function zv(e, t, n, r) {
  switch (bv(t)) {
    case 1:
      var i = tC;
      break;
    case 4:
      i = nC;
      break;
    default:
      i = mp;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Xd ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function id(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = ti(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  sv(function () {
    var c = o,
      u = fp(n),
      d = [];
    e: {
      var f = $v.get(e);
      if (f !== void 0) {
        var p = vp,
          h = e;
        switch (e) {
          case "keypress":
            if (vl(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = yC;
            break;
          case "focusin":
            (h = "focus"), (p = qu);
            break;
          case "focusout":
            (h = "blur"), (p = qu);
            break;
          case "beforeblur":
          case "afterblur":
            p = qu;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = vg;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = oC;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = bC;
            break;
          case Ov:
          case Iv:
          case Av:
            p = lC;
            break;
          case Lv:
            p = CC;
            break;
          case "scroll":
            p = rC;
            break;
          case "wheel":
            p = kC;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = uC;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = bg;
        }
        var y = (t & 4) !== 0,
          x = !y && e === "scroll",
          g = y ? (f !== null ? f + "Capture" : null) : f;
        y = [];
        for (var v = c, m; v !== null; ) {
          m = v;
          var S = m.stateNode;
          if (
            (m.tag === 5 &&
              S !== null &&
              ((m = S),
              g !== null && ((S = Ns(v, g)), S != null && y.push(Gs(v, S, m)))),
            x)
          )
            break;
          v = v.return;
        }
        0 < y.length &&
          ((f = new p(f, h, null, n, u)), d.push({ event: f, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Kd &&
            (h = n.relatedTarget || n.fromElement) &&
            (ti(h) || h[er]))
        )
          break e;
        if (
          (p || f) &&
          ((f =
            u.window === u
              ? u
              : (f = u.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          p
            ? ((h = n.relatedTarget || n.toElement),
              (p = c),
              (h = h ? ti(h) : null),
              h !== null &&
                ((x = bi(h)), h !== x || (h.tag !== 5 && h.tag !== 6)) &&
                (h = null))
            : ((p = null), (h = c)),
          p !== h)
        ) {
          if (
            ((y = vg),
            (S = "onMouseLeave"),
            (g = "onMouseEnter"),
            (v = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = bg),
              (S = "onPointerLeave"),
              (g = "onPointerEnter"),
              (v = "pointer")),
            (x = p == null ? f : Hi(p)),
            (m = h == null ? f : Hi(h)),
            (f = new y(S, v + "leave", p, n, u)),
            (f.target = x),
            (f.relatedTarget = m),
            (S = null),
            ti(u) === c &&
              ((y = new y(g, v + "enter", h, n, u)),
              (y.target = m),
              (y.relatedTarget = x),
              (S = y)),
            (x = S),
            p && h)
          )
            t: {
              for (y = p, g = h, v = 0, m = y; m; m = Ei(m)) v++;
              for (m = 0, S = g; S; S = Ei(S)) m++;
              for (; 0 < v - m; ) (y = Ei(y)), v--;
              for (; 0 < m - v; ) (g = Ei(g)), m--;
              for (; v--; ) {
                if (y === g || (g !== null && y === g.alternate)) break t;
                (y = Ei(y)), (g = Ei(g));
              }
              y = null;
            }
          else y = null;
          p !== null && Og(d, f, p, y, !1),
            h !== null && x !== null && Og(d, x, h, y, !0);
        }
      }
      e: {
        if (
          ((f = c ? Hi(c) : window),
          (p = f.nodeName && f.nodeName.toLowerCase()),
          p === "select" || (p === "input" && f.type === "file"))
        )
          var w = OC;
        else if (wg(f))
          if (Pv) w = $C;
          else {
            w = AC;
            var _ = IC;
          }
        else
          (p = f.nodeName) &&
            p.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (w = LC);
        if (w && (w = w(e, c))) {
          _v(d, w, n, u);
          break e;
        }
        _ && _(e, f, c),
          e === "focusout" &&
            (_ = f._wrapperState) &&
            _.controlled &&
            f.type === "number" &&
            Wd(f, "number", f.value);
      }
      switch (((_ = c ? Hi(c) : window), e)) {
        case "focusin":
          (wg(_) || _.contentEditable === "true") &&
            ((ji = _), (ef = c), (ws = null));
          break;
        case "focusout":
          ws = ef = ji = null;
          break;
        case "mousedown":
          tf = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (tf = !1), Mg(d, n, u);
          break;
        case "selectionchange":
          if (DC) break;
        case "keydown":
        case "keyup":
          Mg(d, n, u);
      }
      var k;
      if (bp)
        e: {
          switch (e) {
            case "compositionstart":
              var M = "onCompositionStart";
              break e;
            case "compositionend":
              M = "onCompositionEnd";
              break e;
            case "compositionupdate":
              M = "onCompositionUpdate";
              break e;
          }
          M = void 0;
        }
      else
        Bi
          ? wv(e, n) && (M = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
      M &&
        (Cv &&
          n.locale !== "ko" &&
          (Bi || M !== "onCompositionStart"
            ? M === "onCompositionEnd" && Bi && (k = Sv())
            : ((gr = u),
              (yp = "value" in gr ? gr.value : gr.textContent),
              (Bi = !0))),
        (_ = Wl(c, M)),
        0 < _.length &&
          ((M = new xg(M, e, null, n, u)),
          d.push({ event: M, listeners: _ }),
          k ? (M.data = k) : ((k = kv(n)), k !== null && (M.data = k)))),
        (k = PC ? EC(e, n) : MC(e, n)) &&
          ((c = Wl(c, "onBeforeInput")),
          0 < c.length &&
            ((u = new xg("onBeforeInput", "beforeinput", null, n, u)),
            d.push({ event: u, listeners: c }),
            (u.data = k)));
    }
    Fv(d, t);
  });
}
function Gs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Wl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Ns(e, n)),
      o != null && r.unshift(Gs(e, o, i)),
      (o = Ns(e, t)),
      o != null && r.push(Gs(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Ei(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Og(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      i
        ? ((l = Ns(n, o)), l != null && s.unshift(Gs(n, l, a)))
        : i || ((l = Ns(n, o)), l != null && s.push(Gs(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var WC = /\r\n?/g,
  HC = /\u0000|\uFFFD/g;
function Ig(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      WC,
      `
`
    )
    .replace(HC, "");
}
function za(e, t, n) {
  if (((t = Ig(t)), Ig(e) !== t && n)) throw Error(F(425));
}
function Hl() {}
var nf = null,
  rf = null;
function of(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var sf = typeof setTimeout == "function" ? setTimeout : void 0,
  UC = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ag = typeof Promise == "function" ? Promise : void 0,
  VC =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ag < "u"
      ? function (e) {
          return Ag.resolve(null).then(e).catch(GC);
        }
      : sf;
function GC(e) {
  setTimeout(function () {
    throw e;
  });
}
function od(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Ws(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Ws(t);
}
function _r(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Lg(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Po = Math.random().toString(36).slice(2),
  In = "__reactFiber$" + Po,
  Ks = "__reactProps$" + Po,
  er = "__reactContainer$" + Po,
  af = "__reactEvents$" + Po,
  KC = "__reactListeners$" + Po,
  YC = "__reactHandles$" + Po;
function ti(e) {
  var t = e[In];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[er] || n[In])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Lg(e); e !== null; ) {
          if ((n = e[In])) return n;
          e = Lg(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ma(e) {
  return (
    (e = e[In] || e[er]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Hi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(F(33));
}
function Lc(e) {
  return e[Ks] || null;
}
var lf = [],
  Ui = -1;
function Nr(e) {
  return { current: e };
}
function Me(e) {
  0 > Ui || ((e.current = lf[Ui]), (lf[Ui] = null), Ui--);
}
function we(e, t) {
  Ui++, (lf[Ui] = e.current), (e.current = t);
}
var Lr = {},
  yt = Nr(Lr),
  Tt = Nr(!1),
  di = Lr;
function co(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Lr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Rt(e) {
  return (e = e.childContextTypes), e != null;
}
function Ul() {
  Me(Tt), Me(yt);
}
function $g(e, t, n) {
  if (yt.current !== Lr) throw Error(F(168));
  we(yt, t), we(Tt, n);
}
function Dv(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(F(108, IS(e) || "Unknown", i));
  return Le({}, n, r);
}
function Vl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Lr),
    (di = yt.current),
    we(yt, e),
    we(Tt, Tt.current),
    !0
  );
}
function Fg(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(F(169));
  n
    ? ((e = Dv(e, t, di)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Me(Tt),
      Me(yt),
      we(yt, e))
    : Me(Tt),
    we(Tt, n);
}
var Gn = null,
  $c = !1,
  sd = !1;
function Nv(e) {
  Gn === null ? (Gn = [e]) : Gn.push(e);
}
function XC(e) {
  ($c = !0), Nv(e);
}
function Br() {
  if (!sd && Gn !== null) {
    sd = !0;
    var e = 0,
      t = ge;
    try {
      var n = Gn;
      for (ge = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Gn = null), ($c = !1);
    } catch (i) {
      throw (Gn !== null && (Gn = Gn.slice(e + 1)), uv(pp, Br), i);
    } finally {
      (ge = t), (sd = !1);
    }
  }
  return null;
}
var Vi = [],
  Gi = 0,
  Gl = null,
  Kl = 0,
  Qt = [],
  qt = 0,
  fi = null,
  Xn = 1,
  Qn = "";
function Yr(e, t) {
  (Vi[Gi++] = Kl), (Vi[Gi++] = Gl), (Gl = e), (Kl = t);
}
function Bv(e, t, n) {
  (Qt[qt++] = Xn), (Qt[qt++] = Qn), (Qt[qt++] = fi), (fi = e);
  var r = Xn;
  e = Qn;
  var i = 32 - vn(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - vn(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (Xn = (1 << (32 - vn(t) + i)) | (n << i) | r),
      (Qn = o + e);
  } else (Xn = (1 << o) | (n << i) | r), (Qn = e);
}
function Cp(e) {
  e.return !== null && (Yr(e, 1), Bv(e, 1, 0));
}
function wp(e) {
  for (; e === Gl; )
    (Gl = Vi[--Gi]), (Vi[Gi] = null), (Kl = Vi[--Gi]), (Vi[Gi] = null);
  for (; e === fi; )
    (fi = Qt[--qt]),
      (Qt[qt] = null),
      (Qn = Qt[--qt]),
      (Qt[qt] = null),
      (Xn = Qt[--qt]),
      (Qt[qt] = null);
}
var Nt = null,
  zt = null,
  Oe = !1,
  mn = null;
function jv(e, t) {
  var n = en(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function zg(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Nt = e), (zt = _r(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Nt = e), (zt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = fi !== null ? { id: Xn, overflow: Qn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = en(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Nt = e),
            (zt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function cf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function uf(e) {
  if (Oe) {
    var t = zt;
    if (t) {
      var n = t;
      if (!zg(e, t)) {
        if (cf(e)) throw Error(F(418));
        t = _r(n.nextSibling);
        var r = Nt;
        t && zg(e, t)
          ? jv(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Oe = !1), (Nt = e));
      }
    } else {
      if (cf(e)) throw Error(F(418));
      (e.flags = (e.flags & -4097) | 2), (Oe = !1), (Nt = e);
    }
  }
}
function Dg(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Nt = e;
}
function Da(e) {
  if (e !== Nt) return !1;
  if (!Oe) return Dg(e), (Oe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !of(e.type, e.memoizedProps))),
    t && (t = zt))
  ) {
    if (cf(e)) throw (Wv(), Error(F(418)));
    for (; t; ) jv(e, t), (t = _r(t.nextSibling));
  }
  if ((Dg(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(F(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              zt = _r(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      zt = null;
    }
  } else zt = Nt ? _r(e.stateNode.nextSibling) : null;
  return !0;
}
function Wv() {
  for (var e = zt; e; ) e = _r(e.nextSibling);
}
function uo() {
  (zt = Nt = null), (Oe = !1);
}
function kp(e) {
  mn === null ? (mn = [e]) : mn.push(e);
}
var QC = ar.ReactCurrentBatchConfig;
function Go(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(F(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(F(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(F(284));
    if (!n._owner) throw Error(F(290, e));
  }
  return e;
}
function Na(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      F(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ng(e) {
  var t = e._init;
  return t(e._payload);
}
function Hv(e) {
  function t(g, v) {
    if (e) {
      var m = g.deletions;
      m === null ? ((g.deletions = [v]), (g.flags |= 16)) : m.push(v);
    }
  }
  function n(g, v) {
    if (!e) return null;
    for (; v !== null; ) t(g, v), (v = v.sibling);
    return null;
  }
  function r(g, v) {
    for (g = new Map(); v !== null; )
      v.key !== null ? g.set(v.key, v) : g.set(v.index, v), (v = v.sibling);
    return g;
  }
  function i(g, v) {
    return (g = Tr(g, v)), (g.index = 0), (g.sibling = null), g;
  }
  function o(g, v, m) {
    return (
      (g.index = m),
      e
        ? ((m = g.alternate),
          m !== null
            ? ((m = m.index), m < v ? ((g.flags |= 2), v) : m)
            : ((g.flags |= 2), v))
        : ((g.flags |= 1048576), v)
    );
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function a(g, v, m, S) {
    return v === null || v.tag !== 6
      ? ((v = pd(m, g.mode, S)), (v.return = g), v)
      : ((v = i(v, m)), (v.return = g), v);
  }
  function l(g, v, m, S) {
    var w = m.type;
    return w === Ni
      ? u(g, v, m.props.children, S, m.key)
      : v !== null &&
        (v.elementType === w ||
          (typeof w == "object" &&
            w !== null &&
            w.$$typeof === dr &&
            Ng(w) === v.type))
      ? ((S = i(v, m.props)), (S.ref = Go(g, v, m)), (S.return = g), S)
      : ((S = _l(m.type, m.key, m.props, null, g.mode, S)),
        (S.ref = Go(g, v, m)),
        (S.return = g),
        S);
  }
  function c(g, v, m, S) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== m.containerInfo ||
      v.stateNode.implementation !== m.implementation
      ? ((v = hd(m, g.mode, S)), (v.return = g), v)
      : ((v = i(v, m.children || [])), (v.return = g), v);
  }
  function u(g, v, m, S, w) {
    return v === null || v.tag !== 7
      ? ((v = li(m, g.mode, S, w)), (v.return = g), v)
      : ((v = i(v, m)), (v.return = g), v);
  }
  function d(g, v, m) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (v = pd("" + v, g.mode, m)), (v.return = g), v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ma:
          return (
            (m = _l(v.type, v.key, v.props, null, g.mode, m)),
            (m.ref = Go(g, null, v)),
            (m.return = g),
            m
          );
        case Di:
          return (v = hd(v, g.mode, m)), (v.return = g), v;
        case dr:
          var S = v._init;
          return d(g, S(v._payload), m);
      }
      if (cs(v) || jo(v))
        return (v = li(v, g.mode, m, null)), (v.return = g), v;
      Na(g, v);
    }
    return null;
  }
  function f(g, v, m, S) {
    var w = v !== null ? v.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return w !== null ? null : a(g, v, "" + m, S);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ma:
          return m.key === w ? l(g, v, m, S) : null;
        case Di:
          return m.key === w ? c(g, v, m, S) : null;
        case dr:
          return (w = m._init), f(g, v, w(m._payload), S);
      }
      if (cs(m) || jo(m)) return w !== null ? null : u(g, v, m, S, null);
      Na(g, m);
    }
    return null;
  }
  function p(g, v, m, S, w) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (g = g.get(m) || null), a(v, g, "" + S, w);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Ma:
          return (g = g.get(S.key === null ? m : S.key) || null), l(v, g, S, w);
        case Di:
          return (g = g.get(S.key === null ? m : S.key) || null), c(v, g, S, w);
        case dr:
          var _ = S._init;
          return p(g, v, m, _(S._payload), w);
      }
      if (cs(S) || jo(S)) return (g = g.get(m) || null), u(v, g, S, w, null);
      Na(v, S);
    }
    return null;
  }
  function h(g, v, m, S) {
    for (
      var w = null, _ = null, k = v, M = (v = 0), b = null;
      k !== null && M < m.length;
      M++
    ) {
      k.index > M ? ((b = k), (k = null)) : (b = k.sibling);
      var E = f(g, k, m[M], S);
      if (E === null) {
        k === null && (k = b);
        break;
      }
      e && k && E.alternate === null && t(g, k),
        (v = o(E, v, M)),
        _ === null ? (w = E) : (_.sibling = E),
        (_ = E),
        (k = b);
    }
    if (M === m.length) return n(g, k), Oe && Yr(g, M), w;
    if (k === null) {
      for (; M < m.length; M++)
        (k = d(g, m[M], S)),
          k !== null &&
            ((v = o(k, v, M)), _ === null ? (w = k) : (_.sibling = k), (_ = k));
      return Oe && Yr(g, M), w;
    }
    for (k = r(g, k); M < m.length; M++)
      (b = p(k, g, M, m[M], S)),
        b !== null &&
          (e && b.alternate !== null && k.delete(b.key === null ? M : b.key),
          (v = o(b, v, M)),
          _ === null ? (w = b) : (_.sibling = b),
          (_ = b));
    return (
      e &&
        k.forEach(function (R) {
          return t(g, R);
        }),
      Oe && Yr(g, M),
      w
    );
  }
  function y(g, v, m, S) {
    var w = jo(m);
    if (typeof w != "function") throw Error(F(150));
    if (((m = w.call(m)), m == null)) throw Error(F(151));
    for (
      var _ = (w = null), k = v, M = (v = 0), b = null, E = m.next();
      k !== null && !E.done;
      M++, E = m.next()
    ) {
      k.index > M ? ((b = k), (k = null)) : (b = k.sibling);
      var R = f(g, k, E.value, S);
      if (R === null) {
        k === null && (k = b);
        break;
      }
      e && k && R.alternate === null && t(g, k),
        (v = o(R, v, M)),
        _ === null ? (w = R) : (_.sibling = R),
        (_ = R),
        (k = b);
    }
    if (E.done) return n(g, k), Oe && Yr(g, M), w;
    if (k === null) {
      for (; !E.done; M++, E = m.next())
        (E = d(g, E.value, S)),
          E !== null &&
            ((v = o(E, v, M)), _ === null ? (w = E) : (_.sibling = E), (_ = E));
      return Oe && Yr(g, M), w;
    }
    for (k = r(g, k); !E.done; M++, E = m.next())
      (E = p(k, g, M, E.value, S)),
        E !== null &&
          (e && E.alternate !== null && k.delete(E.key === null ? M : E.key),
          (v = o(E, v, M)),
          _ === null ? (w = E) : (_.sibling = E),
          (_ = E));
    return (
      e &&
        k.forEach(function (I) {
          return t(g, I);
        }),
      Oe && Yr(g, M),
      w
    );
  }
  function x(g, v, m, S) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Ni &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Ma:
          e: {
            for (var w = m.key, _ = v; _ !== null; ) {
              if (_.key === w) {
                if (((w = m.type), w === Ni)) {
                  if (_.tag === 7) {
                    n(g, _.sibling),
                      (v = i(_, m.props.children)),
                      (v.return = g),
                      (g = v);
                    break e;
                  }
                } else if (
                  _.elementType === w ||
                  (typeof w == "object" &&
                    w !== null &&
                    w.$$typeof === dr &&
                    Ng(w) === _.type)
                ) {
                  n(g, _.sibling),
                    (v = i(_, m.props)),
                    (v.ref = Go(g, _, m)),
                    (v.return = g),
                    (g = v);
                  break e;
                }
                n(g, _);
                break;
              } else t(g, _);
              _ = _.sibling;
            }
            m.type === Ni
              ? ((v = li(m.props.children, g.mode, S, m.key)),
                (v.return = g),
                (g = v))
              : ((S = _l(m.type, m.key, m.props, null, g.mode, S)),
                (S.ref = Go(g, v, m)),
                (S.return = g),
                (g = S));
          }
          return s(g);
        case Di:
          e: {
            for (_ = m.key; v !== null; ) {
              if (v.key === _)
                if (
                  v.tag === 4 &&
                  v.stateNode.containerInfo === m.containerInfo &&
                  v.stateNode.implementation === m.implementation
                ) {
                  n(g, v.sibling),
                    (v = i(v, m.children || [])),
                    (v.return = g),
                    (g = v);
                  break e;
                } else {
                  n(g, v);
                  break;
                }
              else t(g, v);
              v = v.sibling;
            }
            (v = hd(m, g.mode, S)), (v.return = g), (g = v);
          }
          return s(g);
        case dr:
          return (_ = m._init), x(g, v, _(m._payload), S);
      }
      if (cs(m)) return h(g, v, m, S);
      if (jo(m)) return y(g, v, m, S);
      Na(g, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        v !== null && v.tag === 6
          ? (n(g, v.sibling), (v = i(v, m)), (v.return = g), (g = v))
          : (n(g, v), (v = pd(m, g.mode, S)), (v.return = g), (g = v)),
        s(g))
      : n(g, v);
  }
  return x;
}
var fo = Hv(!0),
  Uv = Hv(!1),
  Yl = Nr(null),
  Xl = null,
  Ki = null,
  _p = null;
function Pp() {
  _p = Ki = Xl = null;
}
function Ep(e) {
  var t = Yl.current;
  Me(Yl), (e._currentValue = t);
}
function df(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function eo(e, t) {
  (Xl = e),
    (_p = Ki = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Mt = !0), (e.firstContext = null));
}
function an(e) {
  var t = e._currentValue;
  if (_p !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ki === null)) {
      if (Xl === null) throw Error(F(308));
      (Ki = e), (Xl.dependencies = { lanes: 0, firstContext: e });
    } else Ki = Ki.next = e;
  return t;
}
var ni = null;
function Mp(e) {
  ni === null ? (ni = [e]) : ni.push(e);
}
function Vv(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Mp(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    tr(e, r)
  );
}
function tr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var fr = !1;
function Tp(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Gv(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Jn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Pr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ie & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      tr(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Mp(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    tr(e, n)
  );
}
function xl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), hp(e, n);
  }
}
function Bg(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ql(e, t, n, r) {
  var i = e.updateQueue;
  fr = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      c = l.next;
    (l.next = null), s === null ? (o = c) : (s.next = c), (s = l);
    var u = e.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (a = u.lastBaseUpdate),
      a !== s &&
        (a === null ? (u.firstBaseUpdate = c) : (a.next = c),
        (u.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var d = i.baseState;
    (s = 0), (u = c = l = null), (a = o);
    do {
      var f = a.lane,
        p = a.eventTime;
      if ((r & f) === f) {
        u !== null &&
          (u = u.next =
            {
              eventTime: p,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var h = e,
            y = a;
          switch (((f = t), (p = n), y.tag)) {
            case 1:
              if (((h = y.payload), typeof h == "function")) {
                d = h.call(p, d, f);
                break e;
              }
              d = h;
              break e;
            case 3:
              h.flags = (h.flags & -65537) | 128;
            case 0:
              if (
                ((h = y.payload),
                (f = typeof h == "function" ? h.call(p, d, f) : h),
                f == null)
              )
                break e;
              d = Le({}, d, f);
              break e;
            case 2:
              fr = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [a]) : f.push(a));
      } else
        (p = {
          eventTime: p,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          u === null ? ((c = u = p), (l = d)) : (u = u.next = p),
          (s |= f);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (u === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = u),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (hi |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function jg(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(F(191, i));
        i.call(r);
      }
    }
}
var ya = {},
  Fn = Nr(ya),
  Ys = Nr(ya),
  Xs = Nr(ya);
function ri(e) {
  if (e === ya) throw Error(F(174));
  return e;
}
function Rp(e, t) {
  switch ((we(Xs, t), we(Ys, e), we(Fn, ya), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ud(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ud(t, e));
  }
  Me(Fn), we(Fn, t);
}
function po() {
  Me(Fn), Me(Ys), Me(Xs);
}
function Kv(e) {
  ri(Xs.current);
  var t = ri(Fn.current),
    n = Ud(t, e.type);
  t !== n && (we(Ys, e), we(Fn, n));
}
function Op(e) {
  Ys.current === e && (Me(Fn), Me(Ys));
}
var Ie = Nr(0);
function ql(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ad = [];
function Ip() {
  for (var e = 0; e < ad.length; e++)
    ad[e]._workInProgressVersionPrimary = null;
  ad.length = 0;
}
var bl = ar.ReactCurrentDispatcher,
  ld = ar.ReactCurrentBatchConfig,
  pi = 0,
  Ae = null,
  Xe = null,
  Je = null,
  Jl = !1,
  ks = !1,
  Qs = 0,
  qC = 0;
function ft() {
  throw Error(F(321));
}
function Ap(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!bn(e[n], t[n])) return !1;
  return !0;
}
function Lp(e, t, n, r, i, o) {
  if (
    ((pi = o),
    (Ae = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (bl.current = e === null || e.memoizedState === null ? tw : nw),
    (e = n(r, i)),
    ks)
  ) {
    o = 0;
    do {
      if (((ks = !1), (Qs = 0), 25 <= o)) throw Error(F(301));
      (o += 1),
        (Je = Xe = null),
        (t.updateQueue = null),
        (bl.current = rw),
        (e = n(r, i));
    } while (ks);
  }
  if (
    ((bl.current = Zl),
    (t = Xe !== null && Xe.next !== null),
    (pi = 0),
    (Je = Xe = Ae = null),
    (Jl = !1),
    t)
  )
    throw Error(F(300));
  return e;
}
function $p() {
  var e = Qs !== 0;
  return (Qs = 0), e;
}
function Mn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Je === null ? (Ae.memoizedState = Je = e) : (Je = Je.next = e), Je;
}
function ln() {
  if (Xe === null) {
    var e = Ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Xe.next;
  var t = Je === null ? Ae.memoizedState : Je.next;
  if (t !== null) (Je = t), (Xe = e);
  else {
    if (e === null) throw Error(F(310));
    (Xe = e),
      (e = {
        memoizedState: Xe.memoizedState,
        baseState: Xe.baseState,
        baseQueue: Xe.baseQueue,
        queue: Xe.queue,
        next: null,
      }),
      Je === null ? (Ae.memoizedState = Je = e) : (Je = Je.next = e);
  }
  return Je;
}
function qs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function cd(e) {
  var t = ln(),
    n = t.queue;
  if (n === null) throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = Xe,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      c = o;
    do {
      var u = c.lane;
      if ((pi & u) === u)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var d = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (s = r)) : (l = l.next = d),
          (Ae.lanes |= u),
          (hi |= u);
      }
      c = c.next;
    } while (c !== null && c !== o);
    l === null ? (s = r) : (l.next = a),
      bn(r, t.memoizedState) || (Mt = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (Ae.lanes |= o), (hi |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ud(e) {
  var t = ln(),
    n = t.queue;
  if (n === null) throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    bn(o, t.memoizedState) || (Mt = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Yv() {}
function Xv(e, t) {
  var n = Ae,
    r = ln(),
    i = t(),
    o = !bn(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Mt = !0)),
    (r = r.queue),
    Fp(Jv.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Je !== null && Je.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Js(9, qv.bind(null, n, r, i, t), void 0, null),
      et === null)
    )
      throw Error(F(349));
    pi & 30 || Qv(n, t, i);
  }
  return i;
}
function Qv(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ae.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function qv(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Zv(t) && ex(e);
}
function Jv(e, t, n) {
  return n(function () {
    Zv(t) && ex(e);
  });
}
function Zv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !bn(e, n);
  } catch {
    return !0;
  }
}
function ex(e) {
  var t = tr(e, 1);
  t !== null && xn(t, e, 1, -1);
}
function Wg(e) {
  var t = Mn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = ew.bind(null, Ae, e)),
    [t.memoizedState, e]
  );
}
function Js(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ae.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function tx() {
  return ln().memoizedState;
}
function Sl(e, t, n, r) {
  var i = Mn();
  (Ae.flags |= e),
    (i.memoizedState = Js(1 | t, n, void 0, r === void 0 ? null : r));
}
function Fc(e, t, n, r) {
  var i = ln();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Xe !== null) {
    var s = Xe.memoizedState;
    if (((o = s.destroy), r !== null && Ap(r, s.deps))) {
      i.memoizedState = Js(t, n, o, r);
      return;
    }
  }
  (Ae.flags |= e), (i.memoizedState = Js(1 | t, n, o, r));
}
function Hg(e, t) {
  return Sl(8390656, 8, e, t);
}
function Fp(e, t) {
  return Fc(2048, 8, e, t);
}
function nx(e, t) {
  return Fc(4, 2, e, t);
}
function rx(e, t) {
  return Fc(4, 4, e, t);
}
function ix(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ox(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Fc(4, 4, ix.bind(null, t, e), n)
  );
}
function zp() {}
function sx(e, t) {
  var n = ln();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ap(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ax(e, t) {
  var n = ln();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ap(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function lx(e, t, n) {
  return pi & 21
    ? (bn(n, t) || ((n = pv()), (Ae.lanes |= n), (hi |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Mt = !0)), (e.memoizedState = n));
}
function JC(e, t) {
  var n = ge;
  (ge = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ld.transition;
  ld.transition = {};
  try {
    e(!1), t();
  } finally {
    (ge = n), (ld.transition = r);
  }
}
function cx() {
  return ln().memoizedState;
}
function ZC(e, t, n) {
  var r = Mr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ux(e))
  )
    dx(t, n);
  else if (((n = Vv(e, t, n, r)), n !== null)) {
    var i = St();
    xn(n, e, r, i), fx(n, t, r);
  }
}
function ew(e, t, n) {
  var r = Mr(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ux(e)) dx(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), bn(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), Mp(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Vv(e, t, i, r)),
      n !== null && ((i = St()), xn(n, e, r, i), fx(n, t, r));
  }
}
function ux(e) {
  var t = e.alternate;
  return e === Ae || (t !== null && t === Ae);
}
function dx(e, t) {
  ks = Jl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function fx(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), hp(e, n);
  }
}
var Zl = {
    readContext: an,
    useCallback: ft,
    useContext: ft,
    useEffect: ft,
    useImperativeHandle: ft,
    useInsertionEffect: ft,
    useLayoutEffect: ft,
    useMemo: ft,
    useReducer: ft,
    useRef: ft,
    useState: ft,
    useDebugValue: ft,
    useDeferredValue: ft,
    useTransition: ft,
    useMutableSource: ft,
    useSyncExternalStore: ft,
    useId: ft,
    unstable_isNewReconciler: !1,
  },
  tw = {
    readContext: an,
    useCallback: function (e, t) {
      return (Mn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: an,
    useEffect: Hg,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Sl(4194308, 4, ix.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Sl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Sl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Mn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Mn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = ZC.bind(null, Ae, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Mn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Wg,
    useDebugValue: zp,
    useDeferredValue: function (e) {
      return (Mn().memoizedState = e);
    },
    useTransition: function () {
      var e = Wg(!1),
        t = e[0];
      return (e = JC.bind(null, e[1])), (Mn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ae,
        i = Mn();
      if (Oe) {
        if (n === void 0) throw Error(F(407));
        n = n();
      } else {
        if (((n = t()), et === null)) throw Error(F(349));
        pi & 30 || Qv(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Hg(Jv.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Js(9, qv.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Mn(),
        t = et.identifierPrefix;
      if (Oe) {
        var n = Qn,
          r = Xn;
        (n = (r & ~(1 << (32 - vn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Qs++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = qC++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  nw = {
    readContext: an,
    useCallback: sx,
    useContext: an,
    useEffect: Fp,
    useImperativeHandle: ox,
    useInsertionEffect: nx,
    useLayoutEffect: rx,
    useMemo: ax,
    useReducer: cd,
    useRef: tx,
    useState: function () {
      return cd(qs);
    },
    useDebugValue: zp,
    useDeferredValue: function (e) {
      var t = ln();
      return lx(t, Xe.memoizedState, e);
    },
    useTransition: function () {
      var e = cd(qs)[0],
        t = ln().memoizedState;
      return [e, t];
    },
    useMutableSource: Yv,
    useSyncExternalStore: Xv,
    useId: cx,
    unstable_isNewReconciler: !1,
  },
  rw = {
    readContext: an,
    useCallback: sx,
    useContext: an,
    useEffect: Fp,
    useImperativeHandle: ox,
    useInsertionEffect: nx,
    useLayoutEffect: rx,
    useMemo: ax,
    useReducer: ud,
    useRef: tx,
    useState: function () {
      return ud(qs);
    },
    useDebugValue: zp,
    useDeferredValue: function (e) {
      var t = ln();
      return Xe === null ? (t.memoizedState = e) : lx(t, Xe.memoizedState, e);
    },
    useTransition: function () {
      var e = ud(qs)[0],
        t = ln().memoizedState;
      return [e, t];
    },
    useMutableSource: Yv,
    useSyncExternalStore: Xv,
    useId: cx,
    unstable_isNewReconciler: !1,
  };
function pn(e, t) {
  if (e && e.defaultProps) {
    (t = Le({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ff(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Le({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var zc = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? bi(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = St(),
      i = Mr(e),
      o = Jn(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Pr(e, o, i)),
      t !== null && (xn(t, e, i, r), xl(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = St(),
      i = Mr(e),
      o = Jn(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Pr(e, o, i)),
      t !== null && (xn(t, e, i, r), xl(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = St(),
      r = Mr(e),
      i = Jn(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Pr(e, i, r)),
      t !== null && (xn(t, e, r, n), xl(t, e, r));
  },
};
function Ug(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Us(n, r) || !Us(i, o)
      : !0
  );
}
function px(e, t, n) {
  var r = !1,
    i = Lr,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = an(o))
      : ((i = Rt(t) ? di : yt.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? co(e, i) : Lr)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = zc),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Vg(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && zc.enqueueReplaceState(t, t.state, null);
}
function pf(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Tp(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = an(o))
    : ((o = Rt(t) ? di : yt.current), (i.context = co(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (ff(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && zc.enqueueReplaceState(i, i.state, null),
      Ql(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function ho(e, t) {
  try {
    var n = "",
      r = t;
    do (n += OS(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function dd(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function hf(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var iw = typeof WeakMap == "function" ? WeakMap : Map;
function hx(e, t, n) {
  (n = Jn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      tc || ((tc = !0), (kf = r)), hf(e, t);
    }),
    n
  );
}
function gx(e, t, n) {
  (n = Jn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        hf(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        hf(e, t),
          typeof r != "function" &&
            (Er === null ? (Er = new Set([this])) : Er.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Gg(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new iw();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = vw.bind(null, e, t, n)), t.then(e, e));
}
function Kg(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Yg(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Jn(-1, 1)), (t.tag = 2), Pr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ow = ar.ReactCurrentOwner,
  Mt = !1;
function xt(e, t, n, r) {
  t.child = e === null ? Uv(t, null, n, r) : fo(t, e.child, n, r);
}
function Xg(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    eo(t, i),
    (r = Lp(e, t, n, r, o, i)),
    (n = $p()),
    e !== null && !Mt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        nr(e, t, i))
      : (Oe && n && Cp(t), (t.flags |= 1), xt(e, t, r, i), t.child)
  );
}
function Qg(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Vp(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), mx(e, t, o, r, i))
      : ((e = _l(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Us), n(s, r) && e.ref === t.ref)
    )
      return nr(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Tr(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function mx(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Us(o, r) && e.ref === t.ref)
      if (((Mt = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Mt = !0);
      else return (t.lanes = e.lanes), nr(e, t, i);
  }
  return gf(e, t, n, r, i);
}
function yx(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        we(Xi, $t),
        ($t |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          we(Xi, $t),
          ($t |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        we(Xi, $t),
        ($t |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      we(Xi, $t),
      ($t |= r);
  return xt(e, t, i, n), t.child;
}
function vx(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function gf(e, t, n, r, i) {
  var o = Rt(n) ? di : yt.current;
  return (
    (o = co(t, o)),
    eo(t, i),
    (n = Lp(e, t, n, r, o, i)),
    (r = $p()),
    e !== null && !Mt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        nr(e, t, i))
      : (Oe && r && Cp(t), (t.flags |= 1), xt(e, t, n, i), t.child)
  );
}
function qg(e, t, n, r, i) {
  if (Rt(n)) {
    var o = !0;
    Vl(t);
  } else o = !1;
  if ((eo(t, i), t.stateNode === null))
    Cl(e, t), px(t, n, r), pf(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = an(c))
      : ((c = Rt(n) ? di : yt.current), (c = co(t, c)));
    var u = n.getDerivedStateFromProps,
      d =
        typeof u == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== c) && Vg(t, s, r, c)),
      (fr = !1);
    var f = t.memoizedState;
    (s.state = f),
      Ql(t, r, s, i),
      (l = t.memoizedState),
      a !== r || f !== l || Tt.current || fr
        ? (typeof u == "function" && (ff(t, n, u, r), (l = t.memoizedState)),
          (a = fr || Ug(t, n, a, r, f, l, c))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = c),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Gv(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : pn(t.type, a)),
      (s.props = c),
      (d = t.pendingProps),
      (f = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = an(l))
        : ((l = Rt(n) ? di : yt.current), (l = co(t, l)));
    var p = n.getDerivedStateFromProps;
    (u =
      typeof p == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && Vg(t, s, r, l)),
      (fr = !1),
      (f = t.memoizedState),
      (s.state = f),
      Ql(t, r, s, i);
    var h = t.memoizedState;
    a !== d || f !== h || Tt.current || fr
      ? (typeof p == "function" && (ff(t, n, p, r), (h = t.memoizedState)),
        (c = fr || Ug(t, n, c, r, f, h, l) || !1)
          ? (u ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, h, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, h, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = h)),
        (s.props = r),
        (s.state = h),
        (s.context = l),
        (r = c))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return mf(e, t, n, r, o, i);
}
function mf(e, t, n, r, i, o) {
  vx(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Fg(t, n, !1), nr(e, t, o);
  (r = t.stateNode), (ow.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = fo(t, e.child, null, o)), (t.child = fo(t, null, a, o)))
      : xt(e, t, a, o),
    (t.memoizedState = r.state),
    i && Fg(t, n, !0),
    t.child
  );
}
function xx(e) {
  var t = e.stateNode;
  t.pendingContext
    ? $g(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && $g(e, t.context, !1),
    Rp(e, t.containerInfo);
}
function Jg(e, t, n, r, i) {
  return uo(), kp(i), (t.flags |= 256), xt(e, t, n, r), t.child;
}
var yf = { dehydrated: null, treeContext: null, retryLane: 0 };
function vf(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function bx(e, t, n) {
  var r = t.pendingProps,
    i = Ie.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    we(Ie, i & 1),
    e === null)
  )
    return (
      uf(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = Bc(s, r, 0, null)),
              (e = li(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = vf(n)),
              (t.memoizedState = yf),
              e)
            : Dp(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return sw(e, t, s, r, a, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Tr(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = Tr(a, o)) : ((o = li(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? vf(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = yf),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Tr(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Dp(e, t) {
  return (
    (t = Bc({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ba(e, t, n, r) {
  return (
    r !== null && kp(r),
    fo(t, e.child, null, n),
    (e = Dp(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function sw(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = dd(Error(F(422)))), Ba(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Bc({ mode: "visible", children: r.children }, i, 0, null)),
        (o = li(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && fo(t, e.child, null, s),
        (t.child.memoizedState = vf(s)),
        (t.memoizedState = yf),
        o);
  if (!(t.mode & 1)) return Ba(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(F(419))), (r = dd(o, r, void 0)), Ba(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Mt || a)) {
    if (((r = et), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), tr(e, i), xn(r, e, i, -1));
    }
    return Up(), (r = dd(Error(F(421)))), Ba(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = xw.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (zt = _r(i.nextSibling)),
      (Nt = t),
      (Oe = !0),
      (mn = null),
      e !== null &&
        ((Qt[qt++] = Xn),
        (Qt[qt++] = Qn),
        (Qt[qt++] = fi),
        (Xn = e.id),
        (Qn = e.overflow),
        (fi = t)),
      (t = Dp(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Zg(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), df(e.return, t, n);
}
function fd(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Sx(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((xt(e, t, r.children, n), (r = Ie.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Zg(e, n, t);
        else if (e.tag === 19) Zg(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((we(Ie, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && ql(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          fd(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ql(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        fd(t, !0, n, null, o);
        break;
      case "together":
        fd(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Cl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function nr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (hi |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(F(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Tr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Tr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function aw(e, t, n) {
  switch (t.tag) {
    case 3:
      xx(t), uo();
      break;
    case 5:
      Kv(t);
      break;
    case 1:
      Rt(t.type) && Vl(t);
      break;
    case 4:
      Rp(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      we(Yl, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (we(Ie, Ie.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? bx(e, t, n)
          : (we(Ie, Ie.current & 1),
            (e = nr(e, t, n)),
            e !== null ? e.sibling : null);
      we(Ie, Ie.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Sx(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        we(Ie, Ie.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), yx(e, t, n);
  }
  return nr(e, t, n);
}
var Cx, xf, wx, kx;
Cx = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
xf = function () {};
wx = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), ri(Fn.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Bd(e, i)), (r = Bd(e, r)), (o = []);
        break;
      case "select":
        (i = Le({}, i, { value: void 0 })),
          (r = Le({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Hd(e, i)), (r = Hd(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Hl);
    }
    Vd(n, r);
    var s;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var a = i[c];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (zs.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (
        ((a = i != null ? i[c] : void 0),
        r.hasOwnProperty(c) && l !== a && (l != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (o || (o = []), o.push(c, n)), (n = l);
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(c, l))
            : c === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(c, "" + l)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (zs.hasOwnProperty(c)
                ? (l != null && c === "onScroll" && Pe("scroll", e),
                  o || a === l || (o = []))
                : (o = o || []).push(c, l));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
kx = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ko(e, t) {
  if (!Oe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function pt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function lw(e, t, n) {
  var r = t.pendingProps;
  switch ((wp(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return pt(t), null;
    case 1:
      return Rt(t.type) && Ul(), pt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        po(),
        Me(Tt),
        Me(yt),
        Ip(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Da(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), mn !== null && (Ef(mn), (mn = null)))),
        xf(e, t),
        pt(t),
        null
      );
    case 5:
      Op(t);
      var i = ri(Xs.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        wx(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(F(166));
          return pt(t), null;
        }
        if (((e = ri(Fn.current)), Da(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[In] = t), (r[Ks] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Pe("cancel", r), Pe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Pe("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < ds.length; i++) Pe(ds[i], r);
              break;
            case "source":
              Pe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Pe("error", r), Pe("load", r);
              break;
            case "details":
              Pe("toggle", r);
              break;
            case "input":
              lg(r, o), Pe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                Pe("invalid", r);
              break;
            case "textarea":
              ug(r, o), Pe("invalid", r);
          }
          Vd(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      za(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      za(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : zs.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  Pe("scroll", r);
            }
          switch (n) {
            case "input":
              Ta(r), cg(r, o, !0);
              break;
            case "textarea":
              Ta(r), dg(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Hl);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Jy(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[In] = t),
            (e[Ks] = r),
            Cx(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Gd(n, r)), n)) {
              case "dialog":
                Pe("cancel", e), Pe("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Pe("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < ds.length; i++) Pe(ds[i], e);
                i = r;
                break;
              case "source":
                Pe("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                Pe("error", e), Pe("load", e), (i = r);
                break;
              case "details":
                Pe("toggle", e), (i = r);
                break;
              case "input":
                lg(e, r), (i = Bd(e, r)), Pe("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Le({}, r, { value: void 0 })),
                  Pe("invalid", e);
                break;
              case "textarea":
                ug(e, r), (i = Hd(e, r)), Pe("invalid", e);
                break;
              default:
                i = r;
            }
            Vd(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? tv(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Zy(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Ds(e, l)
                    : typeof l == "number" && Ds(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (zs.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && Pe("scroll", e)
                      : l != null && lp(e, o, l, s));
              }
            switch (n) {
              case "input":
                Ta(e), cg(e, r, !1);
                break;
              case "textarea":
                Ta(e), dg(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ar(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Qi(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Qi(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Hl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return pt(t), null;
    case 6:
      if (e && t.stateNode != null) kx(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(F(166));
        if (((n = ri(Xs.current)), ri(Fn.current), Da(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[In] = t),
            (o = r.nodeValue !== n) && ((e = Nt), e !== null))
          )
            switch (e.tag) {
              case 3:
                za(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  za(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[In] = t),
            (t.stateNode = r);
      }
      return pt(t), null;
    case 13:
      if (
        (Me(Ie),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Oe && zt !== null && t.mode & 1 && !(t.flags & 128))
          Wv(), uo(), (t.flags |= 98560), (o = !1);
        else if (((o = Da(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(F(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(F(317));
            o[In] = t;
          } else
            uo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          pt(t), (o = !1);
        } else mn !== null && (Ef(mn), (mn = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ie.current & 1 ? Qe === 0 && (Qe = 3) : Up())),
          t.updateQueue !== null && (t.flags |= 4),
          pt(t),
          null);
    case 4:
      return (
        po(), xf(e, t), e === null && Vs(t.stateNode.containerInfo), pt(t), null
      );
    case 10:
      return Ep(t.type._context), pt(t), null;
    case 17:
      return Rt(t.type) && Ul(), pt(t), null;
    case 19:
      if ((Me(Ie), (o = t.memoizedState), o === null)) return pt(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) Ko(o, !1);
        else {
          if (Qe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = ql(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Ko(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return we(Ie, (Ie.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            je() > go &&
            ((t.flags |= 128), (r = !0), Ko(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ql(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ko(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !Oe)
            )
              return pt(t), null;
          } else
            2 * je() - o.renderingStartTime > go &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ko(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = je()),
          (t.sibling = null),
          (n = Ie.current),
          we(Ie, r ? (n & 1) | 2 : n & 1),
          t)
        : (pt(t), null);
    case 22:
    case 23:
      return (
        Hp(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? $t & 1073741824 && (pt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : pt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(F(156, t.tag));
}
function cw(e, t) {
  switch ((wp(t), t.tag)) {
    case 1:
      return (
        Rt(t.type) && Ul(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        po(),
        Me(Tt),
        Me(yt),
        Ip(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Op(t), null;
    case 13:
      if (
        (Me(Ie), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(F(340));
        uo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Me(Ie), null;
    case 4:
      return po(), null;
    case 10:
      return Ep(t.type._context), null;
    case 22:
    case 23:
      return Hp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ja = !1,
  mt = !1,
  uw = typeof WeakSet == "function" ? WeakSet : Set,
  W = null;
function Yi(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ze(e, t, r);
      }
    else n.current = null;
}
function bf(e, t, n) {
  try {
    n();
  } catch (r) {
    ze(e, t, r);
  }
}
var em = !1;
function dw(e, t) {
  if (((nf = Bl), (e = Tv()), Sp(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            c = 0,
            u = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var p;
              d !== n || (i !== 0 && d.nodeType !== 3) || (a = s + i),
                d !== o || (r !== 0 && d.nodeType !== 3) || (l = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (p = d.firstChild) !== null;

            )
              (f = d), (d = p);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++c === i && (a = s),
                f === o && ++u === r && (l = s),
                (p = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = p;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (rf = { focusedElem: e, selectionRange: n }, Bl = !1, W = t; W !== null; )
    if (((t = W), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (W = e);
    else
      for (; W !== null; ) {
        t = W;
        try {
          var h = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (h !== null) {
                  var y = h.memoizedProps,
                    x = h.memoizedState,
                    g = t.stateNode,
                    v = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : pn(t.type, y),
                      x
                    );
                  g.__reactInternalSnapshotBeforeUpdate = v;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(F(163));
            }
        } catch (S) {
          ze(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (W = e);
          break;
        }
        W = t.return;
      }
  return (h = em), (em = !1), h;
}
function _s(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && bf(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Dc(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Sf(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function _x(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), _x(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[In], delete t[Ks], delete t[af], delete t[KC], delete t[YC])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Px(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function tm(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Px(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Cf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Hl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Cf(e, t, n), e = e.sibling; e !== null; ) Cf(e, t, n), (e = e.sibling);
}
function wf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (wf(e, t, n), e = e.sibling; e !== null; ) wf(e, t, n), (e = e.sibling);
}
var lt = null,
  hn = !1;
function cr(e, t, n) {
  for (n = n.child; n !== null; ) Ex(e, t, n), (n = n.sibling);
}
function Ex(e, t, n) {
  if ($n && typeof $n.onCommitFiberUnmount == "function")
    try {
      $n.onCommitFiberUnmount(Rc, n);
    } catch {}
  switch (n.tag) {
    case 5:
      mt || Yi(n, t);
    case 6:
      var r = lt,
        i = hn;
      (lt = null),
        cr(e, t, n),
        (lt = r),
        (hn = i),
        lt !== null &&
          (hn
            ? ((e = lt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : lt.removeChild(n.stateNode));
      break;
    case 18:
      lt !== null &&
        (hn
          ? ((e = lt),
            (n = n.stateNode),
            e.nodeType === 8
              ? od(e.parentNode, n)
              : e.nodeType === 1 && od(e, n),
            Ws(e))
          : od(lt, n.stateNode));
      break;
    case 4:
      (r = lt),
        (i = hn),
        (lt = n.stateNode.containerInfo),
        (hn = !0),
        cr(e, t, n),
        (lt = r),
        (hn = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !mt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && bf(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      cr(e, t, n);
      break;
    case 1:
      if (
        !mt &&
        (Yi(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ze(n, t, a);
        }
      cr(e, t, n);
      break;
    case 21:
      cr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((mt = (r = mt) || n.memoizedState !== null), cr(e, t, n), (mt = r))
        : cr(e, t, n);
      break;
    default:
      cr(e, t, n);
  }
}
function nm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new uw()),
      t.forEach(function (r) {
        var i = bw.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function dn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (lt = a.stateNode), (hn = !1);
              break e;
            case 3:
              (lt = a.stateNode.containerInfo), (hn = !0);
              break e;
            case 4:
              (lt = a.stateNode.containerInfo), (hn = !0);
              break e;
          }
          a = a.return;
        }
        if (lt === null) throw Error(F(160));
        Ex(o, s, i), (lt = null), (hn = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (c) {
        ze(i, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Mx(t, e), (t = t.sibling);
}
function Mx(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((dn(t, e), kn(e), r & 4)) {
        try {
          _s(3, e, e.return), Dc(3, e);
        } catch (y) {
          ze(e, e.return, y);
        }
        try {
          _s(5, e, e.return);
        } catch (y) {
          ze(e, e.return, y);
        }
      }
      break;
    case 1:
      dn(t, e), kn(e), r & 512 && n !== null && Yi(n, n.return);
      break;
    case 5:
      if (
        (dn(t, e),
        kn(e),
        r & 512 && n !== null && Yi(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Ds(i, "");
        } catch (y) {
          ze(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && Qy(i, o),
              Gd(a, s);
            var c = Gd(a, o);
            for (s = 0; s < l.length; s += 2) {
              var u = l[s],
                d = l[s + 1];
              u === "style"
                ? tv(i, d)
                : u === "dangerouslySetInnerHTML"
                ? Zy(i, d)
                : u === "children"
                ? Ds(i, d)
                : lp(i, u, d, c);
            }
            switch (a) {
              case "input":
                jd(i, o);
                break;
              case "textarea":
                qy(i, o);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var p = o.value;
                p != null
                  ? Qi(i, !!o.multiple, p, !1)
                  : f !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Qi(i, !!o.multiple, o.defaultValue, !0)
                      : Qi(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Ks] = o;
          } catch (y) {
            ze(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((dn(t, e), kn(e), r & 4)) {
        if (e.stateNode === null) throw Error(F(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (y) {
          ze(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (dn(t, e), kn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ws(t.containerInfo);
        } catch (y) {
          ze(e, e.return, y);
        }
      break;
    case 4:
      dn(t, e), kn(e);
      break;
    case 13:
      dn(t, e),
        kn(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (jp = je())),
        r & 4 && nm(e);
      break;
    case 22:
      if (
        ((u = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((mt = (c = mt) || u), dn(t, e), (mt = c)) : dn(t, e),
        kn(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !u && e.mode & 1)
        )
          for (W = e, u = e.child; u !== null; ) {
            for (d = W = u; W !== null; ) {
              switch (((f = W), (p = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  _s(4, f, f.return);
                  break;
                case 1:
                  Yi(f, f.return);
                  var h = f.stateNode;
                  if (typeof h.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (h.props = t.memoizedProps),
                        (h.state = t.memoizedState),
                        h.componentWillUnmount();
                    } catch (y) {
                      ze(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Yi(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    im(d);
                    continue;
                  }
              }
              p !== null ? ((p.return = f), (W = p)) : im(d);
            }
            u = u.sibling;
          }
        e: for (u = null, d = e; ; ) {
          if (d.tag === 5) {
            if (u === null) {
              u = d;
              try {
                (i = d.stateNode),
                  c
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = ev("display", s)));
              } catch (y) {
                ze(e, e.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (u === null)
              try {
                d.stateNode.nodeValue = c ? "" : d.memoizedProps;
              } catch (y) {
                ze(e, e.return, y);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            u === d && (u = null), (d = d.return);
          }
          u === d && (u = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      dn(t, e), kn(e), r & 4 && nm(e);
      break;
    case 21:
      break;
    default:
      dn(t, e), kn(e);
  }
}
function kn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Px(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(F(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Ds(i, ""), (r.flags &= -33));
          var o = tm(e);
          wf(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = tm(e);
          Cf(e, a, s);
          break;
        default:
          throw Error(F(161));
      }
    } catch (l) {
      ze(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function fw(e, t, n) {
  (W = e), Tx(e);
}
function Tx(e, t, n) {
  for (var r = (e.mode & 1) !== 0; W !== null; ) {
    var i = W,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || ja;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || mt;
        a = ja;
        var c = mt;
        if (((ja = s), (mt = l) && !c))
          for (W = i; W !== null; )
            (s = W),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? om(i)
                : l !== null
                ? ((l.return = s), (W = l))
                : om(i);
        for (; o !== null; ) (W = o), Tx(o), (o = o.sibling);
        (W = i), (ja = a), (mt = c);
      }
      rm(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (W = o)) : rm(e);
  }
}
function rm(e) {
  for (; W !== null; ) {
    var t = W;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              mt || Dc(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !mt)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : pn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && jg(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                jg(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var u = c.memoizedState;
                  if (u !== null) {
                    var d = u.dehydrated;
                    d !== null && Ws(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(F(163));
          }
        mt || (t.flags & 512 && Sf(t));
      } catch (f) {
        ze(t, t.return, f);
      }
    }
    if (t === e) {
      W = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (W = n);
      break;
    }
    W = t.return;
  }
}
function im(e) {
  for (; W !== null; ) {
    var t = W;
    if (t === e) {
      W = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (W = n);
      break;
    }
    W = t.return;
  }
}
function om(e) {
  for (; W !== null; ) {
    var t = W;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Dc(4, t);
          } catch (l) {
            ze(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ze(t, i, l);
            }
          }
          var o = t.return;
          try {
            Sf(t);
          } catch (l) {
            ze(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Sf(t);
          } catch (l) {
            ze(t, s, l);
          }
      }
    } catch (l) {
      ze(t, t.return, l);
    }
    if (t === e) {
      W = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (W = a);
      break;
    }
    W = t.return;
  }
}
var pw = Math.ceil,
  ec = ar.ReactCurrentDispatcher,
  Np = ar.ReactCurrentOwner,
  rn = ar.ReactCurrentBatchConfig,
  ie = 0,
  et = null,
  Ve = null,
  ut = 0,
  $t = 0,
  Xi = Nr(0),
  Qe = 0,
  Zs = null,
  hi = 0,
  Nc = 0,
  Bp = 0,
  Ps = null,
  Pt = null,
  jp = 0,
  go = 1 / 0,
  Vn = null,
  tc = !1,
  kf = null,
  Er = null,
  Wa = !1,
  mr = null,
  nc = 0,
  Es = 0,
  _f = null,
  wl = -1,
  kl = 0;
function St() {
  return ie & 6 ? je() : wl !== -1 ? wl : (wl = je());
}
function Mr(e) {
  return e.mode & 1
    ? ie & 2 && ut !== 0
      ? ut & -ut
      : QC.transition !== null
      ? (kl === 0 && (kl = pv()), kl)
      : ((e = ge),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : bv(e.type))),
        e)
    : 1;
}
function xn(e, t, n, r) {
  if (50 < Es) throw ((Es = 0), (_f = null), Error(F(185)));
  ha(e, n, r),
    (!(ie & 2) || e !== et) &&
      (e === et && (!(ie & 2) && (Nc |= n), Qe === 4 && hr(e, ut)),
      Ot(e, r),
      n === 1 && ie === 0 && !(t.mode & 1) && ((go = je() + 500), $c && Br()));
}
function Ot(e, t) {
  var n = e.callbackNode;
  QS(e, t);
  var r = Nl(e, e === et ? ut : 0);
  if (r === 0)
    n !== null && hg(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && hg(n), t === 1))
      e.tag === 0 ? XC(sm.bind(null, e)) : Nv(sm.bind(null, e)),
        VC(function () {
          !(ie & 6) && Br();
        }),
        (n = null);
    else {
      switch (hv(r)) {
        case 1:
          n = pp;
          break;
        case 4:
          n = dv;
          break;
        case 16:
          n = Dl;
          break;
        case 536870912:
          n = fv;
          break;
        default:
          n = Dl;
      }
      n = zx(n, Rx.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Rx(e, t) {
  if (((wl = -1), (kl = 0), ie & 6)) throw Error(F(327));
  var n = e.callbackNode;
  if (to() && e.callbackNode !== n) return null;
  var r = Nl(e, e === et ? ut : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = rc(e, r);
  else {
    t = r;
    var i = ie;
    ie |= 2;
    var o = Ix();
    (et !== e || ut !== t) && ((Vn = null), (go = je() + 500), ai(e, t));
    do
      try {
        mw();
        break;
      } catch (a) {
        Ox(e, a);
      }
    while (!0);
    Pp(),
      (ec.current = o),
      (ie = i),
      Ve !== null ? (t = 0) : ((et = null), (ut = 0), (t = Qe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = qd(e)), i !== 0 && ((r = i), (t = Pf(e, i)))), t === 1)
    )
      throw ((n = Zs), ai(e, 0), hr(e, r), Ot(e, je()), n);
    if (t === 6) hr(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !hw(i) &&
          ((t = rc(e, r)),
          t === 2 && ((o = qd(e)), o !== 0 && ((r = o), (t = Pf(e, o)))),
          t === 1))
      )
        throw ((n = Zs), ai(e, 0), hr(e, r), Ot(e, je()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(F(345));
        case 2:
          Xr(e, Pt, Vn);
          break;
        case 3:
          if (
            (hr(e, r), (r & 130023424) === r && ((t = jp + 500 - je()), 10 < t))
          ) {
            if (Nl(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              St(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = sf(Xr.bind(null, e, Pt, Vn), t);
            break;
          }
          Xr(e, Pt, Vn);
          break;
        case 4:
          if ((hr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - vn(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = je() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * pw(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = sf(Xr.bind(null, e, Pt, Vn), r);
            break;
          }
          Xr(e, Pt, Vn);
          break;
        case 5:
          Xr(e, Pt, Vn);
          break;
        default:
          throw Error(F(329));
      }
    }
  }
  return Ot(e, je()), e.callbackNode === n ? Rx.bind(null, e) : null;
}
function Pf(e, t) {
  var n = Ps;
  return (
    e.current.memoizedState.isDehydrated && (ai(e, t).flags |= 256),
    (e = rc(e, t)),
    e !== 2 && ((t = Pt), (Pt = n), t !== null && Ef(t)),
    e
  );
}
function Ef(e) {
  Pt === null ? (Pt = e) : Pt.push.apply(Pt, e);
}
function hw(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!bn(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function hr(e, t) {
  for (
    t &= ~Bp,
      t &= ~Nc,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - vn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function sm(e) {
  if (ie & 6) throw Error(F(327));
  to();
  var t = Nl(e, 0);
  if (!(t & 1)) return Ot(e, je()), null;
  var n = rc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = qd(e);
    r !== 0 && ((t = r), (n = Pf(e, r)));
  }
  if (n === 1) throw ((n = Zs), ai(e, 0), hr(e, t), Ot(e, je()), n);
  if (n === 6) throw Error(F(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Xr(e, Pt, Vn),
    Ot(e, je()),
    null
  );
}
function Wp(e, t) {
  var n = ie;
  ie |= 1;
  try {
    return e(t);
  } finally {
    (ie = n), ie === 0 && ((go = je() + 500), $c && Br());
  }
}
function gi(e) {
  mr !== null && mr.tag === 0 && !(ie & 6) && to();
  var t = ie;
  ie |= 1;
  var n = rn.transition,
    r = ge;
  try {
    if (((rn.transition = null), (ge = 1), e)) return e();
  } finally {
    (ge = r), (rn.transition = n), (ie = t), !(ie & 6) && Br();
  }
}
function Hp() {
  ($t = Xi.current), Me(Xi);
}
function ai(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), UC(n)), Ve !== null))
    for (n = Ve.return; n !== null; ) {
      var r = n;
      switch ((wp(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ul();
          break;
        case 3:
          po(), Me(Tt), Me(yt), Ip();
          break;
        case 5:
          Op(r);
          break;
        case 4:
          po();
          break;
        case 13:
          Me(Ie);
          break;
        case 19:
          Me(Ie);
          break;
        case 10:
          Ep(r.type._context);
          break;
        case 22:
        case 23:
          Hp();
      }
      n = n.return;
    }
  if (
    ((et = e),
    (Ve = e = Tr(e.current, null)),
    (ut = $t = t),
    (Qe = 0),
    (Zs = null),
    (Bp = Nc = hi = 0),
    (Pt = Ps = null),
    ni !== null)
  ) {
    for (t = 0; t < ni.length; t++)
      if (((n = ni[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    ni = null;
  }
  return e;
}
function Ox(e, t) {
  do {
    var n = Ve;
    try {
      if ((Pp(), (bl.current = Zl), Jl)) {
        for (var r = Ae.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Jl = !1;
      }
      if (
        ((pi = 0),
        (Je = Xe = Ae = null),
        (ks = !1),
        (Qs = 0),
        (Np.current = null),
        n === null || n.return === null)
      ) {
        (Qe = 1), (Zs = t), (Ve = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = ut),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            u = a,
            d = u.tag;
          if (!(u.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = u.alternate;
            f
              ? ((u.updateQueue = f.updateQueue),
                (u.memoizedState = f.memoizedState),
                (u.lanes = f.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var p = Kg(s);
          if (p !== null) {
            (p.flags &= -257),
              Yg(p, s, a, o, t),
              p.mode & 1 && Gg(o, c, t),
              (t = p),
              (l = c);
            var h = t.updateQueue;
            if (h === null) {
              var y = new Set();
              y.add(l), (t.updateQueue = y);
            } else h.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Gg(o, c, t), Up();
              break e;
            }
            l = Error(F(426));
          }
        } else if (Oe && a.mode & 1) {
          var x = Kg(s);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              Yg(x, s, a, o, t),
              kp(ho(l, a));
            break e;
          }
        }
        (o = l = ho(l, a)),
          Qe !== 4 && (Qe = 2),
          Ps === null ? (Ps = [o]) : Ps.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var g = hx(o, l, t);
              Bg(o, g);
              break e;
            case 1:
              a = l;
              var v = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof v.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Er === null || !Er.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var S = gx(o, a, t);
                Bg(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Lx(n);
    } catch (w) {
      (t = w), Ve === n && n !== null && (Ve = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ix() {
  var e = ec.current;
  return (ec.current = Zl), e === null ? Zl : e;
}
function Up() {
  (Qe === 0 || Qe === 3 || Qe === 2) && (Qe = 4),
    et === null || (!(hi & 268435455) && !(Nc & 268435455)) || hr(et, ut);
}
function rc(e, t) {
  var n = ie;
  ie |= 2;
  var r = Ix();
  (et !== e || ut !== t) && ((Vn = null), ai(e, t));
  do
    try {
      gw();
      break;
    } catch (i) {
      Ox(e, i);
    }
  while (!0);
  if ((Pp(), (ie = n), (ec.current = r), Ve !== null)) throw Error(F(261));
  return (et = null), (ut = 0), Qe;
}
function gw() {
  for (; Ve !== null; ) Ax(Ve);
}
function mw() {
  for (; Ve !== null && !jS(); ) Ax(Ve);
}
function Ax(e) {
  var t = Fx(e.alternate, e, $t);
  (e.memoizedProps = e.pendingProps),
    t === null ? Lx(e) : (Ve = t),
    (Np.current = null);
}
function Lx(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = cw(n, t)), n !== null)) {
        (n.flags &= 32767), (Ve = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Qe = 6), (Ve = null);
        return;
      }
    } else if (((n = lw(n, t, $t)), n !== null)) {
      Ve = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ve = t;
      return;
    }
    Ve = t = e;
  } while (t !== null);
  Qe === 0 && (Qe = 5);
}
function Xr(e, t, n) {
  var r = ge,
    i = rn.transition;
  try {
    (rn.transition = null), (ge = 1), yw(e, t, n, r);
  } finally {
    (rn.transition = i), (ge = r);
  }
  return null;
}
function yw(e, t, n, r) {
  do to();
  while (mr !== null);
  if (ie & 6) throw Error(F(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(F(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (qS(e, o),
    e === et && ((Ve = et = null), (ut = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Wa ||
      ((Wa = !0),
      zx(Dl, function () {
        return to(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = rn.transition), (rn.transition = null);
    var s = ge;
    ge = 1;
    var a = ie;
    (ie |= 4),
      (Np.current = null),
      dw(e, n),
      Mx(n, e),
      zC(rf),
      (Bl = !!nf),
      (rf = nf = null),
      (e.current = n),
      fw(n),
      WS(),
      (ie = a),
      (ge = s),
      (rn.transition = o);
  } else e.current = n;
  if (
    (Wa && ((Wa = !1), (mr = e), (nc = i)),
    (o = e.pendingLanes),
    o === 0 && (Er = null),
    VS(n.stateNode),
    Ot(e, je()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (tc) throw ((tc = !1), (e = kf), (kf = null), e);
  return (
    nc & 1 && e.tag !== 0 && to(),
    (o = e.pendingLanes),
    o & 1 ? (e === _f ? Es++ : ((Es = 0), (_f = e))) : (Es = 0),
    Br(),
    null
  );
}
function to() {
  if (mr !== null) {
    var e = hv(nc),
      t = rn.transition,
      n = ge;
    try {
      if (((rn.transition = null), (ge = 16 > e ? 16 : e), mr === null))
        var r = !1;
      else {
        if (((e = mr), (mr = null), (nc = 0), ie & 6)) throw Error(F(331));
        var i = ie;
        for (ie |= 4, W = e.current; W !== null; ) {
          var o = W,
            s = o.child;
          if (W.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (W = c; W !== null; ) {
                  var u = W;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _s(8, u, o);
                  }
                  var d = u.child;
                  if (d !== null) (d.return = u), (W = d);
                  else
                    for (; W !== null; ) {
                      u = W;
                      var f = u.sibling,
                        p = u.return;
                      if ((_x(u), u === c)) {
                        W = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = p), (W = f);
                        break;
                      }
                      W = p;
                    }
                }
              }
              var h = o.alternate;
              if (h !== null) {
                var y = h.child;
                if (y !== null) {
                  h.child = null;
                  do {
                    var x = y.sibling;
                    (y.sibling = null), (y = x);
                  } while (y !== null);
                }
              }
              W = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (W = s);
          else
            e: for (; W !== null; ) {
              if (((o = W), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    _s(9, o, o.return);
                }
              var g = o.sibling;
              if (g !== null) {
                (g.return = o.return), (W = g);
                break e;
              }
              W = o.return;
            }
        }
        var v = e.current;
        for (W = v; W !== null; ) {
          s = W;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (W = m);
          else
            e: for (s = v; W !== null; ) {
              if (((a = W), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Dc(9, a);
                  }
                } catch (w) {
                  ze(a, a.return, w);
                }
              if (a === s) {
                W = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (W = S);
                break e;
              }
              W = a.return;
            }
        }
        if (
          ((ie = i), Br(), $n && typeof $n.onPostCommitFiberRoot == "function")
        )
          try {
            $n.onPostCommitFiberRoot(Rc, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ge = n), (rn.transition = t);
    }
  }
  return !1;
}
function am(e, t, n) {
  (t = ho(n, t)),
    (t = hx(e, t, 1)),
    (e = Pr(e, t, 1)),
    (t = St()),
    e !== null && (ha(e, 1, t), Ot(e, t));
}
function ze(e, t, n) {
  if (e.tag === 3) am(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        am(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Er === null || !Er.has(r)))
        ) {
          (e = ho(n, e)),
            (e = gx(t, e, 1)),
            (t = Pr(t, e, 1)),
            (e = St()),
            t !== null && (ha(t, 1, e), Ot(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function vw(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = St()),
    (e.pingedLanes |= e.suspendedLanes & n),
    et === e &&
      (ut & n) === n &&
      (Qe === 4 || (Qe === 3 && (ut & 130023424) === ut && 500 > je() - jp)
        ? ai(e, 0)
        : (Bp |= n)),
    Ot(e, t);
}
function $x(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ia), (Ia <<= 1), !(Ia & 130023424) && (Ia = 4194304))
      : (t = 1));
  var n = St();
  (e = tr(e, t)), e !== null && (ha(e, t, n), Ot(e, n));
}
function xw(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), $x(e, n);
}
function bw(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(F(314));
  }
  r !== null && r.delete(t), $x(e, n);
}
var Fx;
Fx = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Tt.current) Mt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Mt = !1), aw(e, t, n);
      Mt = !!(e.flags & 131072);
    }
  else (Mt = !1), Oe && t.flags & 1048576 && Bv(t, Kl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Cl(e, t), (e = t.pendingProps);
      var i = co(t, yt.current);
      eo(t, n), (i = Lp(null, t, r, e, i, n));
      var o = $p();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Rt(r) ? ((o = !0), Vl(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Tp(t),
            (i.updater = zc),
            (t.stateNode = i),
            (i._reactInternals = t),
            pf(t, r, e, n),
            (t = mf(null, t, r, !0, o, n)))
          : ((t.tag = 0), Oe && o && Cp(t), xt(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Cl(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Cw(r)),
          (e = pn(r, e)),
          i)
        ) {
          case 0:
            t = gf(null, t, r, e, n);
            break e;
          case 1:
            t = qg(null, t, r, e, n);
            break e;
          case 11:
            t = Xg(null, t, r, e, n);
            break e;
          case 14:
            t = Qg(null, t, r, pn(r.type, e), n);
            break e;
        }
        throw Error(F(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : pn(r, i)),
        gf(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : pn(r, i)),
        qg(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((xx(t), e === null)) throw Error(F(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Gv(e, t),
          Ql(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = ho(Error(F(423)), t)), (t = Jg(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = ho(Error(F(424)), t)), (t = Jg(e, t, r, n, i));
            break e;
          } else
            for (
              zt = _r(t.stateNode.containerInfo.firstChild),
                Nt = t,
                Oe = !0,
                mn = null,
                n = Uv(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((uo(), r === i)) {
            t = nr(e, t, n);
            break e;
          }
          xt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Kv(t),
        e === null && uf(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        of(r, i) ? (s = null) : o !== null && of(r, o) && (t.flags |= 32),
        vx(e, t),
        xt(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && uf(t), null;
    case 13:
      return bx(e, t, n);
    case 4:
      return (
        Rp(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = fo(t, null, r, n)) : xt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : pn(r, i)),
        Xg(e, t, r, i, n)
      );
    case 7:
      return xt(e, t, t.pendingProps, n), t.child;
    case 8:
      return xt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return xt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          we(Yl, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (bn(o.value, s)) {
            if (o.children === i.children && !Tt.current) {
              t = nr(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = Jn(-1, n & -n)), (l.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var u = c.pending;
                        u === null
                          ? (l.next = l)
                          : ((l.next = u.next), (u.next = l)),
                          (c.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      df(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(F(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  df(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        xt(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        eo(t, n),
        (i = an(i)),
        (r = r(i)),
        (t.flags |= 1),
        xt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = pn(r, t.pendingProps)),
        (i = pn(r.type, i)),
        Qg(e, t, r, i, n)
      );
    case 15:
      return mx(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : pn(r, i)),
        Cl(e, t),
        (t.tag = 1),
        Rt(r) ? ((e = !0), Vl(t)) : (e = !1),
        eo(t, n),
        px(t, r, i),
        pf(t, r, i, n),
        mf(null, t, r, !0, e, n)
      );
    case 19:
      return Sx(e, t, n);
    case 22:
      return yx(e, t, n);
  }
  throw Error(F(156, t.tag));
};
function zx(e, t) {
  return uv(e, t);
}
function Sw(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function en(e, t, n, r) {
  return new Sw(e, t, n, r);
}
function Vp(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Cw(e) {
  if (typeof e == "function") return Vp(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === up)) return 11;
    if (e === dp) return 14;
  }
  return 2;
}
function Tr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = en(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function _l(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Vp(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Ni:
        return li(n.children, i, o, t);
      case cp:
        (s = 8), (i |= 8);
        break;
      case Fd:
        return (
          (e = en(12, n, t, i | 2)), (e.elementType = Fd), (e.lanes = o), e
        );
      case zd:
        return (e = en(13, n, t, i)), (e.elementType = zd), (e.lanes = o), e;
      case Dd:
        return (e = en(19, n, t, i)), (e.elementType = Dd), (e.lanes = o), e;
      case Ky:
        return Bc(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Vy:
              s = 10;
              break e;
            case Gy:
              s = 9;
              break e;
            case up:
              s = 11;
              break e;
            case dp:
              s = 14;
              break e;
            case dr:
              (s = 16), (r = null);
              break e;
          }
        throw Error(F(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = en(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function li(e, t, n, r) {
  return (e = en(7, e, r, t)), (e.lanes = n), e;
}
function Bc(e, t, n, r) {
  return (
    (e = en(22, e, r, t)),
    (e.elementType = Ky),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function pd(e, t, n) {
  return (e = en(6, e, null, t)), (e.lanes = n), e;
}
function hd(e, t, n) {
  return (
    (t = en(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function ww(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Yu(0)),
    (this.expirationTimes = Yu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Yu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Gp(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new ww(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = en(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Tp(o),
    e
  );
}
function kw(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Di,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Dx(e) {
  if (!e) return Lr;
  e = e._reactInternals;
  e: {
    if (bi(e) !== e || e.tag !== 1) throw Error(F(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Rt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(F(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Rt(n)) return Dv(e, n, t);
  }
  return t;
}
function Nx(e, t, n, r, i, o, s, a, l) {
  return (
    (e = Gp(n, r, !0, e, i, o, s, a, l)),
    (e.context = Dx(null)),
    (n = e.current),
    (r = St()),
    (i = Mr(n)),
    (o = Jn(r, i)),
    (o.callback = t ?? null),
    Pr(n, o, i),
    (e.current.lanes = i),
    ha(e, i, r),
    Ot(e, r),
    e
  );
}
function jc(e, t, n, r) {
  var i = t.current,
    o = St(),
    s = Mr(i);
  return (
    (n = Dx(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Jn(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Pr(i, t, s)),
    e !== null && (xn(e, i, s, o), xl(e, i, s)),
    s
  );
}
function ic(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function lm(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Kp(e, t) {
  lm(e, t), (e = e.alternate) && lm(e, t);
}
function _w() {
  return null;
}
var Bx =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Yp(e) {
  this._internalRoot = e;
}
Wc.prototype.render = Yp.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(F(409));
  jc(e, t, null, null);
};
Wc.prototype.unmount = Yp.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    gi(function () {
      jc(null, e, null, null);
    }),
      (t[er] = null);
  }
};
function Wc(e) {
  this._internalRoot = e;
}
Wc.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = yv();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < pr.length && t !== 0 && t < pr[n].priority; n++);
    pr.splice(n, 0, e), n === 0 && xv(e);
  }
};
function Xp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Hc(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function cm() {}
function Pw(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = ic(s);
        o.call(c);
      };
    }
    var s = Nx(t, r, e, 0, null, !1, !1, "", cm);
    return (
      (e._reactRootContainer = s),
      (e[er] = s.current),
      Vs(e.nodeType === 8 ? e.parentNode : e),
      gi(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = ic(l);
      a.call(c);
    };
  }
  var l = Gp(e, 0, !1, null, null, !1, !1, "", cm);
  return (
    (e._reactRootContainer = l),
    (e[er] = l.current),
    Vs(e.nodeType === 8 ? e.parentNode : e),
    gi(function () {
      jc(t, l, n, r);
    }),
    l
  );
}
function Uc(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = ic(s);
        a.call(l);
      };
    }
    jc(t, s, e, i);
  } else s = Pw(n, t, e, i, r);
  return ic(s);
}
gv = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = us(t.pendingLanes);
        n !== 0 &&
          (hp(t, n | 1), Ot(t, je()), !(ie & 6) && ((go = je() + 500), Br()));
      }
      break;
    case 13:
      gi(function () {
        var r = tr(e, 1);
        if (r !== null) {
          var i = St();
          xn(r, e, 1, i);
        }
      }),
        Kp(e, 1);
  }
};
gp = function (e) {
  if (e.tag === 13) {
    var t = tr(e, 134217728);
    if (t !== null) {
      var n = St();
      xn(t, e, 134217728, n);
    }
    Kp(e, 134217728);
  }
};
mv = function (e) {
  if (e.tag === 13) {
    var t = Mr(e),
      n = tr(e, t);
    if (n !== null) {
      var r = St();
      xn(n, e, t, r);
    }
    Kp(e, t);
  }
};
yv = function () {
  return ge;
};
vv = function (e, t) {
  var n = ge;
  try {
    return (ge = e), t();
  } finally {
    ge = n;
  }
};
Yd = function (e, t, n) {
  switch (t) {
    case "input":
      if ((jd(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Lc(r);
            if (!i) throw Error(F(90));
            Xy(r), jd(r, i);
          }
        }
      }
      break;
    case "textarea":
      qy(e, n);
      break;
    case "select":
      (t = n.value), t != null && Qi(e, !!n.multiple, t, !1);
  }
};
iv = Wp;
ov = gi;
var Ew = { usingClientEntryPoint: !1, Events: [ma, Hi, Lc, nv, rv, Wp] },
  Yo = {
    findFiberByHostInstance: ti,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Mw = {
    bundleType: Yo.bundleType,
    version: Yo.version,
    rendererPackageName: Yo.rendererPackageName,
    rendererConfig: Yo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ar.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = lv(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Yo.findFiberByHostInstance || _w,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ha = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ha.isDisabled && Ha.supportsFiber)
    try {
      (Rc = Ha.inject(Mw)), ($n = Ha);
    } catch {}
}
Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ew;
Wt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xp(t)) throw Error(F(200));
  return kw(e, t, null, n);
};
Wt.createRoot = function (e, t) {
  if (!Xp(e)) throw Error(F(299));
  var n = !1,
    r = "",
    i = Bx;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Gp(e, 1, !1, null, null, n, !1, r, i)),
    (e[er] = t.current),
    Vs(e.nodeType === 8 ? e.parentNode : e),
    new Yp(t)
  );
};
Wt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(F(188))
      : ((e = Object.keys(e).join(",")), Error(F(268, e)));
  return (e = lv(t)), (e = e === null ? null : e.stateNode), e;
};
Wt.flushSync = function (e) {
  return gi(e);
};
Wt.hydrate = function (e, t, n) {
  if (!Hc(t)) throw Error(F(200));
  return Uc(null, e, t, !0, n);
};
Wt.hydrateRoot = function (e, t, n) {
  if (!Xp(e)) throw Error(F(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Bx;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Nx(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[er] = t.current),
    Vs(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Wc(t);
};
Wt.render = function (e, t, n) {
  if (!Hc(t)) throw Error(F(200));
  return Uc(null, e, t, !1, n);
};
Wt.unmountComponentAtNode = function (e) {
  if (!Hc(e)) throw Error(F(40));
  return e._reactRootContainer
    ? (gi(function () {
        Uc(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[er] = null);
        });
      }),
      !0)
    : !1;
};
Wt.unstable_batchedUpdates = Wp;
Wt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Hc(n)) throw Error(F(200));
  if (e == null || e._reactInternals === void 0) throw Error(F(38));
  return Uc(e, t, n, !1, r);
};
Wt.version = "18.3.1-next-f1338f8080-20240426";
function jx() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jx);
    } catch (e) {
      console.error(e);
    }
}
jx(), (jy.exports = Wt);
var Qp = jy.exports;
const Ua = tp(Qp);
var Wx,
  um = Qp;
(Wx = um.createRoot), um.hydrateRoot;
/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ea() {
  return (
    (ea = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ea.apply(this, arguments)
  );
}
var yr;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(yr || (yr = {}));
const dm = "popstate";
function Tw(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: s, hash: a } = r.location;
    return Mf(
      "",
      { pathname: o, search: s, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : oc(i);
  }
  return Ow(t, n, null, e);
}
function Ge(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Hx(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Rw() {
  return Math.random().toString(36).substr(2, 8);
}
function fm(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Mf(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ea(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Eo(t) : t,
      { state: n, key: (t && t.key) || r || Rw() }
    )
  );
}
function oc(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Eo(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Ow(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    a = yr.Pop,
    l = null,
    c = u();
  c == null && ((c = 0), s.replaceState(ea({}, s.state, { idx: c }), ""));
  function u() {
    return (s.state || { idx: null }).idx;
  }
  function d() {
    a = yr.Pop;
    let x = u(),
      g = x == null ? null : x - c;
    (c = x), l && l({ action: a, location: y.location, delta: g });
  }
  function f(x, g) {
    a = yr.Push;
    let v = Mf(y.location, x, g);
    c = u() + 1;
    let m = fm(v, c),
      S = y.createHref(v);
    try {
      s.pushState(m, "", S);
    } catch (w) {
      if (w instanceof DOMException && w.name === "DataCloneError") throw w;
      i.location.assign(S);
    }
    o && l && l({ action: a, location: y.location, delta: 1 });
  }
  function p(x, g) {
    a = yr.Replace;
    let v = Mf(y.location, x, g);
    c = u();
    let m = fm(v, c),
      S = y.createHref(v);
    s.replaceState(m, "", S),
      o && l && l({ action: a, location: y.location, delta: 0 });
  }
  function h(x) {
    let g = i.location.origin !== "null" ? i.location.origin : i.location.href,
      v = typeof x == "string" ? x : oc(x);
    return (
      (v = v.replace(/ $/, "%20")),
      Ge(
        g,
        "No window.location.(origin|href) available to create URL for href: " +
          v
      ),
      new URL(v, g)
    );
  }
  let y = {
    get action() {
      return a;
    },
    get location() {
      return e(i, s);
    },
    listen(x) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(dm, d),
        (l = x),
        () => {
          i.removeEventListener(dm, d), (l = null);
        }
      );
    },
    createHref(x) {
      return t(i, x);
    },
    createURL: h,
    encodeLocation(x) {
      let g = h(x);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: f,
    replace: p,
    go(x) {
      return s.go(x);
    },
  };
  return y;
}
var pm;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(pm || (pm = {}));
function Iw(e, t, n) {
  return n === void 0 && (n = "/"), Aw(e, t, n, !1);
}
function Aw(e, t, n, r) {
  let i = typeof t == "string" ? Eo(t) : t,
    o = qp(i.pathname || "/", n);
  if (o == null) return null;
  let s = Ux(e);
  Lw(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let c = Vw(o);
    a = Hw(s[l], c, r);
  }
  return a;
}
function Ux(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, s, a) => {
    let l = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    l.relativePath.startsWith("/") &&
      (Ge(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let c = Rr([r, l.relativePath]),
      u = n.concat(l);
    o.children &&
      o.children.length > 0 &&
      (Ge(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      Ux(o.children, t, u, c)),
      !(o.path == null && !o.index) &&
        t.push({ path: c, score: jw(c, o.index), routesMeta: u });
  };
  return (
    e.forEach((o, s) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, s);
      else for (let l of Vx(o.path)) i(o, s, l);
    }),
    t
  );
}
function Vx(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let s = Vx(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? o : [o, l].join("/")))),
    i && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function Lw(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Ww(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const $w = /^:[\w-]+$/,
  Fw = 3,
  zw = 2,
  Dw = 1,
  Nw = 10,
  Bw = -2,
  hm = (e) => e === "*";
function jw(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(hm) && (r += Bw),
    t && (r += zw),
    n
      .filter((i) => !hm(i))
      .reduce((i, o) => i + ($w.test(o) ? Fw : o === "" ? Dw : Nw), r)
  );
}
function Ww(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Hw(e, t, n) {
  let { routesMeta: r } = e,
    i = {},
    o = "/",
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      c = a === r.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      d = gm(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: c },
        u
      ),
      f = l.route;
    if (
      (!d &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (d = gm(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          u
        )),
      !d)
    )
      return null;
    Object.assign(i, d.params),
      s.push({
        params: i,
        pathname: Rr([o, d.pathname]),
        pathnameBase: Xw(Rr([o, d.pathnameBase])),
        route: f,
      }),
      d.pathnameBase !== "/" && (o = Rr([o, d.pathnameBase]));
  }
  return s;
}
function gm(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Uw(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((c, u, d) => {
      let { paramName: f, isOptional: p } = u;
      if (f === "*") {
        let y = a[d] || "";
        s = o.slice(0, o.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const h = a[d];
      return (
        p && !h ? (c[f] = void 0) : (c[f] = (h || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function Uw(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Hx(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function Vw(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Hx(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function qp(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Gw(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Eo(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Kw(n, t)) : t,
    search: Qw(r),
    hash: qw(i),
  };
}
function Kw(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function gd(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Yw(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Gx(e, t) {
  let n = Yw(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Kx(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Eo(e))
    : ((i = ea({}, e)),
      Ge(
        !i.pathname || !i.pathname.includes("?"),
        gd("?", "pathname", "search", i)
      ),
      Ge(
        !i.pathname || !i.pathname.includes("#"),
        gd("#", "pathname", "hash", i)
      ),
      Ge(!i.search || !i.search.includes("#"), gd("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    s = o ? "/" : i.pathname,
    a;
  if (s == null) a = n;
  else {
    let d = t.length - 1;
    if (!r && s.startsWith("..")) {
      let f = s.split("/");
      for (; f[0] === ".."; ) f.shift(), (d -= 1);
      i.pathname = f.join("/");
    }
    a = d >= 0 ? t[d] : "/";
  }
  let l = Gw(i, a),
    c = s && s !== "/" && s.endsWith("/"),
    u = (o || s === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (c || u) && (l.pathname += "/"), l;
}
const Rr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Xw = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Qw = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  qw = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Jw(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Yx = ["post", "put", "patch", "delete"];
new Set(Yx);
const Zw = ["get", ...Yx];
new Set(Zw);
/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ta() {
  return (
    (ta = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ta.apply(this, arguments)
  );
}
const Jp = C.createContext(null),
  ek = C.createContext(null),
  Si = C.createContext(null),
  Vc = C.createContext(null),
  Ci = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Xx = C.createContext(null);
function tk(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  va() || Ge(!1);
  let { basename: r, navigator: i } = C.useContext(Si),
    { hash: o, pathname: s, search: a } = qx(e, { relative: n }),
    l = s;
  return (
    r !== "/" && (l = s === "/" ? r : Rr([r, s])),
    i.createHref({ pathname: l, search: a, hash: o })
  );
}
function va() {
  return C.useContext(Vc) != null;
}
function Gc() {
  return va() || Ge(!1), C.useContext(Vc).location;
}
function Qx(e) {
  C.useContext(Si).static || C.useLayoutEffect(e);
}
function nk() {
  let { isDataRoute: e } = C.useContext(Ci);
  return e ? gk() : rk();
}
function rk() {
  va() || Ge(!1);
  let e = C.useContext(Jp),
    { basename: t, future: n, navigator: r } = C.useContext(Si),
    { matches: i } = C.useContext(Ci),
    { pathname: o } = Gc(),
    s = JSON.stringify(Gx(i, n.v7_relativeSplatPath)),
    a = C.useRef(!1);
  return (
    Qx(() => {
      a.current = !0;
    }),
    C.useCallback(
      function (c, u) {
        if ((u === void 0 && (u = {}), !a.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let d = Kx(c, JSON.parse(s), o, u.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : Rr([t, d.pathname])),
          (u.replace ? r.replace : r.push)(d, u.state, u);
      },
      [t, r, s, o, e]
    )
  );
}
function qx(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = C.useContext(Si),
    { matches: i } = C.useContext(Ci),
    { pathname: o } = Gc(),
    s = JSON.stringify(Gx(i, r.v7_relativeSplatPath));
  return C.useMemo(() => Kx(e, JSON.parse(s), o, n === "path"), [e, s, o, n]);
}
function ik(e, t) {
  return ok(e, t);
}
function ok(e, t, n, r) {
  va() || Ge(!1);
  let { navigator: i } = C.useContext(Si),
    { matches: o } = C.useContext(Ci),
    s = o[o.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let c = Gc(),
    u;
  if (t) {
    var d;
    let x = typeof t == "string" ? Eo(t) : t;
    l === "/" || ((d = x.pathname) != null && d.startsWith(l)) || Ge(!1),
      (u = x);
  } else u = c;
  let f = u.pathname || "/",
    p = f;
  if (l !== "/") {
    let x = l.replace(/^\//, "").split("/");
    p = "/" + f.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let h = Iw(e, { pathname: p }),
    y = uk(
      h &&
        h.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, a, x.params),
            pathname: Rr([
              l,
              i.encodeLocation
                ? i.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === "/"
                ? l
                : Rr([
                    l,
                    i.encodeLocation
                      ? i.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && y
    ? C.createElement(
        Vc.Provider,
        {
          value: {
            location: ta(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: yr.Pop,
          },
        },
        y
      )
    : y;
}
function sk() {
  let e = hk(),
    t = Jw(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return C.createElement(
    C.Fragment,
    null,
    C.createElement("h2", null, "Unexpected Application Error!"),
    C.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? C.createElement("pre", { style: i }, n) : null,
    null
  );
}
const ak = C.createElement(sk, null);
class lk extends C.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? C.createElement(
          Ci.Provider,
          { value: this.props.routeContext },
          C.createElement(Xx.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function ck(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = C.useContext(Jp);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(Ci.Provider, { value: t }, r)
  );
}
function uk(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (o = r) != null &&
      o.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let u = s.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0
    );
    u >= 0 || Ge(!1), (s = s.slice(0, Math.min(s.length, u + 1)));
  }
  let l = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let u = 0; u < s.length; u++) {
      let d = s[u];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (c = u),
        d.route.id)
      ) {
        let { loaderData: f, errors: p } = n,
          h =
            d.route.loader &&
            f[d.route.id] === void 0 &&
            (!p || p[d.route.id] === void 0);
        if (d.route.lazy || h) {
          (l = !0), c >= 0 ? (s = s.slice(0, c + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((u, d, f) => {
    let p,
      h = !1,
      y = null,
      x = null;
    n &&
      ((p = a && d.route.id ? a[d.route.id] : void 0),
      (y = d.route.errorElement || ak),
      l &&
        (c < 0 && f === 0
          ? ((h = !0), (x = null))
          : c === f &&
            ((h = !0), (x = d.route.hydrateFallbackElement || null))));
    let g = t.concat(s.slice(0, f + 1)),
      v = () => {
        let m;
        return (
          p
            ? (m = y)
            : h
            ? (m = x)
            : d.route.Component
            ? (m = C.createElement(d.route.Component, null))
            : d.route.element
            ? (m = d.route.element)
            : (m = u),
          C.createElement(ck, {
            match: d,
            routeContext: { outlet: u, matches: g, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? C.createElement(lk, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: p,
          children: v(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
      : v();
  }, null);
}
var Jx = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Jx || {}),
  sc = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(sc || {});
function dk(e) {
  let t = C.useContext(Jp);
  return t || Ge(!1), t;
}
function fk(e) {
  let t = C.useContext(ek);
  return t || Ge(!1), t;
}
function pk(e) {
  let t = C.useContext(Ci);
  return t || Ge(!1), t;
}
function Zx(e) {
  let t = pk(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Ge(!1), n.route.id;
}
function hk() {
  var e;
  let t = C.useContext(Xx),
    n = fk(sc.UseRouteError),
    r = Zx(sc.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function gk() {
  let { router: e } = dk(Jx.UseNavigateStable),
    t = Zx(sc.UseNavigateStable),
    n = C.useRef(!1);
  return (
    Qx(() => {
      n.current = !0;
    }),
    C.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, ta({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function Qr(e) {
  Ge(!1);
}
function mk(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = yr.Pop,
    navigator: o,
    static: s = !1,
    future: a,
  } = e;
  va() && Ge(!1);
  let l = t.replace(/^\/*/, "/"),
    c = C.useMemo(
      () => ({
        basename: l,
        navigator: o,
        static: s,
        future: ta({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, o, s]
    );
  typeof r == "string" && (r = Eo(r));
  let {
      pathname: u = "/",
      search: d = "",
      hash: f = "",
      state: p = null,
      key: h = "default",
    } = r,
    y = C.useMemo(() => {
      let x = qp(u, l);
      return x == null
        ? null
        : {
            location: { pathname: x, search: d, hash: f, state: p, key: h },
            navigationType: i,
          };
    }, [l, u, d, f, p, h, i]);
  return y == null
    ? null
    : C.createElement(
        Si.Provider,
        { value: c },
        C.createElement(Vc.Provider, { children: n, value: y })
      );
}
function yk(e) {
  let { children: t, location: n } = e;
  return ik(Tf(t), n);
}
new Promise(() => {});
function Tf(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    C.Children.forEach(e, (r, i) => {
      if (!C.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === C.Fragment) {
        n.push.apply(n, Tf(r.props.children, o));
        return;
      }
      r.type !== Qr && Ge(!1), !r.props.index || !r.props.children || Ge(!1);
      let s = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = Tf(r.props.children, o)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Rf() {
  return (
    (Rf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Rf.apply(this, arguments)
  );
}
function vk(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function xk(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function bk(e, t) {
  return e.button === 0 && (!t || t === "_self") && !xk(e);
}
const Sk = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Ck = "6";
try {
  window.__reactRouterVersion = Ck;
} catch {}
const wk = "startTransition",
  mm = Ll[wk];
function kk(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = C.useRef();
  o.current == null && (o.current = Tw({ window: i, v5Compat: !0 }));
  let s = o.current,
    [a, l] = C.useState({ action: s.action, location: s.location }),
    { v7_startTransition: c } = r || {},
    u = C.useCallback(
      (d) => {
        c && mm ? mm(() => l(d)) : l(d);
      },
      [l, c]
    );
  return (
    C.useLayoutEffect(() => s.listen(u), [s, u]),
    C.createElement(mk, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: r,
    })
  );
}
const _k =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Pk = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  fn = C.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: s,
        state: a,
        target: l,
        to: c,
        preventScrollReset: u,
        unstable_viewTransition: d,
      } = t,
      f = vk(t, Sk),
      { basename: p } = C.useContext(Si),
      h,
      y = !1;
    if (typeof c == "string" && Pk.test(c) && ((h = c), _k))
      try {
        let m = new URL(window.location.href),
          S = c.startsWith("//") ? new URL(m.protocol + c) : new URL(c),
          w = qp(S.pathname, p);
        S.origin === m.origin && w != null
          ? (c = w + S.search + S.hash)
          : (y = !0);
      } catch {}
    let x = tk(c, { relative: i }),
      g = Ek(c, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: u,
        relative: i,
        unstable_viewTransition: d,
      });
    function v(m) {
      r && r(m), m.defaultPrevented || g(m);
    }
    return C.createElement(
      "a",
      Rf({}, f, { href: h || x, onClick: y || o ? r : v, ref: n, target: l })
    );
  });
var ym;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(ym || (ym = {}));
var vm;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(vm || (vm = {}));
function Ek(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: s,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    l = nk(),
    c = Gc(),
    u = qx(e, { relative: s });
  return C.useCallback(
    (d) => {
      if (bk(d, n)) {
        d.preventDefault();
        let f = r !== void 0 ? r : oc(c) === oc(u);
        l(e, {
          replace: f,
          state: i,
          preventScrollReset: o,
          relative: s,
          unstable_viewTransition: a,
        });
      }
    },
    [c, l, u, r, i, n, e, o, s, a]
  );
}
const Mk = () =>
  P.jsxs("section", {
    className: "home-page",
    children: [
      P.jsx("h2", {
        children: "Arquitectura de computadoras y ensambladores 2",
      }),
      P.jsx("h2", { children: "Proyecto fase 2" }),
      P.jsx("p", { children: "Grupo 3" }),
    ],
  });
var e1 = { exports: {} },
  Tk = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Rk = Tk,
  Ok = Rk;
function t1() {}
function n1() {}
n1.resetWarningCache = t1;
var Ik = function () {
  function e(r, i, o, s, a, l) {
    if (l !== Ok) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((c.name = "Invariant Violation"), c);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: n1,
    resetWarningCache: t1,
  };
  return (n.PropTypes = n), n;
};
e1.exports = Ik();
var Ak = e1.exports;
const Lk = tp(Ak);
function rr(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function V(e) {
  if (typeof e != "string") throw new Error(rr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function An(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function r1(e) {
  if (!An(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = r1(e[n]);
    }),
    t
  );
}
function tt(e, t, n = { clone: !0 }) {
  const r = n.clone ? { ...e } : e;
  return (
    An(e) &&
      An(t) &&
      Object.keys(t).forEach((i) => {
        An(t[i]) && Object.prototype.hasOwnProperty.call(e, i) && An(e[i])
          ? (r[i] = tt(e[i], t[i], n))
          : n.clone
          ? (r[i] = An(t[i]) ? r1(t[i]) : t[i])
          : (r[i] = t[i]);
      }),
    r
  );
}
function Ms(e, t) {
  return t ? tt(e, t, { clone: !1 }) : e;
}
function $k(e, t) {
  if (!e.containerQueries) return t;
  const n = Object.keys(t)
    .filter((r) => r.startsWith("@container"))
    .sort((r, i) => {
      var s, a;
      const o = /min-width:\s*([0-9.]+)/;
      return (
        +(((s = r.match(o)) == null ? void 0 : s[1]) || 0) -
        +(((a = i.match(o)) == null ? void 0 : a[1]) || 0)
      );
    });
  return n.length
    ? n.reduce(
        (r, i) => {
          const o = t[i];
          return delete r[i], (r[i] = o), r;
        },
        { ...t }
      )
    : t;
}
function Fk(e, t) {
  return (
    t === "@" ||
    (t.startsWith("@") &&
      (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/)))
  );
}
function zk(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) return null;
  const [, r, i] = n,
    o = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(i).up(o);
}
function Dk(e) {
  const t = (o, s) => o.replace("@media", s ? `@container ${s}` : "@container");
  function n(o, s) {
    (o.up = (...a) => t(e.breakpoints.up(...a), s)),
      (o.down = (...a) => t(e.breakpoints.down(...a), s)),
      (o.between = (...a) => t(e.breakpoints.between(...a), s)),
      (o.only = (...a) => t(e.breakpoints.only(...a), s)),
      (o.not = (...a) => {
        const l = t(e.breakpoints.not(...a), s);
        return l.includes("not all and")
          ? l
              .replace("not all and ", "")
              .replace("min-width:", "width<")
              .replace("max-width:", "width>")
              .replace("and", "or")
          : l;
      });
  }
  const r = {},
    i = (o) => (n(r, o), r);
  return n(i), { ...e, containerQueries: i };
}
const Kc = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  xm = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${Kc[e]}px)`,
  },
  Nk = {
    containerQueries: (e) => ({
      up: (t) => {
        let n = typeof t == "number" ? t : Kc[t] || t;
        return (
          typeof n == "number" && (n = `${n}px`),
          e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`
        );
      },
    }),
  };
function Sn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const o = r.breakpoints || xm;
    return t.reduce((s, a, l) => ((s[o.up(o.keys[l])] = n(t[l])), s), {});
  }
  if (typeof t == "object") {
    const o = r.breakpoints || xm;
    return Object.keys(t).reduce((s, a) => {
      if (Fk(o.keys, a)) {
        const l = zk(r.containerQueries ? r : Nk, a);
        l && (s[l] = n(t[a], a));
      } else if (Object.keys(o.values || Kc).includes(a)) {
        const l = o.up(a);
        s[l] = n(t[a], a);
      } else {
        const l = a;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return n(t);
}
function i1(e = {}) {
  var n;
  return (
    ((n = e.keys) == null
      ? void 0
      : n.reduce((r, i) => {
          const o = e.up(i);
          return (r[o] = {}), r;
        }, {})) || {}
  );
}
function o1(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function Bk(e, ...t) {
  const n = i1(e),
    r = [n, ...t].reduce((i, o) => tt(i, o), {});
  return o1(Object.keys(n), r);
}
function jk(e, t) {
  if (typeof e != "object") return {};
  const n = {},
    r = Object.keys(t);
  return (
    Array.isArray(e)
      ? r.forEach((i, o) => {
          o < e.length && (n[i] = !0);
        })
      : r.forEach((i) => {
          e[i] != null && (n[i] = !0);
        }),
    n
  );
}
function md({ values: e, breakpoints: t, base: n }) {
  const r = n || jk(e, t),
    i = Object.keys(r);
  if (i.length === 0) return e;
  let o;
  return i.reduce(
    (s, a, l) => (
      Array.isArray(e)
        ? ((s[a] = e[l] != null ? e[l] : e[o]), (o = l))
        : typeof e == "object"
        ? ((s[a] = e[a] != null ? e[a] : e[o]), (o = a))
        : (s[a] = e),
      s
    ),
    {}
  );
}
function Yc(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((i, o) => (i && i[o] ? i[o] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, i) => (r && r[i] != null ? r[i] : null), e);
}
function ac(e, t, n, r = n) {
  let i;
  return (
    typeof e == "function"
      ? (i = e(n))
      : Array.isArray(e)
      ? (i = e[n] || r)
      : (i = Yc(e, n) || r),
    t && (i = t(i, r, e)),
    i
  );
}
function We(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: i } = e,
    o = (s) => {
      if (s[t] == null) return null;
      const a = s[t],
        l = s.theme,
        c = Yc(l, r) || {};
      return Sn(s, a, (d) => {
        let f = ac(c, i, d);
        return (
          d === f &&
            typeof d == "string" &&
            (f = ac(c, i, `${t}${d === "default" ? "" : V(d)}`, d)),
          n === !1 ? f : { [n]: f }
        );
      });
    };
  return (o.propTypes = {}), (o.filterProps = [t]), o;
}
function Wk(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Hk = { m: "margin", p: "padding" },
  Uk = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  bm = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  Vk = Wk((e) => {
    if (e.length > 2)
      if (bm[e]) e = bm[e];
      else return [e];
    const [t, n] = e.split(""),
      r = Hk[t],
      i = Uk[n] || "";
    return Array.isArray(i) ? i.map((o) => r + o) : [r + i];
  }),
  Zp = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  eh = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...Zp, ...eh];
function xa(e, t, n, r) {
  const i = Yc(e, t, !0) ?? n;
  return typeof i == "number" || typeof i == "string"
    ? (o) =>
        typeof o == "string"
          ? o
          : typeof i == "string"
          ? `calc(${o} * ${i})`
          : i * o
    : Array.isArray(i)
    ? (o) => {
        if (typeof o == "string") return o;
        const s = Math.abs(o),
          a = i[s];
        return o >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
      }
    : typeof i == "function"
    ? i
    : () => {};
}
function Xc(e) {
  return xa(e, "spacing", 8);
}
function mi(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Gk(e, t) {
  return (n) => e.reduce((r, i) => ((r[i] = mi(t, n)), r), {});
}
function Kk(e, t, n, r) {
  if (!t.includes(n)) return null;
  const i = Vk(n),
    o = Gk(i, r),
    s = e[n];
  return Sn(e, s, o);
}
function s1(e, t) {
  const n = Xc(e.theme);
  return Object.keys(e)
    .map((r) => Kk(e, t, r, n))
    .reduce(Ms, {});
}
function $e(e) {
  return s1(e, Zp);
}
$e.propTypes = {};
$e.filterProps = Zp;
function Fe(e) {
  return s1(e, eh);
}
Fe.propTypes = {};
Fe.filterProps = eh;
function Qc(...e) {
  const t = e.reduce(
      (r, i) => (
        i.filterProps.forEach((o) => {
          r[o] = i;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((i, o) => (t[o] ? Ms(i, t[o](r)) : i), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), [])),
    n
  );
}
function Jt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function cn(e, t) {
  return We({ prop: e, themeKey: "borders", transform: t });
}
const Yk = cn("border", Jt),
  Xk = cn("borderTop", Jt),
  Qk = cn("borderRight", Jt),
  qk = cn("borderBottom", Jt),
  Jk = cn("borderLeft", Jt),
  Zk = cn("borderColor"),
  e_ = cn("borderTopColor"),
  t_ = cn("borderRightColor"),
  n_ = cn("borderBottomColor"),
  r_ = cn("borderLeftColor"),
  i_ = cn("outline", Jt),
  o_ = cn("outlineColor"),
  qc = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = xa(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: mi(t, r) });
      return Sn(e, e.borderRadius, n);
    }
    return null;
  };
qc.propTypes = {};
qc.filterProps = ["borderRadius"];
Qc(Yk, Xk, Qk, qk, Jk, Zk, e_, t_, n_, r_, qc, i_, o_);
const Jc = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = xa(e.theme, "spacing", 8),
      n = (r) => ({ gap: mi(t, r) });
    return Sn(e, e.gap, n);
  }
  return null;
};
Jc.propTypes = {};
Jc.filterProps = ["gap"];
const Zc = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = xa(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: mi(t, r) });
    return Sn(e, e.columnGap, n);
  }
  return null;
};
Zc.propTypes = {};
Zc.filterProps = ["columnGap"];
const eu = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = xa(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: mi(t, r) });
    return Sn(e, e.rowGap, n);
  }
  return null;
};
eu.propTypes = {};
eu.filterProps = ["rowGap"];
const s_ = We({ prop: "gridColumn" }),
  a_ = We({ prop: "gridRow" }),
  l_ = We({ prop: "gridAutoFlow" }),
  c_ = We({ prop: "gridAutoColumns" }),
  u_ = We({ prop: "gridAutoRows" }),
  d_ = We({ prop: "gridTemplateColumns" }),
  f_ = We({ prop: "gridTemplateRows" }),
  p_ = We({ prop: "gridTemplateAreas" }),
  h_ = We({ prop: "gridArea" });
Qc(Jc, Zc, eu, s_, a_, l_, c_, u_, d_, f_, p_, h_);
function no(e, t) {
  return t === "grey" ? t : e;
}
const g_ = We({ prop: "color", themeKey: "palette", transform: no }),
  m_ = We({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: no,
  }),
  y_ = We({ prop: "backgroundColor", themeKey: "palette", transform: no });
Qc(g_, m_, y_);
function Ft(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const v_ = We({ prop: "width", transform: Ft }),
  th = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var i, o, s, a, l;
        const r =
          ((s =
            (o = (i = e.theme) == null ? void 0 : i.breakpoints) == null
              ? void 0
              : o.values) == null
            ? void 0
            : s[n]) || Kc[n];
        return r
          ? ((l = (a = e.theme) == null ? void 0 : a.breakpoints) == null
              ? void 0
              : l.unit) !== "px"
            ? { maxWidth: `${r}${e.theme.breakpoints.unit}` }
            : { maxWidth: r }
          : { maxWidth: Ft(n) };
      };
      return Sn(e, e.maxWidth, t);
    }
    return null;
  };
th.filterProps = ["maxWidth"];
const x_ = We({ prop: "minWidth", transform: Ft }),
  b_ = We({ prop: "height", transform: Ft }),
  S_ = We({ prop: "maxHeight", transform: Ft }),
  C_ = We({ prop: "minHeight", transform: Ft });
We({ prop: "size", cssProperty: "width", transform: Ft });
We({ prop: "size", cssProperty: "height", transform: Ft });
const w_ = We({ prop: "boxSizing" });
Qc(v_, th, x_, b_, S_, C_, w_);
const ba = {
  border: { themeKey: "borders", transform: Jt },
  borderTop: { themeKey: "borders", transform: Jt },
  borderRight: { themeKey: "borders", transform: Jt },
  borderBottom: { themeKey: "borders", transform: Jt },
  borderLeft: { themeKey: "borders", transform: Jt },
  borderColor: { themeKey: "palette" },
  borderTopColor: { themeKey: "palette" },
  borderRightColor: { themeKey: "palette" },
  borderBottomColor: { themeKey: "palette" },
  borderLeftColor: { themeKey: "palette" },
  outline: { themeKey: "borders", transform: Jt },
  outlineColor: { themeKey: "palette" },
  borderRadius: { themeKey: "shape.borderRadius", style: qc },
  color: { themeKey: "palette", transform: no },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: no,
  },
  backgroundColor: { themeKey: "palette", transform: no },
  p: { style: Fe },
  pt: { style: Fe },
  pr: { style: Fe },
  pb: { style: Fe },
  pl: { style: Fe },
  px: { style: Fe },
  py: { style: Fe },
  padding: { style: Fe },
  paddingTop: { style: Fe },
  paddingRight: { style: Fe },
  paddingBottom: { style: Fe },
  paddingLeft: { style: Fe },
  paddingX: { style: Fe },
  paddingY: { style: Fe },
  paddingInline: { style: Fe },
  paddingInlineStart: { style: Fe },
  paddingInlineEnd: { style: Fe },
  paddingBlock: { style: Fe },
  paddingBlockStart: { style: Fe },
  paddingBlockEnd: { style: Fe },
  m: { style: $e },
  mt: { style: $e },
  mr: { style: $e },
  mb: { style: $e },
  ml: { style: $e },
  mx: { style: $e },
  my: { style: $e },
  margin: { style: $e },
  marginTop: { style: $e },
  marginRight: { style: $e },
  marginBottom: { style: $e },
  marginLeft: { style: $e },
  marginX: { style: $e },
  marginY: { style: $e },
  marginInline: { style: $e },
  marginInlineStart: { style: $e },
  marginInlineEnd: { style: $e },
  marginBlock: { style: $e },
  marginBlockStart: { style: $e },
  marginBlockEnd: { style: $e },
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({ "@media print": { display: e } }),
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: Jc },
  rowGap: { style: eu },
  columnGap: { style: Zc },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: "zIndex" },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: "shadows" },
  width: { transform: Ft },
  maxWidth: { style: th },
  minWidth: { transform: Ft },
  height: { transform: Ft },
  maxHeight: { transform: Ft },
  minHeight: { transform: Ft },
  boxSizing: {},
  font: { themeKey: "font" },
  fontFamily: { themeKey: "typography" },
  fontSize: { themeKey: "typography" },
  fontStyle: { themeKey: "typography" },
  fontWeight: { themeKey: "typography" },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: "typography" },
};
function k_(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function __(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function P_() {
  function e(n, r, i, o) {
    const s = { [n]: r, theme: i },
      a = o[n];
    if (!a) return { [n]: r };
    const { cssProperty: l = n, themeKey: c, transform: u, style: d } = a;
    if (r == null) return null;
    if (c === "typography" && r === "inherit") return { [n]: r };
    const f = Yc(i, c) || {};
    return d
      ? d(s)
      : Sn(s, r, (h) => {
          let y = ac(f, u, h);
          return (
            h === y &&
              typeof h == "string" &&
              (y = ac(f, u, `${n}${h === "default" ? "" : V(h)}`, h)),
            l === !1 ? y : { [l]: y }
          );
        });
  }
  function t(n) {
    const { sx: r, theme: i = {} } = n || {};
    if (!r) return null;
    const o = i.unstable_sxConfig ?? ba;
    function s(a) {
      let l = a;
      if (typeof a == "function") l = a(i);
      else if (typeof a != "object") return a;
      if (!l) return null;
      const c = i1(i.breakpoints),
        u = Object.keys(c);
      let d = c;
      return (
        Object.keys(l).forEach((f) => {
          const p = __(l[f], i);
          if (p != null)
            if (typeof p == "object")
              if (o[f]) d = Ms(d, e(f, p, i, o));
              else {
                const h = Sn({ theme: i }, p, (y) => ({ [f]: y }));
                k_(h, p) ? (d[f] = t({ sx: p, theme: i })) : (d = Ms(d, h));
              }
            else d = Ms(d, e(f, p, i, o));
        }),
        $k(i, o1(u, d))
      );
    }
    return Array.isArray(r) ? r.map(s) : s(r);
  }
  return t;
}
const Mo = P_();
Mo.filterProps = ["sx"];
const E_ = (e) => {
  var r;
  const t = { systemProps: {}, otherProps: {} },
    n =
      ((r = e == null ? void 0 : e.theme) == null
        ? void 0
        : r.unstable_sxConfig) ?? ba;
  return (
    Object.keys(e).forEach((i) => {
      n[i] ? (t.systemProps[i] = e[i]) : (t.otherProps[i] = e[i]);
    }),
    t
  );
};
function tu(e) {
  const { sx: t, ...n } = e,
    { systemProps: r, otherProps: i } = E_(n);
  let o;
  return (
    Array.isArray(t)
      ? (o = [r, ...t])
      : typeof t == "function"
      ? (o = (...s) => {
          const a = t(...s);
          return An(a) ? { ...r, ...a } : r;
        })
      : (o = { ...r, ...t }),
    { ...i, sx: o }
  );
}
function lc() {
  return (
    (lc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    lc.apply(null, arguments)
  );
}
function a1(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var M_ =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  T_ = a1(function (e) {
    return (
      M_.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  R_ = !1;
function O_(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function I_(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var A_ = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (i) {
        var o;
        r.tags.length === 0
          ? r.insertionPoint
            ? (o = r.insertionPoint.nextSibling)
            : r.prepend
            ? (o = r.container.firstChild)
            : (o = r.before)
          : (o = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(i, o),
          r.tags.push(i);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !R_ : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(I_(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = O_(i);
          try {
            o.insertRule(r, o.cssRules.length);
          } catch {}
        } else i.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          var i;
          return (i = r.parentNode) == null ? void 0 : i.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  ht = "-ms-",
  cc = "-moz-",
  ce = "-webkit-",
  l1 = "comm",
  nh = "rule",
  rh = "decl",
  L_ = "@import",
  c1 = "@keyframes",
  $_ = "@layer",
  F_ = Math.abs,
  nu = String.fromCharCode,
  z_ = Object.assign;
function D_(e, t) {
  return ct(e, 0) ^ 45
    ? (((((((t << 2) ^ ct(e, 0)) << 2) ^ ct(e, 1)) << 2) ^ ct(e, 2)) << 2) ^
        ct(e, 3)
    : 0;
}
function u1(e) {
  return e.trim();
}
function N_(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ue(e, t, n) {
  return e.replace(t, n);
}
function Of(e, t) {
  return e.indexOf(t);
}
function ct(e, t) {
  return e.charCodeAt(t) | 0;
}
function na(e, t, n) {
  return e.slice(t, n);
}
function Rn(e) {
  return e.length;
}
function ih(e) {
  return e.length;
}
function Va(e, t) {
  return t.push(e), e;
}
function B_(e, t) {
  return e.map(t).join("");
}
var ru = 1,
  mo = 1,
  d1 = 0,
  At = 0,
  Ue = 0,
  To = "";
function iu(e, t, n, r, i, o, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: o,
    line: ru,
    column: mo,
    length: s,
    return: "",
  };
}
function Xo(e, t) {
  return z_(iu("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function j_() {
  return Ue;
}
function W_() {
  return (
    (Ue = At > 0 ? ct(To, --At) : 0), mo--, Ue === 10 && ((mo = 1), ru--), Ue
  );
}
function Bt() {
  return (
    (Ue = At < d1 ? ct(To, At++) : 0), mo++, Ue === 10 && ((mo = 1), ru++), Ue
  );
}
function zn() {
  return ct(To, At);
}
function Pl() {
  return At;
}
function Sa(e, t) {
  return na(To, e, t);
}
function ra(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function f1(e) {
  return (ru = mo = 1), (d1 = Rn((To = e))), (At = 0), [];
}
function p1(e) {
  return (To = ""), e;
}
function El(e) {
  return u1(Sa(At - 1, If(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function H_(e) {
  for (; (Ue = zn()) && Ue < 33; ) Bt();
  return ra(e) > 2 || ra(Ue) > 3 ? "" : " ";
}
function U_(e, t) {
  for (
    ;
    --t &&
    Bt() &&
    !(Ue < 48 || Ue > 102 || (Ue > 57 && Ue < 65) || (Ue > 70 && Ue < 97));

  );
  return Sa(e, Pl() + (t < 6 && zn() == 32 && Bt() == 32));
}
function If(e) {
  for (; Bt(); )
    switch (Ue) {
      case e:
        return At;
      case 34:
      case 39:
        e !== 34 && e !== 39 && If(Ue);
        break;
      case 40:
        e === 41 && If(e);
        break;
      case 92:
        Bt();
        break;
    }
  return At;
}
function V_(e, t) {
  for (; Bt() && e + Ue !== 57; ) if (e + Ue === 84 && zn() === 47) break;
  return "/*" + Sa(t, At - 1) + "*" + nu(e === 47 ? e : Bt());
}
function G_(e) {
  for (; !ra(zn()); ) Bt();
  return Sa(e, At);
}
function K_(e) {
  return p1(Ml("", null, null, null, [""], (e = f1(e)), 0, [0], e));
}
function Ml(e, t, n, r, i, o, s, a, l) {
  for (
    var c = 0,
      u = 0,
      d = s,
      f = 0,
      p = 0,
      h = 0,
      y = 1,
      x = 1,
      g = 1,
      v = 0,
      m = "",
      S = i,
      w = o,
      _ = r,
      k = m;
    x;

  )
    switch (((h = v), (v = Bt()))) {
      case 40:
        if (h != 108 && ct(k, d - 1) == 58) {
          Of((k += ue(El(v), "&", "&\f")), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += El(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += H_(h);
        break;
      case 92:
        k += U_(Pl() - 1, 7);
        continue;
      case 47:
        switch (zn()) {
          case 42:
          case 47:
            Va(Y_(V_(Bt(), Pl()), t, n), l);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * y:
        a[c++] = Rn(k) * g;
      case 125 * y:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            x = 0;
          case 59 + u:
            g == -1 && (k = ue(k, /\f/g, "")),
              p > 0 &&
                Rn(k) - d &&
                Va(
                  p > 32
                    ? Cm(k + ";", r, n, d - 1)
                    : Cm(ue(k, " ", "") + ";", r, n, d - 2),
                  l
                );
            break;
          case 59:
            k += ";";
          default:
            if (
              (Va((_ = Sm(k, t, n, c, u, i, a, m, (S = []), (w = []), d)), o),
              v === 123)
            )
              if (u === 0) Ml(k, t, _, _, S, o, d, a, w);
              else
                switch (f === 99 && ct(k, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ml(
                      e,
                      _,
                      _,
                      r && Va(Sm(e, _, _, 0, 0, i, a, m, i, (S = []), d), w),
                      i,
                      w,
                      d,
                      a,
                      r ? S : w
                    );
                    break;
                  default:
                    Ml(k, _, _, _, [""], w, 0, a, w);
                }
        }
        (c = u = p = 0), (y = g = 1), (m = k = ""), (d = s);
        break;
      case 58:
        (d = 1 + Rn(k)), (p = h);
      default:
        if (y < 1) {
          if (v == 123) --y;
          else if (v == 125 && y++ == 0 && W_() == 125) continue;
        }
        switch (((k += nu(v)), v * y)) {
          case 38:
            g = u > 0 ? 1 : ((k += "\f"), -1);
            break;
          case 44:
            (a[c++] = (Rn(k) - 1) * g), (g = 1);
            break;
          case 64:
            zn() === 45 && (k += El(Bt())),
              (f = zn()),
              (u = d = Rn((m = k += G_(Pl())))),
              v++;
            break;
          case 45:
            h === 45 && Rn(k) == 2 && (y = 0);
        }
    }
  return o;
}
function Sm(e, t, n, r, i, o, s, a, l, c, u) {
  for (
    var d = i - 1, f = i === 0 ? o : [""], p = ih(f), h = 0, y = 0, x = 0;
    h < r;
    ++h
  )
    for (var g = 0, v = na(e, d + 1, (d = F_((y = s[h])))), m = e; g < p; ++g)
      (m = u1(y > 0 ? f[g] + " " + v : ue(v, /&\f/g, f[g]))) && (l[x++] = m);
  return iu(e, t, n, i === 0 ? nh : a, l, c, u);
}
function Y_(e, t, n) {
  return iu(e, t, n, l1, nu(j_()), na(e, 2, -2), 0);
}
function Cm(e, t, n, r) {
  return iu(e, t, n, rh, na(e, 0, r), na(e, r + 1, -1), r);
}
function ro(e, t) {
  for (var n = "", r = ih(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || "";
  return n;
}
function X_(e, t, n, r) {
  switch (e.type) {
    case $_:
      if (e.children.length) break;
    case L_:
    case rh:
      return (e.return = e.return || e.value);
    case l1:
      return "";
    case c1:
      return (e.return = e.value + "{" + ro(e.children, r) + "}");
    case nh:
      e.value = e.props.join(",");
  }
  return Rn((n = ro(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function Q_(e) {
  var t = ih(e);
  return function (n, r, i, o) {
    for (var s = "", a = 0; a < t; a++) s += e[a](n, r, i, o) || "";
    return s;
  };
}
function q_(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var J_ = function (t, n, r) {
    for (
      var i = 0, o = 0;
      (i = o), (o = zn()), i === 38 && o === 12 && (n[r] = 1), !ra(o);

    )
      Bt();
    return Sa(t, At);
  },
  Z_ = function (t, n) {
    var r = -1,
      i = 44;
    do
      switch (ra(i)) {
        case 0:
          i === 38 && zn() === 12 && (n[r] = 1), (t[r] += J_(At - 1, n, r));
          break;
        case 2:
          t[r] += El(i);
          break;
        case 4:
          if (i === 44) {
            (t[++r] = zn() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += nu(i);
      }
    while ((i = Bt()));
    return t;
  },
  e2 = function (t, n) {
    return p1(Z_(f1(t), n));
  },
  wm = new WeakMap(),
  t2 = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          i = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !wm.get(r)) &&
        !i
      ) {
        wm.set(t, !0);
        for (
          var o = [], s = e2(n, o), a = r.props, l = 0, c = 0;
          l < s.length;
          l++
        )
          for (var u = 0; u < a.length; u++, c++)
            t.props[c] = o[l] ? s[l].replace(/&\f/g, a[u]) : a[u] + " " + s[l];
      }
    }
  },
  n2 = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function h1(e, t) {
  switch (D_(e, t)) {
    case 5103:
      return ce + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ce + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ce + e + cc + e + ht + e + e;
    case 6828:
    case 4268:
      return ce + e + ht + e + e;
    case 6165:
      return ce + e + ht + "flex-" + e + e;
    case 5187:
      return (
        ce + e + ue(e, /(\w+).+(:[^]+)/, ce + "box-$1$2" + ht + "flex-$1$2") + e
      );
    case 5443:
      return ce + e + ht + "flex-item-" + ue(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        ce +
        e +
        ht +
        "flex-line-pack" +
        ue(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return ce + e + ht + ue(e, "shrink", "negative") + e;
    case 5292:
      return ce + e + ht + ue(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        ce +
        "box-" +
        ue(e, "-grow", "") +
        ce +
        e +
        ht +
        ue(e, "grow", "positive") +
        e
      );
    case 4554:
      return ce + ue(e, /([^-])(transform)/g, "$1" + ce + "$2") + e;
    case 6187:
      return (
        ue(
          ue(ue(e, /(zoom-|grab)/, ce + "$1"), /(image-set)/, ce + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return ue(e, /(image-set\([^]*)/, ce + "$1$`$1");
    case 4968:
      return (
        ue(
          ue(e, /(.+:)(flex-)?(.*)/, ce + "box-pack:$3" + ht + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        ce +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ue(e, /(.+)-inline(.+)/, ce + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Rn(e) - 1 - t > 6)
        switch (ct(e, t + 1)) {
          case 109:
            if (ct(e, t + 4) !== 45) break;
          case 102:
            return (
              ue(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  ce +
                  "$2-$3$1" +
                  cc +
                  (ct(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Of(e, "stretch")
              ? h1(ue(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (ct(e, t + 1) !== 115) break;
    case 6444:
      switch (ct(e, Rn(e) - 3 - (~Of(e, "!important") && 10))) {
        case 107:
          return ue(e, ":", ":" + ce) + e;
        case 101:
          return (
            ue(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                ce +
                (ct(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                ce +
                "$2$3$1" +
                ht +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (ct(e, t + 11)) {
        case 114:
          return ce + e + ht + ue(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ce + e + ht + ue(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ce + e + ht + ue(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ce + e + ht + e + e;
  }
  return e;
}
var r2 = function (t, n, r, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case rh:
          t.return = h1(t.value, t.length);
          break;
        case c1:
          return ro([Xo(t, { value: ue(t.value, "@", "@" + ce) })], i);
        case nh:
          if (t.length)
            return B_(t.props, function (o) {
              switch (N_(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return ro(
                    [Xo(t, { props: [ue(o, /:(read-\w+)/, ":" + cc + "$1")] })],
                    i
                  );
                case "::placeholder":
                  return ro(
                    [
                      Xo(t, {
                        props: [ue(o, /:(plac\w+)/, ":" + ce + "input-$1")],
                      }),
                      Xo(t, { props: [ue(o, /:(plac\w+)/, ":" + cc + "$1")] }),
                      Xo(t, { props: [ue(o, /:(plac\w+)/, ht + "input-$1")] }),
                    ],
                    i
                  );
              }
              return "";
            });
      }
  },
  i2 = [r2],
  o2 = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (y) {
        var x = y.getAttribute("data-emotion");
        x.indexOf(" ") !== -1 &&
          (document.head.appendChild(y), y.setAttribute("data-s", ""));
      });
    }
    var i = t.stylisPlugins || i2,
      o = {},
      s,
      a = [];
    (s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (y) {
          for (
            var x = y.getAttribute("data-emotion").split(" "), g = 1;
            g < x.length;
            g++
          )
            o[x[g]] = !0;
          a.push(y);
        }
      );
    var l,
      c = [t2, n2];
    {
      var u,
        d = [
          X_,
          q_(function (y) {
            u.insert(y);
          }),
        ],
        f = Q_(c.concat(i, d)),
        p = function (x) {
          return ro(K_(x), f);
        };
      l = function (x, g, v, m) {
        (u = v),
          p(x ? x + "{" + g.styles + "}" : g.styles),
          m && (h.inserted[g.name] = !0);
      };
    }
    var h = {
      key: n,
      sheet: new A_({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: o,
      registered: {},
      insert: l,
    };
    return h.sheet.hydrate(a), h;
  },
  g1 = { exports: {} },
  ye = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nt = typeof Symbol == "function" && Symbol.for,
  oh = nt ? Symbol.for("react.element") : 60103,
  sh = nt ? Symbol.for("react.portal") : 60106,
  ou = nt ? Symbol.for("react.fragment") : 60107,
  su = nt ? Symbol.for("react.strict_mode") : 60108,
  au = nt ? Symbol.for("react.profiler") : 60114,
  lu = nt ? Symbol.for("react.provider") : 60109,
  cu = nt ? Symbol.for("react.context") : 60110,
  ah = nt ? Symbol.for("react.async_mode") : 60111,
  uu = nt ? Symbol.for("react.concurrent_mode") : 60111,
  du = nt ? Symbol.for("react.forward_ref") : 60112,
  fu = nt ? Symbol.for("react.suspense") : 60113,
  s2 = nt ? Symbol.for("react.suspense_list") : 60120,
  pu = nt ? Symbol.for("react.memo") : 60115,
  hu = nt ? Symbol.for("react.lazy") : 60116,
  a2 = nt ? Symbol.for("react.block") : 60121,
  l2 = nt ? Symbol.for("react.fundamental") : 60117,
  c2 = nt ? Symbol.for("react.responder") : 60118,
  u2 = nt ? Symbol.for("react.scope") : 60119;
function Ut(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case oh:
        switch (((e = e.type), e)) {
          case ah:
          case uu:
          case ou:
          case au:
          case su:
          case fu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case cu:
              case du:
              case hu:
              case pu:
              case lu:
                return e;
              default:
                return t;
            }
        }
      case sh:
        return t;
    }
  }
}
function m1(e) {
  return Ut(e) === uu;
}
ye.AsyncMode = ah;
ye.ConcurrentMode = uu;
ye.ContextConsumer = cu;
ye.ContextProvider = lu;
ye.Element = oh;
ye.ForwardRef = du;
ye.Fragment = ou;
ye.Lazy = hu;
ye.Memo = pu;
ye.Portal = sh;
ye.Profiler = au;
ye.StrictMode = su;
ye.Suspense = fu;
ye.isAsyncMode = function (e) {
  return m1(e) || Ut(e) === ah;
};
ye.isConcurrentMode = m1;
ye.isContextConsumer = function (e) {
  return Ut(e) === cu;
};
ye.isContextProvider = function (e) {
  return Ut(e) === lu;
};
ye.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === oh;
};
ye.isForwardRef = function (e) {
  return Ut(e) === du;
};
ye.isFragment = function (e) {
  return Ut(e) === ou;
};
ye.isLazy = function (e) {
  return Ut(e) === hu;
};
ye.isMemo = function (e) {
  return Ut(e) === pu;
};
ye.isPortal = function (e) {
  return Ut(e) === sh;
};
ye.isProfiler = function (e) {
  return Ut(e) === au;
};
ye.isStrictMode = function (e) {
  return Ut(e) === su;
};
ye.isSuspense = function (e) {
  return Ut(e) === fu;
};
ye.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === ou ||
    e === uu ||
    e === au ||
    e === su ||
    e === fu ||
    e === s2 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === hu ||
        e.$$typeof === pu ||
        e.$$typeof === lu ||
        e.$$typeof === cu ||
        e.$$typeof === du ||
        e.$$typeof === l2 ||
        e.$$typeof === c2 ||
        e.$$typeof === u2 ||
        e.$$typeof === a2))
  );
};
ye.typeOf = Ut;
g1.exports = ye;
var d2 = g1.exports,
  y1 = d2,
  f2 = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  p2 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  v1 = {};
v1[y1.ForwardRef] = f2;
v1[y1.Memo] = p2;
var h2 = !0;
function g2(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (i) {
      e[i] !== void 0 ? t.push(e[i] + ";") : (r += i + " ");
    }),
    r
  );
}
var x1 = function (t, n, r) {
    var i = t.key + "-" + n.name;
    (r === !1 || h2 === !1) &&
      t.registered[i] === void 0 &&
      (t.registered[i] = n.styles);
  },
  b1 = function (t, n, r) {
    x1(t, n, r);
    var i = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var o = n;
      do t.insert(n === o ? "." + i : "", o, t.sheet, !0), (o = o.next);
      while (o !== void 0);
    }
  };
function m2(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var y2 = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  v2 = !1,
  x2 = /[A-Z]|^ms/g,
  b2 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  S1 = function (t) {
    return t.charCodeAt(1) === 45;
  },
  km = function (t) {
    return t != null && typeof t != "boolean";
  },
  yd = a1(function (e) {
    return S1(e) ? e : e.replace(x2, "-$&").toLowerCase();
  }),
  _m = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(b2, function (r, i, o) {
            return (On = { name: i, styles: o, next: On }), i;
          });
    }
    return y2[t] !== 1 && !S1(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  },
  S2 =
    "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function ia(e, t, n) {
  if (n == null) return "";
  var r = n;
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var i = n;
      if (i.anim === 1)
        return (On = { name: i.name, styles: i.styles, next: On }), i.name;
      var o = n;
      if (o.styles !== void 0) {
        var s = o.next;
        if (s !== void 0)
          for (; s !== void 0; )
            (On = { name: s.name, styles: s.styles, next: On }), (s = s.next);
        var a = o.styles + ";";
        return a;
      }
      return C2(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = On,
          c = n(e);
        return (On = l), ia(e, t, c);
      }
      break;
    }
  }
  var u = n;
  if (t == null) return u;
  var d = t[u];
  return d !== void 0 ? d : u;
}
function C2(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++) r += ia(e, t, n[i]) + ";";
  else
    for (var o in n) {
      var s = n[o];
      if (typeof s != "object") {
        var a = s;
        t != null && t[a] !== void 0
          ? (r += o + "{" + t[a] + "}")
          : km(a) && (r += yd(o) + ":" + _m(o, a) + ";");
      } else {
        if (o === "NO_COMPONENT_SELECTOR" && v2) throw new Error(S2);
        if (
          Array.isArray(s) &&
          typeof s[0] == "string" &&
          (t == null || t[s[0]] === void 0)
        )
          for (var l = 0; l < s.length; l++)
            km(s[l]) && (r += yd(o) + ":" + _m(o, s[l]) + ";");
        else {
          var c = ia(e, t, s);
          switch (o) {
            case "animation":
            case "animationName": {
              r += yd(o) + ":" + c + ";";
              break;
            }
            default:
              r += o + "{" + c + "}";
          }
        }
      }
    }
  return r;
}
var Pm = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  On;
function lh(e, t, n) {
  if (
    e.length === 1 &&
    typeof e[0] == "object" &&
    e[0] !== null &&
    e[0].styles !== void 0
  )
    return e[0];
  var r = !0,
    i = "";
  On = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0) (r = !1), (i += ia(n, t, o));
  else {
    var s = o;
    i += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (((i += ia(n, t, e[a])), r)) {
      var l = o;
      i += l[a];
    }
  Pm.lastIndex = 0;
  for (var c = "", u; (u = Pm.exec(i)) !== null; ) c += "-" + u[1];
  var d = m2(i) + c;
  return { name: d, styles: i, next: On };
}
var w2 = function (t) {
    return t();
  },
  C1 = Ll.useInsertionEffect ? Ll.useInsertionEffect : !1,
  k2 = C1 || w2,
  Em = C1 || C.useLayoutEffect,
  w1 = C.createContext(typeof HTMLElement < "u" ? o2({ key: "css" }) : null);
w1.Provider;
var k1 = function (t) {
    return C.forwardRef(function (n, r) {
      var i = C.useContext(w1);
      return t(n, i, r);
    });
  },
  ch = C.createContext({}),
  _2 = k1(function (e, t) {
    var n = e.styles,
      r = lh([n], void 0, C.useContext(ch)),
      i = C.useRef();
    return (
      Em(
        function () {
          var o = t.key + "-global",
            s = new t.sheet.constructor({
              key: o,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            a = !1,
            l = document.querySelector(
              'style[data-emotion="' + o + " " + r.name + '"]'
            );
          return (
            t.sheet.tags.length && (s.before = t.sheet.tags[0]),
            l !== null &&
              ((a = !0), l.setAttribute("data-emotion", o), s.hydrate([l])),
            (i.current = [s, a]),
            function () {
              s.flush();
            }
          );
        },
        [t]
      ),
      Em(
        function () {
          var o = i.current,
            s = o[0],
            a = o[1];
          if (a) {
            o[1] = !1;
            return;
          }
          if ((r.next !== void 0 && b1(t, r.next, !0), s.tags.length)) {
            var l = s.tags[s.tags.length - 1].nextElementSibling;
            (s.before = l), s.flush();
          }
          t.insert("", r, s, !1);
        },
        [t, r.name]
      ),
      null
    );
  });
function P2() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return lh(t);
}
var uh = function () {
    var t = P2.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  E2 = T_,
  M2 = function (t) {
    return t !== "theme";
  },
  Mm = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? E2 : M2;
  },
  Tm = function (t, n, r) {
    var i;
    if (n) {
      var o = n.shouldForwardProp;
      i =
        t.__emotion_forwardProp && o
          ? function (s) {
              return t.__emotion_forwardProp(s) && o(s);
            }
          : o;
    }
    return typeof i != "function" && r && (i = t.__emotion_forwardProp), i;
  },
  T2 = !1,
  R2 = function (t) {
    var n = t.cache,
      r = t.serialized,
      i = t.isStringTag;
    return (
      x1(n, r, i),
      k2(function () {
        return b1(n, r, i);
      }),
      null
    );
  },
  O2 = function e(t, n) {
    var r = t.__emotion_real === t,
      i = (r && t.__emotion_base) || t,
      o,
      s;
    n !== void 0 && ((o = n.label), (s = n.target));
    var a = Tm(t, n, r),
      l = a || Mm(i),
      c = !l("as");
    return function () {
      var u = arguments,
        d =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (o !== void 0 && d.push("label:" + o + ";"),
        u[0] == null || u[0].raw === void 0)
      )
        d.push.apply(d, u);
      else {
        d.push(u[0][0]);
        for (var f = u.length, p = 1; p < f; p++) d.push(u[p], u[0][p]);
      }
      var h = k1(function (y, x, g) {
        var v = (c && y.as) || i,
          m = "",
          S = [],
          w = y;
        if (y.theme == null) {
          w = {};
          for (var _ in y) w[_] = y[_];
          w.theme = C.useContext(ch);
        }
        typeof y.className == "string"
          ? (m = g2(x.registered, S, y.className))
          : y.className != null && (m = y.className + " ");
        var k = lh(d.concat(S), x.registered, w);
        (m += x.key + "-" + k.name), s !== void 0 && (m += " " + s);
        var M = c && a === void 0 ? Mm(v) : l,
          b = {};
        for (var E in y) (c && E === "as") || (M(E) && (b[E] = y[E]));
        return (
          (b.className = m),
          g && (b.ref = g),
          C.createElement(
            C.Fragment,
            null,
            C.createElement(R2, {
              cache: x,
              serialized: k,
              isStringTag: typeof v == "string",
            }),
            C.createElement(v, b)
          )
        );
      });
      return (
        (h.displayName =
          o !== void 0
            ? o
            : "Styled(" +
              (typeof i == "string"
                ? i
                : i.displayName || i.name || "Component") +
              ")"),
        (h.defaultProps = t.defaultProps),
        (h.__emotion_real = h),
        (h.__emotion_base = i),
        (h.__emotion_styles = d),
        (h.__emotion_forwardProp = a),
        Object.defineProperty(h, "toString", {
          value: function () {
            return s === void 0 && T2 ? "NO_COMPONENT_SELECTOR" : "." + s;
          },
        }),
        (h.withComponent = function (y, x) {
          return e(y, lc({}, n, x, { shouldForwardProp: Tm(h, x, !0) })).apply(
            void 0,
            d
          );
        }),
        h
      );
    };
  },
  I2 = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
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
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  Af = O2.bind();
I2.forEach(function (e) {
  Af[e] = Af(e);
});
function A2(e) {
  return e == null || Object.keys(e).length === 0;
}
function L2(e) {
  const { styles: t, defaultTheme: n = {} } = e,
    r = typeof t == "function" ? (i) => t(A2(i) ? n : i) : t;
  return P.jsx(_2, { styles: r });
}
function _1(e, t) {
  return Af(e, t);
}
const $2 = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  F2 = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => ({ ...n, [r.key]: r.val }), {})
    );
  };
function z2(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
      ...i
    } = e,
    o = F2(t),
    s = Object.keys(o);
  function a(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function l(f) {
    return `@media (max-width:${
      (typeof t[f] == "number" ? t[f] : f) - r / 100
    }${n})`;
  }
  function c(f, p) {
    const h = s.indexOf(p);
    return `@media (min-width:${
      typeof t[f] == "number" ? t[f] : f
    }${n}) and (max-width:${
      (h !== -1 && typeof t[s[h]] == "number" ? t[s[h]] : p) - r / 100
    }${n})`;
  }
  function u(f) {
    return s.indexOf(f) + 1 < s.length ? c(f, s[s.indexOf(f) + 1]) : a(f);
  }
  function d(f) {
    const p = s.indexOf(f);
    return p === 0
      ? a(s[1])
      : p === s.length - 1
      ? l(s[p])
      : c(f, s[s.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: o,
    up: a,
    down: l,
    between: c,
    only: u,
    not: d,
    unit: n,
    ...i,
  };
}
const D2 = { borderRadius: 4 };
function P1(e = 8, t = Xc({ spacing: e })) {
  if (e.mui) return e;
  const n = (...r) =>
    (r.length === 0 ? [1] : r)
      .map((o) => {
        const s = t(o);
        return typeof s == "number" ? `${s}px` : s;
      })
      .join(" ");
  return (n.mui = !0), n;
}
function N2(e, t) {
  var r;
  const n = this;
  if (n.vars) {
    if (
      !((r = n.colorSchemes) != null && r[e]) ||
      typeof n.getColorSchemeSelector != "function"
    )
      return {};
    let i = n.getColorSchemeSelector(e);
    return (
      (i.includes("data-") || i.includes(".")) &&
        (i = `*:where(${i.replace(/\s*&$/, "")}) &`),
      { [i]: t }
    );
  }
  return n.palette.mode === e ? t : {};
}
function Ro(e = {}, ...t) {
  const {
      breakpoints: n = {},
      palette: r = {},
      spacing: i,
      shape: o = {},
      ...s
    } = e,
    a = z2(n),
    l = P1(i);
  let c = tt(
    {
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: { mode: "light", ...r },
      spacing: l,
      shape: { ...D2, ...o },
    },
    s
  );
  return (
    (c = Dk(c)),
    (c.applyStyles = N2),
    (c = t.reduce((u, d) => tt(u, d), c)),
    (c.unstable_sxConfig = {
      ...ba,
      ...(s == null ? void 0 : s.unstable_sxConfig),
    }),
    (c.unstable_sx = function (d) {
      return Mo({ sx: d, theme: this });
    }),
    c
  );
}
function B2(e) {
  return Object.keys(e).length === 0;
}
function j2(e = null) {
  const t = C.useContext(ch);
  return !t || B2(t) ? e : t;
}
const W2 = Ro();
function Ca(e = W2) {
  return j2(e);
}
function H2({ styles: e, themeId: t, defaultTheme: n = {} }) {
  const r = Ca(n),
    i = typeof e == "function" ? e((t && r[t]) || r) : e;
  return P.jsx(L2, { styles: i });
}
const Rm = (e) => e,
  U2 = () => {
    let e = Rm;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = Rm;
      },
    };
  },
  dh = U2();
function E1(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = E1(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function U() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = E1(e)) && (r && (r += " "), (r += t));
  return r;
}
function V2(e = {}) {
  const {
      themeId: t,
      defaultTheme: n,
      defaultClassName: r = "MuiBox-root",
      generateClassName: i,
    } = e,
    o = _1("div", {
      shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as",
    })(Mo);
  return C.forwardRef(function (l, c) {
    const u = Ca(n),
      { className: d, component: f = "div", ...p } = tu(l);
    return P.jsx(o, {
      as: f,
      ref: c,
      className: U(d, i ? i(r) : r),
      theme: (t && u[t]) || u,
      ...p,
    });
  });
}
const G2 = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected",
};
function ne(e, t, n = "Mui") {
  const r = G2[t];
  return r ? `${n}-${r}` : `${dh.generate(e)}-${t}`;
}
function ae(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((i) => {
      r[i] = ne(e, i, n);
    }),
    r
  );
}
const K2 = Ro();
function vd(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Lf(e, t, n) {
  return X2(t) ? n : t[e] || t;
}
const Ga = Symbol("mui.processed_props");
function Ka(e, t, n) {
  if (Ga in e) return e[Ga];
  const r = { ...e, theme: Lf(t, e.theme, n) };
  return (e[Ga] = r), (r[Ga] = r), r;
}
function Y2(e) {
  return e ? (t, n) => n[e] : null;
}
function Tl(e, t) {
  var r;
  const n = typeof e == "function" ? e(t) : e;
  if (Array.isArray(n)) return n.flatMap((i) => Tl(i, t));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    const { variants: i, ...o } = n;
    let s = o,
      a;
    e: for (let l = 0; l < i.length; l += 1) {
      const c = i[l];
      if (typeof c.props == "function") {
        if (
          (a ?? (a = { ...t, ...t.ownerState, ownerState: t.ownerState }),
          !c.props(a))
        )
          continue;
      } else
        for (const u in c.props)
          if (
            t[u] !== c.props[u] &&
            ((r = t.ownerState) == null ? void 0 : r[u]) !== c.props[u]
          )
            continue e;
      Array.isArray(s) || (s = [s]),
        typeof c.style == "function"
          ? (a ?? (a = { ...t, ...t.ownerState, ownerState: t.ownerState }),
            s.push(c.style(a)))
          : s.push(c.style);
    }
    return s;
  }
  return n;
}
function M1(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = K2,
      rootShouldForwardProp: r = vd,
      slotShouldForwardProp: i = vd,
    } = e,
    o = (a) => Mo(Ka(a, t, n));
  return (
    (o.__mui_systemSx = !0),
    (a, l = {}) => {
      $2(a, (_) => _.filter((k) => !(k != null && k.__mui_systemSx)));
      const {
          name: c,
          slot: u,
          skipVariantsResolver: d,
          skipSx: f,
          overridesResolver: p = Y2(q2(u)),
          ...h
        } = l,
        y = d !== void 0 ? d : (u && u !== "Root" && u !== "root") || !1,
        x = f || !1;
      let g,
        v = vd;
      u === "Root" || u === "root"
        ? (v = r)
        : u
        ? (v = i)
        : Q2(a) && (v = void 0);
      const m = _1(a, { shouldForwardProp: v, label: g, ...h }),
        S = (_) =>
          (typeof _ == "function" && _.__emotion_real !== _) || An(_)
            ? (k) => Tl(_, Ka(k, t, n))
            : _,
        w = (_, ...k) => {
          let M = S(_);
          const b = k ? k.map(S) : [];
          c &&
            p &&
            b.push((I) => {
              const z = Lf(t, I.theme, n);
              if (
                !z.components ||
                !z.components[c] ||
                !z.components[c].styleOverrides
              )
                return null;
              const D = z.components[c].styleOverrides,
                L = {},
                A = Ka(I, t, n);
              for (const N in D) L[N] = Tl(D[N], A);
              return p(I, L);
            }),
            c &&
              !y &&
              b.push((I) => {
                var L, A;
                const z = Lf(t, I.theme, n),
                  D =
                    (A =
                      (L = z == null ? void 0 : z.components) == null
                        ? void 0
                        : L[c]) == null
                      ? void 0
                      : A.variants;
                return D ? Tl({ variants: D }, Ka(I, t, n)) : null;
              }),
            x || b.push(o);
          const E = b.length - k.length;
          if (Array.isArray(_) && E > 0) {
            const I = new Array(E).fill("");
            (M = [..._, ...I]), (M.raw = [..._.raw, ...I]);
          }
          const R = m(M, ...b);
          return a.muiName && (R.muiName = a.muiName), R;
        };
      return m.withConfig && (w.withConfig = m.withConfig), w;
    }
  );
}
function X2(e) {
  for (const t in e) return !1;
  return !0;
}
function Q2(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function q2(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const fh = M1();
function oa(e, t) {
  const n = { ...t };
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      const i = r;
      if (i === "components" || i === "slots") n[i] = { ...e[i], ...n[i] };
      else if (i === "componentsProps" || i === "slotProps") {
        const o = e[i],
          s = t[i];
        if (!s) n[i] = o || {};
        else if (!o) n[i] = s;
        else {
          n[i] = { ...s };
          for (const a in o)
            if (Object.prototype.hasOwnProperty.call(o, a)) {
              const l = a;
              n[i][l] = oa(o[l], s[l]);
            }
        }
      } else n[i] === void 0 && (n[i] = e[i]);
    }
  return n;
}
function J2(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : oa(t.components[n].defaultProps, r);
}
function gu({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let i = Ca(n);
  return r && (i = i[r] || i), J2({ theme: i, name: t, props: e });
}
const ir = typeof window < "u" ? C.useLayoutEffect : C.useEffect;
function Z2(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function ph(e, t = 0, n = 1) {
  return Z2(e, t, n);
}
function eP(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, i) =>
            i < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function $r(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return $r(eP(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(rr(9, e));
  let r = e.substring(t + 1, e.length - 1),
    i;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (i = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(
        i
      ))
    )
      throw new Error(rr(10, i));
  } else r = r.split(",");
  return (
    (r = r.map((o) => parseFloat(o))), { type: n, values: r, colorSpace: i }
  );
}
const tP = (e) => {
    const t = $r(e);
    return t.values
      .slice(0, 3)
      .map((n, r) => (t.type.includes("hsl") && r !== 0 ? `${n}%` : n))
      .join(" ");
  },
  fs = (e, t) => {
    try {
      return tP(e);
    } catch {
      return e;
    }
  };
function mu(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.includes("rgb")
      ? (r = r.map((i, o) => (o < 3 ? parseInt(i, 10) : i)))
      : t.includes("hsl") && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.includes("color") ? (r = `${n} ${r.join(" ")}`) : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function T1(e) {
  e = $r(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    i = t[2] / 100,
    o = r * Math.min(i, 1 - i),
    s = (c, u = (c + n / 30) % 12) =>
      i - o * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  let a = "rgb";
  const l = [
    Math.round(s(0) * 255),
    Math.round(s(8) * 255),
    Math.round(s(4) * 255),
  ];
  return (
    e.type === "hsla" && ((a += "a"), l.push(t[3])), mu({ type: a, values: l })
  );
}
function $f(e) {
  e = $r(e);
  let t = e.type === "hsl" || e.type === "hsla" ? $r(T1(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function nP(e, t) {
  const n = $f(e),
    r = $f(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function bt(e, t) {
  return (
    (e = $r(e)),
    (t = ph(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    mu(e)
  );
}
function Ya(e, t, n) {
  try {
    return bt(e, t);
  } catch {
    return e;
  }
}
function hh(e, t) {
  if (((e = $r(e)), (t = ph(t)), e.type.includes("hsl"))) e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return mu(e);
}
function be(e, t, n) {
  try {
    return hh(e, t);
  } catch {
    return e;
  }
}
function gh(e, t) {
  if (((e = $r(e)), (t = ph(t)), e.type.includes("hsl")))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return mu(e);
}
function Se(e, t, n) {
  try {
    return gh(e, t);
  } catch {
    return e;
  }
}
function rP(e, t = 0.15) {
  return $f(e) > 0.5 ? hh(e, t) : gh(e, t);
}
function Xa(e, t, n) {
  try {
    return rP(e, t);
  } catch {
    return e;
  }
}
function Ff(...e) {
  return e.reduce(
    (t, n) =>
      n == null
        ? t
        : function (...i) {
            t.apply(this, i), n.apply(this, i);
          },
    () => {}
  );
}
function yu(e, t = 166) {
  let n;
  function r(...i) {
    const o = () => {
      e.apply(this, i);
    };
    clearTimeout(n), (n = setTimeout(o, t));
  }
  return (
    (r.clear = () => {
      clearTimeout(n);
    }),
    r
  );
}
function iP(e, t) {
  return () => null;
}
function io(e, t) {
  var n, r, i;
  return (
    C.isValidElement(e) &&
    t.indexOf(
      e.type.muiName ??
        ((i =
          (r = (n = e.type) == null ? void 0 : n._payload) == null
            ? void 0
            : r.value) == null
          ? void 0
          : i.muiName)
    ) !== -1
  );
}
function It(e) {
  return (e && e.ownerDocument) || document;
}
function Dn(e) {
  return It(e).defaultView || window;
}
function oP(e, t) {
  return () => null;
}
function uc(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Om = 0;
function sP(e) {
  const [t, n] = C.useState(e),
    r = e || t;
  return (
    C.useEffect(() => {
      t == null && ((Om += 1), n(`mui-${Om}`));
    }, [t]),
    r
  );
}
const Im = Ll.useId;
function mh(e) {
  if (Im !== void 0) {
    const t = Im();
    return e ?? t;
  }
  return sP(e);
}
function aP(e, t, n, r, i) {
  return null;
}
function zf({ controlled: e, default: t, name: n, state: r = "value" }) {
  const { current: i } = C.useRef(e !== void 0),
    [o, s] = C.useState(t),
    a = i ? e : o,
    l = C.useCallback((c) => {
      i || s(c);
    }, []);
  return [a, l];
}
function ii(e) {
  const t = C.useRef(e);
  return (
    ir(() => {
      t.current = e;
    }),
    C.useRef((...n) => (0, t.current)(...n)).current
  );
}
function Ye(...e) {
  return C.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              uc(n, t);
            });
          },
    e
  );
}
const Am = {};
function R1(e, t) {
  const n = C.useRef(Am);
  return n.current === Am && (n.current = e(t)), n;
}
const lP = [];
function cP(e) {
  C.useEffect(e, lP);
}
class yh {
  constructor() {
    Y(this, "currentId", null);
    Y(this, "clear", () => {
      this.currentId !== null &&
        (clearTimeout(this.currentId), (this.currentId = null));
    });
    Y(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new yh();
  }
  start(t, n) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), n();
      }, t));
  }
}
function O1() {
  const e = R1(yh.create).current;
  return cP(e.disposeEffect), e;
}
function Lm(e) {
  try {
    return e.matches(":focus-visible");
  } catch {}
  return !1;
}
function I1(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function oe(e, t, n = void 0) {
  const r = {};
  for (const i in e) {
    const o = e[i];
    let s = "";
    for (let a = 0; a < o.length; a += 1) {
      const l = o[a];
      l && ((s += t(l) + " "), n && n[l] && (s += n[l] + " "));
    }
    r[i] = s;
  }
  return r;
}
function uP(e) {
  return typeof e == "string";
}
function A1(e, t, n) {
  return e === void 0 || uP(e)
    ? t
    : { ...t, ownerState: { ...t.ownerState, ...n } };
}
function L1(e, t = []) {
  if (e === void 0) return {};
  const n = {};
  return (
    Object.keys(e)
      .filter(
        (r) =>
          r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)
      )
      .forEach((r) => {
        n[r] = e[r];
      }),
    n
  );
}
function $m(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function"))
      .forEach((n) => {
        t[n] = e[n];
      }),
    t
  );
}
function $1(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: o,
  } = e;
  if (!t) {
    const p = U(
        n == null ? void 0 : n.className,
        o,
        i == null ? void 0 : i.className,
        r == null ? void 0 : r.className
      ),
      h = {
        ...(n == null ? void 0 : n.style),
        ...(i == null ? void 0 : i.style),
        ...(r == null ? void 0 : r.style),
      },
      y = { ...n, ...i, ...r };
    return (
      p.length > 0 && (y.className = p),
      Object.keys(h).length > 0 && (y.style = h),
      { props: y, internalRef: void 0 }
    );
  }
  const s = L1({ ...i, ...r }),
    a = $m(r),
    l = $m(i),
    c = t(s),
    u = U(
      c == null ? void 0 : c.className,
      n == null ? void 0 : n.className,
      o,
      i == null ? void 0 : i.className,
      r == null ? void 0 : r.className
    ),
    d = {
      ...(c == null ? void 0 : c.style),
      ...(n == null ? void 0 : n.style),
      ...(i == null ? void 0 : i.style),
      ...(r == null ? void 0 : r.style),
    },
    f = { ...c, ...n, ...l, ...a };
  return (
    u.length > 0 && (f.className = u),
    Object.keys(d).length > 0 && (f.style = d),
    { props: f, internalRef: c.ref }
  );
}
function F1(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Fm(e) {
  var d;
  const {
      elementType: t,
      externalSlotProps: n,
      ownerState: r,
      skipResolvingSlotProps: i = !1,
      ...o
    } = e,
    s = i ? {} : F1(n, r),
    { props: a, internalRef: l } = $1({ ...o, externalSlotProps: s }),
    c = Ye(
      l,
      s == null ? void 0 : s.ref,
      (d = e.additionalProps) == null ? void 0 : d.ref
    );
  return A1(t, { ...a, ref: c }, r);
}
function Oo(e) {
  return !e || !C.isValidElement(e)
    ? null
    : e.props.propertyIsEnumerable("ref")
    ? e.props.ref
    : e.ref;
}
const dP = C.createContext(),
  z1 = () => C.useContext(dP) ?? !1,
  fP = C.createContext(void 0);
function pP(e) {
  const { theme: t, name: n, props: r } = e;
  if (!t || !t.components || !t.components[n]) return r;
  const i = t.components[n];
  return i.defaultProps
    ? oa(i.defaultProps, r)
    : !i.styleOverrides && !i.variants
    ? oa(i, r)
    : r;
}
function hP({ props: e, name: t }) {
  const n = C.useContext(fP);
  return pP({ props: e, name: t, theme: { components: n } });
}
function gP(e = "") {
  function t(...r) {
    if (!r.length) return "";
    const i = r[0];
    return typeof i == "string" &&
      !i.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/
      )
      ? `, var(--${e ? `${e}-` : ""}${i}${t(...r.slice(1))})`
      : `, ${i}`;
  }
  return (r, ...i) => `var(--${e ? `${e}-` : ""}${r}${t(...i)})`;
}
const zm = (e, t, n, r = []) => {
    let i = e;
    t.forEach((o, s) => {
      s === t.length - 1
        ? Array.isArray(i)
          ? (i[Number(o)] = n)
          : i && typeof i == "object" && (i[o] = n)
        : i &&
          typeof i == "object" &&
          (i[o] || (i[o] = r.includes(o) ? [] : {}), (i = i[o]));
    });
  },
  mP = (e, t, n) => {
    function r(i, o = [], s = []) {
      Object.entries(i).forEach(([a, l]) => {
        (!n || (n && !n([...o, a]))) &&
          l != null &&
          (typeof l == "object" && Object.keys(l).length > 0
            ? r(l, [...o, a], Array.isArray(l) ? [...s, a] : s)
            : t([...o, a], l, s));
      });
    }
    r(e);
  },
  yP = (e, t) =>
    typeof t == "number"
      ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) =>
          e.includes(r)
        ) || e[e.length - 1].toLowerCase().indexOf("opacity") >= 0
        ? t
        : `${t}px`
      : t;
function xd(e, t) {
  const { prefix: n, shouldSkipGeneratingVar: r } = t || {},
    i = {},
    o = {},
    s = {};
  return (
    mP(
      e,
      (a, l, c) => {
        if (
          (typeof l == "string" || typeof l == "number") &&
          (!r || !r(a, l))
        ) {
          const u = `--${n ? `${n}-` : ""}${a.join("-")}`,
            d = yP(a, l);
          Object.assign(i, { [u]: d }),
            zm(o, a, `var(${u})`, c),
            zm(s, a, `var(${u}, ${d})`, c);
        }
      },
      (a) => a[0] === "vars"
    ),
    { css: i, vars: o, varsWithDefaults: s }
  );
}
function vP(e, t = {}) {
  const {
      getSelector: n = x,
      disableCssColorScheme: r,
      colorSchemeSelector: i,
    } = t,
    {
      colorSchemes: o = {},
      components: s,
      defaultColorScheme: a = "light",
      ...l
    } = e,
    { vars: c, css: u, varsWithDefaults: d } = xd(l, t);
  let f = d;
  const p = {},
    { [a]: h, ...y } = o;
  if (
    (Object.entries(y || {}).forEach(([m, S]) => {
      const { vars: w, css: _, varsWithDefaults: k } = xd(S, t);
      (f = tt(f, k)), (p[m] = { css: _, vars: w });
    }),
    h)
  ) {
    const { css: m, vars: S, varsWithDefaults: w } = xd(h, t);
    (f = tt(f, w)), (p[a] = { css: m, vars: S });
  }
  function x(m, S) {
    var _, k;
    let w = i;
    if (
      (i === "class" && (w = ".%s"),
      i === "data" && (w = "[data-%s]"),
      i != null &&
        i.startsWith("data-") &&
        !i.includes("%s") &&
        (w = `[${i}="%s"]`),
      m)
    ) {
      if (w === "media")
        return e.defaultColorScheme === m
          ? ":root"
          : {
              [`@media (prefers-color-scheme: ${
                ((k = (_ = o[m]) == null ? void 0 : _.palette) == null
                  ? void 0
                  : k.mode) || m
              })`]: { ":root": S },
            };
      if (w)
        return e.defaultColorScheme === m
          ? `:root, ${w.replace("%s", String(m))}`
          : w.replace("%s", String(m));
    }
    return ":root";
  }
  return {
    vars: f,
    generateThemeVars: () => {
      let m = { ...c };
      return (
        Object.entries(p).forEach(([, { vars: S }]) => {
          m = tt(m, S);
        }),
        m
      );
    },
    generateStyleSheets: () => {
      var M, b;
      const m = [],
        S = e.defaultColorScheme || "light";
      function w(E, R) {
        Object.keys(R).length &&
          m.push(typeof E == "string" ? { [E]: { ...R } } : E);
      }
      w(n(void 0, { ...u }), u);
      const { [S]: _, ...k } = p;
      if (_) {
        const { css: E } = _,
          R =
            (b = (M = o[S]) == null ? void 0 : M.palette) == null
              ? void 0
              : b.mode,
          I = !r && R ? { colorScheme: R, ...E } : { ...E };
        w(n(S, { ...I }), I);
      }
      return (
        Object.entries(k).forEach(([E, { css: R }]) => {
          var D, L;
          const I =
              (L = (D = o[E]) == null ? void 0 : D.palette) == null
                ? void 0
                : L.mode,
            z = !r && I ? { colorScheme: I, ...R } : { ...R };
          w(n(E, { ...z }), z);
        }),
        m
      );
    },
  };
}
function xP(e) {
  return function (n) {
    return e === "media"
      ? `@media (prefers-color-scheme: ${n})`
      : e
      ? e.startsWith("data-") && !e.includes("%s")
        ? `[${e}="${n}"] &`
        : e === "class"
        ? `.${n} &`
        : e === "data"
        ? `[data-${n}] &`
        : `${e.replace("%s", n)} &`
      : "&";
  };
}
const bP = Ro(),
  SP = fh("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`maxWidth${V(String(n.maxWidth))}`],
        n.fixed && t.fixed,
        n.disableGutters && t.disableGutters,
      ];
    },
  }),
  CP = (e) => gu({ props: e, name: "MuiContainer", defaultTheme: bP }),
  wP = (e, t) => {
    const n = (l) => ne(t, l),
      { classes: r, fixed: i, disableGutters: o, maxWidth: s } = e,
      a = {
        root: [
          "root",
          s && `maxWidth${V(String(s))}`,
          i && "fixed",
          o && "disableGutters",
        ],
      };
    return oe(a, n, r);
  };
function kP(e = {}) {
  const {
      createStyledComponent: t = SP,
      useThemeProps: n = CP,
      componentName: r = "MuiContainer",
    } = e,
    i = t(
      ({ theme: s, ownerState: a }) => ({
        width: "100%",
        marginLeft: "auto",
        boxSizing: "border-box",
        marginRight: "auto",
        ...(!a.disableGutters && {
          paddingLeft: s.spacing(2),
          paddingRight: s.spacing(2),
          [s.breakpoints.up("sm")]: {
            paddingLeft: s.spacing(3),
            paddingRight: s.spacing(3),
          },
        }),
      }),
      ({ theme: s, ownerState: a }) =>
        a.fixed &&
        Object.keys(s.breakpoints.values).reduce((l, c) => {
          const u = c,
            d = s.breakpoints.values[u];
          return (
            d !== 0 &&
              (l[s.breakpoints.up(u)] = {
                maxWidth: `${d}${s.breakpoints.unit}`,
              }),
            l
          );
        }, {}),
      ({ theme: s, ownerState: a }) => ({
        ...(a.maxWidth === "xs" && {
          [s.breakpoints.up("xs")]: {
            maxWidth: Math.max(s.breakpoints.values.xs, 444),
          },
        }),
        ...(a.maxWidth &&
          a.maxWidth !== "xs" && {
            [s.breakpoints.up(a.maxWidth)]: {
              maxWidth: `${s.breakpoints.values[a.maxWidth]}${
                s.breakpoints.unit
              }`,
            },
          }),
      })
    );
  return C.forwardRef(function (a, l) {
    const c = n(a),
      {
        className: u,
        component: d = "div",
        disableGutters: f = !1,
        fixed: p = !1,
        maxWidth: h = "lg",
        classes: y,
        ...x
      } = c,
      g = { ...c, component: d, disableGutters: f, fixed: p, maxWidth: h },
      v = wP(g, r);
    return P.jsx(i, {
      as: d,
      ownerState: g,
      className: U(v.root, u),
      ref: l,
      ...x,
    });
  });
}
const _P = (e, t) => e.filter((n) => t.includes(n)),
  Io = (e, t, n) => {
    const r = e.keys[0];
    Array.isArray(t)
      ? t.forEach((i, o) => {
          n((s, a) => {
            o <= e.keys.length - 1 &&
              (o === 0 ? Object.assign(s, a) : (s[e.up(e.keys[o])] = a));
          }, i);
        })
      : t && typeof t == "object"
      ? (Object.keys(t).length > e.keys.length
          ? e.keys
          : _P(e.keys, Object.keys(t))
        ).forEach((o) => {
          if (e.keys.includes(o)) {
            const s = t[o];
            s !== void 0 &&
              n((a, l) => {
                r === o ? Object.assign(a, l) : (a[e.up(o)] = l);
              }, s);
          }
        })
      : (typeof t == "number" || typeof t == "string") &&
        n((i, o) => {
          Object.assign(i, o);
        }, t);
  };
function or(e) {
  return e ? `Level${e}` : "";
}
function vh(e) {
  return e.unstable_level > 0 && e.container;
}
function PP(e) {
  return function (n) {
    return `var(--Grid-${n}Spacing${or(e.unstable_level)})`;
  };
}
function vu(e) {
  return function (n) {
    return e.unstable_level === 0
      ? `var(--Grid-${n}Spacing)`
      : `var(--Grid-${n}Spacing${or(e.unstable_level - 1)})`;
  };
}
function oo(e) {
  return e.unstable_level === 0
    ? "var(--Grid-columns)"
    : `var(--Grid-columns${or(e.unstable_level - 1)})`;
}
const EP = ({ theme: e, ownerState: t }) => {
    const n = vu(t),
      r = {};
    return (
      Io(e.breakpoints, t.size, (i, o) => {
        let s = {};
        o === "grow" && (s = { flexBasis: 0, flexGrow: 1, maxWidth: "100%" }),
          o === "auto" &&
            (s = {
              flexBasis: "auto",
              flexGrow: 0,
              flexShrink: 0,
              maxWidth: "none",
              width: "auto",
            }),
          typeof o == "number" &&
            (s = {
              flexGrow: 0,
              flexBasis: "auto",
              width: `calc(100% * ${o} / ${oo(t)} - (${oo(t)} - ${o}) * (${n(
                "column"
              )} / ${oo(t)}))`,
            }),
          i(r, s);
      }),
      r
    );
  },
  MP = ({ theme: e, ownerState: t }) => {
    const n = vu(t),
      r = {};
    return (
      Io(e.breakpoints, t.offset, (i, o) => {
        let s = {};
        o === "auto" && (s = { marginLeft: "auto" }),
          typeof o == "number" &&
            (s = {
              marginLeft:
                o === 0
                  ? "0px"
                  : `calc(100% * ${o} / ${oo(t)} + ${n("column")} * ${o} / ${oo(
                      t
                    )})`,
            }),
          i(r, s);
      }),
      r
    );
  },
  TP = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const n = vh(t)
      ? { [`--Grid-columns${or(t.unstable_level)}`]: oo(t) }
      : { "--Grid-columns": 12 };
    return (
      Io(e.breakpoints, t.columns, (r, i) => {
        r(n, { [`--Grid-columns${or(t.unstable_level)}`]: i });
      }),
      n
    );
  },
  RP = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const n = vu(t),
      r = vh(t)
        ? { [`--Grid-rowSpacing${or(t.unstable_level)}`]: n("row") }
        : {};
    return (
      Io(e.breakpoints, t.rowSpacing, (i, o) => {
        var s;
        i(r, {
          [`--Grid-rowSpacing${or(t.unstable_level)}`]:
            typeof o == "string"
              ? o
              : (s = e.spacing) == null
              ? void 0
              : s.call(e, o),
        });
      }),
      r
    );
  },
  OP = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const n = vu(t),
      r = vh(t)
        ? { [`--Grid-columnSpacing${or(t.unstable_level)}`]: n("column") }
        : {};
    return (
      Io(e.breakpoints, t.columnSpacing, (i, o) => {
        var s;
        i(r, {
          [`--Grid-columnSpacing${or(t.unstable_level)}`]:
            typeof o == "string"
              ? o
              : (s = e.spacing) == null
              ? void 0
              : s.call(e, o),
        });
      }),
      r
    );
  },
  IP = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const n = {};
    return (
      Io(e.breakpoints, t.direction, (r, i) => {
        r(n, { flexDirection: i });
      }),
      n
    );
  },
  AP = ({ ownerState: e }) => {
    const t = PP(e);
    return {
      minWidth: 0,
      boxSizing: "border-box",
      ...(e.container && {
        display: "flex",
        flexWrap: "wrap",
        ...(e.wrap && e.wrap !== "wrap" && { flexWrap: e.wrap }),
        gap: `${t("row")} ${t("column")}`,
      }),
    };
  },
  LP = (e) => {
    const t = [];
    return (
      Object.entries(e).forEach(([n, r]) => {
        r !== !1 && r !== void 0 && t.push(`grid-${n}-${String(r)}`);
      }),
      t
    );
  },
  $P = (e, t = "xs") => {
    function n(r) {
      return r === void 0
        ? !1
        : (typeof r == "string" && !Number.isNaN(Number(r))) ||
            (typeof r == "number" && r > 0);
    }
    if (n(e)) return [`spacing-${t}-${String(e)}`];
    if (typeof e == "object" && !Array.isArray(e)) {
      const r = [];
      return (
        Object.entries(e).forEach(([i, o]) => {
          n(o) && r.push(`spacing-${i}-${String(o)}`);
        }),
        r
      );
    }
    return [];
  },
  FP = (e) =>
    e === void 0
      ? []
      : typeof e == "object"
      ? Object.entries(e).map(([t, n]) => `direction-${t}-${n}`)
      : [`direction-xs-${String(e)}`],
  zP = Ro(),
  DP = fh("div", {
    name: "MuiGrid",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  });
function NP(e) {
  return gu({ props: e, name: "MuiGrid", defaultTheme: zP });
}
function BP(e = {}) {
  const {
      createStyledComponent: t = DP,
      useThemeProps: n = NP,
      componentName: r = "MuiGrid",
    } = e,
    i = (l, c) => {
      const { container: u, direction: d, spacing: f, wrap: p, size: h } = l,
        y = {
          root: [
            "root",
            u && "container",
            p !== "wrap" && `wrap-xs-${String(p)}`,
            ...FP(d),
            ...LP(h),
            ...(u ? $P(f, c.breakpoints.keys[0]) : []),
          ],
        };
      return oe(y, (x) => ne(r, x), {});
    };
  function o(l, c, u = () => !0) {
    const d = {};
    return (
      l === null ||
        (Array.isArray(l)
          ? l.forEach((f, p) => {
              f !== null && u(f) && c.keys[p] && (d[c.keys[p]] = f);
            })
          : typeof l == "object"
          ? Object.keys(l).forEach((f) => {
              const p = l[f];
              p != null && u(p) && (d[f] = p);
            })
          : (d[c.keys[0]] = l)),
      d
    );
  }
  const s = t(TP, OP, RP, EP, IP, AP, MP),
    a = C.forwardRef(function (c, u) {
      const d = Ca(),
        f = n(c),
        p = tu(f),
        {
          className: h,
          children: y,
          columns: x = 12,
          container: g = !1,
          component: v = "div",
          direction: m = "row",
          wrap: S = "wrap",
          size: w = {},
          offset: _ = {},
          spacing: k = 0,
          rowSpacing: M = k,
          columnSpacing: b = k,
          unstable_level: E = 0,
          ...R
        } = p,
        I = o(w, d.breakpoints, (B) => B !== !1),
        z = o(_, d.breakpoints),
        D = c.columns ?? (E ? void 0 : x),
        L = c.spacing ?? (E ? void 0 : k),
        A = c.rowSpacing ?? c.spacing ?? (E ? void 0 : M),
        N = c.columnSpacing ?? c.spacing ?? (E ? void 0 : b),
        T = {
          ...p,
          level: E,
          columns: D,
          container: g,
          direction: m,
          wrap: S,
          spacing: L,
          rowSpacing: A,
          columnSpacing: N,
          size: I,
          offset: z,
        },
        $ = i(T, d);
      return P.jsx(s, {
        ref: u,
        as: v,
        ownerState: T,
        className: U($.root, h),
        ...R,
        children: C.Children.map(y, (B) => {
          var H;
          return C.isValidElement(B) && io(B, ["Grid"])
            ? C.cloneElement(B, {
                unstable_level:
                  ((H = B.props) == null ? void 0 : H.unstable_level) ?? E + 1,
              })
            : B;
        }),
      });
    });
  return (a.muiName = "Grid"), a;
}
const jP = Ro(),
  WP = fh("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  });
function HP(e) {
  return gu({ props: e, name: "MuiStack", defaultTheme: jP });
}
function UP(e, t) {
  const n = C.Children.toArray(e).filter(Boolean);
  return n.reduce(
    (r, i, o) => (
      r.push(i),
      o < n.length - 1 && r.push(C.cloneElement(t, { key: `separator-${o}` })),
      r
    ),
    []
  );
}
const VP = (e) =>
    ({
      row: "Left",
      "row-reverse": "Right",
      column: "Top",
      "column-reverse": "Bottom",
    }[e]),
  GP = ({ ownerState: e, theme: t }) => {
    let n = {
      display: "flex",
      flexDirection: "column",
      ...Sn(
        { theme: t },
        md({ values: e.direction, breakpoints: t.breakpoints.values }),
        (r) => ({ flexDirection: r })
      ),
    };
    if (e.spacing) {
      const r = Xc(t),
        i = Object.keys(t.breakpoints.values).reduce(
          (l, c) => (
            ((typeof e.spacing == "object" && e.spacing[c] != null) ||
              (typeof e.direction == "object" && e.direction[c] != null)) &&
              (l[c] = !0),
            l
          ),
          {}
        ),
        o = md({ values: e.direction, base: i }),
        s = md({ values: e.spacing, base: i });
      typeof o == "object" &&
        Object.keys(o).forEach((l, c, u) => {
          if (!o[l]) {
            const f = c > 0 ? o[u[c - 1]] : "column";
            o[l] = f;
          }
        }),
        (n = tt(
          n,
          Sn({ theme: t }, s, (l, c) =>
            e.useFlexGap
              ? { gap: mi(r, l) }
              : {
                  "& > :not(style):not(style)": { margin: 0 },
                  "& > :not(style) ~ :not(style)": {
                    [`margin${VP(c ? o[c] : e.direction)}`]: mi(r, l),
                  },
                }
          )
        ));
    }
    return (n = Bk(t.breakpoints, n)), n;
  };
function KP(e = {}) {
  const {
      createStyledComponent: t = WP,
      useThemeProps: n = HP,
      componentName: r = "MuiStack",
    } = e,
    i = () => oe({ root: ["root"] }, (l) => ne(r, l), {}),
    o = t(GP);
  return C.forwardRef(function (l, c) {
    const u = n(l),
      d = tu(u),
      {
        component: f = "div",
        direction: p = "column",
        spacing: h = 0,
        divider: y,
        children: x,
        className: g,
        useFlexGap: v = !1,
        ...m
      } = d,
      S = { direction: p, spacing: h, useFlexGap: v },
      w = i();
    return P.jsx(o, {
      as: f,
      ownerState: S,
      ref: c,
      className: U(w.root, g),
      ...m,
      children: y ? UP(x, y) : x,
    });
  });
}
const sa = { black: "#000", white: "#fff" },
  YP = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  Mi = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  Ti = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  Qo = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  Ri = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  Oi = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  Ii = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  Dm = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: sa.white, default: sa.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  bd = {
    text: {
      primary: sa.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: sa.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function Nm(e, t, n, r) {
  const i = r.light || r,
    o = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
      ? (e.light = gh(e.main, i))
      : t === "dark" && (e.dark = hh(e.main, o)));
}
function XP(e = "light") {
  return e === "dark"
    ? { main: Ri[200], light: Ri[50], dark: Ri[400] }
    : { main: Ri[700], light: Ri[400], dark: Ri[800] };
}
function QP(e = "light") {
  return e === "dark"
    ? { main: Mi[200], light: Mi[50], dark: Mi[400] }
    : { main: Mi[500], light: Mi[300], dark: Mi[700] };
}
function qP(e = "light") {
  return e === "dark"
    ? { main: Ti[500], light: Ti[300], dark: Ti[700] }
    : { main: Ti[700], light: Ti[400], dark: Ti[800] };
}
function JP(e = "light") {
  return e === "dark"
    ? { main: Oi[400], light: Oi[300], dark: Oi[700] }
    : { main: Oi[700], light: Oi[500], dark: Oi[900] };
}
function ZP(e = "light") {
  return e === "dark"
    ? { main: Ii[400], light: Ii[300], dark: Ii[700] }
    : { main: Ii[800], light: Ii[500], dark: Ii[900] };
}
function eE(e = "light") {
  return e === "dark"
    ? { main: Qo[400], light: Qo[300], dark: Qo[700] }
    : { main: "#ed6c02", light: Qo[500], dark: Qo[900] };
}
function xh(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
      ...i
    } = e,
    o = e.primary || XP(t),
    s = e.secondary || QP(t),
    a = e.error || qP(t),
    l = e.info || JP(t),
    c = e.success || ZP(t),
    u = e.warning || eE(t);
  function d(y) {
    return nP(y, bd.text.primary) >= n ? bd.text.primary : Dm.text.primary;
  }
  const f = ({
      color: y,
      name: x,
      mainShade: g = 500,
      lightShade: v = 300,
      darkShade: m = 700,
    }) => {
      if (
        ((y = { ...y }),
        !y.main && y[g] && (y.main = y[g]),
        !y.hasOwnProperty("main"))
      )
        throw new Error(rr(11, x ? ` (${x})` : "", g));
      if (typeof y.main != "string")
        throw new Error(rr(12, x ? ` (${x})` : "", JSON.stringify(y.main)));
      return (
        Nm(y, "light", v, r),
        Nm(y, "dark", m, r),
        y.contrastText || (y.contrastText = d(y.main)),
        y
      );
    },
    p = { dark: bd, light: Dm };
  return tt(
    {
      common: { ...sa },
      mode: t,
      primary: f({ color: o, name: "primary" }),
      secondary: f({
        color: s,
        name: "secondary",
        mainShade: "A400",
        lightShade: "A200",
        darkShade: "A700",
      }),
      error: f({ color: a, name: "error" }),
      warning: f({ color: u, name: "warning" }),
      info: f({ color: l, name: "info" }),
      success: f({ color: c, name: "success" }),
      grey: YP,
      contrastThreshold: n,
      getContrastText: d,
      augmentColor: f,
      tonalOffset: r,
      ...p[t],
    },
    i
  );
}
function tE(e) {
  const t = {};
  return (
    Object.entries(e).forEach((r) => {
      const [i, o] = r;
      typeof o == "object" &&
        (t[i] = `${o.fontStyle ? `${o.fontStyle} ` : ""}${
          o.fontVariant ? `${o.fontVariant} ` : ""
        }${o.fontWeight ? `${o.fontWeight} ` : ""}${
          o.fontStretch ? `${o.fontStretch} ` : ""
        }${o.fontSize || ""}${o.lineHeight ? `/${o.lineHeight} ` : ""}${
          o.fontFamily || ""
        }`);
    }),
    t
  );
}
function nE(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
      [e.up("sm")]: { minHeight: 64 },
    },
    ...t,
  };
}
function rE(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Bm = { textTransform: "uppercase" },
  jm = '"Roboto", "Helvetica", "Arial", sans-serif';
function iE(e, t) {
  const {
      fontFamily: n = jm,
      fontSize: r = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: o = 400,
      fontWeightMedium: s = 500,
      fontWeightBold: a = 700,
      htmlFontSize: l = 16,
      allVariants: c,
      pxToRem: u,
      ...d
    } = typeof t == "function" ? t(e) : t,
    f = r / 14,
    p = u || ((x) => `${(x / l) * f}rem`),
    h = (x, g, v, m, S) => ({
      fontFamily: n,
      fontWeight: x,
      fontSize: p(g),
      lineHeight: v,
      ...(n === jm ? { letterSpacing: `${rE(m / g)}em` } : {}),
      ...S,
      ...c,
    }),
    y = {
      h1: h(i, 96, 1.167, -1.5),
      h2: h(i, 60, 1.2, -0.5),
      h3: h(o, 48, 1.167, 0),
      h4: h(o, 34, 1.235, 0.25),
      h5: h(o, 24, 1.334, 0),
      h6: h(s, 20, 1.6, 0.15),
      subtitle1: h(o, 16, 1.75, 0.15),
      subtitle2: h(s, 14, 1.57, 0.1),
      body1: h(o, 16, 1.5, 0.15),
      body2: h(o, 14, 1.43, 0.15),
      button: h(s, 14, 1.75, 0.4, Bm),
      caption: h(o, 12, 1.66, 0.4),
      overline: h(o, 12, 2.66, 1, Bm),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return tt(
    {
      htmlFontSize: l,
      pxToRem: p,
      fontFamily: n,
      fontSize: r,
      fontWeightLight: i,
      fontWeightRegular: o,
      fontWeightMedium: s,
      fontWeightBold: a,
      ...y,
    },
    d,
    { clone: !1 }
  );
}
const oE = 0.2,
  sE = 0.14,
  aE = 0.12;
function Re(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${oE})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${sE})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${aE})`,
  ].join(",");
}
const lE = [
    "none",
    Re(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    Re(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    Re(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    Re(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    Re(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    Re(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    Re(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    Re(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    Re(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    Re(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    Re(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    Re(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    Re(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    Re(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    Re(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    Re(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    Re(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    Re(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    Re(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    Re(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    Re(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    Re(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    Re(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    Re(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  cE = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  uE = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Wm(e) {
  return `${Math.round(e)}ms`;
}
function dE(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function fE(e) {
  const t = { ...cE, ...e.easing },
    n = { ...uE, ...e.duration };
  return {
    getAutoHeightDuration: dE,
    create: (i = ["all"], o = {}) => {
      const {
        duration: s = n.standard,
        easing: a = t.easeInOut,
        delay: l = 0,
        ...c
      } = o;
      return (Array.isArray(i) ? i : [i])
        .map(
          (u) =>
            `${u} ${typeof s == "string" ? s : Wm(s)} ${a} ${
              typeof l == "string" ? l : Wm(l)
            }`
        )
        .join(",");
    },
    ...e,
    easing: t,
    duration: n,
  };
}
const pE = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
function D1(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: i,
    palette: o = {},
    transitions: s = {},
    typography: a = {},
    shape: l,
    ...c
  } = e;
  if (e.vars) throw new Error(rr(20));
  const u = xh(o),
    d = Ro(e);
  let f = tt(d, {
    mixins: nE(d.breakpoints, r),
    palette: u,
    shadows: lE.slice(),
    typography: iE(u, a),
    transitions: fE(s),
    zIndex: { ...pE },
  });
  return (
    (f = tt(f, c)),
    (f = t.reduce((p, h) => tt(p, h), f)),
    (f.unstable_sxConfig = {
      ...ba,
      ...(c == null ? void 0 : c.unstable_sxConfig),
    }),
    (f.unstable_sx = function (h) {
      return Mo({ sx: h, theme: this });
    }),
    f
  );
}
function Df(e) {
  let t;
  return (
    e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
    Math.round(t * 10) / 1e3
  );
}
const hE = [...Array(25)].map((e, t) => {
  if (t === 0) return;
  const n = Df(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function N1(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38,
  };
}
function B1(e) {
  return e === "dark" ? hE : [];
}
function gE(e) {
  const { palette: t = { mode: "light" }, opacity: n, overlays: r, ...i } = e,
    o = xh(t);
  return {
    palette: o,
    opacity: { ...N1(o.mode), ...n },
    overlays: r || B1(o.mode),
    ...i,
  };
}
function mE(e) {
  var t;
  return (
    !!e[0].match(
      /(cssVarPrefix|colorSchemeSelector|typography|mixins|breakpoints|direction|transitions)/
    ) ||
    !!e[0].match(/sxConfig$/) ||
    (e[0] === "palette" &&
      !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/)))
  );
}
const yE = (e) => [
    ...[...Array(24)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n + 1}`),
    `--${e ? `${e}-` : ""}palette-AppBar-darkBg`,
    `--${e ? `${e}-` : ""}palette-AppBar-darkColor`,
  ],
  vE = (e) => (t, n) => {
    const r = e.colorSchemeSelector;
    let i = r;
    if (
      (r === "class" && (i = ".%s"),
      r === "data" && (i = "[data-%s]"),
      r != null &&
        r.startsWith("data-") &&
        !r.includes("%s") &&
        (i = `[${r}="%s"]`),
      e.defaultColorScheme === t)
    ) {
      if (t === "dark") {
        const o = {};
        return (
          yE(e.cssVarPrefix).forEach((s) => {
            (o[s] = n[s]), delete n[s];
          }),
          i === "media"
            ? {
                ":root": n,
                "@media (prefers-color-scheme: dark)": { ":root": o },
              }
            : i
            ? { [i.replace("%s", t)]: o, [`:root, ${i.replace("%s", t)}`]: n }
            : { ":root": { ...n, ...o } }
        );
      }
      if (i && i !== "media") return `:root, ${i.replace("%s", String(t))}`;
    } else if (t) {
      if (i === "media")
        return {
          [`@media (prefers-color-scheme: ${String(t)})`]: { ":root": n },
        };
      if (i) return i.replace("%s", String(t));
    }
    return ":root";
  };
function xE(e) {
  return (
    An(e) ||
    typeof e > "u" ||
    typeof e == "string" ||
    typeof e == "boolean" ||
    typeof e == "number" ||
    Array.isArray(e)
  );
}
function bE(e = {}) {
  const t = { ...e };
  function n(r) {
    const i = Object.entries(r);
    for (let o = 0; o < i.length; o++) {
      const [s, a] = i[o];
      !xE(a) || s.startsWith("unstable_")
        ? delete r[s]
        : An(a) && ((r[s] = { ...a }), n(r[s]));
    }
  }
  return (
    n(t),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
  );
}
function SE(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function O(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function ps(e) {
  return !e || !e.startsWith("hsl") ? e : T1(e);
}
function jn(e, t) {
  `${t}Channel` in e ||
    (e[`${t}Channel`] = fs(
      ps(e[t]),
      `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`
    ));
}
function CE(e) {
  return typeof e == "number"
    ? `${e}px`
    : typeof e == "string" || typeof e == "function" || Array.isArray(e)
    ? e
    : "8px";
}
const _n = (e) => {
    try {
      return e();
    } catch {}
  },
  wE = (e = "mui") => gP(e);
function Sd(e, t, n, r) {
  if (!t) return;
  t = t === !0 ? {} : t;
  const i = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = gE({
      ...t,
      palette: { mode: i, ...(t == null ? void 0 : t.palette) },
    });
    return;
  }
  const { palette: o, ...s } = D1({
    ...n,
    palette: { mode: i, ...(t == null ? void 0 : t.palette) },
  });
  return (
    (e[r] = {
      ...t,
      palette: o,
      opacity: { ...N1(i), ...(t == null ? void 0 : t.opacity) },
      overlays: (t == null ? void 0 : t.overlays) || B1(i),
    }),
    s
  );
}
function kE(e = {}, ...t) {
  const {
      colorSchemes: n = { light: !0 },
      defaultColorScheme: r,
      disableCssColorScheme: i = !1,
      cssVarPrefix: o = "mui",
      shouldSkipGeneratingVar: s = mE,
      colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
      ...l
    } = e,
    c = Object.keys(n)[0],
    u = r || (n.light && c !== "light" ? "light" : c),
    d = wE(o),
    { [u]: f, light: p, dark: h, ...y } = n,
    x = { ...y };
  let g = f;
  if (
    (((u === "dark" && !("dark" in n)) || (u === "light" && !("light" in n))) &&
      (g = !0),
    !g)
  )
    throw new Error(rr(21, u));
  const v = Sd(x, g, l, u);
  p && !x.light && Sd(x, p, void 0, "light"),
    h && !x.dark && Sd(x, h, void 0, "dark");
  let m = {
    defaultColorScheme: u,
    ...v,
    cssVarPrefix: o,
    colorSchemeSelector: a,
    getCssVar: d,
    colorSchemes: x,
    font: { ...tE(v.typography), ...v.font },
    spacing: CE(l.spacing),
  };
  Object.keys(m.colorSchemes).forEach((M) => {
    const b = m.colorSchemes[M].palette,
      E = (R) => {
        const I = R.split("-"),
          z = I[1],
          D = I[2];
        return d(R, b[z][D]);
      };
    if (
      (b.mode === "light" &&
        (O(b.common, "background", "#fff"),
        O(b.common, "onBackground", "#000")),
      b.mode === "dark" &&
        (O(b.common, "background", "#000"),
        O(b.common, "onBackground", "#fff")),
      SE(b, [
        "Alert",
        "AppBar",
        "Avatar",
        "Button",
        "Chip",
        "FilledInput",
        "LinearProgress",
        "Skeleton",
        "Slider",
        "SnackbarContent",
        "SpeedDialAction",
        "StepConnector",
        "StepContent",
        "Switch",
        "TableCell",
        "Tooltip",
      ]),
      b.mode === "light")
    ) {
      O(b.Alert, "errorColor", be(b.error.light, 0.6)),
        O(b.Alert, "infoColor", be(b.info.light, 0.6)),
        O(b.Alert, "successColor", be(b.success.light, 0.6)),
        O(b.Alert, "warningColor", be(b.warning.light, 0.6)),
        O(b.Alert, "errorFilledBg", E("palette-error-main")),
        O(b.Alert, "infoFilledBg", E("palette-info-main")),
        O(b.Alert, "successFilledBg", E("palette-success-main")),
        O(b.Alert, "warningFilledBg", E("palette-warning-main")),
        O(
          b.Alert,
          "errorFilledColor",
          _n(() => b.getContrastText(b.error.main))
        ),
        O(
          b.Alert,
          "infoFilledColor",
          _n(() => b.getContrastText(b.info.main))
        ),
        O(
          b.Alert,
          "successFilledColor",
          _n(() => b.getContrastText(b.success.main))
        ),
        O(
          b.Alert,
          "warningFilledColor",
          _n(() => b.getContrastText(b.warning.main))
        ),
        O(b.Alert, "errorStandardBg", Se(b.error.light, 0.9)),
        O(b.Alert, "infoStandardBg", Se(b.info.light, 0.9)),
        O(b.Alert, "successStandardBg", Se(b.success.light, 0.9)),
        O(b.Alert, "warningStandardBg", Se(b.warning.light, 0.9)),
        O(b.Alert, "errorIconColor", E("palette-error-main")),
        O(b.Alert, "infoIconColor", E("palette-info-main")),
        O(b.Alert, "successIconColor", E("palette-success-main")),
        O(b.Alert, "warningIconColor", E("palette-warning-main")),
        O(b.AppBar, "defaultBg", E("palette-grey-100")),
        O(b.Avatar, "defaultBg", E("palette-grey-400")),
        O(b.Button, "inheritContainedBg", E("palette-grey-300")),
        O(b.Button, "inheritContainedHoverBg", E("palette-grey-A100")),
        O(b.Chip, "defaultBorder", E("palette-grey-400")),
        O(b.Chip, "defaultAvatarColor", E("palette-grey-700")),
        O(b.Chip, "defaultIconColor", E("palette-grey-700")),
        O(b.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"),
        O(b.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"),
        O(b.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"),
        O(b.LinearProgress, "primaryBg", Se(b.primary.main, 0.62)),
        O(b.LinearProgress, "secondaryBg", Se(b.secondary.main, 0.62)),
        O(b.LinearProgress, "errorBg", Se(b.error.main, 0.62)),
        O(b.LinearProgress, "infoBg", Se(b.info.main, 0.62)),
        O(b.LinearProgress, "successBg", Se(b.success.main, 0.62)),
        O(b.LinearProgress, "warningBg", Se(b.warning.main, 0.62)),
        O(b.Skeleton, "bg", `rgba(${E("palette-text-primaryChannel")} / 0.11)`),
        O(b.Slider, "primaryTrack", Se(b.primary.main, 0.62)),
        O(b.Slider, "secondaryTrack", Se(b.secondary.main, 0.62)),
        O(b.Slider, "errorTrack", Se(b.error.main, 0.62)),
        O(b.Slider, "infoTrack", Se(b.info.main, 0.62)),
        O(b.Slider, "successTrack", Se(b.success.main, 0.62)),
        O(b.Slider, "warningTrack", Se(b.warning.main, 0.62));
      const R = Xa(b.background.default, 0.8);
      O(b.SnackbarContent, "bg", R),
        O(
          b.SnackbarContent,
          "color",
          _n(() => b.getContrastText(R))
        ),
        O(b.SpeedDialAction, "fabHoverBg", Xa(b.background.paper, 0.15)),
        O(b.StepConnector, "border", E("palette-grey-400")),
        O(b.StepContent, "border", E("palette-grey-400")),
        O(b.Switch, "defaultColor", E("palette-common-white")),
        O(b.Switch, "defaultDisabledColor", E("palette-grey-100")),
        O(b.Switch, "primaryDisabledColor", Se(b.primary.main, 0.62)),
        O(b.Switch, "secondaryDisabledColor", Se(b.secondary.main, 0.62)),
        O(b.Switch, "errorDisabledColor", Se(b.error.main, 0.62)),
        O(b.Switch, "infoDisabledColor", Se(b.info.main, 0.62)),
        O(b.Switch, "successDisabledColor", Se(b.success.main, 0.62)),
        O(b.Switch, "warningDisabledColor", Se(b.warning.main, 0.62)),
        O(b.TableCell, "border", Se(Ya(b.divider, 1), 0.88)),
        O(b.Tooltip, "bg", Ya(b.grey[700], 0.92));
    }
    if (b.mode === "dark") {
      O(b.Alert, "errorColor", Se(b.error.light, 0.6)),
        O(b.Alert, "infoColor", Se(b.info.light, 0.6)),
        O(b.Alert, "successColor", Se(b.success.light, 0.6)),
        O(b.Alert, "warningColor", Se(b.warning.light, 0.6)),
        O(b.Alert, "errorFilledBg", E("palette-error-dark")),
        O(b.Alert, "infoFilledBg", E("palette-info-dark")),
        O(b.Alert, "successFilledBg", E("palette-success-dark")),
        O(b.Alert, "warningFilledBg", E("palette-warning-dark")),
        O(
          b.Alert,
          "errorFilledColor",
          _n(() => b.getContrastText(b.error.dark))
        ),
        O(
          b.Alert,
          "infoFilledColor",
          _n(() => b.getContrastText(b.info.dark))
        ),
        O(
          b.Alert,
          "successFilledColor",
          _n(() => b.getContrastText(b.success.dark))
        ),
        O(
          b.Alert,
          "warningFilledColor",
          _n(() => b.getContrastText(b.warning.dark))
        ),
        O(b.Alert, "errorStandardBg", be(b.error.light, 0.9)),
        O(b.Alert, "infoStandardBg", be(b.info.light, 0.9)),
        O(b.Alert, "successStandardBg", be(b.success.light, 0.9)),
        O(b.Alert, "warningStandardBg", be(b.warning.light, 0.9)),
        O(b.Alert, "errorIconColor", E("palette-error-main")),
        O(b.Alert, "infoIconColor", E("palette-info-main")),
        O(b.Alert, "successIconColor", E("palette-success-main")),
        O(b.Alert, "warningIconColor", E("palette-warning-main")),
        O(b.AppBar, "defaultBg", E("palette-grey-900")),
        O(b.AppBar, "darkBg", E("palette-background-paper")),
        O(b.AppBar, "darkColor", E("palette-text-primary")),
        O(b.Avatar, "defaultBg", E("palette-grey-600")),
        O(b.Button, "inheritContainedBg", E("palette-grey-800")),
        O(b.Button, "inheritContainedHoverBg", E("palette-grey-700")),
        O(b.Chip, "defaultBorder", E("palette-grey-700")),
        O(b.Chip, "defaultAvatarColor", E("palette-grey-300")),
        O(b.Chip, "defaultIconColor", E("palette-grey-300")),
        O(b.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"),
        O(b.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"),
        O(b.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"),
        O(b.LinearProgress, "primaryBg", be(b.primary.main, 0.5)),
        O(b.LinearProgress, "secondaryBg", be(b.secondary.main, 0.5)),
        O(b.LinearProgress, "errorBg", be(b.error.main, 0.5)),
        O(b.LinearProgress, "infoBg", be(b.info.main, 0.5)),
        O(b.LinearProgress, "successBg", be(b.success.main, 0.5)),
        O(b.LinearProgress, "warningBg", be(b.warning.main, 0.5)),
        O(b.Skeleton, "bg", `rgba(${E("palette-text-primaryChannel")} / 0.13)`),
        O(b.Slider, "primaryTrack", be(b.primary.main, 0.5)),
        O(b.Slider, "secondaryTrack", be(b.secondary.main, 0.5)),
        O(b.Slider, "errorTrack", be(b.error.main, 0.5)),
        O(b.Slider, "infoTrack", be(b.info.main, 0.5)),
        O(b.Slider, "successTrack", be(b.success.main, 0.5)),
        O(b.Slider, "warningTrack", be(b.warning.main, 0.5));
      const R = Xa(b.background.default, 0.98);
      O(b.SnackbarContent, "bg", R),
        O(
          b.SnackbarContent,
          "color",
          _n(() => b.getContrastText(R))
        ),
        O(b.SpeedDialAction, "fabHoverBg", Xa(b.background.paper, 0.15)),
        O(b.StepConnector, "border", E("palette-grey-600")),
        O(b.StepContent, "border", E("palette-grey-600")),
        O(b.Switch, "defaultColor", E("palette-grey-300")),
        O(b.Switch, "defaultDisabledColor", E("palette-grey-600")),
        O(b.Switch, "primaryDisabledColor", be(b.primary.main, 0.55)),
        O(b.Switch, "secondaryDisabledColor", be(b.secondary.main, 0.55)),
        O(b.Switch, "errorDisabledColor", be(b.error.main, 0.55)),
        O(b.Switch, "infoDisabledColor", be(b.info.main, 0.55)),
        O(b.Switch, "successDisabledColor", be(b.success.main, 0.55)),
        O(b.Switch, "warningDisabledColor", be(b.warning.main, 0.55)),
        O(b.TableCell, "border", be(Ya(b.divider, 1), 0.68)),
        O(b.Tooltip, "bg", Ya(b.grey[700], 0.92));
    }
    jn(b.background, "default"),
      jn(b.background, "paper"),
      jn(b.common, "background"),
      jn(b.common, "onBackground"),
      jn(b, "divider"),
      Object.keys(b).forEach((R) => {
        const I = b[R];
        I &&
          typeof I == "object" &&
          (I.main && O(b[R], "mainChannel", fs(ps(I.main))),
          I.light && O(b[R], "lightChannel", fs(ps(I.light))),
          I.dark && O(b[R], "darkChannel", fs(ps(I.dark))),
          I.contrastText &&
            O(b[R], "contrastTextChannel", fs(ps(I.contrastText))),
          R === "text" && (jn(b[R], "primary"), jn(b[R], "secondary")),
          R === "action" &&
            (I.active && jn(b[R], "active"),
            I.selected && jn(b[R], "selected")));
      });
  }),
    (m = t.reduce((M, b) => tt(M, b), m));
  const S = {
      prefix: o,
      disableCssColorScheme: i,
      shouldSkipGeneratingVar: s,
      getSelector: vE(m),
    },
    { vars: w, generateThemeVars: _, generateStyleSheets: k } = vP(m, S);
  return (
    (m.vars = w),
    Object.entries(m.colorSchemes[m.defaultColorScheme]).forEach(([M, b]) => {
      m[M] = b;
    }),
    (m.generateThemeVars = _),
    (m.generateStyleSheets = k),
    (m.generateSpacing = function () {
      return P1(l.spacing, Xc(this));
    }),
    (m.getColorSchemeSelector = xP(a)),
    (m.spacing = m.generateSpacing()),
    (m.shouldSkipGeneratingVar = s),
    (m.unstable_sxConfig = {
      ...ba,
      ...(l == null ? void 0 : l.unstable_sxConfig),
    }),
    (m.unstable_sx = function (b) {
      return Mo({ sx: b, theme: this });
    }),
    (m.toRuntimeSource = bE),
    m
  );
}
function Hm(e, t, n) {
  e.colorSchemes &&
    n &&
    (e.colorSchemes[t] = {
      ...(n !== !0 && n),
      palette: xh({ ...(n === !0 ? {} : n), mode: t }),
    });
}
function j1(e = {}, ...t) {
  const {
      palette: n,
      cssVariables: r = !1,
      colorSchemes: i = n ? void 0 : { light: !0 },
      defaultColorScheme: o = n == null ? void 0 : n.mode,
      ...s
    } = e,
    a = o || "light",
    l = i == null ? void 0 : i[a],
    c = {
      ...i,
      ...(n
        ? { [a]: { ...(typeof l != "boolean" && l), palette: n } }
        : void 0),
    };
  if (r === !1) {
    const u = D1(e, ...t);
    return (
      "colorSchemes" in e &&
        ((u.defaultColorScheme = a),
        (u.colorSchemes = c),
        u.palette.mode === "light" &&
          ((u.colorSchemes.light = { palette: u.palette }),
          Hm(u, "dark", c.dark)),
        u.palette.mode === "dark" &&
          ((u.colorSchemes.dark = { palette: u.palette }),
          Hm(u, "light", c.light))),
      u
    );
  }
  return kE(
    {
      ...s,
      colorSchemes: c,
      defaultColorScheme: a,
      ...(typeof r != "boolean" && r),
    },
    ...t
  );
}
const xu = j1(),
  wa = "$$material";
function ka() {
  const e = Ca(xu);
  return e[wa] || e;
}
function _E(e) {
  return P.jsx(H2, { ...e, defaultTheme: xu, themeId: wa });
}
function W1(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Vt = (e) => W1(e) && e !== "classes",
  j = M1({ themeId: wa, defaultTheme: xu, rootShouldForwardProp: Vt });
function bh(e) {
  return function (n) {
    return P.jsx(_E, {
      styles: typeof e == "function" ? (r) => e({ theme: r, ...n }) : e,
    });
  };
}
function PE() {
  return tu;
}
function pe(e) {
  return hP(e);
}
const Nf = typeof bh({}) == "function",
  EE = (e, t) => ({
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    boxSizing: "border-box",
    WebkitTextSizeAdjust: "100%",
    ...(t && !e.vars && { colorScheme: e.palette.mode }),
  }),
  ME = (e) => ({
    color: (e.vars || e).palette.text.primary,
    ...e.typography.body1,
    backgroundColor: (e.vars || e).palette.background.default,
    "@media print": { backgroundColor: (e.vars || e).palette.common.white },
  }),
  H1 = (e, t = !1) => {
    var o, s;
    const n = {};
    t &&
      e.colorSchemes &&
      typeof e.getColorSchemeSelector == "function" &&
      Object.entries(e.colorSchemes).forEach(([a, l]) => {
        var u, d;
        const c = e.getColorSchemeSelector(a);
        c.startsWith("@")
          ? (n[c] = {
              ":root": {
                colorScheme: (u = l.palette) == null ? void 0 : u.mode,
              },
            })
          : (n[c.replace(/\s*&/, "")] = {
              colorScheme: (d = l.palette) == null ? void 0 : d.mode,
            });
      });
    let r = {
      html: EE(e, t),
      "*, *::before, *::after": { boxSizing: "inherit" },
      "strong, b": { fontWeight: e.typography.fontWeightBold },
      body: {
        margin: 0,
        ...ME(e),
        "&::backdrop": {
          backgroundColor: (e.vars || e).palette.background.default,
        },
      },
      ...n,
    };
    const i =
      (s = (o = e.components) == null ? void 0 : o.MuiCssBaseline) == null
        ? void 0
        : s.styleOverrides;
    return i && (r = [r, i]), r;
  },
  Rl = "mui-ecs",
  TE = (e) => {
    const t = H1(e, !1),
      n = Array.isArray(t) ? t[0] : t;
    return (
      !e.vars &&
        n &&
        (n.html[`:root:has(${Rl})`] = { colorScheme: e.palette.mode }),
      e.colorSchemes &&
        Object.entries(e.colorSchemes).forEach(([r, i]) => {
          var s, a;
          const o = e.getColorSchemeSelector(r);
          o.startsWith("@")
            ? (n[o] = {
                [`:root:not(:has(.${Rl}))`]: {
                  colorScheme: (s = i.palette) == null ? void 0 : s.mode,
                },
              })
            : (n[o.replace(/\s*&/, "")] = {
                [`&:not(:has(.${Rl}))`]: {
                  colorScheme: (a = i.palette) == null ? void 0 : a.mode,
                },
              });
        }),
      t
    );
  },
  RE = bh(
    Nf
      ? ({ theme: e, enableColorScheme: t }) => H1(e, t)
      : ({ theme: e }) => TE(e)
  );
function U1(e) {
  const t = pe({ props: e, name: "MuiCssBaseline" }),
    { children: n, enableColorScheme: r = !1 } = t;
  return P.jsxs(C.Fragment, {
    children: [
      Nf && P.jsx(RE, { enableColorScheme: r }),
      !Nf && !r && P.jsx("span", { className: Rl, style: { display: "none" } }),
      n,
    ],
  });
}
function bu({ props: e, name: t }) {
  return gu({ props: e, name: t, defaultTheme: xu, themeId: wa });
}
const OE = ae("MuiBox", ["root"]),
  IE = j1(),
  Ts = V2({
    themeId: wa,
    defaultTheme: IE,
    defaultClassName: OE.root,
    generateClassName: dh.generate,
  }),
  AE = kP({
    createStyledComponent: j("div", {
      name: "MuiContainer",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[`maxWidth${V(String(n.maxWidth))}`],
          n.fixed && t.fixed,
          n.disableGutters && t.disableGutters,
        ];
      },
    }),
    useThemeProps: (e) => bu({ props: e, name: "MuiContainer" }),
  });
function LE() {
  return P.jsxs(P.Fragment, {
    children: [
      P.jsx(U1, {}),
      P.jsxs(AE, {
        maxWidth: "sm",
        children: [
          P.jsxs(Ts, {
            sx: { height: "50dvh" },
            children: [
              P.jsx("h1", { children: "Pagina no encontrada..." }),
              P.jsx("img", {
                src: "https://midu.dev/images/this-is-fine-404.gif",
                alt: "Gif perrito quemandose",
                className: "gif",
              }),
            ],
          }),
          P.jsx(Ts, {
            sx: { height: "50dvh" },
            children: P.jsx(fn, { to: "/", children: "Regresar a Home" }),
          }),
        ],
      }),
    ],
  });
}
const Um = { theme: void 0 };
function me(e) {
  let t, n;
  return (r) => {
    let i = t;
    return (
      (i === void 0 || r.theme !== n) &&
        ((Um.theme = r.theme), (i = e(Um)), (t = i), (n = r.theme)),
      i
    );
  };
}
function $E(e) {
  return ne("MuiPaper", e);
}
ae("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
]);
const FE = (e) => {
    const { square: t, elevation: n, variant: r, classes: i } = e,
      o = {
        root: [
          "root",
          r,
          !t && "rounded",
          r === "elevation" && `elevation${n}`,
        ],
      };
    return oe(o, $E, i);
  },
  zE = j("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        !n.square && t.rounded,
        n.variant === "elevation" && t[`elevation${n.elevation}`],
      ];
    },
  })(
    me(({ theme: e }) => ({
      backgroundColor: (e.vars || e).palette.background.paper,
      color: (e.vars || e).palette.text.primary,
      transition: e.transitions.create("box-shadow"),
      variants: [
        {
          props: ({ ownerState: t }) => !t.square,
          style: { borderRadius: e.shape.borderRadius },
        },
        {
          props: { variant: "outlined" },
          style: { border: `1px solid ${(e.vars || e).palette.divider}` },
        },
        {
          props: { variant: "elevation" },
          style: {
            boxShadow: "var(--Paper-shadow)",
            backgroundImage: "var(--Paper-overlay)",
          },
        },
      ],
    }))
  ),
  Sh = C.forwardRef(function (t, n) {
    var p;
    const r = pe({ props: t, name: "MuiPaper" }),
      i = ka(),
      {
        className: o,
        component: s = "div",
        elevation: a = 1,
        square: l = !1,
        variant: c = "elevation",
        ...u
      } = r,
      d = { ...r, component: s, elevation: a, square: l, variant: c },
      f = FE(d);
    return P.jsx(zE, {
      as: s,
      ownerState: d,
      className: U(f.root, o),
      ref: n,
      ...u,
      style: {
        ...(c === "elevation" && {
          "--Paper-shadow": (i.vars || i).shadows[a],
          ...(i.vars && {
            "--Paper-overlay": (p = i.vars.overlays) == null ? void 0 : p[a],
          }),
          ...(!i.vars &&
            i.palette.mode === "dark" && {
              "--Paper-overlay": `linear-gradient(${bt("#fff", Df(a))}, ${bt(
                "#fff",
                Df(a)
              )})`,
            }),
        }),
        ...u.style,
      },
    });
  });
function DE(e) {
  return ne("MuiAppBar", e);
}
ae("MuiAppBar", [
  "root",
  "positionFixed",
  "positionAbsolute",
  "positionSticky",
  "positionStatic",
  "positionRelative",
  "colorDefault",
  "colorPrimary",
  "colorSecondary",
  "colorInherit",
  "colorTransparent",
  "colorError",
  "colorInfo",
  "colorSuccess",
  "colorWarning",
]);
const NE = (e) => {
    const { color: t, position: n, classes: r } = e,
      i = { root: ["root", `color${V(t)}`, `position${V(n)}`] };
    return oe(i, DE, r);
  },
  Vm = (e, t) => (e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t),
  BE = j(Sh, {
    name: "MuiAppBar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[`position${V(n.position)}`], t[`color${V(n.color)}`]];
    },
  })(
    me(({ theme: e }) => ({
      display: "flex",
      flexDirection: "column",
      width: "100%",
      boxSizing: "border-box",
      flexShrink: 0,
      variants: [
        {
          props: { position: "fixed" },
          style: {
            position: "fixed",
            zIndex: (e.vars || e).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0,
            "@media print": { position: "absolute" },
          },
        },
        {
          props: { position: "absolute" },
          style: {
            position: "absolute",
            zIndex: (e.vars || e).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0,
          },
        },
        {
          props: { position: "sticky" },
          style: {
            position: "sticky",
            zIndex: (e.vars || e).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0,
          },
        },
        { props: { position: "static" }, style: { position: "static" } },
        { props: { position: "relative" }, style: { position: "relative" } },
        { props: { color: "inherit" }, style: { "--AppBar-color": "inherit" } },
        {
          props: { color: "default" },
          style: {
            "--AppBar-background": e.vars
              ? e.vars.palette.AppBar.defaultBg
              : e.palette.grey[100],
            "--AppBar-color": e.vars
              ? e.vars.palette.text.primary
              : e.palette.getContrastText(e.palette.grey[100]),
            ...e.applyStyles("dark", {
              "--AppBar-background": e.vars
                ? e.vars.palette.AppBar.defaultBg
                : e.palette.grey[900],
              "--AppBar-color": e.vars
                ? e.vars.palette.text.primary
                : e.palette.getContrastText(e.palette.grey[900]),
            }),
          },
        },
        ...Object.entries(e.palette)
          .filter(([, t]) => t && t.main && t.contrastText)
          .map(([t]) => ({
            props: { color: t },
            style: {
              "--AppBar-background": (e.vars ?? e).palette[t].main,
              "--AppBar-color": (e.vars ?? e).palette[t].contrastText,
            },
          })),
        {
          props: (t) =>
            t.enableColorOnDark === !0 &&
            !["inherit", "transparent"].includes(t.color),
          style: {
            backgroundColor: "var(--AppBar-background)",
            color: "var(--AppBar-color)",
          },
        },
        {
          props: (t) =>
            t.enableColorOnDark === !1 &&
            !["inherit", "transparent"].includes(t.color),
          style: {
            backgroundColor: "var(--AppBar-background)",
            color: "var(--AppBar-color)",
            ...e.applyStyles("dark", {
              backgroundColor: e.vars
                ? Vm(e.vars.palette.AppBar.darkBg, "var(--AppBar-background)")
                : null,
              color: e.vars
                ? Vm(e.vars.palette.AppBar.darkColor, "var(--AppBar-color)")
                : null,
            }),
          },
        },
        {
          props: { color: "transparent" },
          style: {
            "--AppBar-background": "transparent",
            "--AppBar-color": "inherit",
            backgroundColor: "var(--AppBar-background)",
            color: "var(--AppBar-color)",
            ...e.applyStyles("dark", { backgroundImage: "none" }),
          },
        },
      ],
    }))
  ),
  jE = C.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiAppBar" }),
      {
        className: i,
        color: o = "primary",
        enableColorOnDark: s = !1,
        position: a = "fixed",
        ...l
      } = r,
      c = { ...r, color: o, position: a, enableColorOnDark: s },
      u = NE(c);
    return P.jsx(BE, {
      square: !0,
      component: "header",
      ownerState: c,
      elevation: 4,
      className: U(u.root, i, a === "fixed" && "mui-fixed"),
      ref: n,
      ...l,
    });
  });
function WE(e) {
  return ne("MuiDivider", e);
}
ae("MuiDivider", [
  "root",
  "absolute",
  "fullWidth",
  "inset",
  "middle",
  "flexItem",
  "light",
  "vertical",
  "withChildren",
  "withChildrenVertical",
  "textAlignRight",
  "textAlignLeft",
  "wrapper",
  "wrapperVertical",
]);
const HE = (e) => {
    const {
      absolute: t,
      children: n,
      classes: r,
      flexItem: i,
      light: o,
      orientation: s,
      textAlign: a,
      variant: l,
    } = e;
    return oe(
      {
        root: [
          "root",
          t && "absolute",
          l,
          o && "light",
          s === "vertical" && "vertical",
          i && "flexItem",
          n && "withChildren",
          n && s === "vertical" && "withChildrenVertical",
          a === "right" && s !== "vertical" && "textAlignRight",
          a === "left" && s !== "vertical" && "textAlignLeft",
        ],
        wrapper: ["wrapper", s === "vertical" && "wrapperVertical"],
      },
      WE,
      r
    );
  },
  UE = j("div", {
    name: "MuiDivider",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.absolute && t.absolute,
        t[n.variant],
        n.light && t.light,
        n.orientation === "vertical" && t.vertical,
        n.flexItem && t.flexItem,
        n.children && t.withChildren,
        n.children && n.orientation === "vertical" && t.withChildrenVertical,
        n.textAlign === "right" &&
          n.orientation !== "vertical" &&
          t.textAlignRight,
        n.textAlign === "left" &&
          n.orientation !== "vertical" &&
          t.textAlignLeft,
      ];
    },
  })(
    me(({ theme: e }) => ({
      margin: 0,
      flexShrink: 0,
      borderWidth: 0,
      borderStyle: "solid",
      borderColor: (e.vars || e).palette.divider,
      borderBottomWidth: "thin",
      variants: [
        {
          props: { absolute: !0 },
          style: { position: "absolute", bottom: 0, left: 0, width: "100%" },
        },
        {
          props: { light: !0 },
          style: {
            borderColor: e.vars
              ? `rgba(${e.vars.palette.dividerChannel} / 0.08)`
              : bt(e.palette.divider, 0.08),
          },
        },
        { props: { variant: "inset" }, style: { marginLeft: 72 } },
        {
          props: { variant: "middle", orientation: "horizontal" },
          style: { marginLeft: e.spacing(2), marginRight: e.spacing(2) },
        },
        {
          props: { variant: "middle", orientation: "vertical" },
          style: { marginTop: e.spacing(1), marginBottom: e.spacing(1) },
        },
        {
          props: { orientation: "vertical" },
          style: {
            height: "100%",
            borderBottomWidth: 0,
            borderRightWidth: "thin",
          },
        },
        {
          props: { flexItem: !0 },
          style: { alignSelf: "stretch", height: "auto" },
        },
        {
          props: ({ ownerState: t }) => !!t.children,
          style: {
            display: "flex",
            whiteSpace: "nowrap",
            textAlign: "center",
            border: 0,
            borderTopStyle: "solid",
            borderLeftStyle: "solid",
            "&::before, &::after": { content: '""', alignSelf: "center" },
          },
        },
        {
          props: ({ ownerState: t }) =>
            t.children && t.orientation !== "vertical",
          style: {
            "&::before, &::after": {
              width: "100%",
              borderTop: `thin solid ${(e.vars || e).palette.divider}`,
              borderTopStyle: "inherit",
            },
          },
        },
        {
          props: ({ ownerState: t }) =>
            t.orientation === "vertical" && t.children,
          style: {
            flexDirection: "column",
            "&::before, &::after": {
              height: "100%",
              borderLeft: `thin solid ${(e.vars || e).palette.divider}`,
              borderLeftStyle: "inherit",
            },
          },
        },
        {
          props: ({ ownerState: t }) =>
            t.textAlign === "right" && t.orientation !== "vertical",
          style: {
            "&::before": { width: "90%" },
            "&::after": { width: "10%" },
          },
        },
        {
          props: ({ ownerState: t }) =>
            t.textAlign === "left" && t.orientation !== "vertical",
          style: {
            "&::before": { width: "10%" },
            "&::after": { width: "90%" },
          },
        },
      ],
    }))
  ),
  VE = j("span", {
    name: "MuiDivider",
    slot: "Wrapper",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.wrapper, n.orientation === "vertical" && t.wrapperVertical];
    },
  })(
    me(({ theme: e }) => ({
      display: "inline-block",
      paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
      paddingRight: `calc(${e.spacing(1)} * 1.2)`,
      variants: [
        {
          props: { orientation: "vertical" },
          style: {
            paddingTop: `calc(${e.spacing(1)} * 1.2)`,
            paddingBottom: `calc(${e.spacing(1)} * 1.2)`,
          },
        },
      ],
    }))
  ),
  Bf = C.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiDivider" }),
      {
        absolute: i = !1,
        children: o,
        className: s,
        orientation: a = "horizontal",
        component: l = o || a === "vertical" ? "div" : "hr",
        flexItem: c = !1,
        light: u = !1,
        role: d = l !== "hr" ? "separator" : void 0,
        textAlign: f = "center",
        variant: p = "fullWidth",
        ...h
      } = r,
      y = {
        ...r,
        absolute: i,
        component: l,
        flexItem: c,
        light: u,
        orientation: a,
        role: d,
        textAlign: f,
        variant: p,
      },
      x = HE(y);
    return P.jsx(UE, {
      as: l,
      className: U(x.root, s),
      role: d,
      ref: n,
      ownerState: y,
      "aria-orientation":
        d === "separator" && (l !== "hr" || a === "vertical") ? a : void 0,
      ...h,
      children: o
        ? P.jsx(VE, { className: x.wrapper, ownerState: y, children: o })
        : null,
    });
  });
Bf && (Bf.muiSkipListHighlight = !0);
function GE(e) {
  const t = It(e);
  return t.body === e
    ? Dn(e).innerWidth > t.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function Rs(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Gm(e) {
  return parseInt(Dn(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function KE(e) {
  const n =
      [
        "TEMPLATE",
        "SCRIPT",
        "STYLE",
        "LINK",
        "MAP",
        "META",
        "NOSCRIPT",
        "PICTURE",
        "COL",
        "COLGROUP",
        "PARAM",
        "SLOT",
        "SOURCE",
        "TRACK",
      ].indexOf(e.tagName) !== -1,
    r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Km(e, t, n, r, i) {
  const o = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const a = o.indexOf(s) === -1,
      l = !KE(s);
    a && l && Rs(s, i);
  });
}
function Cd(e, t) {
  let n = -1;
  return e.some((r, i) => (t(r) ? ((n = i), !0) : !1)), n;
}
function YE(e, t) {
  const n = [],
    r = e.container;
  if (!t.disableScrollLock) {
    if (GE(r)) {
      const s = I1(It(r));
      n.push({ value: r.style.paddingRight, property: "padding-right", el: r }),
        (r.style.paddingRight = `${Gm(r) + s}px`);
      const a = It(r).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l,
        }),
          (l.style.paddingRight = `${Gm(l) + s}px`);
      });
    }
    let o;
    if (r.parentNode instanceof DocumentFragment) o = It(r).body;
    else {
      const s = r.parentElement,
        a = Dn(r);
      o =
        (s == null ? void 0 : s.nodeName) === "HTML" &&
        a.getComputedStyle(s).overflowY === "scroll"
          ? s
          : r;
    }
    n.push(
      { value: o.style.overflow, property: "overflow", el: o },
      { value: o.style.overflowX, property: "overflow-x", el: o },
      { value: o.style.overflowY, property: "overflow-y", el: o }
    ),
      (o.style.overflow = "hidden");
  }
  return () => {
    n.forEach(({ value: o, el: s, property: a }) => {
      o ? s.style.setProperty(a, o) : s.style.removeProperty(a);
    });
  };
}
function XE(e) {
  const t = [];
  return (
    [].forEach.call(e.children, (n) => {
      n.getAttribute("aria-hidden") === "true" && t.push(n);
    }),
    t
  );
}
class QE {
  constructor() {
    (this.modals = []), (this.containers = []);
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1) return r;
    (r = this.modals.length),
      this.modals.push(t),
      t.modalRef && Rs(t.modalRef, !1);
    const i = XE(n);
    Km(n, t.mount, t.modalRef, i, !0);
    const o = Cd(this.containers, (s) => s.container === n);
    return o !== -1
      ? (this.containers[o].modals.push(t), r)
      : (this.containers.push({
          modals: [t],
          container: n,
          restore: null,
          hiddenSiblings: i,
        }),
        r);
  }
  mount(t, n) {
    const r = Cd(this.containers, (o) => o.modals.indexOf(t) !== -1),
      i = this.containers[r];
    i.restore || (i.restore = YE(i, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1) return r;
    const i = Cd(this.containers, (s) => s.modals.indexOf(t) !== -1),
      o = this.containers[i];
    if (
      (o.modals.splice(o.modals.indexOf(t), 1),
      this.modals.splice(r, 1),
      o.modals.length === 0)
    )
      o.restore && o.restore(),
        t.modalRef && Rs(t.modalRef, n),
        Km(o.container, t.mount, t.modalRef, o.hiddenSiblings, !1),
        this.containers.splice(i, 1);
    else {
      const s = o.modals[o.modals.length - 1];
      s.modalRef && Rs(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const qE = [
  "input",
  "select",
  "textarea",
  "a[href]",
  "button",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable="false"])',
].join(",");
function JE(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t)
    ? e.contentEditable === "true" ||
      ((e.nodeName === "AUDIO" ||
        e.nodeName === "VIDEO" ||
        e.nodeName === "DETAILS") &&
        e.getAttribute("tabindex") === null)
      ? 0
      : e.tabIndex
    : t;
}
function ZE(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function eM(e) {
  return !(
    e.disabled ||
    (e.tagName === "INPUT" && e.type === "hidden") ||
    ZE(e)
  );
}
function tM(e) {
  const t = [],
    n = [];
  return (
    Array.from(e.querySelectorAll(qE)).forEach((r, i) => {
      const o = JE(r);
      o === -1 ||
        !eM(r) ||
        (o === 0
          ? t.push(r)
          : n.push({ documentOrder: i, tabIndex: o, node: r }));
    }),
    n
      .sort((r, i) =>
        r.tabIndex === i.tabIndex
          ? r.documentOrder - i.documentOrder
          : r.tabIndex - i.tabIndex
      )
      .map((r) => r.node)
      .concat(t)
  );
}
function nM() {
  return !0;
}
function rM(e) {
  const {
      children: t,
      disableAutoFocus: n = !1,
      disableEnforceFocus: r = !1,
      disableRestoreFocus: i = !1,
      getTabbable: o = tM,
      isEnabled: s = nM,
      open: a,
    } = e,
    l = C.useRef(!1),
    c = C.useRef(null),
    u = C.useRef(null),
    d = C.useRef(null),
    f = C.useRef(null),
    p = C.useRef(!1),
    h = C.useRef(null),
    y = Ye(Oo(t), h),
    x = C.useRef(null);
  C.useEffect(() => {
    !a || !h.current || (p.current = !n);
  }, [n, a]),
    C.useEffect(() => {
      if (!a || !h.current) return;
      const m = It(h.current);
      return (
        h.current.contains(m.activeElement) ||
          (h.current.hasAttribute("tabIndex") ||
            h.current.setAttribute("tabIndex", "-1"),
          p.current && h.current.focus()),
        () => {
          i ||
            (d.current &&
              d.current.focus &&
              ((l.current = !0), d.current.focus()),
            (d.current = null));
        }
      );
    }, [a]),
    C.useEffect(() => {
      if (!a || !h.current) return;
      const m = It(h.current),
        S = (k) => {
          (x.current = k),
            !(r || !s() || k.key !== "Tab") &&
              m.activeElement === h.current &&
              k.shiftKey &&
              ((l.current = !0), u.current && u.current.focus());
        },
        w = () => {
          var b, E;
          const k = h.current;
          if (k === null) return;
          if (!m.hasFocus() || !s() || l.current) {
            l.current = !1;
            return;
          }
          if (
            k.contains(m.activeElement) ||
            (r &&
              m.activeElement !== c.current &&
              m.activeElement !== u.current)
          )
            return;
          if (m.activeElement !== f.current) f.current = null;
          else if (f.current !== null) return;
          if (!p.current) return;
          let M = [];
          if (
            ((m.activeElement === c.current || m.activeElement === u.current) &&
              (M = o(h.current)),
            M.length > 0)
          ) {
            const R = !!(
                (b = x.current) != null &&
                b.shiftKey &&
                ((E = x.current) == null ? void 0 : E.key) === "Tab"
              ),
              I = M[0],
              z = M[M.length - 1];
            typeof I != "string" &&
              typeof z != "string" &&
              (R ? z.focus() : I.focus());
          } else k.focus();
        };
      m.addEventListener("focusin", w), m.addEventListener("keydown", S, !0);
      const _ = setInterval(() => {
        m.activeElement && m.activeElement.tagName === "BODY" && w();
      }, 50);
      return () => {
        clearInterval(_),
          m.removeEventListener("focusin", w),
          m.removeEventListener("keydown", S, !0);
      };
    }, [n, r, i, s, a, o]);
  const g = (m) => {
      d.current === null && (d.current = m.relatedTarget),
        (p.current = !0),
        (f.current = m.target);
      const S = t.props.onFocus;
      S && S(m);
    },
    v = (m) => {
      d.current === null && (d.current = m.relatedTarget), (p.current = !0);
    };
  return P.jsxs(C.Fragment, {
    children: [
      P.jsx("div", {
        tabIndex: a ? 0 : -1,
        onFocus: v,
        ref: c,
        "data-testid": "sentinelStart",
      }),
      C.cloneElement(t, { ref: y, onFocus: g }),
      P.jsx("div", {
        tabIndex: a ? 0 : -1,
        onFocus: v,
        ref: u,
        "data-testid": "sentinelEnd",
      }),
    ],
  });
}
function iM(e) {
  return typeof e == "function" ? e() : e;
}
const oM = C.forwardRef(function (t, n) {
  const { children: r, container: i, disablePortal: o = !1 } = t,
    [s, a] = C.useState(null),
    l = Ye(Oo(r), n);
  if (
    (ir(() => {
      o || a(iM(i) || document.body);
    }, [i, o]),
    ir(() => {
      if (s && !o)
        return (
          uc(n, s),
          () => {
            uc(n, null);
          }
        );
    }, [n, s, o]),
    o)
  ) {
    if (C.isValidElement(r)) {
      const c = { ref: l };
      return C.cloneElement(r, c);
    }
    return P.jsx(C.Fragment, { children: r });
  }
  return P.jsx(C.Fragment, { children: s && Qp.createPortal(r, s) });
});
function yn(e, t) {
  const {
      className: n,
      elementType: r,
      ownerState: i,
      externalForwardedProps: o,
      getSlotOwnerState: s,
      internalForwardedProps: a,
      ...l
    } = t,
    {
      component: c,
      slots: u = { [e]: void 0 },
      slotProps: d = { [e]: void 0 },
      ...f
    } = o,
    p = u[e] || r,
    h = F1(d[e], i),
    {
      props: { component: y, ...x },
      internalRef: g,
    } = $1({
      className: n,
      ...l,
      externalForwardedProps: e === "root" ? f : void 0,
      externalSlotProps: h,
    }),
    v = Ye(g, h == null ? void 0 : h.ref, t.ref),
    m = s ? s(x) : {},
    S = { ...i, ...m },
    w = e === "root" ? y || c : y,
    _ = A1(
      p,
      {
        ...(e === "root" && !c && !u[e] && a),
        ...(e !== "root" && !u[e] && a),
        ...x,
        ...(w && { as: w }),
        ref: v,
      },
      S
    );
  return (
    Object.keys(m).forEach((k) => {
      delete _[k];
    }),
    [p, _]
  );
}
function V1(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue;
      n[r] = e[r];
    }
  return n;
}
function jf(e, t) {
  return (
    (jf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    jf(e, t)
  );
}
function G1(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    jf(e, t);
}
const Ym = { disabled: !1 },
  dc = Zt.createContext(null);
var sM = function (t) {
    return t.scrollTop;
  },
  hs = "unmounted",
  qr = "exited",
  Jr = "entering",
  Fi = "entered",
  Wf = "exiting",
  Cn = (function (e) {
    G1(t, e);
    function t(r, i) {
      var o;
      o = e.call(this, r, i) || this;
      var s = i,
        a = s && !s.isMounting ? r.enter : r.appear,
        l;
      return (
        (o.appearStatus = null),
        r.in
          ? a
            ? ((l = qr), (o.appearStatus = Jr))
            : (l = Fi)
          : r.unmountOnExit || r.mountOnEnter
          ? (l = hs)
          : (l = qr),
        (o.state = { status: l }),
        (o.nextCallback = null),
        o
      );
    }
    t.getDerivedStateFromProps = function (i, o) {
      var s = i.in;
      return s && o.status === hs ? { status: qr } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (i) {
        var o = null;
        if (i !== this.props) {
          var s = this.state.status;
          this.props.in
            ? s !== Jr && s !== Fi && (o = Jr)
            : (s === Jr || s === Fi) && (o = Wf);
        }
        this.updateStatus(!1, o);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var i = this.props.timeout,
          o,
          s,
          a;
        return (
          (o = s = a = i),
          i != null &&
            typeof i != "number" &&
            ((o = i.exit),
            (s = i.enter),
            (a = i.appear !== void 0 ? i.appear : s)),
          { exit: o, enter: s, appear: a }
        );
      }),
      (n.updateStatus = function (i, o) {
        if ((i === void 0 && (i = !1), o !== null))
          if ((this.cancelNextCallback(), o === Jr)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var s = this.props.nodeRef
                ? this.props.nodeRef.current
                : Ua.findDOMNode(this);
              s && sM(s);
            }
            this.performEnter(i);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === qr &&
            this.setState({ status: hs });
      }),
      (n.performEnter = function (i) {
        var o = this,
          s = this.props.enter,
          a = this.context ? this.context.isMounting : i,
          l = this.props.nodeRef ? [a] : [Ua.findDOMNode(this), a],
          c = l[0],
          u = l[1],
          d = this.getTimeouts(),
          f = a ? d.appear : d.enter;
        if ((!i && !s) || Ym.disabled) {
          this.safeSetState({ status: Fi }, function () {
            o.props.onEntered(c);
          });
          return;
        }
        this.props.onEnter(c, u),
          this.safeSetState({ status: Jr }, function () {
            o.props.onEntering(c, u),
              o.onTransitionEnd(f, function () {
                o.safeSetState({ status: Fi }, function () {
                  o.props.onEntered(c, u);
                });
              });
          });
      }),
      (n.performExit = function () {
        var i = this,
          o = this.props.exit,
          s = this.getTimeouts(),
          a = this.props.nodeRef ? void 0 : Ua.findDOMNode(this);
        if (!o || Ym.disabled) {
          this.safeSetState({ status: qr }, function () {
            i.props.onExited(a);
          });
          return;
        }
        this.props.onExit(a),
          this.safeSetState({ status: Wf }, function () {
            i.props.onExiting(a),
              i.onTransitionEnd(s.exit, function () {
                i.safeSetState({ status: qr }, function () {
                  i.props.onExited(a);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (i, o) {
        (o = this.setNextCallback(o)), this.setState(i, o);
      }),
      (n.setNextCallback = function (i) {
        var o = this,
          s = !0;
        return (
          (this.nextCallback = function (a) {
            s && ((s = !1), (o.nextCallback = null), i(a));
          }),
          (this.nextCallback.cancel = function () {
            s = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (i, o) {
        this.setNextCallback(o);
        var s = this.props.nodeRef
            ? this.props.nodeRef.current
            : Ua.findDOMNode(this),
          a = i == null && !this.props.addEndListener;
        if (!s || a) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var l = this.props.nodeRef
              ? [this.nextCallback]
              : [s, this.nextCallback],
            c = l[0],
            u = l[1];
          this.props.addEndListener(c, u);
        }
        i != null && setTimeout(this.nextCallback, i);
      }),
      (n.render = function () {
        var i = this.state.status;
        if (i === hs) return null;
        var o = this.props,
          s = o.children;
        o.in,
          o.mountOnEnter,
          o.unmountOnExit,
          o.appear,
          o.enter,
          o.exit,
          o.timeout,
          o.addEndListener,
          o.onEnter,
          o.onEntering,
          o.onEntered,
          o.onExit,
          o.onExiting,
          o.onExited,
          o.nodeRef;
        var a = V1(o, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return Zt.createElement(
          dc.Provider,
          { value: null },
          typeof s == "function"
            ? s(i, a)
            : Zt.cloneElement(Zt.Children.only(s), a)
        );
      }),
      t
    );
  })(Zt.Component);
Cn.contextType = dc;
Cn.propTypes = {};
function Ai() {}
Cn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Ai,
  onEntering: Ai,
  onEntered: Ai,
  onExit: Ai,
  onExiting: Ai,
  onExited: Ai,
};
Cn.UNMOUNTED = hs;
Cn.EXITED = qr;
Cn.ENTERING = Jr;
Cn.ENTERED = Fi;
Cn.EXITING = Wf;
function aM(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Ch(e, t) {
  var n = function (o) {
      return t && C.isValidElement(o) ? t(o) : o;
    },
    r = Object.create(null);
  return (
    e &&
      C.Children.map(e, function (i) {
        return i;
      }).forEach(function (i) {
        r[i.key] = n(i);
      }),
    r
  );
}
function lM(e, t) {
  (e = e || {}), (t = t || {});
  function n(u) {
    return u in t ? t[u] : e[u];
  }
  var r = Object.create(null),
    i = [];
  for (var o in e) o in t ? i.length && ((r[o] = i), (i = [])) : i.push(o);
  var s,
    a = {};
  for (var l in t) {
    if (r[l])
      for (s = 0; s < r[l].length; s++) {
        var c = r[l][s];
        a[r[l][s]] = n(c);
      }
    a[l] = n(l);
  }
  for (s = 0; s < i.length; s++) a[i[s]] = n(i[s]);
  return a;
}
function oi(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function cM(e, t) {
  return Ch(e.children, function (n) {
    return C.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: oi(n, "appear", e),
      enter: oi(n, "enter", e),
      exit: oi(n, "exit", e),
    });
  });
}
function uM(e, t, n) {
  var r = Ch(e.children),
    i = lM(t, r);
  return (
    Object.keys(i).forEach(function (o) {
      var s = i[o];
      if (C.isValidElement(s)) {
        var a = o in t,
          l = o in r,
          c = t[o],
          u = C.isValidElement(c) && !c.props.in;
        l && (!a || u)
          ? (i[o] = C.cloneElement(s, {
              onExited: n.bind(null, s),
              in: !0,
              exit: oi(s, "exit", e),
              enter: oi(s, "enter", e),
            }))
          : !l && a && !u
          ? (i[o] = C.cloneElement(s, { in: !1 }))
          : l &&
            a &&
            C.isValidElement(c) &&
            (i[o] = C.cloneElement(s, {
              onExited: n.bind(null, s),
              in: c.props.in,
              exit: oi(s, "exit", e),
              enter: oi(s, "enter", e),
            }));
      }
    }),
    i
  );
}
var dM =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  fM = {
    component: "div",
    childFactory: function (t) {
      return t;
    },
  },
  wh = (function (e) {
    G1(t, e);
    function t(r, i) {
      var o;
      o = e.call(this, r, i) || this;
      var s = o.handleExited.bind(aM(o));
      return (
        (o.state = {
          contextValue: { isMounting: !0 },
          handleExited: s,
          firstRender: !0,
        }),
        o
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (i, o) {
        var s = o.children,
          a = o.handleExited,
          l = o.firstRender;
        return { children: l ? cM(i, a) : uM(i, s, a), firstRender: !1 };
      }),
      (n.handleExited = function (i, o) {
        var s = Ch(this.props.children);
        i.key in s ||
          (i.props.onExited && i.props.onExited(o),
          this.mounted &&
            this.setState(function (a) {
              var l = lc({}, a.children);
              return delete l[i.key], { children: l };
            }));
      }),
      (n.render = function () {
        var i = this.props,
          o = i.component,
          s = i.childFactory,
          a = V1(i, ["component", "childFactory"]),
          l = this.state.contextValue,
          c = dM(this.state.children).map(s);
        return (
          delete a.appear,
          delete a.enter,
          delete a.exit,
          o === null
            ? Zt.createElement(dc.Provider, { value: l }, c)
            : Zt.createElement(
                dc.Provider,
                { value: l },
                Zt.createElement(o, a, c)
              )
        );
      }),
      t
    );
  })(Zt.Component);
wh.propTypes = {};
wh.defaultProps = fM;
const kh = (e) => e.scrollTop;
function yo(e, t) {
  const { timeout: n, easing: r, style: i = {} } = e;
  return {
    duration:
      i.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing:
      i.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: i.transitionDelay,
  };
}
const pM = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  hM = C.forwardRef(function (t, n) {
    const r = ka(),
      i = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen,
      },
      {
        addEndListener: o,
        appear: s = !0,
        children: a,
        easing: l,
        in: c,
        onEnter: u,
        onEntered: d,
        onEntering: f,
        onExit: p,
        onExited: h,
        onExiting: y,
        style: x,
        timeout: g = i,
        TransitionComponent: v = Cn,
        ...m
      } = t,
      S = C.useRef(null),
      w = Ye(S, Oo(a), n),
      _ = (D) => (L) => {
        if (D) {
          const A = S.current;
          L === void 0 ? D(A) : D(A, L);
        }
      },
      k = _(f),
      M = _((D, L) => {
        kh(D);
        const A = yo({ style: x, timeout: g, easing: l }, { mode: "enter" });
        (D.style.webkitTransition = r.transitions.create("opacity", A)),
          (D.style.transition = r.transitions.create("opacity", A)),
          u && u(D, L);
      }),
      b = _(d),
      E = _(y),
      R = _((D) => {
        const L = yo({ style: x, timeout: g, easing: l }, { mode: "exit" });
        (D.style.webkitTransition = r.transitions.create("opacity", L)),
          (D.style.transition = r.transitions.create("opacity", L)),
          p && p(D);
      }),
      I = _(h),
      z = (D) => {
        o && o(S.current, D);
      };
    return P.jsx(v, {
      appear: s,
      in: c,
      nodeRef: S,
      onEnter: M,
      onEntered: b,
      onEntering: k,
      onExit: R,
      onExited: I,
      onExiting: E,
      addEndListener: z,
      timeout: g,
      ...m,
      children: (D, L) =>
        C.cloneElement(a, {
          style: {
            opacity: 0,
            visibility: D === "exited" && !c ? "hidden" : void 0,
            ...pM[D],
            ...x,
            ...a.props.style,
          },
          ref: w,
          ...L,
        }),
    });
  });
function gM(e) {
  return ne("MuiBackdrop", e);
}
ae("MuiBackdrop", ["root", "invisible"]);
const mM = (e) => {
    const { classes: t, invisible: n } = e;
    return oe({ root: ["root", n && "invisible"] }, gM, t);
  },
  yM = j("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.invisible && t.invisible];
    },
  })({
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    WebkitTapHighlightColor: "transparent",
    variants: [
      { props: { invisible: !0 }, style: { backgroundColor: "transparent" } },
    ],
  }),
  vM = C.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiBackdrop" }),
      {
        children: i,
        className: o,
        component: s = "div",
        invisible: a = !1,
        open: l,
        components: c = {},
        componentsProps: u = {},
        slotProps: d = {},
        slots: f = {},
        TransitionComponent: p,
        transitionDuration: h,
        ...y
      } = r,
      x = { ...r, component: s, invisible: a },
      g = mM(x),
      v = { transition: p, root: c.Root, ...f },
      m = { ...u, ...d },
      S = { slots: v, slotProps: m },
      [w, _] = yn("root", {
        elementType: yM,
        externalForwardedProps: S,
        className: U(g.root, o),
        ownerState: x,
      }),
      [k, M] = yn("transition", {
        elementType: hM,
        externalForwardedProps: S,
        ownerState: x,
      });
    return (
      delete M.ownerState,
      P.jsx(k, {
        in: l,
        timeout: h,
        ...y,
        ...M,
        children: P.jsx(w, {
          "aria-hidden": !0,
          ..._,
          classes: g,
          ref: n,
          children: i,
        }),
      })
    );
  });
function xM(e) {
  return typeof e == "function" ? e() : e;
}
function bM(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const SM = new QE();
function CM(e) {
  const {
      container: t,
      disableEscapeKeyDown: n = !1,
      disableScrollLock: r = !1,
      manager: i = SM,
      closeAfterTransition: o = !1,
      onTransitionEnter: s,
      onTransitionExited: a,
      children: l,
      onClose: c,
      open: u,
      rootRef: d,
    } = e,
    f = C.useRef({}),
    p = C.useRef(null),
    h = C.useRef(null),
    y = Ye(h, d),
    [x, g] = C.useState(!u),
    v = bM(l);
  let m = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (m = !1);
  const S = () => It(p.current),
    w = () => (
      (f.current.modalRef = h.current), (f.current.mount = p.current), f.current
    ),
    _ = () => {
      i.mount(w(), { disableScrollLock: r }),
        h.current && (h.current.scrollTop = 0);
    },
    k = ii(() => {
      const A = xM(t) || S().body;
      i.add(w(), A), h.current && _();
    }),
    M = C.useCallback(() => i.isTopModal(w()), [i]),
    b = ii((A) => {
      (p.current = A), A && (u && M() ? _() : h.current && Rs(h.current, m));
    }),
    E = C.useCallback(() => {
      i.remove(w(), m);
    }, [m, i]);
  C.useEffect(
    () => () => {
      E();
    },
    [E]
  ),
    C.useEffect(() => {
      u ? k() : (!v || !o) && E();
    }, [u, E, v, o, k]);
  const R = (A) => (N) => {
      var T;
      (T = A.onKeyDown) == null || T.call(A, N),
        !(N.key !== "Escape" || N.which === 229 || !M()) &&
          (n || (N.stopPropagation(), c && c(N, "escapeKeyDown")));
    },
    I = (A) => (N) => {
      var T;
      (T = A.onClick) == null || T.call(A, N),
        N.target === N.currentTarget && c && c(N, "backdropClick");
    };
  return {
    getRootProps: (A = {}) => {
      const N = L1(e);
      delete N.onTransitionEnter, delete N.onTransitionExited;
      const T = { ...N, ...A };
      return { role: "presentation", ...T, onKeyDown: R(T), ref: y };
    },
    getBackdropProps: (A = {}) => {
      const N = A;
      return { "aria-hidden": !0, ...N, onClick: I(N), open: u };
    },
    getTransitionProps: () => {
      const A = () => {
          g(!1), s && s();
        },
        N = () => {
          g(!0), a && a(), o && E();
        };
      return {
        onEnter: Ff(A, l == null ? void 0 : l.props.onEnter),
        onExited: Ff(N, l == null ? void 0 : l.props.onExited),
      };
    },
    rootRef: y,
    portalRef: b,
    isTopModal: M,
    exited: x,
    hasTransition: v,
  };
}
function wM(e) {
  return ne("MuiModal", e);
}
ae("MuiModal", ["root", "hidden", "backdrop"]);
function kM(e) {
  return ne("MuiSvgIcon", e);
}
ae("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const _M = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      i = {
        root: ["root", t !== "inherit" && `color${V(t)}`, `fontSize${V(n)}`],
      };
    return oe(i, kM, r);
  },
  PM = j("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "inherit" && t[`color${V(n.color)}`],
        t[`fontSize${V(n.fontSize)}`],
      ];
    },
  })(
    me(({ theme: e }) => {
      var t, n, r, i, o, s, a, l, c, u, d, f, p, h;
      return {
        userSelect: "none",
        width: "1em",
        height: "1em",
        display: "inline-block",
        flexShrink: 0,
        transition:
          (i = (t = e.transitions) == null ? void 0 : t.create) == null
            ? void 0
            : i.call(t, "fill", {
                duration:
                  (r =
                    (n = (e.vars ?? e).transitions) == null
                      ? void 0
                      : n.duration) == null
                    ? void 0
                    : r.shorter,
              }),
        variants: [
          { props: (y) => !y.hasSvgAsChild, style: { fill: "currentColor" } },
          { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } },
          {
            props: { fontSize: "small" },
            style: {
              fontSize:
                ((s = (o = e.typography) == null ? void 0 : o.pxToRem) == null
                  ? void 0
                  : s.call(o, 20)) || "1.25rem",
            },
          },
          {
            props: { fontSize: "medium" },
            style: {
              fontSize:
                ((l = (a = e.typography) == null ? void 0 : a.pxToRem) == null
                  ? void 0
                  : l.call(a, 24)) || "1.5rem",
            },
          },
          {
            props: { fontSize: "large" },
            style: {
              fontSize:
                ((u = (c = e.typography) == null ? void 0 : c.pxToRem) == null
                  ? void 0
                  : u.call(c, 35)) || "2.1875rem",
            },
          },
          ...Object.entries((e.vars ?? e).palette)
            .filter(([, y]) => y && y.main)
            .map(([y]) => {
              var x, g;
              return {
                props: { color: y },
                style: {
                  color:
                    (g = (x = (e.vars ?? e).palette) == null ? void 0 : x[y]) ==
                    null
                      ? void 0
                      : g.main,
                },
              };
            }),
          {
            props: { color: "action" },
            style: {
              color:
                (f = (d = (e.vars ?? e).palette) == null ? void 0 : d.action) ==
                null
                  ? void 0
                  : f.active,
            },
          },
          {
            props: { color: "disabled" },
            style: {
              color:
                (h = (p = (e.vars ?? e).palette) == null ? void 0 : p.action) ==
                null
                  ? void 0
                  : h.disabled,
            },
          },
          { props: { color: "inherit" }, style: { color: void 0 } },
        ],
      };
    })
  ),
  fc = C.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiSvgIcon" }),
      {
        children: i,
        className: o,
        color: s = "inherit",
        component: a = "svg",
        fontSize: l = "medium",
        htmlColor: c,
        inheritViewBox: u = !1,
        titleAccess: d,
        viewBox: f = "0 0 24 24",
        ...p
      } = r,
      h = C.isValidElement(i) && i.type === "svg",
      y = {
        ...r,
        color: s,
        component: a,
        fontSize: l,
        instanceFontSize: t.fontSize,
        inheritViewBox: u,
        viewBox: f,
        hasSvgAsChild: h,
      },
      x = {};
    u || (x.viewBox = f);
    const g = _M(y);
    return P.jsxs(PM, {
      as: a,
      className: U(g.root, o),
      focusable: "false",
      color: c,
      "aria-hidden": d ? void 0 : !0,
      role: d ? "img" : void 0,
      ref: n,
      ...x,
      ...p,
      ...(h && i.props),
      ownerState: y,
      children: [
        h ? i.props.children : i,
        d ? P.jsx("title", { children: d }) : null,
      ],
    });
  });
fc && (fc.muiName = "SvgIcon");
function K1(e, t) {
  function n(r, i) {
    return P.jsx(fc, { "data-testid": `${t}Icon`, ref: i, ...r, children: e });
  }
  return (n.muiName = fc.muiName), C.memo(C.forwardRef(n));
}
const EM = {
    configure: (e) => {
      dh.configure(e);
    },
  },
  MM = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        capitalize: V,
        createChainedFunction: Ff,
        createSvgIcon: K1,
        debounce: yu,
        deprecatedPropType: iP,
        isMuiElement: io,
        ownerDocument: It,
        ownerWindow: Dn,
        requirePropFactory: oP,
        setRef: uc,
        unstable_ClassNameGenerator: EM,
        unstable_memoTheme: me,
        unstable_useEnhancedEffect: ir,
        unstable_useId: mh,
        unsupportedProp: aP,
        useControlled: zf,
        useEventCallback: ii,
        useForkRef: Ye,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  TM = (e) => {
    const { open: t, exited: n, classes: r } = e;
    return oe(
      { root: ["root", !t && n && "hidden"], backdrop: ["backdrop"] },
      wM,
      r
    );
  },
  RM = j("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.open && n.exited && t.hidden];
    },
  })(
    me(({ theme: e }) => ({
      position: "fixed",
      zIndex: (e.vars || e).zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      variants: [
        {
          props: ({ ownerState: t }) => !t.open && t.exited,
          style: { visibility: "hidden" },
        },
      ],
    }))
  ),
  OM = j(vM, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  Y1 = C.forwardRef(function (t, n) {
    const r = pe({ name: "MuiModal", props: t }),
      {
        BackdropComponent: i = OM,
        BackdropProps: o,
        classes: s,
        className: a,
        closeAfterTransition: l = !1,
        children: c,
        container: u,
        component: d,
        components: f = {},
        componentsProps: p = {},
        disableAutoFocus: h = !1,
        disableEnforceFocus: y = !1,
        disableEscapeKeyDown: x = !1,
        disablePortal: g = !1,
        disableRestoreFocus: v = !1,
        disableScrollLock: m = !1,
        hideBackdrop: S = !1,
        keepMounted: w = !1,
        onBackdropClick: _,
        onClose: k,
        onTransitionEnter: M,
        onTransitionExited: b,
        open: E,
        slotProps: R = {},
        slots: I = {},
        theme: z,
        ...D
      } = r,
      L = {
        ...r,
        closeAfterTransition: l,
        disableAutoFocus: h,
        disableEnforceFocus: y,
        disableEscapeKeyDown: x,
        disablePortal: g,
        disableRestoreFocus: v,
        disableScrollLock: m,
        hideBackdrop: S,
        keepMounted: w,
      },
      {
        getRootProps: A,
        getBackdropProps: N,
        getTransitionProps: T,
        portalRef: $,
        isTopModal: B,
        exited: H,
        hasTransition: Q,
      } = CM({ ...L, rootRef: n }),
      q = { ...L, exited: H },
      G = TM(q),
      le = {};
    if ((c.props.tabIndex === void 0 && (le.tabIndex = "-1"), Q)) {
      const { onEnter: te, onExited: rt } = T();
      (le.onEnter = te), (le.onExited = rt);
    }
    const re = {
        slots: { root: f.Root, backdrop: f.Backdrop, ...I },
        slotProps: { ...p, ...R },
      },
      [He, kt] = yn("root", {
        elementType: RM,
        externalForwardedProps: re,
        getSlotProps: A,
        additionalProps: { ref: n, as: d },
        ownerState: q,
        className: U(
          a,
          G == null ? void 0 : G.root,
          !q.open && q.exited && (G == null ? void 0 : G.hidden)
        ),
      }),
      [Be, Z] = yn("backdrop", {
        elementType: i,
        externalForwardedProps: re,
        additionalProps: o,
        getSlotProps: (te) =>
          N({
            ...te,
            onClick: (rt) => {
              _ && _(rt), te != null && te.onClick && te.onClick(rt);
            },
          }),
        className: U(
          o == null ? void 0 : o.className,
          G == null ? void 0 : G.backdrop
        ),
        ownerState: q,
      }),
      fe = Ye(o == null ? void 0 : o.ref, Z.ref);
    return !w && !E && (!Q || H)
      ? null
      : P.jsx(oM, {
          ref: $,
          container: u,
          disablePortal: g,
          children: P.jsxs(He, {
            ...kt,
            ...D,
            children: [
              !S && i ? P.jsx(Be, { ...Z, ref: fe }) : null,
              P.jsx(rM, {
                disableEnforceFocus: y,
                disableAutoFocus: h,
                disableRestoreFocus: v,
                isEnabled: B,
                open: E,
                children: C.cloneElement(c, le),
              }),
            ],
          }),
        });
  });
function IM(e, t, n) {
  const r = t.getBoundingClientRect(),
    i = n && n.getBoundingClientRect(),
    o = Dn(t);
  let s;
  if (t.fakeTransform) s = t.fakeTransform;
  else {
    const c = o.getComputedStyle(t);
    s =
      c.getPropertyValue("-webkit-transform") ||
      c.getPropertyValue("transform");
  }
  let a = 0,
    l = 0;
  if (s && s !== "none" && typeof s == "string") {
    const c = s.split("(")[1].split(")")[0].split(",");
    (a = parseInt(c[4], 10)), (l = parseInt(c[5], 10));
  }
  return e === "left"
    ? i
      ? `translateX(${i.right + a - r.left}px)`
      : `translateX(${o.innerWidth + a - r.left}px)`
    : e === "right"
    ? i
      ? `translateX(-${r.right - i.left - a}px)`
      : `translateX(-${r.left + r.width - a}px)`
    : e === "up"
    ? i
      ? `translateY(${i.bottom + l - r.top}px)`
      : `translateY(${o.innerHeight + l - r.top}px)`
    : i
    ? `translateY(-${r.top - i.top + r.height - l}px)`
    : `translateY(-${r.top + r.height - l}px)`;
}
function AM(e) {
  return typeof e == "function" ? e() : e;
}
function Qa(e, t, n) {
  const r = AM(n),
    i = IM(e, t, r);
  i && ((t.style.webkitTransform = i), (t.style.transform = i));
}
const LM = C.forwardRef(function (t, n) {
  const r = ka(),
    i = {
      enter: r.transitions.easing.easeOut,
      exit: r.transitions.easing.sharp,
    },
    o = {
      enter: r.transitions.duration.enteringScreen,
      exit: r.transitions.duration.leavingScreen,
    },
    {
      addEndListener: s,
      appear: a = !0,
      children: l,
      container: c,
      direction: u = "down",
      easing: d = i,
      in: f,
      onEnter: p,
      onEntered: h,
      onEntering: y,
      onExit: x,
      onExited: g,
      onExiting: v,
      style: m,
      timeout: S = o,
      TransitionComponent: w = Cn,
      ..._
    } = t,
    k = C.useRef(null),
    M = Ye(Oo(l), k, n),
    b = (T) => ($) => {
      T && ($ === void 0 ? T(k.current) : T(k.current, $));
    },
    E = b((T, $) => {
      Qa(u, T, c), kh(T), p && p(T, $);
    }),
    R = b((T, $) => {
      const B = yo({ timeout: S, style: m, easing: d }, { mode: "enter" });
      (T.style.webkitTransition = r.transitions.create("-webkit-transform", {
        ...B,
      })),
        (T.style.transition = r.transitions.create("transform", { ...B })),
        (T.style.webkitTransform = "none"),
        (T.style.transform = "none"),
        y && y(T, $);
    }),
    I = b(h),
    z = b(v),
    D = b((T) => {
      const $ = yo({ timeout: S, style: m, easing: d }, { mode: "exit" });
      (T.style.webkitTransition = r.transitions.create("-webkit-transform", $)),
        (T.style.transition = r.transitions.create("transform", $)),
        Qa(u, T, c),
        x && x(T);
    }),
    L = b((T) => {
      (T.style.webkitTransition = ""), (T.style.transition = ""), g && g(T);
    }),
    A = (T) => {
      s && s(k.current, T);
    },
    N = C.useCallback(() => {
      k.current && Qa(u, k.current, c);
    }, [u, c]);
  return (
    C.useEffect(() => {
      if (f || u === "down" || u === "right") return;
      const T = yu(() => {
          k.current && Qa(u, k.current, c);
        }),
        $ = Dn(k.current);
      return (
        $.addEventListener("resize", T),
        () => {
          T.clear(), $.removeEventListener("resize", T);
        }
      );
    }, [u, f, c]),
    C.useEffect(() => {
      f || N();
    }, [f, N]),
    P.jsx(w, {
      nodeRef: k,
      onEnter: E,
      onEntered: I,
      onEntering: R,
      onExit: D,
      onExited: L,
      onExiting: z,
      addEndListener: A,
      appear: a,
      in: f,
      timeout: S,
      ..._,
      children: (T, $) =>
        C.cloneElement(l, {
          ref: M,
          style: {
            visibility: T === "exited" && !f ? "hidden" : void 0,
            ...m,
            ...l.props.style,
          },
          ...$,
        }),
    })
  );
});
function $M(e) {
  return ne("MuiDrawer", e);
}
ae("MuiDrawer", [
  "root",
  "docked",
  "paper",
  "paperAnchorLeft",
  "paperAnchorRight",
  "paperAnchorTop",
  "paperAnchorBottom",
  "paperAnchorDockedLeft",
  "paperAnchorDockedRight",
  "paperAnchorDockedTop",
  "paperAnchorDockedBottom",
  "modal",
]);
const X1 = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      (n.variant === "permanent" || n.variant === "persistent") && t.docked,
      t.modal,
    ];
  },
  FM = (e) => {
    const { classes: t, anchor: n, variant: r } = e,
      i = {
        root: ["root"],
        docked: [(r === "permanent" || r === "persistent") && "docked"],
        modal: ["modal"],
        paper: [
          "paper",
          `paperAnchor${V(n)}`,
          r !== "temporary" && `paperAnchorDocked${V(n)}`,
        ],
      };
    return oe(i, $M, t);
  },
  zM = j(Y1, { name: "MuiDrawer", slot: "Root", overridesResolver: X1 })(
    me(({ theme: e }) => ({ zIndex: (e.vars || e).zIndex.drawer }))
  ),
  Xm = j("div", {
    shouldForwardProp: Vt,
    name: "MuiDrawer",
    slot: "Docked",
    skipVariantsResolver: !1,
    overridesResolver: X1,
  })({ flex: "0 0 auto" }),
  DM = j(Sh, {
    name: "MuiDrawer",
    slot: "Paper",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.paper,
        t[`paperAnchor${V(n.anchor)}`],
        n.variant !== "temporary" && t[`paperAnchorDocked${V(n.anchor)}`],
      ];
    },
  })(
    me(({ theme: e }) => ({
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      flex: "1 0 auto",
      zIndex: (e.vars || e).zIndex.drawer,
      WebkitOverflowScrolling: "touch",
      position: "fixed",
      top: 0,
      outline: 0,
      variants: [
        { props: { anchor: "left" }, style: { left: 0 } },
        {
          props: { anchor: "top" },
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: "auto",
            maxHeight: "100%",
          },
        },
        { props: { anchor: "right" }, style: { right: 0 } },
        {
          props: { anchor: "bottom" },
          style: {
            top: "auto",
            left: 0,
            bottom: 0,
            right: 0,
            height: "auto",
            maxHeight: "100%",
          },
        },
        {
          props: ({ ownerState: t }) =>
            t.anchor === "left" && t.variant !== "temporary",
          style: { borderRight: `1px solid ${(e.vars || e).palette.divider}` },
        },
        {
          props: ({ ownerState: t }) =>
            t.anchor === "top" && t.variant !== "temporary",
          style: { borderBottom: `1px solid ${(e.vars || e).palette.divider}` },
        },
        {
          props: ({ ownerState: t }) =>
            t.anchor === "right" && t.variant !== "temporary",
          style: { borderLeft: `1px solid ${(e.vars || e).palette.divider}` },
        },
        {
          props: ({ ownerState: t }) =>
            t.anchor === "bottom" && t.variant !== "temporary",
          style: { borderTop: `1px solid ${(e.vars || e).palette.divider}` },
        },
      ],
    }))
  ),
  Q1 = { left: "right", right: "left", top: "down", bottom: "up" };
function NM(e) {
  return ["left", "right"].includes(e);
}
function BM({ direction: e }, t) {
  return e === "rtl" && NM(t) ? Q1[t] : t;
}
const jM = C.forwardRef(function (t, n) {
  const r = pe({ props: t, name: "MuiDrawer" }),
    i = ka(),
    o = z1(),
    s = {
      enter: i.transitions.duration.enteringScreen,
      exit: i.transitions.duration.leavingScreen,
    },
    {
      anchor: a = "left",
      BackdropProps: l,
      children: c,
      className: u,
      elevation: d = 16,
      hideBackdrop: f = !1,
      ModalProps: { BackdropProps: p, ...h } = {},
      onClose: y,
      open: x = !1,
      PaperProps: g = {},
      SlideProps: v,
      TransitionComponent: m = LM,
      transitionDuration: S = s,
      variant: w = "temporary",
      ..._
    } = r,
    k = C.useRef(!1);
  C.useEffect(() => {
    k.current = !0;
  }, []);
  const M = BM({ direction: o ? "rtl" : "ltr" }, a),
    E = { ...r, anchor: a, elevation: d, open: x, variant: w, ..._ },
    R = FM(E),
    I = P.jsx(DM, {
      elevation: w === "temporary" ? d : 0,
      square: !0,
      ...g,
      className: U(R.paper, g.className),
      ownerState: E,
      children: c,
    });
  if (w === "permanent")
    return P.jsx(Xm, {
      className: U(R.root, R.docked, u),
      ownerState: E,
      ref: n,
      ..._,
      children: I,
    });
  const z = P.jsx(m, {
    in: x,
    direction: Q1[M],
    timeout: S,
    appear: k.current,
    ...v,
    children: I,
  });
  return w === "persistent"
    ? P.jsx(Xm, {
        className: U(R.root, R.docked, u),
        ownerState: E,
        ref: n,
        ..._,
        children: z,
      })
    : P.jsx(zM, {
        BackdropProps: { ...l, ...p, transitionDuration: S },
        className: U(R.root, R.modal, u),
        open: x,
        ownerState: E,
        onClose: y,
        hideBackdrop: f,
        ref: n,
        ..._,
        ...h,
        children: z,
      });
});
class pc {
  constructor() {
    Y(this, "mountEffect", () => {
      this.shouldMount &&
        !this.didMount &&
        this.ref.current !== null &&
        ((this.didMount = !0), this.mounted.resolve());
    });
    (this.ref = { current: null }),
      (this.mounted = null),
      (this.didMount = !1),
      (this.shouldMount = !1),
      (this.setShouldMount = null);
  }
  static create() {
    return new pc();
  }
  static use() {
    const t = R1(pc.create).current,
      [n, r] = C.useState(!1);
    return (
      (t.shouldMount = n),
      (t.setShouldMount = r),
      C.useEffect(t.mountEffect, [n]),
      t
    );
  }
  mount() {
    return (
      this.mounted ||
        ((this.mounted = HM()),
        (this.shouldMount = !0),
        this.setShouldMount(this.shouldMount)),
      this.mounted
    );
  }
  start(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.pulsate(...t);
    });
  }
}
function WM() {
  return pc.use();
}
function HM() {
  let e, t;
  const n = new Promise((r, i) => {
    (e = r), (t = i);
  });
  return (n.resolve = e), (n.reject = t), n;
}
function UM(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: i,
      rippleY: o,
      rippleSize: s,
      in: a,
      onExited: l,
      timeout: c,
    } = e,
    [u, d] = C.useState(!1),
    f = U(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    p = { width: s, height: s, top: -(s / 2) + o, left: -(s / 2) + i },
    h = U(n.child, u && n.childLeaving, r && n.childPulsate);
  return (
    !a && !u && d(!0),
    C.useEffect(() => {
      if (!a && l != null) {
        const y = setTimeout(l, c);
        return () => {
          clearTimeout(y);
        };
      }
    }, [l, a, c]),
    P.jsx("span", {
      className: f,
      style: p,
      children: P.jsx("span", { className: h }),
    })
  );
}
const Xt = ae("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  Hf = 550,
  VM = 80,
  GM = uh`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
  KM = uh`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
  YM = uh`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,
  XM = j("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  QM = j(UM, { name: "MuiTouchRipple", slot: "Ripple" })`
  opacity: 0;
  position: absolute;

  &.${Xt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${GM};
    animation-duration: ${Hf}ms;
    animation-timing-function: ${({ theme: e }) =>
      e.transitions.easing.easeInOut};
  }

  &.${Xt.ripplePulsate} {
    animation-duration: ${({ theme: e }) => e.transitions.duration.shorter}ms;
  }

  & .${Xt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Xt.childLeaving} {
    opacity: 0;
    animation-name: ${KM};
    animation-duration: ${Hf}ms;
    animation-timing-function: ${({ theme: e }) =>
      e.transitions.easing.easeInOut};
  }

  & .${Xt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${YM};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: e }) =>
      e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
  qM = C.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiTouchRipple" }),
      { center: i = !1, classes: o = {}, className: s, ...a } = r,
      [l, c] = C.useState([]),
      u = C.useRef(0),
      d = C.useRef(null);
    C.useEffect(() => {
      d.current && (d.current(), (d.current = null));
    }, [l]);
    const f = C.useRef(!1),
      p = O1(),
      h = C.useRef(null),
      y = C.useRef(null),
      x = C.useCallback(
        (S) => {
          const {
            pulsate: w,
            rippleX: _,
            rippleY: k,
            rippleSize: M,
            cb: b,
          } = S;
          c((E) => [
            ...E,
            P.jsx(
              QM,
              {
                classes: {
                  ripple: U(o.ripple, Xt.ripple),
                  rippleVisible: U(o.rippleVisible, Xt.rippleVisible),
                  ripplePulsate: U(o.ripplePulsate, Xt.ripplePulsate),
                  child: U(o.child, Xt.child),
                  childLeaving: U(o.childLeaving, Xt.childLeaving),
                  childPulsate: U(o.childPulsate, Xt.childPulsate),
                },
                timeout: Hf,
                pulsate: w,
                rippleX: _,
                rippleY: k,
                rippleSize: M,
              },
              u.current
            ),
          ]),
            (u.current += 1),
            (d.current = b);
        },
        [o]
      ),
      g = C.useCallback(
        (S = {}, w = {}, _ = () => {}) => {
          const {
            pulsate: k = !1,
            center: M = i || w.pulsate,
            fakeElement: b = !1,
          } = w;
          if ((S == null ? void 0 : S.type) === "mousedown" && f.current) {
            f.current = !1;
            return;
          }
          (S == null ? void 0 : S.type) === "touchstart" && (f.current = !0);
          const E = b ? null : y.current,
            R = E
              ? E.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let I, z, D;
          if (
            M ||
            S === void 0 ||
            (S.clientX === 0 && S.clientY === 0) ||
            (!S.clientX && !S.touches)
          )
            (I = Math.round(R.width / 2)), (z = Math.round(R.height / 2));
          else {
            const { clientX: L, clientY: A } =
              S.touches && S.touches.length > 0 ? S.touches[0] : S;
            (I = Math.round(L - R.left)), (z = Math.round(A - R.top));
          }
          if (M)
            (D = Math.sqrt((2 * R.width ** 2 + R.height ** 2) / 3)),
              D % 2 === 0 && (D += 1);
          else {
            const L =
                Math.max(Math.abs((E ? E.clientWidth : 0) - I), I) * 2 + 2,
              A = Math.max(Math.abs((E ? E.clientHeight : 0) - z), z) * 2 + 2;
            D = Math.sqrt(L ** 2 + A ** 2);
          }
          S != null && S.touches
            ? h.current === null &&
              ((h.current = () => {
                x({ pulsate: k, rippleX: I, rippleY: z, rippleSize: D, cb: _ });
              }),
              p.start(VM, () => {
                h.current && (h.current(), (h.current = null));
              }))
            : x({ pulsate: k, rippleX: I, rippleY: z, rippleSize: D, cb: _ });
        },
        [i, x, p]
      ),
      v = C.useCallback(() => {
        g({}, { pulsate: !0 });
      }, [g]),
      m = C.useCallback(
        (S, w) => {
          if (
            (p.clear(),
            (S == null ? void 0 : S.type) === "touchend" && h.current)
          ) {
            h.current(),
              (h.current = null),
              p.start(0, () => {
                m(S, w);
              });
            return;
          }
          (h.current = null),
            c((_) => (_.length > 0 ? _.slice(1) : _)),
            (d.current = w);
        },
        [p]
      );
    return (
      C.useImperativeHandle(n, () => ({ pulsate: v, start: g, stop: m }), [
        v,
        g,
        m,
      ]),
      P.jsx(XM, {
        className: U(Xt.root, o.root, s),
        ref: y,
        ...a,
        children: P.jsx(wh, { component: null, exit: !0, children: l }),
      })
    );
  });
function JM(e) {
  return ne("MuiButtonBase", e);
}
const ZM = ae("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  eT = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: i,
      } = e,
      s = oe({ root: ["root", t && "disabled", n && "focusVisible"] }, JM, i);
    return n && r && (s.root += ` ${r}`), s;
  },
  tT = j("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${ZM.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  _h = C.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiButtonBase" }),
      {
        action: i,
        centerRipple: o = !1,
        children: s,
        className: a,
        component: l = "button",
        disabled: c = !1,
        disableRipple: u = !1,
        disableTouchRipple: d = !1,
        focusRipple: f = !1,
        focusVisibleClassName: p,
        LinkComponent: h = "a",
        onBlur: y,
        onClick: x,
        onContextMenu: g,
        onDragLeave: v,
        onFocus: m,
        onFocusVisible: S,
        onKeyDown: w,
        onKeyUp: _,
        onMouseDown: k,
        onMouseLeave: M,
        onMouseUp: b,
        onTouchEnd: E,
        onTouchMove: R,
        onTouchStart: I,
        tabIndex: z = 0,
        TouchRippleProps: D,
        touchRippleRef: L,
        type: A,
        ...N
      } = r,
      T = C.useRef(null),
      $ = WM(),
      B = Ye($.ref, L),
      [H, Q] = C.useState(!1);
    c && H && Q(!1),
      C.useImperativeHandle(
        i,
        () => ({
          focusVisible: () => {
            Q(!0), T.current.focus();
          },
        }),
        []
      );
    const q = $.shouldMount && !u && !c;
    C.useEffect(() => {
      H && f && !u && $.pulsate();
    }, [u, f, H, $]);
    function G(K, st, zo = d) {
      return ii((Bn) => (st && st(Bn), zo || $[K](Bn), !0));
    }
    const le = G("start", k),
      re = G("stop", g),
      He = G("stop", v),
      kt = G("stop", b),
      Be = G("stop", (K) => {
        H && K.preventDefault(), M && M(K);
      }),
      Z = G("start", I),
      fe = G("stop", E),
      te = G("stop", R),
      rt = G(
        "stop",
        (K) => {
          Lm(K.target) || Q(!1), y && y(K);
        },
        !1
      ),
      se = ii((K) => {
        T.current || (T.current = K.currentTarget),
          Lm(K.target) && (Q(!0), S && S(K)),
          m && m(K);
      }),
      xe = () => {
        const K = T.current;
        return l && l !== "button" && !(K.tagName === "A" && K.href);
      },
      Gt = ii((K) => {
        f &&
          !K.repeat &&
          H &&
          K.key === " " &&
          $.stop(K, () => {
            $.start(K);
          }),
          K.target === K.currentTarget &&
            xe() &&
            K.key === " " &&
            K.preventDefault(),
          w && w(K),
          K.target === K.currentTarget &&
            xe() &&
            K.key === "Enter" &&
            !c &&
            (K.preventDefault(), x && x(K));
      }),
      Kt = ii((K) => {
        f &&
          K.key === " " &&
          H &&
          !K.defaultPrevented &&
          $.stop(K, () => {
            $.pulsate(K);
          }),
          _ && _(K),
          x &&
            K.target === K.currentTarget &&
            xe() &&
            K.key === " " &&
            !K.defaultPrevented &&
            x(K);
      });
    let it = l;
    it === "button" && (N.href || N.to) && (it = h);
    const ot = {};
    it === "button"
      ? ((ot.type = A === void 0 ? "button" : A), (ot.disabled = c))
      : (!N.href && !N.to && (ot.role = "button"),
        c && (ot["aria-disabled"] = c));
    const wn = Ye(n, T),
      ke = {
        ...r,
        centerRipple: o,
        component: l,
        disabled: c,
        disableRipple: u,
        disableTouchRipple: d,
        focusRipple: f,
        tabIndex: z,
        focusVisible: H,
      },
      Nn = eT(ke);
    return P.jsxs(tT, {
      as: it,
      className: U(Nn.root, a),
      ownerState: ke,
      onBlur: rt,
      onClick: x,
      onContextMenu: re,
      onFocus: se,
      onKeyDown: Gt,
      onKeyUp: Kt,
      onMouseDown: le,
      onMouseLeave: Be,
      onMouseUp: kt,
      onDragLeave: He,
      onTouchEnd: fe,
      onTouchMove: te,
      onTouchStart: Z,
      ref: wn,
      tabIndex: c ? -1 : z,
      type: A,
      ...ot,
      ...N,
      children: [s, q ? P.jsx(qM, { ref: B, center: o, ...D }) : null],
    });
  });
function nT(e) {
  return ne("MuiIconButton", e);
}
const rT = ae("MuiIconButton", [
    "root",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorError",
    "colorInfo",
    "colorSuccess",
    "colorWarning",
    "edgeStart",
    "edgeEnd",
    "sizeSmall",
    "sizeMedium",
    "sizeLarge",
  ]),
  iT = (e) => {
    const { classes: t, disabled: n, color: r, edge: i, size: o } = e,
      s = {
        root: [
          "root",
          n && "disabled",
          r !== "default" && `color${V(r)}`,
          i && `edge${V(i)}`,
          `size${V(o)}`,
        ],
      };
    return oe(s, nT, t);
  },
  oT = j(_h, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "default" && t[`color${V(n.color)}`],
        n.edge && t[`edge${V(n.edge)}`],
        t[`size${V(n.size)}`],
      ];
    },
  })(
    me(({ theme: e }) => ({
      textAlign: "center",
      flex: "0 0 auto",
      fontSize: e.typography.pxToRem(24),
      padding: 8,
      borderRadius: "50%",
      color: (e.vars || e).palette.action.active,
      transition: e.transitions.create("background-color", {
        duration: e.transitions.duration.shortest,
      }),
      variants: [
        {
          props: { disableRipple: !1 },
          style: {
            "&:hover": {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
                : bt(e.palette.action.active, e.palette.action.hoverOpacity),
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
          },
        },
        { props: { edge: "start" }, style: { marginLeft: -12 } },
        { props: { edge: "start", size: "small" }, style: { marginLeft: -3 } },
        { props: { edge: "end" }, style: { marginRight: -12 } },
        { props: { edge: "end", size: "small" }, style: { marginRight: -3 } },
      ],
    })),
    me(({ theme: e }) => ({
      variants: [
        { props: { color: "inherit" }, style: { color: "inherit" } },
        ...Object.entries(e.palette)
          .filter(([, t]) => t && t.main)
          .map(([t]) => ({
            props: { color: t },
            style: { color: (e.vars || e).palette[t].main },
          })),
        ...Object.entries(e.palette)
          .filter(([, t]) => t && t.main)
          .map(([t]) => ({
            props: { color: t, disableRipple: !1 },
            style: {
              "&:hover": {
                backgroundColor: e.vars
                  ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : bt(
                      (e.vars || e).palette[t].main,
                      e.palette.action.hoverOpacity
                    ),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            },
          })),
        {
          props: { size: "small" },
          style: { padding: 5, fontSize: e.typography.pxToRem(18) },
        },
        {
          props: { size: "large" },
          style: { padding: 12, fontSize: e.typography.pxToRem(28) },
        },
      ],
      [`&.${rT.disabled}`]: {
        backgroundColor: "transparent",
        color: (e.vars || e).palette.action.disabled,
      },
    }))
  ),
  sT = C.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiIconButton" }),
      {
        edge: i = !1,
        children: o,
        className: s,
        color: a = "default",
        disabled: l = !1,
        disableFocusRipple: c = !1,
        disableRipple: u = !1,
        size: d = "medium",
        ...f
      } = r,
      p = {
        ...r,
        edge: i,
        color: a,
        disabled: l,
        disableFocusRipple: c,
        disableRipple: u,
        size: d,
      },
      h = iT(p);
    return P.jsx(oT, {
      className: U(h.root, s),
      centerRipple: !0,
      focusRipple: !c,
      disabled: l,
      disableRipple: u,
      ref: n,
      ...f,
      ownerState: p,
      children: o,
    });
  }),
  Or = C.createContext({});
function aT(e) {
  return ne("MuiList", e);
}
ae("MuiList", ["root", "padding", "dense", "subheader"]);
const lT = (e) => {
    const { classes: t, disablePadding: n, dense: r, subheader: i } = e;
    return oe(
      { root: ["root", !n && "padding", r && "dense", i && "subheader"] },
      aT,
      t
    );
  },
  cT = j("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        !n.disablePadding && t.padding,
        n.dense && t.dense,
        n.subheader && t.subheader,
      ];
    },
  })({
    listStyle: "none",
    margin: 0,
    padding: 0,
    position: "relative",
    variants: [
      {
        props: ({ ownerState: e }) => !e.disablePadding,
        style: { paddingTop: 8, paddingBottom: 8 },
      },
      { props: ({ ownerState: e }) => e.subheader, style: { paddingTop: 0 } },
    ],
  }),
  q1 = C.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiList" }),
      {
        children: i,
        className: o,
        component: s = "ul",
        dense: a = !1,
        disablePadding: l = !1,
        subheader: c,
        ...u
      } = r,
      d = C.useMemo(() => ({ dense: a }), [a]),
      f = { ...r, component: s, dense: a, disablePadding: l },
      p = lT(f);
    return P.jsx(Or.Provider, {
      value: d,
      children: P.jsxs(cT, {
        as: s,
        className: U(p.root, o),
        ref: n,
        ownerState: f,
        ...u,
        children: [c, i],
      }),
    });
  });
function aa(e) {
  return typeof e == "string";
}
function uT(e) {
  return ne("MuiListItem", e);
}
ae("MuiListItem", [
  "root",
  "container",
  "dense",
  "alignItemsFlexStart",
  "divider",
  "gutters",
  "padding",
  "secondaryAction",
]);
function dT(e) {
  return ne("MuiListItemButton", e);
}
const zi = ae("MuiListItemButton", [
    "root",
    "focusVisible",
    "dense",
    "alignItemsFlexStart",
    "disabled",
    "divider",
    "gutters",
    "selected",
  ]),
  fT = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.dense && t.dense,
      n.alignItems === "flex-start" && t.alignItemsFlexStart,
      n.divider && t.divider,
      !n.disableGutters && t.gutters,
    ];
  },
  pT = (e) => {
    const {
        alignItems: t,
        classes: n,
        dense: r,
        disabled: i,
        disableGutters: o,
        divider: s,
        selected: a,
      } = e,
      c = oe(
        {
          root: [
            "root",
            r && "dense",
            !o && "gutters",
            s && "divider",
            i && "disabled",
            t === "flex-start" && "alignItemsFlexStart",
            a && "selected",
          ],
        },
        dT,
        n
      );
    return { ...n, ...c };
  },
  hT = j(_h, {
    shouldForwardProp: (e) => Vt(e) || e === "classes",
    name: "MuiListItemButton",
    slot: "Root",
    overridesResolver: fT,
  })(
    me(({ theme: e }) => ({
      display: "flex",
      flexGrow: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      position: "relative",
      textDecoration: "none",
      minWidth: 0,
      boxSizing: "border-box",
      textAlign: "left",
      paddingTop: 8,
      paddingBottom: 8,
      transition: e.transitions.create("background-color", {
        duration: e.transitions.duration.shortest,
      }),
      "&:hover": {
        textDecoration: "none",
        backgroundColor: (e.vars || e).palette.action.hover,
        "@media (hover: none)": { backgroundColor: "transparent" },
      },
      [`&.${zi.selected}`]: {
        backgroundColor: e.vars
          ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
          : bt(e.palette.primary.main, e.palette.action.selectedOpacity),
        [`&.${zi.focusVisible}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
            : bt(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.focusOpacity
              ),
        },
      },
      [`&.${zi.selected}:hover`]: {
        backgroundColor: e.vars
          ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
          : bt(
              e.palette.primary.main,
              e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
            ),
        "@media (hover: none)": {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
            : bt(e.palette.primary.main, e.palette.action.selectedOpacity),
        },
      },
      [`&.${zi.focusVisible}`]: {
        backgroundColor: (e.vars || e).palette.action.focus,
      },
      [`&.${zi.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity,
      },
      variants: [
        {
          props: ({ ownerState: t }) => t.divider,
          style: {
            borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
            backgroundClip: "padding-box",
          },
        },
        {
          props: { alignItems: "flex-start" },
          style: { alignItems: "flex-start" },
        },
        {
          props: ({ ownerState: t }) => !t.disableGutters,
          style: { paddingLeft: 16, paddingRight: 16 },
        },
        {
          props: ({ ownerState: t }) => t.dense,
          style: { paddingTop: 4, paddingBottom: 4 },
        },
      ],
    }))
  ),
  qo = C.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiListItemButton" }),
      {
        alignItems: i = "center",
        autoFocus: o = !1,
        component: s = "div",
        children: a,
        dense: l = !1,
        disableGutters: c = !1,
        divider: u = !1,
        focusVisibleClassName: d,
        selected: f = !1,
        className: p,
        ...h
      } = r,
      y = C.useContext(Or),
      x = C.useMemo(
        () => ({ dense: l || y.dense || !1, alignItems: i, disableGutters: c }),
        [i, y.dense, l, c]
      ),
      g = C.useRef(null);
    ir(() => {
      o && g.current && g.current.focus();
    }, [o]);
    const v = {
        ...r,
        alignItems: i,
        dense: x.dense,
        disableGutters: c,
        divider: u,
        selected: f,
      },
      m = pT(v),
      S = Ye(g, n);
    return P.jsx(Or.Provider, {
      value: x,
      children: P.jsx(hT, {
        ref: S,
        href: h.href || h.to,
        component: (h.href || h.to) && s === "div" ? "button" : s,
        focusVisibleClassName: U(m.focusVisible, d),
        ownerState: v,
        className: U(m.root, p),
        ...h,
        classes: m,
        children: a,
      }),
    });
  });
function gT(e) {
  return ne("MuiListItemSecondaryAction", e);
}
ae("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const mT = (e) => {
    const { disableGutters: t, classes: n } = e;
    return oe({ root: ["root", t && "disableGutters"] }, gT, n);
  },
  yT = j("div", {
    name: "MuiListItemSecondaryAction",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.disableGutters && t.disableGutters];
    },
  })({
    position: "absolute",
    right: 16,
    top: "50%",
    transform: "translateY(-50%)",
    variants: [
      { props: ({ ownerState: e }) => e.disableGutters, style: { right: 0 } },
    ],
  }),
  J1 = C.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiListItemSecondaryAction" }),
      { className: i, ...o } = r,
      s = C.useContext(Or),
      a = { ...r, disableGutters: s.disableGutters },
      l = mT(a);
    return P.jsx(yT, { className: U(l.root, i), ownerState: a, ref: n, ...o });
  });
J1.muiName = "ListItemSecondaryAction";
const vT = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.dense && t.dense,
      n.alignItems === "flex-start" && t.alignItemsFlexStart,
      n.divider && t.divider,
      !n.disableGutters && t.gutters,
      !n.disablePadding && t.padding,
      n.hasSecondaryAction && t.secondaryAction,
    ];
  },
  xT = (e) => {
    const {
      alignItems: t,
      classes: n,
      dense: r,
      disableGutters: i,
      disablePadding: o,
      divider: s,
      hasSecondaryAction: a,
    } = e;
    return oe(
      {
        root: [
          "root",
          r && "dense",
          !i && "gutters",
          !o && "padding",
          s && "divider",
          t === "flex-start" && "alignItemsFlexStart",
          a && "secondaryAction",
        ],
        container: ["container"],
      },
      uT,
      n
    );
  },
  bT = j("div", { name: "MuiListItem", slot: "Root", overridesResolver: vT })(
    me(({ theme: e }) => ({
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      position: "relative",
      textDecoration: "none",
      width: "100%",
      boxSizing: "border-box",
      textAlign: "left",
      variants: [
        {
          props: ({ ownerState: t }) => !t.disablePadding,
          style: { paddingTop: 8, paddingBottom: 8 },
        },
        {
          props: ({ ownerState: t }) => !t.disablePadding && t.dense,
          style: { paddingTop: 4, paddingBottom: 4 },
        },
        {
          props: ({ ownerState: t }) => !t.disablePadding && !t.disableGutters,
          style: { paddingLeft: 16, paddingRight: 16 },
        },
        {
          props: ({ ownerState: t }) =>
            !t.disablePadding && !!t.secondaryAction,
          style: { paddingRight: 48 },
        },
        {
          props: ({ ownerState: t }) => !!t.secondaryAction,
          style: { [`& > .${zi.root}`]: { paddingRight: 48 } },
        },
        {
          props: { alignItems: "flex-start" },
          style: { alignItems: "flex-start" },
        },
        {
          props: ({ ownerState: t }) => t.divider,
          style: {
            borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
            backgroundClip: "padding-box",
          },
        },
        {
          props: ({ ownerState: t }) => t.button,
          style: {
            transition: e.transitions.create("background-color", {
              duration: e.transitions.duration.shortest,
            }),
            "&:hover": {
              textDecoration: "none",
              backgroundColor: (e.vars || e).palette.action.hover,
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
          },
        },
        {
          props: ({ ownerState: t }) => t.hasSecondaryAction,
          style: { paddingRight: 48 },
        },
      ],
    }))
  ),
  ST = j("li", {
    name: "MuiListItem",
    slot: "Container",
    overridesResolver: (e, t) => t.container,
  })({ position: "relative" }),
  Jo = C.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiListItem" }),
      {
        alignItems: i = "center",
        children: o,
        className: s,
        component: a,
        components: l = {},
        componentsProps: c = {},
        ContainerComponent: u = "li",
        ContainerProps: { className: d, ...f } = {},
        dense: p = !1,
        disableGutters: h = !1,
        disablePadding: y = !1,
        divider: x = !1,
        secondaryAction: g,
        slotProps: v = {},
        slots: m = {},
        ...S
      } = r,
      w = C.useContext(Or),
      _ = C.useMemo(
        () => ({ dense: p || w.dense || !1, alignItems: i, disableGutters: h }),
        [i, w.dense, p, h]
      ),
      k = C.useRef(null),
      M = C.Children.toArray(o),
      b = M.length && io(M[M.length - 1], ["ListItemSecondaryAction"]),
      E = {
        ...r,
        alignItems: i,
        dense: _.dense,
        disableGutters: h,
        disablePadding: y,
        divider: x,
        hasSecondaryAction: b,
      },
      R = xT(E),
      I = Ye(k, n),
      z = m.root || l.Root || bT,
      D = v.root || c.root || {},
      L = { className: U(R.root, D.className, s), ...S };
    let A = a || "li";
    return b
      ? ((A = !L.component && !a ? "div" : A),
        u === "li" &&
          (A === "li"
            ? (A = "div")
            : L.component === "li" && (L.component = "div")),
        P.jsx(Or.Provider, {
          value: _,
          children: P.jsxs(ST, {
            as: u,
            className: U(R.container, d),
            ref: I,
            ownerState: E,
            ...f,
            children: [
              P.jsx(z, {
                ...D,
                ...(!aa(z) && { as: A, ownerState: { ...E, ...D.ownerState } }),
                ...L,
                children: M,
              }),
              M.pop(),
            ],
          }),
        }))
      : P.jsx(Or.Provider, {
          value: _,
          children: P.jsxs(z, {
            ...D,
            as: A,
            ref: I,
            ...(!aa(z) && { ownerState: { ...E, ...D.ownerState } }),
            ...L,
            children: [M, g && P.jsx(J1, { children: g })],
          }),
        });
  });
function CT(e) {
  return ne("MuiTypography", e);
}
const wT = ae("MuiTypography", [
    "root",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "inherit",
    "button",
    "caption",
    "overline",
    "alignLeft",
    "alignRight",
    "alignCenter",
    "alignJustify",
    "noWrap",
    "gutterBottom",
    "paragraph",
  ]),
  Qm = wT,
  kT = {
    primary: !0,
    secondary: !0,
    error: !0,
    info: !0,
    success: !0,
    warning: !0,
    textPrimary: !0,
    textSecondary: !0,
    textDisabled: !0,
  },
  _T = PE(),
  PT = (e) => {
    const {
        align: t,
        gutterBottom: n,
        noWrap: r,
        paragraph: i,
        variant: o,
        classes: s,
      } = e,
      a = {
        root: [
          "root",
          o,
          e.align !== "inherit" && `align${V(t)}`,
          n && "gutterBottom",
          r && "noWrap",
          i && "paragraph",
        ],
      };
    return oe(a, CT, s);
  },
  ET = j("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.variant && t[n.variant],
        n.align !== "inherit" && t[`align${V(n.align)}`],
        n.noWrap && t.noWrap,
        n.gutterBottom && t.gutterBottom,
        n.paragraph && t.paragraph,
      ];
    },
  })(
    me(({ theme: e }) => {
      var t;
      return {
        margin: 0,
        variants: [
          {
            props: { variant: "inherit" },
            style: {
              font: "inherit",
              lineHeight: "inherit",
              letterSpacing: "inherit",
            },
          },
          ...Object.entries(e.typography)
            .filter(([n, r]) => n !== "inherit" && r && typeof r == "object")
            .map(([n, r]) => ({ props: { variant: n }, style: r })),
          ...Object.entries(e.palette)
            .filter(([, n]) => n && n.main)
            .map(([n]) => ({
              props: { color: n },
              style: { color: (e.vars || e).palette[n].main },
            })),
          ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {})
            .filter(([, n]) => typeof n == "string")
            .map(([n]) => ({
              props: { color: `text${V(n)}` },
              style: { color: (e.vars || e).palette.text[n] },
            })),
          {
            props: ({ ownerState: n }) => n.align !== "inherit",
            style: { textAlign: "var(--Typography-textAlign)" },
          },
          {
            props: ({ ownerState: n }) => n.noWrap,
            style: {
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            },
          },
          {
            props: ({ ownerState: n }) => n.gutterBottom,
            style: { marginBottom: "0.35em" },
          },
          {
            props: ({ ownerState: n }) => n.paragraph,
            style: { marginBottom: 16 },
          },
        ],
      };
    })
  ),
  qm = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  Ln = C.forwardRef(function (t, n) {
    const { color: r, ...i } = pe({ props: t, name: "MuiTypography" }),
      o = !kT[r],
      s = _T({ ...i, ...(o && { color: r }) }),
      {
        align: a = "inherit",
        className: l,
        component: c,
        gutterBottom: u = !1,
        noWrap: d = !1,
        paragraph: f = !1,
        variant: p = "body1",
        variantMapping: h = qm,
        ...y
      } = s,
      x = {
        ...s,
        align: a,
        color: r,
        className: l,
        component: c,
        gutterBottom: u,
        noWrap: d,
        paragraph: f,
        variant: p,
        variantMapping: h,
      },
      g = c || (f ? "p" : h[p] || qm[p]) || "span",
      v = PT(x);
    return P.jsx(ET, {
      as: g,
      ref: n,
      className: U(v.root, l),
      ...y,
      ownerState: x,
      style: {
        ...(a !== "inherit" && { "--Typography-textAlign": a }),
        ...y.style,
      },
    });
  });
function MT(e) {
  return ne("MuiListItemText", e);
}
const qa = ae("MuiListItemText", [
    "root",
    "multiline",
    "dense",
    "inset",
    "primary",
    "secondary",
  ]),
  TT = (e) => {
    const { classes: t, inset: n, primary: r, secondary: i, dense: o } = e;
    return oe(
      {
        root: ["root", n && "inset", o && "dense", r && i && "multiline"],
        primary: ["primary"],
        secondary: ["secondary"],
      },
      MT,
      t
    );
  },
  RT = j("div", {
    name: "MuiListItemText",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`& .${qa.primary}`]: t.primary },
        { [`& .${qa.secondary}`]: t.secondary },
        t.root,
        n.inset && t.inset,
        n.primary && n.secondary && t.multiline,
        n.dense && t.dense,
      ];
    },
  })({
    flex: "1 1 auto",
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4,
    [`.${Qm.root}:where(& .${qa.primary})`]: { display: "block" },
    [`.${Qm.root}:where(& .${qa.secondary})`]: { display: "block" },
    variants: [
      {
        props: ({ ownerState: e }) => e.primary && e.secondary,
        style: { marginTop: 6, marginBottom: 6 },
      },
      { props: ({ ownerState: e }) => e.inset, style: { paddingLeft: 56 } },
    ],
  }),
  Zo = C.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiListItemText" }),
      {
        children: i,
        className: o,
        disableTypography: s = !1,
        inset: a = !1,
        primary: l,
        primaryTypographyProps: c,
        secondary: u,
        secondaryTypographyProps: d,
        ...f
      } = r,
      { dense: p } = C.useContext(Or);
    let h = l ?? i,
      y = u;
    const x = {
        ...r,
        disableTypography: s,
        inset: a,
        primary: !!h,
        secondary: !!y,
        dense: p,
      },
      g = TT(x);
    return (
      h != null &&
        h.type !== Ln &&
        !s &&
        (h = P.jsx(Ln, {
          variant: p ? "body2" : "body1",
          className: g.primary,
          component: c != null && c.variant ? void 0 : "span",
          ...c,
          children: h,
        })),
      y != null &&
        y.type !== Ln &&
        !s &&
        (y = P.jsx(Ln, {
          variant: "body2",
          className: g.secondary,
          color: "textSecondary",
          ...d,
          children: y,
        })),
      P.jsxs(RT, {
        className: U(g.root, o),
        ownerState: x,
        ref: n,
        ...f,
        children: [h, y],
      })
    );
  });
var Ph = {},
  Z1 = { exports: {} };
(function (e) {
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(Z1);
var Ao = Z1.exports,
  wd = {};
const OT = rS(MM);
var Jm;
function Lo() {
  return (
    Jm ||
      ((Jm = 1),
      (function (e) {
        "use client";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function () {
              return t.createSvgIcon;
            },
          });
        var t = OT;
      })(wd)),
    wd
  );
}
var IT = Ao;
Object.defineProperty(Ph, "__esModule", { value: !0 });
var eb = (Ph.default = void 0),
  AT = IT(Lo()),
  LT = P;
eb = Ph.default = (0, AT.default)(
  (0, LT.jsx)("path", { d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" }),
  "Menu"
);
function $T(e) {
  return ne("MuiToolbar", e);
}
ae("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const FT = (e) => {
    const { classes: t, disableGutters: n, variant: r } = e;
    return oe({ root: ["root", !n && "gutters", r] }, $T, t);
  },
  zT = j("div", {
    name: "MuiToolbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
    },
  })(
    me(({ theme: e }) => ({
      position: "relative",
      display: "flex",
      alignItems: "center",
      variants: [
        {
          props: ({ ownerState: t }) => !t.disableGutters,
          style: {
            paddingLeft: e.spacing(2),
            paddingRight: e.spacing(2),
            [e.breakpoints.up("sm")]: {
              paddingLeft: e.spacing(3),
              paddingRight: e.spacing(3),
            },
          },
        },
        { props: { variant: "dense" }, style: { minHeight: 48 } },
        { props: { variant: "regular" }, style: e.mixins.toolbar },
      ],
    }))
  ),
  DT = C.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiToolbar" }),
      {
        className: i,
        component: o = "div",
        disableGutters: s = !1,
        variant: a = "regular",
        ...l
      } = r,
      c = { ...r, component: o, disableGutters: s, variant: a },
      u = FT(c);
    return P.jsx(zT, {
      as: o,
      className: U(u.root, i),
      ref: n,
      ownerState: c,
      ...l,
    });
  });
function NT(e) {
  return ne("MuiButton", e);
}
const Li = ae("MuiButton", [
    "root",
    "text",
    "textInherit",
    "textPrimary",
    "textSecondary",
    "textSuccess",
    "textError",
    "textInfo",
    "textWarning",
    "outlined",
    "outlinedInherit",
    "outlinedPrimary",
    "outlinedSecondary",
    "outlinedSuccess",
    "outlinedError",
    "outlinedInfo",
    "outlinedWarning",
    "contained",
    "containedInherit",
    "containedPrimary",
    "containedSecondary",
    "containedSuccess",
    "containedError",
    "containedInfo",
    "containedWarning",
    "disableElevation",
    "focusVisible",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorError",
    "colorInfo",
    "colorWarning",
    "textSizeSmall",
    "textSizeMedium",
    "textSizeLarge",
    "outlinedSizeSmall",
    "outlinedSizeMedium",
    "outlinedSizeLarge",
    "containedSizeSmall",
    "containedSizeMedium",
    "containedSizeLarge",
    "sizeMedium",
    "sizeSmall",
    "sizeLarge",
    "fullWidth",
    "startIcon",
    "endIcon",
    "icon",
    "iconSizeSmall",
    "iconSizeMedium",
    "iconSizeLarge",
  ]),
  BT = C.createContext({}),
  jT = C.createContext(void 0),
  WT = (e) => {
    const {
        color: t,
        disableElevation: n,
        fullWidth: r,
        size: i,
        variant: o,
        classes: s,
      } = e,
      a = {
        root: [
          "root",
          o,
          `${o}${V(t)}`,
          `size${V(i)}`,
          `${o}Size${V(i)}`,
          `color${V(t)}`,
          n && "disableElevation",
          r && "fullWidth",
        ],
        label: ["label"],
        startIcon: ["icon", "startIcon", `iconSize${V(i)}`],
        endIcon: ["icon", "endIcon", `iconSize${V(i)}`],
      },
      l = oe(a, NT, s);
    return { ...s, ...l };
  },
  tb = [
    {
      props: { size: "small" },
      style: { "& > *:nth-of-type(1)": { fontSize: 18 } },
    },
    {
      props: { size: "medium" },
      style: { "& > *:nth-of-type(1)": { fontSize: 20 } },
    },
    {
      props: { size: "large" },
      style: { "& > *:nth-of-type(1)": { fontSize: 22 } },
    },
  ],
  HT = j(_h, {
    shouldForwardProp: (e) => Vt(e) || e === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${V(n.color)}`],
        t[`size${V(n.size)}`],
        t[`${n.variant}Size${V(n.size)}`],
        n.color === "inherit" && t.colorInherit,
        n.disableElevation && t.disableElevation,
        n.fullWidth && t.fullWidth,
      ];
    },
  })(
    me(({ theme: e }) => {
      var r, i;
      const t =
          e.palette.mode === "light"
            ? e.palette.grey[300]
            : e.palette.grey[800],
        n =
          e.palette.mode === "light"
            ? e.palette.grey.A100
            : e.palette.grey[700];
      return {
        ...e.typography.button,
        minWidth: 64,
        padding: "6px 16px",
        border: 0,
        borderRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create(
          ["background-color", "box-shadow", "border-color", "color"],
          { duration: e.transitions.duration.short }
        ),
        "&:hover": { textDecoration: "none" },
        [`&.${Li.disabled}`]: { color: (e.vars || e).palette.action.disabled },
        variants: [
          {
            props: { variant: "contained" },
            style: {
              color: "var(--variant-containedColor)",
              backgroundColor: "var(--variant-containedBg)",
              boxShadow: (e.vars || e).shadows[2],
              "&:hover": {
                boxShadow: (e.vars || e).shadows[4],
                "@media (hover: none)": { boxShadow: (e.vars || e).shadows[2] },
              },
              "&:active": { boxShadow: (e.vars || e).shadows[8] },
              [`&.${Li.focusVisible}`]: { boxShadow: (e.vars || e).shadows[6] },
              [`&.${Li.disabled}`]: {
                color: (e.vars || e).palette.action.disabled,
                boxShadow: (e.vars || e).shadows[0],
                backgroundColor: (e.vars || e).palette.action
                  .disabledBackground,
              },
            },
          },
          {
            props: { variant: "outlined" },
            style: {
              padding: "5px 15px",
              border: "1px solid currentColor",
              borderColor: "var(--variant-outlinedBorder, currentColor)",
              backgroundColor: "var(--variant-outlinedBg)",
              color: "var(--variant-outlinedColor)",
              [`&.${Li.disabled}`]: {
                border: `1px solid ${
                  (e.vars || e).palette.action.disabledBackground
                }`,
              },
            },
          },
          {
            props: { variant: "text" },
            style: {
              padding: "6px 8px",
              color: "var(--variant-textColor)",
              backgroundColor: "var(--variant-textBg)",
            },
          },
          ...Object.entries(e.palette)
            .filter(([, o]) => o && o.main && o.dark && o.contrastText)
            .map(([o]) => ({
              props: { color: o },
              style: {
                "--variant-textColor": (e.vars || e).palette[o].main,
                "--variant-outlinedColor": (e.vars || e).palette[o].main,
                "--variant-outlinedBorder": e.vars
                  ? `rgba(${e.vars.palette[o].mainChannel} / 0.5)`
                  : bt(e.palette[o].main, 0.5),
                "--variant-containedColor": (e.vars || e).palette[o]
                  .contrastText,
                "--variant-containedBg": (e.vars || e).palette[o].main,
                "@media (hover: hover)": {
                  "&:hover": {
                    "--variant-containedBg": (e.vars || e).palette[o].dark,
                    "--variant-textBg": e.vars
                      ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                      : bt(e.palette[o].main, e.palette.action.hoverOpacity),
                    "--variant-outlinedBorder": (e.vars || e).palette[o].main,
                    "--variant-outlinedBg": e.vars
                      ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                      : bt(e.palette[o].main, e.palette.action.hoverOpacity),
                  },
                },
              },
            })),
          {
            props: { color: "inherit" },
            style: {
              "--variant-containedColor": e.vars
                ? e.vars.palette.text.primary
                : (i = (r = e.palette).getContrastText) == null
                ? void 0
                : i.call(r, t),
              "--variant-containedBg": e.vars
                ? e.vars.palette.Button.inheritContainedBg
                : t,
              "@media (hover: hover)": {
                "&:hover": {
                  "--variant-containedBg": e.vars
                    ? e.vars.palette.Button.inheritContainedHoverBg
                    : n,
                  "--variant-textBg": e.vars
                    ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : bt(e.palette.text.primary, e.palette.action.hoverOpacity),
                  "--variant-outlinedBg": e.vars
                    ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : bt(e.palette.text.primary, e.palette.action.hoverOpacity),
                },
              },
            },
          },
          {
            props: { size: "small", variant: "text" },
            style: { padding: "4px 5px", fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: "large", variant: "text" },
            style: { padding: "8px 11px", fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { size: "small", variant: "outlined" },
            style: { padding: "3px 9px", fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: "large", variant: "outlined" },
            style: { padding: "7px 21px", fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { size: "small", variant: "contained" },
            style: { padding: "4px 10px", fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: "large", variant: "contained" },
            style: { padding: "8px 22px", fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { disableElevation: !0 },
            style: {
              boxShadow: "none",
              "&:hover": { boxShadow: "none" },
              [`&.${Li.focusVisible}`]: { boxShadow: "none" },
              "&:active": { boxShadow: "none" },
              [`&.${Li.disabled}`]: { boxShadow: "none" },
            },
          },
          { props: { fullWidth: !0 }, style: { width: "100%" } },
        ],
      };
    })
  ),
  UT = j("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.startIcon, t[`iconSize${V(n.size)}`]];
    },
  })({
    display: "inherit",
    marginRight: 8,
    marginLeft: -4,
    variants: [{ props: { size: "small" }, style: { marginLeft: -2 } }, ...tb],
  }),
  VT = j("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.endIcon, t[`iconSize${V(n.size)}`]];
    },
  })({
    display: "inherit",
    marginRight: -4,
    marginLeft: 8,
    variants: [{ props: { size: "small" }, style: { marginRight: -2 } }, ...tb],
  }),
  Yn = C.forwardRef(function (t, n) {
    const r = C.useContext(BT),
      i = C.useContext(jT),
      o = oa(r, t),
      s = pe({ props: o, name: "MuiButton" }),
      {
        children: a,
        color: l = "primary",
        component: c = "button",
        className: u,
        disabled: d = !1,
        disableElevation: f = !1,
        disableFocusRipple: p = !1,
        endIcon: h,
        focusVisibleClassName: y,
        fullWidth: x = !1,
        size: g = "medium",
        startIcon: v,
        type: m,
        variant: S = "text",
        ...w
      } = s,
      _ = {
        ...s,
        color: l,
        component: c,
        disabled: d,
        disableElevation: f,
        disableFocusRipple: p,
        fullWidth: x,
        size: g,
        type: m,
        variant: S,
      },
      k = WT(_),
      M =
        v && P.jsx(UT, { className: k.startIcon, ownerState: _, children: v }),
      b = h && P.jsx(VT, { className: k.endIcon, ownerState: _, children: h }),
      E = i || "";
    return P.jsxs(HT, {
      ownerState: _,
      className: U(r.className, k.root, u, E),
      component: c,
      disabled: d,
      focusRipple: !p,
      focusVisibleClassName: U(k.focusVisible, y),
      ref: n,
      type: m,
      ...w,
      classes: k,
      children: [M, a, b],
    });
  });
var Eh = {},
  GT = Ao;
Object.defineProperty(Eh, "__esModule", { value: !0 });
var nb = (Eh.default = void 0),
  KT = GT(Lo()),
  YT = P;
nb = Eh.default = (0, KT.default)(
  (0, YT.jsx)("path", { d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" }),
  "Home"
);
var Mh = {},
  XT = Ao;
Object.defineProperty(Mh, "__esModule", { value: !0 });
var rb = (Mh.default = void 0),
  QT = XT(Lo()),
  qT = P;
rb = Mh.default = (0, QT.default)(
  (0, qT.jsx)("path", {
    d: "M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4m-4-8c0-.55.45-1 1-1s1 .45 1 1h-1v1h1v2h-1v1h1v2h-2z",
  }),
  "DeviceThermostat"
);
var Th = {},
  JT = Ao;
Object.defineProperty(Th, "__esModule", { value: !0 });
var ib = (Th.default = void 0),
  ZT = JT(Lo()),
  eR = P;
ib = Th.default = (0, ZT.default)(
  (0, eR.jsx)("path", {
    d: "m3.55 18.54 1.41 1.41 1.79-1.8-1.41-1.41zM11 22.45h2V19.5h-2zM4 10.5H1v2h3zm11-4.19V1.5H9v4.81C7.21 7.35 6 9.28 6 11.5c0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.22-1.21-4.15-3-5.19m5 4.19v2h3v-2zm-2.76 7.66 1.79 1.8 1.41-1.41-1.8-1.79z",
  }),
  "WbIncandescent"
);
var Rh = {},
  tR = Ao;
Object.defineProperty(Rh, "__esModule", { value: !0 });
var ob = (Rh.default = void 0),
  nR = tR(Lo()),
  rR = P;
ob = Rh.default = (0, nR.default)(
  (0, rR.jsx)("path", {
    d: "M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96",
  }),
  "WbCloudy"
);
var Oh = {},
  iR = Ao;
Object.defineProperty(Oh, "__esModule", { value: !0 });
var sb = (Oh.default = void 0),
  oR = iR(Lo()),
  sR = P;
sb = Oh.default = (0, oR.default)(
  (0, sR.jsx)("path", {
    d: "M4 5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m4.78 3.58C7.93 8.21 6.99 8 6 8s-1.93.21-2.78.58C2.48 8.9 2 9.62 2 10.43V11h8v-.57c0-.81-.48-1.53-1.22-1.85M18 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m2.78 1.58C19.93 8.21 18.99 8 18 8s-1.93.21-2.78.58C14.48 8.9 14 9.62 14 10.43V11h8v-.57c0-.81-.48-1.53-1.22-1.85M22 17l-4-4v3H6v-3l-4 4 4 4v-3h12v3z",
  }),
  "SocialDistance"
);
const aR = 240;
function ab(e) {
  const { window: t } = e,
    [n, r] = C.useState(!1),
    i = () => {
      r((a) => !a);
    },
    o = P.jsxs(Ts, {
      onClick: i,
      sx: { textAlign: "center" },
      children: [
        P.jsx(Ln, {
          variant: "h5",
          sx: { my: 2 },
          children: "Proyecto fase 2",
        }),
        P.jsx(Bf, {}),
        P.jsxs(q1, {
          children: [
            P.jsx(Jo, {
              disablePadding: !0,
              children: P.jsx(qo, {
                sx: { textAlign: "center" },
                component: fn,
                to: "/",
                children: P.jsx(Zo, { primary: "Home" }),
              }),
            }),
            P.jsx(Jo, {
              disablePadding: !0,
              children: P.jsx(qo, {
                sx: { textAlign: "center" },
                component: fn,
                to: "/temperatura",
                children: P.jsx(Zo, { primary: "Temperatura" }),
              }),
            }),
            P.jsx(Jo, {
              disablePadding: !0,
              children: P.jsx(qo, {
                sx: { textAlign: "center" },
                component: fn,
                to: "/luz",
                children: P.jsx(Zo, { primary: "Luz" }),
              }),
            }),
            P.jsx(Jo, {
              disablePadding: !0,
              children: P.jsx(qo, {
                sx: { textAlign: "center" },
                component: fn,
                to: "/co2",
                children: P.jsx(Zo, { primary: "CO2" }),
              }),
            }),
            P.jsx(Jo, {
              disablePadding: !0,
              children: P.jsx(qo, {
                sx: { textAlign: "center" },
                component: fn,
                to: "/proximidad",
                children: P.jsx(Zo, { primary: "Proximidad" }),
              }),
            }),
          ],
        }),
      ],
    }),
    s = t !== void 0 ? () => t().document.body : void 0;
  return P.jsxs(Ts, {
    sx: { display: "flex", mb: 4 },
    children: [
      P.jsx(U1, {}),
      P.jsx(jE, {
        component: "nav",
        sx: {
          background:
            "linear-gradient(90deg, rgba(28,2,38,1) 11%, rgba(59,19,46,1) 66%)",
          borderRadius: "10px",
        },
        elevation: 0,
        children: P.jsxs(DT, {
          sx: {
            width: "min(70rem, 100% - 2rem)",
            margin: "10px auto",
            backgroundColor: "#e4e4e4",
            borderRadius: "10px",
          },
          children: [
            P.jsx(sT, {
              color: "inherit",
              "aria-label": "open drawer",
              edge: "start",
              onClick: i,
              sx: { mr: 2, display: { sm: "none", color: "#202020" } },
              children: P.jsx(eb, {}),
            }),
            P.jsxs(
              Yn,
              {
                sx: {
                  color: "#202020",
                  alignItems: "center",
                  gap: 1,
                  display: {
                    xs: "none",
                    sm: "flex",
                    fontFamily: "monospace",
                    fontSize: "1rem",
                  },
                },
                component: fn,
                to: "/",
                children: [P.jsx(nb, {}), "Home"],
              },
              "Home"
            ),
            P.jsx(Ln, {
              variant: "h6",
              component: "div",
              sx: {
                flexGrow: 1,
                display: {
                  xs: "none",
                  sm: "block",
                  color: "#202020",
                  fontWeight: "bold",
                  fontFamily: "monospace",
                  fontSize: "1rem",
                },
              },
              children: "Proyecto Fase 2",
            }),
            P.jsxs(Ts, {
              sx: { display: { xs: "none", sm: "block" } },
              children: [
                P.jsxs(
                  Yn,
                  {
                    sx: {
                      color: "#202020",
                      gap: 1,
                      height: "100%",
                      fontFamily: "monospace",
                      fontSize: "1rem",
                    },
                    component: fn,
                    to: "/temperatura",
                    children: [P.jsx(rb, {}), "Temperatura"],
                  },
                  "temperatura"
                ),
                P.jsxs(
                  Yn,
                  {
                    sx: {
                      color: "#202020",
                      gap: 1,
                      height: "100%",
                      fontFamily: "monospace",
                      fontSize: "1rem",
                    },
                    component: fn,
                    to: "/luz",
                    children: [P.jsx(ib, {}), "Luz"],
                  },
                  "luz"
                ),
                P.jsxs(
                  Yn,
                  {
                    sx: {
                      color: "#202020",
                      gap: 1,
                      height: "100%",
                      fontFamily: "monospace",
                      fontSize: "1rem",
                    },
                    component: fn,
                    to: "/co2",
                    children: [P.jsx(ob, {}), "CO2"],
                  },
                  "co2"
                ),
                P.jsxs(
                  Yn,
                  {
                    sx: {
                      color: "#202020",
                      gap: 1,
                      height: "100%",
                      fontFamily: "monospace",
                      fontSize: "1rem",
                    },
                    component: fn,
                    to: "/proximidad",
                    children: [P.jsx(sb, {}), "Proximidad"],
                  },
                  "proximidad"
                ),
              ],
            }),
          ],
        }),
      }),
      P.jsx("nav", {
        children: P.jsx(jM, {
          container: s,
          variant: "temporary",
          open: n,
          onClose: i,
          ModalProps: { keepMounted: !0 },
          sx: {
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: aR },
          },
          children: o,
        }),
      }),
    ],
  });
}
ab.propTypes = { window: Lk.func };
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */ function _a(e) {
  return (e + 0.5) | 0;
}
const vr = (e, t, n) => Math.max(Math.min(e, n), t);
function gs(e) {
  return vr(_a(e * 2.55), 0, 255);
}
function Ir(e) {
  return vr(_a(e * 255), 0, 255);
}
function Kn(e) {
  return vr(_a(e / 2.55) / 100, 0, 1);
}
function Zm(e) {
  return vr(_a(e * 100), 0, 100);
}
const Yt = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  Uf = [..."0123456789ABCDEF"],
  lR = (e) => Uf[e & 15],
  cR = (e) => Uf[(e & 240) >> 4] + Uf[e & 15],
  Ja = (e) => (e & 240) >> 4 === (e & 15),
  uR = (e) => Ja(e.r) && Ja(e.g) && Ja(e.b) && Ja(e.a);
function dR(e) {
  var t = e.length,
    n;
  return (
    e[0] === "#" &&
      (t === 4 || t === 5
        ? (n = {
            r: 255 & (Yt[e[1]] * 17),
            g: 255 & (Yt[e[2]] * 17),
            b: 255 & (Yt[e[3]] * 17),
            a: t === 5 ? Yt[e[4]] * 17 : 255,
          })
        : (t === 7 || t === 9) &&
          (n = {
            r: (Yt[e[1]] << 4) | Yt[e[2]],
            g: (Yt[e[3]] << 4) | Yt[e[4]],
            b: (Yt[e[5]] << 4) | Yt[e[6]],
            a: t === 9 ? (Yt[e[7]] << 4) | Yt[e[8]] : 255,
          })),
    n
  );
}
const fR = (e, t) => (e < 255 ? t(e) : "");
function pR(e) {
  var t = uR(e) ? lR : cR;
  return e ? "#" + t(e.r) + t(e.g) + t(e.b) + fR(e.a, t) : void 0;
}
const hR =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function lb(e, t, n) {
  const r = t * Math.min(n, 1 - n),
    i = (o, s = (o + e / 30) % 12) =>
      n - r * Math.max(Math.min(s - 3, 9 - s, 1), -1);
  return [i(0), i(8), i(4)];
}
function gR(e, t, n) {
  const r = (i, o = (i + e / 60) % 6) =>
    n - n * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [r(5), r(3), r(1)];
}
function mR(e, t, n) {
  const r = lb(e, 1, 0.5);
  let i;
  for (t + n > 1 && ((i = 1 / (t + n)), (t *= i), (n *= i)), i = 0; i < 3; i++)
    (r[i] *= 1 - t - n), (r[i] += t);
  return r;
}
function yR(e, t, n, r, i) {
  return e === i
    ? (t - n) / r + (t < n ? 6 : 0)
    : t === i
    ? (n - e) / r + 2
    : (e - t) / r + 4;
}
function Ih(e) {
  const n = e.r / 255,
    r = e.g / 255,
    i = e.b / 255,
    o = Math.max(n, r, i),
    s = Math.min(n, r, i),
    a = (o + s) / 2;
  let l, c, u;
  return (
    o !== s &&
      ((u = o - s),
      (c = a > 0.5 ? u / (2 - o - s) : u / (o + s)),
      (l = yR(n, r, i, u, o)),
      (l = l * 60 + 0.5)),
    [l | 0, c || 0, a]
  );
}
function Ah(e, t, n, r) {
  return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, r)).map(Ir);
}
function Lh(e, t, n) {
  return Ah(lb, e, t, n);
}
function vR(e, t, n) {
  return Ah(mR, e, t, n);
}
function xR(e, t, n) {
  return Ah(gR, e, t, n);
}
function cb(e) {
  return ((e % 360) + 360) % 360;
}
function bR(e) {
  const t = hR.exec(e);
  let n = 255,
    r;
  if (!t) return;
  t[5] !== r && (n = t[6] ? gs(+t[5]) : Ir(+t[5]));
  const i = cb(+t[2]),
    o = +t[3] / 100,
    s = +t[4] / 100;
  return (
    t[1] === "hwb"
      ? (r = vR(i, o, s))
      : t[1] === "hsv"
      ? (r = xR(i, o, s))
      : (r = Lh(i, o, s)),
    { r: r[0], g: r[1], b: r[2], a: n }
  );
}
function SR(e, t) {
  var n = Ih(e);
  (n[0] = cb(n[0] + t)), (n = Lh(n)), (e.r = n[0]), (e.g = n[1]), (e.b = n[2]);
}
function CR(e) {
  if (!e) return;
  const t = Ih(e),
    n = t[0],
    r = Zm(t[1]),
    i = Zm(t[2]);
  return e.a < 255
    ? `hsla(${n}, ${r}%, ${i}%, ${Kn(e.a)})`
    : `hsl(${n}, ${r}%, ${i}%)`;
}
const e0 = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh",
  },
  t0 = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32",
  };
function wR() {
  const e = {},
    t = Object.keys(t0),
    n = Object.keys(e0);
  let r, i, o, s, a;
  for (r = 0; r < t.length; r++) {
    for (s = a = t[r], i = 0; i < n.length; i++)
      (o = n[i]), (a = a.replace(o, e0[o]));
    (o = parseInt(t0[s], 16)),
      (e[a] = [(o >> 16) & 255, (o >> 8) & 255, o & 255]);
  }
  return e;
}
let Za;
function kR(e) {
  Za || ((Za = wR()), (Za.transparent = [0, 0, 0, 0]));
  const t = Za[e.toLowerCase()];
  return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 };
}
const _R =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function PR(e) {
  const t = _R.exec(e);
  let n = 255,
    r,
    i,
    o;
  if (t) {
    if (t[7] !== r) {
      const s = +t[7];
      n = t[8] ? gs(s) : vr(s * 255, 0, 255);
    }
    return (
      (r = +t[1]),
      (i = +t[3]),
      (o = +t[5]),
      (r = 255 & (t[2] ? gs(r) : vr(r, 0, 255))),
      (i = 255 & (t[4] ? gs(i) : vr(i, 0, 255))),
      (o = 255 & (t[6] ? gs(o) : vr(o, 0, 255))),
      { r, g: i, b: o, a: n }
    );
  }
}
function ER(e) {
  return (
    e &&
    (e.a < 255
      ? `rgba(${e.r}, ${e.g}, ${e.b}, ${Kn(e.a)})`
      : `rgb(${e.r}, ${e.g}, ${e.b})`)
  );
}
const kd = (e) =>
    e <= 0.0031308 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055,
  $i = (e) => (e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4));
function MR(e, t, n) {
  const r = $i(Kn(e.r)),
    i = $i(Kn(e.g)),
    o = $i(Kn(e.b));
  return {
    r: Ir(kd(r + n * ($i(Kn(t.r)) - r))),
    g: Ir(kd(i + n * ($i(Kn(t.g)) - i))),
    b: Ir(kd(o + n * ($i(Kn(t.b)) - o))),
    a: e.a + n * (t.a - e.a),
  };
}
function el(e, t, n) {
  if (e) {
    let r = Ih(e);
    (r[t] = Math.max(0, Math.min(r[t] + r[t] * n, t === 0 ? 360 : 1))),
      (r = Lh(r)),
      (e.r = r[0]),
      (e.g = r[1]),
      (e.b = r[2]);
  }
}
function ub(e, t) {
  return e && Object.assign(t || {}, e);
}
function n0(e) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(e)
      ? e.length >= 3 &&
        ((t = { r: e[0], g: e[1], b: e[2], a: 255 }),
        e.length > 3 && (t.a = Ir(e[3])))
      : ((t = ub(e, { r: 0, g: 0, b: 0, a: 1 })), (t.a = Ir(t.a))),
    t
  );
}
function TR(e) {
  return e.charAt(0) === "r" ? PR(e) : bR(e);
}
class la {
  constructor(t) {
    if (t instanceof la) return t;
    const n = typeof t;
    let r;
    n === "object"
      ? (r = n0(t))
      : n === "string" && (r = dR(t) || kR(t) || TR(t)),
      (this._rgb = r),
      (this._valid = !!r);
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = ub(this._rgb);
    return t && (t.a = Kn(t.a)), t;
  }
  set rgb(t) {
    this._rgb = n0(t);
  }
  rgbString() {
    return this._valid ? ER(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? pR(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? CR(this._rgb) : void 0;
  }
  mix(t, n) {
    if (t) {
      const r = this.rgb,
        i = t.rgb;
      let o;
      const s = n === o ? 0.5 : n,
        a = 2 * s - 1,
        l = r.a - i.a,
        c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      (o = 1 - c),
        (r.r = 255 & (c * r.r + o * i.r + 0.5)),
        (r.g = 255 & (c * r.g + o * i.g + 0.5)),
        (r.b = 255 & (c * r.b + o * i.b + 0.5)),
        (r.a = s * r.a + (1 - s) * i.a),
        (this.rgb = r);
    }
    return this;
  }
  interpolate(t, n) {
    return t && (this._rgb = MR(this._rgb, t._rgb, n)), this;
  }
  clone() {
    return new la(this.rgb);
  }
  alpha(t) {
    return (this._rgb.a = Ir(t)), this;
  }
  clearer(t) {
    const n = this._rgb;
    return (n.a *= 1 - t), this;
  }
  greyscale() {
    const t = this._rgb,
      n = _a(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return (t.r = t.g = t.b = n), this;
  }
  opaquer(t) {
    const n = this._rgb;
    return (n.a *= 1 + t), this;
  }
  negate() {
    const t = this._rgb;
    return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
  }
  lighten(t) {
    return el(this._rgb, 2, t), this;
  }
  darken(t) {
    return el(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return el(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return el(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return SR(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.4.4
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ function Wn() {}
const RR = (() => {
  let e = 0;
  return () => e++;
})();
function Ee(e) {
  return e === null || typeof e > "u";
}
function De(e) {
  if (Array.isArray && Array.isArray(e)) return !0;
  const t = Object.prototype.toString.call(e);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function de(e) {
  return e !== null && Object.prototype.toString.call(e) === "[object Object]";
}
function Ze(e) {
  return (typeof e == "number" || e instanceof Number) && isFinite(+e);
}
function Lt(e, t) {
  return Ze(e) ? e : t;
}
function ee(e, t) {
  return typeof e > "u" ? t : e;
}
const OR = (e, t) =>
  typeof e == "string" && e.endsWith("%") ? (parseFloat(e) / 100) * t : +e;
function Ce(e, t, n) {
  if (e && typeof e.call == "function") return e.apply(n, t);
}
function he(e, t, n, r) {
  let i, o, s;
  if (De(e)) for (o = e.length, i = 0; i < o; i++) t.call(n, e[i], i);
  else if (de(e))
    for (s = Object.keys(e), o = s.length, i = 0; i < o; i++)
      t.call(n, e[s[i]], s[i]);
}
function hc(e, t) {
  let n, r, i, o;
  if (!e || !t || e.length !== t.length) return !1;
  for (n = 0, r = e.length; n < r; ++n)
    if (
      ((i = e[n]),
      (o = t[n]),
      i.datasetIndex !== o.datasetIndex || i.index !== o.index)
    )
      return !1;
  return !0;
}
function gc(e) {
  if (De(e)) return e.map(gc);
  if (de(e)) {
    const t = Object.create(null),
      n = Object.keys(e),
      r = n.length;
    let i = 0;
    for (; i < r; ++i) t[n[i]] = gc(e[n[i]]);
    return t;
  }
  return e;
}
function db(e) {
  return ["__proto__", "prototype", "constructor"].indexOf(e) === -1;
}
function IR(e, t, n, r) {
  if (!db(e)) return;
  const i = t[e],
    o = n[e];
  de(i) && de(o) ? ca(i, o, r) : (t[e] = gc(o));
}
function ca(e, t, n) {
  const r = De(t) ? t : [t],
    i = r.length;
  if (!de(e)) return e;
  n = n || {};
  const o = n.merger || IR;
  let s;
  for (let a = 0; a < i; ++a) {
    if (((s = r[a]), !de(s))) continue;
    const l = Object.keys(s);
    for (let c = 0, u = l.length; c < u; ++c) o(l[c], e, s, n);
  }
  return e;
}
function Os(e, t) {
  return ca(e, t, { merger: AR });
}
function AR(e, t, n) {
  if (!db(e)) return;
  const r = t[e],
    i = n[e];
  de(r) && de(i)
    ? Os(r, i)
    : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = gc(i));
}
const r0 = { "": (e) => e, x: (e) => e.x, y: (e) => e.y };
function LR(e) {
  const t = e.split("."),
    n = [];
  let r = "";
  for (const i of t)
    (r += i),
      r.endsWith("\\") ? (r = r.slice(0, -1) + ".") : (n.push(r), (r = ""));
  return n;
}
function $R(e) {
  const t = LR(e);
  return (n) => {
    for (const r of t) {
      if (r === "") break;
      n = n && n[r];
    }
    return n;
  };
}
function mc(e, t) {
  return (r0[t] || (r0[t] = $R(t)))(e);
}
function $h(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const yc = (e) => typeof e < "u",
  Fr = (e) => typeof e == "function",
  i0 = (e, t) => {
    if (e.size !== t.size) return !1;
    for (const n of e) if (!t.has(n)) return !1;
    return !0;
  };
function FR(e) {
  return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
const Ke = Math.PI,
  on = 2 * Ke,
  zR = on + Ke,
  vc = Number.POSITIVE_INFINITY,
  DR = Ke / 180,
  Dt = Ke / 2,
  Hr = Ke / 4,
  o0 = (Ke * 2) / 3,
  xr = Math.log10,
  vo = Math.sign;
function Is(e, t, n) {
  return Math.abs(e - t) < n;
}
function s0(e) {
  const t = Math.round(e);
  e = Is(e, t, e / 1e3) ? t : e;
  const n = Math.pow(10, Math.floor(xr(e))),
    r = e / n;
  return (r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * n;
}
function NR(e) {
  const t = [],
    n = Math.sqrt(e);
  let r;
  for (r = 1; r < n; r++) e % r === 0 && (t.push(r), t.push(e / r));
  return n === (n | 0) && t.push(n), t.sort((i, o) => i - o).pop(), t;
}
function ua(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function BR(e, t) {
  const n = Math.round(e);
  return n - t <= e && n + t >= e;
}
function fb(e, t, n) {
  let r, i, o;
  for (r = 0, i = e.length; r < i; r++)
    (o = e[r][n]),
      isNaN(o) || ((t.min = Math.min(t.min, o)), (t.max = Math.max(t.max, o)));
}
function br(e) {
  return e * (Ke / 180);
}
function Fh(e) {
  return e * (180 / Ke);
}
function a0(e) {
  if (!Ze(e)) return;
  let t = 1,
    n = 0;
  for (; Math.round(e * t) / t !== e; ) (t *= 10), n++;
  return n;
}
function jR(e, t) {
  const n = t.x - e.x,
    r = t.y - e.y,
    i = Math.sqrt(n * n + r * r);
  let o = Math.atan2(r, n);
  return o < -0.5 * Ke && (o += on), { angle: o, distance: i };
}
function Vf(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function WR(e, t) {
  return ((e - t + zR) % on) - Ke;
}
function gn(e) {
  return ((e % on) + on) % on;
}
function pb(e, t, n, r) {
  const i = gn(e),
    o = gn(t),
    s = gn(n),
    a = gn(o - i),
    l = gn(s - i),
    c = gn(i - o),
    u = gn(i - s);
  return i === o || i === s || (r && o === s) || (a > l && c < u);
}
function tn(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function HR(e) {
  return tn(e, -32768, 32767);
}
function ms(e, t, n, r = 1e-6) {
  return e >= Math.min(t, n) - r && e <= Math.max(t, n) + r;
}
function zh(e, t, n) {
  n = n || ((s) => e[s] < t);
  let r = e.length - 1,
    i = 0,
    o;
  for (; r - i > 1; ) (o = (i + r) >> 1), n(o) ? (i = o) : (r = o);
  return { lo: i, hi: r };
}
const si = (e, t, n, r) =>
    zh(
      e,
      n,
      r
        ? (i) => {
            const o = e[i][t];
            return o < n || (o === n && e[i + 1][t] === n);
          }
        : (i) => e[i][t] < n
    ),
  UR = (e, t, n) => zh(e, n, (r) => e[r][t] >= n);
function VR(e, t, n) {
  let r = 0,
    i = e.length;
  for (; r < i && e[r] < t; ) r++;
  for (; i > r && e[i - 1] > n; ) i--;
  return r > 0 || i < e.length ? e.slice(r, i) : e;
}
const hb = ["push", "pop", "shift", "splice", "unshift"];
function GR(e, t) {
  if (e._chartjs) {
    e._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(e, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [t] },
  }),
    hb.forEach((n) => {
      const r = "_onData" + $h(n),
        i = e[n];
      Object.defineProperty(e, n, {
        configurable: !0,
        enumerable: !1,
        value(...o) {
          const s = i.apply(this, o);
          return (
            e._chartjs.listeners.forEach((a) => {
              typeof a[r] == "function" && a[r](...o);
            }),
            s
          );
        },
      });
    });
}
function l0(e, t) {
  const n = e._chartjs;
  if (!n) return;
  const r = n.listeners,
    i = r.indexOf(t);
  i !== -1 && r.splice(i, 1),
    !(r.length > 0) &&
      (hb.forEach((o) => {
        delete e[o];
      }),
      delete e._chartjs);
}
function KR(e) {
  const t = new Set(e);
  return t.size === e.length ? e : Array.from(t);
}
const gb = (function () {
  return typeof window > "u"
    ? function (e) {
        return e();
      }
    : window.requestAnimationFrame;
})();
function mb(e, t) {
  let n = [],
    r = !1;
  return function (...i) {
    (n = i),
      r ||
        ((r = !0),
        gb.call(window, () => {
          (r = !1), e.apply(t, n);
        }));
  };
}
function YR(e, t) {
  let n;
  return function (...r) {
    return (
      t ? (clearTimeout(n), (n = setTimeout(e, t, r))) : e.apply(this, r), t
    );
  };
}
const Dh = (e) => (e === "start" ? "left" : e === "end" ? "right" : "center"),
  gt = (e, t, n) => (e === "start" ? t : e === "end" ? n : (t + n) / 2),
  XR = (e, t, n, r) =>
    e === (r ? "left" : "right") ? n : e === "center" ? (t + n) / 2 : t;
function QR(e, t, n) {
  const r = t.length;
  let i = 0,
    o = r;
  if (e._sorted) {
    const { iScale: s, _parsed: a } = e,
      l = s.axis,
      { min: c, max: u, minDefined: d, maxDefined: f } = s.getUserBounds();
    d &&
      (i = tn(
        Math.min(si(a, l, c).lo, n ? r : si(t, l, s.getPixelForValue(c)).lo),
        0,
        r - 1
      )),
      f
        ? (o =
            tn(
              Math.max(
                si(a, s.axis, u, !0).hi + 1,
                n ? 0 : si(t, l, s.getPixelForValue(u), !0).hi + 1
              ),
              i,
              r
            ) - i)
        : (o = r - i);
  }
  return { start: i, count: o };
}
function qR(e) {
  const { xScale: t, yScale: n, _scaleRanges: r } = e,
    i = { xmin: t.min, xmax: t.max, ymin: n.min, ymax: n.max };
  if (!r) return (e._scaleRanges = i), !0;
  const o =
    r.xmin !== t.min ||
    r.xmax !== t.max ||
    r.ymin !== n.min ||
    r.ymax !== n.max;
  return Object.assign(r, i), o;
}
const tl = (e) => e === 0 || e === 1,
  c0 = (e, t, n) =>
    -(Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * on) / n)),
  u0 = (e, t, n) => Math.pow(2, -10 * e) * Math.sin(((e - t) * on) / n) + 1,
  As = {
    linear: (e) => e,
    easeInQuad: (e) => e * e,
    easeOutQuad: (e) => -e * (e - 2),
    easeInOutQuad: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1),
    easeInCubic: (e) => e * e * e,
    easeOutCubic: (e) => (e -= 1) * e * e + 1,
    easeInOutCubic: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2),
    easeInQuart: (e) => e * e * e * e,
    easeOutQuart: (e) => -((e -= 1) * e * e * e - 1),
    easeInOutQuart: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2),
    easeInQuint: (e) => e * e * e * e * e,
    easeOutQuint: (e) => (e -= 1) * e * e * e * e + 1,
    easeInOutQuint: (e) =>
      (e /= 0.5) < 1
        ? 0.5 * e * e * e * e * e
        : 0.5 * ((e -= 2) * e * e * e * e + 2),
    easeInSine: (e) => -Math.cos(e * Dt) + 1,
    easeOutSine: (e) => Math.sin(e * Dt),
    easeInOutSine: (e) => -0.5 * (Math.cos(Ke * e) - 1),
    easeInExpo: (e) => (e === 0 ? 0 : Math.pow(2, 10 * (e - 1))),
    easeOutExpo: (e) => (e === 1 ? 1 : -Math.pow(2, -10 * e) + 1),
    easeInOutExpo: (e) =>
      tl(e)
        ? e
        : e < 0.5
        ? 0.5 * Math.pow(2, 10 * (e * 2 - 1))
        : 0.5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
    easeInCirc: (e) => (e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)),
    easeOutCirc: (e) => Math.sqrt(1 - (e -= 1) * e),
    easeInOutCirc: (e) =>
      (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
    easeInElastic: (e) => (tl(e) ? e : c0(e, 0.075, 0.3)),
    easeOutElastic: (e) => (tl(e) ? e : u0(e, 0.075, 0.3)),
    easeInOutElastic(e) {
      return tl(e)
        ? e
        : e < 0.5
        ? 0.5 * c0(e * 2, 0.1125, 0.45)
        : 0.5 + 0.5 * u0(e * 2 - 1, 0.1125, 0.45);
    },
    easeInBack(e) {
      return e * e * ((1.70158 + 1) * e - 1.70158);
    },
    easeOutBack(e) {
      return (e -= 1) * e * ((1.70158 + 1) * e + 1.70158) + 1;
    },
    easeInOutBack(e) {
      let t = 1.70158;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    },
    easeInBounce: (e) => 1 - As.easeOutBounce(1 - e),
    easeOutBounce(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    },
    easeInOutBounce: (e) =>
      e < 0.5
        ? As.easeInBounce(e * 2) * 0.5
        : As.easeOutBounce(e * 2 - 1) * 0.5 + 0.5,
  };
function Nh(e) {
  if (e && typeof e == "object") {
    const t = e.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function d0(e) {
  return Nh(e) ? e : new la(e);
}
function _d(e) {
  return Nh(e) ? e : new la(e).saturate(0.5).darken(0.1).hexString();
}
const JR = ["x", "y", "borderWidth", "radius", "tension"],
  ZR = ["color", "borderColor", "backgroundColor"];
function eO(e) {
  e.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  }),
    e.describe("animation", {
      _fallback: !1,
      _indexable: !1,
      _scriptable: (t) =>
        t !== "onProgress" && t !== "onComplete" && t !== "fn",
    }),
    e.set("animations", {
      colors: { type: "color", properties: ZR },
      numbers: { type: "number", properties: JR },
    }),
    e.describe("animations", { _fallback: "animation" }),
    e.set("transitions", {
      active: { animation: { duration: 400 } },
      resize: { animation: { duration: 0 } },
      show: {
        animations: {
          colors: { from: "transparent" },
          visible: { type: "boolean", duration: 0 },
        },
      },
      hide: {
        animations: {
          colors: { to: "transparent" },
          visible: { type: "boolean", easing: "linear", fn: (t) => t | 0 },
        },
      },
    });
}
function tO(e) {
  e.set("layout", {
    autoPadding: !0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  });
}
const f0 = new Map();
function nO(e, t) {
  t = t || {};
  const n = e + JSON.stringify(t);
  let r = f0.get(n);
  return r || ((r = new Intl.NumberFormat(e, t)), f0.set(n, r)), r;
}
function Bh(e, t, n) {
  return nO(t, n).format(e);
}
const yb = {
  values(e) {
    return De(e) ? e : "" + e;
  },
  numeric(e, t, n) {
    if (e === 0) return "0";
    const r = this.chart.options.locale;
    let i,
      o = e;
    if (n.length > 1) {
      const c = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
      (c < 1e-4 || c > 1e15) && (i = "scientific"), (o = rO(e, n));
    }
    const s = xr(Math.abs(o)),
      a = isNaN(s) ? 1 : Math.max(Math.min(-1 * Math.floor(s), 20), 0),
      l = { notation: i, minimumFractionDigits: a, maximumFractionDigits: a };
    return Object.assign(l, this.options.ticks.format), Bh(e, r, l);
  },
  logarithmic(e, t, n) {
    if (e === 0) return "0";
    const r = n[t].significand || e / Math.pow(10, Math.floor(xr(e)));
    return [1, 2, 3, 5, 10, 15].includes(r) || t > 0.8 * n.length
      ? yb.numeric.call(this, e, t, n)
      : "";
  },
};
function rO(e, t) {
  let n = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(n) >= 1 && e !== Math.floor(e) && (n = e - Math.floor(e)), n;
}
var Su = { formatters: yb };
function iO(e) {
  e.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, n) => n.lineWidth,
      tickColor: (t, n) => n.color,
      offset: !1,
    },
    border: { display: !0, dash: [], dashOffset: 0, width: 1 },
    title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Su.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2,
    },
  }),
    e.route("scale.ticks", "color", "", "color"),
    e.route("scale.grid", "color", "", "borderColor"),
    e.route("scale.border", "color", "", "borderColor"),
    e.route("scale.title", "color", "", "color"),
    e.describe("scale", {
      _fallback: !1,
      _scriptable: (t) =>
        !t.startsWith("before") &&
        !t.startsWith("after") &&
        t !== "callback" &&
        t !== "parser",
      _indexable: (t) =>
        t !== "borderDash" && t !== "tickBorderDash" && t !== "dash",
    }),
    e.describe("scales", { _fallback: "scale" }),
    e.describe("scale.ticks", {
      _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
      _indexable: (t) => t !== "backdropPadding",
    });
}
const yi = Object.create(null),
  Gf = Object.create(null);
function Ls(e, t) {
  if (!t) return e;
  const n = t.split(".");
  for (let r = 0, i = n.length; r < i; ++r) {
    const o = n[r];
    e = e[o] || (e[o] = Object.create(null));
  }
  return e;
}
function Pd(e, t, n) {
  return typeof t == "string" ? ca(Ls(e, t), n) : ca(Ls(e, ""), t);
}
class oO {
  constructor(t, n) {
    (this.animation = void 0),
      (this.backgroundColor = "rgba(0,0,0,0.1)"),
      (this.borderColor = "rgba(0,0,0,0.1)"),
      (this.color = "#666"),
      (this.datasets = {}),
      (this.devicePixelRatio = (r) => r.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        "mousemove",
        "mouseout",
        "click",
        "touchstart",
        "touchmove",
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (r, i) => _d(i.backgroundColor)),
      (this.hoverBorderColor = (r, i) => _d(i.borderColor)),
      (this.hoverColor = (r, i) => _d(i.color)),
      (this.indexAxis = "x"),
      (this.interaction = {
        mode: "nearest",
        intersect: !0,
        includeInvisible: !1,
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(t),
      this.apply(n);
  }
  set(t, n) {
    return Pd(this, t, n);
  }
  get(t) {
    return Ls(this, t);
  }
  describe(t, n) {
    return Pd(Gf, t, n);
  }
  override(t, n) {
    return Pd(yi, t, n);
  }
  route(t, n, r, i) {
    const o = Ls(this, t),
      s = Ls(this, r),
      a = "_" + n;
    Object.defineProperties(o, {
      [a]: { value: o[n], writable: !0 },
      [n]: {
        enumerable: !0,
        get() {
          const l = this[a],
            c = s[i];
          return de(l) ? Object.assign({}, c, l) : ee(l, c);
        },
        set(l) {
          this[a] = l;
        },
      },
    });
  }
  apply(t) {
    t.forEach((n) => n(this));
  }
}
var Ne = new oO(
  {
    _scriptable: (e) => !e.startsWith("on"),
    _indexable: (e) => e !== "events",
    hover: { _fallback: "interaction" },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [eO, tO, iO]
);
function sO(e) {
  return !e || Ee(e.size) || Ee(e.family)
    ? null
    : (e.style ? e.style + " " : "") +
        (e.weight ? e.weight + " " : "") +
        e.size +
        "px " +
        e.family;
}
function xc(e, t, n, r, i) {
  let o = t[i];
  return (
    o || ((o = t[i] = e.measureText(i).width), n.push(i)), o > r && (r = o), r
  );
}
function aO(e, t, n, r) {
  r = r || {};
  let i = (r.data = r.data || {}),
    o = (r.garbageCollect = r.garbageCollect || []);
  r.font !== t &&
    ((i = r.data = {}), (o = r.garbageCollect = []), (r.font = t)),
    e.save(),
    (e.font = t);
  let s = 0;
  const a = n.length;
  let l, c, u, d, f;
  for (l = 0; l < a; l++)
    if (((d = n[l]), d != null && !De(d))) s = xc(e, i, o, s, d);
    else if (De(d))
      for (c = 0, u = d.length; c < u; c++)
        (f = d[c]), f != null && !De(f) && (s = xc(e, i, o, s, f));
  e.restore();
  const p = o.length / 2;
  if (p > n.length) {
    for (l = 0; l < p; l++) delete i[o[l]];
    o.splice(0, p);
  }
  return s;
}
function Ur(e, t, n) {
  const r = e.currentDevicePixelRatio,
    i = n !== 0 ? Math.max(n / 2, 0.5) : 0;
  return Math.round((t - i) * r) / r + i;
}
function p0(e, t) {
  (!t && !e) ||
    ((t = t || e.getContext("2d")),
    t.save(),
    t.resetTransform(),
    t.clearRect(0, 0, e.width, e.height),
    t.restore());
}
function Kf(e, t, n, r) {
  vb(e, t, n, r, null);
}
function vb(e, t, n, r, i) {
  let o, s, a, l, c, u, d, f;
  const p = t.pointStyle,
    h = t.rotation,
    y = t.radius;
  let x = (h || 0) * DR;
  if (
    p &&
    typeof p == "object" &&
    ((o = p.toString()),
    o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")
  ) {
    e.save(),
      e.translate(n, r),
      e.rotate(x),
      e.drawImage(p, -p.width / 2, -p.height / 2, p.width, p.height),
      e.restore();
    return;
  }
  if (!(isNaN(y) || y <= 0)) {
    switch ((e.beginPath(), p)) {
      default:
        i ? e.ellipse(n, r, i / 2, y, 0, 0, on) : e.arc(n, r, y, 0, on),
          e.closePath();
        break;
      case "triangle":
        (u = i ? i / 2 : y),
          e.moveTo(n + Math.sin(x) * u, r - Math.cos(x) * y),
          (x += o0),
          e.lineTo(n + Math.sin(x) * u, r - Math.cos(x) * y),
          (x += o0),
          e.lineTo(n + Math.sin(x) * u, r - Math.cos(x) * y),
          e.closePath();
        break;
      case "rectRounded":
        (c = y * 0.516),
          (l = y - c),
          (s = Math.cos(x + Hr) * l),
          (d = Math.cos(x + Hr) * (i ? i / 2 - c : l)),
          (a = Math.sin(x + Hr) * l),
          (f = Math.sin(x + Hr) * (i ? i / 2 - c : l)),
          e.arc(n - d, r - a, c, x - Ke, x - Dt),
          e.arc(n + f, r - s, c, x - Dt, x),
          e.arc(n + d, r + a, c, x, x + Dt),
          e.arc(n - f, r + s, c, x + Dt, x + Ke),
          e.closePath();
        break;
      case "rect":
        if (!h) {
          (l = Math.SQRT1_2 * y),
            (u = i ? i / 2 : l),
            e.rect(n - u, r - l, 2 * u, 2 * l);
          break;
        }
        x += Hr;
      case "rectRot":
        (d = Math.cos(x) * (i ? i / 2 : y)),
          (s = Math.cos(x) * y),
          (a = Math.sin(x) * y),
          (f = Math.sin(x) * (i ? i / 2 : y)),
          e.moveTo(n - d, r - a),
          e.lineTo(n + f, r - s),
          e.lineTo(n + d, r + a),
          e.lineTo(n - f, r + s),
          e.closePath();
        break;
      case "crossRot":
        x += Hr;
      case "cross":
        (d = Math.cos(x) * (i ? i / 2 : y)),
          (s = Math.cos(x) * y),
          (a = Math.sin(x) * y),
          (f = Math.sin(x) * (i ? i / 2 : y)),
          e.moveTo(n - d, r - a),
          e.lineTo(n + d, r + a),
          e.moveTo(n + f, r - s),
          e.lineTo(n - f, r + s);
        break;
      case "star":
        (d = Math.cos(x) * (i ? i / 2 : y)),
          (s = Math.cos(x) * y),
          (a = Math.sin(x) * y),
          (f = Math.sin(x) * (i ? i / 2 : y)),
          e.moveTo(n - d, r - a),
          e.lineTo(n + d, r + a),
          e.moveTo(n + f, r - s),
          e.lineTo(n - f, r + s),
          (x += Hr),
          (d = Math.cos(x) * (i ? i / 2 : y)),
          (s = Math.cos(x) * y),
          (a = Math.sin(x) * y),
          (f = Math.sin(x) * (i ? i / 2 : y)),
          e.moveTo(n - d, r - a),
          e.lineTo(n + d, r + a),
          e.moveTo(n + f, r - s),
          e.lineTo(n - f, r + s);
        break;
      case "line":
        (s = i ? i / 2 : Math.cos(x) * y),
          (a = Math.sin(x) * y),
          e.moveTo(n - s, r - a),
          e.lineTo(n + s, r + a);
        break;
      case "dash":
        e.moveTo(n, r),
          e.lineTo(n + Math.cos(x) * (i ? i / 2 : y), r + Math.sin(x) * y);
        break;
      case !1:
        e.closePath();
        break;
    }
    e.fill(), t.borderWidth > 0 && e.stroke();
  }
}
function qn(e, t, n) {
  return (
    (n = n || 0.5),
    !t ||
      (e &&
        e.x > t.left - n &&
        e.x < t.right + n &&
        e.y > t.top - n &&
        e.y < t.bottom + n)
  );
}
function jh(e, t) {
  e.save(),
    e.beginPath(),
    e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
    e.clip();
}
function Wh(e) {
  e.restore();
}
function lO(e, t, n, r, i) {
  if (!t) return e.lineTo(n.x, n.y);
  if (i === "middle") {
    const o = (t.x + n.x) / 2;
    e.lineTo(o, t.y), e.lineTo(o, n.y);
  } else (i === "after") != !!r ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
  e.lineTo(n.x, n.y);
}
function cO(e, t, n, r) {
  if (!t) return e.lineTo(n.x, n.y);
  e.bezierCurveTo(
    r ? t.cp1x : t.cp2x,
    r ? t.cp1y : t.cp2y,
    r ? n.cp2x : n.cp1x,
    r ? n.cp2y : n.cp1y,
    n.x,
    n.y
  );
}
function uO(e, t) {
  t.translation && e.translate(t.translation[0], t.translation[1]),
    Ee(t.rotation) || e.rotate(t.rotation),
    t.color && (e.fillStyle = t.color),
    t.textAlign && (e.textAlign = t.textAlign),
    t.textBaseline && (e.textBaseline = t.textBaseline);
}
function dO(e, t, n, r, i) {
  if (i.strikethrough || i.underline) {
    const o = e.measureText(r),
      s = t - o.actualBoundingBoxLeft,
      a = t + o.actualBoundingBoxRight,
      l = n - o.actualBoundingBoxAscent,
      c = n + o.actualBoundingBoxDescent,
      u = i.strikethrough ? (l + c) / 2 : c;
    (e.strokeStyle = e.fillStyle),
      e.beginPath(),
      (e.lineWidth = i.decorationWidth || 2),
      e.moveTo(s, u),
      e.lineTo(a, u),
      e.stroke();
  }
}
function fO(e, t) {
  const n = e.fillStyle;
  (e.fillStyle = t.color),
    e.fillRect(t.left, t.top, t.width, t.height),
    (e.fillStyle = n);
}
function vi(e, t, n, r, i, o = {}) {
  const s = De(t) ? t : [t],
    a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (e.save(), e.font = i.string, uO(e, o), l = 0; l < s.length; ++l)
    (c = s[l]),
      o.backdrop && fO(e, o.backdrop),
      a &&
        (o.strokeColor && (e.strokeStyle = o.strokeColor),
        Ee(o.strokeWidth) || (e.lineWidth = o.strokeWidth),
        e.strokeText(c, n, r, o.maxWidth)),
      e.fillText(c, n, r, o.maxWidth),
      dO(e, n, r, c, o),
      (r += Number(i.lineHeight));
  e.restore();
}
function bc(e, t) {
  const { x: n, y: r, w: i, h: o, radius: s } = t;
  e.arc(n + s.topLeft, r + s.topLeft, s.topLeft, 1.5 * Ke, Ke, !0),
    e.lineTo(n, r + o - s.bottomLeft),
    e.arc(n + s.bottomLeft, r + o - s.bottomLeft, s.bottomLeft, Ke, Dt, !0),
    e.lineTo(n + i - s.bottomRight, r + o),
    e.arc(
      n + i - s.bottomRight,
      r + o - s.bottomRight,
      s.bottomRight,
      Dt,
      0,
      !0
    ),
    e.lineTo(n + i, r + s.topRight),
    e.arc(n + i - s.topRight, r + s.topRight, s.topRight, 0, -Dt, !0),
    e.lineTo(n + s.topLeft, r);
}
const pO = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  hO = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function gO(e, t) {
  const n = ("" + e).match(pO);
  if (!n || n[1] === "normal") return t * 1.2;
  switch (((e = +n[2]), n[3])) {
    case "px":
      return e;
    case "%":
      e /= 100;
      break;
  }
  return t * e;
}
const mO = (e) => +e || 0;
function xb(e, t) {
  const n = {},
    r = de(t),
    i = r ? Object.keys(t) : t,
    o = de(e) ? (r ? (s) => ee(e[s], e[t[s]]) : (s) => e[s]) : () => e;
  for (const s of i) n[s] = mO(o(s));
  return n;
}
function yO(e) {
  return xb(e, { top: "y", right: "x", bottom: "y", left: "x" });
}
function so(e) {
  return xb(e, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function vt(e) {
  const t = yO(e);
  return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t;
}
function qe(e, t) {
  (e = e || {}), (t = t || Ne.font);
  let n = ee(e.size, t.size);
  typeof n == "string" && (n = parseInt(n, 10));
  let r = ee(e.style, t.style);
  r &&
    !("" + r).match(hO) &&
    (console.warn('Invalid font style specified: "' + r + '"'), (r = void 0));
  const i = {
    family: ee(e.family, t.family),
    lineHeight: gO(ee(e.lineHeight, t.lineHeight), n),
    size: n,
    style: r,
    weight: ee(e.weight, t.weight),
    string: "",
  };
  return (i.string = sO(i)), i;
}
function nl(e, t, n, r) {
  let i, o, s;
  for (i = 0, o = e.length; i < o; ++i)
    if (((s = e[i]), s !== void 0 && s !== void 0)) return s;
}
function vO(e, t, n) {
  const { min: r, max: i } = e,
    o = OR(t, (i - r) / 2),
    s = (a, l) => (n && a === 0 ? 0 : a + l);
  return { min: s(r, -Math.abs(o)), max: s(i, o) };
}
function jr(e, t) {
  return Object.assign(Object.create(e), t);
}
function Hh(e, t = [""], n, r, i = () => e[0]) {
  const o = n || e;
  typeof r > "u" && (r = wb("_fallback", e));
  const s = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: e,
    _rootScopes: o,
    _fallback: r,
    _getTarget: i,
    override: (a) => Hh([a, ...e], t, o, r),
  };
  return new Proxy(s, {
    deleteProperty(a, l) {
      return delete a[l], delete a._keys, delete e[0][l], !0;
    },
    get(a, l) {
      return Sb(a, l, () => PO(l, t, e, a));
    },
    getOwnPropertyDescriptor(a, l) {
      return Reflect.getOwnPropertyDescriptor(a._scopes[0], l);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e[0]);
    },
    has(a, l) {
      return g0(a).includes(l);
    },
    ownKeys(a) {
      return g0(a);
    },
    set(a, l, c) {
      const u = a._storage || (a._storage = i());
      return (a[l] = u[l] = c), delete a._keys, !0;
    },
  });
}
function xo(e, t, n, r) {
  const i = {
    _cacheable: !1,
    _proxy: e,
    _context: t,
    _subProxy: n,
    _stack: new Set(),
    _descriptors: bb(e, r),
    setContext: (o) => xo(e, o, n, r),
    override: (o) => xo(e.override(o), t, n, r),
  };
  return new Proxy(i, {
    deleteProperty(o, s) {
      return delete o[s], delete e[s], !0;
    },
    get(o, s, a) {
      return Sb(o, s, () => bO(o, s, a));
    },
    getOwnPropertyDescriptor(o, s) {
      return o._descriptors.allKeys
        ? Reflect.has(e, s)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(e, s);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e);
    },
    has(o, s) {
      return Reflect.has(e, s);
    },
    ownKeys() {
      return Reflect.ownKeys(e);
    },
    set(o, s, a) {
      return (e[s] = a), delete o[s], !0;
    },
  });
}
function bb(e, t = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: n = t.scriptable,
    _indexable: r = t.indexable,
    _allKeys: i = t.allKeys,
  } = e;
  return {
    allKeys: i,
    scriptable: n,
    indexable: r,
    isScriptable: Fr(n) ? n : () => n,
    isIndexable: Fr(r) ? r : () => r,
  };
}
const xO = (e, t) => (e ? e + $h(t) : t),
  Uh = (e, t) =>
    de(t) &&
    e !== "adapters" &&
    (Object.getPrototypeOf(t) === null || t.constructor === Object);
function Sb(e, t, n) {
  if (Object.prototype.hasOwnProperty.call(e, t) || t === "constructor")
    return e[t];
  const r = n();
  return (e[t] = r), r;
}
function bO(e, t, n) {
  const { _proxy: r, _context: i, _subProxy: o, _descriptors: s } = e;
  let a = r[t];
  return (
    Fr(a) && s.isScriptable(t) && (a = SO(t, a, e, n)),
    De(a) && a.length && (a = CO(t, a, e, s.isIndexable)),
    Uh(t, a) && (a = xo(a, i, o && o[t], s)),
    a
  );
}
function SO(e, t, n, r) {
  const { _proxy: i, _context: o, _subProxy: s, _stack: a } = n;
  if (a.has(e))
    throw new Error(
      "Recursion detected: " + Array.from(a).join("->") + "->" + e
    );
  a.add(e);
  let l = t(o, s || r);
  return a.delete(e), Uh(e, l) && (l = Vh(i._scopes, i, e, l)), l;
}
function CO(e, t, n, r) {
  const { _proxy: i, _context: o, _subProxy: s, _descriptors: a } = n;
  if (typeof o.index < "u" && r(e)) return t[o.index % t.length];
  if (de(t[0])) {
    const l = t,
      c = i._scopes.filter((u) => u !== l);
    t = [];
    for (const u of l) {
      const d = Vh(c, i, e, u);
      t.push(xo(d, o, s && s[e], a));
    }
  }
  return t;
}
function Cb(e, t, n) {
  return Fr(e) ? e(t, n) : e;
}
const wO = (e, t) => (e === !0 ? t : typeof e == "string" ? mc(t, e) : void 0);
function kO(e, t, n, r, i) {
  for (const o of t) {
    const s = wO(n, o);
    if (s) {
      e.add(s);
      const a = Cb(s._fallback, n, i);
      if (typeof a < "u" && a !== n && a !== r) return a;
    } else if (s === !1 && typeof r < "u" && n !== r) return null;
  }
  return !1;
}
function Vh(e, t, n, r) {
  const i = t._rootScopes,
    o = Cb(t._fallback, n, r),
    s = [...e, ...i],
    a = new Set();
  a.add(r);
  let l = h0(a, s, n, o || n, r);
  return l === null ||
    (typeof o < "u" && o !== n && ((l = h0(a, s, o, l, r)), l === null))
    ? !1
    : Hh(Array.from(a), [""], i, o, () => _O(t, n, r));
}
function h0(e, t, n, r, i) {
  for (; n; ) n = kO(e, t, n, r, i);
  return n;
}
function _O(e, t, n) {
  const r = e._getTarget();
  t in r || (r[t] = {});
  const i = r[t];
  return De(i) && de(n) ? n : i || {};
}
function PO(e, t, n, r) {
  let i;
  for (const o of t)
    if (((i = wb(xO(o, e), n)), typeof i < "u"))
      return Uh(e, i) ? Vh(n, r, e, i) : i;
}
function wb(e, t) {
  for (const n of t) {
    if (!n) continue;
    const r = n[e];
    if (typeof r < "u") return r;
  }
}
function g0(e) {
  let t = e._keys;
  return t || (t = e._keys = EO(e._scopes)), t;
}
function EO(e) {
  const t = new Set();
  for (const n of e)
    for (const r of Object.keys(n).filter((i) => !i.startsWith("_"))) t.add(r);
  return Array.from(t);
}
const MO = Number.EPSILON || 1e-14,
  bo = (e, t) => t < e.length && !e[t].skip && e[t],
  kb = (e) => (e === "x" ? "y" : "x");
function TO(e, t, n, r) {
  const i = e.skip ? t : e,
    o = t,
    s = n.skip ? t : n,
    a = Vf(o, i),
    l = Vf(s, o);
  let c = a / (a + l),
    u = l / (a + l);
  (c = isNaN(c) ? 0 : c), (u = isNaN(u) ? 0 : u);
  const d = r * c,
    f = r * u;
  return {
    previous: { x: o.x - d * (s.x - i.x), y: o.y - d * (s.y - i.y) },
    next: { x: o.x + f * (s.x - i.x), y: o.y + f * (s.y - i.y) },
  };
}
function RO(e, t, n) {
  const r = e.length;
  let i,
    o,
    s,
    a,
    l,
    c = bo(e, 0);
  for (let u = 0; u < r - 1; ++u)
    if (((l = c), (c = bo(e, u + 1)), !(!l || !c))) {
      if (Is(t[u], 0, MO)) {
        n[u] = n[u + 1] = 0;
        continue;
      }
      (i = n[u] / t[u]),
        (o = n[u + 1] / t[u]),
        (a = Math.pow(i, 2) + Math.pow(o, 2)),
        !(a <= 9) &&
          ((s = 3 / Math.sqrt(a)),
          (n[u] = i * s * t[u]),
          (n[u + 1] = o * s * t[u]));
    }
}
function OO(e, t, n = "x") {
  const r = kb(n),
    i = e.length;
  let o,
    s,
    a,
    l = bo(e, 0);
  for (let c = 0; c < i; ++c) {
    if (((s = a), (a = l), (l = bo(e, c + 1)), !a)) continue;
    const u = a[n],
      d = a[r];
    s &&
      ((o = (u - s[n]) / 3),
      (a[`cp1${n}`] = u - o),
      (a[`cp1${r}`] = d - o * t[c])),
      l &&
        ((o = (l[n] - u) / 3),
        (a[`cp2${n}`] = u + o),
        (a[`cp2${r}`] = d + o * t[c]));
  }
}
function IO(e, t = "x") {
  const n = kb(t),
    r = e.length,
    i = Array(r).fill(0),
    o = Array(r);
  let s,
    a,
    l,
    c = bo(e, 0);
  for (s = 0; s < r; ++s)
    if (((a = l), (l = c), (c = bo(e, s + 1)), !!l)) {
      if (c) {
        const u = c[t] - l[t];
        i[s] = u !== 0 ? (c[n] - l[n]) / u : 0;
      }
      o[s] = a
        ? c
          ? vo(i[s - 1]) !== vo(i[s])
            ? 0
            : (i[s - 1] + i[s]) / 2
          : i[s - 1]
        : i[s];
    }
  RO(e, i, o), OO(e, o, t);
}
function rl(e, t, n) {
  return Math.max(Math.min(e, n), t);
}
function AO(e, t) {
  let n,
    r,
    i,
    o,
    s,
    a = qn(e[0], t);
  for (n = 0, r = e.length; n < r; ++n)
    (s = o),
      (o = a),
      (a = n < r - 1 && qn(e[n + 1], t)),
      o &&
        ((i = e[n]),
        s &&
          ((i.cp1x = rl(i.cp1x, t.left, t.right)),
          (i.cp1y = rl(i.cp1y, t.top, t.bottom))),
        a &&
          ((i.cp2x = rl(i.cp2x, t.left, t.right)),
          (i.cp2y = rl(i.cp2y, t.top, t.bottom))));
}
function LO(e, t, n, r, i) {
  let o, s, a, l;
  if (
    (t.spanGaps && (e = e.filter((c) => !c.skip)),
    t.cubicInterpolationMode === "monotone")
  )
    IO(e, i);
  else {
    let c = r ? e[e.length - 1] : e[0];
    for (o = 0, s = e.length; o < s; ++o)
      (a = e[o]),
        (l = TO(c, a, e[Math.min(o + 1, s - (r ? 0 : 1)) % s], t.tension)),
        (a.cp1x = l.previous.x),
        (a.cp1y = l.previous.y),
        (a.cp2x = l.next.x),
        (a.cp2y = l.next.y),
        (c = a);
  }
  t.capBezierPoints && AO(e, n);
}
function Gh() {
  return typeof window < "u" && typeof document < "u";
}
function Kh(e) {
  let t = e.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Sc(e, t, n) {
  let r;
  return (
    typeof e == "string"
      ? ((r = parseInt(e, 10)),
        e.indexOf("%") !== -1 && (r = (r / 100) * t.parentNode[n]))
      : (r = e),
    r
  );
}
const Cu = (e) => e.ownerDocument.defaultView.getComputedStyle(e, null);
function $O(e, t) {
  return Cu(e).getPropertyValue(t);
}
const FO = ["top", "right", "bottom", "left"];
function ci(e, t, n) {
  const r = {};
  n = n ? "-" + n : "";
  for (let i = 0; i < 4; i++) {
    const o = FO[i];
    r[o] = parseFloat(e[t + "-" + o + n]) || 0;
  }
  return (r.width = r.left + r.right), (r.height = r.top + r.bottom), r;
}
const zO = (e, t, n) => (e > 0 || t > 0) && (!n || !n.shadowRoot);
function DO(e, t) {
  const n = e.touches,
    r = n && n.length ? n[0] : e,
    { offsetX: i, offsetY: o } = r;
  let s = !1,
    a,
    l;
  if (zO(i, o, e.target)) (a = i), (l = o);
  else {
    const c = t.getBoundingClientRect();
    (a = r.clientX - c.left), (l = r.clientY - c.top), (s = !0);
  }
  return { x: a, y: l, box: s };
}
function Zr(e, t) {
  if ("native" in e) return e;
  const { canvas: n, currentDevicePixelRatio: r } = t,
    i = Cu(n),
    o = i.boxSizing === "border-box",
    s = ci(i, "padding"),
    a = ci(i, "border", "width"),
    { x: l, y: c, box: u } = DO(e, n),
    d = s.left + (u && a.left),
    f = s.top + (u && a.top);
  let { width: p, height: h } = t;
  return (
    o && ((p -= s.width + a.width), (h -= s.height + a.height)),
    {
      x: Math.round((((l - d) / p) * n.width) / r),
      y: Math.round((((c - f) / h) * n.height) / r),
    }
  );
}
function NO(e, t, n) {
  let r, i;
  if (t === void 0 || n === void 0) {
    const o = e && Kh(e);
    if (!o) (t = e.clientWidth), (n = e.clientHeight);
    else {
      const s = o.getBoundingClientRect(),
        a = Cu(o),
        l = ci(a, "border", "width"),
        c = ci(a, "padding");
      (t = s.width - c.width - l.width),
        (n = s.height - c.height - l.height),
        (r = Sc(a.maxWidth, o, "clientWidth")),
        (i = Sc(a.maxHeight, o, "clientHeight"));
    }
  }
  return { width: t, height: n, maxWidth: r || vc, maxHeight: i || vc };
}
const il = (e) => Math.round(e * 10) / 10;
function BO(e, t, n, r) {
  const i = Cu(e),
    o = ci(i, "margin"),
    s = Sc(i.maxWidth, e, "clientWidth") || vc,
    a = Sc(i.maxHeight, e, "clientHeight") || vc,
    l = NO(e, t, n);
  let { width: c, height: u } = l;
  if (i.boxSizing === "content-box") {
    const f = ci(i, "border", "width"),
      p = ci(i, "padding");
    (c -= p.width + f.width), (u -= p.height + f.height);
  }
  return (
    (c = Math.max(0, c - o.width)),
    (u = Math.max(0, r ? c / r : u - o.height)),
    (c = il(Math.min(c, s, l.maxWidth))),
    (u = il(Math.min(u, a, l.maxHeight))),
    c && !u && (u = il(c / 2)),
    (t !== void 0 || n !== void 0) &&
      r &&
      l.height &&
      u > l.height &&
      ((u = l.height), (c = il(Math.floor(u * r)))),
    { width: c, height: u }
  );
}
function m0(e, t, n) {
  const r = t || 1,
    i = Math.floor(e.height * r),
    o = Math.floor(e.width * r);
  (e.height = Math.floor(e.height)), (e.width = Math.floor(e.width));
  const s = e.canvas;
  return (
    s.style &&
      (n || (!s.style.height && !s.style.width)) &&
      ((s.style.height = `${e.height}px`), (s.style.width = `${e.width}px`)),
    e.currentDevicePixelRatio !== r || s.height !== i || s.width !== o
      ? ((e.currentDevicePixelRatio = r),
        (s.height = i),
        (s.width = o),
        e.ctx.setTransform(r, 0, 0, r, 0, 0),
        !0)
      : !1
  );
}
const jO = (function () {
  let e = !1;
  try {
    const t = {
      get passive() {
        return (e = !0), !1;
      },
    };
    Gh() &&
      (window.addEventListener("test", null, t),
      window.removeEventListener("test", null, t));
  } catch {}
  return e;
})();
function y0(e, t) {
  const n = $O(e, t),
    r = n && n.match(/^(\d+)(\.\d+)?px$/);
  return r ? +r[1] : void 0;
}
function ei(e, t, n, r) {
  return { x: e.x + n * (t.x - e.x), y: e.y + n * (t.y - e.y) };
}
function WO(e, t, n, r) {
  return {
    x: e.x + n * (t.x - e.x),
    y:
      r === "middle"
        ? n < 0.5
          ? e.y
          : t.y
        : r === "after"
        ? n < 1
          ? e.y
          : t.y
        : n > 0
        ? t.y
        : e.y,
  };
}
function HO(e, t, n, r) {
  const i = { x: e.cp2x, y: e.cp2y },
    o = { x: t.cp1x, y: t.cp1y },
    s = ei(e, i, n),
    a = ei(i, o, n),
    l = ei(o, t, n),
    c = ei(s, a, n),
    u = ei(a, l, n);
  return ei(c, u, n);
}
const UO = function (e, t) {
    return {
      x(n) {
        return e + e + t - n;
      },
      setWidth(n) {
        t = n;
      },
      textAlign(n) {
        return n === "center" ? n : n === "right" ? "left" : "right";
      },
      xPlus(n, r) {
        return n - r;
      },
      leftForLtr(n, r) {
        return n - r;
      },
    };
  },
  VO = function () {
    return {
      x(e) {
        return e;
      },
      setWidth(e) {},
      textAlign(e) {
        return e;
      },
      xPlus(e, t) {
        return e + t;
      },
      leftForLtr(e, t) {
        return e;
      },
    };
  };
function ao(e, t, n) {
  return e ? UO(t, n) : VO();
}
function _b(e, t) {
  let n, r;
  (t === "ltr" || t === "rtl") &&
    ((n = e.canvas.style),
    (r = [n.getPropertyValue("direction"), n.getPropertyPriority("direction")]),
    n.setProperty("direction", t, "important"),
    (e.prevTextDirection = r));
}
function Pb(e, t) {
  t !== void 0 &&
    (delete e.prevTextDirection,
    e.canvas.style.setProperty("direction", t[0], t[1]));
}
function Eb(e) {
  return e === "angle"
    ? { between: pb, compare: WR, normalize: gn }
    : { between: ms, compare: (t, n) => t - n, normalize: (t) => t };
}
function v0({ start: e, end: t, count: n, loop: r, style: i }) {
  return {
    start: e % n,
    end: t % n,
    loop: r && (t - e + 1) % n === 0,
    style: i,
  };
}
function GO(e, t, n) {
  const { property: r, start: i, end: o } = n,
    { between: s, normalize: a } = Eb(r),
    l = t.length;
  let { start: c, end: u, loop: d } = e,
    f,
    p;
  if (d) {
    for (c += l, u += l, f = 0, p = l; f < p && s(a(t[c % l][r]), i, o); ++f)
      c--, u--;
    (c %= l), (u %= l);
  }
  return u < c && (u += l), { start: c, end: u, loop: d, style: e.style };
}
function KO(e, t, n) {
  if (!n) return [e];
  const { property: r, start: i, end: o } = n,
    s = t.length,
    { compare: a, between: l, normalize: c } = Eb(r),
    { start: u, end: d, loop: f, style: p } = GO(e, t, n),
    h = [];
  let y = !1,
    x = null,
    g,
    v,
    m;
  const S = () => l(i, m, g) && a(i, m) !== 0,
    w = () => a(o, g) === 0 || l(o, m, g),
    _ = () => y || S(),
    k = () => !y || w();
  for (let M = u, b = u; M <= d; ++M)
    (v = t[M % s]),
      !v.skip &&
        ((g = c(v[r])),
        g !== m &&
          ((y = l(g, i, o)),
          x === null && _() && (x = a(g, i) === 0 ? M : b),
          x !== null &&
            k() &&
            (h.push(v0({ start: x, end: M, loop: f, count: s, style: p })),
            (x = null)),
          (b = M),
          (m = g)));
  return (
    x !== null && h.push(v0({ start: x, end: d, loop: f, count: s, style: p })),
    h
  );
}
function YO(e, t) {
  const n = [],
    r = e.segments;
  for (let i = 0; i < r.length; i++) {
    const o = KO(r[i], e.points, t);
    o.length && n.push(...o);
  }
  return n;
}
function XO(e, t, n, r) {
  let i = 0,
    o = t - 1;
  if (n && !r) for (; i < t && !e[i].skip; ) i++;
  for (; i < t && e[i].skip; ) i++;
  for (i %= t, n && (o += i); o > i && e[o % t].skip; ) o--;
  return (o %= t), { start: i, end: o };
}
function QO(e, t, n, r) {
  const i = e.length,
    o = [];
  let s = t,
    a = e[t],
    l;
  for (l = t + 1; l <= n; ++l) {
    const c = e[l % i];
    c.skip || c.stop
      ? a.skip ||
        ((r = !1),
        o.push({ start: t % i, end: (l - 1) % i, loop: r }),
        (t = s = c.stop ? l : null))
      : ((s = l), a.skip && (t = l)),
      (a = c);
  }
  return s !== null && o.push({ start: t % i, end: s % i, loop: r }), o;
}
function qO(e, t) {
  const n = e.points,
    r = e.options.spanGaps,
    i = n.length;
  if (!i) return [];
  const o = !!e._loop,
    { start: s, end: a } = XO(n, i, o, r);
  if (r === !0) return x0(e, [{ start: s, end: a, loop: o }], n, t);
  const l = a < s ? a + i : a,
    c = !!e._fullLoop && s === 0 && a === i - 1;
  return x0(e, QO(n, s, l, c), n, t);
}
function x0(e, t, n, r) {
  return !r || !r.setContext || !n ? t : JO(e, t, n, r);
}
function JO(e, t, n, r) {
  const i = e._chart.getContext(),
    o = b0(e.options),
    {
      _datasetIndex: s,
      options: { spanGaps: a },
    } = e,
    l = n.length,
    c = [];
  let u = o,
    d = t[0].start,
    f = d;
  function p(h, y, x, g) {
    const v = a ? -1 : 1;
    if (h !== y) {
      for (h += l; n[h % l].skip; ) h -= v;
      for (; n[y % l].skip; ) y += v;
      h % l !== y % l &&
        (c.push({ start: h % l, end: y % l, loop: x, style: g }),
        (u = g),
        (d = y % l));
    }
  }
  for (const h of t) {
    d = a ? d : h.start;
    let y = n[d % l],
      x;
    for (f = d + 1; f <= h.end; f++) {
      const g = n[f % l];
      (x = b0(
        r.setContext(
          jr(i, {
            type: "segment",
            p0: y,
            p1: g,
            p0DataIndex: (f - 1) % l,
            p1DataIndex: f % l,
            datasetIndex: s,
          })
        )
      )),
        ZO(x, u) && p(d, f - 1, h.loop, u),
        (y = g),
        (u = x);
    }
    d < f - 1 && p(d, f - 1, h.loop, u);
  }
  return c;
}
function b0(e) {
  return {
    backgroundColor: e.backgroundColor,
    borderCapStyle: e.borderCapStyle,
    borderDash: e.borderDash,
    borderDashOffset: e.borderDashOffset,
    borderJoinStyle: e.borderJoinStyle,
    borderWidth: e.borderWidth,
    borderColor: e.borderColor,
  };
}
function ZO(e, t) {
  if (!t) return !1;
  const n = [],
    r = function (i, o) {
      return Nh(o) ? (n.includes(o) || n.push(o), n.indexOf(o)) : o;
    };
  return JSON.stringify(e, r) !== JSON.stringify(t, r);
}
/*!
 * Chart.js v4.4.4
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ class eI {
  constructor() {
    (this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0);
  }
  _notify(t, n, r, i) {
    const o = n.listeners[i],
      s = n.duration;
    o.forEach((a) =>
      a({
        chart: t,
        initial: n.initial,
        numSteps: s,
        currentStep: Math.min(r - n.start, s),
      })
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = gb.call(window, () => {
        this._update(),
          (this._request = null),
          this._running && this._refresh();
      })));
  }
  _update(t = Date.now()) {
    let n = 0;
    this._charts.forEach((r, i) => {
      if (!r.running || !r.items.length) return;
      const o = r.items;
      let s = o.length - 1,
        a = !1,
        l;
      for (; s >= 0; --s)
        (l = o[s]),
          l._active
            ? (l._total > r.duration && (r.duration = l._total),
              l.tick(t),
              (a = !0))
            : ((o[s] = o[o.length - 1]), o.pop());
      a && (i.draw(), this._notify(i, r, t, "progress")),
        o.length ||
          ((r.running = !1),
          this._notify(i, r, t, "complete"),
          (r.initial = !1)),
        (n += o.length);
    }),
      (this._lastDate = t),
      n === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const n = this._charts;
    let r = n.get(t);
    return (
      r ||
        ((r = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        }),
        n.set(t, r)),
      r
    );
  }
  listen(t, n, r) {
    this._getAnims(t).listeners[n].push(r);
  }
  add(t, n) {
    !n || !n.length || this._getAnims(t).items.push(...n);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const n = this._charts.get(t);
    n &&
      ((n.running = !0),
      (n.start = Date.now()),
      (n.duration = n.items.reduce((r, i) => Math.max(r, i._duration), 0)),
      this._refresh());
  }
  running(t) {
    if (!this._running) return !1;
    const n = this._charts.get(t);
    return !(!n || !n.running || !n.items.length);
  }
  stop(t) {
    const n = this._charts.get(t);
    if (!n || !n.items.length) return;
    const r = n.items;
    let i = r.length - 1;
    for (; i >= 0; --i) r[i].cancel();
    (n.items = []), this._notify(t, n, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var Hn = new eI();
const S0 = "transparent",
  tI = {
    boolean(e, t, n) {
      return n > 0.5 ? t : e;
    },
    color(e, t, n) {
      const r = d0(e || S0),
        i = r.valid && d0(t || S0);
      return i && i.valid ? i.mix(r, n).hexString() : t;
    },
    number(e, t, n) {
      return e + (t - e) * n;
    },
  };
class nI {
  constructor(t, n, r, i) {
    const o = n[r];
    i = nl([t.to, i, o, t.from]);
    const s = nl([t.from, o, i]);
    (this._active = !0),
      (this._fn = t.fn || tI[t.type || typeof s]),
      (this._easing = As[t.easing] || As.linear),
      (this._start = Math.floor(Date.now() + (t.delay || 0))),
      (this._duration = this._total = Math.floor(t.duration)),
      (this._loop = !!t.loop),
      (this._target = n),
      (this._prop = r),
      (this._from = s),
      (this._to = i),
      (this._promises = void 0);
  }
  active() {
    return this._active;
  }
  update(t, n, r) {
    if (this._active) {
      this._notify(!1);
      const i = this._target[this._prop],
        o = r - this._start,
        s = this._duration - o;
      (this._start = r),
        (this._duration = Math.floor(Math.max(s, t.duration))),
        (this._total += o),
        (this._loop = !!t.loop),
        (this._to = nl([t.to, n, i, t.from])),
        (this._from = nl([t.from, i, n]));
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(t) {
    const n = t - this._start,
      r = this._duration,
      i = this._prop,
      o = this._from,
      s = this._loop,
      a = this._to;
    let l;
    if (((this._active = o !== a && (s || n < r)), !this._active)) {
      (this._target[i] = a), this._notify(!0);
      return;
    }
    if (n < 0) {
      this._target[i] = o;
      return;
    }
    (l = (n / r) % 2),
      (l = s && l > 1 ? 2 - l : l),
      (l = this._easing(Math.min(1, Math.max(0, l)))),
      (this._target[i] = this._fn(o, a, l));
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((n, r) => {
      t.push({ res: n, rej: r });
    });
  }
  _notify(t) {
    const n = t ? "res" : "rej",
      r = this._promises || [];
    for (let i = 0; i < r.length; i++) r[i][n]();
  }
}
class Mb {
  constructor(t, n) {
    (this._chart = t), (this._properties = new Map()), this.configure(n);
  }
  configure(t) {
    if (!de(t)) return;
    const n = Object.keys(Ne.animation),
      r = this._properties;
    Object.getOwnPropertyNames(t).forEach((i) => {
      const o = t[i];
      if (!de(o)) return;
      const s = {};
      for (const a of n) s[a] = o[a];
      ((De(o.properties) && o.properties) || [i]).forEach((a) => {
        (a === i || !r.has(a)) && r.set(a, s);
      });
    });
  }
  _animateOptions(t, n) {
    const r = n.options,
      i = iI(t, r);
    if (!i) return [];
    const o = this._createAnimations(i, r);
    return (
      r.$shared &&
        rI(t.options.$animations, r).then(
          () => {
            t.options = r;
          },
          () => {}
        ),
      o
    );
  }
  _createAnimations(t, n) {
    const r = this._properties,
      i = [],
      o = t.$animations || (t.$animations = {}),
      s = Object.keys(n),
      a = Date.now();
    let l;
    for (l = s.length - 1; l >= 0; --l) {
      const c = s[l];
      if (c.charAt(0) === "$") continue;
      if (c === "options") {
        i.push(...this._animateOptions(t, n));
        continue;
      }
      const u = n[c];
      let d = o[c];
      const f = r.get(c);
      if (d)
        if (f && d.active()) {
          d.update(f, u, a);
          continue;
        } else d.cancel();
      if (!f || !f.duration) {
        t[c] = u;
        continue;
      }
      (o[c] = d = new nI(f, t, c, u)), i.push(d);
    }
    return i;
  }
  update(t, n) {
    if (this._properties.size === 0) {
      Object.assign(t, n);
      return;
    }
    const r = this._createAnimations(t, n);
    if (r.length) return Hn.add(this._chart, r), !0;
  }
}
function rI(e, t) {
  const n = [],
    r = Object.keys(t);
  for (let i = 0; i < r.length; i++) {
    const o = e[r[i]];
    o && o.active() && n.push(o.wait());
  }
  return Promise.all(n);
}
function iI(e, t) {
  if (!t) return;
  let n = e.options;
  if (!n) {
    e.options = t;
    return;
  }
  return (
    n.$shared &&
      (e.options = n = Object.assign({}, n, { $shared: !1, $animations: {} })),
    n
  );
}
function C0(e, t) {
  const n = (e && e.options) || {},
    r = n.reverse,
    i = n.min === void 0 ? t : 0,
    o = n.max === void 0 ? t : 0;
  return { start: r ? o : i, end: r ? i : o };
}
function oI(e, t, n) {
  if (n === !1) return !1;
  const r = C0(e, n),
    i = C0(t, n);
  return { top: i.end, right: r.end, bottom: i.start, left: r.start };
}
function sI(e) {
  let t, n, r, i;
  return (
    de(e)
      ? ((t = e.top), (n = e.right), (r = e.bottom), (i = e.left))
      : (t = n = r = i = e),
    { top: t, right: n, bottom: r, left: i, disabled: e === !1 }
  );
}
function Tb(e, t) {
  const n = [],
    r = e._getSortedDatasetMetas(t);
  let i, o;
  for (i = 0, o = r.length; i < o; ++i) n.push(r[i].index);
  return n;
}
function w0(e, t, n, r = {}) {
  const i = e.keys,
    o = r.mode === "single";
  let s, a, l, c;
  if (t !== null) {
    for (s = 0, a = i.length; s < a; ++s) {
      if (((l = +i[s]), l === n)) {
        if (r.all) continue;
        break;
      }
      (c = e.values[l]), Ze(c) && (o || t === 0 || vo(t) === vo(c)) && (t += c);
    }
    return t;
  }
}
function aI(e, t) {
  const { iScale: n, vScale: r } = t,
    i = n.axis === "x" ? "x" : "y",
    o = r.axis === "x" ? "x" : "y",
    s = Object.keys(e),
    a = new Array(s.length);
  let l, c, u;
  for (l = 0, c = s.length; l < c; ++l)
    (u = s[l]), (a[l] = { [i]: u, [o]: e[u] });
  return a;
}
function k0(e, t) {
  const n = e && e.options.stacked;
  return n || (n === void 0 && t.stack !== void 0);
}
function lI(e, t, n) {
  return `${e.id}.${t.id}.${n.stack || n.type}`;
}
function cI(e) {
  const { min: t, max: n, minDefined: r, maxDefined: i } = e.getUserBounds();
  return {
    min: r ? t : Number.NEGATIVE_INFINITY,
    max: i ? n : Number.POSITIVE_INFINITY,
  };
}
function uI(e, t, n) {
  const r = e[t] || (e[t] = {});
  return r[n] || (r[n] = {});
}
function _0(e, t, n, r) {
  for (const i of t.getMatchingVisibleMetas(r).reverse()) {
    const o = e[i.index];
    if ((n && o > 0) || (!n && o < 0)) return i.index;
  }
  return null;
}
function P0(e, t) {
  const { chart: n, _cachedMeta: r } = e,
    i = n._stacks || (n._stacks = {}),
    { iScale: o, vScale: s, index: a } = r,
    l = o.axis,
    c = s.axis,
    u = lI(o, s, r),
    d = t.length;
  let f;
  for (let p = 0; p < d; ++p) {
    const h = t[p],
      { [l]: y, [c]: x } = h,
      g = h._stacks || (h._stacks = {});
    (f = g[c] = uI(i, u, y)),
      (f[a] = x),
      (f._top = _0(f, s, !0, r.type)),
      (f._bottom = _0(f, s, !1, r.type));
    const v = f._visualValues || (f._visualValues = {});
    v[a] = x;
  }
}
function Ed(e, t) {
  const n = e.scales;
  return Object.keys(n)
    .filter((r) => n[r].axis === t)
    .shift();
}
function dI(e, t) {
  return jr(e, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset",
  });
}
function fI(e, t, n) {
  return jr(e, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: n,
    index: t,
    mode: "default",
    type: "data",
  });
}
function es(e, t) {
  const n = e.controller.index,
    r = e.vScale && e.vScale.axis;
  if (r) {
    t = t || e._parsed;
    for (const i of t) {
      const o = i._stacks;
      if (!o || o[r] === void 0 || o[r][n] === void 0) return;
      delete o[r][n],
        o[r]._visualValues !== void 0 &&
          o[r]._visualValues[n] !== void 0 &&
          delete o[r]._visualValues[n];
    }
  }
}
const Md = (e) => e === "reset" || e === "none",
  E0 = (e, t) => (t ? e : Object.assign({}, e)),
  pI = (e, t, n) =>
    e && !t.hidden && t._stacked && { keys: Tb(n, !0), values: null };
class $s {
  constructor(t, n) {
    (this.chart = t),
      (this._ctx = t.ctx),
      (this.index = n),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(),
      this.linkScales(),
      (t._stacked = k0(t.vScale, t)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled("filler") &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
        );
  }
  updateIndex(t) {
    this.index !== t && es(this._cachedMeta), (this.index = t);
  }
  linkScales() {
    const t = this.chart,
      n = this._cachedMeta,
      r = this.getDataset(),
      i = (d, f, p, h) => (d === "x" ? f : d === "r" ? h : p),
      o = (n.xAxisID = ee(r.xAxisID, Ed(t, "x"))),
      s = (n.yAxisID = ee(r.yAxisID, Ed(t, "y"))),
      a = (n.rAxisID = ee(r.rAxisID, Ed(t, "r"))),
      l = n.indexAxis,
      c = (n.iAxisID = i(l, o, s, a)),
      u = (n.vAxisID = i(l, s, o, a));
    (n.xScale = this.getScaleForId(o)),
      (n.yScale = this.getScaleForId(s)),
      (n.rScale = this.getScaleForId(a)),
      (n.iScale = this.getScaleForId(c)),
      (n.vScale = this.getScaleForId(u));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const n = this._cachedMeta;
    return t === n.iScale ? n.vScale : n.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && l0(this._data, this), t._stacked && es(t);
  }
  _dataCheck() {
    const t = this.getDataset(),
      n = t.data || (t.data = []),
      r = this._data;
    if (de(n)) {
      const i = this._cachedMeta;
      this._data = aI(n, i);
    } else if (r !== n) {
      if (r) {
        l0(r, this);
        const i = this._cachedMeta;
        es(i), (i._parsed = []);
      }
      n && Object.isExtensible(n) && GR(n, this),
        (this._syncList = []),
        (this._data = n);
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(),
      this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const n = this._cachedMeta,
      r = this.getDataset();
    let i = !1;
    this._dataCheck();
    const o = n._stacked;
    (n._stacked = k0(n.vScale, n)),
      n.stack !== r.stack && ((i = !0), es(n), (n.stack = r.stack)),
      this._resyncElements(t),
      (i || o !== n._stacked) && P0(this, n._parsed);
  }
  configure() {
    const t = this.chart.config,
      n = t.datasetScopeKeys(this._type),
      r = t.getOptionScopes(this.getDataset(), n, !0);
    (this.options = t.createResolver(r, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {});
  }
  parse(t, n) {
    const { _cachedMeta: r, _data: i } = this,
      { iScale: o, _stacked: s } = r,
      a = o.axis;
    let l = t === 0 && n === i.length ? !0 : r._sorted,
      c = t > 0 && r._parsed[t - 1],
      u,
      d,
      f;
    if (this._parsing === !1) (r._parsed = i), (r._sorted = !0), (f = i);
    else {
      De(i[t])
        ? (f = this.parseArrayData(r, i, t, n))
        : de(i[t])
        ? (f = this.parseObjectData(r, i, t, n))
        : (f = this.parsePrimitiveData(r, i, t, n));
      const p = () => d[a] === null || (c && d[a] < c[a]);
      for (u = 0; u < n; ++u)
        (r._parsed[u + t] = d = f[u]), l && (p() && (l = !1), (c = d));
      r._sorted = l;
    }
    s && P0(this, f);
  }
  parsePrimitiveData(t, n, r, i) {
    const { iScale: o, vScale: s } = t,
      a = o.axis,
      l = s.axis,
      c = o.getLabels(),
      u = o === s,
      d = new Array(i);
    let f, p, h;
    for (f = 0, p = i; f < p; ++f)
      (h = f + r),
        (d[f] = { [a]: u || o.parse(c[h], h), [l]: s.parse(n[h], h) });
    return d;
  }
  parseArrayData(t, n, r, i) {
    const { xScale: o, yScale: s } = t,
      a = new Array(i);
    let l, c, u, d;
    for (l = 0, c = i; l < c; ++l)
      (u = l + r),
        (d = n[u]),
        (a[l] = { x: o.parse(d[0], u), y: s.parse(d[1], u) });
    return a;
  }
  parseObjectData(t, n, r, i) {
    const { xScale: o, yScale: s } = t,
      { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing,
      c = new Array(i);
    let u, d, f, p;
    for (u = 0, d = i; u < d; ++u)
      (f = u + r),
        (p = n[f]),
        (c[u] = { x: o.parse(mc(p, a), f), y: s.parse(mc(p, l), f) });
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, n, r) {
    const i = this.chart,
      o = this._cachedMeta,
      s = n[t.axis],
      a = { keys: Tb(i, !0), values: n._stacks[t.axis]._visualValues };
    return w0(a, s, o.index, { mode: r });
  }
  updateRangeFromParsed(t, n, r, i) {
    const o = r[n.axis];
    let s = o === null ? NaN : o;
    const a = i && r._stacks[n.axis];
    i && a && ((i.values = a), (s = w0(i, o, this._cachedMeta.index))),
      (t.min = Math.min(t.min, s)),
      (t.max = Math.max(t.max, s));
  }
  getMinMax(t, n) {
    const r = this._cachedMeta,
      i = r._parsed,
      o = r._sorted && t === r.iScale,
      s = i.length,
      a = this._getOtherScale(t),
      l = pI(n, r, this.chart),
      c = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: u, max: d } = cI(a);
    let f, p;
    function h() {
      p = i[f];
      const y = p[a.axis];
      return !Ze(p[t.axis]) || u > y || d < y;
    }
    for (
      f = 0;
      f < s && !(!h() && (this.updateRangeFromParsed(c, t, p, l), o));
      ++f
    );
    if (o) {
      for (f = s - 1; f >= 0; --f)
        if (!h()) {
          this.updateRangeFromParsed(c, t, p, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const n = this._cachedMeta._parsed,
      r = [];
    let i, o, s;
    for (i = 0, o = n.length; i < o; ++i)
      (s = n[i][t.axis]), Ze(s) && r.push(s);
    return r;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      r = n.iScale,
      i = n.vScale,
      o = this.getParsed(t);
    return {
      label: r ? "" + r.getLabelForValue(o[r.axis]) : "",
      value: i ? "" + i.getLabelForValue(o[i.axis]) : "",
    };
  }
  _update(t) {
    const n = this._cachedMeta;
    this.update(t || "default"),
      (n._clip = sI(
        ee(this.options.clip, oI(n.xScale, n.yScale, this.getMaxOverflow()))
      ));
  }
  update(t) {}
  draw() {
    const t = this._ctx,
      n = this.chart,
      r = this._cachedMeta,
      i = r.data || [],
      o = n.chartArea,
      s = [],
      a = this._drawStart || 0,
      l = this._drawCount || i.length - a,
      c = this.options.drawActiveElementsOnTop;
    let u;
    for (r.dataset && r.dataset.draw(t, o, a, l), u = a; u < a + l; ++u) {
      const d = i[u];
      d.hidden || (d.active && c ? s.push(d) : d.draw(t, o));
    }
    for (u = 0; u < s.length; ++u) s[u].draw(t, o);
  }
  getStyle(t, n) {
    const r = n ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(r)
      : this.resolveDataElementOptions(t || 0, r);
  }
  getContext(t, n, r) {
    const i = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const s = this._cachedMeta.data[t];
      (o = s.$context || (s.$context = fI(this.getContext(), t, s))),
        (o.parsed = this.getParsed(t)),
        (o.raw = i.data[t]),
        (o.index = o.dataIndex = t);
    } else
      (o =
        this.$context ||
        (this.$context = dI(this.chart.getContext(), this.index))),
        (o.dataset = i),
        (o.index = o.datasetIndex = this.index);
    return (o.active = !!n), (o.mode = r), o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, n) {
    return this._resolveElementOptions(this.dataElementType.id, n, t);
  }
  _resolveElementOptions(t, n = "default", r) {
    const i = n === "active",
      o = this._cachedDataOpts,
      s = t + "-" + n,
      a = o[s],
      l = this.enableOptionSharing && yc(r);
    if (a) return E0(a, l);
    const c = this.chart.config,
      u = c.datasetElementScopeKeys(this._type, t),
      d = i ? [`${t}Hover`, "hover", t, ""] : [t, ""],
      f = c.getOptionScopes(this.getDataset(), u),
      p = Object.keys(Ne.elements[t]),
      h = () => this.getContext(r, i, n),
      y = c.resolveNamedOptions(f, p, h, d);
    return y.$shared && ((y.$shared = l), (o[s] = Object.freeze(E0(y, l)))), y;
  }
  _resolveAnimations(t, n, r) {
    const i = this.chart,
      o = this._cachedDataOpts,
      s = `animation-${n}`,
      a = o[s];
    if (a) return a;
    let l;
    if (i.options.animation !== !1) {
      const u = this.chart.config,
        d = u.datasetAnimationScopeKeys(this._type, n),
        f = u.getOptionScopes(this.getDataset(), d);
      l = u.createResolver(f, this.getContext(t, r, n));
    }
    const c = new Mb(i, l && l.animations);
    return l && l._cacheable && (o[s] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
      );
  }
  includeOptions(t, n) {
    return !n || Md(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, n) {
    const r = this.resolveDataElementOptions(t, n),
      i = this._sharedOptions,
      o = this.getSharedOptions(r),
      s = this.includeOptions(n, o) || o !== i;
    return (
      this.updateSharedOptions(o, n, r), { sharedOptions: o, includeOptions: s }
    );
  }
  updateElement(t, n, r, i) {
    Md(i) ? Object.assign(t, r) : this._resolveAnimations(n, i).update(t, r);
  }
  updateSharedOptions(t, n, r) {
    t && !Md(n) && this._resolveAnimations(void 0, n).update(t, r);
  }
  _setStyle(t, n, r, i) {
    t.active = i;
    const o = this.getStyle(n, i);
    this._resolveAnimations(n, r, i).update(t, {
      options: (!i && this.getSharedOptions(o)) || o,
    });
  }
  removeHoverStyle(t, n, r) {
    this._setStyle(t, r, "active", !1);
  }
  setHoverStyle(t, n, r) {
    this._setStyle(t, r, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const n = this._data,
      r = this._cachedMeta.data;
    for (const [a, l, c] of this._syncList) this[a](l, c);
    this._syncList = [];
    const i = r.length,
      o = n.length,
      s = Math.min(o, i);
    s && this.parse(0, s),
      o > i
        ? this._insertElements(i, o - i, t)
        : o < i && this._removeElements(o, i - o);
  }
  _insertElements(t, n, r = !0) {
    const i = this._cachedMeta,
      o = i.data,
      s = t + n;
    let a;
    const l = (c) => {
      for (c.length += n, a = c.length - 1; a >= s; a--) c[a] = c[a - n];
    };
    for (l(o), a = t; a < s; ++a) o[a] = new this.dataElementType();
    this._parsing && l(i._parsed),
      this.parse(t, n),
      r && this.updateElements(o, t, n, "reset");
  }
  updateElements(t, n, r, i) {}
  _removeElements(t, n) {
    const r = this._cachedMeta;
    if (this._parsing) {
      const i = r._parsed.splice(t, n);
      r._stacked && es(r, i);
    }
    r.data.splice(t, n);
  }
  _sync(t) {
    if (this._parsing) this._syncList.push(t);
    else {
      const [n, r, i] = t;
      this[n](r, i);
    }
    this.chart._dataChanges.push([this.index, ...t]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync(["_insertElements", this.getDataset().data.length - t, t]);
  }
  _onDataPop() {
    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(["_removeElements", 0, 1]);
  }
  _onDataSplice(t, n) {
    n && this._sync(["_removeElements", t, n]);
    const r = arguments.length - 2;
    r && this._sync(["_insertElements", t, r]);
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length]);
  }
}
Y($s, "defaults", {}),
  Y($s, "datasetElementType", null),
  Y($s, "dataElementType", null);
class Ol extends $s {
  initialize() {
    (this.enableOptionSharing = !0),
      (this.supportsDecimation = !0),
      super.initialize();
  }
  update(t) {
    const n = this._cachedMeta,
      { dataset: r, data: i = [], _dataset: o } = n,
      s = this.chart._animationsDisabled;
    let { start: a, count: l } = QR(n, i, s);
    (this._drawStart = a),
      (this._drawCount = l),
      qR(n) && ((a = 0), (l = i.length)),
      (r._chart = this.chart),
      (r._datasetIndex = this.index),
      (r._decimated = !!o._decimated),
      (r.points = i);
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0),
      (c.segment = this.options.segment),
      this.updateElement(r, void 0, { animated: !s, options: c }, t),
      this.updateElements(i, a, l, t);
  }
  updateElements(t, n, r, i) {
    const o = i === "reset",
      { iScale: s, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta,
      { sharedOptions: u, includeOptions: d } = this._getSharedOptions(n, i),
      f = s.axis,
      p = a.axis,
      { spanGaps: h, segment: y } = this.options,
      x = ua(h) ? h : Number.POSITIVE_INFINITY,
      g = this.chart._animationsDisabled || o || i === "none",
      v = n + r,
      m = t.length;
    let S = n > 0 && this.getParsed(n - 1);
    for (let w = 0; w < m; ++w) {
      const _ = t[w],
        k = g ? _ : {};
      if (w < n || w >= v) {
        k.skip = !0;
        continue;
      }
      const M = this.getParsed(w),
        b = Ee(M[p]),
        E = (k[f] = s.getPixelForValue(M[f], w)),
        R = (k[p] =
          o || b
            ? a.getBasePixel()
            : a.getPixelForValue(l ? this.applyStack(a, M, l) : M[p], w));
      (k.skip = isNaN(E) || isNaN(R) || b),
        (k.stop = w > 0 && Math.abs(M[f] - S[f]) > x),
        y && ((k.parsed = M), (k.raw = c.data[w])),
        d &&
          (k.options =
            u || this.resolveDataElementOptions(w, _.active ? "active" : i)),
        g || this.updateElement(_, w, k, i),
        (S = M);
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta,
      n = t.dataset,
      r = (n.options && n.options.borderWidth) || 0,
      i = t.data || [];
    if (!i.length) return r;
    const o = i[0].size(this.resolveDataElementOptions(0)),
      s = i[i.length - 1].size(this.resolveDataElementOptions(i.length - 1));
    return Math.max(r, o, s) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
      super.draw();
  }
}
Y(Ol, "id", "line"),
  Y(Ol, "defaults", {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: !0,
    spanGaps: !1,
  }),
  Y(Ol, "overrides", {
    scales: { _index_: { type: "category" }, _value_: { type: "linear" } },
  });
function Vr() {
  throw new Error(
    "This method is not implemented: Check that a complete date adapter is provided."
  );
}
class Yh {
  constructor(t) {
    Y(this, "options");
    this.options = t || {};
  }
  static override(t) {
    Object.assign(Yh.prototype, t);
  }
  init() {}
  formats() {
    return Vr();
  }
  parse() {
    return Vr();
  }
  format() {
    return Vr();
  }
  add() {
    return Vr();
  }
  diff() {
    return Vr();
  }
  startOf() {
    return Vr();
  }
  endOf() {
    return Vr();
  }
}
var hI = { _date: Yh };
function gI(e, t, n, r) {
  const { controller: i, data: o, _sorted: s } = e,
    a = i._cachedMeta.iScale;
  if (a && t === a.axis && t !== "r" && s && o.length) {
    const l = a._reversePixels ? UR : si;
    if (r) {
      if (i._sharedOptions) {
        const c = o[0],
          u = typeof c.getRange == "function" && c.getRange(t);
        if (u) {
          const d = l(o, t, n - u),
            f = l(o, t, n + u);
          return { lo: d.lo, hi: f.hi };
        }
      }
    } else return l(o, t, n);
  }
  return { lo: 0, hi: o.length - 1 };
}
function Pa(e, t, n, r, i) {
  const o = e.getSortedVisibleDatasetMetas(),
    s = n[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: u } = o[a],
      { lo: d, hi: f } = gI(o[a], t, s, i);
    for (let p = d; p <= f; ++p) {
      const h = u[p];
      h.skip || r(h, c, p);
    }
  }
}
function mI(e) {
  const t = e.indexOf("x") !== -1,
    n = e.indexOf("y") !== -1;
  return function (r, i) {
    const o = t ? Math.abs(r.x - i.x) : 0,
      s = n ? Math.abs(r.y - i.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(s, 2));
  };
}
function Td(e, t, n, r, i) {
  const o = [];
  return (
    (!i && !e.isPointInArea(t)) ||
      Pa(
        e,
        n,
        t,
        function (a, l, c) {
          (!i && !qn(a, e.chartArea, 0)) ||
            (a.inRange(t.x, t.y, r) &&
              o.push({ element: a, datasetIndex: l, index: c }));
        },
        !0
      ),
    o
  );
}
function yI(e, t, n, r) {
  let i = [];
  function o(s, a, l) {
    const { startAngle: c, endAngle: u } = s.getProps(
        ["startAngle", "endAngle"],
        r
      ),
      { angle: d } = jR(s, { x: t.x, y: t.y });
    pb(d, c, u) && i.push({ element: s, datasetIndex: a, index: l });
  }
  return Pa(e, n, t, o), i;
}
function vI(e, t, n, r, i, o) {
  let s = [];
  const a = mI(n);
  let l = Number.POSITIVE_INFINITY;
  function c(u, d, f) {
    const p = u.inRange(t.x, t.y, i);
    if (r && !p) return;
    const h = u.getCenterPoint(i);
    if (!(!!o || e.isPointInArea(h)) && !p) return;
    const x = a(t, h);
    x < l
      ? ((s = [{ element: u, datasetIndex: d, index: f }]), (l = x))
      : x === l && s.push({ element: u, datasetIndex: d, index: f });
  }
  return Pa(e, n, t, c), s;
}
function Rd(e, t, n, r, i, o) {
  return !o && !e.isPointInArea(t)
    ? []
    : n === "r" && !r
    ? yI(e, t, n, i)
    : vI(e, t, n, r, i, o);
}
function M0(e, t, n, r, i) {
  const o = [],
    s = n === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return (
    Pa(e, n, t, (l, c, u) => {
      l[s] &&
        l[s](t[n], i) &&
        (o.push({ element: l, datasetIndex: c, index: u }),
        (a = a || l.inRange(t.x, t.y, i)));
    }),
    r && !a ? [] : o
  );
}
var xI = {
  evaluateInteractionItems: Pa,
  modes: {
    index(e, t, n, r) {
      const i = Zr(t, e),
        o = n.axis || "x",
        s = n.includeInvisible || !1,
        a = n.intersect ? Td(e, i, o, r, s) : Rd(e, i, o, !1, r, s),
        l = [];
      return a.length
        ? (e.getSortedVisibleDatasetMetas().forEach((c) => {
            const u = a[0].index,
              d = c.data[u];
            d &&
              !d.skip &&
              l.push({ element: d, datasetIndex: c.index, index: u });
          }),
          l)
        : [];
    },
    dataset(e, t, n, r) {
      const i = Zr(t, e),
        o = n.axis || "xy",
        s = n.includeInvisible || !1;
      let a = n.intersect ? Td(e, i, o, r, s) : Rd(e, i, o, !1, r, s);
      if (a.length > 0) {
        const l = a[0].datasetIndex,
          c = e.getDatasetMeta(l).data;
        a = [];
        for (let u = 0; u < c.length; ++u)
          a.push({ element: c[u], datasetIndex: l, index: u });
      }
      return a;
    },
    point(e, t, n, r) {
      const i = Zr(t, e),
        o = n.axis || "xy",
        s = n.includeInvisible || !1;
      return Td(e, i, o, r, s);
    },
    nearest(e, t, n, r) {
      const i = Zr(t, e),
        o = n.axis || "xy",
        s = n.includeInvisible || !1;
      return Rd(e, i, o, n.intersect, r, s);
    },
    x(e, t, n, r) {
      const i = Zr(t, e);
      return M0(e, i, "x", n.intersect, r);
    },
    y(e, t, n, r) {
      const i = Zr(t, e);
      return M0(e, i, "y", n.intersect, r);
    },
  },
};
const Rb = ["left", "top", "right", "bottom"];
function ts(e, t) {
  return e.filter((n) => n.pos === t);
}
function T0(e, t) {
  return e.filter((n) => Rb.indexOf(n.pos) === -1 && n.box.axis === t);
}
function ns(e, t) {
  return e.sort((n, r) => {
    const i = t ? r : n,
      o = t ? n : r;
    return i.weight === o.weight ? i.index - o.index : i.weight - o.weight;
  });
}
function bI(e) {
  const t = [];
  let n, r, i, o, s, a;
  for (n = 0, r = (e || []).length; n < r; ++n)
    (i = e[n]),
      ({
        position: o,
        options: { stack: s, stackWeight: a = 1 },
      } = i),
      t.push({
        index: n,
        box: i,
        pos: o,
        horizontal: i.isHorizontal(),
        weight: i.weight,
        stack: s && o + s,
        stackWeight: a,
      });
  return t;
}
function SI(e) {
  const t = {};
  for (const n of e) {
    const { stack: r, pos: i, stackWeight: o } = n;
    if (!r || !Rb.includes(i)) continue;
    const s = t[r] || (t[r] = { count: 0, placed: 0, weight: 0, size: 0 });
    s.count++, (s.weight += o);
  }
  return t;
}
function CI(e, t) {
  const n = SI(e),
    { vBoxMaxWidth: r, hBoxMaxHeight: i } = t;
  let o, s, a;
  for (o = 0, s = e.length; o < s; ++o) {
    a = e[o];
    const { fullSize: l } = a.box,
      c = n[a.stack],
      u = c && a.stackWeight / c.weight;
    a.horizontal
      ? ((a.width = u ? u * r : l && t.availableWidth), (a.height = i))
      : ((a.width = r), (a.height = u ? u * i : l && t.availableHeight));
  }
  return n;
}
function wI(e) {
  const t = bI(e),
    n = ns(
      t.filter((c) => c.box.fullSize),
      !0
    ),
    r = ns(ts(t, "left"), !0),
    i = ns(ts(t, "right")),
    o = ns(ts(t, "top"), !0),
    s = ns(ts(t, "bottom")),
    a = T0(t, "x"),
    l = T0(t, "y");
  return {
    fullSize: n,
    leftAndTop: r.concat(o),
    rightAndBottom: i.concat(l).concat(s).concat(a),
    chartArea: ts(t, "chartArea"),
    vertical: r.concat(i).concat(l),
    horizontal: o.concat(s).concat(a),
  };
}
function R0(e, t, n, r) {
  return Math.max(e[n], t[n]) + Math.max(e[r], t[r]);
}
function Ob(e, t) {
  (e.top = Math.max(e.top, t.top)),
    (e.left = Math.max(e.left, t.left)),
    (e.bottom = Math.max(e.bottom, t.bottom)),
    (e.right = Math.max(e.right, t.right));
}
function kI(e, t, n, r) {
  const { pos: i, box: o } = n,
    s = e.maxPadding;
  if (!de(i)) {
    n.size && (e[i] -= n.size);
    const d = r[n.stack] || { size: 0, count: 1 };
    (d.size = Math.max(d.size, n.horizontal ? o.height : o.width)),
      (n.size = d.size / d.count),
      (e[i] += n.size);
  }
  o.getPadding && Ob(s, o.getPadding());
  const a = Math.max(0, t.outerWidth - R0(s, e, "left", "right")),
    l = Math.max(0, t.outerHeight - R0(s, e, "top", "bottom")),
    c = a !== e.w,
    u = l !== e.h;
  return (
    (e.w = a),
    (e.h = l),
    n.horizontal ? { same: c, other: u } : { same: u, other: c }
  );
}
function _I(e) {
  const t = e.maxPadding;
  function n(r) {
    const i = Math.max(t[r] - e[r], 0);
    return (e[r] += i), i;
  }
  (e.y += n("top")), (e.x += n("left")), n("right"), n("bottom");
}
function PI(e, t) {
  const n = t.maxPadding;
  function r(i) {
    const o = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      i.forEach((s) => {
        o[s] = Math.max(t[s], n[s]);
      }),
      o
    );
  }
  return r(e ? ["left", "right"] : ["top", "bottom"]);
}
function ys(e, t, n, r) {
  const i = [];
  let o, s, a, l, c, u;
  for (o = 0, s = e.length, c = 0; o < s; ++o) {
    (a = e[o]),
      (l = a.box),
      l.update(a.width || t.w, a.height || t.h, PI(a.horizontal, t));
    const { same: d, other: f } = kI(t, n, a, r);
    (c |= d && i.length), (u = u || f), l.fullSize || i.push(a);
  }
  return (c && ys(i, t, n, r)) || u;
}
function ol(e, t, n, r, i) {
  (e.top = n),
    (e.left = t),
    (e.right = t + r),
    (e.bottom = n + i),
    (e.width = r),
    (e.height = i);
}
function O0(e, t, n, r) {
  const i = n.padding;
  let { x: o, y: s } = t;
  for (const a of e) {
    const l = a.box,
      c = r[a.stack] || { count: 1, placed: 0, weight: 1 },
      u = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const d = t.w * u,
        f = c.size || l.height;
      yc(c.start) && (s = c.start),
        l.fullSize
          ? ol(l, i.left, s, n.outerWidth - i.right - i.left, f)
          : ol(l, t.left + c.placed, s, d, f),
        (c.start = s),
        (c.placed += d),
        (s = l.bottom);
    } else {
      const d = t.h * u,
        f = c.size || l.width;
      yc(c.start) && (o = c.start),
        l.fullSize
          ? ol(l, o, i.top, f, n.outerHeight - i.bottom - i.top)
          : ol(l, o, t.top + c.placed, f, d),
        (c.start = o),
        (c.placed += d),
        (o = l.right);
    }
  }
  (t.x = o), (t.y = s);
}
var nn = {
  addBox(e, t) {
    e.boxes || (e.boxes = []),
      (t.fullSize = t.fullSize || !1),
      (t.position = t.position || "top"),
      (t.weight = t.weight || 0),
      (t._layers =
        t._layers ||
        function () {
          return [
            {
              z: 0,
              draw(n) {
                t.draw(n);
              },
            },
          ];
        }),
      e.boxes.push(t);
  },
  removeBox(e, t) {
    const n = e.boxes ? e.boxes.indexOf(t) : -1;
    n !== -1 && e.boxes.splice(n, 1);
  },
  configure(e, t, n) {
    (t.fullSize = n.fullSize), (t.position = n.position), (t.weight = n.weight);
  },
  update(e, t, n, r) {
    if (!e) return;
    const i = vt(e.options.layout.padding),
      o = Math.max(t - i.width, 0),
      s = Math.max(n - i.height, 0),
      a = wI(e.boxes),
      l = a.vertical,
      c = a.horizontal;
    he(e.boxes, (y) => {
      typeof y.beforeLayout == "function" && y.beforeLayout();
    });
    const u =
        l.reduce(
          (y, x) => (x.box.options && x.box.options.display === !1 ? y : y + 1),
          0
        ) || 1,
      d = Object.freeze({
        outerWidth: t,
        outerHeight: n,
        padding: i,
        availableWidth: o,
        availableHeight: s,
        vBoxMaxWidth: o / 2 / u,
        hBoxMaxHeight: s / 2,
      }),
      f = Object.assign({}, i);
    Ob(f, vt(r));
    const p = Object.assign(
        { maxPadding: f, w: o, h: s, x: i.left, y: i.top },
        i
      ),
      h = CI(l.concat(c), d);
    ys(a.fullSize, p, d, h),
      ys(l, p, d, h),
      ys(c, p, d, h) && ys(l, p, d, h),
      _I(p),
      O0(a.leftAndTop, p, d, h),
      (p.x += p.w),
      (p.y += p.h),
      O0(a.rightAndBottom, p, d, h),
      (e.chartArea = {
        left: p.left,
        top: p.top,
        right: p.left + p.w,
        bottom: p.top + p.h,
        height: p.h,
        width: p.w,
      }),
      he(a.chartArea, (y) => {
        const x = y.box;
        Object.assign(x, e.chartArea),
          x.update(p.w, p.h, { left: 0, top: 0, right: 0, bottom: 0 });
      });
  },
};
class Ib {
  acquireContext(t, n) {}
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, n, r) {}
  removeEventListener(t, n, r) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, n, r, i) {
    return (
      (n = Math.max(0, n || t.width)),
      (r = r || t.height),
      { width: n, height: Math.max(0, i ? Math.floor(n / i) : r) }
    );
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {}
}
class EI extends Ib {
  acquireContext(t) {
    return (t && t.getContext && t.getContext("2d")) || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Il = "$chartjs",
  MI = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout",
  },
  I0 = (e) => e === null || e === "";
function TI(e, t) {
  const n = e.style,
    r = e.getAttribute("height"),
    i = e.getAttribute("width");
  if (
    ((e[Il] = {
      initial: {
        height: r,
        width: i,
        style: { display: n.display, height: n.height, width: n.width },
      },
    }),
    (n.display = n.display || "block"),
    (n.boxSizing = n.boxSizing || "border-box"),
    I0(i))
  ) {
    const o = y0(e, "width");
    o !== void 0 && (e.width = o);
  }
  if (I0(r))
    if (e.style.height === "") e.height = e.width / (t || 2);
    else {
      const o = y0(e, "height");
      o !== void 0 && (e.height = o);
    }
  return e;
}
const Ab = jO ? { passive: !0 } : !1;
function RI(e, t, n) {
  e && e.addEventListener(t, n, Ab);
}
function OI(e, t, n) {
  e && e.canvas && e.canvas.removeEventListener(t, n, Ab);
}
function II(e, t) {
  const n = MI[e.type] || e.type,
    { x: r, y: i } = Zr(e, t);
  return {
    type: n,
    chart: t,
    native: e,
    x: r !== void 0 ? r : null,
    y: i !== void 0 ? i : null,
  };
}
function Cc(e, t) {
  for (const n of e) if (n === t || n.contains(t)) return !0;
}
function AI(e, t, n) {
  const r = e.canvas,
    i = new MutationObserver((o) => {
      let s = !1;
      for (const a of o)
        (s = s || Cc(a.addedNodes, r)), (s = s && !Cc(a.removedNodes, r));
      s && n();
    });
  return i.observe(document, { childList: !0, subtree: !0 }), i;
}
function LI(e, t, n) {
  const r = e.canvas,
    i = new MutationObserver((o) => {
      let s = !1;
      for (const a of o)
        (s = s || Cc(a.removedNodes, r)), (s = s && !Cc(a.addedNodes, r));
      s && n();
    });
  return i.observe(document, { childList: !0, subtree: !0 }), i;
}
const da = new Map();
let A0 = 0;
function Lb() {
  const e = window.devicePixelRatio;
  e !== A0 &&
    ((A0 = e),
    da.forEach((t, n) => {
      n.currentDevicePixelRatio !== e && t();
    }));
}
function $I(e, t) {
  da.size || window.addEventListener("resize", Lb), da.set(e, t);
}
function FI(e) {
  da.delete(e), da.size || window.removeEventListener("resize", Lb);
}
function zI(e, t, n) {
  const r = e.canvas,
    i = r && Kh(r);
  if (!i) return;
  const o = mb((a, l) => {
      const c = i.clientWidth;
      n(a, l), c < i.clientWidth && n();
    }, window),
    s = new ResizeObserver((a) => {
      const l = a[0],
        c = l.contentRect.width,
        u = l.contentRect.height;
      (c === 0 && u === 0) || o(c, u);
    });
  return s.observe(i), $I(e, o), s;
}
function Od(e, t, n) {
  n && n.disconnect(), t === "resize" && FI(e);
}
function DI(e, t, n) {
  const r = e.canvas,
    i = mb((o) => {
      e.ctx !== null && n(II(o, e));
    }, e);
  return RI(r, t, i), i;
}
class NI extends Ib {
  acquireContext(t, n) {
    const r = t && t.getContext && t.getContext("2d");
    return r && r.canvas === t ? (TI(t, n), r) : null;
  }
  releaseContext(t) {
    const n = t.canvas;
    if (!n[Il]) return !1;
    const r = n[Il].initial;
    ["height", "width"].forEach((o) => {
      const s = r[o];
      Ee(s) ? n.removeAttribute(o) : n.setAttribute(o, s);
    });
    const i = r.style || {};
    return (
      Object.keys(i).forEach((o) => {
        n.style[o] = i[o];
      }),
      (n.width = n.width),
      delete n[Il],
      !0
    );
  }
  addEventListener(t, n, r) {
    this.removeEventListener(t, n);
    const i = t.$proxies || (t.$proxies = {}),
      s = { attach: AI, detach: LI, resize: zI }[n] || DI;
    i[n] = s(t, n, r);
  }
  removeEventListener(t, n) {
    const r = t.$proxies || (t.$proxies = {}),
      i = r[n];
    if (!i) return;
    (({ attach: Od, detach: Od, resize: Od })[n] || OI)(t, n, i),
      (r[n] = void 0);
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, n, r, i) {
    return BO(t, n, r, i);
  }
  isAttached(t) {
    const n = t && Kh(t);
    return !!(n && n.isConnected);
  }
}
function BI(e) {
  return !Gh() || (typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas)
    ? EI
    : NI;
}
class sr {
  constructor() {
    Y(this, "x");
    Y(this, "y");
    Y(this, "active", !1);
    Y(this, "options");
    Y(this, "$animations");
  }
  tooltipPosition(t) {
    const { x: n, y: r } = this.getProps(["x", "y"], t);
    return { x: n, y: r };
  }
  hasValue() {
    return ua(this.x) && ua(this.y);
  }
  getProps(t, n) {
    const r = this.$animations;
    if (!n || !r) return this;
    const i = {};
    return (
      t.forEach((o) => {
        i[o] = r[o] && r[o].active() ? r[o]._to : this[o];
      }),
      i
    );
  }
}
Y(sr, "defaults", {}), Y(sr, "defaultRoutes");
function jI(e, t) {
  const n = e.options.ticks,
    r = WI(e),
    i = Math.min(n.maxTicksLimit || r, r),
    o = n.major.enabled ? UI(t) : [],
    s = o.length,
    a = o[0],
    l = o[s - 1],
    c = [];
  if (s > i) return VI(t, c, o, s / i), c;
  const u = HI(o, t, i);
  if (s > 0) {
    let d, f;
    const p = s > 1 ? Math.round((l - a) / (s - 1)) : null;
    for (sl(t, c, u, Ee(p) ? 0 : a - p, a), d = 0, f = s - 1; d < f; d++)
      sl(t, c, u, o[d], o[d + 1]);
    return sl(t, c, u, l, Ee(p) ? t.length : l + p), c;
  }
  return sl(t, c, u), c;
}
function WI(e) {
  const t = e.options.offset,
    n = e._tickSize(),
    r = e._length / n + (t ? 0 : 1),
    i = e._maxLength / n;
  return Math.floor(Math.min(r, i));
}
function HI(e, t, n) {
  const r = GI(e),
    i = t.length / n;
  if (!r) return Math.max(i, 1);
  const o = NR(r);
  for (let s = 0, a = o.length - 1; s < a; s++) {
    const l = o[s];
    if (l > i) return l;
  }
  return Math.max(i, 1);
}
function UI(e) {
  const t = [];
  let n, r;
  for (n = 0, r = e.length; n < r; n++) e[n].major && t.push(n);
  return t;
}
function VI(e, t, n, r) {
  let i = 0,
    o = n[0],
    s;
  for (r = Math.ceil(r), s = 0; s < e.length; s++)
    s === o && (t.push(e[s]), i++, (o = n[i * r]));
}
function sl(e, t, n, r, i) {
  const o = ee(r, 0),
    s = Math.min(ee(i, e.length), e.length);
  let a = 0,
    l,
    c,
    u;
  for (
    n = Math.ceil(n), i && ((l = i - r), (n = l / Math.floor(l / n))), u = o;
    u < 0;

  )
    a++, (u = Math.round(o + a * n));
  for (c = Math.max(o, 0); c < s; c++)
    c === u && (t.push(e[c]), a++, (u = Math.round(o + a * n)));
}
function GI(e) {
  const t = e.length;
  let n, r;
  if (t < 2) return !1;
  for (r = e[0], n = 1; n < t; ++n) if (e[n] - e[n - 1] !== r) return !1;
  return r;
}
const KI = (e) => (e === "left" ? "right" : e === "right" ? "left" : e),
  L0 = (e, t, n) => (t === "top" || t === "left" ? e[t] + n : e[t] - n),
  $0 = (e, t) => Math.min(t || e, e);
function F0(e, t) {
  const n = [],
    r = e.length / t,
    i = e.length;
  let o = 0;
  for (; o < i; o += r) n.push(e[Math.floor(o)]);
  return n;
}
function YI(e, t, n) {
  const r = e.ticks.length,
    i = Math.min(t, r - 1),
    o = e._startPixel,
    s = e._endPixel,
    a = 1e-6;
  let l = e.getPixelForTick(i),
    c;
  if (
    !(
      n &&
      (r === 1
        ? (c = Math.max(l - o, s - l))
        : t === 0
        ? (c = (e.getPixelForTick(1) - l) / 2)
        : (c = (l - e.getPixelForTick(i - 1)) / 2),
      (l += i < t ? c : -c),
      l < o - a || l > s + a)
    )
  )
    return l;
}
function XI(e, t) {
  he(e, (n) => {
    const r = n.gc,
      i = r.length / 2;
    let o;
    if (i > t) {
      for (o = 0; o < i; ++o) delete n.data[r[o]];
      r.splice(0, i);
    }
  });
}
function rs(e) {
  return e.drawTicks ? e.tickLength : 0;
}
function z0(e, t) {
  if (!e.display) return 0;
  const n = qe(e.font, t),
    r = vt(e.padding);
  return (De(e.text) ? e.text.length : 1) * n.lineHeight + r.height;
}
function QI(e, t) {
  return jr(e, { scale: t, type: "scale" });
}
function qI(e, t, n) {
  return jr(e, { tick: n, index: t, type: "tick" });
}
function JI(e, t, n) {
  let r = Dh(e);
  return ((n && t !== "right") || (!n && t === "right")) && (r = KI(r)), r;
}
function ZI(e, t, n, r) {
  const { top: i, left: o, bottom: s, right: a, chart: l } = e,
    { chartArea: c, scales: u } = l;
  let d = 0,
    f,
    p,
    h;
  const y = s - i,
    x = a - o;
  if (e.isHorizontal()) {
    if (((p = gt(r, o, a)), de(n))) {
      const g = Object.keys(n)[0],
        v = n[g];
      h = u[g].getPixelForValue(v) + y - t;
    } else
      n === "center" ? (h = (c.bottom + c.top) / 2 + y - t) : (h = L0(e, n, t));
    f = a - o;
  } else {
    if (de(n)) {
      const g = Object.keys(n)[0],
        v = n[g];
      p = u[g].getPixelForValue(v) - x + t;
    } else
      n === "center" ? (p = (c.left + c.right) / 2 - x + t) : (p = L0(e, n, t));
    (h = gt(r, s, i)), (d = n === "left" ? -Dt : Dt);
  }
  return { titleX: p, titleY: h, maxWidth: f, rotation: d };
}
class wi extends sr {
  constructor(t) {
    super(),
      (this.id = t.id),
      (this.type = t.type),
      (this.options = void 0),
      (this.ctx = t.ctx),
      (this.chart = t.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0);
  }
  init(t) {
    (this.options = t.setContext(this.getContext())),
      (this.axis = t.axis),
      (this._userMin = this.parse(t.min)),
      (this._userMax = this.parse(t.max)),
      (this._suggestedMin = this.parse(t.suggestedMin)),
      (this._suggestedMax = this.parse(t.suggestedMax));
  }
  parse(t, n) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: n, _suggestedMin: r, _suggestedMax: i } = this;
    return (
      (t = Lt(t, Number.POSITIVE_INFINITY)),
      (n = Lt(n, Number.NEGATIVE_INFINITY)),
      (r = Lt(r, Number.POSITIVE_INFINITY)),
      (i = Lt(i, Number.NEGATIVE_INFINITY)),
      { min: Lt(t, r), max: Lt(n, i), minDefined: Ze(t), maxDefined: Ze(n) }
    );
  }
  getMinMax(t) {
    let { min: n, max: r, minDefined: i, maxDefined: o } = this.getUserBounds(),
      s;
    if (i && o) return { min: n, max: r };
    const a = this.getMatchingVisibleMetas();
    for (let l = 0, c = a.length; l < c; ++l)
      (s = a[l].controller.getMinMax(this, t)),
        i || (n = Math.min(n, s.min)),
        o || (r = Math.max(r, s.max));
    return (
      (n = o && n > r ? r : n),
      (r = i && n > r ? n : r),
      { min: Lt(n, Lt(r, n)), max: Lt(r, Lt(n, r)) }
    );
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return (
      this.options.labels ||
      (this.isHorizontal() ? t.xLabels : t.yLabels) ||
      t.labels ||
      []
    );
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    (this._cache = {}), (this._dataLimitsCached = !1);
  }
  beforeUpdate() {
    Ce(this.options.beforeUpdate, [this]);
  }
  update(t, n, r) {
    const { beginAtZero: i, grace: o, ticks: s } = this.options,
      a = s.sampleSize;
    this.beforeUpdate(),
      (this.maxWidth = t),
      (this.maxHeight = n),
      (this._margins = r =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, r)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + r.left + r.right
        : this.height + r.top + r.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = vO(this, o, i)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? F0(this.ticks, a) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      s.display &&
        (s.autoSkip || s.source === "auto") &&
        ((this.ticks = jI(this, this.ticks)),
        (this._labelSizes = null),
        this.afterAutoSkip()),
      l && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse,
      n,
      r;
    this.isHorizontal()
      ? ((n = this.left), (r = this.right))
      : ((n = this.top), (r = this.bottom), (t = !t)),
      (this._startPixel = n),
      (this._endPixel = r),
      (this._reversePixels = t),
      (this._length = r - n),
      (this._alignToPixels = this.options.alignToPixels);
  }
  afterUpdate() {
    Ce(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    Ce(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = 0),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = 0),
        (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0);
  }
  afterSetDimensions() {
    Ce(this.options.afterSetDimensions, [this]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), Ce(this.options[t], [this]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    Ce(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(t) {
    const n = this.options.ticks;
    let r, i, o;
    for (r = 0, i = t.length; r < i; r++)
      (o = t[r]), (o.label = Ce(n.callback, [o.value, r, t], this));
  }
  afterTickToLabelConversion() {
    Ce(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    Ce(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const t = this.options,
      n = t.ticks,
      r = $0(this.ticks.length, t.ticks.maxTicksLimit),
      i = n.minRotation || 0,
      o = n.maxRotation;
    let s = i,
      a,
      l,
      c;
    if (
      !this._isVisible() ||
      !n.display ||
      i >= o ||
      r <= 1 ||
      !this.isHorizontal()
    ) {
      this.labelRotation = i;
      return;
    }
    const u = this._getLabelSizes(),
      d = u.widest.width,
      f = u.highest.height,
      p = tn(this.chart.width - d, 0, this.maxWidth);
    (a = t.offset ? this.maxWidth / r : p / (r - 1)),
      d + 6 > a &&
        ((a = p / (r - (t.offset ? 0.5 : 1))),
        (l =
          this.maxHeight -
          rs(t.grid) -
          n.padding -
          z0(t.title, this.chart.options.font)),
        (c = Math.sqrt(d * d + f * f)),
        (s = Fh(
          Math.min(
            Math.asin(tn((u.highest.height + 6) / a, -1, 1)),
            Math.asin(tn(l / c, -1, 1)) - Math.asin(tn(f / c, -1, 1))
          )
        )),
        (s = Math.max(i, Math.min(o, s)))),
      (this.labelRotation = s);
  }
  afterCalculateLabelRotation() {
    Ce(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    Ce(this.options.beforeFit, [this]);
  }
  fit() {
    const t = { width: 0, height: 0 },
      {
        chart: n,
        options: { ticks: r, title: i, grid: o },
      } = this,
      s = this._isVisible(),
      a = this.isHorizontal();
    if (s) {
      const l = z0(i, n.options.font);
      if (
        (a
          ? ((t.width = this.maxWidth), (t.height = rs(o) + l))
          : ((t.height = this.maxHeight), (t.width = rs(o) + l)),
        r.display && this.ticks.length)
      ) {
        const {
            first: c,
            last: u,
            widest: d,
            highest: f,
          } = this._getLabelSizes(),
          p = r.padding * 2,
          h = br(this.labelRotation),
          y = Math.cos(h),
          x = Math.sin(h);
        if (a) {
          const g = r.mirror ? 0 : x * d.width + y * f.height;
          t.height = Math.min(this.maxHeight, t.height + g + p);
        } else {
          const g = r.mirror ? 0 : y * d.width + x * f.height;
          t.width = Math.min(this.maxWidth, t.width + g + p);
        }
        this._calculatePadding(c, u, x, y);
      }
    }
    this._handleMargins(),
      a
        ? ((this.width = this._length =
            n.width - this._margins.left - this._margins.right),
          (this.height = t.height))
        : ((this.width = t.width),
          (this.height = this._length =
            n.height - this._margins.top - this._margins.bottom));
  }
  _calculatePadding(t, n, r, i) {
    const {
        ticks: { align: o, padding: s },
        position: a,
      } = this.options,
      l = this.labelRotation !== 0,
      c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const u = this.getPixelForTick(0) - this.left,
        d = this.right - this.getPixelForTick(this.ticks.length - 1);
      let f = 0,
        p = 0;
      l
        ? c
          ? ((f = i * t.width), (p = r * n.height))
          : ((f = r * t.height), (p = i * n.width))
        : o === "start"
        ? (p = n.width)
        : o === "end"
        ? (f = t.width)
        : o !== "inner" && ((f = t.width / 2), (p = n.width / 2)),
        (this.paddingLeft = Math.max(
          ((f - u + s) * this.width) / (this.width - u),
          0
        )),
        (this.paddingRight = Math.max(
          ((p - d + s) * this.width) / (this.width - d),
          0
        ));
    } else {
      let u = n.height / 2,
        d = t.height / 2;
      o === "start"
        ? ((u = 0), (d = t.height))
        : o === "end" && ((u = n.height), (d = 0)),
        (this.paddingTop = u + s),
        (this.paddingBottom = d + s);
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(
        this.paddingBottom,
        this._margins.bottom
      )));
  }
  afterFit() {
    Ce(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: t, position: n } = this.options;
    return n === "top" || n === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let n, r;
    for (n = 0, r = t.length; n < r; n++)
      Ee(t[n].label) && (t.splice(n, 1), r--, n--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const n = this.options.ticks.sampleSize;
      let r = this.ticks;
      n < r.length && (r = F0(r, n)),
        (this._labelSizes = t =
          this._computeLabelSizes(
            r,
            r.length,
            this.options.ticks.maxTicksLimit
          ));
    }
    return t;
  }
  _computeLabelSizes(t, n, r) {
    const { ctx: i, _longestTextCache: o } = this,
      s = [],
      a = [],
      l = Math.floor(n / $0(n, r));
    let c = 0,
      u = 0,
      d,
      f,
      p,
      h,
      y,
      x,
      g,
      v,
      m,
      S,
      w;
    for (d = 0; d < n; d += l) {
      if (
        ((h = t[d].label),
        (y = this._resolveTickFontOptions(d)),
        (i.font = x = y.string),
        (g = o[x] = o[x] || { data: {}, gc: [] }),
        (v = y.lineHeight),
        (m = S = 0),
        !Ee(h) && !De(h))
      )
        (m = xc(i, g.data, g.gc, m, h)), (S = v);
      else if (De(h))
        for (f = 0, p = h.length; f < p; ++f)
          (w = h[f]),
            !Ee(w) && !De(w) && ((m = xc(i, g.data, g.gc, m, w)), (S += v));
      s.push(m), a.push(S), (c = Math.max(m, c)), (u = Math.max(S, u));
    }
    XI(o, n);
    const _ = s.indexOf(c),
      k = a.indexOf(u),
      M = (b) => ({ width: s[b] || 0, height: a[b] || 0 });
    return {
      first: M(0),
      last: M(n - 1),
      widest: M(_),
      highest: M(k),
      widths: s,
      heights: a,
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, n) {
    return NaN;
  }
  getValueForPixel(t) {}
  getPixelForTick(t) {
    const n = this.ticks;
    return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const n = this._startPixel + t * this._length;
    return HR(this._alignToPixels ? Ur(this.chart, n, 0) : n);
  }
  getDecimalForPixel(t) {
    const n = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - n : n;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: n } = this;
    return t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0;
  }
  getContext(t) {
    const n = this.ticks || [];
    if (t >= 0 && t < n.length) {
      const r = n[t];
      return r.$context || (r.$context = qI(this.getContext(), t, r));
    }
    return this.$context || (this.$context = QI(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks,
      n = br(this.labelRotation),
      r = Math.abs(Math.cos(n)),
      i = Math.abs(Math.sin(n)),
      o = this._getLabelSizes(),
      s = t.autoSkipPadding || 0,
      a = o ? o.widest.width + s : 0,
      l = o ? o.highest.height + s : 0;
    return this.isHorizontal()
      ? l * r > a * i
        ? a / r
        : l / i
      : l * i < a * r
      ? l / r
      : a / i;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const n = this.axis,
      r = this.chart,
      i = this.options,
      { grid: o, position: s, border: a } = i,
      l = o.offset,
      c = this.isHorizontal(),
      d = this.ticks.length + (l ? 1 : 0),
      f = rs(o),
      p = [],
      h = a.setContext(this.getContext()),
      y = h.display ? h.width : 0,
      x = y / 2,
      g = function (A) {
        return Ur(r, A, y);
      };
    let v, m, S, w, _, k, M, b, E, R, I, z;
    if (s === "top")
      (v = g(this.bottom)),
        (k = this.bottom - f),
        (b = v - x),
        (R = g(t.top) + x),
        (z = t.bottom);
    else if (s === "bottom")
      (v = g(this.top)),
        (R = t.top),
        (z = g(t.bottom) - x),
        (k = v + x),
        (b = this.top + f);
    else if (s === "left")
      (v = g(this.right)),
        (_ = this.right - f),
        (M = v - x),
        (E = g(t.left) + x),
        (I = t.right);
    else if (s === "right")
      (v = g(this.left)),
        (E = t.left),
        (I = g(t.right) - x),
        (_ = v + x),
        (M = this.left + f);
    else if (n === "x") {
      if (s === "center") v = g((t.top + t.bottom) / 2 + 0.5);
      else if (de(s)) {
        const A = Object.keys(s)[0],
          N = s[A];
        v = g(this.chart.scales[A].getPixelForValue(N));
      }
      (R = t.top), (z = t.bottom), (k = v + x), (b = k + f);
    } else if (n === "y") {
      if (s === "center") v = g((t.left + t.right) / 2);
      else if (de(s)) {
        const A = Object.keys(s)[0],
          N = s[A];
        v = g(this.chart.scales[A].getPixelForValue(N));
      }
      (_ = v - x), (M = _ - f), (E = t.left), (I = t.right);
    }
    const D = ee(i.ticks.maxTicksLimit, d),
      L = Math.max(1, Math.ceil(d / D));
    for (m = 0; m < d; m += L) {
      const A = this.getContext(m),
        N = o.setContext(A),
        T = a.setContext(A),
        $ = N.lineWidth,
        B = N.color,
        H = T.dash || [],
        Q = T.dashOffset,
        q = N.tickWidth,
        G = N.tickColor,
        le = N.tickBorderDash || [],
        re = N.tickBorderDashOffset;
      (S = YI(this, m, l)),
        S !== void 0 &&
          ((w = Ur(r, S, $)),
          c ? (_ = M = E = I = w) : (k = b = R = z = w),
          p.push({
            tx1: _,
            ty1: k,
            tx2: M,
            ty2: b,
            x1: E,
            y1: R,
            x2: I,
            y2: z,
            width: $,
            color: B,
            borderDash: H,
            borderDashOffset: Q,
            tickWidth: q,
            tickColor: G,
            tickBorderDash: le,
            tickBorderDashOffset: re,
          }));
    }
    return (this._ticksLength = d), (this._borderValue = v), p;
  }
  _computeLabelItems(t) {
    const n = this.axis,
      r = this.options,
      { position: i, ticks: o } = r,
      s = this.isHorizontal(),
      a = this.ticks,
      { align: l, crossAlign: c, padding: u, mirror: d } = o,
      f = rs(r.grid),
      p = f + u,
      h = d ? -u : p,
      y = -br(this.labelRotation),
      x = [];
    let g,
      v,
      m,
      S,
      w,
      _,
      k,
      M,
      b,
      E,
      R,
      I,
      z = "middle";
    if (i === "top")
      (_ = this.bottom - h), (k = this._getXAxisLabelAlignment());
    else if (i === "bottom")
      (_ = this.top + h), (k = this._getXAxisLabelAlignment());
    else if (i === "left") {
      const L = this._getYAxisLabelAlignment(f);
      (k = L.textAlign), (w = L.x);
    } else if (i === "right") {
      const L = this._getYAxisLabelAlignment(f);
      (k = L.textAlign), (w = L.x);
    } else if (n === "x") {
      if (i === "center") _ = (t.top + t.bottom) / 2 + p;
      else if (de(i)) {
        const L = Object.keys(i)[0],
          A = i[L];
        _ = this.chart.scales[L].getPixelForValue(A) + p;
      }
      k = this._getXAxisLabelAlignment();
    } else if (n === "y") {
      if (i === "center") w = (t.left + t.right) / 2 - p;
      else if (de(i)) {
        const L = Object.keys(i)[0],
          A = i[L];
        w = this.chart.scales[L].getPixelForValue(A);
      }
      k = this._getYAxisLabelAlignment(f).textAlign;
    }
    n === "y" && (l === "start" ? (z = "top") : l === "end" && (z = "bottom"));
    const D = this._getLabelSizes();
    for (g = 0, v = a.length; g < v; ++g) {
      (m = a[g]), (S = m.label);
      const L = o.setContext(this.getContext(g));
      (M = this.getPixelForTick(g) + o.labelOffset),
        (b = this._resolveTickFontOptions(g)),
        (E = b.lineHeight),
        (R = De(S) ? S.length : 1);
      const A = R / 2,
        N = L.color,
        T = L.textStrokeColor,
        $ = L.textStrokeWidth;
      let B = k;
      s
        ? ((w = M),
          k === "inner" &&
            (g === v - 1
              ? (B = this.options.reverse ? "left" : "right")
              : g === 0
              ? (B = this.options.reverse ? "right" : "left")
              : (B = "center")),
          i === "top"
            ? c === "near" || y !== 0
              ? (I = -R * E + E / 2)
              : c === "center"
              ? (I = -D.highest.height / 2 - A * E + E)
              : (I = -D.highest.height + E / 2)
            : c === "near" || y !== 0
            ? (I = E / 2)
            : c === "center"
            ? (I = D.highest.height / 2 - A * E)
            : (I = D.highest.height - R * E),
          d && (I *= -1),
          y !== 0 && !L.showLabelBackdrop && (w += (E / 2) * Math.sin(y)))
        : ((_ = M), (I = ((1 - R) * E) / 2));
      let H;
      if (L.showLabelBackdrop) {
        const Q = vt(L.backdropPadding),
          q = D.heights[g],
          G = D.widths[g];
        let le = I - Q.top,
          re = 0 - Q.left;
        switch (z) {
          case "middle":
            le -= q / 2;
            break;
          case "bottom":
            le -= q;
            break;
        }
        switch (k) {
          case "center":
            re -= G / 2;
            break;
          case "right":
            re -= G;
            break;
          case "inner":
            g === v - 1 ? (re -= G) : g > 0 && (re -= G / 2);
            break;
        }
        H = {
          left: re,
          top: le,
          width: G + Q.width,
          height: q + Q.height,
          color: L.backdropColor,
        };
      }
      x.push({
        label: S,
        font: b,
        textOffset: I,
        options: {
          rotation: y,
          color: N,
          strokeColor: T,
          strokeWidth: $,
          textAlign: B,
          textBaseline: z,
          translation: [w, _],
          backdrop: H,
        },
      });
    }
    return x;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: n } = this.options;
    if (-br(this.labelRotation)) return t === "top" ? "left" : "right";
    let i = "center";
    return (
      n.align === "start"
        ? (i = "left")
        : n.align === "end"
        ? (i = "right")
        : n.align === "inner" && (i = "inner"),
      i
    );
  }
  _getYAxisLabelAlignment(t) {
    const {
        position: n,
        ticks: { crossAlign: r, mirror: i, padding: o },
      } = this.options,
      s = this._getLabelSizes(),
      a = t + o,
      l = s.widest.width;
    let c, u;
    return (
      n === "left"
        ? i
          ? ((u = this.right + o),
            r === "near"
              ? (c = "left")
              : r === "center"
              ? ((c = "center"), (u += l / 2))
              : ((c = "right"), (u += l)))
          : ((u = this.right - a),
            r === "near"
              ? (c = "right")
              : r === "center"
              ? ((c = "center"), (u -= l / 2))
              : ((c = "left"), (u = this.left)))
        : n === "right"
        ? i
          ? ((u = this.left + o),
            r === "near"
              ? (c = "right")
              : r === "center"
              ? ((c = "center"), (u -= l / 2))
              : ((c = "left"), (u -= l)))
          : ((u = this.left + a),
            r === "near"
              ? (c = "left")
              : r === "center"
              ? ((c = "center"), (u += l / 2))
              : ((c = "right"), (u = this.right)))
        : (c = "right"),
      { textAlign: c, x: u }
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const t = this.chart,
      n = this.options.position;
    if (n === "left" || n === "right")
      return { top: 0, left: this.left, bottom: t.height, right: this.right };
    if (n === "top" || n === "bottom")
      return { top: this.top, left: 0, bottom: this.bottom, right: t.width };
  }
  drawBackground() {
    const {
      ctx: t,
      options: { backgroundColor: n },
      left: r,
      top: i,
      width: o,
      height: s,
    } = this;
    n && (t.save(), (t.fillStyle = n), t.fillRect(r, i, o, s), t.restore());
  }
  getLineWidthForValue(t) {
    const n = this.options.grid;
    if (!this._isVisible() || !n.display) return 0;
    const i = this.ticks.findIndex((o) => o.value === t);
    return i >= 0 ? n.setContext(this.getContext(i)).lineWidth : 0;
  }
  drawGrid(t) {
    const n = this.options.grid,
      r = this.ctx,
      i =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(t));
    let o, s;
    const a = (l, c, u) => {
      !u.width ||
        !u.color ||
        (r.save(),
        (r.lineWidth = u.width),
        (r.strokeStyle = u.color),
        r.setLineDash(u.borderDash || []),
        (r.lineDashOffset = u.borderDashOffset),
        r.beginPath(),
        r.moveTo(l.x, l.y),
        r.lineTo(c.x, c.y),
        r.stroke(),
        r.restore());
    };
    if (n.display)
      for (o = 0, s = i.length; o < s; ++o) {
        const l = i[o];
        n.drawOnChartArea && a({ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }, l),
          n.drawTicks &&
            a(
              { x: l.tx1, y: l.ty1 },
              { x: l.tx2, y: l.ty2 },
              {
                color: l.tickColor,
                width: l.tickWidth,
                borderDash: l.tickBorderDash,
                borderDashOffset: l.tickBorderDashOffset,
              }
            );
      }
  }
  drawBorder() {
    const {
        chart: t,
        ctx: n,
        options: { border: r, grid: i },
      } = this,
      o = r.setContext(this.getContext()),
      s = r.display ? o.width : 0;
    if (!s) return;
    const a = i.setContext(this.getContext(0)).lineWidth,
      l = this._borderValue;
    let c, u, d, f;
    this.isHorizontal()
      ? ((c = Ur(t, this.left, s) - s / 2),
        (u = Ur(t, this.right, a) + a / 2),
        (d = f = l))
      : ((d = Ur(t, this.top, s) - s / 2),
        (f = Ur(t, this.bottom, a) + a / 2),
        (c = u = l)),
      n.save(),
      (n.lineWidth = o.width),
      (n.strokeStyle = o.color),
      n.beginPath(),
      n.moveTo(c, d),
      n.lineTo(u, f),
      n.stroke(),
      n.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display) return;
    const r = this.ctx,
      i = this._computeLabelArea();
    i && jh(r, i);
    const o = this.getLabelItems(t);
    for (const s of o) {
      const a = s.options,
        l = s.font,
        c = s.label,
        u = s.textOffset;
      vi(r, c, 0, u, l, a);
    }
    i && Wh(r);
  }
  drawTitle() {
    const {
      ctx: t,
      options: { position: n, title: r, reverse: i },
    } = this;
    if (!r.display) return;
    const o = qe(r.font),
      s = vt(r.padding),
      a = r.align;
    let l = o.lineHeight / 2;
    n === "bottom" || n === "center" || de(n)
      ? ((l += s.bottom),
        De(r.text) && (l += o.lineHeight * (r.text.length - 1)))
      : (l += s.top);
    const {
      titleX: c,
      titleY: u,
      maxWidth: d,
      rotation: f,
    } = ZI(this, l, n, a);
    vi(t, r.text, 0, 0, o, {
      color: r.color,
      maxWidth: d,
      rotation: f,
      textAlign: JI(a, n, i),
      textBaseline: "middle",
      translation: [c, u],
    });
  }
  draw(t) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(t),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(t));
  }
  _layers() {
    const t = this.options,
      n = (t.ticks && t.ticks.z) || 0,
      r = ee(t.grid && t.grid.z, -1),
      i = ee(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== wi.prototype.draw
      ? [
          {
            z: n,
            draw: (o) => {
              this.draw(o);
            },
          },
        ]
      : [
          {
            z: r,
            draw: (o) => {
              this.drawBackground(), this.drawGrid(o), this.drawTitle();
            },
          },
          {
            z: i,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: n,
            draw: (o) => {
              this.drawLabels(o);
            },
          },
        ];
  }
  getMatchingVisibleMetas(t) {
    const n = this.chart.getSortedVisibleDatasetMetas(),
      r = this.axis + "AxisID",
      i = [];
    let o, s;
    for (o = 0, s = n.length; o < s; ++o) {
      const a = n[o];
      a[r] === this.id && (!t || a.type === t) && i.push(a);
    }
    return i;
  }
  _resolveTickFontOptions(t) {
    const n = this.options.ticks.setContext(this.getContext(t));
    return qe(n.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class al {
  constructor(t, n, r) {
    (this.type = t),
      (this.scope = n),
      (this.override = r),
      (this.items = Object.create(null));
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(
      this.type.prototype,
      t.prototype
    );
  }
  register(t) {
    const n = Object.getPrototypeOf(t);
    let r;
    n5(n) && (r = this.register(n));
    const i = this.items,
      o = t.id,
      s = this.scope + "." + o;
    if (!o) throw new Error("class does not have id: " + t);
    return (
      o in i ||
        ((i[o] = t),
        e5(t, s, r),
        this.override && Ne.override(t.id, t.overrides)),
      s
    );
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const n = this.items,
      r = t.id,
      i = this.scope;
    r in n && delete n[r],
      i && r in Ne[i] && (delete Ne[i][r], this.override && delete yi[r]);
  }
}
function e5(e, t, n) {
  const r = ca(Object.create(null), [
    n ? Ne.get(n) : {},
    Ne.get(t),
    e.defaults,
  ]);
  Ne.set(t, r),
    e.defaultRoutes && t5(t, e.defaultRoutes),
    e.descriptors && Ne.describe(t, e.descriptors);
}
function t5(e, t) {
  Object.keys(t).forEach((n) => {
    const r = n.split("."),
      i = r.pop(),
      o = [e].concat(r).join("."),
      s = t[n].split("."),
      a = s.pop(),
      l = s.join(".");
    Ne.route(o, i, l, a);
  });
}
function n5(e) {
  return "id" in e && "defaults" in e;
}
class r5 {
  constructor() {
    (this.controllers = new al($s, "datasets", !0)),
      (this.elements = new al(sr, "elements")),
      (this.plugins = new al(Object, "plugins")),
      (this.scales = new al(wi, "scales")),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]);
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, n, r) {
    [...n].forEach((i) => {
      const o = r || this._getRegistryForType(i);
      r || o.isForType(i) || (o === this.plugins && i.id)
        ? this._exec(t, o, i)
        : he(i, (s) => {
            const a = r || this._getRegistryForType(s);
            this._exec(t, a, s);
          });
    });
  }
  _exec(t, n, r) {
    const i = $h(t);
    Ce(r["before" + i], [], r), n[t](r), Ce(r["after" + i], [], r);
  }
  _getRegistryForType(t) {
    for (let n = 0; n < this._typedRegistries.length; n++) {
      const r = this._typedRegistries[n];
      if (r.isForType(t)) return r;
    }
    return this.plugins;
  }
  _get(t, n, r) {
    const i = n.get(t);
    if (i === void 0)
      throw new Error('"' + t + '" is not a registered ' + r + ".");
    return i;
  }
}
var Tn = new r5();
class i5 {
  constructor() {
    this._init = [];
  }
  notify(t, n, r, i) {
    n === "beforeInit" &&
      ((this._init = this._createDescriptors(t, !0)),
      this._notify(this._init, t, "install"));
    const o = i ? this._descriptors(t).filter(i) : this._descriptors(t),
      s = this._notify(o, t, n, r);
    return (
      n === "afterDestroy" &&
        (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")),
      s
    );
  }
  _notify(t, n, r, i) {
    i = i || {};
    for (const o of t) {
      const s = o.plugin,
        a = s[r],
        l = [n, i, o.options];
      if (Ce(a, l, s) === !1 && i.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    Ee(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(t) {
    if (this._cache) return this._cache;
    const n = (this._cache = this._createDescriptors(t));
    return this._notifyStateChanges(t), n;
  }
  _createDescriptors(t, n) {
    const r = t && t.config,
      i = ee(r.options && r.options.plugins, {}),
      o = o5(r);
    return i === !1 && !n ? [] : a5(t, o, i, n);
  }
  _notifyStateChanges(t) {
    const n = this._oldCache || [],
      r = this._cache,
      i = (o, s) =>
        o.filter((a) => !s.some((l) => a.plugin.id === l.plugin.id));
    this._notify(i(n, r), t, "stop"), this._notify(i(r, n), t, "start");
  }
}
function o5(e) {
  const t = {},
    n = [],
    r = Object.keys(Tn.plugins.items);
  for (let o = 0; o < r.length; o++) n.push(Tn.getPlugin(r[o]));
  const i = e.plugins || [];
  for (let o = 0; o < i.length; o++) {
    const s = i[o];
    n.indexOf(s) === -1 && (n.push(s), (t[s.id] = !0));
  }
  return { plugins: n, localIds: t };
}
function s5(e, t) {
  return !t && e === !1 ? null : e === !0 ? {} : e;
}
function a5(e, { plugins: t, localIds: n }, r, i) {
  const o = [],
    s = e.getContext();
  for (const a of t) {
    const l = a.id,
      c = s5(r[l], i);
    c !== null &&
      o.push({
        plugin: a,
        options: l5(e.config, { plugin: a, local: n[l] }, c, s),
      });
  }
  return o;
}
function l5(e, { plugin: t, local: n }, r, i) {
  const o = e.pluginScopeKeys(t),
    s = e.getOptionScopes(r, o);
  return (
    n && t.defaults && s.push(t.defaults),
    e.createResolver(s, i, [""], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function Yf(e, t) {
  const n = Ne.datasets[e] || {};
  return (
    ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || n.indexAxis || "x"
  );
}
function c5(e, t) {
  let n = e;
  return (
    e === "_index_" ? (n = t) : e === "_value_" && (n = t === "x" ? "y" : "x"),
    n
  );
}
function u5(e, t) {
  return e === t ? "_index_" : "_value_";
}
function D0(e) {
  if (e === "x" || e === "y" || e === "r") return e;
}
function d5(e) {
  if (e === "top" || e === "bottom") return "x";
  if (e === "left" || e === "right") return "y";
}
function Xf(e, ...t) {
  if (D0(e)) return e;
  for (const n of t) {
    const r =
      n.axis || d5(n.position) || (e.length > 1 && D0(e[0].toLowerCase()));
    if (r) return r;
  }
  throw new Error(
    `Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`
  );
}
function N0(e, t, n) {
  if (n[t + "AxisID"] === e) return { axis: t };
}
function f5(e, t) {
  if (t.data && t.data.datasets) {
    const n = t.data.datasets.filter((r) => r.xAxisID === e || r.yAxisID === e);
    if (n.length) return N0(e, "x", n[0]) || N0(e, "y", n[0]);
  }
  return {};
}
function p5(e, t) {
  const n = yi[e.type] || { scales: {} },
    r = t.scales || {},
    i = Yf(e.type, t),
    o = Object.create(null);
  return (
    Object.keys(r).forEach((s) => {
      const a = r[s];
      if (!de(a))
        return console.error(`Invalid scale configuration for scale: ${s}`);
      if (a._proxy)
        return console.warn(
          `Ignoring resolver passed as options for scale: ${s}`
        );
      const l = Xf(s, a, f5(s, e), Ne.scales[a.type]),
        c = u5(l, i),
        u = n.scales || {};
      o[s] = Os(Object.create(null), [{ axis: l }, a, u[l], u[c]]);
    }),
    e.data.datasets.forEach((s) => {
      const a = s.type || e.type,
        l = s.indexAxis || Yf(a, t),
        u = (yi[a] || {}).scales || {};
      Object.keys(u).forEach((d) => {
        const f = c5(d, l),
          p = s[f + "AxisID"] || f;
        (o[p] = o[p] || Object.create(null)),
          Os(o[p], [{ axis: f }, r[p], u[d]]);
      });
    }),
    Object.keys(o).forEach((s) => {
      const a = o[s];
      Os(a, [Ne.scales[a.type], Ne.scale]);
    }),
    o
  );
}
function $b(e) {
  const t = e.options || (e.options = {});
  (t.plugins = ee(t.plugins, {})), (t.scales = p5(e, t));
}
function Fb(e) {
  return (
    (e = e || {}),
    (e.datasets = e.datasets || []),
    (e.labels = e.labels || []),
    e
  );
}
function h5(e) {
  return (e = e || {}), (e.data = Fb(e.data)), $b(e), e;
}
const B0 = new Map(),
  zb = new Set();
function ll(e, t) {
  let n = B0.get(e);
  return n || ((n = t()), B0.set(e, n), zb.add(n)), n;
}
const is = (e, t, n) => {
  const r = mc(t, n);
  r !== void 0 && e.add(r);
};
class g5 {
  constructor(t) {
    (this._config = h5(t)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map());
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = Fb(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), $b(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return ll(t, () => [[`datasets.${t}`, ""]]);
  }
  datasetAnimationScopeKeys(t, n) {
    return ll(`${t}.transition.${n}`, () => [
      [`datasets.${t}.transitions.${n}`, `transitions.${n}`],
      [`datasets.${t}`, ""],
    ]);
  }
  datasetElementScopeKeys(t, n) {
    return ll(`${t}-${n}`, () => [
      [`datasets.${t}.elements.${n}`, `datasets.${t}`, `elements.${n}`, ""],
    ]);
  }
  pluginScopeKeys(t) {
    const n = t.id,
      r = this.type;
    return ll(`${r}-plugin-${n}`, () => [
      [`plugins.${n}`, ...(t.additionalOptionScopes || [])],
    ]);
  }
  _cachedScopes(t, n) {
    const r = this._scopeCache;
    let i = r.get(t);
    return (!i || n) && ((i = new Map()), r.set(t, i)), i;
  }
  getOptionScopes(t, n, r) {
    const { options: i, type: o } = this,
      s = this._cachedScopes(t, r),
      a = s.get(n);
    if (a) return a;
    const l = new Set();
    n.forEach((u) => {
      t && (l.add(t), u.forEach((d) => is(l, t, d))),
        u.forEach((d) => is(l, i, d)),
        u.forEach((d) => is(l, yi[o] || {}, d)),
        u.forEach((d) => is(l, Ne, d)),
        u.forEach((d) => is(l, Gf, d));
    });
    const c = Array.from(l);
    return (
      c.length === 0 && c.push(Object.create(null)), zb.has(n) && s.set(n, c), c
    );
  }
  chartOptionScopes() {
    const { options: t, type: n } = this;
    return [t, yi[n] || {}, Ne.datasets[n] || {}, { type: n }, Ne, Gf];
  }
  resolveNamedOptions(t, n, r, i = [""]) {
    const o = { $shared: !0 },
      { resolver: s, subPrefixes: a } = j0(this._resolverCache, t, i);
    let l = s;
    if (y5(s, n)) {
      (o.$shared = !1), (r = Fr(r) ? r() : r);
      const c = this.createResolver(t, r, a);
      l = xo(s, r, c);
    }
    for (const c of n) o[c] = l[c];
    return o;
  }
  createResolver(t, n, r = [""], i) {
    const { resolver: o } = j0(this._resolverCache, t, r);
    return de(n) ? xo(o, n, void 0, i) : o;
  }
}
function j0(e, t, n) {
  let r = e.get(t);
  r || ((r = new Map()), e.set(t, r));
  const i = n.join();
  let o = r.get(i);
  return (
    o ||
      ((o = {
        resolver: Hh(t, n),
        subPrefixes: n.filter((a) => !a.toLowerCase().includes("hover")),
      }),
      r.set(i, o)),
    o
  );
}
const m5 = (e) => de(e) && Object.getOwnPropertyNames(e).some((t) => Fr(e[t]));
function y5(e, t) {
  const { isScriptable: n, isIndexable: r } = bb(e);
  for (const i of t) {
    const o = n(i),
      s = r(i),
      a = (s || o) && e[i];
    if ((o && (Fr(a) || m5(a))) || (s && De(a))) return !0;
  }
  return !1;
}
var v5 = "4.4.4";
const x5 = ["top", "bottom", "left", "right", "chartArea"];
function W0(e, t) {
  return e === "top" || e === "bottom" || (x5.indexOf(e) === -1 && t === "x");
}
function H0(e, t) {
  return function (n, r) {
    return n[e] === r[e] ? n[t] - r[t] : n[e] - r[e];
  };
}
function U0(e) {
  const t = e.chart,
    n = t.options.animation;
  t.notifyPlugins("afterRender"), Ce(n && n.onComplete, [e], t);
}
function b5(e) {
  const t = e.chart,
    n = t.options.animation;
  Ce(n && n.onProgress, [e], t);
}
function Db(e) {
  return (
    Gh() && typeof e == "string"
      ? (e = document.getElementById(e))
      : e && e.length && (e = e[0]),
    e && e.canvas && (e = e.canvas),
    e
  );
}
const Al = {},
  V0 = (e) => {
    const t = Db(e);
    return Object.values(Al)
      .filter((n) => n.canvas === t)
      .pop();
  };
function S5(e, t, n) {
  const r = Object.keys(e);
  for (const i of r) {
    const o = +i;
    if (o >= t) {
      const s = e[i];
      delete e[i], (n > 0 || o > t) && (e[o + n] = s);
    }
  }
}
function C5(e, t, n, r) {
  return !n || e.type === "mouseout" ? null : r ? t : e;
}
function cl(e, t, n) {
  return e.options.clip ? e[n] : t[n];
}
function w5(e, t) {
  const { xScale: n, yScale: r } = e;
  return n && r
    ? {
        left: cl(n, t, "left"),
        right: cl(n, t, "right"),
        top: cl(r, t, "top"),
        bottom: cl(r, t, "bottom"),
      }
    : t;
}
var ur;
let ki =
  ((ur = class {
    static register(...t) {
      Tn.add(...t), G0();
    }
    static unregister(...t) {
      Tn.remove(...t), G0();
    }
    constructor(t, n) {
      const r = (this.config = new g5(n)),
        i = Db(t),
        o = V0(i);
      if (o)
        throw new Error(
          "Canvas is already in use. Chart with ID '" +
            o.id +
            "' must be destroyed before the canvas with ID '" +
            o.canvas.id +
            "' can be reused."
        );
      const s = r.createResolver(r.chartOptionScopes(), this.getContext());
      (this.platform = new (r.platform || BI(i))()),
        this.platform.updateConfig(r);
      const a = this.platform.acquireContext(i, s.aspectRatio),
        l = a && a.canvas,
        c = l && l.height,
        u = l && l.width;
      if (
        ((this.id = RR()),
        (this.ctx = a),
        (this.canvas = l),
        (this.width = u),
        (this.height = c),
        (this._options = s),
        (this._aspectRatio = this.aspectRatio),
        (this._layers = []),
        (this._metasets = []),
        (this._stacks = void 0),
        (this.boxes = []),
        (this.currentDevicePixelRatio = void 0),
        (this.chartArea = void 0),
        (this._active = []),
        (this._lastEvent = void 0),
        (this._listeners = {}),
        (this._responsiveListeners = void 0),
        (this._sortedMetasets = []),
        (this.scales = {}),
        (this._plugins = new i5()),
        (this.$proxies = {}),
        (this._hiddenIndices = {}),
        (this.attached = !1),
        (this._animationsDisabled = void 0),
        (this.$context = void 0),
        (this._doResize = YR((d) => this.update(d), s.resizeDelay || 0)),
        (this._dataChanges = []),
        (Al[this.id] = this),
        !a || !l)
      ) {
        console.error(
          "Failed to create chart: can't acquire context from the given item"
        );
        return;
      }
      Hn.listen(this, "complete", U0),
        Hn.listen(this, "progress", b5),
        this._initialize(),
        this.attached && this.update();
    }
    get aspectRatio() {
      const {
        options: { aspectRatio: t, maintainAspectRatio: n },
        width: r,
        height: i,
        _aspectRatio: o,
      } = this;
      return Ee(t) ? (n && o ? o : i ? r / i : null) : t;
    }
    get data() {
      return this.config.data;
    }
    set data(t) {
      this.config.data = t;
    }
    get options() {
      return this._options;
    }
    set options(t) {
      this.config.options = t;
    }
    get registry() {
      return Tn;
    }
    _initialize() {
      return (
        this.notifyPlugins("beforeInit"),
        this.options.responsive
          ? this.resize()
          : m0(this, this.options.devicePixelRatio),
        this.bindEvents(),
        this.notifyPlugins("afterInit"),
        this
      );
    }
    clear() {
      return p0(this.canvas, this.ctx), this;
    }
    stop() {
      return Hn.stop(this), this;
    }
    resize(t, n) {
      Hn.running(this)
        ? (this._resizeBeforeDraw = { width: t, height: n })
        : this._resize(t, n);
    }
    _resize(t, n) {
      const r = this.options,
        i = this.canvas,
        o = r.maintainAspectRatio && this.aspectRatio,
        s = this.platform.getMaximumSize(i, t, n, o),
        a = r.devicePixelRatio || this.platform.getDevicePixelRatio(),
        l = this.width ? "resize" : "attach";
      (this.width = s.width),
        (this.height = s.height),
        (this._aspectRatio = this.aspectRatio),
        m0(this, a, !0) &&
          (this.notifyPlugins("resize", { size: s }),
          Ce(r.onResize, [this, s], this),
          this.attached && this._doResize(l) && this.render());
    }
    ensureScalesHaveIDs() {
      const n = this.options.scales || {};
      he(n, (r, i) => {
        r.id = i;
      });
    }
    buildOrUpdateScales() {
      const t = this.options,
        n = t.scales,
        r = this.scales,
        i = Object.keys(r).reduce((s, a) => ((s[a] = !1), s), {});
      let o = [];
      n &&
        (o = o.concat(
          Object.keys(n).map((s) => {
            const a = n[s],
              l = Xf(s, a),
              c = l === "r",
              u = l === "x";
            return {
              options: a,
              dposition: c ? "chartArea" : u ? "bottom" : "left",
              dtype: c ? "radialLinear" : u ? "category" : "linear",
            };
          })
        )),
        he(o, (s) => {
          const a = s.options,
            l = a.id,
            c = Xf(l, a),
            u = ee(a.type, s.dtype);
          (a.position === void 0 || W0(a.position, c) !== W0(s.dposition)) &&
            (a.position = s.dposition),
            (i[l] = !0);
          let d = null;
          if (l in r && r[l].type === u) d = r[l];
          else {
            const f = Tn.getScale(u);
            (d = new f({ id: l, type: u, ctx: this.ctx, chart: this })),
              (r[d.id] = d);
          }
          d.init(a, t);
        }),
        he(i, (s, a) => {
          s || delete r[a];
        }),
        he(r, (s) => {
          nn.configure(this, s, s.options), nn.addBox(this, s);
        });
    }
    _updateMetasets() {
      const t = this._metasets,
        n = this.data.datasets.length,
        r = t.length;
      if ((t.sort((i, o) => i.index - o.index), r > n)) {
        for (let i = n; i < r; ++i) this._destroyDatasetMeta(i);
        t.splice(n, r - n);
      }
      this._sortedMetasets = t.slice(0).sort(H0("order", "index"));
    }
    _removeUnreferencedMetasets() {
      const {
        _metasets: t,
        data: { datasets: n },
      } = this;
      t.length > n.length && delete this._stacks,
        t.forEach((r, i) => {
          n.filter((o) => o === r._dataset).length === 0 &&
            this._destroyDatasetMeta(i);
        });
    }
    buildOrUpdateControllers() {
      const t = [],
        n = this.data.datasets;
      let r, i;
      for (
        this._removeUnreferencedMetasets(), r = 0, i = n.length;
        r < i;
        r++
      ) {
        const o = n[r];
        let s = this.getDatasetMeta(r);
        const a = o.type || this.config.type;
        if (
          (s.type &&
            s.type !== a &&
            (this._destroyDatasetMeta(r), (s = this.getDatasetMeta(r))),
          (s.type = a),
          (s.indexAxis = o.indexAxis || Yf(a, this.options)),
          (s.order = o.order || 0),
          (s.index = r),
          (s.label = "" + o.label),
          (s.visible = this.isDatasetVisible(r)),
          s.controller)
        )
          s.controller.updateIndex(r), s.controller.linkScales();
        else {
          const l = Tn.getController(a),
            { datasetElementType: c, dataElementType: u } = Ne.datasets[a];
          Object.assign(l, {
            dataElementType: Tn.getElement(u),
            datasetElementType: c && Tn.getElement(c),
          }),
            (s.controller = new l(this, r)),
            t.push(s.controller);
        }
      }
      return this._updateMetasets(), t;
    }
    _resetElements() {
      he(
        this.data.datasets,
        (t, n) => {
          this.getDatasetMeta(n).controller.reset();
        },
        this
      );
    }
    reset() {
      this._resetElements(), this.notifyPlugins("reset");
    }
    update(t) {
      const n = this.config;
      n.update();
      const r = (this._options = n.createResolver(
          n.chartOptionScopes(),
          this.getContext()
        )),
        i = (this._animationsDisabled = !r.animation);
      if (
        (this._updateScales(),
        this._checkEventBindings(),
        this._updateHiddenIndices(),
        this._plugins.invalidate(),
        this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }) === !1)
      )
        return;
      const o = this.buildOrUpdateControllers();
      this.notifyPlugins("beforeElementsUpdate");
      let s = 0;
      for (let c = 0, u = this.data.datasets.length; c < u; c++) {
        const { controller: d } = this.getDatasetMeta(c),
          f = !i && o.indexOf(d) === -1;
        d.buildOrUpdateElements(f), (s = Math.max(+d.getMaxOverflow(), s));
      }
      (s = this._minPadding = r.layout.autoPadding ? s : 0),
        this._updateLayout(s),
        i ||
          he(o, (c) => {
            c.reset();
          }),
        this._updateDatasets(t),
        this.notifyPlugins("afterUpdate", { mode: t }),
        this._layers.sort(H0("z", "_idx"));
      const { _active: a, _lastEvent: l } = this;
      l
        ? this._eventHandler(l, !0)
        : a.length && this._updateHoverStyles(a, a, !0),
        this.render();
    }
    _updateScales() {
      he(this.scales, (t) => {
        nn.removeBox(this, t);
      }),
        this.ensureScalesHaveIDs(),
        this.buildOrUpdateScales();
    }
    _checkEventBindings() {
      const t = this.options,
        n = new Set(Object.keys(this._listeners)),
        r = new Set(t.events);
      (!i0(n, r) || !!this._responsiveListeners !== t.responsive) &&
        (this.unbindEvents(), this.bindEvents());
    }
    _updateHiddenIndices() {
      const { _hiddenIndices: t } = this,
        n = this._getUniformDataChanges() || [];
      for (const { method: r, start: i, count: o } of n) {
        const s = r === "_removeElements" ? -o : o;
        S5(t, i, s);
      }
    }
    _getUniformDataChanges() {
      const t = this._dataChanges;
      if (!t || !t.length) return;
      this._dataChanges = [];
      const n = this.data.datasets.length,
        r = (o) =>
          new Set(
            t
              .filter((s) => s[0] === o)
              .map((s, a) => a + "," + s.splice(1).join(","))
          ),
        i = r(0);
      for (let o = 1; o < n; o++) if (!i0(i, r(o))) return;
      return Array.from(i)
        .map((o) => o.split(","))
        .map((o) => ({ method: o[1], start: +o[2], count: +o[3] }));
    }
    _updateLayout(t) {
      if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1) return;
      nn.update(this, this.width, this.height, t);
      const n = this.chartArea,
        r = n.width <= 0 || n.height <= 0;
      (this._layers = []),
        he(
          this.boxes,
          (i) => {
            (r && i.position === "chartArea") ||
              (i.configure && i.configure(), this._layers.push(...i._layers()));
          },
          this
        ),
        this._layers.forEach((i, o) => {
          i._idx = o;
        }),
        this.notifyPlugins("afterLayout");
    }
    _updateDatasets(t) {
      if (
        this.notifyPlugins("beforeDatasetsUpdate", {
          mode: t,
          cancelable: !0,
        }) !== !1
      ) {
        for (let n = 0, r = this.data.datasets.length; n < r; ++n)
          this.getDatasetMeta(n).controller.configure();
        for (let n = 0, r = this.data.datasets.length; n < r; ++n)
          this._updateDataset(n, Fr(t) ? t({ datasetIndex: n }) : t);
        this.notifyPlugins("afterDatasetsUpdate", { mode: t });
      }
    }
    _updateDataset(t, n) {
      const r = this.getDatasetMeta(t),
        i = { meta: r, index: t, mode: n, cancelable: !0 };
      this.notifyPlugins("beforeDatasetUpdate", i) !== !1 &&
        (r.controller._update(n),
        (i.cancelable = !1),
        this.notifyPlugins("afterDatasetUpdate", i));
    }
    render() {
      this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
        (Hn.has(this)
          ? this.attached && !Hn.running(this) && Hn.start(this)
          : (this.draw(), U0({ chart: this })));
    }
    draw() {
      let t;
      if (this._resizeBeforeDraw) {
        const { width: r, height: i } = this._resizeBeforeDraw;
        (this._resizeBeforeDraw = null), this._resize(r, i);
      }
      if (
        (this.clear(),
        this.width <= 0 ||
          this.height <= 0 ||
          this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
      )
        return;
      const n = this._layers;
      for (t = 0; t < n.length && n[t].z <= 0; ++t) n[t].draw(this.chartArea);
      for (this._drawDatasets(); t < n.length; ++t) n[t].draw(this.chartArea);
      this.notifyPlugins("afterDraw");
    }
    _getSortedDatasetMetas(t) {
      const n = this._sortedMetasets,
        r = [];
      let i, o;
      for (i = 0, o = n.length; i < o; ++i) {
        const s = n[i];
        (!t || s.visible) && r.push(s);
      }
      return r;
    }
    getSortedVisibleDatasetMetas() {
      return this._getSortedDatasetMetas(!0);
    }
    _drawDatasets() {
      if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1)
        return;
      const t = this.getSortedVisibleDatasetMetas();
      for (let n = t.length - 1; n >= 0; --n) this._drawDataset(t[n]);
      this.notifyPlugins("afterDatasetsDraw");
    }
    _drawDataset(t) {
      const n = this.ctx,
        r = t._clip,
        i = !r.disabled,
        o = w5(t, this.chartArea),
        s = { meta: t, index: t.index, cancelable: !0 };
      this.notifyPlugins("beforeDatasetDraw", s) !== !1 &&
        (i &&
          jh(n, {
            left: r.left === !1 ? 0 : o.left - r.left,
            right: r.right === !1 ? this.width : o.right + r.right,
            top: r.top === !1 ? 0 : o.top - r.top,
            bottom: r.bottom === !1 ? this.height : o.bottom + r.bottom,
          }),
        t.controller.draw(),
        i && Wh(n),
        (s.cancelable = !1),
        this.notifyPlugins("afterDatasetDraw", s));
    }
    isPointInArea(t) {
      return qn(t, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(t, n, r, i) {
      const o = xI.modes[n];
      return typeof o == "function" ? o(this, t, r, i) : [];
    }
    getDatasetMeta(t) {
      const n = this.data.datasets[t],
        r = this._metasets;
      let i = r.filter((o) => o && o._dataset === n).pop();
      return (
        i ||
          ((i = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: (n && n.order) || 0,
            index: t,
            _dataset: n,
            _parsed: [],
            _sorted: !1,
          }),
          r.push(i)),
        i
      );
    }
    getContext() {
      return (
        this.$context ||
        (this.$context = jr(null, { chart: this, type: "chart" }))
      );
    }
    getVisibleDatasetCount() {
      return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(t) {
      const n = this.data.datasets[t];
      if (!n) return !1;
      const r = this.getDatasetMeta(t);
      return typeof r.hidden == "boolean" ? !r.hidden : !n.hidden;
    }
    setDatasetVisibility(t, n) {
      const r = this.getDatasetMeta(t);
      r.hidden = !n;
    }
    toggleDataVisibility(t) {
      this._hiddenIndices[t] = !this._hiddenIndices[t];
    }
    getDataVisibility(t) {
      return !this._hiddenIndices[t];
    }
    _updateVisibility(t, n, r) {
      const i = r ? "show" : "hide",
        o = this.getDatasetMeta(t),
        s = o.controller._resolveAnimations(void 0, i);
      yc(n)
        ? ((o.data[n].hidden = !r), this.update())
        : (this.setDatasetVisibility(t, r),
          s.update(o, { visible: r }),
          this.update((a) => (a.datasetIndex === t ? i : void 0)));
    }
    hide(t, n) {
      this._updateVisibility(t, n, !1);
    }
    show(t, n) {
      this._updateVisibility(t, n, !0);
    }
    _destroyDatasetMeta(t) {
      const n = this._metasets[t];
      n && n.controller && n.controller._destroy(), delete this._metasets[t];
    }
    _stop() {
      let t, n;
      for (
        this.stop(), Hn.remove(this), t = 0, n = this.data.datasets.length;
        t < n;
        ++t
      )
        this._destroyDatasetMeta(t);
    }
    destroy() {
      this.notifyPlugins("beforeDestroy");
      const { canvas: t, ctx: n } = this;
      this._stop(),
        this.config.clearCache(),
        t &&
          (this.unbindEvents(),
          p0(t, n),
          this.platform.releaseContext(n),
          (this.canvas = null),
          (this.ctx = null)),
        delete Al[this.id],
        this.notifyPlugins("afterDestroy");
    }
    toBase64Image(...t) {
      return this.canvas.toDataURL(...t);
    }
    bindEvents() {
      this.bindUserEvents(),
        this.options.responsive
          ? this.bindResponsiveEvents()
          : (this.attached = !0);
    }
    bindUserEvents() {
      const t = this._listeners,
        n = this.platform,
        r = (o, s) => {
          n.addEventListener(this, o, s), (t[o] = s);
        },
        i = (o, s, a) => {
          (o.offsetX = s), (o.offsetY = a), this._eventHandler(o);
        };
      he(this.options.events, (o) => r(o, i));
    }
    bindResponsiveEvents() {
      this._responsiveListeners || (this._responsiveListeners = {});
      const t = this._responsiveListeners,
        n = this.platform,
        r = (l, c) => {
          n.addEventListener(this, l, c), (t[l] = c);
        },
        i = (l, c) => {
          t[l] && (n.removeEventListener(this, l, c), delete t[l]);
        },
        o = (l, c) => {
          this.canvas && this.resize(l, c);
        };
      let s;
      const a = () => {
        i("attach", a),
          (this.attached = !0),
          this.resize(),
          r("resize", o),
          r("detach", s);
      };
      (s = () => {
        (this.attached = !1),
          i("resize", o),
          this._stop(),
          this._resize(0, 0),
          r("attach", a);
      }),
        n.isAttached(this.canvas) ? a() : s();
    }
    unbindEvents() {
      he(this._listeners, (t, n) => {
        this.platform.removeEventListener(this, n, t);
      }),
        (this._listeners = {}),
        he(this._responsiveListeners, (t, n) => {
          this.platform.removeEventListener(this, n, t);
        }),
        (this._responsiveListeners = void 0);
    }
    updateHoverStyle(t, n, r) {
      const i = r ? "set" : "remove";
      let o, s, a, l;
      for (
        n === "dataset" &&
          ((o = this.getDatasetMeta(t[0].datasetIndex)),
          o.controller["_" + i + "DatasetHoverStyle"]()),
          a = 0,
          l = t.length;
        a < l;
        ++a
      ) {
        s = t[a];
        const c = s && this.getDatasetMeta(s.datasetIndex).controller;
        c && c[i + "HoverStyle"](s.element, s.datasetIndex, s.index);
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(t) {
      const n = this._active || [],
        r = t.map(({ datasetIndex: o, index: s }) => {
          const a = this.getDatasetMeta(o);
          if (!a) throw new Error("No dataset found at index " + o);
          return { datasetIndex: o, element: a.data[s], index: s };
        });
      !hc(r, n) &&
        ((this._active = r),
        (this._lastEvent = null),
        this._updateHoverStyles(r, n));
    }
    notifyPlugins(t, n, r) {
      return this._plugins.notify(this, t, n, r);
    }
    isPluginEnabled(t) {
      return this._plugins._cache.filter((n) => n.plugin.id === t).length === 1;
    }
    _updateHoverStyles(t, n, r) {
      const i = this.options.hover,
        o = (l, c) =>
          l.filter(
            (u) =>
              !c.some(
                (d) => u.datasetIndex === d.datasetIndex && u.index === d.index
              )
          ),
        s = o(n, t),
        a = r ? t : o(t, n);
      s.length && this.updateHoverStyle(s, i.mode, !1),
        a.length && i.mode && this.updateHoverStyle(a, i.mode, !0);
    }
    _eventHandler(t, n) {
      const r = {
          event: t,
          replay: n,
          cancelable: !0,
          inChartArea: this.isPointInArea(t),
        },
        i = (s) =>
          (s.options.events || this.options.events).includes(t.native.type);
      if (this.notifyPlugins("beforeEvent", r, i) === !1) return;
      const o = this._handleEvent(t, n, r.inChartArea);
      return (
        (r.cancelable = !1),
        this.notifyPlugins("afterEvent", r, i),
        (o || r.changed) && this.render(),
        this
      );
    }
    _handleEvent(t, n, r) {
      const { _active: i = [], options: o } = this,
        s = n,
        a = this._getActiveElements(t, i, r, s),
        l = FR(t),
        c = C5(t, this._lastEvent, r, l);
      r &&
        ((this._lastEvent = null),
        Ce(o.onHover, [t, a, this], this),
        l && Ce(o.onClick, [t, a, this], this));
      const u = !hc(a, i);
      return (
        (u || n) && ((this._active = a), this._updateHoverStyles(a, i, n)),
        (this._lastEvent = c),
        u
      );
    }
    _getActiveElements(t, n, r, i) {
      if (t.type === "mouseout") return [];
      if (!r) return n;
      const o = this.options.hover;
      return this.getElementsAtEventForMode(t, o.mode, o, i);
    }
  }),
  Y(ur, "defaults", Ne),
  Y(ur, "instances", Al),
  Y(ur, "overrides", yi),
  Y(ur, "registry", Tn),
  Y(ur, "version", v5),
  Y(ur, "getChart", V0),
  ur);
function G0() {
  return he(ki.instances, (e) => e._plugins.invalidate());
}
function Nb(e, t, n = t) {
  (e.lineCap = ee(n.borderCapStyle, t.borderCapStyle)),
    e.setLineDash(ee(n.borderDash, t.borderDash)),
    (e.lineDashOffset = ee(n.borderDashOffset, t.borderDashOffset)),
    (e.lineJoin = ee(n.borderJoinStyle, t.borderJoinStyle)),
    (e.lineWidth = ee(n.borderWidth, t.borderWidth)),
    (e.strokeStyle = ee(n.borderColor, t.borderColor));
}
function k5(e, t, n) {
  e.lineTo(n.x, n.y);
}
function _5(e) {
  return e.stepped
    ? lO
    : e.tension || e.cubicInterpolationMode === "monotone"
    ? cO
    : k5;
}
function Bb(e, t, n = {}) {
  const r = e.length,
    { start: i = 0, end: o = r - 1 } = n,
    { start: s, end: a } = t,
    l = Math.max(i, s),
    c = Math.min(o, a),
    u = (i < s && o < s) || (i > a && o > a);
  return {
    count: r,
    start: l,
    loop: t.loop,
    ilen: c < l && !u ? r + c - l : c - l,
  };
}
function P5(e, t, n, r) {
  const { points: i, options: o } = t,
    { count: s, start: a, loop: l, ilen: c } = Bb(i, n, r),
    u = _5(o);
  let { move: d = !0, reverse: f } = r || {},
    p,
    h,
    y;
  for (p = 0; p <= c; ++p)
    (h = i[(a + (f ? c - p : p)) % s]),
      !h.skip &&
        (d ? (e.moveTo(h.x, h.y), (d = !1)) : u(e, y, h, f, o.stepped),
        (y = h));
  return l && ((h = i[(a + (f ? c : 0)) % s]), u(e, y, h, f, o.stepped)), !!l;
}
function E5(e, t, n, r) {
  const i = t.points,
    { count: o, start: s, ilen: a } = Bb(i, n, r),
    { move: l = !0, reverse: c } = r || {};
  let u = 0,
    d = 0,
    f,
    p,
    h,
    y,
    x,
    g;
  const v = (S) => (s + (c ? a - S : S)) % o,
    m = () => {
      y !== x && (e.lineTo(u, x), e.lineTo(u, y), e.lineTo(u, g));
    };
  for (l && ((p = i[v(0)]), e.moveTo(p.x, p.y)), f = 0; f <= a; ++f) {
    if (((p = i[v(f)]), p.skip)) continue;
    const S = p.x,
      w = p.y,
      _ = S | 0;
    _ === h
      ? (w < y ? (y = w) : w > x && (x = w), (u = (d * u + S) / ++d))
      : (m(), e.lineTo(S, w), (h = _), (d = 0), (y = x = w)),
      (g = w);
  }
  m();
}
function Qf(e) {
  const t = e.options,
    n = t.borderDash && t.borderDash.length;
  return !e._decimated &&
    !e._loop &&
    !t.tension &&
    t.cubicInterpolationMode !== "monotone" &&
    !t.stepped &&
    !n
    ? E5
    : P5;
}
function M5(e) {
  return e.stepped
    ? WO
    : e.tension || e.cubicInterpolationMode === "monotone"
    ? HO
    : ei;
}
function T5(e, t, n, r) {
  let i = t._path;
  i || ((i = t._path = new Path2D()), t.path(i, n, r) && i.closePath()),
    Nb(e, t.options),
    e.stroke(i);
}
function R5(e, t, n, r) {
  const { segments: i, options: o } = t,
    s = Qf(t);
  for (const a of i)
    Nb(e, o, a.style),
      e.beginPath(),
      s(e, t, a, { start: n, end: n + r - 1 }) && e.closePath(),
      e.stroke();
}
const O5 = typeof Path2D == "function";
function I5(e, t, n, r) {
  O5 && !t.options.segment ? T5(e, t, n, r) : R5(e, t, n, r);
}
class Sr extends sr {
  constructor(t) {
    super(),
      (this.animated = !0),
      (this.options = void 0),
      (this._chart = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      (this._datasetIndex = void 0),
      t && Object.assign(this, t);
  }
  updateControlPoints(t, n) {
    const r = this.options;
    if (
      (r.tension || r.cubicInterpolationMode === "monotone") &&
      !r.stepped &&
      !this._pointsUpdated
    ) {
      const i = r.spanGaps ? this._loop : this._fullLoop;
      LO(this._points, r, t, i, n), (this._pointsUpdated = !0);
    }
  }
  set points(t) {
    (this._points = t),
      delete this._segments,
      delete this._path,
      (this._pointsUpdated = !1);
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = qO(this, this.options.segment));
  }
  first() {
    const t = this.segments,
      n = this.points;
    return t.length && n[t[0].start];
  }
  last() {
    const t = this.segments,
      n = this.points,
      r = t.length;
    return r && n[t[r - 1].end];
  }
  interpolate(t, n) {
    const r = this.options,
      i = t[n],
      o = this.points,
      s = YO(this, { property: n, start: i, end: i });
    if (!s.length) return;
    const a = [],
      l = M5(r);
    let c, u;
    for (c = 0, u = s.length; c < u; ++c) {
      const { start: d, end: f } = s[c],
        p = o[d],
        h = o[f];
      if (p === h) {
        a.push(p);
        continue;
      }
      const y = Math.abs((i - p[n]) / (h[n] - p[n])),
        x = l(p, h, y, r.stepped);
      (x[n] = t[n]), a.push(x);
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(t, n, r) {
    return Qf(this)(t, this, n, r);
  }
  path(t, n, r) {
    const i = this.segments,
      o = Qf(this);
    let s = this._loop;
    (n = n || 0), (r = r || this.points.length - n);
    for (const a of i) s &= o(t, this, a, { start: n, end: n + r - 1 });
    return !!s;
  }
  draw(t, n, r, i) {
    const o = this.options || {};
    (this.points || []).length &&
      o.borderWidth &&
      (t.save(), I5(t, this, r, i), t.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
  }
}
Y(Sr, "id", "line"),
  Y(Sr, "defaults", {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0,
  }),
  Y(Sr, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  }),
  Y(Sr, "descriptors", {
    _scriptable: !0,
    _indexable: (t) => t !== "borderDash" && t !== "fill",
  });
function K0(e, t, n, r) {
  const i = e.options,
    { [n]: o } = e.getProps([n], r);
  return Math.abs(t - o) < i.radius + i.hitRadius;
}
class ui extends sr {
  constructor(n) {
    super();
    Y(this, "parsed");
    Y(this, "skip");
    Y(this, "stop");
    (this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      n && Object.assign(this, n);
  }
  inRange(n, r, i) {
    const o = this.options,
      { x: s, y: a } = this.getProps(["x", "y"], i);
    return (
      Math.pow(n - s, 2) + Math.pow(r - a, 2) <
      Math.pow(o.hitRadius + o.radius, 2)
    );
  }
  inXRange(n, r) {
    return K0(this, n, "x", r);
  }
  inYRange(n, r) {
    return K0(this, n, "y", r);
  }
  getCenterPoint(n) {
    const { x: r, y: i } = this.getProps(["x", "y"], n);
    return { x: r, y: i };
  }
  size(n) {
    n = n || this.options || {};
    let r = n.radius || 0;
    r = Math.max(r, (r && n.hoverRadius) || 0);
    const i = (r && n.borderWidth) || 0;
    return (r + i) * 2;
  }
  draw(n, r) {
    const i = this.options;
    this.skip ||
      i.radius < 0.1 ||
      !qn(this, r, this.size(i) / 2) ||
      ((n.strokeStyle = i.borderColor),
      (n.lineWidth = i.borderWidth),
      (n.fillStyle = i.backgroundColor),
      Kf(n, i, this.x, this.y));
  }
  getRange() {
    const n = this.options || {};
    return n.radius + n.hitRadius;
  }
}
Y(ui, "id", "point"),
  Y(ui, "defaults", {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0,
  }),
  Y(ui, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  });
const Y0 = (e, t) => {
    let { boxHeight: n = t, boxWidth: r = t } = e;
    return (
      e.usePointStyle &&
        ((n = Math.min(n, t)), (r = e.pointStyleWidth || Math.min(r, t))),
      { boxWidth: r, boxHeight: n, itemHeight: Math.max(t, n) }
    );
  },
  A5 = (e, t) =>
    e !== null &&
    t !== null &&
    e.datasetIndex === t.datasetIndex &&
    e.index === t.index;
class X0 extends sr {
  constructor(t) {
    super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, n, r) {
    (this.maxWidth = t),
      (this.maxHeight = n),
      (this._margins = r),
      this.setDimensions(),
      this.buildLabels(),
      this.fit();
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = this._margins.left),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height));
  }
  buildLabels() {
    const t = this.options.labels || {};
    let n = Ce(t.generateLabels, [this.chart], this) || [];
    t.filter && (n = n.filter((r) => t.filter(r, this.chart.data))),
      t.sort && (n = n.sort((r, i) => t.sort(r, i, this.chart.data))),
      this.options.reverse && n.reverse(),
      (this.legendItems = n);
  }
  fit() {
    const { options: t, ctx: n } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const r = t.labels,
      i = qe(r.font),
      o = i.size,
      s = this._computeTitleHeight(),
      { boxWidth: a, itemHeight: l } = Y0(r, o);
    let c, u;
    (n.font = i.string),
      this.isHorizontal()
        ? ((c = this.maxWidth), (u = this._fitRows(s, o, a, l) + 10))
        : ((u = this.maxHeight), (c = this._fitCols(s, i, a, l) + 10)),
      (this.width = Math.min(c, t.maxWidth || this.maxWidth)),
      (this.height = Math.min(u, t.maxHeight || this.maxHeight));
  }
  _fitRows(t, n, r, i) {
    const {
        ctx: o,
        maxWidth: s,
        options: {
          labels: { padding: a },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      c = (this.lineWidths = [0]),
      u = i + a;
    let d = t;
    (o.textAlign = "left"), (o.textBaseline = "middle");
    let f = -1,
      p = -u;
    return (
      this.legendItems.forEach((h, y) => {
        const x = r + n / 2 + o.measureText(h.text).width;
        (y === 0 || c[c.length - 1] + x + 2 * a > s) &&
          ((d += u), (c[c.length - (y > 0 ? 0 : 1)] = 0), (p += u), f++),
          (l[y] = { left: 0, top: p, row: f, width: x, height: i }),
          (c[c.length - 1] += x + a);
      }),
      d
    );
  }
  _fitCols(t, n, r, i) {
    const {
        ctx: o,
        maxHeight: s,
        options: {
          labels: { padding: a },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      c = (this.columnSizes = []),
      u = s - t;
    let d = a,
      f = 0,
      p = 0,
      h = 0,
      y = 0;
    return (
      this.legendItems.forEach((x, g) => {
        const { itemWidth: v, itemHeight: m } = L5(r, n, o, x, i);
        g > 0 &&
          p + m + 2 * a > u &&
          ((d += f + a),
          c.push({ width: f, height: p }),
          (h += f + a),
          y++,
          (f = p = 0)),
          (l[g] = { left: h, top: p, col: y, width: v, height: m }),
          (f = Math.max(f, v)),
          (p += m + a);
      }),
      (d += f),
      c.push({ width: f, height: p }),
      d
    );
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    const t = this._computeTitleHeight(),
      {
        legendHitBoxes: n,
        options: {
          align: r,
          labels: { padding: i },
          rtl: o,
        },
      } = this,
      s = ao(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0,
        l = gt(r, this.left + i, this.right - this.lineWidths[a]);
      for (const c of n)
        a !== c.row &&
          ((a = c.row),
          (l = gt(r, this.left + i, this.right - this.lineWidths[a]))),
          (c.top += this.top + t + i),
          (c.left = s.leftForLtr(s.x(l), c.width)),
          (l += c.width + i);
    } else {
      let a = 0,
        l = gt(r, this.top + t + i, this.bottom - this.columnSizes[a].height);
      for (const c of n)
        c.col !== a &&
          ((a = c.col),
          (l = gt(
            r,
            this.top + t + i,
            this.bottom - this.columnSizes[a].height
          ))),
          (c.top = l),
          (c.left += this.left + i),
          (c.left = s.leftForLtr(s.x(c.left), c.width)),
          (l += c.height + i);
    }
  }
  isHorizontal() {
    return (
      this.options.position === "top" || this.options.position === "bottom"
    );
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      jh(t, this), this._draw(), Wh(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: n, lineWidths: r, ctx: i } = this,
      { align: o, labels: s } = t,
      a = Ne.color,
      l = ao(t.rtl, this.left, this.width),
      c = qe(s.font),
      { padding: u } = s,
      d = c.size,
      f = d / 2;
    let p;
    this.drawTitle(),
      (i.textAlign = l.textAlign("left")),
      (i.textBaseline = "middle"),
      (i.lineWidth = 0.5),
      (i.font = c.string);
    const { boxWidth: h, boxHeight: y, itemHeight: x } = Y0(s, d),
      g = function (_, k, M) {
        if (isNaN(h) || h <= 0 || isNaN(y) || y < 0) return;
        i.save();
        const b = ee(M.lineWidth, 1);
        if (
          ((i.fillStyle = ee(M.fillStyle, a)),
          (i.lineCap = ee(M.lineCap, "butt")),
          (i.lineDashOffset = ee(M.lineDashOffset, 0)),
          (i.lineJoin = ee(M.lineJoin, "miter")),
          (i.lineWidth = b),
          (i.strokeStyle = ee(M.strokeStyle, a)),
          i.setLineDash(ee(M.lineDash, [])),
          s.usePointStyle)
        ) {
          const E = {
              radius: (y * Math.SQRT2) / 2,
              pointStyle: M.pointStyle,
              rotation: M.rotation,
              borderWidth: b,
            },
            R = l.xPlus(_, h / 2),
            I = k + f;
          vb(i, E, R, I, s.pointStyleWidth && h);
        } else {
          const E = k + Math.max((d - y) / 2, 0),
            R = l.leftForLtr(_, h),
            I = so(M.borderRadius);
          i.beginPath(),
            Object.values(I).some((z) => z !== 0)
              ? bc(i, { x: R, y: E, w: h, h: y, radius: I })
              : i.rect(R, E, h, y),
            i.fill(),
            b !== 0 && i.stroke();
        }
        i.restore();
      },
      v = function (_, k, M) {
        vi(i, M.text, _, k + x / 2, c, {
          strikethrough: M.hidden,
          textAlign: l.textAlign(M.textAlign),
        });
      },
      m = this.isHorizontal(),
      S = this._computeTitleHeight();
    m
      ? (p = {
          x: gt(o, this.left + u, this.right - r[0]),
          y: this.top + u + S,
          line: 0,
        })
      : (p = {
          x: this.left + u,
          y: gt(o, this.top + S + u, this.bottom - n[0].height),
          line: 0,
        }),
      _b(this.ctx, t.textDirection);
    const w = x + u;
    this.legendItems.forEach((_, k) => {
      (i.strokeStyle = _.fontColor), (i.fillStyle = _.fontColor);
      const M = i.measureText(_.text).width,
        b = l.textAlign(_.textAlign || (_.textAlign = s.textAlign)),
        E = h + f + M;
      let R = p.x,
        I = p.y;
      l.setWidth(this.width),
        m
          ? k > 0 &&
            R + E + u > this.right &&
            ((I = p.y += w),
            p.line++,
            (R = p.x = gt(o, this.left + u, this.right - r[p.line])))
          : k > 0 &&
            I + w > this.bottom &&
            ((R = p.x = R + n[p.line].width + u),
            p.line++,
            (I = p.y =
              gt(o, this.top + S + u, this.bottom - n[p.line].height)));
      const z = l.x(R);
      if (
        (g(z, I, _),
        (R = XR(b, R + h + f, m ? R + E : this.right, t.rtl)),
        v(l.x(R), I, _),
        m)
      )
        p.x += E + u;
      else if (typeof _.text != "string") {
        const D = c.lineHeight;
        p.y += jb(_, D) + u;
      } else p.y += w;
    }),
      Pb(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options,
      n = t.title,
      r = qe(n.font),
      i = vt(n.padding);
    if (!n.display) return;
    const o = ao(t.rtl, this.left, this.width),
      s = this.ctx,
      a = n.position,
      l = r.size / 2,
      c = i.top + l;
    let u,
      d = this.left,
      f = this.width;
    if (this.isHorizontal())
      (f = Math.max(...this.lineWidths)),
        (u = this.top + c),
        (d = gt(t.align, d, this.right - f));
    else {
      const h = this.columnSizes.reduce((y, x) => Math.max(y, x.height), 0);
      u =
        c +
        gt(
          t.align,
          this.top,
          this.bottom - h - t.labels.padding - this._computeTitleHeight()
        );
    }
    const p = gt(a, d, d + f);
    (s.textAlign = o.textAlign(Dh(a))),
      (s.textBaseline = "middle"),
      (s.strokeStyle = n.color),
      (s.fillStyle = n.color),
      (s.font = r.string),
      vi(s, n.text, p, u, r);
  }
  _computeTitleHeight() {
    const t = this.options.title,
      n = qe(t.font),
      r = vt(t.padding);
    return t.display ? n.lineHeight + r.height : 0;
  }
  _getLegendItemAt(t, n) {
    let r, i, o;
    if (ms(t, this.left, this.right) && ms(n, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, r = 0; r < o.length; ++r)
        if (
          ((i = o[r]),
          ms(t, i.left, i.left + i.width) && ms(n, i.top, i.top + i.height))
        )
          return this.legendItems[r];
    }
    return null;
  }
  handleEvent(t) {
    const n = this.options;
    if (!z5(t.type, n)) return;
    const r = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const i = this._hoveredItem,
        o = A5(i, r);
      i && !o && Ce(n.onLeave, [t, i, this], this),
        (this._hoveredItem = r),
        r && !o && Ce(n.onHover, [t, r, this], this);
    } else r && Ce(n.onClick, [t, r, this], this);
  }
}
function L5(e, t, n, r, i) {
  const o = $5(r, e, t, n),
    s = F5(i, r, t.lineHeight);
  return { itemWidth: o, itemHeight: s };
}
function $5(e, t, n, r) {
  let i = e.text;
  return (
    i &&
      typeof i != "string" &&
      (i = i.reduce((o, s) => (o.length > s.length ? o : s))),
    t + n.size / 2 + r.measureText(i).width
  );
}
function F5(e, t, n) {
  let r = e;
  return typeof t.text != "string" && (r = jb(t, n)), r;
}
function jb(e, t) {
  const n = e.text ? e.text.length : 0;
  return t * n;
}
function z5(e, t) {
  return !!(
    ((e === "mousemove" || e === "mouseout") && (t.onHover || t.onLeave)) ||
    (t.onClick && (e === "click" || e === "mouseup"))
  );
}
var wu = {
  id: "legend",
  _element: X0,
  start(e, t, n) {
    const r = (e.legend = new X0({ ctx: e.ctx, options: n, chart: e }));
    nn.configure(e, r, n), nn.addBox(e, r);
  },
  stop(e) {
    nn.removeBox(e, e.legend), delete e.legend;
  },
  beforeUpdate(e, t, n) {
    const r = e.legend;
    nn.configure(e, r, n), (r.options = n);
  },
  afterUpdate(e) {
    const t = e.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(e, t) {
    t.replay || e.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(e, t, n) {
      const r = t.datasetIndex,
        i = n.chart;
      i.isDatasetVisible(r)
        ? (i.hide(r), (t.hidden = !0))
        : (i.show(r), (t.hidden = !1));
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (e) => e.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(e) {
        const t = e.data.datasets,
          {
            labels: {
              usePointStyle: n,
              pointStyle: r,
              textAlign: i,
              color: o,
              useBorderRadius: s,
              borderRadius: a,
            },
          } = e.legend.options;
        return e._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(n ? 0 : void 0),
            u = vt(c.borderWidth);
          return {
            text: t[l.index].label,
            fillStyle: c.backgroundColor,
            fontColor: o,
            hidden: !l.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (u.width + u.height) / 4,
            strokeStyle: c.borderColor,
            pointStyle: r || c.pointStyle,
            rotation: c.rotation,
            textAlign: i || c.textAlign,
            borderRadius: s && (a || c.borderRadius),
            datasetIndex: l.index,
          };
        }, this);
      },
    },
    title: {
      color: (e) => e.chart.options.color,
      display: !1,
      position: "center",
      text: "",
    },
  },
  descriptors: {
    _scriptable: (e) => !e.startsWith("on"),
    labels: {
      _scriptable: (e) => !["generateLabels", "filter", "sort"].includes(e),
    },
  },
};
class Wb extends sr {
  constructor(t) {
    super(),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, n) {
    const r = this.options;
    if (((this.left = 0), (this.top = 0), !r.display)) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    (this.width = this.right = t), (this.height = this.bottom = n);
    const i = De(r.text) ? r.text.length : 1;
    this._padding = vt(r.padding);
    const o = i * qe(r.font).lineHeight + this._padding.height;
    this.isHorizontal() ? (this.height = o) : (this.width = o);
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: n, left: r, bottom: i, right: o, options: s } = this,
      a = s.align;
    let l = 0,
      c,
      u,
      d;
    return (
      this.isHorizontal()
        ? ((u = gt(a, r, o)), (d = n + t), (c = o - r))
        : (s.position === "left"
            ? ((u = r + t), (d = gt(a, i, n)), (l = Ke * -0.5))
            : ((u = o - t), (d = gt(a, n, i)), (l = Ke * 0.5)),
          (c = i - n)),
      { titleX: u, titleY: d, maxWidth: c, rotation: l }
    );
  }
  draw() {
    const t = this.ctx,
      n = this.options;
    if (!n.display) return;
    const r = qe(n.font),
      o = r.lineHeight / 2 + this._padding.top,
      { titleX: s, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
    vi(t, n.text, 0, 0, r, {
      color: n.color,
      maxWidth: l,
      rotation: c,
      textAlign: Dh(n.align),
      textBaseline: "middle",
      translation: [s, a],
    });
  }
}
function D5(e, t) {
  const n = new Wb({ ctx: e.ctx, options: t, chart: e });
  nn.configure(e, n, t), nn.addBox(e, n), (e.titleBlock = n);
}
var ku = {
  id: "title",
  _element: Wb,
  start(e, t, n) {
    D5(e, n);
  },
  stop(e) {
    const t = e.titleBlock;
    nn.removeBox(e, t), delete e.titleBlock;
  },
  beforeUpdate(e, t, n) {
    const r = e.titleBlock;
    nn.configure(e, r, n), (r.options = n);
  },
  defaults: {
    align: "center",
    display: !1,
    font: { weight: "bold" },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3,
  },
  defaultRoutes: { color: "color" },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const vs = {
  average(e) {
    if (!e.length) return !1;
    let t,
      n,
      r = new Set(),
      i = 0,
      o = 0;
    for (t = 0, n = e.length; t < n; ++t) {
      const a = e[t].element;
      if (a && a.hasValue()) {
        const l = a.tooltipPosition();
        r.add(l.x), (i += l.y), ++o;
      }
    }
    return o === 0 || r.size === 0
      ? !1
      : { x: [...r].reduce((a, l) => a + l) / r.size, y: i / o };
  },
  nearest(e, t) {
    if (!e.length) return !1;
    let n = t.x,
      r = t.y,
      i = Number.POSITIVE_INFINITY,
      o,
      s,
      a;
    for (o = 0, s = e.length; o < s; ++o) {
      const l = e[o].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(),
          u = Vf(t, c);
        u < i && ((i = u), (a = l));
      }
    }
    if (a) {
      const l = a.tooltipPosition();
      (n = l.x), (r = l.y);
    }
    return { x: n, y: r };
  },
};
function En(e, t) {
  return t && (De(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e;
}
function Un(e) {
  return (typeof e == "string" || e instanceof String) &&
    e.indexOf(`
`) > -1
    ? e.split(`
`)
    : e;
}
function N5(e, t) {
  const { element: n, datasetIndex: r, index: i } = t,
    o = e.getDatasetMeta(r).controller,
    { label: s, value: a } = o.getLabelAndValue(i);
  return {
    chart: e,
    label: s,
    parsed: o.getParsed(i),
    raw: e.data.datasets[r].data[i],
    formattedValue: a,
    dataset: o.getDataset(),
    dataIndex: i,
    datasetIndex: r,
    element: n,
  };
}
function Q0(e, t) {
  const n = e.chart.ctx,
    { body: r, footer: i, title: o } = e,
    { boxWidth: s, boxHeight: a } = t,
    l = qe(t.bodyFont),
    c = qe(t.titleFont),
    u = qe(t.footerFont),
    d = o.length,
    f = i.length,
    p = r.length,
    h = vt(t.padding);
  let y = h.height,
    x = 0,
    g = r.reduce(
      (S, w) => S + w.before.length + w.lines.length + w.after.length,
      0
    );
  if (
    ((g += e.beforeBody.length + e.afterBody.length),
    d &&
      (y += d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom),
    g)
  ) {
    const S = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    y += p * S + (g - p) * l.lineHeight + (g - 1) * t.bodySpacing;
  }
  f && (y += t.footerMarginTop + f * u.lineHeight + (f - 1) * t.footerSpacing);
  let v = 0;
  const m = function (S) {
    x = Math.max(x, n.measureText(S).width + v);
  };
  return (
    n.save(),
    (n.font = c.string),
    he(e.title, m),
    (n.font = l.string),
    he(e.beforeBody.concat(e.afterBody), m),
    (v = t.displayColors ? s + 2 + t.boxPadding : 0),
    he(r, (S) => {
      he(S.before, m), he(S.lines, m), he(S.after, m);
    }),
    (v = 0),
    (n.font = u.string),
    he(e.footer, m),
    n.restore(),
    (x += h.width),
    { width: x, height: y }
  );
}
function B5(e, t) {
  const { y: n, height: r } = t;
  return n < r / 2 ? "top" : n > e.height - r / 2 ? "bottom" : "center";
}
function j5(e, t, n, r) {
  const { x: i, width: o } = r,
    s = n.caretSize + n.caretPadding;
  if ((e === "left" && i + o + s > t.width) || (e === "right" && i - o - s < 0))
    return !0;
}
function W5(e, t, n, r) {
  const { x: i, width: o } = n,
    {
      width: s,
      chartArea: { left: a, right: l },
    } = e;
  let c = "center";
  return (
    r === "center"
      ? (c = i <= (a + l) / 2 ? "left" : "right")
      : i <= o / 2
      ? (c = "left")
      : i >= s - o / 2 && (c = "right"),
    j5(c, e, t, n) && (c = "center"),
    c
  );
}
function q0(e, t, n) {
  const r = n.yAlign || t.yAlign || B5(e, n);
  return { xAlign: n.xAlign || t.xAlign || W5(e, t, n, r), yAlign: r };
}
function H5(e, t) {
  let { x: n, width: r } = e;
  return t === "right" ? (n -= r) : t === "center" && (n -= r / 2), n;
}
function U5(e, t, n) {
  let { y: r, height: i } = e;
  return (
    t === "top" ? (r += n) : t === "bottom" ? (r -= i + n) : (r -= i / 2), r
  );
}
function J0(e, t, n, r) {
  const { caretSize: i, caretPadding: o, cornerRadius: s } = e,
    { xAlign: a, yAlign: l } = n,
    c = i + o,
    { topLeft: u, topRight: d, bottomLeft: f, bottomRight: p } = so(s);
  let h = H5(t, a);
  const y = U5(t, l, c);
  return (
    l === "center"
      ? a === "left"
        ? (h += c)
        : a === "right" && (h -= c)
      : a === "left"
      ? (h -= Math.max(u, f) + i)
      : a === "right" && (h += Math.max(d, p) + i),
    { x: tn(h, 0, r.width - t.width), y: tn(y, 0, r.height - t.height) }
  );
}
function ul(e, t, n) {
  const r = vt(n.padding);
  return t === "center"
    ? e.x + e.width / 2
    : t === "right"
    ? e.x + e.width - r.right
    : e.x + r.left;
}
function Z0(e) {
  return En([], Un(e));
}
function V5(e, t, n) {
  return jr(e, { tooltip: t, tooltipItems: n, type: "tooltip" });
}
function ey(e, t) {
  const n = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return n ? e.override(n) : e;
}
const Hb = {
  beforeTitle: Wn,
  title(e) {
    if (e.length > 0) {
      const t = e[0],
        n = t.chart.data.labels,
        r = n ? n.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label) return t.label;
      if (r > 0 && t.dataIndex < r) return n[t.dataIndex];
    }
    return "";
  },
  afterTitle: Wn,
  beforeBody: Wn,
  beforeLabel: Wn,
  label(e) {
    if (this && this.options && this.options.mode === "dataset")
      return e.label + ": " + e.formattedValue || e.formattedValue;
    let t = e.dataset.label || "";
    t && (t += ": ");
    const n = e.formattedValue;
    return Ee(n) || (t += n), t;
  },
  labelColor(e) {
    const n = e.chart
      .getDatasetMeta(e.datasetIndex)
      .controller.getStyle(e.dataIndex);
    return {
      borderColor: n.borderColor,
      backgroundColor: n.backgroundColor,
      borderWidth: n.borderWidth,
      borderDash: n.borderDash,
      borderDashOffset: n.borderDashOffset,
      borderRadius: 0,
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(e) {
    const n = e.chart
      .getDatasetMeta(e.datasetIndex)
      .controller.getStyle(e.dataIndex);
    return { pointStyle: n.pointStyle, rotation: n.rotation };
  },
  afterLabel: Wn,
  afterBody: Wn,
  beforeFooter: Wn,
  footer: Wn,
  afterFooter: Wn,
};
function _t(e, t, n, r) {
  const i = e[t].call(n, r);
  return typeof i > "u" ? Hb[t].call(n, r) : i;
}
class qf extends sr {
  constructor(t) {
    super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0);
  }
  initialize(t) {
    (this.options = t),
      (this._cachedAnimations = void 0),
      (this.$context = void 0);
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t) return t;
    const n = this.chart,
      r = this.options.setContext(this.getContext()),
      i = r.enabled && n.options.animation && r.animations,
      o = new Mb(this.chart, i);
    return i._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = V5(this.chart.getContext(), this, this._tooltipItems))
    );
  }
  getTitle(t, n) {
    const { callbacks: r } = n,
      i = _t(r, "beforeTitle", this, t),
      o = _t(r, "title", this, t),
      s = _t(r, "afterTitle", this, t);
    let a = [];
    return (a = En(a, Un(i))), (a = En(a, Un(o))), (a = En(a, Un(s))), a;
  }
  getBeforeBody(t, n) {
    return Z0(_t(n.callbacks, "beforeBody", this, t));
  }
  getBody(t, n) {
    const { callbacks: r } = n,
      i = [];
    return (
      he(t, (o) => {
        const s = { before: [], lines: [], after: [] },
          a = ey(r, o);
        En(s.before, Un(_t(a, "beforeLabel", this, o))),
          En(s.lines, _t(a, "label", this, o)),
          En(s.after, Un(_t(a, "afterLabel", this, o))),
          i.push(s);
      }),
      i
    );
  }
  getAfterBody(t, n) {
    return Z0(_t(n.callbacks, "afterBody", this, t));
  }
  getFooter(t, n) {
    const { callbacks: r } = n,
      i = _t(r, "beforeFooter", this, t),
      o = _t(r, "footer", this, t),
      s = _t(r, "afterFooter", this, t);
    let a = [];
    return (a = En(a, Un(i))), (a = En(a, Un(o))), (a = En(a, Un(s))), a;
  }
  _createItems(t) {
    const n = this._active,
      r = this.chart.data,
      i = [],
      o = [],
      s = [];
    let a = [],
      l,
      c;
    for (l = 0, c = n.length; l < c; ++l) a.push(N5(this.chart, n[l]));
    return (
      t.filter && (a = a.filter((u, d, f) => t.filter(u, d, f, r))),
      t.itemSort && (a = a.sort((u, d) => t.itemSort(u, d, r))),
      he(a, (u) => {
        const d = ey(t.callbacks, u);
        i.push(_t(d, "labelColor", this, u)),
          o.push(_t(d, "labelPointStyle", this, u)),
          s.push(_t(d, "labelTextColor", this, u));
      }),
      (this.labelColors = i),
      (this.labelPointStyles = o),
      (this.labelTextColors = s),
      (this.dataPoints = a),
      a
    );
  }
  update(t, n) {
    const r = this.options.setContext(this.getContext()),
      i = this._active;
    let o,
      s = [];
    if (!i.length) this.opacity !== 0 && (o = { opacity: 0 });
    else {
      const a = vs[r.position].call(this, i, this._eventPosition);
      (s = this._createItems(r)),
        (this.title = this.getTitle(s, r)),
        (this.beforeBody = this.getBeforeBody(s, r)),
        (this.body = this.getBody(s, r)),
        (this.afterBody = this.getAfterBody(s, r)),
        (this.footer = this.getFooter(s, r));
      const l = (this._size = Q0(this, r)),
        c = Object.assign({}, a, l),
        u = q0(this.chart, r, c),
        d = J0(r, c, u, this.chart);
      (this.xAlign = u.xAlign),
        (this.yAlign = u.yAlign),
        (o = {
          opacity: 1,
          x: d.x,
          y: d.y,
          width: l.width,
          height: l.height,
          caretX: a.x,
          caretY: a.y,
        });
    }
    (this._tooltipItems = s),
      (this.$context = void 0),
      o && this._resolveAnimations().update(this, o),
      t &&
        r.external &&
        r.external.call(this, { chart: this.chart, tooltip: this, replay: n });
  }
  drawCaret(t, n, r, i) {
    const o = this.getCaretPosition(t, r, i);
    n.lineTo(o.x1, o.y1), n.lineTo(o.x2, o.y2), n.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, n, r) {
    const { xAlign: i, yAlign: o } = this,
      { caretSize: s, cornerRadius: a } = r,
      { topLeft: l, topRight: c, bottomLeft: u, bottomRight: d } = so(a),
      { x: f, y: p } = t,
      { width: h, height: y } = n;
    let x, g, v, m, S, w;
    return (
      o === "center"
        ? ((S = p + y / 2),
          i === "left"
            ? ((x = f), (g = x - s), (m = S + s), (w = S - s))
            : ((x = f + h), (g = x + s), (m = S - s), (w = S + s)),
          (v = x))
        : (i === "left"
            ? (g = f + Math.max(l, u) + s)
            : i === "right"
            ? (g = f + h - Math.max(c, d) - s)
            : (g = this.caretX),
          o === "top"
            ? ((m = p), (S = m - s), (x = g - s), (v = g + s))
            : ((m = p + y), (S = m + s), (x = g + s), (v = g - s)),
          (w = m)),
      { x1: x, x2: g, x3: v, y1: m, y2: S, y3: w }
    );
  }
  drawTitle(t, n, r) {
    const i = this.title,
      o = i.length;
    let s, a, l;
    if (o) {
      const c = ao(r.rtl, this.x, this.width);
      for (
        t.x = ul(this, r.titleAlign, r),
          n.textAlign = c.textAlign(r.titleAlign),
          n.textBaseline = "middle",
          s = qe(r.titleFont),
          a = r.titleSpacing,
          n.fillStyle = r.titleColor,
          n.font = s.string,
          l = 0;
        l < o;
        ++l
      )
        n.fillText(i[l], c.x(t.x), t.y + s.lineHeight / 2),
          (t.y += s.lineHeight + a),
          l + 1 === o && (t.y += r.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, n, r, i, o) {
    const s = this.labelColors[r],
      a = this.labelPointStyles[r],
      { boxHeight: l, boxWidth: c } = o,
      u = qe(o.bodyFont),
      d = ul(this, "left", o),
      f = i.x(d),
      p = l < u.lineHeight ? (u.lineHeight - l) / 2 : 0,
      h = n.y + p;
    if (o.usePointStyle) {
      const y = {
          radius: Math.min(c, l) / 2,
          pointStyle: a.pointStyle,
          rotation: a.rotation,
          borderWidth: 1,
        },
        x = i.leftForLtr(f, c) + c / 2,
        g = h + l / 2;
      (t.strokeStyle = o.multiKeyBackground),
        (t.fillStyle = o.multiKeyBackground),
        Kf(t, y, x, g),
        (t.strokeStyle = s.borderColor),
        (t.fillStyle = s.backgroundColor),
        Kf(t, y, x, g);
    } else {
      (t.lineWidth = de(s.borderWidth)
        ? Math.max(...Object.values(s.borderWidth))
        : s.borderWidth || 1),
        (t.strokeStyle = s.borderColor),
        t.setLineDash(s.borderDash || []),
        (t.lineDashOffset = s.borderDashOffset || 0);
      const y = i.leftForLtr(f, c),
        x = i.leftForLtr(i.xPlus(f, 1), c - 2),
        g = so(s.borderRadius);
      Object.values(g).some((v) => v !== 0)
        ? (t.beginPath(),
          (t.fillStyle = o.multiKeyBackground),
          bc(t, { x: y, y: h, w: c, h: l, radius: g }),
          t.fill(),
          t.stroke(),
          (t.fillStyle = s.backgroundColor),
          t.beginPath(),
          bc(t, { x, y: h + 1, w: c - 2, h: l - 2, radius: g }),
          t.fill())
        : ((t.fillStyle = o.multiKeyBackground),
          t.fillRect(y, h, c, l),
          t.strokeRect(y, h, c, l),
          (t.fillStyle = s.backgroundColor),
          t.fillRect(x, h + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[r];
  }
  drawBody(t, n, r) {
    const { body: i } = this,
      {
        bodySpacing: o,
        bodyAlign: s,
        displayColors: a,
        boxHeight: l,
        boxWidth: c,
        boxPadding: u,
      } = r,
      d = qe(r.bodyFont);
    let f = d.lineHeight,
      p = 0;
    const h = ao(r.rtl, this.x, this.width),
      y = function (M) {
        n.fillText(M, h.x(t.x + p), t.y + f / 2), (t.y += f + o);
      },
      x = h.textAlign(s);
    let g, v, m, S, w, _, k;
    for (
      n.textAlign = s,
        n.textBaseline = "middle",
        n.font = d.string,
        t.x = ul(this, x, r),
        n.fillStyle = r.bodyColor,
        he(this.beforeBody, y),
        p = a && x !== "right" ? (s === "center" ? c / 2 + u : c + 2 + u) : 0,
        S = 0,
        _ = i.length;
      S < _;
      ++S
    ) {
      for (
        g = i[S],
          v = this.labelTextColors[S],
          n.fillStyle = v,
          he(g.before, y),
          m = g.lines,
          a &&
            m.length &&
            (this._drawColorBox(n, t, S, h, r),
            (f = Math.max(d.lineHeight, l))),
          w = 0,
          k = m.length;
        w < k;
        ++w
      )
        y(m[w]), (f = d.lineHeight);
      he(g.after, y);
    }
    (p = 0), (f = d.lineHeight), he(this.afterBody, y), (t.y -= o);
  }
  drawFooter(t, n, r) {
    const i = this.footer,
      o = i.length;
    let s, a;
    if (o) {
      const l = ao(r.rtl, this.x, this.width);
      for (
        t.x = ul(this, r.footerAlign, r),
          t.y += r.footerMarginTop,
          n.textAlign = l.textAlign(r.footerAlign),
          n.textBaseline = "middle",
          s = qe(r.footerFont),
          n.fillStyle = r.footerColor,
          n.font = s.string,
          a = 0;
        a < o;
        ++a
      )
        n.fillText(i[a], l.x(t.x), t.y + s.lineHeight / 2),
          (t.y += s.lineHeight + r.footerSpacing);
    }
  }
  drawBackground(t, n, r, i) {
    const { xAlign: o, yAlign: s } = this,
      { x: a, y: l } = t,
      { width: c, height: u } = r,
      {
        topLeft: d,
        topRight: f,
        bottomLeft: p,
        bottomRight: h,
      } = so(i.cornerRadius);
    (n.fillStyle = i.backgroundColor),
      (n.strokeStyle = i.borderColor),
      (n.lineWidth = i.borderWidth),
      n.beginPath(),
      n.moveTo(a + d, l),
      s === "top" && this.drawCaret(t, n, r, i),
      n.lineTo(a + c - f, l),
      n.quadraticCurveTo(a + c, l, a + c, l + f),
      s === "center" && o === "right" && this.drawCaret(t, n, r, i),
      n.lineTo(a + c, l + u - h),
      n.quadraticCurveTo(a + c, l + u, a + c - h, l + u),
      s === "bottom" && this.drawCaret(t, n, r, i),
      n.lineTo(a + p, l + u),
      n.quadraticCurveTo(a, l + u, a, l + u - p),
      s === "center" && o === "left" && this.drawCaret(t, n, r, i),
      n.lineTo(a, l + d),
      n.quadraticCurveTo(a, l, a + d, l),
      n.closePath(),
      n.fill(),
      i.borderWidth > 0 && n.stroke();
  }
  _updateAnimationTarget(t) {
    const n = this.chart,
      r = this.$animations,
      i = r && r.x,
      o = r && r.y;
    if (i || o) {
      const s = vs[t.position].call(this, this._active, this._eventPosition);
      if (!s) return;
      const a = (this._size = Q0(this, t)),
        l = Object.assign({}, s, this._size),
        c = q0(n, t, l),
        u = J0(t, l, c, n);
      (i._to !== u.x || o._to !== u.y) &&
        ((this.xAlign = c.xAlign),
        (this.yAlign = c.yAlign),
        (this.width = a.width),
        (this.height = a.height),
        (this.caretX = s.x),
        (this.caretY = s.y),
        this._resolveAnimations().update(this, u));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const n = this.options.setContext(this.getContext());
    let r = this.opacity;
    if (!r) return;
    this._updateAnimationTarget(n);
    const i = { width: this.width, height: this.height },
      o = { x: this.x, y: this.y };
    r = Math.abs(r) < 0.001 ? 0 : r;
    const s = vt(n.padding),
      a =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length;
    n.enabled &&
      a &&
      (t.save(),
      (t.globalAlpha = r),
      this.drawBackground(o, t, i, n),
      _b(t, n.textDirection),
      (o.y += s.top),
      this.drawTitle(o, t, n),
      this.drawBody(o, t, n),
      this.drawFooter(o, t, n),
      Pb(t, n.textDirection),
      t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, n) {
    const r = this._active,
      i = t.map(({ datasetIndex: a, index: l }) => {
        const c = this.chart.getDatasetMeta(a);
        if (!c) throw new Error("Cannot find a dataset at index " + a);
        return { datasetIndex: a, element: c.data[l], index: l };
      }),
      o = !hc(r, i),
      s = this._positionChanged(i, n);
    (o || s) &&
      ((this._active = i),
      (this._eventPosition = n),
      (this._ignoreReplayEvents = !0),
      this.update(!0));
  }
  handleEvent(t, n, r = !0) {
    if (n && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const i = this.options,
      o = this._active || [],
      s = this._getActiveElements(t, o, n, r),
      a = this._positionChanged(s, t),
      l = n || !hc(s, o) || a;
    return (
      l &&
        ((this._active = s),
        (i.enabled || i.external) &&
          ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, n))),
      l
    );
  }
  _getActiveElements(t, n, r, i) {
    const o = this.options;
    if (t.type === "mouseout") return [];
    if (!i)
      return n.filter(
        (a) =>
          this.chart.data.datasets[a.datasetIndex] &&
          this.chart
            .getDatasetMeta(a.datasetIndex)
            .controller.getParsed(a.index) !== void 0
      );
    const s = this.chart.getElementsAtEventForMode(t, o.mode, o, r);
    return o.reverse && s.reverse(), s;
  }
  _positionChanged(t, n) {
    const { caretX: r, caretY: i, options: o } = this,
      s = vs[o.position].call(this, t, n);
    return s !== !1 && (r !== s.x || i !== s.y);
  }
}
Y(qf, "positioners", vs);
var _u = {
  id: "tooltip",
  _element: qf,
  positioners: vs,
  afterInit(e, t, n) {
    n && (e.tooltip = new qf({ chart: e, options: n }));
  },
  beforeUpdate(e, t, n) {
    e.tooltip && e.tooltip.initialize(n);
  },
  reset(e, t, n) {
    e.tooltip && e.tooltip.initialize(n);
  },
  afterDraw(e) {
    const t = e.tooltip;
    if (t && t._willRender()) {
      const n = { tooltip: t };
      if (e.notifyPlugins("beforeTooltipDraw", { ...n, cancelable: !0 }) === !1)
        return;
      t.draw(e.ctx), e.notifyPlugins("afterTooltipDraw", n);
    }
  },
  afterEvent(e, t) {
    if (e.tooltip) {
      const n = t.replay;
      e.tooltip.handleEvent(t.event, n, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: { weight: "bold" },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: { weight: "bold" },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (e, t) => t.bodyFont.size,
    boxWidth: (e, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: { duration: 400, easing: "easeOutQuart" },
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "width", "height", "caretX", "caretY"],
      },
      opacity: { easing: "linear", duration: 200 },
    },
    callbacks: Hb,
  },
  defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
  descriptors: {
    _scriptable: (e) => e !== "filter" && e !== "itemSort" && e !== "external",
    _indexable: !1,
    callbacks: { _scriptable: !1, _indexable: !1 },
    animation: { _fallback: !1 },
    animations: { _fallback: "animation" },
  },
  additionalOptionScopes: ["interaction"],
};
const G5 = (e, t, n, r) => (
  typeof t == "string"
    ? ((n = e.push(t) - 1), r.unshift({ index: n, label: t }))
    : isNaN(t) && (n = null),
  n
);
function K5(e, t, n, r) {
  const i = e.indexOf(t);
  if (i === -1) return G5(e, t, n, r);
  const o = e.lastIndexOf(t);
  return i !== o ? n : i;
}
const Y5 = (e, t) => (e === null ? null : tn(Math.round(e), 0, t));
function ty(e) {
  const t = this.getLabels();
  return e >= 0 && e < t.length ? t[e] : e;
}
class So extends wi {
  constructor(t) {
    super(t),
      (this._startValue = void 0),
      (this._valueRange = 0),
      (this._addedLabels = []);
  }
  init(t) {
    const n = this._addedLabels;
    if (n.length) {
      const r = this.getLabels();
      for (const { index: i, label: o } of n) r[i] === o && r.splice(i, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, n) {
    if (Ee(t)) return null;
    const r = this.getLabels();
    return (
      (n =
        isFinite(n) && r[n] === t ? n : K5(r, t, ee(n, t), this._addedLabels)),
      Y5(n, r.length - 1)
    );
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: n } = this.getUserBounds();
    let { min: r, max: i } = this.getMinMax(!0);
    this.options.bounds === "ticks" &&
      (t || (r = 0), n || (i = this.getLabels().length - 1)),
      (this.min = r),
      (this.max = i);
  }
  buildTicks() {
    const t = this.min,
      n = this.max,
      r = this.options.offset,
      i = [];
    let o = this.getLabels();
    (o = t === 0 && n === o.length - 1 ? o : o.slice(t, n + 1)),
      (this._valueRange = Math.max(o.length - (r ? 0 : 1), 1)),
      (this._startValue = this.min - (r ? 0.5 : 0));
    for (let s = t; s <= n; s++) i.push({ value: s });
    return i;
  }
  getLabelForValue(t) {
    return ty.call(this, t);
  }
  configure() {
    super.configure(),
      this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return (
      typeof t != "number" && (t = this.parse(t)),
      t === null
        ? NaN
        : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    );
  }
  getPixelForTick(t) {
    const n = this.ticks;
    return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value);
  }
  getValueForPixel(t) {
    return Math.round(
      this._startValue + this.getDecimalForPixel(t) * this._valueRange
    );
  }
  getBasePixel() {
    return this.bottom;
  }
}
Y(So, "id", "category"), Y(So, "defaults", { ticks: { callback: ty } });
function X5(e, t) {
  const n = [],
    {
      bounds: i,
      step: o,
      min: s,
      max: a,
      precision: l,
      count: c,
      maxTicks: u,
      maxDigits: d,
      includeBounds: f,
    } = e,
    p = o || 1,
    h = u - 1,
    { min: y, max: x } = t,
    g = !Ee(s),
    v = !Ee(a),
    m = !Ee(c),
    S = (x - y) / (d + 1);
  let w = s0((x - y) / h / p) * p,
    _,
    k,
    M,
    b;
  if (w < 1e-14 && !g && !v) return [{ value: y }, { value: x }];
  (b = Math.ceil(x / w) - Math.floor(y / w)),
    b > h && (w = s0((b * w) / h / p) * p),
    Ee(l) || ((_ = Math.pow(10, l)), (w = Math.ceil(w * _) / _)),
    i === "ticks"
      ? ((k = Math.floor(y / w) * w), (M = Math.ceil(x / w) * w))
      : ((k = y), (M = x)),
    g && v && o && BR((a - s) / o, w / 1e3)
      ? ((b = Math.round(Math.min((a - s) / w, u))),
        (w = (a - s) / b),
        (k = s),
        (M = a))
      : m
      ? ((k = g ? s : k), (M = v ? a : M), (b = c - 1), (w = (M - k) / b))
      : ((b = (M - k) / w),
        Is(b, Math.round(b), w / 1e3)
          ? (b = Math.round(b))
          : (b = Math.ceil(b)));
  const E = Math.max(a0(w), a0(k));
  (_ = Math.pow(10, Ee(l) ? E : l)),
    (k = Math.round(k * _) / _),
    (M = Math.round(M * _) / _);
  let R = 0;
  for (
    g &&
    (f && k !== s
      ? (n.push({ value: s }),
        k < s && R++,
        Is(Math.round((k + R * w) * _) / _, s, ny(s, S, e)) && R++)
      : k < s && R++);
    R < b;
    ++R
  ) {
    const I = Math.round((k + R * w) * _) / _;
    if (v && I > a) break;
    n.push({ value: I });
  }
  return (
    v && f && M !== a
      ? n.length && Is(n[n.length - 1].value, a, ny(a, S, e))
        ? (n[n.length - 1].value = a)
        : n.push({ value: a })
      : (!v || M === a) && n.push({ value: M }),
    n
  );
}
function ny(e, t, { horizontal: n, minRotation: r }) {
  const i = br(r),
    o = (n ? Math.sin(i) : Math.cos(i)) || 0.001,
    s = 0.75 * t * ("" + e).length;
  return Math.min(t / o, s);
}
class wc extends wi {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, n) {
    return Ee(t) ||
      ((typeof t == "number" || t instanceof Number) && !isFinite(+t))
      ? null
      : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options,
      { minDefined: n, maxDefined: r } = this.getUserBounds();
    let { min: i, max: o } = this;
    const s = (l) => (i = n ? i : l),
      a = (l) => (o = r ? o : l);
    if (t) {
      const l = vo(i),
        c = vo(o);
      l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && s(0);
    }
    if (i === o) {
      let l = o === 0 ? 1 : Math.abs(o * 0.05);
      a(o + l), t || s(i - l);
    }
    (this.min = i), (this.max = o);
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: n, stepSize: r } = t,
      i;
    return (
      r
        ? ((i = Math.ceil(this.max / r) - Math.floor(this.min / r) + 1),
          i > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${i} ticks. Limiting to 1000.`
            ),
            (i = 1e3)))
        : ((i = this.computeTickLimit()), (n = n || 11)),
      n && (i = Math.min(n, i)),
      i
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options,
      n = t.ticks;
    let r = this.getTickLimit();
    r = Math.max(2, r);
    const i = {
        maxTicks: r,
        bounds: t.bounds,
        min: t.min,
        max: t.max,
        precision: n.precision,
        step: n.stepSize,
        count: n.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: n.minRotation || 0,
        includeBounds: n.includeBounds !== !1,
      },
      o = this._range || this,
      s = X5(i, o);
    return (
      t.bounds === "ticks" && fb(s, this, "value"),
      t.reverse
        ? (s.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      s
    );
  }
  configure() {
    const t = this.ticks;
    let n = this.min,
      r = this.max;
    if ((super.configure(), this.options.offset && t.length)) {
      const i = (r - n) / Math.max(t.length - 1, 1) / 2;
      (n -= i), (r += i);
    }
    (this._startValue = n), (this._endValue = r), (this._valueRange = r - n);
  }
  getLabelForValue(t) {
    return Bh(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Co extends wc {
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0);
    (this.min = Ze(t) ? t : 0),
      (this.max = Ze(n) ? n : 1),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(),
      n = t ? this.width : this.height,
      r = br(this.options.ticks.minRotation),
      i = (t ? Math.sin(r) : Math.cos(r)) || 0.001,
      o = this._resolveTickFontOptions(0);
    return Math.ceil(n / Math.min(40, o.lineHeight / i));
  }
  getPixelForValue(t) {
    return t === null
      ? NaN
      : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
Y(Co, "id", "linear"),
  Y(Co, "defaults", { ticks: { callback: Su.formatters.numeric } });
const fa = (e) => Math.floor(xr(e)),
  Gr = (e, t) => Math.pow(10, fa(e) + t);
function ry(e) {
  return e / Math.pow(10, fa(e)) === 1;
}
function iy(e, t, n) {
  const r = Math.pow(10, n),
    i = Math.floor(e / r);
  return Math.ceil(t / r) - i;
}
function Q5(e, t) {
  const n = t - e;
  let r = fa(n);
  for (; iy(e, t, r) > 10; ) r++;
  for (; iy(e, t, r) < 10; ) r--;
  return Math.min(r, fa(e));
}
function q5(e, { min: t, max: n }) {
  t = Lt(e.min, t);
  const r = [],
    i = fa(t);
  let o = Q5(t, n),
    s = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
  const a = Math.pow(10, o),
    l = i > o ? Math.pow(10, i) : 0,
    c = Math.round((t - l) * s) / s,
    u = Math.floor((t - l) / a / 10) * a * 10;
  let d = Math.floor((c - u) / Math.pow(10, o)),
    f = Lt(e.min, Math.round((l + u + d * Math.pow(10, o)) * s) / s);
  for (; f < n; )
    r.push({ value: f, major: ry(f), significand: d }),
      d >= 10 ? (d = d < 15 ? 15 : 20) : d++,
      d >= 20 && (o++, (d = 2), (s = o >= 0 ? 1 : s)),
      (f = Math.round((l + u + d * Math.pow(10, o)) * s) / s);
  const p = Lt(e.max, f);
  return r.push({ value: p, major: ry(p), significand: d }), r;
}
class oy extends wi {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, n) {
    const r = wc.prototype.parse.apply(this, [t, n]);
    if (r === 0) {
      this._zero = !0;
      return;
    }
    return Ze(r) && r > 0 ? r : null;
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0);
    (this.min = Ze(t) ? Math.max(0, t) : null),
      (this.max = Ze(n) ? Math.max(0, n) : null),
      this.options.beginAtZero && (this._zero = !0),
      this._zero &&
        this.min !== this._suggestedMin &&
        !Ze(this._userMin) &&
        (this.min = t === Gr(this.min, 0) ? Gr(this.min, -1) : Gr(this.min, 0)),
      this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: n } = this.getUserBounds();
    let r = this.min,
      i = this.max;
    const o = (a) => (r = t ? r : a),
      s = (a) => (i = n ? i : a);
    r === i && (r <= 0 ? (o(1), s(10)) : (o(Gr(r, -1)), s(Gr(i, 1)))),
      r <= 0 && o(Gr(i, -1)),
      i <= 0 && s(Gr(r, 1)),
      (this.min = r),
      (this.max = i);
  }
  buildTicks() {
    const t = this.options,
      n = { min: this._userMin, max: this._userMax },
      r = q5(n, this);
    return (
      t.bounds === "ticks" && fb(r, this, "value"),
      t.reverse
        ? (r.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      r
    );
  }
  getLabelForValue(t) {
    return t === void 0
      ? "0"
      : Bh(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(),
      (this._startValue = xr(t)),
      (this._valueRange = xr(this.max) - xr(t));
  }
  getPixelForValue(t) {
    return (
      (t === void 0 || t === 0) && (t = this.min),
      t === null || isNaN(t)
        ? NaN
        : this.getPixelForDecimal(
            t === this.min ? 0 : (xr(t) - this._startValue) / this._valueRange
          )
    );
  }
  getValueForPixel(t) {
    const n = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + n * this._valueRange);
  }
}
Y(oy, "id", "logarithmic"),
  Y(oy, "defaults", {
    ticks: { callback: Su.formatters.logarithmic, major: { enabled: !0 } },
  });
function Jf(e) {
  const t = e.ticks;
  if (t.display && e.display) {
    const n = vt(t.backdropPadding);
    return ee(t.font && t.font.size, Ne.font.size) + n.height;
  }
  return 0;
}
function J5(e, t, n) {
  return (
    (n = De(n) ? n : [n]), { w: aO(e, t.string, n), h: n.length * t.lineHeight }
  );
}
function sy(e, t, n, r, i) {
  return e === r || e === i
    ? { start: t - n / 2, end: t + n / 2 }
    : e < r || e > i
    ? { start: t - n, end: t }
    : { start: t, end: t + n };
}
function Z5(e) {
  const t = {
      l: e.left + e._padding.left,
      r: e.right - e._padding.right,
      t: e.top + e._padding.top,
      b: e.bottom - e._padding.bottom,
    },
    n = Object.assign({}, t),
    r = [],
    i = [],
    o = e._pointLabels.length,
    s = e.options.pointLabels,
    a = s.centerPointLabels ? Ke / o : 0;
  for (let l = 0; l < o; l++) {
    const c = s.setContext(e.getPointLabelContext(l));
    i[l] = c.padding;
    const u = e.getPointPosition(l, e.drawingArea + i[l], a),
      d = qe(c.font),
      f = J5(e.ctx, d, e._pointLabels[l]);
    r[l] = f;
    const p = gn(e.getIndexAngle(l) + a),
      h = Math.round(Fh(p)),
      y = sy(h, u.x, f.w, 0, 180),
      x = sy(h, u.y, f.h, 90, 270);
    eA(n, t, p, y, x);
  }
  e.setCenterPoint(t.l - n.l, n.r - t.r, t.t - n.t, n.b - t.b),
    (e._pointLabelItems = rA(e, r, i));
}
function eA(e, t, n, r, i) {
  const o = Math.abs(Math.sin(n)),
    s = Math.abs(Math.cos(n));
  let a = 0,
    l = 0;
  r.start < t.l
    ? ((a = (t.l - r.start) / o), (e.l = Math.min(e.l, t.l - a)))
    : r.end > t.r && ((a = (r.end - t.r) / o), (e.r = Math.max(e.r, t.r + a))),
    i.start < t.t
      ? ((l = (t.t - i.start) / s), (e.t = Math.min(e.t, t.t - l)))
      : i.end > t.b &&
        ((l = (i.end - t.b) / s), (e.b = Math.max(e.b, t.b + l)));
}
function tA(e, t, n) {
  const r = e.drawingArea,
    { extra: i, additionalAngle: o, padding: s, size: a } = n,
    l = e.getPointPosition(t, r + i + s, o),
    c = Math.round(Fh(gn(l.angle + Dt))),
    u = sA(l.y, a.h, c),
    d = iA(c),
    f = oA(l.x, a.w, d);
  return {
    visible: !0,
    x: l.x,
    y: u,
    textAlign: d,
    left: f,
    top: u,
    right: f + a.w,
    bottom: u + a.h,
  };
}
function nA(e, t) {
  if (!t) return !0;
  const { left: n, top: r, right: i, bottom: o } = e;
  return !(
    qn({ x: n, y: r }, t) ||
    qn({ x: n, y: o }, t) ||
    qn({ x: i, y: r }, t) ||
    qn({ x: i, y: o }, t)
  );
}
function rA(e, t, n) {
  const r = [],
    i = e._pointLabels.length,
    o = e.options,
    { centerPointLabels: s, display: a } = o.pointLabels,
    l = { extra: Jf(o) / 2, additionalAngle: s ? Ke / i : 0 };
  let c;
  for (let u = 0; u < i; u++) {
    (l.padding = n[u]), (l.size = t[u]);
    const d = tA(e, u, l);
    r.push(d), a === "auto" && ((d.visible = nA(d, c)), d.visible && (c = d));
  }
  return r;
}
function iA(e) {
  return e === 0 || e === 180 ? "center" : e < 180 ? "left" : "right";
}
function oA(e, t, n) {
  return n === "right" ? (e -= t) : n === "center" && (e -= t / 2), e;
}
function sA(e, t, n) {
  return (
    n === 90 || n === 270 ? (e -= t / 2) : (n > 270 || n < 90) && (e -= t), e
  );
}
function aA(e, t, n) {
  const { left: r, top: i, right: o, bottom: s } = n,
    { backdropColor: a } = t;
  if (!Ee(a)) {
    const l = so(t.borderRadius),
      c = vt(t.backdropPadding);
    e.fillStyle = a;
    const u = r - c.left,
      d = i - c.top,
      f = o - r + c.width,
      p = s - i + c.height;
    Object.values(l).some((h) => h !== 0)
      ? (e.beginPath(), bc(e, { x: u, y: d, w: f, h: p, radius: l }), e.fill())
      : e.fillRect(u, d, f, p);
  }
}
function lA(e, t) {
  const {
    ctx: n,
    options: { pointLabels: r },
  } = e;
  for (let i = t - 1; i >= 0; i--) {
    const o = e._pointLabelItems[i];
    if (!o.visible) continue;
    const s = r.setContext(e.getPointLabelContext(i));
    aA(n, s, o);
    const a = qe(s.font),
      { x: l, y: c, textAlign: u } = o;
    vi(n, e._pointLabels[i], l, c + a.lineHeight / 2, a, {
      color: s.color,
      textAlign: u,
      textBaseline: "middle",
    });
  }
}
function Ub(e, t, n, r) {
  const { ctx: i } = e;
  if (n) i.arc(e.xCenter, e.yCenter, t, 0, on);
  else {
    let o = e.getPointPosition(0, t);
    i.moveTo(o.x, o.y);
    for (let s = 1; s < r; s++)
      (o = e.getPointPosition(s, t)), i.lineTo(o.x, o.y);
  }
}
function cA(e, t, n, r, i) {
  const o = e.ctx,
    s = t.circular,
    { color: a, lineWidth: l } = t;
  (!s && !r) ||
    !a ||
    !l ||
    n < 0 ||
    (o.save(),
    (o.strokeStyle = a),
    (o.lineWidth = l),
    o.setLineDash(i.dash),
    (o.lineDashOffset = i.dashOffset),
    o.beginPath(),
    Ub(e, n, s, r),
    o.closePath(),
    o.stroke(),
    o.restore());
}
function uA(e, t, n) {
  return jr(e, { label: n, index: t, type: "pointLabel" });
}
class dl extends wc {
  constructor(t) {
    super(t),
      (this.xCenter = void 0),
      (this.yCenter = void 0),
      (this.drawingArea = void 0),
      (this._pointLabels = []),
      (this._pointLabelItems = []);
  }
  setDimensions() {
    const t = (this._padding = vt(Jf(this.options) / 2)),
      n = (this.width = this.maxWidth - t.width),
      r = (this.height = this.maxHeight - t.height);
    (this.xCenter = Math.floor(this.left + n / 2 + t.left)),
      (this.yCenter = Math.floor(this.top + r / 2 + t.top)),
      (this.drawingArea = Math.floor(Math.min(n, r) / 2));
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!1);
    (this.min = Ze(t) && !isNaN(t) ? t : 0),
      (this.max = Ze(n) && !isNaN(n) ? n : 0),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Jf(this.options));
  }
  generateTickLabels(t) {
    wc.prototype.generateTickLabels.call(this, t),
      (this._pointLabels = this.getLabels()
        .map((n, r) => {
          const i = Ce(this.options.pointLabels.callback, [n, r], this);
          return i || i === 0 ? i : "";
        })
        .filter((n, r) => this.chart.getDataVisibility(r)));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display
      ? Z5(this)
      : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, n, r, i) {
    (this.xCenter += Math.floor((t - n) / 2)),
      (this.yCenter += Math.floor((r - i) / 2)),
      (this.drawingArea -= Math.min(
        this.drawingArea / 2,
        Math.max(t, n, r, i)
      ));
  }
  getIndexAngle(t) {
    const n = on / (this._pointLabels.length || 1),
      r = this.options.startAngle || 0;
    return gn(t * n + br(r));
  }
  getDistanceFromCenterForValue(t) {
    if (Ee(t)) return NaN;
    const n = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * n : (t - this.min) * n;
  }
  getValueForDistanceFromCenter(t) {
    if (Ee(t)) return NaN;
    const n = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - n : this.min + n;
  }
  getPointLabelContext(t) {
    const n = this._pointLabels || [];
    if (t >= 0 && t < n.length) {
      const r = n[t];
      return uA(this.getContext(), t, r);
    }
  }
  getPointPosition(t, n, r = 0) {
    const i = this.getIndexAngle(t) - Dt + r;
    return {
      x: Math.cos(i) * n + this.xCenter,
      y: Math.sin(i) * n + this.yCenter,
      angle: i,
    };
  }
  getPointPositionForValue(t, n) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(n));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: n, top: r, right: i, bottom: o } = this._pointLabelItems[t];
    return { left: n, top: r, right: i, bottom: o };
  }
  drawBackground() {
    const {
      backgroundColor: t,
      grid: { circular: n },
    } = this.options;
    if (t) {
      const r = this.ctx;
      r.save(),
        r.beginPath(),
        Ub(
          this,
          this.getDistanceFromCenterForValue(this._endValue),
          n,
          this._pointLabels.length
        ),
        r.closePath(),
        (r.fillStyle = t),
        r.fill(),
        r.restore();
    }
  }
  drawGrid() {
    const t = this.ctx,
      n = this.options,
      { angleLines: r, grid: i, border: o } = n,
      s = this._pointLabels.length;
    let a, l, c;
    if (
      (n.pointLabels.display && lA(this, s),
      i.display &&
        this.ticks.forEach((u, d) => {
          if (d !== 0 || (d === 0 && this.min < 0)) {
            l = this.getDistanceFromCenterForValue(u.value);
            const f = this.getContext(d),
              p = i.setContext(f),
              h = o.setContext(f);
            cA(this, p, l, s, h);
          }
        }),
      r.display)
    ) {
      for (t.save(), a = s - 1; a >= 0; a--) {
        const u = r.setContext(this.getPointLabelContext(a)),
          { color: d, lineWidth: f } = u;
        !f ||
          !d ||
          ((t.lineWidth = f),
          (t.strokeStyle = d),
          t.setLineDash(u.borderDash),
          (t.lineDashOffset = u.borderDashOffset),
          (l = this.getDistanceFromCenterForValue(
            n.reverse ? this.min : this.max
          )),
          (c = this.getPointPosition(a, l)),
          t.beginPath(),
          t.moveTo(this.xCenter, this.yCenter),
          t.lineTo(c.x, c.y),
          t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {}
  drawLabels() {
    const t = this.ctx,
      n = this.options,
      r = n.ticks;
    if (!r.display) return;
    const i = this.getIndexAngle(0);
    let o, s;
    t.save(),
      t.translate(this.xCenter, this.yCenter),
      t.rotate(i),
      (t.textAlign = "center"),
      (t.textBaseline = "middle"),
      this.ticks.forEach((a, l) => {
        if (l === 0 && this.min >= 0 && !n.reverse) return;
        const c = r.setContext(this.getContext(l)),
          u = qe(c.font);
        if (
          ((o = this.getDistanceFromCenterForValue(this.ticks[l].value)),
          c.showLabelBackdrop)
        ) {
          (t.font = u.string),
            (s = t.measureText(a.label).width),
            (t.fillStyle = c.backdropColor);
          const d = vt(c.backdropPadding);
          t.fillRect(
            -s / 2 - d.left,
            -o - u.size / 2 - d.top,
            s + d.width,
            u.size + d.height
          );
        }
        vi(t, a.label, 0, -o, u, {
          color: c.color,
          strokeColor: c.textStrokeColor,
          strokeWidth: c.textStrokeWidth,
        });
      }),
      t.restore();
  }
  drawTitle() {}
}
Y(dl, "id", "radialLinear"),
  Y(dl, "defaults", {
    display: !0,
    animate: !0,
    position: "chartArea",
    angleLines: {
      display: !0,
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0,
    },
    grid: { circular: !1 },
    startAngle: 0,
    ticks: { showLabelBackdrop: !0, callback: Su.formatters.numeric },
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: !0,
      font: { size: 10 },
      callback(t) {
        return t;
      },
      padding: 5,
      centerPointLabels: !1,
    },
  }),
  Y(dl, "defaultRoutes", {
    "angleLines.color": "borderColor",
    "pointLabels.color": "color",
    "ticks.color": "color",
  }),
  Y(dl, "descriptors", { angleLines: { _fallback: "grid" } });
const Pu = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  Et = Object.keys(Pu);
function ay(e, t) {
  return e - t;
}
function ly(e, t) {
  if (Ee(t)) return null;
  const n = e._adapter,
    { parser: r, round: i, isoWeekday: o } = e._parseOpts;
  let s = t;
  return (
    typeof r == "function" && (s = r(s)),
    Ze(s) || (s = typeof r == "string" ? n.parse(s, r) : n.parse(s)),
    s === null
      ? null
      : (i &&
          (s =
            i === "week" && (ua(o) || o === !0)
              ? n.startOf(s, "isoWeek", o)
              : n.startOf(s, i)),
        +s)
  );
}
function cy(e, t, n, r) {
  const i = Et.length;
  for (let o = Et.indexOf(e); o < i - 1; ++o) {
    const s = Pu[Et[o]],
      a = s.steps ? s.steps : Number.MAX_SAFE_INTEGER;
    if (s.common && Math.ceil((n - t) / (a * s.size)) <= r) return Et[o];
  }
  return Et[i - 1];
}
function dA(e, t, n, r, i) {
  for (let o = Et.length - 1; o >= Et.indexOf(n); o--) {
    const s = Et[o];
    if (Pu[s].common && e._adapter.diff(i, r, s) >= t - 1) return s;
  }
  return Et[n ? Et.indexOf(n) : 0];
}
function fA(e) {
  for (let t = Et.indexOf(e) + 1, n = Et.length; t < n; ++t)
    if (Pu[Et[t]].common) return Et[t];
}
function uy(e, t, n) {
  if (!n) e[t] = !0;
  else if (n.length) {
    const { lo: r, hi: i } = zh(n, t),
      o = n[r] >= t ? n[r] : n[i];
    e[o] = !0;
  }
}
function pA(e, t, n, r) {
  const i = e._adapter,
    o = +i.startOf(t[0].value, r),
    s = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= s; a = +i.add(a, 1, r))
    (l = n[a]), l >= 0 && (t[l].major = !0);
  return t;
}
function dy(e, t, n) {
  const r = [],
    i = {},
    o = t.length;
  let s, a;
  for (s = 0; s < o; ++s)
    (a = t[s]), (i[a] = s), r.push({ value: a, major: !1 });
  return o === 0 || !n ? r : pA(e, r, i, n);
}
class kc extends wi {
  constructor(t) {
    super(t),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = "day"),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0);
  }
  init(t, n = {}) {
    const r = t.time || (t.time = {}),
      i = (this._adapter = new hI._date(t.adapters.date));
    i.init(n),
      Os(r.displayFormats, i.formats()),
      (this._parseOpts = {
        parser: r.parser,
        round: r.round,
        isoWeekday: r.isoWeekday,
      }),
      super.init(t),
      (this._normalized = n.normalized);
  }
  parse(t, n) {
    return t === void 0 ? null : ly(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
  }
  determineDataLimits() {
    const t = this.options,
      n = this._adapter,
      r = t.time.unit || "day";
    let { min: i, max: o, minDefined: s, maxDefined: a } = this.getUserBounds();
    function l(c) {
      !s && !isNaN(c.min) && (i = Math.min(i, c.min)),
        !a && !isNaN(c.max) && (o = Math.max(o, c.max));
    }
    (!s || !a) &&
      (l(this._getLabelBounds()),
      (t.bounds !== "ticks" || t.ticks.source !== "labels") &&
        l(this.getMinMax(!1))),
      (i = Ze(i) && !isNaN(i) ? i : +n.startOf(Date.now(), r)),
      (o = Ze(o) && !isNaN(o) ? o : +n.endOf(Date.now(), r) + 1),
      (this.min = Math.min(i, o - 1)),
      (this.max = Math.max(i + 1, o));
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let n = Number.POSITIVE_INFINITY,
      r = Number.NEGATIVE_INFINITY;
    return t.length && ((n = t[0]), (r = t[t.length - 1])), { min: n, max: r };
  }
  buildTicks() {
    const t = this.options,
      n = t.time,
      r = t.ticks,
      i = r.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" &&
      i.length &&
      ((this.min = this._userMin || i[0]),
      (this.max = this._userMax || i[i.length - 1]));
    const o = this.min,
      s = this.max,
      a = VR(i, o, s);
    return (
      (this._unit =
        n.unit ||
        (r.autoSkip
          ? cy(n.minUnit, this.min, this.max, this._getLabelCapacity(o))
          : dA(this, a.length, n.minUnit, this.min, this.max))),
      (this._majorUnit =
        !r.major.enabled || this._unit === "year" ? void 0 : fA(this._unit)),
      this.initOffsets(i),
      t.reverse && a.reverse(),
      dy(this, a, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let n = 0,
      r = 0,
      i,
      o;
    this.options.offset &&
      t.length &&
      ((i = this.getDecimalForValue(t[0])),
      t.length === 1
        ? (n = 1 - i)
        : (n = (this.getDecimalForValue(t[1]) - i) / 2),
      (o = this.getDecimalForValue(t[t.length - 1])),
      t.length === 1
        ? (r = o)
        : (r = (o - this.getDecimalForValue(t[t.length - 2])) / 2));
    const s = t.length < 3 ? 0.5 : 0.25;
    (n = tn(n, 0, s)),
      (r = tn(r, 0, s)),
      (this._offsets = { start: n, end: r, factor: 1 / (n + 1 + r) });
  }
  _generate() {
    const t = this._adapter,
      n = this.min,
      r = this.max,
      i = this.options,
      o = i.time,
      s = o.unit || cy(o.minUnit, n, r, this._getLabelCapacity(n)),
      a = ee(i.ticks.stepSize, 1),
      l = s === "week" ? o.isoWeekday : !1,
      c = ua(l) || l === !0,
      u = {};
    let d = n,
      f,
      p;
    if (
      (c && (d = +t.startOf(d, "isoWeek", l)),
      (d = +t.startOf(d, c ? "day" : s)),
      t.diff(r, n, s) > 1e5 * a)
    )
      throw new Error(
        n + " and " + r + " are too far apart with stepSize of " + a + " " + s
      );
    const h = i.ticks.source === "data" && this.getDataTimestamps();
    for (f = d, p = 0; f < r; f = +t.add(f, a, s), p++) uy(u, f, h);
    return (
      (f === r || i.bounds === "ticks" || p === 1) && uy(u, f, h),
      Object.keys(u)
        .sort(ay)
        .map((y) => +y)
    );
  }
  getLabelForValue(t) {
    const n = this._adapter,
      r = this.options.time;
    return r.tooltipFormat
      ? n.format(t, r.tooltipFormat)
      : n.format(t, r.displayFormats.datetime);
  }
  format(t, n) {
    const i = this.options.time.displayFormats,
      o = this._unit,
      s = n || i[o];
    return this._adapter.format(t, s);
  }
  _tickFormatFunction(t, n, r, i) {
    const o = this.options,
      s = o.ticks.callback;
    if (s) return Ce(s, [t, n, r], this);
    const a = o.time.displayFormats,
      l = this._unit,
      c = this._majorUnit,
      u = l && a[l],
      d = c && a[c],
      f = r[n],
      p = c && d && f && f.major;
    return this._adapter.format(t, i || (p ? d : u));
  }
  generateTickLabels(t) {
    let n, r, i;
    for (n = 0, r = t.length; n < r; ++n)
      (i = t[n]), (i.label = this._tickFormatFunction(i.value, n, t));
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const n = this._offsets,
      r = this.getDecimalForValue(t);
    return this.getPixelForDecimal((n.start + r) * n.factor);
  }
  getValueForPixel(t) {
    const n = this._offsets,
      r = this.getDecimalForPixel(t) / n.factor - n.end;
    return this.min + r * (this.max - this.min);
  }
  _getLabelSize(t) {
    const n = this.options.ticks,
      r = this.ctx.measureText(t).width,
      i = br(this.isHorizontal() ? n.maxRotation : n.minRotation),
      o = Math.cos(i),
      s = Math.sin(i),
      a = this._resolveTickFontOptions(0).size;
    return { w: r * o + a * s, h: r * s + a * o };
  }
  _getLabelCapacity(t) {
    const n = this.options.time,
      r = n.displayFormats,
      i = r[n.unit] || r.millisecond,
      o = this._tickFormatFunction(t, 0, dy(this, [t], this._majorUnit), i),
      s = this._getLabelSize(o),
      a =
        Math.floor(this.isHorizontal() ? this.width / s.w : this.height / s.h) -
        1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [],
      n,
      r;
    if (t.length) return t;
    const i = this.getMatchingVisibleMetas();
    if (this._normalized && i.length)
      return (this._cache.data = i[0].controller.getAllParsedValues(this));
    for (n = 0, r = i.length; n < r; ++n)
      t = t.concat(i[n].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(t));
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let n, r;
    if (t.length) return t;
    const i = this.getLabels();
    for (n = 0, r = i.length; n < r; ++n) t.push(ly(this, i[n]));
    return (this._cache.labels = this._normalized ? t : this.normalize(t));
  }
  normalize(t) {
    return KR(t.sort(ay));
  }
}
Y(kc, "id", "time"),
  Y(kc, "defaults", {
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {},
    },
    ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
  });
function fl(e, t, n) {
  let r = 0,
    i = e.length - 1,
    o,
    s,
    a,
    l;
  n
    ? (t >= e[r].pos && t <= e[i].pos && ({ lo: r, hi: i } = si(e, "pos", t)),
      ({ pos: o, time: a } = e[r]),
      ({ pos: s, time: l } = e[i]))
    : (t >= e[r].time &&
        t <= e[i].time &&
        ({ lo: r, hi: i } = si(e, "time", t)),
      ({ time: o, pos: a } = e[r]),
      ({ time: s, pos: l } = e[i]));
  const c = s - o;
  return c ? a + ((l - a) * (t - o)) / c : a;
}
class fy extends kc {
  constructor(t) {
    super(t),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0);
  }
  initOffsets() {
    const t = this._getTimestampsForTable(),
      n = (this._table = this.buildLookupTable(t));
    (this._minPos = fl(n, this.min)),
      (this._tableRange = fl(n, this.max) - this._minPos),
      super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: n, max: r } = this,
      i = [],
      o = [];
    let s, a, l, c, u;
    for (s = 0, a = t.length; s < a; ++s)
      (c = t[s]), c >= n && c <= r && i.push(c);
    if (i.length < 2)
      return [
        { time: n, pos: 0 },
        { time: r, pos: 1 },
      ];
    for (s = 0, a = i.length; s < a; ++s)
      (u = i[s + 1]),
        (l = i[s - 1]),
        (c = i[s]),
        Math.round((u + l) / 2) !== c && o.push({ time: c, pos: s / (a - 1) });
    return o;
  }
  _generate() {
    const t = this.min,
      n = this.max;
    let r = super.getDataTimestamps();
    return (
      (!r.includes(t) || !r.length) && r.splice(0, 0, t),
      (!r.includes(n) || r.length === 1) && r.push(n),
      r.sort((i, o) => i - o)
    );
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length) return t;
    const n = this.getDataTimestamps(),
      r = this.getLabelTimestamps();
    return (
      n.length && r.length
        ? (t = this.normalize(n.concat(r)))
        : (t = n.length ? n : r),
      (t = this._cache.all = t),
      t
    );
  }
  getDecimalForValue(t) {
    return (fl(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const n = this._offsets,
      r = this.getDecimalForPixel(t) / n.factor - n.end;
    return fl(this._table, r * this._tableRange + this._minPos, !0);
  }
}
Y(fy, "id", "timeseries"), Y(fy, "defaults", kc.defaults);
const Vb = "label";
function py(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function hA(e, t) {
  const n = e.options;
  n && t && Object.assign(n, t);
}
function Gb(e, t) {
  e.labels = t;
}
function Kb(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Vb;
  const r = [];
  e.datasets = t.map((i) => {
    const o = e.datasets.find((s) => s[n] === i[n]);
    return !o || !i.data || r.includes(o)
      ? { ...i }
      : (r.push(o), Object.assign(o, i), o);
  });
}
function gA(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Vb;
  const n = { labels: [], datasets: [] };
  return Gb(n, e.labels), Kb(n, e.datasets, t), n;
}
function mA(e, t) {
  const {
      height: n = 150,
      width: r = 300,
      redraw: i = !1,
      datasetIdKey: o,
      type: s,
      data: a,
      options: l,
      plugins: c = [],
      fallbackContent: u,
      updateMode: d,
      ...f
    } = e,
    p = C.useRef(null),
    h = C.useRef(),
    y = () => {
      p.current &&
        ((h.current = new ki(p.current, {
          type: s,
          data: gA(a, o),
          options: l && { ...l },
          plugins: c,
        })),
        py(t, h.current));
    },
    x = () => {
      py(t, null), h.current && (h.current.destroy(), (h.current = null));
    };
  return (
    C.useEffect(() => {
      !i && h.current && l && hA(h.current, l);
    }, [i, l]),
    C.useEffect(() => {
      !i && h.current && Gb(h.current.config.data, a.labels);
    }, [i, a.labels]),
    C.useEffect(() => {
      !i && h.current && a.datasets && Kb(h.current.config.data, a.datasets, o);
    }, [i, a.datasets]),
    C.useEffect(() => {
      h.current && (i ? (x(), setTimeout(y)) : h.current.update(d));
    }, [i, l, a.labels, a.datasets, d]),
    C.useEffect(() => {
      h.current && (x(), setTimeout(y));
    }, [s]),
    C.useEffect(() => (y(), () => x()), []),
    Zt.createElement(
      "canvas",
      Object.assign({ ref: p, role: "img", height: n, width: r }, f),
      u
    )
  );
}
const yA = C.forwardRef(mA);
function vA(e, t) {
  return (
    ki.register(t),
    C.forwardRef((n, r) =>
      Zt.createElement(yA, Object.assign({}, n, { ref: r, type: e }))
    )
  );
}
const Eu = vA("line", Ol);
var ve = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xh = Symbol.for("react.element"),
  Qh = Symbol.for("react.portal"),
  Mu = Symbol.for("react.fragment"),
  Tu = Symbol.for("react.strict_mode"),
  Ru = Symbol.for("react.profiler"),
  Ou = Symbol.for("react.provider"),
  Iu = Symbol.for("react.context"),
  xA = Symbol.for("react.server_context"),
  Au = Symbol.for("react.forward_ref"),
  Lu = Symbol.for("react.suspense"),
  $u = Symbol.for("react.suspense_list"),
  Fu = Symbol.for("react.memo"),
  zu = Symbol.for("react.lazy"),
  bA = Symbol.for("react.offscreen"),
  Yb;
Yb = Symbol.for("react.module.reference");
function un(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Xh:
        switch (((e = e.type), e)) {
          case Mu:
          case Ru:
          case Tu:
          case Lu:
          case $u:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case xA:
              case Iu:
              case Au:
              case zu:
              case Fu:
              case Ou:
                return e;
              default:
                return t;
            }
        }
      case Qh:
        return t;
    }
  }
}
ve.ContextConsumer = Iu;
ve.ContextProvider = Ou;
ve.Element = Xh;
ve.ForwardRef = Au;
ve.Fragment = Mu;
ve.Lazy = zu;
ve.Memo = Fu;
ve.Portal = Qh;
ve.Profiler = Ru;
ve.StrictMode = Tu;
ve.Suspense = Lu;
ve.SuspenseList = $u;
ve.isAsyncMode = function () {
  return !1;
};
ve.isConcurrentMode = function () {
  return !1;
};
ve.isContextConsumer = function (e) {
  return un(e) === Iu;
};
ve.isContextProvider = function (e) {
  return un(e) === Ou;
};
ve.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xh;
};
ve.isForwardRef = function (e) {
  return un(e) === Au;
};
ve.isFragment = function (e) {
  return un(e) === Mu;
};
ve.isLazy = function (e) {
  return un(e) === zu;
};
ve.isMemo = function (e) {
  return un(e) === Fu;
};
ve.isPortal = function (e) {
  return un(e) === Qh;
};
ve.isProfiler = function (e) {
  return un(e) === Ru;
};
ve.isStrictMode = function (e) {
  return un(e) === Tu;
};
ve.isSuspense = function (e) {
  return un(e) === Lu;
};
ve.isSuspenseList = function (e) {
  return un(e) === $u;
};
ve.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Mu ||
    e === Ru ||
    e === Tu ||
    e === Lu ||
    e === $u ||
    e === bA ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === zu ||
        e.$$typeof === Fu ||
        e.$$typeof === Ou ||
        e.$$typeof === Iu ||
        e.$$typeof === Au ||
        e.$$typeof === Yb ||
        e.getModuleId !== void 0))
  );
};
ve.typeOf = un;
function pl(e) {
  return parseInt(e, 10) || 0;
}
const SA = {
  shadow: {
    visibility: "hidden",
    position: "absolute",
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    transform: "translateZ(0)",
  },
};
function CA(e) {
  return (
    e == null ||
    Object.keys(e).length === 0 ||
    (e.outerHeightStyle === 0 && !e.overflowing)
  );
}
const wA = C.forwardRef(function (t, n) {
  const {
      onChange: r,
      maxRows: i,
      minRows: o = 1,
      style: s,
      value: a,
      ...l
    } = t,
    { current: c } = C.useRef(a != null),
    u = C.useRef(null),
    d = Ye(n, u),
    f = C.useRef(null),
    p = C.useRef(null),
    h = C.useCallback(() => {
      const g = u.current,
        m = Dn(g).getComputedStyle(g);
      if (m.width === "0px") return { outerHeightStyle: 0, overflowing: !1 };
      const S = p.current;
      (S.style.width = m.width),
        (S.value = g.value || t.placeholder || "x"),
        S.value.slice(-1) ===
          `
` && (S.value += " ");
      const w = m.boxSizing,
        _ = pl(m.paddingBottom) + pl(m.paddingTop),
        k = pl(m.borderBottomWidth) + pl(m.borderTopWidth),
        M = S.scrollHeight;
      S.value = "x";
      const b = S.scrollHeight;
      let E = M;
      o && (E = Math.max(Number(o) * b, E)),
        i && (E = Math.min(Number(i) * b, E)),
        (E = Math.max(E, b));
      const R = E + (w === "border-box" ? _ + k : 0),
        I = Math.abs(E - M) <= 1;
      return { outerHeightStyle: R, overflowing: I };
    }, [i, o, t.placeholder]),
    y = C.useCallback(() => {
      const g = h();
      if (CA(g)) return;
      const v = g.outerHeightStyle,
        m = u.current;
      f.current !== v && ((f.current = v), (m.style.height = `${v}px`)),
        (m.style.overflow = g.overflowing ? "hidden" : "");
    }, [h]);
  ir(() => {
    const g = () => {
      y();
    };
    let v;
    const m = yu(g),
      S = u.current,
      w = Dn(S);
    w.addEventListener("resize", m);
    let _;
    return (
      typeof ResizeObserver < "u" &&
        ((_ = new ResizeObserver(g)), _.observe(S)),
      () => {
        m.clear(),
          cancelAnimationFrame(v),
          w.removeEventListener("resize", m),
          _ && _.disconnect();
      }
    );
  }, [h, y]),
    ir(() => {
      y();
    });
  const x = (g) => {
    c || y(), r && r(g);
  };
  return P.jsxs(C.Fragment, {
    children: [
      P.jsx("textarea", {
        value: a,
        onChange: x,
        ref: d,
        rows: o,
        style: s,
        ...l,
      }),
      P.jsx("textarea", {
        "aria-hidden": !0,
        className: t.className,
        readOnly: !0,
        ref: p,
        tabIndex: -1,
        style: { ...SA.shadow, ...s, paddingTop: 0, paddingBottom: 0 },
      }),
    ],
  });
});
function $o({ props: e, states: t, muiFormControl: n }) {
  return t.reduce(
    (r, i) => ((r[i] = e[i]), n && typeof e[i] > "u" && (r[i] = n[i]), r),
    {}
  );
}
const qh = C.createContext(void 0);
function Fo() {
  return C.useContext(qh);
}
function hy(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function _c(e, t = !1) {
  return (
    e &&
    ((hy(e.value) && e.value !== "") ||
      (t && hy(e.defaultValue) && e.defaultValue !== ""))
  );
}
function kA(e) {
  return e.startAdornment;
}
function _A(e) {
  return ne("MuiInputBase", e);
}
const wo = ae("MuiInputBase", [
  "root",
  "formControl",
  "focused",
  "disabled",
  "adornedStart",
  "adornedEnd",
  "error",
  "sizeSmall",
  "multiline",
  "colorSecondary",
  "fullWidth",
  "hiddenLabel",
  "readOnly",
  "input",
  "inputSizeSmall",
  "inputMultiline",
  "inputTypeSearch",
  "inputAdornedStart",
  "inputAdornedEnd",
  "inputHiddenLabel",
]);
var gy;
const Du = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.formControl && t.formControl,
      n.startAdornment && t.adornedStart,
      n.endAdornment && t.adornedEnd,
      n.error && t.error,
      n.size === "small" && t.sizeSmall,
      n.multiline && t.multiline,
      n.color && t[`color${V(n.color)}`],
      n.fullWidth && t.fullWidth,
      n.hiddenLabel && t.hiddenLabel,
    ];
  },
  Nu = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.input,
      n.size === "small" && t.inputSizeSmall,
      n.multiline && t.inputMultiline,
      n.type === "search" && t.inputTypeSearch,
      n.startAdornment && t.inputAdornedStart,
      n.endAdornment && t.inputAdornedEnd,
      n.hiddenLabel && t.inputHiddenLabel,
    ];
  },
  PA = (e) => {
    const {
        classes: t,
        color: n,
        disabled: r,
        error: i,
        endAdornment: o,
        focused: s,
        formControl: a,
        fullWidth: l,
        hiddenLabel: c,
        multiline: u,
        readOnly: d,
        size: f,
        startAdornment: p,
        type: h,
      } = e,
      y = {
        root: [
          "root",
          `color${V(n)}`,
          r && "disabled",
          i && "error",
          l && "fullWidth",
          s && "focused",
          a && "formControl",
          f && f !== "medium" && `size${V(f)}`,
          u && "multiline",
          p && "adornedStart",
          o && "adornedEnd",
          c && "hiddenLabel",
          d && "readOnly",
        ],
        input: [
          "input",
          r && "disabled",
          h === "search" && "inputTypeSearch",
          u && "inputMultiline",
          f === "small" && "inputSizeSmall",
          c && "inputHiddenLabel",
          p && "inputAdornedStart",
          o && "inputAdornedEnd",
          d && "readOnly",
        ],
      };
    return oe(y, _A, t);
  },
  Bu = j("div", { name: "MuiInputBase", slot: "Root", overridesResolver: Du })(
    me(({ theme: e }) => ({
      ...e.typography.body1,
      color: (e.vars || e).palette.text.primary,
      lineHeight: "1.4375em",
      boxSizing: "border-box",
      position: "relative",
      cursor: "text",
      display: "inline-flex",
      alignItems: "center",
      [`&.${wo.disabled}`]: {
        color: (e.vars || e).palette.text.disabled,
        cursor: "default",
      },
      variants: [
        {
          props: ({ ownerState: t }) => t.multiline,
          style: { padding: "4px 0 5px" },
        },
        {
          props: ({ ownerState: t, size: n }) => t.multiline && n === "small",
          style: { paddingTop: 1 },
        },
        { props: ({ ownerState: t }) => t.fullWidth, style: { width: "100%" } },
      ],
    }))
  ),
  ju = j("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: Nu,
  })(
    me(({ theme: e }) => {
      const t = e.palette.mode === "light",
        n = {
          color: "currentColor",
          ...(e.vars
            ? { opacity: e.vars.opacity.inputPlaceholder }
            : { opacity: t ? 0.42 : 0.5 }),
          transition: e.transitions.create("opacity", {
            duration: e.transitions.duration.shorter,
          }),
        },
        r = { opacity: "0 !important" },
        i = e.vars
          ? { opacity: e.vars.opacity.inputPlaceholder }
          : { opacity: t ? 0.42 : 0.5 };
      return {
        font: "inherit",
        letterSpacing: "inherit",
        color: "currentColor",
        padding: "4px 0 5px",
        border: 0,
        boxSizing: "content-box",
        background: "none",
        height: "1.4375em",
        margin: 0,
        WebkitTapHighlightColor: "transparent",
        display: "block",
        minWidth: 0,
        width: "100%",
        "&::-webkit-input-placeholder": n,
        "&::-moz-placeholder": n,
        "&::-ms-input-placeholder": n,
        "&:focus": { outline: 0 },
        "&:invalid": { boxShadow: "none" },
        "&::-webkit-search-decoration": { WebkitAppearance: "none" },
        [`label[data-shrink=false] + .${wo.formControl} &`]: {
          "&::-webkit-input-placeholder": r,
          "&::-moz-placeholder": r,
          "&::-ms-input-placeholder": r,
          "&:focus::-webkit-input-placeholder": i,
          "&:focus::-moz-placeholder": i,
          "&:focus::-ms-input-placeholder": i,
        },
        [`&.${wo.disabled}`]: {
          opacity: 1,
          WebkitTextFillColor: (e.vars || e).palette.text.disabled,
        },
        variants: [
          {
            props: ({ ownerState: o }) => !o.disableInjectingGlobalStyles,
            style: {
              animationName: "mui-auto-fill-cancel",
              animationDuration: "10ms",
              "&:-webkit-autofill": {
                animationDuration: "5000s",
                animationName: "mui-auto-fill",
              },
            },
          },
          { props: { size: "small" }, style: { paddingTop: 1 } },
          {
            props: ({ ownerState: o }) => o.multiline,
            style: {
              height: "auto",
              resize: "none",
              padding: 0,
              paddingTop: 0,
            },
          },
          { props: { type: "search" }, style: { MozAppearance: "textfield" } },
        ],
      };
    })
  ),
  my = bh({
    "@keyframes mui-auto-fill": { from: { display: "block" } },
    "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
  }),
  EA = C.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiInputBase" }),
      {
        "aria-describedby": i,
        autoComplete: o,
        autoFocus: s,
        className: a,
        color: l,
        components: c = {},
        componentsProps: u = {},
        defaultValue: d,
        disabled: f,
        disableInjectingGlobalStyles: p,
        endAdornment: h,
        error: y,
        fullWidth: x = !1,
        id: g,
        inputComponent: v = "input",
        inputProps: m = {},
        inputRef: S,
        margin: w,
        maxRows: _,
        minRows: k,
        multiline: M = !1,
        name: b,
        onBlur: E,
        onChange: R,
        onClick: I,
        onFocus: z,
        onKeyDown: D,
        onKeyUp: L,
        placeholder: A,
        readOnly: N,
        renderSuffix: T,
        rows: $,
        size: B,
        slotProps: H = {},
        slots: Q = {},
        startAdornment: q,
        type: G = "text",
        value: le,
        ...re
      } = r,
      He = m.value != null ? m.value : le,
      { current: kt } = C.useRef(He != null),
      Be = C.useRef(),
      Z = C.useCallback((Te) => {}, []),
      fe = Ye(Be, S, m.ref, Z),
      [te, rt] = C.useState(!1),
      se = Fo(),
      xe = $o({
        props: r,
        muiFormControl: se,
        states: [
          "color",
          "disabled",
          "error",
          "hiddenLabel",
          "size",
          "required",
          "filled",
        ],
      });
    (xe.focused = se ? se.focused : te),
      C.useEffect(() => {
        !se && f && te && (rt(!1), E && E());
      }, [se, f, te, E]);
    const Gt = se && se.onFilled,
      Kt = se && se.onEmpty,
      it = C.useCallback(
        (Te) => {
          _c(Te) ? Gt && Gt() : Kt && Kt();
        },
        [Gt, Kt]
      );
    ir(() => {
      kt && it({ value: He });
    }, [He, it, kt]);
    const ot = (Te) => {
        z && z(Te),
          m.onFocus && m.onFocus(Te),
          se && se.onFocus ? se.onFocus(Te) : rt(!0);
      },
      wn = (Te) => {
        E && E(Te),
          m.onBlur && m.onBlur(Te),
          se && se.onBlur ? se.onBlur(Te) : rt(!1);
      },
      ke = (Te, ...No) => {
        if (!kt) {
          const Bo = Te.target || Be.current;
          if (Bo == null) throw new Error(rr(1));
          it({ value: Bo.value });
        }
        m.onChange && m.onChange(Te, ...No), R && R(Te, ...No);
      };
    C.useEffect(() => {
      it(Be.current);
    }, []);
    const Nn = (Te) => {
      Be.current && Te.currentTarget === Te.target && Be.current.focus(),
        I && I(Te);
    };
    let K = v,
      st = m;
    M &&
      K === "input" &&
      ($
        ? (st = { type: void 0, minRows: $, maxRows: $, ...st })
        : (st = { type: void 0, maxRows: _, minRows: k, ...st }),
      (K = wA));
    const zo = (Te) => {
      it(
        Te.animationName === "mui-auto-fill-cancel"
          ? Be.current
          : { value: "x" }
      );
    };
    C.useEffect(() => {
      se && se.setAdornedStart(!!q);
    }, [se, q]);
    const Bn = {
        ...r,
        color: xe.color || "primary",
        disabled: xe.disabled,
        endAdornment: h,
        error: xe.error,
        focused: xe.focused,
        formControl: se,
        fullWidth: x,
        hiddenLabel: xe.hiddenLabel,
        multiline: M,
        size: xe.size,
        startAdornment: q,
        type: G,
      },
      Wr = PA(Bn),
      Do = Q.root || c.Root || Bu,
      lr = H.root || u.root || {},
      _i = Q.input || c.Input || ju;
    return (
      (st = { ...st, ...(H.input ?? u.input) }),
      P.jsxs(C.Fragment, {
        children: [
          !p && typeof my == "function" && (gy || (gy = P.jsx(my, {}))),
          P.jsxs(Do, {
            ...lr,
            ref: n,
            onClick: Nn,
            ...re,
            ...(!aa(Do) && { ownerState: { ...Bn, ...lr.ownerState } }),
            className: U(
              Wr.root,
              lr.className,
              a,
              N && "MuiInputBase-readOnly"
            ),
            children: [
              q,
              P.jsx(qh.Provider, {
                value: null,
                children: P.jsx(_i, {
                  "aria-invalid": xe.error,
                  "aria-describedby": i,
                  autoComplete: o,
                  autoFocus: s,
                  defaultValue: d,
                  disabled: xe.disabled,
                  id: g,
                  onAnimationStart: zo,
                  name: b,
                  placeholder: A,
                  readOnly: N,
                  required: xe.required,
                  rows: $,
                  value: He,
                  onKeyDown: D,
                  onKeyUp: L,
                  type: G,
                  ...st,
                  ...(!aa(_i) && {
                    as: K,
                    ownerState: { ...Bn, ...st.ownerState },
                  }),
                  ref: fe,
                  className: U(
                    Wr.input,
                    st.className,
                    N && "MuiInputBase-readOnly"
                  ),
                  onBlur: wn,
                  onChange: ke,
                  onFocus: ot,
                }),
              }),
              h,
              T ? T({ ...xe, startAdornment: q }) : null,
            ],
          }),
        ],
      })
    );
  }),
  Jh = EA;
function MA(e) {
  return ne("MuiInput", e);
}
const os = { ...wo, ...ae("MuiInput", ["root", "underline", "input"]) };
function TA(e) {
  return ne("MuiOutlinedInput", e);
}
const Pn = {
  ...wo,
  ...ae("MuiOutlinedInput", ["root", "notchedOutline", "input"]),
};
function RA(e) {
  return ne("MuiFilledInput", e);
}
const Kr = {
    ...wo,
    ...ae("MuiFilledInput", [
      "root",
      "underline",
      "input",
      "adornedStart",
      "adornedEnd",
      "sizeSmall",
      "multiline",
      "hiddenLabel",
    ]),
  },
  OA = K1(P.jsx("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown"),
  IA = (e) => {
    const {
        classes: t,
        disableUnderline: n,
        startAdornment: r,
        endAdornment: i,
        size: o,
        hiddenLabel: s,
        multiline: a,
      } = e,
      l = {
        root: [
          "root",
          !n && "underline",
          r && "adornedStart",
          i && "adornedEnd",
          o === "small" && `size${V(o)}`,
          s && "hiddenLabel",
          a && "multiline",
        ],
        input: ["input"],
      },
      c = oe(l, RA, t);
    return { ...t, ...c };
  },
  AA = j(Bu, {
    shouldForwardProp: (e) => Vt(e) || e === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [...Du(e, t), !n.disableUnderline && t.underline];
    },
  })(
    me(({ theme: e }) => {
      const t = e.palette.mode === "light",
        n = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
        r = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
        i = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
        o = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
      return {
        position: "relative",
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
        borderTopRightRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create("background-color", {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
        "&:hover": {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : i,
          "@media (hover: none)": {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
          },
        },
        [`&.${Kr.focused}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
        },
        [`&.${Kr.disabled}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : o,
        },
        variants: [
          {
            props: ({ ownerState: s }) => !s.disableUnderline,
            style: {
              "&::after": {
                left: 0,
                bottom: 0,
                content: '""',
                position: "absolute",
                right: 0,
                transform: "scaleX(0)",
                transition: e.transitions.create("transform", {
                  duration: e.transitions.duration.shorter,
                  easing: e.transitions.easing.easeOut,
                }),
                pointerEvents: "none",
              },
              [`&.${Kr.focused}:after`]: {
                transform: "scaleX(1) translateX(0)",
              },
              [`&.${Kr.error}`]: {
                "&::before, &::after": {
                  borderBottomColor: (e.vars || e).palette.error.main,
                },
              },
              "&::before": {
                borderBottom: `1px solid ${
                  e.vars
                    ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`
                    : n
                }`,
                left: 0,
                bottom: 0,
                content: '"\\00a0"',
                position: "absolute",
                right: 0,
                transition: e.transitions.create("border-bottom-color", {
                  duration: e.transitions.duration.shorter,
                }),
                pointerEvents: "none",
              },
              [`&:hover:not(.${Kr.disabled}, .${Kr.error}):before`]: {
                borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`,
              },
              [`&.${Kr.disabled}:before`]: { borderBottomStyle: "dotted" },
            },
          },
          ...Object.entries(e.palette)
            .filter(([, s]) => s && s.main)
            .map(([s]) => {
              var a;
              return {
                props: { disableUnderline: !1, color: s },
                style: {
                  "&::after": {
                    borderBottom: `2px solid ${
                      (a = (e.vars || e).palette[s]) == null ? void 0 : a.main
                    }`,
                  },
                },
              };
            }),
          {
            props: ({ ownerState: s }) => s.startAdornment,
            style: { paddingLeft: 12 },
          },
          {
            props: ({ ownerState: s }) => s.endAdornment,
            style: { paddingRight: 12 },
          },
          {
            props: ({ ownerState: s }) => s.multiline,
            style: { padding: "25px 12px 8px" },
          },
          {
            props: ({ ownerState: s, size: a }) => s.multiline && a === "small",
            style: { paddingTop: 21, paddingBottom: 4 },
          },
          {
            props: ({ ownerState: s }) => s.multiline && s.hiddenLabel,
            style: { paddingTop: 16, paddingBottom: 17 },
          },
          {
            props: ({ ownerState: s }) =>
              s.multiline && s.hiddenLabel && s.size === "small",
            style: { paddingTop: 8, paddingBottom: 9 },
          },
        ],
      };
    })
  ),
  LA = j(ju, { name: "MuiFilledInput", slot: "Input", overridesResolver: Nu })(
    me(({ theme: e }) => ({
      paddingTop: 25,
      paddingRight: 12,
      paddingBottom: 8,
      paddingLeft: 12,
      ...(!e.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow:
            e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
          caretColor: e.palette.mode === "light" ? null : "#fff",
          borderTopLeftRadius: "inherit",
          borderTopRightRadius: "inherit",
        },
      }),
      ...(e.vars && {
        "&:-webkit-autofill": {
          borderTopLeftRadius: "inherit",
          borderTopRightRadius: "inherit",
        },
        [e.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff",
          },
        },
      }),
      variants: [
        {
          props: { size: "small" },
          style: { paddingTop: 21, paddingBottom: 4 },
        },
        {
          props: ({ ownerState: t }) => t.hiddenLabel,
          style: { paddingTop: 16, paddingBottom: 17 },
        },
        {
          props: ({ ownerState: t }) => t.startAdornment,
          style: { paddingLeft: 0 },
        },
        {
          props: ({ ownerState: t }) => t.endAdornment,
          style: { paddingRight: 0 },
        },
        {
          props: ({ ownerState: t }) => t.hiddenLabel && t.size === "small",
          style: { paddingTop: 8, paddingBottom: 9 },
        },
        {
          props: ({ ownerState: t }) => t.multiline,
          style: {
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
          },
        },
      ],
    }))
  ),
  Pc = C.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiFilledInput" }),
      {
        disableUnderline: i = !1,
        components: o = {},
        componentsProps: s,
        fullWidth: a = !1,
        hiddenLabel: l,
        inputComponent: c = "input",
        multiline: u = !1,
        slotProps: d,
        slots: f = {},
        type: p = "text",
        ...h
      } = r,
      y = {
        ...r,
        disableUnderline: i,
        fullWidth: a,
        inputComponent: c,
        multiline: u,
        type: p,
      },
      x = IA(r),
      g = { root: { ownerState: y }, input: { ownerState: y } },
      v = d ?? s ? tt(g, d ?? s) : g,
      m = f.root ?? o.Root ?? AA,
      S = f.input ?? o.Input ?? LA;
    return P.jsx(Jh, {
      slots: { root: m, input: S },
      componentsProps: v,
      fullWidth: a,
      inputComponent: c,
      multiline: u,
      ref: n,
      type: p,
      ...h,
      classes: x,
    });
  });
Pc && (Pc.muiName = "Input");
function $A(e) {
  return ne("MuiFormControl", e);
}
ae("MuiFormControl", [
  "root",
  "marginNone",
  "marginNormal",
  "marginDense",
  "fullWidth",
  "disabled",
]);
const FA = (e) => {
    const { classes: t, margin: n, fullWidth: r } = e,
      i = { root: ["root", n !== "none" && `margin${V(n)}`, r && "fullWidth"] };
    return oe(i, $A, t);
  },
  zA = j("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: ({ ownerState: e }, t) => ({
      ...t.root,
      ...t[`margin${V(e.margin)}`],
      ...(e.fullWidth && t.fullWidth),
    }),
  })({
    display: "inline-flex",
    flexDirection: "column",
    position: "relative",
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: "top",
    variants: [
      {
        props: { margin: "normal" },
        style: { marginTop: 16, marginBottom: 8 },
      },
      { props: { margin: "dense" }, style: { marginTop: 8, marginBottom: 4 } },
      { props: { fullWidth: !0 }, style: { width: "100%" } },
    ],
  }),
  DA = C.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiFormControl" }),
      {
        children: i,
        className: o,
        color: s = "primary",
        component: a = "div",
        disabled: l = !1,
        error: c = !1,
        focused: u,
        fullWidth: d = !1,
        hiddenLabel: f = !1,
        margin: p = "none",
        required: h = !1,
        size: y = "medium",
        variant: x = "outlined",
        ...g
      } = r,
      v = {
        ...r,
        color: s,
        component: a,
        disabled: l,
        error: c,
        fullWidth: d,
        hiddenLabel: f,
        margin: p,
        required: h,
        size: y,
        variant: x,
      },
      m = FA(v),
      [S, w] = C.useState(() => {
        let z = !1;
        return (
          i &&
            C.Children.forEach(i, (D) => {
              if (!io(D, ["Input", "Select"])) return;
              const L = io(D, ["Select"]) ? D.props.input : D;
              L && kA(L.props) && (z = !0);
            }),
          z
        );
      }),
      [_, k] = C.useState(() => {
        let z = !1;
        return (
          i &&
            C.Children.forEach(i, (D) => {
              io(D, ["Input", "Select"]) &&
                (_c(D.props, !0) || _c(D.props.inputProps, !0)) &&
                (z = !0);
            }),
          z
        );
      }),
      [M, b] = C.useState(!1);
    l && M && b(!1);
    const E = u !== void 0 && !l ? u : M;
    let R;
    const I = C.useMemo(
      () => ({
        adornedStart: S,
        setAdornedStart: w,
        color: s,
        disabled: l,
        error: c,
        filled: _,
        focused: E,
        fullWidth: d,
        hiddenLabel: f,
        size: y,
        onBlur: () => {
          b(!1);
        },
        onEmpty: () => {
          k(!1);
        },
        onFilled: () => {
          k(!0);
        },
        onFocus: () => {
          b(!0);
        },
        registerEffect: R,
        required: h,
        variant: x,
      }),
      [S, s, l, c, _, E, d, f, R, h, y, x]
    );
    return P.jsx(qh.Provider, {
      value: I,
      children: P.jsx(zA, {
        as: a,
        ownerState: v,
        className: U(m.root, o),
        ref: n,
        ...g,
        children: i,
      }),
    });
  });
function NA(e) {
  return ne("MuiFormHelperText", e);
}
const yy = ae("MuiFormHelperText", [
  "root",
  "error",
  "disabled",
  "sizeSmall",
  "sizeMedium",
  "contained",
  "focused",
  "filled",
  "required",
]);
var vy;
const BA = (e) => {
    const {
        classes: t,
        contained: n,
        size: r,
        disabled: i,
        error: o,
        filled: s,
        focused: a,
        required: l,
      } = e,
      c = {
        root: [
          "root",
          i && "disabled",
          o && "error",
          r && `size${V(r)}`,
          n && "contained",
          a && "focused",
          s && "filled",
          l && "required",
        ],
      };
    return oe(c, NA, t);
  },
  jA = j("p", {
    name: "MuiFormHelperText",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.size && t[`size${V(n.size)}`],
        n.contained && t.contained,
        n.filled && t.filled,
      ];
    },
  })(
    me(({ theme: e }) => ({
      color: (e.vars || e).palette.text.secondary,
      ...e.typography.caption,
      textAlign: "left",
      marginTop: 3,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      [`&.${yy.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      [`&.${yy.error}`]: { color: (e.vars || e).palette.error.main },
      variants: [
        { props: { size: "small" }, style: { marginTop: 4 } },
        {
          props: ({ ownerState: t }) => t.contained,
          style: { marginLeft: 14, marginRight: 14 },
        },
      ],
    }))
  ),
  WA = C.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiFormHelperText" }),
      {
        children: i,
        className: o,
        component: s = "p",
        disabled: a,
        error: l,
        filled: c,
        focused: u,
        margin: d,
        required: f,
        variant: p,
        ...h
      } = r,
      y = Fo(),
      x = $o({
        props: r,
        muiFormControl: y,
        states: [
          "variant",
          "size",
          "disabled",
          "error",
          "filled",
          "focused",
          "required",
        ],
      }),
      g = {
        ...r,
        component: s,
        contained: x.variant === "filled" || x.variant === "outlined",
        variant: x.variant,
        size: x.size,
        disabled: x.disabled,
        error: x.error,
        filled: x.filled,
        focused: x.focused,
        required: x.required,
      };
    delete g.ownerState;
    const v = BA(g);
    return P.jsx(jA, {
      as: s,
      className: U(v.root, o),
      ref: n,
      ...h,
      ownerState: g,
      children:
        i === " "
          ? vy ||
            (vy = P.jsx("span", { className: "notranslate", children: "​" }))
          : i,
    });
  });
function HA(e) {
  return ne("MuiFormLabel", e);
}
const Fs = ae("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk",
  ]),
  UA = (e) => {
    const {
        classes: t,
        color: n,
        focused: r,
        disabled: i,
        error: o,
        filled: s,
        required: a,
      } = e,
      l = {
        root: [
          "root",
          `color${V(n)}`,
          i && "disabled",
          o && "error",
          s && "filled",
          r && "focused",
          a && "required",
        ],
        asterisk: ["asterisk", o && "error"],
      };
    return oe(l, HA, t);
  },
  VA = j("label", {
    name: "MuiFormLabel",
    slot: "Root",
    overridesResolver: ({ ownerState: e }, t) => ({
      ...t.root,
      ...(e.color === "secondary" && t.colorSecondary),
      ...(e.filled && t.filled),
    }),
  })(
    me(({ theme: e }) => ({
      color: (e.vars || e).palette.text.secondary,
      ...e.typography.body1,
      lineHeight: "1.4375em",
      padding: 0,
      position: "relative",
      variants: [
        ...Object.entries(e.palette)
          .filter(([, t]) => t && t.main)
          .map(([t]) => ({
            props: { color: t },
            style: {
              [`&.${Fs.focused}`]: { color: (e.vars || e).palette[t].main },
            },
          })),
        {
          props: {},
          style: {
            [`&.${Fs.disabled}`]: {
              color: (e.vars || e).palette.text.disabled,
            },
            [`&.${Fs.error}`]: { color: (e.vars || e).palette.error.main },
          },
        },
      ],
    }))
  ),
  GA = j("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (e, t) => t.asterisk,
  })(
    me(({ theme: e }) => ({
      [`&.${Fs.error}`]: { color: (e.vars || e).palette.error.main },
    }))
  ),
  KA = C.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiFormLabel" }),
      {
        children: i,
        className: o,
        color: s,
        component: a = "label",
        disabled: l,
        error: c,
        filled: u,
        focused: d,
        required: f,
        ...p
      } = r,
      h = Fo(),
      y = $o({
        props: r,
        muiFormControl: h,
        states: ["color", "required", "focused", "disabled", "error", "filled"],
      }),
      x = {
        ...r,
        color: y.color || "primary",
        component: a,
        disabled: y.disabled,
        error: y.error,
        filled: y.filled,
        focused: y.focused,
        required: y.required,
      },
      g = UA(x);
    return P.jsxs(VA, {
      as: a,
      ownerState: x,
      className: U(g.root, o),
      ref: n,
      ...p,
      children: [
        i,
        y.required &&
          P.jsxs(GA, {
            ownerState: x,
            "aria-hidden": !0,
            className: g.asterisk,
            children: [" ", "*"],
          }),
      ],
    });
  }),
  sn = BP({
    createStyledComponent: j("div", {
      name: "MuiGrid2",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    }),
    componentName: "MuiGrid2",
    useThemeProps: (e) => bu({ props: e, name: "MuiGrid2" }),
  });
function Zf(e) {
  return `scale(${e}, ${e ** 2})`;
}
const YA = {
    entering: { opacity: 1, transform: Zf(1) },
    entered: { opacity: 1, transform: "none" },
  },
  Id =
    typeof navigator < "u" &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  ep = C.forwardRef(function (t, n) {
    const {
        addEndListener: r,
        appear: i = !0,
        children: o,
        easing: s,
        in: a,
        onEnter: l,
        onEntered: c,
        onEntering: u,
        onExit: d,
        onExited: f,
        onExiting: p,
        style: h,
        timeout: y = "auto",
        TransitionComponent: x = Cn,
        ...g
      } = t,
      v = O1(),
      m = C.useRef(),
      S = ka(),
      w = C.useRef(null),
      _ = Ye(w, Oo(o), n),
      k = (L) => (A) => {
        if (L) {
          const N = w.current;
          A === void 0 ? L(N) : L(N, A);
        }
      },
      M = k(u),
      b = k((L, A) => {
        kh(L);
        const {
          duration: N,
          delay: T,
          easing: $,
        } = yo({ style: h, timeout: y, easing: s }, { mode: "enter" });
        let B;
        y === "auto"
          ? ((B = S.transitions.getAutoHeightDuration(L.clientHeight)),
            (m.current = B))
          : (B = N),
          (L.style.transition = [
            S.transitions.create("opacity", { duration: B, delay: T }),
            S.transitions.create("transform", {
              duration: Id ? B : B * 0.666,
              delay: T,
              easing: $,
            }),
          ].join(",")),
          l && l(L, A);
      }),
      E = k(c),
      R = k(p),
      I = k((L) => {
        const {
          duration: A,
          delay: N,
          easing: T,
        } = yo({ style: h, timeout: y, easing: s }, { mode: "exit" });
        let $;
        y === "auto"
          ? (($ = S.transitions.getAutoHeightDuration(L.clientHeight)),
            (m.current = $))
          : ($ = A),
          (L.style.transition = [
            S.transitions.create("opacity", { duration: $, delay: N }),
            S.transitions.create("transform", {
              duration: Id ? $ : $ * 0.666,
              delay: Id ? N : N || $ * 0.333,
              easing: T,
            }),
          ].join(",")),
          (L.style.opacity = 0),
          (L.style.transform = Zf(0.75)),
          d && d(L);
      }),
      z = k(f),
      D = (L) => {
        y === "auto" && v.start(m.current || 0, L), r && r(w.current, L);
      };
    return P.jsx(x, {
      appear: i,
      in: a,
      nodeRef: w,
      onEnter: b,
      onEntered: E,
      onEntering: M,
      onExit: I,
      onExited: z,
      onExiting: R,
      addEndListener: D,
      timeout: y === "auto" ? null : y,
      ...g,
      children: (L, A) =>
        C.cloneElement(o, {
          style: {
            opacity: 0,
            transform: Zf(0.75),
            visibility: L === "exited" && !a ? "hidden" : void 0,
            ...YA[L],
            ...h,
            ...o.props.style,
          },
          ref: _,
          ...A,
        }),
    });
  });
ep && (ep.muiSupportAuto = !0);
const XA = (e) => {
    const { classes: t, disableUnderline: n } = e,
      i = oe({ root: ["root", !n && "underline"], input: ["input"] }, MA, t);
    return { ...t, ...i };
  },
  QA = j(Bu, {
    shouldForwardProp: (e) => Vt(e) || e === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [...Du(e, t), !n.disableUnderline && t.underline];
    },
  })(
    me(({ theme: e }) => {
      let n =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.42)"
          : "rgba(255, 255, 255, 0.7)";
      return (
        e.vars &&
          (n = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),
        {
          position: "relative",
          variants: [
            {
              props: ({ ownerState: r }) => r.formControl,
              style: { "label + &": { marginTop: 16 } },
            },
            {
              props: ({ ownerState: r }) => !r.disableUnderline,
              style: {
                "&::after": {
                  left: 0,
                  bottom: 0,
                  content: '""',
                  position: "absolute",
                  right: 0,
                  transform: "scaleX(0)",
                  transition: e.transitions.create("transform", {
                    duration: e.transitions.duration.shorter,
                    easing: e.transitions.easing.easeOut,
                  }),
                  pointerEvents: "none",
                },
                [`&.${os.focused}:after`]: {
                  transform: "scaleX(1) translateX(0)",
                },
                [`&.${os.error}`]: {
                  "&::before, &::after": {
                    borderBottomColor: (e.vars || e).palette.error.main,
                  },
                },
                "&::before": {
                  borderBottom: `1px solid ${n}`,
                  left: 0,
                  bottom: 0,
                  content: '"\\00a0"',
                  position: "absolute",
                  right: 0,
                  transition: e.transitions.create("border-bottom-color", {
                    duration: e.transitions.duration.shorter,
                  }),
                  pointerEvents: "none",
                },
                [`&:hover:not(.${os.disabled}, .${os.error}):before`]: {
                  borderBottom: `2px solid ${
                    (e.vars || e).palette.text.primary
                  }`,
                  "@media (hover: none)": { borderBottom: `1px solid ${n}` },
                },
                [`&.${os.disabled}:before`]: { borderBottomStyle: "dotted" },
              },
            },
            ...Object.entries(e.palette)
              .filter(([, r]) => r && r.main)
              .map(([r]) => ({
                props: { color: r, disableUnderline: !1 },
                style: {
                  "&::after": {
                    borderBottom: `2px solid ${(e.vars || e).palette[r].main}`,
                  },
                },
              })),
          ],
        }
      );
    })
  ),
  qA = j(ju, { name: "MuiInput", slot: "Input", overridesResolver: Nu })({}),
  Ec = C.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiInput" }),
      {
        disableUnderline: i = !1,
        components: o = {},
        componentsProps: s,
        fullWidth: a = !1,
        inputComponent: l = "input",
        multiline: c = !1,
        slotProps: u,
        slots: d = {},
        type: f = "text",
        ...p
      } = r,
      h = XA(r),
      x = { root: { ownerState: { disableUnderline: i } } },
      g = u ?? s ? tt(u ?? s, x) : x,
      v = d.root ?? o.Root ?? QA,
      m = d.input ?? o.Input ?? qA;
    return P.jsx(Jh, {
      slots: { root: v, input: m },
      slotProps: g,
      fullWidth: a,
      inputComponent: l,
      multiline: c,
      ref: n,
      type: f,
      ...p,
      classes: h,
    });
  });
Ec && (Ec.muiName = "Input");
function JA(e) {
  return ne("MuiInputLabel", e);
}
ae("MuiInputLabel", [
  "root",
  "focused",
  "disabled",
  "error",
  "required",
  "asterisk",
  "formControl",
  "sizeSmall",
  "shrink",
  "animated",
  "standard",
  "filled",
  "outlined",
]);
const ZA = (e) => {
    const {
        classes: t,
        formControl: n,
        size: r,
        shrink: i,
        disableAnimation: o,
        variant: s,
        required: a,
      } = e,
      l = {
        root: [
          "root",
          n && "formControl",
          !o && "animated",
          i && "shrink",
          r && r !== "normal" && `size${V(r)}`,
          s,
        ],
        asterisk: [a && "asterisk"],
      },
      c = oe(l, JA, t);
    return { ...t, ...c };
  },
  eL = j(KA, {
    shouldForwardProp: (e) => Vt(e) || e === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`& .${Fs.asterisk}`]: t.asterisk },
        t.root,
        n.formControl && t.formControl,
        n.size === "small" && t.sizeSmall,
        n.shrink && t.shrink,
        !n.disableAnimation && t.animated,
        n.focused && t.focused,
        t[n.variant],
      ];
    },
  })(
    me(({ theme: e }) => ({
      display: "block",
      transformOrigin: "top left",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: "100%",
      variants: [
        {
          props: ({ ownerState: t }) => t.formControl,
          style: {
            position: "absolute",
            left: 0,
            top: 0,
            transform: "translate(0, 20px) scale(1)",
          },
        },
        {
          props: { size: "small" },
          style: { transform: "translate(0, 17px) scale(1)" },
        },
        {
          props: ({ ownerState: t }) => t.shrink,
          style: {
            transform: "translate(0, -1.5px) scale(0.75)",
            transformOrigin: "top left",
            maxWidth: "133%",
          },
        },
        {
          props: ({ ownerState: t }) => !t.disableAnimation,
          style: {
            transition: e.transitions.create(
              ["color", "transform", "max-width"],
              {
                duration: e.transitions.duration.shorter,
                easing: e.transitions.easing.easeOut,
              }
            ),
          },
        },
        {
          props: { variant: "filled" },
          style: {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(12px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
        },
        {
          props: { variant: "filled", size: "small" },
          style: { transform: "translate(12px, 13px) scale(1)" },
        },
        {
          props: ({ variant: t, ownerState: n }) => t === "filled" && n.shrink,
          style: {
            userSelect: "none",
            pointerEvents: "auto",
            transform: "translate(12px, 7px) scale(0.75)",
            maxWidth: "calc(133% - 24px)",
          },
        },
        {
          props: ({ variant: t, ownerState: n, size: r }) =>
            t === "filled" && n.shrink && r === "small",
          style: { transform: "translate(12px, 4px) scale(0.75)" },
        },
        {
          props: { variant: "outlined" },
          style: {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(14px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
        },
        {
          props: { variant: "outlined", size: "small" },
          style: { transform: "translate(14px, 9px) scale(1)" },
        },
        {
          props: ({ variant: t, ownerState: n }) =>
            t === "outlined" && n.shrink,
          style: {
            userSelect: "none",
            pointerEvents: "auto",
            maxWidth: "calc(133% - 32px)",
            transform: "translate(14px, -9px) scale(0.75)",
          },
        },
      ],
    }))
  ),
  tL = C.forwardRef(function (t, n) {
    const r = pe({ name: "MuiInputLabel", props: t }),
      {
        disableAnimation: i = !1,
        margin: o,
        shrink: s,
        variant: a,
        className: l,
        ...c
      } = r,
      u = Fo();
    let d = s;
    typeof d > "u" && u && (d = u.filled || u.focused || u.adornedStart);
    const f = $o({
        props: r,
        muiFormControl: u,
        states: ["size", "variant", "required", "focused"],
      }),
      p = {
        ...r,
        disableAnimation: i,
        formControl: u,
        shrink: d,
        size: f.size,
        variant: f.variant,
        required: f.required,
        focused: f.focused,
      },
      h = ZA(p);
    return P.jsx(eL, {
      "data-shrink": d,
      ref: n,
      className: U(h.root, l),
      ...c,
      ownerState: p,
      classes: h,
    });
  });
function Ad(e, t, n) {
  return e === t
    ? e.firstChild
    : t && t.nextElementSibling
    ? t.nextElementSibling
    : n
    ? null
    : e.firstChild;
}
function xy(e, t, n) {
  return e === t
    ? n
      ? e.firstChild
      : e.lastChild
    : t && t.previousElementSibling
    ? t.previousElementSibling
    : n
    ? null
    : e.lastChild;
}
function Xb(e, t) {
  if (t === void 0) return !0;
  let n = e.innerText;
  return (
    n === void 0 && (n = e.textContent),
    (n = n.trim().toLowerCase()),
    n.length === 0
      ? !1
      : t.repeating
      ? n[0] === t.keys[0]
      : n.startsWith(t.keys.join(""))
  );
}
function ss(e, t, n, r, i, o) {
  let s = !1,
    a = i(e, t, t ? n : !1);
  for (; a; ) {
    if (a === e.firstChild) {
      if (s) return !1;
      s = !0;
    }
    const l = r ? !1 : a.disabled || a.getAttribute("aria-disabled") === "true";
    if (!a.hasAttribute("tabindex") || !Xb(a, o) || l) a = i(e, a, n);
    else return a.focus(), !0;
  }
  return !1;
}
const nL = C.forwardRef(function (t, n) {
  const {
      actions: r,
      autoFocus: i = !1,
      autoFocusItem: o = !1,
      children: s,
      className: a,
      disabledItemsFocusable: l = !1,
      disableListWrap: c = !1,
      onKeyDown: u,
      variant: d = "selectedMenu",
      ...f
    } = t,
    p = C.useRef(null),
    h = C.useRef({
      keys: [],
      repeating: !0,
      previousKeyMatched: !0,
      lastTime: null,
    });
  ir(() => {
    i && p.current.focus();
  }, [i]),
    C.useImperativeHandle(
      r,
      () => ({
        adjustStyleForScrollbar: (m, { direction: S }) => {
          const w = !p.current.style.width;
          if (m.clientHeight < p.current.clientHeight && w) {
            const _ = `${I1(It(m))}px`;
            (p.current.style[S === "rtl" ? "paddingLeft" : "paddingRight"] = _),
              (p.current.style.width = `calc(100% + ${_})`);
          }
          return p.current;
        },
      }),
      []
    );
  const y = (m) => {
      const S = p.current,
        w = m.key,
        _ = It(S).activeElement;
      if (w === "ArrowDown") m.preventDefault(), ss(S, _, c, l, Ad);
      else if (w === "ArrowUp") m.preventDefault(), ss(S, _, c, l, xy);
      else if (w === "Home") m.preventDefault(), ss(S, null, c, l, Ad);
      else if (w === "End") m.preventDefault(), ss(S, null, c, l, xy);
      else if (w.length === 1) {
        const k = h.current,
          M = w.toLowerCase(),
          b = performance.now();
        k.keys.length > 0 &&
          (b - k.lastTime > 500
            ? ((k.keys = []), (k.repeating = !0), (k.previousKeyMatched = !0))
            : k.repeating && M !== k.keys[0] && (k.repeating = !1)),
          (k.lastTime = b),
          k.keys.push(M);
        const E = _ && !k.repeating && Xb(_, k);
        k.previousKeyMatched && (E || ss(S, _, !1, l, Ad, k))
          ? m.preventDefault()
          : (k.previousKeyMatched = !1);
      }
      u && u(m);
    },
    x = Ye(p, n);
  let g = -1;
  C.Children.forEach(s, (m, S) => {
    if (!C.isValidElement(m)) {
      g === S && ((g += 1), g >= s.length && (g = -1));
      return;
    }
    m.props.disabled ||
      (((d === "selectedMenu" && m.props.selected) || g === -1) && (g = S)),
      g === S &&
        (m.props.disabled ||
          m.props.muiSkipListHighlight ||
          m.type.muiSkipListHighlight) &&
        ((g += 1), g >= s.length && (g = -1));
  });
  const v = C.Children.map(s, (m, S) => {
    if (S === g) {
      const w = {};
      return (
        o && (w.autoFocus = !0),
        m.props.tabIndex === void 0 && d === "selectedMenu" && (w.tabIndex = 0),
        C.cloneElement(m, w)
      );
    }
    return m;
  });
  return P.jsx(q1, {
    role: "menu",
    ref: x,
    className: a,
    onKeyDown: y,
    tabIndex: i ? 0 : -1,
    ...f,
    children: v,
  });
});
function rL(e) {
  return ne("MuiPopover", e);
}
ae("MuiPopover", ["root", "paper"]);
function by(e, t) {
  let n = 0;
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
      ? (n = e.height / 2)
      : t === "bottom" && (n = e.height),
    n
  );
}
function Sy(e, t) {
  let n = 0;
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
      ? (n = e.width / 2)
      : t === "right" && (n = e.width),
    n
  );
}
function Cy(e) {
  return [e.horizontal, e.vertical]
    .map((t) => (typeof t == "number" ? `${t}px` : t))
    .join(" ");
}
function Ld(e) {
  return typeof e == "function" ? e() : e;
}
const iL = (e) => {
    const { classes: t } = e;
    return oe({ root: ["root"], paper: ["paper"] }, rL, t);
  },
  oL = j(Y1, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  Qb = j(Sh, {
    name: "MuiPopover",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0,
  }),
  sL = C.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiPopover" }),
      {
        action: i,
        anchorEl: o,
        anchorOrigin: s = { vertical: "top", horizontal: "left" },
        anchorPosition: a,
        anchorReference: l = "anchorEl",
        children: c,
        className: u,
        container: d,
        elevation: f = 8,
        marginThreshold: p = 16,
        open: h,
        PaperProps: y = {},
        slots: x = {},
        slotProps: g = {},
        transformOrigin: v = { vertical: "top", horizontal: "left" },
        TransitionComponent: m = ep,
        transitionDuration: S = "auto",
        TransitionProps: { onEntering: w, ..._ } = {},
        disableScrollLock: k = !1,
        ...M
      } = r,
      b = (g == null ? void 0 : g.paper) ?? y,
      E = C.useRef(),
      R = {
        ...r,
        anchorOrigin: s,
        anchorReference: l,
        elevation: f,
        marginThreshold: p,
        externalPaperSlotProps: b,
        transformOrigin: v,
        TransitionComponent: m,
        transitionDuration: S,
        TransitionProps: _,
      },
      I = iL(R),
      z = C.useCallback(() => {
        if (l === "anchorPosition") return a;
        const Z = Ld(o),
          te = (
            Z && Z.nodeType === 1 ? Z : It(E.current).body
          ).getBoundingClientRect();
        return {
          top: te.top + by(te, s.vertical),
          left: te.left + Sy(te, s.horizontal),
        };
      }, [o, s.horizontal, s.vertical, a, l]),
      D = C.useCallback(
        (Z) => ({
          vertical: by(Z, v.vertical),
          horizontal: Sy(Z, v.horizontal),
        }),
        [v.horizontal, v.vertical]
      ),
      L = C.useCallback(
        (Z) => {
          const fe = { width: Z.offsetWidth, height: Z.offsetHeight },
            te = D(fe);
          if (l === "none")
            return { top: null, left: null, transformOrigin: Cy(te) };
          const rt = z();
          let se = rt.top - te.vertical,
            xe = rt.left - te.horizontal;
          const Gt = se + fe.height,
            Kt = xe + fe.width,
            it = Dn(Ld(o)),
            ot = it.innerHeight - p,
            wn = it.innerWidth - p;
          if (p !== null && se < p) {
            const ke = se - p;
            (se -= ke), (te.vertical += ke);
          } else if (p !== null && Gt > ot) {
            const ke = Gt - ot;
            (se -= ke), (te.vertical += ke);
          }
          if (p !== null && xe < p) {
            const ke = xe - p;
            (xe -= ke), (te.horizontal += ke);
          } else if (Kt > wn) {
            const ke = Kt - wn;
            (xe -= ke), (te.horizontal += ke);
          }
          return {
            top: `${Math.round(se)}px`,
            left: `${Math.round(xe)}px`,
            transformOrigin: Cy(te),
          };
        },
        [o, l, z, D, p]
      ),
      [A, N] = C.useState(h),
      T = C.useCallback(() => {
        const Z = E.current;
        if (!Z) return;
        const fe = L(Z);
        fe.top !== null && (Z.style.top = fe.top),
          fe.left !== null && (Z.style.left = fe.left),
          (Z.style.transformOrigin = fe.transformOrigin),
          N(!0);
      }, [L]);
    C.useEffect(
      () => (
        k && window.addEventListener("scroll", T),
        () => window.removeEventListener("scroll", T)
      ),
      [o, k, T]
    );
    const $ = (Z, fe) => {
        w && w(Z, fe), T();
      },
      B = () => {
        N(!1);
      };
    C.useEffect(() => {
      h && T();
    }),
      C.useImperativeHandle(
        i,
        () =>
          h
            ? {
                updatePosition: () => {
                  T();
                },
              }
            : null,
        [h, T]
      ),
      C.useEffect(() => {
        if (!h) return;
        const Z = yu(() => {
            T();
          }),
          fe = Dn(o);
        return (
          fe.addEventListener("resize", Z),
          () => {
            Z.clear(), fe.removeEventListener("resize", Z);
          }
        );
      }, [o, h, T]);
    let H = S;
    S === "auto" && !m.muiSupportAuto && (H = void 0);
    const Q = d || (o ? It(Ld(o)).body : void 0),
      q = { slots: x, slotProps: { ...g, paper: b } },
      [G, le] = yn("paper", {
        elementType: Qb,
        externalForwardedProps: q,
        additionalProps: {
          elevation: f,
          className: U(I.paper, b == null ? void 0 : b.className),
          style: A ? b.style : { ...b.style, opacity: 0 },
        },
        ownerState: R,
      }),
      [re, { slotProps: He, ...kt }] = yn("root", {
        elementType: oL,
        externalForwardedProps: q,
        additionalProps: {
          slotProps: { backdrop: { invisible: !0 } },
          container: Q,
          open: h,
        },
        ownerState: R,
        className: U(I.root, u),
      }),
      Be = Ye(E, le.ref);
    return P.jsx(re, {
      ...kt,
      ...(!aa(re) && { slotProps: He, disableScrollLock: k }),
      ...M,
      ref: n,
      children: P.jsx(m, {
        appear: !0,
        in: h,
        onEntering: $,
        onExited: B,
        timeout: H,
        ..._,
        children: P.jsx(G, { ...le, ref: Be, children: c }),
      }),
    });
  });
function aL(e) {
  return ne("MuiMenu", e);
}
ae("MuiMenu", ["root", "paper", "list"]);
const lL = { vertical: "top", horizontal: "right" },
  cL = { vertical: "top", horizontal: "left" },
  uL = (e) => {
    const { classes: t } = e;
    return oe({ root: ["root"], paper: ["paper"], list: ["list"] }, aL, t);
  },
  dL = j(sL, {
    shouldForwardProp: (e) => Vt(e) || e === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  fL = j(Qb, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }),
  pL = j(nL, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (e, t) => t.list,
  })({ outline: 0 }),
  hL = C.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiMenu" }),
      {
        autoFocus: i = !0,
        children: o,
        className: s,
        disableAutoFocusItem: a = !1,
        MenuListProps: l = {},
        onClose: c,
        open: u,
        PaperProps: d = {},
        PopoverClasses: f,
        transitionDuration: p = "auto",
        TransitionProps: { onEntering: h, ...y } = {},
        variant: x = "selectedMenu",
        slots: g = {},
        slotProps: v = {},
        ...m
      } = r,
      S = z1(),
      w = {
        ...r,
        autoFocus: i,
        disableAutoFocusItem: a,
        MenuListProps: l,
        onEntering: h,
        PaperProps: d,
        transitionDuration: p,
        TransitionProps: y,
        variant: x,
      },
      _ = uL(w),
      k = i && !a && u,
      M = C.useRef(null),
      b = (A, N) => {
        M.current &&
          M.current.adjustStyleForScrollbar(A, {
            direction: S ? "rtl" : "ltr",
          }),
          h && h(A, N);
      },
      E = (A) => {
        A.key === "Tab" && (A.preventDefault(), c && c(A, "tabKeyDown"));
      };
    let R = -1;
    C.Children.map(o, (A, N) => {
      C.isValidElement(A) &&
        (A.props.disabled ||
          (((x === "selectedMenu" && A.props.selected) || R === -1) &&
            (R = N)));
    });
    const I = g.paper ?? fL,
      z = v.paper ?? d,
      D = Fm({
        elementType: g.root,
        externalSlotProps: v.root,
        ownerState: w,
        className: [_.root, s],
      }),
      L = Fm({
        elementType: I,
        externalSlotProps: z,
        ownerState: w,
        className: _.paper,
      });
    return P.jsx(dL, {
      onClose: c,
      anchorOrigin: { vertical: "bottom", horizontal: S ? "right" : "left" },
      transformOrigin: S ? lL : cL,
      slots: { paper: I, root: g.root },
      slotProps: { root: D, paper: L },
      open: u,
      ref: n,
      transitionDuration: p,
      TransitionProps: { onEntering: b, ...y },
      ownerState: w,
      ...m,
      classes: f,
      children: P.jsx(pL, {
        onKeyDown: E,
        actions: M,
        autoFocus: i && (R === -1 || a),
        autoFocusItem: k,
        variant: x,
        ...l,
        className: U(_.list, l.className),
        children: o,
      }),
    });
  });
function gL(e) {
  return ne("MuiNativeSelect", e);
}
const Zh = ae("MuiNativeSelect", [
    "root",
    "select",
    "multiple",
    "filled",
    "outlined",
    "standard",
    "disabled",
    "icon",
    "iconOpen",
    "iconFilled",
    "iconOutlined",
    "iconStandard",
    "nativeInput",
    "error",
  ]),
  mL = (e) => {
    const {
        classes: t,
        variant: n,
        disabled: r,
        multiple: i,
        open: o,
        error: s,
      } = e,
      a = {
        select: ["select", n, r && "disabled", i && "multiple", s && "error"],
        icon: ["icon", `icon${V(n)}`, o && "iconOpen", r && "disabled"],
      };
    return oe(a, gL, t);
  },
  qb = j("select")(({ theme: e }) => ({
    MozAppearance: "none",
    WebkitAppearance: "none",
    userSelect: "none",
    borderRadius: 0,
    cursor: "pointer",
    "&:focus": { borderRadius: 0 },
    [`&.${Zh.disabled}`]: { cursor: "default" },
    "&[multiple]": { height: "auto" },
    "&:not([multiple]) option, &:not([multiple]) optgroup": {
      backgroundColor: (e.vars || e).palette.background.paper,
    },
    variants: [
      {
        props: ({ ownerState: t }) =>
          t.variant !== "filled" && t.variant !== "outlined",
        style: { "&&&": { paddingRight: 24, minWidth: 16 } },
      },
      { props: { variant: "filled" }, style: { "&&&": { paddingRight: 32 } } },
      {
        props: { variant: "outlined" },
        style: {
          borderRadius: (e.vars || e).shape.borderRadius,
          "&:focus": { borderRadius: (e.vars || e).shape.borderRadius },
          "&&&": { paddingRight: 32 },
        },
      },
    ],
  })),
  yL = j(qb, {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: Vt,
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.select,
        t[n.variant],
        n.error && t.error,
        { [`&.${Zh.multiple}`]: t.multiple },
      ];
    },
  })({}),
  Jb = j("svg")(({ theme: e }) => ({
    position: "absolute",
    right: 0,
    top: "calc(50% - .5em)",
    pointerEvents: "none",
    color: (e.vars || e).palette.action.active,
    [`&.${Zh.disabled}`]: { color: (e.vars || e).palette.action.disabled },
    variants: [
      {
        props: ({ ownerState: t }) => t.open,
        style: { transform: "rotate(180deg)" },
      },
      { props: { variant: "filled" }, style: { right: 7 } },
      { props: { variant: "outlined" }, style: { right: 7 } },
    ],
  })),
  vL = j(Jb, {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        n.variant && t[`icon${V(n.variant)}`],
        n.open && t.iconOpen,
      ];
    },
  })({}),
  xL = C.forwardRef(function (t, n) {
    const {
        className: r,
        disabled: i,
        error: o,
        IconComponent: s,
        inputRef: a,
        variant: l = "standard",
        ...c
      } = t,
      u = { ...t, disabled: i, variant: l, error: o },
      d = mL(u);
    return P.jsxs(C.Fragment, {
      children: [
        P.jsx(yL, {
          ownerState: u,
          className: U(d.select, r),
          disabled: i,
          ref: a || n,
          ...c,
        }),
        t.multiple
          ? null
          : P.jsx(vL, { as: s, ownerState: u, className: d.icon }),
      ],
    });
  });
var wy;
const bL = j("fieldset", { shouldForwardProp: Vt })({
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    minWidth: "0%",
  }),
  SL = j("legend", { shouldForwardProp: Vt })(
    me(({ theme: e }) => ({
      float: "unset",
      width: "auto",
      overflow: "hidden",
      variants: [
        {
          props: ({ ownerState: t }) => !t.withLabel,
          style: {
            padding: 0,
            lineHeight: "11px",
            transition: e.transitions.create("width", {
              duration: 150,
              easing: e.transitions.easing.easeOut,
            }),
          },
        },
        {
          props: ({ ownerState: t }) => t.withLabel,
          style: {
            display: "block",
            padding: 0,
            height: 11,
            fontSize: "0.75em",
            visibility: "hidden",
            maxWidth: 0.01,
            transition: e.transitions.create("max-width", {
              duration: 50,
              easing: e.transitions.easing.easeOut,
            }),
            whiteSpace: "nowrap",
            "& > span": {
              paddingLeft: 5,
              paddingRight: 5,
              display: "inline-block",
              opacity: 0,
              visibility: "visible",
            },
          },
        },
        {
          props: ({ ownerState: t }) => t.withLabel && t.notched,
          style: {
            maxWidth: "100%",
            transition: e.transitions.create("max-width", {
              duration: 100,
              easing: e.transitions.easing.easeOut,
              delay: 50,
            }),
          },
        },
      ],
    }))
  );
function CL(e) {
  const {
      children: t,
      classes: n,
      className: r,
      label: i,
      notched: o,
      ...s
    } = e,
    a = i != null && i !== "",
    l = { ...e, notched: o, withLabel: a };
  return P.jsx(bL, {
    "aria-hidden": !0,
    className: r,
    ownerState: l,
    ...s,
    children: P.jsx(SL, {
      ownerState: l,
      children: a
        ? P.jsx("span", { children: i })
        : wy ||
          (wy = P.jsx("span", { className: "notranslate", children: "​" })),
    }),
  });
}
const wL = (e) => {
    const { classes: t } = e,
      r = oe(
        {
          root: ["root"],
          notchedOutline: ["notchedOutline"],
          input: ["input"],
        },
        TA,
        t
      );
    return { ...t, ...r };
  },
  kL = j(Bu, {
    shouldForwardProp: (e) => Vt(e) || e === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: Du,
  })(
    me(({ theme: e }) => {
      const t =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.23)"
          : "rgba(255, 255, 255, 0.23)";
      return {
        position: "relative",
        borderRadius: (e.vars || e).shape.borderRadius,
        [`&:hover .${Pn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.text.primary,
        },
        [`&.${Pn.focused} .${Pn.notchedOutline}`]: { borderWidth: 2 },
        variants: [
          ...Object.entries(e.palette)
            .filter(([, n]) => n && n.main)
            .map(([n]) => ({
              props: { color: n },
              style: {
                [`&.${Pn.focused} .${Pn.notchedOutline}`]: {
                  borderColor: (e.vars || e).palette[n].main,
                },
              },
            })),
          {
            props: {},
            style: {
              "@media (hover: none)": {
                [`&:hover .${Pn.notchedOutline}`]: {
                  borderColor: e.vars
                    ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
                    : t,
                },
              },
              [`&.${Pn.error} .${Pn.notchedOutline}`]: {
                borderColor: (e.vars || e).palette.error.main,
              },
              [`&.${Pn.disabled} .${Pn.notchedOutline}`]: {
                borderColor: (e.vars || e).palette.action.disabled,
              },
            },
          },
          {
            props: ({ ownerState: n }) => n.startAdornment,
            style: { paddingLeft: 14 },
          },
          {
            props: ({ ownerState: n }) => n.endAdornment,
            style: { paddingRight: 14 },
          },
          {
            props: ({ ownerState: n }) => n.multiline,
            style: { padding: "16.5px 14px" },
          },
          {
            props: ({ ownerState: n, size: r }) => n.multiline && r === "small",
            style: { padding: "8.5px 14px" },
          },
        ],
      };
    })
  ),
  _L = j(CL, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (e, t) => t.notchedOutline,
  })(
    me(({ theme: e }) => {
      const t =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.23)"
          : "rgba(255, 255, 255, 0.23)";
      return {
        borderColor: e.vars
          ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
          : t,
      };
    })
  ),
  PL = j(ju, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: Nu,
  })(
    me(({ theme: e }) => ({
      padding: "16.5px 14px",
      ...(!e.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow:
            e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
          caretColor: e.palette.mode === "light" ? null : "#fff",
          borderRadius: "inherit",
        },
      }),
      ...(e.vars && {
        "&:-webkit-autofill": { borderRadius: "inherit" },
        [e.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff",
          },
        },
      }),
      variants: [
        { props: { size: "small" }, style: { padding: "8.5px 14px" } },
        { props: ({ ownerState: t }) => t.multiline, style: { padding: 0 } },
        {
          props: ({ ownerState: t }) => t.startAdornment,
          style: { paddingLeft: 0 },
        },
        {
          props: ({ ownerState: t }) => t.endAdornment,
          style: { paddingRight: 0 },
        },
      ],
    }))
  ),
  Mc = C.forwardRef(function (t, n) {
    var r;
    const i = pe({ props: t, name: "MuiOutlinedInput" }),
      {
        components: o = {},
        fullWidth: s = !1,
        inputComponent: a = "input",
        label: l,
        multiline: c = !1,
        notched: u,
        slots: d = {},
        type: f = "text",
        ...p
      } = i,
      h = wL(i),
      y = Fo(),
      x = $o({
        props: i,
        muiFormControl: y,
        states: [
          "color",
          "disabled",
          "error",
          "focused",
          "hiddenLabel",
          "size",
          "required",
        ],
      }),
      g = {
        ...i,
        color: x.color || "primary",
        disabled: x.disabled,
        error: x.error,
        focused: x.focused,
        formControl: y,
        fullWidth: s,
        hiddenLabel: x.hiddenLabel,
        multiline: c,
        size: x.size,
        type: f,
      },
      v = d.root ?? o.Root ?? kL,
      m = d.input ?? o.Input ?? PL;
    return P.jsx(Jh, {
      slots: { root: v, input: m },
      renderSuffix: (S) =>
        P.jsx(_L, {
          ownerState: g,
          className: h.notchedOutline,
          label:
            l != null && l !== "" && x.required
              ? r || (r = P.jsxs(C.Fragment, { children: [l, " ", "*"] }))
              : l,
          notched:
            typeof u < "u" ? u : !!(S.startAdornment || S.filled || S.focused),
        }),
      fullWidth: s,
      inputComponent: a,
      multiline: c,
      ref: n,
      type: f,
      ...p,
      classes: { ...h, notchedOutline: null },
    });
  });
Mc && (Mc.muiName = "Input");
function EL(e) {
  return ne("MuiSelect", e);
}
const as = ae("MuiSelect", [
  "root",
  "select",
  "multiple",
  "filled",
  "outlined",
  "standard",
  "disabled",
  "focused",
  "icon",
  "iconOpen",
  "iconFilled",
  "iconOutlined",
  "iconStandard",
  "nativeInput",
  "error",
]);
var ky;
const ML = j(qb, {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`&.${as.select}`]: t.select },
        { [`&.${as.select}`]: t[n.variant] },
        { [`&.${as.error}`]: t.error },
        { [`&.${as.multiple}`]: t.multiple },
      ];
    },
  })({
    [`&.${as.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
  }),
  TL = j(Jb, {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        n.variant && t[`icon${V(n.variant)}`],
        n.open && t.iconOpen,
      ];
    },
  })({}),
  RL = j("input", {
    shouldForwardProp: (e) => W1(e) && e !== "classes",
    name: "MuiSelect",
    slot: "NativeInput",
    overridesResolver: (e, t) => t.nativeInput,
  })({
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    width: "100%",
    boxSizing: "border-box",
  });
function _y(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function OL(e) {
  return e == null || (typeof e == "string" && !e.trim());
}
const IL = (e) => {
    const {
        classes: t,
        variant: n,
        disabled: r,
        multiple: i,
        open: o,
        error: s,
      } = e,
      a = {
        select: ["select", n, r && "disabled", i && "multiple", s && "error"],
        icon: ["icon", `icon${V(n)}`, o && "iconOpen", r && "disabled"],
        nativeInput: ["nativeInput"],
      };
    return oe(a, EL, t);
  },
  AL = C.forwardRef(function (t, n) {
    var Bo;
    const {
        "aria-describedby": r,
        "aria-label": i,
        autoFocus: o,
        autoWidth: s,
        children: a,
        className: l,
        defaultOpen: c,
        defaultValue: u,
        disabled: d,
        displayEmpty: f,
        error: p = !1,
        IconComponent: h,
        inputRef: y,
        labelId: x,
        MenuProps: g = {},
        multiple: v,
        name: m,
        onBlur: S,
        onChange: w,
        onClose: _,
        onFocus: k,
        onOpen: M,
        open: b,
        readOnly: E,
        renderValue: R,
        SelectDisplayProps: I = {},
        tabIndex: z,
        type: D,
        value: L,
        variant: A = "standard",
        ...N
      } = t,
      [T, $] = zf({ controlled: L, default: u, name: "Select" }),
      [B, H] = zf({ controlled: b, default: c, name: "Select" }),
      Q = C.useRef(null),
      q = C.useRef(null),
      [G, le] = C.useState(null),
      { current: re } = C.useRef(b != null),
      [He, kt] = C.useState(),
      Be = Ye(n, y),
      Z = C.useCallback((X) => {
        (q.current = X), X && le(X);
      }, []),
      fe = G == null ? void 0 : G.parentNode;
    C.useImperativeHandle(
      Be,
      () => ({
        focus: () => {
          q.current.focus();
        },
        node: Q.current,
        value: T,
      }),
      [T]
    ),
      C.useEffect(() => {
        c &&
          B &&
          G &&
          !re &&
          (kt(s ? null : fe.clientWidth), q.current.focus());
      }, [G, s]),
      C.useEffect(() => {
        o && q.current.focus();
      }, [o]),
      C.useEffect(() => {
        if (!x) return;
        const X = It(q.current).getElementById(x);
        if (X) {
          const _e = () => {
            getSelection().isCollapsed && q.current.focus();
          };
          return (
            X.addEventListener("click", _e),
            () => {
              X.removeEventListener("click", _e);
            }
          );
        }
      }, [x]);
    const te = (X, _e) => {
        X ? M && M(_e) : _ && _(_e),
          re || (kt(s ? null : fe.clientWidth), H(X));
      },
      rt = (X) => {
        X.button === 0 && (X.preventDefault(), q.current.focus(), te(!0, X));
      },
      se = (X) => {
        te(!1, X);
      },
      xe = C.Children.toArray(a),
      Gt = (X) => {
        const _e = xe.find((at) => at.props.value === X.target.value);
        _e !== void 0 && ($(_e.props.value), w && w(X, _e));
      },
      Kt = (X) => (_e) => {
        let at;
        if (_e.currentTarget.hasAttribute("tabindex")) {
          if (v) {
            at = Array.isArray(T) ? T.slice() : [];
            const Pi = T.indexOf(X.props.value);
            Pi === -1 ? at.push(X.props.value) : at.splice(Pi, 1);
          } else at = X.props.value;
          if (
            (X.props.onClick && X.props.onClick(_e), T !== at && ($(at), w))
          ) {
            const Pi = _e.nativeEvent || _e,
              tg = new Pi.constructor(Pi.type, Pi);
            Object.defineProperty(tg, "target", {
              writable: !0,
              value: { value: at, name: m },
            }),
              w(tg, X);
          }
          v || te(!1, _e);
        }
      },
      it = (X) => {
        E ||
          ([" ", "ArrowUp", "ArrowDown", "Enter"].includes(X.key) &&
            (X.preventDefault(), te(!0, X)));
      },
      ot = G !== null && B,
      wn = (X) => {
        !ot &&
          S &&
          (Object.defineProperty(X, "target", {
            writable: !0,
            value: { value: T, name: m },
          }),
          S(X));
      };
    delete N["aria-invalid"];
    let ke, Nn;
    const K = [];
    let st = !1;
    (_c({ value: T }) || f) && (R ? (ke = R(T)) : (st = !0));
    const zo = xe.map((X) => {
      if (!C.isValidElement(X)) return null;
      let _e;
      if (v) {
        if (!Array.isArray(T)) throw new Error(rr(2));
        (_e = T.some((at) => _y(at, X.props.value))),
          _e && st && K.push(X.props.children);
      } else (_e = _y(T, X.props.value)), _e && st && (Nn = X.props.children);
      return C.cloneElement(X, {
        "aria-selected": _e ? "true" : "false",
        onClick: Kt(X),
        onKeyUp: (at) => {
          at.key === " " && at.preventDefault(),
            X.props.onKeyUp && X.props.onKeyUp(at);
        },
        role: "option",
        selected: _e,
        value: void 0,
        "data-value": X.props.value,
      });
    });
    st &&
      (v
        ? K.length === 0
          ? (ke = null)
          : (ke = K.reduce(
              (X, _e, at) => (X.push(_e), at < K.length - 1 && X.push(", "), X),
              []
            ))
        : (ke = Nn));
    let Bn = He;
    !s && re && G && (Bn = fe.clientWidth);
    let Wr;
    typeof z < "u" ? (Wr = z) : (Wr = d ? null : 0);
    const Do = I.id || (m ? `mui-component-select-${m}` : void 0),
      lr = { ...t, variant: A, value: T, open: ot, error: p },
      _i = IL(lr),
      Te = {
        ...g.PaperProps,
        ...((Bo = g.slotProps) == null ? void 0 : Bo.paper),
      },
      No = mh();
    return P.jsxs(C.Fragment, {
      children: [
        P.jsx(ML, {
          as: "div",
          ref: Z,
          tabIndex: Wr,
          role: "combobox",
          "aria-controls": No,
          "aria-disabled": d ? "true" : void 0,
          "aria-expanded": ot ? "true" : "false",
          "aria-haspopup": "listbox",
          "aria-label": i,
          "aria-labelledby": [x, Do].filter(Boolean).join(" ") || void 0,
          "aria-describedby": r,
          onKeyDown: it,
          onMouseDown: d || E ? null : rt,
          onBlur: wn,
          onFocus: k,
          ...I,
          ownerState: lr,
          className: U(I.className, _i.select, l),
          id: Do,
          children: OL(ke)
            ? ky ||
              (ky = P.jsx("span", { className: "notranslate", children: "​" }))
            : ke,
        }),
        P.jsx(RL, {
          "aria-invalid": p,
          value: Array.isArray(T) ? T.join(",") : T,
          name: m,
          ref: Q,
          "aria-hidden": !0,
          onChange: Gt,
          tabIndex: -1,
          disabled: d,
          className: _i.nativeInput,
          autoFocus: o,
          ...N,
          ownerState: lr,
        }),
        P.jsx(TL, { as: h, className: _i.icon, ownerState: lr }),
        P.jsx(hL, {
          id: `menu-${m || ""}`,
          anchorEl: fe,
          open: ot,
          onClose: se,
          anchorOrigin: { vertical: "bottom", horizontal: "center" },
          transformOrigin: { vertical: "top", horizontal: "center" },
          ...g,
          MenuListProps: {
            "aria-labelledby": x,
            role: "listbox",
            "aria-multiselectable": v ? "true" : void 0,
            disableListWrap: !0,
            id: No,
            ...g.MenuListProps,
          },
          slotProps: {
            ...g.slotProps,
            paper: {
              ...Te,
              style: { minWidth: Bn, ...(Te != null ? Te.style : null) },
            },
          },
          children: zo,
        }),
      ],
    });
  }),
  LL = (e) => {
    const { classes: t } = e;
    return t;
  },
  eg = {
    name: "MuiSelect",
    overridesResolver: (e, t) => t.root,
    shouldForwardProp: (e) => Vt(e) && e !== "variant",
    slot: "Root",
  },
  $L = j(Ec, eg)(""),
  FL = j(Mc, eg)(""),
  zL = j(Pc, eg)(""),
  Zb = C.forwardRef(function (t, n) {
    const r = bu({ name: "MuiSelect", props: t }),
      {
        autoWidth: i = !1,
        children: o,
        classes: s = {},
        className: a,
        defaultOpen: l = !1,
        displayEmpty: c = !1,
        IconComponent: u = OA,
        id: d,
        input: f,
        inputProps: p,
        label: h,
        labelId: y,
        MenuProps: x,
        multiple: g = !1,
        native: v = !1,
        onClose: m,
        onOpen: S,
        open: w,
        renderValue: _,
        SelectDisplayProps: k,
        variant: M = "outlined",
        ...b
      } = r,
      E = v ? xL : AL,
      R = Fo(),
      I = $o({ props: r, muiFormControl: R, states: ["variant", "error"] }),
      z = I.variant || M,
      D = { ...r, variant: z, classes: s },
      L = LL(D),
      { root: A, ...N } = L,
      T =
        f ||
        {
          standard: P.jsx($L, { ownerState: D }),
          outlined: P.jsx(FL, { label: h, ownerState: D }),
          filled: P.jsx(zL, { ownerState: D }),
        }[z],
      $ = Ye(n, Oo(T));
    return P.jsx(C.Fragment, {
      children: C.cloneElement(T, {
        inputComponent: E,
        inputProps: {
          children: o,
          error: I.error,
          IconComponent: u,
          variant: z,
          type: void 0,
          multiple: g,
          ...(v
            ? { id: d }
            : {
                autoWidth: i,
                defaultOpen: l,
                displayEmpty: c,
                labelId: y,
                MenuProps: x,
                onClose: m,
                onOpen: S,
                open: w,
                renderValue: _,
                SelectDisplayProps: { id: d, ...k },
              }),
          ...p,
          classes: p ? tt(N, p.classes) : N,
          ...(f ? f.props.inputProps : {}),
        },
        ...(((g && v) || c) && z === "outlined" ? { notched: !0 } : {}),
        ref: $,
        className: U(T.props.className, a, L.root),
        ...(!f && { variant: z }),
        ...b,
      }),
    });
  });
Zb.muiName = "Select";
const zr = KP({
  createStyledComponent: j("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  }),
  useThemeProps: (e) => bu({ props: e, name: "MuiStack" }),
});
function DL(e) {
  return ne("MuiTextField", e);
}
ae("MuiTextField", ["root"]);
const NL = { standard: Ec, filled: Pc, outlined: Mc },
  BL = (e) => {
    const { classes: t } = e;
    return oe({ root: ["root"] }, DL, t);
  },
  jL = j(DA, {
    name: "MuiTextField",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  Wu = C.forwardRef(function (t, n) {
    const r = pe({ props: t, name: "MuiTextField" }),
      {
        autoComplete: i,
        autoFocus: o = !1,
        children: s,
        className: a,
        color: l = "primary",
        defaultValue: c,
        disabled: u = !1,
        error: d = !1,
        FormHelperTextProps: f,
        fullWidth: p = !1,
        helperText: h,
        id: y,
        InputLabelProps: x,
        inputProps: g,
        InputProps: v,
        inputRef: m,
        label: S,
        maxRows: w,
        minRows: _,
        multiline: k = !1,
        name: M,
        onBlur: b,
        onChange: E,
        onFocus: R,
        placeholder: I,
        required: z = !1,
        rows: D,
        select: L = !1,
        SelectProps: A,
        slots: N = {},
        slotProps: T = {},
        type: $,
        value: B,
        variant: H = "outlined",
        ...Q
      } = r,
      q = {
        ...r,
        autoFocus: o,
        color: l,
        disabled: u,
        error: d,
        fullWidth: p,
        multiline: k,
        required: z,
        select: L,
        variant: H,
      },
      G = BL(q),
      le = mh(y),
      re = h && le ? `${le}-helper-text` : void 0,
      He = S && le ? `${le}-label` : void 0,
      kt = NL[H],
      Be = {
        slots: N,
        slotProps: {
          input: v,
          inputLabel: x,
          htmlInput: g,
          formHelperText: f,
          select: A,
          ...T,
        },
      },
      Z = {},
      fe = Be.slotProps.inputLabel;
    H === "outlined" &&
      (fe && typeof fe.shrink < "u" && (Z.notched = fe.shrink), (Z.label = S)),
      L &&
        ((!A || !A.native) && (Z.id = void 0),
        (Z["aria-describedby"] = void 0));
    const [te, rt] = yn("input", {
        elementType: kt,
        externalForwardedProps: Be,
        additionalProps: Z,
        ownerState: q,
      }),
      [se, xe] = yn("inputLabel", {
        elementType: tL,
        externalForwardedProps: Be,
        ownerState: q,
      }),
      [Gt, Kt] = yn("htmlInput", {
        elementType: "input",
        externalForwardedProps: Be,
        ownerState: q,
      }),
      [it, ot] = yn("formHelperText", {
        elementType: WA,
        externalForwardedProps: Be,
        ownerState: q,
      }),
      [wn, ke] = yn("select", {
        elementType: Zb,
        externalForwardedProps: Be,
        ownerState: q,
      }),
      Nn = P.jsx(te, {
        "aria-describedby": re,
        autoComplete: i,
        autoFocus: o,
        defaultValue: c,
        fullWidth: p,
        multiline: k,
        name: M,
        rows: D,
        maxRows: w,
        minRows: _,
        type: $,
        value: B,
        id: le,
        inputRef: m,
        onBlur: b,
        onChange: E,
        onFocus: R,
        placeholder: I,
        inputProps: Kt,
        slots: { input: N.htmlInput ? Gt : void 0 },
        ...rt,
      });
    return P.jsxs(jL, {
      className: U(G.root, a),
      disabled: u,
      error: d,
      fullWidth: p,
      ref: n,
      required: z,
      color: l,
      variant: H,
      ownerState: q,
      ...Q,
      children: [
        S != null &&
          S !== "" &&
          P.jsx(se, { htmlFor: le, id: He, ...xe, children: S }),
        L
          ? P.jsx(wn, {
              "aria-describedby": re,
              id: le,
              labelId: He,
              value: B,
              input: Nn,
              ...ke,
              children: s,
            })
          : Nn,
        h && P.jsx(it, { id: re, ...ot, children: h }),
      ],
    });
  });
ki.register(So, Co, ui, Sr, ku, _u, wu);
const WL = {
    responsive: !0,
    plugins: {
      legend: { position: "top" },
      title: {
        display: !0,
        text: "Grafica historica de temperatura",
        color: "#CCCCCC",
      },
    },
    scales: {
      x: { ticks: { color: "#CCCCCC" } },
      y: { ticks: { color: "#CCCCCC" } },
    },
  },
  HL = j(Yn)(({ theme: e }) => ({
    color: "#FAFAFA",
    width: "48%",
    margin: " 0 auto",
    textTransform: "capitalize",
    fontFamily: "monospace",
    fontSize: "1rem",
    backgroundColor: "hsl(221, 55%, 42%)",
    "&:hover": { backgroundColor: "hsl(221, 55%, 45%)" },
    [e.breakpoints.down("sm")]: {
      fontSize: "0.75rem",
      padding: e.spacing(1),
      width: "70%",
    },
  })),
  Py = j(Wu)(({ theme: e }) => ({
    "& input": { color: "#FAFAFA" },
    "& .MuiInputBase-input": { color: "#CCCCCC" },
    "& .MuiInput-underline:before": { borderBottomColor: "#FAFAFA" },
    "& .MuiInput-underline:hover:before": { borderBottomColor: "#FAFAFA" },
    "& .MuiInputLabel-root": { color: "#CCCCCC" },
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "#CCCCCC" },
      "&:hover fieldset": { borderColor: "#20bee9" },
      "&.Mui-focused fieldset": { borderColor: "#20bee9" },
      "& .MuiInputBase-input": { color: "#CCCCCC" },
    },
    "& .MuiInputLabel-root.Mui-focused": { color: "#20bee9" },
  })),
  UL = () => {
    const [e, t] = C.useState([0]),
      [n, r] = C.useState(""),
      [i, o] = C.useState(""),
      [s, a] = C.useState([
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
      ]),
      l = {
        labels: s,
        datasets: [
          {
            label: "Temperatura",
            data: e,
            borderColor: "rgba(53, 162, 235, 1)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
            color: "white",
          },
        ],
      },
      c = () => {
        console.log("Fecha de inicio:", n),
          console.log("Fecha de fin:", i),
          t([0, 10, 5, 2, 20, 30, 45]),
          a(["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"]);
      };
    return P.jsxs(zr, {
      sx: { width: "100%", color: "#FAFAFA" },
      children: [
        P.jsx(Ln, {
          variant: "h4",
          sx: { mb: 2, fontSize: { xs: "1.5rem", sm: "2rem" } },
          children: "Grafica temperatura",
        }),
        P.jsxs(sn, {
          container: !0,
          spacing: 2,
          sx: { width: "100%", mt: 2, justifyContent: "center" },
          children: [
            P.jsx(sn, {
              xs: 12,
              sm: 6,
              children: P.jsx(Py, {
                label: "Fecha de inicio",
                type: "date",
                value: n,
                onChange: (u) => r(u.target.value),
                fullWidth: !0,
                InputLabelProps: { shrink: !0 },
              }),
            }),
            P.jsx(sn, {
              xs: 12,
              sm: 6,
              children: P.jsx(Py, {
                label: "Fecha de fin",
                type: "date",
                value: i,
                onChange: (u) => o(u.target.value),
                fullWidth: !0,
                InputLabelProps: { shrink: !0 },
              }),
            }),
          ],
        }),
        P.jsx(HL, {
          variant: "contained",
          onClick: c,
          sx: { mt: 2 },
          children: "Obtener data",
        }),
        P.jsx(zr, {
          sx: { width: "100%", mt: 2 },
          children: P.jsx(Eu, { options: WL, data: l }),
        }),
      ],
    });
  };
ki.register(So, Co, ui, Sr, ku, _u, wu);
const VL = {
    responsive: !0,
    plugins: {
      legend: { position: "top" },
      title: {
        display: !0,
        text: "Grafica historica de luz",
        color: "#CCCCCC",
      },
    },
    scales: {
      x: { ticks: { color: "#CCCCCC" } },
      y: { ticks: { color: "#CCCCCC" } },
    },
  },
  GL = j(Yn)(({ theme: e }) => ({
    color: "#FAFAFA",
    width: "48%",
    margin: " 0 auto",
    textTransform: "capitalize",
    fontFamily: "monospace",
    fontSize: "1rem",
    backgroundColor: "hsl(221, 55%, 42%)",
    "&:hover": { backgroundColor: "hsl(221, 55%, 45%)" },
  })),
  Ey = j(Wu)(({ theme: e }) => ({
    "& input": { color: "#FAFAFA" },
    "& .MuiInputBase-input": { color: "#CCCCCC" },
    "& .MuiInput-underline:before": { borderBottomColor: "#FAFAFA" },
    "& .MuiInput-underline:hover:before": { borderBottomColor: "#FAFAFA" },
    "& .MuiInputLabel-root": { color: "#CCCCCC" },
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "#CCCCCC" },
      "&:hover fieldset": { borderColor: "#20bee9" },
      "&.Mui-focused fieldset": { borderColor: "#20bee9" },
      "& .MuiInputBase-input": { color: "#CCCCCC" },
    },
    "& .MuiInputLabel-root.Mui-focused": { color: "#20bee9" },
  })),
  KL = () => {
    const [e, t] = C.useState([0]),
      [n, r] = C.useState(""),
      [i, o] = C.useState(""),
      [s, a] = C.useState([
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
      ]),
      l = {
        labels: s,
        datasets: [
          {
            label: "Luz",
            data: e,
            borderColor: "rgba(53, 162, 235, 1)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
            color: "white",
          },
        ],
      },
      c = () => {
        console.log("Fecha de inicio:", n),
          console.log("Fecha de fin:", i),
          t([0, 10, 5, 2, 20, 30, 45]),
          a(["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"]);
      };
    return P.jsxs(zr, {
      sx: { width: "100%", color: "#FAFAFA" },
      children: [
        P.jsx(Ln, {
          variant: "h4",
          sx: { mb: 2, fontSize: { xs: "1.5rem", sm: "2rem" } },
          children: "Grafica de luz",
        }),
        P.jsxs(sn, {
          container: !0,
          spacing: 2,
          sx: { width: "100%", mt: 2, justifyContent: "center" },
          children: [
            P.jsx(sn, {
              xs: 12,
              sm: 6,
              children: P.jsx(Ey, {
                label: "Fecha de inicio",
                type: "date",
                value: n,
                onChange: (u) => r(u.target.value),
                fullWidth: !0,
                InputLabelProps: { shrink: !0 },
              }),
            }),
            P.jsx(sn, {
              xs: 12,
              sm: 6,
              children: P.jsx(Ey, {
                label: "Fecha de fin",
                type: "date",
                value: i,
                onChange: (u) => o(u.target.value),
                fullWidth: !0,
                InputLabelProps: { shrink: !0 },
              }),
            }),
          ],
        }),
        P.jsx(GL, {
          variant: "contained",
          onClick: c,
          sx: { mt: 2 },
          children: "Obtener data",
        }),
        P.jsx(zr, {
          sx: { width: "100%", mt: 2 },
          children: P.jsx(Eu, { options: VL, data: l }),
        }),
      ],
    });
  };
ki.register(So, Co, ui, Sr, ku, _u, wu);
const YL = {
    responsive: !0,
    plugins: {
      legend: { position: "top" },
      title: {
        display: !0,
        text: "Grafica historica de CO2",
        color: "#CCCCCC",
      },
    },
    scales: {
      x: { ticks: { color: "#CCCCCC" } },
      y: { ticks: { color: "#CCCCCC" } },
    },
  },
  XL = j(Yn)(({ theme: e }) => ({
    color: "#FAFAFA",
    width: "48%",
    margin: " 0 auto",
    textTransform: "capitalize",
    fontFamily: "monospace",
    fontSize: "1rem",
    backgroundColor: "hsl(221, 55%, 42%)",
    "&:hover": { backgroundColor: "hsl(221, 55%, 45%)" },
  })),
  My = j(Wu)(({ theme: e }) => ({
    "& input": { color: "#FAFAFA" },
    "& .MuiInputBase-input": { color: "#CCCCCC" },
    "& .MuiInput-underline:before": { borderBottomColor: "#FAFAFA" },
    "& .MuiInputLabel-root": { color: "#CCCCCC" },
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "#CCCCCC" },
      "&:hover fieldset": { borderColor: "#20bee9" },
      "&.Mui-focused fieldset": { borderColor: "#20bee9" },
      "& .MuiInputBase-input": { color: "#CCCCCC" },
    },
    "& .MuiInputLabel-root.Mui-focused": { color: "#20bee9" },
  })),
  QL = () => {
    const [e, t] = C.useState([0]),
      [n, r] = C.useState([
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
      ]),
      [i, o] = C.useState(""),
      [s, a] = C.useState(""),
      l = {
        labels: n,
        datasets: [
          {
            label: "CO2",
            data: e,
            borderColor: "rgba(53, 162, 235, 1)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
            color: "white",
          },
        ],
      },
      c = () => {
        console.log("Fecha de inicio:", i),
          console.log("Fecha de fin:", s),
          r(["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"]),
          t([5, 15, 10, 20, 30, 40, 50]);
      };
    return P.jsxs(zr, {
      sx: { width: "100%", color: "#FAFAFA" },
      children: [
        P.jsx(Ln, {
          variant: "h4",
          sx: { mb: 2, fontSize: { xs: "1.5rem", sm: "2rem" } },
          children: "Grafica CO2",
        }),
        P.jsxs(sn, {
          container: !0,
          spacing: 2,
          sx: { width: "100%", mt: 2, justifyContent: "center" },
          children: [
            P.jsx(sn, {
              xs: 12,
              sm: 6,
              children: P.jsx(My, {
                label: "Fecha de inicio",
                type: "date",
                value: i,
                onChange: (u) => o(u.target.value),
                fullWidth: !0,
                InputLabelProps: { shrink: !0 },
              }),
            }),
            P.jsx(sn, {
              xs: 12,
              sm: 6,
              children: P.jsx(My, {
                label: "Fecha de fin",
                type: "date",
                value: s,
                onChange: (u) => a(u.target.value),
                fullWidth: !0,
                InputLabelProps: { shrink: !0 },
              }),
            }),
          ],
        }),
        P.jsx(XL, {
          variant: "contained",
          onClick: c,
          sx: { mt: 2 },
          children: "Obtener data",
        }),
        P.jsx(zr, {
          sx: { width: "100%", mt: 2 },
          children: P.jsx(Eu, { options: YL, data: l }),
        }),
      ],
    });
  };
ki.register(So, Co, ui, Sr, ku, _u, wu);
const qL = {
    responsive: !0,
    plugins: {
      legend: { position: "top" },
      title: {
        display: !0,
        text: "Grafica historica de proximidad",
        color: "#CCCCCC",
      },
    },
    scales: {
      x: { ticks: { color: "#CCCCCC" } },
      y: { ticks: { color: "#CCCCCC" } },
    },
  },
  JL = j(Yn)(({ theme: e }) => ({
    color: "#FAFAFA",
    width: "48%",
    margin: " 0 auto",
    textTransform: "capitalize",
    fontFamily: "monospace",
    fontSize: "1rem",
    backgroundColor: "hsl(221, 55%, 42%)",
    "&:hover": { backgroundColor: "hsl(221, 55%, 45%)" },
  })),
  Ty = j(Wu)(({ theme: e }) => ({
    "& input": { color: "#FAFAFA" },
    "& .MuiInputBase-input": { color: "#CCCCCC" },
    "& .MuiInput-underline:before": { borderBottomColor: "#FAFAFA" },
    "& .MuiInput-underline:hover:before": { borderBottomColor: "#FAFAFA" },
    "& .MuiInputLabel-root": { color: "#CCCCCC" },
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "#CCCCCC" },
      "&:hover fieldset": { borderColor: "#20bee9" },
      "&.Mui-focused fieldset": { borderColor: "#20bee9" },
      "& .MuiInputBase-input": { color: "#CCCCCC" },
    },
    "& .MuiInputLabel-root.Mui-focused": { color: "#20bee9" },
  })),
  ZL = () => {
    const [e, t] = C.useState([0]),
      [n, r] = C.useState(""),
      [i, o] = C.useState(""),
      [s, a] = C.useState([
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
      ]),
      l = {
        labels: s,
        datasets: [
          {
            label: "Proximidad",
            data: e,
            borderColor: "rgba(53, 162, 235, 1)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
            color: "white",
          },
        ],
      },
      c = () => {
        console.log("Fecha de inicio:", n),
          console.log("Fecha de fin:", i),
          t([0, 10, 5, 2, 20, 30, 45]),
          a(["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"]);
      };
    return P.jsxs(zr, {
      sx: { width: "100%", color: "#FAFAFA" },
      children: [
        P.jsx(Ln, {
          variant: "h4",
          sx: { mb: 2, fontSize: { xs: "1.5rem", sm: "2rem" } },
          children: "Grafica proximidad",
        }),
        P.jsxs(sn, {
          container: !0,
          spacing: 2,
          sx: { width: "100%", mt: 2, justifyContent: "center" },
          children: [
            P.jsx(sn, {
              xs: 12,
              sm: 6,
              children: P.jsx(Ty, {
                label: "Fecha de inicio",
                type: "date",
                value: n,
                onChange: (u) => r(u.target.value),
                fullWidth: !0,
                InputLabelProps: { shrink: !0 },
              }),
            }),
            P.jsx(sn, {
              xs: 12,
              sm: 6,
              children: P.jsx(Ty, {
                label: "Fecha de fin",
                type: "date",
                value: i,
                onChange: (u) => o(u.target.value),
                fullWidth: !0,
                InputLabelProps: { shrink: !0 },
              }),
            }),
          ],
        }),
        P.jsx(JL, {
          variant: "contained",
          onClick: c,
          sx: { mt: 2 },
          children: "Obtener data",
        }),
        P.jsx(zr, {
          sx: { width: "100%", mt: 2 },
          children: P.jsx(Eu, { options: qL, data: l }),
        }),
      ],
    });
  };
function e$() {
  return P.jsx(kk, {
    children: P.jsxs("main", {
      children: [
        P.jsx(ab, {}),
        P.jsxs(yk, {
          children: [
            P.jsx(Qr, { path: "/", Component: Mk }),
            P.jsx(Qr, { path: "/temperatura", Component: UL }),
            P.jsx(Qr, { path: "/luz", Component: KL }),
            P.jsx(Qr, { path: "/co2", Component: QL }),
            P.jsx(Qr, { path: "/proximidad", Component: ZL }),
            P.jsx(Qr, { path: "*", Component: LE }),
          ],
        }),
      ],
    }),
  });
}
Wx(document.getElementById("root")).render(
  P.jsx(C.StrictMode, { children: P.jsx(e$, {}) })
);
