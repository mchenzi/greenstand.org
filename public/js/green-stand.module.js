angular.module("green-stand", ['ngRoute'])
  .config(Router)

Router.$inject = ["$routeProvider"]

function Router ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl : '/html/home.html',
      controller : 'mainController',
      controllerAs : 'main'
    })
    .when('/about', {
      templateUrl : '/html/about.html',
      controller : 'mainController',
      controllerAs : 'main'
    })
    .when('/tree-tracker', {
      templateUrl : '/html/tree-tracker.html',
      controller : 'treeTrackerController',
      controllerAs : 'treeTracker'
    })
    .when('/get-involved', {
      templateUrl : '/html/get-involved.html',
      controller : 'getInvolvedController',
      controllerAs : 'getInvolved'
    })
    .when('/cms', {
      templateUrl : '/html/cms.html',
      controller : 'cmsController',
      controllerAs : 'cms'
    })
    .otherwise({
      redirectTo: '/'
    });
}
