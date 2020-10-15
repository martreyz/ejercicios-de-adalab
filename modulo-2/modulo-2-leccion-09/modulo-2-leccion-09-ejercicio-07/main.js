"use strict";

const triangle = "▲";
const triangleArray = [];
const base = "|";
const star = "★";
const voidField = " ";
const triangleVoid = [];

function growChristmasTree(treeHeight) {
  for (let i = 0; i < treeHeight; i++) {
    triangleVoid.push(voidField);
  }
  console.log(triangleVoid.concat(star));
  triangleArray.push(triangle);
  console.log(triangleVoid.concat(triangleArray));

  for (let i = 0; i < treeHeight - 2; i++) {
    triangleVoid.pop(voidField);
    triangleArray.push(triangle);
    triangleArray.push(triangle);
    console.log(triangleVoid.concat(triangleArray));
  }
  for (let i = 0; i < treeHeight - 2; i++) {
    triangleVoid.push(voidField);
  }
  console.log(triangleVoid.concat(base));
}

growChristmasTree(10);
