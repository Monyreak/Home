import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home/home"

import Work from "./components/work/workexperience";
import Project from "./components/projects/project"
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Work />
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
