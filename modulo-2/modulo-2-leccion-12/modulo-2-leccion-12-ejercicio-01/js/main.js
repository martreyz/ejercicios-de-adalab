"use strict";

const list = document.querySelector(".js-list");
const numbers = [1, 2, 3];

function fillList() {
  for (let i = 0; i < numbers.length; i++) {
    let li = document.createElement("li");
    let liContent = document.createTextNode(numbers[i]);
    li.appendChild(liContent);
    list.appendChild(li);
  }
}

fillList();
