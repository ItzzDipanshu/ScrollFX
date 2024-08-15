import React, { useState } from "react";

const Work = () => {
  const [elems, setElems] = useState([
    {
      heading: "Dipanshu Singh Rathore",
      subheading: "Lorem ipsum dolor sit.",
      video: "/effectVideo1.mp4",
      image: "/effectImg1.jpg",
    },
    {
      heading: "Dipanshu Singh Rathore",
      subheading: "Lorem ipsum dolor sit.",
      video: "/effectVideo1.mp4",
      image: "/effectImg1.jpg",
    },
    {
      heading: "Dipanshu Singh Rathore",
      subheading: "Lorem ipsum dolor sit.",
      video: "/effectVideo1.mp4",
      image: "/effectImg1.jpg",
    },
    {
      heading: "Dipanshu Singh Rathore",
      subheading: "Lorem ipsum dolor sit.",
      video: "/effectVideo1.mp4",
      image: "/effectImg1.jpg",
    },
  ]);

  return (
    <div className="relative w-full">
      <div className="max-width-screen-2xl mx-auto px-5 sm:px-10 py-20">
        <div className="featured flex gap-3">
          <svg
            data-v-669b4a84=""
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
          >
            <path
              data-v-669b4a84=""
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
            ></path>
          </svg>
          <h3 className="capitalize">featured projects</h3>
        </div>
        <div>
          <h1 className="capitalize text-6xl sm:text-[15rem] sm:leading-none sm:tracking-tight my-5">Work</h1>
          <p className="leading-2">
            Highlights of cases that we passionately build with forward-thinking
            clients and friends over the years.
          </p>
        </div>
        <div className="elements mt-10 sm:flex sm:gap-5 sm: flex-wrap">
          {elems.map((item, i) => {
            return (
              <div key={i} className="elem w-full sm:w-[48%] mt-10">
                <div className="video relative overflow-hidden w-full h-[104vw] sm:h-[50vw]">
                  <img
                    className="hidden sm:block w-full h-full object-cover"
                    src={item.image}
                    alt=""
                  />
                  <video
                    autoPlay
                    muted
                    loop
                    className="block sm:hidden w-full h-full absolute scale-[2.5] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    src={item.video}
                  ></video>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold capitalize">
                    {item.heading}
                  </h3>
                  <h3 className="capitalize opacity-65">
                    {item.subheading}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
