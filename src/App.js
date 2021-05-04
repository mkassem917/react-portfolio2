import React from "react";
import Navbar from "./components/Navbar/MyNavbar.jsx";
import About from "./pages/About";
import Contact from "./pages/Contact";
 import Portfolio from "./pages/Portfolio";

function App() {
  return (
    
      <div>
        <Navbar />
        <About />
        <Contact />
        <Portfolio />
       
      </div>
    
  );
}

export default App;
