angular
        .module('angleFunds')
        .factory('newPatientService', newPatientService);

    function newPatientService($log, $http) {
        var service = {
            setAddNewPatientDetails: setAddNewPatientDetails
        };
        return service;

        function setAddNewPatientDetails(patientDetails) {
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
