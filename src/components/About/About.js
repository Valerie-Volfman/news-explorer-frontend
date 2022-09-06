import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__avatar" />
      <div className="about__block">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          Hi! My name is Valerie, I'm a result-oriented, and highly-motivated
          FullStack Developer. I can help my clients in writing single-page
          applications using React JS from client side, and Express.js from
          server side.
        </p>
      </div>
    </section>
  );
}

export default About;
