import React from "react";
import {
  PathLine,
  selectPath,
  selectShowComponent,
} from "../app/features/displaySlice";
import { useAppSelector } from "../app/store";

const OwnerInfoDisplay = () => {
  const path = useAppSelector(selectPath);
  const compStatus = useAppSelector(selectShowComponent);
  console.log(compStatus);
  return (
    <div
      className={`${
        path == PathLine.monitors && compStatus ? "opacity-1" : "opacity-0"
      } absolute transition-all delay-[2s] top-[16.7%] left-[6.5%] w-[82.9%] h-[53.6%] `}
    >
      <div className="absolute top-0 left-0 bg-[rgba(255,255,255,.4)] h-full w-[46.8%]"></div>
      <div className="absolute top-0 right-0 bg-[rgba(255,255,255,.4)] h-full w-[46.5%]"></div>
    </div>
  );
};

export default OwnerInfoDisplay;
