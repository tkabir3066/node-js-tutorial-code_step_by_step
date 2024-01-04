const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/apple.txt`;

//create

// fs.writeFileSync(filePath, "This is a simp0le file text");

//read

// fs.readFile(filePath, "utf8", (err, item) => {
//   console.log(item);
// });

//update

// fs.appendFile(filePath, " and file name is apple.txt ", (err) => {
//   if (!err) {
//     console.log("file is updated");
//   }
// });

//rename

// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//   if (!err) {
//     console.log("file name is updated");
//   }
// });

//delete
fs.unlinkSync(`${dirPath}/fruit.txt`);

//========= INTERVIEW QUESTION =======//

// What is buffer in node js
// buffers is temporary memory location, way to store and manipulate binary data in Node. js.
