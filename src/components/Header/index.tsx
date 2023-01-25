import { Button } from "../Button/styles";
import { HeaderContainer } from "./styles";
import Logo from "../../assets/Logo.svg";

const Header = () => (
  <HeaderContainer>
    <div className="container--logo">
      <img src={Logo} alt="Company's Logo" />
    </div>
    <Button
      backgroundColor="var(--black)"
      color="var(--white)"
      borderRadius="0px"
      colorHover="gray"
      fontSize="14px"
      fontWeight="600"
      height="40px"
      width="120px"
    >
      Entrar
    </Button>
  </HeaderContainer>
);

export default Header;
