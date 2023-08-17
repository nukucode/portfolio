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
        <title>Ankit Yadav - Software Engineer</title>
        <meta name="title" content="Ankit Yadav - Software Engineer" />
        <meta
          name="description"
          content="Software Engineer based in India, an undergraduate student at Self."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://raoankit.vercel.app"
        />
        <meta property="og:title" content="Ankit Yadav - Software Engineer" />
        <meta
          property="og:description"
          content="Software Engineer based in India, an undergraduate student at Self."
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
