import React from "react";
import Image from "next/image";
import Fade from "react-reveal/Fade";

function Img({ img, timestamp, classs }) {
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
        <div className="relative">
          {" "}
          <Image
            src={img}
            width={1000}
            height={1000}
            objectFit="cover"
            className={`.${classs}`}
          />
          <div className="special bg-white text-[15px] absolute bottom-3 left-2 py-[5px] px-3 rounded-md">
            {prettyDate(new Date(timestamp))}
          </div>
        </div>
      </Fade>
    </>
  );
}

export default Img;
