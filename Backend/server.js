// 1. Load environment variables
require("dotenv").config()

// 2. Basic Express setup
const express = require("express")
const cors = require("cors")
const PORT = process.env.PORT || 4000
const app = express()

// 3. Middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

// 4. Root route
app.get("/", (req, res) => {
    res.send("Hello Everyone")
})

// 5. DB connection
const Maindb = require("./Config/Database")
Maindb()

// 6. Api route
const userRoute = require('./routes/adminRoute')
const blogRoute = require('./routes/blogRoute')
app.use("/api/auth",userRoute)
app.use("/api/blog",blogRoute)

// 6. Start server
app.listen(PORT, ()=>console.log(`Server is connected to http://localhost:${PORT}`))