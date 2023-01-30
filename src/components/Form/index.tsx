import WomanImage from "../../assets/tatiana.svg";
import MessageIcon from "../../assets/Icon_message.svg";
import { FormContainer, FormSection } from "./styles";
import { Button } from "../Button/styles";

const Form = () => {
  return (
    <FormSection>
      <FormContainer>
        <div className="container--img">
          <img src={WomanImage} alt="Woman working on the computer" />
        </div>
        <div className="container--title--icon">
          <img src={MessageIcon} alt="Email's icon" />
          <div className="container--title">
            <p>GET IN</p>
            <strong>TOUCH</strong>
          </div>
        </div>
        <form>
          <label>
            {" "}
            Your name
            <input placeholder="Your name here..." />
          </label>
          <div className="container--input--row">
            <label>
              {" "}
              E-mail*
              <input placeholder="example@example.com" />
            </label>
            <label>
              {" "}
              Telephone*
              <input placeholder="()____-____" />
            </label>
          </div>

          <label>
            {" "}
            Message
            <textarea placeholder="Type what you want to say to us" />
          </label>
          <Button
            backgroundColor="var(--light-green)"
            borderRadius="4px"
            color="var(--white)"
            colorHover="var(--dark-green)"
            fontSize="16px"
            fontWeight="700"
            height="20px"
            width="100%"
          >
            SEND NOW
          </Button>
        </form>
      </FormContainer>
    </FormSection>
  );
};

export default Form;
