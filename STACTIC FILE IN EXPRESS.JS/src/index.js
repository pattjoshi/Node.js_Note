const path = require("path");
// create expess appliction
const express = require("express");
const app = express();

const staticpath = path.join(__dirname, "../public");
// console.log(staticpath);

// buildin middleware
app.use(express.static(staticpath));

// create a route
app.get("/", (req, res) => {
  res.send("Hello World from Express.js");
});
app.get("/about", (req, res) => {
  res.send("Hello About page");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// The cllback function has 2 parameters: req and res.
// req is an object that is responsible for the HTTP request and properties for the request query string, parameters, body, HTTP headers, etc.

// with the help of express we can create a API
// most use method in express is
// GET - to get data (read)
// POST - to create data
//PUT  - to update data
// DELETE - to delete data
