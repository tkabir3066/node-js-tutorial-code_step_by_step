// What is the drawback in asynchronous programming
// what will be the output

let a = 10;
let b = 0;

setTimeout(() => {
  b = 20;
}, 2000);

console.log(a + b); //10
