import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faCirclePause,
  faCircleInfo,
  faBriefcase,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Box = styled.div`
  color: white;
  z-index: 1000;
  justify-content: center;
  align-items: center;
  z-index: 10 !important;
`;
const MenuBtn = styled.div`
  width: 250px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.li`
  display: flex;
  visibility: hidden;
  position: absolute;
  left: 0;
  list-style: none;
  transform-origin: 100px;
  transition: 0.5s;
  transition-delay: calc(0.1s var (--i));
  transform: rotate(0deg) translateX(80px);
  z-index: 1;

  ${MenuBtn}.active & {
    visibility: visible;
    transform: rotate(calc(150deg / 3 * var(--i)));
  }

  @media (max-width: 767px) {
    ${MenuBtn}.active & {
      visibility: visible;
      transform: rotate(calc(-150deg / 3 * var(--i)));
    }
  }
`;

const Toggle = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000 !important;
  transition: transform 1.25s;

  ${MenuBtn}.active & {
    animation: none;
  }
`;

const ListItem = styled.div`
  ${MenuBtn}.active & {
    transform: rotate(calc(150deg / -3 * var(--i)));
  }

  @media (max-width: 767px) {
    ${MenuBtn}.active & {
      transform: rotate(calc(150deg / 3 * var(--i)));
    }
  }
`;

const Menu = () => {
  const [isActive, setActive] = useState("false");
  const [isShow, setShow] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    setShow(!isShow);
  };

  return (
    <Box>
      <MenuBtn className={isActive ? "" : "active"}>
        <Toggle className="animate-bounce">
          <div onClick={handleToggle} className="text-6xl">
            <FontAwesomeIcon
              className={isShow ? "visible" : "hidden"}
              icon={faCirclePlay}
            />
            <FontAwesomeIcon
              className={isShow ? "hidden" : "visible"}
              icon={faCirclePause}
            />
          </div>
        </Toggle>

        <Item className="text-4xl" style={{ "--i": 0 }}>
          <ListItem className="flex flex-col items-center">
            <span className="text-xs"> Work</span>
            <NavLink to="/work">
              <FontAwesomeIcon icon={faBriefcase} />
            </NavLink>
          </ListItem>
        </Item>
        <Item className="text-4xl" style={{ "--i": 1 }}>
          <ListItem className="flex flex-col items-center">
            <span className="text-xs"> Skills</span>
            <NavLink to="/skill">
              <FontAwesomeIcon icon={faLaptopCode} />
            </NavLink>
          </ListItem>
        </Item>
        <Item className="text-4xl" style={{ "--i": 2 }}>
          <ListItem className="flex flex-col items-center">
            <span className="text-xs"> Info</span>
            <NavLink to="/about">
              <FontAwesomeIcon icon={faCircleInfo} />
            </NavLink>
          </ListItem>
        </Item>
      </MenuBtn>
    </Box>
  );
};

export default Menu;
