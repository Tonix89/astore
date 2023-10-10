import styled from "styled-components";

export const ProductCont = styled.li`
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    align-items : center;
    border : 2px solid ${(props) => props.theme.color.light};
    border-radius : 2%;
    padding : 2px;
    list-style-type : none;
    margin-bottom : 5px;
    width : 30%;
    height : 380px;

    @media (max-width : 650px) {
        width : 45%;
    };

    @media (max-width : 400px) {
        width : 95%;
    }
`;

export const ImageCont = styled.div`
    position : relative;
    width : 95%;
    height : 250px;
    margin-top : 5px;
    overflow : hidden;
`;

export const ProductImage = styled.img`
    width : 100%;
    height : 100%;
    border-radius : 5%;
    object-fit : cover;
`;

export const Title = styled.h2`
    display : flex;
    flex-direction : column ;
    align-self : flex-start;
    flex-grow : 1;
    margin : 0;
    padding-left : 10px;
`;

export const ProductLink = styled.button`
    border : 3px solid ${(props) => props.theme.color.primary};
    border-radius : 10px;
    color : ${(props) => props.theme.color.primary};
    padding : 5px 10px;
    font-size : 18px;
    font-weight : bold;
    margin-bottom : 10px;
    cursor : pointer;
`;