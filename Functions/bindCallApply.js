/*
The bind method creates a new function that, when called, has its this value set to the provided value
The bind method does not immediately invoke the function; it returns a new function with the specified this value
*/
const obj = {
  value: 10,
  getValue: function () {
    return this.value;
  }
};

const unBindGetValue = obj.getValue;
console.log(unBindGetValue()); // undefined

const bindGetValue = obj.getValue.bind(obj);
console.log(bindGetValue()); // 10

/*
The call method calls a function with a given this value and arguments provided individually
Unlike bind, call immediately invokes the function with the specified this value and arguments
*/

function sayHi(greeting) {
  console.log(greeting + " " + this.name);
}

const user = {
  name: "Sarthak"
};

sayHi.call(user, "Hello"); // "Hello Sarthak"

/*
The apply method is similar to call, but it takes an array of arguments 
*/