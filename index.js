var express = require('express');
var app = express();

var imagesController = require('./src/routes/images.js');

app.use('/api/images', imagesController);
app.use(express.static('client'));

app.listen(3000);
