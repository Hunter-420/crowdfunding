"use client";
import Header from "./Header/Header";
import { themes } from "./Themes";
import { ThemeProvider, createGlobalStyle, styled } from "styled-components";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.color};
  }
`;

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <LayoutWrapper onClick={toggleTheme}>
        <Header />
        {children}
      </LayoutWrapper>
    </ThemeProvider>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
`;
