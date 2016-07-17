// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('angleFunds', ['ionic','onezone-datepicker', 'angular-storage'])

.run(function($ionicPlatform, $rootScope, store, $state, AuthService, $ionicLoading) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
  
  // Please look into this as it is showing maximum call stack size exceeded in console
  // Kick off user to home page if user data not exist
  /*$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    var user = AuthService.getCurrentUser();
    console.log(user);
    if(!user && (toState.name !== "signup")){
      event.preventDefault();
      $state.go('home');
    }
  });*/
  $rootScope.$on('showLoader', function(){
      $ionicLoading.show();
  });
  $rootScope.$on('hideLoader', function(){
      $ionicLoading.hide();
  });
})
.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $provide) {

  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'js/home/home.partial.html',
    controller: 'homeCtrl'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'js/signup/signup.partial.html',
    controller: 'signupCtrl'
  })
  .state('menu', {
    url: '/menu',
    abstract: true,
    templateUrl: 'js/user/menu.partial.html',
    controller: 'MenuCtrl'
  })

  .state('editPatient', {
    url: '/editPatient/:id',
    templateUrl: 'js/user/patients/editPatient.partial.html',
    controller: 'editPatientCtrl'
  })

  .state('editOrgPatient', {
    url: '/editOrgPatient/:id',
    templateUrl: 'js/user/patients/editPatientInformation.partial.html',
    controller: 'editOrgPatinetInfoCtrl'
  })

  .state('menu.newPatient', {
    url: '/newPatient',
    views: {
      'menuContent': {
        templateUrl: 'js/user/patients/newPatient.partial.html',
        controller: 'NewPatientCtrl'
      }
    }
  })

  .state('menu.patientList', {
    url: '/patientList',
    views: {
      'menuContent': {
        templateUrl: 'js/user/patients/patientList.partial.html',
        controller: 'PatientListCtrl'
      }
    }
  })
  .state('menu.fundPatients',{
    url: '/patientsSeekingFunds',
    views: {
      'menuContent': {
        templateUrl: 'js/user/patients/fundPatients.partial.html',
        controller: 'fundPatientsCtrl' 
      }
    }
  })

  .state('menu.approvedList',{
    url: '/approvedPatientList',
    views: {
      'menuContent': {
        templateUrl: 'js/user/patients/approvedPatients.partial.html',
        controller: 'approvedPatientsCtrl' 
      }
    }
  });
  

  $provide.factory('httpInterceptor', function($log, store, $rootScope, $q) {
          var numOfReqs = 0;
            return {
                'request': function(config) {
                    if(store){
                      config.headers['X-Auth-Token'] = store.get('token') || undefined;
                    }
                    numOfReqs++;
                    $rootScope.$broadcast('showLoader');
                    return config;
                },
                'requestError': function(config) {
                  numOfReqs--;
                  $rootScope.$broadcast('hideLoader');
                },
                'response': function(response){
                  numOfReqs--;
                  $rootScope.$broadcast('hideLoader');
                  return response;
                },
                'responseError': function(rejection) {
                  numOfReqs--;
                  $rootScope.$broadcast('hideLoader');
                }
            };
        });
        $httpProvider.interceptors.push('httpInterceptor');


  $urlRouterProvider.otherwise(function ($injector, $location) {
    var $state = $injector.get("$state");
    $state.go("home");
  });
  
});
