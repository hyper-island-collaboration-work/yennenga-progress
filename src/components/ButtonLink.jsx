// import { Link } from "react-router-dom";

const ButtonLink = ({ buttonName, buttonColor }) => {
  return (
    // <Link to='#'>
    <div
      className=" font-plexSerif text-xl flex w-fit"
      style={{
        backgroundColor: buttonColor,
      }}
    >
      {buttonName}
    </div>
    // </Link>
  );
};

export default ButtonLink;
