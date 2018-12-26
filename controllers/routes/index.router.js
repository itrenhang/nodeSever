
const fs = require('mz/fs');
const mime = require('mime');
const path = require('path');
// 首页
let fn_index = async (ctx, next) => {
    let filePath = path.resolve(__dirname,'../../static/html/index.html');
    ctx.response.type = mime.getType(filePath);
    ctx.response.body = await fs.readFile(filePath);
};
// 解决方案
let fn_fangan = async (ctx, next) => {
    let filePath = path.resolve(__dirname,'../../static/html/fangan.html');
    ctx.response.type = mime.getType(filePath);
    ctx.response.body = await fs.readFile(filePath);
};
// 案例
let fn_anli = async (ctx, next) => {
    let filePath = path.resolve(__dirname,'../../static/html/anli.html');
    ctx.response.type = mime.getType(filePath);
    ctx.response.body = await fs.readFile(filePath);
};
// 媒体报道
let fn_news = async (ctx, next) => {
    let filePath = path.resolve(__dirname,'../../static/html/news.html');
    ctx.response.type = mime.getType(filePath);
    ctx.response.body = await fs.readFile(filePath);
};
// 媒体报道
let fn_about = async (ctx, next) => {
    let filePath = path.resolve(__dirname,'../../static/html/about.html');
    ctx.response.type = mime.getType(filePath);
    ctx.response.body = await fs.readFile(filePath);
};
// 媒体报道详情
let fn_view = async (ctx, next) => {
    let filePath = path.resolve(__dirname,'../../static/html/view.html');
    ctx.response.type = mime.getType(filePath);
    ctx.response.body = await fs.readFile(filePath);
};
// 物理实验
let fn_wuli = async (ctx, next) => {
    let filePath = path.resolve(__dirname,'../../static/html/wuli.html');
    ctx.response.type = mime.getType(filePath);
    ctx.response.body = await fs.readFile(filePath);
};
// 物理教辅
let fn_wulijiaofu = async (ctx, next) => {
    let filePath = path.resolve(__dirname,'../../static/html/wulijiaofu.html');
    ctx.response.type = mime.getType(filePath);
    ctx.response.body = await fs.readFile(filePath);
};
// NB物理实验学生端
let fn_wulistudent = async (ctx, next) => {
    let filePath = path.resolve(__dirname,'../../static/html/wulistudent.html');
    ctx.response.type = mime.getType(filePath);
    ctx.response.body = await fs.readFile(filePath);
};
// NB物理教学平台
let fn_physics = async (ctx, next) => {
    let filePath = path.resolve(__dirname,'../../static/html/physics.html');
    ctx.response.type = mime.getType(filePath);
    ctx.response.body = await fs.readFile(filePath);
};
// NB化学实验
let fn_huaxue = async (ctx, next) => {
    let filePath = path.resolve(__dirname,'../../static/html/huaxue.html');
    ctx.response.type = mime.getType(filePath);
    ctx.response.body = await fs.readFile(filePath);
};
// NB化学实验学生端
let fn_huaxuestudent = async (ctx, next) => {
    let filePath = path.resolve(__dirname,'../../static/html/huaxuestudent.html');
    ctx.response.type = mime.getType(filePath);
    ctx.response.body = await fs.readFile(filePath);
};
// NB生物实验
let fn_shengwu = async (ctx, next) => {
    let filePath = path.resolve(__dirname,'../../static/html/shengwu.html');
    ctx.response.type = mime.getType(filePath);
    ctx.response.body = await fs.readFile(filePath);
};
// NB小科实验
let fn_xiaoke = async (ctx, next) => {
    let filePath = path.resolve(__dirname,'../../static/html/xiaoke.html');
    ctx.response.type = mime.getType(filePath);
    ctx.response.body = await fs.readFile(filePath);
};
// NB小科教学
let fn_xiaoke_edu = async (ctx, next) => {
    let filePath = path.resolve(__dirname,'../../static/html/xiaoke_edu.html');
    ctx.response.type = mime.getType(filePath);
    ctx.response.body = await fs.readFile(filePath);
};
// 购买
let fn_buy = async (ctx, next) => {
    let filePath = path.resolve(__dirname,'../../static/html/buy.html');
    ctx.response.type = mime.getType(filePath);
    ctx.response.body = await fs.readFile(filePath);
};
// 登录注册
let fn_login = async (ctx, next) => {
    let filePath = path.resolve(__dirname,'../../static/html/login.html');
    ctx.response.type = mime.getType(filePath);
    ctx.response.body = await fs.readFile(filePath);
};
module.exports = {
    'GET /':fn_index,
    'GET /fangan':fn_fangan,
    'GET /anli':fn_anli,
    'GET /news':fn_news,
    'GET /about':fn_about,
    'GET /wuli.html':fn_wuli,
    'GET /wulijiaofu.html':fn_wulijiaofu,
    'GET /wulistudent.html':fn_wulistudent,
    'GET /physics.html':fn_physics,
    'GET /huaxue.html':fn_huaxue,
    'GET /huaxuestudent.html':fn_huaxuestudent,
    'GET /shengwu.html':fn_shengwu,
    'GET /xiaoke.html':fn_xiaoke,
    'GET /xiaoke_edu.html':fn_xiaoke_edu,
    'GET /buy':fn_buy,
    'GET /login':fn_login
}