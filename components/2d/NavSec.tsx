import React, { useEffect, useState } from "react";

const NavSec = () => {
  const [navStatus, setNavStatus] = useState(false);

  useEffect(() => {
    addEventListener("scroll", () => {
      window.scrollY > 60 ? setNavStatus(true) : setNavStatus(false);
    });
    return () =>
      removeEventListener("scroll", () => {
        window.scrollY > 60 ? setNavStatus(true) : setNavStatus(false);
      });
  }, []);

  return (
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
  );
};

export default NavSec;
