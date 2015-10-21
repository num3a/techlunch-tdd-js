/*global describe, it, beforeEach, inject, expect*/
(function () {
    'use strict';

    describe('Dashboard Controller', function () {
        var ctrl, scope;

        // Load the module containing the app, only 'ng' is loaded by default.
        beforeEach(module('todomvc'));


        beforeEach(inject(function ($controller, $rootScope, localStorage) {
            scope = $rootScope.$new();

            ctrl = $controller('DashboardCtrl', {
                $scope: scope
            });
        }));


        it('ToogleLights should change light mode', function () {

            expect(scope.lightOn).toBeTruthy();
            scope.toogleLights();
            expect(scope.lightOn).toBeFalsy();
        });




    });
}());
