import React from "react";

const MainImageSection = ({ project }) => {
  return (
    <section className=" flex justify-center pb-[96px] ">
      <img src={project.mainImage} className=" w-screen"></img>
    </section>
  );
};

export default MainImageSection;
