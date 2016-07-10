angular.module('angleFunds')

.controller('homeCtrl', function($log, $ionicModal, $scope, $rootScope, $state, AuthService) {
	$log.debug('home controller entered');
	$scope.loginData = {};
	$scope.errors = {};
	$ionicModal.fromTemplateUrl('js/home/login.partial.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.loginModal = modal;
	});
	$scope.openLoginModal = function(loginType) {
		$rootScope.loginType = loginType;
		$scope.loginModal.show();
	};
	$scope.closeLoginModal = function(){
		$scope.errors = {};
		$scope.loginData = {};
		$scope.loginModal.hide();	
	}
	$scope.signup = function(){
		$scope.closeLoginModal();
		$state.go('signup');
	}
	$scope.login = function(){
		$log.debug('home controller entered');		
		$scope.errors.login = {};
		if(!$scope.loginData.username){
			$scope.errors.login.username = 'Please Enter user Name or Email';
		}
		if(!$scope.loginData.password){
			$scope.errors.login.password = 'Please Enter Password';
		}
		console.log('login function');
		if(angular.equals({}, $scope.errors.login)) {
			$scope.loginData.type = $scope.loginType;
			//AuthService.login($scope.loginData).then(function(result){
				//console.log(result);
				//if(result.status === 1){
					$scope.closeLoginModal();
					if($scope.loginType === 'hospital'){
						$state.go('menu.patientList');
					}
					else if($scope.loginType === 'org'){
						$state.go('menu.fundPatients');
					}	
				//} else {
				//	$scope.errors.login.password = result.message[1];
				//}
			//});
			
		}
	}
	$scope.hideErrorMsg = function (id, key) {
      	if($scope.errors[key] && $scope.errors[key][id]) {
        	$scope.errors[key][id] = false;
      	}
    }
});