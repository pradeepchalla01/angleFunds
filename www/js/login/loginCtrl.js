angular.module('angleFunds')

.controller('LoginCtrl', function($log, $scope, $state) {
	$log.debug('login controller entered');
	$scope.login = function(){
		console.log('login function');
		$state.go('menu.patientList');
	}
});