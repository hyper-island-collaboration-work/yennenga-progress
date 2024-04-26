const HeroText = ({ title }) => {
  return (
    <div class="relative flex overflow-hidden ">
      <h1 className=" z-10 max-w-[500px] px-6 py-9 font-montserrat text-3xl font-medium sm:mx-auto  md:max-w-[1128px] md:py-[192px] md:text-8xl md:font-normal">
        {title}
      </h1>
    </div>
  );
};

export default HeroText;
