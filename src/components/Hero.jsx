import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="relative flex overflow-hidden bg-stone-200 ">
      <h1 className=" z-10 max-w-[500px] px-6 py-9 font-montserrat text-3xl font-medium sm:mx-auto  md:max-w-[1128px] md:py-[192px] md:text-8xl md:font-normal">
        {t("hero")}
      </h1>
      <div
        style={{
          backgroundImage: `url('/images/hero_image_2.jpeg')`,

          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" hidden h-[300px] w-[300px] md:absolute md:-right-24 md:top-6 md:block"
      ></div>
      <div
        style={{
          backgroundImage: `url('/images/hero_image_1.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" hidden h-[300px] w-[300px] md:absolute md:-bottom-28 md:left-0 md:block"
      ></div>
      <div
        style={{
          backgroundImage: `url('/images/hero_image_3.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" hidden h-[300px] w-[300px] md:absolute md:-bottom-14 md:right-12 md:block"
      ></div>
    </div>
  );
};

export default Hero;
