import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Banner />
    </div>
  );
}

export default App;
