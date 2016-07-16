angular.module('angleFunds')

.controller('PatientListCtrl', function($log, $scope,$location, $state, $rootScope, PatientService, store, commonService) {
	$log.debug('PatientList controller entered');
	$scope.isExpand = false;
	$scope.data = {};	
	$scope.patientList = [];
	$scope.userData = store.get('currentUser');
	PatientService.getPatientDetails($scope.userData.hospital_id).then(function(result){
		$scope.patientList = result;
	});

	// api service for master data
	// calling the service for reference
	// remove when known appropriate controller to call from
	commonService.getMasterData(store.get('accountType')).then(function(result){
		console.log(result);
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
	$scope.approvedList = [];
	patientFactory.getPatientList().then(function(result){
		$scope.approvedList = result;
	});
})
.controller('editOrgPatinetInfoCtrl', function($scope, patientFactory, CONSTANTS){
	$scope.savePatientDetails = function(){
		$scope.errors = {};
		$scope.errors.charity= {};
		$scope.charity = {};
		$scope.charity.organization = $scope.organization;
		var required = ['hospital_name','patient_name', 'onezoneDatepicker', 'parent_guardian_name', 'primary_phone_number', 'patient_email', 'doctor_name', 'diagnosis', 'disease_name', 'duration_of_treatment', 'duration_type', 'approximate_cost','monthly_family_income', 'occupation', 'personName',];
		angular.forEach(required, function(attr){
			if(!$scope.charity[attr]){
				$scope.errors.charity[attr] = 'This field is required';
			}
		});
		if($scope.charity.primary_phone_number && !CONSTANTS.PHONE_REGEX.test($scope.charity.primary_phone_number)){
			$scope.errors.charity.primary_phone_number = 'Please enter valid phone number';
		}
		if($scope.charity.alternate_phone_number && !CONSTANTS.PHONE_REGEX.test($scope.charity.alternate_phone_number)){
			$scope.errors.charity.alternate_phone_number = 'Please enter valid phone number';
		}
		if($scope.charity.patient_email && !CONSTANTS.EMAIL_REGEX.test($scope.charity.patient_email)){
			$scope.charity.patient_email = 'Please enter valid phone number';
		}

		if($scope.organization.length > 0){
			$scope.errors.charity.organization = "please select atleast one organization";
		}
		console.log($scope.charity);
		//$log.debug($scope.errors.charity);
		//calling the service method
		if(angular.equals({}, $scope.errors.charity)) {
			charityService.setAddcharityDetails($scope.charity)
				 .then(function(){
				$state.go('menu.patientList');
			}, function(error) {
				console.log('error', error);
				$state.go('menu.patientList');
			}); 
		}
	}
});