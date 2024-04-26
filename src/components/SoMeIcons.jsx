import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";

const SomeShare = () => {
  return (
    <>
      <div className="flex gap-2">
        <a href="https://www.facebook.com/yennengaprogress">
          <FaFacebookF className="h-5 w-5" />
        </a>
        <a href="https://www.linkedin.com/company/yennenga-progress/?trk=top_nav_home">
          <IoLogoLinkedin className="h-5 w-5" />
        </a>
        <a href="https://www.instagram.com/yennengaprogress/">
          <LuInstagram className="h-5 w-5" />
        </a>
        <a href="https://twitter.com/yennengaprogres" target="_blank">
          <BsTwitterX className="h-5 w-5" />
        </a>
      </div>
    </>
  );
};

export default SomeShare;
