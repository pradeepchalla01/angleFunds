angular.module('angleFunds')

.controller('MenuCtrl', function($log, $scope, $state, AuthService) {
	$log.debug('MenuCtrl controller entered');
	$scope.logout = function(){
		console.log('logout function');
		AuthService.logout();
	}
});