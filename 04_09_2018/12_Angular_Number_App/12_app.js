// Create a Module
var app = angular.module('NumberApp',[]);

// Create a Controller
app.controller('NumberAppCtrl',function() {
    this.number = null;
    this.messageStr = '';
    this.numberArray = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
    this.getStrNumber = function () {
        var tempStr = '';
        if(this.number !== undefined){
            var numberStr = this.number.toString();
            for(var i=0; i<numberStr.length; i++){
                var index = parseInt(numberStr.charAt(i));
                tempStr += this.numberArray[index] + " ";
            }
            this.messageStr = tempStr;
        }
        else{
            this.messageStr = '';
        }
    };
});

app.directive('numbersOnly', function() {
    var directive = {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9-]/g, '');
                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }

    };
    return directive;
});