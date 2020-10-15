"use strict";

const triangle = "▲";
const triangleArray = [];

function growChristmasTree(treeHeight) {
  for (let i = 0; i < treeHeight; i++) {
    triangleArray.push(triangle);
    console.log(triangleArray);
  }
}

growChristmasTree(10);
