'use strict';
angular.module('angleFunds')
.factory('commonService', function($log, $http, QueryService, CONSTANTS, $q, $httpParamSerializerJQLike) {
    $log.debug('Home service entered');
    var _commonservice = {
      getMasterData: getMasterData
    };
    return _commonservice;

    //////////////// definition
    function getMasterData(AccountType){
      var params = {
        type: AccountType
      }
      return QueryService.query(CONSTANTS.METHOD_POST, '/masterdata', null, $httpParamSerializerJQLike(params))
      .then(function(result){
          return result.data;
        });
    }
});
