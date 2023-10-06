import React from "react";
import Nav from "./nav";
import SearchBar from "./searchBar";
import Cart from "./cart";
import * as S from "./header.styles";

export default function Header(){
    return (
      <S.Container>
          <Nav/>
          <SearchBar/>
          <Cart/>
      </S.Container>
    )
}
