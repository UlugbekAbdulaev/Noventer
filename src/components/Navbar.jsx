import React from 'react'
import logo from "../images/logo/logo.png"
function Navbar() {
    return (
        <div className='bg-[#0E041D]'>
            <header class="text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                   <div className="logo">
                    <img src={logo} alt="logo" />
                   </div>
                    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-white">
                        <a class="mr-5 hover:text-gray-500">Bosh sahifa</a>
                        <a class="mr-5 hover:text-gray-500">Portfolio</a>
                        <a class="mr-5 hover:text-gray-500">Xizmatlar</a>
                        <a class="mr-5 hover:text-gray-500">Aloqa</a>
                    </nav>
                    <button class="glass text-white inline-flex items-center border-t border-b py-1 px-3 hover:bg-gray-200 rounded text-base mt-4 ">Loyha bormi?
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Navbar