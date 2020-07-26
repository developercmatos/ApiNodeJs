var mysql = require('mysql');
/*
var db_config  = {
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "password",
  database: "portfolio"
};

var connection = mysql.createPool(db_config);
*/

//Gerenciando as conexoes
var connection = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'portfolio'
});


module.exports = connection;