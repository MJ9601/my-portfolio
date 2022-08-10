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
      } absolute transition-all delay-[2s] top-[17%] left-[7%] w-[82%] h-[53%] bg-red-500`}
    >
      ContactFrom
    </div>
  );
};

export default OwnerInfoDisplay;
