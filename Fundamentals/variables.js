/*
let : modern variable declaration.

var : no scope block,
tolerates redeclarations, 
can be declared below their use (hoisting -> variables are raised or hoisted to the top of the function)
declarations are hoisted but assignments are not

const : like let but value cant be changed
*/
function sayHi() {
    console.log(phrase);//undefined
    var phrase = "Hello";
}
sayHi();