import React from "react";
import * as S from "./discountPrice.styles";

export default function Discount({item}) {

    const TotalDiscount = parseFloat(item.price) - parseFloat(item.discountedPrice);

    const FinalTotalDiscount = parseFloat(TotalDiscount.toFixed(2));

    if(TotalDiscount !== 0){
        return <S.DiscountPrice>Save kr. {FinalTotalDiscount}</S.DiscountPrice>
    }
}
