import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import TodoSection from "./components/TodoSection";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Banner />
      <TodoSection />
    </div>
  );
}

export default App;
