// Create a Module
var app = angular.module('GoodMorningApp',[]);

// Create a Controller
app.controller('GoodMorningAppCtrl',function() {
    this.name = '';
    this.times = null;
    this.timesArray = [];
    this.captureTimes = function() {
        if(this.times !== null){
            this.timesArray = [];
            for(i = 0; i< this.times; i++){
                this.timesArray[i] = (i+1);
            }
        }
        else{
            this.timesArray = [];
        }
    };
});