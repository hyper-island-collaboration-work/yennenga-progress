import React, { useEffect, useState, useCallback, useRef } from "react";
import { client } from "../../client";
import ContentfulProviderContext from "./ContentfulProvider.context";

const ContentfulProvider = ({ children }) => {
  const [projectList, setProjectList] = useState([]);

  const cleanUpProjectList = useCallback((rawData) => {
    const cleanProjectsData = rawData.map((project) => {
      const { sys, fields } = project;
      const { id } = sys;
      const title = fields.title;
      const type = fields.type;
      const description = fields.description;
      const mainImage = fields.mainImage.fields.file.url;
      const aboutTheProject = fields.aboutTheProject;
      const location = fields.location;
      const status = fields.status;
      const supervisor = fields.supervisor;
      const actions = [
        {
          title: fields.action1Title,
          description: fields.action1Description,
          image: fields.action1Image.fields.file.url
        },
        {
          title: fields.action2Title,
          description: fields.action2Description,
          image: fields.action2Image.fields.file.url
        },
        {
          title: fields.action3Title,
          description: fields.action3Description,
          image: fields.action3Image.fields.file.url
        }
      ];

      const filteredProjectData = {
        id,
        title,
        type,
        description,
        mainImage,
        aboutTheProject,
        location,
        status,
        supervisor,
        actions
      };
      console.log(filteredProjectData);
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
    <ContentfulProviderContext.Provider value={value}>
      {children}
    </ContentfulProviderContext.Provider>
  );
};

export default ContentfulProvider;
