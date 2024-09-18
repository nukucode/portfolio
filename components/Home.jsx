"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Img from ".././public/images/gojo.jpeg";
import Header from "./Header";

function Home() {
  return (
    <section className="bg-[#F2F1F0] rounded-bl-[90px] h-[650px] sm:h-[742px] rounded-br-[90px]">
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
              className="rounded-full grayscale"
            />
          </div>
          <div className="absolute top-[40px] -right-[100px] -rotate-[10deg] bg-white rounded-full w-fit px-6 py-4">
            <p className="font-otterco font-regular text-[12px]">
              Ankit Yadav 👋🏻
            </p>
          </div>
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
