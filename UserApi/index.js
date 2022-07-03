const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const data = fs.readFileSync(`${__dirname}/userApi.json`, "utf-8");
  // console.log(data);
  const oject = JSON.parse(data);

  // console.log(req.url);
  if (req.url === "/") {
    res.end("Hello from Heme\n");
  } else if (req.url === "/about") {
    res.end("Hello from about\n");
  } else if (req.url === "/userapi") {
    // res.end(oject[0].email);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });

    res.end(" <h1> 404 Not Found\n <h1/> ");
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

// console.log(__dirname);
