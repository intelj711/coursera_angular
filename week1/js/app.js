(function() {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('lunchCheckController', ['$scope', lunchCheckController]);

  function lunchCheckController ($scope){
    $scope.content = "Input Here";
    $scope.result = "";
    $scope.judge = function() {
      $scope.result = judger($scope.content);
    }
  };

  function judger(string) {
    if(string)
    {
      let length = string.split(",").length;
      console.log(length);
      if (length > 3) return "Too Much!";
      if ((length <= 3) && (length > 0)) return "Enjoy!";
    }
    else return "Empty!";
  }

})();
