// global module
// console.log("hi");

// non global module

// const fs = require("fs");
// fs.writeFileSync("abc.txt", "hello ,sexy");

// console.log( __dirname);
// console.log("=>", __dirname);
console.log(__filename);

// Global module : - je module ke import korte hoi na
// non Global module : - je module ke import korte hoi

// // interview question-1
// const fs = require("fs").writeFileSync;
// fs("hi.txt", "hello ,sexy");

// interview question-1
const gs = require("fs").writeFileSync;
gs("hola.txt", "hello ,sexy");
