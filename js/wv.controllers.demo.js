(function () {
    'use strict';
    
    var wvControllersModule = angular.module('wv.controllers');
    
    wvControllersModule.controller('demoController', demoController);
    
    demoController.$inject = ['$scope'];

    function demoController($scope) {
        var vm = this;
        
        // View Model Properties
        
        vm.name = "Elmo";
        vm.nameTemp = "";
        vm.input = "";
        
        // View Model Methods
        
        vm.updateName = updateName;
        vm.isNameModified = isNameModified;
        vm.resetName = resetName;
        
        function updateName() {
            if(vm.nameTemp === "") {
                vm.nameTemp = vm.name;
            }
            vm.name = vm.input;
        }
        
        function isNameModified() {
            if(vm.nameTemp !== "") {
                return true;
            }
            return false;
        }
        
        function resetName() {
            vm.name = vm.nameTemp;
            vm.nameTemp = "";
        }
    }
}());