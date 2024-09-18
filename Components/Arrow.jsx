import React from "react";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";

function Arrow({ link, title }) {
  return (
    <>
      <Link
        className="text-gray-600 flex items-center gap-3 py-8 w-fit pb-[6rem] md:pb-0 up"
        href={link}
      >
        <span>{title}</span>
        <EastIcon className="arrow-animation" />
      </Link>
    </>
  );
}

export default Arrow;
