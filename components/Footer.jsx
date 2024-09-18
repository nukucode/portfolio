"use client";

import Link from "next/link";
import React from "react";

function Footer() {
  const getFullYear = () => new Date().getFullYear();
  return (
    <footer className="flex items-center justify-center py-[3.5rem]">
      <div className="w-[90%] flex items-center justify-between border-gray border-t-[0.1px] pt-[2.5rem]">
        <div>
          <p className="font-otterco text-[14px] text-linkColor">
            <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />{" "}
            {getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center space-x-1 md:space-x-3">
          <div>
            <Link href="https://linkedin.com/in/nukucode" target="_blank">
              <p className="link hidden md:block">Linkedin</p>
              <div className="icon">
                {/* <box-icon type="logo" name="linkedin-square" color="#242424" /> */}
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
    </footer>
  );
}

export default Footer;
