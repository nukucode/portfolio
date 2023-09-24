import React from "react";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";

function Arrow({ link, title }) {
  return (
    <>
      <Link href={link}>
        <a
          aria-label={title}
          className="text-gray-600 flex items-center gap-3 py-8 w-fit pb-[6rem] md:pb-0 up"
          target="_blank"
        >
          <span>{title}</span>
          <EastIcon className="arrow-animation" />
        </a>
      </Link>
    </>
  );
}

export default Arrow;
