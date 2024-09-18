"use client";

import Link from "next/link";
import React, { useState } from "react";


function Header() {
  const [copy, setCopy] = useState(false);

 
  return (
    <header className="w-full flex items-center justify-center">
      <div className="min-w-[90%] pt-[40px] flex items-center justify-between ">
        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="bg-borderColor rounded-full border-gray border-[0.01px] px-1 py-1 flex items-center md:space-x-4 h-[45px] sm:h-[55px]">
            <div className="hidden md:block md:pl-3">
              <p className="  font-otterco font-regular text-[12px] text-gray">
                whiteblueotaku@gmail.com
              </p>
            </div>
            <button
             
              className="bg-black md:bg-white rounded-full h-full  px-6 sm:px-9 w-full "
            >
              <span className="font-otterco font-medium text-[12px] hidden md:block">
                {!copy ? "Copy" : "Copied!"}
              </span>
              <Link href={'mailto:whiteblue@gmail.com'}>
                <span className="font-otterco font-medium text-[12px] text-white md:hidden">
                  Email
                </span>
              </Link>
            </button>
          </div>
          <div className="border-borderColor border-4 rounded-full h-[45px] sm:h-[55px]">
            <Link
              href="https://drive.google.com/file/d/1Bl7r6c7SARKUgcfqnXygmxSeSsvqTM_6/view?usp=sharing"
              target="_blank"
            >
              <button className="bg-white rounded-full px-6 sm:px-10 w-full h-full">
                <span className="font-otterco font-medium text-[12px]">CV</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-1 md:space-x-3">
          <div>
            <Link href="https://linkedin.com/in/nukucode" target="_blank">
              <p className="link hidden md:block">Linkedin</p>
              <div className="icon">
                {/* <box-icon type="logo" name="linkedin" color="#242424" /> */}
              </div>
            </Link>
          </div>
          <span className="text-[14px] hidden md:block">/</span>
          <div>
            <Link href="https://github.com/nukucode" target="_blank">
              <p className="link hidden md:block">Github</p>
              <div className="icon">
                {/* <box-icon type="logo" name="github" color="#242424" /> */}
              </div>
            </Link>
          </div>
          <span className="text-[14px] hidden md:block">/</span>
          <div>
            <Link href="https://x.com/nukucode" target="_blank">
              <p className="link hidden md:block">Twitter</p>
              <div className="icon">
                {/* <box-icon name="twitter" type="logo" color="#242424" /> */}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
