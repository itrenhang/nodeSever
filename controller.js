const fs = require('fs');
let js_files = [];  // 控制器所有路由、接口文件集合
function addMapping(router,mapping){
    for(let url in mapping){
        if(url.startsWith('GET ')){
            router.get(url.substring(4),mapping[url]);
        }else if(url.startsWith('PSOT ')){
            router.post(url.substring(5),mapping[url]);
        }
    }
}

function getRouteFiles(files,path){
    let filePath = path + '/';   // 控制器文件 绝对路径
    for(let f of files){
        // 判断是否是文件夹 
        if(fs.lstatSync(filePath + f).isDirectory()){
            getRouteFiles(fs.readdirSync(filePath + f),filePath + f);
        }else{
            if(f.endsWith('.js')){
                js_files.push(filePath+f);
            }
        }
    }
}

async function addControllers(router,dir){
    let path = __dirname+'/'+dir;    // 控制器文件路径
    let files = fs.readdirSync(path);  // 控制器文件夹下所有文件、文件夹集合
    await getRouteFiles(files,path);
    for(let f of js_files){
        let mapping = require(f);
        addMapping(router,mapping);
    }
}

module.exports = function(dir){
    let controlles_dir = dir || 'controllers',
        router = require('koa-router')();
    addControllers(router,controlles_dir);
    return router.routes();
}