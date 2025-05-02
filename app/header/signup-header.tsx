"use client"
import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";

export default function Signupheader() {
  const [open,setOpen]=useState(true)
  return (
    <div className={` ${!open ? "hidden" :"block"}  max-w-[1440px]   h-[38px] mx-auto px-[16px] sm:px-0  w-full flex  bg-[#245D30]`}>
      <div className="max-w-[540px] hidden sm:block h-[38px] w-full"></div>
      <div className="max-w-[896px] w-full h-[38px] flex  justify-start  ">
        <div className="max-w-[796px] w-full h-[38px] flex justify-between items-center">
          <div className="max-w-[390px] w-full  h-[17px]">
            <p className='text-[10px]  sm:text-[14px] font-normal  text-white '>Sign up and get 20% off to your first order. <a  href="">Sign Up Now</a> </p>
          </div>
          <button onClick={()=>setOpen(false)}   className='w-[20px] cursor-pointer h-[20px]  flex items-center justify-center '> <IoMdClose size={20} color='white' />  </button>
        </div>
      </div>
    </div>
  );
}
