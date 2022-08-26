import { ReactNode } from "react";
import styled from "styled-components";

const StyledContainer  = styled.div`
    height: 90vh;
    width: 100%;
    background-color: ${props => props.theme.body};
 `

export const Container = ({children}: {children: ReactNode}) => {

    return(
        <StyledContainer >
            {children}
        </StyledContainer>
    )
}