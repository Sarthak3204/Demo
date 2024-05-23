let user = {
    name: "Sarthak",
    age: 20,
};
  
//for in loops through the properties of an obect
for (let key in user) {
    console.log(key); 
    console.log(user[key]); 
}

//for of loops through the values of an iterable object