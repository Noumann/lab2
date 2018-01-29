"use strict";
//creating an array of type string
var tasks = [];
//function that take string and return number
function addTask(task) {
    var count;
    //adding a string into the array
    tasks.push(task);
    //number or items in array
    count = tasks.length;
    //console.log("Length of the array is : "+count);
    //returning the number of items in an array
    return count;
}
function allTasks() {
    tasks.forEach(function (task) { console.log(task); });
}
function deleteTasks(task) {
    var key = task;
    var index = tasks.indexOf(key, 0);
    if (index > -1) {
        tasks.splice(index, 1);
    }
    return tasks.length;
}
addTask("1");
addTask("2");
addTask("3");
addTask("4");
deleteTasks("4");
allTasks();
