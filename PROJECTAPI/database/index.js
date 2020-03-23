const mysql = require('mysql')

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '!Spiderman123',
    database: 'project',
    port: 3306
})

module.exports = db;