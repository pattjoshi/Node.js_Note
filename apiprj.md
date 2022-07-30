# Student_registition

# How to run this

```
npm run dev
```

## adding in .json

```
  "start": "node src/app.js",
 "dev": "nodemon src/app.js"
```

## HTTP Method Name

- CREATE :- POST
- PEAD :- GET
- UPDATE :- PUSH,PATCH
- DELETE:- DELETE

## How our API looks

```
GET /api/users
```

## Initaial npm File

```
npm init -y
```

---

# Depencency

```
npm i express
npm i mongoose
npm i validator
```

## Command Line New file add

```
type nul > app.js
```

## Pote Dinamic

```
const port = process.env.PORT || 3000;
```

- In student.js Database realated Work (Mongodb)
- app.js is a Express file

# POSTMAN URL

```
POST localhost:8000/students
```

<img width="843" alt="image" src="https://user-images.githubusercontent.com/78966839/181776730-1a84969a-75c5-456c-bde8-2035bedc0768.png">

- Body
  - raw (json)

## How it show Undefined

```
console.log(req.body);
```

- You DO NOT NEED express.json() and express.urlencoder()
- for GET Requests or DELETE Requests. We only need it for Post and put req.

- express.json() is a method inbuilt in express to recognize the Incoming
- Pequest Object as a JSON Object. This Method is called as a middleware
- In Your application Using the code: app.use(express.json())

```
app.use(express.json());
```

- [status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

<img width="546" alt="image" src="https://user-images.githubusercontent.com/78966839/181798677-e8701641-2a30-4eff-a006-d3208868aaef.png">


# async-Await

```
app.post("/students", async (req, res) => {
  console.log(req.body);
  try {
    const user = new Student(req.body); // req.body is the data that is sent from the client
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (error) {
    res.status(400).send(error);
  }
});
```

# read:- GET (get)

```
// read the data of registered students
app.get("/students", async (req, res) => {
    try {
        const studentData = await Student.find({});
        res.send(studentData);
    } catch (error) {
        res.status(400).send(error);
    }
});
```

# img_3

<img width="942" alt="image" src="https://user-images.githubusercontent.com/78966839/181875672-f6f38046-e3d1-4c7c-9866-42a25a61b835.png">

# get a single student data By ID

```
// get a single student data By ID
app.get("/students/:id", async (req, res) => {
  try {
    const studentData = await Student.findById(req.params.id);
    res.send(studentData);
  } catch (error) {
    res.status(400).send(error);
  }
});
```

---

## URL

```
localhost:8000/students/62e3ef5396a37b4752d41141
```

# Img_4

<img width="944" alt="image" src="https://user-images.githubusercontent.com/78966839/181875954-a4137dfd-ce32-4396-8528-e4e740357283.png">

# UPDATE (PUT , PATCH)

## PATCH

- patch is used to update a single field ( specific path cahnge)

```
app.patch("/students/:id", async (req, res) => {
  try {
    const studentData = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(201).send(studentData);
  } catch (error) {
    res.status(404).send(error);
  }
});
```

# IMg_5

<img width="936" alt="image" src="https://user-images.githubusercontent.com/78966839/181877841-b8620c88-2a2c-4209-8ce7-5cfabd2c2bbf.png">

---

## PUT

- PUT HTTP Request: PUT is a method of modifying resources where the client sends data that updates the entire resource. PUT is similar to POST in that it can create resources, but it does so when there is a defined URL wherein PUT replaces the entire resource if it exists or creates new if it does not exist.

- PUT :- compit change

# DELETE

```

// delete a student data
app.delete("/students/:id", async (req, res) => {
  try {
    const deleteStudentData = await Student.findByIdAndDelete(req.params.id);
    if (!deleteStudentData) {
      res.status(404).send("Student not found");
    }
    res.status(201).send(deleteStudentData);
  } catch (error) {
    res.status(500).send(error);
  }
});
```

# Img_6
<img width="849" alt="image" src="https://user-images.githubusercontent.com/78966839/181878625-4c022090-9c3c-4ba1-aa79-4939cf902ff0.png">

---

# express router

---

- Good Folder Structure
- Cleen Code

# Final

<img width="851" alt="image" src="https://user-images.githubusercontent.com/78966839/181908918-627a4a0e-550a-4d9f-ac7e-7860da900bc6.png">


## 🙏 If you find this repo helpful then don't forget to give a star ❇️ to this repository. :)
