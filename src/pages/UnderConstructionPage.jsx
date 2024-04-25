import { Link } from "react-router-dom";

const UnderConstructionPage = () => {
  return (
    <div className=" flex h-screen flex-col justify-center bg-burkinaBlue font-montserrat text-white">
      <h1 className=" mb-8 text-center text-6xl font-medium">
        This page is under construction.
      </h1>
      <p className=" mb-10 text-center text-xl">
        We apologize for any temporary inconvenience.
      </p>
      <Link to="/">
        <h2
          className=" mx-auto w-44 transform cursor-pointer
          rounded-full border border-white px-3 py-2 text-center text-3xl transition-transform duration-300 hover:scale-125"
        >
          go back
        </h2>
      </Link>
    </div>
  );
};

export default UnderConstructionPage;
