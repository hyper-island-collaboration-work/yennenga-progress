import React from "react";
import ButtonLink from "./ButtonLink";
import { Link } from "react-router-dom";
import KontrollLogo from "./KontrollLogo";


const footerLinks = [
  {
    title: "Method",
    links: [
      {
        title: "What we do",
        link: "/",
      },
      {
        title: "How it works",
        link: "/",
      },
      {
        title: "Project",
        link: "/",
      },
      {
        title: "About",
        link: "/",
      },
      {
        title: "Contact",
        link: "/",
      },
    ],
  },
  {
    title: "Join us",
    links: [
      {
        title: "Donate",
        link: "/",
      },
      {
        title: "Crowdfund",
        link: "/",
      },
      {
        title: "Share your skill",
        link: "/",
      },
      {
        title: "Become a business partner",
        link: "/",
      },
      {
        title: "News",
        link: "/",
      },
    ],
  },
  {
    title: "Stay updated",
    links: [
      {
        title: "Facebook",
        link: "/",
      },
      {
        title: "Instagram",
        link: "/",
      },
      {
        title: "Youtube",
        link: "/",
      },
      {
        title: "MyNewsDesk",
        link: "/",
      },
      {
        title: "LinkedIn",
        link: "/",
      },
      {
        title: "Twitter",
        link: "/",
      },
    ],
  },
];


export default function Footer() {
  return (
    <footer className="bottom-0 left-0 right-0 bg-umber py-6 text-center text-light sm:text-left">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h3 className="font-montserrat text-xl md:pr-0 lg:text-5xl">
          Whistleblowing
        </h3>
        <p>
          About reportAbout reportAbout reportAbout reportAbout reportAbout
          report
        </p>
        <ButtonLink buttonName="REPORT" />
      </div>
      <div className="grid grid-cols-1 gap-5  px-10 pb-10 pt-16 font-plexSerif text-[16px] sm:grid-cols-2 md:grid-cols-4">
        <div className="flex flex-col gap-10 md:gap-6">
          <div className="uppercase">
            <p>Contact</p>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="uppercase">Sweden</p>
            <p className="w-full px-12 lg:w-2/3 lg:px-0">
              Tel: +46 735 176 200 Kvanrngatan 14, Stockholm Box 4040 102 61
              Stockholm
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            <p>Burkina Faso</p>
            <p className="px-12 md:px-0">
              Tel: +22 676 389 902 Nakamtenga, Municipality Ziniare BP 336,
              Ziniare
            </p>
            <p>yennengaprogress</p>
          </div>
        </div>
        {footerLinks.map((link) => (
          <div className="flex flex-col gap-10 md:gap-6" key={link.title}>
            <div className="uppercase">
              <p>{link.title}</p>
            </div>
            <div className="flex flex-col gap-2.5">
              {link.links.map((l) => (
                <Link
                  to={l.link}
                  className="font-plexSerif text-xl font-normal"
                  key={l.title}
                >
                  {l.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid justify-center gap-8 px-10 pb-10 pt-16 text-left sm:grid-cols-2 sm:justify-between lg:gap-4">
        <div className="space-y-4">
          <img src="/images/yp_logo_white.svg" alt="" />
          <p>Org. Nr.: 802445-9987</p>
        </div>
        <div className="space-y-4">
          <KontrollLogo />
          <p>90-konto: 900243-7</p>
        </div>
      </div>
    </footer>
  );
}
