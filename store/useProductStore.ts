import { Cart, Product } from "@/app/helpers/types";
import { create } from "zustand";

type Store = {
  allProducts: Product[]; 
  productsFilter: Product[];
  filterId: string;
  setFilterId: (id: string) => void;
  setAllProducts: (products: Product[]) => void;
};

const useProductStore = create<Store>()((set) => ({
  allProducts: [],
  productsFilter: [],
  filterId: "",

  setAllProducts: (products) => set({ allProducts: products }),

  setFilterId: (id) => {
    set((state) => {
    if(state.filterId!==id){
              const filtered = state.allProducts.filter(
                (product) => product.category_id === id
              );
              return {
                filterId: id,
                productsFilter: filtered,
              };
    }
     else {
        return {
            filterId:"",
            productsFilter:state.allProducts
        }
     }
    });
  },
}));

export default useProductStore;
