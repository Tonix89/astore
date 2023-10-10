import React, {useState, useEffect } from "react";
import * as S from "./searchBar.styles";
import useProductStore from "../../../api/GetProduct";

let styles = {
  display : "none",
};

export default function SearchBar(){

  const [ searchValue, setSearchValue] = useState("");
  const [productList , setProductList] = useState([]);
  const [ showList, setShowList] = useState(false);
  const { data , fetchData } = useProductStore();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

  function getInput(event) {
    setSearchValue(event.target.value);
    styles = {
      display : "flex",
      flexDirection : "column",
      alignItems : "start",
    };
  };

  function clearSearch(){
    setSearchValue("");
  };

  function CreateList({ item }) {

    if(searchValue){
      return <S.ListLink to={`/product/${item.id}`}>
        <S.List onClick={clearSearch}>{item.title}</S.List>
      </S.ListLink>
    }else{
      styles = {
        display : "none",
      };
    }
  };

  useEffect(() => {
    const filterProducts = data.filter(item =>  item.title.toLowerCase().includes(searchValue.toLocaleLowerCase()));
    setProductList(filterProducts);
  }, [searchValue, data]);

  useEffect(() => {
    const handleDomClick = (e) => {
      if(e.target.id === "search-input" || e.target.id === "search-results") {
        return;
      }
      setShowList(false);
    };

    document.addEventListener("click", handleDomClick);

    return () => {
      document.removeEventListener("click", handleDomClick);
    }
  }, [])

    return(
      <S.SearchCont>
        <S.SearchBar>
          <S.Input id="search-input" type="text" placeholder="Search here" value={searchValue} onChange={getInput} onFocus={() => setShowList(true)}/>
          {showList && (
            <S.ListCont id="search-results" style={styles}>
            {productList.length === 0 ? (<p>No item matches</p>) : (productList.map(item => <CreateList key={item.id} item={item}/>))}
            </S.ListCont>
          )}
        </S.SearchBar>
      </S.SearchCont>
    )
}
