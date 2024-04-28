import { Link } from "react-router-dom";
// import { HiArrowLongRight } from "react-icons/hi2";

const ButtonLink = ({ buttonName, path }) => {
  const ariaLabel = `${buttonName} link button`;
  return (
    <Link to={path}>
      <div>
        <div className=" flex w-fit cursor-pointer items-center justify-center group relative">
          <div className="group relative h-12 overflow-hidden rounded-full pl-4 pr-6 font-montserrat text-[16px]">
            <div
              aria-hidden="true"
              aria-label={ariaLabel}
              className="transition duration-300 group-hover:-translate-y-12 "
            >
              <div className="flex h-12 items-center justify-center">
                <span className="">{buttonName}</span>
              </div>
              <div className="flex h-12 items-center justify-center">
                <span className="">{buttonName}</span>
              </div>
            </div>
          </div>
          <div
            className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-umber bg-none
          before:absolute 
          before:inset-0 
          before:origin-right 
          before:scale-x-0 
          before:rounded-full
          before:bg-umber
          before:transition
          before:duration-300
          hover:before:origin-left
          hover:before:scale-x-100 
          "
          >
            <img className=" z-10 h-6 w-6 " src="../images/arrow_icon.svg" />
            {/* <HiArrowLongRight className=" z-10 h-6 w-6 " /> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ButtonLink;
