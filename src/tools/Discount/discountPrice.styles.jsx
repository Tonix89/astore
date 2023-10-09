import styled from "styled-components";

export const DiscountPrice = styled.h3`
    position : absolute;
    top : 1px;
    left : 15px;
    background-color : white;
    padding : 2px 10px;
    border-radius : 10px;
    color : ${(props) => props.theme.color.primary};
`;