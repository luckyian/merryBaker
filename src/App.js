import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import Examples from "./pages/Examples";
import Navibar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="mystyle">
        <Navibar />
        <Wrapper>


          <Route exact path="/" component={Index} />
          <Route exact path="/index" component={Index} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/cakes" component={Examples} />

        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
