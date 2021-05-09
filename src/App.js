import React from "react";
import Navbar from "./components/Navbar/MyNavbar.jsx";
import About from "./pages/About";
import Contact from "./pages/Contact";
 import Portfolio from "./pages/Portfolio";

 // components
 import Footer from "./components/Footer/Footer.jsx"
 import Carousel from "./components/Carousel/MyCarousel.jsx"

function App() {
  return (
    
      <div>
        <Navbar />
        <Carousel />
        <About />
        <Contact />
        <Portfolio />
       
       <Footer />
      </div>
    
  );
}

export default App;
