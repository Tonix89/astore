import React from "react";
import CartIcon from "../../../assets/cart_icon.png"
import { Link } from "react-router-dom";
import * as S from "./cart.styles";


export default function Cart(){
    return(
      <S.CartCont>
        <Link to="/checkout">
          <S.CartImage src={CartIcon} alt="Cart Icon"></S.CartImage>
        </Link>
        <S.CartCount>
          <S.Counter>0</S.Counter>
        </S.CartCount>
      </S.CartCont>
    )
  }