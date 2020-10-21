"use strict";

const times = [56, 9, 45, 28, 35];

const accTime = times.reduce((acc, number) => acc + number, 0);
const mediaTime = accTime / times.length;
console.log(mediaTime);
