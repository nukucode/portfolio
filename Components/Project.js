import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
function Project({
  img1,
  id,
  first,
  img2,
  title,
  description,
  demo,
  github,
  tag,
  index,
}) {
  return (
    <>
      <motion.div
        variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 3 }}
      >
        <div className="max-w-2xl overflow-x-scroll  h-auto sm:px-6 px-2 sm:py-8 py-2 duration-350 transition-all border-b border-b-green-400">
          <div>
            <Image
              src={img1}
              alt={title}
              width={1000}
              height={550}
              loading="lazy"
              objectFit="contain"
            />
          </div>
          <div className="space-y-3 px-3">
            <div className="flex items-center justify-between flex-col gap-3 sm:flex-row my-2">
              <h1 className="font-bold text-white text-md  sm:text-lg">{title}</h1>
              <div className="space-x-5 mb-3">
                <Link href={`${github}`} passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                  </a>
                </Link>
                <Link href={`${demo}`} passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    <LaunchIcon />
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-5 overflow-x-scroll scrollbar-hide">
              {tag &&
                tag.map((name) => (
                  <div className="border border-green-300 text-green-400 py-1 px-3 rounded-full font-bold capitalize whitespace-nowrap">
                    <span className="text-sm">{name}</span>
                  </div>
                ))}
            </div>
            <div className="border-t border-gray-800 pt-2">
              <p className="text-gray-500 text-[15px] sm:text-lg capitalize ">
                {description}.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Project;
