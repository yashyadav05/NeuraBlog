import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

export default function Sidebar() {
  return (
    <div className='flex flex-col border-r border-gray-200 min-h-full pt-6'>
        <NavLink end={true} to='/admin' className={({isActive})=>`flex items-center
        gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && 'bg-[#EDECFC] border-r-4 border-[#5044E5]'}`}>
            <img src={assets.home_icon} alt="home_icon"  className='min-w-4 w-5'/>
            <p className='hidden md:inline-block'>Dashboard</p>
        </NavLink>

        <NavLink to='/admin/addBlog' className={({isActive})=>`flex items-center
        gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && 'bg-[#EDECFC] border-r-4 border-[#5044E5]'}`}>
            <img src={assets.add_icon} alt="add_icon"  className='min-w-4 w-5'/>
            <p className='hidden md:inline-block'>Add Blogs</p>
        </NavLink>

        <NavLink to='/admin/listBlog' className={({isActive})=>`flex items-center
        gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && 'bg-[#EDECFC] border-r-4 border-[#5044E5]'}`}>
            <img src={assets.list_icon} alt="list_icon"  className='min-w-4 w-5'/>
            <p className='hidden md:inline-block'>Blog List</p>
        </NavLink>

        <NavLink to='/admin/comments' className={({isActive})=>`flex items-center
        gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && 'bg-[#EDECFC] border-r-4 border-[#5044E5]'}`}>
            <img src={assets.comment_icon} alt="comment_icon"  className='min-w-4 w-5'/>
            <p className='hidden md:inline-block'>Comments</p>
        </NavLink>
    </div>
  )
}
