import React from "react";
import Particles from "react-tsparticles";
import particleConfig from "../config/particle-config";
import "../App.css";

const ParticleBackground = () => {
  return <Particles id="tsparticles" params={particleConfig}></Particles>;
};

export default ParticleBackground;
