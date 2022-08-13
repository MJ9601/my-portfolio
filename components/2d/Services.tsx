import React from "react";
import { selectMe } from "../../app/features/displaySlice";
import { useAppSelector } from "../../app/store";

const Services = () => {
  const me = useAppSelector(selectMe);
  return (
    <div className="section">
      <div className="section-head">
        <div className="section-bg">Services</div>
        <div className="section-title">What I Do?</div>
      </div>
      <div className="section-content">
        {me!.Services.map((service, index) => (
          <div className="ring-1" key={index}>
            <img src={service.image} alt="" className="" />
            <div className="">
              <h3 className="">{service.name}</h3>d
              <p className="">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
