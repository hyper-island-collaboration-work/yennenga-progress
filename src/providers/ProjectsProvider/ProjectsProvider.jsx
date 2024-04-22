import React, { useEffect, useState, useCallback, useRef } from "react";
import { client } from "../../client";
import ProjectsProviderContext from "./ProjectsProvider.context";

const ProjectsProvider = ({ children }) => {
  const [projectList, setProjectList] = useState([]);

  const cleanUpProjectList = useCallback((rawData) => {
    const cleanProjectsData = rawData.map((project) => {
      const { sys, fields } = project;
      const { id } = sys;
      const title = fields.title;
      const type = fields.type;
      const description = fields.description;
      const mainImage = fields.mainImage.fields.file.url;
      const filteredProjectData = {
        id,
        title,
        type,
        description,
        mainImage,
      };
      return filteredProjectData;
    });
    setProjectList(cleanProjectsData);
  }, []);

  const fetchProjects = useCallback(async () => {
    try {
      const response = await client.getEntries({
        content_type: "project",
      });
      const responseData = response.items;
      if (responseData) {
        cleanUpProjectList(responseData);
      } else setProjectList([]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const value = {
    projectList,
  };

  return (
    <ProjectsProviderContext.Provider value={value}>
      {children}
    </ProjectsProviderContext.Provider>
  );
};

export default ProjectsProvider;
