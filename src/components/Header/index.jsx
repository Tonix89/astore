import React from "react";
import CartIcon from "../../assets/cart_icon.png";
import SearcIcon from "../../assets/search_icon.png"
import * as S from "./Header.styles"

export default function Header(){
    return (
      <S.Container>
          <Nav/>
          <SearchBar/>
          <Cart/>
      </S.Container>
    )
}

function Nav(){
  return(
    <nav>
      <S.NavUl>
        <S.NavLi>Home</S.NavLi>
        <S.NavLi>Contact</S.NavLi>
      </S.NavUl>
    </nav>
  )
}

function SearchBar(){
  return(
    <S.SearchCont>
      <S.SearchBar>
        <S.Input type="text" placeholder="Search Here"/>
        <S.Button><S.SearchImg src={SearcIcon} alt="Search Icon"></S.SearchImg></S.Button>
      </S.SearchBar>
    </S.SearchCont>
  )
}

function Cart(){
  return(
    <S.CartCont>
      <S.CartImage src={CartIcon} alt="Cart Icon"></S.CartImage>
      <S.CartCount>
        <S.Counter>0</S.Counter>
      </S.CartCount>
    </S.CartCont>
  )
}