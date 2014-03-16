'use strict';

computenzControllers.controller('ShowAdController', ['$scope','CacheService', function($scope,CacheService) {

  var currentAd = window.location.href.split('/').pop();
  $scope.currentAd = CacheService.getAdvertisement(currentAd);

}]);