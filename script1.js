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

//დავალება 3 ----- ვერ გავაკეთე

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.speed = 0;
    this.motion = "The car is not moving";
  }
  outputText = () => {
    console.log(
      `მანქანა ${this.brand} ${this.model} მოძრაობს ${this.speed} კმ/სთ სიჩქარით და სტატუსია: ${this.motion}`
    );
  };
}

function check_motion() {
  if (this.speed > 0) {
    return (this.motion = "The car is moving");
  } else {
    return (this.motion = "The car is not moving");
  }
}
console.log(check_motion());

const newCar = new Car("Ford", "Mustang");

console.log(newCar);

//დავალება 4 ---- ვერ გავაკეთე
