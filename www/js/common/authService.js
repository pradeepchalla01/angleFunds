'use strict';
angular.module('angleFunds')
.factory('AuthService', function($log, $http, CONSTANTS, QueryService) {
    $log.debug('auth service entered');
    var _user = null;
    var _authService = {
        signup: function(data) {
            var method = 'POST';
            var url = '/auth/signup';
            QueryService.query(method, url, null, data).then(function(result){
                console.log(result);
                return result;
            });
        },
        login: function(data) {
            var method = 'POST';
            var url = '/login';
            return QueryService.query(method, url, null, data).then(function(result){
                return result.data;
            });
        }
    };

    return _authService;
});
