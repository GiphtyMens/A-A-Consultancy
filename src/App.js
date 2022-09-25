import React from "react"
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ChooseUs from "./components/ChooseUs";
import OurServices from "./components/OurServices";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ChooseUs />
      <OurServices />
    </div>
  );
}

export default App;
