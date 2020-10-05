"use strict";

const getEl = (a) => document.querySelector(a);
const pair = (a) => !(a % 2);

const text = getEl(".text");
const innerText = text.innerHTML;
const valText = parseInt(innerText);

console.log(typeof valText);

console.log(pair(valText));
