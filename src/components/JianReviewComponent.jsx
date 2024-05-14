import { useState } from "react";

const JianReviewComponent = () => {
  const [backgroundColor, setBackgroundColor] = useState(false);

  const handleClick = () => {
    setBackgroundColor((prev) => !prev);
  };

  return (
    <div
      onClick={handleClick}
      className={`${backgroundColor ? "bg-sand" : "bg-white"} w-full p-5`}
    >
      Click to toogle background color
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolore,
        fugiat nisi magnam recusandae et in officiis, quisquam placeat deleniti
        quas eos enim sint veritatis?
      </p>
    </div>
  );
};

export default JianReviewComponent;
