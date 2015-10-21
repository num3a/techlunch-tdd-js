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

    
        describe('the filter', function () {
            it('should default to ""', function () {


            });

         
        });

    });
}());
