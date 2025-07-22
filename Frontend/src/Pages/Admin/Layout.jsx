import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../../Components/Admin/Sidebar'



export default function Layout() {
  const navigate = useNavigate()

  const logout = async()=>{
  navigate('/')
  }
  return (
    <>
    <div className='flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200'>
     <img src={assets.logo} alt="logo" className='w-32 sm:w-40 cursor-pointer'
     onClick={()=>navigate('/')}/>
     <button className='text-sm px-8 py-2 bg-[#5044E5] text-white rounded-full cursor-pointer'
      onClick={logout}>Logout</button>
    </div>
    <div className='flex h-[calc(100vh-70px)]'>
      <Sidebar/>
      <Outlet/>
    </div>
    </>
  )
}
