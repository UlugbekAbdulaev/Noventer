import React, { useState } from "react";
import logo from "../images/logo/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#0E041D] sticky top-0 z-100">
      <header className="text-gray-600 body-font mx-auto w-[95%]">
        <div className=" flex flex-wrap p-5 items-center justify-between">
     
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-32" />
          </div>

       
          <nav className="hidden md:flex md:items-center text-white">
            <a className="mr-5 hover:text-gray-500 cursor-pointer">Bosh sahifa</a>
            <a className="mr-5 hover:text-gray-500 cursor-pointer">Portfolio</a>
            <a className="mr-5 hover:text-gray-500 cursor-pointer">Xizmatlar</a>
            <a className="mr-5 hover:text-gray-500 cursor-pointer">Aloqa</a>
          </nav>


          <button className="hidden md:inline-flex glass text-white border-t border-b py-1 px-3 hover:bg-gray-200 rounded text-base">
            Loyha bormi?
          </button>

     
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        
        {isOpen && (
          <div className="md:hidden flex flex-col items-center bg-[#0E041D] py-5 text-white">
            <a className="py-2 hover:text-gray-500 cursor-pointer">Bosh sahifa</a>
            <a className="py-2 hover:text-gray-500 cursor-pointer">Portfolio</a>
            <a className="py-2 hover:text-gray-500 cursor-pointer">Xizmatlar</a>
            <a className="py-2 hover:text-gray-500 cursor-pointer">Aloqa</a>
            <button className="glass text-white border-t border-b py-1 px-3 hover:bg-gray-200 rounded text-base mt-3">
              Loyha bormi?
            </button>
          </div>
        )}
      </header>
    </div>
  );
}

export default Navbar;
