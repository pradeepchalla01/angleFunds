'use strict';
angular.module('angleFunds')
.factory('AuthService', function($httpParamSerializerJQLike, $log, $http, CONSTANTS, QueryService, $state, store) {
    $log.debug('auth service entered');
    var _user = null;
    var _authService = {
        signup: function(data) {
            var method = 'POST';
            var url = '/registration';
            QueryService.query(method, url, null, data).then(function(result){
                console.log(result);
                return result;
            });
        },
        login: function(data) {
            return QueryService.query(CONSTANTS.METHOD_POST, '/login', null, $httpParamSerializerJQLike(data)).then(function(result){
                store.set('accountType', data.type);
                store.set('currentUser', result.data);
                return result;
            });
        },

        getCurrentUser: function(){
            if(store.get('currentUser')){
                return store.get('currentUser').data;
            } else {
                return null;
            }
        },

        getAccountType: function(){
            return store.get('accountType');
        },

        logout: function(){
            //remove all data from store when logging out by adding below.
            store.remove('currentUser');
            store.remove('accountType');
            $state.go('home');
        }
    };

    return _authService;
});
