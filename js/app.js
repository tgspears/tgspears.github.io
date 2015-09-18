var portfolioApp = angular.module('PortfolioApp', ['ngAnimate','ngRoute']);

portfolioApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'views/mainView.html',
      controller: 'mainController'
    })
    .when('/about', {
    	templateUrl: 'views/aboutView.html',
    	controller: 'mainController'
    })
    .when('/resume', {
    	templateUrl: 'views/resumeView.html',
    	controller: 'mainController'
    })
    .otherwise({
      templateUrl: 'views/404.html'
    })

  $locationProvider.hashPrefix('!')

}]);

portfolioApp.controller('mainController',['$scope',function($scope){

}]);