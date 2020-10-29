"use strict";

class square {
  constructor(side, sides) {
    this.side = side;
    this.sides = sides;
  }
  perimeter() {
    return this.side * this.sides;
  }
  area() {
    return this.side * this.side;
  }
}

const mySquare = new square(9, 4);
console.log(mySquare.perimeter());
console.log(mySquare.area());
