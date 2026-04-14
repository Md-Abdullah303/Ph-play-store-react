import React from "react";
import { Outlet } from "react-router";
import Nevber from "../components/shared/Navber/Navber";

const RootLayout = () => {
  return (
    <div>
      <Nevber></Nevber>
      <Outlet></Outlet>
      <h1>footer</h1>
    </div>
  );
};

export default RootLayout;
