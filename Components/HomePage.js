import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";
import Link from "next/link";

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
      <Fade bottom collapse>
        <div className="flex items-center h-[85vh]">
          <div className="flex flex-col space-y-7 px-5  sm:pl-10 lg:pl-[9rem]">
            <div className=" relative -mb-4 md:-mb-8">
              <Roll bottom>
                <span className="text-[#3CCF91] text-lg  md:text-xl left-0  font-bold absolute md:-top-4 md:-left-2 -top-7 rotate-6">
                  Hey there!, I'm
                </span>
              </Roll>
              <h1 className="text-[11vw] md:text-[7.8vw]   font-extrabold text-white ">
                Ankit <span>Yadav.</span>
              </h1>
            </div>
            <Fade bottom>
              <p className="font-bold text-lg sm:text-xl  md:text-2xl max-w-2xl">
                Software Enginner.
                <span className="text-gray-400 pl-2">
                  A self-taught devloper with an interest in
                </span>
                <span> Computer Science</span>
              </p>
            </Fade>

            <div className="space-y-3 text-gray-200 text-sm  md:text-lg">
              <p>🚀 Exploring opportunities and side projects.</p>
              <p>
                💻 Currently building Unsplash Clone
                <Link href="/">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" bg-gradient-to-r from-orange-500 to-[#3CCF91] text-transparent bg-clip-text  font-bold pl-2"
                  >
                    Click Here
                  </a>
                </Link>
                .
              </p>
            </div>
            <div className="flex  space-x-5 md:space-x-6  flex-wrap  gap-y-6">
              <Link href="https://github.com/therogersak">
                <a target="_blank" rel="noopener noreferrer">
                  <button className="btn">
                    <GitHubIcon />
                    <span className="hidden sm:block">Github</span>
                  </button>
                </a>
              </Link>
              <Link href="https://linkedin.com/in/therogersak">
                <a target="_blank" rel="noopener noreferrer">
                  <button className="btn">
                    <LinkedInIcon />
                    <span className="hidden sm:block">Linkedin</span>
                  </button>
                </a>
              </Link>
              <Link href="https://instagram.com/therogersak">
                <a target="_blank" rel="noopener noreferrer">
                  <button className="btn">
                    <InstagramIcon />
                    <span className="hidden sm:block">Instagram</span>
                  </button>
                </a>
              </Link>

              <button className="btn" onClick={() => share()}>
                <ShareOutlinedIcon />
                <span className="hidden sm:block">Share</span>
              </button>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default HomePage;
