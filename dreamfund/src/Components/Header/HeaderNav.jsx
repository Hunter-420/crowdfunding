import styled from "styled-components";
import { usePathname } from "next/navigation";
import Link from "next/link";

const HeaderNav = () => {
  const pathname = usePathname();

  return (
    <NavWrapper>
      <Link href="/" passHref legacyBehavior>
        <StyledLink active={pathname === "/" ? 1 : 0}>Campaigns</StyledLink>
      </Link>
      <Link href="/createcampaigns" passHref legacyBehavior>
        <StyledLink active={pathname === "/createcampaigns" ? 1 : 0}>
          Create Campaigns
        </StyledLink>
      </Link>
      <Link href="/dashboard" passHref legacyBehavior>
        <StyledLink active={pathname === "/dashboard" ? 1 : 0}>
          Dashboard
        </StyledLink>
      </Link>
    </NavWrapper>
  );
};

export default HeaderNav;

const NavWrapper = styled.div`
  display: flex;
  border-radius: 20px;
  padding: 4px 20px;
  height: 90%;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bgDiv};
  color: ${(props) => props.theme.color};
  font-weight: medium;
  font-size: 1rem;
`;

const StyledLink = styled.div`
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.theme.color};
  font-weight: medium;
  font-size: 1rem;
  padding: 4px 10px;
  margin: 7px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) =>
    props.active ? props.theme.bgSubDiv : props.theme.bgDiv};
  justify-content: center;
  transition: background-color 0.3s, border-radius 0.3s, padding 0.3s;
`;
