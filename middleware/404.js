const fs = require('mz/fs');
const mime = require('mime');
function error404Fn(filePath){
    return async (ctx, next) => {
        let rpath = ctx.request.path;
        if (ctx.status == 404) {
            if (rpath.startsWith('/api')) {
                ctx.response.status = 404;
            } else {
                ctx.response.type = mime.getType(filePath);
                ctx.response.body = await fs.readFile(filePath);
            }
        } else {
            await next();
        }
    }
}
module.exports = error404Fn;