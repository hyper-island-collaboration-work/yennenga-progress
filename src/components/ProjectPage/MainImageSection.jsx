import React from "react";

const MainImageSection = ({ project }) => {
  return (
    <section className=" flex justify-center pb-[120px] ">
      <img src={project.mainImage} className=" max-w-[1040px]"></img>
    </section>
  );
};

export default MainImageSection;
