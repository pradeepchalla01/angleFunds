angular.module('angleFunds')

.controller('signupCtrl', function($log, $scope, $state) {
	$log.debug('signup controller entered');
	$scope.errors = {};
	$scope.signup = {};
	$scope.register = function(){
		$scope.errors.signup = {};
		if(!$scope.signup.contactName){
			$scope.errors.signup.contactName = 'This field is required';
		}
		if(!$scope.signup.hospitalName){
			$scope.errors.signup.hospitalName = 'This field is required';
		}
		if(!$scope.signup.address){
			$scope.errors.signup.address = 'This field is required';
		}
		if(!$scope.signup.phone){
			$scope.errors.signup.phone = 'This field is required';
		}
		if(!$scope.signup.email){
			$scope.errors.signup.email = 'This field is required';
		}
		if(!$scope.signup.userName){
			$scope.errors.signup.userName = 'This field is required';
		}
		if(!$scope.signup.password){
			$scope.errors.signup.password = 'This field is required';
		}
		if(!$scope.signup.confirmPassword){
			$scope.errors.signup.confirmPassword = 'This field is required';
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