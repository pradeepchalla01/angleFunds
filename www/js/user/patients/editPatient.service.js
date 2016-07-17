(function(){
    'use strict';
angular
        .module('angleFunds')
        .factory('editPatientService', editPatientService);

    function editPatientService($log, $http) {
        var service = {
            updatePatientDetails: updatePatientDetails
        };
        return service;

        function updatePatientDetails(patientId) {
            return $http({
                method: 'get',
                url: 'js/user/patients/patientSummary.json',
                /*url: 'http://localhost/test/index.php/service/patientsummary',*/
            }).then(function(response) {
                var result = response.data;
                for(var i = 0; i < result.length; i++){
                    if(result[i].patient_id == patientId){
                    return result[i];
                    }
                }
            });
        }
    }
})();
