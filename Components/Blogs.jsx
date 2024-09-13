import React, { useState, useEffect } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Blog from "./Blog";
import Link from "next/link";
function Blogs({ posts }) {
  return (
    <>
      <div className=" mt-[10rem] text-gray-700">
        <div className="space-y-3 flex sm:items-center sm:flex-row justify-between px-5 pb-[2rem] flex-col">
          <h3 className="font-bold text-md  sm:text-lg md:text-2xl">
            📰 Latest Article.
          </h3>
          <div>
            <Link href="/articles" passHref className="point">
              <a>
                {" "}
                Read all articles <ChevronRightIcon />
              </a>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-[5rem] px-3">
          {posts &&
            posts.map(
              ({ _id, title = "", slug = "", publishedAt = "", body }) => (
                <Blog
                  timestamp={publishedAt}
                  id={_id}
                  slug={slug}
                  key={_id}
                  title={title}
                  body={body}
                />
              )
            )}
        </div>
      </div>
    </>
  );
}

export default Blogs;
