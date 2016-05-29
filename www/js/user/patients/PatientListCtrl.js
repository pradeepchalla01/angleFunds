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
	$scope.status = function(filter){
		$scope.statusFilter = filter;
	}
})

.controller('fundPatientsCtrl', function($log, $scope,$location, $state, patientFactory ) {
	$log.debug('PatientList for seeking funds controller entered');
	$scope.isExpand = false;
	$scope.data = {};	
	$scope.patientList = [];
	patientFactory.getPatientList().then(function(result){
		$scope.patientList = result;
	});
	$scope.editPatient = function(patientId){
		var id = patientId; 	
		$state.go('editOrgPatient', { id: id});
	}

	$scope.status = function(filter){
		$scope.statusFilter = filter;
	}
})

.controller('approvedPatientsCtrl', function($scope, patientFactory){
	patientFactory.getPatientList().then(function(result){
		console.log(result);
		$scope.approvedList = [];
		angular.forEach(result, function(patient){
			if(patient.status === 'Approved'){
				$scope.approvedList.push(patient);
			}
		})
	});
});