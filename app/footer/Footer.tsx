import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='max-w-[1440px] w-full px-[16px] sm:px-0   mx-auto flex flex-col items-center '>
        <div className=' max-w-[1240px]  w-full   mt-[21px] sm:mt-[78px] flex flex-col gap-y-[24px] sm:flex-row justify-between items-start '>
                <div className='max-w-[148px] w-full  h-[177px] flex flex-col justify-between items-start '>
                      <Image  src={'/logo2 (1).svg'} alt='photo' width={100}  height={100}  />
                      <div className='max-w-[148px]  w-full h-[28px] flex justify-between'>
                              < Image src={'/twitter.svg'} alt='photo'  width={28} height={28}  />
                              < Image src={'/facebook.svg'} alt='photo'  width={28} height={28}  />
                              < Image src={'/instagramm.svg'} alt='photo'  width={28} height={28}  />
                              < Image src={'/github.svg'} alt='photo'  width={28} height={28}  />
                      </div>
                </div>
                <ul className='max-w-[170px] w-full flex flex-col  h-[177px]'>
                     <li className='text-white text-[16px] font-medium  leading-[18px] '>Kompaniya</li>
                     <li className='text-[16px] font-normal leading-[19px] mt-[26px] text-[#FFFFFF99] '>Biz haqimizda</li>
                     <li className='text-[16px] font-normal leading-[19px]  mt-[13px] text-[#FFFFFF99]  '>Xususiyatlar</li>
                     <li className='text-[16px] font-normal leading-[19px] mt-[13px]  text-[#FFFFFF99]  '>Ishlash jarayonni</li>
                     <li className='text-[16px] font-normal leading-[19px]  mt-[13px] text-[#FFFFFF99]  '>Karyera imkoniyatlari</li>
                </ul>
                <div className='max-w-[245px]  w-full h-[177px] '>
                    <h1 className='text-white text-[16px] font-medium leading-[18px]  '>Yordam</h1>
                    <ul className='max-w-[245px] w-full h-[133px] mt-[26px] '>
                        <li className='text-[16px] font-normal leading-[19px] text-[#FFFFFF99]' >Mijozlarni qollab quvvatlash</li>
                        <li className='text-[16px] font-normal leading-[19px] mt-[13px] text-[#FFFFFF99]' >Yetkazib berish shartlari</li>
                        <li className='text-[16px] font-normal leading-[19px] mt-[13px] text-[#FFFFFF99]' >Shartlar va qoidalar</li>
                        <li className='text-[16px] font-normal leading-[19px] mt-[13px] text-[#FFFFFF99]' >Maxfiylik siyosati</li>
                    </ul>
                </div>
              <div className='max-w-[149px]  w-full h-[196px] '>
                    <h1 className='text-white text-[16px] font-medium leading-[18px] '>Savollar</h1>
                    <ul className='max-w-[245px] w-full h-[133px] mt-[26px] '>
                        <li className='text-[16px] font-normal leading-[19px] text-[#FFFFFF99]' >Hisob</li>
                        <li className='text-[16px] font-normal leading-[19px] mt-[13px] text-[#FFFFFF99]' >Yetkazib berishni boshqarish</li>
                        <li className='text-[16px] font-normal leading-[19px] mt-[13px] text-[#FFFFFF99]' >Buyurtmalar</li>
                        <li className='text-[16px] font-normal leading-[19px] mt-[13px] text-[#FFFFFF99]' > Tolovlar</li>
                    </ul>
              </div>
            <div className='max-w-[245px]  w-full h-[177px] '>
                    <h1 className='text-white'>Resurslar</h1>
                    <ul className='max-w-[245px] w-full h-[133px] mt-[26px] '>
                        <li className='text-[16px] font-normal leading-[19px] text-[#FFFFFF99]' >Bepul e-kitoblar</li>
                        <li className='text-[16px] font-normal leading-[19px] mt-[13px] text-[#FFFFFF99]' >Dasturlash bo`yich qo`llanmalar</li>
                        <li className='text-[16px] font-normal leading-[19px] mt-[13px] text-[#FFFFFF99]' >Qanday foydalanish - Blog</li>
                        <li className='text-[16px] font-normal leading-[19px] mt-[13px] text-[#FFFFFF99]' >YouTube pleylist</li>
                    </ul>
                </div>
        </div>
        <div className='max-w-[1240px] w-full sm:h-[70px] h-[119px]   sm:mt-[80px] mt-[56px] border-t border-t-gray flex flex-col sm:flex-row  justify-around sm:justify-between sm:items-center'>
           <p className='max-w-[269px] w-full h-[19px] text-[#FFFFFF99]  text-[14px] font-normal '>Shop.co © 2000-2023, All Rights Reserved</p>
             <div className='sm:max-w-[281px] max-w-[371px]   w-full  h-[30px]  flex  items-center  gap-[34px] sm:gap-[12px]'>
                < Image src={'/visa.svg'} alt='photo' width={46}  height={30}/>
                < Image src={'/master.svg'} alt='photo' width={46}  height={30}/>
                < Image src={'/paypal.svg'} alt='photo' width={46}  height={30}/>
                < Image src={'/pay.svg'} alt='photo' width={46}  height={30}/>
                < Image src={'/googlepay.svg'} alt='photo' width={46}  height={30}/>
             </div>
        </div>
    </div>
  )
}
