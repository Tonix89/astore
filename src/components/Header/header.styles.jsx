import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    background-color : ${(props) => props.theme.color.bgLight};
    padding : 12px;

    @media (max-width : 500px) {
        padding : 5px;
        padding-top : 10px;
    }
`;
