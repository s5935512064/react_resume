import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Box = styled(motion.li)`
  width: 25rem;
  height: auto;
  background-color: #ffffff;
  color: #000;
  padding: 1rem 2rem;
  margin-right: 2rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid #fff;
  transition: all 0.2s ease;

  &:hover {
    background-color: #000000;
    color: #fff;
    border: 1px solid #fff;
  }
`;

const Subtitle = styled.div`
  padding-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const Link = styled(NavLink)`
  background-color: #000;
  color: #fff;

  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;

  ${Box}:hover & {
    background-color: #fff;
    color: #000;
  }
`;

const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  ${Box}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`;
const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);
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

const WorkCard = (props) => {
  const { id, title, img, img2, description, tags, demo, github, youtube } =
    props.data;

  return (
    <Box key={id} variants={Item}>
      <p className="font-bold text-2xl">{title}</p>
      <Subtitle className="font-normal text-sm ">
        <span className="mb-2">{description}</span>

        <div className="grid grid-flow-col auto-cols-fr gap-4">
          <img src={img} alt="" />
          <img src={img2} alt="" />
        </div>
      </Subtitle>

      <Tags>
        {tags?.map((data, id) => {
          return <Tag key={id}>#{data}</Tag>;
        })}
      </Tags>
      <Footer className="mt-2 content-end">
        <Link to={{ pathname: `${demo}` }} target="_blank">
          Visit
        </Link>
        <div className="grid grid-cols-2 gap-4">
          <NavLink to={{ pathname: `${github}` }} target="_blank">
            <div className="flex justify-center items-center">
              <FontAwesomeIcon className="text-5xl" icon={faGithub} />
            </div>
          </NavLink>
          <NavLink to={{ pathname: `${youtube}` }} target="_blank">
            <div className="flex justify-center items-center">
              <FontAwesomeIcon className="text-5xl" icon={faYoutube} />
            </div>
          </NavLink>
        </div>
      </Footer>
    </Box>
  );
};

export default WorkCard;
