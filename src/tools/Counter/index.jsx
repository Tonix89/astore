import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCartCounter = create (
    persist((set,get) => ({
            items : [],
            count : 0,
            addProduct : (product) => {
                set((state) => ({count : state.count + 1}));
                set((state) => ({items : [...state.items, product]}));
                set({ items : get().items})
            },  
        }),
        {
            name : "cart",
            storage : createJSONStorage(() => localStorage),
        }
    )
);

export default useCartCounter;