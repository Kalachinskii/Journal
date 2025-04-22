(function () {
    const N = document.createElement("link").relList;
    if (N && N.supports && N.supports("modulepreload")) return;
    for (const T of document.querySelectorAll('link[rel="modulepreload"]'))
        $(T);
    new MutationObserver((T) => {
        for (const k of T)
            if (k.type === "childList")
                for (const M of k.addedNodes)
                    M.tagName === "LINK" && M.rel === "modulepreload" && $(M);
    }).observe(document, { childList: !0, subtree: !0 });
    function m(T) {
        const k = {};
        return (
            T.integrity && (k.integrity = T.integrity),
            T.referrerPolicy && (k.referrerPolicy = T.referrerPolicy),
            T.crossOrigin === "use-credentials"
                ? (k.credentials = "include")
                : T.crossOrigin === "anonymous"
                ? (k.credentials = "omit")
                : (k.credentials = "same-origin"),
            k
        );
    }
    function $(T) {
        if (T.ep) return;
        T.ep = !0;
        const k = m(T);
        fetch(T.href, k);
    }
})();
function Vc(g) {
    return g &&
        g.__esModule &&
        Object.prototype.hasOwnProperty.call(g, "default")
        ? g.default
        : g;
}
var Ci = { exports: {} },
    wr = {},
    Ni = { exports: {} },
    V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ra;
