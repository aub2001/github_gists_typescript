import styled from "styled-components";

export const StyledGistDisplayToggle = styled.button`
    height: 30px;
    width: 50px;
    position: absolute;
    top: 9vh;
    right: 35px;
    font-size: 12px;
    z-index:2;

    border-radius: 15px;
    border: none;
    background-color:${props => props.theme.primary_color_light};
    color: ${props => props.theme.font_color};

    &:hover {
        cursor: pointer;
        scale: 1.1;
    }
`

type Props = {
    text: string,
    onClick: () => void,
}


const GistDisplayToggle = (props: Props) => {
    const {text, onClick} = props

    return(
        <StyledGistDisplayToggle onClick={onClick}>
            {text}
        </StyledGistDisplayToggle>
    )
}

export default GistDisplayToggle;