import React from "react";
import * as S from "./nav.styles";

export default function Nav() {
    return(
      <nav>
        <S.NavUl>
          <S.NavLi>
            <S.StyledLink to="/" >Home</S.StyledLink>
          </S.NavLi>
          <S.NavLi>
            <S.StyledLink to="/contact" >Contact</S.StyledLink>
          </S.NavLi>
        </S.NavUl>
      </nav>
    )
  }