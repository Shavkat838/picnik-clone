"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Cart, IMAG_URL_PIKNIK, Product } from '../helpers/types'
import Link from 'next/link';
import useStore from '@/store/useCartStore';




type ProductProps={
  product:Product;
}






export default function ProductComponent({product}:ProductProps) {

const {setCarts}=useStore()

  const imageUrl=IMAG_URL_PIKNIK+product.image_src
  return (
    <div className="max-w-[370px] sm:max-w-[295px] w-full border rounded-[8px]  bg-[#e9f8ec]  h-[408px]">
      <Link href={`detail/${product.id}`}>
        <div className="max-w-[370px] sm:max-w-[295px] w-full h-[298px] rounded-[8px]">
          <Image
            className="max-w-[370px] sm:max-w-[295px] h-[298px] w-full"
            src={imageUrl}
            alt="photo"
            width={295}
            height={298}
          />
        </div>
      </Link>
      <div className="max-w-[295px] w-full h-[110px] px-2 py-1">
        <h1 className=" text-[18px] sm:text-[20px] font-bold text-black mt-[17px]">
          {product.title}
        </h1>
        <Image
          className="mt-[10px]"
          src={"/yulduz.svg"}
          alt="photo"
          width={150}
          height={19}
        />
        <div className="flex justify-between max-w-[295px]   w-full items-center h-[32px]">
          <p className="text-[24px] font-bold">${product.price}</p>
          <Image onClick={()=>setCarts({id:Date.now(),product,quantity:1})}  className='cursor-pointer' src={"/savatcha.svg"} alt="photo" width={26} height={26} />
        </div>
      </div>
    </div>
  );
}
