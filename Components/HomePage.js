import Fade from "react-reveal/Fade";
import Link from "next/link";
import Image from "next/image";
import Arrow from "./Arrow";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <Fade bottom>
        <div className="mx-auto flex justify-center flex-col home max-w-[650px] md:max-w-1xl lg:max-w-7xl">
          <div
            className="intro_text text-[3.5rem] md:text-[7vw]"
            data-text="I'm Ankit Yadav"
          >
            I&apos;m Ankit Yadav
          </div>

          <div className="max-w-4xl">
            <p className="text-gray-600">
              Frontend developer, UX architect and{" "}
              <span className="highlight__text">Javascript</span> enginner,{" "}
              <span className="highlight__text">Cyber Security</span> Expert, I
              also love <span className="highlight__text">Spirituality</span>,
              listening to good <span className="highlight__text">music</span>{" "}
              and sharing the good news with people.{" "}
            </p>

            <p className="mt-[2rem] text-gray-600">
              Working with my hands to make magic happen on the internet. View
              my{" "}
              <Link href="/projects">
                <a aria-label="Go to Projects Page">
                  <button className="btn" type="button" tabIndex="-1">
                    Projects
                  </button>
                </a>
              </Link>
              ,{" "}
              <Link href="/blogs">
                <a aria-label="Go to Articles Page And Check What I Read">
                  <button className="btn" type="button" tabIndex="-1">
                    Articles
                  </button>
                </a>
              </Link>
              ,{" "}
              <Link href="https://therogersak.github.io/Rogers-Resume/">
                <a aria-label="Go to Resume Page">
                  <button className="btn" type="button" tabIndex="-1">
                    Resume
                  </button>
                </a>
              </Link>
              ,{" "}
              <Link href="/contact">
                <a aria-label="Go to Contact Page">
                  <button className="btn" type="button" tabIndex="-1">
                    Contact Me
                  </button>
                </a>
              </Link>
              , or send me an email at{" "}
              <Link href="mailto:therogersak@gmail.com">
                <a>
                  <button
                    className="btn"
                    title="Email"
                    type="button"
                    aria-label="Send an email"
                  >
                    therogersak@gmail.com
                  </button>
                </a>
              </Link>
              .{" "}
            </p>

            <Arrow
              link="https://therogersak.github.io/Rogers-Resume/"
              title="See Resume"
            />
          </div>
        </div>
      </Fade>
    </>
  );
}

export default HomePage;
