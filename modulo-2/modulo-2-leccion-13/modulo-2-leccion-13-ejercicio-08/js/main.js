"use strict";

const runners = [
  { name: "Gregory Goyle", time: 56 },
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 },
];

let winner = "";

function findWinner(faster, runner) {
  if (runner.time < faster.time) {
    return runner;
  } else {
    return faster;
  }
}

const winnerRunner = runners.reduce(findWinner);
console.log(winnerRunner);
