const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
    type: String,
    trim: true,
    lowercase: true,
    required: [true, "Email is required"],
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid email"],
    },
    password: {
    type: String,
    required: [true, "Please enter your password"],
  },
},{timestamps:true})

module.exports = mongoose.model('User',userSchema)