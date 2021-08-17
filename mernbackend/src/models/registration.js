const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname:{
    type: String,
    required: true
  },
  phone:{
    type: Number,
    required: true,
    unique:true
  },
  password:{
    type: String,
    required: true
  },
  confirmpassword:{
    type: String,
    required: true
  },
});

const Register = new mongoose.model("User", userschema)

module.exports = Register;
