"use client";

import Link from "next/link";
import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Header from "./Header";
import "../app/locomotive-scroll.css";
import Img from "../public/images/gojo.jpeg";
import Image from "next/image";
import { motion } from "framer-motion";

function Home() {
  return (
    <section className="relative bg-main h-screen">
      <Header />
      {/* Mid Section */}
      <div className=" mt-[9rem] flex flex-col items-center justify-center space-y-4">
        <div className="relative">
          <div className="w-[130px] h-[130px] border-white border-4 rounded-full">
            <Image
              src={Img}
              width={164}
              height={164}
              quality={100}
              alt="Picture of the author"
              className="rounded-full w-full h-full object-cover grayscale"
            />
          </div>
          <motion.div
            animate={{
              y: [20, 0, 0, 20],
              rotate: ["-6deg", "-6deg"],
            }}
            transition={{ repeat: Infinity, duration: 5, repeatDelay: 0.1 }}
            className="absolute top-[25px] -right-[95px] border-gray/10 border-[0.1px] -rotate-[10deg] bg-white rounded-full w-fit px-6 py-4"
          >
            <p className="font-otterco font-regular text-[12px]">
              Ankit Yadav 👋🏻
            </p>
          </motion.div>
        </div>
        <div>
          <h1 className="font-otterco font-medium leading-[44px] sm:leading-[64px] text-[2.3rem] sm:text-[3.5rem] text-center from-black to-[#585757] bg-gradient-to-r bg-clip-text text-transparent">
            Building <span>digital</span> <br /> <span>products</span>, brands,
            and <br /> <span>experience.</span>
          </h1>
        </div>

        <h3 className="font-otterco text-[1.2rem] text-center">
          Ready to Elevate Your Next{" "}
          <span className="text-yellow-600 font-bold">Project?</span>
          <br /> Let’s Build Something Extraordinary Together.
        </h3>

        <Link
          href="/"
          className="flex items-center justify-between mt-[1rem] min-w-[230px] hero-button-link transition-all ease-in-out duration-300 hover:text-[#1db954]"
        >
          <span className=" text-[1.8rem]  font-otterco ">Explore Plans</span>
          <ArrowUpRightIcon className="h-6 w-6 " />
        </Link>
      </div>
    </section>
  );
}

export default Home;
