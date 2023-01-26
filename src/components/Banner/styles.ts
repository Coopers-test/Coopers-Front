import styled from "styled-components";

export const BannerContainer = styled.div`
  max-width: 100vw;
  display: flex;
  justify-content: space-between;

  .container--text {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 5%;

    @media screen and (min-width: 800px) {
      gap: 2.25rem;
    }
  }

  h3 {
    font-family: "Montserrat", sans-serif;
  }
  .title--bold {
    font-weight: 700;
    font-size: 2rem;

    @media screen and (min-width: 500px) {
      font-size: 2.5rem;
    }

    @media screen and (min-width: 800px) {
      font-size: 4rem;
    }

    @media screen and (min-width: 1200px) {
      font-size: 5rem;
    }
  }

  .title--green {
    font-weight: 400;
    font-size: 1.6rem;
    color: var(--light-green);

    @media screen and (min-width: 500px) {
      font-size: 2rem;
    }

    @media screen and (min-width: 800px) {
      font-size: 3rem;
    }

    @media screen and (min-width: 1200px) {
      font-size: 4.375rem;
      line-height: 3.75rem;
    }
  }

  p {
    font-size: 1rem;
    font-family: "Montserrat";
    font-weight: 600;

    @media screen and (min-width: 500px) {
      font-size: 1.25rem;
    }

    @media screen and (min-width: 800px) {
      font-size: 1.5rem;
    }
  }
`;

export const ImageContainer = styled.div`
  padding-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media screen and (min-width: 800px) {
  }

  .img--room {
    width: 10.625rem;
    position: sticky;
    z-index: 1;
    margin: 1.25rem;

    @media screen and (min-width: 800px) {
      width: 18.75rem;
      position: relative;
      bottom: 2.8125rem;
    }

    @media screen and (min-width: 1200px) {
      width: 21.875rem;
      position: relative;

      bottom: 2.8125rem;
    }
  }

  .img--bg {
    width: 6.25rem;

    @media screen and (min-width: 500px) {
      width: 14.375rem;
      position: relative;
      bottom: 13.625rem;
    }

    @media screen and (min-width: 800px) {
      width: 25.25rem;
      position: relative;
      bottom: 29.625rem;
    }

    @media screen and (min-width: 1200px) {
      width: 31.25rem;
      position: relative;
      bottom: 33.625rem;
    }
  }
`;
