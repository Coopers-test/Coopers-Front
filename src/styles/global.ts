import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    list-style: none;
    border: none;
  }

  :root{
    --light-green: #4AC959;
    --dark-green: #49AF55;
    --black: #000000;
    --orange: #E88D39;
    --white: #FFFFFF;
  }
`;

export default GlobalStyle;
