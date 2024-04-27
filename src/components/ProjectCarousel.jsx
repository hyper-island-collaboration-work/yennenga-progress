import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import ButtonLink from "./ButtonLink";
import useContentful from "../providers/ContentfulProvider/ContentfulProvider.hook";
import ProjectCard from "./ProjectCard";

const ProjectCarousel = () => {
  const { projectList } = useContentful();

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [1, 0], ["1%", "-50%"]);

  return (
    <div className=" bg-sand md:pt-[96px]">
      <p className=" px-6 font-montserrat text-[12px] md:text-center md:text-[16px]">
        OUR PROJECTS
      </p>
      <h2 className=" px-6 font-montserrat text-2xl md:text-center lg:text-8xl lg:py-12">
        Explore the possibilities
      </h2>
      <section ref={targetRef} className="relative h-[637px] bg-sand lg:mb-[80px]">
        <div className="sticky top-0 flex items-center h-full overflow-hidden">
          <motion.div style={{ x }} className="flex gap-6 md:gap-14">
            {projectList &&
              projectList.map((card) => {
                return <ProjectCard card={card} key={card.id} />;
              })}
          </motion.div>
        </div>
      </section>
      <div className=" flex items-center justify-center">
        <ButtonLink buttonName="All Projects" path="/projects" />
      </div>
    </div>
  );
};

export default ProjectCarousel;
