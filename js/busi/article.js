
var dbpool = require('../core/db');
var logger = require('../core/logger');
var article = {};

article.getArtices = function(context,res) {
    dbpool.getConnection(function (err, connection) {
        if (err) {
            logger.getDebugLogger().error("" + err);
            console.log("数据库链接异常" + err);
            return;
        }

        connection.query('SELECT * FROM `wp_posts` WHERE post_content != "" ',[context.platform], function (err, rows) {
            if (err) {
                logger.getDebugLogger().error("数据库操作异常" + err);
                console.log("数据库操作异常" + err);
                return;
            }
            return res.end(JSON.stringify(rows));
        });
    });
}

module.exports = article;