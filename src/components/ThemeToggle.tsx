
import { toggleTheme } from "../state/actions/themeActions";
import { useDispatch, useSelector } from "react-redux";
import { lightTheme } from "../GlobalStyles";
import styled from "styled-components";
import { RootStore } from "../state/store";

export const StyledThemeToggle = styled.button`
    height: 30px;
    width: 30px;
    position: fixed;
    top: 50px;
    left: 20px;
    display: flex;
    text-align: center;
    align-items: center;
    font-size: 7px;
    z-index:8;

    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.font_color};
    color: ${props => props.theme.body};
    
    
    &: hover {
        cursor: pointer;
        scale: 1.1;
    }
`

const ThemeToggle = () => {

    const dispatch = useDispatch();
    const theme = useSelector((state: RootStore) => state.theme)

    const toggle = async () => {
        dispatch(toggleTheme());
    }

    return(
        <StyledThemeToggle onClick={toggle} >
            {theme === lightTheme? "dark theme" : "light theme"}
        </StyledThemeToggle>
    );

};

export default ThemeToggle