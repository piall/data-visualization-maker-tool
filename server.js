const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const User = require("./models/User");

var mongoDB = "mongodb://localhost:27017/data_viz";
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,})
.then(() => console.log("connected to database"))
.catch(() => console.error("error : ", err))
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/signup", async(req, res, next) => {
  const newUser = new User({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  })
  await newUser.save(err => {
    if (err) {
      return res.status(400).json({
        title: "error",
        error: "email in use"
      })
    }
    return res.status(200).json({
      title: "signup success"
    })
  })
})

app.post("/loginUser", (req, res, next) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) return res.status(500).json({
      title: "server error",
      error: err
    })
    if (!user) {
      return res.status(401).json({
        title: "user not found",
        error: "invalid credentials"
      })
    }
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(401).json({
        tite: "login failed",
        error: "invalid credentials"
      })
    }
    let token = jwt.sign({ userId: user._id}, "secretkey");
    return res.status(200).json({
      title: "login sucess",
      token: token
    })
  })
})


const port = process.env.PORT || 5000;

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log("server running on port " + port);
})
