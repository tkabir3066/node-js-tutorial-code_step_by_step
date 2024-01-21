const dbConnect = require("./mongodb");

const getData = async () => {
  const data = await dbConnect();
  const result = await data.find({}).toArray();
  console.log(result);
};
getData();
