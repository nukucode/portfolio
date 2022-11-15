import Fade from "react-reveal/Fade";
import Link from "next/link";
import Image from "next/image";

function HomePage() {
  
  return (
    <>
      <Fade bottom>
        <div className="mb-[5rem] h-auto flex items-center justify-center">
          <div className="px-5 flex items-center justify-center flex-col lg:flex-row gap-10">
            <Fade left>
              <div className="max-w-[500px] mx-auto md:mt-[6rem]">
                <Image
                  src="/profile.png"
                  alt="therogersak"
                  objectFit="contain"
                  width={1000}
                  height={1000}
                />
              </div>
            </Fade>
            <div className="max-w-[700px] mb-[3rem] mx-auto md:mt-0 mt-[-6rem]">
              <h1 className="text-[2.8rem] my-2 font-extrabold text-white">
                Hi, I'm Rogers
              </h1>
              <div className="text-[1.1rem] flex flex-col gap-5 text-gray-400">
                <p>
                  I am a{" "}
                  <span className="font-extrabold text-gray-200">Front-End Developer</span>{" "}
                  from India. I am a strong advocate of responsive and
                  accessible websites. I love challenges and I believe facing
                  new challenges is the best way to grow as an Engineer.
                </p>
                <p>
                  When I am not coding, I write blog posts on my{" "}
                  <Link href="/blogs">
                    <a className="text-green-400 font-bold hover:border-b duration-200 transition-all hover:border-green-500">blog</a>
                  </Link>{" "}
                  or on{" "}
                  <Link href="https://instagram.com/therogersak">
                    <a className="text-green-400 font-bold hover:border-b duration-200 transition-all hover:border-green-500">Instagram</a>
                  </Link>
                  . These articles cover a wide range of Frontend topics
                  including React, ES6, CSS, and SASS. I love designing user
                  interfaces with Figma and applying principles of UX.
                </p>
                <p>
                  I also love Spirituality, listening to good music and sharing
                  the good news with people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default HomePage;
