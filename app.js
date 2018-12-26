const Koa = require('koa');
const controller = require('./controller');
// 创建一个Koa对象表示web app本身:
const app = new Koa();
const bodyParser = require('koa-bodyparser');

// 环境变量
const isProduction = process.env.NODE_ENV === 'development';
// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
    // ctx.set('Access-Control-Allow-Origin', '*');   // 允许跨域
    var start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});
// 注册reset  API 处理
app.use(require('./middleware/rest').restify('/api'));
// 静态资源文件处理
let staticFiles = require('./static-files');
app.use(staticFiles('/static/',__dirname + '/static'));
// 注册解析post请求参数插件
app.use(bodyParser());
// 注册控制器
app.use(controller());

// 404错误处理
let error404 = require('./middleware/404');
app.use(error404(__dirname+'/static/html/404/404.html'));
// 在端口3000监听:
app.listen(3030);
console.log('app started at port 3030...');