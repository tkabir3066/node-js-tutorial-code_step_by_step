const express = require("express");
require("./config");
const Product = require("./product");
const app = express();
// app.use(express.json());

app.get("/search/:key", async (req, res) => {
  // console.log(req.params.key);
  const data = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { brand: { $regex: req.params.key } },
    ],
  });
  res.send(data);
});
app.listen(5000);