import React from "react";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import "lightgallery.js/dist/css/lightgallery.css";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";

function Img({ img, timestamp, group, key }) {
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
      <div className="image-list" title={prettyDate(new Date(timestamp))}>
        <LightgalleryItem
          group={group}
          src={img}
          thumb={key}
          subHtml={"Double click to zoom."}
        >
          <Image
            className="w-full object-cover"
            alt=""
            src={img}
            width={1000}
            height={1000}
          />
        </LightgalleryItem>
      </div>
    </>
  );
}

export default Img;
