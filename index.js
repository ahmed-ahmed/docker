var express = require('express');
    

var bodyParser = require('body-parser');

var app = express();
var server = require('http').createServer(app);  
var io = require('socket.io')(server);

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());



var imagesController = require('./src/routes/images.js');
var containersController = require('./src/routes/containers.js');

app.use('/api/images', imagesController);
app.use('/api/containers', containersController);
app.use(express.static('client'));



app.get('/*', function(req, res){
    res.sendFile(__dirname + '/client/index.html');
});

// var server = 
// io = io.listen(app)

// app.listen(3000);
server.listen(3000);  
