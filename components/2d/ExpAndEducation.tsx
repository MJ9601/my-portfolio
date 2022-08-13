import React from "react";
import { selectMe } from "../../app/features/displaySlice";
import { useAppSelector } from "../../app/store";

const ExpAndEducation = () => {
  const me = useAppSelector(selectMe);
  return (
    <div className="section">
      <div className="section-head">
        <div className="section-bg">Resume</div>
        <div className="section-title">Education & Experiance</div>
      </div>
      <div className="flex flex-col md:flex-row container xl:w-[80%] mx-auto gap-3">
        <div className="space-y-3 w-[90%] mx-auto mb-4">
          <h3 className="text-2xl font-bold">Education</h3>
          <div className="space-y-4 mb-3">
            {me?.Education.description.map((desc, index) => (
              <div className=" py-2 px-3 ring-green-500 space-y-2 mb-5  border-b-2 border-b-green-500 ">
                <h3 className="text-xs text-red-500 font-semibold">
                  {desc.date}
                </h3>
                <div className="">
                  <h2 className="text-lg font-bold">{desc.name}</h2>
                  <a href={desc.site} className="text-xs font-semibold">
                    {desc.Univercity}, {desc.location}
                  </a>
                </div>
                <p className="text-base ">{desc.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3 w-[90%] mx-auto">
          <h3 className="text-2xl font-bold mt-6">Experience</h3>
          <div className="">
            {me?.Experience.description.map((desc, index) => (
              <div className=" py-2 px-3 ring-green-500 space-y-2 mb-5  border-b-2 border-b-green-500 ">
                <h3 className="text-xs text-red-500 font-semibold">
                  {desc.date}
                </h3>
                <div className="">
                  <h2 className="text-lg font-bold">{desc.name}</h2>
                  {desc.company && (
                    <a href={desc.site} className="text-xs font-semibold">
                      {desc.company}, {desc.location}
                    </a>
                  )}
                </div>
                <p className="text-base ">{desc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpAndEducation;
