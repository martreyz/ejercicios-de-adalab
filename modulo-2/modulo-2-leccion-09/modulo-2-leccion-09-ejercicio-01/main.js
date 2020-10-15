"use strict";
const numbers = [];

function get100numbers() {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
    numbers.push(i);
  }
}

get100numbers();
console.log(numbers);
