import styled from "styled-components";

export const CartCont = styled.div`
    display : flex;
    flex-direction : column;
    min-height : 200px;
    margin-top : 10px;
    padding: 10px;
    border : 2px solid ${(props) => props.theme.color.light};

    @media (max-width : 800px) {
        margin : 10px;
    }
`;

export const ItemCont = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    align-items : center;
`;

export const ItemImage = styled.img`
    height : 100px;
    width : 100px;
`;

export const TitleCont = styled.div`
    padding-left : 10px;
`;

export const Title = styled.h3`
@media (max-width : 450px) {
    font-size : 15px;
}
`;

export const ButtonCont = styled(ItemCont)`
    width : 100px;
    color :  ${(props) => props.theme.color.primary};
    @media (max-width : 400px) {
        width : 80px;
    }
`;

export const Button = styled.button`
    border :  1px solid ${(props) => props.theme.color.primary};
    color :  ${(props) => props.theme.color.primary};
    cursor : pointer;
`;

export const Price = styled(Title)`
    display : flex;
    flex-direction : row-reverse;
    flex-grow : 1;
    align-self : end;
    color :  ${(props) => props.theme.color.primary};
`;

export const TotalCont = styled(ItemCont)`
`;

export const TotalPrice = styled.h2`
   color :  ${(props) => props.theme.color.primary};
`;

export const Checkout = styled(Button)`
    font-size : 20px;
    font-weight : bold;
    border-radius : 10px;
`;