# Node.js_Note

# Doing project on Node.js

[Bare minimum to learn node js](https://www.simplilearn.com/nodejs-for-beginners-article)
****
[Download node.js](https://nodejs.org/en/)

## JavaScript is synchronous, single-threaded language.
- synchronous:- one command at a time.
- single-threaded :- in a specific synchronous ouder

## callback function:- 
- a function that is passed to another function as an argument.

# What is Node js?
- Node.js is a javaScript runtime built on chrome's V8 javaScript engine.
- Node.js is a javaScript running on the server. 

# History of node.js ?
- In 2009 an idea came in the mind of Ryan Dahi that why not run javaScript outside browser, so he took V8 engine and embedded in a c++ program and called it Node.exe later on become Node.js .

# When to use NOde.js ?
- I/o Bound
- Data Streaming Applications
- Real time chat Applications

# Node js Reple (READ, Eval, Print & Loop)
- The REPL feature of Node is very useful in experimenting with Node.js codes and to debug javaScript codes.
- The Node. js Read-Eval-Print-Loop (REPL) is an interactive shell that processes Node. js expressions. The shell reads JavaScript code the user enters, evaluates the result of interpreting the line of code, prints the result to the user, and loops until the user signals to quit

- Read - Reads user's input, parses the input into javaScript data-structure, and stores in memory.

- Eval - Takes and evaluates the data Structure.

- print - prints the result.

- Loops - Loops the above commend until the user presses ctrl-c twice.

# Some Node.js commend
```
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the REPL
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to
 a file

Press Ctrl+C to abort current expression, Ctrl+D to exit the 
REPL
```
*********
# Create file in Terminal
```
type nul >home.js
```
# What we can do in REPL

- JS Expression
- use veriables
- Multiline code / loops
- use (_) to get the last result
- we cand use editor mode

## Argument:- 
- function call kari kari value pass kale argument kahe san
## paramente:-
- function defind kala bele gin value expact kar su seta k paramentr kahe san

********

# Node.js core module 
- consider modules to be the same as javaScript libraies.A set of functions you want to include in your application

- Node.js has a set of buit-in modules which you can use without any further installation.

******
# create file by Node modele
```
const fs = require("fs");
```
## if that file does not exist, it will create it and write the data
```
fs.writeFileSync("notes.txt", "Hello i am learning node");
```
##  add this line to the file with out deleting the existing file data
```
fs.appendFileSync("notes.txt", " This is the second line");
```
***
# Buffer (data type):-
- Node.js uincludes an additional data type called Buffer.
- (NOt avilable in browser's javaScript).
- Buffer is mainly used to store binary data,
- while reading form a file or feceiving packets over the notework.

# read the file
```
const buf_data = fs.readFileSync("notes.txt");

console.log(buf_data.toString());
```
## O/P:-
```
Hello i am learning node This is the second line This is the 
second line This is the second line
```
# rename the file
```
fs.renameSync("notes.txt", "readwrite.txt");
```
 # Challenge Time (CRUD)

- 1. Create a folder named it NodeCh
- 2. Create a file in it named bio.txt and data into it.
- 3. Add more data into the file at the end of the existing data.
- 4. Read the data without getting the buffer data at first. (file encoding)
- 5. Rename the file name to mybio.txt
- 6. now delete both the file and the folder.

# Challenge Ans:-
- i.
```
const fs = require("fs");
fs.mkdirSync("Nodech");
```
- ii.
```
fs.writeFileSync("bio.txt", "My Name is Om Parakash");
```
- iii.
```
fs.appendFileSync("bio.txt", " I am a software engineer");

```
- iv.
```
const data = fs.readFileSync("bio.txt", "utf8");

console.log(data);
```
## O/p
- My Name is Om Parakash I am a software engineer
********
- v.
```
fs.renameSync("bio.txt", "myBio.txt"); // rename file
```
- vi.
```
fs.unlinkSync("myBio.txt"); // delete file

fs.rmdirSync("NodeLearn"); // delete directory
```
##  UTF-8
- a charactor encoding capable of encoding all possible characters (Called code piont)in Unicode.
- code unit is 8-bits.
- use one to four code units to encode Unicode.

# Node.JS Asynchronous File System Core Modules | Reading and Writing File Asynchronously

```
const fs = require("fs");

fs.writeFile("test.txt", "Today is a Awesome day", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File created");
  }
});

// callback function:- a function that is passed to another function as an argument
```
- We pass them a function as an argument - a callback - that gets called when that gets called when that task complets.
- The callback has an argument that fells yu whether the operation completed sucessfully.
- Now we need to say what to do when fs.writeFile has completed (even if it's nothing ), and start checking for errors.

## Asyne appendFile
```
fs.appendFile("test.txt", " Have a Nice day", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File created");
  }
});
```
## async readFile
```
fs.readFile("test.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
```
O/p:-
- Today is a Awesome day Have a Nice day
***********

# Challange Time (using async Module)

- 1. Create a folder named it NodeCh
- 2. Create a file in it named bio.txt and data into it.
- 3. Add more data into the file at the end of the existing data.
- 4. Read the data without getting the buffer data at first. (file encoding)
- 5. Rename the file name to mybio.txt
- 6. now delete both the file and the folder.
*******
# Challenge Ans:-
- i.
```
fs.mkdir("NodeCh", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("folder created");
  }
});
```
- ii.
```
const fs = require("fs");

fs.writeFile("bio.txt", "Have a nice day", (err) => {
  if (err) throw err;
  console.log("File created");
});

```
- iii.
```
const fs = require("fs");

fs.appendFile(
  "bio.txt",
  "🙏 If you find this repo helpful then do not forget to give a star ❇️ to this repository.",
  (err) => {
    if (err) throw err;
    console.log("File created and data written to file");
  }
);
```
- iv.
```
const fs = require("fs");

fs.readFile("bio.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
```
O/p:-
- Have a nice day� If you find this repo helpful then do not f 
orget to give a star ❇️ to this repository.

- v.
```
const fs = require("fs");

fs.rename("bio.txt", "mybio.txt", (err) => {
  if (err) throw err;
  console.log("File Renamed");
});
```
- vi.
```
const fs = require("fs");

fs.unlink("mybio.txt", (err) => {
  if (err) throw err;
  console.log("File deleted!");
});
// delete file mybio.txt

```
*********
# Node.JS [OS](https://nodejs.org/api/os.html) Module To Get Operating System Info

## open  task manager
```
ctrl + shift + ecs
```
## khow the operating system is running
```
const os = require("os");
console.log(os.platform()); // khow the operating system is running
```
## get free memory in the system in gigabytes
```
const freeMemory = os.freemem();
console.log(`Free memory: ${freeMemory / 1024 / 1024 / 1024} GB`);
```
##  Get the total amount of RAM in the system in gigabytes
```
const totalMemory = os.totalmem();
console.log(`Total memory: ${totalMemory / 1024 / 1024 / 1024} GB`);
```
##  get architecture of the system
```
console.log(os.arch());
```
## returns the operating system name
```
console.log(os.type());
```
## returns the path to the temporary directory
```
console.log(os.tmpdir());
```

## O/p:-
```
x64
Windows_NT
Total memory: 7.826770782470703 GB
Free memory: 2.9341506958007812 GB
win32
C:\Users\91907\AppData\Local\Temp
```

# 📁 [PATH](https://nodejs.org/api/path.html#path) Module In Node.JS 

-The node:path module provides utilities for working with file and directory paths. It can be accessed using:
```
const path = require('path');
```
- path module is use for geting the path of the file or directory in the system for creating the path of the file or directory in the system and also for getting the path of the file or directory.


## get the directory name of the file or directory
```
console.log(path.dirname("/Users/jagrut/Desktop/NodeJS/PahModule/Path.js"));
```
## get the extension name of the file or directory
```
console.log(path.extname("/Users/jagrut/Desktop/NodeJS/PahModule/Path.js"));
```
## get the basename of the file or directory
```
console.log(path.basename("/Users/jagrut/Desktop/NodeJS/PahModule/Path.js"));
```
## get the parsed object of the file or directory
```
console.log(path.parse("/Users/jagrut/Desktop/NodeJS/PahModule/Path.js"));

// parse method is use for getting the parsed object of the file or directory
```
## only name of the file or directory
```
console.log(path.parse("/Users/jagrut/Desktop/NodeJS/PahModule/Path.js").name);

```

************
## O/p:-
```
/Users/jagrut/Desktop/NodeJS/PahModule
.js
Path.js
{
  root: '/',
  dir: '/Users/jagrut/Desktop/NodeJS/PahModule',
  base: 'Path.js',
  ext: '.js',
  name: 'Path'
}
Path
```
*******
# How to CREATE and EXPORT Our Own Modules in Node JS

```
index.js

const add = require("./operator");
console.log(add(5, 5));
```
*****
```
operator.js

const add = (a, b) => a + b;
module.exports = add;
```
*******
## export multiple modules
```
// index.js

const { add, sub, mul } = require("./operator");
console.log(add(5, 10));
console.log(sub(50, 10));
console.log(mul(50, 10));
```
*******
```
// operator.js

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
module.exports = { add, sub, mul };
// export multiple modules
```
- o/p:-
```
15
40
500
```
*********

##  Import NPM Module in Node.JS
- npm is a package manager for the javaScript programming language it is the difault package manager for the javaScript runtime enverment Node.js.

## [chalk](https://www.npmjs.com/package/chalk)

```
npm i chalk@4.1.2
npm i validator@13.1.1
```
## My ist node.js project use npm 
<img width="821" alt="image" src="https://user-images.githubusercontent.com/78966839/176873330-e8351f0c-ce1d-4421-b90e-2c2584284dcb.png">

- if the email is true the turn green else red.

# [nodemon](https://www.npmjs.com/package/nodemon)
- nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
```
npm install -g nodemon 
or using yarn: yarn global add nodemon
```
# Module Wrapper Function

```
// module wrapper function
(function (exports, require, module, __filename, __dirname) {
  // module code
  const name = "Om ";
  console.log(name + "is a good person");
})();
```
## what is module wrapper function?
- module wrapper function is a function that is used to wrap the code of a module.
- MODULE FUNCTION is a private function .it is not accessible outside the module.
- module wrapper function is used to make the code of a module more scalable.

```
console.log(__filename);
console.log(__dirname);
console.log(module);
```
## O/p:-
```
D:\Node.js_Learn\ModwrapperFun\index.js
D:\Node.js_Learn\ModwrapperFun
Module {
  id: '.',
  path: 'D:\\Node.js_Learn\\ModwrapperFun',
  exports: {},
  filename: 'D:\\Node.js_Learn\\ModwrapperFun\\index.js',    
  paths: [
    'D:\\Node.js_Learn\\ModwrapperFun\\node_modules',        
    'D:\\Node.js_Learn\\node_modules',
    'D:\\node_modules'
  ]
}
```
**************

# Creating Our Own Web Server | HTTP Module in Node JS 

# Node.js web server
- To access web pages of any webapplication, you need to a web server.
- The web server will handle all the http requests for the web application.
- e.g IIs is a web server for ASP.NET  web applications and Apache is a web server for PHP of java web applications.
- Node.js provides capabilities to create your own web server which will hendle HTTP requests asynchronously. you can use IIS or Apache to run Node.js web application but it is recommendent to use node.js web server.

******
# create own web server
```
// create own web server
const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Hello World\n");
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
```
- The http.createServer() method creates a new web server.
- The http.createServer() method includes request and response parameters which is supplied by the Node.js.
- The http.createServer() method takes a callback function as an argument.
- The callback function is called whenever a request is made to the server.
- The request object object can be used to get information about the current http request.
- eg.:- request.url, request.method, request.headers, request.body
- The server is a Node.js object.
- It can be used to create a web server that can listen on a port and respond to HTTP requests.
***********
# Node JS Routing | Handled HTTP Requests in Node.JS

# 404 Error page 
```
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
```
<img width="805" alt="image" src="https://user-images.githubusercontent.com/78966839/176998982-49dc341e-4cfb-4988-afe4-4ba655e5ccf2.png">

**************
# JSON in Node JS

- JSON :- JavaScript object Notation.
- JSON is a lightweight
- format for storing and transporting data.
- JSON is often used when data is sand form a server to a web page.

# object to json

```
const bioData = {
  name: "Om Prakash",
  age: "19",
  hobbies: ["reading", "coding"],
};

// stringify use for convert object to json
const convJSON = JSON.stringify(bioData);
console.log(convJSON);
```
# json to object
```
const bioData = {
  name: "Om Prakash",
  age: "19",
  hobbies: ["reading", "coding"],
};

// parse use for convert json to object
const convObject = JSON.parse(convJSON);
console.log(convObject);
```

## o/P:-
```
{"name":"Om Prakash","age":"19","hobbies":["reading","coding"]}

{ name: 'Om Prakash', age: '19', hobbies: [ 'reading', 'coding' ] }

```
********
# Challange JSON 

- Convert to JSON
- dusre file me add kardena
- readfile
- again convert back to json obj to original
- console.log

# Challange JSON (ANS):-
- 1
```
const bioData = {
  name: "Om Prakash",
  age: "19",
  hobbies: ["reading", "coding"],
};

// convert to json
const jsonData = JSON.stringify(bioData);
console.log(jsonData);

```
- 2 
```
const fs = require("fs");

const bioData = {
  name: "Om Prakash",
  age: "19",
  hobbies: ["reading", "coding"],
};

// convert to json
const jsonData = JSON.stringify(bioData);
console.log(jsonData);

// use fs in json file wirte
fs.writeFile("json1.json", jsonData, (err) => {
  // write file
  if (err) {
    console.log(err);
  } else {
    console.log("File written");
  }
});

```
- 3
```
const fs = require("fs");

const bioData = {
  name: "Om Prakash",
  age: "19",
  hobbies: ["reading", "coding"],
};

// convert to json
const jsonData = JSON.stringify(bioData);
console.log(jsonData);

fs.readFile("json1.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

```

- 4
```
const fs = require("fs");

const bioData = {
  name: "Om Prakash",
  age: "19",
  hobbies: ["reading", "coding"],
};

// convert to json
const jsonData = JSON.stringify(bioData);
console.log(jsonData);pattjoshi

// convert to original data
const data = JSON.parse(jsonData);
console.log(data);
```
# API:-
- API is the acronym for Application Pprogramming interfacem which is a sortware interface that allows tow applications to talk to each other. 
- Each time you use an application like Facebool, send on instant message, or check the weather on your phone, you're using an API.
 
 
 # create own api
 ```
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

 
 ```
 <img width="805" alt="image" src="https://user-images.githubusercontent.com/78966839/177022325-f1ac6511-0315-4b35-8318-ef378c884a93.png">

# [FOLDER LINK](https://github.com/pattjoshi/Node.js_Note/tree/master/UserApi)
**********

# Events Module in Node.JS | Handling Events in Node.js with EventEmitter

# [Events Module:-](https://www.tutorialsteacher.com/nodejs/nodejs-eventemitter)

- Node.js has a built-in module, called "Events"
- Where you can create, fire, and listen for-your own events.
- creating a class for the event mod to inherit from the event emitter class in node js to create an event mod that can be used in the game to create events.

```
// Events for the Event Mod
const EventEmitter = require("events");

const event = new EventEmitter();
// creating a new event emitter class to create a new event mod.
```
# Node.js Streams

## what is streams in node.js?
- streams are a way to handle data as it is being received.
- streams are objects that can be used to read and write data from a source to a destination in continuous fashion. in Node.js, there are four streams:
- streaming means listening to music or watching a video in 'real time', instade of downloading the entire file and then playing it.

## type of streams:
- readable streams - we can read data from a stream
- writable streams - we can write data to a stream
- duplex streams - we can read and write data to a stream
- transform streams - A type of duplex stream which the output is computed based on the input.
**************
### Each type of stream is an EventEmitter.
- Instance and throws severalevents at diffetent instance of times.
- For example, some of the commonly used events are:

- data :- when data is available to read
- end :- when the is no more data to read
- error :- when there is an error reading or writing data
- finish :- when all the data has been flushed to the underlying system.

***************

```
const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  const rstream = fs.createReadStream("input.txt");

  rstream.on("data", (chunk) => {
    res.write(chunk);
  });
  rstream.on("end", () => {
    res.end();
  });
});

server.listen(3000, () => {
  console.log("server is listening on port 3000");
});
```
<img width="804" alt="image" src="https://user-images.githubusercontent.com/78966839/177043663-a39adfcf-55ef-4b03-a8f4-7f7185ae255f.png">

********

[FOLDER LINK](https://github.com/pattjoshi/Node.js_Note/tree/master/streams)

# stream.pipe():-
- the method used to take a credable stream and connect it to a writeable steam.
- pipe() method - pipes data from one stream to another.
- pipe() method is used to pipe data from one stream to another.

```
const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  const rstream = fs.createReadStream("input.txt");
  rstream.pipe(res);
});

server.listen(3000, () => {
  console.log("server is listening on port 3000");
});

```







## 🙏 If you find this repo helpful then don't forget to give a star ❇️ to this repository. :)
