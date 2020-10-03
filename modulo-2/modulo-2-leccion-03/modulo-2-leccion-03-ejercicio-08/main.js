"use strict";

const currentYear = 2057;
const calc = 4;
const year = document.querySelector(".year");

if (currentYear % calc === 0) {
  year.innerHTML = `Este año es bisiesto, el próximo será en ${
    currentYear + calc
  }.`;
} else if (currentYear % calc === 1) {
  year.innerHTML = `El próximo año bisiesto será en ${currentYear + 3}.`;
} else if (currentYear % calc === 2) {
  year.innerHTML = `El próximo año bisiesto será en ${currentYear + 2}.`;
} else if (currentYear % calc === 3) {
  year.innerHTML = `El próximo año bisiesto será en ${currentYear + 1}.`;
}
