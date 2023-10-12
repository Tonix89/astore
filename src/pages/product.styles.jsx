import styled from "styled-components";

export const ProductCont = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-contents : center;
    margin : 10px;
`;

// Image Container Styles

export const ImageCont = styled.div`
    position : relative;
    width : 85%;
    height : 350px;
    overflow : hidden;
    @media (max-width : 650px) {
        width : 95%;
    }
`;

export const ProductImage = styled.img`
    width : 100%;
    height : 100%;
    border-radius : 10px;
    object-fit : cover;
    cursor : pointer;
`;

export const PriceCont = styled.div`
    position : absolute;
    top : 84%;
    align-self : flex-start;
    margin : 10px 5px;
    background-color : white;
    padding : 2px 10px;
    border-radius : 10px;
    color : ${(props) => props.theme.color.primary};
`;

// Image Modal Styles

export const ModalCont = styled.div`
    position : absolute;
    width : 100vw;
    height : 100vh;
    z-index : 100;
`;
export const ImageModal = styled.img`
    width : 50%;
    @media (max-width : 650px) {
        width : 90%;
    }
`;


// Product Info  and Button Styles

export const TitleCont = styled(ProductCont)`
    flex-direction : row;
    justify-content : space-between;
    width : 85%;

    @media (max-width : 650px) {
        width : 95%;
    }
`;

export const ProductTitle = styled.h2`
    margin : 0;

    @media (max-width : 500px) {
        font-size : 18px;
    }
`;

export const H3 = styled.h3`
    margin : 0;
    padding-left : 10px;
`;

export const H4 = styled.h4`
    margin : 0;
`;


export const AddButton = styled.button`
    border : 3px solid ${(props) => props.theme.color.primary};
    border-radius : 10px;
    color : ${(props) => props.theme.color.primary};
    padding : 5px 10px;
    font-size : 18px;
    font-weight : bold;
    cursor : pointer;
`;

export const ProductDesc = styled.p`
    text-align : start;
    text-indent : 50px;
    font-size : 18px;
    font-weight : bold;

    @media (max-width : 500px) {
        font-weight : normal;
    }
`;

export const RatingCont = styled(ProductCont)`
    flex-direction : row;
    gap: 10px;
    width : 100%;
`;

export const ReviewsCont = styled(ProductCont)`
    text-align : start;
    width : 100%;
    min-height : 100px;
    border : 1px solid ${(props) => props.theme.color.light};
    background-color : ${(props) => props.theme.color.bgLight};
`;