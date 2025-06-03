import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = () => {
  return (
    <>
      <nav>
        <a href="">
            <Image src={assets.logo} className='w-28 cursor-pointer mr-14' alt="username logo" />
        </a>

        <ul>
            <li><a href="#top">Home</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">My Work</a></li>
            <li><a href="#contact">Contact me</a></li>
        </ul>

        <div>
            <a href="#contact">Contact <Image src={assets.arrow_icon} className='w-3' alt="arrow sign" /></a>
        </div>

      </nav>
    </>
  )
}

export default Navbar