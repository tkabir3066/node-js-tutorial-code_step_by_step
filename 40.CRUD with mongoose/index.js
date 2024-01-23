const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

mongoose.connect("mongodb://127.0.0.1:27017/e-comm");

const saveInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  const data = new Product({
    name: "micromax 10",
    brand: "micromax",
    category: "mobile",
    price: 20000,
  });
  const result = await data.save();
  console.log(result);
};

const updateInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = await Product.updateOne(
    { name: "m 30" },
    { $set: { price: 502, name: "m 31" } }
  );

  console.log(data);
};

// updateInDB();

const deleteInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  const data = await Product.deleteOne({ name: "micromax 10" });
  console.log(data);
};
const findInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  //   const data = await Product.find();
  const data = await Product.find({ name: "nokia 5800" });
  console.log(data);
};

findInDB();
