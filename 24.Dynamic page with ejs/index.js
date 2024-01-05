const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

app.set("view engine", "ejs");

app.get("", (_, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get("/aboutMe", (_, res) => {
  res.sendFile(`${publicPath}/about.html`);
});
app.get("/help", (_, res) => {
  res.sendFile(`${publicPath}/help.html`);
});
app.get("/profile", (_, res) => {
  const user = {
    name: "Tutul",
    email: "tutul@gmail.com",
    city: "Las Vegas",
    country: "USA",
    skills: ["PHP", "Javascript", "Java", "C++", "Python"],
  };
  res.render("profile", { user });
});

app.get("/login", (_, res) => {
  res.render("login");
});
app.get("*", (_, res) => {
  res.sendFile(`${publicPath}/notFound.html`);
});

app.listen(1500);
