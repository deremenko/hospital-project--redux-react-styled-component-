import { useContext } from "react";
import { HeaderContext } from "../../contexts/context";
import icon from "../../img/header-logo.svg";
import { StyledHeader, StyledImg, StyledTitle } from "./styles";

const Header = () => {
  const { header } = useContext(HeaderContext);

  return (
    <StyledHeader>
      <StyledImg src={icon} />
      <StyledTitle>{header}</StyledTitle>
    </StyledHeader>
  );
}

export default Header;