const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

app.get("", (_, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get("/aboutMe", (_, res) => {
  res.sendFile(`${publicPath}/about.html`);
});
app.get("/help", (_, res) => {
  res.sendFile(`${publicPath}/help.html`);
});
app.get("*", (_, res) => {
  res.sendFile(`${publicPath}/notFound.html`);
});

app.listen(1500);
