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

/* 

In Node.js, a global module refers to a module that is available globally across all Node.js applications. By default, modules in Node.js are local to the application in which they are installed, meaning they can only be accessed within that specific application's context.

However, there are certain modules that can be installed globally using the -g flag with the npm install command. These global modules are installed in a location specified by the Node.js installation, and can be accessed by any Node.js application on that machine.

Global modules are typically used for utilities or tools that are meant to be used across multiple projects or applications. Examples of popular global modules include frameworks like Express, testing libraries like M
*/
