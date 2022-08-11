import React from "react";
import { selectMe } from "../../app/features/displaySlice";
import { useAppSelector } from "../../app/store";

export const Objective = () => {
  const me = useAppSelector(selectMe);
  return <p className="container-desc mt-3">{me?.Objective.description}</p>;
};

export const Education = () => {
  const me = useAppSelector(selectMe);
  return (
    <div className="h-[95%]">
      <a
        href="https://scholar.google.com/citations?user=nJ1ZzmUAAAAJ&hl=en&oi=ao"
        target={"_blank"}
        className="text-sm hover:text-green-600 transition-all duration-300"
      >
        Google Scholar Profile
      </a>
      <div className=" container-desc flex flex-col items-start justify-between my-3 pb-3 gap-7">
        {me?.Education.description.map((degree, index) => (
          <div key={index}>
            <h2 className="text-lg font-semibold">{degree.name}</h2>
            <h6 className="text-xs text-gray-800">{degree.date}</h6>
            <a
              className="flex justify-start items-center gap-1 hover:text-green-600 transition-all duration-300"
              href={degree.site}
            >
              <img src="./svgs/site.svg" className="w-4" />
              <h3 className="text-sm">{degree.Univercity}</h3>
            </a>
            <p className="flex justify-start gap-1 items-center text-sm pl-[2px]">
              <img src="./svgs/location.svg" alt="" className="w-3" />
              {degree.location}
            </p>
            <p className="ml-3 mt-1">{degree.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Experience = () => {
  const me = useAppSelector(selectMe);
  return (
    <div className="h-[95%]">
      <div className=" container-desc flex flex-col items-start justify-between my-3 pb-3 gap-7">
        {me?.Experience.description.map((job, index) => (
          <div key={index}>
            <h2 className="text-lg font-semibold">{job.name}</h2>
            <h6 className="text-xs text-gray-800">{job.date}</h6>
            {job.company && (
              <>
                <a
                  className="flex justify-start items-center gap-1 hover:text-green-600 transition-all duration-300"
                  href={job.site}
                >
                  <img src={job.image} className="w-4" />
                  <h3 className="text-sm">{job.company}</h3>
                </a>
                {job.location && (
                  <p className="flex justify-start gap-1 items-center text-sm pl-[2px]">
                    <img src="./svgs/location.svg" alt="" className="w-3" />
                    {job.location}
                  </p>
                )}
              </>
            )}
            <p className="ml-1 mt-1">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Skills = () => {
  const me = useAppSelector(selectMe);
  return (
    <div className="h-[95%]">
      <div className=" container-desc flex flex-wrap items-start justify-start my-3 pb-3 gap-3">
        {me?.Skills.map((skill, index) => (
          <div className="relative group">
            <img src={skill.Icon} alt="" className="w-12 lg:w-20" />
            <div className="absolute -top-0 left-4 rounded-md hidden group-hover:block bg-black text-white px-1 w-[150%] lg:w-[110%] capitalize text-xs lg:text-base transition-all ease-linear duration-300 z-20">
              <p>{skill.name}</p>
              <div className="w-full  h-2 ring-1 ring-gray-500 my-1 rounded-full">
                <div
                  className={`h-2 rounded-full bg-slate-500  text-xs flex justify-center items-center`}
                  style={{ width: `${skill.value}%` }}
                >
                  {skill.value}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
