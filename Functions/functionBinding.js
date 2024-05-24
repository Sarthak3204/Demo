//lossing of this 
let user = {
  firstName: "Sarthak",
  sayHi() {
    console.log(`Hi ${this.firstName}`);
  }
};

setTimeout(user.sayHi, 1000); // Hello, undefined
setTimeout(() => user.sayHi(), 1000); // Hello, Sarthak