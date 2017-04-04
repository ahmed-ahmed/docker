import angular from 'angular';
import 'angular-ui-router';
import imageComponent from './components/images/images.js';
import imagesService from './components/images/imagesService.js';

import containerComponent from './components/containers/containers.js';
import containersService from './components/containers/containersService.js';

var app = angular.module('app', ['ui.router'])
app.service('imagesService', imagesService);
app.service('containersService', containersService);

app.component('dImages', imageComponent);
app.component('dContainers', containerComponent);
app.config(function($locationProvider, $compileProvider, $httpProvider, $stateProvider) {
    $locationProvider.html5Mode(true);

    $compileProvider.debugInfoEnabled('<dev-only-angular-debug-info>');

    $httpProvider.defaults.cache = false;


    console.log($stateProvider);
    $stateProvider
        .state('images', {
            url: '/images',
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
        .state('containers', {
            url: '/',
            onEnter: function() {
            },
            views: {
                'header': {
                    template: 'header'
                },
                'content': {
                    component: 'dContainers'
                }


            }
        })
        .state('xxx', {
            url: '/xxx',
            template: 'nononono'
        })
});
