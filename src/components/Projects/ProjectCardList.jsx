// import { motion, useTransform, useScroll } from "framer-motion";
// import { useRef } from "react";
// import ButtonLink from "../ButtonLink";

// const ProjectCardList = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   // const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
//   const x = useTransform(scrollYProgress, [1, 0], ["1%", "-70%"]);

//   return (
//     <div className=" flex flex-col bg-stone-300 pt-6 lg:pt-[120px]">
//       <p className=" text-[12px] pb-4 lg:pb-10 md:text-center font-plexSerif md:text-xl">
//         ProjectProjectProject
//       </p>
//       <h2 className=" text-2xl md:text-center font-montserrat lg:text-7xl lg:pb-20">
//         Explore the possibilities
//       </h2>
//       <section
//         ref={targetRef}
//         // className=" relative h-[480vh] h-[585px] bg-stone-300 py-32"
//         className=" relative mb-20 h-[585px]"
//       >
//         {/* <div className="sticky top-0 flex h-screen items-center overflow-hidden"> */}
//         <div className="sticky top-0 flex h-[346px] md:h-[585px] items-center overflow-hidden">
//           <motion.div style={{ x }} className="flex gap-6 md:gap-14">
//             {cards.map((card) => {
//               return <Card card={card} key={card.id} />;
//             })}
//           </motion.div>
//         </div>
//       </section>
//       <div className=" flex items-center justify-center">
//       <ButtonLink buttonName='All Projcets' buttonColor='#005CD7' />
//       </div>
//     </div>
//   );
// };

// const Card = ({ card }) => {
//   return (
//     <div
//       key={card.id}
//       //   className="group relative w-[360px] h-[480px] overflow-hidden bg-neutral-200"
//       className=" relative flex flex-col "
//     >
//       <div
//         style={{
//           backgroundImage: `url(${card.url})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         // className="absolute inset-0 z-0 w-[360px] h-[480px] transition-transform duration-300 group-hover:scale-110"
//         className="h-[280px] w-[200px] md:h-[480px] md:w-[360px] bg-neutral-200 transition-transform duration-300 group-hover:scale-110"
//       ></div>
//       <div className=" flex w-[200px] md:w-[360px] flex-col font-plexSerif overflow-auto">
//         <p className=" text-[12px] py-[4px] md:py-4 md:text-sm">{card.title}</p>
//         <p className=" text-[16px] md:text-xl">{card.discription}</p>
//       </div>
//     </div>
//   );
// };

// export default ProjectCardList;

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import ButtonLink from "../ButtonLink";

const ProjectCardList = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-70%"]);

  return (
    <div className=" bg-stone-200 pt-6">
      <p className=" px-6 pb-4 font-plexSerif text-[12px] md:pb-10 md:text-center md:text-xl">
        ProjectProjectProject
      </p>
      <h2 className=" px-6 font-montserrat text-2xl md:text-center lg:text-7xl">
        Explore the possibilities
      </h2>
      <section ref={targetRef} className="relative h-[200vh] bg-stone-200">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-6 md:gap-14">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
      <div className=" flex items-center justify-center">
        <ButtonLink buttonName="All Projcets" buttonColor="#005CD7" />
      </div>
    </div>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative cursor-pointer h-[346px] w-[200px] overflow-hidden bg-neutral-200 md:h-[585px] md:w-[360px]"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[280px] w-[200px] bg-neutral-200 transition-transform duration-300 group-hover:scale-105 md:h-[480px] md:w-[360px]"
      ></div>
      <div className=" flex w-[200px] flex-col overflow-auto font-plexSerif md:w-[360px]">
        <p className=" py-[4px] text-[12px] md:py-4 md:text-sm">{card.title}</p>
        <p className=" text-[16px] md:text-xl">{card.discription}</p>
      </div>
    </div>
  );
};

export default ProjectCardList;

const cards = [
  {
    url: "/images/project-1.png",
    title: "Title 1",
    discription:
      "texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",
    id: 1,
  },
  {
    url: "/images/project-2.png",
    title: "Title 2",
    discription:
      "texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",
    id: 2,
  },
  {
    url: "/images/project-1.png",
    title: "Title 3",
    discription:
      "texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",
    id: 3,
  },
  {
    url: "/images/project-2.png",
    title: "Title 4",
    discription:
      "texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",
    id: 4,
  },
  {
    url: "/images/project-1.png",
    title: "Title 5",
    discription:
      "texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",
    id: 5,
  },
  {
    url: "/images/project-2.png",
    title: "Title 6",
    discription:
      "texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",
    id: 6,
  },
  {
    url: "/images/project-1.png",
    title: "Title 7",
    discription:
      "texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",
    id: 7,
  },
  {
    url: "/images/project-2.png",
    title: "Title 8",
    discription:
      "texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",
    id: 8,
  },
  {
    url: "/images/project-1.png",
    title: "Title 9",
    discription:
      "texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",
    id: 9,
  },
  {
    url: "/images/project-2.png",
    title: "Title 10",
    discription:
      "texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",
    id: 10,
  },
];
