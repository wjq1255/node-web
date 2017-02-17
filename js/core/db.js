/**
* author:wujq
* date: 2017-2-16
* mysql 配置与链接
*/
var mysql = require('mysql');
var logger = require('../core/logger');
var db = {};
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

// 数据库连接
db.getConnection = function (context, callback) {
    pool.getConnection(function (err, connection) {
        context.conn = connection;
        if (err) {
            logger.getDebugLogger().error("服务器内部错误：" + err);
            connection.release();
            return callback(err);
        }
        connection.beginTransaction(function (err) {
            if (err) {
                logger.getDebugLogger().error("数据库连接异常：" + err);
                connection.release();
                return callback(err);
            }
            return callback(null);
        })
    })
}

module.exports = db;