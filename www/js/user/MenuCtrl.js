angular.module('angleFunds')

.controller('MenuCtrl', function($log, $scope, $state, CONSTANTS) {
	$log.debug('MenuCtrl controller entered');
	$scope.logout = function(){
		console.log('logout function');
		$state.go('home');
	}
});