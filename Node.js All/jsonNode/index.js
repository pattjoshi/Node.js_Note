const fs = require("fs");

const bioData = {
  name: "Om Prakash",
  age: "19",
  hobbies: ["reading", "coding"],
};

// convert to json
const jsonData = JSON.stringify(bioData);
console.log(jsonData);

// convert to original data
const data = JSON.parse(jsonData);
console.log(data);
