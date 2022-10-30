import React from "react";
import { Link } from "react-router-dom";
import './Indexnavsty.css'
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";


export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-blueGray-700 text-50px font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase no-underline"
            >
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <img src='data:image/png;base64,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' width={100} height={100}></img>
                <h1 className="title"> DOC AT EASE </h1>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <IndexDropdown />

              </li>


              <li className="flex items-center">
                <button
                  //className="bg-success text-white active:bg-success text-xs font-bold uppercase px-4 py-2  rounded shadow hover:shadow-lg outline-none focus:outline-none m-3 ease-linear transition-all duration-150"
                  type="button"
                ><Link
                  to="/profile"
                  className="bg-success text-white active:bg-success text-xs font-bold uppercase px-4 py-2  rounded shadow hover:shadow-lg outline-none focus:outline-none m-3 ease-linear transition-all duration-150 text-decoration-none"
                >
                    Login
                  </Link>
                </button>
              </li>
              <li className="flex items-center">
                <button
                  //className="bg-success text-white active:bg-success text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none m-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  {/* <i className="fas fa-arrow-alt-circle-down"></i> Register */}
                  <Link
                    to="/login"
                    className="bg-success text-white active:bg-success text-xs font-bold uppercase px-4 py-2  rounded shadow hover:shadow-lg outline-none focus:outline-none m-3 ease-linear transition-all duration-150 text-decoration-none"
                  >
                    Sign up
                  </Link>
                </button>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}