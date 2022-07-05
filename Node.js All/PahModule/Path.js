const path = require("path");

// path module is use for geting the path of the file or directory in the system and also for creating the path of the file or directory in the system and also for getting the path of the file or directory

console.log(path.dirname("/Users/jagrut/Desktop/NodeJS/PahModule/Path.js")); // get the directory name of the file or directory

console.log(path.extname("/Users/jagrut/Desktop/NodeJS/PahModule/Path.js")); // get the extension name of the file or directory

console.log(path.basename("/Users/jagrut/Desktop/NodeJS/PahModule/Path.js")); // get the basename of the file or directory

// get the parsed object of the file or directory
console.log(path.parse("/Users/jagrut/Desktop/NodeJS/PahModule/Path.js"));

// parse method is use for getting the parsed object of the file or directory

//  only name of the file or directory
console.log(path.parse("/Users/jagrut/Desktop/NodeJS/PahModule/Path.js").name);
