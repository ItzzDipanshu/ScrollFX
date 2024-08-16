// Used React Icons

import { motion } from "framer-motion";
import { Expo, Power4 } from "gsap/all";
import React from "react";
import { RiMenu5Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="w-full fixed z-[999]">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-10 py-5 sm:py-10 flex items-center justify-between text-white">
        <motion.div
          initial={{ opacity: 0 }} // Initially the opacity is set as 0
          whileInView={{ opacity: 1 }} // Whenever the object comes into view its opacity will be 1
          transition={{ ease: Expo.easeInOut, duration: 1 }}
          viewport={{ once: true }} // This will make sure that it will animate only once
          className="logo"
        >
          <img className="w-20 sm:w-32" src="/scrollFX.png" alt="" />
        </motion.div>

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: Power4.easeInOut, duration: 1 }}
          className="sm:hidden"
        >
          <RiMenu5Line />
        </motion.span>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: Power4.easeInOut, duration: 1 }}
          className="links hidden sm:flex gap-10"
        >
          {["Home", "About", "Contact"].map((item, index) => (
            <a key={index} className="text-sm font-light">
              {item}
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
