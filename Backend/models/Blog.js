const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    subTitle:{
        type: String
    },
    description:{
        type: String,
        required:true
    },
    category:{
        type: String,
        required:true
    },
    image:{
        type: String,
        required: true
    },
    isPublished:{
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('blog',blogSchema)