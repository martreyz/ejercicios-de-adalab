"use strict";

import { square } from "./main.js";

const oneSquare = new square(1, 4);
console.log(oneSquare.perimeter());
console.log(oneSquare.area());

const threeSquare = new square(3, 4);
console.log(threeSquare.perimeter());
console.log(threeSquare.area());

const sevenSquare = new square(7, 4);
console.log(sevenSquare.perimeter());
console.log(sevenSquare.area());
