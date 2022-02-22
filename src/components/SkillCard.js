import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Box = styled(motion.li)`
  width: 25rem;
  height: auto;
  background-color: #ffffff;
  color: #000;
  padding: 1.5rem 2rem;
  margin-right: 4rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;

  border: 1px solid #fff;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0);
    color: #fff;
    border: 1px solid #fff;
  }
`;

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

const SkillCard = () => {
  return <Box variants={Item}></Box>;
};

export default SkillCard;
