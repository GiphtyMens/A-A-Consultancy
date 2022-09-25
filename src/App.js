import React from "react"
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./app/Home";
import Contact from "./app/Contact";
import About from "./app/About";
import Services from "./app/Services"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
