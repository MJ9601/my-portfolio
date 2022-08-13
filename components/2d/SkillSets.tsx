import React from "react";
import { selectMe } from "../../app/features/displaySlice";
import { useAppSelector } from "../../app/store";

const SkillSets = () => {
  const me = useAppSelector(selectMe);
  return (
    <div className="section">
      <div className="section-head">
        <div className="section-bg">Skill set</div>
        <div className="section-title">What Do I Use?</div>
      </div>
      <div className="section-content flex-wrap">
        {me?.Skills.map((skill, index) => (
          <div className="ring-1 rounded-md  ring-green-500 py-2 px-3 flex gap-3">
            <img src={skill.Icon} alt="" className="w-14" />
            <div className="flex flex-col justify-around">
              <div className="flex justify-between min-w-[250px]">
                <h4 className="text-md capitalize font-semibold">
                  {skill.name}
                </h4>
                <h4 className="text-md">{skill.value}%</h4>
              </div>
              <div className="w-full ring-1 ring-gray-400">
                <div
                  className="ring-2 ring-green-500"
                  style={{ width: `${skill.value}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSets;
