// HOFs can accept functions as arguments and even return functions as results
const arr = [1, 2, 3, 4, 5];
console.log(arr); // [1, 2, 3, 4, 5]

// map -> to transform an array
const result1 = arr.map(num => num += 10);
console.log(result1); // [11, 12, 13, 14, 15]

// filter -> to select subset of data
const result2 = arr.filter(num => (num % 2) === 1);
console.log(result2); // [1, 3, 5]

// reduce -> to return single value as a result
const sum = arr.reduce((total, currentValue) => {
  return total + currentValue;
}, 0);

console.log(sum); // 15

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { c: 5, d: 6 };
const mergedObj = [obj1, obj2, obj3].reduce((obj, currrentObj) => {
  return { ...obj, ...currrentObj };
}, {});
console.log(mergedObj); // { a: 1, b: 3, c: 5, d: 6 }