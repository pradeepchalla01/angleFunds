angular.module('angleFunds')

.controller('signupCtrl', function($log, $scope, $state, AuthService, $ionicModal, $rootScope, CONSTANTS) {
	$log.debug('signup controller entered');
	$scope.errors = {};
	$scope.signup = {};
	$scope.register = function(){
		$scope.errors.signup = {};
		var required = ['contactName', 'hospitalName', 'address', 'phone', 'email', 'userName', 'password', 'confirmPassword'];
		angular.forEach(required, function(attr){
			if(!$scope.signup[attr]){
				$scope.errors.signup[attr] = 'This field is required';
			}
		});
		if($scope.signup.phone && !CONSTANTS.PHONE_REGEX.test($scope.signup.phone)){
			$scope.errors.signup.phone = 'Please enter valid Phone Number'
		}
		if($scope.signup.email && !CONSTANTS.EMAIL_REGEX.test($scope.signup.email)){
			$scope.errors.signup.email = 'Please enter valid Contact Email'
		}
		if($scope.signup.password && $scope.signup.confirmPassword && $scope.signup.password != $scope.signup.confirmPassword){
			$scope.errors.signup.confirmPassword = 'Password does not match with Confirm Password';
		}
		if(angular.equals({}, $scope.errors.signup)) {
			AuthService.signup($scope.signup);
			$scope.openLoginModal();
		}
	}
	$scope.openLoginModal = function() {
		$rootScope.loginType = 'hospital';
		$scope.loginModal.show();
	};
	$ionicModal.fromTemplateUrl('js/home/login.partial.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.loginModal = modal;
	});
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