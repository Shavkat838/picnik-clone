"use client"
import useStore from '@/store/useCartStore';
import Image from 'next/image'
import React, { useState }  from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { IMAG_URL_PIKNIK } from '../helpers/types';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { createClient } from '@/utils/client';
import { useRouter } from 'next/navigation';



export default function CartPage() {


const {carts,handleQuantity,handleDeleteCart,setCarts}=useStore()
const [open,setOpen]=useState(false)
const [fullname,setFullname]=useState("")
const [raqam,setRaqam]=useState("")
const [manzil,setManzil]=useState("")
const [xabar,setXabar]=useState("")
const supabase=createClient()
const router=useRouter()

function totalsumma(){
  let natija=0;
  for(let i=0;i<carts.length;i++){
    natija=natija+carts[i].quantity*carts[i].product.price
  }
  return natija
}


async function handleSave(){

  if(fullname===""||raqam===""||manzil===""||xabar===""){
    alert("Malumotlarni to`liq kiriting")
    return
  }
 try {
    const obj = {
      fullname,
      raqam,
      manzil,
      xabar,
      carts,
    };
    await supabase.from("orders").insert([obj]).select();
    alert("Buyurtmangiz muvaffaqiyatli qabul qilindi!")
   clearForm()
 } catch (error) {
  console.log(error)
 }
   setOpen(false);
}


function clearForm(){
  setXabar("")
  setFullname("")
  setManzil("")
  setRaqam('')
  router.refresh()
  
}

  return (
    <div className="max-w-[1240px] mx-auto w-full min-h-[786px]  px-[16px] sm:px-0 ">
      <h1 className="text-[36px] sm:text-left text-center font-bold  text-black mt-[50px] sm:mt-[32px]">
        Sizning savatingiz
      </h1>
      {carts.length === 0 ? (
        <h1 className="font-semi-bold text-[30px] text-center ">
          Sizning savatingiz hozircha bo`sh
        </h1>
      ) : (
        <div className="max-w-[1240px] w-full flex flex-col sm:flex-row gap-[24px] sm:gap-[20px] mt-[50px] sm:mt-[45px]">
          <div className="max-w-[715px] overflow-y-scroll w-full h-[390px] sm:h-[528px] flex flex-col gap-[24px] border border-[#0000001A] rounded-[20px] items-center py-[24px] px-[16px] sm:px-[24px] sm:py-[30px]">
            {/* cart */}

            {carts.map((item, index) => (
              <div key={index + 1} className="max-w-[667px] w-full  ">
                <div className="max-w-[667px] w-full gap-[16px]  flex ">
                  <Image
                    className="w-[80] h-[80] sm:w-[120] sm:h-[120]"
                    src={IMAG_URL_PIKNIK + item.product.image_src}
                    alt="photo"
                    width={124}
                    height={124}
                  />
                  <div className="max-w-[527px] w-full h-[82px] sm:h-[124px] flex justify-between items-center">
                    <div className="max-w-[71px]  h-[60px] sm:h-[118px] w-full flex flex-col justify-between">
                      <h1 className=" text-[18px] sm:text-[20px] font-bold text-[#000000]">
                        {item.product.title}
                      </h1>
                      <h1 className="sm:text-[24px] text-[18px] font-bold text-[#000000] ">
                        ${item.product.price}
                      </h1>
                    </div>
                    <div className="max-w-[255px]  w-full h-[82px] sm:h-[124px] flex flex-col justify-between items-end">
                      <button className="w-[24px] h-[24px]">
                        <MdDelete
                          className="cursor-pointer"
                          onClick={() => handleDeleteCart(item.id)}
                          size={24}
                          color="red"
                        />
                      </button>
                      <div className=" max-w-[102px] sm:max-w-[126px] w-full h-[31px] sm:h-[44px] flex items-center justify-around  bg-[#F0F0F0] rounded-[62px]">
                        <FaMinus
                          onClick={() => handleQuantity("MINUS", item.id)}
                          className="cursor-pointer"
                          size={14}
                          color="black"
                        />
                        <p className="text-[14px] font-medium text-black">
                          {item.quantity}
                        </p>
                        <FaPlus
                          onClick={() => handleQuantity("PLUS", item.id)}
                          className="cursor-pointer"
                          size={14}
                          color=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="max-w-[667px] w-full bg-[#0000001A] mt-[24px] " />
              </div>
            ))}
          </div>
          <div className="max-w-[505px] w-full mb-[104px] sm:h-[406px] h-[344px] sm:mb-0 h-[] border border-[#0000001A] rounded-[20px] px-[16px] py-[24px] sm:py-[30px] sm:px-[24px]">
            <h1 className="font-bold text-black  text-[20px] sm:text-[24px]  ">
              Buyurtma xulosasi
            </h1>
            <div className="max-w-[457px] w-full flex  flex-col justify-between h-[118px] sm:h-[137px] mt-[22px] sm:mt-[24px] ">
              <div className="flex justify-between">
                <p className=" text-[14px]  sm:text-[20px] font-normal text-[#00000099]">
                  Oraliq jami
                </p>
                <p className=" text-[14px] sm:text-[20px] text-black  font-semibold">
                  {totalsumma()}
                </p>
              </div>
              <div className="flex justify-between ">
                <p className=" text-[14px] sm:text-[20px]  font-normal text-[#00000099]">
                  Chegirma (-20%)
                </p>
                <p className=" text-[14px] sm:text-[20px] text-[#FF3333]  font-semibold">
                  -113000
                </p>
              </div>
              <hr />
              <div className="flex justify-between ">
                <p className=" text-[16px]  sm:text-[20px]  font-normal text-[#00000099]">
                  Umumiy
                </p>
                <p className="text-[20px]  sm:text-[24px] text-black font-semibold">
                  {carts.length > 0 ? totalsumma() - 113 : 0}
                </p>
              </div>
            </div>
            <div className="max-w-[457px] h-[42px] sm:h-[48px] w-full flex gap-[12px] items-center mt-[22px] sm:mt-[24px]">
              <div className="relative max-w-[326px] w-full">
                <input
                  type="text"
                  placeholder="Promo code qo`shing"
                  className="max-w-[326px] w-full  h-[42px] sm:h-[48px] text-center  text-[12px] sm:text-[16px] text-[#00000066] bg-[#F0F0F0] rounded-[62px]"
                />
                <Image
                  className="absolute top-3 left-3 sm:left-7 w-[18px] h-[18px] sm:w-[24px] sm:h-[24px] "
                  src={"/promokod.svg"}
                  alt="photo"
                  width={24}
                  height={24}
                />
              </div>
              <button className="bg-[#245D30] max-w-[119px]  w-full rounded-[62px] h-[39px] sm:h-[48px] text-white">
                Tekshirish
              </button>
            </div>
            <button
              onClick={() => setOpen(true)}
              className="max-w-[457px]  cursor-pointer w-full  h-[44px] sm:h-[60px]  mt-[22px] sm:mt-[24px] rounded-[62px] bg-[#245D30] flex justify-center  gap-[4px] items-center "
            >
              <h1 className="text-[16px] font-medium text-white">
                Buyurtma berish
              </h1>
              <Image
                className="sm:w-[24px] sm:h-[24px] h-[20px] w-[20px]"
                src={"/arrow.svg"}
                alt="photo"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      )}

      <div>
        <AlertDialog open={open}>
          <AlertDialogContent className="max-w-[603px] w-full rounded-[20px]   sm:h-[750px]    p-[40px]">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-center text-[24px] font-bold ">
                Buyurtma Berish Ma`lumotlarini Kiriting
              </AlertDialogTitle>
              <AlertDialogDescription className=" mt-[40px] flex flex-col gap-[12px] sm:mt-[53px]">
                <>
                  <span className="text-[20px] text-left text-[#000000]  font-medium ">
                    Ism va Familiya
                  </span>
                  <input
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    type="text"
                    placeholder="To`liq ism va familiyangizni kiriting"
                    className="max-w-[523px] px-[10px] w-full mt-[4px]  h-[50px] rounded-[10px]  border border-[#414141] "
                  />
                </>
                <>
                  <span className="text-[20px] text-left    text-[#000000]  font-medium ">
                    Telefon raqam
                  </span>
                  <input
                    value={raqam}
                    onChange={(e) => setRaqam(e.target.value)}
                    type="text"
                    placeholder="Telefon raqamingizni kiriting"
                    className="max-w-[523px] px-[10px] w-full mt-[4px]  h-[50px] rounded-[10px]  border border-[#414141] "
                  />
                </>
                <>
                  <span className="text-[20px]  text-left  text-[#000000]  font-medium ">
                    Manzil
                  </span>
                  <input
                    value={manzil}
                    onChange={(e) => setManzil(e.target.value)}
                    type="text"
                    placeholder="Manzilingizni kiriting"
                    className="max-w-[523px] px-[10px] w-full mt-[4px]  h-[50px] rounded-[10px]  border border-[#414141] "
                  />
                </>
                <>
                  <span className="text-[20px]  text-left text-[#000000]  font-medium ">
                    Xabar
                  </span>
                  <textarea
                    value={xabar}
                    onChange={(e) => setXabar(e.target.value)}
                    placeholder="Qo`shimcha malumot yoki talablaringizni yozing"
                    className="max-w-[523px] pt-[4px] px-[10px] w-full mt-[4px]  h-[127px] rounded-[10px]  border border-[#414141]"
                  ></textarea>
                </>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setOpen(false)}>
                Chiqish
              </AlertDialogCancel>
              <AlertDialogAction onClick={handleSave}>
                Yuborish
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
