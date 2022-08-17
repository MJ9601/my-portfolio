import { useRouter } from "next/router";
import React from "react";
import { Project } from "../../app/features/projectSlice";

const ProjectInfos = ({ project }: { project: Project }) => {
  const router = useRouter();
  return (
    <div className={`"py-2 px-4" `}>
      <h3 className="font-semibold text-2xl mb-1 text-orange-500">
        {project.name}
      </h3>
      <div className="flex flex-wrap gap-1">
        {project.tags.map((tag, index) => (
          <h4 className="text-blue-600 text-sm font-semibold" key={index}>
            #{tag}
          </h4>
        ))}
      </div>
      <div
        className={`"h-[200px] overflow-y-auto scrollbar-desc px-1 mt-2 py-2 text-white  text-xl bg-[rgba(0,0,0,.7)] rounded-lg px-2" ${
          router.pathname == "/2d" &&
          "h-fit bg-[rgba(0,0,0,0)] text-black  px-1"
        }`}
      >
        {project.description}
      </div>
      <h2 className="mt-4 font-bold text-lg">Technologies in Use</h2>
      <div className="my-3 flex flex-wrap justify-start gap-2">
        {project.teches.map((tech, index) => (
          <h4
            className="ring-1 ring-green-500 py-1 px-2 rounded-full text-base text-green-600"
            key={index}
          >
            {tech}
          </h4>
        ))}
      </div>
      <div className="flex justify-start gap-4 px-5 mt-5 pt-5">
        {project?.demoLink && (
          <a
            target="_blank"
            rel="noreferrer"
            className="button-link ring-gray-600 bg-gray-600 hover:text-gray-600 "
            href={project?.demoLink}
          >
            Demo Link
          </a>
        )}
        <a
          target="_blank"
          rel="noreferrer"
          className="button-link ring-blue-600 bg-blue-600 hover:text-blue-600 "
          href={project.repoLink}
        >
          Repository Link
        </a>
      </div>
    </div>
  );
};

export default ProjectInfos;
