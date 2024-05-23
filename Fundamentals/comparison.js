/*
Note when comparing (> >= < <=) values JS converts the values to numbers (null -> 0 undefined -> NaN)
However there is no such conversion with == in case of null or undefined
=== strict equality doesn't convert type 
*/

let res = 'a' > 'A';
console.log(res);//true according to ASCII value

/*
String Comparison
matches character by character make decision when different
if lengths are equal then return equal otherwise the one with greater length in greater
*/

console.log("02" > 1); // true
console.log("0" == false); // true

console.log(null == undefined); // true     
console.log(null === undefined); // false

console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined > 0);  // false
console.log(undefined == 0); // false
console.log(undefined < 0); // false