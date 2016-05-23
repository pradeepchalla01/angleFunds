angular.module('angleFunds')

.controller('NewPatientCtrl', function($log, $scope, $state, newPatientService) {
	$scope.newPatient = {};
	$scope.errors = {};
	$scope.organizations = ['organization 1', 'organization 2', 'organization3'];
	$scope.organization= ['organization 1'];
	  
  	$scope.toggleSelection = function toggleSelection(org) {
    	var idx = $scope.organization.indexOf(org);

	    if (idx > -1) {
	      $scope.organization.splice(idx, 1);
	    }
    	// is newly selected
	    else {
	      $scope.organization.push(org);
	    }
  	};

	$scope.newPatient.onezoneDatepicker = {
	    date: new Date(), // MANDATORY                     
	};

	$scope.savePatientDetails = function(){
		$scope.errors.newPatient= {};
		$scope.newPatient.organization = $scope.organization;
			if(!$scope.newPatient.name){
				$scope.errors.newPatient.name = 'please enter patient name';
			} 
			if(!$scope.newPatient.onezoneDatepicker){
				$scope.errors.newPatient.onezoneDatepicker = 'please enter patient date of birth';
			}
			if(!$scope.newPatient.parentName){
				$scope.errors.newPatient.parentName = "please enter patient's parent name";
			}
			if(!$scope.newPatient.phone){
				$scope.errors.newPatient.phone = "please enter valid phone number";
			}else{
				var evt = $scope.newPatient.phone;
				if(!isNaN(evt)){
					if(!(evt.length == 10)){
						$scope.errors.newPatient.phone = "Phone number is incorrect";	
					}
				}else{
					$scope.errors.newPatient.phone = "please enter numbers only";		
				}
			}
			if(!$scope.newPatient.alterPhone){
				$scope.errors.newPatient.alterPhone = "please enter Alternate phone number";
			}else{
				var evt = $scope.newPatient.alterPhone;
				if(!isNaN(evt)){
					if(!(evt.length == 10)){
						$scope.errors.newPatient.alterPhone = "Phone number is incorrect";	
					}
				}else{
					$scope.errors.newPatient.alterPhone = "please enter numbers only";		
				}
			}
			if(!$scope.newPatient.email){
				$scope.errors.newPatient.email = "please enter email address";
			}else{
			    var x = $scope.newPatient.email;
			    var atpos = x.indexOf("@");
			    var dotpos = x.lastIndexOf(".");
			    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
			        $scope.errors.newPatient.email = "please enter email address";
			    }
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
			}else {
				var appCost = $scope.newPatient.appCost;
				if(isNaN(appCost)){
					$scope.errors.newPatient.appCost = "please enter approximate cost in numbers ";	
				}
			}
			if(!$scope.newPatient.familyIncome){
				$scope.errors.newPatient.familyIncome = "please enter monthly family income";
			}else {
				var familyIncome = $scope.newPatient.familyIncome;
				if(isNaN(familyIncome)){
					$scope.errors.newPatient.familyIncome = "please enter familyIncome in numbers ";	
				}
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

			//calling the service method
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