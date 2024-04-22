// import { motion, useTransform, useScroll } from "framer-motion";
// import { useRef } from "react";
// import ButtonLink from "../ButtonLink";

// const ProjectCarouselSection = () => {

//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-70%"]);

//   return (
//     <div className=" bg-stone-300 pt-6">
//       <p className=" px-6 pb-4 font-plexSerif text-[12px] md:pb-10 md:text-center md:text-xl">
//         ProjectProjectProject
//       </p>
//       <h2 className=" px-6 font-montserrat text-2xl md:text-center lg:text-7xl">
//         Explore the possibilities
//       </h2>
//       <section ref={targetRef} className="relative h-[200vh] bg-stone-300">
//         <div className="sticky top-0 flex h-screen items-center overflow-hidden">
//           <motion.div style={{ x }} className="flex gap-6 md:gap-14">
//             {cards.map((card) => {
//               return <Card card={card} key={card.id} />;
//             })}
//           </motion.div>
//         </div>
//       </section>
//       <div className=" flex items-center justify-center">
//         <ButtonLink buttonName="All Projcets" buttonColor="#e7e5e4" />
//       </div>
//     </div>
//   );
// };

// const Card = ({ card }) => {
//   return (
//     <div
//       key={card.id}
//       className="group relative cursor-pointer h-[346px] w-[200px] overflow-hidden bg-stone-300 md:h-[585px] md:w-[360px]"
//     >
//       <div
//         style={{
//           backgroundImage: `url(${card.url})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         className="h-[280px] w-[200px] bg-stone-300 transition-transform duration-300 group-hover:scale-105 md:h-[480px] md:w-[360px]"
//       ></div>
//       <div className=" flex w-[200px] flex-col overflow-auto font-plexSerif md:w-[360px]">
//         <p className=" py-[4px] text-[12px] md:py-4 md:text-sm">{card.title}</p>
//         <p className=" text-[16px] md:text-xl">{card.discription}</p>
//       </div>
//     </div>
//   );
// };

// export default ProjectCarouselSection;

// const cards = [
//   {
//     url: "/images/project-1.png",
//     title: "Title 1",
//     discription:
//       "texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",
//     id: 1,
//   },
//   {
//     url: "/images/project-2.png",
//     title: "Title 2",
//     discription:
//       "texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",
//     id: 2,
//   },
//   {
//     url: "/images/project-1.png",
//     title: "Title 3",
//     discription:
//       "texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",
//     id: 3,
//   },
//   {
//     url: "/images/project-2.png",
//     title: "Title 4",
//     discription:
//       "texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",
//     id: 4,
//   },
//   {
//     url: "/images/project-1.png",
//     title: "Title 5",
//     discription:
//       "texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",
//     id: 5,
//   },
//   {
//     url: "/images/project-2.png",
//     title: "Title 6",
//     discription:
//       "texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",
//     id: 6,
//   },
//   {
//     url: "/images/project-1.png",
//     title: "Title 7",
//     discription:
//       "texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",
//     id: 7,
//   },
//   {
//     url: "/images/project-2.png",
//     title: "Title 8",
//     discription:
//       "texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",
//     id: 8,
//   },
//   {
//     url: "/images/project-1.png",
//     title: "Title 9",
//     discription:
//       "texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",
//     id: 9,
//   },
//   {
//     url: "/images/project-2.png",
//     title: "Title 10",
//     discription:
//       "texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",
//     id: 10,
//   },
// ];

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import ButtonLink from "../ButtonLink";
import useProjects from "../../providers/ProjectsProvider/ProjectsProvider.hook";
import ProjectCard from "./ProjectCard";

const ProjectCarouselSection = () => {
  const { projectList } = useProjects();

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-70%"]);

  return (
    <div className=" bg-stone-300 pt-6">
      <p className=" px-6 pb-4 font-plexSerif text-[12px] md:pb-10 md:text-center md:text-xl">
        ProjectProjectProject
      </p>
      <h2 className=" px-6 font-montserrat text-2xl md:text-center lg:text-7xl">
        Explore the possibilities
      </h2>
      <section ref={targetRef} className="relative h-[200vh] bg-stone-300">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-6 md:gap-14">
            {projectList &&
              projectList.map((card) => {
                return <ProjectCard card={card} key={card.id} />;
              })}
          </motion.div>
        </div>
      </section>
      <div className=" flex items-center justify-center">
        <ButtonLink buttonName="All Projcets" buttonColor="#e7e5e4" />
      </div>
    </div>
  );
};

export default ProjectCarouselSection;
