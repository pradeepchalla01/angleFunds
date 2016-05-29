(function(){
    'use strict';
angular
        .module('angleFunds')
        .factory('editPatientService', editPatientService);

    function editPatientService($log, $http) {
        $log.debug('editPatientService');
        var service = {
            updatePatientDetails: updatePatientDetails
        };
        return service;

        function updatePatientDetails(patientId) {
            $log.debug('****Inside editPatientService');

            return $http({
                method: 'get',
                url: 'js/user/patients/patientList.json',
            }).then(function(response) {
                var result = response.data;
                for(var i = 0; i < result.length; i++){
                    if(result[i].patient_id == patientId){
                    return result[i];
                    }
                }

               /* console.log(response);
                return response.data;*/
            });
        }
    }
})();
