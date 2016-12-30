angular
  .module('alurapic', ['alurapicDirective', 'ngAnimate', 'ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when('/photos', {
      templateUrl: 'partials/photos/index.html',
      controller: 'PhotosController'
    });

    $routeProvider.when('/photos/new', {
      templateUrl: 'partials/photos/new.html',
    });

    $routeProvider.otherwise({ redirectTo: '/photos' });
  });