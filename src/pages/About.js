import React, { useEffect, useRef } from "react";
import ParticleBackground from "../components/ParticleBackground";
import { NavLink } from "react-router-dom";
import PowerBtn from "../components/PowerBtn";
import Footer from "../components/Footer";
import Card from "../components/Card";
import ImgCard from "../components/ImgCard";
import styled from "styled-components";
import { motion } from "framer-motion";
import profile from "../assets/Profile.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { info, info2 } from "../data/About";
import Menu from "../components/Menu";

const Box = styled.div`
  height: 150vh;
  position: relative;
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
  }
`;
const Main = styled(motion.ul)`
  position: fixed;
  top: 23%;
  left: calc(15rem + 15vw);

  display: flex;
  color: white;
  @media (max-width: 767px) {
    left: calc(5rem + 15vw);
  }
`;

const Profile = styled.div`
  position: fixed;
  overflow: hidden;
  width: 100vh;
  transform: scale(1.8);
  left: calc(-35rem + 20vw);
  top: calc(0rem + 15vh);

  z-index: -1 !important;

  @media (max-width: 767px) {
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const About = () => {
  const ref = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <div>
      <PowerBtn />
      <Profile>
        <img src={profile} alt="profile" />
      </Profile>
      <div
        className="z-40 fixed flex right-0 top-14 mr-16 lg:top-12 lg:flex-col space-x-5 lg:space-x-0 lg:space-y-2 
        md:-left-0 md:flex-row md:-rotate-90  md:space-x-5 md:space-y-0  
        md:top-1/3 md:-translate-x-1/3 md:absolute"
      >
        <NavLink
          target="_blank"
          to={{
            pathname:
              "https://drive.google.com/file/d/1NOEmyomzD-9Rxntl_dqKtbc4MOa2AAEr/view?usp=sharing",
          }}
        >
          <button
            type="button"
            className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-bold rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center justify-center"
          >
            RESUME
            <FontAwesomeIcon className="ml-2 -mr-1 w-5 h-5" icon={faDownload} />
          </button>
        </NavLink>
        <NavLink
          target="_blank"
          to={{
            pathname:
              "https://drive.google.com/file/d/1r7W-no0pm2qiEftsDpQp_Rp8vTpxxpdp/view?usp=sharing",
          }}
        >
          <button
            type="button"
            className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-bold rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center "
          >
            TRANSCRIPT
            <FontAwesomeIcon className="ml-2 -mr-1 w-5 h-5" icon={faDownload} />
          </button>
        </NavLink>
      </div>
      <Box>
        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {info.map((d) => (
            <Card key={d.id} data={d} />
          ))}
          {info2.map((d) => (
            <ImgCard key={d.id} data={d} />
          ))}
        </Main>
      </Box>
      <div className="z-40 fixed right-0 md:-mr-10 md:my-20 md:top-0 md:right-0  bottom-14 text-white">
        <Menu />
      </div>
      <Footer />
      <ParticleBackground />
    </div>
  );
};

export default About;
