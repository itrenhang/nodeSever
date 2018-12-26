let model = require('../../sq/model');

const uuid = require('node-uuid');
function generateId() {
    return uuid.v1();
}

let banner = model.banner;
let fn_test = async (ctx, next) => {
    let bannerList = await banner.findAll();
    ctx.rest({
        status: 200,
        msg: 'ok',
        data: bannerList
    });
};


module.exports = {
    'GET /api/bannerList':fn_test
}