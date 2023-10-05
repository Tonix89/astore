import { ThemeProvider } from "styled-components";

const theme = {
    color : {
        primary : "var(--color-primary)",
        secondary : "var(--color-secondary)",
        warning : "var(--color-warning)",
        success : "var(--color-success)",
        light : "var(--color-light)",
        bgLight : "var(--color-bgLight)",
    },
}

export const Theme = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;