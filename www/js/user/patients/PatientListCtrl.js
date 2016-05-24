angular.module('angleFunds')

.controller('PatientListCtrl', function($log, $scope, $state, patientFactory ) {
	$log.debug('PatientList controller entered');
	$scope.isExpand = false;
	$scope.data = {};	
	$scope.patientList = [];
	patientFactory.getPatientList().then(function(result){
		
		$scope.patientList = result;
		/*console.log($scope.patientList);*/
	});
	$scope.editPatient = function(patient){
		var patient_id = patient.patient_id;
		$state.go('patientEdit', { 'patient_id' : patient_id});
	}
});