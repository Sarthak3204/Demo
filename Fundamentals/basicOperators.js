// Note: If any of the operands is string then the other one is converted to string

console.log(2 + 2 + "1"); // 41
console.log("1" + 2 + 2); // 122
console.log(6 - "2"); // 4

// + unary plus converts to number

let x = "2";
let y = "3";
console.log(x + y); // 23
console.log(+x + +y); // 5

// Pre and Post increment operator, bitwise

/*
"" + 1 + 0 = "10" 
"" - 1 + 0 = -1 
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" 
"  -9  " - 5 = -14 
null + 1 = 1 
undefined + 1 = NaN 
" \t \n" - 2 = -2 
*/