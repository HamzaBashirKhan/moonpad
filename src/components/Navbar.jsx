//

import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white sticky z-20">
      <h1 className="w-full text-3xl font-bold font-lora">MOONPAD</h1>
      <ul className="hidden md:flex">
        <li className="p-4">HOME</li>
        <li className="p-4  ">MINT</li>
        <li className="p-4 ">ROADMAP</li>
        <li className="p-4 ">TEAM</li>
        <li className="p-4">LAUNCHPAD</li>
        <li className="p-4">FAQ</li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#161631] ease-in-out duration-500'
            : 'ease-in-out duration-500 fixed left-[-100%]'
        }
      >
        <h1 className="w-full text-3xl font-bold m-4">MOONPAD</h1>
        <li className="p-4 border-b border-gray-600">HOME</li>
        <li className="p-4 border-b border-gray-600">MINT</li>
        <li className="p-4 border-b border-gray-600">ROADMAP</li>
        <li className="p-4 border-b border-gray-600">TEAM</li>
        <li className="p-4 border-b border-gray-600">LAUNCHPAD</li>
        <li className="p-4">FAQ</li>
      </ul>

      <button
        type="button "
        className=" hover:bg-gray-100 hover:text-red-900 text-white font-semibold md:px-10 border border-gray-400 rounded shadow small ml-10 sm:w-[35%] py-3  "
      >
        CREATE WALLET
      </button>
    </div>
  )
}

export default Navbar
