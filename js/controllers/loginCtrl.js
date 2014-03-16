'use strict';

// Controller for login view 
computenzControllers.controller('LoginCtrl', ['$scope','$http','$location', 'UserService', 'LoginService',
  function($scope,$http,$location,UserService,LoginService) {

    $scope.sendForm = LoginService.sendForm;

    (function(){

      $http.get('php/testusers/', {
        headers : {
          'Content-Type' : 'application/json; charset=UTF-8'
        }
      }).success(function(data){
        $scope.testPersons = data.splice(0,5);
        $scope.testCompanies = data;
      });
    }());

}]);