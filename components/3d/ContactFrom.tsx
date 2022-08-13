import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  PathLine,
  selectPath,
  selectShowComponent,
} from "../../app/features/displaySlice";
import { useAppSelector } from "../../app/store";
import Form from "../Form";

const ContactFrom = () => {
  const path = useAppSelector(selectPath);
  const compStatus = useAppSelector(selectShowComponent);

  console.log(compStatus);
  return (
    <div
      className={`${
        path == PathLine.laptop && compStatus ? "opacity-1" : "opacity-0"
      } absolute transition-all delay-[2s] top-[13.5%] left-[19.3%] w-[62%] h-[71%] `}
    >
      <Form />
    </div>
  );
};

export default ContactFrom;
