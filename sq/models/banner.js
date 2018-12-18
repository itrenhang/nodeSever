let db = require('../db');
let sq = db.defineModel('nobook_banner',{
    banner_id:{
        type:db.sq.INTEGER,
        primaryKey: true
    },
    banner_title:db.sq.STRING,
    banner_url:db.sq.STRING,
    banner_img_url:db.sq.STRING,
    banner_online:db.sq.INTEGER,
    banner_addtime:db.sq.INTEGER,
    banner_sortid:db.sq.INTEGER,
    banner_target:db.sq.STRING
});
module.exports = sq;