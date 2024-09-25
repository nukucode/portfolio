"use client"

import React from "react";
import { Service } from "./Service";
import SVG1 from "../public/svg/svgexport-3.svg";
import SVG2 from "../public/svg/svgexport-4.svg";
import SVG3 from "../public/svg/svgexport-5.svg";
import SVG4 from "../public/svg/svgexport-6.svg";

function Services() {
  return (
    <section className="max-w-5xl pt-[6rem] pb-[3rem] mx-auto">
      <div>
        <h3 className="from-black to-[#585757] bg-gradient-to-r bg-clip-text text-transparent font-otterco font-medium text-[2.3rem] leading-[54px] text-center">
          Collaborate with brands and agencies <br /> to create impactful
          results.
        </h3>

        <div className="space-y-[3rem] py-[3.5rem]">
          <div className="relative">
            <div className="bg-black/10 w-full h-[0.1px] absolute top-[24px] left-0" />
            <div className="bg-white -rotate-6 mx-auto border-gray/10 h-[48px] max-w-[125px] rounded-full flex items-center justify-center ">
              <span className="font-otterco font-medium text-[12px] z-[999]">
                Services
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4  place-items-center place-content-center gap-[2rem] px-[2rem]">
            <Service
              Icon={SVG1}
              title={"UX & UI"}
              desc={
                "Designing interfaces that are intuitive, efficient, and enjoyable to use."
              }
            />
            <Service
              Icon={SVG2}
              title={"Web & Mobile App"}
              desc={
                "Transforming ideas into exceptional web and mobile app experiences."
              }
            />
            <Service
              Icon={SVG3}
              title={"Design & Creative"}
              desc={
                "Crafting visually stunning designs that connect with your audience."
              }
            />
            <Service
              Icon={SVG4}
              title={"Development"}
              desc={
                "Bringing your vision to life with the latest technology and design trends."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
