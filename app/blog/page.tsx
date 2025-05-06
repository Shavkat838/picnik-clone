import React from 'react'


export default function BlogPage() {
  const arr=[1,1,1,1,1,1,1,1,1,1,1,1]
  return (
    <div className="max-w-[1240px] px-[16px] sm:px-0 w-full flex flex-col  items-center  mt-[50px] sm:mt-[90px] mb-[90px]  mx-auto">
      <div className="max-w-[892px] w-full  flex flex-col items-center h-[152px]">
        <h1 className=" text-[25px] sm:text-[50px] font-semibold text-[#000000] ">
          Sayohat va Lager Blogi
        </h1>
        <p className="font-normal text-[12px] sm:text-[18px] mt-[18px] text-center sm:leading-[25px] text-[#626262]">
          Sayohatni sevuvchilar uchun qiziqarli hikoyalar, foydali maslahatlar
          va lager hayoti haqida ko`rsatmalar. Tabiatga yaqin bo`lish va
          sayohatlaringizni unutilmas qilish uchun o`z bilimlaringizni boyiting!
        </p>
      </div>
      <div className="max-w-[1240px] space-y-[37px] w-full mt-[50px] sm:mt-[90px] grid grid-cols-1 sm:grid-cols-3">
        {arr.map((_, index) => (
          <div key={index+1} className="max-w-[380px]  w-full h-[374px]  border rounded-md overflow-hidden shadow-md bg-white">
            {/* Image + Play icon */}
            <div
              style={{ backgroundImage: "url('/blogfon.svg')" }}
              className="relative"
            >
              <img
                src={"/blogfon.svg"}
                alt="photo"
                className="max-w-full h-[243px] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[80px] h-[80px] bg-white/80 rounded-full flex items-center justify-center shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-black"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l4-2.5a.5.5 0 0 0 0-.814l-4-2.5z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-3">
              <h2 className="text-[18px] font-semibold text-black leading-snug ">
                Tabiatning Qiziqarli Jihatlari: Sarg`aygan Amazon O`rmonlari
                Haqida Qiziqarli Faktlar
              </h2>
              <div className="mt-2">
                <span className="text-[12px] font-medium max-w-[201px] w-full h-[31px]  bg-gray-200 rounded-full flex items-center justify-center text-gray-700">
                  Payshanba, 2024-yil 8-yanvar
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}




     
