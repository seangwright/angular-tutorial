/* IIFE http://stackoverflow.com/questions/8228281/what-is-this-iife-construct-in-javascript */
(function () {
    'use strict';

    angular.module('wv', ['wv.controllers']);
    
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['wv']);
    });
}());