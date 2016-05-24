angular
        .module('angleFunds')
        .factory('newPatientService', newPatientService);

    function newPatientService($log, $http) {
        $log.debug('servicesssssssssssssssssssssssssssssssss');


        var service = {
            setAddNewPatientDetails: setAddNewPatientDetails
        };
        return service;

        function setAddNewPatientDetails(patientDetails) {
            $log.debug('****Inside setAddNewPatientDetails');

            return $http({
                method: 'get',
                url: 'AngelFunds/PatientRegistration',
                data: patientDetails
            }).then(function(response) {
                return response.data;
            });
        }

        function getPatientDetails(patient){
               return $http({
                method: 'get',
                url: 'AngelFunds/PatientRegistration',
                data: patientDetails
            }).then(function(response) {
                return response.data;
            });
        }

    }
