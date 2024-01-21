const dbConnect = require("./mongodb");

const deleteData = async () => {
  const data = await dbConnect();
  //   const result = await data.deleteOne({ name: "Opp z5" });
  const result = await data.deleteMany({ name: "vivo 1S" });
  console.log(result);
};

deleteData();
