import React, { useEffect, useRef } from "react";
import ParticleBackground from "../components/ParticleBackground";

import PowerBtn from "../components/PowerBtn";
import Footer from "../components/Footer";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPalette,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Menu from "../components/Menu";

const Card = styled(motion.li)`
  width: 25rem;
  height: auto;
  background-color: #ffffff;
  color: #000;
  padding: 1rem 2rem;
  margin-right: 4rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  border: 1px solid #fff;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0);
    color: #fff;
    border: 1px solid #fff;
  }
`;

const Box = styled.div`
  height: 150vh;
  position: relative;
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    height: 250vh;
  }
`;
const Main = styled(motion.ul)`
  position: fixed;
  top: 23%;
  margin-left: 5rem;

  display: flex;
  color: white;
`;

const Subtitle = styled.div`
  border-bottom: 2px solid;
  padding-top: 0.3rem;
  display: flex;
  flex-wrap: wrap;
`;

const Description = styled.div`
  border-bottom: 2px solid;
  padding-top: 0.3rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const Description2 = styled.div`
  padding-top: 0.3rem;

  display: flex;
  flex-wrap: wrap;
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

// Framer motion configuration
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const Skills = () => {
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
    <Box>
      <PowerBtn />
      <Main ref={ref} variants={container} initial="hidden" animate="show">
        <Card variants={Item}>
          <p className="font-bold text-2xl">
            Coding Skills <FontAwesomeIcon icon={faCode} />
          </p>
          <Subtitle className="font-normal text-sm">
            <span className="mb-2 ">
              I value business or brand for which I'm creating, thus I enjoy
              bringing new ideas to life.
            </span>
          </Subtitle>

          <Description>
            <p className="font-bold text-md">Basic</p>

            <div className="grid grid-cols-4 gap-4 mb-2">
              <div className="flex justify-center">
                <img
                  style={{ width: "100%" }}
                  src="https://sv1.picz.in.th/images/2022/02/19/r1TKNI.png"
                  alt="vue.js"
                />
              </div>
              <div className="justify-self-center">
                <img
                  style={{ width: "100%" }}
                  src="https://sv1.picz.in.th/images/2022/02/19/r1Ttju.png"
                  alt="react.js"
                />
              </div>
              <div className="justify-self-center">
                <img
                  style={{ width: "100%" }}
                  src="https://sv1.picz.in.th/images/2022/02/19/r1Tks8.png"
                  alt="c lang"
                />
              </div>
              <div className="justify-self-center">
                <img
                  style={{ width: "100%" }}
                  src="https://sv1.picz.in.th/images/2022/02/19/r1Tf0q.png"
                  alt="angular"
                />
              </div>
              <div className="justify-self-center">
                <img
                  style={{ width: "100%" }}
                  src="https://sv1.picz.in.th/images/2022/02/19/r1TTT0.png"
                  alt="html"
                />
              </div>
              <div className="justify-self-center">
                <img
                  style={{ width: "100%" }}
                  src="https://sv1.picz.in.th/images/2022/02/19/r1T3yR.png"
                  alt="css"
                />
              </div>
              <div className="justify-self-center">
                <img
                  style={{ width: "100%" }}
                  src="https://sv1.picz.in.th/images/2022/02/19/r1Thcz.png"
                  alt="bt"
                />
              </div>
              <div className="justify-self-center">
                <img
                  style={{ width: "100%" }}
                  src="https://sv1.picz.in.th/images/2022/02/19/r1TwvZ.png"
                  alt="quasar"
                />
              </div>
            </div>
          </Description>
          <Description2>
            <p className="font-bold text-md">Tools</p>
            <div className="grid grid-cols-4 gap-4 ">
              <div className="flex justify-center">
                <img
                  style={{ width: "100%" }}
                  src="https://sv1.picz.in.th/images/2022/02/19/r1TbBQ.png"
                  alt="firebase"
                />
              </div>
              <div className="flex justify-center">
                <img
                  style={{ width: "100%" }}
                  src="https://sv1.picz.in.th/images/2022/02/19/r1TEvV.png"
                  alt="vs"
                />
              </div>
              <div className="flex justify-center items-center">
                <FontAwesomeIcon className="text-6xl" icon={faGithub} />
              </div>
            </div>
          </Description2>
        </Card>

        <Card variants={Item}>
          <p className="font-bold text-2xl">
            Design Skills <FontAwesomeIcon icon={faPalette} />
          </p>
          <Subtitle className="font-normal text-sm">
            <span className="mb-2 ">
              I love to create design which speaks, Keep it clean, minimal and
              simple.
            </span>
          </Subtitle>

          <Description>
            <p className="font-bold text-md">Basic</p>

            <div className="grid grid-cols-4 gap-4 mb-2">
              <div className="flex justify-center">
                <img
                  style={{ width: "100%" }}
                  src="https://sv1.picz.in.th/images/2022/02/19/r1K9iP.png"
                  alt="figma"
                />
              </div>
              <div className="justify-self-center">
                <img
                  style={{ width: "100%" }}
                  src="https://sv1.picz.in.th/images/2022/02/19/r1K3SI.png"
                  alt="xd"
                />
              </div>
            </div>
          </Description>
          <Description2>
            <p className="font-bold text-md">Intermediate</p>
            <div className="grid grid-cols-4 gap-4 ">
              <div className="flex justify-center">
                <img
                  style={{ width: "100%" }}
                  src="https://sv1.picz.in.th/images/2022/02/19/r1KQYQ.png"
                  alt="ps"
                />
              </div>
              <div className="flex justify-center">
                <img
                  style={{ width: "100%" }}
                  src="https://sv1.picz.in.th/images/2022/02/19/r1KURS.png"
                  alt="ai"
                />
              </div>
            </div>
          </Description2>
        </Card>

        <Card variants={Item}>
          <p className="font-bold text-2xl">
            Personal Skills <FontAwesomeIcon icon={faUserCheck} />
          </p>
          <Subtitle className="font-normal text-sm"></Subtitle>

          <Description2>
            <p className="font-bold text-md">COMMUNICATION</p>
            <p>Having strong coordination and good communicator.</p>
            <p className="font-bold text-md">COLLABORATION</p>
            <p>
              Having level of leadership skill and interpersonal skills to work
              effectively with others.
            </p>
            <p className="font-bold text-md">CRITICAL THINKING</p>
            <p>
              Having strong managment, problem analysis and problem solving
              skills.
            </p>
            <p className="font-bold text-md">CREATIVITY</p>
            <p>
              Trying new approaches to get things done, innovation, and
              invention.
            </p>
          </Description2>
        </Card>
      </Main>
      <div className="z-40 fixed right-0 md:-mr-10 md:my-20 md:top-0 md:right-0  bottom-14 text-white">
        <Menu />
      </div>
      <Footer />
      <ParticleBackground />
    </Box>
  );
};

export default Skills;
