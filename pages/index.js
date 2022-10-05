import Head from "next/head";
import About from "../Components/About";
import Blogs from "../Components/Blogs";
import Contact from "../Components/Contact";
import Header from "../Components/Header";
import HomePage from "../Components/HomePage";
import Projects from "../Components/Projects";
import Footer from "../Components/Footer";
import Other from "../Components/Other";
import client from "../client";
import groq from "groq";

export default function Home({ posts }) {
  console.clear();
  const style =
    "font-weight: bold; font-size: 50px; text-shadow: -0.06em 0 red,  0.06em 0 cyan;";
  console.log("%c Developer!", style);
  return (
    <>
      <div className="text-white bg-transparent">
        <div className="mx-auto max-w-7xl selection:bg-green-500 selection:text-black ">
          <Head>
            <title>therogersak - Software Engineer</title>
            <meta name="title" content="therogersak - Software Engineer" />
            <meta
              name="keywords"
              content="therogersak, therogersak website, rogers, ankit yadav, therogers, therogersak official, usersploit, hacker , coder, programmer , therogersak , rogersak , therogersak instagram, therogers github, github codes , portfolio therogersak, portfolio"
            />
            <meta
              name="description"
              content="Software Engineer based in India, an undergraduate student at Self."
            />

            <meta property="og:type" content="website" />
            <meta
              property="og:url"
              content="https://therogersak.netlify.app/"
            />
            <meta
              property="og:title"
              content="therogersak - Software Engineer"
            />
            <meta
              property="og:description"
              content="Software Engineer based in India. therogersak software enginner. therogersak"
            />
            <meta
              property="og:image"
              content="https://github.com/therogersak/portfolie-using-next-js/raw/main/portfolio.png"
            />

            <meta property="twitter:card" content="summary_large_image" />
            <meta
              property="twitter:url"
              content="https://therogersak.netlify.app/"
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
              content="https://github.com/therogersak/portfolie-using-next-js/raw/main/portfolio.png"
            />
          </Head>

          <Header />
          <HomePage />
          <About />
          <Projects />
          <Blogs posts={posts} />
          <Contact />
          <Footer />
          <Other />
        </div>
      </div>
    </>
  );
}

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
