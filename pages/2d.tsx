import React, { useEffect } from "react";
import { setMeInfo } from "../app/features/displaySlice";
import { setAllProject, setCurrentProject } from "../app/features/projectSlice";
import { useAppDispatch } from "../app/store";
import AboutMe from "../components/2d/AboutMe";
import Banner from "../components/2d/Banner";
import ExpAndEducation from "../components/2d/ExpAndEducation";
import PortfolioSec from "../components/2d/PortfolioSec";
import Services from "../components/2d/Services";
import SkillSets from "../components/2d/SkillSets";
import me from "../data/about";
import dbProjects from "../data/projects.db";

const Portfolio2D = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setMeInfo(me));
    dispatch(setAllProject(dbProjects));
    dispatch(setCurrentProject(dbProjects[0]));
  }, []);
  return (
    <div className="relative ">
      <div className="absolute top-0 left-0 w-full min-h-[100vh] bg-[#eee] -z-10">
        <a
          href="https://unsplash.com/es/@altumcode?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          className="-z-10"
        >
          <img
            src="./2d/banner.jpg"
            alt=""
            className="w-full h-[100vh] object-fill -z-10"
          />
        </a>
      </div>
      <Banner />
      <AboutMe />
      <PortfolioSec />
      <Services />
      <ExpAndEducation />
      <SkillSets />
    </div>
  );
};

export default Portfolio2D;
