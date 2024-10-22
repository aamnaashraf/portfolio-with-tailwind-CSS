import React from 'react'
import Navbar from "./Navbar"
const Header = () => {
  return (
    <div id="header" className="min-h-screen bg-no-repeat bg-[url(/banner_bg.png)] bg-left lg:bg-[15%] bg-cover"
      style={{ backgroundSize: "35%" , backgroundPosition:"left 100px top 100px"}}
    >
      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"> </div>
        <div className=" text-[40px] sm:text-[60px] font-bold leading-tight flex justify-center items-center">
          <div>
            <p data-aos="zoom-in-up">My</p>
            <p  data-aos="zoom-in-up">name is</p>
            <p  data-aos="zoom-in-up">Aamna Ashraf Rajput!</p>
            <p className="mt-4 text-xl text-red-800 "  data-aos="zoom-in-up">A passionate developer learning AI, Web 3.0, and Metaverse at GIAIC, building innovative solutions for the future.</p>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Header

