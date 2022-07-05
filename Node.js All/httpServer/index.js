// The http.createServer() method creates a new web server.
// The http.createServer() method includes request and response parameters which is supplied by the Node.js.
// The server is a Node.js object.
// It can be used to create a web server that can listen on a port and respond to HTTP requests.

// The http.createServer() method takes a callback function as an argument.
// The callback function is called whenever a request is made to the server.

// The request object object can be used to get information about the current http request.
// eg.:- request.url, request.method, request.headers, request.body

// create own web server
const http = require("http");
const server = http.createServer((req, res) => {
  // console.log(req.url);
  if (req.url === "/") {
    res.end("Hello from Heme\n");
  } else if (req.url === "/about") {
    res.end("Hello from about\n");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });

    res.end(" <h1> 404 Not Found\n <h1/> ");
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
