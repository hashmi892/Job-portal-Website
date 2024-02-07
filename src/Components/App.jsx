import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import About from "../Pages/About";
import Home from "../Pages/Home";
import ContactUs from "../Pages/ContactUs";
import FindJobs from "../Pages/FindJobs";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import UserProfile from "../Pages/UserProfile";
import ProfileSetting from "../Pages/ProfileSetting";
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
            <Route exact path="/findJobs" Component={FindJobs} />
            <Route exact path="/Login" Component={Login} />
            <Route exact path="/Signup" Component={SignUp} />
            <Route exact path="/UserProfile" Component={UserProfile} />
            <Route exact path="/ProfileSetting" Component={ProfileSetting} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
