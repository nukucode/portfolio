import React from "react";
import { Blog } from "./Blog";

function Blogs() {
  return (
    <section className="w-full my-[100px] flex items-center justify-center">
      <div className="w-full flex items-center justify-center flex-col space-y-[5rem]">
        <div className="w-full relative flex justify-center items-center">
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] border-gray/30 border-t-[0.1px] w-[90%] " />
          <h3 className="font-otterco text-[1.8rem] bg-buttonColor w-fit px-4 py-2 rounded-xl -rotate-[5deg] text-white">
            📜 Read Articles
          </h3>
        </div>
        <div className="space-y-4">
          <Blog
            title="Unethical design of cookies windows"
            description="All the sites we visit today use trackers called cookies. There
          cookies (trackers) always track our internet footprint and collect
          data about us..."
            date="24 Sep, 2024 · 5min"
            category="Ethics"
          />
          <Blog
            title="10 keywords types of IOS"
            description="lorem ipsum dolor sit amet, consectetur adip non pro id el element ull lorem"
            date="12 June, 2023 · 10min"
            category="Design"
          />
          <Blog
            title="Learning Backend with Nukucode"
            description="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            date="02 Jun, 2022 · 2min"
            category="Development"
          />
        </div>
      </div>
    </section>
  );
}

export { Blogs };
