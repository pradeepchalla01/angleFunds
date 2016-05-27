angular.module('angleFunds')

.controller('homeCtrl', function($log, $ionicModal, $scope, $state) {
	$log.debug('home controller entered');
	$scope.errors = {};
	$ionicModal.fromTemplateUrl('js/home/login.partial.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.loginModal = modal;
	});
	$scope.openLoginModal = function(loginType) {
		$scope.loginType = loginType;
		$scope.loginModal.show();
	};
	$scope.closeLoginModal = function(){
		$scope.errors = {};
		$scope.login ={};
		$scope.loginModal.hide();	
	}
	$scope.signup = function(){
		$scope.closeLoginModal();
		$state.go('signup');
	}
	$scope.login = function(){
		$log.debug('home controller entered');		
		$scope.errors.login = {};
		if(!$scope.login.userName){
			$scope.errors.login.userName = 'Please Enter user Name or Email';
		}
		if(!$scope.login.password){
			$scope.errors.login.password = 'Please Enter Password';
		}
		console.log('login function');
		if(angular.equals({}, $scope.errors.login)) {
			$scope.closeLoginModal();
			$state.go('menu.patientList');
		}
	}
	$scope.hideErrorMsg = function (id, key) {
      	if($scope.errors[key] && $scope.errors[key][id]) {
        	$scope.errors[key][id] = false;
      	}
    }
});