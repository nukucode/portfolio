import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig/Firebase";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Image from "next/image";
function Blog({ result }) {
  console.log(result);

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JSON.parse(result));
  }, [result]);

  console.log(data);

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
      <div className="bg-black">
        <Header />
        <div className="max-w-4xl mt-[5rem] mx-auto text-white px-5 sm:px-10">
          {data.map((data,i) => (
            <div className="space-y-5" key={i}>
              <h1 className=" text-[1.8rem] md:text-[2.5rem] max-w-[600px] font-extrabold">
                {data?.title}
              </h1>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Image
                    src={data?.author_img}
                    width={30}
                    height={30}
                    alt="author_img"
                    className="rounded-full"
                    objectFit="cover"
                  />

                  <p className="text-gray-400 text-sm">
                    <span>{data?.author} /</span>
                    <span>{prettyDate(new Date(data.timestamp))}</span>
                  </p>
                </div>

                <div className="text-sm text-gray-300">
                  {readTime(data.description)} min read
                </div>
              </div>

              <div>
                <Image src={data.img} objectFit="contain"  width={900} height={700} alt={data.title}  className="border rounded-md border-gray-400 shadow-2xl" />
              </div>

              <div className="pb-5 leading-8 text-gray-400">
                {
                  data.description
                }
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Blog;

export async function getServerSideProps({ params: { blog } }) {
  const results = [];
  console.log(blog);
  const docRef = doc(db, "blogs", blog);
  const data = await getDoc(docRef);

  results.push({
    ...data.data(),
    timestamp: data.data().timestamp.toMillis(),
  });

  return {
    props: {
      result: JSON.stringify(results),
    },
  };
}
