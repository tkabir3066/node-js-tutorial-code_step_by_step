const express = require("express");
require("./config");
const Product = require("./product");
const app = express();
app.use(express.json());
/* app.post("/create", async (req, res) => {
  let data = new Product(req.body);
  let result = await data.save();
  console.log(result);
  res.send(result);
}); */

/* app.get("/list", async (req, res) => {
  const data = await Product.find();
  res.send(data);
}); */

/* app.delete("/delete/:_id", async (req, res) => {
  // console.log(req.params);
  const data = await Product.deleteOne(req.params);
  res.send(data);
}); */

// ------- update ----------------//
/* app.put("/update", async (req, res) => {
  const data = await Product.updateOne(
    { name: "nokia 5800" },
    { $set: { price: 5555 } }
  );
  res.send(data);
}); */

app.put("/update/:_id", async (req, res) => {
  console.log(req.body);
  const data = await Product.updateOne(req.params, { $set: req.body });
  res.send(data);
});
app.listen(5000);
