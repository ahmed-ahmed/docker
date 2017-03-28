import angular from 'angular';
import imageComponent from './components/images/images.js';
import imagesService from './components/images/imagesService.js';

var app = angular.module('app', []);

app.service('imagesService', imagesService);
app.component('dImages', imageComponent);

// console.log(imageComponent);
// ;var angular = require('angular');
//
// import './components/images/images.js';

// var app = angular.module('app', []);


// app.config(($stateProvider)=> {
//
// })
