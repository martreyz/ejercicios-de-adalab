"use strict";

const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const item3 = document.querySelector(".item3");
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");

console.log(text3.getBoundingClientRect());

function stopit(event) {
  event.preventDefault();
  let currentItem = event.currentTarget;
  let indexItem = currentItem.getAttribute("data-id");
  if (indexItem === "1") {
    let coordinates = text1.getBoundingClientRect();
    window.scrollTo(coordinates.left, coordinates.top - 200);
  } else if (indexItem === "2") {
    let coordinates = text2.getBoundingClientRect();
    window.scrollTo(coordinates.left, coordinates.top - 50);
  } else if (indexItem === "3") {
    let coordinates = text3.getBoundingClientRect();
    window.scrollTo(coordinates.left, coordinates.top - 40);
  }
}

item1.addEventListener("click", stopit);
item2.addEventListener("click", stopit);
item3.addEventListener("click", stopit);
