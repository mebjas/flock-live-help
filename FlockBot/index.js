var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var sprintf = require('sprintf').sprintf;
var uuid = require('node-uuid');
var fbot = require('flock');

var port = 80;
var app = express();
app.use( bodyParser.json() );        // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({      // to support URL-encoded bodies
  extended: true
}));

app.listen(port, function() {
    console.log(sprintf("BOT Listening to port %s", port));
});

var responses = {};
var lastGuid = null;
var botToken = ";
/**
 * Endpoint to get the help request from some extension, with config information
 * Creates a WS with slack, post the message and wait for the user to respond.
 * Once the user responds, add it to responses dictionery so that polling extension
 * can get back the information.
 */
app.post('/flocklive', function(req, res) {
    var guid = uuid.v1();
    lastGuid = guid;
    var username = req.body.username;
    var message = req.body.message;
    var filename = req.body.filename;
    var question = req.body.question;
    var config = req.body.config;
    var userdictionery = {};

    // send response back to client
    res.json({ack: true, guid: guid});

    
    var M = "@" +username +" a user has requested for your help\n";
    M += "*Question:* " +question +"\n";
    M += "*filename:* " +filename +"\n";
    M += "```\n";
    M += message
    M += "```\n";

    var user = "u:xm58bf15bxjfxer1";

    request.get(sprintf(
        "https://api.flock.co/v1/chat.sendMessage?to=%s&text=%s&token=%s",
        user, M, botToken)
    );
    
});


/**
 * Endpoint to get the respond with response from user from slack.
 */
app.post('/flocklivepocpoll', function(req, res) {
    var guid = req.body.guid;
    if (typeof responses[guid] != 'undefined') {
        res.json({ack: true, text: responses[guid]});
        responses[guid] = undefined;
    } else {
        res.json({ack: false});
    }
})



app.get('/flocklive/config', function(req, res) {
    res.json({ack: true})
})

app.post('/flocklive/event', function(req, res) {
    if (req.body.name == "chat.receiveMessage") {
        responses[lastGuid] = req.body.message.text;
        console.log(sprintf("reposnse is: %s", req.body.message.text))
    }
    console.log(req.body)
    res.json({ack: true})
})


app.post('/flocklive/action', function(req, res){
    //token = req.body.token;
    console.log(req.body)
    res.json({ack: true})
})
