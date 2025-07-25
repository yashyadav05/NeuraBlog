import React, { useState } from 'react'
import { blog_data, blogCategories } from '../assets/assets'
// import { motion } from "motion/react" i change this due to some issues in future have any so i have to shift to this
import { motion } from "framer-motion"
import Blogcard from './Blogcard'


export default function Bloglist() {
    const [menu,setMenu] = useState("All")
  return (
    <div>
        <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
            {blogCategories.map((item,index)=>(
                <div key={index} className='relative'>
                    <button onClick={()=> setMenu(item)}
                        className={`cursor-pointer text-gray-500 ${menu === item &&   'text-white px-4 pt-0.5'}`}
                        >
                        {item}
                        {menu === item && (<motion.div layoutId='underline' transition={{type: 'spring', stiffness: 500, damping: 30}} className='absolute left-0 right-0 top-0 h-7 -z-1 bg-[#5044E5] rounded-full'></motion.div>)}
                    </button>
                </div>
            ))}
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40'>
            {/* Blog cards */}
            {blog_data.filter((blog)=>menu === "All" ? true : blog.category === menu).map((blog)=><Blogcard key={blog._id} blog={blog}/>)}
        </div>
    </div>
  )
}
