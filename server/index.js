var Semantria = require('semantria');
var uuid = require('node-uuid');
var sleep = require('sleep');

var getAnalysis = require('./getAnalysis');
var getLogic = require('./getLogic');

getAnalysis("i want a coffee", function(results) {
    var l = getLogic(results);
    if (!l.action) {
        console.log('Sorry, I didnt get that, could you say it again?');
    }
    var message = "Completed " + l.action.replace(/([A-Z])/g, ' $1');
    console.log(message);
});