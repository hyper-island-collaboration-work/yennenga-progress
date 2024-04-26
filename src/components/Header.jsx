// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";

// const navlinks = [
//   {
//     title: "WHAT WE DO",
//     link: "/whatwedo",
//   },
//   {
//     title: "HOW IT WORKS",
//     link: "/howitworks",
//   },
//   {
//     title: "PROJECT",
//     link: "/project",
//   },
//   {
//     title: "ABOUT",
//     link: "/about",
//   },
//   {
//     title: "CONTACT",
//     link: "/contact",
//   },
//   {
//     title: "PARTNER",
//     link: "/partner",
//   },
//   {
//     title: "INDIVIDUAL",
//     link: "/individual",
//   },
// ];

// const Header = () => {
//   const [open, setopen] = useState(false);

//   //styling if user is on newspage
//   const location = useLocation();
//   const isOnNewsPage = location.pathname.startsWith("/newspage");
//   const isOnProjectPage = location.pathname.startsWith("/projects");
//   const blueHeaderColor = isOnNewsPage || isOnProjectPage ? "bg-darkBlue" : "bg-stone-200";
//   const blueTextColor = isOnNewsPage || isOnProjectPage ? "text-white" : "text-black";
//   const blueLogoColor = isOnNewsPage || isOnProjectPage  ? (
//     <img src="/images/yp_logo_white.svg" alt="Logo" />
//   ) : (
//     <img src="/images/yp_logo_brown.svg" alt="Logo" />
//   );
//   const handleMenu = () => {
//     setopen((prev) => !prev);
//   };

//   return (
//     <div className={`${open ? "bg-orange-700" : blueHeaderColor} pt-12`}>
//       <div className="mx-auto px-4 font-semibold sm:px-6 lg:px-8 lg:h-[68px] font-montserrat">
//         <div className="flex h-16 items-end justify-between">
//           <div className="item-center flex">
//             <a href="/" className=" h-[68px] w-[200px] object-cover">
//               {open ? (
//                 <img src="/images/yp_logo_white.svg" alt="Logo" />
//               ) : (
//                 blueLogoColor
//               )}
//             </a>
//           </div>
//           {/* navlinks */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               {navlinks.map((link, index) => (
//                 <a
//                   key={index}
//                   className={` transition-all duration-500 hover:opacity-45 ${
//                     link.title === "INDIVIDUAL"
//                       ? "text-orange-700"
//                       : blueTextColor
//                   }`}
//                   href={link.link}
//                 >
//                   {link.title}
//                 </a>
//               ))}
//             </div>
//           </div>
//           {/* hamburger button */}
//           <div className="-mr-2 flex md:hidden">
//             <button
//               type="button"
//               onClick={handleMenu}
//               className="inline-flex items-center justify-center p-2"
//             >
//               <span className="sr-only">Open Main Menu</span>
//               {open == true ? "BACK" : "MENU"}
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* mobile-menu */}
//       {open ? (
//         <div className="md:hidden">
//           <div className="ox-2 right-0 h-screen w-screen items-center justify-between space-y-1 bg-orange-700 pb-0 pt-2 text-center sm:px-3">
//             {navlinks.map((link, index) => (
//               <a
//                 key={index}
//                 className={
//                   link.title === "INDIVIDUAL"
//                     ? "block px-3 py-2 text-white transition-all duration-500"
//                     : "block px-3 py-2 text-black transition-all duration-500"
//                 }
//                 href={link.link}
//               >
//                 {link.title}
//               </a>
//             ))}
//           </div>
//         </div>
//       ) : null}
//     </div>
//   );
// };

// export default Header;

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
  const isOnProjectPage = location.pathname.startsWith("/projects");
  const blueHeaderColor =
    isOnNewsPage || isOnProjectPage ? "bg-darkBlue" : "bg-stone-200";
  const blueTextColor =
    isOnNewsPage || isOnProjectPage ? "text-white" : "text-black";
  const blueLogoColor =
    isOnNewsPage || isOnProjectPage ? (
      <img src="/images/yp_logo_white.svg" alt="Logo" />
    ) : (
      <img src="/images/yp_logo_brown.svg" alt="Logo" />
    );
  const handleMenu = () => {
    setopen((prev) => !prev);
  };

  return (
    <div className={`${open ? "bg-orange-700" : blueHeaderColor} pt-12`}>
      <div className="mx-auto px-4 font-montserrat font-semibold sm:px-6 lg:h-[68px] lg:px-8">
        <div className="flex h-16 items-end justify-between">
          <div className="item-center flex">
            <a href="/" className=" h-[68px] w-[200px] object-cover">
              {open ? (
                <img src="/images/yp_logo_white.svg" alt="Logo" />
              ) : (
                blueLogoColor
              )}
            </a>
          </div>
          {/* navlinks */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navlinks.map((link, index) => (
                // <a
                //   key={index}
                //   className={` transition-all duration-500 hover:opacity-45 ${
                //     link.title === "INDIVIDUAL"
                //       ? "text-orange-700"
                //       : blueTextColor
                //   }`}
                //   href={link.link}
                // >
                //   {link.title}
                // </a>
                <a
                  // className="group relative h-5 overflow-hidden cursor-pointer"
                  className={` group relative h-5 cursor-pointer overflow-hidden ${
                    link.title === "INDIVIDUAL"
                      ? "text-orange-700"
                      : blueTextColor
                  }`}
                  key={index}
                >
                  <div
                    aria-hidden="true"
                    className="transition duration-300 group-hover:-translate-y-5 "
                  >
                    <div className="flex h-5 items-center justify-center">
                      <span className=""> {link.title}</span>
                    </div>
                    <div className="flex h-5 items-center justify-center">
                      <span className=""> {link.title}</span>
                    </div>
                  </div>
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
