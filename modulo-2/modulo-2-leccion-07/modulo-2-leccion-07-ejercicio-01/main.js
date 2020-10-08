"use strict";

const movies = ["La trampa", "Abre los ojos", "Origen"];

console.log(movies.toString());

movies[3] = "El rey león";

console.log(movies.toString());

movies[3] = "Jackie Brown";

console.log(movies.toString());

movies[1] = "Malditos Bastardos";

console.log(movies.toString());

function workWithMovies() {
  console.log(movies.toString());
}

workWithMovies();
