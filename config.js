"use strict";

const path = require('path');

module.exports = {
    isDebug : false,                                                         // 是否为调试模式
    secretKey : 'video-2018',                                               // 验证码session
    pageSize : 5,                                                           // 每页显示内容数量
    uploadDir : path.join(__dirname, 'www', 'uploads'),                     // 文件上传的主目录
    avatarDir : path.join(__dirname, 'www', 'uploads', 'avatar'),           // 用户的图像目录
    movieDir : path.join(__dirname, 'www', 'uploads', 'movie'),
    movieurl : 'https://vip.iqiyi.com/hot.html?cid=1',                       // 电影地址，
    parseUrl : 'https://z1.m1907.cn/?jx=',
    movielist : [] ,                                                         // 存储了用户获取的电影列表信息
    userlist : 0,
    host : 'localhost',
    port: 8080,
    database : 'video',
    user : 'root',
    password : '123456'
}