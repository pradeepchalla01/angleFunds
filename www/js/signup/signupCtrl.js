angular.module('angleFunds')

.controller('signupCtrl', function($log, $scope, $state) {
	$log.debug('signup controller entered');
	$scope.errors = {};
	$scope.signup = {};
	$scope.register = function(){
		$scope.errors.signup = {};
		if(!$scope.signup.contactName){
			$scope.errors.signup.contactName = 'Please Enter your Name';
		}
		if(!$scope.signup.hospitalName){
			$scope.errors.signup.hospitalName = 'Please Enter your Hospital Name';
		}
		if(!$scope.signup.address){
			$scope.errors.signup.address = 'Please Enter your Address';
		}
		if(!$scope.signup.phone){
			$scope.errors.signup.phone = 'Please Enter your Phone Number';
		}
		if(!$scope.signup.email){
			$scope.errors.signup.email = 'Please Enter your Email Address';
		}
		if(!$scope.signup.userName){
			$scope.errors.signup.userName = 'Please Enter your Username';
		}
		if(!$scope.signup.password){
			$scope.errors.signup.password = 'Please Enter your Passowrd';
		}
		if(!$scope.signup.confirmPassword){
			$scope.errors.signup.confirmPassword = 'Please Confirm your Passowrd';
		}
		if(angular.equals({}, $scope.errors.signup)) {
			$state.go('login');
		}
	}
	$scope.hideErrorMsg = function (id, key) {
      	if($scope.errors[key] && $scope.errors[key][id]) {
        	$scope.errors[key][id] = false;
      	}
    }
    $scope.reset = function () {
      	$scope.signup = {};
      	$scope.errors.signup = {};
    }
});