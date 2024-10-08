import gsap, { Power4, ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Playreel = () => {
  const videoDiv = useRef(null);
  const parent = useRef(null);
  const play = useRef(null);
  const reel = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); //This line is used to register the ScrollTrigger plugin with GSAP
    var tl = gsap.timeline({ //Writing the scrollTrigger code inside the gsap.timeline is a way to synchronize multiple animations with the scroll position.
      scrollTrigger: {
        trigger: parent.current,
        start: "0 0",
        pin: true,
        scrub: 1,
        // markers: true,
      },
    });
    tl.to(
      videoDiv.current,
      {
        width: "80%",
        height: "60%",
        ease: Power4,
      },
      "a"
    )
      .to(
        play.current,
        {
          x: "90%",
          scale: 1.5,
        },
        "a"
      )
      .to(
        reel.current,
        {
          x: "-90%",
          scale: 1.5,
        },
        "a"
      );
    // Here in the above example we had passed the same flag i.e... "a"(kuch bhi naam de sakte hai) becoz after applying timeline our effects will execute one by one and we don't want that, We want ki humare effects same time prr chale. That's why I have passed the same flag in three effects.
  });

  return (
    <div
      ref={parent}
      className="w-full h-[100vh] overflow-hidden relative bg-[#0D0E13]"
    >
      <div
        ref={videoDiv}
        className="w-36 sm:w-96 overflow-hidden aspect-video absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <video
          autoPlay
          muted
          loop
          className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.2]"
          src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"
        ></video>
      </div>
      <div className="overlay absolute w-full h-full text-white flex flex-col justify-between items-center py-20">
        <div className="w-full flex justify-center items-center gap-3">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h3 className="text-sm">Creative Effect</h3>
        </div>
        <h1 className="w-full flex justify-center items-center gap-24 sm:gap-96">
          <div ref={play} className="text-4xl sm:text-8xl font-light">
            Play
          </div>
          <div ref={reel} className="text-4xl sm:text-8xl font-light">
            Reel
          </div>
        </h1>
        <p className="px-10 text-xs text-center">
          This video has been sourced from the internet for the purpose of
          enhancing the content of this project.
        </p>
      </div>
    </div>
  );
};

export default Playreel;
