import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Fade from "react-reveal/Fade";
import Link from "next/link";
function Contact() {
  return (
    <>
      <Fade right>
        <div className=" h-[60vh] md:h-[80vh] flex items-center justify-center px-10">
          <div className="flex items-center justify-center flex-col space-y-10 text-center px-[3rem]">
            <h1 className="lg:text-[3vw] text-[7vw] font-extrabold">Keep In Touch.</h1>
            <p className="max-w-[400px] text-gray-400 leading-6">
              I'm currently specializing in
              <span className="point"> Front-end</span> Development. Feel free
              to get in touch and talk more about your projects.
            </p>
            <div className="flex items-center space-x-5 overflow-x-scroll">
              <Link href="https://linkedin.com/in/therogersak">
                <a className="btn" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon /> <span>Linkedin</span>
                </a>
              </Link>

              <Link href="mailto:therogersak@gmail.com">
                <a className="btn" target="_blank" rel="noopener noreferrer" >
                  <EmailOutlinedIcon /> <span>Email</span>
                </a>
              </Link>

              <Link href="https://therogersak.github.io/Rogers-Resume/">
                <a className="btn" target="_blank" rel="noopener noreferrer">
                  <DescriptionOutlinedIcon /> <span>Resume</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default Contact;
