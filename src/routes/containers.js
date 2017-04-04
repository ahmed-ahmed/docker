var express = require('express');
var controller = express.Router();
var service = require('../services/docker.js');

controller.get('/', (req, res) => {
    service.getContainers().then(containers => {
        res.json(containers);
    })
});

controller.post('/', (req, res) => {
    service.createContainer(req.body.imageId).then(containerId => {
    	console.log('id'+ containerId);
    	res.status(201).json(containerId);
    })
});

controller.put('/', (req, res) => {
    service.stopContainer(req.body.containerId).then(containerId => {
    	console.log('id'+ containerId);
    	res.status(200).json(containerId);
    })
});


controller.delete('/:containerId', (req, res) => {
	console.log(req);
    service.deleteContainer(req.params.containerId).then(containerId => {
    	console.log('id'+ containerId);
    	res.status(202).json(containerId);
    })
});



module.exports = controller;
