"use strict";

const main = document.querySelector(".main");
const mainTitle = "<h1>Lorem ipsum</h1>";
const mainImage =
  '<img src="http://via.placeholder.com/350x150" title="Placeholder" alt="placeholder"/>';
const mainText =
  "<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit </p>";

main.innerHTML = mainTitle + mainImage + mainText;
