"use client"
import Image from "next/image";
import ProductComponent from "./_product/Component";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Carusel from "./carusel/Carusel";
import axios from "axios";
import { useEffect, useState } from "react";
import {  Product } from "./helpers/types";
import Link from "next/link";




export default function Home() {

  useEffect(()=>{
    getProduct()
    
  },[])

  const [products,setProducts]=useState<Product[]>([])
  
  
 

  async function getProduct(){
    try {
     const {data}=await axios.get("https://api.piknicuz.com/api/products");
     setProducts(data.data)
    } catch (error) {
      console.log(error)
    }
  }







const arr = [
  {
    question: "Mahsulotlarni qanday buyurtma qilsa bo`ladi?",
    answer:
      "Siz tanlagan mahsulotni savatchaga qo`shib, to`lov jarayonini davom ettirish orqali buyurtma qilishingiz mumkin. Buyurtma jarayoni oddiy va qulay.",
  },
  {
    question: "To`lov usullari qanday?",
    answer:
      "Biz Click, Payme, Uzum Pay kabi to`lov tizimlari hamda naqd to`lovni qo`llab-quvvatlaymiz.",
  },
  {
    question: "Yetkazib berish qancha vaqt oladi?",
    answer:
      "Buyurtmalar odatda 1-3 ish kuni ichida yetkaziladi. Hududingizga qarab vaqt farq qilishi mumkin.",
  },
  {
    question: "Mahsulotlarni qaytarish mumkinmi?",
    answer:
      "Ha, mahsulot yetkazilgan kundan boshlab 3 ish kuni ichida qaytarishingiz mumkin. Bunda mahsulot asl holatda bo`lishi lozim.",
  },
  {
    question: "Mahsulotlar kafolatlanganmi?",
    answer:
      "Aksariyat mahsulotlarimiz ishlab chiqaruvchi tomonidan kafolatlangan. Kafolat muddati mahsulot tavsifida ko`rsatilgan.",
  },
  {
    question: "Sayohat mahsulotlarini tanlashda yordam bera olasizmi?",
    answer:
      "Albatta! Mijozlarga xizmat ko`rsatish jamoamiz sizga mos mahsulotni tanlashda yordam beradi.",
  },
  {
    question: "Yetkazib berish narxi qancha turadi?",
    answer:
      "Buyurtma summasiga qarab yetkazib berish bepul yoki arzon narxlarda taqdim etiladi. Batafsil kassa sahifasida ko`rsatiladi.",
  },
  {
    question: "Agar buyurtma noto`g`ri kelsa, nima qilish kerak?",
    answer:
      "Agar buyurtmada xatolik bo`lsa, mijozlarga xizmat ko`rsatish bo`limiga murojaat qiling. Muammo tezda hal qilinadi.",
  },
  {
    question: "Mahsulotlarni ko`rish uchun oflayn do`koningiz bormi?",
    answer:
      "Hozirda faqat onlayn savdo faoliyat yuritamiz. Biroq barcha mahsulotlar haqida batafsil ma`lumot taqdim etiladi.",
  },
  {
    question: "Saytingizda qanday mahsulotlarni topish mumkin?",
    answer:
      "Bizda uy-ro`zg`or buyumlari, elektronika, sayohat jihozlari va boshqa ko`plab mahsulotlar mavjud.",
  },
];

  return (
    <div className="max-w-[1440px]  w-full flex flex-col  items-center px-[16px] mt-[77px] sm:mt-[70px]  sm:px-0">
      {/* chodir */}
      <div className="max-w-[1440px]  w-full min-h-[663px]   flex justify-center  items-center  ">
        <div className="max-w-[1240px] w-full min-h-[463px] flex flex-col sm:flex-row   justify-between">
          <div className="max-w-[596px] w-full">
            <h1 className="text-[25px] text-center sm:text-left  sm:text-[60px] font-bold mt-0  text-[#000000]  sm:leading-[64px]">
              Zo`r jihozlar bilan sarguzashtlarni kashf eting
            </h1>
            <p className="max-w-[545px] text-[12px] sm:text-[16px] text-center sm:text-left font-normal  sm:leading-[22px]  mt-[26px] sm:mt-[32px] text-[#00000099]">
              Sarguzasht ishqibozlari uchun mo`ljallangan ochiq havoda kerakli
              jihozlarimizni kashf eting. Yuqori sifatli chodirlardan qulay
              lager anjomlarigacha, hammasi sizning tajribangizni yuksaltirish
              uchun.
            </p>
            <button className="max-w-[370px] sm:max-w-[210px] h-[37px] sm:h-[37px] w-full rounded-[62px] mt-[26px] sm:mt-[32px]  bg-[#245D30] text-[16px] text-white font-medium ">
              Xarid qiling
            </button>
            <Image
              className="mt-[32px] max-w-[596px] w-full h-[69px]"
              src={"/chegirma.svg"}
              alt="photo"
              width={596}
              height={48}
            />
          </div>
          <Image
            className="rounded-[10px] sm:rounded-[10px]  mt-[42px] sm:mt-0 "
            src={"/chodir.svg"}
            alt="photo"
            width={614}
            height={463}
          />
        </div>
      </div>

      {/* categories va product */}
      <div className="mt-[80px] sm:mt-[43px] max-w-[1240px] w-full  border-b border-b-[#245D3033]">
        <div className="max-w-[1240px] w-full  h-[61px] flex items-center justify-center ">
          <h1 className="text-[#000000] text-[25px]  sm:text-[50px] font-bold ">
            Mahsulotlar
          </h1>
        </div>

        {/* product chizish */}
        <div className="max-w-[1240px] pt-[70px] gap-x-2 gap-y-[39px] sm:gap-y-[70px] w-full grid grid-cols-1 sm:grid-cols-4">
          {products &&
            products
              .slice(0, 12)
              .map((item) => <ProductComponent key={item.id} product={item} />)}
        </div>
        <div className="mt-[70px] max-w-[1240px] w-full flex items-center justify-center mb-[10px]">
          <Link className="max-w-[260px] w-full " href={'/mahsulot'}>
            <button className="max-w-[260px]    hover:bg-[#245D30] hover:text-white text-[16px] font-medium w-full h-[52px] rounded-[62px] border border-[#245D30] ">
              Hammasini ko`rish
            </button>
          </Link>
        </div>
      </div>

      {/* accardion */}
      <div className="max-w-[869px]   flex flex-col  items-center  w-full">
        <h1 className="text-[25px]  sm:text-[50px]  font-bold text-black mt-[90px]  leading-[64px]">
          Tez-tez beriladigan savollar
        </h1>
        <div className="max-w-[792px] mt-[6px] sm:mt-[70px]  w-full ">
          <Accordion type="single" collapsible>
            {arr.map((item, index) => (
              <AccordionItem
                className="mt-[12px]"
                key={index}
                value={`item-${index + 1}`}
              >
                <AccordionTrigger className="text-[#151515]  h-[64px] rounded-none  px-[10px] sm:px-[24px] bg-[#F5F5F5] text-[12px]   sm:text-[15px] leading-[24px] font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#747474] px-[10px]  sm:px-[24px] bg-[#F5F5F5]  text-[12px] sm:text-[15px] font-normal leading-[24px]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* carrusel izohlar */}
      <div className="max-w-[1240px]  w-full   mb-[43px] sm:mb-[130px]   mt-[104px]  sm:mt-[80px] flex flex-col ">
        <h1 className="text-[25px]   sm:text-[55px] font-bold text-[#000000] ">
          Bizning mamnun mijozlarimiz
        </h1>
        <div className="max-w-[1240px] w-full  mt-[21px] sm:mt-[35px] ">
          <Carusel />
        </div>
      </div>
    </div>
  );
}
