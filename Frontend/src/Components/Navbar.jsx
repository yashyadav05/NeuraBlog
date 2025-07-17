import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

export default function Navbar() {
    const navigate = useNavigate()
  return (
    <div className='flex justify-between items-center p-5 mx-8 sm:mx-20 xl:mx-32'>
       <img onClick={()=>navigate("/")} src={assets.logo} alt="logo" className='w-32 sm:w-44'/>
       <button onClick={()=>navigate("/admin")} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-[#5044E5] text-white px-10 py-2.5'>Admin Login <img src={assets.arrow} className='w-3' alt="arrow" /></button>
    </div>
  )
}
