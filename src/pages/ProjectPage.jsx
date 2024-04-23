import React from "react";
import { useParams } from "react-router-dom";
import useProjects from "../providers/ProjectsProvider/ProjectsProvider.hook";
import HeroProjectSection from "../components/ProjectPage/HeroProjectSection";
import MainImageSection from "../components/ProjectPage/MainImageSection";
import ActionSection from "../components/ProjectPage/ActionSection";

export default function ProjectPage() {
  const { id } = useParams();
  const { projectList } = useProjects();

  const project =
    projectList && projectList.length > 0
      ? projectList.filter((item) => item.id === id)[0]
      : null;

  return (
    <div className="bg-darkBlue px-[60px]">
      {project && (
        <>
          <HeroProjectSection project={project} />
          <MainImageSection project={project} />
          <div className=" flex w-[648px] flex-col text-white mb-[72px]">
            <h2 className=" mb-6 font-montserrat text-[80px] font-medium leading-tight">
              About the project
            </h2>
            <p className=" font-plexSerif text-xl font-normal">
              {project.aboutTheProject}
            </p>
          </div>
          <ul className=" grid grid-cols-1 gap-[72px] pb-[120px]">
            <li>
              <ActionSection action={project.actions[0]} number="01" />
            </li>
            <li>
              <ActionSection action={project.actions[1]} number="02" />
            </li>
            <li>
              <ActionSection action={project.actions[2]} number="03" />
            </li>
          </ul>
        </>
      )}
    </div>
  );
}
