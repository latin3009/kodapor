'use strict';




// define angular module/app
// create angular controller and pass in $scope and $http





var formApp = computenzControllers.controller('editProfileCtrl', ['$scope','$http','UserService', function($scope,$http,UserService) {
  // create a blank object to hold our form information
 // $scope will allow this to pass between controller and view



//get profile to edit
var destination = decodeURIComponent(window.location.href.split('/').pop());
  if (destination == "myprofile") {
    $scope.user = UserService.getUser();
 
  }
  else {
    $scope.user = CacheService.getProfile(destination);
  }

  /////////
  

 
  // process the form
    
    $scope.putTestPerson = function() {
             $http({
        method  : 'POST',
        url     : 'php/profile',
        data    : $.param($scope.user),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
        })
        .success(function(data) {
           

            if (!data.success) {
              // if not successful, bind errors to error variables
                $scope.errorName = data.errors.name;
                $scope.errorSuperhero = data.errors.superheroAlias;
            } else {
              // if successful, bind success message to message
                $scope.message = data.message;
            }
         });
         $http.post('process.php', $scope.user)
      .success(function(data) {
      
    });

       };



 

}]);