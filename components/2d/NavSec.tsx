import React, { useEffect, useState } from "react";

const NavSec = () => {
  const [navStatus, setNavStatus] = useState(false);
  const [activeNav, setActiveNav] = useState(false);

  useEffect(() => {
    addEventListener("scroll", () => {
      window.scrollY > 60 && innerWidth > 700
        ? setNavStatus(true)
        : setNavStatus(false);
    });
    return () =>
      removeEventListener("scroll", () => {
        window.scrollY > 60 ? setNavStatus(true) : setNavStatus(false);
      });
  }, []);

  return (
    <div
      className={`" fixed top-0 left-0 w-full  py-2 z-50 flex px-3 justify-between items-start md:items-center transition-colors duration-500 ease-in-out" ${
        !navStatus ? "bg-transparent" : "bg-black"
      }`}
    >
      <img src="./logo.png" alt="" className="w-12" />
      <div className="md:flex md:justify-end   md:items-center md:pt-1 md:gap-3 md:h-fit text-white ">
        <img
          onClick={() => setActiveNav(!activeNav)}
          src="/svgs/bars.svg"
          className="w-14 z-[50] md:hidden mb-5 rounded-full bg-blue-800 p-3 fixed top-1 right-5"
        />
        <div className="hidden md:flex  items-center md:justify-around md:items-center md:gap-3 md:h-fit  md:flex-row">
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
        <div
          className={`fixed top-0 right-0 gap-3 w-[300px] min-h-[100vh] flex flex-col bg-black justify-center items-center md:hidden transition-all duration-300 ease-in-out ${
            !activeNav && "right-[-290px]"
          }`}
        >
          <a
            onClick={() => setActiveNav(false)}
            className="nav-link"
            href="#about"
          >
            About
          </a>
          <a
            onClick={() => setActiveNav(false)}
            className="nav-link"
            href="#portfolio"
          >
            portfolio
          </a>
          <a
            onClick={() => setActiveNav(false)}
            className="nav-link"
            href="#services"
          >
            services
          </a>
          <a
            onClick={() => setActiveNav(false)}
            className="nav-link"
            href="#resume"
          >
            resume
          </a>
          <a
            onClick={() => setActiveNav(false)}
            className="nav-link"
            href="#skills"
          >
            skills
          </a>
          <a
            onClick={() => setActiveNav(false)}
            className="nav-link"
            href="#contact"
          >
            contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavSec;
