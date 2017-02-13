var express = require('express');
var router = express.Router();

var fs = require('fs');

/* GET home page. */
router.get('/:id', function(req, res, next) {
	res.setHeader('Content-Type', 'text/html;charset=utf-8');
	var id = req.params.id*1==0?1:req.params.id*1;

	//获取
	fs.readFile('./public/json/1.txt','utf-8', function(err,data){ 
	    if (err) {
	    	console.log(err);
		}
		// var artice = JSON.parse(data.toString());
		res.render('single', { title: 'Magazine', nex: id+1, pre:id-1 , artice: data.toString()});
	});
});

module.exports = router;