import React from "react";
import {
  selectAllProjects,
  selectCurrentProject,
  setCurrentProject,
} from "../../app/features/projectSlice";
import { useAppDispatch, useAppSelector } from "../../app/store";
import ProjectInfos from "../3d/ProjectInfos";

const PortfolioSec = () => {
  const dispatch = useAppDispatch();
  const curProject = useAppSelector(selectCurrentProject);
  const projects = useAppSelector(selectAllProjects);

  return (
    <div className="section">
      <div className="section-head">
        <div className="section-bg">Portfolio</div>
        <div className="section-title">My Work</div>
      </div>
      <div className="section-content items-start">
        <div className="flex scrollbar  md:items-center w-[90%] mx-auto md:mx-0 md:h-full  md:max-h-[50vh] md:scrollbar-desc  md:flex-col md:w-[23%] lg:w-[10%] overflow-x-auto py-[6px] ">
          {projects.map((project) => (
            <img
              onClick={() => dispatch(setCurrentProject(project))}
              src={project.img}
              alt=""
              className={`w-[112px] object-contain mx-1 p-[2px] md:my-2 lg:w-[90%] cursor-pointer rounded-sm ${
                curProject!._id == project._id && "ring-2"
              } ring-green-500`}
            />
          ))}
        </div>
        <div className=" md:w-[80%] flex flex-col lg:flex-row gap-2 lg:items-center h-fit">
          <div className=" h-full w-full lg:w-[50%] ">
            {curProject && <ProjectInfos project={curProject} />}
          </div>
          <div className="w-full lg:w-[50%]">
            {curProject && (
              <video
                src={curProject!.videoSrc}
                className="w-[90%] mx-auto rounded-sm"
                autoPlay
                muted
                loop
              ></video>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSec;
