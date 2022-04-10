// const fs = require('fs');
// const mysql = require('mysql');

// eval(process.env.MYSQLCONNSTR_PoolConnection);

// console.log(process.env.MYSQLCONNSTR_PoolConnection,"=========> poool");

// var pool = mysql.createConnection({multipleStatements: true});
// pool.connect(function (err) {
//   if (err) {
//     return console.log(`Error connecting to database: ${err.message}`.bgRed.white);
//   }
//   console.log(`Successfully connected to your local MySQL server`.yellow);
// });

// module.exports = pool;

const mysql = require('mysql');
const fs = require('fs');
// Initialize pool
var pool = mysql.createPool({
    connectionLimit : 10,
    host     : '127.0.0.1',
    user     : 'root',
    password : '123456',
    database : 'mysql',
    debug    :  false
});    
module.exports = pool;