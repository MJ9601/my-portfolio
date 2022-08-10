import React, { useState } from "react";
import {
  PathLine,
  selectPath,
  selectShowComponent,
} from "../app/features/displaySlice";
import { useAppSelector } from "../app/store";
import socialMedia from "../data/socialMedia";

const ContactFrom = () => {
  const path = useAppSelector(selectPath);
  const compStatus = useAppSelector(selectShowComponent);
  const [copy, setCopy] = useState(false);
  console.log(compStatus);
  return (
    <div
      className={`${
        path == PathLine.laptop && compStatus ? "opacity-1" : "opacity-0"
      } absolute transition-all delay-[2s] top-[13.5%] left-[19.3%] w-[62%] h-[71%] `}
    >
      <div className="flex flex-wrap overflow-y-auto h-full mx-1 lg:mx-0 scrollbar-desc">
        <div className="form-wrapper">
          <form className="w-[100%] space-y-3 h-fit ">
            <h3 className="form-title">Let's Discuss Your Project</h3>
            <label htmlFor="" className="label">
              <h6 className="title">Name</h6>
              <input type="text" name="" id="" className="input" />
            </label>
            <label htmlFor="" className="label">
              <h6 className="title">Email</h6>
              <input type="email" name="" id="" className="input" />
            </label>
            <label htmlFor="" className="label">
              <h6 className="title">Subject</h6>
              <input type="text" name="" id="" className="input" />
            </label>
            <label htmlFor="" className="label">
              <h6 className="title">Message</h6>
              <textarea name="" id="" className="input textarea" />
            </label>
            <label htmlFor="" className="label">
              <input type="submit" value="Send" className="input submit" />
            </label>
          </form>
        </div>

        <div className="w-full h-fit lg:w-[38%] flex flex-col gap-1 ">
          <h2 className="form-title">Find Me Here</h2>
          <div className="relative flex justify-around mb-3 lg:flex-col gap-5 ml-3">
            {socialMedia.map((link) => (
              <a
                target={link.link && "_blank"}
                href={link.link && link.link}
                className="relative cursor-pointer flex gap-2 group  justify-start items-center"
                onClick={() => {
                  !link.link && navigator.clipboard.writeText(link.userName);
                  setCopy(true);
                  setTimeout(() => {
                    setCopy(false);
                  }, 700);
                }}
              >
                <img src={link.icon} className="icons" />
                <h4 className="icons-text">{link.userName}</h4>
              </a>
            ))}
            {copy && (
              <div className="absolute bg-black -bottom-3 right-10 px-1  text-white">
                copied to clipboard!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFrom;
