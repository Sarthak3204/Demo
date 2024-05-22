let user = {
    name: "Sarthak",
    age: 20,
    printName: function() {
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
    this.up = function() {
        return ++cnt;
    };
    this.down = function() {
        return --cnt;
    };
}

let counter = new Counter(0);
console.log(counter.up());

//IIFE
(function() {
    console.log("hello");
})();