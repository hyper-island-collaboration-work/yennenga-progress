// import React, { useEffect, useState, useCallback } from "react";
// import { client } from "../../client";

// const ProjectCardList = () => {
//   const [projectList, setProjectList] = useState([]);
//   console.log(projectList);

//   const cleanUpProjectList = useCallback((rawData) => {
//     const cleanProjectsData = rawData.map((project) => {
//       const { sys, fields } = project;
//       const { id } = sys;
//       const projectTitle = fields.title;
//       const projectType = fields.type;
//       const projectDescription = fields.description;
//       //   const projectMainImage = fields.mainImage.fields.file.url;
//       const filteredProjectData = {
//         id,
//         projectTitle,
//         projectType,
//         projectDescription,
//         // projectMainImage,
//       };
//       return filteredProjectData;
//     });
//     setProjectList(cleanProjectsData);
//   }, []);

//   const fetchProject = useCallback(async () => {
//     try {
//       const response = await client.getEntries({
//         content_type: "project",
//       });
//       const responseData = response.items;
//       if (responseData) {
//         cleanUpProjectList(responseData);
//       } else setProjectList([]);
//     } catch (error) {
//       console.log(error);
//     }
//   }, []);

//   useEffect(() => {
//     fetchProject();
//   }, [fetchProject]);

//   return (
//     <div>
//       <h1>Project</h1>
//     </div>
//   );
// };

// export default ProjectCardList;
