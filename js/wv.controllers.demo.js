(function () {
    'use strict';

    var wvControllersModule = angular.module('wv.controllers');

    wvControllersModule.controller('demoController', demoController);

    demoController.$inject = ['$scope'];

    function demoController($scope) {
        var vm = this;

        // View Model Properties

        vm.people = [{
            id: 1,
            name: "Elmo",
            isModified: false
        }, {
            id: 2,
            name: "Jimbo",
            isModified: false
        }, {
            id: 3,
            name: "Larry Boi",
            isModified: false
        }];

        vm.input = "";
        vm.currentId = -1;

        // View Model Methods

        vm.updateName = updateName;
        vm.editPerson = editPerson;
        vm.resetNames = resetNames;

        function updateName(id) {
            var x, person;
            for (x = 0; x < vm.people.length; x += 1) {
                person = vm.people[x];
                if (person.id === id && vm.input !== person.name) {
                    if (person.tempName === undefined) {
                        person.tempName = person.name;
                    }
                    person.name = vm.input;
                    person.isModified = true;
                    
                    vm.input = "";
                    vm.currentId = "";
                    return;
                }
            }
        }
        
        function editPerson(id) {
            var x, person;
            for (x = 0; x < vm.people.length; x += 1) {
                person = vm.people[x];
                if (person.id === id) {
                    vm.input = person.name;
                    vm.currentId = person.id;
                    return;
                }
            }
        }

        function resetNames() {
            var x, person;
            for (x = 0; x < vm.people.length; x += 1) {
                person = vm.people[x];
                if (person.tempName !== undefined) {
                    person.name = person.tempName;
                    person.isModified = false;
                }
            }
        }
    }
}());