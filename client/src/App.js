import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/styles.css";

import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import Home from "./components/Home";
import Stocks from "./components/Stocks";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="login">
          <Route path="/signIn" component={ LoginForm } />
          <Route path="/signUp" component={ RegistrationForm } />
          <Route path="/home" component={ Home } />
          <Route path="/stocks" component= { Stocks } />
        </div>
      </Router>
      

      <Footer />
    </div>
  );
}

export default App;
