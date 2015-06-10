var portfolioApp = angular.module('PortfolioApp', ['ngAnimate','ngRoute']);

var adjuster = function() {
    var screenHeight = $(window).height() - 50;
    var screenWidth = $(window).width() - 50;
    if (screenHeight < screenWidth) {
      $('.box').height(screenHeight);
      $('#errthing').css({ width : screenHeight, marginLeft : ((screenWidth - screenHeight)/2) , marginTop : 25 + 'px' });
      $('#name').css({ fontSize : screenHeight/7, top : screenHeight/6 });
      $('.secondLevel').css({ fontSize : screenHeight/12 });
      $('#title').css({ top : screenHeight/4.5 });
      $('#role').css({ top : screenHeight/4.3 });
      $('#email').css({ top : screenHeight/4.1 });
      $('.thirdLevel').css({ top : screenHeight/1.1, fontSize : screenHeight/18 });
      $('#works').css({ left : screenHeight/1.3 });
      $('#pipe').css({ left : screenHeight/1.35 });
      $('#resume').css({ left : screenHeight/1.65 });
      $('#github').css({ left : screenHeight/25 });
      $('#pipeTwo').css({ left : screenHeight/6.7 });
      $('#linkedin').css({ left : screenHeight/5.6 });
      $('.demoDiv').css({ width : screenHeight/1.5, height : screenHeight/4, fontSize : screenHeight/16 });
      $('.demoImg').css({ height : screenHeight/5 });
      $('#tblDesc').css({ fontSize : screenHeight/24 });
      $('#daysieDesc').css({ fontSize : screenHeight/24 });
      $('#rexDesc').css({ fontSize : screenHeight/24 });
    }
    else {
      $('.box').height(screenWidth);
      $('#errthing').css({ width : screenWidth, marginTop : ((screenHeight - screenWidth)/2), marginLeft : 25 + 'px' });
      $('#name').css({ fontSize : screenWidth/7, top : screenWidth/6 })
      $('.secondLevel').css({ fontSize : screenWidth/12 });
      $('#title').css({ top : screenWidth/4.5 });
      $('#role').css({ top : screenWidth/4.3 });
      $('#email').css({ top : screenWidth/4.1 });
      $('.thirdLevel').css({ top : screenWidth/1.1, fontSize : screenWidth/18 });
      $('#works').css({ left : screenWidth/1.3 });
      $('#pipe').css({ left : screenWidth/1.35 });
      $('#resume').css({ left : screenWidth/1.65 });
      $('#github').css({ left : screenWidth/25 });
      $('#pipeTwo').css({ left : screenWidth/6.7 });
      $('#linkedin').css({ left : screenWidth/5.6 });
      $('.demoDiv').css({ width : screenWidth/1.5, height : screenWidth/4, fontSize : screenWidth/16 });
      $('.demoImg').css({ height : screenWidth/5 });
      $('#tblDesc').css({ fontSize : screenWidth/24 });
      $('#daysieDesc').css({ fontSize : screenWidth/24 });
      $('#rexDesc').css({ fontSize : screenWidth/24 });
    }
  }


portfolioApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'slides/backView.html',
      controller: 'backController'
    })
    .when('/flip', {
      templateUrl: 'slides/cardView.html',
      controller: 'cardController'
    })
    .when('/recent', {
      templateUrl: 'slides/recentView.html',
      controller: 'recentController'
    })
    .otherwise( {
      templateUrl: 'slides/cardView.html',
      controller: '404Controller'
    })

    $locationProvider.hashPrefix('!')

}]);

portfolioApp.controller('backController',['$scope',function($scope){
  adjuster();
}]);

portfolioApp.controller('cardController',['$scope',function($scope){
  adjuster();
}]);

portfolioApp.controller('recentController',['$scope',function($scope){
  adjuster();
}])

portfolioApp.controller('404Controller', ['$scope', function($scope) {
  adjuster();
}]);