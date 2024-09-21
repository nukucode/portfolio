import React from "react";

function Title({ text, radius, bgColor, rotate }) {
  return (
    <div className="w-full relative flex justify-center items-center">
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] border-gray/30 border-t-[0.1px] w-[90%] " />
      <h3
        className={`font-otterco text-[1.8rem] bg-buttonColor w-fit px-4 py-2 rounded-${radius} ${rotate} text-white`}
      >
        {text}
      </h3>
    </div>
  );
}

export { Title };
