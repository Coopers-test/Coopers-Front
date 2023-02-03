import styled from "styled-components";

export const CarouselBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  font-family: "Montserrat", sans-serif;

  p:first-child {
    color: var(--white);
    font-weight: 700;
    margin: 30px 30px 20px 30px;
    font-size: 22px;

    @media screen and (min-width: 600px) {
      font-size: 36px;
    }

    @media screen and (min-width: 800px) {
      font-size: 48px;
    }
  }

  .green--container {
    width: 80%;
    height: 400px;
    border-radius: 10px;
    background-color: var(--light-green);
  }

  .card--container {
    width: 90%;
    max-width: 280px;
    height: 60%;
    background-color: var(--white);
    border-radius: 16px;
    overflow: hidden;
    margin: 0 auto;

    box-shadow: 0rem 0.25rem 0.75rem 0rem #42424233;

    img {
      width: 100%;
    }

    .content--card--container {
      display: flex;
      flex-direction: column;
      gap: 15px;

      padding: 15px;
    }

    span {
      border: 1px solid var(--gray);
      border-radius: 16px;
      padding: 5px;
      font-size: 14px;
      width: fit-content;
      color: var(--gray);
    }

    a {
      text-decoration: none;
      color: var(--light-green);
      font-weight: 700;
    }
  }

  .swiper-wrapper {
    min-height: 340px;
  }
`;
