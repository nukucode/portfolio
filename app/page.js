import React from "react";
import Home from "../components/Home";
import Contact from "../components/Contact";
import { Projects } from "../components/Projects";
import { Articles } from "../components/Articles";

function Index() {
  return (
    <div className="bg-backgroundColor">
      <Home />
      <Projects />
      <Articles />
      <Contact />
    </div>
  );
}
export default Index;
