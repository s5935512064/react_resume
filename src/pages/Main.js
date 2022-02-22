import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ParticleBackground from "../components/ParticleBackground";
import PowerBtn from "../components/PowerBtn";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Menu from "../components/Menu";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  position: relative;
`;

const Container = styled.div`
  padding: 2rem;
`;

const Center = styled.div`
  width: 100%;
  padding: 50px;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
`;

const Main = () => {
  const [refresh, setRefresh] = useState(0);
  return (
    <MainContainer>
      <Container>
        <PowerBtn />
        <Center className="z-40">
          <p className="text-center text-6xl md:text-5xl font-extrabold text-white">
            NATTHAWUT THIPPASOET
          </p>
          <p className="text-center mt-2 text-4xl md:text-2xl text-gray-400">
            FRONT-END DEVELOPER & UX/UI DESIGNER
          </p>
          <div className="flex items-center space-x-8 mt-6">
            <button
              onClick={() => setRefresh((key) => key + 1)}
              type="button"
              className=" text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-bold rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center sm:text-md"
            >
              HIRE ME
              <FontAwesomeIcon className="ml-2 -mr-1 w-5 h-5" icon={faCheck} />
            </button>
            <NavLink to="/about">
              <button
                type="button"
                className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-bold rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center sm:text-md"
              >
                ABOUT ME
              </button>
            </NavLink>
          </div>
        </Center>
        <ParticleBackground />
        <div className="z-10 fixed right-0 md:-mr-10 md:my-20 md:top-0 md:right-0  bottom-14 text-white">
          <Menu />
        </div>

        <Footer key={refresh} />
      </Container>
    </MainContainer>
  );
};

export default Main;
