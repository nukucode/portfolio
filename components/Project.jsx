import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

function Project({ imageUrl, title, desc, video }) {
  // High Light Component
  const HighLightComponent = ({ text }) => (
    <div className="bg-normalBackgroundColor w-fit py-2 px-3 rounded-xl">
      <span className="font-otterco font-light text-[14px]">{text}</span>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.85 }}
      className="bg-[white] h-full sm:max-h-[416px] w-full sm:w-[807px] rounded-2xl"
    >
      <div className="flex sm:items-center justify-center flex-col-reverse sm:flex-row sm:space-x-5 p-[1rem] sm:p-[2.5rem]">
        <div className="space-y-6 mt-[2rem] sm:mt-0">
          <div>
            <h1 className="font-otterco font-medium text-[2rem]">{title}</h1>
            <p className="font-otterco text-gray mt-4 max-w-[400px]">{desc}</p>
          </div>
          <div className="space-y-2">
            <HighLightComponent text="🤍 Personal Design" />
            <HighLightComponent text="⏰ 2-day design sprint" />
          </div>

          <div className="pt-[1rem]">
            <Link
              className="flex items-center button h-[45px] w-[140px] border-buttonColor border-[1px] justify-center space-x-2 drop-shadow-md"
              href="/"
            >
              <button className="font-otterco text-[14px] hover:underline">
                See Project{" "}
              </button>
              <ArrowRightIcon className="h-[14px]" />
            </Link>
          </div>
        </div>

        <div className="w-full sm:w-[450px] h-full">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt="task app by nukucode"
              width={200}
              height={200}
              className="w-full h-full rounded-lg"
            />
          ) : (
            <video
              src={video}
              autoPlay
              loop
              muted
              className="w-full h-full rounded-lg"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}

export { Project };
