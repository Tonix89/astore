import React, {useState, useEffect } from "react";
import Product from "../components/ProductCard";
import * as S from "./home.styles";

const url = "https://api.noroff.dev/api/v1/online-shop";

function Home() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(url).then((res) => res.json()).then(json => {
            setProducts(json)
        })
    }, [])

    console.log(products);
    return (
        <div>
            <div>
                <S.ProductUl>
                    {products.map(item => <Product key={item.id} item={item} />)}
                </S.ProductUl>
            </div>
        </div>

    )
}

export default Home;