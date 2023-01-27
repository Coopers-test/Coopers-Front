import styled from "styled-components";

export const ContainerFooter = styled.footer`
  color: var(--white);
  height: 12.5rem;
  font-family: "Montserrat", sans-serif;
  overflow: hidden;
  margin-top: 1.25rem;

  .blank--div {
    height: 1.875rem;
  }

  .footer--container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.625rem;

    background: black;
    width: 105%;
    height: 100%;
    transform: rotate(-2deg);
    padding-top: 1.6875rem;
  }

  .non--rotate {
    transform: rotate(2deg);
  }

  p {
    font-size: 1.25rem;

    @media screen and (min-width: 800px) {
      font-size: 1.5rem;
    }
  }

  span {
    font-size: 0.875rem;
    margin-bottom: 0.375rem;
  }

  .green--rectangle {
    height: 1.875rem;
    background: var(--light-green);
    width: 9.375rem;
    position: absolute;
    bottom: 1.25rem;

    @media screen and (min-width: 800px) {
      width: 31.25rem;
    }
  }
`;
