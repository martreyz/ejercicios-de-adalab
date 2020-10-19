"use strict";

const catImg = document.querySelector(".catImg");

fetch("https://api.thecatapi.com/v1/images/search?mime_types=gif", {
  headers: {
    "x-api-key": "05ee1fd8-3328-4060-9057-f06237ee5c67",
  },
})
  .then((response) => response.json())
  .then((data) => {
    catImg.src = data[0].url;
    console.log(data[0].url);
  });
