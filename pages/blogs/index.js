import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Blog from "../../Components/Blog";
import { db } from "../../firebaseConfig/Firebase";
import Fade from "react-reveal/Fade";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Other from "../../Components/Other";
function Index({ result }) {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setData(JSON.parse(result));
  }, [result]);

  console.log(data);

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
        <meta property="og:url" content="https://therogersak.netlify.app/blogs" />
        <meta property="og:title" content="therogersak - Software Engineer" />
        <meta
          property="og:description"
          content="Software Engineer based in India, an undergraduate student at Self."
        />
        <meta property="og:image" content="https://github.com/therogersak/portfolie-using-next-js/raw/main/portfolio.png?raw=true" />

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
      <div className="bg-black">
        <div className=" text-white max-w-7xl space-y-5 mx-auto  sm:px-10">
          <Header />
          <div className="space-y-5 px-5 border-b border-gray-800 pb-5">
            <Fade left>
              <div className="max-w-7xl">
                <h1 className="sm:text-[4vw] text-[2rem]  font-extrabold">
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
                  placeholder="search projects"
                  className="input"
                />
                <SearchOutlinedIcon />
              </div>
            </Fade>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-[5rem] px-3">
            {Search &&
              Search.map((data) => (
                <Blog
                  timestamp={data.timestamp}
                  id={data.id}
                  key={data.id}
                  title={data.title}
                  description={data.description}
                  index
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

export default Index;

export async function getServerSideProps() {
  const colRef = collection(db, "blogs");
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
