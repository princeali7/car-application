var artistControllers = angular.module('artistControllers', ['ngAnimate']);

artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/angular/data.json').success(function(data) {
    $scope.artists = data;
    $scope.artistOrder = 'name';
    $scope.location = "true";
    $scope.menulocation = ['/list', '/about', '/contact', '/details'];



  });
}]);

artistControllers.controller('HeaderController', ['$scope', '$http', function ($scope, $http) {
    $http.get('js/angular/data.json').success(function (data) {
        $scope.artists = data;
        $scope.artistOrder = 'name';
        $scope.location = "true";
        $scope.menulocation = ['/list', '/about', '/contact', '/details'];



    });
}]);


artistControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
    $http.get('js/angular/data.json').success(function (data) {
    $scope.artists = data;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.artists.length-1;
    }

    if ($routeParams.itemId < $scope.artists.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }

    });
  


}]);

artistControllers.controller('edmundsController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.media = 'http://media.ed.edmunds-media.com';
    $scope.video = 'video';
    $http.get('https://api.edmunds.com/api/vehicle/v2/styles/101353967?fmt=json&api_key=' + 'zwh9s2gtnwwkbcseq2fsrxvg').success(function (data) {
        $scope.cars = data;
    });
    $http.get('https://api.edmunds.com/v1/api/vehiclephoto/service/findphotosbystyleid?styleId=101395591&fmt=json&api_key=' + 'zwh9s2gtnwwkbcseq2fsrxvg').success(function (data) {
            $scope.carsphoto = data;
    
    });

    $scope.onlylargepic = function (pic) {
        var n = pic.search("1600.jpg");
        if (n>1)           
        {
     // console.log(pic);
            return true;
        } 
    else
    { return false;
    }
}



}]);

artistControllers.controller('CatalogController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.media = 'http://media.ed.edmunds-media.com';
    $http.get('https://api.edmunds.com/api/vehicle/v2/honda/pilot/2014/styles?state=used&category=4dr+SUV&view=full&fmt=json&api_key=zwh9s2gtnwwkbcseq2fsrxvg').success(function (data) {
        $scope.cars = data.styles;
    });
    $http.get('https://api.edmunds.com/v1/api/vehiclephoto/service/findphotosbystyleid?styleId=101395591&fmt=json&api_key=' + 'zwh9s2gtnwwkbcseq2fsrxvg').success(function (data) {
        $scope.carsphoto = data;

    });

    $scope.onlylargepic = function (pic) {


        var n = 'http://media.ed.edmunds-media.com';
        if (n > 1) {
            // console.log(pic);
            return n;

        }
        else {
            return false;
        }
    }



}]);


var AboutControllers = angular.module('AboutControllers', ['ngAnimate']);

AboutControllers.controller('AboutusController', ['$scope', '$http', function ($scope, $http) {
    $http.get('js/angular/data2.json').success(function (data) {
        $scope.info = data;
        $scope.location = false;
    });
}]);
