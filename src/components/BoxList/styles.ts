import styled from "styled-components";

interface IBoxListContainerProps {
  setColor: string;
}

export const BoxListContainer = styled.fieldset<IBoxListContainerProps>`
  width: 80%;
  max-width: 23.75rem;
  height: fit-content;
  padding: 1.25rem;

  border-top: 0.625rem solid ${(props) => props.setColor};
  font-family: "Montserrat", sans-serif;
  box-shadow: 0rem 0.25rem 0.75rem 0rem #42424233;

  .list--center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3 {
    font-size: 1.375rem;
  }

  p {
    font-size: 1.1875rem;
  }

  .box--list--items {
    margin: 1.5625rem 0;
  }

  .input--newTask {
    margin: 1rem;
    display: flex;
    justify-content: space-between;

    button {
      background-color: transparent;
      cursor: pointer;
    }
  }
`;
