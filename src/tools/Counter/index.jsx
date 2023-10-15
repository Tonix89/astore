import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCartCounter = create (
    persist((set,get) => ({
            items : [],
            count : 0,
            total : 0,
            addProduct : (item) => {
                set(() => ({count : item.cart.length}));
                set(() => ({items : [...item.cart]}));
                set(() => ({total : [item.total]}));
                set({ items : get().items})
            },
            editItems : (item) => {
                set((state) => ({count : state.count - 1}));
                set(() => ({items : [...item]}));
                set({item : get().items})
            }
        }),
        {
            name : "cart",
            storage : createJSONStorage(() => localStorage),
        }
    )
);

export default useCartCounter;