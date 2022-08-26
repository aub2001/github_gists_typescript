import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0px;
        padding: 0px;
        font-family: Arial, Helvetica, sans-serif;
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.font_color};
    }
`;

export default GlobalStyle;

// THEMES

export const lightTheme = {
    body: "#FFF",
    font_color: "#3e3e3e",
    content: "#FFF",

    primary_color: "#5acba1",
    primary_color_light: "#87d3b7",
};

export const darkTheme = {
    body: "#212121",
    font_color: "#FFF",
    content: "#3b3b3b",

    primary_color: "#5acba1",
    primary_color_light: "#87d3b7",
}

