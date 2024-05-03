import { Link } from "react-router-dom";

/**
 * The link button accepts the button's name and path as a string.
 *
 * @param {Object} options - Options object.
 * @param {string} [options.buttonName] - The name of the button.
 * @param {string} [options.path="not-found"] - The path associated with the button.
 * @returns {JSX.Element} The link button component.
 *
 * ![Button link example](/public/docsImages/link_button.jpg)
 */

const ButtonLink = ({ buttonName, path = "not-found", textColor }) => {
  const nameButton = buttonName ? `${buttonName}` : "button";
  return (
    <Link to={path}>
      <div>
        <div
          className={`${textColor} group relative flex w-fit cursor-pointer items-center justify-center`}
        >
          <div className="group relative h-12 overflow-hidden rounded-full pr-6 font-montserrat text-[16px]">
            <div
              aria-hidden="true"
              aria-label={nameButton}
              className="transition duration-300 group-hover:-translate-y-12 "
            >
              <div className="flex h-12 items-center justify-center">
                <span className="">{nameButton}</span>
              </div>
              <div className="flex h-12 items-center justify-center">
                <span className="">{nameButton}</span>
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
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ButtonLink;
