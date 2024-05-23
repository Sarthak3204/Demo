//String conversion
let val = 2;
console.log(typeof(val));

val = String(val);
console.log(typeof(val));

//Numeric conversion
val = Number(val);
console.log(typeof(val));

//Boolean conversion
val = Boolean(val);
console.log(typeof(val));

/*
Note:
In numeric conversion

undefined -> NaN
null -> 0
true and false -> 1 and 0
string -> whitespaces(space, \n, \t) are removed. If string is empty then 0 

In Boolean conversion
0, null, undefined, NaN, "" -> false
other -> true (even " " is true)
*/
console.log(Boolean(" "));