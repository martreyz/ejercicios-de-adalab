"use strict";

class Polygon {
  constructor(base, height, sides) {
    this.base = base;
    this.sides = sides;
    this.height = height;
  }
  perimeter() {
    return this.base * this.sides;
  }
  area() {
    return this.base * this.height;
  }
}

class Square extends Polygon {
  constructor(side) {
    super(side, side, 4);
  }
}

class Triangle extends Polygon {
  constructor(base, height) {
    super(base, height, 3);
  }
  area() {
    return super.area() / 2;
  }
}

const mySquare = new Square(4);
console.log(mySquare.perimeter());
console.log(mySquare.area());

const myTriangle = new Triangle(4, 3);
console.log(myTriangle.perimeter());
console.log(myTriangle.area());
