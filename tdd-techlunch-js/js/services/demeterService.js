angular.module('demeter')
    .factory('demeterService', function($http) {
        'use strict';

        var service = {
            triggerWatering : function() {
                return $http.get('/api/triggerAutomaticWattering');
            }
        };

        return service;
    });