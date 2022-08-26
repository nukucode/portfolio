import React, { useState, useEffect } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebaseConfig/Firebase";
import Blog from "./Blog";
import Link from 'next/link'
function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "blogs"), orderBy("timestamp", "desc")),
        (snapshot) => setBlogs(snapshot.docs)
      ),
    []
  );
  return (
    <>
      <div className="max-w-7xl mx-auto mt-[10rem]">
        <div className="space-y-3 flex items-center justify-between px-5 pb-[2rem]">
          <h3 className="font-bold text-lg md:text-2xl">📰 Latest Article.</h3>
          <div>
            <Link href="/blogs" passHref  className="point">
           <a>   Read all articles <ChevronRightIcon /></a>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-[5rem]">
          {blogs.map((blog) => (
            <Blog
              title={blog.data().title}
              id={blog.id}
              timestamp={blog.data().timestamp}
              description={blog.data().description}
              key={blog.data().id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Blogs;
