// create expess appliction
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the home page");
});

app.get("/about", (req, res) => {
  res.send("<h1> Welcome to the about page  <h1/>");
});

app.get("/contact", (req, res) => {
  // array of an object
  res.json([
    {
      id: 1,
      name: "Om Prakash Pattjoshi",
      contatctNumber: "9078445836",
    },
    {
      id: 2,
      name: "Prakash Pattjoshi",
      contatctNumber: "90785554836",
    },
    {
      id: 3,
      name: "Pattjoshi",
      contatctNumber: "96788445836",
    },
  ]);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// The methods are identical when an object or array is passed, but res.json() will also convert non-objects, such as null,undefine  which are not valid JSON.
