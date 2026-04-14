import React from "react";
import LogoImg from "../../../assets/images/logo.png";
import { NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";

const Nevber = () => {
  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 space-y-3 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavLink
                className={({ isActive }) =>
                  `${isActive && "primary-linear text-transparent bg-clip-text"}`
                }
                to={"/"}
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${isActive && "primary-linear text-transparent bg-clip-text"}`
                }
                to={"/apps"}
              >
                Apps
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${isActive && "primary-linear text-transparent bg-clip-text"}`
                }
                to={"/installed"}
              >
                Installation
              </NavLink>
            </ul>
          </div>
          <NavLink to={"/"} className={"flex items-center ml-3 gap-2"}>
            <img className="w-10" src={LogoImg} alt="nav logo" />
            <h1 className="text-2xl font-bold primary-linear text-transparent bg-clip-text">
              HERO .IO
            </h1>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu space-x-5 text-lg menu-horizontal px-1">
            <NavLink
              className={({ isActive }) =>
                `${isActive && "primary-linear text-transparent bg-clip-text border-b border-primary"}`
              }
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive && "primary-linear text-transparent bg-clip-text border-b border-primary"}`
              }
              to={"/apps"}
            >
              Apps
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive && "primary-linear text-transparent bg-clip-text border-b border-primary"}`
              }
              to={"/installed"}
            >
              Installation
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn primary-linear text-white border-none">
            <FaGithub /> Contribute
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nevber;
