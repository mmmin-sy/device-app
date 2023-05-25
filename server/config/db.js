module.exports = {
    host     : '127.0.0.1',
    user     : 'root',
    password : '1234',
    database : 'my_db',
    dialect  : 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
