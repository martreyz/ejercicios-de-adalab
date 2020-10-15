"use strict";

const lostNumbers = [4, 8, 15, 16, 23, 42];

const pairLostNumbers = [];

for (let i = 0; i < lostNumbers.length; i++) {
  if (lostNumbers[i] % 2 === 0) {
    pairLostNumbers.push(lostNumbers[i]);
  }
}

console.log(pairLostNumbers);

const threeMultiples = [];

for (let i = 0; i < lostNumbers.length; i++) {
  if (lostNumbers[i] / 3 === Math.ceil(lostNumbers[i] / 3)) {
    threeMultiples.push(lostNumbers[i]);
  }
}

console.log(threeMultiples);

const concatLostNumbers = pairLostNumbers.concat(threeMultiples);
console.log(concatLostNumbers);
