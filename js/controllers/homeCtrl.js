'use strict';

computenzControllers.controller('HomeCtrl', ['$scope','$http', 'LoginService', function($scope,$http,LoginService) {

$scope.sendForm = LoginService.sendForm;

  $(document).on("click",".flip", function () {
    $(this).find('.card').addClass('flipped').mouseleave(function(){
        $(this).removeClass('flipped');
    });
    return false;
  });
  
}]);