import { create } from "zustand";

const useProductStore = create ((set) => ({
    data : [],
    error : null,
    fetchData : async () => {
        try {
            const res= await fetch("https://api.noroff.dev/api/v1/online-shop");
            if(!res.ok){
                throw new Error(res.status);
            }
            const apiData = await res.json();
            set({data : apiData});
          } catch (error) {
            set({error : error.message})
          }
    },
}));

export default useProductStore;