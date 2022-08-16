import Link from "next/link";
import React from "react";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="wrapper">
        <div className="loader-ring"></div>
        <div className="loader-ring"></div>
        <div className="loader-ring"></div>
      </div>
      <p className="loader-text animate-pulse">Loading ...</p>
      <div className="absolute bottom-3 right-5 ">
        <Link
          href="/2d"
          className="px-4 py-1 text-2xl text-white font-extrabold animate-pulse ring-1 rounded-lg ring-white hover:text-cyan-400 hover:ring-cyan-400"
        >
          2D
        </Link>
      </div>
    </div>
  );
};

export default Loader;
