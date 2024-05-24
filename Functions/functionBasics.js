function doNothing() { }
console.log(doNothing() === undefined); // true

//Note: objects and arrays are passed by references otherwise pass by value

let user = {
    name: "Sarthak",
    age: 20,
    printName: function () {
        console.log(this.name);
    }
}
user.printName();

//Constructor Function
function makeUser(name) {
    this.name = name;
}

let user1 = new makeUser("Leonardo");
let user2 = new makeUser("Brad");
console.log(user1.name);
console.log(user2.name);
console.log(user1.printName?.());

//recursive function
function fibo(num) {
    if (num == 1 || num == 2) return 1;
    return fibo(num - 1) + fibo(num - 2);
}

console.log(fibo(3));

//rest parameters -> function can be called with any number of arguments
function sum(a, b) {
    return a + b;
}

console.log(sum(1, 1, 1));

//spread syntax
function sumAll(...args) {
    let sum = 0;
    for (const arg of args) sum += arg;
    return sum;
}

console.log(sumAll(1, 1, 1));

const arr = [1, 1, 1];
console.log(sumAll(...arr));

const arrCopy = [...arr];

//counter object
function Counter(initial) {
    let cnt = initial;
    this.up = function () {
        return ++cnt;
    };
    this.down = function () {
        return --cnt;
    };
}

let counter = new Counter(0);
console.log(counter.up());

//IIFE
(function () {
    console.log("hello");
})();

//examples
const arr2 = [1, 2, 2, 3, 4, 4, 5, 6];
function inBetween(a, b) {
    return x => x >= a && x <= b;
}

function inArray(arr) {
    return x => arr.includes(x);
}

console.log(arr2.filter(inBetween(3, 6))); // [ 3, 4, 4, 5, 6 ]
console.log(arr2.filter(inArray([1, 2, 10]))); // [ 1, 2, 2 ]

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(fieldName) {
    return (lhs, rhs) => lhs[fieldName] < rhs[fieldName] ? -1 : 1;
}

users.sort(byField("age"));
console.log(users);