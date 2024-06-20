import React, { useState } from 'react'
import './App.css'
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
  <div>
      <Navbar/>
      <Hero/>
      <Skills/>
      <About/>
      <Projects/>
      <Contact/>
      <ThemeToggle/>
      <Footer/>
    </div>
  );
}

export default App;
