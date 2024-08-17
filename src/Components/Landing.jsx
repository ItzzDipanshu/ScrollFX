import React, { useEffect, useRef } from "react";
import { motion, stagger } from "framer-motion";
import gsap, { Power4, ScrollTrigger } from "gsap/all";

const Landing = () => {

  return (
    <div className="relative w-full h-[140vh] sm:h-[200vh] md:h-[250vh]">

        {/* As we know, a negative value slows down the speed of the element to which the data-scroll-speed attribute is applied. In the scenario below, we applied data-scroll specifically to the image tag rather than the entire div. This is because, if applied to the div, it would cause the div to move slowly, resulting in the next section overlapping and disrupting the layout. To prevent this, we applied data-scroll to the image itself and set the div to overflow: hidden. Without the overflow setting, the image could extend beyond the div’s boundaries, creating an undesirable visual effect. With the overflow: hidden in place, any part of the image that moves slower and extends outside the div will be hidden, ensuring a clean and appealing appearance. */}

      <div className="picture w-full h-full overflow-hidden">
        <img
          data-scroll
          data-scroll-speed="-1"
          className="w-full h-full object-cover"
          src="/landingBG.jpg"
          alt=""
        />
      </div>
      <div className="w-full absolute top-0">
        {" "}
        {/* after applying the absolute property to the below div. the max-w-screen-2xl property won't work. That's why we had made an another div for the absolute property. */}
        <div className="text max-w-screen-2xl h-full mx-auto px-5 md:px-10 text-white">
          <div className="para mt-56 sm:mt-[15rem]">
            {[
              "I am a passionate front-end developer",
              "focused on creating visually engaging and",
              "responsive web experiences. Currently, I'm",
              "deepening my skills in GSAP animations",
              "to bring interactive elements to my projects.",
            ].map((info, index) => {
              return (
                <p
                  key={index}
                  className="font-semibold sm:text-2xl md:text-4xl sm:font-light overflow-hidden"
                >
                  <motion.span
                    initial={{ rotate: 90, y: "100%", opacity: 0 }}
                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      duration: 0.9,
                      delay: index * 0.1,
                    }}
                    className="inline-block origin-left pb-1"
                  >
                    {info}
                  </motion.span>
                </p>
              );
            })}
          </div>
          <div className="headings mt-5 md:mt-10">
            {["Captivating", "Digital", "Experiences"].map((item,i)=>{
                return <h1 key={i} className="text-6xl sm:text-9xl md:text-[15rem] sm:font-light tracking-tighter leading-none overflow-hidden pb-11">
                <motion.span
                  initial={{ rotate: 90, y: "100%", opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1}}
                  transition={{ease: [0.22, 1, 0.36, 1], duration: 1, delay: 1+i * 0.2}}
                  className="inline-block origin-left"
                >
                  {item}
                </motion.span>
              </h1>
            })}
            
          </div>
          <div className="para2 md:w-1/3 mt-10 md:mt-20">
            <p className="sm:text-xl">I am committed to bringing innovative</p>
            <p className="sm:text-xl">
              ideas by creating engaging, user-centric
            </p>
            <p className="sm:text-xl">
              web applications. Unforgettable journeys
            </p>
            <p className="sm:text-xl">start with a click.</p>
            <a
              className="sm:text-xl border-b-[.3px] sm:border-b-[1px] border-zinc-100 pb-1 mt-10 inline-block"
              href="#"
            >
              Begin Now
            </a>{" "}
            {/* a tags are inline tags so we had made it inline-block for applying the padding otherwise the padding won't work */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
