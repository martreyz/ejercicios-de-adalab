"use strict";

//Ejercicio 4:
const _ = require("lodash");

const arrayOne = [1, 2, 3];
const arrayTwo = [2, 3, 4];

const newArray = _.union(arrayOne, arrayTwo);

console.log(newArray);

//Ejercicio 5:

const students = [
  {
    name: "Sofía",
    promo: "k",
  },
  {
    name: "María",
    promo: "l",
  },
  {
    name: "Lucía",
    promo: "j",
  },
  {
    name: "Julia",
    promo: "l",
  },
];

console.log(_.sortBy(students, ["promo", "name"]));
