import { NavLink } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const PowerBtn = () => {
  return (
    <header className="z-40 fixed top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:ml-14 md:left-0 md:top-16 md:-translate-x-0">
      <div className="text-white text-6xl ">
        <NavLink to="/">
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <FontAwesomeIcon icon={faPowerOff} />
          </motion.h2>
        </NavLink>
      </div>
    </header>
  );
};

export default PowerBtn;
