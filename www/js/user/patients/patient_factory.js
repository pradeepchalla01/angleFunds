(function(){
    'use strict';
    angular.module('angleFunds')
    .factory('patientFactory', patientFactory);

    function patientFactory($http) {
        var patientFactory = {
            getPatientList : getPatientList,
        };
        return patientFactory;
        function getPatientList(){
            console.log('getPatientList enter');
            return $http.get('js/user/patients/patientList.json')
            .then(function(result){
                console.log(result.data);
                return result.data;
            });
        }
    }
})();