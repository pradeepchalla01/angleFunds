angular.module('angleFunds')

.controller('PatientListCtrl', function($log, $scope, $state, patientFactory ) {
	$log.debug('PatientList controller entered');
	$scope.isExpand = false;	
	$scope.patientList = [];
	patientFactory.getPatientList().then(function(result){
		console.log(result);
		$scope.patientList = result;
		console.log($scope.patientList);
	});
	$scope.editPatient = function(){
		$state.go('patientEdit');
	}
});