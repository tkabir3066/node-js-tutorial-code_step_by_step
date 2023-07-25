// http: node.js er moddhe server er request and response ke handle kore

const http = require("http");
http
  .createServer((req, res) => {
    res.write("<h1>Hello, This is  aaa Kabir</h1>");
    res.end();
  })
  .listen(1200);
