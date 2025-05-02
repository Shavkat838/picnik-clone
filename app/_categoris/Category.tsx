import Image from "next/image";
import { Categories, IMAG_URL_PIKNIK } from "../helpers/types";

type CategoryProps = {
  category: Categories;
  filterProductId:(id:string)=>void;
  id:string;
};


export default function Category({category,filterProductId,id}:CategoryProps) {
  const imgurl=IMAG_URL_PIKNIK+category.image_src
  return (
            <div onClick={()=>filterProductId(category.id)}  key={category.id} className={`min-w-[300px] cursor-pointer w-full hover:border  ${id===category.id? "border " : ""   }   h-[80px] rounded-[30px] flex justify-around items-center`}>
                    <Image
                      src={imgurl}
                      alt="photo"
                      width={70}
                      height={70}
                    />
                    <p className="text-[22px] font-normal text-[#000000]">
                     {category.name}
                    </p>
            </div>
  )
}
