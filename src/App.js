import React from "react";
import Navbar from "./components/Navbar/MyNavbar.jsx";
import About from "./pages/About";
import Contact from "./pages/Contact";
 import Portfolio from "./pages/Portfolio";
 import Footer from "./components/Footer/Footer.jsx"

function App() {
  return (
    
      <div>
        <Navbar />
        <About />
        <Contact />
        <Portfolio />
       
       <Footer />
      </div>
    
  );
}

export default App;
