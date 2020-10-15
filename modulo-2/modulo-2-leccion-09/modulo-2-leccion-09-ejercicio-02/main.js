"use strict";

function get100numbers(arrayNumbers) {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
    arrayNumbers.push(i);
  }
}
const numbers = [];

function getReversed100Numbers(arrayRevNumbers) {
  get100numbers(arrayRevNumbers);
  return arrayRevNumbers.reverse();
}

getReversed100Numbers(numbers);
console.log(numbers);
