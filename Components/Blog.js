import Fade from 'react-reveal/Fade';
import {useRouter} from 'next/router'

function Blog({ title, id, description, index, timestamp }) {
  const router = useRouter()
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

  const readTime = (data) => {
    const wpm = 225;
    const words = data.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    return time;
  };

  return (
    <>
      <Fade top>
      <div onClick={() => {router.push(`blogs/${id}`)}}  className=" cursor-pointer transition-all duration-200 hover:bg-gray-900/40 flex flex-col justify-center  border border-gray-900 bg-gray-900/20 p-5  space-y-2 rounded-md shadow-2xl h-auto">
        <h3 className="font-bold text-md  sm:text-lg md:text-xl">{title}</h3>
        <div className="space-x-8 text-gray-300 text-sm">
          <span>{prettyDate(new Date(index ? timestamp : timestamp.toMillis()))}</span>
          <span className="dot">
            {readTime(description)} min read
          </span>
        </div>
      </div>
      </Fade>
    </>
  );
}

export default Blog;
