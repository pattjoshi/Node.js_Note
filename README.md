# Node.js_Note

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






## 🙏 If you find this repo helpful then don't forget to give a star ❇️ to this repository. :)
