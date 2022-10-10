import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
function Other() {


  return (
    <>
      <div
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
        className={`fixed bottom-5 right-5 bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-gray-900/70 hover:border-gray-900/20  animate-pulse`}
      >
        <KeyboardArrowUpIcon className="top" />
      </div>
    </>
  );
}

export default Other;
