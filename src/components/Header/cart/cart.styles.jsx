import styled from "styled-components";

export const CartCont = styled.div`
    position : relative;
`;

export const CartImage = styled.img`
    height: 40px;
    width: 40px;
    padding-right : 16px;
    cursor : pointer;
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
