import styled from "styled-components";

export const PriceCont = styled.div`
    position : absolute;
    top : 78%;
    align-self : flex-start;
    margin : 10px 5px;
    background-color : white;
    padding : 2px 10px;
    border-radius : 10px;
    color : ${(props) => props.theme.color.primary};
`;

export const Price = styled.h4`
    color : ${(props) => props.theme.color.warning};
    margin : 0;
`;

export const FirstPrice = styled(Price)`
    text-decoration : line-through;
    color : ${(props) => props.theme.color.light};
`;