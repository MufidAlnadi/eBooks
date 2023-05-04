import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-gray-800 py-4 px-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-white font-bold text-lg">My Website</h1>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="Home"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="About"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="Contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
