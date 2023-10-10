import styled from "styled-components";
import { Link } from "react-router-dom";

export const SearchCont = styled.div`
    position : relative;
    width : 40%;
`;

export const SearchBar = styled.form`
    widdth : 100%;
`;

export const Input = styled.input`
    height: 25px;
    width : 65%;
    border-radius : 10px;
    border : 1px solid ${(props) => props.theme.color.success};
    padding : 5px;
    padding-right :28px;

    @media (max-width : 500px) {
        height: 15px;
    }

`;

export const ListCont = styled.ul`
    position : absolute;
    top : 60%;
    left : 12%;
    font-weight : bold;
    cursor : pointer;
    padding : 10px;
    list-style-type : none;
    background-color : white;
    border : 1px solid  ${(props) => props.theme.color.success};
    border-radius : 10px;
    z-index : 100;

    @media (max-width : 500px) {
        top : 42%;
        left : 8%;
    }
`;

export const List = styled.li`
    padding : 2px;
    &:hover {
        color : ${(props) => props.theme.color.primary};
    }

    @media (max-width : 500px) {
        font-size : 12px;
    }
`;

export const ListLink = styled(Link)`
    text-decoration : none;
    color : ${(props) => props.theme.color.light};
`;
