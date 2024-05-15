import { useState } from "react";

const PictureWithTextUnder = () => {
  const [hook, setHook] = useState(false);

  const handleClick = () => {
    setHook((prev) => !prev);
  };

  const coloring = "blue";

  return (
    <div>
      <div>
        <a href="/somewhere" onClick={handleClick}>
          <img src="/images/bigpicture.jpg" alt="Big Picture" />
        </a>
      </div>
      <div>Some text and some more text</div>
      <div>{coloring}</div>
    </div>
  );
};

export default PictureWithTextUnder;
