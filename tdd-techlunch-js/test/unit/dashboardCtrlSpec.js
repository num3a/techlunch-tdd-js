/*global describe, it, beforeEach, inject, expect*/
(function () {
    'use strict';

    describe('Dashboard Controller', function () {
        var ctrl, scope, demeterService;

        // Load the module containing the app, only 'ng' is loaded by default.
        beforeEach(module('demeter'));


        beforeEach(inject(function ($controller, $rootScope) {
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


        it('DashbardCtrl should trigger watering when enough remaining water', function () {
            expect(scope.remainingWaterInML).toBe(500);

            scope.triggerWatering();
            scope.triggerWatering();
            scope.triggerWatering();

            expect(scope.remainingWaterInML).toBe(350);

        });

        it('DashbardCtrl should not trigger watering', function () {
            scope.remainingWaterInML = 45;
            expect(scope.remainingWaterInML).toBe(45);

            scope.triggerWatering();
            scope.triggerWatering();
            scope.triggerWatering();

            expect(scope.remainingWaterInML).toBe(45);
        });



    });
}());
