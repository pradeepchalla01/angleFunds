'use strict';
angular.module('angleFunds')
.factory('QueryService', function($log, $http, CONSTANTS, $q) {
    $log.debug('Query service entered');
    var _queryservice = {
      query: query
    };
    return _queryservice;

    //////////////// definition
    function query(method, url, params, data) {
      var deferred = $q.defer();
      $http({
        method: method,
        url: CONSTANTS.API_URL + url,
        params: params,
        data: data
      }).then(function(data) {
        if (!data.config) {
          console.log('Server error occured.');
        }
        deferred.resolve(data);
      }, function(error) {
        deferred.reject(error);
      });

      return deferred.promise;
    }
});
