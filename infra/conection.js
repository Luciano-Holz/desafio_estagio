//File with configurations from conection with database
const mysql = require('mysql');

const conection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345',
    database: 'challenge'
});

module.exports = conection;