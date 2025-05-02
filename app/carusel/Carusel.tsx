import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Carusel() {
  const arr=[1,1,1,1,1,1,1,11,1]
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {arr.map((item, index) => (
            <CarouselItem key={index + 1} className="basis-1/1   sm:basis-1/3">
              <div className="max-w-[347px]    sm:max-w-[400px] w-full h-[201px] sm:h-[240px] flex items-center border border-[#0000001A] rounded-[20px] justify-center ">
                <div className="max-w-[336px] w-full min-h-[161px] flex flex-col justify-between ">
                  <Image
                    src={"/beshyulduz.svg"}
                    alt="yulduz"
                    width={138}
                    height={22}
                  />
                  <div className="max-w-[336px]  h-[124px] w-full flex flex-col justify-between">
                    <div className="flex   gap-[30px] items-center">
                      <h1 className="text-[20px] font-bold text-black ">
                        Sarah M.
                      </h1>
                      <Image
                        src={"/belgi.svg"}
                        alt="photo"
                        width={24}
                        height={24}
                      />
                    </div>
                    <p className="text-[16px] font-normal text-[#00000099] leading-[22px] ">
                      Shop.co orqali olgan jihozlarim sifati va uslubi meni
                      hayratda qoldirdi. Kundalik foydalanishdan tortib, maxsus
                      tadbirlar uchun hamma narsa yuqori darajada!
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:block" />
        <CarouselNext  className="hidden sm:block" />
      </Carousel>
    </div>
  );
}
