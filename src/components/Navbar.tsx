import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
const Navbar = () => {
  return (
    <div className="bg-blue-900 p-5 fixed w-full z-10">
      <div className="flex justify-between item-center">
        <div className="text-xl font-medium" >Portfolio</div>
        <ul className="gap-10 1g:gap-16 hidden md:flex">
            <li className="text-white transition duration-300 hover:text-yellow-700 hover:underline" ><a href="#hero">Home</a></li>
            <li className="text-white transition duration-300 hover:text-yellow-700 hover:underline"><a href="#about">About</a></li>
            <li className="text-white transition duration-300 hover:text-yellow-700 hover:underline"><a href="#projects">Projects</a></li>
            <li className="text-white transition duration-300 hover:text-yellow-700 hover:underline"><a href="#skills">Skills</a></li>
            <li className="text-white transition duration-300 hover:text-yellow-700 hover:underline"><a href="#contact">Contact</a></li>
        </ul>
        <AiOutlineMenu className="md:hidden" size={30} />
      </div>
    </div>
  )
}

export default Navbar
