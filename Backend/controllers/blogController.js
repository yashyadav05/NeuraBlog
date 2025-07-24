const fs = require('fs')
const Blog = require('../models/Blog')
const { imagekit } = require('../Config/ImageKit')

exports.addBlog = async(req,res)=>{
    try {
        const {title,subTitle,description,category,isPublished} = JSON.parse(req.body.blog)
        const imageFile = req.file
        if(!title ||!description ||!category ||!imageFile){
            return res.status(400).json({
            success: false,
            message: "All fields are mandatory"
           });
        }
        //Imagekit file upload
        const fileBuffer = fs.readFileSync(imageFile.path)
        const response = await imagekit.upload({
            file:fileBuffer,
            fileName:imageFile.originalname,
            folder: '/blogs'
        })
        //optimization through imagekit url
        const optimizedUrl = imagekit.url({
            path:response.filePath,
            transformation: [
                {quality:'auto'}, //Auto compression
                {format:'webp'}, //convert to modern webapp
                {width:'1280'} //width resizing
            ]
        })

        const image = optimizedUrl
       
        await Blog.create({
            title,subTitle,description,category,isPublished,image
        })

        return res.status(201).json({
            success:true,
            message:'Blog uploaded successfully'
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}