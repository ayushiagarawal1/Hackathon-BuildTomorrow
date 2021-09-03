require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();

const hostname = '127.0.0.1';
//const port = 3000;

require("./db/connect");
const Register = require("./models/registration");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);

app.get("/", (req, res) => {
   res.render("index");
});

app.get( "/register", (req, res) => {
  res.render("register");
});

app.get( "/login", (req, res) => {
  res.render("login");
});

app.get( "/contactUs", (req, res) => {
  res.render("contactUS");
});

//create a new user in our database
app.post( "/register", async(req, res) => {
  try{
    const password = req.body.password;
    const cpassword = req.body.confirmpassword;

    if(password === cpassword){

      const registerUser = new Register({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword
      })

      const registered = await registerUser.save();
      res.status(201).render("index");
    }
    else{
      res.send("Passwords are not matching!!");
    }

  }
  catch (error){
  res.status(400).send(error);
  }
});

//login Check(validation)
app.post( "/login", async(req, res) => {
  try {
    const phonenumber = req.body.phone;
    const pass = req.body.password;

     const userphone = await Register.findOne({phonenumber:phone});
      if(userphone.pass === password){
        res.status(201).render("index");
      }else{
        res.send("Invalid Login Details!!!");
      }

  } catch (error) {
    res.status(400).send("Invalid Login Details!!@!");
  }
});


app.listen(port, hostname, () => {
  console.log(`Server Is Running At Port No. http://${hostname}:${port}/`);
});
