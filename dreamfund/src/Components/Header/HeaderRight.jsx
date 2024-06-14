import React, { useContext } from "react";
import { App } from "../Layout/Layout";

import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import styled from "styled-components";

const HeaderRight = () => {
  const ThemeToggler = useContext(App);
  return (
    <HeaderRightWrapper>
      <ToggleWrapper>
        {ThemeToggler.theme === "light" ? (
          <IoMoonOutline onClick={ThemeToggler.toggleTheme} />
        ) : (
          <MdOutlineWbSunny onClick={ThemeToggler.toggleTheme} />
        )}
      </ToggleWrapper>
    </HeaderRightWrapper>
  );
};

export default HeaderRight;

const HeaderRightWrapper = styled.div`
  margin-right: 30px;
  height: 60%;
`;

const ToggleWrapper = styled.div`
  background-color: ${(props) => props.theme.bgDiv};
  display: flex;
  place-items: center;
  font-weight: bold;
  font-size: 2rem;
  padding: 10px;
  width: 20px;
  height: 20px;
  border-radius: 20%;
  cursor: pointer;
`;
