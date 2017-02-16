/**
* author:wujq
* date: 2017-2-16
* mysql 配置与链接
*/
var mysql = require('mysql');

// 数据库连接池
var pool  = mysql.createPool({
    host     : '127.0.0.1',
    port 	 : 3306,
    user     : 'root',
    password : '',
    database : 'yizezhi',
    connectionLimit: 20,
    connectTimeout:100000
});

module.exports = pool;