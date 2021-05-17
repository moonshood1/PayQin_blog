import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ showOverlay, setShowOverlay }) => {
  const handleClick = () => {
    setShowOverlay(true);
  };
  return (
    <div className="h-16 px-4 sm:h-20 bg-gray-100 w-full flex flex-wrap content-center sm:px-8">
      {/* Bouton du menu */}
      <div className="grid sm:hidden h-8 w-8 bg-gradient-to-r from-blue-600 to-pink-200 place-content-center text-gray-500 rounded pr-1 pb-1">
        <button className="h-8 w-8 bg-yellow-50 rounded" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* logo */}
      <div className="pl-36 sm:pl-6">
        <Link to="/">
          <img
            src="https://www.payqin.com/wp-content/uploads/2020/09/n3-1.png"
            alt="PayQin_logo"
            className="h-8"
          />
        </Link>
      </div>
      {/* Liens de navigation */}
      <div className="ml-auto">
        <ul className="hidden sm:flex">
          <li className="px-6 text-lg xl:text-xl text-gray-600">
            <a href="https://moonshood1.github.io/payqin_v2/#/">Products</a>
          </li>
          <li className="px-6 text-lg xl:text-xl text-gray-600">
            <a href="https://moonshood1.github.io/payqin_v2/#/developpers">
              Developpers
            </a>{" "}
          </li>
          <li className="px-6 text-lg xl:text-xl text-gray-600">
            <a href="https://moonshood1.github.io/payqin_v2/#/pricing">
              Pricing
            </a>
          </li>
          <li className="px-6 text-lg xl:text-xl text-gray-600">
            <a href="">Blog</a>
          </li>
        </ul>
      </div>
      {/* Bouton de traduction */}
      <div className="flex sm:hidden">
        <button>fr</button>
        <button>en</button>
      </div>
    </div>
  );
};

export default Navbar;
