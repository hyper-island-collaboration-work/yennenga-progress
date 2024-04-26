import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 2;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const Partners = () => {
  const imagesList = [
    "/images/yp_logo_black.svg",
    "/images/yp_logo_brown.svg",
    "/images/yp_logo_white.svg",
    "/images/yp_logo_black.svg",
    "/images/yp_logo_brown.svg",
    "/images/yp_logo_white.svg",
    "/images/yp_logo_black.svg",
    "/images/yp_logo_brown.svg",
    "/images/yp_logo_white.svg",
  ];

  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setImgIndex((prevIndex) => (prevIndex + 1) % imagesList.length);
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [imagesList]);

  return (
    <section className=" flex flex-col bg-sand py-[48px] font-montserrat lg:pb-[96px] lg:pt-[192px]">
      <h2 className=" mx-auto mb-[60px] max-w-[345px] text-center text-[24px] font-medium lg:mb-[96px] lg:max-w-[520px] lg:text-[40px]">
        Our Partners
      </h2>
      <div className=" relative overflow-hidden">
        <motion.div
          animate={{
            translateX: `-${imgIndex * 10}%`,
          }}
          transition={SPRING_OPTIONS}
          className="flex items-center"
        >
          <Images imagesList={imagesList} />
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;

const Images = ({ imagesList }) => {
  return (
    <>
      {imagesList?.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
            transition={SPRING_OPTIONS}
            className=" mr-12 aspect-video h-[40px] w-[120px] shrink-0 object-fill lg:mr-[120px] lg:h-[66px] lg:w-[200px]"
          />
        );
      })}
    </>
  );
};
