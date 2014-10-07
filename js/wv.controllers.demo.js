(function () {
    'use strict';
    
    /*
        We want to get the controllers module and add our controller to it
    */
    
    var wvControllersModule = angular.module('wv.controllers');
    
    /*
        Notice we didn't use this syntax
        
        var wvApp = angular.module('wv', []);
        
        because this creates modules and we want to GET a module.
    */
    
    wvControllersModule.controller('demoController', demoController);
    
    demoController.$inject = ['$scope'];

    function demoController($scope) {
        var vm = this;
        
        vm.name = "Elmo";
        
        /*
            var vm = this; allows us to not attach the view model data to the $scope
            and only use the $scope object for specific things like $watch
            
            Note: the vm variable declared in the controller is a naming convention
            and is not required to match the vm in the .html template file
        */
    }
}());