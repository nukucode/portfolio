import Head from "next/head";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HomePage from "../Components/HomePage";

export default function Home() {
  const style =
    "font-weight: bold; font-size: 50px; text-shadow: -0.06em 0 red,  0.06em 0 cyan;";
  console.log("%c Developer!", style);
  return (
    <>
      <Head>
        <title>raoankit - Software Engineer</title>
        <meta name="title" content="raoankit - Software Engineer" />
        <meta
          name="keywords"
          content="raoankit, raoankit website, rogers, ankit yadav, therogers, raoankit official, usersploit, hacker , coder, programmer , raoankit , rogersak , raoankit instagram, therogers github, github codes , portfolio raoankit, portfolio"
        />
        <meta
          name="description"
          content="Software Engineer based in India, an undergraduate student at Self."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://raoankit.netlify.app/" />
        <meta property="og:title" content="Ankit Yadav - Software Engineer" />
        <meta
          property="og:description"
          content="Software Engineer based in India. raoankit software enginner. raoankit"
        />
        <meta
          property="og:image"
          content="https://github.com/raoankit/portfolie-using-next-js/raw/main/portfolio.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://raoankit.netlify.app/"
        />
        <meta
          property="twitter:title"
          content="raoankit - Software Engineer"
        />
        <meta
          property="twitter:description"
          content="Software Engineer based in India, an undergraduate student at Self."
        />
        <meta
          property="twitter:image"
          content="https://github.com/raoankit/portfolie-using-next-js/raw/main/portfolio.png"
        />
      </Head>
      <div>
        {" "}
        <Header />
        <div className="max-w-5xl mx-auto">
          <HomePage />
          <Footer />
        </div>
      </div>
    </>
  );
}
