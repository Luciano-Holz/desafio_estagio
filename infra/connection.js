//File with configurations from conection with database
const mysql = require('mysql2');
//const connection content an object with the configurations from database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345',
    database: 'challenge'
});

module.exports = connection;