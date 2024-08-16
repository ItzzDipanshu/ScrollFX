import gsap, { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const ImageAnime = () => {

  const parent = useRef(null);
  const firstImg = useRef(null);
  const secondImg = useRef(null);
  const thirdImg = useRef(null);
  const forthImg = useRef(null);

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "0 25%", // here the first position defines the position of the "start" button of the marker and the second position defines the "scroller-start" button of the marker.
        scrub: 1,
        // markers: true,
      }
    })
    tl
    .to(firstImg.current, {
      x: "50%"
    }, "a")
    .to(secondImg.current, {
      x: "-50%"
    }, "a")
    .to(thirdImg.current, {
      x: "-50%"
    }, "a")
    .to(forthImg.current, {
      x: "50%"
    }, "a")
  })

  return (
    <div ref={parent} className=" w-full h-[70vh] sm:h-[150vh] bg-white flex items-center justify-center overflow-hidden">
      <div className="relative w-[40%] md:w-[30%] h-1/2 sm:h-2/3">
        <div className="absolute -right-1/3 top-5 w-16 sm:w-36 md:w-52 h-[7rem] sm:h-52 md:h-72">
            <img ref={firstImg} className="h-full w-full object-cover" src="/imageAnime2.jpg" alt="" />
        </div>
        <div ref={secondImg} className="absolute -left-1/2 top-1/3 w-[8rem] sm:w-56 md:w-96 aspect-video">
        <img className="h-full w-full object-cover" src="/imageAnime3.jpg" alt="" />
        </div>
        <div ref={thirdImg} className="absolute -left-[50%] -bottom-14 sm:-bottom-40 w-[9rem] sm:w-[60%] md:w-[100%] aspect-video">
        <img className="h-full w-full object-cover" src="/imageAnime4.jpg" alt="" />
        </div>
        <div ref={forthImg} className="absolute -right-[50%] -bottom-24 w-[8rem] sm:w-52 md:w-72 aspect-square">
        <img className="h-full w-full object-cover" src="/imageAnime5.jpg" alt="" />
        </div>
        <img
          className="h-full w-full object-cover"
          src="/imageAnime1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default ImageAnime;
