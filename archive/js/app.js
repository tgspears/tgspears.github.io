var portfolioApp = angular.module('PortfolioApp', ['ngAnimate','ngRoute']);

portfolioApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'views/mainView.html',
      controller: 'mainController'
    })
    .when('/contact', {
    	templateUrl: 'views/contact.html',
    	controller: 'mainController'
    })
    .when('/work', {
      templateUrl: 'views/work.html',
      controller: 'mainController'
    })
    .otherwise({
      templateUrl: 'views/404.html'
    });

  $locationProvider.hashPrefix('!')

}]);

portfolioApp.controller('mainController', ['$scope', function($scope){

  

}]);