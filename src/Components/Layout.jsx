import React from "react";
import NavBar from "./NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
