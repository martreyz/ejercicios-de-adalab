"use strict";

const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const button = document.querySelector(".button");
const answer = document.querySelector(".answer");

const movies = [];

function addMovie(event) {
  const inputValue = input1.value;
  const inputValue2 = input2.value;
  movies.push(inputValue);
  movies.push(inputValue2);
  for (const movie2 of movies) {
    answer.innerHTML =
      answer.innerHTML +
      "A mí también me encantó " +
      movie2 +
      ". Tenemos mucho en común, humana.";
  }
}

button.addEventListener("click", addMovie);
