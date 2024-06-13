import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderRight from "./HeaderRight";
import styled from "styled-components";
const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLogo />
      <HeaderNav />
      <HeaderRight />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  height: min-content;
  border: 2px solid red;
  display: flex;
  padding: 10px 6px;
  overflow-x: hidden;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
`;
