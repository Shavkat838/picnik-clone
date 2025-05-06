"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, {  useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5';

import { usePathname } from 'next/navigation';
import useStore from '@/store/useCartStore';


export default function Header() {
 const pathname=usePathname()
 const [open,setOpen]=useState(false)
 const {carts}=useStore()


  return (
    <div className="max-w-[1440px]  w-full h-[100px] mx-auto  flex items-center justify-center ">
      <div className="max-w-[1240px] h-[100px] border-b border-b-[#245D3033] w-full flex px-[16px] sm:px-0 justify-between  sm:gap-[241px] items-center ">
        <Link href={"/"}>
          <Image
            className="w-[60px] h-[60px]"
            src={"/logo.svg"}
            alt="photo"
            width={60}
            height={60}
          />
        </Link>
        <ul className="max-w-[380px]   w-full hidden   h-[20px]  sm:flex  gap-[35px] items-center">
          <Link className="" href={"/"}>
            <li
              className={`text-[16px] font-medium  ${
                pathname === "/" ? "text-green-700" : "text-black"
              }`}
            >
              Bosh sahifa
            </li>
          </Link>
          <Link href={"/mahsulot"}>
            <li
              className={`text-[16px] font-medium ${
                pathname === "/mahsulot" ? "text-green-700" : "text-black"
              }`}
            >
              Mahsulotlar
            </li>
          </Link>
          <Link href={"/aloqa"}>
            <li
              className={`text-[16px] font-medium ${
                pathname === "/aloqa" ? "text-green-700" : "text-black"
              }`}
            >
              Aloqa
            </li>
          </Link>
          <Link href={"/blog"}>
            <li
              className={`text-[16px] font-medium ${
                pathname === "/blog" ? "text-green-700" : "text-black"
              }`}
            >
              Blog
            </li>
          </Link>
        </ul>
        {open ? (
          <div className="absolute top-[100px] left-1 right-1  bg-gray-100 rounded-md p-1 flex flex-col gap-1 sm:hidden z-50">
            <ul>
              <Link className="" href={"/"}>
                <li
                  className={`text-[16px] font-medium  ${
                    pathname === "/" ? "text-green-700" : "text-black"
                  }`}
                >
                  Bosh sahifa
                </li>
              </Link>
              <Link href={"/mahsulot"}>
                <li
                  className={`text-[16px] font-medium ${
                    pathname === "/mahsulot" ? "text-green-700" : "text-black"
                  }`}
                >
                  Mahsulotlar
                </li>
              </Link>
              <Link href={"/aloqa"}>
                <li
                  className={`text-[16px] font-medium ${
                    pathname === "/aloqa" ? "text-green-700" : "text-black"
                  }`}
                >
                  Aloqa
                </li>
              </Link>
              <Link href={"/blog"}>
                <li
                  className={`text-[16px] font-medium ${
                    pathname === "/blog" ? "text-green-700" : "text-black"
                  }`}
                >
                  Blog
                </li>
              </Link>
            </ul>
          </div>
        ) : (
          ""
        )}

        <div className="sm:hidden max-w-[95px] w-full h-[24px] flex items-center justify-around">

          <div className="relative w-[24px] h-[24px]">
            <Link href={"/cart"}>
              <Image
                className="cursor-pointer"
                src={"/savat.svg"}
                alt="photo"
                width={24}
                height={24}
              />
            </Link>
            <div className=" absolute top-[-10] right-[-10] w-[15px] h-[15px] rounded-full bg-slate-800 text-white flex items-center justify-center">
              {carts.length}
            </div>
          </div>
          <Image
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
            src={"/menu.svg"}
            alt="photo"
            width={24}
            height={24}
          />
        </div>
        <div className="max-w-[318px] h-[38px] w-full sm:flex hidden  justify-end items-center">

          <div className="w-[24px] h-[24px] relative">
            <Link href={"/cart"}>
              <Image
                className="w-[24px] h-[24px] cursor-pointer "
                src={"/savat.svg"}
                alt="photo"
                width={24}
                height={24}
              />
              <div className="absolute top-[-10px] w-[15px] h-[15px] flex items-center justify-center rounded-full bg-slate-900 text-white right-[-10px]">
                {carts.length}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
