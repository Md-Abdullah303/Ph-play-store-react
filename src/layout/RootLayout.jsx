import React from "react";
import { Outlet } from "react-router";
import Nevber from "../components/shared/Navber/Navber";
import Footer from "../components/shared/Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <Nevber></Nevber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
