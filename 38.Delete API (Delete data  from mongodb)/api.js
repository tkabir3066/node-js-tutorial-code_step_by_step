const express = require("express");
const dbConnect = require("./mongodb");
const mongodb = require("mongodb");
const app = express();

app.use(express.json());
app.get("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  res.send(data);
});

//----- POST --------//
/* app.post("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.insertMany(req.body);

  res.send(data);
}); */

//----- PUT --------//

/* app.put("/:name", async (req, res) => {
  let data = await dbConnect();
  // data = await data.updateMany({ name: req.body.name }, { $set: req.body });
  data = await data.updateMany({ name: req.params.name }, { $set: req.body });
  res.send("updated");
}); */

app.delete("/:id", async (req, res) => {
  // console.log(req.params.id);
  const data = await dbConnect();
  const result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });

  res.send(result);
});
app.listen(5000);
