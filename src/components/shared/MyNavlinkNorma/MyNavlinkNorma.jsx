import React from "react";
import { NavLink } from "react-router";

const MyNavlinkNormal = ({ children, to, className }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `font-semibold ${className} ${isActive && "primary-linear text-transparent bg-clip-text border-b border-primary"}`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default MyNavlinkNormal;
