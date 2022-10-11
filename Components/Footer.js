import Fade from  "react-reveal/Fade";
import Link from "next/link";
function Footer() {
  return (
    <>
      <Fade bottom >
        <div>
          <div className="max-w-[400px] leading-6 text-sm text-gray-800 pb-5 mx-auto text-center">
            <p>
              Designed and Developed by
              <Link href="https:/github.com/therogersak" passHref>
                <a className="point px-2" rel="noopener noreferrer">
                  therogersak
                </a>
              </Link>
              Built with <span className="point"> Next.js</span> &
              <span className="point"> Tailwind Css</span>. Hosted on
              <span className="point"> Vercel</span>.
            </p>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default Footer;
