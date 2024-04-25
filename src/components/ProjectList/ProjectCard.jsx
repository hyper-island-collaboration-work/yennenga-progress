import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ card }) => {
  const formattedTitle = card.title.toLowerCase().replace(/\s+/g, "-");
  const path = `/projects/${formattedTitle}/${card.id}`;

  return (
    <Link to={path} onClick={(evt) => onClick(evt)}>
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
          <p className=" py-[4px] text-[12px] font-medium md:py-4 md:text-[16px]">
            {card.type}
          </p>
          <p className=" text-[16px] font-normal md:text-xl">{card.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
