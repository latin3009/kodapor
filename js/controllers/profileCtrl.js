'use strict';

computenzControllers.controller('ProfileCtrl', ['$scope','$http','$location','$routeParams','UserService','CacheService',function($scope,$http,$location,$routeParams,UserService,CacheService) {
  
  // sending my data of my profile to dom
  var destination = decodeURIComponent(window.location.href.split('/').pop());
  if (destination == "myprofile") {
    $scope.user = UserService.getUser();
   
  }
  else {
    $scope.user = CacheService.getProfile(destination);
  }

// button to send  the user to edit profile
  $scope.edit = function(){
    $location.path('profile/edit/'+UserService.getUsername());
  };

}]);