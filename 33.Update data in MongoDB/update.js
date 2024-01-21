const dbConnect = require("./mongodb");

const update = async () => {
  const db = await dbConnect();
  const result = await db.updateOne(
    { name: "note 16" },
    { $set: { name: "Opp z5", price: 32000 } }
  );
  console.log(result);
};

update();
