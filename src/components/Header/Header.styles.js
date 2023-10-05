import styled from "styled-components";
import Theme from "../../styles/theme";

export const Container = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    background-color : ${(props) => props.theme.color.bgLight};
    padding : 12px;

    @media (max-width : 500px) {
        padding : 5px;
        padding-top : 10px;
    }
`;

// Nav

export const NavUl = styled(Container)`
    gap:10px;
    background-color : transparent;

    @media (max-width : 500px) {
        gap:8px;
    }
`;

export const NavLi = styled.li`
    font-size : 20px;
    list-style:none;
    font-weight:bold;

    @media (max-width : 500px) {
        font-size : 18px;
    }

    @media (max-width : 400px) {
        font-size : 15px;
    }
`;

// Search

export const SearchImg = styled.img`
    border : none;
    position : absolute;
    right : 10px;
    top : 5px;
    cursor : pointer;

    @media (max-width : 500px) {
        top : 1px;
    }
`;
export const SearchCont = styled.div`
    width : 40%;
`;

export const SearchBar = styled.form`
    position: relative;
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

export const Button = styled.button`
    padding : 0;
    position : absolute;
`;

// Cart

export const CartCont = styled.div`
    position : relative;
`;

export const CartImage = styled.img`
    height: 40px;
    width: 40px;
    padding-right : 16px;
    z-index : -1;

    @media (max-width : 500px) {
        height : 25px;
        width : 25px;
    }
`;

export const CartCount = styled.div`
    position: absolute;
    display : flex;
    align-items:center;
    justify-content:center;
    background-color : white;
    border : 2px solid;
    width : 20px;
    height : 20px;
    border-radius : 50%;
    padding : 3px;
    top : -11px;
    right : 0px;

    @media (max-width : 500px) {
        width : 15px;
        height : 15px;
        top : -10px;
    }
`;

export const Counter = styled.p`
    font-weight : bold;
    color : ${(props) => props.theme.color.primary};
    margin:0;

`;
