const dbConnect = require("./mongodb");
//promise
// dbConnect().then((res) => {
//   res
//     .find({})
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });

// async await

const main = async () => {
  const res = await dbConnect();
  const data = await res.find({}).toArray();
  console.log(data);
};

main();
