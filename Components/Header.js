import React, { useState } from "react";
import Image from "next/image";
import logo from "../asest/logoo.png";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import { Bars3Icon } from "@heroicons/react/24/solid";

function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Fade top>
        <div className="absolute top-0 left-0 right-0 bg-gray-50 z-50">
          <div className="flex items-center justify-between max-w-6xl mx-auto text-gray-700 p-5">
            <div className="w-14 h-14">
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

            <div className="">
              <ul
                className={` ${
                  toggle ? "mini mini_show" : "mini"
                } items-center sm:space-x-10 flex font-bold`}
              >
                <Link href="/">
                  <li className=" cursor-pointer  transition-all duration-200">
                    <a>About</a>
                  </li>
                </Link>

                <Link href="/projects">
                  <li className=" cursor-pointer  transition-all duration-200 ">
                    <a>Projects</a>
                  </li>
                </Link>

                <Link href="/blogs" passHref>
                  <li className=" cursor-pointer  transition-all duration-200">
                    <a>Blogs</a>
                  </li>
                </Link>
              </ul>
              <div onClick={() => setToggle(!toggle)}>
                <Bars3Icon className="h-8 block md:hidden cursor-pointer" />
              </div>
            </div>
          </div>
          <div
            className={` ${toggle ? "layer layer_show" : "layer"}`}
            onClick={() => setToggle(false)}
          ></div>
        </div>
      </Fade>
    </>
  );
}

export default Header;
