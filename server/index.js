var Semantria = require('semantria');
var uuid = require('node-uuid');
var sleep = require('sleep');
var rsa = require('./sers');
var express = require('express')
var app = express()
var getAnalysis = require('./getAnalysis');
var getLogic = require('./getLogic');
	app.post('/:file', function (req, res) {
		console.log(req.params.file);
		rsa(req, function(data) {
            getAnalysis(data, function(results) {
                var l = getLogic(results);
                if (!l) return res.send('Sorry, I didnt get that, could you say it again?');
                res.send(l);
            });
        });
	});


// getAnalysis("I want a coffee", function(results) {
//     var l = getLogic(results);
    // if (!l.action) {
    //     console.log('Sorry, I didnt get that, could you say it again?');
    // }
    // var message = "Completed " + l.action.replace(/([A-Z])/g, ' $1');
    // console.log(message);
// });
 app.listen(3000, function () {
 	  console.log('Example app listening on port 3000!')
 })
