import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 200;
  font-family: "Montserrat", sans-serif;

  position: fixed;
  top: 0;
  left: 0;

  .modal--container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;

    background-color: var(--white);
    width: 80%;
    max-width: 900px;
    height: 70%;
    max-height: 700px;
    border-radius: 5px;
    overflow: scroll;

    .modal--close {
      display: flex;
      justify-content: flex-end;

      width: 100%;
      padding: 15px 15px 0;

      button {
        background-color: transparent;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        cursor: pointer;
      }
    }

    .modal--title {
      display: flex;
      flex-direction: column;
      align-items: center;

      @media screen and (min-width: 800px) {
        flex-direction: row;
      }

      img {
        width: 150px;
      }

      .title--subtitle {
        display: flex;
        flex-direction: column;
        align-items: center;

        @media screen and (min-width: 800px) {
          align-items: flex-start;
        }

        h3 {
          font-size: 30px;

          @media screen and (min-width: 800px) {
            font-size: 60px;
          }
        }

        p {
          color: var(--light-green);
          font-weight: 400;
          font-size: 20px;

          @media screen and (min-width: 800px) {
            font-size: 40px;
          }
        }
      }
    }

    .modal--content {
      padding: 10px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      align-items: center;

      width: 100%;
      max-width: 340px;

      @media screen and (min-width: 800px) {
        padding: 0px;
      }

      label {
        display: flex;
        flex-direction: column;
        gap: 8px;

        @media screen and (min-width: 800px) {
          width: 100%;
        }
      }

      input {
        border: 1px solid var(--dark-gray);
        border-radius: 4px;
        height: 30px;
        padding: 10px;
        font-family: "Montserrat", sans-serif;

        @media screen and (min-width: 800px) {
          height: 50px;
        }
      }

      button {
        @media screen and (min-width: 800px) {
          width: 100%;
          margin-top: 10px;
          height: 50px;
        }
      }
    }
  }
`;
