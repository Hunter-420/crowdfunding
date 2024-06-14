import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderRight from "./HeaderRight";
import styled from "styled-components";
import Wallet from "../Wallet/Wallet";
const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLogo />
      <HeaderNav />
      <Wallet />
      <HeaderRight />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  box-shadow: ${(props) => props.theme.boxShadow};
  height: min-content;
  display: flex;

  overflow-x: hidden;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
`;
