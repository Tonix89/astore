import React from "react";
import SearchIcon from "../../../assets/search_icon.png";
import * as S from "./searchBar.styles";
import { Link } from "react-router-dom";

export default function SearchBar(){
    return(
      <S.SearchCont>
        <S.SearchBar>
          <S.Input type="text" placeholder="Search Here"/>
          <Link to="/product">
            <S.Button>
              <S.SearchImg src={SearchIcon} alt="Search Icon"></S.SearchImg>
            </S.Button>
          </Link>
        </S.SearchBar>
      </S.SearchCont>
    )
  }