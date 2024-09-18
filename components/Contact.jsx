"use client";

import React from "react";
import Link from "next/link";
import Footer from "./Footer";

function Contact() {
  return (
    <section className="bg-[#F8F8F8] mt-5 rounded-tl-[90px] rounded-tr-[90px] pt-[6rem]">
      <div className="flex items-center flex-col justify-center space-y-8">
        <div>
          <h3 className="font-otterco text-[20px] text-gray rotate-6">
            💬 Let's Chat
          </h3>
        </div>
        <div>
          <h1 className="font-otterco font-medium leading-[44px] sm:leading-[64px] text-[2.3rem] sm:text-[3.5rem] text-center from-black to-[#585757] bg-gradient-to-r bg-clip-text text-transparent">
            Tell me about your next <br /> project
          </h1>
        </div>
        <div className="flex items-center space-x-3 pt-2">
          <Link className="button__div" href="mailto:whiteblueotaku@gmail.com">
            <button className="button bg-black flex items-center justify-center space-x-2">
              {/* <box-icon name="envelope" color="#ffffff" /> */}
              <span className="button__text text-white hover:underline transition-all ease-in">
                Email Me
              </span>
            </button>
          </Link>
          <Link
            className="button__div"
            href="https://wa.me/91+7427835521"
            target="_blank"
          >
            <button className="button bg-white">
              <span className="button__text text-black hover:underline transition-all ease-in">
                Whatsapp
              </span>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Contact;
