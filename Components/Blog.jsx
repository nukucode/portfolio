import Fade from "react-reveal/Fade";
import { useRouter } from "next/router";

function Blog({ title, id, body, slug, index, timestamp }) {
  console.log(body);
  console.log(slug);
  const router = useRouter();
  function prettyDate(date) {
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return (
      months[date.getUTCMonth()] +
      " " +
      date.getUTCDate() +
      ", " +
      date.getUTCFullYear()
    );
  }

  return (
    <>
      <Fade top>
        <div
          onClick={() => {
            router.push(`articles/${slug.current}`);
          }}
          className=" cursor-pointer transition-all duration-150 border-2 flex flex-col justify-center  p-5  space-y-2 rounded-md h-auto  hover:border-black"
        >
          <h3 className="font-bold text-md text-black  sm:text-lg md:text-xl">
            {title}
          </h3>
          <div className="space-x-8 text-gray-500 text-sm">
            <span>{prettyDate(new Date(index ? timestamp : timestamp))}</span>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default Blog;
