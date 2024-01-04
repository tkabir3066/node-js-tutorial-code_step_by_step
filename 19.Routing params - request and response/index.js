const express = require("express");
const app = express();

app.get("", (req, res) => {
  console.log("Data sent by client ", req.query.name);
  res.send("Hello," + req.query.name);
});
app.get("/about", (req, res) => {
  res.send("Hello, this is about page");
});
app.get("/contact", (req, res) => {
  res.send("Hello, this is contact page");
});

app.listen(1500);
