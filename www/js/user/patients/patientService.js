'use strict';
angular.module('angleFunds')
.factory('PatientService', function($log, $http, QueryService, CONSTANTS, $q) {
    $log.debug('Home service entered');
    var _patientservice = {
      getPatientDetails: getPatientDetails
    };
    return _patientservice;

    //JSON PROTOTYPE
    function getPatientDetails(hospitalId){
        return $http.get('js/user/patients/patientSummary.json')
            .then(function(result){
                return result.data;
            });

        // UNComment When API is Working *
        /*return QueryService.query(CONSTANTS.METHOD_POST, '/patientsummary', null, {hospital_id: hospitalId}).then(function(result){
            console.log(result);
            return result;
        });*/
    }
});
