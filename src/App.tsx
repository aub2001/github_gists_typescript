import React, { useState } from "react";
import {useSelector} from "react-redux";
import {RootStore} from  "./state/store";
import GlobalStyle from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import HomePage from "./components/HomePage";
import SingleGist from "./components/SingleGist";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  const theme = useSelector((state: RootStore) => state.theme)
  const [searchText , setSearchText] = useState<string | undefined>("");
  const callback = (searchText : string | undefined) => {
    setSearchText(searchText);
  }



  return (
    <React.StrictMode>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />        
            <Navbar onSubmit={callback}/>
            <ThemeToggle/>
              <Routes>  
                  <Route exact path="/"  element={<HomePage searchText={searchText} /> } />
                  <Route path="/gist/:id" element={<SingleGist /> } />
              </Routes>
        </ThemeProvider>
      </Router>
    </React.StrictMode>
  );
}

export default App;
