import React from "react";
import Image from "next/image";
import Linkk from "next/link";
import Fade from "react-reveal/Fade";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
function Link({ icon, title, decription, button, link }) {
  return (
    <>
      <Fade bottom>
        <Linkk href={link} passHref>
          <a target="_blank" rel="noopener noreferrer">
            <div className=" text-white p-5 w-full flex items-center justify-center flex-col gap-3 bg-[#131920] rounded-2xl text-center h-[300px]">
              <div className="w-14 h-14 rounded-full">
                <Image
                  src={icon}
                  width={1000}
                  height={1000}
                  className="rounded-full"
                />
              </div>
              <h3 className="font-bold text-xl">{title}</h3>
              <p className="max-w-[200px] text-gray-500">{decription}</p>
              <button className="flex items-center justify-center gap-2">
                <span>{button}</span> <ArrowUpRightIcon className="h-4 pt-1" />
              </button>
            </div>
          </a>
        </Linkk>
      </Fade>
    </>
  );
}

export default Link;
