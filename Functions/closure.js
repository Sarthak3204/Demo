//Nested Functions
function outerFunction(outerVariable) {
  const anotherVarible = "Hi";
  return function innerFunction(innerVariable) {
    console.log("Outer Variable: " + outerVariable);
    console.log("Inner Variable: " + innerVariable);
    console.log(anotherVarible);
  }
}
const newFunction = outerFunction("outside");
newFunction("inside");
/*
Closure: When you have a function defined inside of another function, that inner function has access to the variables and scope of the outer function even if the outer function finishes executing and those variables are no longer accessible outside of that function

Lexical Environment: every running function, code block {...}, and the script as a whole have an internal (hidden) associated object known as the Lexical Environment.
It consists of 2 parts:
1) Environment Record – an object that stores all local variables as its properties
2) A reference to the outer lexical environment, the one associated with the outer code
*/

let x = 1;
function func() {
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 2;
}

func();
/*
Hoisting is the default behavior in JavaScript where declarations of variables and functions are moved to the top of their respective scopes.
Declarations are hoisted, not initializations
Allows calling functions before their declarations 
All variable and function declarations are processed before any code execution
var -> function scoped and intialized with undefined
*/