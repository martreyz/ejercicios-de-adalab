"use strict";

const numbers = [3, 5, 9, 13, 58, 34];
let acc = 0;

for (let i = 0; i < numbers.length; i++) {
  acc += numbers[i];
}
acc = acc / numbers.length;
console.log("La media de los números introducidos es: " + acc);

acc = 0;

function average(a) {
  for (let i = 0; i < a.length; i++) {
    acc += a[i];
  }
  acc = acc / a.length;
  console.log("La media de los números introducidos es: " + acc);
}

average(numbers);
