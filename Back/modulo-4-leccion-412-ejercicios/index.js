"use strict";

//Ejercicio 1:

const add = (a, b) => {
  return a + b;
};

console.log(add(1, 2));

//Ejercicio 2:

const fs = require("fs");
const test = "Lorem ipsum";

const objectTest = {
  originalContent: "Lorem ipsum",
  changedContent: "LOREM IPSUM",
  textLength: 11,
};

console.log(objectTest);

const handleFileWrite = (err) => {
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log("File has been saved!");
  }
};

const parseObject = JSON.stringify(objectTest);

fs.writeFile("./output.txt", parseObject, handleFileWrite);

//Ejercicio 3:

fs.readFile("./input-file.txt", "utf8", function (err, fileContent) {
  if (err) {
    console.log("Error: ", err);
  } else {
    fs.writeFile("./output-file.txt", fileContent, handleFileWrite);
  }
});
