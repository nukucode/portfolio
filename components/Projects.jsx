"use client";

import React from "react";
import { Project } from "./Project";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

function Projects() {
  return (
    <section className="w-full my-[80px] flex items-center justify-center">
      <div className="w-full flex items-center justify-center flex-col space-y-[4rem]">
        <div className="w-full relative flex justify-center items-center">
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] border-gray/30 border-t-[0.1px] w-[90%] " />
          <h3 className="font-otterco text-[1.8rem] bg-buttonColor w-fit px-4 py-2 rounded-full rotate-[2deg] text-white">
            💼 Latest Projects
          </h3>
        </div>
        <div
          id="projects"
          className="relative px-[1rem] sm:px-[15%] snap-x snap-mandatory no-scrollbar w-full sm:overflow-y-hidden flex items-center flex-col sm:flex-row sm:overflow-x-scroll space-y-5 sm:space-x-5"
        >
          <Project
            desc="Redesign of the app created by CatSalut with the aim of exploring
              new useful functionalities for citizens"
            imageUrl="https://cdn.dribbble.com/userupload/14416617/file/original-bdedce672bd6aed194f028559abbdf86.jpg?resize=2048x1536"
            title="📚 Task App"
          />

          <Project
            desc="Resumen de los diferentes proyectos en los que formé parte durante mi periodo en Mediktor como Product Designer"
            imageUrl="https://cdn.dribbble.com/userupload/10893872/file/original-cc31f9fbe55507e4a4158b1dc051a87e.png?resize=2048x1536"
            title="🍿 Movie App"
          />

          <Project
            desc="Rediseño de ecommerce para adaptarse al nuevo branding y con el objetivo de ser autogestionable y facilitar la compra internacional"
            title="❤️‍🩹 Dating App"
            video="https://cdn.dribbble.com/userupload/14421441/file/original-a55e397ad959514f1913e7bbb6f8ba30.mp4"
          />
        </div>
        <div className="space-x-3">
          <button
            onClick={() => {
              document.getElementById("projects").scrollLeft -= 800;
            }}
          >
            <ChevronLeftIcon className="h-7 w-7" />
          </button>
          <button
            onClick={() => {
              document.getElementById("projects").scrollLeft += 800;
            }}
          >
            <ChevronRightIcon className="h-7 w-7" />
          </button>
        </div>
      </div>
    </section>
  );
}

export { Projects };
