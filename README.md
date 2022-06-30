# Node.js_Note

[Bare minimum to learn node js](https://www.simplilearn.com/nodejs-for-beginners-article)
****
[Download node.js](https://nodejs.org/en/)

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
- My Name is Om ParakashI am a software engineer
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

