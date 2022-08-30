import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import {
  FaReact,
  FaPython,
  FaPepperHot,
  FaJs,
  FaSass,
  FaCode,
  FaGithub,
  FaExternalLinkAlt,
  FaLaravel,
  FaBootstrap,
  FaDatabase,
} from "react-icons/fa";
import { SiNextDotJs } from "react-icons/si";
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
  const getTag = (tag) => {
    let values = [];
    if (tag == "react-js") {
      values[0] = "#61dbfb";
      values[1] = FaReact;
    } else if (tag == "python") {
      values[0] = "#4B8BBE";
      values[1] = FaPython;
    } else if (tag == "javascript") {
      values[0] = "#F0DB4F";
      values[1] = FaJs;
    } else if (tag == "sass") {
      values[0] = "#cd6799";
      values[1] = FaSass;
    } else if (tag == "tailwind") {
      values[0] = "#36B7F0";
      values[1] = FaPepperHot;
    } else if (tag == "recoil") {
      values[0] = "#3578E5";
      values[1] = FaLaravel;
    } else if (tag == "bootstrap") {
      values[0] = "purple";
      values[1] = FaBootstrap;
    } else if (tag == "redux") {
      values[0] = "#764abc";
      values[1] = FaDatabase;
    } else if (tag == "next-js") {
      values[0] = "#3CCF91";
      values[1] = SiNextDotJs;
    } else if (tag === "firebase") {
      values[0] = "#F99F13";
      values[1] = SiNextDotJs;
    } else {
      values[0] = "#aeaeae";
      values[1] = FaCode;
    }
    return values;
  };

  return (
    <>
      <motion.div  variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 3 }}>
        <div className="max-w-2xl overflow-x-scroll  h-auto borderbg-slate-900 rounded-lg sm:px-6 px-2 sm:py-8 py-2 ring-1 ring-slate-800 bg-slate-900/30 shadow-xl">
          <div>
            <Image
              src={img1}
              alt={title}
              width={1000}
              height={550}
              objectFit="contain"
            />
          </div>
          <div className="space-y-3 px-3">
            <div className="flex items-center justify-between flex-col gap-3 sm:flex-row my-2">
              <h1 className="font-bold text-md  sm:text-lg">{title}</h1>
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
                tag.map((name, i) => (
                  <div
                    key={i}
                    style={{
                      background: `${getTag(name)[0]}50`,
                      color: `${getTag(name)[0]}`,
                    }}
                    className="px-2 space-x-2 whitespace-nowrap w-fit  py-1 rounded-md shadow-xl "
                  >
                    <span className="text-sm">{name}</span>
                  </div>
                ))}
            </div>
            <div className="border-t border-gray-800 pt-2">
              <p className="text-gray-400 text-[15px] sm:text-lg capitalize ">
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
