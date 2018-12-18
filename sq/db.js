const Sequelize = require('sequelize');
let config = require('../config/sq.config');

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    pool: config.pool
});
function defineModel(name, attributes) {
    var attrs = {};
    for (let key in attributes) {
        let value = attributes[key];
        if (typeof value === 'object' && value['type']) {
            value.allowNull = value.allowNull || false;
            attrs[key] = value;
        } else {
            attrs[key] = {
                type: value,
                allowNull: false
            };
        }
    }

    // attrs.createdAt = {
    //     type: Sequelize.BIGINT,
    //     allowNull: false,
    // };
    // attrs.updatedAt = {
    //     type: Sequelize.BIGINT,
    //     allowNull: false,
    // };
    // attrs.version = {
    //     type: Sequelize.BIGINT,
    //     allowNull: false,
    // };
    return sequelize.define(name, attrs, {
        tableName: name,
        timestamps: false,
        hooks: {
            beforeValidate: function (obj) {
                let now = Date.now();
                // if (obj.isNewRecord) {
                //     obj.createdAt = now;
                //     obj.updatedAt = now;
                //     obj.version = 0;
                // } else {
                //     obj.updatedAt = now;
                //     obj.version++;
                // }
            }
        }
    })
}
module.exports = {
    defineModel: defineModel,
    sq: Sequelize,
    sync:function(){
        if (process.env.NODE_ENV !== 'production') {
            sequelize.sync({ force: true })
        }
    }
}