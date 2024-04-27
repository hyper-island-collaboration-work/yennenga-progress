import React from "react";
import useContentful from "../providers/ContentfulProvider/ContentfulProvider.hook";
import HeroText from "../components/HeroText";
import ReadyToTakeAction from "../components/ReadyToTakeAction";
import ProjectCard from "../components/ProjectCard";
import FilterButtonList  from "../components/FilterButtonList";

export default function ProjectsPage() {
  const { projectList } = useContentful();

  return (
    <div className=" grid bg-stone-200">
      <HeroText title="Explore the possibilities" />
      <FilterButtonList />
      <section
        className=" mb-[92px] grid grid-cols-1 gap-y-12 gap-x-12 md:mx-auto md:grid-cols-2
       md:gap-y-[48px] md:gap-x-24 lg:grid-cols-3"
      >
        {projectList &&
          projectList.map((card) => {
            return (
              <div className=" relative mx-auto md:mx-0">
                <ProjectCard card={card} key={card.id} />
                <div className=" absolute left-[130px] top-[240px] flex w-[500px]  rotate-90 font-montserrat text-base font-medium text-umber">
                  <p className=" mr-12 ">Ongoing-funding</p>
                  <p>Education</p>
                </div>
              </div>
            );
          })}
      </section>
      <ReadyToTakeAction />
    </div>
  );
}
