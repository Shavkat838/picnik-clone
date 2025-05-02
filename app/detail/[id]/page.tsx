
import { IMAG_URL_PIKNIK, OneProduct } from "@/app/helpers/types";
import axios from "axios";
import OneProductDetail from "./OneProduct";


export default async function DetailPage({params}:{params:Promise<{id:string}>}) {
const id=(await params).id

const { data:OneProductObj} = await axios.get(`https://api.piknicuz.com/api/products/${id}`);
const item=OneProductObj.data;


  return (    
      <OneProductDetail item={item} />
  );
}
