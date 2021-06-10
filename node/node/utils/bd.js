const mysql = require('mysql');
const util = require('util');

let pool = mysql.createPool({
    host : process.env.DB_HOST || 'localhost',
    user : process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    port: process.env.DB_PORT || 3306,
    database: process.env.DB_DATABASE || 'pwi2021final',
});

pool.query = util.promisify(pool.query);
module.exports = pool;