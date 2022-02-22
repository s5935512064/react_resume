import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLine,
  faLinkedin,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full fixed bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 ">
      <div className="grid grid-cols-3 gap-2 md:grid-cols-1 mx-4 px-4">
        <div className="flex flex-col justify-center items-center text-white ">
          <p className="font-bold text-3xl">
            599
            <span className="text-sm ml-1">VIEWS</span>
          </p>
          <div className="w-1/4 bg-gray-200 h-2 m-1">
            <div className="bg-blue-600 h-2" style={{ width: "80%" }}></div>
          </div>
          <div className="flex mt-2 space-x-2 justify-center items-center text-center text-white text-xl">
            <FontAwesomeIcon icon={faThumbsUp} />
            <p className="text-sm ">479</p>
            <FontAwesomeIcon icon={faThumbsDown} />
            <p className="text-sm">20</p>
          </div>
        </div>
        <div className="flex flex-col text-white justify-center items-center text-center ">
          <div className="flex mb-2 space-x-4 text-3xl">
            <motion.div
              initial={{ transform: "scale(0)" }}
              animate={{ scale: [0, 1, 1.5, 1] }}
              transition={{ type: "spring", duration: 1, delay: 0 }}
            >
              <NavLink
                style={{ color: "inherit" }}
                target="_blank"
                to={{ pathname: "https://www.facebook.com/Nattawut.57/" }}
              >
                <FontAwesomeIcon icon={faFacebook} />
              </NavLink>
            </motion.div>

            <motion.div
              initial={{ transform: "scale(0)" }}
              animate={{ scale: [0, 1, 1.5, 1] }}
              transition={{ type: "spring", duration: 1, delay: 0.2 }}
            >
              <div className="group relative ">
                <span className="hidden group-hover:block absolute z-10 -top-full -left-6 bg-white text-black rounded px-2 py-1 text-sm whitespace-nowrap">
                  @toeiiz39
                </span>
                <FontAwesomeIcon icon={faLine} />
              </div>
            </motion.div>

            <motion.div
              initial={{ transform: "scale(0)" }}
              animate={{ scale: [0, 1, 1.5, 1] }}
              transition={{ type: "spring", duration: 1, delay: 0.4 }}
            >
              <div className="group relative ">
                <span className="hidden group-hover:block absolute z-10 -top-full -left-16 bg-white text-black rounded px-2 py-1 text-sm whitespace-nowrap">
                  ntw.toei2022@gmail.com
                </span>
                <FontAwesomeIcon icon={faGooglePlusG} />
              </div>
            </motion.div>

            <motion.div
              initial={{ transform: "scale(0)" }}
              animate={{ scale: [0, 1, 1.5, 1] }}
              transition={{ type: "spring", duration: 1, delay: 0.6 }}
            >
              <NavLink
                style={{ color: "inherit" }}
                target="_blank"
                to={{ pathname: "https://www.linkedin.com/in/ntwdeveloper/" }}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </NavLink>
            </motion.div>
          </div>
          <p className="text-md md:text-sm">Phone Number (+66)9 9865 9824</p>
          <p className="text-sm sm:text-xs">
            Copyright ©2022 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
