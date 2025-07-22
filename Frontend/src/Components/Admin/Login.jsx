import React, { useState } from 'react'

export default function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log("Working")
  }
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-sm p-6 max-md:m-6 border border-[#CAC6F7]
      shadow-xl shadow-[#CAC6F7] rounded-lg'>
        <div className='flex flex-col items-center justify-center'>
          <div className='w-full py-6 text-center'>
            <h1 className='text-3xl font-bold'><span className='text-[#5044E5]'>Admin</span> Login</h1>
            <p className='font-light'>Enter your credentials to access the admin panel</p>
          </div>
          <form onSubmit={handleSubmit} className='mt-6 w-full sm:max-w-md text-gray-600'>
            <div className='flex flex-col'>
              <label>Email</label>
              <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='✉️ Enter your email' required className='border-b-2
              border-gray-300 p-2 outline-none mb-6' />
            </div>
            <div className='flex flex-col'>
              <label>Password</label>
              <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='🔒 Enter your Password' required className='border-b-2
              border-gray-300 p-2 outline-none mb-6' />
            </div>
            <button type='submit' className='w-full py-3 font-medium bg-[#5044E5] text-white
            rounded cursor-pointer hover:bg-[#4f44e5eb] transform transition-transform hover:scale-105 active:scale-95 duration-200 ease-in-out'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}
