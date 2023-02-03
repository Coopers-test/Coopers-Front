import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import CarouselBox from "./components/CarouselBox";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import ModalLogin from "./components/ModalLogin";
import ModalRegister from "./components/ModalRegister";
import TodoSection from "./components/TodoSection";
import { ListContextProvider } from "./context/ListContext";
import { UserContextProvider } from "./context/UserContext";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <UserContextProvider>
      <ListContextProvider>
        <GlobalStyle />
        <Header />
        <Banner />
        <TodoSection />
        <CarouselBox />
        <Form />
        <Footer />
        <ModalLogin />
        <ModalRegister />
      </ListContextProvider>
    </UserContextProvider>
  );
}

export default App;
