"use strict";

const select = document.querySelector(".js-select");
const image = document.querySelectorAll(".js-image");

function changePic(event) {
  for (let i = 0; i < image.length; i++) {
    if (event.currentTarget.value === "Madrid") {
      image[i].src = `./images/madrid${i + 1}.jpg`;
      image[i].alt = "Imagen Madrid";
    } else if (event.currentTarget.value === "New York") {
      image[i].src = `./images/newyork${i + 1}.jpg`;
      image[i].alt = "Imagen New York";
    } else if (event.currentTarget.value === "Paris") {
      image[i].src = `./images/paris${i + 1}.jpg`;
      image[i].alt = "Imagen Paris";
    } else if (event.currentTarget.value === "London") {
      image[i].src = `./images/london${i + 1}.jpg`;
      image[i].alt = "Imagen London";
    } else if (event.currentTarget.value === "Tokio") {
      image[i].src = `./images/tokio${i + 1}.jpg`;
      image[i].alt = "Imagen Tokio";
    }
  }
}

select.addEventListener("change", changePic);
