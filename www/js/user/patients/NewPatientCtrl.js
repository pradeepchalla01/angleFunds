angular.module('angleFunds')

.controller('NewPatientCtrl', function($log, $scope, $state, newPatientService) {
	$log.debug('New Patient');
	$scope.newPatient = {};
	$scope.errors = {};
	$scope.organizations = ['organization 1', 'organization 2', 'organization3'];
	$scope.organization= ['organization 1'];
	  
  	$scope.toggleSelection = function toggleSelection(organization) {
    	var idx = $scope.organization.indexOf(organization);

	    if (idx > -1) {
	      $scope.organization.splice(idx, 1);
	    }
    	// is newly selected
	    else {
	      $scope.organization.push(organization);
	    }
  	};

	$scope.savePatientDetails = function(){
		$scope.errors.newPatient= {};
		$scope.newPatient.organization = $scope.organization;
			$log.debug('inside savePatientDetails');
			if(!$scope.newPatient.name){
				$scope.errors.newPatient.name = 'please enter patient name';
			} 
			if(!$scope.newPatient.dob){
				$scope.errors.newPatient.dob = 'please enter patient date of birth';
			}
			if(!$scope.newPatient.parentName){
				$scope.errors.newPatient.parentName = "please enter patient's parent name";
			}
			if(!$scope.newPatient.phone){
				$scope.errors.newPatient.phone = "please enter valid phone number";
			}
			if(!$scope.newPatient.alterPhone){
				$scope.errors.newPatient.alterPhone = "please enter Alternate phone number";
			}
			if(!$scope.newPatient.email){
				$scope.errors.newPatient.email = "please enter email address";
			}
			if(!$scope.newPatient.doctorName){
				$scope.errors.newPatient.doctorName = "please enter doctorn name";
			}
			if(!$scope.newPatient.diagnosis){
				$scope.errors.newPatient.diagnosis = "please enter diagnosis";
			}
			if(!$scope.newPatient.disease){
				$scope.errors.newPatient.disease = "please enter disease";
			}
			if(!$scope.newPatient.duration){
				$scope.errors.newPatient.duration = "please enter duration time";
			}
			if(!$scope.newPatient.typeOfTreatment){
				$scope.errors.newPatient.typeOfTreatment = "please enter type of treatment";
			}
			if(!$scope.newPatient.appCost){
				$scope.errors.newPatient.appCost = "please enter approximate cost";
			}
			if(!$scope.newPatient.familyIncome){
				$scope.errors.newPatient.familyIncome = "please enter monthly family income";
			}
			if(!$scope.newPatient.occupation){
				$scope.errors.newPatient.occupation = "please enter atleast one occupation";
			}
			if(!$scope.newPatient.personName){
				$scope.errors.newPatient.personName = "please enter atleast one personName";
			}
			if($scope.organization.length > 0){
				$scope.errors.newPatient.organization = "please select atleast one organization";
			}
			$log.debug($scope.newPatient);

			if(angular.equals({}, $scope.errors.newPatient)) {
				newPatientService.setAddNewPatientDetails($scope.newPatient)
					 .then(function(){
					$state.go('menu.patientList');
				}, function(error) {
					console.log('error', error);
				}); 
				
			}
		}


	$scope.reset =  function(){
		$scope.newPatient = {};
	}
	//hiding error message	
	$scope.hideErrorMsg = function (id, key) {
      	if($scope.errors[key] && $scope.errors[key][id]) {
        	$scope.errors[key][id] = false;
      	}
    }
});