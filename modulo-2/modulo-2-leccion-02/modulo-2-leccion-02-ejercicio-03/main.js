"use strict";
const kiwiKg = 5;
const pearKg = 2;
const grapeKg = 4;

console.log(2 * kiwiKg + 3 * pearKg + (1 / 2) * grapeKg);

const totalPax = 9;
const totalPrice = 128;
const extraAna = 2;

console.log((totalPrice - extraAna) / totalPax);

const userAge = 60;
const hoursDay = 24;
const daysYear = 365;

console.log(hoursDay * daysYear * userAge);

const name = "Marta";

console.log(`Hola ${name} encantada de conocerte.`);
const h1 = document.querySelector(".h1");

h1.innerHTML = `Hola ${name} encantada de conocerte.`;
