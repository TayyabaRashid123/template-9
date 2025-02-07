import Link from 'next/link';
import React from 'react';
import {IoIosSearch} from "react-icons/io";
import {AiOutlineUser}from "react-icons/ai";
import{BsHandbag}from "react-icons/bs";
import{MdOutlineMailOutline} from "react-icons/md";

const Header = () => {
  
    return (
        <div className="lg:max-w-[1920px] h-[90px] w-full bg-[#000]">
          <div className="lg:max-w-[1320px] w-full h-[32px] justify-around p-8 left-{300} top-{29px} flex items-center justify-between mx-auto">
            {/* Logo */}
<div className="flex items-center">
          <h1 className="font-bold text-2xl text-white">Food</h1>
           <span className="font-bold text-2xl text-[#FF9F0D]">tuck</span>
           </div>
      
          {/* Navigation Tabs */}
            <ul className="flex w-[508px] h-[24px] gap-4">
              <li className="text-[16px] font-bold text-[#FF9F0D]">
             <Link href="/">Home</Link>
              </li>
              <li className="text-[16px] font-bold text-white">
             <Link href="/menu">Menu</Link>
              </li>
              <li className="text-[16px] font-bold text-white">
                <Link href="/bloglist">Blog</Link>
              </li>
              <li className="text-[16px] font-bold text-white">
                <Link href="/chef">Pages</Link>
              </li>
              <li className="text-[16px] font-bold text-white">
                <Link href="/about">About</Link>
              </li>
              <li className="text-[16px] font-bold text-white">
                <Link href="/shop">Shop</Link>
              </li>
              <li className="text-[16px] font-bold text-white">
                <Link href="/signin">Contact</Link>
              </li>
            </ul>

            
            {/* Icons */}
            <div className=" flex gap-3">
              <IoIosSearch size={24} className='text-white' />
             <Link href="/signup"> <AiOutlineUser size={24} className='text-white' /></Link>
              <BsHandbag size={24} className='text-white'/> 
            </div>
          </div>
        </div>
      );
      
      
      
}
export default Header;

