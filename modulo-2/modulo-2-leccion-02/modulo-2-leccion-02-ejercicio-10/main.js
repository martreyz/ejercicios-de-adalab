"use strict";

const userAge = document.querySelector(".user__age");
const hoursDay = 24;
const daysYear = 365;

document.write(hoursDay * daysYear * parseInt(userAge.innerHTML));
