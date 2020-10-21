"use strict";

const runners = [
  { name: "Gregory Goyle", time: 56, student: true },
  { name: "Nymphadora Tonks", time: 9, student: false },
  { name: "Luna Lovegood", time: 45, student: true },
  { name: "Cedric Diggory", time: 28, student: true },
  { name: "Cho Chang", time: 35, student: true },
];

const studentRunners = runners.filter((runner) => runner.student === true);
const fasterStudentRunner = studentRunners.reduce(findFaster);

function findFaster(runner, faster) {
  if (runner.time < faster.time) {
    return runner;
  } else {
    return faster;
  }
}

console.log(fasterStudentRunner);
