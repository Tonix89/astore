import * as S from "./index.styles";

export default function Price({item}) {
    if(item.price - item.discountedPrice === 0){
        return <S.Price>Kr. {item.discountedPrice}</S.Price>
    }else{
        return <>
            <S.FirstPrice>Kr. {item.price}</S.FirstPrice>
            <S.Price>Kr. {item.discountedPrice}</S.Price>
        </>
    }
}