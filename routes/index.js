var express = require('express');
var router = express.Router();

var fs = require('fs');
var logger = require('../js/core/logger');

/* GET home page. */
router.get('/', function(req, res, next) {
	var temp = req.query.temp;
	var user = req.query.user;
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



module.exports = router;
