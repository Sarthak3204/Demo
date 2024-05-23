//Function Declaration
sayHi1(); // Hello
function sayHi1() {
    console.log("hello1");
}
//Function Expression
sayHi2(); // error
let sayHi2 = function() {
    console.log("hello2");
};
/*
Functions are values. They can be assigned, copied or declared in any place of the code.
Function Declarations are processed before the code block is executed. They are visible everywhere in the block
Function Expressions are created when the execution flow reaches them
*/