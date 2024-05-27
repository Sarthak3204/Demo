class Button {
  constructor(value) {
    this.value = value;
  }
  click = () => {
    console.log(this.value);
  }
}

let button = new Button("hello");
setTimeout(button.click, 1000); // hello

class User {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
}

let user = new User("Sarthak");
console.log(user.name); // Sarthak