const express = require("express");
const reqFilter = require("./middleware");
const app = express();
const route = express.Router();
// app.use(reqFilter);

route.use(reqFilter);
app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});
app.get("/users", (req, res) => {
  res.send("Welcome to users Page");
});
route.get("/about", (req, res) => {
  res.send("Welcome to About Page");
});
route.get("/contact", (req, res) => {
  res.send("Welcome to Contact Page");
});

app.use("/", route);
app.listen(4000);
