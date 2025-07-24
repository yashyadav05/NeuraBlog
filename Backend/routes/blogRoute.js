const express = require('express')
const { addBlog } = require('../controllers/blogController')
const { upload } = require('../middleware/multer')
const { auth } = require('../middleware/auth')
const router = express.Router()

router.post('/add', upload.single('image'), auth, addBlog)

module.exports = router