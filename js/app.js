/* IIFE http://stackoverflow.com/questions/8228281/what-is-this-iife-construct-in-javascript */
(function () {
    'use strict';

    var wvDemoModule = angular.module('wvDemoModule', []);
    
    wvDemoModule.controller('wvDemoController', wvDemoController);
    wvDemoController.$inject = ['$scope'];
    
    function wvDemoController($scope) {
        $scope.model = {};
        $scope.model.name = "Elmo";
    }
    
    /*
        Note: Other syntaxes are possible
        
        // Uses chaining and anonymous controller function with inline dependencies
        angular.module('wvDemoModule', [])
            .controller('wvDemoController', ['$scope', function ($scope) {
                $scope.model = {};
                ...
            }]);
    */
    
    /* 
        Bootstraps angular app using jquery lite => loads compiling of DOM after document loads 
        This bootstraps the wvDemoModule module as the module for the application
        
        We could also use
        <body data-ng-app="wvDemoModule">
            ...
        </body>
    */
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['wvDemoModule']);
    });
}());