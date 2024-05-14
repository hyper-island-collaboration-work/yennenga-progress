import React, { useEffect, useState, useCallback, useRef } from "react";
import { client } from "../../client";
import ProjectCard from "../components/ProjectCard";
import HeroText from "../components/HeroText";

export default function ProjectsPage() {
  const [projectList, setProjectList] = useState([]);

  const fetchProjects = () => {
    client
      .getEntries({ content_type: "project" })
      .then((response) => {
        const responseData = response.items;
        if (responseData) {
          const cleanProjectsData = responseData.map((project) => {
            const { sys, fields } = project;
            const { id } = sys;
            const title = fields.title;
            const type = fields.type;
            const description = fields.description;
            const filteredProjectData = {
              id,
              title,
              type,
              description,
            };
            return filteredProjectData;
          });
          setProjectList(cleanProjectsData);
        } else {
          setProjectList([]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return (
    <div className=" grid bg-stone-200">
      <HeroText title="Explore the possibilities" />
      <FilterButtonList />
      <section
        className=" mb-[92px] grid grid-cols-1 gap-x-12 gap-y-12 md:mx-auto md:grid-cols-2
         md:gap-x-24 md:gap-y-[48px] lg:grid-cols-3"
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
    </div>
  );
}
