import angular from 'angular';
import 'angular-ui-router';
import imageComponent from './components/images/images.js';
import imagesService from './components/images/imagesService.js';

var app = angular.module('app', ['ui.router'])
app.service('imagesService', imagesService);
app.component('dImages', imageComponent);
app.config(function($locationProvider, $compileProvider, $httpProvider, $stateProvider) {
    $locationProvider.html5Mode(true);

    $compileProvider.debugInfoEnabled('<dev-only-angular-debug-info>');

    $httpProvider.defaults.cache = false;


    console.log($stateProvider);
    $stateProvider
        .state('images', {
            url: '/',
            onEnter: function() {
            },
            views: {
                'header': {
                    template: 'header'
                },
                'content': {
                    component: 'dImages'
                }


            }
        })
        .state('xxx', {
            url: '/xxx',
            template: 'nononono'
        })
});
