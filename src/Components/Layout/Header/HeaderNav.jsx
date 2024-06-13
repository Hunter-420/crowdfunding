import styled from "styled-components";

const HeaderNav = () => {
  return (
    <NavWrapper>
      <NavLink>Campagins</NavLink>
      <NavLink> Create Campagins</NavLink>
      <NavLink> Dashboard</NavLink>
    </NavWrapper>
  );
};

export default HeaderNav;

const NavWrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.bgDiv};
  padding: 6px;
  height: 90%;
  border-radius: 10px;
  padding: 2px 5px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: small;
`;

const NavLink = styled.div`
  margin: 7px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bgSubDiv};
`;
