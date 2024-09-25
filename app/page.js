import React from "react";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Services from "../components/Services";

function Index() {
  return (
    <div className="bg-backgroundColor page">
      <Home />
      <Services />
      <Contact />
    </div>
  );
}
export default Index;
