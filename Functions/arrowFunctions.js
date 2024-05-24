let sum = (a, b) => a + b;
console.log(sum(2, 3));

let sumAll = (...args) => {
    let res = 0;
    for (const arg of args) res += arg;
    return res;
}
console.log(sumAll(1, 2, 3));

//Differnce between arrow function and regular function

//1) this

const obj = {
    value: 42,
    regularFunction: function () {
        console.log(this.value);
    },
    arrowFunction: () => {
        console.log(this.value);
    }
};
obj.regularFunction(); // 42
obj.arrowFunction(); // undefined, because `this` refers to the global object 

//2) Regular functions can be used as constructors and called with the new keyword while arrow functions cannot
function makeUser1(name) {
    this.name = name;
}
const user1 = new makeUser1("Sarthak");
console.log(user1.name); // Sarthak

// const makeUser2 = (name) => {
//     this.name = name;
// };
// const user2 = new makeUser2('John');

//3) Regular functions have access to the arguments object
function regularFunction() {
    console.log(arguments);
}
regularFunction(1, 2, 3); // [1, 2, 3]

// const arrowFunction = () => {
//     console.log(arguments);
// };
// arrowFunction(1, 2, 3); // ReferenceError: arguments is not defined