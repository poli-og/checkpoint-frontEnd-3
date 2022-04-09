import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Toggle from "./components/Toggle";
import *  as React from "react";
import { useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [mode, setMode] = useState("");

  const lightMode = () => {
    if (mode === "") {
      setMode("light-mode");
    } else {
      setMode("");
    }
  };
  

  return (
    
      <div className={`App ${mode}`} id="App">
          <Navbar />
          <About  />
          <Projects />
          <Skills  />
          <Toggle />
          <button className="btn-moon" aria-label="Desativar DarkMode" onClick={lightMode}><svg className="btn-dark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
          </button>
          <Footer />
          
     
      </div>
  )      
}

export default App;
