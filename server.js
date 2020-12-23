const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
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
  // console.log(req.body)
  const newUser = new User({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  })
  // console.log(newUser)
  await newUser.save(err => {
    if (!err) console.log("success")
    
  })
  // var result = await newUser.save();
  // if(!result) console.log("error occured");
  // console.log(result);
})

const port = process.env.PORT || 5000;

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log("server running on port " + port);
})
