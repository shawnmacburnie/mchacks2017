var Semantria = require('semantria');
var uuid = require('node-uuid');
var sleep = require('sleep');

var apiKey = 'f03609e4-4e63-41f0-bb4a-f4bb71d0a796';
var apiSec = '89ea15ec-6bf7-40c6-92ba-d643ac71310a';
var appName = 'mchacks';

var session = new Semantria.Session(apiKey, apiSec, appName);

module.exports = function (text, callback) {
    doc = { "id": String(uuid.v4()).replace("-", ""), "text": text }
    var r = session.queueDocument(doc);
    while (true) {
        sleep.sleep(5);
        status = session.getProcessedDocuments();
        if (status && status.length) {
            // console.log(JSON.stringify(status))
            callback(status);
            break;
        }
    }
}