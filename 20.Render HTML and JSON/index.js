const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send(`<h1>Hello, this is home page</h1>
  <a href="/about">Goto About Page</a>
  `);
});
app.get("/about", (req, res) => {
  res.send(`
  <input type="text" placeholder="username" value="${req.query.name}">
  <button>Click me</button>
  <a href="/">Goto Home Page</a>
  `);
});
app.get("/contact", (req, res) => {
  res.send([
    { name: "Tutul", age: 25, email: "tutul@gmail.com" },
    { name: "rinka", age: 21, email: "rinka@gmail.com" },
  ]);
});

app.listen(1500);
