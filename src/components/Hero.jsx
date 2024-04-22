const Hero = () => {
  return (
    <div class="ml-6 grid grid-cols-3 grid-rows-10 gap-0 lg:grid-cols-9 lg:grid-rows-4">
      <div
        /* first picture */ className="col-span-2 row-span-5 row-start-5 bg-yellow-700 lg:col-span-1 lg:col-start-1 lg:row-span-2 lg:row-start-3"
      ></div>

      <div
        /* text */ className="col-span-3 col-start-1 row-span-4 row-start-1 mb-10 lg:col-span-5 lg:col-start-2 lg:row-span-2 lg:row-start-2"
      >
        <h1 className="text-5xl font-bold">
          Create conditions for all individuals to reach their full potential
        </h1>
      </div>

      <div
        /* second picture */ className="col-start-3 row-span-4 row-start-7 bg-yellow-700 lg:col-start-9 lg:row-span-2 lg:row-start-1"
      ></div>
    </div>
  );
};

export default Hero;
