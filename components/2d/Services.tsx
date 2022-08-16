import React from "react";
import { selectMe } from "../../app/features/displaySlice";
import { useAppSelector } from "../../app/store";

const Services = () => {
  const me = useAppSelector(selectMe);
  return (
    <div className="section" id="services">
      <div className="section-head">
        <div className="section-bg">Services</div>
        <div className="section-title">What I Do?</div>
      </div>
      <div className="section-content w-[90%] mx-auto items-center md:items-start justify-around flex-wrap">
        {me?.Services.map((service, index) => (
          <div
            className="ring-2 hover:ring-4 gap-2 ring-green-500 rounded-md flex items-start h-[150px] px-3 py-2 w-[300px] md:w-[350px] "
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
    </div>
  );
};

export default Services;
