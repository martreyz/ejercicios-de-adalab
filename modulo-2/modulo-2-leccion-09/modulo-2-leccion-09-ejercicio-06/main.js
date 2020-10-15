"use strict";

const triangle = "▲";
const triangleArray = [];
const base = "|";
const star = "★";

function growChristmasTree(treeHeight) {
  console.log(star);
  for (let i = 0; i < treeHeight; i++) {
    triangleArray.push(triangle);
    console.log(triangleArray);
  }
  console.log(base);
}

growChristmasTree(5);
