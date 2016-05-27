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

        function updatePatientDetails() {
            $log.debug('****Inside editPatientService');

            return $http({
                method: 'get',
                url: 'js/user/patients/patientList.json',
            }).then(function(response) {
                return response.data;
            });
        }
    }
})();
