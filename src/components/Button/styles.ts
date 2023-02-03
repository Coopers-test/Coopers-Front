import styled from "styled-components";

interface IButtonProps {
  backgroundColor: string;
  color: string;
  height: string;
  width: string;
  fontSize: string;
  borderRadius: string;
  fontWeight: string;
  colorHover: string;
}

export const Button = styled.button<IButtonProps>`
  width: ${(props) => props.width};
  background-color: ${(props) => props.backgroundColor};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  border-radius: ${(props) => props.borderRadius};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};

  font-family: "Montserrat", sans-serif;
  border: none;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background-color: ${(props) => props.colorHover};
  }

  @media screen and (max-width: 800px) {
    width: 9.375rem;
    height: 2.5rem;
    font-size: 0.9375rem;
  }
`;
