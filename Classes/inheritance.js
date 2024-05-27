/*
class Child extends Parent
parent constructor always uses its own field value, not the overridden one.
*/
class Animal {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }

}

class Rabbit extends Animal {

  Rabbit(name, earlength) {
    super(name);
    this.earlength = earlength;
  }

  hide() {
    console.log(`${this.name} hides!`);
  }

  stop() { // overriding method
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stands still. White Rabbit hides!