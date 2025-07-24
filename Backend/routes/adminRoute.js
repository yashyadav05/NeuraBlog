const express = require('express')
const { adminSignup, adminLogin } = require('../controllers/adminController')
const router = express.Router()

//signup Route
router.post("/signup",adminSignup)
//login Route
router.post("/login",adminLogin)

module.exports = router