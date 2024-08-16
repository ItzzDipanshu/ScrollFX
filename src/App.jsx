import React from "react";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Work from "./Components/Work";
import Playreel from "./Components/Playreel";
import ImageAnime from "./Components/ImageAnime";
import LocomotiveScroll from 'locomotive-scroll';



const App = ()=>{
  const locomotiveScroll = new LocomotiveScroll();



  return(
    <div className="w-full ">
      <Navbar />
      <Landing />
      <Work />
      <Playreel />
      <ImageAnime />
    </div>
  )
}

export default App;