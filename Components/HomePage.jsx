import Fade from "react-reveal/Fade";
import Link from "next/link";
import Arrow from "./Arrow";
import { RoughNotation } from "react-rough-notation";

function HomePage() {
  return (
    <>
      <Fade bottom>
        <div className="mx-auto flex justify-center flex-col home max-w-[650px] md:max-w-1xl lg:max-w-7xl mt-[2rem] sm:mt-[0]">
          <div
            className="intro_text text-[3.5rem] md:text-[7vw]"
            data-text="I'm Ankit Yadav"
          >
            I&apos;m Ankit Yadav
          </div>

          <div className="max-w-4xl">
            <p className="text-gray-600 size">
              Full Stack Developer 💻 , UX architect and{" "}
              <RoughNotation
                type="highlight"
                show={true}
                color="#F0DB4F"
                animationDelay={300}
                animationDuration={500}
                padding={10}
                className="highlight__text text-[#323330]"
              >
                Javascript
              </RoughNotation>{" "}
              engineer, <span className="highlight__text">Developer</span>{" "}
              Expert, I also love <span className="highlight__text">Anime</span>
              , listening to good <span className="highlight__text">Music</span>{" "}
              and sharing the good news with people.{" "}
            </p>

            <p className="mt-[2rem] text-gray-600 size">
              A minimalist obsessed with the web world, exploring design with
              curiosity. View my{" "}
              <Link href="/projects">
                <a aria-label="Go to Projects Page">
                  <button className="btn" type="button" tabIndex="-1">
                    Projects
                  </button>
                </a>
              </Link>
              ,{" "}
              <Link href="/articles">
                <a aria-label="Go to Articles Page And Check What I Read">
                  <button className="btn" type="button" tabIndex="-1">
                    Articles
                  </button>
                </a>
              </Link>
              ,{" "}
              <Link href="https://drive.google.com/file/d/1Bl7r6c7SARKUgcfqnXygmxSeSsvqTM_6/view?usp=sharing">
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

            <Arrow link="https://github.com/raoankitx" title="Github" />
          </div>
        </div>
      </Fade>
    </>
  );
}
export default HomePage;
