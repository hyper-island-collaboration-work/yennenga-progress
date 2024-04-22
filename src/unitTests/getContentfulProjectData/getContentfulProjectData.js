import { client } from "../../client";

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

module.exports = fetchProjects;