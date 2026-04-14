import React from "react";
import LogoImg from "../../../assets/images/logo.png";
import { NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import MyNavlinkNormal from "../MyNavlinkNorma/MyNavlinkNorma";
import MyNavlinkSideBar from "../MyNavlinkSideBar/MyNavlinkSideBar";

const Nevber = () => {
  return (
    <nav className="bg-base-100 z-50 sticky top-0 shadow-sm">
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
              <MyNavlinkSideBar to={"/"}>Home</MyNavlinkSideBar>
              <MyNavlinkSideBar to={"/apps"}>Apps</MyNavlinkSideBar>
              <MyNavlinkSideBar to={"/installed"}>
                Installation
              </MyNavlinkSideBar>
            </ul>
          </div>
          <NavLink to={"/"} className={"flex items-center sm:ml-3 gap-1 sm:gap-2"}>
            <img className="w-5 sm:w-10" src={LogoImg} alt="nav logo" />
            <h1 className="text-[14px] sm:text-2xl font-bold primary-linear text-transparent bg-clip-text">
              HERO .IO
            </h1>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu space-x-5 text-lg menu-horizontal px-1">
            <MyNavlinkNormal to={"/"}>Home</MyNavlinkNormal>
            <MyNavlinkNormal to={"/apps"}>Apps</MyNavlinkNormal>
            <MyNavlinkNormal to={"/installed"}>Installation</MyNavlinkNormal>
            <MyNavlinkNormal to={"/dashboard"}>Dashborad</MyNavlinkNormal>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn primary-linear text-[12px] sm:text-[16px] text-white border-none">
            <FaGithub /> Contribute
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nevber;
