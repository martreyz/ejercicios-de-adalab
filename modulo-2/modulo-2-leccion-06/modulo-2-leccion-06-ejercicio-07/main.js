"use strict";

const userInfo = {};
const job = "developer";

userInfo.firstName = "María";
userInfo.lastName = "González";
userInfo.age = 30;
userInfo.job = job;

console.log(userInfo.firstName);
console.log(userInfo.lastName);
console.log(userInfo.age);
console.log(userInfo.job);

userInfo.firstName = "Rosa";
userInfo.age = userInfo.age + 1;

console.log(userInfo.firstName);
console.log(userInfo.lastName);
console.log(userInfo.age);
console.log(userInfo.job);
