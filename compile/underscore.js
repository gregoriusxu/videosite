"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (n) {
  return typeof n === "undefined" ? "undefined" : _typeof2(n);
} : function (n) {
  return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n === "undefined" ? "undefined" : _typeof2(n);
};!function () {
  function r() {}function s(n) {
    return n instanceof s ? n : this instanceof s ? void (this._wrapped = n) : new s(n);
  }var n = "object" == ("undefined" == typeof self ? "undefined" : _typeof(self)) && self.self === self && self || "object" == ("undefined" == typeof global ? "undefined" : _typeof(global)) && global.global === global && global || this || {},
      t = n._,
      e = Array.prototype,
      o = Object.prototype,
      p = "undefined" != typeof Symbol ? Symbol.prototype : null,
      u = e.push,
      c = e.slice,
      h = o.toString,
      i = o.hasOwnProperty,
      a = Array.isArray,
      f = Object.keys,
      l = Object.create;"undefined" == typeof exports || exports.nodeType ? n._ = s : ("undefined" != typeof module && !module.nodeType && module.exports && (exports = module.exports = s), exports._ = s), s.VERSION = "1.9.1";function v(u, i, n) {
    if (void 0 === i) return u;switch (null == n ? 3 : n) {case 1:
        return function (n) {
          return u.call(i, n);
        };case 3:
        return function (n, t, r) {
          return u.call(i, n, t, r);
        };case 4:
        return function (n, t, r, e) {
          return u.call(i, n, t, r, e);
        };}return function () {
      return u.apply(i, arguments);
    };
  }function y(n, t, r) {
    return s.iteratee !== d ? s.iteratee(n, t) : null == n ? s.identity : s.isFunction(n) ? v(n, t, r) : s.isObject(n) && !s.isArray(n) ? s.matcher(n) : s.property(n);
  }var d;s.iteratee = d = function d(n, t) {
    return y(n, t, 1 / 0);
  };function g(u, i) {
    return i = null == i ? u.length - 1 : +i, function () {
      for (var n = Math.max(arguments.length - i, 0), t = Array(n), r = 0; r < n; r++) {
        t[r] = arguments[r + i];
      }switch (i) {case 0:
          return u.call(this, t);case 1:
          return u.call(this, arguments[0], t);case 2:
          return u.call(this, arguments[0], arguments[1], t);}var e = Array(i + 1);for (r = 0; r < i; r++) {
        e[r] = arguments[r];
      }return e[i] = t, u.apply(this, e);
    };
  }function m(n) {
    if (!s.isObject(n)) return {};if (l) return l(n);r.prototype = n;var t = new r();return r.prototype = null, t;
  }function b(t) {
    return function (n) {
      return null == n ? void 0 : n[t];
    };
  }function _(n, t) {
    return null != n && i.call(n, t);
  }function j(n, t) {
    for (var r = t.length, e = 0; e < r; e++) {
      if (null == n) return;n = n[t[e]];
    }return r ? n : void 0;
  }function x(n) {
    var t = w(n);return "number" == typeof t && 0 <= t && t <= A;
  }var A = Math.pow(2, 53) - 1,
      w = b("length");s.each = s.forEach = function (n, t, r) {
    var e, u;if (t = v(t, r), x(n)) for (e = 0, u = n.length; e < u; e++) {
      t(n[e], e, n);
    } else {
      var i = s.keys(n);for (e = 0, u = i.length; e < u; e++) {
        t(n[i[e]], i[e], n);
      }
    }return n;
  }, s.map = s.collect = function (n, t, r) {
    t = y(t, r);for (var e = !x(n) && s.keys(n), u = (e || n).length, i = Array(u), o = 0; o < u; o++) {
      var a = e ? e[o] : o;i[o] = t(n[a], a, n);
    }return i;
  };function S(c) {
    return function (n, t, r, e) {
      var u = 3 <= arguments.length;return function (n, t, r, e) {
        var u = !x(n) && s.keys(n),
            i = (u || n).length,
            o = 0 < c ? 0 : i - 1;for (e || (r = n[u ? u[o] : o], o += c); 0 <= o && o < i; o += c) {
          var a = u ? u[o] : o;r = t(r, n[a], a, n);
        }return r;
      }(n, v(t, e, 4), r, u);
    };
  }s.reduce = s.foldl = s.inject = S(1), s.reduceRight = s.foldr = S(-1), s.find = s.detect = function (n, t, r) {
    var e = (x(n) ? s.findIndex : s.findKey)(n, t, r);if (void 0 !== e && -1 !== e) return n[e];
  }, s.filter = s.select = function (n, e, t) {
    var u = [];return e = y(e, t), s.each(n, function (n, t, r) {
      e(n, t, r) && u.push(n);
    }), u;
  }, s.reject = function (n, t, r) {
    return s.filter(n, s.negate(y(t)), r);
  }, s.every = s.all = function (n, t, r) {
    t = y(t, r);for (var e = !x(n) && s.keys(n), u = (e || n).length, i = 0; i < u; i++) {
      var o = e ? e[i] : i;if (!t(n[o], o, n)) return !1;
    }return !0;
  }, s.some = s.any = function (n, t, r) {
    t = y(t, r);for (var e = !x(n) && s.keys(n), u = (e || n).length, i = 0; i < u; i++) {
      var o = e ? e[i] : i;if (t(n[o], o, n)) return !0;
    }return !1;
  }, s.contains = s.includes = s.include = function (n, t, r, e) {
    return x(n) || (n = s.values(n)), "number" == typeof r && !e || (r = 0), 0 <= s.indexOf(n, t, r);
  }, s.invoke = g(function (n, r, e) {
    var u, i;return s.isFunction(r) ? i = r : s.isArray(r) && (u = r.slice(0, -1), r = r[r.length - 1]), s.map(n, function (n) {
      var t = i;if (!t) {
        if (u && u.length && (n = j(n, u)), null == n) return;t = n[r];
      }return null == t ? t : t.apply(n, e);
    });
  }), s.pluck = function (n, t) {
    return s.map(n, s.property(t));
  }, s.where = function (n, t) {
    return s.filter(n, s.matcher(t));
  }, s.findWhere = function (n, t) {
    return s.find(n, s.matcher(t));
  }, s.max = function (n, e, t) {
    var r,
        u,
        i = -1 / 0,
        o = -1 / 0;if (null == e || "number" == typeof e && "object" != _typeof(n[0]) && null != n) for (var a = 0, c = (n = x(n) ? n : s.values(n)).length; a < c; a++) {
      null != (r = n[a]) && i < r && (i = r);
    } else e = y(e, t), s.each(n, function (n, t, r) {
      u = e(n, t, r), (o < u || u === -1 / 0 && i === -1 / 0) && (i = n, o = u);
    });return i;
  }, s.min = function (n, e, t) {
    var r,
        u,
        i = 1 / 0,
        o = 1 / 0;if (null == e || "number" == typeof e && "object" != _typeof(n[0]) && null != n) for (var a = 0, c = (n = x(n) ? n : s.values(n)).length; a < c; a++) {
      null != (r = n[a]) && r < i && (i = r);
    } else e = y(e, t), s.each(n, function (n, t, r) {
      ((u = e(n, t, r)) < o || u === 1 / 0 && i === 1 / 0) && (i = n, o = u);
    });return i;
  }, s.shuffle = function (n) {
    return s.sample(n, 1 / 0);
  }, s.sample = function (n, t, r) {
    if (null == t || r) return x(n) || (n = s.values(n)), n[s.random(n.length - 1)];var e = x(n) ? s.clone(n) : s.values(n),
        u = w(e);t = Math.max(Math.min(t, u), 0);for (var i = u - 1, o = 0; o < t; o++) {
      var a = s.random(o, i),
          c = e[o];e[o] = e[a], e[a] = c;
    }return e.slice(0, t);
  }, s.sortBy = function (n, e, t) {
    var u = 0;return e = y(e, t), s.pluck(s.map(n, function (n, t, r) {
      return { value: n, index: u++, criteria: e(n, t, r) };
    }).sort(function (n, t) {
      var r = n.criteria,
          e = t.criteria;if (r !== e) {
        if (e < r || void 0 === r) return 1;if (r < e || void 0 === e) return -1;
      }return n.index - t.index;
    }), "value");
  };function O(o, t) {
    return function (e, u, n) {
      var i = t ? [[], []] : {};return u = y(u, n), s.each(e, function (n, t) {
        var r = u(n, t, e);o(i, n, r);
      }), i;
    };
  }s.groupBy = O(function (n, t, r) {
    _(n, r) ? n[r].push(t) : n[r] = [t];
  }), s.indexBy = O(function (n, t, r) {
    n[r] = t;
  }), s.countBy = O(function (n, t, r) {
    _(n, r) ? n[r]++ : n[r] = 1;
  });var k = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;s.toArray = function (n) {
    return n ? s.isArray(n) ? c.call(n) : s.isString(n) ? n.match(k) : x(n) ? s.map(n, s.identity) : s.values(n) : [];
  }, s.size = function (n) {
    return null == n ? 0 : x(n) ? n.length : s.keys(n).length;
  }, s.partition = O(function (n, t, r) {
    n[r ? 0 : 1].push(t);
  }, !0), s.first = s.head = s.take = function (n, t, r) {
    return null == n || n.length < 1 ? null == t ? void 0 : [] : null == t || r ? n[0] : s.initial(n, n.length - t);
  }, s.initial = function (n, t, r) {
    return c.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t)));
  }, s.last = function (n, t, r) {
    return null == n || n.length < 1 ? null == t ? void 0 : [] : null == t || r ? n[n.length - 1] : s.rest(n, Math.max(0, n.length - t));
  }, s.rest = s.tail = s.drop = function (n, t, r) {
    return c.call(n, null == t || r ? 1 : t);
  }, s.compact = function (n) {
    return s.filter(n, Boolean);
  };function M(n, t, r, e) {
    for (var u = (e = e || []).length, i = 0, o = w(n); i < o; i++) {
      var a = n[i];if (x(a) && (s.isArray(a) || s.isArguments(a))) {
        if (t) for (var c = 0, f = a.length; c < f;) {
          e[u++] = a[c++];
        } else M(a, t, r, e), u = e.length;
      } else r || (e[u++] = a);
    }return e;
  }s.flatten = function (n, t) {
    return M(n, t, !1);
  }, s.without = g(function (n, t) {
    return s.difference(n, t);
  }), s.uniq = s.unique = function (n, t, r, e) {
    s.isBoolean(t) || (e = r, r = t, t = !1), null != r && (r = y(r, e));for (var u = [], i = [], o = 0, a = w(n); o < a; o++) {
      var c = n[o],
          f = r ? r(c, o, n) : c;t && !r ? (o && i === f || u.push(c), i = f) : r ? s.contains(i, f) || (i.push(f), u.push(c)) : s.contains(u, c) || u.push(c);
    }return u;
  }, s.union = g(function (n) {
    return s.uniq(M(n, !0, !0));
  }), s.intersection = function (n) {
    for (var t = [], r = arguments.length, e = 0, u = w(n); e < u; e++) {
      var i = n[e];if (!s.contains(t, i)) {
        var o;for (o = 1; o < r && s.contains(arguments[o], i); o++) {}o === r && t.push(i);
      }
    }return t;
  }, s.difference = g(function (n, t) {
    return t = M(t, !0, !0), s.filter(n, function (n) {
      return !s.contains(t, n);
    });
  }), s.zip = g(s.unzip = function (n) {
    for (var t = n && s.max(n, w).length || 0, r = Array(t), e = 0; e < t; e++) {
      r[e] = s.pluck(n, e);
    }return r;
  }), s.object = function (n, t) {
    for (var r = {}, e = 0, u = w(n); e < u; e++) {
      t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
    }return r;
  };function F(i) {
    return function (n, t, r) {
      t = y(t, r);for (var e = w(n), u = 0 < i ? 0 : e - 1; 0 <= u && u < e; u += i) {
        if (t(n[u], u, n)) return u;
      }return -1;
    };
  }s.findIndex = F(1), s.findLastIndex = F(-1);function E(i, o, a) {
    return function (n, t, r) {
      var e = 0,
          u = w(n);if ("number" == typeof r) 0 < i ? e = 0 <= r ? r : Math.max(r + u, e) : u = 0 <= r ? Math.min(r + 1, u) : r + u + 1;else if (a && r && u) return n[r = a(n, t)] === t ? r : -1;if (t != t) return 0 <= (r = o(c.call(n, e, u), s.isNaN)) ? r + e : -1;for (r = 0 < i ? e : u - 1; 0 <= r && r < u; r += i) {
        if (n[r] === t) return r;
      }return -1;
    };
  }s.indexOf = E(1, s.findIndex, s.sortedIndex = function (n, t, r, e) {
    for (var u = (r = y(r, e, 1))(t), i = 0, o = w(n); i < o;) {
      var a = Math.floor((i + o) / 2);r(n[a]) < u ? i = a + 1 : o = a;
    }return i;
  }), s.lastIndexOf = E(-1, s.findLastIndex), s.range = function (n, t, r) {
    null == t && (t = n || 0, n = 0), r || (r = t < n ? -1 : 1);for (var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0; i < e; i++, n += r) {
      u[i] = n;
    }return u;
  }, s.chunk = function (n, t) {
    if (null == t || t < 1) return [];for (var r = [], e = 0, u = n.length; e < u;) {
      r.push(c.call(n, e, e += t));
    }return r;
  };function N(n, t, r, e, u) {
    if (!(e instanceof t)) return n.apply(r, u);var i = m(n.prototype),
        o = n.apply(i, u);return s.isObject(o) ? o : i;
  }s.bind = g(function (t, r, e) {
    if (!s.isFunction(t)) throw new TypeError("Bind must be called on a function");var u = g(function (n) {
      return N(t, u, r, this, e.concat(n));
    });return u;
  }), ((s.partial = g(function (i, o) {
    var a = s.partial.placeholder;return function n() {
      for (var t = 0, r = o.length, e = Array(r), u = 0; u < r; u++) {
        e[u] = o[u] === a ? arguments[t++] : o[u];
      }for (; t < arguments.length;) {
        e.push(arguments[t++]);
      }return N(i, n, this, this, e);
    };
  })).placeholder = s).bindAll = g(function (n, t) {
    var r = (t = M(t, !1, !1)).length;if (r < 1) throw new Error("bindAll must be passed function names");for (; r--;) {
      var e = t[r];n[e] = s.bind(n[e], n);
    }
  }), s.memoize = function (e, u) {
    function i(n) {
      var t = i.cache,
          r = "" + (u ? u.apply(this, arguments) : n);return _(t, r) || (t[r] = e.apply(this, arguments)), t[r];
    }return i.cache = {}, i;
  }, s.delay = g(function (n, t, r) {
    return setTimeout(function () {
      return n.apply(null, r);
    }, t);
  }), s.defer = s.partial(s.delay, s, 1), s.throttle = function (r, e, u) {
    var i,
        o,
        a,
        c,
        f = 0;u || (u = {});function l() {
      f = !1 === u.leading ? 0 : s.now(), i = null, c = r.apply(o, a), i || (o = a = null);
    }function n() {
      var n = s.now();f || !1 !== u.leading || (f = n);var t = e - (n - f);return o = this, a = arguments, t <= 0 || e < t ? (i && (clearTimeout(i), i = null), f = n, c = r.apply(o, a), i || (o = a = null)) : i || !1 === u.trailing || (i = setTimeout(l, t)), c;
    }return n.cancel = function () {
      clearTimeout(i), f = 0, i = o = a = null;
    }, n;
  }, s.debounce = function (r, e, u) {
    function i(n, t) {
      o = null, t && (a = r.apply(n, t));
    }var o,
        a,
        n = g(function (n) {
      if (o && clearTimeout(o), u) {
        var t = !o;o = setTimeout(i, e), t && (a = r.apply(this, n));
      } else o = s.delay(i, e, this, n);return a;
    });return n.cancel = function () {
      clearTimeout(o), o = null;
    }, n;
  }, s.wrap = function (n, t) {
    return s.partial(t, n);
  }, s.negate = function (n) {
    return function () {
      return !n.apply(this, arguments);
    };
  }, s.compose = function () {
    var r = arguments,
        e = r.length - 1;return function () {
      for (var n = e, t = r[e].apply(this, arguments); n--;) {
        t = r[n].call(this, t);
      }return t;
    };
  }, s.after = function (n, t) {
    return function () {
      if (--n < 1) return t.apply(this, arguments);
    };
  }, s.once = s.partial(s.before = function (n, t) {
    var r;return function () {
      return 0 < --n && (r = t.apply(this, arguments)), n <= 1 && (t = null), r;
    };
  }, 2), s.restArguments = g;function I(n, t) {
    var r = B.length,
        e = n.constructor,
        u = s.isFunction(e) && e.prototype || o,
        i = "constructor";for (_(n, i) && !s.contains(t, i) && t.push(i); r--;) {
      (i = B[r]) in n && n[i] !== u[i] && !s.contains(t, i) && t.push(i);
    }
  }var T = !{ toString: null }.propertyIsEnumerable("toString"),
      B = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];s.keys = function (n) {
    if (!s.isObject(n)) return [];if (f) return f(n);var t = [];for (var r in n) {
      _(n, r) && t.push(r);
    }return T && I(n, t), t;
  }, s.allKeys = function (n) {
    if (!s.isObject(n)) return [];var t = [];for (var r in n) {
      t.push(r);
    }return T && I(n, t), t;
  }, s.values = function (n) {
    for (var t = s.keys(n), r = t.length, e = Array(r), u = 0; u < r; u++) {
      e[u] = n[t[u]];
    }return e;
  }, s.mapObject = function (n, t, r) {
    t = y(t, r);for (var e = s.keys(n), u = e.length, i = {}, o = 0; o < u; o++) {
      var a = e[o];i[a] = t(n[a], a, n);
    }return i;
  }, s.pairs = function (n) {
    for (var t = s.keys(n), r = t.length, e = Array(r), u = 0; u < r; u++) {
      e[u] = [t[u], n[t[u]]];
    }return e;
  }, s.invert = function (n) {
    for (var t = {}, r = s.keys(n), e = 0, u = r.length; e < u; e++) {
      t[n[r[e]]] = r[e];
    }return t;
  }, s.functions = s.methods = function (n) {
    var t = [];for (var r in n) {
      s.isFunction(n[r]) && t.push(r);
    }return t.sort();
  };function R(c, f) {
    return function (n) {
      var t = arguments.length;if (f && (n = Object(n)), t < 2 || null == n) return n;for (var r = 1; r < t; r++) {
        for (var e = arguments[r], u = c(e), i = u.length, o = 0; o < i; o++) {
          var a = u[o];f && void 0 !== n[a] || (n[a] = e[a]);
        }
      }return n;
    };
  }s.extend = R(s.allKeys), s.extendOwn = s.assign = R(s.keys), s.findKey = function (n, t, r) {
    t = y(t, r);for (var e, u = s.keys(n), i = 0, o = u.length; i < o; i++) {
      if (t(n[e = u[i]], e, n)) return e;
    }
  };function q(n, t, r) {
    return t in r;
  }var K, z;s.pick = g(function (n, t) {
    var r = {},
        e = t[0];if (null == n) return r;s.isFunction(e) ? (1 < t.length && (e = v(e, t[1])), t = s.allKeys(n)) : (e = q, t = M(t, !1, !1), n = Object(n));for (var u = 0, i = t.length; u < i; u++) {
      var o = t[u],
          a = n[o];e(a, o, n) && (r[o] = a);
    }return r;
  }), s.omit = g(function (n, r) {
    var t,
        e = r[0];return s.isFunction(e) ? (e = s.negate(e), 1 < r.length && (t = r[1])) : (r = s.map(M(r, !1, !1), String), e = function e(n, t) {
      return !s.contains(r, t);
    }), s.pick(n, e, t);
  }), s.defaults = R(s.allKeys, !0), s.create = function (n, t) {
    var r = m(n);return t && s.extendOwn(r, t), r;
  }, s.clone = function (n) {
    return s.isObject(n) ? s.isArray(n) ? n.slice() : s.extend({}, n) : n;
  }, s.tap = function (n, t) {
    return t(n), n;
  }, s.isMatch = function (n, t) {
    var r = s.keys(t),
        e = r.length;if (null == n) return !e;for (var u = Object(n), i = 0; i < e; i++) {
      var o = r[i];if (t[o] !== u[o] || !(o in u)) return !1;
    }return !0;
  }, K = function K(n, t, r, e) {
    if (n === t) return 0 !== n || 1 / n == 1 / t;if (null == n || null == t) return !1;if (n != n) return t != t;var u = void 0 === n ? "undefined" : _typeof(n);return ("function" === u || "object" === u || "object" == (void 0 === t ? "undefined" : _typeof(t))) && z(n, t, r, e);
  }, z = function z(n, t, r, e) {
    n instanceof s && (n = n._wrapped), t instanceof s && (t = t._wrapped);var u = h.call(n);if (u !== h.call(t)) return !1;switch (u) {case "[object RegExp]":case "[object String]":
        return "" + n == "" + t;case "[object Number]":
        return +n != +n ? +t != +t : 0 == +n ? 1 / +n == 1 / t : +n == +t;case "[object Date]":case "[object Boolean]":
        return +n == +t;case "[object Symbol]":
        return p.valueOf.call(n) === p.valueOf.call(t);}var i = "[object Array]" === u;if (!i) {
      if ("object" != (void 0 === n ? "undefined" : _typeof(n)) || "object" != (void 0 === t ? "undefined" : _typeof(t))) return !1;var o = n.constructor,
          a = t.constructor;if (o !== a && !(s.isFunction(o) && o instanceof o && s.isFunction(a) && a instanceof a) && "constructor" in n && "constructor" in t) return !1;
    }e = e || [];for (var c = (r = r || []).length; c--;) {
      if (r[c] === n) return e[c] === t;
    }if (r.push(n), e.push(t), i) {
      if ((c = n.length) !== t.length) return !1;for (; c--;) {
        if (!K(n[c], t[c], r, e)) return !1;
      }
    } else {
      var f,
          l = s.keys(n);if (c = l.length, s.keys(t).length !== c) return !1;for (; c--;) {
        if (f = l[c], !_(t, f) || !K(n[f], t[f], r, e)) return !1;
      }
    }return r.pop(), e.pop(), !0;
  }, s.isEqual = function (n, t) {
    return K(n, t);
  }, s.isEmpty = function (n) {
    return null == n || (x(n) && (s.isArray(n) || s.isString(n) || s.isArguments(n)) ? 0 === n.length : 0 === s.keys(n).length);
  }, s.isElement = function (n) {
    return !(!n || 1 !== n.nodeType);
  }, s.isArray = a || function (n) {
    return "[object Array]" === h.call(n);
  }, s.isObject = function (n) {
    var t = void 0 === n ? "undefined" : _typeof(n);return "function" === t || "object" === t && !!n;
  }, s.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error", "Symbol", "Map", "WeakMap", "Set", "WeakSet"], function (t) {
    s["is" + t] = function (n) {
      return h.call(n) === "[object " + t + "]";
    };
  }), s.isArguments(arguments) || (s.isArguments = function (n) {
    return _(n, "callee");
  });var D = n.document && n.document.childNodes;"function" != typeof /./ && "object" != ("undefined" == typeof Int8Array ? "undefined" : _typeof(Int8Array)) && "function" != typeof D && (s.isFunction = function (n) {
    return "function" == typeof n || !1;
  }), s.isFinite = function (n) {
    return !s.isSymbol(n) && isFinite(n) && !isNaN(parseFloat(n));
  }, s.isNaN = function (n) {
    return s.isNumber(n) && isNaN(n);
  }, s.isBoolean = function (n) {
    return !0 === n || !1 === n || "[object Boolean]" === h.call(n);
  }, s.isNull = function (n) {
    return null === n;
  }, s.isUndefined = function (n) {
    return void 0 === n;
  }, s.has = function (n, t) {
    if (!s.isArray(t)) return _(n, t);for (var r = t.length, e = 0; e < r; e++) {
      var u = t[e];if (null == n || !i.call(n, u)) return !1;n = n[u];
    }return !!r;
  }, s.noConflict = function () {
    return n._ = t, this;
  }, s.identity = function (n) {
    return n;
  }, s.constant = function (n) {
    return function () {
      return n;
    };
  }, s.noop = function () {}, s.property = function (t) {
    return s.isArray(t) ? function (n) {
      return j(n, t);
    } : b(t);
  }, s.propertyOf = function (t) {
    return null == t ? function () {} : function (n) {
      return s.isArray(n) ? j(t, n) : t[n];
    };
  }, s.matcher = s.matches = function (t) {
    return t = s.extendOwn({}, t), function (n) {
      return s.isMatch(n, t);
    };
  }, s.times = function (n, t, r) {
    var e = Array(Math.max(0, n));t = v(t, r, 1);for (var u = 0; u < n; u++) {
      e[u] = t(u);
    }return e;
  }, s.random = function (n, t) {
    return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1));
  }, s.now = Date.now || function () {
    return new Date().getTime();
  };function L(t) {
    function r(n) {
      return t[n];
    }var n = "(?:" + s.keys(t).join("|") + ")",
        e = RegExp(n),
        u = RegExp(n, "g");return function (n) {
      return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, r) : n;
    };
  }var P = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
      W = s.invert(P);s.escape = L(P), s.unescape = L(W), s.result = function (n, t, r) {
    s.isArray(t) || (t = [t]);var e = t.length;if (!e) return s.isFunction(r) ? r.call(n) : r;for (var u = 0; u < e; u++) {
      var i = null == n ? void 0 : n[t[u]];void 0 === i && (i = r, u = e), n = s.isFunction(i) ? i.call(n) : i;
    }return n;
  };var C = 0;s.uniqueId = function (n) {
    var t = ++C + "";return n ? n + t : t;
  }, s.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g };function J(n) {
    return "\\" + V[n];
  }var U = /(.)^/,
      V = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
      $ = /\\|'|\r|\n|\u2028|\u2029/g;s.template = function (i, n, t) {
    !n && t && (n = t), n = s.defaults({}, n, s.templateSettings);var r,
        e = RegExp([(n.escape || U).source, (n.interpolate || U).source, (n.evaluate || U).source].join("|") + "|$", "g"),
        o = 0,
        a = "__p+='";i.replace(e, function (n, t, r, e, u) {
      return a += i.slice(o, u).replace($, J), o = u + n.length, t ? a += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'" : r ? a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : e && (a += "';\n" + e + "\n__p+='"), n;
    }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";try {
      r = new Function(n.variable || "obj", "_", a);
    } catch (n) {
      throw n.source = a, n;
    }function u(n) {
      return r.call(this, n, s);
    }var c = n.variable || "obj";return u.source = "function(" + c + "){\n" + a + "}", u;
  }, s.chain = function (n) {
    var t = s(n);return t._chain = !0, t;
  };function G(n, t) {
    return n._chain ? s(t).chain() : t;
  }s.mixin = function (r) {
    return s.each(s.functions(r), function (n) {
      var t = s[n] = r[n];s.prototype[n] = function () {
        var n = [this._wrapped];return u.apply(n, arguments), G(this, t.apply(s, n));
      };
    }), s;
  }, s.mixin(s), s.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
    var r = e[t];s.prototype[t] = function () {
      var n = this._wrapped;return r.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], G(this, n);
    };
  }), s.each(["concat", "join", "slice"], function (n) {
    var t = e[n];s.prototype[n] = function () {
      return G(this, t.apply(this._wrapped, arguments));
    };
  }), s.prototype.valueOf = s.prototype.toJSON = s.prototype.value = function () {
    return this._wrapped;
  }, s.prototype.toString = function () {
    return String(this._wrapped);
  }, "function" == typeof define && define.amd && define("underscore", [], function () {
    return s;
  });
}();