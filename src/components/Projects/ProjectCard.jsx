import React from "react";

const ProjectCard = ({card}) => {
  return (
    <div
      key={card.id}
      className="group relative h-[346px] w-[200px] cursor-pointer overflow-hidden bg-stone-300 md:h-[585px] md:w-[360px]"
    >
      <div
        style={{
          backgroundImage: `url(${card.mainImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[280px] w-[200px] bg-stone-300 transition-transform duration-300 group-hover:scale-105 md:h-[480px] md:w-[360px]"
      ></div>
      <div className=" flex w-[200px] flex-col overflow-auto font-plexSerif md:w-[360px]">
        <p className=" py-[4px] text-[12px] md:py-4 md:text-sm">{card.title}</p>
        <p className=" text-[16px] md:text-xl">{card.type}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
