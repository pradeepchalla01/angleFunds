angular.module('angleFunds')
	   .controller('editPatientCtrl', function($scope, editPatientService, $state, 
	   	$stateParams, CONSTANTS, newPatientService) {
	   	var vm = this;
	   	$scope.loading = true;
	 	var patientId = $stateParams.id;
	 	var date = {};
	 	$scope.newPatient = {};
		$scope.errors = {};
		$scope.newPatient = {};
		$scope.organization={};
		$scope.loading = false;
	    editPatientService.updatePatientDetails(patientId)
						  .then(function(result){
						  	$scope.loading = false;
	 					  	console.log(result);
	 					  	date = result.date_of_birth;
	 					  	$scope.newPatient =  result;	
	 					  	var date = $scope.newPatient.date_of_birth;
						 	vm.gen = $scope.newPatient.gender;
						 	var duration_type = $scope.newPatient.duration_type;
						 	if(!duration_type){
						 		$scope.newPatient.duration_type = "none"; 
						 	}
						 	var i = 0;
							$scope.options = [{ name: "male" }, 
											  { name: "female"}];
							if(vm.gen === "f" ){
								i = 1;
							}else{
								i = 0;
							}
							$scope.selectedOption = $scope.options[i];
		 			}); 
				

		$scope.loading = false;
	 	$scope.goPatientList = function(){
	 		$state.go('menu.patientList');
	 	}
	 	$scope.newPatient.onezoneDatepicker = {
		    date: new Date(date), // MANDATORY                     
		};
		$scope.reset = function(){
			$scope.newPatient = {};
			$scope.errors.newPatient = '';
		}
	 	$scope.hideErrorMsg = function (id, key) {
	      	if($scope.errors[key] && $scope.errors[key][id]) {
	        	$scope.errors[key][id] = false;
	      	}
	    }
	    
	 	$scope.savePatientDetails = function(){
		$scope.errors.newPatient= {};
		$scope.newPatient.organization = $scope.organization;
		var required = ['patient_name', 'date_of_birth', 'parent_guardian_name', 'primary_phone_number', 'patient_email', 'doctor_name', 'diagnosis', 'disease_name', 'duration_of_treatment', 'duration_type', 'approximate_cost','monthly_family_income'];
		angular.forEach(required, function(attr){
			if(!$scope.newPatient[attr]){
				$scope.errors.newPatient[attr] = 'This field is required';
			}
		});
		if($scope.newPatient.primary_phone_number && !CONSTANTS.PHONE_REGEX.test($scope.newPatient.primary_phone_number)){
			$scope.errors.newPatient.primary_phone_number = 'Please enter valid phone number';
		}
		if($scope.newPatient.alternate_phone_number && !CONSTANTS.PHONE_REGEX.test($scope.newPatient.alternate_phone_number)){
			$scope.errors.newPatient.alternate_phone_number = 'Please enter valid phone number';
		}
		if($scope.newPatient.patient_email && !CONSTANTS.EMAIL_REGEX.test($scope.newPatient.patient_email)){
			$scope.newPatient.patient_email = 'Please enter valid phone number';
		}
		/*if($scope.organization.length > 0){
			$scope.errors.newPatient.organization = "please select atleast one organization";
		}*/
			if(angular.equals({}, $scope.errors.newPatient)) {
				newPatientService.setUpdatePatientDetails($scope.newPatient)
					 .then(function(){
					$state.go('menu.patientList');
				}).catch(function() {
					$state.go('menu.patientList');
				  });
			}
		}
});