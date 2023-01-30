import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import CarouselBox from "./components/CarouselBox";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoSection from "./components/TodoSection";
import { ListContextProvider } from "./context/ListContext";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <ListContextProvider>
        <GlobalStyle />
        <Header />
        <Banner />
        <TodoSection />
        <CarouselBox />
        <Form />
        <Footer />
      </ListContextProvider>
    </>
  );
}

export default App;
