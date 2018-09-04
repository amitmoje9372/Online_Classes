// Create a Module
var app = angular.module('CalculatorApp',[]);

// Create a Controller
app.controller('CalculatorAppCtrl',function() {
    this.firstNumber = null;
    this.secondNumber = null;
    this.operator = '+';
    this.resultButton = 'RESULT';
    this.changeOperator = function(symbol) {
        this.operator = symbol;
    };
    this.calculate = function() {
        if(this.firstNumber !== null && this.secondNumber !== null){
            var num1 = this.firstNumber;
            var num2 = this.secondNumber;
            var opr = this.operator;
            var result = '';
            switch(opr){
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                default:
                    result = 'RESULT';
                    break;
            }
            this.resultButton = result;
        }
        else{
            this.resultButton = 'RESULT';
        }
    };
    this.clearAll = function() {
        this.firstNumber = null;
        this.secondNumber = null;
        this.operator = '+';
        this.resultButton = 'RESULT';
    };
});