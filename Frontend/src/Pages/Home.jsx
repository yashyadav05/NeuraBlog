import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Bloglist from '../Components/Bloglist'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Bloglist/>
        <Newsletter/>
        <Footer/>
        </div>
  )
}
