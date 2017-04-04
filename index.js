var express = require('express');
var bodyParser = require('body-parser');

var app = express();
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

app.listen(3000);
