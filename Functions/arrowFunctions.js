let sum = (a, b) => a + b;
console.log(sum(2, 3));

let sumAll = (...args) => {
    let res = 0;
    for (const arg of args) res += arg;
    return res;
}
console.log(sumAll(1, 2, 3));