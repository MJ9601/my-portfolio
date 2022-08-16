import Link from "next/link";
import React, { useEffect, useState } from "react";
import { setMeInfo } from "../app/features/displaySlice";
import { setAllProject, setCurrentProject } from "../app/features/projectSlice";
import { useAppDispatch } from "../app/store";
import AboutMe from "../components/2d/AboutMe";
import Banner from "../components/2d/Banner";
import Contact2D from "../components/2d/Contact2D";
import ExpAndEducation from "../components/2d/ExpAndEducation";
import PortfolioSec from "../components/2d/PortfolioSec";
import Services from "../components/2d/Services";
import SkillSets from "../components/2d/SkillSets";
import me from "../data/about";
import dbProjects from "../data/projects.db";

const Portfolio2D = () => {
  const dispatch = useAppDispatch();

  const [navStatus, setNavStatus] = useState(false);

  useEffect(() => {
    dispatch(setMeInfo(me));
    dispatch(setAllProject(dbProjects));
    dispatch(setCurrentProject(dbProjects[0]));

    addEventListener("scroll", () => {
      window.scrollY > 60 ? setNavStatus(true) : setNavStatus(false);
    });
    return () =>
      removeEventListener("scroll", () => {
        window.scrollY > 60 ? setNavStatus(true) : setNavStatus(false);
      });
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
      <div
        className={`" fixed top-0 left-0 w-full  py-2 z-50 flex px-3 justify-between items-center transition-colors duration-500 ease-in-out" ${
          !navStatus ? "bg-transparent" : "bg-black"
        }`}
      >
        <img src="./logo.png" alt="" className="w-12" />
        <div className="md:flex justify-end items-center pt-1 gap-3 h-fit text-white hidden">
          <a className="nav-link" href="#about">
            About
          </a>
          <a className="nav-link" href="#portfolio">
            portfolio
          </a>
          <a className="nav-link" href="#services">
            services
          </a>
          <a className="nav-link" href="#resume">
            resume
          </a>
          <a className="nav-link" href="#skills">
            skills
          </a>
          <a className="nav-link" href="#contact">
            contact
          </a>
        </div>
      </div>
      <Banner />
      <AboutMe />
      <PortfolioSec />
      <Services />
      <ExpAndEducation />
      <SkillSets />
      <Contact2D />
      <div className="bg-black py-10">
        <h3 className="text-lg text-gray-500 text-center font-semibold">
          &copy; Copyright 2022 | Created by Mj
        </h3>
        <h5 className="text-md text-gray-500 text-center ">
          All Rights Reserved
        </h5>
      </div>
      <div className="fixed bottom-3 right-5 ">
        <Link href="/">
          <p className="px-4 py-1 text-2xl text-gray-400 font-extrabold animate-pulse ring-1 rounded-lg ring-gray-500 hover:text-cyan-400 hover:ring-cyan-400 cursor-pointer">
            3D
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio2D;
