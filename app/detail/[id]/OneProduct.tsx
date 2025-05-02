"use client"
import { IMAG_URL_PIKNIK, OneProduct } from "@/app/helpers/types";
import useStore from "@/store/useCartStore";
import Image from "next/image";
import {  useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

type Props={
    item:OneProduct;
}

export default function OneProductDetail({item}:Props) {
    const [imageId,setImageId]=useState(0)
    const [quantity,setQuantity]=useState(1)

    const {setCarts}=useStore()


    function aniqla(param:string){
      if(param==="PLUS"){
        setQuantity(quantity+1)
      }
      else{
        if(quantity>1){
          setQuantity(quantity-1)
        }
      }
    }

  return (
    <div className="max-w-[1240px] mx-auto  w-full mb-[80px] sm:mb-[150px] px-[16px] sm:px-0  ">
      <div className="h-[77px] max-w-[1240px] w-full flex items-center">
        <Image src={"/chap.svg"} alt="photo" width={34} height={34} />
      </div>
      <div className="max-w-[1240px] flex  flex-col sm:flex-row gap-[46px] sm:h-[530px] h-[955px] ">
        <div className="max-w-[582px] w-full h-[322px] sm:h-[530px] flex justify-between ">
          <div className="flex flex-col scrollbar-none  overflow-auto overflow-x-hidden  gap-[10px] max-w-[70px] sm:max-w-[120px] w-full">
            {item.product_images.map((i,index) => (
              <div onClick={()=>setImageId(index)} key={index+1} className="max-w-[120px] cursor-pointer w-full  h-[70px] sm:h-[120px]   rounded-[15px]">
                <Image  className={`max-w-[70px]  ${imageId===index? " border border-red-950" :" border" }  h-[70px] sm:max-w-[120px] sm:h-[120px] w-full rounded-[15px] bg-cover `}  src={IMAG_URL_PIKNIK+i.images_src} alt="photo" width={120} height={120} />
              </div>
            ))}
          </div>
          <div className="max-w-[270px] sm:max-w-[444px] h-[322px] sm:h-[530px] w-full rounded-[10px] border border-gray">
            <Image
            className="max-w-[270px]  sm:max-w-[444px] border rounded-[15px] h-[322px] sm:h-[530px] bg-cover"
              src={IMAG_URL_PIKNIK+item.product_images [imageId].images_src}
              alt="photo"
              width={444}
              height={530}
            />
          </div>
        </div>
        <div className="max-w-[612px] w-full min-h-[587px]  sm:min-h-[530px] flex flex-col justify-between">
          <div className="max-w-[584px] w-full h-[139px]">
            <h1 className="font-bold text-[24px] sm:text-[34px] text-[#000000]">
              {item.title}
            </h1>
            <Image
              className="mt-[13px]"
              src={"/yulduz.svg"}
              alt="photo"
              width={193}
              height={24}
            />
            <Image
              className="mt-[13px]"
              src={"/skitka.svg"}
              alt="photo"
              width={260}
              height={43}
            />
          </div>
          <div className="max-w-[612px] w-full min-h-[276px] sm:min-h-[253px] flex flex-col gap-[13px]">
            <p className="text-[12px] sm:text-[16px] leading-[24px] text-gray  text-medium">
                {item.description}
            </p>
          </div>
          <div className="max-w-[612px] w-full h-[113px]  sm:h-[52px] flex flex-col sm:flex-row justify-between">
            <div className="max-w-[370px]  sm:max-w-[193px] w-full h-[52px] sm:h-[48px] flex items-center justify-around  bg-[#F0F0F0] rounded-[62px]">
              <FaMinus onClick={()=>aniqla("MINUS")}  className="cursor-pointer" size={14} color="black" />
              <p className="text-[14px] font-medium text-black">{quantity}</p>
              <FaPlus   onClick={()=>aniqla("PLUS")}  className="cursor-pointer" size={14} color="" />
            </div> 
            <button  onClick={()=>setCarts({id:Date.now(),product:item,quantity})}  className="max-w-[400px] w-full h-[46px] sm:h-[52px] bg-[#245D30] rounded-[62px] text-[16px] font-medium text-white ">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] w-full  h-[302px] sm:h-[753px] flex flex-col justify-between items-center mt-[72px] sm:mt-[120px]">
        <h1 className="text-[36px] font-bold  text-center sm:text-left text-black">
          Mahsulot Videosi va Xususiyatlari
        </h1>
        <div className=" bg-[url('/videofon.svg')]  max-w-[1240px] w-full  h-[193px] mt-[20px] sm:mt-0  sm:h-[640px] flex items-center justify-center rounded-[20px] border">
          <Image src={"/startvideo.svg"} alt="photo" width={120} height={120} />
        </div>
      </div>
    </div>
  );
}
