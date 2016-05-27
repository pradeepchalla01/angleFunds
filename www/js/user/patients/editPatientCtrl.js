angular.module('angleFunds')
	   .controller('editPatientCtrl', function($scope, editPatientService, $state, $stateParams) {
	 	var patientId = $stateParams.id;
	    editPatientService.updatePatientDetails()
	 					  .then(function(result){
		 					for(var i = 0; i < result.length; i++){
		 						if(result[i].patient_id == patientId){
		 						return	$scope.newPatient = result[i];
		 						}
		 					}
	 					});
	 	$scope.goPatientList = function(){
	 		$state.go('menu.patientList');
	 	}
});