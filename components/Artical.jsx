import Link from "next/link";
import React from "react";

function Article({ title, description, category, date }) {
  return (
    <div
      className="max-w-[600px] space-y-[2px] hover:border-gray/20 hover:border-[0.1px] m-[10px] p-5 hover:rounded-md"
    >
      <h4 className="font-otterco font-light uppercase text-[14px] tracking-widest">
        {category}
      </h4>
      <Link href="/articles/fgd">
        <h2 className="font-otterco font-medium leading-[30px] text-[1.5rem] hover:underline">
          {title}
        </h2>
      </Link>
      <p className="font-otterco text-[16px] text-gray">{description}</p>
      <div className="pt-2">
        <p className="font-otterco text-[14px] font-light">{date}</p>
      </div>
    </div>
  );
}

export { Article };
