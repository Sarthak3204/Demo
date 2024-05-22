let user = {
    name: "Sarthak",
    age: 20
};
user["intern"] = "sprinklr";

for (let key in user) {
    console.log(user[key]);
}

//ordered
let phoneCodes = {
    "+91": "India",
    "+1": "USA"
}

for (let key in phoneCodes) {
    console.log(key);
}

//object references and copying
let other = user;
other.age = 19;

console.log(user.age);
//Note: const user can't be modified

//deep copy
other = structuredClone(user);
other.age = 18;

console.log(user.age);

//optional chaining
let user2 = {};
console.log(user2?.name);
user2.name = "Leonardo";
console.log(user2?.name);

//symbol -> always unique
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 == id2);