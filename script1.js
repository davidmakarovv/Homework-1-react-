//დავალება 1

let array = [-3, -1, 2, 4, 5, 10, 13];

let positiveNums = array.filter((x) => x > 0);

let totalNums = positiveNums.reduce((total, current) => {
  return total + current;
}, 0);

console.log(positiveNums);
console.log(totalNums);

//დავალება 2

let stringArray = ["London", "Paris", "Madrid", "London", "Berlin"];

let stringDuplicate = stringArray.reduce((prev, cur) => {
  prev[cur] = (prev[cur] || 0) + 1;
  return prev;
}, {});

console.log(stringDuplicate);

//დავალება 3

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.speed = 0;
    this.motion = "The car is not moving";
  }
  check_motion() {
    if (this.speed > 0) {
      this.motion = "The car is moving";
    } else {
      this.motion = "The car is not moving";
    }
  }

  accelerate(speed) {
    this.speed += speed;
    this.check_motion();
  }

  brake(speed) {
    this.speed -= speed;
    if (this.speed < 0) {
      this.speed == 0;
    }
    this.check_motion();
  }

  emergency_brake() {
    this.speed = 0;
    this.check_motion();
  }

  status = () => {
    return `მანქანა ${this.brand} ${this.model} მოძრაობს ${this.speed} კმ/სთ სიჩქარით და სტატუსია: ${this.motion}`;
  };
}

let newCar = new Car("Ford", "Mustang");

console.log(newCar.status());

newCar.accelerate(60);
console.log(newCar.status());

newCar.brake(30);
console.log(newCar.status());

newCar.emergency_brake();
console.log(newCar.status());

//დავალება 4 ---- ვერ გავაკეთე
