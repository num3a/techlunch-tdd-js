/*global angular */

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */
angular.module('demeter')
	.controller('DashboardCtrl', function TodoCtrl($scope, demeterService) {
	    'use strict';

	    $scope.lightOn = true;
	    $scope.remainingWaterInML = 500;

        $scope.toogleLights = function() {
            $scope.lightOn = !$scope.lightOn;
        };

        $scope.triggerWatering = function() {
            if ($scope.remainingWaterInML > 50) {
                $scope.remainingWaterInML -= 50;
            }
            // call demeter service
        }
        
    });
