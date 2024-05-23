/*
find first truthy value else return last value
result = value1 || value2 || value3;
*/

//Short circuit evaluation
false || console.log("running");

/*
find first falsy value else return last value
result = value1 && value2 && value3;
*/

//Short circuit evaluation
true && console.log("running");

//The precedence of AND && operator is higher than OR ||
//!! Converting a value to boolean type