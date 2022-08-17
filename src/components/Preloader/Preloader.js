import React from "react";
import "./Preloader.css";

function Preloader() {
  return <section className="circle">
   <i className="circle-preloader" />
   <p className="circle__text">Searching for news...</p>
  </section>
}

export default Preloader;
