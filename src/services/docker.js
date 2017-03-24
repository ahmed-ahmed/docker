'use strict';
console.log('docker service started');

var p = require('child_process');
var $q = require('q');
var exec = p.exec;

exports.getImages = () => {
    var deferred = $q.defer();
    var cmd = "docker images";

    exec(cmd, (err, data, derr) => {
        var items = data.split(/\r?\n/);
        items.shift();
        items.pop();

        var images = [];

        items.forEach(row=>{
            images.push(new Image(...row.split(/[ , ][ , ]+/)));
        })
        
        // console.log(images);
        deferred.resolve(images);
    });
    return deferred.promise;
}



class Image{
    constructor(repository, tag, imageId, created, size) {
        this.repository = repository;
        this.tag = tag;
        this.imageId = imageId;
        this.created = created;
        this.size = size;
    }
}
