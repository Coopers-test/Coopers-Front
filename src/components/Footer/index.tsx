import { ContainerFooter } from "./styles";

const Footer = () => {
  return (
    <ContainerFooter>
      <div className="blank--div"></div>
      <div className="footer--container">
        <p className="non--rotate">Need help?</p>
        <p className="non--rotate">coopers@coopers.pro</p>
        <span className="non--rotate">
          © 2021 Coopers. All rights reserved.
        </span>
        <div className="non--rotate green--rectangle"></div>
      </div>
    </ContainerFooter>
  );
};

export default Footer;
