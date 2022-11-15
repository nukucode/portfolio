import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Project from "../../Components/Project";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Head from "next/head";
import { db } from "../../firebaseConfig/Firebase";
import Fade from "react-reveal/Fade";

import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Other from "../../Components/Other";
function Projects({ result }) {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setData(JSON.parse(result));
  }, [result]);

  const Search = data.filter((data) => {
    if (data === "") {
      return data;
    } else {
      return (
        data.title.toLowerCase().includes(query.toLowerCase()) ||
        data.description.toLowerCase().includes(query.toLowerCase())
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
        <meta property="og:url" content="https://therogersak.netlify.app/projects" />
        <meta property="og:title" content="therogersak - Software Engineer" />
        <meta
          property="og:description"
          content="Software Engineer based in India, an undergraduate student at Self."
        />
        <meta property="og:image" content="https://github.com/therogersak/portfolie-using-next-js/raw/main/portfolio.png?raw=true" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://therogersak.netlify.app/projects"
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
        <div className=" text-black space-y-5 mt-[3rem] max-w-7xl mx-auto  sm:px-10">
          <div className="space-y-5 px-5 border-b  border-gray-800 pb-5 ">
            <Fade left>
              <div>
                <h1 className="md:text-[4vw] text-[2rem] mb-3 font-extrabold text-white">
                  Projects
                </h1>
                <p className="text-gray-400 max-w-2xl">
                  I love building projects and practice my engineering skills,
                  here's an archive of things that I've worked on
                </p>
              </div>
            </Fade>
            <Fade top>
              <div className="search">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="search projects"
                  className="input"
                />
                <SearchOutlinedIcon />
              </div>
            </Fade>
          </div>
          <div className="pb-5 grid grid-cols-1 md:grid-cols-2 gap-5 px-5">
            {Search &&
              Search.map((data) => (
                <Project
                  img1={data.img}
                  key={data.id}
                  title={data.title}
                  id={data.id}
                  tag={data.tag}
                  github={data.github}
                  demo={data.demo}
                  timestamp={data.timestamp}
                  description={data.description}
                />
              ))}
          </div>
          <Footer />
          <Other />
        </div>
      </div>
    </>
  );
}

export default Projects;

export async function getServerSideProps() {
  const colRef = collection(db, "projects");
  const q = query(colRef, orderBy("timestamp", "desc"));
  const data = await getDocs(q);

  const results = [];

  data.forEach((doc) => {
    results.push({
      ...doc.data(),
      id: doc.id,
      timestamp: doc.data().timestamp.toMillis(),
    });
  });

  return {
    props: { result: JSON.stringify(results) },
  };
}
