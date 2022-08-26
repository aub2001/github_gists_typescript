import styled from "styled-components"
import React from "react"

export const StyledButton = styled.button`
    background-color: ${props => props.theme.content};
    color: ${props => props.theme.font_color}; 
    border: none;
    border-radius: 5px;
    height: 25px;
    width: 45px;
    padding: 5px;

    &:hover{
        scale: 1.1;
        color: ${props => props.theme.primary_color};
        cursor: pointer;
    }
`

type Props = {
    text: string,
    onClick : () => void,
}

const Button = (props: Props) => {
    
    const {text, onClick} = props
  
    return (
        <StyledButton onClick={onClick}>
            {text}
        </StyledButton>
    )
}

export default Button