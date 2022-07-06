// create expess appliction
const express = require("express");
const app = express();

// set the view engine to hbs
app.set("view engine", "hbs");

// template engin route
app.get("/", (req, res) => {
  res.render("index");
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
