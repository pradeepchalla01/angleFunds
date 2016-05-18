angular.module('angleFunds')

.controller('LoginCtrl', function($log, $scope, $state) {
	$log.debug('login controller entered');
	$scope.errors = {};
    $scope.login = {};
	$scope.login = function(){
		$scope.errors.login = {};
		if(!$scope.login.userName){
			$scope.errors.login.userName = 'Please Enter user Name or Email';
		}
		if(!$scope.login.password){
			$scope.errors.login.password = 'Please Enter Password';
		}
		console.log('login function');
		if(angular.equals({}, $scope.errors.login)) {
			$state.go('menu.patientList');
		}
	}
	$scope.hideErrorMsg = function (id, key) {
      	if($scope.errors[key] && $scope.errors[key][id]) {
        	$scope.errors[key][id] = false;
      	}
    }
});