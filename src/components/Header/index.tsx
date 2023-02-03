import { Button } from "../Button/styles";
import { HeaderContainer } from "./styles";
import Logo from "../../assets/Logo.svg";
import { useUserContext } from "../../context/UserContext";

const Header = () => {
  const { setIsModalLoginOpen, logout, user } = useUserContext();

  const handleLogin = () => {
    user ? logout() : setIsModalLoginOpen(true);
  };

  return (
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
        onClick={() => handleLogin()}
      >
        {user ? "sair" : "entrar"}
      </Button>
    </HeaderContainer>
  );
};

export default Header;
