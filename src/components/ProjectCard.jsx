import React from "react";
import { Link } from "react-router-dom";

/**
 * Component representing a project card.
 *
 * @param {Object} props - The props object.
 * @param {Object} props.card - The project card data.
 * @param {string} props.card.title - The title of the project.
 * @param {string} props.card.type - The type of the project.
 * @param {string} props.card.mainImage - The URL of the main image for the project.
 * @param {string} props.card.id - The unique identifier of the project.
 * @returns {JSX.Element} The project card component.
 * 
 * ![Project card example](/public/docsImages/project_card.jpg)
 */

const ProjectCard = ({ card }) => {
  const formattedTitle = card.title.toLowerCase().replace(/\s+/g, "-");
  const path = `/project/${formattedTitle}/${card.id}`;

  return (
    <Link to={path} onClick={(evt) => onClick(evt)}>
      <div
        key={card.id}
        className="group relative h-[346px] w-[200px] cursor-pointer overflow-hidden  md:h-[585px] md:w-[360px]"
      >
        <div
          style={{
            backgroundImage: `url(${card.mainImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-[280px] w-[200px] transition-transform duration-300 group-hover:scale-105 md:h-[480px] md:w-[360px]"
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
