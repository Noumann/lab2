"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myClass = /** @class */ (function () {
    function myClass() {
        this.tasks = [];
        //tasks=[];
    }
    //tasks: Array<string>=[];
    myClass.prototype.addTask = function (task) {
        var count;
        //adding a string into the array
        this.tasks.push(task);
        //number or items in array
        count = this.tasks.length;
        //console.log("Length of the array is : "+count);
        //returning the number of items in an array
        return count;
    };
    myClass.prototype.allTasks = function () {
        this.tasks.forEach(function (task) { console.log(task); });
    };
    myClass.prototype.deleteTasks = function (task) {
        var key = task;
        var index = this.tasks.indexOf(key, 0);
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
        return this.tasks.length;
    };
    return myClass;
}());
