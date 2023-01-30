import styled from "styled-components";

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin-top: 3.125rem;

  @media screen and (min-width: 500px) {
    margin-top: 5.625rem;
  }
`;

export const FormContainer = styled.div`
  width: 90%;
  max-width: 43.75rem;
  box-shadow: 0rem 0.5rem 1rem 0rem #06152b14;

  padding: 1.25rem;

  @media screen and (min-width: 500px) {
    padding: 3.125rem;
  }
  .container--img {
    display: flex;
    justify-content: center;

    img {
      border-radius: 100%;
      width: 9.375rem;

      @media screen and (min-width: 800px) {
        width: 12.5rem;
      }
    }
  }

  .container--title--icon {
    display: flex;
    gap: 0.9375rem;
    margin: 1.25rem 0;

    img {
      width: 3.125rem;

      @media screen and (min-width: 800px) {
        width: 3.75rem;
      }
    }

    .container--title {
      flex-direction: column;
      font-size: 1.25rem;

      @media screen and (min-width: 800px) {
        font-size: 1.5rem;
      }
    }
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 400;

    margin-bottom: 0.9375rem;
  }

  .container--input--row {
    @media screen and (min-width: 500px) {
      display: flex;
      gap: 0.625rem;

      label {
        width: 50%;
      }
    }
  }

  input,
  textarea {
    border-radius: 0.25rem;
    border: 0.0625rem solid #0000006e;
    padding: 0.625rem;
    font-family: "Montserrat", sans-serif;
  }

  textarea {
    height: 4.375rem;
  }

  button {
    width: 100%;
    height: 3.25rem;
  }
`;
