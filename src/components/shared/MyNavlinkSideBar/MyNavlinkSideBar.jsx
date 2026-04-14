import React from "react";
import { NavLink } from "react-router";

const MyNavlinkSideBar = ({children, to}) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `${isActive && "primary-linear text-transparent bg-clip-text"}`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default MyNavlinkSideBar;
