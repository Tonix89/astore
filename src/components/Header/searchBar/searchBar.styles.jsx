import styled from "styled-components";

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
    border : 0;
    position : absolute;
`;