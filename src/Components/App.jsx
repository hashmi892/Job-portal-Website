import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import About from "../Pages/About";
import Home from "../Pages/Home";
import ContactUs from "../Pages/ContactUs";
import FindJobs from "../Pages/FindJobs";
import Blog from "../Pages/Blog";
import LoginSignUp from "../Pages/LoginSignUp";
const App = () => {
  return (
    <div>
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/About" Component={About} />
            <Route exact path="/Contact" Component={ContactUs} />
            <Route exact path="/Blog" Component={Blog} /> 
            <Route exact path="/findJobs" Component={FindJobs} />
            <Route exact path="/LoginSignup" Component={LoginSignUp} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
