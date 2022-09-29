import React from "react";

function Skill({ name , active }) {
  return (
    <>
      <div className={`border border-[#FF931E] text-black  shadow-xl  w-fit py-[10px] px-2 ${active && "bg-[#FF931E] text-white"}`}>
        <span className="whitespace-nowrap font-extrabold">{name}</span>
      </div>
    </>
  );
}

export default Skill;
