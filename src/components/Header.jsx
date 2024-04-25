import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const navlinks = [
  {
    title: "WHAT WE DO",
    link: "/whatwedo",
  },
  {
    title: "HOW IT WORKS",
    link: "/howitworks",
  },
  {
    title: "PROJECT",
    link: "/project",
  },
  {
    title: "ABOUT",
    link: "/about",
  },
  {
    title: "CONTACT",
    link: "/contact",
  },
  {
    title: "PARTNER",
    link: "/partner",
  },
  {
    title: "INDIVIDUAL",
    link: "/individual",
  },
];

const Header = () => {
  const [open, setopen] = useState(false);

  //styling if user is on newspage
  const location = useLocation();
  const isOnNewsPage = location.pathname.startsWith("/newspage");
  const newsHeaderColor = isOnNewsPage ? "bg-darkBlue" : "bg-stone-300";
  const newsTextColor = isOnNewsPage ? "text-white" : "text-black";
  const newsLogoColor = isOnNewsPage ? (
    <img src="/images/yp_logo_white.svg" alt="Logo" />
  ) : (
    <img src="/images/yp_logo_brown.svg" alt="Logo" />
  );
  const handleMenu = () => {
    setopen((prev) => !prev);
  };
  return (
    <div className={open ? "bg-orange-700" : `${newsHeaderColor}`}>
      <div className="mx-auto px-4 font-bold sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="item-center flex">
            <a href="/">
              {open ? (
                <img src="/images/yp_logo_white.svg" alt="Logo" />
              ) : (
                newsLogoColor
              )}
            </a>
          </div>
          {/* navlinks */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navlinks.map((link, index) => (
                <a
                  key={index}
                  className={`font-bold transition-all duration-500 hover:opacity-45 ${
                    link.title === "INDIVIDUAL"
                      ? "text-orange-700"
                      : newsTextColor
                  }`}
                  href={link.link}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
          {/* hamburger button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center p-2"
            >
              <span className="sr-only">Open Main Menu</span>
              {open == true ? "BACK" : "MENU"}
            </button>
          </div>
        </div>
      </div>
      {/* mobile-menu */}
      {open ? (
        <div className="md:hidden">
          <div className="ox-2 right-0 h-screen w-screen items-center justify-between space-y-1 bg-orange-700 pb-0 pt-2 text-center sm:px-3">
            {navlinks.map((link, index) => (
              <a
                key={index}
                className={
                  link.title === "INDIVIDUAL"
                    ? "block px-3 py-2 font-bold text-white transition-all duration-500"
                    : "block px-3 py-2 font-bold text-black transition-all duration-500"
                }
                href={link.link}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
