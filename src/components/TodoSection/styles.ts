import styled from "styled-components";

export const SectionList = styled.section`
  overflow: hidden;
  min-height: 31.25rem;

  @media screen and (min-width: 800px) {
    position: relative;
    bottom: 6.3125rem;
  }

  .blank--div {
    height: 0.75rem;

    @media screen and (min-width: 600px) {
      height: 1.5625rem;
    }

    @media screen and (min-width: 800px) {
      height: 6.25rem;
    }
  }

  .title--list--container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    color: var(--white);
    background: black;
    width: 105%;
    height: 7.5rem;
    transform: rotate(-2deg);

    font-family: "Montserrat", sans-serif;
    padding: 1.75rem;
    margin: 1.25rem 0 3.25rem -0.625rem;
    position: relative;
    z-index: -1;

    @media screen and (min-width: 800px) {
      margin-left: -6.25rem;
      height: 18.75rem;
      width: 115%;
    }

    @media screen and (min-width: 1200px) {
      width: 109%;
    }

    h2 {
      transform: rotate(2deg);

      @media screen and (min-width: 800px) {
        font-size: 2.5rem;
      }

      @media screen and (min-width: 1200px) {
        font-size: 3.75rem;
      }
    }

    h2:after {
      content: "";
      display: block;
      width: 100%;
      height: 0.125rem;
      background: var(--light-green);
    }

    p {
      transform: rotate(2deg);

      @media screen and (min-width: 1200px) {
        font-size: 1.5rem;
      }
    }
  }

  .container--box--list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;

    img {
      position: absolute;
      left: 0;
      bottom: 0;
    }

    @media screen and (min-width: 800px) {
      flex-direction: row;
      justify-content: center;

      min-height: 37.5rem;
    }
  }
`;
