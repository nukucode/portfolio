import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Head from "next/head";
import { db } from "../../firebaseConfig/Firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Other from "../../Components/Other";
import Img from "../../Components/Img";

function Projects({ result }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JSON.parse(result));
  }, [result]);

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
          content="https://therogersak.netlify.app/projects"
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
          <h1 className="special">Life is like Pic - Ankit Yadav</h1>
          <div className="gallery">
            {data &&
              data.map((data, i) => (
                <Img img={data.imgUrl} timestamp={data.timestamp} classs={data.class} key={i} />
              ))}
          </div>
          <Other />
        </div>
      </div>
    </>
  );
}

export default Projects;

export async function getServerSideProps() {
  const colRef = collection(db, "gallery");
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
