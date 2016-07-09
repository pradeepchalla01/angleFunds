'use strict';
angular.module('angleFunds')
.factory('PatientService', function($log, $http, CONSTANTS, $q) {
    $log.debug('Home service entered');
    var _patientservice = {
      patientList: patientList
    };
    return _patientservice;

    //////////////// definition
    function patientList() {
      
    }
});
