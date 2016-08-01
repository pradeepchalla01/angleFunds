angular.module('angleFunds')

.controller('signupCtrl', function($log, $scope, $state, AuthService, $ionicModal, $rootScope, CONSTANTS) {
	$log.debug('signup controller entered');
	$scope.errors = {};
	$scope.signup = {};
	$scope.signup.typeid = 16;
	$scope.signup.type = 'hospital';
	$scope.selectType = function(){
		if($scope.signup.type === 'hospital'){
			$scope.signup.typeid = 16;
		}else if($scope.signup.type === 'charity'){
			$scope.signup.typeid = 1;
		}		
	}
	$scope.register = function(){
		console.log($scope.signup);
		$scope.errors.signup = {};
		var required = ['contact_name', 'name', 'address', 'phone_number', 'contact_email', 'username', 'password', 'confirmPassword'];
		angular.forEach(required, function(attr){
			if(!$scope.signup[attr]){
				$scope.errors.signup[attr] = 'This field is required';
			}
		});
		if($scope.signup.phone && !CONSTANTS.PHONE_REGEX.test($scope.signup.phone)){
			$scope.errors.signup.phone = 'Please enter valid Phone Number'
		}
		if($scope.signup.contact_email && !CONSTANTS.EMAIL_REGEX.test($scope.signup.contact_email)){
			$scope.errors.signup.contact_email = 'Please enter valid Contact Email'
		}
		if($scope.signup.password && $scope.signup.confirmPassword && $scope.signup.password != $scope.signup.confirmPassword){
			$scope.errors.signup.confirmPassword = 'Password does not match with Confirm Password';
		}
		if(angular.equals({}, $scope.errors.signup)) {
			/*var params = {};
			params.contact_name = $scope.signup.contact_name;
			params.typeid = $scope.signup.typeid;
			params.name = $scope.signup.name;
			params.address = $scope.signup.address;
			params.phone_number = $scope.signup.phone_number;
			params.contact_email = $scope.signup.contact_email;
			params.username = $scope.signup.username;
			params.password = $scope.signup.password;
			params.type = $scope.signup.type;*/
			AuthService.signup($scope.signup).then(function(argument) {
				$scope.openLoginModal();
			});			
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
      	$scope.signup.typeid = 16;
		$scope.signup.type = 'hospital';
      	$scope.errors.signup = {};
    }
});