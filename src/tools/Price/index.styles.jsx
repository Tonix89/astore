import styled from "styled-components";

export const Price = styled.h4`
    color : ${(props) => props.theme.color.warning};
    margin : 0;
`;

export const FirstPrice = styled(Price)`
    text-decoration : line-through;
    color : ${(props) => props.theme.color.light};
`;