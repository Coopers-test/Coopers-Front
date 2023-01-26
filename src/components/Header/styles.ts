import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 5%;
  background-color: transparent;

  img {
    width: 125px;
  }

  .container--logo {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 800px) {
    margin: 2%;
  }
`;
