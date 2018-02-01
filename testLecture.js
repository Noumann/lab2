"use strict";
function echo(data) {
    return data;
}
console.log(echo("Test"));
console.log(echo("Test").length);
console.log(echo(22));
console.log(echo(22).length);
//T stands for any data type
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Test"));
console.log(betterEcho("Test").length);
console.log(betterEcho(22));
