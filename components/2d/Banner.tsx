import React from "react";
import TypewriterComponent from "typewriter-effect";
import ParticlesDis from "./ParticlesDis";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-[100vh]">
        <ParticlesDis />
      </div>
      <div className="flex justify-center flex-col items-center w-full min-h-[100vh]">
        <h3 className="text-white text-2xl mb-2">Hi, there!</h3>
        <h2 className="text-white text-6xl">I'm Mj</h2>
        <div className="text-white mt-2 text-3xl">
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter
                .typeString("Frontend React Web Developer.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Backend Web Developer.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Full Stack MERN Web Developer.")
                .start();
            }}
            options={{
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
