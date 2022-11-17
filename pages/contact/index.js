import React, { useState } from "react";
import Header from "../../Components/Header";
import { ArrowUpRightIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Footer from "../../Components/Footer";
import { db } from "../../firebaseConfig/Firebase";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import Head from "next/head";
import Link from "../../Components/Link";


function Index() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const contactHandler = async (e) => {
    e.preventDefault();
    if (name && email && message && subject) {
      setLoading(true);

      const docRef = await setDoc(doc(db, "contacts", name), {
        timestamp: serverTimestamp(),
        name: name,
        email: email,
        subject: subject,
        message: message,
      });
    } else {
      alert("Please Fill this 😒");
    }

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setLoading(false);
  };
  return (
    <>
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
        <meta property="og:url" content="https://therogersak.netlify.app/" />
        <meta property="og:title" content="therogersak - Software Engineer" />
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
      <div className="text-black h-auto">
        <Header />
        <div className="border-b pb-[6rem] max-w-7xl mx-auto py-[2rem] mt-[1rem] mb-[4rem] px-5 flex lg:items-center justify-center flex-col lg:flex-row lg:gap-[10rem] gap-[2rem]">
          <div className="max-w-[400px]">
            <h1 className="text-[2.5rem] font-bold">Get in touch</h1>
            <p className="py-5">
              I'm always curious to hear about collaboration opportunities.
              Let's get in touch!
            </p>
            <a href="mailto:therogersak@gmail.com">
              <button className="p-[1rem] rounded-2xl bg-[#131920] flex items-center gap-3">
                <EnvelopeIcon className="h-10 bg-green-400 p-2 rounded-full" />
                <span className="font-bold text-white">therogersak@gmail.com</span>
              </button>
            </a>
          </div>
          <form className="w-full py-10 grid grid-cols-1 md:grid-cols-2 gap-5 ">
            <input
              type="text"
              placeholder="Your name"
              className="input-form"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Your email"
              className="input-form"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="subject"
              placeholder="Subject"
              className="input-form sm:col-span-2"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <textarea
              placeholder="Message"
              className="input-form max-w-full h-[150px] sm:col-span-2"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              type="submit"
              onClick={(e) => {
                contactHandler(e);
              }}
              className={`bg-gray-400' : 'bg-black h-[45px] flex items-center justify-center gap-2 duration-200 transition-all hover:bg-[#0a0a0a] ${
                loading ? "bg-gray-800 opacity-60" : "bg-black"
              } text-white`}
            >
              <span>{loading ? "Message Sended" : "Just Send"}</span>{" "}
              <ArrowUpRightIcon className="h-5 text-white" />
            </button>
          </form>
        </div>

        <div className="max-w-7xl mx-auto flex items-center justify-center flex-col gap-1 text-center">
          <h1 className="font-bold text-2xl">Follow Me</h1>
          <p className="p-5">You can also follow me social channels below</p>
          <div className="my-[3rem] px-5 sm:px-10 w-full grid xl:grid-cols-5 gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {" "}
            <Link
              icon="https://uploads-ssl.webflow.com/6310a2f29cd6000cb1750803/6310a2f39cd6006609750890_icon-1-social-media-video-x-template.svg"
              title="Youtube"
              decription="Subcribe to my Youtube channel for video content."
              button="Subscribe"
              link="https://youtube.com/@therogersak"
            />
            <Link
              icon="https://uploads-ssl.webflow.com/6310a2f29cd6000cb1750803/6310a2f39cd600ce4475088e_icon-2-social-media-video-x-template.svg"
              title="Facebook"
              decription="Follow me on Facebook for updates on written content."
              button="Follow me"
              link="https://facebook.com/therogersak"
            />
            <Link
              icon="https://uploads-ssl.webflow.com/6310a2f29cd6000cb1750803/6310a2f39cd60000d5750891_icon-3-social-media-video-x-template.svg"
              title="Twitter"
              decription="Follow me on Twitter where i build in Public."
              button="Follow me"
              link="https://twitter.com/therogerak"
            />
            <Link
              icon="https://uploads-ssl.webflow.com/6310a2f29cd6000cb1750803/6310a2f39cd60065b3750892_icon-4-social-media-video-x-template.svg"
              title="Instagram"
              decription="Follow me on Instagram where I share image + video."
              button="Follow me"
              link="https://instagram.com/therogersak"
            />
            <Link
              icon="https://uploads-ssl.webflow.com/6310a2f29cd6000cb1750803/6310a2f39cd600d81b75088f_icon-7-social-media-video-x-template.svg"
              title="Linkedin"
              decription="Follow me on Linkedin for updates on written content."
              button="Follow me"
              link="https://linkedin.com/in/therogersak"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
