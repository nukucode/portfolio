import Image from "next/image";
import React from "react";

function Service({ Icon, title, desc }) {
  return (
    <div className="max-w-[183px] space-y-[0.8rem]">
      <Image src={Icon} alt="icon" />
      <h4 className="font-otterco text-[18px]">{title}</h4>
      <p className="font-otterco text-[14px] font-light text-pColor">{desc}</p>
    </div>
  );
}

export { Service };
