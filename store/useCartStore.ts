import { Cart, Product } from "@/app/helpers/types";
import { create } from "zustand";

type Store = {
  carts:Cart[];
  setCarts: (item:Cart) => void;
  handleQuantity:(param:string,id:number)=>void;
  handleDeleteCart:(id:number)=>void
};

const useStore = create<Store>()((set) => ({
  carts: [],
  setCarts: (item) =>
    set((state) => {
      const currentIndex = state.carts.findIndex((c) => c.product.id === item.product.id);
      console.log(item.id,state.carts)
      if (currentIndex !== -1) {
        const updatedCarts = [...state.carts];
        updatedCarts[currentIndex].quantity += item.quantity;
        return { carts: updatedCarts };
      }
      return { carts: [...state.carts, item] };
    }),
  handleQuantity: (param, id) =>
    set((state) => {
      const currentQuantityIndex = state.carts.findIndex((c) => c.id === id);
      if (param === "PLUS") {
        const updateCart = [...state.carts];
        updateCart[currentQuantityIndex].quantity++;
        return { carts: updateCart };
      } else {
        const updateCart = [...state.carts];
        if(updateCart[currentQuantityIndex].quantity<=1){
              return {}
        }
                          updateCart[currentQuantityIndex].quantity--;
                          return { carts: updateCart };
      }
    }),
  handleDeleteCart: (id) =>
    set((state) => ({
      carts: state.carts.filter((c) => c.id !== id),
    })),
}));


export default useStore;