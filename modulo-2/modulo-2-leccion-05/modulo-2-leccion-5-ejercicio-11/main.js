"use strict";

function stopit(event) {
  event.preventDefault();
}

const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const item3 = document.querySelector(".item3");

item1.addEventListener("click", stopit);
item2.addEventListener("click", stopit);
item3.addEventListener("click", stopit);
