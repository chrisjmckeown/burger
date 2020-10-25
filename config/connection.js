const mysql = require('mysql');

const databaseConfig = {
    host: "localhost",
    user: "root",
    password: "bootcamp",
    database: "content_management_systems_db"
};

const pool = mysql.createPool(databaseConfig);

module.exports = {
    pool
}