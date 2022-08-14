import React from "react";
import { selectMe } from "../../app/features/displaySlice";
import { useAppSelector } from "../../app/store";

export const Objective = () => {
  const me = useAppSelector(selectMe);
  return (
    <p className="container-desc mt-3 text-md">{me?.Objective.description}</p>
  );
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
      <div className=" container-desc flex flex-col items-start justify-start my-3 pb-3 gap-9">
        {me?.Education.description.map((degree, index) => (
          <div key={index}>
            <h2 className="text-lg font-semibold">{degree.name}</h2>
            <h6 className="text-xs text-red-500 font-semibold ml-2">
              {degree.date}
            </h6>
            <a
              className="flex justify-start items-center gap-1 hover:text-green-600 transition-all duration-300 text-md font-semibold ml-2"
              href={degree.site}
            >
              <h3 className="text-sm">
                {degree.Univercity}, {degree.location}
              </h3>
            </a>

            <p className="ml-3 mt-1 text-sm mb-3">{degree.description}</p>
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
            <h2 className="text-lg font-semibold capitalize">{job.name}</h2>
            <h6 className="text-xs text-red-500 font-semibold ml-2">
              {job.date}
            </h6>
            {job.company && (
              <>
                <a
                  className="flex justify-start items-center gap-1 hover:text-green-600 transition-all duration-300"
                  href={job.site}
                >
                  <h3 className="text-sm">{job.company}</h3>
                </a>
                {job.location && (
                  <p className="flex justify-start gap-1 items-center text-sm pl-[2px]">
                    {job.location}
                  </p>
                )}
              </>
            )}
            <p className="ml-2 mt-1 mb-3 text-sm">{job.description}</p>
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
            <div className="absolute -top-0 left-4 rounded-md hidden group-hover:block bg-green-500 text-white px-1 w-[150%] lg:w-[110%] capitalize text-xs lg:text-base transition-all ease-linear duration-300 z-20">
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

export const Services = () => {
  const me = useAppSelector(selectMe);
  return (
    <div className="h-[95%] overflow-auto gap-3 scrollbar-desc py-3">
      {me?.Services.map((service, index) => (
        <div
          className=" gap-2  rounded-md flex items-start h-[150px] px-3 py-2 w-[400px]  "
          key={index}
        >
          <img src={service.image} alt="" className="w-20 object-cover" />
          <div className="space-y-1">
            <h3 className="text-xl font-semibold">{service.name}</h3>
            <p className="text-sm">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
