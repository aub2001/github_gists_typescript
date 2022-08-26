import styled from "styled-components";
import React from "react";

export const StyledInput = styled.input`
    width: 20vw;
    height: 20px;
    border-radius: 5px;
    background-color: ${props => props.theme.primary_color};
    border: 1px solid lightgray;
    color: lightgray;
    padding: 5px;
    margin: 10px;

    ::placeholder{
        color: lightgray;
        opacity: 80%
    }

    &:focus{
        ::placeholder{
            opacity: 0
        }
        color: ${props => props.theme.font_color};
        background-color: ${props => props.theme.body};
    }
`

type props = {
    onChange(val: string): void,
    onSubmit: (searchText: string | undefined) => void,
    type: string,
    placeholder:string,
    value: string,
}


const InputField = (props: props) => {
    const {type, placeholder, value, onChange, onSubmit} = props;
        
    const handleSubmit = (event) => {
        console.log(event.target.value)
        if (event.key === 'Enter'){
            onSubmit(event.target.value)
        }
    }

  return (
    <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        onKeyDown={(event)=>handleSubmit(event)}
    >
    </StyledInput>
  )
}

export default InputField
