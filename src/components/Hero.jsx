// const Hero = () => {
//   return (
//     <div class="ml-6 grid grid-cols-3 grid-rows-10 gap-0 lg:grid-cols-9 lg:grid-rows-4">
//       <div className="col-span-2 row-span-5 row-start-5 bg-yellow-700 lg:col-span-1 lg:col-start-1 lg:row-span-2 lg:row-start-3"></div>

//       <div className="col-span-3 col-start-1 row-span-4 row-start-1 mb-10 lg:col-span-5 lg:col-start-2 lg:row-span-2 lg:row-start-2">
//         <h1 className="text-5xl font-bold">
//           Create conditions for all individuals to reach their full potential.
//         </h1>
//       </div>

//       <div className="col-start-3 row-span-4 row-start-7 bg-yellow-700 lg:col-start-9 lg:row-span-2 lg:row-start-1"></div>
//     </div>
//   );
// };

// export default Hero;

const Hero = () => {
  return (
    <div class="relative flex overflow-hidden bg-stone-200 ">
      <h1 className=" z-10 max-w-[500px] px-6 py-9 font-montserrat text-3xl font-medium sm:mx-auto  md:max-w-[1128px] md:py-[192px] md:text-8xl md:font-normal">
        Create conditions for all individuals to reach their full potential.
      </h1>
      <div
        style={{
          backgroundImage: `url('/public/images/hero_image_2.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" hidden h-[300px] w-[300px] md:absolute md:-right-24 md:top-6 md:block"
      ></div>
      <div
        style={{
          backgroundImage: `url('/public/images/hero_image_1.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" hidden h-[300px] w-[300px] md:absolute md:-bottom-28 md:left-0 md:block"
      ></div>
      <div
        style={{
          backgroundImage: `url('/public/images/hero_image_3.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" hidden h-[300px] w-[300px] md:absolute md:right-12 md:-bottom-14 md:block"
      ></div>
    </div>
  );
};

export default Hero;
