"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(true);
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const [description,setDescription]=useState("")
  const [number,setNumber]=useState("")

  useEffect(() => {
    // Simulyatsiya qilingan yuklash (masalan, 2 soniya)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);


  function handleSaveMalumot(){
    setDescription("")
    setEmail("")
    setLastName("")
    setFirstName("")
    setNumber("")
  }

  if (loading) {
    return (
      <div className="max-w-[1440px] w-full px-[16px] sm:px-0 mt-[50px] flex flex-col gap-[62px] sm:gap-[90px] mb-[122px] items-center animate-pulse">
        <div className="w-full h-[309px] sm:h-[466px] bg-gray-200 rounded-md" />
        <div className="max-w-[1240px] w-full flex flex-col sm:flex-row gap-[42px] sm:gap-[105px]">
          <div className="max-w-[570px] w-full flex flex-col gap-[20px] sm:gap-[31px]">
            <div className="h-[221px] bg-gray-200 rounded-md" />
            <div className="h-[136px] bg-gray-200 rounded-md" />
          </div>
          <div className="max-w-[565px] w-full h-[535px] bg-gray-200 rounded-[30px]" />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mt-[50px]  px-[16px] sm:px-0 sm:mt-0 w-full flex flex-col gap-[62px] sm:gap-[90px] mb-[122px]  sm:mb-[90px] items-center ">
      <Image
        className="hidden sm:block"
        src={"/contactbanner.svg"}
        alt="photo"
        width={1440}
        height={466}
      />
      <Image
        className="sm:hidden"
        src={"/responsiv.svg"}
        alt="photo"
        width={402}
        height={309}
      />
      <div className="max-w-[1240px] h-[830px] sm:h-[535px] w-full flex flex-col sm:flex-row  gap-[42px] sm:gap-[105px]">
        <div className="max-w-[570px]  h-[254px] sm:h-[388px]  w-full flex flex-col gap-[20px] sm:gap-[31px] ">
          <div className="max-w-[571px] w-full h-[221px]  flex flex-col gap-[16px] sm:gap-[26px]">
            <h1 className="text-[25px]  sm:text-[50px] font-bold text-[#011334] ">
              Keling, biz bilan gaplashaylik
            </h1>
            <p className="max-w-[360px] w-full  text-[12px] sm:text-[16px] font-normal leading-[26px] ">
              Savollar, sharhlar yoki takliflar? Shaklni to`ldiring va biz tez
              orada bog`lanamiz.
            </p>
          </div>
          <div className="max-w-[365px] h-[128px] sm:h-[136px] w-full flex flex-col  ">
            <div className="max-w-[365px] w-full h-[51px] flex items-start gap-[4px]">
              <Image
                src={"/locatsiya.svg"}
                alt="photo"
                width={24}
                height={28}
              />
              <h1 className=" text-[14px] sm:text-[16px] font-bold leading-[24px] text-[#011334] ">
                1055 Arthur ave Elk Groot, 67. <br /> New Palmas South Carolina.
              </h1>
            </div>
            <div className="max-w-[365px] w-full h-[51px] flex  mt-[13px] items-start gap-[4px]">
              <Image src={"/contact.svg"} alt="photo" width={24} height={28} />
              <h1 className=" text-[14px] sm:text-[16px] font-bold leading-[24px] text-[#011334] ">
                +1 234 678 9108 99
              </h1>
            </div>
            <div className="max-w-[365px] w-full h-[51px] flex  items-start gap-[4px]">
              <Image src={"/sms.svg"} alt="photo" width={24} height={28} />
              <h1 className=" text-[14px] sm:text-[16px] font-bold leading-[24px] text-[#011334] ">
                Contact@moralizer.com
              </h1>
            </div>
          </div>
        </div>
        <div className="max-w-[565px] w-full h-[535px] border border-[#BDBDBD] rounded-[10px] sm:rounded-[30px] flex items-center justify-center">
          <div className="max-w-[338px]  sm:max-w-[465px] w-full h-[486px] sm:h-[435px] flex flex-col justify-between ">
            <div className="max-w-[465px] w-full h-[421px] sm:h-[350px]  flex flex-col  justify-between">
              <div className="max-w-[465px] w-full h-[121px] sm:h-[50px] flex flex-col sm:flex-row justify-between">
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  placeholder="Firstname*"
                  className=" max-w-[338px] h-[50px]  sm:max-w-[222px] border  border-[#828282] text-[16px] leading-[26px] font-normal text-[#011334] rounded-[10px] pl-[20px] "
                />
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  placeholder="Lastname*"
                  className=" max-w-[338px] h-[50px] sm:max-w-[222px] border  border-[#828282] text-[16px] leading-[26px] font-normal text-[#011334] rounded-[10px] pl-[20px] "
                />
              </div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email*"
                className=" max-w-[338px] sm:max-w-[465px] h-[50px] border  border-[#828282] text-[16px] leading-[26px] font-normal text-[#011334] rounded-[10px] pl-[20px] "
              />
              <input
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                type="text"
                placeholder="Phone number*"
                className="max-w-[465x] border h-[50px]  border-[#828282] text-[16px] leading-[26px] font-normal text-[#011334] rounded-[10px] pl-[20px] "
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Your message..."
                className="max-w-[465px] h-[140px] border pt-[20px] border-[#828282] text-[16px] leading-[26px] font-normal text-[#011334] rounded-[10px] pl-[20px] "
              ></textarea>
            </div>
            <button onClick={handleSaveMalumot} className="max-w-[465px] w-full h-[45px] text-[18px] text-white bg-[#245D30] rounded-[20px] ">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
