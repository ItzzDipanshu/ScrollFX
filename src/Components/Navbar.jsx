// Used React Icons
import React from "react";
import { RiMenu5Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="w-full fixed z-[999]">
       <div className="max-w-screen-2xl mx-auto px-5 sm:px-10 py-5 sm:py-10 flex items-center justify-between text-white">
      <div className="logo">
        <img className="w-20 sm:w-32" src="/scrollFX.png" alt="" />
      </div>

      <span className="sm:hidden">
        <RiMenu5Line />
      </span>
      <div className="links hidden sm:flex gap-10">
        {["Home", "About", "Contact"].map((item, index)=>(
            <a key={index} className="text-sm font-light">{item}</a>
        ))}
      </div>
    </div>
    </div>
   
  );
};

export default Navbar;
