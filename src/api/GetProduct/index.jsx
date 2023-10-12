import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware"

const useProductStore = create (
    persist((set, get) => ({
      data : [],
      error : null,
      fetchData : async () => {
          try {
              const res= await fetch("https://api.noroff.dev/api/v1/online-shop");
              if(!res.ok){
                  throw new Error(res.status);
              }
              const apiData = await res.json();
              set({ data : get().data = apiData});
            } catch (error) {
              set({error : error.message})
            }
          },
      updateErrorMessage : () => set(() => ({error : null})),
    }),
    {
      name : "a-product",
      storage : createJSONStorage(() => localStorage),
    }
  )
);

export default useProductStore;