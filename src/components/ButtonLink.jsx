import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";

const ButtonLink = ({ buttonName, path }) => {
  const ariaLabel = `${buttonName} link button`;
  return (
    <Link to={path}>
      <div
        className=" flex w-fit cursor-pointer items-center justify-center rounded-full p-[12px] 
        font-montserrat text-[16px] transition duration-1000 ease-in-out hover:bg-umber"
        aria-label={ariaLabel}
      >
        {buttonName}
        <HiArrowNarrowRight className=" ml-4 h-4 w-4" />
      </div>
    </Link>
  );
};

export default ButtonLink;