function Bc() {
    if (Ra) return V;
    Ra = 1;
    var g = Symbol.for("react.element"),
        N = Symbol.for("react.portal"),
        m = Symbol.for("react.fragment"),
        $ = Symbol.for("react.strict_mode"),
        T = Symbol.for("react.profiler"),
        k = Symbol.for("react.provider"),
        M = Symbol.for("react.context"),
        F = Symbol.for("react.forward_ref"),
        Y = Symbol.for("react.suspense"),
        ve = Symbol.for("react.memo"),
        de = Symbol.for("react.lazy"),
        X = Symbol.iterator;
    function Z(f) {
        return f === null || typeof f != "object"
            ? null
            : ((f = (X && f[X]) || f["@@iterator"]),
              typeof f == "function" ? f : null);
    }
    var Re = {
            isMounted: function () {
                return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
        },
        Se = Object.assign,
        q = {};
    function U(f, v, A) {
        (this.props = f),
            (this.context = v),
            (this.refs = q),
            (this.updater = A || Re);
    }
    (U.prototype.isReactComponent = {}),
        (U.prototype.setState = function (f, v) {
            if (typeof f != "object" && typeof f != "function" && f != null)
                throw Error(
                    "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
                );
            this.updater.enqueueSetState(this, f, v, "setState");
        }),
        (U.prototype.forceUpdate = function (f) {
            this.updater.enqueueForceUpdate(this, f, "forceUpdate");
        });
    function yt() {}
    yt.prototype = U.prototype;
    function at(f, v, A) {
        (this.props = f),
            (this.context = v),
            (this.refs = q),
            (this.updater = A || Re);
    }
    var be = (at.prototype = new yt());
    (be.constructor = at), Se(be, U.prototype), (be.isPureReactComponent = !0);
    var xe = Array.isArray,
        et = Object.prototype.hasOwnProperty,
        ze = { current: null },
        je = { key: !0, ref: !0, __self: !0, __source: !0 };
    function Ke(f, v, A) {
        var B,
            W = {},
            Q = null,
            b = null;
        if (v != null)
            for (B in (v.ref !== void 0 && (b = v.ref),
            v.key !== void 0 && (Q = "" + v.key),
            v))
                et.call(v, B) && !je.hasOwnProperty(B) && (W[B] = v[B]);
        var G = arguments.length - 2;
        if (G === 1) W.children = A;
        else if (1 < G) {
            for (var re = Array(G), Be = 0; Be < G; Be++)
                re[Be] = arguments[Be + 2];
            W.children = re;
        }
        if (f && f.defaultProps)
            for (B in ((G = f.defaultProps), G))
                W[B] === void 0 && (W[B] = G[B]);
        return {
            $$typeof: g,
            type: f,
            key: Q,
            ref: b,
            props: W,
            _owner: ze.current,
        };
    }
    function zt(f, v) {
        return {
            $$typeof: g,
            type: f.type,
            key: v,
            ref: f.ref,
            props: f.props,
            _owner: f._owner,
        };
    }
    function gt(f) {
        return typeof f == "object" && f !== null && f.$$typeof === g;
    }
    function Xt(f) {
        var v = { "=": "=0", ":": "=2" };
        return (
            "$" +
            f.replace(/[=:]/g, function (A) {
                return v[A];
            })
        );
    }
    var ft = /\/+/g;
    function Ve(f, v) {
        return typeof f == "object" && f !== null && f.key != null
            ? Xt("" + f.key)
            : v.toString(36);
    }
    function tt(f, v, A, B, W) {
        var Q = typeof f;
        (Q === "undefined" || Q === "boolean") && (f = null);
        var b = !1;
        if (f === null) b = !0;
        else
            switch (Q) {
                case "string":
                case "number":
                    b = !0;
                    break;
                case "object":
                    switch (f.$$typeof) {
                        case g:
                        case N:
                            b = !0;
                    }
            }
        if (b)
            return (
                (b = f),
                (W = W(b)),
                (f = B === "" ? "." + Ve(b, 0) : B),
                xe(W)
                    ? ((A = ""),
                      f != null && (A = f.replace(ft, "$&/") + "/"),
                      tt(W, v, A, "", function (Be) {
                          return Be;
                      }))
                    : W != null &&
                      (gt(W) &&
                          (W = zt(
                              W,
                              A +
                                  (!W.key || (b && b.key === W.key)
                                      ? ""
                                      : ("" + W.key).replace(ft, "$&/") + "/") +
                                  f
                          )),
                      v.push(W)),
                1
            );
        if (((b = 0), (B = B === "" ? "." : B + ":"), xe(f)))
            for (var G = 0; G < f.length; G++) {
                Q = f[G];
                var re = B + Ve(Q, G);
                b += tt(Q, v, A, re, W);
            }
        else if (((re = Z(f)), typeof re == "function"))
            for (f = re.call(f), G = 0; !(Q = f.next()).done; )
                (Q = Q.value), (re = B + Ve(Q, G++)), (b += tt(Q, v, A, re, W));
        else if (Q === "object")
            throw (
                ((v = String(f)),
                Error(
                    "Objects are not valid as a React child (found: " +
                        (v === "[object Object]"
                            ? "object with keys {" +
                              Object.keys(f).join(", ") +
                              "}"
                            : v) +
                        "). If you meant to render a collection of children, use an array instead."
                ))
            );
        return b;
    }
    function ct(f, v, A) {
        if (f == null) return f;
        var B = [],
            W = 0;
        return (
            tt(f, B, "", "", function (Q) {
                return v.call(A, Q, W++);
            }),
            B
        );
    }
    function Ie(f) {
        if (f._status === -1) {
            var v = f._result;
            (v = v()),
                v.then(
                    function (A) {
                        (f._status === 0 || f._status === -1) &&
                            ((f._status = 1), (f._result = A));
                    },
                    function (A) {
                        (f._status === 0 || f._status === -1) &&
                            ((f._status = 2), (f._result = A));
                    }
                ),
                f._status === -1 && ((f._status = 0), (f._result = v));
        }
        if (f._status === 1) return f._result.default;
        throw f._result;
    }
    var oe = { current: null },
        E = { transition: null },
        O = {
            ReactCurrentDispatcher: oe,
            ReactCurrentBatchConfig: E,
            ReactCurrentOwner: ze,
        };
    function C() {
        throw Error("act(...) is not supported in production builds of React.");
    }
    return (
        (V.Children = {
            map: ct,
            forEach: function (f, v, A) {
                ct(
                    f,
                    function () {
                        v.apply(this, arguments);
                    },
                    A
                );
            },
            count: function (f) {
                var v = 0;
                return (
                    ct(f, function () {
                        v++;
                    }),
                    v
                );
            },
            toArray: function (f) {
                return (
                    ct(f, function (v) {
                        return v;
                    }) || []
                );
            },
            only: function (f) {
                if (!gt(f))
                    throw Error(
                        "React.Children.only expected to receive a single React element child."
                    );
                return f;
            },
        }),
        (V.Component = U),
        (V.Fragment = m),
        (V.Profiler = T),
        (V.PureComponent = at),
        (V.StrictMode = $),
        (V.Suspense = Y),
        (V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O),
        (V.act = C),
        (V.cloneElement = function (f, v, A) {
            if (f == null)
                throw Error(
                    "React.cloneElement(...): The argument must be a React element, but you passed " +
                        f +
                        "."
                );
            var B = Se({}, f.props),
                W = f.key,
                Q = f.ref,
                b = f._owner;
            if (v != null) {
                if (
                    (v.ref !== void 0 && ((Q = v.ref), (b = ze.current)),
                    v.key !== void 0 && (W = "" + v.key),
                    f.type && f.type.defaultProps)
                )
                    var G = f.type.defaultProps;
                for (re in v)
                    et.call(v, re) &&
                        !je.hasOwnProperty(re) &&
                        (B[re] =
                            v[re] === void 0 && G !== void 0 ? G[re] : v[re]);
            }
            var re = arguments.length - 2;
            if (re === 1) B.children = A;
            else if (1 < re) {
                G = Array(re);
                for (var Be = 0; Be < re; Be++) G[Be] = arguments[Be + 2];
                B.children = G;
            }
            return {
                $$typeof: g,
                type: f.type,
                key: W,
                ref: Q,
                props: B,
                _owner: b,
            };
        }),
        (V.createContext = function (f) {
            return (
                (f = {
                    $$typeof: M,
                    _currentValue: f,
                    _currentValue2: f,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null,
                }),
                (f.Provider = { $$typeof: k, _context: f }),
                (f.Consumer = f)
            );
        }),
        (V.createElement = Ke),
        (V.createFactory = function (f) {
            var v = Ke.bind(null, f);
            return (v.type = f), v;
        }),
        (V.createRef = function () {
            return { current: null };
        }),
        (V.forwardRef = function (f) {
            return { $$typeof: F, render: f };
        }),
        (V.isValidElement = gt),
        (V.lazy = function (f) {
            return {
                $$typeof: de,
                _payload: { _status: -1, _result: f },
                _init: Ie,
            };
        }),
        (V.memo = function (f, v) {
            return { $$typeof: ve, type: f, compare: v === void 0 ? null : v };
        }),
        (V.startTransition = function (f) {
            var v = E.transition;
            E.transition = {};
            try {
                f();
            } finally {
                E.transition = v;
            }
        }),
        (V.unstable_act = C),
        (V.useCallback = function (f, v) {
            return oe.current.useCallback(f, v);
        }),
        (V.useContext = function (f) {
            return oe.current.useContext(f);
        }),
        (V.useDebugValue = function () {}),
        (V.useDeferredValue = function (f) {
            return oe.current.useDeferredValue(f);
        }),
        (V.useEffect = function (f, v) {
            return oe.current.useEffect(f, v);
        }),
        (V.useId = function () {
            return oe.current.useId();
        }),
        (V.useImperativeHandle = function (f, v, A) {
            return oe.current.useImperativeHandle(f, v, A);
        }),
        (V.useInsertionEffect = function (f, v) {
            return oe.current.useInsertionEffect(f, v);
        }),
        (V.useLayoutEffect = function (f, v) {
            return oe.current.useLayoutEffect(f, v);
        }),
        (V.useMemo = function (f, v) {
            return oe.current.useMemo(f, v);
        }),
        (V.useReducer = function (f, v, A) {
            return oe.current.useReducer(f, v, A);
        }),
        (V.useRef = function (f) {
            return oe.current.useRef(f);
        }),
        (V.useState = function (f) {
            return oe.current.useState(f);
        }),
        (V.useSyncExternalStore = function (f, v, A) {
            return oe.current.useSyncExternalStore(f, v, A);
        }),
        (V.useTransition = function () {
            return oe.current.useTransition();
        }),
        (V.version = "18.3.1"),
        V
    );
}
var ja;
function Di() {
    return ja || ((ja = 1), (Ni.exports = Bc())), Ni.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ia;
function $c() {
    if (Ia) return wr;
    Ia = 1;
    var g = Di(),
        N = Symbol.for("react.element"),
        m = Symbol.for("react.fragment"),
        $ = Object.prototype.hasOwnProperty,
        T =
            g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                .ReactCurrentOwner,
        k = { key: !0, ref: !0, __self: !0, __source: !0 };
    function M(F, Y, ve) {
        var de,
            X = {},
            Z = null,
            Re = null;
        ve !== void 0 && (Z = "" + ve),
            Y.key !== void 0 && (Z = "" + Y.key),
            Y.ref !== void 0 && (Re = Y.ref);
        for (de in Y) $.call(Y, de) && !k.hasOwnProperty(de) && (X[de] = Y[de]);
        if (F && F.defaultProps)
            for (de in ((Y = F.defaultProps), Y))
                X[de] === void 0 && (X[de] = Y[de]);
        return {
            $$typeof: N,
            type: F,
            key: Z,
            ref: Re,
            props: X,
            _owner: T.current,
        };
    }
    return (wr.Fragment = m), (wr.jsx = M), (wr.jsxs = M), wr;
}
var Oa;
function Hc() {
    return Oa || ((Oa = 1), (Ci.exports = $c())), Ci.exports;
}
var R = Hc(),
    he = Di(),
    Ll = {},
    Pi = { exports: {} },
    Ae = {},
    zi = { exports: {} },
    Ti = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Da;
function Wc() {
    return (
        Da ||
            ((Da = 1),
            (function (g) {
                function N(E, O) {
                    var C = E.length;
                    E.push(O);
                    e: for (; 0 < C; ) {
                        var f = (C - 1) >>> 1,
                            v = E[f];
                        if (0 < T(v, O)) (E[f] = O), (E[C] = v), (C = f);
                        else break e;
                    }
                }
                function m(E) {
                    return E.length === 0 ? null : E[0];
                }
                function $(E) {
                    if (E.length === 0) return null;
                    var O = E[0],
                        C = E.pop();
                    if (C !== O) {
                        E[0] = C;
                        e: for (var f = 0, v = E.length, A = v >>> 1; f < A; ) {
                            var B = 2 * (f + 1) - 1,
                                W = E[B],
                                Q = B + 1,
                                b = E[Q];
                            if (0 > T(W, C))
                                Q < v && 0 > T(b, W)
                                    ? ((E[f] = b), (E[Q] = C), (f = Q))
                                    : ((E[f] = W), (E[B] = C), (f = B));
                            else if (Q < v && 0 > T(b, C))
                                (E[f] = b), (E[Q] = C), (f = Q);
                            else break e;
                        }
                    }
                    return O;
                }
                function T(E, O) {
                    var C = E.sortIndex - O.sortIndex;
                    return C !== 0 ? C : E.id - O.id;
                }
                if (
                    typeof performance == "object" &&
                    typeof performance.now == "function"
                ) {
                    var k = performance;
                    g.unstable_now = function () {
                        return k.now();
                    };
                } else {
                    var M = Date,
                        F = M.now();
                    g.unstable_now = function () {
                        return M.now() - F;
                    };
                }
                var Y = [],
                    ve = [],
                    de = 1,
                    X = null,
                    Z = 3,
                    Re = !1,
                    Se = !1,
                    q = !1,
                    U = typeof setTimeout == "function" ? setTimeout : null,
                    yt =
                        typeof clearTimeout == "function" ? clearTimeout : null,
                    at = typeof setImmediate < "u" ? setImmediate : null;
                typeof navigator < "u" &&
                    navigator.scheduling !== void 0 &&
                    navigator.scheduling.isInputPending !== void 0 &&
                    navigator.scheduling.isInputPending.bind(
                        navigator.scheduling
                    );
                function be(E) {
                    for (var O = m(ve); O !== null; ) {
                        if (O.callback === null) $(ve);
                        else if (O.startTime <= E)
                            $(ve), (O.sortIndex = O.expirationTime), N(Y, O);
                        else break;
                        O = m(ve);
                    }
                }
                function xe(E) {
                    if (((q = !1), be(E), !Se))
                        if (m(Y) !== null) (Se = !0), Ie(et);
                        else {
                            var O = m(ve);
                            O !== null && oe(xe, O.startTime - E);
                        }
                }
                function et(E, O) {
                    (Se = !1), q && ((q = !1), yt(Ke), (Ke = -1)), (Re = !0);
                    var C = Z;
                    try {
                        for (
                            be(O), X = m(Y);
                            X !== null &&
                            (!(X.expirationTime > O) || (E && !Xt()));

                        ) {
                            var f = X.callback;
                            if (typeof f == "function") {
                                (X.callback = null), (Z = X.priorityLevel);
                                var v = f(X.expirationTime <= O);
                                (O = g.unstable_now()),
                                    typeof v == "function"
                                        ? (X.callback = v)
                                        : X === m(Y) && $(Y),
                                    be(O);
                            } else $(Y);
                            X = m(Y);
                        }
                        if (X !== null) var A = !0;
                        else {
                            var B = m(ve);
                            B !== null && oe(xe, B.startTime - O), (A = !1);
                        }
                        return A;
                    } finally {
                        (X = null), (Z = C), (Re = !1);
                    }
                }
                var ze = !1,
                    je = null,
                    Ke = -1,
                    zt = 5,
                    gt = -1;
                function Xt() {
                    return !(g.unstable_now() - gt < zt);
                }
                function ft() {
                    if (je !== null) {
                        var E = g.unstable_now();
                        gt = E;
                        var O = !0;
                        try {
                            O = je(!0, E);
                        } finally {
                            O ? Ve() : ((ze = !1), (je = null));
                        }
                    } else ze = !1;
                }
                var Ve;
                if (typeof at == "function")
                    Ve = function () {
                        at(ft);
                    };
                else if (typeof MessageChannel < "u") {
                    var tt = new MessageChannel(),
                        ct = tt.port2;
                    (tt.port1.onmessage = ft),
                        (Ve = function () {
                            ct.postMessage(null);
                        });
                } else
                    Ve = function () {
                        U(ft, 0);
                    };
                function Ie(E) {
                    (je = E), ze || ((ze = !0), Ve());
                }
                function oe(E, O) {
                    Ke = U(function () {
                        E(g.unstable_now());
                    }, O);
                }
                (g.unstable_IdlePriority = 5),
                    (g.unstable_ImmediatePriority = 1),
                    (g.unstable_LowPriority = 4),
                    (g.unstable_NormalPriority = 3),
                    (g.unstable_Profiling = null),
                    (g.unstable_UserBlockingPriority = 2),
                    (g.unstable_cancelCallback = function (E) {
                        E.callback = null;
                    }),
                    (g.unstable_continueExecution = function () {
                        Se || Re || ((Se = !0), Ie(et));
                    }),
                    (g.unstable_forceFrameRate = function (E) {
                        0 > E || 125 < E
                            ? console.error(
                                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                              )
                            : (zt = 0 < E ? Math.floor(1e3 / E) : 5);
                    }),
                    (g.unstable_getCurrentPriorityLevel = function () {
                        return Z;
                    }),
                    (g.unstable_getFirstCallbackNode = function () {
                        return m(Y);
                    }),
                    (g.unstable_next = function (E) {
                        switch (Z) {
                            case 1:
                            case 2:
                            case 3:
                                var O = 3;
                                break;
                            default:
                                O = Z;
                        }
                        var C = Z;
                        Z = O;
                        try {
                            return E();
                        } finally {
                            Z = C;
                        }
                    }),
                    (g.unstable_pauseExecution = function () {}),
                    (g.unstable_requestPaint = function () {}),
                    (g.unstable_runWithPriority = function (E, O) {
                        switch (E) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break;
                            default:
                                E = 3;
                        }
                        var C = Z;
                        Z = E;
                        try {
                            return O();
                        } finally {
                            Z = C;
                        }
                    }),
                    (g.unstable_scheduleCallback = function (E, O, C) {
                        var f = g.unstable_now();
                        switch (
                            (typeof C == "object" && C !== null
                                ? ((C = C.delay),
                                  (C =
                                      typeof C == "number" && 0 < C
                                          ? f + C
                                          : f))
                                : (C = f),
                            E)
                        ) {
                            case 1:
                                var v = -1;
                                break;
                            case 2:
                                v = 250;
                                break;
                            case 5:
                                v = 1073741823;
                                break;
                            case 4:
                                v = 1e4;
                                break;
                            default:
                                v = 5e3;
                        }
                        return (
                            (v = C + v),
                            (E = {
                                id: de++,
                                callback: O,
                                priorityLevel: E,
                                startTime: C,
                                expirationTime: v,
                                sortIndex: -1,
                            }),
                            C > f
                                ? ((E.sortIndex = C),
                                  N(ve, E),
                                  m(Y) === null &&
                                      E === m(ve) &&
                                      (q ? (yt(Ke), (Ke = -1)) : (q = !0),
                                      oe(xe, C - f)))
                                : ((E.sortIndex = v),
                                  N(Y, E),
                                  Se || Re || ((Se = !0), Ie(et))),
                            E
                        );
                    }),
                    (g.unstable_shouldYield = Xt),
                    (g.unstable_wrapCallback = function (E) {
                        var O = Z;
                        return function () {
                            var C = Z;
                            Z = O;
                            try {
                                return E.apply(this, arguments);
                            } finally {
                                Z = C;
                            }
                        };
                    });
            })(Ti)),
        Ti
    );
}
var Ma;
function Qc() {
    return Ma || ((Ma = 1), (zi.exports = Wc())), zi.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fa;
function Kc() {
    if (Fa) return Ae;
    Fa = 1;
    var g = Di(),
        N = Qc();
    function m(e) {
        for (
            var t =
                    "https://reactjs.org/docs/error-decoder.html?invariant=" +
                    e,
                n = 1;
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
    var $ = new Set(),
        T = {};
    function k(e, t) {
        M(e, t), M(e + "Capture", t);
    }
    function M(e, t) {
        for (T[e] = t, e = 0; e < t.length; e++) $.add(t[e]);
    }
    var F = !(
            typeof window > "u" ||
            typeof window.document > "u" ||
            typeof window.document.createElement > "u"
        ),
        Y = Object.prototype.hasOwnProperty,
        ve =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        de = {},
        X = {};
    function Z(e) {
        return Y.call(X, e)
            ? !0
            : Y.call(de, e)
            ? !1
            : ve.test(e)
            ? (X[e] = !0)
            : ((de[e] = !0), !1);
    }
    function Re(e, t, n, r) {
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
                    : ((e = e.toLowerCase().slice(0, 5)),
                      e !== "data-" && e !== "aria-");
            default:
                return !1;
        }
    }
    function Se(e, t, n, r) {
        if (t === null || typeof t > "u" || Re(e, t, n, r)) return !0;
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
    function q(e, t, n, r, l, u, i) {
        (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
            (this.attributeName = r),
            (this.attributeNamespace = l),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = u),
            (this.removeEmptyString = i);
    }
    var U = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
        .split(" ")
        .forEach(function (e) {
            U[e] = new q(e, 0, !1, e, null, !1, !1);
        }),
        [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
        ].forEach(function (e) {
            var t = e[0];
            U[t] = new q(t, 1, !1, e[1], null, !1, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
                U[e] = new q(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
        ),
        [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
        ].forEach(function (e) {
            U[e] = new q(e, 2, !1, e, null, !1, !1);
        }),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
                U[e] = new q(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            U[e] = new q(e, 3, !0, e, null, !1, !1);
        }),
        ["capture", "download"].forEach(function (e) {
            U[e] = new q(e, 4, !1, e, null, !1, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (e) {
            U[e] = new q(e, 6, !1, e, null, !1, !1);
        }),
        ["rowSpan", "start"].forEach(function (e) {
            U[e] = new q(e, 5, !1, e.toLowerCase(), null, !1, !1);
        });
    var yt = /[\-:]([a-z])/g;
    function at(e) {
        return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
        .split(" ")
        .forEach(function (e) {
            var t = e.replace(yt, at);
            U[t] = new q(t, 1, !1, e, null, !1, !1);
        }),
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
                var t = e.replace(yt, at);
                U[t] = new q(
                    t,
                    1,
                    !1,
                    e,
                    "http://www.w3.org/1999/xlink",
                    !1,
                    !1
                );
            }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(yt, at);
            U[t] = new q(
                t,
                1,
                !1,
                e,
                "http://www.w3.org/XML/1998/namespace",
                !1,
                !1
            );
        }),
        ["tabIndex", "crossOrigin"].forEach(function (e) {
            U[e] = new q(e, 1, !1, e.toLowerCase(), null, !1, !1);
        }),
        (U.xlinkHref = new q(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
        )),
        ["src", "href", "action", "formAction"].forEach(function (e) {
            U[e] = new q(e, 1, !1, e.toLowerCase(), null, !0, !0);
        });
    function be(e, t, n, r) {
        var l = U.hasOwnProperty(t) ? U[t] : null;
        (l !== null
            ? l.type !== 0
            : r ||
              !(2 < t.length) ||
              (t[0] !== "o" && t[0] !== "O") ||
              (t[1] !== "n" && t[1] !== "N")) &&
            (Se(t, n, l, r) && (n = null),
            r || l === null
                ? Z(t) &&
                  (n === null
                      ? e.removeAttribute(t)
                      : e.setAttribute(t, "" + n))
                : l.mustUseProperty
                ? (e[l.propertyName] =
                      n === null ? (l.type === 3 ? !1 : "") : n)
                : ((t = l.attributeName),
                  (r = l.attributeNamespace),
                  n === null
                      ? e.removeAttribute(t)
                      : ((l = l.type),
                        (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                        r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    var xe = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        et = Symbol.for("react.element"),
        ze = Symbol.for("react.portal"),
        je = Symbol.for("react.fragment"),
        Ke = Symbol.for("react.strict_mode"),
        zt = Symbol.for("react.profiler"),
        gt = Symbol.for("react.provider"),
        Xt = Symbol.for("react.context"),
        ft = Symbol.for("react.forward_ref"),
        Ve = Symbol.for("react.suspense"),
        tt = Symbol.for("react.suspense_list"),
        ct = Symbol.for("react.memo"),
        Ie = Symbol.for("react.lazy"),
        oe = Symbol.for("react.offscreen"),
        E = Symbol.iterator;
    function O(e) {
        return e === null || typeof e != "object"
            ? null
            : ((e = (E && e[E]) || e["@@iterator"]),
              typeof e == "function" ? e : null);
    }
    var C = Object.assign,
        f;
    function v(e) {
        if (f === void 0)
            try {
                throw Error();
            } catch (n) {
                var t = n.stack.trim().match(/\n( *(at )?)/);
                f = (t && t[1]) || "";
            }
        return (
            `
` +
            f +
            e
        );
    }
    var A = !1;
    function B(e, t) {
        if (!e || A) return "";
        A = !0;
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
                    } catch (p) {
                        var r = p;
                    }
                    Reflect.construct(e, [], t);
                } else {
                    try {
                        t.call();
                    } catch (p) {
                        r = p;
                    }
                    e.call(t.prototype);
                }
            else {
                try {
                    throw Error();
                } catch (p) {
                    r = p;
                }
                e();
            }
        } catch (p) {
            if (p && r && typeof p.stack == "string") {
                for (
                    var l = p.stack.split(`
`),
                        u = r.stack.split(`
`),
                        i = l.length - 1,
                        o = u.length - 1;
                    1 <= i && 0 <= o && l[i] !== u[o];

                )
                    o--;
                for (; 1 <= i && 0 <= o; i--, o--)
                    if (l[i] !== u[o]) {
                        if (i !== 1 || o !== 1)
                            do
                                if ((i--, o--, 0 > o || l[i] !== u[o])) {
                                    var s =
                                        `
` + l[i].replace(" at new ", " at ");
                                    return (
                                        e.displayName &&
                                            s.includes("<anonymous>") &&
                                            (s = s.replace(
                                                "<anonymous>",
                                                e.displayName
                                            )),
                                        s
                                    );
                                }
                            while (1 <= i && 0 <= o);
                        break;
                    }
            }
        } finally {
            (A = !1), (Error.prepareStackTrace = n);
        }
        return (e = e ? e.displayName || e.name : "") ? v(e) : "";
    }
    function W(e) {
        switch (e.tag) {
            case 5:
                return v(e.type);
            case 16:
                return v("Lazy");
            case 13:
                return v("Suspense");
            case 19:
                return v("SuspenseList");
            case 0:
            case 2:
            case 15:
                return (e = B(e.type, !1)), e;
            case 11:
                return (e = B(e.type.render, !1)), e;
            case 1:
                return (e = B(e.type, !0)), e;
            default:
                return "";
        }
    }
    function Q(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case je:
                return "Fragment";
            case ze:
                return "Portal";
            case zt:
                return "Profiler";
            case Ke:
                return "StrictMode";
            case Ve:
                return "Suspense";
            case tt:
                return "SuspenseList";
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
                case Xt:
                    return (e.displayName || "Context") + ".Consumer";
                case gt:
                    return (e._context.displayName || "Context") + ".Provider";
                case ft:
                    var t = e.render;
                    return (
                        (e = e.displayName),
                        e ||
                            ((e = t.displayName || t.name || ""),
                            (e =
                                e !== ""
                                    ? "ForwardRef(" + e + ")"
                                    : "ForwardRef")),
                        e
                    );
                case ct:
                    return (
                        (t = e.displayName || null),
                        t !== null ? t : Q(e.type) || "Memo"
                    );
                case Ie:
                    (t = e._payload), (e = e._init);
                    try {
                        return Q(e(t));
                    } catch {}
            }
        return null;
    }
    function b(e) {
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
                    t.displayName ||
                        (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
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
                return Q(t);
            case 8:
                return t === Ke ? "StrictMode" : "Mode";
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
                if (typeof t == "function")
                    return t.displayName || t.name || null;
                if (typeof t == "string") return t;
        }
        return null;
    }
    function G(e) {
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
    function re(e) {
        var t = e.type;
        return (
            (e = e.nodeName) &&
            e.toLowerCase() === "input" &&
            (t === "checkbox" || t === "radio")
        );
    }
    function Be(e) {
        var t = re(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[t];
        if (
            !e.hasOwnProperty(t) &&
            typeof n < "u" &&
            typeof n.get == "function" &&
            typeof n.set == "function"
        ) {
            var l = n.get,
                u = n.set;
            return (
                Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                        return l.call(this);
                    },
                    set: function (i) {
                        (r = "" + i), u.call(this, i);
                    },
                }),
                Object.defineProperty(e, t, { enumerable: n.enumerable }),
                {
                    getValue: function () {
                        return r;
                    },
                    setValue: function (i) {
                        r = "" + i;
                    },
                    stopTracking: function () {
                        (e._valueTracker = null), delete e[t];
                    },
                }
            );
        }
    }
    function Sr(e) {
        e._valueTracker || (e._valueTracker = Be(e));
    }
    function Mi(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
            r = "";
        return (
            e && (r = re(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r),
            e !== n ? (t.setValue(e), !0) : !1
        );
    }
    function kr(e) {
        if (
            ((e = e || (typeof document < "u" ? document : void 0)),
            typeof e > "u")
        )
            return null;
        try {
            return e.activeElement || e.body;
        } catch {
            return e.body;
        }
    }
    function jl(e, t) {
        var n = t.checked;
        return C({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked,
        });
    }
    function Fi(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue,
            r = t.checked != null ? t.checked : t.defaultChecked;
        (n = G(t.value != null ? t.value : n)),
            (e._wrapperState = {
                initialChecked: r,
                initialValue: n,
                controlled:
                    t.type === "checkbox" || t.type === "radio"
                        ? t.checked != null
                        : t.value != null,
            });
    }
    function Ui(e, t) {
        (t = t.checked), t != null && be(e, "checked", t, !1);
    }
    function Il(e, t) {
        Ui(e, t);
        var n = G(t.value),
            r = t.type;
        if (n != null)
            r === "number"
                ? ((n === 0 && e.value === "") || e.value != n) &&
                  (e.value = "" + n)
                : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return;
        }
        t.hasOwnProperty("value")
            ? Ol(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              Ol(e, t.type, G(t.defaultValue)),
            t.checked == null &&
                t.defaultChecked != null &&
                (e.defaultChecked = !!t.defaultChecked);
    }
    function Ai(e, t, n) {
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
    function Ol(e, t, n) {
        (t !== "number" || kr(e.ownerDocument) !== e) &&
            (n == null
                ? (e.defaultValue = "" + e._wrapperState.initialValue)
                : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    var On = Array.isArray;
    function an(e, t, n, r) {
        if (((e = e.options), t)) {
            t = {};
            for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
            for (n = 0; n < e.length; n++)
                (l = t.hasOwnProperty("$" + e[n].value)),
                    e[n].selected !== l && (e[n].selected = l),
                    l && r && (e[n].defaultSelected = !0);
        } else {
            for (n = "" + G(n), t = null, l = 0; l < e.length; l++) {
                if (e[l].value === n) {
                    (e[l].selected = !0), r && (e[l].defaultSelected = !0);
                    return;
                }
                t !== null || e[l].disabled || (t = e[l]);
            }
            t !== null && (t.selected = !0);
        }
    }
    function Dl(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(m(91));
        return C({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
        });
    }
    function Vi(e, t) {
        var n = t.value;
        if (n == null) {
            if (((n = t.children), (t = t.defaultValue), n != null)) {
                if (t != null) throw Error(m(92));
                if (On(n)) {
                    if (1 < n.length) throw Error(m(93));
                    n = n[0];
                }
                t = n;
            }
            t == null && (t = ""), (n = t);
        }
        e._wrapperState = { initialValue: G(n) };
    }
    function Bi(e, t) {
        var n = G(t.value),
            r = G(t.defaultValue);
        n != null &&
            ((n = "" + n),
            n !== e.value && (e.value = n),
            t.defaultValue == null &&
                e.defaultValue !== n &&
                (e.defaultValue = n)),
            r != null && (e.defaultValue = "" + r);
    }
    function $i(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue &&
            t !== "" &&
            t !== null &&
            (e.value = t);
    }
    function Hi(e) {
        switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml";
        }
    }
    function Ml(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml"
            ? Hi(t)
            : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
            ? "http://www.w3.org/1999/xhtml"
            : e;
    }
    var Er,
        Wi = (function (e) {
            return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
                ? function (t, n, r, l) {
                      MSApp.execUnsafeLocalFunction(function () {
                          return e(t, n, r, l);
                      });
                  }
                : e;
        })(function (e, t) {
            if (
                e.namespaceURI !== "http://www.w3.org/2000/svg" ||
                "innerHTML" in e
            )
                e.innerHTML = t;
            else {
                for (
                    Er = Er || document.createElement("div"),
                        Er.innerHTML =
                            "<svg>" + t.valueOf().toString() + "</svg>",
                        t = Er.firstChild;
                    e.firstChild;

                )
                    e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
        });
    function Dn(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return;
            }
        }
        e.textContent = t;
    }
    var Mn = {
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
        Ha = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Mn).forEach(function (e) {
        Ha.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
                (Mn[t] = Mn[e]);
        });
    });
    function Qi(e, t, n) {
        return t == null || typeof t == "boolean" || t === ""
            ? ""
            : n ||
              typeof t != "number" ||
              t === 0 ||
              (Mn.hasOwnProperty(e) && Mn[e])
            ? ("" + t).trim()
            : t + "px";
    }
    function Ki(e, t) {
        e = e.style;
        for (var n in t)
            if (t.hasOwnProperty(n)) {
                var r = n.indexOf("--") === 0,
                    l = Qi(n, t[n], r);
                n === "float" && (n = "cssFloat"),
                    r ? e.setProperty(n, l) : (e[n] = l);
            }
    }
    var Wa = C(
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
    function Fl(e, t) {
        if (t) {
            if (
                Wa[e] &&
                (t.children != null || t.dangerouslySetInnerHTML != null)
            )
                throw Error(m(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(m(60));
                if (
                    typeof t.dangerouslySetInnerHTML != "object" ||
                    !("__html" in t.dangerouslySetInnerHTML)
                )
                    throw Error(m(61));
            }
            if (t.style != null && typeof t.style != "object")
                throw Error(m(62));
        }
    }
    function Ul(e, t) {
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
    var Al = null;
    function Vl(e) {
        return (
            (e = e.target || e.srcElement || window),
            e.correspondingUseElement && (e = e.correspondingUseElement),
            e.nodeType === 3 ? e.parentNode : e
        );
    }
    var Bl = null,
        fn = null,
        cn = null;
    function Yi(e) {
        if ((e = lr(e))) {
            if (typeof Bl != "function") throw Error(m(280));
            var t = e.stateNode;
            t && ((t = Qr(t)), Bl(e.stateNode, e.type, t));
        }
    }
    function Xi(e) {
        fn ? (cn ? cn.push(e) : (cn = [e])) : (fn = e);
    }
    function Gi() {
        if (fn) {
            var e = fn,
                t = cn;
            if (((cn = fn = null), Yi(e), t))
                for (e = 0; e < t.length; e++) Yi(t[e]);
        }
    }
    function Ji(e, t) {
        return e(t);
    }
    function Zi() {}
    var $l = !1;
    function qi(e, t, n) {
        if ($l) return e(t, n);
        $l = !0;
        try {
            return Ji(e, t, n);
        } finally {
            ($l = !1), (fn !== null || cn !== null) && (Zi(), Gi());
        }
    }
    function Fn(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = Qr(n);
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
        if (n && typeof n != "function") throw Error(m(231, t, typeof n));
        return n;
    }
    var Hl = !1;
    if (F)
        try {
            var Un = {};
            Object.defineProperty(Un, "passive", {
                get: function () {
                    Hl = !0;
                },
            }),
                window.addEventListener("test", Un, Un),
                window.removeEventListener("test", Un, Un);
        } catch {
            Hl = !1;
        }
    function Qa(e, t, n, r, l, u, i, o, s) {
        var p = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, p);
        } catch (y) {
            this.onError(y);
        }
    }
    var An = !1,
        xr = null,
        _r = !1,
        Wl = null,
        Ka = {
            onError: function (e) {
                (An = !0), (xr = e);
            },
        };
    function Ya(e, t, n, r, l, u, i, o, s) {
        (An = !1), (xr = null), Qa.apply(Ka, arguments);
    }
    function Xa(e, t, n, r, l, u, i, o, s) {
        if ((Ya.apply(this, arguments), An)) {
            if (An) {
                var p = xr;
                (An = !1), (xr = null);
            } else throw Error(m(198));
            _r || ((_r = !0), (Wl = p));
        }
    }
    function Gt(e) {
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
    function bi(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (
                (t === null &&
                    ((e = e.alternate), e !== null && (t = e.memoizedState)),
                t !== null)
            )
                return t.dehydrated;
        }
        return null;
    }
    function eo(e) {
        if (Gt(e) !== e) throw Error(m(188));
    }
    function Ga(e) {
        var t = e.alternate;
        if (!t) {
            if (((t = Gt(e)), t === null)) throw Error(m(188));
            return t !== e ? null : e;
        }
        for (var n = e, r = t; ; ) {
            var l = n.return;
            if (l === null) break;
            var u = l.alternate;
            if (u === null) {
                if (((r = l.return), r !== null)) {
                    n = r;
                    continue;
                }
                break;
            }
            if (l.child === u.child) {
                for (u = l.child; u; ) {
                    if (u === n) return eo(l), e;
                    if (u === r) return eo(l), t;
                    u = u.sibling;
                }
                throw Error(m(188));
            }
            if (n.return !== r.return) (n = l), (r = u);
            else {
                for (var i = !1, o = l.child; o; ) {
                    if (o === n) {
                        (i = !0), (n = l), (r = u);
                        break;
                    }
                    if (o === r) {
                        (i = !0), (r = l), (n = u);
                        break;
                    }
                    o = o.sibling;
                }
                if (!i) {
                    for (o = u.child; o; ) {
                        if (o === n) {
                            (i = !0), (n = u), (r = l);
                            break;
                        }
                        if (o === r) {
                            (i = !0), (r = u), (n = l);
                            break;
                        }
                        o = o.sibling;
                    }
                    if (!i) throw Error(m(189));
                }
            }
            if (n.alternate !== r) throw Error(m(190));
        }
        if (n.tag !== 3) throw Error(m(188));
        return n.stateNode.current === n ? e : t;
    }
    function to(e) {
        return (e = Ga(e)), e !== null ? no(e) : null;
    }
    function no(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for (e = e.child; e !== null; ) {
            var t = no(e);
            if (t !== null) return t;
            e = e.sibling;
        }
        return null;
    }
    var ro = N.unstable_scheduleCallback,
        lo = N.unstable_cancelCallback,
        Ja = N.unstable_shouldYield,
        Za = N.unstable_requestPaint,
        ae = N.unstable_now,
        qa = N.unstable_getCurrentPriorityLevel,
        Ql = N.unstable_ImmediatePriority,
        uo = N.unstable_UserBlockingPriority,
        Cr = N.unstable_NormalPriority,
        ba = N.unstable_LowPriority,
        io = N.unstable_IdlePriority,
        Nr = null,
        dt = null;
    function ef(e) {
        if (dt && typeof dt.onCommitFiberRoot == "function")
            try {
                dt.onCommitFiberRoot(
                    Nr,
                    e,
                    void 0,
                    (e.current.flags & 128) === 128
                );
            } catch {}
    }
    var nt = Math.clz32 ? Math.clz32 : rf,
        tf = Math.log,
        nf = Math.LN2;
    function rf(e) {
        return (e >>>= 0), e === 0 ? 32 : (31 - ((tf(e) / nf) | 0)) | 0;
    }
    var Pr = 64,
        zr = 4194304;
    function Vn(e) {
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
    function Tr(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var r = 0,
            l = e.suspendedLanes,
            u = e.pingedLanes,
            i = n & 268435455;
        if (i !== 0) {
            var o = i & ~l;
            o !== 0 ? (r = Vn(o)) : ((u &= i), u !== 0 && (r = Vn(u)));
        } else (i = n & ~l), i !== 0 ? (r = Vn(i)) : u !== 0 && (r = Vn(u));
        if (r === 0) return 0;
        if (
            t !== 0 &&
            t !== r &&
            !(t & l) &&
            ((l = r & -r),
            (u = t & -t),
            l >= u || (l === 16 && (u & 4194240) !== 0))
        )
            return t;
        if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
            for (e = e.entanglements, t &= r; 0 < t; )
                (n = 31 - nt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
        return r;
    }
    function lf(e, t) {
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
    function uf(e, t) {
        for (
            var n = e.suspendedLanes,
                r = e.pingedLanes,
                l = e.expirationTimes,
                u = e.pendingLanes;
            0 < u;

        ) {
            var i = 31 - nt(u),
                o = 1 << i,
                s = l[i];
            s === -1
                ? (!(o & n) || o & r) && (l[i] = lf(o, t))
                : s <= t && (e.expiredLanes |= o),
                (u &= ~o);
        }
    }
    function Kl(e) {
        return (
            (e = e.pendingLanes & -1073741825),
            e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
        );
    }
    function oo() {
        var e = Pr;
        return (Pr <<= 1), !(Pr & 4194240) && (Pr = 64), e;
    }
    function Yl(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t;
    }
    function Bn(e, t, n) {
        (e.pendingLanes |= t),
            t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            (e = e.eventTimes),
            (t = 31 - nt(t)),
            (e[t] = n);
    }
    function of(e, t) {
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
            var l = 31 - nt(n),
                u = 1 << l;
            (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~u);
        }
    }
    function Xl(e, t) {
        var n = (e.entangledLanes |= t);
        for (e = e.entanglements; n; ) {
            var r = 31 - nt(n),
                l = 1 << r;
            (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
        }
    }
    var J = 0;
    function so(e) {
        return (
            (e &= -e),
            1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
        );
    }
    var ao,
        Gl,
        fo,
        co,
        po,
        Jl = !1,
        Lr = [],
        Tt = null,
        Lt = null,
        Rt = null,
        $n = new Map(),
        Hn = new Map(),
        jt = [],
        sf =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
                " "
            );
    function mo(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                Tt = null;
                break;
            case "dragenter":
            case "dragleave":
                Lt = null;
                break;
            case "mouseover":
            case "mouseout":
                Rt = null;
                break;
            case "pointerover":
            case "pointerout":
                $n.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Hn.delete(t.pointerId);
        }
    }
    function Wn(e, t, n, r, l, u) {
        return e === null || e.nativeEvent !== u
            ? ((e = {
                  blockedOn: t,
                  domEventName: n,
                  eventSystemFlags: r,
                  nativeEvent: u,
                  targetContainers: [l],
              }),
              t !== null && ((t = lr(t)), t !== null && Gl(t)),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              l !== null && t.indexOf(l) === -1 && t.push(l),
              e);
    }
    function af(e, t, n, r, l) {
        switch (t) {
            case "focusin":
                return (Tt = Wn(Tt, e, t, n, r, l)), !0;
            case "dragenter":
                return (Lt = Wn(Lt, e, t, n, r, l)), !0;
            case "mouseover":
                return (Rt = Wn(Rt, e, t, n, r, l)), !0;
            case "pointerover":
                var u = l.pointerId;
                return $n.set(u, Wn($n.get(u) || null, e, t, n, r, l)), !0;
            case "gotpointercapture":
                return (
                    (u = l.pointerId),
                    Hn.set(u, Wn(Hn.get(u) || null, e, t, n, r, l)),
                    !0
                );
        }
        return !1;
    }
    function ho(e) {
        var t = Jt(e.target);
        if (t !== null) {
            var n = Gt(t);
            if (n !== null) {
                if (((t = n.tag), t === 13)) {
                    if (((t = bi(n)), t !== null)) {
                        (e.blockedOn = t),
                            po(e.priority, function () {
                                fo(n);
                            });
                        return;
                    }
                } else if (
                    t === 3 &&
                    n.stateNode.current.memoizedState.isDehydrated
                ) {
                    e.blockedOn =
                        n.tag === 3 ? n.stateNode.containerInfo : null;
                    return;
                }
            }
        }
        e.blockedOn = null;
    }
    function Rr(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var n = ql(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type, n);
                (Al = r), n.target.dispatchEvent(r), (Al = null);
            } else
                return (t = lr(n)), t !== null && Gl(t), (e.blockedOn = n), !1;
            t.shift();
        }
        return !0;
    }
    function vo(e, t, n) {
        Rr(e) && n.delete(t);
    }
    function ff() {
        (Jl = !1),
            Tt !== null && Rr(Tt) && (Tt = null),
            Lt !== null && Rr(Lt) && (Lt = null),
            Rt !== null && Rr(Rt) && (Rt = null),
            $n.forEach(vo),
            Hn.forEach(vo);
    }
    function Qn(e, t) {
        e.blockedOn === t &&
            ((e.blockedOn = null),
            Jl ||
                ((Jl = !0),
                N.unstable_scheduleCallback(N.unstable_NormalPriority, ff)));
    }
    function Kn(e) {
        function t(l) {
            return Qn(l, e);
        }
        if (0 < Lr.length) {
            Qn(Lr[0], e);
            for (var n = 1; n < Lr.length; n++) {
                var r = Lr[n];
                r.blockedOn === e && (r.blockedOn = null);
            }
        }
        for (
            Tt !== null && Qn(Tt, e),
                Lt !== null && Qn(Lt, e),
                Rt !== null && Qn(Rt, e),
                $n.forEach(t),
                Hn.forEach(t),
                n = 0;
            n < jt.length;
            n++
        )
            (r = jt[n]), r.blockedOn === e && (r.blockedOn = null);
        for (; 0 < jt.length && ((n = jt[0]), n.blockedOn === null); )
            ho(n), n.blockedOn === null && jt.shift();
    }
    var dn = xe.ReactCurrentBatchConfig,
        jr = !0;
    function cf(e, t, n, r) {
        var l = J,
            u = dn.transition;
        dn.transition = null;
        try {
            (J = 1), Zl(e, t, n, r);
        } finally {
            (J = l), (dn.transition = u);
        }
    }
    function df(e, t, n, r) {
        var l = J,
            u = dn.transition;
        dn.transition = null;
        try {
            (J = 4), Zl(e, t, n, r);
        } finally {
            (J = l), (dn.transition = u);
        }
    }
    function Zl(e, t, n, r) {
        if (jr) {
            var l = ql(e, t, n, r);
            if (l === null) hu(e, t, r, Ir, n), mo(e, r);
            else if (af(l, e, t, n, r)) r.stopPropagation();
            else if ((mo(e, r), t & 4 && -1 < sf.indexOf(e))) {
                for (; l !== null; ) {
                    var u = lr(l);
                    if (
                        (u !== null && ao(u),
                        (u = ql(e, t, n, r)),
                        u === null && hu(e, t, r, Ir, n),
                        u === l)
                    )
                        break;
                    l = u;
                }
                l !== null && r.stopPropagation();
            } else hu(e, t, r, null, n);
        }
    }
    var Ir = null;
    function ql(e, t, n, r) {
        if (((Ir = null), (e = Vl(r)), (e = Jt(e)), e !== null))
            if (((t = Gt(e)), t === null)) e = null;
            else if (((n = t.tag), n === 13)) {
                if (((e = bi(t)), e !== null)) return e;
                e = null;
            } else if (n === 3) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return t.tag === 3 ? t.stateNode.containerInfo : null;
                e = null;
            } else t !== e && (e = null);
        return (Ir = e), null;
    }
    function yo(e) {
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
                switch (qa()) {
                    case Ql:
                        return 1;
                    case uo:
                        return 4;
                    case Cr:
                    case ba:
                        return 16;
                    case io:
                        return 536870912;
                    default:
                        return 16;
                }
            default:
                return 16;
        }
    }
    var It = null,
        bl = null,
        Or = null;
    function go() {
        if (Or) return Or;
        var e,
            t = bl,
            n = t.length,
            r,
            l = "value" in It ? It.value : It.textContent,
            u = l.length;
        for (e = 0; e < n && t[e] === l[e]; e++);
        var i = n - e;
        for (r = 1; r <= i && t[n - r] === l[u - r]; r++);
        return (Or = l.slice(e, 1 < r ? 1 - r : void 0));
    }
    function Dr(e) {
        var t = e.keyCode;
        return (
            "charCode" in e
                ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
                : (e = t),
            e === 10 && (e = 13),
            32 <= e || e === 13 ? e : 0
        );
    }
    function Mr() {
        return !0;
    }
    function wo() {
        return !1;
    }
    function $e(e) {
        function t(n, r, l, u, i) {
            (this._reactName = n),
                (this._targetInst = l),
                (this.type = r),
                (this.nativeEvent = u),
                (this.target = i),
                (this.currentTarget = null);
            for (var o in e)
                e.hasOwnProperty(o) &&
                    ((n = e[o]), (this[o] = n ? n(u) : u[o]));
            return (
                (this.isDefaultPrevented = (
                    u.defaultPrevented != null
                        ? u.defaultPrevented
                        : u.returnValue === !1
                )
                    ? Mr
                    : wo),
                (this.isPropagationStopped = wo),
                this
            );
        }
        return (
            C(t.prototype, {
                preventDefault: function () {
                    this.defaultPrevented = !0;
                    var n = this.nativeEvent;
                    n &&
                        (n.preventDefault
                            ? n.preventDefault()
                            : typeof n.returnValue != "unknown" &&
                              (n.returnValue = !1),
                        (this.isDefaultPrevented = Mr));
                },
                stopPropagation: function () {
                    var n = this.nativeEvent;
                    n &&
                        (n.stopPropagation
                            ? n.stopPropagation()
                            : typeof n.cancelBubble != "unknown" &&
                              (n.cancelBubble = !0),
                        (this.isPropagationStopped = Mr));
                },
                persist: function () {},
                isPersistent: Mr,
            }),
            t
        );
    }
    var pn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
                return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
        },
        eu = $e(pn),
        Yn = C({}, pn, { view: 0, detail: 0 }),
        pf = $e(Yn),
        tu,
        nu,
        Xn,
        Fr = C({}, Yn, {
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
            getModifierState: lu,
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
                    : (e !== Xn &&
                          (Xn && e.type === "mousemove"
                              ? ((tu = e.screenX - Xn.screenX),
                                (nu = e.screenY - Xn.screenY))
                              : (nu = tu = 0),
                          (Xn = e)),
                      tu);
            },
            movementY: function (e) {
                return "movementY" in e ? e.movementY : nu;
            },
        }),
        So = $e(Fr),
        mf = C({}, Fr, { dataTransfer: 0 }),
        hf = $e(mf),
        vf = C({}, Yn, { relatedTarget: 0 }),
        ru = $e(vf),
        yf = C({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
        gf = $e(yf),
        wf = C({}, pn, {
            clipboardData: function (e) {
                return "clipboardData" in e
                    ? e.clipboardData
                    : window.clipboardData;
            },
        }),
        Sf = $e(wf),
        kf = C({}, pn, { data: 0 }),
        ko = $e(kf),
        Ef = {
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
        xf = {
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
        _f = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
        };
    function Cf(e) {
        var t = this.nativeEvent;
        return t.getModifierState
            ? t.getModifierState(e)
            : (e = _f[e])
            ? !!t[e]
            : !1;
    }
    function lu() {
        return Cf;
    }
    var Nf = C({}, Yn, {
            key: function (e) {
                if (e.key) {
                    var t = Ef[e.key] || e.key;
                    if (t !== "Unidentified") return t;
                }
                return e.type === "keypress"
                    ? ((e = Dr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                    : e.type === "keydown" || e.type === "keyup"
                    ? xf[e.keyCode] || "Unidentified"
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
            getModifierState: lu,
            charCode: function (e) {
                return e.type === "keypress" ? Dr(e) : 0;
            },
            keyCode: function (e) {
                return e.type === "keydown" || e.type === "keyup"
                    ? e.keyCode
                    : 0;
            },
            which: function (e) {
                return e.type === "keypress"
                    ? Dr(e)
                    : e.type === "keydown" || e.type === "keyup"
                    ? e.keyCode
                    : 0;
            },
        }),
        Pf = $e(Nf),
        zf = C({}, Fr, {
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
        Eo = $e(zf),
        Tf = C({}, Yn, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: lu,
        }),
        Lf = $e(Tf),
        Rf = C({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
        jf = $e(Rf),
        If = C({}, Fr, {
            deltaX: function (e) {
                return "deltaX" in e
                    ? e.deltaX
                    : "wheelDeltaX" in e
                    ? -e.wheelDeltaX
                    : 0;
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
        Of = $e(If),
        Df = [9, 13, 27, 32],
        uu = F && "CompositionEvent" in window,
        Gn = null;
    F && "documentMode" in document && (Gn = document.documentMode);
    var Mf = F && "TextEvent" in window && !Gn,
        xo = F && (!uu || (Gn && 8 < Gn && 11 >= Gn)),
        _o = " ",
        Co = !1;
    function No(e, t) {
        switch (e) {
            case "keyup":
                return Df.indexOf(t.keyCode) !== -1;
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
    function Po(e) {
        return (
            (e = e.detail), typeof e == "object" && "data" in e ? e.data : null
        );
    }
    var mn = !1;
    function Ff(e, t) {
        switch (e) {
            case "compositionend":
                return Po(t);
            case "keypress":
                return t.which !== 32 ? null : ((Co = !0), _o);
            case "textInput":
                return (e = t.data), e === _o && Co ? null : e;
            default:
                return null;
        }
    }
    function Uf(e, t) {
        if (mn)
            return e === "compositionend" || (!uu && No(e, t))
                ? ((e = go()), (Or = bl = It = null), (mn = !1), e)
                : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (
                    !(t.ctrlKey || t.altKey || t.metaKey) ||
                    (t.ctrlKey && t.altKey)
                ) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which);
                }
                return null;
            case "compositionend":
                return xo && t.locale !== "ko" ? null : t.data;
            default:
                return null;
        }
    }
    var Af = {
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
    function zo(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Af[e.type] : t === "textarea";
    }
    function To(e, t, n, r) {
        Xi(r),
            (t = $r(t, "onChange")),
            0 < t.length &&
                ((n = new eu("onChange", "change", null, n, r)),
                e.push({ event: n, listeners: t }));
    }
    var Jn = null,
        Zn = null;
    function Vf(e) {
        Yo(e, 0);
    }
    function Ur(e) {
        var t = wn(e);
        if (Mi(t)) return e;
    }
    function Bf(e, t) {
        if (e === "change") return t;
    }
    var Lo = !1;
    if (F) {
        var iu;
        if (F) {
            var ou = "oninput" in document;
            if (!ou) {
                var Ro = document.createElement("div");
                Ro.setAttribute("oninput", "return;"),
                    (ou = typeof Ro.oninput == "function");
            }
            iu = ou;
        } else iu = !1;
        Lo = iu && (!document.documentMode || 9 < document.documentMode);
    }
    function jo() {
        Jn && (Jn.detachEvent("onpropertychange", Io), (Zn = Jn = null));
    }
    function Io(e) {
        if (e.propertyName === "value" && Ur(Zn)) {
            var t = [];
            To(t, Zn, e, Vl(e)), qi(Vf, t);
        }
    }
    function $f(e, t, n) {
        e === "focusin"
            ? (jo(), (Jn = t), (Zn = n), Jn.attachEvent("onpropertychange", Io))
            : e === "focusout" && jo();
    }
    function Hf(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return Ur(Zn);
    }
    function Wf(e, t) {
        if (e === "click") return Ur(t);
    }
    function Qf(e, t) {
        if (e === "input" || e === "change") return Ur(t);
    }
    function Kf(e, t) {
        return (
            (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
        );
    }
    var rt = typeof Object.is == "function" ? Object.is : Kf;
    function qn(e, t) {
        if (rt(e, t)) return !0;
        if (
            typeof e != "object" ||
            e === null ||
            typeof t != "object" ||
            t === null
        )
            return !1;
        var n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++) {
            var l = n[r];
            if (!Y.call(t, l) || !rt(e[l], t[l])) return !1;
        }
        return !0;
    }
    function Oo(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
    }
    function Do(e, t) {
        var n = Oo(e);
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
            n = Oo(n);
        }
    }
    function Mo(e, t) {
        return e && t
            ? e === t
                ? !0
                : e && e.nodeType === 3
                ? !1
                : t && t.nodeType === 3
                ? Mo(e, t.parentNode)
                : "contains" in e
                ? e.contains(t)
                : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
            : !1;
    }
    function Fo() {
        for (var e = window, t = kr(); t instanceof e.HTMLIFrameElement; ) {
            try {
                var n = typeof t.contentWindow.location.href == "string";
            } catch {
                n = !1;
            }
            if (n) e = t.contentWindow;
            else break;
            t = kr(e.document);
        }
        return t;
    }
    function su(e) {
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
    function Yf(e) {
        var t = Fo(),
            n = e.focusedElem,
            r = e.selectionRange;
        if (
            t !== n &&
            n &&
            n.ownerDocument &&
            Mo(n.ownerDocument.documentElement, n)
        ) {
            if (r !== null && su(n)) {
                if (
                    ((t = r.start),
                    (e = r.end),
                    e === void 0 && (e = t),
                    "selectionStart" in n)
                )
                    (n.selectionStart = t),
                        (n.selectionEnd = Math.min(e, n.value.length));
                else if (
                    ((e =
                        ((t = n.ownerDocument || document) && t.defaultView) ||
                        window),
                    e.getSelection)
                ) {
                    e = e.getSelection();
                    var l = n.textContent.length,
                        u = Math.min(r.start, l);
                    (r = r.end === void 0 ? u : Math.min(r.end, l)),
                        !e.extend && u > r && ((l = r), (r = u), (u = l)),
                        (l = Do(n, u));
                    var i = Do(n, r);
                    l &&
                        i &&
                        (e.rangeCount !== 1 ||
                            e.anchorNode !== l.node ||
                            e.anchorOffset !== l.offset ||
                            e.focusNode !== i.node ||
                            e.focusOffset !== i.offset) &&
                        ((t = t.createRange()),
                        t.setStart(l.node, l.offset),
                        e.removeAllRanges(),
                        u > r
                            ? (e.addRange(t), e.extend(i.node, i.offset))
                            : (t.setEnd(i.node, i.offset), e.addRange(t)));
                }
            }
            for (t = [], e = n; (e = e.parentNode); )
                e.nodeType === 1 &&
                    t.push({
                        element: e,
                        left: e.scrollLeft,
                        top: e.scrollTop,
                    });
            for (
                typeof n.focus == "function" && n.focus(), n = 0;
                n < t.length;
                n++
            )
                (e = t[n]),
                    (e.element.scrollLeft = e.left),
                    (e.element.scrollTop = e.top);
        }
    }
    var Xf = F && "documentMode" in document && 11 >= document.documentMode,
        hn = null,
        au = null,
        bn = null,
        fu = !1;
    function Uo(e, t, n) {
        var r =
            n.window === n
                ? n.document
                : n.nodeType === 9
                ? n
                : n.ownerDocument;
        fu ||
            hn == null ||
            hn !== kr(r) ||
            ((r = hn),
            "selectionStart" in r && su(r)
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
            (bn && qn(bn, r)) ||
                ((bn = r),
                (r = $r(au, "onSelect")),
                0 < r.length &&
                    ((t = new eu("onSelect", "select", null, t, n)),
                    e.push({ event: t, listeners: r }),
                    (t.target = hn))));
    }
    function Ar(e, t) {
        var n = {};
        return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
        );
    }
    var vn = {
            animationend: Ar("Animation", "AnimationEnd"),
            animationiteration: Ar("Animation", "AnimationIteration"),
            animationstart: Ar("Animation", "AnimationStart"),
            transitionend: Ar("Transition", "TransitionEnd"),
        },
        cu = {},
        Ao = {};
    F &&
        ((Ao = document.createElement("div").style),
        "AnimationEvent" in window ||
            (delete vn.animationend.animation,
            delete vn.animationiteration.animation,
            delete vn.animationstart.animation),
        "TransitionEvent" in window || delete vn.transitionend.transition);
    function Vr(e) {
        if (cu[e]) return cu[e];
        if (!vn[e]) return e;
        var t = vn[e],
            n;
        for (n in t) if (t.hasOwnProperty(n) && n in Ao) return (cu[e] = t[n]);
        return e;
    }
    var Vo = Vr("animationend"),
        Bo = Vr("animationiteration"),
        $o = Vr("animationstart"),
        Ho = Vr("transitionend"),
        Wo = new Map(),
        Qo =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
                " "
            );
    function Ot(e, t) {
        Wo.set(e, t), k(t, [e]);
    }
    for (var du = 0; du < Qo.length; du++) {
        var pu = Qo[du],
            Gf = pu.toLowerCase(),
            Jf = pu[0].toUpperCase() + pu.slice(1);
        Ot(Gf, "on" + Jf);
    }
    Ot(Vo, "onAnimationEnd"),
        Ot(Bo, "onAnimationIteration"),
        Ot($o, "onAnimationStart"),
        Ot("dblclick", "onDoubleClick"),
        Ot("focusin", "onFocus"),
        Ot("focusout", "onBlur"),
        Ot(Ho, "onTransitionEnd"),
        M("onMouseEnter", ["mouseout", "mouseover"]),
        M("onMouseLeave", ["mouseout", "mouseover"]),
        M("onPointerEnter", ["pointerout", "pointerover"]),
        M("onPointerLeave", ["pointerout", "pointerover"]),
        k(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
                " "
            )
        ),
        k(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
                " "
            )
        ),
        k("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
        ]),
        k(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
                " "
            )
        ),
        k(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
                " "
            )
        ),
        k(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
                " "
            )
        );
    var er =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
                " "
            ),
        Zf = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(er)
        );
    function Ko(e, t, n) {
        var r = e.type || "unknown-event";
        (e.currentTarget = n), Xa(r, t, void 0, e), (e.currentTarget = null);
    }
    function Yo(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                l = r.event;
            r = r.listeners;
            e: {
                var u = void 0;
                if (t)
                    for (var i = r.length - 1; 0 <= i; i--) {
                        var o = r[i],
                            s = o.instance,
                            p = o.currentTarget;
                        if (
                            ((o = o.listener),
                            s !== u && l.isPropagationStopped())
                        )
                            break e;
                        Ko(l, o, p), (u = s);
                    }
                else
                    for (i = 0; i < r.length; i++) {
                        if (
                            ((o = r[i]),
                            (s = o.instance),
                            (p = o.currentTarget),
                            (o = o.listener),
                            s !== u && l.isPropagationStopped())
                        )
                            break e;
                        Ko(l, o, p), (u = s);
                    }
            }
        }
        if (_r) throw ((e = Wl), (_r = !1), (Wl = null), e);
    }
    function te(e, t) {
        var n = t[ku];
        n === void 0 && (n = t[ku] = new Set());
        var r = e + "__bubble";
        n.has(r) || (Xo(t, e, 2, !1), n.add(r));
    }
    function mu(e, t, n) {
        var r = 0;
        t && (r |= 4), Xo(n, e, r, t);
    }
    var Br = "_reactListening" + Math.random().toString(36).slice(2);
    function tr(e) {
        if (!e[Br]) {
            (e[Br] = !0),
                $.forEach(function (n) {
                    n !== "selectionchange" &&
                        (Zf.has(n) || mu(n, !1, e), mu(n, !0, e));
                });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Br] || ((t[Br] = !0), mu("selectionchange", !1, t));
        }
    }
    function Xo(e, t, n, r) {
        switch (yo(t)) {
            case 1:
                var l = cf;
                break;
            case 4:
                l = df;
                break;
            default:
                l = Zl;
        }
        (n = l.bind(null, t, n, e)),
            (l = void 0),
            !Hl ||
                (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
                (l = !0),
            r
                ? l !== void 0
                    ? e.addEventListener(t, n, { capture: !0, passive: l })
                    : e.addEventListener(t, n, !0)
                : l !== void 0
                ? e.addEventListener(t, n, { passive: l })
                : e.addEventListener(t, n, !1);
    }
    function hu(e, t, n, r, l) {
        var u = r;
        if (!(t & 1) && !(t & 2) && r !== null)
            e: for (;;) {
                if (r === null) return;
                var i = r.tag;
                if (i === 3 || i === 4) {
                    var o = r.stateNode.containerInfo;
                    if (o === l || (o.nodeType === 8 && o.parentNode === l))
                        break;
                    if (i === 4)
                        for (i = r.return; i !== null; ) {
                            var s = i.tag;
                            if (
                                (s === 3 || s === 4) &&
                                ((s = i.stateNode.containerInfo),
                                s === l ||
                                    (s.nodeType === 8 && s.parentNode === l))
                            )
                                return;
                            i = i.return;
                        }
                    for (; o !== null; ) {
                        if (((i = Jt(o)), i === null)) return;
                        if (((s = i.tag), s === 5 || s === 6)) {
                            r = u = i;
                            continue e;
                        }
                        o = o.parentNode;
                    }
                }
                r = r.return;
            }
        qi(function () {
            var p = u,
                y = Vl(n),
                w = [];
            e: {
                var h = Wo.get(e);
                if (h !== void 0) {
                    var x = eu,
                        P = e;
                    switch (e) {
                        case "keypress":
                            if (Dr(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            x = Pf;
                            break;
                        case "focusin":
                            (P = "focus"), (x = ru);
                            break;
                        case "focusout":
                            (P = "blur"), (x = ru);
                            break;
                        case "beforeblur":
                        case "afterblur":
                            x = ru;
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
                            x = So;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            x = hf;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            x = Lf;
                            break;
                        case Vo:
                        case Bo:
                        case $o:
                            x = gf;
                            break;
                        case Ho:
                            x = jf;
                            break;
                        case "scroll":
                            x = pf;
                            break;
                        case "wheel":
                            x = Of;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            x = Sf;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            x = Eo;
                    }
                    var z = (t & 4) !== 0,
                        fe = !z && e === "scroll",
                        c = z ? (h !== null ? h + "Capture" : null) : h;
                    z = [];
                    for (var a = p, d; a !== null; ) {
                        d = a;
                        var S = d.stateNode;
                        if (
                            (d.tag === 5 &&
                                S !== null &&
                                ((d = S),
                                c !== null &&
                                    ((S = Fn(a, c)),
                                    S != null && z.push(nr(a, S, d)))),
                            fe)
                        )
                            break;
                        a = a.return;
                    }
                    0 < z.length &&
                        ((h = new x(h, P, null, n, y)),
                        w.push({ event: h, listeners: z }));
                }
            }
            if (!(t & 7)) {
                e: {
                    if (
                        ((h = e === "mouseover" || e === "pointerover"),
                        (x = e === "mouseout" || e === "pointerout"),
                        h &&
                            n !== Al &&
                            (P = n.relatedTarget || n.fromElement) &&
                            (Jt(P) || P[wt]))
                    )
                        break e;
                    if (
                        (x || h) &&
                        ((h =
                            y.window === y
                                ? y
                                : (h = y.ownerDocument)
                                ? h.defaultView || h.parentWindow
                                : window),
                        x
                            ? ((P = n.relatedTarget || n.toElement),
                              (x = p),
                              (P = P ? Jt(P) : null),
                              P !== null &&
                                  ((fe = Gt(P)),
                                  P !== fe || (P.tag !== 5 && P.tag !== 6)) &&
                                  (P = null))
                            : ((x = null), (P = p)),
                        x !== P)
                    ) {
                        if (
                            ((z = So),
                            (S = "onMouseLeave"),
                            (c = "onMouseEnter"),
                            (a = "mouse"),
                            (e === "pointerout" || e === "pointerover") &&
                                ((z = Eo),
                                (S = "onPointerLeave"),
                                (c = "onPointerEnter"),
                                (a = "pointer")),
                            (fe = x == null ? h : wn(x)),
                            (d = P == null ? h : wn(P)),
                            (h = new z(S, a + "leave", x, n, y)),
                            (h.target = fe),
                            (h.relatedTarget = d),
                            (S = null),
                            Jt(y) === p &&
                                ((z = new z(c, a + "enter", P, n, y)),
                                (z.target = d),
                                (z.relatedTarget = fe),
                                (S = z)),
                            (fe = S),
                            x && P)
                        )
                            t: {
                                for (z = x, c = P, a = 0, d = z; d; d = yn(d))
                                    a++;
                                for (d = 0, S = c; S; S = yn(S)) d++;
                                for (; 0 < a - d; ) (z = yn(z)), a--;
                                for (; 0 < d - a; ) (c = yn(c)), d--;
                                for (; a--; ) {
                                    if (
                                        z === c ||
                                        (c !== null && z === c.alternate)
                                    )
                                        break t;
                                    (z = yn(z)), (c = yn(c));
                                }
                                z = null;
                            }
                        else z = null;
                        x !== null && Go(w, h, x, z, !1),
                            P !== null && fe !== null && Go(w, fe, P, z, !0);
                    }
                }
                e: {
                    if (
                        ((h = p ? wn(p) : window),
                        (x = h.nodeName && h.nodeName.toLowerCase()),
                        x === "select" || (x === "input" && h.type === "file"))
                    )
                        var L = Bf;
                    else if (zo(h))
                        if (Lo) L = Qf;
                        else {
                            L = Hf;
                            var j = $f;
                        }
                    else
                        (x = h.nodeName) &&
                            x.toLowerCase() === "input" &&
                            (h.type === "checkbox" || h.type === "radio") &&
                            (L = Wf);
                    if (L && (L = L(e, p))) {
                        To(w, L, n, y);
                        break e;
                    }
                    j && j(e, h, p),
                        e === "focusout" &&
                            (j = h._wrapperState) &&
                            j.controlled &&
                            h.type === "number" &&
                            Ol(h, "number", h.value);
                }
                switch (((j = p ? wn(p) : window), e)) {
                    case "focusin":
                        (zo(j) || j.contentEditable === "true") &&
                            ((hn = j), (au = p), (bn = null));
                        break;
                    case "focusout":
                        bn = au = hn = null;
                        break;
                    case "mousedown":
                        fu = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        (fu = !1), Uo(w, n, y);
                        break;
                    case "selectionchange":
                        if (Xf) break;
                    case "keydown":
                    case "keyup":
                        Uo(w, n, y);
                }
                var I;
                if (uu)
                    e: {
                        switch (e) {
                            case "compositionstart":
                                var D = "onCompositionStart";
                                break e;
                            case "compositionend":
                                D = "onCompositionEnd";
                                break e;
                            case "compositionupdate":
                                D = "onCompositionUpdate";
                                break e;
                        }
                        D = void 0;
                    }
                else
                    mn
                        ? No(e, n) && (D = "onCompositionEnd")
                        : e === "keydown" &&
                          n.keyCode === 229 &&
                          (D = "onCompositionStart");
                D &&
                    (xo &&
                        n.locale !== "ko" &&
                        (mn || D !== "onCompositionStart"
                            ? D === "onCompositionEnd" && mn && (I = go())
                            : ((It = y),
                              (bl = "value" in It ? It.value : It.textContent),
                              (mn = !0))),
                    (j = $r(p, D)),
                    0 < j.length &&
                        ((D = new ko(D, e, null, n, y)),
                        w.push({ event: D, listeners: j }),
                        I
                            ? (D.data = I)
                            : ((I = Po(n)), I !== null && (D.data = I)))),
                    (I = Mf ? Ff(e, n) : Uf(e, n)) &&
                        ((p = $r(p, "onBeforeInput")),
                        0 < p.length &&
                            ((y = new ko(
                                "onBeforeInput",
                                "beforeinput",
                                null,
                                n,
                                y
                            )),
                            w.push({ event: y, listeners: p }),
                            (y.data = I)));
            }
            Yo(w, t);
        });
    }
    function nr(e, t, n) {
        return { instance: e, listener: t, currentTarget: n };
    }
    function $r(e, t) {
        for (var n = t + "Capture", r = []; e !== null; ) {
            var l = e,
                u = l.stateNode;
            l.tag === 5 &&
                u !== null &&
                ((l = u),
                (u = Fn(e, n)),
                u != null && r.unshift(nr(e, u, l)),
                (u = Fn(e, t)),
                u != null && r.push(nr(e, u, l))),
                (e = e.return);
        }
        return r;
    }
    function yn(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5);
        return e || null;
    }
    function Go(e, t, n, r, l) {
        for (var u = t._reactName, i = []; n !== null && n !== r; ) {
            var o = n,
                s = o.alternate,
                p = o.stateNode;
            if (s !== null && s === r) break;
            o.tag === 5 &&
                p !== null &&
                ((o = p),
                l
                    ? ((s = Fn(n, u)), s != null && i.unshift(nr(n, s, o)))
                    : l || ((s = Fn(n, u)), s != null && i.push(nr(n, s, o)))),
                (n = n.return);
        }
        i.length !== 0 && e.push({ event: t, listeners: i });
    }
    var qf = /\r\n?/g,
        bf = /\u0000|\uFFFD/g;
    function Jo(e) {
        return (typeof e == "string" ? e : "" + e)
            .replace(
                qf,
                `
`
            )
            .replace(bf, "");
    }
    function Hr(e, t, n) {
        if (((t = Jo(t)), Jo(e) !== t && n)) throw Error(m(425));
    }
    function Wr() {}
    var vu = null,
        yu = null;
    function gu(e, t) {
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
    var wu = typeof setTimeout == "function" ? setTimeout : void 0,
        ec = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Zo = typeof Promise == "function" ? Promise : void 0,
        tc =
            typeof queueMicrotask == "function"
                ? queueMicrotask
                : typeof Zo < "u"
                ? function (e) {
                      return Zo.resolve(null).then(e).catch(nc);
                  }
                : wu;
    function nc(e) {
        setTimeout(function () {
            throw e;
        });
    }
    function Su(e, t) {
        var n = t,
            r = 0;
        do {
            var l = n.nextSibling;
            if ((e.removeChild(n), l && l.nodeType === 8))
                if (((n = l.data), n === "/$")) {
                    if (r === 0) {
                        e.removeChild(l), Kn(t);
                        return;
                    }
                    r--;
                } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
            n = l;
        } while (n);
        Kn(t);
    }
    function Dt(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (((t = e.data), t === "$" || t === "$!" || t === "$?"))
                    break;
                if (t === "/$") return null;
            }
        }
        return e;
    }
    function qo(e) {
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
    var gn = Math.random().toString(36).slice(2),
        pt = "__reactFiber$" + gn,
        rr = "__reactProps$" + gn,
        wt = "__reactContainer$" + gn,
        ku = "__reactEvents$" + gn,
        rc = "__reactListeners$" + gn,
        lc = "__reactHandles$" + gn;
    function Jt(e) {
        var t = e[pt];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
            if ((t = n[wt] || n[pt])) {
                if (
                    ((n = t.alternate),
                    t.child !== null || (n !== null && n.child !== null))
                )
                    for (e = qo(e); e !== null; ) {
                        if ((n = e[pt])) return n;
                        e = qo(e);
                    }
                return t;
            }
            (e = n), (n = e.parentNode);
        }
        return null;
    }
    function lr(e) {
        return (
            (e = e[pt] || e[wt]),
            !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
                ? null
                : e
        );
    }
    function wn(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(m(33));
    }
    function Qr(e) {
        return e[rr] || null;
    }
    var Eu = [],
        Sn = -1;
    function Mt(e) {
        return { current: e };
    }
    function ne(e) {
        0 > Sn || ((e.current = Eu[Sn]), (Eu[Sn] = null), Sn--);
    }
    function ee(e, t) {
        Sn++, (Eu[Sn] = e.current), (e.current = t);
    }
    var Ft = {},
        _e = Mt(Ft),
        Oe = Mt(!1),
        Zt = Ft;
    function kn(e, t) {
        var n = e.type.contextTypes;
        if (!n) return Ft;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
        var l = {},
            u;
        for (u in n) l[u] = t[u];
        return (
            r &&
                ((e = e.stateNode),
                (e.__reactInternalMemoizedUnmaskedChildContext = t),
                (e.__reactInternalMemoizedMaskedChildContext = l)),
            l
        );
    }
    function De(e) {
        return (e = e.childContextTypes), e != null;
    }
    function Kr() {
        ne(Oe), ne(_e);
    }
    function bo(e, t, n) {
        if (_e.current !== Ft) throw Error(m(168));
        ee(_e, t), ee(Oe, n);
    }
    function es(e, t, n) {
        var r = e.stateNode;
        if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
            return n;
        r = r.getChildContext();
        for (var l in r)
            if (!(l in t)) throw Error(m(108, b(e) || "Unknown", l));
        return C({}, n, r);
    }
    function Yr(e) {
        return (
            (e =
                ((e = e.stateNode) &&
                    e.__reactInternalMemoizedMergedChildContext) ||
                Ft),
            (Zt = _e.current),
            ee(_e, e),
            ee(Oe, Oe.current),
            !0
        );
    }
    function ts(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(m(169));
        n
            ? ((e = es(e, t, Zt)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              ne(Oe),
              ne(_e),
              ee(_e, e))
            : ne(Oe),
            ee(Oe, n);
    }
    var St = null,
        Xr = !1,
        xu = !1;
    function ns(e) {
        St === null ? (St = [e]) : St.push(e);
    }
    function uc(e) {
        (Xr = !0), ns(e);
    }
    function Ut() {
        if (!xu && St !== null) {
            xu = !0;
            var e = 0,
                t = J;
            try {
                var n = St;
                for (J = 1; e < n.length; e++) {
                    var r = n[e];
                    do r = r(!0);
                    while (r !== null);
                }
                (St = null), (Xr = !1);
            } catch (l) {
                throw (St !== null && (St = St.slice(e + 1)), ro(Ql, Ut), l);
            } finally {
                (J = t), (xu = !1);
            }
        }
        return null;
    }
    var En = [],
        xn = 0,
        Gr = null,
        Jr = 0,
        Ye = [],
        Xe = 0,
        qt = null,
        kt = 1,
        Et = "";
    function bt(e, t) {
        (En[xn++] = Jr), (En[xn++] = Gr), (Gr = e), (Jr = t);
    }
    function rs(e, t, n) {
        (Ye[Xe++] = kt), (Ye[Xe++] = Et), (Ye[Xe++] = qt), (qt = e);
        var r = kt;
        e = Et;
        var l = 32 - nt(r) - 1;
        (r &= ~(1 << l)), (n += 1);
        var u = 32 - nt(t) + l;
        if (30 < u) {
            var i = l - (l % 5);
            (u = (r & ((1 << i) - 1)).toString(32)),
                (r >>= i),
                (l -= i),
                (kt = (1 << (32 - nt(t) + l)) | (n << l) | r),
                (Et = u + e);
        } else (kt = (1 << u) | (n << l) | r), (Et = e);
    }
    function _u(e) {
        e.return !== null && (bt(e, 1), rs(e, 1, 0));
    }
    function Cu(e) {
        for (; e === Gr; )
            (Gr = En[--xn]), (En[xn] = null), (Jr = En[--xn]), (En[xn] = null);
        for (; e === qt; )
            (qt = Ye[--Xe]),
                (Ye[Xe] = null),
                (Et = Ye[--Xe]),
                (Ye[Xe] = null),
                (kt = Ye[--Xe]),
                (Ye[Xe] = null);
    }
    var He = null,
        We = null,
        le = !1,
        lt = null;
    function ls(e, t) {
        var n = qe(5, null, null, 0);
        (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            (t = e.deletions),
            t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
    }
    function us(e, t) {
        switch (e.tag) {
            case 5:
                var n = e.type;
                return (
                    (t =
                        t.nodeType !== 1 ||
                        n.toLowerCase() !== t.nodeName.toLowerCase()
                            ? null
                            : t),
                    t !== null
                        ? ((e.stateNode = t),
                          (He = e),
                          (We = Dt(t.firstChild)),
                          !0)
                        : !1
                );
            case 6:
                return (
                    (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                    t !== null
                        ? ((e.stateNode = t), (He = e), (We = null), !0)
                        : !1
                );
            case 13:
                return (
                    (t = t.nodeType !== 8 ? null : t),
                    t !== null
                        ? ((n = qt !== null ? { id: kt, overflow: Et } : null),
                          (e.memoizedState = {
                              dehydrated: t,
                              treeContext: n,
                              retryLane: 1073741824,
                          }),
                          (n = qe(18, null, null, 0)),
                          (n.stateNode = t),
                          (n.return = e),
                          (e.child = n),
                          (He = e),
                          (We = null),
                          !0)
                        : !1
                );
            default:
                return !1;
        }
    }
    function Nu(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function Pu(e) {
        if (le) {
            var t = We;
            if (t) {
                var n = t;
                if (!us(e, t)) {
                    if (Nu(e)) throw Error(m(418));
                    t = Dt(n.nextSibling);
                    var r = He;
                    t && us(e, t)
                        ? ls(r, n)
                        : ((e.flags = (e.flags & -4097) | 2),
                          (le = !1),
                          (He = e));
                }
            } else {
                if (Nu(e)) throw Error(m(418));
                (e.flags = (e.flags & -4097) | 2), (le = !1), (He = e);
            }
        }
    }
    function is(e) {
        for (
            e = e.return;
            e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

        )
            e = e.return;
        He = e;
    }
    function Zr(e) {
        if (e !== He) return !1;
        if (!le) return is(e), (le = !0), !1;
        var t;
        if (
            ((t = e.tag !== 3) &&
                !(t = e.tag !== 5) &&
                ((t = e.type),
                (t =
                    t !== "head" &&
                    t !== "body" &&
                    !gu(e.type, e.memoizedProps))),
            t && (t = We))
        ) {
            if (Nu(e)) throw (os(), Error(m(418)));
            for (; t; ) ls(e, t), (t = Dt(t.nextSibling));
        }
        if ((is(e), e.tag === 13)) {
            if (
                ((e = e.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
            )
                throw Error(m(317));
            e: {
                for (e = e.nextSibling, t = 0; e; ) {
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                We = Dt(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                    }
                    e = e.nextSibling;
                }
                We = null;
            }
        } else We = He ? Dt(e.stateNode.nextSibling) : null;
        return !0;
    }
    function os() {
        for (var e = We; e; ) e = Dt(e.nextSibling);
    }
    function _n() {
        (We = He = null), (le = !1);
    }
    function zu(e) {
        lt === null ? (lt = [e]) : lt.push(e);
    }
    var ic = xe.ReactCurrentBatchConfig;
    function ur(e, t, n) {
        if (
            ((e = n.ref),
            e !== null && typeof e != "function" && typeof e != "object")
        ) {
            if (n._owner) {
                if (((n = n._owner), n)) {
                    if (n.tag !== 1) throw Error(m(309));
                    var r = n.stateNode;
                }
                if (!r) throw Error(m(147, e));
                var l = r,
                    u = "" + e;
                return t !== null &&
                    t.ref !== null &&
                    typeof t.ref == "function" &&
                    t.ref._stringRef === u
                    ? t.ref
                    : ((t = function (i) {
                          var o = l.refs;
                          i === null ? delete o[u] : (o[u] = i);
                      }),
                      (t._stringRef = u),
                      t);
            }
            if (typeof e != "string") throw Error(m(284));
            if (!n._owner) throw Error(m(290, e));
        }
        return e;
    }
    function qr(e, t) {
        throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
                m(
                    31,
                    e === "[object Object]"
                        ? "object with keys {" + Object.keys(t).join(", ") + "}"
                        : e
                )
            ))
        );
    }
    function ss(e) {
        var t = e._init;
        return t(e._payload);
    }
    function as(e) {
        function t(c, a) {
            if (e) {
                var d = c.deletions;
                d === null ? ((c.deletions = [a]), (c.flags |= 16)) : d.push(a);
            }
        }
        function n(c, a) {
            if (!e) return null;
            for (; a !== null; ) t(c, a), (a = a.sibling);
            return null;
        }
        function r(c, a) {
            for (c = new Map(); a !== null; )
                a.key !== null ? c.set(a.key, a) : c.set(a.index, a),
                    (a = a.sibling);
            return c;
        }
        function l(c, a) {
            return (c = Kt(c, a)), (c.index = 0), (c.sibling = null), c;
        }
        function u(c, a, d) {
            return (
                (c.index = d),
                e
                    ? ((d = c.alternate),
                      d !== null
                          ? ((d = d.index), d < a ? ((c.flags |= 2), a) : d)
                          : ((c.flags |= 2), a))
                    : ((c.flags |= 1048576), a)
            );
        }
        function i(c) {
            return e && c.alternate === null && (c.flags |= 2), c;
        }
        function o(c, a, d, S) {
            return a === null || a.tag !== 6
                ? ((a = wi(d, c.mode, S)), (a.return = c), a)
                : ((a = l(a, d)), (a.return = c), a);
        }
        function s(c, a, d, S) {
            var L = d.type;
            return L === je
                ? y(c, a, d.props.children, S, d.key)
                : a !== null &&
                  (a.elementType === L ||
                      (typeof L == "object" &&
                          L !== null &&
                          L.$$typeof === Ie &&
                          ss(L) === a.type))
                ? ((S = l(a, d.props)),
                  (S.ref = ur(c, a, d)),
                  (S.return = c),
                  S)
                : ((S = El(d.type, d.key, d.props, null, c.mode, S)),
                  (S.ref = ur(c, a, d)),
                  (S.return = c),
                  S);
        }
        function p(c, a, d, S) {
            return a === null ||
                a.tag !== 4 ||
                a.stateNode.containerInfo !== d.containerInfo ||
                a.stateNode.implementation !== d.implementation
                ? ((a = Si(d, c.mode, S)), (a.return = c), a)
                : ((a = l(a, d.children || [])), (a.return = c), a);
        }
        function y(c, a, d, S, L) {
            return a === null || a.tag !== 7
                ? ((a = sn(d, c.mode, S, L)), (a.return = c), a)
                : ((a = l(a, d)), (a.return = c), a);
        }
        function w(c, a, d) {
            if ((typeof a == "string" && a !== "") || typeof a == "number")
                return (a = wi("" + a, c.mode, d)), (a.return = c), a;
            if (typeof a == "object" && a !== null) {
                switch (a.$$typeof) {
                    case et:
                        return (
                            (d = El(a.type, a.key, a.props, null, c.mode, d)),
                            (d.ref = ur(c, null, a)),
                            (d.return = c),
                            d
                        );
                    case ze:
                        return (a = Si(a, c.mode, d)), (a.return = c), a;
                    case Ie:
                        var S = a._init;
                        return w(c, S(a._payload), d);
                }
                if (On(a) || O(a))
                    return (a = sn(a, c.mode, d, null)), (a.return = c), a;
                qr(c, a);
            }
            return null;
        }
        function h(c, a, d, S) {
            var L = a !== null ? a.key : null;
            if ((typeof d == "string" && d !== "") || typeof d == "number")
                return L !== null ? null : o(c, a, "" + d, S);
            if (typeof d == "object" && d !== null) {
                switch (d.$$typeof) {
                    case et:
                        return d.key === L ? s(c, a, d, S) : null;
                    case ze:
                        return d.key === L ? p(c, a, d, S) : null;
                    case Ie:
                        return (L = d._init), h(c, a, L(d._payload), S);
                }
                if (On(d) || O(d))
                    return L !== null ? null : y(c, a, d, S, null);
                qr(c, d);
            }
            return null;
        }
        function x(c, a, d, S, L) {
            if ((typeof S == "string" && S !== "") || typeof S == "number")
                return (c = c.get(d) || null), o(a, c, "" + S, L);
            if (typeof S == "object" && S !== null) {
                switch (S.$$typeof) {
                    case et:
                        return (
                            (c = c.get(S.key === null ? d : S.key) || null),
                            s(a, c, S, L)
                        );
                    case ze:
                        return (
                            (c = c.get(S.key === null ? d : S.key) || null),
                            p(a, c, S, L)
                        );
                    case Ie:
                        var j = S._init;
                        return x(c, a, d, j(S._payload), L);
                }
                if (On(S) || O(S))
                    return (c = c.get(d) || null), y(a, c, S, L, null);
                qr(a, S);
            }
            return null;
        }
        function P(c, a, d, S) {
            for (
                var L = null, j = null, I = a, D = (a = 0), we = null;
                I !== null && D < d.length;
                D++
            ) {
                I.index > D ? ((we = I), (I = null)) : (we = I.sibling);
                var K = h(c, I, d[D], S);
                if (K === null) {
                    I === null && (I = we);
                    break;
                }
                e && I && K.alternate === null && t(c, I),
                    (a = u(K, a, D)),
                    j === null ? (L = K) : (j.sibling = K),
                    (j = K),
                    (I = we);
            }
            if (D === d.length) return n(c, I), le && bt(c, D), L;
            if (I === null) {
                for (; D < d.length; D++)
                    (I = w(c, d[D], S)),
                        I !== null &&
                            ((a = u(I, a, D)),
                            j === null ? (L = I) : (j.sibling = I),
                            (j = I));
                return le && bt(c, D), L;
            }
            for (I = r(c, I); D < d.length; D++)
                (we = x(I, c, D, d[D], S)),
                    we !== null &&
                        (e &&
                            we.alternate !== null &&
                            I.delete(we.key === null ? D : we.key),
                        (a = u(we, a, D)),
                        j === null ? (L = we) : (j.sibling = we),
                        (j = we));
            return (
                e &&
                    I.forEach(function (Yt) {
                        return t(c, Yt);
                    }),
                le && bt(c, D),
                L
            );
        }
        function z(c, a, d, S) {
            var L = O(d);
            if (typeof L != "function") throw Error(m(150));
            if (((d = L.call(d)), d == null)) throw Error(m(151));
            for (
                var j = (L = null), I = a, D = (a = 0), we = null, K = d.next();
                I !== null && !K.done;
                D++, K = d.next()
            ) {
                I.index > D ? ((we = I), (I = null)) : (we = I.sibling);
                var Yt = h(c, I, K.value, S);
                if (Yt === null) {
                    I === null && (I = we);
                    break;
                }
                e && I && Yt.alternate === null && t(c, I),
                    (a = u(Yt, a, D)),
                    j === null ? (L = Yt) : (j.sibling = Yt),
                    (j = Yt),
                    (I = we);
            }
            if (K.done) return n(c, I), le && bt(c, D), L;
            if (I === null) {
                for (; !K.done; D++, K = d.next())
                    (K = w(c, K.value, S)),
                        K !== null &&
                            ((a = u(K, a, D)),
                            j === null ? (L = K) : (j.sibling = K),
                            (j = K));
                return le && bt(c, D), L;
            }
            for (I = r(c, I); !K.done; D++, K = d.next())
                (K = x(I, c, D, K.value, S)),
                    K !== null &&
                        (e &&
                            K.alternate !== null &&
                            I.delete(K.key === null ? D : K.key),
                        (a = u(K, a, D)),
                        j === null ? (L = K) : (j.sibling = K),
                        (j = K));
            return (
                e &&
                    I.forEach(function (Ac) {
                        return t(c, Ac);
                    }),
                le && bt(c, D),
                L
            );
        }
        function fe(c, a, d, S) {
            if (
                (typeof d == "object" &&
                    d !== null &&
                    d.type === je &&
                    d.key === null &&
                    (d = d.props.children),
                typeof d == "object" && d !== null)
            ) {
                switch (d.$$typeof) {
                    case et:
                        e: {
                            for (var L = d.key, j = a; j !== null; ) {
                                if (j.key === L) {
                                    if (((L = d.type), L === je)) {
                                        if (j.tag === 7) {
                                            n(c, j.sibling),
                                                (a = l(j, d.props.children)),
                                                (a.return = c),
                                                (c = a);
                                            break e;
                                        }
                                    } else if (
                                        j.elementType === L ||
                                        (typeof L == "object" &&
                                            L !== null &&
                                            L.$$typeof === Ie &&
                                            ss(L) === j.type)
                                    ) {
                                        n(c, j.sibling),
                                            (a = l(j, d.props)),
                                            (a.ref = ur(c, j, d)),
                                            (a.return = c),
                                            (c = a);
                                        break e;
                                    }
                                    n(c, j);
                                    break;
                                } else t(c, j);
                                j = j.sibling;
                            }
                            d.type === je
                                ? ((a = sn(d.props.children, c.mode, S, d.key)),
                                  (a.return = c),
                                  (c = a))
                                : ((S = El(
                                      d.type,
                                      d.key,
                                      d.props,
                                      null,
                                      c.mode,
                                      S
                                  )),
                                  (S.ref = ur(c, a, d)),
                                  (S.return = c),
                                  (c = S));
                        }
                        return i(c);
                    case ze:
                        e: {
                            for (j = d.key; a !== null; ) {
                                if (a.key === j)
                                    if (
                                        a.tag === 4 &&
                                        a.stateNode.containerInfo ===
                                            d.containerInfo &&
                                        a.stateNode.implementation ===
                                            d.implementation
                                    ) {
                                        n(c, a.sibling),
                                            (a = l(a, d.children || [])),
                                            (a.return = c),
                                            (c = a);
                                        break e;
                                    } else {
                                        n(c, a);
                                        break;
                                    }
                                else t(c, a);
                                a = a.sibling;
                            }
                            (a = Si(d, c.mode, S)), (a.return = c), (c = a);
                        }
                        return i(c);
                    case Ie:
                        return (j = d._init), fe(c, a, j(d._payload), S);
                }
                if (On(d)) return P(c, a, d, S);
                if (O(d)) return z(c, a, d, S);
                qr(c, d);
            }
            return (typeof d == "string" && d !== "") || typeof d == "number"
                ? ((d = "" + d),
                  a !== null && a.tag === 6
                      ? (n(c, a.sibling),
                        (a = l(a, d)),
                        (a.return = c),
                        (c = a))
                      : (n(c, a),
                        (a = wi(d, c.mode, S)),
                        (a.return = c),
                        (c = a)),
                  i(c))
                : n(c, a);
        }
        return fe;
    }
    var Cn = as(!0),
        fs = as(!1),
        br = Mt(null),
        el = null,
        Nn = null,
        Tu = null;
    function Lu() {
        Tu = Nn = el = null;
    }
    function Ru(e) {
        var t = br.current;
        ne(br), (e._currentValue = t);
    }
    function ju(e, t, n) {
        for (; e !== null; ) {
            var r = e.alternate;
            if (
                ((e.childLanes & t) !== t
                    ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                    : r !== null &&
                      (r.childLanes & t) !== t &&
                      (r.childLanes |= t),
                e === n)
            )
                break;
            e = e.return;
        }
    }
    function Pn(e, t) {
        (el = e),
            (Tu = Nn = null),
            (e = e.dependencies),
            e !== null &&
                e.firstContext !== null &&
                (e.lanes & t && (Me = !0), (e.firstContext = null));
    }
    function Ge(e) {
        var t = e._currentValue;
        if (Tu !== e)
            if (
                ((e = { context: e, memoizedValue: t, next: null }),
                Nn === null)
            ) {
                if (el === null) throw Error(m(308));
                (Nn = e), (el.dependencies = { lanes: 0, firstContext: e });
            } else Nn = Nn.next = e;
        return t;
    }
    var en = null;
    function Iu(e) {
        en === null ? (en = [e]) : en.push(e);
    }
    function cs(e, t, n, r) {
        var l = t.interleaved;
        return (
            l === null
                ? ((n.next = n), Iu(t))
                : ((n.next = l.next), (l.next = n)),
            (t.interleaved = n),
            xt(e, r)
        );
    }
    function xt(e, t) {
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
    var At = !1;
    function Ou(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
        };
    }
    function ds(e, t) {
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
    function _t(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
        };
    }
    function Vt(e, t, n) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (((r = r.shared), H & 2)) {
            var l = r.pending;
            return (
                l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
                (r.pending = t),
                xt(e, n)
            );
        }
        return (
            (l = r.interleaved),
            l === null
                ? ((t.next = t), Iu(r))
                : ((t.next = l.next), (l.next = t)),
            (r.interleaved = t),
            xt(e, n)
        );
    }
    function tl(e, t, n) {
        if (
            ((t = t.updateQueue),
            t !== null && ((t = t.shared), (n & 4194240) !== 0))
        ) {
            var r = t.lanes;
            (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n);
        }
    }
    function ps(e, t) {
        var n = e.updateQueue,
            r = e.alternate;
        if (r !== null && ((r = r.updateQueue), n === r)) {
            var l = null,
                u = null;
            if (((n = n.firstBaseUpdate), n !== null)) {
                do {
                    var i = {
                        eventTime: n.eventTime,
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: n.callback,
                        next: null,
                    };
                    u === null ? (l = u = i) : (u = u.next = i), (n = n.next);
                } while (n !== null);
                u === null ? (l = u = t) : (u = u.next = t);
            } else l = u = t;
            (n = {
                baseState: r.baseState,
                firstBaseUpdate: l,
                lastBaseUpdate: u,
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
    function nl(e, t, n, r) {
        var l = e.updateQueue;
        At = !1;
        var u = l.firstBaseUpdate,
            i = l.lastBaseUpdate,
            o = l.shared.pending;
        if (o !== null) {
            l.shared.pending = null;
            var s = o,
                p = s.next;
            (s.next = null), i === null ? (u = p) : (i.next = p), (i = s);
            var y = e.alternate;
            y !== null &&
                ((y = y.updateQueue),
                (o = y.lastBaseUpdate),
                o !== i &&
                    (o === null ? (y.firstBaseUpdate = p) : (o.next = p),
                    (y.lastBaseUpdate = s)));
        }
        if (u !== null) {
            var w = l.baseState;
            (i = 0), (y = p = s = null), (o = u);
            do {
                var h = o.lane,
                    x = o.eventTime;
                if ((r & h) === h) {
                    y !== null &&
                        (y = y.next =
                            {
                                eventTime: x,
                                lane: 0,
                                tag: o.tag,
                                payload: o.payload,
                                callback: o.callback,
                                next: null,
                            });
                    e: {
                        var P = e,
                            z = o;
                        switch (((h = t), (x = n), z.tag)) {
                            case 1:
                                if (((P = z.payload), typeof P == "function")) {
                                    w = P.call(x, w, h);
                                    break e;
                                }
                                w = P;
                                break e;
                            case 3:
                                P.flags = (P.flags & -65537) | 128;
                            case 0:
                                if (
                                    ((P = z.payload),
                                    (h =
                                        typeof P == "function"
                                            ? P.call(x, w, h)
                                            : P),
                                    h == null)
                                )
                                    break e;
                                w = C({}, w, h);
                                break e;
                            case 2:
                                At = !0;
                        }
                    }
                    o.callback !== null &&
                        o.lane !== 0 &&
                        ((e.flags |= 64),
                        (h = l.effects),
                        h === null ? (l.effects = [o]) : h.push(o));
                } else
                    (x = {
                        eventTime: x,
                        lane: h,
                        tag: o.tag,
                        payload: o.payload,
                        callback: o.callback,
                        next: null,
                    }),
                        y === null ? ((p = y = x), (s = w)) : (y = y.next = x),
                        (i |= h);
                if (((o = o.next), o === null)) {
                    if (((o = l.shared.pending), o === null)) break;
                    (h = o),
                        (o = h.next),
                        (h.next = null),
                        (l.lastBaseUpdate = h),
                        (l.shared.pending = null);
                }
            } while (!0);
            if (
                (y === null && (s = w),
                (l.baseState = s),
                (l.firstBaseUpdate = p),
                (l.lastBaseUpdate = y),
                (t = l.shared.interleaved),
                t !== null)
            ) {
                l = t;
                do (i |= l.lane), (l = l.next);
                while (l !== t);
            } else u === null && (l.shared.lanes = 0);
            (rn |= i), (e.lanes = i), (e.memoizedState = w);
        }
    }
    function ms(e, t, n) {
        if (((e = t.effects), (t.effects = null), e !== null))
            for (t = 0; t < e.length; t++) {
                var r = e[t],
                    l = r.callback;
                if (l !== null) {
                    if (((r.callback = null), (r = n), typeof l != "function"))
                        throw Error(m(191, l));
                    l.call(r);
                }
            }
    }
    var ir = {},
        mt = Mt(ir),
        or = Mt(ir),
        sr = Mt(ir);
    function tn(e) {
        if (e === ir) throw Error(m(174));
        return e;
    }
    function Du(e, t) {
        switch ((ee(sr, t), ee(or, e), ee(mt, ir), (e = t.nodeType), e)) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : Ml(null, "");
                break;
            default:
                (e = e === 8 ? t.parentNode : t),
                    (t = e.namespaceURI || null),
                    (e = e.tagName),
                    (t = Ml(t, e));
        }
        ne(mt), ee(mt, t);
    }
    function zn() {
        ne(mt), ne(or), ne(sr);
    }
    function hs(e) {
        tn(sr.current);
        var t = tn(mt.current),
            n = Ml(t, e.type);
        t !== n && (ee(or, e), ee(mt, n));
    }
    function Mu(e) {
        or.current === e && (ne(mt), ne(or));
    }
    var ue = Mt(0);
    function rl(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (
                    n !== null &&
                    ((n = n.dehydrated),
                    n === null || n.data === "$?" || n.data === "$!")
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
    var Fu = [];
    function Uu() {
        for (var e = 0; e < Fu.length; e++)
            Fu[e]._workInProgressVersionPrimary = null;
        Fu.length = 0;
    }
    var ll = xe.ReactCurrentDispatcher,
        Au = xe.ReactCurrentBatchConfig,
        nn = 0,
        ie = null,
        pe = null,
        ye = null,
        ul = !1,
        ar = !1,
        fr = 0,
        oc = 0;
    function Ce() {
        throw Error(m(321));
    }
    function Vu(e, t) {
        if (t === null) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!rt(e[n], t[n])) return !1;
        return !0;
    }
    function Bu(e, t, n, r, l, u) {
        if (
            ((nn = u),
            (ie = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (ll.current = e === null || e.memoizedState === null ? cc : dc),
            (e = n(r, l)),
            ar)
        ) {
            u = 0;
            do {
                if (((ar = !1), (fr = 0), 25 <= u)) throw Error(m(301));
                (u += 1),
                    (ye = pe = null),
                    (t.updateQueue = null),
                    (ll.current = pc),
                    (e = n(r, l));
            } while (ar);
        }
        if (
            ((ll.current = sl),
            (t = pe !== null && pe.next !== null),
            (nn = 0),
            (ye = pe = ie = null),
            (ul = !1),
            t)
        )
            throw Error(m(300));
        return e;
    }
    function $u() {
        var e = fr !== 0;
        return (fr = 0), e;
    }
    function ht() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
        };
        return (
            ye === null ? (ie.memoizedState = ye = e) : (ye = ye.next = e), ye
        );
    }
    function Je() {
        if (pe === null) {
            var e = ie.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = pe.next;
        var t = ye === null ? ie.memoizedState : ye.next;
        if (t !== null) (ye = t), (pe = e);
        else {
            if (e === null) throw Error(m(310));
            (pe = e),
                (e = {
                    memoizedState: pe.memoizedState,
                    baseState: pe.baseState,
                    baseQueue: pe.baseQueue,
                    queue: pe.queue,
                    next: null,
                }),
                ye === null ? (ie.memoizedState = ye = e) : (ye = ye.next = e);
        }
        return ye;
    }
    function cr(e, t) {
        return typeof t == "function" ? t(e) : t;
    }
    function Hu(e) {
        var t = Je(),
            n = t.queue;
        if (n === null) throw Error(m(311));
        n.lastRenderedReducer = e;
        var r = pe,
            l = r.baseQueue,
            u = n.pending;
        if (u !== null) {
            if (l !== null) {
                var i = l.next;
                (l.next = u.next), (u.next = i);
            }
            (r.baseQueue = l = u), (n.pending = null);
        }
        if (l !== null) {
            (u = l.next), (r = r.baseState);
            var o = (i = null),
                s = null,
                p = u;
            do {
                var y = p.lane;
                if ((nn & y) === y)
                    s !== null &&
                        (s = s.next =
                            {
                                lane: 0,
                                action: p.action,
                                hasEagerState: p.hasEagerState,
                                eagerState: p.eagerState,
                                next: null,
                            }),
                        (r = p.hasEagerState ? p.eagerState : e(r, p.action));
                else {
                    var w = {
                        lane: y,
                        action: p.action,
                        hasEagerState: p.hasEagerState,
                        eagerState: p.eagerState,
                        next: null,
                    };
                    s === null ? ((o = s = w), (i = r)) : (s = s.next = w),
                        (ie.lanes |= y),
                        (rn |= y);
                }
                p = p.next;
            } while (p !== null && p !== u);
            s === null ? (i = r) : (s.next = o),
                rt(r, t.memoizedState) || (Me = !0),
                (t.memoizedState = r),
                (t.baseState = i),
                (t.baseQueue = s),
                (n.lastRenderedState = r);
        }
        if (((e = n.interleaved), e !== null)) {
            l = e;
            do (u = l.lane), (ie.lanes |= u), (rn |= u), (l = l.next);
            while (l !== e);
        } else l === null && (n.lanes = 0);
        return [t.memoizedState, n.dispatch];
    }
    function Wu(e) {
        var t = Je(),
            n = t.queue;
        if (n === null) throw Error(m(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
            l = n.pending,
            u = t.memoizedState;
        if (l !== null) {
            n.pending = null;
            var i = (l = l.next);
            do (u = e(u, i.action)), (i = i.next);
            while (i !== l);
            rt(u, t.memoizedState) || (Me = !0),
                (t.memoizedState = u),
                t.baseQueue === null && (t.baseState = u),
                (n.lastRenderedState = u);
        }
        return [u, r];
    }
    function vs() {}
    function ys(e, t) {
        var n = ie,
            r = Je(),
            l = t(),
            u = !rt(r.memoizedState, l);
        if (
            (u && ((r.memoizedState = l), (Me = !0)),
            (r = r.queue),
            Qu(Ss.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
                u ||
                (ye !== null && ye.memoizedState.tag & 1))
        ) {
            if (
                ((n.flags |= 2048),
                dr(9, ws.bind(null, n, r, l, t), void 0, null),
                ge === null)
            )
                throw Error(m(349));
            nn & 30 || gs(n, t, l);
        }
        return l;
    }
    function gs(e, t, n) {
        (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            (t = ie.updateQueue),
            t === null
                ? ((t = { lastEffect: null, stores: null }),
                  (ie.updateQueue = t),
                  (t.stores = [e]))
                : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
    }
    function ws(e, t, n, r) {
        (t.value = n), (t.getSnapshot = r), ks(t) && Es(e);
    }
    function Ss(e, t, n) {
        return n(function () {
            ks(t) && Es(e);
        });
    }
    function ks(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !rt(e, n);
        } catch {
            return !0;
        }
    }
    function Es(e) {
        var t = xt(e, 1);
        t !== null && st(t, e, 1, -1);
    }
    function xs(e) {
        var t = ht();
        return (
            typeof e == "function" && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: cr,
                lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = fc.bind(null, ie, e)),
            [t.memoizedState, e]
        );
    }
    function dr(e, t, n, r) {
        return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            (t = ie.updateQueue),
            t === null
                ? ((t = { lastEffect: null, stores: null }),
                  (ie.updateQueue = t),
                  (t.lastEffect = e.next = e))
                : ((n = t.lastEffect),
                  n === null
                      ? (t.lastEffect = e.next = e)
                      : ((r = n.next),
                        (n.next = e),
                        (e.next = r),
                        (t.lastEffect = e))),
            e
        );
    }
    function _s() {
        return Je().memoizedState;
    }
    function il(e, t, n, r) {
        var l = ht();
        (ie.flags |= e),
            (l.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r));
    }
    function ol(e, t, n, r) {
        var l = Je();
        r = r === void 0 ? null : r;
        var u = void 0;
        if (pe !== null) {
            var i = pe.memoizedState;
            if (((u = i.destroy), r !== null && Vu(r, i.deps))) {
                l.memoizedState = dr(t, n, u, r);
                return;
            }
        }
        (ie.flags |= e), (l.memoizedState = dr(1 | t, n, u, r));
    }
    function Cs(e, t) {
        return il(8390656, 8, e, t);
    }
    function Qu(e, t) {
        return ol(2048, 8, e, t);
    }
    function Ns(e, t) {
        return ol(4, 2, e, t);
    }
    function Ps(e, t) {
        return ol(4, 4, e, t);
    }
    function zs(e, t) {
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
    function Ts(e, t, n) {
        return (
            (n = n != null ? n.concat([e]) : null),
            ol(4, 4, zs.bind(null, t, e), n)
        );
    }
    function Ku() {}
    function Ls(e, t) {
        var n = Je();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && Vu(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
    }
    function Rs(e, t) {
        var n = Je();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && Vu(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
    }
    function js(e, t, n) {
        return nn & 21
            ? (rt(n, t) ||
                  ((n = oo()), (ie.lanes |= n), (rn |= n), (e.baseState = !0)),
              t)
            : (e.baseState && ((e.baseState = !1), (Me = !0)),
              (e.memoizedState = n));
    }
    function sc(e, t) {
        var n = J;
        (J = n !== 0 && 4 > n ? n : 4), e(!0);
        var r = Au.transition;
        Au.transition = {};
        try {
            e(!1), t();
        } finally {
            (J = n), (Au.transition = r);
        }
    }
    function Is() {
        return Je().memoizedState;
    }
    function ac(e, t, n) {
        var r = Wt(e);
        if (
            ((n = {
                lane: r,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null,
            }),
            Os(e))
        )
            Ds(t, n);
        else if (((n = cs(e, t, n, r)), n !== null)) {
            var l = Le();
            st(n, e, r, l), Ms(n, t, r);
        }
    }
    function fc(e, t, n) {
        var r = Wt(e),
            l = {
                lane: r,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null,
            };
        if (Os(e)) Ds(t, l);
        else {
            var u = e.alternate;
            if (
                e.lanes === 0 &&
                (u === null || u.lanes === 0) &&
                ((u = t.lastRenderedReducer), u !== null)
            )
                try {
                    var i = t.lastRenderedState,
                        o = u(i, n);
                    if (
                        ((l.hasEagerState = !0), (l.eagerState = o), rt(o, i))
                    ) {
                        var s = t.interleaved;
                        s === null
                            ? ((l.next = l), Iu(t))
                            : ((l.next = s.next), (s.next = l)),
                            (t.interleaved = l);
                        return;
                    }
                } catch {
                } finally {
                }
            (n = cs(e, t, l, r)),
                n !== null && ((l = Le()), st(n, e, r, l), Ms(n, t, r));
        }
    }
    function Os(e) {
        var t = e.alternate;
        return e === ie || (t !== null && t === ie);
    }
    function Ds(e, t) {
        ar = ul = !0;
        var n = e.pending;
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
    }
    function Ms(e, t, n) {
        if (n & 4194240) {
            var r = t.lanes;
            (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n);
        }
    }
    var sl = {
            readContext: Ge,
            useCallback: Ce,
            useContext: Ce,
            useEffect: Ce,
            useImperativeHandle: Ce,
            useInsertionEffect: Ce,
            useLayoutEffect: Ce,
            useMemo: Ce,
            useReducer: Ce,
            useRef: Ce,
            useState: Ce,
            useDebugValue: Ce,
            useDeferredValue: Ce,
            useTransition: Ce,
            useMutableSource: Ce,
            useSyncExternalStore: Ce,
            useId: Ce,
            unstable_isNewReconciler: !1,
        },
        cc = {
            readContext: Ge,
            useCallback: function (e, t) {
                return (ht().memoizedState = [e, t === void 0 ? null : t]), e;
            },
            useContext: Ge,
            useEffect: Cs,
            useImperativeHandle: function (e, t, n) {
                return (
                    (n = n != null ? n.concat([e]) : null),
                    il(4194308, 4, zs.bind(null, t, e), n)
                );
            },
            useLayoutEffect: function (e, t) {
                return il(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
                return il(4, 2, e, t);
            },
            useMemo: function (e, t) {
                var n = ht();
                return (
                    (t = t === void 0 ? null : t),
                    (e = e()),
                    (n.memoizedState = [e, t]),
                    e
                );
            },
            useReducer: function (e, t, n) {
                var r = ht();
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
                    (e = e.dispatch = ac.bind(null, ie, e)),
                    [r.memoizedState, e]
                );
            },
            useRef: function (e) {
                var t = ht();
                return (e = { current: e }), (t.memoizedState = e);
            },
            useState: xs,
            useDebugValue: Ku,
            useDeferredValue: function (e) {
                return (ht().memoizedState = e);
            },
            useTransition: function () {
                var e = xs(!1),
                    t = e[0];
                return (
                    (e = sc.bind(null, e[1])), (ht().memoizedState = e), [t, e]
                );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
                var r = ie,
                    l = ht();
                if (le) {
                    if (n === void 0) throw Error(m(407));
                    n = n();
                } else {
                    if (((n = t()), ge === null)) throw Error(m(349));
                    nn & 30 || gs(r, t, n);
                }
                l.memoizedState = n;
                var u = { value: n, getSnapshot: t };
                return (
                    (l.queue = u),
                    Cs(Ss.bind(null, r, u, e), [e]),
                    (r.flags |= 2048),
                    dr(9, ws.bind(null, r, u, n, t), void 0, null),
                    n
                );
            },
            useId: function () {
                var e = ht(),
                    t = ge.identifierPrefix;
                if (le) {
                    var n = Et,
                        r = kt;
                    (n = (r & ~(1 << (32 - nt(r) - 1))).toString(32) + n),
                        (t = ":" + t + "R" + n),
                        (n = fr++),
                        0 < n && (t += "H" + n.toString(32)),
                        (t += ":");
                } else (n = oc++), (t = ":" + t + "r" + n.toString(32) + ":");
                return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
        },
        dc = {
            readContext: Ge,
            useCallback: Ls,
            useContext: Ge,
            useEffect: Qu,
            useImperativeHandle: Ts,
            useInsertionEffect: Ns,
            useLayoutEffect: Ps,
            useMemo: Rs,
            useReducer: Hu,
            useRef: _s,
            useState: function () {
                return Hu(cr);
            },
            useDebugValue: Ku,
            useDeferredValue: function (e) {
                var t = Je();
                return js(t, pe.memoizedState, e);
            },
            useTransition: function () {
                var e = Hu(cr)[0],
                    t = Je().memoizedState;
                return [e, t];
            },
            useMutableSource: vs,
            useSyncExternalStore: ys,
            useId: Is,
            unstable_isNewReconciler: !1,
        },
        pc = {
            readContext: Ge,
            useCallback: Ls,
            useContext: Ge,
            useEffect: Qu,
            useImperativeHandle: Ts,
            useInsertionEffect: Ns,
            useLayoutEffect: Ps,
            useMemo: Rs,
            useReducer: Wu,
            useRef: _s,
            useState: function () {
                return Wu(cr);
            },
            useDebugValue: Ku,
            useDeferredValue: function (e) {
                var t = Je();
                return pe === null
                    ? (t.memoizedState = e)
                    : js(t, pe.memoizedState, e);
            },
            useTransition: function () {
                var e = Wu(cr)[0],
                    t = Je().memoizedState;
                return [e, t];
            },
            useMutableSource: vs,
            useSyncExternalStore: ys,
            useId: Is,
            unstable_isNewReconciler: !1,
        };
    function ut(e, t) {
        if (e && e.defaultProps) {
            (t = C({}, t)), (e = e.defaultProps);
            for (var n in e) t[n] === void 0 && (t[n] = e[n]);
            return t;
        }
        return t;
    }
    function Yu(e, t, n, r) {
        (t = e.memoizedState),
            (n = n(r, t)),
            (n = n == null ? t : C({}, t, n)),
            (e.memoizedState = n),
            e.lanes === 0 && (e.updateQueue.baseState = n);
    }
    var al = {
        isMounted: function (e) {
            return (e = e._reactInternals) ? Gt(e) === e : !1;
        },
        enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = Le(),
                l = Wt(e),
                u = _t(r, l);
            (u.payload = t),
                n != null && (u.callback = n),
                (t = Vt(e, u, l)),
                t !== null && (st(t, e, l, r), tl(t, e, l));
        },
        enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = Le(),
                l = Wt(e),
                u = _t(r, l);
            (u.tag = 1),
                (u.payload = t),
                n != null && (u.callback = n),
                (t = Vt(e, u, l)),
                t !== null && (st(t, e, l, r), tl(t, e, l));
        },
        enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Le(),
                r = Wt(e),
                l = _t(n, r);
            (l.tag = 2),
                t != null && (l.callback = t),
                (t = Vt(e, l, r)),
                t !== null && (st(t, e, r, n), tl(t, e, r));
        },
    };
    function Fs(e, t, n, r, l, u, i) {
        return (
            (e = e.stateNode),
            typeof e.shouldComponentUpdate == "function"
                ? e.shouldComponentUpdate(r, u, i)
                : t.prototype && t.prototype.isPureReactComponent
                ? !qn(n, r) || !qn(l, u)
                : !0
        );
    }
    function Us(e, t, n) {
        var r = !1,
            l = Ft,
            u = t.contextType;
        return (
            typeof u == "object" && u !== null
                ? (u = Ge(u))
                : ((l = De(t) ? Zt : _e.current),
                  (r = t.contextTypes),
                  (u = (r = r != null) ? kn(e, l) : Ft)),
            (t = new t(n, u)),
            (e.memoizedState =
                t.state !== null && t.state !== void 0 ? t.state : null),
            (t.updater = al),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
                ((e = e.stateNode),
                (e.__reactInternalMemoizedUnmaskedChildContext = l),
                (e.__reactInternalMemoizedMaskedChildContext = u)),
            t
        );
    }
    function As(e, t, n, r) {
        (e = t.state),
            typeof t.componentWillReceiveProps == "function" &&
                t.componentWillReceiveProps(n, r),
            typeof t.UNSAFE_componentWillReceiveProps == "function" &&
                t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && al.enqueueReplaceState(t, t.state, null);
    }
    function Xu(e, t, n, r) {
        var l = e.stateNode;
        (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ou(e);
        var u = t.contextType;
        typeof u == "object" && u !== null
            ? (l.context = Ge(u))
            : ((u = De(t) ? Zt : _e.current), (l.context = kn(e, u))),
            (l.state = e.memoizedState),
            (u = t.getDerivedStateFromProps),
            typeof u == "function" &&
                (Yu(e, t, u, n), (l.state = e.memoizedState)),
            typeof t.getDerivedStateFromProps == "function" ||
                typeof l.getSnapshotBeforeUpdate == "function" ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                    typeof l.componentWillMount != "function") ||
                ((t = l.state),
                typeof l.componentWillMount == "function" &&
                    l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                    l.UNSAFE_componentWillMount(),
                t !== l.state && al.enqueueReplaceState(l, l.state, null),
                nl(e, n, l, r),
                (l.state = e.memoizedState)),
            typeof l.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function Tn(e, t) {
        try {
            var n = "",
                r = t;
            do (n += W(r)), (r = r.return);
            while (r);
            var l = n;
        } catch (u) {
            l =
                `
Error generating stack: ` +
                u.message +
                `
` +
                u.stack;
        }
        return { value: e, source: t, stack: l, digest: null };
    }
    function Gu(e, t, n) {
        return { value: e, source: null, stack: n ?? null, digest: t ?? null };
    }
    function Ju(e, t) {
        try {
            console.error(t.value);
        } catch (n) {
            setTimeout(function () {
                throw n;
            });
        }
    }
    var mc = typeof WeakMap == "function" ? WeakMap : Map;
    function Vs(e, t, n) {
        (n = _t(-1, n)), (n.tag = 3), (n.payload = { element: null });
        var r = t.value;
        return (
            (n.callback = function () {
                vl || ((vl = !0), (ci = r)), Ju(e, t);
            }),
            n
        );
    }
    function Bs(e, t, n) {
        (n = _t(-1, n)), (n.tag = 3);
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var l = t.value;
            (n.payload = function () {
                return r(l);
            }),
                (n.callback = function () {
                    Ju(e, t);
                });
        }
        var u = e.stateNode;
        return (
            u !== null &&
                typeof u.componentDidCatch == "function" &&
                (n.callback = function () {
                    Ju(e, t),
                        typeof r != "function" &&
                            ($t === null
                                ? ($t = new Set([this]))
                                : $t.add(this));
                    var i = t.stack;
                    this.componentDidCatch(t.value, {
                        componentStack: i !== null ? i : "",
                    });
                }),
            n
        );
    }
    function $s(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new mc();
            var l = new Set();
            r.set(t, l);
        } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
        l.has(n) || (l.add(n), (e = zc.bind(null, e, t, n)), t.then(e, e));
    }
    function Hs(e) {
        do {
            var t;
            if (
                ((t = e.tag === 13) &&
                    ((t = e.memoizedState),
                    (t = t !== null ? t.dehydrated !== null : !0)),
                t)
            )
                return e;
            e = e.return;
        } while (e !== null);
        return null;
    }
    function Ws(e, t, n, r, l) {
        return e.mode & 1
            ? ((e.flags |= 65536), (e.lanes = l), e)
            : (e === t
                  ? (e.flags |= 65536)
                  : ((e.flags |= 128),
                    (n.flags |= 131072),
                    (n.flags &= -52805),
                    n.tag === 1 &&
                        (n.alternate === null
                            ? (n.tag = 17)
                            : ((t = _t(-1, 1)), (t.tag = 2), Vt(n, t, 1))),
                    (n.lanes |= 1)),
              e);
    }
    var hc = xe.ReactCurrentOwner,
        Me = !1;
    function Te(e, t, n, r) {
        t.child = e === null ? fs(t, null, n, r) : Cn(t, e.child, n, r);
    }
    function Qs(e, t, n, r, l) {
        n = n.render;
        var u = t.ref;
        return (
            Pn(t, l),
            (r = Bu(e, t, n, r, u, l)),
            (n = $u()),
            e !== null && !Me
                ? ((t.updateQueue = e.updateQueue),
                  (t.flags &= -2053),
                  (e.lanes &= ~l),
                  Ct(e, t, l))
                : (le && n && _u(t), (t.flags |= 1), Te(e, t, r, l), t.child)
        );
    }
    function Ks(e, t, n, r, l) {
        if (e === null) {
            var u = n.type;
            return typeof u == "function" &&
                !gi(u) &&
                u.defaultProps === void 0 &&
                n.compare === null &&
                n.defaultProps === void 0
                ? ((t.tag = 15), (t.type = u), Ys(e, t, u, r, l))
                : ((e = El(n.type, null, r, t, t.mode, l)),
                  (e.ref = t.ref),
                  (e.return = t),
                  (t.child = e));
        }
        if (((u = e.child), !(e.lanes & l))) {
            var i = u.memoizedProps;
            if (
                ((n = n.compare),
                (n = n !== null ? n : qn),
                n(i, r) && e.ref === t.ref)
            )
                return Ct(e, t, l);
        }
        return (
            (t.flags |= 1),
            (e = Kt(u, r)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e)
        );
    }
    function Ys(e, t, n, r, l) {
        if (e !== null) {
            var u = e.memoizedProps;
            if (qn(u, r) && e.ref === t.ref)
                if (((Me = !1), (t.pendingProps = r = u), (e.lanes & l) !== 0))
                    e.flags & 131072 && (Me = !0);
                else return (t.lanes = e.lanes), Ct(e, t, l);
        }
        return Zu(e, t, n, r, l);
    }
    function Xs(e, t, n) {
        var r = t.pendingProps,
            l = r.children,
            u = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden")
            if (!(t.mode & 1))
                (t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null,
                }),
                    ee(Rn, Qe),
                    (Qe |= n);
            else {
                if (!(n & 1073741824))
                    return (
                        (e = u !== null ? u.baseLanes | n : n),
                        (t.lanes = t.childLanes = 1073741824),
                        (t.memoizedState = {
                            baseLanes: e,
                            cachePool: null,
                            transitions: null,
                        }),
                        (t.updateQueue = null),
                        ee(Rn, Qe),
                        (Qe |= e),
                        null
                    );
                (t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null,
                }),
                    (r = u !== null ? u.baseLanes : n),
                    ee(Rn, Qe),
                    (Qe |= r);
            }
        else
            u !== null
                ? ((r = u.baseLanes | n), (t.memoizedState = null))
                : (r = n),
                ee(Rn, Qe),
                (Qe |= r);
        return Te(e, t, l, n), t.child;
    }
    function Gs(e, t) {
        var n = t.ref;
        ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
    }
    function Zu(e, t, n, r, l) {
        var u = De(n) ? Zt : _e.current;
        return (
            (u = kn(t, u)),
            Pn(t, l),
            (n = Bu(e, t, n, r, u, l)),
            (r = $u()),
            e !== null && !Me
                ? ((t.updateQueue = e.updateQueue),
                  (t.flags &= -2053),
                  (e.lanes &= ~l),
                  Ct(e, t, l))
                : (le && r && _u(t), (t.flags |= 1), Te(e, t, n, l), t.child)
        );
    }
    function Js(e, t, n, r, l) {
        if (De(n)) {
            var u = !0;
            Yr(t);
        } else u = !1;
        if ((Pn(t, l), t.stateNode === null))
            cl(e, t), Us(t, n, r), Xu(t, n, r, l), (r = !0);
        else if (e === null) {
            var i = t.stateNode,
                o = t.memoizedProps;
            i.props = o;
            var s = i.context,
                p = n.contextType;
            typeof p == "object" && p !== null
                ? (p = Ge(p))
                : ((p = De(n) ? Zt : _e.current), (p = kn(t, p)));
            var y = n.getDerivedStateFromProps,
                w =
                    typeof y == "function" ||
                    typeof i.getSnapshotBeforeUpdate == "function";
            w ||
                (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
                    typeof i.componentWillReceiveProps != "function") ||
                ((o !== r || s !== p) && As(t, i, r, p)),
                (At = !1);
            var h = t.memoizedState;
            (i.state = h),
                nl(t, r, i, l),
                (s = t.memoizedState),
                o !== r || h !== s || Oe.current || At
                    ? (typeof y == "function" &&
                          (Yu(t, n, y, r), (s = t.memoizedState)),
                      (o = At || Fs(t, n, o, r, h, s, p))
                          ? (w ||
                                (typeof i.UNSAFE_componentWillMount !=
                                    "function" &&
                                    typeof i.componentWillMount !=
                                        "function") ||
                                (typeof i.componentWillMount == "function" &&
                                    i.componentWillMount(),
                                typeof i.UNSAFE_componentWillMount ==
                                    "function" &&
                                    i.UNSAFE_componentWillMount()),
                            typeof i.componentDidMount == "function" &&
                                (t.flags |= 4194308))
                          : (typeof i.componentDidMount == "function" &&
                                (t.flags |= 4194308),
                            (t.memoizedProps = r),
                            (t.memoizedState = s)),
                      (i.props = r),
                      (i.state = s),
                      (i.context = p),
                      (r = o))
                    : (typeof i.componentDidMount == "function" &&
                          (t.flags |= 4194308),
                      (r = !1));
        } else {
            (i = t.stateNode),
                ds(e, t),
                (o = t.memoizedProps),
                (p = t.type === t.elementType ? o : ut(t.type, o)),
                (i.props = p),
                (w = t.pendingProps),
                (h = i.context),
                (s = n.contextType),
                typeof s == "object" && s !== null
                    ? (s = Ge(s))
                    : ((s = De(n) ? Zt : _e.current), (s = kn(t, s)));
            var x = n.getDerivedStateFromProps;
            (y =
                typeof x == "function" ||
                typeof i.getSnapshotBeforeUpdate == "function") ||
                (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
                    typeof i.componentWillReceiveProps != "function") ||
                ((o !== w || h !== s) && As(t, i, r, s)),
                (At = !1),
                (h = t.memoizedState),
                (i.state = h),
                nl(t, r, i, l);
            var P = t.memoizedState;
            o !== w || h !== P || Oe.current || At
                ? (typeof x == "function" &&
                      (Yu(t, n, x, r), (P = t.memoizedState)),
                  (p = At || Fs(t, n, p, r, h, P, s) || !1)
                      ? (y ||
                            (typeof i.UNSAFE_componentWillUpdate !=
                                "function" &&
                                typeof i.componentWillUpdate != "function") ||
                            (typeof i.componentWillUpdate == "function" &&
                                i.componentWillUpdate(r, P, s),
                            typeof i.UNSAFE_componentWillUpdate == "function" &&
                                i.UNSAFE_componentWillUpdate(r, P, s)),
                        typeof i.componentDidUpdate == "function" &&
                            (t.flags |= 4),
                        typeof i.getSnapshotBeforeUpdate == "function" &&
                            (t.flags |= 1024))
                      : (typeof i.componentDidUpdate != "function" ||
                            (o === e.memoizedProps && h === e.memoizedState) ||
                            (t.flags |= 4),
                        typeof i.getSnapshotBeforeUpdate != "function" ||
                            (o === e.memoizedProps && h === e.memoizedState) ||
                            (t.flags |= 1024),
                        (t.memoizedProps = r),
                        (t.memoizedState = P)),
                  (i.props = r),
                  (i.state = P),
                  (i.context = s),
                  (r = p))
                : (typeof i.componentDidUpdate != "function" ||
                      (o === e.memoizedProps && h === e.memoizedState) ||
                      (t.flags |= 4),
                  typeof i.getSnapshotBeforeUpdate != "function" ||
                      (o === e.memoizedProps && h === e.memoizedState) ||
                      (t.flags |= 1024),
                  (r = !1));
        }
        return qu(e, t, n, r, u, l);
    }
    function qu(e, t, n, r, l, u) {
        Gs(e, t);
        var i = (t.flags & 128) !== 0;
        if (!r && !i) return l && ts(t, n, !1), Ct(e, t, u);
        (r = t.stateNode), (hc.current = t);
        var o =
            i && typeof n.getDerivedStateFromError != "function"
                ? null
                : r.render();
        return (
            (t.flags |= 1),
            e !== null && i
                ? ((t.child = Cn(t, e.child, null, u)),
                  (t.child = Cn(t, null, o, u)))
                : Te(e, t, o, u),
            (t.memoizedState = r.state),
            l && ts(t, n, !0),
            t.child
        );
    }
    function Zs(e) {
        var t = e.stateNode;
        t.pendingContext
            ? bo(e, t.pendingContext, t.pendingContext !== t.context)
            : t.context && bo(e, t.context, !1),
            Du(e, t.containerInfo);
    }
    function qs(e, t, n, r, l) {
        return _n(), zu(l), (t.flags |= 256), Te(e, t, n, r), t.child;
    }
    var bu = { dehydrated: null, treeContext: null, retryLane: 0 };
    function ei(e) {
        return { baseLanes: e, cachePool: null, transitions: null };
    }
    function bs(e, t, n) {
        var r = t.pendingProps,
            l = ue.current,
            u = !1,
            i = (t.flags & 128) !== 0,
            o;
        if (
            ((o = i) ||
                (o =
                    e !== null && e.memoizedState === null
                        ? !1
                        : (l & 2) !== 0),
            o
                ? ((u = !0), (t.flags &= -129))
                : (e === null || e.memoizedState !== null) && (l |= 1),
            ee(ue, l & 1),
            e === null)
        )
            return (
                Pu(t),
                (e = t.memoizedState),
                e !== null && ((e = e.dehydrated), e !== null)
                    ? (t.mode & 1
                          ? e.data === "$!"
                              ? (t.lanes = 8)
                              : (t.lanes = 1073741824)
                          : (t.lanes = 1),
                      null)
                    : ((i = r.children),
                      (e = r.fallback),
                      u
                          ? ((r = t.mode),
                            (u = t.child),
                            (i = { mode: "hidden", children: i }),
                            !(r & 1) && u !== null
                                ? ((u.childLanes = 0), (u.pendingProps = i))
                                : (u = xl(i, r, 0, null)),
                            (e = sn(e, r, n, null)),
                            (u.return = t),
                            (e.return = t),
                            (u.sibling = e),
                            (t.child = u),
                            (t.child.memoizedState = ei(n)),
                            (t.memoizedState = bu),
                            e)
                          : ti(t, i))
            );
        if (
            ((l = e.memoizedState),
            l !== null && ((o = l.dehydrated), o !== null))
        )
            return vc(e, t, i, r, o, l, n);
        if (u) {
            (u = r.fallback), (i = t.mode), (l = e.child), (o = l.sibling);
            var s = { mode: "hidden", children: r.children };
            return (
                !(i & 1) && t.child !== l
                    ? ((r = t.child),
                      (r.childLanes = 0),
                      (r.pendingProps = s),
                      (t.deletions = null))
                    : ((r = Kt(l, s)),
                      (r.subtreeFlags = l.subtreeFlags & 14680064)),
                o !== null
                    ? (u = Kt(o, u))
                    : ((u = sn(u, i, n, null)), (u.flags |= 2)),
                (u.return = t),
                (r.return = t),
                (r.sibling = u),
                (t.child = r),
                (r = u),
                (u = t.child),
                (i = e.child.memoizedState),
                (i =
                    i === null
                        ? ei(n)
                        : {
                              baseLanes: i.baseLanes | n,
                              cachePool: null,
                              transitions: i.transitions,
                          }),
                (u.memoizedState = i),
                (u.childLanes = e.childLanes & ~n),
                (t.memoizedState = bu),
                r
            );
        }
        return (
            (u = e.child),
            (e = u.sibling),
            (r = Kt(u, { mode: "visible", children: r.children })),
            !(t.mode & 1) && (r.lanes = n),
            (r.return = t),
            (r.sibling = null),
            e !== null &&
                ((n = t.deletions),
                n === null
                    ? ((t.deletions = [e]), (t.flags |= 16))
                    : n.push(e)),
            (t.child = r),
            (t.memoizedState = null),
            r
        );
    }
    function ti(e, t) {
        return (
            (t = xl({ mode: "visible", children: t }, e.mode, 0, null)),
            (t.return = e),
            (e.child = t)
        );
    }
    function fl(e, t, n, r) {
        return (
            r !== null && zu(r),
            Cn(t, e.child, null, n),
            (e = ti(t, t.pendingProps.children)),
            (e.flags |= 2),
            (t.memoizedState = null),
            e
        );
    }
    function vc(e, t, n, r, l, u, i) {
        if (n)
            return t.flags & 256
                ? ((t.flags &= -257), (r = Gu(Error(m(422)))), fl(e, t, i, r))
                : t.memoizedState !== null
                ? ((t.child = e.child), (t.flags |= 128), null)
                : ((u = r.fallback),
                  (l = t.mode),
                  (r = xl(
                      { mode: "visible", children: r.children },
                      l,
                      0,
                      null
                  )),
                  (u = sn(u, l, i, null)),
                  (u.flags |= 2),
                  (r.return = t),
                  (u.return = t),
                  (r.sibling = u),
                  (t.child = r),
                  t.mode & 1 && Cn(t, e.child, null, i),
                  (t.child.memoizedState = ei(i)),
                  (t.memoizedState = bu),
                  u);
        if (!(t.mode & 1)) return fl(e, t, i, null);
        if (l.data === "$!") {
            if (((r = l.nextSibling && l.nextSibling.dataset), r))
                var o = r.dgst;
            return (
                (r = o),
                (u = Error(m(419))),
                (r = Gu(u, r, void 0)),
                fl(e, t, i, r)
            );
        }
        if (((o = (i & e.childLanes) !== 0), Me || o)) {
            if (((r = ge), r !== null)) {
                switch (i & -i) {
                    case 4:
                        l = 2;
                        break;
                    case 16:
                        l = 8;
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
                        l = 32;
                        break;
                    case 536870912:
                        l = 268435456;
                        break;
                    default:
                        l = 0;
                }
                (l = l & (r.suspendedLanes | i) ? 0 : l),
                    l !== 0 &&
                        l !== u.retryLane &&
                        ((u.retryLane = l), xt(e, l), st(r, e, l, -1));
            }
            return yi(), (r = Gu(Error(m(421)))), fl(e, t, i, r);
        }
        return l.data === "$?"
            ? ((t.flags |= 128),
              (t.child = e.child),
              (t = Tc.bind(null, e)),
              (l._reactRetry = t),
              null)
            : ((e = u.treeContext),
              (We = Dt(l.nextSibling)),
              (He = t),
              (le = !0),
              (lt = null),
              e !== null &&
                  ((Ye[Xe++] = kt),
                  (Ye[Xe++] = Et),
                  (Ye[Xe++] = qt),
                  (kt = e.id),
                  (Et = e.overflow),
                  (qt = t)),
              (t = ti(t, r.children)),
              (t.flags |= 4096),
              t);
    }
    function ea(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), ju(e.return, t, n);
    }
    function ni(e, t, n, r, l) {
        var u = e.memoizedState;
        u === null
            ? (e.memoizedState = {
                  isBackwards: t,
                  rendering: null,
                  renderingStartTime: 0,
                  last: r,
                  tail: n,
                  tailMode: l,
              })
            : ((u.isBackwards = t),
              (u.rendering = null),
              (u.renderingStartTime = 0),
              (u.last = r),
              (u.tail = n),
              (u.tailMode = l));
    }
    function ta(e, t, n) {
        var r = t.pendingProps,
            l = r.revealOrder,
            u = r.tail;
        if ((Te(e, t, r.children, n), (r = ue.current), r & 2))
            (r = (r & 1) | 2), (t.flags |= 128);
        else {
            if (e !== null && e.flags & 128)
                e: for (e = t.child; e !== null; ) {
                    if (e.tag === 13) e.memoizedState !== null && ea(e, n, t);
                    else if (e.tag === 19) ea(e, n, t);
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
        if ((ee(ue, r), !(t.mode & 1))) t.memoizedState = null;
        else
            switch (l) {
                case "forwards":
                    for (n = t.child, l = null; n !== null; )
                        (e = n.alternate),
                            e !== null && rl(e) === null && (l = n),
                            (n = n.sibling);
                    (n = l),
                        n === null
                            ? ((l = t.child), (t.child = null))
                            : ((l = n.sibling), (n.sibling = null)),
                        ni(t, !1, l, n, u);
                    break;
                case "backwards":
                    for (n = null, l = t.child, t.child = null; l !== null; ) {
                        if (((e = l.alternate), e !== null && rl(e) === null)) {
                            t.child = l;
                            break;
                        }
                        (e = l.sibling), (l.sibling = n), (n = l), (l = e);
                    }
                    ni(t, !0, n, null, u);
                    break;
                case "together":
                    ni(t, !1, null, null, void 0);
                    break;
                default:
                    t.memoizedState = null;
            }
        return t.child;
    }
    function cl(e, t) {
        !(t.mode & 1) &&
            e !== null &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
    }
    function Ct(e, t, n) {
        if (
            (e !== null && (t.dependencies = e.dependencies),
            (rn |= t.lanes),
            !(n & t.childLanes))
        )
            return null;
        if (e !== null && t.child !== e.child) throw Error(m(153));
        if (t.child !== null) {
            for (
                e = t.child,
                    n = Kt(e, e.pendingProps),
                    t.child = n,
                    n.return = t;
                e.sibling !== null;

            )
                (e = e.sibling),
                    (n = n.sibling = Kt(e, e.pendingProps)),
                    (n.return = t);
            n.sibling = null;
        }
        return t.child;
    }
    function yc(e, t, n) {
        switch (t.tag) {
            case 3:
                Zs(t), _n();
                break;
            case 5:
                hs(t);
                break;
            case 1:
                De(t.type) && Yr(t);
                break;
            case 4:
                Du(t, t.stateNode.containerInfo);
                break;
            case 10:
                var r = t.type._context,
                    l = t.memoizedProps.value;
                ee(br, r._currentValue), (r._currentValue = l);
                break;
            case 13:
                if (((r = t.memoizedState), r !== null))
                    return r.dehydrated !== null
                        ? (ee(ue, ue.current & 1), (t.flags |= 128), null)
                        : n & t.child.childLanes
                        ? bs(e, t, n)
                        : (ee(ue, ue.current & 1),
                          (e = Ct(e, t, n)),
                          e !== null ? e.sibling : null);
                ee(ue, ue.current & 1);
                break;
            case 19:
                if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                    if (r) return ta(e, t, n);
                    t.flags |= 128;
                }
                if (
                    ((l = t.memoizedState),
                    l !== null &&
                        ((l.rendering = null),
                        (l.tail = null),
                        (l.lastEffect = null)),
                    ee(ue, ue.current),
                    r)
                )
                    break;
                return null;
            case 22:
            case 23:
                return (t.lanes = 0), Xs(e, t, n);
        }
        return Ct(e, t, n);
    }
    var na, ri, ra, la;
    (na = function (e, t) {
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
    }),
        (ri = function () {}),
        (ra = function (e, t, n, r) {
            var l = e.memoizedProps;
            if (l !== r) {
                (e = t.stateNode), tn(mt.current);
                var u = null;
                switch (n) {
                    case "input":
                        (l = jl(e, l)), (r = jl(e, r)), (u = []);
                        break;
                    case "select":
                        (l = C({}, l, { value: void 0 })),
                            (r = C({}, r, { value: void 0 })),
                            (u = []);
                        break;
                    case "textarea":
                        (l = Dl(e, l)), (r = Dl(e, r)), (u = []);
                        break;
                    default:
                        typeof l.onClick != "function" &&
                            typeof r.onClick == "function" &&
                            (e.onclick = Wr);
                }
                Fl(n, r);
                var i;
                n = null;
                for (p in l)
                    if (
                        !r.hasOwnProperty(p) &&
                        l.hasOwnProperty(p) &&
                        l[p] != null
                    )
                        if (p === "style") {
                            var o = l[p];
                            for (i in o)
                                o.hasOwnProperty(i) &&
                                    (n || (n = {}), (n[i] = ""));
                        } else
                            p !== "dangerouslySetInnerHTML" &&
                                p !== "children" &&
                                p !== "suppressContentEditableWarning" &&
                                p !== "suppressHydrationWarning" &&
                                p !== "autoFocus" &&
                                (T.hasOwnProperty(p)
                                    ? u || (u = [])
                                    : (u = u || []).push(p, null));
                for (p in r) {
                    var s = r[p];
                    if (
                        ((o = l != null ? l[p] : void 0),
                        r.hasOwnProperty(p) &&
                            s !== o &&
                            (s != null || o != null))
                    )
                        if (p === "style")
                            if (o) {
                                for (i in o)
                                    !o.hasOwnProperty(i) ||
                                        (s && s.hasOwnProperty(i)) ||
                                        (n || (n = {}), (n[i] = ""));
                                for (i in s)
                                    s.hasOwnProperty(i) &&
                                        o[i] !== s[i] &&
                                        (n || (n = {}), (n[i] = s[i]));
                            } else n || (u || (u = []), u.push(p, n)), (n = s);
                        else
                            p === "dangerouslySetInnerHTML"
                                ? ((s = s ? s.__html : void 0),
                                  (o = o ? o.__html : void 0),
                                  s != null &&
                                      o !== s &&
                                      (u = u || []).push(p, s))
                                : p === "children"
                                ? (typeof s != "string" &&
                                      typeof s != "number") ||
                                  (u = u || []).push(p, "" + s)
                                : p !== "suppressContentEditableWarning" &&
                                  p !== "suppressHydrationWarning" &&
                                  (T.hasOwnProperty(p)
                                      ? (s != null &&
                                            p === "onScroll" &&
                                            te("scroll", e),
                                        u || o === s || (u = []))
                                      : (u = u || []).push(p, s));
                }
                n && (u = u || []).push("style", n);
                var p = u;
                (t.updateQueue = p) && (t.flags |= 4);
            }
        }),
        (la = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
        });
    function pr(e, t) {
        if (!le)
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
    function Ne(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            n = 0,
            r = 0;
        if (t)
            for (var l = e.child; l !== null; )
                (n |= l.lanes | l.childLanes),
                    (r |= l.subtreeFlags & 14680064),
                    (r |= l.flags & 14680064),
                    (l.return = e),
                    (l = l.sibling);
        else
            for (l = e.child; l !== null; )
                (n |= l.lanes | l.childLanes),
                    (r |= l.subtreeFlags),
                    (r |= l.flags),
                    (l.return = e),
                    (l = l.sibling);
        return (e.subtreeFlags |= r), (e.childLanes = n), t;
    }
    function gc(e, t, n) {
        var r = t.pendingProps;
        switch ((Cu(t), t.tag)) {
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
                return Ne(t), null;
            case 1:
                return De(t.type) && Kr(), Ne(t), null;
            case 3:
                return (
                    (r = t.stateNode),
                    zn(),
                    ne(Oe),
                    ne(_e),
                    Uu(),
                    r.pendingContext &&
                        ((r.context = r.pendingContext),
                        (r.pendingContext = null)),
                    (e === null || e.child === null) &&
                        (Zr(t)
                            ? (t.flags |= 4)
                            : e === null ||
                              (e.memoizedState.isDehydrated &&
                                  !(t.flags & 256)) ||
                              ((t.flags |= 1024),
                              lt !== null && (mi(lt), (lt = null)))),
                    ri(e, t),
                    Ne(t),
                    null
                );
            case 5:
                Mu(t);
                var l = tn(sr.current);
                if (((n = t.type), e !== null && t.stateNode != null))
                    ra(e, t, n, r, l),
                        e.ref !== t.ref &&
                            ((t.flags |= 512), (t.flags |= 2097152));
                else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(m(166));
                        return Ne(t), null;
                    }
                    if (((e = tn(mt.current)), Zr(t))) {
                        (r = t.stateNode), (n = t.type);
                        var u = t.memoizedProps;
                        switch (
                            ((r[pt] = t),
                            (r[rr] = u),
                            (e = (t.mode & 1) !== 0),
                            n)
                        ) {
                            case "dialog":
                                te("cancel", r), te("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                te("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < er.length; l++) te(er[l], r);
                                break;
                            case "source":
                                te("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                te("error", r), te("load", r);
                                break;
                            case "details":
                                te("toggle", r);
                                break;
                            case "input":
                                Fi(r, u), te("invalid", r);
                                break;
                            case "select":
                                (r._wrapperState = {
                                    wasMultiple: !!u.multiple,
                                }),
                                    te("invalid", r);
                                break;
                            case "textarea":
                                Vi(r, u), te("invalid", r);
                        }
                        Fl(n, u), (l = null);
                        for (var i in u)
                            if (u.hasOwnProperty(i)) {
                                var o = u[i];
                                i === "children"
                                    ? typeof o == "string"
                                        ? r.textContent !== o &&
                                          (u.suppressHydrationWarning !== !0 &&
                                              Hr(r.textContent, o, e),
                                          (l = ["children", o]))
                                        : typeof o == "number" &&
                                          r.textContent !== "" + o &&
                                          (u.suppressHydrationWarning !== !0 &&
                                              Hr(r.textContent, o, e),
                                          (l = ["children", "" + o]))
                                    : T.hasOwnProperty(i) &&
                                      o != null &&
                                      i === "onScroll" &&
                                      te("scroll", r);
                            }
                        switch (n) {
                            case "input":
                                Sr(r), Ai(r, u, !0);
                                break;
                            case "textarea":
                                Sr(r), $i(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof u.onClick == "function" &&
                                    (r.onclick = Wr);
                        }
                        (r = l),
                            (t.updateQueue = r),
                            r !== null && (t.flags |= 4);
                    } else {
                        (i = l.nodeType === 9 ? l : l.ownerDocument),
                            e === "http://www.w3.org/1999/xhtml" && (e = Hi(n)),
                            e === "http://www.w3.org/1999/xhtml"
                                ? n === "script"
                                    ? ((e = i.createElement("div")),
                                      (e.innerHTML = "<script></script>"),
                                      (e = e.removeChild(e.firstChild)))
                                    : typeof r.is == "string"
                                    ? (e = i.createElement(n, { is: r.is }))
                                    : ((e = i.createElement(n)),
                                      n === "select" &&
                                          ((i = e),
                                          r.multiple
                                              ? (i.multiple = !0)
                                              : r.size && (i.size = r.size)))
                                : (e = i.createElementNS(e, n)),
                            (e[pt] = t),
                            (e[rr] = r),
                            na(e, t, !1, !1),
                            (t.stateNode = e);
                        e: {
                            switch (((i = Ul(n, r)), n)) {
                                case "dialog":
                                    te("cancel", e), te("close", e), (l = r);
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    te("load", e), (l = r);
                                    break;
                                case "video":
                                case "audio":
                                    for (l = 0; l < er.length; l++)
                                        te(er[l], e);
                                    l = r;
                                    break;
                                case "source":
                                    te("error", e), (l = r);
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    te("error", e), te("load", e), (l = r);
                                    break;
                                case "details":
                                    te("toggle", e), (l = r);
                                    break;
                                case "input":
                                    Fi(e, r), (l = jl(e, r)), te("invalid", e);
                                    break;
                                case "option":
                                    l = r;
                                    break;
                                case "select":
                                    (e._wrapperState = {
                                        wasMultiple: !!r.multiple,
                                    }),
                                        (l = C({}, r, { value: void 0 })),
                                        te("invalid", e);
                                    break;
                                case "textarea":
                                    Vi(e, r), (l = Dl(e, r)), te("invalid", e);
                                    break;
                                default:
                                    l = r;
                            }
                            Fl(n, l), (o = l);
                            for (u in o)
                                if (o.hasOwnProperty(u)) {
                                    var s = o[u];
                                    u === "style"
                                        ? Ki(e, s)
                                        : u === "dangerouslySetInnerHTML"
                                        ? ((s = s ? s.__html : void 0),
                                          s != null && Wi(e, s))
                                        : u === "children"
                                        ? typeof s == "string"
                                            ? (n !== "textarea" || s !== "") &&
                                              Dn(e, s)
                                            : typeof s == "number" &&
                                              Dn(e, "" + s)
                                        : u !==
                                              "suppressContentEditableWarning" &&
                                          u !== "suppressHydrationWarning" &&
                                          u !== "autoFocus" &&
                                          (T.hasOwnProperty(u)
                                              ? s != null &&
                                                u === "onScroll" &&
                                                te("scroll", e)
                                              : s != null && be(e, u, s, i));
                                }
                            switch (n) {
                                case "input":
                                    Sr(e), Ai(e, r, !1);
                                    break;
                                case "textarea":
                                    Sr(e), $i(e);
                                    break;
                                case "option":
                                    r.value != null &&
                                        e.setAttribute(
                                            "value",
                                            "" + G(r.value)
                                        );
                                    break;
                                case "select":
                                    (e.multiple = !!r.multiple),
                                        (u = r.value),
                                        u != null
                                            ? an(e, !!r.multiple, u, !1)
                                            : r.defaultValue != null &&
                                              an(
                                                  e,
                                                  !!r.multiple,
                                                  r.defaultValue,
                                                  !0
                                              );
                                    break;
                                default:
                                    typeof l.onClick == "function" &&
                                        (e.onclick = Wr);
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
                return Ne(t), null;
            case 6:
                if (e && t.stateNode != null) la(e, t, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && t.stateNode === null)
                        throw Error(m(166));
                    if (((n = tn(sr.current)), tn(mt.current), Zr(t))) {
                        if (
                            ((r = t.stateNode),
                            (n = t.memoizedProps),
                            (r[pt] = t),
                            (u = r.nodeValue !== n) && ((e = He), e !== null))
                        )
                            switch (e.tag) {
                                case 3:
                                    Hr(r.nodeValue, n, (e.mode & 1) !== 0);
                                    break;
                                case 5:
                                    e.memoizedProps.suppressHydrationWarning !==
                                        !0 &&
                                        Hr(r.nodeValue, n, (e.mode & 1) !== 0);
                            }
                        u && (t.flags |= 4);
                    } else
                        (r = (
                            n.nodeType === 9 ? n : n.ownerDocument
                        ).createTextNode(r)),
                            (r[pt] = t),
                            (t.stateNode = r);
                }
                return Ne(t), null;
            case 13:
                if (
                    (ne(ue),
                    (r = t.memoizedState),
                    e === null ||
                        (e.memoizedState !== null &&
                            e.memoizedState.dehydrated !== null))
                ) {
                    if (le && We !== null && t.mode & 1 && !(t.flags & 128))
                        os(), _n(), (t.flags |= 98560), (u = !1);
                    else if (
                        ((u = Zr(t)), r !== null && r.dehydrated !== null)
                    ) {
                        if (e === null) {
                            if (!u) throw Error(m(318));
                            if (
                                ((u = t.memoizedState),
                                (u = u !== null ? u.dehydrated : null),
                                !u)
                            )
                                throw Error(m(317));
                            u[pt] = t;
                        } else
                            _n(),
                                !(t.flags & 128) && (t.memoizedState = null),
                                (t.flags |= 4);
                        Ne(t), (u = !1);
                    } else lt !== null && (mi(lt), (lt = null)), (u = !0);
                    if (!u) return t.flags & 65536 ? t : null;
                }
                return t.flags & 128
                    ? ((t.lanes = n), t)
                    : ((r = r !== null),
                      r !== (e !== null && e.memoizedState !== null) &&
                          r &&
                          ((t.child.flags |= 8192),
                          t.mode & 1 &&
                              (e === null || ue.current & 1
                                  ? me === 0 && (me = 3)
                                  : yi())),
                      t.updateQueue !== null && (t.flags |= 4),
                      Ne(t),
                      null);
            case 4:
                return (
                    zn(),
                    ri(e, t),
                    e === null && tr(t.stateNode.containerInfo),
                    Ne(t),
                    null
                );
            case 10:
                return Ru(t.type._context), Ne(t), null;
            case 17:
                return De(t.type) && Kr(), Ne(t), null;
            case 19:
                if ((ne(ue), (u = t.memoizedState), u === null))
                    return Ne(t), null;
                if (
                    ((r = (t.flags & 128) !== 0), (i = u.rendering), i === null)
                )
                    if (r) pr(u, !1);
                    else {
                        if (me !== 0 || (e !== null && e.flags & 128))
                            for (e = t.child; e !== null; ) {
                                if (((i = rl(e)), i !== null)) {
                                    for (
                                        t.flags |= 128,
                                            pr(u, !1),
                                            r = i.updateQueue,
                                            r !== null &&
                                                ((t.updateQueue = r),
                                                (t.flags |= 4)),
                                            t.subtreeFlags = 0,
                                            r = n,
                                            n = t.child;
                                        n !== null;

                                    )
                                        (u = n),
                                            (e = r),
                                            (u.flags &= 14680066),
                                            (i = u.alternate),
                                            i === null
                                                ? ((u.childLanes = 0),
                                                  (u.lanes = e),
                                                  (u.child = null),
                                                  (u.subtreeFlags = 0),
                                                  (u.memoizedProps = null),
                                                  (u.memoizedState = null),
                                                  (u.updateQueue = null),
                                                  (u.dependencies = null),
                                                  (u.stateNode = null))
                                                : ((u.childLanes =
                                                      i.childLanes),
                                                  (u.lanes = i.lanes),
                                                  (u.child = i.child),
                                                  (u.subtreeFlags = 0),
                                                  (u.deletions = null),
                                                  (u.memoizedProps =
                                                      i.memoizedProps),
                                                  (u.memoizedState =
                                                      i.memoizedState),
                                                  (u.updateQueue =
                                                      i.updateQueue),
                                                  (u.type = i.type),
                                                  (e = i.dependencies),
                                                  (u.dependencies =
                                                      e === null
                                                          ? null
                                                          : {
                                                                lanes: e.lanes,
                                                                firstContext:
                                                                    e.firstContext,
                                                            })),
                                            (n = n.sibling);
                                    return (
                                        ee(ue, (ue.current & 1) | 2), t.child
                                    );
                                }
                                e = e.sibling;
                            }
                        u.tail !== null &&
                            ae() > jn &&
                            ((t.flags |= 128),
                            (r = !0),
                            pr(u, !1),
                            (t.lanes = 4194304));
                    }
                else {
                    if (!r)
                        if (((e = rl(i)), e !== null)) {
                            if (
                                ((t.flags |= 128),
                                (r = !0),
                                (n = e.updateQueue),
                                n !== null &&
                                    ((t.updateQueue = n), (t.flags |= 4)),
                                pr(u, !0),
                                u.tail === null &&
                                    u.tailMode === "hidden" &&
                                    !i.alternate &&
                                    !le)
                            )
                                return Ne(t), null;
                        } else
                            2 * ae() - u.renderingStartTime > jn &&
                                n !== 1073741824 &&
                                ((t.flags |= 128),
                                (r = !0),
                                pr(u, !1),
                                (t.lanes = 4194304));
                    u.isBackwards
                        ? ((i.sibling = t.child), (t.child = i))
                        : ((n = u.last),
                          n !== null ? (n.sibling = i) : (t.child = i),
                          (u.last = i));
                }
                return u.tail !== null
                    ? ((t = u.tail),
                      (u.rendering = t),
                      (u.tail = t.sibling),
                      (u.renderingStartTime = ae()),
                      (t.sibling = null),
                      (n = ue.current),
                      ee(ue, r ? (n & 1) | 2 : n & 1),
                      t)
                    : (Ne(t), null);
            case 22:
            case 23:
                return (
                    vi(),
                    (r = t.memoizedState !== null),
                    e !== null &&
                        (e.memoizedState !== null) !== r &&
                        (t.flags |= 8192),
                    r && t.mode & 1
                        ? Qe & 1073741824 &&
                          (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                        : Ne(t),
                    null
                );
            case 24:
                return null;
            case 25:
                return null;
        }
        throw Error(m(156, t.tag));
    }
    function wc(e, t) {
        switch ((Cu(t), t.tag)) {
            case 1:
                return (
                    De(t.type) && Kr(),
                    (e = t.flags),
                    e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
                );
            case 3:
                return (
                    zn(),
                    ne(Oe),
                    ne(_e),
                    Uu(),
                    (e = t.flags),
                    e & 65536 && !(e & 128)
                        ? ((t.flags = (e & -65537) | 128), t)
                        : null
                );
            case 5:
                return Mu(t), null;
            case 13:
                if (
                    (ne(ue),
                    (e = t.memoizedState),
                    e !== null && e.dehydrated !== null)
                ) {
                    if (t.alternate === null) throw Error(m(340));
                    _n();
                }
                return (
                    (e = t.flags),
                    e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
                );
            case 19:
                return ne(ue), null;
            case 4:
                return zn(), null;
            case 10:
                return Ru(t.type._context), null;
            case 22:
            case 23:
                return vi(), null;
            case 24:
                return null;
            default:
                return null;
        }
    }
    var dl = !1,
        Pe = !1,
        Sc = typeof WeakSet == "function" ? WeakSet : Set,
        _ = null;
    function Ln(e, t) {
        var n = e.ref;
        if (n !== null)
            if (typeof n == "function")
                try {
                    n(null);
                } catch (r) {
                    se(e, t, r);
                }
            else n.current = null;
    }
    function li(e, t, n) {
        try {
            n();
        } catch (r) {
            se(e, t, r);
        }
    }
    var ua = !1;
    function kc(e, t) {
        if (((vu = jr), (e = Fo()), su(e))) {
            if ("selectionStart" in e)
                var n = { start: e.selectionStart, end: e.selectionEnd };
            else
                e: {
                    n = ((n = e.ownerDocument) && n.defaultView) || window;
                    var r = n.getSelection && n.getSelection();
                    if (r && r.rangeCount !== 0) {
                        n = r.anchorNode;
                        var l = r.anchorOffset,
                            u = r.focusNode;
                        r = r.focusOffset;
                        try {
                            n.nodeType, u.nodeType;
                        } catch {
                            n = null;
                            break e;
                        }
                        var i = 0,
                            o = -1,
                            s = -1,
                            p = 0,
                            y = 0,
                            w = e,
                            h = null;
                        t: for (;;) {
                            for (
                                var x;
                                w !== n ||
                                    (l !== 0 && w.nodeType !== 3) ||
                                    (o = i + l),
                                    w !== u ||
                                        (r !== 0 && w.nodeType !== 3) ||
                                        (s = i + r),
                                    w.nodeType === 3 &&
                                        (i += w.nodeValue.length),
                                    (x = w.firstChild) !== null;

                            )
                                (h = w), (w = x);
                            for (;;) {
                                if (w === e) break t;
                                if (
                                    (h === n && ++p === l && (o = i),
                                    h === u && ++y === r && (s = i),
                                    (x = w.nextSibling) !== null)
                                )
                                    break;
                                (w = h), (h = w.parentNode);
                            }
                            w = x;
                        }
                        n = o === -1 || s === -1 ? null : { start: o, end: s };
                    } else n = null;
                }
            n = n || { start: 0, end: 0 };
        } else n = null;
        for (
            yu = { focusedElem: e, selectionRange: n }, jr = !1, _ = t;
            _ !== null;

        )
            if (
                ((t = _),
                (e = t.child),
                (t.subtreeFlags & 1028) !== 0 && e !== null)
            )
                (e.return = t), (_ = e);
            else
                for (; _ !== null; ) {
                    t = _;
                    try {
                        var P = t.alternate;
                        if (t.flags & 1024)
                            switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    break;
                                case 1:
                                    if (P !== null) {
                                        var z = P.memoizedProps,
                                            fe = P.memoizedState,
                                            c = t.stateNode,
                                            a = c.getSnapshotBeforeUpdate(
                                                t.elementType === t.type
                                                    ? z
                                                    : ut(t.type, z),
                                                fe
                                            );
                                        c.__reactInternalSnapshotBeforeUpdate =
                                            a;
                                    }
                                    break;
                                case 3:
                                    var d = t.stateNode.containerInfo;
                                    d.nodeType === 1
                                        ? (d.textContent = "")
                                        : d.nodeType === 9 &&
                                          d.documentElement &&
                                          d.removeChild(d.documentElement);
                                    break;
                                case 5:
                                case 6:
                                case 4:
                                case 17:
                                    break;
                                default:
                                    throw Error(m(163));
                            }
                    } catch (S) {
                        se(t, t.return, S);
                    }
                    if (((e = t.sibling), e !== null)) {
                        (e.return = t.return), (_ = e);
                        break;
                    }
                    _ = t.return;
                }
        return (P = ua), (ua = !1), P;
    }
    function mr(e, t, n) {
        var r = t.updateQueue;
        if (((r = r !== null ? r.lastEffect : null), r !== null)) {
            var l = (r = r.next);
            do {
                if ((l.tag & e) === e) {
                    var u = l.destroy;
                    (l.destroy = void 0), u !== void 0 && li(t, n, u);
                }
                l = l.next;
            } while (l !== r);
        }
    }
    function pl(e, t) {
        if (
            ((t = t.updateQueue),
            (t = t !== null ? t.lastEffect : null),
            t !== null)
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
    function ui(e) {
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
    function ia(e) {
        var t = e.alternate;
        t !== null && ((e.alternate = null), ia(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            e.tag === 5 &&
                ((t = e.stateNode),
                t !== null &&
                    (delete t[pt],
                    delete t[rr],
                    delete t[ku],
                    delete t[rc],
                    delete t[lc])),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
    }
    function oa(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function sa(e) {
        e: for (;;) {
            for (; e.sibling === null; ) {
                if (e.return === null || oa(e.return)) return null;
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
    function ii(e, t, n) {
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
                      n != null || t.onclick !== null || (t.onclick = Wr));
        else if (r !== 4 && ((e = e.child), e !== null))
            for (ii(e, t, n), e = e.sibling; e !== null; )
                ii(e, t, n), (e = e.sibling);
    }
    function oi(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && ((e = e.child), e !== null))
            for (oi(e, t, n), e = e.sibling; e !== null; )
                oi(e, t, n), (e = e.sibling);
    }
    var ke = null,
        it = !1;
    function Bt(e, t, n) {
        for (n = n.child; n !== null; ) aa(e, t, n), (n = n.sibling);
    }
    function aa(e, t, n) {
        if (dt && typeof dt.onCommitFiberUnmount == "function")
            try {
                dt.onCommitFiberUnmount(Nr, n);
            } catch {}
        switch (n.tag) {
            case 5:
                Pe || Ln(n, t);
            case 6:
                var r = ke,
                    l = it;
                (ke = null),
                    Bt(e, t, n),
                    (ke = r),
                    (it = l),
                    ke !== null &&
                        (it
                            ? ((e = ke),
                              (n = n.stateNode),
                              e.nodeType === 8
                                  ? e.parentNode.removeChild(n)
                                  : e.removeChild(n))
                            : ke.removeChild(n.stateNode));
                break;
            case 18:
                ke !== null &&
                    (it
                        ? ((e = ke),
                          (n = n.stateNode),
                          e.nodeType === 8
                              ? Su(e.parentNode, n)
                              : e.nodeType === 1 && Su(e, n),
                          Kn(e))
                        : Su(ke, n.stateNode));
                break;
            case 4:
                (r = ke),
                    (l = it),
                    (ke = n.stateNode.containerInfo),
                    (it = !0),
                    Bt(e, t, n),
                    (ke = r),
                    (it = l);
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (
                    !Pe &&
                    ((r = n.updateQueue),
                    r !== null && ((r = r.lastEffect), r !== null))
                ) {
                    l = r = r.next;
                    do {
                        var u = l,
                            i = u.destroy;
                        (u = u.tag),
                            i !== void 0 && (u & 2 || u & 4) && li(n, t, i),
                            (l = l.next);
                    } while (l !== r);
                }
                Bt(e, t, n);
                break;
            case 1:
                if (
                    !Pe &&
                    (Ln(n, t),
                    (r = n.stateNode),
                    typeof r.componentWillUnmount == "function")
                )
                    try {
                        (r.props = n.memoizedProps),
                            (r.state = n.memoizedState),
                            r.componentWillUnmount();
                    } catch (o) {
                        se(n, t, o);
                    }
                Bt(e, t, n);
                break;
            case 21:
                Bt(e, t, n);
                break;
            case 22:
                n.mode & 1
                    ? ((Pe = (r = Pe) || n.memoizedState !== null),
                      Bt(e, t, n),
                      (Pe = r))
                    : Bt(e, t, n);
                break;
            default:
                Bt(e, t, n);
        }
    }
    function fa(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new Sc()),
                t.forEach(function (r) {
                    var l = Lc.bind(null, e, r);
                    n.has(r) || (n.add(r), r.then(l, l));
                });
        }
    }
    function ot(e, t) {
        var n = t.deletions;
        if (n !== null)
            for (var r = 0; r < n.length; r++) {
                var l = n[r];
                try {
                    var u = e,
                        i = t,
                        o = i;
                    e: for (; o !== null; ) {
                        switch (o.tag) {
                            case 5:
                                (ke = o.stateNode), (it = !1);
                                break e;
                            case 3:
                                (ke = o.stateNode.containerInfo), (it = !0);
                                break e;
                            case 4:
                                (ke = o.stateNode.containerInfo), (it = !0);
                                break e;
                        }
                        o = o.return;
                    }
                    if (ke === null) throw Error(m(160));
                    aa(u, i, l), (ke = null), (it = !1);
                    var s = l.alternate;
                    s !== null && (s.return = null), (l.return = null);
                } catch (p) {
                    se(l, t, p);
                }
            }
        if (t.subtreeFlags & 12854)
            for (t = t.child; t !== null; ) ca(t, e), (t = t.sibling);
    }
    function ca(e, t) {
        var n = e.alternate,
            r = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if ((ot(t, e), vt(e), r & 4)) {
                    try {
                        mr(3, e, e.return), pl(3, e);
                    } catch (z) {
                        se(e, e.return, z);
                    }
                    try {
                        mr(5, e, e.return);
                    } catch (z) {
                        se(e, e.return, z);
                    }
                }
                break;
            case 1:
                ot(t, e), vt(e), r & 512 && n !== null && Ln(n, n.return);
                break;
            case 5:
                if (
                    (ot(t, e),
                    vt(e),
                    r & 512 && n !== null && Ln(n, n.return),
                    e.flags & 32)
                ) {
                    var l = e.stateNode;
                    try {
                        Dn(l, "");
                    } catch (z) {
                        se(e, e.return, z);
                    }
                }
                if (r & 4 && ((l = e.stateNode), l != null)) {
                    var u = e.memoizedProps,
                        i = n !== null ? n.memoizedProps : u,
                        o = e.type,
                        s = e.updateQueue;
                    if (((e.updateQueue = null), s !== null))
                        try {
                            o === "input" &&
                                u.type === "radio" &&
                                u.name != null &&
                                Ui(l, u),
                                Ul(o, i);
                            var p = Ul(o, u);
                            for (i = 0; i < s.length; i += 2) {
                                var y = s[i],
                                    w = s[i + 1];
                                y === "style"
                                    ? Ki(l, w)
                                    : y === "dangerouslySetInnerHTML"
                                    ? Wi(l, w)
                                    : y === "children"
                                    ? Dn(l, w)
                                    : be(l, y, w, p);
                            }
                            switch (o) {
                                case "input":
                                    Il(l, u);
                                    break;
                                case "textarea":
                                    Bi(l, u);
                                    break;
                                case "select":
                                    var h = l._wrapperState.wasMultiple;
                                    l._wrapperState.wasMultiple = !!u.multiple;
                                    var x = u.value;
                                    x != null
                                        ? an(l, !!u.multiple, x, !1)
                                        : h !== !!u.multiple &&
                                          (u.defaultValue != null
                                              ? an(
                                                    l,
                                                    !!u.multiple,
                                                    u.defaultValue,
                                                    !0
                                                )
                                              : an(
                                                    l,
                                                    !!u.multiple,
                                                    u.multiple ? [] : "",
                                                    !1
                                                ));
                            }
                            l[rr] = u;
                        } catch (z) {
                            se(e, e.return, z);
                        }
                }
                break;
            case 6:
                if ((ot(t, e), vt(e), r & 4)) {
                    if (e.stateNode === null) throw Error(m(162));
                    (l = e.stateNode), (u = e.memoizedProps);
                    try {
                        l.nodeValue = u;
                    } catch (z) {
                        se(e, e.return, z);
                    }
                }
                break;
            case 3:
                if (
                    (ot(t, e),
                    vt(e),
                    r & 4 && n !== null && n.memoizedState.isDehydrated)
                )
                    try {
                        Kn(t.containerInfo);
                    } catch (z) {
                        se(e, e.return, z);
                    }
                break;
            case 4:
                ot(t, e), vt(e);
                break;
            case 13:
                ot(t, e),
                    vt(e),
                    (l = e.child),
                    l.flags & 8192 &&
                        ((u = l.memoizedState !== null),
                        (l.stateNode.isHidden = u),
                        !u ||
                            (l.alternate !== null &&
                                l.alternate.memoizedState !== null) ||
                            (fi = ae())),
                    r & 4 && fa(e);
                break;
            case 22:
                if (
                    ((y = n !== null && n.memoizedState !== null),
                    e.mode & 1
                        ? ((Pe = (p = Pe) || y), ot(t, e), (Pe = p))
                        : ot(t, e),
                    vt(e),
                    r & 8192)
                ) {
                    if (
                        ((p = e.memoizedState !== null),
                        (e.stateNode.isHidden = p) && !y && e.mode & 1)
                    )
                        for (_ = e, y = e.child; y !== null; ) {
                            for (w = _ = y; _ !== null; ) {
                                switch (((h = _), (x = h.child), h.tag)) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        mr(4, h, h.return);
                                        break;
                                    case 1:
                                        Ln(h, h.return);
                                        var P = h.stateNode;
                                        if (
                                            typeof P.componentWillUnmount ==
                                            "function"
                                        ) {
                                            (r = h), (n = h.return);
                                            try {
                                                (t = r),
                                                    (P.props = t.memoizedProps),
                                                    (P.state = t.memoizedState),
                                                    P.componentWillUnmount();
                                            } catch (z) {
                                                se(r, n, z);
                                            }
                                        }
                                        break;
                                    case 5:
                                        Ln(h, h.return);
                                        break;
                                    case 22:
                                        if (h.memoizedState !== null) {
                                            ma(w);
                                            continue;
                                        }
                                }
                                x !== null ? ((x.return = h), (_ = x)) : ma(w);
                            }
                            y = y.sibling;
                        }
                    e: for (y = null, w = e; ; ) {
                        if (w.tag === 5) {
                            if (y === null) {
                                y = w;
                                try {
                                    (l = w.stateNode),
                                        p
                                            ? ((u = l.style),
                                              typeof u.setProperty == "function"
                                                  ? u.setProperty(
                                                        "display",
                                                        "none",
                                                        "important"
                                                    )
                                                  : (u.display = "none"))
                                            : ((o = w.stateNode),
                                              (s = w.memoizedProps.style),
                                              (i =
                                                  s != null &&
                                                  s.hasOwnProperty("display")
                                                      ? s.display
                                                      : null),
                                              (o.style.display = Qi(
                                                  "display",
                                                  i
                                              )));
                                } catch (z) {
                                    se(e, e.return, z);
                                }
                            }
                        } else if (w.tag === 6) {
                            if (y === null)
                                try {
                                    w.stateNode.nodeValue = p
                                        ? ""
                                        : w.memoizedProps;
                                } catch (z) {
                                    se(e, e.return, z);
                                }
                        } else if (
                            ((w.tag !== 22 && w.tag !== 23) ||
                                w.memoizedState === null ||
                                w === e) &&
                            w.child !== null
                        ) {
                            (w.child.return = w), (w = w.child);
                            continue;
                        }
                        if (w === e) break e;
                        for (; w.sibling === null; ) {
                            if (w.return === null || w.return === e) break e;
                            y === w && (y = null), (w = w.return);
                        }
                        y === w && (y = null),
                            (w.sibling.return = w.return),
                            (w = w.sibling);
                    }
                }
                break;
            case 19:
                ot(t, e), vt(e), r & 4 && fa(e);
                break;
            case 21:
                break;
            default:
                ot(t, e), vt(e);
        }
    }
    function vt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for (var n = e.return; n !== null; ) {
                        if (oa(n)) {
                            var r = n;
                            break e;
                        }
                        n = n.return;
                    }
                    throw Error(m(160));
                }
                switch (r.tag) {
                    case 5:
                        var l = r.stateNode;
                        r.flags & 32 && (Dn(l, ""), (r.flags &= -33));
                        var u = sa(e);
                        oi(e, u, l);
                        break;
                    case 3:
                    case 4:
                        var i = r.stateNode.containerInfo,
                            o = sa(e);
                        ii(e, o, i);
                        break;
                    default:
                        throw Error(m(161));
                }
            } catch (s) {
                se(e, e.return, s);
            }
            e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
    }
    function Ec(e, t, n) {
        (_ = e), da(e);
    }
    function da(e, t, n) {
        for (var r = (e.mode & 1) !== 0; _ !== null; ) {
            var l = _,
                u = l.child;
            if (l.tag === 22 && r) {
                var i = l.memoizedState !== null || dl;
                if (!i) {
                    var o = l.alternate,
                        s = (o !== null && o.memoizedState !== null) || Pe;
                    o = dl;
                    var p = Pe;
                    if (((dl = i), (Pe = s) && !p))
                        for (_ = l; _ !== null; )
                            (i = _),
                                (s = i.child),
                                i.tag === 22 && i.memoizedState !== null
                                    ? ha(l)
                                    : s !== null
                                    ? ((s.return = i), (_ = s))
                                    : ha(l);
                    for (; u !== null; ) (_ = u), da(u), (u = u.sibling);
                    (_ = l), (dl = o), (Pe = p);
                }
                pa(e);
            } else
                l.subtreeFlags & 8772 && u !== null
                    ? ((u.return = l), (_ = u))
                    : pa(e);
        }
    }
    function pa(e) {
        for (; _ !== null; ) {
            var t = _;
            if (t.flags & 8772) {
                var n = t.alternate;
                try {
                    if (t.flags & 8772)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Pe || pl(5, t);
                                break;
                            case 1:
                                var r = t.stateNode;
                                if (t.flags & 4 && !Pe)
                                    if (n === null) r.componentDidMount();
                                    else {
                                        var l =
                                            t.elementType === t.type
                                                ? n.memoizedProps
                                                : ut(t.type, n.memoizedProps);
                                        r.componentDidUpdate(
                                            l,
                                            n.memoizedState,
                                            r.__reactInternalSnapshotBeforeUpdate
                                        );
                                    }
                                var u = t.updateQueue;
                                u !== null && ms(t, u, r);
                                break;
                            case 3:
                                var i = t.updateQueue;
                                if (i !== null) {
                                    if (((n = null), t.child !== null))
                                        switch (t.child.tag) {
                                            case 5:
                                                n = t.child.stateNode;
                                                break;
                                            case 1:
                                                n = t.child.stateNode;
                                        }
                                    ms(t, i, n);
                                }
                                break;
                            case 5:
                                var o = t.stateNode;
                                if (n === null && t.flags & 4) {
                                    n = o;
                                    var s = t.memoizedProps;
                                    switch (t.type) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            s.autoFocus && n.focus();
                                            break;
                                        case "img":
                                            s.src && (n.src = s.src);
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
                                    var p = t.alternate;
                                    if (p !== null) {
                                        var y = p.memoizedState;
                                        if (y !== null) {
                                            var w = y.dehydrated;
                                            w !== null && Kn(w);
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
                                throw Error(m(163));
                        }
                    Pe || (t.flags & 512 && ui(t));
                } catch (h) {
                    se(t, t.return, h);
                }
            }
            if (t === e) {
                _ = null;
                break;
            }
            if (((n = t.sibling), n !== null)) {
                (n.return = t.return), (_ = n);
                break;
            }
            _ = t.return;
        }
    }
    function ma(e) {
        for (; _ !== null; ) {
            var t = _;
            if (t === e) {
                _ = null;
                break;
            }
            var n = t.sibling;
            if (n !== null) {
                (n.return = t.return), (_ = n);
                break;
            }
            _ = t.return;
        }
    }
    function ha(e) {
        for (; _ !== null; ) {
            var t = _;
            try {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            pl(4, t);
                        } catch (s) {
                            se(t, n, s);
                        }
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (typeof r.componentDidMount == "function") {
                            var l = t.return;
                            try {
                                r.componentDidMount();
                            } catch (s) {
                                se(t, l, s);
                            }
                        }
                        var u = t.return;
                        try {
                            ui(t);
                        } catch (s) {
                            se(t, u, s);
                        }
                        break;
                    case 5:
                        var i = t.return;
                        try {
                            ui(t);
                        } catch (s) {
                            se(t, i, s);
                        }
                }
            } catch (s) {
                se(t, t.return, s);
            }
            if (t === e) {
                _ = null;
                break;
            }
            var o = t.sibling;
            if (o !== null) {
                (o.return = t.return), (_ = o);
                break;
            }
            _ = t.return;
        }
    }
    var xc = Math.ceil,
        ml = xe.ReactCurrentDispatcher,
        si = xe.ReactCurrentOwner,
        Ze = xe.ReactCurrentBatchConfig,
        H = 0,
        ge = null,
        ce = null,
        Ee = 0,
        Qe = 0,
        Rn = Mt(0),
        me = 0,
        hr = null,
        rn = 0,
        hl = 0,
        ai = 0,
        vr = null,
        Fe = null,
        fi = 0,
        jn = 1 / 0,
        Nt = null,
        vl = !1,
        ci = null,
        $t = null,
        yl = !1,
        Ht = null,
        gl = 0,
        yr = 0,
        di = null,
        wl = -1,
        Sl = 0;
    function Le() {
        return H & 6 ? ae() : wl !== -1 ? wl : (wl = ae());
    }
    function Wt(e) {
        return e.mode & 1
            ? H & 2 && Ee !== 0
                ? Ee & -Ee
                : ic.transition !== null
                ? (Sl === 0 && (Sl = oo()), Sl)
                : ((e = J),
                  e !== 0 ||
                      ((e = window.event),
                      (e = e === void 0 ? 16 : yo(e.type))),
                  e)
            : 1;
    }
    function st(e, t, n, r) {
        if (50 < yr) throw ((yr = 0), (di = null), Error(m(185)));
        Bn(e, n, r),
            (!(H & 2) || e !== ge) &&
                (e === ge && (!(H & 2) && (hl |= n), me === 4 && Qt(e, Ee)),
                Ue(e, r),
                n === 1 &&
                    H === 0 &&
                    !(t.mode & 1) &&
                    ((jn = ae() + 500), Xr && Ut()));
    }
    function Ue(e, t) {
        var n = e.callbackNode;
        uf(e, t);
        var r = Tr(e, e === ge ? Ee : 0);
        if (r === 0)
            n !== null && lo(n),
                (e.callbackNode = null),
                (e.callbackPriority = 0);
        else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((n != null && lo(n), t === 1))
                e.tag === 0 ? uc(ya.bind(null, e)) : ns(ya.bind(null, e)),
                    tc(function () {
                        !(H & 6) && Ut();
                    }),
                    (n = null);
            else {
                switch (so(r)) {
                    case 1:
                        n = Ql;
                        break;
                    case 4:
                        n = uo;
                        break;
                    case 16:
                        n = Cr;
                        break;
                    case 536870912:
                        n = io;
                        break;
                    default:
                        n = Cr;
                }
                n = Ca(n, va.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
        }
    }
    function va(e, t) {
        if (((wl = -1), (Sl = 0), H & 6)) throw Error(m(327));
        var n = e.callbackNode;
        if (In() && e.callbackNode !== n) return null;
        var r = Tr(e, e === ge ? Ee : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = kl(e, r);
        else {
            t = r;
            var l = H;
            H |= 2;
            var u = wa();
            (ge !== e || Ee !== t) &&
                ((Nt = null), (jn = ae() + 500), un(e, t));
            do
                try {
                    Nc();
                    break;
                } catch (o) {
                    ga(e, o);
                }
            while (!0);
            Lu(),
                (ml.current = u),
                (H = l),
                ce !== null ? (t = 0) : ((ge = null), (Ee = 0), (t = me));
        }
        if (t !== 0) {
            if (
                (t === 2 && ((l = Kl(e)), l !== 0 && ((r = l), (t = pi(e, l)))),
                t === 1)
            )
                throw ((n = hr), un(e, 0), Qt(e, r), Ue(e, ae()), n);
            if (t === 6) Qt(e, r);
            else {
                if (
                    ((l = e.current.alternate),
                    !(r & 30) &&
                        !_c(l) &&
                        ((t = kl(e, r)),
                        t === 2 &&
                            ((u = Kl(e)), u !== 0 && ((r = u), (t = pi(e, u)))),
                        t === 1))
                )
                    throw ((n = hr), un(e, 0), Qt(e, r), Ue(e, ae()), n);
                switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
                    case 0:
                    case 1:
                        throw Error(m(345));
                    case 2:
                        on(e, Fe, Nt);
                        break;
                    case 3:
                        if (
                            (Qt(e, r),
                            (r & 130023424) === r &&
                                ((t = fi + 500 - ae()), 10 < t))
                        ) {
                            if (Tr(e, 0) !== 0) break;
                            if (((l = e.suspendedLanes), (l & r) !== r)) {
                                Le(), (e.pingedLanes |= e.suspendedLanes & l);
                                break;
                            }
                            e.timeoutHandle = wu(on.bind(null, e, Fe, Nt), t);
                            break;
                        }
                        on(e, Fe, Nt);
                        break;
                    case 4:
                        if ((Qt(e, r), (r & 4194240) === r)) break;
                        for (t = e.eventTimes, l = -1; 0 < r; ) {
                            var i = 31 - nt(r);
                            (u = 1 << i),
                                (i = t[i]),
                                i > l && (l = i),
                                (r &= ~u);
                        }
                        if (
                            ((r = l),
                            (r = ae() - r),
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
                                    : 1960 * xc(r / 1960)) - r),
                            10 < r)
                        ) {
                            e.timeoutHandle = wu(on.bind(null, e, Fe, Nt), r);
                            break;
                        }
                        on(e, Fe, Nt);
                        break;
                    case 5:
                        on(e, Fe, Nt);
                        break;
                    default:
                        throw Error(m(329));
                }
            }
        }
        return Ue(e, ae()), e.callbackNode === n ? va.bind(null, e) : null;
    }
    function pi(e, t) {
        var n = vr;
        return (
            e.current.memoizedState.isDehydrated && (un(e, t).flags |= 256),
            (e = kl(e, t)),
            e !== 2 && ((t = Fe), (Fe = n), t !== null && mi(t)),
            e
        );
    }
    function mi(e) {
        Fe === null ? (Fe = e) : Fe.push.apply(Fe, e);
    }
    function _c(e) {
        for (var t = e; ; ) {
            if (t.flags & 16384) {
                var n = t.updateQueue;
                if (n !== null && ((n = n.stores), n !== null))
                    for (var r = 0; r < n.length; r++) {
                        var l = n[r],
                            u = l.getSnapshot;
                        l = l.value;
                        try {
                            if (!rt(u(), l)) return !1;
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
    function Qt(e, t) {
        for (
            t &= ~ai,
                t &= ~hl,
                e.suspendedLanes |= t,
                e.pingedLanes &= ~t,
                e = e.expirationTimes;
            0 < t;

        ) {
            var n = 31 - nt(t),
                r = 1 << n;
            (e[n] = -1), (t &= ~r);
        }
    }
    function ya(e) {
        if (H & 6) throw Error(m(327));
        In();
        var t = Tr(e, 0);
        if (!(t & 1)) return Ue(e, ae()), null;
        var n = kl(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = Kl(e);
            r !== 0 && ((t = r), (n = pi(e, r)));
        }
        if (n === 1) throw ((n = hr), un(e, 0), Qt(e, t), Ue(e, ae()), n);
        if (n === 6) throw Error(m(345));
        return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            on(e, Fe, Nt),
            Ue(e, ae()),
            null
        );
    }
    function hi(e, t) {
        var n = H;
        H |= 1;
        try {
            return e(t);
        } finally {
            (H = n), H === 0 && ((jn = ae() + 500), Xr && Ut());
        }
    }
    function ln(e) {
        Ht !== null && Ht.tag === 0 && !(H & 6) && In();
        var t = H;
        H |= 1;
        var n = Ze.transition,
            r = J;
        try {
            if (((Ze.transition = null), (J = 1), e)) return e();
        } finally {
            (J = r), (Ze.transition = n), (H = t), !(H & 6) && Ut();
        }
    }
    function vi() {
        (Qe = Rn.current), ne(Rn);
    }
    function un(e, t) {
        (e.finishedWork = null), (e.finishedLanes = 0);
        var n = e.timeoutHandle;
        if ((n !== -1 && ((e.timeoutHandle = -1), ec(n)), ce !== null))
            for (n = ce.return; n !== null; ) {
                var r = n;
                switch ((Cu(r), r.tag)) {
                    case 1:
                        (r = r.type.childContextTypes), r != null && Kr();
                        break;
                    case 3:
                        zn(), ne(Oe), ne(_e), Uu();
                        break;
                    case 5:
                        Mu(r);
                        break;
                    case 4:
                        zn();
                        break;
                    case 13:
                        ne(ue);
                        break;
                    case 19:
                        ne(ue);
                        break;
                    case 10:
                        Ru(r.type._context);
                        break;
                    case 22:
                    case 23:
                        vi();
                }
                n = n.return;
            }
        if (
            ((ge = e),
            (ce = e = Kt(e.current, null)),
            (Ee = Qe = t),
            (me = 0),
            (hr = null),
            (ai = hl = rn = 0),
            (Fe = vr = null),
            en !== null)
        ) {
            for (t = 0; t < en.length; t++)
                if (((n = en[t]), (r = n.interleaved), r !== null)) {
                    n.interleaved = null;
                    var l = r.next,
                        u = n.pending;
                    if (u !== null) {
                        var i = u.next;
                        (u.next = l), (r.next = i);
                    }
                    n.pending = r;
                }
            en = null;
        }
        return e;
    }
    function ga(e, t) {
        do {
            var n = ce;
            try {
                if ((Lu(), (ll.current = sl), ul)) {
                    for (var r = ie.memoizedState; r !== null; ) {
                        var l = r.queue;
                        l !== null && (l.pending = null), (r = r.next);
                    }
                    ul = !1;
                }
                if (
                    ((nn = 0),
                    (ye = pe = ie = null),
                    (ar = !1),
                    (fr = 0),
                    (si.current = null),
                    n === null || n.return === null)
                ) {
                    (me = 1), (hr = t), (ce = null);
                    break;
                }
                e: {
                    var u = e,
                        i = n.return,
                        o = n,
                        s = t;
                    if (
                        ((t = Ee),
                        (o.flags |= 32768),
                        s !== null &&
                            typeof s == "object" &&
                            typeof s.then == "function")
                    ) {
                        var p = s,
                            y = o,
                            w = y.tag;
                        if (
                            !(y.mode & 1) &&
                            (w === 0 || w === 11 || w === 15)
                        ) {
                            var h = y.alternate;
                            h
                                ? ((y.updateQueue = h.updateQueue),
                                  (y.memoizedState = h.memoizedState),
                                  (y.lanes = h.lanes))
                                : ((y.updateQueue = null),
                                  (y.memoizedState = null));
                        }
                        var x = Hs(i);
                        if (x !== null) {
                            (x.flags &= -257),
                                Ws(x, i, o, u, t),
                                x.mode & 1 && $s(u, p, t),
                                (t = x),
                                (s = p);
                            var P = t.updateQueue;
                            if (P === null) {
                                var z = new Set();
                                z.add(s), (t.updateQueue = z);
                            } else P.add(s);
                            break e;
                        } else {
                            if (!(t & 1)) {
                                $s(u, p, t), yi();
                                break e;
                            }
                            s = Error(m(426));
                        }
                    } else if (le && o.mode & 1) {
                        var fe = Hs(i);
                        if (fe !== null) {
                            !(fe.flags & 65536) && (fe.flags |= 256),
                                Ws(fe, i, o, u, t),
                                zu(Tn(s, o));
                            break e;
                        }
                    }
                    (u = s = Tn(s, o)),
                        me !== 4 && (me = 2),
                        vr === null ? (vr = [u]) : vr.push(u),
                        (u = i);
                    do {
                        switch (u.tag) {
                            case 3:
                                (u.flags |= 65536), (t &= -t), (u.lanes |= t);
                                var c = Vs(u, s, t);
                                ps(u, c);
                                break e;
                            case 1:
                                o = s;
                                var a = u.type,
                                    d = u.stateNode;
                                if (
                                    !(u.flags & 128) &&
                                    (typeof a.getDerivedStateFromError ==
                                        "function" ||
                                        (d !== null &&
                                            typeof d.componentDidCatch ==
                                                "function" &&
                                            ($t === null || !$t.has(d))))
                                ) {
                                    (u.flags |= 65536),
                                        (t &= -t),
                                        (u.lanes |= t);
                                    var S = Bs(u, o, t);
                                    ps(u, S);
                                    break e;
                                }
                        }
                        u = u.return;
                    } while (u !== null);
                }
                ka(n);
            } catch (L) {
                (t = L), ce === n && n !== null && (ce = n = n.return);
                continue;
            }
            break;
        } while (!0);
    }
    function wa() {
        var e = ml.current;
        return (ml.current = sl), e === null ? sl : e;
    }
    function yi() {
        (me === 0 || me === 3 || me === 2) && (me = 4),
            ge === null ||
                (!(rn & 268435455) && !(hl & 268435455)) ||
                Qt(ge, Ee);
    }
    function kl(e, t) {
        var n = H;
        H |= 2;
        var r = wa();
        (ge !== e || Ee !== t) && ((Nt = null), un(e, t));
        do
            try {
                Cc();
                break;
            } catch (l) {
                ga(e, l);
            }
        while (!0);
        if ((Lu(), (H = n), (ml.current = r), ce !== null)) throw Error(m(261));
        return (ge = null), (Ee = 0), me;
    }
    function Cc() {
        for (; ce !== null; ) Sa(ce);
    }
    function Nc() {
        for (; ce !== null && !Ja(); ) Sa(ce);
    }
    function Sa(e) {
        var t = _a(e.alternate, e, Qe);
        (e.memoizedProps = e.pendingProps),
            t === null ? ka(e) : (ce = t),
            (si.current = null);
    }
    function ka(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (((e = t.return), t.flags & 32768)) {
                if (((n = wc(n, t)), n !== null)) {
                    (n.flags &= 32767), (ce = n);
                    return;
                }
                if (e !== null)
                    (e.flags |= 32768),
                        (e.subtreeFlags = 0),
                        (e.deletions = null);
                else {
                    (me = 6), (ce = null);
                    return;
                }
            } else if (((n = gc(n, t, Qe)), n !== null)) {
                ce = n;
                return;
            }
            if (((t = t.sibling), t !== null)) {
                ce = t;
                return;
            }
            ce = t = e;
        } while (t !== null);
        me === 0 && (me = 5);
    }
    function on(e, t, n) {
        var r = J,
            l = Ze.transition;
        try {
            (Ze.transition = null), (J = 1), Pc(e, t, n, r);
        } finally {
            (Ze.transition = l), (J = r);
        }
        return null;
    }
    function Pc(e, t, n, r) {
        do In();
        while (Ht !== null);
        if (H & 6) throw Error(m(327));
        n = e.finishedWork;
        var l = e.finishedLanes;
        if (n === null) return null;
        if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
            throw Error(m(177));
        (e.callbackNode = null), (e.callbackPriority = 0);
        var u = n.lanes | n.childLanes;
        if (
            (of(e, u),
            e === ge && ((ce = ge = null), (Ee = 0)),
            (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
                yl ||
                ((yl = !0),
                Ca(Cr, function () {
                    return In(), null;
                })),
            (u = (n.flags & 15990) !== 0),
            n.subtreeFlags & 15990 || u)
        ) {
            (u = Ze.transition), (Ze.transition = null);
            var i = J;
            J = 1;
            var o = H;
            (H |= 4),
                (si.current = null),
                kc(e, n),
                ca(n, e),
                Yf(yu),
                (jr = !!vu),
                (yu = vu = null),
                (e.current = n),
                Ec(n),
                Za(),
                (H = o),
                (J = i),
                (Ze.transition = u);
        } else e.current = n;
        if (
            (yl && ((yl = !1), (Ht = e), (gl = l)),
            (u = e.pendingLanes),
            u === 0 && ($t = null),
            ef(n.stateNode),
            Ue(e, ae()),
            t !== null)
        )
            for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                (l = t[n]),
                    r(l.value, { componentStack: l.stack, digest: l.digest });
        if (vl) throw ((vl = !1), (e = ci), (ci = null), e);
        return (
            gl & 1 && e.tag !== 0 && In(),
            (u = e.pendingLanes),
            u & 1 ? (e === di ? yr++ : ((yr = 0), (di = e))) : (yr = 0),
            Ut(),
            null
        );
    }
    function In() {
        if (Ht !== null) {
            var e = so(gl),
                t = Ze.transition,
                n = J;
            try {
                if (
                    ((Ze.transition = null), (J = 16 > e ? 16 : e), Ht === null)
                )
                    var r = !1;
                else {
                    if (((e = Ht), (Ht = null), (gl = 0), H & 6))
                        throw Error(m(331));
                    var l = H;
                    for (H |= 4, _ = e.current; _ !== null; ) {
                        var u = _,
                            i = u.child;
                        if (_.flags & 16) {
                            var o = u.deletions;
                            if (o !== null) {
                                for (var s = 0; s < o.length; s++) {
                                    var p = o[s];
                                    for (_ = p; _ !== null; ) {
                                        var y = _;
                                        switch (y.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                mr(8, y, u);
                                        }
                                        var w = y.child;
                                        if (w !== null) (w.return = y), (_ = w);
                                        else
                                            for (; _ !== null; ) {
                                                y = _;
                                                var h = y.sibling,
                                                    x = y.return;
                                                if ((ia(y), y === p)) {
                                                    _ = null;
                                                    break;
                                                }
                                                if (h !== null) {
                                                    (h.return = x), (_ = h);
                                                    break;
                                                }
                                                _ = x;
                                            }
                                    }
                                }
                                var P = u.alternate;
                                if (P !== null) {
                                    var z = P.child;
                                    if (z !== null) {
                                        P.child = null;
                                        do {
                                            var fe = z.sibling;
                                            (z.sibling = null), (z = fe);
                                        } while (z !== null);
                                    }
                                }
                                _ = u;
                            }
                        }
                        if (u.subtreeFlags & 2064 && i !== null)
                            (i.return = u), (_ = i);
                        else
                            e: for (; _ !== null; ) {
                                if (((u = _), u.flags & 2048))
                                    switch (u.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            mr(9, u, u.return);
                                    }
                                var c = u.sibling;
                                if (c !== null) {
                                    (c.return = u.return), (_ = c);
                                    break e;
                                }
                                _ = u.return;
                            }
                    }
                    var a = e.current;
                    for (_ = a; _ !== null; ) {
                        i = _;
                        var d = i.child;
                        if (i.subtreeFlags & 2064 && d !== null)
                            (d.return = i), (_ = d);
                        else
                            e: for (i = a; _ !== null; ) {
                                if (((o = _), o.flags & 2048))
                                    try {
                                        switch (o.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                pl(9, o);
                                        }
                                    } catch (L) {
                                        se(o, o.return, L);
                                    }
                                if (o === i) {
                                    _ = null;
                                    break e;
                                }
                                var S = o.sibling;
                                if (S !== null) {
                                    (S.return = o.return), (_ = S);
                                    break e;
                                }
                                _ = o.return;
                            }
                    }
                    if (
                        ((H = l),
                        Ut(),
                        dt && typeof dt.onPostCommitFiberRoot == "function")
                    )
                        try {
                            dt.onPostCommitFiberRoot(Nr, e);
                        } catch {}
                    r = !0;
                }
                return r;
            } finally {
                (J = n), (Ze.transition = t);
            }
        }
        return !1;
    }
    function Ea(e, t, n) {
        (t = Tn(n, t)),
            (t = Vs(e, t, 1)),
            (e = Vt(e, t, 1)),
            (t = Le()),
            e !== null && (Bn(e, 1, t), Ue(e, t));
    }
    function se(e, t, n) {
        if (e.tag === 3) Ea(e, e, n);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Ea(t, e, n);
                    break;
                } else if (t.tag === 1) {
                    var r = t.stateNode;
                    if (
                        typeof t.type.getDerivedStateFromError == "function" ||
                        (typeof r.componentDidCatch == "function" &&
                            ($t === null || !$t.has(r)))
                    ) {
                        (e = Tn(n, e)),
                            (e = Bs(t, e, 1)),
                            (t = Vt(t, e, 1)),
                            (e = Le()),
                            t !== null && (Bn(t, 1, e), Ue(t, e));
                        break;
                    }
                }
                t = t.return;
            }
    }
    function zc(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t),
            (t = Le()),
            (e.pingedLanes |= e.suspendedLanes & n),
            ge === e &&
                (Ee & n) === n &&
                (me === 4 ||
                (me === 3 && (Ee & 130023424) === Ee && 500 > ae() - fi)
                    ? un(e, 0)
                    : (ai |= n)),
            Ue(e, t);
    }
    function xa(e, t) {
        t === 0 &&
            (e.mode & 1
                ? ((t = zr), (zr <<= 1), !(zr & 130023424) && (zr = 4194304))
                : (t = 1));
        var n = Le();
        (e = xt(e, t)), e !== null && (Bn(e, t, n), Ue(e, n));
    }
    function Tc(e) {
        var t = e.memoizedState,
            n = 0;
        t !== null && (n = t.retryLane), xa(e, n);
    }
    function Lc(e, t) {
        var n = 0;
        switch (e.tag) {
            case 13:
                var r = e.stateNode,
                    l = e.memoizedState;
                l !== null && (n = l.retryLane);
                break;
            case 19:
                r = e.stateNode;
                break;
            default:
                throw Error(m(314));
        }
        r !== null && r.delete(t), xa(e, n);
    }
    var _a;
    _a = function (e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps || Oe.current) Me = !0;
            else {
                if (!(e.lanes & n) && !(t.flags & 128))
                    return (Me = !1), yc(e, t, n);
                Me = !!(e.flags & 131072);
            }
        else (Me = !1), le && t.flags & 1048576 && rs(t, Jr, t.index);
        switch (((t.lanes = 0), t.tag)) {
            case 2:
                var r = t.type;
                cl(e, t), (e = t.pendingProps);
                var l = kn(t, _e.current);
                Pn(t, n), (l = Bu(null, t, r, e, l, n));
                var u = $u();
                return (
                    (t.flags |= 1),
                    typeof l == "object" &&
                    l !== null &&
                    typeof l.render == "function" &&
                    l.$$typeof === void 0
                        ? ((t.tag = 1),
                          (t.memoizedState = null),
                          (t.updateQueue = null),
                          De(r) ? ((u = !0), Yr(t)) : (u = !1),
                          (t.memoizedState =
                              l.state !== null && l.state !== void 0
                                  ? l.state
                                  : null),
                          Ou(t),
                          (l.updater = al),
                          (t.stateNode = l),
                          (l._reactInternals = t),
                          Xu(t, r, e, n),
                          (t = qu(null, t, r, !0, u, n)))
                        : ((t.tag = 0),
                          le && u && _u(t),
                          Te(null, t, l, n),
                          (t = t.child)),
                    t
                );
            case 16:
                r = t.elementType;
                e: {
                    switch (
                        (cl(e, t),
                        (e = t.pendingProps),
                        (l = r._init),
                        (r = l(r._payload)),
                        (t.type = r),
                        (l = t.tag = jc(r)),
                        (e = ut(r, e)),
                        l)
                    ) {
                        case 0:
                            t = Zu(null, t, r, e, n);
                            break e;
                        case 1:
                            t = Js(null, t, r, e, n);
                            break e;
                        case 11:
                            t = Qs(null, t, r, e, n);
                            break e;
                        case 14:
                            t = Ks(null, t, r, ut(r.type, e), n);
                            break e;
                    }
                    throw Error(m(306, r, ""));
                }
                return t;
            case 0:
                return (
                    (r = t.type),
                    (l = t.pendingProps),
                    (l = t.elementType === r ? l : ut(r, l)),
                    Zu(e, t, r, l, n)
                );
            case 1:
                return (
                    (r = t.type),
                    (l = t.pendingProps),
                    (l = t.elementType === r ? l : ut(r, l)),
                    Js(e, t, r, l, n)
                );
            case 3:
                e: {
                    if ((Zs(t), e === null)) throw Error(m(387));
                    (r = t.pendingProps),
                        (u = t.memoizedState),
                        (l = u.element),
                        ds(e, t),
                        nl(t, r, null, n);
                    var i = t.memoizedState;
                    if (((r = i.element), u.isDehydrated))
                        if (
                            ((u = {
                                element: r,
                                isDehydrated: !1,
                                cache: i.cache,
                                pendingSuspenseBoundaries:
                                    i.pendingSuspenseBoundaries,
                                transitions: i.transitions,
                            }),
                            (t.updateQueue.baseState = u),
                            (t.memoizedState = u),
                            t.flags & 256)
                        ) {
                            (l = Tn(Error(m(423)), t)), (t = qs(e, t, r, n, l));
                            break e;
                        } else if (r !== l) {
                            (l = Tn(Error(m(424)), t)), (t = qs(e, t, r, n, l));
                            break e;
                        } else
                            for (
                                We = Dt(t.stateNode.containerInfo.firstChild),
                                    He = t,
                                    le = !0,
                                    lt = null,
                                    n = fs(t, null, r, n),
                                    t.child = n;
                                n;

                            )
                                (n.flags = (n.flags & -3) | 4096),
                                    (n = n.sibling);
                    else {
                        if ((_n(), r === l)) {
                            t = Ct(e, t, n);
                            break e;
                        }
                        Te(e, t, r, n);
                    }
                    t = t.child;
                }
                return t;
            case 5:
                return (
                    hs(t),
                    e === null && Pu(t),
                    (r = t.type),
                    (l = t.pendingProps),
                    (u = e !== null ? e.memoizedProps : null),
                    (i = l.children),
                    gu(r, l)
                        ? (i = null)
                        : u !== null && gu(r, u) && (t.flags |= 32),
                    Gs(e, t),
                    Te(e, t, i, n),
                    t.child
                );
            case 6:
                return e === null && Pu(t), null;
            case 13:
                return bs(e, t, n);
            case 4:
                return (
                    Du(t, t.stateNode.containerInfo),
                    (r = t.pendingProps),
                    e === null ? (t.child = Cn(t, null, r, n)) : Te(e, t, r, n),
                    t.child
                );
            case 11:
                return (
                    (r = t.type),
                    (l = t.pendingProps),
                    (l = t.elementType === r ? l : ut(r, l)),
                    Qs(e, t, r, l, n)
                );
            case 7:
                return Te(e, t, t.pendingProps, n), t.child;
            case 8:
                return Te(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return Te(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (
                        ((r = t.type._context),
                        (l = t.pendingProps),
                        (u = t.memoizedProps),
                        (i = l.value),
                        ee(br, r._currentValue),
                        (r._currentValue = i),
                        u !== null)
                    )
                        if (rt(u.value, i)) {
                            if (u.children === l.children && !Oe.current) {
                                t = Ct(e, t, n);
                                break e;
                            }
                        } else
                            for (
                                u = t.child, u !== null && (u.return = t);
                                u !== null;

                            ) {
                                var o = u.dependencies;
                                if (o !== null) {
                                    i = u.child;
                                    for (var s = o.firstContext; s !== null; ) {
                                        if (s.context === r) {
                                            if (u.tag === 1) {
                                                (s = _t(-1, n & -n)),
                                                    (s.tag = 2);
                                                var p = u.updateQueue;
                                                if (p !== null) {
                                                    p = p.shared;
                                                    var y = p.pending;
                                                    y === null
                                                        ? (s.next = s)
                                                        : ((s.next = y.next),
                                                          (y.next = s)),
                                                        (p.pending = s);
                                                }
                                            }
                                            (u.lanes |= n),
                                                (s = u.alternate),
                                                s !== null && (s.lanes |= n),
                                                ju(u.return, n, t),
                                                (o.lanes |= n);
                                            break;
                                        }
                                        s = s.next;
                                    }
                                } else if (u.tag === 10)
                                    i = u.type === t.type ? null : u.child;
                                else if (u.tag === 18) {
                                    if (((i = u.return), i === null))
                                        throw Error(m(341));
                                    (i.lanes |= n),
                                        (o = i.alternate),
                                        o !== null && (o.lanes |= n),
                                        ju(i, n, t),
                                        (i = u.sibling);
                                } else i = u.child;
                                if (i !== null) i.return = u;
                                else
                                    for (i = u; i !== null; ) {
                                        if (i === t) {
                                            i = null;
                                            break;
                                        }
                                        if (((u = i.sibling), u !== null)) {
                                            (u.return = i.return), (i = u);
                                            break;
                                        }
                                        i = i.return;
                                    }
                                u = i;
                            }
                    Te(e, t, l.children, n), (t = t.child);
                }
                return t;
            case 9:
                return (
                    (l = t.type),
                    (r = t.pendingProps.children),
                    Pn(t, n),
                    (l = Ge(l)),
                    (r = r(l)),
                    (t.flags |= 1),
                    Te(e, t, r, n),
                    t.child
                );
            case 14:
                return (
                    (r = t.type),
                    (l = ut(r, t.pendingProps)),
                    (l = ut(r.type, l)),
                    Ks(e, t, r, l, n)
                );
            case 15:
                return Ys(e, t, t.type, t.pendingProps, n);
            case 17:
                return (
                    (r = t.type),
                    (l = t.pendingProps),
                    (l = t.elementType === r ? l : ut(r, l)),
                    cl(e, t),
                    (t.tag = 1),
                    De(r) ? ((e = !0), Yr(t)) : (e = !1),
                    Pn(t, n),
                    Us(t, r, l),
                    Xu(t, r, l, n),
                    qu(null, t, r, !0, e, n)
                );
            case 19:
                return ta(e, t, n);
            case 22:
                return Xs(e, t, n);
        }
        throw Error(m(156, t.tag));
    };
    function Ca(e, t) {
        return ro(e, t);
    }
    function Rc(e, t, n, r) {
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
    function qe(e, t, n, r) {
        return new Rc(e, t, n, r);
    }
    function gi(e) {
        return (e = e.prototype), !(!e || !e.isReactComponent);
    }
    function jc(e) {
        if (typeof e == "function") return gi(e) ? 1 : 0;
        if (e != null) {
            if (((e = e.$$typeof), e === ft)) return 11;
            if (e === ct) return 14;
        }
        return 2;
    }
    function Kt(e, t) {
        var n = e.alternate;
        return (
            n === null
                ? ((n = qe(e.tag, t, e.key, e.mode)),
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
                t === null
                    ? null
                    : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
        );
    }
    function El(e, t, n, r, l, u) {
        var i = 2;
        if (((r = e), typeof e == "function")) gi(e) && (i = 1);
        else if (typeof e == "string") i = 5;
        else
            e: switch (e) {
                case je:
                    return sn(n.children, l, u, t);
                case Ke:
                    (i = 8), (l |= 8);
                    break;
                case zt:
                    return (
                        (e = qe(12, n, t, l | 2)),
                        (e.elementType = zt),
                        (e.lanes = u),
                        e
                    );
                case Ve:
                    return (
                        (e = qe(13, n, t, l)),
                        (e.elementType = Ve),
                        (e.lanes = u),
                        e
                    );
                case tt:
                    return (
                        (e = qe(19, n, t, l)),
                        (e.elementType = tt),
                        (e.lanes = u),
                        e
                    );
                case oe:
                    return xl(n, l, u, t);
                default:
                    if (typeof e == "object" && e !== null)
                        switch (e.$$typeof) {
                            case gt:
                                i = 10;
                                break e;
                            case Xt:
                                i = 9;
                                break e;
                            case ft:
                                i = 11;
                                break e;
                            case ct:
                                i = 14;
                                break e;
                            case Ie:
                                (i = 16), (r = null);
                                break e;
                        }
                    throw Error(m(130, e == null ? e : typeof e, ""));
            }
        return (
            (t = qe(i, n, t, l)),
            (t.elementType = e),
            (t.type = r),
            (t.lanes = u),
            t
        );
    }
    function sn(e, t, n, r) {
        return (e = qe(7, e, r, t)), (e.lanes = n), e;
    }
    function xl(e, t, n, r) {
        return (
            (e = qe(22, e, r, t)),
            (e.elementType = oe),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
        );
    }
    function wi(e, t, n) {
        return (e = qe(6, e, null, t)), (e.lanes = n), e;
    }
    function Si(e, t, n) {
        return (
            (t = qe(4, e.children !== null ? e.children : [], e.key, t)),
            (t.lanes = n),
            (t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation,
            }),
            t
        );
    }
    function Ic(e, t, n, r, l) {
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
            (this.eventTimes = Yl(0)),
            (this.expirationTimes = Yl(-1)),
            (this.entangledLanes =
                this.finishedLanes =
                this.mutableReadLanes =
                this.expiredLanes =
                this.pingedLanes =
                this.suspendedLanes =
                this.pendingLanes =
                    0),
            (this.entanglements = Yl(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = l),
            (this.mutableSourceEagerHydrationData = null);
    }
    function ki(e, t, n, r, l, u, i, o, s) {
        return (
            (e = new Ic(e, t, n, o, s)),
            t === 1 ? ((t = 1), u === !0 && (t |= 8)) : (t = 0),
            (u = qe(3, null, null, t)),
            (e.current = u),
            (u.stateNode = e),
            (u.memoizedState = {
                element: r,
                isDehydrated: n,
                cache: null,
                transitions: null,
                pendingSuspenseBoundaries: null,
            }),
            Ou(u),
            e
        );
    }
    function Oc(e, t, n) {
        var r =
            3 < arguments.length && arguments[3] !== void 0
                ? arguments[3]
                : null;
        return {
            $$typeof: ze,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
        };
    }
    function Na(e) {
        if (!e) return Ft;
        e = e._reactInternals;
        e: {
            if (Gt(e) !== e || e.tag !== 1) throw Error(m(170));
            var t = e;
            do {
                switch (t.tag) {
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1:
                        if (De(t.type)) {
                            t =
                                t.stateNode
                                    .__reactInternalMemoizedMergedChildContext;
                            break e;
                        }
                }
                t = t.return;
            } while (t !== null);
            throw Error(m(171));
        }
        if (e.tag === 1) {
            var n = e.type;
            if (De(n)) return es(e, n, t);
        }
        return t;
    }
    function Pa(e, t, n, r, l, u, i, o, s) {
        return (
            (e = ki(n, r, !0, e, l, u, i, o, s)),
            (e.context = Na(null)),
            (n = e.current),
            (r = Le()),
            (l = Wt(n)),
            (u = _t(r, l)),
            (u.callback = t ?? null),
            Vt(n, u, l),
            (e.current.lanes = l),
            Bn(e, l, r),
            Ue(e, r),
            e
        );
    }
    function _l(e, t, n, r) {
        var l = t.current,
            u = Le(),
            i = Wt(l);
        return (
            (n = Na(n)),
            t.context === null ? (t.context = n) : (t.pendingContext = n),
            (t = _t(u, i)),
            (t.payload = { element: e }),
            (r = r === void 0 ? null : r),
            r !== null && (t.callback = r),
            (e = Vt(l, t, i)),
            e !== null && (st(e, l, i, u), tl(e, l, i)),
            i
        );
    }
    function Cl(e) {
        if (((e = e.current), !e.child)) return null;
        switch (e.child.tag) {
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode;
        }
    }
    function za(e, t) {
        if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t;
        }
    }
    function Ei(e, t) {
        za(e, t), (e = e.alternate) && za(e, t);
    }
    function Dc() {
        return null;
    }
    var Ta =
        typeof reportError == "function"
            ? reportError
            : function (e) {
                  console.error(e);
              };
    function xi(e) {
        this._internalRoot = e;
    }
    (Nl.prototype.render = xi.prototype.render =
        function (e) {
            var t = this._internalRoot;
            if (t === null) throw Error(m(409));
            _l(e, t, null, null);
        }),
        (Nl.prototype.unmount = xi.prototype.unmount =
            function () {
                var e = this._internalRoot;
                if (e !== null) {
                    this._internalRoot = null;
                    var t = e.containerInfo;
                    ln(function () {
                        _l(null, e, null, null);
                    }),
                        (t[wt] = null);
                }
            });
    function Nl(e) {
        this._internalRoot = e;
    }
    Nl.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = co();
            e = { blockedOn: null, target: e, priority: t };
            for (
                var n = 0;
                n < jt.length && t !== 0 && t < jt[n].priority;
                n++
            );
            jt.splice(n, 0, e), n === 0 && ho(e);
        }
    };
    function _i(e) {
        return !(
            !e ||
            (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
        );
    }
    function Pl(e) {
        return !(
            !e ||
            (e.nodeType !== 1 &&
                e.nodeType !== 9 &&
                e.nodeType !== 11 &&
                (e.nodeType !== 8 ||
                    e.nodeValue !== " react-mount-point-unstable "))
        );
    }
    function La() {}
    function Mc(e, t, n, r, l) {
        if (l) {
            if (typeof r == "function") {
                var u = r;
                r = function () {
                    var p = Cl(i);
                    u.call(p);
                };
            }
            var i = Pa(t, r, e, 0, null, !1, !1, "", La);
            return (
                (e._reactRootContainer = i),
                (e[wt] = i.current),
                tr(e.nodeType === 8 ? e.parentNode : e),
                ln(),
                i
            );
        }
        for (; (l = e.lastChild); ) e.removeChild(l);
        if (typeof r == "function") {
            var o = r;
            r = function () {
                var p = Cl(s);
                o.call(p);
            };
        }
        var s = ki(e, 0, !1, null, null, !1, !1, "", La);
        return (
            (e._reactRootContainer = s),
            (e[wt] = s.current),
            tr(e.nodeType === 8 ? e.parentNode : e),
            ln(function () {
                _l(t, s, n, r);
            }),
            s
        );
    }
    function zl(e, t, n, r, l) {
        var u = n._reactRootContainer;
        if (u) {
            var i = u;
            if (typeof l == "function") {
                var o = l;
                l = function () {
                    var s = Cl(i);
                    o.call(s);
                };
            }
            _l(t, i, e, l);
        } else i = Mc(n, t, e, l, r);
        return Cl(i);
    }
    (ao = function (e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = Vn(t.pendingLanes);
                    n !== 0 &&
                        (Xl(t, n | 1),
                        Ue(t, ae()),
                        !(H & 6) && ((jn = ae() + 500), Ut()));
                }
                break;
            case 13:
                ln(function () {
                    var r = xt(e, 1);
                    if (r !== null) {
                        var l = Le();
                        st(r, e, 1, l);
                    }
                }),
                    Ei(e, 1);
        }
    }),
        (Gl = function (e) {
            if (e.tag === 13) {
                var t = xt(e, 134217728);
                if (t !== null) {
                    var n = Le();
                    st(t, e, 134217728, n);
                }
                Ei(e, 134217728);
            }
        }),
        (fo = function (e) {
            if (e.tag === 13) {
                var t = Wt(e),
                    n = xt(e, t);
                if (n !== null) {
                    var r = Le();
                    st(n, e, t, r);
                }
                Ei(e, t);
            }
        }),
        (co = function () {
            return J;
        }),
        (po = function (e, t) {
            var n = J;
            try {
                return (J = e), t();
            } finally {
                J = n;
            }
        }),
        (Bl = function (e, t, n) {
            switch (t) {
                case "input":
                    if (
                        (Il(e, n),
                        (t = n.name),
                        n.type === "radio" && t != null)
                    ) {
                        for (n = e; n.parentNode; ) n = n.parentNode;
                        for (
                            n = n.querySelectorAll(
                                "input[name=" +
                                    JSON.stringify("" + t) +
                                    '][type="radio"]'
                            ),
                                t = 0;
                            t < n.length;
                            t++
                        ) {
                            var r = n[t];
                            if (r !== e && r.form === e.form) {
                                var l = Qr(r);
                                if (!l) throw Error(m(90));
                                Mi(r), Il(r, l);
                            }
                        }
                    }
                    break;
                case "textarea":
                    Bi(e, n);
                    break;
                case "select":
                    (t = n.value), t != null && an(e, !!n.multiple, t, !1);
            }
        }),
        (Ji = hi),
        (Zi = ln);
    var Fc = { usingClientEntryPoint: !1, Events: [lr, wn, Qr, Xi, Gi, hi] },
        gr = {
            findFiberByHostInstance: Jt,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
        },
        Uc = {
            bundleType: gr.bundleType,
            version: gr.version,
            rendererPackageName: gr.rendererPackageName,
            rendererConfig: gr.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: xe.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
                return (e = to(e)), e === null ? null : e.stateNode;
            },
            findFiberByHostInstance: gr.findFiberByHostInstance || Dc,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
        };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Tl.isDisabled && Tl.supportsFiber)
            try {
                (Nr = Tl.inject(Uc)), (dt = Tl);
            } catch {}
    }
    return (
        (Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fc),
        (Ae.createPortal = function (e, t) {
            var n =
                2 < arguments.length && arguments[2] !== void 0
                    ? arguments[2]
                    : null;
            if (!_i(t)) throw Error(m(200));
            return Oc(e, t, null, n);
        }),
        (Ae.createRoot = function (e, t) {
            if (!_i(e)) throw Error(m(299));
            var n = !1,
                r = "",
                l = Ta;
            return (
                t != null &&
                    (t.unstable_strictMode === !0 && (n = !0),
                    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
                    t.onRecoverableError !== void 0 &&
                        (l = t.onRecoverableError)),
                (t = ki(e, 1, !1, null, null, n, !1, r, l)),
                (e[wt] = t.current),
                tr(e.nodeType === 8 ? e.parentNode : e),
                new xi(t)
            );
        }),
        (Ae.findDOMNode = function (e) {
            if (e == null) return null;
            if (e.nodeType === 1) return e;
            var t = e._reactInternals;
            if (t === void 0)
                throw typeof e.render == "function"
                    ? Error(m(188))
                    : ((e = Object.keys(e).join(",")), Error(m(268, e)));
            return (e = to(t)), (e = e === null ? null : e.stateNode), e;
        }),
        (Ae.flushSync = function (e) {
            return ln(e);
        }),
        (Ae.hydrate = function (e, t, n) {
            if (!Pl(t)) throw Error(m(200));
            return zl(null, e, t, !0, n);
        }),
        (Ae.hydrateRoot = function (e, t, n) {
            if (!_i(e)) throw Error(m(405));
            var r = (n != null && n.hydratedSources) || null,
                l = !1,
                u = "",
                i = Ta;
            if (
                (n != null &&
                    (n.unstable_strictMode === !0 && (l = !0),
                    n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
                    n.onRecoverableError !== void 0 &&
                        (i = n.onRecoverableError)),
                (t = Pa(t, null, e, 1, n ?? null, l, !1, u, i)),
                (e[wt] = t.current),
                tr(e),
                r)
            )
                for (e = 0; e < r.length; e++)
                    (n = r[e]),
                        (l = n._getVersion),
                        (l = l(n._source)),
                        t.mutableSourceEagerHydrationData == null
                            ? (t.mutableSourceEagerHydrationData = [n, l])
                            : t.mutableSourceEagerHydrationData.push(n, l);
            return new Nl(t);
        }),
        (Ae.render = function (e, t, n) {
            if (!Pl(t)) throw Error(m(200));
            return zl(null, e, t, !1, n);
        }),
        (Ae.unmountComponentAtNode = function (e) {
            if (!Pl(e)) throw Error(m(40));
            return e._reactRootContainer
                ? (ln(function () {
                      zl(null, null, e, !1, function () {
                          (e._reactRootContainer = null), (e[wt] = null);
                      });
                  }),
                  !0)
                : !1;
        }),
        (Ae.unstable_batchedUpdates = hi),
        (Ae.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Pl(n)) throw Error(m(200));
            if (e == null || e._reactInternals === void 0) throw Error(m(38));
            return zl(e, t, n, !1, r);
        }),
        (Ae.version = "18.3.1-next-f1338f8080-20240426"),
        Ae
    );
}
var Ua;
function Yc() {
    if (Ua) return Pi.exports;
    Ua = 1;
    function g() {
        if (
            !(
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
            )
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
            } catch (N) {
                console.error(N);
            }
    }
    return g(), (Pi.exports = Kc()), Pi.exports;
}
var Aa;
function Xc() {
    if (Aa) return Ll;
    Aa = 1;
    var g = Yc();
    return (Ll.createRoot = g.createRoot), (Ll.hydrateRoot = g.hydrateRoot), Ll;
}
var Gc = Xc();
function Jc({ children: g }) {
    return R.jsx("div", { className: "left-panel", children: g });
}
const Rl = he.createContext({ userId: 1 }),
    Zc = ({ children: g }) => {
        const [N, m] = he.useState(1);
        return R.jsx(Rl.Provider, {
            value: { userId: N, setUserId: m },
            children: g,
        });
    },
    qc = "_select_1pbd5_1",
    bc = { select: qc };
function ed() {
    const { userId: g, setUserId: N } = he.useContext(Rl),
        m = ($) => {
            N(Number($.target.value)), console.log(Number($.target.value));
        };
    return R.jsx(R.Fragment, {
        children: R.jsxs("select", {
            className: bc.select,
            name: "user",
            id: "user",
            value: g,
            onChange: m,
            children: [
                R.jsx("option", { value: "1", children: "Антон" }),
                R.jsx("option", { value: "2", children: "Вася" }),
            ],
        }),
    });
}
const td = "_logo_tsrpx_1",
    nd = { logo: td };
function rd() {
    return R.jsxs(R.Fragment, {
        children: [
            R.jsx("img", {
                className: nd.logo,
                src: "./logo.png",
                alt: "Логотип журнала",
            }),
            R.jsx(ed, {}),
        ],
    });
}
function Ba({ children: g, className: N, ...m }) {
    const $ = "card-button" + (N ? " " + N : "");
    return R.jsx("button", { ...m, className: $, children: g });
}
function ld({ clearForm: g }) {
    return R.jsxs(Ba, {
        className: "journal-add",
        onClick: g,
        children: [
            R.jsx("img", {
                className: "add",
                src: "./add.svg",
                alt: "Добавить",
            }),
            "Новое воспоминание",
        ],
    });
}
function ud({ title: g, date: N, text: m }) {
    const $ = new Intl.DateTimeFormat("ru-RU").format(N);
    return R.jsxs(R.Fragment, {
        children: [
            R.jsx("h2", { className: "jurnal-item_header", children: g }),
            R.jsxs("h2", {
                className: "jurnal-item_body",
                children: [
                    R.jsx("div", {
                        className: "jurnal-item_date",
                        children: $,
                    }),
                    R.jsx("div", {
                        className: "jurnal-item_text",
                        children: m,
                    }),
                ],
            }),
        ],
    });
}
function id({ items: g, setItem: N }) {
    const { userId: m } = he.useContext(Rl),
        $ = (k, M) => (k.date < M.date ? 1 : -1),
        T = he.useMemo(() => g.filter((k) => k.userId === m).sort($), [g, m]);
    return g.length === 0
        ? R.jsx("p", { children: "Записей нет, добавте 1 запись" })
        : R.jsx(R.Fragment, {
              children: T.map((k) =>
                  R.jsx(
                      Ba,
                      {
                          onClick: () => {
                              N(k);
                          },
                          children: R.jsx(ud, {
                              text: k.text,
                              title: k.title,
                              date: k.date,
                          }),
                      },
                      k.id
                  )
              ),
          });
}
function od({ children: g }) {
    return R.jsx("div", { className: "body", children: g });
}
function sd({ text: g, onClick: N }) {
    return R.jsx("button", {
        className: "button accent",
        onClick: N,
        children: g,
    });
}
const ad = "_input_1otmv_39",
    fd = "_invalid_1otmv_77",
    Pt = {
        "journal-form": "_journal-form_1otmv_1",
        "form-label": "_form-label_1otmv_13",
        "form-row": "_form-row_1otmv_27",
        input: ad,
        invalid: fd,
        delete: "_delete_1otmv_87",
    };
var Li = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ var Va;
function cd() {
    return (
        Va ||
            ((Va = 1),
            (function (g) {
                (function () {
                    var N = {}.hasOwnProperty;
                    function m() {
                        for (var k = "", M = 0; M < arguments.length; M++) {
                            var F = arguments[M];
                            F && (k = T(k, $(F)));
                        }
                        return k;
                    }
                    function $(k) {
                        if (typeof k == "string" || typeof k == "number")
                            return k;
                        if (typeof k != "object") return "";
                        if (Array.isArray(k)) return m.apply(null, k);
                        if (
                            k.toString !== Object.prototype.toString &&
                            !k.toString.toString().includes("[native code]")
                        )
                            return k.toString();
                        var M = "";
                        for (var F in k) N.call(k, F) && k[F] && (M = T(M, F));
                        return M;
                    }
                    function T(k, M) {
                        return M ? (k ? k + " " + M : k + M) : k;
                    }
                    g.exports
                        ? ((m.default = m), (g.exports = m))
                        : (window.classNames = m);
                })();
            })(Li)),
        Li.exports
    );
}
var dd = cd();
const $a = Vc(dd),
    Oi = {
        isValid: { text: !0, title: !0, date: !0 },
        values: { text: "", title: "", date: "", tag: "" },
        isFormReadyToSubmit: !1,
    };
function pd(g, N) {
    var m, $;
    switch (N.type) {
        case "SET_VALUE":
            return { ...g, values: { ...g.values, ...N.payload } };
        case "CLEAR":
            return { ...g, values: Oi.values, isFormReadyToSubmit: !1 };
        case "RESET_VALIDITY":
            return { ...g, isValid: Oi.isValid };
        case "SUBMIT": {
            const T = (m = g.values.text) == null ? void 0 : m.trim().length,
                k = ($ = g.values.title) == null ? void 0 : $.trim().length,
                M = g.values.date;
            return {
                ...g,
                isValid: { text: T, title: k, date: M },
                isFormReadyToSubmit: k && T && M,
            };
        }
    }
}
const md = "_input_1hm2x_1",
    hd = "_invalid_1hm2x_37",
    Ri = { input: md, "input-title": "_input-title_1hm2x_29", invalid: hd },
    ji = he.forwardRef(function (
        { className: N, isValid: m = !0, appearence: $, ...T },
        k
    ) {
        return R.jsx("input", {
            ref: k,
            ...T,
            className: $a(N, Ri.input, {
                [Ri.invalid]: !m,
                [Ri["input-title"]]: $ === "title",
            }),
        });
    });
function vd({ onSubmit: g, data: N, onDelete: m }) {
    const [$, T] = he.useReducer(pd, Oi),
        { isValid: k, isFormReadyToSubmit: M, values: F } = $,
        Y = he.useRef(),
        ve = he.useRef(),
        de = he.useRef(),
        { userId: X } = he.useContext(Rl),
        Z = (U) => {
            switch (!0) {
                case !U.title:
                    Y.current.focus();
                    break;
                case !U.date:
                    ve.current.focus();
                    break;
                case !U.text:
                    de.current.focus();
                    break;
            }
        };
    he.useEffect(() => {
        N ||
            (T({ type: "CLEAR" }),
            T({ type: "SET_VALUE", payload: { userId: X } })),
            T({ type: "SET_VALUE", payload: { ...N } });
    }, [N]),
        he.useEffect(() => {
            let U;
            return (
                (!k.date || !k.text || !k.title) &&
                    (Z(k),
                    (U = setTimeout(() => {
                        T({ type: "RESET_VALIDITY" });
                    }, 3e3))),
                () => {
                    clearTimeout(U);
                }
            );
        }, [k]),
        he.useEffect(() => {
            M &&
                (g(F),
                T({ type: "CLEAR" }),
                T({ type: "SET_VALUE", payload: { userId: X } }));
        }, [M, F, g, X]),
        he.useEffect(() => {
            T({ type: "SET_VALUE", payload: { userId: X } });
        }, [X]);
    const Re = (U) => {
            U.preventDefault(), T({ type: "SUBMIT" });
        },
        Se = (U) => {
            T({
                type: "SET_VALUE",
                payload: { [U.target.name]: U.target.value },
            });
        },
        q = () => {
            m(N.id),
                T({ type: "CLEAR" }),
                T({ type: "SET_VALUE", payload: { userId: X } });
        };
    return R.jsxs("form", {
        className: Pt["journal-form"],
        onSubmit: Re,
        children: [
            R.jsxs("div", {
                className: Pt["form-row"],
                children: [
                    R.jsx(ji, {
                        ref: Y,
                        onChange: Se,
                        value: F.title,
                        type: "text",
                        name: "title",
                        appearence: "title",
                        isValid: k.title,
                    }),
                    (N == null ? void 0 : N.id) &&
                        R.jsx("button", {
                            onClick: () => q(),
                            className: Pt.delete,
                            type: "button",
                            children: R.jsx("img", {
                                src: "./delete.svg",
                                alt: "кнопка удаления",
                            }),
                        }),
                ],
            }),
            R.jsxs("div", {
                className: Pt["form-row"],
                children: [
                    R.jsxs("label", {
                        htmlFor: "date",
                        className: Pt["form-label"],
                        children: [
                            R.jsx("img", {
                                src: "./calendar.svg",
                                alt: "Иконка календарь",
                            }),
                            R.jsx("span", { children: "Дата" }),
                        ],
                    }),
                    R.jsx(ji, {
                        ref: ve,
                        onChange: Se,
                        value: F.date
                            ? new Date(F.date).toISOString().slice(0, 10)
                            : "",
                        type: "date",
                        id: "date",
                        name: "date",
                        isValid: k.date,
                    }),
                ],
            }),
            R.jsxs("div", {
                className: Pt["form-row"],
                children: [
                    R.jsxs("label", {
                        htmlFor: "tag",
                        className: Pt["form-label"],
                        children: [
                            R.jsx("img", {
                                src: "./folder.svg",
                                alt: "Иконка папки",
                            }),
                            R.jsx("span", { children: "Метки" }),
                        ],
                    }),
                    R.jsx(ji, {
                        onChange: Se,
                        value: F.tag,
                        type: "text",
                        id: "tag",
                        name: "tag",
                    }),
                ],
            }),
            R.jsx("textarea", {
                ref: de,
                onChange: Se,
                value: F.text,
                name: "text",
                id: "",
                cols: "30",
                rows: "10",
                className: $a(Pt.input, { [Pt.invalid]: !k.text }),
            }),
            R.jsx(sd, { text: "Сохранить" }),
        ],
    });
}
function yd(g) {
    const [N, m] = he.useState();
    return (
        he.useEffect(() => {
            localStorage.getItem(g) ||
                localStorage.setItem(g, JSON.stringify([]));
            const T = JSON.parse(localStorage.getItem(g));
            T && m(T);
        }, []),
        [
            N,
            (T) => {
                localStorage.setItem(g, JSON.stringify(T)), m(T);
            },
        ]
    );
}
function Ii(g) {
    return g ? g.map((N) => ({ ...N, date: new Date(N.date) })) : [];
}
function gd() {
    const [g, N] = yd("data"),
        [m, $] = he.useState(null),
        T = (M) => {
            M.id
                ? N([...Ii(g).map((F) => (F.id === M.id ? { ...M } : F))])
                : N([
                      ...Ii(g),
                      {
                          ...M,
                          date: new Date(M.date),
                          id:
                              g.length > 0
                                  ? Math.max(...g.map((F) => F.id)) + 1
                                  : 1,
                      },
                  ]);
        },
        k = (M) => {
            N([...g.filter((F) => F.id !== M)]);
        };
    return R.jsx(Zc, {
        children: R.jsxs("div", {
            className: "app",
            children: [
                R.jsxs(Jc, {
                    children: [
                        R.jsx(rd, {}),
                        R.jsx(ld, {
                            clearForm: () => {
                                $(null);
                            },
                        }),
                        R.jsx(id, { items: Ii(g), setItem: $ }),
                    ],
                }),
                R.jsx(od, {
                    children: R.jsx(vd, { onSubmit: T, data: m, onDelete: k }),
                }),
            ],
        }),
    });
}
Gc.createRoot(document.getElementById("root")).render(
    R.jsx(he.StrictMode, { children: R.jsx(gd, {}) })
);
