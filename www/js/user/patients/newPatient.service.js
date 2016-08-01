angular
        .module('angleFunds')
        .factory('newPatientService', newPatientService);

    function newPatientService($log, $http, QueryService, CONSTANTS) {
        var service = {
            setAddNewPatientDetails: setAddNewPatientDetails,
            setUpdatePatientDetails: setUpdatePatientDetails
        };
        return service;


        function setAddNewPatientDetails(patientDetails) {
            return $http({
                method: CONSTANTS.METHOD_GET,
                url: 'AngelFunds/PatientRegistration',
                data: patientDetails
            }).then(function(response) {
                return response.data;
            });
        }

        //update patient details form patient edit page
        function setUpdatePatientDetails(patientDetails){
            console.log(patientDetails);
            return $http({
                method: CONSTANTS.METHOD_GET,
                url: 'AngelFunds/PatientRegistration',
                data: patientDetails
            }).then(function(response) {
                return response.data;
            });
        }
        

    }
