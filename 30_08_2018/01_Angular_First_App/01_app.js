// Create a Module
var app = angular.module('GreetApp',[]);

// Create a Controller
app.controller('GreetAppCtrl',function($scope) {
    $scope.time = null;
    $scope.greetMsg = '';
    $scope.displayGreet = function() {
        if($scope.time === null){
            $scope.greetMsg = '';
        }
        else if($scope.time <= 12){
            $scope.greetMsg = 'Good Morning';
        }
        else if($scope.time > 12 && $scope.time <= 17){
            $scope.greetMsg = 'Good Afternoon';
        }
        else if($scope.time > 17 && $scope.time <= 24){
            $scope.greetMsg = 'Good Evening';
        }
        else{
            $scope.greetMsg = 'Please enter proper time';
        }
    };
});