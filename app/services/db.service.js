const mysql = require("mysql");

const dotenv = require('dotenv').config();

var connection = mysql.createConnection({
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER ,
    password        : process.env.DB_PASSWORD ,
    database        : process.env.DB_DATABASE
});


var exec_query = function (query, cb) {
    connection.connect();
 
    connection.query(query, function (error, results, fields) {
    if (error) throw error;
        cb(results[0].solution)
    });
    
    connection.end();
}

module.exports.exec_query = exec_query