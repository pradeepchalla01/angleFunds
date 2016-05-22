// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('angleFunds', ['ionic'])

.run(function($ionicPlatform) {
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
})
.config(function ($stateProvider, $urlRouterProvider) {
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

  .state('patientEdit', {
    url: '/patientEdit',
    templateUrl: 'js/user/patients/patientEdit.partial.html',
    controller: 'PatientListCtrl'
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
  });
  
  // Thanks to Ben Noblet!
  $urlRouterProvider.otherwise(function ($injector, $location) {
    var $state = $injector.get("$state");
    $state.go("home");
  });
});
