const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

async function dbConnect() {
  const result = await client.connect();
  const db = result.db("e-comm");
  return db.collection("products");

  //   const res = await collection.find({}).toArray();
  //   console.log(res);
}

module.exports = dbConnect;
