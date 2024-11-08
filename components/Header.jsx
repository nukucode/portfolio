"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu } from "./Menu";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header
        className={`w-full  items-center justify-center ${showMenu ? "hidden" : "flex"}`}
      >
        <div className="w-full flex items-center justify-between mt-[1.5rem] px-[25px]">
          {/* LEFT SECTION OF HEADER */}
          <div>
            <h3 className="font-otterco text-[2.00em] font-bold">.Portfolio</h3>
          </div>

          {/* MIDDLE SECTION OF HEADER */}
          <ul
            className={`hidden sm:flex items-center space-x-10 font-otterco text-[1.50em]`}
          >
            <Link className="border-hover" href="/">
              <li>Overview</li>
            </Link>

            <Link href="/overview">
              <li className="border-hover active">Work</li>
            </Link>

            <Link href="/overview">
              <li className="border-hover">Feed</li>
            </Link>
          </ul>

          {/* RIGHT SECTION OF HEADER */}
          <div className="flex items-center space-x-6">
            <div className="border-hover">
              <h3 className="font-otterco text-[1.50em]">Pricing</h3>
            </div>

            {/* Menu Button */}

            <button
              onClick={() => setShowMenu(true)}
              className="border-hover block sm:hidden"
            >
              <h3 className="font-otterco text-[1.50em]">Menu</h3>
            </button>
          </div>
        </div>
      </header>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
}

export default Header;
