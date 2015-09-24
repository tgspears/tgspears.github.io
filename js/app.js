var portfolioApp = angular.module('PortfolioApp', ['ngAnimate','ngRoute']);

portfolioApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'views/mainView.html',
      controller: 'mainController'
    })
    .when('/resume', {
    	templateUrl: 'views/resumeView.html',
    	controller: 'mainController'
    })
    .when('/ant', {
      templateUrl: 'views/antView.html',
      controller: 'mainController'
    })
    .otherwise({
      templateUrl: 'views/404.html'
    });

  $locationProvider.hashPrefix('!')

}]);

portfolioApp.controller('mainController', ['$scope', function($scope){

  // INITIALIZE

  $scope.gameBoard = 
  [ [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], ];

  // Default starting position
  $scope.position = {"x":13,"y":13};

  var direction = "Up";

  $scope.play = function(iterations){

    var nextDirection = function(previousDirection){
      // If current position is an odd integer, turn right
      if ($scope.gameBoard[$scope.position.x][$scope.position.y] % 2 > 0) {

        switch (direction) {

          case "Up":
            direction = "Right";
            break;

          case "Right":
            direction = "Down";
            break;

          case "Down":
            direction = "Left";
            break;

          case "Left":
            direction = "Up";
            break;

          default:
            alert("Next Direction:right failure")
            break;

        }
      }
      // If current position is an even integer or 0, turn left
      else if ($scope.gameBoard[$scope.position.x][$scope.position.y] % 2 === 0) {

        switch (direction) {

          case "Up":
            direction = "Left";
            break;

          case "Right":
            direction = "Up";
            break;

          case "Down":
            direction = "Right";
            break;

          case "Left":
            direction = "Down";
            break;

          default:
            alert("Next Direction:left failure")
            break;

        }

      }
      // If neither an odd nor even integer, something broke
      else {
        alert("Next Direction function failure")
      }
    }

    // Changes the value of the tile the ant is leaving
    var leaveTile = function(){
      $scope.gameBoard[$scope.position.x][$scope.position.y] -= 2;

      // Toggle value for tile after ant has vacated, 0 -> 1, 1 -> 0
      if ($scope.gameBoard[$scope.position.x][$scope.position.y] === 0) {
        $scope.gameBoard[$scope.position.x][$scope.position.y] += 1
      }
      else if ($scope.gameBoard[$scope.position.x][$scope.position.y] === 1) {
        $scope.gameBoard[$scope.position.x][$scope.position.y] -= 1;
      }
      // Catches unexpected game board values
      else {
        alert('Leave Tile function failure');
      }
    }

    var moveUp = function(){
      $scope.gameBoard[$scope.position.x - 1][$scope.position.y] += 2;
      leaveTile();
      $scope.position.x -= 1;
      nextDirection("Up");
    }

    var moveRight = function(){
      $scope.gameBoard[$scope.position.x][$scope.position.y + 1] += 2;
      leaveTile();
      $scope.position.y += 1;
      nextDirection("Right");
    }

    var moveDown = function(){
      $scope.gameBoard[$scope.position.x + 1][$scope.position.y] += 2;
      leaveTile();
      $scope.position.x += 1;
      nextDirection("Down");
    }

    var moveLeft = function(){
      $scope.gameBoard[$scope.position.x][$scope.position.y - 1] += 2;
      leaveTile();
      $scope.position.y -= 1;
      nextDirection("Left");
    }

    for(i=0;i<iterations.count;i++){

      switch (direction) {

        case "Up":
          moveUp();
          break;

        case "Right":
          moveRight();
          break;

        case "Down":
          moveDown();
          break;

        case "Left":
          moveLeft();
          break;

        // If there isn't a direction already, default to Up
        default:
          direction = "Up";
          moveUp();
          break;

      }

    }

  }

}]);