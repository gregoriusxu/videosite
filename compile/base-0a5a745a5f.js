"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

$("#lastlogo dd").on("mouseover", function (t) {
  switch ($($.getTarget(t)).text()) {case "微信":
      $("#imgshow").css("right", "126px").show();break;case "QQ群":
      $("#imgshow").css("right", "63px").show();break;case "新浪":
      $("#imgshow").css("right", "0px").show();break;case "邮箱":
      $("#imgshow").css("right", "-63px").show();}
}).on("mouseout", function () {
  $("#imgshow").hide();
}), function () {
  function t(t) {
    this.progress = t, this.prg = 0, this.width = document.documentElement.clientWidth, this.timer = 0;
  }t.prototype = { start: function start() {
      var t = this;t.onchange(), t.timer = setInterval(function () {
        t.prg >= t.random([40, 80]) ? clearInterval(t.timer) : t.prg += t.random(3), t.progress.style.width = t.prg / 100 * t.width + "px";
      }, 15);
    }, onchange: function onchange() {
      var t = this;document.onreadystatechange = function () {
        "complete" === document.readyState && (clearInterval(t.timer), setInterval(function () {
          100 <= t.prg ? (clearInterval(t.timer), t.prg = 100, t.progress.style.display = "none") : t.prg += t.random(1), t.progress.style.width = t.prg / 100 * t.width + "px";
        }, 5));
      };
    }, random: function random(t) {
      if ("object" != (typeof t === "undefined" ? "undefined" : _typeof(t))) return Math.random() * t;var e = t[1] - t[0];return Math.random() * e * 10 + t[0];
    } }, new t(document.getElementById("progress")).start();
}();