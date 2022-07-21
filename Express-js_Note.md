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

#  Express JS Routing & our First Challenge in Express JS
- / = Welcome to the home page
- /about = Welcome to the about page
- /contact = Welcome to the contact page

```
// create expess appliction
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the home page");
});

app.get("/about", (req, res) => {
  res.send("Welcome to the about page");
});

app.get("/contact", (req, res) => {
  res.send("Welcome to the contact page");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```
*************
# How To Send HTML & JSON Data as a Response using Express JS

```
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
```
- The methods are identical when an object or array is passed, but res.json() will also convert non-objects, such as null,undefine  which are not valid JSON.

## Serve HTML CSS & JS Files in Express JS | Middleware in Express JS 

```
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
```
# [HTML FILE IN EXPRESS.JS FOLDER LINK](https://github.com/pattjoshi/Node.js_Note/tree/master/STACTIC%20FILE%20IN%20EXPRESS.JS)

<img width="816" alt="image" src="https://user-images.githubusercontent.com/78966839/177382083-e705ede4-e8aa-4ecc-be08-0d585f6882c2.png">

- shpw static web-site in express.js Template Engines.

# [Template Engines](https://expressjs.com/en/guide/using-template-engines.html#:~:text=Some%20popular%20template%20engines%20that,it%20also%20supports%20several%20others.)

- In express.js we play with dinamic data we use 
- Some popular template engines that work with Express are [pug](https://pugjs.org/api/getting-started.html),[Mustache,](https://www.npmjs.com/package/mustache) and  [EJS.](https://www.npmjs.com/package/ejs)

```
npm i hbs
```
- This defaults to the views directory in the application root directory.
- create a file with .hbs extension.

```
// create expess appliction
const express = require("express");
const app = express();

// set the view engine to hbs
app.set("view engine", "hbs");

// template engin route
app.get("/", (req, res) => {
  res.render("index", {
    Name: "Om Prakash Pattjoshi",
    hobby: "redding and coding",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```
## server run
```
nodemon src/index.js
```

<img width="807" alt="image" src="https://user-images.githubusercontent.com/78966839/177556257-496fa985-9097-43a2-b085-5779a950c946.png">


[FLODER LINK](https://github.com/pattjoshi/Node.js_Note/tree/master/EXPRESS.JS_%20DINAMIC%20FETCH%20DATA)

# Customizing the Views Directory in Express JS
```
const path = require("path");
app.set("views", path.join(__dirname, "../templates"));
```
# Partials  in Express JS
- Partials is just like your component in react.js.
- if i want header in all page . i, create a header Partials and ani where i want.
- Those code are repeat that code stay on Partials folder.

## require Partials
```
const path = require("path");
// create expess appliction
const express = require("express");
const app = express();
const hbs = require("hbs");

hbs.registerPartials(path.join(__dirname, "../templates/partials"));

```
********
```
nodemon src/index.js -e js,hbs
```
## adding Partials

```
  {{> footer }}
```

# 404 page in express.js

```
// 404 page in express (spacific error)
app.get("/about/*", (req, res) => {
  res.render("404", {
    errorcoment: "oops this about page is not found",
  });
});

// 404 page in express
app.get("*", (req, res) => {
  res.render("404", {
    errorcoment: "Page not found",
  });
});

```
***********
```
404.hbs

  {{errorcoment}}

```
<img width="832" alt="image" src="https://user-images.githubusercontent.com/78966839/177599324-353de1bc-54fc-4c67-b211-d7844aa02f39.png">

# [Query Parameters in Node.js](https://www.geeksforgeeks.org/reading-query-parameters-in-node-js/)
- in query string what use wirtten in URL that show.
```
app.get("/user", function(req, res){
    var name = req.query.name
      
    console.log("Name :", name)
})
```

# [ Git SSH Setup](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

- Secure Shell
- Communication Protacol(Like http, https, ftp,etc)
- Do just about anything on the remote computer
- Traffic is encrypted
- Used mostly in the terminal/command line
- SSH is the client
- SSHD is the server (Open SSH Daemon)
- The server most have SSHD installed and runnning or you will not able toconnect using SSH.
 
# Generating Keys (Windos)
```
`/.ssh/id_rsa (Private Key)
`/.ssh/id_rsa.pub (Public Key)
```
- Public Key goes into server "authorized_keys" file
- Gint Base & aother termonal programes include the ssh command & other Unix tools

*********

# SSH Cheat Sheet
## This sheet goes along with this [SSH YouTube tutorial](https://www.youtube.com/watch?v=hQWRp-FdTpc&t=1270s)

### Login via SSH with password (LOCAL SERVER)
```$ ssh brad@192.168.1.29```

### Create folder, file, install Apache (Just messing around)
```$ mkdir test```

```$ cd test```

```$ touch hello.txt```

```$ sudo apt-get install apache2```


### Generate Keys (Local Machine)
```$ ssh-keygen```

### Add Key to server in one command
```> cat ~/.ssh/id_rsa.pub | ssh brad@192.168.1.29 "mkdir -p ~/.ssh && chmod 700 ~/.ssh && cat >>  ~/.ssh/authorized_keys```

### Create & copy a file to the server using SCP
```$ touch test.txt```
```$ scp ~/test.txt brad@192.168.1.29:~```


## DIGITAL OCEAN

> Create account->create droplet

### Create Keys For Droplet (id_rsa_do)
```$ ssh-keygen -t rsa```

> Add Key When Creating Droplet

### Try logging in
```$ ssh root@doserver```

### If it doesn't work
```$ ssh-add ~/.ssh/id_rsa_do```
(or whatever name you used)

### Login should now work
```$ ssh root@doserver```

### Update packages
```$ sudo apt update```

```$ sudo apt upgrade```

### Create new user with sudo
```$ adduser brad```

```$ id brad```

```$ usermod -aG sudo brad```

```$ id brad```

### Login as brad
```> ssh brad@doserver```

### We need to add the key to brads .ssh on the server, log back in as root
```$ ssh root@doserver```

```$ cd /home/brad```

```$ mkdir .ssh```

```$ cd .ssh```

```$ touch authorized_keys```

```> sudo nano authorized_keys```
(paste in the id_rsa_do.pub key, exit and log in as brad)

### Disable root password login
```$ sudo nano /etc/ssh/sshd_config```

### Set the following
```PermitRootLogin no```

```PasswordAuthentication no```

### Reload sshd service
```$ sudo systemctl reload sshd```

### Change owner of /home/brad/* to brad
```$ sudo chown -R brad:brad /home/brad```

### May need to set permission
```$ chmod 700 /home/brad/.ssh```

### Install Apache and visit ip
``` $ sudo apt install apache2 -y```

## Github

### Generate Github Key(On Server)
``` $ ssh-keygen -t rsa```
(id_rsa_github or whatever you want)

## Add new key
```$ ssh-add /home/brad/.ssh/id_rsa_github```

## If you get a message about auth agent, run this and try again
```$ eval `ssh-agent -s````

## Clone repo
```$ git clone git@github.com:bradtraversy/react_otka_auth.git```

## Install Node
```$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -```

```$ sudo apt-get install -y nodejs```

## Install Dependencies
```  $ npm install ```

## Start Dev Server and visit ip:3000
```$ npm start```

## Build Out React App
``` $ npm run build```

## Move static build to web server root
``` $ sudo mv -v /home/brad/react_otka_auth/build/* /var/www/html```







