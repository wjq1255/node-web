var express = require('express');
var router = express.Router();

var fs = require('fs');



/* GET home page. */
router.get('/', function(req, res, next) {
	//获取
	fs.readFile('./public/json/data.json','utf-8', function(err,data){ 
	    if (err) {
	    	console.log(err);
		}
		var indexlist = JSON.parse(data.toString());
		console.log("indexlist----------"+indexlist.total);
		res.render('index', { title: 'Magazine', indexList: indexlist});
	});

    
});

module.exports = router;
