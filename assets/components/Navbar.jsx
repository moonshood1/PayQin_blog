import React from "react";

const Navbar = () => {
  return (
    <div className="h-16 px-4 sm:h-20 bg-gray-100 w-full flex flex-wrap content-center sm:px-8">
      {/* Bouton du menu */}
      <div className="block sm:hidden">
        <button>menu</button>
      </div>
      {/* logo */}
      <div className="pl-2 sm:pl-6">
        <img
          src="https://www.payqin.com/wp-content/uploads/2020/09/n3-1.png"
          alt="PayQin_logo"
          className="h-8"
        />
      </div>
      {/* Liens de navigation */}
      <div className="ml-auto">
        <ul className="hidden sm:flex">
          <li className="px-6 text-xl text-gray-600 cursor-pointer">
            Products
          </li>
          <li className="px-6 text-xl text-gray-600 cursor-pointer">
            Developpers
          </li>
          <li className="px-6 text-xl text-gray-600 cursor-pointer">Pricing</li>
          <li className="px-6 text-xl text-gray-600 cursor-pointer">Blog</li>
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
