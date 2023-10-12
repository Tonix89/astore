import React, { useEffect} from "react";
import Product from "../components/ProductCard";
import useProductStore from "../api/GetProduct";
import * as S from "./home.styles";


function Home() {

    const data = useProductStore((state) => state.data);
    let error = useProductStore((state) => state.error);
    const fetchData = useProductStore((state) => state.fetchData);
    const updateErrorMessage = useProductStore((state) => state.updateErrorMessage);

    useEffect(() => {
        fetchData();
        updateErrorMessage(null);
    }, [fetchData])

    if (error) {
        return <S.ErrorMessage>Error: {error}</S.ErrorMessage>;
    }
    
    return (
        <div>
            <div>
                <S.ProductUl>
                    {data.map(item => <Product key={item.id} item={item} />)}
                </S.ProductUl>
            </div>
        </div>

    )
}

export default Home;