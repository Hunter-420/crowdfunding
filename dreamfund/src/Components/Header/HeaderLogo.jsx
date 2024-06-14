import styled, { useTheme } from "styled-components";
import Image from "next/image";
const HeaderLogo = () => {
  const theme = useTheme();
  return (
    <Logo>
      <StyledImage
        // src="/Images/DreamFundBlack.png"
        src={theme.Logo}
        alt="logo"
        height={40}
        width={100}
        quality={100}
        priority={true}
      />
    </Logo>
  );
};

export default HeaderLogo;

const Logo = styled.h1`
  margin-left: -40px;
  /* background-color: rebeccapurple; */
`;
const StyledImage = styled(Image)`
  object-fit: cover;
`;
