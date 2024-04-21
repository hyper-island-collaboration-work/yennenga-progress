import React from 'react'
import RightArrowOneIcon from "./Icons/RightArrowOneIcon";
import FaceBookIcon from './Icons/FacebookIcon'
import InstagramIcon from './Icons/InstagramIcon';
import LinkedinIcon from './Icons/LinkedinIcon';
import ButtonLink from "./ButtonLink";


export default function Footer() {
    return (
        <footer className="bottom-0 left-0 right-0 bg-umber py-6 text-center text-light">
          <div className="flex flex-col items-center justify-center space-y-4">
            <h3 className="font-montserrat text-xl md:pr-0 lg:text-5xl">
              Whistleblowing
            </h3>
            <p>
              About reportAbout reportAbout reportAbout reportAbout reportAbout
              report
            </p>
            <div className="">
            <div className="transistion flex w-fit cursor-pointer items-center gap-2 rounded-xl bg-light p-1 pr-2 font-plexSerif text-black hover:scale-[1.02]">
            <ButtonLink buttonName={"For Business Partner"} />
            <div className="mt-0.5">
              <RightArrowOneIcon width="14" height="14" fill="black" />
            </div>
          </div>
            </div>
          </div>
          <div className="flex flex-col flex-wrap items-start justify-between gap-5 px-10 pb-10 pt-16 md:flex-row md:gap-0">
            <div className="md:w-1/4 ">
              <img src="/images/yp_logo_white.svg" alt="logo" />
            </div>
            <div className="flex flex-1 flex-wrap justify-between gap-4 py-6 text-left md:w-3/4 md:gap-0 md:py-0 ">
              <div className="flex flex-col gap-2 md:w-1/3 md:gap-5">
                <span className="font-bold">Kontakt</span>
                <span>E-post: kansli@efeafeadfawe.se</span>
              </div>
              <div className="flex flex-col gap-2 md:w-1/3 md:gap-5">
                <p className="font-bold">Post- och besöksadress</p>
                <p className="md:w-2/3">
                  Yannenga Progress Karlbergsvägen 86A 3tr 113 35 Stockholm
                </p>
              </div>
              <div className="flex justify-end gap-2 md:w-1/3 md:gap-5">
                <InstagramIcon/>
                <FaceBookIcon/>
                <LinkedinIcon/>
              </div>
            </div>
          </div>
        </footer>
      )
    }
    
    
    
    
    
    
    