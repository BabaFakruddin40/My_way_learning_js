//Learning global context and hoisting in JavaScript

//Global context
var a = 10;
function foo() {
    console.log(a);
}
foo(); // Output: 10

//Hoisting - variables are hoisted to the top of their scope but not their assignments
console.log(b); // Output: undefined
var b = 20;

function bar() {
    console.log(c); // Output: undefined
    var c = 30;
}
bar();  
//Function hoisting - unlike variables, function declarations are hoisted to the top of their scope
tipper("100"); // Output: 105

function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}
 
//Function expression hoisting
bigTipper("200");

var bigTipper = function(a) {
    var bill = parseInt(a);
    console.log(bill + 15);
}

