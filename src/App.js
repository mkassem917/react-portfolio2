import React from "react";
import {
  HashRouter as Router,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Route pages={Home} path="/" />
          <Route pages={About} path="/about" />
          <Route pages={ContactPage} path="/contact" />
          <Route pages={Portfolio} path="/portfolio" />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
