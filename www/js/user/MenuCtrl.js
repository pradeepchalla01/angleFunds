angular.module('angleFunds')

.controller('MenuCtrl', function($log, $scope, $state) {
	$log.debug('MenuCtrl controller entered');
	$scope.logout = function(){
		console.log('logout function');
		$state.go('login');
	}
});