"use client";
import { IMAG_URL_PIKNIK, OneProduct } from "@/app/helpers/types";
import useStore from "@/store/useCartStore";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

type Props = {
  item: OneProduct;
};

export default function OneProductDetail({ item }: Props) {
  const [imageId, setImageId] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true); // 💡 skeleton holati

  const { setCarts } = useStore();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); // 💡 loading 1s
    return () => clearTimeout(timer);
  }, []);

  function aniqla(param: string) {
    if (param === "PLUS") {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  }

  return (
    <div className="max-w-[1240px] mx-auto w-full mb-[80px] sm:mb-[150px] px-[16px] sm:px-0">
      <div className="h-[77px] w-full flex items-center">
        <Image src={"/chap.svg"} alt="back" width={34} height={34} />
      </div>

      <div className="flex flex-col sm:flex-row gap-[46px] sm:h-[530px] h-[955px]">
        {/* Image Gallery */}
        <div className="flex justify-between max-w-[582px] w-full h-[322px] sm:h-[530px]">
          <div className="flex flex-col overflow-auto gap-[10px] max-w-[70px] sm:max-w-[120px]">
            {isLoading
              ? [...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-[70px] h-[70px] sm:w-[120px] sm:h-[120px] bg-gray-200 animate-pulse rounded-[15px]"
                  />
                ))
              : item.product_images.map((i, index) => (
                  <div
                    onClick={() => setImageId(index)}
                    key={index}
                    className={`cursor-pointer w-full h-[70px] sm:h-[120px] rounded-[15px] ${
                      imageId === index ? "border border-red-950" : "border"
                    }`}
                  >
                    <Image
                      src={IMAG_URL_PIKNIK + i.images_src}
                      alt="thumbnail"
                      width={120}
                      height={120}
                      className="w-full h-full object-cover rounded-[15px]"
                    />
                  </div>
                ))}
          </div>

          <div className="max-w-[270px] sm:max-w-[444px] w-full h-full border rounded-[10px] bg-gray-100">
            {isLoading ? (
              <div className="w-full h-full bg-gray-200 animate-pulse rounded-[15px]" />
            ) : (
              <Image
                src={IMAG_URL_PIKNIK + item.product_images[imageId].images_src}
                alt="main"
                width={444}
                height={530}
                className="w-full h-full object-cover rounded-[15px]"
              />
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="max-w-[612px] w-full flex flex-col justify-between">
          {isLoading ? (
            <div className="space-y-3">
              <div className="h-[35px] bg-gray-200 animate-pulse w-3/4 rounded" />
              <div className="h-[24px] bg-gray-200 animate-pulse w-1/2 rounded" />
              <div className="h-[43px] bg-gray-200 animate-pulse w-[260px] rounded" />
            </div>
          ) : (
            <div>
              <h1 className="font-bold text-[24px] sm:text-[34px] text-[#000000]">
                {item.title}
              </h1>
              <Image
                src="/yulduz.svg"
                alt="rating"
                width={193}
                height={24}
                className="mt-[13px]"
              />
              <Image
                src="/skitka.svg"
                alt="discount"
                width={260}
                height={43}
                className="mt-[13px]"
              />
            </div>
          )}

          <div className="mt-6">
            {isLoading ? (
              <div className="space-y-3">
                <div className="h-[20px] bg-gray-200 animate-pulse w-full rounded" />
                <div className="h-[20px] bg-gray-200 animate-pulse w-4/5 rounded" />
                <div className="h-[20px] bg-gray-200 animate-pulse w-2/3 rounded" />
              </div>
            ) : (
              <p className="text-[12px] sm:text-[16px] leading-[24px] text-gray">
                {item.description}
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <div className="flex items-center justify-around bg-[#F0F0F0] rounded-[62px] h-[48px] w-full sm:w-[193px]">
              <FaMinus
                onClick={() => aniqla("MINUS")}
                className="cursor-pointer"
              />
              <span>{quantity}</span>
              <FaPlus
                onClick={() => aniqla("PLUS")}
                className="cursor-pointer"
              />
            </div>
            <button
              onClick={() =>
                setCarts({ id: Date.now(), product: item, quantity })
              }
              className="bg-[#245D30] text-white rounded-[62px] w-full sm:w-[400px] h-[52px]"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {/* Video section */}
      <div className="w-full mt-[72px] sm:mt-[120px] flex flex-col items-center">
        <h1 className="text-[36px] font-bold text-black text-center">
          Mahsulot Videosi va Xususiyatlari
        </h1>
        <div className="bg-[url('/videofon.svg')] w-full h-[193px] sm:h-[640px] mt-[20px] flex items-center justify-center rounded-[20px] border">
          {isLoading ? (
            <div className="w-[120px] h-[120px] bg-gray-300 animate-pulse rounded-full" />
          ) : (
            <Image
              src={"/startvideo.svg"}
              alt="video"
              width={120}
              height={120}
            />
          )}
        </div>
      </div>
    </div>
  );
}
