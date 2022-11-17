import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header className="max-w-6xl flex items-center sm:p-10 p-5 justify-between mx-auto">
        <Fade top>
          <div className="w-14 h-14 border-green-400 border p-[.8px] rounded-full">
            <Link href="/">
              <Image
                src="https://avatars.githubusercontent.com/u/79178437?s=400&u=cff256e8ef77217e73d6645b4d4e4ce32f3f114b&v=4"
                alt="therogersak"
                width={1000}
                height={1000}
                objectFit="contain"
                className="cursor-pointer rounded-full"
              />
            </Link>
          </div>

          <ul
            className={`${
              toggle ? "mini mini-show" : "mini"
            } flex items-center justify-center gap-10 font-bold text-white`}
          >
            <Link href="/contact">
              <a className="link">Contact</a>
            </Link>

            <Link href="/projects">
              <a className="link">Projects</a>
            </Link>

            <Link href="/blogs">
              <a className="link">Blog</a>
            </Link>
          </ul>

          <div className="z-[1100] md:hidden">
            {toggle ? (
              <XMarkIcon
                className={`menu-btn ${toggle ? "text-white" : "text-black"}`}
                onClick={() => setToggle(!toggle)}
              />
            ) : (
              <Bars3Icon
                className="menu-btn"
                onClick={() => setToggle(!toggle)}
              />
            )}
          </div>
        </Fade>
      </header>
    </>
  );
}

export default Header;
