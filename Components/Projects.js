import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig/Firebase";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Project from "./Project";
import Link from 'next/link'
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
            <Link href="/projects" passHref  className="point">
             <a target="_blank" rel="noopener noreferrer"> Explore <ChevronRightIcon /></a>
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pb-5 grid grid-cols-1 md:grid-cols-2 gap-5 px-5 ">
          {projects &&
            projects.map((project) => (
              <Project
                img1={project.data().img}
                key={project.id}
                id={project.id}
                title={project.data().title}
                description={project.data().description}
                tag={project.data().tag}
                img2={project.data().img2}
                github={project.data().github}
                demo={project.data().demo}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
