var express = require('express');
var router = express.Router();

var fs = require('fs');
var logger = require('../js/core/logger');
var article = require('../js/busi/article');


/* GET home page. */
router.get('/', function(req, res, next) {
	//获取
	fs.readFile('./public/json/data.json','utf-8', function(err,data){ 
	    if (err) {
	    	logger.getDebugLogger().info("----"+err);
	    	console.log(err);
		}
		var indexlist = JSON.parse(data.toString());
		console.log("indexlist----------"+indexlist.total);
		res.render('index', { title: 'Magazine', indexList: indexlist});
	});

    
});

router.get('/article', function(req, res, next){
	res.setHeader('Content-Type', 'text/html;charset=utf-8');
	console.log("article----------");
    var context = {};
    context.platform = "article";
    article.getArtices(context,res);
});

module.exports = router;
