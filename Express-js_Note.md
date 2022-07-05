# [Express Note](https://expressjs.com/)

- Express.js is a Node.js framework. it's the most popular framework as of now (the most starred on NPM).
- Express.js is a web application framework that provides you with a simple API to build websites, web apps and back ends.

# why do we actually need Express.js ?  How it is useful for us to use with Node.js ?
- Try to write a small REST API server in plain Node.js (that is , using only core modules)and then in Express.js The latter will take you 5-10x less and lines of code. 


# Installing
```
$ mkdir myapp
$ cd myapp
npm init
entry point: (index.js)
npm install express
```

# create a express application
```
const express = require("express");
const app = express();
```
## whit the help of express we can create a API 
### most use method on express is
- GET - to get data (read)
-  POST - to create data
- PUT  - to update data
- DELETE - to delete data

# create a route
```
// create expess appliction
const express = require("express");

const app = express();

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
```
- The cllback function has 2 parameters: req and res.
- req is an object that is responsible for the HTTP request and properties for the request query string, parameters, body, HTTP headers, etc.

<img width="806" alt="image" src="https://user-images.githubusercontent.com/78966839/177335918-6395012b-f7dc-4470-bb26-7539930291cd.png">


