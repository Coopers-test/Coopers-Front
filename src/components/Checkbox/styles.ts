import styled from "styled-components";

interface ICheckboxWrapperProps {
  setColor: string;
}

export const CheckboxWrapper = styled.div<ICheckboxWrapperProps>`
  input[type="checkbox"] {
    appearance: none;
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    margin-right: 0.5rem;
    border: 0.1rem solid ${(props) => props.setColor};
    cursor: pointer;

    &:checked {
      background-color: ${(props) => props.setColor};
      color: #fff;
      position: relative;
    }

    &:before {
      content: "";
      font-size: 1.5em;
      color: #fff;
      position: absolute;
      right: 0.0625rem;
      top: -0.3125rem;
    }

    &:focus {
      box-shadow: 0 0 0.3125rem ${(props) => props.setColor};
    }
  }
`;
