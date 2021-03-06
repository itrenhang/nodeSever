const fs = require('fs');
let db = require('./db');
let files = fs.readdirSync(__dirname+'/models');

let js_files = files.filter((f)=>{
    return f.endsWith('.js')
});

for(let f of js_files){
    let name = f.substring(0,f.length-3);
    module.exports[name] = require(__dirname + '/models/' + f);
}

