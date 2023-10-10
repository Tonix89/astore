import styled from "styled-components";

export const ProductUl = styled.ul`
    display : flex;
    flex-direction : row;
    flex-wrap : wrap;
    align-items : center;
    justify-content : space-between;
    padding : 0;

    @media (max-width : 650px) {
        justify-content : space-around;
    }
`;

export const ErrorMessage = styled.div`
    height : 80vh;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    font-size : 40px;
    font-weight : bolder;
`;