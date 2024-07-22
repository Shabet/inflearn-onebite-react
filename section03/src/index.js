// //CommonJS
// const moduleData = require("./math");

// console.log(moduleData);

// console.log("안녕 Node.js");

// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// //이렇게도 가능
// const { add, sub } = require("./math");
// console.log(add(1, 2));
// console.log(sub(1, 2));

// import mul from "./math.js";
// import { add, sub } from "./math.js";

import mul, { add, sub } from "./math.js";

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(2, 3));

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
