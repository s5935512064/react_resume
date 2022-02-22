import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Box = styled(motion.li)`
  width: 25rem;
  height: auto;
  background-color: #ffffff;
  color: #000;
  padding: 1.5rem 2rem;
  margin-right: 2rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  border: 1px solid #fff;
  transition: all 0.2s ease;

  &:hover {
    background-color: #000000;
    color: #fff;
    border: 1px solid #fff;
  }
`;

const Subtitle = styled.div`
  border-bottom: 2px solid #000;
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  ${Box}:hover & {
    border-bottom: 2px solid #fff;
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

const Card = (props) => {
  const { id, title, subtitle, description1, description2, description3 } =
    props.data;

  return (
    <Box key={id} variants={Item}>
      <p className="font-bold text-2xl">{title}</p>
      <Subtitle className="font-normal text-sm ">
        <span className="mb-2">{subtitle}</span>
      </Subtitle>
      <p className="my-2 font-normal text-sm">{description1}</p>
      <p className="mb-2 font-normal text-sm">{description2}</p>
      <p className="mb-2 font-normal text-sm">{description3}</p>
    </Box>
  );
};

export default Card;
