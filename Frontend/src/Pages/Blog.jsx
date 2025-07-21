import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, blog_data, comments_data } from '../assets/assets'
import Navbar from '../Components/Navbar'
import Moment from 'moment'
import Footer from '../Components/Footer'
import Loader from '../Components/Loader'

export default function Blog() {
  const {id} = useParams()
  const [data,setData] = useState(null)
  const [comments,setComments] = useState([])
  const [name,setName] = useState('')
  const [content,setContent] = useState('')
  const fetchBlogData = async()=>{
    const dataid = blog_data.find((item)=>(item._id === id))
    setData(dataid)
  }
  const fectComments = async()=>{
    setComments(comments_data)
  }
  const addComment = async(e)=>{
    e.preventDefault
  }
  useEffect(()=>{
    fetchBlogData()
    fectComments()
  },[])
  return data ? (
    <div className='relative'>
      <img src={assets.gradientBackground} alt="gradientBackground" className='absolute -top-50 -z-1 opacity-50'/>
      <Navbar/>
      <div className='text-center mt-20 text-gray-600'>
        <p className='text-[#6B44E5] py-4 font-medium'>Published on {Moment(data.createdAt).format('Do MMMM YYYY')}</p>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800'>{data.title}</h1>
        <h2 className='my-5 max-w-lg truncate mx-auto'>{data.subTitle}</h2>
        <p className='inline-block py-1 px-4 rounded-full mb-6 border text-sm border-[#CBC7F7] bg-[#F6F5FD] font-medium text-[#6B44E5]'>Michael Brown</p>
      </div>

      <div className='mx-5 max-w-5xl md:mx-auto my-10 mt-6'>
            <img src={data.image} alt="image" className='rounded-3xl mb-5'/>
            <div className='rich-text max-w-3xl mx-auto' dangerouslySetInnerHTML={{__html:data.description}}></div>
            {/* Comment Section */}
             <div className='mt-14 mb-10 max-w-3xl mx-auto'>
              <p className='font-semibold mb-4'>Comments ({comments.length})</p>
              <div>
                {comments.map((item,index)=>(
                  <div key={index} className='relative bg-[#FCFBFF] border border-[#CBC7F7] max-w-xl p-4 rounded text-gray-600'>
                     <div className='flex items-center gap-2 mb-2'>
                      <img src={assets.user_icon} alt="user_icon" className='w-6'/>
                      <p className='font-medium'>{item.name}</p>
                     </div>
                     <p className='text-sm max-w-md ml-8'>{item.content}</p>
                     <div className='absolute right-4 bottom-3 flex items-center gap-2 text-xs'>{Moment(item.createdAt).fromNow()} </div>
                  </div>
                ))}
              </div>
             </div>
             {/* Comment Box */}
             <div className='max-w-3xl mx-auto'>
              <p className='font-semibold mb-4'>Add your comment</p>
                  <form onSubmit={addComment} className='flex flex-col items-start gap-4 max-w-lg'>
                    <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder="Name" required className='w-full p-2 border border-gray-300 rounded outline-none' />
                    <textarea onChange={(e)=>setContent(e.target.value)} value={content} placeholder='Comment' className='w-full p-2 border border-gray-300 rounded outline-none h-48' required></textarea>
                    <button type='submit' className='text-white bg-[#6B44E5] rounded p-2 px-8 hover:scale-105 transition-all cursor-pointer'>Submit</button>
                  </form>
             </div>
             {/* Share Buttons */}
             <div className='my-24 max-w-3xl mx-auto'>
              <p className='font-semibold my-4'>Share this article on social media</p>
              <div className='flex'>
              <img src={assets.facebook_icon} width={50} alt="facebook_icon" />
              <img src={assets.googleplus_icon} width={50} alt="googleplus_icon" />
              <img src={assets.twitter_icon} width={50} alt="twitter_icon" />
              </div>
              
             </div>
             
      </div>
      <Footer/>
    </div>
  ) : <Loader/>
}
