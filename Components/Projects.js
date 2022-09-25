import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig/Firebase";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Project from "./Project";
import Link from "next/link";
function Projects() {
  const [projects, setprojects] = useState();

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "projects"), orderBy("timestamp", "desc")),
        (snapshot) => setprojects(snapshot.docs)
      ),
    []
  );

  console.log(projects && projects[0]);

  return (
    <>
      <div className="">
        <div className="flex  justify-between md:flex-row flex-col space-y-5 mt-[8rem] my-[2rem] px-5">
          <div className="space-y-3">
            <h3 className="font-bold text-lg md:text-2xl">
              All Creative Works
            </h3>
            <p className="text-gray-400">
              Here's some of my projects that i have worked on.
            </p>
          </div>
          <div>
            <Link href="/projects" passHref className="point">
              <a target="_blank" rel="noopener noreferrer">
                {" "}
                Explore <ChevronRightIcon />
              </a>
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pb-5 grid grid-cols-1 md:grid-cols-2 gap-5 px-5 ">
          {projects && (
            <Project
              img1={projects[0].data().img}
              key={projects[0].id}
              id={projects[0].id}
              title={projects[0].data().title}
              description={projects[0].data().description}
              tag={projects[0].data().tag}
              img2={projects[0].data().img2}
              github={projects[0].data().github}
              demo={projects[0].data().demo}
            />
          )}

          {projects && (
            <Project
              img1={projects[1].data().img}
              key={projects[1].id}
              id={projects[1].id}
              title={projects[1].data().title}
              description={projects[1].data().description}
              tag={projects[1].data().tag}
              img2={projects[1].data().img2}
              github={projects[1].data().github}
              demo={projects[1].data().demo}
            />
          )}

        </div>
      </div>
    </>
  );
}

export default Projects;
