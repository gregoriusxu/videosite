"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.io = e() : t.io = e();
}(undefined, function () {
  return function (r) {
    function n(t) {
      if (o[t]) return o[t].exports;var e = o[t] = { exports: {}, id: t, loaded: !1 };return r[t].call(e.exports, e, e.exports, n), e.loaded = !0, e.exports;
    }var o = {};return n.m = r, n.c = o, n.p = "", n(0);
  }([function (t, e, r) {
    "use strict";
    function n(t, e) {
      "object" === (void 0 === t ? "undefined" : c(t)) && (e = t, t = void 0), e = e || {};var r,
          n = p(t),
          o = n.source,
          i = n.id,
          s = n.path,
          a = f[i] && s in f[i].nsps;return r = e.forceNew || e["force new connection"] || !1 === e.multiplex || a ? (u("ignoring socket cache for %s", o), h(o, e)) : (f[i] || (u("new io instance for %s", o), f[i] = h(o, e)), f[i]), n.query && !e.query && (e.query = n.query), r.socket(n.path, e);
    }var c = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    },
        p = r(1),
        o = r(7),
        h = r(13),
        u = r(3)("socket.io-client");t.exports = e = n;var f = e.managers = {};e.protocol = o.protocol, e.connect = n, e.Manager = r(13), e.Socket = r(37);
  }, function (t, e, r) {
    (function (o) {
      "use strict";
      var i = r(2),
          s = r(3)("socket.io-client:url");t.exports = function (t, e) {
        var r = t;e = e || o.location, null == t && (t = e.protocol + "//" + e.host), "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? e.protocol + t : e.host + t), /^(https?|wss?):\/\//.test(t) || (s("protocol-less url %s", t), t = void 0 !== e ? e.protocol + "//" + t : "https://" + t), s("parse %s", t), r = i(t)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";var n = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host;return r.id = r.protocol + "://" + n + ":" + r.port, r.href = r.protocol + "://" + n + (e && e.port === r.port ? "" : ":" + r.port), r;
      };
    }).call(e, function () {
      return this;
    }());
  }, function (t, e) {
    var a = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        c = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];t.exports = function (t) {
      var e = t,
          r = t.indexOf("["),
          n = t.indexOf("]");-1 != r && -1 != n && (t = t.substring(0, r) + t.substring(r, n).replace(/:/g, ";") + t.substring(n, t.length));for (var o = a.exec(t || ""), i = {}, s = 14; s--;) {
        i[c[s]] = o[s] || "";
      }return -1 != r && -1 != n && (i.source = e, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i;
    };
  }, function (r, i, n) {
    (function (e) {
      function t() {
        var t;try {
          t = i.storage.debug;
        } catch (t) {}return !t && void 0 !== e && "env" in e && (t = e.env.DEBUG), t;
      }(i = r.exports = n(5)).log = function () {
        return "object" == (typeof console === "undefined" ? "undefined" : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
      }, i.formatArgs = function (t) {
        var e = this.useColors;if (t[0] = (e ? "%c" : "") + this.namespace + (e ? " %c" : " ") + t[0] + (e ? "%c " : " ") + "+" + i.humanize(this.diff), e) {
          var r = "color: " + this.color;t.splice(1, 0, r, "color: inherit");var n = 0,
              o = 0;t[0].replace(/%[a-zA-Z%]/g, function (t) {
            "%%" !== t && (n++, "%c" === t && (o = n));
          }), t.splice(o, 0, r);
        }
      }, i.save = function (t) {
        try {
          null == t ? i.storage.removeItem("debug") : i.storage.debug = t;
        } catch (t) {}
      }, i.load = t, i.useColors = function () {
        return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && 31 <= parseInt(RegExp.$1, 10) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }, i.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () {
        try {
          return window.localStorage;
        } catch (t) {}
      }(), i.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], i.formatters.j = function (t) {
        try {
          return JSON.stringify(t);
        } catch (t) {
          return "[UnexpectedJSONParseError]: " + t.message;
        }
      }, i.enable(t());
    }).call(i, n(4));
  }, function (t, e) {
    function r() {
      throw new Error("setTimeout has not been defined");
    }function n() {
      throw new Error("clearTimeout has not been defined");
    }function o(e) {
      if (p === setTimeout) return setTimeout(e, 0);if ((p === r || !p) && setTimeout) return p = setTimeout, setTimeout(e, 0);try {
        return p(e, 0);
      } catch (t) {
        try {
          return p.call(null, e, 0);
        } catch (t) {
          return p.call(this, e, 0);
        }
      }
    }function i() {
      d && f && (d = !1, f.length ? l = f.concat(l) : y = -1, l.length && s());
    }function s() {
      if (!d) {
        var t = o(i);d = !0;for (var e = l.length; e;) {
          for (f = l, l = []; ++y < e;) {
            f && f[y].run();
          }y = -1, e = l.length;
        }f = null, d = !1, function (e) {
          if (h === clearTimeout) return clearTimeout(e);if ((h === n || !h) && clearTimeout) return h = clearTimeout, clearTimeout(e);try {
            h(e);
          } catch (t) {
            try {
              return h.call(null, e);
            } catch (t) {
              return h.call(this, e);
            }
          }
        }(t);
      }
    }function a(t, e) {
      this.fun = t, this.array = e;
    }function c() {}var p,
        h,
        u = t.exports = {};!function () {
      try {
        p = "function" == typeof setTimeout ? setTimeout : r;
      } catch (t) {
        p = r;
      }try {
        h = "function" == typeof clearTimeout ? clearTimeout : n;
      } catch (t) {
        h = n;
      }
    }();var f,
        l = [],
        d = !1,
        y = -1;u.nextTick = function (t) {
      var e = new Array(arguments.length - 1);if (1 < arguments.length) for (var r = 1; r < arguments.length; r++) {
        e[r - 1] = arguments[r];
      }l.push(new a(t, e)), 1 !== l.length || d || o(s);
    }, a.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, u.title = "browser", u.browser = !0, u.env = {}, u.argv = [], u.version = "", u.versions = {}, u.on = c, u.addListener = c, u.once = c, u.off = c, u.removeListener = c, u.removeAllListeners = c, u.emit = c, u.prependListener = c, u.prependOnceListener = c, u.listeners = function (t) {
      return [];
    }, u.binding = function (t) {
      throw new Error("process.binding is not supported");
    }, u.cwd = function () {
      return "/";
    }, u.chdir = function (t) {
      throw new Error("process.chdir is not supported");
    }, u.umask = function () {
      return 0;
    };
  }, function (t, a, e) {
    function r(t) {
      function n() {
        if (n.enabled) {
          var o = n,
              t = +new Date(),
              e = t - (c || t);o.diff = e, o.prev = c, o.curr = t, c = t;for (var i = new Array(arguments.length), r = 0; r < i.length; r++) {
            i[r] = arguments[r];
          }i[0] = a.coerce(i[0]), "string" != typeof i[0] && i.unshift("%O");var s = 0;i[0] = i[0].replace(/%([a-zA-Z%])/g, function (t, e) {
            if ("%%" === t) return t;s++;var r = a.formatters[e];if ("function" == typeof r) {
              var n = i[s];t = r.call(o, n), i.splice(s, 1), s--;
            }return t;
          }), a.formatArgs.call(o, i), (n.log || a.log || console.log.bind(console)).apply(o, i);
        }
      }return n.namespace = t, n.enabled = a.enabled(t), n.useColors = a.useColors(), n.color = function (t) {
        var e,
            r = 0;for (e in t) {
          r = (r << 5) - r + t.charCodeAt(e), r |= 0;
        }return a.colors[Math.abs(r) % a.colors.length];
      }(t), "function" == typeof a.init && a.init(n), n;
    }var c;(a = t.exports = r.debug = r.default = r).coerce = function (t) {
      return t instanceof Error ? t.stack || t.message : t;
    }, a.disable = function () {
      a.enable("");
    }, a.enable = function (t) {
      a.save(t), a.names = [], a.skips = [];for (var e = ("string" == typeof t ? t : "").split(/[\s,]+/), r = e.length, n = 0; n < r; n++) {
        e[n] && ("-" === (t = e[n].replace(/\*/g, ".*?"))[0] ? a.skips.push(new RegExp("^" + t.substr(1) + "$")) : a.names.push(new RegExp("^" + t + "$")));
      }
    }, a.enabled = function (t) {
      var e, r;for (e = 0, r = a.skips.length; e < r; e++) {
        if (a.skips[e].test(t)) return !1;
      }for (e = 0, r = a.names.length; e < r; e++) {
        if (a.names[e].test(t)) return !0;
      }return !1;
    }, a.humanize = e(6), a.names = [], a.skips = [], a.formatters = {};
  }, function (t, e) {
    function i(t, e, r) {
      if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + r : Math.ceil(t / e) + " " + r + "s";
    }var s = 864e5;t.exports = function (t, e) {
      e = e || {};var r,
          n,
          o = typeof t === "undefined" ? "undefined" : _typeof(t);if ("string" === o && 0 < t.length) return function (t) {
        if (!(100 < (t = String(t)).length)) {
          var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if (e) {
            var r = parseFloat(e[1]);switch ((e[2] || "ms").toLowerCase()) {case "years":case "year":case "yrs":case "yr":case "y":
                return 315576e5 * r;case "days":case "day":case "d":
                return r * s;case "hours":case "hour":case "hrs":case "hr":case "h":
                return 36e5 * r;case "minutes":case "minute":case "mins":case "min":case "m":
                return 6e4 * r;case "seconds":case "second":case "secs":case "sec":case "s":
                return 1e3 * r;case "milliseconds":case "millisecond":case "msecs":case "msec":case "ms":
                return r;default:
                return;}
          }
        }
      }(t);if ("number" === o && !1 === isNaN(t)) return e.long ? i(n = t, s, "day") || i(n, 36e5, "hour") || i(n, 6e4, "minute") || i(n, 1e3, "second") || n + " ms" : s <= (r = t) ? Math.round(r / s) + "d" : 36e5 <= r ? Math.round(r / 36e5) + "h" : 6e4 <= r ? Math.round(r / 6e4) + "m" : 1e3 <= r ? Math.round(r / 1e3) + "s" : r + "ms";throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t));
    };
  }, function (t, s, e) {
    function r() {}function i(t) {
      var e = "" + t.type;return s.BINARY_EVENT !== t.type && s.BINARY_ACK !== t.type || (e += t.attachments + "-"), t.nsp && "/" !== t.nsp && (e += t.nsp + ","), null != t.id && (e += t.id), null != t.data && (e += JSON.stringify(t.data)), c("encoded %j as %s", t, e), e;
    }function n() {
      this.reconstructor = null;
    }function o(t) {
      this.reconPack = t, this.buffers = [];
    }function a() {
      return { type: s.ERROR, data: "parser error" };
    }var c = e(3)("socket.io-parser"),
        p = e(8),
        h = e(9),
        u = e(11),
        f = e(12);s.protocol = 4, s.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], s.CONNECT = 0, s.DISCONNECT = 1, s.EVENT = 2, s.ACK = 3, s.ERROR = 4, s.BINARY_EVENT = 5, s.BINARY_ACK = 6, s.Encoder = r, s.Decoder = n, r.prototype.encode = function (t, e) {
      var r, o;t.type !== s.EVENT && t.type !== s.ACK || !h(t.data) || (t.type = t.type === s.EVENT ? s.BINARY_EVENT : s.BINARY_ACK), c("encoding packet %j", t), s.BINARY_EVENT === t.type || s.BINARY_ACK === t.type ? (r = t, o = e, u.removeBlobs(r, function (t) {
        var e = u.deconstructPacket(t),
            r = i(e.packet),
            n = e.buffers;n.unshift(r), o(n);
      })) : e([i(t)]);
    }, p(n.prototype), n.prototype.add = function (t) {
      var e;if ("string" == typeof t) e = function (t) {
        var e = 0,
            r = { type: Number(t.charAt(0)) };if (null == s.types[r.type]) return a();if (s.BINARY_EVENT === r.type || s.BINARY_ACK === r.type) {
          for (var n = ""; "-" !== t.charAt(++e) && (n += t.charAt(e), e != t.length);) {}if (n != Number(n) || "-" !== t.charAt(e)) throw new Error("Illegal attachments");r.attachments = Number(n);
        }if ("/" === t.charAt(e + 1)) for (r.nsp = ""; ++e && "," !== (i = t.charAt(e)) && (r.nsp += i, e !== t.length);) {} else r.nsp = "/";var o = t.charAt(e + 1);if ("" !== o && Number(o) == o) {
          for (r.id = ""; ++e;) {
            var i;if (null == (i = t.charAt(e)) || Number(i) != i) {
              --e;break;
            }if (r.id += t.charAt(e), e === t.length) break;
          }r.id = Number(r.id);
        }return t.charAt(++e) && (r = function (t, e) {
          try {
            t.data = JSON.parse(e);
          } catch (t) {
            return a();
          }return t;
        }(r, t.substr(e))), c("decoded %s as %j", t, r), r;
      }(t), s.BINARY_EVENT === e.type || s.BINARY_ACK === e.type ? (this.reconstructor = new o(e), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", e)) : this.emit("decoded", e);else {
        if (!f(t) && !t.base64) throw new Error("Unknown type: " + t);if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");(e = this.reconstructor.takeBinaryData(t)) && (this.reconstructor = null, this.emit("decoded", e));
      }
    }, n.prototype.destroy = function () {
      this.reconstructor && this.reconstructor.finishedReconstruction();
    }, o.prototype.takeBinaryData = function (t) {
      if (this.buffers.push(t), this.buffers.length !== this.reconPack.attachments) return null;var e = u.reconstructPacket(this.reconPack, this.buffers);return this.finishedReconstruction(), e;
    }, o.prototype.finishedReconstruction = function () {
      this.reconPack = null, this.buffers = [];
    };
  }, function (t, e, r) {
    function n(t) {
      if (t) return function (t) {
        for (var e in n.prototype) {
          t[e] = n.prototype[e];
        }return t;
      }(t);
    }(t.exports = n).prototype.on = n.prototype.addEventListener = function (t, e) {
      return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
    }, n.prototype.once = function (t, e) {
      function r() {
        this.off(t, r), e.apply(this, arguments);
      }return r.fn = e, this.on(t, r), this;
    }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function (t, e) {
      if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;var r = this._callbacks["$" + t];if (!r) return this;if (1 == arguments.length) return delete this._callbacks["$" + t], this;for (var n, o = 0; o < r.length; o++) {
        if ((n = r[o]) === e || n.fn === e) {
          r.splice(o, 1);break;
        }
      }return this;
    }, n.prototype.emit = function (t) {
      this._callbacks = this._callbacks || {};var e = [].slice.call(arguments, 1),
          r = this._callbacks["$" + t];if (r) for (var n = 0, o = (r = r.slice(0)).length; n < o; ++n) {
        r[n].apply(this, e);
      }return this;
    }, n.prototype.listeners = function (t) {
      return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
    }, n.prototype.hasListeners = function (t) {
      return !!this.listeners(t).length;
    };
  }, function (e, t, r) {
    (function (i) {
      var s = r(10),
          t = Object.prototype.toString,
          a = "function" == typeof i.Blob || "[object BlobConstructor]" === t.call(i.Blob),
          c = "function" == typeof i.File || "[object FileConstructor]" === t.call(i.File);e.exports = function t(e) {
        if (!e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e))) return !1;if (s(e)) {
          for (var r = 0, n = e.length; r < n; r++) {
            if (t(e[r])) return !0;
          }return !1;
        }if ("function" == typeof i.Buffer && i.Buffer.isBuffer && i.Buffer.isBuffer(e) || "function" == typeof i.ArrayBuffer && e instanceof ArrayBuffer || a && e instanceof Blob || c && e instanceof File) return !0;if (e.toJSON && "function" == typeof e.toJSON && 1 === arguments.length) return t(e.toJSON(), !0);for (var o in e) {
          if (Object.prototype.hasOwnProperty.call(e, o) && t(e[o])) return !0;
        }return !1;
      };
    }).call(t, function () {
      return this;
    }());
  }, function (t, e) {
    var r = {}.toString;t.exports = Array.isArray || function (t) {
      return "[object Array]" == r.call(t);
    };
  }, function (t, r, n) {
    (function (t) {
      var h = n(10),
          u = n(12),
          e = Object.prototype.toString,
          f = "function" == typeof t.Blob || "[object BlobConstructor]" === e.call(t.Blob),
          l = "function" == typeof t.File || "[object FileConstructor]" === e.call(t.File);r.deconstructPacket = function (t) {
        var e = [],
            r = t.data,
            n = t;return n.data = function t(e, r) {
          if (!e) return e;if (u(e)) {
            var n = { _placeholder: !0, num: r.length };return r.push(e), n;
          }if (h(e)) {
            for (var o = new Array(e.length), i = 0; i < e.length; i++) {
              o[i] = t(e[i], r);
            }return o;
          }if ("object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) || e instanceof Date) return e;for (var s in o = {}, e) {
            o[s] = t(e[s], r);
          }return o;
        }(r, e), n.attachments = e.length, { packet: n, buffers: e };
      }, r.reconstructPacket = function (t, e) {
        return t.data = function t(e, r) {
          if (!e) return e;if (e && e._placeholder) return r[e.num];if (h(e)) for (var n = 0; n < e.length; n++) {
            e[n] = t(e[n], r);
          } else if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) for (var o in e) {
            e[o] = t(e[o], r);
          }return e;
        }(t.data, e), t.attachments = void 0, t;
      }, r.removeBlobs = function (t, a) {
        var c = 0,
            p = t;(function t(e, r, n) {
          if (!e) return e;if (f && e instanceof Blob || l && e instanceof File) {
            c++;var o = new FileReader();o.onload = function () {
              n ? n[r] = this.result : p = this.result, --c || a(p);
            }, o.readAsArrayBuffer(e);
          } else if (h(e)) for (var i = 0; i < e.length; i++) {
            t(e[i], i, e);
          } else if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && !u(e)) for (var s in e) {
            t(e[s], s, e);
          }
        })(p), c || a(p);
      };
    }).call(r, function () {
      return this;
    }());
  }, function (t, e) {
    (function (e) {
      t.exports = function (t) {
        return e.Buffer && e.Buffer.isBuffer(t) || e.ArrayBuffer && t instanceof ArrayBuffer;
      };
    }).call(e, function () {
      return this;
    }());
  }, function (t, e, r) {
    "use strict";
    function n(t, e) {
      if (!(this instanceof n)) return new n(t, e);t && "object" === (void 0 === t ? "undefined" : o(t)) && (e = t, t = void 0), (e = e || {}).path = e.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = e, this.reconnection(!1 !== e.reconnection), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor(e.randomizationFactor || .5), this.backoff = new l({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(null == e.timeout ? 2e4 : e.timeout), this.readyState = "closed", this.uri = t, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];var r = e.parser || a;this.encoder = new r.Encoder(), this.decoder = new r.Decoder(), this.autoConnect = !1 !== e.autoConnect, this.autoConnect && this.open();
    }var o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    },
        c = r(14),
        i = r(37),
        s = r(8),
        a = r(7),
        p = r(39),
        h = r(40),
        u = r(3)("socket.io-client:manager"),
        f = r(36),
        l = r(41),
        d = Object.prototype.hasOwnProperty;(t.exports = n).prototype.emitAll = function () {
      for (var t in this.emit.apply(this, arguments), this.nsps) {
        d.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments);
      }
    }, n.prototype.updateSocketIds = function () {
      for (var t in this.nsps) {
        d.call(this.nsps, t) && (this.nsps[t].id = this.generateId(t));
      }
    }, n.prototype.generateId = function (t) {
      return ("/" === t ? "" : t + "#") + this.engine.id;
    }, s(n.prototype), n.prototype.reconnection = function (t) {
      return arguments.length ? (this._reconnection = !!t, this) : this._reconnection;
    }, n.prototype.reconnectionAttempts = function (t) {
      return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts;
    }, n.prototype.reconnectionDelay = function (t) {
      return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), this) : this._reconnectionDelay;
    }, n.prototype.randomizationFactor = function (t) {
      return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), this) : this._randomizationFactor;
    }, n.prototype.reconnectionDelayMax = function (t) {
      return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), this) : this._reconnectionDelayMax;
    }, n.prototype.timeout = function (t) {
      return arguments.length ? (this._timeout = t, this) : this._timeout;
    }, n.prototype.maybeReconnectOnOpen = function () {
      !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
    }, n.prototype.open = n.prototype.connect = function (r, t) {
      if (u("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;u("opening %s", this.uri), this.engine = c(this.uri, this.opts);var e = this.engine,
          n = this;this.readyState = "opening", this.skipReconnect = !1;var o = p(e, "open", function () {
        n.onopen(), r && r();
      }),
          i = p(e, "error", function (t) {
        if (u("connect_error"), n.cleanup(), n.readyState = "closed", n.emitAll("connect_error", t), r) {
          var e = new Error("Connection error");e.data = t, r(e);
        } else n.maybeReconnectOnOpen();
      });if (!1 !== this._timeout) {
        var s = this._timeout;u("connect attempt will timeout after %d", s);var a = setTimeout(function () {
          u("connect attempt timed out after %d", s), o.destroy(), e.close(), e.emit("error", "timeout"), n.emitAll("connect_timeout", s);
        }, s);this.subs.push({ destroy: function destroy() {
            clearTimeout(a);
          } });
      }return this.subs.push(o), this.subs.push(i), this;
    }, n.prototype.onopen = function () {
      u("open"), this.cleanup(), this.readyState = "open", this.emit("open");var t = this.engine;this.subs.push(p(t, "data", h(this, "ondata"))), this.subs.push(p(t, "ping", h(this, "onping"))), this.subs.push(p(t, "pong", h(this, "onpong"))), this.subs.push(p(t, "error", h(this, "onerror"))), this.subs.push(p(t, "close", h(this, "onclose"))), this.subs.push(p(this.decoder, "decoded", h(this, "ondecoded")));
    }, n.prototype.onping = function () {
      this.lastPing = new Date(), this.emitAll("ping");
    }, n.prototype.onpong = function () {
      this.emitAll("pong", new Date() - this.lastPing);
    }, n.prototype.ondata = function (t) {
      this.decoder.add(t);
    }, n.prototype.ondecoded = function (t) {
      this.emit("packet", t);
    }, n.prototype.onerror = function (t) {
      u("error", t), this.emitAll("error", t);
    }, n.prototype.socket = function (t, e) {
      function r() {
        ~f(o.connecting, n) || o.connecting.push(n);
      }var n = this.nsps[t];if (!n) {
        n = new i(this, t, e), this.nsps[t] = n;var o = this;n.on("connecting", r), n.on("connect", function () {
          n.id = o.generateId(t);
        }), this.autoConnect && r();
      }return n;
    }, n.prototype.destroy = function (t) {
      var e = f(this.connecting, t);~e && this.connecting.splice(e, 1), this.connecting.length || this.close();
    }, n.prototype.packet = function (r) {
      u("writing packet %j", r);var n = this;r.query && 0 === r.type && (r.nsp += "?" + r.query), n.encoding ? n.packetBuffer.push(r) : (n.encoding = !0, this.encoder.encode(r, function (t) {
        for (var e = 0; e < t.length; e++) {
          n.engine.write(t[e], r.options);
        }n.encoding = !1, n.processPacketQueue();
      }));
    }, n.prototype.processPacketQueue = function () {
      if (0 < this.packetBuffer.length && !this.encoding) {
        var t = this.packetBuffer.shift();this.packet(t);
      }
    }, n.prototype.cleanup = function () {
      u("cleanup");for (var t = this.subs.length, e = 0; e < t; e++) {
        this.subs.shift().destroy();
      }this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy();
    }, n.prototype.close = n.prototype.disconnect = function () {
      u("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close();
    }, n.prototype.onclose = function (t) {
      u("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", t), this._reconnection && !this.skipReconnect && this.reconnect();
    }, n.prototype.reconnect = function () {
      if (this.reconnecting || this.skipReconnect) return this;var e = this;if (this.backoff.attempts >= this._reconnectionAttempts) u("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;else {
        var t = this.backoff.duration();u("will wait %dms before reconnect attempt", t), this.reconnecting = !0;var r = setTimeout(function () {
          e.skipReconnect || (u("attempting reconnect"), e.emitAll("reconnect_attempt", e.backoff.attempts), e.emitAll("reconnecting", e.backoff.attempts), e.skipReconnect || e.open(function (t) {
            t ? (u("reconnect attempt error"), e.reconnecting = !1, e.reconnect(), e.emitAll("reconnect_error", t.data)) : (u("reconnect success"), e.onreconnect());
          }));
        }, t);this.subs.push({ destroy: function destroy() {
            clearTimeout(r);
          } });
      }
    }, n.prototype.onreconnect = function () {
      var t = this.backoff.attempts;this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t);
    };
  }, function (t, e, r) {
    t.exports = r(15), t.exports.parser = r(22);
  }, function (e, t, r) {
    (function (n) {
      function u(t, e) {
        if (!(this instanceof u)) return new u(t, e);e = e || {}, t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (e = t, t = null), t ? (t = a(t), e.hostname = t.host, e.secure = "https" === t.protocol || "wss" === t.protocol, e.port = t.port, t.query && (e.query = t.query)) : e.host && (e.hostname = a(e.host).host), this.secure = null != e.secure ? e.secure : n.location && "https:" === location.protocol, e.hostname && !e.port && (e.port = this.secure ? "443" : "80"), this.agent = e.agent || !1, this.hostname = e.hostname || (n.location ? location.hostname : "localhost"), this.port = e.port || (n.location && location.port ? location.port : this.secure ? 443 : 80), this.query = e.query || {}, "string" == typeof this.query && (this.query = c.decode(this.query)), this.upgrade = !1 !== e.upgrade, this.path = (e.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!e.forceJSONP, this.jsonp = !1 !== e.jsonp, this.forceBase64 = !!e.forceBase64, this.enablesXDR = !!e.enablesXDR, this.timestampParam = e.timestampParam || "t", this.timestampRequests = e.timestampRequests, this.transports = e.transports || ["polling", "websocket"], this.transportOptions = e.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = e.policyPort || 843, this.rememberUpgrade = e.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = e.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== e.perMessageDeflate && (e.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = e.pfx || null, this.key = e.key || null, this.passphrase = e.passphrase || null, this.cert = e.cert || null, this.ca = e.ca || null, this.ciphers = e.ciphers || null, this.rejectUnauthorized = void 0 === e.rejectUnauthorized || e.rejectUnauthorized, this.forceNode = !!e.forceNode;var r = "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n;r.global === r && (e.extraHeaders && 0 < Object.keys(e.extraHeaders).length && (this.extraHeaders = e.extraHeaders), e.localAddress && (this.localAddress = e.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open();
      }var o = r(16),
          t = r(8),
          f = r(3)("engine.io-client:socket"),
          i = r(36),
          s = r(22),
          a = r(2),
          c = r(30);(e.exports = u).priorWebsocketSuccess = !1, t(u.prototype), u.protocol = s.protocol, (u.Socket = u).Transport = r(21), u.transports = r(16), u.parser = r(22), u.prototype.createTransport = function (t) {
        f('creating transport "%s"', t);var e = function (t) {
          var e = {};for (var r in t) {
            t.hasOwnProperty(r) && (e[r] = t[r]);
          }return e;
        }(this.query);e.EIO = s.protocol, e.transport = t;var r = this.transportOptions[t] || {};return this.id && (e.sid = this.id), new o[t]({ query: e, socket: this, agent: r.agent || this.agent, hostname: r.hostname || this.hostname, port: r.port || this.port, secure: r.secure || this.secure, path: r.path || this.path, forceJSONP: r.forceJSONP || this.forceJSONP, jsonp: r.jsonp || this.jsonp, forceBase64: r.forceBase64 || this.forceBase64, enablesXDR: r.enablesXDR || this.enablesXDR, timestampRequests: r.timestampRequests || this.timestampRequests, timestampParam: r.timestampParam || this.timestampParam, policyPort: r.policyPort || this.policyPort, pfx: r.pfx || this.pfx, key: r.key || this.key, passphrase: r.passphrase || this.passphrase, cert: r.cert || this.cert, ca: r.ca || this.ca, ciphers: r.ciphers || this.ciphers, rejectUnauthorized: r.rejectUnauthorized || this.rejectUnauthorized, perMessageDeflate: r.perMessageDeflate || this.perMessageDeflate, extraHeaders: r.extraHeaders || this.extraHeaders, forceNode: r.forceNode || this.forceNode, localAddress: r.localAddress || this.localAddress, requestTimeout: r.requestTimeout || this.requestTimeout, protocols: r.protocols || void 0 });
      }, u.prototype.open = function () {
        var t;if (this.rememberUpgrade && u.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) t = "websocket";else {
          if (0 === this.transports.length) {
            var e = this;return void setTimeout(function () {
              e.emit("error", "No transports available");
            }, 0);
          }t = this.transports[0];
        }this.readyState = "opening";try {
          t = this.createTransport(t);
        } catch (t) {
          return this.transports.shift(), void this.open();
        }t.open(), this.setTransport(t);
      }, u.prototype.setTransport = function (t) {
        f("setting transport %s", t.name);var e = this;this.transport && (f("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), (this.transport = t).on("drain", function () {
          e.onDrain();
        }).on("packet", function (t) {
          e.onPacket(t);
        }).on("error", function (t) {
          e.onError(t);
        }).on("close", function () {
          e.onClose("transport close");
        });
      }, u.prototype.probe = function (r) {
        function t() {
          if (h.onlyBinaryUpgrades) {
            var t = !this.supportsBinary && h.transport.supportsBinary;p = p || t;
          }p || (f('probe transport "%s" opened', r), c.send([{ type: "ping", data: "probe" }]), c.once("packet", function (t) {
            if (!p) if ("pong" === t.type && "probe" === t.data) {
              if (f('probe transport "%s" pong', r), h.upgrading = !0, h.emit("upgrading", c), !c) return;u.priorWebsocketSuccess = "websocket" === c.name, f('pausing current transport "%s"', h.transport.name), h.transport.pause(function () {
                p || "closed" !== h.readyState && (f("changing transport and sending upgrade packet"), a(), h.setTransport(c), c.send([{ type: "upgrade" }]), h.emit("upgrade", c), c = null, h.upgrading = !1, h.flush());
              });
            } else {
              f('probe transport "%s" failed', r);var e = new Error("probe error");e.transport = c.name, h.emit("upgradeError", e);
            }
          }));
        }function n() {
          p || (p = !0, a(), c.close(), c = null);
        }function e(t) {
          var e = new Error("probe error: " + t);e.transport = c.name, n(), f('probe transport "%s" failed because of error: %s', r, t), h.emit("upgradeError", e);
        }function o() {
          e("transport closed");
        }function i() {
          e("socket closed");
        }function s(t) {
          c && t.name !== c.name && (f('"%s" works - aborting "%s"', t.name, c.name), n());
        }function a() {
          c.removeListener("open", t), c.removeListener("error", e), c.removeListener("close", o), h.removeListener("close", i), h.removeListener("upgrading", s);
        }f('probing transport "%s"', r);var c = this.createTransport(r, { probe: 1 }),
            p = !1,
            h = this;u.priorWebsocketSuccess = !1, c.once("open", t), c.once("error", e), c.once("close", o), this.once("close", i), this.once("upgrading", s), c.open();
      }, u.prototype.onOpen = function () {
        if (f("socket open"), this.readyState = "open", u.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
          f("starting upgrade probes");for (var t = 0, e = this.upgrades.length; t < e; t++) {
            this.probe(this.upgrades[t]);
          }
        }
      }, u.prototype.onPacket = function (t) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (f('socket receive: type "%s", data "%s"', t.type, t.data), this.emit("packet", t), this.emit("heartbeat"), t.type) {case "open":
            this.onHandshake(JSON.parse(t.data));break;case "pong":
            this.setPing(), this.emit("pong");break;case "error":
            var e = new Error("server error");e.code = t.data, this.onError(e);break;case "message":
            this.emit("data", t.data), this.emit("message", t.data);} else f('packet received with socket readyState "%s"', this.readyState);
      }, u.prototype.onHandshake = function (t) {
        this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat));
      }, u.prototype.onHeartbeat = function (t) {
        clearTimeout(this.pingTimeoutTimer);var e = this;e.pingTimeoutTimer = setTimeout(function () {
          "closed" !== e.readyState && e.onClose("ping timeout");
        }, t || e.pingInterval + e.pingTimeout);
      }, u.prototype.setPing = function () {
        var t = this;clearTimeout(t.pingIntervalTimer), t.pingIntervalTimer = setTimeout(function () {
          f("writing ping packet - expecting pong within %sms", t.pingTimeout), t.ping(), t.onHeartbeat(t.pingTimeout);
        }, t.pingInterval);
      }, u.prototype.ping = function () {
        var t = this;this.sendPacket("ping", function () {
          t.emit("ping");
        });
      }, u.prototype.onDrain = function () {
        this.writeBuffer.splice(0, this.prevBufferLen), (this.prevBufferLen = 0) === this.writeBuffer.length ? this.emit("drain") : this.flush();
      }, u.prototype.flush = function () {
        "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (f("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"));
      }, u.prototype.write = u.prototype.send = function (t, e, r) {
        return this.sendPacket("message", t, e, r), this;
      }, u.prototype.sendPacket = function (t, e, r, n) {
        if ("function" == typeof e && (n = e, e = void 0), "function" == typeof r && (n = r, r = null), "closing" !== this.readyState && "closed" !== this.readyState) {
          (r = r || {}).compress = !1 !== r.compress;var o = { type: t, data: e, options: r };this.emit("packetCreate", o), this.writeBuffer.push(o), n && this.once("flush", n), this.flush();
        }
      }, u.prototype.close = function () {
        function t() {
          n.onClose("forced close"), f("socket closing - telling transport to close"), n.transport.close();
        }function e() {
          n.removeListener("upgrade", e), n.removeListener("upgradeError", e), t();
        }function r() {
          n.once("upgrade", e), n.once("upgradeError", e);
        }if ("opening" === this.readyState || "open" === this.readyState) {
          this.readyState = "closing";var n = this;this.writeBuffer.length ? this.once("drain", function () {
            this.upgrading ? r() : t();
          }) : this.upgrading ? r() : t();
        }return this;
      }, u.prototype.onError = function (t) {
        f("socket error %j", t), u.priorWebsocketSuccess = !1, this.emit("error", t), this.onClose("transport error", t);
      }, u.prototype.onClose = function (t, e) {
        "opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState || (f('socket close with reason: "%s"', t), clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", t, e), this.writeBuffer = [], this.prevBufferLen = 0);
      }, u.prototype.filterUpgrades = function (t) {
        for (var e = [], r = 0, n = t.length; r < n; r++) {
          ~i(this.transports, t[r]) && e.push(t[r]);
        }return e;
      };
    }).call(t, function () {
      return this;
    }());
  }, function (t, e, r) {
    (function (s) {
      var a = r(17),
          c = r(19),
          p = r(33),
          t = r(34);e.polling = function (t) {
        var e = !1,
            r = !1,
            n = !1 !== t.jsonp;if (s.location) {
          var o = "https:" === location.protocol,
              i = location.port;i || (i = o ? 443 : 80), e = t.hostname !== location.hostname || i !== t.port, r = t.secure !== o;
        }if (t.xdomain = e, t.xscheme = r, "open" in new a(t) && !t.forceJSONP) return new c(t);if (!n) throw new Error("JSONP disabled");return new p(t);
      }, e.websocket = t;
    }).call(e, function () {
      return this;
    }());
  }, function (t, e, r) {
    (function (o) {
      var i = r(18);t.exports = function (t) {
        var e = t.xdomain,
            r = t.xscheme,
            n = t.enablesXDR;try {
          if ("undefined" != typeof XMLHttpRequest && (!e || i)) return new XMLHttpRequest();
        } catch (t) {}try {
          if ("undefined" != typeof XDomainRequest && !r && n) return new XDomainRequest();
        } catch (t) {}if (!e) try {
          return new o[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
        } catch (t) {}
      };
    }).call(e, function () {
      return this;
    }());
  }, function (t, e) {
    try {
      t.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
    } catch (e) {
      t.exports = !1;
    }
  }, function (h, t, u) {
    (function (o) {
      function e() {}function t(t) {
        if (n.call(this, t), this.requestTimeout = t.requestTimeout, this.extraHeaders = t.extraHeaders, o.location) {
          var e = "https:" === location.protocol,
              r = location.port;r || (r = e ? 443 : 80), this.xd = t.hostname !== o.location.hostname || r !== t.port, this.xs = t.secure !== e;
        }
      }function i(t) {
        this.method = t.method || "GET", this.uri = t.uri, this.xd = !!t.xd, this.xs = !!t.xs, this.async = !1 !== t.async, this.data = void 0 !== t.data ? t.data : null, this.agent = t.agent, this.isBinary = t.isBinary, this.supportsBinary = t.supportsBinary, this.enablesXDR = t.enablesXDR, this.requestTimeout = t.requestTimeout, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.extraHeaders = t.extraHeaders, this.create();
      }function r() {
        for (var t in i.requests) {
          i.requests.hasOwnProperty(t) && i.requests[t].abort();
        }
      }var s = u(17),
          n = u(20),
          a = u(8),
          c = u(31),
          p = u(3)("engine.io-client:polling-xhr");h.exports = t, h.exports.Request = i, c(t, n), t.prototype.supportsBinary = !0, t.prototype.request = function (t) {
        return (t = t || {}).uri = this.uri(), t.xd = this.xd, t.xs = this.xs, t.agent = this.agent || !1, t.supportsBinary = this.supportsBinary, t.enablesXDR = this.enablesXDR, t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized, t.requestTimeout = this.requestTimeout, t.extraHeaders = this.extraHeaders, new i(t);
      }, t.prototype.doWrite = function (t, e) {
        var r = "string" != typeof t && void 0 !== t,
            n = this.request({ method: "POST", data: t, isBinary: r }),
            o = this;n.on("success", e), n.on("error", function (t) {
          o.onError("xhr post error", t);
        }), this.sendXhr = n;
      }, t.prototype.doPoll = function () {
        p("xhr poll");var t = this.request(),
            e = this;t.on("data", function (t) {
          e.onData(t);
        }), t.on("error", function (t) {
          e.onError("xhr poll error", t);
        }), this.pollXhr = t;
      }, a(i.prototype), i.prototype.create = function () {
        var t = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized;var e = this.xhr = new s(t),
            r = this;try {
          p("xhr open %s: %s", this.method, this.uri), e.open(this.method, this.uri, this.async);try {
            if (this.extraHeaders) for (var n in e.setDisableHeaderCheck && e.setDisableHeaderCheck(!0), this.extraHeaders) {
              this.extraHeaders.hasOwnProperty(n) && e.setRequestHeader(n, this.extraHeaders[n]);
            }
          } catch (t) {}if ("POST" === this.method) try {
            this.isBinary ? e.setRequestHeader("Content-type", "application/octet-stream") : e.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
          } catch (t) {}try {
            e.setRequestHeader("Accept", "*/*");
          } catch (t) {}"withCredentials" in e && (e.withCredentials = !0), this.requestTimeout && (e.timeout = this.requestTimeout), this.hasXDR() ? (e.onload = function () {
            r.onLoad();
          }, e.onerror = function () {
            r.onError(e.responseText);
          }) : e.onreadystatechange = function () {
            if (2 === e.readyState) {
              var t;try {
                t = e.getResponseHeader("Content-Type");
              } catch (t) {}"application/octet-stream" === t && (e.responseType = "arraybuffer");
            }4 === e.readyState && (200 === e.status || 1223 === e.status ? r.onLoad() : setTimeout(function () {
              r.onError(e.status);
            }, 0));
          }, p("xhr data %s", this.data), e.send(this.data);
        } catch (t) {
          return void setTimeout(function () {
            r.onError(t);
          }, 0);
        }o.document && (this.index = i.requestsCount++, i.requests[this.index] = this);
      }, i.prototype.onSuccess = function () {
        this.emit("success"), this.cleanup();
      }, i.prototype.onData = function (t) {
        this.emit("data", t), this.onSuccess();
      }, i.prototype.onError = function (t) {
        this.emit("error", t), this.cleanup(!0);
      }, i.prototype.cleanup = function (t) {
        if (void 0 !== this.xhr && null !== this.xhr) {
          if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = e : this.xhr.onreadystatechange = e, t) try {
            this.xhr.abort();
          } catch (t) {}o.document && delete i.requests[this.index], this.xhr = null;
        }
      }, i.prototype.onLoad = function () {
        var t;try {
          var e;try {
            e = this.xhr.getResponseHeader("Content-Type");
          } catch (t) {}t = "application/octet-stream" === e && this.xhr.response || this.xhr.responseText;
        } catch (t) {
          this.onError(t);
        }null != t && this.onData(t);
      }, i.prototype.hasXDR = function () {
        return void 0 !== o.XDomainRequest && !this.xs && this.enablesXDR;
      }, i.prototype.abort = function () {
        this.cleanup();
      }, i.requestsCount = 0, i.requests = {}, o.document && (o.attachEvent ? o.attachEvent("onunload", r) : o.addEventListener && o.addEventListener("beforeunload", r, !1));
    }).call(t, function () {
      return this;
    }());
  }, function (t, e, r) {
    function n(t) {
      var e = t && t.forceBase64;h && !e || (this.supportsBinary = !1), o.call(this, t);
    }var o = r(21),
        i = r(30),
        s = r(22),
        a = r(31),
        c = r(32),
        p = r(3)("engine.io-client:polling");t.exports = n;var h = null != new (r(17))({ xdomain: !1 }).responseType;a(n, o), n.prototype.name = "polling", n.prototype.doOpen = function () {
      this.poll();
    }, n.prototype.pause = function (t) {
      function e() {
        p("paused"), r.readyState = "paused", t();
      }var r = this;if (this.readyState = "pausing", this.polling || !this.writable) {
        var n = 0;this.polling && (p("we are currently polling - waiting to pause"), n++, this.once("pollComplete", function () {
          p("pre-pause polling complete"), --n || e();
        })), this.writable || (p("we are currently writing - waiting to pause"), n++, this.once("drain", function () {
          p("pre-pause writing complete"), --n || e();
        }));
      } else e();
    }, n.prototype.poll = function () {
      p("polling"), this.polling = !0, this.doPoll(), this.emit("poll");
    }, n.prototype.onData = function (t) {
      var n = this;p("polling got data %s", t), s.decodePayload(t, this.socket.binaryType, function (t, e, r) {
        return "opening" === n.readyState && n.onOpen(), "close" === t.type ? (n.onClose(), !1) : void n.onPacket(t);
      }), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : p('ignoring poll - transport state "%s"', this.readyState));
    }, n.prototype.doClose = function () {
      function t() {
        p("writing close packet"), e.write([{ type: "close" }]);
      }var e = this;"open" === this.readyState ? (p("transport open - closing"), t()) : (p("transport not open - deferring close"), this.once("open", t));
    }, n.prototype.write = function (t) {
      var e = this;this.writable = !1;var r = function r() {
        e.writable = !0, e.emit("drain");
      };s.encodePayload(t, this.supportsBinary, function (t) {
        e.doWrite(t, r);
      });
    }, n.prototype.uri = function () {
      var t = this.query || {},
          e = this.secure ? "https" : "http",
          r = "";return !1 !== this.timestampRequests && (t[this.timestampParam] = c()), this.supportsBinary || t.sid || (t.b64 = 1), t = i.encode(t), this.port && ("https" === e && 443 !== Number(this.port) || "http" === e && 80 !== Number(this.port)) && (r = ":" + this.port), t.length && (t = "?" + t), e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + r + this.path + t;
    };
  }, function (t, e, r) {
    function n(t) {
      this.path = t.path, this.hostname = t.hostname, this.port = t.port, this.secure = t.secure, this.query = t.query, this.timestampParam = t.timestampParam, this.timestampRequests = t.timestampRequests, this.readyState = "", this.agent = t.agent || !1, this.socket = t.socket, this.enablesXDR = t.enablesXDR, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.forceNode = t.forceNode, this.extraHeaders = t.extraHeaders, this.localAddress = t.localAddress;
    }var o = r(22);r(8)((t.exports = n).prototype), n.prototype.onError = function (t, e) {
      var r = new Error(t);return r.type = "TransportError", r.description = e, this.emit("error", r), this;
    }, n.prototype.open = function () {
      return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this;
    }, n.prototype.close = function () {
      return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this;
    }, n.prototype.send = function (t) {
      if ("open" !== this.readyState) throw new Error("Transport not open");this.write(t);
    }, n.prototype.onOpen = function () {
      this.readyState = "open", this.writable = !0, this.emit("open");
    }, n.prototype.onData = function (t) {
      var e = o.decodePacket(t, this.socket.binaryType);this.onPacket(e);
    }, n.prototype.onPacket = function (t) {
      this.emit("packet", t);
    }, n.prototype.onClose = function () {
      this.readyState = "closed", this.emit("close");
    };
  }, function (t, m, n) {
    (function (p) {
      function o(t, e, r) {
        for (var o = new Array(t.length), n = a(t.length, r), i = function i(r, t, n) {
          e(t, function (t, e) {
            o[r] = e, n(t, o);
          });
        }, s = 0; s < t.length; s++) {
          i(s, t[s], n);
        }
      }var i,
          t = n(23),
          s = n(9),
          f = n(24),
          a = n(25),
          c = n(26);p && p.ArrayBuffer && (i = n(28));var e = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
          r = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
          h = e || r;m.protocol = 3;var u = m.packets = { open: 0, close: 1, ping: 2, pong: 3, message: 4, upgrade: 5, noop: 6 },
          l = t(u),
          d = { type: "error", data: "parser error" },
          y = n(29);m.encodePacket = function (t, a, e, r) {
        "function" == typeof a && (r = a, a = !1), "function" == typeof e && (r = e, e = null);var n,
            o = void 0 === t.data ? void 0 : t.data.buffer || t.data;if (p.ArrayBuffer && o instanceof ArrayBuffer) return function (t, e, r) {
          if (!a) return m.encodeBase64Packet(t, r);var n = t.data,
              o = new Uint8Array(n),
              i = new Uint8Array(1 + n.byteLength);i[0] = u[t.type];for (var s = 0; s < o.length; s++) {
            i[s + 1] = o[s];
          }return r(i.buffer);
        }(t, 0, r);if (y && o instanceof p.Blob) return function (t, e, r) {
          if (!e) return m.encodeBase64Packet(t, r);if (h) return function (t, e, r) {
            if (!e) return m.encodeBase64Packet(t, r);var n = new FileReader();return n.onload = function () {
              t.data = n.result, m.encodePacket(t, e, !0, r);
            }, n.readAsArrayBuffer(t.data);
          }(t, e, r);var n = new Uint8Array(1);return n[0] = u[t.type], r(new y([n.buffer, t.data]));
        }(t, a, r);if (o && o.base64) return n = t, r("b" + m.packets[n.type] + n.data.data);var i = u[t.type];return void 0 !== t.data && (i += e ? c.encode(String(t.data), { strict: !1 }) : String(t.data)), r("" + i);
      }, m.encodeBase64Packet = function (e, r) {
        var n,
            o = "b" + m.packets[e.type];if (y && e.data instanceof p.Blob) {
          var i = new FileReader();return i.onload = function () {
            var t = i.result.split(",")[1];r(o + t);
          }, i.readAsDataURL(e.data);
        }try {
          n = String.fromCharCode.apply(null, new Uint8Array(e.data));
        } catch (t) {
          for (var s = new Uint8Array(e.data), a = new Array(s.length), c = 0; c < s.length; c++) {
            a[c] = s[c];
          }n = String.fromCharCode.apply(null, a);
        }return o += p.btoa(n), r(o);
      }, m.decodePacket = function (t, e, r) {
        if (void 0 === t) return d;if ("string" == typeof t) {
          if ("b" === t.charAt(0)) return m.decodeBase64Packet(t.substr(1), e);if (r && !1 === (t = function (t) {
            try {
              t = c.decode(t, { strict: !1 });
            } catch (t) {
              return !1;
            }return t;
          }(t))) return d;var n = t.charAt(0);return Number(n) == n && l[n] ? 1 < t.length ? { type: l[n], data: t.substring(1) } : { type: l[n] } : d;
        }n = new Uint8Array(t)[0];var o = f(t, 1);return y && "blob" === e && (o = new y([o])), { type: l[n], data: o };
      }, m.decodeBase64Packet = function (t, e) {
        var r = l[t.charAt(0)];if (!i) return { type: r, data: { base64: !0, data: t.substr(1) } };var n = i.decode(t.substr(1));return "blob" === e && y && (n = new y([n])), { type: r, data: n };
      }, m.encodePayload = function (t, e, r) {
        "function" == typeof e && (r = e, e = null);var n = s(t);return e && n ? y && !h ? m.encodePayloadAsBlob(t, r) : m.encodePayloadAsArrayBuffer(t, r) : t.length ? void o(t, function (t, r) {
          m.encodePacket(t, !!n && e, !1, function (t) {
            var e;r(null, (e = t).length + ":" + e);
          });
        }, function (t, e) {
          return r(e.join(""));
        }) : r("0:");
      }, m.decodePayload = function (t, e, r) {
        if ("string" != typeof t) return m.decodePayloadAsBinary(t, e, r);var n;if ("function" == typeof e && (r = e, e = null), "" === t) return r(d, 0, 1);for (var o, i, s = "", a = 0, c = t.length; a < c; a++) {
          var p = t.charAt(a);if (":" === p) {
            if ("" === s || s != (o = Number(s))) return r(d, 0, 1);if (s != (i = t.substr(a + 1, o)).length) return r(d, 0, 1);if (i.length) {
              if (n = m.decodePacket(i, e, !1), d.type === n.type && d.data === n.data) return r(d, 0, 1);if (!1 === r(n, a + o, c)) return;
            }a += o, s = "";
          } else s += p;
        }return "" !== s ? r(d, 0, 1) : void 0;
      }, m.encodePayloadAsArrayBuffer = function (t, n) {
        return t.length ? void o(t, function (t, e) {
          m.encodePacket(t, !0, !0, function (t) {
            return e(null, t);
          });
        }, function (t, e) {
          var r = e.reduce(function (t, e) {
            var r;return t + (r = "string" == typeof e ? e.length : e.byteLength).toString().length + r + 2;
          }, 0),
              s = new Uint8Array(r),
              a = 0;return e.forEach(function (t) {
            var e = "string" == typeof t,
                r = t;if (e) {
              for (var n = new Uint8Array(t.length), o = 0; o < t.length; o++) {
                n[o] = t.charCodeAt(o);
              }r = n.buffer;
            }s[a++] = e ? 0 : 1;var i = r.byteLength.toString();for (o = 0; o < i.length; o++) {
              s[a++] = parseInt(i[o]);
            }for (s[a++] = 255, n = new Uint8Array(r), o = 0; o < n.length; o++) {
              s[a++] = n[o];
            }
          }), n(s.buffer);
        }) : n(new ArrayBuffer(0));
      }, m.encodePayloadAsBlob = function (t, r) {
        o(t, function (t, a) {
          m.encodePacket(t, !0, !0, function (t) {
            var e = new Uint8Array(1);if (e[0] = 1, "string" == typeof t) {
              for (var r = new Uint8Array(t.length), n = 0; n < t.length; n++) {
                r[n] = t.charCodeAt(n);
              }t = r.buffer, e[0] = 0;
            }var o = (t instanceof ArrayBuffer ? t.byteLength : t.size).toString(),
                i = new Uint8Array(o.length + 1);for (n = 0; n < o.length; n++) {
              i[n] = parseInt(o[n]);
            }if (i[o.length] = 255, y) {
              var s = new y([e.buffer, i.buffer, t]);a(null, s);
            }
          });
        }, function (t, e) {
          return r(new y(e));
        });
      }, m.decodePayloadAsBinary = function (t, r, n) {
        "function" == typeof r && (n = r, r = null);for (var e = t, o = []; 0 < e.byteLength;) {
          for (var i = new Uint8Array(e), s = 0 === i[0], a = "", c = 1; 255 !== i[c]; c++) {
            if (310 < a.length) return n(d, 0, 1);a += i[c];
          }e = f(e, 2 + a.length), a = parseInt(a);var p = f(e, 0, a);if (s) try {
            p = String.fromCharCode.apply(null, new Uint8Array(p));
          } catch (t) {
            var h = new Uint8Array(p);for (p = "", c = 0; c < h.length; c++) {
              p += String.fromCharCode(h[c]);
            }
          }o.push(p), e = f(e, a);
        }var u = o.length;o.forEach(function (t, e) {
          n(m.decodePacket(t, r, !0), e, u);
        });
      };
    }).call(m, function () {
      return this;
    }());
  }, function (t, e) {
    t.exports = Object.keys || function (t) {
      var e = [],
          r = Object.prototype.hasOwnProperty;for (var n in t) {
        r.call(t, n) && e.push(n);
      }return e;
    };
  }, function (t, e) {
    t.exports = function (t, e, r) {
      var n = t.byteLength;if (e = e || 0, r = r || n, t.slice) return t.slice(e, r);if (e < 0 && (e += n), r < 0 && (r += n), n < r && (r = n), n <= e || r <= e || 0 === n) return new ArrayBuffer(0);for (var o = new Uint8Array(t), i = new Uint8Array(r - e), s = e, a = 0; s < r; s++, a++) {
        i[a] = o[s];
      }return i.buffer;
    };
  }, function (t, e) {
    function s() {}t.exports = function (t, r, n) {
      function o(t, e) {
        if (o.count <= 0) throw new Error("after called too many times");--o.count, t ? (i = !0, r(t), r = n) : 0 !== o.count || i || r(null, e);
      }var i = !1;return n = n || s, 0 === (o.count = t) ? r() : o;
    };
  }, function (t, y, m) {
    var g;(function (l, d) {
      !function (t) {
        function a(t) {
          for (var e, r, n = [], o = 0, i = t.length; o < i;) {
            55296 <= (e = t.charCodeAt(o++)) && e <= 56319 && o < i ? 56320 == (64512 & (r = t.charCodeAt(o++))) ? n.push(((1023 & e) << 10) + (1023 & r) + 65536) : (n.push(e), o--) : n.push(e);
          }return n;
        }function n(t, e) {
          if (55296 <= t && t <= 57343) {
            if (e) throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value");return !1;
          }return !0;
        }function o(t, e) {
          return f(t >> e & 63 | 128);
        }function c(t, e) {
          if (0 == (4294967168 & t)) return f(t);var r = "";return 0 == (4294965248 & t) ? r = f(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (n(t, e) || (t = 65533), r = f(t >> 12 & 15 | 224), r += o(t, 6)) : 0 == (4292870144 & t) && (r = f(t >> 18 & 7 | 240), r += o(t, 12), r += o(t, 6)), r + f(63 & t | 128);
        }function i() {
          if (h <= u) throw Error("Invalid byte index");var t = 255 & p[u];if (u++, 128 == (192 & t)) return 63 & t;throw Error("Invalid continuation byte");
        }function s(t) {
          var e, r;if (h < u) throw Error("Invalid byte index");if (u == h) return !1;if (e = 255 & p[u], u++, 0 == (128 & e)) return e;if (192 == (224 & e)) {
            if (128 <= (r = (31 & e) << 6 | i())) return r;throw Error("Invalid continuation byte");
          }if (224 == (240 & e)) {
            if (2048 <= (r = (15 & e) << 12 | i() << 6 | i())) return n(r, t) ? r : 65533;throw Error("Invalid continuation byte");
          }if (240 == (248 & e) && 65536 <= (r = (7 & e) << 18 | i() << 12 | i() << 6 | i()) && r <= 1114111) return r;throw Error("Invalid UTF-8 detected");
        }var e = ("object" == (typeof l === "undefined" ? "undefined" : _typeof(l)) && l && l.exports, "object" == (typeof d === "undefined" ? "undefined" : _typeof(d)) && d);e.global !== e && e.window;var p,
            h,
            u,
            f = String.fromCharCode,
            r = { version: "2.1.2", encode: function encode(t, e) {
            for (var r = !1 !== (e = e || {}).strict, n = a(t), o = n.length, i = -1, s = ""; ++i < o;) {
              s += c(n[i], r);
            }return s;
          }, decode: function decode(t, e) {
            var r = !1 !== (e = e || {}).strict;p = a(t), h = p.length, u = 0;for (var n, o = []; !1 !== (n = s(r));) {
              o.push(n);
            }return function (t) {
              for (var e, r = t.length, n = -1, o = ""; ++n < r;) {
                65535 < (e = t[n]) && (o += f((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), o += f(e);
              }return o;
            }(o);
          } };void 0 === (g = function () {
          return r;
        }.call(y, m, y, l)) || (l.exports = g);
      }();
    }).call(y, m(27)(t), function () {
      return this;
    }());
  }, function (t, e) {
    t.exports = function (t) {
      return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children = [], t.webpackPolyfill = 1), t;
    };
  }, function (t, e) {
    !function () {
      "use strict";
      for (var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", u = new Uint8Array(256), t = 0; t < i.length; t++) {
        u[i.charCodeAt(t)] = t;
      }e.encode = function (t) {
        var e,
            r = new Uint8Array(t),
            n = r.length,
            o = "";for (e = 0; e < n; e += 3) {
          o += i[r[e] >> 2], o += i[(3 & r[e]) << 4 | r[e + 1] >> 4], o += i[(15 & r[e + 1]) << 2 | r[e + 2] >> 6], o += i[63 & r[e + 2]];
        }return n % 3 == 2 ? o = o.substring(0, o.length - 1) + "=" : n % 3 == 1 && (o = o.substring(0, o.length - 2) + "=="), o;
      }, e.decode = function (t) {
        var e,
            r,
            n,
            o,
            i,
            s = .75 * t.length,
            a = t.length,
            c = 0;"=" === t[t.length - 1] && (s--, "=" === t[t.length - 2] && s--);var p = new ArrayBuffer(s),
            h = new Uint8Array(p);for (e = 0; e < a; e += 4) {
          r = u[t.charCodeAt(e)], n = u[t.charCodeAt(e + 1)], o = u[t.charCodeAt(e + 2)], i = u[t.charCodeAt(e + 3)], h[c++] = r << 2 | n >> 4, h[c++] = (15 & n) << 4 | o >> 2, h[c++] = (3 & o) << 6 | 63 & i;
        }return p;
      };
    }();
  }, function (s, t) {
    (function (t) {
      function o(t) {
        for (var e = 0; e < t.length; e++) {
          var r = t[e];if (r.buffer instanceof ArrayBuffer) {
            var n = r.buffer;if (r.byteLength !== n.byteLength) {
              var o = new Uint8Array(r.byteLength);o.set(new Uint8Array(n, r.byteOffset, r.byteLength)), n = o.buffer;
            }t[e] = n;
          }
        }
      }var i = t.BlobBuilder || t.WebKitBlobBuilder || t.MSBlobBuilder || t.MozBlobBuilder,
          e = function () {
        try {
          return 2 === new Blob(["hi"]).size;
        } catch (t) {
          return !1;
        }
      }(),
          r = e && function () {
        try {
          return 2 === new Blob([new Uint8Array([1, 2])]).size;
        } catch (t) {
          return !1;
        }
      }(),
          n = i && i.prototype.append && i.prototype.getBlob;s.exports = e ? r ? t.Blob : function (t, e) {
        return o(t), new Blob(t, e || {});
      } : n ? function (t, e) {
        e = e || {};var r = new i();o(t);for (var n = 0; n < t.length; n++) {
          r.append(t[n]);
        }return e.type ? r.getBlob(e.type) : r.getBlob();
      } : void 0;
    }).call(t, function () {
      return this;
    }());
  }, function (t, e) {
    e.encode = function (t) {
      var e = "";for (var r in t) {
        t.hasOwnProperty(r) && (e.length && (e += "&"), e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
      }return e;
    }, e.decode = function (t) {
      for (var e = {}, r = t.split("&"), n = 0, o = r.length; n < o; n++) {
        var i = r[n].split("=");e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
      }return e;
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      var r = function r() {};r.prototype = e.prototype, t.prototype = new r(), t.prototype.constructor = t;
    };
  }, function (t, e) {
    "use strict";
    function r(t) {
      for (var e = ""; e = i[t % s] + e, 0 < (t = Math.floor(t / s));) {}return e;
    }function n() {
      var t = r(+new Date());return t !== o ? (c = 0, o = t) : t + "." + r(c++);
    }for (var o, i = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), s = 64, a = {}, c = 0, p = 0; p < s; p++) {
      a[i[p]] = p;
    }n.encode = r, n.decode = function (t) {
      var e = 0;for (p = 0; p < t.length; p++) {
        e = e * s + a[t.charAt(p)];
      }return e;
    }, t.exports = n;
  }, function (s, t, a) {
    (function (r) {
      function n() {}function t(t) {
        o.call(this, t), this.query = this.query || {}, i || (r.___eio || (r.___eio = []), i = r.___eio), this.index = i.length;var e = this;i.push(function (t) {
          e.onData(t);
        }), this.query.j = this.index, r.document && r.addEventListener && r.addEventListener("beforeunload", function () {
          e.script && (e.script.onerror = n);
        }, !1);
      }var o = a(20),
          e = a(31);s.exports = t;var i,
          p = /\n/g,
          h = /\\n/g;e(t, o), t.prototype.supportsBinary = !1, t.prototype.doClose = function () {
        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), o.prototype.doClose.call(this);
      }, t.prototype.doPoll = function () {
        var e = this,
            t = document.createElement("script");this.script && (this.script.parentNode.removeChild(this.script), this.script = null), t.async = !0, t.src = this.uri(), t.onerror = function (t) {
          e.onError("jsonp poll error", t);
        };var r = document.getElementsByTagName("script")[0];r ? r.parentNode.insertBefore(t, r) : (document.head || document.body).appendChild(t), this.script = t, "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function () {
          var t = document.createElement("iframe");document.body.appendChild(t), document.body.removeChild(t);
        }, 100);
      }, t.prototype.doWrite = function (t, e) {
        function r() {
          n(), e();
        }function n() {
          if (o.iframe) try {
            o.form.removeChild(o.iframe);
          } catch (t) {
            o.onError("jsonp polling iframe removal error", t);
          }try {
            var t = '<iframe src="javascript:0" name="' + o.iframeId + '">';i = document.createElement(t);
          } catch (t) {
            (i = document.createElement("iframe")).name = o.iframeId, i.src = "javascript:0";
          }i.id = o.iframeId, o.form.appendChild(i), o.iframe = i;
        }var o = this;if (!this.form) {
          var i,
              s = document.createElement("form"),
              a = document.createElement("textarea"),
              c = this.iframeId = "eio_iframe_" + this.index;s.className = "socketio", s.style.position = "absolute", s.style.top = "-1000px", s.style.left = "-1000px", s.target = c, s.method = "POST", s.setAttribute("accept-charset", "utf-8"), a.name = "d", s.appendChild(a), document.body.appendChild(s), this.form = s, this.area = a;
        }this.form.action = this.uri(), n(), t = t.replace(h, "\\\n"), this.area.value = t.replace(p, "\\n");try {
          this.form.submit();
        } catch (t) {}this.iframe.attachEvent ? this.iframe.onreadystatechange = function () {
          "complete" === o.iframe.readyState && r();
        } : this.iframe.onload = r;
      };
    }).call(t, function () {
      return this;
    }());
  }, function (u, t, f) {
    (function (i) {
      function t(t) {
        t && t.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = t.perMessageDeflate, this.usingBrowserWebSocket = p && !t.forceNode, this.protocols = t.protocols, this.usingBrowserWebSocket || (h = e), r.call(this, t);
      }var e,
          r = f(21),
          s = f(22),
          n = f(30),
          o = f(31),
          a = f(32),
          c = f(3)("engine.io-client:websocket"),
          p = i.WebSocket || i.MozWebSocket;if ("undefined" == typeof window) try {
        e = f(35);
      } catch (t) {}var h = p;h || "undefined" != typeof window || (h = e), o(u.exports = t, r), t.prototype.name = "websocket", t.prototype.supportsBinary = !0, t.prototype.doOpen = function () {
        if (this.check()) {
          var t = this.uri(),
              e = this.protocols,
              r = { agent: this.agent, perMessageDeflate: this.perMessageDeflate };r.pfx = this.pfx, r.key = this.key, r.passphrase = this.passphrase, r.cert = this.cert, r.ca = this.ca, r.ciphers = this.ciphers, r.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (r.headers = this.extraHeaders), this.localAddress && (r.localAddress = this.localAddress);try {
            this.ws = this.usingBrowserWebSocket ? e ? new h(t, e) : new h(t) : new h(t, e, r);
          } catch (t) {
            return this.emit("error", t);
          }void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners();
        }
      }, t.prototype.addEventListeners = function () {
        var e = this;this.ws.onopen = function () {
          e.onOpen();
        }, this.ws.onclose = function () {
          e.onClose();
        }, this.ws.onmessage = function (t) {
          e.onData(t.data);
        }, this.ws.onerror = function (t) {
          e.onError("websocket error", t);
        };
      }, t.prototype.write = function (t) {
        var n = this;this.writable = !1;for (var o = t.length, e = 0, r = o; e < r; e++) {
          !function (r) {
            s.encodePacket(r, n.supportsBinary, function (t) {
              if (!n.usingBrowserWebSocket) {
                var e = {};r.options && (e.compress = r.options.compress), n.perMessageDeflate && ("string" == typeof t ? i.Buffer.byteLength(t) : t.length) < n.perMessageDeflate.threshold && (e.compress = !1);
              }try {
                n.usingBrowserWebSocket ? n.ws.send(t) : n.ws.send(t, e);
              } catch (t) {
                c("websocket closed before onclose event");
              }--o || (n.emit("flush"), setTimeout(function () {
                n.writable = !0, n.emit("drain");
              }, 0));
            });
          }(t[e]);
        }
      }, t.prototype.onClose = function () {
        r.prototype.onClose.call(this);
      }, t.prototype.doClose = function () {
        void 0 !== this.ws && this.ws.close();
      }, t.prototype.uri = function () {
        var t = this.query || {},
            e = this.secure ? "wss" : "ws",
            r = "";return this.port && ("wss" === e && 443 !== Number(this.port) || "ws" === e && 80 !== Number(this.port)) && (r = ":" + this.port), this.timestampRequests && (t[this.timestampParam] = a()), this.supportsBinary || (t.b64 = 1), (t = n.encode(t)).length && (t = "?" + t), e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + r + this.path + t;
      }, t.prototype.check = function () {
        return !(!h || "__initialize" in h && this.name === t.prototype.name);
      };
    }).call(t, function () {
      return this;
    }());
  }, function (t, e) {}, function (t, e) {
    var n = [].indexOf;t.exports = function (t, e) {
      if (n) return t.indexOf(e);for (var r = 0; r < t.length; ++r) {
        if (t[r] === e) return r;
      }return -1;
    };
  }, function (t, e, r) {
    "use strict";
    function n(t, e, r) {
      this.io = t, this.nsp = e, (this.json = this).ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, r && r.query && (this.query = r.query), this.io.autoConnect && this.open();
    }var o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    },
        i = r(7),
        s = r(8),
        a = r(38),
        c = r(39),
        p = r(40),
        h = r(3)("socket.io-client:socket"),
        u = r(30);t.exports = n;var f = { connect: 1, connect_error: 1, connect_timeout: 1, connecting: 1, disconnect: 1, error: 1, reconnect: 1, reconnect_attempt: 1, reconnect_failed: 1, reconnect_error: 1, reconnecting: 1, ping: 1, pong: 1 },
        l = s.prototype.emit;s(n.prototype), n.prototype.subEvents = function () {
      if (!this.subs) {
        var t = this.io;this.subs = [c(t, "open", p(this, "onopen")), c(t, "packet", p(this, "onpacket")), c(t, "close", p(this, "onclose"))];
      }
    }, n.prototype.open = n.prototype.connect = function () {
      return this.connected || (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting")), this;
    }, n.prototype.send = function () {
      var t = a(arguments);return t.unshift("message"), this.emit.apply(this, t), this;
    }, n.prototype.emit = function (t) {
      if (f.hasOwnProperty(t)) return l.apply(this, arguments), this;var e = a(arguments),
          r = { type: i.EVENT, data: e, options: {} };return r.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof e[e.length - 1] && (h("emitting packet with ack id %d", this.ids), this.acks[this.ids] = e.pop(), r.id = this.ids++), this.connected ? this.packet(r) : this.sendBuffer.push(r), delete this.flags, this;
    }, n.prototype.packet = function (t) {
      t.nsp = this.nsp, this.io.packet(t);
    }, n.prototype.onopen = function () {
      if (h("transport is open - connecting"), "/" !== this.nsp) if (this.query) {
        var t = "object" === o(this.query) ? u.encode(this.query) : this.query;h("sending connect packet with query %s", t), this.packet({ type: i.CONNECT, query: t });
      } else this.packet({ type: i.CONNECT });
    }, n.prototype.onclose = function (t) {
      h("close (%s)", t), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", t);
    }, n.prototype.onpacket = function (t) {
      if (t.nsp === this.nsp) switch (t.type) {case i.CONNECT:
          this.onconnect();break;case i.EVENT:case i.BINARY_EVENT:
          this.onevent(t);break;case i.ACK:case i.BINARY_ACK:
          this.onack(t);break;case i.DISCONNECT:
          this.ondisconnect();break;case i.ERROR:
          this.emit("error", t.data);}
    }, n.prototype.onevent = function (t) {
      var e = t.data || [];h("emitting event %j", e), null != t.id && (h("attaching ack callback to event"), e.push(this.ack(t.id))), this.connected ? l.apply(this, e) : this.receiveBuffer.push(e);
    }, n.prototype.ack = function (e) {
      var r = this,
          n = !1;return function () {
        if (!n) {
          n = !0;var t = a(arguments);h("sending ack %j", t), r.packet({ type: i.ACK, id: e, data: t });
        }
      };
    }, n.prototype.onack = function (t) {
      var e = this.acks[t.id];"function" == typeof e ? (h("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), delete this.acks[t.id]) : h("bad ack %s", t.id);
    }, n.prototype.onconnect = function () {
      this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered();
    }, n.prototype.emitBuffered = function () {
      var t;for (t = 0; t < this.receiveBuffer.length; t++) {
        l.apply(this, this.receiveBuffer[t]);
      }for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++) {
        this.packet(this.sendBuffer[t]);
      }this.sendBuffer = [];
    }, n.prototype.ondisconnect = function () {
      h("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect");
    }, n.prototype.destroy = function () {
      if (this.subs) {
        for (var t = 0; t < this.subs.length; t++) {
          this.subs[t].destroy();
        }this.subs = null;
      }this.io.destroy(this);
    }, n.prototype.close = n.prototype.disconnect = function () {
      return this.connected && (h("performing disconnect (%s)", this.nsp), this.packet({ type: i.DISCONNECT })), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
    }, n.prototype.compress = function (t) {
      return this.flags = this.flags || {}, this.flags.compress = t, this;
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      for (var r = [], n = (e = e || 0) || 0; n < t.length; n++) {
        r[n - e] = t[n];
      }return r;
    };
  }, function (t, e) {
    "use strict";
    t.exports = function (t, e, r) {
      return t.on(e, r), { destroy: function destroy() {
          t.removeListener(e, r);
        } };
    };
  }, function (t, e) {
    var n = [].slice;t.exports = function (t, e) {
      if ("string" == typeof e && (e = t[e]), "function" != typeof e) throw new Error("bind() requires a function");var r = n.call(arguments, 2);return function () {
        return e.apply(t, r.concat(n.call(arguments)));
      };
    };
  }, function (t, e) {
    function r(t) {
      t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = 0 < t.jitter && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
    }(t.exports = r).prototype.duration = function () {
      var t = this.ms * Math.pow(this.factor, this.attempts++);if (this.jitter) {
        var e = Math.random(),
            r = Math.floor(e * this.jitter * t);t = 0 == (1 & Math.floor(10 * e)) ? t - r : t + r;
      }return 0 | Math.min(t, this.max);
    }, r.prototype.reset = function () {
      this.attempts = 0;
    }, r.prototype.setMin = function (t) {
      this.ms = t;
    }, r.prototype.setMax = function (t) {
      this.max = t;
    }, r.prototype.setJitter = function (t) {
      this.jitter = t;
    };
  }]);
});