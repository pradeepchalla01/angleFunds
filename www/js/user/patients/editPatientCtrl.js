angular.module('angleFunds')
	   .controller('editPatientCtrl', function($scope, $stateParams) {
		
		$scope.patientDetails = $stateParams.patient_id;
	 	console.log("Editpatient");
	 	console.log($stateParams.patient_id);
	 	console.log($scope.patientDetails);
});