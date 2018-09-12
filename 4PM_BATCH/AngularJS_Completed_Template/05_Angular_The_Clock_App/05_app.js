// Create a Module
var app = angular.module('ClockApp',[]);

// Create a Controller
app.controller('ClockAppCtrl',function($scope,$interval) {

    // Create Indian Clock Function
    $scope.indianClock = function () {
      var today = new Date();
      var options = {timeZone :'Asia/Kolkata'};
      $scope.indianTime = today.toLocaleTimeString('en-US',options);
      $scope.indianDate = today.toLocaleDateString('en-US',options);
    };

    // Call IndianClock Function
    $interval($scope.indianClock,1000);

    // Create USA Clock Function
    $scope.USAClock = function () {
        var today = new Date();
        var options = {timeZone :'America/New_York'};
        $scope.USATime = today.toLocaleTimeString('en-US',options);
        $scope.USADate = today.toLocaleDateString('en-US',options);
    };

    // Call USAClock Function
    $interval($scope.USAClock,1000);

    // Create China Clock Function
    $scope.ChinaClock = function () {
        var today = new Date();
        var options = {timeZone :'Asia/Shanghai'};
        $scope.ChinaTime = today.toLocaleTimeString('en-US',options);
        $scope.ChinaDate = today.toLocaleDateString('en-US',options);
    };

    // Call ChinaClock Function
    $interval($scope.ChinaClock,1000);

});