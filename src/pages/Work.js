import React, { useEffect, useRef } from "react";
import ParticleBackground from "../components/ParticleBackground";

import PowerBtn from "../components/PowerBtn";
import Footer from "../components/Footer";
import styled from "styled-components";
import { motion } from "framer-motion";
import { work } from "../data/Work";
import WorkCard from "../components/WorkCard";
import Menu from "../components/Menu";

const Box = styled.div`
  height: 250vh;
  position: relative;
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    height: 350vh;
  }
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 23%;
  margin-left: 5rem;

  display: flex;
  color: white;
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

const Work = () => {
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
      <Box className="overflow-visible">
        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {work.map((x) => (
            <WorkCard key={x.id} data={x} />
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

export default Work;
