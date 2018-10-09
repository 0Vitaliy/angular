

	
var App = angular.module('httpExample', []);
  
  App.controller('FetchController', ['$scope','$http' ,
    function($scope, $http) {
      $scope.method = 'GET';
      $scope.url = 'https://demo4070131.mockable.io/product';

      $scope.fetch = function() {
        
    
       $http({method: $scope.method, url: $scope.url}).
          then(function(response) {
            $scope.status = response.status;
            $scope.products = response.data.products;
          });
      
      };
    }]);

