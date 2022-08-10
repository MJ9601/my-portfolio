import React from "react";
import {
  PathLine,
  selectPath,
  selectShowComponent,
} from "../app/features/displaySlice";
import { selectCurrentProject } from "../app/features/projectSlice";
import { useAppSelector } from "../app/store";
import ProjectInfos from "./ProjectInfos";
import ProjectSlider from "./ProjectSlider";

const ProjectDisplay = () => {
  const path = useAppSelector(selectPath);
  const compStatus = useAppSelector(selectShowComponent);
  const curProject = useAppSelector(selectCurrentProject);
  console.log(compStatus);
  return (
    <div
      className={`${
        path == PathLine.tv && compStatus ? "opacity-1" : "opacity-0"
      } absolute transition-all delay-[2s] top-[6%] left-[9%] w-[83%] h-[89%] `}
    >
      <div className=" h-[88%] lg:h-[82%]">
        <div className=" h-full w-full md:w-[50%] xl:w-[35%]">
          {curProject && <ProjectInfos project={curProject} />}
        </div>
      </div>
      <div className="h-[12%] lg:h-[18%] flex justify-center flex-nowrap items-center w-full px-2">
        <ProjectSlider />
      </div>
    </div>
  );
};
export default ProjectDisplay;
