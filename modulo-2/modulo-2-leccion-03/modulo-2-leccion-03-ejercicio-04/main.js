"use strict";

const dogAge = document.querySelector(".input__number");
const result = document.querySelector(".result");

const yearOne = 15;
const yearTwo = 9;
const years = 5;

let multiply = function () {
  const dogAgeValue = parseInt(dogAge.value);

  if (dogAgeValue === 1) {
    result.innerHTML = `Este perro tiene ${yearOne} años humanos`;
  } else if (dogAgeValue === 2) {
    result.innerHTML = `Este perro tiene ${yearOne + yearTwo} años humanos`;
  } else if (dogAgeValue > 2) {
    result.innerHTML = `Este perro tiene ${
      yearOne + yearTwo + (dogAgeValue - 2) * years
    } años humanos`;
  } else {
    result.innerHTML = "Dinos la edad de tu perro y te decimos su edad humana!";
  }
};
dogAge.addEventListener("change", multiply);
