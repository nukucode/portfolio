import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

function Menu({ showMenu, setShowMenu }) {
  return (
    <ul
      className={`bg-[#1E1E1E] z-[999] transition-all duration-200 ease-in-out fixed  left-0 h-screen w-full flex  flex-col ${showMenu ? "flex opacty-100 top-0" : "-top-[100vh] opacity-0"} `}
    >
      <li className="w-full border-below h-[25vw] px-10 text-white flex items-center justify-between">
        <div className="">
          <h3 className="font-otterco text-[8vw] font-bold">.Portfolio</h3>
        </div>
        <button onClick={() => setShowMenu(false)} className="">
          <h3 className="font-otterco text-[6vw]">Menu</h3>
        </button>
      </li>
      <li className="border-below menu-link">
        <Link href="/">Overview</Link>
      </li>
      <li className="border-below menu-link">
        <Link href="/work">Work</Link>
      </li>
      <li className="border-below menu-link">
        <Link href="/">Feed</Link>
      </li>
      <li className="flex-1 relative flex items-center justify-center">
        <button className=" absolute bottom-[20vw] min-w-[80%] bg-white min-h-[16vw] px-10 rounded-lg flex items-center justify-between ">
          <span className=" font-otterco text-[5vw] ">Subscribe today</span>
          <ArrowUpRightIcon className="h-6 w-6" />
        </button>
      </li>
    </ul>
  );
}

export { Menu };
