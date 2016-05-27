angular.module('angleFunds')

.controller('PatientListCtrl', function($log, $scope,$location, $state, patientFactory ) {
	$log.debug('PatientList controller entered');
	$scope.isExpand = false;
	$scope.data = {};	
	$scope.patientList = [];
	patientFactory.getPatientList().then(function(result){
		$scope.patientList = result;
	});
	$scope.editPatient = function(patientId){
		var id = patientId; 	
		$state.go('editPatient', { id: id});
	}
});