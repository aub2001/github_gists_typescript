import styled from "styled-components";
import React, {useState} from 'react'
import Button from './Button';
import InputField from './InputField';
import { useNavigate } from "react-router-dom";

export const StyledNavbar = styled.nav`
    width: 100%;
    height: 8vh;
    background-color: ${props => props.theme.primary_color};
    display: flex;
    overflow: hidden;
`;

export const LeftNavbar = styled.div`
    flex: 60%;
    padding-left: 5vw;
`;

export const RightNavbar = styled.div`
    display: flex;
    align-items: center;
    flex: 40%;
    padding-right: 5vw;
    justify-content: space-evenly;
`;

export const Logo = styled.img`
    max-width: 180px;
    height: auto;
    margin: 20px;
    filter: brightness(0) invert(1);

    &:hover{
        cursor: pointer;
    }
`;

type Props= {
    onSubmit: (serchText : string | undefined) => void
}

const Navbar = (props: Props) => {

  const [searchText, setSearchText] = useState("");

 
  const routeChange = () =>{ 
    console.log("Aaa")
  }

  const navigate = useNavigate();

  const handleLogoClick = () =>{
    const path ='/';
    navigate(path)
  }

  const onTextChange = (val: string) => {
      setSearchText(val);
      if (val === ""){
        props.onSubmit("");
      }
  }

  const onSubmitSearch = () => {
    props.onSubmit(searchText);  
  }

  return (
    <StyledNavbar>
        <LeftNavbar>
            <Logo src='./emumba-logo.png' onClick={() => handleLogoClick()}></Logo>
        </LeftNavbar>
        <RightNavbar>
            <InputField 
                type="text"
                value={searchText}
                placeholder = "Search Notes..."
                onChange = {val => onTextChange(val)}
                onSubmit = {onSubmitSearch}
             />
            <Button text="Login" onClick={routeChange} />
        </RightNavbar>
    </StyledNavbar>
  )
}

export default Navbar