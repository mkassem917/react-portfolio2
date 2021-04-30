import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Navbar />
        <div className="content" >
        <Route pages={Home} path="/" />
        <Route pages={About} path="/about" />
        <Route pages={ContactPage} path="/contact" />
        <Route pages={Portfolio} path="/portfolio" />
        </div>
      </Switch>
      
      </div>
    </Router>
  );
}

export default App;
