// Create a Module
var app = angular.module('ClockApp',[]);

// Create a Controller
app.controller('ClockAppCtrl',function($scope,$interval) {

    $scope.indianClock = function() {
        var today = new Date();
        var options = {timeZone :'Asia/Kolkata'};
        $scope.indianTime = today.toLocaleTimeString('en-US',options);
        $scope.indiaDate = today.toLocaleDateString('en-US',options);
    };
    $interval($scope.indianClock,1000);

    $scope.USAClock = function() {
        var today = new Date();
        var options = {timeZone :'America/New_York'};
        $scope.USATime = today.toLocaleTimeString('en-US',options);
        $scope.USADate = today.toLocaleDateString('en-US',options);
    };
    $interval($scope.USAClock,1000);

    $scope.ChinaClock = function() {
        var today = new Date();
        var options = {timeZone :'America/New_York'};
        $scope.chinaTime = today.toLocaleTimeString('en-US',options);
        $scope.chinaDate = today.toLocaleDateString('en-US',options);
    };
    $interval($scope.ChinaClock,1000);
});