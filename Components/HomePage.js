import Fade from "react-reveal/Fade";
import Link from "next/link";
import Image from "next/image";

function HomePage() {
  const share = () => {
    const data = {
      title: "therogersak",
      text: "Connect With therogersak To Learn These Skills  Development, Ethical Hacking, Programing, Coding, Make  Genius",
      url: "https://therogersak.vercel.app/",
    };

    if (navigator.canShare && navigator.canShare(data)) {
      navigator.share(data);
    } else {
      alert("bsdk");
    }
  };
  return (
    <>
      <Fade bottom><div className="mt-[8rem] lg:mt-14 h-auto lg:h-screen flex items-center justify-center">
        <div className="px-5 flex items-center justify-center flex-col lg:flex-row gap-10">
          <Fade left><div className="max-w-[500px] mx-auto">
            <Image
              src="/profile.png"
              alt="therogersak"
              objectFit="contain"
              width={900}
              height={900}
              className="rounded-md"
            />
          </div></Fade>
          <div className="max-w-[700px] mb-[3rem] mx-auto">
            <h1 className="text-[2.8rem] my-2 font-extrabold text-gray-800">
              Hi, I'm Rogers
            </h1>
            <div className="text-[1.1rem] flex flex-col gap-5 text-gray-800">
              <p>
                <span className="font-extrabold">Front-End Developer</span> from
                India. I am a strong advocate of responsive and accessible
                websites. I love challenges and I believe facing new challenges
                is the best way to grow as an Engineer.
              </p>
              <p>
                When I am not coding, I write blog posts on my{" "}
                <Link href="/blogs">
                  <a className="text-blue-800 font-medium">blog</a>
                </Link>{" "}
                or on{" "}
                <Link href="https://instagram.com/therogersak">
                  <a className="text-blue-800 font-medium">Instagram</a>
                </Link>
                . These articles cover a wide range of Frontend topics including
                React, ES6, CSS, and SASS. I love designing user interfaces with
                Figma and applying principles of UX.
              </p>
              <p>
                I also love Spirituality, listening to good music and sharing
                the good news with people.
              </p>
            </div>
          </div>
        </div>
      </div></Fade>
    </>
  );
}

export default HomePage;
