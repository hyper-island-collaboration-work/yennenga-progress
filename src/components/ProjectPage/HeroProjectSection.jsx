import React from "react";

const HeroProjectSection = ({ project }) => {
  return (
    <section className=" py-[192px] text-white px-[48px]">
      <p className=" mb-6 font-plexSerif text-base font-medium">
        {project.type}
      </p>
      <h1 className="font-montserrat text-8xl font-medium">
        {project.title}
      </h1>
      <div className=" grid grid-cols-2 gap-6 mt-[96px]">
        <div>
        <ul className=" grid grid-cols-1 gap-6 font-plexSerif">
          <li>
            <p className=" text-base font-medium text-umber mb-1">LOCATION</p>
            <p className=" text-xl font-light">{project.location}</p>
          </li>
          <li>
            <p className=" text-base font-medium text-umber mb-1">SUPERVISOR</p>
            <p className=" text-xl font-light">{project.supervisor}</p>
          </li>
          <li>
            <p className=" text-base font-medium text-umber mb-1">STATUS</p>
            <p className=" text-xl font-light">{project.status}</p>
          </li>
          <li>
            <p className=" text-base font-medium text-umber mb-1">GLOBAL GOALS</p>
            <img src="/public/images/goal-city.png" className="w-12 h-12" />
          </li>
        </ul>
        </div>
        <p className=" text-xl font-light">{project.description}</p>
      </div>
    </section>
  );
};

export default HeroProjectSection;
