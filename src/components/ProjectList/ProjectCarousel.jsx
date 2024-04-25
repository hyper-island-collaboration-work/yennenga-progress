import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import ButtonLink from "../ButtonLink";
import useContentful from "../../providers/ContentfulProvider/ContentfulProvider.hook";
import ProjectCard from "./ProjectCard";

const ProjectCarousel = () => {
  const { projectList } = useContentful();

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
        <ButtonLink
          buttonName="All Projects"
          path="/not-found"
        />
      </div>
    </div>
  );
};

export default ProjectCarousel;
