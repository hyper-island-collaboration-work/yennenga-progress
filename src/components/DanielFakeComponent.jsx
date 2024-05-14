import { useState } from "react";

const DanielFakeComponent = () => {
  const [hook, sethook] = useState(false);

  const handleClick = () => {
    setopen((prev) => !prev);
  };

  const coloring = "blue";

  return (
    <div>
      <div>
        <a href="/somewhere" onClick={handleClick}>
          <img src="/photos/bigpicture.jpg" alt="Big Picture" />
        </a>
      </div>
      <div>Some text and some more text</div>
      <div>{coloring}</div>
    </div>
  );
};

export default DanielFakeComponent;
