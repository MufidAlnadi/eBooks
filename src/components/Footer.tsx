import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-gray-800 py-4 absolute bottom-0 w-full">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-white">© 2023 All rights reserved.</div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-gray-300">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
