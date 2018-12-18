
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
module.exports = {
    'GET /':fn_index,
    'GET /fangan':fn_fangan,
    'GET /anli':fn_anli,
    'GET /news':fn_news,
    'GET /about':fn_about,
    'GET /view/:id':fn_view,
}