import { useMediaQuery } from "react-responsive";

import { Button } from "../Button/styles";
import { BannerContainer, ImageContainer } from "./styles";
import Room from "../../assets/Room_picture.svg";
import BG from "../../assets/BG.svg";

const Banner = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  return (
    <BannerContainer>
      <div className="container--text">
        <div className="container--title">
          <h3 className="title--bold">Organize</h3>
          <h3 className="title--green">your daily jobs</h3>
        </div>
        <p>The only way to get things done</p>
        <Button
          color="var(--white)"
          backgroundColor="var(--light-green)"
          borderRadius="10px"
          colorHover="var(--dark-green)"
          fontSize="20px"
          fontWeight="500"
          height="64px"
          width="300px"
        >
          Go to To-do List
        </Button>
      </div>
      {isMobile ? (
        <ImageContainer>
          <img className="img--bg" src={BG} alt="Logo as background" />
        </ImageContainer>
      ) : (
        <ImageContainer>
          <img className="img--room" src={Room} alt="Room" />
          <img className="img--bg" src={BG} alt="Logo as background" />
        </ImageContainer>
      )}
    </BannerContainer>
  );
};

export default Banner;
