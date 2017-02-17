
var db = require('../core/db');
var logger = require('../core/logger');
var article = {};

// 新增文章
article.add = function(context,res) {
    db.getConnection(context,function(){
        var param = [context.uid,context.taskid,1,new moment().format('YYYY-MM-DD HH-mm-ss'),context.platform];
        context.conn.query("insert into wp_posts (uid,taskid,status,time,platform) values (?,?,?,?,?)", param, function (err, ret) {
            if (err) {
                logger.getDebugLogger().error("数据库操作异常" + err);
                console.log("数据库操作异常" + err);
                return;
            }
            return res.end(JSON.stringify(rows));
        });
    });
}

// 删除文章
article.del = function(context,res) {
    db.getConnection(context,function(){
        context.conn.query("DELETE FROM `wp_posts` WHERE (`ID`='16')", function (err, ret) {
            if (err) {
                logger.getDebugLogger().error("数据库操作异常" + err);
                console.log("数据库操作异常" + err);
                return;
            }
            return res.end(JSON.stringify(ret));
        });
    });
}

// 更新文章
article.update = function(context,res) {
    db.getConnection(context,function(){
        context.conn.query("UPDATE `wp_posts` SET `post_author`='1' WHERE (`ID`='17')", function (err, ret) {
            if (err) {
                logger.getDebugLogger().error("数据库操作异常" + err);
                console.log("数据库操作异常" + err);
                return;
            }
            return res.end(JSON.stringify(ret));
        });
    });
}

// 查询文章
article.get = function(context,res) {
    db.getConnection(context,function(){
        context.conn.query("SELECT * FROM `wp_posts` WHERE `post_content` <> '' LIMIT 0, 32 ", function (err, rows) {
            if (err) {
                logger.getDebugLogger().error("数据库操作异常" + err);
                console.log("数据库操作异常" + err);
                return;
            }
            connection.release();
            res.end(JSON.stringify(rows));
            return;
        });
    });
}

// 

module.exports = article;