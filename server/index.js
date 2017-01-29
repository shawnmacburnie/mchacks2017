var Semantria = require('semantria');
var uuid = require('node-uuid');
var sleep = require('sleep');

var getAnalysis = require('./getAnalysis');
var getLogic = require('./getLogic');

getAnalysis("i want a coffee", function(results) {
    getLogic(results);
});