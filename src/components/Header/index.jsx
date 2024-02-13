import { useContext } from "react";
import { StyledHeader, StyledImg, StyledText } from "./styles";
import { Context } from "../../contexts/context";
import logoIcon from "../../img/logo.png";

const Header = () => {
  const { data } = useContext(Context);
  return (
    <StyledHeader>
      <StyledImg src={logoIcon} />
      <StyledText>{data.title}</StyledText>
    </StyledHeader>
  );
}

export default Header;