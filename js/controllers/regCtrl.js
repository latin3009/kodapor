'use strict';

computenzControllers.controller('RegCtrl', ['$scope','$http', 'UserService', function($scope,$http, UserService) {

  $scope.user={};

  var testData ={};
  // For getting current users registration data. We don't have routing for this yet, since user now only get to registration view
  // through login view when not logged in. 
 

  function getUserAccount(username){
    $http({
      url:'php/user_person/' + username,
      method: 'GET',
      headers : {
        'Content-Type' : 'application/json; charset=UTF-8'
      }
    }).success(function(data){
      // Display data
      $scope.userData = data;
    });
  }

  $scope.save = function() {
    testData = $scope.user;
    handlePerson('POST', testData);
  };
  function handlePerson(method, data) {

    console.log(data);
    //Add person to database!
    $http({
      url:'php/user_person/' + testData.username,
      method: method,
      data: data,
      headers : {
        'Content-Type' : 'application/json; charset=UTF-8'
      }
    }).success(function(data){
      $scope.res = getUserAccount(testData.username);
     
    });
  }


}]);

/*
 $scope.patchTestPerson = function(){
    var testData = {
      "email": "carl@wallin-andersen.se",
      "firstname": "Carl",
      "lastname": "von Wallin-Andersén",
    };
    handleTestPerson('PATCH', testData);
  };

  //UPDATE - method: PUT
  $scope.putTestPerson = function(){
    var testData = {
      "username": "KalleAndersson",
      "email": "carl@wallin-andersen.se",
      "firstname": "Carl",
      "lastname": "von Wallin-Andersén",
    };
    handleTestPerson('PUT', testData);
  };
  //DELETE - method: DELETE
  $scope.deleteTestPerson = function(){
    handleTestPerson('DELETE');
  };

  */

