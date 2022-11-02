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
            router.push(`blogs/${slug.current}`);
          }}
          className=" cursor-pointer transition-all duration-150 border flex flex-col justify-center  p-5  space-y-2 rounded-md h-auto  hover:border-green-400"
        >
          <h3 className="font-bold text-md text-white  sm:text-lg md:text-xl">{title}</h3>
          <div className="space-x-8 text-gray-500 text-sm">
            <span>{prettyDate(new Date(index ? timestamp : timestamp))}</span>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default Blog;
