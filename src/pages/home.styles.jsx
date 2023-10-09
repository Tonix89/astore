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