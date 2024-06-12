"use client";
import Header from "./Header";
import { themes } from "./Themes";
import { ThemeProvider, createGlobalStyle, styled } from "styled-components";
import { useState, createContext } from "react";
const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeProvider theme={themes[theme]}>
      <LayoutWrapper onClick={toggleTheme}>
        <GlobalStyle>
          <Header />
          {children}
        </GlobalStyle>
      </LayoutWrapper>
    </ThemeProvider>
  );
};

export default Layout;
const GlobalStyle = createGlobalStyle`

    body{
        margin:0;
        padding: 0;
        box-sizing: border-box;
          
    }
`;

const LayoutWrapper = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  background-image: ${(props) => props.theme.bgImage};
  /* color: ${(props) => props.theme.color}; */
  min-height: 100dvh;
`;
