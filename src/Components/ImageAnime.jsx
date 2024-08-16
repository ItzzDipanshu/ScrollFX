import React from "react";

const ImageAnime = () => {
  return (
    <div className="w-full h-[70vh] sm:h-[150vh] bg-white flex items-center justify-center overflow-hidden">
      <div className="relative w-[40%] sm:w-[30%] h-1/2 sm:h-2/3">
        <div className="absolute -right-1/3 top-5 w-16 sm:w-52 h-[7rem] sm:h-72 bg-red-500">
            <img className="h-full w-full object-cover" src="/imageAnime2.jpg" alt="" />
        </div>
        <div className="absolute -left-1/2 top-1/3 w-[8rem] sm:w-96 aspect-video bg-red-500">
        <img className="h-full w-full object-cover" src="/imageAnime3.jpg" alt="" />
        </div>
        <div className="absolute -left-[70%] -bottom-14 sm:-bottom-40 w-[9rem] sm:w-[100%] aspect-video bg-red-500">
        <img className="h-full w-full object-cover" src="/imageAnime4.jpg" alt="" />
        </div>
        <div className="absolute -right-[50%] -bottom-24 w-[8rem] sm:w-72 aspect-square bg-red-500">
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
