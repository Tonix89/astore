import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavUl = styled.ul`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    background-color : ${(props) => props.theme.color.bgLight};
    padding : 12px;
    margin: 0;
    gap:10px;
    background-color : transparent;

    @media (max-width : 500px) {
        padding : 5px;
        gap:8px;
    }
`;

export const NavLi = styled.li`
    font-size : 20px;
    list-style:none;
    font-weight:bold;

    @media (max-width : 500px) {
        font-size : 18px;
    }

    @media (max-width : 400px) {
        font-size : 15px;
    }
`;

export const StyledLink = styled(NavLink)`
    color : black;
    text-decoration : none;

    &:hover {
        color : ${(props) => props.theme.color.primary};
    };

    &.active {
        text-decoration : underline;
        color : ${(props) => props.theme.color.primary};
    };
`;