import React from "react";
import CartIcon from "../../../assets/cart_icon.png"
import { Link } from "react-router-dom";
import useCartCounter from "../../../tools/Counter";
import * as S from "./cart.styles";

export default function Cart(){

  const count = useCartCounter((state) => state.count);

    return(
      <S.CartCont>
        <Link to="/checkout">
          <S.CartImage src={CartIcon} alt="Cart Icon"></S.CartImage>
        </Link>
        <S.CartCount>
          <S.Counter>{count}</S.Counter>
        </S.CartCount>
      </S.CartCont>
    )
  }