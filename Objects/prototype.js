/*
If we want to read a property of obj or call a method, and it doesn’t exist, then JS tries to find it in the prototype.
obj.hasOwnProperty(key): it returns true if obj has its own (not inherited) property named key
*/
let animal = {
  eats: true
};
let rabbit = {
  jumps: true,
  __proto__: animal
};

console.log(rabbit.eats); // true 
console.log(rabbit.jumps); // true

// Object.keys only returns own keys
console.log(Object.keys(rabbit)); // jumps

// for..in loops over both own and inherited keys
for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    console.log(`Our: ${prop}`); // Our: jumps
  }
  else {
    console.log(`Inherited: ${prop}`); // Inherited: eats
  }
}