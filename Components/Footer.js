import Fade from "react-reveal/Fade";
import Link from "next/link";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Footer() {
  return (
    <>
      <Fade bottom>
        <footer className="footer lg:max-w-7xl mx-auto">
          <Link href="https://twitter.com/raoankittt">
            <a
              className="p-3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Go To Ankit Yadav Twitter Page"
              title="Twitter Page"
            >
              <TwitterIcon />
            </a>
          </Link>

          <Link href="https://facebook.com/therogersak">
            <a
              className="p-3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Go To Ankit Yadav Facebook Page"
              title="Facebook Page"
            >
              <FacebookOutlinedIcon />
            </a>
          </Link>

          <Link href="https://linkedin.com/in/raoankittt">
            <a
              className="p-3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Go To Ankit Yadav Linkedin Page"
              title="Linkedin Page"
            >
              <LinkedInIcon />
            </a>
          </Link>
          <Link href="https://github.com/raoankittt">
            <a
              className="p-3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Go To Ankit Yadav Github Page"
              title="Github Page"
            >
              <GitHubIcon />
            </a>
          </Link>

          <Link href="https://instagram.com/raoankittt">
            <a
              className="p-3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Go To Ankit Yadav Instagram Page"
              title="Instagram Page"
            >
              <InstagramIcon />
            </a>
          </Link>

          <Link href="https://youtube.com/@therogersak">
            <a
              className="p-3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Go To Ankit Yadav Youtube Page"
              title="Youtube Page"
            >
              <YouTubeIcon />
            </a>
          </Link>
        </footer>
      </Fade>
    </>
  );
}

export default Footer;
