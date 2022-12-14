import React from "react";
import {
  activateOrthCam,
  deactivateOrthCam,
  deactivateShowComp,
  PathLine,
  selectOrthCam,
  setMeInfo,
  setPath,
  setScreen1Display,
  setShowCompTrueAsync,
} from "../../app/features/displaySlice";
import { setAllProject } from "../../app/features/projectSlice";
import { useAppDispatch, useAppSelector } from "../../app/store";
import db from "../../data/projects.db";
import me from "../../data/about";

const Controlers = () => {
  const dispatch = useAppDispatch();
  const orthCamStatus = useAppSelector(selectOrthCam);

  return (
    <div className="absolute top-0 left-0 w-[25%] h-[25%] ">
      <div className="absolute rounded-full w-[100px] h-[100px] bg-white -left-[50px] top-[-50px] animate-ping cursor-pointer "></div>

      <div className="group absolute w-[100px] h-[100px] rounded-full  top-[-50px] -left-[50px] hover:h-[400px] hover:w-[400px] hover:top-[-200px] hover:-left-[200px] bg-[#ffffff] transition-all ease-linear grid place-items-center z-20">
        {/* <img
          src="./logo.png"
          className="w-12 group-hover:z-50 object-cover absolute top-10 left-10"
        /> */}
        {!orthCamStatus ? (
          <>
            <h3
              className="controlsButton"
              onClick={() => {
                dispatch(setPath(PathLine.monitors));
                dispatch(activateOrthCam());
                dispatch(setMeInfo(me));
                dispatch(setScreen1Display("./images/bg.jpg"));
                dispatch(setShowCompTrueAsync(true));
              }}
            >
              About
            </h3>
            <h3
              className="controlsButton rotate-[45deg]"
              onClick={() => {
                dispatch(setPath(PathLine.tv));
                dispatch(activateOrthCam());
                dispatch(setAllProject(db));
                dispatch(setShowCompTrueAsync(true));
              }}
            >
              Projects
            </h3>
            <h3
              className="controlsButton rotate-[80deg]"
              onClick={() => {
                dispatch(setPath(PathLine.laptop));
                dispatch(activateOrthCam());
                dispatch(setShowCompTrueAsync(true));
              }}
            >
              Contact
            </h3>
          </>
        ) : (
          <>
            <h3
              className="controlsButton rotate-[45deg]"
              onClick={() => {
                dispatch(deactivateOrthCam());
                dispatch(deactivateShowComp());
              }}
            >
              {" "}
              Back
            </h3>
          </>
        )}
      </div>
    </div>
  );
};

export default Controlers;
