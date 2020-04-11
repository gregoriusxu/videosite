"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
  return typeof t === "undefined" ? "undefined" : _typeof2(t);
} : function (t) {
  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof2(t);
};function _defineProperty(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}!function () {
  function t(t, e) {
    for (var n, r = 0, i = t.length; r < i; r++) {
      n = e(t[r], n);
    }return n;
  }String.prototype.formateString = function (n) {
    return this.replace(/@\((\w+)\)/g, function (t, e) {
      return console.log(void 0 === n[e]), "undefined" === n[e] ? "" : n[e];
    });
  }, String.prototype.ltrim = function () {
    return this.replace(/^\s*/g, "");
  }, String.prototype.rtrim = function () {
    return this.replace(/\s*$/g, "");
  }, String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
  }, String.prototype.camelCase = function () {
    return this.replace(/(^\w{1})(.*)/g, function (t, e, n) {
      return e.toUpperCase() + n.toLowerCase();
    });
  }, String.prototype.dashString = function () {
    return this.replace(/\_/g, "-");
  }, String.prototype.isEmpty = function () {
    return 0 === this.length;
  }, String.prototype.contains = function (t) {
    return -1 !== this.indexOf(t);
  }, String.prototype.escapeHTML = function () {
    for (var t = this.split(""), e = 0, n = t.length; e < n; e++) {
      switch (t[e]) {case "<":
          r(t, e, "&lt;");break;case ">":
          r(t, e, "&gt;");break;case "'":
          r(t, e, "&#39;");break;case '"':
          r(t, e, "&quot;");break;case "&":
          r(t, e, "&amp;");}
    }return t.join("");function r(t, e, n) {
      return t.splice(e, 1, n);
    }
  }, String.prototype.escapeHTML = function () {
    return Array.prototype.slice.call(this).join("").replace(/$/g, "&amp").replace(/\</g, "&lt").replace(/\>/g, "&gt").replace(/\'/g, "&#39").replace(/\"/g, "&quot");
  }, String.prototype.unescapeHTML = function () {
    return console.log(_typeof(this)), Array.prototype.slice.call(this).join("").replace(/&lt/g, "<").replace(/&gt/g, ">").replace(/&#39/g, "'").replace(/&quot/g, '"').replace(/&amp/g, "").replace(/&#(\d+)/g, function (t, e) {
      return String.fromCharCode(parseInt(e, 10));
    });
  }, String.prototype.reverse = function () {
    var t = this.toString().split("");return (t = t.reverse()).join();
  }, Array.prototype.clear = function () {
    return this.length = 0, this;
  }, Array.prototype.size = function () {
    return this.length;
  }, Array.prototype.first = function () {
    return this[0];
  }, Array.prototype.last = function () {
    return this[this.length - 1];
  }, Array.prototype.sum = function () {
    return t(this, function (t, e) {
      return void 0 === e ? t : e + t;
    });
  }, Array.prototype.max = function () {
    return t(this, function (t, e) {
      return void 0 === e ? t : e < t ? t : e;
    });
  }, Array.prototype.min = function () {
    return t(this, function (t, e) {
      return void 0 === e ? t : e < t ? e : t;
    });
  }, Array.prototype.avg = function () {
    if (0 !== this.length) return this.sum() / this.length;
  }, Array.prototype.unique = function () {
    for (var t = [], e = this.length, n = 0; n < e; n++) {
      for (var r = n + 1; r < e; r++) {
        this[n] === this[r] && (r = ++n);
      }t.push(this[n]);
    }return t;
  }, Array.prototype.unique = function () {
    var t = [],
        e = this.length;this.sort();for (var n = 0; n < e; n++) {
      this[n] !== this[n + 1] && (t[t.length] = this[n]);
    }return t;
  }, Array.prototype.union = function (t) {
    return this.concat(t).union();
  }, Array.prototype.intersect = function (t) {
    var e = this.unique(),
        o = t.unique();return e.filter(function (t, e, n) {
      for (var r = 0, i = o.length; r < i; r++) {
        if (t === o[r]) return !0;
      }return !1;
    });
  }, Array.prototype.diff = function (t) {
    var e = this.unique(),
        o = t.unique();return e.filter(function (t, e, n) {
      for (var r = 0, i = o.length; r < i; r++) {
        if (t === o[r]) return !1;
      }return !0;
    });
  }, Array.prototype.forEach = function (t, e) {
    for (var n = 0, r = this.length; n < r; n++) {
      t.call(e || null, this[n], n, this);
    }
  }, Array.prototype.map = function (t, e) {
    for (var n = [], r = 0, i = this.length; r < i; r++) {
      res = t.call(e || null, this[r], r, this), n.push(res);
    }return n;
  }, Array.prototype.filter = function (t, e) {
    for (var n = [], r = 0, i = this.length; r < i; r++) {
      t.call(e || null, this[r], r, this) && n.push(this[r]);
    }return n;
  }, Array.prototype.each = function (t) {
    for (var e = 0, n = this.length; e < n; e++) {
      t.call(this[e]);
    }
  }, Array.prototype.every = function (t, e) {
    for (var n = 0, r = this.length; n < r; n++) {
      if (0 == !!t.call(e || null, this[n], n, this)) return !1;
    }return !0;
  }, Array.prototype.some = function (t, e) {
    for (var n = 0, r = this.length; n < r; n++) {
      if (1 == !!t.call(e || null, this[n], n, this)) return !0;
    }return !1;
  }, Array.prototype.reduce = function (t) {
    for (var e = 0, n = this.length, r = this[0]; e < n; e++) {
      r = t.call(null, r, this[e], e, this);
    }return r;
  }, Array.prototype.reduceRight = function (t) {
    for (var e = this.length, n = this[e - 2], r = this[e - 1]; 0 <= n; n--) {
      r = t.call(null, r, this[n], n, this);
    }return r;
  }, Array.prototype.indexOf = function (t, e) {
    var n = this.length;for ((e = ~~e) < 0 && (e = 0); e < n; e++) {
      if (this[e] === t) return e;
    }return -1;
  }, Array.prototype.lastIndexOf = function (t, e) {
    for (void 0 === e ? e = this.length : e < 0 && (e = 0); 0 <= e; e--) {
      if (this[e] === t) return e;
    }return -1;
  }, Array.prototype.enhanceUnique = function () {
    for (var t, e = [], n = {}, r = 0, i = this.length; r < i; r++) {
      void 0 === n[t = this[r]] && (e.push(t), n[t] = !0);
    }return e;
  }, Array.prototype.without = function () {
    for (var t = (Array.prototype.slice.call(arguments) || [].slice.call(arguments)).unique(), e = this.length, n = t.length, r = 0, i = 0; r < e; r++) {
      for (; i < n; i++) {
        this[r] === t[i] && this.splice(r, 1);
      }i = 0;
    }return this;
  }, Array.prototype.enhanceWithout = function () {
    for (var t = [], e = this.length, n = [].slice.call(arguments), r = n.length, i = 0, o = 0; i < e; i++) {
      for (; o < r; o++) {
        n[o] !== this[i] && t.push(this[i]);
      }o = 0;
    }return t;
  }, Array.prototype.flatten = function () {
    for (var t, e = [], n = this.length, r = 0; r < n; r++) {
      t = this[r], "[object Array]" === {}.toString.call(t) || "[object Array]" === Object.prototype.toString.call(t) ? e = e.concat(t.flatten()) : e.push(t);
    }return e;
  }, Array.prototype.removeAt = function (t) {
    return this.splice(t, 1), this;
  }, Array.prototype.contains = function (r) {
    return this.some(function (t, e, n) {
      return t === r;
    });
  }, Array.prototype.random = function (t) {
    return this[Math.floor(Math.random() * t)] || this[this.length - 1];
  }, Function.prototype.before = function (t) {
    var e = this;return function () {
      return !1 !== t.apply(this, arguments) && e.apply(this, arguments);
    };
  }, Function.prototype.after = function (e) {
    var n = this;return function () {
      var t = n.apply(this, arguments);return !1 !== t && (e.apply(this, arguments), t);
    };
  };
}(), function (t) {
  function i(t, e) {
    return this.init.apply(this, [t, e]);
  }i.prototype.init = function (t, e) {
    if (void (this.length = 0) === t) return this;if ("string" == typeof t) {
      if (document.querySelectorAll) {
        var n = (e || document).querySelectorAll(t);this.length = n.length;for (var r = 0, i = this.length; r < i; r++) {
          this[r] = n[r];
        }
      } else {
        n = function (t) {
          var e,
              n = document.createElement("style"),
              r = [];for (document.documentElement.firstChild.appendChild(n), document._qsa = [], n.styleSheet.cssText = t + "{x-qsa:expression(document._qsa && document._qsa.push(this))}", window.scrollBy(0, 0), n.parentNode.removeChild(n); document._qsa.length;) {
            (e = document._qsa.shift()).style.removeAttribute("x-qsa"), r.push(e);
          }return document._qsa = null, r;
        }(t);this.length = n.length;for (r = 0, i = this.length; r < i; r++) {
          this[r] = n[r];
        }
      }
    } else t.nodeType && (this[0] = t, this.length++);return this;
  };function n(t, e) {
    if ("function" != typeof t) return new i(t, e);n.onDOMReady.bind(this, t)();
  }n.extend = function () {
    var t,
        e = arguments.length,
        n = null,
        r = 1;if (0 !== e) {
      for (1 === e ? (n = i.prototype, r--) : n = arguments[0]; r < e; r++) {
        for (t in arguments[r]) {
          n[t] = arguments[r][t];
        }
      }return n;
    }
  }, t.xframe = t.$ = n;
}(window), function (xframe) {
  var _xframe$extend;xframe.extend({ each: function each(t) {
      for (var e = this.length - 1; 0 <= e; e--) {
        t.call(this[e], e);
      }
    }, toArray: function toArray(t, e) {
      for (var n = [].slice.call(t), r = n.length - 1; 0 <= r; r--) {
        e.call(n[r], r);
      }
    } }), xframe.extend(xframe, (_xframe$extend = { camelCase: function camelCase(t) {
      return t.replace(/\-(\w)/g, function (t, e) {
        return e.toUpperCase();
      });
    }, ltrim: function ltrim(t) {
      return t.replace(/(^\s*)/g, "");
    }, rtrim: function rtrim(t) {
      return t.replace(/(\s*$)/g, "");
    }, trimOld: function trimOld(t) {
      return t.replace(/(\s*$)/g, "");
    }, formateString: function formateString(t, n) {
      return t.replace(/@\((\w+)\)/g, function (t, e) {
        return void 0 === n[e] ? "" : n[e];
      });
    }, trimLeft: function trimLeft(t) {
      return t.replace(/^\s*/g, "");
    }, trimRight: function trimRight(t) {
      return t.replace(/\s*$/g, "");
    }, trim: function trim(t) {
      return t.replace(/(^\s*)|(\s*$)/g, "");
    }, serialize: function serialize(t) {
      var e = {};if ((t = document.getElementById(t)) && t.elements) {
        for (var n = 0; n < t.elements.length; n++) {
          var r = t.elements[n];switch (r.type) {case void 0:case "button":case "file":case "reset":case "submit":
              break;case "checkbox":case "radio":
              if (!r.checked) break;default:
              e[r.name] ? e[r.name] = e[r.name] + "," + r.value : e[r.name] = r.value;}
        }return e;
      }
    }, ajax: function ajax(t, e) {
      var n = function () {
        {
          if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest();if ("undefined" == typeof ActiveXObject) throw new Error("No XHR object available.");if ("string" != typeof arguments.callee.activeXString) {
            var t,
                e,
                n = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"];for (t = 0, e = n.length; t < e; t++) {
              try {
                new ActiveXObject(n[t]), arguments.callee.activeXString = n[t];break;
              } catch (t) {}
            }
          }return new ActiveXObject(arguments.callee.activeXString);
        }
      }();n.onreadystatechange = function () {
        4 === n.readyState && (200 <= n.status && n.status < 300 || 304 == n.status ? e(n.responseText) : alert("错误的文件！"));
      }, n.open("get", t, !0), n.send();
    } }, _defineProperty(_xframe$extend, "ajax", function (e) {
    (e = e || {}).type = e.type.toUpperCase() || "POST", e.dataType = e.dataType ? e.dataType : "json", e.url = e.url || "", e.async = e.async || !0, e.data = e.data || null, e.success = e.success || function () {}, e.error = e.error || function () {};var n = null;n = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");var t = [];for (var r in e.data) {
      t.push(r + "=" + e.data[r]);
    }var i = t.join("&");if ("POST" === e.type) n.open(e.type, e.url, e.async), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), n.send(i);else if ("GET" === e.type) {
      var o = i ? e.url + "?" + i : e.url;n.open(e.type, o, e.async), n.send(null);
    } else e.error("req type error!");n.onreadystatechange = function () {
      if (4 === n.readyState && 200 === n.status) {
        if ("json" === e.dataType) {
          var t = JSON.parse(n.responseText);return e.success(t);
        }e.success(n.responseText);
      }
    };
  }), _defineProperty(_xframe$extend, "json2String", function (t) {
    return JSON.stringify(t);
  }), _defineProperty(_xframe$extend, "string2Json", function string2Json(str) {
    return eval(str);
  }), _xframe$extend)), xframe.extend(xframe, { clear: function clear() {
      return this.length = 0, this;
    }, first: function first() {
      return this[0];
    }, last: function last() {
      return this[this.length - 1];
    }, size: function size() {
      return this.length;
    }, cacl: function cacl(t, e) {
      for (var n, r = 0; r < t.length; r++) {
        n = e(t[r], n);
      }return n;
    }, sum: function sum() {
      for (var t, e = 0; e < this.length; e++) {
        t += this[e];
      }return t;
    } }), xframe.extend(xframe, { random: function random() {} }), xframe.extend(xframe, { isNumber: function isNumber(t) {
      return "number" == typeof t && isFinite(t) && "[object Number]" === Object.prototype.toString.call(t);
    }, isBoolean: function isBoolean(t) {
      return "boolean" == typeof t && "[object Boolean]" === Object.prototype.toString.call(t);
    }, isString: function isString(t) {
      return "string" == typeof t && "[object String]" === Object.prototype.toString.call(t);
    }, isUndefined: function isUndefined(t) {
      return void 0 === t || void 0 === t && "[object Undefined]" === Object.prototype.toString.call(t);
    }, isNull: function isNull(t) {
      return null === t && "[object Null]" === Object.prototype.toString.call(t);
    }, isNaN: function isNaN(t) {
      return t != t;
    }, isObject: function isObject(t) {
      return !(null == t || "object" !== (void 0 === t ? "undefined" : _typeof(t)) || !Object.prototype.toString.call(t));
    }, isArray: function isArray(t) {
      return (null !== t || void 0 !== t) && t.constructor === Array && "[object Array]" === Object.prototype.toString.call(t);
    } }), xframe.extend(xframe, { haha: {} }), xframe.extend(xframe, { toArray: function toArray(t, e) {
      for (var n = [], r = (t = t || 0, e = e || this.length, t); r < e; r++) {
        n.push(this[r]);
      }return n;
    }, slice: function slice(t) {
      return Array.prototype.slice.apply(t);
    } }), xframe.extend(xframe, { onDOMReady: function onDOMReady(t) {
      var e, n, r, i;document.addEventListener ? document.addEventListener("DOMContentLoaded", t, !1) : (e = t, n = !1, r = window.document, i = void (n || (console.log("done……"), n = !0, e())), function () {
        try {
          r.documentElement.doScroll("left");
        } catch (t) {
          return setTimeout(arguments.callee, 1);
        }i();
      }(), r.onreadystatechange = function () {
        console.log("onreadystatechange……"), "complete" === r.readyState && (console.log("complete……"), r.onreadystatechange = null, i());
      });
    } });
}(xframe), function (t) {
  t.extend({ on: function on(t, e) {
      var n = this.length - 1;if (document.addEventListener) for (; 0 <= n; n--) {
        this[n].addEventListener(t, e, !1);
      } else if (document.attachEvent) for (; 0 <= n; n--) {
        this[n].attachEvent("on" + t, e);
      } else for (; 0 <= n; n--) {
        this[n]["on" + t] = e;
      }return this;
    }, un: function un(t, e) {
      var n = this.length - 1;if (document.removeEventListener) for (; 0 <= n; n--) {
        this[n].removeEventListener(t, e, !1);
      } else if (document.detachEvent) for (; 0 <= n; n--) {
        this[n].detachEvent(t, e);
      } else for (; 0 <= n; n--) {
        this[n]["on" + t] = null;
      }return this;
    }, click: function click(t) {
      return this.on("click", t), this;
    }, hover: function hover(t, e) {
      for (var n = this.length; 0 <= n; n--) {
        t && "function" == typeof t && this.on("mouseover", t), e && "function" == typeof e && this.on("mouseout", e);
      }return this;
    }, toggle: function toggle() {
      for (var n = this, r = arguments, t = 0, e = this.length; t < e; t++) {
        i(this[t]);
      }function i(t) {
        var e = 0;n.on("click", function () {
          r[e++ % r.length].call(t);
        });
      }return this;
    } }), t.extend(t, { getEvent: function getEvent(t) {
      return t || window.event;
    }, getTarget: function getTarget(t) {
      return (t = this.getEvent(t)).target || t.srcElement;
    }, stopPropagation: function stopPropagation(t) {
      (t = this.getEvent(t)).stopPropagation ? t.stopPropagation() : t.cancelBubble = !0;
    }, preventDefault: function preventDefault(t) {
      (t = this.getEvent(t)).preventDefault ? t.preventDefault() : t.returnValue = !1;
    }, getDelta: function getDelta(t) {
      return (t = this.getEvent(t)).wheelDelta ? t.wheelDelta : 40 * -t.detail;
    } });
}(xframe), function (t) {
  t.extend({ css: function css() {
      var t = arguments,
          e = t.length,
          n = this.length - 1;if (0 === e) return this;if (1 === e) {
        if ("string" == typeof t[0]) return this[0].currentStyle ? this[0].currentStyle[t[0]] : getComputedStyle(this[0], !1)[t[0]];if ("object" === _typeof(t[0])) for (var r in t[0]) {
          for (; 0 <= n; n--) {
            r = $.camelCase(r), this[n].style[r] = t[0][r];
          }
        }
      } else if (2 === e) for (; 0 <= n; n--) {
        this[n].style[$.camelCase(t[0])] = t[1];
      }return this;
    }, hide: function hide() {
      for (var t = this.length - 1; 0 <= t; t--) {
        this[t].style.display = "none";
      }return this;
    }, show: function show() {
      return this.each(function () {
        this.style.display = "block";
      }), this;
    }, width: function width() {
      return this[0].clientWidth;
    }, height: function height() {
      return this[0].clientHeight;
    }, scrollWidth: function scrollWidth() {
      return this[0].scrollWidth;
    }, scrollHeight: function scrollHeight() {
      return this[0].scrollHeight;
    }, scrollTop: function scrollTop() {
      return this[0].scrollTop;
    }, scrollLeft: function scrollLeft() {
      return this[0].scrollLeft;
    } }), t.extend(t, { getThis: function getThis() {
      console.log(t, _typeof(this));
    }, screenHeight: function screenHeight() {
      return window.screen.height;
    }, screenWidth: function screenWidth() {
      return window.screen.width;
    }, wWidth: function wWidth() {
      return document.documentElement.clientWidth;
    }, wHeight: function wHeight() {
      return document.documentElement.clientHeight;
    }, wScrollHeight: function wScrollHeight() {
      return document.body.scrollHeight;
    }, wScrollWidth: function wScrollWidth() {
      return document.body.scrollWidth;
    }, wScrollTop: function wScrollTop() {
      return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    }, wScrollLeft: function wScrollLeft() {
      return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
    } });
}(xframe), function (t) {
  t.extend({}), t.extend(t, { $id: function $id(t) {
      return t = this.isString(t) ? document.getElementById(t) : t;
    }, $tag: function $tag(t, e) {
      return "string" == typeof e && (e = this.$id(e)), e ? e.length ? [].slice.call(e)[0].getElementsByTagName(t) : e.getElementsByTagName(t) : document.getElementsByTagName(t);
    }, $class: function $class(t, e) {
      if ((e = this.$id(e) || document).getElementsByClassName) return e.getElementsByClassName(t);var n = e.getElementsByTagName("*"),
          r = [];return n.each(function () {
        this.className === t && r.push(this);
      }), r;
    }, $cengci: function $cengci() {
      var t,
          e,
          n,
          r,
          i = this,
          o = Array.prototype.slice.call(arguments)[0].toString().split(" "),
          a = [],
          s = [];function u(t) {
        t && [].slice.call(t).each(function () {
          a.push(this);
        });
      }return o.each(function () {
        switch (a = [], n = this.trim(), e = n.charAt(0), t = n.indexOf(e), r = n.slice(t + 1), e) {case ".":
            s.length ? s.each(function () {
              u(i.$class(r, this));
            }) : u(i.$class(r)), s = a;break;case "#":
            a.push(i.$id(r)), s = a;break;default:
            s.length ? s.each(function () {
              u(i.$tag(n, this));
            }) : u(i.$tag(n)), s = a;}
      }), s;
    }, $group: function $group() {
      var t,
          e,
          n,
          r,
          i = this,
          o = [].slice.call(arguments)[0].split(",").unique();return res = [], o.each(function () {
        switch (t = this.trim(), n = t.charAt(0), e = t.indexOf(n), r = t.slice(e + 1), n) {case ".":
            res.push(i.$class(r));break;case "#":
            res.push(i.$id(r));break;default:
            res.push(i.$tag(t));}
      }), res;
    }, $select: function $select() {
      var t = [].slice.call(arguments)[0].toString().split(","),
          e = [],
          n = this;return t.each(function () {
        !function (t) {
          t.length && t.each(function () {
            e.push(this);
          });
        }(n.$cengci(this));
      }), e;
    } });
}(xframe), function (t) {
  t.extend({ attr: function attr() {
      var t = arguments;if (0 === t.length) return this;if (1 === t.length) {
        if ("string" == typeof t[0]) return this[0].getAttribute(t[0]);if ("object" === _typeof(t[0])) for (var e in t[0]) {
          Array.prototype.slice.call(this).each(function () {
            this.setAttribute(e, t[0][e]);
          });
        }
      } else 2 === t.length && Array.prototype.slice.call(this).each(function () {
        this.setAttribute(t[0], t[1]);
      });return this;
    }, hasClass: function hasClass(t) {
      if (!this[0]) return !1;var e = this[0].className.trim().split(" ");if (1 < e.length) {
        for (var n = 0, r = e.length; n < r; n++) {
          if (e[n].trim() === t) return !0;
        }return !1;
      }return this[0].className.trim() === t.trim();
    }, addClass: function addClass(r) {
      return r = r.trim(), [].slice.call(this).each(function () {
        this.className = this.className.trim();var t = this.className.split(" ");if (2 <= t.length) for (var e = 0, n = t.length; e < n; e++) {
          if (r.trim() === t[e]) return;
        }r !== this.className && (this.className += " " + r);
      }), this;
    }, removeClass: function removeClass(r) {
      return r = r.trim(), [].slice.call(this).each(function () {
        var t = this.className.trim().split(" ");if (2 <= t.length) for (var e = 0, n = t.length; e < n; e++) {
          if (t[e].trim() === r.trim()) return void (this.className = this.className.replace(r.trim(), ""));
        }r === this.className.trim() && (this.className = this.className.replace(r, ""));
      }), this;
    }, toggleClass: function toggleClass(t) {
      return t = t.trim(), [].slice.call(this).each(function () {
        this.className = this.className.trim(), t === this.className ? this.className = this.className.replace(t, "") : this.className += " " + t;
      }), this;
    } }), t.extend(t, {});
}(xframe), function (t) {
  t.extend({ html: function html() {
      var t = arguments,
          e = t.length,
          n = Array.prototype.slice.call(this);return this.length < 1 ? this : 0 === e ? this[0].innerHTML : (1 === e && n.each(function () {
        this.innerHTML = t[0];
      }), this);
    }, text: function text(t) {
      var e = arguments,
          n = e.length;return 0 === this.length ? t ? t.srcElement.innerText : this : 0 === n ? this[0].innerText : (1 === n && this.each(function () {
        this.innerText = e[0];
      }), this);
    }, val: function val() {
      var t = arguments,
          e = t.length;return 0 === this.length ? this : 0 === e ? this[0].value : (1 === e && this.each(function () {
        this.value = t[0];
      }), this);
    } }), t.extend(t, {});
}(xframe), function (o) {
  o.extend({ add: function add(t) {
      return this[this.length] = t, this.length++, this;
    }, append: function append(t) {
      var e = "string" == typeof t ? $(t) : $(t[0]),
          n = Array.prototype.slice.call(e);n.length !== this.length && (n = [], Array.prototype.slice.call(this).each(function () {
        n.push(e[0]);
      })), Array.prototype.slice.call(this).forEach(function (t, e) {
        t.appendChild(n[e]);
      });
    }, appendTo: function appendTo(t) {
      var n = $(t),
          r = this;return Array.prototype.slice.call(this).forEach(function (t, e) {
        n[e].appendChild(r[e]);
      }), this;
    }, get: function get(t) {
      return this[t] ? this[t] : null;
    }, eq: function eq(t) {
      var e = this.get(t);return $(e);
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(this.length - 1);
    }, children: function children() {
      var t = this[0].children,
          e = t.length,
          n = {},
          r = 0;for (n.length = e; r < e; r++) {
        n[r] = t[r];
      }return n;
    }, find: function find(t) {
      var e = [],
          n = this;function r(t) {
        t.length && n.toArray(t, function () {
          e.push(this);
        });
      }this.each(function () {
        switch (t.charAt(0)) {case ".":
            r($.$class(t.substring(1), n[i]));break;default:
            r($.$tag(t, n[i]));}
      });var o = this;return o.length = this.length, this.each(function (t) {
        o[t] = e[t];
      }), o;
    }, parent: function parent() {
      var t = this[0].parentNode;return this[0] = t, this.length = 1, this;
    }, index: function index() {
      for (var t = this[0], e = t.parentNode.children, n = -1, r = 0; r < e.length; r++) {
        e[r] === t && (n = r);
      }return n;
    } }), o.extend(o, { create: function create(t, e, n) {
      var r = document.createElement(t);return o().add(r).attr(e).html(n);
    }, directChildren: function directChildren(t, e) {
      var n = [];e = e;function r(t) {
        Array.prototype.slice.call(t).each(function () {
          this.tagName.toLowerCase() === e.toLowerCase() && n.push(this);
        });
      }return "string" == typeof t && (t = $(t)), t.length ? Array.prototype.slice.call(t).each(function () {
        r(this.children);
      }) : r(t.children), $(n);
    } });
}(xframe), function (t) {
  var o;t.extend({}), t.extend(t, {}), t.Animate = (o = { timer: null, queen: [], run: function run() {
      o.timer = setInterval(function () {
        o.loop();
      }, 16);
    }, loop: function loop() {
      o.queen.forEach(function (t) {
        o.move(t);
      });
    }, move: function move(t) {
      t.pass = +new Date();var e = o.getTween(t.now, t.pass, t.duration, t.type);1 <= (t.tween = e) ? o.stop() : o.setManyProperty(t);
    }, add: function add() {
      var t = arguments,
          e = t[0],
          n = t[1],
          r = t[2],
          i = t[3];try {
        o.adapterMany(e, n, r, i), o.run();
      } catch (t) {
        console.error(t.message);
      }
    }, adapterOne: function adapterOne(t, e, n, r) {
      var i = {};if (i.id = t, i.now = +new Date(), i.pass = 0, i.tween = 0, i.duration = n, i.styles = [], i.type = r || "easeOutBounce", $.isString(n)) switch (n) {case "slow":case "慢":
          n = 8e3;break;case "normal":case "普通":
          n = 4e3;break;case "fast":case "快":
          n = 1e3;}return i.styles = o.getStyles(t, e), i;
    }, adapterMany: function adapterMany(t, e, n, r) {
      var i = this.adapterOne(t, e, n, r);o.queen.push(i);
    }, getStyles: function getStyles(t, e) {
      var n = [];for (var r in e) {
        var i = {};i.name = r, i.start = parseFloat($(t).css(r).toString()), i.length = parseFloat(e[r]) - i.start, n.push(i);
      }return n;
    }, getTween: function getTween(t, e, n, r) {
      return { linear: function linear(t, e, n, r) {
          return t / r * (n - e);
        }, easeOutBounce: function easeOutBounce(t, e, n, r) {
          return (t /= r) < 1 / 2.75 ? n * (7.5625 * t * t) + e : t < 2 / 2.75 ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e;
        }, swing: function swing(t, e, n, r) {
          return this.easeOutQuad(t, e, n, r);
        }, easeInQuad: function easeInQuad(t, e, n, r) {
          return n * (t /= r) * t + e;
        }, easeOutQuad: function easeOutQuad(t, e, n, r) {
          return -n * (t /= r) * (t - 2) + e;
        }, easeInOutQuad: function easeInOutQuad(t, e, n, r) {
          return (t /= r / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e;
        }, easeInCubic: function easeInCubic(t, e, n, r) {
          return n * (t /= r) * t * t + e;
        }, easeOutCubic: function easeOutCubic(t, e, n, r) {
          return n * ((t = t / r - 1) * t * t + 1) + e;
        }, easeInOutCubic: function easeInOutCubic(t, e, n, r) {
          return (t /= r / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e;
        }, easeInQuart: function easeInQuart(t, e, n, r) {
          return n * (t /= r) * t * t * t + e;
        }, easeOutQuart: function easeOutQuart(t, e, n, r) {
          return -n * ((t = t / r - 1) * t * t * t - 1) + e;
        }, easeInOutQuart: function easeInOutQuart(t, e, n, r) {
          return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e;
        }, easeInQuint: function easeInQuint(t, e, n, r) {
          return n * (t /= r) * t * t * t * t + e;
        }, easeOutQuint: function easeOutQuint(t, e, n, r) {
          return n * ((t = t / r - 1) * t * t * t * t + 1) + e;
        }, easeInOutQuint: function easeInOutQuint(t, e, n, r) {
          return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e;
        }, easeInSine: function easeInSine(t, e, n, r) {
          return -n * Math.cos(t / r * (Math.PI / 2)) + n + e;
        }, easeOutSine: function easeOutSine(t, e, n, r) {
          return n * Math.sin(t / r * (Math.PI / 2)) + e;
        }, easeInOutSine: function easeInOutSine(t, e, n, r) {
          return -n / 2 * (Math.cos(Math.PI * t / r) - 1) + e;
        }, easeInExpo: function easeInExpo(t, e, n, r) {
          return 0 == t ? e : n * Math.pow(2, 10 * (t / r - 1)) + e;
        }, easeOutExpo: function easeOutExpo(t, e, n, r) {
          return t == r ? e + n : n * (1 - Math.pow(2, -10 * t / r)) + e;
        }, easeInOutExpo: function easeInOutExpo(t, e, n, r) {
          return 0 == t ? e : t == r ? e + n : (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (2 - Math.pow(2, -10 * --t)) + e;
        }, easeInCirc: function easeInCirc(t, e, n, r) {
          return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + e;
        }, easeOutCirc: function easeOutCirc(t, e, n, r) {
          return n * Math.sqrt(1 - (t = t / r - 1) * t) + e;
        }, easeInOutCirc: function easeInOutCirc(t, e, n, r) {
          return (t /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
        }, easeInElastic: function easeInElastic(t, e, n, r) {
          var i = 1.70158,
              o = 0,
              a = n;if (0 == t) return e;if (1 == (t /= r)) return e + n;if (o || (o = .3 * r), a < Math.abs(n)) {
            a = n;i = o / 4;
          } else i = o / (2 * Math.PI) * Math.asin(n / a);return -a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - i) * (2 * Math.PI) / o) + e;
        }, easeOutElastic: function easeOutElastic(t, e, n, r) {
          var i = 1.70158,
              o = 0,
              a = n;if (0 == t) return e;if (1 == (t /= r)) return e + n;if (o || (o = .3 * r), a < Math.abs(n)) {
            a = n;i = o / 4;
          } else i = o / (2 * Math.PI) * Math.asin(n / a);return a * Math.pow(2, -10 * t) * Math.sin((t * r - i) * (2 * Math.PI) / o) + n + e;
        }, easeInOutElastic: function easeInOutElastic(t, e, n, r) {
          var i = 1.70158,
              o = 0,
              a = n;if (0 == t) return e;if (2 == (t /= r / 2)) return e + n;if (o || (o = r * (.3 * 1.5)), a < Math.abs(n)) {
            a = n;i = o / 4;
          } else i = o / (2 * Math.PI) * Math.asin(n / a);return t < 1 ? a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - i) * (2 * Math.PI) / o) * -.5 + e : a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - i) * (2 * Math.PI) / o) * .5 + n + e;
        }, easeInBack: function easeInBack(t, e, n, r, i) {
          return null == i && (i = 1.70158), n * (t /= r) * t * ((i + 1) * t - i) + e;
        }, easeOutBack: function easeOutBack(t, e, n, r, i) {
          return null == i && (i = 1.70158), n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e;
        }, easeInOutBack: function easeInOutBack(t, e, n, r, i) {
          return null == i && (i = 1.70158), (t /= r / 2) < 1 ? n / 2 * (t * t * ((1 + (i *= 1.525)) * t - i)) + e : n / 2 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + e;
        }, easeInBounce: function easeInBounce(t, e, n, r) {
          return n - this.easeOutBounce(r - t, 0, n, r) + e;
        }, easeInOutBounce: function easeInOutBounce(t, e, n, r) {
          return t < r / 2 ? .5 * this.easeInBounce(2 * t, 0, n, r) + e : .5 * this.easeOutBounce(2 * t - r, 0, n, r) + .5 * n + e;
        } }[r](e - t, 0, 1, n);
    }, setOneProperty: function setOneProperty(t) {
      "opacity" === t.name ? $(t.id).css(t.name, t.start + t.length * t.tween) : $(t.id).css(t.name, t.start + t.length * t.tween + "px");
    }, setManyProperty: function setManyProperty(e) {
      e.styles.forEach(function (t) {
        e.name = t.name, e.start = t.start, e.length = t.length, o.setOneProperty(e);
      });
    }, stop: function stop() {
      clearInterval(o.timer);
    }, destory: function destory() {} }, void (t.animate = o.add));
}(xframe), function (t) {
  t.cache = { data: [], get: function get(t) {
      var e = null;return this.data.each(function () {
        t.trim() === this.key.trim() && (e = this.value);
      }), e;
    }, add: function add(t, e) {
      this.data.push({ key: t.trim(), value: e.trim() });
    }, deleteData: function deleteData(n) {
      var r = !1,
          i = this;return this.data.forEach(function (t, e) {
        n.trim() === t.key.trim() && (i.data.splice(e, 1), r = !0);
      }), r;
    }, update: function update(e, n) {
      var r = !1;return this.data.forEach(function (t) {
        e.trim() === t.key && (t.value = n.trim(), r = !0);
      }), r;
    }, isExist: function isExist(t) {
      return this.data.forEach(function () {
        if (t.trim() === this.key) return !0;
      }), !1;
    } }, t.cookie = { getCookie: function getCookie(t) {
      t = t.escapeHTML();var e = document.cookie;t += "=";var n = e.indexOf(t);if (-1 === n) return "";var r = n + t.length,
          i = e.indexOf(";", r);return -1 === i && (i = e.length), e.substring(r, i).unescapeHTML();
    }, setCookie: function setCookie(t, e, n, r) {
      t = t.escapeHTML(), e = e.escapeHTML();var i,
          o = new Date();o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3), r = "" === r ? "" : ";path=" + r, i = t + "=" + e + ("string" == typeof o ? "" : ";expires=" + o.toUTCString()) + r, document.cookie = i;
    }, deleteCookie: function deleteCookie(t, e) {
      t = t.escapeHTML();var n = new Date();e = "" === e ? "" : ";path=" + e, document.cookie = t + "=;expires=" + n.toUTCString() + e;
    }, clearAllCookies: function clearAllCookies() {
      var t = document.cookie.split(";");t.length && t.forEach(function (t) {
        var e = t.indexOf("="),
            n = t.substring(0, e);document.cookie = n + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      });
    } }, t.store = function (t) {
    var n,
        e = {},
        r = "localStorage",
        i = "globalStorage",
        o = window,
        a = window.document;if (e.set = function (t, e) {}, e.get = function (t) {}, e.remove = function (t) {}, e.clear = function () {}, r in o && o[r]) n = o[r], e.set = function (t, e) {
      n.setItem(t, e);
    }, e.get = function (t) {
      return n.getItem(t);
    }, e.remove = function (t) {
      n.removeItem(t);
    }, e.clear = function () {
      n.clear();
    };else if (i in o && o[i]) n = o[i][o.location.hostname], e.set = function (t, e) {
      n[t] = e;
    }, e.get = function (t) {
      return n[t] && n[t].value;
    }, e.remove = function (t) {
      delete n[t];
    }, e.clear = function () {
      for (var t in n) {
        delete n[t];
      }
    };else if (a.documentElement.addBehavior) {
      var s = function s() {
        return n || ((n = a.body.appendChild(a.createElement("div"))).style.display = "none", n.addBehavior("#default#userData"), n.load(r), n);
      };return e.set = function (t, e) {
        var n = s();n.setAttribute(t, e), n.save(r);
      }, e.get = function (t) {
        return s().getAttribute(t);
      }, e.remove = function (t) {
        var e = s();e.removeAttribute(t), e.save(r);
      }, e.clear = function () {
        var e = s(),
            t = e.XmlDocument.documentElement.attributes;e.load(r), [].slice.call(t).forEach(function (t) {
          e.removeAttribute(t.name);
        }), e.save(r);
      }, e;
    }t.storage = e;
  }(t);
}(xframe);