"use strict";

function edit(event) {
  const inputtext = document.querySelector(".input");
  const atext = inputtext.value;
  const aparragraph = document.querySelector(".parragraph");
  aparragraph.innerHTML = atext;
}

const input = document.querySelector(".input");
input.addEventListener("change", edit);
