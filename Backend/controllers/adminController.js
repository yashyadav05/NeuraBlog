const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.adminSignup = async(req,res)=>{
    try {

    //fetching details
    const {email,password} = req.body
    //verifying fields
    if(!email ||!password){
      return res.status(400).json({
      success: false,
      message: "Email and password are required"
    });
    }
    //checking user
    const existingUser = await User.findOne({email})
    if(existingUser){
      return res.status(400).json({
      success: false,
      message: "User already exists"
    });
    }
    //password hashing
    const hashPassword = await bcrypt.hash(password,10)
    //Saving user detail in db
    const user = await User.create({
        email,
        password:hashPassword,
    })
    //final response
    return res.status(201).json({
    success: true,
    message: "User created successfully"
  });

    } catch (error) {
        console.log(error,)
        return res.status(500).json({
            success:false,
            message:'Internal server error'
        })
    }
}

//Login Controller
exports.adminLogin = async(req,res)=>{
  try {
  //Fetch email and password
  const {email,password} = req.body
  
  //check all fields are filled or not
  if(!email || !password){
    return res.status(400).json({
      success:false,
      message:"All fields are mandatory"
    })
  }
  //finding user
  const user = await User.findOne({email})
  if(!user){
    return res.status(403).json({success:false,message:"User not exist"})
  }
  //Payload
  const Payload = {
    email:user.email,
    password:user.password
  }
  //generate jwt token after password matching
  if(await bcrypt.compare(password,user.password)){
    const token = jwt.sign(Payload,process.env.JWT_SECRET,{
        expiresIn:'50h'
    })
    user.token = token,
    user.password = undefined

    //cookie
    res.cookie('token',token,{
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 50, // 50 hours
    }).status(200).json({
        success:true,
        token,
        user: {
           id: user._id,
           email: user.email
         },
        message:"user logged in successfully"
    })
  }else{
    return res.status(400).json({
      success:false,
      message:"Incorrect Password"
    })
  }

  } catch (error) {
     console.log(error,)
    return res.status(500).json({
    success:false,
    message:'Internal server error'
    })
  }
}