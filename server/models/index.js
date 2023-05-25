const dbconfig = require('../config/db');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbconfig.database, dbconfig.user, dbconfig.password, {
    host: dbconfig.host,
    dialect: dbconfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbconfig.pool.max,
        min: dbconfig.pool.min,
        acquire: dbconfig.pool.acquire,
        idle: dbconfig.pool.idle
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.devices = require('./device.model.js')(sequelize, Sequelize);

module.exports = db;