import React from "react";
import Header from "../../components/Header";
import { Articles } from "../../components/Articles";
import Footer from "../../components/Footer";

function page() {
  return (
    <div className="bg-backgroundColor">
      <Header />
      <Articles />
      <Footer />
    </div>
  );
}

export default page;
