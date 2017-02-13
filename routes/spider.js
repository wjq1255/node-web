var express = require('express');
var router = express.Router();
var Crawler = require("crawler");

var domhtml = "";

var c = new Crawler({
    maxConnections : 1,
    rateLimit:2000,
    callback : function (error, res, done) {
        if(error){
            console.error(error);
        }else{
            var $ = res.$;
            console.log($('title').text());
        }
        done();
    }
});

// Queue URLs with custom callbacks & parameters
c.queue([{
    uri: 'http://www.imooc.com/course/list?c=javascript',
    jQuery: false,

    // The global callback won't be called
    callback: function (error, res, done) {
        if(error){
            console.log(error);
        }else{
        	domhtml = res.body;
            // console.log('Grabbed', res.body, 'bytes');
        }
        done();
    }
}]);

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('spider', {domhtml: domhtml});
});

module.exports = router;
