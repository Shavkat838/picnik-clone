"use client";

import { useEffect, useState } from "react";
import { Categories, Product } from "../helpers/types";
import ProductComponent from "../_product/Component";
import axios from "axios";
import useProductStore from "@/store/useProductStore";
import Category from "../_categoris/Category";
import CategorySkeleton from "./CategorySceleton";
import ProductSkeleton from "./ProductSceleton";



export default function MahsulotPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Categories[]>([]);
  const [productsLoading, setProductsLoading] = useState(true);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  const { setAllProducts, setFilterId, filterId, productsFilter } =
    useProductStore();

  useEffect(() => {
    getProduct();
    getCategories();
  }, []);

  async function getProduct() {
    try {
      setProductsLoading(true);
      const { data } = await axios.get("https://api.piknicuz.com/api/products");
      setProducts(data.data);
      setAllProducts(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setProductsLoading(false);
    }
  }

  async function getCategories() {
    try {
      setCategoriesLoading(true);
      const { data } = await axios.get(
        "https://api.piknicuz.com/api/categories"
      );
      setCategories(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setCategoriesLoading(false);
    }
  }

  return (
    <div className="mt-[80px] px-[16px] sm:px-0 mx-auto sm:mt-[43px] mb-[50px] max-w-[1240px] w-full border-b border-b-[#245D3033]">
      <div className="max-w-[1240px] w-full h-[61px] flex items-center justify-center">
        <h1 className="text-[#000000] text-[25px] sm:text-[50px] font-bold">
          Kategoriya va Mahsulotlar
        </h1>
      </div>

      {/* Kategoriya bo'limi */}
      <div className="mt-[24px] sm:mt-[70px] max-w-[1240px] overflow-scroll overflow-y-hidden scrollbar-none flex gap-[47px] items-center w-full">
        {categoriesLoading
          ? Array(6)
              .fill(0)
              .map((_, i) => <CategorySkeleton key={i} />)
          : categories.map((item) => (
              <Category
                id={filterId}
                filterProductId={setFilterId}
                key={item.id}
                category={item}
              />
            ))}
      </div>

      {/* Mahsulotlar bo'limi */}
      <div className="max-w-[1240px] pt-[70px] gap-x-2 gap-y-[39px] sm:gap-y-[70px] w-full grid grid-cols-1 sm:grid-cols-4">
        {productsLoading
          ? Array(8)
              .fill(0)
              .map((_, i) => <ProductSkeleton key={i} />)
          : filterId === ""
          ? products.map((item) => (
              <ProductComponent key={item.id} product={item} />
            ))
          : productsFilter.map((item) => (
              <ProductComponent key={item.id} product={item} />
            ))}
      </div>
    </div>
  );
}
