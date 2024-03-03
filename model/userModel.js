const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    //  validate(value){
    //     if(!validator(value)){
    //         throw new Error("Invalid Email Id");
    //     }
    // }
  },
  phone: {
    type: String,
    required: [true, "phone no is required"],
  },
  password: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("user", userSchema);
