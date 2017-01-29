var Semantria = require('semantria');
var uuid = require('node-uuid');
var sleep = require('sleep');
var rsa = require('./sers');
var express = require('express')
var app = express()

	app.post('/:file', function (req, res) {
		console.log(req.params.file);
		rsa(req);
	})

var getAnalysis = require('./getAnalysis');
var getLogic = require('./getLogic');

/*getAnalysis("i want a coffee", function(results) {
    var l = getLogic(results);
    if (!l.action) {
        console.log('Sorry, I didnt get that, could you say it again?');
    }
    var message = "Completed " + l.action.replace(/([A-Z])/g, ' $1');
    console.log(message);
});*/
app.listen(3000, function () {
	  console.log('Example app listening on port 3000!')
})
