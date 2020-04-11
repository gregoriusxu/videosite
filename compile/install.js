"use strict";
window.onload = function () {
  $("#btn-submit").on("click", function (t) {
    t.preventDefault();var e = $("#dbname").val(),
        n = $("#dbip").val(),
        s = $("#username").val(),
        a = $("#pwd").val();return "string" != typeof e || 0 === e.length ? ($("#dbname").get(0).focus(), $("#btn-submit").text("立即安装"), alert("数据库名不能为空")) : "string" != typeof n || 0 === n.length ? ($("#dbip").get(0).focus(), $("#btn-submit").text("立即安装"), alert("数据库IP地址不能为空")) : "string" != typeof s || 0 === s.length ? ($("#username").get(0).focus(), $("#btn-submit").text("立即安装"), alert("数据库用户名不能为空")) : "string" != typeof a || 0 === a.length ? ($("#pwd").get(0).focus(), $("#btn-submit").text("立即安装"), alert("数据库用户密码不能为空")) : ($("#btn-submit").text("正在安装……"), void $.ajax({ url: "/install", type: "POST", data: { dbname: e, dbip: n, username: s, password: a }, dataType: "json", success: function success(t) {
        if (-1 === t.status) {
          if (t.msg.code) return $("#btn-submit").text("立即安装"), alert("出错了：连接数据库服务器失败，请检查MySQL数据库服务是否已经启动，或数据库主机配置是否正确！");if (0 < t.msg.indexOf("database")) return $("#btn-submit").text("立即安装"), alert("数据库名不存在（未知的数据库名）！");$("#btn-submit").text("立即安装"), alert("出错了:" + t.msg + "\n(数据库用户名或密码不正确)！");
        } else if (1 === t.status) var e = 4,
            n = setInterval(function () {
          e--, $("#btn-submit").text("安装成功，正准备跳转首页……" + e + "s"), 0 === e && (clearInterval(n), window.location.href = "/");
        }, 1e3);
      } }));
  });
};