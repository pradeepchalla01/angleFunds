'use strict';
angular.module('angleFunds')
.factory('HomeService', function($log, $http, CONSTANTS, $q) {
    $log.debug('Home service entered');
    var _homeservice = {
      patientList: patientList
    };
    return _homeservice;

    //////////////// definition
    function patientList() {
      
    }
});
