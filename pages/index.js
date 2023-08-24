
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HomePage from "../Components/HomePage";
import { NextSeo } from "next-seo";

export default function Home() {
  const style =
    "font-weight: bold; font-size: 50px; text-shadow: -0.06em 0 red,  0.06em 0 cyan;";
  console.log("%c Developer!", style);
  return (
    <>
      <NextSeo
        title="Ankit Yadav - Software Engineer"
        description="A minimalist obsessed with the web world, exploring design with curiosity."
        canonical="https://raoankit.vercel.app"
      />
      <div>
        <Header />
        <div className="max-w-5xl mx-auto">
          <HomePage />
          <Footer />
        </div>
      </div>
    </>
  );
}
