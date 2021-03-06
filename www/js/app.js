// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngResource', 'starter.controllers', 'starter.directives', 'starter.services', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.news', {
      url: "/news",
      views: {
        'menuContent' :{
          templateUrl: "templates/news.html"
        }
      }
    })
    .state('app.map', {
      url: "/map",
      views: {
        'menuContent' :{
          templateUrl: "templates/map.html",
          controller: 'MapCtrl'
        }
      }
    })
    .state('app.firmlists', {
      url: "/firmlists",
      views: {
        'menuContent' :{
          templateUrl: "templates/firmlists.html",
          controller: 'FirmlistsCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/firmlists/:firmlistId",
      views: {
        'menuContent' :{
          templateUrl: "templates/firmlist.html",
          /*resolve:{
            firmlistId: ['$stateParams', function($stateParams){
              return $stateParams.firmlistId;
            }]
          },*/
          controller: 'FirmlistCtrl'
        }
      }
    })
    .state('app.singlemap', {
      url: "/firmlists/:firmlistId/singlemap",
      views: {
        'menuContent' :{
          templateUrl: "templates/singlemap.html",
          controller: 'SingleMapCtrl'
        }
      }
    })
    ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/firmlists');
});