"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Img from ".././public/images/gojo1.jpeg";
import Header from "./Header";
import { motion } from "framer-motion";

function Home() {
  return (
    <section className=" bg-[#F8F8F8] rounded-bl-[90px] h-[650px] sm:h-[742px] rounded-br-[90px] drop-shadow-sm">
      <Header />
      <div className=" mt-[130px] md:mt-[90px] flex flex-col items-center justify-center space-y-4">
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
            Building digital <br /> products, brands, and <br /> experience.
          </h1>
        </div>
        <div className="pt-6">
          <Link href="/projects">
            <button className="bg-black h-[60px] min-w-[190px] flex items-center justify-center space-x-3 rounded-full">
              <span className="font-otterco text-[12px] text-white hover:underline transition-all duration-150 ease-in">
                Latest Shorts
              </span>
              <ArrowUpRightIcon className="h-[12px] text-white underline" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
