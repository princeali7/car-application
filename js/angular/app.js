var myApp = angular.module('myApp', [
  'ngRoute',
  'artistControllers', 'AboutControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'ListController'
  }).
  when('/details/:itemId', {
    templateUrl: 'partials/details.html',
    controller: 'DetailsController'
  }).
  when('/cars', {
      templateUrl: 'partials/cars.html',
      controller: 'edmundsController'
  }).
  when('/catalog', {
      templateUrl: 'partials/Catalog.html',
      controller: 'CatalogController'
  }).
  when('/about', {
      templateUrl: 'partials/about-us.html',
      controller: 'AboutusController'
  }).
  when('/slider', {
      templateUrl: 'partials/slider.html',
      controller: 'AboutusController'
  }).
      otherwise({
    redirectTo: '/list'
  });
}]);