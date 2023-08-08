import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Blog from "../../Components/Blog";
import Fade from "react-reveal/Fade";
import Other from "../../Components/Other";
import client from "../../client";
import groq from "groq";
function Index({ posts }) {
  const [query, setQuery] = useState("");

  console.log(posts);

  const Search = posts.filter((data) => {
    if (data === "") {
      return data;
    } else {
      return (
        data?.title.toLowerCase().includes(query.toLowerCase())
      );
    }
  });
  return (
    <>
      <Head>
        <title>therogersak - Software Engineer</title>
        <meta name="title" content="therogersak - Software Engineer" />
        <meta
          name="description"
          content="Software Engineer based in India, an undergraduate student at Self."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://therogersak.netlify.app/blogs"
        />
        <meta property="og:title" content="therogersak - Software Engineer" />
        <meta
          property="og:description"
          content="Software Engineer based in India, an undergraduate student at Self."
        />
        <meta
          property="og:image"
          content="https://github.com/therogersak/portfolie-using-next-js/raw/main/portfolio.png?raw=true"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://therogersak.netlify.app/blogs"
        />
        <meta
          property="twitter:title"
          content="therogersak - Software Engineer"
        />
        <meta
          property="twitter:description"
          content="Software Engineer based in India, an undergraduate student at Self."
        />
        <meta
          property="twitter:image"
          content="https://github.com/therogersak/portfolie-using-next-js/raw/main/portfolio.png?raw=true"
        />
      </Head>
      <div>
          <Header />
        <div className=" text-black max-w-7xl mt-[2rem] space-y-5 mx-auto  sm:px-10">
          <div className="space-y-5 px-5  border-b border-gray-800 pb-5">
            <Fade left>
              <div className="max-w-7xl">
                <h1 className="sm:text-[4vw] text-[2rem]  font-extrabold text-black">
                  Articles
                </h1>
                <p className="text-gray-400 max-w-2xl">
                  This is where I share my writings on programming, tutorials,
                  and my experiences.
                </p>
              </div>
            </Fade>
            <Fade top>
              <div className="search">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="search blogs"
                  className="input"
                />
                <SearchOutlinedIcon />
              </div>
            </Fade>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-[5rem] px-3">
            {Search &&
              Search.map(
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
          <Other />
        </div>
      </div>
    </>
  );
}

export default Index;

export async function getServerSideProps() {
  const posts = await client.fetch(groq`
  *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
`);
  return {
    props: {
      posts,
    },
  };
}
