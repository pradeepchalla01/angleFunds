angular
        .module('angleFunds')
        .factory('newPatientService', newPatientService);

    function newPatientService($log, $http, QueryService, CONSTANTS) {
        var service = {
            setAddNewPatientDetails: setAddNewPatientDetails,
            getPatientDetails: getPatientDetails
        };
        return service;


        function setAddNewPatientDetails(patientDetails) {
            return $http({
                method: 'GET',
                url: 'AngelFunds/PatientRegistration',
                data: patientDetails
            }).then(function(response) {
                return response.data;
            });
        }

        

    }
