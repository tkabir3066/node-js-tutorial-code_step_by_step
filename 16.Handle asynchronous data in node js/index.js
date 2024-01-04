//handle asynchronous data
let a = 10;
let b = 0;

let promiseData = new Promise((resolve, reject) => {
  setTimeout(() => {
    b = 20;
    resolve(b);
  }, 2000);
});

promiseData.then((data) => {
  console.log(a + data); //30
});
