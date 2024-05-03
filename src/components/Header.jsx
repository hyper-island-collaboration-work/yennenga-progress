import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
    title: "PROJECTS",
    link: "/all-projects",
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
    title: "ENGAGE",
    link: "/engage",
  },
  {
    title: "DONATE",
    link: "/donate",
  },
];

/**
 * Description placeholder
 *
 * @returns {*}
 */
const Header = () => {
  const [open, setopen] = useState(false);

  // translations
  const { t, i18n } = useTranslation();
  const languages = [
    { code: "en", name: "English" },
    { code: "se", name: "Svenska" },
  ];
  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "se" : "en";
    i18n.changeLanguage(newLanguage);
  };

  // handle styling depending on wich page
  const location = useLocation();
  const isOnNewsPage = location.pathname.startsWith("/newspage");
  const isOnProjectPage = location.pathname.startsWith("/project");

  const headerColor =
    isOnNewsPage || isOnProjectPage ? "bg-darkBlue" : "bg-stone-200";
  const textColor =
    isOnNewsPage || isOnProjectPage ? "text-white" : "text-black";
  const logoColor =
    isOnNewsPage || isOnProjectPage ? (
      <img src="/images/yp_logo_white.svg" alt="Logo" />
    ) : (
      <img src="/images/yp_logo_brown.svg" alt="Logo" />
    );
  const handleMenu = () => {
    setopen((prev) => !prev);
  };

  return (
    <div className={`${open ? "bg-orange-700" : headerColor} pt-12`}>
      <div className="mx-auto px-4 font-montserrat font-semibold sm:px-6 lg:h-[68px] lg:px-8">
        <div className="flex h-16 items-end justify-between">
          <div className="item-center flex">
            <a href="/" className=" h-[68px] w-[200px] object-cover">
              {open ? (
                <img src="/images/yp_logo_white.svg" alt="Logo" />
              ) : (
                logoColor
              )}
            </a>
          </div>
          <div className="hidden md:block">
            <div className="flex flex-col items-end gap-2">
              <button onClick={toggleLanguage}>SV / EN</button>
              <div className="ml-10 flex items-baseline space-x-4">
                {navlinks.map((navLinkItem, index) => (
                  <NavLink
                    to={navLinkItem.link}
                    className={` group relative h-5 cursor-pointer overflow-hidden ${
                      navLinkItem.title === "DONATE" ? "text-umber" : textColor
                    }`}
                    key={index}
                  >
                    <div
                      aria-hidden="true"
                      className="transition duration-300 group-hover:-translate-y-5 "
                    >
                      <div className="flex h-5 items-center justify-center">
                        <span className=""> {navLinkItem.title}</span>
                      </div>
                      <div className="flex h-5 items-center justify-center">
                        <span className=""> {navLinkItem.title}</span>
                      </div>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
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
                  link.title === "DONATE"
                    ? "block px-3 py-2 text-white transition-all duration-500"
                    : "block px-3 py-2 text-black transition-all duration-500"
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
