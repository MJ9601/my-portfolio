import React from "react";
import { selectMe } from "../../app/features/displaySlice";
import { useAppSelector } from "../../app/store";

const AboutMe = () => {
  const me = useAppSelector(selectMe);
  return (
    <div className="section" id="about">
      <div className="section-head">
        <div className="section-bg">About Me</div>
        <div className="section-title">Know Me More</div>
      </div>
      <div className="section-content">
        <div className="px-3 w-full">
          <h3 className="text-start pb-2 font-semibold text-xl ">
            A Brief Bio
          </h3>
          <p className="text-base mb-4">{me?.Objective.description}</p>
          <a
            href="./downloads/file.pdf"
            target={"_blank"}
            className="submit px-4 ring-2 rounded-full py-1 ring-green-500 text-green-500 transition-all ease-linear"
          >
            Download CV
          </a>
        </div>
        <img
          src="./2d/programmer.svg"
          alt=""
          className="w-[90%] md:w-[50%] object-contain"
        />
      </div>
    </div>
  );
};

export default AboutMe;
