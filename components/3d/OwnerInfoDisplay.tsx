import React from "react";
import {
  MeDesc,
  PathLine,
  selectMe,
  selectMeDis,
  selectPath,
  selectShowComponent,
  setMeDisplay,
} from "../../app/features/displaySlice";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { Education, Experience, Objective, Skills } from "../services/UserInfo";

const OwnerInfoDisplay = () => {
  const path = useAppSelector(selectPath);
  const compStatus = useAppSelector(selectShowComponent);
  const me = useAppSelector(selectMe);
  const meDisplay = useAppSelector(selectMeDis);
  const dispatch = useAppDispatch();
  console.log(me);
  return (
    <div
      className={`${
        path == PathLine.monitors && compStatus ? "opacity-1" : "opacity-0"
      } absolute transition-all delay-[2s] top-[16.7%] left-[6.5%] w-[82.9%] h-[53.6%] `}
    >
      <div className="absolute top-0 left-0  h-full w-[46.8%] py-2 px-2">
        <h3 className="text-2xl font-semibold">{me?.Objective.name}</h3>
        <div className="h-[90%]">
          <>{meDisplay == MeDesc.Objective && <Objective />}</>
          <>{meDisplay == MeDesc.Education && <Education />}</>
          <>{meDisplay == MeDesc.Experience && <Experience />}</>
          <>{meDisplay == MeDesc.Skills && <Skills />}</>
        </div>
      </div>
      <div className="absolute top-0 right-0 h-full w-[46.5%]">
        <div className="w-[50%] space-y-3 mx-3 my-3">
          {Object.keys(me!).map((key) => (
            <div
              className={`
                "ring-1 ring-green-500 py-1 px-2 w-[120px] rounded-full text-base text-green-600  transition-all ease-linear"
              ${
                key == meDisplay
                  ? "bg-green-200 text-white"
                  : "hover:ring-2 hover:tracking-wider cursor-pointer duration-300"
              }`}
              key={key}
              // @ts-ignore
              onClick={() => dispatch(setMeDisplay(MeDesc[key]))}
            >
              {key}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OwnerInfoDisplay;
