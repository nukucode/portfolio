"use client";

import React, { useEffect, useState } from "react";
import { Project } from "./Project";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { db } from "../firebase/config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { Title } from "./Title";

function Projects() {
  const [projects, setProjects] = useState([]);

  // fetching data from database
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "projects"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setProjects(
            snapshot.docs.map((doc) => {
              return { id: doc.id, data: doc.data() };
            })
          );
        }
      ),
    []
  );

  console.log("💪", projects);
  return (
    <section className="w-full my-[80px] flex items-center justify-center">
      <div className="w-full flex items-center justify-center flex-col space-y-[4rem]">
        <Title
          text="💼 Latest Projects"
          rotate="rotate-[2deg]"
          radius="full"
        />
        <div
          id="projects"
          className="relative px-[1rem] sm:px-[15%] snap-x snap-mandatory no-scrollbar w-full sm:overflow-y-hidden flex items-center flex-col sm:flex-row sm:overflow-x-scroll space-y-5 sm:space-x-5"
        >
          {projects &&
            React.Children.toArray(
              projects.map(
                ({
                  data: {
                    imageURL,
                    description,
                    title,
                    githubURL,
                    liveURL,
                    features,
                  },
                }) => (
                  <Project
                    imageUrl={imageURL}
                    desc={description}
                    title={title}
                    liveURL={liveURL}
                    githubURL={githubURL}
                    features={features}
                  />
                )
              )
            )}
        </div>
        <div className="space-x-3 hidden sm:block">
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
