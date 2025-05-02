export type Product={
    title:string;
    id:string;
    price:number;
    description:string;
    image_src:string;
    category_id:string;
}

export type Categories={
    id:string;
    image_src:string;
    name:string;
}


export type OneProduct = {
  id: string;
  title: string;
  description: string;
  price: number;
  image_src: string;
  video_src: string;
  category_id:string;
  product_images: {
    id:string;
    image_id:string;
    images_src: string;
    product_id:string;
  }[];
};


export type Cart={
  id:number;
  product:Product;
  quantity:number;
}


export const IMAG_URL_PIKNIK = "https://api.piknicuz.com/api/uploads/images/"


// https://api.piknicuz.com/api/uploads/images/729e5671-2e25-4494-8211-7c012588a775.png