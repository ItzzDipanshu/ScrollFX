import React from "react";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Work from "./Components/Work";
import Playreel from "./Components/Playreel";



const App = ()=>{
  return(
    <div className="w-full ">
      <Navbar />
      <Landing />
      <Work />
      <Playreel />
    </div>
  )
}

export default App;