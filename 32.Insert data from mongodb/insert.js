const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  //   const result = await db.insertOne({
  //     name: "nord",
  //     brand: "One+",
  //     category: "mobile",
  //     price: 20000,
  //   });

  const result = await db.insertMany([
    {
      name: "note 16",
      brand: "readme",
      category: "mobile",
      price: 22000,
    },
    {
      name: "note 17",
      brand: "readme",
      category: "mobile",
      price: 25000,
    },
    {
      name: "note 18",
      brand: "realme",
      category: "mobile",
      price: 27000,
    },
  ]);

  if (result.acknowledged) {
    console.log("data is inserted");
  }
};

insert();
