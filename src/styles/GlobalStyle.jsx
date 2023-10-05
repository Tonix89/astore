import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    html {
        --color-primary : #E87121;
        --color-secondary : #5CEBCB;
        --color-warning : #B57A07;
        --color-success : #07B55D;
        --color-light : #826E46;
        --color-bgLight : #826e460a;
        height : 100%;
        display : flex;
        flex-direction : column;
        align-items: center;
    }

    body {
        height : 100%;
        width: 90%;
        margin : 0;
        max-width : 1000px;

        @media (max-width : 800px) {
            width: 100%;
        }
    }
`;

export default GlobalStyle;