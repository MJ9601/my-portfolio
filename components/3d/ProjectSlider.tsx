import React from "react";
import {
  selectAllProjects,
  selectCurrentProject,
  setCurrentProject,
} from "../../app/features/projectSlice";
import { useAppDispatch, useAppSelector } from "../../app/store";

const ProjectSlider = () => {
  const projects = useAppSelector(selectAllProjects);
  const dispatch = useAppDispatch();
  const curProject = useAppSelector(selectCurrentProject);
  return (
    <div className="w-[90%] mx-auto gap-2 flex flex-nowrap overflow-x-scroll scrollbar py-2 ">
      {projects.map((project) => (
        <img
          src={project.img}
          key={project._id}
          className={`"cursor-pointer h-[50px] lg:h-[80px] object-contain rounded-sm  p-[1px] mx-[2px] " ${
            curProject &&
            curProject!._id == project._id &&
            "ring-2 ring-red-500"
          }
               `}
          onClick={() => dispatch(setCurrentProject(project))}
        />
      ))}
    </div>
  );
};

export default ProjectSlider;
