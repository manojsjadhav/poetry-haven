import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import './App.css';

const App = () => {
  return (
    <div style={style.container}>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

const style = {
  container: {
    backgroundColor: "#0e1738",
  },
};
export default App;
