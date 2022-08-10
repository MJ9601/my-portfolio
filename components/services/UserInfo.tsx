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
              <img src="./icons/site.svg" className="w-4" />
              <h3 className="text-sm">{degree.Univercity}</h3>
            </a>
            <p className="flex justify-start gap-1 items-center text-sm pl-[2px]">
              <img src="./icons/location.svg" alt="" className="w-3" />
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
  return <div className="container-desc mt-3">UserInfo</div>;
};

export const Skills = () => {
  const me = useAppSelector(selectMe);
  return <div>UserInfo</div>;
};
