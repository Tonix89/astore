import React from "react";
import Discount from "../../tools/Discount";
import Price from "../../tools/Price";
import { Link } from "react-router-dom";
import * as S from "./productCard.styles";


export default function Product({ item }) {

    return <S.ProductCont>
        <S.ImageCont>
            <S.ProductImage src={`${item.imageUrl}`}></S.ProductImage>
            <Discount item={item}/>
            <S.PriceCont>
                <Price item={item}/>
            </S.PriceCont>
        </S.ImageCont>
        <S.Title>{item.title}</S.Title>
        <Link to={`/product/${item.id}`}>
            <S.ProductLink>View Product</S.ProductLink>
        </Link>
    </S.ProductCont>
}