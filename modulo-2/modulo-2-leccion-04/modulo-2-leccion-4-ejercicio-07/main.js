"use strict";

function getEl(a) {
  const result = document.querySelector(a);
  return result;
}

function pair(a) {
  return !(a % 2);
}

const text = getEl(".text");
const innerText = text.innerHTML;
const valText = parseInt(innerText);

console.log(typeof valText);

console.log(pair(valText));
