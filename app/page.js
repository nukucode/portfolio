import React from "react";
import Home from "../components/Home";
import Contact from "../components/Contact";
import { Projects } from "../components/Projects";
import { Blogs } from "../components/Blogs";

function Index() {
  return (
    <div className="bg-backgroundColor">
      <Home />
      <Projects />
      <Blogs />
      <Contact />
    </div>
  );
}
export default Index;
